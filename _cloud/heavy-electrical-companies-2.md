# Heavy Electrical Equipment — company packs, batch 2

**Members:** Triveni Turbine (TRITURBINE / 533655) · Transformers & Rectifiers India (TARIL / 532928) · TD Power Systems (TDPOWERSYS / 533553) · Atlanta Electricals (ATLANTAELE / 544527) · Voltamp Transformers (VOLTAMP / 532757) · Quality Power Electrical Equipments (QPOWER / 544367)

**Prepared:** 2026-10-13 (UTC). Research subagent, batch 2 of the heavy-electrical sub-sector report.

**How to read the tags:** [V] means the figure comes from a page or PDF fetched in this session. [K] means it is known from memory, and the source is named. [E] means an estimate or a figure I derived; the arithmetic is shown.

## Sources and fetch log

- **screener.in pages.** Fetched with curl at **2026-10-13 17:37 UTC (23:07 IST)**, after market close, so market caps and P/Es are at **13-Oct-2026 closing prices**.
  - `https://www.screener.in/company/TRITURBINE/consolidated/`
  - `/TARIL/consolidated/`. This page already includes the Sep-26 quarter and a Sep-26 balance sheet.
  - `/TDPOWERSYS/consolidated/`
  - `/ATLANTAELE/consolidated/`
  - `/VOLTAMP/` (standalone). The consolidated page is empty because there are no subsidiaries.
  - `/QPOWER/consolidated/`
  - I pulled balance-sheet "Other Assets" and "Borrowings" schedules (cash, investments, receivables, inventory, lease) from screener's `api/company/<id>/schedules/` endpoint in the same session.
- **Exchange filings.** These were downloaded from `bseindia.com/xml-data/corpfiling/AttachLive|AttachHis/<id>.pdf` and parsed with pdftotext.
  - Triveni:
    - Q1 FY27 deck (209b2785) and transcript (06048a54).
    - Q4 FY26 deck (282b25f3).
    - COO resignation (657fc4f2).
  - TARIL:
    - **Q2 FY27 results (f94d6d24) and press release (8a9b4aa3), both 13-Oct-26.**
    - Q1 FY27 deck (1650f0ea) and transcript (c987bf81).
  - TD Power:
    - **QIP closure (39697c5e, 12-Oct-26) and QIP opening (33da684f).**
    - Q1 FY27 deck (b1bea02f) and transcript (a93b0ca0).
  - Atlanta:
    - Q1 FY27 deck (f61230f1) and transcript (194200e4).
    - Q4 FY26 transcript (0a8f3f46).
    - AGM outcome (a143b597).
  - Voltamp:
    - **Unit-III commercial-production notice (4c70a09b, 7-Oct-26).**
    - Annual Report FY26 (4d6b1053).
    - **CARE Ratings rationale, Aug-2026** (careratings.com PDF).
  - Quality Power:
    - **EGM corrigendum (25d95a55, 9-Oct-26).**
    - Q1 FY27 deck (1b7003bd) and transcript (f7de2eb0).
- **Secondary web pages (fetched; not exchange filings).**
  - multibagg.ai (1-Oct-26): TD Power ₹192 cr US order and the Siemens Energy framework.
  - sahi.com: Quality Power–Winwin consideration split and ₹700 cr QIP.
  - Both are marked "unverified / secondary" where used.
- **Failed fetch.** The TARIL Q2 results PDF failed on the first attempt (SSL reset) and succeeded on retry. Nothing else failed. The BSE announcements API was not used; filing IDs came from the screener document lists.

## Results-calendar status (as of 13-Oct-2026)

**Q2 FY27 (Sep-26 quarter) is out for TARIL only. It was released 13-Oct-2026, with the board meeting and call the same day.**

| Company | Latest reported period | Next results / status |
|---|---|---|
| TARIL | **Q2 FY27 (Sep-26)**, released 13-Oct-26 | – |
| Triveni Turbine | Q1 FY27 (Jun-26) | Trading window closed 24-Sep. No board date filed. |
| TD Power | Q1 FY27 (Jun-26) | No board date seen. ₹600 cr QIP closed 12-Oct. |
| Atlanta Electricals | Q1 FY27 (Jun-26) | Trading window closed 25-Sep. No board date seen. |
| Voltamp | Q1 FY27 (Jun-26) | Trading window closed from 1-Oct "until 48 hours after Q2 results". No date filed. |
| Quality Power | Q1 FY27 (Jun-26) | **EGM 19-Oct-2026** (Winwin share swap and QIP). No board date seen. |

**Listing and corporate-action check.** All six are listed and trading. There is no merger or demerger of a listed entity. Pending actions:
- TD Power **₹600 cr QIP** (allotted 12-Oct-26).
- Quality Power **Winwin acquisition** (about ₹272 cr, part share swap) and a **QIP of up to ₹700 cr**, with the EGM on 19-Oct-26.
- Atlanta plans to **merge its 100% subsidiary Atlanta Trafo** into the parent; this is intra-group.
- TARIL **renamed its CRGO subsidiary** (now Triveni Transtech (India) Pvt Ltd) and set up a **UK subsidiary**.
- Voltamp **started production at Unit-III on 7-Oct-26**.
- Atlanta (87.28% promoter) faces a **minimum-public-shareholding deadline around Sep-2028**.

---
## 0. Batch summary grid

**Bases.**
- ₹ crore unless stated.
- "OP" is screener operating profit: sales minus expenses, **before other income**. Each pack also gives the company's own EBITDA definition. Three companies (Triveni, TARIL's consolidated deck, Quality Power) **include other income** in their EBITDA.
- Screener figures are consolidated except Voltamp, which is standalone.
- Market cap and P/E are screener figures at 13-Oct-26 close.
- P/B, net cash and EV/EBITDA are [E] calculations: EV = m-cap + borrowings − (cash + investments) at the latest balance sheet, and EBITDA = screener TTM OP.

| Metric | Triveni Turbine | TARIL | TD Power | Atlanta Electricals | Voltamp | Quality Power |
|---|---|---|---|---|---|---|
| Basis | Consolidated; Mar | Consolidated; Mar | Consolidated; Mar | Consolidated; Mar | **Standalone**; Mar | Consolidated; Mar |
| Revenue FY26 [V] | 2,181 | 2,509 | 1,856 | 1,852 | 2,154 | 947 (co. "total revenue" 1,007 including OI) |
| Revenue FY25 | 2,006 | 2,017 | 1,279 | 1,244 | 1,934 | 338 |
| Growth YoY | +8.7% | +24.2% | +45.1% | +48.8% | +11.3% | +180% (acquisitions) |
| Screener OP / OPM FY26 | 452 / 20.7% | 383 / 15.3% | 335 / 18.0% | 345 / 18.6% | 355 / 16.5% | 178 / 18.8% |
| Company EBITDA FY26 (basis) | 527 / **24.2%** (incl. OI) | 444 / **17.7%** (incl. OI) | 343 / **18.3%** (incl. other operational income) | 344 / **18.6%** (excl. OI) | PBILDT 357 / **16.5%** (CARE) | 236 / **23.5%** (incl. OI) |
| PAT FY26 | 349 | 272 | 239 | 202 | 305 | 186 (owners ≈ 121 [E]) |
| ROCE / ROE (screener) | 34.1% / 25.2% | 23.3% / 19.1% | 34.0% / 24.7% | 45.3% / 31.7% | 23.5% / 17.4% | 31.7% / 25.3% |
| Borrowings (latest) | 36 (lease; Mar-26) | **574 (Sep-26)** | 24 (Jun-26) | 51 (Mar-26) | 1 (Mar-26) | 40 (Mar-26) |
| Cash + investments | 582 (company "incl. cash" ~970) | 260 (Sep-26) | 240 (Jun-26) + ₹600 cr QIP in Oct | 113 | **1,069** | 267 |
| Net cash / (debt) [E] | +546 | **(314)** | +216 (≈ +815 after QIP) | +62 | **+1,068** | +227 |
| M-cap 13-Oct-26 [V] | 16,628 | 9,125 | 25,085 (≈ 25,550 post-QIP [E]) | 14,251 | 10,505 | 11,706 |
| Share price | ₹523 | ₹304 | ₹798 | ₹1,852 | ₹10,384 | ₹1,512 |
| P/E (screener TTM) | 47.9 | **30.0** | **91.2** | 65.3 | 33.1 | **87.8** (owners' EPS) |
| P/B [E] | 11.5 | 5.5 | 23.3 | 15.3 | 5.9 | 21.6 |
| EV/EBITDA (TTM OP) [E] | 37.7 | **20.3** | 65 | 38 | 26 | 62 |
| Latest quarter | Q1 FY27 | **Q2 FY27 (Sep-26)** | Q1 FY27 | Q1 FY27 | Q1 FY27 | Q1 FY27 |
| Latest-quarter revenue (YoY) | 443 (+19.2%) | **739 (+60.7%)**; standalone 709 (+66%) | 640 (+71%) | 466 (+48%) | 544 (+28%) | 233 (+31.6%) |
| Latest-quarter margin | OPM 12%; **co. EBITDA 18.0%** (25.8% a year earlier) | Co. 17.8% incl. OI; standalone 16.1% excl. OI | 19.0% | 16.5% | PBILDT 14.8% (17.2% a year earlier) | 25.2% reported / 28.3% pre-Ind AS 29 (incl. OI); OPM 17.6% |
| Latest-quarter PAT (YoY) | 51 (−20.6%) | 81 (+118%) | 86 (+72%) | 47 (+50%) | 91 (+14%) | 47 (+26%) |
| **Order inflow, latest quarter** | 568 (+6.1%) | **1,169 (+97%)**; Q1 2,114; H1 3,283 (+161%) | **734 (+87%)** | **972 (record)** | n.d. | n.d. (₹105 cr of disclosed orders) |
| Order inflow, FY26 | 2,326 (−1.6%) | ~2,270 [E] | ~2,238 (primer, unverified) | 2,507 | n.d. | n.d. |
| **Order book (latest)** | **2,180** (Jun-26) | **7,237** (Sep-26) | **2,207** (Jun-26) | **3,117** (Jun-26) | **~1,590** (31-Jul-26, CARE) | **1,945.5** (Jun-26) |
| Order book / TTM revenue [E] | 0.97× | 2.7× (standalone) | 1.04× | 1.56× | ~0.70× | 1.94× |
| Book-to-bill, latest quarter [E] | 1.28 | 1.65 (H1 2.6) | 1.15 | 2.09 | n.d. | n.d. |
| Execution rate (quarterly revenue / opening order book) [E] | 21.6% | 10.7% | ~32% | 18.7% | n.m. | n.m. |
| Export share | 48.8% of Q1 revenue; 68% of Q1 orders; 57% of order book | Bid pipeline 20% export; US order ₹150 cr | **93% of Q1 orders**; 69.5% of order book | Small; target 15% of revenue | Negligible (domestic private industrial) | Endoks (Turkey) 41% of order book; US/Japan orders |
| WC days (screener FY26) | 71 (−39 in FY24) | 80 (company NWC ~170) | 109 | 55 (company NWC 72) | 87 | 71 (CFO/EBITDA 0.3×) |
| Debtor / inventory / payable days | 107 / 84 / 176 | 129 / 133 / 62 | 146 / 148 / 121 | 84 / 102 / 112 | 46 / 126 / 3 | 93 / 74 / 105 |
| Promoter (latest) | 55.84% (Jun-26) | 64.36% (Sep-26) | 27.15% (Sep-26; ≈26.5% post-QIP) | **87.28%** (Sep-26) | 30.00% (Jun-26) | 73.91% (Jun-26) |
| Capacity / capex | Steam turbines ≤100 MW; Bengaluru plus US/South Africa | **75,000 MVA**; Changodar ₹150 cr (production around Diwali); backward integration ₹900–1,000 cr | About ₹2,200 cr revenue capacity → about ₹3,200 cr FY28 (₹50 cr capex); FY29–30 ₹4,000 cr+ | **63,060 MVA**; +5,000 MVA inverter-duty plant by end-CY26 | 14,000 MVA + **6,000 MVA Unit-III (COD 7-Oct-26)**; +2,300 MVA dry-type in Q4 FY28 | New Sangli plant (₹1,500–1,800 cr revenue capacity); Endoks PCS Q3 FY27; Winwin insulators |
| FY27 guidance | Growth back-ended; PBT margin >20% over the medium term | Revenue +25%, EBITDA 16%, PAT 9–10% | **Revenue ₹2,600 cr (+40%)**; 18–19% EBITDA | 40% CAGR for 3 years; 16–20% margin | None (no calls); "margins to normalize" | Revenue +20%; "20% or high teens" EBITDA |

---

## 0b. Cross-company read-across

1. **The domestic transformer makers are turning capacity into revenue, but the margin split mirrors batch 1.**
   - TARIL's Q2 FY27, the first Q2 print in the sector, shows standalone revenue +66% once the Changodar disruption ended [V].
   - Atlanta grew 48% on its new Vadod and Ankhi capacity (63,060 MVA), and Voltamp grew 28% on volume at more than 100% utilisation [V].
   - **Margin direction depends on price protection.** TARIL is covered by price-variation clauses: 16.1% standalone and 17.8% consolidated in Q2. Atlanta passes on "a significant portion" of costs and held 16.5%. **Voltamp, with mostly fixed-price orders, fell to 14.8% PBILDT** from 17.2%, and its annual report warns that margins will "normalize" [V].
   - This is the same pass-through moat seen at Hitachi versus Schneider in batch 1.
2. **A supply wave is coming.**
   - On Atlanta's call an analyst cited **about 60,000 MVA of new capacity at CG Power and TARIL commissioning within 3–4 months** [V transcript]. Add Voltamp's +6,000 MVA (7-Oct-26), Atlanta's +5,000 MVA by end-CY26, and the batch-1 MNC expansions (Hitachi Karjan, ENRIN Kalwa, GVT&D Vadodara).
   - Management says order inflow is unaffected so far: Atlanta's Q1 inflow was a record ₹972 cr and TARIL's H1 inflow ₹3,283 cr [V].
   - Voltamp, by contrast, is deliberately keeping its order book at only 0.7× revenue.
3. **State transmission utilities and PGCIL are the marginal buyers for domestic makers.**
   - TARIL: PGCIL order above ₹1,000 cr, GETCO ₹228 cr, RRVPNL ₹175 cr, plus NPCIL Kaiga [V].
   - Atlanta: RVPNL ₹292 cr and PSTCL ₹285 cr; the 220 kV class is above 55% of its book [V].
   - Quality Power: 400 kV instrument transformers ordered **by Hitachi Energy India**, which shows the batch-1 MNCs pulling domestic component suppliers along [V].
   - EHV qualification is the next rerating gate: Atlanta has 400 kV approval at Vadod (Apr-26) and expects 765 kV around Q2 FY27; Voltamp's Unit-III lifts its ceiling to 250–315 MVA [V].
4. **On the generation side, US data centres and the gas-turbine shortage are the driver; Indian industrial captive power is soft.**
   - TD Power: **93% of Q1 orders were exports**, including volume orders from a US gas-turbine OEM, repeat orders for data-centre gas-engine gensets, and (secondary source) a Siemens Energy build-to-print framework. Guidance was raised to ₹2,600 cr [V].
   - **Triveni: domestic bookings fell 35%**, the domestic enquiry book dipped, and US data-centre steam enquiries have not yet converted [V].
   - The thermal "comeback" in batch 1 (BHEL's ₹2.6 lakh cr book) has not yet shown up in the sub-100 MW industrial turbine and generator market. Triveni and TD Power both describe steam as "steady" at about 10–12% growth [V].
5. **Equity raising and promoter supply are heavy.**
   - TD Power raised a **₹600 cr QIP at ₹775** (12-Oct-26). Quality Power proposes a **₹700 cr QIP plus a share swap for Winwin** (EGM 19-Oct). TARIL still has about ₹145 cr of its 2024 QIP unspent while its debt rises. Atlanta listed in Sep-25 [V].
   - Promoters have sold down: TD Power from 34% to 27% (2025), Voltamp from 37.8% to 30% (Sep-25 quarter), TARIL from 74.9% to 64.4%. Atlanta's 87.28% must fall to 75% by about Sep-2028 [V screener; K for the rule].
6. **Working capital is the weak spot in the domestic group, against the negative working capital of the MNCs in batch 1.**
   - **TARIL: NWC about 170 days, negative FY26 CFO, net debt about ₹314 cr and rising.**
   - **Quality Power: CFO/EBITDA 0.3×.**
   - **Triveni: WC days went from −39 to +71 in two years.**
   - Voltamp built inventory to 126 days.
   - Atlanta has the best metrics (NWC 72 days, FY26 CFO ₹184 cr) [V].
7. **Valuations are widely dispersed, and all are below the batch-1 MNCs except at the top.**
   - **TARIL 30× P/E (20× EV/EBITDA) and Voltamp 33× (26×)** are the cheapest.
   - Triveni 48× and Atlanta 65× sit in the middle.
   - **TD Power 91× and Quality Power 88× (on owners' EPS)** match the batch-1 MNC range (Hitachi 114×, GVT&D 79×, ENRIN 73×).
   - Batch-2 market caps total about ₹87,300 cr, against a batch-1 total of about ₹7.1 lakh cr [E].

---

## 1. Triveni Turbine (NSE: TRITURBINE, BSE: 533655)

**Identity and status.**
- Listed and active. Demerged from Triveni Engineering & Industries (effective Oct-2010; listed 2011). Promoter is the Sawhney family group.
- Management on the Q1 FY27 call (10/11-Aug-26) [V transcript, BSE 06048a54]:
  - **Dhruv Sawhney**: Chairman & Managing Director (as signed on the Q1 deck).
  - **Nikhil Sawhney**: Vice Chairman & MD.
  - **S.N. Prasad**: CEO.
  - **Lalit Agarwal**: CFO.
  - **Manikantan Rajendran**: Chief Marketing Officer.
- **COO Sachin Parab resigned effective close of business 1-Oct-2026** [V BSE 657fc4f2].
- **ICRA reaffirmed [ICRA]AA+ / A1+ on 18-Sep-26**, with bank facilities enhanced to ₹1,099.5 cr [V screener document list].
- **Fiscal year:** April–March.
- **Basis:** screener consolidated (https://www.screener.in/company/TRITURBINE/consolidated/, fetched 13-Oct-26 17:37 UTC). Consolidation includes the US and South African subsidiaries.
- **Q2 FY27 is not out.** The trading window closed on 24-Sep-26 [V]. No board date had been filed as of 13-Oct.

### Financials (screener consolidated [V] unless noted)
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 1,654 | 2,006 | **2,181** (+8.7%) | 2,252 |
| Operating profit (before other income) | 321 | 439 | 452 | 427 |
| OPM | 19% | 22% | **20.7%** | 19% |
| Other income | 62 | 81 | 61 | 67 |
| PAT | 269 | 359 | **349** (−2.8%) | 336 |
| CFO | 271 | 187 | **111** | – |
| Free cash flow | 240 | 144 | 39 | – |

- **Company basis** [V Q4 FY26 deck, BSE 282b25f3]:
  - FY26 revenue ₹21,811 mn (+8.7%).
  - **EBITDA ₹5,268 mn = 24.2%** (FY25 ₹5,177 mn, 25.8%).
  - The company's EBITDA **includes other income**: screener OP 452 + other income 61 ≈ 513, plus the ₹15.7 cr exceptional add-back ≈ 529 [E].
  - PAT ₹3,494 mn. Adjusted PAT ₹3,611 mn, excluding a **₹157 mn exceptional item** (labour-code employee-benefit charge), against ₹3,586 mn in FY25.
  - Order booking: **FY26 ₹23,256 mn (−1.6%)**; Q4 FY26 ₹7,471 mn (+19%).
  - **Closing order book: ₹20,539 mn at Mar-26 (+7.6%)**; ₹19,094 mn at Mar-25.
- **Q1 FY27 (Jun-26)** [V Q1 deck BSE 209b2785, transcript BSE 06048a54]:
  - Revenue **₹4,427 mn (+19.2%)**. Domestic sales ₹2.4 bn (+27.4%) and exports ₹2.03 bn, so **exports were 48.8% of revenue** (49.3% a year earlier).
  - **EBITDA ₹797 mn = 18.0%** (Q1 FY26: ₹958 mn, 25.8%).
  - **Screener OP ₹51 cr = 12% OPM.** The gap is other income of ₹28 cr.
  - PBT ₹697 mn (15.7% margin, −20.1%). **PAT ₹511 mn (−20.6%).**
  - Reasons management gave for the margin drop:
    - Export deliveries were deferred by clients because **freight rates rose 3–4×**, which pushed the mix to domestic.
    - The **NTPC CO₂-based energy-storage order was taken "at negligible and near zero margins"** to validate the technology. About ₹175 cr of it was left at end-Q4, split about 40% across Q1–Q2 with the rest in Q3. It is due for commissioning in Q2.
    - Bought-out scope on some projects, and commodity escalation.
  - **The US subsidiary made "a substantial loss" in Q1.** Management targets break-even in FY27; US product orders would only execute in FY28.
- **Balance sheet (Mar-26)** [V screener schedules API]:
  - Borrowings ₹36 cr, all lease liabilities; long- and short-term borrowings are nil.
  - Cash equivalents ₹278 cr plus investments ₹304 cr. Screener net cash is therefore **≈ ₹546 cr** [E].
  - **Company figure: "Investments including cash" ₹9,696 mn (≈ ₹970 cr) at FY26** [V Q1 deck, slide 28]. Screener misses bank deposits held in "other asset items" (₹601 cr).
  - Management says Q1 FY27 brought a "reversion to negative working capital" and a higher cash balance, as receivables fell [V transcript].
- **Working capital (FY26, screener):** debtor days **107** (39 in FY24), inventory 84, payable 176, **WC days 71** (−39 in FY24). Trade receivables rose to ₹639 cr from ₹363 cr. CFO/OP was 53%. Working capital has clearly deteriorated over two years.
- **Valuation (13-Oct-26 close) [V]:**
  - M-cap **₹16,628 cr**; price ₹523; 52-week high/low ₹788 / ₹428.
  - **P/E 47.9** (TTM). Book value ₹45.5, so P/B is **11.5×** [E].
  - ROCE 34.1%, ROE 25.2%. Dividend yield 0.81%.
  - EV ≈ 16,628 + 36 − 278 − 304 = ₹16,082 cr. **EV/EBITDA ≈ 37.7×** on TTM screener OP of ₹427 cr, or about 31× on company-basis TTM EBITDA of about ₹511 cr [E].

### Native KPIs
- **Order inflow:** Q1 FY27 **₹5,683 mn (+6.1%)**. FY26 ₹23,256 mn (−1.6%); FY25 ₹23,627 mn; FY22 ₹11,836 mn. That is an 18% CAGR over FY22–26 [V decks].
  - **Mix of Q1 orders:** exports were **68%** (47% a year earlier), with export bookings up 53.4%. Aftermarket was **39%** (27% a year earlier), up about 54%.
  - **Domestic bookings fell 35.4% and product bookings fell 11.6%** [V transcript].
  - Q4 FY26 orders: exports 69% (export bookings +174%), aftermarket 50% (+121%) [V Q4 deck].
- **Order backlog:** **₹21,796 mn at Jun-26**. That is +5.1% YoY (₹20,736 mn) and +6.1% QoQ (₹20,539 mn at Mar-26).
  - Exports are **57%** of the backlog.
  - The **aftermarket backlog is ₹6.24 bn (+115% YoY), 29% of the backlog**, against 14% a year earlier. Geothermal and utility refurbishment wins drove it [V].
- **Cover and conversion [E]:**
  - Backlog / TTM revenue = 2,180 / 2,252 = **0.97×**. This is a short-cycle business, not long-cycle T&D.
  - **Book-to-bill:** 1.28 in Q1 FY27 and 1.07 in FY26.
  - **Execution rate:** Q1 revenue / opening backlog = 443 / 2,054 = **21.6% per quarter**.
- **Product vs aftermarket:** the deck's FY22–26 bar chart shows aftermarket at about 27–33% of sales. The primer's FY26 aftermarket share of ~27.5% is consistent with this; the chart labels were garbled in extraction. Export share of sales was about 58% in FY26 on the same chart (domestic 42%) [V, chart-read].
- **Enquiries:**
  - International enquiry generation has improved. **Domestic enquiries dipped**: customers are "waiting and watching" amid the West Asia conflict [V].
  - The US data-centre opportunity is in enquiries only: 4–5-year gas-turbine lead times are pushing developers toward steam and combined cycle. Management said the US contributed **"less than 10%"** of the roughly ₹600 cr of aftermarket orders won over two quarters [V].
- **Footprint:**
  - **6,000+ installations in 80+ countries, 16+ GW installed** [V Q1 deck, slide 3].
  - Steam turbines up to 100 MW; REFURB division up to 1,000 MW. Plants at Peenya and Sompura (Bengaluru), plus facilities in the USA and South Africa.
- **Ownership (Jun-26) [V screener]:** promoter **55.84%** (unchanged since 2023), FIIs 20.58% (28.34% in Dec-24), DIIs 15.99%, public 7.60%. FIIs have rotated out and DIIs have rotated in.
- **Guidance:**
  - Growth in both revenue and profit in FY27, **back-ended**, with "margin recovery in the latter half" [V deck commentary].
  - Medium-term **PBT margin "over 20%"** [V transcript]. Management declined to give a number for H2 EBITDA.

### Story bullets
- **A margin reset quarter.** Q1 FY27 EBITDA was 18.0% against 25.8%, and PAT fell 20.6%, despite revenue growth of 19%. The causes were near-zero-margin NTPC CO₂-storage execution, export deferrals because of freight, and losses in the US subsidiary. Management says most of this clears in H1.
- **The order mix is improving even though the order count is flat.** FY26 bookings fell 1.6%. Q1 FY27 bookings rose 6.1%, with exports at 68% and aftermarket at 39%. The aftermarket backlog has doubled to ₹624 cr.
- **The domestic cycle is soft.** Domestic bookings fell 35% and the domestic enquiry book dipped. This is a counterpoint to the thermal-capex narrative: industrial captive-power demand is not the same as utility thermal demand.
- **Working capital has turned from a strength into a watch item.** WC days went from −39 in FY24 to +71 in FY26, CFO was only ₹111 cr, and the COO has exited. At 48× P/E and about 38× EV/EBITDA (13-Oct-26), the stock is down about a third from its 52-week high.

---
## 2. Transformers & Rectifiers (India) — TARIL (NSE: TARIL, BSE: 532928)

**Identity and status.**
- Listed and active. Ahmedabad-based; the promoter is the Mamtora family.
- **Satyen J. Mamtora: Managing Director & CEO.** Mehul Shah: CFO. Rakesh Kiri: Company Secretary [V Q2 FY27 filings].
- **Fiscal year:** April–March.
- **Basis:** screener consolidated (https://www.screener.in/company/TARIL/consolidated/, fetched 13-Oct-26 17:37 UTC). The page already includes the Sep-26 quarter and a Sep-26 balance sheet.
- **Q2 FY27 (Sep-26) IS OUT.** The board approved the results on **13-Oct-2026**, and the earnings call was held the same day [V results BSE f94d6d24; press release BSE 8a9b4aa3]. TARIL is the only batch-2 member to have reported Q2.
- **Corporate structure changes** [V Q2 results notes]:
  - The CRGO subsidiary **POSCO Poggenamp Electrical Steel Pvt Ltd has been renamed "Triveni Transtech (India) Pvt Ltd".**
  - A **new UK subsidiary, Maxwell Grid Transformers (UK) Pvt Ltd, was incorporated on 4-Sep-2026**. No capital had been contributed and operations had not started.
  - Other subsidiaries: Transpares, Transweld Mechanical, TARIL Infrastructure, Savas Engineering and TARIL Switchgear.
  - There is no merger or demerger pending.

### Financials (screener consolidated [V]; company filings [V] where stated)
| ₹ cr | FY24 | FY25 | FY26 | TTM (Sep-26) |
|---|---|---|---|---|
| Sales | 1,291 | 2,017 | **2,509** (+24.2%) | 2,831 |
| Operating profit (before other income) | 134 | 327 | 383 | 466 |
| OPM | 10% | 16% | **15.3%** | 16% |
| Other income | 6 | 35 | 61 | 46 |
| Interest | 51 | 51 | 51 | 57 |
| PAT | 47 | 216 | **272** (+26%) | 313 |
| CFO | 29 | 157 | **−105** | – |

- **Company basis** [V Q1 FY27 deck, BSE 1650f0ea]:
  - FY26 consolidated revenue ₹2,508.8 cr. **Company "EBITDA" ₹444.0 cr = 17.7%**, which **includes other income of ₹60.9 cr**. Excluding other income it is ₹383 cr (15.3%), which equals screener OP.
  - Standalone FY26: revenue ₹2,395.5 cr, EBITDA ₹370 cr (15.4%), PAT ₹225.4 cr.
  - **Basis inconsistency:** the Q2 FY27 press release's standalone EBITDA of ₹113.9 cr **excludes** other income ("includes other operative income"). The Q1 deck's ₹87.4 cr standalone EBITDA included it. Compare like with like.
- **Q2 FY27 (Sep-26), released 13-Oct-26** [V results and press release]:
  - **Consolidated:** revenue **₹739.4 cr (+60.7% YoY; +29.2% QoQ)**. PBT ₹109.9 cr. **PAT ₹81.4 cr (+118%)**, of which ₹79.8 cr is attributable to owners.
  - Company-basis EBITDA including other income is ₹131.5 cr = **17.8%** [E: PBT 109.93 + finance cost 14.34 + depreciation 7.22]. Screener OP is ₹129 cr (17%).
  - **Standalone:** revenue **₹709.0 cr (+66%)**, EBITDA ₹113.9 cr (**16.1%**, against 8.7%), PAT ₹75.1 cr (+338% on a weak base of ₹17.1 cr).
  - **H1 FY27:** consolidated revenue ₹1,311.8 cr (+32.6%), PAT ₹145.7 cr (+39%). Standalone revenue ₹1,268.3 cr (+35%), EBITDA 14.6%.
  - **Filing quirk:** the consolidated statement has a row labelled **"Exceptional Items" showing 131.49 / 109.65 / 65.44**. These numbers equal EBITDA (PBT + finance cost + depreciation) and are not added to PBT, so it is a mislabelled memo line. Do not read it as an exceptional gain.
- **Q1 FY27 (Jun-26)** [V deck]: consolidated revenue ₹572.3 cr (+8%); EBITDA ₹109.7 cr (19.2%, including other income of ₹16.3 cr); PAT ₹64.3 cr (−5%). Standalone revenue was ₹559.3 cr (+10%) and **standalone PAT ₹49.9 cr (−17%)**. The cause was disruption at Changodar from the expansion.
- **Balance sheet** [V consolidated statement of assets and liabilities, Sep-26]:
  - Borrowings: **₹573.7 cr at Sep-26** (non-current ₹135.6 cr + current ₹438.1 cr), up from ₹456.6 cr at Mar-26. Lease liabilities are an extra ₹6.9 cr.
  - Cash ₹14.4 cr + other bank balances ₹66.1 cr + current investments (mutual funds) ₹144.5 cr + non-current investments ₹34.9 cr = **₹259.9 cr**.
  - **Net debt ≈ ₹314 cr at Sep-26** (≈ ₹131 cr at Mar-26) [E].
  - Company: debt/equity about 0.3× at FY26; "cash and bank balance ~₹139 cr"; **about ₹145 cr of 2024 QIP proceeds unutilised**, earmarked for backward integration [V Q1 transcript].
- **Cash flow, H1 FY27** [V]: CFO ₹48.1 cr; capex ₹153.3 cr; net borrowing +₹117 cr. CWIP rose to **₹267.3 cr** from ₹138.3 cr. FY26 CFO was −₹105 cr (screener).
- **Working capital:**
  - Screener FY26: debtor days 129, inventory 133, payable 62, **WC days 80**; the cash-conversion cycle is 200.
  - **Company: standalone net working capital "around 170 days"** (inventory about 85 days, receivables about 130 days); FY26 receivables were ₹1,057 cr [V Q1 transcript].
  - Management is deliberately holding extra inventory until backward integration is complete, as a hedge on raw materials.
- **Valuation (13-Oct-26 close, which already reflects the Q2 print released at 15:15 IST) [V]:**
  - M-cap **₹9,125 cr**; price ₹304; 52-week high/low ₹496 / ₹224. One-year return −38%.
  - **P/E 30.0** (TTM to Sep-26). Book value ₹55.1, so P/B is 5.5× [E].
  - ROCE 23.3%, ROE 19.1%. Dividend yield 0.08%.
  - EV ≈ 9,125 + 581 − 260 = ₹9,446 cr. **EV/EBITDA ≈ 20.3×** on TTM screener OP of ₹466 cr [E].

### Native KPIs
- **Order inflow:**
  - **Q2 FY27: ₹1,169 cr (+97%).** **Q1 FY27: ₹2,114 cr (+218%)**, including a PGCIL "Ultra Mega" order of more than ₹1,000 cr (30-month delivery, which management called an exception), GETCO ₹228 cr, RRVPNL ₹175 cr and a **US export order (PDC AK LPIV, LLC) of about ₹150 cr**.
  - **H1 FY27: ₹3,283 cr (+161%)** [V].
  - Q2 orders included **NPCIL Kaiga Units 5 & 6** (TARIL's entry into nuclear), DVC and GETCO.
  - FY26 inflow is about ₹2,270 cr [E: closing order book 5,005 − opening 5,132 + standalone revenue 2,395]; the primer's ~₹2,374 cr is in the same range.
- **Unexecuted order book** [V]: ₹5,132 cr (Mar-25) → ₹5,005 cr (Mar-26) → **₹6,630 cr (Jun-26)** → **₹7,237 cr (Sep-26, +32% YoY)**.
  - It is executable over 18–24 months. **About 80% is power transformers**; reactors are the next-largest product (the deck chart is garbled).
- **Cover and conversion [E]:**
  - Order book / standalone TTM revenue (₹2,725 cr) = **2.7×**.
  - **Book-to-bill:** 1.65 in Q2 and 2.6 in H1.
  - **Execution rate:** Q2 standalone revenue / opening order book = 709 / 6,630 = **10.7% per quarter**.
- **Pipeline:** inquiries under negotiation were **about ₹21,000 cr at Q2** (about ₹23,000 cr at Q1). The historical win ratio is **10–15%**.
  - The bid mix is **about 80% domestic and 20% export**, with **an equal split between government and private customers** (utilities and industrial).
  - Management expects about 30% inflow growth in both domestic and export markets in FY27, with targets in the Americas and Australia [V Q1 transcript].
- **Capacity** [V Q1 deck and Q2 press release]:
  - The company states **installed capacity of 75,000 MVA across three plants**. The deck's plant table shows Moraiya 40,000 MVA (large power transformers up to 1,000 MVA / 1,200 kV), Changodar 35,000 MVA (up to 160 MVA / 220 kV, plus furnace and traction) and Odhav 2,000 MVA (distribution).
  - Product range: 5 kV–1,200 kV, 0.5–500 MVA. 18,000+ installations in 40+ countries.
  - **The Changodar expansion (about ₹150 cr) is "nearing completion", with commercial production expected "around Diwali" 2026.** It was earlier guided for Aug-26, and the delay was put down to the monsoon.
  - Management says the expanded capacity supports revenue of **₹5,000–6,000 cr**.
- **Backward integration (₹900–1,000 cr)** [V Q1 transcript]:
  - CTC (8,000 MTPA in Phase I): Q2 FY27.
  - Pressboard and insulation (5,000 MTPA): Q3 FY27.
  - RIP bushings (3,000 units per annum): Q4 FY27.
  - Fabrication (25,000 MTPA): Q1 FY28.
  - CRGO processing: already operational.
  - Once complete, **80–85% of raw-material needs will be met in-house**, with depreciation landing in FY28.
- **Margin protection:** orders are covered by **price-variation clauses**, and inputs are secured when the order is received [V].
- **Ownership (Sep-26) [V screener]:** promoter **64.36%** (74.91% in Mar-23; 69.65% in Dec-23; 66.16% in Jun-24; 64.36% from Dec-24). **FIIs 6.98%** (11.33% in Mar-25), **DIIs 1.19%** (7.68% in Dec-24), **public 27.46%**. Shareholders numbered 2.24 lakh. Institutions have been exiting through 2025–26.
- **Guidance (FY27):** **revenue +25%, EBITDA margin 16%, PAT margin 9–10%**, reiterated in Q2 as "on track" [V Q1 deck and Q2 press release]. H1 standalone revenue is already +35%.

### Story bullets
- **The first Q2 print in the sub-sector shows the capacity bottleneck easing.** Standalone revenue rose 66% and EBITDA reached 16.1%, as Changodar recovered from Q1's expansion disruption. The order book is a record ₹7,237 cr (2.7× cover), with H1 inflow of ₹3,283 cr.
- **Domestic utility mega-orders now dominate the book:** the PGCIL order of more than ₹1,000 cr, plus GETCO, RRVPNL, DVC and the first nuclear order (NPCIL Kaiga). Exports are still small but growing: the US order is about ₹150 cr, and a UK subsidiary was formed in Sep-26 for the US and Europe.
- **The balance sheet is stretching.** Net debt is about ₹314 cr and rising, NWC is about 170 days, FY26 CFO was negative, and roughly ₹1,100 cr of capex (Changodar plus backward integration) is in progress. The rating is still investment grade (India Ratings, 13-Jul-26). Institutions have sold down: FII plus DII holdings fell from 19% to 8%.
- **At 30× TTM P/E and about 20× EV/EBITDA (13-Oct-26), TARIL is the cheapest power-transformer pure-play in either batch.** The rerating case depends on the Diwali Changodar start-up and on the backward-integration margin uplift arriving in FY28.

---
## 3. TD Power Systems (NSE: TDPOWERSYS, BSE: 533553)

**Identity and status.**
- Listed and active. Founded in Bengaluru in 1999; IPO in 2011. TD Power makes AC generators (up to 250 MVA) and motors for turbine and engine OEMs. Its plant is at Dabaspet, Bengaluru, and it has a Turkey operation and sales offices in Ohio (USA) and Japan.
- **Management** [V Q1 FY27 deck, BSE b1bea02f]:
  - **Nikhil Kumar**: Managing Director.
  - **Deepak Kumar Sinha**: CEO.
  - **M N Varalakshmi**: CFO.
  - **Mohib N. Khericha**: Promoter and Non-Executive Chairman.
  - Bharat Rajwani: Company Secretary.
- **Fiscal year:** April–March.
- **Basis:** screener consolidated (https://www.screener.in/company/TDPOWERSYS/consolidated/, fetched 13-Oct-26 17:37 UTC).
- **Corporate action: a ₹600 cr QIP closed on 12-Oct-2026.** It allotted **77,41,935 shares at ₹775** (floor price ₹775.35; the QIP opened 7-Oct-26) [V BSE 39697c5e, 33da684f].
  - Pre-QIP share capital was ₹31.25 cr (₹1 face value), so the issue adds about 2.5% to the share count [E].
  - Screener's m-cap of ₹25,085 cr at ₹798 implies about 31.4 cr shares, which may not yet fully reflect the allotment. **On the full post-QIP count of about 32.0 cr shares, m-cap ≈ ₹25,550 cr** [E].
- **Q2 FY27 is not out.** No board date was visible on the screener document list as of 13-Oct.

### Financials (screener consolidated [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 1,001 | 1,279 | **1,856** (+45.1%) | 2,124 |
| Operating profit | 171 | 235 | 335 | 383 |
| OPM | 17% | 18% | **18.0%** | 18% |
| Other income | 16 | 24 | 21 | 20 |
| PAT | 118 | 175 | **239** (+37%) | 275 |
| CFO | 84 | 40 | **129** | – |

- **Company basis** [V Q1 FY27 deck]:
  - FY26 total income ₹1,869.5 cr, including ₹13.2 cr of other operational income.
  - **EBITDA ₹342.9 cr = 18.3%** (FY25 18.8%). The company includes other *operational* income and excludes interest income (₹8.1 cr).
  - Gross margin 33.6% (35.6% in FY25). PAT ₹238.8 cr.
  - EBITDA margin history: FY21 11.3% → FY23 16.0% → FY25 18.8% → FY26 18.3%.
- **Q1 FY27 (Jun-26)** [V deck and transcript, BSE a93b0ca0, call 12-Aug-26]:
  - Revenue **₹640.1 cr (+71% YoY, +8% QoQ)**. Gross margin 34.7%.
  - **EBITDA ₹121.7 cr = 19.0%** (18.9% a year earlier; 17.4% in Q4).
  - **PAT ₹86.3 cr (+72%).** Standalone revenue ₹630 cr (+74%) and PAT ₹85.3 cr (+81%).
  - It was the "highest-ever quarterly order inflow and sales".
- **Balance sheet (Jun-26)** [V deck]:
  - Borrowings ₹23.8 cr (₹18.1 cr at Mar-26).
  - Cash ₹119.6 cr + other bank balances ₹120.3 cr = **₹239.9 cr** (company: "strong cash position of INR2.4 billion").
  - Net cash ≈ ₹216 cr before the QIP, and **≈ ₹815 cr after the ₹600 cr QIP** [E].
  - Screener's "Investments" line is nil. The bank deposits sit in other assets.
- **Working capital:**
  - Screener FY26: debtor days 146, inventory 148, payable 121, **WC days 109** (120 in FY25). The cash-conversion cycle is 173.
  - Jun-26: receivables ₹785 cr, inventory ₹569 cr. Other current liabilities, which include customer advances, rose to ₹290 cr from ₹190 cr [V deck].
- **Valuation (13-Oct-26 close) [V]:**
  - M-cap **₹25,085 cr** (screener; about ₹25,550 cr on the post-QIP count [E]); price ₹798; 52-week high/low ₹856 / ₹291.
  - **P/E 91.2** (TTM). Book value ₹34.3, so P/B is 23× before the QIP [E].
  - ROCE 34.0%, ROE 24.7%. Dividend yield 0.13%.
  - EV ≈ 25,085 + 24 − 240 = ₹24,869 cr. **EV/EBITDA ≈ 65×** on TTM OP of ₹383 cr [E].
  - The stock has risen about 2.7× from its 52-week low.

### Native KPIs
- **Order inflow:**
  - **Q1 FY27: ₹734.1 cr (+87%).** **Exports, including deemed exports, were ₹683.6 cr = 93%**; domestic was ₹50.5 cr. In Q1 FY26 inflow was ₹391.8 cr (exports ₹257.3 cr, domestic ₹134.5 cr) [V].
  - Management: the run-rate is above ₹700 cr a quarter, and **FY27 inflow should be "INR2,800 crores plus"** [V transcript].
  - FY26 inflow of ₹2,238 cr (about 80% exports) is the primer's figure and was not re-verified this session.
- **Order book (Jun-26): ₹2,207.3 cr** [V deck]:
  - **Exports including deemed exports: ₹1,533 cr (69.5%).**
  - Domestic: ₹395 cr (17.9%).
  - Railway exports: ₹168 cr (7.6%); domestic railways (e-locomotives): ₹46 cr (2.1%).
  - Spares and aftermarket: ₹43 cr; Turkey: ₹22 cr.
  - On the call management split it as generator and motor ₹1,929 cr, railway ₹211 cr, aftermarket ₹22 cr and Turkey ₹46 cr. The deck and the call swap the spares and Turkey labels.
  - Export plus deemed export, excluding railways, is 57% on management's definition.
  - The Mar-26 order book of about ₹1,973 cr is the primer's figure (not re-verified). It implies **+11.9% QoQ** [E].
- **Cover and conversion [E]:**
  - Order book / TTM revenue = 2,207 / 2,124 = **1.04×**.
  - **Book-to-bill:** 1.15 in Q1 FY27 and about 1.2 in FY26 (on the primer's inflow).
  - **Execution rate:** Q1 revenue / opening order book = 640 / 1,973 ≈ **32% per quarter**. This is a short-cycle components business.
- **Segment colour from Q1** [V deck]:
  - **Gas turbine:** "significant volume orders from a major global gas-turbine OEM" (14–18 MW, multi-project, US). A pipeline from a second global OEM (12–19 MW, US programmes).
  - **Gas engine:** large-volume repeat orders from global OEMs for **US data-centre applications**.
  - **Steam:** captive-power orders including a 60 MW 2-pole unit, plus 60 Hz US export orders. Management sees steady 10–12% market growth.
  - **Hydro:** the segment's largest order (4×16 MW vertical units for Africa); refurbishment orders.
  - **Railways: "not taking any fresh orders"**; the segment's future is to be reviewed at year-end.
- **Post-quarter events** (secondary source, multibagg.ai, 1-Oct-26; the BSE filing was not fetched, so treat as **unverified**):
  - A **10-year build-to-print framework agreement with Siemens Energy, Inc., effective 13-Aug-2026**, to make 2-pole generators to Siemens Energy designs. It has no fixed volumes.
  - A **₹192 cr order from an unnamed multinational, received through TDPS USA**, for 2-pole gas-turbine generators to be installed in the US, with delivery Aug-2027 to Jan-2028.
  - These are consistent with management's Q1 remark that it was "close to signing agreements" in the large-generator segment [V transcript].
- **Capacity:**
  - Current capacity supports about ₹2,200 cr of revenue. **About ₹50 cr of debottlenecking capex in FY27** (₹50–100 cr cited on the call) lifts FY28 capacity to **about ₹3,200 cr of revenue**.
  - A further expansion toward **₹4,000 cr+ by FY29–30** is to be detailed at the Q2 call. Large generators (above 100 MW) are additional and take 18–20 months to manufacture [V transcript].
  - The ₹600 cr QIP provides the funding headroom.
- **Ownership** [V screener]:
  - Sep-26: **promoter 27.15%** (34.27% in Dec-24, then 26.87% from Jun-25 after a promoter sale). **FIIs 22.86%** (26.69% in Mar-26). **DIIs 27.94%** (up from 22.24%). Public 22.05%.
  - The deck lists "Mutual Funds & AIF 23.9%" and Vanguard among the holders.
  - **After the QIP, the promoter stake is ≈ 26.5%** [E].
- **Guidance:**
  - **FY27 revenue upgraded to ₹2,600 cr (+40%)**, "with a small chance that we may even cross this number".
  - EBITDA margin kept at about **18–19%**; gross contribution held within ±1% through pricing and FX.

### Story bullets
- **The cleanest US data-centre and gas-turbine shortage play in the batch.** 93% of Q1 orders were exports. Volume orders came from a US gas-turbine OEM, plus repeat orders for data-centre gas-engine gensets. A Siemens Energy build-to-print framework was reported in Aug-26 (secondary source).
- **Execution is the binding constraint.** Inflow is above ₹700 cr a quarter against capacity of about ₹2,200 cr this year and about ₹3,200 cr in FY28. The ₹600 cr QIP at ₹775 (12-Oct-26) pre-funds the FY29–30 step-up, with details due at the Q2 call.
- **Low promoter stake.** It is about 27% (about 26.5% after the QIP), following the 2025 sell-down. The register is now institution-heavy: DIIs 27.9% and FIIs 22.9%.
- **The richest multiple in batch 2: 91× TTM P/E and about 65× EV/EBITDA (13-Oct-26)**, against an 18–19% margin business with only about 1× order-book cover. The price assumes the export shortage lasts.

---
## 4. Atlanta Electricals (NSE: ATLANTAELE, BSE: 544527)

**Identity and status.**
- Listed **September 2025** through an IPO of about ₹687 cr: ₹400 cr fresh issue [V Q4 FY26 transcript] plus an OFS, at ₹754 a share [K primer/RHP; not re-fetched].
- Based in Anand, Gujarat. Makes power, auto and inverter-duty transformers from 5 MVA / 11 kV up to 500 MVA / 765 kV.
- **Management** [V Q1 FY27 deck BSE f61230f1, transcript BSE 194200e4]:
  - **Niral Krupeshbhai Patel**: Chairman & Managing Director.
  - Amish K. Patel and Tanmay S. Patel: Whole-time Directors.
  - **Akshaykumar B. Mathur**: CEO.
  - **Anand Sharma**: COO.
  - **Mehul S. Mehta**: CFO.
- **Fiscal year:** April–March.
- **Basis:** screener consolidated (https://www.screener.in/company/ATLANTAELE/consolidated/, fetched 13-Oct-26 17:37 UTC).
- **Q2 FY27 is not out.** The trading window closed on 25-Sep-26. A JP Morgan-led plant visit was held on 23-Sep-26, and the AGM on 21-Sep-26 [V screener document list].
- **Corporate action pending:** management said it will be "commencing the procedure of **merging Atlanta Trafo Limited with Atlanta Electricals Limited**" [V Q4 FY26 transcript]. Atlanta Trafo is a 100% subsidiary, so this is an intra-group merger with no listed-entity change; no scheme had been seen filed.
- **Minimum-public-shareholding flag:** the promoter holds **87.28%**, so the public float is 12.72%. Under SCRR rule 19A, the company must reach 25% public shareholding within 3 years of listing, i.e. by about Sep-2028 [K]. That means a promoter sell-down or dilution of roughly 12 points is ahead.

### Financials (screener consolidated [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 868 | 1,244 | **1,852** (+48.8%) | 2,003 |
| Operating profit | 119 | 194 | 345 | 373 |
| OPM | 14% | 16% | **18.6%** | 19% |
| Interest | 30 | 34 | 57 | 55 |
| PAT | 64 | 119 | **202** (+70%) | 217 |
| CFO | 88 | 84 | **184** | – |

- **Company basis** [V Q4 FY26 transcript BSE 0a8f3f46]:
  - FY26 revenue ₹1,851.5 cr (+48.8%). **EBITDA ₹344.4 cr = 18.6%**, which **excludes other income** and so equals screener OP. PAT ₹201.8 cr.
  - Q4 FY26: revenue ₹747.6 cr (+81.7%), EBITDA 20.0%, PAT ₹102.2 cr.
  - The 220 kV class was about 52% of FY26 revenue.
- **Q1 FY27 (Jun-26)** [V deck and transcript, call 22-Jul-26]:
  - Revenue **₹466.3 cr (+48.0% YoY; −37.6% QoQ)**. Gross margin 27.3% (26.0% a year earlier).
  - **EBITDA ₹77.1 cr = 16.5%** (15.5% a year earlier; 20.0% in Q4).
  - **PAT ₹46.8 cr (+50.4%).** Depreciation rose to ₹10.1 cr from ₹2.4 cr as Vadod and Atlanta Trafo came on.
  - **MVA sold: 4,381** (3,605 in Q1 FY26).
- **Balance sheet (Mar-26)** [V screener schedules]:
  - Borrowings ₹51 cr: short-term (working capital) ₹43.5 cr, lease ₹4.1 cr, long-term ₹3.1 cr.
  - Cash ₹100 cr + investments ₹13 cr, so **net cash ≈ ₹62 cr** [E].
  - Company: **all term loans (₹340 cr: Vadod ₹130 cr plus BTW acquisition ₹210 cr) were repaid by 31-Mar-26** [V].
  - IPO use: ₹395.5 cr of the ₹400 cr deployed — ₹79 cr Vadod loan repayment, ₹210 cr working capital, ₹85 cr BTW loan (under general corporate purposes), ₹21 cr issue expenses.
  - Credit rating CRISIL A/Stable, A1. The Q1 deck notes an upgrade to A/Stable. Bank lines were raised to ₹1,320 cr.
- **Working capital:**
  - Screener FY26: debtor days 84, inventory 102, payable 112, **WC days 55**.
  - **Company, Jun-26: NWC 72 days** (inventory 105, receivables 88, payables 110); cash-conversion cycle about 83 days [V].
- **Valuation (13-Oct-26 close) [V]:**
  - M-cap **₹14,251 cr**; price ₹1,852; 52-week high/low ₹2,200 / ₹708. The IPO price was ₹754 [K].
  - **P/E 65.3** (TTM). Book value ₹121, so P/B is 15.3× [E].
  - ROCE 45.3%, ROE 31.7%. No dividend.
  - EV ≈ 14,251 + 51 − 113 = ₹14,189 cr. **EV/EBITDA ≈ 38×** on TTM OP of ₹373 cr [E].

### Native KPIs
- **Order inflow:** **Q1 FY27 ₹972.4 cr, the highest ever.** It included **RVPNL ₹291.7 cr** (160/50/31.5 MVA units) and **PSTCL ₹285.2 cr**. **FY26 inflow was ₹2,507 cr** [V transcripts].
- **Order book:** ₹1,584 cr (Jun-25) → **₹2,493 cr (Mar-26)** → **₹3,116.6 cr (Jun-26; +25% QoQ, +97% YoY)** [V deck].
  - **The 220 kV class is above 55% of the order book. 400 kV transformers and reactors account for about ₹275 cr.**
  - Management expects about ₹2,400 cr of the book to be executed in FY27 [V].
- **Cover and conversion [E]:**
  - Order book / TTM revenue = 3,117 / 2,003 = **1.56×**.
  - **Book-to-bill:** 2.09 in Q1 FY27 and 1.35 in FY26.
  - **Execution rate:** Q1 revenue / opening order book = 466 / 2,493 = **18.7% per quarter**.
- **Mix (Q1 FY27 revenue):**
  - By product: **power transformers 79%**; auto, inverter-duty and other transformers make up the rest.
  - By sector: **T&D 66%**; renewables (solar, wind, hybrid) about 20%; generation, thermal and other about 14% [V; the deck chart is partly garbled].
  - Customers span 19 states and 3 UTs, mainly state utilities (GETCO, RVPNL, PSTCL and others), plus private renewable developers and EPC companies.
- **Capacity: 63,060 MVA installed across five plants** [V Q1 deck]:
  - Anand Unit I: 9,360 MVA (50–200 MVA / 220 kV).
  - Anand Unit II: 6,660 MVA (10–40 MVA / 132 kV, inverter-duty).
  - Bengaluru: 720 MVA.
  - **Vadod: 30,540 MVA** (commercial production from Jul-2025).
  - **Atlanta Trafo (Ankhi): 15,780 MVA.** Formerly BTW Atlanta, the 90:10 JV of China's Baoding Tianwei Baobian (BTW) and the Atlanta promoters. Atlanta bought BTW's 90% and the promoter LLP's 10% (Atlanta UHV Transformers LLP, a related-party leg), at **an EV of about ₹260 cr including about ₹80 cr of debt**. The plant was already producing in Q3 FY26: 580 MVA in about three months.
  - **Approvals:** PGCIL approval for transformers **up to 400 kV at Vadod came on 2-Apr-2026**, subject to short-circuit testing. The **765 kV PGCIL approval is expected "end of second quarter"** after a technical-partner agreement closes [V Q1 transcript].
  - Mainstream 400 kV production starts next year; 400 kV ramp-up capacity is about 30,000 MVA.
- **Expansion:**
  - A dedicated **inverter-duty plant adding about 5,000 MVA, to be commissioned by end-CY2026**.
  - **Tank and radiator backward integration** next to Vadod.
  - Both are funded from internal accruals. The board has approved a standby term loan [V].
- **Exports:** the first sizeable export order came in FY26. **The medium-term target is about 15% of revenue**, from Europe, Africa and to some extent the US [V].
- **Ownership (Sep-26) [V screener]:** promoter **87.28%**, FIIs 1.45% (2.40% in Mar-26), DIIs 4.97%, public 6.30%. Shareholders numbered 49,435.
- **Guidance:**
  - **About 40% revenue CAGR for three years** (from listing), "with stable margins".
  - Q1 call: "when we went public, the margins were at about 16%, 16.5% and we intend to stick to that guideline".
  - Q4 FY26 call: an 18–20% EBITDA band was discussed.
  - The margin guidance is therefore loose: **16–20%**.

### Story bullets
- **A capacity-led compounder.** Capacity went from about 17,000 MVA in FY25 to 63,060 MVA by acquiring BTW's plant and building Vadod. FY26 revenue rose 49% and Q1 FY27 rose 48%. The order book is a record ₹3,117 cr after a record ₹972 cr Q1 inflow from state transmission utilities.
- **Moving up voltage classes is the rerating trigger:** 400 kV approval was received in Apr-26, 765 kV approval is expected around Q2 FY27, and 400 kV production is mainstream from FY28. Atlanta Trafo's Chinese-JV heritage (BTW) and the promoter-LLP leg of that acquisition are diligence points.
- **The balance sheet is clean after the IPO:** term debt is nil and there is about ₹62 cr of net cash. But the **87.28% promoter stake means about 12 points must be sold down by about Sep-2028** under the minimum-public-shareholding rule. That is a supply overhang.
- **At 65× TTM P/E and about 38× EV/EBITDA (13-Oct-26), the stock is 2.5× its IPO price.** Q1 margin normalised to 16.5% from Q4's 20%.

---
## 5. Voltamp Transformers (NSE: VOLTAMP, BSE: 532757)

**Identity and status.**
- Listed and active. Founded in 1967 in Vadodara; the promoter is the Patel family. Plants are at Makarpura and Savli, with the new **Unit-III at Jarod** (all near Vadodara).
- **Management** [V Annual Report FY26, BSE 4d6b1053]:
  - **Kanubhai S. Patel**: Chairman & Managing Director (CMD since 2013). His managerial remuneration ratio to the median employee is 116:1.
  - **Kunjal L. Patel**: Vice Chairman & Managing Director.
  - Sanket Rathod: Company Secretary.
- **Fiscal year:** April–March.
- **Basis:** screener **standalone** (https://www.screener.in/company/VOLTAMP/, fetched 13-Oct-26 17:37 UTC). The consolidated page is empty because there are no subsidiaries.
- **The company holds no earnings calls or investor decks.** Operating KPIs here come from the annual report and the CARE rating rationale.
- **Q2 FY27 is not out.** The trading window closed on 1-Oct-26 "until 48 hours after Q2 results"; no board date had been filed [V].
- **New plant:** commercial production started at the **Unit-III power-transformer plant at Jarod on 7-Oct-2026** [V BSE 4c70a09b].
- There is no merger or demerger.

### Financials (screener standalone [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 1,616 | 1,934 | **2,154** (+11.3%) | 2,274 |
| Operating profit | 322 | 366 | 355 | 363 |
| OPM | 20% | 19% | **16.5%** | 16% |
| Other income (treasury) | 89 | 85 | 67 | 72 |
| PAT | 307 | 325 | **305** (−6.2%) | 317 |
| CFO | 216 | 219 | **140** | – |

- **Company and rating-agency basis** [V CARE rationale, 12/19-Aug-26]:
  - FY26 total operating income ₹2,154.9 cr. **PBILDT ₹356.5 cr = 16.54%** (FY25 18.97%). PAT ₹305.4 cr.
  - Volume **16,513 MVA (+7%)**; realisation rose about 4%. The plants ran at **more than 100% capacity utilisation** for a second year.
  - Implied realisation is **about ₹13.0 lakh per MVA** [E: 2,154 / 16,514].
  - Screener OP is about the same as PBILDT, so other income is excluded.
- **Q1 FY27 (Jun-26)** [V screener; CARE]:
  - Revenue **₹543.8 cr (+28%)**. Volume **4,215 MVA (+29%**, against 3,260).
  - **PBILDT ₹80.3 cr = 14.77%** (17.15% a year earlier), squeezed by input prices.
  - Other income was ₹42 cr (treasury gains; Q4 FY26 had a −₹10 cr mark-to-market loss). **PAT ₹91.2 cr (+14%)**.
  - The core margin is falling while treasury income props up PAT.
- **Balance sheet (Mar-26)** [V screener schedules]:
  - Borrowings ₹1 cr (lease only).
  - **Investments ₹995 cr + cash ₹74 cr = ₹1,069 cr**, so **net cash ≈ ₹1,068 cr** [E], about 10% of m-cap.
  - CARE: "unencumbered liquid investments of ₹667 cr"; net worth about ₹1,791 cr; gearing 0.07× including mobilisation advances.
  - Non-fund bank-guarantee utilisation is about 81%; performance-guarantee tenors run 3–6 years.
- **Working capital (FY26, screener):** debtor days **46**, inventory **126** (85 in FY25), payable 3, **WC days 87** (74 in FY25).
  - The inventory build to ₹390 cr (from ₹237 cr) pulled CFO down to ₹140 cr. FCF was only ₹15 cr after the Unit-III capex; CWIP was ₹108 cr at Mar-26.
- **Dividend:** ₹100 per share for FY26 (₹101.2 cr payout, 33%) [V AR]. Dividend yield 0.96%.
- **Valuation (13-Oct-26 close) [V]:**
  - M-cap **₹10,505 cr**; price ₹10,384; 52-week high/low ₹12,863 / ₹6,666.
  - **P/E 33.1** (TTM). Book value ₹1,771, so P/B is 5.9× [E].
  - ROCE 23.5%, ROE 17.4%.
  - EV ≈ 10,505 + 1 − 1,069 = ₹9,437 cr. **EV/EBITDA ≈ 26×** on TTM OP of ₹363 cr.
  - **Ex-cash P/E ≈ 36×** on PAT excluding about ₹54 cr of post-tax treasury income [E].

**Quarterly trend (screener standalone [V]; ₹ cr)**
| Quarter | Sales | OP | OPM | Other income | PAT |
|---|---|---|---|---|---|
| Jun-25 (Q1 FY26) | 424 | 73 | 17% | 36 | 80 |
| Sep-25 | 483 | 94 | 19% | 15 | 79 |
| Dec-25 | 630 | 108 | 17% | 26 | 99 |
| Mar-26 | 617 | 81 | **13%** | **−10** | **48** |
| Jun-26 (Q1 FY27) | 544 | 80 | 15% | 42 | 91 |

- **The Q4 FY26 dip was the trough.** OPM fell to 13%, and other income turned to a ₹10 cr mark-to-market loss on the treasury book. Q1 FY27 margin only partly recovered, to 15%.
- **Treasury income has been 14–36% of PBT** in recent quarters, excluding the Mar-26 loss (Sep-25 15/104; Jun-26 42/118) [E]. That makes Voltamp's reported PAT unusually sensitive to bond and equity-fund marks.
- **Realisation per MVA [E]:**
  - FY25: ₹1,934 cr / 15,460 MVA = ₹12.5 lakh.
  - FY26: ₹2,154 cr / 16,514 MVA = ₹13.0 lakh (+4%).
  - Q1 FY27: ₹544 cr / 4,215 MVA = ₹12.9 lakh, so it is flat to down sequentially despite the commodity spike.
  - Voltamp's mix of small industrial and distribution units gives a much higher ₹/MVA than TARIL (about ₹7.6 lakh/MVA on the primer's FY26 basis). This is a mix effect, not pricing power.
- **Rating:** CARE AA; Stable on ₹292.5 cr of bank facilities, reaffirmed Aug-26 [V]. The downgrade triggers include liquid investments falling below ₹300 cr.

### Native KPIs
- **Order book:**
  - **₹1,510 cr (12,377 MVA)** at the annual-report date (May-26) [V AR]. That is about ₹12.2 lakh/MVA, similar to current realisation [E].
  - **About ₹1,590 cr at 31-Jul-2026**, which CARE puts at 0.74× FY26 revenue [V CARE].
  - Order book / TTM revenue ≈ **0.70×** [E]. Voltamp is deliberately "selective in order booking, with focus mainly on better cash flows".
  - Order inflow is not disclosed. Inflow from Apr to Jul-26 is roughly ₹1,590 − OB(Mar-26, n.d.) + revenue, so it cannot be computed.
  - **Book-to-bill: not computable.**
- **Customers** [V CARE]:
  - **More than 1,000 customers. The top 10 were 26% of FY26 sales** (33% in FY25).
  - **Most sales go to private-sector players**, with limited exposure to state utilities, which is why receivables run at only 46 days.
  - End-markets: power, refinery, textile, chemical, real estate, auto, infrastructure and steel.
- **Products:** oil-filled power and distribution transformers up to **160 MVA / 220 kV** today; dry-type up to 12.5 MVA / 33 kV; compact substations and RMUs.
- **Capacity:**
  - **Installed capacity 14,000 MVA at Jun-26** [V CARE].
  - **Unit-III at Jarod: +6,000 MVA of power transformers, cost about ₹215 cr** (revised from ₹200 cr). It raises the rating ceiling to **315 MVA** (CARE; the AR says up to 250 MVA). **COD was 7-Oct-26**, about three months after the Jul-26 target, because of delayed imported equipment [V].
  - Capacity after Unit-III is about **20,000 MVA** [E].
  - **Next:** a dry-type plant at **Karjan, Vadodara: 2,300 MVA, ₹90 cr**, COD **Q4 FY28**. Land was bought for ₹25 cr. Everything is funded from internal accruals [V CARE / AR].
- **Margin drivers:** "most of the company's orders are fixed price", with copper hedged and CRGO bought locally from importers. Management warns that "with the planned capacity additions across the industry and increasing competition, **margins are expected to get normalized**" [V AR].
- **Ownership** [V screener]:
  - Jun-26 (latest on screener): **promoter 30.00%** (37.80% in Jun-25, then 30.00% from Sep-25 after a promoter sale of about 7.8 points). FIIs 21.53%, **DIIs 33.85%** (rising), public 14.57%.
  - The Sep-26 pattern was not yet shown.
- **Guidance:** none formal; the company holds no calls. The AR expects the new power-transformer capacity to be "partly utilized during the year".

### Story bullets
- **The conservative transformer maker in the batch.** It has about ₹1,070 cr of treasury (roughly 10% of m-cap), no debt and a private industrial customer base. But its order book is only about 0.7× revenue, and it refuses utility tenders at thin prices.
- **Volume is up and margin is down.** Q1 FY27 volume rose 29% but PBILDT fell to 14.8% (FY25: 19.0%). Fixed-price orders plus copper and CRGO inflation are the cause, and management itself says margins will "normalize".
- **Unit-III started on 7-Oct-26.** It adds 6,000 MVA (about +43%) and lifts the ceiling to 250–315 MVA. FY27–28 volume growth is the swing factor, and Karjan dry-type (2,300 MVA) follows in Q4 FY28.
- **Promoter stake is only 30%** after the 2025 sale; DIIs at 34% are now the largest bloc. At **33× P/E and about 26× EV/EBITDA (13-Oct-26)** it is the cheapest in the batch on EV/EBITDA, apart from TARIL.

---
## 6. Quality Power Electrical Equipments (NSE: QPOWER, BSE: 544367)

**Identity and status.**
- Listed **24-Feb-2025** via an IPO of about ₹859 cr at ₹425 (fresh issue plus OFS) [K primer/prospectus; not re-fetched].
- Based in Sangli, Maharashtra. Makes reactors, line traps, capacitor banks, harmonic filters, instrument transformers, FACTS (SVC/STATCOM) and BESS power-conversion systems.
- **Management on the Q1 FY27 call (10-Aug-26)** [V transcript BSE f7de2eb0]:
  - **Bharanidharan Pandyan**: Joint Managing Director.
  - **Sanjog Mhatre**: CEO.
  - **Rajesh Jayaraman**: CFO.
  - Deepak R. Suryavanshi: Company Secretary.
  - **Shylendra Kumar** (ex-Hitachi/ABB) was appointed Group CTO [V Q1 deck].
- **Fiscal year:** April–March.
- **Basis:** screener consolidated (https://www.screener.in/company/QPOWER/consolidated/, fetched 13-Oct-26 17:37 UTC).
- **Group structure** [V Q1 deck BSE 1b7003bd]:
  - Quality Power Engineering Projects Pvt Ltd: 100%.
  - **S&S Transformers (Kochi): 98%.**
  - **Endoks Enerji (Ankara, Turkey): 51%.** FACTS, STATCOM and BESS power-conversion systems.
  - **Mehru Electrical & Mechanical Engineers (Bhiwadi): 51%.** Instrument transformers to 500 kV.
  - Sukrut Electric: 50%. Tanks and fabrication.
  - Nebeskie Labs: 26%. Software and IoT.
- **Pending corporate actions** [EGM corrigendum V BSE 25d95a55; deal terms from secondary sources: sahi.com/angelone, treat as partly unverified]:
  - **Acquisition of 100% of Winwin Speciality Insulators Ltd (WSIL, Visakhapatnam SEZ).** WSIL makes electro-porcelain insulators to 1,200 kV (about 18,000 MTPA) and polymeric insulators to 400 kV.
    - A term sheet was signed in Jun-26 at an EV of about ₹315 cr [V deck and transcript]. The SPA is dated **23-Sep-26**.
    - Consideration is about **₹272.34 cr: ₹123.84 cr in cash plus up to 10,17,123 new shares at ₹1,460** (≈ ₹148.5 cr) [V corrigendum for the share count and price; cash split from secondary sources]. The share swap dilutes the equity by about 1.3% [E].
  - **A QIP of up to ₹700 cr** was approved by the board (secondary source; unverified).
  - **EGM on 19-Oct-2026.** NSE requested the corrigendum, which corrects the 90-day VWAP to ₹1,238.49 [V].
- **Q2 FY27 is not out.** No board date had been seen.

### Financials (screener consolidated [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 302 | 338 | **947** (+180%) | 1,003 |
| Operating profit (before other income) | 39 | 67 | 178 | 186 |
| OPM | 13% | 20% | **18.8%** | 19% |
| Other income | 30 | 52 | **58** | 66 |
| PAT (consolidated, including minority) | 55 | 100 | **186** | 195 |
| EPS (₹), owners | 5.19 | 8.54 | **15.67** | 17.21 |
| CFO | 52 | 55 | **80** | – |

- **Company basis** [V Q1 deck]:
  - **"Total revenue" includes other income.** FY26 total revenue is ₹1,007 cr (+157%), against revenue from operations of ₹947 cr.
  - **"EBITDA includes other income"**: FY26 EBITDA ₹236.2 cr = 23.5% (30.5% in FY25). Excluding other income it is about ₹178 cr (18.8%, equal to screener OP).
  - Gross margin 43.3% (48.9% in FY25). PAT ₹185.5 cr.
- **Minority interest is large (data-quality flag).**
  - FY26 owners' PAT ≈ EPS 15.67 × 7.74 cr shares ≈ **₹121 cr**, against consolidated PAT of ₹186 cr. That is about ₹65 cr to minorities, mainly the 49% outside holders of Endoks and Mehru [E].
  - Screener's **P/E of 87.8 is on owners' EPS**. A P/E built on ₹186 cr consolidated PAT (about 60×) overstates the earnings that belong to shareholders.
- **Q1 FY27 (Jun-26)** [V deck and transcript]:
  - Revenue from operations ₹233 cr (+31.6%); total revenue ₹256.4 cr (+32.1%).
  - **Reported EBITDA ₹64.7 cr = 25.2%**, or **28.3% (₹72.5 cr) before the Ind AS 29 charge**. Both include other income of ₹24 cr. Screener OP is ₹41 cr (17.6%).
  - Gross margin 47.2%.
  - **Reported PAT ₹46.7 cr (+25.9%)**, after a **₹7.8 cr non-cash Ind AS 29 hyperinflation monetary loss at Endoks (Turkey)**. PAT before Ind AS 29 is ₹54.5 cr (+46.9%).
  - Revenue by entity: QP standalone about ₹69 cr (₹37 cr a year earlier); Mehru about ₹83 cr (about ₹60 cr); Endoks about ₹107 cr (slight dip).
  - Mehru Q1 EBITDA was about 18% [V transcript].
- **Balance sheet (Mar-26)** [V screener schedules]:
  - Borrowings ₹40 cr.
  - Cash ₹248 cr + investments ₹19 cr, so **net cash ≈ ₹227 cr** [E].
  - Company: debt/equity has stayed below 0.21× [V deck]. Management says cash balances fell in Q1 as expansion was funded internally.
- **Working capital:**
  - Screener FY26: debtor days 93, inventory 74, payable 105, **WC days 71** (119 in FY25).
  - **Company: CFO/EBITDA was only 0.3× in FY26** (0.5× FY25; 0.8× FY23–24) [V deck]. Cash conversion is weak.
- **Valuation (13-Oct-26 close) [V]:**
  - M-cap **₹11,706 cr**; price ₹1,512; 52-week high/low ₹1,681 / ₹581.
  - **P/E 87.8** (TTM, owners). Book value ₹70, so P/B is 21.6× [E].
  - ROCE 31.7%, ROE 25.3%. Dividend: ₹1 per share approved at the 29-Sep-26 AGM.
  - EV ≈ 11,706 + 40 − 267 = ₹11,479 cr, before adding minority interest. **EV/EBITDA ≈ 62×** on TTM screener OP of ₹186 cr, or about 46× on company EBITDA including other income [E].

### Native KPIs
- **Order book: ₹1,945.5 cr at 30-Jun-26, "approximately 1.9x last year's revenue"** [V]:
  - **Endoks ₹801 cr (41%).**
  - **Mehru ₹585 cr.**
  - **QP standalone ₹553 cr.**
  - Others ₹6.5 cr.
  - Management says the book gives visibility "into FY2028".
- **Cover and conversion [E]:**
  - Order book / TTM revenue = 1,945 / 1,003 = **1.94×**.
  - **Order inflow is not disclosed**, so book-to-bill cannot be computed. The primer's "₹1,400 Cr+" at FY26 exit would imply Q1 inflow of about ₹780 cr, which is unverified.
- **Disclosed Q1 orders: ₹104.9 cr** [V deck]:
  - **₹48.3 cr of HV reactors for a US data-centre project** (QP).
  - **₹40.9 cr FACTS order in Japan** (Endoks).
  - **₹15.7 cr of 400 kV instrument transformers from Hitachi Energy India** (Mehru).
  - Management is "targeting two HVDCs" and has "a couple of STATCOMs already in the US".
- **Capacity and capex** [V transcript]:
  - **New Sangli coil/reactor facility:** trial production was targeted for Aug-26. About 60 customer audits are needed, which takes roughly 6 months, so the plant opens to large orders around Q3 FY27. Peak revenue capacity is **₹1,500–1,800 cr**.
  - **HV CTC magnet-wire facility:** in trial runs, commercial by Q4 FY27.
  - **Endoks power-conversion-system (BESS) facility in Turkey:** civil works complete, operations in Q3 FY27. Endoks has a 4 GW facility.
  - **Mehru instrument-transformer plant in Turkey,** for European markets, is under construction.
  - **Winwin** adds insulators; management cited ₹300–400 cr a year of initial revenue potential after capex.
- **Margin drivers:**
  - Q2 and Q3 will absorb the aluminium and copper spike, because the coil business has a 4–6-month lag. Mehru's cycle is shorter, so it was hit immediately in April.
  - The new Sangli fixed costs land before utilisation, so management expects **"temporary moderation in standalone margins, particularly in Q3"**.
  - Every order in the book "has been booked above the margin guidance" [V].
- **Ownership (Jun-26) [V screener]:** promoter (Pandyan family) **73.91%**; FIIs 3.37%; DIIs 6.45%; public 16.28%. Shareholders numbered 85,706. The Sep-26 pattern was not yet on screener.
- **Guidance** [V transcript]:
  - **FY27 revenue growth about 20%**, to be revisited at Q3.
  - **"Please model us at 20% or high teens EBITDA."**
  - Coil products about 20% (orders booked above 25%); Mehru about 18% (raised from 15%); Endoks about 18%.
  - Management did not confirm the "+50% in FY28" an analyst asked about.

### Story bullets
- **A roll-up of grid-niche assets built through acquisitions.** Endoks (Turkey FACTS/BESS, 51%), Mehru (instrument transformers, 51%) and S&S (98%), now Winwin insulators (100%, about ₹272 cr, EGM 19-Oct-26) and possibly a ₹700 cr QIP. It is the most acquisitive company in either batch.
- **Read the earnings carefully.** Company "revenue" and "EBITDA" include other income (₹58 cr in FY26). Minorities take about a third of PAT (owners about ₹121 cr against ₹186 cr consolidated in FY26). Ind AS 29 hyperinflation charges at Endoks now hit reported PAT. CFO/EBITDA was only 0.3×.
- **There is real exposure to the HVDC/FACTS and US data-centre themes.** Q1 orders included US data-centre reactors, a Japan FACTS order and Hitachi Energy instrument transformers. The order book is ₹1,945 cr (1.9×). But FY27 growth guidance is only about 20% while the Sangli plant ramps up and goes through audits.
- **At 88× owners' P/E and about 62× EV/EBITDA (13-Oct-26)**, the stock is 3.6× its IPO price. It needs the Sangli ramp-up and Winwin integration to deliver in FY28.

---
# PRIMER ISSUES (batch 2)

**Method.** For each primer in `primers/<file>.html` I converted the HTML to text and read the cover strip, the "What's new" box and sections 00–03. I then grepped for m-cap, P/E, order book, capacity/MVA, revenue, promoter %, MD/CEO, capex, exports, guidance, debt and ROCE. Everything is compared with the verified research above.
- The primers were last refreshed between 14-Jul and 8-Aug-2026.
- **Five of the six miss their Q1 FY27 results.** The exception is TARIL, whose primer has Q1 but **misses Q2 FY27, released 13-Oct-26**.
- **All six carry stale market data.**

## Triveni Turbine — `primers/triveni-turbine.html` (refreshed 14-Jul-26)
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹19,400 Cr Market cap (Jul '26)" | **₹16,628 cr** (13-Oct-26; price ₹523, 52-week high ₹788) | screener, fetched 13-Oct-26 17:37 UTC [V] |
| 2 | Stale P/E | "trades north of 50× earnings"; "50×+ Trailing P/E (Jul '26)" | **P/E 47.9** (TTM) | screener [V] |
| 3 | Missing Q1 FY27 | Refreshed on FY26 only | Revenue ₹442.7 cr (+19.2%); **EBITDA 18.0%** (25.8% a year earlier); PAT ₹51.1 cr (**−20.6%**); orders ₹568 cr (+6.1%), 68% exports | Q1 FY27 deck BSE 209b2785 [V] |
| 4 | Stale order book | "Closing order book ~₹2,054 Cr" (Mar-26) | **₹2,180 cr at Jun-26** (+5.1% YoY). The aftermarket book is ₹624 cr (+115%), 29% of the total | Q1 deck [V] |
| 5 | Wrong installed base | "5,000+ turbines · 70+ countries" (cover, §00, §05) | **6,000+ installations in 80+ countries, 16+ GW** | Q1 FY27 deck, slide 3 [V] |
| 6 | Wrong / stale RoCE | "RoCE around 28%" (§00, §09, bull case) | Screener **ROCE 34.1%** (FY26 34%); the company deck shows 36% for FY26 | screener [V]; Q1 deck slide 28 [V] |
| 7 | Mislabelled export share of orders | "Order intake ~₹2,326 Cr ... exports ~52% of intake" | The deck's 51% figure relates to the closing order book. **Q4 FY26 export bookings were 69%** of orders; Q1 FY27 68% | Q4 FY26 deck BSE 282b25f3 [V] |
| 8 | Missing margin-reset drivers | – | The NTPC CO₂-storage order was taken at "near zero margins" (about ₹175 cr left to execute); freight costs up 3–4× deferred exports; **US subsidiary loss in Q1** | Q1 transcript BSE 06048a54 [V] |
| 9 | Missing management change | Leadership: Dhruv Sawhney (Chairman), Nikhil Sawhney (VC & MD) | Also CEO **S.N. Prasad**; **COO Sachin Parab resigned effective 1-Oct-2026** | BSE 657fc4f2 [V] |
| 10 | Working capital described as negative | "negative working-capital intensity in good years" | Screener WC days **+71** in FY26 (−39 in FY24); debtor days 107; FY26 CFO only ₹111 cr | screener [V] |
| 11 | Missing guidance | – | FY27 growth "back-ended", margin recovery in H2; medium-term **PBT margin over 20%** | Q1 deck and transcript [V] |
| 12 | Cash understated / unquantified | "net cash" | Company: **"investments including cash" ₹970 cr** (FY26); screener cash + investments ₹582 cr | Q1 deck [V]; screener [V] |

## Transformers & Rectifiers India — `primers/transformers-rectifiers.html` (refreshed 21-Jul-26)
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Missing Q2 FY27 (released 13-Oct-26)** | Latest is Q1 FY27 | Consolidated revenue **₹739.4 cr (+60.7%)**, PAT ₹81.4 cr (+118%). Standalone ₹709 cr (+66%), EBITDA 16.1%. **Order book ₹7,237 cr (+32%)**; Q2 inflow ₹1,169 cr; H1 inflow ₹3,283 cr | Results BSE f94d6d24; press release BSE 8a9b4aa3 [V] |
| 2 | **Wrong installed capacity** | "~40,000 MVA Installed capacity" (cover); "40,000 → ~77,000 MVA" | Company: **"installed capacity of 75,000 MVA across three plants"** (Moraiya 40,000, Changodar 35,000, Odhav 2,000) | Q1 FY27 deck, Q2 press release [V] |
| 3 | **Wrong capex** | "~₹600 Cr capex programme" over 15 months | **Changodar expansion about ₹150 cr plus backward integration ₹900–1,000 cr** (CTC, pressboard, RIP bushings, fabrication, CRGO) | Q1 deck and transcript BSE c987bf81 [V] |
| 4 | Stale Changodar timing | "Slipped ~4 months; now guided to Q2 FY27" | Now **"commercial production expected around Diwali"** (Q3 FY27); earlier guided to Aug-26 | Q2 press release [V] |
| 5 | Stale m-cap | "~₹9,500 Cr (Jul 2026)"; "~₹317 a share" | **₹9,125 cr; ₹304** (13-Oct-26) | screener [V] |
| 6 | Stale P/E | "roughly 37× trailing earnings" | **P/E 30.0** (TTM to Sep-26) | screener [V] |
| 7 | **Wrong standalone Q1 PAT** | "standalone Q1 FY27 PAT ... down ~9% YoY at ~₹61.5 Cr" | **Standalone PAT ₹49.9 cr (−17%)**. ₹61.5 cr is *consolidated PAT attributable to owners* | Q1 deck [V] |
| 8 | EBITDA basis unstated | "EBITDA ₹383 Cr (~15%)" | ₹383 cr is screener OP excluding other income. **Company consolidated EBITDA ₹444 cr (17.7%) includes other income** | Q1 deck [V] |
| 9 | Stale institutional holdings | "FIIs around 7.8% and domestic institutions around 1.5%" | Sep-26: **FIIs 6.98%, DIIs 1.19%, public 27.46%** (promoter 64.36%, unchanged) | screener [V] |
| 10 | Stale subsidiary name | "Posco-Poggenamp Electrical Steel" | Renamed **Triveni Transtech (India) Pvt Ltd** | Q2 results auditor's list [V] |
| 11 | Missing new subsidiary | – | **Maxwell Grid Transformers (UK) Pvt Ltd incorporated 4-Sep-26** (for the US and Europe) | Q2 results note 3 [V] |
| 12 | Missing nuclear entry | – | **NPCIL Kaiga Units 5 & 6** order, plus DVC and GETCO orders | Q2 press release [V] |
| 13 | Stale net debt | "net debt lower still after cash" | Borrowings **₹574 cr at Sep-26** (₹457 cr at Mar-26); **net debt ≈ ₹314 cr**; H1 capex ₹153 cr; company NWC about 170 days | Q2 balance sheet [V]; Q1 transcript [V] |
| 14 | Pipeline stale | "~₹23,000 Cr enquiry pipeline" | **About ₹21,000 cr** at Q2 | Q2 press release [V] |
| 15 | Missing guidance | – | FY27: **revenue +25%, EBITDA 16%, PAT 9–10%**, "on track" | Q1 deck; Q2 press release [V] |

## TD Power Systems — `primers/td-power-systems.html` (refreshed 27-Jul-26)
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Stale m-cap** | "~₹18,000 Cr Market cap (mid-2026)" | **₹25,085 cr** (13-Oct-26; price ₹798; screener share count). About ₹25,550 cr on the post-QIP count [E] | screener [V] |
| 2 | **Wrong / internally inconsistent P/E** | "trades near 45–46× earnings"; "~46× Trailing P/E on ~₹18,000 Cr" | ₹18,000 cr / ₹239 cr = **75×**, not 46×. Today: **P/E 91.2** (TTM) | screener [V]; arithmetic [E] |
| 3 | **Missing ₹600 cr QIP** | – | **QIP closed 12-Oct-2026: 77,41,935 shares at ₹775 = ₹600 cr** | BSE 39697c5e [V] |
| 4 | **Unsupported "1:2 stock split"** | "1:2 stock split approved with Q4 results" | Face value is ₹1 and share capital ₹31.25 cr at both Mar-26 and Jun-26. No split appears in the Q1 FY27 balance sheet, and a 1:2 split of a ₹1 share is implausible | Q1 FY27 deck BSE b1bea02f [V] |
| 5 | Missing Q1 FY27 | – | Revenue ₹640 cr (+71%), EBITDA 19.0%, PAT ₹86.3 cr (+72%); **orders ₹734 cr (+87%), 93% exports** | Q1 deck [V] |
| 6 | Stale order book | "~₹1,973 Cr (Mar 2026)" | **₹2,207 cr at Jun-26**: exports 69.5%, domestic 17.9%, railways 9.7% | Q1 deck [V] |
| 7 | Missing guidance and capacity plan | – | **FY27 revenue guidance raised to ₹2,600 cr**; FY27 inflow "₹2,800 cr plus". About ₹50 cr debottlenecking takes FY28 capacity to about ₹3,200 cr; FY29–30 target ₹4,000 cr+ | Q1 transcript BSE a93b0ca0 [V] |
| 8 | Missing railway exit | – | **"Not taking any fresh orders" in railways**; to be reviewed at year-end | Q1 transcript [V] |
| 9 | Missing management | Nikhil Kumar (MD), Mohib Khericha (Chairman) | Also **CEO Deepak Kumar Sinha** and **CFO M N Varalakshmi** | Q1 deck [V] |
| 10 | Missing new OEM framework / US order | – | **Siemens Energy 10-year build-to-print framework (effective 13-Aug-26)**; **₹192 cr US 2-pole gas-turbine-generator order (Oct-26)**. Secondary source; BSE filing not fetched, so **unverified** | multibagg.ai (1-Oct-26) |
| 11 | Ownership drift | "roughly 27%" promoter | Sep-26 **27.15%**; about 26.5% after the QIP [E]. DIIs 27.94%, FIIs 22.86% | screener [V] |

## Atlanta Electricals — `primers/atlanta-electricals.html` (refreshed 2-Aug-26)
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹11,800 Cr Market cap (2026, approx)" | **₹14,251 cr** (13-Oct-26; price ₹1,852) | screener [V] |
| 2 | Stale P/E | "~50×+ P/E" | **P/E 65.3** (TTM) | screener [V] |
| 3 | Missing Q1 FY27 | – | Revenue ₹466 cr (+48%), EBITDA 16.5%, PAT ₹46.8 cr (+50%); **record inflow ₹972 cr**; order book **₹3,117 cr** (+25% QoQ) | Q1 deck BSE f61230f1 [V] |
| 4 | **Wrong status of the Ankhi plant** | "an Ankhi unit (under the subsidiary) awaiting commissioning"; "would take total capability toward ~63,000 MVA" | **Atlanta Trafo (Ankhi) is operating**: 580 MVA produced in Q3 FY26. **Installed capacity is already 63,060 MVA** across five plants (Ankhi 15,780 MVA) | Q4 FY26 transcript BSE 0a8f3f46; Q1 deck [V] |
| 5 | Stale subsidiary name / deal details | "BTW-Atlanta Transformers Pvt Ltd" | Now **Atlanta Trafo Ltd**. 90% bought from BTW (China) plus **10% from promoter entity Atlanta UHV Transformers LLP**; EV about ₹260 cr including about ₹80 cr debt. **Merger into the parent planned** | Q1 deck slide 16; Q4 transcript [V] |
| 6 | Voltage-approval status wrong / incomplete | Vadod "taking rated capability toward 765 kV" | **PGCIL approval up to 400 kV at Vadod (2-Apr-26)**. 765 kV is via Ankhi, with PGCIL approval expected about end-Q2 FY27 once a tech-partner agreement is signed | Q4 and Q1 transcripts [V] |
| 7 | ROCE stale | "RoCE ~40%+" | **ROCE 45.3%**, ROE 31.7% | screener [V] |
| 8 | Missing management | Family-run; Patel promoters | **CMD Niral K. Patel; CEO Akshaykumar Mathur; COO Anand Sharma; CFO Mehul Mehta** | Q1 deck and transcript [V] |
| 9 | Missing minimum-public-shareholding overhang | Promoter "~87%" is noted as a positive | **87.28% promoter**. Public float must reach 25% within 3 years of listing (by about Sep-2028), so about 12 points of supply are due | screener [V]; SCRR 19A [K] |
| 10 | Missing guidance / expansion | – | **40% revenue CAGR for 3 years**, margins about 16–20%; new **inverter-duty plant (+5,000 MVA) by end-CY26**; tank and radiator backward integration; export target about 15% of revenue | Q1 and Q4 transcripts [V] |

## Voltamp Transformers — `primers/voltamp-transformers.html` (refreshed 6-Aug-26)
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹10,100 Cr Market cap (mid-2026)" | **₹10,505 cr** (13-Oct-26; price ₹10,384) | screener [V] |
| 2 | Stale P/E | "~32× Trailing P/E" | **P/E 33.1** (TTM) | screener [V] |
| 3 | Missing Q1 FY27 | – | Revenue ₹543.8 cr (+28%), volume 4,215 MVA (+29%), **PBILDT 14.8%** (17.2% a year earlier), PAT ₹91.2 cr (+14%, helped by ₹42 cr other income) | CARE rationale Aug-26 [V]; screener [V] |
| 4 | **Missing the new plant's commissioning and capacity** | "a new power-transformer factory" (no size, site or date) | **Unit-III at Jarod: 6,000 MVA, about ₹215 cr, commercial production from 7-Oct-2026**; lifts the rating ceiling from 160 MVA to 250–315 MVA | BSE 4c70a09b [V]; CARE [V]; AR FY26 [V] |
| 5 | Missing installed capacity and order book | – | **Installed capacity 14,000 MVA (Jun-26)**; **order book about ₹1,590 cr (31-Jul-26) = 0.74× revenue**; ₹1,510 cr / 12,377 MVA in May-26 | CARE [V]; AR FY26 [V] |
| 6 | Missing management | Founder Lalitkumar Patel only | **CMD Kanubhai S. Patel; VC & MD Kunjal L. Patel** | AR FY26 [V] |
| 7 | Missing promoter sell-down | "promoters at roughly 30%" (stated without context) | Promoter **37.80% → 30.00% in the Sep-25 quarter** (about 7.8 points sold); DIIs 33.85% are now the largest bloc | screener [V] |
| 8 | Cash pile not quantified | "a mountain of cash" | **Investments ₹995 cr + cash ₹74 cr** (Mar-26); CARE "unencumbered liquid investments ₹667 cr" | screener [V]; CARE [V] |
| 9 | Missing management margin warning | – | AR: "margins are expected to get normalized" because of industry capacity additions; most orders are fixed-price | AR FY26 [V]; CARE [V] |

## Quality Power — `primers/quality-power.html` (refreshed 8-Aug-26)
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Stale m-cap** | "~₹8,700 Cr Market cap (mid-2026)" | **₹11,706 cr** (13-Oct-26; price ₹1,512) | screener [V] |
| 2 | **Wrong P/E basis** | "~47× Approx. P/E on FY26 earnings" (on ₹186 cr consolidated PAT) | **P/E 87.8 on owners' EPS.** FY26 owners' PAT is about ₹121 cr (EPS ₹15.67); minorities take about ₹65 cr | screener [V]; EPS from Q1 deck [V]; [E] |
| 3 | Revenue basis | "~₹1,007 Cr Revenue (FY26, consol.)" | ₹1,007 cr is the company's "total revenue" **including other income**. **Revenue from operations is ₹947 cr** | screener [V]; Q1 deck [V] |
| 4 | EBITDA approximated wrongly | "EBITDA of ~₹191 Cr is derived from the ~19% margin on ~₹1,007 Cr" | Company **EBITDA ₹236.2 cr (23.5%, includes other income)**; screener OP ₹178 cr (18.8%) | Q1 deck [V]; screener [V] |
| 5 | Stale order book | "~₹1,400 Cr Order book (FY26 exit)" | **₹1,945.5 cr at Jun-26**: Endoks ₹801 cr, Mehru ₹585 cr, QP ₹553 cr | Q1 deck and transcript [V] |
| 6 | **Missing Winwin acquisition and QIP** | – | **100% of Winwin Speciality Insulators**: term sheet Jun-26, SPA 23-Sep-26, about ₹272 cr (cash plus **10,17,123 shares at ₹1,460**); **QIP up to ₹700 cr**; **EGM 19-Oct-26** | EGM corrigendum BSE 25d95a55 [V]; cash and QIP terms secondary (sahi.com) |
| 7 | Missing Q1 FY27 and hyperinflation accounting | – | Revenue ₹233 cr (+32%); EBITDA 25.2% reported / 28.3% before Ind AS 29; **PAT ₹46.7 cr after a ₹7.8 cr Ind AS 29 loss at Endoks** | Q1 deck [V] |
| 8 | Missing management | P.T. Pandyan (CMD), Bharanidharan Pandyan (JMD) | Also **CEO Sanjog Mhatre, CFO Rajesh Jayaraman, Group CTO Shylendra Kumar** (ex-Hitachi/ABB) | Q1 transcript and deck [V] |
| 9 | Missing guidance | – | **FY27 revenue +20%; "model us at 20% or high teens EBITDA"**; Q3 standalone margin dip flagged; Mehru about 18% | Q1 transcript [V] |
| 10 | Group map incomplete | Lists Endoks 51%, Mehru 51% | Also **S&S Transformers 98%**, Sukrut Electric 50%, Nebeskie Labs 26% | Q1 deck slide 5 [V] |
| 11 | Sangli plant status | "nearing trial production" | Trial production was targeted for Aug-26, after which about 60 customer audits take about 6 months; peak revenue capacity ₹1,500–1,800 cr | Q1 transcript [V] |
| 12 | Cash conversion understated | "real cash generation" | **CFO/EBITDA 0.3× in FY26** (0.8× FY23–24) | Q1 deck slide 15 [V] |

---
## Unverified / estimated figures in this file (summary)

- **TD Power, Siemens Energy framework (effective 13-Aug-26) and ₹192 cr US order (Oct-26).** Secondary source only (multibagg.ai); the BSE filing was not fetched. **Unverified.**
- **Quality Power–Winwin deal terms.** The 10,17,123 shares at ₹1,460 are verified from the BSE corrigendum. The ₹123.84 cr cash leg, the ₹272.34 cr total, the **₹700 cr QIP** and Winwin's FY26 revenue (₹17.07 cr) come from secondary sources (sahi.com, angelone, powerline). **Unverified.**
- **IPO details** for Atlanta (₹687 cr, ₹754 a share; listed Sep-2025) and Quality Power (₹859 cr, ₹425; listed 24-Feb-2025). Taken from the primers and memory [K]; the prospectuses were not re-fetched. Atlanta's ₹400 cr fresh issue **is** verified from the Q4 FY26 transcript.
- **FY26 order inflow and Mar-26 order book.** TD Power's ₹2,238 cr inflow and ₹1,973 cr Mar-26 book are the primer's figures and were not re-verified. TARIL's FY26 inflow of about ₹2,270 cr is [E] from the order-book roll.
- **Owners' PAT for Quality Power** (≈ ₹121 cr FY26) is [E] = EPS × share count. **Post-QIP m-cap and promoter stake for TD Power** (≈ ₹25,550 cr; ≈ 26.5%) are [E].
- **All net cash/debt, P/B and EV/EBITDA figures, book-to-bill, cover and execution rates** are [E] calculations from verified inputs.
- **Shareholding:** Voltamp, Quality Power and Triveni show Jun-26 as the latest pattern on screener; the Sep-26 filings were not yet reflected. TARIL, TD Power and Atlanta are Sep-26.
- **Atlanta minimum-public-shareholding deadline** (about Sep-2028) is [K] (SCRR rule 19A: 3 years from listing for public float above 10%).
- **Chart-read figures** were garbled in pdftotext extraction: Triveni's FY26 export share of sales (~58%) and aftermarket share (~27–33%), TARIL's reactor share of the order book, and Atlanta's sector-mix percentages.
