"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhyPatientsChooseAnimation() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("#why-patients-choose-section");
    if (!section) return;

    // Keep a completed reveal visible when crossing a responsive breakpoint.
    let revealed = false;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { mobile, reduceMotion } = context.conditions!;
          // HTML is visible by default, including without JavaScript.
          if (reduceMotion || revealed) return;

          const stagger = mobile ? 0.1 : 0.13;
          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => { revealed = true; },
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          });

          timeline
            .from(".care-eyebrow", { autoAlpha: 0, y: 12, duration: 0.4 })
            .from(".care-heading", {
              autoAlpha: 0, y: mobile ? 22 : 30, duration: 0.7,
            }, "-=0.2")
            .from(".care-description", {
              autoAlpha: 0, y: 18, duration: 0.55,
            }, "-=0.4")
            .from(".care-panel", {
              autoAlpha: 0,
              y: mobile ? 28 : 40,
              scale: 0.985,
              duration: mobile ? 0.6 : 0.75,
              stagger,
            }, "-=0.3")
            // One understated detail: the icon settles just after its panel.
            .from(".care-icon", {
              scale: 0.94, duration: 0.5, stagger,
            }, "<0.1");
        },
      );
      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return null;
}
