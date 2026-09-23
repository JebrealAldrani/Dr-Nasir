import Link from "next/link";
import { FEATURED_CERTIFICATES } from "@/static/certificates";
import CertificateCard from "../cards/CertificateCard";
import DeferredSectionAnimation from "../animation/DeferredSectionAnimation";
import styles from "../certificates/Certificates.module.css";

export default function CertificatesSection() {
  return (
    <section id="certificates-section" aria-labelledby="certificates-title" className="section section-cream">
      <div className="site-container">
        <header className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="certificate-eyebrow eyebrow">Professional Qualifications</span>
            <h2 id="certificates-title" className="certificate-heading">Certificates &amp; Continuing Education</h2>
          </div>
          <p className="certificate-description mb-0 max-w-[480px] md:pb-1">
            A selection of surgical training, professional records and continuing
            medical education, documented through the years.
          </p>
        </header>
        <ul className={`${styles.grid} ${styles.featured} mt-9 md:mt-12`}>
          {FEATURED_CERTIFICATES.map((certificate) => <CertificateCard key={certificate.slug} certificate={certificate} featured />)}
        </ul>
        <div className="certificate-cta mt-9 flex justify-center md:mt-12">
          <Link href="/certificates" className="btn-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            View All Certificates <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <DeferredSectionAnimation section="certificates" />
    </section>
  );
}
