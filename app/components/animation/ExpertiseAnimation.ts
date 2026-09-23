"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExpertiseAnimation() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("#expertise-section");

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, mobile, reduceMotion } = context.conditions!;

          if (reduceMotion) return;

          const cards = gsap.utils.toArray<HTMLElement>(
            ".expertise-card",
            section,
          );

          const images = gsap.utils.toArray<HTMLElement>(
            ".expertise-card-image",
            section,
          );

          /*
           * Initial states
           */

          gsap.set(".expertise-eyebrow", {
            autoAlpha: 0,
            y: 14,
          });

          gsap.set(".expertise-heading", {
            autoAlpha: 0,
            y: 32,
          });

          gsap.set(".expertise-description", {
            autoAlpha: 0,
            y: 22,
          });

          gsap.set(cards, {
            autoAlpha: 0,
            y: mobile ? 28 : 44,
            scale: 0.985,
          });

          if (images.length) {
            gsap.set(images, {
              scale: 1.06,
            });
          }

          /*
           * One ScrollTrigger
           * One complete animation
           */

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
            defaults: {
              ease: "power3.out",
            },
          });

          /*
           * Eyebrow
           */

          tl.to(".expertise-eyebrow", {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          });

          /*
           * Main heading
           */

          tl.to(
            ".expertise-heading",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power4.out",
            },
            "-=0.2",
          );

          /*
           * Description
           */

          tl.to(
            ".expertise-description",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
            },
            "-=0.5",
          );

          /*
           * Cards
           */

          tl.to(
            cards,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,

              duration: 0.75,

              stagger: desktop
                ? {
                    each: 0.11,
                    from: "start",
                  }
                : {
                    each: 0.09,
                    from: "start",
                  },

              ease: "power3.out",
            },
            "-=0.25",
          );

          /*
           * Image settling animation
           */

          if (images.length) {
            tl.to(
              images,
              {
                scale: 1,
                duration: 1.1,
                stagger: 0.1,
                ease: "power2.out",
              },
              "-=1",
            );
          }
        },
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return null;
}
