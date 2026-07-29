# DA SIRI Barbershop — Piano operativo a micro-task

## Obiettivo

Rielaborare il sito esistente adottando la struttura editoriale del template
video, mantenendo identità, immagini e contenuti ufficiali DA SIRI. Ogni task
deve essere completabile e verificabile in una sessione breve.

## Regola di continuità

Al termine di ogni task:

1. eseguire il controllo indicato;
2. aggiornare lo stato in questo file;
3. annotare file modificati, decisioni e blocchi;
4. non iniziare il task successivo se il checkpoint non passa.

## Backlog

| ID | Micro-task | Output | Verifica | Stato |
| --- | --- | --- | --- | --- |
| T01 | Congelare baseline del sito esistente | Copia integra e inventario asset | Tutti i file presenti; nessun path sospetto | Fatto |
| T02 | Analizzare template, foto e sito attuale | `docs/DESIGN.md` | Evidenze, inferenze e limiti distinti | Fatto |
| T03 | Definire sitemap e ordine sezioni | Brief contenuti per una pagina | Nessun dato aziendale inventato | **Fatto** |
| T04 | Preparare gli asset web | Crop UI, nomi coerenti, compressione | Logo/QR leggibili; immagini senza barre telefono | **Fatto** |
| T05 | Rifare header e menu fullscreen | Header responsive + focus trap | Tastiera, Escape, touch e viewport stretti | Da fare |
| T06 | Rifare hero editoriale | Hero con foto reale, logo e CTA | Primo viewport chiaro su 390×844 e desktop | Da fare |
| T07 | Costruire sezione salone/esperienza | Blocco 60/40 con foto ambiente | Crop stabile e nessun overflow | Da fare |
| T08 | Costruire sezione lavori/servizi | Griglia lavori reali, servizi senza prezzi | Nessuna promessa o servizio non confermato | Da fare |
| T09 | Costruire sezione prodotti/cura | Blocco editoriale con asset prodotti | Screenshot ripulito e alt text corretto | Da fare |
| T10 | Costruire galleria/lightbox | Griglia responsive e dialog accessibile | Focus, Escape, click esterno, mobile | Da fare |
| T11 | Costruire CTA finale e footer | Instagram, QR e dati fiscali | Tutti i link funzionanti | Da fare |
| T12 | Rifinire motion e responsive | Breakpoint mobile/tablet/desktop | Nessun clipping o scroll orizzontale | Da fare |
| T13 | QA tecnica e accessibilità | Report sintetico e correzioni | HTML/JS, tastiera, contrasto, immagini | Da fare |
| T14 | Deploy nuova versione | URL produzione aggiornato | Stato terminale e controllo browser reale | Da fare |

## Dipendenze

- T03 precede ogni modifica di contenuto.
- T04 precede T06–T10.
- T05–T11 possono essere implementati separatamente, ma ciascuno deve mantenere
  il sito eseguibile.
- T12–T13 partono solo quando tutte le sezioni sono presenti.
- T14 parte solo dopo il superamento del QA.

## Struttura definitiva approvata in T03

1. Header e navigazione.
2. Hero con identità DA SIRI e CTA Instagram.
3. Esperienza del salone.
4. Lavori e stile.
5. Servizi in forma generale, senza prezzi o trattamenti non confermati.
6. Prodotti e cura.
7. Galleria.
8. CTA finale e contatti Instagram.
9. Footer con dati aziendali confermati.

La sezione “Il team/I barbieri” resta sospesa finché non sono disponibili nomi,
ruoli e fotografie autorizzate.

## Criteri finali

- Composizione originale, non copia del template.
- Asset ufficiali prioritari e niente immagini stock.
- Primo viewport comprensibile e CTA funzionante.
- Mobile 360–430 px, tablet e desktop verificati visivamente.
- Nessun overflow, sovrapposizione, immagine rotta o placeholder generico.
- Menu e lightbox accessibili da tastiera.
- Supporto `prefers-reduced-motion`.
- Dati e claim esclusivamente confermati.
- Versione pubblicata corrispondente ai file verificati.

## Registro avanzamento

### T03 — Fatto

- Data: 29 luglio 2026
- Output: `docs/CONTENT.md`
- Decisioni:
  - homepage a pagina unica;
  - CTA primaria diretta al profilo Instagram ufficiale;
  - un solo H1 e ordine degli H2 definito;
  - contenuti progettati prima per viewport mobile;
  - servizi descritti solo in forma generale;
  - team escluso;
  - dati non confermati omessi dall'interfaccia.
- Checkpoint: superato. Il controllo anti-invenzione non ha rilevato indirizzi,
  telefoni, WhatsApp, orari, prezzi, recensioni, team, certificazioni o servizi
  specifici non confermati.
- File modificati:
  - `docs/CONTENT.md` — creato;
  - `docs/REDESIGN-ROADMAP.md` — creato nel progetto e T03 aggiornato a
    **Fatto**.
- Blocco per T04: nessuno. T04 non è stato avviato.

### T04 — Fatto

- Data: 29 luglio 2026
- Output: `public/media/`, `public/favicon.png` e `docs/ASSETS.md`
- Decisioni:
  - fotografie reali prioritarie e convertite in WebP;
  - interfaccia telefono rimossa dall'immagine prodotti;
  - QR Instagram conservato integro e senza filtri;
  - creato un kit logo derivato dal marchio ufficiale, con lockup verticale,
    lockup orizzontale, simbolo, varianti bianca/oro/scura e favicon;
  - nessuna immagine generata introdotta;
  - asset ambientato del logo classificato come fotografia editoriale.
- Checkpoint: superato. Logo e QR risultano leggibili; l'immagine prodotti non
  contiene barra di stato, controlli video o campo commento; i file pubblicati
  non conservano metadati EXIF.
- File modificati:
  - `public/media/logo/*` — creati;
  - `public/media/photos/*` — creati;
  - `public/media/social/instagram-qr.webp` — creato;
  - `public/favicon.png` — creato;
  - `docs/ASSETS.md` — creato;
  - `docs/REDESIGN-ROADMAP.md` — T04 aggiornato a **Fatto**.
- Blocco per T05: nessuno. T05 non è stato avviato.
