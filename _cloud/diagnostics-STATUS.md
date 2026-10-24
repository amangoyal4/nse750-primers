done 2026-10-24T08:39:13Z · branch claude/ss-diagnostics · report subsectors/diagnostics.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 84 KB; 39/40 figures verified from primary sources — all 40 rest on documents fetched this session; #38 CRISIL market size is via an SBI Securities note reproducing the Suraksha RHP; dossier total 248 KB = industry 179 KB + companies 69 KB)

## Checks (all re-run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 23596 prose words · 33101 total words · 335 KB`
- Audit: 23,596 prose words (hospitals 19,815); 64 chart blocks; 26 tables; 38 "In plain terms" callouts; 24 sections, 6 deep dives; KPI section 4,481 words / 21 h3; 5 cards (173–179 words); no thin sections (What to watch 261 is the shortest non-glossary); TOC 24/24; primer links 5/5; tags balanced; banned phrases 0; "honest" 0; stat strip ₹-only; no CONTINUE marker; 26× "illustrative", 55× "indicative". Sections with no chart/table: p16 (profiles), p21 (bull/bear).
- peersum: "All five combined", "Diagnostics ex-Jeena Sikho", "Ex-Dr Lal (Vijaya + Metropolis + Thyrocare + Jeena Sikho)" ✓ on every summed column (revenue, OP, PAT reported, PAT pre-exc., Q1 FY27 revenue, net debt, m-cap).
- Render check: RENDER PASSED (scrollW 1024/1024 and 375/375; issues []; rotatedOps 0; h1lines 3 at 1024) — pre-installed Playwright (NODE_PATH=/opt/node22/lib/node_modules). First run flagged one quadrant label ("Premium mix, premium multiple") touching Vijaya's dot on the rev/patient vs P/E map; the orchestrator moved both top quadrant labels up 6px; re-run passed.
- Spot checks: cover/stat strip; peer table + notes; Thyrocare and Jeena Sikho cards; anatomy-of-one-hub P&L (every line re-added: costs 21.95, EBITDA 9.55 = 31.50 − 21.95 (30.3%), PBT 7.65, PAT 5.74, pre-tax ROCE (9.55 − 1.60) ÷ 12 = 66%; commission 40% × 31.5 × 25% = 3.15; reagents 10.5 lakh × ₹60 = 6.30; stack sums to 100); growth-vs-margin map and rev/patient-vs-P/E map — all dots match the data to the pixel.

## Sections (deep dives marked)
00 The one-page view: a volume business in a market nobody owns
01 From needle to report: how a sample becomes revenue
02 Size: two estimates, one runway
03 Fragmentation is the runway
04 Who orders the test: the demand engine
05 Where ₹100 of revenue goes
06 Seven ways to run a lab
07 [DEEP DIVE] ₹40 a test vs ₹575 a test
08 Hubs, spokes and operating leverage
09 [DEEP DIVE] Scanners and shoe-leather (radiology through Vijaya)
10 [DEEP DIVE] The war of the full-body checkup
11 The rules of the lab
12 Seventy-five years, four shocks
13 [DEEP DIVE · KPI] Reading a lab: the KPI masterclass
14 The peer table
15 Who is winning (3 maps + heat map)
16 Five company profiles
17 [DEEP DIVE] An Ayurveda hospital that sells medicine
18 [DEEP DIVE] Owners, sellers and buyers: the M&A map
19 The global lens and the price of growth
20 Technology and disruption
21 Bull vs bear
22 What to watch
23 Glossary

## h1
Diagnostics &amp; wellness: <em>a ₹1 lakh crore market, 6% listed</em>

## Forces
1. Fragmentation is the runway — ~₹1.0–1.1 lakh Cr market FY26 (CRISIL basis, interpolated), organised 10–25% (CareEdge vs Metropolis chair), listed four ≈ 6%, Dr Lal ~2.6% (indicative).
2. Volume over price, mix rescuing realisation — CareEdge seven-chain series (patients 64 → 99 mn, rev/patient ₹786 → ₹759, margin 32.3% → 24.7% → 26.7%); Q1 FY27 broke the trend (Dr Lal ₹968/patient +10% incl. CGHS revision; Metropolis ₹1,219).
3. Hub-and-spoke operating leverage; pathology as logistics vs radiology as capex-and-location (Vijaya 37% radiology, 42.7% Q1 margin).
4. The wellness-package price war — loss-making funded challengers (Redcliffe, Orange Health, Healthians, Tata 1mg, Neuberg) and Thyrocare under PharmEasy.
5. Ownership and governance overhangs (Docon 71.22% → 51.02%, pledge released 17-Aug-2026; JSLL auditor change, related parties, unexplained 33% October fall) and M&A moving from regions to capability (Suburban → Core → SN Genelab, Arya).

## Peer combined rows (as printed: rev FY26 / growth / OP / OPM / PAT reported / PAT pre-exc. / Q1 FY27 rev / Q1 YoY / net debt / m-cap / P/E TTM / EV/EBITDA)
- All five combined: 6,853 / +21.7% / 2,140 / 31.2% / 1,259 / 1,285 / 1,943 / +20.6% / (48) / 67,630 / 50.2× / 31.6×
- Diagnostics ex-Jeena Sikho: 6,052 / +17.3% / 1,789 / 29.6% / 1,037 / 1,063 / 1,719 / +19.6% / (65) / 63,385 / 57.0× / 35.4×
- Pathology-led (Lal + Metropolis + Thyrocare): 5,238 / +16.9% / 1,452 / 27.7% / 864 / 890 / 1,488 / +19.1% / (260) / 49,075 / 53.1× / 33.6×
- Ex-Dr Lal (Vijaya + Metropolis + Thyrocare + Jeena Sikho): 4,090 / +29.1% / 1,357 / 33.2% / 749 / 753 / 1,145 / +21.7% / 176 / 36,776 / 45.9× / 27.2×
Hand-check (orchestrator, column by column): Pathology-led — revenue 2,763 + 1,646 + 829 = 5,238 ✓; FY25 2,461 + 1,331 + 687 = 4,479 → +16.9% ✓; OP 783 + 406 + 263 = 1,452 ✓ (27.7% ✓); PAT 510 + 191 + 163 = 864 ✓; pre-exc 532 + 191 + 167 = 890 ✓; Q1 798 + 450 + 240 = 1,488 ✓; net debt (224) + 90 + (126) = (260) ✓; m-cap 30,854 + 10,849 + 7,372 = 49,075 ✓; P/E 49,075 ÷ TTM (546 + 203 + 176 = 925) = 53.1× ✓; EV/EBITDA 48,815 ÷ 1,452 = 33.6× ✓. Also re-checked P/E on the auto-checked rows: all five 67,630 ÷ 1,348 = 50.2× ✓; ex-JSLL 63,385 ÷ 1,112 = 57.0× ✓; ex-Lal 36,776 ÷ 802 = 45.9× ✓; EV/EBITDA (67,630 − 48) ÷ 2,140 = 31.6× ✓. Dossier Part 3 aggregates also re-added from the company rows — no arithmetic errors; Part 4 Supersedes changed no peer-table figure. One basis throughout: screener consolidated FY26, reported PAT (pre-exceptional separate: Lal normalised 532, Thyrocare ~167 indicative), screener-basis net debt incl. Ind-AS 116 leases, m-cap 23-Oct-2026 close.

## Labelled ILLUSTRATIVE / INDICATIVE
Market-size FY26 interpolation (CRISIL ~₹1.04–1.09 lakh Cr; CareEdge-implied lower) and all computed market shares; organised/hospital/standalone split; ticket-size ranges; all "₹100 of revenue" composites (rebuilt to match disclosed gross margins); hub break-even example (~1,200 tests/day); MRI worked example; Vijaya per-test radiology/pathology split; anatomy-of-one-hub P&L and its stack; pre-Ind AS margins; Metropolis ROCE ex-Hitech (~26%); benchmark scorecard ranges; heat-map scores; ten-year return scenarios; What-to-watch thresholds; challenger revenues/losses (Healthians single-source); Neuberg ₹1.4–1.6k Cr; global-peer EV/EBITDA (~10–13×, memory) and Quest EBITDA ~19%; US/EU consolidation 60–80%; Thyrocare pre-exceptional PAT ~167; Metropolis organic growth ~13–16%; SN Genelab ~4.1× and Centrapath ~4.9× sales, Nueclear 3.2× sales / 23× PAT; JSLL per-unit tickets, bed productivity, FY24–26 occupancy; group net cash ~₹1,200 Cr; ~3 mn tests/day; 70–80% IVD import share; Thyrocare ~540k tests/day; API's ₹1,300 / ₹433 entry price (memory).

## Could not source / reconcile
- Market-level pathology vs radiology split and hospital-lab share; NABL medical-lab count (NABL publishes only 14,000+ across all schemes); online share of B2C volume; AYUSH hospital count.
- Neuberg FY26 revenue (sources conflict; no DRHP); Apollo Diagnostics, Tata 1mg Labs, Max Lab revenues not disclosed.
- Metropolis −1.04 pp promoter drop in the Sep-26 quarter — cause unknown (text says likely a promoter-entity sale, unconfirmed).
- Trovera's owners (Nueclear buyer) not identified.
- Jeena Sikho's ~33% fall (29-Sep → 23-Oct-2026) — no cause found in filings or press; the report says so and does not speculate. JSLL's "PMO-approved" AYUSH PM-JAY inclusion stated as unverified.
- CGHS OM details and GST HSN 3822 rate — secondary sources only. Global EV/EBITDA multiples from memory (page blocked).
- Dossier gave Lal CFO/EBITDA 104%; 636 ÷ 783 = 81% — writer used its own CFO/EBITDA arithmetic for all members.
- Kedaara's remaining Vijaya stake; SN Genelab price terms (24-Sep filing not read).

## Primer audit (pre-existing; logged in diagnostics-primer-issues.md, not fixed)
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| dr-lal-pathlabs.html | 67 | 5148 | 20 | 9 | 12 | 0 | 2026-06-30 | ❌ banned | no main{min-width:0} (phone overflow) |
| vijaya-diagnostic.html | 68 | 6062 | 13 | 11 | 12 | 0 | 2026-06-30 | ✅ | no main{min-width:0} (phone overflow) |
| metropolis-healthcare.html | 74 | 6410 | 17 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| thyrocare.html | 71 | 6313 | 18 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| jeena-sikho-lifecare.html | 76 | 6854 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |

## Results status (24-Oct-2026)
Latest reported quarter for all five: Q1 FY27 (Jun-26). Thyrocare Q2 FY27 board + call 29-Oct-2026 (Nueclear e-voting closes the same day); others not announced (last year: Lal 31-Oct-2025, Vijaya 4-Nov-2025). Metropolis 5-Oct-2026 Q2 business update: revenue ~+15%.

## Publish entry
{"key":"Healthcare || Healthcare Service Provider","name":"Diagnostics & Wellness Services","slug":"diagnostics","accent":"#D6336C","noun":"lab chains","hook":"A ₹1 lakh crore market, 6% listed: how India's lab chains turn a fragmented market of 1.3 lakh labs into 30–40% margins — revenue per patient vs per test, hub-and-spoke leverage, radiology economics, the full-body-checkup price war, PharmEasy's Thyrocare sell-down and Jeena Sikho's Ayurveda outlier.","tags":["₹40 vs ₹575 a test","Radiology economics","Wellness price war","M&A and owners"]}
