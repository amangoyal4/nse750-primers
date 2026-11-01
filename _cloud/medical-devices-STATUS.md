done 2026-11-01T16:13:11Z · branch claude/ss-medical-devices · report subsectors/medical-devices.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 79 KB; 35/40 figures verified from primary sources — 3 rest on secondary reports of a primary statement (#25, #31, #33), 2 are search-only (#30; Terumo within #40); dossier total 206 KB incl. Part 5 orchestrator re-check)

## Medical Devices & Consumables (Healthcare || Medical Equipment & Supplies): tier C, 2 companies

**Gate:** GATE PASSED: 27/27 checks · 22465 prose words · 31517 total words · 317 KB

**Audit totals (vs hospitals.html):**
- Prose 22,465 words (target 12,000; benchmark 19,815); 24 sections; 5 deep dives.
- KPI masterclass: 4,992 words, 20 h3.
- 64 chart blocks: 43 bar, 9 stacked, 3 maps, 7 flows, 2 timelines, 1 heat map.
- 22 tables; 28 "In plain terms" callouts; 2 profile cards (176 and 184 words).
- Integrity: TOC 24/24 resolve; tags balanced; no banned phrases; "honest" 0; stat strip ₹-only; no CONTINUE marker.
- Info: p14 (profiles) and p21 (bull/bear) have no chart or table, by design.

**Render check:** RENDER PASSED (preinstalled Playwright/Chromium). scrollW 1024/1024 and 375/375; issues []; rotatedOps 0; h1lines 4 at 1024 (5 at 375).

**Dossier:**
- `_cloud/medical-devices-industry.md`: 206 KB (Parts 1–3 127 KB + Part 4 79 KB + Part 5 re-check).
- Primer issues: `_cloud/medical-devices-primer-issues.md`.

### Sections (DD = deep dive)
00 One-page view · 01 Plastic, latex and the approval stack · 02 Size and growth · 03 Imports, China and the policy push · 04 Price caps and licences · 05 Where ₹100 goes: people-heavy plastic, material-heavy latex · 06 Who else makes it: unlisted giants, multinationals and a state condom maker · 07 Five business models · 08 China+1, tariffs and the rupee: the boom went to syringes, not cannulae · 09 Condoms and the donor shock · 10 Three decades, six shocks (timeline) · 11 Reading a device maker: the KPI masterclass (DD, data-kpi) · 12 The peer table · 13 Who is winning (3 maps + heat map) · 14 Two company profiles · 15 Polymed 2.0 to 3.0 and the ROCE invoice (DD) · 16 Same latex, opposite economics: Cupid vs Karex (DD) · 17 A condom company becomes a consumer company (DD) · 18 Dialysis: the razor, the blade and the Chinese dialyzer (DD) · 19 Capital, valuation and the global lens · 20 Technology and disruption · 21 Bull vs bear · 22 What to watch · 23 Glossary

**h1:** Medical devices &amp; consumables: <em>approved plastic, exported latex, a valuation chasm</em>

### Forces
1. **Import dependence and the policy push.** Core-device imports were US$5.84 bn against US$2.41 bn of exports in FY26 (TradeStat), with China at ~17% (~20% with HK). PLI outlay ₹3,420 Cr; dialyzer anti-dumping case.
2. **Price controls and regulation.** NPPA stent ceilings: BMS ₹10,762.15 and DES ₹39,186.03 from 1-Apr-2026. Knee cap runs to 15-Nov-2026. Device trade-margin caps date from 2021; the 2019 cap covered 42 anti-cancer drugs. MDR 2017 licensing, EU MDR deadlines, US FDA 510(k).
3. **Exports, China+1, tariffs and the rupee.** India's syringe exports to the US rose 6×, but Polymed's cannula heading (9018.39) was flat. India pays 10% Section 301 since 24-Jul-2026.
4. **The condom donor shock and its V-shape.** India condom exports fell 27% in FY25 and rose 33% in FY26. Karex shrank; Cupid's South Africa tender is about a third of its revenue.
5. **Capital allocation and valuation.** Polymed's ROCE fell from ~24% to ~12% (cash, goodwill, CWIP). Cupid has ~₹440 Cr committed outside its core business and is 75% of combined m-cap at 318× P/E.

### Peer combined row (as printed) and hand-check
Columns: revenue · growth · OP · OPM · PAT · Q1 FY27 rev · Q1 OP · Q1 PAT · ROCE · net debt/(cash) · m-cap · P/E · EV/EBITDA · P/B · export share · gross margin.

All members combined | 2,233 | +20.6% | 565 | 25.3% | 429 | 680 | 185 | 129 | — | (636) | 58,333 | 136×ᵃ | ~102×ᵉ | — | 67% | 66.6%

- **peersum:** every summed column ✓ (revenue, OP, PAT, Q1 rev/OP/PAT, net cash, m-cap).
- **Hand-check of sums:**
  - Revenue 1,875 + 358 = 2,233; growth 2,233 ÷ (1,669 + 183) − 1 = 20.6%.
  - OP 446 + 119 = 565; OPM 25.3%.
  - PAT 321 + 108 = 429 (reported consolidated PAT, one basis).
  - Q1 FY27: 525 + 155 = 680; 125 + 60 = 185; 85 + 44 = 129.
  - Net cash (501) + (135) = (636) on the company basis.
  - M-cap 14,692 + 43,641 = 58,333.
- **Hand-check of ratios** (ratios of sums):
  - P/E 58,333 ÷ 429 = 136×.
  - EV/EBITDA (58,333 − 636 + NCI 43) ÷ 565 ≈ 102×.
  - Export share (1,293 + 208) ÷ 2,233 = 67%.
  - Gross margin (1,875 × 68.2% + 358 × 58.6%) ÷ 2,233 = 66.6%.
- No subgroup rows (2 companies).
- **Spot checks:**
  - Cover/stat strip ✓. I changed the imports cell from "~₹55,500 Cr at today's ₹94.9" to "~₹51,400 Cr at the ~₹88 FY26 average rate", because it is a flow figure.
  - Peer basis note ✓; both cards ✓.
  - KPI anatomy plant P&L re-added for years 1, 2 and 4 (EBITDA −3.8 / 25.1 / 65.5; CE 261.9; ROCE 19.3%) ✓.
  - Map 1 (revenue log vs margin) coordinates recomputed for Cupid and Polymed ✓.

### Labelled ILLUSTRATIVE / INDICATIVE
- **Polymed:** per-unit worked example; FY27 profit bridge (~₹370 Cr); the anatomy-of-a-plant P&L and J-curve chart.
- **Rupee sensitivity:** ~₹12 Cr and ~₹2.4 Cr per ₹1 move.
- **Cupid:** unit economics and volumes (~₹3.5/piece, ~0.5 bn pieces, ~0.56 bn capacity); South Africa contribution (65–75% of FY26 EBITDA); Sep-26 net cash (near zero); Baazar Style amount paid (~₹194 Cr); Palava capex (₹90–130 Cr).
- **Industry and policy:** PLI FY26 disbursement (~₹133 Cr); members' shares of India's exports (Polymed ~15–25% of HS 9018.39; Cupid ~20–25% of condom exports); dialysis pull-through (₹35–50 Cr/yr).
- **Valuation exercises:** the FY31 required-profit exercise (12% return; 30× and 40× exits).
- **Ranges and projections:** benchmark ranges, watch thresholds and 2030 market projections.
- **Global peers:** multiples (BD ~12–14×), BD margin, global condom market size, Karex m-cap and all FX conversions of peer figures.
- **Product price ladder:** IV set, cannula and PICC prices; the complexity axis.
- **Imports in ₹:** the FY26 imports conversion in the stat strip (~₹88/$ average).

### Could not source / reconcile
- **Polymed cash conversion cycle:** three bases that don't reconcile: 140 days (management), 215 (presentation), 335 (screener). Flagged in the text.
- **Polymed FDA approvals:** the split of the 15 (Polymed 4 + Citieffe 10 + P1H 1; PendraCare's 8 are for an OEM) is the writer's reading of a slide.
- **Cupid, not disclosed:** FMCG margin and manufacturing location, volumes, the GII fund's manager, and why equity capital doubled in FY25.
- **Cupid cash:** Sep-26 cash is unknown until Q2.
- **Cupid South Africa:** the tender total (~1 bn male condoms) is snippet-only.
- **Unlisted and global peers:** HMD capacity, Healthium/KKR ownership, Karex m-cap, HLL/Meril/Translumina data.
- **Prices:** latex-60% price for Oct-2026; global condom market size.
- **Two figures from general knowledge:** India's ~18% share of world population, and the US Needlestick Act (2000).

**Results status:**
- Both members are at Q1 FY27 (Jun-26), reported 7-Aug-2026.
- Poly Medicure: Q2 FY27 board 5-Nov-2026; call 5-Nov 17:00 IST.
- Cupid: Q2 board not yet announced (last year 12-Nov; deadline 14-Nov). It pre-announced Q2 revenue above ₹200 Cr on 30-Sep and has held no earnings calls since Jan-2024.
- Refresh after the Q2 results.

### Primer-audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| poly-medicure.html | 64 | 5081 | 12 | 10 | 12 | 0 | 2026-06-30 | ✅ | no main{min-width:0} (phone overflow) |
| cupid.html | 67 | 5726 | 16 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |

No pre-existing hard fails. Content issues for both primers are in `_cloud/medical-devices-primer-issues.md`. Main points:
- **poly-medicure.html:** Medyneo is Brazilian; FY26 segments; m-cap; ROCE; Ezekiel amalgamation; NCLT purchase (Himalayan Mineral Waters).
- **cupid.html:** FY26 revenue is ₹357.71 Cr, not ₹379 Cr; the pledge claim is stale; promoter holding 47.69%; net cash ₹135.5 Cr; FMCG pivot, Baazar Style, GII and the SA JV are missing; board churn.

### Publish entry
{"key":"Healthcare || Medical Equipment & Supplies","name":"Medical Devices & Consumables","slug":"medical-devices","accent":"#2D78B4","noun":"medical-device and consumables makers","hook":"Approved plastic, exported latex, a valuation chasm: how India imports its machines but exports its tubes, why a cannula and a female condom both earn 58–73% gross margins, how price caps, licences, EU rules and US tariffs shape the field, and why the market pays 46× for Poly Medicure and 318× for Cupid.","tags":["Polymed 2.0 and the ROCE invoice","Condoms and the donor shock","Cupid's consumer pivot","Device KPI masterclass"]}
