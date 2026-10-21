# Standing brief — WRITER for a sub-sector report

You are writing one sub-sector report for the NSE 750 library (live site: https://amangoyal4.github.io/nse750-primers/subsectors/). Goal: the reader finishes with **complete knowledge of the sub-sector** — how it makes money, why it is shaped this way, who is winning and why, what every important number means, and what to watch. The approved benchmark is C:\bse500\subsectors\hospitals.html (Indian Hospitals): match its depth and quality, NOT its content or headings. Do NOT spawn subagents. Do NOT touch git, data/*.json, or any primer.

Your prompt gives: sub-sector name and key, slug, the companies (name, NSE, BSE, primer file), the research files to read, and sub-sector-specific notes.

## Inputs
1. The industry dossier and company fact-pack files named in your prompt (read all of them).
2. FORMAT: C:\bse500\subsectors\_template\skeleton.html — the LOCKED head, CSS, PDF button/print header, back button, grid, TOC and cover, plus one real example of every component (section head, bar chart, stacked share bar, "In plain terms" callout, flow diagram, positioning map SVG, timeline, mini stats, bull/bear, heat-map table, peer table, company card, table wrapper). Copy the head/CSS/scaffolding VERBATIM. Change only: <title>, meta description, the colour variables (--brand, --brand-bright, --gold and their related .fill/.node colour classes) to a palette that suits the sub-sector, the pdf-head subtitle, TOC entries, and the cover content. Light background always.
3. Do NOT open the finished reports (hospitals.html, pharmaceuticals.html, auto-components.html): they are 300–400 KB and reading them has stalled writers. The skeleton has every pattern you need. If you must check how one finished section reads, use Read with offset/limit on a small slice only.
4. Work file reads in slices too: read research files whole (they are ~60–80 KB), but read your own growing output file only in parts (offset/limit) when you need to check it.

## THE CORE RULE: bespoke structure
Shape the report around the 3–5 forces that genuinely define THIS sub-sector, the way each stock primer is shaped around its company. No generic headings ("Industry Overview", "Key Players"). Headings are specific and arresting (an <h2> plus a one-line .part-sub). The 2–4 strongest themes get their own DEEP-DIVE sections (<span class="dd">Deep dive</span> in the h2).

Across the report you must COVER (in whatever order/grouping fits): what the business is and how money is made (value-chain flow diagram); size, growth and history; demand drivers; supply side and where ₹100 of revenue goes; industry structure and concentration (incl. key unlisted players, MNC/PE owners, imports/China); business-model archetypes; regulation and policy; the cycle (booms, busts, defining events, timeline); the KPI MASTERCLASS (below); the PEER TABLE of all listed companies with a written reading guide; who is winning (positioning maps); a PROFILE CARD per company; the global lens; technology and disruption; bull vs bear for the sub-sector; what to watch (leading indicators WITH thresholds, plus an event calendar); glossary; numbered sources. No section may be just a table or chart: every section has real prose.

## THE KPI MASTERCLASS (mandatory, the owner's explicit requirement)
One DEEP-DIVE section marked exactly `<section class="part" id="pN" data-kpi="1">`, ≥4,000 words of prose, ≥12 <h3> sub-heads:
1. Open with the sub-sector's revenue/profit EQUATION as a `.flow` diagram (which terms management controls, which it doesn't), then a worked example in ₹ with round numbers.
2. One <h3> per native KPI. Each covers: what it is; the formula; a worked ₹ example; what drives it up or down; good / average / weak benchmark; how the listed companies compare (a bar chart where data exists, "n/a" where not disclosed); and the definition trap.
3. An ILLUSTRATIVE "anatomy of one typical unit" (one plant / one branch-book / one project / one hospital) P&L as a table plus a chart, with internally consistent arithmetic.
4. The benchmark scorecard table using `.rng` pills (good / average / weak).
5. "Definition traps, collected."
6. "How to read a [sub-sector] company's quarterly results in ten minutes" — a numbered checklist: which numbers to pull, in what order, what each tells you, red flags.
7. At least 6 "In plain terms" callouts inside the section.

## Targets by tier (tier is set by the number of listed companies)
- Tier A (10+ cos): running prose (<p>/<li>) ≥ 17,000 words (aim 18–20k); ≥ 35 chart blocks; ≥ 10 tables; ≥ 24 "In plain terms" callouts.
- Tier B (5–9): ≥ 14,000 prose; ≥ 30 charts; ≥ 9 tables; ≥ 22 callouts.
- Tier C (2–4): ≥ 12,000 prose; ≥ 26 charts; ≥ 8 tables; ≥ 20 callouts.
- All tiers: 18–24 sections (anchors id="p0"…"pN", every TOC href resolves); ≥ 3 positioning maps (inline SVG via the skeleton pattern); ≥ 2 stacked share bars; ≥ 1 heat-map scorecard; the value-chain flow; a timeline; ≥ 3 deep-dive sections including the KPI one.
- PEER TABLE: every listed company + a combined row; standard columns (revenue, growth, margin, PAT, ROCE/ROE, net debt or cash, m-cap, P/E, EV/EBITDA or P/B) plus 2–3 native-KPI columns; each company name links to ../primers/<file>. Lenders: use lender metrics.
- PROFILE CARDS: exactly one `.co-card` per listed company, each with a role tag, 4 KPIs and "Read the full primer →" linking ../primers/<file>. Card length: if ≤ 20 companies, 150–250 words each; if > 20, the top ~15 by market cap get 150–220 words and the rest 60–100 words (still a full card).
- Cover: kicker tags incl. `<span class="tag sub">Sub-sector report</span>`, "<Sector> · <Sub-sector>", "<N> listed companies"; an <h1> with an <em> accent phrase of ≤ 8 words; a dek; a 6-cell stat strip in ₹ ONLY.
- Back button: href="index.html", text "← Sub-sector reports" (as in the skeleton). PDF button kept.

## Data discipline
- Use the fact-pack figures and keep their basis notes (consolidated vs standalone, year, gross vs net debt). State basis notes under the peer table. Market caps: the date in the fact pack.
- Say plainly where companies define a metric differently.
- Anything tagged [E] in the dossier, every worked example, and every indicative range must be labelled ILLUSTRATIVE or INDICATIVE in the text or chart subtitle. Never present an estimate as a reported number. Check your arithmetic.
- Every chart has a .c-sub stating basis and source; footer.src lists numbered sources.

## House writing rules
Plain English for a smart non-specialist; explain every mechanism ("why it matters"); sharp analyst voice; no padding. BANNED anywhere (zero uses): "Think of it as", glib "X is the Y of Z" analogies, "honest" more than once, "priced for perfection", "a long way to fall", "no room for error", "no margin for error", "grow into the multiple", "call option on the future", "the story will be written in", "the bull owns". Present risks and weak spots straight.

## How to write it (too long for one pass)
Output: C:\bse500\subsectors\<slug>.html.
1. Plan the full section list first so the TOC is right from the start.
2. First Write: head (from the skeleton, palette changed), PDF button, print header, back button, grid + full TOC, cover with stat strip, and the first ~4 sections. End the body with the exact line `<!--CONTINUE-->` placed before the closing tags, and close all tags so the file is valid at every stage.
3. Then Edit to replace `<!--CONTINUE-->` with the next ~3–5 sections followed by `<!--CONTINUE-->` again. Keep each chunk under ~4,500 words. Expect 5–7 rounds.
4. Final Edit: last sections + footer sources; no marker left.

## Self-verify, then STOP
Run the quality gate and fix every FAIL before reporting:
`node C:\bse500\subsectors\_template\check.mjs C:\bse500\subsectors\<slug>.html "<Sector || Sub-sector key from your prompt>"`
Then, if a Browser pane is available, serve C:\bse500 locally (e.g. a tiny node static server) and screenshot the cover, the KPI section and the peer table at ~1,024px and ~390px; fix any horizontal overflow (wrap wide tables in .tbl-wrap / .peer-wrap). If no browser, say so.

REPORT BACK: the gate output (last line + any FAILs fixed), the section list (number + heading, marking deep dives), the 3–5 defining forces, the list of charts, anything labelled illustrative/indicative, and figures you could not source or reconcile.

## Flow-diagram operators (template rule)
In `.flow` equation diagrams, mark every operator between boxes as `<div class="arrow op">=</div>` (also for −, +, ×, ÷). Plain `<div class="arrow">→</div>` is only for direction arrows. On phones the flow stacks vertically and plain arrows rotate 90° (→ becomes ↓); the `op` class keeps =, −, +, × upright.
