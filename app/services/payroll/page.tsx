import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payroll Services",
  description:
    "Accurate, on-time payroll with secure digital payslips and an employee app for HR and pay information. We take payroll off your plate completely.",
};

const whatWeDo = [
  {
    title: "End-to-End Payroll Processing",
    body: "Accurate, on-time payroll — weekly, fortnightly or monthly — including tax, National Insurance, student loans, pensions and all statutory deductions.",
  },
  {
    title: "Secure Digital Payslips & Payroll Software",
    body: "Modern payroll software with digital payslips your staff can access securely online or via an app. No more lost payslips or sensitive information sitting in inboxes.",
  },
  {
    title: "HR & Payroll Info in One App",
    body: "Employees can view payslips, P60s, holiday balances and key HR information directly in the app, reducing admin for you and removing the need to send confidential documents over email.",
  },
  {
    title: "Advice on Salary Levels & Minimum Wage",
    body: "Guidance on appropriate salary levels and full compliance with National Minimum Wage and National Living Wage rules, including apprentices and younger workers.",
  },
  {
    title: "Benefits & Deductions",
    body: "Calculation and processing of bonuses, commissions, benefits in kind, statutory pay (sick, maternity, paternity), pension contributions and all the usual payroll items.",
  },
];

const ethos = [
  { title: "Personal Service", body: "Work with a named contact who understands your business, your team and your payroll cycles — not a generic helpdesk." },
  { title: "Clarity & Compliance", body: "Receive clear payroll reports and proactive updates on legislation, so you can pay staff correctly and confidently." },
  { title: "Security by Design", body: "By moving payslips and HR information into a secure app, employee data stays protected and the risks associated with email are significantly reduced." },
  { title: "Support at Any Stage", body: "Whether setting up payroll for the first time, moving from in-house processing or upgrading from a basic provider, we can step in and get you running smoothly." },
];

const whoWeWorkWith = [
  "Small and medium-sized businesses",
  "Growing teams needing more robust payroll support",
  "Employers wanting to modernise and digitise HR and payroll processes",
];

export default function PayrollPage() {
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
            Payroll Services
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Payroll that pays off for everyone. Accurate, compliant payroll with secure digital payslips, an employee app for HR and pay information, and clear advice on salary levels, minimum wage and benefits.
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
              Payroll should be simple, accurate and secure — for you and for your staff. Our team takes care of everything from calculating pay and benefits to delivering digital payslips and HR access via an easy-to-use app, so you can focus on running your business.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Ready to simplify your payroll?</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">
            Book a no-obligation payroll consultation. We&apos;ll review your current setup and put in place a secure, efficient service that grows with your business.
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: personal, accurate, secure</h2>
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
                If you want payroll that is accurate, compliant and easy for your staff to use — backed by personal, practical advice — we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
