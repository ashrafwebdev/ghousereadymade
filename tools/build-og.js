#!/usr/bin/env node
/*
 * Share-image builder (optional). Creates images/og/<product-id>.jpg — the
 * 1200×630 picture shown when a product link is shared on WhatsApp,
 * Facebook etc. Needs Playwright (npm i -D playwright) and a Chromium.
 *
 *     node tools/build-og.js && node tools/build-seo.js
 *
 * Prices are left off the image on purpose, so it stays correct when the
 * offer changes.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");

const ROOT = path.join(__dirname, "..");
const ctx = { window: {} };
vm.createContext(ctx);
["js/config.js", "js/products.js", "js/art.js"].forEach((f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx));
const { STORE: S, PRODUCTS, productArt } = ctx.window;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function card(p) {
  const pic = p.images && p.images.length
    ? '<img src="file://' + path.join(ROOT, p.images[0]) + '">'
    : productArt(p);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    body{margin:0;width:1200px;height:630px;display:flex;font-family:"Noto Sans Tamil","Noto Sans",Arial,sans-serif;background:#fff6ea;
      background-image:radial-gradient(rgba(91,26,82,.12) 2px,transparent 2.2px);background-size:26px 26px}
    .pic{width:630px;height:630px;flex-shrink:0;background:hsl(${p.tint},80%,95%)}
    .pic img,.pic svg{width:630px;height:630px;object-fit:cover;display:block}
    .txt{flex:1;padding:56px 48px;display:flex;flex-direction:column;justify-content:center;gap:14px}
    .brand{display:flex;align-items:center;gap:14px;color:#7c2672;font-weight:800;font-size:30px}
    .seal{width:70px;height:70px;border-radius:50%;background:#d7194a;color:#fff;display:grid;place-items:center;font-size:26px;font-weight:900;
      box-shadow:0 0 0 4px #fff,0 0 0 8px #f5b301;transform:rotate(-10deg)}
    h1{margin:10px 0 0;font-size:54px;line-height:1.08;color:#5b1a52}
    .ta{font-size:34px;color:#d7194a;font-weight:700}
    .pill{margin-top:18px;align-self:flex-start;background:#25d366;color:#06351f;font-weight:800;font-size:26px;padding:12px 24px;border-radius:999px}
    .ship{font-size:24px;color:#4e3848}
  </style></head><body>
    <div class="pic">${pic}</div>
    <div class="txt">
      <div class="brand"><span class="seal">GR</span>${esc(S.name.ta)}<br>${esc(S.name.en)} · Lalpet</div>
      <h1>${esc(p.en)}</h1>
      <div class="ta">${esc(p.ta)}</div>
      <div class="pill">Order on WhatsApp</div>
      <div class="ship">₹${S.shipping.fee} shipping · all over Tamil Nadu</div>
    </div></body></html>`;
}

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  fs.mkdirSync(path.join(ROOT, "images/og"), { recursive: true });
  for (const p of PRODUCTS) {
    const tmp = path.join(ROOT, "images/og/.tmp.html");
    fs.writeFileSync(tmp, card(p));
    await page.goto("file://" + tmp);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(ROOT, "images/og/" + p.id + ".jpg"), type: "jpeg", quality: 80 });
    fs.unlinkSync(tmp);
  }
  await browser.close();
  console.log("Share images written for " + PRODUCTS.length + " products in images/og/");
})();
