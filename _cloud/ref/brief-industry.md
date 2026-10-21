# Standing brief — INDUSTRY RESEARCH DOSSIER for a sub-sector report

You are building a research dossier (not the final report) on one Indian sub-sector. A writer agent will turn it into an ~18–20k-word report whose goal is that the reader finishes with **complete knowledge of the sub-sector**: how it makes money, why it is shaped the way it is, who wins and why, what the numbers mean, what to watch. Do NOT spawn subagents. Do NOT touch git or edit anything in C:\bse500 except your output file.

Your prompt gives: the sub-sector, its listed companies, the output path, and sub-sector-specific angles to cover.

## Sourcing rules
- Every hard number carries its source inline (publisher + year, URL where possible). Tag each figure: [V] verified this session (fetched), [K] known fact from memory with the source named but not re-fetched, [E] estimate/composite. Prefer primary sources: government ministries and data (MoSPI, PIB, DGFT, DGCI&S, RBI, SEBI, IRDAI, CDSCO/DCGI, NPPA, MoRTH/NHAI, etc.), industry bodies (e.g. IPA, Pharmexcil, ACMA, SIAM, FIDC, CHEMEXCIL), rating agencies (CRISIL, ICRA, CARE, India Ratings), company and industry presentations, reputable press. Where sources conflict, give both and say which is more credible.
- Today's date is in your prompt; use the latest data (FY26 / 2025-26 where possible).
- Budget ~20–25 searches/fetches, then write in one pass. Do not spiral.

## Cover (checklist, not headings)
1. What the sub-sector does: products/services, customers, the value chain from inputs to end user, where value is captured.
2. Size and growth: India market size (₹ and USD), historic and forecast CAGR, domestic vs export split, India's share of the global market.
3. Demand drivers and end-markets, with numbers.
4. Supply side and cost structure: key inputs and their price drivers, capacity, utilisation, a "where ₹100 of revenue goes" breakdown for a typical company (label [E] if composite).
5. Industry structure: concentration, organised vs unorganised, top players' shares, key UNLISTED players and MNC/PE owners, imports and China.
6. Business models inside the sub-sector (the 2–5 archetypes) and how their economics differ.
7. Regulation and policy: regulators, key rules, price controls, duties, PLI/subsidies, quality/approval regimes, recent and pending changes.
8. History and cycles: the defining events, booms and busts, M&A and listing waves, with dates.
9. Unit economics and the sub-sector's NATIVE KPIs (your prompt lists them): definitions, how computed, typical ranges for good/average/weak, what drives them.
10. Global lens: global leaders, how Indian players compare on scale, margins, returns and valuation multiples.
11. Technology and disruption risks.
12. What to watch: leading indicators, upcoming events, policy decisions, capacity pipelines.

## Also provide (critical for the writer)
A. The 3–5 forces that genuinely define this sub-sector (what an expert analyst leads with), each with 2–3 lines of reasoning.
B. 2–4 bespoke deep-dive themes unique to this sub-sector that deserve their own sections.
C. The sub-sector's REVENUE / PROFIT EQUATION (e.g. hospitals: beds × occupancy × 365 × ARPOB; a lender: AUM × NIM − credit cost − opex; a manufacturer: capacity × utilisation × realisation − input cost) with a worked example in ₹.
D. A proposed 6-cell stat strip in ₹ (no USD), with sourced figures.
E. 8–12 chart-ready datasets (label: value pairs with units and source).
F. A KPI glossary with good / average / weak benchmark ranges for each native KPI.
G. A 15–25-event timeline (year: event).
H. A list of figures you could not source well.

Report back: the file path, a 10-line summary of key findings, and the figures you could not source.
