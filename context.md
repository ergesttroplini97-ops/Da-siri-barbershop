# DA SIRI BARBERSHOP — CONTEXT OPERATIVO + AGENTE INTEGRATO

## Comando unico da eseguire

Usa `web-studio-agent` come orchestratore principale e `sites-building` come skill tecnica obbligatoria. Leggi questo file, poi esegui direttamente il lavoro completo sul sito DA SIRI Barbershop. Non ripetere domande o spiegazioni già risolte, non fermarti a un mockup e non chiedere conferma per decisioni estetiche a basso rischio. Usa il miglior giudizio professionale e comunica solo blocchi reali o il risultato finale.

## Missione

Realizzare, rifinire, verificare e quando autorizzato pubblicare un sito premium, moderno e responsive per **DA SIRI Barbershop**. Il risultato deve sembrare una presenza digitale reale e curata: forte impatto visivo, navigazione semplice, CTA chiara e uso intelligente degli asset ufficiali.

## Routing obbligatorio a basso consumo

1. `web-studio-agent` coordina intake, inventario, design, contenuti, implementazione, QA e consegna.
2. `sites-building` gestisce il ciclo Site e la modifica tecnica. Se esiste già un Site, usa `edit`; se è nuovo, usa una sola volta `create`.
3. `design-system-builder` e `brand-voice-analyzer` si usano solo se servono davvero; non creare documenti inutili.
4. `imagegen` si usa solo per immagini originali mancanti. Non generare né sostituire immagini quando bastano gli asset ufficiali.
5. `sites-hosting` si usa solo per checkpoint, pubblicazione e verifica online.
6. Non usare plugin esterni, ricerche o agenti aggiuntivi se non sono necessari al sito.

## Dati aziendali confermati

- Nome commerciale: **DA SIRI Barbershop**
- Denominazione: **DA SIRI BARBER SHOP DI RUKAJ SIRANTIN**
- Partita IVA: **13305780960**
- Apertura attività: **26 gennaio 2024**
- Codice ATECO: **9621 — Servizi di barbiere e parrucchiere**

Non inventare indirizzo, telefono, WhatsApp, orari, prezzi, recensioni, certificazioni, promesse o link social. Se un dato manca, lascia una CTA o un campo facilmente sostituibile e segnalalo soltanto alla fine.

## Asset ufficiali

Percorso: `assets/`

- `Screenshot_20260729_012630_Instagram.jpg`: interno del locale, soffitto esagonale LED, postazioni, verde botanico e bancone.
- `Screenshot_20260729_012203_Instagram.jpg`: taglio moderno con sfumatura e dettaglio laterale.
- `Screenshot_20260729_012025_Instagram.jpg`: prodotti professionali per styling.
- `Screenshot_20260729_012510_Instagram.jpg`: logo ufficiale “Da Siri Barbershop”. Usalo come logo reale di header, hero e footer; non ricrearlo.
- `Screenshot_20260729_012646_Instagram.jpg`: QR code ufficiale che porta al profilo Instagram `@DA.SIRI_BARBERSHOP`; usalo nella sezione contatti/social, mantenendo leggibilità e contrasto.
- `1000076261.jpg`: fotografia ad alta qualità dell’interno del salone; preferibile come hero o immagine principale.
- `1000076249.jpg`: variante ad alta qualità del logo ufficiale su sfondo ambientato; usare come immagine editoriale, non come sostituto del logo trasparente.
- `1000076258.jpg`: risultato reale di un taglio moderno con sfumatura, fotografato nel salone.
- Video ufficiali precedentemente forniti: `1000076245.mp4`, `1000076234.mp4`. Usali se presenti; se assenti, predisponi il componente senza video generico e non bloccare il lavoro.

Le schermate Instagram devono essere ritagliate per rimuovere barra di stato, interfaccia e testi estranei quando possibile. Ottimizza immagini e usa alt text descrittivi senza modificare artificialmente volto, taglio o logo.

## Direzione visiva definitiva

Atmosfera scura, premium, maschile e tecnologica, coerente con il locale:

- antracite/nero carbone come base;
- bianco caldo per testo e logo;
- viola, magenta e blu elettrico per i LED;
- marmo nero e dettagli metallici;
- verde botanico come accento secondario;
- tipografia display elegante per il brand e sans-serif leggibile per i contenuti;
- dissolvenze, reveal allo scroll, hover raffinati e microinterazioni fluide;
- niente effetti rumorosi, template generico o estetica da stock website.

Il logo deve comparire con una transizione elegante e restare leggibile. Il design deve funzionare bene soprattutto su smartphone.

## Struttura da completare

1. Header con logo, navigazione e CTA.
2. Hero con logo, claim breve, CTA prenotazione e CTA scoperta salone; preferire video ufficiale o foto interna.
3. Esperienza e atmosfera del salone.
4. Tagli e stile, usando il risultato reale senza prezzi inventati.
5. Prodotti e cura con l’immagine ufficiale.
6. Galleria editoriale con lightbox se migliora l’esperienza.
7. Prenotazione/contatti con placeholder solo dove mancano dati.
8. Footer con logo e dati aziendali confermati.

## Regole di esecuzione

- Prima inventaria il progetto e `assets/`, poi implementa senza ripetere l’intake.
- Preserva framework, package manager, configurazione e lavoro già esistente.
- Se il progetto è vuoto, costruisci una pagina completa e pronta alla pubblicazione.
- Non usare immagini stock se gli asset ufficiali sono sufficienti.
- Mantieni contrasto, focus da tastiera, alt text, semantica e assenza di overflow orizzontale.
- Implementa responsive desktop/tablet/mobile, animazioni rispettose di `prefers-reduced-motion` e CTA realmente cliccabili.
- Esegui una sola verifica finale completa: build/lint disponibili, immagini, responsive, overflow, link, accessibilità e resa visuale.
- Non dichiarare completato il lavoro finché il sito non è realmente funzionante.

## Output finale richiesto all’agente

Restituisci soltanto:

1. stato del sito: completato oppure blocco reale;
2. URL pubblicato e verificato, se il deploy è stato richiesto/autorizzato;
3. massimo cinque note su ciò che è stato fatto o sui dati ancora mancanti.

Evita di stampare procedure, log, identificativi tecnici, ripetizioni del contesto o spiegazioni lunghe.

## Stato iniziale

Questo documento sostituisce il vecchio contesto. La sessione precedente è stata interrotta perché troppo pesante; ripartire da qui usando gli asset locali già disponibili. Obiettivo: portare DA SIRI Barbershop a un risultato estetico eccellente con il minimo consumo di contesto.

## Aggiornamento operativo — 29 luglio 2026

- Sono disponibili localmente tutti gli asset elencati sopra, inclusi logo, QR Instagram, fotografie del salone, prodotti e tagli reali.
- La prima versione completa del sito è stata implementata e la build/artefatto locale è stata validata.
- Il design già realizzato comprende hero premium, atmosfera del salone, tagli/stile, prodotti, galleria, CTA Instagram e footer con dati fiscali confermati.
- La pubblicazione precedente era stata avviata ma non risultava verificata online.
- Dati ancora mancanti e da non inventare: indirizzo, telefono/WhatsApp, orari, listino prezzi e recensioni.

## Aggiornamento repository GitHub — 29 luglio 2026

- Repository ufficiale: `https://github.com/ergesttroplini97-ops/Da-siri-barbershop`
- Visibilità: pubblica.
- Branch operativo: `main`.
- Permessi GitHub verificati: lettura, scrittura e amministrazione disponibili.
- File di codice già caricati nella repository: `README.md`, `index.html`, `styles.css`, `script.js` e `context.md`.
- Il sito presente nella repository è una versione statica senza processo di build obbligatorio; può essere avviato in locale con `python3 -m http.server 8080` e visualizzato su `http://localhost:8080`.
- È stato preparato anche un archivio locale completo: `da-siri-barbershop-completo.zip`.
- Gli asset fotografici ufficiali sono disponibili localmente, ma il connettore GitHub usato nella sessione non ha consentito il caricamento diretto dei file binari. La cartella `assets/` deve quindi essere caricata dal pacchetto ZIP oppure tramite Git/CLI prima del deploy definitivo.
- Non dichiarare il sito completo online finché la repository non contiene gli asset richiesti e la resa visiva non è stata verificata dal browser.

## Stato reale corrente

1. Codice e documentazione: caricati su GitHub.
2. `context.md`: aggiornato con repository, limiti e prossimi passi.
3. Immagini ufficiali: incluse nel pacchetto locale, da sincronizzare nella cartella `assets/` della repository.
4. Deploy pubblico: non ancora verificato in questa fase.
5. Prossima azione: caricare `assets/`, verificare i percorsi nel codice, testare il sito e poi pubblicare su Vercel.

## Istruzione di continuità

Quando una nuova sessione riprende il lavoro, deve prima leggere questo file e controllare lo stato effettivo della repository. Non ricreare il progetto da zero e non sostituire gli asset ufficiali con immagini stock. Correggere soltanto ciò che manca, completare il caricamento degli asset, verificare il sito nel browser e procedere al deploy solo dopo un controllo reale.
