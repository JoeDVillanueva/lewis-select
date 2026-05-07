# Lewis Select — Marketing Site Build Spec  ·  v2

This document is the build specification for the Lewis Select marketing website. Hand it to Claude Code in a fresh project repository alongside `CONTENT.md`, `Lewis Select tiiny site.html` (visual reference), `Lewis_Logo.svg`, and `Lewis_Logo_mark.svg`. Claude Code should be able to scaffold the project, implement every component and page, and produce a deployable build with no further direction.

Companion files in this folder:

- `CONTENT.md` — all user-facing copy, page by page
- `Lewis Select tiiny site.html` — **visual reference**: match this register (navy + warm gold, Cormorant Garamond + DM Sans, hairlines, light weights, heavy letter-spacing on uppercase). Treat it as the canonical aesthetic, not a layout template.
- `Lewis_Logo.svg`, `Lewis_Logo_mark.svg` — brand marks
- `Lewis_Select_Moodboard.html` — superseded; the tiiny site replaces it.

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
│   ├── favicon.ico
│   ├── logo.svg                   # full Lewis Select wordmark
│   ├── logo-mark.svg              # mark only
│   ├── og-default.png             # social card placeholder
│   └── photos/
│       └── PLACEHOLDERS.md        # spec for photography to be commissioned
├── src/
│   ├── app/
│   │   ├── layout.tsx             # root layout (nav + footer, font loading)
│   │   ├── page.tsx               # / (Home)
│   │   ├── approach/page.tsx
│   │   ├── about/page.tsx
│   │   ├── start-a-conversation/page.tsx
│   │   ├── privacy/page.tsx       # placeholder Notice of Privacy Practices
│   │   ├── api/
│   │   │   └── start-a-conversation/route.ts   # form submit handler
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
│   │   ├── pillar-full/
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

  /* Gold — primary accent (eyebrows, italic display words, CTAs, hairlines) */
  --color-gold:        #B8955A;
  --color-gold-light:  #D4B47A;   /* italicized headline highlights */
  --color-gold-pale:   #F0E4CC;   /* subtle backgrounds, dividers */

  /* Cream — primary light surface (alternating sections, blockquotes) */
  --color-cream:       #F6F3EE;
  --color-cream-dark:  #EDE8DF;

  /* Neutrals */
  --color-white:       #FFFFFF;
  --color-warm-gray:   #6B6560;   /* body text on cream */
  --color-text:        #1A1714;   /* near-black ink */
  --color-rule:        #D8D0C2;   /* warm hairline on cream/white */
  --color-rule-dark:   rgba(184,149,90,0.20);   /* gold hairline on navy */
  --color-text-on-dark:       #F5F1EA;          /* off-white on navy */
  --color-text-on-dark-muted: rgba(255,255,255,0.40);
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

  /* Type scale — clamp() for fluid sizing */
  --text-h1:        clamp(52px, 7vw, 86px);     /* hero */
  --text-section:   clamp(34px, 4vw, 50px);     /* section title */
  --text-h3:        clamp(20px, 2vw, 24px);
  --text-blockquote:clamp(22px, 3vw, 30px);
  --text-stat:      44px;                       /* hero stat numerals */
  --text-body:      14px;
  --text-body-sm:   13px;
  --text-small:     12px;
  --text-eyebrow:   9px;                        /* very small, heavy letter-spacing */

  /* Line heights */
  --lh-tight:   1.05;     /* h1 */
  --lh-snug:    1.15;     /* section title */
  --lh-blockquote: 1.55;  /* blockquote */
  --lh-body:    1.85;     /* body — generous, magazine-paced */
  --lh-loose:   1.95;     /* physician body, long-form */

  /* Letter spacing */
  --ls-tight:        -0.005em;  /* h1 (slight) */
  --ls-eyebrow:      0.38em;    /* section labels */
  --ls-eyebrow-tight:0.20em;    /* nav links, smaller eyebrows */
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
- Body: DM Sans. Default weight 200 (yes, that light). Step up to 300 for headings inside body, 400 only when bolder emphasis is needed.
- Eyebrow: DM Sans, weight 300, uppercase, letter-spacing 0.38em (or 0.30em for narrower contexts), 9px size. Color `--color-gold` on cream, `--color-gold` on navy too. Always preceded by a 30–40px gold hairline (see tiiny `.section-label::before`).
- CTA buttons: 10px DM Sans, weight 300, uppercase, letter-spacing 0.25em. Two variants:
  - Primary (gold fill, white text): `background: var(--color-gold); color: white; padding: 16px 40px;`
  - Ghost (text + bottom hairline): `color: rgba(255,255,255,0.45); border-bottom: 0.5px solid rgba(255,255,255,0.2);`
  - Navy fill (cream sections only): `background: var(--color-navy); color: white;`
- Body text uses `font-weight: 200`. This is unusual but central to the register — do not bump to 400 by default.

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

Section padding is `100px 56px` desktop (`--space-9`) and `64px 24px` mobile (`--space-8` / `--space-5`), top and bottom. The tiiny site uses these values verbatim.

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

- `<Eyebrow>` — small uppercase label, gold, with leading 30–40px hairline. Use everywhere a section label appears.
- `<Display as="h1|h2|p">` — Cormorant Garamond display. Accepts `italic` boolean and supports embedded italic spans (for the gold-italic words inside headlines).
- `<Lede>` — italic Cormorant sub-headline.
- `<Body>` — DM Sans body. Variants: `default` (200 weight), `dark` (on navy, light/40% opacity), `muted` (warm gray on cream).
- `<Cta variant="primary | navy | ghost">` — see §4.2.
- `<Rule weight="hairline | gold-edge" />` — 0.5px hairline. `gold-edge` variant is the 2px gold left-border treatment used on banners (see tiiny `.mem-not-included`, `.emr-banner`).

### 6.3 Page components

| Component | Used on | Notes |
|---|---|---|
| `<Nav />` | every page | sticky on scroll, navy bg with backdrop blur, slight height shrink + border darken on scroll. See tiiny `nav.scrolled`. |
| `<Footer />` | every page | navy surface, four columns desktop / two columns mobile, gold column titles, gold hover. |
| `<Hero />` | Home, page headers (Approach, About, Conversation page) | full-bleed navy. Optional hero photo treatment (right-aligned, masked-fade, low opacity, mix-blend-mode luminosity — see tiiny `.hero-photo`). |
| `<PhilosophyBand />` | Home | cream surface, centered italic Cormorant blockquote, gold uppercase attribution underneath. |
| `<EmpathyBlock />` | Home | cream surface, eyebrow + two body paragraphs. |
| `<Differentiators />` | Home | navy surface, 1.3fr / 1fr two-column grid. Left column has eyebrow, section title, intro body. Right column has four numbered items separated by hairlines. See tiiny `#why` for layout. |
| `<Pillars />` | Home | cream surface, 3-column grid (or 4×2) with hairline borders between cells. Each pillar = number, title, body. See tiiny `.membership-grid`. |
| `<PillarFull />` | Approach | seven items with subhead + body + "What this replaces" tag treated as a gold left-edge banner. |
| `<PullQuote />` | Home | navy surface, italic Cormorant quote with subtle huge-numeral background watermark (see tiiny `.founding-bg` pattern). |
| `<AboutBlock />` | Home | cream surface, eyebrow + display + body + sig line + CTA. Optional small portrait at right. |
| `<WhoItsFor />` | Home | cream surface, eyebrow + display + body + CTA. |
| `<ClosingCTA />` | every page except `/start-a-conversation` | navy surface, eyebrow + italic Cormorant headline (Dr. Lewis quote pattern), body, primary gold CTA. |
| `<PhysicianBlock />` | About | cream surface, two-column: portrait (left, 1fr) + content (right, 1.6fr). Credentials list in a styled label/value table with hairlines. See tiiny `#physician`. |
| `<ConversationForm />` | Start a Conversation | client component, see §7. |

### 6.4 Nav specifics

- Logo at left (Lewis_Logo.svg), wordmark next to mark with a small tagline beneath: "PRIVATE CONCIERGE MEDICINE" in 8px DM Sans, letter-spacing 0.35em, gold-pale.
- Right-side links: Approach, Dr. Lewis. (Two links — fewer than the previous spec since pages were dropped.)
- "Start a conversation" as a gold-bordered ghost CTA (right-most) — see tiiny `.nav-cta`.
- Mobile: hamburger opens a mobile menu beneath the nav with the same links + CTA.
- Sticky on scroll. Background: `rgba(15,39,68,0.97)` with `backdrop-filter: blur(12px)`. After 24px of scroll, height shrinks 76px → 64px and border-bottom darkens.

### 6.5 Footer specifics

Always navy. Four columns desktop, two columns mobile. See `CONTENT.md` §Footer for content.

- Column titles: gold, 9px, weight 300, letter-spacing 0.30em, uppercase.
- Column links: rgba(255,255,255,0.35), 12px, weight 200, letter-spacing 0.04em. Hover → gold.
- Bottom bar separated by a 0.5px rgba(255,255,255,0.07) rule. Copyright at left, privacy link at right, both 10px / weight 200 / rgba(255,255,255,0.20).

---

## 7. Conversation form (`/start-a-conversation`)

### 7.1 Page composition

The page renders the `<ConversationForm />` component as its primary content (no `<ClosingCTA />` at the bottom of this page — the form is the conversion action). Sections in scroll order:

1. `<Hero />` — navy, with the Dr. Lewis quote ("I would be honored to be your family's physician.")
2. Personal note (eyebrow + body paragraph in Dr. Lewis's voice + small note about direct-pay/by invitation) — cream
3. The form — cream
4. "What happens next" block — cream

### 7.2 Fields

| Name | Label | Type | Required | Validation |
|---|---|---|---|---|
| `name` | Name | text | yes | min 2 chars |
| `phone` | Phone | tel | yes | min 7 digits, allow international format |
| `email` | Email | email | yes | RFC 5322-ish via simple regex |
| `location` | Where you live | text | no | placeholder: "city / community" |
| `family` | Family composition | text | no | placeholder: "number of adults, number of children" |
| `referral` | How you heard about Lewis Select | text | no | |
| `notes` | Anything you'd like Dr. Lewis to know in advance | textarea | no | rows=5 |
| `_company` | (honeypot) | hidden text | hidden | must be empty; if present, drop submission silently |

**Form styling.** Match the tiiny gate's input style adapted to a light surface: `border: 0.5px solid var(--color-rule); padding: 15px 22px; font-family: var(--font-body); font-weight: 200; font-size: 14px; letter-spacing: 0.05em; outline: none;` Focus state shifts border to `--color-gold`. Labels above inputs in eyebrow style.

**Submit button:** *Send to Dr. Lewis* — primary gold variant, full-width on mobile, inline on desktop.

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
3. `<PhilosophyBand />` — cream
4. `<EmpathyBlock />` — cream
5. `<Differentiators />` — navy
6. `<Pillars heading="Everything in one practice" />` — cream
7. `<PullQuote />` — navy
8. `<AboutBlock />` — cream
9. `<WhoItsFor />` — cream
10. `<ClosingCTA />` — navy
11. `<Footer />` — navy

### 8.2 `/approach`

1. `<Nav />`
2. `<Hero variant="page-header" />` — navy ("Hill Country Stewardship Medicine.")
3. Three commitments block (eyebrow + section title + 3 numbered items, cream surface)
4. `<PillarFull />` × 7 — alternating cream/white surfaces (or all cream with internal hairlines)
5. `<ClosingCTA />` — navy
6. `<Footer />` — navy

### 8.3 `/about`

1. `<Nav />`
2. `<Hero variant="page-header" />` — navy ("Dr. Kevin Lewis, *DO*.")
3. `<PhysicianBlock />` — cream (portrait + bio + Driftwood + network sub-sections)
4. Credentials list — cream
5. Sig line — cream
6. `<ClosingCTA />` — navy
7. `<Footer />` — navy

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
