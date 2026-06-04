import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatementBanner from "@/components/home/StatementBanner";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUs from "@/components/home/WhyUs";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Inspired Accounting | Chartered Accountants Leicester",
  description:
    "Inspired Accounting — Chartered Certified Accountants in Leicester. Clarity, confidence and growth for ambitious businesses. Free discovery call available.",
  openGraph: {
    title: "Inspired Accounting | Chartered Accountants Leicester",
    description:
      "Helping talented business owners make, manage and multiply money. Chartered Certified Accountants based in Leicester since 2006.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatementBanner />
      <WhyUs />
      <ServicesOverview />
      <CTABanner />
    </>
  );
}
