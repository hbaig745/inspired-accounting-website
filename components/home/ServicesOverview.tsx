"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Limited Company Accounts",
    description:
      "Full accounts preparation, corporation tax, director self-assessment, and Companies House filing — delivered in approximately 4 weeks.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Self Assessment",
    description:
      "Sole traders, partnerships, and property owners. Tax year-end preparation, calculations, and HMRC submissions with clear payment guidance.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Outsourced Accounting",
    description:
      "Our flagship Inspired Accounts methodology — a complete outsourced accountancy department for businesses ready to delegate the numbers entirely.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "VAT Matters",
    description:
      "Registration, scheme selection, quarterly reviews, and reclaim queries. Paired with bookkeeping support when you need it.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Payroll",
    description:
      "Digital payslips, HMRC submissions, pension registration, and holiday monitoring. We have a 100% accuracy record on staff salaries.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Business Start-Up",
    description:
      "Company registration, structure advice, tax implications, and best practices — backed by over two decades of experience. Fixed-fee consultancy available.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="flex flex-col lg:flex-row" aria-labelledby="services-heading">
      {/* Left panel — light taupe wash */}
      <div className="lg:w-[38%] bg-[#FAF8F5] px-8 py-20 sm:px-12 lg:px-16 xl:px-20 lg:py-28 flex flex-col justify-center" style={{ backgroundColor: 'rgb(238,234,229)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-taupe block mb-4">
            What we do
          </span>
          <h2
            id="services-heading"
            className="font-baskerville text-4xl lg:text-5xl text-navy leading-tight tracking-tight"
          >
            Accounting done right
          </h2>
          <p className="mt-6 text-navy/60 text-lg leading-relaxed max-w-sm">
            When accounting is done right, it is both simple and powerful.
            We handle the full spectrum — from annual accounts to day-to-day
            bookkeeping — so you stay focused on what you do best.
          </p>
          <div className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-steel text-base font-medium tracking-wide underline underline-offset-4 decoration-steel/40 hover:decoration-steel hover:text-navy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded"
            >
              View all services
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
      <div className="flex-1 bg-[#FAF8F5] px-8 py-20 sm:px-12 lg:px-14 xl:px-16 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#A89B8C]/25 max-w-3xl">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white p-8 group border-t-[3px] border-[#A89B8C] hover:border-[#4A789E] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_4px_24px_rgba(12,38,63,0.07)]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] mb-5 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="font-baskerville text-xl text-[#0C263F] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#0C263F]/70 text-base leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
