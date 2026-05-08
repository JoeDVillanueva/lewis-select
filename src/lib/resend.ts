/**
 * Resend client + email composer for the Start-a-Conversation form.
 * v3.5 — payload now matches the seven-essential-questions form
 * (BUILD_SPEC.md §7.2). Variant flag distinguishes Inaugural Cohort
 * inquiries from post-launch standard submissions.
 */

import { Resend } from "resend";

export type ConversationPayload = {
  variant: "inaugural" | "postLaunch";
  name: string;
  email: string;
  phone: string;
  contactMethod?: "phone" | "text" | "email";
  connection: string;
  introducedBy?: string;
  residence: string;
  secondHome?: string;
  household: string[];
  dependentsCount?: number;
  prompt: string;
  /** ISO timestamp of submission. */
  submittedAt: string;
  /** IP address with the last octet redacted (e.g. "203.0.113.x"). */
  redactedIp: string;
};

let cachedClient: Resend | null = null;

function client(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not set.");
  }
  if (!cachedClient) cachedClient = new Resend(key);
  return cachedClient;
}

function escape(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined): string {
  if (!value) return "";
  const escaped = escape(value).replace(/\n/g, "<br>");
  return `
    <tr>
      <td style="padding:10px 16px 10px 0;border-bottom:0.5px solid #D8D0C2;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#A87E36;width:200px;vertical-align:top;">${escape(label)}</td>
      <td style="padding:10px 0;border-bottom:0.5px solid #D8D0C2;font-family:'DM Sans',sans-serif;font-size:14px;color:#1A1714;line-height:1.6;">${escaped}</td>
    </tr>`;
}

const CONNECTION_LABELS: Record<string, string> = {
  driftwood: "Member of Driftwood Golf & Lake Club",
  referred: "Referred by a current patient or friend",
  event: "Met at an event",
  self: "Came across Lewis Select on my own",
};

const CONTACT_LABELS: Record<string, string> = {
  phone: "Phone call",
  text: "Text",
  email: "Email",
};

const HOUSEHOLD_LABELS: Record<string, string> = {
  self: "Just me",
  spouse: "Spouse or partner",
  dependents: "Dependents under 25",
};

function describeFields(p: ConversationPayload): Array<[string, string | undefined]> {
  const phoneCell =
    p.contactMethod
      ? `${p.phone}  ·  Best way: ${CONTACT_LABELS[p.contactMethod] ?? p.contactMethod}`
      : p.phone;

  const connection = CONNECTION_LABELS[p.connection] ?? p.connection;
  const connectionCell = p.introducedBy
    ? `${connection}\nIntroduced by: ${p.introducedBy}`
    : connection;

  const residenceCell = p.secondHome
    ? `${p.residence}\nSecond home: ${p.secondHome}`
    : p.residence;

  const household = p.household.map((v) => HOUSEHOLD_LABELS[v] ?? v).join(", ");
  const householdCell =
    p.household.includes("dependents") && p.dependentsCount
      ? `${household}  (${p.dependentsCount} dependent${p.dependentsCount === 1 ? "" : "s"})`
      : household;

  return [
    ["Name", p.name],
    ["Email", p.email],
    ["Phone", phoneCell],
    ["Connection to Dr. Lewis", connectionCell],
    ["Where they'd receive care", residenceCell],
    ["Who the membership covers", householdCell],
    ["What prompted the inquiry", p.prompt],
    ["Variant", p.variant === "inaugural" ? "Inaugural Cohort inquiry" : "Post-launch standard"],
    ["Submitted at", p.submittedAt],
    ["From IP", p.redactedIp],
  ];
}

export function composeEmailHtml(p: ConversationPayload): string {
  const fields = describeFields(p);
  const eyebrow =
    p.variant === "inaugural"
      ? "New Inaugural Cohort inquiry"
      : "New conversation request";
  return `<!doctype html>
<html><body style="margin:0;padding:32px;background:#F6F3EE;color:#1A1714;font-family:'DM Sans',Arial,sans-serif;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border:0.5px solid #D8D0C2;padding:36px 40px;">
    <p style="margin:0;font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#A87E36;">${escape(eyebrow)}</p>
    <h1 style="margin:8px 0 24px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-size:30px;color:#0F2744;line-height:1.2;">${escape(p.name)}</h1>
    <table style="width:100%;border-collapse:collapse;border-top:0.5px solid #D8D0C2;">
      ${fields.map(([k, v]) => row(k, v)).join("")}
    </table>
    <p style="margin-top:28px;font-size:12px;color:#4A443F;line-height:1.7;">Reply directly to this email to reach the prospect — Reply-To has been set to their submitted address.</p>
  </div>
</body></html>`;
}

export function composeEmailText(p: ConversationPayload): string {
  const subjectKind =
    p.variant === "inaugural" ? "Inaugural Cohort inquiry" : "conversation request";
  const lines = [
    `New ${subjectKind} — ${p.name}`,
    "",
    `Name:                  ${p.name}`,
    `Email:                 ${p.email}`,
    `Phone:                 ${p.phone}` +
      (p.contactMethod ? `  (best: ${CONTACT_LABELS[p.contactMethod] ?? p.contactMethod})` : ""),
    `Connection:            ${CONNECTION_LABELS[p.connection] ?? p.connection}` +
      (p.introducedBy ? `  (introduced by: ${p.introducedBy})` : ""),
    `Where they'd be seen:  ${p.residence}` +
      (p.secondHome ? `  (second home: ${p.secondHome})` : ""),
    `Membership covers:     ${p.household
      .map((v) => HOUSEHOLD_LABELS[v] ?? v)
      .join(", ")}` +
      (p.household.includes("dependents") && p.dependentsCount
        ? `  (${p.dependentsCount} dependents)`
        : ""),
    "",
    "What prompted the inquiry:",
    p.prompt,
    "",
    `Variant:               ${p.variant}`,
    `Submitted at:          ${p.submittedAt}`,
    `From IP:               ${p.redactedIp}`,
  ];
  return lines.join("\n");
}

export async function sendConversationEmail(payload: ConversationPayload): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEWIS_NOTIFICATION_EMAIL;
  if (!from) throw new Error("RESEND_FROM_EMAIL is not set.");
  if (!to) throw new Error("LEWIS_NOTIFICATION_EMAIL is not set.");

  const resend = client();
  const subjectKind =
    payload.variant === "inaugural" ? "Inaugural Cohort inquiry" : "conversation request";
  const subject = `New ${subjectKind} — ${payload.name}`;

  const { error } = await resend.emails.send({
    from: `Lewis Select Website <${from}>`,
    to,
    replyTo: payload.email,
    subject,
    html: composeEmailHtml(payload),
    text: composeEmailText(payload),
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.message ?? "unknown error"}`);
  }
}
