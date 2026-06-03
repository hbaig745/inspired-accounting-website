"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="bg-navy py-24 md:py-32 relative overflow-hidden" aria-label="Call to action">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(168,155,140,0.15),transparent)]" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-taupe/20 to-transparent" />
        <div
          className="absolute inset-0 bg-taupe/[0.07]"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-taupe/[0.08]"
          style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 58% 100%)" }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-sm font-medium tracking-[0.18em] uppercase text-taupe block mb-4">
              Take the first step
            </span>
            <h2 className="font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
              Ready for accounting that actually works for you?
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed max-w-xl">
              Our free Discovery Call is a no-obligations conversation about your
              business and what we can do for it. No jargon, no pressure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-steel text-white text-base font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#3d6a90] hover:shadow-[0_0_24px_rgba(74,120,158,0.4)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy text-center"
            >
              Book a Free Consultation
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <p className="text-center text-white/60 text-base font-sans">
              Or call us on{" "}
              <a
                href="tel:01162206019"
                className="hover:text-white transition-colors duration-200"
              >
                0116 220 6019
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
