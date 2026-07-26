"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCategories, type Faq } from "./faqData";

function AccordionItem({ faq, index }: { faq: Faq; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[rgba(168,155,140,0.3)] first:border-t">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-start justify-between gap-6 py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded-sm"
        >
          <span className="font-baskerville text-lg md:text-xl text-navy leading-snug transition-colors duration-200 group-hover:text-steel">
            {faq.q}
          </span>
          <span
            className={`mt-1 flex-shrink-0 w-7 h-7 rounded-full border border-taupe/50 flex items-center justify-center text-navy transition-all duration-300 group-hover:border-steel group-hover:text-steel ${
              open ? "bg-navy border-navy text-white group-hover:bg-steel group-hover:text-white" : ""
            }`}
            aria-hidden="true"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="6" y1="1.5" x2="6" y2="10.5" className={`origin-center transition-transform duration-300 ${open ? "rotate-90 opacity-0" : ""}`} />
              <line x1="1.5" y1="6" x2="10.5" y2="6" />
            </svg>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-navy/65 leading-relaxed pb-7 pr-10 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faqs() {
  let counter = 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
      {/* Sticky category rail */}
      <aside className="lg:col-span-3">
        <nav aria-label="FAQ categories" className="lg:sticky lg:top-28">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe block mb-4">
            Browse by topic
          </span>
          <ul className="flex flex-wrap lg:flex-col gap-x-4 gap-y-2">
            {faqCategories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className="inline-flex text-navy/60 hover:text-navy text-sm md:text-[15px] leading-snug transition-colors duration-200 border-b border-transparent hover:border-taupe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded-sm"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Accordion groups */}
      <div className="lg:col-span-9 space-y-16">
        {faqCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-taupe" aria-hidden="true" />
              {cat.label}
            </h2>
            <div>
              {cat.items.map((faq) => (
                <AccordionItem key={faq.q} faq={faq} index={counter++} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
