done 2026-10-23T12:47:32Z · branch claude/ss-beverages · report subsectors/beverages.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 72 KB; 36/40 figures verified from primary sources — 2 rows are screener aggregates (m-cap/P/E), 2 were verified in the first pass and not re-fetched; dossier total 196 KB)

# Soft Drinks & Beverages (FMCG || Other Beverages) — STATUS

Single-company sub-sector (tier C): Varun Beverages Ltd — VBL · 540180 — primers/varun-beverages.html.

## Checks (all re-run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 23203 prose words · 32296 total words · 325 KB`
- Audit vs hospitals.html: prose 23,203 / 19,815; sections 24 / 20; deep dives 4 / 5; KPI section 4,492 prose words, 20 h3, 5 callouts inside it; charts 64 / 47 (47 bars, 8 stacked, 4 positioning maps, 3 flows, 2 timelines, 1 heat map); tables 18 / 16; callouts 29 / 29; 1 card (185 words). Thin sections: none. Sections without a chart or table: none. TOC 24/24 resolve; tags balanced; banned phrases none; "honest" 0; stat strip ₹-only; no CONTINUE marker; 32 × "illustrative", 67 × "indicative".
- Render check: RENDER PASSED (1024: scrollW 1024, h1 3 lines; 375: scrollW 375, h1 4 lines; issues []; rotatedOps 0). The first run flagged the "HCCB (implied)" label sitting on its dot in the valuation map (svg2); I moved the label, re-ran and it passed. Run with the preinstalled Playwright 1.56.1 (NODE_PATH=/opt/node22/lib/node_modules) because the pinned 1.47.2 cannot launch the bundled Chromium 1194.
- Spot-checks: cover and stat strip (6 ₹ cells, each in the dossier's verified table); peer table and its basis note; the one profile card; the plant-anatomy table (every line re-added at 45/60/75% utilisation, EBITDA/case, EBIT return and payback all agree); valuation-map coordinates vs the data (VBL growth +8.4% → x 401, price/sales 5.5× → y ≈ 208; HCCB plotted at like-for-like growth +5.9%, price/sales 2.3×).

## Sections (deep dives marked DD)
00 The one-page view · 01 How a bottle earns · 02 Two calendars, one 8-oz case · 03 Size and the litres gap · 04 Heat, rain and the season · **05 The ₹10 war (DD)** · 06 Three systems, a long tail · 07 Coca-Cola copies PepsiCo · **08 One bottler, one brand owner, 2049 (DD)** · 09 Sugar, PET and the West Asia shock · 10 From building plants to filling them · **11 Africa, the second engine (DD)** · 12 The 40% slab and the label police · 13 Less sugar, more milk · 14 Fifty years, seven shocks (timeline) · **15 Reading a bottler: KPI masterclass (DD, data-kpi)** · 16 The peer table · 17 Who is winning (3 maps and the heat map) · 18 The company profile · 19 The global lens · 20 Technology & disruption · 21 Bull vs bear · 22 What to watch · 23 Glossary

h1: `Indian soft drinks: <em>the weather, the ₹10 war and PepsiCo's bottler</em>`

## Forces
1. Weather and the season. IMD put 2025 pre-monsoon rain at 142% of normal, and CY25 India volume grew only +2.2% (Q2 CY25 −7.1%). The 2026 monsoon ended at 87% of normal.
2. The Campa price war and who pays for it. Coca-Cola reported a loss of India value share, while VBL's India margin rose in Q1 and Q2 CY26. The ₹10 tier is under 2% of VBL volume, and VBL's answer is a 400 ml bottle at ₹20.
3. Coca-Cola's restructuring. HCCB has refranchised territories, and Jubilant paid ₹11,724 Cr for 40% of HCCB's parent. That values HCCB at about 2.3× sales, against about 5.5× trailing sales for VBL.
4. From building plants to filling them. India capacity rose about 45% from CY22 to CY24. CY26 India capex is guided below ₹500–600 Cr, and CY25 free cash flow was ₹797 Cr.
5. Africa as the second engine. BevCo, Twizza and Kenya are in, and the Crickley deal lapsed. Currency risk is real, and Coca-Cola HBC is buying 75% of CCBA.

## Peer table
This is a single-member sub-sector, so there is **no combined row** by design and no subgroup rows to hand-check. The table has the member row `Varun Beverages VBL · 540180` (CY25 consolidated: revenue 21,685 · EBITDA margin 23.3% · reported PAT 3,062 · ROCE 19.7% · net debt 373 (Jun-26) · m-cap 1,32,702 · P/E 39.2× TTM · EV/EBITDA 23.6× TTM · price/sales 5.5×), then 13 REFERENCE rows with no "·" code and no primer link: Tata Consumer, HCCB, Coca-Cola India, RCPL/Campa, Bisleri, Parle Agro, PepsiCo, Coca-Cola Co, Monster, Coca-Cola FEMSA, Coca-Cola HBC, CCEP and Arca. peersum finds no sum rows.

Hand-check of the VBL ratios: 1,32,702 ÷ TTM revenue 24,126 = 5.50× ✓. EV 1,33,075 ÷ TTM operating profit 5,646 = 23.6× ✓. 1,32,702 ÷ TTM PAT 3,409 = 38.9×, against screener's 39.2×; the gap is screener's own share-count and price basis, and the footnote states the TTM basis. The RCPL row shows "~22,000" because it is RCPL's total FMCG gross revenue. A footnote gives Campa/beverages at ₹4,700+ Cr gross and says it is not comparable with net revenue.

## Labelled ILLUSTRATIVE / INDICATIVE
- India market size (₹65,000–80,000 Cr, bottom-up) and all market shares.
- The per-bottle split of a ₹20 bottle, the economics of Campa's ₹10 pack, and trade margins.
- India vs international EBITDA per case (consolidated − standalone, about ₹45 vs ₹35) and the international margin.
- PET, sugar, volume, realisation and weather sensitivities (PET about ₹310 Cr a year).
- Twizza at about 40 mn cases a year.
- The plant-anatomy P&L and its chart, and the India capacity index.
- The CY26 cash budget and the CY27 EBITDA scenarios.
- Per-capita comparisons (Redseer).
- Aggregator P/Es and global multiple ranges, and euro conversions at ₹104/€.
- HCCB's implied value and multiples.
- Campa figures back-calculated from Reliance disclosures, and the gross-to-net haircut.
- Capex per incremental case, the ROCE recovery path, and concentrate cost.
- The heat-map scores, benchmark thresholds and every worked example.

## Could not source or reconcile
- Not disclosed: PepsiCo concentrate price or royalty, VBL capacity in cases and utilisation, VBL truck count, and Sting's share of volume.
- No audited series: market shares.
- Not yet filed or published: HCCB FY26 (RoC); Reliance Q2 FY27 (Campa) and Coca-Cola Q3 2026 (27-Oct).
- Bisleri: nothing after FY24 (snippet only).
- Campa: net revenue, margin and volume not disclosed.
- Not found: Red Bull India and NourishCo absolute revenue.
- Not fetched: CCEP market cap and P/E, and Arca P/E.
- Sugar and PET prices: snapshots only, no series.
- FSSAI's "energy" labelling order: fssai.gov.in failed TLS from the sandbox, so the report relies on press coverage and VBL's call.
- IMD's official 2026 data: the site failed TLS / returned 503; the 87% monsoon figure is secondary.
- rPET target: VBL's annual report gives both 50% and 30%, and the report flags the inconsistency.
- HCCB EBITDA margin: CRISIL says 12.9% and HCCB's CFO says 13.2%; the report uses "about 13%".
- VBL CY25 EBITDA margin: CRISIL's adjusted 24.5% vs the company's 23.3%; the report uses the company figure.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| varun-beverages.html | 62 | 4762 | 16 | 11 | 12 | 0 | 2026-06-30 | ❌ banned | no main{min-width:0} (phone overflow) |

This failure was already in the primer and is logged, not fixed: the banned phrases are "no room for error" and "a long way to fall". Content corrections for the primer (17 from Phase 1, 12 from Phase 1c) are in `_cloud/beverages-primer-issues.md`. The main ones: m-cap ₹1,32,702 Cr / 39.2× rather than ₹1.72 L Cr / 54×; "second-largest" PepsiCo franchisee outside the US; 26 states and 6 UTs; 53 plants; consolidated net debt of ₹373 Cr; the EBA running to 2049; Twizza at about 40 mn cases; the lapsed Crickley deal; 2,353 distributors.

## Publish entry
{"key":"FMCG || Other Beverages","name":"Soft Drinks & Beverages","slug":"beverages","accent":"#3B6426","noun":"bottlers","hook":"The weather, the ₹10 war and PepsiCo's bottler: how a ₹20 bottle is split between tax, trade, brand owner and bottler, why one rainy summer erases a year's growth, who is paying for Reliance's Campa price war, why Coca-Cola is refranchising India, and how to read Varun Beverages quarter by quarter.","tags":["The ₹10 Campa war","PepsiCo franchise to 2049","Africa, the second engine","Bottler KPI masterclass"]}

## Files on this branch
subsectors/beverages.html · _cloud/beverages-industry.md (Parts 1–4) · _cloud/beverages-primer-issues.md · _cloud/beverages-STATUS.md
