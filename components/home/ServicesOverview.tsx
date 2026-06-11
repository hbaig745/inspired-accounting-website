"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "One-Touch Accounting",
    description:
      "One integrated system, every key decision. Bookkeeping, payroll, VAT, year-end and self-assessment in one powerful engine for management reporting and tax planning — powered by Dext and Zoho.",
    href: "/services/one-touch-accounting",
  },
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
    title: "Statutory Accounts",
    description:
      "Statutory accounts that do more than tick a box. We turn your numbers — from any starting point — into clear, compliant accounts, backed by personal advice on tax, structure and better processes year after year.",
    href: "/services/statutory-accounts",
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
      "Self-assessment made simple. From landlords and CIS sub-contractors to directors and investors, we check if you need a return, file it accurately and help you plan ahead — so tax doesn't take over your time.",
    href: "/services/self-assessment",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "VAT Services",
    description:
      "Smarter VAT, stronger reclaims. Align your VAT with high-quality bookkeeping, the right schemes and digital systems — so you reclaim more, stay compliant and handle HMRC enquiries with confidence.",
    href: "/services/vat",
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
      "Payroll that pays off for everyone. Accurate, compliant payroll with secure digital payslips, an employee app for HR and pay information, and clear advice on salary levels, minimum wage and benefits.",
    href: "/services/payroll",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Business Start-Ups",
    description:
      "Start up with structure, not guesswork. Calm, tailored advice on whether to be a sole trader, partnership or limited company — based on your real circumstances — so you can focus on building the business.",
    href: "/services/business-start-ups",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Capital Gains Tax",
    description:
      "Selling a rental or second home? Don't let CGT deadlines catch you out. From estimating your capital gains tax before you sell to filing the 60-day UK property return after completion — fixed-fee support at every stage.",
    href: "/services/capital-gains-tax",
  },
];

export default function ServicesOverview() {
  return (
    <section className="flex flex-col lg:flex-row" aria-labelledby="services-heading">
      {/* Left panel */}
      <div
        className="lg:w-[38%] px-8 py-16 sm:px-12 lg:px-16 xl:px-20 lg:py-28 flex flex-col justify-center"
        style={{ backgroundColor: "rgb(238,234,229)" }}
      >
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

      {/* Right panel — service cards */}
      <div className="flex-1 bg-[#FAF8F5] px-8 py-16 sm:px-12 lg:px-14 xl:px-16 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#A89B8C]/25">
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
              className="bg-white p-7 group border-t-[3px] border-[#A89B8C] hover:border-[#4A789E] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_4px_24px_rgba(12,38,63,0.07)] flex flex-col [&:last-child:nth-child(odd)]:sm:col-span-2"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] mb-5 flex-shrink-0 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="font-baskerville text-xl text-[#0C263F] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#0C263F]/70 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-1.5 text-steel text-sm font-medium hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded"
              >
                Read more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
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
