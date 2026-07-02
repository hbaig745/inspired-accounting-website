import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "One-Touch Accounting | Inspired Accounting",
  description:
    "One integrated system for bookkeeping, payroll, VAT, year-end and self-assessment — powered by Dext and Zoho, built around your business and personal goals.",
};

const included = [
  {
    title: "High-Quality Bookkeeping as Standard",
    body: "We build robust bookkeeping processes around your business, not the other way round. Every transaction is captured, coded and checked so your numbers are reliable enough to run the business on — not just to hand to HMRC once a year.",
  },
  {
    title: "Integrated Payroll",
    body: "Staff costs are often your biggest expense. We run payroll as part of the core service, aligning salary levels, employment allowance and benefits with your wider tax planning and cash-flow needs.",
  },
  {
    title: "VAT Done Properly, Not Just Filed",
    body: "We don't just submit VAT returns; we design the process so VAT is considered at source. That means better reclaim, fewer errors and more scope for sensible VAT planning based on your scheme and trading pattern.",
  },
  {
    title: "Year-End Accounts & Corporation Tax",
    body: "Your year-end is the output of a well-run system, not a mad scramble. Clean data all year leads to faster accounts, clearer analysis and more time to plan around corporation tax, pensions and profit extraction.",
  },
  {
    title: "Self-Assessment for Owners",
    body: "We join up your company and personal position — salary, dividends, pensions and other income — so your self-assessment fits neatly with the way we run your business finances.",
  },
];

const dextZoho = [
  "Snap and forward invoices and receipts straight into the system",
  "Track performance by customer, project, department or location",
  "Build dashboards that show the numbers you care about — profit, cash, margins, KPIs",
];

const processDesign = [
  "Simple — clear steps, minimal duplication, everyone knows what to do",
  "Powerful — structured to capture the right data at the right time",
  "Insight-driven — built to answer the questions you actually ask about your business",
];

const taxPlanning = [
  "VAT — scheme choice, timing of major costs, and reclaim optimisation",
  "Payroll & salary levels — effective use of employment allowance and benefits",
  "Corporation tax — making use of allowances, pensions and reliefs where appropriate",
  "Profit extraction strategies — how to take money out in a way that fits your personal circumstances",
];

const pricing = [
  "Choose the level of support that matches your size and complexity",
  "Know exactly what is included and what it costs each month",
  "Add services as you grow without losing control of fees",
];

const builtFor = [
  "Grow with confidence, backed by current, reliable numbers",
  "Improve internal processes and systems to reduce friction and errors",
  "Prepare for sale, with clean, clearly defined figures that stand up to buyer and adviser scrutiny",
];

export default function OneTouchAccountingPage() {
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
          <Link href="/services" className="inline-flex items-center gap-2 text-taupe text-xs tracking-[0.18em] uppercase mb-6 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Services
          </Link>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            One-Touch Accounting
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Accounting at the heart of every business decision. One integrated system, every key decision — powered by Dext and Zoho, designed around your business and your personal goals.
            </p>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200">
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            <p className="text-navy/70 text-lg leading-relaxed mb-4">
              One-Touch Accounting is our fully-integrated, business-focused accounting service for owners who want more than basic compliance. It brings bookkeeping, payroll, VAT, year-end accounts and self-assessment together into one powerful, joined-up system.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              Using Dext and Zoho as the hub for data capture and management reporting, we turn your accounting from a glorified data-entry exercise into a live decision-making tool.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">What One-Touch Accounting includes</h2>
          <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
            {included.map((item, i) => (
              <div key={item.title} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-1">
                  <span className="font-baskerville text-[#A89B8C] text-sm">0{i + 1}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-baskerville text-xl text-navy leading-snug">{item.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-navy/60 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Ready to make accounting your competitive edge?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Book a free consultation and find out how One-Touch Accounting can transform the way your business uses its numbers.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Dext & Zoho */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4">Designed around Dext & Zoho</h2>
              <p className="text-navy/60 leading-relaxed">
                We use Dext for effortless document capture and Zoho for powerful, flexible reporting. If you&apos;re already on cloud software but only using 70% of what it can do, we help you unlock the remaining 30% — turning it from a data store into a genuine management tool.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4">
                {dextZoho.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Design + Tax Planning */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-baskerville text-2xl text-navy mb-4">Process design: simpler, stronger, smarter</h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                We use our expertise to design and refine your finance processes so they are:
              </p>
              <ul className="space-y-4">
                {processDesign.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                From invoice approval flows to expense capture, from bank reconciliations to month-end reporting, we leave no stone unturned in making the system work for you.
              </p>
            </div>
            <div>
              <h2 className="font-baskerville text-2xl text-navy mb-4">Tax planning built in, not bolted on</h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                Because everything runs through one joined-up service, we can plan tax sensibly across the board:
              </p>
              <ul className="space-y-4">
                {taxPlanning.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                Every recommendation is grounded in your personal goals and risk profile as the business owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + Built for */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-baskerville text-2xl text-navy mb-4">Fixed service levels, clear pricing</h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                One-Touch Accounting is offered on fixed service levels with six clear pricing tiers, so you can:
              </p>
              <ul className="space-y-4">
                {pricing.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                Everything is fully functioning and all-inclusive within your chosen level, so you can stop piecing together different providers and focus on running the business.
              </p>
            </div>
            <div>
              <h2 className="font-baskerville text-2xl text-navy mb-4">Built for ambitious businesses</h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                One-Touch Accounting is ideal if you want to:
              </p>
              <ul className="space-y-4">
                {builtFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                If your current setup feels like &ldquo;just data entry&rdquo; and not a genuine management tool, this is where we help you close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
