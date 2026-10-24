done 2026-10-24T10:14:32Z · branch claude/ss-telecom-operators · report subsectors/telecom-operators.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 68.6 KB; 35/40 figures verified from primary sources — the other 5 are global peer EV/EBITDA (stockanalysis aggregator), satcom spectrum charge 4–5% (press; no gazette/PIB text yet), Jio IPO subscription 22.19× (press), the no-tariff-hike-since-Jul-2024 check (press search) and Airtel's ~5-Nov Q2 board date (tentative); dossier total 202 KB)

## Checks (run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 23013 prose words · 30596 total words · 314 KB`
- Audit totals (tier B): prose 23,013 (target 14,000; benchmark 19,815) · 22 sections · 4 deep dives · KPI masterclass 4,537 prose words / 19 h3 · 65 chart blocks (49 bars, 8 stacked share bars, 4 positioning maps, 2 flows, 2 timelines, 1 heat map) · 20 tables · 28 "In plain terms" callouts · 5 profile cards (153–174 words after lengthening the TCOM card from 149) · TOC 22/22 · banned phrases 0 · "honest" 0 · stat strip ₹-only · no CONTINUE marker.
- Render check: RENDER PASSED (scrollW 1024/375; issues []; rotatedOps 0; h1lines 3 at 1024, 4 at 375), using the pre-installed Playwright/Chromium.
- peersum: 0 mismatches on the 4 rows it checks.
- Spot-checks:
  - Stat strip, the peer table and its notes, and the Vodafone Idea and Hexacom cards. The Hexacom card's ROCE label now says "(company)": 21.9% on the company basis vs 21.4% screener in the peer table.
  - Circle-anatomy P&L arithmetic: 10,000 → EBITDA 5,500 → EBITDAaL 4,850 → EBIT 2,550 → PAT 1,575; FCF 1,975; ROCE 21.3% ✓.
  - ARPU map y-coordinates are linear in ARPU (₹264/259/216/195 → 86/104/255/328) ✓.
  - ₹10-ARPU example: ₹360 Cr revenue → ~₹246 Cr PAT, +16% ✓.

## Sections (deep dives marked)
00 One-page view · 01 How a telco earns (value-chain flow) · 02 Size: ₹3.35 lakh crore of AGR · 03 What still grows · 04 Where ₹100 goes · 05 The 84.6% market · 06 Five business models · 07 The state in every line (AGR, spectrum, Telecom Act) · 08 Thirty years, six shocks · 09 **[Deep dive]** ARPU without a hike, and Jio as the new price anchor · 10 **[Deep dive]** Reading a telco: the KPI masterclass · 11 **[Deep dive]** Vodafone Idea and the state: from AGR shock to 49% owner · 12 **[Deep dive]** Airtel's machine: India, Africa, towers, Hexacom and the cash turn · 13 The enterprise lane: TCOM and TTML · 14 Peer table · 15 Who is winning (maps + heat map) · 16 Five company profiles · 17 Valuation and the global lens · 18 Technology and disruption (5G, FWA, satellites, AI) · 19 Bull versus bear · 20 What to watch (thresholds + calendar) · 21 Glossary · sources footer

## h1
Indian telecom operators: <em>three players, one state, no hike</em>

## Forces
1. A market of three private players: Jio + Bharti hold 84.6% of access AGR (TRAI, Q1 FY27), and Vi survives with the state as its 49% owner.
2. ARPU keeps rising on mix without a tariff hike (none since Jul-2024). Airtel argues for tiered data pricing, and the Jio IPO becomes the new valuation anchor.
3. The capex roll-off turns into free cash flow (Airtel FCF ₹76,683 Cr in FY26). Homes/FWA, 5G and Nxtra data centres are the new claims on that cash.
4. The government is creditor and shareholder: AGR (Vi's dues reassessed to ₹64,046 Cr), spectrum dues, Vi's 49% stake, TTML's AGR instalments.
5. The enterprise archetype (TCOM, TTML) and the new fronts: satcom, data centres, Africa.

## Peer combined rows (as printed; FY26 ₹ Cr; PAT = screener reported incl. minority; net debt = screener borrowings − investments, Mar-26; m-cap 23-Oct-2026)

| Row | Revenue | YoY | OP | OPM | PAT | Net debt | M-cap | P/E | EV/OP |
|---|---|---|---|---|---|---|---|---|---|
| All five members (double-counts Hexacom) | 2,91,163 | +16.7% | 1,45,702 | 50.0% | 70,890 | 4,05,236 | 14,40,480 | 20.3× n/m | 12.7× |
| All members ex-Hexacom | 2,81,809 | +16.9% | 1,40,812 | 50.0% | 69,157 | 3,99,730 | 13,58,585 | 19.6× n/m | 12.5× |
| Mobile operators: Airtel + Vi | 2,55,846 | +18.1% | 1,35,373 | 52.9% | 68,375 | 3,68,932 | 13,04,054 | 19.1× n/m | 12.4× |
| Members ex-Vodafone Idea | 2,46,290 | +19.6% | 1,26,843 | 51.5% | 36,338 | 2,12,815 | 13,17,402 | 36.3× | 12.1× |
| Members ex-Airtel | 80,190 | +4.8% | 29,188 | 36.4% | 37,067 | 2,28,725 | 2,59,504 | 7.0× n/m | 16.7× |
| Tata group: TCOM + TTML | 25,963 | +6.3% | 5,439 | 20.9% | 782 | 30,798 | 54,531 | 69.7× | 15.7× |

**Hand-check.** I re-added every column of every row, and all of them match. That includes the dossier's §3.2 FY26 and Q1 FY27 aggregates and the ₹4,27,195 Cr borrowings / ₹21,959 Cr investments.

- **Mobile operators: Airtel + Vi**
  - Sums: 2,10,973 + 44,873; 1,16,514 + 18,859; 33,823 + 34,552; 1,76,511 + 1,92,421; 11,80,976 + 1,23,078 ✓
  - P/E 13,04,054 ÷ 68,375 = 19.1 ✓
  - EV/OP (13,04,054 + 3,68,932) ÷ 1,35,373 = 12.4 ✓
- **Tata group: TCOM + TTML**
  - Sums: 24,803 + 1,160; 4,822 + 617; 997 − 215; 9,952 + 20,846; 47,165 + 7,366 ✓
  - P/E 54,531 ÷ 782 = 69.7 ✓
  - EV/OP (54,531 + 30,798) ÷ 5,439 = 15.7 ✓

Ratios are ratios of sums throughout. The peer-table names are short (Airtel, Hexacom, and so on) because peersum's ex-row matcher keys on the first word, and both Bharti companies start with "Bharti". The full names are on the cards.

## Labelled illustrative / indicative
- **Revenue and margin examples:** the three "where ₹100 goes" archetypes; the Airtel-vs-Vi below-EBITDA comparison; the ₹10-ARPU worked example; the one-circle anatomy P&L and its chart; scorecard bands; heat-map scores.
- **Tariffs and ARPU:** tariff-hike scenarios (10/15/20%); the ₹300 ARPU gap.
- **Vodafone Idea:** FY27 cash waterfall; EV composition; ~15.7× EV/EBITDA; ~167 mn active-subscriber estimate.
- **Market structure:** revenue HHI (~3,708 → ~3,731); cumulative auction spend by operator; enterprise market of ₹45–55k Cr.
- **Valuation:**
  - Jio's ~14–15× FY26 EV/EBITDA.
  - EV/EBITDA derived at 23-Oct: Airtel ~10.0×, Hexacom ~15.7×, TCOM ~10.3×.
  - Global peer multiples (aggregator).
  - Airtel ex-Vi P/E on attributable profit (~44×).
- **Policy and company readings:** satcom charge of 4–5%; the reading of TTML's RPS remeasurement; TCOM EBITDA bridge; Airtel spectrum amortisation example; value of a licence-fee cut.

## Not sourced / not reconciled
- **Airtel FY26 net-debt fall:** the MD&A says ₹30,031 Cr, but the IR-pack series (₹2,03,838 → ₹1,64,789 Cr incl. leases) implies ₹39,049 Cr. The report quotes the series and notes the gap.
- **Vi FY26 EBITDA has three bases:** company ₹19,003 Cr, screener ₹18,859 Cr, AR ₹19,544 Cr. The text uses the company figure and the peer table uses screener.
- **Vi figures not disclosed or not checked:**
  - The AGR present value of ~₹24,880 Cr is from the primer only.
  - The residual FY27–29 spectrum instalments are not itemised.
  - Vi's churn % and postpaid base are not disclosed.
- **Jio churn:** not verified.
- **Satcom spectrum charge:** no primary text (DCC decision 3-Sep-2026; Cabinet approval pending).
- **TTML:** the new RPS terms are unpublished.
- **Events after this run:** Jio allotment and listing (~26/28-Oct). Vi and Hexacom Q2 FY27 board dates are not announced.
- **Not extracted or not attempted:** Airtel's consolidated contingent-liability total; TRAI annual AGR for FY22–FY24; HS 8517 trade data.

## Primer audit (pre-existing; logged in telecom-operators-primer-issues.md, not fixed)
| Primer | KB | Words | Bars | Plain | Hard checks | Notes |
|---|---|---|---|---|---|---|
| bharti-airtel.html | 66 | 5066 | 21 | 10 | ❌ banned, honest>1 | no main{min-width:0} |
| vodafone-idea.html | 67 | 5678 | 16 | 8 | ❌ honest>1 | no main{min-width:0} |
| bharti-hexacom.html | 67 | 5237 | 19 | 10 | ❌ banned | no main{min-width:0} |
| tata-communications.html | 66 | 4906 | 13 | 9 | ❌ banned | no main{min-width:0} |
| tata-teleservices-maharashtra.html | 69 | 6129 | 12 | 11 | ✅ | no main{min-width:0} |

The content issues are in `_cloud/telecom-operators-primer-issues.md`:
- Hexacom's NE circle wrongly includes Assam.
- Airtel's PAT is mislabelled.
- TTML's interest and revenue figures are wrong.
- Valuations are stale.
- The primers expect a 2026 tariff hike that has not happened.
- The Jio IPO is missing.

## Publish entry
{"key":"Telecom || Telecom - Cellular & Fixed line services","name":"Telecom Operators","slug":"telecom-operators","accent":"#E03131","noun":"telecom operators","hook":"Three players, one state, no hike: how Jio and Airtel came to hold 84.6% of access revenue, why ARPU keeps rising 27 months after the last tariff hike, how the government became Vodafone Idea's 49% owner and AGR creditor, and what Airtel's cash turn and the Jio IPO mean for valuations.","tags":["KPI masterclass","Vodafone Idea and the state","Airtel's machine","ARPU and the Jio IPO"]}
