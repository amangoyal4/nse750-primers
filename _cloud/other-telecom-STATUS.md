done 2026-10-23T22:46:46Z · branch claude/ss-other-telecom · report subsectors/other-telecom.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 74 KB; 31/40 figures verified from primary sources — the other 9 are snippet-grade: DIPAM dividend rule and CPSE MPS exemption (press summaries of the OMs/notification), Kavach unit costs and the approved-OEM list, TRAI wired-broadband share, the two ECR Kavach order values; repo 5.50% from secondary reports, rupee ₹94.9/$ not re-fetched; dossier total 188 KB)

## Gate
GATE PASSED: 27/27 checks · 22755 prose words · 32832 total words · 338 KB

## Audit totals (tier C, single member)
Prose 22,755 (target 12,000; library 20–23k) · sections 24 · deep dives 4 · KPI masterclass 4,427 prose words / 21 h3 · charts 65 · positioning maps 3 · tables 20 · "In plain terms" 32 · profile cards 1 (≈204 words) · no thin sections · no section without a chart/table · TOC 24/24 · tag balance OK · banned phrases 0 · "honest" 0 · stat strip ₹-only · no CONTINUE marker · 46× "illustrative", 30× "indicative".

## Render check
RENDER PASSED — 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375: scrollW 375, issues [], rotatedOps 0, h1lines 4. (Run with playwright@1.47.2 pointed at the preinstalled Chromium via executablePath in a scratch copy of rcheck.mjs; the repo's rcheck.mjs is unchanged.)

## Sections (DD = deep dive)
00 The one-page view: a fibre landlord bolted to a government contractor · 01 From trench to invoice (value chain) · 02 Size & growth · 03 Landlord vs contractor **DD** · 04 Who pays: the state, eight demand drivers · 05 The railway as customer, landlord and owner · 06 The railway capex pool: ₹2.93 lakh crore, of which 2.6% is signalling · 07 Kavach: who gets paid **DD** · 08 The order-book machine · 09 The receivables bill: why a debt-free company is short of cash **DD** · 10 Where ₹100 of revenue goes · 11 Who owns India's long-haul fibre · 12 Six business models · 13 Bandwidth, broadband and data centres · 14 Rules, levies and the parent · 15 Twenty-six years, five eras · 16 KPI masterclass **DD** · 17 Peer table · 18 Who is winning (3 maps + heat map) · 19 RailTel profile and valuation · 20 Global lens and disruption · 21 Bull vs bear · 22 What to watch · 23 Glossary

## h1
Telecom Services (RailTel): <em>a fibre landlord inside a contractor</em>

## Forces
1. Two businesses in one: telecom landlord (35% of FY26 revenue, 26.7% segment EBIT, ~84% of segment EBITDA — indicative) vs project integrator (65%, 3.9% EBIT); the mix shift took company margin from ~24% to ~15%.
2. The order-book machine: ₹11,747 Cr (31-Jul-2026, 2.65× TTM revenue); railways only ~21–23.5% of the book; non-railway state/central ICT, mostly tendered, is the engine.
3. Working capital and cash: 175 receivable days vs MoU 90, unbilled ₹898 Cr, >1-yr receivables ₹626 Cr, FCF ₹44 Cr, guarantees ₹1,482 Cr, dividend at the DIPAM floor.
4. Railway capex, S&T ₹7,500 Cr FY27 BE and Kavach: OEMs (HBL, Kernex ~34–35% OPM) capture the margin; RailTel integrates (three orders, ₹1,007 Cr incl. GST, 2,176 RKM, partner Quadrant's RDSO approval pending).
5. Telecom pricing and new lines: NLD flat/falling, RailWire 6.23 lakh subs (partners keep ~65%), data centres ₹202 Cr → ₹300/₹500 Cr guide, BharatNet Independent Engineer only, POWERTEL/GAILTEL analogues.

## Peer table (single-company format)
Member row: RailTel Corporation of India — RAILTEL · 543265 — linked to ../primers/railtel.html (standalone; FY26 rev ₹4,277 Cr, OPM 14.9%, PAT ₹346 Cr, net cash (714) indicative, m-cap ₹7,349 Cr, P/E 21.2×).
Then 12 REFERENCE rows (no "·" code, no primer link, not summed): Tata Communications, Bharti Airtel, HFCL, Sterlite Technologies, Tejas Networks, ITI, IRCON, RVNL, IRCTC, RITES, HBL Engineering, Kernex. NO combined row (per the single-company rule).
peersum: the one "CHECK" line it prints is a false positive — its keyword regex matches "two" inside "Ne*two*rks" (Tejas Networks) and treats that reference row as a combined row. There are no combined/subgroup rows to hand-check.
Hand checks done: m-cap 32.09 Cr shares × ₹229 = ₹7,349 Cr; order book ÷ TTM revenue 11,747 ÷ 4,426 = 2.65×; book-to-bill 7,363 ÷ 4,277 = 1.72×; levies (91.60 + 46.03) ÷ 1,500.69 = 9.2%; ECL 24.4 ÷ 4,277 = 0.57%; segments 1,500.69 + 2,776.79 = 4,277.48; quarters 744 + 951 + 913 + 1,669 = 4,277; Kavach orders 288.15 + 264.07 + 454.95 = 1,007.17; basket medians 23.7× / 40.7× recomputed; ₹100 Cr project anatomy (EBIT 4.5, PAT 2.9, NWC 20.0, 14.6% return) recomputed; growth-vs-P/E map coordinates recomputed for RailTel, STL, HBL, IRCON (all match).
Fix made by orchestrator: profile card now labels the ~39% telecom EBITDA and ~84% EBITDA share as indicative estimates.

## Labelled illustrative / indicative
Telecom EBITDA ~39% and ~84% EBITDA share; net cash ~₹714 Cr (₹650–780 Cr range) and Mar-25/Mar-26 cash estimates; EV/EBITDA net of cash 10.4×; sum-of-parts ₹6,660–7,840 Cr; FY27 profit illustration (rev ~₹5,154 Cr, PAT ~₹426 Cr, ~17.3×); customer-mix split; Kavach unit costs, TAM, per-order anatomy and ₹15–20 Cr/yr EBIT; RailWire ~1.3% share and 65/35 partner split; DC share of India (~0.24%), colocation yield, ₹/MW build cost; basket medians; archetype margin ranges; ₹100 Cr project anatomy and working-capital sensitivities; telecom ₹100 allocation; segment returns from annualised Q1; Kavach-fibre extrapolation; licence-fee-cut effect; order-book composition and roll-forward; heat-map scores; Q2 FY27 run-rate arithmetic.

## Figures not sourced or not reconciled (all flagged in the text)
Screener's printed P/E 19.8× does not reconcile with price ÷ TTM EPS (21.2× used). EBITDA has three bases (₹658 Cr company / ₹638 Cr screener OP / ₹636.5 Cr) — ₹638 Cr used for peer comparisons, ₹658 Cr when quoting management. Order book has no nomination-vs-tender split; FY25 inflow (₹3,146 Cr, single source) not used; the ~₹6,616 Cr opening-book date is uncertain. Not found: govt-ICT SI market size, enterprise NLD operator shares, FY26 POWERTEL/GAILTEL revenues (only POWERTEL FY20 ₹698 Cr), Kavach-fibre ownership, legal terms of the exclusive RoW, MPS status after 1-Aug-2026, Quadrant's final RDSO approval. Management conflicts shown both ways: Noida DC 5 vs 10 MW by May-2027; FY27 capex ₹241 vs ₹300 Cr; FY27 growth ~20% → 25%.
Results status: latest reported Q1 FY27 (Jun-26). Q2 FY27 board meeting Sunday 25-Oct-2026 (also interim dividend, record date 30-Oct) — not in the report; it is listed in "What to watch". A refresh after 25-Oct would update the cover, peer row and card.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| railtel.html | 83 | 7997 | 10 | 11 | 12 | 0 | 2026-06-30 | ✅ | no main{min-width:0} (phone overflow) |
Content issues for railtel.html (≈33 bullets: Q1/Q2 FY26 bars wrong, FY25 order book mislabelled, captive-railway framing, stale valuation, receivables/FCF missing, Kavach/Q1 FY27 missing, BharatNet role, dividend floor, etc.) are logged in _cloud/other-telecom-primer-issues.md — not fixed here.

## Publish entry
{"key":"Telecom || Other Telecom Services","name":"Telecom Services (RailTel)","slug":"other-telecom","accent":"#14089B","noun":"corridor carriers","hook":"A fibre landlord inside a contractor: how RailTel's 63,000-km railway-corridor fibre earns near-40% EBITDA while the government ICT projects bolted onto it earn about 4%, why an ₹11,747 crore order book is not turning into cash, and who really gets paid for Kavach.","tags":["Landlord vs contractor","Kavach: who gets paid","The receivables bill","KPI masterclass"]}
