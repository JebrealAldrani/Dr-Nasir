"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExperienceAnimation() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("#experience-section");

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

          const line = section.querySelector<HTMLElement>(".experience-line");

          const cards = gsap.utils.toArray<HTMLElement>(
            ".experience-card",
            section,
          );

          if (!line || !cards.length) return;

          /*
           * Initial states
           */
          gsap.set(".experience-eyebrow", {
            opacity: 0,
            y: 15,
          });

          gsap.set(".experience-heading", {
            opacity: 0,
            y: 30,
          });

          gsap.set(".experience-description", {
            opacity: 0,
            y: 20,
          });

          if (desktop) {
            gsap.set(line, {
              scaleX: 0,
              transformOrigin: "left center",
            });

            gsap.set(cards, {
              autoAlpha: 0,
              y: 30,
            });
          }

          if (mobile) {
            gsap.set(line, {
              scaleY: 0,
              transformOrigin: "center top",
            });

            gsap.set(cards, {
              autoAlpha: 0,
              x: 25,
            });
          }

          /*
           * ONE animation timeline
           * ONE ScrollTrigger
           */
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,

              // Start once section enters screen
              start: "top 75%",

              // Play only once
              once: true,

              // Useful while adjusting
              // markers: true,
            },
          });

          /*
           * 1. Eyebrow
           */
          tl.to(".experience-eyebrow", {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });

          /*
           * 2. Heading
           */
          tl.to(
            ".experience-heading",
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.2",
          );

          /*
           * 3. Description
           */
          tl.to(
            ".experience-description",
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.35",
          );

          /*
           * 4. Draw timeline
           */
          if (desktop) {
            tl.to(
              line,
              {
                scaleX: 1,
                duration: 0.9,
                ease: "power2.inOut",
              },
              "-=0.15",
            );
          }

          if (mobile) {
            tl.to(
              line,
              {
                scaleY: 1,
                duration: 0.9,
                ease: "power2.inOut",
              },
              "-=0.15",
            );
          }

          /*
           * 5. Reveal ALL cards automatically
           * one after another
           */
          if (desktop) {
            tl.to(
              cards,
              {
                autoAlpha: 1,
                y: 0,

                duration: 0.5,

                stagger: {
                  each: 0.12,
                },

                ease: "power3.out",
              },
              "-=0.45",
            );
          }

          if (mobile) {
            tl.to(
              cards,
              {
                autoAlpha: 1,
                x: 0,

                duration: 0.5,

                stagger: {
                  each: 0.12,
                },

                ease: "power3.out",
              },
              "-=0.45",
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
