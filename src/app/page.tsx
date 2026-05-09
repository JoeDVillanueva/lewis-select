import { Hero } from "@/components/hero/Hero";
import { PhilosophyBand } from "@/components/philosophy-band/PhilosophyBand";
import { EmpathyBlock } from "@/components/empathy-block/EmpathyBlock";
import { Differentiators } from "@/components/differentiators/Differentiators";
import { Pillars } from "@/components/pillars/Pillars";
import { PullQuote } from "@/components/pull-quote/PullQuote";
import { AboutBlock } from "@/components/about-block/AboutBlock";
import { WhoItsFor } from "@/components/who-its-for/WhoItsFor";
import { ClosingCTA } from "@/components/closing-cta/ClosingCTA";
import { Cta } from "@/components/ui";
import { getPrimaryCtaLabel, home } from "@/lib/content";

// v3.6: render server-side per request so the date-gated CTA label flips
// at 2026-07-01 without a redeploy.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function HomePage() {
  const primaryCtaLabel = getPrimaryCtaLabel();
  return (
    <>
      <Hero
        eyebrow={home.hero.eyebrow}
        headline={
          <>
            A doctor who knows you.
            <em> A practice that respects your time.</em>
          </>
        }
        body={
          <p>
            For Hill Country families. Direct 24/7 access. Same-day specialist placement.
            Personal planning for your long-term health.
          </p>
        }
        actions={
          <>
            <Cta href={home.hero.primaryCtaHref} variant="primary">
              {primaryCtaLabel}
            </Cta>
            <Cta href={home.hero.secondaryCta.href} variant="ghost">
              {home.hero.secondaryCta.label}
            </Cta>
          </>
        }
      />

      <PhilosophyBand quote={home.philosophy.quote} attribution={home.philosophy.attribution} />

      <EmpathyBlock pairs={home.empathy.pairs} />

      <Differentiators
        eyebrow={home.differentiators.eyebrow}
        intro={home.differentiators.intro}
        items={home.differentiators.items}
      />

      <Pillars
        eyebrow={home.pillars.eyebrow}
        heading={
          <>
            Immediate care for your health today. <em>Stewardship of your health for the years ahead.</em>
          </>
        }
        intro={home.pillars.intro}
        items={home.pillars.items}
        cta={home.pillars.cta}
      />

      <PullQuote
        quote={home.pullQuote.quote}
        attribution={home.pullQuote.attribution}
        watermark={home.pullQuote.watermark}
      />

      <AboutBlock
        eyebrow={home.about.eyebrow}
        heading={
          <>
            Dr. Kevin Lewis, <em>third-generation Central Texas physician.</em>
          </>
        }
        body={home.about.body}
        sigLine={home.about.sigLine}
        cta={home.about.cta}
      />

      <WhoItsFor
        eyebrow={home.whoItsFor.eyebrow}
        heading={
          <>
            Built for families who want a <em>different relationship</em> with medicine.
          </>
        }
        body={home.whoItsFor.body}
        cta={{ href: home.whoItsFor.ctaHref, label: primaryCtaLabel }}
      />

      <ClosingCTA />
    </>
  );
}
