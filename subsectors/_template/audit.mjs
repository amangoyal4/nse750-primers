// Detailed quality audit of a sub-sector report (complements check.mjs pass/fail gate).
// Usage: node audit.mjs <report.html> "<Sector || Sub-sector>" [benchmark.html]
// Prints a markdown audit: totals vs targets vs benchmark, section-by-section table, chart mix, cards, integrity.
import fs from 'fs';
import path from 'path';

const [file, key, benchFile] = process.argv.slice(2);
const members = JSON.parse(fs.readFileSync(new URL('./members.json', import.meta.url), 'utf8'))[key] || [];
const n = members.length;
const tier = n >= 10 ? 'A' : n >= 5 ? 'B' : 'C';
const T = { A: { prose: 17000, charts: 35, tables: 10, plain: 24 }, B: { prose: 14000, charts: 30, tables: 9, plain: 22 }, C: { prose: 12000, charts: 26, tables: 8, plain: 20 } }[tier];

const strip = s => s.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>|<svg[\s\S]*?<\/svg>/g, '');
const words = s => (strip(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').match(/[A-Za-z0-9₹%][^\s]*/g) || []).length;
const prose = s => words((strip(s).match(/<(p|li)[^>]*>[\s\S]*?<\/\1>/g) || []).join(' '));
const cnt = (s, re) => (s.match(re) || []).length;
const text = s => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

function measure(h) {
  const secs = [...h.matchAll(/<section[^>]*id="(p\d+)"[^>]*>[\s\S]*?<\/section>/g)];
  const charts = s => ({
    bar: cnt(s, /<div class="bars"/g),
    stack: (s.match(/<div class="chart">(?:(?!<div class="chart">)[\s\S])*?class="stack-row"/g) || []).length,
    map: cnt(s, /<figure class="map"/g),
    flow: cnt(s, /class="flow"/g),
    timeline: cnt(s, /class="timeline"/g),
    heat: cnt(s, /<table class="heat"/g),
  });
  const chartTotal = s => cnt(s, /class="chart"/g) + cnt(s, /<figure class="map"/g) + cnt(s, /class="flow"/g) + cnt(s, /class="timeline"/g);
  const cards = [...h.matchAll(/<div class="co-card">([\s\S]*?)Read the full primer/g)].map(m => {
    const p = (m[1].match(/<p[^>]*>[\s\S]*?<\/p>/g) || []).join(' ');
    return words(p);
  });
  const kpi = (h.match(/<section[^>]*data-kpi="1"[\s\S]*?<\/section>/) || [''])[0];
  return {
    kb: Math.round(h.length / 1024), totalWords: words(h), prose: prose(h), sections: secs.length,
    dd: cnt(h.replace(/<style[\s\S]*?<\/style>/g, ''), /class="dd"/g), charts: chartTotal(h), mix: charts(h), tables: cnt(h, /<table/g), plain: cnt(h, /class="plain"/g),
    cards, kpiProse: prose(kpi), kpiH3: cnt(kpi, /<h3/g), secs, chartTotal,
    h1: text((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || ['', ''])[1]), h1em: text((h.match(/<h1[^>]*>[\s\S]*?<em>([\s\S]*?)<\/em>/) || ['', ''])[1]),
    strip: [...((h.split('stat-strip six')[1] || '').split('</div>\n</div>')[0] || '').matchAll(/<div class="v">([\s\S]*?)<\/div>\s*<div class="l">([\s\S]*?)<\/div>/g)].map(m => text(m[1]) + ' — ' + text(m[2])),
  };
}

const h = fs.readFileSync(file, 'utf8');
const M = measure(h);
const B = benchFile && fs.existsSync(benchFile) ? measure(fs.readFileSync(benchFile, 'utf8')) : null;
const ok = (v, t) => (v >= t ? '✅' : '❌');
const out = [];
out.push(`# Audit: ${path.basename(file)} — ${key} (${n} companies, tier ${tier})\n`);
out.push(`**Cover:** ${M.h1}  \n**H1 accent:** "${M.h1em}" (${M.h1em.split(/\s+/).filter(Boolean).length} words; target ≤ 8)\n`);
out.push(`**Stat strip (${M.strip.length} cells):** ${M.strip.join(' · ')}\n`);
out.push('## Totals vs target' + (B ? ' and benchmark' : ''));
out.push(`| Measure | This report | Target (tier ${tier}) | ${B ? 'Benchmark |' : ''} OK |`);
out.push(`|---|---|---|${B ? '---|' : ''}---|`);
const row = (label, v, t, b) => out.push(`| ${label} | ${v} | ${t ?? '—'} | ${B ? (b ?? '—') + ' |' : ''} ${t != null && typeof v === 'number' ? ok(v, t) : '—'} |`);
row('Running prose (p/li words)', M.prose, T.prose, B && B.prose);
row('Total words (incl. tables, labels)', M.totalWords, null, B && B.totalWords);
row('Sections', M.sections, 18, B && B.sections);
row('Deep dives', M.dd, 3, B && B.dd);
row('KPI masterclass prose', M.kpiProse, 4000, B && B.kpiProse);
row('KPI masterclass sub-heads', M.kpiH3, 12, B && B.kpiH3);
row('Chart blocks', M.charts, T.charts, B && B.charts);
row('Positioning maps', M.mix.map, 3, B && B.mix.map);
row('Tables', M.tables, T.tables, B && B.tables);
row('"In plain terms" callouts', M.plain, T.plain, B && B.plain);
row('Profile cards', M.cards.length, n, B && B.cards.length);
row('File size (KB)', M.kb, null, B && B.kb);
out.push('');
out.push(`**Chart mix:** ${M.mix.bar} bar charts · ${M.mix.stack} stacked share bars · ${M.mix.map} positioning maps · ${M.mix.flow} flow diagrams · ${M.mix.timeline} timelines · ${M.mix.heat} heat-map tables`);
const cw = M.cards.slice().sort((a, b) => a - b);
out.push(`**Profile cards:** ${M.cards.length}; prose ${cw[0] ?? 0}–${cw[cw.length - 1] ?? 0} words (median ${cw[Math.floor(cw.length / 2)] ?? 0}); cards under 50 words: ${M.cards.filter(w => w < 50).length}\n`);
out.push('## Section by section');
out.push('| # | Heading | Prose words | Charts | Tables | Callouts | Deep dive |');
out.push('|---|---|---|---|---|---|---|');
for (const s of M.secs) {
  const body = s[0];
  const head = text((body.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || ['', ''])[1]).replace(/\s*Deep dive\s*$/i, '');
  out.push(`| ${s[1].slice(1)} | ${head}${/data-kpi="1"/.test(body) ? ' **[KPI]**' : ''} | ${prose(body)} | ${M.chartTotal(body)} | ${cnt(body, /<table/g)} | ${cnt(body, /class="plain"/g)} | ${/class="dd"/.test(body) ? '✓' : ''} |`);
}
const thin = M.secs.filter(s => prose(s[0]) < 250 && !/Glossary/i.test(s[0].slice(0, 600)));
out.push('');
out.push(`**Thin sections (< 250 prose words, excluding glossary):** ${thin.length ? thin.map(s => s[1]).join(', ') : 'none'}`);
const noChart = M.secs.filter(s => M.chartTotal(s[0]) === 0 && cnt(s[0], /<table/g) === 0).map(s => s[1]);
out.push(`**Sections with no chart or table:** ${noChart.length ? noChart.join(', ') : 'none'}\n`);
// integrity
const noStyle = h.replace(/<style[\s\S]*?<\/style>/g, '');
const ids = new Set(M.secs.map(s => s[1]));
const toc = [...h.matchAll(/href="#(p\d+)"/g)].map(m => m[1]);
const linked = new Set([...h.matchAll(/href="\.\.\/primers\/([^"#]+)"/g)].map(m => m[1]));
const dir = path.dirname(path.resolve(file));
const missing = [...linked].filter(f => !fs.existsSync(path.join(dir, '..', 'primers', f)));
const unlinked = members.filter(m => m.primer && !linked.has(m.primer)).map(m => m.nse);
const banned = noStyle.match(/think of it as|priced for perfection|a long way to fall|no (room|margin) for error|grow into the multiple|call option on the future|the story will be written|the bull owns/gi) || [];
const bal = ['section', 'table', 'div', 'figure', 'svg', 'ul', 'ol'].filter(t => cnt(noStyle, new RegExp('<' + t + '[ >]', 'g')) !== cnt(noStyle, new RegExp('</' + t + '>', 'g')));
const stripTxt = (h.split('stat-strip six')[1] || '').slice(0, 1600);
out.push('## Integrity');
out.push(`- TOC links resolving: ${toc.filter(x => ids.has(x)).length}/${toc.length}`);
out.push(`- Primer links: ${linked.size} distinct; missing files: ${missing.length ? missing.join(', ') : 'none'}; member companies not linked: ${unlinked.length ? unlinked.join(', ') : 'none'}`);
out.push(`- Tag balance: ${bal.length ? 'MISMATCH in ' + bal.join(', ') : 'balanced'}`);
out.push(`- Banned phrases: ${banned.length ? banned.join(' | ') : 'none'}; "honest": ${cnt(noStyle, /honest/gi)}`);
out.push(`- Stat strip ₹-only: ${/\$|USD|US\$/.test(stripTxt) ? 'NO (USD found)' : 'yes'}; leftover CONTINUE marker: ${h.includes('CONTINUE') ? 'YES' : 'no'}`);
out.push(`- Labelled estimates: ${cnt(noStyle, /illustrative/gi)} × "illustrative", ${cnt(noStyle, /indicative/gi)} × "indicative"`);
console.log(out.join('\n'));
