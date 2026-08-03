import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSearchIndex } from "@/lib/search";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inspired Accounting | Chartered Accountants Leicester",
    template: "%s | Inspired Accounting",
  },
  description:
    "Inspired Accounting — Chartered Certified Accountants in Leicester. Expert tax, payroll, bookkeeping, and business advisory services for growing businesses.",
  keywords: [
    "accountants leicester",
    "chartered accountants",
    "ACCA accountants",
    "tax returns leicester",
    "bookkeeping leicester",
    "payroll services",
    "VAT returns",
    "business accountant",
  ],
  authors: [{ name: "Inspired Accounting" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Inspired Accounting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${libreBaskerville.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Navbar searchIndex={getSearchIndex()} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
