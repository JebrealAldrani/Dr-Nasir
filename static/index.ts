import { createElement } from "react";
import type { ReactNode } from "react";

export type ExperienceMilestone = {
  year: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: ReactNode;
  role?: string;
  organization?: string;
  location?: string;
  relatedExpertise?: string;
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/#contact-section" },
];

export const MILESTONES: ExperienceMilestone[] = [
  {
    year: "1992",
    title: "Phlebology",
    slug: "phlebology",
    description:
      "Specialized in the diagnosis and treatment of venous diseases.",
    fullDescription:
      "The 1992 milestone marks Dr. Naser Dib's work in phlebology, focused on the diagnosis and treatment of venous diseases.",
    relatedExpertise: "phlebology",
    icon: createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "M6 3v5a6 6 0 0 0 12 0V3M4 3h4m8 0h4M12 14v2a4 4 0 0 0 8 0v-1",
      }),
      createElement("circle", { cx: "20", cy: "13", r: "2" }),
    ),
  },
  {
    year: "2012",
    title: "Co-Founder of NASMED Clinic",
    slug: "co-founder-nasmed-clinic",
    description: "Helped develop NASMED's modern surgical center.",
    fullDescription:
      "In 2012, Dr. Naser Dib co-founded NASMED Clinic and helped develop its surgical center.",
    role: "Co-Founder",
    organization: "NASMED Clinic",
    // TODO: Add a verified location and fuller role details if supplied.
    icon: createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M17 9h1a2 2 0 0 1 2 2v10M2 21h20M9 8h3m-1.5-1.5v3M8 13h1m4 0h1m-5 4h1m3 0h1",
      }),
    ),
  },
  {
    year: "2014",
    title: "Doctor of Medical Sciences",
    slug: "doctor-of-medical-sciences",
    description: "Awarded the Doctor of Medical Sciences degree.",
    fullDescription:
      "Dr. Naser Dib was awarded the Doctor of Medical Sciences degree in 2014.",
    // TODO: Add the awarding institution and supporting details if verified.
    icon: createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "m2 9 10-5 10 5-10 5L2 9ZM6 11v5c3.5 3 8.5 3 12 0v-5M22 9v7",
      }),
    ),
  },
  {
    year: "2020",
    title: "Surgical Oncology",
    slug: "surgical-oncology",
    description:
      "Specialized in surgical oncology and expanded oncological care.",
    fullDescription:
      "In 2020, Dr. Naser Dib specialized in surgical oncology and expanded his work in oncological care.",
    relatedExpertise: "surgical-oncology",
    icon: createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "M8 3h8l3 5-7 6-7-6 3-5ZM9 13l-2 8 5-3 5 3-2-8M9 7h6",
      }),
    ),
  },
  {
    year: "Today",
    title: "Head of Surgical Oncology",
    slug: "head-of-surgical-oncology",
    description: "Leads the Surgical Oncology Department at ECZ Otwock.",
    fullDescription:
      "Dr. Naser Dib leads the Surgical Oncology Department at ECZ Otwock, where his work focuses on surgical oncology.",
    role: "Head of Surgical Oncology",
    organization: "ECZ Otwock",
    location: "Otwock",
    relatedExpertise: "surgical-oncology",
    icon: createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M10 21v-5h4v5M9 8h6m-3-3v6",
      }),
    ),
  },
];

export function getMilestone(slug: string) {
  return MILESTONES.find((milestone) => milestone.slug === slug);
}

export const expertise = [
  {
    slug: "phlebology",
    title: "Phlebology",
    summary: "Thoughtful care for venous health and circulation.",
    description:
      "Diagnosis and treatment of venous disorders with an individualized approach to patient care. Each consultation starts with a careful assessment and a discussion of suitable treatment options.",
    image: "/images/expertise/phelbology.webp",
    imageAlt: "Clinician preparing a venous treatment",
  },
  {
    slug: "surgical-oncology",
    title: "Surgical Oncology",
    summary: "Focused surgical care through every step of treatment.",
    description:
      "Comprehensive surgical care for patients requiring oncological treatment. Decisions are guided by clinical evaluation and clear communication about the path ahead.",
    image: "/images/expertise/surgical-oncology.webp",
    imageAlt: "Surgical team working in an operating room",
  },
  {
    slug: "medical-diagnostics",
    title: "Medical Diagnostics",
    summary: "Careful evaluation to guide informed decisions.",
    description:
      "Careful clinical evaluation and diagnostic guidance support accurate treatment decisions. Findings are considered in the context of each patient’s history, symptoms, and concerns.",
    image: "/images/expertise/medical-diagnostics.webp",
    imageAlt: "Medical team in a clinical setting",
  },
  {
    slug: "specialist-consultation",
    title: "Specialist Consultation",
    summary: "Personal advice shaped around your individual needs.",
    description:
      "Personalized medical consultation focuses on each patient’s condition, concerns, and treatment options. There is time to discuss questions and understand the next steps in care.",
    image: "/images/expertise/speacialist-consultaion.webp",
    imageAlt: "Doctor speaking with a patient during a consultation",
  },
] as const;

export const features = [
  {
    title: "Professional Care",
    detail: "at Every Stage",
    icon: createElement(
      "svg",
      {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "M12 2.5 20 6v5.5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6l8-3.5Z",
      }),
      createElement("path", { d: "m8.6 11.8 2.2 2.2 4.6-4.8" }),
    ),
  },
  {
    title: "Modern Treatment",
    detail: "Methods",
    icon: createElement(
      "svg",
      {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", { d: "M3 12h4l2.5-5 4.2 10 2.5-5H21" }),
      createElement("circle", { cx: "12", cy: "12", r: "9.5" }),
    ),
  },
  {
    title: "Individual",
    detail: "Patient Care",
    icon: createElement(
      "svg",
      {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "size-5",
      },
      createElement("path", {
        d: "M20.5 8.5c0 4.7-8.5 10.5-8.5 10.5S3.5 13.2 3.5 8.5a4.3 4.3 0 0 1 8.5-.8 4.3 4.3 0 0 1 8.5.8Z",
      }),
      createElement("path", { d: "M12 9.5v5M9.5 12h5" }),
    ),
  },
];

export type Expertise = (typeof expertise)[number];

export const CARE_REASONS = [
  {
    id: "individual-approach",
    title: "Individual Approach",
    description:
      "Every patient is unique. I take time to listen, understand and create a treatment plan tailored to your needs.",
    iconPath: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21v-2a7 7 0 0 1 14 0v2",
  },
  {
    id: "modern-treatment",
    title: "Modern Treatment Methods",
    description:
      "I use proven, modern surgical techniques, including minimally invasive and laparoscopic methods.",
    iconPath: "M8 3h8v4h4v10h-4v4H8v-4H4V7h4V3ZM9 12h6m-3-3v6",
  },
  {
    id: "experienced-specialist",
    title: "Experienced Specialist",
    description:
      "More than 30 years of practice, hundreds of patients and continuous development to ensure the highest standards of care.",
    iconPath:
      "M14 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 21v-3a7 7 0 0 1 14 0v3M17 4a3 3 0 0 1 0 6m3 4a5 5 0 0 1 2 4v3",
  },
] as const;

export type CareReason = (typeof CARE_REASONS)[number];
