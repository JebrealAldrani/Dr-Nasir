import Header from "../components/Header";
import CertificateCard from "../components/cards/CertificateCard";
import CertificateBreadcrumbs from "../components/certificates/CertificateBreadcrumbs";
import CertificateSeo, { certificateMetadata } from "../components/certificates/CertificateSeo";
import CertificatesAnimation from "../components/animation/CertificatesAnimation";
import styles from "../components/certificates/Certificates.module.css";
import { CERTIFICATES } from "@/static/certificates";

export const metadata = certificateMetadata();

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main id="certificates-archive">
        <section className="section section-cream pt-36! md:pt-44!" aria-labelledby="certificates-archive-title">
          <div className="site-container">
            <CertificateBreadcrumbs />
            <span className="certificate-eyebrow eyebrow">Professional Qualifications</span>
            <h1 id="certificates-archive-title" className="certificate-heading mt-3 max-w-[900px]">Certificates &amp; Professional Qualifications</h1>
            <p className="certificate-description mb-0 mt-6 max-w-[670px] text-lg">
              Explore Dr. Naser Dib’s surgical training, continuing medical education
              and professional records. Each entry includes the original document
              and the information it records.
            </p>
          </div>
        </section>
        <section className="section bg-card" aria-labelledby="all-certificates-title">
          <div className="site-container">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
              <h2 id="all-certificates-title">All Certificates</h2>
              <p className="mb-0 text-sm">{CERTIFICATES.length} documents</p>
            </div>
            <ul className={`${styles.grid} mt-9`}>
              {CERTIFICATES.map((certificate) => <CertificateCard key={certificate.slug} certificate={certificate} />)}
            </ul>
          </div>
        </section>
        <CertificateSeo />
        <CertificatesAnimation scopeId="certificates-archive" mode="archive" />
      </main>
    </>
  );
}
