"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  title: string;
  href?: string;
  icon: React.ReactNode;
};

const svgProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const accountingServices: Service[] = [
  {
    title: "Statutory Accounts",
    href: "/services/statutory-accounts",
    icon: (
      <svg {...svgProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Self Assessment",
    href: "/services/self-assessment",
    icon: (
      <svg {...svgProps}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    title: "Business Start-Ups",
    href: "/services/business-start-ups",
    icon: (
      <svg {...svgProps}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Bookkeeping Services",
    href: "/services/bookkeeping",
    icon: (
      <svg {...svgProps}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Property Portfolio Accounting",
    href: "/services/property-portfolio-accounting",
    icon: (
      <svg {...svgProps}>
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    title: "Business Consultancy Services",
    href: "/services/business-consultancy",
    icon: (
      <svg {...svgProps}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Accounting for Group Structures",
    href: "/services/accounting-for-group-structures",
    icon: (
      <svg {...svgProps}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Company Restructuring and Advice",
    href: "/services/company-restructuring",
    icon: (
      <svg {...svgProps}>
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
];

const taxServices: Service[] = [
  {
    title: "Tax Planning Services",
    href: "/services/tax-planning",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Tax Amnesties – Coming Clean",
    href: "/services/tax-amnesties",
    icon: (
      <svg {...svgProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "VAT Services",
    href: "/services/vat",
    icon: (
      <svg {...svgProps}>
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Payroll Services",
    href: "/services/payroll",
    icon: (
      <svg {...svgProps}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Corporation Tax Services",
    href: "/services/corporation-tax",
    icon: (
      <svg {...svgProps}>
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
  {
    title: "Capital Gains Tax on Property",
    href: "/services/capital-gains-tax",
    icon: (
      <svg {...svgProps}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Capital Gains Tax – Other Assets",
    href: "/services/capital-gains-tax-other-assets",
    icon: (
      <svg {...svgProps}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Tax Investigations",
    href: "/services/tax-investigations",
    icon: (
      <svg {...svgProps}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: Service }) {
  const base =
    "bg-white p-6 flex items-center gap-4 border-t-[3px] border-[#A89B8C] transition-[border-color,box-shadow] duration-300";

  const inner = (
    <>
      <div className="w-10 h-10 rounded-lg bg-[#0C263F]/5 flex items-center justify-center text-[#0C263F] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#0C263F] group-hover:text-white">
        {service.icon}
      </div>
      <h4 className="flex-1 font-baskerville text-lg text-[#0C263F] leading-snug">
        {service.title}
      </h4>
      {service.href && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-steel flex-shrink-0 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </>
  );

  if (service.href) {
    return (
      <Link
        href={service.href}
        className={`${base} group hover:border-[#4A789E] hover:shadow-[0_4px_24px_rgba(12,38,63,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={`${base} group`}>{inner}</div>;
}

function FeaturedService() {
  return (
    <Link
      href="/services/inspired-accounts"
      className="group relative block overflow-hidden bg-navy border-t-[3px] border-steel p-7 sm:p-9 mb-px transition-shadow duration-300 hover:shadow-[0_8px_36px_rgba(12,38,63,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/60"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_100%_0,rgba(168,155,140,0.22),transparent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center text-center gap-5">
        <div>
          <span className="flex items-center justify-center gap-2.5 text-taupe text-xs font-medium tracking-[0.18em] uppercase mb-3">
            <span className="w-6 h-px bg-taupe/60" aria-hidden="true" />
            Our flagship service
            <span className="w-6 h-px bg-taupe/60" aria-hidden="true" />
          </span>
          <h4 className="font-baskerville text-2xl md:text-3xl text-white leading-tight">
            Inspired Accounts
          </h4>
          <p className="mt-2 text-white/65 leading-relaxed max-w-md mx-auto">
            Our all-inclusive, fixed-fee Financial Directorship package — every
            part of your finance function run as one fully managed service.
          </p>
        </div>
        <span className="flex items-center gap-2 text-steel text-sm font-medium tracking-wide transition-colors duration-200 group-hover:text-white">
          Explore the package
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function ServiceGroup({
  label,
  services,
  delay,
  featured,
}: {
  label: string;
  services: Service[];
  delay: number;
  featured?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-taupe" aria-hidden="true" />
        <h3 className="font-baskerville text-xl md:text-2xl text-navy">{label}</h3>
      </div>
      {featured}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#A89B8C]/25">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Link
          href="/services"
          className="group inline-flex items-center gap-1.5 text-steel text-sm font-medium tracking-wide underline underline-offset-4 decoration-steel/40 hover:decoration-steel hover:text-navy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded"
        >
          Explore all services
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesOverview() {
  return (
    <section className="flex flex-col lg:flex-row" aria-labelledby="services-heading">
      {/* Left panel */}
      <div
        className="lg:w-[38%] px-8 py-16 sm:px-12 lg:px-16 xl:px-20 lg:py-28 flex flex-col justify-center"
        style={{ backgroundColor: "rgb(238,234,229)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[15px] font-medium tracking-[0.08em] text-taupe block mb-4">
            What we do
          </span>
          <h2
            id="services-heading"
            className="font-baskerville text-4xl lg:text-5xl text-navy leading-tight tracking-tight"
          >
            Accounting services we offer
          </h2>
          <p className="mt-6 text-navy/60 text-lg leading-relaxed max-w-sm">
            When accounting is done right, it is both simple and powerful.
            We handle the full spectrum — from annual accounts to day-to-day
            bookkeeping — so you stay focused on what you do best.
          </p>
          <div className="mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-steel text-base font-medium tracking-wide underline underline-offset-4 decoration-steel/40 hover:decoration-steel hover:text-navy transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50 rounded"
            >
              View all services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right panel — service groups */}
      <div className="flex-1 bg-[#FAF8F5] px-8 py-16 sm:px-12 lg:px-14 xl:px-16 lg:py-28 space-y-14">
        <ServiceGroup
          label="Accounting Services"
          services={accountingServices}
          delay={0}
          featured={<FeaturedService />}
        />
        <ServiceGroup label="Tax Services" services={taxServices} delay={0.1} />
      </div>
    </section>
  );
}
