import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function readJpegDimensions(image) {
  assert.equal(image[0], 0xff);
  assert.equal(image[1], 0xd8);

  let offset = 2;

  while (offset < image.length) {
    if (image[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = image[offset + 1];
    offset += 2;

    if (marker === 0xd9 || marker === 0xda) {
      break;
    }

    const segmentLength = image.readUInt16BE(offset);

    if (marker === 0xc0) {
      return {
        height: image.readUInt16BE(offset + 3),
        width: image.readUInt16BE(offset + 5),
      };
    }

    offset += segmentLength;
  }

  assert.fail("social preview must use a baseline JPEG");
}

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
  assert.match(html, /href="https:\/\/rentalall\.ru\/"/);
  assert.doesNotMatch(html, /dev\.rentalall\.ru/);
  assert.match(html, /QobuzSync/);
  assert.match(html, /ПрофиРем/);
  assert.match(html, /href="https:\/\/profirem-kirov\.ru\/"/);
  assert.equal((html.match(/class="project-card"/g) ?? []).length, 3);
  assert.doesNotMatch(html, /Два проекта/);
  assert.match(html, /@orysege/);
  assert.match(html, /href="https:\/\/maark\.ru\/favicon\.ico"/);
  assert.match(html, /href="https:\/\/maark\.ru\/favicon\.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders arrow icons as SVG instead of emoji-capable text", async () => {
  const html = await (await render()).text();
  assert.doesNotMatch(html, /[↗↘↓]/u);
  assert.equal((html.match(/<svg class="arrow-icon"/g) ?? []).length, 14);
});

test("renders two identical ticker groups with the extended skill labels", async () => {
  const html = await (await render()).text();
  const groups = [...html.matchAll(/<div class="signal-group">(.*?)<\/div>/g)];
  assert.equal(groups.length, 2);
  assert.equal(groups[0][1], groups[1][1]);
  for (const label of ["Код", "Инфраструктура", "AI", "Продукт", "Backend", "Frontend", "DevOps", "Автоматизация"]) {
    assert.ok(groups[0][1].includes(label), `missing ticker label: ${label}`);
  }
  assert.doesNotMatch(groups[0][1], /✳/u);
});

test("declares the real social preview dimensions", async () => {
  const response = await render();
  const html = await response.text();
  const image = await readFile(
    new URL("../public/og-telegram-v2.jpg", import.meta.url),
  );

  assert.match(
    html,
    /property="og:image" content="https:\/\/maark\.ru\/og-telegram-v2\.jpg"/,
  );
  assert.match(
    html,
    /property="og:image:secure_url" content="https:\/\/maark\.ru\/og-telegram-v2\.jpg"/,
  );
  assert.match(html, /property="og:image:type" content="image\/jpeg"/);
  assert.ok(
    image.length < 250_000,
    `social preview is too large: ${image.length} bytes`,
  );

  const { width: actualWidth, height: actualHeight } =
    readJpegDimensions(image);
  const declaredWidth = Number(
    html.match(/property="og:image:width" content="(\d+)"/)?.[1],
  );
  const declaredHeight = Number(
    html.match(/property="og:image:height" content="(\d+)"/)?.[1],
  );

  assert.equal(declaredWidth, actualWidth);
  assert.equal(declaredHeight, actualHeight);
});
