import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-[#A89B8C]">
      {/* Main footer */}
      <div className="container-max section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" aria-label="Inspired Accounting — Home">
              <Image
                src="/logos/Inspired Accounting Logo w Tagline Negative.svg"
                alt="Inspired Accounting"
                width={220}
                height={100}
                className="h-16 w-auto mb-6"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Chartered Certified Accountants helping ambitious businesses in
              Leicester and across the UK make, manage and multiply money.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/GowerAccountancy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#A89B8C] hover:border-[#A89B8C]/50 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/javeed-baig-fcca-4a0b1a11/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#A89B8C] hover:border-[#A89B8C]/50 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/inspiredaccounts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#A89B8C] hover:border-[#A89B8C]/50 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7gpYOBAohfXYGRA1zHJsXg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#A89B8C] hover:border-[#A89B8C]/50 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@inspiredaccounting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#A89B8C] hover:border-[#A89B8C]/50 transition-colors duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-taupe mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-taupe mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="tel:01162206019"
                  className="hover:text-white transition-colors duration-200"
                >
                  0116 220 6019
                </a>
              </li>
              <li>
                <a
                  href="mailto:javeed@goweronline.co.uk"
                  className="hover:text-white transition-colors duration-200 break-all"
                >
                  javeed@goweronline.co.uk
                </a>
              </li>
              <li className="leading-relaxed">
                250 Humberstone Road
                <br />
                Leicester, LE5 0EG
              </li>
              <li className="text-white/40 text-xs pt-1">
                Mon – Fri: 9:00 – 18:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#A89B8C]/20">
        <div className="container-max section-padding py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/50 text-xs leading-relaxed max-w-xl">
            Inspired Accounting is the trading name of Gower Accountancy (Midlands) Ltd.
            Registered in England No. 05968166. VAT No. 977430987.
            Registered Address: 250 Humberstone Road, Leicester, LE5 0EG.
            Regulated by the Association of Chartered Certified Accountants.
          </p>
          <div className="flex items-center gap-6 flex-shrink-0">
            {legalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white/70 text-xs transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white/30 text-xs">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
