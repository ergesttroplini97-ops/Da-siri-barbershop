# Deploy su Vercel — DA SIRI Barbershop

Questo documento descrive come pubblicare su Vercel **lo stesso identico sito**
oggi ospitato su ChatGPT Sites
(`https://da-siri-barbershop.ergest-troplini97.chatgpt.site`), senza rompere il
progetto Sites esistente.

---

## 1. Perché serve una configurazione dedicata

Il repository nasce dallo starter `vinext-starter` di ChatGPT Sites, che gira su
**Cloudflare Workers**, non su Vercel:

| Elemento | A cosa serve | Rilevante per Vercel |
| --- | --- | --- |
| `app/` (layout, page, componenti, `globals.css`) | Il sito vero e proprio, Next.js App Router | **Sì** |
| `public/` + `assets-source/*.b64` | Immagini, logo, favicon | **Sì** |
| `vite.config.ts`, `worker/index.ts`, `build/sites-vite-plugin.ts` | Runtime Cloudflare Workers + ottimizzazione immagini | No |
| `db/`, `.openai/hosting.json` | Binding D1/R2 (schema vuoto, non usato dal sito) | No |
| `scripts/*.sh` | Install/build bloccati e verificati del runtime Sites | No |

Il codice del sito è **Next.js standard** (App Router, `next/font/google`,
Metadata API, tag `<img>` nativi, nessuna chiamata a D1), quindi gira su Vercel
senza riscritture. Serve solo dire a Vercel di usare il compilatore Next
ufficiale invece della catena Vite/Wrangler.

Cosa è stato aggiunto per ottenere questo:

- `vercel.json` — framework, install e build command espliciti;
- `package.json` — script `build:vercel`, `dev:vercel`, `start:vercel`;
- `tsconfig.vercel.json` — esclude dal type check i file solo-Cloudflare
  (`worker/`, `db/`, `vite.config.ts`), che altrimenti fanno fallire
  `next build` con `Cannot find module 'cloudflare:workers'`;
- `next.config.ts` — usa quel tsconfig **solo** quando `process.env.VERCEL` è
  presente, così la build di ChatGPT Sites resta identica a prima;
- `app/site-url.ts` — URL canonico configurabile via `NEXT_PUBLIC_SITE_URL`.

> `public/media/` è in `.gitignore`: le immagini vivono in `assets-source/` come
> file `.b64` e vengono materializzate a ogni build da
> `scripts/materialize-assets.mjs`. Per questo `build:vercel` esegue prima quello
> script e poi `next build`. Non rimuovere quel passaggio, altrimenti il deploy
> esce senza immagini.

---

## 2. Deploy: procedura consigliata (Git, ripetibile)

1. **Merge del branch** `claude/vercel-deploy-chatgpt-site-ec2mfp` su `main`.
2. Su [vercel.com/new](https://vercel.com/new) → **Import Git Repository** →
   `ergesttroplini97-ops/Da-siri-barbershop`.
3. Nella schermata di import lasciare tutto ai valori rilevati: `vercel.json`
   imposta già Framework `Next.js`, Install `npm ci`, Build `npm run build:vercel`.
   Non serve alcuna Root Directory personalizzata.
4. **Settings → General → Node.js Version**: `22.x` o superiore
   (`package.json` richiede `>=22.13.0`; il progetto in produzione usa `24.x`).
5. **Settings → Environment Variables** (Production + Preview), opzionale ma
   consigliato quando Vercel diventa il sito principale:

   | Nome | Valore |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://<dominio-finale>` |

   Se non la imposti, il canonical, l'Open Graph e il JSON-LD continuano a
   puntare al dominio `chatgpt.site` — comportamento voluto finché quello resta
   il sito ufficiale.
6. **Deploy**. La prima build richiede circa 1–2 minuti.
7. **Settings → Domains**: aggiungere il dominio definitivo (es.
   `dasiribarbershop.com`) e puntare i record DNS come indicato da Vercel.
   Dopo aver collegato il dominio, aggiornare `NEXT_PUBLIC_SITE_URL` e fare un
   redeploy per allineare i metadati.

Da qui in poi ogni push su `main` pubblica in produzione e ogni PR crea una
preview con URL dedicato.

### Alternativa: deploy da CLI

```bash
npm i -g vercel
vercel link                 # collega la cartella al progetto Vercel
vercel --prod               # build remota + deploy in produzione
```

---

## 3. Verifica locale prima di pubblicare

Riproduce esattamente ciò che fa Vercel:

```bash
npm ci
VERCEL=1 npm run build:vercel
npm run start:vercel        # http://localhost:3000
```

Build attesa: `✓ Compiled successfully`, TypeScript verde, route `/` marcata
`○ (Static)`.

Sviluppo quotidiano con il compilatore Next (hot reload):

```bash
npm run dev:vercel
```

Checklist da controllare sulla pagina servita:

- `<html lang="it">`, un solo `<h1>` ("Il tuo stile. Senza compromessi.");
- sezioni `#salone`, `#servizi`, `#cura`, `#galleria`, `#contatti`;
- link Instagram `@da.siri_barbershop`;
- blocco `application/ld+json` con lo schema `HairSalon`;
- immagini `/media/photos/*.webp`, `/media/logo/*.png`,
  `/media/social/instagram-qr.webp` che rispondono `200`.

---

## 4. Convivenza con ChatGPT Sites

Le due pubblicazioni restano indipendenti e possono coesistere:

- **ChatGPT Sites** continua a usare `npm run build` (`scripts/build-verified.sh`
  → `vinext build`), `vite.config.ts`, `worker/index.ts` e
  `.openai/hosting.json`. Nessuno di questi file è stato modificato nel
  comportamento.
- **Vercel** usa `npm run build:vercel` (`next build`) e ignora del tutto il
  runtime Cloudflare.

L'unica differenza tecnica a runtime è l'ottimizzazione immagini: su Cloudflare
passa dall'endpoint `/_vinext/image` del worker, su Vercel non è coinvolta
perché la pagina usa tag `<img>` nativi con file `.webp`/`.png` già ottimizzati.
Il risultato visivo è identico.

Se in futuro si abbandona ChatGPT Sites, si possono rimuovere `worker/`, `db/`,
`build/`, `vite.config.ts`, `.openai/`, `scripts/*.sh` e le dipendenze
`vinext`/`wrangler`/`@cloudflare/*`, sostituendo gli script `dev`/`build`/`start`
con quelli Next. Finché entrambi servono, lasciare tutto com'è.

---

## 5. Problemi possibili e soluzione

| Sintomo in build | Causa | Soluzione |
| --- | --- | --- |
| `Cannot find module 'cloudflare:workers'` | Vercel sta usando `tsconfig.json` invece di `tsconfig.vercel.json` | Verificare che `next.config.ts` contenga il ramo `process.env.VERCEL` e che la variabile di sistema `VERCEL` non sia stata sovrascritta |
| Build fallisce su `scripts/build-verified.sh` (`requires GNU timeout`/`flock`) | Vercel sta eseguendo `npm run build` invece di `npm run build:vercel` | Controllare che `vercel.json` sia nella root e che in Settings → Build & Development il Build Command non sia stato sovrascritto a mano |
| Sito online ma senza immagini / 404 su `/media/...` | `materialize-assets.mjs` non eseguito | Il Build Command deve essere `npm run build:vercel`, non `next build` |
| `engine "node" is incompatible` | Node < 22.13 | Settings → General → Node.js Version = `22.x` o superiore |
| Open Graph o canonical con il dominio sbagliato | `NEXT_PUBLIC_SITE_URL` mancante o non allineata | Impostare la variabile e rifare il deploy |
