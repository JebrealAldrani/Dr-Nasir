import AnimatedYear from "../utils/AnimatedNumber";
import type { ExperienceMilestone } from "@/static";

type ExperienceCardProps = {
  milestone: ExperienceMilestone;
};

const ExperienceCard = ({ milestone }: ExperienceCardProps) => {
  return (
    <li
      key={milestone.year}
      className="experience-card relative md:w-1/5 flex flex-row md:flex-col lg:flex-row 
    gap-4
    rounded-[10px]
    border
    border-border
    bg-white
    px-5
    py-5
    shadow-[0_4px_14px_rgba(23,54,74,0.05)]
    transition-all
    duration-300
    hover:border-border-dark
    hover:shadow-[0_8px_22px_rgba(23,54,74,0.08)]
  "
    >
      {/* Icon */}
      <div className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-icon-bg text-icon md:hidden lg:flex">
        <span className="[&>svg]:size-[24px]">{milestone.icon}</span>
      </div>
      {/* Content */}
      <div className="min-w-0 flex-1">
        <span
          className="
        block
        font-serif
        text-[1.75rem]
        font-semibold
        leading-none
        tracking-[-0.02em]
        text-secondary
      "
        >
          <AnimatedYear year={milestone.year} />
        </span>

        <h3
          style={{ marginTop: "1rem", marginBottom: "0.5rem" }}
          className="
        mt-3
        font-serif
        text-[1.05rem]!
        font-medium
        leading-[1.2]
        text-secondary
      "
        >
          {milestone.title}
        </h3>

        <p
          className="
        text-[0.82rem]
        leading-[1.55]
        text-text-secondary
      "
        >
          {milestone.description}
        </p>
      </div>

      {/* Rounded dot in the middle of the line */}
      <div className="absolute size-5 rounded-full top-1/2 -translate-y-1/2 -left-9 md:-top-12 md:left-1/2 z-10 md:-translate-x-1/2 flex items-center justify-center border border-border-dark bg-white shadow-[0_4px_14px_rgba(23,54,74,0.05)]">
        <span className="size-3 rounded-full bg-primary " />
      </div>
    </li>
  );
};

export default ExperienceCard;
