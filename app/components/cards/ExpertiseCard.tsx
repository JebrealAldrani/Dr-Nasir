import Image from "next/image";
import Link from "next/link";
import type { Expertise } from "@/static/index";

export default function ExpertiseCard({ expertise }: { expertise: Expertise }) {
  return (
    <li className="expertise-card group relative isolate overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-[var(--shadow-sm)] transition-[transform,border-color,box-shadow] duration-300 hover:border-border-dark hover:shadow-[var(--shadow-md)]">
      <div className="absolute right-0 top-0 h-[82%] w-[76%]">
        <Image
          src={expertise.image}
          alt={expertise.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
          className="object-cover object-center transition-transform duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--card)_0%,var(--card)_30%,color-mix(in_srgb,var(--card)_96%,transparent)_50%,transparent_88%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,var(--card)_0%,color-mix(in_srgb,var(--card)_78%,transparent)_28%,transparent_75%)]"
      />

      <div className="relative z-10 w-[78%] px-5 pb-16 pt-6 sm:px-7 lg:px-5 xl:px-6">
        <span
          className="mb-5 block h-0.5 w-10 rounded-full bg-primary transition-[width] duration-300 motion-reduce:transition-none motion-safe:group-hover:w-14"
          aria-hidden="true"
        />
        <h3 className="text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.12] text-secondary lg:text-[1.5rem]">
          {expertise.title}
        </h3>
        <p className="mb-0 mt-4 text-[0.88rem] leading-[1.6] text-text-secondary">
          {expertise.summary}
        </p>
      </div>

      <Link
        href={`/expertise#${expertise.slug}`}
        aria-label={`Learn more about ${expertise.title}`}
        className="absolute bottom-5 right-5 z-20 flex size-12 items-center justify-center rounded-full border border-primary bg-white text-text-light shadow-[var(--shadow-sm)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary motion-reduce:transition-none motion-safe:hover:-translate-y-1"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </Link>
    </li>
  );
}
