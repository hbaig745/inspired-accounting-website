import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/case-studies";
import { staticPages, type SearchType } from "@/lib/search";

const BASE_URL = "https://www.inspiredaccounting.co.uk";

/** Per-page overrides for the top-level pages; everything else falls back to type. */
const PAGE_PRIORITY: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/contact": 0.9,
  "/specialisms": 0.8,
  "/about": 0.8,
  "/case-studies": 0.8,
  "/blog": 0.8,
  "/faqs": 0.6,
  "/portal": 0.4,
  "/privacy": 0.3,
  "/cookies": 0.3,
};

const TYPE_PRIORITY: Partial<Record<SearchType, number>> = {
  Service: 0.8,
  Specialism: 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: page.href === "/" ? BASE_URL : `${BASE_URL}${page.href}`,
    priority: PAGE_PRIORITY[page.href] ?? TYPE_PRIORITY[page.type] ?? 0.5,
    changeFrequency: page.href === "/blog" ? ("weekly" as const) : ("monthly" as const),
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((s) => ({
    url: `${BASE_URL}/case-studies/${s.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
