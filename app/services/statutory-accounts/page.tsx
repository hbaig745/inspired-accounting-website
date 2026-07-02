import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Statutory Accounts | Inspired Accounting",
  description:
    "Professional statutory accounts for limited companies at any stage — clear, compliant and backed by personal advice on tax, structure and process improvement.",
};

const whatWeDo = [
  {
    title: "Statutory Accounts Preparation",
    body: "We prepare full statutory accounts tailored to your company's size and requirements, ready for filing with Companies House and for use with HMRC and your stakeholders.",
  },
  {
    title: "From 'Messy' to Meaningful",
    body: "Whether your records are up to date, part-done, or in a bit of a mess, we meet you where you are. We clean, organise and structure your data so that your accounts are reliable and ready on time.",
  },
  {
    title: "Year-on-Year Improvement",
    body: "Each year we review your accounts with you, highlighting what worked, what didn't, and how to improve your bookkeeping and internal processes so that preparing next year's accounts becomes smoother and faster.",
  },
  {
    title: "Tax-Focused Advice",
    body: "We don't just present the numbers — we explain what they mean for your corporation tax, dividends, and personal tax position, and suggest practical ways to structure things more efficiently.",
  },
  {
    title: "Business & Setup Consultations",
    body: "Thinking of changing your structure, adding shareholders, or starting a new venture? We provide one-to-one consultations to help you choose the right setup and understand the implications before you commit.",
  },
];

const ethos = [
  {
    title: "Personal Service",
    body: "You work with a dedicated accountant who gets to know you and your business, not a call centre. We adapt how we communicate — calls, video, email — to suit how you like to work.",
  },
  {
    title: "Clarity Over Jargon",
    body: "We explain your statutory accounts in plain English, so you understand your profit, cash position, and tax exposure — and can make confident decisions.",
  },
  {
    title: "Support at Any Stage",
    body: "Whether you are behind on filings, newly incorporated, or well-established and looking to upgrade your accountant, we can step in at any point and bring your accounts up to standard.",
  },
  {
    title: "Forward-Looking, Not Just Historic",
    body: "Yes, statutory accounts are a legal requirement — but they are also a powerful management tool. We help you use them to plan, budget and grow, not just to tick the box.",
  },
];

const whoWeWorkWith = [
  "Owner-managed limited companies",
  "Growing SMEs needing more proactive support",
  "Start-ups wanting to set things up correctly from day one",
  "Businesses looking to move from basic bookkeeping to a more strategic accounting partner",
];

export default function StatutoryAccountsPage() {
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
            Statutory Accounts
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Statutory accounts that do more than tick a box. We turn your numbers — from any starting point — into clear, compliant accounts backed by personal advice on tax, structure and better processes year after year.
            </p>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-white/80 text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200">
              Get in touch
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy">Who we work with</h2>
              <p className="mt-4 text-navy/60 leading-relaxed">
                If you want statutory accounts that are accurate, on time and genuinely useful — backed by ongoing advice and personal support — we&apos;d love to work with you.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
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

      {/* Mid-page CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Ready to get started?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Book a no-obligation consultation. We&apos;ll review where you are now and how we can bring your accounts up to the level your business deserves.
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

      {/* Ethos */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">Our ethos: personal, practical, inspired</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ethos.map((e) => (
              <div key={e.title} className="border-l-4 border-[#A89B8C] pl-6">
                <h3 className="font-baskerville text-lg text-navy mb-2">{e.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
