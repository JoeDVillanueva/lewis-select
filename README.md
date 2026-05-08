# Lewis Select

Marketing site for Lewis Select — a private concierge medical practice in Dripping Springs, TX.

See `BUILD_SPEC.md` for the full build specification, `CONTENT.md` for all user-facing copy, and `CHANGELOG.md` for what shipped when.

Currently on **v3.6** — route renamed to `/inaugural` (308 redirect from the old `/start-a-conversation`), site-wide primary CTA now reads "Join The Inaugural" until **2026-07-01**, hero promotes the launch date, the personal note becomes a centered letter from Dr. Lewis with a portrait slot, and the form drops three secondary fields (the "best way to reach you" radio, the second-home input, and renames "Dependents under 25" → "Other family members"). Footer drops the unfilled "Connect" column and the brand paragraph is rewritten.

## Stack

- Next.js 14 (App Router, TypeScript, RSC by default)
- CSS Modules + a single global stylesheet for tokens
- `next/font` (self-hosted Cormorant Garamond + DM Sans)
- Resend for the contact form
- Vercel for hosting

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in Resend keys when ready
npm run dev
```

Open http://localhost:3000.

## Routes

- `/` — Home
- `/approach` — Approach
- `/about` — Dr. Kevin Lewis
- `/start-a-conversation` — Contact form
- `/privacy` — Notice of Privacy Practices placeholder

## Environment variables

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key, server-only |
| `RESEND_FROM_EMAIL` | verified sender, e.g. `site@lewisselect.com` |
| `LEWIS_NOTIFICATION_EMAIL` | where the form submission lands |
| `LEWIS_FALLBACK_EMAIL` | shown to users on form error |
