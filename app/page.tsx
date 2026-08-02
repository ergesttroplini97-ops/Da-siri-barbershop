/* eslint-disable @next/next/no-img-element */
import { GalleryLightbox } from "./GalleryLightbox";
import { SiteHeader } from "./SiteHeader";
import { siteUrl } from "./site-url";

const instagramUrl = "https://www.instagram.com/da.siri_barbershop/";

const gallery = [
  {
    src: "/media/photos/salone.webp",
    alt: "Interno di DA SIRI Barbershop con postazioni nere, marmo scuro e soffitto esagonale illuminato",
    label: "Il salone",
    className: "gallery-card gallery-card-wide",
  },
  {
    src: "/media/photos/taglio-profilo.webp",
    alt: "Taglio maschile visto di profilo con sfumatura bassa e dettaglio laterale",
    label: "Sfumatura",
    className: "gallery-card gallery-card-tall",
  },
  {
    src: "/media/photos/taglio-dettaglio.webp",
    alt: "Dettaglio di un taglio maschile realizzato da DA SIRI",
    label: "Texture",
    className: "gallery-card",
  },
  {
    src: "/media/photos/prodotti.webp",
    alt: "Prodotti professionali esposti all'interno del salone",
    label: "Cura",
    className: "gallery-card",
  },
];

const services = [
  {
    number: "01",
    title: "Ascolto",
    copy: "Il punto di partenza è capire il risultato che vuoi e come vivi ogni giorno il tuo stile.",
  },
  {
    number: "02",
    title: "Precisione",
    copy: "Linee, volumi e proporzioni vengono curati con attenzione, senza lasciare nulla al caso.",
  },
  {
    number: "03",
    title: "Definizione",
    copy: "Il finish completa il lavoro e rende il look riconoscibile, personale e facile da portare.",
  },
];

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "DA SIRI Barbershop",
    url: siteUrl,
    sameAs: [instagramUrl],
    foundingDate: "2024-01-26",
    vatID: "IT13305780960",
  };

  return (
    <>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>
      <SiteHeader instagramUrl={instagramUrl} />

      <main id="contenuto">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span aria-hidden="true" />
                Barber shop · Dal 2024
              </p>
              <h1 id="hero-title">
                Il tuo stile.
                <strong>Senza compromessi.</strong>
              </h1>
              <p className="lead">
                Precisione, carattere e attenzione ai dettagli. Un&apos;esperienza
                costruita intorno al modo in cui vuoi vederti.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prenota su Instagram <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#salone">
                  Scopri il salone <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="/media/photos/salone.webp"
                alt="Interno moderno di DA SIRI Barbershop con marmo scuro, verde e luci esagonali"
                fetchPriority="high"
              />
              <div className="hero-logo">
                <img
                  src="/media/logo/da-siri-logo.png"
                  alt=""
                  width={420}
                  height={240}
                  fetchPriority="high"
                />
              </div>
              <p className="hero-index" aria-hidden="true">
                01 — DA SIRI
              </p>
            </div>
          </div>
          <a className="hero-scroll" href="#salone" aria-label="Vai alla sezione Il salone">
            <span aria-hidden="true">SCORRI</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            <span>PRECISIONE</span><b>✦</b><span>PERSONALITÀ</span><b>✦</b>
            <span>DA SIRI</span><b>✦</b><span>STILE</span><b>✦</b>
            <span>PRECISIONE</span><b>✦</b><span>PERSONALITÀ</span><b>✦</b>
          </div>
        </div>

        <section className="section shell salon" id="salone" aria-labelledby="salone-title">
          <div className="salon-image image-frame">
            <img
              src="/media/photos/salone.webp"
              alt="Le postazioni di DA SIRI Barbershop con specchi, poltrone nere e illuminazione viola"
              loading="lazy"
              decoding="async"
            />
            <span>01 / IL SALONE</span>
          </div>
          <div className="salon-copy">
            <p className="eyebrow"><span aria-hidden="true" />L&apos;esperienza</p>
            <h2 id="salone-title">
              Non è solo un taglio.
              <em>È il tuo momento.</em>
            </h2>
            <p>
              Marmo scuro, luce, verde e dettagli contemporanei: uno spazio con
              carattere, pensato per accoglierti e dare forma al tuo stile.
            </p>
            <dl className="salon-details">
              <div><dt>01</dt><dd>Attenzione<br />al dettaglio</dd></div>
              <div><dt>02</dt><dd>Ambiente<br />con carattere</dd></div>
            </dl>
          </div>
        </section>

        <section className="style-section" id="stile" aria-labelledby="stile-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span aria-hidden="true" />Lavori reali</p>
                <h2 id="stile-title">
                  Tagli che
                  <em>parlano di te.</em>
                </h2>
              </div>
              <div className="heading-aside">
                <p>
                  Dalla sfumatura più pulita al finish più personale: ogni look
                  nasce dall&apos;ascolto e prende forma nei dettagli.
                </p>
                <a className="text-link" href="#galleria">
                  Guarda la galleria <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="work-grid">
              <figure className="work-card work-card-primary image-frame">
                <img
                  src="/media/photos/taglio-profilo.webp"
                  alt="Taglio maschile con sfumatura precisa e dettaglio rasato sul lato"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption><span>01</span>Sfumatura e forma</figcaption>
              </figure>
              <figure className="work-card work-card-secondary image-frame">
                <img
                  src="/media/photos/taglio-dettaglio.webp"
                  alt="Dettaglio ravvicinato di un taglio maschile realizzato in salone"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption><span>02</span>Texture e carattere</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="services shell" id="servizi" aria-labelledby="servizi-title">
          <div className="services-intro">
            <p className="eyebrow"><span aria-hidden="true" />Il metodo</p>
            <h2 id="servizi-title">Uno stile costruito su di te.</h2>
          </div>
          <ol className="services-list">
            {services.map((service) => (
              <li key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="care-section" id="cura" aria-labelledby="cura-title">
          <div className="shell care-grid">
            <div className="care-image image-frame">
              <img
                src="/media/photos/prodotti.webp"
                alt="Prodotti professionali per la cura e lo styling esposti nel salone DA SIRI"
                loading="lazy"
                decoding="async"
              />
              <span>04 / CURA E FINISH</span>
            </div>
            <div className="care-copy">
              <p className="eyebrow"><span aria-hidden="true" />Cura e finish</p>
              <h2 id="cura-title">
                Il dettaglio
                <em>fa la differenza.</em>
              </h2>
              <p>
                Il lavoro continua nel modo in cui il taglio viene definito e
                mantenuto. In salone trovi una selezione dedicata alla cura e
                allo styling.
              </p>
              <a
                className="text-link"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chiedici un consiglio <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="gallery-section shell" id="galleria" aria-labelledby="galleria-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span aria-hidden="true" />Dentro DA SIRI</p>
              <h2 id="galleria-title">
                Vivi
                <em>l&apos;atmosfera.</em>
              </h2>
            </div>
            <p className="heading-copy">
              Il salone, i lavori e i dettagli che definiscono il mondo DA SIRI.
            </p>
          </div>
          <GalleryLightbox items={gallery} />
          <div className="gallery-cta">
            <a
              className="text-link"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Altri lavori su Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contatti" aria-labelledby="contact-title">
          <div className="contact-glow" aria-hidden="true" />
          <div className="shell contact-grid">
            <div className="contact-intro">
              <p className="eyebrow"><span aria-hidden="true" />Il prossimo passo</p>
              <h2 id="contact-title">
                Pronto a trovare
                <em>il tuo stile?</em>
              </h2>
              <p>
                Il prossimo appuntamento può iniziare da un messaggio.
                Raccontaci cosa cerchi e contattaci sul profilo ufficiale.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contattaci e prenota <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-ghost"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visita Instagram <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <a
              className="qr-card"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apri il profilo Instagram ufficiale di DA SIRI Barbershop"
            >
              <span className="qr-image">
                <img
                  src="/media/social/instagram-qr.webp"
                  alt="QR code del profilo Instagram @da.siri_barbershop"
                  width={460}
                  height={456}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="qr-copy">
                <strong>@da.siri_barbershop</strong>
                <small>Inquadra il QR code con la fotocamera.</small>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <a href="#top" aria-label="Torna all'inizio">
              <img
                src="/media/logo/da-siri-logo.png"
                alt="DA SIRI Barbershop"
                width={270}
                height={154}
                loading="lazy"
                decoding="async"
              />
            </a>
            <p>Un&apos;identità precisa. Un ambiente con carattere. Il tuo stile, senza compromessi.</p>
          </div>
          <nav className="footer-nav" aria-label="Collegamenti del footer">
            <span>Esplora</span>
            <a href="#salone">Il salone</a>
            <a href="#stile">Stile</a>
            <a href="#servizi">Servizi</a>
            <a href="#cura">Cura</a>
            <a href="#galleria">Galleria</a>
          </nav>
          <div className="footer-social">
            <span>Seguici</span>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram <i aria-hidden="true">↗</i>
            </a>
            <a href="#top">Torna su <i aria-hidden="true">↑</i></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>DA SIRI BARBER SHOP DI RUKAJ SIRANTIN · P. IVA 13305780960 · ATECO 9621</p>
          <p>© 2026 DA SIRI Barbershop</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
