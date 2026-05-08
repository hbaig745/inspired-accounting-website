import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max section-padding">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors duration-200 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-steel tracking-wide">
              {post.category}
            </span>
            <span className="text-white/20 text-xs">·</span>
            <time className="text-white/40 text-xs" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-white/40 text-xs">{post.readingTime}</span>
          </div>
          <h1 className="font-baskerville text-4xl md:text-5xl xl:text-6xl text-white leading-tight tracking-tight text-balance max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article — warm off-white */}
      <article className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            {/* Lead paragraph — pull quote style on taupe */}
            <div className="bg-[#A89B8C] px-8 py-6 mb-10 -mx-8 sm:mx-0 sm:rounded-none">
              <p className="font-baskerville italic text-white text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="space-y-6 text-navy/70 leading-relaxed">
              {post.content
                .split("\n\n")
                .map((block, i) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-baskerville text-2xl text-navy mt-10 mb-2"
                      >
                        {trimmed.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="font-baskerville text-xl text-navy mt-8 mb-2"
                      >
                        {trimmed.replace("### ", "")}
                      </h3>
                    );
                  }
                  return (
                    <p key={i} className="text-navy/65 leading-relaxed">
                      {trimmed}
                    </p>
                  );
                })}
            </div>

            <div className="mt-12 pt-8 border-t border-[rgba(168,155,140,0.3)] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-baskerville text-sm flex-shrink-0">
                J
              </div>
              <div>
                <p className="text-navy text-sm font-semibold">{post.author}</p>
                <p className="text-[#A89B8C] text-xs">Inspired Accounting</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[rgba(168,155,140,0.12)] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-3">
            Need specific advice?
          </h2>
          <p className="text-navy/60 mb-6 text-sm max-w-sm mx-auto">
            Our team of ACCA-qualified accountants are happy to help. Book a
            free, no-obligations call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-sm font-medium hover:bg-steel transition-colors duration-300 active:scale-[0.97]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
