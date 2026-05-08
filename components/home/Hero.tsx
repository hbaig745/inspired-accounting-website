"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

const HeroCanvas3D = dynamic(() => import("./HeroCanvas3D"), { ssr: false });

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

const credentials = [
  { label: "FCCA Qualified", sub: "Javeed Baig, Director" },
  { label: "ACCA Regulated", sub: "Chartered Certified" },
  { label: "Est. 2006", sub: "18+ years serving Leicester" },
  { label: "All work in-house", sub: "No outsourcing, ever" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0C263F' }}
      aria-label="Hero"
    >
      {/* Canvas particle background */}
      <HeroCanvas />

      {/* Three.js crystal globe — morphing icosahedron, precision and data */}
      <HeroCanvas3D />

      {/* Mesh gradient + geometric accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(168,155,140,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_-10%_80%,rgba(168,155,140,0.05),transparent)]" />
        <svg
          className="absolute right-0 top-0 h-full opacity-[0.06]"
          viewBox="0 0 600 900"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          <line x1="600" y1="0" x2="200" y2="900" stroke="white" strokeWidth="1" />
          <line x1="600" y1="0" x2="350" y2="900" stroke="white" strokeWidth="0.5" />
          <line x1="600" y1="150" x2="100" y2="900" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-max section-padding relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Main content column */}
          <div className="xl:col-span-7 text-center xl:text-left">
            {/* Animated taupe vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ transformOrigin: "top" }}
              className="w-px h-14 bg-taupe/50 mb-5 mx-auto xl:mx-0"
              aria-hidden="true"
            />

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="mb-8 flex justify-center xl:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-taupe/30 bg-taupe/10 text-taupe text-xs tracking-[0.18em] uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-taupe" />
                Chartered Certified Accountants · Leicester
              </span>
            </motion.div>

            {/* Tagline — staggered line-by-line reveal */}
            <h1 className="mb-8" aria-label="Inspired Accounting — For a Better Future">
              {/* Line 1: "Inspired" — white, Libre Baskerville */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
                  className="block font-baskerville text-[clamp(2.5rem,8vw,4rem)] xl:text-8xl text-white leading-[1.05] tracking-tighter"
                >
                  Inspired
                </motion.span>
              </span>

              {/* Line 2: "Accounting" — steel blue, Libre Baskerville */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
                  className="block font-baskerville text-[clamp(2.2rem,7vw,3.52rem)] xl:text-[5.28rem] text-steel leading-[1.05] tracking-tighter"
                >
                  Accounting
                </motion.span>
              </span>

              {/* Line 3: "FOR A BETTER FUTURE" — warm taupe, DM Sans, wide tracking */}
              <span className="block overflow-hidden mt-4">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
                  className="block font-sans text-sm sm:text-base tracking-[0.22em] uppercase text-taupe"
                >
                  For a Better Future
                </motion.span>
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              custom={1.05}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10 mx-auto xl:mx-0"
            >
              We help businesses overcome cashflow issues, dwindling profits and
              recover from lost energy and focus. Your accounting, reimagined.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={1.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-7 py-4 rounded-full bg-steel text-white text-sm font-medium tracking-wide transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#3d6a90] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Get a Free Consultation
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
              >
                <span className="hidden sm:block w-px h-5 bg-white/20" aria-hidden="true" />
                Our Services
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
            </motion.div>

            {/* Trust signal */}
            <motion.div
              custom={1.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-12 md:mt-16 xl:mt-20 flex justify-center xl:justify-start"
            >
              <p className="text-white/60 text-sm tracking-wide">
                ★★★★★&nbsp;&nbsp;Rated 5 stars by Leicester businesses
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Credential card — floating upper-right, desktop only. Sits above the 3D globe */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: EASE }}
        className="hidden xl:block absolute top-28 right-8 2xl:right-12 z-20"
        aria-label="Our credentials"
      >
        <div className="border-l-2 border-taupe bg-navy/40 px-6 py-5 min-w-[220px]">
          <p className="text-white/30 text-[10px] tracking-[0.18em] uppercase mb-5">
            Our credentials
          </p>
          <div className="space-y-4">
            {credentials.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-taupe flex-shrink-0 mt-1.5" />
                <div>
                  <p className="text-white text-sm font-medium leading-snug">
                    {item.label}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Editorial scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-[10px] tracking-[0.18em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/15 overflow-hidden relative">
          <div className="absolute inset-0 bg-white/50 animate-scroll-reveal" />
        </div>
      </motion.div>
    </section>
  );
}
