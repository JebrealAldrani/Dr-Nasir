import type { Metadata } from "next";
import type { ExperienceMilestone } from "@/static";
import { absoluteUrl, DOCTOR_ENTITY_ID } from "@/static/site";

const archiveTitle = "Professional Experience | Dr. Naser Dib";
const archiveDescription = "Explore Dr. Naser Dib's professional milestones in phlebology, surgical oncology, medical education and clinical leadership.";

export function experienceMetadata(milestone?: ExperienceMilestone): Metadata {
  const title = milestone ? `${milestone.title} | Dr. Naser Dib` : archiveTitle;
  const description = milestone ? milestone.fullDescription : archiveDescription;
  const url = absoluteUrl(milestone ? `/experience/${milestone.slug}` : "/experience");
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { title, description, type: "website", ...(url ? { url } : {}) },
  };
}

export default function ExperienceSeo({ milestone }: { milestone?: ExperienceMilestone }) {
  const url = absoluteUrl(milestone ? `/experience/${milestone.slug}` : "/experience");
  if (!url) return null;
  const crumbs = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "Experience", item: absoluteUrl("/experience") },
    ...(milestone ? [{ name: milestone.title, item: url }] : []),
  ];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })),
      },
      {
        "@type": milestone ? "WebPage" : "CollectionPage",
        "@id": url,
        url,
        name: milestone?.title ?? "Professional Experience",
        description: milestone?.fullDescription ?? archiveDescription,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": DOCTOR_ENTITY_ID },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
