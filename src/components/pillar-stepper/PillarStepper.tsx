"use client";

/**
 * v3.9 — <PillarStepper />
 *
 * Replaces the stacked <PillarFull /> on /approach with a hairline stepper
 * (Option 2 from Lewis_Select_Accordion_Concepts.html). Three numbered
 * steps sit above one full-width detail panel — only the active pillar's
 * content is visible at a time.
 *
 * Desktop:
 *   - 3-column equal-width grid, max-width 720px, centered
 *   - Italic Cormorant numeral 42px (rule → gold when active)
 *   - Small DM Sans label 11px / 0.30em uppercase (warm-gray → navy active)
 *   - 0.5px hairline rule beneath the row
 *   - 1px gold active-indicator: ONE element, transformX driven by step
 *     index, transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1)
 *   - Detail panel: max-width 720px, min-height 320px (no reflow on swap)
 *   - Content swap: 300ms fade-out → render new pillar → 300ms fade-in
 *
 * Mobile (<720px):
 *   - Stepper collapses to a vertical accordion. Three full-width rows;
 *     tapping expands the body beneath, single-open. Height-only animation
 *     (max-height transition, 400ms ease).
 *
 * Keyboard: native <button> handles Tab + Enter/Space. The active step
 * gets aria-current and disables its own click. Cursor: pointer on
 * inactive steps, default on the active one.
 */

import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import type { PillarItem } from "@/lib/content";
import styles from "./PillarStepper.module.css";

type Props = {
  items: PillarItem[];
};

const STEP_LABELS = ["24 / 7 Access", "Acute Response", "Long-term Stewardship"];
const FADE_MS = 300;

function getParagraphs(item: PillarItem): string[] {
  return item.bodyParagraphs ?? (item.body ? [item.body] : []);
}

function PillarBody({ item }: { item: PillarItem }) {
  const paragraphs = getParagraphs(item);
  return (
    <>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.subhead}>{item.subhead}</p>
      {paragraphs.map((p, i) => (
        <p key={i} className={styles.body}>
          {p}
        </p>
      ))}
      <div className={styles.replacesBanner}>
        <span className={styles.replacesLabel}>What this replaces.</span>
        <p className={styles.replacesBody}>{item.replaces}</p>
      </div>
    </>
  );
}

export function PillarStepper({ items }: Props) {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [fading, setFading] = useState(false);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const goTo = (i: number) => {
    if (i === active) return;
    setActive(i);
    setFading(true);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(() => {
      setDisplayed(i);
      setFading(false);
    }, FADE_MS);
  };

  const onKey = (i: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    // Native button handles Enter/Space; add ←/→ as a nicety for tab-equivalent.
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(Math.min(items.length - 1, i + 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(Math.max(0, i - 1));
    }
  };

  const stepCount = items.length;
  const indicatorWidth = `${100 / stepCount}%`;
  const indicatorTransform = `translateX(${active * 100}%)`;

  return (
    <div className={styles.wrap}>
      {/* Desktop: horizontal stepper + single fading detail panel. */}
      <div className={styles.desktop}>
        <div
          className={styles.stepper}
          role="tablist"
          aria-label="Approach pillars"
          aria-orientation="horizontal"
        >
          {items.map((it, i) => {
            const isActive = i === active;
            return (
              <button
                key={it.n}
                type="button"
                role="tab"
                id={`pillar-step-${i}`}
                aria-selected={isActive}
                aria-controls="pillar-detail-panel"
                tabIndex={isActive ? 0 : -1}
                className={`${styles.step} ${isActive ? styles.stepActive : ""}`.trim()}
                onClick={() => goTo(i)}
                onKeyDown={onKey(i)}
              >
                <span className={styles.num}>{it.n}</span>
                <span className={styles.label}>
                  {STEP_LABELS[i] ?? it.title}
                </span>
              </button>
            );
          })}
          {/* ONE sliding indicator — single element, transform driven by index. */}
          <span
            className={styles.indicator}
            aria-hidden="true"
            style={{ width: indicatorWidth, transform: indicatorTransform }}
          />
        </div>

        <div
          className={styles.detailWrap}
          id="pillar-detail-panel"
          role="tabpanel"
          aria-labelledby={`pillar-step-${active}`}
        >
          <div className={`${styles.fade} ${fading ? styles.fading : ""}`.trim()}>
            <PillarBody item={items[displayed]!} />
          </div>
        </div>
      </div>

      {/* Mobile: vertical accordion. Same content, different shell. */}
      <ol className={styles.mobile}>
        {items.map((it, i) => {
          const isOpen = openMobile === i;
          return (
            <li key={it.n} className={styles.mRow}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`pillar-mobile-${i}`}
                className={`${styles.mHeader} ${isOpen ? styles.mHeaderOpen : ""}`.trim()}
                onClick={() => setOpenMobile(isOpen ? null : i)}
              >
                <span className={styles.mNum}>{it.n}</span>
                <span className={styles.mLabel}>
                  {STEP_LABELS[i] ?? it.title}
                </span>
                <span className={styles.mChevron} aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={`pillar-mobile-${i}`}
                className={`${styles.mPanel} ${isOpen ? styles.mPanelOpen : ""}`.trim()}
                role="region"
              >
                <div className={styles.mInner}>
                  <PillarBody item={it} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
