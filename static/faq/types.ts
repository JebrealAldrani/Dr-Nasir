export type FAQLink = {
  label: string;
  href: `/${string}`;
};

export type FAQItem = {
  question: string;
  answer: string;
  links?: readonly FAQLink[];
};
