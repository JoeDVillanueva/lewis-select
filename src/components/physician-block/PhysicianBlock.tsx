import { Band, Section } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import { about } from "@/lib/content";
import styles from "./PhysicianBlock.module.css";

export function PhysicianBlock() {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.inner}>
          <div className={styles.photoWrap}>
            <div className={styles.frame}>
              <div className={styles.placeholder} aria-hidden="true">
                <span>L</span>
                <p>Dr. Kevin Lewis</p>
              </div>
            </div>
            <span className={styles.goldLine} aria-hidden="true" />
          </div>

          <div className={styles.content}>
            <Eyebrow>{about.bio.eyebrow}</Eyebrow>
            <h2 className={styles.name}>
              Dr. Kevin Lewis, <em>DO.</em>
            </h2>
            <p className={styles.subhead}>{about.header.subhead}</p>

            <p className={styles.bodyP}>{about.bio.body1}</p>
            <p
              className={styles.bodyP}
              // body2 contains an inline <em> tag for the gold-italic phrase
              dangerouslySetInnerHTML={{ __html: about.bio.body2 }}
            />

            <div className={styles.subSection}>
              <Eyebrow>{about.driftwood.eyebrow}</Eyebrow>
              <p className={styles.bodyP}>{about.driftwood.body}</p>
            </div>

            <div className={styles.subSection}>
              <Eyebrow>{about.network.eyebrow}</Eyebrow>
              <p className={styles.bodyP}>{about.network.body}</p>
            </div>
          </div>
        </div>
      </Section>
    </Band>
  );
}
