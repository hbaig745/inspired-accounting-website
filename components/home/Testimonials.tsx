"use client";

import { motion } from "framer-motion";

/*
 * Genuine Google reviews for the practice (Gower Accountancy, ACCA — Leicester),
 * transcribed verbatim from the firm's Google Business profile
 * (4.8 average / 57 reviews). Do not paraphrase the quotes — their value is that
 * they are real. See https://www.google.com/search?q=Gower+Accountancy+ACCA+Leicester+reviews
 */
const GOOGLE_RATING = "4.8";
const GOOGLE_REVIEW_COUNT = 57;
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Gower+Accountancy+ACCA+Leicester+reviews";

type Review = {
  quote: string;
  author: string;
  initial: string;
  meta?: string;
  avatar: string; // background colour for the avatar
};

const reviews: Review[] = [
  {
    quote:
      "I had a great experience working with this team. I needed my accounts completed quickly, and they delivered exactly what I needed within a tight timeframe. What really stood out was how much they helped with VAT — they took a complex and potentially stressful situation and turned it into something simple, saving me a huge amount of time and hassle. Highly recommend their services if you're looking for efficiency, expertise, and peace of mind!",
    author: "Ahsan Shah",
    initial: "A",
    meta: "Local Guide",
    avatar: "#0C263F",
  },
  {
    quote:
      "Gower Accountancy has been our accountants for the last 10 years. They have supported our business to grow from a start-up to an established business. They recommended and assisted us to implement digital tools to streamline our operations and improve efficiency. The management team are always available to listen and assist us.",
    author: "Chocolate Café",
    initial: "C",
    avatar: "#4A789E",
  },
  {
    quote:
      "Javeed and Shirin are the two most important people supporting me to manage a financially successful charity. They understand our values and mission and advise us along the way. They have fantastic expertise and professionalism. Thank you Gower Accountancy.",
    author: "Suzanne Prince",
    initial: "S",
    avatar: "#A89B8C",
  },
  {
    quote:
      "Javeed was an incredible accountant. I had quite a complex tax return, and having never done a self assessment before, he helped me fix it. He was quick and easy to explain things. I really recommend his services.",
    author: "Grace Sobey",
    initial: "G",
    meta: "Local Guide",
    avatar: "#4A789E",
  },
  {
    quote:
      "I have been searching for an accountant who suits my small business needs for a while now and Gower is already feeling like a great match. Professional and straight talking in terms I can understand. Javeed is friendly and approachable which is ideal for a sole trader like myself. Highly recommended.",
    author: "Maya",
    initial: "M",
    avatar: "#0C263F",
  },
  {
    quote:
      "Awesome firm. Supported me in filling out a tax return and were both professional and highly responsive. They ensured I was clear on the process and provided additional guidance where needed. Highly recommend the firm and more specifically Javeed Baig.",
    author: "Amit Sinha",
    initial: "A",
    avatar: "#A89B8C",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.6l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="bg-[#FAF8F5] border-t-4 border-[#A89B8C] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-taupe">
              Verified Google reviews
            </span>
            <h2
              id="testimonials-heading"
              className="mt-3 font-baskerville text-4xl md:text-5xl text-navy leading-tight tracking-tight"
            >
              What our clients say
            </h2>
          </div>

          {/* Overall rating summary */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white border border-[rgba(168,155,140,0.35)] px-6 py-4 transition-colors duration-200 hover:border-taupe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel"
          >
            <GoogleG className="w-8 h-8 flex-shrink-0" />
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-baskerville text-2xl text-navy">
                  {GOOGLE_RATING}
                </span>
                <Stars />
              </div>
              <span className="text-taupe text-sm">
                Based on {GOOGLE_REVIEW_COUNT} Google reviews
                <span className="text-steel group-hover:text-navy transition-colors">
                  {" "}
                  · Read all
                </span>
              </span>
            </div>
          </a>
        </motion.div>

        {/* Masonry-style review wall */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6 break-inside-avoid bg-white border border-[rgba(168,155,140,0.3)] p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <figcaption className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                    style={{ backgroundColor: r.avatar }}
                    aria-hidden="true"
                  >
                    {r.initial}
                  </div>
                  <div className="leading-tight">
                    <p className="font-baskerville text-navy text-base">
                      {r.author}
                    </p>
                    {r.meta && (
                      <p className="text-taupe text-xs">{r.meta}</p>
                    )}
                  </div>
                </figcaption>
                <GoogleG className="w-5 h-5 flex-shrink-0 mt-1" />
              </div>

              <div className="mt-4">
                <Stars />
              </div>

              <blockquote className="mt-3">
                <p className="text-navy/70 text-[15px] leading-relaxed">
                  {r.quote}
                </p>
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
