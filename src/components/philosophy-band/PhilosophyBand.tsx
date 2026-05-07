import { Container } from "@/components/layout";
import styles from "./PhilosophyBand.module.css";

type Props = {
  quote: string;
  attribution: string;
};

export function PhilosophyBand({ quote, attribution }: Props) {
  return (
    <section className={styles.band} aria-label="Philosophy">
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
