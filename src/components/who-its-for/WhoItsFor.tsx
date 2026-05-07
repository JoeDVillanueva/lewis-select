import { Band, Section } from "@/components/layout";
import { Body, Cta, Eyebrow } from "@/components/ui";
import type { CtaSpec } from "@/lib/content";
import styles from "./WhoItsFor.module.css";

type Props = {
  eyebrow: string;
  heading: React.ReactNode;
  body: string;
  cta: CtaSpec;
};

export function WhoItsFor({ eyebrow, heading, body, cta }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.inner}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={styles.title}>{heading}</h2>
          <Body long className={styles.body}>
            {body}
          </Body>
          <Cta href={cta.href} variant="navy">
            {cta.label}
          </Cta>
        </div>
      </Section>
    </Band>
  );
}
