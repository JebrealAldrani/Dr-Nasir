"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_INFO, directionsHref } from "@/static/contact";
import styles from "./ContactSection.module.css";
import Link from "next/link";

export default function ContactLocationsMap() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [mapReady, setMapReady] = useState(false);
  const [activeId, setActiveId] =
    useState<(typeof CONTACT_INFO.locations)[number]["id"]>("otwock");
  const location = CONTACT_INFO.locations.find((item) => item.id === activeId)!;

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !("IntersectionObserver" in window)) {
      setMapReady(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setMapReady(true);
      observer.disconnect();
    }, { rootMargin: "300px 0px" });

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={panelRef} className={`${styles.mapPanel} contact-map-frame`}>
      <div
        className={styles.mapTabs}
        role="group"
        aria-label="Choose a consultation location"
      >
        {CONTACT_INFO.locations.map((item) => (
          <button
            key={item.id}
            type="button"
            className={
              item.id === activeId ? styles.mapTabActive : styles.mapTab
            }
            onClick={() => setActiveId(item.id)}
            aria-pressed={item.id === activeId}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.mapViewport}>
        {mapReady && <iframe
          key={location.id}
          title={`Interactive map of ${location.name}, ${location.address}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />}
      </div>
      <div className={styles.mapDetails}>
        <div>
          <span className={styles.label}>{location.purpose}</span>
          <strong>{location.name}</strong>
          <span>{location.address}</span>
        </div>
        <Link
          href={directionsHref(location.address)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to ${location.name}`}
        >
          Get directions <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
