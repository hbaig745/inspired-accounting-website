import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, Section, P, Bullets } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Inspired Accounting (Gower Accountancy (Midlands) Ltd) collects, uses and protects your personal data, and your rights under UK GDPR.",
};

const linkClass =
  "text-steel underline underline-offset-2 decoration-steel/40 hover:decoration-steel hover:text-navy transition-colors";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="26 July 2026"
      lead={
        <>
          {`This policy explains how we collect, use, share and protect your personal information when you visit this website, get in touch with us, or become a client. We are committed to handling your data responsibly and in line with UK data protection law.`}
        </>
      }
    >
      <Section id="who-we-are" heading="Who we are">
        <P>
          {`Inspired Accounting is the trading name of Gower Accountancy (Midlands) Ltd, a company registered in England and Wales (company number 05968166), with its registered office at 250 Humberstone Road, Leicester, LE5 0EG. Our VAT number is 977430987. In this policy, "we", "us" and "our" refer to Inspired Accounting.`}
        </P>
        <P>
          {`We are the "data controller" responsible for your personal data collected through this website and in the course of providing our accountancy services.`}
        </P>
        <P>
          {`This policy is written to comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`}
        </P>
      </Section>

      <Section id="what-we-collect" heading="The information we collect">
        <P>{`Depending on how you interact with us, we may collect:`}</P>
        <Bullets
          items={[
            <>
              <strong>{`Enquiry details you give us. `}</strong>
              {`When you complete our contact form or arrange a discovery call, we collect your full name, email address, phone number, company name, the service you are interested in, and the content of your message.`}
            </>,
            <>
              <strong>{`Client and compliance information. `}</strong>
              {`If you become a client, we collect the information needed to provide our services and meet our legal obligations — including identification documents and proof of address for anti-money-laundering (AML) checks, along with financial, tax, payroll and business records relevant to your engagement.`}
            </>,
            <>
              <strong>{`Correspondence. `}</strong>
              {`Records of our communications with you, such as emails, letters, calls and messages.`}
            </>,
            <>
              <strong>{`Technical information. `}</strong>
              {`Basic technical data such as your IP address and browser type, collected by our hosting provider and through essential cookies. See our `}
              <Link href="/cookies" className={linkClass}>
                Cookie Policy
              </Link>
              {` for details.`}
            </>,
          ]}
        />
      </Section>

      <Section id="how-we-use" heading="How and why we use your information">
        <P>
          {`We only use your personal data where the law allows us to. The lawful bases we rely on are:`}
        </P>
        <Bullets
          items={[
            <>
              <strong>{`To respond to your enquiry `}</strong>
              {`and provide a quote or arrange a discovery call — on the basis of your consent and our legitimate interest in responding to prospective clients, or to take steps at your request before entering into a contract.`}
            </>,
            <>
              <strong>{`To provide our accountancy services `}</strong>
              {`and manage our relationship with you — because it is necessary to perform our contract with you.`}
            </>,
            <>
              <strong>{`To meet our legal and regulatory obligations `}</strong>
              {`— including anti-money-laundering checks, tax and accounting record-keeping, and responding to lawful requests from authorities.`}
            </>,
            <>
              <strong>{`To keep our records accurate and secure, and to improve our website `}</strong>
              {`— on the basis of our legitimate interests in running our business efficiently and securely.`}
            </>,
            <>
              <strong>{`To send you updates or marketing `}</strong>
              {`— only where you have given us your consent, which you can withdraw at any time.`}
            </>,
          ]}
        />
      </Section>

      <Section id="sharing" heading="Sharing your information">
        <P>
          {`We do not sell your personal data, and we will never share it with third parties for their own marketing. We may share your information with:`}
        </P>
        <Bullets
          items={[
            <>
              <strong>{`Trusted service providers (processors) `}</strong>
              {`who help us run our business under strict confidentiality — for example our website and form hosting provider (Netlify) and the accounting software we use to deliver our services (such as Xero and Dext). Our client work is carried out in-house; we do not outsource it to third-party processing centres.`}
            </>,
            <>
              <strong>{`HMRC, Companies House and other authorities `}</strong>
              {`where it is necessary to provide our services or to comply with a legal obligation.`}
            </>,
            <>
              <strong>{`Professional advisers and regulators `}</strong>
              {`where required, for example in connection with a regulatory review or to establish, exercise or defend legal claims.`}
            </>,
          ]}
        />
      </Section>

      <Section id="international-transfers" heading="International transfers">
        <P>
          {`Our website and contact form are hosted by Netlify, whose servers may be located outside the United Kingdom. Where your personal data is transferred outside the UK, we take steps to ensure it is protected by appropriate safeguards recognised under UK data protection law (such as an adequacy decision or the UK International Data Transfer Agreement).`}
        </P>
      </Section>

      <Section id="retention" heading="How long we keep your information">
        <P>
          {`We keep your personal data only for as long as we need it. If you make an enquiry but do not become a client, we keep your details for up to 12 months and then delete them. Where you become a client, we retain your records for at least six years after the end of our engagement, in order to meet HMRC, anti-money-laundering and other legal requirements, after which they are securely deleted or anonymised.`}
        </P>
      </Section>

      <Section id="security" heading="Keeping your information secure">
        <P>
          {`We take the security of your data seriously and use appropriate technical and organisational measures to protect it against loss, misuse and unauthorised access. Because our work is completed in-house rather than outsourced, your data stays with the people you actually deal with.`}
        </P>
      </Section>

      <Section id="your-rights" heading="Your rights">
        <P>{`Under UK data protection law, you have the right to:`}</P>
        <Bullets
          items={[
            `Access the personal data we hold about you`,
            `Ask us to correct information that is inaccurate or incomplete`,
            `Ask us to delete your data, where there is no legal reason for us to keep it`,
            `Restrict or object to how we use your data`,
            `Request that we transfer your data to another provider (data portability)`,
            `Withdraw your consent at any time, where we rely on consent`,
          ]}
        />
        <P>
          {`To exercise any of these rights, please contact us using the details below. You also have the right to complain to the ICO — see "How to contact us and complaints".`}
        </P>
      </Section>

      <Section id="cookies" heading="Cookies">
        <P>
          {`This website uses a small number of cookies. For full details of what we use and how to manage them, please see our `}
          <Link href="/cookies" className={linkClass}>
            Cookie Policy
          </Link>
          {`.`}
        </P>
      </Section>

      <Section id="other-sites" heading="Other websites and social media">
        <P>
          {`Our website contains links to other sites, including our social media pages. This privacy policy applies only to our website, so we encourage you to read the privacy policies of any other sites you visit — we are not responsible for their content or practices.`}
        </P>
      </Section>

      <Section id="children" heading="Children's privacy">
        <P>
          {`Our services and website are not directed at children, and we do not knowingly collect personal data relating to children under the age of 13. If you believe a child has provided us with their personal information, please contact us and we will delete it.`}
        </P>
      </Section>

      <Section id="changes" heading="Changes to this policy">
        <P>
          {`We may update this policy from time to time. Any changes will be posted on this page, with the "Last updated" date at the top revised accordingly.`}
        </P>
      </Section>

      <Section id="contact" heading="How to contact us and complaints">
        <P>
          {`If you have any questions about this policy, or wish to exercise your rights, you can reach us:`}
        </P>
        <Bullets
          items={[
            <>
              {`By post: Inspired Accounting, 250 Humberstone Road, Leicester, LE5 0EG`}
            </>,
            <>
              {`By phone: `}
              <a href="tel:01162206019" className={linkClass}>
                0116 220 6019
              </a>
            </>,
            <>
              {`By email: `}
              <a href="mailto:support@goweronline.co.uk" className={linkClass}>
                support@goweronline.co.uk
              </a>
              {` (for the attention of Javeed Baig)`}
            </>,
            <>
              {`Or via our `}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>
            </>,
          ]}
        />
        <P>
          {`If you are unhappy with how we have handled your personal data, you have the right to complain to the Information Commissioner's Office (ICO) at `}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            ico.org.uk
          </a>
          {`, or by calling their helpline on 0303 123 1113. We would, however, appreciate the chance to address your concerns first, so please do get in touch with us.`}
        </P>
      </Section>
    </LegalLayout>
  );
}
