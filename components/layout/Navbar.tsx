"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",         href: "/"              },
  { label: "Services",     href: "/services"      },
  { label: "Specialisms",  href: "/specialisms"   },
  { label: "Case Studies", href: "/case-studies"   },
  { label: "Why Us",       href: "/about"          },
  { label: "Blog",         href: "/blog"           },
  { label: "FAQs",         href: "/faqs"           },
  { label: "Contact",      href: "/contact"        },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 60);
  }, [pathname]);

  // Lock body scroll only on mobile when full-screen menu is open
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    document.body.style.overflow = (menuOpen && isMobile) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          animate={{ backgroundColor: solid ? "rgb(238,234,229)" : "rgba(0,0,0,0)" }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center h-16 md:h-[72px] px-6 md:px-10 lg:px-14">

            {/* Logo — mobile only, appears when scrolled or menu open */}
            <div className="flex-1 flex items-center min-w-0 md:hidden">
              <AnimatePresence>
                {(solid || menuOpen) && (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href="/"
                      aria-label="Inspired Accounting — Home"
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded"
                    >
                      <Image
                        src="/logos/Inspired Accounting Logo Full Color.svg"
                        alt="Inspired Accounting"
                        width={160}
                        height={72}
                        className="h-8 w-auto"
                        priority
                      />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop: collapsible links + hamburger */}
            <div className="hidden md:flex items-center gap-7 lg:gap-10 ml-auto">
              <AnimatePresence>
                {menuOpen && (
                  <motion.nav
                    key="desktop-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-7 lg:gap-10"
                    aria-label="Main navigation"
                  >
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.045, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <Link
                          href={link.href}
                          className={`text-[11px] tracking-[0.22em] uppercase whitespace-nowrap font-bold
                            transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded
                            ${solid ? "text-navy/70 hover:text-navy" : "text-white/70 hover:text-white"}`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                )}
              </AnimatePresence>

              <button
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded"
              >
                <div className="relative w-5 h-5">
                  {[
                    { hamburger: { y: -6, rotate: 0, opacity: 1 }, x: { y: 0, rotate: 45, opacity: 1 } },
                    { hamburger: { y: 0, rotate: 0, opacity: 1 },  x: { y: 0, rotate: 0,  opacity: 0 } },
                    { hamburger: { y: 6, rotate: 0, opacity: 1 },  x: { y: 0, rotate: -45, opacity: 1 } },
                  ].map((v, i) => (
                    <motion.span
                      key={i}
                      className={`absolute left-0 right-0 h-px origin-center ${solid ? "bg-navy" : "bg-white"}`}
                      style={{ top: "50%" }}
                      animate={menuOpen ? v.x : v.hamburger}
                      transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
                    />
                  ))}
                </div>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className={`block h-px w-full origin-center ${solid ? "bg-navy" : "bg-white"}`}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block h-px w-full ${solid ? "bg-navy" : "bg-white"}`}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className={`block h-px w-full origin-center ${solid ? "bg-navy" : "bg-white"}`}
                />
              </div>
            </button>

          </div>
        </motion.div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "#0C263F" }}
          >
            <div className="flex flex-col justify-center h-full px-8 pb-8 pt-24">
              <nav aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 text-3xl font-baskerville border-b border-white/10
                        transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded
                        ${pathname === link.href ? "text-white" : "text-white/60 hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4, delay: 0.05 + navLinks.length * 0.06, ease: [0.25, 1, 0.5, 1] }}
                  className="mt-10"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-taupe text-white text-base font-medium tracking-wide active:scale-[0.97] transition-transform duration-150"
                  >
                    Free Consultation
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <a href="tel:01162206019" className="block text-white/40 text-sm hover:text-white/70 transition-colors">
                    0116 220 6019
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
