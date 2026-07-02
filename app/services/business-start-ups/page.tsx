import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Start-Ups | Inspired Accounting",
  description:
    "Start your business the right way. Calm, tailored advice on structure, registrations and tax — based on your real circumstances — so you can focus on building, not worrying.",
};

const whatWeDo = [
  {
    title: "Business Structure Advice",
    body: "It's no longer a given that a limited company is the most tax-efficient or suitable option. Sole trader, partnership or limited company — each structure has its place. We explain the pros and cons in plain English and help you choose the route that fits how you work and where you want to go.",
  },
  {
    title: "Personal Circumstances Review",
    body: "Before recommending a structure, we carry out a fact-find and review your personal situation — income, family, other businesses, future plans — so the setup supports both your business and your wider life goals.",
  },
  {
    title: "Practical Setup & Registrations",
    body: "Once the decision is made, we handle the practicalities: company formation or registration as a sole trader or partnership, HMRC registrations (tax, VAT if appropriate, PAYE), and basic bookkeeping and banking guidance so you start off organised, not overwhelmed.",
  },
  {
    title: "Tax-Efficient Foundations",
    body: "We help you understand how you'll be taxed, what records you need to keep and what reliefs or allowances may be available, so you don't miss opportunities or run into surprises later.",
  },
  {
    title: "Ongoing Support as You Grow",
    body: "Your needs will change as the business develops. We stay alongside you to review your structure, update your setup and provide ongoing advice so your finances can evolve with your plans.",
  },
];

const ethos = [
  { title: "Calm in the Chaos", body: "We know the early stages can feel like a lot. Our role is to cut through the noise, prioritise what actually matters and give you a clear path forward." },
  { title: "Tailored, Not Template-Based", body: "No two founders or businesses are the same. We take the time to understand you, your risk appetite and your ambitions before recommending any structure or setup." },
  { title: "Clarity Over Jargon", body: "We explain your options in straightforward language, so you understand why a recommendation is being made and feel confident in your decisions." },
  { title: "Right Way, Right Reasons", body: "Our goal is simple: help you start in the right way, for the right reasons — not just follow what everyone else is doing." },
];

const whoWeWorkWith = [
  "First-time founders and side-hustlers",
  "Freelancers and consultants turning self-employment into a business",
  "Existing sole traders or partnerships considering a move to a limited company",
];

export default function BusinessStartUpsPage() {
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
            Business Start-Ups
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Start up with structure, not guesswork. Get calm, tailored advice on whether to be a sole trader, partnership or limited company — based on your real circumstances — so you can focus on building the business.
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
              Launching a business is exciting — but it can also feel daunting. Choosing the right structure, getting the registrations in place and understanding the tax implications can quickly become overwhelming, especially when you just want to focus on your idea.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              The right advice and setup from day one makes a huge difference. You get clear, practical guidance so you can build on solid foundations and concentrate on growing your business.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Starting something new?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Book a no-obligation consultation and let&apos;s make sure you start in the right way, for the right reasons.
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: calm, clear, grounded in reality</h2>
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
                If you&apos;re starting a business and want to get it right from day one — with a structure and setup that truly fits you — we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
