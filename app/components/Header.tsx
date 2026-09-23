"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/static";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-secondary/25 backdrop-blur-[5px] transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        className={`px-2 md:px-10 xl:px-20 fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none ${
          scrolled || menuOpen
            ? "border-border bg-background/95 shadow-[var(--shadow-xs)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`site-container flex items-center justify-between gap-4 transition-[height] duration-300 motion-reduce:transition-none ${scrolled ? "h-[72px] lg:h-[76px]" : "h-[72px] lg:h-[88px]"}`}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group min-w-0 shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label="Dr Naser Dib, home"
          >
            <span className="block font-serif text-[1.55rem] leading-none tracking-tight text-secondary transition-colors group-hover:text-primary sm:text-[1.7rem]">
              Dr Naser Dib
            </span>
            <span className="mt-1.5 hidden whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted min-[360px]:block sm:text-[9px] sm:tracking-[0.19em]">
              General Surgery <span className="text-primary">•</span> Experience{" "}
              <span className="text-primary">•</span> Trust
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-4 xl:gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`main-nav whitespace-nowrap rounded-sm py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${isActive(link.href) ? "active text-primary" : "hover:text-primary"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="btn-primary hidden! shrink-0 min-h-11.5! px-5! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:inline-flex! xl:px-6!"
          >
            Book an Appointment
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-secondary transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-border bg-cream-light shadow-[var(--shadow-md)] transition-[opacity,transform,visibility] duration-300 motion-reduce:transition-none lg:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div className="site-container py-5">
            <ul className="divide-y divide-border">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-between rounded-sm py-2 font-serif text-[1.45rem] transition-colors focus-visible:outline-2 focus-visible:outline-primary ${isActive(link.href) ? "text-primary" : "text-secondary hover:text-primary"}`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-6 w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Book an Appointment{" "}
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
