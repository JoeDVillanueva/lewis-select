import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lewisselect.com";
const SITE_NAME = "Lewis Select";

type SeoArgs = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function siteMetadata({ title, description, path = "/", image }: SeoArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ?? "/opengraph-image";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}
