import type { ReactNode } from "react";
import type { CtaSpec, Item } from "@/lib/content";
import { Band, Section } from "@/components/layout";
import { Body, Cta, Eyebrow } from "@/components/ui";
import styles from "./Pillars.module.css";

type Props = {
  eyebrow: string;
  /** Section heading. Pass JSX so callers can italicize words. */
  heading: ReactNode;
  intro?: ReactNode;
  items: Item[];
  cta?: CtaSpec;
};

export function Pillars({ eyebrow, heading, intro, items, cta }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.intro}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={styles.title}>{heading}</h2>
          {intro && (
            <Body variant="muted" long className={styles.introBody}>
              {intro}
            </Body>
          )}
        </div>
        <ol className={styles.list}>
          {items.map((it) => (
            <li key={it.n} className={styles.item}>
              <p className={styles.num}>{it.n}</p>
              <h3 className={styles.head}>{it.title}</h3>
              <p className={styles.body}>{it.body}</p>
            </li>
          ))}
        </ol>
        {cta && (
          <div className={styles.ctaRow}>
            <Cta href={cta.href} variant="ghostLight">
              {cta.label}
            </Cta>
          </div>
        )}
      </Section>
    </Band>
  );
}
