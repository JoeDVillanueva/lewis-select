# Lewis Select

Marketing site for Lewis Select — a private concierge medical practice in Dripping Springs, TX.

See `BUILD_SPEC.md` for the full build specification, `CONTENT.md` for all user-facing copy, and `CHANGELOG.md` for what shipped when.

Currently on **v3.5** — gold medallion brand mark, `<PillarFull />` legibility pass, and the Inaugural Cohort variant on `/start-a-conversation` (active until **2026-07-01**, then reverts to the standard "Start a Conversation" copy via a server-side date gate).

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
