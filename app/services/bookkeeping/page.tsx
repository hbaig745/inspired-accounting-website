import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description:
    "Digital bookkeeping for small businesses on Xero and Dext — every transaction captured, coded and reconciled, VAT-ready and Making Tax Digital compliant, so your figures are always up to date.",
};

const whatWeDo = [
  {
    title: "Digital Bookkeeping on Xero & Dext",
    body: "Snap a receipt or forward an invoice with Dext and we code and reconcile it in Xero. No shoeboxes, no spreadsheets, no year-end scramble — just clean, digital records kept up to date throughout the year.",
  },
  {
    title: "Regular Reconciliations",
    body: "We reconcile your bank, card and supplier accounts on a regular cycle, so the numbers you're looking at are complete and accurate — not a rough guess that only gets tidied up at year end.",
  },
  {
    title: "VAT-Ready Records",
    body: "Your records are structured so VAT returns are straightforward and correct, with VAT captured properly at source. If we handle your VAT too, it flows straight through from your bookkeeping.",
  },
  {
    title: "Management Figures You Can Use",
    body: "Because your books are always current, you can see how the business is really doing at any point — not just once a year. Clear, up-to-date figures make every decision easier.",
  },
  {
    title: "Making Tax Digital Compliant",
    body: "Digital record-keeping that already meets HMRC's Making Tax Digital requirements — so as the rules widen to more businesses and landlords, you're ready rather than rushing.",
  },
];

const ethos = [
  { title: "Digital First", body: "We work in the cloud on Xero and Dext, so your records are accurate, backed up and accessible whenever you need them." },
  { title: "Accurate & Reconciled", body: "Every account reconciled on a regular cycle means your figures can be trusted — the foundation everything else is built on." },
  { title: "Proactive", body: "If something looks off in your numbers, we flag it early rather than letting it surface as a problem at year end." },
  { title: "Clarity, Not Jargon", body: "We explain what your books are telling you in plain English, so you always understand where your business stands." },
];

const whoWeWorkWith = [
  "Sole traders and small limited companies who want to stop doing their own books",
  "Businesses moving from spreadsheets or shoeboxes to proper digital records",
  "Growing businesses that need reliable, up-to-date figures every month",
  "Anyone getting their records ready for Making Tax Digital",
];

export default function BookkeepingPage() {
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
            Bookkeeping Services
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Good accounting starts with good bookkeeping. We keep your records accurate and up to date on Xero and Dext — so you always know where your business stands, and year end takes care of itself.
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
              For most small businesses, bookkeeping is the job that quietly eats evenings and weekends — or gets left in a carrier bag until the deadline looms. Neither works. Messy, out-of-date records cost you money in missed reclaims and rushed decisions, and they make everything that follows — VAT, accounts, tax — harder than it needs to be.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              We take it off your plate. Everything runs digitally on Xero and Dext, kept current all year round, so your books are a genuine, reliable picture of your business rather than a once-a-year reconstruction.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Ready to get your books off your plate?</h2>
          <p className="text-white/75 mb-8 max-w-lg mx-auto">
            Whether you&apos;re starting from a clean slate or a carrier bag of receipts, we&apos;ll get you set up on a proper digital system and keep it running.
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: accurate, digital, proactive</h2>
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
                Bookkeeping is the foundation for everything else we do — clean records feed straight into your{" "}
                <Link href="/services/vat" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">VAT</Link>,{" "}
                <Link href="/services/statutory-accounts" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">year-end accounts</Link>{" "}
                and tax, with no duplication and no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
