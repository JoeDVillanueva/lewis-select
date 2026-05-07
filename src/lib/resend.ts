/**
 * Resend client + email composer for the Start-a-Conversation form.
 * See BUILD_SPEC.md §7 for the spec.
 */

import { Resend } from "resend";

export type ConversationPayload = {
  name: string;
  phone: string;
  email: string;
  location?: string;
  family?: string;
  referral?: string;
  notes?: string;
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
      <td style="padding:10px 16px 10px 0;border-bottom:0.5px solid #D8D0C2;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#B8955A;width:180px;vertical-align:top;">${escape(label)}</td>
      <td style="padding:10px 0;border-bottom:0.5px solid #D8D0C2;font-family:'DM Sans',sans-serif;font-size:14px;color:#1A1714;line-height:1.6;">${escaped}</td>
    </tr>`;
}

export function composeEmailHtml(p: ConversationPayload): string {
  const fields: Array<[string, string | undefined]> = [
    ["Name", p.name],
    ["Phone", p.phone],
    ["Email", p.email],
    ["Where they live", p.location],
    ["Family composition", p.family],
    ["How they heard", p.referral],
    ["Notes", p.notes],
    ["Submitted at", p.submittedAt],
    ["From IP", p.redactedIp],
  ];
  return `<!doctype html>
<html><body style="margin:0;padding:32px;background:#F6F3EE;color:#1A1714;font-family:'DM Sans',Arial,sans-serif;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border:0.5px solid #D8D0C2;padding:36px 40px;">
    <p style="margin:0;font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#B8955A;">New conversation request</p>
    <h1 style="margin:8px 0 24px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-size:30px;color:#0F2744;line-height:1.2;">${escape(p.name)}</h1>
    <table style="width:100%;border-collapse:collapse;border-top:0.5px solid #D8D0C2;">
      ${fields.map(([k, v]) => row(k, v)).join("")}
    </table>
    <p style="margin-top:28px;font-size:12px;color:#6B6560;line-height:1.7;">Reply directly to this email to reach the prospect — Reply-To has been set to their submitted address.</p>
  </div>
</body></html>`;
}

export function composeEmailText(p: ConversationPayload): string {
  const lines = [
    `New conversation request — ${p.name}`,
    "",
    `Name:               ${p.name}`,
    `Phone:              ${p.phone}`,
    `Email:              ${p.email}`,
  ];
  if (p.location) lines.push(`Where they live:    ${p.location}`);
  if (p.family) lines.push(`Family composition: ${p.family}`);
  if (p.referral) lines.push(`How they heard:     ${p.referral}`);
  if (p.notes) {
    lines.push("", "Notes:", p.notes);
  }
  lines.push("", `Submitted at:       ${p.submittedAt}`, `From IP:            ${p.redactedIp}`);
  return lines.join("\n");
}

export async function sendConversationEmail(payload: ConversationPayload): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEWIS_NOTIFICATION_EMAIL;
  if (!from) throw new Error("RESEND_FROM_EMAIL is not set.");
  if (!to) throw new Error("LEWIS_NOTIFICATION_EMAIL is not set.");

  const resend = client();
  const subject = `New conversation request — ${payload.name}`;

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
