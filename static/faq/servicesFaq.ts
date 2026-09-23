import type { FAQItem } from "./types";

export const servicesFaq = [
  {
    question: "Which area of expertise is relevant to my concern?",
    answer: "The expertise overview describes phlebology, surgical oncology, medical diagnostics and specialist consultation. If you are unsure which appointment to request, explain the reason for your enquiry to registration and ask which consultation to arrange.",
    links: [{ label: "Contact registration about a consultation", href: "/contact" }],
  },
  {
    question: "What does the phlebology service focus on?",
    answer: "Phlebology focuses on the diagnosis and treatment of venous disorders. Dr. Naser Dib's service description emphasizes an individual assessment and a discussion of suitable treatment options.",
    links: [{ label: "View the phlebology overview", href: "/expertise#phlebology" }],
  },
  {
    question: "How does Dr. Naser Dib describe his approach to surgical oncology?",
    answer: "Dr. Naser Dib's surgical oncology care is guided by clinical evaluation and clear communication about treatment. The service focuses on patients requiring oncological surgical care and discussion of the path ahead.",
    links: [{ label: "View the surgical oncology overview", href: "/expertise#surgical-oncology" }],
  },
  {
    question: "What is the role of medical diagnostics in treatment planning?",
    answer: "Medical diagnostics supports treatment decisions through clinical evaluation and diagnostic guidance. Findings are considered alongside each patient's history, symptoms and concerns.",
  },
  {
    question: "Can I discuss several concerns during a specialist consultation?",
    answer: "Let registration know that you would like to discuss several concerns when requesting your consultation. Ask whether the planned appointment can accommodate them or whether separate visits should be arranged.",
  },
  {
    question: "How can I confirm consultation length and follow-up arrangements?",
    answer: "Ask registration to confirm the time allocated for your visit. During the consultation, ask Dr. Naser Dib to clarify the proposed next steps, any preparation and any follow-up or aftercare instructions relevant to the care discussed.",
  },
] satisfies readonly FAQItem[];
