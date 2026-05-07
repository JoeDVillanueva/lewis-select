/**
 * Lewis Select — typed content exports.
 * Mirrors `CONTENT.md`. Italics are denoted by `<em>` spans inside JSX-rendered
 * display headlines so the gold-italic treatment can be applied via CSS.
 */

import type { ReactNode } from "react";

/* ─── Footer ─────────────────────────────────────────── */

export const footer = {
  tagline: "A Private Medical Practice · Texas Hill Country",
  blurb:
    "An invitation-only medical practice in Dripping Springs, Texas. Direct access to your physician. A specialist network on speed dial. A written plan for the year ahead.",
  practice: [
    { href: "/approach", label: "Approach" },
    { href: "/about", label: "Dr. Kevin Lewis" },
    { href: "/start-a-conversation", label: "Start a Conversation" },
  ],
  visit: ["Dripping Springs, TX", "By appointment"],
  connect: ["Phone — TK", "Email — TK"],
};

/* ─── Closing CTA (re-used on Home, Approach, About) ─── */

export const closingCta = {
  eyebrow: "The next step",
  attribution: "— Dr. Kevin Lewis",
  body:
    "If your family is considering a different kind of medical practice, the next step is a conversation with Dr. Lewis — by phone or in person.",
  ctaLabel: "Start a conversation",
  ctaHref: "/start-a-conversation",
};

/* ─── Home ────────────────────────────────────────────── */

export const home = {
  hero: {
    eyebrow: "A private medical practice in the Texas Hill Country",
    primaryCta: { label: "Start a conversation", href: "/start-a-conversation" },
    secondaryCta: { label: "Read the approach", href: "/approach" },
  },
  philosophy: {
    quote:
      "Stewardship is an old word. It used to describe what a physician did for a family — kept watch, year after year, knowing the children, the parents, the parents' parents. Lewis Select is built around getting it back.",
    attribution: "Dr. Kevin Lewis",
  },
  empathy: {
    eyebrow: "If this sounds familiar",
    paragraphs: [
      "You wait three weeks for an appointment. The visit is fifteen minutes. The person who answers your call is not your doctor. A specialist referral takes another month. Your records are scattered across six portals. Modern medicine treats your time like the cheapest part of your life.",
      "There is another way — one that begins by treating your time, and the relationship with your physician, as the things that matter most.",
    ],
  },
  differentiators: {
    eyebrow: "Care of a different shape",
    intro:
      "Most private practices give you a longer appointment and a phone number. Lewis Select gives you four things you won't find anywhere else.",
    items: [
      {
        n: "01",
        title: "Your physician practices in the Hill Country.",
        body:
          "Most private medicine in central Texas is in Westlake or downtown Austin — a thirty- to forty-minute drive from your driveway in good traffic. Lewis Select is in Dripping Springs. Dr. Lewis lives where you live, sees you in the same places you go, and is closer to your home than your nearest emergency room. Your medicine should not require a commute.",
      },
      {
        n: "02",
        title: "Past the waiting line. By name.",
        body:
          "When you need a cardiologist or an oncologist, the standard wait is weeks. With Lewis Select, you do not wait. Dr. Lewis picks up the phone and calls a specialist by name — someone he has personally worked with for twenty-five years. Same-day or next-day placement is the norm, not the exception. That alone changes your relationship to time.",
      },
      {
        n: "03",
        title: "The same physician. Day or night.",
        body:
          "Direct text or call to Dr. Lewis — any day, any hour. The doctor who knows your family on Tuesday is the doctor who answers on Sunday at nine. Not an answering service. Not a covering physician. Not a name you have never met before. The fastest medicine in the world is the medicine that already knows you.",
      },
      {
        n: "04",
        title: "A written plan for the year ahead.",
        body:
          "You leave most doctor appointments with a vague impression and a list of things to remember. Lewis Select sends you home with a Health Blueprint — a bound document that lays out exactly what your year of health should look like, in plain language, for every member of your family. Your spouse can read it. You can come back to it. You do not have to remember anything. Most practices send you home with a prescription. Lewis Select sends you home with a plan.",
      },
    ],
  },
  pillars: {
    eyebrow: "What's included",
    intro:
      "Lewis Select has three pillars. The first two are about today — how fast you can reach your doctor, how fast specialists answer when you need them, how a hospital admission gets handled. The third is about decades — the science, the data, and the written plan that turn medicine from reaction into stewardship.",
    items: [
      {
        n: "01",
        title: "Direct 24/7 access to your doctor.",
        body:
          "Text or call Dr. Lewis directly, any day, any hour. The doctor who knows your family on Tuesday is the doctor who answers on Sunday at nine. No answering service. No covering physician.",
      },
      {
        n: "02",
        title: "Same-day acute response, with care coordination and advocacy.",
        body:
          "When something serious happens, you make one phone call. Dr. Lewis is on the phone within minutes — calling specialists by name from a network he has personally worked with for twenty-five years, coordinating with the hospital, advocating for you. Same-day or next-day specialist placement is the norm, not the exception.",
      },
      {
        n: "03",
        title: "Vision and stewardship of your long-term health.",
        body:
          "The longest, healthiest version of your life does not happen by accident. Lewis Select gives you the plan: a 100+ biomarker panel twice a year, ninety unhurried minutes for an annual executive physical, continuous wearable monitoring, and a written, bound Health Blueprint Dr. Lewis writes for each member of your family every year — tying your data, your history, and your conversations together into a clear plan for the year ahead.",
      },
    ],
    cta: { label: "Read the full approach", href: "/approach" },
  },
  pullQuote: {
    quote: "The fastest medicine in the world is the medicine that already knows you.",
    attribution: "Dr. Kevin Lewis",
    watermark: "L",
  },
  about: {
    eyebrow: "The physician",
    body:
      "Fifth-generation Texan. Third-generation physician — his grandfather practiced in Lockhart, his father in Austin. Dr. Lewis trained in Dallas, completed Level 1 trauma residency, and returned to the Hill Country to build the kind of practice his grandfather would recognize. He runs a primary care practice in Dripping Springs, serves as Medical Director of a private community in Driftwood, and has built a twenty-five-year specialist network across Austin.",
    sigLine: "Lewis Select is the practice he has wanted to build for a long time.",
    cta: { label: "Read more about Dr. Lewis", href: "/about" },
  },
  whoItsFor: {
    eyebrow: "Membership",
    body:
      "Lewis Select is for Hill Country families who want their physician to know them by name, who expect their time to be respected as much as their health, and who believe their best decade has not happened yet. Membership is by invitation, and limited each year.",
    cta: { label: "Start a conversation", href: "/start-a-conversation" },
  },
};

/* ─── Approach ────────────────────────────────────────── */

export const approach = {
  header: {
    eyebrow: "Approach",
    body1:
      "Stewardship is an old word. It used to describe what a physician did for a family — kept watch, year after year, knowing the children, the parents, the parents' parents. The doctor was the steward of the family's health, in the same way a rancher was the steward of the land.",
    body2: "Modern medicine has lost the word. Lewis Select is built around getting it back.",
  },
  pillars: {
    eyebrow: "The program",
    intro:
      "Lewis Select stands on three pillars. Two address what most families fear most about modern medicine: that you cannot reach your doctor when you need her, and that when something goes wrong the system will not act fast enough. The third addresses something most practices don't even attempt — a real plan for the long arc of your health.",
    items: [
      {
        n: "01",
        title: "Direct 24/7 access to your doctor.",
        subhead: "One number. Seven days. The same physician.",
        body:
          "Membership begins with Dr. Lewis's mobile number. Text him, call him, or reach him by video — any day, any hour. There is no answering service, no triage nurse, no covering doctor. The doctor who knows your family on Tuesday is the doctor who answers on Sunday at nine. The boundary between \"office hours\" and \"after hours\" has been removed.",
        replaces:
          "The hold music, the Friday-evening triage line, the weekend ER trip that did not need to happen.",
      },
      {
        n: "02",
        title: "Same-day acute response, care coordination, and advocacy.",
        subhead: "One phone call. Everything else is handled.",
        bodyParagraphs: [
          "When something serious happens — a hospital admission, an ER visit, an injury on a trip, a specialist needed this week — you make one phone call. Dr. Lewis is on the phone within minutes.",
          "He calls a specialist by name from a network he has personally worked with for twenty-five years; same-day or next-day placement is the norm, not the exception. He coordinates with the hospital, advocates for you with the specialists, and ensures the records flow back to your file. Pre-travel consults are part of membership. Longitudinal record-keeping — every test, every consult, every prescription — is centralized.",
        ],
        replaces:
          "The three-week wait for a referral, the hours of triage and paperwork that fall on you in a moment when neither of you should be doing them, the sense that you are introducing yourself from scratch every time.",
      },
      {
        n: "03",
        title: "Vision and stewardship of your long-term health.",
        subhead: "A written plan for the years ahead.",
        bodyParagraphs: [
          "The longest, healthiest version of your life does not happen by accident. It happens with a plan — drawn from real data, refined every year, acted on consistently. Lewis Select gives you that plan.",
          "Each year, you spend ninety unhurried minutes with Dr. Lewis for a full executive physical. Twice a year, we run a 100+ biomarker panel — five to ten times the depth of a typical practice — measuring cardiovascular, metabolic, hormonal, nutritional, inflammatory, and early-cancer signals against the latest longevity science. Your wearable data — Apple Watch, Oura, Whoop — is watched quietly, with proactive outreach when something shifts.",
          "All of it synthesizes into your annual Health Blueprint: a written, bound document Dr. Lewis writes for each member of your family, every year. It says exactly what your year of health should look like, in plain language, for adults and dependents alike. You take it home. You come back to it in June. Your spouse can read it. Your specialists can read it. You do not have to remember anything.",
        ],
        replaces:
          "The annual cholesterol screen and the assumption that \"normal\" is the same as \"optimal.\" The vague impression you leave the doctor's office with. The reactive model where the patient calls the doctor only after something is already wrong.",
      },
    ],
  },
};

/* ─── About ──────────────────────────────────────────── */

export const about = {
  header: {
    eyebrow: "The physician",
    subhead:
      "A third-generation Central Texas physician, practicing in the place his family helped settle.",
  },
  bio: {
    eyebrow: "In his own place",
    body1:
      "Dr. Kevin Lewis is a fifth-generation Texan and a third-generation physician. His grandfather practiced in Lockhart. His father practiced in Austin. Dr. Lewis trained in Dallas, completed a residency that included Level 1 trauma rotations, and returned to the Hill Country with a specific intention: to build the most personal medical practice his career would allow.",
    body2:
      "He chose Dripping Springs deliberately. It is where his family lives, where his children go to school, and where the Hill Country families who would become Lewis Select members already gather. He believes a physician should practice where he lives — close enough that the relationship between doctor and patient continues outside the four walls of the office, in the places where life actually happens. <em>A neighbor is a different kind of physician than a stranger.</em>",
  },
  driftwood: {
    eyebrow: "Driftwood",
    body:
      "Dr. Lewis serves as Medical Director of Driftwood Golf & Lake Club, the private community where many of his patients live. The role is distinct from Lewis Select membership — but the thread that connects the two is the same: medicine that begins with a relationship, not an appointment.",
  },
  network: {
    eyebrow: "The network",
    body:
      "Over twenty-five years of practice, Dr. Lewis has built a specialist network across Austin that spans every major discipline — cardiology, oncology, orthopedics, neurology, endocrinology, gastroenterology, fertility, dermatology, and beyond. These are physicians he has personally worked with, sent patients to, and exchanged calls with for years. Membership in Lewis Select gives you access to this network the way Dr. Lewis accesses it himself: by phone, by name, in real time.",
  },
  pullQuote: {
    quote:
      "Knowing and caring for my patients personally and helping them steward their long-term health is my top priority. It's the heart of good medicine.",
    attribution: "Dr. Kevin Lewis",
  },
  credentials: {
    eyebrow: "On the record",
    rows: [
      { label: "Degree", value: "Doctor of Osteopathic Medicine, [medical school — to be filled from CV]" },
      { label: "Residency", value: "[Program and location, to be filled from CV] · including Level 1 trauma rotations" },
      { label: "Board certifications", value: "[To be filled from CV]" },
      { label: "Medical Director", value: "Driftwood Golf & Lake Club" },
      { label: "Years in practice", value: "Twenty-five+ in central Texas" },
    ],
  },
  sigLine: "Lewis Select is the practice he has wanted to build for a long time.",
};

/* ─── Start a Conversation ───────────────────────────── */

export const conversation = {
  header: {
    eyebrow: "Begin the conversation",
    attribution: "— Dr. Kevin Lewis",
  },
  personalNote: {
    eyebrow: "From Dr. Lewis",
    body:
      "Lewis Select is built one family at a time. The next step, if you are considering us, is a phone call with Dr. Lewis. The call is the same one we begin every member relationship with. We will use it to understand what you are looking for, to answer your questions plainly, and to determine together whether this practice is the right fit for your family.",
    smallNote:
      "Lewis Select is direct-pay; no insurance is billed for membership. Membership is by invitation.",
  },
  formEyebrow: "Tell us about your family",
  whatNext: {
    eyebrow: "After you submit",
    body:
      "Dr. Lewis will be in touch directly — generally within a week. Most conversations are by phone. Some are in person. None are a sales pitch.",
  },
  success: {
    eyebrow: "Sent",
    body:
      "Your note has been sent. Dr. Lewis will reach out directly, generally within a week. If something is urgent, you can also call the practice at [phone — TK] during business hours.",
  },
  error: {
    eyebrow: "Something went wrong",
    body:
      "We could not send your note just now. Please try again in a moment, or email us directly at [email — TK].",
  },
};

/* ─── Helpers ────────────────────────────────────────── */

export type CtaSpec = { label: string; href: string };
export type Item = { n: string; title: string; body: string };
export type PillarItem = {
  n: string;
  title: string;
  subhead: string;
  body?: string;
  bodyParagraphs?: string[];
  replaces: string;
};
export type RichString = ReactNode;
