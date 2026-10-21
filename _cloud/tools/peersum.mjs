// Usage: node peersum.mjs <report.html>  — prints peer table rows and checks combined rows vs sums of company rows.
import fs from 'fs';
const h = fs.readFileSync(process.argv[2], 'utf8');
const t = (h.match(/<table class="peer"[\s\S]*?<\/table>/) || [''])[0];
const rows = [...t.matchAll(/<tr[\s\S]*?<\/tr>/g)].map(r => [...r[0].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map(c => c[1].replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()));
const num = s => { s = (s || '').replace(/[,₹~≈×%]/g, '').replace(/−/g, '-').trim(); const neg = /^\(/.test(s) || /^-/.test(s); const m = s.match(/\d+(\.\d+)?/); if (!m) return null; return neg ? -parseFloat(m[0]) : parseFloat(m[0]); };
const head = rows[0];
console.log('HEAD: ' + head.join(' | '));
const cos = rows.filter(r => /·\s*\d{6}|·\s*[A-Z]{3,}/.test(r[0] || ''));
const others = rows.slice(1).filter(r => !cos.includes(r));
for (const r of cos) console.log('CO: ' + r.join(' | '));
for (const r of others) console.log('OTHER: ' + r.join(' | '));
const short = s => s.split(/\s+/)[0];
for (const r of others) {
  if (!/combined|all |total|ex-|four|two|pair|three|five/i.test(r[0])) continue;
  // decide which companies are included: by name test
  const lbl = r[0].toLowerCase();
  let inc = cos;
  const exm = lbl.match(/ex-?\s*([a-z ]+)/);
  if (exm) inc = cos.filter(c => !c[0].toLowerCase().startsWith(exm[1].trim().split(' ')[0]));
  const res = [];
  head.forEach((hd, i) => {
    if (i === 0 || /%|growth|margin|×|ratio|yoy|p\/e|ev\/|÷|roe|roce|days|share/i.test(hd)) return;
    const vals = inc.map(c => num(c[i])); const cv = num(r[i]);
    if (cv == null || vals.some(v => v == null)) return;
    const sum = vals.reduce((a, b) => a + b, 0);
    const ok = Math.abs(sum - cv) <= Math.max(2, Math.abs(sum) * 0.006);
    res.push(`${hd.slice(0, 16)} ${ok ? '✓' : '✗ sum ' + Math.round(sum) + ' vs ' + r[i]}`);
  });
  console.log(`CHECK [${r[0].slice(0, 40)}] (${inc.length} cos): ${res.join(' | ')}`);
}
