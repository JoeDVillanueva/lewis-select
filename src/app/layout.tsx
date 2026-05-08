import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { getPrimaryCtaLabel, PRIMARY_CTA_HREF } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

// v3.6: render layout per request so the date-gated CTA label flips on
// 2026-07-01 without a redeploy.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = siteMetadata({
  title: "Lewis Select — A doctor who knows you. A practice that respects your time.",
  description:
    "Lewis Select is a private concierge medical practice in the Texas Hill Country. Direct access to your physician, a specialist network on speed dial, and a written plan for the year ahead.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ctaLabel = getPrimaryCtaLabel();
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav ctaLabel={ctaLabel} ctaHref={PRIMARY_CTA_HREF} />
        <main id="main">{children}</main>
        <Footer ctaLabel={ctaLabel} ctaHref={PRIMARY_CTA_HREF} />
      </body>
    </html>
  );
}
