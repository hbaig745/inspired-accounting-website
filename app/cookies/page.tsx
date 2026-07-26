import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, Section, P, Bullets } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Inspired Accounting uses cookies on this website — essential cookies and the third-party cookies set by our embedded Google Map.",
};

const linkClass =
  "text-steel underline underline-offset-2 decoration-steel/40 hover:decoration-steel hover:text-navy transition-colors";

const cookieRows: { source: string; purpose: string; type: string; duration: string }[] = [
  {
    source: "Hosting & security (Netlify)",
    purpose:
      "Keeps the website running reliably and helps protect our contact form from spam and abuse.",
    type: "Strictly necessary",
    duration: "Session / short-lived",
  },
  {
    source: "Google Maps (Google)",
    purpose:
      "Displays the embedded map on our Contact page. Google may set cookies to remember settings and for security.",
    type: "Third-party / functional",
    duration: "Set and controlled by Google",
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated="26 July 2026"
      lead={
        <>
          {`This policy explains how and why we use cookies and similar technologies on this website. It should be read alongside our `}
          <Link href="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          {`.`}
        </>
      }
    >
      <Section id="what-are-cookies" heading="What are cookies?">
        <P>
          {`Cookies are small text files that a website places on your device when you visit. They are widely used to make websites work, to keep them secure, and to remember your preferences. Some cookies are set by the site you are visiting ("first-party" cookies), and others are set by third parties whose content is embedded in the page ("third-party" cookies).`}
        </P>
      </Section>

      <Section id="how-we-use" heading="How we use cookies">
        <P>
          {`We keep our use of cookies to a minimum. This website does not use analytics, advertising or tracking cookies, and we do not build profiles of visitors. The only cookies involved are those needed to run the site securely, plus third-party cookies set by the map we embed on our Contact page.`}
        </P>
      </Section>

      <Section id="cookies-we-use" heading="Cookies used on this site">
        <div className="overflow-x-auto -mx-1 px-1">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-navy border-b-2 border-taupe/40">
                <th className="py-3 pr-4 font-medium align-bottom">Source</th>
                <th className="py-3 pr-4 font-medium align-bottom">Purpose</th>
                <th className="py-3 pr-4 font-medium align-bottom whitespace-nowrap">Type</th>
                <th className="py-3 font-medium align-bottom whitespace-nowrap">Duration</th>
              </tr>
            </thead>
            <tbody>
              {cookieRows.map((row) => (
                <tr key={row.source} className="border-b border-taupe/20 align-top">
                  <td className="py-4 pr-4 text-navy font-medium">{row.source}</td>
                  <td className="py-4 pr-4 text-navy/70">{row.purpose}</td>
                  <td className="py-4 pr-4 text-navy/70">{row.type}</td>
                  <td className="py-4 text-navy/70">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          {`The Contact page includes an embedded Google Map so you can find our office. When that map loads, Google may set its own cookies. You can read more in `}
          <a
            href="https://policies.google.com/technologies/cookies"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {`Google's cookie information`}
          </a>
          {`.`}
        </P>
      </Section>

      <Section id="third-party-links" heading="Social media and external links">
        <P>
          {`Our site links to our social media profiles (such as Facebook, LinkedIn, Instagram, YouTube and TikTok). We do not embed tracking pixels from these platforms, but if you click through to them they will set their own cookies, governed by their own policies.`}
        </P>
      </Section>

      <Section id="managing-cookies" heading="Managing and disabling cookies">
        <P>
          {`You can control and delete cookies through your browser settings. Most browsers let you block or remove cookies, and to be warned before one is stored. To do this, look in the privacy or security settings of your browser:`}
        </P>
        <Bullets
          items={[
            <>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={linkClass}>Google Chrome</a>,
            </>,
            <>
              <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={linkClass}>Safari</a>,
            </>,
            <>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className={linkClass}>Mozilla Firefox</a>,
            </>,
            <>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className={linkClass}>Microsoft Edge</a>,
            </>,
          ]}
        />
        <P>
          {`Please note that blocking cookies may affect how parts of this or other websites work — for example, the embedded map on our Contact page may not display correctly.`}
        </P>
      </Section>

      <Section id="changes" heading="Changes to this policy">
        <P>
          {`We may update this Cookie Policy from time to time — for example, if we add new features to the website. Any changes will be posted here, with the "Last updated" date revised accordingly.`}
        </P>
      </Section>

      <Section id="contact" heading="Contact us">
        <P>
          {`If you have any questions about our use of cookies, please email us at `}
          <a href="mailto:support@goweronline.co.uk" className={linkClass}>
            support@goweronline.co.uk
          </a>
          {`, call us on `}
          <a href="tel:01162206019" className={linkClass}>
            0116 220 6019
          </a>
          {`, or get in touch via our `}
          <Link href="/contact" className={linkClass}>
            contact page
          </Link>
          {`.`}
        </P>
      </Section>
    </LegalLayout>
  );
}
