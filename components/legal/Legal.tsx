import type { ReactNode } from "react";

/**
 * Shared building blocks for the legal pages (Privacy Policy, Cookie Policy).
 * Server components — no interactivity. Text is passed as `{expressions}` so
 * apostrophes and quotes don't trip the JSX unescaped-entities lint rule.
 */

export function LegalLayout({
  title,
  updated,
  lead,
  children,
}: {
  title: string;
  updated: string;
  lead: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_20%_30%,rgba(168,155,140,0.14),transparent)]" />
        </div>
        <div className="container-max section-padding relative z-10">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            Legal
          </span>
          <h1 className="mt-3 font-baskerville text-4xl md:text-5xl xl:text-6xl text-white leading-tight tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-6 text-white/50 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-max section-padding">
          <div className="max-w-3xl">
            <p className="text-navy/70 text-lg leading-relaxed mb-12">{lead}</p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 mb-12 last:mb-0">
      <h2 className="font-baskerville text-2xl md:text-3xl text-navy mb-4 flex items-center gap-3">
        <span className="w-6 h-px bg-taupe flex-shrink-0" aria-hidden="true" />
        {heading}
      </h2>
      <div className="text-navy/70 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-taupe flex-shrink-0"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
