import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import WhyUs from "@/components/home/WhyUs";
import AboutTeaser from "@/components/home/AboutTeaser";
import Testimonials from "@/components/home/Testimonials";
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
      <TrustBar />
      <ServicesOverview />
      <div className="h-px bg-taupe/20" aria-hidden="true" />
      <CaseStudiesPreview />
      <WhyUs />
      <AboutTeaser />
      <div className="h-px bg-taupe/20" aria-hidden="true" />
      <Testimonials />
      <CTABanner />
    </>
  );
}
