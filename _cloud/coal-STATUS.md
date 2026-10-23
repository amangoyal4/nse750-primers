done 2026-10-23T06:35:47Z · branch claude/ss-coal · report subsectors/coal.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 58 KB; 34/40 figures verified from primary sources — 5 secondary (plant stock/CREA, Newcastle, Indonesian HBA, gasification scheme, Glencore volume), 1 arithmetic)

# Coal (Mining || Coal) — STATUS

**Gate:** GATE PASSED: 27/27 checks · 23210 prose words · 31235 total words · 313 KB

**Audit totals (vs hospitals.html):** 23,210 prose words (19,815; ~550 of these are footer sources, body ≈ 22.6k) · 23 sections (20) · 6 deep dives (5) · 64 chart blocks (47) · 3 positioning maps (4) · 20 tables (16) · 29 "In plain terms" callouts (29) · 2 profile cards (191 / 206 words) · KPI section 4,443 words, 18 h3. Thin sections: none. Banned phrases: none; "honest" 0; "think of" 0; stat strip ₹-only; every table wrapped; footer.src li has overflow-wrap:anywhere.

**Render check:** RENDER PASSED — scrollW 1024/375 = 1024/375; issues []; rotatedOps 0; h1lines 3 at 1024 and 3 at 375. (Run with the pre-installed Playwright 1.56.1 at /opt/node-tools/node_modules, which matches the pre-installed Chromium 1194; Playwright 1.47.2 cannot launch that Chromium.)

**Dossier:** _cloud/coal-industry.md, 189 KB (Parts 1–3 128.5 KB; Part 4 deep-research 58 KB with 25 Supersedes S1–S25; orchestrator re-add appended at the end). All Part 3 sums and ratios were re-added by hand and the arithmetic is right. Three basis fixes were applied (now in the ORCHESTRATOR RE-ADD section):
- Revenue is company RFO for both members. GMDC is ₹2,653 Cr, not screener's ₹2,523 Cr, which nets the GST cess (S5). Combined FY26 is ₹1,71,053 Cr, −0.6%.
- EBITDA/t uses offtake for both members: ₹500 combined. Part 3's ₹485 mixed production with despatch.
- Ownership is shown per company, not as a simple average.

## Sections (DD = deep dive)
00 The one-page view: a state-set price, a weather-set profit
01 From pit to power plant
02 A billion tonnes, three producers
03 The residual fuel: demand
04 Glut to squeeze in six months — DD
05 One price for the nation, another for the market
06 The e-auction premium: anatomy of the swing factor — DD
07 Where ₹100 of revenue goes
08 Wages, cess and the state — DD
09 Who mines India's coal next — DD
10 Six ways to own a tonne
11 Rules of the pit
12 Fifty years, seven cycles
13 Reading a coal miner: the KPI masterclass — DD (data-kpi)
14 The peer table
15 Who is winning (3 maps + heat-map scorecard)
16 Company profiles
17 GMDC: lignite, Odisha coal and rare earths — DD
18 Imports and the global lens
19 Peak coal and the hedges
20 Bull vs bear
21 What to watch (thresholds + calendar: BCCL 25-Oct, CIL 29-Oct, GMDC 30-Oct-2026, monthly releases, MCL IPO, exec pay revision Jan-27, Baitarani West Q4 FY27)
22 Glossary

**h1:** Indian coal: <em>a policy price in a market squeeze</em>

## Forces
1. Whiplash, FY26 glut to FY27 squeeze. FY26: coal power −3%, CIL pithead stock ~130 mt, e-auction premium 46%, PAT −12%. FY27: the West Asia LNG cut and weak hydro left plant stocks at ~36% of norm (~7–8 days of cover); the Sep-26 premium was 94%.
2. Price is set by policy. CIL sells ~89% of volume at the FSA/notified price; the e-auction premium is the profit swing factor.
3. CIL's monopoly is eroding. Captive and commercial mines reached 210 mt (+10%), SCCL fell, and CIL's share went from 77.5% to ~74%. CIL is listing subsidiaries: BCCL and CMPDI are listed and MCL has filed its DRHP.
4. Cost and the state:
   - the NCWA-XII wage deal is still pending;
   - Jharkhand's cess went from ₹250 to ₹450/t;
   - CIL's own estimate of its Odisha ORISED exposure is ₹31,228 Cr;
   - the MMDR Amendment 2026 is passed but assent is not verified;
   - GST 2.0;
   - the stripping ratio rose from 1.9 to 2.58.
5. Imports and the transition. Imports were 246.4 mt in FY26, with coking coal at 66.1 mt (+16%). Diversification: solar, the ₹37,500 Cr gasification scheme, critical minerals and GMDC's rare earths.

## Peer combined rows (as printed by peersum)
OTHER: All members (sum) | 1,71,053 | −0.6% | 37,615 | 22.0% | 32,028 | 31,636 | 47,162 | 9,013 | (44,341) | 2,57,262 | 8.0× | — | 5.7× | 16,633 | 6.5% | — | 752.7 | 500 | —
CHECK [All members (sum)] (2 cos): ✓ on all 10 summable columns (revenue FY26, OP, PAT reported, PAT ex-one-off, Q1 FY27 revenue, Q1 FY27 PAT, net debt/(cash), m-cap, dividends, volume).
Hand-check of ratios (all are ratios of sums):

| Ratio | Calculation | Result |
|---|---|---|
| Growth | 1,71,053 / 1,72,028 | −0.6% ✓ |
| OPM | 37,615 / 1,71,053 | 22.0% ✓ |
| P/E | 2,57,262 / 32,028 | 8.03× ✓ |
| EV/EBITDA | (2,57,262 − 44,341) / 37,615 | 5.66× ✓ |
| Yield | 16,633 / 2,57,262 | 6.47% ✓ |
| EBITDA/t | 37,615 / 752.7 mt | ₹500 ✓ |

Company rows also check out: CIL P/E 7.85×, EV/EBITDA 5.4×, yield 6.7%, ₹499/t; GMDC P/E 13.9×, EV/EBITDA 26.9×, yield 2.3%, ₹562/t.

There are no subgroup rows; the report has only 2 members. REFERENCE rows sit below the combined row, carry no "·" code and are in no sum: NLC India, BCCL, CMPDI, China Shenhua, Glencore (coal), Peabody, Whitehaven, Bumi. Two reference figures were re-checked:
- Shenhua m-cap HK$1.23 tn / P/E 12.56: re-fetched from stockanalysis on 23-Oct-26 ✓.
- BCCL's 33.1 mt is offtake (output 35.52 mt), consistent with the column's offtake basis; ₹4,129/t and −₹149/t re-derived ✓.

Spot-checks:
- Cover and stat strip.
- Peer table and notes.
- Both profile cards.
- The ILLUSTRATIVE 10 mtpa opencast-mine anatomy. Every line was re-derived: revenue 1,552 = 8.8×1,450 + 1.2×2,300; costs 1,078; EBITDA 474 (30.5%); EBIT 364; post-tax 273 ≈ 15% ROCE on 1,800. The sensitivities (+₹60 Cr OB cost, +₹84 Cr auction revenue, ₹26 Cr wage cost) also check out.
- The yield vs P/E map. Dot x/y match the data: CIL 6.7% / ~8×; GMDC 2.3% / 13.9×; Shenhua 5.9% / 12.6×; Whitehaven 1.3% / 16.6×.

## Labelled ILLUSTRATIVE / INDICATIVE
- **Production, stocks and previews:**
  - All-India FY26 output of ~1,037 mt is a sum of producers, not an official total.
  - Plant-stock days of cover (~7–8) and pithead days.
  - CIL end-Sep pithead stock ~67 mt.
  - Q2 FY27 previews for both companies.
  - FY27 supply outcome of 800–820 mt.
- **GMDC derived figures:**
  - Ex-one-off PAT ~₹565 Cr and the 23.6× P/E built on it.
  - Net cash ~₹1,400 Cr.
  - Realisation ~₹2,967/t, EBITDA/t and mining result/t, cost/t.
  - The FY27 table and the Baitarani West ₹450–600 Cr sketch.
- **Composites and worked examples:**
  - "Where ₹100 goes"; all benchmark ranges and the scorecard pills.
  - The equation worked example, per-tonne waterfall and sensitivities; the opencast mine anatomy.
  - Bull/base/bear scenarios and chart; the FY30 industry sketch.
  - Price per 1,000 kcal; CIL cash cost ~$11/t; coal-pipeline demand arithmetic.
  - The ~₹3,900 Cr minority-leakage figure; wage arrears per quarter.
- **Global and policy:**
  - Glencore coal volume ~130 mt; ₹ conversions of global m-caps.
  - The MMDR Amendment effect: assent and notification are not verified, and the report says so.

## Could not source / reconcile
- **National data:**
  - The Ministry of Coal's official FY26 national production total, and its Sep/H1 FY27 split.
  - A FY27 monthly import series (TradeStat has no 2026 data at HS-8 level yet).
  - API4 price and the current Indonesian 4,200 GAR market price (HBA is used instead).
  - A 2026 restatement of the 1.5 bn t target; the full-year CEA FY26 coal share of generation.
- **CIL:**
  - Company-stated FY22–FY23 e-auction premium % (only Apr–Jan secondary figures, plus realisation ratios 1.34× and 3.28×).
  - FY24 full-year channel realisations (H1 only).
  - NCWA-XII size.
  - Presidential assent to the MMDR Bill, and the fate of Jharkhand's ₹450/t cess.
  - Any 2026 notified-price hike (none found).
- **Other producers:**
  - NTPC FY26 captive output and the NTPC Mining IPO status.
  - NLC volume, which is inconsistent across sources; NLC net cash.
  - AlamTri volume.
  - Glencore and Whitehaven trailing EBITDA from stockanalysis (Whitehaven's reported underlying EBITDA is used instead).
- **GMDC:**
  - A rare-earth tonnage target: none exists, and the report says so.
  - FY22–FY23 lignite revenue, read off a chart.
- **Earnings calls:** neither member held a published Q1 FY27 call. The latest transcripts are CIL 14-May-2025 and GMDC 23-May-2025, so the guidance digests also use CIL's 31-Aug-2026 AGM speech and both companies' monthly releases.

## Primer audit (primer-audit.mjs "Mining || Coal")
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| coal-india.html | 74 | 6265 | 19 | 10 | 13 | 0 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} (phone overflow) |
| gmdc.html | 66 | 5583 | 9 | 10 | 12 | 0 | 2026-06-30 | ❌ bars<10 | no main{min-width:0} (phone overflow) |

These failures were already in the primers; I did not fix them here and logged them in _cloud/coal-primer-issues.md. That file also lists all the data corrections for both primers: dividend, FY25 revenue, e-auction premium, realisations, the wage/cess story, OFS dates, BCCL/CMPDI listings, MCL DRHP, GMDC power-segment loss, mine count, rare-earth target, m-caps and more.

## Publish entry
{"key":"Mining || Coal","name":"Coal","slug":"coal","accent":"#620E0E","noun":"coal miners","hook":"A policy price in a market squeeze: how Coal India and GMDC make money when the state sets the price but the weather sets the profit — FSA vs e-auction realisations, the FY26 glut and FY27 squeeze, wages and state mineral taxes, captive miners eroding the monopoly, imports and the peak-coal hedges.","tags":["The e-auction premium","Glut to squeeze","Wages, cess and the state","Who mines India's coal next"]}
