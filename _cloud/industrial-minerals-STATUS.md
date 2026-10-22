done 2026-10-22T10:12:48Z · branch claude/ss-industrial-minerals · report subsectors/industrial-minerals.html (resume of a dead run that had only its claim commit; unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 82 KB; 27/40 figures verified from primary sources — 32/40 rest on primary documents incl. 5 read in the first pass; 8 secondary/broker/snippet)

## Gate
GATE PASSED: 27/27 checks · 22765 prose words · 32598 total words · 319 KB

## Audit totals (audit.mjs vs hospitals.html)
- 23 sections (p0–p22); 65 charts (43 bars, 9 stacked share bars, 3 positioning maps, 6 flows, 4 timelines); 16 tables; 34 "In plain terms" callouts; 5 deep dives; KPI masterclass 4,639 prose words, 20 h3.
- Thin sections: none. Sections with no chart/table: none. TOC 23/23 resolve. Primer links 8 distinct, none missing, all members linked. Tags balanced. Banned phrases: none; "honest" 0; "think of" 0. Stat strip ₹-only: yes. No CONTINUE marker. Labels: 29 × illustrative, 80 × indicative.
- Cross-links: iron-steel.html, steel-products.html, power-generation.html, commodity-chem.html (all exist in subsectors/).

## Render check
RENDER PASSED (Playwright 1.56.1, global install, with preinstalled Chromium; the pinned 1.47.2 cannot drive this Chromium build). 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3. 375: scrollW 375, issues [], rotatedOps 0, h1lines 4.

## Sections (DD = deep dive)
00 The one-page view: four miners, one giant and a very large landlord
01 How a tonne becomes money: lease, dig, sort, move, sell
02 313 million tonnes: a record year and a surplus
03 Steel decides demand, and the steel and ore cycles have split
04 Where ₹100 of revenue goes: four very different cost stacks
05 Merchant, captive and the import ship: who else is in the market
06 Four business models, four sets of economics
07 DD Who owns the rent: royalty, the 150% premium, the 8:1 judgment and Section 9D
08 DD Fifty-three million tonnes, one railway: NMDC's volume ramp
09 DD The manganese squeeze: MOIL, Sandur and the import ship
10 DD Clay at home, bauxite abroad: Ashapura's Guinea engine
11 The rulebook beyond tax: leases, caps, duties and clearances
12 Seven decades, six shocks: how the cycle has run
13 DD Reading a miner: the KPI masterclass (data-kpi="1")
14 The peer table: four companies on one basis
15 Who is winning: returns, momentum and balance sheets
16 Four company profiles (incl. Sandur's mine-to-MedTech arc)
17 Why 8.7× earnings: what the market is pricing
18 The global lens: better ore than the Pilbara, a heavier state than anywhere
19 Technology and disruption: purer ore, pipes, batteries and critical minerals
20 Bull vs bear
21 What to watch: leading indicators and the event calendar
22 Glossary

## h1
Industrial minerals: <em>world-class ore, a state-sized landlord</em>

## Forces
1. Who owns the rent: royalty + 150% additional royalty + DMF + NMEDT = ₹2,206/t at NMDC (FY26), more than its EBITDA per tonne; the SC 8:1 ruling (Jul-2024), the Karnataka claim (₹15,786 Cr contingent, Jun-26) and MMDR Amendment Act 2026 §9D (bars only new state levies).
2. NMDC's volume ramp vs evacuation and demand: 53 mt FY26 → 100 mtpa target; slurry pipeline + Nagarnar pellet plant commissioned Sep-26; Kirandul–Jagdalpur doubling 128/131 km; H1 FY27 production 27.27 mt vs sales 22.23 mt; leases expire 2035–37.
3. The steel and ore cycles have split: India long on ore (313 mt), exports collapsing, imports 12.35 mt in FY26; hot metal +2.5% in H1 FY27.
4. The manganese squeeze: import parity (CY25 imports 6.46 mt; Comilog/South32 offers; Australian ore duty-free since Jun-26) sets MOIL/Sandur prices.
5. Clay at home, bauxite abroad: Ashapura's Guinea bauxite (~8 mt FY26, $6.3/t EBITDA in Q1 FY27), freight, Guinea quota and tax shield.

## Peer combined rows (as printed; screener FY26, consolidated except MOIL standalone; m-cap 22-Oct-26; net debt = borrowings − cash equivalents)
- All four members combined | 43,866 | +39.9% | 11,443 | 26.1% | 8,791 | (3,665) | 76,776 | 8.7× | 6.4×  — peersum ✓
- PSU miners (NMDC + MOIL) | 33,541 | +31.6% | 9,675 | 28.8% | 7,717 | (5,691) | 64,744 | 8.4× | 6.1×  — hand-check ✓
- Manganese producers (MOIL + Sandur) | 6,558 | +39.0% | 1,623 | 24.7% | 925 | 200 | 12,374 | 13.4× | 7.7×  — hand-check ✓
- Private, family-controlled (Sandur + Ashapura) | 10,325 | +75.8% | 1,768 | 17.1% | 1,074 | 2,026 | 12,032 | 11.2× | 8.0×  — hand-check ✓
- Ex-NMDC (MOIL, Sandur, Ashapura) | 11,795 | +58.2% | 2,183 | 18.5% | 1,341 | 1,315 | 16,517 | 12.3× | 8.2×  — peersum ✓
Hand-check: re-added revenue, prior-year revenue, OP, PAT, m-cap and net debt for every subgroup from the four company rows by script; all equal. Growth, OPM, P/E (m-cap ÷ PAT) and EV/EBITDA ((m-cap + net debt) ÷ OP) recomputed as ratios of sums; all match. One PAT basis (screener reported) in every row. Company P/E FY26 cells (8.1/12.0/16.8/10.0) = m-cap ÷ FY26 PAT ✓.

## Spot checks (orchestrator)
- Cover/stat strip: ₹76,776 Cr m-cap; ₹43,866 Cr revenue; ₹2,206/t levies; ₹15,786 Cr Karnataka claim; 313 mt; 8.7× — all ₹/volume, no $.
- KPI anatomy (one tonne NMDC ore, ILLUSTRATIVE): 5,657 − 781 − 1,169 − 234 − 22 = 3,451; − 386 − 1,222 = 1,843; + 296 − 95 − 24 = 2,020; − 537 = 1,483 = 370 + 238 + 875; chart slices sum to 5,834 ✓.
- Map 1 (ROCE vs EV/EBITDA): coordinates match data for all four dots; quadrant labels at corners ✓.
- Ashapura card (~170 words) consistent with dossier Part 4 (S15, S23, S24).

## Labelled ILLUSTRATIVE / INDICATIVE
NMDC ex-trading revenue ₹28,420 Cr (+19%) and the ex-trading NSR split; the ₹100-of-revenue stacks; the one-tonne anatomy table and chart; levy sensitivity (~42% of a price change to the state; ₹100/t ≈ ₹320 Cr EBITDA); Karnataka ~₹1,316 Cr/yr ≈ 18% of PAT, ~₹97/t, Sandur's rough ₹3,000–4,500 Cr exposure; overhangs ≈ 45% of m-cap; Q2 FY27 derived volumes (NMDC ~12.15/10.50 mt; MOIL H2 requirement); Sandur consolidated net debt ~₹375 Cr (range ₹375–940 Cr); Ashapura India Q1 split, FY26 EBITDA/t ~$7.4, revenue/t ~₹5,810, normal-tax PAT case ~₹311 Cr, freight $1/t ≈ ₹95 Cr; MOIL cost split, revenue/t, per-tonne levies for Sandur and MOIL; EBITDA/t estimates; capex/t and reserve-life years; utilisation; lump-share back-calculation; strip-ratio example; import-parity flow (~₹22,700/t); India iron-ore market value ₹1.4–1.7 lakh Cr; national Mn output ~4.2 mt and consumption ~10.7 mt; 62% Fe path (mixed secondary); single-source: MMDR Act commencement 22-Aug-26, Jharkhand ₹100→₹400/t tax, Zerodha ₹70–80k Cr PSU exposure; memory-based: export-duty slabs/dates, Mn royalty ~5%, captive lease expiry Mar-2030, Guinea 2025 licence revocations, global majors' costs/multiples; scorecard bands and watch-list thresholds.

## Not sourced / not reconciled (flagged in text)
Gazette S.O. for MMDR Amendment Act 2026 commencement; Deposit-13 lapse deadline (21-Sep-26) outcome; slurry/Nagarnar pellet ramp data; KK-line full doubling date; India FY26 Mn output and FY26 Mn imports (CY25 used); NMDC prices May-2023–Sep-2024 and exact basis-switch month; MOIL May–Jun 2026 price changes and lease dates; bentonite market size; Sandur Karnataka-tax exposure (undisclosed); Sandur PPT labels 0.27 D/E both gross and net; MOIL screener quarters sum ₹1,488 Cr vs AR ₹1,473 Cr; Ashapura Q1 PAT ₹115 Cr (company) vs ₹108 Cr (screener); no Q2 FY27 board dates announced as of 22-Oct-26 (What to watch says late Oct–mid Nov 2026, citing last year's NMDC 29-Oct-25, Sandur 7-Nov-25, MOIL ~11-Nov-25). No dossier aggregate arithmetic errors found (all Part 3 aggregates re-added from company rows).

## Primer-audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| nmdc.html | 74 | 6525 | 7 | 12 | 13 | 0 | 2026-06-30 | ❌ bars<10, banned | no main{min-width:0} (phone overflow) |
| sandur-manganese.html | 69 | 6206 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| ashapura-minechem.html | 72 | 6227 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| moil.html | 67 | 5666 | 19 | 10 | 11 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
Logged (with all dossier §3.4 and Part 4 §4.5.2 primer issues) in _cloud/industrial-minerals-primer-issues.md; primers not edited.

## Files on this branch
subsectors/industrial-minerals.html (319 KB); _cloud/industrial-minerals-industry.md (214 KB: Parts 1–3 132 KB + Part 4 82 KB); _cloud/industrial-minerals-primer-issues.md; _cloud/industrial-minerals-STATUS.md.

## Publish entry
{"key":"Mining || Industrial Minerals","name":"Industrial Minerals","slug":"industrial-minerals","accent":"#796C34","noun":"miners","hook":"World-class ore, a state-sized landlord: how NMDC, MOIL, Sandur and Ashapura turn a tonne into money, why royalty and the 150% premium take more per tonne than NMDC keeps, and what the 8:1 judgment, Section 9D, NMDC's rail-bound ramp and import-priced manganese mean for returns.","tags":["Who owns the rent","NMDC's volume ramp","The manganese squeeze","Ashapura's Guinea bauxite"]}
