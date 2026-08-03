import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Inspired Accounting's full range of accountancy services: limited company accounts, self assessment, VAT, payroll, bookkeeping and business start-up advice.",
};

const services = [
  {
    id: "inspired-accounts",
    href: "/services/inspired-accounts",
    flagship: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Inspired Accounts",
    description:
      "Everything your business needs, run as one complete service — professional bookkeeping, VAT, payroll and statutory accounts, fully joined up under one team instead of scattered across different providers. But it doesn't stop at compliance: Inspired Accounts is how we help clients move from chaos to clarity, and from clarity to real growth. See it in action in our case studies.",
    items: [
      "High-quality bookkeeping as standard — every transaction captured, coded and checked",
      "Integrated payroll aligned with your tax planning and cash-flow needs",
      "VAT designed at source — better reclaim, fewer errors, sensible planning",
      "Year-end accounts and corporation tax from a clean, well-run system",
      "Self-assessment for owners, joining your company and personal positions",
      "Business growth and advisory support, not just compliance filing",
      "Process design using Dext and Xero for dashboards and management reporting",
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
    id: "bookkeeping",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    href: "/services/bookkeeping",
    title: "Bookkeeping Services",
    description:
      "Digital bookkeeping for small businesses on Xero and Dext — every transaction captured, coded and reconciled, so your figures are always current, VAT-ready and Making Tax Digital compliant.",
    items: [
      "Digital bookkeeping on Xero and Dext — no shoeboxes, no spreadsheets",
      "Bank, card and supplier accounts reconciled on a regular cycle",
      "VAT-ready records with VAT captured properly at source",
      "Up-to-date management figures you can actually use",
      "Making Tax Digital compliant, ready for the rules widening",
    ],
  },
  {
    id: "business-consultancy",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    href: "/services/business-consultancy",
    title: "Business Consultancy Services",
    description:
      "Practical business advice for small business owners — management accounts, cash-flow forecasting, profitability reviews and funding support, from accountants who already know your numbers.",
    items: [
      "Monthly or quarterly management accounts and reporting",
      "Cash-flow forecasting and budgeting to plan ahead",
      "Profitability and pricing reviews — see where your profit really comes from",
      "Business plans and forecasts for loan, finance or investment applications",
      "A sounding board for hiring, investment and other big decisions",
    ],
  },
  {
    id: "accounting-for-group-structures",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    href: "/services/accounting-for-group-structures",
    title: "Accounting for Group Structures",
    description:
      "Statutory and consolidated accounts for group and multi-entity structures — accurate for each company and consistent across the group, with intercompany balances properly reconciled and eliminated.",
    items: [
      "Statutory and consolidated accounts under the Companies Act 2006",
      "Small group exemption assessed each year, so you don't over-pay for work you don't need",
      "Support for formal parent-subsidiary and informal 'sideways' groups alike",
      "Intercompany reconciliations — director loans, management charges and balances",
      "Every company set up on Dext and Xero for a clean, auditable trail",
    ],
  },
  {
    id: "property-portfolio-accounting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
    href: "/services/property-portfolio-accounting",
    title: "Property Portfolio Accounting",
    description:
      "Specialist accounting for landlords and property investors — digital records, Making Tax Digital readiness and portfolio-wide reporting for a private rented sector that's changing fast.",
    items: [
      "Move off spreadsheets onto cloud software built for landlords",
      "Ready for Making Tax Digital ahead of the April 2027 threshold change",
      "Portfolio-wide reporting — property by property or as a whole",
      "Record-keeping that keeps pace with Renters' Rights reform",
      "Tax planning for property income, expenses, structuring and CGT",
    ],
  },
  {
    id: "company-restructuring",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
    href: "/services/company-restructuring",
    title: "Company Structuring & Restructuring Advice",
    description:
      "For profitable trading businesses thinking about what to do with the profit they generate — holding companies, investment structures and restructuring advice that protects what you've built.",
    items: [
      "Review of your trading performance, retained profits and goals",
      "Holding company structures to separate surplus cash from trading risk",
      "Tax-efficient profit extraction and reinvestment, including into property",
      "Plain-English comparison of sole trader, limited company and group structures",
      "Free initial consultation, then implementation only if it's the right call",
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
  {
    id: "corporation-tax",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
    href: "/services/corporation-tax",
    title: "Corporation Tax Services",
    description:
      "One process, not two. We prepare your corporation tax computation alongside your statutory accounts, using the same figures — capital allowances, AIA and full HMRC computations included.",
    items: [
      "CT600 computation prepared alongside your statutory accounts",
      "Accounting profit reconciled to taxable profit, adjustment by adjustment",
      "Capital allowances and the Annual Investment Allowance applied correctly",
      "Full computations documented in a clear working file, not just a return",
      "Prepared, submitted and tracked to HMRC deadlines",
    ],
  },
  {
    id: "tax-planning",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    href: "/services/tax-planning",
    title: "Tax Planning",
    description:
      "Year-round business tax planning built into your Inspired Accounts package, plus one-off, bespoke support for personal matters — inheritance tax, capital gains, trusts and HMRC disclosures.",
    items: [
      "Corporation tax, VAT and profit-extraction planning as standard for business clients",
      "Company structuring, share classes and timing of major decisions",
      "Inheritance tax and estate planning, including gifting, trusts and reliefs",
      "Capital gains advice on property, share and business asset disposals",
      "Self-assessment, non-dom / residency matters and HMRC disclosures",
    ],
  },
  {
    id: "capital-gains-tax-other-assets",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    href: "/services/capital-gains-tax-other-assets",
    title: "Capital Gains Tax (Shares & Assets)",
    description:
      "Clear advice on Capital Gains Tax when you sell shares, business assets or valuable possessions — what's taxable, the current rates and allowances, and how to plan disposals tax-efficiently.",
    items: [
      "Work out what's taxable — shares, business assets and possessions over £6,000",
      "Calculate the likely CGT bill before you commit to a sale",
      "Make the best use of the Annual Exempt Amount and available reliefs",
      "Business Asset Disposal Relief and disposal-timing advice",
      "Reporting through self-assessment, filed on time",
    ],
  },
  {
    id: "tax-amnesties",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    href: "/services/tax-amnesties",
    title: "Tax Amnesties — Coming Clean with HMRC",
    description:
      "A clear, confidential route to disclose undeclared tax voluntarily — Let Property Campaign, Worldwide Disclosure Facility and more — usually with far lower penalties than if HMRC finds it first.",
    items: [
      "Confidential review of your position and the years involved",
      "The right disclosure facility for property, offshore or general matters",
      "Tax, interest and likely penalties worked out up front",
      "Disclosure submitted with figures HMRC can rely on",
      "Payment agreed with HMRC, including time-to-pay where appropriate",
    ],
  },
  {
    id: "tax-investigations",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    href: "/services/tax-investigations",
    title: "Tax Investigations",
    description:
      "Straightforward, well-managed support if HMRC opens an enquiry — from routine aspect checks to COP8 and COP9, handled in-house or alongside specialist tax advisors, with one familiar point of contact.",
    items: [
      "Enquiries managed in-house where they're straightforward, to keep costs down",
      "Specialist tax advisors brought in for complex or higher-risk cases",
      "Self-assessment, corporation tax, VAT and PAYE enquiries covered",
      "COP8 and COP9 cases handled with specialist representation from the outset",
      "One familiar contact coordinating everything on your side",
    ],
  },
];

const sectionBg = (i: number) =>
  i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-[rgb(238,234,229)]";

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
          className={`${sectionBg(i)} py-14 md:py-20`}
        >
          <Link href={service.href} className="block container-max section-padding group cursor-pointer">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
                    {service.icon}
                  </div>
                  <div>
                    {service.id === "inspired-accounts" && (
                      <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-steel mb-2">
                        <span className="w-5 h-px bg-steel/50" aria-hidden="true" />
                        Our flagship service
                      </span>
                    )}
                    <h2 className="font-baskerville text-2xl md:text-3xl text-navy leading-snug">
                      {service.title}
                    </h2>
                    {service.id === "inspired-accounts" && (
                      <>
                        <p className="mt-2 font-baskerville text-sm md:text-base text-steel leading-snug">
                          Financial direction for ambitious businesses.
                        </p>
                        <p className="mt-1 text-sm text-navy/60 leading-snug">
                          Our all-inclusive fixed-fee packages.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-navy/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-steel text-sm font-medium group-hover:text-navy transition-colors duration-200">
                  Read more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>
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
