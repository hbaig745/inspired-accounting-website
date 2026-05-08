"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navBg =
    isHomepage && !scrolled
      ? "bg-transparent"
      : "bg-navy shadow-[0_1px_0_0_rgba(255,255,255,0.08)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${navBg}`}
      >
        <nav className="container-max section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded"
              aria-label="Inspired Accounting — Home"
            >
              <Image
                src="/logos/Inspired Accounting Logo Negative.svg"
                alt="Inspired Accounting"
                width={160}
                height={72}
                className="h-9 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded
                    ${
                      pathname === link.href
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-taupe"
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="group ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-steel text-white text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#3d6a90] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Free Consultation
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8L8 2M8 2H3M8 2V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded"
            >
              <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="block h-px w-full bg-white origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-px w-full bg-white"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="block h-px w-full bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col justify-center h-full px-8 pb-8 pt-24">
              <nav aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 + i * 0.06,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 text-3xl font-baskerville border-b border-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe rounded
                        ${pathname === link.href ? "text-white" : "text-white/60 hover:text-white"}
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + navLinks.length * 0.06,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="mt-10"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-steel text-white text-base font-medium tracking-wide active:scale-[0.97] transition-transform duration-150"
                  >
                    Free Consultation
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 8L8 2M8 2H3M8 2V7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
                  <p className="text-white/40 text-sm">
                    0116 220 6019
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    javeed@goweronline.co.uk
                  </p>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
