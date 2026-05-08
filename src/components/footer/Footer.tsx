import Link from "next/link";
import { footer } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
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
              {footer.practice.map((l) => (
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

          <div>
            <p className={styles.colTitle}>Connect</p>
            <ul className={styles.list}>
              {footer.connect.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Lewis Select. All rights reserved.</span>
          <Link href="/privacy">Notice of Privacy Practices</Link>
        </div>
      </div>
    </footer>
  );
}
