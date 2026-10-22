done 2026-10-22T05:12:42Z · branch claude/ss-small-finance-banks · report subsectors/small-finance-banks.html (unpublished: publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 71 KB; 36/40 figures verified from primary sources — 39/40 [V] in total; the four non-primary rows are m-cap and P/B (screener), the PSL 60% cut (CareEdge PDF; RBI circular bot-blocked) and the repo path (snippets; RBI site served a CAPTCHA))

## Gate
GATE PASSED: 27/27 checks · 20982 prose words · 29170 total words · 300 KB

## Audit totals (tier C, 4 companies; benchmark = hospitals.html)
- Prose 20,982 (floor 12,000; benchmark 19,815) · 24 sections · 4 deep dives · KPI masterclass 4,749 prose words / 20 h3
- 63 chart blocks (42 bar, 9 stacked share bars, 4 positioning maps, 5 flow diagrams, 3 timelines) + 1 heat map · 13 tables · 30 "In plain terms" callouts
- 4 profile cards, 158–165 words each · no thin sections · banned phrases 0 · "honest" 0 · "think of" 0 · labels: 19× illustrative, 73× indicative
- Sections with no chart/table (prose-led, each ≥ 250 words): p17 profiles (cards), p20 technology, p21 bull/bear

## Render check
RENDER PASSED (Playwright 1.47.2): 1024 → scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375 → scrollW 375, issues [], rotatedOps 0, h1lines 5 (the ≤ 4 rule is for desktop and is met). One clipped stack-bar label at 375 (Jana "Gold, vehicle, other 15") was shortened to "Other 15"; the re-check is clean.

## Dossier
- _cloud/small-finance-banks-industry.md — ~197 KB plus Part 5. Contents:
  - Part 1 industry §0–12 + A–H.
  - Part 2 fact packs + JSON.
  - Part 3 KPI appendix.
  - Part 4 deep-research supplement: 29 Supersedes rows, 40-row verification table, per-company guidance digests and 5-year/8-quarter tables, gap log.
  - Part 5 orchestrator re-add of aggregates.
- Orchestrator re-add: every Part 3 sum was re-added from the company rows and there were no arithmetic errors. Only the m-cap snapshot moved, per S27 (₹94,463 → ₹94,445 Cr).
- _cloud/small-finance-banks-primer-issues.md — bullets from the first pass, the deep-research pass and the primer audit.

## Sections (DD = deep dive)
- p0 The one-page view: four banks, two business models, one awkward licence
- p1 The licence bargain: a deposit franchise in exchange for a down-market mandate
- p2 Size and share: 1.2% of Indian credit, growing twice as fast as the system
- p3 Who borrows, and for what: ten markets that big banks reach badly
- p4 Where ₹100 of interest income goes
- p5 DD The microfinance storm of 2024–26, and why it has passed
- p6 DD Who pays 7%? The deposit franchise versus the universal banks
- p7 The rate cycle: why a repo cut helps an SFB slowly and a hike hurts it slowly
- p8 The secured-mix migration: trading 22% loans for 12% loans, and why it can pay
- p9 DD The universal-bank gate: open for AU, returned to Ujjivan and Jana, ignored by Equitas
- p10 The rulebook: PSL at 60%, promoter dilution, microfinance directions and the ECL clock
- p11 The SFB universe: eleven banks, one giant, a stressed tail and three unlisted outliers
- p12 Four business models under one licence
- p13 Four crises in sixteen years: from Andhra Pradesh to the guardrails
- p14 DD Reading an SFB: the KPI masterclass (data-kpi="1")
- p15 The peer table
- p16 Who is winning (3 maps + heat map)
- p17 Four company profiles
- p18 What the market pays
- p19 The global lens
- p20 Technology and disruption
- p21 Bull versus bear
- p22 What to watch
- p23 Glossary

## h1
Small finance banks: <em>past the microfinance storm, still paying 7%</em>

## Forces
1. **The microfinance cycle and its turn.** MFIN GLP fell from a ₹4,33,697 Cr peak (Mar-24) to ₹3.29 lakh Cr (Jun-26). PAR 31–180 fell from 6.3% (Mar-25) to 1.6% (Jun-26). Also covers the guardrails, state laws and CGFMU.
2. **The deposit franchise and cost of funds vs universal banks.** Loans are outgrowing deposits; at Equitas, loans grew 27% against 10% for deposits.
3. **The secured-mix migration.** Secured share: AU ~92%, Equitas ~85%, Jana 72.8%, Ujjivan 52%.
4. **The universal-bank gate.**
   - AU: in-principle approval 7-Aug-2025; final licence pending.
   - Ujjivan: application returned 13-Apr-2026.
   - Jana: application returned in Q3 FY26.
   - Equitas: technically compliant, not hurrying.
5. **The rate cycle.** Cuts took the repo to 5.25% by 5-Dec-2025; a unanimous hike took it to 5.50% on 7-Oct-2026.

## Peer combined rows (as printed by peersum) and hand-check
Columns: loans · deposits · NII · PAT · RoA · RoE · net worth · m-cap · P/E · P/B (₹ Cr for amounts).

- **All four SFBs combined:** 2,63,436 · 2,80,646 · 18,968 · 3,763 · 1.15% · 10.6% · 37,384 · 94,445 · 25.1× · 2.53×
  - peersum ✓ on all six summed columns.
- **Ex-AU: MFI-heritage SFBs:** 1,23,109 · 1,27,985 · 9,855 · 1,122 · 0.74% · 6.7% · 17,411 · 23,778 · 21.2× · 1.37×
  - peersum ✓.
- **Housing-led migrants: Ujjivan + Jana:** 76,944 · 81,452 · 6,464 · 1,019 · 1.07% · 9.5% · 11,286 · 16,113 · 15.8× · 1.43×
  - Hand-checked sums ✓: 40,655+36,289; 45,668+35,784; 3,871+2,593; 693+326; 6,816+4,470; 11,782+4,331.
  - Ratios are ratios of sums ✓ (RoA on average total assets of 95,573).
- **Secured-majority banks: AU + Equitas:** 1,86,492 · 1,99,194 · 12,504 · 2,744 · 1.19% · 11.1% · 26,098 · 78,332 · 28.5× · 3.00×
  - Hand-checked sums ✓: 1,40,327+46,165; 1,52,661+46,533; 9,113+3,391; 2,641+103; 19,973+6,125; 70,667+7,665.
  - Ratios are ratios of sums ✓.

Basis and labelling:
- One PAT basis throughout: FY26 reported standalone PAT (screener), after exceptional items. AU's pre-exceptional ₹2,656 Cr is noted separately.
- In the combined rows, the loan-growth, CoF, CASA and GNPA cells are labelled indicative (reconstructed bases or weighted figures).

Spot-checks done:
- **Stat strip:** checked.
- **Peer table and notes:** checked.
- **Profile cards:** AU and the others are 158–165 words, each with 4 KPIs and a primer link.
- **KPI anatomy (₹1,000 Cr book):** consistent.
  - 171 − 79 = 92 NII; +20 − 72 = 40 PPoP; −12 − 7 = 21 PAT.
  - RoA 1.68%, RoE 16.8%, C/I 64%; the sensitivities are consistent too.
- **RoE vs P/B map:** coordinates match the data (x = 45 px per % from 8%; y = 87.5 px per 1×).

## Labelled illustrative/indicative
- **Worked examples:**
  - The equation example (₹10,000 Cr book).
  - The anatomy P&L of a ₹1,000 Cr branch-cluster book.
  - The MFI-vs-housing ₹100 table.
  - The CGFMU ₹10 arithmetic.
  - The NIM sensitivity to the Oct-26 hike (~−9 bp) and the NIM cost of the migration.
- **Sector estimates:**
  - Sector advances ≈ ₹3.2–3.3 lakh Cr (~1.5% of credit).
  - SFB share of MFI GLP after Mar-24 (~15–17%).
- **Weighted aggregates:** weighted CoF 6.76%, combined CASA 26.7%, loan-weighted GNPA 2.18%.
- **Jana adjustments:** annualised credit cost, and tax-adjusted PAT/RoA/RoE/P/E.
- **Valuation and growth arithmetic:** annualised Q1 FY27 valuations; reconstructed loan-growth bases; justified-P/B arithmetic; the Equitas FY27 PAT implied by guidance.
- **Company estimates:**
  - Secured share: AU ~92%, Equitas ~85%.
  - AU slippage ~2.2%; Jana opex/ATA ~5.6%; loans per employee.
  - The ₹28,000 Cr JLG exposure; the AI opex saving.
- **Ranges:** benchmark ranges, the scorecard and the watch thresholds.
- **Single-source items:** repo-path dates, FD rate cards, global comparators.

## Figures not sourced / not reconciled
- **RBI sector data:** no RBI table of SFB-sector advances/deposits (rbi.org.in served a CAPTCHA). Sector advances remain an estimate, and system totals come from snippets.
- **RBI documents:** the MPC statements and the 20-Jun-2025 PSL circular were not fetched; secondary/CareEdge sources only.
- **MFI series:**
  - Jun-24 MFI GLP (absolute) and Sep-24 PAR are missing.
  - The SFB share of MFI GLP after Mar-24 is unavailable because MFIN no longer splits it out.
- **Unconfirmed items:**
  - The final ECL circular date is unconfirmed; the proposed 1-Apr-2027 is used.
  - AU's "AU Bank" rebrand date is unsourced and was omitted.
  - Utkarsh's promoter drop is unexplained.
- **Comparators:**
  - Large-bank CoF of ~5.0–5.5% is from memory.
  - Kotak's latest figures were not fetched.
  - AU and Equitas FD rate cards are secondary.
- **Reconciliation choices:**
  - Ujjivan's FY26 loan growth (~27%) uses our primer's FY25 base.
  - Jana PCR: 62.64% in the deck vs 62.4% on the call; the deck figure is used.
  - MFI PAR for Mar-26 was restated from 2.0% to 2.1%; 2.1% is used.

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| au-small-finance-bank.html | 77 | 6724 | 18 | 11 | 13 | 0 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} (phone overflow) |
| ujjivan-small-finance-bank.html | 76 | 6893 | 18 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| equitas-small-finance-bank.html | 70 | 5925 | 19 | 10 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
| jana-small-finance-bank.html | 65 | 5321 | 20 | 10 | 11 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |

These issues are pre-existing; they are logged in _cloud/small-finance-banks-primer-issues.md and not fixed. All four primers carry the stale 75% PSL target (now 60%), stale market caps, and the other corrections listed there.

## Upcoming dates (in "What to watch")
| Date | Event |
|---|---|
| 23-Oct-2026 | Jana Q2 FY27 board meeting |
| 24-Oct-2026 | AU Q2 FY27 board meeting |
| 29-Oct-2026 | Equitas Q2 FY27 board meeting |
| 13-Nov-2026 | Ujjivan EGM (₹409 Cr preferential issue) |
| 2–4 Dec-2026 | RBI MPC |

## Publish entry
{"key":"Bank || Other Bank","name":"Small Finance Banks","slug":"small-finance-banks","accent":"#121B68","noun":"small finance banks","hook":"Past the microfinance storm, still paying 7%: how India's four listed small finance banks earn money, why the 2024–26 microfinance bust hit three of them and spared AU, what it costs to buy deposits against universal banks, the shift to secured loans, and who gets through the universal-bank gate.","tags":["Microfinance cycle","Deposit franchise","Universal-bank gate","KPI masterclass"]}
