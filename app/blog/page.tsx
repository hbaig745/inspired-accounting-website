import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Tax tips, business advice and accounting insights from Inspired Accounting — Chartered Certified Accountants in Leicester.",
};

const categories = [
  "All",
  "Tax Tips",
  "Business Advice",
  "Accounting News",
  "HMRC Updates",
];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(168,155,140,0.15),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-taupe/20 to-transparent" />
          <div className="absolute inset-0 bg-taupe/[0.07]" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }} />
          <div className="absolute inset-0 bg-taupe/[0.08]" style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 58% 100%)" }} />
        </div>
        <div className="container-max section-padding relative z-10">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            Insights
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight">
            Blog &amp; resources
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-lg leading-relaxed">
            Practical tax tips, accounting advice and business guidance from our
            team of ACCA-qualified accountants.
          </p>
        </div>
      </section>

      {/* Category filter — light taupe wash */}
      <section className="bg-[rgb(238,234,229)] border-b border-[rgba(168,155,140,0.25)]">
        <div className="container-max section-padding">
          <div className="flex items-center gap-6 py-5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-sm font-medium whitespace-nowrap pb-1 border-b-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded
                  ${cat === "All"
                    ? "border-navy text-navy"
                    : "border-transparent text-navy/50 hover:text-navy"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid — warm off-white */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-max section-padding">
          {posts.length === 0 ? (
            <p className="text-navy/50 text-center py-16">
              {/* TODO: Add real blog posts once content is provided */}
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="group flex flex-col">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-medium text-[#A89B8C] tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-navy/20 text-xs">·</span>
                    <time className="text-xs text-navy/40" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="font-baskerville text-xl text-navy leading-snug mb-3 group-hover:text-steel transition-colors duration-200">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-navy/55 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-steel text-sm font-medium group-hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
                    >
                      Read more
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-navy/30 text-xs">{post.readingTime}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
