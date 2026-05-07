import { Container } from "@/components/layout";
import { Body, Cta, Eyebrow } from "@/components/ui";
import { closingCta } from "@/lib/content";
import styles from "./ClosingCTA.module.css";

export function ClosingCTA() {
  return (
    <section className={`${styles.band} on-navy`} aria-label="Next steps">
      <Container>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>
            <Eyebrow center>{closingCta.eyebrow}</Eyebrow>
          </span>
          <p className={styles.headline}>
            “I would be honored to be your family's physician.”
          </p>
          <p className={styles.attribution}>{closingCta.attribution}</p>
          <Body variant="dark" long className={styles.body}>
            {closingCta.body}
          </Body>
          <Cta href={closingCta.ctaHref} variant="primary">
            {closingCta.ctaLabel}
          </Cta>
        </div>
      </Container>
    </section>
  );
}
