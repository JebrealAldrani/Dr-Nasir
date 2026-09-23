import { CONTACT_INFO } from "@/static/contact";
import { expertise } from "@/static";
import type { FAQItem } from "./types";

export const homeFaq = [
  {
    question: "What areas of care does Dr. Naser Dib offer?",
    answer: `${CONTACT_INFO.doctorName}'s listed areas of expertise include ${expertise.map((item) => item.title.toLowerCase()).join(", ")}. His professional profile focuses on general surgery and surgical oncology.`,
    links: [{ label: "Explore all areas of expertise", href: "/expertise" }],
  },
  {
    question: "What can I expect from a specialist consultation?",
    answer: "A specialist consultation focuses on your condition, concerns and treatment options. Dr. Naser Dib's approach includes clinical evaluation and a discussion of the next steps in care.",
  },
  {
    question: "How are treatment options considered?",
    answer: "Treatment decisions are guided by clinical evaluation and each patient's individual needs. A consultation provides an opportunity to discuss your concerns and understand the options being considered.",
    links: [{ label: "Learn about Dr. Naser Dib's approach to care", href: "/about" }],
  },
  {
    question: "How can I request an appointment with Dr. Naser Dib?",
    answer: "Contact the registration team by phone, WhatsApp or email to request an appointment. Ask the team to confirm availability and the location of your visit.",
    links: [{ label: "View appointment contact details", href: "/contact" }],
  },
  {
    question: "Where can I find information about the doctor's background?",
    answer: "The About page introduces Dr. Naser Dib's background in general surgery and surgical oncology. The professional experience and certificates pages provide further details of his career and documented training.",
    links: [{ label: "View professional experience", href: "/experience" }, { label: "View certificates and training", href: "/certificates" }],
  },
  {
    question: "Where are the listed visit locations?",
    answer: `The website lists ${CONTACT_INFO.locations.map((location) => `${location.name} at ${location.address}`).join(" and ")}. Confirm the correct location with registration when arranging your appointment.`,
  },
] satisfies readonly FAQItem[];
