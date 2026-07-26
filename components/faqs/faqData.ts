export type Faq = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: Faq[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    label: "Getting started",
    items: [
      {
        q: "Do I need to be based in Leicester to work with you?",
        a: "No. Most of our clients are local, but we work with owner-managed businesses across Leicestershire and the wider UK. Everything runs through our systems, so location isn't a barrier.",
      },
      {
        q: "How do I switch from my current accountant?",
        a: `It's far less hassle than people expect, and almost all of the work is ours, not yours. Once you tell us you'd like to move, we write to your current accountant requesting "professional clearance" — a standard, purely procedural letter asking if there's any reason we shouldn't take you on. We then request your records and set up HMRC authorisation to act on your behalf. Your part is a short ID check and a couple of emails. It typically takes two to four weeks, and there's no need to wait until a year-end or renewal date to start.`,
      },
      {
        q: "What happens if I still owe my old accountant money?",
        a: "Settle any outstanding invoices before the switch if you can — an unpaid bill is the most common thing that slows a handover down. Your old accountant can't withhold your statutory records over unpaid fees, but a clear balance makes for a much smoother, faster transition.",
      },
      {
        q: "What do you need from me to get started?",
        a: "Standard identification documents (as required by anti-money-laundering rules), details of your current accountant if you're switching, and a short conversation about your business so we can put together a service package that actually fits — not a one-size-fits-all bundle.",
      },
    ],
  },
  {
    id: "services-pricing",
    label: "Services & pricing",
    items: [
      {
        q: "What services do you offer?",
        a: "Tax review and planning, statutory accounts preparation, corporation tax, VAT accounting, digital payroll, professional bookkeeping, company formation and structuring, and broader business support — including untangling accounts left in a mess by a previous accountant. If you're not sure what you actually need, that's exactly what a free discovery call is for.",
      },
      {
        q: "How much does an accountant cost?",
        a: "It depends on your business size, structure, and which services you need — a sole trader's self-assessment costs far less than full monthly bookkeeping and payroll for a limited company. We agree fixed, upfront pricing before any work starts, so there are no surprise bills. Get in touch for a quote tailored to your situation.",
      },
      {
        q: "Do you work with sole traders as well as limited companies?",
        a: "Yes — sole traders, partnerships, and limited companies. If you're just starting out and aren't sure which structure suits you, that's something we can talk through before you commit to anything.",
      },
      {
        q: "Is all the work done in-house?",
        a: "Yes. We don't subcontract or send work to third-party processing centres, which is common practice at some firms. Your data and your relationship stay with the people you actually speak to.",
      },
    ],
  },
  {
    id: "tax-compliance",
    label: "Tax & compliance",
    items: [
      {
        q: "What is Making Tax Digital for Income Tax, and does it affect me?",
        a: "Making Tax Digital for Income Tax (MTD for ITSA) requires sole traders and landlords above a set income threshold to keep digital records and send quarterly updates to HMRC, rather than filing one annual return. It becomes mandatory in phases: from April 2026 for those with qualifying income over £50,000, dropping to £30,000 from April 2027 and £20,000 the year after. Only self-employment and property income count toward the threshold — PAYE wages, dividends, and pensions don't. If you think you're close to a threshold, it's worth getting this checked well before the deadline, as HMRC won't register you automatically.",
      },
      {
        q: "When do I need to register for VAT?",
        a: "Once your taxable turnover goes over £90,000 in any rolling 12-month period — not your accounting year or the tax year, but a continuous 12-month window that you need to monitor monthly. You then have 30 days to register. Missing this can mean backdated VAT and penalties, so if you're anywhere near the threshold, it's worth reviewing your numbers regularly rather than waiting for year-end.",
      },
      {
        q: "What's the deadline for my Self Assessment tax return?",
        a: "Online returns are due by 31 January following the end of the tax year, with any tax owed due the same day. Filing even one day late triggers an automatic £100 penalty, regardless of whether you owe tax — so it's worth getting your records to us well ahead of the deadline rather than in the final week of January.",
      },
      {
        q: "What happens if I miss a tax deadline?",
        a: "Penalties vary by tax type — a flat £100 for a late Self Assessment return, daily interest on late Corporation Tax payments, and a points-based penalty system for late VAT returns. If you've missed a deadline or think you're about to, contact us as soon as possible — the earlier we're involved, the more options there usually are to limit the damage.",
      },
      {
        q: "Can you help if my previous accountant left my accounts in a mess?",
        a: "Yes — this is something we deal with regularly. We'll review what's there, identify what's missing or wrong, and rebuild a clear, accurate picture before moving you forward. No judgement, just a plan to get things straight.",
      },
    ],
  },
  {
    id: "working-with-us",
    label: "Working with us",
    items: [
      {
        q: "Will I have a single point of contact, or will I get passed around?",
        a: "You'll work directly with a qualified accountant who knows your business, not a call centre or a rotating cast of case handlers.",
      },
      {
        q: "Do you only handle compliance, or do you also give business advice?",
        a: "Both. Compliance work (accounts, tax, payroll) is the baseline — where we try to add real value is in the ongoing advice: flagging issues before they become problems, and helping you use your numbers to make actual business decisions.",
      },
      {
        q: "How do I get started?",
        a: "Book a free discovery call. It's a no-obligation conversation about your business and what we can realistically do for it — no jargon, no pressure.",
      },
    ],
  },
];
