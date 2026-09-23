"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutAnimation() {
  useGSAP(() => {
    const page = document.getElementById("about-page");
    if (!page) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (match) => {
          if (match.conditions?.reduce) return;

          const mobile = match.conditions?.mobile;
          const distance = mobile ? 16 : 24;
          const select = gsap.utils.selector(page);
          const hero = page.querySelector<HTMLElement>("section");

          if (hero) {
            gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: { trigger: hero, start: "top 90%", once: true },
              onComplete: () => gsap.set(select(".about-hero-link"), { clearProps: "transform" }),
            })
              .from(select(".about-breadcrumb"), { autoAlpha: 0, y: 8, duration: 0.36 })
              .from(select(".about-eyebrow"), { autoAlpha: 0, y: 10, duration: 0.4 }, "-=0.2")
              .from(select(".about-heading"), { autoAlpha: 0, y: distance, duration: 0.66 }, "-=0.24")
              .from(select(".about-page-lead"), { autoAlpha: 0, y: 14, duration: 0.5 }, "-=0.38")
              .from(select(".about-page-support"), { autoAlpha: 0, y: 12, duration: 0.46 }, "-=0.34")
              .from(select(".about-hero-link"), { autoAlpha: 0, y: 10, duration: 0.44 }, "-=0.28")
              .from(select(".about-portrait"), { autoAlpha: 0, y: distance, scale: 1.02, duration: 0.74 }, mobile ? "-=0.5" : "-=0.8");
          }

          page.querySelectorAll<HTMLElement>("[data-about-reveal]").forEach((section) => {
            const heading = section.querySelector<HTMLElement>("[data-about-heading]");
            const copy = section.querySelector<HTMLElement>("[data-about-copy]");
            const items = Array.from(section.querySelector("[data-about-items]")?.children ?? []);
            const cta = section.querySelector<HTMLElement>("[data-about-cta]");

            const timeline = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: { trigger: section, start: "top 82%", once: true },
              onComplete: () => {
                if (cta) gsap.set(cta, { clearProps: "transform" });
              },
            });

            if (heading) timeline.from(heading, { autoAlpha: 0, y: distance, duration: 0.58 });
            if (copy) timeline.from(copy, { autoAlpha: 0, y: distance * 0.75, duration: 0.54 }, "-=0.35");
            if (items.length) timeline.from(items, {
              autoAlpha: 0,
              y: mobile ? 14 : 20,
              duration: 0.54,
              stagger: mobile ? 0.06 : 0.09,
            }, "-=0.28");
            if (cta) timeline.from(cta, { autoAlpha: 0, y: 12, duration: 0.46 }, "-=0.18");
          });
        },
      );

      return () => media.revert();
    }, page);

    return () => context.revert();
  }, []);

  return null;
}
