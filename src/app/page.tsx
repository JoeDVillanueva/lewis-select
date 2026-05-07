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
import { home } from "@/lib/content";

export default function HomePage() {
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
            Lewis Select is built for Hill Country families who are tired of fifteen-minute
            appointments, three-week waits, and being a stranger at every visit. Direct access to
            your physician. A specialist network on speed dial. A written plan for the year ahead.
          </p>
        }
        actions={
          <>
            <Cta href={home.hero.primaryCta.href} variant="primary">
              {home.hero.primaryCta.label}
            </Cta>
            <Cta href={home.hero.secondaryCta.href} variant="ghost">
              {home.hero.secondaryCta.label}
            </Cta>
          </>
        }
      />

      <PhilosophyBand quote={home.philosophy.quote} attribution={home.philosophy.attribution} />

      <EmpathyBlock hook={home.empathy.hook} paragraphs={home.empathy.paragraphs} />

      <Differentiators
        eyebrow={home.differentiators.eyebrow}
        intro={home.differentiators.intro}
        items={home.differentiators.items}
      />

      <Pillars
        eyebrow={home.pillars.eyebrow}
        heading={
          <>
            Care for your health today. <em>Stewardship of your health for the years ahead.</em>
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
        cta={home.whoItsFor.cta}
      />

      <ClosingCTA />
    </>
  );
}
