import { Band, Section } from "@/components/layout";
import { Body, Cta, Eyebrow } from "@/components/ui";
import type { CtaSpec } from "@/lib/content";
import styles from "./AboutBlock.module.css";

type Props = {
  eyebrow: string;
  heading: React.ReactNode;
  body: string;
  sigLine: string;
  cta: CtaSpec;
};

export function AboutBlock({ eyebrow, heading, body, sigLine, cta }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.inner}>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{heading}</h2>
            <Body variant="muted" long className={styles.body}>
              {body}
            </Body>
            <p className={styles.sig}>{sigLine}</p>
            <Cta href={cta.href} variant="ghostLight">
              {cta.label}
            </Cta>
          </div>
          <div className={styles.portrait} aria-hidden="true">
            <span className={styles.initial}>L</span>
            <span className={styles.caption}>Dr. Kevin Lewis</span>
          </div>
        </div>
      </Section>
    </Band>
  );
}
