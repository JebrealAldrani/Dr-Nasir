import ExpertiseCard from "../cards/ExpertiseCard";
import DeferredSectionAnimation from "../animation/DeferredSectionAnimation";
import { expertise } from "@/static/index";

export default function ExpertiseSection() {
  return (
    <section
      id="expertise-section"
      aria-labelledby="expertise-title"
      className="section section-cream overflow-hidden"
    >
      <div className="site-container">
        <header className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="expertise-eyebrow eyebrow">
              Areas of Expertise
            </span>

            <h2
              id="expertise-title"
              className="expertise-heading text-[clamp(2.1rem,3.5vw,3.6rem)] text-secondary"
            >
              Specialized Care
              <span className="block">Built Around the Patient</span>
            </h2>
          </div>

          <p className="expertise-description mb-0 max-w-[480px] text-text-secondary md:pb-1">
            More than three decades of medical experience, combined with focused
            care shaped around each patient’s needs.
          </p>
        </header>

        <ul className="expertise-grid mt-9 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {expertise.map((item) => (
            <ExpertiseCard key={item.slug} expertise={item} />
          ))}
        </ul>
      </div>

      <DeferredSectionAnimation section="expertise" />
    </section>
  );
}
