import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { sendConversationEmail, type ConversationPayload } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 1000;
const MAX_PROMPT = 4000;

type FieldKey =
  | "name"
  | "email"
  | "phone"
  | "connection"
  | "residence"
  | "household"
  | "prompt";
type FieldErrors = Partial<Record<FieldKey, string>>;

type Submission = {
  variant: "inaugural" | "postLaunch";
  name: string;
  email: string;
  phone: string;
  connection: string;
  introducedBy?: string;
  residence: string;
  household: string[];
  dependentsCount?: number;
  prompt: string;
  _company?: string;
};

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "0.0.0.0";
}

function redactIp(ip: string): string {
  if (ip.includes(":")) {
    const parts = ip.split(":");
    parts[parts.length - 1] = "x";
    return parts.join(":");
  }
  const parts = ip.split(".");
  if (parts.length === 4) {
    parts[3] = "x";
    return parts.join(".");
  }
  return "redacted";
}

function asString(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length ? t : undefined;
}

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) {
    const single = asString(v);
    return single ? [single] : [];
  }
  return v
    .map((x) => (typeof x === "string" ? x.trim() : ""))
    .filter((x) => x.length > 0);
}

function asNumber(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

function validate(s: Submission): FieldErrors {
  const errors: FieldErrors = {};
  if (!s.name || s.name.length < 2) errors.name = "Please enter your name.";
  if (!s.email || !EMAIL_RE.test(s.email)) errors.email = "Please enter a valid email address.";
  if (!s.phone || s.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!s.connection) errors.connection = "Please choose one.";
  if (!s.residence) errors.residence = "Please tell us where you'd primarily receive care.";
  if (!s.household.length) errors.household = "Please select at least one.";
  if (!s.prompt || s.prompt.length < 2) {
    errors.prompt = "A few sentences is enough — please share what's on your mind.";
  }
  return errors;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const variant = raw.variant === "postLaunch" ? "postLaunch" : "inaugural";
  const submission: Submission = {
    variant,
    name: asString(raw.name) ?? "",
    email: asString(raw.email) ?? "",
    phone: asString(raw.phone) ?? "",
    connection: asString(raw.connection) ?? "",
    introducedBy: asString(raw.introducedBy),
    residence: asString(raw.residence) ?? "",
    household: asStringArray(raw.household),
    dependentsCount: asNumber(raw.dependentsCount),
    prompt: asString(raw.prompt) ?? "",
    _company: asString(raw._company),
  };

  // Honeypot — drop silently with 200.
  if (submission._company) {
    return NextResponse.json({ ok: true });
  }

  const oversize =
    submission.name.length > MAX_FIELD ||
    submission.email.length > MAX_FIELD ||
    submission.phone.length > MAX_FIELD ||
    submission.connection.length > MAX_FIELD ||
    (submission.introducedBy?.length ?? 0) > MAX_FIELD ||
    submission.residence.length > MAX_FIELD ||
    submission.household.join(",").length > MAX_FIELD ||
    submission.prompt.length > MAX_PROMPT;
  if (oversize) {
    return NextResponse.json({ error: "Submission is too large." }, { status: 400 });
  }

  const fields = validate(submission);
  if (Object.keys(fields).length) {
    return NextResponse.json(
      { error: "Please correct the marked fields.", fields },
      { status: 400 },
    );
  }

  const ip = clientIp(req);
  const rl = rateLimit(`conversation:${ip}`, 3, 10 * 60 * 1000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many submissions from this network. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } },
    );
  }

  const payload: ConversationPayload = {
    variant: submission.variant,
    name: submission.name,
    email: submission.email,
    phone: submission.phone,
    connection: submission.connection,
    introducedBy: submission.introducedBy,
    residence: submission.residence,
    household: submission.household,
    dependentsCount: submission.dependentsCount,
    prompt: submission.prompt,
    submittedAt: new Date().toISOString(),
    redactedIp: redactIp(ip),
  };

  try {
    await sendConversationEmail(payload);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "send failed";
    console.error("[conversation] send failed:", msg);
    return NextResponse.json(
      { error: "We could not send your inquiry just now. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
