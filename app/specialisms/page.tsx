import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialisms | Inspired Accounting",
  description:
    "Sector-specific accounting expertise from Inspired Accounting — deep knowledge across engineering, e-commerce, construction, hospitality, professional services and property.",
};

const specialisms = [
  {
    id: "engineering-consultancy",
    href: "/specialisms/engineering-consultancy",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: "Engineering & Consultancy",
    description:
      "Project-based work demands project-based accounting. We bring precision to your numbers — tracking margins by contract, handling CIS and complex VAT, and giving you management information as exact as your own technical outputs.",
  },
  {
    id: "ecommerce",
    href: "/specialisms/ecommerce",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: "E-Commerce",
    description:
      "Selling online comes with its own accounting complexity — multiple platforms, marketplaces, inventory, cross-border VAT and payment processors all feeding into your numbers. We make sense of it all so you can focus on growing sales.",
  },
  {
    id: "construction",
    href: "/specialisms/construction",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-5h6v5" />
      </svg>
    ),
    title: "Construction",
    description:
      "CIS, VAT on construction services, subcontractors, retentions and long-running contracts make construction one of the most complex sectors for accounting. We've built processes specifically around how construction businesses operate.",
  },
  {
    id: "hospitality",
    href: "/specialisms/hospitality",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Hospitality & Restaurants",
    description:
      "Tight margins, high staff turnover, tips, split VAT rates and seasonal cash flow — hospitality businesses need an accountant who understands the sector. We help you keep costs visible, stay compliant and protect your margins.",
  },
  {
    id: "professional-services",
    href: "/specialisms/professional-services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Professional Services",
    description:
      "Solicitors, architects, marketing agencies, recruiters and other professional firms often have complex income recognition, IR35 exposure and director remuneration decisions to navigate. We provide the clarity and structure to get these right.",
  },
  {
    id: "property",
    href: "/specialisms/property",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Property & Real Estate",
    description:
      "Whether you're a landlord with a handful of properties or a portfolio investor, property has its own tax rules around income, CGT, SDLT and mortgage interest relief. We help you structure ownership and plan tax efficiently at every stage.",
  },
];

const sectionBgs = [
  "bg-[#FAF8F5]",
  "bg-[rgb(238,234,229)]",
  "bg-[#FAF8F5]",
  "bg-[rgb(238,234,229)]",
  "bg-[#FAF8F5]",
  "bg-[rgb(238,234,229)]",
];

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
            Deep, sector-specific expertise for businesses where generic accounting simply isn&apos;t enough.
          </p>
        </div>
      </section>

      {/* Specialism cards */}
      {specialisms.map((s, i) => (
        <section key={s.id} id={s.id} className={`${sectionBgs[i]} py-14 md:py-20`}>
          <Link href={s.href} className="block container-max section-padding group cursor-pointer">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
                    {s.icon}
                  </div>
                  <div>
                    <h2 className="font-baskerville text-2xl md:text-3xl text-navy leading-snug">
                      {s.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-navy/60 leading-relaxed mb-6">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-steel text-sm font-medium group-hover:text-navy transition-colors duration-200">
                  Read more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Work in one of these sectors?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Talk to us about how we can bring sector-specific expertise to your accounting — no jargon, no pressure.
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
