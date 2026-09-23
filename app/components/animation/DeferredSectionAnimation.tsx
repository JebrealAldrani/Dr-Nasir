"use client";

import { useEffect, useState, type ReactNode } from "react";

type Section = "experience" | "expertise" | "care" | "certificates" | "contact" | "faq";

const sectionIds: Record<Section, string> = {
  experience: "experience-section",
  expertise: "expertise-section",
  care: "why-patients-choose-section",
  certificates: "certificates-section",
  contact: "contact-section",
  faq: "home-faq",
};

const loaders: Record<Section, (scopeId: string) => Promise<ReactNode>> = {
  experience: async () => {
    const { default: Animation } = await import("./ExperienceAnimation");
    return <Animation />;
  },
  expertise: async () => {
    const { default: Animation } = await import("./ExpertiseAnimation");
    return <Animation />;
  },
  care: async () => {
    const { default: Animation } = await import("./WhyPatientsChooseAnimation");
    return <Animation />;
  },
  certificates: async () => {
    const { default: Animation } = await import("./CertificatesAnimation");
    return <Animation scopeId="certificates-section" mode="home" />;
  },
  contact: async () => {
    const { default: Animation } = await import("./ContactAnimation");
    return <Animation />;
  },
  faq: async (scopeId) => {
    const { default: Animation } = await import("./FAQAnimation");
    return <Animation scopeId={scopeId} />;
  },
};

export default function DeferredSectionAnimation({ section, scopeId }: { section: Section; scopeId?: string }) {
  const [animation, setAnimation] = useState<ReactNode>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targetId = scopeId ?? sectionIds[section];
    const target = document.getElementById(targetId);
    if (!target) return;

    let active = true;
    const load = () => {
      void loaders[section](targetId).then((component) => {
        if (active) setAnimation(component);
      });
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return () => { active = false; };
    }

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();
      load();
    }, { rootMargin: "800px 0px" });

    observer.observe(target);
    return () => {
      active = false;
      observer.disconnect();
    };
  }, [section, scopeId]);

  return animation;
}
