import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { Band, Section } from "@/components/layout";
import { Body, Eyebrow } from "@/components/ui";
import { ConversationForm } from "@/components/conversation-form/ConversationForm";
import { pickConversationVariant } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";

import styles from "./page.module.css";

// Force per-request rendering so the date-gated variant flips at 2026-07-01
// without needing a redeploy.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const DESCRIPTION_INAUGURAL =
  "Inaugural Cohort inquiry for Lewis Select — a private concierge medical practice in the Texas Hill Country. Inaugural membership opens July 1, 2026.";
const DESCRIPTION_POSTLAUNCH =
  "The next step is a conversation with Dr. Lewis — by phone or in person.";

export function generateMetadata(): Metadata {
  const variant = pickConversationVariant();
  const title =
    variant.key === "inaugural"
      ? "Inaugural Cohort — Lewis Select"
      : "Start a Conversation — Lewis Select";
  const description =
    variant.key === "inaugural" ? DESCRIPTION_INAUGURAL : DESCRIPTION_POSTLAUNCH;
  return siteMetadata({ title, description, path: "/start-a-conversation" });
}

/**
 * Render the headline by interpolating an `<em>...</em>` span — content stores
 * the headline as a small HTML string so a single field can carry inline italic.
 */
function HeadlineHtml({ html }: { html: string }) {
  // The string is hard-coded in src/lib/content.ts (not user input). Safe to inline.
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function StartConversationPage() {
  const variant = pickConversationVariant();

  return (
    <>
      <Hero
        variant="page-header"
        eyebrow={variant.header.eyebrow}
        headline={<HeadlineHtml html={variant.header.headlineHtml} />}
        attribution={variant.header.attribution}
        body={
          variant.header.subhead ? (
            <p className={styles.heroSubhead}>{variant.header.subhead}</p>
          ) : undefined
        }
      />

      <Band tone="cream">
        <Section>
          <div className={styles.note}>
            <Eyebrow>{variant.intro.eyebrow}</Eyebrow>
            {variant.intro.paragraphs.map((p, i) => (
              <Body long key={i}>
                {p}
              </Body>
            ))}
            <Body variant="muted" size="small" className={styles.smallNote}>
              {variant.intro.smallNote}
            </Body>
          </div>
        </Section>
      </Band>

      <Band tone="cream">
        <Section className={styles.formSection}>
          <Eyebrow>{variant.form.eyebrow}</Eyebrow>
          <ConversationForm
            variant={variant}
            fallbackEmail={process.env.LEWIS_FALLBACK_EMAIL}
            fallbackPhone={process.env.LEWIS_PUBLIC_PHONE}
          />
        </Section>
      </Band>

      <Band tone="cream">
        <Section>
          <div className={styles.next}>
            <Eyebrow>{variant.whatNext.eyebrow}</Eyebrow>
            <Body long>{variant.whatNext.body}</Body>
          </div>
        </Section>
      </Band>
    </>
  );
}
