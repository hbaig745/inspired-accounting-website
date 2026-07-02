import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Services | Inspired Accounting",
  description:
    "Accounting for professional services firms — solicitors, architects, agencies and consultancies. IR35, income recognition, director remuneration and tax planning handled properly.",
};

const painPoints = [
  {
    title: "IR35 and Contractor Status",
    body: "Agencies, consultancies and project-based firms often engage contractors alongside employees. Getting IR35 status wrong — in either direction — creates significant tax risk. We help you assess engagements correctly and build compliant arrangements from the start.",
  },
  {
    title: "Income Recognition",
    body: "Retainers, project fees, milestone payments and time-based billing all have different accounting treatments. Recognising income in the wrong period distorts your profitability and can affect tax timing. We make sure your accounts reflect what you've genuinely earned.",
  },
  {
    title: "Director Remuneration Planning",
    body: "Most professional services firms are owner-managed, with directors taking salary and dividends. Getting the mix right — taking account of employment allowances, pension contributions and personal tax — is worth real money. We review this every year.",
  },
  {
    title: "Growth Without Losing Control",
    body: "Taking on more clients, hiring staff and investing in the business creates financial complexity that can quickly outgrow a basic accounting setup. We build reporting and planning processes that scale with you.",
  },
];

const whatWeDo = [
  {
    title: "Director Remuneration and Tax Planning",
    body: "Annual review of salary, dividends, pension contributions and employment allowances — optimised for your personal and business tax position. Structured, documented and delivered before each tax year.",
  },
  {
    title: "IR35 and Contractor Advice",
    body: "Assessment of contractor engagements, advice on status determinations and help structuring arrangements to manage risk. Ongoing support as engagements change or the rules evolve.",
  },
  {
    title: "Management Accounts and Reporting",
    body: "Monthly or quarterly management accounts showing revenue, margin and overhead — by team, service line or client if needed. The information you need to manage the business, not just report on it.",
  },
  {
    title: "Year-End Accounts and Corporation Tax",
    body: "Statutory accounts and corporation tax return prepared from well-kept records — with a review of reliefs, timing differences and planning opportunities before filing.",
  },
];

const ethos = [
  { title: "We Think Like Business Advisers", body: "Professional services owners are used to giving advice, not just receiving it. We engage with you at that level — bringing insight to your numbers, not just processing them." },
  { title: "Planning Before the Year End", body: "The best tax planning happens before the year closes. We build review points into the calendar so decisions are made with time to act, not after the fact." },
  { title: "Confidential and Discreet", body: "Professional services businesses often handle sensitive client relationships and financial structures. We treat your information with the same discretion you apply to your own clients." },
];

const whoWeWorkWith = [
  "Marketing, PR and creative agencies",
  "Recruitment and staffing firms",
  "Architects and design practices",
  "Management consultants and business advisers",
  "Legal and financial services firms",
];

export default function ProfessionalServicesPage() {
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
            Professional Services
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              IR35, income recognition and director remuneration — accounting for professional services firms that need more than a basic compliance service.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">An accountant who thinks like you do</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">Insight, planning and clear numbers — not just a year-end accounts service.</p>
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
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help professional services firms</h2>
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: advisory, not just compliance</h2>
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
