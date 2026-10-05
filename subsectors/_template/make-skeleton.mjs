// Builds _template/skeleton.html from an approved report: locked head/CSS/scaffolding + one real example of each component.
// Usage: node make-skeleton.mjs ../hospitals.html
import fs from 'fs';
const src = process.argv[2];
const h = fs.readFileSync(src, 'utf8');

function grab(openRe, tag) {
  openRe.lastIndex = h.indexOf("<body");
  const m = openRe.exec(h);
  if (!m) return null;
  const start = m.index;
  const t = new RegExp(`<(/?)${tag}(?=[\\s>])[^>]*>`, 'g');
  t.lastIndex = start;
  let depth = 0, x;
  while ((x = t.exec(h))) {
    depth += x[1] ? -1 : 1;
    if (depth === 0) return h.slice(start, t.lastIndex);
  }
  return null;
}

const ex = [
  ['Section head: number + h2 + part-sub', /<div class="part-head"/, 'div'],
  ['Bar chart (.chart/.bars/.bar-row)', /<div class="chart">(?=(?:(?!<div class="chart">)[\s\S]){0,700}?<div class="bars")/, 'div'],
  ['Stacked share bar (.stack-row)', /<div class="chart">(?=(?:(?!<div class="chart">)[\s\S]){0,700}?class="stack-row")/, 'div'],
  ['In plain terms callout', /<div class="plain">/, 'div'],
  ['Flow / value chain / equation', /<div class="flow">/, 'div'],
  ['Positioning map (figure.map + inline SVG)', /<figure class="map">/, 'figure'],
  ['Timeline', /<(?:ul|ol) class="timeline">/, 'ul'],
  ['Mini stats', /<div class="mini-stats">/, 'div'],
  ['Bull / bear', /<div class="bb">/, 'div'],
  ['Heat-map table', /<table class="heat">/, 'table'],
  ['Peer table (wrapper + table)', /<div class="peer-wrap">/, 'div'],
  ['Company profile card', /<div class="co-card">/, 'div'],
  ['Generic table wrapper', /<div class="tbl-wrap">/, 'div'],
];

const coverEnd = h.indexOf('</header>') + '</header>'.length;
let out = h.slice(0, coverEnd) + `

<!-- =================== LOCKED SUB-SECTOR SKELETON ===================
 Everything ABOVE (head, CSS, PDF button, print header, back button, grid, TOC, cover) is the locked format.
 Change ONLY: <title>, meta description, the colour variables (--brand, --brand-bright, --gold and related) and the .fill/.node colour classes,
 the pdf-head subtitle, the TOC entries, and the cover content (kicker tags, h1 with <em>, dek, 6-cell stat strip, basis note).
 Below: one real example of each component from the approved Hospitals report. Copy the PATTERN, never the content.
 Mark the KPI masterclass section: <section class="part" id="pN" data-kpi="1">.
================================================================== -->
`;
let found = 0;
for (const [label, re, tag] of ex) {
  let s = grab(new RegExp(re.source, 'g'), tag);
  if (s && label.startsWith('Peer')) {
    const rows = s.match(/<tr[\s>][\s\S]*?<\/tr>/g) || [];
    const head = rows[0] || '', body = rows.slice(1, 3).join('\n'), agg = rows.find(r => r.includes('class="agg"')) || '';
    s = s.replace(/<thead>[\s\S]*<\/tbody>/, `<thead>${head}</thead><tbody>\n${body}\n<!-- …one row per company… -->\n${agg}\n</tbody>`);
  }
  if (s) found++;
  out += `\n<!-- EXAMPLE: ${label} -->\n${s || '<!-- (no example in source) -->'}\n`;
}
const fStart = h.indexOf('<footer class="src">');
out += '\n' + h.slice(fStart).replace(/(<footer class="src">)[\s\S]*?(<\/footer>)/, '$1\n<!-- numbered sources list + disclaimer, same pattern as the Hospitals report -->\n$2');
fs.writeFileSync(new URL('./skeleton.html', import.meta.url), out);
console.log(`skeleton ${Math.round(out.length / 1024)} KB, ${found}/${ex.length} component examples`);
