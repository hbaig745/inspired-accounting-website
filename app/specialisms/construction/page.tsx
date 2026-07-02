import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction | Inspired Accounting",
  description:
    "Specialist accounting for construction businesses — CIS, VAT on construction services, subcontractors, retentions and contract accounting handled correctly.",
};

const painPoints = [
  {
    title: "CIS Getting It Wrong",
    body: "The Construction Industry Scheme has strict rules on verification, deduction rates and monthly returns. Getting it wrong means penalties, loss of gross payment status and potential HMRC investigations. We build CIS into your processes from the start so it runs smoothly every month.",
  },
  {
    title: "VAT on Construction Services",
    body: "Domestic reverse charge, standard-rated and zero-rated work often sit side by side on the same project. Applying the wrong VAT treatment creates cash flow problems and compliance risk. We make sure your invoices and returns are correct every time.",
  },
  {
    title: "Retentions and Cash Flow",
    body: "Retentions held by clients can lock up significant cash for months or years. Combined with slow payment from main contractors, cash flow is a constant pressure. We help you track retentions accurately and plan your cash flow around realistic receipt dates.",
  },
  {
    title: "Subcontractor Management",
    body: "A mix of employed workers, self-employed subcontractors and limited company subbies creates payroll, CIS and IR35 complexity. We help you structure engagements correctly and run the associated payroll and CIS obligations without the headaches.",
  },
];

const whatWeDo = [
  {
    title: "CIS Processing and Returns",
    body: "Monthly CIS returns filed accurately and on time. Subcontractor verification, deduction calculations and statements handled as standard. Gross payment status maintained where applicable.",
  },
  {
    title: "Construction VAT",
    body: "Correct VAT treatment applied across all your work — domestic reverse charge where required, standard rate where appropriate, zero-rating for qualifying new build. Returns submitted with confidence.",
  },
  {
    title: "Contract and Project Accounting",
    body: "Bookkeeping structured around contracts — tracking income, costs and margin by project. Retention balances monitored and reported. WIP calculated correctly for your year-end accounts.",
  },
  {
    title: "Payroll and Subcontractor Management",
    body: "Payroll for employed staff run accurately and on time. CIS deductions for subcontractors calculated and statements issued. Advice on how to structure your workforce to stay compliant.",
  },
];

const ethos = [
  { title: "Sector Knowledge That Matters", body: "Construction accounting is a specialism in its own right. We understand CIS, domestic reverse charge and contract accounting — so you don't have to explain your business every time." },
  { title: "Compliance Without the Stress", body: "CIS returns, VAT submissions and payroll all run on time, every time. We build the processes so compliance is a background function, not a monthly scramble." },
  { title: "Cash Flow First", body: "We know construction cash flow is tight. Our reporting is designed around helping you see what's coming in, what's going out and where the pressure points are." },
];

const whoWeWorkWith = [
  "Main contractors and specialist subcontractors",
  "Groundworks, civils and utilities firms",
  "Fit-out, refurbishment and M&E contractors",
  "Small building firms and sole trader builders",
];

export default function ConstructionPage() {
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
            Construction
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              CIS, VAT on construction services, subcontractors and retentions — we handle the complexity so you can get on with the build.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Accounting built for construction</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">CIS, VAT and contract accounting handled correctly — so you can focus on the work, not the paperwork.</p>
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
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help construction businesses</h2>
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: sector knowledge, no shortcuts</h2>
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
