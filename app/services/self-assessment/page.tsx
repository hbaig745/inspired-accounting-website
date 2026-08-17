import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self Assessment",
  description:
    "Self-assessment made simple. From landlords and CIS sub-contractors to directors and investors — we check if you need a return, file it accurately and help you plan ahead.",
};

const whoNeeds = [
  { title: "Property owners and landlords", body: "Receiving rental income from UK or overseas property." },
  { title: "Freelance consultants and sole traders", body: "Earning self-employed income alongside, or instead of, employment." },
  { title: "Sub-contractors within CIS", body: "Having tax deducted at source under the Construction Industry Scheme that needs to be reconciled through a return." },
  { title: "Company directors and owner-managers", body: "Taking a mix of salary, dividends and benefits that isn't fully dealt with through PAYE." },
  { title: "Higher-rate or additional-rate taxpayers", body: "Where PAYE does not fully cover the tax due on your income." },
  { title: "People with investment or dividend income", body: "Dividends from your own company, bank interest or other investments over the basic allowances." },
  { title: "Individuals with foreign income", body: "Overseas employment, property or investments." },
  { title: "Those with multiple income sources", body: "Employment plus side-hustles, casual work, or other taxable income." },
];

const whatWeDo = [
  {
    title: "Check Whether You Need to File",
    body: "We start with a simple fact-find covering your income, investments and circumstances, then confirm whether HMRC is likely to expect a return from you.",
  },
  {
    title: "Register and Set You Up",
    body: "Where needed, we handle registration for self-assessment (and, if applicable, self-employment or CIS), and make sure you're set up for online filing.",
  },
  {
    title: "Prepare and File Your Return",
    body: "We gather the information, prepare your self-assessment return, claim all relevant allowances and reliefs, and file electronically with HMRC on your behalf.",
  },
  {
    title: "Explain What You Owe and Why",
    body: "You receive a clear summary of your tax position — how much is due, when it must be paid, and how that figure is calculated — in plain English.",
  },
  {
    title: "Plan Ahead for Future Years",
    body: "We look beyond this year's return, helping you structure income, dividends, rental profits and investments so future tax bills are more predictable and efficient.",
  },
];

const ethos = [
  { title: "Personal Service", body: "You deal with a named adviser who gets to know your situation, not a rotating support team." },
  { title: "Clarity Over Jargon", body: "We translate HMRC letters, rules and calculations into language you can actually understand." },
  { title: "Proactive, Not Just Reactive", body: "We don't just do the form — we highlight opportunities to improve your tax position and avoid surprises down the line." },
  { title: "Deadline-Focused", body: "Our processes are built around hitting filing and payment deadlines, reducing the risk of penalties and last-minute panic." },
];

const whoWeWorkWith = [
  "Property owners and landlords",
  "Freelancers, consultants and sole traders",
  "CIS sub-contractors",
  "Company directors and owner-managers",
  "Individuals with multiple or more complex income sources",
];

export default function SelfAssessmentPage() {
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
            Self Assessment
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Self-assessment without the stress. We check if you need to file, handle registration, prepare the return and help you plan ahead — so you only pay the tax you actually owe.
            </p>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200">
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4">Who typically needs a self-assessment return?</h2>
          <p className="text-navy/60 mb-10 max-w-2xl leading-relaxed">
            There are many reasons HMRC may expect you to complete a self-assessment return. If you&apos;re unsure whether you need to file, we&apos;ll review your situation and give you a clear answer. Common examples include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoNeeds.map((item) => (
              <div key={item.title} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-6">
                <h3 className="font-baskerville text-lg text-navy mb-2">{item.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Not sure if you need to file?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Get in touch and we&apos;ll review your situation, give you a clear answer and handle everything from there.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
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

      {/* Ethos + Who we work with */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: calm, clear, on your side</h2>
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
                If you want self-assessment handled properly, with clear advice and minimal hassle, Inspired Accounting is ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
