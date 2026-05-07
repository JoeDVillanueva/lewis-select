import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { Band, Section } from "@/components/layout";
import { Body, Eyebrow } from "@/components/ui";
import { ClosingCTA } from "@/components/closing-cta/ClosingCTA";
import { PillarFull } from "@/components/pillar-full/PillarFull";
import { approach } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = siteMetadata({
  title: "Approach — Lewis Select",
  description:
    "Hill Country Stewardship Medicine. Time, continuity, and foresight — the three commitments behind Lewis Select.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <Hero
        variant="page-header"
        eyebrow={approach.header.eyebrow}
        headline={<em>Hill Country Stewardship Medicine.</em>}
        body={
          <>
            <p style={{ marginBottom: 16 }}>{approach.header.body1}</p>
            <p>{approach.header.body2}</p>
          </>
        }
      />

      <Band tone="cream">
        <Section>
          <div className={styles.commitments}>
            <Eyebrow>{approach.commitments.eyebrow}</Eyebrow>
            <h2 className={styles.title}>{approach.commitments.title}</h2>
            <Body variant="muted" long className={styles.intro}>
              {approach.commitments.intro}
            </Body>
            <ol className={styles.cmtGrid}>
              {approach.commitments.items.map((it) => (
                <li key={it.n} className={styles.cmtItem}>
                  <span className={styles.cmtNum}>{it.n}</span>
                  <h3 className={styles.cmtHead}>{it.title}</h3>
                  <p className={styles.cmtBody}>{it.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </Band>

      <Band tone="cream">
        <Section>
          <div className={styles.pillarsHeader}>
            <Eyebrow>{approach.pillars.eyebrow}</Eyebrow>
            <h2 className={styles.title}>{approach.pillars.title}</h2>
          </div>
          <PillarFull items={approach.pillars.items} />
        </Section>
      </Band>

      <ClosingCTA />
    </>
  );
}
