done 2026-10-25T10:00:51Z · branch claude/ss-railway-wagons · report subsectors/railway-wagons.html (unpublished — publish.mjs not run, no PR)
deep-research: done (Part 4 74 KB; 37/40 figures verified from primary sources)

# Railway Wagons & Rolling Stock — STATUS

**Gate:** GATE PASSED: 27/27 checks · 23021 prose words · 32199 total words · 322 KB
**Audit totals:**
- prose 23,021 (floor 12,000; hospitals 19,815)
- KPI masterclass 4,535 words, 17 h3, 7 callouts
- 65 charts: 44 bar, 9 stacked, 3 maps, 7 flows, 2 timelines; plus 1 heat map
- 17 tables; 29 callouts; 24 sections; 3 cards (191–196 words)
- no thin sections; TOC 24/24; banned phrases none; "honest" 0; stat strip ₹-only; no CONTINUE
**Render check:** RENDER PASSED (rcheck.mjs; pre-installed Playwright Chromium):
- 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3
- 375: scrollW 375, issues [], h1lines 4
**Dossier:** _cloud/railway-wagons-industry.md, 202 KB total (Parts 1–3 128 KB; Part 4 74 KB, including Supersedes table §4.0 and verification table §4.1).

## h1
Railway wagons: <em>one buyer, one bottleneck, three escapes</em>

## Forces
1. IR's wagon procurement calendar is the master variable: national output 12.8k (FY22) → 41.9k (FY25 record) → ~32.5k (FY26, INDICATIVE); a ~1-lakh-wagon mega-tender is "deferred, not dropped".
2. The wheelset bottleneck and its localisation:
   - IR free-issue mandate; RWF ceiling ~94k wheelsets a year.
   - China imports.
   - Private wheel plants coming: RKFL–Titagarh 2.28 lakh wheels; Jupiter Odisha 1 lakh wheelsets.
3. Rail capex is high but plateauing, and wagons are a small slice: ₹2.93 lakh Cr FY27 BE, of which rolling stock ₹65,497 Cr; operating ratio 98.8%.
4. Three escape routes from one buyer:
   - Titagarh → passenger.
   - Jupiter → components + BESS.
   - Texmaco → EPC, exports and leasing.
5. Freight modal-share policy (NRP 45%, DFCs, GPWIS/leasing) is the long-run anchor; US tariffs (Sec 232 covers HTS 8607 parts) affect exports.

## Sections (DD = deep dive)
- 00 One-page view
- 01 How a wagon earns
- 02 Size & the 2022–25 boom
- 03 Master variable (IR calendar)
- 04 Rail capex & the wagon slice
- **05 The wheel is the wagon (DD)**
- 06 Where ₹100 goes
- 07 Who builds India's wagons
- **08 Three escape routes (DD)**
- 09 Freight share
- **10 Private owners & lessors (DD)**
- 11 Rules of the game / US tariffs
- **12 Order books that aren't what they seem (DD)**
- 13 Five decades of cycles
- **14 KPI masterclass (DD, data-kpi)**
- 15 Peer table
- 16 Who is winning (3 maps + heat map)
- 17 Company profiles
- **18 The ₹700 crore question and other audit flags (DD)**
- 19 Global lens
- 20 Technology & disruption
- 21 Bull vs bear
- 22 What to watch
- 23 Glossary

## Peer combined rows (as printed; ₹ Cr; screener consolidated FY26; reported consolidated PAT; screener net debt; m-cap 23-Oct-26)
| Row | Rev | Growth | OP | OPM | PAT | Net debt | M-cap | P/E FY26 | P/E TTM | EV/EBITDA | Order book | Wagons FY26 | Wagons Q1 FY27 | B2B |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Combined: all members | 10,479 | −19.0% | 1,076 | 10.3% | 483 | 635 | 20,352 | 42.1× | 36.1× | 19.5× | 27,808 | 20,889 | 3,479 | 2.7× |
| Wagon pure-plays ex-Titagarh | 7,293 | −19.6% | 745 | 10.2% | 360 | 608 | 11,418 | 31.7× | 30.4× | 16.1× | 14,473 | 13,870 | 2,195 | 2.0× |
| Ex-Texmaco | 6,102 | −22.1% | 685 | 11.2% | 289 | 345 | 16,344 | 56.6× | 46.8× | 24.4× | 17,885 | 12,517 | 2,425 | 2.9× |
| Ex-Jupiter | 7,563 | −15.7% | 722 | 9.5% | 317 | 317 | 12,942 | 40.8× | 32.2× | 18.4× | 23,258 | 15,391 | 2,338 | 3.1× |

**Hand-check:**
- peersum ✓ on every combined row and every summed column.
- I re-added every subgroup column by hand: revenue, OP, PAT, net debt, m-cap, order book, wagons FY26 and wagons Q1. All equal their sums.
- Ratios are recomputed as ratios of sums:
  - OPM = ΣOP ÷ Σrev.
  - P/E = Σm-cap ÷ ΣPAT; TTM PAT is T 188 / J 161 / X 214.
  - EV/EBITDA = (Σm-cap + Σnet debt) ÷ ΣOP.
  - B2B = Σorder book ÷ Σrev.
  - Growth uses the FY25 sums (12,938 / J+X 9,070 / T+J 7,831 / T+X 8,975).
- The dossier's §3.2 aggregates were also re-added: no arithmetic errors.
- One basis everywhere: reported consolidated PAT. Titagarh's ~167 pre-exceptional figure appears in its own column only and is used in no total.

**Orchestrator fixes:**
- Texmaco "net debt ÷ OP" in the KPI scorecard changed from 1.1× (company ₹444 Cr) to 0.7× (screener ₹290 Cr) to match the peer-table basis; the note under the scorecard was updated.
- The writer recomputed the dossier's wrong CFO/OP ratios (correct: 97% / 3% / 93%; group 64%) and the combined TTM P/E (36.1×, not 36.2×).

**Spot-checks done:**
- Cover and stat strip: 6 ₹ cells.
- Peer notes.
- Titagarh and Jupiter cards.
- KPI anatomy table (6,000-wagon shed): every line re-added; EBITDA 253.8, PAT 127.3, ROCE 20.8% consistent.
- KPI scorecard arithmetic.
- Map 1 (margin vs EV/EBITDA): dot coordinates match the data on both axes.

## Labelled ILLUSTRATIVE / INDICATIVE
- **FY26 output estimate:** FY26 national production ~32.5k and figures derived from it (non-IR wagons, run-rate, "others" share).
- **Single-source figures:**
  - the "40% below target" report
  - the China axle-import plan
  - the 2022 award residual for the other makers (~15,750, by subtraction)
  - Moneylife's ₹586 Cr
  - Hong Kong re-routing
- **Unit economics:**
  - the where-₹100-goes stacks
  - the per-wagon, metro-car and forged-wheel P&Ls
  - the 6,000-wagon shed anatomy and its ROCE sensitivity
  - the operating-leverage example
- **Wheels:**
  - the RWF ~23,600-wagon ceiling
  - the wheelset supply/demand charts, including FY29
- **Order books:**
  - the adjusted backlog (~₹25,005 Cr) and adjusted book-to-bill
  - the split of the passenger book into Vande Bharat and metro
  - Jupiter's order-book mix
  - quarters of wagon cover
- **Capacity and valuation:**
  - capacity and utilisation figures
  - the mega-tender per-wagon arithmetic
  - the wagon slice of capex
  - the US tariff stack
  - the leasing per-rake arithmetic
  - Texmaco's P/B and ROE without the provision
  - the KPI benchmark bands and heat-map scores
  - EBIT per wagon
  - FY28 bear/base/bull scenarios
  - global-peer P/E ranges
- **Global:** all global-peer currency conversions.

## Unsourced / unreconciled
- IR wagon fleet at Mar-26: IR Year Book URLs returned 404.
- Current freight modal share: secondary figure only, ~27–28%.
- FY20 production.
- IR's actual FY26 wagon additions: only RE 26,000 exists.
- National FY26 production: estimated from Jan–Nov 2025 = 33,703 (V-sec).
- 2022 award counts for Jupiter, Hindusthan Engineering and Oriental: only a residual by subtraction.
- Mega-tender status: no tender notice found.
- Whether IR will supply wheels free in the next tender.
- Status of the 2023 pause on private wagon applications.
- Kinet Vande Bharat sleeper contract value.
- Titagarh and Texmaco FY24 equity-raise sizes.
- Promoter pledges: the BSE API was blocked; screener shows none.
- Titagarh credit rating.
- Jupiter Odisha capex: ₹2,600 Cr (call) vs ₹3,000 Cr (AR). The report uses ₹2,600 Cr and flags the gap.
- Titagarh ~167 pre-exceptional PAT is a sum of quarters; the audited bridge is in Note 35A.

## Results status
- Latest data: FY26 and Q1 FY27 (Jun-26). None of the three has reported Q2 FY27.
- Titagarh board meets 29-Oct-2026.
- Jupiter and Texmaco dates not announced (expected early to mid November).

## Primer audit (primer-audit.mjs)
| Primer | KB | Words | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|
| titagarh-rail-systems.html | 74 | 6671 | 2026-06-30 | ✅ | no main{min-width:0}; 0 report links |
| jupiter-wagons.html | 82 | 7613 | 2026-06-30 | ✅ | no main{min-width:0}; 0 report links |
| texmaco-rail.html | 72 | 6301 | 2026-07-27 | ✅ | no main{min-width:0}; 0 report links |

The content errors in all three primers are logged in _cloud/railway-wagons-primer-issues.md. Main ones:
- Titagarh: FY26 revenue headline is really FY25; Firema has been sold.
- Jupiter: "net cash" claim is wrong; net debt is ₹318 Cr.
- Texmaco: the ₹700 Cr provision is misdescribed as a P&L charge.

## Publish entry
{"key":"Automobile & Ancillaries || Railway Wagons","name":"Railway Wagons & Rolling Stock","slug":"railway-wagons","accent":"#495057","noun":"wagon makers","hook":"One buyer, one bottleneck, three escapes: how Indian Railways' tender calendar drives Titagarh, Jupiter and Texmaco, why a wheelset shortage cut FY26 wagon output by a fifth despite record order books, and how each maker is escaping into passenger cars, components or exports.","tags":["The wheel is the wagon","Three escape routes","Order books that aren't what they seem","The ₹700 crore question"]}
