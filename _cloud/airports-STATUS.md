done 2026-11-13T20:08:06Z · branch claude/ss-airports · report subsectors/airports.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 74 KB; 33/40 figures verified from primary sources)

## Checks (re-run by the orchestrator)
- Gate: GATE PASSED: 27/27 checks · 22040 prose words · 31006 total words · 328 KB
- Audit (airports / hospitals benchmark): prose 22,040 / 19,815; sections 24 / 20; deep dives 6 / 5; KPI section 4,551 words, 19 h3; chart blocks 61 / 47 (39 bars, 11 stacked, 4 maps, 3 flows, 4 timelines, 1 heat map); tables 24 / 16; callouts 35 / 29; profile cards 1 (single-member, 193 words); thin sections none; sections with no chart/table none; TOC 24/24; tags balanced; banned phrases none; "honest" 0; stat strip ₹-only; no CONTINUE marker; 16× "illustrative", 40× "indicative".
- Render check: RENDER PASSED (scrollW 1024@1024 and 375@375; issues []; rotatedOps 0; h1lines 3 at 1024, 4 at 375). Run with the pre-installed Playwright.
- peersum: no combined rows (single member, correct); member row "GMRAIRPORT · 532754" + 8 reference rows (Adani Airport Holdings, BIAL, CIAL, AAI, Aena, Groupe ADP, Fraport, Flughafen Zürich), none with "·" code or primer link.
- Hand checks:
  - FY26 SPV bridge (DIAL+GHIAL+GGIAL+GAL SA → consolidated) re-added every column; the dossier had six ±1 rounding slips (fixed in the dossier and the HTML): rev 14,634 + 173 = 14,807 ✔; gross 14,934 + 267 = 15,201 ✔; rev share 4,641 − 1,197 = 3,444 ✔; EBITDA 6,043 + 107 = 6,150 ✔; PAT 715 − 243 = 472 ✔; pax 114.56 ✔. Airport SPVs combined: gross 10,638, rev share 3,435 (32.3%), EBITDA 4,623 (43.5% gross / 64.2% net) ✔. H1 FY27 bridge ✔ (EBITDA 3,026 + 110 = 3,136).
  - Net debt by SPV 13,900 + 6,700 + 6,500 + 3,400 + 2,500 + 1,000 = 34,000 ✔; look-through 34,000 − 26% × 20,600 = 28,644 ✔; EV B 1,05,840 + 6,639 + 1,056 + 34,000 = 1,47,535 → 24.0× FY26 / 22.8× TTM ✔; EV C 1,41,123 ÷ 4,981 = 28.3× / ÷ 5,273 = 26.8× ✔.
  - Attributable PAT: 8 quarters PAT + minority ✔ (FY26 Σ = 175 = AR ₹175.49 Cr).
  - Per-pax: GMR 6,150/114.56 = ₹537; Adani 5,394/95.31 = ₹566; BIAL 3,269/44.47 = ₹735; DIAL 2,882/78.7 = ₹366; GHIAL ₹530; Mopa ₹237 ✔. Map 1 (pax vs EBITDA/pax) and map 2 (ND/EBITDA vs margin) coordinates match the linear scales for all dots ✔.
  - DIAL anatomy ₹972 = 383 + 458 + 121 + 10; −410 −196 = 366; −128 −195 +18 = 61 ✔. KPI anatomy table at 50 mn pax (45.99%-type vs 4% share) re-added: 4,860 → 2,810/4,666 → 1,830/3,686 → PBT 215/2,071 → 74% 159/1,533; margins 37.7/65.1 and 75.8/79.0 ✔; stacked bar sums to ₹972 ✔.
  - Market shares FY26: 420.09 − 114.56 − 95.31 − 44.47 − 11.30 − 1.43 − 3.01 = 150.01 mn = 35.7% AAI & others ✔.
- Orchestrator fix: profile card claimed "40-plus years of concession left" → "long concessions (Delhi's 30-year term to 2036 carries a 30-year extension option)".
- Cross-links: airline, travel-services, hotels, road-assets, ports, index (all exist); primer ../primers/gmr-airports.html.

## Report
- h1: Indian airports: <em>profits set by regulators, not traffic</em>
- Stat strip: ₹14,807 Cr GMR revenue FY26 · 420 mn India airport passengers FY26 (AAI) · ₹34,000 Cr GMR net debt 30-Sep-26 · 45.99% Delhi revenue share to AAI · ₹360 Delhi approved aero yield per pax (CP4) · ₹1.06 lakh Cr GMR m-cap 13-Nov-26
- Sections: 00 One-page view · 01 How an airport earns · 02 420 million and stalling · 03 Who flies, through which gate · 04 Who owns India's gateways · 05 The tariff machine **[DD]** · 06 The grantor's cut: concessions and the privatisation map **[DD]** · 07 Six ways to run an airport · 08 Capacity ahead of demand · 09 Delhi: the 72% airport **[DD]** · 10 Hyderabad, Goa and the new gates · 11 Platform, not landlord: non-aero, duty free, Aerocity **[DD]** · 12 Thirty years, five resets · 13 KPI masterclass **[DD/KPI]** · 14 Peer table · 15 Who is winning (maps + heat map) · 16 Company profile · 17 Debt, ADP and what the market is paying **[DD]** · 18 Global lens · 19 The fine print · 20 Technology and disruption · 21 Bull vs bear · 22 What to watch · 23 Glossary
- Forces: (1) the tariff machine: AERA RAB × fair return under a 30% hybrid till; Delhi CP4 lifted approved yield ₹145 → ₹360 (aero revenue ₹1,153 → ₹3,011 Cr), Hyderabad CP4 cut UDF ₹750 → ₹515; TDSAT win for DIAL (Sep-26) now under AERA's Supreme Court appeal; (2) the grantor's cut: Delhi 45.99%, Mumbai 38.7%, Hyderabad 4%, Nagpur 14.49%, per-pax fees in the 2019/2026 PPP rounds (11-airport round, Kangra for Jabalpur); (3) traffic stall vs capacity build: AAI FY26 420.09 mn (+1.9%), Apr–Sep 2026 −2.9% (intl −7.1%) while Navi Mumbai, Noida and Vizag opened; (4) non-aero and the city side: duty free insourced (GAL SA revenue ₹1,263 → ₹4,242 Cr), ₹39,500 Cr contracted Aerocity lease book; (5) leverage, ADP and valuation: net debt ₹34,000 Cr flat, ND/EBITDA 5.3×, ADP down to 28.9%, ~23× consolidated / ~27× look-through EV/EBITDA vs Europe 9–12×.
- Peer table: GMRAIRPORT · 532754 member row (FY26 consolidated; reported PAT ₹472 Cr in the PAT column, owners' ₹175 Cr in its own column); reference rows Adani Airport Holdings (FY26 segment; PBT shown, PAT n.d.), BIAL, CIAL, AAI, Aena (9M-26), Groupe ADP (9M-26), Fraport (H1-26), Flughafen Zürich (H1-26). No combined row (single member).

## Labelled ILLUSTRATIVE/INDICATIVE
Operator market shares (computed from AAI airport-wise data); the worked tariff example and KPI worked examples; the airport-year anatomy at 50 mn pax (DIAL FY26 per-pax, with a 4%-share variant); all ₹ conversions of global peers (₹104.1/€, ₹112.8/CHF, ₹94.09/$) and their multiples; look-through EV/EBITDA and the ADP-tranche implied value (~₹78,400 Cr); AAHL ~26× (equity only, pre-IPO ~$18 bn); BIAL owner mark and dollar conversion; AAI revenue (FY25-based estimate); industry revenue total; utilisation and non-GMR capacities; heat-map scores; KPI benchmark thresholds; ICRA forecasts; refinancing sensitivity; "EBITDA needed" bull/bear chart; per-entity ND/EBITDA and interest cover; single-source CIAL, Hyderabad ARR, Noida/Navi Mumbai fees and UDFs.

## Not sourced / not reconciled
1. Delhi and Hyderabad CP4 RAB and fair rate of return (aera.gov.in failed TLS / 503; not bypassed) — shown n/a.
2. ₹ value of the TDSAT Delhi win; press ~₹1,500 Cr described as unconfirmed; benefit not before FY28 per management.
3. Noida ~₹401/pax concession fee and BIAL 4% fee rate — reported, not verified from primary documents.
4. Mumbai and Kochi capacities, AAI audited revenue — approximate.
5. Adani airports PAT not disclosed (PBT shown); ADP margin uses H1 recurring figure.
6. ADP royalty / technical-services fees (FY26 AR related-party table did not parse) — omitted.
7. Primer's "Hyderabad ₹2,100 Cr at 7.6%" refinancing not found anywhere.
8. Hyderabad UDF rates and CIAL FY26 from secondary press; CIAL annual report not fetched.
9. Q3 FY27 result date not announced (expected late Jan–mid Feb 2027).
10. Screener rounding: Q1 FY26 attributable −212 vs −137 − 74 = −211; FY24 −559 vs −560.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| gmr-airports.html | 69 | 5614 | 20 | 10 | 12 | 0 | 2026-06-30 | ❌ banned | no main{min-width:0} (phone overflow) |
Pre-existing; logged in _cloud/airports-primer-issues.md with 19 + 14 content corrections from the dossier (EBITDA margin basis, owners' PAT +₹175 Cr, ADP 28.9%, stale valuation/shareholding, missing Q1/Q2 FY27, Vizag/Nagpur/Crete status, Delhi/Hyderabad tariff orders, "187 mn" is capacity).

## Publish entry
{"key":"Infrastructure || Airport & Airport services","name":"Airports","slug":"airports","accent":"#3A86FF","noun":"airport operators","hook":"Profits set by regulators, not traffic: how AERA's tariff formula, revenue shares of up to 45.99% to AAI, insourced duty free and city-side property drive Indian airport earnings, why GMR turned profitable in a year passengers fell, and what its debt and ~27× look-through multiple imply.","tags":["The tariff machine","Concessions and privatisation","Delhi: the 72% airport","Debt, ADP and valuation"]}
