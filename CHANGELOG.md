# Changelog

All notable changes to the Lewis Select marketing site. The build spec
(`BUILD_SPEC.md`) is the canonical source for design and IA decisions; this file
captures what shipped and when.

## v3.5 — 2026-05-08

Brand mark, Approach legibility pass, and the Inaugural Cohort entry on
`/start-a-conversation`.

### Brand mark
- New gold ornamental medallion replaces the placeholder mark
  (`public/logo-mark.png`, derived from `LewisSelect_Logo1.png`).
- Generated `public/favicon.ico`, `public/favicon-32.png`, and
  `public/apple-touch-icon.png` (180×180) from the same source.
- `<Nav />` renders the mark at 36×36 with 12px right margin against the
  wordmark; scales to 30×30 on scroll-shrink.
- `<Footer />` renders the mark at 44×44 with 14px right margin against
  the wordmark.
- Favicons wired through `siteMetadata` so every page emits the proper
  `<link rel="icon">` and `<link rel="apple-touch-icon">` tags.

### `<PillarFull />` legibility (Approach page)
- Title weight 300 → **500** (still Cormorant 24px navy).
- Italic subhead size 18px → **22px** and weight 300 → **500**; forced to
  `display: block` with `margin-bottom: 14px` so the body always begins on
  its own line.
- "What this replaces." label 11px / 500 / 0.20em → **13px / 600 / 0.18em**;
  forced to `display: block` with `margin-bottom: 8px`. Banner body stays at
  `--text-replaces` (16px).
- `<PillarFull />` JSX restructured so the label is its own block element —
  not a leading inline span on the body paragraph.

### `/start-a-conversation` rescripted as Inaugural Cohort invitation
- Page copy replaced with the Inaugural Cohort variant from `CONTENT.md` §04
  (eyebrow, headline, gold-light hero subhead, three intro paragraphs,
  inaugural-specific small note, "What happens next" copy, success state).
- Form rebuilt around the seven essential questions from `BUILD_SPEC.md` §7.2:
  name, email, phone (with "Best way to reach you" radio: phone/text/email),
  connection (radio with conditional "Who introduced you?" follow-up for
  *referred* and *event*), residence (with optional second-home), household
  (checkbox group with conditional dependents-count number input), and the
  free-text *What prompted you to reach out now?*
- Submit label: **Inquire about inaugural membership** (post-launch reverts to
  *Send to Dr. Lewis*).
- Date-gated: the page picks the variant server-side via
  `pickConversationVariant()` in `src/lib/content.ts`, comparing the request
  time to **2026-07-01T00:00:00Z**. Both copy and submit-label flip on that
  boundary without a redeploy. Page is rendered with
  `dynamic = "force-dynamic"` so the gate evaluates per request.
- API route (`/api/start-a-conversation`) and `lib/resend.ts` updated to
  accept the new payload shape (`variant`, `contactMethod`, `connection`,
  `introducedBy`, `residence`, `secondHome`, `household[]`, `dependentsCount`,
  `prompt`). Email subject and body switch wording for inaugural vs.
  post-launch submissions.

### Out of scope (intentionally not touched)
Design tokens, routes, tech stack, and copy outside §04.
