import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { ClosingCTA } from "@/components/closing-cta/ClosingCTA";
import { PhysicianBlock } from "@/components/physician-block/PhysicianBlock";
import { about } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata({
  title: "Dr. Kevin Lewis — Lewis Select",
  description:
    "A third-generation Central Texas physician, practicing in the place his family helped settle.",
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
