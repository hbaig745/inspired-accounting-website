import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce | Inspired Accounting",
  description:
    "Accounting for e-commerce businesses — multiple platforms, marketplace VAT, inventory and payment processors all handled so you can focus on growing sales.",
};

const painPoints = [
  {
    title: "Multiple Platforms, Fragmented Data",
    body: "Shopify, Amazon, eBay, Etsy — each platform has its own reporting, settlement timings and fee structures. Pulling it all together into a coherent set of accounts is time-consuming and error-prone. We build processes that consolidate your sales data cleanly, so your accounts reflect what you actually earned.",
  },
  {
    title: "Cross-Border VAT Complexity",
    body: "Selling into the EU, US or beyond brings VAT and sales tax obligations that are easy to get wrong. OSS, IOSS, distance selling thresholds and marketplace facilitator rules all need careful handling. We keep you compliant without letting international VAT become a barrier to growth.",
  },
  {
    title: "Inventory and Cost of Goods",
    body: "Knowing your true margin means tracking stock accurately — including landed costs, storage fees, returns and write-offs. Without this, profitability is guesswork. We help you set up inventory accounting that gives you real margin visibility by product or channel.",
  },
  {
    title: "Cash Flow and Payment Timing",
    body: "Payment processors hold funds, payouts are delayed and platform fees are deducted at source. Add seasonal stock purchases and your cash position can look very different to your sales figures. We help you build a cash flow picture that accounts for how e-commerce actually pays out.",
  },
];

const whatWeDo = [
  {
    title: "Multi-Platform Bookkeeping",
    body: "We integrate your sales channels, payment processors and fulfilment data into a single clean bookkeeping system — so your accounts are accurate, up to date and ready for VAT, year-end and management reporting.",
  },
  {
    title: "VAT and Cross-Border Compliance",
    body: "UK VAT returns, OSS/IOSS registration and overseas sales tax compliance handled correctly. We monitor your thresholds, manage registrations and make sure you're not exposed to penalties from sales you didn't realise were taxable.",
  },
  {
    title: "Margin and Inventory Reporting",
    body: "Regular reporting on gross margin by product, channel and period — so you can see which lines are actually profitable and make buying and pricing decisions with confidence.",
  },
  {
    title: "Tax Planning for Growth",
    body: "Salary and dividend planning for founders, corporation tax efficient structuring as you scale, and advice on the tax implications of entering new markets or channels.",
  },
];

const ethos = [
  { title: "Built Around Your Channels", body: "We don't force e-commerce businesses into generic accounting processes. Your setup is built around how your platforms work, how you buy stock and how you get paid." },
  { title: "Scalable as You Grow", body: "Whether you're at £100k or £5m in sales, we scale the service to match — adding complexity only when it's needed, and always keeping reporting clear and actionable." },
  { title: "Proactive on Compliance", body: "VAT thresholds, marketplace rules and cross-border obligations change regularly. We stay on top of these so you don't have to, flagging anything that affects you before it becomes a problem." },
];

const whoWeWorkWith = [
  "Direct-to-consumer brands selling via their own website",
  "Marketplace sellers on Amazon, eBay or Etsy",
  "Multi-channel retailers combining online and physical sales",
  "Dropshippers and print-on-demand businesses",
];

export default function EcommercePage() {
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
            E-Commerce
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Selling online is complex. Multiple platforms, marketplace VAT and fragmented data — we make sense of it all so you can focus on growing sales.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Clear numbers behind every sale</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">Let us handle the accounting complexity so you can concentrate on what you sell.</p>
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
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help e-commerce businesses</h2>
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: built for how you sell</h2>
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
