import type { Metadata } from "next";
import Header from "../components/Header";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/faq/FAQSection";
import { contactFaq } from "@/static/faq/contactFaq";

export const metadata: Metadata = {
  title: "Contact & Appointments | Dr. Naser Dib",
  description: "Contact Dr. Naser Dib's registration team, find visit locations and get practical answers about arranging your consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section section-cream pt-36! md:pt-44!" aria-labelledby="contact-page-title">
          <div className="site-container">
            <p className="eyebrow">Contact &amp; Appointments</p>
            <h1 id="contact-page-title" className="max-w-[800px]">Plan your visit with Dr. Naser Dib</h1>
            <p className="mb-0 mt-6 max-w-[670px] text-lg">Reach the registration team to discuss appointment availability and confirm the location of your consultation.</p>
          </div>
        </section>
        <ContactSection />
        <FAQSection
          id="contact-faq"
          title="Practical questions about your visit"
          description="A few details to help you arrange and prepare for your appointment."
          items={contactFaq}
          schema
        />
      </main>
    </>
  );
}
