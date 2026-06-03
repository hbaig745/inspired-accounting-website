import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Inspired Accounting — Chartered Certified Accountants based in Leicester since 2006. A team of five ACCA-accredited accountants, all work done in-house.",
};

const team = [
  {
    name: "Javeed Baig",
    role: "Director, FCCA",
    bio: "Founder of the practice with over two decades of accountancy experience across a diverse range of sectors and business types.",
    initial: "J",
  },
  // TODO: Add team members — names, roles, bios, and photos
];

const credentials = [
  "Fellow of the Association of Chartered Certified Accountants (FCCA)",
  "Regulated by the ACCA",
  "Registered in England No. 05968166",
  "VAT Registered — No. 977430987",
  "Established 2006",
];

export default function AboutPage() {
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
            The firm
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight text-balance">
            About Inspired Accounting
          </h1>
        </div>
      </section>

      {/* Firm story — split panel */}
      <section className="flex flex-col lg:flex-row" aria-label="Firm story">
        {/* Left: taupe panel — heading + stats */}
        <div className="lg:w-[40%] bg-[#A89B8C] px-8 py-20 sm:px-12 lg:px-16 xl:px-20 lg:py-28 flex flex-col justify-center">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 block mb-4">
            Our story
          </span>
          <h2 className="font-baskerville text-4xl lg:text-5xl text-white leading-tight tracking-tight">
            Built from the ground up
          </h2>

          {/* Stats */}
          <div className="mt-10 flex items-end gap-3">
            <span className="font-baskerville text-7xl text-white leading-none tracking-tight">
              18
            </span>
            <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">
              Years in practice
            </span>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <span className="font-baskerville text-5xl text-white leading-none tracking-tight">
              5
            </span>
            <span className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase mb-1.5">
              ACCA accountants
            </span>
          </div>
        </div>

        {/* Right: warm off-white — body copy + credentials */}
        <div className="flex-1 bg-[#FAF8F5] px-8 py-20 sm:px-12 lg:px-14 xl:px-16 lg:py-28">
          {/* TODO: Replace placeholder About page copy with real firm story */}
          <div className="space-y-5 text-navy/65 leading-relaxed max-w-xl">
            <p>
              Our humble roots as a start-up in 2006 means that we
              didn&apos;t &ldquo;buy&rdquo; our portfolio of clients —
              rather, we won and retained our clients through our efforts
              and hard work. Having started as a sole practitioner, our firm
              has grown organically to a team of five ACCA accredited
              accountants.
            </p>
            <p>
              With expertise spanning a wide and diverse range of fields, we
              take immense pride and joy in looking after your needs —
              whatever your sector or industry.
            </p>
            <p>
              All work is completed in house. We never subcontract or send
              work out to third-party processing centres, as is common
              practice for many other firms. Much of our accountancy work is
              interrelated, so we are happy to provide either the whole
              package or individual services if you so wish.
            </p>
            <p>
              Rather than selling you whatever we want to sell, we take time
              to understand your business&apos;s requirements, and then put
              together the most cost-efficient package for you.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-10 border border-[rgba(168,155,140,0.3)] rounded-lg p-6 max-w-sm">
            <h3 className="font-baskerville text-lg text-navy mb-4">
              Credentials
            </h3>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-navy/65">
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
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Changing accountants — FAF8F5 with taupe left border on content */}
      <section className="bg-[#FAF8F5] py-20 md:py-28">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 border-l-4 border-[#A89B8C] pl-8">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#A89B8C]">
                Making the switch
              </span>
              <h2 className="mt-3 font-baskerville text-3xl md:text-4xl text-navy leading-tight mb-6">
                Changing accountants is easier than you think
              </h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                The fear of change is very real when it comes to switching
                professional advisors. In fact many hold off making the change
                until it has cost them — most often in time and money.
              </p>
              <p className="text-navy/60 leading-relaxed mb-6">
                There&apos;s also a myth that you can&apos;t change accountants
                mid-year. There&apos;s no need to wait until year end. We can
                pick up anything, at any time.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-steel text-sm font-medium hover:text-navy transition-colors duration-200"
              >
                Book a no-obligations discovery call
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-0 divide-y divide-[rgba(168,155,140,0.25)]">
                {[
                  { step: "01", text: "Select a new accountant and agree services" },
                  { step: "02", text: "Notify your current accountant and tie up any loose ends" },
                  { step: "03", text: "New accountant writes to request professional clearance" },
                  { step: "04", text: "Complete handover — typically 2–3 weeks" },
                ].map(({ step, text }) => (
                  <div key={step} className="py-6 grid grid-cols-12 gap-4">
                    <span className="col-span-2 font-baskerville text-[#A89B8C] text-sm">
                      {step}
                    </span>
                    <p className="col-span-10 text-navy/70 text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team — warm taupe tint */}
      <section className="bg-[rgba(168,155,140,0.10)] py-20 md:py-28">
        <div className="container-max section-padding">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#A89B8C]">
            The team
          </span>
          <h2 className="mt-3 font-baskerville text-3xl md:text-4xl text-navy leading-tight mb-12">
            The people behind the numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-[rgba(168,155,140,0.25)] rounded-xl p-8">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white font-baskerville text-2xl mb-5">
                  {member.initial}
                </div>
                <h3 className="font-baskerville text-xl text-navy">{member.name}</h3>
                <p className="text-[#A89B8C] text-xs font-medium tracking-wide mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-navy/55 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
            {/* TODO: Add team members — names, roles, bios, and photos */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-max section-padding text-center">
          <h2 className="font-baskerville text-3xl md:text-4xl text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-white/50 mb-8 max-w-sm mx-auto text-sm">
            Book a free, no-obligations discovery call to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-steel text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#3d6a90] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
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
