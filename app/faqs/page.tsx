import type { Metadata } from "next";
import Link from "next/link";
import Faqs from "@/components/faqs/Faqs";
import { faqCategories } from "@/components/faqs/faqData";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Straight answers to common questions about switching accountants, our services and pricing, tax deadlines, Making Tax Digital and working with Inspired Accounting.",
};

// FAQ structured data for search engines
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_20%_30%,rgba(168,155,140,0.16),transparent)]" />
          {/* Oversized question mark — a motif unique to this page */}
          <span className="absolute -right-8 -top-16 md:right-10 md:top-4 font-baskerville text-[22rem] md:text-[30rem] leading-none text-white/[0.03] select-none">
            ?
          </span>
        </div>
        <div className="container-max section-padding relative z-10">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            Help &amp; answers
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-xl leading-relaxed">
            No jargon, no pressure — just straight answers.
          </p>

          {/* Jump chips */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ body */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-max section-padding">
          <Faqs />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[rgb(238,234,229)] py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-navy mb-4">
            Still have a question?
          </h2>
          <p className="text-navy/60 mb-8 max-w-sm mx-auto text-sm">
            If your question isn&apos;t here, just ask. Book a free discovery
            call and we&apos;ll give you a straight answer.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
