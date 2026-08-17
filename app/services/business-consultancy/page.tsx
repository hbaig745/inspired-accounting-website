import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Consultancy Services",
  description:
    "Practical business advice for small businesses — management accounts, cash-flow forecasting, profitability reviews and funding support, from accountants who know your numbers inside out.",
};

const whatWeDo = [
  {
    title: "Management Accounts & Reporting",
    body: "Regular management accounts — monthly or quarterly — so you can see how the business is actually performing, spot trends early, and make decisions on real figures instead of gut feel.",
  },
  {
    title: "Cash-Flow Forecasting & Budgeting",
    body: "We build forecasts and budgets around your business, so you can see what's coming, plan for tax and quiet periods, and avoid the cash-flow surprises that catch so many small businesses out.",
  },
  {
    title: "Profitability & Pricing Reviews",
    body: "Not every product, service or customer makes you money. We help you understand where your profit actually comes from, so you can price properly and focus your effort where it pays off.",
  },
  {
    title: "Business Planning & Funding Support",
    body: "Applying for a bank loan, finance or investment? We prepare the business plans, forecasts and figures lenders want to see, and help you present a case that stands up to scrutiny.",
  },
  {
    title: "A Sounding Board for Big Decisions",
    body: "Hiring, taking on premises, buying equipment, or taking on a big contract? Talk it through with someone who already knows your numbers, before you commit — not after.",
  },
];

const ethos = [
  { title: "Practical, Not Theoretical", body: "We're a firm that works with real small businesses every day — our advice is grounded in what actually works, not textbook strategy." },
  { title: "Rooted in Your Numbers", body: "Because we look after your accounts and bookkeeping, our advice is built on figures we know are accurate and complete." },
  { title: "Proportionate to Your Size", body: "Support scaled to a small business — no bloated consultancy fees or reports that gather dust, just help you can act on." },
  { title: "Clarity, Not Jargon", body: "We translate the numbers into plain English and clear options, so you can make confident decisions." },
];

const whoWeWorkWith = [
  "Small business owners who want more than year-end compliance",
  "Businesses planning to grow, hire, or invest and wanting to do it on solid numbers",
  "Owners preparing for a loan, finance or investment application",
  "Anyone who wants a clear view of what's really driving their profit",
];

export default function BusinessConsultancyPage() {
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
            Business Consultancy Services
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Accountancy that goes beyond compliance. We help small business owners understand their numbers, plan ahead and make confident decisions — a finance function and a sounding board rolled into one.
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
              Most small businesses are run on instinct and hard work — which gets you a long way, but eventually the questions get bigger. Can I afford to hire? Is this contract actually profitable? Should I invest now or wait? These are the moments where good numbers, and someone to talk them through with, make all the difference.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              That&apos;s where our consultancy support comes in. We&apos;re not a big-name management consultancy — we&apos;re your accountants, who already know your business, giving you practical, grounded advice you can act on. Whether it&apos;s a one-off decision or ongoing support, we help you run your business on facts, not guesswork.
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

      {/* Note on Inspired Accounts */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-3xl border-l-4 border-[#A89B8C] pl-6 md:pl-8">
            <h2 className="font-baskerville text-2xl text-navy mb-3">Already an Inspired Accounts client?</h2>
            <p className="text-navy/70 leading-relaxed">
              Ongoing management reporting and business advisory support are built into our{" "}
              <Link href="/services/inspired-accounts" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">Inspired Accounts</Link>{" "}
              packages — so growth support comes as standard rather than as an extra. This service is for one-off pieces of work, or for businesses who want that deeper support without the full package.
            </p>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Facing a big decision?</h2>
          <p className="text-white/75 mb-8 max-w-lg mx-auto">
            Let&apos;s talk it through. Whether it&apos;s a one-off question or ongoing support, we&apos;ll help you weigh it up on the numbers.
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: practical, grounded, proportionate</h2>
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
                If you want an accountant who does more than file your returns — one who helps you build a stronger, more profitable business — we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
