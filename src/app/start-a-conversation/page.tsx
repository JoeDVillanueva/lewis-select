import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { Band, Section } from "@/components/layout";
import { Body, Eyebrow } from "@/components/ui";
import { ConversationForm } from "@/components/conversation-form/ConversationForm";
import { conversation } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = siteMetadata({
  title: "Start a Conversation — Lewis Select",
  description:
    "The next step is a conversation with Dr. Lewis — by phone or in person.",
  path: "/start-a-conversation",
});

export default function StartConversationPage() {
  return (
    <>
      <Hero
        variant="page-header"
        eyebrow={conversation.header.eyebrow}
        headline={<em>“I would be honored to be your family's physician.”</em>}
        attribution={conversation.header.attribution}
      />

      <Band tone="cream">
        <Section>
          <div className={styles.note}>
            <Eyebrow>{conversation.personalNote.eyebrow}</Eyebrow>
            <Body long className={styles.noteBody}>
              {conversation.personalNote.body}
            </Body>
            <Body variant="muted" size="small" className={styles.smallNote}>
              {conversation.personalNote.smallNote}
            </Body>
          </div>
        </Section>
      </Band>

      <Band tone="cream">
        <Section className={styles.formSection}>
          <Eyebrow>{conversation.formEyebrow}</Eyebrow>
          <ConversationForm
            fallbackEmail={process.env.LEWIS_FALLBACK_EMAIL}
            fallbackPhone={process.env.LEWIS_PUBLIC_PHONE}
          />
        </Section>
      </Band>

      <Band tone="cream">
        <Section>
          <div className={styles.next}>
            <Eyebrow>{conversation.whatNext.eyebrow}</Eyebrow>
            <Body long>{conversation.whatNext.body}</Body>
          </div>
        </Section>
      </Band>
    </>
  );
}
