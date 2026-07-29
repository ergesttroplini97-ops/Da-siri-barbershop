# DA SIRI Barbershop — Contesto unificato completo del progetto

Ultimo aggiornamento: **29 luglio 2026**  
Stato: **redesign completato, verificato, pubblicato e sincronizzato su GitHub**

---

## 1. Scopo di questo documento

Questo file è la fonte di verità operativa per continuare il progetto **DA SIRI
Barbershop** in una nuova sessione senza perdere decisioni, vincoli, asset,
stato tecnico o storico delle verifiche.

Chi riprende il lavoro deve:

1. leggere interamente questo documento;
2. lavorare sul progetto e sul repository esistenti;
3. non ricominciare intake, analisi, sitemap, copy, design system o produzione
   degli asset;
4. verificare il codice reale prima di dichiarare una funzione completata;
5. preservare dati confermati, identità visiva, accessibilità e prestazioni;
6. aggiornare questo documento dopo ogni modifica sostanziale.

Questo documento sostituisce i contesti precedenti quando esistono
contraddizioni. La priorità resta comunque: **codice su `main` → produzione
verificata → questo documento → note storiche**.

---

## 2. Identificativi ufficiali del progetto

| Voce | Valore |
| --- | --- |
| Progetto | DA SIRI Barbershop |
| Repository | `ergesttroplini97-ops/Da-siri-barbershop` |
| Repository URL | `https://github.com/ergesttroplini97-ops/Da-siri-barbershop` |
| Branch di produzione | `main` |
| Commit finale del redesign | `f32bee946b5133646c61054d24b3cde350ac529d` |
| Messaggio commit finale | `Complete DA SIRI redesign and final QA` |
| Hosting | ChatGPT Sites |
| Sites project ID | `appgprj_6a695e15ddc48191be77f6ea90f8325f` |
| URL pubblico | `https://da-siri-barbershop.ergest-troplini97.chatgpt.site` |
| Instagram | `https://www.instagram.com/da.siri_barbershop/` |
| Handle Instagram | `@da.siri_barbershop` |
| Lingua | Italiano |
| Tipo di sito | Homepage one-page pubblica |

Il repository è pubblico. Evitare di inserirvi credenziali, token, dati
personali non necessari, segreti, contenuti non autorizzati o informazioni
commerciali non confermate.

---

## 3. Stato reale alla consegna

Il redesign non è più in lavorazione: è stato completato e pubblicato.

- T01–T14 sono completati.
- Il sito è stato costruito con successo nel runtime Sites.
- La validazione dell'artefatto è stata superata.
- Il deployment ha raggiunto lo stato terminale `succeeded`.
- La homepage è stata verificata realmente in produzione.
- Il repository `main` è stato sincronizzato con gli stessi sorgenti della
  versione finale.
- Non risultano workflow CI configurati nel repository.
- Il commit di riferimento precedente all'aggiornamento di questo documento è
  `f32bee946b5133646c61054d24b3cde350ac529d`.

### Chiarimento rispetto ai documenti precedenti

Alcuni documenti storici riportavano T14 o il push GitHub come “in attesa”.
Quell'informazione è superata: il push pubblico è stato esplicitamente
confermato dall'utente ed eseguito su `main`.

---

## 4. Obiettivo del sito

Creare una presenza digitale premium per DA SIRI Barbershop capace di:

- comunicare precisione, carattere e qualità visiva;
- valorizzare il salone reale, i lavori e l'atmosfera;
- distinguere il brand da una barberia generica;
- portare il visitatore al contatto e alla prenotazione tramite Instagram;
- funzionare bene su desktop, tablet e mobile;
- rimanere fedele ai dati e ai materiali realmente forniti;
- evitare prezzi, promesse o informazioni aziendali inventate.

La conversione principale non usa un sistema di booking interno: conduce al
profilo Instagram ufficiale, che è l'unico canale di contatto confermato.

---

## 5. Identità aziendale e dati pubblicabili

### Dati confermati

| Campo | Valore |
| --- | --- |
| Nome pubblico | DA SIRI Barbershop |
| Denominazione | DA SIRI BARBER SHOP DI RUKAJ SIRANTIN |
| Partita IVA | 13305780960 |
| Apertura attività | 26 gennaio 2024 |
| Codice ATECO | 9621 |
| Descrizione ATECO | Servizi di barbiere e parrucchiere |
| Profilo ufficiale | @da.siri_barbershop |

### Dati non confermati e quindi vietati

Non pubblicare né dedurre senza conferma esplicita:

- indirizzo;
- telefono;
- WhatsApp;
- email commerciale;
- giorni e orari di apertura;
- listino prezzi;
- singoli trattamenti o servizi specifici;
- tempi di esecuzione;
- promozioni;
- nomi, ruoli e fotografie del team;
- recensioni o valutazioni;
- certificazioni;
- marchi di prodotto;
- garanzie di risultato;
- disponibilità immediata;
- promesse come “migliore barberia”, “numero uno” o simili.

La sezione team resta deliberatamente esclusa fino alla disponibilità di nomi,
ruoli e fotografie autorizzate.

---

## 6. Posizionamento e direzione creativa

### Personalità del brand

- maschile;
- contemporanea;
- precisa;
- sicura;
- tecnologica senza sembrare fredda;
- premium senza ostentazione;
- editoriale, non basata su card generiche.

### Evidenze visive derivate dal salone reale

- pavimenti e superfici effetto marmo scuro;
- poltrone nere;
- illuminazione esagonale bianca;
- LED viola e blu;
- parete botanica e verde decorativo;
- dettagli oro del marchio;
- specchi e postazioni geometriche.

### Principi da preservare

- composizione asimmetrica;
- immagini reali in primo piano;
- spaziatura generosa;
- tipografia di forte gerarchia;
- contrasto netto tra superfici scure e chiare;
- accenti viola/blu usati con disciplina;
- oro riservato soprattutto al marchio;
- motion sobria;
- niente immagini stock;
- niente neon invasivo;
- niente estetica “gaming”;
- niente template copia-incolla.

---

## 7. Design system finale

### Palette

| Ruolo | Valore |
| --- | --- |
| Fondo principale | `#070708` |
| Pannelli scuri | `#111114` |
| Superficie chiara | `#F3F0EA` |
| Testo chiaro | `#F3F0EA` |
| Testo secondario | `#A6A1AA` |
| Viola | `#B832FF` |
| Blu | `#5267FF` |
| Oro logo | `#C9A668` |

Alcune note iniziali usavano valori quasi equivalenti come `#050505`,
`#F2EFEA` o `#F5F2EC`. Per manutenzione futura, fare riferimento ai valori
effettivi presenti in `app/globals.css`.

### Tipografia

- Font principale: Geist tramite `next/font/google`.
- Titoli: sans geometrico con grande scala e forte gerarchia.
- Accenti editoriali: corsivo/serif dove previsto dagli stili.
- Testi brevi e leggibili, senza blocchi promozionali eccessivi.

### Layout

- container centrale con gutter fluidi;
- sezioni full-width alternate a contenitori interni;
- composizioni 60/40 o asimmetriche;
- immagini con crop controllato;
- griglie adattive;
- protezione globale dall'overflow orizzontale;
- breakpoint dedicati a circa 1120, 900, 700 e 380 px.

### Motion

- ingresso sobrio dei contenuti;
- hover controllati su immagini, link e CTA;
- nessuna animazione che ostacoli la lettura;
- fallback completo con `prefers-reduced-motion`;
- scrolling non forzato quando l'utente riduce il movimento.

---

## 8. Architettura definitiva della homepage

La pagina è una homepage one-page in italiano. L'ordine è intenzionale e non va
modificato senza una ragione di conversione o contenuto verificabile.

### 8.1 Skip link

- Link “Vai al contenuto”.
- Punta a `#contenuto`.
- Serve la navigazione da tastiera e screen reader.

### 8.2 Header

- logo/simbolo DA SIRI;
- navigazione desktop;
- CTA “Scrivici” verso Instagram;
- menu mobile fullscreen.

Link principali:

1. Il salone → `#salone`
2. Stile → `#stile`
3. Servizi → `#servizi`
4. Cura → `#cura`
5. Galleria → `#galleria`
6. Contatti → `#contatti` nel menu mobile

### 8.3 Hero

- eyebrow: “Barber shop · Dal 2024”;
- unico H1: “Il tuo stile. Senza compromessi.”;
- breve promessa di precisione, carattere e attenzione ai dettagli;
- CTA primaria: “Prenota su Instagram”;
- CTA secondaria: “Scopri il salone”;
- foto reale del salone;
- logo ufficiale sovrapposto;
- indicatore editoriale “01 — DA SIRI”;
- link di scorrimento verso il salone.

### 8.4 Marquee

Elemento decorativo con:

- Precisione;
- Personalità;
- DA SIRI;
- Stile.

È marcato come decorativo e non deve creare rumore per le tecnologie
assistive.

### 8.5 Il salone

- ID `#salone`;
- fotografia reale dell'ambiente;
- etichetta “01 / IL SALONE”;
- titolo: “Non è solo un taglio. È il tuo momento.”;
- testo sull'ambiente e sull'esperienza;
- due indicatori editoriali:
  - attenzione al dettaglio;
  - ambiente con carattere.

### 8.6 Stile e lavori reali

- ID `#stile`;
- titolo: “Tagli che parlano di te.”;
- due fotografie reali;
- contenuti:
  - sfumatura e forma;
  - texture e carattere;
- link interno alla galleria.

### 8.7 Servizi / metodo

- ID `#servizi`;
- titolo: “Uno stile costruito su di te.”;
- nessun listino e nessun trattamento inventato;
- tre pilastri:
  1. Ascolto;
  2. Precisione;
  3. Definizione.

Questa è una descrizione del metodo, non un catalogo di servizi.

### 8.8 Cura e finish

- ID `#cura`;
- immagine prodotti ripulita dall'interfaccia Instagram;
- titolo: “Il dettaglio fa la differenza.”;
- copy prudente su cura, mantenimento e styling;
- CTA “Chiedici un consiglio” verso Instagram;
- nessun marchio di prodotto dichiarato.

### 8.9 Galleria

- ID `#galleria`;
- titolo: “Vivi l'atmosfera.”;
- quattro elementi:
  - salone;
  - sfumatura;
  - texture;
  - cura;
- CTA “Altri lavori su Instagram”.

### 8.10 Lightbox

Il componente `GalleryLightbox` gestisce:

- apertura da pulsanti reali;
- dialog modale;
- focus iniziale sul pulsante Chiudi;
- chiusura con Escape;
- immagini precedente/successiva;
- frecce sinistra/destra da tastiera;
- click sullo sfondo;
- blocco dello scroll del body;
- ripristino del focus sul trigger originario;
- etichette e contatore accessibili.

### 8.11 CTA finale e QR

- ID `#contatti`;
- titolo: “Pronto a trovare il tuo stile?”;
- CTA primaria: “Contattaci e prenota”;
- CTA secondaria: “Visita Instagram”;
- QR ufficiale;
- handle testuale;
- istruzione per la scansione.

Entrambe le CTA conducono al profilo Instagram ufficiale.

### 8.12 Footer

Contiene:

- logo DA SIRI;
- descrizione breve;
- link interni;
- Instagram;
- ritorno in cima;
- denominazione;
- P. IVA;
- ATECO;
- copyright 2026.

Non contiene indirizzo, telefono, orari o altri dati non confermati.

---

## 9. Copy finale approvato

### Hero

**Titolo:**  
Il tuo stile. Senza compromessi.

**Testo:**  
Precisione, carattere e attenzione ai dettagli. Un'esperienza costruita intorno
al modo in cui vuoi vederti.

### Esperienza

**Titolo:**  
Non è solo un taglio. È il tuo momento.

**Testo:**  
Marmo scuro, luce, verde e dettagli contemporanei: uno spazio con carattere,
pensato per accoglierti e dare forma al tuo stile.

### Stile

**Titolo:**  
Tagli che parlano di te.

**Testo:**  
Dalla sfumatura più pulita al finish più personale: ogni look nasce
dall'ascolto e prende forma nei dettagli.

### Metodo

**Titolo:**  
Uno stile costruito su di te.

**Ascolto:**  
Il punto di partenza è capire il risultato che vuoi e come vivi ogni giorno il
tuo stile.

**Precisione:**  
Linee, volumi e proporzioni vengono curati con attenzione, senza lasciare nulla
al caso.

**Definizione:**  
Il finish completa il lavoro e rende il look riconoscibile, personale e facile
da portare.

### Cura

**Titolo:**  
Il dettaglio fa la differenza.

**Testo:**  
Il lavoro continua nel modo in cui il taglio viene definito e mantenuto. In
salone trovi una selezione dedicata alla cura e allo styling.

### Galleria

**Titolo:**  
Vivi l'atmosfera.

**Testo:**  
Il salone, i lavori e i dettagli che definiscono il mondo DA SIRI.

### CTA finale

**Titolo:**  
Pronto a trovare il tuo stile?

**Testo:**  
Il prossimo appuntamento può iniziare da un messaggio. Raccontaci cosa cerchi e
contattaci sul profilo ufficiale.

### Footer

Un'identità precisa. Un ambiente con carattere. Il tuo stile, senza
compromessi.

---

## 10. Asset ufficiali

Tutti i soggetti reali derivano dai materiali forniti dal proprietario. Non
sono state introdotte fotografie stock.

### Fonti ricevute

| Fonte | Contenuto | Uso |
| --- | --- | --- |
| `Screenshot_20260729_012630_Instagram.jpg` | interno del salone | riferimento/foto salone |
| `1000076261.jpg` | interno del salone | asset principale salone |
| `Screenshot_20260729_012203_Instagram.jpg` | taglio di profilo | lavori e galleria |
| `Screenshot_20260729_012025_Instagram.jpg` | prodotti con interfaccia social | fonte per asset prodotti ripulito |
| `Screenshot_20260729_012510_Instagram.jpg` | marchio ambientato | riferimento logo |
| `1000076249.jpg` | marchio ambientato | riferimento logo |
| `Screenshot_20260729_012646_Instagram.jpg` | QR Instagram ufficiale | CTA finale |

### Asset di produzione

| Percorso pubblico | Funzione |
| --- | --- |
| `public/media/photos/salone.webp` | hero, salone, galleria e Open Graph |
| `public/media/photos/taglio-profilo.webp` | lavori e galleria |
| `public/media/photos/taglio-dettaglio.webp` | lavori e galleria |
| `public/media/photos/prodotti.webp` | cura e galleria |
| `public/media/logo/da-siri-logo.png` | hero e footer |
| `public/media/logo/da-siri-symbol.png` | header |
| `public/media/logo/favicon.png` | favicon |
| `public/media/social/instagram-qr.webp` | CTA finale |

### Kit logo

Il logo pulito è una ricostruzione fedele del riferimento fornito e conserva:

- volto maschile;
- capelli;
- occhiali;
- baffi;
- barba;
- colletto;
- papillon;
- lettering calligrafico “Da Siri”;
- dicitura “BARBER SHOP”.

Non trasformare il marchio in un personaggio differente, non cambiare la
silhouette e non sostituire il lettering con un logotipo generico.

### Regole QR

- non deformare;
- non inclinare;
- non applicare filtri;
- non ritagliare i moduli;
- non sovrapporre texture;
- mantenere contrasto e area libera;
- rendere disponibile anche il link cliccabile.

---

## 11. Pipeline degli asset

Gli asset binari sono conservati in forma Base64 dentro `assets-source/`.

Durante `npm run build`, lo script `prebuild` esegue:

```text
node scripts/materialize-assets.mjs
```

Lo script:

1. legge i file `.b64`;
2. decodifica otto asset;
3. crea le directory sotto `public/media/`;
4. scrive WebP/PNG pronti per la build.

Questa scelta rende il repository riproducibile anche in flussi GitHub che
gestiscono meglio file testuali rispetto ai binari.

Non eliminare `assets-source/` o `scripts/materialize-assets.mjs` senza prima
sostituire l'intera strategia di build e verificare che tutti gli asset vengano
effettivamente inclusi in produzione.

---

## 12. Stack tecnico

### Runtime e framework

| Dipendenza | Versione |
| --- | --- |
| Node.js | `>=22.13.0` |
| Next.js | `16.2.6` |
| React | `19.2.6` |
| React DOM | `19.2.6` |
| TypeScript | `5.9.3` |
| Vinext | `0.0.50` |
| Vite | `8.0.13` |
| Wrangler | `4.92.0` |
| Cloudflare Vite plugin | `1.37.1` |
| ESLint | `9.39.4` |

Sono presenti dipendenze D1/Drizzle del template, ma il sito corrente non usa
un database. `db/schema.ts` è intenzionalmente vuoto.

### Modello applicativo

- App Router;
- rendering Next/Vinext;
- homepage pubblica;
- nessun login;
- nessun CMS;
- nessun database attivo;
- nessun form backend;
- nessun sistema booking;
- nessun analytics dichiarato;
- nessuna integrazione WhatsApp.

---

## 13. File principali

| Percorso | Responsabilità |
| --- | --- |
| `app/page.tsx` | struttura completa della homepage, copy, schema JSON-LD |
| `app/layout.tsx` | lingua, font, metadata, Open Graph, Twitter e favicon |
| `app/SiteHeader.tsx` | header, nav e menu mobile accessibile |
| `app/GalleryLightbox.tsx` | galleria e lightbox interattiva |
| `app/globals.css` | design system, layout, motion e responsive |
| `assets-source/` | asset Base64 sorgente |
| `scripts/materialize-assets.mjs` | generazione degli asset pubblici |
| `scripts/build-verified.sh` | build protetta del progetto |
| `scripts/validate-artifact.sh` | validazione artefatto Sites |
| `tests/rendered-html.test.mjs` | test HTML renderizzato |
| `.openai/hosting.json` | identità del Site esistente |
| `vite.config.ts` | Vinext, Sites e Cloudflare runtime |
| `docs/REDESIGN-ROADMAP.md` | registro storico sintetico |
| `docs/CONTEXT-UNIFICATO.md` | questo documento |

### Nota sul README

Il `README.md` attuale descrive ancora principalmente il template
Vinext/Sites. Non rappresenta bene il progetto DA SIRI. È un miglioramento
documentale futuro consigliato, ma non blocca il sito.

---

## 14. SEO e dati strutturati

### Metadata

Configurati in `app/layout.tsx`:

- lingua documento: `it`;
- title: `DA SIRI Barbershop | Il tuo stile, senza compromessi`;
- description dedicata;
- canonical `/`;
- metadataBase sull'URL pubblico;
- Open Graph;
- Twitter summary large image;
- immagine social del salone;
- favicon DA SIRI.

### JSON-LD

In `app/page.tsx` è presente uno schema:

- `@type`: `HairSalon`;
- nome;
- URL pubblico;
- Instagram in `sameAs`;
- data di apertura;
- Partita IVA.

Non aggiungere indirizzo, coordinate, telefono, orari o fascia prezzo finché
non vengono confermati.

### Gerarchia

- un solo H1;
- H2 per le sezioni principali;
- landmark `header`, `main`, `footer`;
- anchor interne coerenti;
- alt text descrittivi sulle fotografie;
- logo decorativo con alt vuoto quando il testo adiacente rende già il nome.

---

## 15. Accessibilità implementata

### Navigazione

- skip-link;
- focus visibile;
- link interni coerenti;
- target touch adeguati;
- menu mobile con `aria-expanded` e `aria-controls`;
- dialog menu con `aria-modal`;
- focus iniziale;
- focus trap;
- chiusura con Escape;
- blocco scroll;
- ripristino focus.

### Galleria

- trigger nativi `button`;
- dialog con etichetta;
- chiusura con Escape;
- navigazione tramite frecce;
- controlli precedente/successiva;
- focus iniziale;
- ripristino del focus al trigger;
- descrizioni alternative.

### Movimento

- `prefers-reduced-motion`;
- animazioni e transizioni ridotte quasi a zero;
- scrolling automatico non imposto.

### Link esterni

I link Instagram che aprono una nuova scheda usano:

```html
target="_blank" rel="noopener noreferrer"
```

---

## 16. Responsive

Il sito è progettato per:

- desktop ampio;
- desktop/laptop;
- tablet;
- mobile tra circa 360 e 430 px;
- schermi stretti fino a circa 380 px.

Comportamenti principali:

- header desktop sostituito dal menu mobile;
- composizioni asimmetriche impilate quando necessario;
- testi ridimensionati in modo fluido;
- CTA touch-friendly;
- galleria adattiva;
- immagini con aspect ratio stabile;
- nessuna fuoriuscita orizzontale della pagina;
- QR ridimensionato senza deformazione;
- footer riorganizzato su viewport stretti.

Qualsiasi modifica futura deve essere verificata almeno a:

- 390×844;
- una larghezza tablet;
- desktop intorno a 1366 px.

---

## 17. Performance e scelte sulle immagini

- hero e logo principale usano priorità di caricamento;
- immagini sotto la piega usano lazy loading;
- immagini non decorative hanno alt text;
- asset fotografici sono WebP;
- marchio e favicon sono PNG;
- non viene usata l'ottimizzazione immagini automatica di Next per questi
  asset, perché durante la QA il relativo percorso non restituiva correttamente
  le immagini nell'ambiente di produzione Sites;
- l'uso di `<img>` è quindi intenzionale e accompagnato da dimensioni o layout
  CSS controllato.

La sostituzione con `next/image` va eseguita solo dopo una prova reale nel
runtime di produzione, non per semplice conformità stilistica.

---

## 18. Comandi operativi

### Installazione

```bash
npm run install:ci
```

### Sviluppo

```bash
npm run dev
```

### Build verificata

```bash
npm run build
```

### Test

```bash
npm test
```

Il test esegue build, validazione e controllo del markup renderizzato.

### Validazione artefatto

```bash
npm run validate:artifact
```

### Lint

```bash
npm run lint
```

Non cambiare gli script Sites senza comprenderne timeout, cache, ambiente
scrivibile e validazione dell'artefatto.

---

## 19. Copertura del test renderizzato

`tests/rendered-html.test.mjs` verifica:

- risposta HTTP 200;
- content type HTML;
- meta di preview;
- attributo `lang="it"`;
- presenza di un solo H1;
- copy principale del hero;
- sezioni `salone`, `servizi`, `cura`, `galleria`, `contatti`;
- handle Instagram;
- JSON-LD.

Il test non sostituisce la QA browser. Dopo modifiche a layout, menu, lightbox,
asset o responsive serve comunque una verifica visuale e interattiva.

---

## 20. Verifiche finali già completate

### Tecniche

- build Vinext di produzione: superata;
- validazione artefatto Sites: superata;
- test renderizzato: superato;
- lint finale del redesign: 0 errori e 0 avvisi;
- un solo H1;
- anchor interne presenti;
- link Instagram corretti;
- immagini con alt text;
- schema JSON-LD presente.

### Browser

- homepage verificata a 1363×936;
- primo viewport verificato;
- gerarchia e immagini verificate;
- galleria aperta realmente;
- dialog rilevato;
- chiusura con Escape verificata;
- nessun overflow orizzontale;
- immagini del primo viewport caricate con dimensioni reali.

### TypeScript

Il controllo manuale aveva evidenziato soltanto tipi del template
Cloudflare/Vinext preesistente, come:

- `cloudflare:workers`;
- `Fetcher`;
- `D1Database`;
- campi binding.

Non risultavano errori nei componenti del redesign.

### Produzione

- deployment: `succeeded`;
- URL: `https://da-siri-barbershop.ergest-troplini97.chatgpt.site`;
- repository sincronizzato su `main`;
- commit finale redesign: `f32bee946b5133646c61054d24b3cde350ac529d`.

---

## 21. Roadmap storica T01–T14

| ID | Micro-task | Stato | Risultato |
| --- | --- | --- | --- |
| T01 | Congelare baseline | Fatto | Inventario iniziale e fonti |
| T02 | Analizzare identità e template | Fatto | Direzione editoriale scura |
| T03 | Sitemap, ordine, copy e CTA | Fatto | Homepage one-page e Instagram |
| T04 | Preparare asset | Fatto | Foto, prodotti ripuliti, QR, logo |
| T05 | Header e menu | Fatto | Desktop e mobile accessibile |
| T06 | Hero | Fatto | H1, foto, logo, CTA |
| T07 | Esperienza salone | Fatto | Blocco asimmetrico responsive |
| T08 | Lavori e servizi | Fatto | Lavori reali e metodo prudente |
| T09 | Prodotti e cura | Fatto | Asset ripulito e copy |
| T10 | Galleria/lightbox | Fatto | Dialog accessibile e tastiera |
| T11 | CTA, QR e footer | Fatto | Conversione Instagram e dati confermati |
| T12 | Motion e responsive | Fatto | Desktop, tablet, mobile, reduced-motion |
| T13 | QA tecnica e accessibilità | Fatto | Correzioni e controlli |
| T14 | Build, deploy e GitHub | Fatto | Produzione verificata e `main` sincronizzato |

---

## 22. Decisioni importanti prese durante il progetto

1. **Homepage one-page:** sufficiente per il contenuto confermato e più efficace
   per portare a Instagram.
2. **Instagram come conversione:** unico canale ufficiale disponibile.
3. **Nessun team:** mancano contenuti autorizzati.
4. **Nessun listino:** prezzi e servizi specifici non confermati.
5. **Foto reali prima di immagini generate:** autenticità del salone.
6. **Logo ricostruito fedelmente:** il riferimento ambientato non era adatto a
   tutti gli usi digitali.
7. **QR ufficiale preservato:** niente modifiche estetiche che ne compromettano
   la leggibilità.
8. **Lightbox custom:** controllo completo di tastiera e focus.
9. **Asset statici materializzati:** soluzione affidabile per GitHub e Sites.
10. **Tag `<img>` intenzionali:** risolto un problema reale di caricamento nel
    runtime di produzione previsto.
11. **Site esistente riutilizzato:** evitata la creazione di progetti duplicati.
12. **Push pubblico solo dopo conferma:** fotografie, logo e dati fiscali sono
    visibili nel repository pubblico con autorizzazione dell'utente.

---

## 23. Vincoli permanenti

- Non creare un nuovo Site se `.openai/hosting.json` è presente.
- Riutilizzare sempre il project ID esistente.
- Non modificare `main` senza controllare la versione remota.
- Non riscrivere tutto il sito per una modifica locale.
- Non eliminare l'accessibilità del menu o della lightbox.
- Non reintrodurre overflow orizzontale.
- Non usare immagini stock.
- Non sostituire il logo con una versione infedele.
- Non inventare dati aziendali.
- Non deformare il QR.
- Non trasformare la sezione metodo in un listino non confermato.
- Non aggiungere un form se non esiste un endpoint e una policy dati definita.
- Non aggiungere tracking o cookie senza valutare privacy e consenso.
- Non aggiungere credenziali nel repository.

---

## 24. Limiti e miglioramenti futuri

Il sito è completo per lo scope attuale. Le seguenti sono opportunità, non
attività già autorizzate:

### Alta utilità

1. confermare indirizzo, telefono e orari;
2. integrare una mappa o indicazioni stradali solo dopo conferma dell'indirizzo;
3. decidere se aggiungere un vero sistema di prenotazione;
4. aggiornare il README generico con documentazione specifica DA SIRI;
5. aggiungere monitoraggio uptime e una CI GitHub.

### Contenuto

1. ampliare la galleria con nuove fotografie autorizzate;
2. aggiungere servizi e prezzi solo con listino ufficiale;
3. aggiungere una sezione team con liberatorie;
4. raccogliere recensioni verificabili;
5. creare pagine privacy/cookie se vengono introdotti form o analytics.

### Tecnica

1. test browser automatici con Playwright;
2. controllo Lighthouse;
3. test mobile/tablet su dispositivi reali;
4. sitemap XML e robots se richiesti dalla strategia SEO;
5. eventuale dominio personalizzato;
6. eventuale sostituzione controllata degli `<img>` solo se il runtime supporta
   correttamente l'ottimizzazione.

---

## 25. Procedura per riprendere il progetto

### Passo 1 — leggere

Leggere:

1. `docs/CONTEXT-UNIFICATO.md`;
2. `docs/REDESIGN-ROADMAP.md`;
3. `app/page.tsx`;
4. `app/SiteHeader.tsx`;
5. `app/GalleryLightbox.tsx`;
6. `app/globals.css`;
7. `scripts/materialize-assets.mjs`;
8. `.openai/hosting.json`.

### Passo 2 — verificare lo stato

- confermare repository e branch;
- leggere il commit remoto più recente;
- verificare che non ci siano modifiche utente non correlate;
- non assumere che la copia locale sia più recente di `main`.

### Passo 3 — definire un micro-task

Ogni intervento deve avere:

- obiettivo unico;
- file coinvolti;
- dati confermati;
- verifica tecnica;
- verifica visuale se modifica l'interfaccia.

### Passo 4 — implementare

- preservare componenti e classi esistenti quando possibile;
- aggiornare test se cambia la struttura;
- aggiornare metadata o JSON-LD se cambiano dati pubblici;
- aggiornare asset sorgente e pipeline se cambiano immagini.

### Passo 5 — verificare

Minimo:

```bash
npm run lint
npm test
```

Per modifiche visuali:

- desktop;
- tablet;
- 390×844;
- menu;
- lightbox;
- link Instagram;
- overflow;
- reduced-motion.

### Passo 6 — pubblicare

- riutilizzare il Site esistente;
- salvare e distribuire soltanto una versione verificata;
- verificare lo stato terminale del deployment;
- controllare l'URL pubblico;
- sincronizzare GitHub;
- aggiornare questo documento.

---

## 26. Prompt consigliato per una nuova sessione

```text
Continua il progetto DA SIRI Barbershop.

Prima leggi integralmente:
- docs/CONTEXT-UNIFICATO.md
- docs/REDESIGN-ROADMAP.md

Lavora sul repository esistente:
ergesttroplini97-ops/Da-siri-barbershop

Non creare un nuovo progetto Sites e riutilizza il project_id presente in
.openai/hosting.json.

Esegui esclusivamente questo micro-task:
[INSERIRE QUI IL NUOVO OBIETTIVO]

Vincoli permanenti:
- non inventare indirizzo, telefono, orari, prezzi, servizi, team o recensioni;
- usa soltanto asset reali/autorizzati;
- mantieni logo, accessibilità, responsive, reduced-motion e assenza di
  overflow;
- esegui lint, test e verifica visuale;
- aggiorna docs/CONTEXT-UNIFICATO.md;
- non pubblicare modifiche non verificate.
```

---

## 27. Definizione di “completato” per modifiche future

Un task è completato solo quando:

- l'obiettivo è presente nel codice reale;
- i dati sono confermati;
- il sito compila;
- lint e test passano o gli eventuali limiti sono documentati con precisione;
- le immagini caricano;
- non esiste overflow orizzontale;
- mobile, tablet e desktop restano utilizzabili;
- tastiera e focus funzionano;
- i link esterni sono sicuri;
- produzione e sorgenti GitHub corrispondono;
- questo documento è aggiornato.

---

## 28. Sintesi finale

DA SIRI Barbershop dispone ora di una homepage premium, scura, editoriale,
responsive e accessibile, costruita attorno a fotografie reali, identità
ufficiale e contatto Instagram. Il progetto è online, il repository pubblico è
sincronizzato e l'architettura è pronta per evoluzioni future senza dover
rifare il redesign.

Il prossimo lavoro non è “finire il sito”, ma scegliere un miglioramento
specifico basato su nuovi dati confermati o su una nuova esigenza commerciale.
