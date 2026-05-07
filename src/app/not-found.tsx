import { Band, Section } from "@/components/layout";
import { Eyebrow, Body, Cta } from "@/components/ui";

export default function NotFound() {
  return (
    <Band tone="cream">
      <Section>
        <div style={{ maxWidth: 640, paddingTop: 80 }}>
          <Eyebrow>404</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 300,
              color: "var(--color-navy)",
              marginBottom: 24,
            }}
          >
            Page not found.
          </h1>
          <div style={{ marginBottom: 32 }}>
            <Body variant="muted" long>
              The page you're looking for isn't here. The home page or the conversation form is
              probably what you wanted.
            </Body>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Cta href="/" variant="navy">Home</Cta>
            <Cta href="/start-a-conversation" variant="ghostLight">Start a conversation</Cta>
          </div>
        </div>
      </Section>
    </Band>
  );
}
