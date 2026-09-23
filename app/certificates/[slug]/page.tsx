import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import CertificateCard from "../../components/cards/CertificateCard";
import CertificateBreadcrumbs from "../../components/certificates/CertificateBreadcrumbs";
import CertificateSeo, { certificateMetadata } from "../../components/certificates/CertificateSeo";
import CertificatesAnimation from "../../components/animation/CertificatesAnimation";
import styles from "../../components/certificates/Certificates.module.css";
import { CERTIFICATES, getCertificate, getRelatedCertificates } from "@/static/certificates";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CERTIFICATES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const certificate = getCertificate((await params).slug);
  if (!certificate) notFound();
  return certificateMetadata(certificate);
}

export default async function CertificatePage({ params }: Props) {
  const certificate = getCertificate((await params).slug);
  if (!certificate) notFound();
  const related = getRelatedCertificates(certificate);
  const facts = [
    ["Named recipient", "Dr. Naser Dib"],
    ["Institution / organisation", certificate.institution],
    ["Document / event date", certificate.dateLabel],
    ["Field", certificate.category],
    ["Document type", certificate.kind],
    ["Location", certificate.location],
    ["Credential ID", certificate.credentialId],
  ].filter(([, value]) => value);

  return (
    <>
      <Header />
      <main id="certificate-detail">
        <section className="section section-cream pt-36! md:pt-44!" aria-labelledby="certificate-title">
          <div className="site-container">
            <CertificateBreadcrumbs title={certificate.title} />
            <span className="certificate-eyebrow eyebrow">{certificate.category}{certificate.date ? ` · ${certificate.date.slice(0, 4)}` : ""}</span>
            <h1 id="certificate-title" className="certificate-heading mt-3 max-w-[960px]">{certificate.title}</h1>
            <p className="certificate-description mb-0 mt-6 max-w-[720px] text-lg">{certificate.shortDescription}</p>
            <div className="mt-10 grid items-start gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
              <figure className="certificate-document m-0 min-w-0">
                <div className={styles.document}>
                  <Image src={certificate.image || "/images/certificates/document-unavailable.svg"} alt={certificate.imageAlt} fill preload sizes="(min-width: 1320px) 699px, (min-width: 1024px) 54vw, 92vw" className="object-contain p-4 sm:p-6" />
                </div>
                <figcaption className="mt-4 text-sm text-text-secondary">
                  Original document · <Link href={certificate.image} className="text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">View full-size scan</Link>
                </figcaption>
              </figure>
              <div className="certificate-facts min-w-0">
                <h2 className="mb-6 text-[2rem]">Certificate Details</h2>
                <dl className={styles.facts}>
                  {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{label === "Document / event date" && certificate.date ? <time dateTime={certificate.date}>{value}</time> : value}</dd></div>)}
                  {certificate.credentialUrl && <div><dt>Verification</dt><dd><Link href={certificate.credentialUrl} className="text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">View issuer’s credential record</Link></dd></div>}
                </dl>
                {certificate.skills?.length ? <div className="mt-7"><h3 className="text-xl">Topics Covered</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-text-secondary">{certificate.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div> : null}
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-card" aria-labelledby="about-certificate-title">
          <div className="site-container">
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] md:gap-12">
              <h2 id="about-certificate-title">About This Certificate</h2>
              <p className="mb-0 max-w-[70ch]">{certificate.fullDescription}</p>
            </div>
            {related.length > 0 && <section className="mt-16 border-t border-border pt-12" aria-labelledby="related-certificates-title">
              <h2 id="related-certificates-title">Related Certificates</h2>
              <p className="mt-3">More documents in {certificate.category.toLowerCase()}.</p>
              <ul className={`${styles.grid} mt-8`}>{related.map((item) => <CertificateCard key={item.slug} certificate={item} />)}</ul>
            </section>}
            <Link href="/certificates" className="btn-secondary mt-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><span aria-hidden="true">←</span> Back to All Certificates</Link>
          </div>
        </section>
        <CertificateSeo certificate={certificate} />
        <CertificatesAnimation key={certificate.slug} scopeId="certificate-detail" mode="detail" />
      </main>
    </>
  );
}
