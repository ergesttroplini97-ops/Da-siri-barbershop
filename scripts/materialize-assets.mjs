import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const assets = [
  ["media/photos/salone.webp", "public/media/photos/salone.webp"],
  ["media/photos/taglio-profilo.webp", "public/media/photos/taglio-profilo.webp"],
  ["media/photos/taglio-dettaglio.webp", "public/media/photos/taglio-dettaglio.webp"],
  ["media/photos/prodotti.webp", "public/media/photos/prodotti.webp"],
  ["media/logo/da-siri-logo.png", "public/media/logo/da-siri-logo.png"],
  ["media/logo/da-siri-symbol.png", "public/media/logo/da-siri-symbol.png"],
  ["media/logo/favicon.png", "public/media/logo/favicon.png"],
  ["media/social/instagram-qr.webp", "public/media/social/instagram-qr.webp"],
];

for (const [source, destination] of assets) {
  const input = join(projectRoot, "assets-source", `${source}.b64`);
  const output = join(projectRoot, destination);
  const base64 = await readFile(input, "utf8");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, Buffer.from(base64.trim(), "base64"));
}

console.log(`Prepared ${assets.length} production assets.`);
