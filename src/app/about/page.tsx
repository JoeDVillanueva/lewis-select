import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { ClosingCTA } from "@/components/closing-cta/ClosingCTA";
import { PhysicianBlock } from "@/components/physician-block/PhysicianBlock";
import { PullQuote } from "@/components/pull-quote/PullQuote";
import { Band, Section } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import { about } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = siteMetadata({
  title: "Dr. Kevin Lewis — Lewis Select",
  description:
    "A second-generation Central Texas physician, practicing in the place his family helped settle.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="page-header"
        eyebrow={about.header.eyebrow}
        headline={
          <>
            Dr. Kevin Lewis, <em>DO.</em>
          </>
        }
        body={<p>{about.header.subhead}</p>}
      />
      <PhysicianBlock />

      <PullQuote
        quote={about.pullQuote.quote}
        attribution={about.pullQuote.attribution}
        watermark="L"
      />

      <Band tone="cream">
        <Section>
          <div className={styles.credentials}>
            <Eyebrow>{about.credentials.eyebrow}</Eyebrow>
            {about.credentials.rows.map((row) => (
              <div key={row.label} className={styles.cred}>
                <span className={styles.credLabel}>{row.label}</span>
                <span className={styles.credValue}>{row.value}</span>
              </div>
            ))}
            <p className={styles.sig}>{about.sigLine}</p>
          </div>
        </Section>
      </Band>

      <ClosingCTA />

      {/* JSON-LD Physician + MedicalOrganization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Physician",
                name: "Dr. Kevin Lewis, DO",
                medicalSpecialty: "Primary Care",
                worksFor: {
                  "@type": "MedicalOrganization",
                  name: "Lewis Select",
                  url: "https://lewisselect.com",
                },
              },
              {
                "@type": "MedicalOrganization",
                name: "Lewis Select",
                url: "https://lewisselect.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dripping Springs",
                  addressRegion: "TX",
                  addressCountry: "US",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
