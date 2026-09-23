import { CARE_REASONS } from "@/static/index";
import DeferredSectionAnimation from "../animation/DeferredSectionAnimation";
import CareReasonCard from "../cards/CareReasonCard";
import styles from "./WhyPatientsChooseSection.module.css";

export default function WhyPatientsChooseSection() {
  return (
    <section
      id="why-patients-choose-section"
      aria-labelledby="why-patients-choose-title"
      className="section bg-card"
    >
      <div className="site-container">
        <header className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="care-eyebrow eyebrow">Patient-Centered Care</span>
            <h2 id="why-patients-choose-title" className="care-heading text-secondary">
              Why Patients Choose My Care
            </h2>
          </div>
          <p className="care-description mb-0 max-w-[480px] text-text-secondary md:pb-1">
            Experienced hands, modern treatment and the time to understand what
            matters to you.
          </p>
        </header>

        <ul className={`${styles.panels} mt-9 md:mt-12`}>
          {CARE_REASONS.map((reason) => (
            <CareReasonCard key={reason.id} reason={reason} />
          ))}
        </ul>
      </div>
      <DeferredSectionAnimation section="care" />
    </section>
  );
}
