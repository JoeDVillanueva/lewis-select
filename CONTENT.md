# Lewis Select — Site Content  ·  v5

All user-facing copy for the marketing site, organized by page and by section. Section names (e.g., "Hero," "Empathy block") map to component blocks defined in `BUILD_SPEC.md`. Italics in `*single asterisks*` mark display lines that should be set in the display serif (Cormorant Garamond), italicized. Roman text is body. CTAs are marked with `→` and link to `/inaugural` unless otherwise noted.

**v3.6 — site-wide CTA label.** While the Inaugural Cohort window is open (until 2026-07-01), the primary CTA on every page reads **"Join The Inaugural"** and links to `/inaugural`. Below, the historical *"Start a conversation"* label is preserved in copy for clarity but should render as **"Join The Inaugural"** in the build until 2026-07-01, after which it reverts.

The site has four pages:

1. `/` — Home
2. `/approach` — Approach
3. `/about` — Dr. Kevin Lewis
4. `/inaugural` — Inaugural (was `/start-a-conversation`; legacy URL redirects 308)

The visual reference is `Lewis Select tiiny site.html` in this folder, with the v4/v5 size and color updates documented in `Lewis_Select_Moodboard.html`. Match that register: navy + warm gold, Cormorant Garamond display + DM Sans body, hairline rules, light weights, generous letter-spacing on uppercase eyebrows.

---

## 01 — Home (`/`)

### Hero  ·  navy surface

**Eyebrow:** A private medical practice in the Texas Hill Country

**Headline:** A doctor who knows you. *A practice that respects your time.*

(The italicized phrase sets in `--gold-light`; the rest in white.)

**Body:** For Hill Country families. Direct 24/7 access. Same-day specialist placement. Personal planning for your long-term health.

**Primary CTA:** → Join The Inaugural  [/inaugural]  *(reverts to "Start a conversation" → /inaugural after 2026-07-01)*
**Secondary (ghost) CTA:** Read the approach  [/approach]

### Philosophy band  ·  cream surface

A short blockquote section, set in italic Cormorant Garamond, large.

**Quote:** *"We've lost the concept of stewardship in modern medicine. Lewis Select is built around getting it back."*

**Attribution:** — Dr. Kevin Lewis

### Empathy block  ·  cream surface

(v3.7: restructured into two parallel Hook + body pairs — problem → promise. Both hooks render with the same `<Hook />` treatment: gold italic Cormorant, `--text-hook`, weight 400. Vertical rhythm: ~12px hook → body, ~32px Body 1 → Hook 2 — this is the visual pivot. See `BUILD_SPEC.md` §6.3 `<EmpathyBlock />`.)

**Hook 1 (gold italic Cormorant, `--text-hook` size, weight 400):** *Does this sound familiar?*

**Body 1:** You wait 3 weeks for an appointment. The visit lasts only 15 minutes long. A specialist referral takes a month. Your medical records are scattered across 6 portals. Modern medicine treats your time like the cheapest part of your life.

**Hook 2 (gold italic Cormorant, `--text-hook` size, weight 400):** *There is a better way.*

**Body 2:** We treat your time and your relationship with your physician as the things that matter most.

### Four differentiators  ·  navy surface

**Eyebrow:** Care shaped differently

**Section title:** Four things you will not find anywhere else in central Texas.

**Intro body:** Most concierge practices give you a longer appointment, a portal, and a phone number. Lewis Select offers four things you won't find anywhere else.

**01 — Your physician practices here in Hill Country.**
Your medicine should not require a commute. Most private medicine in central Texas is in Westlake or downtown Austin — a 30-40 minute drive from home. Lewis Select is based in Dripping Springs. Dr. Lewis lives where you live.

**02 — Skip the waiting line. Get a personal referral.**
When you need a cardiologist or an oncologist, you usually wait for weeks. With Lewis Select, you skip the line. Dr. Lewis picks up the phone and calls the specialist you need. Same-day or next-day placement is the norm, not the exception.

**03 — See your own doctor — not a "panel."**
Direct contact with Dr. Lewis — rather than getting passed around a panel of rotating physicians and staff.

**04 — Get a personal plan for your future health.**
You leave most doctor appointments with a vague impression and a list of things to remember. Lewis Select helps you manage your long-term health progress with a living Health Blueprint — a personal gameplan baselining your health today, which health levers you need to pull next, and clarity around the most important health outcomes to shooting for over the long haul.

### Three pillars  ·  cream surface

(v3.8: rendered as three tiles in a single row. **Only the number and title appear on the live home page** — the body paragraphs below are preserved here for reference but are not rendered on `/`. The full pillar content lives on `/approach` via `<PillarFull />`. See `BUILD_SPEC.md` §6.3 `<Pillars />`.)

**Eyebrow:** What's included

**Section title:** Immediate care for your health today. *Stewardship of your health for the years ahead.*

**Intro body:** Lewis Select has three pillars. The first two are about today — how fast you can reach your doctor, how fast specialists answer when you need them, how a hospital admission gets handled. The third is about decades — the science, the data, and the written plan that turn medicine from reaction into stewardship.

**01 — Direct 24/7 access to your doctor.**
*(body hidden on home in v3.8 — preserved for reference)* Get in contact with Dr. Lewis directly, any day, any hour. The doctor who knows your family on Tuesday is the doctor who answers on Sunday at nine.

**02 — Same-day acute response, with care coordination and advocacy.**
*(body hidden on home in v3.8 — preserved for reference)* When something serious happens, you make one phone call and Dr. Lewis quarterbacks the whole diagnosis and medical response activities from there. Calling specialists, coordinating with the hospital, advocating for you.

**03 — Vision and stewardship of your long-term health.**
*(body hidden on home in v3.8 — preserved for reference)* The longest, healthiest version of your life does not happen by accident. It's intentional and it's proactive. Lewis Select helps you and your family create a personal plan that ties your data, your history, your goals, and your conversations together into a clear, high-leverage plan for the future.

**CTA:** → Read the full approach  [/approach]

### Pull quote  ·  navy surface

**Quote:** *"The fastest medicine in the world is the medicine that already knows you."*

**Attribution:** — Dr. Kevin Lewis

### Your physician  ·  cream surface

**Eyebrow:** The physician

**Section title:** Dr. Kevin Lewis, *third-generation Central Texas physician.*

**Body:** Fifth-generation Texan. Third-generation physician. Level 1 trauma-trained. Dr. Lewis runs a primary care practice in Dripping Springs, serves as Medical Director of a private community in Driftwood. He has built a twenty-five-year specialist network across Austin.

**Sig line (italic Cormorant):** *Lewis Select is the practice he has wanted to build for a long time.*

**CTA:** → Read more about Dr. Lewis  [/about]

### Who it's for  ·  cream surface

**Eyebrow:** Membership

**Section title:** Built for families who want a *different relationship* with medicine.

**Body:** Lewis Select is for Hill Country families who want their physician to know them by name, who expect their time to be respected as much as their health, and who believe their best decade has not happened yet. Membership is limited each year.

**CTA:** → Join The Inaugural  [/inaugural]  *(reverts to "Start a conversation" → /inaugural after 2026-07-01)*

### Closing CTA  ·  navy surface

(v5: drops the "There is no application form." line.)

**Eyebrow:** The next step

**Headline:** *"I would be honored to be your family's physician."*

**Attribution:** — Dr. Kevin Lewis

**Body:** If your family is considering a different kind of medical practice, the next step is a conversation with Dr. Lewis — by phone or in person.

**Primary CTA:** → Join The Inaugural  [/inaugural]  *(reverts to "Start a conversation" → /inaugural after 2026-07-01)*

---

## 02 — Approach (`/approach`)

### Page header  ·  navy surface

(v5: new header — "Stewarding Health for the Hill Country.")

**Eyebrow:** Approach

**Headline:** *Stewarding Health for the Hill Country.*

**Body 1:** Stewardship is an old word. It used to describe what a physician did for a family — kept watch, year after year, knowing the children, the parents, the parents' parents. The doctor was the steward of the family's health, in the same way a rancher was the steward of the land.

**Body 2:** Modern medicine has lost the word. Lewis Select is built around getting it back.

### The three pillars in full  ·  cream / white alternating

(v5: collapsed from 7 to 3.)

**Eyebrow:** The program

**Section title:** Immediate care for your health today. *Stewardship of your health for the years ahead.*

**Intro body:** Lewis Select stands on three pillars. Two address what most families fear most about modern medicine: that you can't reach your doctor when you need them, and that when something goes wrong the system can't act fast enough. The third addresses something most practices don't even attempt — a real plan for the long arc of your health.

Each pillar is structured: number (italic Cormorant, gold), title (Cormorant), subhead (italic Cormorant, smaller), body, and a "What this replaces" tag with a gold left-edge treatment. **(v3.5: title weight 500, subhead 22px weight 500, "What this replaces." label 13px weight 600 — and subhead and label are block-level so the body that follows always begins on its own line. See `BUILD_SPEC.md` §6.3 `<PillarFull />`.)**

**01 — Direct 24/7 access to your doctor.**
*One number. Seven days. The same physician.*
Get in contact with Dr. Lewis directly, any day, any hour. The doctor who sees you on Tuesday is the same doctor who responds to a call from the golf course on Sunday afternoon.
*What this replaces.* The hold music, the Friday-evening triage line, the weekend ER trip that did not need to happen.

**02 — Same-day acute response, care coordination, and advocacy.**
*One phone call. Everything else is handled.*
When something serious happens — a hospital admission, an ER visit, an injury on a trip, a specialist needed this week — you make one phone call. Dr. Lewis is on the phone within minutes.

He calls a specialist by name from a network he has personally worked with for twenty-five years; same-day or next-day placement is the norm, not the exception. He coordinates with the hospital, advocates for you with the specialists, and ensures the records flow back to your file. Pre-travel consults are part of membership. Longitudinal record-keeping — every test, every consult, every prescription — is centralized.
*What this replaces.* The three-week wait for a referral, the hours of triage and paperwork that fall on you in a moment when neither of you should be doing them, the sense that you are introducing yourself from scratch every time.

**03 — Vision and stewardship of your long-term health.**
*A written plan for the years ahead.*
The longest, healthiest version of your life does not happen by accident. It happens with a plan — drawn from real data, refined every year, acted on consistently. Lewis Select gives you that plan.

Lewis Select runs a 100+ biomarker panel — five to ten times the depth of a typical practice — measuring cardiovascular, metabolic, hormonal, nutritional, inflammatory, and early-cancer signals against the latest longevity science. Your wearable data — Apple Watch, Oura, Whoop — is watched quietly, with proactive outreach when something shifts.

The longest, healthiest version of your life does not happen by accident. It's intentional and it's proactive. Lewis Select helps you and your family create a personal plan that ties your data, your history, your goals, and your conversations together into a clear, high-leverage plan for the future.
*What this replaces.* The annual cholesterol screen and the assumption that "normal" is the same as "optimal." The vague impression you leave the doctor's office with. The reactive model where the patient calls the doctor only after something is already wrong.

### Closing CTA  ·  navy surface

(Same component and copy as the homepage closing CTA.)

---

## 03 — Dr. Kevin Lewis (`/about`)

### Page header  ·  navy surface

**Eyebrow:** The physician

**Headline:** Dr. Kevin Lewis, *DO.*

**Subhead body:** A third-generation Central Texas physician, practicing in the place his family helped settle.

### Bio  ·  cream surface (with portrait left, body right)

**Eyebrow:** In his own place

**Body 1:** Dr. Kevin Lewis is a fifth-generation Texan and a third-generation physician. His grandfather practiced in Lockhart. His father practiced in Austin. Dr. Lewis trained in Dallas, completed a residency that included Level 1 trauma rotations, and returned to the Hill Country with a specific intention: to build the most personal medical practice his career would allow.

**Body 2:** He chose Dripping Springs deliberately. It is where his family lives, where his children go to school, and where the Hill Country families who would become Lewis Select members already gather. He believes a physician should practice where he lives — close enough that the relationship between doctor and patient continues outside the four walls of the office, in the places where life actually happens. *A neighbor is a different kind of physician than a stranger.*

### The Driftwood Medical Director role  ·  cream surface

**Eyebrow:** Driftwood

**Body:** Dr. Lewis serves as Medical Director of Driftwood Golf & Lake Club, the private community where many of his patients live. The role is distinct from Lewis Select membership — but the thread that connects the two is the same: medicine that begins with a relationship, not an appointment.

### The specialist network  ·  cream surface

**Eyebrow:** The network

**Body:** Over twenty-five years of practice, Dr. Lewis has built a specialist network across Austin that spans every major discipline — cardiology, oncology, orthopedics, neurology, endocrinology, gastroenterology, fertility, dermatology, and beyond. These are physicians he has personally worked with, sent patients to, and exchanged calls with for years. Membership in Lewis Select gives you access to this network the way Dr. Lewis accesses it himself: by phone, by name, in real time.

### Pull quote  ·  navy surface

(v5: NEW — placed between the network section and credentials. Use the same large italic-Cormorant + gold-attribution pattern as the homepage closing CTA.)

**Quote:** *"Knowing and caring for my patients personally and helping them steward their long-term health is my top priority. It's the heart of good medicine."*

**Attribution:** — Dr. Kevin Lewis

### Credentials  ·  cream surface (compact list, left-aligned label / right-aligned value, gold rules)

**Eyebrow:** On the record

| Label | Value |
|---|---|
| Degree | Doctor of Osteopathic Medicine, [medical school — to be filled from CV] |
| Residency | [Program and location, to be filled from CV] · including Level 1 trauma rotations |
| Board certifications | [To be filled from CV] |
| Medical Director | Driftwood Golf & Lake Club |
| Years in practice | Twenty-five+ in central Texas |

**Sig line (italic Cormorant, larger, after credentials):** *Lewis Select is the practice he has wanted to build for a long time.*

### Closing CTA  ·  navy surface

(Same component and copy as the homepage closing CTA.)

---

## 04 — Inaugural (`/inaugural`)

> **v3.6 — route renamed from `/start-a-conversation` to `/inaugural`.** A 308 permanent redirect from the old path is configured in `next.config.mjs` so legacy links keep working. Inaugural Cohort window active May 8 – July 1, 2026; on/after **July 1, 2026** the page reverts to the post-launch fallback copy preserved at the end of this section (the route stays `/inaugural`).
>
> **Page-scoped eyebrow treatment:** every eyebrow on `/inaugural` uses 13px DM Sans weight 500 letter-spacing 0.30em (page-scoped class `.eyebrow--inaugural` — see `BUILD_SPEC.md` §7.1).

### Hero  ·  navy surface

**Eyebrow:** Inaugural · Opens

**Date display (italic Cormorant Garamond, color `--color-gold-light`, `clamp(40px, 5vw, 60px)`, weight 400, letter-spacing -0.005em):** *July 1, 2026*

**Headline (one step smaller than standard hero):** *An invitation to Lewis Select's Inaugural Cohort.*

**Subhead (DM Sans 16px, weight 300, `--color-gold-light`, max-width 640px):** Founding-member spots are limited and come with one-time advantages reserved for this cohort.

### Personal letter  ·  cream surface  ·  centered, max-width 620px

(v3.6 — replaces the v3.5 "Personal note" block. Reads as a short letter from Dr. Lewis with his portrait at the top and his signature at the bottom. Body copy is centered. The v3.5 muted footer note about direct-pay is dropped here — that detail can live in the standard "Start a Conversation" fallback or in a future FAQ.)

**Eyebrow:** From Dr. Lewis

**Portrait placeholder (centered, 180×180 rounded square, `--color-cream-dark` background, 0.5px gold hairline border):** *Photograph forthcoming.*

(Component accepts a `src` prop. Drop in Dr. Lewis's portrait when ready and the placeholder swaps automatically.)

**Letter body (DM Sans 17px weight 300 line-height 1.7, centered, max-width 620px, paragraph spacing 16px):**

To the families considering us,

Lewis Select is opening to its Inaugural Cohort — a small group of founding families who will become the first members of the practice. Founding spots are limited, and intentionally so. The relationships formed in the first season set the character of the practice for the years that follow.

Founding members receive advantages reserved for this cohort and offered only once: founding-rate pricing locked for two years, an unhurried in-person introduction before launch, and a hand in shaping how Lewis Select serves Hill Country families.

If you are interested, please share a brief introduction below. I will be reading every inquiry myself.

**Signature (italic Cormorant Garamond, ~28px navy, weight 400, centered, 20px above the section's bottom rule):** *— Dr. Kevin Lewis*

### Form  ·  cream surface

**Eyebrow:** Inaugural inquiry

**Form intro (italic Cormorant ~18px, navy, max-width 640px):** *A brief introduction so Dr. Lewis can prepare for our follow-up conversation. The fields below are the essentials — anything else, we'll cover on the call.*

Form fields, in order (see `BUILD_SPEC.md` §7.2 for field types and validation):

| Field | Label | Required | Notes |
|---|---|---|---|
| `name` | Your name | yes | placeholder: "First and last" |
| `email` | Email | yes | |
| `phone` | Phone | yes | tel input only (v3.6 — dropped the "Best way to reach you" radio) |
| `connection` | How are you connected to Dr. Lewis? | yes | radio — "I'm a member of Driftwood Golf & Lake Club" · "I was referred by a current patient or friend" · "We met at an event" · "I came across Lewis Select on my own". "Referred" or "event" reveals optional follow-up: "Who introduced you?" |
| `residence` | Where would you primarily receive care? | yes | text — placeholder: "City and ZIP, e.g., Driftwood, TX 78619" (v3.6 — dropped the optional "Second home, if applicable" follow-up) |
| `household` | Who would the membership cover? | yes | helper: "Lewis Select is structured for individuals and families. Select all that apply." Checkboxes: "Just me" · "My spouse or partner" · **"Other family members"** (v3.6 — renamed from "Dependents under 25"; reveals a small number input with helper "Spouse, partner, dependents, others in your household.") |
| `prompt` | What prompted you to reach out now? | yes | textarea, rows=4. Helper: "A few sentences is enough — what's on your mind, or what you're hoping a partnership with Dr. Lewis could look like." |

**Submit button (gold, primary):** **Send Inquiry**

### What to expect  ·  cream surface

(v3.6 — eyebrow renamed from "After you submit" to "What to expect". Copy shortened; no conditional "if selected" framing.)

**Eyebrow:** What to expect

**Body:** Inquiries are reviewed personally by Dr. Lewis ahead of the July 1, 2026 launch. Inaugural spots are limited; we will be candid with you either way. Most replies arrive within a week.

### Success state  ·  cream surface

(Inline replacement of the form, no redirect.)

**Eyebrow:** Sent

**Headline:** *Thank you. Your inquiry is in front of Dr. Lewis.*

**Body:** Dr. Lewis will reach out directly — generally within a week — ahead of the July 1, 2026 launch. Inaugural spots are limited; we will be candid with you either way.

### Error state  ·  cream surface

**Eyebrow:** Something went wrong

**Body:** We could not send your inquiry just now. Please try again in a moment, or email us directly at [email — TK].

---

### Post-launch fallback  ·  effective July 1, 2026  ·  route stays `/inaugural`

After the Inaugural Cohort window closes, the page swaps to the standard "Start a Conversation" copy below. The route stays at `/inaugural` (no route flip — the legacy redirect from `/start-a-conversation` keeps working). Only the eyebrows, headline, body copy, button label, and "What happens next" text swap back to this version. The hero shifts back from the new three-tier launch-date treatment to the standard `<Hero />` pattern. Eyebrows revert from `.eyebrow--inaugural` (13px / 500) to the default `--text-eyebrow` (12px / 400). The Personal Letter block reverts to a left-aligned Personal Note block (no portrait, no centered letter, no signature).

#### Page header  ·  navy surface

**Eyebrow:** Begin the conversation

**Headline:** *"I would be honored to be your family's physician."*

**Attribution:** — Dr. Kevin Lewis

#### Personal note  ·  cream surface

**Eyebrow:** From Dr. Lewis

**Body:** Lewis Select is built one family at a time. The next step, if you are considering us, is a phone call with Dr. Lewis. The call is the same one we begin every member relationship with. We will use it to understand what you are looking for, to answer your questions plainly, and to determine together whether this practice is the right fit for your family.

**Small note (DM Sans, muted):** Lewis Select is direct-pay; no insurance is billed for membership. Membership is by invitation.

#### Form

(Same five essential fields as the Inaugural Cohort variant — the v3.6 simplified set remains the post-launch standard. No "Best way to reach you" radio, no "Second home" follow-up, household checkbox stays as "Other family members".)

**Submit button (gold, primary):** *Send to Dr. Lewis*

#### What happens next  ·  cream surface

**Eyebrow:** After you submit

**Body:** Dr. Lewis will be in touch directly — generally within a week. Most conversations are by phone. Some are in person. None are a sales pitch.

#### Success state  ·  cream surface

**Eyebrow:** Sent

**Headline:** *Thank you. Dr. Lewis will be in touch.*

**Body:** Your note has been sent. Dr. Lewis will reach out directly, generally within a week. If something is urgent, you can also call the practice at [phone — TK] during business hours.

---

## Footer (every page)  ·  navy surface

(v3.6 — three-column footer; the "Connect" column is hidden until phone and email placeholders are filled. Brand paragraph rewritten.) A three-column footer with a hairline rule above the bottom bar. Gold accent on column titles and hover states. Sizes:

- **Wordmark:** 24px Cormorant Garamond, italic on "Select" in `--gold-light`. v3.5 — preceded by the gold medallion mark at 44×44 with 14px right margin.
- **Tagline beneath wordmark:** 10px DM Sans, weight 300, letter-spacing 0.30em, uppercase, `--text-on-dark-muted` color.
- **Brand paragraph:** 15px DM Sans, weight 300, line-height 1.7, `--text-on-dark-muted`.
- **Column titles:** 12px DM Sans, weight 400, letter-spacing 0.30em, uppercase, `--gold` color.
- **Column links:** 15px DM Sans, weight 300, `--text-on-dark-muted`. Hover → gold.
- **Bottom bar copyright + privacy:** 12px DM Sans, weight 300, letter-spacing 0.10em, `--text-on-dark-muted`.

| Column | Heading | Items |
|---|---|---|
| 1 | Lewis *Select* (wordmark, italic on "Select" in `--gold-light`) | Tagline (small, uppercase, letter-spaced): A PRIVATE MEDICAL PRACTICE · TEXAS HILL COUNTRY. **Brand paragraph (v3.6):** "Exclusive concierge medicine for the Hill Country. Get fast, direct access to a doctor who knows you, a specialist network on speed dial, and a personal plan for your long-term health." |
| 2 | The Practice | Approach · Dr. Kevin Lewis · Join The Inaugural  *(reverts to "Start a Conversation" after 2026-07-01; link target stays `/inaugural`)* |
| 3 | Visit | Dripping Springs, TX · By appointment |
| ~~4~~ | ~~Connect~~ | **Hidden in v3.6.** Restore once phone and email are confirmed. Restored content: Phone — [TK] · Email — [TK]. |

**Bottom bar:** © 2026 Lewis Select. All rights reserved.  ·  Notice of Privacy Practices  [/privacy]
