import { Container } from "@/components/layout";
import styles from "./PullQuote.module.css";

type Props = {
  quote: string;
  attribution: string;
  watermark?: string;
};

export function PullQuote({ quote, attribution, watermark = "L" }: Props) {
  return (
    <section className={`${styles.band} on-navy`} aria-label="Pull quote">
      <span className={styles.watermark} aria-hidden="true">
        {watermark}
      </span>
      <Container>
        <div className={styles.inner}>
          <blockquote className={styles.quote}>
            “{quote}”
            <cite className={styles.attribution}>— {attribution}</cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
