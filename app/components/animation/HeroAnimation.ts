// components/HeroAnimation.tsx

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroAnimation() {
  useGSAP(() => {
    const hero = document.querySelector("#home-hero");

    if (!hero) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions!;

          if (reduceMotion) {
            return;
          }

          // Initial entrance
          const intro = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          intro
            .from(
              ".hero-doctor-name",
              {
                y: 20,
                opacity: 0,
                duration: 0.7,
              },
              0.15,
            )
            .from(
              ".hero-description",
              {
                y: 25,
                opacity: 0,
                duration: 0.7,
              },
              0.25,
            )
            .from(
              ".hero-actions",
              {
                y: 20,
                opacity: 0,
                duration: 0.6,
              },
              0.35,
            )
            .from(
              ".hero-feature",
              {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
              },
              0.45,
            );

          // Image parallax
          gsap.to(".hero-doctor-image", {
            yPercent: 7,
            scale: 1.025,
            ease: "none",

            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });

          // Content scroll-away
          gsap.to(".hero-content", {
            y: -45,
            opacity: 0.45,
            ease: "none",

            scrollTrigger: {
              trigger: hero,
              start: "30% top",
              end: "bottom top",
              scrub: 1,
            },
          });
        },
      );

      return () => mm.revert();
    }, hero);

    return () => ctx.revert();
  }, []);

  return null;
}
