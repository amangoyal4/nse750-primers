# Standing brief — DEEP-RESEARCH PASS (second pass on an existing dossier)

The first-pass dossier (industry + company packs, ~30 web calls) is fast but thin in places: too many figures rest on search snippets, memory or estimates, and too little comes from the companies' own documents. Your job is a second, slower, primary-source pass that makes the dossier authoritative. A writer will then turn dossier + your supplement into a 20k-word report. Do NOT spawn subagents. Do NOT touch git, data/*.json, primers or anything except your output (an appended Part 4 in the dossier file named in your prompt) and your scratch notes.

**Never use the owner's identity anywhere** (no name, email or username on any site, form, header or User-Agent; no logins, no sign-ups). No API keys, no paid services, no paywalled content.

## 1. Read first
The whole existing dossier (in ≤300-line slices). List for yourself: every figure tagged [K] (memory), [V-snip] (snippet only) or [E] that CARRIES AN ARGUMENT (a headline number, a share, a growth rate, a margin, a market size, a policy fact), every item in §H "could not source", every conflict, and every "verify" note.

## 2. Primary documents per company (the core of this pass)
For EACH member company fetch and read (PDFs: extract text; read in slices; if a PDF is scanned, render the key pages to PNG and read them):
1. The latest **investor presentation** (Q1 FY27 or later) — KPI slides, segment data, capacity, guidance.
2. The latest **earnings-call transcript** (Q1 FY27 or later; company site, BSE filings at bseindia.com, or transcript aggregators that are free to read). Extract: management's guidance (volume, margin, capex, pricing), the 5–8 most important analyst Q&A points, any number not in the presentation.
3. The **FY26 annual report** (or FY25 if FY26 is not out): MD&A, segment note, related-party transactions note (royalty, purchases from group), capacity/production table, contingent liabilities, top risks. Read the relevant sections, not the whole PDF.
4. Screener **10-year/5-year history** (FY22–FY26 revenue, EBITDA, PAT, ROCE) and the **last 8 quarters** (revenue, OP, OPM, PAT).
Budget: ~6–8 fetches per company.

## 3. Primary industry sources
Replace memory/snippet series with fetched data from: the relevant ministry/regulator (PIB releases, ministry dashboards, gazette notifications, tender documents), industry bodies (e.g. SIAM, FADA, Vahan, IPA, ACMA, CHEMEXCIL, AMFI, PNGRB), trade data (commerce.gov.in TradeStat / Export-Import Data Bank by HS code), rating-agency sector reports (CRISIL, ICRA, CARE, India Ratings — free PDFs/press releases), and global peers' annual reports for the global lens. Budget: ~20–25 fetches.

## 4. Fill every gap, verify every headline
- Try to close every §H gap; for each, record "filled (source)" or "still unsourced (what you tried)".
- Build a **VERIFICATION TABLE of the 40 most important figures** the writer will use (stat-strip cells, aggregates' inputs, market shares, KPIs, policy facts, dates): figure | value | primary source URL | fetched? | agrees with Part 1–3? Two independent sources where they exist; when sources conflict say which is more credible and why.
- Wherever a first-pass figure is wrong, list it under **"Supersedes"** with old value → new value → source. The writer will apply these.

## 5. Output — append to the dossier as "Part 4 — Deep-research supplement (<date>)"
4.0 Supersedes (corrections to Parts 1–3, in a table).
4.1 Verification table (40 figures).
4.2 Per company: management-commentary digest (guidance, paraphrased with source and date — no long quotes), concall KPI table, 5-year history table, 8-quarter trend table, annual-report findings (related-party/royalty, capacity, contingent liabilities, risks).
4.3 Industry data upgraded from primary sources (new or replaced chart-ready datasets with units and source).
4.4 Gap log (each §H item: filled / still open).
4.5 New insights the first pass missed (3–8 bullets an expert would add) and any new primer issues (bullets per primer file).
Tags: [V] only if fetched this session from the named source; keep [K]/[E] labels honest.

## 6. Process
- Budget ~60–75 web calls in total. Save notes to your scratch folder as you go (survives stalls).
- Append Part 4 in 3–5 chunks (Edit/Bash append), never one giant write.
- Report back: chunks written, size of Part 4, the Supersedes list, how many of the 40 figures are now [V] from primary sources, gaps still open, new primer issues.
