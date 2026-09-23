"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CertificatesAnimation({ scopeId, mode }: {
  scopeId: string;
  mode: "home" | "archive" | "detail";
}) {
  useGSAP(() => {
    const section = document.getElementById(scopeId);
    if (!section) return;
    const revealed = new Set<Element>();
    let introComplete = false;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ mobile: "(max-width: 767px)", desktop: "(min-width: 768px)", reduce: "(prefers-reduced-motion: reduce)" }, (context) => {
        if (context.conditions?.reduce) return;
        const mobile = context.conditions?.mobile;
        const select = gsap.utils.selector(section);
        const cards = select(".certificate-card");
        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          ...(mode === "home" ? { scrollTrigger: { trigger: section, start: "top 72%", once: true } } : {}),
          onComplete: () => { introComplete = true; },
        });
        if (!introComplete) {
          const steps = [".certificate-breadcrumb", ".certificate-eyebrow", ".certificate-heading", ".certificate-description", ".certificate-facts", ".certificate-document"];
          steps.forEach((selector) => {
            const elements = select(selector);
            if (elements.length) intro.from(elements, { autoAlpha: 0, y: mobile ? 16 : 24, duration: 0.6 }, intro.duration() ? "-=0.35" : 0);
          });
        }

        if (mode === "home") {
          if (!introComplete && cards.length) {
            intro.from(cards, { autoAlpha: 0, y: mobile ? 24 : 35, scale: 0.985, duration: 0.65, stagger: mobile ? 0.08 : 0.11 }, "-=0.2")
              .from(select(".certificate-image"), { scale: 1.04, duration: 0.8, stagger: mobile ? 0.08 : 0.11 }, "<0.05")
              .from(select(".certificate-cta"), { autoAlpha: 0, y: 14, duration: 0.45 }, "-=0.25");
          }
        } else {
          const pending = cards.filter((card) => !revealed.has(card));
          if (!pending.length) return;
          gsap.set(pending, { autoAlpha: 0, y: mobile ? 20 : 30 });
          // Batch callbacks run after setup; explicitly attach their tweens to
          // the matchMedia context so unmount/reduced-motion changes revert them.
          context.add("revealBatch", (batch: Element[]) => {
            batch.forEach((card) => revealed.add(card));
            gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.09, ease: "power3.out", overwrite: "auto" });
            gsap.from(batch.flatMap((card) => Array.from(card.querySelectorAll(".certificate-image"))), { scale: 1.04, duration: 0.8, stagger: 0.09, ease: "power3.out" });
          });
          const triggers = ScrollTrigger.batch(pending, {
            start: "top 90%", once: true, interval: 0.1, batchMax: mobile ? 1 : 3,
            onEnter: (batch) => context.revealBatch(batch),
          });
          return () => triggers.forEach((trigger) => trigger.kill());
        }
      });
      return () => mm.revert();
    }, section);
    return () => ctx.revert();
  }, { dependencies: [scopeId, mode], revertOnUpdate: true });
  return null;
}
