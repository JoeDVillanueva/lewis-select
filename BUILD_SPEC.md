# Lewis Select — Marketing Site Build Spec  ·  v3.9

> **v3.9 — Approach pillars become a hairline stepper.** Two updates.
>
> 1. **`<PillarFull />` (Approach) restructures into `<PillarStepper />` — a hairline stepper with one detail panel.** Replace the previous stacked three-pillar layout on `/approach` with a single horizontal stepper above one full-width detail panel. The three pillars are no longer stacked vertically — only the active pillar's content is visible at a time. The eyebrow ("THE PROGRAM"), section title, and intro body above the stepper are unchanged.
>
>    **Stepper (above the detail panel):** three steps in a horizontal row, equal-width grid, max-width 720px, centered. Each step contains a Cormorant Garamond italic numeral (01 / 02 / 03) at **42px weight 400**, color `--color-rule` for inactive / `--color-gold` for active; below the numeral, a small DM Sans label at **11px weight 400 letter-spacing 0.30em uppercase**, color `--color-warm-gray` for inactive / `--color-navy` for active. Step labels: `24 / 7 ACCESS`, `ACUTE RESPONSE`, `LONG-TERM STEWARDSHIP`. Beneath the stepper row, a hairline rule (`0.5px solid var(--color-rule)`) spans the row's full width. **Active indicator:** a gold underline (`1px solid var(--color-gold)`) sits on the active step beneath the rule and slides horizontally between steps on click — `transition: right 500ms cubic-bezier(0.4, 0, 0.2, 1)` (or equivalent transform). Implement as a single sliding pseudo-element or a positioned bar driven by step index — not three separate underlines toggling. Cursor pointer on inactive steps, default on active. Keyboard: Tab to step, Enter/Space to activate.
>
>    **Detail panel (below the stepper):** single full-width panel, max-width 720px, centered, min-height 320px so the page doesn't reflow as the user steps through. Renders the active pillar's full content: title (Cormorant 32px navy weight 500), subhead (italic Cormorant 22px navy weight 500, with the v3.5 block-margin-bottom rule), one or more body paragraphs (`--text-body` 17px line-height 1.65), and the "What this replaces" gold-edge banner (unchanged from v3.5: `--text-replaces` 16px italic, gold left-edge, `--color-cream-dark` background, "What this replaces." label 13px weight 600 letter-spacing 0.18em as a block). **Content swap:** when a step is clicked, fade the detail panel to `opacity: 0` over 300ms, swap the rendered pillar, then fade back to `opacity: 1` over 300ms. Total swap ~600ms.
>
>    **Mobile (<720px):** the stepper collapses to a vertical accordion. Three full-width rows: each shows numeral + step label + a 20px-tall expand chevron in `--color-gold`. Tapping a row expands its body content beneath it (height-only animation, 400ms ease) and collapses any other open row. The horizontal stepper row + detail-panel pattern is desktop-only.
>
>    Implement as `src/components/pillar-stepper/` (replacing `pillar-full/` on Approach). The `<PillarFull />` component can be deleted from Approach but **kept in the codebase if it's still referenced anywhere else** (it isn't on home — home uses `<Pillars />` v3.8 tiles). Reference: `Lewis_Select_Accordion_Concepts.html` Option 2 in the project folder.
>
> 2. **Approach Pillar 02 + Pillar 03 copy.** Pillar 02 Body 1 shortens ("…you make one phone call to Dr. Lewis." replaces the prior split sentence). Pillar 02 Body 2 first sentence rewrites ("He will contact the needed specialists and hospitalist personally from his network on your behalf, getting you the care you need fast — same-day or next-day is the norm, not the exception."). **Pillar 03 collapses from three bodies into one body** with a new subhead ("*A comprehensive plan centered around addressing your acute needs and longer-term goals.*") and a new single body paragraph ("Health and longevity does not happen by accident…"). Drops the prior Body 2 (100+ biomarker panel paragraph) and Body 3. Pillar 03's "What this replaces" tag is unchanged. See `CONTENT.md` §02.

> **v3.8 — Home Pillars become tiles, bodies hidden.** Single change scoped to the homepage `<Pillars />` component (Approach page `<PillarFull />` is **unaffected**).
>
> - **Layout shift.** The three pillars on the homepage move from hairline-separated grid cells to **three tiles in a single row**. Desktop: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;` Mobile (<720px): `grid-template-columns: 1fr; gap: 16px;` (vertical stack of tiles, not the previous flat-stacked cells).
> - **Tile styling.** Each tile: `background: var(--color-white); border: 0.5px solid var(--color-rule); border-radius: 4px; padding: 36px 28px;` Equal heights via grid stretch. Hover state shifts border to `var(--color-gold)` over 200ms ease — subtle, not a button. Drop the previous between-cell hairlines (`border-right` on cells 1–2) — they're now redundant against tile borders.
> - **Bodies hidden on home only.** Each tile renders only the number + title — the body paragraphs do not render on `/`. The copy is preserved in `CONTENT.md` §01 for reference, but the component should not pass body text to the rendered output. Vertical rhythm inside each tile: number (`--text-marker` 32px italic Cormorant gold) → 16px gap → title (Cormorant 22px navy weight 400) → no body. Top-aligned.
> - **Surrounding section unchanged.** Eyebrow ("What's included"), section title ("Immediate care for your health today. *Stewardship of your health for the years ahead.*"), intro body, and the "Read the full approach" CTA below the grid all stay as-is.
> - **`<PillarFull />` on `/approach` is unaffected.** Full bodies, subheads, and "What this replaces" banners continue to render there. Approach is the canonical place for pillar detail; home is now the at-a-glance preview.

> **v3.7 — Empathy block restructure + homepage copy pass.** Two updates.
>
> 1. **Empathy block restructures into two parallel Hook + body pairs.** The homepage `<EmpathyBlock />` previously rendered one `<Hook />` ("*Does this sound familiar?*") followed by two body paragraphs. v3.7 elevates the second body to a second hook, so the block reads as a clean problem → promise contrast: **Hook 1 (problem) + Body 1 + Hook 2 (promise) + Body 2.** Both hooks use the existing `<Hook />` UI primitive (gold italic Cormorant, `--text-hook`, weight 400). Vertical rhythm: ~12px between each hook and its body; ~32px between the end of Body 1 and the start of Hook 2 (this is the "turn" — the visual pivot from problem to promise). Update `src/components/empathy-block/` to render two child Hook+Body groups. See §6.3 `<EmpathyBlock />`.
> 2. **Homepage copy pass.** Tightened values across Hero body, Philosophy band quote, both Empathy block bodies (numerals 3 / 15 / 6 not spelled out), Differentiators eyebrow + intro body + items 01–04, Three Pillars 01–03 bodies, "Your physician" body, "Who it's for" body. No structural changes to those sections — copy values only. See `CONTENT.md` §01 for canonical text. Approach, About, Inaugural, Nav, and Footer are unchanged from v3.6.

> **v3.6 — Inaugural page polish (post first review).** Eight targeted changes against the live `/start-a-conversation` deploy. Net effect: the route renames to `/inaugural`, the page reads like a personal letter from Dr. Lewis with room for his portrait, the form drops three secondary fields, and the global CTA shifts to "Join The Inaugural" until July 1, 2026.
>
> 1. **Route rename.** `/start-a-conversation` → `/inaugural`. Move `src/app/start-a-conversation/` → `src/app/inaugural/` and `src/app/api/start-a-conversation/` → `src/app/api/inaugural/`. Add a permanent redirect (308) from `/start-a-conversation` → `/inaugural` in `next.config.mjs` so the old URL keeps working. Update every internal link and CTA `href` site-wide.
> 2. **Site-wide CTA label.** The primary CTA on every page (Home hero, Pillars, Who-it's-for, About sig CTA, Approach closing CTA, Nav ghost CTA) currently reads *"Start a conversation"* — change to **"Join The Inaugural"** while the Inaugural Cohort window is open. After 2026-07-01 it reverts to *"Start a conversation"* via the same date-gating mechanism used for the page copy.
> 3. **Inaugural hero — pronounced launch date.** Promote the July 1, 2026 line in the hero. Above the headline, a new gold-light eyebrow pair: a small uppercase eyebrow "INAUGURAL · OPENS" followed by a **prominent date display**: *July 1, 2026* set in italic Cormorant Garamond gold-light at `clamp(40px, 5vw, 60px)`, weight 400, letter-spacing -0.005em. Headline below ("*An invitation to Lewis Select's Inaugural Cohort.*") drops one size to keep the date the visual anchor. The supporting subhead beneath the headline is preserved.
> 4. **Personal letter section (replaces "Personal note").** Restructure the cream surface immediately below the hero as a personal letter from Dr. Lewis, centered on the page. Layout: (a) **portrait placeholder** at top center — a 180×180 rounded square (`border-radius: 4px`) at `--color-cream-dark` with a faint gold hairline border, captioned "Photograph forthcoming"; component must accept a `src` prop so Dr. Lewis can drop in his real photo when ready. (b) **Letter copy** below the portrait, centered, max-width 620px, body uses `--text-body` (17px) DM Sans weight 300 line-height 1.7, **`text-align: center`**, with paragraph spacing 16px. (c) **Signature** at the bottom: italic Cormorant Garamond, ~28px navy, weight 400, "*— Dr. Kevin Lewis*" centered. (d) **Drop the small DM Sans muted note** ("Lewis Select is direct-pay; no insurance is billed for membership…") that previously closed this block. The new section uses one eyebrow above the portrait: "FROM DR. LEWIS".
> 5. **Form field drops + rename.** Three changes to `<ConversationForm />`:
>    - **Drop** the "Best way to reach you" radio group beneath the phone field. Keep `phone` as a single tel input.
>    - **Drop** the optional "Second home, if applicable" input beneath the residence field. Keep `residence` as a single tel-style input.
>    - **Rename** the third household checkbox option *"Dependents under 25"* → **"Other family members"**. The number-of-people input that reveals on selection stays, but its label changes from "How many?" to "How many?" (unchanged), with helper text updated to "Spouse, partner, dependents, others in your household."
> 6. **Submit button text.** Form submit changes from *"Inquire about inaugural membership"* to **"Send Inquiry"** (still primary gold, full-width on mobile, inline on desktop). The longer "Join The Inaugural" CTA stays on the rest of the site; the submit on the form itself is short.
> 7. **"What to expect" block (replaces "After you submit").** Eyebrow updates to "WHAT TO EXPECT". Body shortens and drops the conditional framing — new copy: *"Inquiries are reviewed personally by Dr. Lewis ahead of the July 1, 2026 launch. Inaugural spots are limited; we will be candid with you either way. Most replies arrive within a week."* The phrase "If you are selected to participate in the Inaugural Cohort…" is removed everywhere on the page (hero subhead, inaugural-invitation block, what-to-expect, success state). Globally replace **"Inaugural Cohort spots are limited"** with **"Inaugural spots are limited"**.
> 8. **Inaugural page eyebrow scale.** Eyebrows on `/inaugural` only render at **13px DM Sans weight 500 letter-spacing 0.30em** (vs the default `--text-eyebrow` 12px / 400 / 0.34em used elsewhere). New page-scoped class `.eyebrow--inaugural`. The leading gold hairline before the eyebrow stays 30px; gap unchanged. This is a single-page bump — do not change `--text-eyebrow` globally. Net feel: each section title on this page reads with a touch more authority, matching the visual weight of other pages' headers.
>
> **Footer changes (apply globally, not just on `/inaugural`):**
> - **Hide the "Connect" column.** Remove column 4 from the footer until phone and email placeholders are filled. Footer is now a 3-column desktop layout (or 1 + 2 mobile): brand paragraph · The Practice · Visit. Update grid template accordingly.
> - **Brand paragraph copy** updated to: *"Exclusive concierge medicine for the Hill Country. Get fast, direct access to a doctor who knows you, a specialist network on speed dial, and a personal plan for your long-term health."* Replace the existing "An invitation-only medical practice in Dripping Springs, Texas…" paragraph in `<Footer />` and `CONTENT.md` Footer section.

> **v3.5 — brand mark + Approach pillar legibility + Inaugural Cohort CTA.** Three updates.
>
> - **Brand mark.** New gold ornamental medallion logo (`LewisSelect_Logo1.png`) replaces the placeholder mark. Save at `public/logo-mark.png`. Use it in: (a) **nav**, immediately left of the wordmark at **36px square**, with **12px right margin** against the wordmark; (b) **footer**, immediately left of the wordmark at **44px square**, with **14px right margin**; (c) **favicon** — export to `favicon.ico`, `favicon-32.png`, and `apple-touch-icon.png` (180px). Wordmark text continues unchanged ("Lewis *Select*"). Mark renders as `<img>` with `alt="Lewis Select"` and `loading="eager"` in the nav.
> - **Approach `<PillarFull />` legibility.** Three weight/size tweaks plus a structural change so subheads and tags anchor their paragraphs instead of running into the body. (1) **Title** weight 400 → **500** (still Cormorant 24px navy). (2) **Italic subhead** size ~20px → **22px**, weight 400 → **500** (still Cormorant italic navy); display **block**, `margin-bottom: 14px` so the body always starts on a new line. (3) **"What this replaces." label** size 11px → **13px**, weight 500 → **600**, letter-spacing 0.20em → **0.18em**, color stays gold; display **block**, `margin-bottom: 8px`. The italic body inside the gold-edge banner continues to use `--text-replaces` (16px). Net effect: title, subhead, and "What this replaces." each visually anchor their paragraph; bodies always begin on their own line. See §6.3 `<PillarFull />`.
> - **`/start-a-conversation` rescripted as Inaugural Cohort invitation.** Until **July 1, 2026**, this page is the entry point for Lewis Select's Inaugural Cohort. New page header copy, new personal note, **new form fields (seven essential questions)**, new submit button label (**"Inquire about inaugural membership"**), updated success state. See §7 below and `CONTENT.md` §04. After July 1 the page reverts to the standard "Start a Conversation" treatment (the v5 copy preserved in `CONTENT.md` §04 under "Post-launch fallback").

> **v3.4 — gold saturation + subtext + attribution sizes (post numeral fix).** Three targeted fixes.
>
> - **Gold saturation:** primary `--color-gold` from `#B8955A` (a desaturated tan) → **`#A87E36`** (a stronger, deeper, more recognizable gold). Contrast against cream goes from ~3.5:1 to ~5:1; against navy stays ~4.2:1. Eyebrows, the "What this replaces" label, the gold-italic display words, and the gold underlines all become visibly more present without changing their structural role. Light variant `--color-gold-light` shifted slightly more saturated: `#D4B47A` → **`#D9B560`** (used for italicized display words on navy).
> - **Differentiator left-column intro body ("Most private practices give you a longer appointment and a phone number…"):** the live site is inheriting the tiiny `.why-left p` 14px / weight 200 / 40%-white style. Override explicitly: **18px DM Sans weight 300, line-height 1.6, color `--color-text-on-dark-muted` (#B5C6E0), max-width 420px**. See §6.3 `<Differentiators />`.
> - **Quote attribution lines (`— Dr. Kevin Lewis`):** new explicit token `--text-attribution: 15px` (was 12px). Letter-spacing stays at 0.30em, color `--color-gold`, weight 400. Applies to every pull-quote attribution: philosophy band, navy pull quote, closing CTA, About page pull quote.

> **v3.3 — number sizes + WTR legibility + targeted copy (post tightening pass).** The v3.2 tightening landed well, but several elements still inherit the tiiny baseline sizes (which were too small for this audience). Three legibility fixes plus four copy tweaks.
>
> **Type fixes:**
> - **Differentiator numbers (01–04 on the homepage):** bump from the tiiny default of ~14px to **`--text-marker` (32px)** italic Cormorant Garamond gold. Adjacent title and body must use `--text-body` (17px) and a slightly larger title (24px) — see §6.3 `<Differentiators />`.
> - **Pillar numbers (01–03 on the homepage):** bump from 22px to **`--text-marker` (32px)** for consistency with the differentiators above.
> - **"What this replaces" body:** set explicit token `--text-replaces: 16px` italic, line-height 1.55. Currently inheriting the tiiny `.why-item-body` 12px treatment, which is unreadable.
>
> **Copy fixes:**
> - Hook line: `"If this sounds familiar…"` → `"Does this sound familiar?"` (no ellipses, clean question).
> - Differentiator 02 title: `"Past the waiting line. By name."` → `"Skip the waiting line. Get a personal referral."`
> - Differentiator 03 title: `"The same physician. Day or night."` → `"See your own doctor — not a 'panel'."`
> - Differentiator 04 title: `"A written plan for the year ahead."` → `"Get a personal plan for your future health."`
> - Pillars section title (Home + Approach): `"Care for your health today…"` → `"Immediate care for your health today. Stewardship of your health for the years ahead."`

> **v3.2 — tighten the rhythm (post second deploy).** Comparing Lewis Select against fidesops.com (the reference for "crisp"), the key gap is density-within-sections and rhythm-between-sections. Lewis has generous padding everywhere, generous line-height inside paragraphs, an oversized section title relative to body, and a Hook line that's set at full section-title scale. fidesops uses tighter type leading inside sections, smaller section titles relative to body, shorter section padding, and crisper section boundaries. The fixes below tighten Lewis's rhythm without changing layout structure or content.
>
> - **Section padding:** desktop `100px → 80px` top/bottom; mobile `64px → 56px`. Sections were eating too much vertical real estate.
> - **Body line-height:** `1.7 → 1.6` for primary body. Reserve `1.7` for blockquotes and leads only. Tighter leading reads as more confident.
> - **Section title scale:** `clamp(38px, 4.4vw, 56px)` → `clamp(32px, 3.6vw, 46px)`. Brings the headline-to-body ratio from ~3.3× down to ~2.7× — closer to fidesops's proportions and lets the body content carry weight too.
> - **Hero h1 cap:** clamp max `90px → 76px`. Still commanding, no longer overpowering.
> - **The Hook line:** explicitly NOT section-title-sized. New token `--text-hook` at `clamp(26px, 2.6vw, 34px)`. The "If this sounds familiar…" line should function as a transitional question, not a banner.
> - **Card paddings:** `<Pillars />` cells `36×32 → 28×28`; `<Differentiators />` items shed ~20% internal vertical spacing. Bodies inside cards keep 17px but with `line-height: 1.55`.
> - **Reading column:** enforce `max-width: 680px` on body paragraphs inside content sections (was implicit, now explicit). Display lines can stretch to 820px.
> - **Section dividers:** every section transition gets a 0.5px hairline (`--color-rule` on cream/cream transitions, `--color-rule-on-dark` on cream/navy). Sharpens the section start and end.
>
> Apply these to tokens and component CSS. Copy and IA do not change.

> **v3.1 fixes (post first deploy).**
> - **Body color on cream:** `--color-warm-gray` darkened from `#6B6560` to `#4A443F` to fix faint paragraph copy on the homepage. Primary body text **always uses `--color-text`**, never `--color-warm-gray`. Warm-gray is reserved for genuinely secondary content (footer brand paragraph, captions). See §4.1.
> - **Three-pillar grid layout (homepage):** explicit grid spec added — 3 equal-width columns on desktop with hairline rules between, single column on mobile. See §6.3 `<Pillars />` and §8.1.
> - **"If this sounds familiar" treatment:** no longer an eyebrow. Now a gold italic Cormorant Garamond line at section-title size, treated as the empathy block's rhetorical hook. New `<Hook />` UI primitive added. See §4.2 type rules and §6.2.
> - **About page body size:** all body copy on `/about` uses `--text-body` (17px) — no smaller variant inside `<PhysicianBlock />`. Bio is long-form reading and gets the same treatment as the rest of the site. See §6.3.
> - **Section-title copy:** "Care today. Stewardship for the years ahead." → "Care for your health today. Stewardship of your health for the years ahead." (both Home and Approach.)

> **v3 changelog (initial post-tiiny restyle).** Type sizes bumped for the senior audience (body 14 → 17px, eyebrow 10 → 12px). Nav and footer small caps bumped to match. Muted text on navy changed to `#B5C6E0` (pale blue). Primary text on navy is now pure white. Approach collapses from 7 pillars to 3. Homepage "Everything in one practice" reframed as the three-pillar block. About page picks up a navy pull-quote. Closing CTA drops "no application form." Approach header changes to "Stewarding Health for the Hill Country."

This document is the build specification for the Lewis Select marketing website. Hand it to Claude Code in a fresh project repository alongside `CONTENT.md`, `Lewis Select tiiny site.html` (visual reference), `Lewis_Logo.svg`, and `Lewis_Logo_mark.svg`. Claude Code should be able to scaffold the project, implement every component and page, and produce a deployable build with no further direction.

Companion files in this folder:

- `CONTENT.md` — all user-facing copy, page by page
- `Lewis Select tiiny site.html` — **visual reference for register**: navy + warm gold + cream palette, Cormorant Garamond + DM Sans pairing, hairline rules, light weights, gold-italic words inside display headlines. Treat it as the canonical aesthetic, not a layout template.
- `Lewis_Select_Moodboard.html` — **visual reference for sizes and dark-text color**: the v3 type sizes (body 17px, eyebrow 12px, etc.) and the lighter blue `#B5C6E0` for muted text on navy are demonstrated with live specimens including nav and footer at the new sizes. When a token value seems ambiguous, this file is the tie-breaker.
- `Lewis_Logo.svg`, `Lewis_Logo_mark.svg` — brand marks

---

## 1. Project overview

Lewis Select is a private concierge medical practice in the Texas Hill Country (Dripping Springs, TX). The website is a public marketing site whose job is to explain the practice, establish Dr. Kevin Lewis as the right physician for prospective members, and route qualified prospects into a phone conversation. There is no member portal, no e-commerce, no booking system. The conversion action is a single contact form on `/start-a-conversation` that emails Dr. Lewis directly.

**Brand voice.** Editorial, restrained, confident. The prospective member is the hero of the page; Dr. Lewis is the guide. Plain-spoken sentences, concrete artifacts over abstract benefits, no marketing ornament. Voice and tone are fully captured in `CONTENT.md`.

**Visual register.** Navy + warm gold, Cormorant Garamond display + DM Sans body, hairline rules, light weights (200/300), heavy letter-spacing (0.20em–0.40em) on uppercase eyebrows and small caps. Heritage-luxe rather than editorial-modern. The aesthetic reference is `Lewis Select tiiny site.html`.

---

## 2. Tech stack

- **Framework.** Next.js 14+ (App Router, React Server Components by default, TypeScript)
- **Language.** TypeScript, strict mode
- **Styling.** CSS Modules + a single global stylesheet for tokens. No Tailwind, no CSS-in-JS runtime — keep CSS explicit and editorial.
- **Fonts.** Cormorant Garamond (display) + DM Sans (body), self-hosted via `next/font/google` with `display: 'swap'`.
- **Hosting.** Vercel (production + preview deploys per PR)
- **Source control.** GitHub (single `main` branch, PR-based; preview deploys on every PR)
- **Email / forms.** Resend (transactional API) called from a Next.js Route Handler.
- **Analytics.** Vercel Web Analytics (built-in, privacy-respecting). No Google Analytics.
- **No.** Tailwind, MDX, CMS, database, auth, i18n, member portal, booking calendar.

---

## 3. Repository structure

```
lewis-select/
├── README.md
├── BUILD_SPEC.md
├── CONTENT.md
├── package.json
├── tsconfig.json
├── next.config.mjs
├── .env.local.example
├── .gitignore
├── public/
│   ├── favicon.ico                # v3.5 — derived from logo-mark.png
│   ├── favicon-32.png             # v3.5
│   ├── apple-touch-icon.png       # v3.5 — 180×180
│   ├── logo.svg                   # full Lewis Select wordmark
│   ├── logo-mark.png              # v3.5 — gold medallion brand mark (LewisSelect_Logo1.png)
│   ├── og-default.png             # social card placeholder
│   └── photos/
│       └── PLACEHOLDERS.md        # spec for photography to be commissioned
├── src/
│   ├── app/
│   │   ├── layout.tsx             # root layout (nav + footer, font loading)
│   │   ├── page.tsx               # / (Home)
│   │   ├── approach/page.tsx
│   │   ├── about/page.tsx
│   │   ├── inaugural/page.tsx     # v3.6 — renamed from start-a-conversation
│   │   ├── privacy/page.tsx       # placeholder Notice of Privacy Practices
│   │   ├── api/
│   │   │   └── inaugural/route.ts # v3.6 — renamed from start-a-conversation
│   │   ├── globals.css            # tokens + base styles
│   │   ├── not-found.tsx
│   │   └── opengraph-image.tsx    # default OG image generator
│   ├── components/
│   │   ├── nav/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── philosophy-band/
│   │   ├── empathy-block/
│   │   ├── differentiators/
│   │   ├── pillars/
│   │   ├── pillar-stepper/        # v3.9 — replaces pillar-full on Approach
│   │   ├── pull-quote/
│   │   ├── about-block/
│   │   ├── who-its-for/
│   │   ├── closing-cta/
│   │   ├── conversation-form/
│   │   ├── ui/                    # primitives: Eyebrow, Display, Body, Cta, Rule
│   │   └── layout/                # Container, Section, Band
│   └── lib/
│       ├── content.ts             # typed exports of strings (mirrors CONTENT.md)
│       ├── resend.ts              # Resend client + email composer
│       └── seo.ts                 # generateMetadata helpers
└── tests/                         # optional, vitest if used
```

---

## 4. Brand system (design tokens)

All tokens live in `src/app/globals.css` as CSS variables. Components reference variables; no raw hex values in component CSS.

### 4.1 Color tokens

```css
:root {
  /* Navy — primary dark surface (hero, dark sections, footer) */
  --color-navy:        #0F2744;
  --color-navy-mid:    #1A3A5C;
  --color-navy-light:  #243F64;

  /* Gold — primary accent (eyebrows, italic display words, CTAs, hairlines)
     v3.4: bumped saturation. Old #B8955A read too faint at small sizes. */
  --color-gold:        #A87E36;   /* primary gold — stronger contrast on cream and navy */
  --color-gold-light:  #D9B560;   /* italicized headline highlights on navy */
  --color-gold-pale:   #F0E4CC;   /* subtle backgrounds, dividers */

  /* Cream — primary light surface (alternating sections, blockquotes) */
  --color-cream:       #F6F3EE;
  --color-cream-dark:  #EDE8DF;

  /* Neutrals */
  --color-white:       #FFFFFF;
  --color-warm-gray:   #4A443F;   /* secondary text only — captions, footer brand paragraph. NOT primary body. (v3.1: darkened from #6B6560 for legibility.) */
  --color-text:        #1A1714;   /* near-black ink — primary body color, used on every long-form paragraph */
  --color-rule:        #D8D0C2;   /* warm hairline on cream/white */
  --color-rule-dark:   rgba(184,149,90,0.20);   /* gold hairline on navy */
  --color-text-on-dark:       #FFFFFF;          /* pure white — primary text on navy */
  --color-text-on-dark-muted: #B5C6E0;          /* pale blue — secondary text on navy */
}
```

**Usage rules.**

- The site alternates between **cream** sections (long-form reading) and **navy** sections (hero, "why," pull quotes, footer, closing CTA). White is used sparingly as a card surface within cream sections (e.g., scenario cards).
- Gold is the only accent. Use it for eyebrows, the italicized words inside display headlines, CTA buttons, and hairlines. Do not use blue as an accent; navy is a surface, not an accent.
- Italic display headline words (set in `--color-gold-light`) are a signature pattern. Almost every headline has at least one italicized phrase that draws the eye.
- Hairlines are **0.5px**, not 1px. Color depends on surface: `--color-rule` on cream/white, `rgba(255,255,255,0.07)` to `rgba(255,255,255,0.18)` on navy, `--color-rule-dark` for gold-on-navy hairlines.
- Hover on links: gold underline reveals from the left (see tiiny `.nav-links a::after`).
- No drop shadows. No gradients except the `--color-navy-light` → `--color-navy` photo placeholder.

### 4.2 Typography tokens

```css
:root {
  --font-display: var(--font-cormorant), Georgia, serif;
  --font-body:    var(--font-dm-sans), system-ui, sans-serif;

  /* Type scale — clamp() for fluid sizing.
     v3 bumped sizes for legibility (audience skews 50+). v3.2 tightened the upper end of the
     scale so headline-to-body ratios match the fidesops reference. Body weight stays at 300. */
  --text-h1:           clamp(52px, 6.4vw, 76px);    /* hero, page header (v3.2: max 90→76) */
  --text-section:      clamp(32px, 3.6vw, 46px);    /* section title (v3.2: smaller, ~2.7× body) */
  --text-hook:         clamp(26px, 2.6vw, 34px);    /* NEW v3.2 — gold italic Hook line, NOT section-title size */
  --text-h3:           clamp(22px, 2.2vw, 28px);    /* sub-section heads inside long-form */
  --text-blockquote:   clamp(24px, 2.8vw, 32px);    /* pull quotes, philosophy band (v3.2: tightened) */
  --text-stat:         44px;                        /* hero stat numerals (if used) */
  --text-marker:       32px;                        /* NEW v3.3 — italic Cormorant numerals (01, 02, 03, 04) used by Differentiators and Pillars */
  --text-replaces:     16px;                        /* NEW v3.3 — body inside "What this replaces" gold-edge banners */
  --text-attribution:  15px;                        /* NEW v3.4 — "— Dr. Kevin Lewis" attribution under every pull quote (was 12px) */

  /* Body */
  --text-body:         17px;     /* primary body — every paragraph */
  --text-body-sm:      15px;     /* footer brand paragraph, captions */
  --text-small:        14px;     /* smallest body */

  /* Small-caps / uppercase elements (eyebrow + nav + footer) */
  --text-eyebrow:      12px;     /* gold uppercase eyebrow above every headline */
  --text-nav-link:     12px;     /* nav links (Approach, Dr. Lewis) */
  --text-nav-cta:      11px;     /* "Start a conversation" ghost button in nav */
  --text-nav-tagline:  10px;     /* "PRIVATE CONCIERGE MEDICINE" tagline beneath wordmark */
  --text-footer-title: 12px;     /* gold column titles in footer */
  --text-footer-link:  15px;     /* footer column links */
  --text-footer-bottom:12px;     /* footer copyright + privacy bottom bar */

  /* Line heights */
  --lh-tight:   1.05;     /* h1 */
  --lh-snug:    1.15;     /* section title */
  --lh-blockquote: 1.55;  /* blockquote */
  --lh-body:    1.85;     /* body — generous, magazine-paced */
  --lh-loose:   1.95;     /* physician body, long-form */

  /* Letter spacing — pulled back slightly with v3's larger sizes so the characters don't space out */
  --ls-tight:        -0.005em;  /* h1 (slight) */
  --ls-eyebrow:      0.34em;    /* section labels (was 0.38em — pulled back with size bump) */
  --ls-eyebrow-tight:0.20em;    /* nav links */
  --ls-button:       0.25em;    /* CTAs */
  --ls-uppercase:    0.30em;    /* generic uppercase small caps */

  /* Weights — light by default; this is a heritage-light system */
  --weight-thin:     200;
  --weight-light:    300;
  --weight-regular:  400;
}
```

**Type rules.**

- Display: Cormorant Garamond. Default weight 300. Italics are common — used for emphasized words inside headlines (set in `--color-gold-light`), section blockquotes, and sig lines. Italic in `*asterisks*` in `CONTENT.md` marks display lines (set in display serif, italic).
- Body: DM Sans, weight 300, **17px** (`--text-body`). **Line-height 1.6** for primary body (v3.2 tightened from 1.7). Reserve 1.7 only for `<Lede>` and `<Blockquote>` components. **Color: `--color-text` (#1A1714).** Do not use `--color-warm-gray` for primary body copy on cream. The lightness of weight 300 is central to the register — do not bump to 400 by default. Size + leading are the legibility levers.
- Body paragraph spacing: `margin-bottom: 14px` between paragraphs (was 24px). Tighter rhythm reads as more confident.
- Body reading column: **`max-width: 680px`** on every primary body container. Headlines and leads can stretch to `--display-max` (820px). Body should not.
- **Hook (rhetorical line above the empathy block):** Cormorant Garamond, weight 400, italic, **`--text-hook` size** (`clamp(26px, 2.6vw, 34px)`), **gold (`--color-gold`)**. v3.2 explicitly sized DOWN from section-title scale — the Hook is a transitional question, not a banner. Used once on the homepage in place of the conventional eyebrow. The line `*If this sounds familiar…*` reads as a question hook. See `<Hook />` UI primitive in §6.2.
- Eyebrow: DM Sans, weight **400**, uppercase, letter-spacing 0.34em, **12px** (`--text-eyebrow`). Color `--color-gold` on cream, `--color-gold-light` on navy. Always preceded by a 30px gold hairline (see tiiny `.section-label::before`).
- CTA buttons: 11–12px DM Sans, weight 400, uppercase, letter-spacing 0.25em. Three variants:
  - Primary (gold fill, white text): `background: var(--color-gold); color: white; padding: 16px 40px;`
  - Ghost (gold border + gold text): `border: 0.5px solid var(--color-gold); color: var(--color-gold); padding: 12px 22px;` — used in the nav.
  - Navy fill (cream sections only): `background: var(--color-navy); color: white;`
- Nav links: DM Sans, weight 400, uppercase, letter-spacing 0.20em, **12px** (`--text-nav-link`). Color `rgba(255,255,255,0.65)`; hover → white. Underline reveals from left on hover.
- Footer column titles: DM Sans, weight 400, uppercase, letter-spacing 0.30em, **12px** (`--text-footer-title`), gold.
- Footer column links: DM Sans, weight 300, **15px** (`--text-footer-link`), `--color-text-on-dark-muted`. Hover → gold.
- Footer bottom bar: DM Sans, weight 300, letter-spacing 0.10em, **12px** (`--text-footer-bottom`), `--color-text-on-dark-muted`.

### 4.3 Spacing scale

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  100px;
  --space-10: 120px;
}
```

Section padding (v3.2): **`80px 56px` desktop** (top/bottom 80px, side 56px) and **`56px 24px` mobile**. Tightened from v3's `100px / 64px` because sections were eating too much vertical real estate. Sections that need more weight (hero, page headers) can use `120px 56px` explicitly.

Every cream → cream and cream → navy section transition gets a **0.5px hairline** (`--color-rule` on cream, `--color-rule-on-dark` on navy). Sharper section boundaries are the single biggest visual delta from fidesops.

### 4.4 Layout tokens

```css
:root {
  --container-max:    1200px;
  --reading-max:      720px;
  --display-max:      820px;

  --bp-mobile:    720px;
  --bp-desktop:   1080px;

  --radius:       0px;          /* zero — keep editorial flat */
  --shadow:       none;         /* no drop shadows */
}
```

### 4.5 Breakpoints

Two breakpoints only:

- Mobile: up to 720px
- Desktop: 720px+

Reduce nav padding (56px → 24px), drop multi-column grids to single column, and hide the hero photo on mobile.

---

## 5. Sitemap

| # | Route | Title | Source for copy |
|---|---|---|---|
| 01 | `/` | Lewis Select — A doctor who knows you. A practice that respects your time. | CONTENT.md §01 |
| 02 | `/approach` | Approach — Lewis Select | CONTENT.md §02 |
| 03 | `/about` | Dr. Kevin Lewis — Lewis Select | CONTENT.md §03 |
| 04 | `/start-a-conversation` | Start a Conversation — Lewis Select | CONTENT.md §04 |
| — | `/privacy` | Notice of Privacy Practices — Lewis Select | placeholder, see §10 |
| — | `/404` | Page not found | minimal |

The Blueprint and How It Works pages are **not** in v1. The Blueprint as a concept is covered in homepage Differentiator 04 and Approach Pillar 04. Membership mechanics covered in Approach + the conversation form intro.

Every page renders the global Nav and Footer.

---

## 6. Component inventory

Each component below maps to `CONTENT.md` section types. Components are pure server components unless interactivity is required (form, mobile nav).

### 6.1 Layout primitives

- `<Container>` — max-width `--container-max`, horizontal padding (`56px` desktop, `24px` mobile).
- `<Section>` — vertical padding (`100px` / `64px`), wraps a `<Container>`.
- `<Band tone="cream | navy | white">` — full-bleed section with a tone variant. Most sections use cream or navy in alternation. The `tone="white"` variant is for occasional cards or technology blocks.

### 6.2 UI primitives

- `<Eyebrow>` — small uppercase label, gold, with leading 30–40px hairline. 12px DM Sans weight 400, letter-spacing 0.34em. Use everywhere a section label appears.
- `<Hook>` — rhetorical-question line. Italic Cormorant Garamond, weight 400, **`--text-hook` size** (`clamp(26px, 2.6vw, 34px)` — v3.2 explicitly NOT section-title sized), gold (`--color-gold`). Stands alone (no preceding eyebrow). Used on the homepage Empathy block: `<Hook>If this sounds familiar…</Hook>`. v3.1; sized down v3.2.
- `<Display as="h1|h2|p">` — Cormorant Garamond display. Accepts `italic` boolean and supports embedded italic spans (for the gold-italic words inside headlines).
- `<Lede>` — italic Cormorant sub-headline.
- `<Body>` — DM Sans body, weight 300, 17px. Variants: `default` (ink on cream), `dark` (white on navy), `dark-muted` (`--color-text-on-dark-muted` / `#B5C6E0` on navy), `muted` (`--color-warm-gray` on cream).
- `<Cta variant="primary | navy | ghost">` — see §4.2.
- `<Rule weight="hairline | gold-edge" />` — 0.5px hairline. `gold-edge` variant is the 2px gold left-border treatment used on banners (see tiiny `.mem-not-included`, `.emr-banner`).

### 6.3 Page components

| Component | Used on | Notes |
|---|---|---|
| `<Nav />` | every page | sticky on scroll, navy bg with backdrop blur, slight height shrink + border darken on scroll. See tiiny `nav.scrolled`. |
| `<Footer />` | every page | navy surface, four columns desktop / two columns mobile, gold column titles, gold hover. |
| `<Hero />` | Home, page headers (Approach, About, Conversation page) | full-bleed navy. Optional hero photo treatment (right-aligned, masked-fade, low opacity, mix-blend-mode luminosity — see tiiny `.hero-photo`). |
| `<PhilosophyBand />` | Home | cream surface, centered italic Cormorant blockquote (`--text-blockquote`), gold uppercase attribution underneath. **v3.2 tightening:** section padding `64px 56px` (less than other sections — this is a transitional moment, not a long read). Quote `max-width: 760px` centered. Reserve generous breath ABOVE the band, less below. Add a 0.5px hairline at the bottom of the band to mark the transition into the empathy block. |
| `<EmpathyBlock />` | Home | cream surface. **v3.7 structure:** two parallel Hook + body pairs — Hook 1 ("*Does this sound familiar?*", gold italic Cormorant, `--text-hook`, weight 400) → Body 1 (problem framing) → Hook 2 ("*There is a better way.*", same `<Hook />` treatment as Hook 1) → Body 2 (promise framing). Vertical rhythm: ~12px between each hook and its body; **~32px between Body 1 and Hook 2** (the visual pivot from problem to promise). No eyebrow above the section; the first hook serves as the rhetorical entry. |
| `<Differentiators />` | Home | navy surface, 1.3fr / 1fr two-column grid. Left column has eyebrow, section title, intro body. Right column has four numbered items separated by hairlines. See tiiny `#why` for layout. **v3.2 tightening:** each item's vertical padding 30 → 22, body line-height 1.55, body max-width 480px. **v3.3 sizes (override tiiny defaults):** number `--text-marker` (32px) italic Cormorant gold; title 24px Cormorant weight 400 white; body **`--text-body` (17px)** DM Sans weight 300 line-height 1.55, color `--color-text-on-dark-muted`. Do NOT inherit the tiiny `.why-item-num` 14px or `.why-item-body` 12px sizes. **v3.4 left-column intro body ("Most private practices…"):** explicit override of tiiny `.why-left p` — **18px** DM Sans weight 300 line-height 1.6, color `--color-text-on-dark-muted`, max-width 420px. NOT 14px / weight 200 / 40%-white. |
| `<Pillars />` | Home | cream surface. **v3.8 — three tiles in a single row, bodies hidden.** Desktop: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;` Mobile (<720px): `grid-template-columns: 1fr; gap: 16px;` (vertical stack). **Tile styling:** `background: var(--color-white); border: 0.5px solid var(--color-rule); border-radius: 4px; padding: 36px 28px;` equal heights via grid stretch. Hover: border shifts to `var(--color-gold)` over 200ms ease. **Tile content (top-aligned):** number (italic Cormorant gold, `--text-marker` 32px) → 16px gap → title (Cormorant 22px navy weight 400). **No body** — body paragraphs are hidden on the homepage in v3.8 (preserved in `CONTENT.md` §01 for reference). Drop the previous between-cell hairlines (`border-right` on cells 1–2) and the v3.2 cell padding rules — they're superseded by tile styling. Section title above the grid stays: "Immediate care for your health today. *Stewardship of your health for the years ahead.*" Approach page `<PillarFull />` is **unaffected**. |
| `<PillarStepper />` | Approach | **v3.9 — replaces the prior `<PillarFull />` stacked layout.** Hairline stepper above a single detail panel. Stepper row: three equal-width steps in a 720px-max grid centered, each with an italic Cormorant numeral (42px, weight 400, `--color-rule` inactive / `--color-gold` active) over a small DM Sans label (11px / 400 / 0.30em / uppercase, `--color-warm-gray` inactive / `--color-navy` active). A 0.5px hairline rule spans the stepper row beneath the steps; a 1px gold active-indicator slides horizontally between steps on click (500ms cubic-bezier ease). Detail panel below: 720px max, min-height 320px, renders the active pillar's full content with v3.5 typography (title 32px Cormorant weight 500; subhead 22px italic Cormorant weight 500, block, margin-bottom 14px; body 17px line-height 1.65; "What this replaces" gold-edge banner with the v3.5 13px/600/0.18em label as a block). Content swap: fade out 300ms → swap → fade in 300ms (600ms total). Mobile (<720px): the stepper collapses to a vertical accordion — three full-width rows with numeral + label + chevron, tap to expand height beneath, 400ms ease. Reference visual: `Lewis_Select_Accordion_Concepts.html` Option 2. |
| `<PullQuote />` | Home, About | navy surface, italic Cormorant quote (`--text-blockquote`) + gold uppercase attribution. **v3.4 attribution sizing:** `--text-attribution` (15px) DM Sans weight 400, letter-spacing 0.30em, uppercase, color `--color-gold`. Same treatment everywhere "— Dr. Kevin Lewis" appears: philosophy band, navy pull quote, closing CTA, About page pull quote. Was 12px — now legible. |
| `<AboutBlock />` | Home | cream surface, eyebrow + display + body + sig line + CTA. Optional small portrait at right. |
| `<WhoItsFor />` | Home | cream surface, eyebrow + display + body + CTA. |
| `<ClosingCTA />` | every page except `/start-a-conversation` | navy surface, eyebrow + italic Cormorant headline (Dr. Lewis quote pattern), body, primary gold CTA. |
| `<PhysicianBlock />` | About | cream surface, two-column: portrait (left, 1fr) + content (right, 1.6fr). All bio body text uses `--text-body` (**17px**) DM Sans weight 300, color `--color-text`, line-height 1.7. **Do not use a smaller variant for the bio.** Sub-section eyebrows (In his own place, Driftwood, The network) follow the standard 12px gold eyebrow pattern. Credentials list in a styled label/value table with hairlines. See tiiny `#physician`. |
| `<ConversationForm />` | Start a Conversation | client component, see §7. |

### 6.4 Nav specifics

- **Logo mark + wordmark at left.** Mark: `public/logo-mark.png` rendered as `<img>` at **36×36px**, **12px right margin** against the wordmark, vertically centered to the wordmark cap-height (no baseline alignment — the medallion is round). Wordmark: 22px Cormorant Garamond, weight 300, italic on "Select" in `--color-gold-light`. Beneath the wordmark, a tagline: "PRIVATE CONCIERGE MEDICINE" in **`--text-nav-tagline` (10px)** DM Sans, weight 300, letter-spacing 0.30em, `--color-text-on-dark-muted`. On scroll-shrink (after 24px), the mark scales to **30×30px** in lockstep with the nav height shrink.
- Right-side links: Approach, Dr. Lewis. **`--text-nav-link` (12px)** DM Sans, weight 400, uppercase, letter-spacing 0.20em, `rgba(255,255,255,0.65)`. Hover → white. Underline reveals from left.
- **v3.6 CTA label:** while the Inaugural Cohort window is open (until 2026-07-01), the right-most ghost CTA reads **"Join The Inaugural"** and links to `/inaugural`. After 2026-07-01 it reverts to *"Start a conversation"* and links to `/start-a-conversation` (the redirect target after the route flip — see §3 / next.config.mjs). Style: gold-bordered ghost CTA. **`--text-nav-cta` (11px)** DM Sans, weight 400, uppercase, letter-spacing 0.22em. `border: 0.5px solid var(--color-gold); color: var(--color-gold); padding: 12px 22px;` Hover fills gold with white text. The same date-gating rule applies to every primary CTA on the site (Home hero, Pillars, Who-it's-for, About sig, Approach closing CTA).
- Mobile: hamburger opens a mobile menu beneath the nav with the same links + CTA.
- Sticky on scroll. Background: `rgba(15,39,68,0.97)` with `backdrop-filter: blur(12px)`. After 24px of scroll, height shrinks 80px → 64px and border-bottom darkens.

### 6.5 Footer specifics

Always navy. **v3.6 — three columns desktop** (was four; "Connect" column hidden until phone and email placeholders are filled). Mobile collapses to single column with hairline rules between rows. See `CONTENT.md` §Footer for content.

- **Logo mark + wordmark.** Mark: `public/logo-mark.png` at **44×44px**, **14px right margin** against the wordmark, vertically aligned to the wordmark optical center.
- Wordmark: 24px Cormorant Garamond, weight 300, italic "Select" in `--color-gold-light`.
- Tagline beneath wordmark: 10px DM Sans, weight 300, letter-spacing 0.30em, uppercase, `--color-text-on-dark-muted`.
- Brand paragraph: **`--text-body-sm` (15px)** DM Sans, weight 300, line-height 1.7, `--color-text-on-dark-muted`.
- Column titles: gold, **`--text-footer-title` (12px)**, weight 400, letter-spacing 0.30em, uppercase.
- Column links: **`--text-footer-link` (15px)** DM Sans, weight 300, `--color-text-on-dark-muted`, letter-spacing 0.02em. Hover → gold.
- Bottom bar separated by a 0.5px `rgba(255,255,255,0.10)` rule. Copyright at left, privacy link at right, both **`--text-footer-bottom` (12px)** DM Sans, weight 300, letter-spacing 0.10em, `--color-text-on-dark-muted`.

---

## 7. Inaugural form (`/inaugural`)

### 7.1 Page composition

**v3.6 — route renamed to `/inaugural` (was `/start-a-conversation`).** Add a 308 permanent redirect from the old path in `next.config.mjs`. The page remains the inquiry form for Lewis Select's Inaugural Cohort until **2026-07-01**, after which it reverts to the standard "Start a Conversation" treatment using the post-launch fallback copy in `CONTENT.md` §04 — but the route stays `/inaugural` (the old "Start a Conversation" copy is repurposed under the same URL). Both variants render the `<InaugurationForm />` component (renamed from `<ConversationForm />`) as the primary content. No `<ClosingCTA />` on this page — the form is the conversion action.

Sections in scroll order (Inaugural Cohort variant — v3.6):

1. **`<Hero variant="inaugural-launch" />`** — navy. New three-tier header: (a) eyebrow "INAUGURAL · OPENS"; (b) **prominent date display** "*July 1, 2026*" — italic Cormorant Garamond `--color-gold-light`, `clamp(40px, 5vw, 60px)`, weight 400, letter-spacing -0.005em, centered or left-aligned to match the page rhythm; (c) headline "*An invitation to Lewis Select's Inaugural Cohort.*" set one step smaller than the standard hero headline (`clamp(38px, 4.4vw, 56px)`); (d) supporting subhead beneath in DM Sans 16px weight 300 `--color-gold-light`, max-width 640px: *"Founding-member spots are limited and come with one-time advantages reserved for this cohort."* Drop any prior "If selected to participate…" wording.
2. **Personal letter block** — cream surface. Replaces the previous "Personal note" component. New `<PersonalLetter />` UI primitive with: (a) eyebrow "FROM DR. LEWIS" (uses `.eyebrow--inaugural` 13px / weight 500 / letter-spacing 0.30em); (b) **portrait placeholder** centered, 180×180 rounded square (`border-radius: 4px`) at `--color-cream-dark` background with a 0.5px `--color-gold` hairline border, faint italic caption beneath: "*Photograph forthcoming.*" Component accepts a `src?: string` and `alt?: string` prop; when `src` is set, render an `<Image>` instead of the placeholder; when unset, render the placeholder. (c) **Letter copy** below the portrait, centered horizontally, max-width 620px, **`text-align: center`**, body uses `--text-body` (17px) DM Sans weight 300 line-height 1.7, paragraph spacing 16px. (d) **Signature** at the bottom: italic Cormorant Garamond ~28px navy weight 400, "*— Dr. Kevin Lewis*", centered, 20px above the section's bottom rule. **No** small DM Sans muted note at the bottom (the v3.5 "Lewis Select is direct-pay…" line is dropped).
3. **The form** — cream surface. See §7.2.
4. **"What to expect" block** — cream surface. Eyebrow "WHAT TO EXPECT". Single body paragraph; no conditional "if selected" framing. See `CONTENT.md` §04 for copy.

**Eyebrow scale on `/inaugural` only.** Use page-scoped class `.eyebrow--inaugural` for every section eyebrow on this page: 13px DM Sans weight 500 letter-spacing 0.30em (vs default `--text-eyebrow` 12px / 400 / 0.34em). Leading 30px gold hairline preserved.

### 7.2 Fields  ·  v3.6 — five essential questions

(v3.5 had seven. v3.6 drops the "best way to reach you" radio, drops the "second home" optional input, and renames "Dependents under 25" to "Other family members". Net field count is five required questions plus the conditional follow-ups.)

| Name | Label | Type | Required | Notes |
|---|---|---|---|---|
| `name` | Your name | text | yes | min 2 chars; placeholder: "First and last" |
| `email` | Email | email | yes | RFC 5322-ish via simple regex |
| `phone` | Phone | tel | yes | min 7 digits, allow international format. **No** sub-radio for preferred contact method (v3.6 dropped). |
| `connection` | How are you connected to Dr. Lewis? | radio | yes | Single select. Options: "I'm a member of Driftwood Golf & Lake Club" · "I was referred by a current patient or friend" · "We met at an event" · "I came across Lewis Select on my own". Selecting "referred" or "event" reveals an optional follow-up text input labeled "Who introduced you?" |
| `residence` | Where would you primarily receive care? | text | yes | Single text input. Placeholder: "City and ZIP, e.g., Driftwood, TX 78619". **No** optional "Second home" follow-up (v3.6 dropped). |
| `household` | Who would the membership cover? | checkbox group | yes | Helper text: "Lewis Select is structured for individuals and families. Select all that apply." Options: "Just me" · "My spouse or partner" · **"Other family members"** (v3.6 — renamed from "Dependents under 25"). Selecting "Other family members" reveals a small `number` input (label: "How many?", min 1, max 12, helper: "Spouse, partner, dependents, others in your household."). |
| `prompt` | What prompted you to reach out now? | textarea | yes | rows=4, no character cap. Helper text: "A few sentences is enough — what's on your mind, or what you're hoping a partnership with Dr. Lewis could look like." |
| `_company` | (honeypot) | hidden text | hidden | must be empty; if present, drop submission silently |

**Form styling.** Match the tiiny gate's input style adapted to a light surface: `border: 0.5px solid var(--color-rule); padding: 15px 22px; font-family: var(--font-body); font-weight: 300; font-size: 16px; letter-spacing: 0.02em; outline: none;` Focus state shifts border to `--color-gold`. Labels above inputs use the inaugural eyebrow class (13px / weight 500 / 0.30em). Helper text 14px DM Sans weight 300 color `--color-warm-gray`, directly beneath the label. Required fields marked with a small gold asterisk after the label.

**Spam protection.** Honeypot only (no CAPTCHA — friction is costly at this audience tier).

**Submit button (v3.6):** **"Send Inquiry"** — primary gold variant, full-width on mobile, inline on desktop. (The longer **"Join The Inaugural"** site-wide CTA is for navigation; the on-form submit is the short verb-noun version.) After 2026-07-01 the submit reverts to *Send to Dr. Lewis*.

### 7.3 Submission flow

Identical to the previous spec:

1. Client POSTs JSON to `/api/start-a-conversation`.
2. Route handler validates required fields + email format. Invalid → 400 with `{ error, fields }`.
3. Honeypot check. If `_company` is non-empty, return 200 (silent drop).
4. Rate-limit: in-memory token bucket per IP, max 3 submissions per 10 minutes.
5. Send email via Resend.
6. Return 200 `{ ok: true }`.
7. Client renders success state inline.

### 7.4 Email composition

| Field | Value |
|---|---|
| From | `Lewis Select Website <site@lewisselect.com>` (env: `RESEND_FROM_EMAIL`) |
| Reply-To | the prospect's submitted email |
| To | env: `LEWIS_NOTIFICATION_EMAIL` |
| Subject | `New conversation request — {Name}` |
| Body | Plain HTML formatted with the submitted fields, in the order shown in the form, plus submitted timestamp (ISO) and IP (last octet redacted). |

Implementation in `src/lib/resend.ts` using the `resend` npm package.

### 7.5 Required environment variables

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key, server-only |
| `RESEND_FROM_EMAIL` | verified sender, e.g., `site@lewisselect.com` |
| `LEWIS_NOTIFICATION_EMAIL` | where the form lands (Dr. Lewis's address) |
| `LEWIS_FALLBACK_EMAIL` | shown to users on form error |

`.env.local.example` committed with empty values. `.env.local` gitignored.

### 7.6 Resend setup (operational, for the user)

1. Sign up at resend.com.
2. Add domain `lewisselect.com` (or whichever is canonical) and verify DNS (SPF, DKIM).
3. Create an API key with "Sending" permission, paste into Vercel.
4. Set `RESEND_FROM_EMAIL`, `LEWIS_NOTIFICATION_EMAIL`, `LEWIS_FALLBACK_EMAIL` in Vercel.
5. Test on a preview deploy before flipping production DNS.

---

## 8. Pages — composition order

Each page is composed of these components in order. Copy comes from `CONTENT.md`.

### 8.1 `/` (Home)

1. `<Nav />`
2. `<Hero />` — navy
3. `<PhilosophyBand />` — cream  (the stewardship blockquote from Dr. Lewis)
4. `<EmpathyBlock />` — cream  *(uses `<Hook>If this sounds familiar…</Hook>` instead of an eyebrow; v3.1)*
5. `<Differentiators />` — navy  (the four wedges, unchanged from v2)
6. `<Pillars heading="Care for your health today. Stewardship of your health for the years ahead." count="3" />` — cream  (v3.1: 3-column grid on desktop with hairline rules between cells; single column on mobile)
7. `<PullQuote />` — navy  ("The fastest medicine in the world…")
8. `<AboutBlock />` — cream
9. `<WhoItsFor />` — cream
10. `<ClosingCTA />` — navy  (drops "no application form" line)
11. `<Footer />` — navy

### 8.2 `/approach`

1. `<Nav />`
2. `<Hero variant="page-header" />` — navy ("Stewarding Health for the Hill Country.")  *(v3 header)*
3. `<PillarStepper />` × **1** — single hairline stepper component renders all three pillars  *(v3.9: replaces three stacked `<PillarFull />` blocks)*
   - 01 Direct 24/7 access to your doctor
   - 02 Same-day acute response, care coordination, and advocacy
   - 03 Vision and stewardship of your long-term health
4. `<ClosingCTA />` — navy
5. `<Footer />` — navy

   *(v3: removed the "three commitments" block from v2 — redundant with the new 3-pillar structure.)*

### 8.3 `/about`

1. `<Nav />`
2. `<Hero variant="page-header" />` — navy ("Dr. Kevin Lewis, *DO*.")
3. `<PhysicianBlock />` — cream (portrait + bio + Driftwood + network sub-sections)
4. **`<PullQuote />`** — navy  *(v3: NEW — "Knowing and caring for my patients personally and helping them steward their long-term health is my top priority. It's the heart of good medicine.")*
5. Credentials list — cream
6. Sig line — cream
7. `<ClosingCTA />` — navy
8. `<Footer />` — navy

### 8.4 `/start-a-conversation`

1. `<Nav />`
2. `<Hero variant="page-header" />` — navy (the Dr. Lewis quote)
3. Personal note + small note about direct-pay / by invitation — cream
4. `<ConversationForm />` — cream
5. "What happens next" — cream
6. `<Footer />` — navy
   *(no `<ClosingCTA />` on this page; the form is the CTA)*

---

## 9. Photography

The site has photo slots, but no commissioned photography exists yet. For v1, every photo slot uses a stylized placeholder. See tiiny `.physician-photo-placeholder` for the pattern: a navy-gradient panel with a giant translucent serif initial and a small uppercase caption. Required slots:

| Slot | Used on | Description |
|---|---|---|
| `hero-photo` | Home hero | Hill Country landscape, late-afternoon light, no people, low-opacity treatment with mask-image fade. ~1600×900. (Optional for v1 — the hero works without it.) |
| `dr-lewis-portrait` | About `<PhysicianBlock />` | Dr. Lewis in a Hill Country setting, no white coat. Portrait orientation, ~1200×1500. |
| `practice-exterior` | (future use) | The practice exterior in Dripping Springs. |

`public/photos/PLACEHOLDERS.md` lists what to commission. Until commissioned, render each slot as the navy-gradient placeholder with a serif initial.

---

## 10. SEO

### 10.1 Meta tags

Use `generateMetadata` per route. Helpers in `src/lib/seo.ts`. Required per page:

- `title` — `<Page Name> — Lewis Select`
- `description` — one sentence, ~150 chars
- `openGraph.title`, `openGraph.description`, `openGraph.url`, `openGraph.images`
- `twitter.card = 'summary_large_image'`

### 10.2 Open Graph image

`src/app/opengraph-image.tsx` generates a default OG image (1200×630): navy background, gold-italic "Lewis *Select*" wordmark, page title in display serif. Each page can override.

### 10.3 Schema.org

Add JSON-LD on `/` and `/about`:

- `MedicalOrganization` for the practice (name, address, telephone, url, sameAs)
- `Physician` for Dr. Lewis (name, medicalSpecialty, alumniOf placeholder, worksFor → MedicalOrganization)

### 10.4 Sitemap and robots

- `src/app/sitemap.ts` — generates sitemap.xml
- `src/app/robots.ts` — allows all, points to sitemap

---

## 11. Privacy and legal

`/privacy` renders a placeholder body block:

> The Notice of Privacy Practices required by HIPAA is provided to all members of Lewis Select directly. A copy is available upon request — please [contact the practice](/start-a-conversation) and Dr. Lewis will send it to you.

Do not auto-generate a HIPAA NPP. The real NPP comes from Joe / Dr. Lewis as a separate document later.

---

## 12. Accessibility

- All interactive elements reachable by keyboard, with visible focus rings (1px outline in `--color-gold`, 2px offset). On navy surfaces, focus ring is gold-light.
- Color contrast: text on cream ≥ 12:1 (passes); warm-gray body on cream ≥ 4.5:1 (passes); off-white on navy ≥ 12:1 (passes); muted (40% white) on navy: this is **3.4:1 — failing AA on body text**. Use 50% opacity (`rgba(255,255,255,0.50)`) instead, which passes 4.5:1. Update CSS variables accordingly.
- Form fields have associated `<label>` elements (no placeholder-only labels).
- Headings descend in order; one `<h1>` per page.
- Skip-to-content link as the first focusable element.
- Images have meaningful alt text. Decorative images use `alt=""`.
- Respect `prefers-reduced-motion` — disable any scroll-linked or hover animations.
- Lighthouse Accessibility ≥ 95.

**Note on light-weight type.** DM Sans 200 may render thin on some displays. The hard rule is contrast: WCAG AA contrast is met against backgrounds even at weight 200. If any specific pairing tests poorly on real devices, bump that pairing to 300 (do not change the global default).

---

## 13. Performance

- Lighthouse Performance ≥ 95 mobile and desktop.
- LCP < 2.0s.
- CLS < 0.05.
- Client JS only on `/start-a-conversation` (form) and `<Nav />` (mobile menu, scroll listener).
- `next/font` self-hosts Cormorant Garamond + DM Sans. No external font requests.
- `next/image` for any rasterized images. SVGs imported as React components.

---

## 14. Acceptance criteria

- [ ] All four pages route, render, and contain copy from `CONTENT.md` verbatim.
- [ ] `<Nav />` is sticky and transitions on scroll (height + border-bottom).
- [ ] `<Footer />` renders on every page in navy.
- [ ] All four `<ClosingCTA />` instances render in navy and link to `/start-a-conversation`.
- [ ] The pull quote on `/` renders in navy with attribution.
- [ ] `<ConversationForm />` validates required fields, hits `/api/start-a-conversation`, and shows inline success/error states.
- [ ] On a preview deploy with valid Resend env vars, submitting the form produces an email at `LEWIS_NOTIFICATION_EMAIL`.
- [ ] Honeypot field is present, hidden via CSS (`position: absolute; left: -9999px;`), and silently drops submissions when filled.
- [ ] Site fully responsive at 375px, 720px, 1080px, 1440px.
- [ ] Lighthouse on `/`: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Pages render with JavaScript disabled (server-render). Form requires JS — `<noscript>` shows fallback email.
- [ ] OG image generates correctly (visible at `/opengraph-image`).
- [ ] No raw hex values in any component CSS file. All colors via CSS variables.
- [ ] Type loads with no FOIT.
- [ ] No external font requests at runtime (verify in Network tab).
- [ ] Visual register matches `Lewis Select tiiny site.html` — gold accents, hairline rules, light-weight type, italic display words in gold, navy/cream alternation. Spot-check by opening both side by side.

---

## 15. Setup commands (for Claude Code)

```bash
# 1. Scaffold
npx create-next-app@latest lewis-select \
  --typescript --app --no-tailwind --no-src-dir=false \
  --eslint --import-alias "@/*"
cd lewis-select

# 2. Install deps
npm install resend
npm install --save-dev @types/node

# 3. Initialize files
# (Claude Code creates BUILD_SPEC.md, CONTENT.md, brand assets, all components)

# 4. Local dev
npm run dev
```

`.env.local.example`:

```
# Resend — see BUILD_SPEC.md §7
RESEND_API_KEY=
RESEND_FROM_EMAIL=site@lewisselect.com
LEWIS_NOTIFICATION_EMAIL=
LEWIS_FALLBACK_EMAIL=
```

---

## 16. Deployment

### 16.1 GitHub

- Push to a private repo at `github.com/<user>/lewis-select`.
- `main` is the production branch. PRs preview on Vercel.
- `.gitignore` includes `.env.local`, `.next`, `node_modules`, `.vercel`.

### 16.2 Vercel

- Connect the GitHub repo via Vercel dashboard.
- Framework preset: Next.js.
- Set environment variables in Vercel for both Production and Preview.
- Custom domain: `lewisselect.com` (or chosen domain) — configure DNS as instructed by Vercel.
- Enable Vercel Web Analytics in project settings.

### 16.3 First deploy checklist

1. Push `main` with all code.
2. Verify preview deploy renders all four pages.
3. Add Resend env vars to Production.
4. Verify form submission on preview before flipping production DNS.
5. Add `lewisselect.com` to Vercel and update DNS.
6. Hand off the GitHub repo and Vercel project to Joe.

---

## 17. Out of scope (v1)

Explicitly NOT in this build:

- The Blueprint as a separate page (the concept lives in Differentiator 04 and Pillar 04).
- How It Works as a separate page (membership mechanics live in Approach + the conversation form intro).
- An FAQ component anywhere on the site (questions get answered in the phone conversation).
- Pricing display.
- Panel size / "Founding Twenty" / scarcity numerics.
- Member portal, login, accounts.
- Booking calendar.
- Field Notes / blog.
- Multi-language support, newsletter signup, live chat, cookie consent banner, A/B testing, CMS, AI chat.

---

## 18. Decisions still open

These are NOT blockers — Claude Code can scaffold around them with reasonable defaults.

- **Phone number** for the practice (used in success state of the form, footer, possibly nav).
- **Practice address** (used in Footer "Visit" column and Schema.org).
- **Final domain** (`lewisselect.com` or alternative).
- **Photography commissioning** — see §9.
- **Dr. Lewis's CV details** — fill in `[medical school]`, `[residency program]`, `[board certifications]` placeholders in `/about`.
- **Notice of Privacy Practices** — replace placeholder on `/privacy`.

---

End of spec. Hand to Claude Code with: `claude "Read BUILD_SPEC.md, CONTENT.md, and 'Lewis Select tiiny site.html' in this folder, then scaffold the project as specified. Match the visual register of the tiiny site closely."`
