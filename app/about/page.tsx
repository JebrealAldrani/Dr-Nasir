import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import AboutAnimation from "../components/about/AboutAnimation";
import AboutSeo from "../components/about/AboutSeo";
import styles from "../components/about/AboutPage.module.css";
import { CARE_REASONS, MILESTONES, expertise } from "@/static";
import { FEATURED_CERTIFICATES } from "@/static/certificates";
import { CONTACT_INFO, whatsappHref } from "@/static/contact";
import { absoluteUrl } from "@/static/site";

const title = "About Dr. Naser Dib | General Surgery & Surgical Oncology";
const description = "Learn about Dr. Naser Dib's surgical specialties, professional journey, qualifications and approach to patient care.";
const canonical = absoluteUrl("/about");
const image = absoluteUrl("/images/hero.webp");

export const metadata: Metadata = {
  title,
  description,
  ...(canonical ? { alternates: { canonical } } : {}),
  openGraph: { title, description, type: "profile", ...(canonical ? { url: canonical } : {}), ...(image ? { images: [{ url: image, alt: "Dr. Naser Dib" }] } : {}) },
};

const journeySlugs = ["phlebology", "doctor-of-medical-sciences", "head-of-surgical-oncology"];
const journey = journeySlugs.map((slug) => MILESTONES.find((item) => item.slug === slug)!);
const nasmed = MILESTONES.find((item) => item.slug === "co-founder-nasmed-clinic")!;
const degree = journey[1];
const currentRole = journey[2];
const certificates = FEATURED_CERTIFICATES.slice(0, 3);

export default function AboutPage() {
  const whatsappUrl = whatsappHref(CONTACT_INFO.whatsapp);
  return (
    <>
      <Header />
      <main id="about-page">
        <section className={`section section-white ${styles.hero}`} aria-labelledby="about-title">
          <div className={`site-container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav aria-label="Breadcrumb" className="about-breadcrumb text-sm text-text-secondary"><ol className="flex items-center gap-2"><li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-secondary">About</li></ol></nav>
              <span className="about-eyebrow eyebrow">Meet the Specialist</span>
              <h1 id="about-title" className="about-heading">About Dr. Naser Dib</h1>
              <p className={`${styles.heroLead} about-page-lead`}>Dr. Naser Dib is a specialist in General Surgery and Surgical Oncology with more than 30 years of professional experience.</p>
              <p className={`${styles.heroSupport} about-page-support`}>His work combines surgical practice, ongoing professional development and an individual approach to each patient.</p>
              <Link href="/experience" className={`btn-secondary about-hero-link ${styles.sectionButton}`}>Explore Professional Experience <span aria-hidden="true">→</span></Link>
            </div>
            <div className={`${styles.portrait} about-portrait`}><Image src="/images/hero.webp" alt="Dr. Naser Dib in a clinical setting" fill sizes="(min-width: 1024px) 42vw, (min-width: 640px) 48vw, 100vw" loading="eager" fetchPriority="high" className={styles.portraitImage} /></div>
          </div>
        </section>

        <section className={`section section-cream ${styles.profile}`} aria-labelledby="profile-title" data-about-reveal>
          <div className="site-container">
            <div className={styles.profileGrid}>
              <div data-about-heading><span className="eyebrow">Professional Profile</span><h2 id="profile-title">A career in surgical care</h2></div>
              <div className={styles.profileText} data-about-copy><p>Dr. Naser Dib’s professional history includes phlebology, the development of {nasmed.organization}’s surgical center, and a Doctor of Medical Sciences degree awarded in {degree.year}.</p><p>He leads the Surgical Oncology Department at {currentRole.organization}. His work in general and oncological surgery is supported by documented training and a focus on clear patient communication.</p><Link href="/experience" className={styles.textLink}>View the full professional journey <span aria-hidden="true">→</span></Link></div>
            </div>
            <dl className={styles.facts} data-about-items><div><dt>Specialties</dt><dd>General Surgery &amp; Surgical Oncology</dd></div><div><dt>Experience</dt><dd>More than 30 years</dd></div><div><dt>Current role</dt><dd>{currentRole.role}, {currentRole.organization}</dd></div></dl>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="about-journey-title" data-about-reveal>
          <div className="site-container"><div className={styles.sectionHeader} data-about-heading><div><span className="eyebrow">Selected Milestones</span><h2 id="about-journey-title">A professional journey</h2></div><p>Three stages from the complete professional timeline.</p></div>
            <ol className={styles.journey} data-about-items>{journey.map((item) => <li key={item.slug}><span className={styles.journeyYear}>{item.year}</span><h3>{item.title}</h3><p>{item.description}</p><Link href={`/experience/${item.slug}`} aria-label={`Read about ${item.title}`}>View milestone <span aria-hidden="true">→</span></Link></li>)}</ol>
            <Link href="/experience" className={`btn-secondary mt-8 ${styles.sectionButton}`} data-about-cta>Explore Professional Experience <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="section section-cream" aria-labelledby="about-expertise-title" data-about-reveal>
          <div className="site-container"><div className={styles.sectionHeader} data-about-heading><div><span className="eyebrow">Areas of Expertise</span><h2 id="about-expertise-title">Focused surgical and clinical care</h2></div><p>Explore the fields described in Dr. Naser Dib’s professional profile.</p></div>
            <ul className={styles.expertiseGrid} data-about-items>{expertise.map((item, index) => <li key={item.slug}><span className={styles.index}>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.summary}</p><Link href={`/expertise#${item.slug}`} aria-label={`Explore ${item.title}`}>Explore area <span aria-hidden="true">→</span></Link></li>)}</ul>
            <Link href="/expertise" className={`btn-secondary mt-8 ${styles.sectionButton}`} data-about-cta>Explore All Areas of Expertise <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="about-care-title" data-about-reveal>
          <div className="site-container"><div className={styles.sectionHeader} data-about-heading><div><span className="eyebrow">Patient-Centered Care</span><h2 id="about-care-title">An individual approach to care</h2></div><p>Clinical decisions begin with understanding the person, the condition and the available options.</p></div>
            <ul className={styles.careGrid} data-about-items>{CARE_REASONS.map((reason) => <li key={reason.id}><span className="icon-circle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5"><path d={reason.iconPath} /></svg></span><h3>{reason.title}</h3><p>{reason.description}</p></li>)}</ul>
          </div>
        </section>

        <section className="section section-cream" aria-labelledby="about-certificates-title" data-about-reveal>
          <div className="site-container"><div className={styles.sectionHeader} data-about-heading><div><span className="eyebrow">Documented Learning</span><h2 id="about-certificates-title">Qualifications &amp; continuing education</h2></div><p>Selected records from Dr. Naser Dib’s surgical training and professional development.</p></div>
            <ul className={styles.certificateList} data-about-items>{certificates.map((certificate) => <li key={certificate.slug}><span>{certificate.dateLabel ?? certificate.category}</span><div><h3>{certificate.title}</h3><p>{certificate.shortDescription}</p></div><Link href={`/certificates/${certificate.slug}`} aria-label={`View certificate: ${certificate.title}`}>View record <span aria-hidden="true">↗</span></Link></li>)}</ul>
            <Link href="/certificates" className={`btn-secondary mt-8 ${styles.sectionButton}`} data-about-cta>View All Certificates <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="about-contact-title" data-about-reveal>
          <div className={`site-container ${styles.closing}`}><div data-about-heading><span className="eyebrow">Next Step</span><h2 id="about-contact-title">Ready to discuss a consultation?</h2><p>Contact Dr. Naser Dib’s registration team on WhatsApp. Visit locations are listed at ECZ Otwock and ul. Grochowska 80/82 in Warszawa.</p></div><div className={styles.closingActions} data-about-cta>{whatsappUrl && <Link href={whatsappUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">Message on WhatsApp <span aria-hidden="true">↗</span></Link>}<Link href="/#contact-section" className="btn-secondary">Contact &amp; Locations <span aria-hidden="true">→</span></Link></div></div>
        </section>
        <AboutSeo />
        <AboutAnimation />
      </main>
    </>
  );
}
