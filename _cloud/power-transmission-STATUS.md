done 2026-10-23T06:30:24Z · branch claude/ss-power-transmission · report subsectors/power-transmission.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 70 KB; 32/40 figures verified from primary sources — 30 if the two first-pass company decks re-read are excluded; 3 mixed primary+press, 1 fetched secondary, 3 snippet-only, 1 not found: POWERGRID regulated equity)

# Power Transmission — STATUS

- Claimed 2026-10-23T05:18:30Z (new item; gate had 1 other run in progress — coal). Tier C (2 companies).
- Dossier: `_cloud/power-transmission-industry.md` 206 KB (Parts 1–3 135 KB + Part 4 70 KB). Primer issues: `_cloud/power-transmission-primer-issues.md`.
- Aggregates re-added by hand from the company rows (Part 3 and Part 4 §4.0.1): no arithmetic errors found.

## Gate
GATE PASSED: 27/27 checks · 22398 prose words · 30052 total words · 308 KB

## Audit totals (vs hospitals benchmark)
Prose 22,398 (floor 12,000; hospitals 19,815) · KPI masterclass prose 4,440, 20 h3 · charts 65 (42 bars, 12 stacked, 3 maps, 5 flows, 3 timelines) + 1 heat map · tables 20 · callouts 30 · cards 2 (172–179 words) · no thin sections · TOC 22/22 · tags balanced · banned phrases none, "honest" 0 · stat strip ₹-only · no CONTINUE marker · 51× "illustrative", 54× "indicative".

## Render check
RENDER PASSED (1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375: scrollW 375, issues [], rotatedOps 0). Note: run with playwright@1.56.1 (/tmp/rc2) because 1.47.2 expects chromium-1134 and the sandbox ships chromium-1194; rcheck.mjs itself unchanged.

## Sections (deep dives marked)
00 The one-page view: a state-written order book, throttled by execution
01 How a wire earns: from a planner's map to a 35-year toll
02 The grid and its money pool: 5 lakh circuit-km, ₹47,500 crore a year
03 A plan written by the state: ₹9.15 lakh crore, then ₹7.93 lakh crore more
04 The lines that can't keep up: a funded plan, an unbuilt grid
05 Transformers, farmers and where ₹100 goes
06 Who sets the return: CERC's formula and its two tiers
07 RTM vs TBCB: the economics of a 35-year bid — DEEP DIVE
08 Who owns India's wires: one giant, state utilities and a private fringe
09 Six ways to earn from the grid
10 Four decades of the grid: from nomination to auction
11 Reading a wire: the KPI masterclass — DEEP DIVE (data-kpi)
12 The peer table: one basis, two very different companies
13 Who is winning: scale, returns and the price of each
14 The members up close
15 Smart meters and RDSS: the meter as a ten-year annuity — DEEP DIVE
16 AESL's Energy Solutions Platform and the quality of earnings — DEEP DIVE
17 Bond proxies in a rate hike: cost of capital, valuation and the global lens
18 HVDC, storage and the technology of the next grid
19 Bull vs bear
20 What to watch: leading indicators and the calendar (POWERGRID Q2 FY27 board date not yet announced; expected early Nov-2026)
21 Glossary + numbered sources

## h1
Power transmission: <em>a ₹9 lakh crore plan waiting on transformers</em>

## Forces
1. A capex supercycle throttled by execution (NEP ₹9.15 L Cr; lines FY25 8,830 / FY26 12,139 ckm; H1 FY27 6,108 vs 16,554 target; POWERGRID capex ₹9,060 Cr FY22 → ₹39,967 Cr FY26).
2. Two return regimes: RTM cost-plus (CERC 15.0% new / 15.5% legacy ROE) vs 35-year TBCB bids with thin tariffs.
3. The bottleneck is equipment and right-of-way (765 kV transformers 20–24 months; ROW claims).
4. AESL beyond wires: Mumbai distribution, smart meters (RDSS) and the trading platform — growth vs quality of earnings and related-party sourcing.
5. Cost of capital and valuation: repo 5.50%, 10-yr G-sec 7.47% vs POWERGRID earnings yield ~7.0%; governance overhang.

## Peer combined rows (as printed) and hand-check
All members (combined) | 74,321 | +6.8% | 76,009 | 48,403 | 65.1% | 18,321 | 14.4% | 1,81,552 | 3.75× | 3,76,415 | 20.5× | 11.5× | 54,199 | 2,06,618 | n/a (not additive) | —
Hand-check: revenue 46,733+27,588=74,321 ✓; growth 74,321/69,559 = +6.8% ✓; total income 47,684+28,325=76,009 ✓; EBITDA 39,677+8,726=48,403 ✓, margin 65.1% ✓; PAT (reported incl. NCI, one basis) 15,928+2,393=18,321 ✓; ROE 18,321/(1,00,494+26,526)=14.4% ✓; net debt 1,38,837+42,715=1,81,552 ✓, ND/EBITDA 3.75× ✓; m-cap 2,27,214+1,49,201=3,76,415 ✓; P/E 3,76,415/18,321=20.5× ✓; EV/EBITDA (3,76,415+1,81,552)/48,403=11.5× ✓; capex 39,967+14,232=54,199 ✓; ckm 1,86,595+20,023=2,06,618 ✓ (peersum skips this column because "Operational" contains "ratio"). No subgroup rows (2 members). peersum: all checked columns ✓.

## Spot checks / fixes made by orchestrator
- Stat strip, peer basis note, both cards, KPI "anatomy of one typical project" table (480−38=442; 208 interest; 103 dep; PBT 131; tax 33; PAT 98; cash to equity 101 — all consistent), maps 1 and 2 coordinates vs data.
- Fixed: map 1 POWERGRID dot plotted at ~83% margin → moved to 84.9% (cx 528). Card wording: ESP "since FY27" → "reported as a separate segment from FY27" (trading existed in FY26 with ₹84 Cr EBIT).
- OFAC wording checked: attributed to Adani Enterprises, "AESL not a party" (the queue angle's framing was corrected by the dossier).

## Labelled ILLUSTRATIVE / INDICATIVE
All worked examples (₹1,000 Cr RTM line; Vizag-type two-cost model; 765 kV 500 ckm project P&L; availability→tariff; RTM vs TBCB revenue profile); TBCB IRR grid and Vizag ~7–8% equity IRR; "where ₹100 goes" composites; POWERGRID regulated equity ~₹83k Cr (proxy); ex-tax-credit FY26 PAT ₹15,096 Cr; AESL ISTS share ~5.8%; national transmission revenue pool ₹1.0–1.2 L Cr; FY20–FY22 line additions and FY24/FY25 targets; global peer multiples (aggregator data); smart-meter unit economics (~₹100/month fee, ₹6,000–7,000 capex, ~10% unlevered return); ESP normalised EBIT ₹650–1,300 Cr and AESL ex-ESP multiple; implied cost of equity ~9.6%; ICRA estimate, "16% waiver cost", rate-path view; all KPI benchmark bands.

## Figures not sourced / not reconciled
- POWERGRID regulated equity and TBCB project returns (not disclosed); POWERGRID capitalisation FY22–FY25 (not charted); AESL capitalisation.
- ESP related-party share of revenue and gross-vs-net presentation (not disclosed; AESL FY26 group purchases ≈₹22.2k Cr exceed P&L power cost — flagged).
- H1 FY27 line additions by owner sum to 8,125 ckm vs 6,108 national (flagged as directional).
- AESL ₹10,994 Cr headline tariff vs ₹10,708 Cr TBCB-only (~₹280 Cr unexplained; report uses ₹10,708 Cr).
- AESL Q2 distribution loss 3.30% looks like a release typo (report uses H1 4.29%); AESL Q2 FY27 call transcript not yet on BSE.
- National Grid P/E differs by provider (15–19×); Elia multiple not found.
- Outcome of reserved EDNY counts after 31-Aug-2026; Sep-26 promoter pledge (~0.5% earlier); POWERGRID Q2 FY27 board date.
- ROE basis: peer table uses PAT incl. NCI ÷ total equity (AESL 9.0%); KPI section shows 9.4% on owners' equity — basis stated at each.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| power-grid.html | 81 | 7013 | 22 | 12 | 13 | 0 | 2026-06-30 | ❌ banned ("think of" ×2) | no main{min-width:0} |
| adani-energy-solutions.html | 81 | 7346 | 18 | 10 | 12 | 0 | 2026-06-30 | ❌ banned ("think of"), honest>1 | no main{min-width:0} |
Pre-existing; logged in primer-issues.md, not fixed. Content corrections for both primers (stale valuations, PGInvIT 15%, availability/ROE regime, AESL operational vs statutory revenue, operational ckm, US/OFAC/Kenya facts, ESP, QIPs, IntelliSmart) are in primer-issues.md.

## Publish entry
{"key":"Power || Power - Transmission","name":"Power Transmission","slug":"power-transmission","accent":"#8F1414","noun":"transmission utilities","hook":"A ₹9 lakh crore plan waiting on transformers: how India's grid owners earn (regulated cost-plus vs 35-year auctioned tolls), why lines lag the plan, what Power Grid's capex surge and Adani Energy Solutions' meters, Mumbai licence and trading arm are worth, and the rate-hike squeeze on bond-like utilities.","tags":["RTM vs TBCB bid economics","KPI masterclass","Smart meters and RDSS","AESL Energy Solutions Platform"]}
