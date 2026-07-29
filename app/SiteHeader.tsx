"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "Il salone", href: "#salone" },
  { label: "Stile", href: "#stile" },
  { label: "Servizi", href: "#servizi" },
  { label: "Cura", href: "#cura" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

const instagramUrl = "https://www.instagram.com/da.siri_barbershop/";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!dialogRef.current.contains(activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => menuButton?.focus({ preventScroll: true }));
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1081px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__logo"
          href="#top"
          aria-label="DA SIRI Barbershop, torna all'inizio"
        >
          <Image
            src="/media/logo/da-siri-horizontal-white.png"
            alt="DA SIRI Barbershop"
            width={1540}
            height={520}
            priority
            unoptimized
          />
        </a>

        <nav
          className="site-header__desktop-nav"
          aria-label="Navigazione principale"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="site-header__instagram"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>Scrivici su Instagram</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          ref={menuButtonRef}
          className="site-header__menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          onClick={() => setIsOpen(true)}
        >
          <span>Menu</span>
          <span className="site-header__menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div
        ref={dialogRef}
        id="site-menu"
        className={`menu-overlay${isOpen ? " menu-overlay--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="menu-overlay__top">
          <a
            className="menu-overlay__logo"
            href="#top"
            aria-label="DA SIRI Barbershop, torna all'inizio"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            <Image
              src="/media/logo/da-siri-horizontal-gold.png"
              alt="DA SIRI Barbershop"
              width={1540}
              height={520}
              unoptimized
            />
          </a>

          <button
            ref={closeButtonRef}
            className="menu-overlay__close"
            type="button"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            <span>Chiudi</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="menu-overlay__body">
          <p className="menu-overlay__eyebrow">DA SIRI BARBERSHOP</p>
          <nav className="menu-overlay__nav" aria-label="Menu principale">
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="menu-overlay__footer">
          <p>Il prossimo look parte da qui.</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <span>Scrivici su Instagram</span>
            <strong>@DA.SIRI_BARBERSHOP</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
