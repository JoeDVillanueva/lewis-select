# Lewis Select

Marketing site for Lewis Select — a private concierge medical practice in Dripping Springs, TX.

See `BUILD_SPEC.md` for the full build specification, `CONTENT.md` for all user-facing copy, and `CHANGELOG.md` for what shipped when.

Currently on **v3.7** — homepage `<EmpathyBlock />` restructured into two parallel Hook + body pairs (problem → promise), and a full homepage copy pass against the canonical `CONTENT.md` §01 (Hero body, Philosophy quote, both Empathy bodies, Differentiators eyebrow + intro + items 01–04, Three Pillars 01–03, Your physician body, Who it's for body). No token or IA changes. Approach, About, Inaugural, Nav, and Footer untouched from v3.6.

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
