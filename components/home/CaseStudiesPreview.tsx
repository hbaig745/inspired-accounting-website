"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    slug: "marriage-links",
    client: "Marriage Links",
    outcome: "Systems overhauled in 6 months",
    teaser:
      "When they contacted us in 2007, their accounting function had four layers of accountants reviewing each other. We eliminated all of it.",
    metric: "Since 2007",
    metricLabel: "Client",
  },
  {
    slug: "clear-opticians",
    client: "Clear Opticians",
    outcome: "Rescued from bankruptcy; sold for ~£3m",
    teaser:
      "A 50-year-old opticians on the brink of closure. Five years of meticulous financial management turned it around completely.",
    metric: "~£3m",
    metricLabel: "Exit value",
  },
  {
    slug: "fresh-energy",
    client: "Fresh Energy",
    outcome: "£1m turnover target in 3 years",
    teaser:
      "How does an employee become a business owner targeting £1 million turnover in three years? We solved the accounting ahead of the problems.",
    metric: "£1m",
    metricLabel: "Target turnover",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32" aria-labelledby="case-studies-heading">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe">
              Results that speak
            </span>
            <h2
              id="case-studies-heading"
              className="mt-3 font-baskerville text-4xl md:text-5xl text-navy leading-tight tracking-tight"
            >
              Client stories
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-steel text-sm font-medium hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
            >
              All case studies
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#A89B8C]/20">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white p-8 md:p-10 flex flex-col group border-l-4 border-[#A89B8C]"
            >
              {/* Metric */}
              <div className="mb-8">
                <span className="font-baskerville text-4xl text-taupe tracking-tight">
                  {study.metric}
                </span>
                <span className="block text-xs text-taupe mt-1 tracking-[0.12em] uppercase">
                  {study.metricLabel}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-baskerville text-xl text-navy mb-1">
                  {study.client}
                </h3>
                <p className="text-taupe text-xs font-medium tracking-wide mb-4">
                  {study.outcome}
                </p>
                <p className="text-navy/55 text-sm leading-relaxed">{study.teaser}</p>
              </div>

              {/* CTA */}
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-steel text-sm font-medium hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
              >
                Read story
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
