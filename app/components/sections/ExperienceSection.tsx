import ExperienceCard from "../cards/ExperienceCard";
import DeferredSectionAnimation from "../animation/DeferredSectionAnimation";
import { MILESTONES } from "@/static/index";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section
      id="experience-section"
      aria-labelledby="experience-title"
      className="section section-white py-12! md:py-9!"
    >
      <div className="site-container">
        {/* Heading */}
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
          <div className="flex flex-col gap-2">
            <span className="experience-eyebrow eyebrow">Key Milestones</span>

            <h2
              id="experience-title"
              className="experience-heading text-[clamp(2rem,2.8vw,2.65rem)]! text-secondary"
            >
              My Professional Journey
            </h2>
          </div>

          <p className="experience-description mb-0 max-w-[480px] text-text-secondary md:pb-1">
            Over 30 years of continuous professional growth and patient care.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline mt-10 mr-10 flex justify-center gap-6 md:mt-15 md:mr-0 md:flex-col md:items-center">
          {/* Timeline line */}
          <div
            className="
              experience-line
              ml-7
              w-0.5
              self-stretch
              bg-[#d4dbd7]

              md:ml-0
              md:mb-5
              md:h-0.5
              md:w-[calc(80%+20px)]
              md:self-auto
            "
          />

          <ol className="flex w-full flex-col justify-between gap-2 md:flex-row md:justify-center">
            {MILESTONES.map((milestone) => (
              <ExperienceCard key={milestone.title} milestone={milestone} />
            ))}
          </ol>
        </div>
        <div className="mt-9 flex justify-center md:mt-12">
          <Link href="/experience" className="btn-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Explore My Professional Journey <span aria-hidden="true">→</span></Link>
        </div>
      </div>

      <DeferredSectionAnimation section="experience" />
    </section>
  );
}
