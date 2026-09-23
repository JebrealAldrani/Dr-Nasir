"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactAnimation() {
  useGSAP(() => {
    const section = document.getElementById("contact-section");
    if (!section) return;

    // The server HTML remains visible without JavaScript or with reduced motion.
    // Keep a completed reveal visible if the viewport crosses a breakpoint.
    let revealed = false;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          mobile: "(max-width: 767px)",
          desktop: "(min-width: 768px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduce || revealed) return;
          const mobile = context.conditions?.mobile;
          const select = gsap.utils.selector(section);
          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
              revealed = true;
              // Let the existing button hover transform take over after its reveal.
              gsap.set(select(".contact-primary"), { clearProps: "transform" });
            },
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          });

          timeline
            .from(select(".contact-eyebrow"), { autoAlpha: 0, y: 10, duration: 0.38 })
            .from(select(".contact-heading"), { autoAlpha: 0, y: mobile ? 19 : 29, duration: 0.66 }, "-=0.2")
            .from(select(".contact-description"), { autoAlpha: 0, y: 16, duration: 0.5 }, "-=0.42")
            .from(select(".contact-panel"), { autoAlpha: 0, y: mobile ? 22 : 34, duration: 0.66 }, "-=0.3")
            .from(select(".contact-map-frame"), { autoAlpha: 0, y: mobile ? 20 : 30, scale: 0.99, duration: 0.7 }, "-=0.56")
            .from(select(".contact-panel-intro"), { autoAlpha: 0, y: 14, duration: 0.45 }, "-=0.48")
            .from(select(".contact-primary"), { autoAlpha: 0, y: 18, duration: 0.52 }, "-=0.3")
            .from(select(".contact-method"), { autoAlpha: 0, y: 13, duration: 0.4, stagger: 0.09 }, "-=0.32")
            .from(select(".contact-urgent"), { autoAlpha: 0, y: 10, duration: 0.38 }, "-=0.25")
            .from(select(".contact-location-card"), { autoAlpha: 0, y: 16, duration: 0.48, stagger: 0.1 }, "-=0.42");
        },
      );
      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return null;
}
