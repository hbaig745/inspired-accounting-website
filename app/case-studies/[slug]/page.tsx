import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.excerpt,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-max section-padding">
          <Link
            href="/case-studies"
            className="flex w-fit items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors duration-200 group"
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
            All case studies
          </Link>
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            {study.client && study.client !== study.title
              ? study.client
              : "Case study"}
          </span>
          <h1 className="mt-3 font-baskerville text-4xl md:text-5xl xl:text-6xl text-white leading-tight tracking-tight max-w-3xl">
            {study.title}
          </h1>
        </div>
      </section>

      {/* Key outcome + facts — solid taupe panel */}
      <section className="bg-[#A89B8C] border-t border-white/20 py-10">
        <div className="container-max section-padding flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-white/70 text-xs font-medium tracking-[0.18em] uppercase mb-1">
              Key outcome
            </p>
            <p className="font-baskerville text-xl md:text-2xl text-white">
              {study.outcome}
            </p>
          </div>
          {(study.metric || study.relationship) && (
            <div className="flex gap-8 flex-shrink-0">
              {study.metric && (
                <div>
                  <span className="block font-baskerville text-3xl text-white leading-none">
                    {study.metric}
                  </span>
                  {study.metricLabel && (
                    <span className="mt-1.5 block text-white/70 text-[11px] tracking-[0.1em] uppercase max-w-[9rem]">
                      {study.metricLabel}
                    </span>
                  )}
                </div>
              )}
              {study.relationship && (
                <div className="md:border-l md:border-white/25 md:pl-8">
                  <span className="block font-baskerville text-lg text-white leading-tight max-w-[10rem]">
                    {study.relationship}
                  </span>
                  <span className="mt-1.5 block text-white/70 text-[11px] tracking-[0.1em] uppercase">
                    Engagement
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Standfirst + body */}
      <article className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            {study.quote ? (
              <blockquote className="border-l-2 border-[#A89B8C] pl-8 mb-12">
                <p className="font-baskerville text-xl md:text-2xl text-navy italic leading-relaxed">
                  &ldquo;{study.quote}&rdquo;
                </p>
                {study.quoteAuthor && (
                  <footer className="mt-4 text-taupe text-sm tracking-wide">
                    — {study.quoteAuthor}
                  </footer>
                )}
              </blockquote>
            ) : (
              <p className="font-baskerville text-xl md:text-2xl text-navy leading-relaxed mb-12">
                {study.excerpt}
              </p>
            )}

            {study.content.split("\n\n").map((block, i) => {
              const trimmed = block.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-baskerville text-2xl text-navy mt-12 mb-4"
                  >
                    {trimmed.replace(/^##\s+/, "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-navy/70 leading-relaxed mb-6">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Want results like this?
          </h2>
          <p className="text-white/50 mb-8 max-w-sm mx-auto text-sm">
            Book a free Discovery Call and let&apos;s talk about your business.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-steel text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#3d6a90] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Book a Discovery Call
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
