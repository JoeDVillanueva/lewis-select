# Changelog

All notable changes to the Lewis Select marketing site. The build spec
(`BUILD_SPEC.md`) is the canonical source for design and IA decisions; this file
captures what shipped and when.

## v3.8 — 2026-05-09 — copy pass follow-up

Approach `<PillarFull />` copy edits + a homepage Differentiator 03 tweak.
No structural changes; `BUILD_SPEC.md` stays at v3.8.

### Homepage Differentiator 03 body
- "Direct contact with Dr. Lewis — during the day or after-hours. The doctor
  who sees you on Tuesday is the same doctor who responds to a call from the
  golf course on Sunday afternoon." → "Direct contact with Dr. Lewis —
  rather than getting passed around a panel of rotating physicians and
  staff."

### Approach pillars (CONTENT.md §02)
- **Pillars intro body:** *cannot* → *can't*; *her* → *them*; *will not* →
  *can't*. ("…that you can't reach your doctor when you need them, and that
  when something goes wrong the system can't act fast enough.")
- **Pillar 01 body:** tightened to the Sunday-afternoon version. Old
  "Membership begins with Dr. Lewis's mobile number…" replaced with "Get in
  contact with Dr. Lewis directly, any day, any hour. The doctor who sees
  you on Tuesday is the same doctor who responds to a call from the golf
  course on Sunday afternoon."
- **Pillar 03 Body 2:** drops the "Each year, you spend ninety unhurried
  minutes…" framing; opens with "Lewis Select runs a 100+ biomarker panel —
  five to ten times the depth of a typical practice…" The wearable-data
  sentence is preserved.
- **Pillar 03 Body 3:** rewritten as the personal-plan paragraph that ends
  in "…a clear, high-leverage plan for the future." (Drops the bound
  Health Blueprint paragraph here.)

### Already on main from prior cuts (no-op for this PR)
- v3.7 EmpathyBlock — two parallel Hook + body pairs (problem → promise).
- v3.8 Home `<Pillars />` — three tiles in a single row, bodies hidden.

`BUILD_SPEC.md` and `CONTENT.md` synced verbatim from canonical.

## v3.8 — 2026-05-09

Home pillars become tiles, bodies hidden. Single change scoped to the
homepage `<Pillars />` component. No design tokens, no IA changes; the
Approach `<PillarFull />` is unaffected.

### Homepage `<Pillars />` — three tiles
- Layout shift: hairline-separated grid cells → three tiles in a single row.
  Desktop: `grid-template-columns: repeat(3, 1fr); gap: 16px;` Mobile
  (<720px): `grid-template-columns: 1fr; gap: 16px;` (vertical stack of
  tiles, not the previous flat-stacked cells).
- Tile styling: `background: var(--color-white); border: 0.5px solid
  var(--color-rule); border-radius: 4px; padding: 36px 28px;` Equal heights
  via grid stretch. Hover shifts border to `var(--color-gold)` over 200ms.
- Each tile renders only the number + title (top-aligned, 16px gap between
  number and title). Body paragraphs are intentionally hidden on `/` —
  the full pillar copy lives on `/approach` in `<PillarFull />`. Copy is
  preserved in `CONTENT.md` §01 for reference.
- Section eyebrow ("What's included"), section title, intro body, and the
  trailing "Read the full approach" CTA are unchanged.
- Dropped: between-cell hairline borders and the v3.2 28×28 cell padding —
  superseded by tile styling.

`BUILD_SPEC.md` and `CONTENT.md` synced verbatim from canonical.

## v3.7 — 2026-05-09

Empathy block restructure + homepage copy pass. No design tokens, no IA
changes; Approach, About, Inaugural, Nav, and Footer untouched.

### `<EmpathyBlock />` — two parallel Hook + body pairs
- Restructured from one `<Hook />` + two body paragraphs to a clean
  problem → promise contrast: **Hook 1 + Body 1 → 32px "turn" → Hook 2 +
  Body 2.** Both hooks use the existing `<Hook />` UI primitive (gold
  italic Cormorant, `--text-hook`, weight 400).
- Vertical rhythm: ~12px between each hook and its body; ~32px between
  Body 1 and Hook 2.
- Component prop shape changed from `{ hook?, paragraphs }` →
  `{ pairs: readonly [Pair, Pair] }`.

### Homepage copy pass
Every body / heading / eyebrow string on the Homepage replaced verbatim
with the canonical text from `CONTENT.md` §01:
- **Hero body** tightened to "For Hill Country families. Direct 24/7 access.
  Same-day specialist placement. Personal planning for your long-term health."
- **Philosophy quote** rewritten to "We've lost the concept of stewardship
  in modern medicine. Lewis Select is built around getting it back."
- **Empathy** body 1 uses numerals (3 / 15 / 6) instead of spelled-out;
  hook 2 / body 2 promise pivots to "There is a better way." +
  one-sentence promise.
- **Differentiators** eyebrow ("Care of a different shape" → "Care shaped
  differently") + intro ("…concierge practices…portal, and a phone number…")
  + items 01–04 bodies tightened.
- **Three Pillars** 01–03 bodies tightened.
- **Your physician** body and section title (italic phrase
  "*second-generation Central Texas physician.*" →
  "*third-generation Central Texas physician.*").
- **Who it's for** body — "Membership is by invitation, and limited
  each year." → "Membership is limited each year."

`BUILD_SPEC.md` and `CONTENT.md` synced verbatim from canonical.

## v3.6 — 2026-05-08

Inaugural page polish (post first review). Eight targeted changes against the
live `/start-a-conversation` deploy.

### Route rename
- `/start-a-conversation` → **`/inaugural`** (page + API).
  `src/app/start-a-conversation/` → `src/app/inaugural/`,
  `src/app/api/start-a-conversation/` → `src/app/api/inaugural/`.
- `<ConversationForm />` → **`<InaugurationForm />`** (file + dir + export).
- 308 permanent redirect from `/start-a-conversation` → `/inaugural` added in
  `next.config.mjs` so legacy links keep working.
- Every internal link and CTA `href` updated: Nav, Footer, Home page hero,
  WhoItsFor, ClosingCTA, sitemap, privacy page, 404, and the form fetch URL.

### Site-wide CTA label
- Primary CTA reads **"Join The Inaugural"** while the inaugural window is
  open; reverts to *"Start a conversation"* on/after **2026-07-01**. Link
  target is always `/inaugural`. Implemented as `getPrimaryCtaLabel(now)` and
  `PRIMARY_CTA_HREF` in `src/lib/content.ts`. Layout passes the resolved label
  + href down to Nav and Footer; ClosingCTA, Home page, and 404 read it
  directly. Layout marked `dynamic = "force-dynamic"` so the gate evaluates
  per request without a redeploy.

### Inaugural-launch hero
- New `<Hero variant="inaugural-launch" />`. Three-tier header: small eyebrow
  *"INAUGURAL · OPENS"*, then a prominent italic Cormorant gold-light date
  display *"July 1, 2026"* at `clamp(40px, 5vw, 60px)` weight 400
  letter-spacing -0.005em, then a smaller headline so the date is the visual
  anchor. The supporting subhead beneath is preserved in
  `--color-gold-light` DM Sans 16px max-width 640px.

### `<PersonalLetter />` UI primitive
- Replaces the v3.5 personal note on `/inaugural`. Centered layout: 180×180
  rounded-square portrait placeholder (cream-dark background, 0.5px gold
  hairline, italic "Photograph forthcoming." caption) → centered letter copy
  max-width 620px → italic Cormorant `*— Dr. Kevin Lewis*` signature centered
  at the bottom. Component accepts `src` + `alt` props so Dr. Lewis's real
  photo can drop in without further code changes. The v3.5 muted "direct-pay"
  line is dropped on this block.

### Form changes (BUILD_SPEC.md §7.2)
- **Dropped** the "Best way to reach you" radio under Phone — phone is a
  single tel input.
- **Dropped** the optional "Second home, if applicable" input under Residence.
- **Renamed** the third household checkbox *"Dependents under 25"* →
  **"Other family members"** (underlying form value `dependents` preserved
  for backward compatibility). The reveal-on-select number input stays;
  helper updated to *"Spouse, partner, dependents, others in your household."*
- Submit button changes from *"Inquire about inaugural membership"* →
  **"Send Inquiry"** (post-launch reverts to *"Send to Dr. Lewis"*).
- API route + `lib/resend.ts` updated: dropped `contactMethod` and
  `secondHome` from payload, validation, and email composer; updated
  `HOUSEHOLD_LABELS["dependents"] = "Other family members"`.

### "What to expect" block
- Eyebrow renamed *"After you submit"* → **"What to expect"**.
- Body shortened: *"Inquiries are reviewed personally by Dr. Lewis ahead of
  the July 1, 2026 launch. Inaugural spots are limited; we will be candid
  with you either way. Most replies arrive within a week."*
- Globally removed "if you are selected to participate in the Inaugural
  Cohort" phrasing from hero subhead, letter, what-to-expect, and success
  state.
- Globally replaced *"Inaugural Cohort spots are limited"* → *"Inaugural
  spots are limited"*.

### Page-scoped eyebrow scale on `/inaugural`
- New `.eyebrow--inaugural` class in `globals.css`: 13px DM Sans weight 500
  letter-spacing 0.30em (vs default `--text-eyebrow` 12px / 400 / 0.34em).
  The leading 30px gold hairline + 16px gap from the base `.eyebrow` rule
  still apply. `<Eyebrow>` and `<Hero>` now accept a `className` /
  `eyebrowClassName` prop. Applied to every section eyebrow on `/inaugural`
  while the inaugural window is open; post-launch reverts to default.

### Footer
- **"Connect" column hidden** until phone and email placeholders are filled.
  Footer is now a 3-column desktop grid (was 4): brand · The Practice · Visit.
  Mobile collapses to single column with hairline rules between rows.
- Brand paragraph rewritten: *"Exclusive concierge medicine for the Hill
  Country. Get fast, direct access to a doctor who knows you, a specialist
  network on speed dial, and a personal plan for your long-term health."*
- "The Practice" column's third item is now appended at render time so the
  date-gated label flows through (Approach · Dr. Kevin Lewis · Join The
  Inaugural / Start a conversation).

### Out of scope (intentionally not touched)
Design tokens, copy outside the changes above, routes (the rename is the
change), and tech stack.

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
