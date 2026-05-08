import Link from "next/link";
import { footer } from "@/lib/content";
import styles from "./Footer.module.css";

type FooterProps = {
  /** Primary CTA label — date-gated by the server layout. */
  ctaLabel: string;
  /** Primary CTA target — always /inaugural for the current route name. */
  ctaHref: string;
};

export function Footer({ ctaLabel, ctaHref }: FooterProps) {
  const year = new Date().getFullYear();
  // v3.6: Practice column gets the date-gated CTA item appended at render time.
  const practiceLinks = [...footer.practice, { href: ctaHref, label: ctaLabel }];
  return (
    <footer className={`${styles.footer} on-navy`} aria-label="Site footer">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandHead}>
              {/* v3.5: gold medallion brand mark — 44×44 with 14px right margin. */}
              <span className={styles.markWrap} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-mark.png" alt="" />
              </span>
              <p className={styles.wordmark}>
                Lewis <em>Select</em>
              </p>
            </div>
            <p className={styles.tagline}>{footer.tagline}</p>
            <p className={styles.brandPara}>{footer.blurb}</p>
          </div>

          <div>
            <p className={styles.colTitle}>The Practice</p>
            <ul className={styles.list}>
              {practiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Visit</p>
            <ul className={styles.list}>
              {footer.visit.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>

          {/* v3.6 — "Connect" column hidden until phone and email are confirmed. */}
        </div>

        <div className={styles.bottom}>
          <span>© {year} Lewis Select. All rights reserved.</span>
          <Link href="/privacy">Notice of Privacy Practices</Link>
        </div>
      </div>
    </footer>
  );
}
