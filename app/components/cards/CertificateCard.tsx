import Image from "next/image";
import Link from "next/link";
import type { Certificate } from "@/static/certificates";
import styles from "../certificates/Certificates.module.css";

export default function CertificateCard({ certificate, headingLevel = 3, featured = false }: {
  certificate: Certificate;
  headingLevel?: 2 | 3;
  featured?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <li className="certificate-card min-w-0">
      <article className={styles.card}>
        <Link href={`/certificates/${certificate.slug}`} className={styles.link} aria-label={`View ${certificate.title}`}>
          <div className={styles.image}>
            <div className={`certificate-image ${styles.imageInner}`}>
              <Image
                src={certificate.image || "/images/certificates/document-unavailable.svg"}
                alt={certificate.imageAlt}
                fill
                sizes={featured
                  ? "(min-width: 1280px) 296px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"
                  : "(min-width: 1320px) 411px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"}
                className="object-contain"
              />
            </div>
          </div>
          <div className={styles.content}>
            <span className="text-xs font-semibold tracking-wide text-primary">
              {certificate.category}{certificate.date ? ` · ${certificate.date.slice(0, 4)}` : ""}
            </span>
            <Heading className={styles.title}>{certificate.title}</Heading>
            {certificate.institution && <p className="mb-3 text-sm text-text-secondary">{certificate.institution}</p>}
            <p className="mb-6 text-sm text-text-secondary">{certificate.shortDescription}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View Certificate <span className={styles.arrow} aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </article>
    </li>
  );
}
