"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { SearchEntry } from "@/lib/search";

const MAX_RESULTS = 8;

const quickLinks: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Specialisms", href: "/specialisms" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

function scoreEntry(entry: SearchEntry, q: string, tokens: string[]): number {
  const title = entry.title.toLowerCase();
  const keys = (entry.keywords ?? "").toLowerCase();
  const desc = (entry.description ?? "").toLowerCase();
  const haystack = `${title} ${keys} ${desc}`;

  // Every token must appear somewhere for the entry to match at all.
  if (!tokens.every((t) => haystack.includes(t))) return -1;

  let score = 0;
  if (title.startsWith(q)) score += 6;
  else if (title.includes(q)) score += 4;

  for (const t of tokens) {
    if (title.includes(t)) score += 2;
    else if (keys.includes(t)) score += 1;
    // description-only matches keep the entry but add no weight
  }
  return score;
}

export default function SiteSearch({
  open,
  onClose,
  index,
}: {
  open: boolean;
  onClose: () => void;
  index: SearchEntry[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const trimmed = query.trim();

  const results = useMemo(() => {
    const q = trimmed.toLowerCase();
    const tokens = q.split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return [] as SearchEntry[];
    return index
      .map((entry) => ({ entry, score: scoreEntry(entry, q, tokens) }))
      .filter((r) => r.score >= 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, MAX_RESULTS)
      .map((r) => r.entry);
  }, [trimmed, index]);

  // Reset + focus when opened.
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 20);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Keep the active row in range and scrolled into view.
  useEffect(() => setActive(0), [trimmed]);
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const goTo = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (results.length ? (a + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (results.length ? (a - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      if (results[active]) {
        e.preventDefault();
        goTo(results[active].href);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh] sm:pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onKeyDown={onKeyDown}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_24px_70px_rgba(12,38,63,0.28)]"
          >
            {/* Input row */}
            <div className="flex items-center gap-3 border-b border-[rgba(168,155,140,0.3)] px-4 sm:px-5">
              <span className="text-navy/40" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, FAQs, pages…"
                aria-label="Search the site"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="site-search-results"
                aria-activedescendant={results[active] ? `site-search-option-${active}` : undefined}
                className="flex-1 bg-transparent py-4 text-base text-navy placeholder:text-navy/40 focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-navy/40 transition-colors hover:bg-navy/5 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/40"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              ) : (
                <kbd className="hidden sm:inline-block rounded border border-[rgba(168,155,140,0.5)] px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-navy/40">
                  ESC
                </kbd>
              )}
            </div>

            {/* Results / states */}
            <div className="max-h-[min(60vh,26rem)] overflow-y-auto overscroll-contain">
              {trimmed === "" ? (
                <div className="px-4 sm:px-5 py-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-taupe mb-3">
                    Jump to
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickLinks.map((link) => (
                      <button
                        key={link.href}
                        type="button"
                        onClick={() => goTo(link.href)}
                        className="rounded-full border border-[rgba(168,155,140,0.45)] px-3.5 py-1.5 text-sm text-navy/70 transition-colors hover:border-steel hover:bg-[#0C263F]/[0.03] hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/40"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="px-5 py-10 text-center">
                  <p className="text-navy/70 mb-1">
                    No results for &ldquo;{trimmed}&rdquo;
                  </p>
                  <p className="text-sm text-navy/50">
                    Try a different term, or{" "}
                    <button
                      type="button"
                      onClick={() => goTo("/contact")}
                      className="text-steel underline underline-offset-2 hover:text-navy transition-colors"
                    >
                      get in touch
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <ul id="site-search-results" role="listbox" ref={listRef} className="py-2">
                  {results.map((entry, i) => (
                    <li key={`${entry.type}-${entry.href}`} role="presentation">
                      <button
                        type="button"
                        id={`site-search-option-${i}`}
                        data-idx={i}
                        role="option"
                        aria-selected={i === active}
                        onMouseMove={() => setActive(i)}
                        onClick={() => goTo(entry.href)}
                        className={`flex w-full items-start justify-between gap-4 px-4 sm:px-5 py-3 text-left transition-colors ${
                          i === active ? "bg-[#0C263F]/[0.05]" : ""
                        }`}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[15px] font-medium text-navy">
                            {entry.title}
                          </span>
                          {entry.description && (
                            <span className="mt-0.5 block truncate text-sm text-navy/50">
                              {entry.description}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#0C263F]/[0.06] px-2.5 py-1 text-[11px] font-medium text-navy/55">
                          {entry.type}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
