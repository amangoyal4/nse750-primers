done 2026-10-22T16:14:25Z · branch claude/ss-integrated-power · report subsectors/integrated-power.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 68 KB; 38/40 figures verified from primary sources — 39/40 fetched this session; #31 global P/Es are aggregator data (companiesmarketcap), and Tata's ₹15,178 Cr regulated equity is carried from Part 1's fetched Q1 deck without re-fetch)

## Pipeline
- Gate at claim: 1 run in progress (tv-broadcasting); no dead, failed or upgrade items. Network pre-check: screener.in 200 by curl and WebFetch.
- Phase 1 dossier `_cloud/integrated-power-industry.md` (Parts 1–3: 128 KB) → Phase 1c Part 4 (68 KB) → orchestrator aggregate re-check appended. Total dossier ≈ 198 KB (tier C floor 150 KB).
- Orchestrator arithmetic fixes vs Part 3.2: owners' PAT ex-Tata 3,958 → 3,959; ex-CESC 6,165 → 6,164; ex-Torrent 5,290 → 5,289 (rounding; Tata owners' PAT now the annual-report ₹3,747 Cr).
- Primer issues: `_cloud/integrated-power-primer-issues.md` (Phase 1 §3.4 + Part 4 §4.5 + primer-audit).

## Gate (orchestrator re-run, last line)
GATE PASSED: 27/27 checks · 20813 prose words · 29896 total words · 323 KB

## Audit totals
Prose 20,813 (benchmark 19,815) · 24 sections · 5 deep dives · KPI masterclass 4,471 prose words / 20 h3 · 65 chart blocks (49 bars, 9 stacked, 4 maps, 2 flows, 1 timeline, 1 heat map) · 15 tables · 27 "In plain terms" · 3 cards (159–169 words) · TOC 24/24 · banned phrases 0 · "honest" 0 · stat strip ₹-only · no CONTINUE marker · 32 "illustrative" + 30 "indicative" labels. Sections with no chart/table: p18 (cards), p21 (bull/bear).

## Render check
RENDER PASSED (scrollW 1024/375; issues []; rotatedOps 0; h1lines 3). Run with Playwright 1.56.1 (matches the pre-installed Chromium 1194; 1.47.2's bundled Chromium could not launch here).

## Sections (DD = deep dive)
00 The one-page view: three monopolies on the wires, one bet on the build · 01 How an integrated utility earns: from coal pile to meter · 02 Size: a ₹10 lakh crore money pool, mostly in state hands · 03 Demand: weather beats GDP · 04 The wires compound: regulated equity × allowed return · 05 Where ₹100 of tariff goes · 06 Private islands in a state grid · 07 Seven business models inside three companies · 08 Moats of 2–6% (DD) · 09 The Odisha experiment (DD) · 10 Regulatory assets and tariff lag · 11 The fuel shock that skipped the wires (DD) · 12 The capex super-cycle · 13 Making the panels (DD) · 14 130 years, five shocks · 15 KPI masterclass (DD, data-kpi) · 16 Peer table · 17 Who is winning (3 maps + heat map; plus 1 map in §08) · 18 Company profiles · 19 Valuation and the global lens · 20 Technology and disruption · 21 Bull vs bear · 22 What to watch · 23 Glossary

## h1
Integrated power utilities: <em>wires that pay for the build</em>

## Forces
1. The wires compound: regulated equity × allowed ROE (MERC 15.5% wires/17.5% supply; GERC capital-employed 13%→15%; CERC 15.5%).
2. Losses as the moat and the privatisation option (Torrent 2.33%, CESC Kolkata 6.11% vs 8% norm, TPDDL AT&C 5.42%, India AT&C 15.04% FY25; Odisha Q1 FY27 31/32/26/17% vs targets 16/22/15/13%).
3. Regulatory assets and tariff lag (CESC frozen tariff, true-ups to FY22; Delhi SC liquidation order) → P/B 3.18× / 2.85× / 1.38×.
4. Capex super-cycle and leverage (company net debt ₹84,346 Cr = 3.16× EBITDA; RE, pumped storage, Anuppur coal, cells/modules).
5. Fuel and merchant exposure (Mundra under Section 11 to 31-Dec-2026, Torrent gas fleet in the West Asia LNG shock, IEX DAM ₹5.94 → ₹3.86/kWh FY23–FY26).

## Peer combined rows (as printed; peersum ✓ on every additive column)
| Row | Rev | OP | PAT rep. | PAT owners | Co. EBITDA | Co. ND | M-cap | Cust. mn | OPM | ND/EBITDA | P/E (owners) | P/B | EV/EBITDA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All members | 1,09,965 | 22,472 | 9,205 | 7,706 | 26,661 | 84,346 | 1,91,252 | 22.3 | 20.4% | 3.16× | 24.8× | 2.69× | 10.3× |
| Distribution-led (ex-Tata Power) | 47,536 | 9,201 | 4,087 | 3,959 | 10,571 | 28,224 | 77,975 | 9.2 | 19.4% | 2.67× | 19.7× | 2.47× | 10.0× |
| AA+-rated large caps (ex-CESC) | 91,395 | 18,848 | 7,587 | 6,164 | 21,954 | 68,202 | 1,74,029 | 17.4 | 20.6% | 3.11× | 28.2× | 2.97× | 11.0× |
| Coal-fleet integrated (ex-Torrent) | 80,999 | 16,895 | 6,736 | 5,289 | 20,797 | 72,266 | 1,30,500 | 18.0 | 20.9% | 3.47× | 24.7× | 2.51× | 9.7× |
Hand-check: I re-added every subgroup column from the company rows and recomputed every ratio as a ratio of sums (OPM, ND/EBITDA, m-cap ÷ owners' PAT, m-cap ÷ summed screener equity 71,073/31,605/58,543/51,998, (m-cap + ND) ÷ EBITDA) and the revenue YoY from FY25 sums (1,11,644 / 46,166 / 94,643 / 82,479). All match. One basis throughout: screener consolidated FY26; PAT reported includes NCI; owners' PAT = Tata AR ₹3,747 Cr + EPS-based Torrent ₹2,417 Cr and CESC ₹1,542 Cr; company EBITDA and net debt labelled. Note: company P/B cells are screener price ÷ BVPS, while combined P/B = m-cap ÷ equity (Tata would be 2.87×, CESC 1.37× on that basis; stated in the peer note).

## Spot-checks (orchestrator)
Cover and stat strip OK (₹ only, sourced). Peer table and notes OK. Torrent and CESC cards read; fixed a confusing CESC customer line ("4.9 million customers there (37 lakh)" → "about 4.9 million customers: 37 lakh in Kolkata, the rest in …"). KPI anatomy P&L re-added line by line (11,592 MU; ₹9,274 Cr revenue; EBITDA 1,454; PAT 519 = 450 ROE + 69 retained efficiency; ₹100 split sums to 100). Map 1 (customers log-x vs loss %) coordinates re-derived from data: all dots correct. Stacked-bar segment "6%" relabelled "Other 6%".

## Labelled ILLUSTRATIVE / INDICATIVE
~₹10–11 lakh Cr distribution pool; ~99 BU members' volume; ~10–12% private distribution share and the operator-split bar; all "where ₹100 goes" archetypes; worked examples (Kolkata ~₹120 Cr efficiency gain; Odisha ~₹250 Cr per AT&C point, TPCODL ~₹325 Cr/quarter; ₹45 Cr PAT per ₹1,000 Cr capex; Tata ₹2,280 Cr regulated base; LNG ₹/kWh; Nabha ~6.9× EV/EBITDA; Raigad ~₹7 lakh/MW/month); anatomy P&L and KPI-equation example; ~₹2.25 lakh Cr combined capex-plan sum; 100 bp interest sensitivity; Kleros ~₹6,100 Cr conversion and the ~3.8× ND/EBITDA effect; Torrent post-Nabha D/E ~0.97× (secondary); causes of the 2026 share-price fall; global multiples (aggregator) and peer x-positions on Map 4; RERC 16%; benchmark ranges and what-to-watch thresholds; values read off charts (Tata ND/EBITDA FY22–25; Torrent Ahmedabad/Agra Q1 losses); Torrent DC→AC conversion.

## Figures not sourced / not reconciled
- Regulated equity for Torrent and CESC (not disclosed); WBERC, OERC, DERC distribution ROEs (not fetched); Torrent regulatory-asset balance and licence-level PAT.
- Not confirmed as of 22-Oct: Kleros appeal filing; other Mundra procurers' supplementary PPAs; UP privatisation and Electricity (Amendment) Bill status; Q2 FY27 board dates for Torrent and CESC (BSE feed refused scripted requests).
- Torrent ~30 BU volume is primer-only. Tata ₹15,178 Cr regulated equity carried from Part 1.
- Writer corrections to the dossier: Raigad "₹7,000/MW/month" is ~₹7 lakh/MW/month (₹1,680 Cr ÷ 2,000 MW ÷ 12); Tata CFO/OP recomputed 45% FY26 vs 102% FY25 (dossier said 54%/107%).
- CESC ND/EBITDA: 3.43× in the peer table (₹16,144 Cr ÷ ₹4,707 Cr company EBITDA) vs CARE's 4.7× (CARE basis) — both shown, bases stated.

## Results status in the report
All three last reported Q1 FY27 (Tata 27/28-Jul, Torrent 3-Aug, CESC 13-Aug-2026). Tata Power Q2 FY27 board meeting 11-Nov-2026; Torrent and CESC dates not announced as of 22-Oct (CESC reported Q2 FY26 on 17-Oct-2025).

## Primer audit (primer-audit.mjs)
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| tata-power.html | 66 | 5116 | 19 | 9 | 12 | 0 | 2026-06-30 | ❌ banned ("Think of Tata Power as…", l.287) | no main{min-width:0} |
| torrent-power.html | 70 | 5831 | 16 | 10 | 12 | 0 | 2026-06-30 | ❌ banned ("Think of Torrent building…", l.526) | no main{min-width:0} |
| cesc.html | 66 | 5329 | 14 | 10 | 12 | 0 | 2026-06-30 | ✅ | no main{min-width:0} |
Pre-existing; logged in primer-issues.md, not fixed (primers are off-limits).

## Publish entry
{"key":"Power || Integrated Power Utilities","name":"Integrated Power Utilities","slug":"integrated-power","accent":"#3E931A","noun":"utilities","hook":"Wires that pay for the build: how Tata Power, Torrent Power and CESC earn regulated returns on their distribution licences, why loss levels of 2–6% are a moat when India averages 15%, why regulatory assets split their valuations from 1.4× to 3.2× book, and how a ₹84,000 Cr debt pile funds renewables, pumped storage and solar factories.","tags":["The Odisha experiment","Moats of 2–6%","The fuel shock that skipped the wires","Making the panels"]}
