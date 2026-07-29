# DA SIRI Barbershop — Sitemap e contenuti homepage

## Stato del documento

- Micro-task: **T03**
- Lingua: italiano
- Ambito: contenuti e architettura della nuova homepage
- Approccio: mobile-first
- Contatto pubblico utilizzabile: Instagram **@DA.SIRI_BARBERSHOP**
- Sezione team: esclusa fino alla disponibilità di dati e fotografie autorizzate

## Obiettivo della pagina

Presentare DA SIRI Barbershop come un salone maschile contemporaneo, mostrare
l'ambiente e i lavori reali e portare l'utente al profilo Instagram ufficiale
per contatti e informazioni.

## Sitemap definitiva

La nuova versione è una homepage a pagina unica.

| Voce | Destinazione | Funzione |
| --- | --- | --- |
| Home | `#top` | Ritorno all'inizio della pagina |
| Il salone | `#salone` | Presentazione dell'ambiente |
| Stile | `#stile` | Lavori e approccio visivo |
| Servizi | `#servizi` | Presentazione generale dell'offerta, senza listino |
| Cura | `#cura` | Prodotti e mantenimento dello stile |
| Galleria | `#galleria` | Fotografie ufficiali del salone e dei lavori |
| Contatti | `#contatti` | Invito al profilo Instagram ufficiale |
| Instagram | profilo `@DA.SIRI_BARBERSHOP` | Contatto esterno principale |

Non sono previste pagine dedicate a team, listino, recensioni o contatti finché
i relativi contenuti non saranno confermati.

## Ordine definitivo delle sezioni

1. Header e navigazione
2. Hero
3. Esperienza del salone
4. Lavori e stile
5. Servizi
6. Prodotti e cura
7. Galleria
8. CTA finale e contatti
9. Footer

Su mobile l'ordine resta invariato. Ogni sezione deve introdurre un solo
messaggio principale, con testo breve prima dell'immagine o immediatamente
accanto a essa. La CTA primaria deve essere visibile nel primo viewport.

---

## 1. Header e navigazione

### Contenuti

- Marchio: logo ufficiale DA SIRI Barbershop
- Link menu: **Il salone**
- Link menu: **Stile**
- Link menu: **Servizi**
- Link menu: **Cura**
- Link menu: **Galleria**
- Link menu: **Contatti**
- CTA header: **Scrivici su Instagram**
- Etichetta pulsante menu mobile: **Menu**
- Etichetta chiusura menu mobile: **Chiudi**

### CTA e destinazioni

| Elemento | Destinazione |
| --- | --- |
| Logo | `#top` |
| Il salone | `#salone` |
| Stile | `#stile` |
| Servizi | `#servizi` |
| Cura | `#cura` |
| Galleria | `#galleria` |
| Contatti | `#contatti` |
| Scrivici su Instagram | profilo Instagram `@DA.SIRI_BARBERSHOP` |

### Asset consigliato

`assets/Screenshot_20260729_012510_Instagram.jpg`, usando esclusivamente il logo
ufficiale e un ritaglio pulito adatto all'header. Non ricreare il marchio.

### Struttura heading

Nessun heading nel componente header.

---

## 2. Hero

### Struttura e testi

- Eyebrow: **DA SIRI BARBERSHOP**
- H1: **IL TUO STILE. SENZA COMPROMESSI.**
- Testo secondario: **Tagli curati, dettagli precisi e un ambiente che lascia il segno.**
- CTA primaria: **Scrivici su Instagram**
- CTA secondaria: **Scopri il salone**
- Indicazione di scorrimento: **Scopri DA SIRI**

### CTA e destinazioni

| CTA | Destinazione |
| --- | --- |
| Scrivici su Instagram | profilo Instagram `@DA.SIRI_BARBERSHOP` |
| Scopri il salone | `#salone` |

### Asset consigliato

Immagine principale: `assets/1000076261.jpg`.

Usare un crop verticale mobile che mantenga riconoscibili soffitto esagonale,
postazioni e atmosfera del salone. L'immagine deve restare reale e non deve
essere alterata.

### Struttura heading

- Unico H1 della pagina: **IL TUO STILE. SENZA COMPROMESSI.**
- Eyebrow e testo secondario in elementi non-heading.

---

## 3. Esperienza del salone

### Struttura e testi

- Eyebrow: **DENTRO DA SIRI**
- H2: **UNO SPAZIO CON CARATTERE.**
- Testo principale: **Luci geometriche, marmo scuro e dettagli verdi. Un ambiente contemporaneo, costruito attorno al tuo momento.**
- Testo secondario 1: **Atmosfera**
- Descrizione 1: **Un'identità forte. Dal primo sguardo.**
- Testo secondario 2: **Dettagli**
- Descrizione 2: **Ogni elemento parla lo stesso linguaggio.**
- Testo secondario 3: **Esperienza**
- Descrizione 3: **Entri per il tuo stile. Vivi il salone.**
- CTA: **Guarda lo spazio**

### CTA e destinazione

**Guarda lo spazio** porta a `#galleria`.

### Asset consigliato

`assets/Screenshot_20260729_012630_Instagram.jpg`, dopo il crop previsto in T04
per eliminare qualsiasi elemento estraneo all'immagine del salone.

Alternativa per un'inquadratura più ampia: `assets/1000076261.jpg`.

### Struttura heading

- H2: **UNO SPAZIO CON CARATTERE.**
- “Atmosfera”, “Dettagli” ed “Esperienza” sono etichette o H3 solo se diventano
  blocchi semanticamente autonomi in implementazione.

---

## 4. Lavori e stile

### Struttura e testi

- Eyebrow: **LAVORI REALI**
- H2: **TAGLI CHE DEFINISCONO IL LOOK.**
- Testo principale: **Linee pulite. Sfumature nette. Dettagli costruiti per dare forza al tuo stile.**
- Testo secondario: **Guarda da vicino i risultati realizzati nel salone.**
- CTA primaria: **Guarda i lavori**
- CTA secondaria: **Segui DA SIRI**

### CTA e destinazioni

| CTA | Destinazione |
| --- | --- |
| Guarda i lavori | `#galleria` |
| Segui DA SIRI | profilo Instagram `@DA.SIRI_BARBERSHOP` |

### Asset consigliati

- Principale: `assets/1000076258.jpg`
- Secondario: `assets/Screenshot_20260729_012203_Instagram.jpg`

Per mobile usare un crop verticale che mantenga visibili sfumatura, profilo e
dettaglio laterale. Non ritoccare volto o taglio.

### Struttura heading

- H2: **TAGLI CHE DEFINISCONO IL LOOK.**
- Nessun H3 necessario.

---

## 5. Servizi

L'elenco esatto dei servizi non è confermato. Questa sezione presenta quindi
l'offerta in forma generale, senza nominare trattamenti, prezzi o risultati
specifici.

### Struttura e testi

- Eyebrow: **SERVIZI**
- H2: **IL TUO LOOK, COSTRUITO CON CURA.**
- Testo principale: **Parlaci dello stile che cerchi. DA SIRI parte dalle tue esigenze e cura ogni dettaglio del risultato.**
- Blocco 1, titolo: **Ascolto**
- Blocco 1, testo: **Il punto di partenza è capire il look che vuoi.**
- Blocco 2, titolo: **Precisione**
- Blocco 2, testo: **Proporzioni e dettagli lavorano insieme.**
- Blocco 3, titolo: **Definizione**
- Blocco 3, testo: **Il risultato deve parlare di te.**
- Nota informativa: **Per conoscere i servizi disponibili, contatta il profilo ufficiale.**
- CTA: **Chiedi su Instagram**

### CTA e destinazione

**Chiedi su Instagram** porta al profilo Instagram `@DA.SIRI_BARBERSHOP`.

### Asset consigliato

Nessuna nuova fotografia obbligatoria. Preferire una sezione tipografica con
dettagli grafici coerenti con le geometrie LED del salone.

Se serve un supporto fotografico, usare un dettaglio ricavato da
`assets/1000076261.jpg`, senza duplicare lo stesso crop della hero.

### Struttura heading

- H2: **IL TUO LOOK, COSTRUITO CON CURA.**
- “Ascolto”, “Precisione” e “Definizione” possono essere H3 se i tre blocchi sono
  articoli autonomi.

---

## 6. Prodotti e cura

### Struttura e testi

- Eyebrow: **PRODOTTI E CURA**
- H2: **LO STILE CONTINUA OGNI GIORNO.**
- Testo principale: **Nel salone trovi prodotti dedicati allo styling e alla cura. Per scegliere quello adatto a te, chiedi direttamente a DA SIRI.**
- Testo secondario: **Meno tentativi. Più controllo sul tuo look.**
- CTA: **Chiedi un consiglio**

### CTA e destinazione

**Chiedi un consiglio** porta al profilo Instagram
`@DA.SIRI_BARBERSHOP`.

### Asset consigliato

`assets/Screenshot_20260729_012025_Instagram.jpg`, ritagliato in T04 per mostrare
solo i prodotti e l'ambiente, senza interfaccia del telefono.

Non citare marchi o caratteristiche dei prodotti finché non saranno confermati.

### Struttura heading

- H2: **LO STILE CONTINUA OGNI GIORNO.**
- Nessun H3 necessario.

---

## 7. Galleria

### Struttura e testi

- Eyebrow: **GALLERIA**
- H2: **DENTRO LO STILE DA SIRI.**
- Testo secondario: **Il salone. I dettagli. I lavori reali.**
- Etichetta accessibile per ogni apertura: **Apri immagine: [descrizione dell'immagine]**
- Etichetta chiusura lightbox: **Chiudi immagine**
- CTA dopo la griglia: **Altri lavori su Instagram**

### CTA e destinazione

**Altri lavori su Instagram** porta al profilo Instagram
`@DA.SIRI_BARBERSHOP`.

### Asset consigliati e alt text

| Asset | Uso | Alt text |
| --- | --- | --- |
| `assets/1000076261.jpg` | Vista ampia | Interno di DA SIRI Barbershop con postazioni, luci esagonali e dettagli verdi |
| `assets/1000076258.jpg` | Lavoro reale | Taglio corto con sfumatura realizzato nel salone DA SIRI |
| `assets/Screenshot_20260729_012203_Instagram.jpg` | Dettaglio lavoro | Profilo di un taglio moderno con sfumatura e dettaglio laterale |
| `assets/Screenshot_20260729_012630_Instagram.jpg` | Ambiente | Interno del salone DA SIRI con postazioni e illuminazione geometrica |
| `assets/1000076249.jpg` | Identità editoriale | Logo DA SIRI Barbershop ambientato nel salone |
| `assets/Screenshot_20260729_012025_Instagram.jpg` | Prodotti | Prodotti per styling esposti nel salone DA SIRI |

Le immagini derivate da screenshot devono essere usate solo dopo il crop di
pulizia previsto in T04.

### Struttura heading

- H2: **DENTRO LO STILE DA SIRI.**
- Nessun heading per le singole immagini.

---

## 8. CTA finale e contatti

### Struttura e testi

- Eyebrow: **IL PROSSIMO LOOK PARTE DA QUI**
- H2: **PARLIAMO DEL TUO STILE.**
- Testo principale: **Per informazioni e disponibilità, contatta DA SIRI sul profilo Instagram ufficiale.**
- CTA primaria: **Scrivici su Instagram**
- CTA secondaria: **@DA.SIRI_BARBERSHOP**
- Testo associato al QR: **Inquadra il codice e apri il profilo ufficiale.**

Non mostrare nel sito note sui dati mancanti. Le informazioni non confermate
devono essere semplicemente omesse dall'interfaccia.

### CTA e destinazioni

| CTA | Destinazione |
| --- | --- |
| Scrivici su Instagram | profilo Instagram `@DA.SIRI_BARBERSHOP` |
| @DA.SIRI_BARBERSHOP | profilo Instagram `@DA.SIRI_BARBERSHOP` |
| QR code | profilo Instagram ufficiale incorporato nell'asset |

### Asset consigliati

- Sfondo o immagine editoriale: `assets/1000076249.jpg`
- QR ufficiale: `assets/Screenshot_20260729_012646_Instagram.jpg`

Il QR deve conservare lo spazio bianco necessario alla scansione e non deve
essere sovrapposto a texture o colori.

### Struttura heading

- H2: **PARLIAMO DEL TUO STILE.**
- Nessun H3 necessario.

---

## 9. Footer

### Contenuti

- Logo ufficiale DA SIRI Barbershop
- Link: **Instagram**
- Handle: **@DA.SIRI_BARBERSHOP**
- Denominazione: **DA SIRI BARBER SHOP DI RUKAJ SIRANTIN**
- Partita IVA: **P. IVA 13305780960**
- Codice attività: **ATECO 9621 — Servizi di barbiere e parrucchiere**
- Testo legale: **© DA SIRI Barbershop**
- Link di servizio: **Torna su**

La data di apertura dell'attività è un dato confermato ma non è necessaria nella
homepage. Può essere inserita in futuro in una pagina informativa, se utile.

### CTA e destinazioni

| Elemento | Destinazione |
| --- | --- |
| Logo | `#top` |
| Instagram | profilo Instagram `@DA.SIRI_BARBERSHOP` |
| @DA.SIRI_BARBERSHOP | profilo Instagram `@DA.SIRI_BARBERSHOP` |
| Torna su | `#top` |

### Asset consigliato

Logo ufficiale ricavato da
`assets/Screenshot_20260729_012510_Instagram.jpg`.

### Struttura heading

Nessun heading nel footer.

---

## Gerarchia completa degli heading

```text
H1 — IL TUO STILE. SENZA COMPROMESSI.
  H2 — UNO SPAZIO CON CARATTERE.
  H2 — TAGLI CHE DEFINISCONO IL LOOK.
  H2 — IL TUO LOOK, COSTRUITO CON CURA.
  H2 — LO STILE CONTINUA OGNI GIORNO.
  H2 — DENTRO LO STILE DA SIRI.
  H2 — PARLIAMO DEL TUO STILE.
```

H3 facoltativi, da usare solo se i relativi blocchi sono implementati come
contenuti autonomi:

- Atmosfera
- Dettagli
- Esperienza
- Ascolto
- Precisione
- Definizione

Le eyebrow non devono essere heading.

## Regole mobile-first per l'implementazione futura

- Mostrare nel primo viewport logo, H1, testo breve e CTA Instagram.
- Mantenere H1 e H2 brevi, con interruzioni di riga controllate e non più di tre
  righe sui viewport da 360 a 430 px.
- Impilare le CTA su una colonna solo quando non entrano comodamente affiancate.
- Collocare il testo prima della galleria o dell'immagine quando serve a dare
  contesto allo scorrimento.
- Evitare paragrafi superiori a tre righe visive sui dispositivi stretti.
- Mantenere il pulsante Instagram come azione primaria ricorrente, senza
  moltiplicare destinazioni concorrenti.
- Usare menu fullscreen o pannello mobile con focus gestito; la sequenza dei link
  deve seguire l'ordine reale delle sezioni.

## Dati mancanti da confermare

I seguenti dati non devono essere pubblicati o dedotti finché non vengono
forniti e autorizzati:

- indirizzo completo;
- telefono;
- WhatsApp;
- giorni e orari di apertura;
- metodo effettivo di prenotazione;
- elenco esatto dei servizi;
- listino prezzi;
- nomi, ruoli e fotografie del team;
- recensioni e valutazioni;
- certificazioni, premi o riconoscimenti;
- marchi, nomi e caratteristiche dei prodotti venduti o utilizzati;
- eventuali policy di cancellazione o pagamento.

## Controllo anti-invenzione

- Nessun indirizzo, numero di telefono, WhatsApp, orario o prezzo inserito.
- Nessuna recensione, statistica, certificazione o garanzia inserita.
- Nessun nome o ruolo del team inserito.
- Nessun servizio specifico dichiarato come disponibile.
- Nessun marchio di prodotto dichiarato.
- Unico contatto indicato: **@DA.SIRI_BARBERSHOP**.
- Testi basati esclusivamente sul nome, sugli asset ufficiali e sui dati
  aziendali confermati.

