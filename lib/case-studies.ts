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
  /** Icon key resolved by the card/full-page UI (see CaseStudyCard). */
  icon: string;
  /** Lower numbers appear first in the index. Defaults to 99. */
  order: number;
  /** Optional engagement descriptor, e.g. "Ongoing support · 5 years". */
  relationship: string;
  /** Optional signed-off client quote for the full story page. */
  quote: string;
  /** Attribution for `quote`, e.g. "Centre Manager". */
  quoteAuthor: string;
  content: string;
}

export type CaseStudyMeta = Omit<CaseStudy, "content">;

function toMeta(slug: string, data: Record<string, unknown>): CaseStudyMeta {
  return {
    slug,
    title: (data.title as string) ?? "Untitled",
    excerpt: (data.excerpt as string) ?? "",
    outcome: (data.outcome as string) ?? "",
    client: (data.client as string) ?? "",
    metric: (data.metric as string) ?? "",
    metricLabel: (data.metricLabel as string) ?? "",
    icon: (data.icon as string) ?? "default",
    order: typeof data.order === "number" ? data.order : 99,
    relationship: (data.relationship as string) ?? "",
    quote: (data.quote as string) ?? "",
    quoteAuthor: (data.quoteAuthor as string) ?? "",
  };
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];

  const files = fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => /\.(md|mdx)$/.test(f));

  return files
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), "utf-8");
      const { data } = matter(raw);
      return toMeta(slug, data);
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const mdxPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  const mdPath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
  const resolvedPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(resolvedPath)) return null;

  const raw = fs.readFileSync(resolvedPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...toMeta(slug, data),
    content,
  };
}
