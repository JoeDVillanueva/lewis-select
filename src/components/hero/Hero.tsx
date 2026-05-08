import type { ReactNode } from "react";
import { Container } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import styles from "./Hero.module.css";

type Variant = "full" | "page-header" | "inaugural-launch";

type Props = {
  eyebrow?: string;
  /** Optional className applied to the eyebrow primitive (for page-scoped scale overrides). */
  eyebrowClassName?: string;
  headline: ReactNode;
  /**
   * v3.6 — when set, renders a prominent date display between the eyebrow
   * and the headline (italic Cormorant gold-light, clamp(40px, 5vw, 60px)).
   * Only used by the `inaugural-launch` variant.
   */
  dateDisplay?: ReactNode;
  body?: ReactNode;
  attribution?: string;
  variant?: Variant;
  actions?: ReactNode;
};

const variantClass: Record<Variant, string> = {
  full: "full",
  "page-header": "pageHeader",
  "inaugural-launch": "inauguralLaunch",
};

export function Hero({
  eyebrow,
  eyebrowClassName,
  headline,
  dateDisplay,
  body,
  attribution,
  variant = "full",
  actions,
}: Props) {
  const variantStyle = styles[variantClass[variant]];
  return (
    <section
      className={`${styles.hero} ${variantStyle} on-navy`}
      aria-labelledby="hero-heading"
    >
      <span className={styles.bgLines} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />
      <Container>
        <div className={styles.content}>
          {eyebrow && <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>}
          {dateDisplay && (
            <p className={styles.dateDisplay}>{dateDisplay}</p>
          )}
          <h1 id="hero-heading" className={styles.headline}>
            {headline}
          </h1>
          {attribution && <p className={styles.attribution}>{attribution}</p>}
          {body && <div className={styles.sub}>{body}</div>}
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
