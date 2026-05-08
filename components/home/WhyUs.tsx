"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Personalised service",
    description:
      "No call centres. No passing you around. You work directly with a qualified ACCA accountant who knows your business inside and out.",
  },
  {
    number: "02",
    title: "All work done in-house",
    description:
      "We never subcontract or send work to third-party processing centres — a practice that's common in our industry. Your data stays with us.",
  },
  {
    number: "03",
    title: "Proactive, not reactive",
    description:
      "We solve problems before they happen. By maintaining an ongoing relationship, we can give you advice when it matters most — not after the fact.",
  },
  {
    number: "04",
    title: "Clear, fixed pricing",
    description:
      "Rather than selling you what we want to sell, we take time to understand your needs and put together the most cost-efficient package for you.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="bg-navy py-24 md:py-32"
      aria-labelledby="why-us-heading"
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left col */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-[2px] h-[60px] bg-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe pt-1">
                  Why choose us
                </span>
              </div>
              <h2
                id="why-us-heading"
                className="mt-3 font-baskerville text-4xl md:text-5xl text-white leading-tight tracking-tight text-balance"
              >
                Accounting built around you
              </h2>
              <p className="mt-6 text-white/50 text-base leading-relaxed">
                Our humble roots as a 2006 start-up mean we earned every client.
                18 years on, we still operate on the same principles.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-taupe/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-taupe" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm">
                  ACCA regulated · All work in-house · Est. 2006
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right col: pillars */}
          <div className="lg:col-span-8 space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-8 grid grid-cols-12 gap-6 group"
              >
                <span className="col-span-2 font-baskerville text-taupe text-sm pt-1">
                  {pillar.number}
                </span>
                <div className="col-span-10">
                  <h3 className="font-baskerville text-xl text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
