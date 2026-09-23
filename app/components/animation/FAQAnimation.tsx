"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function FAQAnimation({ scopeId }: { scopeId: string }) {
  useGSAP(() => {
    const section = document.getElementById(scopeId);
    if (!section) return;

    let revealed = false;
    const media = gsap.matchMedia();
    media.add(
      {
        mobile: "(max-width: 767px)",
        desktop: "(min-width: 768px)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduce || revealed) return;
        const intro = section.querySelectorAll("[data-faq-intro] > *");
        const rows = section.querySelectorAll("[data-faq-accordion] > details");
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.55 },
          onComplete: () => {
            revealed = true;
            gsap.set([...intro, ...rows], { clearProps: "opacity,transform" });
          },
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        });

        // Opacity preserves keyboard access; focusing the section finishes the reveal.
        // Content stays visible in the server HTML and when motion is reduced.
        timeline
          .from(intro, { opacity: 0, y: 12, stagger: 0.07 })
          .from(rows, {
            opacity: 0,
            y: context.conditions?.mobile ? 12 : 20,
            stagger: 0.07,
          }, 0.15);

        const revealOnFocus = () => { timeline.progress(1); };
        section.addEventListener("focusin", revealOnFocus);
        if (section.contains(document.activeElement)) revealOnFocus();
        return () => section.removeEventListener("focusin", revealOnFocus);
      },
    );

    return () => media.revert();
  }, { dependencies: [scopeId], revertOnUpdate: true });

  return null;
}
