"use client";

import { useState } from "react";

const services = [
  "Limited Company Accounts",
  "Self Assessment / Sole Trader",
  "Outsourced Accountancy",
  "VAT",
  "Payroll",
  "Business Start-Up",
  "Other",
];

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // TODO: Connect contact form to CRM once Mitesh confirms the system and integration method
      // For now, submitting to Formspree — replace action URL with real endpoint
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-steel/10 flex items-center justify-center mx-auto mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-steel">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-baskerville text-2xl text-navy mb-2">Message received</h3>
        <p className="text-navy/55 text-sm">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-navy/60 tracking-wide uppercase">
            Full name <span className="text-steel" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="px-4 py-3 rounded-lg border border-[rgba(168,155,140,0.35)] bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-steel/50 focus:border-steel transition-colors duration-200"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-navy/60 tracking-wide uppercase">
            Email <span className="text-steel" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="px-4 py-3 rounded-lg border border-[rgba(168,155,140,0.35)] bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-steel/50 focus:border-steel transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-navy/60 tracking-wide uppercase">
            Phone <span className="text-navy/30 text-xs normal-case">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="px-4 py-3 rounded-lg border border-[rgba(168,155,140,0.35)] bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-steel/50 focus:border-steel transition-colors duration-200"
            placeholder="0116 000 0000"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-medium text-navy/60 tracking-wide uppercase">
            Company name <span className="text-navy/30 text-xs normal-case">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="px-4 py-3 rounded-lg border border-[rgba(168,155,140,0.35)] bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-steel/50 focus:border-steel transition-colors duration-200"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-xs font-medium text-navy/60 tracking-wide uppercase">
          Service interested in
        </label>
        <select
          id="service"
          name="service"
          className="px-4 py-3 rounded-lg border border-[rgba(168,155,140,0.35)] bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/50 focus:border-steel transition-colors duration-200 appearance-none"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-navy/60 tracking-wide uppercase">
          Message <span className="text-steel" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="px-4 py-3 rounded-lg border border-[rgba(168,155,140,0.35)] bg-white text-navy text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-steel/50 focus:border-steel transition-colors duration-200 resize-none"
          placeholder="Tell us about your situation and what you're looking for..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 rounded border-taupe/40 text-steel focus:ring-steel/50"
        />
        <label htmlFor="consent" className="text-sm text-navy/55 leading-relaxed">
          I agree to being contacted regarding my enquiry. We will never share
          your details with third parties.
        </label>
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or call us on 0116 220 6019.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "sending"}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-steel active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
      >
        {formState === "sending" ? "Sending..." : "Send message"}
        {formState !== "sending" && (
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
            <svg width="11" height="11" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </button>
    </form>
  );
}
