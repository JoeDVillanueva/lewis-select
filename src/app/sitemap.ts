import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lewisselect.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/approach", "/about", "/start-a-conversation", "/privacy"];
  const lastModified = new Date();
  return routes.map((path) => ({ url: `${BASE}${path}`, lastModified }));
}
