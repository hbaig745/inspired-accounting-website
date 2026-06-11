import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capital Gains Tax on Property | Inspired Accounting",
  description:
    "Selling a buy-to-let or residential property? Don't miss the 60-day CGT deadline. Fixed-fee support at every stage — from pre-sale estimates to filing and payment.",
};

const phases = [
  {
    label: "Thinking about selling",
    title: '"What will the tax be?"',
    body: "You're considering selling a buy-to-let or second home and want to know the likely CGT bill before you commit. We can estimate your potential gain and tax, explain how reliefs, costs and ownership split affect the figure, and help you decide if and when to sell — with eyes wide open.",
  },
  {
    label: "Sale agreed or completed",
    title: '"I want to plan ahead"',
    body: "You've sold (or are about to sell) and want to understand what CGT you're likely to pay, how the 60-day reporting works, and how this interacts with your self-assessment return. We'll map out the numbers, dates and cash-flow impact so there are no surprises.",
  },
  {
    label: "Already sold",
    title: '"I need to file within 60 days"',
    body: "You've completed on a residential property sale and must now work out the gain and tax, file a UK property CGT return, and pay HMRC — all within 60 days of completion. We calculate the gain, prepare the figures, submit the return to HMRC for you, and ensure everything ties in with your year-end self-assessment.",
  },
];

const whatWeDo = [
  {
    title: "Capital Gains Calculations",
    body: "We work out your gain or loss, taking into account purchase price and sale proceeds, legal and professional fees, capital improvements, and available allowances and reliefs. You get a clear summary of how the figure is built and what tax is due.",
  },
  {
    title: "60-Day UK Property CGT Returns",
    body: "For UK residential property disposals caught by the 60-day rules, we register or access your HMRC CGT account, complete and submit the property CGT return, and advise on payment amounts and deadlines.",
  },
  {
    title: "Planning and Advice",
    body: "Where you're still at the planning stage, we can model different sale timings and scenarios, consider ownership splits (for couples, for example), and coordinate CGT with your wider income and allowances for the year.",
  },
  {
    title: "Linking to Self-Assessment",
    body: "We make sure your 60-day report and your year-end self-assessment line up, and adjust for any over- or under-payments.",
  },
];

const ethos = [
  { title: "Clear Explanations", body: "We break down your gain and tax in plain English, so you understand exactly what you're paying and why." },
  { title: "Deadline-Driven", body: "Our processes are built around the 60-day requirement, helping you avoid unnecessary penalties and interest." },
  { title: "Fixed Fees for Each Stage", body: "Whether you just want a pre-sale estimate, a planning review after exchange, or full 60-day filing support, we offer transparent fixed fees so you know the cost upfront." },
  { title: "Personal Support", body: "You work with a named adviser who understands your property, your wider tax position and your goals." },
];

const whoWeWorkWith = [
  "Buy-to-let landlords selling UK residential property",
  "Individuals selling second homes or inherited properties",
  "Property owners needing to regularise past disposals",
];

export default function CapitalGainsTaxPage() {
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
            Capital Gains Tax on Property
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-xl leading-relaxed">
            Selling a rental or second home? Don&apos;t let CGT deadlines catch you out. From estimating your tax before you sell to filing the 60-day UK property return after completion — fixed-fee support at every stage.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            <p className="text-navy/70 text-lg leading-relaxed">
              Selling a buy-to-let or other residential property can trigger a capital gains tax (CGT) bill — and strict 60-day deadlines to report and pay HMRC using the UK property CGT return. Missing those deadlines can mean penalties and interest.
            </p>
          </div>
        </div>
      </section>

      {/* When you might need help */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">When you might need help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.label} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe block mb-3">{phase.label}</span>
                <h3 className="font-baskerville text-xl text-navy mb-4 leading-snug">{phase.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
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

      {/* Ethos + Who we work with */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: clear, timely, fixed-fee</h2>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {w}
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 text-sm leading-relaxed">
                If you&apos;re selling — or have recently sold — a residential property and want CGT handled correctly and on time, we can guide you through every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Don&apos;t miss the 60-day deadline</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Get in touch as soon as you know a sale is happening. The sooner we start, the more options you have.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-taupe text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#968a7c] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
