"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    slug: "ecommerce-retailer",
    client: "An E-commerce Retailer",
    outcome: "Gross profit up from 21% to 35%",
    teaser:
      "An online retailer couldn't trust his own Xero numbers. We rebuilt the accounts and shifted the focus from sales to margin — with a £10m target now in sight.",
    metric: "35%",
    metricLabel: "Gross profit, up from 21%",
  },
  {
    slug: "long-established-charity",
    client: "A Long-Established Charity",
    outcome: "Complete overhaul; £1.2m turnover",
    teaser:
      "A long-established charity arrived with a tangled, expensive accounting setup. We redesigned it from the ground up into a clear, honest view of performance.",
    metric: "£1.2m",
    metricLabel: "Projected turnover",
  },
  {
    slug: "property-disclosure",
    client: "A Property Investor",
    outcome: "11 years disclosed & accepted by HMRC",
    teaser:
      "Eleven years out of step with HMRC. We rebuilt over a decade of history, filed a full voluntary disclosure, and got the figures accepted in full.",
    metric: "11 years",
    metricLabel: "Resolved with HMRC",
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
