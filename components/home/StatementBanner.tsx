"use client";

import { motion } from "framer-motion";

export default function StatementBanner() {
  return (
    <section
      className="w-full py-16 md:py-20 px-6"
      style={{ backgroundColor: "rgb(238,234,229)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-baskerville text-3xl sm:text-4xl md:text-5xl text-navy font-bold mb-4">
          Accounting done right.
        </h2>
        <p className="text-navy/60 text-lg sm:text-xl md:text-2xl leading-relaxed">
          When accounting is done right, it is both simple and powerful.
        </p>
      </motion.div>
    </section>
  );
}
