import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering & Consultancy | Inspired Accounting",
  description:
    "Precision accounting for engineering and consultancy firms. Project-focused bookkeeping, CIS, VAT and management reporting as exact as your technical outputs.",
};

const painPoints = [
  {
    title: "Project Work, Messy Numbers",
    body: "Long-running jobs, variations, retentions and milestones make it hard to see what you have really earned and what it has really cost. We put structure around your project accounting so you can see, at a glance, which contracts are on track and which need attention.",
  },
  {
    title: "Cash Flow Strain on Long Contracts",
    body: "You might be profitable on paper but constantly waiting on invoices, stage payments or sign-offs. We help you build cash flow around how your contracts actually pay out, so you can plan ahead instead of firefighting.",
  },
  {
    title: "CIS, VAT and Payroll Complexity",
    body: "Many engineering and consultancy firms sit close to construction — which means CIS, complex VAT rules and a mix of employees and subcontractors. We design processes so CIS, VAT and payroll are handled correctly as standard.",
  },
  {
    title: "Innovation Without Clarity on Tax",
    body: "You may be pushing boundaries with new methods or problem-solving — but not sure how that translates into R&D claims or wider tax planning. We help you identify where your work may qualify for reliefs and build those conversations into your regular reviews.",
  },
];

const whatWeDo = [
  {
    title: "Project-Focused Bookkeeping & Reporting",
    body: "We build your bookkeeping around projects and contracts — with clear tracking of income, costs and margins by job or client, sensible rules for work in progress, and regular reporting that mirrors how you actually run projects.",
  },
  {
    title: "Integrated Payroll, VAT and CIS",
    body: "Payroll run accurately and on time, aligned with how your teams and subcontractors are engaged. VAT set up and processed to fit your projects and cash flow. CIS handled properly where you are in scope.",
  },
  {
    title: "Management Information You Can Trust",
    body: "Dashboards showing profit, cash and key metrics by project, team or service line. Simple visuals you can share with directors, investors or lenders — as precise and usable as your own technical outputs.",
  },
  {
    title: "Joined-Up Tax Planning",
    body: "VAT and scheme choices that support your contracts. Salary and dividend planning for directors. Corporation tax planning that takes account of equipment, pensions and investment in the business.",
  },
];

const ethos = [
  { title: "Precision in the Detail", body: "Engineers care about millimetres and tolerances; we care about the same level of accuracy in your accounts. We apply consistent, thought-through methods so your figures stand up to scrutiny." },
  { title: "Clear Guidance While You Build", body: "We explain what the numbers mean, what decisions they support, and what needs to happen next — in straightforward language your whole leadership team can understand." },
  { title: "A Long-Term Relationship", body: "We stay close to your business through regular check-ins, management reporting and planning sessions, so your finance function grows with your projects and ambitions." },
];

const whoWeWorkWith = [
  "Engineering consultancies and design practices",
  "Specialist contractors and technical project firms",
  "Multi-disciplinary consultancies with project-led work",
];

export default function EngineeringConsultancyPage() {
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
            Engineering & Consultancy
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Precision accounting for precision minds. We take the same structured, exact approach to your numbers that you take to your designs and calculations.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Engineering-level precision for your numbers</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">Project-focused accounting that turns complex contracts into clear decisions.</p>
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
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help engineering & consultancy firms</h2>
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: precision, clarity, partnership</h2>
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
