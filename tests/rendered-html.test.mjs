import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function renderHome() {
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

  return response.text();
}

test("renders development preview metadata", async () => {
  assert.match(await renderHome(), developmentPreviewMeta);
});

test("renders the accessible DA SIRI navigation", async () => {
  const html = await renderHome();

  assert.match(html, /src="\/media\/logo\/da-siri-horizontal-white\.png"/);
  assert.match(html, /aria-label="Navigazione principale"/);

  for (const target of [
    "#salone",
    "#stile",
    "#servizi",
    "#cura",
    "#galleria",
    "#contatti",
  ]) {
    assert.match(html, new RegExp(`href="${target}"`));
  }

  assert.match(html, /aria-controls="site-menu"/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /id="site-menu"/);
  assert.match(html, /aria-modal="true"/);
  assert.match(
    html,
    /href="https:\/\/www\.instagram\.com\/da\.siri_barbershop\/"/,
  );
  assert.match(html, /Scrivici su Instagram/);
});
