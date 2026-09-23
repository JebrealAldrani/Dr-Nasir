import Link from "next/link";
import type { FAQItem, FAQLink } from "@/static/faq/types";
import FAQAccordion from "./FAQAccordion";
import FAQSchema from "./FAQSchema";
import styles from "./FAQ.module.css";
import DeferredSectionAnimation from "../animation/DeferredSectionAnimation";

type FAQSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly FAQItem[];
  schema?: boolean;
  className?: string;
  cta?: FAQLink;
};

export default function FAQSection({ id, eyebrow = "Frequently Asked Questions", title, description, items, schema = false, className = "", cta }: FAQSectionProps) {
  if (!items?.length) return null;
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`section ${styles.section} ${className}`}>
      <div className={`site-container ${styles.layout}`}>
        <header className={styles.intro} data-faq-intro>
          <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          {cta && <Link className={`btn-secondary ${styles.cta}`} href={cta.href}>{cta.label}<span aria-hidden="true">→</span></Link>}
        </header>
        <FAQAccordion items={items} />
      </div>
      {schema && <FAQSchema items={items} />}
      <DeferredSectionAnimation section="faq" scopeId={id} />
    </section>
  );
}
