done 2026-10-23T22:05:33Z · branch claude/ss-ratings · report subsectors/ratings.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 67 KB; 38/40 figures verified from primary sources — #20 CARE ~4% share read off the rendered SEBI AR chart (primary, approximate); #28 SEBI Jan-2026 amendment wording is snippet-grade; dossier total 204 KB)

## Gate
GATE PASSED: 27/27 checks · 22682 prose words · 31621 total words · 329 KB

## Audit totals (vs tier-C floor / hospitals benchmark)
- Running prose 22,682 (12,000 / 19,815) ✅ · KPI masterclass 4,466 words, 20 h3 ✅ · 22 sections, 5 deep dives
- Charts 78 (26 / 47): 55 bars · 10 stacked · 3 positioning maps · 6 flows · 4 timelines · 1 heat map — above the 50–65 library band (no padding found on spot-read; owner may trim)
- Tables 16 (8 / 16) ✅ · "In plain terms" callouts 32 (20 / 29) ✅ · 1 co-card (178 words)
- Thin sections: none; sections without chart/table: none; TOC 22/22; tags balanced; banned phrases 0; "honest" 0; stat strip ₹-only; no CONTINUE marker
- Labels: 24 × "illustrative", 74 × "indicative"

## Render check
RENDER PASSED (1024: scrollW 1024, h1lines 2; 375: scrollW 375, h1lines 3; issues [], rotatedOps 0, overflowCulprits []). _cloud/tools/rcheck.mjs logic unchanged, launched with executablePath /opt/pw-browsers/chromium (chromium-1243; playwright@1.47.2's bundled chromium not present in the container). Re-run after the orchestrator fix: pass.
Orchestrator fix: §02 h2 "a ₹1,850 crore industry" → "a ~₹1,850 crore industry" (the pool is an INDICATIVE ₹1,700–2,000 Cr estimate). Re-gated: pass.

## Spot-checks (orchestrator)
- Cover/stat strip: ₹61.5 lakh Cr bonds outstanding (Sep-26, SEBI) · 46.8% CRISIL fresh listed share FY26 · ~₹1,395 Cr domestic ratings revenue of listed CRAs (indicative; 670.6 + 387.7 + 336.5, mixed CY25/FY26 stated) · 19.1% bank credit Aug-26 · ₹4,310 Cr CRISIL TTM revenue · 20% AA risk weight from Apr-2027 (was 30%).
- TTM re-add: revenue 1,082 + 1,058 + 1,075 + 1,095 = 4,310 ✓; PAT 242 + 233 + 216 + 205 = 896 ✓; P/E 34,745 / 896 = 38.8× ✓; EV/EBITDA (34,745 − 1,010 + 297) / 1,268 = 26.8× ✓.
- Map 1 (fresh listed share vs FY25+FY26 defaults): x = 70 + share×1,080, axis y 380, 43.75 px/default — CRISIL 46.8%/4, ICRA 20.1%/5, IndRa 19.3%/5, CARE 4%/7, Infomerics 3%/6, Acuité 6%/5 (5 FY25 + 0 FY26 ✓), Brickwork 1%/1 — all coordinates match. ICRA and India Ratings dots sit 9 px apart (labels on opposite sides, readable).
- KPI anatomy (ILLUSTRATIVE mid-size CRA): 248 + 132 + 20 = 400 = 5,000 entities × ₹8 lakh; staff 600 × ₹28 lakh = 168; EBITDA 400 − 168 − 40 = 192 (48%); treasury ₹600 Cr × 7% = 42; PBT 192 − 10 + 42 = 224; tax 56; PAT 168 (42%) ✓.
- Co-card (CRISIL) and peer note read: bases stated, no standalone figures used.

## Sections (DD = deep dive)
00 The one-page view: an opinion business that grew while bonds shrank
01 How an opinion earns: the two value chains
02 Size of the pool: a ~₹1,850 crore industry beside a ₹61 lakh crore market
03 Bonds down, raters up: the anatomy of 2026's rating boom — DD
04 The debt market underneath: who borrows, who holds, and why bonds are only 16% of GDP
05 Eight licences, two tiers: who rates India
06 Five business models, five very different margins
07 The rating that sets the risk weight: RBI's 2027 Standardised Approach — DD
08 SEBI's rulebook: from licence conditions to outcome metrics
09 Five eras of Indian ratings, 1987 to 2026 (timeline)
10 The IL&FS scar: how one default rewired Indian ratings — DD
11 Reading a rater: the KPI masterclass — DD (data-kpi="1")
12 The peer table: one member, five reference points
13 India's analysts, Wall Street's spreadsheets: CRISIL's global engine — DD
14 Who is winning: three maps of the rating world
15 The lens company: CRISIL in eight quarters (1 co-card)
16 Three raters, three parents: ownership, transfer pricing and valuation
17 The global lens: S&P, Moody's, Fitch and DBRS
18 Technology and disruption: AI is a tool for raters and a threat to researchers
19 Bull vs bear (heat map)
20 What to watch: leading indicators and the calendar
21 Glossary + numbered sources

## h1
Indian credit ratings: <em>bonds down, raters up</em>

## Forces
1. Bank credit vs the bond market — "bonds down, raters up": bank credit 19.1% (Aug-26) while 9M CY26 bond issuance fell 6% and SEBI FY26 private placements fell 8.8% in value (₹9.00 lakh Cr) but rose 16% in count; ratings revenue still grew 14–29% on bank-loan ratings, surveillance and pricing.
2. The surveillance annuity and a two-tier oligopoly: investor-preferred top tier (CRISIL 46.8% of fresh listed ratings, ICRA 20.1%, IndRa 19.3%) vs an SME bank-loan tail where defaults and penalties cluster.
3. Regulation now prices rating quality: RBI's Standardised Approach Directions 2026 (effective 1-Apr-2027) tie lower risk weights to each CRA's default rates — on SEBI's long-run data CRISIL BBB (0.42% vs 0.40%), ICRA AAA/BBB and every agency's BB breach the ceilings, and RBI has not set the averaging window, so Crisil's ₹71,000 Cr capital-relief figure is an upper bound; SEBI's Jan-2026 amendment widens what CRAs may rate.
4. CRISIL's offshore analytics engine: RAS ~70% of revenue, ~69% earned abroad, S&P entities ~13% (₹475 Cr, +22%), hedges at ₹88.84/$ vs ~₹94.9 spot, GenAI and bank captives; RAS margin 17.2% in Q3 CY26 vs 21.9%.
5. Reputation and defaults: IL&FS 2018, CARE's margin collapse (63% → ~33%), SEBI's 2019 default benchmarks; listed defaults 22 → 11 in FY26.

## Peer table combined rows
None. Single-member sub-sector: CRISIL row (CRISIL · 500092, primer link) + REFERENCE rows (ICRA, CARE Ratings, India Ratings, S&P Global, Moody's, Morningstar DBRS) with no "·" codes, no links and no combined row. peersum: no "all"/"ex-" rows (prints reference rows as OTHER). One PAT basis: reported consolidated (GAAP net income for US groups), stated in the peer note.
Hand-check: CRISIL P/E 34,745/896 = 38.8× ✓; EV/EBITDA 26.8× ✓ (above); ICRA+CARE reference set used only in prose/charts — revenue 600 + 473 = 1,073 ✓, OP 215 + 197 = 412 (38.4%) ✓, PAT 183 + 174 = 357 ✓, m-cap 4,316 + 4,786 = 9,102 (25.5×) ✓; Apr–Jun 2026 ratings revenue 305.1 + 83.8 + 98.7 = 487.6 (CRISIL 62.6%) ✓; dossier §3.2 all-three context row 4,722 / 1,497 / 1,123 / 43,847 ✓. Dossier arithmetic error found: CRISIL CY25 payout 57% → 58.2% (₹446 Cr ÷ ₹766 Cr; Supersedes S1, applied in the report).

## Labelled ILLUSTRATIVE / INDICATIVE
Industry revenue pool ₹1,700–2,000 Cr (and the ~₹1,850 Cr midpoint and pool shares); India Ratings / long-tail revenue; ~₹1,395 Cr domestic ratings revenue (mixed CY/FY sum); GAC size ₹390–410 Cr; surveillance/new split ~65/35; fee per mandate and revenue per rated company (₹9.2 vs ₹7.5 lakh); CRISIL ex-GAC share ~53%; PriceMetrix revenue and organic RAS growth 15–18%; revenue per employee; Crisil Ratings Ltd ROE ~130%; cash % of m-cap, ex-cash P/E, EV/EBITDA, PAT CAGRs; the bank-capital worked example (₹1,000 Cr AA loan); the anatomy P&L; the ODR worked calculation; sensitivities; KPI benchmarks and watch-list thresholds; the CY27 lagged-surveillance claim; India Ratings +11.1% (single source); next CRISIL result date (mid-Feb 2027).

## Figures not sourced / not reconciled
- Revenues of India Ratings, Acuité, Infomerics, Brickwork, Acer (MCA/paywalled) — not printed; pool is an estimate.
- Rated-entity counts for ICRA and India Ratings (BSE disclosure page 403); surveillance vs new revenue split (no CRA discloses); CRISIL RAS sub-split; PriceMetrix revenue; CRISIL headcount at Sep-26; Fitch revenue (no official figure; not printed); CARE's FY26 default study; RBI's ODR averaging window (not specified by RBI).
- Screener's "3-year PAT CAGR 7%" (Part 4) not reproducible on CY figures (CY22→CY25 564→766 ≈ 10.7%); the report uses ~11%. Screener CFO/EBITDA 96% vs 756/1,085 ≈ 70% — both shown with bases.
- The repo-hike date 7-Oct-2026 rests on press reports of the 5–7 Oct MPC (RBI PDF not opened); the July-2026 CRISIL board change (snippet only) is left out of the report.
- SEBI shares below ICRA read off a chart (approximate).

## Primer audit
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| crisil.html | 64 | 5092 | 11 | 10 | 12 | 0 | 2026-06-30 | ❌ banned | no main{min-width:0} (phone overflow) |
Pre-existing fail (banned "Think of it as", "no room for error"); logged in _cloud/ratings-primer-issues.md with the dossier's ~25 content corrections (stale valuation and quarters, ">60% share" → 46.8%, nine → eight CRAs, S&P split, CY23 figures, Coalition 2012, PriceMetrix, Ratings segment ≠ Crisil Ratings Ltd, RBI 2026 rules, payout 58.2%, etc.). Not fixed (primers are out of scope).

## Publish entry
{"key":"Ratings || Ratings","name":"Credit Ratings & Research","slug":"ratings","accent":"#0909B3","noun":"rating agencies","hook":"Bonds down, raters up: how India's eight licensed rating agencies earn 50–60% margins on an issuer-pays opinion, why ratings revenue grew in 2026 as bond issuance shrank, how RBI's 2027 risk-weight rules put agencies' default records on trial, and how CRISIL's S&P-linked research engine sets its fortunes.","tags":["Bonds down, raters up","RBI 2027 risk weights","The IL&FS scar","CRISIL's global research engine"]}
