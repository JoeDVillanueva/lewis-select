import type { ReactNode } from "react";
import { Container } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import styles from "./Hero.module.css";

type Variant = "full" | "page-header";

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  body?: ReactNode;
  attribution?: string;
  variant?: Variant;
  actions?: ReactNode;
};

export function Hero({
  eyebrow,
  headline,
  body,
  attribution,
  variant = "full",
  actions,
}: Props) {
  return (
    <section
      className={`${styles.hero} ${variant === "full" ? styles.full : styles.pageHeader} on-navy`}
      aria-labelledby="hero-heading"
    >
      <span className={styles.bgLines} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />
      <Container>
        <div className={styles.content}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
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
