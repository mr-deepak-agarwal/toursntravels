import type { MetadataRoute } from "next";
import { siteConfig, packages, pilgrimages, blogPosts } from "@/lib/data";
import { taxiRoutes } from "@/lib/taxi-routes";
import { tours } from "@/lib/tours";

// Bump this when page content changes meaningfully. A fixed date is more honest to crawlers than
// "now" on every build, which makes every URL look freshly modified and weakens the signal.
const CONTENT_UPDATED = new Date("2026-10-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => `${siteConfig.url}${p}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1 },
    { path: "/taxi", priority: 0.9 },
    { path: "/self-drive", priority: 0.9 },
    { path: "/sightseeing", priority: 0.9 },
    { path: "/holiday-packages", priority: 0.8 },
    { path: "/pilgrimage-tours", priority: 0.7 },
    { path: "/hotels", priority: 0.6 },
    { path: "/blog", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: url(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly" as const,
    priority,
  }));

  const taxiRouteEntries: MetadataRoute.Sitemap = taxiRoutes.map((r) => ({
    url: url(`/taxi/${r.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tourEntries: MetadataRoute.Sitemap = tours.map((t) => ({
    url: url(`/sightseeing/${t.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((p) => ({
    url: url(`/holiday-packages/${p.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pilgrimageRoutes: MetadataRoute.Sitemap = pilgrimages.map((p) => ({
    url: url(`/pilgrimage-tours/${p.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...taxiRouteEntries, ...tourEntries, ...packageRoutes, ...pilgrimageRoutes, ...blogRoutes];
}
