import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Portfolio Accounting | Inspired Accounting",
  description:
    "Specialist accounting for landlords and property investors — digital records, Making Tax Digital readiness and portfolio-wide reporting for a private rented sector that's changing fast.",
};

const whatWeDo = [
  {
    title: "Digital Records, Set Up Properly",
    body: "We move you off spreadsheets and onto cloud accounting software built for landlords, giving you accurate, up-to-date records for every property in your portfolio — not just at year end, but all year round.",
  },
  {
    title: "Ready for Making Tax Digital",
    body: "From April 2027, the qualifying income threshold for Making Tax Digital for Income Tax drops to £30,000, pulling many more landlords into quarterly digital reporting. We get your accounts digitised and MTD-compliant well ahead of time, so the change is straightforward rather than stressful.",
  },
  {
    title: "Portfolio-Wide Reporting",
    body: "See how your portfolio is really performing — property by property or as a whole. Clear, digital reporting means you can plan purchases, refinancing and disposals around real figures, not guesswork.",
  },
  {
    title: "Keeping Pace with Renters' Rights Reform",
    body: "The Renters' Rights Act has added new layers of tenancy, compliance and record-keeping requirements for landlords. We help you keep the financial side organised and evidenced, so compliance sits alongside good accounting rather than competing with it.",
  },
  {
    title: "Tax Planning for Landlords",
    body: "From property income and allowable expenses to structuring and Capital Gains Tax, we help you plan ahead — so tax is something you've prepared for, not something that catches you out.",
  },
];

const ethos = [
  { title: "Bespoke to Your Portfolio", body: "No two portfolios are the same. We build your reporting and record-keeping around how your properties are actually held — personally, jointly or through a company." },
  { title: "Digital First, Ahead of the Deadline", body: "We don't wait for a compliance deadline to force the change. Getting your accounts digitised now means Making Tax Digital is simply a formality when it arrives." },
  { title: "Proactive, Not Reactive", body: "As tenancy and tax rules keep evolving, we flag what's changing and what it means for you — before it becomes a problem." },
  { title: "Clarity, Not Jargon", body: "We explain your portfolio's numbers and your obligations in plain English, so you always know where you stand." },
];

const whoWeWorkWith = [
  "Individual landlords with one or more rental properties",
  "Growing portfolio landlords approaching the Making Tax Digital threshold",
  "Landlords holding property through a limited company",
  "Property investors moving away from spreadsheets to proper digital systems",
];

export default function PropertyPortfolioPage() {
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
          <span className="block text-xs font-medium tracking-[0.18em] uppercase text-taupe mb-3">Accounting Services</span>
          <h1 className="font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            Property Portfolio Accounting
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Specialist accounting for landlords and property investors, built for a private rented sector that&apos;s changing fast — and for the digital tax rules coming with it.
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
              Managing a property portfolio has never demanded more. The Renters&apos; Rights Act has reshaped how landlords manage tenancies and evidence compliance, and HMRC&apos;s Making Tax Digital rules are about to bring far more landlords into digital reporting than ever before. Between the two, keeping track of your portfolio on a spreadsheet is no longer the smartest way to stay on top of your finances.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              We help landlords and property investors move onto proper digital accounting systems — so you can plan with confidence, direct your portfolio with clear numbers, and meet your tax and compliance obligations without the last-minute scramble.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Want accounting that&apos;s ready for what&apos;s coming?</h2>
          <p className="text-white/75 mb-8 max-w-lg mx-auto">
            Whether you have one rental property or a growing portfolio, we&apos;ll help you get your accounts digitised, compliant and working for you — well before the rules require it.
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
                If you want your property accounts organised, digital and ready for what&apos;s next — for the Renters&apos; Rights Act, for Making Tax Digital, and for your own peace of mind — we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
