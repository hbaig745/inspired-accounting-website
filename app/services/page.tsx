import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Inspired Accounting's full range of accountancy services: limited company accounts, self assessment, VAT, payroll, bookkeeping and business start-up advice.",
};

const services = [
  {
    id: "outsourced-accountancy",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Outsourced Accountancy (Inspired Accounts)",
    description:
      "Our flagship methodology for a complete outsourced accountancy service. For businesses that are ready to hand the numbers over entirely — and get on with running the business.",
    items: null,
  },
  {
    id: "limited-company",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Limited Company Accounts Preparation",
    description:
      "Accounts for your Limited Company are due to be filed 9 months after the year end. Service delivery approximately 4 weeks. We transfer data via QuickBooks, Excel, Sage, Xero, FreeAgent, and more.",
    items: [
      "Accounts preparation from your books and records",
      "Draft accounts for you to review",
      "Advice, recommendations and improvements before finalisation",
      "Full Formal Accounts for directors, shareholders and HMRC",
      "Shortened Formal Accounts for Companies House",
      "Corporation Tax Form and Calculation",
      "Directors Self-Assessment Tax Return",
      "Dividend Tax Vouchers",
    ],
  },
  {
    id: "self-assessment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Sole Traders / Partnerships / Property Owners",
    description:
      "The 5th of April is tax year end; the filing deadline is the following 31st January. We also advise on Making Tax Digital (MTD) — one of the biggest shake-ups of the tax system.",
    items: [
      "Preparation of accounts/rental accounts from your books and records",
      "Advice and recommendations before finalisation",
      "Full Final Financial Statements",
      "Tax Calculations",
      "Explanation of the calculated tax and payments on account",
    ],
  },
  {
    id: "startup",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Business Start-Up / Company Registration",
    description:
      "Starting your business is a massive event. Getting started in the right way avoids future problems and lets you stay focused on growth. Fixed-fee consultancy for up to one and a half hours.",
    items: [
      "Deciding the best structure for you and your family",
      "Implications of different earnings levels and how best to pay yourself",
      "Dispelling myths around accounts and tax",
      "Best accountancy practices for the greatest chance of success",
      "Advice on what you need to register for and when",
      "Q&A to cover many and varied topics",
    ],
  },
  {
    id: "vat",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "VAT Matters",
    description:
      "VAT goes hand in hand with bookkeeping. We provide support across the full VAT lifecycle — from registration through to ongoing compliance.",
    items: [
      "When to register",
      "Registration services with HMRC",
      "Selection of a VAT scheme to suit your business",
      "VAT quarterly review",
      "VAT reclaim queries",
    ],
  },
  {
    id: "payroll",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Payroll Matters",
    description:
      "There's nothing more detrimental to a business than making mistakes when paying staff. Our focus is on digitising the task for a quick and seamless process. We have a 100% accuracy record.",
    items: [
      "When to register",
      "Registration services with HMRC",
      "Registration service for a Workplace Pension",
      "Digital payslips direct to staff",
      "Summaries that are simple to understand",
      "Electronic submission to HMRC and pension provider",
      "PAYE/NI report to show amounts owed to HMRC",
      "Holiday monitoring",
    ],
  },
];

const sectionBgs = [
  "bg-[#FAF8F5]",
  "bg-[rgb(238,234,229)]",
  "bg-[#FAF8F5]",
  "bg-[rgb(238,234,229)]",
  "bg-[#FAF8F5]",
  "bg-[rgb(238,234,229)]",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(168,155,140,0.15),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-taupe/20 to-transparent" />
          <div className="absolute inset-0 bg-taupe/[0.07]" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }} />
          <div className="absolute inset-0 bg-taupe/[0.08]" style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 58% 100%)" }} />
        </div>
        <div className="container-max section-padding relative z-10">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            What we offer
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            Our services
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-xl leading-relaxed">
            From annual accounts to day-to-day bookkeeping — we handle the full
            spectrum so you can stay focused on your business.
          </p>
        </div>
      </section>

      {/* Services — alternating warm backgrounds, each full-bleed */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`${sectionBgs[i]} py-14 md:py-20`}
        >
          <div className="container-max section-padding">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[rgba(168,155,140,0.2)] flex items-center justify-center text-[#A89B8C] flex-shrink-0 mt-0.5">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-baskerville text-2xl md:text-3xl text-navy leading-snug">
                      {service.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-navy/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.items && (
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-navy/70"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A89B8C] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Talk to us. We&apos;ll help you understand what&apos;s right for your
            situation with no pressure and no jargon.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-taupe text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#968a7c] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
