# DA SIRI Barbershop — Registro asset

## Regole

- `ufficiale`: file fornito dal cliente, senza alterazioni di contenuto.
- `derivata`: ritaglio, conversione o variante cromatica ottenuta da un asset ufficiale.
- Nessun asset generato è stato introdotto nel micro-task T04.

## Fotografie

| File web | Provenienza | Tipo | Destinazione prevista | Note |
| --- | --- | --- | --- | --- |
| `public/media/photos/salone-interno.webp` | `1000076261.jpg` | ufficiale/derivata | Hero, esperienza | Conversione WebP, metadati rimossi. |
| `public/media/photos/salone-ritratto.webp` | `Screenshot_20260729_012630_Instagram.jpg` | ufficiale/derivata | Galleria | Conversione WebP, nessuna UI presente. |
| `public/media/photos/taglio-sfumatura.webp` | `Screenshot_20260729_012203_Instagram.jpg` | ufficiale/derivata | Lavori e stile | Conversione WebP, metadati rimossi. |
| `public/media/photos/prodotti-styling.webp` | `Screenshot_20260729_012025_Instagram.jpg` | ufficiale/derivata | Prodotti e cura | Rimossi barra di stato, controlli video e campo commento. |
| `public/media/photos/logo-ambientato.webp` | `1000076249.jpg` | ufficiale/derivata | Galleria/editoriale | Da usare come fotografia, non come logo UI. |

## Logo

Le varianti sono estratte dal marchio ufficiale visibile in `1000076249.jpg`.
Non sono stati ridisegnati personaggio o lettering.

| File | Tipo | Uso |
| --- | --- | --- |
| `public/media/logo/da-siri-lockup-white.png` | derivata | Lockup verticale su fondo scuro. |
| `public/media/logo/da-siri-lockup-gold.png` | derivata | Lockup verticale oro caldo. |
| `public/media/logo/da-siri-lockup-dark.png` | derivata | Lockup verticale su fondo chiaro. |
| `public/media/logo/da-siri-horizontal-white.png` | derivata | Header/menu/footer su fondo scuro. |
| `public/media/logo/da-siri-horizontal-gold.png` | derivata | CTA o accento editoriale. |
| `public/media/logo/da-siri-mark-white.png` | derivata | Simbolo compatto su fondo scuro. |
| `public/media/logo/da-siri-mark-gold.png` | derivata | Simbolo compatto oro. |
| `public/media/logo/da-siri-app-icon.png` | derivata | Icona app/social ad alta densità. |
| `public/favicon.png` | derivata | Favicon 64×64. |

### Clear space e dimensioni minime

- Lockup completo: spazio libero minimo pari all'altezza della lettera `B` di “BARBER SHOP”.
- Simbolo: spazio libero minimo pari al 12% della sua larghezza.
- Lockup orizzontale: non scendere sotto 150 px CSS.
- Lockup verticale: non scendere sotto 120 px CSS.
- Simbolo: non scendere sotto 28 px CSS; sotto 48 px usare la variante favicon.
- Usare bianco/oro su antracite e la variante scura soltanto su fondi chiari uniformi.

## Social

| File web | Provenienza | Tipo | Uso |
| --- | --- | --- | --- |
| `public/media/social/instagram-qr.webp` | `Screenshot_20260729_012646_Instagram.jpg` | ufficiale/derivata | CTA finale e contatti Instagram. |

Il QR deve essere mostrato senza filtri, deformazioni o crop, con lato minimo
consigliato di 180 px CSS e margine libero attorno.

