import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitality & Restaurants | Inspired Accounting",
  description:
    "Accounting for hospitality and restaurant businesses — tight margins, staff costs, tips, split VAT rates and seasonal cash flow managed with clarity.",
};

const painPoints = [
  {
    title: "Tight Margins Under Pressure",
    body: "Food costs, labour, rent and rates leave hospitality businesses with little room for error. Without clear visibility of your actual margins — by day, week or cover — it's difficult to know where the money is going. We give you the reporting to see exactly where you stand.",
  },
  {
    title: "Staff Costs and High Turnover",
    body: "Rotas, zero-hours contracts, tips, tronc schemes and high staff turnover make payroll one of the most complex and time-consuming parts of running a hospitality business. We take it off your plate and keep it accurate.",
  },
  {
    title: "Split VAT Rates",
    body: "Hot food, cold food, eat-in, takeaway, alcohol — VAT rates can vary across the same menu. Getting it wrong means either overpaying VAT or exposing yourself to HMRC assessments. We set up your VAT correctly from the start.",
  },
  {
    title: "Seasonal Cash Flow",
    body: "Summer peaks, Christmas trading and quieter months mean cash flow is rarely predictable. Planning around these cycles — especially with fixed costs like rent and rates — requires a clear forward view. We help you build that picture.",
  },
];

const whatWeDo = [
  {
    title: "Management Accounts and Margin Reporting",
    body: "Weekly or monthly reporting showing revenue, gross margin and key costs — by site, day-part or period. The numbers you need to make decisions, in a format that's quick to read.",
  },
  {
    title: "Payroll, Tips and Tronc",
    body: "End-to-end payroll for all your staff, including tronc scheme administration, holiday pay calculations and statutory payments. Handled accurately so your team is always paid on time.",
  },
  {
    title: "VAT for Hospitality",
    body: "Correct VAT treatment across your full menu and service offering. Returns submitted on time. Advice on VAT scheme options to improve cash flow where possible.",
  },
  {
    title: "Cash Flow Planning",
    body: "Forward cash flow forecasts built around your trading patterns, lease commitments and seasonal costs — so you can plan for quiet periods and invest in busier ones with confidence.",
  },
];

const ethos = [
  { title: "We Understand the Sector", body: "Hospitality runs differently to most businesses. We understand the hours, the margins and the pressures — and we structure our service around how you actually operate." },
  { title: "Fast, Reliable Reporting", body: "You need numbers quickly. Our reporting is designed to be timely and easy to read, so you can act on it rather than file it away." },
  { title: "Support Through Every Season", body: "Whether you're preparing for your busiest period or navigating a quiet patch, we're available to talk through the numbers and help you make the right calls." },
];

const whoWeWorkWith = [
  "Independent restaurants and cafés",
  "Pub and bar operators",
  "Hotels and accommodation businesses",
  "Catering and events companies",
];

export default function HospitalityPage() {
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
            Hospitality & Restaurants
          </h1>
          <div className="mt-6 flex items-end gap-6">
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Tight margins, complex payroll and seasonal cash flow — we help hospitality businesses keep costs visible and protect what they earn.
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
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">Accounting that keeps up with your kitchen</h2>
          <p className="text-white/75 mb-8 max-w-md mx-auto">Fast, reliable numbers so you can focus on the front of house — not the back office.</p>
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
          <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-10">How we help hospitality businesses</h2>
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
              <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-8">Our ethos: fast, practical, sector-aware</h2>
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
