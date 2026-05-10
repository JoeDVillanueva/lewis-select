import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { Band, Section } from "@/components/layout";
import { Body, Eyebrow } from "@/components/ui";
import { ClosingCTA } from "@/components/closing-cta/ClosingCTA";
import { PillarStepper } from "@/components/pillar-stepper/PillarStepper";
import { approach } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";

import styles from "./page.module.css";

/**
 * v3.9 amendment — render the pillars-intro lead phrase ("Lewis Select stands
 * on three pillars.") as <strong>. Falls back to the plain string if the
 * canonical text drifts (defensive against CONTENT.md edits).
 */
function renderIntroWithBoldLead(intro: string, lead: string) {
  if (!intro.startsWith(lead)) return intro;
  return (
    <>
      <strong className={styles.introLead}>{lead}</strong>
      {intro.slice(lead.length)}
    </>
  );
}

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
              Immediate care for your health today. <em>Stewardship of your health for the years ahead.</em>
            </h2>
            <Body long className={styles.intro}>
              {renderIntroWithBoldLead(
                approach.pillars.intro,
                "Lewis Select stands on three pillars.",
              )}
            </Body>
          </div>
          <PillarStepper items={approach.pillars.items} />
        </Section>
      </Band>

      <ClosingCTA />
    </>
  );
}
