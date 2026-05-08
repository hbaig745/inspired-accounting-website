import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/case-studies";

const BASE_URL = "https://www.inspiredaccounting.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/case-studies`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" },
  ];

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
