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
      {/* Background photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-options/no-logo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Vertical window overlay — dark over number rows, transparent over white panel */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,38,63,0.75) 0%, rgba(12,38,63,0.75) 21%, rgba(12,38,63,0.05) 27%, rgba(12,38,63,0.05) 63%, rgba(12,38,63,0.75) 70%, rgba(12,38,63,0.75) 100%)" }} />
        {/* Top gradient — keeps navbar area fully dark */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0C263F] to-transparent" />
      </div>

      {/* Centred content — shifted down 5vh */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
        style={{ transform: "translateY(7.5vh)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="mb-3 md:mb-4 pt-4 md:pt-6"
        >
          <Image
            src="/logos/Inspired Accounting Logo Full Color.svg"
            alt="Inspired Accounting"
            width={480}
            height={216}
            className="w-80 sm:w-[420px] md:w-[560px] h-auto"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="font-baskerville text-xl sm:text-2xl md:text-3xl text-navy leading-snug mb-4 font-bold"
        >
          Leicester&apos;s trusted accountants
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="text-navy text-[clamp(0.55rem,1.5vw,0.9rem)] tracking-[0.15em] uppercase whitespace-nowrap font-bold mb-5 md:mb-6"
        >
          Chartered Certified Accountants · Est. 2006
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="flex flex-col items-center gap-3 pt-10 md:pt-14"
        >
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-9 py-5 rounded-full bg-taupe text-white text-base font-medium tracking-wide transition-[background-color,transform] duration-200 hover:bg-[#968a7c] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-taupe"
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
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-white/65 hover:text-white text-lg font-medium tracking-wide transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel rounded"
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
          className="mt-4 md:mt-5"
        >
          <Link
            href="/case-studies"
            className="text-white/45 text-lg tracking-wide focus-visible:outline-none"
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
