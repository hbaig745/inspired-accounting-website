import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Inspired Accounting. Arrange a free Discovery Call or send us an enquiry. Based in Leicester, serving businesses across the UK.",
};

/* Social profiles. Rendered here with the contact page's own tile treatment —
   the same taupe rounded squares as the phone/address/hours rows — rather than
   the footer's circular outlines on navy. */
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61551728076860",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/javeed-baig-fcca-4a0b1a11/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/inspiredaccounts/",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC7gpYOBAohfXYGRA1zHJsXg",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@inspiredaccounting",
    icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(168,155,140,0.15),transparent)]" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-taupe/20 to-transparent" />
          <div className="absolute inset-0 bg-taupe/[0.07]" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }} />
          <div className="absolute inset-0 bg-taupe/[0.08]" style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 58% 100%)" }} />
        </div>
        <div className="container-max section-padding relative z-10">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-taupe">
            Get in touch
          </span>
          <h1 className="mt-3 font-baskerville text-5xl md:text-6xl xl:text-7xl text-white leading-tight tracking-tight">
            Let&apos;s talk
          </h1>
          <p className="mt-6 text-white/55 text-lg max-w-lg leading-relaxed">
            Arrange your free Discovery Call, or simply send us a message. No
            obligation, no jargon.
          </p>
        </div>
      </section>

      {/* Contact split — full-bleed panels */}
      <section className="flex flex-col lg:flex-row" aria-label="Contact details and enquiry form">
        {/* Left: details — light taupe wash */}
        <div className="lg:w-[40%] bg-[rgb(238,234,229)] px-8 py-16 sm:px-12 lg:px-16 xl:px-20 lg:py-24">
          <h2 className="font-baskerville text-2xl text-navy mb-8">
            Contact details
          </h2>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-lg bg-[rgba(168,155,140,0.2)] flex items-center justify-center text-navy/70 flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="text-navy/70 text-xs mb-0.5">Phone</p>
                <a href="tel:01162206019" className="text-navy hover:text-steel transition-colors duration-200">
                  0116 220 6019
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-lg bg-[rgba(168,155,140,0.2)] flex items-center justify-center text-navy/70 flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <p className="text-navy/70 text-xs mb-0.5">Address</p>
                <address className="not-italic text-navy leading-relaxed">
                  250 Humberstone Road<br />
                  Leicester, LE5 0EG
                </address>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-lg bg-[rgba(168,155,140,0.2)] flex items-center justify-center text-navy/70 flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <div>
                <p className="text-navy/70 text-xs mb-0.5">Hours</p>
                <p className="text-navy">Mon – Fri: 9:00 – 18:00</p>
              </div>
            </li>
          </ul>

          {/* Social links — tiles match the contact rows above, aligned to the
              same left edge so they read as a continuation of the list */}
          <div className="mt-8">
            <p className="text-navy/70 text-xs mb-3">Follow us</p>
            <ul className="flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-[rgba(168,155,140,0.2)] flex items-center justify-center text-navy/70 hover:bg-navy hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/50"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location note */}
          <div className="mt-10 border-l-2 border-[#A89B8C] pl-5">
            <p className="text-navy/60 text-sm leading-relaxed">
              Based on the outskirts of the city centre, only a 5-minute walk
              from Leicester railway station. Ample parking available.
            </p>
          </div>

          {/* Map embed */}
          <div className="mt-8 rounded-lg overflow-hidden border border-[rgba(168,155,140,0.3)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.3!2d-1.1137425!3d52.6411445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM4JzI4LjEiTiAxwrAwNicyOS41Ilc!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gower Accountancy location map"
            />
          </div>
        </div>

        {/* Right: form — warm off-white */}
        <div className="flex-1 bg-[#FAF8F5] px-8 py-16 sm:px-12 lg:px-14 xl:px-16 lg:py-24">
          <h2 className="font-baskerville text-2xl text-navy mb-8">
            Send an enquiry
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
