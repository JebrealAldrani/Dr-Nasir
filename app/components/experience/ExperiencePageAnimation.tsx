"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExperiencePageAnimation({ mode }: { mode: "archive" | "detail" }) {
  useGSAP(() => {
    const page = document.getElementById(mode === "archive" ? "experience-archive" : "experience-detail");
    if (!page) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduce: "(prefers-reduced-motion: reduce)",
      }, (context) => {
        if (context.conditions?.reduce) return;
        const mobile = context.conditions?.mobile;
        const select = gsap.utils.selector(page);

        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(select(".experience-page-breadcrumb"), { autoAlpha: 0, y: 10, duration: 0.4 })
          .from(select(".experience-page-eyebrow"), { autoAlpha: 0, y: 12, duration: 0.42 }, "-=0.2")
          .from(select(".experience-page-heading"), { autoAlpha: 0, y: mobile ? 18 : 28, duration: 0.65 }, "-=0.25")
          .from(select(".experience-page-description"), { autoAlpha: 0, y: 16, duration: 0.5 }, "-=0.38");

        if (mode === "archive") {
          const line = select(".experience-page-line")[0];
          const items = select(".experience-page-item");
          if (line) gsap.fromTo(line, { scaleY: 0 }, {
            scaleY: 1, ease: "none",
            scrollTrigger: { trigger: line.parentElement, start: "top 78%", end: "bottom 42%", scrub: true },
          });
          if (items.length) {
            gsap.set(items, { autoAlpha: 0, y: mobile ? 20 : 28 });
            context.add("showItems", (batch: Element[]) => {
              gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.1, ease: "power3.out", overwrite: "auto" });
            });
            const triggers = ScrollTrigger.batch(items, {
              start: "top 88%", once: true, interval: 0.1, batchMax: mobile ? 1 : 2,
              onEnter: (batch) => context.showItems(batch),
            });
            return () => triggers.forEach((trigger) => trigger.kill());
          }
        } else {
          gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: { trigger: select(".experience-detail-overview")[0], start: "top 85%", once: true },
          })
            .from(select(".experience-detail-overview"), { autoAlpha: 0, y: 22, duration: 0.6 })
            .from(select(".experience-detail-facts"), { autoAlpha: 0, y: 24, duration: 0.6 }, "-=0.38");
        }
      });
      return () => mm.revert();
    }, page);
    return () => ctx.revert();
  }, { dependencies: [mode], revertOnUpdate: true });
  return null;
}
