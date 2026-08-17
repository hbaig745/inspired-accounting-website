import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporation Tax Services",
  description:
    "Corporation tax handled alongside your statutory accounts — capital allowances, full HMRC computations and filing deadlines, managed in one joined-up process.",
};

const whatWeDo = [
  {
    title: "Corporation Tax Prepared Alongside Your Accounts",
    body: "Your CT600 computation is completed in the same timeframe as your statutory accounts, using the same underlying figures. One process, one point of contact, one deadline to think about.",
  },
  {
    title: "Accounting Profit to Taxable Profit, Fully Reconciled",
    body: "Accounting profit and taxable profit are rarely the same number. We identify every adjustment required to move from one to the other, so your liability is calculated on the right figure — not an approximation.",
  },
  {
    title: "Capital Allowances & Annual Investment Allowance",
    body: "We review your qualifying expenditure and apply the Annual Investment Allowance and other capital allowances correctly, so you claim everything you're entitled to and nothing you're not.",
  },
  {
    title: "Full Computations & Documentation",
    body: "Every adjustment is calculated and documented in a clear working file, not just summarised in a return. If HMRC ever asks how a figure was arrived at, the answer is already on record.",
  },
  {
    title: "HMRC Submissions & Deadlines",
    body: "We prepare and submit your return directly to HMRC, track your payment and filing deadlines, and let you know in good time what's due and when — no last-minute scrambles.",
  },
];

const ethos = [
  { title: "Built Into Your Accounts Process", body: "Corporation tax isn't treated as an afterthought. Because it's prepared alongside your statutory accounts, there's no waiting for a second engagement or a second set of questions." },
  { title: "Every Allowance Considered", body: "We routinely review capital allowances, the Annual Investment Allowance and other reliefs so you're not paying more tax than you need to." },
  { title: "Documented, Not Just Declared", body: "Every adjustment between accounting and taxable profit is calculated and recorded, giving you a clear audit trail behind every figure submitted to HMRC." },
  { title: "Clarity, Not Jargon", body: "We explain what's been adjusted and why in plain English, so you understand your tax position — not just the number at the bottom of the return." },
];

const whoWeWorkWith = [
  "Limited companies preparing statutory accounts and a corporation tax return together",
  "Businesses with capital expenditure looking to make full use of available allowances",
  "Companies wanting their tax position properly documented, not just filed",
];

export default function CorporationTaxPage() {
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
          <span className="block text-xs font-medium tracking-[0.18em] uppercase text-taupe mb-3">Tax Services</span>
          <h1 className="font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            Corporation Tax Services
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              One process, not two. We prepare your corporation tax computation alongside your statutory accounts, in the same timeframe — so nothing is duplicated, nothing is delayed, and nothing falls between the cracks.
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
            <p className="text-navy/70 text-lg leading-relaxed">
              Your accounting profit and your taxable profit are rarely the same figure. Reliefs like the Annual Investment Allowance, disallowable expenses and other adjustments all have to be identified, calculated and properly documented before a return goes anywhere near HMRC. We handle that translation for you, as a natural extension of preparing your{" "}
              <Link href="/services/statutory-accounts" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">statutory accounts</Link>
              {" "}— not as a separate job with its own timetable.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">What we do for you</h2>
          <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
            {whatWeDo.map((item, i) => (
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

      {/* Mid CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Want corporation tax handled properly?</h2>
          <p className="text-white/75 mb-8 max-w-lg mx-auto">
            Talk to us about bringing your accounts and corporation tax together, into one clear, well-documented process.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Ethos + Who we work with */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: bespoke, practical, proactive</h2>
              <div className="space-y-6">
                {ethos.map((e) => (
                  <div key={e.title} className="border-l-4 border-[#A89B8C] pl-6">
                    <h3 className="font-baskerville text-lg text-navy mb-2">{e.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Who we work with</h2>
              <ul className="space-y-4 mb-8">
                {whoWeWorkWith.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {w}
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 text-sm leading-relaxed">
                If you want your corporation tax handled as part of one clear process — properly computed, fully documented and submitted on time — we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
