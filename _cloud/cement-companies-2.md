# Cement sub-sector — Company packs, batch 2 of 3

**Companies:** Ambuja Cements · ACC · Orient Cement · J.K. Cement · JSW Cement
**Compiled:** 13 Oct 2026 (Phase-1b company-pack subagent). All screener.in pages were fetched on 13 Oct 2026 with curl (consolidated and standalone) and parsed locally. Company releases were fetched as PDFs from nsearchives.nseindia.com (the archive host works; the nseindia.com site and the BSE API returned "Access Denied" to bots) or from adani.com.

**Tags:** [V] = verified this session from a page I fetched (URL given) · [K] = from memory, source named · [E] = my estimate or calculation (method given).

**Bases and conventions (read first)**
- "Screener EBITDA" means screener.in "Operating Profit" (Sales − Expenses). It excludes other income. "Company EBITDA" is the figure the company reports as "Operating EBITDA". Adani-group companies also publish a "normalised" figure that strips one-offs. Both bases are labelled.
- Screener "Sales" = revenue from operations. Company figures can differ a little (restatements, MSA reclassification).
- Net debt (screener basis) = Borrowings − Investments. That formula misses bank deposits and other cash, so the company-reported cash and net-debt figures are shown alongside wherever they exist.
- EV = market cap (13 Oct 2026) + net debt (basis stated). **For Ambuja consolidated, EV also adds the market value of the ACC and Orient minorities**, since Ambuja consolidates 100% of their EBITDA but owns only 50.05% and 72.66%.
- Market caps and prices are screener.in's "Current Price" and "Market Cap" on 13 Oct 2026.
- **Q2 FY27 (Sep-26 quarter) is not out for any of the five as of 13 Oct 2026.** Every screener quarter table ends at Jun-2026 [V]. The Adani companies reported Q1 in the last week of July and JK reported on 20 July, so on past patterns Q2 is likely from the third week of October onwards [K: FY26/FY27 results calendars].
- Industry context: GST on cement was cut from 28% to 18% with effect from 22 Sep 2025 (56th GST Council, 3 Sep 2025) [K: CBIC notification]. The West Asia conflict pushed up imported fuel, diesel and packing costs in Q4 FY26 and Q1 FY27: Ambuja quotes imported petcoke at US$135/t CFR (Jun-26) against $106 a year earlier, and diesel at ₹112/l against ₹81 [V: Investing.com summary of the Ambuja Q1 FY27 deck]. ACC and Ambuja guide industry demand growth of only **~5% for FY27** [V: ACC Q1 FY27 release]. JK cites 6–8% [V: PL note].

### ⚠ Consolidation perimeter: do not double-count Ambuja, ACC and Orient
- **Ambuja consolidated** (screener `AMBUJACEM/consolidated`) = Ambuja standalone (which since FY26 includes the merged Sanghi Industries and Penna Cement) + ACC (50.05% owned) + Orient Cement (72.66%, consolidated from about May 2025, i.e. 11 months of FY26) + RMX and other subsidiaries. **FY26 consolidated volume of 73.7 MT and capacity of 109 MTPA are the whole Adani cement group.** [V: Ambuja FY26 release; Q4 call summary on scanx]
- **ACC's and Orient's own figures sit inside Ambuja consolidated.** Never add ACC's 43.9 MT or Orient's ~6.6 MT to Ambuja's 73.7 MT.
- ACC's own volume also includes cement bought from Ambuja under the inter-company Master Supply Agreements (MSA). That is why ACC's 43.9 MT in FY26 is more than its ~40.4 MTPA of capacity. Since FY26, Orient has sold largely to or through Ambuja under an MSA: its packing-and-freight cost per tonne fell from ₹1,055 to ₹207 [V: Elara]. Intra-group volumes cancel out on consolidation.
- **Ambuja standalone** (screener `AMBUJACEM/`) FY26: Sales ₹25,062 Cr, Op. profit ₹2,961 Cr (OPM 12%), Net profit ₹3,558 Cr (boosted by tax write-backs: tax rate −205%) [V]. The company does not publish a standalone volume in its release, so **standalone EBITDA/t is not available** (unverified).
- **For the sub-sector report, use Ambuja consolidated for the Adani group. Show ACC and Orient only as listed sub-entities that are being merged away.**

---

## 1. Ambuja Cements — NSE: AMBUJACEM · BSE: 500425

**Fetched 13 Oct 2026.** Still listed. It is the Adani group's cement holding company and the transferee company in both pending amalgamations (ACC → Ambuja, Orient → Ambuja). Sanghi Industries and Penna Cement are already merged in: Sanghi was delisted with effect from 6 Apr 2026 [V: adani.com FY26 release].

### 1a. Standardised financials (consolidated)
Source: [V] https://www.screener.in/company/AMBUJACEM/consolidated/ (fetched 13-Oct-2026)

| ₹ Cr | FY24 | FY25 | FY26 | FY26 YoY | TTM (Jun-26) |
|---|---|---|---|---|---|
| Sales | 33,160 | 35,336 | 40,656 | +15.1% | 39,867 |
| Screener EBITDA (Op. profit) | 6,400 | 5,971 | 6,577 | +10.1% | 6,168 |
| OPM % | 19% | 17% | 16.2% | −0.7 pp | 15% |
| Other income | 1,401 | 2,646 | 516 | | 402 |
| Depreciation | 1,628 | 2,297 | 3,570 | | 3,683 |
| Net profit (reported) | 4,735 | 5,294 | 5,637 | +6.5% | 5,222 |
| Tax rate | 20% | 13% | **−71%** | | |
| Borrowings | 699 | 788 | 866 | | |
| Investments | 849 | 1,912 | 113 | | |
| Net debt (screener: Borr − Inv) | −150 | −1,124 | +753 | | |
| CFO | 5,646 | 2,237 | 5,362 | | |
| FCF (screener) | 1,685 | −6,293 | −594 | | |

**Company-reported figures** [V: Ambuja FY26 media release, 4 May 2026, https://adani.com/newsroom/media-releases/ambuja-delivered-highest-ever-annual-volume]
- FY26 revenue ₹40,656 Cr. **Normalised operating EBITDA ₹6,539 Cr** (16.1%), +31% YoY on a normalised basis (FY25 normalised ₹5,006 Cr). FY25 reported EBITDA of ₹5,971 Cr included an ₹826 Cr excise refund and a ₹138 Cr GST incentive.
- **Normalised PAT ₹2,647 Cr** (+17%) [V: scanx Q4 FY26 call summary]. Reported PAT of ₹5,637 Cr is inflated by deferred-tax and tax write-backs: screener shows the FY26 tax rate at −71%, and Q2 and Q4 FY26 at −175% and −252%.
- Cash and cash equivalents **₹1,770 Cr** at 31 Mar 2026. Net worth ₹71,846 Cr. "Debt-free", AAA/A1+ (CRISIL, CARE). At 30 Jun 2026: cash ₹844 Cr, net worth ₹71,954 Cr [V: Q1 FY27 release].
- **Net cash** ≈ 1,770 − 866 = **₹904 Cr (Mar-26)** and roughly **nil (Jun-26: ₹844 Cr cash against ~₹866 Cr borrowings)** [E]. The war chest has largely been spent on Penna, Orient and capex: Investments fell from ₹1,912 Cr to ₹113 Cr and "Other assets" from ₹26,566 Cr to ₹22,077 Cr [V: screener].

**Valuation, 13 Oct 2026** [V: screener top ratios]: Price **₹350**. Market cap **₹86,757 Cr**. 52-week high/low ₹589 / ₹341. Stock P/E **18.4×** (on reported EPS, inflated by tax credits). Book value ₹240, so **P/B 1.46×** [E]. ROCE 5.61%. ROE 8.85%. Dividend yield 0.57%.
- P/E on normalised FY26 PAT: 86,757 / 2,647 ≈ **32.8×** [E]. It is unclear whether the normalised PAT is stated before or after minorities, so treat this as approximate.
- **EV** = m-cap ₹86,757 Cr + ACC minority at market (49.95% × ₹21,350 Cr = ₹10,664 Cr) + Orient minority (27.34% × ₹2,314 Cr = ₹633 Cr) − net cash ₹904 Cr ≈ **₹97,150 Cr** [E]. **EV/EBITDA ≈ 14.8× FY26** (screener ₹6,577 Cr) or 15.8× TTM [E].
- Cross-check using the post-merger share count: 247.0 Cr Ambuja shares + 30.8 Cr new shares to ACC minorities (9.38 Cr ACC shares × 3.28) + 1.85 Cr to Orient minorities (5.62 Cr × 0.33) ≈ **279.6 Cr shares × ₹350 ≈ ₹97,900 Cr** pro-forma m-cap [E]. That agrees with the EV build above.
- **EV per tonne ≈ ₹97,150 Cr / 109 MTPA ≈ ₹8,900/t** (~US$102/t) [E]. That is about 55% of UltraTech's ~₹16,200/t (batch 1).
- The share price is **−41% from its 52-week high**. It made a new 52-week low of ₹341.3 on 12 Oct 2026 [search snippet, MarketsMojo; not fetched]. I found no single filing that explains the slide. It coincides with the sector de-rating (UltraTech and JK are also near their lows) and with the weak Q4 FY26 and Q1 FY27 prints. **Cause unverified.**

### 1b. Q1 FY27 (Jun-26 quarter)
Sources: [V] Ambuja Q1 FY27 media release, 28 Jul 2026, https://nsearchives.nseindia.com/corporate/AMBUJACEM_28072026142437_ACL_MediaRelease_28072026F.pdf. [V] screener quarters. [V] Investing.com deck summary, https://www.investing.com/news/company-news/ambuja-cements-q1-fy27-slides-value-strategy-lifts-margins-27-qoq-93CH-4817068

| Consolidated | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Sales volume (MT) | **17.1** | 18.4 | −7% | 19.9 |
| Revenue (₹ Cr) | 9,500 | 10,289 | −7.7% | 10,916 |
| Operating EBITDA (₹ Cr) | 1,589 | 1,961 | −19% | 1,465 |
| Margin | 16.7% | 19.1% | | 13.4% |
| **EBITDA/t (company)** | **₹931** | ₹1,069 | −13% | ₹735 |
| PAT (₹ Cr) | 660 (normalised 595) | 1,041 | −37% | 1,857 |
| Realisation/t, computed (revenue ÷ volume) | ₹5,556 | ₹5,592 | −0.6% | ₹5,485 | 
| All-in cost/t, computed (realisation − EBITDA/t) | ₹4,625 | ₹4,523 | +2% | ₹4,750 |
| "Net operating cost"/t (company definition) | ₹4,241 (−₹206 QoQ) | | | ₹4,447 |
| Freight & forwarding/t | ₹1,295 (−1% QoQ) | | | |
| Kiln fuel cost | ₹1.66/'000 kcal | ₹1.59 | | ₹1.61 |
| Power cost | ₹6.0/kWh | ₹5.9 | | ₹5.9 |
| Green power share | 34% | 28% | | 32% |
| Primary lead | 249 km | 269 km | | 262 km |
| Trade share / premium (% of trade) | 78% / 34% | 74% / 33% | | 74% / 36% |
| Clinker factor | 63.7% (−2.1 pp YoY) | | | |

- The volume fall is deliberate: management chose "value over volume" by exiting non-remunerative markets. Orient's volume fell 21% and ACC's 6.5% in the same quarter.
- Capex: FY27 plan ₹6,500 Cr, ~25% of it spent in Q1. Renewable capacity rose 75 MW to 973 MW, against a 1,122 MW target. Thermal substitution rate 7.1% [V: Investing.com].
- **Q2 FY27 results: not out** (screener ends Jun-26) [V].

### 1c. Cement KPIs (Adani cement group = Ambuja consolidated)

| KPI | Value | Source / basis |
|---|---|---|
| FY26 sales volume | **73.7 MT, +16%** (FY25 ≈ 63.4 MT [E: ₹5,006 Cr ÷ ₹789/t]) | [V] FY26 release |
| Capacity, current | **109 MTPA cement** (Mar-26 and 30 Jun 2026); **69 MTPA clinker**. FY26 added 10.7 MT grinding + 7 MT clinker | [V] Q1 release; scanx Q4 call |
| Capacity target | **119 MTPA by end-FY27**: Dahej 1.2, Salai Banwa 2.4, Bathinda 1.2 and Jodhpur 2.0 in trials; Kalamboli 1.0 and Warisaliganj 2.4 with trials in Q2. The May release said H1 FY27, so the target has slipped about two quarters. Maratha clinker line (4 MTPA) in 2027. **The 155 MTPA target has moved from FY28 to ~FY30**, and ~15 MT of debottlenecking has no date | [V] Q1 release; scanx Q4 call |
| "Effective" capacity | 117 MTPA after excluding 1.6 MTPA of high-cost Jamul and Sindri capacity | [V] FY26 release |
| Utilisation | FY26 ≈ **71%** [E: 73.7 ÷ ~103.5 MT average capacity]. Q1 FY27 ≈ **63%** annualised [E: 17.1 × 4 ÷ 109]. Sanghi ~57% and Penna ~46% in FY26 (targets 65–70% and 55–60% in FY27). Orient ran at full capacity | [V] scanx call; [E] |
| Realisation/t | FY26 ₹5,516 (₹40,656 Cr ÷ 73.7 MT, includes RMX and other revenue) | [E] |
| Total cost/t | FY26 ~₹4,400 ("~10% above internal target"). Q4 peak ~₹4,500. **FY27 guide ₹4,250**. FY28 ≤ ₹4,000. The ₹3,650 long-term target is retained, but its timeline has been extended | [V] scanx call; Investing.com |
| Power & fuel | Kiln fuel ₹1.61/'000 kcal and power ₹6.1/kWh in FY26. No P&F per tonne disclosed in the text | [V] FY26 release |
| Freight/t | Q1 FY27 ₹1,295. FY26 lead 261 km; direct dispatch 61% | [V] |
| EBITDA/t, company | FY26 **₹887** normalised (FY25 ₹789). Q4 FY26 ₹735. Q1 FY27 ₹931. Management says the base business (excluding acquired assets) makes ≥ ~₹800/t, i.e. the drag sits in Sanghi and Penna | [V] |
| EBITDA/t, computed | FY26 ₹6,577 Cr ÷ 73.7 MT = **₹892/t** (screener EBITDA, consolidated volume) | [E] |
| Green power | FY26 31%; Q4 32%; Q1 FY27 34%. ~60% targeted by FY28 (primer; not re-verified). 1,498 MW green capacity (RE + WHRS) expected by FY28 | [V] FY26 release, Investing.com |
| Capex | FY26 ~₹7,500 Cr. **FY27 ₹6,000–6,500 Cr**. Project IRR hurdle 18% | [V] scanx call |
| Capex/t | FY26: ~₹7,500 Cr against 10.7 MT grinding + 7 MT clinker ≈ **~₹7,000/t of grinding added**. This blends clinker and maintenance spend; the company gives no per-project costs [E] | [E] |
| Net debt/EBITDA | **Net cash** (≈ −0.1× at Mar-26, ~0× at Jun-26) | [E] |

### 1d. Segment mix
- Cement is nearly all of revenue. RMX EBITDA was ~₹300 Cr in FY26 (Q4 ₹102 Cr; ACC's 119 RMX plants carry most of it) [V: scanx; ACC releases]. Branding spend ~₹70/t. The premium-to-base price gap is ~₹20–25/bag for premium and ~₹50–55/bag for super-premium [V: scanx call].
- Channel: trade 78% in Q1 FY27. Premium products are 34% of trade sales. Blended cement 85% [V].

### 1e. Capacity by entity (group 109 MTPA, approximate)
- Ambuja standalone including Sanghi (~6.1 MTPA, Kutch) and Penna (~14 MTPA, South) ≈ 60 MTPA; ACC ~40.4 MTPA; Orient ~8.5 MTPA [K: primers and FY25 company decks; **unverified split**: the company publishes only the 109 MTPA total].
- Group footprint: pan-India, strongest in West and North. South comes via Penna and Orient; Central via ACC and Ambuja (Salai Banwa, Ametha); East via Sindri, Warisaliganj and Farakka [K].

### 1f. Ownership
[V: screener shareholding, latest Sep-2026]

| | Dec-24 | Mar-26 | Jun-26 | **Sep-26** |
|---|---|---|---|---|
| Promoters (Adani family via Harmonia/Holderind etc.) | 67.57% | 67.68% | 67.33% | **67.33%** |
| FIIs | 9.14% | 5.87% | 5.63% | 5.66% |
| DIIs | 16.41% | 19.86% | 19.44% | 19.36% |
| Government | 0.21% | 0.21% | 0.21% | 0.00% |
| Public | 6.66% | 6.36% | 7.38% | 7.66% |
| Shareholders | 6.34 lakh | 6.08 lakh | 6.74 lakh | 6.74 lakh |

- The 0.35 pp promoter dip and the jump of ~67,000 shareholders in the Jun-26 quarter fit the issue of Ambuja shares to Sanghi's public holders (swap 12:100, Sanghi delisted 6 Apr 2026) [E: likely; not confirmed against the filing].
- **Post-merger promoter holding ≈ 60.9%** [E: (166.3 Cr existing promoter shares + ~4.1 Cr new shares to Holderind/Adani for their ~6.64% of ACC) ÷ 279.6 Cr]. Press coverage quotes 60.94% [search snippet, Kotak Neo/Outlook; not fetched].
- FII ownership has halved since Dec-24 (9.1% → 5.7%).

### 1g. Amalgamation status (ACC → Ambuja; Orient → Ambuja) as of 13 Oct 2026

| Step | ACC scheme | Orient scheme | Source |
|---|---|---|---|
| Board approval | 22 Dec 2025 | 22 Dec 2025 | [V] multibagg (29 Sep 2026); ACC Q4 release |
| Swap ratio | **328 Ambuja (FV ₹2) for 100 ACC (FV ₹10)**; Ambuja's own ACC shares cancelled | **33 Ambuja for 100 Orient (FV ₹1)** | [V] multibagg |
| Appointed date | 1 Jan 2026 | 1 May 2025 | [V] multibagg; search summary |
| SEBI/exchange NOC | **4 Jun 2026** (BSE "no adverse observations", NSE NOL) | received (date not captured) | [V] ACC Q1 release; multibagg |
| NCLT application | 29 Jun 2026 (Ahmedabad Bench) | Ahmedabad Bench | [V] ACC Q1 release |
| NCLT order to convene meetings | 29 Jul 2026 (creditor meetings dispensed with) | **20 Jul 2026** | [V] multibagg; Orient outcome PDF |
| Shareholder meetings | **29 Sep 2026**. Ambuja: **99.98% for** (public institutions 99.91%; 226.8 Cr votes polled) [V: scanx]. ACC: **95.52% for**, 80.73% turnout [search snippet: whalesbook/multibagg; **not fetched, unverified**] | **28 Sep 2026**. Overall **97.83% for**. **Public-only vote 78.85% for**; public institutions only **64.19% for / 35.81% against** | [V] scanx; [V] https://nsearchives.nseindia.com/corporate/ORIENTCEM_28092026202922_OCL_Outcome_28092026.pdf |
| Remaining | NCLT final sanction hearing → effective date → record date for allotment → delisting of ACC. **No final sanction or record date as of 13 Oct 2026** | same | [V]: none found |
| Guided completion | "During FY27" | "During FY27" | [V] ACC Q1 release; Elara |

- **Arbitrage spreads (13 Oct 2026):** ACC ₹1,137 vs 3.28 × ₹350 = ₹1,148, so ACC trades **~1.0% below** swap value. Orient ₹112 vs 0.33 × ₹350 = ₹115.5, **~3.0% below** [E]. Both small minorities now trade as Ambuja proxies.
- Expected synergy from removing the MSAs and pooling logistics: ~₹100/t [K: primers, citing PL/Kotak; not re-verified].

### 1h. Capex and guidance
- FY27: volume ~80 MT (+8% vs industry ~5–5.5%). Cost down ~₹250/t to ₹4,250/t. Additional savings of ₹130–150/t identified. FY28 a further ~₹250/t. Capex ₹6,000–6,500 Cr. 119 MTPA by end-FY27 [V: scanx; Investing.com].
- Clinker pipeline: Maratha +4 MTPA (2027); Mundra and Assam 2 MTPA each over 24–28 months [V: scanx].

### 1i. Story bullets
- **#2 by capacity (109 MTPA vs UltraTech's ~205 MTPA)**, but growth has shifted from buying to digesting. Capacity additions are paced "after existing plants reach optimal utilisation", and the 155 MTPA target has slipped about two years, to ~FY30.
- **Earnings quality:** EBITDA/t (₹887 normalised FY26) still trails UltraTech (~₹1,100–1,200) and JK (~₹1,000). The FY26 reported PAT of ₹5,637 Cr is more than double the normalised ₹2,647 Cr because of tax write-backs.
- **Balance-sheet transition:** the "cash-rich" label is out of date. Cash is ₹844 Cr at Jun-26 against ~₹10,000 Cr+ in FY24 [K: FY24 deck]. FCF was negative in FY25 and FY26, and the group now funds capex from operating cash flow.
- **One Cement simplification:** after the merger the MSAs and the double listing disappear and minorities are pooled. Promoter holding falls to ~61%, which adds free float.

### 1j. Risks
- Integration drag from Sanghi and Penna (46–57% utilisation). Fuel risk: about 50% of the fuel basket is imported petcoke and coal [K]. Execution slippage on 119 MTPA. Industry oversupply (UltraTech, Shree, JK and JSW are all adding capacity). Adani-group headline and governance risk (2023 Hindenburg; 2024 US indictment of group executives [K]). NCLT timing.

---
## 2. ACC Limited — NSE: ACC · BSE: 500410

**Fetched 13 Oct 2026.** **Still listed.** It is a 50.05% subsidiary of Ambuja; the promoter group holds 56.69% in total. It is being amalgamated into Ambuja at **328 Ambuja shares per 100 ACC shares** (3.28:1). Shareholders approved the scheme on 29 Sep 2026, and NCLT sanction is pending (see §1g). Delisting would follow the effective date, guided for FY27.

### 2a. Standardised financials (consolidated)
Source: [V] https://www.screener.in/company/ACC/consolidated/ (fetched 13-Oct-2026)

| ₹ Cr | FY24 | FY25 | FY26 | FY26 YoY | TTM (Jun-26) |
|---|---|---|---|---|---|
| Sales | 19,959 | 21,762 | 25,962 | +19.3% | 25,442 |
| Screener EBITDA (Op. profit) | 3,062 | 3,061 | 2,958 | −3.4% | 2,629 |
| OPM % | 15% | 14% | 11.4% | −2.7 pp | 10% |
| Other income | 735 | 1,175 | 429 | | 398 |
| Net profit (reported) | 2,335 | 2,402 | 2,137 | −11.0% | 1,909 |
| EPS (₹) | 124.34 | 127.92 | 113.80 | | 101.64 |
| Borrowings | 355 | 430 | 429 | | |
| Investments | 811 | 1,509 | 55 | | |
| "Other assets" (incl. receivables, cash, loans) | 11,564 | 11,013 | 13,987 | | |
| CFO | 2,995 | 1,711 | **−1,364** | | |
| Debtor days | 15 | 20 | **54** | | |

**Company-reported** [V: ACC Q4 FY26 release, 30 Apr 2026, https://www.adani.com/newsroom/media-releases/acc-delivered-sustained-q4-fy26-performance]: FY26 revenue ₹25,962 Cr. Operating EBITDA ₹2,950 Cr (11.4%). FY25 ₹3,061 Cr included a ₹637 Cr one-time Gagal excise refund, so normalised FY25 was ₹2,425 Cr and **normalised FY26 growth +22%**. PAT reported ₹2,137 Cr; **normalised ₹1,304 Cr** (FY25 ₹1,187 Cr). Net worth ₹20,554 Cr. **Cash & cash equivalents ₹918 Cr** (Mar-26). Debt-free, AAA/A1+. Dividend ₹7.5/share.
- At 30 Jun 2026: net worth ₹20,562 Cr, **cash & equivalents ₹375 Cr** [V: Q1 FY27 release].
- **Net cash ≈ ₹918 − ₹429 = ₹489 Cr (Mar-26)**. At Jun-26 it is roughly zero (≈ −₹54 Cr) [E]. **ACC is not sitting on a ₹13,500 Cr cash pile.** The ₹13,987 Cr screener line is "Other assets", which includes receivables, inventory, loans and advances. Receivables ballooned: debtor days went from 20 to 54 and FY26 CFO was negative ₹1,364 Cr. The most likely cause is inter-company dues from Ambuja under the MSA [E: inference; the related-party split is **unverified**].

**Valuation, 13 Oct 2026** [V: screener top ratios]: Price **₹1,137**. Market cap **₹21,350 Cr**. 52-week high/low ₹1,987 / ₹1,123. Stock P/E **11.2×**. Book value ₹1,094, so **P/B 1.04×** [E]. ROCE 11.2%. ROE 10.9%. Dividend yield 0.66%.
- P/E on normalised FY26 PAT: 21,350 / 1,304 = **16.4×** [E].
- EV ≈ 21,350 − 489 = **₹20,860 Cr** [E]. **EV/EBITDA 7.1× FY26** (7.9× TTM) [E]. EV/t ≈ ₹20,860 Cr / 40.4 MTPA ≈ **₹5,160/t** [E]. On a look-through basis, though, ACC's value is set by the swap: **3.28 × Ambuja ₹350 = ₹1,148**, against the ₹1,137 price.

### 2b. Q1 FY27 (Jun-26 quarter)
Source: [V] ACC Q1 FY27 media release, 24 Jul 2026, https://nsearchives.nseindia.com/corporate/ACC_1_24072026145827_Press_Release_Financial_Results_30062026_Final.pdf; [V] screener quarters

| Consolidated | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Sales volume (MT) | **10.0** | 10.7 | −6.5% | 11.9 |
| Revenue (₹ Cr) | 5,808 | 6,328 (company) / 6,087 (screener) | −8% | 7,146 |
| Operating EBITDA (₹ Cr) | 457 | 779 | −41% | 626 |
| Margin | 7.9% | 12.3% | | 8.8% |
| **EBITDA/t (company)** | **₹458** | ₹730 | −37% | ₹525 |
| PAT (₹ Cr) | 147 | 376 | −61% | 238 |
| Realisation/t, computed (revenue ÷ volume) | ₹5,808 | ₹5,914 | −1.8% | ₹6,005 |
| All-in cost/t, computed | ₹5,350 | ₹5,184 | +3% | ₹5,480 |
| Kiln fuel cost | ₹1.67/'000 kcal | ₹1.56 | +7% | ₹1.65 |
| Power cost | ₹5.6/kWh | ₹6.1 | | ₹5.8 |
| Green power | 31% | 26% | | 31% |
| Primary lead | 254 km | 290 km | | 273 km |
| Trade share / premium (% of trade) | 81% / 44% | 76% / 41% | | — / 45% |
| RMX | 119 plants; 0.97 Mn m³ (+17%); EBITDA ₹33 Cr | | | |

- The company blames weak margins on planned maintenance at large integrated units and **"higher MSA volumes with parent Ambuja"**. In other words, ACC is now partly a reseller of Ambuja-made cement on thin margins. Peak fuel inflation is expected to hit in Q2 because of the 60–90-day fuel inventory cycle [V: release].
- **Q2 FY27 results: not out** [V: screener].

### 2c. Cement KPIs

| KPI | Value | Source / basis |
|---|---|---|
| FY26 sales volume | **43.9 MT, +12.6%** (FY25 39.0). Record Q4 of 11.9 MT (+8%). **Includes MSA-sourced tonnes from Ambuja** | [V] Q4 release |
| Capacity, current | **~40.4 MTPA** (Mar-26). The release gives no total, so this figure comes from the primer and press. Salai Banwa 2.4 MTPA in trials (Q1 FY27); Kalamboli +1.0 MTPA in the Sep-26 quarter. ≈ 43.8 MTPA on completion [E] | [K] primer/press; [V] Q1 release for projects |
| Utilisation | ~80% in Q4 FY26 (company). FY26 own-plant utilisation cannot be derived because volume includes MSA purchases | [V] Q4 release |
| Realisation/t | FY26 ₹5,914 (₹25,962 Cr ÷ 43.9 MT) | [E] |
| Total cost/t | FY26 ≈ ₹5,242 (realisation − ₹672) | [E] |
| Power & fuel | Kiln fuel ₹1.61/'000 kcal and power ₹6.0/kWh in FY26. WHRS share 13.5% → 16.4% | [V] Q4 release |
| Freight | Lead 269 km in FY26 (274 km in FY25); direct dispatch 48%. No ₹/t figure disclosed | [V] |
| EBITDA/t, company | FY26 **₹672** (FY25 ₹785 reported, incl. one-off). Q4 FY26 ₹525. Q1 FY27 ₹458 | [V] |
| EBITDA/t, computed | ₹2,958 Cr ÷ 43.9 MT = **₹674/t** (screener EBITDA) | [E] |
| Green power | FY26 30% (FY25 18%); Q1 FY27 31% | [V] |
| Capex | Not disclosed separately. Group (Ambuja) capex covers it | — |
| Net debt/EBITDA | Net cash in FY26 (≈ −0.2×); ~0× at Jun-26 | [E] |

### 2d. Segment mix
- Cement ~95%+ of revenue. RMX FY26: 3.85 Mn m³ (+35%); Q4 RMX EBITDA ₹102 Cr [V: Q4 release]. Brands: ACC Gold, Concrete+ and the new Buildcem / Buildcem Pro range [V].

### 2e. Plants
- 20 cement manufacturing sites, 119 RMX plants [V: Q1 release, "About ACC"]. Key integrated plants: Wadi (Karnataka), Chanda (Maharashtra), Jamul (Chhattisgarh; partly idled as high-cost), Gagal (HP), Kymore (MP), Ametha (MP), Bargarh (Odisha), Chaibasa (Jharkhand). Grinding units include Sindri (Jharkhand; high-cost), Tikaria (UP), Thondebhavi (Karnataka) and Salai Banwa (UP, new) [K: ACC annual report FY25].

### 2f. Ownership
[V: screener shareholding, latest Sep-2026]

| | Dec-24 | Mar-26 | Jun-26 | **Sep-26** |
|---|---|---|---|---|
| Promoters (Ambuja 50.05% + Holderind/Adani entities) | 56.69% | 56.69% | 56.69% | **56.69%** |
| FIIs | 5.14% | 5.93% | 5.83% | 5.75% |
| DIIs (LIC a large holder) | 24.66% | 21.62% | 21.12% | 20.97% |
| Government | 0.15% | 0.15% | 0.15% | 0.15% |
| Public | 13.35% | 15.60% | 16.19% | 16.42% |
| Shareholders | 1.94 lakh | 2.36 lakh | 2.39 lakh | 2.38 lakh |

- ACC appointed Vivek Paul as LIC nominee director effective 6 Oct 2026 [search snippet, scanx; not fetched].

### 2g. Story bullets
- **A stub awaiting conversion.** Holders approved the scheme on 29 Sep 2026. Once NCLT sanctions it, ACC holders receive 3.28 Ambuja shares each, and the stock already trades within ~1% of that.
- **The economics have hollowed out.** EBITDA/t fell from ₹785 (FY25) to ₹672 (FY26) and ₹458 (Q1 FY27). Volume is up only because ACC sells Ambuja tonnes under the MSA. FY26 CFO was negative (−₹1,364 Cr) as receivables rose.
- **No standalone investment case after FY27.** In the sub-sector report ACC belongs inside Ambuja; its own valuation multiples are a curiosity, not a signal.

### 2h. Risks
- Swap-ratio fairness. The ratio is fixed, so the only spread risk is the merger failing or being delayed. NCLT objections from minorities. Weak margins in the transition. The related-party receivables build-up.

---

## 3. Orient Cement — NSE: ORIENTCEM · BSE: 535754

**Fetched 13 Oct 2026.** **Still listed.** It has been an Ambuja subsidiary (72.66%) since the open offer completed in the Jun-25 quarter. Ambuja bought the CK Birla promoter stake (~37.9%) and ~8.9% from public holders at ₹395.40 a share, then ran an open offer for up to 26% [K: Oct-2024 deal announcements; primer]. Orient is being amalgamated into Ambuja at **33 Ambuja shares per 100 Orient shares** (0.33:1). Orient shareholders approved the scheme on 28 Sep 2026, and NCLT sanction is pending. Screener has **no consolidated page** for Orient (it is blank), so the standalone figures are used.

### 3a. Standardised financials (standalone)
Source: [V] https://www.screener.in/company/ORIENTCEM/ (fetched 13-Oct-2026); [V] Elara Securities Q1 FY27 note, 30 Jul 2026, https://investmentguruindia.com/editorial/uploads/news-pdf/12d9eba2_Elara%20Securities%20-%20%20Orient%20Cement%20-%2030%20July%202026.pdf

| ₹ Cr | FY24 | FY25 | FY26 | FY26 YoY | TTM (Jun-26) |
|---|---|---|---|---|---|
| Sales | 3,185 | 2,709 | 2,793 | +3.1% | 2,531 |
| Screener EBITDA (Op. profit) | 449 | 302 | 546 | +81% | 507 |
| OPM % | 14% | 11% | 19.5% | +8.4 pp | 20% |
| Other income | 15 | 20 | 16 | | 20 |
| Depreciation | 149 | 153 | 231 (incl. ₹101 Cr in Q2 — likely accelerated) | | 237 |
| Net profit | 175 | 91 | 338 | +271% | 209 |
| Tax rate | 38% | 37% | **−6%** (tax reversal) | | |
| Borrowings | 170 | 70 | 72 | | |
| Investments | 11 | 42 | 13 | | |
| CFO | 426 | 205 | **−39** | | |
| Debtor days | 26 | 33 | **110** | | |

- Elara's FY26 figures: revenue ₹2,793 Cr, EBITDA ₹545 Cr (19.5%), adjusted PAT ₹342 Cr, total borrowings ₹38 Cr, cash and treasury ₹19 Cr. **Sundry debtors rose from ₹248 Cr to ₹840 Cr** (MSA receivables from Ambuja [E]) [V: Elara].
- **Net debt ≈ ₹20–60 Cr, essentially nil** (screener basis ₹59 Cr; Elara ₹19 Cr) [E].

**Valuation, 13 Oct 2026** [V: screener standalone top ratios]: Price **₹112**. Market cap **₹2,314 Cr**. 52-week high/low ₹225 / ₹109. Stock P/E **10.9×**. Book value ₹104, so **P/B 1.08×** [E]. ROCE 16.5%. ROE 17.3%. Dividend yield 0.44%.
- EV ≈ 2,314 + 59 = **₹2,373 Cr**. **EV/EBITDA 4.3× FY26** (4.7× TTM). EV/t ≈ ₹2,790/t on 8.5 MTPA [E]. The "cheapness" is not actionable: value is pinned to 0.33 × Ambuja = ₹115.5.
- Elara (29 Jul 2026, CMP ₹138): Accumulate, TP ₹163, derived from its Ambuja TP of ₹494 × 0.33 [V].

### 3b. Q1 FY27 (Jun-26 quarter)
Sources: [V] Elara note (company data); [V] screener quarters

| | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Net sales (₹ Cr) | 604 | 866 | −30% | 647 |
| EBITDA (₹ Cr, Elara/company) | 144 | 183 | −21% | 108 |
| Margin | 23.8% | 21.1% | | 16.7% |
| PAT (₹ Cr) | 77 | 205 (tax credit) | −62% | 55 |
| Sales volume (MT) | **1.50** | 1.90 | −21% | 1.60 |
| Realisation/t | ₹4,027 | ₹4,560 | −11.7% | ₹4,045 |
| Raw material/t | ₹820 | ₹720 | +14% | ₹1,178 |
| Power, oil & fuel/t | **₹1,513** | ₹1,256 | +20.5% | ₹1,414 |
| Packing, freight & forwarding/t | **₹207** | ₹1,055 | −80% | ₹164 |
| Total cost/t | ₹3,067 | ₹3,599 | −14.8% | ₹3,371 |
| **EBITDA/t** | **₹960** | ₹961 | 0% | ₹674 |

- **Business-model change.** Freight per tonne collapsed (₹1,055 → ₹207), and realisation is now close to ex-works. Orient increasingly sells to or through Ambuja under the MSA. Its P&L is now a manufacturing margin, not a market price, which makes Orient's EBITDA/t **not comparable with peers** [E: inference from Elara's per-tonne table; Elara also notes "cement realisation after subtracting freight outward improved 9% YoY"].
- The volume drop is a deliberate exit from "non-remunerative markets" [V: Elara].
- **Q2 FY27: not out** [V: screener].

### 3c. Cement KPIs

| KPI | Value | Source / basis |
|---|---|---|
| FY26 sales volume | **~6.6 MT** (unverified; [E]: ₹2,793 Cr ÷ ~₹4,250/t blended). Only Q1 FY26 (1.90) and Q4 FY26 (1.60) are confirmed. Q3 FY26 volumes were "flat YoY" (search snippet) | [E] |
| Capacity | **~8.5 MTPA**: Devapur (Telangana, integrated) ~3.0, Chittapur (Karnataka, integrated) ~3.5, Jalgaon (Maharashtra, split GU) ~2.0. Earlier Orient-era expansion plans (Devapur brownfield, Rajasthan greenfield) are **now folded into Ambuja's pipeline**; no standalone target | [K] primer and Orient FY24 AR; plant split **unverified** |
| Utilisation | Q1 FY27 ≈ 71% annualised [E: 1.5 × 4 ÷ 8.5]. FY26 ≈ 78% [E]. Ambuja's Q4 call said Orient "operates at full capacity" | [E]; [V] scanx |
| Realisation/t | Q1 FY27 ₹4,027 (near ex-works since the MSA) | [V] Elara |
| Total cost/t | ₹3,067. P&F ₹1,513. Freight & packing ₹207 | [V] Elara |
| EBITDA/t, company basis | Q1 FY27 ₹960; Q4 FY26 ₹674 | [V] Elara |
| EBITDA/t, computed | FY26 ≈ ₹546 Cr ÷ ~6.6 MT ≈ **~₹830/t** [E, volume unverified] | [E] |
| Green power | Not disclosed separately; group target via Ambuja | — |
| Capex | FY26 ₹31 Cr (Elara). Elara models FY27E ₹225 Cr | [V] Elara |
| Net debt/EBITDA | ~0× (Elara: 0.0×) | [V] |

### 3d. Ownership
[V: screener shareholding, latest Sep-2026]

| | Dec-24 | Mar-25 | Jun-25 | Mar-26 | **Sep-26** |
|---|---|---|---|---|---|
| Promoter (Ambuja) | 37.86% (CK Birla) | 37.86% | 72.66% | 72.66% | **72.66%** |
| FIIs | 6.76% | 8.41% | 6.65% | 4.70% | 3.14% |
| DIIs | 15.81% | 13.36% | 2.95% | 1.97% | 2.23% |
| Government | — | — | — | — | 0.89% |
| Public | 39.58% | 40.37% | 17.74% | 20.67% | 21.08% |
| Shareholders | 81,976 | 76,718 | 84,985 | 97,344 | 94,744 |

### 3e. Merger vote (28 Sep 2026) — the dissent is material
[V] https://nsearchives.nseindia.com/corporate/ORIENTCEM_28092026202922_OCL_Outcome_28092026.pdf
- Total votes polled 16.64 Cr (81.0% of 20.55 Cr shares). **97.83% for, 2.17% against.**
- Under the SEBI master circular, which counts public votes only: **78.85% for**. Of these, public institutions were **64.19% for and 35.81% against** (33.2 lakh of the 92.8 lakh institutional votes cast were against; institutional turnout was 71.8%). Public non-institutions were 96.34% for.
- The resolution was passed by the requisite majority. The scale of institutional opposition suggests some funds think 0.33:1 undervalues Orient. That is a possible ground for objection at the NCLT sanction stage [E].

### 3f. Story bullets
- Orient's value is a tracking claim on Ambuja: 0.33 × ₹350 = ₹115.5, against a ₹112 price. Near-term results matter only at the margin.
- The MSA turned Orient into a captive manufacturer (freight ₹207/t). Reported margins look high (23.8%), but they are a transfer-pricing artefact.
- FY26 PAT of ₹338 Cr was flattered by tax reversals (tax −6%). Adjusted PAT was ₹342 Cr on Elara's basis.

### 3g. Risks
- A delay at the NCLT, or a minority challenge. Receivables of ₹840 Cr concentrated on the parent. The MSA terms are set by the controlling shareholder.

---
## 4. J.K. Cement — NSE: JKCEMENT · BSE: 532644

**Fetched 13 Oct 2026.** Still listed and independent, controlled by the Singhania family / J.K. Organisation. Businesses: grey cement (North, Central and now East), white cement and wall putty (#2 in white cement behind Birla White; #1 in putty), a UAE white-cement and clinker subsidiary (Fujairah), and decorative paints (JK Maxx, via the Acro Paints acquisition [K]). No merger or demerger is pending.

### 4a. Standardised financials (consolidated)
Source: [V] https://www.screener.in/company/JKCEMENT/consolidated/ (fetched 13-Oct-2026); [V] PL Capital Q4 FY26 note, 25 May 2026, https://plindia.com/ResReport/JKCE-25-5-26-PL.pdf

| ₹ Cr | FY24 | FY25 | FY26 | FY26 YoY | TTM (Jun-26) |
|---|---|---|---|---|---|
| Sales | 11,556 | 11,879 | 13,722 | +15.5% | 14,401 |
| Screener EBITDA (Op. profit) | 2,071 | 2,034 | 2,379 | +17.0% | 2,334 |
| OPM % | 18% | 17% | 17.3% | +0.2 pp | 16% |
| Other income | 129 | 269 | 142 | | 130 |
| Interest | 453 | 459 | 424 | | 430 |
| Net profit | 790 | 872 | 988 | +13.3% | 938 |
| EPS (₹) | 102.35 | 111.45 | 128.45 | | 122.37 |
| Borrowings | 5,552 | 6,028 | 6,183 | | |
| Investments | 377 | 601 | 447 | | |
| Net debt (screener: Borr − Inv) | 5,175 | 5,427 | 5,736 | | |
| CFO | 1,959 | 1,939 | 1,873 | | |
| FCF (screener) | 792 | 241 | −376 | | |

- PL's consolidated FY26 figures: net sales ₹13,722 Cr; EBITDA ₹2,374 Cr; PAT attributable **₹992.5 Cr**; total debt ₹6,074 Cr; cash ₹119 Cr [V: PL].
- **Company net debt ₹3,864 Cr at 30 Jun 2026; net debt/EBITDA 1.69×; net debt/equity 0.53×** [V: Investing.com Q1 FY27 deck summary, https://in.investing.com/news/company-news/jk-cement-q1-fy27-presentation-18-volume-growth-costs-weigh-93CH-5503917].
- **Conflict:** screener net debt is ₹5,736 Cr (2.4× EBITDA) and PL's is ₹5,955 Cr, against the company's ₹3,864 Cr. The ~₹2,000 Cr gap is probably company netting of treasury and bank balances not captured as "Investments", and/or exclusion of acceptances and leases [E]. I show both. **For leverage, the company figure (1.69×) is the more credible management basis. Screener/PL (~2.4–2.5×) is the conservative gross-debt basis.**

**Valuation, 13 Oct 2026** [V: screener top ratios]: Price **₹4,888**. Market cap **₹37,744 Cr**. 52-week high/low ₹6,764 / ₹4,670. Stock P/E **38.6×**. Book value ₹911, so **P/B 5.4×** [E]. ROCE 15.1%. ROE 15.6%. Dividend yield 0.41%.
- EV (screener net debt) ≈ 37,744 + 5,736 = **₹43,480 Cr**, giving **EV/EBITDA 18.3× FY26** (18.6× TTM). On the company net debt: ₹41,608 Cr, **17.5×** [E].
- EV/t ≈ ₹43,480 Cr / 35.4 MTPA (32.3 grey + 3.1 white/putty) ≈ **₹12,300/t** [E].
- PL (25 May 2026): Accumulate, TP ₹6,101 (15× Mar-28E EV/EBITDA). FY27E EBITDA ₹2,822 Cr [V].

### 4b. Q1 FY27 (Jun-26 quarter)
Sources: [V] Investing.com deck summary (results 20 Jul 2026); [V] screener quarters

| | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Sales (screener, consol., ₹ Cr) | 4,032 | 3,353 | +20% | 3,888 |
| EBITDA (consol., ₹ Cr) | 648 | 688 | −6% | 683 |
| OPM | 16.1% | 20.5% | | 17.6% |
| Standalone EBITDA (₹ Cr) | 639 | 670–673 | −5% | 670 |
| PAT (consol., ₹ Cr) | 275 (standalone 291) | 324 | −15% | 331 |
| Grey cement volume (MT) | **5.96** | ~5.05 | +18% | 6.16 |
| White cement volume (MT) | 0.54 | ~0.42 | +29% | 0.65 |
| NSR/t | ₹5,065 | ₹4,841 (as cited) | | |
| **EBITDA/t (company, blended)** | **₹982** | ₹1,247 | −20% | ₹1,002 |
| EBITDA/t, computed (consol. ₹648 Cr ÷ 6.5 MT) | ₹997 | ~₹1,256 | | ₹1,004 |
| Logistics/t | ₹1,315 (+2% YoY) | | | ₹1,333 |
| Fuel cost | ₹1.53/'000 kcal (flat YoY, +3% QoQ) | | | ₹1.48 |
| Other expenses/t | ₹1,025 (+20%) | | | ₹969 |
| Utilisation | 75% (vs 65%) | | | 82% (cement) / 93% (clinker) |
| Green power | 53.5% | | | 51% (FY26) |

- Guidance for Q2 FY27: cost +₹150/t QoQ (fuel +₹75–100, diesel/logistics ~₹50) [V].
- **Q2 FY27: not out** [V: screener].

### 4c. Cement KPIs

| KPI | Value | Source / basis |
|---|---|---|
| FY26 sales volume | **23.5 MT consolidated (+16%; FY25 20.2)**. Grey ~20.7 MT (+15%, primer figure; my quarterly sum ≈ 21 [E]). Q4 FY26: grey 6.16 (+13%), white 0.65 (+8%) | [V] PL |
| Capacity, current | **Grey 32.3 MTPA** (after ~6 MTPA added in FY26: Buxar 3 MTPA split GU, Panna, Hamirpur, Prayagraj). **White + putty ~3.1 MTPA**, plus Nathdwara 0.6 MTPA putty due Sep-26 | [V] Investing.com; PL |
| Capacity target | **40 MTPA grey by FY28.** Jaisalmer 4 MTPA clinker + 3 MTPA GU, Bikaner 2 MTPA GU and Punjab 2 MTPA GU: ~7 MTPA, all H1 FY28. **50 MTPA by FY30** | [V] |
| Utilisation | FY26 cement ~75–80% [E]. Q4 FY26 82%. Q1 FY27 75%. North high; new Central capacity at 65–70% | [V] PL; Investing.com |
| Realisation/t | FY26 blended ₹5,852 (−0.4%). Q4 FY26 grey ₹4,838/t and white ₹13,015/t | [V] PL |
| Total cost/t | FY26 **₹4,829** (₹11,348 Cr ÷ 23.5 MT) | [E from PL table] |
| Power & fuel/t | FY26 **₹1,106** (₹2,598 Cr ÷ 23.5). Q4 FY26 ₹1,084. Fuel mix: petcoke 50%, AFR 12%, domestic coal the rest | [E]; [V] PL |
| Freight/t | FY26 **₹1,339** (₹3,146 Cr ÷ 23.5). Q4 ₹1,333; lead 418 km; rail share 8% | [E]; [V] PL |
| EBITDA/t, company/PL | FY26 **₹1,012** (FY25 ₹1,003). Q4 FY26 ₹1,002. Q1 FY27 ₹982 | [V] PL; Investing.com |
| EBITDA/t, computed | ₹2,379 Cr ÷ 23.5 MT = **₹1,012/t** (screener EBITDA, consolidated volume) | [E] |
| Green power | FY26 51%; Q1 FY27 53.5%. FY27 target ~55% (80 MW under implementation); FY30 target 75% | [V] |
| Capex | FY27 ₹3,500–4,000 Cr; FY28 ₹1,500–2,000 Cr ("₹5,000–6,000 Cr over two years") | [V] PL; Investing.com |
| Capex/t | Jaisalmer ₹3,630 Cr for 3 MTPA cement + 4 MTPA clinker (₹1,162 Cr spent by Jun-26) ≈ **₹12,100/t** of cement. Bikaner ₹560 Cr / 2 MTPA = ₹2,800/t GU. Punjab ₹610 Cr / 2 MTPA = ₹3,050/t GU. Total ~₹4,800 Cr for 7 MTPA ≈ **₹6,860/t** blended | [V] PL; [E] |
| Net debt/EBITDA | **1.69×** (company, Jun-26). 2.4× on the screener basis | [V]; [E] |

### 4d. Segment mix
- Grey cement is roughly two-thirds to three-quarters of revenue. White cement + putty is ~20–25%, at a much higher EBITDA/t (white NSR ~₹13,000/t) [E: from PL's NSR and volume split]. Paints: FY26 revenue **~₹380 Cr, EBITDA loss ~₹40 Cr**. FY27 guide ₹500–550 Cr with EBITDA breakeven (Q1 FY27 ₹125 Cr, breakeven) [V: PL; Investing.com]. RMC FY27 guide ₹250–300 Cr [V].
- Trade share 68% in Q4 FY26. Premium 18%. Blended cement 65–67% [V: PL].
- FY26 incentives accrued ~₹230 Cr [V: PL]. That is ~₹100/t of EBITDA, a material support for the EBITDA/t figure.

### 4e. Capacity by region (grey ~32.3 MTPA)
- **North** (Rajasthan: Nimbahera, Mangrol, Gotan; GUs at Jharli, Aligarh, Bamania, Hamirpur): ~15 MTPA. **Central** (Panna integrated, MP; GUs at Prayagraj, Hamirpur, Ujjain): ~10 MTPA. **East** (Buxar GU, Bihar): 3 MTPA. **South** (Muddapur, Karnataka; Toshali, Odisha, acquired 2024): ~4 MTPA [K: JK investor decks FY25–FY26; plant split **unverified**]. White: Gotan (Rajasthan) and Fujairah (UAE). The UAE operations were disrupted by the West Asia conflict in Q4 FY26 [V: PL].

### 4f. Ownership
[V: screener shareholding; **latest shown is Jun-2026**, Sep-26 not yet on screener]

| | Sep-24 | Mar-25 | Mar-26 | **Jun-26** |
|---|---|---|---|---|
| Promoters (Singhania family) | 45.68% | 45.68% | 45.66% | **45.66%** |
| FIIs | 17.55% | 16.14% | 16.86% | 16.85% |
| DIIs | 22.43% | 24.50% | 23.75% | 23.72% |
| Public | 14.32% | 13.68% | 13.73% | 13.76% |
| Shareholders | 81,196 | 73,428 | 82,016 | 80,353 |

### 4g. Story bullets
- **The fastest grower among mid-caps.** Grey volume rose 18% in Q1 FY27 against the industry's ~6–8%. Capacity goes 32.3 → 40 (FY28) → 50 MTPA (FY30), and FY27 grey volume guidance is 22.5–23 MT.
- **EBITDA/t of ~₹1,000 is mid-pack for a premium multiple.** It was flat in FY26 (₹1,012) and is down 20% YoY in Q1 FY27 (₹982) as costs rose (packaging, fuel, maintenance). The 38.6× P/E and 18× EV/EBITDA lean on the white/putty franchise.
- **The balance sheet is stretched by the build-out.** FY27 capex is ₹3,500–4,000 Cr against ~₹2,000 Cr of CFO, so net debt rises in FY27 (PL models gross debt at ₹7,874 Cr in FY27E).
- **Paints is still small** (~₹380 Cr), but the losses are narrowing to breakeven.

### 4h. Risks
- Central-India oversupply as UltraTech, Shree and Ambuja all add capacity. Petcoke exposure (50% of fuel). White-cement competition and the UAE disruption. Leverage rising on ₹4,000 Cr capex. Execution risk on Jaisalmer (₹3,630 Cr).

---

## 5. JSW Cement — NSE: JSWCEMENT · BSE: 544480

**Fetched 13 Oct 2026.** Listed in Aug 2025: IPO of ~₹3,600 Cr at ₹147/share, top of the ₹139–147 band [K: RHP/press; primer]. Part of the JSW Group (Sajjan/Parth Jindal). Shiva Cement (BSE-listed) is a subsidiary, and there is a UAE clinker JV (JSW Cement FZC, Fujairah). No merger or demerger is pending.

### 5a. Standardised financials (consolidated)
Source: [V] https://www.screener.in/company/JSWCEMENT/consolidated/ (fetched 13-Oct-2026); [V] JSW Cement Q4 FY26 press release, 21 May 2026, https://nsearchives.nseindia.com/corporate/JSWCL_21052026130017_upload.pdf

| ₹ Cr | FY24 | FY25 | FY26 | FY26 YoY | TTM (Jun-26) |
|---|---|---|---|---|---|
| Sales | 6,002 | 5,785 | 6,501 | +12.4% | 6,849 |
| Screener EBITDA (Op. profit) | 853 | 617 | 1,242 | +101% | 1,216 |
| OPM % | 14% | 11% | 19.1% | +8.4 pp | 18% |
| Other income | 85 | 100 | **−1,323** (CCPS fair-value loss in Q1 FY26: −₹1,444 Cr) | | 209 |
| Interest | 435 | 450 | 378 | | 373 |
| Net profit | 62 | −164 | **−799** | | **721** |
| Equity capital | 986 | 986 | 1,341 (IPO + CCPS conversion) | | |
| Borrowings | 6,254 | 6,563 | 4,464 | | |
| Investments | 759 | 345 | 290 | | |
| Net debt (screener) | 5,495 | 6,218 | 4,174 | | |
| CFO | 1,408 | 737 | 1,170 | | |

**Company-reported** [V: Q4 FY26 release]: FY26 revenue ₹6,512 Cr (+12%). **Operating EBITDA ₹1,240.3 Cr (+44%; margin 19.0%)**. Total EBITDA including other income ₹1,392.7 Cr. **Net debt ₹3,635 Cr at 31 Mar 2026.** Q4 PAT ₹361.7 Cr includes a ₹211.2 Cr deferred-tax release from moving to the new tax regime. FY26 capex ₹1,962 Cr.
- At 30 Jun 2026: **net debt ₹3,856 Cr; net debt/EBITDA 2.95×** (board ceiling <3×); average cost of debt 7.63% [V: Investing.com Q1 FY27 call transcript, https://www.investing.com/news/transcripts/earnings-call-transcript-jsw-cement-posts-strong-q1-2027-revenue-growth-93CH-4859752].
- Screener's net debt (₹4,174 Cr) is higher than the company's (₹3,635 Cr) because bank deposits and IPO-proceeds balances are not in "Investments" [E].

**Valuation, 13 Oct 2026** [V: screener top ratios]: Price **₹113**, **23% below the ₹147 IPO price**. Market cap **₹15,397 Cr**. 52-week high/low ₹143 / ₹107. Stock P/E **19.5×** (TTM PAT ₹721 Cr includes the ₹211 Cr DTA release; ex-that ≈ 30× [E]). Book value ₹48.0, so **P/B 2.35×** [E]. ROCE 11.1%. ROE 14.7%. Dividend yield 0.44%.
- EV ≈ 15,397 + 3,856 = **₹19,250 Cr** [E]. **EV/EBITDA 15.5× FY26** (15.8× TTM). EV/t ≈ ₹19,250 Cr / 24.1 MTPA grinding ≈ **₹8,000/t** [E].

### 5b. Q1 FY27 (Jun-26 quarter)
Sources: [V] Investing.com call transcript (14 Aug 2026); [V] screener quarters; Q1 slides summary (Investing.com) and multibagg [search snippets, used only for the GGBS tonnage]

| | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue (₹ Cr) | 1,896 | 1,560 | +22% | 1,895 |
| Operating EBITDA (₹ Cr) | 299 | 323 | −7.5% | 365 |
| Margin | 15.8% | 20.7% | | 19.3% |
| PAT (₹ Cr) | 153 | −1,366 (CCPS) | n.m. | 362 |
| Total volume (MT) | **3.81** | ~3.31 | +15% | 3.99 |
| — Cement | 2.34 | ~1.84 | +27% (ex-North +8%) | 2.35 |
| — GGBS | ~1.33 [snippet] | ~1.30 | +2.6% | 1.57 |
| **Operating EBITDA/t** | **₹784** | ~₹976 | | ₹916 (₹950 ex-forex) |
| EBITDA/t ex-North (Nagaur start-up) | ₹979 (+4%) | | | |
| Realisation: cement / GGBS | ₹4,951 / ₹3,807 (+6% / +3.4% QoQ) | | | |
| Blended realisation, computed | ₹4,976 | ₹4,713 | | ₹4,749 |
| Cost/t, computed | ₹4,192 | | | ₹3,833 |
| Blended fuel cost | ₹1.80/Mcal (vs ₹1.49 in Q4, +21%) | | | |
| Utilisation | 61% (North 55%; ~68% in June) | | | |
| Green (renewable) power | 30% (56 MW wind added); target >60% by Q3 FY27 | | | |

- Q1 included ~₹33 Cr of North launch and marketing spend. North EBITDA breakeven was guided for Q2 FY27 [V].
- **Q2 FY27: not out** [V: screener].

### 5c. Cement KPIs

| KPI | Value | Source / basis |
|---|---|---|
| FY26 sales volume | **13.96 MT, +11%**. Cement 7.73 MT (+9%), **GGBS 5.78 MT (+12%)**, the remainder (~0.45 MT) clinker | [V] Q4 release |
| Capacity, current | **24.1 MTPA grinding, 9.74 MTPA clinker** (Mar-26). Nagaur: 3.3 MTPA clinker + 2.5 MTPA GU commissioned Mar-26. +1.0 MTPA Nagaur GU due end-Q2 FY27, with another 2.5 MTPA approved later (₹430 Cr) | [V] Q4 release; Q1 call |
| Capacity target | Release: **46.0 MTPA grinding + 13.04 MTPA clinker** (no date). Q1 FY27 call: **43.5 MTPA**, then ~25 MT more (~68 MTPA) over the following 3–4 years. Rajasthan 2.5 MT line by end-FY28; Dolvi 4 MT (~15 months); Fujairah clinker (12 months); Vijayanagar Phase 1 delayed beyond CY28; Punjab awaiting environmental clearance | [V] |
| Utilisation | FY26 ≈ 63% [E: 13.96 ÷ ~22 MT average grinding]. Q1 FY27 61% (company); clinker 61% (87% ex-Nagaur) | [E]; [V] |
| Realisation/t | FY26 blended ₹4,665 (₹6,512 Cr ÷ 13.96 MT). GGBS sells ~₹1,100/t below cement | [E]; [V] Q1 call |
| Total cost/t | FY26 ≈ ₹3,777 (realisation − ₹888) | [E] |
| P&F/t, freight/t | **Not disclosed** in the release or the call. Logistics −2% QoQ in Q1; lead −4 km | [V] call (qualitative) |
| EBITDA/t, company | FY26 **₹888**. Q4 FY26 ₹916. Q1 FY27 ₹784 (₹979 ex-North) | [V] |
| EBITDA/t, computed | ₹1,242 Cr ÷ 13.96 MT = **₹890/t** (screener EBITDA, total volume incl. GGBS) | [E] |
| Green power | Q1 FY27 30% renewable; target >60% by Q3 FY27. CO₂ intensity 268 kg/t of cementitious material (lowest in the industry, per the company) | [V] |
| Capex | FY26 ₹1,962 Cr; FY27 ~₹2,300 Cr; FY28 ~₹2,000 Cr. ~₹7,500–7,600 Cr in total to reach 43.5 MTPA | [V] Q4 release; Q1 call |
| Capex/t | ₹7,550 Cr ÷ 19.4 MT (24.1 → 43.5) ≈ **₹3,900/t** (mostly grinding). Nagaur 3.5 MT integrated ~₹3,500 Cr ≈ **₹10,000/t**. Nagaur extra 2.5 MTPA GU ₹430 Cr ≈ **₹1,720/t** | [E] from [V] inputs |
| Net debt/EBITDA | **2.93× (Mar-26: 3,635 ÷ 1,240)** [E]; **2.95× (Jun-26, company)** | [V] |

### 5d. Segment mix
- Cementitious products: cement (blended PSC/PCC/PPC + OPC) ~55% of volume, GGBS ~41%, clinker ~3%. GGBS market share ~84% [V: Q4 release]. RMC: 15 plants (target 35), FY27 revenue target >₹1,000 Cr (Q1 ~₹180 Cr) [V: Q1 call]. Construction chemicals and waterproofing are small.
- **Raw-material dependence:** slag comes from JSW Steel (Vijayanagar, Dolvi, Salem). Related-party pricing is the swing factor for GGBS margins [K: RHP].

### 5e. Capacity by region (24.1 MTPA grinding)
- **South:** Vijayanagar (Karnataka), Nandyal (AP, integrated), Salem (TN). **West:** Dolvi (Maharashtra). **East:** Salboni (WB), Jajpur (Odisha), Sambalpur (Odisha, +1.0 MTPA GU commissioned FY26), and the Shiva Cement clinker unit (Odisha). **North:** Nagaur (Rajasthan, integrated, Mar-26). UAE: Fujairah clinker JV [V: Q4 release "About"; plant MTPA split not disclosed].

### 5f. Ownership
[V: screener shareholding; **latest shown is Jun-2026**]

| | Sep-25 | Dec-25 | Mar-26 | **Jun-26** |
|---|---|---|---|---|
| Promoters (JSW group) | 72.34% | 72.34% | 72.04% | **72.02%** |
| FIIs | 4.13% | 3.03% | 2.93% | 3.70% |
| DIIs | 7.87% | 8.09% | 8.74% | 11.49% |
| Public | 13.52% | 14.73% | 14.67% | 11.83% |
| Others | 2.13% | 1.82% | 1.62% | 0.95% |
| Shareholders | 4.71 lakh | 4.60 lakh | 4.42 lakh | 4.43 lakh |

- The pre-IPO investors (Apollo/AIF, Synergy Metals, SBI Funds via CCPS) came out of their 6-month/1-year lock-ins between Feb and Aug 2026 [K: RHP lock-in terms; **unverified** which have sold]. DIIs rose 2.75 pp in the Jun-26 quarter as "public" fell, consistent with block trades to institutions [E].

### 5g. Story bullets
- **A GGBS-led, low-capex, low-carbon model.** EBITDA/t of ₹888 is on a cementitious tonne that includes ~41% GGBS, which sells ~₹1,100/t below cement. Growth comes from grinding units (~₹3,900/t), not kilns.
- **North entry (Nagaur) is the swing factor.** It cost ₹195/t of group EBITDA/t in Q1 FY27 (₹784 vs ₹979 ex-North). Breakeven was guided for Q2 FY27.
- **Leverage sits at its ceiling.** Net debt/EBITDA is 2.95× against a <3× policy, while capex runs at ₹2,000–2,300 Cr a year. The pace of expansion is now set by the balance sheet.
- **De-rated since the IPO** (₹113 against ₹147, −23%). EV/EBITDA is ~15.5×, below JK (~18×) but above Ambuja (~15×) on a lower EBITDA/t.

### 5h. Risks
- Slag supply and pricing tied to JSW Steel. Commodity-cement competition in the North. Fuel cost (+21% QoQ in Q1). Leverage. Overhang from lock-in expiries. The GGBS growth guide was cut from mid-teens to high single digits [V: Q1 call].

---
## 6. Mini summary grid (FY26; market data 13 Oct 2026)

Screener EBITDA is used unless stated. Net debt is the company figure where one is available; negative = net cash. **Ambuja includes ACC and Orient: do not add the rows.**

| | Ambuja (consol., = Adani group) | ACC (inside Ambuja) | Orient (inside Ambuja; standalone) | J.K. Cement | JSW Cement |
|---|---|---|---|---|---|
| FY26 revenue (₹ Cr) | 40,656 (+15%) | 25,962 (+19%) | 2,793 (+3%) | 13,722 (+16%) | 6,501 (+12%) (co. 6,512) |
| EBITDA (₹ Cr) | 6,577 (co. normalised 6,539) | 2,958 (co. 2,950) | 546 | 2,379 | 1,242 (co. 1,240) |
| Margin | 16.2% | 11.4% | 19.5% | 17.3% | 19.1% |
| PAT (₹ Cr) | 5,637 reported / 2,647 normalised | 2,137 / 1,304 normalised | 338 (tax credit) | 988 | −799 (CCPS); TTM +721 |
| Net debt (₹ Cr) | −904 (Mar-26); ~0 (Jun-26) | −489 (Mar-26); ~0 (Jun-26) | ~+20–60 | 3,864 co. (Jun-26) / 5,736 screener | 3,856 co. (Jun-26) / 4,174 screener |
| Net debt/EBITDA | net cash | net cash | ~0× | 1.69× co. / 2.4× screener | 2.95× co. |
| M-cap (₹ Cr) | 86,757 (pro-forma post-merger ~97,900) | 21,350 | 2,314 | 37,744 | 15,397 |
| Price / 52w high | ₹350 / ₹589 (−41%) | ₹1,137 / ₹1,987 | ₹112 / ₹225 | ₹4,888 / ₹6,764 | ₹113 / ₹143 (IPO ₹147) |
| P/E (screener) | 18.4× (normalised ~33×) | 11.2× (normalised ~16×) | 10.9× | 38.6× | 19.5× (ex-DTA ~30×) |
| P/B | 1.46× | 1.04× | 1.08× | 5.4× | 2.35× |
| EV/EBITDA FY26 | 14.8× (incl. minorities) | 7.1× | 4.3× | 18.3× (17.5× co. ND) | 15.5× |
| EV/t (₹) | ~8,900 | ~5,160 | ~2,790 | ~12,300 | ~8,000 |
| Capacity (MTPA) | 109 → 119 (end-FY27) → 155 (~FY30) | ~40.4 (+3.4 in FY27) | ~8.5 | 32.3 grey + 3.1 white → 40 (FY28) → 50 (FY30) | 24.1 grinding / 9.74 clinker → 43.5–46 |
| FY26 volume (MT) | 73.7 (+16%) | 43.9 (+13%; incl. MSA) | ~6.6 [E] | 23.5 (+16%) | 13.96 (+11%; 41% GGBS) |
| EBITDA/t FY26 (₹) | 887 co. / 892 computed | 672 / 674 | ~830 [E] | 1,012 / 1,012 | 888 / 890 |
| Q1 FY27 EBITDA/t (₹) | 931 | 458 | 960 (ex-works basis) | 982 | 784 (979 ex-North) |
| Q1 FY27 volume YoY | −7% | −6.5% | −21% | grey +18% | +15% |
| Green power (latest) | 34% | 31% | n.d. | 53.5% | 30% |
| Listing status | Listed (transferee) | Listed; merging (3.28:1) | Listed; merging (0.33:1) | Listed | Listed (Aug-25 IPO) |

---

## 7. PRIMER ISSUES

Method: for each primer I extracted the HTML text and read the cover strip, the "What's new" box, the snapshot and the first sections. I then grepped for m-cap, P/E, promoter, swap, NCLT, GST, Q1 FY27, capacity and the banned phrases. Locations are given as the section and the approximate position of the text.

### 7.1 primers/ambuja-cements.html (last refreshed 2 Jul 2026)
1. **Stale m-cap.** Cover strip: "~₹1.06 L Cr Market cap (Jun '26)". §09: "At ~₹1.06 lakh Cr market cap and ~14× EV/EBITDA". **Correct:** ₹86,757 Cr at ₹350 (13 Oct 2026), −41% from the 52-week high. EV including ACC/Orient minorities is ~₹97,150 Cr, so EV/EBITDA is 14.8× [V: screener]. The primer's 14× on a ₹1.06 L Cr m-cap also understates EV, because it appears to ignore the ACC/Orient minorities.
2. **Stale P/E.** §09 metrics: "~21–22× Trailing P/E (Jun '26)". **Correct:** 18.4× on screener (reported EPS, inflated by tax write-backs) and ~33× on normalised FY26 PAT of ₹2,647 Cr [V/E].
3. **Wrong capacity timeline (repeated ~12 times).** Cover blurb, What's new ("FY28 capacity target lifted to 155 MTPA"), §00, §01 table, §03, §07 table, §10 ("target of ~155 MTPA by FY28"), §11 bull case. **Correct:** management has **moved the 155 MTPA target to ~FY30** and will pace additions "after existing plants reach optimal utilisation". Near term it is 119 MTPA by **end-FY27** [V: scanx Q4 FY26 call summary; Q1 FY27 release].
4. **119 MTPA timing.** §10: "~119 MTPA by H1 FY27". **Correct:** the Q1 FY27 release says "by the end of FY'27". Kalamboli and Warisaliganj trials are only in Q2 [V].
5. **Stale cost and EBITDA/t targets.** §00, §04, §11: "cost per tonne from ~₹4,200 toward ₹3,650 by FY28 … EBITDA/tonne toward ₹1,500". **Correct:** FY26 cost was actually ~₹4,400/t (not falling from ₹4,200). The FY27 guide is ₹4,250/t and FY28 ≤ ₹4,000/t. ₹3,650 is retained as a long-term target with an **extended timeline**. No ₹1,500/t target appears in the FY26 or Q1 FY27 materials [V: scanx; Investing.com].
6. **Balance-sheet framing.** §00: "debt-free, cash-rich platform … fortress balance sheet as the war chest". **Correct:** it is still debt-free, but cash and equivalents are only **₹1,770 Cr (Mar-26) and ₹844 Cr (Jun-26)**. Investments fell from ₹1,912 Cr to ₹113 Cr in FY26, and FCF was negative in FY25 and FY26 [V: releases; screener]. "Cash-rich" is stale.
7. **Stale shareholding.** §02: "Adani group holds ~67.7% (as of Mar 2026) … ~20% DIIs, ~6% FIIs, ~6% public". **Correct (Sep-26):** promoter 67.33%, DII 19.36%, FII 5.66%, public 7.66% [V: screener].
8. **Missing major events.** The primer never mentions the NCLT (zero occurrences). It omits the SEBI NOC (4 Jun 2026), the NCLT Ahmedabad orders (20 Jul for Orient, 29 Jul for ACC), and the **shareholder approvals on 28/29 Sep 2026** (Ambuja 99.98%; Orient public institutions only 64% in favour). "ACC + Orient amalgamation filed" is stale [V: §1g sources].
9. **Missing Q1 FY27.** Not covered: 17.1 MT (−7%), EBITDA ₹1,589 Cr, ₹931/t, PAT ₹660 Cr, green power 34%, capex ₹6,500 Cr [V: Q1 release].
10. **Rival capacity stale.** §07 table: "UltraTech clear #1 — ~180+ MTPA, targeting 200". **Correct:** 200.1 MTPA domestic and 205.5 MTPA global from Apr 2026, targeting ~242.5 MTPA by FY28 [V: batch-1 pack, UltraTech releases].
11. **History detail.** §02 timeline: "2024 Acquires Penna Cement … and Orient Cement". The Orient deal was **announced** in Oct 2024. The open offer completed and control passed in the **Jun-25 quarter** (promoter 37.86% → 72.66%), and Orient was consolidated for 11 months of FY26 [V: screener Orient shareholding; scanx].
12. **Utilisation estimate.** §01: "roughly 70% utilisation". This is consistent with my ~71% [E]. OK.
13. **GST cut mentioned once only.** It should be linked explicitly to the 22 Sep 2025 effective date and to FY26 H2 demand [K].
14. **Banned phrases:** "Think of Ambuja as Adani's bid…" (§00 "In plain terms" box). §11 headline: "priced for the roll-up and cost story to deliver", a variant of "priced for perfection". "honest": 0 occurrences.

### 7.2 primers/acc.html (last refreshed 13 Jul 2026)
1. **Major error: the cash pile does not exist.** §10 and the metrics table: "Net cash & investments ~₹13,500 Cr … over half the market cap"; "enterprise value of the actual business is only ~₹12,400 Cr … ~₹3,050 per tonne (~$36/tonne)"; "~4× EV/EBITDA cash-adjusted". Sources box: "cash/investments ₹13,987 Cr". **Correct:** ₹13,987 Cr is screener's **"Other assets"** line (receivables, inventory, loans and advances). **Company cash & equivalents are ₹918 Cr (Mar-26) and ₹375 Cr (Jun-26)**, against ₹429 Cr of borrowings, so **net cash is ~₹489 Cr, or roughly zero at Jun-26**. EV ≈ ₹20,860 Cr, **EV/EBITDA ≈ 7.1×, EV/t ≈ ₹5,160** [V: ACC Q4 and Q1 releases; screener]. The primer's whole "curiosity" thesis ("strip out its enormous cash pile…", §00 "In plain terms") rests on this error and should be removed.
2. **Stale m-cap, price, P/E, P/B.** Cover strip "~₹25,900 Cr Market cap (Jul 2026)"; metrics "~₹1,380/share", "P/E · P/B ~12× · ~1.3×". **Correct:** ₹21,350 Cr, ₹1,137, P/E 11.2×, P/B 1.04× (13 Oct 2026) [V: screener].
3. **Q4 EBITDA/t wrong.** What's new, §00 and §05: "Q4 EBITDA/tonne down to ₹471". **Correct:** **₹525/t** (company). FY26 was ₹672/t [V: ACC Q4 release].
4. **PAT basis mislabelled.** §10 caveat: "standalone PAT (~₹1,304 Cr) versus the consolidated ~₹2,137 Cr". **Correct:** ₹1,304 Cr is **normalised** PAT (excluding one-offs), not standalone. Reported consolidated PAT is ₹2,137 Cr [V: Q4 release].
5. **Volume vs capacity.** §00 / §10: "sold a record 43.9 Mt off ~40 MTPA … ran ~flat-out". **Correct:** volume above capacity reflects **MSA purchases from Ambuja**. Q4 utilisation was ~80% (company). The Q1 FY27 release attributes weak margins partly to "higher MSA volumes with parent Ambuja" [V].
6. **Merger status stale.** What's new: "subject to NCLT and shareholder approvals". **Correct:** SEBI NOC 4 Jun 2026; NCLT application 29 Jun; NCLT order 29 Jul; **shareholders approved on 29 Sep 2026** (ACC 95.52% per press [unverified]; Ambuja 99.98% [V]). Only NCLT sanction and the record date remain [V: ACC Q1 release; scanx].
7. **Missing Q1 FY27.** 10.0 MT (−6.5%), EBITDA ₹457 Cr (7.9%), **₹458/t**, PAT ₹147 Cr, cash ₹375 Cr [V: Q1 release].
8. **Group capacity target stale.** §00: "a group racing toward a combined 140+ MTPA". Sources box: "capacity target 140→155 MTPA by FY28". **Correct:** 119 MTPA by end-FY27; 155 MTPA pushed to ~FY30 [V].
9. **Ownership detail.** §04: "mutual funds (~14%), foreign investors (~5%)". **Correct (Sep-26):** DII 20.97% (including LIC), FII 5.75%, public 16.42% [V: screener].
10. **Rival capacity stale.** Sources box: "UltraTech ~190 MTPA (→240)". Correct: 205.5 MTPA global [V: batch 1].
11. **Sanghi/Penna dates.** Sources box: "Sanghi (merged Mar 2026), Penna (Apr 2026)". **Correct:** both amalgamations were completed by the FY26 results (4 May 2026), and **Sanghi was delisted w.e.f. 6 Apr 2026** [V: Ambuja FY26 release].
12. **Banned phrases:** "honest" once (§06, "the honest reality is that the exchange terms…"). That is within the limit. No other banned phrases found.

### 7.3 primers/orient-cement.html (last refreshed 4 Sep 2026)
1. **Stale m-cap.** Cover strip: "~₹2,633 Cr Market cap (Sep 2026)". **Correct:** ₹2,314 Cr at ₹112 (13 Oct 2026). P/E 10.9×, P/B 1.08× [V: screener].
2. **Revenue figure.** Cover/What's new: "revenue ~₹2,816 Cr". **Correct:** ₹2,793 Cr (screener and Elara company data) [V]. The ₹2,816 Cr figure is on a different basis (possibly total income, or an unrestated figure; even revenue plus ₹16 Cr of other income gives only ₹2,809 Cr). Use ₹2,793 Cr.
3. **Missing Q1 FY27**, even though the primer was refreshed on 4 Sep, after the late-July results. Volume 1.50 MT (−21%), EBITDA ₹144 Cr, ₹960/t, PAT ₹77 Cr (−62%) [V: Elara].
4. **Missing business-model change.** Freight & packing fell from ₹1,055/t to ₹207/t, and realisation is ~₹4,027/t ex-works under the **MSA with Ambuja**. Debtors rose from ₹248 Cr to ₹840 Cr and FY26 CFO was negative. The primer's cost section treats Orient as a normal market-facing seller [V: Elara].
5. **Merger status stale.** It is described only as board-approved and pending "shareholders, creditors, the courts (NCLT)". **Correct:** NCLT Ahmedabad order of 20 Jul 2026 (creditor meetings dispensed with); **shareholder meeting on 28 Sep 2026 approved the scheme 97.83% overall and 78.85% on public votes; public institutions only 64.19% in favour** [V: Orient outcome PDF]. This dissent is a material omission.
6. **Valuation anchor.** The primer frames value as 0.33 × Ambuja. It should add the current read: 0.33 × ₹350 = ₹115.5 vs ₹112, a ~3% spread [E].
7. **Plant capacities.** §02: Devapur ~3.0, Chittapur ~3.5, Jalgaon ~2.0 (sums to 8.5). The primer flags these as approximate. **Unverified** this session; the company's own split is needed.
8. **Shareholding OK.** 72.66% promoter matches screener Sep-26. The primer should show the latest FII/DII split (3.14% / 2.23%) [V].
9. **Banned phrases:** none found. "honest": 0.

### 7.4 primers/jk-cement.html (last refreshed 5 Jul 2026)
1. **Grey capacity stale.** Cover strip "~28 MTPA Grey capacity". §00 "taking grey capacity toward ~28 MTPA on the way to 30+ MTPA". **Correct:** **32.3 MTPA grey** now (after ~6 MTPA added in FY26) [V: JK Q1 FY27 deck summary].
2. **Capacity target wrong.** §00 / §10 / §11: "30+ MTPA by ~FY28". **Correct:** **40 MTPA by FY28** (Jaisalmer, Bikaner and Punjab, ~7 MTPA in H1 FY28) and **50 MTPA by FY30** [V: Investing.com; PL].
3. **Net profit wrong.** Cover/§00: "~₹1,033 Cr Net profit (FY26)". **Correct:** ₹988 Cr (screener consolidated) or ₹992.5 Cr attributable (PL) [V].
4. **Revenue basis.** Cover "~₹13,400 Cr"; §10 "net sales ₹13,391 Cr". **Correct:** **₹13,722 Cr** consolidated revenue from operations (screener and PL) [V].
5. **Leverage.** §06 / §10 / bear case: "net-debt/EBITDA ~2.5×". This matches screener gross debt (2.4×), but the **company reports 1.69× (net debt ₹3,864 Cr at Jun-26)**. Show both bases [V].
6. **P/E / m-cap.** "~₹38,000 Cr … P/E ~40×". This happens to be close to today (₹37,744 Cr; 38.6×), but the price is now ₹4,888, near the 52-week low of ₹4,670 and well below the "₹4,800–5,400 band" quoted. Update the date stamp [V: screener].
7. **Missing Q1 FY27** (results 20 Jul 2026): grey 5.96 MT (+18%), white 0.54 MT (+29%), EBITDA ₹648 Cr consolidated, ₹982/t (−20%), PAT ₹275 Cr, FY27 grey guide 22.5–23 MT, net debt ₹3,864 Cr [V].
8. **Paints numbers.** It cites only the "up to ~₹600 Cr" board-approved investment (2022). **Add:** FY26 paints revenue ~₹380 Cr with an EBITDA loss of ~₹40 Cr; FY27 guide ₹500–550 Cr at breakeven [V: PL].
9. **Rival capacities stale.** §00: "UltraTech (~180+ MTPA) and Adani's Ambuja/ACC platform (~118 MTPA)". §08: "UltraTech ~180+ MTPA heading toward ~240". **Correct:** UltraTech 205.5 MTPA (→ ~242.5 by FY28). Adani 109 MTPA (→ 119 by end-FY27) [V].
10. **FY26 grey volume** "20.66 MnT (+15%)" is plausible (my quarterly sum ≈ 21 MT) but not verified. The consolidated total is 23.5 MT (+16%) [V: PL]. **Green power** "~52% FY26" vs PL's 51%: minor.
11. **Missing context:** FY26 incentives of ~₹230 Cr (~₹100/t) support EBITDA/t; the UAE white-cement disruption from the West Asia conflict [V: PL].
12. **Banned phrases:** **"call option" 3×** (§09 / §11 table "Upside call option on a huge, high-margin adjacent market"; §11 "Paints is a call option on top"; bull case "paints as a call option on a huge market"), close to the banned "call option on the future". "40× leaves little room if the cycle turns" (§10, and the bear case "leaves little room if the cement cycle … turns down") is a variant of "no room for error". "honest" once (§09 "The honest read"): OK.

### 7.5 primers/jsw-cement.html (last refreshed 16 Jul 2026)
1. **Stale m-cap and IPO comparison.** Cover "~₹19,100 Cr Market cap (mid-2026)". §10: "trading near/below the ₹147 IPO price"; "~₹9,400/t EV per tonne". **Correct:** ₹15,397 Cr at ₹113, **23% below the IPO price**. EV/t ≈ ₹8,000. P/E 19.5×, P/B 2.35× [V: screener].
2. **FY26 margin.** What's new / §00: "EBITDA ₹1,240 Cr (+44%, ~19.9% margin)". **Correct:** **19.0%** operating EBITDA margin (company); 19.1% on screener [V: Q4 release].
3. **Leverage.** §05: "2.72× Net debt / EBITDA". **Correct:** ₹3,635 Cr ÷ ₹1,240 Cr = **2.93× at Mar-26**; company **2.95× at Jun-26** (net debt ₹3,856 Cr) [V].
4. **Capacity ladder stale or inconsistent.** §07: "~35 MTPA by CY2028 … ~42 MTPA by FY29 … ~60 MTPA longer term". **Correct:** the Q4 FY26 release targets **46.0 MTPA grinding + 13.04 MTPA clinker**. The Q1 FY27 call gives **43.5 MTPA** (~₹7,500–7,600 Cr) and then ~25 MT more (~68 MTPA) over 3–4 years. Vijayanagar Phase 1 is delayed beyond CY28; Dolvi 4 MT is ~15 months out; Nagaur gets +1 MT GU by Q2 FY27 and another +2.5 MT GU approved (₹430 Cr) [V].
5. **Missing Q1 FY27** (Jul-26): volume 3.81 MT (+15%), operating EBITDA ₹299 Cr (−7.5%), **₹784/t (₹979 ex-North)**, PAT ₹153 Cr, utilisation 61%, fuel ₹1.80/Mcal (+21% QoQ), GGBS growth guide cut to high single digits [V: Q1 call transcript].
6. **CCPS charge figure.** "one-off ₹1,466 Cr non-cash CCPS-conversion charge". Screener shows other income of −₹1,444 Cr in Q1 FY26 and −₹1,323 Cr for FY26. **Unverified;** reconcile against the FY26 annual report [V: screener].
7. **Q4 PAT.** "Q4 PAT ₹362 Cr" is correct (₹361.7 Cr), but the primer should flag the **₹211 Cr deferred-tax release** in it [V: Q4 release].
8. **Rival capacities.** §00 / §08: "UltraTech (~189 MTPA) … → 240". **Correct:** 205.5 MTPA global [V: batch 1]. "Adani group (~109 MTPA)": correct.
9. **Shareholding.** "promoter group still holds about 72%" is correct (72.02% at Jun-26). Add the DII rise to 11.49% and the lock-in expiries [V: screener].
10. **Banned phrases:** none from the list. "honest" once (§05 "the honest read on FY26"): OK.

### 7.6 Cross-primer issues (all five)
- **Q1 FY27 missing in all five** (zero occurrences of "Q1 FY27" in any primer) [V: grep].
- **No primer mentions that Q2 FY27 is due in late Oct/Nov.**
- **GST cut 28% → 18% (22 Sep 2025):** each primer mentions GST once at most (ACC 3×, the others 1×), without the effective date or its FY26 H2 demand effect [grep].
- **Consolidation perimeter:** the Ambuja, ACC and Orient primers each quote their own volumes without warning that ACC's and Orient's numbers sit inside Ambuja's 73.7 MT and 109 MTPA, or that intra-group MSA flows inflate ACC's volume.
- **UltraTech capacity is stale everywhere** (180+ / 189 / 190 MTPA vs 205.5 MTPA actual).

---

### Sources fetched this session (key)
- screener.in consolidated and standalone pages for AMBUJACEM, ACC, ORIENTCEM, JKCEMENT, JSWCEMENT (curl, 13 Oct 2026)
- Ambuja Q1 FY27 media release (nsearchives PDF); Ambuja FY26 release (adani.com)
- ACC Q1 FY27 media release (nsearchives PDF); ACC Q4 FY26 release (adani.com)
- Orient NCLT-meeting outcome and voting results, 28 Sep 2026 (nsearchives PDF)
- Elara Securities Orient Cement Q1 FY27 note (PDF); PL Capital JK Cement Q4 FY26 note (PDF)
- JSW Cement Q4 FY26 press release (nsearchives PDF); Investing.com JSW Q1 FY27 call transcript; Investing.com Ambuja and JK Q1 FY27 deck summaries; scanx (Ambuja Q4 FY26 call; Ambuja EGM vote); multibagg (merger timeline, two articles)
- Failed or blocked: bseindia.com API (Access Denied); Business Standard and NewKerala (403). ACC's own 95.52% vote figure was taken from search snippets only and is **unverified**.
