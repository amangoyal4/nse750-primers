claimed 2026-10-21T18:49:35Z, in progress (upgrade)

# BPO & KPO — STATUS

**Sourcing caveat (read first):** this environment's network policy blocked every page fetch (screener.in, bseindia.com, nseindia.com, company and news sites all returned 403 at the proxy; WebFetch could not resolve hosts). Only WebSearch worked. So **no figure in this report comes from a fetched page**. FY26 figures come from our primers, cross-checked against search results that quote company press releases and NSE filings. Q1 FY27 figures, ownership and market caps come from search results only. Under the library sourcing rule they are **unverified**, and the report says so (stat-strip note, peer note, footer). Market caps are labelled INDICATIVE and dated 27-Jul to 9-Oct-2026; the eClerx price is undated. **Before publishing, the owner should re-pull screener for all five (m-cap, P/E, net debt, EBITDA).** To let future runs fetch pages, the environment's Network access setting needs these domains allowed.

## Gate (last line)
GATE PASSED: 27/27 checks · 20338 prose words · 29371 total words · 302 KB

## Audit totals
- 23 sections; prose 20,338 words (KPI masterclass 4,608 words, 19 h3s).
- 61 charts: 40 bar, 8 stacked share bars, 3 positioning maps, 6 flows, 4 timelines.
- 18 tables (plus 1 heat map), 28 "In plain terms" callouts, 5 deep dives, 5 profile cards (163–180 words each).
- No thin sections; tags balanced; banned phrases 0; "honest" 0; stat strip ₹ only; 35× "illustrative", 103× "indicative".
- Every table is wrapped; footer.src li has overflow-wrap:anywhere.
- Cross-links resolve (it-services, erd-services, software-products, hospitals, pharma-diversified-majors); pharmaceuticals.html is not linked.

## Render check
RENDER PASSED. At 375 and 1024: scrollW = width, issues = [], rotatedOps 0, h1lines 3.
Playwright 1.47.2 with the pre-installed headless shell; Chromium 1194 was aliased as 1134 in /tmp/rc/pwb.

## Sections (DD = deep dive)
00 The one-page view: five ways to sell skilled hours to America
01 How the money is made: renting judgement by the hour, the claim and the outcome
02 A ₹5 lakh crore industry in which the listed five are a rounding error
03 Who buys, and why now: the end-markets behind the growth
04 Where ₹100 of revenue goes
05 Industry structure: fragmented, global, and owned by private equity
06 Five archetypes: why revenue per head varies four-fold and margins three-fold
07 GenAI and the death of the seat (DD)
08 US healthcare's admin-cost machine: payer vs provider (DD)
09 The rupee, the margin and the hedge book (DD)
10 Roll-ups and goodwill: how the 2024 cohort was built (DD)
11 Who owns the float: private-equity exits and the supply of stock
12 Rules of the game: the regulators are in Washington, London and Brussels
13 Twenty-six years, five shocks
14 Reading a BPM company: the KPI masterclass (DD, data-kpi="1")
15 The peer table
16 Who is winning: margin, multiple and balance sheet
17 Five company profiles
18 The global lens
19 Technology beyond the chatbot
20 Bull vs bear
21 What to watch: the Q2 FY27 season and the US calendar
22 Glossary

## h1
Indian BPO &amp; KPO: <em>people-hours meet the AI agent</em>

## Forces
1. GenAI/agentic AI is repricing the "seat"; contract structure (FTE vs transaction vs outcome) decides who wins.
2. US healthcare admin is the profit pool and US health policy is the macro variable (payer vs provider; MA 2027 rate; OBBBA Medicaid).
3. Rupee, margin and hedges: Q1 FY27 growth was +26% in ₹ but only ~12–15% in constant currency, and the FX tailwind was absorbed by costs.
4. Concentration plus M&A roll-ups and goodwill (IKS–TruBridge, Indegene, Firstsource bolt-ons).
5. PE exits and the 2024 IPO cohort's premium multiple vs shrinking global peers.

## Peer combined rows (as printed) and hand-check
| Row | Rev FY26 | EBITDA | Rep. PAT | Adj. PAT | Net cash/(debt) | M-cap | P/E rep. | Q1 rev |
|---|---|---|---|---|---|---|---|---|
| All five combined | 27,671.1 | 6,237.9 | 3,427.5 | 3,857.6 | (4,553) | 1,01,748 | 29.7× | 7,815.3 |
| Healthcare-focused (IKS + Sagility) | 10,386.8 | 2,906.0 | 1,646.4 | 1,939.6 | (5,640) | 50,822 | 30.9× | 2,857.1 |
| 2024 IPO cohort (IKS + Sagility + Indegene) | 13,897.3 | 3,585.3 | 2,047.5 | 2,397.6 | (4,102) | 65,822 | 32.1× | 3,920.2 |
| Ex-Firstsource | 18,114.7 | 4,737.9 | 2,753.5 | 3,103.6 | (2,843) | 82,847 | 30.1× | 5,090.4 |
| Net-cash members (Indegene + eClerx) | 7,727.9 | 1,831.9 | 1,107.1 | 1,164.0 | 2,797 | 32,025 | 28.9× | 2,233.3 |

- peersum ✓ on every column for "All five" and "Ex-Firstsource".
- I re-added the other three subgroups column by column with a script and they match. Growth, margin, P/E and m-cap ÷ revenue are all ratios of sums (e.g. Healthcare margin 2,906.0 ÷ 10,386.8 = 28.0%; P/E 50,822 ÷ 1,646.4 = 30.9×; Net-cash Q1 growth 2,233.3 ÷ 1,706.1 = +30.9%).
- One PAT basis throughout: reported PAT, with adjusted PAT in its own column.
- The EBITDA basis is mixed by company, which the peer note states (IKS/eClerx reported, Sagility/Indegene adjusted, Firstsource INDICATIVE from EBIT).
- Spot checks done:
  - margin-vs-growth map: all five dot coordinates match the data;
  - 1,000-FTE anatomy table: ₹187.0 Cr revenue − ₹136.7 Cr costs = ₹50.3 Cr EBITDA (26.9%); EBIT 44.0; PAT 32.9; ROCE 77%. Every line adds up;
  - cover and stat strip, peer note, Sagility card.

## Labelled ILLUSTRATIVE / INDICATIVE
- **Worked examples:** 10,000-FTE vendor equation, 100-FTE GenAI pricing example, 1,000-FTE delivery-centre P&L.
- **Composites and scores:** ₹100 composites, end-market and payer/provider splits, BPM share split, policy, end-market and heat-map scores, KPI benchmark ranges.
- **Market caps:** all market caps and the multiples built on them.
- **Company figures:**
  - Firstsource EBITDA (~₹1,500 Cr, from EBIT);
  - IKS post-TruBridge net debt (~₹5,000 Cr; ~3× pro forma EBITDA);
  - Sagility net debt (~₹640 Cr);
  - IKS ~$360m and Indegene ~$398m USD revenue;
  - IKS FY24 ~₹1,817 Cr (RHP, from memory);
  - FY27E;
  - the eClerx hedge-loss inference.
- **Industry sizes from memory:** US admin cost ~$1tn, global BPO ~$300bn, RCM market.
- **Third-party data:** global peer P/Es, Gartner survey, staff-cost and billing-rate ranges.

## Could not source or reconcile
- **Verification:** every figure is unverified in the library sense (no fetched page), as above.
- **Conflicts:**
  - Sagility net debt: the Mar-25 figure of ₹2,168 Cr conflicts with "$71.5m TTM Dec-25".
  - Indegene Q1 FY27 EBITDA margin: 16.9% vs 16.4%.
  - IKS leverage: the dossier's "2–2.5×" does not reproduce from its own numbers; the writer used ~3×.
  - Rupee record low: ₹96.8 per the brief vs ₹96.3 in one source.
- **Not available:**
  - DSO, utilisation, goodwill ÷ equity, Firstsource reported EBITDA;
  - IKS current headcount;
  - Sagility and IKS attrition;
  - Firstsource and IKS concentration;
  - pricing-mix disclosure.
- **Open policy points:** whether the H-1B proclamation was extended past 20-Sep-2026; HIRE Act status after Apr-2026.
- **Errors found in the queue angle and corrected in the report:**
  - Sagility is EQT-owned (ex-HGS), not KKR/Birla.
  - The TaskUs take-private failed.
  - IKS bought AQuity in Oct-2023.
  - No "QualfonX" deal exists.

## Results status
- None of the five had reported Q2 FY27 by 21-Oct-2026.
- Board dates:
  - Sagility: 22-Oct-2026.
  - Indegene: 29-Oct-2026.
  - IKS, Firstsource, eClerx: not announced (deadline 14-Nov-2026).
- Sagility reports tomorrow, so its Q2 numbers will post-date the report.

## Primer-audit
| Primer | Hard checks | Notes |
|---|---|---|
| inventurus-knowledge-solutions.html | ❌ bars<10, banned, USD-in-strip | no main{min-width:0} |
| sagility.html | ❌ bars<10, USD-in-strip | no main{min-width:0} |
| firstsource-solutions.html | ✅ | no main{min-width:0} |
| indegene.html | ❌ USD-in-strip | no main{min-width:0} |
| eclerx-services.html | ❌ USD-in-strip | no main{min-width:0} |

These are logged in _cloud/bpo-kpo-primer-issues.md, together with the content corrections from the dossier (§3.4).

## Publish entry
{"key":"IT || Business Process Outsourcing (BPO)/ Knowledge Process Outsourcing (KPO)","name":"BPO & KPO","slug":"bpo-kpo","accent":"#1A2693","noun":"outsourcers","hook":"People-hours meet the AI agent: how India's five listed BPO/KPO firms turn US claims queues, physician paperwork, pharma marketing and bank operations into profit, why GenAI is repricing the seat, how US health policy and the rupee move earnings, and what the 2024 IPO cohort's premium buys.","tags":["GenAI and the seat","US healthcare admin","Rupee and hedges","Roll-ups and goodwill"]}
