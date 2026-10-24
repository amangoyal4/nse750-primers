done 2026-10-24T09:17:49Z · branch claude/ss-fintech · report subsectors/fintech.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 77 KB; 36/40 figures verified from primary sources — non-primary: UPI MDR rate terms (circular not fetchable; Paytm Reg-30 filing confirms circular no. and deferral), the Aug-2026 s.10A PSS Act amendment (news coverage), UPI app shares (secondary), share-price closes (screener); dossier total 220 KB)

## Checks (re-run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 22681 prose words · 31048 total words · 309 KB`
- Audit: 22 sections (target 18–24) · 22,681 prose words (floor 14,000; hospitals 19,815) · 65 chart blocks (41 bar, 9 stacked share bars, 3 positioning maps, 7 flows, 5 timelines) · 18 tables · 27 "In plain terms" callouts · 1 heat map · 5 cards (154–173 words) · KPI masterclass 4,966 prose words, 17 h3 · TOC 22/22 · banned phrases none · "honest" 0 · no CONTINUE marker · no [V]/[K]/[E] tags · 20× "illustrative", 52× "indicative". Sections with no chart/table: p16 (cards), p19 (bull/bear).
- Render: RENDER PASSED (Playwright preinstalled; scrollW 1024/375 = width; issues []; rotatedOps 0; h1 2 lines at 1024).
- peersum: All five members ✓, Ex-Paytm ✓, Ex-AvenuesAI ✓ on every summed column.
- Spot checks: cover/stat strip (UPI 241.62 bn = 24,162 crore ✓); peer table + notes; Paytm and Pine Labs cards; anatomy table (all lines, margins, MDR option +₹648 and paybacks 1.8 yr / ~4 months re-computed ✓); map 1 coordinates vs data ✓. One fix by orchestrator: Pine Labs peer cell now reads "15.8 bps (FY26); CM 72% (Q1 FY27)" (FY26 CM is 75%).

## Sections (deep dives marked DD)
00 The one-page view: five businesses, one free rail · 01 How the money moves: a payment, a policy and a loan · 02 The flows, sized: ₹314 lakh crore of UPI and a shrinking card terminal · 03 DD Free UPI and the MDR that almost came back · 04 The regulator sets the price · 05 DD The commission cliff: IRDAI's paper and the insurance marketplace · 06 Profit without a take rate: cost cuts, mix and the interest on IPO cash · 07 Credit: the pro-cyclical engine · 08 Who owns the market: two foreign apps, a dozen private rivals and five listed firms · 09 Five business models, five ways to monetise a flow · 10 DD Paytm's two-year round trip · 11 Who sells the shares: promoter-less registers and departing foreign capital · 12 Twenty-five years, four cycles: build, list, crash, re-price · 13 DD (KPI) Thin slices of huge flows: reading a fintech without being fooled · 14 The peer table: five companies on one basis · 15 Who is winning: scale, take rate, earnings quality and price · 16 Five company profiles · 17 The global lens · 18 Technology and disruption: UPI eats the terminal, AI eats the cost base · 19 Bull vs bear: operating leverage against the regulator's pen · 20 What to watch: results season, the MDR date and IRDAI's final word · 21 Glossary

## h1
Indian fintech: <em>thin slices of a free rail</em>

## Forces
1. The state made the rail free — UPI zero-MDR, an incentive still ~₹2,000 Cr/yr (FY25 actual ₹1,922.77 Cr; FY26 RE ₹2,196.21 Cr; FY27 BE ₹2,000 Cr), the Aug-2026 s.10A PSS Act amendment and NPCI circular OC-No.237/2026-27 (15-Sep-2026; 0.4% on P2M > ₹2,000), deferred 13-Oct to "after Diwali, date to be notified".
2. The regulator sets the price — RBI PA directions, digital-lending rules/5% DLG cap, NPCI, IRDAI's 23-Sep-2026 commission/EoM paper (PB −36.0% on 24-Sep).
3. Profit from cost cuts, mix and treasury income, not take rate — other income 67% of combined FY26 PBT; adjusted EBITDA excludes ESOP.
4. Credit distribution is the pro-cyclical profit engine (Paytm FS +45% Q1 FY27; Paisabazaar Q1 FY27 disbursals −38% YoY).
5. Promoter-less registers and departing foreign holders set share supply (Ant out of Paytm; PB FII 37%→27%).

## Peer combined rows (as printed; FY26, ₹ Cr; reported consolidated PAT; net = screener investments − borrowings; m-cap 23-Oct-2026)
| Row | Rev | OP | Other inc | PAT rep | PAT pre-exc | Q1 rev | Q1 PAT | Net inv−borr | M-cap | P/E TTM | P/B |
|---|---|---|---|---|---|---|---|---|---|---|---|
| All five members | 27,966 | 1,903 | 1,301 | 1,769 | ~1,960 | 8,176 | 506 | 7,128 | 1,74,669 | 88.4× | 4.9× |
| Payments companies (Paytm, Pine Labs, AvenuesAI) | 19,264 | 1,210 | 887 | 960 | ~1,151 | 5,865 | 325 | 4,300 | 1,25,678 | 114.6× | 4.7× |
| Ex-Paytm (PB, Pine Labs, AvenuesAI, Zaggle) | 19,529 | 1,402 | 633 | 1,217 | 1,220 | 5,728 | 286 | 2,799 | 70,898 | 53.5× | 3.7× |
| Ex-AvenuesAI (no gross-up) | 19,850 | 1,552 | 1,215 | 1,474 | ~1,665 | 5,496 | 421 | 6,744 | 1,70,611 | 103.2× | 5.6× |
Hand-check of "Payments companies" (not auto-checked): 8,437+2,711+8,116 = 19,264; 501+358+351 = 1,210; 668+133+86 = 887; 552+113+295 = 960; ~740+116+295 = 1,151; 2,448+737+2,680 = 5,865; 220+20+85 = 325; 4,329−413+384 = 4,300; 1,03,771+17,849+4,058 = 1,25,678 ✓. Ratios of sums: OPM 6.3%, OI÷PBT 887/1,060 = 84%, ROE 960/26,668 = 3.6%, P/B 1,25,678/26,668 = 4.7× ✓. P/B of all five 1,74,669/35,384 = 4.9× ✓; ex-AvenuesAI 1,70,611/30,638 = 5.6× ✓; ex-Paytm 70,898/19,358 = 3.7× ✓. Dossier §3.2 aggregates re-added independently ✓ (no arithmetic errors found).

## Labelled illustrative / indicative
UPI MDR pool (₹8–11k Cr) and Paytm MDR sensitivity/run-rate (~₹880 Cr PAT, ~118×); PB core-business stress under draft IRDAI caps; ₹10 lakh Cr platform worked example; small-merchant soundbox unit anatomy; card-swipe vs UPI split arithmetic; ED residual ~₹72 Cr; Paytm pre-exceptional PAT ~₹740 Cr and pre-ESOP EBITDA ~₹676 Cr; Paytm device revenue; PB insurance revenue/take (~21%); Zaggle ESOP (~₹7 Cr) and gross-profit pool; PB Q1 OI÷PBT (~52%); Paytm FY26 GMV (~₹24 lakh Cr); all benchmark ranges; global peer multiples (aggregator data); UPI app shares (secondary); PhonePe speaker count; PSP cost per transaction; digital-lending pool.

## Could not source / reconcile
Paytm loan-disbursal value (no longer disclosed); UPI P2M share of value and share above ₹2,000 (NPCI blocked); PB new vs renewal premium split; who sold PB's FII stake (only ICICI Pru MF's buy identified); presidential assent/notification of the s.10A amendment; UPI MDR start date (none set); reason RBI PoS terminal count fell 119.65 → 102.08 lakh; AvenuesAI ESOP; PB company-basis cash; Pine Labs adjusted-EBITDA add-backs sum to ~₹564 Cr vs ₹559 Cr reported (shown net). Writer corrected dossier errors: Paytm GMV figures are quarterly, not annual (dossier's ~71 bps take rate and "₹28.7 lakh Cr / 3.3 bps" were wrong); PB ₹1,003 Cr renewal revenue is TTM; OCF÷EBITDA ratios recomputed on screener OP.

## Primer-audit
| Primer | Words | Hard checks | Notes |
|---|---|---|---|
| pb-fintech.html | 6013 | ❌ banned ("no margin for error" ×2, "a long way to fall") | no main{min-width:0} |
| paytm.html | 6899 | ❌ banned ("no margin for error", "a long way to fall") | no main{min-width:0} |
| pine-labs.html | 4991 | ✅ | no main{min-width:0} |
| avenuesai.html | 6535 | ✅ | no main{min-width:0} |
| zaggle.html | 6364 | ✅ | no main{min-width:0} |
Logged in _cloud/fintech-primer-issues.md (not fixed).

## Results status
No member has reported Q2 FY27 (Sep-26) as of 24-Oct-2026. Paytm board 26-Oct (call 27-Oct); Pine Labs board 29-Oct; PB Fintech, AvenuesAI, Zaggle not announced (SEBI deadline 14-Nov-2026). IRDAI comments due 25-Oct-2026. The report should be refreshed after these prints.

## Publish entry
{"key":"IT || Financial Technology (Fintech)","name":"Fintech","slug":"fintech","accent":"#4338CA","noun":"fintechs","hook":"Thin slices of a free rail: how PB Fintech, Paytm, Pine Labs, AvenuesAI and Zaggle earn a few basis points on payment, insurance and credit flows worth hundreds of lakh crore, why zero-MDR UPI and IRDAI's commission caps set their prices, and why FY26's first profits leaned on treasury income.","tags":["Free UPI and the MDR that almost came back","The commission cliff: IRDAI's paper","Paytm's two-year round trip","Thin slices of huge flows: the KPIs"]}
