/**
 * v3.7 — restructured into two parallel Hook + body pairs.
 *
 * Layout reads as a problem → promise contrast:
 *   Hook 1 (problem)  → Body 1
 *   ── 32px "turn" gap ──
 *   Hook 2 (promise)  → Body 2
 *
 * Both hooks render with the existing <Hook /> UI primitive (gold italic
 * Cormorant, --text-hook, weight 400). Hook → body gap is ~12px; the gap
 * between Body 1 and Hook 2 is the visual pivot.
 */

import { Band, Section } from "@/components/layout";
import { Body, Hook } from "@/components/ui";
import styles from "./EmpathyBlock.module.css";

type Pair = {
  hook: string;
  body: string;
};

type Props = {
  pairs: readonly [Pair, Pair];
};

export function EmpathyBlock({ pairs }: Props) {
  return (
    <Band tone="cream">
      <Section>
        <div className={styles.inner}>
          {pairs.map(({ hook, body }, i) => (
            <div key={i} className={styles.pair}>
              <Hook>{hook}</Hook>
              <Body long>{body}</Body>
            </div>
          ))}
        </div>
      </Section>
    </Band>
  );
}
