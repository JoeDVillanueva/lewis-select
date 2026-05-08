/**
 * v3.6 — <PersonalLetter />
 *
 * Replaces the v3.5 "Personal note" block on /inaugural. Reads as a short
 * letter from Dr. Lewis with a portrait at the top, centered body, and a
 * Cormorant italic signature at the bottom.
 *
 * Layout (per BUILD_SPEC.md §7.1, item 4):
 *   - Eyebrow above the portrait (uses .eyebrow--inaugural on the page).
 *   - 180×180 rounded-square portrait. Renders an <img> when `src` is set;
 *     otherwise renders a placeholder (cream-dark background, gold hairline,
 *     italic caption beneath: "Photograph forthcoming.").
 *   - Body paragraphs centered, max-width 620px, 17px DM Sans weight 300
 *     line-height 1.7 with 16px paragraph spacing.
 *   - Italic Cormorant signature centered at the bottom.
 */

import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import styles from "./PersonalLetter.module.css";

type Props = {
  eyebrow: string;
  /** Page-scoped className applied to the eyebrow (e.g. eyebrow--inaugural). */
  eyebrowClassName?: string;
  paragraphs: string[];
  signature: string;
  /** Optional portrait. When omitted, a styled placeholder is rendered. */
  src?: string;
  alt?: string;
  /** Caption shown beneath the placeholder when no src is provided. */
  portraitCaption?: string;
};

export function PersonalLetter({
  eyebrow,
  eyebrowClassName,
  paragraphs,
  signature,
  src,
  alt = "Dr. Kevin Lewis",
  portraitCaption,
}: Props) {
  return (
    <div className={styles.letter}>
      <Eyebrow center className={eyebrowClassName}>{eyebrow}</Eyebrow>

      <div className={styles.portraitWrap}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={180}
            height={180}
            className={styles.portrait}
            priority={false}
          />
        ) : (
          <div className={styles.placeholder} aria-label={alt} role="img">
            <span aria-hidden="true">KL</span>
          </div>
        )}
        {!src && portraitCaption && (
          <p className={styles.caption}>{portraitCaption}</p>
        )}
      </div>

      <div className={styles.body}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p className={styles.signature}>{signature}</p>
    </div>
  );
}
