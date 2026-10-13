// Format + hygiene audit of the member primers of one sub-sector (complements the content fixes).
// Usage: node primer-audit.mjs "<Sector || Sub-sector>"   (or: node primer-audit.mjs --files a.html b.html)
// Prints a markdown table, one row per primer, and exits non-zero if any primer fails a hard check.
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
let files;
if (args[0] === '--files') files = args.slice(1);
else {
  const members = JSON.parse(fs.readFileSync(new URL('./members.json', import.meta.url), 'utf8'))[args[0]];
  if (!members) { console.error('Unknown sub-sector key: ' + args[0]); process.exit(2); }
  files = members.map(m => m.primer).filter(Boolean);
}
const cat = JSON.parse(fs.readFileSync(ROOT + '/data/primers.json', 'utf8')).companies;

const strip = s => s.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>|<svg[\s\S]*?<\/svg>/g, '');
const words = s => (strip(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').match(/[A-Za-z0-9₹%][^\s]*/g) || []).length;
const BANNED = /think of|a long way to fall|priced for perfection|no (room|margin) for error|grow into (its|the) multiple|call option on the future|the story will be written|the bull owns|both can be right|both are true at once/gi;

const rows = [];
let failed = 0;
for (const f of files) {
  const p = path.join(ROOT, 'primers', f);
  if (!fs.existsSync(p)) { rows.push(`| ${f} | MISSING FILE |`); failed++; continue; }
  const h = fs.readFileSync(p, 'utf8');
  const ns = h.replace(/<style[\s\S]*?<\/style>/g, '');
  const kb = Math.round(h.length / 1024);
  const bars = (h.match(/class="bar-row"/g) || []).length;
  const plain = (h.match(/class="plain"/g) || []).length;
  const ids = new Set([...h.matchAll(/id="(p\d+)"/g)].map(m => m[1]));
  const toc = [...h.matchAll(/href="#(p\d+)"/g)].map(m => m[1]);
  const tocBad = toc.filter(x => !ids.has(x)).length;
  const sIds = (h.match(/id="s\d/g) || []).length;
  const banned = (ns.match(BANNED) || []);
  const honest = (ns.match(/honest/gi) || []).length;
  const i = h.indexOf('class="stat-strip');
  const cells = i < 0 ? '' : (h.slice(i).split(/class="refresh|<\/header>/)[0]);
  const usd = /\$|USD|US\$/.test(cells.replace(/<[^>]+>/g, ' ').replace(/\$\/(bbl|t)\b/g, ''));
  const back = /class="sp-back"/.test(h), pdf = /dl-btn/.test(h) && /pdf-print-style/.test(h);
  const grid = /main\{min-width:0;?\}/.test(h.replace(/\s/g, ''));
  const ss = (h.match(/class="ss-link"/g) || []).length;
  const prov = /Auto-generated · figures self-verified/.test(h);
  const c = cat.find(x => x.file === 'primers/' + f);
  const hard = [kb < 58 && 'size<58KB', bars < 10 && 'bars<10', bars > 22 && 'bars>22', plain < 8 && 'plain<8', tocBad && 'TOC', sIds && 's-anchors',
    banned.length && 'banned', honest > 1 && 'honest>1', usd && 'USD-in-strip', !back && 'no-back', !pdf && 'no-PDF', prov && 'provenance-line'].filter(Boolean);
  const soft = [!grid && 'no main{min-width:0} (phone overflow)', !c && 'not-in-catalog'].filter(Boolean);
  if (hard.length) failed++;
  rows.push(`| ${f} | ${kb} | ${words(h.match(/<main[\s\S]*<\/main>/)?.[0] || h)} | ${bars} | ${plain} | ${ids.size} | ${ss} | ${c ? c.refreshed : '—'} | ${hard.length ? '❌ ' + hard.join(', ') : '✅'} | ${soft.join('; ') || '—'} |`);
}
console.log('| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |');
console.log('|---|---|---|---|---|---|---|---|---|---|');
console.log(rows.join('\n'));
console.log(`\n${failed ? failed + ' primer(s) FAIL a hard check' : 'All primers pass the hard format checks'}`);
process.exit(failed ? 1 : 0);
