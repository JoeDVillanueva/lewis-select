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
    "There is no application form. If your family is considering a different kind of medical practice, the next step is a conversation with Dr. Lewis — by phone or in person.",
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
    items: [
      { n: "01", title: "Direct 24/7 access.", body: "Text or call Dr. Lewis directly, any day, any hour. No answering service. No covering physician. No stranger on call." },
      { n: "02", title: "Annual Executive Physical.", body: "Ninety unhurried minutes. ECG, imaging, results reviewed in person. The visit is paced like a conversation, not a checklist." },
      { n: "03", title: "100+ biomarker panel.", body: "Cardiovascular, metabolic, hormonal, nutritional, and early-cancer markers — five to ten times the depth of a typical private-practice panel." },
      { n: "04", title: "Annual Health Blueprint.", body: "A written, bound document for each member of the family — your year of health, on paper, in plain language." },
      { n: "05", title: "Continuous wearable monitoring.", body: "Apple Watch or Oura, watched quietly, with proactive outreach when the data shifts." },
      { n: "06", title: "Warm specialist referrals.", body: "A twenty-five-year Austin specialist network, reached physician-to-physician by phone." },
      { n: "07", title: "Acute response and care coordination.", body: "Hospital admissions, ER advocacy, pre-travel consults, longitudinal records — all handled by one phone call." },
    ],
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
  commitments: {
    eyebrow: "The commitments",
    title: "Three commitments. Nothing more.",
    intro:
      "Stewardship medicine, as Dr. Lewis practices it, has three commitments. None of these are technologies. They are the choices a small practice can make and a large one cannot.",
    items: [
      { n: "01", title: "Time.", body: "The unhurried appointment, the read-through-the-night, the call returned the same day." },
      { n: "02", title: "Continuity.", body: "The same physician, year after year, who knows your family the way a neighbor knows it." },
      { n: "03", title: "Foresight.", body: "A written plan for the year ahead, drawn from your data, your history, and the conversations you have had together." },
    ],
  },
  pillars: {
    eyebrow: "The program",
    title: "Seven things, in one practice, for one annual fee.",
    items: [
      {
        n: "01",
        title: "Direct 24/7 access to Dr. Lewis.",
        subhead: "One number. Seven days. The same physician.",
        body:
          "Membership begins with Dr. Lewis's mobile number. Text him, call him, or reach him by video — any day, any hour. There is no answering service, no triage nurse, no covering doctor. If you wake at 2 a.m. unsure whether your child has appendicitis, you reach Dr. Lewis. If you develop chest pain at the airport in Houston, you reach Dr. Lewis. If you have a question that does not need a visit, you text and you get an answer. The boundary between \"office hours\" and \"after hours\" has been removed.",
        replaces:
          "The hold music, the Friday-evening triage line, the weekend ER trip that did not need to happen.",
      },
      {
        n: "02",
        title: "The Annual Executive Physical.",
        subhead: "Ninety unhurried minutes. In person. Once a year.",
        body:
          "Each year, you spend ninety minutes — sometimes longer — with Dr. Lewis for a full physical. ECG, imaging when indicated, a complete review of your year, and an in-person walk-through of your bloodwork and Health Blueprint. The visit is paced like a conversation, not a checklist. By the time you leave, you understand what is going on with your body and what you should do about it.",
        replaces:
          "The fifteen-minute physical, the lab results emailed without a call, the question you forgot to ask.",
      },
      {
        n: "03",
        title: "A 100+ biomarker panel.",
        subhead: "Five to ten times the lab depth of a typical practice.",
        body:
          "Twice a year, you give blood. We run a panel of more than one hundred biomarkers — cardiovascular, metabolic, hormonal, nutritional, inflammatory, and early-cancer signals — calibrated against the latest longevity science. The point is not numbers for the sake of numbers. The point is to find risk while it is still cheap to fix, and to give your Health Blueprint something concrete to act on.",
        replaces:
          "The annual cholesterol screen and the assumption that \"normal\" is the same as \"optimal.\"",
      },
      {
        n: "04",
        title: "The annual Health Blueprint.",
        subhead: "A written, bound plan for the year ahead.",
        body:
          "Dr. Lewis writes a Blueprint for each adult and dependent in your family, every year. It synthesizes your physical, your bloodwork, your wearable trends, your family history, and the conversations you have had together into a clear plan for the next twelve months — what to keep doing, what to change, what to watch, what to test next, and why. The Blueprint is bound, printed, and personally delivered. It is yours to keep, share with your spouse, hand to a specialist on a flight, or read again in June when something feels off.",
        replaces: "The vague impression you leave the doctor's office with.",
      },
      {
        n: "05",
        title: "Continuous wearable monitoring.",
        subhead: "Your data, watched quietly, with proactive outreach when it shifts.",
        body:
          "Your Apple Watch, Oura ring, or Whoop band feeds into Dr. Lewis's monitoring system through a secure connection. When something changes — resting heart rate creeps up, heart-rate variability drops for a sustained period, sleep efficiency falls — Dr. Lewis sees it and reaches out. Not in a panic. With a question, a context, and a recommendation.",
        replaces:
          "The reactive model where the patient calls the doctor only after something is already wrong.",
      },
      {
        n: "06",
        title: "Warm specialist referrals.",
        subhead: "A twenty-five-year network, called by name.",
        body:
          "When you need a cardiologist, an oncologist, an orthopedic surgeon, a fertility specialist, or any other expertise outside Dr. Lewis's primary care, you do not get a list of names and a phone number. Dr. Lewis calls a specialist he has personally worked with — by phone, physician-to-physician — explains what is going on, and arranges the visit. He briefs the specialist before. He follows up after. When you walk in, the specialist already knows you. Same-day or next-day placement is the norm, not the exception.",
        replaces:
          "The referral printed on a slip, the three-week wait, the sense that you are introducing yourself from scratch every time.",
      },
      {
        n: "07",
        title: "Acute response and care coordination.",
        subhead: "One phone call. Everything else is handled.",
        body:
          "When something serious happens — a hospital admission, an ER visit, an injury on a trip — Dr. Lewis is on the phone within minutes. He coordinates with the hospital, advocates for you with the specialists, and ensures the records flow back to your file. Pre-travel consults are part of membership. Longitudinal record-keeping — every test, every consult, every prescription — is centralized. You make one phone call. Everything else is handled.",
        replaces:
          "The hours of triage and paperwork that fall on you and your family in a moment when neither of you should be doing them.",
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
      "Lewis Select is built one family at a time. There is no application form, and there are no quick-decision pathways. The next step, if you are considering us, is a phone call with Dr. Lewis. The call is the same one we begin every member relationship with. We will use it to understand what you are looking for, to answer your questions plainly, and to determine together whether this practice is the right fit for your family.",
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
export type PillarItem = Item & { subhead: string; replaces: string };
export type RichString = ReactNode;
