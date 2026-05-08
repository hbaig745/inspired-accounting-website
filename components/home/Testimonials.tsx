"use client";

import { motion } from "framer-motion";

/* TODO: Replace placeholder testimonials with real client quotes */
const testimonials = [
  {
    quote:
      "Switching to Inspired Accounting was the best business decision we made. For the first time, we actually understand our numbers and what they mean for the business.",
    author: "T. Rahman",
    role: "Director, Leicester",
    initial: "T",
  },
  {
    quote:
      "Javeed and the team took over our payroll and VAT and we haven't had a single problem since. They're proactive — they flagged an issue before it became one.",
    author: "S. Patel",
    role: "Managing Partner",
    initial: "S",
  },
  {
    quote:
      "After years of feeling like just another client at a big firm, the personal attention here is genuinely different. They know our business as well as we do.",
    author: "M. Clarke",
    role: "Sole trader, East Midlands",
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-[#FAF8F5] border-t-4 border-[#A89B8C] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe">
            What clients say
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 font-baskerville text-4xl md:text-5xl text-navy leading-tight tracking-tight"
          >
            In their words
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[rgba(168,155,140,0.3)] p-8 flex flex-col relative overflow-hidden"
            >
              {/* Large decorative quote mark */}
              <span
                className="absolute top-4 right-5 font-baskerville text-[7rem] text-[#A89B8C] leading-none select-none pointer-events-none"
                style={{ opacity: 0.15 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="flex-1 relative">
                <p className="text-navy/70 text-sm leading-relaxed">{t.quote}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 relative">
                <div
                  className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-baskerville text-navy text-sm">{t.author}</p>
                  <p className="text-[#A89B8C] text-xs">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
