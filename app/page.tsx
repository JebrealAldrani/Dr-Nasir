import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceSection from "./components/sections/ExperienceSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import WhyPatientsChooseSection from "./components/sections/WhyPatientsChooseSection";
import CertificatesSection from "./components/sections/CertificatesSection";
import ContactSection from "./components/sections/ContactSection";
import FAQSection from "./components/faq/FAQSection";
import { homeFaq } from "@/static/faq/homeFaq";

const Home = () => {
  return (
    <div className=" flex flex-col">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <ExpertiseSection />
        <WhyPatientsChooseSection />
        <CertificatesSection />
        <FAQSection
          id="home-faq"
          title="A little clarity before your visit"
          description="Learn about Dr. Naser Dib's areas of care, consultations and appointment enquiries."
          items={homeFaq}
          schema
          cta={{ label: "Arrange a Consultation", href: "/contact" }}
        />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
