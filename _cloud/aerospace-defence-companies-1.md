# Aerospace & Defence: company packs, batch 1 of 3 (defence PSUs)

Sub-sector: Capital Goods || Aerospace & Defense. Companies: HAL, BEL, BDL, MIDHANI.
Pack compiled 13 Oct 2026. Every m-cap, price, P/E and Book Value was re-pulled from screener.in on **13 Oct 2026** (curl fetch, prices as screener showed them that day).

**Tags.** [V] = fetched and checked this session. [K] = from memory, with the source named. [E] = my estimate or a figure I derived.

**Main primary sources fetched this session**
- screener.in consolidated and standalone pages, plus the balance-sheet schedule API (`/api/company/<id>/schedules/`), fetched 13 Oct 2026 [V].
- NSE iXBRL "Integrated Filing" balance sheets for FY26 (audited, Mar-2026), from nsearchives.nseindia.com [V]:
  - HAL consolidated (157527, 14 May 2026)
  - BEL standalone and consolidated (158846 / 158847, 19 May 2026)
  - BDL standalone (162829, 28 May 2026)
  - MIDHANI consolidated (163491, 29 May 2026)
- NSE PDFs: BEL order press release of 17 Sep 2026; BDL Q1 FY27 results of 14 Aug 2026; MIDHANI Q3 FY26 concall transcript of 17 Feb 2026 [V].
- Broker notes fetched as PDF:
  - ICICI Direct, HAL Q1 FY27 (13 Aug 2026)
  - ICICI Securities and Motilal Oswal, BDL Q4 FY26 (28–29 May 2026)
  - PL Capital, BEL Q1 FY27 (28 Jul 2026, via WebFetch)

**Status of Q2 FY27 (Sep-26 quarter).** No result was out for any of the four on 13 Oct 2026. The latest quarter on screener is Jun-2026 for all four [V]. Expected timing, from the usual pattern:
- BEL: late Oct
- HAL: around early-to-mid Nov
- BDL and MIDHANI: mid-Nov

**Status of Sep-26 shareholding.** Not yet on screener; the latest pattern is Jun-2026 [V].

**Listing status.** All four are still listed. There is no merger or demerger pending at any of them. The government stake is unchanged since the last OFS in each case.

**How the bases are defined**
- **"OP" / EBITDA.** This means screener operating profit: revenue minus operating expenses, *excluding* other income. Companies sometimes report EBITDA *including* other income; where I use that, I say so.
- **"Cash".** This is cash and cash equivalents **plus** "bank balances other than cash" (fixed deposits) from the audited FY26 balance sheet. For these four, it equals screener's "Cash Equivalents" schedule line, so screener does not undercount it here.
- **"Advances".** This is "advances from customers" or contract liabilities as reported in the filing, current plus non-current.
- **EV.** M-cap + borrowings − cash (company basis).

---

## 1. Hindustan Aeronautics Ltd (NSE: HAL · BSE: 541154)

Fetched 13 Oct 2026. Sources:
- screener: https://www.screener.in/company/HAL/consolidated/ [V]
- FY26 consolidated iXBRL: https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_157527_14052026170430_iXBRL_WEB.html [V]
- ICICI Direct Q1 FY27 note: https://mailcontent.icicidirect.com/mailcontent/idirect_hal_q1fy27.pdf [V]

### 1.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 30,381 | 30,981 | 33,089 | screener [V]; the iXBRL gives FY26 as 33,088.82 [V] |
| Growth YoY | +12.8% | +2.0% | +6.8% | [E] calc |
| OP / EBITDA (ex other income) | 9,752 | 9,621 | 9,788 | screener [V]; ICICI Direct puts FY26 at 9,770 |
| OP margin | 32.1% | 31.1% | 29.6% | screener [V] |
| Other income | 1,923 | 2,608 | 3,743 | screener [V]. Mostly interest on deposits, plus offset credits (₹1,132 cr of FY26 revenue came from offset credits; press-reported, unverified) |
| PAT | 7,621 | 8,364 | 9,116 | screener [V] |
| EPS (₹) | 113.96 | 125.07 | 136.30 | screener [V] |
| ROCE | 39% | 34% | 32% | screener [V] |
| ROE (on average equity) | ~28% | ~26% | 24.0% | screener 24.0% [V]; earlier years [E] |
| Borrowings | 50 | 51 | 66 (lease and similar; the filing shows 0 bank borrowings) | screener / iXBRL [V] |
| Cash + bank incl. FDs | 26,432 | 38,182 | **46,197** (= 3,768 cash + 42,429 other bank balances) | iXBRL FY26 [V]; FY24 and FY25 from the screener schedule [V] |
| Net cash | 26,382 | 38,131 | **46,131** | [E] |
| Net worth | 29,138 | 34,981 | 41,041 | screener [V] |
| CFO | 8,223 | 13,643 | 10,906 | screener [V] |
| Dividend payout | 31% | 32% | 33% (₹45/share FY26: ₹35 interim + ₹10 final) | screener [V]; DPS [K] from HAL board outcome, May 2026 |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹4,869 |
| M-cap | ₹3,25,907 cr |
| P/E (TTM) | 35.0× |
| Book value / share | ₹614 → P/B 7.9× |
| EV | ₹2,79,776 cr → EV/EBITDA 28.6× FY26 OP, 27.9× TTM OP of ₹10,014 cr [E] |
| Dividend yield | 0.92% |
| 52-week range | ₹5,150 / ₹3,479 |

### 1.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 5,515 | 4,819 | +14.4% | 13,942 |
| EBITDA (ex OI) | 1,527 | 1,282 | +19.1% | 5,059 |
| EBITDA margin | 27.7% | 26.6% | +107 bp | 36.3% |
| Other income | 912 (screener) / 900 (ICICI) | 757 | | 1,164 |
| PAT | 1,590 | 1,384 | +14.9% | 4,196 |

Sources: screener quarters [V]; ICICI Direct 13 Aug 2026 [V].

**Conflict on Q1 FY26 EBITDA.** One news write-up (niftytrader, 13 Aug 2026) gives Q1 FY26 EBITDA as ₹1,039 cr, which would mean +47% YoY. Screener and ICICI agree on ₹1,282 cr, and I treat that as more credible.

**Q1 FY27 order inflow.** HAL did not disclose a quarterly figure. A search snippet gave "₹3,750 cr", but on checking, that number belongs to **BEL**, not HAL. I flag this so the cross-attribution is not repeated. **HAL's Q1 inflow is unverified.**

### 1.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹2,54,538 cr at 31 Mar 2026** (opening FY26: ~₹1.89 lakh cr) | HAL FY26 results, via ICICI Direct note [V] and niftytrader [V]. No Jun-26 order book disclosed |
| Order-book cover | **7.7×** FY26 revenue | [E] 254,538 / 33,089 |
| FY26 order inflow | **₹97,028 cr** (₹69,668 cr manufacturing + ₹26,539 cr ROH) | HAL FY26 release as quoted in the primer and press [K]. It reconciles: 1.89 L + 0.97 L − 0.33 L ≈ 2.53 L [E] |
| Book-to-bill (inflow ÷ revenue) | **2.9×** | [E] |
| Execution rate (FY26 revenue ÷ opening order book) | **17.5%** | [E] 33,089 / ~1,89,000 |
| FY27 inflow outlook | ~₹90,000 cr over **two years**: ALH, Su-30 upgrade, Dornier, engines | Mgmt, quoted by brokers (sahi.com / ICICI) — search-level, **unverified fetch** |
| FY27 guidance | Revenue +10–12%; EBITDA margin ~30–31%; ~20–24 Tejas Mk1A deliveries a year subject to engines | ICICI Direct Q1 note [V] |
| Customer advances | **₹74,190 cr** (other current liabilities 29,501 + other non-current liabilities 44,689) | iXBRL [V]. The lines are not broken out in the filing. Screener tags only ₹8,207 cr as "Advance from customers", so the true advances lie between 8.2k and 74k; brokers treat most of the 74k as advances [E] |
| Advances ÷ order book | **~29%** (upper bound) | [E] |
| Cash incl. FDs | ₹46,197 cr (₹42,429 cr of it is "other bank balances", i.e. FDs) | iXBRL [V] |
| Receivable days | **45** | screener [V]; 4,066 / 33,089 × 365 = 45 [E] |
| Inventory | ₹30,851 cr → 340 days of sales; 859 days on screener's cost basis | iXBRL [V] / screener [V] |
| Net working-capital days | **301** (up from 37 in FY24, because inventory of engine-less Tejas built up) | screener [V] |
| Manufacturing vs ROH mix | ~30 : 70 in FY26. Mgmt sees it moving toward 50 : 50 as Mk1A, LCH and HTT-40 ramp | Mgmt via brokers; primer cites mfg ~₹9.2k / ROH ~₹20.5k cr [K, unverified] |
| Export share | <2% of revenue. Examples: Do-228 for Guyana, ALH, airframe structures for Airbus and Boeing | [K] HAL annual reports; **unverified this session** |
| R&D spend | Historically ~7–10% of revenue, self-funded | [K] HAL annual reports; **unverified this session** |
| Indigenous content | Varies by platform. Tejas Mk1A targets >60–65%, rising to ~70% | [K] MoD/HAL statements; unverified |
| Nomination vs competitive | Mostly nomination (Tejas, LCH, Su-30, ROH). AMCA went competitive and HAL was excluded (see §1.6) | [V] search/press |
| Government holding | **71.64%** (Jun-26; flat for 7 quarters) | screener [V] |
| Last OFS | Mar 2023, 3.5% | [K] DIPAM |
| FII / DII | 9.34% / 11.90% (Jun-26). FIIs fell from 12.26% in Dec-24 | screener [V] |

### 1.4 Segment / platform mix
HAL reports **one segment** (aircraft, helicopters, engines, avionics) [V, iXBRL].

| Revenue engine | FY26 weight | Notes |
|---|---|---|
| Repair & Overhaul (ROH), spares | ~65–70% | Su-30MKI, Jaguar, MiG, Mirage, ALH and engine fleets. A high-margin annuity |
| Manufacturing | ~30–35% | Su-30MKI (12 more contracted Dec 2024, ~₹13,500 cr [K, MoD PIB 12 Dec 2024]); LCH Prachand (156, ₹62,700 cr, 28 Mar 2025 [K, MoD]); ALH, Do-228, HTT-40; Tejas Mk1A (83 + 97) once engines arrive |

### 1.5 Capacity and plants
- **Divisions.** About 20 production divisions and 11 R&D centres: Bengaluru (aircraft, helicopters, engines), Nashik (Su-30, plus the third Tejas line), Koraput (engines), Lucknow (accessories), Kanpur (transport aircraft), Hyderabad and Korwa (avionics), and the Tumakuru helicopter factory [K, HAL annual report].
- **Tejas Mk1A lines.** Two lines in Bengaluru plus one in Nashik, giving a stated capacity of **24+ jets a year** [V, ICICI note: "targets to deliver 24+ LCAs annually"].
- **Capex.** ₹2,465 cr in FY26. About **₹14,000 cr planned over five years** (manufacturing, ROH, next-gen) [V, ICICI note].

### 1.6 Key programmes and contracts

| Date | Event | Value | Tag |
|---|---|---|---|
| Feb 2021 | 83 Tejas Mk1A + 10 trainers | ~₹48,000 cr | [K] MoD |
| Aug 2021 | 99 GE F404-IN20 engines ordered | ~$716m | [K] |
| 12 Dec 2024 | 12 Su-30MKI | ~₹13,500 cr | [K] MoD PIB |
| 5 Jan 2025 | ICG ALH Dhruv crash at Porbandar → fleet-wide grounding. Army/IAF versions cleared after ~4 months (swashplate fatigue fix); Navy/ICG later | — | [V] Tribune (search), [K] |
| 28 Mar 2025 | LCH Prachand: 156 helicopters (66 IAF + 90 Army) | ₹62,700 cr | [K] MoD; also cited in primer |
| May 2025 | Operation Sindoor: no direct HAL order. It raised urgency on fighter squadrons (~31 vs 42 sanctioned) and on the Su-30 upgrade | — | [K] |
| 25 Sep 2025 | 97 more Tejas Mk1A (68 + 29 trainers) | ₹62,370 cr | [K] MoD |
| Nov 2025 | 113 more F404-IN20 engines (follow-on); deliveries 2027–2032 | ~$1bn | [K]/search-level, **unverified fetch** |
| 12 Feb 2026 | 8 Dornier 228 for the Coast Guard | ₹2,312 cr | search-level (aviation-defence-universe), unverified |
| 3 Mar 2026 | 6 ALH Mk III (maritime) for the Coast Guard | ₹2,901 cr | search-level (investywise / Global Trade Alert), unverified |
| Feb–May 2026 | AMCA prototype phase (5 prototypes, ~₹15,000 cr) shortlisted to Tata Advanced Systems (TASL), an L&T-led consortium (incl. BEL), and a Bharat Forge-led consortium (incl. BEML, Data Patterns); **HAL excluded**. RFP issued May 2026 | ~₹15,000 cr phase | search-level (ETV Bharat, Swarajya), unverified |
| Apr 2026 | GE F414 co-production: technical understanding with **~80% ToT**. The commercial contract is still pending, expected later in 2026 | — | [V] NewsArena 13 Apr 2026 |
| Aug 2026 | GE shipped 3 F404s, making **10 delivered in total** (only 6 in FY26 vs 11 promised). ~12 more expected Oct–Dec 2026 (Defence Secretary) | — | [V] Indian Masterminds, 29 Sep 2026 |

### 1.7 Story bullets
- **Execution, not demand, is the whole story.** The order book (₹2.55 lakh cr) is 7.7× revenue, but FY26 revenue grew only 6.8%. About 27–30 Mk1A airframes are waiting for GE engines. The FY27 guide of 10–12% growth needs ~20 Tejas deliveries, and so far only 10 F404s have arrived [V].
- **Margin quality.** The ~30% OP margin is supported by escalation clauses, pre-procured inventory and the ROH mix. Other income (₹3.7k cr, 29% of PBT) comes from the ₹46k cr deposit pile, which is funded by ~₹74k cr of customer-side liabilities [V].
- **Working capital is building.** NWC rose from 37 days to 301 days in two years, and inventory went from ₹16k cr to ₹33k cr, because built-but-undelivered jets are stuck on the balance sheet. Engine arrivals should release that inventory into revenue quickly [V/E].
- **The moat is narrowing at the frontier.** HAL lost the AMCA development-partner race. A private ecosystem (TASL, L&T, Bharat Forge) now competes for the fifth-generation platform. HAL keeps Tejas, LCH, Su-30, engines (F414 co-production) and the ROH annuity.

### 1.8 Risks
- Dependence on GE for both the F404 and F414 engines.
- A monopsony customer that is also the 71.6% owner (pricing, dividends, OFS overhang).
- The ALH safety and reputational overhang.
- AMCA going private.
- Q4 back-loading (Q4 FY26 = 42% of revenue).
- Inventory and liquidated-damages exposure on delayed Mk1A deliveries.

---
## 2. Bharat Electronics Ltd (NSE: BEL · BSE: 500049)

Fetched 13 Oct 2026. Sources:
- screener: https://www.screener.in/company/BEL/consolidated/ [V]
- FY26 iXBRL, consolidated: https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_158847_19052026163923_iXBRL_WEB.html [V]
- FY26 iXBRL, standalone: https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_158846_19052026163916_iXBRL_WEB.html [V]
- DSIJ Q4 FY26 write-up, 20 May 2026 [V]
- Liquide blog (FY26 inflow and FY27 guidance), 21 May 2026 [V]
- PL Capital Q1 FY27 note, 28 Jul 2026: https://www.plindia.com/pl-research/bharat-electronics-bhe-in-q1fy27-result-update-decent-q1-order-inflow-remains-key-monitorable-accumulate/ [V]
- BEL press release, 17 Sep 2026: https://nsearchives.nseindia.com/corporate/BEL_17092026164308_Lettersigned.pdf [V]

### 2.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 20,268 | 23,769 | 27,610 (standalone 27,480) | screener [V]; iXBRL 27,610.11 consolidated / 27,479.63 standalone [V] |
| Growth YoY | +14.3% | +17.3% | +16.2% | [E] |
| OP / EBITDA (ex OI) | 5,051 | 6,837 | 8,053 | screener [V] |
| OP margin | 24.9% | 28.8% | **29.2%** | screener [V] |
| Other income | 670 | 742 | 566 | screener [V] |
| PAT | 3,985 | 5,323 | 6,062 (owners; standalone 6,048) | screener / DSIJ [V] |
| ROCE | 35% | 39% | 36% | screener [V] |
| ROE | ~27% | ~29% | 27.4% (screener) | [V]/[E] |
| Borrowings | 63 | 61 | 65 (lease; bank debt nil) | screener / iXBRL [V] |
| Cash + bank incl. FDs | 11,057 | 9,545 | **8,572** (= 1,888 cash + 6,684 other bank balances) | iXBRL FY26 [V]; earlier years from the screener schedule [V] |
| Net cash | ~10,990 | ~9,480 | **~8,507** | [E] |
| Net worth | 16,326 | 19,974 | 23,988 | screener [V] |
| CFO | 4,659 | 564 | 1,541 | screener [V] |
| Dividend payout | 40% | 33% | 30% (₹2.50/share: ₹1.95 interim + ₹0.55 final) | screener [V]; DSIJ [V] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹380 |
| M-cap | ₹2,77,995 cr |
| P/E (TTM) | 45.2× |
| Book value / share | ₹32.8 → P/B 11.6× |
| EV | ~₹2,69,490 cr → EV/EBITDA 33.5× FY26, 32.9× TTM OP of ₹8,199 cr [E] |
| Dividend yield | 0.66% |
| 52-week range | ₹473 / ₹360 |

Context: the price was ₹415 on 20 May 2026 (DSIJ) and ₹399 on 18 Sep 2026 (search). The stock has de-rated from the ~50× P/E the primer quotes.

### 2.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue | 5,547 (standalone 5,533) | 4,440 | +24.9% |
| EBITDA (ex OI) | 1,388 | 1,238 | +12.1% |
| EBITDA margin | 25.0% (PL: 25.1%, −297 bp YoY, "product mix") | 27.9% | |
| PAT | 1,055 (standalone 1,048) | 969 | +8.9% |
| Order inflow | ~₹3,750–3,800 cr (−51% YoY) | ~₹7,700 cr | Choice via search; PL "~Rs 38bn" [V] |
| Order book | ₹72,258 cr at 1 Jul 2026 (PL: ₹722.6bn) | | PL [V] |

Sources: screener quarters [V]; PL Capital [V].

**FY27 order disclosures after Q1** (Reg. 30 press releases)

| Date | Orders since previous disclosure | Source |
|---|---|---|
| 31 Jul 2026 | ₹847 cr | search-level |
| 10 Aug 2026 | ₹541 cr (since 31 Jul) | NSE PDF, search-level |
| 26 Aug 2026 | ₹730 cr | Business Today, search-level |
| **17 Sep 2026** | **₹648 cr** (since 26 Aug): laser IR jammers, comms, cyber-security, thermal imagers, TR modules, AI software, spares | NSE PDF [V] |

That makes FY27 inflow to 17 Sep **≈ ₹6,500 cr** [E], against guidance of >₹55,000 cr. No later disclosure was found up to 13 Oct 2026.

### 2.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹73,882 cr at 1 Apr 2026**; ₹72,258 cr at 1 Jul 2026 | DSIJ [V]; PL [V] |
| Opening FY26 order book | ~₹71,650 cr (1 Apr 2025) | [K] BEL press release, Apr 2025. Reconciles: 71,650 + 30,045 − 27,480 ≈ 74,215 vs 73,882 reported |
| Order-book cover | **2.7×** FY26 revenue | [E] |
| FY26 order inflow | **₹30,045 cr**, incl. ~$346m of export orders | Liquide [V]; export figure from primer [K] |
| Book-to-bill | **1.09×** | [E] |
| Execution rate (FY26 revenue ÷ opening order book) | **~38.5%** | [E] 27,610 / 71,650 |
| FY27 guidance | Revenue **+15%**; EBITDA **~28%**; inflow **>₹55,000 cr incl. ~₹30,000 cr QRSAM** (all maintained at Q1) | PL [V]; Liquide [V] |
| QRSAM | Defence Acquisition Council (DAC) gave Acceptance of Necessity (AoN) on 3 Jul 2025 (~₹30,000 cr). **Not signed as of Oct 2026.** Commercial negotiations ongoing; signing targeted H2 CY2026. A 75-ha UP production site was approved in Apr 2026 | idrw (search-level); PL [V] |
| Other pipeline | Shatrughat / Samaghaat EW ~₹9,000 cr; HAMMER ~₹2,500 cr; Shakti Ph-IV ~₹2,000 cr; **Project Kusha ~₹40,000 cr** (long-range SAM) | PL [V] |
| Customer advances | **₹12,571 cr** (Mar-26), down from ₹15,891 cr (Mar-24). Other current liabilities total ₹13,221 cr | screener schedule [V]; iXBRL [V] |
| Advances ÷ order book | **17%** | [E] |
| Cash incl. FDs | ₹8,572 cr (₹6,684 cr in FDs) | iXBRL [V] |
| Receivable days | **170** (₹12,876 cr receivables) | screener [V]; iXBRL [V] |
| Inventory | ₹10,176 cr → 134 days of sales (265 on screener cost basis) | [V] |
| NWC days | **135** (FY24: 18; FY22: 4). The primer's "negative working capital" is no longer true | screener [V] |
| Export share | FY26 exports ~$142m (~4% of revenue); **export order book US$465m** (Jul 2026); export pipeline 4–5× the backlog | exports [K, primer/BEL]; order book PL [V] |
| Non-defence share | ~10% of revenue, target ~15% (EVMs, Kavach, smart cities, homeland security) | [K] BEL concalls; unverified this session |
| R&D | Plan >₹1,600 cr/yr ≈ **~6% of revenue** | primer citing mgmt [K]; unverified |
| Indigenous content | **~78–80%** | PL Jul 2026 [V] |
| Nomination vs competitive | Majority nomination / Buy (Indian-IDDM). BEL is also a member of the L&T-led AMCA consortium | [K]; AMCA search-level |
| Government holding | **51.14%** (Jun-26; flat). No OFS since 2022 | screener [V]; OFS history [K] |
| FII / DII | 18.02% / 21.02% (Jun-26) | screener [V] |

### 2.4 Segment / platform mix

| Business | Weight | Products |
|---|---|---|
| Defence | ~85–90% of revenue | Radars (Ashwini, Arudhra, LLTR); air-defence systems (Akash electronics, Akashteer, QRSAM, MRSAM/LRSAM); EW; naval systems (sonars, combat management systems, fire control); communications / SDR; avionics (LCA Mk1A LRUs); electro-optics; electronic fuzes; BMP-2 upgrades |
| Non-defence | ~10% | EVM / VVPAT, Kavach rail anti-collision, smart city / surveillance, satcom, space, medical electronics |
| Exports | ~4% | Coastal surveillance, radars, EW, components |

PL notes that more than ₹20,000 cr of the order book sits in fuzes, LRSAM, LCA Mk1 LRUs, BMP-2 upgrades, Ashwini and Arudhra [V].

### 2.5 Capacity and plants
- Nine units: Bengaluru (largest), Ghaziabad, Pune, Machilipatnam, Panchkula, Kotdwara, Chennai, Navi Mumbai, Hyderabad. Also central R&D, and a subsidiary, BEL Optronic Devices [K, BEL AR].
- New: a dedicated QRSAM / missile-systems hub in UP (75 ha approved, Apr 2026) [search-level]; a defence systems integration complex at Palasamudram (Andhra Pradesh) [K].
- Capex guide >₹1,000 cr/yr [K, primer citing mgmt].

### 2.6 Key programmes and contracts

| Date | Event | Value | Tag |
|---|---|---|---|
| FY24 | Akash (Army) | ₹8,160 cr | [K] |
| FY25 | Ashwini LLTR radars, EW suites, Arudhra | — | [K] |
| May 2025 | **Operation Sindoor** (7–10 May 2025). BEL's Akashteer air-defence control-and-reporting network and Akash systems were cited by MoD for intercepting drones and missiles. Emergency procurement (EP) tranches followed | EP orders not separately disclosed | [K] MoD/PIB May 2025 |
| 3 Jul 2025 | DAC AoN for QRSAM (~₹30,000 cr) inside a ~₹1.05 lakh cr DAC package | ~₹30,000 cr | [K] MoD PIB |
| FY26 | Inflow ₹30,045 cr; QRSAM did not land (it had been guided for FY26) | — | Liquide [V] |
| Jul–Sep 2026 | Monthly orders of ₹541–847 cr each (see §2.2) | — | [V]/search |

### 2.7 Story bullets
- **High quality, slowing order flow.** Revenue grew 16% in FY26 and margins went past guidance to 29%. But inflow (₹30k cr, book-to-bill 1.09) only held the backlog flat. The FY27 >₹55k cr target depends on QRSAM (₹30k cr), which has slipped twice. Q1 FY27 inflow was −51% YoY, and FY27-to-date is ≈ ₹6.5k cr [V/E].
- **Working capital has turned against BEL.** Advances fell from ₹15.9k cr to ₹12.6k cr. Receivables rose to 170 days and NWC days went from 18 to 135 in two years. CFO was only ₹564 cr / ₹1,541 cr in FY25 / FY26, and cash fell from ₹11.1k cr to ₹8.6k cr [V]. The "advance-funded" PSU model is weakening as big Akash/LRSAM advances get consumed.
- **Margin mix risk.** Q1 FY27 EBITDA margin was 25.1% versus the 28% guide. Product margins span 25–31% (PL), so the guide depends on the mix in H2 [V].
- **Valuation has reset.** P/E is 45× (versus ~50× in Jun-26) and the stock is at ₹380, near its 52-week low of ₹360. A QRSAM or Kusha signing is the visible catalyst.

### 2.8 Risks
- QRSAM / Kusha timing.
- Gross-margin dilution from bought-out content.
- Receivable stretch at MoD.
- The non-defence push (EVM, Kavach) carries lower margins.
- A 51% government owner leaves room for OFS down to the 51% floor; there is no room below.
- Competition from private electronics firms (L&T, Tata, Data Patterns, Astra Microwave) in competitive tenders.

---
## 3. Bharat Dynamics Ltd (NSE: BDL · BSE: 541143)

Fetched 13 Oct 2026. Screener's **consolidated page for BDL is empty** (BDL has no subsidiaries), so all figures below are **standalone**.

Sources:
- screener: https://www.screener.in/company/BDL/ [V]
- FY26 iXBRL, standalone: https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_162829_28052026174033_iXBRL_WEB.html [V]
- Q1 FY27 results PDF: https://nsearchives.nseindia.com/corporate/BDL_14082026134753_BDLUFR14AUG2026.pdf [V]
- ICICI Securities Q4 FY26 note, 29 May 2026: https://bsmedia.business-standard.com/_media/bs/data/market-reports/equity-brokertips/2026-05/17800325010.04483400.pdf [V]
- Motilal Oswal Q4 FY26 note, 28 May 2026: https://bsmedia.business-standard.com/_media/bs/data/market-reports/equity-brokertips/2026-05/17800313990.90127600.pdf [V]
- niftytrader, 14 Aug 2026 [V]
- Business Today, 29 May 2026 [V]

### 3.1 Standardised financials (standalone, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 2,369 | 3,345 | **2,442** | screener [V]; iXBRL 2,441.79 [V] |
| Growth YoY | −4.8% | +41.2% | **−27.0%** | [E] |
| OP / EBITDA (ex OI) | 537 | 473 | 225 (MOSL 220; ICICI 223) | screener [V] |
| OP margin | 22.7% | 14.1% | **9.2%** | screener [V] |
| Other income | 362 | 350 | 424 (76% of FY26 PBT) | screener [V] |
| PAT | 613 | 550 | 420 | screener [V]; iXBRL 420.3 [V] |
| ROCE | 24% | 20% | 14% (screener top ratio 13.9%) | screener [V] |
| ROE | ~18% | ~14% | 10.2% | screener [V] (earlier years [E]) |
| Borrowings | 8 | 7 | 5 (lease; bank debt nil) | screener [V] |
| Cash + bank incl. FDs | 4,228 | 4,190 | **4,709** (= 863 cash + 3,846 other bank balances) | iXBRL [V]; screener schedule [V] |
| Net cash | 4,220 | 4,183 | **4,704** | [E] |
| Net worth | 3,637 | 4,009 | 4,241 | screener [V] |
| CFO | 412 | 167 | 604 (MOSL: ₹6.0bn; FCF ₹3.8bn after ₹2.2bn capex) | screener / MOSL [V] |
| Dividend payout | 32% | 31% | 43% (final ₹0.40 recommended) | screener [V]; BDL results PDF (search) |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹1,126 |
| M-cap | **₹41,158 cr** |
| P/E (TTM, on ₹521 cr TTM PAT) | **79.0×** |
| Book value / share | ₹116 → P/B 9.7× |
| EV | ~₹36,450 cr → EV/EBITDA **162×** FY26 OP, 104× TTM OP of ₹352 cr [E] |
| Dividend yield | 0.44% |
| 52-week range | ₹1,633 / ₹1,048 |

Context: the stock was ₹1,382 on 14 Aug 2026 after Q1. It has since fallen ~19%. I could not find a specific September trigger (search found none).

### 3.2 Q1 FY27 (Jun-26 quarter, standalone, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | **572.2** | 247.9 | +131% | 480.2 |
| EBITDA (ex OI) | 83 | −45 | n.m. | 55 |
| EBITDA margin | 14.5% | −18% | | 11.5% |
| Other income | 103 | 87 | | 119 |
| PAT | 118.8 | 18.4 | 6.5× | 113.2 |
| Order inflow | ~₹1,350 cr (Elara estimate of Q1 wins, "Rs 13,500 mn") | | | search-level, unverified |

Sources: BDL Q1 results PDF [V]; screener [V]; niftytrader [V].

**Key miss.** MOSL had expected about ₹1,300 cr from **Akash in Q1 alone**, after mgmt said ~₹13bn of Akash revenue would be booked in Q1 FY27 [V, MOSL]. Total Q1 revenue came in at only ₹572 cr, so the Akash deliveries (awaiting final government clearance of third-party radars and communications) slipped again.

Only **2.2% of the order book** was converted in the quarter [V, niftytrader].

### 3.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹26,176 cr at 31 Mar 2026** (ICICI: "~INR 260bn, all-time high") | FY26 investor presentation via niftytrader [V]; ICICI [V] |
| Opening FY26 order book | ~₹22,700 cr | [K] BDL disclosures, early 2025; approximate |
| Order-book cover | **10.7×** FY26 revenue | [E] |
| FY26 order inflow | ~₹5,909 cr | primer [K]. Reconciles with 22,700 + 5,909 − 2,442 ≈ 26,167 [E] |
| Book-to-bill | **~2.4×** | [E] |
| Execution rate (FY26 revenue ÷ opening order book) | **~10.8%** (FY25 ~17%) | [E] |
| FY27 inflow guidance | **~₹15,000 cr**, anchored by BDL's ~₹10,000 cr share of QRSAM, plus MRSAM, Astra, man-portable ATGM, HELINA | ICICI [V] |
| FY27 revenue outlook | No formal company guide. Mgmt commentary as read by MOSL: "FY27 revenue can scale up to ~₹4,500 cr at ~14–15% margins"; FY28 peak Akash execution ~₹6,500 cr. Long-term ambition ₹10,000 cr revenue by FY31 | MOSL [V]; FY31 target search-level |
| FY26 revenue lost to delays | ~₹2,000 cr (Akash radars/comms from another vendor; Astra Mk1 seekers) | MOSL [V] |
| Customer advances | **₹6,259 cr** (current 2,671 + non-current 3,588) | iXBRL [V] |
| Advances ÷ order book | **~24%** | [E] |
| Cash incl. FDs | ₹4,709 cr (₹3,846 cr in FDs) | iXBRL [V] |
| Receivable days | **63** (₹423 cr) | screener [V]; iXBRL [V] |
| Inventory | **₹4,626 cr** (+75% YoY per ICICI) → 691 days of sales (1,400 on screener cost basis) | iXBRL [V]; ICICI [V] |
| NWC days | **264** | screener [V] |
| Audit flag | Emphasis of matter on ~₹83 cr of non-moving inventory (held >5 years against firm orders/LOI). Audit committee could not be reconstituted because independent-director terms had lapsed | Q1/Q4 results text [V partial]; filingreader (search) |
| Export share | FY25 exports ~₹1,270 cr (~38% of FY25 revenue, mainly Armenia Akash). FY26 export share not disclosed in fetched sources | primer [K]; **FY26 unverified** |
| R&D | Low, ~1–3% of revenue; development is DRDO-funded | [K]; unverified |
| Indigenous content | Rising (Akash ~90%+; Astra Mk1 seekers being imported short-term) | [K]/MOSL [V] |
| Nomination vs competitive | Mostly nomination as DRDO production agency. Competitive pressure is rising (Adani for ULPGM-V3, private Very Short Range Air Defence (VSHORADS) and ATGM players) | MOSL [V]; [K] |
| Government holding | **74.93%** (Jun-26; flat) | screener [V] |
| Last OFS | 2020 | [K] DIPAM |
| FII / DII | 1.69% / 11.53% (FII down from 3.77% in Jun-25) | screener [V] |

### 3.4 Segment / product mix
- **Surface-to-air**: Akash / Akash Prime / Akash-NG (Army and IAF regiments plus Armenia export), MRSAM (with IAI), QRSAM (with BEL; future).
- **Air-to-air**: Astra Mk1 (IAF/Navy; ~₹2,971 cr order 2022 [K]).
- **ATGMs**: Konkurs-M, Milan-2T, **Invar** (₹2,095.70 cr contract, **13 Nov 2025** [search-level, newsonair/PIB]), man-portable ATGM, HELINA / Dhruvastra, Amogha.
- **Underwater**: Varunastra heavyweight torpedo, light torpedoes, countermeasures; a wire-guided heavyweight torpedo delivered to NSTL [MOSL, V].
- **Strategic**: Agni-class (Advanced Agni MIRV, subject to production clearance) [MOSL, V].

### 3.5 Capacity and plants
- Existing units: Kanchanbagh (Hyderabad), Bhanur, Visakhapatnam, Ibrahimpatnam [K].
- New: Ibrahimpatnam (8 assembly lines plus rocket-motor and warhead testing); Jhansi, UP (propellants, Grad rockets); Amravati [MOSL, V].
- New naval-systems facility at **T. Sirasapalli, AP**: ₹500 cr, 160 acres, for torpedoes and mines, over 4 years [MOSL, V].
- FY26 capex: ₹220 cr [MOSL, V].

### 3.6 Operation Sindoor and emergency demand
- **Akash** was among the systems credited in the May 2025 air-defence response [K, MoD/PIB].
- Post-Sindoor, the DAC on 3 Jul 2025 cleared QRSAM (BEL prime, BDL missiles) [K]. Emergency-procurement tranches were mostly imports and drones; BDL did not separately disclose EP orders [K].
- The demand case is strong. The constraint is supply chain and acceptance clearances, not orders.

### 3.7 Story bullets
- **A broken execution year.** FY26 revenue fell 27% and OP margin was 9%. 76% of PBT came from interest income. The order book sits at a record ₹26.2k cr (10.7× revenue), but conversion fell to ~11% [V/E].
- **Single-source vendor bottlenecks.** Akash radars and communications (another PSU vendor, awaiting clearance) and Astra seekers (to be imported) are the gating items. The promised Q1 FY27 Akash catch-up (~₹1,300 cr) did not show up: Q1 revenue was ₹572 cr [V].
- **Inventory is up 75%**, and the auditor emphasised the non-moving stock. When clearances arrive, revenue could be very lumpy upward (MOSL FY27E ₹4,230 cr; ICICI ₹4,400 cr) [V].
- **Valuation has compressed but is still rich.** 79× TTM P/E and 162× FY26 EV/EBITDA, for 10% ROE. Brokers cut targets to ₹1,150–1,360 (MOSL Neutral, Nuvama Reduce, ICICI Add) [V].

### 3.8 Risks
- Further slippage in Akash / Astra clearances.
- Liquidated-damages provisions.
- Margin dilution from imported components (MOSL sees 14–15% in FY27).
- Private competition: Adani, Solar Industries, Kalyani.
- QRSAM split and timing (shared with BEL).
- Governance: board vacancies and the audit-committee gap.
- 74.9% government stake means OFS overhang (MPS to 75% already met; further OFS possible).

---
## 4. Mishra Dhatu Nigam Ltd (NSE: MIDHANI · BSE: 541195)

Fetched 13 Oct 2026. Sources:
- screener: https://www.screener.in/company/MIDHANI/consolidated/ [V]
- FY26 iXBRL, consolidated: https://nsearchives.nseindia.com/corporate/ixbrl/INTEGRATED_FILING_INDAS_163491_29052026153140_iXBRL_WEB.html [V]
- Q3 FY26 concall transcript, 17 Feb 2026: https://nsearchives.nseindia.com/corporate/MIDHANI_21022026145118_MDN_ConcallTranscript_Q3Dec2025.pdf [V]
- Indian Masterminds Q1 FY27, 14 Aug 2026 [V]
- Free Press Journal FY26 provisional, 1 Apr 2026 [V]
- filingreader summary of the Q4 FY26 concall (3 Jun 2026) [V, AI summary, secondary]

### 4.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 1,073 | 1,074 | **1,209** | screener [V]; iXBRL 1,208.63 [V] |
| Growth YoY | +23.1% | +0.1% | +12.5% | [E] |
| OP / EBITDA (ex OI) | 195 | 219 | 239 | screener [V] |
| OP margin | 18.2% | 20.4% | 19.8% | screener [V] |
| Company "EBITDA" (incl. OI) | — | ~249 | 275.6 (+10.7%) → 22.8% | FY26 release via search; basis includes other income [E] |
| Other income | 30 | 32 | 39 | screener [V] |
| PAT | 92 | 111 | 131 (130.79) | screener [V] |
| ROCE | 9% | 11% | 11% | screener [V] |
| ROE | ~7.1% | ~8.1% | 8.9% | screener [V]/[E] |
| Borrowings (company) | — | — | **284** (current 265 + non-current 19) | iXBRL [V]. Screener shows 407, which adds lease and other financial liabilities |
| Cash + bank incl. FDs | 17 | 51 | **192** | iXBRL [V] / screener schedule [V] |
| Net debt | — | — | **~92** company basis (screener basis ~215) | [E] |
| Net worth | 1,319 | 1,415 | 1,532 | screener [V] |
| CFO | 216 | 217 | 155 | screener [V] |
| Dividend payout | 29% | 25% | 30% (₹2.10/share) | screener [V]; DPS from primer [K] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹437 |
| M-cap | ₹8,185 cr |
| P/E (TTM) | 60.6× |
| Book value / share | ₹81.8 → P/B 5.3× |
| EV | ~₹8,277 cr → EV/EBITDA 34.6× FY26 OP (30.0× on company EBITDA incl. OI) [E] |
| Dividend yield | 0.19% |
| 52-week range | ₹482 / ₹267 |

### 4.2 Q1 FY27 (Jun-26 quarter, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | **239.5** | 170.5 | +40.5% | 552.7 |
| OP (ex OI, screener) | 37 | 34 | +9% | 116 |
| OP margin | **15.5%** | 20% | −450 bp | 21% |
| Company EBITDA (incl. OI) | 46.6 | 41.3 | +12.9% | — |
| PAT (standalone / consolidated) | 16.3 / 16.5 | 12.8 / 13.0 | +27% | 77.8 |
| Value of production | 260.4 | — | +7.9% | — |
| Order book | **₹2,329 cr at 1 Jul 2026** | | | Indian Masterminds [V] |
| Implied Q1 inflow | ~₹278 cr | | | [E] 2,329 − 2,290 + 239 |

Sources: screener [V]; Indian Masterminds [V]. Results were approved on 12 Aug 2026.

**Margin inconsistency in the press.** Indian Masterminds quotes "~15.3%" EBITDA margin. That does not match its own ₹46.6 cr / ₹239.5 cr (19.5%). The 15.3–15.5% figure is the margin on screener's ex-other-income basis.

### 4.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹2,290 cr (1 Apr 2026)**; ₹2,329 cr (1 Jul 2026). Path: ₹2,440 cr (1 Jan 2026); ₹2,594 cr (17 Feb 2026, per CMD) | primer / filingreader; Q1 [V]; Q3 call [V] |
| Opening FY26 order book | ~₹1,832 cr (1 Apr 2025) | Arthneeti Q4 FY25 call summary (search-level) |
| Order-book cover | **1.9×** | [E] |
| FY26 order inflow | **~₹1,667 cr** | [E] 2,290 − 1,832 + 1,209 |
| Book-to-bill | **~1.4×** | [E] |
| Execution rate (FY26 revenue ÷ opening order book) | **~66%** | [E] |
| Execution horizon | ~2 years for the current book | CMD, Q3 call [V] |
| FY27 guidance | Revenue **+15%** (20% "aspirational"); inflow **₹1,500 cr**; sustainable EBITDA **~23%** (company basis); ₹2,000 cr revenue within ~3 years | Q4 call via filingreader [V-secondary]; 23% from the Q3 call [V] |
| Customer advances | **₹538 cr** (current 215 + non-current 323), plus ₹363 cr deferred income (grants) | iXBRL [V] |
| Advances ÷ order book | **~23%** | [E] |
| Cash incl. FDs | ₹192 cr | iXBRL [V] |
| Receivable days | **167** (₹554 cr) | screener [V]; iXBRL [V] |
| Inventory | ₹1,333 cr → **402 days of sales** (935 on screener cost basis) | [V] |
| NWC days | **327** (the structurally highest of the four) | screener [V] |
| Export share | **₹85 cr in FY26 (~7%)**. NADCAP secured for the fasteners/aero line; mgmt sees ~₹150 cr/yr export potential | FPJ [V]; potential from primer [K] |
| R&D | ~1% of revenue | [K] MIDHANI AR; unverified |
| Indigenous / import substitution | The whole business is import substitution. Titanium sponge comes from KMML/DMRL; India produces ~150 t/yr, so MIDHANI imports much of its sponge. A "metal bank" for 6 critical inputs (Ni, Co, etc.) is planned | Q3 call [V]; filingreader [V-secondary] |
| Defence share | **79% of order book** (Jun 2026; 72% in Feb 2026). Revenue: the CMD said "defence 28% of revenue in 9M FY26", which I read as the Rohtak defence/armour plant only, so it is ambiguous | filingreader [V-sec]; Q3 call [V] |
| Product mix of revenue (9M FY26) | Special steels 37%, superalloys 20%, titanium 19%, maraging 15%, others 9% | Q3 call [V] |
| Titanium in order book | ~29% (₹741 cr) | Q3 call [V] |
| Government holding | **74.00%** (Jun-26; unchanged since the 2018 IPO; no OFS since) | screener [V] |
| FII / DII | 2.57% / 7.37% | screener [V] |

### 4.4 Capacity and plants
- **Kanchanbagh, Hyderabad** (main plant): VIM / VAR / ESR melting; forge press; rolling mills; **wide plate mill** (shipbuilding, ISRO, armour; the Presidential Dais armour supply); spring plant; ₹40 cr aerospace fastener plant (≈ ₹25 cr/yr revenue potential).
- **Rohtak**: armour (bulletproof jackets in batches of 50–100; vehicle armour).
- **JV**: 50% of Utkarsha Aluminium Dhatu Nigam (Nellore; aerospace-grade aluminium).
- **Titanium.** A ~1,000 t-class titanium facility is running near full utilisation (Q3 call). The primer's "titanium output doubled to ~700 t" conflicts with FPJ's "titanium production up ~40% YoY" (Apr 2026). Treat the doubling as **unverified**.
- **Downstream mills** are at full capacity (CMD, Feb 2026) [V].
- **Capex.** About **₹1,000 cr over three years** (automation of ageing facilities, downstream capacity), approved after the DPR stage [filingreader, Jun 2026, V-secondary]. Also a 50 tpa metal-powder plant, with equipment delayed by a foreign export licence [Q3 call, V].

### 4.5 Story bullets
- **Capacity-bound, not demand-bound.** The order book is a record ₹2.3k cr (1.9× revenue), with defence 79%. Downstream mills are full. Revenue has been ~₹1.07k cr for two years (FY24–FY25) and only broke out to ₹1.21k cr in FY26 [V].
- **Margins are trending down.** OP margin was 30% in FY21–FY23 and is 18–20% from FY24 to FY26. Q1 FY27 was 15.5% on mix and input costs. Mgmt still guides ~23% on a company basis that includes other income [V].
- **Working-capital heavy.** NWC is 327 days and inventory 402 days of sales. CFO fell to ₹155 cr in FY26, and net debt is small but positive. This is the opposite of the advance-rich BEL / HAL model [V].
- **The re-rating rests on capex.** The plan is ₹1k cr of capex to double revenue to ₹2k cr in ~3 years. Execution on a ₹1.5k cr balance sheet will likely need debt or larger advances [E].

### 4.6 Risks
- Raw-material (Ni, Co, Ti sponge) supply and price; FY26 had "geopolitical disruptions".
- Capacity bottlenecks.
- Margin compression.
- Capex execution under PSU procedures.
- Small float (FII 2.6%).
- Customer concentration: DRDO, ISRO, HAL, DPSUs.
- Q4-heavy revenue (Q4 FY26 = 46% of revenue).

---
## 5. Summary grid: batch 1 (defence PSUs)

Prices and m-caps are as of 13 Oct 2026 (screener). Financials are FY26 (Mar-26). Basis notes are at the top of the file.

| Metric | HAL | BEL | BDL | MIDHANI |
|---|---|---|---|---|
| FY26 revenue (₹ cr) | 33,089 | 27,610 | 2,442 | 1,209 |
| Growth YoY | +6.8% | +16.2% | −27.0% | +12.5% |
| EBITDA (ex OI, ₹ cr) | 9,788 | 8,053 | 225 | 239 |
| EBITDA margin | 29.6% | 29.2% | 9.2% | 19.8% |
| PAT (₹ cr) | 9,116 | 6,062 | 420 | 131 |
| Cash incl. FDs (₹ cr) | 46,197 | 8,572 | 4,709 | 192 |
| Net cash / (debt) (₹ cr) | 46,131 | 8,507 | 4,704 | (92) |
| M-cap (₹ cr) | 3,25,907 | 2,77,995 | 41,158 | 8,185 |
| P/E (TTM) | 35.0× | 45.2× | 79.0× | 60.6× |
| P/B | 7.9× | 11.6× | 9.7× | 5.3× |
| EV/EBITDA (FY26) | 28.6× | 33.5× | 162× | 34.6× |
| ROCE | 32% | 36% | 14% | 11% |
| ROE | 24.0% | 27.4% | 10.2% | 8.9% |
| Order book (₹ cr, date) | 2,54,538 (31-Mar-26) | 73,882 (1-Apr-26); 72,258 (1-Jul-26) | 26,176 (31-Mar-26) | 2,290 (1-Apr-26); 2,329 (1-Jul-26) |
| Order-book cover | 7.7× | 2.7× | 10.7× | 1.9× |
| FY26 order inflow (₹ cr) | 97,028 | 30,045 | ~5,909 [K/E] | ~1,667 [E] |
| Book-to-bill | 2.9× | 1.09× | ~2.4× | ~1.4× |
| Execution rate (FY26 revenue ÷ opening order book) | ~17.5% | ~38.5% | ~10.8% | ~66% |
| FY27 inflow guide (₹ cr) | ~90,000 over 2 years | >55,000 (incl. QRSAM 30,000) | ~15,000 | ~1,500 |
| FY27 revenue / margin guide | +10–12% / 30–31% | +15% / 28% | ~₹4,500 cr / 14–15% (MOSL's read) | +15% / ~23% (incl. OI) |
| Customer advances (₹ cr) | ≤74,190 | 12,571 | 6,259 | 538 |
| Advances ÷ order book | ≤29% | 17% | 24% | 23% |
| NWC days (screener) | 301 | 135 | 264 | 327 |
| Receivable days | 45 | 170 | 63 | 167 |
| Export share | <2% [K] | ~4%; export order book $465m | FY25 ~38%; FY26 n.a. | ~7% |
| R&D % of revenue | ~7–10% [K, unverified] | ~6% [K] | ~1–3% [K] | ~1% [K] |
| Indigenous content | platform-level ~60–70% [K] | ~78–80% [V] | high, Akash ~90% [K] | import substitution by design |
| Government holding (Jun-26) | 71.64% | 51.14% | 74.93% | 74.00% |
| Dividend payout FY26 | 33% | 30% | 43% | 30% |
| Q1 FY27 revenue / YoY | 5,515 / +14% | 5,547 / +25% | 572 / +131% | 239 / +40% |
| Q1 FY27 EBITDA margin | 27.7% | 25.0% | 14.5% | 15.5% |
| Q1 FY27 PAT | 1,590 | 1,055 | 119 | 16.5 |
| Q2 FY27 out? | No | No | No | No |

**What the grid says**
1. **Two different working-capital models.** HAL and BDL are still advance-funded: advances are 24–29% of the order book and cash exceeds 10% of m-cap at BDL. BEL's advance float is unwinding (advances fell from ₹15.9k cr to ₹12.6k cr, receivables are at 170 days, and FY26 CFO was only ₹1.5k cr). MIDHANI is a conventional working-capital-heavy metals business with small net debt.
2. **Execution is the binding constraint for three of four.** HAL is held back by GE engines, BDL by radars and seekers, MIDHANI by downstream capacity. BEL's problem is the opposite: order *inflow*, with QRSAM still unsigned.
3. **PSU margin dispersion is wide.** OP margin runs from 9% (BDL) to 30% (HAL/BEL), so the "defence PSU = high margin" framing only holds for the two platform/electronics majors.

---

## 6. PRIMER ISSUES

Each primer was read at the cover strip, the "What's new" box and the first sections, then grepped for key figures. Text locations below refer to the primer's visible-text order: cover strip, snapshot (§00), numbered sections and the sources list.

**Cross-primer issue.** **None of the four primers mentions Operation Sindoor** (May 2025). Grep for "Sindoor" returned 0 hits in all four, despite its relevance to air-defence demand (Akash, Akashteer, QRSAM) and to emergency procurement.

### 6.1 primers/hindustan-aeronautics.html

| # | What the primer says (where) | What is correct | Source |
|---|---|---|---|
| 1 | Cover: "~₹2.93 L Cr Market cap (Jun '26)"; §10: "~32× Trailing P/E (Jun '26)" | M-cap **₹3,25,907 cr** at ₹4,869; P/E **35.0×**; P/B 7.9× (13 Oct 2026) | screener [V] |
| 2 | What's new / §10: "EBITDA ~₹13,470 Cr (~30% margin)" | Internally inconsistent: 13,470 / 33,050 = 41%. ₹13.47k cr is EBITDA *including* ₹3.7k cr other income. Operating EBITDA is **₹9,788 cr (29.6%)**; ICICI has ₹9,770 cr | screener [V]; ICICI Direct [V] |
| 3 | Cover / snapshot: "₹33,050 Cr Revenue" (its own source list quotes 33,089) | Audited consolidated revenue **₹33,088.82 cr**. ₹32,250 cr was the provisional 31-Mar figure | iXBRL 157527 [V] |
| 4 | Snapshot / §09: "~₹42,400 Cr cash & bank deposits"; "₹42,000-plus-crore deposit hoard" | ₹42,429 cr is only "other bank balances". Total cash + bank is **₹46,197 cr** (₹3,768 cr cash + ₹42,429 cr FDs) | iXBRL [V]; ICICI [V] |
| 5 | §03: "FII ~10%, DII ~10%" (Mar-26) | Jun-26: FII **9.34%**, DII **11.90%**, Govt 71.64% | screener [V] |
| 6 | Missing Q1 FY27 (results 12–13 Aug 2026) | Revenue ₹5,515 cr (+14.4%), EBITDA ₹1,527 cr (27.7%), PAT ₹1,590 cr (+14.9%) | screener / ICICI [V] |
| 7 | §05 / What's new: "only ~6 of 99 engines received… induction slipped to Aug–Sep 2026" | **10 F404s delivered by Aug 2026** (3 in Aug); ~12 more expected Oct–Dec 2026; GE committed 20–22 in FY27 | Indian Masterminds 29 Sep 2026 [V]; ICICI [V] |
| 8 | §05 table: "99 engines" is the only engine contract mentioned | Missing the **113-engine F404 follow-on** (Nov 2025; deliveries 2027–32) for the 97-jet order | search-level, unverified fetch |
| 9 | §05 / §06: "GE F414 … 100% transfer-of-technology agreement concluded in 2026" | ~**80% ToT** technical understanding (Apr 2026). The **commercial contract is not yet signed** (expected later in 2026) | NewsArena 13 Apr 2026 [V] |
| 10 | Missing FY27 guidance | Revenue +10–12%, EBITDA margin 30–31%, ~₹14,000 cr capex over 5 years, ~₹90,000 cr two-year order pipeline | ICICI Direct [V] |
| 11 | No mention of the **ALH Dhruv grounding** (Porbandar crash, 5 Jan 2025) | A fleet-wide grounding of ~330 helicopters. Army/IAF cleared after ~4 months; Navy/ICG later; 6 ALH Mk III ordered for ICG in Mar 2026 | Tribune (search) / [K] |
| 12 | No mention of the 12 Su-30MKI contract (Dec 2024, ~₹13,500 cr) or the Dornier / ALH ICG orders of Feb–Mar 2026 | Should appear in the order-book build | [K] MoD PIB; search-level |
| 13 | §01 / §02: "Book-to-bill — Order book ÷ annual revenue ≈ 7.7×" | That is **order-book cover**. Book-to-bill (inflow ÷ revenue) is **2.9×** | [E] |
| 14 | Working capital: "negative working capital" framing in §02 and §09 | Screener NWC days went from 37 (FY24) to **301 (FY26)**; inventory doubled to ₹32.8k cr (engine-less jets). It is still advance-funded on cash, but "negative working capital" is now misleading | screener [V] |
| 15 | Banned phrases | "Think of HAL as India's national aircraft factory" (snapshot, "In plain terms" box). "honest" twice: "The honest caveat" (§06) and "The honest wrinkle" (§09) | primer text |

### 6.2 primers/bharat-electronics.html

| # | What the primer says (where) | What is correct | Source |
|---|---|---|---|
| 1 | Cover: "~₹3.0 L Cr Market cap (Jun '26)"; §10: "~50× Trailing P/E" | M-cap **₹2,77,995 cr** at ₹380; P/E **45.2×**; P/B 11.6× | screener [V] |
| 2 | §03 sources: "FII ~19.5%, **DII ~5.7%**, public ~9.4% (Apr 2026)" | DII is **21.02%** (Jun-26; it was 20.00% in Mar-26, so 5.7% was never right). FII 18.02%, public 9.82%, Govt 51.14% | screener [V] |
| 3 | Snapshot / What's new / §07: "~27% EBITDA margin" | FY26 OP margin **29.2%** (₹8,053 cr / ₹27,610 cr). Q1 FY27 25.0%. FY27 guide 28% | screener [V]; PL [V] |
| 4 | Cover: "₹27,480 Cr Revenue", "₹6,048 Cr PAT" (no basis stated) | These are **standalone**. Consolidated: ₹27,610 cr / ₹6,062 cr. Label the basis | iXBRL 158846/158847 [V] |
| 5 | Missing Q1 FY27 (27–28 Jul 2026) | Revenue ₹5,547 cr (+25%), EBITDA margin 25.0% (−297 bp), PAT ₹1,055 cr (+9%), inflow ~₹3,750 cr (−51%), order book ₹72,258 cr (1 Jul) | screener [V]; PL [V] |
| 6 | Missing FY27 guidance and QRSAM status | Revenue +15%, EBITDA 28%, inflow >₹55,000 cr incl. ~₹30,000 cr QRSAM. **QRSAM still unsigned as of Oct 2026** (already slipped from FY26) | PL / Liquide [V]; idrw (search) |
| 7 | Missing monthly order flow | ₹847 cr (31 Jul), ₹541 cr (10 Aug), ₹730 cr (26 Aug), **₹648 cr (17 Sep 2026)**. FY27 YTD ≈ ₹6.5k cr | NSE PDF 17 Sep [V]; others search-level |
| 8 | §01: "Book-to-bill — Order book ÷ annual revenue ≈ 2.7×" | That is order-book cover. Book-to-bill = 30,045 / 27,610 = **1.09×** | [E] |
| 9 | §06: "indigenous content … roughly 70%+" | Mgmt now cites **~78–80%** | PL Jul 2026 [V] |
| 10 | §07: "negative working capital… net-cash pile" (no figure) | NWC days **135** (FY24: 18); receivables 170 days; advances fell from ₹15,891 cr to **₹12,571 cr**; cash + FDs **₹8,572 cr** (down from ₹11,057 cr); FY26 CFO only ₹1,541 cr | screener [V]; iXBRL [V] |
| 11 | §08: "export order book toward ~$500 million" | **US$465m** (Jul 2026) | PL [V] |
| 12 | No Operation Sindoor / Akashteer | Akashteer and Akash were cited by MoD in May 2025. DAC AoN for QRSAM came on 3 Jul 2025 | [K] MoD/PIB |
| 13 | Banned phrases | "Think of BEL as India's in-house defence-electronics workshop" (snapshot box). "honest" twice: "The honest caveat" (§06) and "The honest wrinkle" (§07) | primer text |

### 6.3 primers/bharat-dynamics.html

| # | What the primer says (where) | What is correct | Source |
|---|---|---|---|
| 1 | Cover: "~₹50,900 Cr Market cap (Jul '26)"; snapshot / §10: "~120× trailing earnings"; sources: "P/B ~11.9, price ~₹1,380" | M-cap **₹41,158 cr** at ₹1,126; P/E **79.0×** TTM (TTM PAT ₹521 cr after Q1); P/B **9.7×**; EV/EBITDA 162× FY26 | screener [V] |
| 2 | Missing Q1 FY27 (14 Aug 2026) | Revenue ₹572 cr (+131%), EBITDA ₹83 cr (14.5%), PAT ₹119 cr. The guided ~₹1,300 cr of Akash Q1 revenue **did not materialise** (2.2% of the order book converted) | BDL results PDF [V]; niftytrader [V]; MOSL [V] |
| 3 | Snapshot / §03: "~₹4,000 Cr+ of cash"; sources "cash ~₹4,190 Cr" (the FY25 figure) | Mar-26 cash + bank **₹4,709 cr** (₹863 cr + ₹3,846 cr FDs) | iXBRL 162829 [V] |
| 4 | §03: "cash … substantially funded by advances from customers" (no figure) | Advances **₹6,259 cr** (₹2,671 cr current + ₹3,588 cr non-current) = 24% of the order book; inventory ₹4,626 cr (+75% YoY) | iXBRL [V]; ICICI [V] |
| 5 | Missing FY27 outlook detail beyond the "₹15,000 Cr pipeline" | FY27 revenue ~₹4,500 cr at 14–15% margin (MOSL's read of mgmt); FY28 Akash peak ~₹6,500 cr; ~₹2,000 cr of FY26 revenue lost to vendor delays (Akash radars, Astra seekers, which are now being imported) | MOSL [V]; ICICI [V] |
| 6 | No mention of the **Invar ATGM contract** | ₹2,095.70 cr, signed 13 Nov 2025 (Buy-Indian) | newsonair / PIB (search-level) |
| 7 | No mention of the audit emphasis of matter (~₹83 cr non-moving inventory) or of the audit committee not being constituted (independent-director vacancies) | Both are in the FY26 / Q1 FY27 results text | results PDF [V partial]; filingreader |
| 8 | No mention of the new naval-systems plant (₹500 cr, T. Sirasapalli) or of the Ibrahimpatnam / Jhansi capex | See §3.5 | MOSL [V] |
| 9 | No Operation Sindoor | Akash was credited in the May 2025 air-defence response; QRSAM AoN 3 Jul 2025 | [K] |
| 10 | Banned phrases | "priced for perfection" (snapshot heading). "Think of BDL as India's national missile factory" (snapshot box). "no margin for error" (§10). "zero margin for error" (§11 bear). "a very long way to fall" twice (§10 and §11 close). "Both can be true at different points" (§10; a variant of "both can be right"). "honest" twice: "The honest caveat" (§05) and "…multiple honestly" (§10 heading) | primer text |

### 6.4 primers/mishra-dhatu-nigam.html

| # | What the primer says (where) | What is correct | Source |
|---|---|---|---|
| 1 | Cover: "~₹7,800 Cr Market cap (mid-2026)"; §10: "~55–58× P/E" | M-cap **₹8,185 cr** at ₹437; P/E **60.6×**; P/B 5.3× | screener [V] |
| 2 | Header: "Last refreshed 14 Aug 2026", yet **no Q1 FY27** (results approved 12 Aug 2026) | Revenue ₹239.5 cr (+40.5%), PAT ₹16.3 cr (+27%), OP margin 15.5% (−450 bp), order book **₹2,329 cr (1 Jul 2026)** | Indian Masterminds [V]; screener [V] |
| 3 | §10 chart: "FY24 approx. ~883" | FY24 revenue **₹1,073 cr** (FY23 was ₹872 cr). FY25 was therefore flat (+0.1%), not +22% | screener [V] |
| 4 | §07: "medium-term capex plan of roughly ₹300–400 Cr" | Mgmt (Q4 FY26 call, 3 Jun 2026): **~₹1,000 cr over three years**, target ₹2,000 cr revenue in ~3 years | filingreader summary [V-secondary] |
| 5 | Missing FY27 guidance | Revenue +15%, inflow target ₹1,500 cr, sustainable EBITDA ~23% (company basis incl. other income) | filingreader [V-sec]; Q3 call [V] |
| 6 | What's new / §07: "titanium output doubled to ~700 tonnes"; chart "FY25 ~350 t" | Conflicting. The FY26 provisional release coverage says titanium production rose "about 40%" YoY. The Q3 call refers to a ~1,000 t titanium facility near full utilisation. Mark as **unverified** and source it | FPJ 1 Apr 2026 [V]; Q3 call [V] |
| 7 | Margin framing "~23% FY26 EBITDA margin" | Correct only on a basis that **includes other income** (₹275.6 cr). Ex-OI it is 19.8% (primer notes this); Q1 FY27 fell to 15.5% | screener [V] |
| 8 | Order book mix not given | Defence **79%** of the order book (Jun 2026). Titanium ~29% of the book. Revenue mix (9M FY26): special steels 37%, superalloys 20%, titanium 19%, maraging 15% | filingreader [V-sec]; Q3 call [V] |
| 9 | Exports: "~₹150 Cr/year export potential" with no actuals | FY26 exports / export orders **₹85 cr** (~7%) | FPJ [V] |
| 10 | Working capital not quantified | NWC **327 days**; inventory 402 days of sales; receivables 167 days; advances ₹538 cr; cash only ₹192 cr against ₹284 cr borrowings (net debt ~₹92 cr). The primer's "₹284 Cr borrowings" **is correct** on the company basis (screener shows 407 incl. lease) | iXBRL 163491 [V]; screener [V] |
| 11 | Banned phrases | "honest" once ("The honest caveat", §08), which is within the limit. None of the other listed phrases found. (§10 heading "priced for the scarcity" is not on the banned list but is close to "priced for perfection"; consider rewording) | primer text |

---

## 7. Figures not fetched or verified this session
- **HAL**: Q1 FY27 order inflow and Jun-26 order book (not disclosed); the 113-engine F404 contract (Nov 2025); R&D % and export share; the manufacturing / ROH revenue split; the ALH Navy/ICG return-to-service date. All are [K] or search-level.
- **BEL**: FY26 export revenue ($142m) and the $346m export orders (primer / [K]); non-defence share; R&D spend; the dates of the 31 Jul, 10 Aug and 26 Aug order disclosures (search-level only; the 17 Sep release was fetched).
- **BDL**: opening FY26 order book (~₹22,700 cr, [K]); FY26 inflow ₹5,909 cr (primer, consistent with my derivation); FY26 export share; the Q1 FY27 inflow (~₹1,350 cr, Elara via search); the new CMD (Jul 2026, search snippet only).
- **MIDHANI**: opening FY26 order book (₹1,832 cr, Arthneeti via search); the Q4 FY26 concall guidance (an AI summary, not the transcript); titanium tonnage.
- **Q2 FY27**: not yet reported by any of the four on 13 Oct 2026.
