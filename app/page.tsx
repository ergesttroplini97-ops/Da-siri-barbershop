import SiteHeader from "./SiteHeader";

const gallery = [
  ["/assets/salon.jpg", "L'ambiente DA SIRI"],
  ["/assets/fade.jpg", "Sfumatura e texture"],
  ["/assets/cut.jpg", "Dettagli di stile"],
  ["/assets/products.jpg", "Prodotti professionali"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><i /> Barbershop · Dal 2024</p>
          <h1>Il tuo stile.<br /><em>La tua firma.</em></h1>
          <p className="lead">Tagli precisi, dettagli curati e un ambiente pensato per farti sentire subito nel posto giusto.</p>
          <div className="hero-actions"><a className="button" href="#contatti">Scopri come prenotare <span>↗</span></a><a className="text-link" href="#esperienza">Entra nel mondo DA SIRI ↓</a></div>
        </div>
        <div className="hero-visual"><div className="glow" /><img src="/assets/salon.jpg" alt="Interno moderno del DA SIRI Barbershop" /><div className="stamp">DS<br /><small>BARBER<br />SHOP</small></div></div>
      </section>

      <div className="marquee"><span>PRECISIONE</span><b>✦</b><span>PERSONALITÀ</span><b>✦</b><span>DA SIRI</span><b>✦</b><span>PRECISIONE</span><b>✦</b></div>

      <section className="section shell split" id="esperienza">
        <div><p className="eyebrow"><i /> L'esperienza</p><h2>Non è solo un taglio.<br /><em>È il tuo momento.</em></h2></div>
        <div className="section-copy"><p>Un salone contemporaneo, un lavoro fatto con attenzione e la libertà di uscire con uno stile che ti rappresenta davvero.</p><div className="facts"><div><strong>01</strong><span>Attenzione<br />al dettaglio</span></div><div><strong>02</strong><span>Ambiente<br />con carattere</span></div></div></div>
      </section>

      <section className="style-section" id="stile"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><i /> Il risultato</p><h2>Tagli che<br /><em>parlano di te.</em></h2></div><p className="muted">Dalla sfumatura più pulita al finish più personale: ogni look nasce dall'ascolto.</p></div><div className="feature-grid"><div className="feature-image"><img src="/assets/fade.jpg" alt="Taglio maschile con sfumatura e dettaglio laterale" /><span>01 / SFUMATURA</span></div><div className="feature-image offset"><img src="/assets/cut.jpg" alt="Taglio maschile visto nel salone" /><span>02 / TEXTURE</span></div></div></div></section>

      <section className="products shell"><div className="product-image"><img src="/assets/products.jpg" alt="Prodotti professionali per styling" /></div><div><p className="eyebrow"><i /> Cura e finish</p><h2>Il dettaglio<br /><em>fa la differenza.</em></h2><p className="section-copy">Per completare il tuo look, selezioniamo prodotti professionali che valorizzano il taglio e rispettano il tuo stile.</p><a className="text-link" href="#contatti">Parliamone in salone ↗</a></div></section>

      <section className="gallery shell" id="galleria"><div className="section-heading"><div><p className="eyebrow"><i /> Dentro DA SIRI</p><h2>Vivi l'atmosfera.</h2></div><p className="muted">Luci, marmo, verde e personalità. Benvenuto nel tuo nuovo spazio.</p></div><div className="gallery-grid">{gallery.map(([src, alt]) => <figure key={src}><img src={src} alt={alt} /><figcaption>{alt} <span>↗</span></figcaption></figure>)}</div></section>

      <section className="contact shell" id="contatti"><div><p className="eyebrow"><i /> Il prossimo passo</p><h2>Pronto a trovare<br /><em>il tuo stile?</em></h2></div><div><p>Per informazioni e prenotazioni, scrivici sui nostri canali ufficiali.</p><a className="button" href="https://www.instagram.com/da.siri_barbershop/" target="_blank" rel="noreferrer">Scrivici su Instagram <span>↗</span></a></div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span>DA</span> SIRI</a><p>DA SIRI BARBER SHOP DI RUKAJ SIRANTIN<br />P.IVA 13305780960 · ATECO 9621</p><a href="#top" className="top">Torna su ↑</a></footer>
    </main>
  );
}
