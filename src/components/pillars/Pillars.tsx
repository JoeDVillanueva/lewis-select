import type { Item } from "@/lib/content";
import { Band, Section } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import styles from "./Pillars.module.css";

type Props = {
  eyebrow: string;
  /** Section heading. Pass JSX so callers can italicize words. */
  heading: React.ReactNode;
  items: Item[];
};

export function Pillars({ eyebrow, heading, items }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.intro}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={styles.title}>{heading}</h2>
        </div>
        <ol className={styles.grid}>
          {items.map((it) => (
            <li key={it.n} className={styles.cell}>
              <p className={styles.num}>{it.n}</p>
              <h3 className={styles.head}>{it.title}</h3>
              <p className={styles.body}>{it.body}</p>
            </li>
          ))}
        </ol>
      </Section>
    </Band>
  );
}
