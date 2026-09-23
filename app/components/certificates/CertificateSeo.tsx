import type { Metadata } from "next";
import type { Certificate } from "@/static/certificates";
import { absoluteUrl, DOCTOR_ENTITY_ID } from "@/static/site";

export const archiveTitle = "Certificates & Qualifications | Dr. Naser Dib";
export const archiveDescription = "Explore Dr. Naser Dib’s certificates, surgical training and continuing medical education, with original documents and details of each educational record.";

export function certificateMetadata(certificate?: Certificate): Metadata {
  const title = certificate ? certificate.seo?.title ?? `${certificate.title} | Dr. Naser Dib` : archiveTitle;
  const description = certificate ? certificate.seo?.description ?? certificate.shortDescription : archiveDescription;
  const url = absoluteUrl(certificate ? `/certificates/${certificate.slug}` : "/certificates");
  const image = certificate && absoluteUrl(certificate.image);
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title, description, type: "website", ...(url ? { url } : {}),
      ...(image ? { images: [{ url: image, alt: certificate.imageAlt }] } : {}),
    },
  };
}

export default function CertificateSeo({ certificate }: { certificate?: Certificate }) {
  const url = absoluteUrl(certificate ? `/certificates/${certificate.slug}` : "/certificates");
  if (!url) return null;
  const breadcrumbs = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "Certificates", item: absoluteUrl("/certificates") },
    ...(certificate ? [{ name: certificate.title, item: url }] : []),
  ];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })),
      },
      {
        "@type": certificate ? "WebPage" : "CollectionPage",
        "@id": url, url,
        name: certificate?.title ?? "Certificates & Professional Qualifications",
        description: certificate?.shortDescription ?? archiveDescription,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": DOCTOR_ENTITY_ID },
        ...(certificate ? { primaryImageOfPage: { "@type": "ImageObject", contentUrl: absoluteUrl(certificate.image), caption: certificate.imageAlt } } : {}),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
