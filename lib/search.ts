import { getAllPosts } from "./blog";
import { getAllCaseStudies } from "./case-studies";
import { faqCategories } from "@/components/faqs/faqData";

export type SearchType =
  | "Page"
  | "Service"
  | "Specialism"
  | "Case Study"
  | "Blog"
  | "FAQ";

export interface SearchEntry {
  title: string;
  href: string;
  type: SearchType;
  /** Shown under the title in results; also included when matching. */
  description?: string;
  /** Extra hidden terms (from the full page content) used only for matching. */
  keywords?: string;
}

const pages: SearchEntry[] = [
  {
    title: "Home",
    href: "/",
    type: "Page",
    description: "Chartered Certified Accountants in Leicester for small businesses.",
    keywords: "inspired accounting home accountants leicester acca chartered certified small business owner managed",
  },
  {
    title: "Services",
    href: "/services",
    type: "Page",
    description: "Our full range of accounting and tax services.",
    keywords: "all services accounting tax bookkeeping payroll vat overview",
  },
  {
    title: "Specialisms",
    href: "/specialisms",
    type: "Page",
    description: "Industries and sectors we know inside out.",
    keywords: "industries sectors specialisms niche property ecommerce hospitality professional services engineering",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    type: "Page",
    description: "Real client stories and the results we've helped deliver.",
    keywords: "client stories results outcomes case studies examples proof",
  },
  {
    title: "Why Us",
    href: "/about",
    type: "Page",
    description: "Who we are, our story and how we work.",
    keywords: "about why us team javeed baig acca chartered certified accountants leicester experience story values approach",
  },
  {
    title: "Blog",
    href: "/blog",
    type: "Page",
    description: "Articles, guides and insights for business owners.",
    keywords: "articles news insights guides blog resources",
  },
  {
    title: "FAQs",
    href: "/faqs",
    type: "Page",
    description: "Answers to common questions about working with us.",
    keywords: "frequently asked questions help switching accountant cost pricing making tax digital vat threshold deadlines",
  },
  {
    title: "Contact",
    href: "/contact",
    type: "Page",
    description: "Get in touch, book a free discovery call or request a quote.",
    keywords: "contact get in touch phone email address leicester enquiry quote free discovery call consultation book appointment",
  },
  {
    title: "Client Portal",
    href: "/portal",
    type: "Page",
    description: "Secure login for existing clients.",
    keywords: "portal login client access sign in secure",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    type: "Page",
    keywords: "privacy policy data protection gdpr",
  },
  {
    title: "Cookie Policy",
    href: "/cookies",
    type: "Page",
    keywords: "cookie policy cookies tracking consent",
  },
];

const services: SearchEntry[] = [
  {
    title: "Inspired Accounts",
    href: "/services/inspired-accounts",
    type: "Service",
    description: "Our flagship all-inclusive, fixed-fee service — bookkeeping, VAT, payroll, accounts and tax as one.",
    keywords: "flagship all inclusive fixed fee financial director directorship bookkeeping payroll vat statutory accounts corporation tax self assessment dext xero dashboards management reporting growth advisory packages pricing tiers one team compliance",
  },
  {
    title: "Statutory Accounts",
    href: "/services/statutory-accounts",
    type: "Service",
    description: "Full statutory accounts for limited companies, filed with Companies House and HMRC.",
    keywords: "limited company companies house hmrc year end annual accounts directors lenders messy records dividends corporation tax shareholders filing",
  },
  {
    title: "Self Assessment",
    href: "/services/self-assessment",
    type: "Service",
    description: "Self-assessment tax returns for directors, landlords, sub-contractors and investors.",
    keywords: "tax return property owners cis subcontractors sub-contractors directors investors registration hmrc filing dividends rental income allowances deadline january",
  },
  {
    title: "Business Start-Ups",
    href: "/services/business-start-ups",
    type: "Service",
    description: "Getting your business structure and registrations right from day one.",
    keywords: "sole trader partnership limited company formation company formation hmrc registration paye vat new business structure allowances reliefs banking startup",
  },
  {
    title: "Bookkeeping Services",
    href: "/services/bookkeeping",
    type: "Service",
    description: "Digital bookkeeping on Xero and Dext, kept accurate and up to date all year.",
    keywords: "xero dext reconciliation bank card supplier vat records making tax digital mtd management figures receipts invoices spreadsheets shoebox digital",
  },
  {
    title: "Business Consultancy Services",
    href: "/services/business-consultancy",
    type: "Service",
    description: "Management accounts, forecasting and practical advice to help you grow.",
    keywords: "management accounts cash flow forecasting budgeting profitability pricing business plan planning funding loan finance investment kpi decisions growth advisory sounding board",
  },
  {
    title: "Accounting for Group Structures",
    href: "/services/accounting-for-group-structures",
    type: "Service",
    description: "Statutory and consolidated accounts for group and multi-entity structures.",
    keywords: "consolidated accounts holding company subsidiary parent companies act 2006 intercompany director loans management charges sideways group small group exemption dext xero multi entity",
  },
  {
    title: "Property Portfolio Accounting",
    href: "/services/property-portfolio-accounting",
    type: "Service",
    description: "Specialist digital accounting for landlords and property investors.",
    keywords: "landlords property investors making tax digital mtd renters rights act cloud software portfolio reporting buy to let limited company capital gains spreadsheets rental",
  },
  {
    title: "Company Structuring & Restructuring Advice",
    href: "/services/company-restructuring",
    type: "Service",
    description: "Holding companies, restructuring and advice for profitable trading businesses.",
    keywords: "structuring restructuring holding company incorporation sole trader limited company group structure surplus profit retained profit succession sale investment property partner",
  },
  {
    title: "VAT Services",
    href: "/services/vat",
    type: "Service",
    description: "VAT registration, scheme selection and accurate, on-time returns.",
    keywords: "vat registration scheme selection returns submissions reclaim bookkeeping digital hmrc enquiries reconciliation making tax digital flat rate threshold 90000",
  },
  {
    title: "Payroll Services",
    href: "/services/payroll",
    type: "Service",
    description: "Accurate, on-time payroll with digital payslips and an employee app.",
    keywords: "payroll payslips employee app p60 paye national insurance minimum wage living wage bonuses statutory pay pension weekly fortnightly monthly hr",
  },
  {
    title: "Capital Gains Tax on Property",
    href: "/services/capital-gains-tax",
    type: "Service",
    description: "60-day CGT reporting when you sell a buy-to-let or second home.",
    keywords: "cgt capital gains property buy to let second home 60 day return residential disposal reliefs completion hmrc self assessment landlords inherited",
  },
  {
    title: "Corporation Tax Services",
    href: "/services/corporation-tax",
    type: "Service",
    description: "Corporation tax computations prepared alongside your statutory accounts.",
    keywords: "ct600 computation statutory accounts capital allowances annual investment allowance aia taxable profit accounting profit disallowable hmrc submission deadlines",
  },
  {
    title: "Tax Planning",
    href: "/services/tax-planning",
    type: "Service",
    description: "Year-round business tax planning and one-off personal tax advice.",
    keywords: "corporation tax vat structuring profit extraction salary dividends pension inheritance tax iht capital gains cgt trusts estate probate hmrc disclosure non dom domicile residency self assessment r&d research development",
  },
  {
    title: "Capital Gains Tax (Shares & Assets)",
    href: "/services/capital-gains-tax-other-assets",
    type: "Service",
    description: "CGT on shares, business assets and valuable possessions.",
    keywords: "cgt capital gains shares investments business assets possessions jewellery art antiques isa pension annual exempt amount business asset disposal relief autumn budget",
  },
  {
    title: "Tax Amnesties — Coming Clean with HMRC",
    href: "/services/tax-amnesties",
    type: "Service",
    description: "Disclose undeclared tax to HMRC voluntarily, with lower penalties.",
    keywords: "disclosure hmrc let property campaign worldwide disclosure facility digital disclosure service contractual disclosure cop9 offshore undeclared rental income voluntary penalties amnesty come clean",
  },
  {
    title: "Tax Investigations",
    href: "/services/tax-investigations",
    type: "Service",
    description: "Well-managed support if HMRC opens an enquiry into your tax affairs.",
    keywords: "hmrc enquiry investigation self assessment corporation tax vat inspection paye cop8 cop9 aspect random specialist tax advisor letter",
  },
];

const specialisms: SearchEntry[] = [
  {
    title: "Engineering & Consultancy",
    href: "/specialisms/engineering-consultancy",
    type: "Specialism",
    description: "Project-based accounting — margins by contract, CIS and complex VAT.",
    keywords: "project contracts margins cis vat management information consultancy engineering technical",
  },
  {
    title: "E-Commerce",
    href: "/specialisms/ecommerce",
    type: "Specialism",
    description: "Multi-platform, marketplace, inventory and cross-border VAT accounting.",
    keywords: "online selling marketplace amazon shopify etsy inventory cross border vat payment processors platforms ecommerce",
  },
  {
    title: "Hospitality & Restaurants",
    href: "/specialisms/hospitality",
    type: "Specialism",
    description: "Tight margins, tips, split VAT rates and seasonal cash flow.",
    keywords: "restaurant cafe bar pub tips staff turnover split vat seasonal margins hospitality food takeaway",
  },
  {
    title: "Professional Services",
    href: "/specialisms/professional-services",
    type: "Specialism",
    description: "Solicitors, architects, agencies and recruiters — IR35 and remuneration.",
    keywords: "solicitors architects marketing agencies recruiters ir35 income recognition director remuneration professional services",
  },
  {
    title: "Property & Real Estate",
    href: "/specialisms/property",
    type: "Specialism",
    description: "Landlords and investors — income, CGT, SDLT and interest relief.",
    keywords: "landlord portfolio property cgt sdlt stamp duty mortgage interest relief buy to let real estate investor",
  },
];

/**
 * Every statically-routed page on the site. Drives both the search index and
 * the sitemap, so a new page added here is picked up by both.
 */
export const staticPages: SearchEntry[] = [...pages, ...services, ...specialisms];

/**
 * Assembles the full site search index. Server-only (reads blog and case-study
 * content from disk), so call this from a Server Component and pass the result
 * to the client search UI.
 */
export function getSearchIndex(): SearchEntry[] {
  const caseStudies: SearchEntry[] = getAllCaseStudies().map((c) => ({
    title: c.title,
    href: `/case-studies/${c.slug}`,
    type: "Case Study",
    description: c.excerpt,
    keywords: c.client,
  }));

  const blog: SearchEntry[] = getAllPosts().map((p) => ({
    title: p.title,
    href: `/blog/${p.slug}`,
    type: "Blog",
    description: p.excerpt,
  }));

  const faqs: SearchEntry[] = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      title: item.q,
      href: `/faqs#${cat.id}`,
      type: "FAQ" as const,
      description: item.a,
      keywords: cat.label,
    })),
  );

  return [...staticPages, ...caseStudies, ...blog, ...faqs];
}
