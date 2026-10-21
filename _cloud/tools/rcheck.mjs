// Render check (cloud version of subsectors/_template/rcheck.js), using headless Chromium via Playwright.
// Setup once per session:  cd /tmp/rc && npm i playwright@1.47.2 && npx playwright install --with-deps chromium
// Run:  NODE_PATH=/tmp/rc/node_modules node _cloud/tools/rcheck.mjs subsectors/<slug>.html
// Required: scrollW <= width at 1024 and 375; issues = []; rotatedOps = 0; h1lines <= 4 at 1024.
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const file = path.resolve(process.argv[2]);
const browser = await chromium.launch();
const out = {};
for (const w of [1024, 375]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  await page.goto('file://' + file, { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  out[w] = await page.evaluate(() => {
    const d = document;
    const r = { scrollW: d.documentElement.scrollWidth };
    const ov = (a, b) => !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
    const issues = [];
    d.querySelectorAll('svg').forEach((s, si) => {
      const txt = [...s.querySelectorAll('text')].map(t => ({ t, b: t.getBoundingClientRect() })).filter(x => x.b.width > 0);
      const dots = [...s.querySelectorAll('circle')].map(c => c.getBoundingClientRect()).filter(b => b.width > 0);
      for (let i = 0; i < txt.length; i++) {
        for (let j = i + 1; j < txt.length; j++) if (ov(txt[i].b, txt[j].b)) issues.push(`svg${si} text "${txt[i].t.textContent.slice(0, 20)}" x "${txt[j].t.textContent.slice(0, 20)}"`);
        for (const db of dots) if (db.width < 30 && ov(txt[i].b, db)) issues.push(`svg${si} text "${txt[i].t.textContent.slice(0, 20)}" over dot`);
      }
    });
    d.querySelectorAll('.map, .pos-map, [class*=map]').forEach((m, mi) => {
      const els = [...m.querySelectorAll('.lbl, .label, .dot-label, span, .q')].map(e => ({ e, b: e.getBoundingClientRect() })).filter(x => x.b.width > 0 && x.e.children.length === 0);
      for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) if (ov(els[i].b, els[j].b) && !els[i].e.contains(els[j].e)) issues.push(`map${mi} "${els[i].e.textContent.slice(0, 18)}" x "${els[j].e.textContent.slice(0, 18)}"`);
    });
    r.issues = [...new Set(issues)].slice(0, 25);
    r.rotatedOps = [...d.querySelectorAll('.arrow.op')].map(e => getComputedStyle(e).transform).filter(t => t !== 'none').length;
    const h1 = d.querySelector('h1');
    r.h1lines = Math.round(h1.getBoundingClientRect().height / parseFloat(getComputedStyle(h1).lineHeight));
    // Overflow culprits: text nodes (e.g. long URLs) and elements past the viewport that are not inside a scroll wrapper.
    const W = innerWidth + 2, culprits = [];
    const tw = d.createTreeWalker(d.body, NodeFilter.SHOW_TEXT); let n;
    while ((n = tw.nextNode())) {
      if (!n.textContent.trim()) continue;
      const p = n.parentElement; if (p.closest('.tbl-wrap,.peer-wrap,figure.map')) continue;
      const rg = d.createRange(); rg.selectNodeContents(n);
      if (rg.getBoundingClientRect().right > W) culprits.push(`${p.tagName} #${p.closest('section')?.id}: ${n.textContent.slice(0, 50)}`);
    }
    d.querySelectorAll('body *').forEach(e => { if (e.getBoundingClientRect().right > W && !e.closest('.tbl-wrap,.peer-wrap,figure.map')) culprits.push(`${e.tagName}.${e.className.baseVal ?? e.className} #${e.closest('section')?.id}`); });
    r.overflowCulprits = [...new Set(culprits)].slice(0, 10);
    return r;
  });
  await page.close();
}
await browser.close();
console.log(JSON.stringify(out, null, 1));
const ok = out[1024].scrollW <= 1024 && out[375].scrollW <= 375 && !out[1024].issues.length && !out[375].issues.length && !out[1024].rotatedOps && !out[375].rotatedOps && out[1024].h1lines <= 4;
console.log(ok ? 'RENDER PASSED' : 'RENDER FAILED');
