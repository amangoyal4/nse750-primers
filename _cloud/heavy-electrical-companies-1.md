# Heavy Electrical Equipment — company packs, batch 1

**Members:** Hitachi Energy India (POWERINDIA / 543187) · BHEL (BHEL / 500103) · Siemens Energy India (ENRIN / 544390) · Siemens Ltd (SIEMENS / 500550) · GE Vernova T&D India (GVT&D / 522275) · Thermax (THERMAX / 500411) · Schneider Electric Infrastructure (SCHNEIDER / 534139)

**Prepared:** 2026-10-13 (UTC). Research subagent, batch 1 of the heavy-electrical sub-sector report.

**How to read the tags:** [V] means the figure comes from a page or PDF fetched in this session. [K] means it is known from memory, and the source is named. [E] means an estimate or a figure I derived; the arithmetic is shown.

## Sources and fetch log

- **screener.in pages.** I fetched these with curl at **2026-10-13 17:21 UTC (22:51 IST)**, which is after market close, so market caps and P/Es are at **13-Oct-2026 closing prices**.
  - `https://www.screener.in/company/BHEL/consolidated/`
  - `/POWERINDIA/` (standalone). The consolidated page is empty.
  - `/ENRIN/` (standalone). The consolidated page is empty.
  - `/SIEMENS/consolidated/`
  - `/GVT%26D/` (standalone). The consolidated page is broken: its schedules return Dec-2010 data.
  - `/THERMAX/consolidated/`
  - `/SCHNEIDER/` (standalone). The consolidated page is empty.
  - I pulled the balance-sheet "Other Assets" schedules (inventories, receivables, cash equivalents) from the screener `api/company/<id>/schedules/` endpoint in the same session.
- **Exchange filings.** These were downloaded from `bseindia.com/xml-data/corpfiling/AttachLive|AttachHis/<id>.pdf` and parsed with pdftotext. BSE IDs are given in each pack.
  - BHEL: Q4 FY26 supplementary info (4-May-26), Q4 FY25 supplementary info (bhel.com), and the board-meeting intimation of 29-Sep-26.
  - Hitachi: Q1 FY27 presentation and transcript (7-Aug-26), Q4 FY26 presentation, the postal-ballot outcome of 13-Oct-26, and Annual Report FY26.
  - ENRIN: Q3 FY26 results, press release and presentation (6-Aug-26), Q2 FY26 transcript (15-May-26), and the litigation update of 9-Oct-26.
  - Siemens Ltd: Q6 FY26 presentation and transcript (28-May-26), Annual Report (18 months to Mar-26), and the Q1 FY27 press release on press.siemens.com (11-Aug-26).
  - GE Vernova T&D: Q1 FY27 presentation and transcript (14-Aug-26), investor-meet deck (17-Sep-26), Annual Report FY26, and the board-meeting notice of 12-Oct-26.
  - Thermax: Q1 FY27 presentation, board-meeting notice of 12-Oct-26, and the FEPL rumour clarification of 9-Oct-26.
  - Schneider: Q1 FY27 presentation and transcript (17-Aug-26) and Annual Report FY26.
- **Broker note.** JM Financial, BHEL Q1 FY27 result update dated 16-Jul-2026, fetched as a PDF via business-standard. This is the only fetched source for BHEL's Q1 FY27 order inflow and order book. I also fetched PL Capital's BHEL Q1 FY27 note page.
- **Failed fetch.** The BSE announcements API (api.bseindia.com) is bot-blocked, so I used the screener document lists to locate filing IDs.

## Results-calendar status (as of 13-Oct-2026)

**Q2 FY27 (Sep-26 quarter) is NOT out for any member.**

| Company | Latest reported period | Next results |
|---|---|---|
| BHEL | Q1 FY27 (Jun-26) | **Board meets Wed 14-Oct-2026** (tomorrow) for Q2 FY27 [V BSE 368d56ed] |
| GE Vernova T&D | Q1 FY27 (Jun-26) | Board **30-Oct-2026** [V BSE fc809859] |
| Thermax | Q1 FY27 (Jun-26) | Board **5-Nov-2026** [V BSE 8bfcba00] |
| Hitachi Energy India | Q1 FY27 (Jun-26) | Trading window closed 30-Sep. Date not yet announced. |
| Siemens Ltd | Q1 FY27 (Apr–Jun 26), the first quarter of its new April–March year | Trading window closed 28-Sep. Date not announced. |
| Schneider Infra | Q1 FY27 (Jun-26) | Not announced |
| Siemens Energy India | **Q3 FY26** (Apr–Jun 26). Its fiscal year runs Oct–Sep. | Q4 and full-year FY26 (to Sep-26) are due around Nov-26. Trading window closed 28-Sep. |

**Listing and corporate-action check.** All seven are listed and trading.
- No pending merger or demerger at any member.
- Siemens Ltd completed the **sale of its Low-Voltage Motors business on 1-Jun-2026** (shown as discontinued operations).
- The Siemens Ltd → ENRIN energy demerger was effective 25-Mar-2025, and ENRIN listed on 19-Jun-2025.
- Thermax disclosed it is evaluating a **growth partner for FEPL** (its renewable subsidiary). This was a clarification only; there is no deal.

---
## 0. Batch summary grid

**Bases.**
- ₹ crore unless stated.
- "OP" is screener operating profit: sales minus expenses, **before other income**. Each pack also gives the company's own EBITDA or "profit from operations" definition.
- Screener figures are consolidated for BHEL, Siemens and Thermax, and standalone for the other four. Hitachi, ENRIN, GVT&D and Schneider have no material subsidiaries.
- Market cap and P/E are screener figures at 13-Oct-26 close, fetched 17:21 UTC.
- P/B, net cash and EV/EBITDA are [E] calculations from screener inputs: EV = m-cap + borrowings − screener cash equivalents (Mar-26), and EBITDA = screener TTM OP.

| Metric | Hitachi Energy India | BHEL | Siemens Energy India | Siemens Ltd | GE Vernova T&D | Thermax | Schneider Infra |
|---|---|---|---|---|---|---|---|
| Basis / year-end | Standalone; Mar (changed Dec→Mar in 2022 via a 15-month FY to Mar-22) | Consolidated; Mar | Standalone; **Sep** (Oct–Sep) | Consolidated; **changed Sep→Mar**; 18-month FY Oct-24–Mar-26 | Standalone; Mar | Consolidated; Mar | Standalone; Mar |
| Latest full year | FY26 (Mar-26) | FY26 | FY25 (Oct-24–Sep-25) | 18m to Mar-26 (12m Apr-25–Mar-26 shown [E]) | FY26 | FY26 | FY26 |
| Revenue, latest FY [V] | 8,148 | 33,782 | 7,827 | 24,846 (18m); 12m 17,457 [E] | 6,206 | 10,774 | 2,891 |
| Prior FY revenue | 6,385 | 28,339 | n.m. (carve-out: "Feb-25 5m" 2,653) | 12m Apr-24–Mar-25 15,609 [E, mixed basis] | 4,292 | 10,387 | 2,637 |
| Growth YoY | +27.6% | +19.2% | n.m. (9M FY26 +31.1%) | ~+12% [E] | +44.6% | +3.7% | +9.6% |
| Screener OP / OPM | 1,268 / 15.6% | 2,572 / 7.6% | 1,532 / 19.6% | 18m 2,863 / 11.5%; 12m 1,992 / 11.4% [E] | 1,706 / 27.5% | 1,038 / 9.6% | 371 / 12.8% |
| Company EBITDA margin (company basis) | Op. EBITDA 1,252.5 / **15.4%** | 3,189 / 9.4% (standalone, company "EBITDA") | PfO (EBIT) 1,410 / 18.0% | Q6 EBITDA 9.7%; 6M 10.3% | 1,683.5 / **27.1%** | n.d. (PBT 9.4%) | n.d. (screener only) |
| PAT, latest FY | 988 | 1,600 | 1,100 | 2,754 (18m); 12m 1,556 [E] | 1,233 | 720 | 213 |
| ROCE / ROE (screener) | 29.4% / 21.9% | 9.1% / 6.2% | 67.8% / 50.5% | 21.4% / 19.2% | 77.4% / 57.4% | 13.9% / 10.6% | 29.6% / 38.2% |
| Borrowings (Mar-26) | 86 | 8,187 | 216 | 307 | 24 | 2,353 | 633 |
| Cash equivalents (screener, Mar-26) | 4,689 | 11,867 | 3,295 | 5,612 | 1,528 | 1,191 (+ investments 1,784) | 358 |
| Net cash / (debt) [E] | +4,603 | +3,680 | +3,079 | +5,305 (pre-LVM proceeds) | +1,504 (company: "available cash" ₹2,930 cr at Jun-26 incl. cash-pool loan) | (1,162) on cash only; +622 incl. investments | (275) |
| M-cap 13-Oct-26 [V] | 1,35,220 | 1,54,275 | 1,11,877 | 1,32,679 | 1,07,114 | 39,293 | 28,917 |
| Share price | ₹30,250 | ₹442 | ₹3,123 | ₹3,742 | ₹4,191 | ₹3,299 | ₹1,209 |
| P/E (screener TTM) | 114 | 63.4 | 73.3 | 88.3 (≈90× on continuing PAT; 40× if the LVM gain is included) | 79.3 | 71.4 | 149 |
| P/B [E] | 26.1 | 5.9 | 23.2 | 9.6 | 39.8 | 7.1 | 41.9 |
| EV/EBITDA (TTM OP) [E] | 91.7 | 44.5 | 53.8 | 66.8 | 60.1 | 46.5 | 86.9 |
| Latest quarter | Q1 FY27 (Jun-26) | Q1 FY27 | Q3 FY26 (Apr–Jun 26) | Q1 FY27 (Apr–Jun 26) | Q1 FY27 | Q1 FY27 | Q1 FY27 |
| Latest-quarter revenue (YoY) | 2,494 (+68.6%) | 7,698 (+40.3%) | 2,486 (+39.3%) | 4,714 (+14.8%) | 1,836 (+38%) | 2,303 (+6.7%) | 651 (+4.7%) |
| Latest-quarter OPM (screener) | 14.6% (co. Op. EBITDA 16.0%) | 6.5% | 23.6% (co. PfO 21.9%) | 9.1% (co. PfO 7.6%) | 25.1% (co. EBITDA 25.1%) | 3.0% | 5.2% |
| Latest-quarter PAT | 294 (+124%) | 377 (vs −456) | 441 (+68%) | 343 continuing; 2,143 reported incl. LVM gain | 363 (+25%) | 22 (−86%) | 12 (−71%) |
| **Order inflow, latest quarter** | 5,097 (−55%; ex-HVDC +26%) | 26,745 (≈2× YoY) [V JM] | ~3,384 [E from backlog roll] | 6,328 (+16.5%; ex-HSR +43.9%) | 1,137 (−30%) | 2,809 (+2%) | 915 (record) |
| Order inflow, last FY | 18,457 (FY26) | 75,916 (FY26; FY25 92,535) | n.d. | Q6 6,730; 6M Oct-25–Mar-26 11,560 | ~14,776 (FY26) | ~13,871 (primer, unverified) | ~3,430 (primer, unverified) |
| **Order backlog (Jun-26)** | **32,222** | **~2,60,000** ([V JM] "INR 2.6tn") | **19,331** | **46,670** | **20,930** | **14,045** | **~2,100** |
| Backlog / TTM revenue [E] | 3.5× | 7.2× | 2.0× | 2.6× | 3.1× | 1.3× | 0.7× |
| Book-to-bill, latest quarter [E] | 2.0 | 3.5 | ~1.4 | 1.34 | 0.62 | 1.22 | 1.41 |
| Export share | ~25% of revenue | ~1% of order book; Dangote order ₹2,000–2,500 cr in Q1 | 28.4% of 9M revenue (21.4% a year earlier) | 12.8% of revenue | 30% of Q1 revenue (33% FY26); 54% of Q1 orders | n.d. | 10–12% of revenue |
| Working-capital days (screener FY) | −46 | 86 (JM: 164 incl. contract assets) | 35 (FY25) | 71 (18m, distorted) | 6 | −40 | 44 |
| Debtor / inventory / payable days | 86 / 119 / 246 | 73 / 309 / 231 | 90 / – / – | 57 / 60 / 94 | 128 / 132 / 170 | 75 / 60 / 135 | 103 / 84 / 126 |
| Royalty / licence to parent | ₹241.85 cr FY26 (3.0% of revenue) [V AR] | n.a. (PSU) | n.d. | ₹147 cr over 18m (0.52% of turnover) [V AR] | Tech licence fee ₹117.8 cr FY26 (₹63.7 cr FY25) [V AR] | n.a. | Royalty ₹0.6 cr [V AR, ₹ lakh table] |
| Promoter (latest) | 71.31% (Sep-26) | 58.17% GoI (Sep-26) | 75.00% (Jun-26) | 75.00% (Jun-26) | 51.00% (Jun-26) | 61.99% (Jun-26) | 75.00% (Jun-26) |
| Capacity / capex | ₹4,000 cr total capex; Karjan LPT factory due Dec-2028 | 15 units; 2.6L cr OB | Kalwa transformers 15,000→30,000 MVA; ₹740 cr brownfield + ₹2,060 cr greenfield | Goa MV / vacuum-interrupter plant nearing COD | ~₹1,000 cr fresh capex to Dec-2028 | CWIP ₹1,442 cr (green assets) | ~₹500 cr over 3 years; Kolkata export plant |

---

## 0b. Cross-company read-across

1. **Grid-equipment margins have split into two tiers, and the pure transmission MNCs are on top.**
   - GE Vernova T&D (27.1% EBITDA FY26, 25.1% in Q1), Siemens Energy India (21.9% PfO in Q3; 23.6% screener OPM) and Hitachi Energy India (16.0% Op. EBITDA in Q1) earn transformer- and GIS-shortage economics.
   - Schneider Infra (5.2% screener OPM in Q1) and Siemens Ltd (7.6% PfO in Q1) are in medium-voltage and LV products. There, copper, aluminium, silver and a weak INR are squeezing margins: "legacy" fixed-price orders booked before Dec-25 are being executed at old prices (Schneider call) [V].
   - The read-across is that **price-pass-through is the margin moat**. Hitachi says 60–65% of its orders are pass-through [V]. Schneider is still working through fixed-price legacy orders [V].
2. **Order momentum is decelerating at the HV end as HVDC timing gets lumpy, while base orders hold up.**
   - GVT&D's Q1 orders fell 30% because there were fewer TBCB awards. Its backlog fell 2.5% QoQ, and its book-to-bill was 0.62 [V].
   - Hitachi's Q1 orders fell 55% against a big HVDC base quarter, but rose 26% excluding HVDC [V].
   - Siemens Ltd's Q1 orders rose 16.5% (43.9% excluding the high-speed-rail order), and ENRIN's backlog rose 16.4% [V].
   - **All three HVDC-capable MNCs flag a greenfield HVDC tender expected to be awarded in about 6 months** (Hitachi call) [V]. Hitachi said the Bhadla project "is starting" and Khavda is "picking up" [V].
3. **Exports are now a margin lever for the MNC subsidiaries, and the parent controls that tap.**
   - GVT&D: 54% of Q1 orders were exports, mostly to GE Vernova group entities. Shareholders approved a material related-party transaction (RPT) for a US data-centre order, which has not been booked yet [V].
   - Hitachi: shareholders approved material RPTs with its Sweden, USA and Switzerland group companies on 12-Oct-26 [V].
   - ENRIN: exports went from 21.4% to 28.4% of revenue. Management says "export growth is at the discretion of Siemens Energy" [V].
   - The listed subsidiaries are becoming **captive export factories for their parents**. That raises RPT and transfer-pricing scrutiny but also lifts margins.
4. **The thermal comeback is concentrated at BHEL.**
   - BHEL's Q1 FY27 order inflow was ₹26,745 cr, including the 3×800 MW NTPC Meja EPC order of about ₹21,000 cr. Its order book is about ₹2.6 lakh cr, or 7.2× TTM revenue [V JM].
   - BHEL now carries more than 15 times the backlog of Hitachi and GVT&D combined but earns a single-digit margin.
   - Execution is the swing factor. Q1 revenue rose 40%, the first positive Q1 PAT in eight years [V JM], and collections rose 34% [V JM].
   - Note that **FY26 inflow (₹75,916 cr) was 18% BELOW FY25 (₹92,535 cr)** [V BHEL decks]. The record is the order book, not the inflow.
5. **Working capital diverges sharply.**
   - Hitachi (−46 days) and Thermax (−40) are customer-advance funded, GVT&D is near zero (6), and Schneider is at 44.
   - BHEL has 309 inventory days, ₹38,613 cr of receivables plus contract assets (standalone, Mar-26), and JM-computed working capital of 164 days.
   - BHEL is the only member whose cash flow depends on government-utility payment discipline.
6. **Valuations remain extreme and compress only slowly.**
   - P/Es range from 63× (BHEL) to 149× (Schneider). EV/EBITDA runs from 44× (BHEL) to 92× (Hitachi).
   - Since the primers' Jul-26 refresh, m-caps fell for **Hitachi (−12%), ENRIN (−10%), GVT&D (−12%), Thermax (−28%) and Schneider (−19%)**, and rose for BHEL (+7%) and Siemens (+3%) [E vs primer covers]. Every primer cover m-cap is stale.
7. **Data-calendar traps across the batch.** Three different fiscal calendars are now in use:
   - ENRIN runs **Oct–Sep**. Its "FY26" ends Sep-26, so its "Q3 FY26" is the Jun-26 quarter.
   - Siemens Ltd **moved to Apr–Mar**, after an 18-month FY to Mar-26. Its old "Q6 FY26" is the Mar-26 quarter, and Q1 FY27 is Apr–Jun 26.
   - Everyone else runs Apr–Mar. Hitachi already converted from Dec to Mar in 2022.
   - Any cross-company "FY26" comparison must align to TTM or the Jun-26 quarter, as the grid above does.
8. **Chinese entry and pricing.** Hitachi's management was asked about the government allowing four Chinese players with 60–65% local content (GIS and transformers). It said it sees "no material impact" [V transcript]. This risk is worth tracking for transformer pricing in FY28 and beyond.

---
## 1. Hitachi Energy India (NSE: POWERINDIA, BSE: 543187)

**Identity and status.**
- Listed and active. This is the Indian arm of Hitachi Energy Ltd (Switzerland), formerly ABB Power Products & Systems India.
- MD & CEO is **N. Venu**; CFO is **Ajay Singh** (both on the Q1 FY27 call, 7-Aug-26) [V BSE 64add9a3].
- **Fiscal year:** April–March. The company changed from a December year-end to March via a **15-month FY ended Mar-2022** [V screener P&L column "Mar 2022 15m"]. There has been no further change; FY26 is Apr-25–Mar-26 [V Q4 FY26 deck].
- Screener's consolidated page is empty, so all figures below are **standalone** (https://www.screener.in/company/POWERINDIA/, fetched 13-Oct-26 17:21 UTC).
- Shares outstanding: 4,45,72,363 [V postal-ballot results, BSE 593b8615].

### Financials (screener standalone [V] unless noted)
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 5,237 | 6,385 | **8,148** (+27.6%) | 9,162 |
| Operating profit (pre-other income) | 359 | 605 | 1,268 | 1,424 |
| OPM | 7% | 9% | **15.6%** | 16% |
| Other income | 9 | 57 | 185 | 229 |
| PAT | 164 | 384 | **988** (+157%) | 1,150 |
| CFO | 252 | 1,494 | 1,245 | – |

- **Company basis.**
  - FY26 Op. EBITDA was ₹1,252.5 cr, a **15.4%** margin, against ₹592.3 cr (9.3%) in FY25.
  - FY26 PBT before exceptional items was ₹1,375.2 cr. There was a labour-code exceptional charge of ₹54.2 cr. PAT was ₹987.8 cr [V Q4 FY26 deck, BSE 72b85f9a].
  - Op. EBITDA excludes depreciation, intangibles amortisation, restructuring, non-operational pension and unrealised FX/commodity timing differences.
  - Screener OP (₹1,268 cr) is close to Op. EBITDA because both sit before other income.
- **Q1 FY27 (Jun-26)** [V deck BSE 5158b364]:
  - Revenue ₹2,493.7 cr (+68.6% YoY, −9.5% QoQ).
  - Op. EBITDA ₹399.9 cr, a 16.0% margin, against 11.5% a year earlier.
  - PBT ₹389.5 cr (15.6%); PAT ₹294.2 cr (+123.5%).
  - The FX/commodity loss line was ₹60 cr, including a ₹36.4 cr unrealised FX loss.
  - Material cost was 59.4% of revenue against 55.6% a year earlier. Management attributed this partly to HVDC revenue entering the mix.
- **Q2 FY27:** not reported yet. The trading window closed on 30-Sep-26 and no board date has been announced.
- **Balance sheet (Mar-26)** [V screener schedules]:
  - Borrowings ₹86 cr; cash equivalents ₹4,689 cr (₹3,807 cr in Mar-25). Net cash is **about ₹4,600 cr** [E].
  - The Mar-25 jump came from the ~₹2,520 cr QIP in FY25 [K: Hitachi Energy India QIP, Dec-2024]. Screener financing inflow in FY25 was ₹2,295 cr [V].
  - Reserves rose from ₹1,351 cr to ₹4,205 cr.
- **Working capital (FY26, screener):** debtor days 86, inventory days 119, payable days 246, **WC days −46**. That is advance-funded and the best in the batch. CFO/OP was 138%.
- **Valuation (13-Oct-26 close) [V]:**
  - M-cap ₹1,35,220 cr; price ₹30,250; 52-week high/low ₹38,800 / ₹16,104.
  - P/E 114; book value ₹1,161 per share, so P/B is about 26× [E].
  - ROCE 29.4%, ROE 21.9%. EV/EBITDA on TTM OP is about 92× [E].

### Native KPIs
- **Order inflow** [V Q4 FY26 and Q1 FY27 decks]. The Q2 FY26 figure is derived as FY26 total minus Q1, Q3 and Q4.

  | Quarter | Q1 FY26 | Q2 FY26 [E] | Q3 FY26 | Q4 FY26 | **Q1 FY27** |
  |---|---|---|---|---|---|
  | Orders ₹ cr | 11,339.2 (incl. large HVDC) | ~2,217 | 2,477.6 | 2,422.5 | **5,096.5** |

  - Full-year inflow: FY25 ₹18,173.8 cr; FY26 ₹18,456.5 cr (+1.6%).
  - Q1 FY27 orders fell 55.1% YoY because of the HVDC base. **Excluding HVDC they rose 26.1%** YoY and 39.7% QoQ.
  - Q1 FY27 included an **offshore-wind HVDC export order of about ₹1,700 cr** (2 GW wind evacuation, Europe) [V transcript].
  - Q1 also brought the first BESS order (165 MW / 330 MWh at Hebbatam, Andhra Pradesh) and a 2 GW pooling station (56 bays of 400 kV GIS) for a 100 GW solar park in western India.
  - Data-centre orders: more than 560 MVA of power transformers, 800 MVA of dry transformers, 230/33 kV GIS, and a 40×2,500 kVA order in Hyderabad.
- **Order backlog:**
  - **₹32,222.1 cr at Jun-26** (+10.6% YoY, +9.0% QoQ) [V].
  - That implies a Mar-26 backlog of about ₹29,560 cr [E: 32,222 ÷ 1.09], consistent with the primer's ₹29,555 cr.
  - Backlog / TTM revenue = **3.5×** [E]. Q1 FY27 book-to-bill was 2.0×; FY26 book-to-bill was 2.27×.
  - The company does not disclose the HVDC share of the backlog ("you should please respect that").
- **Execution rate:** Q1 revenue ÷ opening backlog = 2,494 ÷ ~29,560 = **8.4% per quarter** [E], or about 34% a year.
- **HVDC.**
  - Khavda–Nagpur (6 GW, ±800 kV LCC, ~950 km; won FY25 [K: company announcement, Mar-2025]) is "picking up". Bhadla–Fatehpur is "starting" [V Q1 transcript]. Both are contributing revenue at lower gross margin.
  - Commissioned: the 1,000 MW Kudus–Aarey HVDC in Mumbai, India's first city in-feed [V deck].
  - **Pipeline:** "a full greenfield HVDC project is already under bidding; we expect that should be awarded in 6 months" [V].
- **Segment and end-market mix:**
  - No segment-revenue split is disclosed; the company has a single reportable segment.
  - Q1 FY27 domestic orders excluding HVDC: utilities share fell, while industries, data centres and renewables grew [V slide 10; chart values garbled in extraction].
  - About 60–65% of orders carry price pass-through [V].
- **Exports:** "Export contribution on the revenues is around 25%" and "trending 25–26%" [V Q1 transcript]. The primer's 30–37% is a quarterly order-intake figure, not revenue.
- **Capacity and capex:**
  - The Oct-2024 capex plan was ₹2,000 cr. A **further ₹2,000 cr** for the **Karjan (Vadodara) large-power-transformer factory** brings the **cumulative total to ₹4,000 cr** [V Q4 FY26 and Q1 FY27 decks].
  - Karjan groundbreaking was **12-Jun-2026**, with a **December 2028 completion target** [V].
  - Plants include Vadodara (Maneja, Savli), Bengaluru (Peenya, Doddaballapur), Mysore and others [V deck photos / K].
  - Transformer MVA capacity: no figure was verified this session.
- **Royalty to parent:** **₹241.85 cr paid to Hitachi Energy Ltd in FY26**, about 3.0% of revenue [V Annual Report FY26, BSE ec6df9db].
- **Related-party transactions:** a postal ballot passed on **12-Oct-2026** approved material RPTs with Hitachi Energy Sweden AB, Hitachi Energy USA Inc and Hitachi Energy Ltd (Switzerland). The resolutions passed with about 99.98% in favour of votes polled; public-institutional turnout was only 15.2% [V BSE 593b8615].
- **Ownership** [V screener]:
  - Promoter **71.31%**. It fell from 75% after the Mar-25 quarter QIP dilution, not a sale.
  - FIIs 11.96%, DIIs 6.54%, public 10.19% (Sep-26).
  - FIIs rose from 4.96% in Mar-25 to 12.44% in Jun-26 while DIIs fell from 12.34% to 6.54%.
- **Concentration:** the HVDC projects (Khavda and Bhadla) are large single-customer exposures to POWERGRID and Adani-type TBCB winners. Utilities and EPCs dominate the domestic channel [V deck].
- **Guidance:** there is no numeric guidance. The stated priorities are converting the backlog into revenue and margin growth, building capacity, and pushing exports, service and digital [V deck slide 14].

### Story bullets
- **The backlog is ~₹32,200 cr, 3.5× TTM revenue, and it is converting at expanding margins.** Op. EBITDA went from 9.3% (FY25) to 15.4% (FY26) to 16.0% (Q1 FY27), driven by operating leverage on the 2024–25 HVDC and data-centre wins.
- **Q1 FY27 orders fell 55% YoY on the headline but rose 26% excluding HVDC.** The next re-rating trigger is the greenfield HVDC award management expects in about 6 months.
- **Capex has been doubled to ₹4,000 cr**, with the Karjan transformer plant due Dec-2028. This is a bet that the transformer shortage lasts. Royalty of ₹242 cr a year (3% of revenue) plus newly approved material RPTs keep parent-subsidiary economics in focus.
- **The valuation (114× P/E, about 92× EV/EBITDA) leaves no room for error.** The m-cap is down about 12% from the primer's ₹1.53 lakh cr.

---
## 2. BHEL — Bharat Heavy Electricals (NSE: BHEL, BSE: 500103)

**Identity and status.**
- Listed and active. Maharatna CPSE under the Ministry of Heavy Industries.
- **Fiscal year:** April–March.
- Screener **consolidated** basis (https://www.screener.in/company/BHEL/consolidated/, fetched 13-Oct-26 17:21 UTC). Subsidiaries and JVs are small, so standalone and consolidated revenue are almost identical (33,782 on both).
- **Management change:** Executive Director Y. Srinivasa Rao superannuated on 24-Sep-2026 and Ch. Gowri Shankar was appointed [V screener announcement list, 25-Sep-26]. I did not verify the CMD name this session. The primer names none in the sections read.
- **Q2 FY27 results: board meeting Wed 14-Oct-2026** [V BSE 368d56ed]. Trading window closed 1–16 Oct.

### Financials (screener consolidated [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 23,893 | 28,339 | **33,782** (+19.2%) | 35,993 |
| Operating profit | 711 | 1,399 | 2,572 | 3,383 |
| OPM | 3.0% | 4.9% | **7.6%** | 9% |
| Other income | 608 | 524 | 869 | 909 |
| Interest | 828 | 906 | 986 | 715 |
| PAT | 282 | 534 | **1,600** | 2,432 |
| CFO | −3,713 | 2,192 | **5,837** | – |

- **Company basis (standalone)** [V Q4 FY26 supplementary info, BSE d67af566, 4-May-26]:
  - FY26 revenue ₹33,782 cr; **EBITDA ₹3,189 cr** (₹1,745 cr in FY25); PBT ₹2,116 cr; **PAT ₹1,578 cr** (₹513 cr in FY25).
  - Q4 FY26: revenue ₹12,310 cr, EBITDA ₹2,005 cr, PAT ₹1,283 cr.
  - Net provisions were a **write-back of ₹177 cr in FY26** (a charge of ₹158 cr in FY25).
- **Three EBITDA bases.**
  - Company EBITDA of ₹3,189 cr (9.4%) evidently includes other income or provision effects.
  - JM Financial's EBITDA is ₹2,342 cr (6.9%) [V JM 16-Jul-26].
  - Screener OP is ₹2,572 cr (7.6%, consolidated, before other income).
  - **Use screener 7.6% for cross-company comparison**, and note that the company's own figure is higher.
- **Q1 FY27 (Jun-26)** [V screener plus JM]:
  - Revenue ₹7,698 cr (+40.3% YoY). JM's standalone figure is ₹7,698 cr.
  - Screener OP ₹504 cr (6.5%); JM EBITDA ₹504 cr, 6.5% against −9.8% a year earlier, partly from provision withdrawal.
  - Gross margin 31.2% (+202 bp). Interest ₹140 cr (₹181 cr a year earlier). **PAT ₹377 cr against a ₹456 cr loss a year earlier — the first positive Q1 in eight years** [V JM].
  - Segments [V JM]: Power revenue about ₹5,900 cr (+52%), EBIT margin 10% (−13% a year earlier). Industry revenue about ₹1,800 cr (+12%), EBIT 14% (19% a year earlier).
  - Collections were about ₹11,000 cr (+34%).
- **Balance sheet (Mar-26)** [V screener]:
  - Borrowings ₹8,187 cr (₹9,015 cr in Mar-25). These are mostly working-capital loans and bills discounting.
  - Cash equivalents ₹11,867 cr (₹7,612 cr), so **net cash is about ₹3,680 cr** [E].
  - Inventories ₹14,037 cr; screener trade receivables ₹6,796 cr.
  - **Company:** trade receivables ₹9,223 cr plus **contract assets ₹29,390 cr = ₹38,613 cr** (standalone, Mar-26) [V supplementary info]. Screener's receivables line does not capture contract assets.
- **Working capital:** screener debtor days 73, inventory days 309, payable days 231, WC days 86, cash-conversion cycle 151. **JM: "At end-FY26, working capital stands at 164 days, which we estimate at 105 days during FY27E"** [V].
- **Valuation (13-Oct-26) [V]:**
  - M-cap **₹1,54,275 cr**; price ₹442; 52-week high/low ₹456 / ₹230.
  - **P/E 63.4** (TTM). Book value ₹75.1, so P/B is 5.9× [E]. Dividend yield 0.32%. ROCE 9.14%, ROE 6.23%.
  - EV/EBITDA on TTM OP is about 44.5× [E].

### Native KPIs
- **Order inflow** [V BHEL decks]:

  | Year | FY24 | FY25 | FY26 |
  |---|---|---|---|
  | Order inflow ₹ cr | 77,907 | **92,535 (highest ever)** | **75,916 (−18%)** |

  - FY26 split: Power ₹59,256 cr, Industry ₹16,451 cr (+50% in Industry). Export orders were only ₹209 cr.
  - Q4 FY26 inflow was ₹30,011 cr (Power ₹24,470 cr, Industry ₹5,441 cr). Q4 FY25 inflow was ₹44,588 cr.
  - **Q1 FY27 inflow: ₹26,745 cr** (Power about ₹22,625 cr) [V JM: "INR 267bn"; the power split comes from a search snippet and is unverified].
- **Major Q1 FY27 orders** [V JM]:
  - **3×800 MW NTPC Meja STPP EPC, about ₹21,000 cr**, with commissioning in 70 months.
  - **Dangote Petroleum Refinery (Nigeria): ₹2,000–2,500 cr for eight gas turbine generators**, BHEL's largest-ever export order.
- **FY26 orders** [V deck]:
  - **±800 kV, 6,000 MW HVDC Bhadla–Fatehpur** (Industry segment, BHEL's terminal share).
  - 6×800 MW APL Assam Phase I & II and Kawai (TG packages); 1×660 MW MPPGCL Amarkantak-6 EPC; 1×660 MW Satpura-12 EPC; 3×800 MW Telangana Stage-II main plant (BTG); 1×800 MW NTPC Darlipali-II EPC.
  - 382 MW Sunni Dam hydro (E&M); coal-to-ammonium-nitrate gasification packages at Jharsuguda.
  - 36,762 MVA of transmission products; 'Kavach' rail signalling.
- **Order book:**
  - Mar-25: about ₹1.97 lakh cr (Power ₹1,57,922 cr = 80%, Industry ₹34,826 cr = 18%, Export ₹3,580 cr = 2%).
  - **Mar-26: about ₹2,40,000 cr** (Power ₹1,92,298 cr = 81%, Industry ₹43,397 cr = 18%, Export ₹3,362 cr = 1%).
  - **Jun-26: about ₹2.6 lakh cr** (₹2.0 lakh cr at Jun-25) [V JM]. A search snippet gives ₹2,60,255 cr, which is unverified to the rupee.
  - JM breakdown of the Jun-26 book: **"INR 0.7tn" non-thermal** — nuclear ₹12,000 cr, transmission ₹14,000 cr, defence ₹7,000 cr, transportation ₹1,500 cr, coal gasification ₹8,000 cr, hydro ₹5,500 cr, spares and services ₹4,000 cr [V JM]. *The listed parts sum to only ₹52,000 cr; JM's ₹70,000 cr headline is internally inconsistent, so use ₹52,000–70,000 cr.*
- **Backlog cover:** 2.6 lakh ÷ TTM revenue ₹35,993 cr = **7.2×** [E]. Q1 book-to-bill was 3.5×.
- **Execution rate:** Q1 revenue ÷ opening book = 7,698 ÷ ~2,40,000 = **3.2% per quarter** (about 13% a year) [E]. That is the slowest in the batch and is the crux of the investment case.
- **Execution / operations:**
  - About 8.9 GW commissioned or synchronised in FY26 (8,340 MW domestic, 510 MW export) [V].
  - Q4 FY26: 800 MW Yadadri U4, 800 MW North Chennai-III, 660 MW Sagardighi U5.
- **Thermal pipeline (JM):** 39 GW under construction, 22 GW awarded but not yet started, and 35 GW under tendering. The "97 GW target now extends to 110 GW+" [V JM].
- **Capacity:** 15 manufacturing units. From 1-Apr-26, CFFP Haridwar merged into HEEP Haridwar [V deck]. Cumulative: about 214 GW of power-generating equipment supplied in India and abroad, and more than 8,40,000 MVA of transmission equipment.
- **Ownership** [V screener]:
  - **Promoter (President of India) 58.17%**, down from 63.17% in the Mar-26 quarter. That is a 5-point government OFS [K: DIPAM OFS, Q4 FY26]; the screener shareholding change is [V].
  - FIIs 9.94%, DIIs 21.80%, government 0.07%, public 10.02% (Sep-26). About 16.0 lakh shareholders.
- **Concentration:** about 81% of the book is Power, dominated by NTPC, state gencos and Adani-group thermal BTGs. Export is about 1% (rising with Dangote).
- **Guidance:** there is no formal numeric guidance in the fetched documents. JM's estimates are FY27 revenue ₹41,900 cr (+24%), gross margin at least 31.5%, and EBITDA margin 10.4%.

### Story bullets
- **Thermal's comeback is BHEL's book:** about ₹2.6 lakh cr (7.2× revenue), plus a ₹21,000 cr NTPC Meja EPC in Q1 FY27. **But FY26 inflow fell 18% from FY25's record ₹92,535 cr.** The record is the backlog, not the inflow run-rate.
- **Execution is finally visible:** Q1 FY27 revenue +40%, the first positive Q1 PAT in eight years, collections +34%, and lower interest cost. Q2 FY27 results tomorrow (14-Oct) will test whether execution can hold above ₹8,000 cr a quarter.
- **Diversification is real but small:** about ₹52,000–70,000 cr non-thermal (nuclear, the Bhadla–Fatehpur HVDC terminal, coal gasification, defence). The ₹2,000–2,500 cr Dangote order is the largest export order in BHEL's history.
- **Valuation (63× P/E, 44× EV/EBITDA) is the cheapest in the batch on multiples but is priced for margin normalisation.** Working capital (164 days per JM; ₹38,600 cr of receivables plus contract assets) is the key bear point.

---
## 3. Siemens Energy India (NSE: ENRIN, BSE: 544390)

**Identity and status.**
- Listed and active. This is the energy business **demerged from Siemens Ltd**.
- The scheme was approved by NCLT Mumbai on 25-Mar-2025 and **made effective on 25-Mar-2025, with an appointed date of 1-Mar-2025**. Record date 7-Apr-2025; 35,61,20,505 shares allotted on 14-Apr-2025; **listed on BSE/NSE on 19-Jun-2025** [V Q3 FY26 results notes, BSE 8a59a0ba].
- MD & CEO **Guilherme Vieira de Mendonça**; ED & CFO **Harish Shekar** [V].
- **Fiscal year: October–September**: "we follow a fiscal year which is from October to September" [V Q2 transcript, BSE 197a7a32]. So:
  - **FY25 = Oct-24 to Sep-25** (screener column "Sep 2025", revenue ₹7,827 cr).
  - Screener's **"Feb 2025 (5m)"** column is the pre-appointed-date carve-out stub, Oct-24 to Feb-25 (revenue ₹2,653 cr). The **"Sep 2024 (8m)"** column is the shell company from incorporation, with no revenue.
  - **The latest quarter is Q3 FY26 = Apr–Jun 2026** (reported 6-Aug-26).
  - **Q4 FY26 (Jul–Sep 26) and audited FY26 are not yet out** (expected around Nov-26).
- Screener consolidated is empty, so all figures are **standalone** (https://www.screener.in/company/ENRIN/, fetched 13-Oct-26 17:21 UTC).
- **Litigation (9-Oct-26):** Russia's Supreme Court rejected the appeal, so the company must pay **₹44.38 cr (₹443.76 mn) plus 8% interest**. This is a legacy matter inherited under the demerger scheme [V BSE 16567cb4].
- **Management change (5-Oct-26):** Ajay Jain was appointed Execution Unit Head, Grid Technologies Transformers [V screener announcement].

### Financials
| ₹ cr | FY25 (Oct-24–Sep-25) | 9M FY25 | **9M FY26** | Q3 FY25 | **Q3 FY26** | TTM (Jun-26, screener) |
|---|---|---|---|---|---|---|
| Revenue | 7,827 | 5,181 | **6,791** (+31.1%) | 1,785 | **2,486** (+39.3%) | 9,436 |
| Profit from operations (EBIT, company) | 1,410 (18.0%) | 963 (18.6%) | 1,437 (**21.2%**) | 314 (17.6%) | 545 (**21.9%**) | – |
| Screener OP (pre-depreciation, pre-other income) | 1,532 (19.6%) | – | – | 340 | 586 (23.6%) | 2,024 (21%) |
| PBT | 1,488 | 1,009 | 1,514 (after ₹51.9 cr labour-code exceptional) | 352 | 593 | 1,992 |
| PAT | 1,100 | 741 | **1,128** (+52.2%) | 263 | **441** (+67.8%) | 1,488 |

Sources: [V results statement and press release, BSE 8a59a0ba; screener]. Company "profit from operations" is segment EBIT, after depreciation and before other income and finance cost.

- **One-offs** [V Q2 transcript]:
  - H1 FY26 included **₹110 cr of FX and commodity gains, worth about 260 bp of margin**. Underlying PfO was 18.9% against 17.2% in H1 FY25.
  - H1 FY25 included about 1.9% of one-offs (accrual releases and demerger stamp duty, ₹54.6 cr).
  - The press release does not split Q3 FY26 FX. The deck notes "Operational profit margin excluding FX/Commodity gains" improved 260 bp YoY for 9M.
- **Balance sheet (Mar-26, screener)** [V]:
  - Borrowings ₹216 cr (lease liabilities); cash equivalents ₹3,295 cr (₹3,462 cr in Sep-25), so **net cash is about ₹3,080 cr** [E].
  - Reserves ₹4,741 cr; total assets ₹10,218 cr.
  - Company Jun-26 total assets were ₹10,854 cr. "Unallocated" assets (largely cash, deposits and tax) were ₹4,174 cr [V segment statement], suggesting the cash-plus-deposits pile is larger than screener's cash line.
  - FY25 CFO was ₹3,670 cr. FY25 investing outflow was ₹3,483 cr (bank deposits) [V screener].
- **Working capital:** screener FY25 debtor days 90, WC days 35. Mar-26 receivables ₹2,534 cr and inventories ₹986 cr [V schedules]. Segment liabilities of ₹5,494 cr against segment assets of ₹6,680 cr (Jun-26) point to heavy customer advances [V].
- **Valuation (13-Oct-26) [V]:**
  - M-cap **₹1,11,877 cr**; price ₹3,123; 52-week high/low ₹3,968 / ₹2,105.
  - **P/E 73.3**; book value ₹135, so P/B is 23× [E]. ROCE 67.8%, ROE 50.5%. EV/EBITDA is about 54× [E].

### Native KPIs
- **Order backlog:**
  - **₹19,331 cr at Jun-26 (+16.4% YoY from ₹16,601 cr)** [V press release].
  - Mar-26 was about ₹18,400 cr ("₹150bn → ₹184bn", +22.2%) [V Q2 transcript]; the primer's ₹18,433 cr is consistent.
  - By segment (Jun-26): **Power Transmission ₹13,490 cr (+27.5% YoY)** and **Power Generation ₹5,840 cr (−3.2%)** [V deck].
- **Backlog cover:** 19,331 ÷ TTM revenue 9,436 = **2.0×** [E].
- **Order inflow:**
  - The company does not disclose order intake.
  - Derived Q3 FY26 inflow ≈ closing backlog − opening backlog + revenue = 19,331 − 18,433 + 2,486 ≈ **₹3,384 cr** [E]. That gives a book-to-bill of about 1.36.
  - Power Generation service orders in H1 were "₹23bn vs ₹21bn" [V Q2 transcript].
- **Segment mix, 9M FY26** [V statement]:
  - **Power Transmission:** revenue ₹3,789 cr (+33.9%), EBIT ₹787 cr (**20.8%**); Q3 margin 21.6%.
  - **Power Generation:** revenue ₹3,001 cr (+27.6%), EBIT ₹650 cr (**21.7%**); Q3 margin 22.3%.
  - So PT is 55.8% and PG 44.2% of revenue. **The company reports two segments, not three.**
  - Service was about 27% of H1 revenue (about ₹1,200 cr) [V].
- **Exports:** **28.4% of 9M FY26 revenue against 21.4% a year earlier** [V deck]. These are mainly PT products (GIS, transformers, including a 240 MVA transformer to the USA; GIS for an African metro; offshore GIS to the Middle East). Management: export growth "is more on discretion of Siemens Energy to use our capacity" [V].
- **Capacity and capex** [V Q2 transcript]:
  - **₹740 cr brownfield:** Kalwa transformer factory **doubling from 15,000 to 30,000 MVA**, plus switchgear expansion at Chhatrapati Sambhajinagar (Aurangabad).
  - **₹2,060 cr greenfield transformer factory:** approved, with the state not yet chosen (as of May-26).
  - A Raipur service workshop has been announced.
- **HVDC / FACTS:** the ±300 MVAr STATCOM order was booked in Q3 FY26 [V deck]. Management notes that VSC HVDC needs fewer STATCOMs and SynCons than LCC [V]. No India HVDC converter award is in the backlog per the documents read.
- **Parent fees:** not verified this session. The brand and licence arrangement with Siemens AG / Siemens Energy AG was not found in the documents fetched.
- **Ownership** [V screener]:
  - Promoter **75.00%**; FIIs 7.72%, DIIs 6.44%, public 10.82% (Jun-26). The Sep-26 pattern is not yet on screener.
  - The split between Siemens AG and Siemens Energy AG was not verified this session.
- **Guidance:** "we do not disclose numbers, forward guidance" [V].

### Story bullets
- **The pure-play grid MNC has the best margins in the batch after GVT&D.** Q3 PfO was 21.9% (+430 bp), with both segments above 20%, helped by export mix (28% of revenue) and operating leverage. Part of H1 was FX and commodity gains (about 260 bp).
- **Transmission backlog grew 27.5%, but Generation backlog is shrinking (−3.2%).** The total backlog of ₹19,331 cr gives only 2.0× cover, which is thin against Hitachi (3.5×) and GVT&D (3.1×).
- **Capacity doubling at Kalwa (30,000 MVA) and a ₹2,060 cr greenfield transformer plant** are the volume lever for FY27–28.
- **Fiscal year is Oct–Sep. Q4 FY26 (Sep-26) results, expected around Nov-26, close its first full post-listing year.** There is a small legacy Russian-litigation payout of about ₹44 cr plus interest.

---
## 4. Siemens Ltd (NSE: SIEMENS, BSE: 500550)

**Identity and status.**
- Listed and active. This is the post-demerger "residual" Siemens: Digital Industries, Smart Infrastructure and Mobility.
- MD & CEO **Sunil Mathur**; ED & CFO **Wolfgang Wrumnig** [V Q6 FY26 deck, BSE 69211f8e].
- Board change (1-Oct-26): Matthias Rebellius resigned and **Veronika Bienert was appointed Siemens AG nominee director** [V screener announcements].
- **The low-voltage motors (LVM) business was sold to Innomotics India, closing 1-Jun-2026.**
- An NCLT order approved the capital reduction of subsidiary C&S Electric [V announcement title].

**DATA TRAP 1: the fiscal-year change.**
- Siemens Ltd **changed its financial year from Oct–Sep to Apr–Mar**: "The Company changed its financial year, and the last financial year was an **18-month period ended 31.03.2026**. Q2 FY26 refers to quarter ending 31.03.25 and Q6 FY26 refers to quarter ending 31.03.26" [V Q6 deck, page 7].
- So screener's **"Mar 2026 18m" column covers Oct-24 to Mar-26**: revenue ₹24,846 cr, OP ₹2,863 cr, PAT ₹2,754 cr.
- This is **continuing operations (ex-energy)**. It equals the sum of the six screener quarters Dec-24 to Mar-26: 3,360 + 4,029 + 4,108 + 4,900 + 3,831 + 4,618 = 24,846 [E check].
- **Do not compare the 18-month column with the 12-month Sep-24 column (₹15,146 cr).**
- **12-month FY26 equivalent (Apr-25 to Mar-26)** = 4,108 + 4,900 + 3,831 + 4,618 = **₹17,457 cr**, with OP ₹1,992 cr (11.4%) and PAT ₹1,556 cr [E from screener quarters].
- The comparable Apr-24 to Mar-25 = 3,763 + 4,457 + 3,360 + 4,029 = ₹15,609 cr, giving growth of about +11.8% [E]. Caveat: screener's Jun-24 and Sep-24 quarters may not be restated for the LVM discontinuance, so treat this as approximate.
- **The new FY27 = Apr-26 to Mar-27. Q1 FY27 = Apr–Jun 2026**, the "Jun 2026" screener column.

**DATA TRAP 2: the Jun-26 quarter PAT of ₹2,143 cr.**
- Screener shows Q1 FY27 PAT of ₹2,143 cr, other income ₹1,917 cr and a tax rate of 5%.
- This **includes the one-time provisional gain of ₹2,099 cr on the LVM sale**, "reported under gain from sale of discontinued operations" [V Siemens press release, 11-Aug-26].
- The company's headline is **"PAT at INR 343 crore"** (continuing operations) [V].
- Screener has merged the discontinued gain into other income and PAT. **Use ₹343 cr for run-rate and P/E.**
- Screener TTM PAT of ₹3,277 cr is therefore overstated by about ₹1,800 cr. The TTM on a continuing basis is 485 + 278 + 370 + 343 = **₹1,476 cr**, giving a **P/E of about 90×** [E]. Screener's displayed P/E of 88.3 appears to be on an adjusted EPS.

### Financials
| ₹ cr | 18m Oct-24–Mar-26 [V] | 12m Apr-25–Mar-26 [E] | Q1 FY27 (Apr–Jun 26) [V] | Q1 FY26 |
|---|---|---|---|---|
| Revenue | 24,846 | 17,457 | **4,714** (+14.8%) | 4,108 |
| Screener OP / OPM | 2,863 / 11.5% | 1,992 / 11.4% | 431 / **9.1%** | 517 / 12.6% |
| Company profit from operations | – | – | **7.6%** margin | – |
| PAT (continuing) | 2,754 (incl. other one-offs) | 1,556 | **343** | 423 |
| PAT reported (screener) | – | – | 2,143 (incl. ₹2,099 cr LVM gain) | – |

- **Company basis** [V Q6 deck]:
  - Q6 FY26 (Jan–Mar 26): revenue ₹4,620 cr (+14.6%), **EBITDA ₹450 cr (9.7%, −287 bp)**, PBT ₹460 cr.
  - 6M ended Mar-26: revenue ₹8,450 cr (+14.3%), EBITDA ₹870 cr (10.3%, −196 bp).
  - The margin decline came from "higher material cost on account of higher commodity prices and depreciating INR". Material cost was 74% of revenue in Q6 against 69% a year earlier.
  - Q1 FY27 Mobility included a **one-time gain of ₹39 cr** [V press release].
- **Balance sheet (Mar-26)** [V screener]:
  - Borrowings ₹307 cr; cash equivalents ₹5,612 cr (₹6,675 cr in Sep-25), so **net cash is about ₹5,300 cr before the LVM cash proceeds received in Jun-26** [E].
  - Reserves fell from ₹15,286 cr to ₹13,769 cr because energy net assets transferred out.
  - Inventories ₹2,589 cr; receivables ₹3,902 cr.
  - The 18-month CFO was **−₹535 cr**. The CFO explained this as an inventory build because of the West Asia crisis, receivables up on a back-ended quarter, and **contract assets rising in Mobility (loco revenue recognised but not invoiced)** [V transcript].
- **Working capital (18m, screener):** debtor 57 days, inventory 60, payable 94, WC days 71. The 18-month denominator distorts these.
- **Valuation (13-Oct-26) [V]:**
  - M-cap **₹1,32,679 cr**; price ₹3,742; 52-week high/low ₹4,149 / ₹2,826.
  - P/E 88.3 (screener); book value ₹389, so P/B is 9.6× [E]. Dividend yield 0.48%. ROCE 21.4%, ROE 19.2%.
  - EV/EBITDA on TTM OP is about 67× [E].

### Native KPIs
- **Order backlog** [V]:
  - ₹41,210 cr (Mar-25) → ₹45,030 cr (Mar-26, +9.3%) → **₹46,670 cr (Jun-26, +9.6% YoY)**.
  - The primer's ₹42,253 cr is the Sep-25 figure.
  - Backlog / TTM revenue (₹18,062 cr) = **2.6×** [E].
- **New orders** [V]:

  | Period | Orders ₹ cr | YoY |
  |---|---|---|
  | Q2 FY26 (Jan–Mar 25) | 5,070 | – |
  | **Q6 FY26 (Jan–Mar 26)** | **6,730** | +32.6% |
  | 6M Oct-25–Mar-26 | 11,560 | +26.8% |
  | **Q1 FY27 (Apr–Jun 26)** | **6,328** | **+16.5%** (+43.9% excluding the year-ago Mumbai–Ahmedabad HSR signalling order) |

- Book-to-bill: Q1 FY27 1.34; Q6 FY26 1.46 [E].
- **Segments, Q6 FY26** [V deck]:
  - **Smart Infrastructure:** orders ₹2,960 cr (+17.6%), revenue ₹2,580 cr (+14.5%), book-to-bill 1.15. Driven by power utilities, renewables and data centres. EBITDA fell on material cost.
  - **Digital Industries:** orders ₹970 cr (+1.4%), revenue ₹1,150 cr, book-to-bill 0.84. "Underlying EBITDA margin (ex-currency) within 6–8%; 5.6% with currency impact."
  - **Mobility:** orders ₹2,800 cr (+74.9%), revenue ₹830 cr, book-to-bill 3.37. Includes the ₹1,800 cr bogie/traction export order to a Siemens "global mobility factory" and a "9K HP loco order value adjustment".
- **Revenue mix, 12M to Mar-26:**
  - By segment: SI 55.5%, DI 22.7%, MO 20.6%.
  - By geography: **exports 12.8%**, domestic 87.2%.
  - By type: projects 30.9%, products and service 69.1% [V deck page 15].
- **Mobility – 9,000 HP locos:** 1,200 locomotives for Indian Railways, assembled at Dahod; 40 dispatched; ramp to 80 a year in 2026–27 [V transcript]. The primer's "€3 bn" headline is [K: Siemens AG press release 2023, about ₹26,000 cr], subject to the value adjustment flagged in Q6.
- **LVM divestment:** sold for cash to Innomotics India, closing 1-Jun-26, with a provisional gain of ₹2,099 cr [V]. The primer's "~₹2,200 cr EV" is [K/primer]; the gain is consistent with that order of magnitude.
- **Capacity:** the Goa medium-voltage / vacuum-interrupter plant is nearing commercial production [V transcript]. Loco and bogie localisation is ongoing.
- **Licence fees to parent:** **₹147 cr (₹1,470 mn) over the 18-month FY = 0.52% of consolidated turnover**, covering brand use plus technical assistance and licence [V Annual Report, BSE af1c888d].
- **Ownership** [V screener]: Siemens AG **75.00%**; FIIs 6.47%, DIIs 9.10%, public 9.45% (Jun-26). FIIs are drifting down from 8.77% in Dec-24 and DIIs up.
- **Guidance:** "we are not giving guidance on the next or the future quarters" [V transcript]. Management sees no slowdown in public capex and a pickup in private capex in the last couple of months.

### Story bullets
- **The calendar is reset:** an 18-month transition FY (Oct-24 to Mar-26), so FY27 is Apr-26 to Mar-27. Every Sep-year number in the primer is now historical.
- **Q1 FY27 reported PAT of ₹2,143 cr is about 84% one-off (the ₹2,099 cr LVM gain).** Continuing PAT of ₹343 cr is down 19% YoY because commodity and INR moves cut profit from operations to 7.6%.
- **Orders are strong (Q1 +16.5%, +43.9% excluding HSR; backlog ₹46,670 cr)**, led by Smart Infrastructure in grid, data centres and real estate, plus Mobility exports. Digital Industries is still weak (book-to-bill 0.84).
- **About 90× continuing P/E with margins at a cyclical low.** The bull case needs commodity pass-through and loco execution. The parent licence fee is modest at 0.5% of turnover.

---
## 5. GE Vernova T&D India (NSE: GVT&D, BSE: 522275)

**Identity and status.**
- Listed and active. Formerly GE T&D India (and before that Alstom T&D India).
- Promoters: Grid Equipments Pvt Ltd and GE Grid Alliance BV.
- Management on the Q1 FY27 call: **Sandeep Zanzaria (MD & CEO)** and **Sushil Kumar (CFO)** [V transcript BSE 5e878001].
- **Fiscal year:** April–March.
- **Basis:** screener standalone (https://www.screener.in/company/GVT%26D/, fetched 13-Oct-26 17:21 UTC). The consolidated page is broken: its schedule endpoint returns Dec-2010 data, so I did not use it.
- **Q2 FY27 board meeting: 30-Oct-2026** [V BSE fc809859]. Trading window closed until 1-Nov.

### Financials (screener standalone [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 3,168 | 4,292 | **6,206** (+44.6%) | 6,712 |
| Operating profit | 332 | 831 | 1,706 | 1,757 |
| OPM | 10% | 19% | **27.5%** | 26% |
| PAT | 181 | 608 | **1,233** (+103%) | 1,305 |
| CFO | 518 | 904 | **1,710** | – |

- **Company basis** [V Q1 FY27 deck, BSE 4daef405]:
  - FY26 revenue ₹6,206.3 cr; gross margin **45.3%**; employee cost 7.2%; other expenses 10.9%.
  - **EBITDA ₹1,683.5 cr = 27.1%** [E from deck lines]; matches the deck headline "27.1%".
  - PBT ₹1,649.7 cr, after a **₹63.6 cr labour-code exceptional**.
  - EBITDA margin history: FY23 3.7%, FY24 10.1%, FY25 19.1%, FY26 27.1% [V investor deck, 17-Sep-26].
- **Q1 FY27 (Jun-26)** [V deck and transcript]:
  - Revenue ₹1,836.1 cr (+38% YoY). **Gross margin 41.3%** (48.4% a year earlier, 47.0% in Q4).
  - EBITDA ₹460.8 cr = **25.1%** [E: GP 7,591 − employee cost 1,123 − other expenses 1,860 = ₹4,608 mn]. PBT ₹487.1 cr (26.5%). PAT ₹363 cr (+25%).
  - Reasons for the margin dip: export revenue share fell to 30% (33% in FY26); a highly profitable export order executed last year; and a lower-margin part of the HV business.
  - **Guidance maintained: "mid-20s EBITDA for the year"** [V].
- **Balance sheet (Mar-26)** [V screener]:
  - Borrowings ₹24 cr; cash equivalents ₹1,528 cr; "loans and advances" ₹1,055 cr, which includes lending to the group cash pool.
  - Company: **Q1 cash generation ₹430 cr; total available cash ₹2,930 cr at Jun-26, "including lending to LM Wind Power Blades (India) Pvt Ltd as a part of Cash Pool arrangement"** [V deck page 13]. LM Wind is a GE Vernova group company, so this is a governance flag.
  - Use screener net cash of about ₹1,500 cr or the company's ₹2,930 cr "available cash", and state which.
- **Working capital (FY26, screener):** debtor 128 days, inventory 132, payable 170, **WC days 6**. Receivables ₹2,172 cr; inventory ₹1,228 cr.
- **Valuation (13-Oct-26) [V]:**
  - M-cap **₹1,07,114 cr**; price ₹4,191; 52-week high/low ₹5,650 / ₹2,523.
  - **P/E 79.3**; book value ₹105, so P/B is about 40× [E]. Dividend yield 0.24%. **ROCE 77.4%, ROE 57.4%.**
  - EV/EBITDA is about 60× [E].
- **Dividend:** proposed about one-fifth of profits (payout 20.8%), paid Sep-26 [V investor deck].

### Native KPIs
- **Order intake:**
  - FY22–FY26 [V deck chart; values partly garbled in extraction]. FY26 was **about ₹14,776 cr** (the primer's figure; consistent with the deck's "148" ₹bn bar and with the backlog roll: 21,456 − ~12,700 + 6,206 ≈ 14,960 [E]).
  - Q1 FY26: ₹1,619.9 cr. Q4 FY26: about ₹8,614 cr (primer; not re-verified).
  - **Q1 FY27: ₹1,137.0 cr (−30%)**, split **domestic ₹520.5 cr (46%) and exports ₹616.5 cr (54%)** [V].
  - Management said "lower realization of TBCB in market in Q4" was the reason [V].
- **Q1 FY27 orders included** [V]:
  - CTs and CVTs for GE Grid Renewable LLC (North America).
  - 400 kV GIS for GE Grid Solutions SA (Spain) and GE Grid Solutions Middle East (Morocco).
  - A 150 MVA 245 kV transformer for a semiconductor customer.
  - Grid-automation packages for utilities, EPCs and data centres.
  - 765/400 kV AIS for EPCs.
- **Pending US data-centre RPT order:** "we have not booked any part of that order as of now", as it is still under group discussion with the end-customer [V].
- **Order backlog:** **₹21,456 cr (Mar-26) → ₹20,930 cr (Jun-26, −2.5% QoQ)** [V].
  - By customer: **private 77% (₹16,048 cr)**, central utilities and PSUs 21% (₹4,486 cr), state utilities 2% (₹395 cr) [V deck].
  - Mar-25 backlog was about ₹12,700 cr [E from the deck chart]; the primer's +70% is consistent.
- **Cover and conversion:**
  - Backlog / TTM revenue = **3.1×** [E].
  - Book-to-bill: **0.62** in Q1 FY27 and about 2.4 in FY26 [E].
  - Execution rate: Q1 revenue ÷ opening backlog = 1,836 ÷ 21,456 = **8.6% per quarter** [E].
- **Exports:** 30% of Q1 revenue (₹554 cr) and 33% of FY26 revenue. Exports go to more than 60 countries. The target is to qualify Indian factories for the Americas, Europe and the Middle East [V].
- **HVDC / FACTS** [V investor deck]: won the **2.5 GW Khavda VSC HVDC** project and the **1 GW Chandrapur LCC refurbishment**; commissioned the 6 GW Champa–Kurukshetra link. Management: "HVDC pipeline remains" despite delays; Lakadia–Ahmedabad was discussed [V transcript].
- **Capacity and capex** [V investor deck, slide 11]:
  - Fresh capacity investment of **about ₹1,000 cr (₹10.1 bn+)**, phased from 2026 to Dec-2028, plus maintenance capex.
  - Vadodara: +50% transformer and reactor capacity. Hosur / Padappai / Pallavaram: +25% AIS and GIS capacity. Noida: HVDC valve lines (LCC) and VSC-STATCOM valves. Vallam: new AIS 765 kV / GIS assembly plant.
  - Tranches: ₹810 cr to Dec-2028, ₹140 cr to early 2027, ₹60 cr to Dec-2026. The mapping of tranches to sites is ambiguous in the text extraction.
- **Technology licence fee to the GE group: ₹117.8 cr in FY26 against ₹63.7 cr in FY25**, about 1.9% of revenue [V Annual Report FY26, BSE 3ac035f5; ₹ million table].
- **Ownership** [V screener]:
  - Promoter **51.00%** (75% until Jun-24, 59.38% in Sep-24, 51% from Dec-24).
  - FIIs 22.89% (rising), DIIs 18.46% (falling), public 7.65% (Jun-26).
- **Guidance:** mid-20s EBITDA margin for FY27, and about 50% gross margin over the cycle [V transcript].

### Story bullets
- **The best margin in Indian grid equipment:** 27.1% EBITDA in FY26, up from 3.7% in FY23. Q1 FY27 was 25.1%, with guidance of mid-20s maintained.
- **The order cycle has paused:** Q1 orders fell 30% (book-to-bill 0.62), and the backlog dipped 2.5% to ₹20,930 cr. Exports (54% of Q1 orders, mostly to GE Vernova group entities) are filling the gap while Indian TBCB awards slip. The US data-centre RPT order is not yet booked.
- **Cash of ₹2,930 cr includes group cash-pool lending to LM Wind Power.** This is a minority-governance item to watch alongside the doubled technology licence fee (₹117.8 cr).
- **About ₹1,000 cr of capex to Dec-2028** adds 50% transformer capacity at Vadodara plus HVDC valve lines in Noida. At 79× P/E and about 60× EV/EBITDA, the stock needs the HVDC award cycle to resume.

---
## 6. Thermax (NSE: THERMAX, BSE: 500411)

**Identity and status.**
- Listed and active. A Pune-based energy and environment engineering company.
- Leadership: Chairperson Meher Pudumjee and MD & CEO Ashish Bhandari [K/primer; not re-verified this session].
- **Fiscal year:** April–March. **Basis:** screener consolidated (https://www.screener.in/company/THERMAX/consolidated/, fetched 13-Oct-26 17:21 UTC).
- **Q2 FY27 board meeting: 5-Nov-2026** [V BSE 8bfcba00].
- **Recent events** [V]:
  - **30-Sep-26:** acquired the **remaining 49% of TSA Process Equipments for ₹42 cr**.
  - **9-Oct-26:** clarification on media reports that it is evaluating "strategic opportunities for its renewable portfolio under FEPL (First Energy Pvt Ltd) for attracting a growth partner". **Basant Jain** has been appointed CEO of FEPL. "No material event" yet [BSE 5ee5b8f5].

### Financials (screener consolidated [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 9,323 | 10,387 | **10,774** (+3.7%) | 10,839 |
| Operating profit | 797 | 910 | 1,038 | 870 |
| OPM | 9% | 9% | **9.6%** | 8% |
| Other income | 307 | 250 | 317 | 331 |
| Interest | 88 | 117 | 139 | 144 |
| PAT | 643 | 627 | **720** (+15%) | 591 |
| CFO | 247 | 1,080 | 542 | – |

- **Company basis:** "Revenue ₹10,694 crore" (FY26, Thermax-at-a-glance) [V Q1 deck]. Screener's ₹10,774 cr includes other operating income. The primer uses ₹10,694 cr; both are defensible, but state which.
- **Q1 FY27 (Jun-26)** [V Q1 deck, BSE 11476949]:
  - Revenue ₹2,303 cr (+7%). PBT ₹42 cr (1.8% margin, against ₹211 cr or 9.8% a year earlier). **PAT ₹22 cr (−86%)**. Screener OPM was 3.0%.
  - **Cause:** a **₹91 cr cost-to-complete provision on one Industrial Infra project** ("events identified during the quarter"), plus Green Solutions project overruns, plus higher input costs and lower exports in Industrial Products.
- **Segments, Q1 FY27** [V]:

  | Segment | Revenue ₹ cr | PBIT ₹ cr | Margin | Margin a year earlier |
  |---|---|---|---|---|
  | Industrial Products | 1,058 | 64 | 6.1% | 8.3% |
  | **Industrial Infra** | 814 | **(71)** | **−8.7%** | +9.9% |
  | Chemicals | 230 | 26 | 11.2% | 9.3% |
  | Green Solutions (PBT basis) | 245 | (17) | −6.9% | – |

- **Balance sheet (Mar-26)** [V screener]:
  - **Borrowings ₹2,353 cr** (₹1,718 cr in Mar-25, ₹831 cr in Mar-23). These are largely project debt in the Green Solutions subsidiaries (FEPL, TOESL).
  - Cash equivalents ₹1,191 cr; investments ₹1,784 cr. Net debt is about ₹1,160 cr on cash only, or about ₹620 cr net cash including investments [E].
  - CWIP is **₹1,442 cr** (₹563 cr in Mar-25): renewable/hybrid assets (Jafrabad hybrid, Karur 100 MW wind, Trichy 60 MW wind) [V deck].
  - FY26 free cash flow was **−₹401 cr** [V screener].
- **Working capital (FY26, screener):** debtor 75 days, inventory 60, payable 135, **WC days −40** (advance-funded).
- **Valuation (13-Oct-26) [V]:**
  - M-cap **₹39,293 cr**; price ₹3,299; **52-week high/low ₹5,278 / ₹2,743**, so the stock is 37% below its high.
  - P/E 71.4; book value ₹466, so P/B is 7.1× [E]. ROCE 13.9%, ROE 10.6%.
  - EV/EBITDA is about 46× [E].

### Native KPIs
- **Order booking** [V decks]: Q1 FY26 ₹2,749 cr; Q4 FY26 **₹4,490 cr** (+112% YoY per primer; included an ultra-supercritical boiler order of about ₹1,600 cr per primer); **Q1 FY27 ₹2,809 cr (+2%)**.
  - FY26 full year: about ₹13,871 cr per the primer; not verified this session.
- **Q1 FY27 bookings by segment** [V]:
  - Industrial Products ₹1,394 cr (+8%), including **more than ₹400 cr of boiler pressure parts for a US data-centre project**.
  - Industrial Infra ₹863 cr (+24%).
  - Green Solutions ₹382 cr (+149%). This is **partly a methodology change**: TOESL moved to a rolling 12-month forecast order book, adding ₹139 cr.
  - Chemicals ₹169 cr.
  - The deck text says Infra booking "declined, primarily due to lower demand" while its table shows +24%. **This is an internal inconsistency in the company's deck.**
- **Order balance:** ₹11,376 cr (Jun-25) → **₹13,604 cr (Mar-26)** → **₹14,045 cr (Jun-26, +23% YoY)** [V].
  - By segment (Jun-26): Products ₹5,370 cr, Infra ₹6,887 cr, Green ₹1,568 cr (inflated by the methodology change), Chemicals ₹220 cr.
- **Cover and conversion:**
  - Backlog / TTM revenue = **1.3×** [E]. Q1 book-to-bill was 1.22.
  - Execution rate: 2,303 ÷ 13,604 = 16.9% per quarter [E], the fastest in the batch because the business is product-heavy.
- **End-market mix of Q1 order booking** [V deck slide 10]: chemicals 18%, data centres **17%**, engineering 13%, metals & mining 11%, F&B 10%, power 7%, and others. Data centres are now the second-largest end market.
- **Exports:** the deck has a domestic/export order-book chart, but the extracted values are garbled, so no export percentage is verified. The ₹400 cr+ US data-centre order and Industrial Products export weakness are noted [V].
- **Green Solutions / FEPL:** a 60 MW Trichy wind project (12 of 17 WTGs up), a 100 MW Karur project, and a 69.5 MWp solar portion of the Jafrabad hybrid. A CBG plant is producing 22 TPD against 20 TPD guaranteed [V deck]. A growth-partner search is under way [V].
- **Ownership** [V screener]:
  - Promoter **61.99%** (Bhathena/Aga family via RDA Holdings and others); "Others" 5.46% (employee and other trusts).
  - FIIs 11.46%, DIIs 15.22%, public 5.88% (Jun-26). FIIs have fallen from 16.02% in Jun-25.
- **Guidance:** none in the fetched deck. The industry outlook cites data-centre acceleration and West Asia conflict dampening Middle East capex [V slide 17].

### Story bullets
- **Q1 FY27 was a profit collapse (PAT ₹22 cr, −86%).** The cause was a ₹91 cr cost overrun on one Industrial Infra EPC project, plus Green Solutions overruns. This is execution risk in the EPC arm, not demand. Q2 comes on 5-Nov.
- **The order balance of ₹14,045 cr (+23%) looks strong**, but part of Green Solutions' growth is a reporting-method change (+₹139 cr). Data centres (17% of bookings, including a ₹400 cr+ US order) are the new driver.
- **Balance sheet is drifting from net cash to net debt:** borrowings ₹2,353 cr, CWIP ₹1,442 cr, FCF −₹401 cr, as renewable assets are built in FEPL and TOESL. The **FEPL partner search** is a potential de-leveraging and value-unlock catalyst.
- **The stock is down about 28% since the primer's Jul-26 m-cap (₹54,900 cr to ₹39,293 cr)** and 37% off its 52-week high. It is still 71× trailing P/E on depressed earnings.

---
## 7. Schneider Electric Infrastructure (NSE: SCHNEIDER, BSE: 534139)

**Identity and status.**
- Listed and active. This is the Indian medium-voltage distribution and grid-equipment arm of Schneider Electric SE (MV switchgear, RMUs, distribution transformers up to 220 kV class, relays, grid automation).
- **MD & CEO Udai Singh; CFO Omkar Prasad**; Head of IR Mohit Agarwal [V Q1 FY27 transcript, BSE 5b2cb591].
- **Fiscal year:** April–March. **Basis:** screener standalone (https://www.screener.in/company/SCHNEIDER/, fetched 13-Oct-26 17:21 UTC). The consolidated page is empty.
- **Recent events** [V screener announcements]:
  - 1-Oct-26: in a rumour clarification, the company said a media report "concerned another Schneider Group entity, not the company".
  - 28-Sep-26: the CGST appellate authority upheld a **₹3.25 cr tax demand**.
- The Q2 FY27 board date has not been announced.

### Financials (screener standalone [V])
| ₹ cr | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|
| Sales | 2,207 | 2,637 | **2,891** (+9.6%) | 2,920 |
| Operating profit | 296 | 383 | 371 | 336 |
| OPM | 13% | 15% | **12.8%** | 11% |
| Interest | 69 | 49 | 51 | 55 |
| PBT | 210 | 350 | 292 | 253 |
| PAT | 172 | 268 | **213** (−21%) | 184 |
| CFO | 189 | 308 | 224 | – |

- **Quarterly trend** [V screener]: Q3 FY26 revenue ₹1,029 cr (OPM 17%) → Q4 FY26 ₹590 cr (8%) → **Q1 FY27 ₹651 cr (+4.7% YoY), OP ₹34 cr (5.2%), PAT ₹12 cr (−71%)**.
- **Company commentary on Q1 FY27** [V transcript]:
  - "EBIT ... is INR 32 crores", and PAT margin is about 1.9% of total income.
  - Gross margin was hit by **copper and transformer-wire inflation and INR depreciation**, plus **legacy fixed-price orders booked before Dec-25** with about 6 months' turnaround.
  - Q1 also showed negative operating leverage (Q1 increments) and new depreciation from the **Kolkata plant, which began operating early this year**.
  - The finance-cost increase reflects the absence of last year's non-cash fair-value gain.
- **Balance sheet (Mar-26)** [V screener]:
  - **Borrowings ₹633 cr** (₹606 cr in Mar-25); cash ₹358 cr, so **net debt is about ₹275 cr** [E].
  - Net worth is only ₹690 cr (equity ₹48 cr plus reserves ₹642 cr; reserves were negative until FY22).
  - No dividend [V: dividend yield 0.00%].
- **Working capital (FY26, screener):** debtor 103 days, inventory 84, payable 126, **WC days 44**, cash-conversion cycle 61. Receivables ₹813 cr; inventory ₹421 cr.
- **Valuation (13-Oct-26) [V]:**
  - M-cap **₹28,917 cr**; price ₹1,209; 52-week high/low ₹1,548 / ₹572.
  - **P/E 149**; book value ₹28.8, so **P/B is about 42×** [E]. ROCE 29.6%, ROE 38.2%.
  - EV/EBITDA is about 87× [E], the highest P/E and P/B in the batch.

### Native KPIs
- **Order intake:**
  - **Q1 FY27 ₹915 cr, the highest-ever quarterly intake but only +0.5% YoY**, with double-digit sequential growth [V transcript]. The deck headline: "Highest-ever Quarterly Order Intake in Q1'FY27".
  - FY26 intake was ₹3,430 cr (+27.4%) per the primer; not re-verified (the deck's financial slides are images).
- **Order backlog:** "around **INR 2,100 crores plus** backlog ... growth is close to 33%" entering Q2 FY27 [V]. Mar-26 was ₹1,911 cr per the primer.
- **Cover and conversion:**
  - Backlog / TTM revenue = **0.7×** [E]. This is a short-cycle product business ("book-to-bill of 0.5–0.6" per an analyst on the call).
  - Q1 book-to-bill was **1.41** [E].
- **End markets:**
  - Power & Grid is about 40% of the backlog (analyst, not contradicted).
  - "More than 1/5" of the order bank is from emerging segments: data centres, semiconductors, renewables, airports [V].
  - Key wins: the **largest front-end semiconductor fab order** (MV panels, transformers, automation) and data-centre wins [V deck].
- **Product scope:** the company has **no transformers at 400 kV and above** ("not in our product range"). It is a distribution play, not an EHV transmission play [V transcript].
- **Exports:** **10–12% of revenue**. The Kolkata plant is meant to largely serve export markets, and is in ramp-up [V].
- **Capacity and capex:**
  - **About ₹500 cr over the last 3 years across 3 plants**: Vadodara MV switchgear, Vadodara transformers, and the new Kolkata plant. The aim is capacity plus substituting imports from other Schneider factories.
  - Additional capacity is due in H2 FY27; "well on track" [V].
  - Screener CWIP is ₹102 cr (Mar-26).
- **Royalty to parent:** only **₹0.60 cr** (₹60 lakh) in FY26 (₹0.51 cr in FY25) [V Annual Report FY26, BSE 9238b901, note 27 in ₹ lakh]. The primer's implied "royalty / technical fees" drag is overstated. Related-party purchases and recharges from group factories are the bigger channel (imports in USD) [V transcript].
- **Ownership** [V screener]:
  - Promoter **75.00%**; FIIs 3.42%, DIIs 4.65%, public 16.91% (Jun-26).
  - Retail-heavy float with institutions rising (DIIs from 2.28% in Sep-23 to 4.65%).
- **Guidance:** none numeric. "Forward-looking 3 quarters ... is good for us" [V].

### Story bullets
- **Record order quarter (₹915 cr) and backlog up about 33% to ₹2,100 cr+**, but intake growth was only +0.5% YoY. Demand is broad in data centres, semiconductor fabs and RDSS distribution.
- **Margin squeeze is severe:** Q1 OPM was 5.2% and PAT ₹12 cr. Copper and wire inflation, INR weakness and legacy fixed-price orders drove it. Margins should recover as pre-Dec-25 orders run off, but the risk of pass-through lag is clear.
- **Kolkata export plant and about ₹500 cr of capex** are the medium-term growth lever. Exports are only 10–12% of revenue today.
- **The richest valuation in the batch:** 149× P/E and about 42× book on a ₹690 cr net worth, with modest net debt and no dividend. The parent royalty is negligible (₹0.6 cr), so the MNC premium is not being taxed by fees.

---
# PRIMER ISSUES (batch 1)

**Method.** For each primer in `primers/<file>.html` I read the cover strip, the "What's new" box and sections 00–03, then grepped for m-cap, P/E, order book, revenue, promoter %, MD/CEO, capex, exports, ROCE and debt. The comparison is against the verified research above. Every primer was last refreshed 1–4 Jul-2026, so **all seven miss their Q1 FY27 (or ENRIN Q3 FY26) results** and carry stale market data.

## Hitachi Energy India — `primers/hitachi-energy-india.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹1.53 L Cr, Market cap (Jul '26)" | **₹1,35,220 cr** (13-Oct-26 close; price ₹30,250) | screener, fetched 13-Oct-26 17:21 UTC [V] |
| 2 | Stale / wrong P/E | "market pays ~150× earnings" (cover, §00) | **P/E 114** (TTM). About 137× on FY26 PAT at today's m-cap; ~150× was a Jul figure | screener [V] |
| 3 | Missing latest quarter | Refreshed on FY26 only | **Q1 FY27:** revenue ₹2,493.7 cr (+68.6%), Op. EBITDA 16.0%, PAT ₹294.2 cr (+123.5%), orders ₹5,096.5 cr (−55%; +26% ex-HVDC) | Q1 FY27 deck, BSE 5158b364 [V] |
| 4 | Stale backlog | "₹29,555 Cr Order backlog (Mar '26)" | **₹32,222.1 cr at Jun-26** (+10.6% YoY) | Q1 FY27 deck [V] |
| 5 | Capex understated / stale | "₹2,000 Cr Vadodara transformer factory ... targeted for completion around FY28" | **Additional ₹2,000 cr, taking cumulative capex to ₹4,000 cr**. Karjan groundbreaking 12-Jun-26; **completion target Dec-2028 (FY29)** | Q4 FY26 and Q1 FY27 decks [V] |
| 6 | Export metric mislabelled | "Exports made up roughly 30–37% of quarterly order intake" (used as the export share) | Management: **export ≈ 25% of revenue** ("trending 25–26%") | Q1 FY27 transcript, BSE 64add9a3 [V] |
| 7 | Stale ownership mix | "promoter ~71.3%, FIIs ~11.7% and DIIs ~7%" | Promoter 71.31%, **FIIs 11.96%, DIIs 6.54%** (Sep-26) | screener [V] |
| 8 | Missing material RPT event | – | **Postal ballot passed 12-Oct-26** approving material RPTs with Hitachi Energy Sweden, USA and Switzerland | BSE 593b8615 [V] |
| 9 | Missing royalty quantum | Royalty mentioned qualitatively | **₹241.85 cr royalty to Hitachi Energy Ltd in FY26** (about 3% of revenue) | Annual Report FY26 [V] |
| 10 | Missing new segments / orders | – | First BESS order (165 MW / 330 MWh, AP); about ₹1,700 cr offshore-wind HVDC export order (Europe); greenfield HVDC tender expected to be awarded within about 6 months | Q1 FY27 deck and transcript [V] |
| 11 | "Up to date" badge stale | "Last refreshed 01 Jul 2026" | One quarter of results and three months of market data are missing | – |

## BHEL — `primers/bhel.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Wrong claim: "record order inflow"** | "record order inflow ₹75,916 Cr" (What's new, §01, §02 timeline, §09) | FY26 inflow ₹75,916 cr was **−18% YoY**. **FY25 was the record, ₹92,535 cr** ("Highest ever yearly order booking") | BHEL Q4 FY25 supplementary info (bhel.com) and Q4 FY26 supplementary info, BSE d67af566 [V] |
| 2 | **Wrong historical inflows** | Table: Order inflow FY24 "~52,000+", FY25 "~74,000+" | **FY24 ₹77,907 cr; FY25 ₹92,535 cr** | Q4 FY25 supplementary info [V] |
| 3 | Stale m-cap | "~₹1.44 lakh Cr (Jul '26)" | **₹1,54,275 cr** (13-Oct-26; price ₹442; 52-week high ₹456) | screener [V] |
| 4 | Stale P/E | "P/E near 90", "P/E of 90" (cover, §00, §10) | **P/E 63.4** (TTM, after the Q1 FY27 profit) | screener [V] |
| 5 | Missing Q1 FY27 | – | Revenue ₹7,698 cr (+40%), EBITDA margin 6.5%, **PAT ₹377 cr against a ₹456 cr loss (first positive Q1 in 8 years)**; inflow **₹26,745 cr**; order book **about ₹2.6 lakh cr** | screener [V]; JM Financial, 16-Jul-26 [V] |
| 6 | Missing major orders | – | **NTPC Meja 3×800 MW EPC about ₹21,000 cr**; **Dangote (Nigeria) 8 GTGs ₹2,000–2,500 cr, the largest-ever export order** | JM Financial [V] |
| 7 | Stale order book | "₹2.4 lakh Cr (Mar '26)" headline | About **₹2.6 lakh cr at Jun-26** | JM Financial [V] |
| 8 | Promoter % basis muddled | "Government of India (~59%)" in §00 and §02, then "Screener showed ~58.2%" | **58.17%** (Mar-26 to Sep-26) after the 5-point OFS. Use 58.2% consistently | screener shareholding [V] |
| 9 | "Light on debt" / balance sheet incomplete | "light on debt"; WC "~79 days" | Borrowings **₹8,187 cr**, offset by cash ₹11,867 cr (net cash ≈ ₹3,680 cr). Screener WC days **86**; **JM 164 days**. Receivables plus contract assets **₹38,613 cr** (standalone) | screener [V]; BHEL deck [V]; JM [V] |
| 10 | EBITDA basis unstated | "EBITDA ~₹2,342 Cr (~7%)" | Company standalone EBITDA **₹3,189 cr** (9.4%); screener consolidated OP ₹2,572 cr (7.6%); ₹2,342 cr is JM's basis | BHEL deck [V]; screener [V]; JM [V] |
| 11 | ROCE slightly off | "ROCE ~8.5%" | Screener **ROCE 9.14%** (FY26 column 9%) | screener [V] |
| 12 | Results calendar | – | **Q2 FY27 board meeting 14-Oct-2026**; the primer will be stale again within a day | BSE 368d56ed [V] |

## Siemens Energy India — `primers/siemens-energy-india.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹1.25 L Cr (Jul '26)" | **₹1,11,877 cr** (13-Oct-26; price ₹3,123) | screener [V] |
| 2 | Stale P/E | "~90× earnings" | **P/E 73.3** (TTM) | screener [V] |
| 3 | Missing latest quarter | Refreshed on Q2 FY26 | **Q3 FY26 (Apr–Jun 26):** revenue ₹2,486 cr (+39.3%), PfO 21.9% (+430 bp), PAT ₹441 cr (+67.8%); 9M revenue ₹6,791 cr (+31.1%) | Results and press release, BSE 8a59a0ba [V] |
| 4 | Stale backlog | "₹18,433 Cr (Mar '26)" | **₹19,331 cr at Jun-26** (+16.4% YoY); PT ₹13,490 cr (+27.5%), PG ₹5,840 cr (−3.2%) | Q3 deck [V] |
| 5 | **Wrong segment count** | "organises its offering into three broad segments ... Power Transmission, Power Generation, Industrial Applications" | Company **reports two segments: Power Transmission and Power Generation** (industrial steam turbines sit within PG) | Q3 FY26 segment statement [V] |
| 6 | EBITDA basis unclear | "19.3% EBITDA Op. margin (FY25)" | FY25 company profit from operations (EBIT) **₹1,410 cr = 18.0%**; screener OPM 19.6%. 19.3% matches neither, so state the basis | Q3 FY26 statement (FY25 column) [V]; screener [V] |
| 7 | Stale institutional split | "DIIs ~8%, FIIs ~6%, other public ~11%" | **FIIs 7.72%, DIIs 6.44%, public 10.82%** (Jun-26) | screener [V] |
| 8 | Missing capacity detail | Mentions the ₹740 cr brownfield | **Kalwa transformer capacity doubling from 15,000 to 30,000 MVA**; switchgear expansion at Sambhajinagar; greenfield site not yet chosen | Q2 FY26 transcript, BSE 197a7a32 [V] |
| 9 | Missing export metric | Exports discussed qualitatively | **Exports 28.4% of 9M FY26 revenue** (21.4% a year earlier) | Q3 deck [V] |
| 10 | Missing litigation event | – | **9-Oct-26:** Russian Supreme Court rejected the appeal, so ₹44.38 cr plus 8% interest is payable | BSE 16567cb4 [V] |
| 11 | Unverified FY25 order intake | "booked ~₹13,100 Cr of new orders in FY25" | Not disclosed in the documents fetched. The company does not report order intake, so flag as unverified or derived | – |
| 12 | Calendar reminder | – | Q4 FY26 (Jul–Sep 26) and audited FY26 (Oct-25 to Sep-26) are due around Nov-26 | – |

## Siemens Ltd — `primers/siemens-limited.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Wrong fiscal year (major)** | "Siemens Ltd reports on a September fiscal year (October–September) ... Its latest full year is therefore FY25, ended 30 September 2025" (§00, §01) | **The company changed to an April–March year. The last FY was an 18-month period Oct-24 to Mar-26**; FY27 = Apr-26 to Mar-27 | Q6 FY26 deck, page 7, BSE 69211f8e [V]; screener "Mar 2026 18m" [V] |
| 2 | Stale headline period / figures | "₹17,364 Cr Revenue (FY25, Sep)" | 18m to Mar-26 revenue **₹24,846 cr** (continuing ops); 12m Apr-25 to Mar-26 about **₹17,457 cr** [E]; TTM to Jun-26 ₹18,062 cr | screener [V] |
| 3 | Stale backlog | "₹42,253 Cr (Sep '25)" | **₹45,030 cr (Mar-26); ₹46,670 cr (Jun-26)** | Q6 deck [V]; press release, 11-Aug-26 [V] |
| 4 | Missing Q1 FY27 and the LVM gain | LVM sale "closed on 1 June 2026" (correct) but no P&L effect | **Q1 FY27:** orders ₹6,328 cr (+16.5%), revenue ₹4,714 cr (+14.8%), PfO 7.6%, **PAT ₹343 cr continuing**; **one-time LVM gain ₹2,099 cr** in discontinued operations (screener PAT shows ₹2,143 cr) | press.siemens.com, 11-Aug-26 [V] |
| 5 | FY25 quarterly figures on the pre-LVM basis | Q3 (Jun-25) 4,347; Q4 (Sep-25) 5,171 | Restated continuing ops (ex-LVM): **Jun-25 ₹4,108 cr; Sep-25 ₹4,900 cr** | screener quarters [V]; Q1 FY27 PR (+14.8% on ₹4,106 cr) [V] |
| 6 | Stale m-cap | "~₹1.29 L Cr (Jul '26)" | **₹1,32,679 cr** (price ₹3,742) | screener [V] |
| 7 | Margin narrative stale | "~11% FY25 profit-from-operations margin — room to expand" | Margins **fell**: Q6 FY26 EBITDA 9.7% (−287 bp); Q1 FY27 PfO 7.6%, on commodities and INR | Q6 deck [V]; PR [V] |
| 8 | Valuation framing | "~50× forward", "~9× book" | Trailing **P/E 88.3** (screener; about 90× on continuing PAT); P/B 9.6× | screener [V] |
| 9 | Missing board change | – | **1-Oct-26:** Matthias Rebellius resigned; **Veronika Bienert** appointed Siemens AG nominee director | screener announcement list [V] |
| 10 | Missing licence-fee quantum | Royalties described qualitatively | **₹147 cr (0.52% of turnover) for the 18-month FY** (brand plus technical licence) | Annual Report, BSE af1c888d [V] |
| 11 | "Net cash / debt-free" fine but cash flow omitted | – | 18-month **CFO was −₹535 cr** (inventory build, contract assets on locos) | screener [V]; transcript [V] |

## GE Vernova T&D India — `primers/ge-vernova-td-india.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹1.22 L Cr (Jul '26)" | **₹1,07,114 cr** (price ₹4,191) | screener [V] |
| 2 | Stale P/E | "close to 100× earnings" | **P/E 79.3** | screener [V] |
| 3 | Missing Q1 FY27 | – | Orders **₹1,137 cr (−30%; 54% exports)**; revenue ₹1,836 cr (+38%); gross margin 41.3%; EBITDA about 25.1%; PBT ₹487 cr; PAT ₹363 cr | Q1 deck, BSE 4daef405 [V]; screener [V] |
| 4 | Stale backlog | "₹21,456 Cr (Mar '26)" | **₹20,930 cr at Jun-26 (−2.5% QoQ)**; private 77% / central utilities and PSUs 21% / state 2% | Q1 deck [V] |
| 5 | **Wrong OFS arithmetic** | "The promoter sold ~8.3% via an offer for sale ... taking the group stake toward ~51% (from ~75%)" | Promoter went from 75% (Jun-24) to **59.38% (Sep-24)** to **51.00% (Dec-24)**: about 24 points sold across OFS tranches, not 8.3% | screener shareholding [V] |
| 6 | Promoter-entity split garbled | "Grid Equipments Pvt Ltd (~68.5% of the promoter block) and GE Grid Alliance BV (~6.5%)" | The parts don't sum, and percentages of the block are mixed with percentages of equity. Verified total is **51.00%**; entity split not verified this session | screener [V] |
| 7 | Capex understated / mislabelled | "₹550 Cr Vallam facility" | Company: **fresh capacity investment of about ₹1,000 cr (₹10.1 bn+)** across Vadodara (+50% transformer and reactor), Hosur / Padappai / Pallavaram, Noida HVDC valves and Vallam, phased to Dec-2028 | Investor deck, 17-Sep-26 [V] |
| 8 | Missing governance item | "Effectively net cash" | Company "available cash" of ₹2,930 cr **includes lending to LM Wind Power Blades (India) via a group cash pool** | Q1 deck, page 13 [V] |
| 9 | Missing licence fee | – | **Technology licence fee ₹117.8 cr in FY26 (₹63.7 cr in FY25)** | Annual Report FY26 [V] |
| 10 | Missing guidance / RPT status | – | Guidance: **mid-20s EBITDA for FY27**. The US data-centre material-RPT order is **not yet booked** | Q1 transcript [V] |
| 11 | Ownership drift | – | FIIs 22.89% (from 13% in Mar-25); DIIs 18.46% (from 28%) | screener [V] |
| 12 | Calendar | – | **Q2 FY27 board meeting 30-Oct-26** | BSE fc809859 [V] |

## Thermax — `primers/thermax.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Badly stale m-cap** | "~₹54,900 Cr Market cap (Jul '26)"; "Stock ~₹4,608" | **₹39,293 cr; price ₹3,299** (−28%); 52-week high/low ₹5,278 / ₹2,743 | screener [V] |
| 2 | Stale P/E | "trailing P/E around 80×" | **71.4×** (on depressed TTM PAT of ₹591 cr) | screener [V] |
| 3 | **Missing Q1 FY27 profit collapse** | – | Revenue ₹2,303 cr (+7%); **PBT ₹42 cr (1.8%), PAT ₹22 cr (−86%)**; ₹91 cr cost-to-complete provision on one Industrial Infra project; Infra PBIT −₹71 cr | Q1 deck, BSE 11476949 [V] |
| 4 | Stale order book | "₹13,604 Cr (Mar '26)" | **₹14,045 cr at Jun-26 (+23% YoY)**, including a ₹139 cr uplift from TOESL's method change | Q1 deck [V] |
| 5 | "Low debt / rock-solid balance sheet" overstated | "conservative accounting, low debt" | **Borrowings ₹2,353 cr** (₹831 cr in FY23); CWIP ₹1,442 cr; **FY26 FCF −₹401 cr**. Net debt about ₹1,160 cr on cash only | screener [V] |
| 6 | Returns overstated | "ROCE / ROE ~15% / ~13%" | **ROCE 13.9%, ROE 10.6%** | screener [V] |
| 7 | Missing corporate events | – | **FEPL growth-partner evaluation** (9-Oct-26 clarification; Basant Jain appointed FEPL CEO); **TSA Process Equipments remaining 49% bought for ₹42 cr** (30-Sep-26) | BSE 5ee5b8f5, bbcbd0fe [V] |
| 8 | Revenue basis | "₹10,694 Cr" | Company figure ₹10,694 cr; screener consolidated sales **₹10,774 cr**. State the basis | Q1 deck [V]; screener [V] |
| 9 | FY26 order inflow unverified | "~₹13,871 Cr for the full year" | Not verified this session (Q4 FY26 ₹4,490 cr and Q1 FY27 ₹2,809 cr are verified) | – |
| 10 | Calendar | – | **Q2 FY27 board meeting 5-Nov-26** | BSE 8bfcba00 [V] |

## Schneider Electric Infrastructure — `primers/schneider-electric-infrastructure.html`
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹35,546 Cr Market cap (2026)" | **₹28,917 cr** (price ₹1,209), −19% | screener [V] |
| 2 | Stale P/E and P/B | "~160× earnings and ~46× book" | **P/E 149; P/B about 42×** (book value ₹28.8) | screener [V] |
| 3 | Missing Q1 FY27 | – | **Record order intake ₹915 cr (+0.5% YoY)**; revenue ₹651 cr (+4.7%); EBIT ₹32 cr; **PAT ₹12 cr (−71%)**; backlog **about ₹2,100 cr+ (+~33%)** | Q1 transcript, BSE 5b2cb591 [V]; screener [V] |
| 4 | Stale backlog | "₹1,911 Cr Order backlog" | About **₹2,100 cr+** entering Q2 FY27 | Q1 transcript [V] |
| 5 | Stale borrowings | "borrowings are around ₹548 Cr" | **₹633 cr (Mar-26)**; cash ₹358 cr | screener [V] |
| 6 | Royalty drag overstated | "typically pays royalty / technical fees to Schneider (see Section 09)" | Royalty only **₹0.60 cr in FY26** (₹0.51 cr in FY25). Group purchases and recharges are the real related-party channel | Annual Report FY26, note 27 (₹ lakh) [V] |
| 7 | ROE slightly off | "ROE ~36%" | **ROE 38.2%**, ROCE 29.6% | screener [V] |
| 8 | Missing cause of the margin squeeze | Cites commodity inflation generically | Also **legacy fixed-price orders booked before Dec-25**, INR depreciation on USD imports, and Kolkata-plant depreciation | Q1 transcript [V] |
| 9 | Missing product-scope caveat | Positions the company as a "grid-capex super-cycle" play | Management: **no transformers at 400 kV and above**. This is distribution / MV, not EHV transmission | Q1 transcript [V] |
| 10 | Missing events | – | CGST appellate order upheld a ₹3.25 cr demand (28-Sep-26); rumour clarification (1-Oct-26) | screener announcement list [V] |
| 11 | Exports | – | **10–12% of revenue**; the Kolkata plant is aimed at exports (ramping up) | Q1 transcript [V] |

---

## Unverified / estimated figures in this file (summary)
- **BHEL:**
  - Q1 FY27 order inflow (₹26,745 cr) and order book (about ₹2.6 lakh cr) are verified only via the JM Financial note (16-Jul-26), not a company filing.
  - The Q1 power-sector split (₹22,625 cr) and the exact order book (₹2,60,255 cr) come from a search snippet and are **unverified**.
  - The ₹52,000–70,000 cr non-thermal figure: JM's components and headline conflict.
- **Siemens Energy India:** order inflow is not disclosed. The Q3 FY26 figure of about ₹3,384 cr is [E] from the backlog roll. The FY25 inflow of ₹13,100 cr in the primer is unverified.
- **Siemens Ltd:** the 12-month Apr-24 to Mar-25 comparable (₹15,609 cr) mixes possibly unrestated quarters [E]. The LVM sale EV of about ₹2,200 cr is primer/[K].
- **GE Vernova T&D:**
  - FY26 order intake of about ₹14,776 cr is from the primer, consistent with the deck chart and backlog roll [E].
  - Q4 FY26 intake of about ₹8,614 cr is unverified.
  - The site-wise capex split is ambiguous.
- **Thermax:** FY26 order inflow (~₹13,871 cr), the ~₹1,600 cr ultra-supercritical boiler order and the Q4 +112% are primer figures, unverified. The export order share was not extracted.
- **Schneider:** FY26 order intake of ₹3,430 cr and the Mar-26 backlog of ₹1,911 cr are primer figures. The company deck's financial slides are images.
- **Not verified this session:**
  - Hitachi transformer MVA capacity.
  - The ENRIN promoter-entity split (Siemens AG vs Siemens Energy AG) and its parent licence fees.
  - The GVT&D promoter-entity split.
  - BHEL's 5-point OFS details (the shareholding change itself is [V]).
  - The Thermax and BHEL CMD/MD names.
- **Calculations:** all EV/EBITDA, P/B, net cash and backlog-cover figures are [E] arithmetic on [V] inputs.
