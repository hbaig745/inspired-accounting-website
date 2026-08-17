"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0C263F" }}
      aria-label="Hero"
    >
      {/* Background photo — desktop only */}
      <div className="hidden md:block absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-options/blank.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Uniform darken so the white logo card reads cleanly over the photo */}
        <div className="absolute inset-0 bg-navy/55" />
        {/* Top gradient — keeps navbar area fully dark */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0C263F] to-transparent" />
      </div>

      {/* Mobile background — geometric lines + ambient glow */}
      <div className="md:hidden absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(168,155,140,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_90%,rgba(74,120,158,0.10),transparent)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="400" y1="0" x2="50"  y2="800" stroke="white" strokeWidth="1" />
          <line x1="400" y1="0" x2="180" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="400" y1="100" x2="0" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="0"   y1="200" x2="400" y2="600" stroke="white" strokeWidth="0.4" />
        </svg>
      </div>

      {/* The whole block — logo bar, CTAs and rating — is centred in the hero by the
          section's justify-center, so the block's midpoint sits on 50vh. Mobile keeps
          a 7.5vh downward nudge; desktop sits dead centre. */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full mx-auto translate-y-[7.5vh] md:translate-y-0">
        {/* Logo + tagline sit on a white card at desktop (replaces the baked-in
            white panel); on mobile it's a plain transparent group over the dark bg */}
        {/* White logo bar: 80% white in the middle, fading to the navy hero on all
            four edges. The fade lives on a background layer (.hero-logo-bar) so the
            logo itself is never masked. */}
        <div className="relative flex flex-col items-center md:w-[90vw] md:max-w-none md:px-[4.8rem] md:py-[calc(4.2rem+5vh)] md:mb-2">
          <div className="hero-logo-bar hidden md:block absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="mb-3 md:mb-4 pt-4 md:pt-0"
            >
              {/* White logo on mobile (dark bg), full-colour on desktop (white card) */}
              <Image
                src="/logos/Inspired Accounting Logo Negative.svg"
                alt="Inspired Accounting"
                width={480}
                height={216}
                className="h-auto w-[82vw] sm:w-[65vw] max-w-[480px] md:hidden"
                priority
              />
              <Image
                src="/logos/Inspired Accounting Logo Full Color.svg"
                alt="Inspired Accounting"
                width={480}
                height={216}
                className="hidden md:block h-auto w-[37vw] max-w-[620px]"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
              className="font-baskerville text-xl sm:text-2xl md:text-3xl text-white md:text-navy leading-snug mb-4 font-bold"
            >
              Leicester&apos;s trusted accountants
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              className="text-white/80 md:text-navy text-[clamp(0.55rem,1.5vw,0.9rem)] tracking-[0.15em] uppercase whitespace-nowrap font-bold mb-5 md:mb-0"
            >
              Chartered Certified Accountants · Est. 2006
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="flex flex-col items-center gap-3 pt-10 md:pt-4"
        >
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-7 py-3.5 md:px-9 md:py-5 rounded-full bg-taupe text-white text-sm md:text-base font-medium tracking-wide transition-[background-color,transform] duration-200 hover:bg-[#968a7c] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe"
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
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-white/65 hover:text-white text-sm md:text-lg font-medium tracking-wide transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
          >
            Our Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-4 md:mt-2"
        >
          <Link
            href="/case-studies"
            className="text-white/45 text-sm md:text-lg tracking-wide focus-visible:outline-none"
          >
            ★★★★★&nbsp;&nbsp;Rated 5 stars by businesses
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
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
