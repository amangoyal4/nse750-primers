done 2026-10-23T10:55:56Z · branch claude/ss-financial-institution · report subsectors/financial-institution.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 70 KB; 33/40 figures verified from primary sources — 29/40 if the four primary documents first downloaded by the Phase 1 agent and re-read in Part 4 (IFCI AR FY26, CARE 17-Aug-2026, ICRA 14-Sep-2026, SIDBI results) are excluded; non-primary rows: NSE IPO pricing/listing (press), IFCI Q1 FY27 board date (aggregators), IREDA Gensol fraud (4 consistent press reports), EXIM FY26 (bank release republished by a PR site), NABARD scale (snippet; nabard.org unreachable), plus two arithmetic-on-primary rows)

## Gate
GATE PASSED: 27/27 checks · 22435 prose words · 30737 total words · 312 KB

## Audit (vs hospitals benchmark)
Prose 22,435 (bench 19,815) · sections 23 · deep dives 6 (5 + KPI) · KPI masterclass prose 4,541 with 18 h3 · charts 64 (41 bars, 9 stacked, 3 maps, 8 flows, 3 timelines; + 1 heat-map table) · positioning maps 3 · tables 21 (all wrapped) · "In plain terms" callouts 30 · profile cards 1 (194 words) · 312 KB. No thin sections; every section has a chart/table; TOC 23/23; tags balanced; banned phrases none; "honest" 0; "think of" 0; stat strip ₹-only; no CONTINUE marker; 35× "illustrative", 101× "indicative".

## Render check
RENDER PASSED — 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375: scrollW 375, issues [], rotatedOps 0, overflowCulprits []. First run failed on one map (top-right quadrant label "Capital-rich, sprinting" overlapping the NaBFID dot in the growth-vs-capital map); fixed by moving the label's anchor from x=600 to x=566 (still in the corner). Run with the container's global Playwright 1.56.1 (NODE_PATH=$(npm root -g)), whose Chromium 1194 is pre-installed; Playwright 1.47.2's Chromium 1134 is not installed here. Tool file unchanged.

## Dossier
_cloud/financial-institution-industry.md ≈197 KB (Parts 1–3 122 KB + Part 4 70 KB + Part 5 orchestrator re-add). Primer issues: _cloud/financial-institution-primer-issues.md.

## Sections (DD = deep dive)
00 The one-page view · 01 How a DFI earns a rupee · 02 Two DFI systems, one owner (INDICATIVE set aggregates) · 03 The ₹136 lakh crore question · 04 DD Funding is fate: why the rating decides who survives · 05 Who owns what · 06 Six ways to be a state lender · 07 NBFC or AIFI: the rulebook, the capital floor and the ECL question · 08 Seventy-eight years, four lives · 09 DD A lender with no loans: the run-off book and the FY31 wall · 10 DD The exchange inside the lender: SHCIL, NSE and the sum of the parts · 11 DD Sell, merge, never regrow: the state's playbook for old DFIs · 12 DD The DFI reborn: NaBFID's design, and the refinance AIFIs · 13 Fees for the state: IFCI's advisory franchise · 14 DD KPI masterclass (data-kpi="1") · 15 Peer table · 16 Who is winning (3 maps + heat map) · 17 IFCI profiled (one .co-card) · 18 Global lens · 19 Technology and disruption · 20 Bull vs bear · 21 What to watch · 22 Glossary

## h1
Development financial institutions: <em>a lender with no loans</em>

## Forces
1. Run-off: IFCI GNPA 95.79% (Mar-26) / 95.68% (Jun-26), CRAR −18.78% / −17.58% (negative since Dec-2020), no sanctions since FY22, recoveries ₹537 Cr FY26 (AR basis), debt ₹4,185 Cr incl. accrued, FY31 ₹1,500 Cr bond wall.
2. Sum of the parts: SHCIL (52.86%) and its NSE stake — 11.00 crore shares pre-IPO, ≤61.9 lakh sold in the Sep-2026 OFS, 10.38 crore (4.19%) left; IFCI look-through ~₹9,748 Cr pre-tax at NSE ₹1,670 (INDICATIVE); FY26 consolidated PAT ₹434.71 Cr of which owners ₹180.87 Cr.
3. The state's playbook for old DFIs — sell (IDBI–Fairfax ₹52,878 Cr for 60.72%, ₹81/share vs ₹75.99 fair value, 14-Oct-2026), merge (PFC–REC 88:100, target 1-Apr-2027; IFCI with its subsidiaries, GoI approval awaited), never recapitalise to grow (₹2,000 Cr FY20–FY25, nil FY26/FY27).
4. The DFI reborn: NaBFID (loan book ₹1,16,950 Cr +95%, PAT ₹3,037 Cr, CRAR 44.22%, NIM 3.72% → 2.75% in Q1 FY27; US$750 m 6.122% bond) and the refinance AIFIs (SIDBI, NABARD, EXIM) under RBI's AIFI Directions (28-Nov-2025).
5. Funding is fate: AAA sovereign lenders borrow at ~7–7.5% vs IFCI's ~9.9% coupon at BB/B+; IFCI's surviving business is fee-based (PMA for 10 of 14 PLI schemes, ~20 mandates).

## Peer table combined rows
None — single-member sub-sector. One member row (IFCI · 500106, linked to ../primers/ifci.html) + 11 REFERENCE rows (PFC group, REC memo, IRFC, IREDA, HUDCO, IDBI Bank, NaBFID, SIDBI, EXIM Bank, NABARD, NSE) with no code/primer link, not summed. peersum.mjs: 0 ✗ (first run flagged the IDBI row because its label contained "ex-DFI"; relabelled "former DFI, now a bank" — a false positive, no combined row exists).
Hand-check: IFCI row re-checked against screener (fetched 23-Oct-2026, consolidated): m-cap ₹15,972 Cr / ₹59.3 intraday vs ₹15,945 Cr / ₹59.2 in the report (same day, earlier fetch), P/E 89.1 vs 88.9, book ₹33.2, ROE 1.97%, FY26 PAT ₹435 Cr, sales ₹2,077 Cr, promoter 72.57% — all consistent. Peer note states every basis (IFCI owners' EPS and parent book; PFC consolidated includes REC — never added; PFC NW attributable with ₹1,73,441 Cr incl. NCI footnoted; PFC GNPA standalone 1.09%; IRFC standalone; HUDCO PAT tax-boosted; NaBFID equity incl. ₹5,000 Cr grant).
Body aggregates (section 2, INDICATIVE): six listed sovereign lenders on ONE basis (total PAT ↔ net worth incl. NCI ↔ m-cap incl. REC minority's market value): revenue ₹1,95,321 Cr, PAT ₹56,214 Cr, NW ₹3,50,019 Cr, assets ₹25,15,857 Cr, m-cap ₹3,92,553 Cr, ROE 16.1%, P/E 6.98×, P/B 1.12×; NBFC five (ex-IDBI) and ex-IFCI five also re-added by me (dossier Part 5). I corrected a basis error in the Phase 1 dossier (set P/B 1.30× / ROE 18.6% mixed total PAT with attributable equity).
Other spot-checks: ₹10,000 Cr anatomy P&L re-added (NII 291, PBT 231, tax 58, PAT 173, ROA 1.73%, ROE 11.5%; ₹100 split 66.9/3.2/5.3/6.2/18.4 = 100; credit-cost sensitivity PAT ₹98 Cr / ROE 6.5%) — correct. Cost-of-funds vs ROA map: IFCI (9.91%, ~0.5%) and PFC (7.50%, 2.7%) coordinates match the axis scale; NaBFID dot in the growth-vs-capital map (95%, 44%) matches its axis.

## Labelled ILLUSTRATIVE/INDICATIVE
SOTP (₹9,000–12,200 Cr) and holdco premium 31–77%; NSE look-through pre-tax ₹9,748 Cr / post-tax ~₹8,330 Cr and the tax assumption; NSE sensitivity ₹549 Cr per ₹100; SHCIL post-tax OFS cash; Q2 FY27 OCI book-value jump to ~₹40/share and P/B ~1.5×; merger dilution ~160 crore shares (+59%), post-merger ownership and look-through per share; debt retirement via ~2.2 crore NSE shares; FY27–FY31 parent cash path and shortfall scenarios (₹450–1,100 Cr); set and DFI/AIFI aggregates and ratios; IFCI's shares of the set; cumulative losses FY19–FY23 and IDBI's; SIDBI ROE/cost of funds/credit cost; NaBFID opex/credit-cost ratios, normalised ROA 1.5–2%, FY30 book ~₹4.5 lakh Cr, capital headroom; peer ROAs and ROE decompositions; IFCI PCR ~84% (RBI basis), recovery yield, liquidity cover ~1.04×, P/ABV ~13×; IRFC NIM ~1.5%; NABARD Q1 PAT; managed-assets reconciliation; advisory franchise value and subsidiaries-at-book range; global DFI ₹ conversions; worked examples (₹1 lakh Cr NaBFID-type book, ₹10,000 Cr anatomy); KPI benchmarks and scorecard; heat-map scores; disruption severities; equity scenarios (~₹5,400 / ₹10,600 / ₹14,700 Cr); watch thresholds; press-sourced items (NSE subscription/listing price, IFCI ₹100 crossing and rally, IREDA sanctions fall, Gensol fraud).

## Not sourced / not reconciled
- NABARD FY26 PAT, net worth, CRAR (nabard.org refused connections); its Q1 FY27 PAT ₹2,170 Cr may be mislabelled — shown as press/INDICATIVE.
- IFCI Q2 FY27 board date not announced (BSE API 403; ifciltd.com reset) — report says "not yet announced".
- IRFC numeric cost of funds and CRAR; CRAR for IREDA/HUDCO/IDBI; IDBI GNPA; IREDA rating; EXIM net worth/total assets; NSE assets/revenue in peer table (n/s).
- NHB and JBIC figures; CDB/BNDES press-based.
- SHCIL FY26 annual report not online (FY26 figures from IFCI's AR AOC-1/NCI note); split of SHCIL's other ~31.92% among state holders.
- ICRA managed assets ₹7,312 Cr (Jun-26) vs ₹10,064 Cr (Mar-26) explained only as a likely basis change (scheme funds).
- Recoveries: CARE ₹576 Cr vs AR ₹537 Cr (AR used); residual IFCI stakes in ICRA/LICHF/TFCI unverified (described as incubations).
- No GoI decision on IFCI consolidation after 14-Sep-2026 found.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| ifci.html | 63 | 5138 | 10 | 9 | 12 | 0 | 2026-06-30 | ✅ | no main{min-width:0} (phone overflow) |
Hard checks pass; the missing grid fix is pre-existing (not fixed). ~26 content issues logged in _cloud/financial-institution-primer-issues.md (stale valuation, NSE IPO treated as future, NCI split of PAT, SHCIL figures, FY25 revenue, Q4 decline, Nov-2024 event, consolidation/ratings/liquidity, debt ladder, capital history, CRAR mechanics, PLI franchise, NaBFID, e-stamping 25 states, SHCIL minority, PCR basis, governance, IDBI read-across) plus notes for the IREDA, HUDCO and PFC/REC primers.

## Publish entry
{"key":"Finance || Financial Institution","name":"Development Financial Institutions","slug":"financial-institution","accent":"#833B07","noun":"development financial institutions","hook":"A lender with no loans: how India's development financial institutions became run-off books, why IFCI trades on its StockHolding and NSE look-through, how the state sells or merges old DFIs instead of recapitalising them, and why NaBFID works.","tags":["Run-off and the FY31 wall","SHCIL, NSE and the SOTP","Sell, merge, never regrow","NaBFID and the DFI reborn"]}
