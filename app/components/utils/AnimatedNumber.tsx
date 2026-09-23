"use client";

import { useEffect, useRef } from "react";

const DURATION_MS = 1600;
const FRAME_MS = 1000 / 30;

export default function AnimatedYear({ year }: { year: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const target = /^\d+$/.test(year) ? Number(year) : null;

  useEffect(() => {
    const element = numberRef.current;
    if (!element || target === null) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let played = false;
    let frameId = 0;

    const stop = () => {
      cancelAnimationFrame(frameId);
    };

    const start = () => {
      stop();
      if (!visible || document.hidden || reducedMotion.matches) {
        element.textContent = year;
        return;
      }
      if (played) return;
      played = true;

      element.textContent = "0";
      const startTime = performance.now();
      let lastFrame = startTime - FRAME_MS;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        if (now - lastFrame >= FRAME_MS || elapsed >= DURATION_MS) {
          const progress = Math.min(elapsed / DURATION_MS, 1);
          const eased = 1 - (1 - progress) ** 3;
          element.textContent = String(Math.round(target * eased));
          lastFrame = now;
        }

        if (elapsed < DURATION_MS) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      const wasVisible = visible;
      visible = entry.isIntersecting;
      if (visible && !wasVisible) start();
      if (!visible) {
        stop();
        element.textContent = year;
      }
    });

    observer.observe(element);
    document.addEventListener("visibilitychange", start);
    reducedMotion.addEventListener("change", start);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", start);
      reducedMotion.removeEventListener("change", start);
    };
  }, [target, year]);

  if (target === null) return <>{year}</>;

  return (
    <>
      <span className="sr-only">{year}</span>
      <span
        ref={numberRef}
        aria-hidden="true"
        className="inline-block min-w-[4ch] tabular-nums"
      >
        0
      </span>
    </>
  );
}
