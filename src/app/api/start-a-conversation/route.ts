import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { sendConversationEmail, type ConversationPayload } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 1000;
const MAX_NOTES = 4000;

type FieldKey = "name" | "phone" | "email";
type FieldErrors = Partial<Record<FieldKey, string>>;

type Submission = {
  name: string;
  phone: string;
  email: string;
  location?: string;
  family?: string;
  referral?: string;
  notes?: string;
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
  // IPv4: replace last octet. IPv6: replace last group.
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

function validate(s: Submission): FieldErrors {
  const errors: FieldErrors = {};
  if (!s.name || s.name.length < 2) errors.name = "Please enter your name.";
  if (!s.phone || s.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!s.email || !EMAIL_RE.test(s.email)) errors.email = "Please enter a valid email address.";
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
  const submission: Submission = {
    name: asString(raw.name) ?? "",
    phone: asString(raw.phone) ?? "",
    email: asString(raw.email) ?? "",
    location: asString(raw.location),
    family: asString(raw.family),
    referral: asString(raw.referral),
    notes: asString(raw.notes),
    _company: asString(raw._company),
  };

  // Honeypot — if filled, drop silently with 200.
  if (submission._company) {
    return NextResponse.json({ ok: true });
  }

  // Bound input sizes so a single submission can't ship a payload bomb.
  const oversize =
    submission.name.length > MAX_FIELD ||
    submission.phone.length > MAX_FIELD ||
    submission.email.length > MAX_FIELD ||
    (submission.location?.length ?? 0) > MAX_FIELD ||
    (submission.family?.length ?? 0) > MAX_FIELD ||
    (submission.referral?.length ?? 0) > MAX_FIELD ||
    (submission.notes?.length ?? 0) > MAX_NOTES;
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

  // Rate limit: 3 submissions per 10 minutes per IP.
  const ip = clientIp(req);
  const rl = rateLimit(`conversation:${ip}`, 3, 10 * 60 * 1000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many submissions from this network. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } },
    );
  }

  const payload: ConversationPayload = {
    name: submission.name,
    phone: submission.phone,
    email: submission.email,
    location: submission.location,
    family: submission.family,
    referral: submission.referral,
    notes: submission.notes,
    submittedAt: new Date().toISOString(),
    redactedIp: redactIp(ip),
  };

  try {
    await sendConversationEmail(payload);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "send failed";
    // Log to server console only — don't leak to client.
    console.error("[conversation] send failed:", msg);
    return NextResponse.json(
      { error: "We could not send your note just now. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
