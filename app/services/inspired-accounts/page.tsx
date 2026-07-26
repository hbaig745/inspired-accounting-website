import type { Metadata } from "next";
import Link from "next/link";

const META_DESCRIPTION =
  "Inspired Accounts is our flagship service — bookkeeping, VAT, payroll, year-end and self-assessment run as one fully managed service, powered by Dext and Xero and built around your business and personal goals.";

export const metadata: Metadata = {
  title: "Inspired Accounts",
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/services/inspired-accounts",
  },
  openGraph: {
    title: "Inspired Accounts | Inspired Accounting",
    description: META_DESCRIPTION,
    url: "/services/inspired-accounts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspired Accounts | Inspired Accounting",
    description: META_DESCRIPTION,
  },
};

const included = [
  {
    title: "High-Quality Bookkeeping as Standard",
    body: "We build robust bookkeeping processes around your business, not the other way round. Every transaction is captured, coded and checked so your numbers are reliable enough to run the business on.",
  },
  {
    title: "Integrated Payroll",
    body: "Staff costs are often your biggest expense. We run payroll as part of the core service, aligning salary levels, employment allowance and benefits with your wider tax planning and cash-flow needs.",
  },
  {
    title: "VAT Done Properly, Not Just Filed",
    body: "We don't just submit VAT returns; we design the process so VAT is considered at source — better reclaim, fewer errors, and more scope for sensible planning based on your scheme and trading pattern.",
  },
  {
    title: "Year-End Accounts & Corporation Tax",
    body: "Your year-end is the output of a well-run system, not a mad scramble. Clean data all year leads to faster accounts, clearer analysis and more time to plan around corporation tax, pensions and profit extraction.",
  },
  {
    title: "Self-Assessment for Owners",
    body: "We join up your company and personal position — salary, dividends, pensions and other income — so your self-assessment fits neatly with the way we run your business finances.",
  },
  {
    title: "Business Growth & Advisory Support",
    body: "Beyond the compliance work: regular reviews of what your numbers are actually telling you, proactive advice before small issues become expensive ones, and hands-on support understanding your financial position — not just filing it. This is the part our case studies show best.",
  },
];

const howItWorks = [
  "Snap and forward invoices and receipts straight into the system",
  "Build dashboards that show the numbers you care about — profit, cash, margins, KPIs",
  "Clear, minimal-duplication steps, so everyone always knows what to do and when",
];

const taxPlanning = [
  "VAT — scheme choice, timing of major costs, and reclaim optimisation",
  "Payroll & salary levels — effective use of employment allowance and benefits",
  "Corporation tax — making use of allowances, pensions and reliefs where appropriate",
  "Profit extraction strategies — how to take money out in a way that fits your personal circumstances",
];

const builtFor = [
  "Grow with confidence, backed by current, reliable numbers",
  "Improve internal processes and systems to reduce friction and errors",
  "Prepare for sale, with clean, clearly defined figures that stand up to buyer and adviser scrutiny",
];

const pricing = [
  "Choose the level of support that matches your size and complexity",
  "Know exactly what is included and what it costs each month",
  "Add services as you grow without losing control of fees",
];

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#A89B8C] flex-shrink-0 mt-1"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function InspiredAccountsPage() {
  return (
    <>
      {/* Hero — centred to signal the flagship */}
      <section className="bg-navy pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_40%,rgba(168,155,140,0.18),transparent)]" />
          <div className="absolute inset-0 bg-taupe/[0.06]" style={{ clipPath: "polygon(50% 0, 68% 0, 50% 100%, 32% 100%)" }} />
          <div className="absolute inset-0 bg-taupe/[0.06]" style={{ clipPath: "polygon(68% 0, 84% 0, 66% 100%, 50% 100%)" }} />
        </div>
        <div className="container-max section-padding relative z-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-taupe text-xs tracking-[0.18em] uppercase mb-8 hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            Services
          </Link>

          <span className="flex items-center justify-center gap-3 text-taupe text-xs md:text-sm font-medium tracking-[0.22em] uppercase mb-6">
            <span className="w-8 h-px bg-taupe/50" aria-hidden="true" />
            Our flagship service
            <span className="w-8 h-px bg-taupe/50" aria-hidden="true" />
          </span>

          <h1 className="font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight text-balance">
            Inspired Accounts
          </h1>
          <p className="mt-6 font-baskerville text-2xl md:text-3xl xl:text-4xl text-white leading-tight tracking-tight max-w-3xl mx-auto text-balance">
            Financial direction for ambitious businesses.
          </p>
          <p className="mt-5 text-white/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            One fully managed service that puts a clear financial strategy behind
            every decision you make — turning your numbers into direction, not
            just compliance.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-steel text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#3d6a90] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Get in touch
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-navy/70 text-lg leading-relaxed mb-5">
              Most accountants start with the accounts. We start with your
              business — what you want from it, and where you&apos;re trying to
              take it, both financially and beyond. Managing your accounts is our
              job. Freeing you to focus on the business, not on accounting
              problems, is the point of it.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-5">
              Inspired Accounts brings your professional bookkeeping, VAT,
              payroll and statutory accounts together into one fully managed
              service — instead of scattered across a bookkeeper, a payroll
              provider, and an accountant who only speak to each other once a
              year at year-end. And it doesn&apos;t stop at compliance: this is
              the service behind our clients&apos; biggest turnarounds, from
              untangling chaotic books to hitting ambitious growth targets. See
              it in practice in our{" "}
              <Link href="/case-studies" className="text-steel underline underline-offset-4 decoration-steel/40 hover:decoration-steel hover:text-navy transition-colors">
                case studies
              </Link>
              .
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              You do less. We do more. We use Dext and Xero to keep it that
              light-touch — effortless document capture and clear, real-time
              reporting, so your numbers are ready to run the business on, not
              just to hand to HMRC once a year.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">
            What Inspired Accounts includes
          </h2>
          <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
            {included.map((item, i) => (
              <div key={item.title} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-1">
                  <span className="font-baskerville text-[#A89B8C] text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Everything in one place, run by one team
          </h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Stop piecing together separate providers. Book a free consultation
            and see how Inspired Accounts can transform the way your business
            uses its numbers.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Tax planning + Built for */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-baskerville text-2xl text-navy mb-4">Tax planning built in, not bolted on</h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                Because everything runs through one joined-up service, we can
                plan tax sensibly across the board:
              </p>
              <ul className="space-y-4">
                {taxPlanning.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                Every recommendation is grounded in your personal goals and risk
                profile as the business owner.
              </p>
            </div>
            <div>
              <h2 className="font-baskerville text-2xl text-navy mb-4">Built for ambitious businesses</h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                Inspired Accounts is ideal if you want to:
              </p>
              <ul className="space-y-4">
                {builtFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                If your current setup feels like &ldquo;just data entry&rdquo;
                and not a genuine management tool, this is where we help you
                close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed pricing */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-3xl">
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4">Fixed service levels, clear pricing</h2>
            <p className="text-navy/60 leading-relaxed mb-6">
              Inspired Accounts is offered on fixed service levels with six clear
              pricing tiers, so you can:
            </p>
            <ul className="space-y-4 mb-6">
              {pricing.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy/70">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-navy/60 leading-relaxed">
              Everything is fully functioning and all-inclusive within your
              chosen level — so you can stop piecing together different providers
              and focus on running the business.{" "}
              <Link href="/contact" className="text-steel underline underline-offset-4 decoration-steel/40 hover:decoration-steel hover:text-navy transition-colors">
                Get a fixed quote on a free discovery call
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* How we make it work — Dext & Xero + process, merged */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4">How we make it work</h2>
              <p className="text-navy/60 leading-relaxed">
                We use Dext for effortless document capture and Xero for
                powerful, flexible reporting — and we design the finance
                processes around them to be simple, structured and
                insight-driven, not just digitised. If you&apos;re already on
                cloud software but only using 70% of what it can do, we help you
                unlock the remaining 30%, turning it from a data store into a
                genuine management tool.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4">
                {howItWorks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy/70">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-navy/60 leading-relaxed text-sm">
                From invoice approval flows to bank reconciliations and month-end
                reporting, we refine these processes to work for you — not the
                other way round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Ready to make Inspired Accounts your competitive edge?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Book a free, no-obligation consultation and find out how Inspired
            Accounts can transform the way your business uses its numbers.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-steel text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#3d6a90] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
