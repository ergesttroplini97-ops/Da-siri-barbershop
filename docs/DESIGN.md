# DA SIRI Barbershop — Design System

## 1. Fonti analizzate

- Video template Wix “Rift & Shears”, viewport mobile 1080×2340.
- Sito statico esistente: `index.html`, `styles.css`, `script.js`.
- Sette immagini ufficiali del salone, lavori, prodotti, logo e QR Instagram.
- Limite: il template è mostrato solo su mobile e non sono disponibili file sorgente o specifiche desktop.

## 2. Direzione

Sito editoriale scuro, premium e maschile. La struttura prende ispirazione dal ritmo del template — grandi fotografie, griglie nette, tipografia geometrica e menu a pannello — mentre colori, fotografie, logo e contenuti restano originali DA SIRI.

Tratti distintivi:

- nero profondo e avorio per il contrasto principale;
- viola LED usato come accento controllato, non come riempimento dominante;
- composizione asimmetrica e modulare;
- fotografie ufficiali a pieno formato con crop intenzionali;
- bordi sottili e spazi ampi, senza card arrotondate generiche.

Da evitare:

- copia pixel-per-pixel del template Wix;
- persone, prezzi, testimonianze o servizi non confermati;
- logo “DS” inventato: usare l’asset ufficiale;
- effetti neon e animazioni eccessivi;
- immagini stock.

## 3. Token visivi

| Token | Valore iniziale | Ruolo | Confidenza |
| --- | --- | --- | --- |
| `surface-page` | `#050505` | Sfondo principale | Alta |
| `surface-raised` | `#111114` | Pannelli scuri | Alta |
| `surface-light` | `#F2EFEA` | Menu e sezioni editoriali chiare | Media |
| `text-primary` | `#F5F2EC` | Titoli e testo su scuro | Alta |
| `text-dark` | `#111111` | Testo su superficie chiara | Alta |
| `text-muted` | `#A7A3AA` | Testo secondario | Alta |
| `accent-primary` | `#B832FF` | CTA e dettagli DA SIRI | Alta |
| `accent-secondary` | `#5267FF` | Gradiente LED limitato | Media |
| `accent-warm` | `#B95E3E` | Possibile richiamo editoriale del template | Bassa; non usare senza verifica visiva |
| `border-subtle` | `rgba(255,255,255,.16)` | Separatori e griglie | Alta |

## 4. Tipografia

- Display: famiglia geometrica/futuristica leggibile, peso 400–500, maiuscole selettive.
- Corpo: sans-serif neutra, 16–18 px desktop e 16 px mobile, interlinea 1.5–1.7.
- Eyebrow: 11–12 px, maiuscolo, tracking ampio.
- H1: 54–88 px desktop, 42–58 px mobile; massimo 2–3 righe.
- H2: 42–68 px desktop, 34–48 px mobile.
- Evitare testi outline estesi e titoli che occupano l’intero viewport.

## 5. Layout

- Container desktop: massimo 1440 px; gutter 5–7vw.
- Sezioni modulari con bordi netti e rapporto immagine/testo 60/40 o 50/50.
- Desktop: griglie a 2–3 colonne; mobile: una colonna con ordine editoriale intenzionale.
- Hero mobile deve mostrare identità, soggetto reale e CTA senza richiedere scroll.
- Il contenuto successivo deve essere parzialmente visibile sui laptop comuni.

## 6. Componenti

- Header trasparente/scuro con logo ufficiale, CTA e menu.
- Menu fullscreen chiaro con link grandi e chiusura evidente.
- Hero editoriale con fotografia ufficiale e CTA Instagram/prenotazione.
- Marquee o barra-separatore statica/animata con movimento ridotto supportato.
- Blocchi “servizi” senza prezzi finché non confermati.
- Griglia “lavori reali” con immagini del salone e tagli.
- Sezione “il barbiere/team” solo con dati e foto confermati.
- CTA finale fotografica.
- Footer con Instagram e dati fiscali confermati.
- Lightbox accessibile con focus gestito e chiusura da tastiera.

## 7. Immagini

- Hero: `1000076261.jpg`, crop ampio sul salone.
- Risultati: `1000076258.jpg` e screenshot taglio, ripuliti dalle barre di interfaccia.
- Prodotti: screenshot prodotti, ritagliato per eliminare UI del telefono.
- Logo: asset ufficiale; non ridisegnarlo.
- QR Instagram: mantenere leggibilità e spazio bianco.
- Usare `object-position` specifico per ogni immagine e formati ottimizzati.

## 8. Movimento

- Reveal 350–600 ms, easing morbido.
- Hover immagini: scala massima 1.02–1.03.
- Menu: transizione 250–350 ms.
- Marquee lento e non essenziale.
- Con `prefers-reduced-motion`, eliminare traslazioni e animazioni continue.

## 9. Voce del brand

Corpus testuale insufficiente per una guida ad alta confidenza. Tono operativo:

- diretto, sicuro, contemporaneo;
- frasi brevi e concrete;
- focus su stile, precisione e ambiente reale;
- niente superlativi assoluti, garanzie o social proof inventata.

CTA consigliate: “Scopri il salone”, “Guarda i lavori”, “Contattaci su Instagram”.

## 10. Accessibilità

- Contrasto minimo AA per testo e controlli.
- Focus viola/bianco visibile su tutti gli elementi interattivi.
- Touch target minimo 44×44 px.
- Menu, dialog e lightbox completamente utilizzabili da tastiera.
- Un solo H1, ordine heading coerente e alt text descrittivi.

## 11. Decisioni da confermare

- Indirizzo, telefono/WhatsApp, orari, listino e metodo reale di prenotazione.
- Nome e fotografia del barbiere/team.
- Elenco esatto dei servizi.
- Uso del marrone/arancio del template: per ora escluso dalla UI principale.

