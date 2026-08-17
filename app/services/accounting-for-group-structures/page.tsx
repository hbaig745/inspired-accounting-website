import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounting for Group Structures",
  description:
    "Statutory and consolidated accounts for group and multi-entity structures — with intercompany transactions properly reconciled and eliminated. Accurate for each company, consistent across the group.",
};

const whatWeDo = [
  {
    title: "Statutory & Consolidated Accounts",
    body: "Full, compliant statutory accounts for every company in your structure, plus consolidated group accounts where required under the Companies Act 2006 — with intercompany transactions properly eliminated.",
  },
  {
    title: "Small Group Exemption Assessment",
    body: "Many groups don't need full consolidation. We assess yours against the small companies' thresholds each year, so you're never paying for work you don't legally need.",
  },
  {
    title: "“Sideways” Group Structures",
    body: "Not every group is a formal parent and subsidiary. If you run related companies under common ownership, we keep each one accurate individually while the picture across all of them stays consistent and reconciled.",
  },
  {
    title: "Intercompany Reconciliations & Bookkeeping",
    body: "Director loans, management charges and intercompany balances kept reconciled throughout the year — with every company set up on Dext and Xero — so your accounts stand up to scrutiny.",
  },
];

const ethos = [
  { title: "Personal Service", body: "One dedicated accountant who understands how your companies fit together — not a call centre." },
  { title: "Clarity Over Jargon", body: "We explain what a group structure means for your accounts in plain English." },
  { title: "Built for Growth", body: "As your group grows or crosses reporting thresholds, we keep your accounts ahead of it." },
];

const whoWeWorkWith = [
  "Business owners separating a trading company from cash and investments held for the future",
  "Family businesses with several related trading, property or holding companies",
  "Formal holding company structures with one or more subsidiaries",
  "“Sideways” groups — related companies under common ownership without a formal parent-subsidiary link",
  "Groups approaching, or already over, the small companies' thresholds that trigger consolidated accounts",
];

export default function GroupStructuresPage() {
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
            Accounting for Group Structures
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Whether you have a formal parent-and-subsidiary group or simply run related companies side by side, you need accounts that are accurate for each entity and consistent across the group.
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
              Group structures are more popular than ever — as tax rates rise, separating the cash your business generates from the trade that generates it has become a genuine necessity, not just a nice-to-have.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              This page covers accounts preparation for group and multi-entity structures. Tax planning for group structures — how to structure a group and extract cash efficiently — is covered separately.
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

      {/* Note on tax planning */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-3xl border-l-4 border-[#A89B8C] pl-6 md:pl-8">
            <h2 className="font-baskerville text-2xl text-navy mb-3">A note on tax planning</h2>
            <p className="text-navy/70 leading-relaxed">
              This page is about getting the accounts right once your group structure is in place. If you&apos;re weighing up how to structure a group, or extract cash tax-efficiently, that&apos;s a separate conversation — ask us about our{" "}
              <Link href="/services/tax-planning" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">tax planning services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Talk to us about your group</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Tell us how your companies fit together and we&apos;ll show you how we can keep every entity accurate and the whole group consistent.
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
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos</h2>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
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
