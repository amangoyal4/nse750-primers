# Electrical Equipment — company packs, batch 1

**Scope:** CG Power & Industrial Solutions · ABB India · Waaree Energies · Suzlon Energy · Premier Energies · Inox Wind · Inox Green Energy Services
**Prepared:** 2026-10-13 (research subagent, batch 1)
**Market data fetch time:** screener.in consolidated pages pulled via curl at **2026-10-13 ~18:23 UTC** (≈23:53 IST, after the close, so these are 13-Oct-2026 closing prices). All m-cap, price, P/E, book value, ROCE and ROE figures below come from those pages unless stated otherwise.

**Sources used (fetched this session):**
- screener.in consolidated pages for CGPOWER, ABB, WAAREEENER, SUZLON, PREMIERENE, INOXWIND, INOXGREEN. I took the quarterly, P&L, balance sheet, cash-flow, ratio and shareholding tables from the HTML. I took the cash, inventory and receivable breakdown from screener's schedules API (`/api/company/<id>/schedules/?parent=Other+Assets&section=balance-sheet`).
- Exchange filings and company documents downloaded this session: CG Power Q1 FY27 call transcript (24 Jul 2026) and Q4 FY26 call transcript (6 May 2026), both from cgglobal.com. ABB India Q2 CY26 call transcript (31 Jul 2026, BSE AttachHis 5134e9c6…), ABB board-meeting intimation (10 Sep 2026) and ABB CFO appointment (6 Oct 2026), both from BSE. The documents for the other companies are listed in each pack.
- Secondary news pages that I fetched and read are marked "[V-sec]": the page was fetched, but it is not the primary filing.

**Tags:** [V] = verified this session from a fetched primary or screener page · [V-sec] = fetched secondary (news or aggregator) page · [K] = known from memory, with the source named · [E] = estimate or my own arithmetic.

**Bases and conventions:**
- "EBITDA" means screener "Operating Profit", which excludes other income, unless I label it as company EBITDA.
- Net cash = screener "Cash Equivalents" + "Investments" − "Borrowings". Screener often leaves bank deposits out of this, so I add the company-reported figure where I have one.
- EV/EBITDA [E] = (m-cap − screener net cash) ÷ TTM operating profit.
- P/B [E] = price ÷ screener book value.
- ₹ figures are in crore unless stated otherwise.

**Results-calendar status (as of 13-Oct-2026):**
- **Indian-FY companies** (CG, Waaree, Suzlon, Premier, Inox Wind, Inox Green): Q1 FY27 (Jun-26 quarter) is the latest published quarter. **No Q2 FY27 (Sep-26) results are out yet.** CG's trading window is closed "until 48 hours after Q2 FY27 results" (BSE, 28 Sep 2026) [V].
- **ABB India (Dec-FY)**: the latest quarter is Q2 CY26 (Apr–Jun 2026). The board meets on **13 Nov 2026** for the quarter ending 30 Sep 2026 (Q3 CY26), per the BSE intimation of 10 Sep 2026 [V]. Screener labels this "Q2 FY27", but ABB **remains a calendar-year reporter**.
- **Shareholding:** screener already shows Sep-2026 shareholding for Premier Energies and Inox Green. For the other five companies, Jun-2026 is the latest pattern available.

## 0. Batch summary grid

All market data comes from screener at the 13-Oct-2026 close [V]. The financials are consolidated. "Latest FY" means FY26 (Apr-25 to Mar-26) for every company except ABB, which reports CY2025 (Jan–Dec 2025). Figures are ₹ cr unless stated.

| Metric | CG Power | ABB India | Waaree Energies | Suzlon | Premier Energies | Inox Wind | Inox Green |
|---|---|---|---|---|---|---|---|
| Archetype | Electricals: transformers/switchgear + motors (+ OSAT) | Electricals: LV/MV electrification, motion, automation (MNC) | Solar modules + cells (→ wafer, BESS) | Wind OEM + O&M | Solar cells + modules (+ transformers) | Wind OEM + EPC | Renewable O&M |
| Latest FY revenue | 12,418 | 13,203 (CY25) | 26,537 | 16,732 (co. 16,679) | 7,824 | 4,397 (TI 4,569) | 281 (TI 426) |
| YoY growth | +25% | +8% | +84% | +54% | +20% | +24% | +28% |
| EBITDA, screener OP | 1,641 | 2,045 | 5,909 | 3,025 | 2,378 | 891 (co. 1,232 incl. OI) | 23 (co. 210 incl. OI) |
| EBITDA margin | 13.2% | 15.5% | 22.3% | 18.1% | 30.4% | 20.3% (co. 27%) | 8% (co. 49% of TI) |
| PAT | 1,199 (pre-EI 1,232) | 1,668 | 3,884 | 3,163 (incl. ₹742 cr DTA credit) | 1,510 | 449 | 103 |
| ROCE / ROE (screener) | 26.7% / 20.5% | 29.9% / 22.4% | 38.4% / 32.5% | 34.2% / 39.7% | 32.7% / 41.0% | 10.6% / 7.5% | 8.1% / 5.1% |
| Borrowings | 118 | 145 (Jun-26) | 3,213 | 556 | 3,707 | 1,587 | 88 |
| Cash + investments (screener) | 1,481 | 7,338 (Jun-26) | 7,681 | 1,463 | 2,759 | 1,162 (incl. ₹550 cr non-current investments) | 1,055 (incl. ₹550 cr investments) |
| Net cash / (debt), screener [E] | +1,363 (likely +₹4–5k cr incl. QIP deposits) | +7,193 (co. ₹7,200 cr) | +4,468 (co. ND/E −0.08×) | +907 (co. **+2,322** Jun-26) | (948) (co. **(1,642)** Jun-26) | (≈940) ex-investments | +417 ex-investments (pre ₹550 cr Wind World payment) |
| **M-cap (13-Oct-26)** | **1,35,372** | **1,47,566** | **70,353** | **54,776** | **41,166** | **12,055** | **5,163** |
| P/E (TTM) | 106× | 95.7× (ex-robotics gain) | 17.5× | 17.4× (DTA-flattered) | 24.7× | 35.0× | 42.1× |
| P/B [E] | 16.9× | 15.8× | 4.9× | 5.8× | 9.5× | 1.9× | 2.9× |
| EV/EBITDA TTM [E] | ~82× | ~75× | ~10× | ~17× | ~17× | ~15× (screener OP) | n.m. (~23× on co. EBITDA) |
| Latest quarter | Q1 FY27 (Jun-26) | Q2 CY26 (Apr–Jun 26) | Q1 FY27 | Q1 FY27 | Q1 FY27 | Q1 FY27 | Q1 FY27 |
| Q revenue (YoY) | 3,281 (+14%) | 3,559 (+21%) | 7,932 (+79%) | 3,819 (+23%) | 2,463 (+35%) | 814 (−1%) | 43 (TI 101, +17%) |
| Q EBITDA margin | 12% (screener) | 13.0% op. EBITA | 18.2% | 15.6% | 29.0% | 27.2% co. / 19% screener | n.m. (co. EBITDA ₹57 cr) |
| Q PAT (YoY) | 308 (+16%) | 370 (+8%, continuing) | 892 (+15%) | 305 (−6%) | 472 (+53%) | 64 (−34%) | 41 (+86%) |
| Order book / backlog | ₹18,965 cr consol (+45%) | ₹11,898 cr (+22%) | ₹61,500 cr / 25.2 GW | 6.1 GW (Jul-26) | ₹15,000 cr / 9.9 GW (+₹4,001 cr Q2 inflow) | ~4.4 GW (incl. 1.5 GW group MOU, 0.5 GW firm) | 13.3 GWp under O&M |
| Native capacity | ~75 GVA power transformers (+45 GVA coming); EHV breakers 16,200/yr | 6 factories; capex ~US$75–80 m | Modules ~26 GW (24.2 India + 1.6 US); cells 5.4 GW (+10 GW FY27) | 4.5 GW/yr WTG manufacturing | Cells **10.6 GW**; modules 11.1 GW | n.d. (4X launch CY26) | — |
| Native KPI 2 | Power Systems PBIT 23%; semis drag ₹43 cr/qtr | Data centres 15–17% of orders; exports 13% of revenue | Book: India 40% / US-made 36% / exports 24%; FY27 EBITDA guidance ₹7.0–7.7k cr | Deliveries 506 MW Q1; ASP ₹6.3 cr/MW; O&M 16.1 GW | Cell utilisation 92%; margin guidance 29–30% | Receivables ₹4,250 cr; FY27 guidance +75% rev | Guidance ~₹600 cr annualised EBITDA from Q3 FY27 |
| Promoter % (latest) | 56.36% (Jun-26) | 75.00% | 64.12% | **11.70%** | 58.49% (**Sep-26**) | 44.18% | 53.70% (**Sep-26**) |
| FII / DII % | 11.97 / 18.23 | 7.67 / 9.89 | 8.57 / 4.08 | 24.15 / 11.12 | 7.12 / 18.88 | 14.53 / 10.02 | 10.48 / 4.02 |
| Corporate events 2026 | Auditor change (PwC); CG Semi G1 commercial (4-Jul-26) | Robotics sold 1-Mar-26 (₹1,658 cr gain); ₹90/sh dividend; Sridhar MD from Jan-27 | APSPL 55% buy; inverters 4.15 GW | S175 launched; CEO Ajay Kapur | 7 GW TOPCon cells commissioned Sep-26 | IWEL merged; IRSL to list | Evacuation business demerged to IRSL (record date 1-Aug-26); Wind World 4.5 GW (₹550 cr, 75% via Vibhav) |

## 0b. Cross-company read-across

**1. Archetypes in this batch**
- **(a) Grid and industrial electricals:** CG Power and ABB India.
  - Both carry rich multiples: P/E of 95–106× and EV/EBITDA of 75–82×.
  - Margins are mid-teens and under copper and rupee pressure.
  - CG's Power Systems PBIT is 23%. ABB's operational EBITA is 13%, down from about 19% in CY24.
- **(b) Solar cells and modules:** Waaree and Premier.
  - Both trade at 17–25× P/E and 10–17× EV/EBITDA.
  - EBITDA margins are 18–30%.
  - Both are heavy capex stories, with Waaree at ₹31.5k cr and Premier at about ₹12k cr, so FCF is negative.
- **(c) Wind OEMs:** Suzlon and Inox Wind.
  - Margins are 15–20% EBITDA.
  - Both are working-capital heavy: receivables are ₹5.9k cr at Suzlon and ₹4.25k cr at Inox Wind.
- **(d) Renewable O&M:** Inox Green.
  - This is an annuity business with small core profits today, plus a Q3 FY27 consolidation step-up.

**2. Margin compression is the Q1 FY27 theme across all six companies with an Indian FY.**
- Commodity prices, the rupee and West Asia logistics are the common drivers:
  - Waaree: 18.2% vs 22.5%.
  - Suzlon: 15.6% vs 19.2%.
  - Inox Wind PAT: −34%.
  - CG consolidated OPM: 12% vs 13%.
  - ABB EBITA: 13% vs ~19% in CY24.
- **Premier is the exception:** EBITDA held at about 29–30% on cell scarcity and 92% utilisation.

**3. Solar policy.**
- **ALMM List-II (cells)** took effect on 1-Jun-2026. A temporary exemption to Dec-2026 applies to C&I and non-subsidy residential projects. All C&I projects commissioned from 1-Jan-2027 must use DCR.
- **DCR pricing** is $0.20–0.25/Wp (Waaree), or 22–24.5 ¢ for KUSUM and Surya Ghar (Premier). Non-DCR modules fetch $0.13–0.14/Wp.
- This is why both companies are racing on cells:
  - Waaree: 5.4 → 15.4 GW by FY28.
  - Premier: 3.6 → 10.6 GW, done in Sep-26.
- Both are also building 10 GW of ingot-wafer capacity for FY28.
- **Export exposure differs sharply.** About 60% of Waaree's book is US-linked (US-made 36% plus India-to-US exports 24%). Premier is 100% domestic and plans a US cell JV in 24–30 months.

**4. Wind.**
- India added about 6.1 GW in FY26 and 1.3–1.4 GW in Q1 FY27. Installed capacity is 57.4 GW, against a target of 100 GW by 2030.
- Order books:
  - Suzlon: 6.1 GW, of which 70% is C&I/captive and 60% of new orders are DevCo-led.
  - Inox Wind: 4.4 GW, with heavy related-party exposure (Inox Clean).
- Both have pivoted to manage working capital:
  - Inox Wind is moving to equipment-only supply.
  - Suzlon's EPC share is rising to 32% while its DevCo self-originates orders.
- The 5 MW class has arrived: Suzlon's S175 (first unit installed May-26) and Inox's 4X (prototype Aug-26).

**5. Data centres.**
- ABB: 15–17% of Q2 CY26 orders.
- CG: US data-centre transformer exports (₹900 cr order in FY26).
- Waaree and Suzlon decks also cite data-centre-driven power demand.

**6. Valuation reset since the July 2026 primer refreshes.**
- Every member's m-cap is lower now:
  - Waaree: −15%.
  - Suzlon: −31%.
  - Premier: −13%.
  - Inox Wind: −53%.
  - Inox Green: −30%.
  - CG: −10%.
  - ABB: about −2%.
- These moves are from primer cover figures to screener on 13-Oct-26 [E].



---

## 1. CG Power and Industrial Solutions (NSE: CGPOWER · BSE: 500093)

**Archetype:** Electricals / grid equipment + motors. Two halves: Power Systems (transformers, switchgear) and Industrial Systems (LT/HT motors, drives, railways). On top of that sits a loss-making semiconductor option (CG Semi OSAT at Sanand, plus Axiro fabless design).
**Listing status:** listed on NSE and BSE. No merger or demerger is pending. Parent is Tube Investments of India (Murugappa).

### 1.1 Market data (screener, 13-Oct-2026 close, fetched 18:23 UTC) [V]

| Item | Value |
|---|---|
| Price | ₹854 (52-wk high/low ₹981 / ₹526) |
| Market cap | **₹1,35,372 cr** |
| P/E (TTM) | **106×** |
| Book value / P/B | ₹50.6 / **16.9×** [E] |
| ROCE / ROE (FY26) | 26.7% / 20.5% |
| Dividend yield | 0.15% |
| EV/EBITDA (TTM) | ≈ **81.8×** [E]: (135,372 − 1,363) ÷ 1,638 |

### 1.2 FY26 (year to Mar-2026), consolidated (screener [V]; company call [V])

| Metric | FY25 | FY26 | YoY |
|---|---|---|---|
| Revenue | 9,909 | **12,418** | +25.3% |
| Operating profit (screener EBITDA) | 1,319 | **1,641** | +24.4% |
| OPM | 13.3% | **13.2%** | flat |
| Other income | 162 | 208 | |
| Depreciation | 112 | 196 | |
| PBT (reported) | 1,348 | 1,628 | |
| PAT (reported) | 973 | **1,199** | +23% |
| PAT before exceptional items (company) | 973 | **1,232** | +27% |
| EPS | ₹6.37 | ₹7.66 | |
| CFO / FCF | 916 / 491 | 702 / **−72** | |

- **Standalone FY26** (Q4 FY26 call, 6 May 2026) [V]: sales ₹11,331 cr (+21%) and PAT before EI ₹1,352 cr (+39%, 11.9% margin). Standalone ROCE was 22% and consolidated ROCE 20% (company basis). Screener's 26.7% uses a different capital base.
- The semiconductor segment cost consolidated earnings **₹111 cr in FY26** (89 bps) [V]. This is the main reason consolidated margins sit below standalone.

**Segments, FY26 standalone (Q4 call) [V]:**

| Segment | FY26 sales | Growth | PBIT | PBIT margin | Order intake | Backlog, Mar-26 |
|---|---|---|---|---|---|---|
| Industrial Systems (motors, drives, railways) | ₹6,197 cr | +6% | ₹613 cr | 9.9% (FY25 12.1%) | ₹6,365 cr | ₹3,075 cr |
| Power Systems (transformers, switchgear) | ₹5,138 cr | +46% | ₹1,123 cr | 21.9% (FY25 19.0%) | ₹11,210 cr (+69%) | ₹12,644 cr (+91%) |

**Order book, Mar-26 [V]:**
- Standalone backlog ₹15,719 cr (+59%); standalone FY26 intake ₹17,574 cr (+30%).
- Consolidated backlog **₹17,107 cr (+61%)**; consolidated FY26 intake ₹19,616 cr (+33%).

### 1.3 Q1 FY27 (Jun-2026 quarter): latest; Q2 FY27 not yet out [V]

| Metric | Q1 FY26 | Q1 FY27 | YoY |
|---|---|---|---|
| Revenue (consol) | 2,878 | **3,281** | +14% |
| Operating profit / OPM | 381 / 13% | **397 / 12%** | |
| Other income | 28 | 84 | |
| PAT (consol) | 267 | **308** | +16% |

- Q1 FY27 revenue was below Q4 FY26 (₹3,442 cr). Management called this quarterly lumpiness: transformer shipments run ₹100–150 cr each.
- Standalone Q1 FY27: sales ₹3,061 cr (+16%); PAT ₹364 cr (+27%, 11.9% margin); PBT +27% with 140 bps margin expansion.
- **Industrial Systems:** ₹1,671 cr (+6%), PBIT ₹148 cr against ₹172 cr a year earlier. The drop includes a **≈₹20 cr one-off railway provision**. Consolidated industrial margin was 7.6% against 10.2%, also dragged down by G.G. Tronics before Kavach begins. Intake ₹1,586 cr; backlog ₹2,899 cr.
- **Power Systems:** ₹1,402 cr (+31%), PBIT ₹324 cr (23.1% against 21%, +209 bps). Intake ₹3,106 cr; backlog **₹14,434 cr (+59%)**.
- **Order book, 30-Jun-26:** standalone ₹17,333 cr (+45%) on intake of ₹4,692 cr. Consolidated **₹18,965 cr (+45%)** on intake of ₹5,211 cr. The gap between the two is mainly GGT (about ₹1,000 cr Kavach book) plus Axiro.
- **Semiconductor drag** in Q1: ₹43 cr (132 bps). Annualised consolidated ROCE was 20%.

### 1.4 Balance sheet (Mar-26, screener) [V]

| Item | ₹ cr |
|---|---|
| Borrowings | 118 |
| Cash equivalents (schedule) | 1,028 |
| Investments | 453 |
| Screener net cash | **≈ +1,363** [E] |
| "Other asset items" | 3,802 (up from 626 in FY25) |
| CWIP | 725 (386 in FY25) |
| Net worth | 7,970 (equity 315 + reserves 7,655) |

- The jump in "other asset items" most likely holds the unspent ₹3,000 cr QIP money (raised 30 Jun–3 Jul 2025 [V]) in deposits. **True net cash is therefore probably ≈ ₹4,000–5,000 cr [E]**, but I could not tie this to a company net-cash disclosure this session, so treat it as unverified.
- FY26 working capital: debtor days 86 (74 in FY25), inventory days 67, CCC 48 (35 in FY25). Working-capital intensity is rising as Power Systems grows.

### 1.5 Native KPIs: capacity, capex, guidance [V unless tagged]

**Transformer capacity (Q1 FY27 call):**
- Power transformers ≈ **75,000 MVA** today, up "from 22,000 MVA to almost 75,000 MVA" in about four quarters.
- Distribution transformers ≈ 10,000 MVA.
- A new plant will add about **45,000 MVA** "in the next few months". Ramp: about 10 GVA in its first quarter, 30 GVA in the second, peak 45 GVA in the third.

**EHV switchgear:**
- S3 Unit-II in Nasik was commissioned on 4 Jun 2026. It makes 33–245 kV circuit breakers and adds 7,200 breakers/yr to the existing 9,000 (+80%).

**CG Semi OSAT, Sanand:**
- **G1 started commercial production; launch on 4 Jul 2026 in the PM's presence.**
- G1 peak capacity is 0.5 mn units/day.
- G2 (about 14.5 mn chips/day) is expected to be complete by end-CY2026.
- ISM-approved project cost ₹7,584 cr, with central assistance of ₹3,501 cr plus state support (Q4 FY26 call).
- Renesas has an offtake arrangement covering roughly 40–50% (management would not confirm the exact share).

**Railways:**
- G.G. Tronics Kavach is awaiting ISA and then RDSO approval, which management expected "in 4–6 weeks" (as of 24 Jul 2026).

**Exports:**
- Export order intake roughly **doubled (+84%) YoY**. Targets are utilities, renewables, data centres and oil & gas in the US, Europe and MENA.
- FY26 included a **₹900 cr US data-centre transformer order** [K: primer and company press release; not re-fetched].

**Motors:** price hikes of about 17.5% over nine months, then a further ~5% as copper and steel inflated.

**Guidance:** management gives no numeric guidance ("we don't give any forward-looking statements").

**Management and governance:**
- MD & CEO **Amar Kaul**; CFO Susheel Todi.
- **Auditor change:** SRBC & Co resigned effective 14 Aug 2026, to align CG's auditor with Tube Investments'. Price Waterhouse Chartered Accountants LLP was approved by postal ballot on 25 Sep 2026 [V: BSE announcement list].
- Ajay Jain, VP Transformers, resigned effective 30 Sep 2026 [V: BSE announcement list].

### 1.6 Ownership (screener, Jun-2026 pattern) [V]

| Holder | Share |
|---|---|
| Promoters (Tube Investments and group) | **56.36%** (58.05% in Jun-25; diluted by the Jul-2025 QIP) |
| FIIs | 11.97% |
| DIIs | 18.23% |
| Public | 13.37% |
| Shareholders | 5.34 lakh |

The Sep-2026 pattern is not yet on screener.

### 1.7 Concentration and risk notes
- **Customer concentration:** Power Systems is now 45% of standalone sales and about 83% of the standalone backlog (₹14,434 of ₹17,333 cr). Exposure is to PowerGrid, state utilities, renewable EPCs and US data-centre buyers.
- **Valuation:** at a 106× P/E, the stock prices in the semiconductor option.
- **Cash conversion:** FY26 FCF was negative (−₹72 cr) because capex stepped up (investing outflow ₹3,605 cr, which includes QIP money parked in deposits).

### 1.8 Story bullets
1. **The grid is the growth engine.** Power Systems sales grew +46% in FY26 and +31% in Q1 FY27, with PBIT margins of about 22–24% and a ₹14.4k cr backlog (+59%). Capacity has more than tripled to about 75 GVA, with another 45 GVA coming. Competitors are expanding too, but management sees no price stress yet.
2. **Motors recovered, but Industrial margins are thin.** Industrial PBIT margins are about 9–10%, dragged down by railways (single-digit margins, a ₹20 cr Q1 provision, GGT pre-revenue). Kavach approval is the near-term trigger.
3. **The semiconductor drag is widening.** It was ₹111 cr in FY26 and ₹43 cr in Q1 alone, before G2 is complete. G1 is now commercial and Axiro is revenue-generating, but management has said it will keep reinvesting.
4. **Valuation has de-rated a little.** The m-cap is ₹1.35 lakh cr (106× TTM) against about ₹1.5 lakh cr (~115×) in the July primer. The stock is about 13% below its 52-week high.

---

## 2. ABB India (NSE: ABB · BSE: 500002) — calendar-year (Dec) reporter

**Archetype:** electricals — low/medium-voltage electrification products, motors & drives (Motion), automation; MNC subsidiary (ABB Ltd 75%). **Listed; still calendar-year (Q3 CY26 results on 13-Nov-2026 per BSE intimation [V]).** **Robotics business divested 1-Mar-2026** (slump sale to group company ABB Robotics India) — now 3 segments, not 4.

### 2.1 Market data (screener, 13-Oct-2026 close, fetched 18:23 UTC) [V]
| Item | Value |
|---|---|
| Price | ₹6,978 (52w ₹7,924 / ₹4,638) |
| Market cap | **₹1,47,566 cr** |
| P/E | **95.7×** (screener; note 1,47,566/95.7 ≈ ₹1,542 cr earnings base ⇒ screener's P/E effectively *excludes* the robotics gain; on reported TTM PAT ₹2,988 cr it would be ~49×) [E] |
| Book value / P/B | ₹441 / **15.8×** [E] |
| ROCE / ROE | 29.9% / 22.4% |
| Dividend yield | 0.56% (screener; excludes the ₹90 special/interim declared Jul-26 which alone is ~1.3% of price) [E] |
| EV/EBITDA (TTM) | ≈ **74.5×** [E] = (1,47,566 − 7,193) / 1,883 |

### 2.2 CY2025 (Jan–Dec 2025) — latest full year
| Metric | CY2024 | CY2025 | YoY | Source |
|---|---|---|---|---|
| Revenue | 12,188 | **13,203** | +8.3% | screener [V] |
| Operating profit (screener EBITDA) | 2,311 | **2,045** | −11.5% | screener [V] |
| OPM | 19.0% | **15.5%** | −350 bps | [E] from screener |
| Other income | 344 | 349 | | screener [V] |
| PBT | 2,510 | 2,229 | −11% | screener [V] |
| PAT | 1,872 | **1,668** | −11% | screener [V] |
| Orders | ~13,079 | **14,115** | +8% (record) | Outlook Business 2026 [V-sec] |
| Backlog (31-Dec-25) | — | **10,471** | +12% | Outlook Business [V-sec] |
| Dividend | | ₹39.36/sh (₹9.77 interim + ₹29.59 final) | | Outlook Business [V-sec] |
| CFO / FCF | 1,332 / 1,118 | 1,220 / 980 | | screener [V] |
- Q4 CY25 (Oct–Dec 25): orders ₹4,096 cr (+52%, highest Q4 in five years); PAT ₹434 cr (−18%) [V-sec Outlook Business]. Screener now shows Dec-25 quarter revenue ₹3,423 cr vs ₹3,557 cr originally reported — **screener's history has been restated for robotics as discontinued operations**, so CY25 ₹13,203 cr (screener annual) is the original reported basis while quarters are restated. [E — reconciliation inference]

### 2.3 Q1 CY26 (Jan–Mar 2026) — the one-off quarter
- **Explaining screener TTM PAT ₹2,988 cr vs CY25 ₹1,668 cr:** Mar-26 quarter reported consolidated PAT **₹1,783.7 cr** includes **profit from discontinued operations (after tax) ₹1,441.7 cr**, of which **profit on sale of the Robotics business ₹1,658.5 cr** (pre-tax). The Robotics business was transferred by **slump sale to ABB Robotics India for ₹1,568.2 cr, effective 1-Mar-2026** (shareholder postal ballot approved 27-Feb-2026). Screener's Mar-26 "other income" of ₹1,541 cr is this gain. [V-sec: ScanX & Univest pages fetched this session; primary BSE result PDF not retrieved — gain amount consistent across both]
- Continuing operations Q1 CY26: revenue ₹3,184 cr (+6%), PBT ₹462 cr (14.5% vs 20.4%), **PAT ₹342 cr (−25%)**, operational EBITA ₹404 cr (12.7% vs 16.6%), material cost 61.3% vs 57.6%. Orders ₹4,280 cr (+25%; large orders ₹761 cr), backlog ₹11,094 cr (+17%). Segments: Electrification ₹1,564 cr (+15%, PBIT 15%); Motion ₹1,160 cr (+6%, 13%); Automation ₹500 cr (−15%, 14%). Cash ex-robotics proceeds ₹6,042 cr. [V-sec ScanX]
- **Underlying TTM PAT ≈ ₹1,546 cr** [E] (2,988 − 1,442) → underlying P/E ≈ 95×, consistent with screener's 95.7×.

### 2.4 Q2 CY26 (Apr–Jun 2026) — latest quarter [V: transcript 31-Jul-26 + screener; V-sec AngelOne]
| Metric | Q2 CY25 | Q2 CY26 | YoY |
|---|---|---|---|
| Revenue | 2,940 | **3,559** | +21% |
| Screener operating profit / OPM | 401 / 14% | **447 / 13%** | |
| Operational EBITA (company) | — | **₹461 cr, 13.0%** (+23%) | |
| PBT | — | ₹499 cr (company) / 491 (screener) | |
| PAT | ~343 | **₹370 cr (company), ₹362 cr (screener)** | +8% |
| Orders | 2,917 | **4,363** | **+50%** |
| Backlog | — | **₹11,898 cr** (+22%) | |
- H1 CY26: orders ₹8,643 cr (+36%), revenue ₹6,743 cr (+13%), EPS ₹33.61 (continuing), op. EBITA 12.8%; cash **₹7,200 cr** (company) vs screener cash equivalents ₹7,336 cr (Jun-26 balance sheet).
- **Special/interim dividend ₹90/share** (Jul-26) = robotics proceeds + 50% payout of normal EPS (≈₹1,900 cr outflow [E] on 21.15 cr shares).
- Segment colour: Electrification orders +77%, revenue +31%, PBIT ~15% (metal costs/forex); Motion PBIT ~12% (railway long-gestation orders, West Asia export holdback); Automation revenue ₹524 cr (+7%), ~30% services. Revenue mix Q2: EL 50% / Motion 35% / Automation 15%. Exports **13%** of revenue (17% a year ago).
- Margin bridge Q1→Q2: EBITDA 13.6% → 12.6%; scale +2.1pp, material −3pp (copper/metals, rupee), other/employee −2.2pp, forex +1.6pp. Material cost ~63% (vs 61% Q1, 60% Q1 CY25). Management **declined to commit to a "mid-teens" EBITDA** margin given commodities/rupee.
- Order mix Q2: **data centres 15–17% of orders**, metals & mining 15%, oil & gas 9%, buildings & infra 8%, renewables 6%. Company has dropped the base/large order split ("everything is base orders").

### 2.5 Balance sheet (screener, Jun-2026 half-year BS) [V]
Borrowings ₹145 cr (leases) · cash equivalents ₹7,336 cr · investments ₹2 cr · **net cash ≈ ₹7,193 cr** [E] (company: ₹7,200 cr; Dec-25 ₹5,835 cr screener / ₹5,665 cr company) — before the ₹90/sh dividend outflow (≈₹1,900 cr, paid after Jun-26) [E]. Net worth ₹9,339 cr. Working-capital days ~5 (CY25). Capex: ~US$75–80 m expansion over 2–3 years (Nelamangala second site now the 6th factory; data-centre product capacity) [V transcript].

### 2.6 Native KPIs
- **Order inflow / backlog:** CY25 ₹14,115 cr / ₹10,471 cr; Q1 CY26 ₹4,280 cr / ₹11,094 cr; **Q2 CY26 ₹4,363 cr / ₹11,898 cr** (book-to-bill Q2 ≈ 1.23×) [E].
- **Segment mix:** EL ~50%, Motion ~35%, Automation ~15% (post-robotics).
- **Data-centre exposure:** 15–17% of Q2 CY26 orders; management expects DC demand to "multifold" and is adding capacity for DC products [V].
- **Parent royalty/technology fees:** paid to ABB group (related-party) — amount not re-verified this session (unverified; check AR CY2025 related-party note) [K].
- **Management:** Country MD **Sanjeev Sharma**; **T.K. Sridhar (CFO) designated MD from 1-Jan-2027**; **Suneel Kumar Munaga appointed CFO & KMP from 1-Jan-2027** (BSE 6-Oct-2026) [V].
- **Parent events:** ABB Ltd agreed to acquire **Rotork** (pending Rotork shareholder approval as of 31-Jul-26) [V transcript]; ABB Ltd sold global Robotics to SoftBank (announced Oct-2025, ~US$5.4 bn) rather than spinning it off [K: ABB Ltd press release Oct-2025; not re-fetched].

### 2.7 Ownership (screener, Jun-2026) [V]
Promoter (ABB Asea Brown Boveri / ABB Ltd) **75.00%** · FIIs 7.67% · DIIs 9.89% · public 7.44%.

### 2.8 Story bullets
1. **Orders re-accelerating, margins not:** orders +25% (Q1) and +50% (Q2) with backlog ₹11.9k cr, but op. EBITA stuck ~13% vs ~19% CY24 peak — copper/metals, rupee weakness and a lower export share.
2. **Robotics exit is a one-off cash event, not earnings:** ₹1,658 cr gain inflates TTM PAT to ₹2,988 cr; ~₹1,900 cr returned via ₹90/sh dividend. Underlying P/E still ~95×.
3. **Data centres the hot vertical** (15–17% of orders), plus railways in Motion; capex modest (~US$75–80 m).
4. **Leadership transition** Jan-2027: Sridhar to MD, Munaga to CFO.

---

## 3. Waaree Energies (NSE: WAAREEENER · BSE: 544277)

**Archetype:** solar modules + cells (integrating into ingot/wafer, glass, BESS, inverters, transformers, electrolysers; EPC via listed subsidiary Waaree Renewable Technologies). Listed Oct-2024; no merger/demerger. Promoter: Doshi family (CMD Hitesh Doshi); WTD & CEO **Jignesh Rathod**, CFO **Abhishek Pareek** [V transcript].

### 3.1 Market data (screener, 13-Oct-2026 close) [V]
| Item | Value |
|---|---|
| Price | ₹2,451 (52w ₹3,720 / ₹2,282) — near 52-week low; 1-yr return −28% |
| Market cap | **₹70,353 cr** |
| P/E (TTM) | **17.5×** |
| Book value / P/B | ₹502 / **4.9×** [E] |
| ROCE / ROE | 38.4% / 32.5% (company TTM, adj. for unutilised IPO money: 28.5% / 24.8%) |
| EV/EBITDA (TTM) | ≈ **10.4×** [E] = (70,353 − 4,468)/6,351 |

### 3.2 FY26 (Apr-25–Mar-26), consolidated (screener [V])
| Metric | FY25 | FY26 | YoY |
|---|---|---|---|
| Revenue | 14,444 | **26,537** | **+84%** |
| Operating profit (= company "operating EBITDA" ₹5,909 cr) | 2,722 | **5,909** | +117% |
| OPM | 18.8% | **22.3%** | +350 bps |
| Other income | 398 | 413 | |
| Depreciation | 402 | 990 | |
| PAT | 1,928 | **3,884** | **+101%** |
| CFO / capex-led FCF | 3,158 / −114 | 1,627 / **−3,209** | |
- FY26 module production 12.6 GW (company FY26 deck, per primer [K]; not re-verified); FY26 order book ~₹53,000 cr, FY25 ~₹47,000 cr [V Q1 FY27 deck/transcript].
- FY27 guidance: **operating EBITDA ₹7,000–7,700 cr** (reaffirmed 30-Jul-2026) [V].

### 3.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 not yet out (trading window closed 1-Oct-26) [V deck + transcript + screener]
| Metric | Q1 FY26 | Q4 FY26 | **Q1 FY27** | YoY |
|---|---|---|---|---|
| Revenue | 4,426 | 8,480 | **7,932** | +79% (−6% QoQ) |
| Operating EBITDA | 997 | 1,577 | **1,440** | +44% |
| EBITDA margin | 22.5% | 18.6% | **18.2%** | −430 bps |
| PAT | 773 | 1,126 | **892** | +15% (−21% QoQ) |
- Peak margin was Q3 FY26 (25.5%). Q1 margin pressure: metal/raw-material inflation and Chinese price moves, softer exports (US customs clearances), lower-IRA US OEM-sourced dispatches, delayed non-DCR offtake after ALMM-II took effect 1-Jun-2026, inventory build for H2-weighted schedule.
- **Module volumes sold:** 3.6 GW (vs 1.9 GW, +89%).
- **Revenue mix Q1 FY27:** utility/IPP/C&I 39.7%, **retail 30.2%** (₹2,289 cr, +130%; FY27 retail target ₹9,000–10,000 cr), overseas 21.2% (₹1,609 cr = **US domestic manufacturing ₹1,322 cr + India exports ₹287 cr**), EPC/O&M/T&D 8.9%.
- **Concentration:** top-5 customers 27.1% (FY26 33%), top-10 37.1% (FY26 47%).

### 3.4 Native KPIs (solar)
| KPI | Value | Source |
|---|---|---|
| Module capacity — nameplate | **~26 GW** (India 24.2 GW incl. +3 GW Samakhiali Apr-26; USA 1.6 GW) | [V] deck slide 8 |
| Module utilisation Q1 FY27 | India ~50% annualised; US ~59% (target 75–80%) | [V] transcript |
| Cell capacity | **5.4 GW** operational (Chikhli); Q1 output ~0.8 GW (62% annualised); run-rate ~400 MW/month | [V] |
| New cell capacity | **+10 GW** (Unn/Gujarat) — all equipment on site; ALMM-II application filed; "within FY27" / "next 6 months"; FY28 total 15.4 GW cell, ~10 GW cell output, 16–18 GW module output | [V] |
| Ingot/wafer | **10 GW, Nagpur** — construction started; FY28 | [V] |
| US | 1.6 GW operating (Texas) + **2.6 GW being added in FY27** (new lines "next few months"/from Q2); HJT 125 MW order from **Arizona** plant | [V] |
| Order book | **~₹61,500 cr / 25.2 GW modules** (28-Jul-26; FY26 ₹53k cr / 22.3 GW; FY25 ₹47k cr / 21.4 GW); Q1 inflow ~₹16,000 cr, executed ~₹7,300 cr; module ≈ 90% of book | [V] |
| Order book geography | **Domestic India ~40% / Domestic US ~36% / Export from India ~24%** | [V] |
| Realisation | Export ~$0.25–0.26/Wp; **DCR $0.20–0.25/Wp**; non-DCR $0.13–0.14/Wp; US IRA adds ~$0.07/Wp gross | [V] transcript |
| EBITDA per W | Q1 FY27 ≈ ₹1,440 cr / 3.6 GW ≈ **₹4.0/W** (blended incl. retail/EPC) | [E] |
| Cell-integrated line margin | 35–40% | [V] |
| Other capacities | BESS containers 5.15 GWh (vs 3.5 GWh planned); inverters **4.15 GW** after +1.1 GW Sarodhi line (30-Sep-2026, Waaree Power) ; 17.6 MVA inverter-duty transformer production started; 55% of Associated Power Structures (T&D EPC) bought for ~₹1,225 cr | [V] deck; BSE 30-Sep-26 |
| Capex | Announced programme **₹31,497 cr**, ₹9,450 cr deployed by 30-Jun-26; phasing FY27 30% / FY28 40% / FY29 30%; FY29: 2,500 TPD glass + 16.5 GWh BESS (cells+packs) | [V] |
| Policy | ALMM List-II (cells) effective 1-Jun-2026 with ~5–6 month window for non-DCR; 20% customs duty; PLI; US IRA/UFLPA/FEOC | [V] transcript |

### 3.5 Balance sheet (Mar-26, screener) [V]
Borrowings ₹3,213 cr · cash equivalents ₹6,728 cr · investments ₹953 cr → **screener net cash ≈ ₹4,468 cr** [E]. Company: **net debt/equity −0.08× at 30-Jun-26** (≈ ₹1,150 cr net cash on ~₹14.4k cr equity [E]) — gap reflects company netting of deposits/acceptances. CWIP ₹3,477 cr; inventory ₹5,856 cr (from ₹2,692 cr); working-capital days −35. FY26 FCF −₹3,209 cr (capex).

### 3.6 Ownership (screener, Jun-2026) [V]
Promoters **64.12%** · FIIs 8.57% (up from 0.70% Mar-25) · DIIs 4.08% · public 23.23%.

### 3.7 Story bullets
1. **Volume machine with a margin wobble:** revenue +79% but EBITDA margin down to 18.2% from a 25.5% Q3 FY26 peak; guidance ₹7.0–7.7k cr implies ~₹1.85–2.1k cr/quarter for the remaining three quarters vs ₹1.44k cr in Q1 — back-half loaded on cells + DCR + US lines.
2. **Order book ₹61.5k cr / 25 GW** but the "~65–70% export" story is outdated: India is now ~40%, US-made ~36%, India-to-US exports ~24%.
3. **Cell integration is the lever:** 5.4 → 15.4 GW cells by FY28; ALMM-II (cells) from Jun-26 makes DCR cells scarce and valuable ($0.20–0.25/Wp vs $0.13–0.14 non-DCR).
4. **Waaree 2.0 diversification** (BESS, inverters, transformers, T&D EPC, electrolysers) — ₹31.5k cr capex makes FCF negative through FY28; stock de-rated to 17.5× P/E.

---

## 4. Suzlon Energy (NSE: SUZLON · BSE: 532667)

**Archetype:** wind turbines (WTG OEM, S144 3.x MW platform; new S175 5.x MW and S163 6.x MW) + India's largest wind O&M (RE AMS) + foundry & forging (SE Forge) + "Suzlon 2.0" (DevCo, RE Projects/EPC, exports, BESS/solar O&M). Listed; no merger/demerger. **Group CEO: Ajay Kapur; Group CFO: Rahul Jain** (Q1 FY27 call) [V]. Vice Chairman Girish Tanti.

### 4.1 Market data (screener, 13-Oct-2026 close) [V]
| Item | Value |
|---|---|
| Price | ₹40.2 (52w ₹61.5 / ₹36.3); 1-yr −26% |
| Market cap | **₹54,776 cr** |
| P/E (TTM) | **17.4×** (TTM PAT ₹3,144 cr incl. ~₹740 cr+ DTA credits — distorted) |
| Book value / P/B | ₹6.96 / **5.8×** [E] |
| ROCE / ROE | 34.2% / 39.7% |
| EV/EBITDA (TTM) | ≈ **17.4×** [E] = (54,776 − 2,322 company net cash)/3,019 |
| BSE "rumour verification" | price-movement clarifications filed 8-Oct & 13-Oct-2026 — "no triggering event" [V BSE list] |

### 4.2 FY26 (Apr-25–Mar-26), consolidated [V: screener + Q1 FY27 deck income statement]
| Metric | FY25 | FY26 | YoY |
|---|---|---|---|
| Net deliveries (MW) | 1,550 | **2,456** | +58% |
| Net revenue (company) | 10,851 | **16,679** (screener 16,732) | +54% |
| Contribution margin | 33.7% | 32.2% | |
| EBITDA (company) | 1,857 | **3,022** (screener 3,025) | +63% |
| EBITDA margin | 17.1% | **18.1%** | +100 bps |
| Net finance cost | 151 | 352 | |
| PBT | 1,447 | 2,422 | |
| Tax (credit) | (625) | **(742)** — DTA recognition, non-cash | |
| PAT | 2,072 | **3,163** | +53% |
| CFO / FCF (screener) | 1,092 / 724 | 1,202 / 626 | |
- **Segments FY26** (statutory segments, deck): WTG/RE solutions revenue ₹14,040 cr (FY25 ₹8,481 cr, FY24 ₹4,215 cr), EBITDA ≈ ₹2,495 cr (≈17.8%); **RE AMS (O&M) revenue ₹2,073 cr (FY25 ₹1,928, FY24 ₹1,798), EBITDA ₹839 cr (40.5%)**; foundry & forging revenue ≈ ₹483 cr [V-deck, text-extracted chart labels — WTG EBITDA and forging figures indicative].
- PAT quality: adj. for DTA credits, FY26 PBT ₹2,422 cr is the cleaner earnings base (taxed at ~25% ≈ ₹1,800 cr [E]) ⇒ **underlying P/E ≈ 30×** [E].

### 4.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 not yet out (trading window closed 24-Sep) [V deck + transcript]
| Metric | Q1 FY26 | Q4 FY26 | **Q1 FY27** | YoY |
|---|---|---|---|---|
| Net deliveries (MW) | 444 | 830 | **506** (highest Q1 ever) | +14% |
| Commissioned (COD) MW | 117 | — | **269** (+1,257 MW erected awaiting COD) | 2.3× |
| Revenue | 3,117 | 5,468 | **3,819** | +23% |
| Contribution margin | 35.1% | 29.7% | 32.1% | |
| EBITDA | 599 | 964 | **595** | −1% |
| EBITDA margin | 19.2% | 17.6% | **15.6%** | −360 bps |
| PBT | 459 | 833 | 390 | |
| PAT | 324 | 1,114 | **305** (after DTA charge ₹84 cr) | −6% |
- Headwinds: West Asia conflict → fuel/crane/trailer disruption deferred **10–20% of deliveries**; higher fixed cost (Puducherry plant, leadership, Suzlon 2.0). **WTG contribution margin 23.4%** (scope mix: EPC share 32% vs 22%). **ASP ₹6.3 cr/MW vs ₹5.6 cr/MW**.
- RE AMS Q1: revenue ₹526 cr (Q1 FY26 ₹478 cr), EBITDA ₹228 cr (43.3%) vs ₹188 cr (39.2%) [V-deck; margins reconcile]. Foundry & forging revenue ₹126 cr, EBITDA ₹22 cr [V transcript].
- FY27 shape: H1 ~35–40% / H2 ~60–65% of deliveries; EBITDA margin "17–18%" historical band referenced; Suzlon 2.0 ambition **~25% CAGR for 5 years**, FY31 ambition ~7.5 GW wind manufacturing (75:25 wind:other) [V].

### 4.4 Native KPIs (wind)
| KPI | Value | Source |
|---|---|---|
| **Order book** | **6,135 MW (6.1 GW) incl. post-June orders (Jul-26)**; ~5,697 MW Jun-26; 5,933 MW Mar-26; 5,025 MW Mar-25 | [V] deck slide 16 (mapping inferred from sequence) |
| Order mix (6,135 MW) | Captive/C&I/retail 70%, central & state auctions 16%, PSU 14%; **S144 88%**, S120 10%, S175 2%; EPC 32% / non-EPC 68%; states KA 29%, GJ 22%, AP 20%, MH 10% | [V] |
| Order inflow | ~1 GW in first 4 months of FY27; **60% of new orders from in-house DevCo** (600+ MW); Waaree Group 201.6 MW order (Jul-26) | [V] |
| Deliveries | FY25 1,550 / **FY26 2,456 MW**; Q1 FY27 506 MW | [V] |
| India wind additions | FY26 **~6.1 GW** (FY25 4.2 GW); Q1 FY27 1.3 GW; India installed 57 GW at Jun-26 | [V] deck |
| Manufacturing capacity | **4.5 GW/yr fully operational**; 3 new AI-enabled blade factories under construction | [V] |
| Platform | S144 (3.15–3.3 MW) = go-to turbine; **S175 5.x MW first turbine installed May-2026**, first India order won; S163 6.x MW first install H1 2027 | [V] |
| EBITDA per MW | FY26 ≈ ₹3,022 cr / 2,456 MW ≈ **₹1.23 cr/MW** (consolidated, incl. O&M) [E] | [E] |
| O&M portfolio | **16.1+ GW** installed base serviced in India (10,000+ turbines, 1,900+ customers); availability >95%; Renom multi-brand AUM 3,585 MW (Jun-26) | [V] |
| Working capital | Trade receivables **₹5,890 cr (Jun-26)** vs ₹6,487 cr Mar-26, ₹3,866 cr Mar-25; inventories ₹5,172 cr; screener WC days 84 (FY26) | [V] |
| Net cash | **₹2,322 cr (Jun-26)**, ₹2,384 cr (Mar-26), ₹1,943 cr (Mar-25) — company basis incl. non-current bank balances & MFs; screener basis Mar-26 only ≈ ₹907 cr (1,246 + 217 − 556) | [V] |
| Capex guidance | ~₹700 cr ± ₹100 cr (FY27) | [V] |
| ALMM (wind) | "Suzlon fully compliant" with the wind ALMM; positioned vs import-dependent rivals | [V] |

### 4.5 Ownership (screener, Jun-2026) [V]
Promoters **11.70%** (13.25% Mar-25 → 11.75% Jun-25 after ~₹1,295 cr block) · FIIs 24.15% · DIIs 11.12% · public 53.02%. ESOP allotment 6.4 lakh shares 18-Sep-2026.

### 4.6 Story bullets
1. **Volume growth intact, margins slipping:** Q1 deliveries +14% and revenue +23% but EBITDA flat and margin 15.6% — West Asia logistics + fixed-cost step-up for Suzlon 2.0. H2-heavy year (60–65%).
2. **Order book 6.1 GW (not the ~6.4 GW some sources/primer cite)** — ~2.5 years of deliveries; DevCo now originates 60% of new orders (watch working-capital/credit quality implications).
3. **Receivables are the swing factor:** ₹5.9k cr (≈ 4 months of revenue); 1,257 MW erected but awaiting COD.
4. **De-rated:** m-cap ₹54.8k cr vs ~₹79k cr in the July primer; headline P/E 17× flattered by DTA credits (underlying ~30×).

---

## 5. Premier Energies (NSE: PREMIERENE · BSE: 544238)

**Archetype:** solar **cells** + modules (integrated; cell-heavy), plus transformers via 51%-owned Transcon; building 10 GW ingot-wafer and 12 GWh BESS containers. Listed Sep-2024; no merger/demerger; new Singapore WOS "PE Horizon Pte" incorporated 23-Sep-2026 [V BSE list]. MD **Chiranjeev Singh Saluja**; Chairman & WTD Surender Pal Singh Saluja; CFO Nand Kishore Khandelwal; CBO Vinay Rustagi [V].

### 5.1 Market data (screener, 13-Oct-2026 close) [V]
| Item | Value |
|---|---|
| Price | ₹906 (52w ₹1,134 / ₹660) |
| Market cap | **₹41,166 cr** |
| P/E (TTM) | **24.7×** |
| Book value / P/B | ₹95.1 / **9.5×** [E] |
| ROCE / ROE | 32.7% / 41.0% |
| EV/EBITDA (TTM) | ≈ **16.8×** [E] = (41,166 + 1,642 company net debt)/2,543 |

### 5.2 FY26 (Apr-25–Mar-26), consolidated (screener [V])
| Metric | FY25 | FY26 | YoY |
|---|---|---|---|
| Revenue | 6,519 | **7,824** | +20% |
| Operating profit | 1,781 | **2,378** | +34% |
| OPM | 27.3% | **30.4%** | +310 bps |
| Other income | 134 | 206 | |
| Depreciation | 498 | 452 | |
| PAT | 937 | **1,510** | **+61%** |
| CFO / FCF | 1,348 / 728 | 1,261 / **−1,736** | |
- Order book Mar-26: **₹14,010 cr / 9,383 MW** [K: primer citing company FY26 release; consistent with Q1 deck "₹140 bn Mar-26"] [V-deck].

### 5.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 not yet out (trading window closed 28-Sep) [V deck + transcript + screener]
| Metric | Q1 FY26 | Q4 FY26 | **Q1 FY27** | YoY |
|---|---|---|---|---|
| Revenue from operations | 1,821 | 2,230 | **2,463** | +35% |
| Operating EBITDA (company) | 548 | 675 | **714** (29.0%) | +30% |
| EBITDA incl. other income (company) | — | — | ₹759 cr (30.3% on total income ₹2,508 cr) | +27% |
| PAT | 308 | 457 | **472** (18.8%) | **+53%** |
- Transcon (51%, consolidated): Q1 revenue ₹110 cr, EBITDA ₹29 cr (27%), PAT ₹18 cr; 6.75 GVA operational + 10 GVA under construction (Neotrafo HV/EHV plant, COD targeted Sep-2026); order book ₹250 cr; target 16.25 GVA by FY28 [V].
- Revenue mix Q1: ~99–100% domestic; cells ~24–25% of revenue (external cell sales), modules ~71–75%, Transcon ~4%.
- Q1 capex ~₹1,500 cr (solar ₹1,250 cr; Transcon ₹250 cr) [V].
- **Margin guidance: 29–30% EBITDA ± 100–150 bps** maintained; "DCR is sold out… selling now only for FY28"; C&I customers booking FY28 capacity [V].

### 5.4 Native KPIs (solar)
| KPI | Value | Source |
|---|---|---|
| **Cell capacity** | **10.6 GW** (3.6 GW Telangana + **7 GW TOPCon Naidupeta, AP — commissioned Sep-2026**) | [V] BSE press release 9-Oct-2026 |
| **Module capacity** | **11.1 GW** (incl. 5.6 GW automated Seetharampur plant, operational) | [V] |
| Utilisation | Cells **92%** effective utilisation in Q1 FY27 (record); modules ~79–83% (ex-Seetharampur) | [V] deck/transcript |
| Production | Quarterly cell/module output ~0.9–1.0 GW each range in FY26–Q1 FY27 (chart values 918–961 MW) | [V-deck, indicative] |
| **Order book** | **₹15,000 cr / 9,867 MW at 30-Jun-26** (cells 58%, modules 40%, transformers 2%; **100% domestic**); Q1 new orders ₹3,011 cr (₹3.3k cr incl. Transcon) | [V] |
| Q2 FY27 inflow | **₹4,001 cr (2,308 MW cells+modules + EPC)** in Jul–Sep 2026, ex-retail | [V] BSE 9-Oct-2026 |
| Realisation | DCR modules: PM Surya Ghar ~24–24.5 ¢/Wp; KUSUM ~22 ¢; C&I lower; N-DCR softening on oversupply; long-term cell contracts variable-priced (wafer, silver, FX) | [V] transcript |
| EBITDA per W | n.m. (cell-heavy mix); FY26 EBITDA ₹2,378 cr on ~3.5–4 GW sold ≈ ₹6/W [E — volume approximate] | [E] |
| Backward integration | **10 GW ingot-wafer at Naidupeta** (first 5 GW Dec-2027, balance Dec-2028) [K: primer/company release]; BESS **12 GWh (Phase 1: 6 GWh) — land acquired, construction started**, tech partner in 2–3 months | [V] transcript |
| US | JV to set up **US cell manufacturing**; site not finalised; output in 24–30 months; no US revenue today | [V] |
| ALMM | ALMM-II (cells) from 1-Jun-2026 but **temporary exemption until Dec-2026** for C&I and non-subsidy residential; all C&I projects commissioned from 1-Jan-2027 must use DCR | [V] deck slide 10 + transcript |
| Net debt | **₹1,642 cr (Jun-26)** vs ₹1,046 cr (Mar-26), ₹387 cr (Dec-25), net cash ₹1,057 cr (Jun-25); D/E 0.86× | [V] deck (company basis incl. IPO cash) |

### 5.5 Balance sheet (Mar-26, screener) [V]
Borrowings ₹3,707 cr · cash equivalents ₹2,089 cr · investments ₹670 cr → screener net debt ≈ ₹948 cr [E] (company ₹1,046 cr). CWIP ₹2,144 cr (from ₹242 cr). Net worth ₹4,307 cr.

### 5.6 Ownership (screener — **Sep-2026 pattern available**) [V]
Promoters **58.49%** (63.94% Mar-26 → 58.48% Jun-26: a ~5.5 pp reduction in Apr–Jun 2026 — likely promoter-group sale/OFS; reason not verified this session) · FIIs 7.12% · DIIs **18.88%** · public 14.99% · others 0.00%.

### 5.7 Story bullets
1. **Cell capacity nearly tripled to 10.6 GW in Sep-2026** — the core thesis now in execution; DCR sold out into FY28.
2. **Highest-margin solar pure-play** (29–30% EBITDA) but **net debt rising** (₹1.6k cr) with ~₹12k cr capex (wafer, BESS, Transcon) — first year of negative FCF.
3. **Order book ₹15k cr + ₹4k cr Q2 inflow**; entirely domestic — insulated from US tariffs, exposed to Indian DCR policy (ALMM-II C&I exemption to Dec-26).
4. **Promoter dilution** to 58.5% and stock at 24.7× P/E (vs ~32× in July primer).

---

## 6. Inox Wind (NSE: INOXWIND · BSE: 539083)

**Archetype:** wind turbines (3.x MW platform, 2 MW legacy; **4X (4.x MW) prototype Aug-2026, commercial launch targeted within CY26**) + turnkey EPC via Inox Renewable Solutions (IRSL) + O&M via listed subsidiary Inox Green. Part of INOXGFL Group (ED **Devansh Jain**; Group CFO Akhil Jindal); **Inox Wind CEO: Sanjeev Agarwal** [V transcript 7-Aug-26]. Listed. **Corporate actions:** Inox Wind Energy (IWEL, former holdco) **merged into IWL** (FY25 restated) [V deck]; **IRSL received Inox Green's power-evacuation business by demerger, record date 1-Aug-2026; IRSL to be listed** after approvals [V]; ₹1,249 cr rights issue at ₹120/sh (FY26) [K: primer; equity capital 1,624→1,728 cr consistent].

### 6.1 Market data (screener, 13-Oct-2026 close) [V]
| Item | Value |
|---|---|
| Price | **₹69.9** (52w ₹159 / ₹62.4) — down ~56% from 52-week high, below the ₹120 rights price |
| Market cap | **₹12,055 cr** |
| P/E (TTM) | **35.0×** |
| Book value / P/B | ₹36.9 / **1.9×** [E] |
| ROCE / ROE | 10.6% / 7.5% |
| EV/EBITDA | ≈ **15.1×** on screener TTM OP ₹861 cr; ≈ 10.6× on company FY26 EBITDA ₹1,232 cr (incl. other income) [E]; net debt ≈ ₹940 cr (see 6.4) |

### 6.2 FY26 (Apr-25–Mar-26), consolidated [V: screener + Q1 FY27 deck slide 7/27]
| Metric | FY25 (restated) | FY26 | YoY |
|---|---|---|---|
| Revenue from operations | 3,557 | **4,397** | +24% |
| Total income (company headline) | 3,702 | 4,569 | +23% |
| Screener operating profit / OPM | 757 / 21% | **891 / 20.3%** | |
| Company EBITDA (incl. other income, ex-ECL/one-offs) | 985 | **1,232 (27%)** | +25% |
| PBT | 537 | 659 | +23% |
| PAT | 438 | **449** | +3% |
| Cash PAT (company) | 721 | **863** | +20% |
| CFO / FCF (screener) | 138 / −483 | **−598 / −1,246** | |
- Note the gap between screener OPM (~20%) and company "EBITDA margin ~27%": the company adds other income (₹172 cr) and excludes ECL provisions/one-offs.

### 6.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 not yet out (window closed 1-Oct) [V deck + transcript + screener]
| Metric | Q1 FY26 | **Q1 FY27** | YoY |
|---|---|---|---|
| Revenue from operations | 826 | **814** | −1% |
| Total income | 863 | **872** | +1% |
| Company EBITDA (incl. OI) | 245 | **237 (27.2%)** | −3% |
| Screener OP / OPM | 184 / 22% | 152 / 19% | |
| PBT | 138 | **95** | −31% |
| PAT | 97 | **64** | −34% |
| Cash PAT | 186 | 153 | −18% |
- **Management declined to disclose MW executed** ("not announce anything on megawatt now") [V]. Pivot from turnkey to **equipment supply**: 59% of third-party order book is now equipment-only (41% turnkey); results expected to improve "from Q3 onwards".
- **FY27 guidance unchanged: revenue +75% over FY26 (≈ ₹8,000 cr incl. OI) at 20–22% EBITDA margin** — implies ~₹6,500–7,100 cr in Q2–Q4 vs ₹872 cr in Q1 [V; E for implied run-rate].
- Blended per-MW revenue on O&M at Inox Green ₹9–10 lakh/MW/yr (wind) [V].

### 6.4 Native KPIs (wind)
| KPI | Value | Source |
|---|---|---|
| **Order book** | **~4.4 GW (Jul-2026)** — *includes 1.5 GW MOU with group company Inox Clean, of which only 500 MW firm (up to ₹3,500 cr)*; plus 200 MW NLC India LoA (Jul-26), 100 MW turnkey from Terra Clean (IOCL subsidiary; clarified 7-Sep-26) | [V] deck/transcript/BSE |
| Firm third-party book (approx.) | ≈ 3.4 GW excluding the unsigned 1 GW Inox Clean tranche [E] | [E] |
| Customers | NTPC, CESC, NLC India, Aditya Birla, Amplus/Gentari, Hero Future Energies, Inox Clean | [V] |
| Group demand | Inox Clean targets 6 GW operational IPP by FY27, 14 GW by FY29; ~20–30% of 3 GW+/yr additions expected to be wind | [V] |
| Deliveries / commissioning | **not disclosed for Q1 FY27**; FY26 MW not verified this session (see Primer issues) | — |
| Platform | 3.x MW (3.3 MW) workhorse; **4X prototype installation Aug-2026**; Jaipur transformer plant making 4.9 MVA units for 4X; plans 8–20 MVA and 100 MVA+ transformers; 4 owned cranes | [V] |
| EBITDA per MW | n.a. (MW not disclosed) | — |
| Receivables / WC | **Trade receivables ₹4,250 cr (Mar-26) vs ₹2,549 cr (Mar-25)** — ~350 days of revenue; screener WC days 267; management: receivables stuck until commissioning (Ind AS 115 risk-transfer), to fall as equipment-supply mix rises | [V] deck BS + transcript |
| Net debt | Borrowings ≈ ₹1,551 cr (non-current ₹275 + current ₹1,276) vs cash ₹131 cr + bank ₹481 cr ⇒ **net debt ≈ ₹940 cr (Mar-26)**; ≈ ₹390 cr if ₹550 cr non-current investments counted | [V] deck BS; [E] arithmetic |
| Net worth | ₹7,692 cr (FY26, incl. NCI ₹1,310 cr) vs ₹5,416 cr FY25 | [V] |

### 6.5 Ownership (screener, Jun-2026) [V]
Promoters **44.18%** (64.64% Sep-23 → 52.87% Dec-23 → 48.27% Jun-24 → 44.18% Jun-25) · FIIs 14.53% · DIIs 10.02% · public 31.28%. Deck pie (30-Jun-26): promoters 44%, FIIs 15%, DIIs 9%, retail/others 32% [V].

### 6.6 Story bullets
1. **Execution credibility crisis:** Q1 revenue flat, PAT −34%, MW not disclosed; stock ₹70 vs ₹120 rights price; FY27 +75% guidance requires ~3× Q1 run-rate in each remaining quarter.
2. **Order book 4.4 GW is group-dependent:** 1.5 GW Inox Clean MOU (only 0.5 GW firm) — related-party concentration.
3. **Working capital is the binding constraint:** receivables ₹4.25k cr ≈ 1 year of revenue; FY26 CFO −₹598 cr; pivot to equipment supply aims to release cash.
4. **Group restructuring:** IWEL merged; IRSL (EPC/evacuation) set to list separately; Inox Green consolidating Wind World O&M (feeds IWL's consolidated EBITDA from Q3).

---

## 7. Inox Green Energy Services (NSE: INOXGREEN · BSE: 543667)

**Archetype:** renewable O&M (wind + solar) — annuity services; subsidiary of Inox Wind. **CEO S.K. Mathusudhana** [V]. **Listed; major restructuring in 2026:** (a) **power-evacuation infrastructure business demerged into Inox Renewable Solutions Ltd (IRSL), record date 1-Aug-2026** — IRSL to list after approvals; Inox Green now "asset-light O&M" (fixed assets fell from ₹704 cr to ₹15 cr in FY26, discontinued ops restated) [V deck/transcript/screener]; (b) **Wind World India 4.5 GW O&M acquisition** — NCLT-approved resolution plan; **₹550 cr (incl. taxes) paid 6-Oct-2026 via subsidiary Vibhav Energy Pvt Ltd**; **Inox Green owns 75% of Vibhav, Authum Investment & Infrastructure 25%** (ICD conversion 9-Oct-2026) [V BSE 7-Oct & 9-Oct-2026].

### 7.1 Market data (screener, 13-Oct-2026 close) [V]
| Item | Value |
|---|---|
| Price | ₹123 (52w ₹272 / ₹109) |
| Market cap | **₹5,163 cr** |
| P/E (TTM) | **42.1×** (TTM PAT ₹122 cr, mostly other income) |
| Book value / P/B | ₹42.5 / **2.9×** [E] |
| ROCE / ROE | 8.1% / 5.1% |
| EV/EBITDA | ≈ 22.6× on company FY26 EBITDA ₹210 cr (incl. other income) [E]; ≈ 7.9× on guided ~₹600 cr annualised EBITDA (pre-25% minority in Vibhav) [E] |

### 7.2 FY26 (Apr-25–Mar-26), consolidated (restated for discontinued evacuation business)
| Metric | FY25 | FY26 | Source |
|---|---|---|---|
| Revenue (screener) | 220 | **281** (+28%) | [V] screener |
| Total income (company) | 252 | **426** (+69%) | [V] deck |
| Screener operating profit / OPM | 37 / 17% | **23 / 8%** | [V] |
| Other income (screener) | 18 | **144** | [V] |
| Company EBITDA (incl. OI) | 123 | **210** | [V] deck |
| PBT | 49 | 158 | [V] deck |
| PAT | 22 | **103** | [V] |
| Cash PAT | 34 | 158 | [V] deck |
- **Basis warning:** core O&M EBITDA (screener OP ₹23 cr, 8%) is tiny; most profit is other income (interest on ICDs/advances, incl. funds parked for acquisitions).

### 7.3 Q1 FY27 (Jun-26) — latest; Q2 not yet out (window closed 1-Oct) [V deck + screener]
| Metric | Q1 FY26 | **Q1 FY27** |
|---|---|---|
| Revenue (screener) | 56 | **43** |
| Total income (company) | 86 | **101** (+17%) |
| Screener OP | 6 | **−1** |
| Other income | 42 | 58 |
| Company EBITDA (incl. OI) | 48 | **57** (+19%) |
| PBT | 31 | 54 (+74%) |
| PAT | 22 | **41** (+86%) |
- Machine availability 96.3%.
- **Guidance:** EBITDA **~₹600 cr on an annualised basis from Q3/Q4 FY27** once Wind World consolidates (management: "₹600 cr was an annual guidance… annualized basis from Q3, Q4 onwards"); O&M wind EBITDA margin guidance ~50% [V transcript]. Wind World O&M FY26 revenue ~₹580 cr, ~5% annual escalation [V BSE 7-Oct-26].

### 7.4 Native KPIs (O&M)
| KPI | Value | Source |
|---|---|---|
| Portfolio | **~13.3 GWp (Jun-26)** = ~10.5 GW wind + ~2.8 GWp solar; **includes ~6.5 GW of acquired wind O&M (4.5 GW Wind World being consolidated + ~2 GW held as an investment)** | [V] deck |
| Organic portfolio | ≈ 6.8 GWp [E] (13.3 − 6.5) | [E] |
| Target | 20 GW+ "in the near future"; feeds from Inox Clean (3 GW+/yr) and Inox Wind (4.4 GW book) | [V] |
| Revenue per MW | ₹9–10 lakh/MW/yr blended wind O&M | [V] transcript |
| Balance sheet (Mar-26, screener) | Borrowings ₹88 cr; cash ₹505 cr; investments ₹550 cr (likely the ~2 GW O&M investment); **net cash ≈ ₹417 cr ex-investments** [E]; net worth ₹1,708 cr | [V] |
| Post-Sep-26 | ₹550 cr Wind World payment (via Vibhav, funded by ICDs incl. ₹100 cr from Authum) — Mar-26 net cash largely deployed [E] | [V]/[E] |

### 7.5 Ownership (screener — **Sep-2026 pattern available**) [V]
Promoters (Inox Wind & group) **53.70%** (56.12% Jun-26) · FIIs 10.48% · DIIs 4.02% · public 31.80%. The ~2.4 pp promoter decline in Jul–Sep 2026 is not explained by documents fetched this session (possible equity issuance/fund-raise — management referenced a fund raise on the Aug-26 call; unverified).

### 7.6 Story bullets
1. **Transformation quarter is Q3 FY27:** Wind World's ~₹580 cr revenue at ~50% margin consolidates (75% economic share) — would multiply EBITDA from ~₹210 cr (FY26, incl. OI) toward ~₹600 cr annualised.
2. **Now a pure O&M company** after the evacuation-infra demerger into IRSL (record date 1-Aug-2026).
3. **Earnings quality:** core O&M OP near zero in Q1 FY27; reported PAT is other-income driven — watch post-acquisition core margins.
4. **Valuation reset:** ₹5.2k cr m-cap (vs ~₹7.4k cr in the Aug primer); 52w low ₹109.

---

# PRIMER ISSUES (batch 1)

How I checked: for each primer I read the cover strip, the "What's new" box and the first sections (snapshot, ownership), then grepped the full text for m-cap, P/E, capacity, order book, revenue, promoter % and MD/CEO. Every "verified" figure below comes from pages fetched this session (tags as above). All m-caps are at the 13-Oct-2026 close.

## 1. primers/cg-power.html (last refreshed 1-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹1.50 lakh Cr (Jul '26)" | **₹1,35,372 cr** (13-Oct-26) | screener [V] |
| 2 | Stale P/E and P/B | "~115× earnings", "~19× book" | **106×** P/E; P/B **16.9×** | screener [V] |
| 3 | Q1 FY27 missing | Nothing after FY26 | Q1 FY27 consolidated revenue ₹3,281 cr (+14%), PAT ₹308 cr (+16%); consolidated order book **₹18,965 cr (+45%)**; standalone ₹17,333 cr | Q1 FY27 call, 24-Jul-26 [V] |
| 4 | Transformer capacity wrong/stale | "expanding power-transformer capacity (from ~45,000 MVA toward ~85,000 MVA by around FY28)" | Already **~75,000 MVA** power transformers plus ~10,000 MVA distribution; **+45,000 MVA** new plant ramping over the next ~3 quarters (≈120 GVA) | Q1 FY27 call [V] |
| 5 | CG Semi status stale | "OSAT plant at Sanand nearing commercial production" / "still ramping toward commercial production" | **G1 commercial production launched 4-Jul-2026** (PM present); G2 due end-CY2026 | Q1 FY27 call [V] |
| 6 | Promoter stake imprecise | "~56%" (Tube Investments' 2020 acquisition) | **56.36%** (Jun-26), down from 58.05% after the Jul-2025 QIP | screener [V] |
| 7 | Missing governance events | — | Statutory auditor SRBC resigned effective 14-Aug-26; **Price Waterhouse Chartered Accountants LLP** appointed (postal ballot 25-Sep-26); VP Transformers Ajay Jain resigned effective 30-Sep-26 | BSE announcements [V] |
| 8 | New EHV switchgear capacity missing | Only mentions the "₹748 Cr greenfield switchgear plan" | S3 Unit-II Nasik commissioned 4-Jun-26: +7,200 EHV breakers/yr on top of 9,000 (+80%) | Q1 FY27 call [V] |
| 9 | Semiconductor drag not quantified | "loss-making" | Semis drag ₹111 cr in FY26 (89 bps) and **₹43 cr in Q1 FY27** (132 bps) | Q4 FY26 and Q1 FY27 calls [V] |
| 10 | Net cash label | "Net cash: ~₹118 Cr borrowings vs ~₹7,655 Cr reserves" — compares debt with reserves, not with cash | Screener cash + investments ₹1,481 cr against ₹118 cr debt (≈ +₹1.36k cr). Other assets of ₹3.8k cr probably hold the QIP deposits | screener [V] / [E] |

FY26 headline figures (₹12,418 cr revenue, ₹1,232 cr pre-EI PAT, ₹17,107 cr order book, Power Systems ₹5,138 cr / ₹12,644 cr backlog, ₹641 cr PowerGrid order, ₹3,000 cr QIP) are **correct** per the Q4 FY26 call [V].

## 2. primers/abb-india.html (last refreshed 2-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Robotics transaction wrong** | §08 "The robotics spin-off": the parent plans a 100% spin-off via "share distribution in-kind… not a cash sale"; ABB India's robotics outcome is still to be decided | ABB India **sold its Robotics business by slump sale to ABB Robotics India for ₹1,568 cr, effective 1-Mar-2026** (postal ballot 27-Feb-26). This booked a **₹1,658.5 cr gain on sale** (discontinued-ops PAT ₹1,441.7 cr). ABB Ltd sold global Robotics to SoftBank rather than spinning it off | ScanX/Univest [V-sec]; Q2 CY26 call ("divestment of robotics") [V]; SoftBank [K] |
| 2 | Segment structure stale | "four engines (Electrification, Motion, Process Automation, Robotics)" | **Three segments now**: Electrification ~50%, Motion ~35%, Automation ~15% of Q2 CY26 revenue; Process Automation renamed Automation from 1-Jan-26 | Q2 CY26 call [V]; Univest [V-sec] |
| 3 | Latest quarter stale | "most recent quarter is Q1 CY2026" | **Q2 CY26 (Apr–Jun)**: revenue ₹3,559 cr (+21%), orders ₹4,363 cr (**+50%**), backlog **₹11,898 cr**, PAT ₹370 cr, op. EBITA 13.0%. Q3 CY26 results due 13-Nov-26 | Q2 CY26 call [V]; AngelOne [V-sec]; BSE 10-Sep-26 [V] |
| 4 | Q1 CY26 profit not explained | Mentions Q1 orders +25% and backlog ₹11,094 cr only | Q1 CY26 reported PAT **₹1,783.7 cr**, of which continuing PAT is only ₹341.9 cr (−25%). This is why screener TTM PAT is ₹2,988 cr | ScanX/Univest [V-sec] |
| 5 | Stale m-cap and P/E | "~₹1.50 L Cr (Jun '26)"; "~75–95× earnings, ~18–19× book" | **₹1,47,566 cr**; P/E **95.7×** (ex-gain basis); P/B **15.8×** | screener [V] |
| 6 | Special dividend missing | CY25 dividend ₹39.36 only | **₹90/share interim/special** declared Jul-26 (robotics proceeds + 50% payout) | Q2 CY26 call [V] |
| 7 | Leadership transition missing | Only names the parent's delegates | **T.K. Sridhar (CFO) designated MD from 1-Jan-2027**, succeeding Sanjeev Sharma; **Suneel Kumar Munaga CFO from 1-Jan-2027** | Q2 CY26 call; BSE 6-Oct-26 [V] |
| 8 | Cash figure stale | "~₹5,694 Cr cash at end-CY2025" | Company: ₹5,665 cr (Dec-25), **₹7,200 cr (Jun-26)** before the ₹90/sh payout; screener cash ₹7,336 cr (Jun-26) | ScanX [V-sec]; Q2 call [V]; screener [V] |
| 9 | Parent M&A missing | — | ABB Ltd's pending acquisition of **Rotork** (raised on the Q2 call) | Q2 CY26 call [V] |

CY2025 figures (revenue ₹13,203 cr, PAT ₹1,669 cr, orders ₹14,115 cr, backlog ₹10,471 cr, dividend ₹39.36) are **correct** [V screener; V-sec Outlook Business].

## 3. primers/waaree-energies.html (last refreshed 3-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap and P/E | "~₹83,000 Cr (Jun '26)", "21–23× trailing" | **₹70,353 cr**, P/E **17.5×** | screener [V] |
| 2 | **Order book geography wrong/stale** | "~65–70% of its ₹53,000 Cr order book is export (chiefly US)" | Order book now **₹61,500 cr / 25.2 GW** (28-Jul-26). Mix: **Domestic-India ~40%, Domestic-US (US-made) ~36%, Export-India ~24%** | Q1 FY27 deck/call [V] |
| 3 | **US capacity wrong** | "Brookshire, Texas module plant went from 1.6 GW to 3.2 GW in 2025, with plans to reach ~5 GW by 2027" | US module capacity **1.6 GW installed** (Q1 FY27, 59% utilisation); **+2.6 GW being added in FY27** (new lines from ~Aug-26); an **Arizona** plant is also referenced (HJT order) | Q1 FY27 deck/call [V] |
| 4 | Q1 FY27 missing | — | Revenue ₹7,932 cr (+79%); op. EBITDA ₹1,440 cr (**18.2%**, down from 22.5%); PAT ₹892 cr (+15%); modules sold 3.6 GW | Q1 FY27 deck [V] |
| 5 | BESS described as a cell plant | "building a 3.5 GWh lithium-ion cell plant… toward 20 GWh" | **5.15 GWh automated BESS container** line commissioned (vs 3.5 GWh planned). Cells and packs are part of the FY29 16.5 GWh phase; total programme 20 GWh | Q1 FY27 deck/call [V] |
| 6 | Inverter and T&D updates missing | "adding a ~4 GW inverter line" | Inverters **4.15 GW** after the 1.1 GW Sarodhi line (30-Sep-26); **55% of Associated Power Structures bought for ~₹1,225 cr** (T&D EPC); 17.6 MVA inverter-duty transformer in production | BSE 30-Sep-26; Q1 deck [V] |
| 7 | Cell expansion timing | "10 GW ingot–wafer… Nagpur" (no cell line mentioned) | **+10 GW cells at Unn**: equipment on site, ALMM-II applied, operational within FY27 (total 15.4 GW). Ingot-wafer 10 GW Nagpur is FY28 | Q1 FY27 call [V] |
| 8 | Promoter stake | "~64%" / "~64.2%" | **64.12%** (Jun-26) | screener [V] |
| 9 | Management | Only CMD Hitesh Doshi named | WTD & **CEO Jignesh Rathod**; CFO Abhishek Pareek | Q1 FY27 call [V] |
| 10 | ALMM-II status | "From June 2026, many projects must use ALMM-listed cells" | Effective 1-Jun-2026, but with a temporary exemption to Dec-2026 for C&I and non-subsidy residential (≈5–6 month window) | Premier Q1 deck; Waaree call [V] |

FY26 figures (revenue ₹26,537 cr, PAT ₹3,884 cr, EBITDA ₹5,909 cr / 22.3%, ~26 GW modules, 5.4 GW cells, FY27 EBITDA guidance ₹7,000–7,700 cr) are **correct** [V].

## 4. primers/suzlon-energy.html (last refreshed 3-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Order book overstated** | "record ~6.4 GW (from ~5.9 GW at the FY26 close), worth roughly ₹40,000 crore+" | **6,135 MW (6.1 GW) as of Jul-26** including post-June orders; ~5.7 GW at 30-Jun-26; 5,933 MW at Mar-26. The ₹ value is not disclosed in the deck, so "₹40k cr+" is unverified | Q1 FY27 deck/call [V] |
| 2 | Order-book mix | "66% PSU + C&I" | Captive/C&I/retail **70%** + PSU **14%** = **84%**; central/state auctions 16% | Q1 FY27 deck [V] |
| 3 | Stale m-cap and P/E | "~₹79k Cr (Jul 2026)"; "~25× earnings, ~13× book" | **₹54,776 cr**; P/E **17.4×**; P/B **5.8×** | screener [V] |
| 4 | Promoter stake | "~11.7%" | **11.70%** (Jun-26). Correct | screener [V] |
| 5 | Q1 FY27 missing | — | Deliveries 506 MW (+14%); revenue ₹3,819 cr (+23%); EBITDA ₹595 cr (**15.6%**, from 19.2%); PAT ₹305 cr; net cash ₹2,322 cr | Q1 FY27 deck [V] |
| 6 | O&M segment figures differ from the company deck | "FY26 O&M revenue ~₹2,484 Cr… ~₹759 crore of profit… ~30% margin" | Deck RE AMS (India): **revenue ₹2,073 cr, EBITDA ₹839 cr (40.5%)** for FY26. If the primer used a different statutory segment basis, it should state it | Q1 FY27 deck slide 23 [V] |
| 7 | O&M fleet | "15+ GW" | **16.1+ GW** installed base serviced (Jun-26); Renom multi-brand AUM 3,585 MW | Q1 FY27 deck [V] |
| 8 | Management/platform missing | No CEO named; S144 only | **Group CEO Ajay Kapur**, Group CFO Rahul Jain; **S175 (5.x MW) first turbine installed May-26** with its first India order; S163 (6.x MW) in H1 2027; "Suzlon 2.0" four-business strategy (25% CAGR ambition) | Q1 FY27 deck/call [V] |
| 9 | Manufacturing capacity | "expand manufacturing to 4.5 GW/year and beyond" | 4.5 GW is **already fully operational**; 3 new AI-enabled blade factories under construction; FY27 capex ~₹700 cr | Q1 FY27 call [V] |

FY26 figures (revenue ₹16,679 cr, EBITDA ₹3,022 cr / 18.1%, PAT ₹3,163 cr incl. ₹742 cr DTA, 2,456 MW deliveries, net cash ₹2,384 cr) are **correct** [V].

## 5. primers/premier-energies.html (last refreshed 4-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Cell capacity stale** | Cover "3.6 / 11.1 GW" cell/module; "3.6 GW today, heading to ~10.6 GW" | **Cells 10.6 GW**: the 7 GW TOPCon Naidupeta plant was commissioned in Sep-2026. Modules 11.1 GW | BSE press release 9-Oct-26 [V] |
| 2 | Order book stale | "₹14,010 Cr (9,383 MW)" | **₹15,000 cr / 9,867 MW at 30-Jun-26** (cells 58%, modules 40%, transformers 2%; 100% domestic), plus **₹4,001 cr (2,308 MW) new orders in Q2 FY27** | Q1 FY27 deck; BSE 9-Oct-26 [V] |
| 3 | Stale m-cap and P/E | "~₹47,500 Cr (Jun '26)", "~31–32× trailing", "P/B ~11×" | **₹41,166 cr**, P/E **24.7×**, P/B **9.5×** | screener [V] |
| 4 | **Promoter stake stale** | "~63.9% (Mar …)" | **58.49% (Sep-26)**; it fell to 58.48% in Jun-26 quarter | screener [V] |
| 5 | EBITDA margin basis | "~32% EBITDA (FY26)" | Operating EBITDA margin **30.4%** (screener OP ₹2,378 cr on ₹7,824 cr). ~32% only if other income is included. Management guides **29–30% ±100–150 bps** | screener; Q1 call [V] |
| 6 | ALMM-II framing | "ALMM 'List-II' for cells (mandatory from 1 June 2026)" | Mandatory from 1-Jun-26, **but temporary exemption until Dec-2026 for C&I and non-subsidy residential** projects | Q1 FY27 deck slide 10 [V] |
| 7 | Q1 FY27 missing | — | Revenue ₹2,463 cr (+35%); op. EBITDA ₹714 cr (29%); PAT ₹472 cr (+53%); cell utilisation 92%; **net debt ₹1,642 cr** (D/E 0.86×) | Q1 FY27 deck [V] |
| 8 | Transcon and BESS detail | Lists "transformers (Transcon)" as a new vertical | 51% Transcon consolidated (Q1 revenue ₹110 cr, 27% EBITDA); 6.75 GVA operational, +10 GVA (COD Sep-26), 16.25 GVA by FY28; **BESS 12 GWh (6 GWh Phase 1) under construction**; US cell JV planned (24–30 months) | Q1 FY27 call/deck [V] |

FY26 figures (revenue ₹7,824 cr, PAT ₹1,510 cr +61%, modules 11.1 GW, net debt ~₹1,000 cr) are **correct** [V].

## 6. primers/inox-wind.html (last refreshed 17-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Promoter stake badly wrong** | "hold the controlling majority stake — roughly 70%+" | **44.18%** (Jun-26); it has been below 50% since Jun-2024 | screener [V]; Q1 deck pie 44% [V] |
| 2 | **Stale m-cap and P/E** | "~₹25,750 Cr (mid-2026)", "~45×" | **₹12,055 cr** (price ₹69.9, below the ₹120 rights price); P/E **35×** | screener [V] |
| 3 | **Order book stale** | "~3.1 GW (FY26 exit)" | **~4.4 GW (Jul-26)**, but this **includes a 1.5 GW MOU with group company Inox Clean, of which only 500 MW is firm**; +200 MW NLC LoA | Q1 FY27 deck/call [V] |
| 4 | **Suspect MW funnel** | "Delivered in FY26 ~2,456 MW… commissioned ~744 MW… ~1,321 MW erected" | **2,456 MW is Suzlon's FY26 delivery figure** (Suzlon deck). Inox Wind did not disclose MW in the Q1 FY27 call ("not announce anything on megawatt"). These numbers look cross-contaminated and are **unverified**; remove or re-source | Suzlon & Inox Q1 FY27 decks/calls [V] |
| 5 | Net cash claim not reproducible | "~₹75 Cr net cash at FY26 exit" | FY26 balance sheet: borrowings ≈ ₹1,551 cr (₹275 cr non-current + ₹1,276 cr current) vs cash and bank ₹612 cr ⇒ **net debt ≈ ₹940 cr** (≈ ₹390 cr even counting the ₹550 cr investments) | Q1 FY27 deck BS [V]; screener [V] |
| 6 | Cash PAT basis ambiguous (minor) | "cash PAT of ~₹1,032 Cr (up ~28%)" | The company deck carries **two figures**: slide 7 highlights table gives Cash PAT FY26 **₹863 cr (+20%)**; the slide 27 income statement gives ₹1,032 cr (+28%). The primer should state which basis it uses | Q1 FY27 deck slides 7/27 [V] |
| 7 | Q1 FY27 missing | — | Total income ₹872 cr (+1%); EBITDA ₹237 cr; **PAT ₹64 cr (−34%)**; pivot to equipment-only supply (59% of third-party book) | Q1 FY27 deck [V] |
| 8 | Management | No CEO named | **CEO Sanjeev Agarwal**; ED Devansh Jain; Group CFO Akhil Jindal | Q1 FY27 call [V] |
| 9 | Group-structure events | IWEL merger covered | Also: **Inox Green's evacuation business demerged into IRSL** (Inox Wind's EPC subsidiary), record date 1-Aug-26; IRSL to list. Wind World 4.5 GW O&M (via Inox Green) consolidating from Q3 FY27 | Q1 FY27 deck/call [V] |
| 10 | Receivables risk under-stated | — | Trade receivables **₹4,250 cr (Mar-26)** vs ₹2,549 cr (Mar-25); FY26 CFO −₹598 cr | Q1 FY27 deck BS; screener [V] |

FY26 headline figures (total income ₹4,569 cr, EBITDA ₹1,232 cr, PAT ₹449 cr, net worth ₹7,692 cr, FY27 guidance +75% revenue at 20–22% margin) are **correct** [V].

## 7. primers/inox-green-energy.html (last refreshed 14-Aug-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap and P/E | "~₹7,400 Cr (mid-2026)", "~60× trailing" | **₹5,163 cr**, P/E **42.1×** | screener [V] |
| 2 | Promoter stake | "roughly 56%" | **53.70% (Sep-26)**; 56.12% in Jun-26 | screener [V] |
| 3 | **Guidance mis-attributed** | "Management's own FY27 guidance — revenue growth of roughly 75% and EBITDA 'north of ₹600 Cr' at a 20–22% margin" | +75% revenue and 20–22% margin is **Inox Wind's** consolidated guidance. Inox Green guides to **~₹600 cr EBITDA on an annualised basis from Q3/Q4 FY27** (post Wind World), with ~50% wind O&M margins | Q1 FY27 joint call [V] |
| 4 | Wind World terms and status | "₹600 Crore strategic bid"; acquired "early 2026"; implies 100% | Consideration **₹550 cr incl. taxes, paid 6-Oct-2026** via **Vibhav Energy, which is 75% Inox Green / 25% Authum Investment** (from 9-Oct-26). Consolidation from Q3 FY27 | BSE 7-Oct & 9-Oct-26 [V] |
| 5 | Portfolio composition | "~13 GWp after the Wind World acquisition" | 13.3 GWp (Jun-26) = ~10.5 GW wind + solar, and **includes ~6.5 GW acquired: 4.5 GW Wind World plus ~2 GW held as an investment (not consolidated)** | Q1 FY27 deck [V] |
| 6 | Demerger date and vehicle vague | "In 2025–26 the group carved the dedicated power-evacuation business out via a demerger" | Demerged into **Inox Renewable Solutions Ltd (IRSL)**, **record date 1-Aug-2026**; IRSL to list after approvals | Q1 FY27 deck/call [V] |
| 7 | Revenue growth | "~₹281 Cr (+19%)" | Screener FY26 ₹281 cr vs ₹220 cr = **+28%**; company total income ₹426 cr (+69%, restated for discontinued ops) | screener; Q1 deck [V] |
| 8 | Parent order book | "Inox Wind carries a ~3.1 GW turbine order book" | **~4.4 GW (Jul-26)**, incl. a 1.5 GW Inox Clean MOU (0.5 GW firm) | Inox Wind Q1 deck [V] |
| 9 | Q1 FY27 missing | — | Total income ₹101 cr (+17%), EBITDA ₹57 cr, PAT ₹41 cr (+86%); screener core OP **−₹1 cr** (other income ₹58 cr); availability 96.3% | Q1 FY27 deck; screener [V] |
| 10 | Management | Not named | **CEO S.K. Mathusudhana** | Q1 FY27 call [V] |

---

## Unverified / flagged figures (this batch)
- **CG Power:** true net cash including QIP deposits (≈ ₹4–5k cr) [E]. ₹900 cr US data-centre order [K].
- **ABB:**
  - The robotics gain ₹1,658.5 cr, the ₹1,568.2 cr slump-sale price and the Q1 CY26 continuing-ops figures come from fetched secondary pages (ScanX/Univest), not the BSE result PDF.
  - The CY25 orders, backlog and dividend come from Outlook Business [V-sec].
  - The royalty / technology-fee amount was not verified.
- **Waaree:** FY26 production of 12.6 GW [K].
- **Suzlon:**
  - Order-book quarter mapping (Mar-25 / Mar-26 / Jun-26) was inferred from the deck chart sequence; the Jul-26 figure of 6,135 MW is explicit.
  - WTG segment EBITDA and forging values were taken from extracted chart labels.
- **Premier:**
  - The 10 GW ingot-wafer timeline is [K].
  - The reason for the promoter stake reduction is unverified.
- **Inox Wind:** FY26 MW delivered and commissioned is unverified, and the company does not disclose it.
- **Inox Green:** the reason for the Sep-26 promoter decline is unverified.
