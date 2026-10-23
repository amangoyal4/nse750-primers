done 2026-10-23T17:07:00Z · branch claude/ss-computer-hardware · report subsectors/computer-hardware.html (unpublished — publish.mjs not run)
deep-research: done (Part 4 71 KB; 32/40 figures verified from primary sources; 38/40 [V] in total)

## Checks (re-run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 23347 prose words · 31500 total words · 314 KB`
- Audit (tier C, vs hospitals.html): prose 23,347 (benchmark 19,815) · 23 sections · 4 deep dives · KPI masterclass 4,547 prose words / 17 h3 · 65 charts (45 bars, 8 stacked, 4 maps, 4 flows, 4 timelines, 1 heat map) · 18 tables · 31 "In plain terms" callouts · 1 co-card (185 words) · TOC 23/23 · tags balanced · banned phrases 0 · "honest" 0 · stat strip ₹-only · no CONTINUE marker · 30× illustrative, 49× indicative.
- Render check: **RENDER PASSED** (scrollW 1024/1024 and 375/375; issues []; rotatedOps 0; h1lines 4 at 1024, 5 at 375). Run with Playwright 1.47.2 pointed at the preinstalled Chromium.
- peersum: no combined rows (single-company rules). Its only CHECK line is a FALSE POSITIVE: the reference row "E2E Networks" matches the keyword `two` inside "Ne*two*rks". That row is a reference row, not an aggregate.
- Hand checks:
  - Dossier §3.2 reference-set aggregates were all re-added and are correct: all reference cos 1,94,737 / 4,110 / 1,88,630; makers 59,502; EMS 57,318; distributors 1,34,989; AI pure-plays 2,430. OPM and m-cap/PAT are ratios of sums.
  - KPI anatomy P&L (₹500 Cr HGX B200 order): 500 − 420 = 80 gross profit; − 25 = 55 EBITDA; − 1 − 12 = 42 PBT; tax 10.6; PAT 31.4. The ₹100 stack sums to 100.
  - Growth-vs-margin map: all 7 dots match their peer-table values (x = 70 + 5.4·growth; y = 380 − 17.5·margin). E2E is shown off scale and labelled.
  - Stat-strip conversions: $13.71 bn × ~₹87 = ₹1.19 lakh Cr; $166.3 bn × ₹94.9 = ₹15.8 lakh Cr.

## Sections (dd = deep dive)
00 The one-page view · 01 How a server earns money · 02 The size of the pie · 03 The AI wave arrives in India · 04 The sovereign-AI order book [dd] · 05 Government, research and defence · 06 The moat that is a rule (PPP-MII, PLI, IMS) · 07 What India imports, and from where · 08 Chokepoints: GPUs, memory, export rules · 09 Pass-through economics [dd] · 10 Working capital is the business [dd] · 11 Who builds India's servers · 12 Five business models · 13 Four decades of cycles · 14 KPI masterclass [dd, data-kpi] · 15 Peer table · 16 Who is winning (4 maps + heat map) · 17 The listed lens: Netweb (co-card) · 18 Global lens · 19 Technology and disruption · 20 Bull vs bear · 21 What to watch · 22 Glossary

**h1:** Computer hardware &amp; AI servers: <em>sovereign compute, imported silicon</em>

## Forces
1. The AI/GPU demand wave and sovereign AI (IndiaAI ₹10,372 Cr; GPU pool 45,000+; data-centre build-out).
2. The government/research/defence order book: lumpy, concentrated and Make-in-India. C-DAC Rudra is a state-designed rival.
3. Pass-through economics: Netweb's gross margin fell from 23.1% to 20.9%, and EBITDA held only through operating leverage.
4. Working capital and funding: the cash cycle went from 73 to 96 days; CFO was ₹171.5 Cr (about 60% of EBITDA); a ₹1,200 Cr QIP was raised on top of ₹2,420 Cr of bank lines.
5. Supply chokepoints: NVIDIA allocation, the memory super-cycle, US export controls, and global OEMs localising under PLI 2.0.

## Peer table
- Rows: the member row NETWEB · 543945 (linked to its primer), plus reference rows for Dixon, Kaynes, Syrma SGS, Redington, Rashi Peripherals and E2E Networks. Reference rows have no code and no primer link.
- Global OEMs (Dell, HPE, Supermicro, Lenovo) are in a separate global-lens table.
- There is NO combined row, per the single-company rules. The reference-set aggregates appear only as INDICATIVE context, and they equal the row sums.

## Labelled ILLUSTRATIVE / INDICATIVE
- Conversions: all US$→₹ conversions (₹94.9 spot; ~₹87 FY26 average for import flows).
- Market size: India market-size ranges and the 1Lattice TAMs; Netweb's share of each pool.
- Worked examples and breakdowns:
  - the B200-node and HPC-cluster worked examples;
  - the "where ₹100 goes" breakdowns;
  - the ₹500 Cr anatomy P&L and its stack;
  - the KPI worked examples.
- Order and GPU estimates:
  - the ~₹1,195 Cr of the strategic basket still to execute in Q2 FY27;
  - the 4,400–5,000 GPU estimate;
  - GPU-cloud payback;
  - IndiaAI utilisation (~2–3%).
- Margin models: the gross-margin mix model and the revenue-stall scenarios.
- Cash and valuation:
  - the "other items" line in the EBITDA→CFO bridge;
  - post-QIP net cash of about ₹1,000 Cr;
  - the funding-capacity arithmetic;
  - EV/EBITDA.
- Scorecards and outlook:
  - benchmark bands and heat-map scores;
  - reference-set aggregates;
  - FY27 bear/base/bull scenarios;
  - what-to-watch thresholds.

## Figures not sourced or not reconciled (all flagged in the text)
- Government procurement and policy:
  - the PPP-MII local-content threshold specific to servers;
  - the size of the protected government pool;
  - the NSM 2.0 outlay. The exascale-by-2028 target comes only from Netweb's own deck.
- Market data:
  - India server vendor shares (only Lenovo's own 24.7% claim);
  - India PC vendor shares (period uncertain);
  - data-centre MW on mixed bases (PIB vs CBRE).
- Netweb:
  - why its PLI income was nil in FY26;
  - the price of the Feb-2026 promoter sale;
  - the strategic-order awarder, a large Indian technology distributor, is deliberately unnamed.
- Conflicts between sources:
  - whether the 42.8% government share is by revenue or by customer count (annual report wording);
  - R&D spend: the annual report's ₹13.14 Cr (≈0.6%) vs CRISIL's "2–3%";
  - R&D headcount: 110 in the annual report vs 125 in the presentation;
  - installed base: 600+ (annual report) vs 300+ (CRISIL).
- Secondary sources only: HPE Cloud & AI margin of ~17% and Dell ISG margin of ~15%. Supermicro's 8-K returned 403 on re-fetch.
- Screener's FY26 CFO for Netweb (₹790 Cr) is a sign misprint in the annual report; the report uses ₹171.5 Cr, which the CFO confirmed on the call.
- **Q2 FY27 is not out.** Netweb's board meets 24-Oct-2026 and the call is 26-Oct, 3:30 pm. The report is current to Q1 FY27 (Jun-26) and will need a refresh after the results.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| netweb-technologies.html | 67 | 5401 | 16 | 10 | 12 | 0 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} (phone overflow) |

The failure predates this run and is not fixed here. It is logged with the content errors in `_cloud/computer-hardware-primer-issues.md`, which covers:
- Netweb: FY24 figures; margin direction; CFO; gross margin; PLI 2.0; QIP; promoter sale; strategic orders; guidance basis; concentration; Kubyts.
- Dixon, Kaynes, Syrma and Redington: stale valuations and basis notes.

## Publish entry
{"key":"IT || Computers Hardware & Equipments","name":"Computer Hardware & AI Servers","slug":"computer-hardware","accent":"#2D6476","noun":"server makers","hook":"Sovereign compute, imported silicon: how India's AI-server boom works when the GPUs come from NVIDIA. IndiaAI tenders and the government order book, why GPU pass-through compresses gross margin, why working capital is the business, and what Netweb's numbers reveal.","tags":["Sovereign-AI order book","Pass-through economics","Working capital","KPI masterclass"]}
