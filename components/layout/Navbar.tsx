"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",         href: "/"              },
  { label: "Services",     href: "/services"      },
  { label: "Case Studies", href: "/case-studies"   },
  { label: "About",        href: "/about"          },
  { label: "Blog",         href: "/blog"           },
  { label: "Contact",      href: "/contact"        },
];

const lineVariants = [
  { hamburger: { y: -6, rotate: 0, opacity: 1 }, x: { y: 0, rotate:  45, opacity: 1 } },
  { hamburger: { y:  0, rotate: 0, opacity: 1 }, x: { y: 0, rotate:   0, opacity: 0 } },
  { hamburger: { y:  6, rotate: 0, opacity: 1 }, x: { y: 0, rotate: -45, opacity: 1 } },
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

  // Reset both menu and scroll state on navigation
  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 60);
  }, [pathname]);

  const solid = menuOpen || scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        animate={{ backgroundColor: solid ? "rgb(238,234,229)" : "rgba(0,0,0,0)" }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="flex items-center h-16 md:h-[72px] px-6 md:px-10 lg:px-14">

          <div className="flex-1" />

          {/* Nav links (menu open) + hamburger button */}
          <div className="flex items-center gap-7 md:gap-9 lg:gap-12">
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  key="links"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-7 md:gap-9 lg:gap-12"
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
                        className="text-[11px] md:text-xs tracking-[0.22em] uppercase whitespace-nowrap font-bold
                          text-navy/70 hover:text-navy transition-colors duration-200 focus-visible:outline-none"
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
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              <div className="relative w-5 h-5">
                {lineVariants.map((v, i) => (
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

        </div>
      </motion.div>
    </header>
  );
}
