"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const links = [
  ["Il salone", "#salone"],
  ["Stile", "#stile"],
  ["Servizi", "#servizi"],
  ["Cura", "#cura"],
  ["Galleria", "#galleria"],
];

export function SiteHeader({ instagramUrl }: { instagramUrl: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const toggle = toggleRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    first?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      toggle?.focus();
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="header-logo" href="#top" aria-label="DA SIRI Barbershop, torna all'inizio">
          <img
            src="/media/logo/da-siri-symbol.png"
            alt=""
            width={86}
            height={66}
            fetchPriority="high"
          />
          <span><strong>DA SIRI</strong><small>BARBER SHOP</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <a
          className="header-cta"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Scrivici <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Chiudi" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={dialogRef}
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="shell mobile-menu-inner">
          <p>DA SIRI / NAVIGAZIONE</p>
          <nav>
            {links.map(([label, href], index) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </a>
            ))}
            <a href="#contatti" onClick={() => setOpen(false)}>
              <span>06</span>Contatti
            </a>
          </nav>
          <a
            className="button button-dark"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrivici su Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
