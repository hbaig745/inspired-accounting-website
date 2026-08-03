import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capital Gains Tax on Shares & Assets | Inspired Accounting",
  description:
    "Clear advice on Capital Gains Tax when you sell shares, business assets or valuable possessions — what's taxable, current rates and allowances, and how to plan disposals tax-efficiently.",
};

const whatCanBeTaxed = [
  { title: "Shares and investments", body: "Held outside a tax-free wrapper such as an ISA or pension." },
  { title: "Business assets", body: "Including land, buildings, and plant and machinery." },
  { title: "Valuable personal possessions", body: "Jewellery, art, antiques, coins and similar items worth more than £6,000." },
];

const rates = [
  { rate: "18%", body: "For gains falling within the basic-rate Income Tax band." },
  { rate: "24%", body: "For gains above the basic-rate band." },
  { rate: "£3,000", body: "The Annual Exempt Amount — the first £3,000 of gains each year is tax-free. It can't be carried forward, so unused allowance is lost at the end of the tax year." },
];

const howWeHelp = [
  "Working out what's taxable and what isn't, before you sell",
  "Calculating the likely CGT bill so there are no surprises",
  "Timing disposals to make the best use of allowances and reliefs, such as Business Asset Disposal Relief",
  "Handling the reporting and filing, on time, every time",
];

export default function CapitalGainsTaxOtherAssetsPage() {
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
            Capital Gains Tax
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Clear, straightforward advice on what you owe — and how to plan ahead — when you sell or give away shares, business assets, or valuable possessions.
            </p>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200">
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + what is CGT */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              If you&apos;ve sold or given away shares, business assets, or valuable possessions, you may need to pay Capital Gains Tax (CGT) on the profit. The rules aren&apos;t always obvious, and getting the timing or the figures wrong can mean paying more than you need to — or missing a reporting deadline altogether. We help clients understand exactly what&apos;s taxable, work out what&apos;s owed, and plan disposals in the most tax-efficient way.
            </p>
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4">What is Capital Gains Tax?</h2>
            <p className="text-navy/70 leading-relaxed">
              Capital Gains Tax is charged on the profit you make when you sell, gift, swap, or otherwise dispose of an asset that has increased in value. You&apos;re taxed on the gain — the difference between what you paid and what you received — not on the full amount of the sale.
            </p>
          </div>
        </div>
      </section>

      {/* What can be taxed */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-3">What can be taxed</h2>
          <p className="text-navy/60 leading-relaxed max-w-2xl mb-10">CGT can apply to a range of assets, including:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatCanBeTaxed.map((w) => (
              <div key={w.title} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <h3 className="font-baskerville text-xl text-navy mb-4 leading-snug">{w.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-3 max-w-3xl">
            <p className="text-navy/60 text-sm leading-relaxed">
              Assets transferred between spouses or civil partners are treated as no gain, no loss.
            </p>
            <p className="text-navy/60 text-sm leading-relaxed">
              Selling a property? Capital Gains Tax on property — including the 60-day reporting rule — is covered on our{" "}
              <Link href="/services/capital-gains-tax" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">dedicated property pages</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Rates and allowance */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-3">Current rates and allowance</h2>
          <p className="text-navy/60 leading-relaxed max-w-2xl mb-10">For the 2025/26 tax year:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rates.map((r) => (
              <div key={r.rate} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <span className="font-baskerville text-3xl md:text-4xl text-navy block mb-3">{r.rate}</span>
                <p className="text-navy/60 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-navy/60 text-sm leading-relaxed max-w-3xl mt-8">
            These rates apply equally to shares, business assets and personal possessions, following changes announced in the Autumn Budget.
          </p>
        </div>
      </section>

      {/* Reporting and deadlines */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-5">Reporting and deadlines</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              Gains on shares, business assets and personal possessions are reported through your Self Assessment tax return, due by 31 January following the end of the tax year.
            </p>
            <p className="text-navy/60 text-sm leading-relaxed">
              If your gains are covered entirely by the Annual Exempt Amount and you have no other Self Assessment obligation, you generally won&apos;t need to report them — but it&apos;s worth checking, as reporting thresholds and rules can change.
            </p>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
            {howWeHelp.map((h) => (
              <li key={h} className="flex items-start gap-3 text-navy/70 leading-relaxed">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Thinking of selling an asset?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Every situation is different, so we quote based on your circumstances. Get in touch for a clear, no-obligation quote before you make a move.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0a1f33] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
            Contact us for a quote
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
