// Publish a finished sub-sector report into the site catalog and link it from every member primer.
// Usage: node publish.mjs <entry.json>
// entry.json: { "key": "Sector || Sub-sector", "name": "Pharmaceuticals", "slug": "pharmaceuticals",
//               "accent": "#hex", "hook": "~200-char summary", "tags": ["...","..."], "short": {"NSE":"Short name", ...} }
import fs from 'fs';

const ROOT = 'C:/bse500';
const e = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const members = JSON.parse(fs.readFileSync(ROOT + '/subsectors/_template/members.json', 'utf8'))[e.key];
if (!members) throw new Error('Unknown key ' + e.key);
const [sector, sub] = e.key.split(' || ');
const file = e.slug + '.html';
if (!fs.existsSync(`${ROOT}/subsectors/${file}`)) throw new Error('Report file missing: ' + file);
const today = new Date().toISOString().slice(0, 10);

// 1. catalog
const P = ROOT + '/data/subsectors.json';
const cat = JSON.parse(fs.readFileSync(P, 'utf8'));
const entry = { name: e.name, slug: e.slug, file, sector, subsector: sub, companies: members.length, accent: e.accent, hook: e.hook, tags: e.tags, published: today };
const i = cat.reports.findIndex(r => r.slug === e.slug);
if (i >= 0) cat.reports[i] = { ...cat.reports[i], ...entry, published: cat.reports[i].published }; else cat.reports.push(entry);
const u = cat.universe.find(x => x.sector === sector && x.sub === sub);
if (!u) throw new Error('Sub-sector not in universe: ' + e.key);
u.report = file;
fs.writeFileSync(P, JSON.stringify(cat, null, 2) + '\n');

// 2. banners in member primers
const box = 'display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 18px;margin:26px 0 6px;padding:14px 18px;background:var(--card,#fff);border:1px solid var(--line,#E0DACC);border-left:4px solid var(--brand,#124E47);border-radius:6px;text-decoration:none;color:var(--ink,#201B12);';
const tag = 'font-family:"DM Mono",monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint,#928A78);display:block;margin-bottom:3px;';
const cta = 'font-family:"DM Mono",monospace;font-size:11.5px;letter-spacing:.04em;text-transform:uppercase;color:var(--brand,#124E47);font-weight:500;white-space:nowrap;';
const N = members.length, others = N - 1, label = e.name, noun = e.noun || `${e.name.toLowerCase()} companies`;
let linked = 0, skipped = 0;
for (const m of members) {
  if (!m.primer) continue;
  const pf = `${ROOT}/primers/${m.primer}`;
  let h = fs.readFileSync(pf, 'utf8');
  if (h.includes(`subsectors/${file}`)) { skipped++; continue; }
  if ((h.match(/<\/header>/g) || []).length !== 1 || (h.match(/<footer class="src"/g) || []).length !== 1) throw new Error('Unexpected structure in ' + m.primer);
  const nm = (e.short && e.short[m.nse]) || m.name.replace(/\s+(Ltd\.?|Limited|Ltd)$/i, '');
  const top = `\n<a class="ss-link" href="../subsectors/${file}" style="${box}"><span><span style='${tag}'>Part of a sub-sector report · ${label}</span><span style="font-family:Sora,sans-serif;font-weight:600;font-size:15.5px;">See how ${nm} compares with all ${N} listed ${noun}: KPIs, unit economics and valuations</span></span><span style='${cta}'>Read the report →</span></a>\n`;
  const end = `<a class="ss-link" href="../subsectors/${file}" style="${box}margin:40px 0 0;"><span><span style='${tag}'>Keep reading · ${label} sub-sector report</span><span style="font-family:Sora,sans-serif;font-weight:600;font-size:15.5px;">${nm} side by side with the other ${others} listed ${noun}, and how the whole industry works</span></span><span style='${cta}'>Read the report →</span></a>\n`;
  h = h.replace('</header>', '</header>' + top).replace('<footer class="src"', end + '<footer class="src"');
  fs.writeFileSync(pf, h);
  linked++;
}
console.log(`catalog: ${cat.reports.length} reports, ${cat.universe.filter(x => x.report).length}/${cat.universe.length} sub-sectors linked`);
console.log(`primers: ${linked} linked, ${skipped} already linked, ${members.length} members`);
console.log('git add list:', ['data/subsectors.json', `subsectors/${file}`, ...members.filter(m => m.primer).map(m => 'primers/' + m.primer)].join(' '));
