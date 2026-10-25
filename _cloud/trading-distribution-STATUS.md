done 2026-10-25T15:08:04Z · branch claude/ss-trading-distribution · report subsectors/trading-distribution.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 63.5 KB; 36/40 figures verified from primary sources — non-primary: #8 Redington net debt (arithmetic on [V] balance-sheet lines), #34 MMTC Q1 FY27 qualification impact and #37 IPM size (secondary/snippet; BSE 403, MMTC site TLS error), #38 NPPA 137-drug order read via All India Radio; dossier total 186 KB)

## Checks (re-run by orchestrator)
- Gate: GATE PASSED: 27/27 checks · 22953 prose words · 32076 total words · 319 KB
- Audit: prose 22,953 (tier C target 12,000); 22 sections; 5 deep dives; KPI masterclass 4,545 words / 19 h3; 62 chart blocks (43 bars, 8 stacked, 3 maps, 6 flows, 2 timelines) + 1 heat map; 20 tables (all wrapped); 30 callouts; 3 profile cards (184–196 words); TOC 22/22; no banned phrases; "honest" 0; stat strip ₹-only; no CONTINUE marker; 45 × illustrative, 18 × indicative.
- Render check: RENDER PASSED (375 and 1024: scrollW = width, issues [], rotatedOps 0, h1lines 3 at 1024). Fixed one map quadrant label ("Fat margin, long cycle") that sat over the Avnet dot — moved top quadrant labels to y=20.
- peersum: both combined rows ✓ on every summable column.

## Sections (DD = deep dive)
00 The one-page view: three businesses, one balance sheet · 01 How a distributor earns: renting out a balance sheet · 02 Size, growth and history · 03 Forces I: conveyor-belt economics · 04 Forces II: the 2026 shocks · 05 Who holds the market · 06 Three archetypes, three P&Ls · 07 Rules of the trade · 08 Booms, busts and an ending · 09 The cash-conversion machine: anatomy of distributor ROCE (DD) · 10 Reading a distributor: the KPI masterclass (DD) · 11 Redington: price vs volume in the 2026 boom, and the Arena question (DD) · 12 Entero: roll-up economics (DD) · 13 MMTC: a cash shell with a gold refinery (DD) · 14 The peer table · 15 Who is winning · 16 Company profiles · 17 The global mirror · 18 Technology and disruption · 19 Bull vs bear · 20 What to watch · 21 Glossary

## h1
Trading &amp; distribution: <em>two rupees of margin, thirty days of cash</em>

## Forces
1. Thin-margin economics and why ROCE is still high (margin × turns); working capital/cash cycle as the whole game
2. Vendor concentration (Apple 31%, top-5 60%) and receivable financing under the 5.50% repo
3. 2026 memory-chip inflation: price-led, not volume-led, revenue growth (consistent with consumer-electronics.html)
4. Turkey/Arena hyperinflation (Ind AS 29), West Asia and the rupee
5. Pharma distribution consolidation and NPPA trade-margin cap (137 anti-cancer drugs at 30% of MRP from 9-Nov-2026); PSU trading-house wind-down at MMTC

## Peer combined rows (as printed; ₹ Cr; screener consolidated PAT incl. NCI in every row, owners' PAT in its own column)
| Row | Rev FY26 | OP | PAT reported | PAT to owners | Q1 FY27 rev | Q1 FY27 PAT | Net debt | M-cap |
|---|---|---|---|---|---|---|---|---|
| All members combined | 1,25,755 | 2,433 | 1,817 | 1,992 | 36,863 | 609 | 4 | 42,051 |
| Ex-MMTC operating distributors | 1,25,753 | 2,614 | 1,430 | 1,605 | 36,862 | 505 | 1,791 | 34,465 |
Hand-check of the ex-MMTC row: 1,19,162+6,591=1,25,753 ✓; 2,348+266=2,614 ✓; 1,284+146=1,430 ✓; 1,490+115=1,605 ✓; 34,922+1,940=36,862 ✓; 453+52=505 ✓; 1,516+275=1,791 ✓; 28,074+6,391=34,465 ✓. All-members adds MMTC (2; −181; 387; 387; 1; 104; −1,787; 7,586) ✓. Ratios of sums: OPM 1.93%/2.08%; M-cap÷PAT 23.1×/24.1×; P/B 3.0× (42,051/13,970) / 2.9× (34,465/11,849); ex-MMTC owners' P/E 21.5× ✓. Reference rows (Rashi, MedPlus, Optiemus) carry no code/primer link and are excluded. Ownership is not combined.

## Labelled illustrative / indicative
Arena exit arithmetic (~₹215 Cr at book, ~+₹125 Cr/yr attributable); MMTC sum of the parts (₹3,260–4,660 Cr before contingents) and steady-state earnings; Redington Jun-26 gross debt ~₹4,200 Cr; India IT distribution market ₹4–5 lakh Cr (no third-party figure exists); Q1 FY27 price/volume split; FY27 ROCE scenarios and the ROCE sensitivity grid; the ₹1,000 Cr unit anatomy; oncology trade-margin worked example; Entero pharma vs medtech split; DRAM price series (secondary); CY2024 PCs (back-calculated); derived quarterly minority/attributable figures; EV estimates.

## Figures not sourced or not reconciled
- India IT distribution market size: no third-party figure (estimate, labelled).
- Redington SSG (software/cloud) margin and Arena EBITDA: not disclosed.
- MMTC Q1 FY27 filing not fetched (BSE 403, MMTC site TLS error); Q1 numbers and qualification impact are secondary.
- MMTC 2026 closure decision: none found; AR says "awaited".
- Keimed revenue: not found.
- Wider 30% trade-margin cap on all non-scheduled drugs: press report only (labelled).
- MMTC-PAMP carrying value ₹439 Cr (balance sheet) vs ₹295 Cr (26% of JV net assets): unreconciled, stated in report.
- Writer corrected dossier arithmetic: Entero medtech deals ~₹302 Cr (not ~₹390 Cr); MMTC-PAMP dividend to MMTC ~₹33 Cr (not ~₹100 Cr); Entero P/E on total PAT 43.8× (not ~38×).
- DPCO 10% annual price-increase limit on non-scheduled drugs comes from general knowledge (DPCO 2013 para 20), not the dossier.

## Primer audit
| Primer | KB | Words | Hard checks | Notes |
|---|---|---|---|---|
| redington.html | 64 | 5038 | ✅ | no main{min-width:0} (phone overflow) |
| mmtc.html | 87 | 8598 | ✅ | no main{min-width:0} (phone overflow) |
| entero-healthcare.html | 75 | 6762 | ✅ | no main{min-width:0} (phone overflow) |
Substantive primer corrections are logged in _cloud/trading-distribution-primer-issues.md (Synnex 24.12% anchor; MMTC PBT mislabelled as PAT; MMTC-PAMP 26% confirmed; Keimed is Apollo-linked; Entero minority interest; stale valuations; RBI hike missing).

## Results status
All three at Q1 FY27 (Jun-26). Upcoming: Entero board 4-Nov-2026; Redington not announced (last year 5-Nov); MMTC not announced (expect mid-Nov).

## Publish entry
{"key":"Trading || Trading & Distributors","name":"Trading & Distribution","slug":"trading-distribution","accent":"#5C940D","noun":"distributors","hook":"Two rupees of margin, thirty days of cash: how India's listed distributors earn a thin spread on other people's goods — Redington's memory-price boom and Arena problem, Entero's pharma roll-up and minority leak, and MMTC, a state trading house with no trade, cash and a gold-refinery stake.","tags":["Cash-conversion machine","Redington: price vs volume","Entero roll-up economics","MMTC cash shell"]}
