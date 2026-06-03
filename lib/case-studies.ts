import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  outcome: string;
  client: string;
  metric: string;
  metricLabel: string;
  content: string;
}

export function getAllCaseStudies(): Omit<CaseStudy, "content">[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];

  const files = fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => /\.(md|mdx)$/.test(f));

  return files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/, "");
    const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "Untitled",
      excerpt: data.excerpt ?? "",
      outcome: data.outcome ?? "",
      client: data.client ?? "",
      metric: data.metric ?? "",
      metricLabel: data.metricLabel ?? "",
    };
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const mdxPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const mdPath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  const resolvedPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(resolvedPath)) return null;

  const raw = fs.readFileSync(resolvedPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    outcome: data.outcome ?? "",
    client: data.client ?? "",
    metric: data.metric ?? "",
    metricLabel: data.metricLabel ?? "",
    content,
  };
}
