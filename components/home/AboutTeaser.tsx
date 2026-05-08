"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutTeaser() {
  return (
    <section className="flex flex-col lg:flex-row" aria-labelledby="about-teaser-heading">
      {/* Left panel — solid taupe */}
      <div className="lg:w-[38%] bg-[#A89B8C] px-8 py-20 sm:px-12 lg:px-16 xl:px-20 lg:py-28 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 block mb-4">
            About the firm
          </span>
          <h2
            id="about-teaser-heading"
            className="font-baskerville text-4xl lg:text-5xl text-white leading-tight tracking-tight"
          >
            Built on hard work, not inherited clients
          </h2>

          {/* 18 years stat */}
          <div className="mt-10 flex items-end gap-3">
            <span className="font-baskerville text-7xl text-white leading-none tracking-tight">
              18
            </span>
            <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">
              Years in practice
            </span>
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-white text-sm font-medium tracking-wide underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            >
              Learn more about us
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
          </div>
        </motion.div>
      </div>

      {/* Right panel — warm off-white */}
      <div className="flex-1 bg-[#FAF8F5] px-8 py-20 sm:px-12 lg:px-14 xl:px-16 lg:py-28 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          {/* TODO: Replace placeholder About page copy with real firm story */}
          <p className="text-[#0C263F]/70 text-base leading-relaxed">
            Our humble roots as a start-up in 2006 means we didn&apos;t buy
            our portfolio of clients — we won and retained them through
            effort and results. Starting as a sole practitioner, we&apos;ve
            grown organically to a team of five ACCA-accredited accountants.
          </p>
          <p className="mt-6 text-[#0C263F]/70 text-base leading-relaxed">
            All work is completed in-house. We never subcontract or send work
            to third-party processing centres. We understand your business, and
            we&apos;re invested in its success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
