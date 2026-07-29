# DA SIRI BARBERSHOP — CONTESTO UNIFICATO DEL REDESIGN

> Documento unico e autorevole per proseguire il progetto.
> Sostituisce `context-3.md`, `context-4.md`, `CONTENT.md`, `DESIGN.md`,
> `ASSETS.md` e le copie precedenti di `REDESIGN-ROADMAP.md`.
> Ultimo aggiornamento consolidato: **29 luglio 2026 — checkpoint intermedio T05**.

---

## 1. Istruzione operativa

Prosegui il redesign del sito **DA SIRI Barbershop** dal punto effettivamente
raggiunto, senza rifare intake, analisi, contenuti o asset già approvati.

- Usa `web-studio-agent` come orchestratore principale.
- Usa `sites-building` per lavorare sul Site esistente.
- Usa `sites-hosting` soltanto per checkpoint, pubblicazione e verifica online.
- Non creare un nuovo Site se quello esistente è disponibile.
- Non iniziare più micro-task nella stessa sessione salvo richiesta esplicita.
- Prima di intervenire, verifica sempre lo stato reale dei file e del Site.
- Preserva framework, configurazione, repository e modifiche già presenti.
- Comunica solo blocchi reali, checkpoint raggiunto e risultato finale.

### Punto esatto di ripresa

- **T01–T04: completati e verificati.**
- **T05: in corso; implementazione presente, checkpoint non ancora chiuso.**
- Header e menu fullscreen sono stati costruiti nel Site esistente.
- Build e test HTML sono passati; la verifica visiva desktop è riuscita.
- Restano la verifica visiva mobile/tablet e il collaudo completo delle
  interazioni accessibili in browser.
- **T06 non è iniziato.**
- Alla ripresa continuare esclusivamente dal QA residuo di T05, senza rifare il
  componente e senza anticipare T06.

---

## 2. Missione

Rielaborare il sito esistente come homepage editoriale premium, moderna,
responsive e mobile-first per **DA SIRI Barbershop**, mantenendo l’identità
autentica del salone.

Il risultato deve:

- mostrare immediatamente il marchio DA SIRI;
- valorizzare ambiente, lavori e prodotti reali;
- avere una CTA Instagram chiara;
- apparire scuro, maschile, tecnologico ed elegante;
- usare motion e microinterazioni con misura;
- essere accessibile, veloce e curato su smartphone;
- evitare dati, promesse e contenuti non confermati.

La struttura può prendere ispirazione dal ritmo editoriale del template video
“Rift & Shears”, ma non deve copiarlo pixel per pixel. Composizione, colori,
fotografie, logo e contenuti devono restare originali DA SIRI.

---

## 3. Dati aziendali confermati

| Campo | Valore |
| --- | --- |
| Nome commerciale | **DA SIRI Barbershop** |
| Denominazione | **DA SIRI BARBER SHOP DI RUKAJ SIRANTIN** |
| Partita IVA | **13305780960** |
| Apertura attività | **26 gennaio 2024** |
| Codice ATECO | **9621 — Servizi di barbiere e parrucchiere** |
| Profilo Instagram | **@DA.SIRI_BARBERSHOP** |

### Dati da non inventare

Finché non vengono forniti e autorizzati, non pubblicare né dedurre:

- indirizzo;
- telefono o WhatsApp;
- giorni e orari di apertura;
- metodo effettivo di prenotazione;
- elenco preciso dei servizi;
- listino prezzi;
- nomi, ruoli e fotografie del team;
- recensioni o valutazioni;
- certificazioni, premi o riconoscimenti;
- marchi e caratteristiche dei prodotti;
- policy di cancellazione, pagamento o rimborso.

Se un dato manca, ometterlo dall’interfaccia. Non mostrare al visitatore note,
placeholder generici o avvisi relativi alle informazioni mancanti.

---

## 4. Stato tecnico e continuità

### Repository

- Repository ufficiale:
  `https://github.com/ergesttroplini97-ops/Da-siri-barbershop`
- Branch di riferimento: `main`
- Baseline disponibile come sito statico senza dipendenze.
- File storici principali: `README.md`, `index.html`, `styles.css`, `script.js`,
  `context.md` e cartella `assets/`.
- Avvio della baseline statica:

```bash
python3 -m http.server 8080
```

### Pacchetto fornito

Archivio di riferimento:
`da-siri-barbershop-completo(1).zip`

L’archivio contiene la baseline statica completa e gli asset originali,
compreso `1000076258.jpg`, non allegato separatamente in questa sessione.

### Site e pubblicazione

- Esiste già un Site DA SIRI: deve essere riaperto e modificato, non ricreato.
- Percorso di lavoro usato nella sessione precedente:
  `/workspace/sites/da-siri-barbershop`
- URL storico verificato della versione precedente:
  `https://da-siri-barbershop.ergest-troplini97.chatgpt.site`
- L’URL storico non dimostra che il **nuovo redesign** sia già pubblicato.
- Il redesign a micro-task è attualmente fermo durante T05.
- La versione T05 è soltanto locale e non è stata pubblicata.
- T14 resta il task dedicato al deploy della nuova versione.

In una vecchia pubblicazione era emerso un problema di packaging relativo a un
Worker non incluso. Il problema risultava poi corretto per la baseline
pubblicata, ma prima di T14 occorre comunque verificare che commit, asset,
Worker eventualmente richiesto e versione pubblicata coincidano.

### Snapshot tecnico al momento dello stop

- Site riaperto correttamente in:
  `/workspace/sites/da-siri-barbershop`
- Branch locale: `main`.
- Commit locale corrente: `87f2c7a` (`Complete DA SIRI assets and deployable
  worker package`), un commit avanti rispetto a `origin/main` al momento del
  controllo.
- Working tree non pulito: non eseguire reset, checkout distruttivi o
  sovrascritture.
- Le modifiche T05 non risultano ancora committate.
- File T05 principali:
  - `app/SiteHeader.tsx` — nuovo componente client;
  - `app/header.css` — nuovo stile responsive del componente;
  - `app/globals.css` — import di `header.css`;
  - `app/page.tsx` — sostituzione del vecchio header con `SiteHeader`;
  - `tests/rendered-html.test.mjs` — test della struttura HTML del nuovo header.
- Le cartelle `docs/` e `public/media/` contengono il lavoro T03–T04 e devono
  essere preservate anche se risultano ancora non tracciate nel checkout
  corrente.
- La hero e le altre sezioni della pagina sono ancora quelle della baseline:
  T06 e i task successivi non sono stati avviati.

### Stato delle verifiche tecniche

- Build di produzione: **passata durante la sessione T05**.
- Test HTML su artefatto renderizzato: **2/2 passati**.
- Verifica visuale desktop: **passata**; header e logo risultano visibili.
- Verifica visuale mobile 360–430 px e tablet: **non completata**.
- Audit interattivo in browser di Escape, focus trap, ritorno del focus, blocco
  scroll e touch: **da completare**.
- Lint mirato su `SiteHeader.tsx`, `page.tsx` e test: comando non verde a causa
  della pagina legacy, con 3 errori `react/no-unescaped-entities` e 5 avvisi
  `@next/next/no-img-element` in `app/page.tsx`; nessuna segnalazione è stata
  prodotta per `SiteHeader.tsx`.

---

## 5. Fonti e asset ufficiali

### Originali disponibili

| Sorgente | Contenuto | Uso principale |
| --- | --- | --- |
| `01-Screenshot_20260729_012630_Instagram.jpg` | Interno del locale, postazioni, soffitto LED, marmo e verde | Esperienza, galleria |
| `02-Screenshot_20260729_012203_Instagram.jpg` | Taglio moderno con sfumatura e dettaglio laterale | Lavori, galleria |
| `03-Screenshot_20260729_012025_Instagram.jpg` | Prodotti professionali esposti nel salone | Cura e prodotti |
| `04-Screenshot_20260729_012510_Instagram.jpg` | Riferimento del logo ufficiale | Identità e ricostruzione fedele |
| `05-Screenshot_20260729_012646_Instagram.jpg` | QR Instagram ufficiale | CTA finale e contatti |
| `06-1000076261.jpg` | Interno del salone ad alta qualità | Hero, esperienza |
| `07-1000076249.jpg` | Logo ambientato nel salone | Immagine editoriale, galleria |
| `1000076258.jpg` | Taglio reale con sfumatura, contenuto nello ZIP | Lavori, galleria |
| `1000076245.mp4` | Video ufficiale, se presente | Eventuale supporto visivo |
| `1000076234.mp4` | Video ufficiale, se presente | Eventuale supporto visivo |

Le fotografie del locale, dei tagli e dei prodotti sono fonti autentiche e
devono avere priorità. Rimuovere dalle schermate Instagram barra di stato,
controlli, commenti e UI estranea quando possibile. Non alterare volto, taglio,
prodotti o caratteristiche reali del salone.

### Asset web preparati in T04

#### Fotografie

| File web | Origine | Destinazione |
| --- | --- | --- |
| `public/media/photos/salone-interno.webp` | `1000076261.jpg` | Hero, esperienza |
| `public/media/photos/salone-ritratto.webp` | screenshot interno | Galleria |
| `public/media/photos/taglio-sfumatura.webp` | screenshot taglio | Lavori e stile |
| `public/media/photos/prodotti-styling.webp` | screenshot prodotti ripulito | Prodotti e cura |
| `public/media/photos/logo-ambientato.webp` | `1000076249.jpg` | Galleria/editoriale |

#### Kit logo

| File | Uso |
| --- | --- |
| `public/media/logo/da-siri-lockup-white.png` | Logo verticale su fondo scuro |
| `public/media/logo/da-siri-lockup-gold.png` | Logo verticale oro |
| `public/media/logo/da-siri-lockup-dark.png` | Logo verticale su fondo chiaro |
| `public/media/logo/da-siri-horizontal-white.png` | Header, menu e footer scuri |
| `public/media/logo/da-siri-horizontal-gold.png` | Accento editoriale o CTA |
| `public/media/logo/da-siri-mark-white.png` | Simbolo compatto |
| `public/media/logo/da-siri-mark-gold.png` | Simbolo compatto oro |
| `public/media/logo/da-siri-app-icon.png` | Icona ad alta densità |
| `public/favicon.png` | Favicon 64×64 |

#### Social

| File | Uso |
| --- | --- |
| `public/media/social/instagram-qr.webp` | CTA finale e contatti Instagram |

### Regole del logo

Il logo deve restare fedele al marchio ufficiale:

- volto maschile con capelli, occhiali, baffi, barba, colletto e papillon;
- lettering calligrafico **Da Siri**;
- dicitura **BARBER SHOP** con lettere spaziate;
- proporzioni, riconoscibilità e carattere generale originali.

Sono consentiti pulizia, ricostruzione ad alta definizione, allineamento,
spaziatura e varianti cromatiche. Non reinterpretare il personaggio, non
cambiare il lettering e non trasformare il marchio.

Dimensioni e contrasto:

- lockup orizzontale: minimo 150 px CSS;
- lockup verticale: minimo 120 px CSS;
- simbolo: minimo 28 px CSS;
- sotto 48 px usare la favicon;
- clear space del lockup: almeno l’altezza della lettera `B`;
- clear space del simbolo: almeno il 12% della sua larghezza;
- bianco e oro su antracite;
- variante scura soltanto su fondi chiari uniformi.

Il logo ambientato è una fotografia editoriale e non sostituisce il logo UI.

### Regole del QR

- Non applicare filtri, deformazioni o crop.
- Conservare lo spazio bianco perimetrale.
- Dimensione consigliata: almeno 180 px CSS.
- Non sovrapporlo a texture, immagini o colori che ne riducano la scansione.

### Provenienza

- `ufficiale`: file fornito dal cliente senza alterazioni di contenuto;
- `derivata`: crop, conversione, pulizia o variante ottenuta da un ufficiale;
- `generata`: immagine originale sintetica, da dichiarare esplicitamente.

T04 non ha introdotto immagini generate. Eventuali immagini sintetiche future
possono essere usate solo come supporto atmosferico, mai come prova di lavori,
locale, team, clienti, servizi o prodotti reali. Non devono contenere loghi o
testi generati e non devono sostituire uno scatto ufficiale migliore.

---

## 6. Design system approvato

### Direzione

Atmosfera scura, premium, maschile e tecnologica:

- nero carbone e antracite;
- bianco caldo;
- viola, magenta e blu elettrico ripresi dai LED;
- marmo nero e dettagli metallici;
- verde botanico come accento secondario;
- composizione asimmetrica e modulare;
- grandi fotografie con crop intenzionali;
- bordi sottili e spazi ampi;
- niente card arrotondate generiche;
- niente estetica stock o neon eccessivo.

### Token cromatici

| Token | Valore | Funzione |
| --- | --- | --- |
| `surface-page` | `#050505` | Sfondo principale |
| `surface-raised` | `#111114` | Pannelli scuri |
| `surface-light` | `#F2EFEA` | Menu o sezioni chiare |
| `text-primary` | `#F5F2EC` | Testo principale su scuro |
| `text-dark` | `#111111` | Testo su chiaro |
| `text-muted` | `#A7A3AA` | Testo secondario |
| `accent-primary` | `#B832FF` | CTA e dettagli |
| `accent-secondary` | `#5267FF` | Gradiente LED limitato |
| `border-subtle` | `rgba(255,255,255,.16)` | Separatori e griglie |

Il marrone/arancio del template non è approvato come colore principale.

### Tipografia

- Display geometrica o futuristica, elegante e leggibile, peso 400–500.
- Corpo sans-serif neutra.
- Corpo: 16–18 px desktop, 16 px mobile, line-height 1.5–1.7.
- Eyebrow: 11–12 px, maiuscolo, tracking ampio.
- H1: 54–88 px desktop; 42–58 px mobile.
- H2: 42–68 px desktop; 34–48 px mobile.
- Evitare outline estesi e titoli che occupino inutilmente tutto il viewport.

### Layout

- Container desktop: massimo 1440 px.
- Gutter: 5–7vw.
- Rapporti editoriali: 60/40 o 50/50.
- Desktop: griglie a 2–3 colonne.
- Mobile: una colonna con ordine intenzionale.
- Hero mobile: logo, soggetto reale, H1 e CTA nel primo viewport.
- Il contenuto seguente deve essere parzialmente visibile sui laptop comuni.

### Voce del brand

- diretta;
- sicura;
- contemporanea;
- concreta;
- frasi brevi;
- focus su stile, precisione e ambiente reale;
- niente superlativi assoluti, garanzie o social proof inventata.

---

## 7. Sitemap e ordine definitivo

Homepage a pagina unica:

1. Header e navigazione.
2. Hero.
3. Esperienza del salone.
4. Lavori e stile.
5. Servizi.
6. Prodotti e cura.
7. Galleria.
8. CTA finale e contatti.
9. Footer.

La sezione team è esclusa finché non saranno disponibili nomi, ruoli,
fotografie autorizzate e testi confermati.

### Navigazione

| Voce | Destinazione |
| --- | --- |
| Home/logo | `#top` |
| Il salone | `#salone` |
| Stile | `#stile` |
| Servizi | `#servizi` |
| Cura | `#cura` |
| Galleria | `#galleria` |
| Contatti | `#contatti` |
| Instagram | profilo `@DA.SIRI_BARBERSHOP` |

---

## 8. Copy definitivo della homepage

### 8.1 Header

- Link: **Il salone**
- Link: **Stile**
- Link: **Servizi**
- Link: **Cura**
- Link: **Galleria**
- Link: **Contatti**
- CTA: **Scrivici su Instagram**
- Pulsante mobile: **Menu**
- Chiusura pannello: **Chiudi**

### 8.2 Hero

- Eyebrow: **DA SIRI BARBERSHOP**
- H1: **IL TUO STILE. SENZA COMPROMESSI.**
- Testo: **Tagli curati, dettagli precisi e un ambiente che lascia il segno.**
- CTA primaria: **Scrivici su Instagram**
- CTA secondaria: **Scopri il salone**
- Indicazione scroll: **Scopri DA SIRI**
- Immagine: `salone-interno.webp`

### 8.3 Esperienza del salone

- ID: `#salone`
- Eyebrow: **DENTRO DA SIRI**
- H2: **UNO SPAZIO CON CARATTERE.**
- Testo: **Luci geometriche, marmo scuro e dettagli verdi. Un ambiente contemporaneo, costruito attorno al tuo momento.**
- Etichetta: **Atmosfera**
- Descrizione: **Un’identità forte. Dal primo sguardo.**
- Etichetta: **Dettagli**
- Descrizione: **Ogni elemento parla lo stesso linguaggio.**
- Etichetta: **Esperienza**
- Descrizione: **Entri per il tuo stile. Vivi il salone.**
- CTA: **Guarda lo spazio**
- Destinazione: `#galleria`

### 8.4 Lavori e stile

- ID: `#stile`
- Eyebrow: **LAVORI REALI**
- H2: **TAGLI CHE DEFINISCONO IL LOOK.**
- Testo: **Linee pulite. Sfumature nette. Dettagli costruiti per dare forza al tuo stile.**
- Testo secondario: **Guarda da vicino i risultati realizzati nel salone.**
- CTA primaria: **Guarda i lavori**
- CTA secondaria: **Segui DA SIRI**
- Asset: tagli ufficiali, senza ritoccare volto o risultato.

### 8.5 Servizi

- ID: `#servizi`
- Eyebrow: **SERVIZI**
- H2: **IL TUO LOOK, COSTRUITO CON CURA.**
- Testo: **Parlaci dello stile che cerchi. DA SIRI parte dalle tue esigenze e cura ogni dettaglio del risultato.**
- Blocco: **Ascolto**
- Testo: **Il punto di partenza è capire il look che vuoi.**
- Blocco: **Precisione**
- Testo: **Proporzioni e dettagli lavorano insieme.**
- Blocco: **Definizione**
- Testo: **Il risultato deve parlare di te.**
- Nota: **Per conoscere i servizi disponibili, contatta il profilo ufficiale.**
- CTA: **Chiedi su Instagram**

Questa sezione deve restare generale: nessun trattamento o servizio specifico
va dichiarato disponibile senza conferma.

### 8.6 Prodotti e cura

- ID: `#cura`
- Eyebrow: **PRODOTTI E CURA**
- H2: **LO STILE CONTINUA OGNI GIORNO.**
- Testo: **Nel salone trovi prodotti dedicati allo styling e alla cura. Per scegliere quello adatto a te, chiedi direttamente a DA SIRI.**
- Testo secondario: **Meno tentativi. Più controllo sul tuo look.**
- CTA: **Chiedi un consiglio**
- Asset: `prodotti-styling.webp`

Non citare marchi o caratteristiche specifiche dei prodotti.

### 8.7 Galleria

- ID: `#galleria`
- Eyebrow: **GALLERIA**
- H2: **DENTRO LO STILE DA SIRI.**
- Testo: **Il salone. I dettagli. I lavori reali.**
- CTA: **Altri lavori su Instagram**
- Apertura accessibile: **Apri immagine: [descrizione]**
- Chiusura lightbox: **Chiudi immagine**

Alt text approvati:

| Soggetto | Alt text |
| --- | --- |
| Vista ampia | Interno di DA SIRI Barbershop con postazioni, luci esagonali e dettagli verdi |
| Taglio reale | Taglio corto con sfumatura realizzato nel salone DA SIRI |
| Dettaglio taglio | Profilo di un taglio moderno con sfumatura e dettaglio laterale |
| Ambiente | Interno del salone DA SIRI con postazioni e illuminazione geometrica |
| Logo ambientato | Logo DA SIRI Barbershop ambientato nel salone |
| Prodotti | Prodotti per styling esposti nel salone DA SIRI |

### 8.8 CTA finale e contatti

- ID: `#contatti`
- Eyebrow: **IL PROSSIMO LOOK PARTE DA QUI**
- H2: **PARLIAMO DEL TUO STILE.**
- Testo: **Per informazioni e disponibilità, contatta DA SIRI sul profilo Instagram ufficiale.**
- CTA primaria: **Scrivici su Instagram**
- CTA secondaria: **@DA.SIRI_BARBERSHOP**
- Testo QR: **Inquadra il codice e apri il profilo ufficiale.**

### 8.9 Footer

- Logo ufficiale DA SIRI Barbershop
- Link: **Instagram**
- Handle: **@DA.SIRI_BARBERSHOP**
- Denominazione: **DA SIRI BARBER SHOP DI RUKAJ SIRANTIN**
- Partita IVA: **P. IVA 13305780960**
- Attività: **ATECO 9621 — Servizi di barbiere e parrucchiere**
- Copyright: **© DA SIRI Barbershop**
- Link: **Torna su**

---

## 9. Gerarchia semantica

Un solo H1:

```text
H1 — IL TUO STILE. SENZA COMPROMESSI.
  H2 — UNO SPAZIO CON CARATTERE.
  H2 — TAGLI CHE DEFINISCONO IL LOOK.
  H2 — IL TUO LOOK, COSTRUITO CON CURA.
  H2 — LO STILE CONTINUA OGNI GIORNO.
  H2 — DENTRO LO STILE DA SIRI.
  H2 — PARLIAMO DEL TUO STILE.
```

H3 facoltativi soltanto per blocchi semanticamente autonomi:

- Atmosfera;
- Dettagli;
- Esperienza;
- Ascolto;
- Precisione;
- Definizione.

Eyebrow, link, CTA ed etichette non sono heading.

---

## 10. Motion e interazioni

- Reveal: 350–600 ms, easing morbido.
- Hover immagini: scala massima 1.02–1.03.
- Menu: transizione 250–350 ms.
- Marquee: lento, non essenziale.
- Animare preferibilmente `transform` e `opacity`.
- Evitare scroll hijacking, cursori invasivi e autoplay pesante.
- L’obiettivo è mantenere fluidità sui dispositivi comuni.
- Con `prefers-reduced-motion`, eliminare traslazioni, parallasse e animazioni
  continue.
- Aggiungere librerie solo se CSS e JavaScript nativi non sono sufficienti e
  soltanto quando il beneficio supera peso e manutenzione.

---

## 11. Responsive e accessibilità

- Progettare e verificare prima su viewport 360–430 px.
- Controllare almeno 390×844, tablet e desktop.
- Primo viewport: logo, H1, testo breve e CTA Instagram.
- H1 e H2: massimo 2–3 righe sui dispositivi stretti.
- CTA affiancate quando entrano; impilate quando necessario.
- Touch target minimo 44×44 px.
- Contrasto minimo WCAG AA.
- Focus viola/bianco visibile.
- Menu fullscreen con focus trap, ritorno del focus ed Escape.
- Lightbox con dialog accessibile, focus gestito, Escape e click esterno.
- Ordine di tab coerente con quello visivo.
- Alt text descrittivi.
- Nessun overflow orizzontale.
- Nessun clipping, sovrapposizione o immagine rotta.
- Supporto completo a `prefers-reduced-motion`.

---

## 12. Roadmap consolidata

| ID | Micro-task | Output | Checkpoint | Stato |
| --- | --- | --- | --- | --- |
| T01 | Congelare baseline | Copia e inventario | File completi e path sicuri | **Fatto** |
| T02 | Analizzare template, sito e foto | Design system | Evidenze e limiti distinti | **Fatto** |
| T03 | Definire sitemap e testi | Copy homepage | Nessun dato inventato | **Fatto** |
| T04 | Preparare asset web | Media, logo, QR, favicon | Logo/QR leggibili e UI rimossa | **Fatto** |
| T05 | Rifare header e menu fullscreen | Header responsive | Tastiera, Escape, touch, viewport stretti | **In corso — QA parziale** |
| T06 | Rifare hero editoriale | Hero con foto reale, logo e CTA | Primo viewport chiaro | Da fare |
| T07 | Costruire esperienza salone | Blocco 60/40 | Crop stabile, nessun overflow | Da fare |
| T08 | Costruire lavori e servizi | Griglia e contenuti | Nessuna offerta inventata | Da fare |
| T09 | Costruire prodotti e cura | Blocco editoriale | Asset e alt text corretti | Da fare |
| T10 | Costruire galleria/lightbox | Griglia e dialog | Focus, Escape, mobile | Da fare |
| T11 | Costruire CTA finale/footer | Instagram, QR, dati fiscali | Tutti i link funzionanti | Da fare |
| T12 | Rifinire motion/responsive | Breakpoint completi | Nessun clipping o overflow | Da fare |
| T13 | QA tecnica/accessibilità | Correzioni e report | HTML, JS, tastiera, contrasto | Da fare |
| T14 | Deploy nuova versione | Produzione aggiornata | Stato terminale e browser reale | Da fare |

### Dipendenze

- T03 precede tutte le modifiche di contenuto.
- T04 precede T06–T10.
- T05–T11 devono mantenere il sito eseguibile dopo ogni checkpoint.
- T12 e T13 iniziano soltanto quando tutte le sezioni sono presenti.
- T14 inizia soltanto dopo il superamento del QA.

### Registro T03

- Homepage a pagina unica.
- CTA primaria verso Instagram.
- Un solo H1.
- Struttura mobile-first.
- Servizi descritti in forma generale.
- Team escluso.
- Dati non confermati omessi.
- Controllo anti-invenzione superato.

### Registro T04

- Foto reali convertite e ottimizzate in WebP.
- UI del telefono rimossa dalla foto prodotti.
- QR conservato integro e senza filtri.
- Kit logo bianco, oro, scuro, orizzontale, verticale e compatto creato dal
  marchio ufficiale.
- Favicon creata.
- Asset ambientato classificato come fotografia editoriale.
- Metadati EXIF rimossi.
- Nessuna immagine generata introdotta.
- Checkpoint visuale e tecnico superato.

### Registro T05 — In corso

- Data: 29 luglio 2026.
- Implementato un header scuro con lockup orizzontale ufficiale, navigazione
  desktop e CTA Instagram.
- Sotto 1080 px la navigazione viene sostituita dal pulsante **Menu**.
- Implementato un pannello fullscreen chiaro con logo oro, link numerati,
  pulsante **Chiudi** e CTA Instagram.
- Nel codice sono presenti:
  - stato aperto/chiuso;
  - blocco e ripristino dello scroll del `body`;
  - chiusura con Escape;
  - focus iniziale sul pulsante Chiudi;
  - focus trap;
  - ritorno del focus al pulsante Menu;
  - chiusura al passaggio al breakpoint desktop;
  - attributi ARIA, `inert`, focus visibile e touch target minimi;
  - variante `prefers-reduced-motion`.
- Il test renderizzato controlla logo, navigazione, destinazioni, dialog,
  `aria-expanded`, CTA e URL Instagram; risultato: 2 test passati.
- La resa desktop è stata ispezionata con esito positivo.
- La preview usata nella sessione non ha consentito di portare il browser a
  390 px; pertanto il checkpoint responsive non è stato dichiarato superato.
- Non sono stati modificati hero, sezioni, copy approvato o deploy.
- T06 non è stato avviato.

#### Lavoro residuo per chiudere T05

1. Verificare visivamente almeno 390×844, un viewport tablet e desktop.
2. Provare realmente da browser apertura, chiusura, Escape, ciclo del focus,
   ritorno del focus, scroll lock e interazione touch.
3. Controllare assenza di overflow e sovrapposizioni tra 360 px e desktop.
4. Tenere presente che `#salone`, `#servizi` e `#cura` sono già presenti
   nell’header ma le rispettive sezioni arriveranno nei task successivi.
5. Aggiornare `docs/REDESIGN-ROADMAP.md` soltanto dopo il superamento del
   checkpoint.
6. Registrare e gestire separatamente il lint legacy di `app/page.tsx`; non
   attribuirlo al nuovo componente header.
7. Solo dopo questi controlli segnare T05 come **Fatto** e passare a T06.

---

## 13. Checkpoint corrente — T05

### Stato

**In corso.** L’implementazione è presente, ma il task non è concluso perché il
QA responsive e interattivo non è stato completato.

### Obiettivo

Rifare esclusivamente header e menu fullscreen del redesign.

### Deve includere

- logo orizzontale ufficiale e leggibile;
- link secondo la sitemap approvata;
- CTA **Scrivici su Instagram**;
- pulsante **Menu** su viewport stretti;
- pannello fullscreen coerente con il design system;
- pulsante **Chiudi** evidente;
- stato aperto/chiuso gestito correttamente;
- blocco dello scroll di pagina quando il menu è aperto;
- focus trap;
- chiusura con Escape;
- ritorno del focus al controllo di apertura;
- target touch di almeno 44×44 px;
- stato focus visibile;
- supporto a `prefers-reduced-motion`;
- resa corretta su mobile, tablet e desktop.

### Non deve includere

- rifacimento della hero;
- nuove sezioni;
- lightbox;
- modifica dei testi approvati;
- pubblicazione;
- introduzione di dati non confermati;
- creazione di un nuovo Site;
- sostituzione o reinterpretazione del logo.

### Checkpoint T05

T05 è completato soltanto se:

1. navigazione e CTA funzionano;
2. menu è utilizzabile con mouse, touch e tastiera;
3. Escape chiude il menu;
4. il focus non esce dal pannello aperto;
5. alla chiusura il focus torna al pulsante Menu;
6. non esistono overflow o sovrapposizioni tra 360 px e desktop;
7. il sito resta eseguibile;
8. roadmap e registro vengono aggiornati;
9. T06 non viene avviato.

### Esito al momento dello stop

| Criterio | Stato |
| --- | --- |
| Header, logo, link e CTA presenti | Implementato |
| Menu mouse/touch/tastiera | Implementato nel codice; collaudo browser incompleto |
| Escape | Implementato nel codice; collaudo browser incompleto |
| Focus trap | Implementato nel codice; collaudo browser incompleto |
| Ritorno focus | Implementato nel codice; collaudo browser incompleto |
| Scroll lock | Implementato nel codice; collaudo browser incompleto |
| Desktop | Verifica visuale passata |
| Mobile 360–430 px | Verifica visuale da completare |
| Tablet | Verifica visuale da completare |
| Build | Passata |
| Test HTML renderizzato | 2/2 passati |
| Lint complessivo | Non verde per problemi nella `page.tsx` legacy |
| Roadmap tecnica del progetto | Ancora da aggiornare a checkpoint superato |
| T06 | Non iniziato |

### Ripresa esatta

Riaprire il Site esistente e continuare dal componente già presente. Non
riscrivere l’header. Eseguire soltanto i controlli residui elencati sopra,
correggere eventuali difetti circoscritti a T05 e chiudere il task. Il prossimo
micro-task diventa **T06 — Rifare hero editoriale** esclusivamente dopo il
superamento completo di T05.

---

## 14. QA finale del progetto

Prima di dichiarare concluso il redesign:

- verificare build e lint disponibili;
- verificare tutti i percorsi degli asset;
- confrontare file locali, commit e versione pubblicata;
- testare header, menu, CTA, galleria e lightbox;
- testare tastiera, Escape, focus trap e ritorno del focus;
- testare responsive mobile, tablet e desktop;
- controllare contrasto, heading e alt text;
- controllare overflow e layout shift;
- verificare il QR su dimensione reale;
- controllare `prefers-reduced-motion`;
- verificare i link Instagram;
- verificare l’URL pubblico in un browser reale;
- non considerare il deploy completato finché lo stato non è terminale e la
  pagina pubblicata non corrisponde alla versione verificata.

---

## 15. Regola di aggiornamento del documento

Al termine di ogni micro-task:

1. aggiornare la tabella della roadmap;
2. aggiungere un registro sintetico del task;
3. annotare file modificati e decisioni;
4. indicare il prossimo task esatto;
5. registrare eventuali blocchi reali;
6. non duplicare documenti di contesto.

Questo file deve restare la sola fonte di continuità generale. Documenti tecnici
specialistici possono esistere nel progetto, ma le decisioni definitive e lo
stato dei task devono essere riportati qui.

---

## 16. Output richiesto nelle sessioni operative

Alla fine di ogni micro-task restituire:

1. stato del task: completato oppure blocco reale;
2. file o componenti principali modificati;
3. verifiche superate;
4. prossimo micro-task, senza avviarlo;
5. URL verificato soltanto quando il deploy è realmente richiesto e completato.
