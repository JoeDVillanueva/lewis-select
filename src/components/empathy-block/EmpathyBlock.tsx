import { Band, Section } from "@/components/layout";
import { Body, Hook } from "@/components/ui";
import styles from "./EmpathyBlock.module.css";

type Props = {
  hook?: string;
  paragraphs: string[];
};

export function EmpathyBlock({ hook = "Does this sound familiar?", paragraphs }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.inner}>
          <Hook>{hook}</Hook>
          <div className={styles.body}>
            {paragraphs.map((p, i) => (
              <Body key={i} long>
                {p}
              </Body>
            ))}
          </div>
        </div>
      </Section>
    </Band>
  );
}
