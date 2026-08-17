import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Amnesties: How to Come Clean with HMRC",
  description:
    "A clear, confidential route to disclose undeclared tax voluntarily — Let Property Campaign, Worldwide Disclosure Facility and more — usually with far lower penalties than if HMRC finds it first.",
};

const routes = [
  {
    title: "Let Property Campaign",
    tag: "Undeclared rental income",
    body: "For landlords who haven't declared income from letting out property, in the UK or abroad. This covers anything from a single spare room to a full portfolio, and includes traditional residential lets as well as less obvious income such as grazing rights or renting out a driveway.",
  },
  {
    title: "Worldwide Disclosure Facility",
    tag: "Offshore income, gains or assets",
    body: "For anything connected to money held or earned outside the UK: foreign bank interest, overseas investment income, offshore gains, and similar. HMRC now receives data on offshore accounts automatically from tax authorities around the world, so this is an area where voluntary disclosure carries particular weight.",
  },
  {
    title: "Digital Disclosure Service",
    tag: "Everything else",
    body: "If your situation doesn't fit a specific campaign — general undeclared income, gains, or errors that don't relate to property or offshore matters — the Digital Disclosure Service is the general-purpose route for bringing your tax affairs up to date voluntarily.",
  },
  {
    title: "Contractual Disclosure Facility",
    tag: "Where deliberate wrongdoing is suspected",
    body: "This is a different and more serious route, used where HMRC suspects deliberate tax fraud rather than an oversight. It involves a formal admission and a structured investigation process. If this might apply to your situation, it's important to take advice before contacting HMRC directly, as how the first conversation is handled matters.",
  },
];

const whyVoluntary = [
  { title: "Lower penalties", body: "An unprompted disclosure — one HMRC didn't have to chase you for — attracts significantly lower penalties than one made after HMRC has already opened an enquiry." },
  { title: "You control the pace", body: "A voluntary disclosure lets you gather accurate figures and present a complete picture, rather than reacting to HMRC's timetable." },
  { title: "HMRC's data reach is wide", body: "Between the Land Registry, international data-sharing agreements, and information from banks and property platforms, HMRC's ability to spot undeclared income has grown substantially — waiting rarely means going unnoticed." },
  { title: "Tax and interest are due either way", body: "What changes with a voluntary disclosure is the penalty and the tone of the process — not whether the underlying tax is owed." },
];

const process = [
  "A confidential review of your position, so we know exactly what's been missed and over how many years.",
  "Working out the tax, interest and likely penalty position, so there are no surprises.",
  "Submitting the disclosure through the correct facility, with figures HMRC can rely on.",
  "Agreeing payment with HMRC — in full, or through a time-to-pay arrangement where that's appropriate.",
];

export default function TaxAmnestiesPage() {
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
          <h1 className="font-baskerville text-4xl md:text-5xl xl:text-6xl text-white leading-tight tracking-tight text-balance">
            Tax Amnesties: How to Come Clean with HMRC
          </h1>
          <div className="mt-6 flex flex-col md:flex-row md:items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              A plain-English guide to putting undisclosed tax right, on your terms — a clear, confidential route to disclose tax you should have declared but haven&apos;t.
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
              Maybe it&apos;s rental income that slipped through the net, some overseas savings you never mentioned, or a few years where your paperwork simply got away from you. Whatever the reason, HMRC has formal routes for putting it right voluntarily — usually with far lower penalties than if they catch up with you first.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              This isn&apos;t about judgement. It&apos;s about giving you the facts, plainly, so you can make an informed decision and take control of the situation before it takes control of you.
            </p>
          </div>
          <div className="max-w-3xl mt-8 border-l-4 border-[#A89B8C] pl-6 md:pl-8">
            <h2 className="font-baskerville text-lg text-navy mb-2">A note on the word &ldquo;amnesty&rdquo;</h2>
            <p className="text-navy/60 text-sm leading-relaxed">
              HMRC doesn&apos;t officially use this term — it calls these routes &ldquo;disclosure facilities&rdquo; or &ldquo;campaigns&rdquo;. But the effect is the same: come forward voluntarily and you&apos;re treated far more leniently than if HMRC finds the problem itself. The tax and interest are always due; what a disclosure facility changes is the penalty, and whether the conversation happens on your terms or theirs.
            </p>
          </div>
        </div>
      </section>

      {/* Routes to disclosure */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-3">The current routes to disclosure</h2>
          <p className="text-navy/60 leading-relaxed max-w-2xl mb-10">
            Which facility applies depends on what kind of income or gain wasn&apos;t declared. Here are the main ones currently open.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((r) => (
              <div key={r.title} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe block mb-3">{r.tag}</span>
                <h3 className="font-baskerville text-xl text-navy mb-4 leading-snug">{r.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why voluntary matters */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">Why coming forward voluntarily matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {whyVoluntary.map((w) => (
              <div key={w.title} className="border-l-4 border-[#A89B8C] pl-6">
                <h3 className="font-baskerville text-lg text-navy mb-2">{w.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the process involves */}
      <section className="bg-[rgb(238,234,229)] py-14 md:py-20">
        <div className="container-max section-padding">
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-3">What the process involves</h2>
          <p className="text-navy/60 leading-relaxed max-w-2xl mb-10">Every case is different, but the shape is usually the same:</p>
          <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)] max-w-3xl">
            {process.map((p, i) => (
              <div key={p} className="py-6 flex items-start gap-6">
                <span className="font-baskerville text-[#A89B8C] text-sm mt-0.5">0{i + 1}</span>
                <p className="text-navy/70 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help + case study */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="container-max section-padding">
          <div className="max-w-2xl">
            <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-5">How we help</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              We&apos;ve supported clients through exactly this kind of disclosure — including a property investor whose situation had gone undisclosed for over a decade, resolved through a full voluntary disclosure to HMRC.{" "}
              <Link href="/case-studies/property-disclosure" className="text-steel underline underline-offset-2 hover:text-navy transition-colors">You can read that case study here</Link>.
              {" "}Every case we handle is treated in the strictest confidence.
            </p>
            <p className="text-navy/70 leading-relaxed">
              If you think you might have something to disclose, the best first step is a quiet conversation — not a decision. Get in touch and we&apos;ll talk through where you stand, with no judgement and no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A89B8C] py-16">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Something to put right?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Start with a quiet, confidential conversation. No judgement, no obligation — just a clear view of where you stand.
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
