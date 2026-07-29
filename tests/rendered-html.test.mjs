import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /<html[^>]*\blang=["']it["']/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, /Il tuo stile\./i);
  assert.match(html, /Senza compromessi\./i);
  assert.match(html, /id=["']salone["']/i);
  assert.match(html, /id=["']servizi["']/i);
  assert.match(html, /id=["']cura["']/i);
  assert.match(html, /id=["']galleria["']/i);
  assert.match(html, /id=["']contatti["']/i);
  assert.match(html, /@da\.siri_barbershop/i);
  assert.match(html, /application\/ld\+json/i);
});
