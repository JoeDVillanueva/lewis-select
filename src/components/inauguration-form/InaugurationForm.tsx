"use client";

import { useState, type FormEvent } from "react";
import { Body, Cta, Eyebrow } from "@/components/ui";
import { conversation, type ConversationVariant } from "@/lib/content";
import styles from "./InaugurationForm.module.css";

type FieldKey =
  | "name"
  | "email"
  | "phone"
  | "connection"
  | "residence"
  | "household"
  | "prompt";
type FieldErrors = Partial<Record<FieldKey, string>>;
type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string; fields?: FieldErrors };

type Props = {
  variant: ConversationVariant;
  /** Page-scoped className applied to <Eyebrow> elements (success state). */
  eyebrowClassName?: string;
  fallbackPhone?: string;
  fallbackEmail?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONNECTION_OPTIONS = [
  { value: "driftwood", label: "I'm a member of Driftwood Golf & Lake Club" },
  { value: "referred", label: "I was referred by a current patient or friend" },
  { value: "event", label: "We met at an event" },
  { value: "self", label: "I came across Lewis Select on my own" },
] as const;
// v3.6: third checkbox renamed from "Dependents under 25" → "Other family members".
// The underlying form value stays `dependents` so legacy email mappings still work.
const HOUSEHOLD_OPTIONS = [
  { value: "self", label: "Just me" },
  { value: "spouse", label: "My spouse or partner" },
  { value: "dependents", label: "Other family members" },
] as const;

function validate(form: HTMLFormElement): FieldErrors {
  const get = (n: string) =>
    (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim() ?? "";
  const errors: FieldErrors = {};
  if (get("name").length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(get("email"))) errors.email = "Please enter a valid email address.";
  if (get("phone").replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!get("connection")) errors.connection = "Please choose one.";
  if (!get("residence")) errors.residence = "Please tell us where you'd primarily receive care.";
  const householdChecked = form.querySelectorAll<HTMLInputElement>('input[name="household"]:checked').length;
  if (householdChecked === 0) errors.household = "Please select at least one.";
  if (get("prompt").length < 2) errors.prompt = "A few sentences is enough — please share what's on your mind.";
  return errors;
}

export function InaugurationForm({
  variant,
  eyebrowClassName,
  fallbackPhone,
  fallbackEmail,
}: Props) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [connection, setConnection] = useState<string>("");
  const [dependentsChecked, setDependentsChecked] = useState(false);

  const successBody = fallbackPhone
    ? variant.success.body.replace("[phone — TK]", fallbackPhone)
    : variant.success.body;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length) {
      setState({ kind: "error", message: "Please correct the marked fields.", fields: fieldErrors });
      return;
    }

    const fd = new FormData(form);
    // FormData collapses repeated checkbox values; capture all household selections explicitly.
    const household = fd.getAll("household").filter((v): v is string => typeof v === "string");
    const data = {
      ...Object.fromEntries(fd.entries()),
      household,
      variant: variant.key,
    };
    setState({ kind: "submitting" });

    try {
      // v3.6: route renamed to /api/inaugural.
      const res = await fetch("/api/inaugural", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setState({ kind: "error", message: json.error ?? conversation.error.body, fields: json.fields });
        return;
      }
      setState({ kind: "success" });
      form.reset();
      setConnection("");
      setDependentsChecked(false);
    } catch {
      setState({ kind: "error", message: conversation.error.body });
    }
  };

  if (state.kind === "success") {
    return (
      <div className={styles.success} aria-live="polite">
        <Eyebrow className={eyebrowClassName}>{variant.success.eyebrow}</Eyebrow>
        <p className={styles.successHead}>{variant.success.headline}</p>
        <Body long>{successBody}</Body>
      </div>
    );
  }

  const fields = state.kind === "error" ? state.fields : undefined;
  const showIntroducedBy = connection === "referred" || connection === "event";

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-describedby="form-status">
      {variant.form.intro && (
        <p className={`${styles.full} ${styles.formIntro}`}>{variant.form.intro}</p>
      )}

      {state.kind === "error" && (
        <div className={styles.formError} id="form-status" role="alert">
          {state.message}
          {fallbackEmail && (
            <>
              {" "}
              You can also email us directly at{" "}
              <a
                href={`mailto:${fallbackEmail}`}
                style={{ color: "var(--color-navy)", borderBottom: "0.5px solid var(--color-gold)" }}
              >
                {fallbackEmail}
              </a>
              .
            </>
          )}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={`${styles.label} ${styles.required}`}>Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="First and last"
          className={styles.input}
          autoComplete="name"
        />
        {fields?.name && <p className={styles.fieldError}>{fields.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={`${styles.label} ${styles.required}`}>Email</label>
        <input id="email" name="email" type="email" required className={styles.input} autoComplete="email" />
        {fields?.email && <p className={styles.fieldError}>{fields.email}</p>}
      </div>

      {/* Phone — v3.6 dropped the "Best way to reach you" radio. */}
      <div className={styles.full}>
        <label htmlFor="phone" className={`${styles.label} ${styles.required}`}>Phone</label>
        <input id="phone" name="phone" type="tel" required className={styles.input} autoComplete="tel" />
        {fields?.phone && <p className={styles.fieldError}>{fields.phone}</p>}
      </div>

      {/* Connection */}
      <fieldset className={styles.full}>
        <legend className={`${styles.label} ${styles.required}`}>How are you connected to Dr. Lewis?</legend>
        <div className={styles.radioColumn}>
          {CONNECTION_OPTIONS.map((opt) => (
            <label key={opt.value} className={styles.radioOption}>
              <input
                type="radio"
                name="connection"
                value={opt.value}
                onChange={(e) => setConnection(e.currentTarget.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {fields?.connection && <p className={styles.fieldError}>{fields.connection}</p>}
        {showIntroducedBy && (
          <div className={styles.reveal}>
            <label htmlFor="introducedBy" className={styles.subLabel}>Who introduced you?</label>
            <input id="introducedBy" name="introducedBy" type="text" className={styles.input} />
          </div>
        )}
      </fieldset>

      {/* Residence — v3.6 dropped the optional "Second home" follow-up. */}
      <div className={styles.full}>
        <label htmlFor="residence" className={`${styles.label} ${styles.required}`}>
          Where would you primarily receive care?
        </label>
        <input
          id="residence"
          name="residence"
          type="text"
          required
          placeholder="City and ZIP, e.g., Driftwood, TX 78619"
          className={styles.input}
          autoComplete="address-level2"
        />
        {fields?.residence && <p className={styles.fieldError}>{fields.residence}</p>}
      </div>

      {/* Household */}
      <fieldset className={styles.full}>
        <legend className={`${styles.label} ${styles.required}`}>Who would the membership cover?</legend>
        <p className={styles.helper}>
          Lewis Select is structured for individuals and families. Select all that apply.
        </p>
        <div className={styles.checkColumn}>
          {HOUSEHOLD_OPTIONS.map((opt) => (
            <label key={opt.value} className={styles.checkOption}>
              <input
                type="checkbox"
                name="household"
                value={opt.value}
                onChange={
                  opt.value === "dependents"
                    ? (e) => setDependentsChecked(e.currentTarget.checked)
                    : undefined
                }
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        {fields?.household && <p className={styles.fieldError}>{fields.household}</p>}
        {dependentsChecked && (
          <div className={styles.reveal}>
            <label htmlFor="dependentsCount" className={styles.subLabel}>How many?</label>
            <p className={styles.helper}>
              Spouse, partner, dependents, others in your household.
            </p>
            <input
              id="dependentsCount"
              name="dependentsCount"
              type="number"
              min={1}
              max={12}
              className={`${styles.input} ${styles.inputNumber}`}
            />
          </div>
        )}
      </fieldset>

      {/* Prompt */}
      <div className={styles.full}>
        <label htmlFor="prompt" className={`${styles.label} ${styles.required}`}>
          What prompted you to reach out now?
        </label>
        <p className={styles.helper}>
          A few sentences is enough — what's on your mind, or what you're hoping a partnership with Dr. Lewis could look like.
        </p>
        <textarea id="prompt" name="prompt" rows={4} required className={styles.textarea} />
        {fields?.prompt && <p className={styles.fieldError}>{fields.prompt}</p>}
      </div>

      {/* Honeypot */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="_company">Company</label>
        <input id="_company" name="_company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`${styles.full} ${styles.actions}`}>
        <Cta type="submit" variant="primary" disabled={state.kind === "submitting"}>
          {state.kind === "submitting" ? variant.form.submittingLabel : variant.form.submitLabel}
        </Cta>
      </div>

      <noscript>
        <p className={styles.full} style={{ marginTop: 12, fontSize: 13 }}>
          This form requires JavaScript. You can also email us directly at{" "}
          <a href={`mailto:${fallbackEmail ?? "hello@lewisselect.com"}`}>
            {fallbackEmail ?? "hello@lewisselect.com"}
          </a>
          .
        </p>
      </noscript>
    </form>
  );
}
