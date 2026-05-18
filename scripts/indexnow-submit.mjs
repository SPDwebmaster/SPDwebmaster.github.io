#!/usr/bin/env node
// Pings IndexNow with every URL in the built sitemap so Bing (and therefore
// ChatGPT / Copilot / Perplexity / DuckDuckGo / Yandex) reindexes quickly.
//
// Runs as a postbuild step. Skips when not on Vercel production unless
// FORCE_INDEXNOW=1 is set, so local builds don't spam the API.

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const KEY = "789395cbd3f4720d9d0f9816656585f2";
const HOST = "www.spdcalpoly.com";
const SITEMAP_PATH = resolve("dist/sitemap-0.xml");

const isVercelProd = process.env.VERCEL_ENV === "production";
const forced = process.env.FORCE_INDEXNOW === "1";

if (!isVercelProd && !forced) {
  console.log("[indexnow] skipped (not Vercel production; set FORCE_INDEXNOW=1 to override)");
  process.exit(0);
}

if (!existsSync(SITEMAP_PATH)) {
  console.warn(`[indexnow] no sitemap at ${SITEMAP_PATH}, skipping`);
  process.exit(0);
}

const xml = await readFile(SITEMAP_PATH, "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].trim())
  .filter((u) => u.startsWith(`https://${HOST}`));

if (urls.length === 0) {
  console.warn("[indexnow] no URLs extracted, skipping");
  process.exit(0);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
};

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const body = await res.text().catch(() => "");
console.log(`[indexnow] ${res.status} for ${urls.length} URL(s)${body ? ` :: ${body}` : ""}`);

// 200 = accepted, 202 = accepted (pending), 422 = some URLs invalid (not fatal)
// Don't fail the build on IndexNow errors — it's a best-effort signal.
if (res.status >= 500) {
  console.warn("[indexnow] server error, ignoring");
}
