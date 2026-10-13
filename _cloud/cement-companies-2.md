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
