done 2026-10-22T14:13:30Z · branch claude/ss-water-treatment · report subsectors/water-treatment.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 74 KB; 31/40 figures verified from primary sources — 32/40 [V] fetched this session; #7 JJM FY26 RE/FY27 BE rests on Part 1's fetched PRS page; #4 82.19% coverage, #8 Assocham arrears, #19 Yanbu $272m value and #22 Kuwait $372m are snippet-grade)

# Water Treatment — STATUS (runner B)

- Claimed 2026-10-22T12:39Z. Dossier `_cloud/water-treatment-industry.md` 196 KB (Parts 1–3: 122 KB; Part 4: 74 KB). The Phase 1 agent hit a usage limit at ~13:00Z and was resumed at 13:10Z.
- Primer issues: `_cloud/water-treatment-primer-issues.md` (first pass §3.4 + deep pass §4.6).
- Orchestrator re-added every Part 3 aggregate from the company rows: all match. The Supersedes do not touch the FY26 P&L or m-cap inputs.

## Gate
GATE PASSED: 27/27 checks · 23116 prose words · 31927 total words · 317 KB

## Audit
22 sections, 65 charts (46 bars, 8 stacked share bars, 3 positioning maps, 5 flows, 3 timelines; plus a heat map), 17 tables, 27 "In plain terms" callouts, 3 profile cards (179–189 words each). No thin sections, and no section without a chart or table. TOC 22/22 links resolve. Primer links: 3 of 3. Tags balanced. Banned phrases: none; "honest": 0. Stat strip is ₹-only and no CONTINUE marker is left. Labels: 14 × "illustrative", 53 × "indicative".

## Render check
RENDER PASSED: 1024px scrollW 1024, h1 3 lines; 375px scrollW 375; issues [], rotatedOps 0, no overflow culprits. Run with playwright 1.56.1 (NODE_PATH=/tmp/rc2/node_modules), because 1.47.2 cannot launch the preinstalled chromium-1194.

## Spot checks (orchestrator)
- **Cover and stat strip:** ₹8,005 Cr revenue FY26; ₹28,588 Cr order book Jun-26 (mixed bases); ₹19,171 Cr m-cap 22-Oct; ₹8.69 lakh Cr JJM 2.0; ₹965 Cr Wabag net cash Jun-26; ₹4,400 Cr Perur. The basis line names FY26, Q1 FY27 and the expected Q2 dates.
- **Peer note:** states one PAT basis, the net-cash basis (Ion and EIEL marked INDICATIVE), the order-book definitions, and that combined rows are sums with ratios of sums.
- **Cards:** Wabag and EIEL read correctly against the dossier.
- **KPI anatomy (₹500 Cr STP + 15-yr O&M):** every line re-added (EBITDA 30/45/75/3/45/120; PAT 16/25/41/2.3/34/75).
- **Growth-vs-margin map:** all six dots' coordinates recomputed from the data, plus the midlines at 15%/15%. All correct.

## Sections (DD = deep dive)
00 The one-page view: three companies, one question — who pays? · 01 How a litre becomes a profit · 02 Size: follow the budgets · 03 The sewage gap · 04 Who pays, and when: JJM, AMRUT, NMCG HAM and the payment-risk spectrum (DD) · 05 Desalination and the Gulf (DD) · 06 Industrial water, ZLD and the chemistry business · 07 Inputs, the rupee and the civil pass-through · 08 Who else builds the plants · 09 Seven business models · 10 The rulebook · 11 A century in twenty events · 12 KPI masterclass (DD, data-kpi, 5,272 words, 18 h3) · 13 Working capital is the real P&L (DD) · 14 Peer table · 15 Who is winning (3 maps and the heat map) · 16 Company profiles · 17 Valuation and the global lens · 18 Technology and disruption · 19 Bull vs bear · 20 What to watch · 21 Glossary

## h1
Indian water treatment: <em>the payer matters more than the plant</em>

## Forces
1. Who pays, and when (JJM's FY26 funding stop and JJM 2.0, AMRUT 2.0's 34% release, state arrears, against multilateral and Gulf sovereign clients).
2. Desalination and the Gulf (Perur, Yanbu, Kuwait; Middle East 35–40% of Wabag's backlog; the 2026 war's strikes on desal plants).
3. The sewage gap and the turn to annuity income (72,368 MLD generated vs ~20,236 treated; NMCG HAM; O&M backlogs).
4. Industrial water, ZLD and Ion's chemistry business (Roha; the Q1 FY27 margin collapse).
5. Working capital is the real P&L (unbilled revenue, retention, CFO vs PAT; repo at 5.50%).

## Peer combined rows (as printed by peersum)
- All members | 8,005 | +12.8% | 969 | 12.1% | 701 | — | +794 | 19,171 | 27.3× | 28.1× | 19.0× | 28,588 | 3.6× | — | 1,946 | 138
- Ex-Ion Exchange (Wabag + EIEL) | 5,090 | +16.7% | 755 | 14.8% | 558 | — | +929 | 14,063 | 25.2× | 24.0× | 17.4× | 26,115 | 5.1× | — | 1,246 | 135
- Ex-Va Tech Wabag (Ion + EIEL) | 4,061 | +6.8% | 491 | 12.1% | 331 | — | −156 | 8,098 | 24.5× | 28.0× | 16.8× | 9,194 | 2.3× | — | 1,059 | 48

peersum: every summed column ✓ in all three rows.

**Hand check:**
- **Ex-Ion:** 3,944 + 1,146 = 5,090; 478 + 277 = 755 (14.8%); 370 + 188 = 558; 950 − 21 = 929; 11,073 + 2,990 = 14,063; 19,394 + 6,721 = 26,115; TTM 394 + 191 = 585 → 24.0×; EV 13,134 ÷ 755 = 17.4×; FY25 4,360 → +16.7%.
- **Ex-Wabag:** 2,915 + 1,146 = 4,061; 214 + 277 = 491 (12.1%); 143 + 188 = 331; −135 − 21 = −156; 5,108 + 2,990 = 8,098; 2,473 + 6,721 = 9,194; TTM 98 + 191 = 289 → 28.0×; EV 8,254 ÷ 491 = 16.8×; FY25 3,803 → +6.8%.
- **All members:** EV 18,377 ÷ 969 = 19.0×.

All ratios are ratios of sums.

## Labelled ILLUSTRATIVE / INDICATIVE
- **Estimates and arithmetic:**
  - Ion and EIEL net debt; burn rates; implied book-to-bill (EIEL ~5.2×, Ion ~1.0×).
  - The "where ₹100 goes" splits; the ₹1.5–2.5 lakh Cr domestic spend pool; members' ~₹5,000 Cr of Indian water revenue.
  - The execution-only backlog ~₹19,845 Cr; all-in receivable days; 5-year cash conversion; group receivable-type assets ~₹5,350 Cr.
  - Ankleshwar capacity ~11,000 m³; Roha capex ₹350–450 Cr; the chemicals margin-bridge residual.
  - Repo-hike cost examples; valuation arithmetic; scorecard and heat-map ratings; watch-list thresholds.
- **Worked examples:** the Wabag FY26 equation; the HAM Lohta example (interest at an assumed 9%); the Kuwait design-build example; the ₹500 Cr STP anatomy.
- **Single-source or snippet figures:** 82.19% tap coverage; Assocham's 10–12-month arrears; Kuwait KD114.28m ≈ $372m (JV value); Gulf strike dates; global desal capacity; Kurita/Ecolab figures; NGT limits; retention of 5–10%.

## Not sourced or not reconciled
- **Wabag:**
  - Its shares of the Kuwait (HEISCO) and Perur (Metito) JVs are undisclosed.
  - Unbilled revenue was not separately available.
  - Mar-24 and Mar-25 net cash are chart-reads.
- **HAM:** the NMCG interest formula is unverified (the NHAI bank-rate + 3% is flagged as not transferable).
- **Ion:**
  - FY26 Industrial Products and Consumer EBIT on the new five-segment basis are chart-reads.
  - The Roha capex figure has not been found.
- **EIEL:**
  - CBG capacity is undisclosed.
  - The FY25 order book (~₹2,000 Cr) conflicts with management's "~₹1,200 Cr executable"; both are shown with bases.
- **Market data:**
  - No rating-agency estimate of India's water-treatment market size; the RHP industry report is a paid Marketysers study.
  - No CPCB inventory newer than the 2020-21 data.
- **Policy:**
  - Any GST 2.0 change for government water works is unverified (already 18% since 2022).
  - JJM actual spend for FY20–FY23 is not captured.
- **Global peers:** valuation multiples are not printed. Organo, Acciona, IDE and Metito financials are missing.
- **Basis changes:**
  - CFO ÷ EBITDA was recomputed as screener CFO ÷ screener OP, with the basis stated.
  - Wabag's opening backlog is ₹12,484 Cr on the audited ex-framework basis vs ₹13,667 Cr reported; both are explained.

## Primer audit (primer-audit.mjs)
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| va-tech-wabag.html | 70 | 6233 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| ion-exchange.html | 67 | 5678 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| enviro-infra-engineers.html | 68 | 5930 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |

All three pass the hard checks. The missing main{min-width:0} is a pre-existing note and is logged here, not fixed. The content issues are in water-treatment-primer-issues.md: stale m-caps, Yanbu value, Ion's segments, EIEL's identity and HQ, among others.

## Publish entry
{"key":"Infrastructure || Water Supply & Management","name":"Water Treatment","slug":"water-treatment","accent":"#1A9363","noun":"water-treatment companies","hook":"The payer matters more than the plant: how Va Tech Wabag, Ion Exchange and Enviro Infra Engineers turn desalination, sewage, industrial water and resins into profit, why JJM's funding stop, Gulf desal and HAM annuities decide their cash, and how to read order books, burn rates and working capital.","tags":["Who pays: JJM, AMRUT & HAM","Desalination & the Gulf","Working capital is the real P&L","KPI masterclass"]}
