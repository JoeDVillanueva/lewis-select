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
    "Stewarding Health for the Hill Country. Three pillars — direct access, acute response, and a written plan for the years ahead.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <Hero
        variant="page-header"
        eyebrow={approach.header.eyebrow}
        headline={<em>Stewarding Health for the Hill Country.</em>}
        body={
          <>
            <p style={{ marginBottom: 16 }}>{approach.header.body1}</p>
            <p>{approach.header.body2}</p>
          </>
        }
      />

      <Band tone="cream">
        <Section>
          <div className={styles.pillarsHeader}>
            <Eyebrow>{approach.pillars.eyebrow}</Eyebrow>
            <h2 className={styles.title}>
              Care for your health today. <em>Stewardship of your health for the years ahead.</em>
            </h2>
            <Body long className={styles.intro}>
              {approach.pillars.intro}
            </Body>
          </div>
          <PillarFull items={approach.pillars.items} />
        </Section>
      </Band>

      <ClosingCTA />
    </>
  );
}
