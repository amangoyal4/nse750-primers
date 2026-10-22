done 2026-10-22T17:48:15Z · branch claude/ss-education · report subsectors/education.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 77 KB; 38/40 figures verified from primary sources — the two secondary rows are the 2026 exam pools (NTA/UPSC sites blocked; press reports) and the MoE coaching-guideline details (MoE / India Code PDFs blocked; secondary summaries))

Claimed 2026-10-22T16:36:55Z (new item; gate count at claim = 1 in progress: shipbuilding). Network: curl to screener/BSE 200; WebFetch to screener returned 503, so all screener data was pulled with curl (generic UA).

## Checks (re-run by the orchestrator)
- Gate: GATE PASSED: 27/27 checks · 22661 prose words · 30827 total words · 308 KB
- Audit (tier C): prose 22,661 (benchmark 19,815) · 24 sections · 4 deep dives · KPI masterclass 4,440 prose words / 19 h3 · 65 chart blocks (43 bars, 8 stacked, 3 maps, 6 flows, 5 timelines) + 1 heat map · 22 tables · 29 callouts · 2 cards (173–177 words) · TOC 24/24 · banned phrases none · "honest" 0 · stat strip ₹-only · no CONTINUE marker · 32× "illustrative", 55× "indicative". Section without a chart/table: p21 (bull vs bear, prose).
- Render check: RENDER PASSED (1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375: scrollW 375, issues [], rotatedOps 0). Playwright 1.47.2 pointed at the preinstalled chromium headless shell. Fixed before passing: the exam-headroom map's top quadrant labels overlapped the JEE/NEET dots (moved above the plot).
- peersum: All-members row ✓ on all 7 summed columns (revenue FY26, OP, PAT, net cash, m-cap, Q1 FY27 revenue, Q1 FY27 PAT).
- Spot-checks: cover/stat strip; peer table + basis note + reading guide; both cards; the ILLUSTRATIVE Vidyapeeth unit P&L (students × ₹40,000; faculty ₹1.2 Cr + ₹13,000/student; materials ₹0.3 Cr + ₹7,000/student; EBITDA −0.40/0.30/0.70/1.10, margins −7.7/4.7/9.7/13.75% — all reconcile); all 3 maps' coordinates vs data. Fixes: Crizac FY26 dot on the volume-vs-yield map moved from +8.2% to +7.8% revenue per enrolment (₹1,042.2/849.5 Cr ÷ 24,697/21,710 enrolments); "doubled its share of UK study visas" (3 places) → "from 3.5% to 6%" (it is +71%, not ×2).

## Sections (DD = deep dive)
p0 The one-page view: two businesses, one family's ambition · p1 Two value chains: a ₹4,000 app and a £3,700 commission · p2 Size of the prize · p3 The exam machine (headroom map) · p4 Seven weeks in May (NEET-UG 2026) · p5 Where ₹100 goes · p6 The edtech bust and the incumbents · p7 Five business models, five margin structures · p8 Online to offline: PW's hybrid bet · p9 DD PW's offline gamble: the economics of one Vidyapeeth centre · p10 DD The four EBITDAs of PhysicsWallah · p11 Who regulates coaching: conduct rules, not a ban · p12 DD Crizac and the UK visa machine · p13 Beyond the UK: four destinations closing, and the IDP mirror · p14 Booms, busts and shocks (timeline) · p15 DD KPI masterclass · p16 The peer table · p17 Who is winning (volume-vs-yield map, heat map) · p18 Company profiles · p19 Cash, treasury and what the market is paying (P/S-vs-margin map, global peers) · p20 AI and disruption · p21 Bull vs bear · p22 What to watch (Q2 FY27 for both: date not yet announced, due by 14-Nov-2026) · p23 Glossary

h1: Indian education: <em>the exam gate and the visa gate</em>

## Forces
1. Test-prep demand is an exam-pool and exam-policy machine (flat NEET pool, record JEE, NEET-UG 2026 leak and re-test, NTA reform, computer-based NEET from 2027).
2. Online to offline: PW's hybrid bet (offline pre-Ind AS EBITDA −₹106 Cr in Q1 FY27; 2022–24 cohorts EBITDA-positive; roll-out now "opportunistic").
3. The edtech bust and the incumbents (Byju's, Unacademy → upGrad, Allen, Aakash/Manipal, Kota halving).
4. Regulation of coaching: conduct rules, not a ban (MoE Jan-2024 guidelines, Rajasthan Act 16 of 2025, dummy schools).
5. Visa politics as Crizac's demand curve (UK BCA thresholds, Graduate Route to 18 months from 1-Jan-2027, £925 levy from 2028-29, OfS deficits; Canada/Australia/US caps) — Crizac gaining share of a shrinking market.
6. Cash, treasury and price: PW ~9× sales vs global peers 0.3–1.8×; Crizac ~11× earnings, 5.6% yield.

## Peer combined row (as printed; basis screener consolidated FY26, reported PAT incl. minority; m-cap 22-Oct-26; net cash = company treasury/free cash Jun-26 − borrowings ex-leases; PW equity from FY26 AR)
- All members | 4,942 | +32.3% | 656 | 13.3% | 195 | ROE 3.8% | net cash 6,160 | m-cap 38,719 | P/E 198.6×ᵐ (flagged meaningless) | P/B 7.6× | EV/OP 49.6× | Q1 rev 1,255 | Q1 PAT −42 | native KPIs n/a
- Hand-check: 3,900+1,042=4,942 ✓ (FY25 2,887+849=3,736 → +32.3% ✓); 370+286=656 ✓ (13.3% ✓); −24+219=195 ✓; 5,591+569=6,160 ✓ (5,601−10.5; 571.1−1.5); 36,231+2,488=38,719 ✓; 1,054+201=1,255 ✓; −88+46=−42 ✓; ROE 195/(4,520+585)=3.8% ✓; P/B 38,719/5,105=7.6× ✓; EV/OP (38,719−6,160)/656=49.6× ✓; P/E 38,719/195=198.6× ✓. Company rows: PW ROE −24/4,520=−0.5%, P/B 8.0×, EV/OP 82.8× ✓; Crizac ROE 219/585=37.4%, P/E 11.4×, P/B 4.3×, EV/OP 6.7× ✓.
- No subgroup rows (2 members). Ownership shown per company only (no averages).

## Labelled illustrative / indicative
Rupee conversions of Redseer's USD test-prep market (~$14.8bn; USD only in body text); the Vidyapeeth unit P&L, its J-curve, cost split, sensitivities and cohort breakdown; the anatomy of one Crizac enrolment and £ conversions of revenue per student; Crizac commission rate (~15–20% of first-year tuition, an estimate); FY27 guidance arithmetic (PW ~₹5,070 Cr revenue / ~₹1,100 Cr EBITDA; Crizac EBITDA ₹260–281 Cr, PAT ₹200–215 Cr); Crizac sensitivities and receivables stress case; Kota +20–30% admissions (industry claim); PW headroom map (company TAM framing); global peer multiples and the P/S-vs-margin map; IDP per-placement value in ₹ and FY27 plan point; benchmark ranges, heat-map scores and watch-list thresholds; FY30 valuation checks; Crizac MPS overhang (~₹125 Cr); Crizac Q2 FY27 range; PW lock-in dates; every KPI worked example. MBBS (~1.1–1.2 lakh) and IIT (17–18k) seat counts are marked approximate.

## Figures not sourced / not reconciled
- PW FY26 segment split: online ~27% margin is a management estimate; the FY26 AR reports one segment; the offline + others FY26 loss (~₹228 Cr) is derived.
- PW offline revenue per student: company ₹36,625 vs ~₹37,900 from revenue ÷ year-end students (definitional gap, stated).
- PW's Q1 FY27 shareholders' letter (BSE/IR copy) carries a stray cover label "DRAFT · ILLUSTRATIVE FIGURES"; its numbers match the filed results and screener (revenue ₹1,054 Cr, PAT −₹88 Cr). Not mentioned in the report.
- Crizac commission rate and agent-payout currency not disclosed.
- Q2 FY27 board dates not announced by either company (BSE announcements API returned Access Denied); report says "due by 14-Nov-2026".
- Exam pools (JEE, CUET, UPSC, NEET 2026) from secondary reports (NTA site blocked); MoE guideline details from secondary summaries; Rajasthan rules under the 2025 Act not found as notified.
- Allen FY25 growth (~0%, "marginal decline") and Aakash figures from press reports; Chegg 2024 revenue derived from the reported −39%; China "double reduction" history from memory (not re-fetched).

## Primer audit (primer-audit.mjs)
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| physicswallah.html | 70 | 5712 | 17 | 12 | 13 | 0 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} (phone overflow) |
| crizac.html | 75 | 6713 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} (phone overflow) |
Pre-existing failures logged in _cloud/education-primer-issues.md (not fixed), together with the research corrections from §3.4 and Part 4 §4.5. PW: EBITDA ladder (₹549 Cr includes other income; screener OP ₹370 Cr); debt is ₹10.5 Cr (screener's ₹824 Cr "preference capital" is converted CCPS), equity ₹4,520 Cr; "72/116 centres profitable" unsupported; Q1 FY26 was a loss; ownership (WestBridge 5.84%); IPO objects; disputed ~₹192 Cr tax demand; the earlier "treasury wrong" issue is withdrawn. Crizac: a copy-paste leftover from another primer in §07 ("Paradeep's year…"); UK share 98.7%; stale valuation; dividend; network figures; working capital overstated; related-party history; ESOP pool ~7%.

## Publish entry
{"key":"Business Services || Education","name":"Education","slug":"education","accent":"#578627","noun":"education companies","hook":"The exam gate and the visa gate: how PhysicsWallah turns a ₹4,100 app and a ₹36,000 classroom seat into ₹3,900 crore of revenue, how Crizac turns a British university's commission into a 27% margin, and why NTA exam calendars and UK visa rules set the volume for both.","tags":["The economics of one Vidyapeeth centre","The four EBITDAs of PhysicsWallah","Crizac and the UK visa machine","KPI masterclass"]}
