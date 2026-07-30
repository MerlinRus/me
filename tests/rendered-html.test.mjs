import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
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
}

test("server-renders the MAARK portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>MAARK — AI-разработчик и DevOps<\/title>/i);
  assert.match(html, /RentalAll/);
  assert.match(html, /QobuzSync/);
  assert.match(html, /@orysege/);
  assert.match(html, /href="https:\/\/maark\.ru\/favicon\.ico"/);
  assert.match(html, /href="https:\/\/maark\.ru\/favicon\.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("declares the real social preview dimensions", async () => {
  const response = await render();
  const html = await response.text();
  const image = await readFile(
    new URL("../public/og-1200.png", import.meta.url),
  );

  assert.match(
    html,
    /property="og:image" content="https:\/\/maark\.ru\/og-1200\.png"/,
  );
  assert.match(
    html,
    /property="og:image:secure_url" content="https:\/\/maark\.ru\/og-1200\.png"/,
  );
  assert.match(html, /property="og:image:type" content="image\/png"/);
  assert.deepEqual(
    [...image.subarray(1, 4)],
    [0x50, 0x4e, 0x47],
    "social preview must be a PNG",
  );

  const actualWidth = image.readUInt32BE(16);
  const actualHeight = image.readUInt32BE(20);
  const declaredWidth = Number(
    html.match(/property="og:image:width" content="(\d+)"/)?.[1],
  );
  const declaredHeight = Number(
    html.match(/property="og:image:height" content="(\d+)"/)?.[1],
  );

  assert.equal(declaredWidth, actualWidth);
  assert.equal(declaredHeight, actualHeight);
});
