import type { FAQItem } from "./types";

export const contactFaq = [
  {
    question: "Does sending an appointment enquiry confirm my booking?",
    answer: "Ask registration to confirm your appointment date, time and location after you send an enquiry. The contact options on this website let you reach the team; they do not provide an automated booking confirmation.",
    links: [{ label: "Find registration contact options", href: "/contact#contact-section" }],
  },
  {
    question: "Who should I contact to change an appointment?",
    answer: "Contact the registration team to request a change to your appointment. Ask about available alternatives and any rescheduling requirements that apply to your booking.",
  },
  {
    question: "How do I confirm what to bring and when to arrive?",
    answer: "Ask registration which documents or medical records are needed for your consultation and what arrival time to plan for. Confirm any visit-specific preparation directly with the team before attending.",
  },
  {
    question: "Where can I check the address and directions for my visit?",
    answer: "The contact section lists the hospital and consultation locations, with a directions link for each address. Check your confirmed appointment location before choosing directions.",
    links: [{ label: "View visit locations and directions", href: "/contact#contact-section" }],
  },
] satisfies readonly FAQItem[];
