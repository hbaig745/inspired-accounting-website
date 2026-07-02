import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VAT Services | Inspired Accounting",
  description:
    "Smarter VAT through better bookkeeping. Bespoke VAT setup, scheme selection, digital processing and HMRC compliance — all built around how your business actually operates.",
};

const whatWeDo = [
  {
    title: "VAT Setup Tailored to Your Business",
    body: "Every business is different, so your VAT setup should be too. We assess how you trade and then recommend and implement the most suitable VAT scheme — from standard to flat rate, cash accounting, or sector-specific schemes — so you are not overpaying or missing out on reliefs.",
  },
  {
    title: "Ongoing VAT Processing & Returns",
    body: "We manage your VAT calculations and submissions, using your bookkeeping data to prepare accurate returns on time, every time. As your business evolves, we adjust your approach so your VAT remains efficient and compliant.",
  },
  {
    title: "Bookkeeping That Supports VAT",
    body: "Because VAT and bookkeeping are intertwined, we help you structure your records so VAT is captured correctly from the start — improving the quality of your reclaims and reducing the risk of errors or HMRC queries.",
  },
  {
    title: "Digital, Time-Saving Systems",
    body: "We advise on and implement digital tools — from cloud accounting software to receipt-capture apps — so VAT processing becomes faster, more accurate and less manual. This not only saves you time, it also keeps HMRC happy with clear digital audit trails.",
  },
  {
    title: "Reconciliations & HMRC Enquiries",
    body: "Robust reconciliations mean fewer surprises. Where HMRC raises questions or opens an enquiry, well-kept digital records make it far easier to respond promptly and confidently.",
  },
];

const ethos = [
  { title: "Bespoke to Your Setup", body: "We don't force you into a one-size-fits-all process. Your VAT service is built around how your business actually operates, the systems you use and the level of support you need." },
  { title: "Using VAT Schemes to Your Advantage", body: "We regularly review whether you are on the right VAT scheme and look for opportunities to improve cash flow, reduce risk and maximise legitimate reclaims." },
  { title: "Digital First, But Human Led", body: "Technology does the heavy lifting; we provide the judgement and advice. You get the benefits of digital efficiency with a personal point of contact who understands your business." },
  { title: "Clarity, Not Jargon", body: "We explain your VAT position in plain English — what you owe, what you can reclaim and why — so you can make informed decisions with confidence." },
];

const whoWeWorkWith = [
  "VAT-registered small and medium-sized businesses",
  "Growing companies approaching the VAT threshold",
  "Businesses with complex or changing VAT needs looking to improve processes",
];

export default function VATPage() {
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
            VAT Services
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Smarter VAT, stronger reclaims. Align your VAT with high-quality bookkeeping, the right schemes and digital systems — so you reclaim more, stay compliant and handle HMRC enquiries with confidence.
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
            <p className="text-navy/70 text-lg leading-relaxed">
              VAT works best when your bookkeeping does. Clean, accurate records mean stronger VAT reclaims, fewer errors and less HMRC stress. We bring your VAT and bookkeeping together so you reclaim what you&apos;re entitled to — and stay fully compliant.
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

      {/* Mid-page CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Want smarter VAT?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Talk to us about how we can improve your VAT reclaims and take the stress out of HMRC compliance.
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A89B8C] flex-shrink-0 mt-1" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {w}
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 text-sm leading-relaxed">
                If you want VAT that is accurate, efficient and works hand-in-hand with your bookkeeping — while making life easier with HMRC — we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
