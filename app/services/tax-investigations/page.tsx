import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Investigations | Inspired Accounting",
  description:
    "Straightforward, well-managed support if HMRC opens an enquiry into your tax affairs — from routine aspect checks to COP8 and COP9, managed in-house or alongside specialist tax advisors.",
};

const support = [
  {
    title: "In-house, where we can",
    body: "Many enquiries are straightforward and can be managed directly by our accountants — liaising with HMRC on your behalf, pulling together the right records, and answering questions as they arise. This keeps things simple and keeps costs down.",
  },
  {
    title: "With specialist support, where it's needed",
    body: "For more complex or higher-risk cases, we work alongside trusted tax advisors who specialise in investigations. We stay closely involved throughout, coordinating between you and the specialist so you're never left dealing with an unfamiliar adviser on your own.",
  },
];

const types = [
  { title: "Self-assessment enquiries", body: "HMRC queries a specific figure on your personal tax return, or opens a fuller review of the whole return." },
  { title: "Corporation tax enquiries", body: "A review of your company's tax return, usually focused on specific figures, expenses, or reliefs claimed." },
  { title: "VAT inspections", body: "Checks on VAT returns and the records behind them, sometimes including a visit or call from an HMRC officer." },
  { title: "PAYE and payroll checks", body: "A review of how payroll has been run and reported, including PAYE, National Insurance, and benefits in kind." },
  { title: "Code of Practice 8 (COP8)", body: "Used where HMRC suspects tax has been underpaid through avoidance rather than dishonesty. These cases usually call for specialist tax advisor involvement." },
  { title: "Code of Practice 9 (COP9)", body: "The most serious category, used where HMRC suspects deliberate or fraudulent underpayment. Specialist representation is essential from the outset, and we bring in a specialist tax advisor immediately." },
  { title: "Random and aspect enquiries", body: "Routine checks on one aspect of a return. These don't necessarily mean anything is wrong, and are often the most straightforward to resolve." },
];

export default function TaxInvestigationsPage() {
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
            Tax Investigations
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Straightforward, well-managed support if HMRC opens an enquiry into your tax affairs. Whatever the scale, you&apos;ll always have a clear point of contact and a plan for what happens next.
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
              A tax investigation is when HMRC looks more closely at your tax affairs, or your business&apos;s. It can range from a simple check on one figure on a return, through to a fuller review covering several years. Whatever the scale, it&apos;s easy to feel unsure about what&apos;s being asked, why, and what happens next.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              We handle investigations and enquiries for our clients as a matter of course. How we manage each case depends on the type of investigation and how complex the situation is — but you&apos;ll always have a clear point of contact and a plan for what happens next.
            </p>
          </div>
        </div>
      </section>

      {/* How we support you */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we support you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {support.map((s) => (
              <div key={s.title} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <h3 className="font-baskerville text-xl text-navy mb-4 leading-snug">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common types */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-3">Common types of investigation we deal with</h2>
          <p className="text-navy/60 leading-relaxed max-w-2xl mb-10">
            HMRC enquiries come in different forms, and the right level of support depends on which one you&apos;re facing:
          </p>
          <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
            {types.map((t) => (
              <div key={t.title} className="py-7 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="font-baskerville text-xl text-navy leading-snug">{t.title}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-navy/60 leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we decide + if HMRC contacted you */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-6">How we decide the right approach</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Not every enquiry needs the same level of involvement. Routine and aspect enquiries are often resolved with a short exchange of information and can be managed entirely in-house. Cases involving disputed figures, historic records, COP8, or COP9 call for more specialist expertise from the outset.
              </p>
              <p className="text-navy/60 text-sm leading-relaxed">
                Where possible, we manage matters in-house or provide direct support to an external tax advisor, rather than handing the whole case over. This keeps your costs together and proportionate to the complexity of the investigation, and means you always have one familiar contact managing things on your side.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8 h-full">
                <h2 className="font-baskerville text-2xl text-navy mb-4">If HMRC has contacted you</h2>
                <p className="text-navy/70 leading-relaxed">
                  Don&apos;t ignore any letter or notice from HMRC, and there&apos;s no need to panic. Get in touch with us as soon as you can — the sooner we&apos;re involved, the more options we usually have for resolving things smoothly and keeping any additional costs to a minimum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Received a letter from HMRC?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Talk to us before you respond. The sooner we&apos;re involved, the more options we usually have for resolving things smoothly.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
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
