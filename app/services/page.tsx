import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Inspired Accounting's full range of accountancy services: limited company accounts, self assessment, VAT, payroll, bookkeeping and business start-up advice.",
};

const services = [
  {
    id: "one-touch-accounting",
    href: "/services/one-touch-accounting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "One-Touch Accounting",
    description:
      "One-Touch Accounting is our fully-integrated, business-focused accounting service for owners who want more than basic compliance. It brings bookkeeping, payroll, VAT, year-end accounts and self-assessment together into one powerful, joined-up system — using Dext and Zoho as the hub for data capture and management reporting.",
    items: [
      "High-quality bookkeeping as standard — every transaction captured, coded and checked",
      "Integrated payroll aligned with your tax planning and cash-flow needs",
      "VAT designed at source — better reclaim, fewer errors, sensible planning",
      "Year-end accounts and corporation tax from a clean, well-run system",
      "Self-assessment for owners, joining your company and personal positions",
      "Process design using Dext and Zoho for dashboards and management reporting",
      "Tax planning across VAT, payroll, corporation tax and profit extraction strategies",
      "Fixed service levels with six clear all-inclusive pricing tiers",
    ],
  },
  {
    id: "statutory-accounts",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    href: "/services/statutory-accounts",
    title: "Statutory Accounts",
    description:
      "Professional statutory accounts for limited companies at any stage. We take your figures from any point in time — tidy or not — and turn them into accurate, meaningful accounts that directors, lenders and HMRC can rely on.",
    items: [
      "Full statutory accounts for Companies House and HMRC",
      "From 'messy' to meaningful — we meet you wherever your records are",
      "Year-on-year review to improve bookkeeping and internal processes",
      "Tax-focused advice on corporation tax, dividends and your personal tax position",
      "One-to-one consultations on structure changes, shareholders and new ventures",
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
    href: "/services/self-assessment",
    title: "Self Assessment",
    description:
      "Self-assessment without the stress. From property owners and CIS sub-contractors to directors and investors, we check if you need to file, handle registration, prepare the return and help you plan ahead — so you only pay the tax you actually owe.",
    items: [
      "Check whether you need to file — fact-find covering all income sources",
      "Registration with HMRC for self-assessment, self-employment or CIS",
      "Full return preparation and electronic filing with all supplementary pages",
      "Clear summary of what you owe, when to pay and how the figure is built",
      "Forward-looking planning for income, dividends, rental profits and investments",
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
    href: "/services/business-start-ups",
    title: "Business Start-Ups",
    description:
      "Starting a business is exciting — but getting the structure right from day one makes everything easier. It's no longer a given that a limited company is the best option. We review your personal circumstances first, so our advice fits you, not a template.",
    items: [
      "Business structure advice — sole trader, partnership or limited company",
      "Personal fact-find and circumstances review before any recommendation",
      "Company formation and HMRC registrations — tax, VAT, PAYE",
      "Tax-efficient foundations and guidance on allowances and reliefs",
      "Basic bookkeeping and banking guidance so you start organised",
      "Ongoing support as your business grows and your needs evolve",
    ],
  },
  {
    id: "vat",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    href: "/services/vat",
    title: "VAT Services",
    description:
      "VAT works best when your bookkeeping does. We set up the right scheme, process returns accurately and help you reclaim what you're entitled to — all bespoke to how your business actually operates.",
    items: [
      "VAT setup tailored to your business — registration and scheme selection",
      "Ongoing VAT processing and submissions on time, every time",
      "Bookkeeping structured to support accurate VAT capture and reclaim",
      "Digital tools to make VAT faster, more accurate and HMRC-friendly",
      "Reconciliations and support through HMRC enquiries",
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
    href: "/services/payroll",
    title: "Payroll Services",
    description:
      "Accurate, on-time payroll with secure digital payslips and an employee app for HR and pay information. We take payroll off your plate and make it seamless for everyone involved.",
    items: [
      "End-to-end payroll processing — weekly, fortnightly or monthly",
      "Secure digital payslips accessible online or via an employee app",
      "Employee app for payslips, P60s, holiday balances and HR information",
      "Advice on salary levels and National Minimum / Living Wage compliance",
      "Benefits, bonuses, statutory pay and pension contributions processed accurately",
    ],
  },
  {
    id: "capital-gains-tax",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    href: "/services/capital-gains-tax",
    title: "Capital Gains Tax on Property",
    description:
      "Selling a buy-to-let or residential property triggers strict 60-day deadlines to report and pay CGT to HMRC. We help you understand your liability, plan ahead, and file correctly — with clear, fixed fees at every stage.",
    items: [
      "Pre-sale CGT estimates — understand your potential tax before you commit",
      "Planning review after exchange — numbers, dates and cash-flow impact mapped out",
      "60-day UK property CGT return calculated, prepared and submitted to HMRC",
      "Capital gains calculations including reliefs, professional fees and ownership splits",
      "Linked to your year-end self-assessment so everything ties in correctly",
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
  "bg-[#FAF8F5]",
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
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 group">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
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
                  <ul className="space-y-2 mb-6">
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
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-steel text-sm font-medium hover:text-navy transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded"
                >
                  Read more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
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
