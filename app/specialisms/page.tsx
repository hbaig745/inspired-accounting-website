import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialisms",
  description:
    "Sector-specific accounting expertise from Inspired Accounting — including precision accounting for engineering and consultancy firms.",
};

const specialisms = [
  {
    id: "engineering",
    label: "Engineering & Consultancy",
    headline: "Precision Accounting for Precision Minds",
    intro:
      "Engineering and consultancy businesses live in a world of specifications, tolerances and exact outcomes. Your work has to be right — not roughly there. Your accounting should be the same. We take the same precise, structured approach to your numbers that you take to your designs and calculations, so you can rely on them when you make decisions.",
    painPoints: [
      {
        title: "Project Work, Messy Numbers",
        body: "Long-running jobs, variations, retentions and milestones make it hard to see what you have really earned and what it has really cost. Spreadsheets multiply, WIP gets guessed, and profitability by project becomes unclear. We put structure around your project accounting so you can see, at a glance, which contracts are on track and which need attention.",
      },
      {
        title: "Cash Flow Strain on Long Contracts",
        body: "You might be profitable on paper but constantly waiting on invoices, stage payments or sign-offs. Add VAT timings and PAYE to the mix and cash flow quickly becomes a headache. We help you build cash flow around how your contracts actually pay out, so you can plan ahead instead of firefighting.",
      },
      {
        title: "CIS, VAT and Payroll Complexity",
        body: "Many engineering and consultancy firms sit close to construction — which means CIS, complex VAT rules and a mix of employees and subcontractors. Getting it wrong risks penalties, loss of CIS gross status or HMRC attention you could do without. We design processes so CIS, VAT and payroll are handled correctly as standard, rather than patched together at the year-end.",
      },
      {
        title: "Innovation Without Clarity on Tax",
        body: "You may be pushing boundaries with new methods, materials or problem-solving — but not sure how that translates into R&D claims or wider tax planning. Opportunities get missed because nobody has pulled the information together in a structured way. We help you identify where your work may qualify for reliefs and build those conversations into your regular reviews.",
      },
    ],
    services: [
      {
        title: "Project-Focused Bookkeeping & Reporting",
        body: "We build your bookkeeping around projects and contracts, not just nominal codes — with clear tracking of income, costs and margins by job or client, sensible rules for work in progress, and regular reporting that mirrors how you actually run projects.",
      },
      {
        title: "Integrated Payroll, VAT and CIS",
        body: "Payroll run accurately and on time, aligned with how your teams and subcontractors are engaged. VAT set up and processed to fit your projects and cash flow. CIS handled properly where you are in scope, reducing the risk of deductions or compliance issues.",
      },
      {
        title: "Management Information Engineers Can Trust",
        body: "Dashboards showing profit, cash and key metrics by project, team or service line. Trends over time so you can see which types of work are really paying off. Simple visuals you can share with directors, investors or lenders — as precise and usable as your own technical outputs.",
      },
      {
        title: "Joined-Up Tax Planning",
        body: "VAT and scheme choices that support your contracts and cash flow. Salary and dividend planning for directors, aligned with payroll and employment allowances. Corporation tax planning that takes account of equipment, pensions and investment in the business. Extraction strategies that reflect your personal circumstances.",
      },
    ],
    ethos: [
      {
        title: "Precision in the Detail",
        body: "Engineers care about millimetres and tolerances; we care about the same level of accuracy in your accounts. From how invoices are coded to how contracts are reported, we apply consistent, thought-through methods so your figures stand up to scrutiny.",
      },
      {
        title: "Clear Guidance While You Build",
        body: "You should not have to translate accounting jargon while you are trying to deliver complex projects. We explain what the numbers mean, what decisions they support, and what needs to happen next — in straightforward language your whole leadership team can understand.",
      },
      {
        title: "A Long-Term Relationship",
        body: "We are not just here for a year-end set of accounts. We stay close to your business through regular check-ins, management reporting and planning sessions, so your finance function grows with your projects and ambitions.",
      },
    ],
    whoWeWorkWith: [
      "Engineering consultancies and design practices",
      "Specialist contractors and technical project firms",
      "Multi-disciplinary consultancies with project-led work",
    ],
  },
];

const sectionBgs = ["bg-[#FAF8F5]", "bg-[rgb(238,234,229)]"];

export default function SpecialismsPage() {
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
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            Sector expertise
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            Our specialisms
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-xl leading-relaxed">
            Deep, sector-specific expertise for businesses where generic accounting
            simply isn&apos;t enough.
          </p>
        </div>
      </section>

      {/* Specialisms */}
      {specialisms.map((s, si) => (
        <div key={s.id} id={s.id}>

          {/* Intro */}
          <section className={`${sectionBgs[si % 2]} py-14 md:py-20`}>
            <div className="container-max section-padding">
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
                {s.label}
              </span>
              <h2 className="mt-3 font-baskerville text-3xl md:text-4xl xl:text-5xl text-navy leading-tight tracking-tight max-w-2xl">
                {s.headline}
              </h2>
              <p className="mt-6 text-navy/60 leading-relaxed max-w-2xl text-lg">
                {s.intro}
              </p>
            </div>
          </section>

          {/* Pain points */}
          <section className={`${sectionBgs[(si + 1) % 2]} py-14 md:py-20`}>
            <div className="container-max section-padding">
              <h3 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">
                The pain points we help you solve
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {s.painPoints.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8"
                  >
                    <h4 className="font-baskerville text-lg text-navy mb-3">{p.title}</h4>
                    <p className="text-navy/60 text-sm leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How we help */}
          <section className={`${sectionBgs[si % 2]} py-14 md:py-20`}>
            <div className="container-max section-padding">
              <h3 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">
                How we help {s.label.toLowerCase()} firms
              </h3>
              <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
                {s.services.map((item, i) => (
                  <div key={item.title} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                    <div className="lg:col-span-1">
                      <span className="font-baskerville text-[#A89B8C] text-sm">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="lg:col-span-4">
                      <h4 className="font-baskerville text-xl text-navy leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="text-navy/60 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hook */}
          <section className={`${sectionBgs[si % 2]} py-10 md:py-14 border-t border-[rgba(168,155,140,0.25)]`}>
            <div className="container-max section-padding">
              <p className="font-baskerville text-2xl md:text-3xl text-navy leading-snug max-w-2xl">
                Engineering-level precision for your numbers. Project-focused, precision accounting — turning complex contracts into clear decisions while you concentrate on the work itself.
              </p>
            </div>
          </section>

          {/* Ethos + Who we work with */}
          <section className={`${sectionBgs[(si + 1) % 2]} py-14 md:py-20`}>
            <div className="container-max section-padding">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-6">
                  <h3 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">
                    Our ethos: precision, clarity, partnership
                  </h3>
                  <div className="space-y-6">
                    {s.ethos.map((e) => (
                      <div key={e.title} className="border-l-4 border-[#A89B8C] pl-6">
                        <h4 className="font-baskerville text-lg text-navy mb-2">{e.title}</h4>
                        <p className="text-navy/60 text-sm leading-relaxed">{e.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <h3 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">
                    Who we work with
                  </h3>
                  <ul className="space-y-3">
                    {s.whoWeWorkWith.map((w) => (
                      <li key={w} className="flex items-start gap-3 text-navy/65">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A89B8C] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Work in one of these sectors?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Talk to us about how we can bring sector-specific expertise to your
            accounting — no jargon, no pressure.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-taupe text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#968a7c] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Get in touch
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
