import type { Metadata } from "next";
import Link from "next/link";
import { Band, Section } from "@/components/layout";
import { Body, Eyebrow } from "@/components/ui";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata({
  title: "Notice of Privacy Practices — Lewis Select",
  description: "Privacy practices for Lewis Select members.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Band tone="cream">
      <Section>
        <div style={{ maxWidth: 720, paddingTop: 64 }}>
          <Eyebrow>Privacy</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 300,
              color: "var(--color-navy)",
              marginBottom: 28,
              lineHeight: 1.2,
            }}
          >
            Notice of Privacy Practices.
          </h1>
          <Body variant="muted" long>
            The Notice of Privacy Practices required by HIPAA is provided to all members of Lewis
            Select directly. A copy is available upon request — please{" "}
            <Link href="/start-a-conversation" style={{ color: "var(--color-navy)", borderBottom: "0.5px solid var(--color-gold)" }}>
              contact the practice
            </Link>{" "}
            and Dr. Lewis will send it to you.
          </Body>
        </div>
      </Section>
    </Band>
  );
}
