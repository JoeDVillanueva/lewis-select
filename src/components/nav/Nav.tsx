"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cta } from "@/components/ui/Cta";
import styles from "./Nav.module.css";

const links = [
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "Dr. Lewis" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route-like clicks
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""} on-navy`.trim()}
        aria-label="Primary"
      >
        <Link href="/" className={styles.brand} aria-label="Lewis Select — home">
          <span className={styles.markWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.png" alt="Lewis Select" loading="eager" />
          </span>
          <span className={styles.wordmark}>
            Lewis <em>Select</em>
            <span>Private Concierge Medicine</span>
          </span>
        </Link>

        <div className={styles.right}>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <span className={styles.navCta}>
            <Cta href="/start-a-conversation" variant="bordered">
              Start a conversation
            </Cta>
          </span>
          <button
            className={styles.hamburger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${open ? styles.open : ""} on-navy`.trim()}
        role="menu"
      >
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={closeMenu} role="menuitem">
            {l.label}
          </Link>
        ))}
        <span className={styles.mobileCta} onClick={closeMenu}>
          <Cta href="/start-a-conversation" variant="bordered">
            Start a conversation
          </Cta>
        </span>
      </div>

      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
}
