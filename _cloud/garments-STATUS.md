done 2026-10-22T03:52:31Z · branch claude/ss-garments · report subsectors/garments.html (resume of a dead run; unpublished: publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 83 KB; 36/40 figures verified from primary sources)

## Checks (all re-run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 22814 prose words · 31464 total words · 318 KB`
- Audit totals: 22,814 prose words; 24 sections (p0–p23); 4 deep dives; KPI masterclass 4,438 prose words and 17 h3; 65 chart blocks; 4 positioning maps; 17 tables (all wrapped); 46 "In plain terms" callouts; 5 profile cards. TOC links 24/24; 5 primer links, none missing; tags balanced; banned phrases 0; "honest" 0; stat strip ₹-only; no CONTINUE marker; 23 × "illustrative", 46 × "indicative". No thin sections. p17 (profiles) and p21 (bull/bear) have no chart or table, by design.
- peersum: All five, Ex-Page and Ex-Kitex rows ✓ on revenue, OP, attributable PAT, m-cap and net debt incl. leases.
- Render: **RENDER PASSED.** At 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3. At 375: scrollW 375, issues [], rotatedOps 0. I ran a scratch copy of rcheck.mjs whose only change is executablePath pointing at the pre-installed /opt/pw-browsers chromium_headless_shell-1194, because Playwright 1.47's bundled Chromium is not downloadable here.
- Spot checks:
  - Cover and stat strip: Page's m-cap share 38,964 ÷ 60,869 = 64.0% ✓.
  - Peer table ratios per company:
    - Page EV/OP: (38,964 − 155) ÷ 1,153 = 33.7× ✓
    - Pearl: P/E 40.4×, EV/OP 23.7× ✓
    - Gokaldas: P/E 50.1×, EV/OP 16.4× ✓
    - RLL: P/E 73.2×, EV/OP 6.7× ✓
    - Realisation per piece: Page 5,247 ÷ 228.4 = ₹230; Pearl 5,025 ÷ 78.1 = ₹643; Gokaldas 3,988 ÷ 57 = ₹700 ✓
  - Page and Pearl profile cards are consistent with Part 4.
  - Anatomy P&L (1,000-machine factory):
    - At 80% utilisation: 182.0 − 87.4 − 12.7 − 7.3 − 40.0 − 10.9 = 23.7 EBITDA; PBT 13.0; PAT 9.7; ROCE 18.7 ÷ 87 = 21.5% ✓
    - At 60% utilisation: EBITDA 5.0 and PBT −5.0 ✓
  - Momentum map (Q1 growth vs OPM): every dot lies within ~3 px of its data value; quadrant labels sit at the plot corners ✓.

## Sections (DD = deep dive)
00 The one-page view: an export trade and a brand trade under one name · 01 Boll to closet (value chain) · 02 Ten flat years (size and growth) · 03 Who buys (demand) · **04 The tariff roller-coaster (DD)** · **05 Bangladesh, Vietnam and the China+1 map (DD)** · 06 The trade-deal dividend (UK CETA, EU FTA, AGOA) · 07 Cotton, wool, polyester and freight · **08 Innerwear and the domestic engine (DD)** · 09 Five business models · 10 A fragmented industry with unlisted giants and foreign owners · 11 Policy at home: GST, labour codes, export refunds and the PLI that paid almost nothing · 12 Forty years of cycles · **13 Reading a garment maker: the KPI masterclass (DD, data-kpi)** · 14 The peer table: five companies on one basis · 15 Q1 FY27: the exporters sprint, the brands stall · 16 Who is winning (3 maps + heat map) · 17 Five company profiles · 18 Why the market pays 51× for one and 0.35× book for another · 19 The global lens · 20 Technology and disruption · 21 Bull vs bear · 22 What to watch (RLL board 28-Oct-2026; Page/Pearl/Gokaldas/Kitex dates not announced) · 23 Glossary

**h1:** Garments &amp; apparels: <em>two industries, one tariff-shaped label</em>

## Forces
1. The US tariff roller-coaster: 50% → Russia penalty removed 7-Feb-2026 → IEEPA struck down 20-Feb-2026 → Sec 122 10% → Sec 301 10% on MFN.
2. The competing-geography map: Bangladesh, Vietnam, China+1, Africa/AGOA, and Pearl's multi-country model.
3. Trade deals: UK CETA in force, the EU FTA (signing reported for 16-Dec-2026), and AGOA extended to 2028.
4. Cotton to closet: CAI crop of 339 lakh bales and record imports; wool and polyester after the West Asia oil shock; freight (WCI $4,485).
5. The branded domestic engine: Page/Jockey innerwear and RLL suiting and apparel.

## Peer combined rows (as printed; FY26, ₹ Cr; m-cap 21-Oct-2026; PAT attributable reported; net debt incl. leases)
| Row | Rev | YoY | OP | OPM | PAT | M-cap | P/E | Net debt | EV/OP |
|---|---|---|---|---|---|---|---|---|---|
| All five | 21,815 | +6.6% | 2,702 | 12.4% | 1,194 | 60,869 | 51.0× | 3,281 | 23.7× |
| Exporters (Pearl, Gokaldas, Kitex) | 9,680 | +3.5% | 871 | 9.0% | 384 | 18,538 | 48.3× | 2,287 | 23.9× |
| Scaled exporters (Pearl, Gokaldas) | 9,013 | +7.7% | 841 | 9.3% | 378 | 16,250 | 43.0× | 1,088 | 20.6× |
| Domestic brands (Page, RLL) | 12,135 | +9.2% | 1,831 | 15.1% | 810 | 42,331 | 52.3× | 994 | 23.7× |
| Ex-Page | 16,568 | +6.7% | 1,549 | 9.3% | 430 | 21,905 | 50.9× | 3,436 | 16.4× |
| Ex-Kitex | 21,148 | +8.6% | 2,672 | 12.6% | 1,188 | 58,581 | 49.3× | 2,082 | 22.7× |

**Hand-check:** I re-added every column of every subgroup from the company rows with a script. All of them match, and FY25 revenue sums match the YoY figures. Ratios are ratios of sums. Examples:
- Exporters: rev 5,025 + 3,988 + 667 = 9,680; PAT 278 + 100 + 6 = 384; ND 239 + 849 + 1,199 = 2,287; EV/OP (18,538 + 2,287) ÷ 871 = 23.9×.
- Scaled exporters: 5,025 + 3,988 = 9,013; ND 1,088; EV/OP 17,338 ÷ 841 = 20.6×.
- Domestic brands: 5,247 + 6,888 = 12,135; ND −155 + 1,149 = 994; EV/OP 43,325 ÷ 1,831 = 23.7×.

**Basis:**
- One PAT basis throughout (attributable reported). The pre-exceptional column was dropped because company and screener exceptionals conflict. Exceptionals are given in the peer note instead: Page −35 (Labour Codes), RLL −128.5, Kitex +17.5, Gokaldas 6.
- Part 3's `Net debt` used screener's ₹907 Cr for Pearl, which misses ₹704 Cr of cash. It is restated to the company AR figure of ₹239 Cr incl. leases; see _cloud/garments-aggregates.md.

## Labelled ILLUSTRATIVE / INDICATIVE
- The $30-shirt value split, landed cost per piece, "where ₹100 goes" archetypes, and the anatomy-of-one-factory P&L.
- Cycle and FX sensitivities, tariff discount per piece, and Pearl's FY30 EV/EBITDA.
- Utilisation computed from pieces ÷ capacity (Gokaldas ~62%, Pearl Q1 ~77%), and Page's realisation per piece.
- Group ROCE 9.9% (18.6% ex-RLL) and net debt incl. leases (Page lease estimate ~₹265 Cr; Kitex cash undisclosed).
- RLL's ~9% group US share, India's Jan–Aug US import value, members' market shares, and the innerwear and domestic-apparel market sizes.
- KPI benchmarks and Page channel arithmetic.
- Pre-2026 cotton prices, FY15–FY17 export values, IEEPA-era competitor rates and global peer financials, all marked approximate.

## Figures not sourced or reconciled
- Page's lease liability (estimated) and channel mix.
- Kitex's cash balance.
- Innerwear market size (no good single source).
- Bangladesh LDC deferral decision; any 2026 Bangladesh wage award.
- OTEXA India share for 2015–2022.
- Apr–Aug 2026 monthly export values in US$.
- FY15–FY17 export values.
- Cotton import duty after 1-Oct-2026.
- Page's Q2 board date.
- Pearl employee count.
- RLL FY26 segment EBITDA on its new five-segment basis.
- Gokaldas's Q1 FY26 India ASP (back-calculated).
- 4 of the 40 verification figures are from secondary pages only: H1 FY27 exports, OTEXA Jan–Aug, AGOA, MSP.

## Primer audit (primer-audit.mjs)
| Primer | Words | Refreshed | Hard checks | Notes |
|---|---|---|---|---|
| page-industries.html | 5581 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |
| pearl-global.html | 6147 | 2026-07-27 | ✅ | no main{min-width:0} |
| gokaldas-exports.html | 5983 | 2026-07-27 | ✅ | no main{min-width:0} |
| raymond-lifestyle.html | 6225 | 2026-07-27 | ✅ | no main{min-width:0} |
| kitex-garments.html | 6205 | 2026-07-27 | ✅ | no main{min-width:0} |

All of these are logged in _cloud/garments-primer-issues.md, which also holds the Part 1–4 primer corrections (Gokaldas North America 77.9%; Kitex US 63% and the 9.22 cr-share demerger; Pearl net debt ₹239 Cr; Page royalty 4.84%; RLL exceptional ₹128.5 Cr; and others). None were fixed.

## Publish entry
{"key":"Textile || Garments & Apparels","name":"Garments & Apparels","slug":"garments","accent":"#931A93","noun":"garment makers and apparel brands","hook":"Two industries, one tariff-shaped label: why India's garment exporters (Pearl, Gokaldas, Kitex) ride US tariff swings, Bangladesh and FTAs at 9% margins, while one innerwear licence (Page/Jockey) is two-thirds of the profit and value, and what pieces, price per piece and utilisation reveal.","tags":["US tariff roller-coaster","Bangladesh, Vietnam and China+1","Innerwear and the branded engine","KPI masterclass"]}
