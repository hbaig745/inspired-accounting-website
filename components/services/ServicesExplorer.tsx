"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Service = {
  id: string;
  href: string;
  flagship?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
};

/**
 * Extra searchable terms per service, drawn from the full detail page content
 * (not just the card). This lets a search for e.g. "MTD", "COP9", "Business
 * Asset Disposal Relief" or "landlords" surface the right service even when the
 * word doesn't appear on the listing card itself.
 */
const keywords: Record<string, string> = {
  "inspired-accounts":
    "flagship all inclusive fixed fee financial director directorship bookkeeping payroll vat statutory accounts corporation tax self assessment dext xero dashboards management reporting growth advisory packages pricing tiers one team compliance",
  "statutory-accounts":
    "limited company companies house hmrc year end annual accounts directors lenders messy records dividends corporation tax shareholders filing",
  "self-assessment":
    "tax return property owners cis subcontractors sub-contractors directors investors registration hmrc filing dividends rental income allowances deadline january",
  startup:
    "sole trader partnership limited company formation company formation hmrc registration paye vat new business structure allowances reliefs banking",
  bookkeeping:
    "xero dext reconciliation bank card supplier vat records making tax digital mtd management figures receipts invoices spreadsheets shoebox digital",
  "business-consultancy":
    "management accounts cash flow forecasting budgeting profitability pricing business plan planning funding loan finance investment kpi decisions growth advisory sounding board",
  "accounting-for-group-structures":
    "consolidated accounts holding company subsidiary parent companies act 2006 intercompany director loans management charges sideways group small group exemption dext xero multi entity",
  "property-portfolio-accounting":
    "landlords property investors making tax digital mtd renters rights act cloud software portfolio reporting buy to let limited company capital gains spreadsheets rental",
  "company-restructuring":
    "structuring restructuring holding company incorporation sole trader limited company group structure surplus profit retained profit succession sale investment property partner",
  vat:
    "vat registration scheme selection returns submissions reclaim bookkeeping digital hmrc enquiries reconciliation making tax digital flat rate",
  payroll:
    "payroll payslips employee app p60 paye national insurance minimum wage living wage bonuses statutory pay pension weekly fortnightly monthly hr",
  "capital-gains-tax":
    "cgt capital gains property buy to let second home 60 day return residential disposal reliefs completion hmrc self assessment landlords inherited",
  "corporation-tax":
    "ct600 computation statutory accounts capital allowances annual investment allowance aia taxable profit accounting profit disallowable hmrc submission deadlines",
  "tax-planning":
    "corporation tax vat structuring profit extraction salary dividends pension inheritance tax iht capital gains cgt trusts estate probate hmrc disclosure non dom domicile residency self assessment r&d research development",
  "capital-gains-tax-other-assets":
    "cgt capital gains shares investments business assets possessions jewellery art antiques isa pension annual exempt amount business asset disposal relief autumn budget",
  "tax-amnesties":
    "disclosure hmrc let property campaign worldwide disclosure facility digital disclosure service contractual disclosure cop9 offshore undeclared rental income voluntary penalties amnesty come clean",
  "tax-investigations":
    "hmrc enquiry investigation self assessment corporation tax vat inspection paye cop8 cop9 aspect random specialist tax advisor letter",
};

const sectionBg = (i: number) =>
  i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-[rgb(238,234,229)]";

function searchableText(service: Service) {
  return `${service.title} ${service.description} ${service.items.join(" ")} ${
    keywords[service.id] ?? ""
  }`.toLowerCase();
}

export default function ServicesExplorer({ services }: { services: Service[] }) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();

  const filtered = useMemo(() => {
    const tokens = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return services;
    return services.filter((service) => {
      const text = searchableText(service);
      return tokens.every((token) => text.includes(token));
    });
  }, [trimmed, services]);

  return (
    <>
      {/* Search bar */}
      <section className="bg-[#FAF8F5] pt-12 md:pt-16 pb-2">
        <div className="container-max section-padding">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative max-w-2xl"
          >
            <span
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
              }}
              placeholder="Search services"
              aria-label="Search services"
              autoComplete="off"
              className="w-full rounded-full border border-[rgba(168,155,140,0.45)] bg-white py-3.5 pl-12 pr-11 text-base text-navy placeholder:text-navy/40 shadow-sm transition-colors duration-200 focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/30"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-navy/40 transition-colors duration-200 hover:bg-navy/5 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/40"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </form>
          <p className="mt-3 text-sm text-navy/50" aria-live="polite">
            {trimmed
              ? `${filtered.length} ${filtered.length === 1 ? "service" : "services"} match “${trimmed}”`
              : `Showing all ${services.length} services`}
          </p>
        </div>
      </section>

      {/* Results */}
      {filtered.length === 0 ? (
        <section className="bg-[#FAF8F5] pb-20 pt-6">
          <div className="container-max section-padding">
            <div className="max-w-2xl rounded-2xl border border-[rgba(168,155,140,0.35)] bg-white p-10 text-center">
              <h2 className="font-baskerville text-2xl text-navy mb-3">
                No services match your search
              </h2>
              <p className="text-navy/60 leading-relaxed mb-8">
                We couldn&apos;t find a service for &ldquo;{trimmed}&rdquo;. Try a
                different term, or get in touch and we&apos;ll point you in the
                right direction.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,155,140,0.5)] px-6 py-3 text-sm font-medium text-navy transition-colors duration-200 hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/40"
                >
                  Clear search
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-taupe px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#968a7c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe focus-visible:ring-offset-2"
                >
                  Get in touch
                  <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        filtered.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`${sectionBg(i)} py-14 md:py-20`}
          >
            <Link href={service.href} className="block container-max section-padding group cursor-pointer">
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
                      {service.icon}
                    </div>
                    <div>
                      {service.flagship && (
                        <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-steel mb-2">
                          <span className="w-5 h-px bg-steel/50" aria-hidden="true" />
                          Our flagship service
                        </span>
                      )}
                      <h2 className="font-baskerville text-2xl md:text-3xl text-navy leading-snug">
                        {service.title}
                      </h2>
                      {service.flagship && (
                        <>
                          <p className="mt-2 font-baskerville text-sm md:text-base text-steel leading-snug">
                            Financial direction for ambitious businesses.
                          </p>
                          <p className="mt-1 text-sm text-navy/60 leading-snug">
                            Our all-inclusive fixed-fee packages.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-navy/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
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
        ))
      )}
    </>
  );
}
