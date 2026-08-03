import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Planning | Inspired Accounting",
  description:
    "Year-round business tax planning built into your Inspired Accounts package, plus one-off, bespoke support for personal matters — inheritance tax, capital gains, trusts and HMRC disclosures.",
};

const businessIncluded = [
  "Corporation tax planning and year-end tax efficiency reviews",
  "VAT scheme selection and ongoing VAT accounting",
  "Company structuring — including group structures, holding companies and share classes",
  "Profit extraction planning — salary, dividends and pension contributions",
  "R&D relief and capital allowances reviews, where relevant",
  "Timing advice on major purchases, disposals or investment decisions",
];

const personalMatters = [
  {
    title: "Inheritance Tax (IHT) planning",
    body: "We help you look at what your estate might owe and the legitimate reliefs and allowances available to reduce it — from lifetime gifting and trusts to business and agricultural reliefs where they apply. The aim is straightforward: make sure more of what you've built goes to the people you intend, not to unnecessary tax.",
  },
  {
    title: "Capital Gains Tax (CGT) advice",
    body: "Selling a second property, a portfolio of shares, or a business? We calculate the likely gain, identify the reliefs and allowances that apply, and advise on timing so a sale doesn't create a bigger tax bill than it needs to. This includes property disposals, share sales, and business asset disposals.",
  },
  {
    title: "Self-Assessment tax returns",
    body: "For directors, landlords, and anyone with income outside standard PAYE, we prepare and file your Self-Assessment return, make sure you're claiming everything you're entitled to, and flag anything HMRC is likely to query before it becomes a problem.",
  },
  {
    title: "Trusts and estate planning",
    body: "If you're setting up a trust, acting as a trustee, or thinking about how to pass on assets across generations, we advise on the tax implications and help keep the arrangement compliant and efficient over time.",
  },
  {
    title: "HMRC enquiries, investigations and voluntary disclosures",
    body: "If HMRC has opened an enquiry, or you've realised something in your tax affairs needs putting right, we manage the process on your behalf — including voluntary disclosures where historic issues need resolving. We've supported clients through complex, long-running cases and negotiated practical settlements with HMRC.",
  },
  {
    title: "Non-UK domicile and residency matters",
    body: "If your affairs involve time spent overseas, non-UK income or assets, or a change in domicile or residency status, we advise on how this affects your UK tax position and what needs to be reported.",
  },
  {
    title: "Estate and probate tax support",
    body: "Following a bereavement, we help executors and family members work through the tax side of estate administration — valuing the estate for IHT purposes, preparing the necessary returns, and working alongside your solicitor where legal probate advice is needed.",
  },
];

export default function TaxPlanningPage() {
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
            Tax Planning
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Tax planning means two different things depending on who&apos;s asking. For your business, it&apos;s a year-round discipline built into how we manage your accounts. For you personally, it&apos;s usually a one-off piece of work around a specific life event. We handle both, and we&apos;re upfront about which is which.
            </p>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200">
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Two-part split */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe block mb-3">For your business</span>
              <p className="text-navy/70 leading-relaxed">
                Ongoing tax planning built into your Inspired Accounts package — corporation tax, VAT, structuring and more, handled year-round.
              </p>
            </div>
            <div className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe block mb-3">For you, personally</span>
              <p className="text-navy/70 leading-relaxed">
                One-off, bespoke support for personal tax matters like inheritance tax, capital gains and HMRC disclosures — priced and scoped individually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business tax planning */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-5">Business tax planning</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                If you run a business with us, tax planning isn&apos;t a separate service you have to remember to book — it&apos;s built into your Inspired Accounts package. We look at your corporation tax position, VAT treatment, structuring, and the timing of income and expenditure as a matter of course, not as an afterthought at year end.
              </p>
              <p className="text-navy/60 text-sm leading-relaxed">
                Because this work sits inside your existing package, there&apos;s no separate invoice for it and no need to scope it out each time — it&apos;s simply part of how we look after your business.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="font-baskerville text-lg text-navy mb-6">What&apos;s included as standard</h3>
              <ul className="space-y-4 mb-8">
                {businessIncluded.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-navy/70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-6">
                <p className="text-navy/70 text-sm leading-relaxed mb-4">
                  Business tax planning is included across every tier of Inspired Accounts. See what&apos;s covered at each level and find the right fit for your business.
                </p>
                <Link href="/services/inspired-accounts" className="inline-flex items-center gap-1.5 text-steel text-sm font-medium hover:text-navy transition-colors">
                  View Inspired Accounts packages and pricing
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal tax matters */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl mb-10">
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4">Personal tax matters</h2>
            <p className="text-navy/70 leading-relaxed">
              Some tax questions aren&apos;t really about your business at all — they&apos;re about you: your estate, your property, your investments, or a letter that&apos;s landed on your doormat from HMRC. These matters are usually one-off rather than ongoing, so we scope and price each one individually once we understand what you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalMatters.map((m) => (
              <div key={m.title} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <h3 className="font-baskerville text-xl text-navy mb-4 leading-snug">{m.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="text-navy/60 text-sm leading-relaxed max-w-2xl mt-8">
            Personal tax matters are quoted individually once we understand the specifics of your situation — there&apos;s no one-size-fits-all price for something like an inheritance tax review or an HMRC disclosure. Get in touch and we&apos;ll give you a clear, fixed quote before any work begins.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Not sure which category your query falls into?</h2>
          <p className="text-white/75 mb-8 max-w-lg mx-auto">
            That&apos;s fine — most people aren&apos;t. Tell us what&apos;s going on and we&apos;ll point you in the right direction, whether that&apos;s folding it into your existing package or scoping a one-off piece of work.
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
