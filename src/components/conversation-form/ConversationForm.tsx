"use client";

import { useState, type FormEvent } from "react";
import { Body, Cta, Eyebrow } from "@/components/ui";
import { conversation } from "@/lib/content";
import styles from "./ConversationForm.module.css";

type FieldErrors = Partial<Record<"name" | "phone" | "email", string>>;
type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string; fields?: FieldErrors };

type Props = {
  /** Phone number shown on the success page. */
  fallbackPhone?: string;
  /** Email address shown on the error UI and in the noscript fallback. */
  fallbackEmail?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: HTMLFormElement): FieldErrors {
  const get = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | null)?.value.trim() ?? "";
  const errors: FieldErrors = {};
  if (get("name").length < 2) errors.name = "Please enter your name.";
  if (get("phone").replace(/[^\d]/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!EMAIL_RE.test(get("email"))) errors.email = "Please enter a valid email address.";
  return errors;
}

export function ConversationForm({ fallbackPhone, fallbackEmail }: Props = {}) {
  const [state, setState] = useState<State>({ kind: "idle" });

  const successBody = fallbackPhone
    ? conversation.success.body.replace("[phone — TK]", fallbackPhone)
    : conversation.success.body;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length) {
      setState({ kind: "error", message: "Please correct the marked fields.", fields: fieldErrors });
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "submitting" });

    try {
      const res = await fetch("/api/start-a-conversation", {
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
    } catch {
      setState({ kind: "error", message: conversation.error.body });
    }
  };

  if (state.kind === "success") {
    return (
      <div className={styles.success} aria-live="polite">
        <Eyebrow>{conversation.success.eyebrow}</Eyebrow>
        <p className={styles.successHead}>Thank you. Dr. Lewis will be in touch.</p>
        <Body long>
          {successBody}
        </Body>
      </div>
    );
  }

  const fields = state.kind === "error" ? state.fields : undefined;

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-describedby="form-status">
      {state.kind === "error" && (
        <div className={styles.formError} id="form-status" role="alert">
          {state.message}
          {fallbackEmail && (
            <>
              {" "}
              You can also email us directly at{" "}
              <a href={`mailto:${fallbackEmail}`} style={{ color: "var(--color-navy)", borderBottom: "0.5px solid var(--color-gold)" }}>
                {fallbackEmail}
              </a>
              .
            </>
          )}
        </div>
      )}

      <div>
        <label htmlFor="name" className={`${styles.label} ${styles.required}`}>Name</label>
        <input id="name" name="name" type="text" required minLength={2} className={styles.input} autoComplete="name" />
        {fields?.name && <p className={styles.fieldError}>{fields.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={`${styles.label} ${styles.required}`}>Phone</label>
        <input id="phone" name="phone" type="tel" required className={styles.input} autoComplete="tel" />
        {fields?.phone && <p className={styles.fieldError}>{fields.phone}</p>}
      </div>

      <div className={styles.full}>
        <label htmlFor="email" className={`${styles.label} ${styles.required}`}>Email</label>
        <input id="email" name="email" type="email" required className={styles.input} autoComplete="email" />
        {fields?.email && <p className={styles.fieldError}>{fields.email}</p>}
      </div>

      <div>
        <label htmlFor="location" className={styles.label}>Where you live</label>
        <input id="location" name="location" type="text" placeholder="city / community" className={styles.input} autoComplete="address-level2" />
      </div>

      <div>
        <label htmlFor="family" className={styles.label}>Family composition</label>
        <input id="family" name="family" type="text" placeholder="number of adults, number of children" className={styles.input} />
      </div>

      <div className={styles.full}>
        <label htmlFor="referral" className={styles.label}>How you heard about Lewis Select</label>
        <input id="referral" name="referral" type="text" className={styles.input} />
      </div>

      <div className={styles.full}>
        <label htmlFor="notes" className={styles.label}>
          Anything you'd like Dr. Lewis to know in advance
        </label>
        <textarea id="notes" name="notes" rows={5} className={styles.textarea} />
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="_company">Company</label>
        <input id="_company" name="_company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`${styles.full} ${styles.actions}`}>
        <Cta type="submit" variant="primary" disabled={state.kind === "submitting"}>
          {state.kind === "submitting" ? "Sending…" : "Send to Dr. Lewis"}
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
