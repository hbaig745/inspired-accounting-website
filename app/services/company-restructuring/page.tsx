import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company Structuring & Restructuring Advice | Inspired Accounting",
  description:
    "For growing businesses ready to structure their success — holding companies, investment structures and restructuring advice that protects what you've built and makes surplus profit work harder.",
};

const covers = [
  "A review of your trading performance, retained profits, and what you want to achieve with them",
  "Advice on setting up a holding company structure to hold surplus cash and investments separately from trading risk",
  "Guidance on extracting and reinvesting profit tax-efficiently, including into property or other business interests",
  "Comparison of structures (sole trader, limited company, group or holding structures) in plain English",
  "A practical plan for restructuring or incorporating, if it's the right call",
  "Guidance on timing, so any changes fit around your accounts and tax position rather than complicating them",
];

const steps = [
  {
    label: "Step 1",
    title: "Free initial consultation",
    body: "We start with a no-cost, no-obligation conversation about your business, your profits, and what you're hoping to achieve — whether that's protecting what you've built, investing surplus cash, or simply reviewing your options.",
  },
  {
    label: "Step 2",
    title: "Review and recommendation",
    body: "We assess your trading position and goals against the options available — including holding company and investment structures — and give you a clear recommendation, including what it would mean in practice, not just in theory.",
  },
  {
    label: "Step 3",
    title: "Implementation, if you decide to go ahead",
    body: "If restructuring or setting up a holding company is the right move, we handle the process and make sure it's set up correctly from the start.",
  },
];

const whoItsFor = [
  "Profitable trading businesses building up surplus cash and considering how to invest it",
  "Business owners wanting to separate trading risk from accumulated wealth via a holding company",
  "Companies looking to invest retained profit into property or other ventures through the right structure",
  "Owners planning ahead for succession, sale, or long-term tax efficiency",
];

export default function CompanyRestructuringPage() {
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
            Company Structuring &amp; Restructuring Advice
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              For growing businesses ready to structure their success — and for trading companies looking at how to invest their profits properly.
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
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-5">Doing well, and thinking about what comes next?</h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-4">
              If your trading business is performing well, the question often stops being &ldquo;how do we grow the business&rdquo; and becomes &ldquo;what do we do with the profit we&apos;re generating.&rdquo; That&apos;s where structure matters most — the right setup protects what you&apos;ve built, makes surplus cash work harder, and keeps your options open for the future.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-4">
              We work with established, profitable trading businesses to review whether their current structure still fits — and, where it makes sense, how to set up a holding company or investment structure to hold surplus profits, ring-fence trading risk, and invest efficiently, whether that&apos;s in property, other businesses, or a longer-term investment portfolio.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              We also support businesses starting out or restructuring for other reasons — bringing in a partner, planning for succession, or simply reviewing whether sole trader or limited company still fits. But the focus of this service is helping successful trading businesses take the next step with their structure.
            </p>
          </div>
        </div>
      </section>

      {/* What this service covers */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">What this service covers</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
            {covers.map((c) => (
              <li key={c} className="flex items-start gap-3 text-navy/70 leading-relaxed">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.label} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe block mb-3">{s.label}</span>
                <h3 className="font-baskerville text-xl text-navy mb-4 leading-snug">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + pricing */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Who it&apos;s for</h2>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">This service is built primarily for:</p>
              <ul className="space-y-4 mb-6">
                {whoItsFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {w}
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 text-sm leading-relaxed">
                It also suits businesses starting out and weighing up sole trader vs limited company, or bringing in a partner or investor.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Pricing</h2>
              <p className="text-navy/70 leading-relaxed">
                Every business is different, so this service is quoted individually based on the complexity of your current structure and what you&apos;re looking to achieve. Contact us for a quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Book your free initial consultation</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            No cost. No obligation. Just clear advice on structuring your success and investing it well.
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
