import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property & Real Estate",
  description:
    "Accounting for property investors and landlords — income tax, CGT, SDLT, mortgage interest relief and portfolio structuring handled with clarity.",
};

const painPoints = [
  {
    title: "Tax on Rental Income",
    body: "Rental income is taxable, but allowable expenses, finance costs and the way you structure ownership all affect how much tax you actually pay. Many landlords overpay because nobody has reviewed their position properly. We make sure your rental income is reported correctly and your allowable deductions are fully claimed.",
  },
  {
    title: "Capital Gains Tax on Disposal",
    body: "Selling a rental or investment property triggers CGT — and for residential property, a strict 60-day reporting deadline. The calculation involves original cost, improvements, legal fees and available reliefs. We handle the numbers and the filing so nothing is missed and no deadlines are broken.",
  },
  {
    title: "Mortgage Interest Relief Changes",
    body: "The restriction on mortgage interest relief for individual landlords has significantly increased tax bills for higher-rate taxpayers. Many haven't restructured in response. We review your position and model the impact of holding in your own name versus a limited company.",
  },
  {
    title: "Portfolio Structuring",
    body: "As a portfolio grows, the right ownership structure becomes increasingly important — personally held, in a limited company, in trust or a combination. Each has different income tax, CGT and SDLT implications. We help you think through the options before you commit.",
  },
];

const whatWeDo = [
  {
    title: "Rental Income Tax Returns",
    body: "Annual self-assessment returns covering all your rental income, expenses, finance costs and capital allowances where applicable. Filed accurately and on time, with a clear summary of what you owe and why.",
  },
  {
    title: "CGT Calculations and 60-Day Returns",
    body: "Capital gains calculations for residential and commercial property disposals. 60-day UK property returns filed within the deadline. Coordination with your self-assessment return so everything ties in.",
  },
  {
    title: "Portfolio Structuring Advice",
    body: "Review of your current ownership structure and modelling of alternatives — personal, limited company or mixed. Tax implications, practical considerations and transition costs all covered before you make any changes.",
  },
  {
    title: "Limited Company Accounts for Property",
    body: "Statutory accounts and corporation tax returns for property holding companies. Director loan accounts, dividend planning and extraction strategies managed alongside your personal tax position.",
  },
];

const ethos = [
  { title: "Long-Term Thinking", body: "Property investment is a long game. We take the same view — advising on structures and decisions that make sense over years and decades, not just the current tax year." },
  { title: "Joined-Up Advice", body: "Your property income, CGT, personal tax and company structures all interact. We look at the full picture so nothing falls between the cracks." },
  { title: "Plain English on Complex Rules", body: "Property tax has layers — SDLT, CGT, income tax, mortgage interest restrictions, ATED. We explain what applies to you and what it means in practice, without the jargon." },
];

const whoWeWorkWith = [
  "Buy-to-let landlords with one or more properties",
  "Property investors building or managing a portfolio",
  "Landlords considering moving to a limited company structure",
  "Individuals selling investment or inherited property",
];

export default function PropertyPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(168,155,140,0.15),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-taupe/20 to-transparent" />
          <div className="absolute inset-0 bg-taupe/[0.07]" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }} />
          <div className="absolute inset-0 bg-taupe/[0.08]" style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 58% 100%)" }} />
        </div>
        <div className="container-max section-padding relative z-10">
          <Link href="/specialisms" className="inline-flex items-center gap-2 text-taupe text-xs tracking-[0.18em] uppercase mb-6 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Specialisms
          </Link>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            Property & Real Estate
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Rental income, CGT, mortgage interest and portfolio structuring — property tax done properly so you keep more of what you earn.
            </p>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200">
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">The pain points we help you solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <h3 className="font-baskerville text-lg text-navy mb-3">{p.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Keep more of what your property earns</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">Structured advice on rental income, CGT and ownership — so your portfolio works as hard as possible.</p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help property investors</h2>
          <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
            {whatWeDo.map((item, i) => (
              <div key={item.title} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-1"><span className="font-baskerville text-[#A89B8C] text-sm">0{i + 1}</span></div>
                <div className="lg:col-span-4"><h3 className="font-baskerville text-xl text-navy leading-snug">{item.title}</h3></div>
                <div className="lg:col-span-7"><p className="text-navy/60 leading-relaxed">{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: long-term, joined-up, clear</h2>
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
              <ul className="space-y-4">
                {whoWeWorkWith.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
