import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { expertise } from "../../static/index";
import FAQSection from "../components/faq/FAQSection";
import { servicesFaq } from "@/static/faq/servicesFaq";

export const metadata: Metadata = {
  title: "Areas of Expertise | Dr Naser Dib",
  description:
    "Explore Dr Naser Dib’s areas of medical expertise and approach to patient care.",
};

export default function ExpertisePage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="section section-cream pt-36! md:pt-44!"
          aria-labelledby="expertise-page-title"
        >
          <div className="site-container">
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
            >
              <span aria-hidden="true">←</span> Back to home
            </Link>
            <span className="eyebrow">Areas of Expertise</span>
            <h1
              id="expertise-page-title"
              className="mt-3 max-w-[800px] text-secondary"
            >
              Specialized Care Built Around the Patient
            </h1>
            <p className="mb-0 mt-6 max-w-[670px] text-lg text-text-secondary">
              Explore the areas of care shaped by decades of medical experience
              and an individual approach to every patient.
            </p>
          </div>
        </section>

        <section
          className="section section-white"
          aria-label="Medical specialties"
        >
          <div className="site-container grid gap-7 md:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-28 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-[var(--shadow-xs)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-[clamp(1.75rem,2.5vw,2.25rem)] text-secondary">
                    {item.title}
                  </h2>
                  <p className="mb-0 mt-4 max-w-[60ch] text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <FAQSection
          id="expertise-faq"
          title="Understanding your options for care"
          description="Answers about the listed specialties and arranging a consultation suited to your concerns."
          items={servicesFaq}
          schema
          cta={{ label: "Discuss an Appointment", href: "/contact" }}
        />
      </main>
    </>
  );
}
