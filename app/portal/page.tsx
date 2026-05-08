import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Inspired Accounting client portal — coming soon.",
};

/*
 * TODO Phase 2: Client authentication, document sharing, and CRM integration.
 * Reserved for future build once CRM platform is confirmed with Mitesh.
 * Will include: client login, secure document upload/download, invoice history,
 * real-time communication with the accounts team.
 */

export default function PortalPage() {
  return (
    <section className="min-h-[100dvh] bg-[#FAF8F5] flex items-center justify-center px-6 py-24">
      <div className="bg-[#A89B8C] rounded-none w-full max-w-md px-10 py-14 text-center">
        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 block mb-3">
          Client portal
        </span>
        <h1 className="font-baskerville text-4xl md:text-5xl text-white mb-4 leading-tight">
          Coming soon
        </h1>
        <p className="text-white/70 text-sm leading-relaxed mb-10">
          Our secure client portal is in development. Once live, you&apos;ll be
          able to access documents, review accounts, and communicate with your
          accountant — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2 border-t border-white/20">
          <Link
            href="/"
            className="text-white/60 hover:text-white text-sm transition-colors duration-200"
          >
            Back to homepage
          </Link>
          <span className="text-white/20 hidden sm:block text-xs">·</span>
          <Link
            href="/contact"
            className="text-white font-medium text-sm hover:text-white/80 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
