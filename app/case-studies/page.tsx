import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results for real businesses. Read how Inspired Accounting helped clients overcome financial challenges and achieve significant growth.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-max section-padding">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            Real results
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight">
            Client case studies
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-lg leading-relaxed">
            From rescuing a business from bankruptcy to helping an employee
            build a £1m company — these are the stories we&apos;re proud of.
          </p>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="bg-[#FAF8F5] py-20 md:py-28">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(168,155,140,0.2)]">
            {caseStudies.map((study) => (
              <article key={study.slug} className="bg-white p-10 flex flex-col group">
                <h2 className="font-baskerville text-2xl text-navy mb-2">
                  {study.client}
                </h2>
                <p className="text-[#A89B8C] text-xs font-medium tracking-wide mb-5">
                  {study.outcome}
                </p>
                <p className="text-navy/55 text-sm leading-relaxed flex-1">
                  {study.excerpt}
                </p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-steel text-sm font-medium group-hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
                >
                  Read the story
                  <svg
                    width="14"
                    height="14"
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[rgba(168,155,140,0.12)] py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-navy mb-4">
            Want results like these?
          </h2>
          <p className="text-navy/60 mb-8 max-w-sm mx-auto text-sm">
            Book a free discovery call and tell us where you are now and where
            you want to be.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-steel active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
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
