import Link from "next/link";
import type { FAQItem as FAQItemData } from "@/static/faq/types";
import styles from "./FAQ.module.css";

export default function FAQItem({ item }: { item: FAQItemData }) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>
        <span>{item.question}</span>
        <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <path d="M5 12h14" />
          <path className={styles.vertical} d="M12 5v14" />
        </svg>
      </summary>
      <div className={styles.answer}>
        <p>{item.answer}</p>
        {item.links?.length ? (
          <ul className={styles.links}>
            {item.links.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
  );
}
