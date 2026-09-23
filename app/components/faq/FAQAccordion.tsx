import type { FAQItem as FAQItemData } from "@/static/faq/types";
import FAQItem from "./FAQItem";
import styles from "./FAQ.module.css";

export default function FAQAccordion({ items }: { items: readonly FAQItemData[] }) {
  if (!items.length) return null;
  return <div className={styles.accordion} data-faq-accordion>{items.map((item) => <FAQItem key={item.question} item={item} />)}</div>;
}
