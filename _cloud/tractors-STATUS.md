done 2026-10-23T07:51:04Z · branch claude/ss-tractors · report subsectors/tractors.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 69 KB; 29/40 figures verified from primary sources)

Item: Tractors — key "Automobile & Ancillaries || Tractors" — single-company sub-sector (tier C), member Escorts Kubota Ltd (ESCORTS · 500495, primers/escorts-kubota.html). The report covers the whole Indian tractor industry, with Escorts as the lens.

## Phases
- Claim, then dossier Parts 1–3 (`_cloud/tractors-industry.md`, 121 KB), then Part 4 deep research (+71 KB). Whole dossier 191.5 KB; floor 150 KB.
- Primer issues: `_cloud/tractors-primer-issues.md`. The first-pass greenfield bullet was withdrawn after Part 4 S-3.
- Writer, then my checks, then this STATUS. I pushed after every phase.
- Note: my first claim commit was based on a stale local origin/main (it lacked the tractors queue entry and the single-company rules). I rebased it onto origin/main a08e6fc and force-pushed my own branch only, within the first minutes.

## Checks (all re-run by me)
- Gate: `GATE PASSED: 27/27 checks · 22947 prose words · 32426 total words · 333 KB`
- Audit (vs hospitals.html):
  - 22,947 prose words; 23 sections; 6 deep dives;
  - KPI masterclass 4,771 words with 18 h3;
  - 65 chart blocks; 4 positioning maps; 23 tables; 36 "In plain terms" callouts; 1 profile card;
  - no thin sections; TOC 23/23 resolving; no banned phrases; "honest" 0;
  - labelled estimates: 20 × illustrative, 87 × indicative.
- peersum: no combined rows. That is correct, because a single-company sub-sector has none.
  - The member row is reported PAT ₹2,394 Cr, with clean PAT ~₹1,380 Cr in a separate column.
  - Every reference row is unlinked and carries no "·" code.
- Hand checks:
  - **Member row:** net cash 9,840 − 162 ≈ 9,680; EV/EBITDA (29,390 − 9,680) ÷ 1,496 = 13.2×.
  - **Agri EBIT per tractor:** 1,232 ÷ 1,33,670 ≈ ₹0.92 lakh.
  - **KPI worked example:** units 1,26,994 + 6,676 = 1,33,670; 7,920 + 1,860 ≈ 9,779.6; EBIT 1,232 + 133 + 459 = 1,824.4.
  - **Map "Who gained in Sep-2026":** every coordinate matches its data.
  - **Dossier aggregates re-added:**
    - TMA FY25/FY26 totals, shares and the rest-of-industry residuals;
    - listed pool 46,189 / 8,438 = 18.3%;
    - TAFE+ITL 22,654 / 3,097 = 13.7%, PAT 3,436;
    - big-independents cash 9,840 + 7,600 + 7,750 ≈ 25,190 (after S-4). The dossier labelled this "five biggest" over three items; the writer relabelled it "big independents".
- Render check: **RENDER PASSED** at 1024 and 375 (scrollW = width, issues [], rotatedOps 0, h1lines 3).
  - First run failed on a quadrant label ("Big, losing share") sitting on the M&M dot. I moved both bottom labels from y=372 to y=376 and the re-run passed.
  - Ran via a scratch copy of rcheck.mjs that launches the pre-installed chromium headless_shell (executablePath only; the logic is unchanged).
- primer-audit:

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| escorts-kubota.html | 69 | 5523 | 17 | 9 | 12 | 0 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} (phone overflow) |

The primer fails above were already there before this run and are logged here; I did not fix them (not allowed).

## Report
- h1: Indian tractors: <em>the million-tractor peak and the turn</em>
- Sections (DD = deep dive):
  - 00 One-page view
  - 01 How a tractor earns
  - 02 From 4 lakh to 11.6 lakh
  - 03 Rain, MSP and farm cash
  - 04 The financed tractor
  - 05 The million-tractor year and the hangover **(DD)**
  - 06 Where ₹100 goes
  - 07 One giant, five challengers
  - 08 Six business models
  - 09 GST, TREM and the price of a tractor **(DD)**
  - 10 South, West and 45 HP
  - 11 Eight decades of cycles
  - 12 KPI masterclass **(DD, data-kpi)**
  - 13 Peer table
  - 14 Who is winning (4 maps + heat map)
  - 15 Escorts Kubota, the lens (the card)
  - 16 Japan Inc. in Indian tractors **(DD)**
  - 17 The export race and global lens **(DD)**
  - 18 The cash-rich cyclical **(DD)**
  - 19 Technology and disruption
  - 20 Bull vs bear
  - 21 What to watch
  - 22 Glossary
- Forces:
  1. **Monsoon and MSP:** monsoon → farm cash with a lag; terms of trade and MSP. 2026 monsoon −12.6%; wheat MSP +1%.
  2. **Policy price shocks:** the GST cut 12%→5% (22-Sep-2025) pulled demand forward; TREM is now notified (<25 and >75 HP from 1-Oct-2026, a 25–50 HP interim step Apr-2028, 25–75 HP Stage V Apr-2032).
  3. **Tractor finance:** ~95% of tractors are financed; captive NBFCs.
  4. **Concentration:** M&M has 43.6%, and the cash-rich challengers keep the margin band stable.
  5. **Kubota:** the export and technology option, plus related-party flows (royalty only ₹5.27 Cr; purchases ~₹1,286 Cr).
  6. **Mix shifts:** regional (South/West) and HP (41–50 HP).
- Peer table:
  - **Member row:** ESCORTS · 500495, FY26 consolidated: revenue 11,540; operating margin 13.0%; PAT reported 2,394 / clean ~1,380; 1,33,670 tractors; share 10.9%; net cash ~9,680; m-cap 29,390; P/E 20.7×; EV/EBITDA ~13.2×.
  - **REFERENCE rows:** M&M Farm (standalone and consolidated segments), M&M group, TAFE (FY25), Sonalika/ITL (FY25), VST Tillers (listed, outside NSE 750), John Deere India, CNH India, Kubota Corp.
  - No combined row (single-company rule).
- **Labelled ILLUSTRATIVE/INDICATIVE:**
  - Industry revenue ~₹73,000 Cr and retail value ₹85–95k Cr.
  - Per-tractor figures: Escorts realisation ~₹5.93 lakh and EBIT ~₹0.8–0.9 lakh per tractor; TAFE and Sonalika per-tractor figures.
  - Shares: Sonalika ~13% and John Deere ~8% (residuals); Q2 FY27 industry ~2.65 lakh, Escorts share ~12.3% Q2 and ~11.3% H1; HHI ~2,600; "others" ~1.3–1.7%.
  - Approximate history: FY10–FY18 volumes, 2014–2024 monsoon series, wheat MSP before RMS 2026-27, shares before FY24.
  - Worked examples: the 45 HP price walk and TREM cost; Stage V cost 25–30% (VST CEO, single source); loan instalment and farmer cash flow; one-tractor P&L; operating leverage; mix-shift example.
  - Escorts cash and valuation: ex-cash ROCE ~47%, treasury yield ~6.7%, ex-cash P/E; implied Kubota-brand turnover ~₹1,050 Cr (14–16k units); dividend outlay ~₹570 Cr.
  - Scenarios and judgements: FY27 bear/base/bull and their P/Es; capacity utilisation for Sonalika and the industry; the heat-map scorecard; the KPI benchmark bands.
  - Conversions: rupee figures for Kubota, Deere and CNH.
- **Could not source or reconcile (stated in the text):**
  - FY18 industry volume: 7.11 vs 7.29 lakh. FY10–FY18 volumes and 2014–2024 monsoon are background figures, not fetched. IMD's site failed the TLS check from the sandbox, and I did not bypass it.
  - John Deere India and CNH India financials are behind the company-registry login, which was not attempted.
  - TAFE and ITL FY26 financials are not published; FY25 is shown.
  - The Sonalika domestic/export split and the August-2026 industry total are estimated.
  - Whether Section 232 metal tariffs apply to tractors is unclear; HS 8701 export value and US share are open.
  - Escorts cash conversion: screener 130% vs ~92% computed (both shown). Screener's 1.26% dividend yield does not match ₹51 ÷ ₹2,627, so the yield is omitted.
  - The wheat MSP hike is described as the "smallest rupee increase in ~17 years" (the percentage claim does not hold).
- **Results status:**
  - Escorts' latest reported quarter is Q1 FY27 (Jun-26); its Q2 FY27 board meeting is Mon 2-Nov-2026, with the call at 17:00 IST. Q2 volumes are known: Sep-26 domestic 14,911 (−16.2%).
  - M&M Q2 F27 is due early Nov (indicative).
  - VST's date was not announced.

## Publish entry
{"key":"Automobile & Ancillaries || Tractors","name":"Tractors","slug":"tractors","accent":"#B30909","noun":"tractor makers","hook":"The million-tractor peak and the turn: how monsoon rain, MSP and tractor finance become orders, why a GST cut and the TREM emission rule pulled demand into a record FY26, how M&M and five challengers split 11.6 lakh tractors, and what Kubota's control means for Escorts Kubota.","tags":["The million-tractor year","GST, TREM and tractor prices","Japan Inc. in Indian tractors","The export race"]}
