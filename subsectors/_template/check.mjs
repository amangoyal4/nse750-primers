// Quality gate for a sub-sector report. Usage:
//   node check.mjs <report.html> "<Sector || Sub-sector>"
// Exits non-zero if any hard check fails. Thresholds scale with the number of listed companies.
import fs from 'fs';
import path from 'path';

const file = process.argv[2], key = process.argv[3];
const dir = path.dirname(path.resolve(file));
const members = JSON.parse(fs.readFileSync(new URL('./members.json', import.meta.url), 'utf8'))[key];
if (!members) { console.error('Unknown sub-sector key: ' + key); process.exit(2); }
const n = members.length;
const h = fs.readFileSync(file, 'utf8');
const noStyle = h.replace(/<style[\s\S]*?<\/style>/g, '');
const strip = s => s.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>|<svg[\s\S]*?<\/svg>/g, '');
const words = s => (strip(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').match(/[A-Za-z0-9₹%][^\s]*/g) || []).length;
const prose = s => words((strip(s).match(/<(p|li)[^>]*>[\s\S]*?<\/\1>/g) || []).join(' '));
const cnt = re => (h.match(re) || []).length;

const tier = n >= 10 ? 'A' : n >= 5 ? 'B' : 'C';
const T = { A: { prose: 17000, charts: 35, tables: 10, plain: 24 }, B: { prose: 14000, charts: 30, tables: 9, plain: 22 }, C: { prose: 12000, charts: 26, tables: 8, plain: 20 } }[tier];

const res = [];
const check = (ok, label, detail) => res.push({ ok, label, detail });

const totalProse = prose(h);
check(totalProse >= T.prose, `Running prose ≥ ${T.prose} (tier ${tier}, ${n} cos)`, totalProse);
const secs = [...h.matchAll(/<section[^>]*id="(p\d+)"[^>]*>/g)];
check(secs.length >= 18 && secs.length <= 24, 'Sections 18–24', secs.length);
const ids = new Set(secs.map(m => m[1]));
const toc = [...h.matchAll(/href="#(p\d+)"/g)].map(m => m[1]);
check(toc.length >= secs.length && toc.every(x => ids.has(x)), 'Every TOC link resolves', `${toc.length} links`);

const kpi = h.match(/<section[^>]*data-kpi="1"[^>]*>[\s\S]*?<\/section>/);
check(!!kpi, 'KPI masterclass section marked data-kpi="1"', !!kpi);
if (kpi) {
  const kp = prose(kpi[0]), h3 = (kpi[0].match(/<h3/g) || []).length;
  check(kp >= 4000, 'KPI section prose ≥ 4,000', kp);
  check(h3 >= 12, 'KPI section ≥ 12 sub-heads', h3);
  check(/class="dd"/.test(kpi[0]), 'KPI section marked Deep dive', true);
  check(/class="flow"/.test(kpi[0]), 'KPI section opens with an equation/flow diagram', /class="flow"/.test(kpi[0]));
  check(/10 minutes|ten minutes/i.test(kpi[0]), 'KPI section has the "read the results in 10 minutes" guide', /10 minutes|ten minutes/i.test(kpi[0]));
}
// No section may be just a table/chart: every section except the glossary needs >= 250 words of running prose.
const thin = [...h.matchAll(/<section[^>]*id="(p\d+)"[^>]*>[\s\S]*?<\/section>/g)]
  .filter(m => !/Glossary/i.test(m[0].slice(0, 800)) && prose(m[0]) < 250).map(m => `${m[1]} (${prose(m[0])})`);
check(thin.length === 0, 'Every section (except glossary) has ≥ 250 words of prose', thin.join(', ') || 'ok');
const charts = cnt(/class="chart"/g) + cnt(/<figure class="map"/g) + cnt(/class="flow"/g) + cnt(/class="timeline"/g);
check(charts >= T.charts, `Chart blocks ≥ ${T.charts}`, charts);
check(cnt(/<figure class="map"/g) >= 3, 'Positioning maps ≥ 3', cnt(/<figure class="map"/g));
check(cnt(/<table/g) >= T.tables, `Tables ≥ ${T.tables}`, cnt(/<table/g));
check(/<table class="peer"/.test(h), 'Peer table present', /<table class="peer"/.test(h));
check(cnt(/class="plain"/g) >= T.plain, `"In plain terms" callouts ≥ ${T.plain}`, cnt(/class="plain"/g));
check((noStyle.match(/class="dd"/g) || []).length >= 3, 'Deep-dive sections ≥ 3 (incl. KPI)', (noStyle.match(/class="dd"/g) || []).length);
check(cnt(/class="co-card"/g) === n, `Profile cards = ${n}`, cnt(/class="co-card"/g));

const linked = new Set([...h.matchAll(/href="\.\.\/primers\/([^"#]+)"/g)].map(m => m[1]));
const missingFiles = [...linked].filter(f => !fs.existsSync(path.join(dir, '..', 'primers', f)));
check(missingFiles.length === 0, 'Every primer link points to an existing file', missingFiles.join(', ') || 'ok');
const unlinked = members.filter(m => m.primer && !linked.has(m.primer)).map(m => m.nse);
check(unlinked.length === 0, 'Every member company links to its primer', unlinked.join(', ') || 'ok');

for (const t of ['section', 'table', 'div', 'figure', 'svg', 'ul', 'ol', 'main']) {
  const o = (noStyle.match(new RegExp('<' + t + '[ >]', 'g')) || []).length, c = (noStyle.match(new RegExp('</' + t + '>', 'g')) || []).length;
  if (o !== c) check(false, `Tag balance <${t}>`, `${o} open / ${c} close`);
}
check(!h.includes('CONTINUE'), 'No leftover CONTINUE marker', !h.includes('CONTINUE'));
const banned = noStyle.match(/think of it as|priced for perfection|a long way to fall|no (room|margin) for error|grow into the multiple|call option on the future|the story will be written|the bull owns/gi) || [];
check(banned.length === 0, 'Zero banned phrases', banned.join(' | ') || 0);
const honest = (noStyle.match(/honest/gi) || []).length;
check(honest <= 1, '"honest" at most once', honest);
const strip6 = (h.split('stat-strip six')[1] || '').slice(0, 1600);
check(/stat-strip six/.test(h) && !/\$|USD|US\$/.test(strip6), '6-cell stat strip present, ₹ only', true);
check(/class="sp-back"/.test(h) && /href="index\.html"[^>]*class="sp-back"|class="sp-back"[^>]*href="index\.html"/.test(h), 'Back button → sub-sector index', true);
check(/dl-btn/.test(h) && /pdf-print-style/.test(h), 'PDF button + print CSS', true);
check(/main\{min-width:0;?\}/.test(h.replace(/\s/g, '')), 'Kit grid fix present (main{min-width:0})', true);
const kb = Math.round(h.length / 1024);
check(kb <= 500, 'File ≤ 500 KB', kb + ' KB');

const fails = res.filter(r => !r.ok);
res.forEach(r => console.log((r.ok ? 'PASS ' : 'FAIL ') + r.label + '  [' + r.detail + ']'));
console.log(`\n${fails.length ? 'GATE FAILED' : 'GATE PASSED'}: ${res.length - fails.length}/${res.length} checks · ${totalProse} prose words · ${words(h)} total words · ${kb} KB`);
process.exit(fails.length ? 1 : 0);
