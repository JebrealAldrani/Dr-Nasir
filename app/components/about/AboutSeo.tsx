import { expertise } from "@/static";
import { CONTACT_INFO } from "@/static/contact";
import { absoluteUrl, DOCTOR_ENTITY_ID } from "@/static/site";

export default function AboutSeo() {
  const url = absoluteUrl("/about");
  if (!url || !DOCTOR_ENTITY_ID) return null;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "About", item: url },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": url,
        url,
        name: "About Dr. Naser Dib",
        description: "Dr. Naser Dib's background in general surgery, surgical oncology, professional development and patient care.",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": DOCTOR_ENTITY_ID },
      },
      {
        "@type": "Person",
        "@id": DOCTOR_ENTITY_ID,
        name: CONTACT_INFO.doctorName,
        image: absoluteUrl("/images/hero.webp"),
        jobTitle: "Specialist in General Surgery and Surgical Oncology",
        description: "Dr. Naser Dib is a specialist in general surgery and surgical oncology with more than 30 years of professional experience.",
        knowsAbout: expertise.map((item) => item.title),
        affiliation: { "@type": "MedicalOrganization", name: "ECZ Otwock" },
        contactPoint: { "@type": "ContactPoint", contactType: "appointments", telephone: CONTACT_INFO.registrationPhones[0].international },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
