import { Band, Section } from "@/components/layout";
import { Body, Eyebrow } from "@/components/ui";
import styles from "./EmpathyBlock.module.css";

type Props = {
  eyebrow: string;
  paragraphs: string[];
};

export function EmpathyBlock({ eyebrow, paragraphs }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.inner}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <div className={styles.body}>
            {paragraphs.map((p, i) => (
              <Body key={i} variant="muted" long>
                {p}
              </Body>
            ))}
          </div>
        </div>
      </Section>
    </Band>
  );
}
