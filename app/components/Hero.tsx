import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "./animation/HeroAnimation";
import { features } from "@/static/index";

export default function Hero() {
  return (
    <section
      id="home-hero"
      aria-labelledby="home-hero-title"
      className="hero isolate min-h-[760px] md:min-h-[720px] lg:min-h-[min(900px,92svh)]"
    >
      <Image
        src="/images/hero.webp"
        alt="Dr. Naser Dib"
        fill
        preload
        sizes="100vw"
        className="hero-doctor-image -z-20 object-cover object-[70%_top] sm:object-[65%_center] md:object-[62%_center] xl:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,color-mix(in_srgb,var(--background)_96%,transparent)_0%,color-mix(in_srgb,var(--background)_90%,transparent)_55%,color-mix(in_srgb,var(--background)_76%,transparent)_100%)] sm:bg-[linear-gradient(to_right,color-mix(in_srgb,var(--background)_96%,transparent)_0%,color-mix(in_srgb,var(--background)_86%,transparent)_48%,color-mix(in_srgb,var(--background)_32%,transparent)_100%)] md:bg-[linear-gradient(to_right,var(--background)_0%,color-mix(in_srgb,var(--background)_93%,transparent)_37%,color-mix(in_srgb,var(--background)_48%,transparent)_58%,transparent_78%)]"
      />

      <div className="hero-content site-container relative pb-14 pt-32 sm:pt-36 md:pb-20 lg:pt-44">
        <div className="max-w-[670px] sm:w-[64%] md:w-[57%] lg:w-[58%]">
          <p className="hero-doctor-name mb-4 font-serif text-xl leading-tight text-secondary sm:text-2xl">
            Dr. Naser Dib
          </p>

          <h1
            id="home-hero-title"
            className="hero-title text-[clamp(2.55rem,5.2vw,5.6rem)]! leading-[1.02]! md:leading-[0.98]!"
          >
            Specialist in General Surgery and Surgical Oncology
          </h1>

          <p className="hero-description max-w-[590px] text-base! leading-7! md:text-lg! md:leading-8!">
            Over 30 years of surgical experience, combining advanced medical
            knowledge with modern minimally invasive techniques and an
            individual approach to every patient.
          </p>

          <div className="hero-actions mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Link
              href="/contact"
              className="btn-primary w-full min-[420px]:w-auto focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
            >
              Book an Appointment{" "}
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span>
            </Link>
            <Link
              href="/experience"
              className="btn-secondary w-full min-[420px]:w-auto focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
            >
              Explore My Experience
            </Link>
          </div>
        </div>

        <ul className="mt-10 grid max-w-[720px] grid-cols-1 gap-x-6 gap-y-5 min-[420px]:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="hero-feature flex min-w-0 items-center gap-3"
            >
              <span
                className="icon-circle size-11! border border-secondary"
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <span className="text-[0.82rem] font-medium leading-snug text-secondary">
                <span className="block">{feature.title}</span>
                <span className="block">{feature.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <HeroAnimation />
    </section>
  );
}
