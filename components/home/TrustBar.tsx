"use client";

import { motion } from "framer-motion";

const credentials = [
  { label: "FCCA Qualified", detail: "Director: Javeed Baig" },
  { label: "ACCA Regulated", detail: "Chartered Certified" },
  { label: "Founded 2006", detail: "18+ years of expertise" },
  { label: "5 Accountants", detail: "All in-house, no outsourcing" },
  { label: "Reg. No. 5968166", detail: "Registered in England" },
];

export default function TrustBar() {
  return (
    <section className="bg-taupe" aria-label="Credentials">
      <div className="container-max section-padding py-6">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
          {credentials.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 flex-shrink-0"
            >
              {i > 0 && (
                <span className="w-px h-8 bg-navy/20 flex-shrink-0" aria-hidden="true" />
              )}
              <div>
                <p className="text-navy text-sm font-semibold whitespace-nowrap">
                  {item.label}
                </p>
                <p className="text-navy/50 text-xs whitespace-nowrap">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
