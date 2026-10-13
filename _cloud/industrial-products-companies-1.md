# Industrial Products — Company Packs, Batch 1 (EMS / automation / machine tools)

Companies: Kaynes Technology (KAYNES), Syrma SGS (SYRMA), Avalon Technologies (AVALON), Honeywell Automation India (HONAUT), Jyoti CNC Automation (JYOTICNC).
Prepared 13 Oct 2026. Tags: **[V]** fetched this session; **[K]** from memory, source named; **[E]** estimate or derived by me (method stated).

**Sourcing conventions in this file**
- "Screener" means the screener.in company page, fetched by curl on 13 Oct 2026 and parsed with python: `https://www.screener.in/company/<NSE>/consolidated/`. Honeywell Automation has no consolidated accounts, so its page is standalone `/company/HONAUT/`. Balance-sheet "Other Assets" was split using screener's schedule API (`/api/company/<id>/schedules/?parent=Other+Assets&section=balance-sheet`), so "cash" below is screener's *Cash Equivalents* line, not "Other Assets".
- **EBITDA basis.** Screener "Operating Profit" is revenue minus expenses, before other income. Company EBITDA is quoted separately wherever I fetched the company deck.
- **Gross margin basis.** Unless stated otherwise, gross margin = (revenue − cost of materials incl. change in inventory) ÷ revenue, as each company reports it. It is a material-margin proxy, not a true gross margin, because it excludes conversion labour and power.
- **Net debt.** Screener borrowings (incl. lease liabilities) − screener cash equivalents − screener investments. This can miss bank deposits held in "other assets", so the company figure is shown wherever I fetched it.
- **EV/EBITDA** [E] = (m-cap + net debt) ÷ EBITDA. TTM = Jul-25 to Jun-26 screener operating profit, unless stated.
- **CFO/EBITDA** = screener cash from operations ÷ screener operating profit (screener's "CFO/OP").
- **Q2 FY27 (Sep-26 quarter):** none of the five has reported as of 13 Oct 2026. All five closed their trading windows from 1 Oct 2026 (BSE filings listed on the screener pages). Honeywell Automation's board meets on **27 Oct 2026** (BSE intimation, 1 Oct 2026).

---

## 1. Kaynes Technology India Ltd — NSE: KAYNES · BSE: 543664
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/KAYNES/consolidated/
- Q1 FY27 investor presentation (BSE filing, Aug 2026) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=516028d8-7580-4f5b-aed8-4a611fec0430.pdf
- Q1 FY27 earnings-call transcript, 8 Aug 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/e8d82234-f369-467f-a76f-75bb2747aaa1.pdf
- Listing status: listed; no merger or demerger pending. Smart metering is now run under the name "GridCrest" (call, Aug 2026). The company bought August Electronics (Canada) in July 2025.

**Archetype:** high-mix, high-reliability EMS (contract electronics manufacturing) moving into semiconductors: OSAT (outsourced chip assembly and test) at Sanand, and bare-PCB fabrication at Chennai. It also runs a smart-meter EPC/AMISP business (metering installation and service) that consumes a lot of working capital.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 1,805 | 2,722 | 3,626 (+33.2%) | Screener [V]; company deck: 1,804.6 / 2,721.8 / 3,626.4 [V] |
| EBITDA (screener OP) | 257 (14%) | 416 (15%) | 578 (16%) | Screener [V] |
| EBITDA (company) | 254.2 (14.1%) | 410.7 (15.1%) | 574.1 (15.8%) | Q1 FY27 deck p.22 [V] |
| Other income | 56 | 106 | 154 | Screener [V]. Large: about 27% of FY26 EBITDA, mostly treasury income on IPO/QIP money |
| PAT | 183 | 293 | 364 (+24%) | Screener [V]; company 363.9 [V] |
| ROCE | 15% | 14% | 13% | Screener [V]. Company "adjusted" ROCE 11.6% rolling 12m to Jun-26, vs 15.8% a year earlier [V] deck p.18 |
| ROE | — | — | ~9% (last year), 8.7% current | Screener [V] |
| Borrowings | 323 | 903 | 913 | Screener [V]. Company: LT 337 + ST 538 = ₹875 Cr [V] |
| Cash equivalents + investments | 1,526 + 132 | 1,056 + 132 | 799 + 257 | Screener schedule [V]. Company cash & equivalents ₹798.6 Cr [V] |
| Net debt / (net cash) | (1,335) | (285) | (143) net cash | [E] screener basis. Company basis net debt ≈ ₹76 Cr (875 − 799), net D/E 0.1× Q1 FY27 [V] deck |
| CFO | 88 | −82 | **−600** | Screener [V]; company −600.4 [V] |
| FCF (screener) | −295 | −1,031 | −1,841 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹3,290; m-cap **₹22,097 Cr**; 52-week high/low ₹7,140 / ₹2,995; 1-year return −52%.
- Ratios: P/E **63.6×** (TTM PAT ₹346 Cr); P/B **4.6×** (book ₹708/share); EV/EBITDA ≈ **36×** TTM (OP ₹609 Cr) or 38× FY26 [E].
- Dividend: none.

### Q1 FY27 (Jun-26 quarter) [V] deck p.21, call, screener
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue | 946.0 | 673.5 | +40% |
| Raw material cost | 620.5 | 395.6 | +57% |
| Gross margin (rev − RM) | 34.4% | 41.3% | −690 bp |
| EBITDA (company) | 147.6 (15.6%) | 113.0 (16.8%) | +31% |
| Depreciation | 37.0 | 15.6 | +137% |
| Finance cost | 37.1 | 28.4 | +31% |
| Other income | 14.4 | 27.1 | −47% |
| PAT | 56.4 (6.0%) | 74.6 (11.1%) | **−24%** |
| Order book | 8,903.8 | 7,401.1 | +20% |

- Q2 FY27 is not out; the trading window is closed until 48 hours after results (BSE, 23 Sep 2026 [V] via screener announcements list).
- The stock fell about 8–9% after the Q1 print (Kotak Neo, Ventura, Aug 2026; search results only, not fetched).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | ₹8,904 Cr (Jun-26); ₹8,366 Cr (Mar-26, per primer) | Deck p.17 [V] |
| Order-book cover | ≈2.3× TTM revenue (≈27 months) | [E] 8,904 ÷ 3,899 TTM |
| Order inflow / book-to-bill | ~₹1,500 Cr new orders in Q1 FY27 → book-to-bill ≈1.6× | Call (analyst question, not contradicted) [V]; [E] ratio |
| Gross margin | FY24 26.3% · FY25 30.2% · FY26 34.6% · Q1 FY27 34.4% | [E] from deck RM cost (rev − RM). The swing reflects metering mix and component inflation; component prices were up 30–35% (call) |
| NWC days (company) | **163 days** rolling 12m Q1 FY27, vs 122 a year earlier; Q1 standalone-quarter basis ~190 days | Deck p.18, call [V] |
| Screener FY26 days | Debtor 154 · Inventory 169 · Payable 131 · CCC 193 · WC days 133 (FY25: 77 / 156 / 131 / 102 / −7) | Screener ratios [V] |
| Receivables | ₹1,528 Cr Mar-26 (vs ₹575 Cr Mar-25) | Screener / deck [V] |
| Receivables incl. non-current | ₹1,765 Cr → ₹1,925 Cr in Q1. EMS receivables flat at ₹606 → 613 Cr; metering sales ₹240 Cr against collections of only ₹88 Cr | Call [V] |
| CFO/EBITDA | FY26 −104% (screener CFO/OP −80% on its own OP basis: −600/578 = −104%) · 3-yr FY24–26 −47% (−594 / 1,251) | Screener [V], [E] |
| Q1 FY27 CFO | Operating cash flow −₹235 Cr. Q1 capex ₹180 Cr | Call [V] (CFO's bridge) |
| Fixed-asset turnover | 2.3× FY26 (rev ÷ net FA incl. intangibles ₹1,594 Cr); company "asset turnover" 2.0× rolling, from 3.8× | [E]; deck p.18 [V] |
| Export share | **Not disclosed** in the fetched documents. Overseas subsidiaries' revenue: ₹102 Cr in Q1 FY27 (~11%), vs ₹24 Cr in Q1 FY26 | Call [V] |
| Client concentration | Not disclosed. Known exposures: a leading EV two-wheeler customer (receivable now below ₹100 Cr per call); smart-meter AMISP counterparties | Call [V] |

### Segment / end-market mix (revenue share) — deck p.19–20 [V]
Percentages are read off bar-chart labels, so treat them as approximate.

| Vertical | FY25 | FY26 | Q1 FY26 | Q1 FY27 |
|---|---|---|---|---|
| Industrial (incl. EV, smart meters) | 55% | 55% | 55% | 59% |
| Automotive | 26% | 25% | 27% | 26% |
| IT/IoT/consumer & others | ~8% | ~10% | ~6% | ~5% |
| Railways | ~7% | ~6% | ~9% | ~7% |
| Medical | 2% | 2% | 1% | 2% |
| Aerospace, space & strategic | 1% | 2% | 1% | 2% |

**Business split, Q1 FY27** (call [V]):

| Business | Q1 FY27 revenue | YoY growth |
|---|---|---|
| Standalone EMS | ₹639 Cr | +53% |
| Overseas subsidiaries | ₹102 Cr | +327% |
| Metering | ₹204 Cr | −12% |

Management is deliberately shrinking metering. It stopped some supplies over non-payment and plans to turn metering cash-positive by FY27-end.

### Capacity / plants (deck p.9 [V])
- **Footprint:** 18 manufacturing facilities, 2 service centres, 3 design facilities.
  - Karnataka: Mysuru, Bengaluru, Chamarajanagar.
  - Other Indian states: Pune, Hyderabad, Chennai, Krishnagiri, Perumbavoor, Sanand (semicon).
  - Overseas: USA (Digicom), Canada (August Electronics), Austria (Sensonic, railway-signalling software).
- **Equipment:** 26 SMT lines, 70 THD lines, 26 cable-harness lines, 48 moulding machines.
- **Utilisation:** not disclosed.

### Capex and guidance (call, 8 Aug 2026 [V])
- **Capex to date:**
  - FY26: OSAT ₹473 Cr, PCB ₹324 Cr.
  - Cumulative OSAT + PCB ≈ ₹1,200–1,250 Cr (≈₹700 Cr OSAT, ≈₹500 Cr PCB).
  - About ₹250 Cr of equipment is still in transit.
- **FY27 capex plan:** ≈₹300 Cr OSAT + ₹300 Cr PCB + ₹250 Cr EMS, against ₹230 Cr spent in Q1.
- **Commissioning:** Kaynes Semicon Unit-2 and Kaynes Circuits (Chennai PCB) are expected to be operational in Q3 FY27, after "minor timing slippage" from West Asia logistics disruption.
- **Revenue guidance:**
  - Consolidated growth "2× market growth". Management declined to give an absolute number; earlier calls cited 30–35%.
  - OSAT + PCB combined FY27 revenue ₹450–500 Cr, starting Q3.
  - The earlier ~₹1,000 Cr OSAT FY27 figure in the primer is no longer the guide.
- **OSAT partners:** a Mitsui partnership announced for Kaynes Semicon. The AOI Electronics technology tie-up is per the primer [K].

### Ownership (Screener, Jun-26 — the latest on screener for Kaynes; Sep-26 not yet posted) [V]
| Holder | Jun-26 | Jun-25 |
|---|---|---|
| Promoters | 53.46% | 53.52% |
| FIIs | 5.82% | 10.71% |
| DIIs | 11.78% | 22.39% |
| Public | 28.93% | 13.36% |

- Shareholders: 4.49 lakh, vs 2.25 lakh in Jun-25.
- Institutions have sold heavily since Dec-25 and retail has absorbed the stock.

**Management** (call cover page [V]):

| Person | Role |
|---|---|
| Ramesh Kunhikannan (founder) | Executive Vice Chairman |
| Dr. Muthukumar Narayanaswamy | Managing Director |
| Jairam P. Sampath | Whole-time Director & CFO |
| Savitha Ramesh | Chairperson |

### Governance event — the December 2025 disclosure controversy
- **The Kotak report.** On 3 Dec 2025, Kotak Institutional Equities published a note flagging inconsistencies in Kaynes' accounts:
  - Related-party transactions missing from the standalone accounts: a ₹180 Cr purchase from Kaynes Electronics Manufacturing in FY25, payables of ₹320 Cr and receivables of ₹190 Cr.
  - Goodwill and reserve adjustments on acquisitions (Iskraemeco).
  - Sharp additions to intangibles (technical know-how).
  - A rise in contingent liabilities to about ₹520 Cr.
- **Kaynes' response.** The omissions were "inadvertent" standalone disclosure errors, eliminated on consolidation, and have been rectified.
  - Contingent liabilities: an Iskraemeco performance bank guarantee of ₹96.8 Cr plus corporate guarantees of ₹132.5 Cr.
  - Effective borrowing cost: about 10% including bill discounting.
- **Auditor question.** A media report suggested an auditor change. The company told BSE/NSE that no such negotiations were underway.
- **Market reaction.** The stock fell sharply; it is −52% over one year and the 52-week high is ₹7,140.
- **Source status.**
  - The above comes from Business Standard (5 Dec 2025), Moneylife and FilingReader (Dec 2025). These are search-result snippets, not fetched; tag [K]/unverified detail. Verify against the BSE clarification.
  - In the Q1 FY27 call, management acknowledged investor "questions on the gap between our stated aspiration and delivered performance… working capital normalization… clarity of our communication" [V] transcript p.3.

### Story bullets
- **Core EMS still compounding.** Standalone EMS grew +53% in Q1 FY27 and the order book is ₹8,904 Cr. The reported numbers are diluted by a shrinking, cash-hungry metering arm.
- **Cash conversion is the problem.**
  - CFO was −₹600 Cr in FY26 and −₹235 Cr in Q1 FY27.
  - Receivables nearly tripled in FY26. NWC days are 163 on company basis and the screener CCC is 193 days.
  - FCF was −₹1,841 Cr in FY26, funded by the QIP and debt. Equity rose ≈₹1,900 Cr.
- **Semicon/PCB is a FY27-H2 story, and it was cut.** OSAT + PCB revenue guidance is now ₹450–500 Cr, starting Q3, and the timelines have slipped once.
- **Earnings quality.** Other income was ₹154 Cr of PBT ₹504 Cr in FY26. Depreciation doubled with new plants. Tax jumped to ~35% in the last three quarters, and Q1 PAT fell 24% despite +40% revenue.
- **De-rating.** P/E is down from ~88× (Jul-26 primer) to 64×, and the stock is 54% below its 52-week high.

### Risks
- Further metering receivable stress.
- OSAT yield and customer qualification.
- Component inflation squeezing gross margin. Management flagged gross-margin compression as possible over the next 9 months.
- Governance and disclosure credibility.
- Heavy ECMS/ISM-subsidy dependence.
- Rising leverage as capex continues while CFO is negative.

---

## 2. Syrma SGS Technology Ltd — NSE: SYRMA · BSE: 543573
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/SYRMA/consolidated/
- Q1 FY27 investor presentation, 29 Jul 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/ea4a3bc4-ee61-49fe-be89-3f1ec2e0ebf9.pdf
- Q1 FY27 call transcript, 30 Jul 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/13ead359-db88-472c-948c-9941361e182e.pdf
- Franklin Templeton MF Reg 29(2) filing, 1 Oct 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/F04056AB_7A22_4A6B_A71B_B4240EB06F43_120808.pdf
- Listing status: listed. Corporate changes: subsidiary renamed (Syrma SGS Design & Manufacturing… name-change intimation on BSE, Sep 2026); new Kaga JV (60:40); Elcome Integrated Systems acquired (defence).

**Archetype:** diversified mid-to-high-mix EMS. It has a large consumer share (~30–34%), export-heavy business (~24–25%) and a rising ODM share (~17%), and is integrating backward into bare PCBs.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 3,154 | 3,787 | 4,819 (+27.3%) | Screener [V] |
| EBITDA (screener OP, ex other income) | 203 (6.4%) | 323 (8.5%) | 546 (11.3%) | Screener [V]. Matches company "operating EBITDA" ~11.3% |
| Other income | 56 | 47 | 31 | Screener [V] |
| PAT | 124 | 184 | 346 (+88%) | Screener [V] |
| ROCE | 10% | 12% | 17% | Screener [V]. Company goodwill-adjusted ROCE 20.1% (Q4 FY26 and Q1 FY27) [V] deck |
| ROE | — | — | 14% | Screener [V] |
| Borrowings | 630 | 665 | 400 | Screener [V]. Company total debt ₹353 Cr Mar-26 → ₹686 Cr Jun-26 [V] deck p.9 |
| Cash + investments | 87 + 42 | 296 + 59 | 299 + 547 | Screener [V]. Company cash ₹311 Cr + investments ₹509 Cr = ₹820 Cr Mar-26 [V] |
| Net debt / (net cash) | 501 | 310 | **(446)** | [E] screener basis. Company: net cash ₹467 Cr Mar-26 → **₹122 Cr Jun-26** after a ₹334 Cr rise in working-capital loans [V] deck p.9 |
| CFO | −109 | 176 | 290 | Screener [V] |
| FCF | −446 | 4 | 114 | Screener [V] |

- Equity capital rose 178 → 193 in FY26, i.e. an equity raise (QIP) in FY26 [E, from screener equity-capital line].

**Valuation, 13 Oct 2026** (Screener [V]):
- Price ₹1,694; m-cap **₹32,665 Cr**; 52-week high/low ₹1,823 / ₹634; 1-year return +104%.
- P/E **88.0×** (screener). On TTM PAT ₹402 Cr it would be 81× [E]; screener's P/E likely uses PAT after minority interest.
- P/B **11.4×** (book ₹148/share).
- EV/EBITDA ≈ **53×** TTM OP ₹610 Cr (Jun-26 net cash ₹122 Cr), or 59× FY26 [E].
- Dividend yield 0.09%.

### Q1 FY27 (Jun-26 quarter) — company deck p.5 [V]
| ₹ Cr | Q1 FY27 | Q1 FY26 | Q4 FY26 | YoY |
|---|---|---|---|---|
| Revenue from operations | 1,588.6 | 953.1 | 1,465.0 | +66.7% |
| Gross margin (rev − materials) | 24.5% | 25.4% | 25.9% | −90 bp |
| Operating EBITDA (ex OI) | 161.6 (10.2%) | 95.7 (10.0%) | 174.1 (11.9%) | +69% |
| EBITDA incl. other income | 176.6 (11.0%) | 102.7 (10.7%) | 186.0 (12.6%) | +72% |
| PBT | 140.8 | 67.1 | 150.4 | +110% |
| PAT | 105.7 (6.6%) | 49.9 (5.2%) | 119.2 (8.1%) | +112% |
| Exports | 24% of revenue (₹387 Cr), +61–67% YoY | | | |

- Screener shows Q1 FY26 sales as ₹944 Cr against the company's ₹953 Cr, a small classification difference. The company figure is used here.
- Q2 FY27 is not out; the trading window closed on 28 Sep 2026.

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | **₹6,770 Cr** (Jun-26), vs ~₹5,400 Cr Jun-25 and ₹6,400 Cr Mar-26 | Call [V]. The Mar-26 figure as stated by CFO Bijay Agrawal; the primer says ~₹6,600 Cr |
| Order-book cover | ~₹5,400 Cr executable within 12 months; average execution ~10–10.5 months; ≈1.2× TTM revenue | Call [V]; [E] 6,770 ÷ 5,464 |
| Order inflow / book-to-bill (Q1) | ≈₹1,970 Cr inflow (6,770 − 6,400 + ~1,600 executed) → ≈1.24× | [E] from call figures |
| Order-book mix | Auto 29%, consumer 30%, industrial 24%, healthcare 7%, IT & railways 9% | Call [V] |
| Gross margin | 24.5% Q1 FY27; 25.4% Q1 FY26 | Deck [V] (rev − cost of materials consumed) |
| NWC days (company) | 63 (Mar-26) → **71** (Jun-26); 69 a year earlier. Higher because of "strategic inventory" during the West Asia supply disruption | Deck p.8, call [V] |
| Screener FY26 days | Debtor 139 · Inventory 108 · Payable 199 · CCC 48 · WC days 68 (FY25: 142 / 102 / 193 / 52 / 37) | Screener [V] |
| CFO/EBITDA | FY26 53% (290/546); 3-yr FY24–26 33% (357 / 1,072). Screener's own CFO/OP shows 69% FY26 | [E] from screener; screener [V] |
| Fixed-asset turnover | 3.3× FY26 (4,819 ÷ net FA ₹1,458 Cr incl. goodwill/intangibles) | [E] |
| Export share | ~24–25% (FY26 exports ≈₹1,200 Cr, +40%); FY27 target ₹1,500–1,600 Cr | Call [V] |
| Client concentration (Q1 FY27) | Top-5 38% · top-10 51% · top-20 66% | Call [V] |
| ODM share | ~17% (Q1 ₹270 Cr vs ₹125 Cr); FY26 ODM ₹825 Cr (+82%) | Call [V] |
| Capacity utilisation | 65–70% | CFO, call [V] |

### Segment / end-market mix (revenue; deck p.7 [V])
| Vertical | Q1 FY26 | Q4 FY26 | Q1 FY27 | Q1 FY27 YoY |
|---|---|---|---|---|
| Auto | 23% | 24% | 25% | +78% |
| Consumer | 34% | 26% | 34% | +68% |
| Healthcare | 7% | 9% | 8% | +100% |
| Industrials | 30% | 31% | 24% | +31% |
| IT & Railways | 5% | 10% | 9% | +199% |

Management expects consumer to settle near 30% of FY27 revenue.

### Capacity / plants
- **Existing plants** [K] (primer list; plant list not re-verified this session):
  - Chennai, including export SEZ units.
  - North: Manesar, Bawal, Gurugram.
  - Baddi, Pune, Bengaluru, Hyderabad.
  - US design presence.
- **Expansions in progress** (call [V]):
  - Bengaluru: new facility alongside the existing plant.
  - Pune: expansion.
- **Jodhpur MedTech:** 120,000+ sq ft facility of Syrma Johari MedTech inaugurated 22 Sep 2026 (BSE press release, title seen in screener's announcements list [V]; PDF not opened).
- **PCB plant (Andhra Pradesh, Syrma Strategic Electronics, under ECMS):**
  - Building 65–70% complete; equipment arriving from Oct-26; power-on Jan–Mar 2027; commercial production from Apr 2027.
  - Phase 1 ≈₹400 Cr, of which ~₹130 Cr has been spent. Funding: 50–60% debt, plus a 50% capex incentive.
  - Phases 2–3 start end-2027/early-2028.
  - Mature asset turn ~1–1.5× gross; EBITDA 15–18% at full ramp.

### Capex / guidance (call [V])
- FY27 revenue growth "35%+", which management expects to *exceed*.
- Operating EBITDA margin 10.5–11%. EBITDA growth was guided at 30–35% before Q1.
- Capex ex-PCB ₹100–150 Cr (₹40 Cr spent in Q1); PCB ≈₹250–270 Cr in FY27 [E from the phase-1 balance].
- **Kaga JV:** a Japanese MNC's India EMS requirements, made on an exclusive basis. Syrma holds 60%; initial investment ~₹24–25 Cr between the two partners.

### Ownership (Screener, Jun-26 — the latest posted for SYRMA) [V]
| Holder | Jun-26 | Jun-25 |
|---|---|---|
| Promoters | 42.28% | 46.43% |
| FIIs | 7.51% | 6.34% |
| DIIs | 15.90% | 9.15% |
| Public | 34.17% | 38.04% |

- Promoter dilution came via the FY26 equity raise.
- Franklin Templeton MF held 3.01% after selling 0.057% on 30 Sep 2026 [V].
- Management: Sandeep Tandon (Executive Chairman) and J.S. Gujral (MD) [K, primer; Gujral confirmed speaking on the call [V]].

### Story bullets
- **Clean beat-and-raise quarter.**
  - Revenue +67% and PAT +112% YoY in Q1 FY27.
  - Exports +61% and ODM roughly doubled.
  - Management says it will beat its 35% growth guide.
- **Margin structurally lower than the high-reliability EMS group.**
  - Operating EBITDA is ~10–11% versus Kaynes' ~16%.
  - The consumer mix (~30%) is the drag; ODM, healthcare and Elcome defence are the lift.
- **Working capital is improving on the annual view but rose in Q1.**
  - Company NWC was 71 days in Q1 FY27, and net cash fell from ₹467 Cr to ₹122 Cr in a single quarter.
  - Payable days of ~199 (screener) mean supplier credit funds much of the growth.
- **PCB backward integration is a FY28 earnings item.** It will drag in year 1 at 40–50% utilisation and sub-10% EBITDA.

### Risks
- Component shortages and inflation from West Asia logistics, and specialty-chemical supply for PCBs.
- Consumer-segment seasonality.
- Customer concentration: top-10 customers are 51% of revenue.
- Valuation: 81–88× P/E and 11× book.
- PCB-ramp execution.
- Forex on dollar-denominated BOMs.

---

## 3. Avalon Technologies Ltd — NSE: AVALON · BSE: 543896
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/AVALON/consolidated/
- Q1 FY27 investor presentation (BSE, Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/62a62f53-33c5-4982-98fb-65bbc897553f.pdf
- Q1 FY27 call transcript, 5 Aug 2026 [V] https://www.avalontec.com/investor/earnings-call-audio/Avalon-Technologies-Limited-Q1-FY27-Earnings-Call-Transcript.pdf
- Promoter Reg 29(2) disclosure, 1 Oct 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/0cf5faca-0e56-4ac1-945f-b67007cff173.pdf
- SIPCOT land lease, 8 Oct 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/0d4c50ed-2291-40a7-8609-f9320c8789be.pdf
- Listing status: listed; no merger or demerger.

**Archetype:** dual-shore (India + US) high-mix, box-build-led EMS. It is export-heavy: 59–62% of revenue comes from US-based customers. End-markets are clean energy, rail, aerospace, industrial and semiconductor equipment.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 867 | 1,098 | 1,603 (+46.0%) | Screener [V] |
| EBITDA (screener OP) | 63 (7.3%) | 115 (10.5%) | 173 (10.8%) | Screener [V]. Company FY26 EBITDA ₹173 Cr (primer) is consistent |
| Other income | 15 | 17 | 29 | Screener [V] |
| PAT | 28 | 63 | 113 (+79%) | Screener [V] |
| ROCE | 6% | 13% | 19% | Screener [V]. Company: 10.0% (FY24 ex-IPO cash), 15.7% FY25, 20.6% FY26, **23.4% Q1 FY27** [V] deck p.9 |
| ROE | — | — | 17% (current 16.5%) | Screener [V] |
| Borrowings | 209 | 180 | 213 | Screener [V], incl. leases. Company gross debt ₹164 / 142 / 183 Cr; ₹196 Cr Jun-26 [V] |
| Cash + investments | 107 + 75 | 102 + 35 | 71 + 81 | Screener [V] |
| Net debt | 27 | 43 | **61** | [E] screener basis. Company: **₹24 Cr** Jun-26 (debt 196 − cash & investments 171); net D/E 0.03; net debt/EBITDA 0.1 [V] call |
| CFO | 17 | 25 | 57 | Screener [V]; company FY26 CFO ₹57 Cr after a ₹105 Cr working-capital build [V] deck |
| FCF | −18 | −21 | 4 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]):
- Price ₹2,281; m-cap **₹15,265 Cr**; 52-week high/low ₹2,620 / ₹777; 1-year return +87%.
- P/E **114×** (TTM PAT ₹134 Cr).
- P/B **21.1×** (book ₹108/share).
- EV/EBITDA ≈ **76×** TTM OP ₹201 Cr, or 88× FY26 [E].
- Dividend: none.

### Q1 FY27 (Jun-26 quarter) — deck p.8 [V]
| ₹ Cr | Q1 FY27 | Q1 FY26 | Q4 FY26 | YoY |
|---|---|---|---|---|
| Revenue | 484 | 323 | 480 | +49.8% |
| Gross margin (rev − COGS) | 168 (34.7%) | 115 (35.5%) | 162 (33.7%) | −85 bp |
| EBITDA | 58 (12.0%) | 30 (9.2%) | 57 (11.8%) | +94% |
| PAT | 35 (7.2%) | 14 (4.4%) | 41 (8.4%) | +145% |

- **Segment economics:**
  - India manufacturing is 72% of revenue, at 16.7% EBITDA and 11.1% PAT margin.
  - US manufacturing is 28% of revenue and lost about ₹4 Cr in the quarter, a narrowing loss.
  - Excluding US tariff pass-through, EBITDA margin would be ~0.9 pp higher (call [V]).
- Q2 FY27 is not out.

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | **₹2,208 Cr** (Jun-26, +23.4% YoY), executable over ~14 months on average. ₹2,196 Cr at Mar-26 (primer) | Deck p.5 [V] |
| Other contracts outside the order book | Long-term contracts executable over 15–36 months: ₹1,256 Cr. Orders running 3–15 years: ₹3,465 Cr, not counted | Deck, call [V] |
| Order-book cover | ≈1.25× TTM revenue (≈15 months) | [E] 2,208 ÷ 1,764 |
| Book-to-bill | Q1 ≈1.0–1.05× | [E] order book +₹12 Cr QoQ on ₹484 Cr revenue |
| Gross margin | 34.7% Q1 FY27; guided band 33–35% | Company basis: rev − COGS [V] |
| NWC days (company) | **117** (Jun-26), vs 142 Jun-25 and 112 Mar-26. Inventory 94, receivables 74, payables 51 days | Call, deck p.10 [V]. Basis: trailing-three-month annualised revenue, adjusted for advances |
| NWC days, March year-ends (company) | Mar-24 161 → Mar-25 124 → Mar-26 112 | Deck [V] |
| Screener FY26 days | Debtor 87 · Inventory 161 · Payable 87 · CCC 160 · WC days 86 | Screener [V]. Screener measures inventory on COGS, hence higher |
| CFO/EBITDA | FY26 33% (57/173); 3-yr FY24–26 28% (99/351). Screener's CFO/OP shows 53%. Q1 FY27 CFO +₹32 Cr (≈55% of EBITDA) | [E]; screener [V]; call [V] |
| Fixed-asset turnover | 8.3× FY26 (1,603 ÷ net FA ₹192 Cr); company "asset turn" 9.9× | [E]; deck [V] |
| Export / US share | US-based customers: 59% of revenue Q1 FY27, 62% FY26. India customers 41% / 38% | Deck p.12 [V] |
| Client concentration | Not disclosed in the fetched documents | — |
| Box-build share | 60% of revenue (Q1 FY27) | Deck [V] |

### Segment / end-market mix (deck p.11 [V])
| Vertical | FY26 | Q1 FY27 |
|---|---|---|
| Clean energy (solar, EV, hydrogen) | 20% | 29% |
| Mobility (rail, auto, aerospace) | 28% | 25% |
| Industrials (power & automation, incl. semiconductor equipment) | 34% | 32% |
| Communication | 8% | 4% |
| Medical, defence & others | 10% | 10% |

### Capacity / plants
- **Footprint** (deck [V]):
  - 16 manufacturing units across India and the US, with more than 615k sq ft of design and manufacturing space.
  - 65 production lines running 2 shifts, which gives buffer capacity to ramp up.
- **Locations:**
  - India: Chennai, including an MEPZ-SEZ unit, and Bengaluru.
  - US: Atlanta (ABV Electronics), plus a site in California [K].
- **New Chennai plant:** built for domestic demand; commercial production starts Q2 FY27 (call [V]).
- **Oragadam land:** a 99-year lease of **25.08 acres at SIPCOT Oragadam**, signed 8 Oct 2026, to set up an industrial unit [V].

### Capex / guidance (call [V])
- **FY27 revenue growth:** raised to **26–30%** from 24–27%. The earlier target of doubling FY24 revenue by FY27 (₹1,734 Cr) was met a year early on a TTM basis.
- **New target:** double FY26 revenue to ~₹3,200 Cr by FY29.
- **Capex:** ₹56 Cr in FY26 and ₹16 Cr in Q1 FY27; annual run-rate ₹50–60 Cr, plus a modular Chennai land and building expansion. No EBITDA-margin guide is given; the gross-margin band is 33–35%.
- **Growth drivers:**
  - A leading wafer-fab-equipment OEM has widened its allocation to Avalon beyond power boxes.
  - Aerospace cabin sub-assemblies are moving to volume.
  - Locomotive engine sub-systems, and Kavach (Indian Railways' train anti-collision system), are heading to commercial production.

### Ownership
| Holder | Jun-26 (screener, latest posted) [V] |
|---|---|
| Promoters | 44.39% |
| FIIs | 7.81% |
| DIIs | 24.72% |
| Public | 23.08% |

- **New: promoter block sale on 30 Sep 2026** [V Reg 29(2)].
  - Promoter Bhaskar Srinivasan and two family trusts (BBS and KBS Family Trust) sold 40,08,705 shares (6.00%) by block deal.
  - Bhaskar Srinivasan individually went from 9.38% to 7.38%; each trust from 3.02% to 1.02%.
  - Implied promoter-group holding after the sale is **≈38.4%** [E] (44.39 − 6.00).
- The other promoter is Kunhamed Bicha (CMD). He was re-appointed, per the 8 Oct 2026 BSE clarification (title [V]).

### Story bullets
- **Margin turn is under way.**
  - Eighth straight quarter of sequential improvement.
  - EBITDA margin 12.0% in Q1 FY27, vs 7.3% FY24.
  - The India plants already earn 16.7%; the US loss is down to about ₹4 Cr a quarter.
- **Cash conversion is still weak but improving.**
  - NWC fell to 117 days from 142.
  - FY26 CFO was only 33% of EBITDA; Q1 FY27 CFO was positive at ₹32 Cr.
- **Valuation is the richest in the batch.** P/E is 114× and P/B 21×. A 6% promoter block sale came near the 52-week high.
- **Capex-light.** Asset turns are about 10×. The new Oragadam land signals the next leg of capacity.

### Risks
- US tariff policy and US customer destocking (as in FY24).
- Concentration in a few wafer-fab-equipment and clean-energy customers; not quantified.
- Promoter selling overhang.
- Inventory-heavy working capital.

---

## 4. Honeywell Automation India Ltd (HAIL) — NSE: HONAUT · BSE: 517174
Fetched 13 Oct 2026. Sources:
- Screener standalone [V] https://www.screener.in/company/HONAUT/. HAIL has no subsidiaries: note 3 of its results says "The Company does not have any subsidiary or associate companies".
- Q1 FY27 results filing, 29 Jul 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/599d467f-ba4b-4ade-9cd3-df391ada751e.pdf
- Parent restructuring: Industrial Automation India, 29 Jun/1 Jul 2026 [V] https://www.industrialautomationindia.in/news/honeywell-technologies-independent-automation-company
- Listing status: listed. Promoter (Honeywell group) holds 75.00%; there is no delisting or open-offer filing visible on the screener announcements list.

**Archetype:** MNC automation and controls subsidiary covering process automation (oil and gas, refining, chemicals, power), building automation and sensing/safety. It also has a related-party engineering-export arm. It is asset-light, cash-rich and runs negative working capital.

### Effect of the Honeywell global split on HAIL
- **What happened at the parent:**
  - Honeywell International separated into three companies.
  - Solstice Advanced Materials was spun off first: 30 Oct 2025 [K, Honeywell press release Oct-2025; not fetched].
  - Aerospace was spun off effective 29 Jun 2026: one Honeywell Aerospace (Nasdaq: HONA) share for every two shares held, record date 15 Jun 2026 [V article].
  - The remaining automation company is **Honeywell Technologies** (keeps the ticker HON; Chairman and CEO Vimal Kapur). Its portfolio spans building, process and industrial automation [V].
- **What it means for HAIL:**
  - HAIL's Q1 FY27 results letterhead now carries the "Honeywell Technologies" logo [V filing]. HAIL therefore sits under the automation company, which is the core continuing entity, not in a spun-off business.
  - HAIL's own segment is unchanged: a single segment, "Automation & Control Systems" [V].
  - HAIL's own aerospace exposure is negligible, by my reading of its single-segment reporting [E]. Aerospace engineering in India sits in unlisted Honeywell entities [K].
- **Open questions** (not resolved this session; flag as unverified):
  - Whether any HAIL engineering-export work for aerospace group companies moves to the new Honeywell Aerospace.
  - Whether royalty or brand-fee terms with the new parent change.
- **Separate point:** Solstice (refrigerants and advanced materials) was never part of HAIL.

### Standardized financials (standalone, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 4,058 | 4,190 | 4,682 (+11.7%) | Screener [V]; filing FY26 ₹4,681.9 Cr [V] |
| EBITDA (screener OP, ex other income) | 595 (15%) | 590 (14%) | 613 (13%) | Screener [V] |
| EBITDA (my calc from filing) | — | — | 605.5 (12.9%) | [E] = PBT before exceptional 721.1 + finance cost 9.7 + D&A 53.7 − other income 179.0 |
| Other income | 143 | 182 | 165 | Screener [V]. ~27% of PBT, mostly interest on cash |
| Exceptional (FY26) | — | — | −12.3 (Labour Code gratuity, net of related revenue) | Filing note 5 [V] |
| PAT | 501 | 524 | 525 (+0.2%) | Screener / filing [V] |
| ROCE | 20% | 18% | 17% | Screener [V] |
| ROE | — | — | 13% (current 12.6%) | Screener [V] |
| Borrowings | 60 | 101 | 110 (lease liabilities) | Screener [V] |
| Cash equivalents | 2,823 | 3,291 | 3,806 | Screener schedule [V]. A further ₹477 Cr sits in "loans & advances", possibly deposits/ICDs — not confirmed |
| Net cash | 2,763 | 3,190 | **3,696** | [E] screener basis |
| CFO | 439 | 426 | 493 | Screener [V] |
| FCF | 407 | 399 | 460 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]):
- Price ₹32,540; m-cap **₹28,745 Cr**; 52-week high/low ₹41,495 / ₹26,220; 1-year return −10%.
- P/E **51.4×** (TTM PAT ₹551 Cr).
- P/B **6.4×** (book ₹5,047/share).
- EV/EBITDA ≈ **39×** TTM OP ₹636 Cr, or 41× FY26 [E].
- Dividend yield 0.34% (FY26 final dividend ₹110/share [K, primer]).

### Q1 FY27 (Jun-26 quarter) — BSE results filing [V]
| ₹ Cr | Q1 FY27 | Q1 FY26 | Q4 FY26 | YoY |
|---|---|---|---|---|
| Revenue from operations | 1,204.4 | 1,183.1 | 1,180.7 | **+1.8%** |
| Material cost (RM + traded goods + inventory change) | 710.7 | 740.7 | 696.6 | −4% |
| Gross margin (proxy) | 41.0% | 37.4% | 41.0% | +360 bp |
| Employee cost | 232.8 | 216.9 | 205.8 | +7% |
| EBITDA (ex OI) [E] | 172.5 (14.3%) | 141.5 (12.0%) | 184.8 (15.7%) | +22% |
| Other income | 46.4 | 41.8 | 47.5 | +11% |
| PAT | 150.7 | 124.6 | 159.7 | +21% |

- Q2 FY27: the board meets on **27 Oct 2026** (BSE intimation, 1 Oct 2026, per the screener announcements list [V]).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book / inflow | **Not disclosed** in results filings. HAIL does not publish a regular backlog; no investor deck since Nov-24 on screener | Unverified |
| Gross margin | FY26 38.5% · Q1 FY27 41.0% | [E] from filing (materials + traded goods + inventory change) |
| NWC (screener FY26) | Debtor 90 · Inventory 27 · Payable 130 · **CCC −12** · WC days 27 (FY25: 98 / 34 / 137 / −4 / 39) | Screener [V] |
| CFO/EBITDA | FY26 80% (493/613); 3-yr FY24–26 76% (1,358 / 1,798). Screener's own CFO/OP shows 118% FY26 | [E]; screener [V] |
| Fixed-asset turnover | ~23× (4,682 ÷ net FA ₹202 Cr) | [E] |
| Export share | ~33% of FY26 turnover, almost all related-party sales to Honeywell group entities | [K] Business Upturn, cited in primer; not re-fetched |
| Client concentration | Group-company exports ~a third. Domestic customers are PSU oil & gas, refiners, chemicals and building projects; not quantified | [K] |
| End-markets | Single reported segment. Underlying businesses: process solutions; building automation; sensing, safety & productivity; engineering exports | [K] primer |

### Capacity / plants
- Pune (Hadapsar) manufacturing and engineering, plus project offices across India [K].
- Asset-light: net fixed assets of ₹202 Cr against revenue of ₹4,682 Cr [V].

### Ownership (Screener, **Sep-26**, the latest) [V]
| Holder | Sep-26 | Sep-25 |
|---|---|---|
| Promoter (Honeywell Asia Pacific Inc. [K]) | 75.00% | 75.00% |
| FIIs | 4.00% | 3.00% |
| DIIs | 11.49% | 11.99% |
| Public | 9.51% | 10.00% |

Managing Director: Atul Vinayak Pai (the results are signed "Atul Vinay…, Managing Director", DIN 02704506 [V]; full name [K]).

### Capex / guidance
- No numeric guidance. Press coverage refers to an aspiration of growing at "2× GDP" (search snippet, compoundingai.in; not fetched, so unverified).
- Capex is maintenance-level, about ₹30–50 Cr a year [E]: screener FCF minus CFO is ≈ −₹33 Cr in FY26.

### Story bullets
- **Quality MNC with stalled growth.**
  - FY26 PAT was flat (₹525 Cr vs ₹524 Cr), and Q1 FY27 revenue grew only +1.8%.
  - Margin recovery (Q1 EBITDA 14.3% vs 12.0%) drove the +21% PAT.
- **The de-rating continues.** The stock is −10% over one year and −5% a year over three years. P/E is 51× now, versus ~63× in the Jul-26 primer.
- **Parent restructuring is benign for the business but adds an overhang.** HAIL sits with the core automation company, Honeywell Technologies. Investors will watch royalty and transfer-pricing terms and any capital-allocation change, such as a buyback or special dividend from the ₹3,800 Cr cash pile.
- **Cash conversion is strong** (CFO about 80% of EBITDA) and the cash conversion cycle is negative. Other income is a quarter of PBT.

### Risks
- Domestic process-industry capex timing, especially oil & gas and PSU orders.
- Related-party pricing.
- Lumpy project revenue.
- Low float of 25%.
- Possible parent-level portfolio actions (a sale or carve-out of Indian businesses).
- No order-book disclosure, so revenue visibility is poor.

---

## 5. Jyoti CNC Automation Ltd — NSE: JYOTICNC · BSE: 544081
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/JYOTICNC/consolidated/
- Q1 FY27 investor presentation (BSE, Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/3ef1e735-8b24-40e1-9a77-dad8e04fd467.pdf
- Q1 FY27 call transcript (Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/5bedd76e-3923-49ca-b0c3-73f014a8a77d.pdf
- Listing status: listed (IPO Jan 2024). No merger or demerger.
- A Reg 31(1)/31(2) SAST disclosure was filed on 30 Sep 2026; it is the annual promoter-encumbrance declaration format. The PDF text could not be extracted (scanned), so its content is **unverified**.

**Archetype:** domestic CNC machine-tool OEM (Rajkot) that also owns Huron Graffenstaden (Strasbourg, France), a high-end 5-axis and aerospace machining house. It is a capex-cycle play on aerospace & defence, auto, EMS and general engineering. Working capital is very heavy.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 1,338 | 1,818 | 2,093 (+15.1%) | Screener [V]; deck 1,338.5 / 1,817.7 / 2,093.1 [V] |
| EBITDA | 301 (22.5%) | 491 (27.0%) | 527 (25.2%) | Screener OP = company EBITDA [V] deck p.38 |
| Gross margin (rev − COGS) | 49.7% | 52.2% | 55.1% | Deck [V], company basis |
| Other income | 6 | 5 | 60 | Screener [V] |
| PAT | 151 | 316 | 336 (+6.3%) | Screener / deck [V] |
| ROCE | 21% | 24% | 21% | Screener [V] |
| ROE | — | — | 18% | Screener [V] |
| Borrowings | 304 | 497 | 853 | Screener [V]. Company: LT 410.2 + ST 439.5 + leases 3.1 = ₹853 Cr [V] deck p.39 |
| Cash (incl. other bank balances) + investments | 386 + 4 | 125 + 0 | 137 + 16 | Screener [V]. Company: cash 52.9 + bank 84.3 [V] |
| Net debt | (86) net cash | 372 | **700** | [E] screener basis. Company ≈₹716 Cr (853 − 137); net D/E ≈0.36× |
| CFO | −48 | −105 | 54 | Screener [V]. Company: CFO before exceptional ₹87 Cr after a ₹309 Cr working-capital build [V] |
| FCF | −163 | −415 | −269 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]):
- Price ₹1,022; m-cap **₹23,227 Cr**; 52-week high/low ₹1,135 / ₹580; 1-year return +9%.
- P/E **72.2×** (TTM PAT ₹322 Cr).
- P/B **11.6×** (book ₹88/share).
- EV/EBITDA ≈ **45×** TTM OP ₹535 Cr; 45× FY26 [E].

### Q1 FY27 (Jun-26 quarter) — deck p.9–10 [V]
| ₹ Cr | Consol Q1 FY27 | Consol Q1 FY26 | YoY | Standalone Q1 FY27 | Standalone YoY |
|---|---|---|---|---|---|
| Revenue | 508.5 | 410.2 | +24.0% | 509.1 | +36.7% |
| Gross margin | 58.2% | 56.0% | +220 bp | 52.8% | +230 bp |
| Adj. EBITDA (ex unrealised forex loss) | 118.8 (23.4%) | 100.2 (24.4%) | +18.6% | 144.7 (28.4%) | +46.7% |
| Reported EBITDA | 108.8 (21.4%) | 100.2 | +8.6% | 138.7 (27.2%) | +40.6% |
| Finance cost | 24.3 | 12.2 | +99% | 20.0 | |
| PAT | **57.1** | 71.4 | **−20.0%** | 87.5 | +21.3% |

- **Why consolidated is below standalone** (call [V]):
  - Huron moved from percentage-of-completion to completed-dispatch revenue recognition, deferring ≈₹35 Cr of revenue and ≈₹20–22 Cr of EBITDA.
  - Huron revenue was ≈₹35 Cr, versus ≈₹70 Cr in Q1 FY26.
  - Consolidated revenue includes ₹35 Cr of Jyoti→Huron sales that are eliminated on consolidation.
  - Forex swung to a ₹10 Cr loss, from a ₹20 Cr gain last year.
  - Export-licence requirements on Huron machines remain an issue.
- **Machines sold:** 1,406, vs 1,117 (entry-level 1,349; mid-range 33; high-end 24).
- Q2 FY27 is not out.

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | **₹4,848 Cr** (30 Jun 2026), vs ₹4,732 Cr at 31 Mar 2026 | Deck p.8 [V] |
| Order inflow / book-to-bill (Q1) | Intake ₹601 Cr, executed ₹485 Cr → **1.24×** | Deck [V]; [E] ratio |
| Order-book cover | ≈2.2× TTM revenue (≈27 months) | [E] 4,848 ÷ 2,191 |
| Order-book mix (Jun-26) | Aerospace & defence 38%, general engineering 20%, auto 19%, EMS 13%, die & mould 4%, others ~6% | CFO, call [V] |
| Gross margin | 55.1% FY26; 58.2% Q1 FY27 | Deck [V] |
| Screener FY26 days | Debtor 104 · **Inventory 453** · Payable 198 · **CCC 359** · WC days 234 (FY25: 98 / 378 / 172 / 304 / 203) | Screener [V] |
| Unbilled / other current financial assets | ₹624 Cr at Mar-26 (₹538 Cr Mar-25), on top of ₹599 Cr receivables | Deck p.39 [V]. Likely contract assets; check the annual report |
| CFO/EBITDA | FY26 10% (54/527); 3-yr FY24–26 **−8%** (−99 / 1,319) | [E] from screener |
| Fixed-asset turnover | 2.9× FY26 (2,093 ÷ net FA ₹720 Cr) | [E] |
| Capacity utilisation | **86%** (Q1 FY27) on 6,000 machines/yr installed in India | Call, deck [V] |
| Export share | **Not disclosed** in the fetched documents. Huron (France) contributes a share; there are 11 international dealers | Unverified |
| Client concentration | Not disclosed. A&D customers include HAL-type PSUs (HAL mentioned on the call in the export-licence context) | Call [V] |

### Segment / end-market mix (revenue)
- Deck p.7 [V] shows a pie of revenue by end-user industry (A&D, auto, general engineering, die & mould, EMS, others). Labels are not unambiguous in the text extract.
- Q1 FY27 largest slices are ~37% and ~35% (A&D and auto/general engineering), then ~17%. Treat as approximate [E].
- The A&D share of the *order book* (38%) is the reliable figure.

### Capacity / plants (deck, call [V])
- **India (Rajkot):** 2 plants; installed capacity 6,000 machines/yr; ~157,155 m² of unutilised land.
- **France:** Huron, 46,442 m² at Strasbourg, plus 32,144 m² of unutilised land.
- **Subsidiaries:** France, Germany, Canada, Turkey.
- **Expansion:** +10,000 machines/yr, taking total India capacity to 16,000 [E]. Due September 2026; the foundry slips about a month, to October. Capex about **₹450 Cr**.
  - Machine shop ~80% complete.
  - Sheet-metal and paint shops are finishing.
  - Assembly building ready.

### Capex / guidance (call [V])
- FY27 consolidated revenue growth **25–30%** at an EBITDA margin of about 25%, reaffirmed despite Q1. Management expects a "particularly robust" H2.
- FY26 growth was 15% against an earlier 35–40% guide, per the primer.
- Management expects working capital (inventory) to improve "drastically" once the new plant runs, and operating cash flow to "positively surprise". This is a promise, not yet evidence.

### Ownership (Screener, **Sep-26**, the latest) [V]
| Holder | Sep-26 | Sep-25 |
|---|---|---|
| Promoters | 62.55% | 62.55% |
| FIIs | 5.26% | 9.91% |
| DIIs | 12.86% | 12.90% |
| Public | 19.33% | 14.63% |

- Shareholders: 90,476.
- Management: Parakramsinh Jadeja, CMD and founder (speaker on the call [V]).

### Story bullets
- **Strong order book, but revenue is capacity-constrained.** The book is ₹4,848 Cr (2.2× revenue), utilisation is 86%, and capacity rises 2.7× from Sep/Oct 2026. FY27 is a ramp year.
- **The worst cash conversion in the batch.**
  - Inventory days are around 450 and CCC around 360.
  - Cumulative CFO over FY24–26 is negative despite ₹1,319 Cr of EBITDA.
  - Net debt went from net cash at FY24 to about ₹700 Cr at FY26. Interest cost doubled YoY in Q1.
- **Huron is the swing factor.** It brings accounting-policy change, export-control licences and lower revenue, and it dragged consolidated PAT −20% while standalone grew +21%.
- **Margins are rich for capital goods** (gross ~55–58%, EBITDA ~23–25%), helped by mix.
  - Q1 units were skewed to entry-level machines: 1,349 of 1,406.
  - High-end machines were 24 units and mid-range fell to 33 from 104.

### Risks
- Capacity-ramp execution.
- Working-capital blow-out, needing more debt or equity.
- Export-control and licence risk on aerospace/defence machines.
- Customer capex cycle in auto and EMS.
- A cyclical business on a 72× P/E.
- Pledge/encumbrance status not verified this session.

---

## Batch-1 summary grid (13 Oct 2026)
**Basis:**
- FY26 figures are consolidated, except HAIL (standalone).
- EBITDA = screener OP. Net debt on company basis where fetched; a negative figure is net cash.
- M-cap, P/E and P/B are from screener [V], 13 Oct 2026. EV/EBITDA is [E] on TTM.

| Metric | Kaynes | Syrma SGS | Avalon | Honeywell Auto (HAIL) | Jyoti CNC |
|---|---|---|---|---|---|
| FY26 revenue (₹ Cr) | 3,626 | 4,819 | 1,603 | 4,682 | 2,093 |
| FY26 growth | +33% | +27% | +46% | +12% | +15% |
| FY26 EBITDA (₹ Cr) | 578 | 546 | 173 | 613 | 527 |
| EBITDA margin | 15.9% | 11.3% | 10.8% | 13.1% | 25.2% |
| FY26 PAT (₹ Cr) | 364 | 346 | 113 | 525 | 336 |
| Net debt (₹ Cr) | ~76 (co.) / −143 (scr.) | −467 Mar-26; −122 Jun-26 (co.) | 24 Jun-26 (co.) / 61 (scr.) | −3,696 | ~716 (co.) |
| M-cap (₹ Cr) | 22,097 | 32,665 | 15,265 | 28,745 | 23,227 |
| P/E | 63.6× | 88.0× | 114× | 51.4× | 72.2× |
| P/B | 4.6× | 11.4× | 21.1× | 6.4× | 11.6× |
| EV/EBITDA (TTM) | ~36× | ~53× | ~76× | ~39× | ~45× |
| ROCE (FY26, screener) | 13% | 17% | 19% | 17% | 21% |
| Order book (Jun-26) | ₹8,904 Cr (2.3× TTM rev) | ₹6,770 Cr (1.2×; ~10.5 months) | ₹2,208 Cr (1.25×; ~14 months) | not disclosed | ₹4,848 Cr (2.2×) |
| Q1 FY27 book-to-bill | ~1.6× | ~1.24× | ~1.0× | n.a. | 1.24× |
| NWC days (company) | 163 (rolling, Jun-26) | 71 (Jun-26) | 117 (Jun-26) | n.a. | n.a. |
| CCC / WC days (screener FY26) | 193 / 133 | 48 / 68 | 160 / 86 | −12 / 27 | 359 / 234 |
| CFO/EBITDA FY26 | −104% | 53% | 33% | 80% | 10% |
| CFO/EBITDA 3-yr | −47% | 33% | 28% | 76% | −8% |
| Gross margin (co. basis) | 34.6% FY26; 34.4% Q1 | 24.5% Q1 | 34.7% Q1 | 38.5% FY26 [E]; 41.0% Q1 | 55.1% FY26; 58.2% Q1 |
| Export share | n.d. (overseas subsidiaries ~11% of Q1) | ~24–25% | 59–62% US customers | ~33% (related-party) [K] | n.d. |
| Top-client concentration | n.d. | Top-5 38%, top-10 51% | n.d. | Group exports ~⅓ | n.d. |
| Fixed-asset turnover | 2.3× | 3.3× | 8.3× (co. 9.9×) | ~23× | 2.9× |
| Latest promoter holding | 53.46% (Jun-26) | 42.28% (Jun-26) | 44.39% Jun-26 → ≈38.4% after 6% block sale on 30 Sep 2026 [E] | 75.00% (Sep-26) | 62.55% (Sep-26) |
| Q1 FY27 YoY: revenue / PAT | +40% / −24% | +67% / +112% | +50% / +145% | +2% / +21% | +24% / −20% |
| FY27 guide | "2× market"; OSAT + PCB ₹450–500 Cr | Revenue +35%+ (to beat); op. EBITDA 10.5–11% | Revenue +26–30%; GM 33–35%; ₹3,200 Cr by FY29 | none | Revenue +25–30%; EBITDA ~25% |

**Archetypes for the report:**
1. **High-reliability EMS climbing the value chain** — Kaynes (adding OSAT and PCB) and Avalon (dual-shore, box-build).
2. **Diversified volume EMS with exports** — Syrma.
3. **MNC automation subsidiary** — HAIL: asset-light, negative CCC, related-party exports.
4. **Domestic machine-tool OEM** — Jyoti: capex-cycle beta, capacity-constrained, very heavy working capital.

**Cross-batch themes:**
- **Q1 FY27 component and logistics inflation from the West Asia escalation.** All three EMS names built "strategic inventory" in Q1 FY27; NWC rose at Kaynes and Syrma.
- **Raw-material pass-through:** EMS pass component prices through with a lag (Kaynes and Syrma said so on their calls). Jyoti and HAIL have pricing power from their mix.
- **China+1 exports** are visible at Syrma (exports +61%) and Avalon (US customers at 59–62% of revenue).

---

## PRIMER ISSUES
Each primer was read in its cover strip, "What's new" box and first sections, then grepped for key figures. Primer text was extracted from `primers/<file>.html`; section numbers refer to the primer's own numbering. Corrections are from sources fetched this session [V] unless tagged otherwise.

### primers/kaynes-technology.html (refreshed 14 Jul 2026)
1. **Stale m-cap / P/E (cover strip, §00 "A price that already believes", §11 stat cards, §11 note).**
   - Primer: "~₹32,000 Cr Market cap (Jul '26)" and "~88× earnings".
   - Correct: ₹22,097 Cr at ₹3,290, P/E 63.6×, P/B 4.6×, 13 Oct 2026 (screener [V]). The stock is −52% over one year (52-week high ₹7,140).
2. **FY26 revenue (cover strip, §00, §11 revenue chart and note).**
   - Primer: "~₹3,602 Cr".
   - Correct: revenue from operations **₹3,626.4 Cr** (Q1 FY27 deck p.22 [V]; screener 3,626 [V]). Growth is +33.2%.
3. **FY24 EBITDA margin (§11 margin chart).**
   - Primer: "FY24 ~14.7%".
   - Correct: company EBITDA margin 14.1% (₹254.2 Cr on ₹1,804.6 Cr; deck p.22 [V]). FY25 15.1% and FY26 15.8% are correct.
4. **Missing Q1 FY27 entirely.**
   - Missing figures: revenue ₹946 Cr (+40%), EBITDA ₹147.6 Cr (15.6%), PAT ₹56.4 Cr (**−24%**), gross margin 34.4% vs 41.3%, order book ₹8,904 Cr (+20% YoY).
   - Source: deck p.17/21 and call of 8 Aug 2026 [V].
5. **Stale OSAT guidance (§07, ~line "~₹1,000 Cr"; §11 "against its ~₹1,000 Cr FY27 guide"; §12 closing paragraph).**
   - Correct: management now targets **₹450–500 Cr combined OSAT + PCB revenue in FY27**, starting Q3 FY27, after timing slippage (call [V]).
6. **Wrong management roles (§04 "Ownership & management").**
   - Primer: Ramesh Kunhikannan "is Managing Director"; Savitha Ramesh is "Chairman and Executive Director".
   - Correct: Ramesh Kunhikannan is **Executive Vice Chairman**; **Dr. Muthukumar Narayanaswamy is Managing Director**; Jairam P. Sampath is WTD & CFO; Savitha Ramesh is Chairperson (Q1 FY27 call cover page [V]).
7. **Stale ownership (§04).**
   - Primer: "Mutual funds hold roughly ~18% and foreign investors around ~11%, with retail investors near ~10%".
   - Correct (Jun-26, screener [V]): promoters 53.46%, **DIIs 11.78%, FIIs 5.82%, public 28.93%**. Institutions have sold heavily since Dec-25.
   - "~53% personally, with the promoter group a little higher" is also wrong: 53.46% is the **whole promoter group**.
8. **Missing major event: the December 2025 disclosure controversy** (Kotak Institutional Equities note of 3 Dec 2025).
   - The note flagged related-party omissions in the standalone accounts, goodwill/intangible accounting and contingent liabilities of ₹520 Cr.
   - The company called the omissions inadvertent and rectified them, and denied an auditor change to the exchanges.
   - Not mentioned anywhere in the primer (grep for "Kotak", "related-party", "auditor" returns nothing). Source: Business Standard 5 Dec 2025 / FilingReader (search snippets [K]); management alluded to it on the Q1 FY27 call [V].
9. **Understated working-capital and cash stress (§10 "Where the cash goes", §12 bear case).**
   - Primer: NWC "toward the ~110–120-day range from the high-80s".
   - Correct: company NWC **163 days** (rolling, Jun-26), from 122 a year earlier. Screener FY26: CCC 193 days, debtor days 154.
   - **FY26 CFO was −₹600 Cr** and FCF −₹1,841 Cr (screener; deck cash-flow [V]). Metering collections in Q1 were ₹88 Cr against ₹240 Cr of sales (call [V]). "Free cash flow lags profit" is too mild.
10. **Missing ECMS approvals.** No mention of ECMS (Electronics Component Manufacturing Scheme) approvals for Kaynes Circuits/PCB projects, which the brief asks for. Not verified this session [K]; add after checking MeitY/BSE.
11. **Net debt/equity (§04 "~0.1", §11 stat card "~0.1x").** Consistent with the company's Q1 FY27 net D/E of 0.1 [V]. Gross borrowings are up to ₹875 Cr while cash fell to ₹799 Cr; note the trend.
12. **Banned phrases:** none of the listed phrases found; "honest" appears 0 times.

### primers/syrma-sgs-technology.html (refreshed 13 Jul 2026)
1. **Stale m-cap (cover strip "~₹27,600 Cr Market cap (Jul '26)", §00, §11 "₹27,600 Cr market cap").**
   - Correct: **₹32,665 Cr** at ₹1,694; P/E 88.0×; P/B 11.4× (screener, 13 Oct 2026 [V]). The stock is +104% over one year.
   - The P/E (~85×) is roughly unchanged.
2. **Missing Q1 FY27** (results 29 Jul 2026):
   - Revenue ₹1,588.6 Cr (+67%), operating EBITDA ₹161.6 Cr (10.2%), PAT ₹105.7 Cr (+112%).
   - Exports 24% of revenue; order book ₹6,770 Cr.
   - Net cash fell to ₹122 Cr from ₹467 Cr as working-capital debt rose to ₹619 Cr.
   - Source: deck p.5/9 [V].
3. **Order book at Mar-26 (cover strip, §00, §11).**
   - Primer: "~₹6,600 Cr".
   - The CFO said "my quarter order book as on the end of March was 6,400" (Q1 FY27 call [V]). Use ₹6,400 Cr, or flag the conflict. The call is the more credible source.
4. **Wrong DII holding (§04 "Public / institutional").**
   - Primer: "DIIs / mutual funds (a low-but-rising single-digit share)".
   - Correct: **DIIs 16.59% (Mar-26) and 15.90% (Jun-26)**; FIIs 7.51%; promoters 42.28% (screener [V]).
5. **"Net cash ~₹467 Cr" (§04, §11 stat card)** is correct for Mar-26 (deck [V]) but stale. It was **₹122 Cr at Jun-26**.
6. **Guidance (§00 "30–35% growth").** Now "35%+ revenue growth, expected to be exceeded", with operating EBITDA margin 10.5–11% (call [V]).
7. **Missing items:**
   - Kaga (Japan) 60:40 EMS JV (Q1 FY27).
   - PCB plant timing: power-on Jan–Mar 2027, commercial production Apr 2027; phase-1 ≈₹400 Cr with a 50% capex incentive.
   - Capacity utilisation 65–70%.
   - Customer concentration: top-10 = 51%.
   - Jodhpur MedTech facility inaugurated 22 Sep 2026.
   - Source: call [V]; BSE announcement title [V].
8. **Banned phrases:**
   - "Think of Syrma as a rent-a-factory" (§00 "In plain terms").
   - "priced-for-perfection" (§00) and "Priced for perfection" (§12 bear case, plus the §09 header "priced for perfection across the board").
   - "leaves no room for a stumble" (§12; a near-variant of "no room for error") and "leaving zero room for a growth wobble" (§11).
   - "Both can be right at different points in the cycle" (§11).
   - "The story over the next few years will be written in three numbers" (§12).
   - "the compounding can grow into the multiple" (§12).
   - "a very long way to fall" (§12).
   - "honest" appears once ("The honest tension in one paragraph", §10), within the limit.

### primers/avalon-technologies.html (refreshed 02 Aug 2026)
1. **Stale m-cap / P/E (cover strip "~₹12,000 Cr Market cap (mid-2026)", §00 "near 100× earnings", §11 "~100×").**
   - Correct: **₹15,265 Cr** at ₹2,281; P/E **114×**; P/B 21.1× (screener, 13 Oct 2026 [V]).
2. **Missing Q1 FY27** (5 Aug 2026, three days after the refresh):
   - Revenue ₹484 Cr (+49.8%), EBITDA ₹58 Cr (12.0%), PAT ₹35 Cr (+145%).
   - Order book ₹2,208 Cr (+23.4%); NWC 117 days (from 142).
   - FY27 growth guidance raised to **26–30%**; new target ₹3,200 Cr revenue by FY29.
   - Source: deck p.5/8, call [V].
3. **Missing major event: promoter block sale on 30 Sep 2026.**
   - Promoter Bhaskar Srinivasan and two family trusts sold **6.00%** (40.09 lakh shares). The promoter group falls to ≈38.4% from 44.39% [E].
   - Source: Reg 29(2) disclosure, 1 Oct 2026 [V].
   - The primer's §04 only says promoter holding "has drifted down since listing". It should state the Jun-26 figure of 44.39% and the 6% sale.
4. **Missing: 25.08-acre SIPCOT Oragadam land lease** (8 Oct 2026, 99 years) and the new Chennai domestic plant, commercial production from Q2 FY27 [V].
5. **Plant count (title/intro "ten plants in India and two on American soil"; §04, §09 "ten Indian plants").** The company deck says "**16 manufacturing units across US/India**", 615k+ sq ft, 65 lines (Q1 FY27 deck [V]). Reconcile.
6. **US share (§00 "60% of revenue comes from US customers"; §03).** FY26 was **62%** and Q1 FY27 59% (deck p.12 [V]). Minor.
7. **Box-build (What's-new "~54%").** Fine for FY26; Q1 FY27 is **60%** (deck [V]).
8. **Banned phrases:**
   - "a ~100× stock has nothing to grow into" (§06) is a variant of "grow into the multiple". Reword.
   - No other listed phrases found; "honest" appears 0 times.

### primers/honeywell-automation-india.html (refreshed 08 Jul 2026)
1. **Missing major event: Honeywell's global three-way split.**
   - Primer: "Indian-listed subsidiary of Honeywell International" (§00 and throughout). It has no mention of Solstice or the Aerospace spin.
   - Correct:
     - Solstice Advanced Materials was spun off (Oct 2025 [K]).
     - Aerospace was spun off effective **29 Jun 2026**, as Honeywell Aerospace (HONA); one share for every two HON shares (Industrial Automation India, 1 Jul 2026 [V]).
     - The continuing automation company is **Honeywell Technologies** (HON; CEO Vimal Kapur). HAIL now sits under it; its Q1 FY27 results letterhead carries the "Honeywell Technologies" logo [V filing].
   - Add a short section on implications: HAIL stays with the core automation company; royalty and related-party terms and any capital-allocation change are the watch items.
2. **Stale price / m-cap / P/E / P/B (cover strip "~₹33,600 Cr Market cap (mid-2026)"; intro "~₹38,000-a-share"; §00 "~63× earnings"; §08 "63× trailing earnings (P/B ~7.5×)").**
   - Correct: price **₹32,540**, m-cap **₹28,745 Cr**, P/E **51.4×**, P/B **6.4×** (screener, 13 Oct 2026 [V]). The stock is −10% over one year.
3. **Missing Q1 FY27** (results 29 Jul 2026):
   - Revenue ₹1,204.4 Cr (**+1.8%**), PAT ₹150.7 Cr (+21%), EBITDA ≈₹172.5 Cr (14.3%, vs 12.0%).
   - Source: BSE results filing [V]. Also add that Q2 FY27 results are due on 27 Oct 2026.
4. **Ownership.** "75% held" is correct (Sep-26: promoter 75.00%, FII 4.00%, DII 11.49%, public 9.51% [V]). Add the latest split.
5. **FY26 exceptional item missing.** A ₹12.3 Cr net Labour-Code gratuity charge was booked in Q4 FY26 (results note 5 [V]). It is minor, but it explains why FY26 PAT was flat.
6. **Banned phrases:**
   - "Think of HAIL as" (§00).
   - "priced for perfection" (§08 "Why bears say it's priced for perfection").
   - "The story over the next few years will be written in three numbers" (§12).
   - "a ~63× multiple can be grown into" (§12; a "grow into the multiple" variant).
   - "an expensive stock has a long way to fall" (§12).
   - **"honest" appears 4 times**: "The honest counter…" (§06), "one honest caveat" (§07), "Reading the accounts honestly" (§07), "addressed honestly" (§08). This is over the once-only limit.

### primers/jyoti-cnc-automation.html (refreshed 16 Jul 2026)
1. **Stale m-cap / P/E (cover strip "~₹18,000 Cr Market cap (Jul '26)"; §10 "~45×", "At a ~₹18,000 Cr market cap… around 45× trailing earnings"; §12).**
   - Correct: **₹23,227 Cr** at ₹1,022; P/E **72.2×**; P/B 11.6× (screener, 13 Oct 2026 [V]).
   - The primer's own figures are inconsistent: ₹18,000 Cr ÷ consolidated FY26 PAT ₹336 Cr = 54×, not 45×. 45× only works on standalone PAT of ~₹391 Cr; state the basis.
2. **Missing Q1 FY27:**
   - Consolidated revenue ₹508.5 Cr (+24%), adjusted EBITDA ₹118.8 Cr (23.4%), PAT ₹57.1 Cr (**−20%**).
   - Standalone PAT ₹87.5 Cr (+21%). Order book **₹4,848 Cr**; intake ₹601 Cr; utilisation 86%.
   - Huron changed its revenue-recognition method, deferring about ₹35 Cr of revenue.
   - Source: deck p.8–10, call [V].
3. **Aerospace & defence share of the order book (What's-new "~41% of the book"; §06 "~41%").** The company's Q4 FY26 and Q1 FY27 order-book pies and the CFO's Q1 commentary give **38%** (deck p.8, call [V]). Correct it, or cite the source for 41%.
4. **Stale net debt (§04 and §11 "~₹523 Cr by Sep 2025").**
   - Correct: borrowings ₹853 Cr against cash ₹137 Cr at Mar-26 → net debt **≈₹716 Cr** (deck p.39 [V]; screener [V]).
   - Q1 FY27 finance cost doubled YoY to ₹24 Cr.
5. **Capacity wording (§07 chart "India + Huron combined").** The company states installed capacity of **6,000 machines p.a. in India**. The +10,000 expansion is due Sep-2026, with the foundry in Oct-2026; capex ~₹450 Cr (deck, call [V]).
6. **Ownership.** "~62.5%" promoter is correct (Sep-26: 62.55% [V]). Add FII 5.26% (down from 9.91% a year earlier), DII 12.86% and public 19.33%.
7. **Cash-conversion data missing.**
   - Screener FY26: inventory days 453, CCC 359, CFO ₹54 Cr on EBITDA ₹527 Cr; 3-yr CFO negative.
   - ₹624 Cr of "other current financial assets" (likely unbilled) sits beside ₹599 Cr of receivables (deck p.39 [V]).
   - The primer's §04 says only that working capital "pushed net debt back up".
8. **Banned phrases:**
   - None of the exact listed phrases found. "priced for the ramp to work" (§12) is close to "priced for perfection"; consider rewording.
   - "honest" appears once ("The risks, honestly"), within the limit.

### Figures I could not fetch or verify this session
- **Order books / backlog:** HAIL order book or inflow (not disclosed).
- **Export share:** Kaynes and Jyoti (not disclosed in the fetched docs). HAIL's ~33% is [K], from a press report cited in the primer.
- **Client concentration:** Kaynes, Avalon and Jyoti (not disclosed).
- **Kaynes Dec-2025 controversy details:** taken from search snippets (Business Standard / Moneylife / FilingReader), not fetched; the exchange clarification PDF was not opened.
- **Kaynes ECMS approvals:** not checked.
- **Jyoti filing:** Reg 31 SAST disclosure of 30 Sep 2026 (scanned PDF; content unread).
- **Kaynes, Syrma, Avalon shareholding:** Sep-26 not yet on screener (Jun-26 used). Avalon's post-block-sale promoter figure is derived [E].
- **Honeywell split detail:** Solstice spin date (Oct 2025) is [K]. The effect on HAIL's royalty and engineering-export contracts is unverified.
- **Mix percentages read off charts:** Kaynes' vertical mix and Jyoti's revenue mix by end-user were read from pie/bar labels in PDF text extracts; treat as approximate.
- **Screener "CFO/OP" field:** does not reconcile to CFO ÷ OP for these companies, so CFO/EBITDA in this file is my own calculation from screener's CFO and operating-profit lines.
