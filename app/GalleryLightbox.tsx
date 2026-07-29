"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  className: string;
};

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => index === null ? null : (index + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => index === null ? null : (index - 1 + items.length) % items.length);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, items.length]);

  function close() {
    const previousIndex = activeIndex;
    setActiveIndex(null);
    window.setTimeout(() => {
      if (previousIndex !== null) triggerRefs.current[previousIndex]?.focus();
    });
  }

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            className={item.className}
            type="button"
            key={item.src}
            ref={(element) => { triggerRefs.current[index] = element; }}
            onClick={() => setActiveIndex(index)}
            aria-label={`Apri immagine: ${item.label}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
            <span>{item.label}<i aria-hidden="true">↗</i></span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Immagine ingrandita: ${items[activeIndex].label}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button ref={closeRef} className="lightbox-close" type="button" onClick={close}>
            Chiudi <span aria-hidden="true">×</span>
          </button>
          <div className="lightbox-image">
            <img
              src={items[activeIndex].src}
              alt={items[activeIndex].alt}
              decoding="async"
            />
          </div>
          <div className="lightbox-footer">
            <p>{String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} — {items[activeIndex].label}</p>
            <div>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
                aria-label="Immagine precedente"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
                aria-label="Immagine successiva"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
