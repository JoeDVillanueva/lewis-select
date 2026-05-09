/**
 * v3.8 — Home <Pillars /> becomes three tiles in a single row.
 *
 * Each tile renders ONLY the number + title. Bodies are intentionally not
 * rendered on the homepage; the full pillar copy lives on /approach in
 * <PillarFull /> (which is unaffected). The accepted `Item.body` field is
 * kept in the prop type for compatibility with the shared content shape but
 * is ignored at render time on this surface.
 *
 * Section eyebrow, title, intro body, and the trailing "Read the full
 * approach" CTA are unchanged.
 */

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
            <Body long className={styles.introBody}>
              {intro}
            </Body>
          )}
        </div>
        <ul className={styles.grid}>
          {items.map((it) => (
            <li key={it.n} className={styles.tile}>
              <p className={styles.num}>{it.n}</p>
              <h3 className={styles.head}>{it.title}</h3>
            </li>
          ))}
        </ul>
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
