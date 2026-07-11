import type { MetadataRoute } from "next";
import { siteConfig, packages, pilgrimages, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/taxi",
    "/self-drive",
    "/sightseeing",
    "/hotels",
    "/holiday-packages",
    "/pilgrimage-tours",
    "/blog",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${siteConfig.url}/holiday-packages/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pilgrimageRoutes = pilgrimages.map((p) => ({
    url: `${siteConfig.url}/pilgrimage-tours/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...packageRoutes, ...pilgrimageRoutes, ...blogRoutes];
}
