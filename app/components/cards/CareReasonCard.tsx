import type { CareReason } from "@/static/index";
import styles from "../sections/WhyPatientsChooseSection.module.css";

export default function CareReasonCard({ reason }: { reason: CareReason }) {
  return (
    <li className={`care-panel ${styles.panel}`}>
      <span className="care-icon icon-circle" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
          aria-hidden="true"
          focusable="false"
        >
          <path d={reason.iconPath} />
        </svg>
      </span>
      <h3 className={styles.title}>{reason.title}</h3>
      <p className="mb-0 max-w-[38ch] text-base text-text-secondary">
        {reason.description}
      </p>
    </li>
  );
}
