# Industrial Products — Company Packs, Batch 3 (precision components, mining consumables, heavy fabrication / T&D)

Companies: Azad Engineering (AZAD), Elecon Engineering (ELECON), Tega Industries (TEGA), Skipper (SKIPPER), Lloyds Engineering Works (LLOYDSENGG).
Prepared 13 Oct 2026. Tags: **[V]** fetched this session; **[K]** from memory, source named; **[E]** my estimate or derivation (method stated).

**Sourcing conventions in this file**
- "Screener" means the screener.in company page, fetched by curl on 13 Oct 2026 and parsed with python: `https://www.screener.in/company/<NSE>/consolidated/`. Lloyds Engineering has consolidated accounts only from FY25, so its FY24 figures come from the standalone page `/company/LLOYDSENGG/`. Balance-sheet "Other Assets" was split with screener's schedule API (`/api/company/<id>/schedules/?parent=Other+Assets&section=balance-sheet`). So "cash" here means screener's *Cash Equivalents* line, not "Other Assets". Borrowings were split the same way (`parent=Borrowings`), which shows lease liabilities separately.
- BSE PDFs were fetched from `https://www.bseindia.com/xml-data/corpfiling/AttachHis/<id>.pdf`. The `AnnPdfOpen.aspx?Pname=<id>.pdf` links on screener redirect there. Text was extracted with pdftotext.
- **EBITDA basis.** Screener "Operating Profit" (OP) is revenue minus expenses, before other income. Where I fetched the company's own EBITDA, it is shown separately.
- **Gross margin basis.** Gross margin = (revenue − cost of materials consumed incl. change in inventories) ÷ revenue, as the company reports it. This is only a material-margin proxy. It ignores conversion labour, power and sub-contracting, and for job-work-heavy companies it can be badly misleading (flagged per company).
- **Net debt** [E] = screener borrowings (incl. leases) − screener cash equivalents − screener investments, unless stated. Screener cash can miss bank deposits held in "other assets", so the company's figure is shown wherever I fetched it.
- **EV/EBITDA** [E] = (m-cap + net debt) ÷ TTM screener OP (Jul-25 to Jun-26), unless stated.
- **CFO/EBITDA** [E] = screener cash from operations ÷ screener OP, computed by me. Screener's own "CFO/OP" line sometimes differs (it seems to use a different OP), so both are shown where they diverge. 3-yr = FY24–FY26 sums.
- **NWC days.** Screener's ratio rows are shown as published: Debtor days, Inventory days, Days payable, Cash conversion cycle (CCC), Working-capital days. Screener computes inventory and payable days on cost of materials, so they explode for companies with low material content (Azad). A sales-based version [E] is given where needed.
- **Q2 FY27 (Sep-26 quarter):** none of the five has reported as of 13 Oct 2026. Elecon's board meets on **14 Oct 2026** and its call is on 15 Oct (BSE intimations of 30 Sep and 9 Oct 2026 [V], via the screener announcements list). Tega and Lloyds closed their trading windows from 1 Oct (BSE, 28 Sep and Oct). Azad and Skipper had filed no board-meeting date in the screener-listed announcements as of 13 Oct.

---

## 1. Azad Engineering Ltd — NSE: AZAD · BSE: 544061
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/AZAD/consolidated/
- Q1 FY27 investor presentation (BSE filing, 7 Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/999d22fd-f306-4125-96a1-4a90bc3d7f77.pdf
- Q1 FY27 earnings-call transcript, 8 Aug 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/c595c5f6-1b54-40da-96cf-e395cb5ee8ad.pdf
- Q4 FY26 earnings-call transcript, 16 May 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/521d7519-2127-4c75-a971-addf6e4d3566.pdf
- BSE Reg. 30 order filing, 12 Oct 2026 (BHEL rate contract) [V], title read via the screener announcements list. https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4274d9cc-6b3d-47ac-ac73-88341d87c343.pdf
- Listing status: listed (IPO December 2023). No merger or demerger. The AGM on 29 Sep 2026 re-appointed Rakesh Chopdar (Chairman & CEO), Jyoti Chopdar and Vishnu Malpani for five years (BSE, 30 Sep 2026 [V] title).

**Archetype:** export-led, qualification-gated precision-component supplier ("build-to-print Tier-1"). It machines airfoils (blades and vanes) for energy turbines (gas, steam, nuclear) and aero-engines, and is moving up into complete sub-assemblies and engines (the GTRE/DRDO turbo-gas-generator and expendable turbojet). It is a capacity-led grower. Customers pre-commit through long-term contracts (LTCPAs), and Azad builds a dedicated plant per OEM.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 341 | 457 (+34%) | **603 (+32%)** | Screener [V]; company restated consol 340.8 / 457.4 / 603.0 [V] Q1 deck p.30 |
| EBITDA (screener OP) | 117 (34%) | 161 (35%) | **225 (37%)** | Screener [V] |
| EBITDA (company, reported) | 116.6 (34.2%) | 164.9 (36.1%) | 225.3 (37.4%) | Q1 FY27 deck p.30 [V] |
| Other income | 32 | 11 | 46 | Screener [V]. FY26 is mostly FX gains and treasury income on QIP money (Q4 call [V]) |
| PAT | 59 | 87 | **134 (+54%)** | Screener [V]; company 58.6 / 86.5 / 133.6 [V] |
| ROCE | 21% | 12% | 12% | Screener [V]. Company "adjusted ROCE" (ex-CWIP) 15.3% FY26 [V] deck p.26 |
| ROE | — | — | 9.1% (current) | Screener [V] |
| Borrowings (incl. leases) | 39 | 263 | 474 | Screener [V]; split for FY26: LT 281 + ST 176 + leases 18 |
| Cash equivalents (incl. bank balances) | 59 | 697 | 185 | Screener schedule [V]. Company consol Mar-26: cash 24.5 + other bank balances 160.0 = ₹184.5 Cr [V] deck p.31 |
| Net debt / (net cash) | (20) | (434) | **289** | [E] screener basis. Company: gross borrowings ₹457 Cr, **net ₹272 Cr** (Q4 call [V]). Net D/E 0.17× (deck p.26 [V]) |
| CFO | −7 | 54 | **−119** | Screener [V] |
| FCF (screener) | −78 | −240 | −691 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹2,986; m-cap **₹19,273 Cr**; 52-week high/low ₹3,128 / ₹1,359.
- P/E **139×** (TTM PAT ₹139 Cr).
- P/B **12.6×** (book ₹237/share) [E].
- EV/EBITDA ≈ **81×** TTM OP ₹240 Cr [E] ((19,273 + 289) ÷ 240).
- Dividend: none.

### Q1 FY27 (Jun-26 quarter) [V] deck pp.4, 10; call; screener
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue (consol) | 172.6 | 137.1 | +25.9% | 162 (screener) |
| EBITDA (consol, company) | 64.4 (37.3%) | 49.2 | +30.7% | 61 (screener OP) |
| PAT (consol) | 35.2 (20.4%) | 29.4 | +19.5% | 37 |
| Revenue (standalone) | 170.5 | 134.5 | +26.8% | 157.4 |
| Standalone EBITDA | 64.1 (37.6%) | 48.5 (36.1%) | +32.1% | 57.8 (36.7%) |
| Standalone other income | 4.0 | 9.1 | −56% | 17.0 (FX gain in Q4) |
| Standalone depreciation / finance cost | 17.9 / 10.1 | 9.6 / 5.6 | +86% / +79% | 16.0 / 9.6 |
| Standalone tax rate | 9.3% | 29.3% | — | 28.5% |

- **Quality note:** PBT fell 5.5% YoY (standalone ₹40.1 Cr vs ₹42.4 Cr). PAT grew only because the tax rate dropped to 9% (deck p.10 [V]). The quarter's "best-ever" PAT is therefore tax-assisted. Depreciation and interest are rising faster than EBITDA as the new plants are commissioned.
- **Q2 FY27:** not out. No board-meeting intimation for it appears in the BSE announcements listed on screener as of 13 Oct 2026 [V].

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | "≈₹6,500 Cr+" rolling contract book, net of FY26 deliveries. Split: >$400 m energy, ~$200 m+ A&D, ~$100 m+ oil & gas | Q4 FY26 call, 16 May 2026 [V] (Vishnu Malpani). This is the total value of multi-year LTCPAs, not a firm executable backlog. The deck gives no number |
| Order-book cover | ≈10.8× FY26 revenue / 10.2× TTM (≈10 years at the current run-rate; management says "11–12×") | [E] 6,500 ÷ 603 and ÷ 638. Execution is capacity-limited, so read this as visibility, not as a schedule |
| Order inflow / book-to-bill | Not disclosed. Contracts named in deck p.9: GE Vernova $112 m + $53.5 m; Siemens Energy $90 m; MHI $83 m (5 yr) plus an 8-yr single-source hot-section nozzle-vane LTCPA; Arabelle (EDF) $40 m; Honeywell $16 m (phase 1); Rolls-Royce and Pratt & Whitney Canada (life-of-programme, no value given); BHEL rate contract ₹52.7 Cr to Oct 2028 (BSE 12 Oct 2026) | [V]. Book-to-bill cannot be computed |
| Gross margin (material proxy) | FY24 86.5% · FY25 86.1% · FY26 90.4% (consol) · Q1 FY27 95.0% (standalone) | [E] from deck "Consumption" (rev − consumption). Misleading: the conversion cost sits in employee cost (22% of revenue) and other expenses (31%). The CFO says the drop in consumption comes from qualifying local superalloy suppliers (Sunflag, Star Wire) instead of imports, plus WIP absorption (Q1 call [V]) |
| Debtor / inventory / payable days (screener) | FY24 182 / 1,055 / 396 · FY25 178 / 1,085 / 459 · FY26 **189 / 2,067 / 536** | Screener [V]. Inventory and payable days are artefacts of the low material cost |
| CCC / WC days (screener) | FY26 CCC 1,720 · WC days **304** (FY25 215, FY24 283) | Screener [V] |
| NWC days, sales basis | Inventory ₹329 Cr = 199 d; receivables ₹312 Cr = 189 d; payables ₹85 Cr = 51 d → **≈337 days** FY26 | [E] from screener schedule ÷ revenue × 365. The CFO targets ~200 days in H1 FY27 and 160–180 days by H2, mainly by cutting debtors from 170–180 to ~90 days through bill discounting (Q1 call [V]). That is a financing reclassification, not a structural improvement |
| CFO/EBITDA | FY26 **−53%** (−119 ÷ 225); 3-yr FY24–26 **−14%** (−72 ÷ 503) | [E] screener. Screener's own CFO/OP shows −31% for FY26 |
| Fixed-asset turnover | ≈1.0× FY26 (603 ÷ average net block 607); 0.58× on closing net block + CWIP (1,036) | [E] screener |
| Export share | **~93% FY26**; 88% Q1 FY27 (12+ countries) | Deck pp.7, 12, 19 [V] |
| Segment mix | FY26: Energy & Oil & Gas 81.5%, Aerospace & Defence 17.2%, others 1.3%. Q1 FY27: 81.2% / 16.8% / 2.0% | Deck p.19 [V] |
| Client concentration | Not disclosed by name. 96%+ of revenue is from private players. Azad supplies OEMs that control ~75% of the global gas-turbine market (deck p.12 [V]). A handful of energy OEMs (GE Vernova, Siemens Energy, MHI, Baker Hughes/Nuovo Pignone, Arabelle) dominate | [V] qualitative. DRHP top-customer share: unverified this session |
| Capacity | ~20,000 sqm operating (4 Hyderabad sites). Tunikibollaram Phase 1 ~94,899 sqm under construction, including 4 dedicated plants already inaugurated: MHI (Mar-25), GE Vernova Steam (Apr-25), Siemens Energy (Sep-25), Baker Hughes (Apr-26). Phase 2 is 67,267 sqm | Deck pp.8, 20 [V] |
| Revenue potential of new site | 8 dedicated plants × ₹150–180 Cr each at full utilisation → **~₹1,200 Cr** | Q1 call [V] (Malpani) |

### Ownership (Jun-26; screener [V])
| Promoters | FIIs | DIIs | Public | Shareholders |
|---|---|---|---|---|
| **55.84%** | 13.30% | 10.32% | 20.53% | 1.33 lakh |

- The promoter stake fell from 65.90% (Dec-24) to 60.32% (Mar-25, QIP dilution) and then 55.42% (Jun-25, promoter secondary sale). It has been 55.84% since Dec-25.
- FIIs trimmed from 16.2% (Jun-25) to 13.3%.

### Capex, funding, guidance
- **QIP:** ₹700 Cr raised in FY25. ₹160 Cr was still in treasury at Mar-26 (Q4 call [V]). Capex was ~₹900 Cr over FY25–26. FY26 capitalisation was ₹392 Cr, and Mar-26 CWIP was ₹257 Cr (screener [V]).
- An analyst on the Q1 call estimated ~₹1,500 Cr gross block by FY27-end. Management said capacity is in place "for the contracts we are supposed to deliver over the next 2 years" and that a larger capex plan may be outlined "in a quarter or so" (Q1 call [V]).
- **Guidance:** revenue growth of "over 25%" a year on a multi-year basis. EBITDA-margin guidance stays at a conservative 32–35%, against an actual 37% (Q1 call [V]). The ramp-up of the new plants is expected to show from H2 FY27 (deck p.7 [V]).
- **Funding mix:** rising working-capital loans and bill discounting. Finance cost was ₹10.1 Cr in Q1 FY27 vs ₹5.6 Cr a year earlier. The CFO said bill-discounting charges will keep finance cost elevated (Q1 call [V]).

### Story bullets
1. **Dedicated-plant model.** Each OEM gets its own lean facility under an LTCPA, which makes revenue visibility unusually high: a ₹6,500 Cr contract book against ₹638 Cr TTM revenue. Execution, though, is gated by plant ramp-up and by part-by-part qualification.
2. **Gas-turbine super-cycle.** About 81% of revenue is energy. Data-centre power demand and grid firming have filled GE Vernova, Siemens Energy and MHI order books to multi-year backlogs, and Azad's dedicated lines are sized for that. Azad also supplies nuclear-turbine airfoils to Arabelle (EDF) (Q4 call [V]).
3. **Moving up to engines.** In 2026 Azad delivered India's first indigenous expendable turbojet engine, designed by GTRE and manufactured and assembled by Azad, to DRDO/MoD (deck p.5 [V]; PIB release cited there). It also holds the GTRE contract for a complete Advanced Turbo Gas Generator engine. This opens a propulsion-systems TAM.
4. **Cash burn is the bear case.** CFO was negative in FY26 (−₹119 Cr), sales-basis NWC is ~337 days, and FCF was −₹691 Cr. ROE is only ~9% after the QIP. At 139× P/E and ~81× EV/EBITDA, the stock needs the >25% growth and the working-capital release to both happen.

### Risks
- **Customer concentration** in a few global energy OEMs, plus single-programme exposure.
- **US tariffs:** exports to the US face 2025–26 reciprocal tariffs. US revenue share is not disclosed, but most energy customers buy for global supply chains, mainly Europe and Japan.
- **Superalloy prices and FX.** Natural hedging through FX loans and bill discounting is only due to be fully in place by Q4 FY27 (Q1 call [V]).
- **Working capital and rising leverage** (net debt moved from net cash in FY25 to ₹272 Cr in FY26).
- **Depreciation drag** while utilisation of the new plants is low.
- **Key-person risk** around the founder.
- **Tax-rate normalisation** after the 9% rate in Q1 FY27.

---

## 2. Elecon Engineering Company Ltd — NSE: ELECON · BSE: 505700
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/ELECON/consolidated/
- Q1 FY27 investor presentation (BSE, 10 Jul 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/9130e69e-6cc7-4413-9eef-4d10e93dc21c.pdf
- Q1 FY27 call transcript, 13 Jul 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/bac1ce1f-7666-45dd-a38c-30b39c97566e.pdf
- Q4 FY26 presentation [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/87d562c0-fdb5-4776-88ad-7d339e124b94.pdf
- Q4 FY26 call transcript [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/c9f70d5a-4199-49a6-a197-3bc07bd0945b.pdf
- Listing status: listed; no merger or demerger. In Q1 FY26 the investment in EIMCO Elecon (India) was reclassified from "associate" to "financial asset", booking an ₹80 Cr net exceptional mark-to-market gain (Q1 deck [V]).

**Archetype:** a domestic industrial-capex component leader (industrial gearboxes: catalogue and engineered products, plus aftermarket) with a project-style MHE (material-handling equipment) EPC arm and a small overseas assembly and brand platform (Benzlers in Sweden and the Netherlands, Radicon in the UK and US). It is net cash and self-funding, but its order cycle is tied to cement, steel and thermal-power capex.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 1,937 | 2,227 (+15%) | **2,366 (+6.2%)** | Screener [V]; company 2,366, incl. ₹25 Cr one-time arbitration income (Q4 deck [V]) |
| EBITDA (screener OP) | 475 (24.5%) | 548 (24.6%) | **523 (22.1%)** | Screener [V]; company EBITDA 523 (−5% YoY) [V] |
| Gross margin (company: rev − RM & manufacturing cost) | 47.4% | 46.8% | **44.9%** | Q4 FY26 deck p. ~30 [V] |
| Other income | 50 | 63 | 60 (includes exceptional items net, per screener) | Screener [V]. Company other income FY26 ₹81 Cr; exceptional −₹21 Cr net (+80 EIMCO gain, −102 goodwill impairment) [V] Q1 deck |
| PAT (reported) | 356 | 415 | **341 (−18%)** | Screener [V]; company 341 [V] |
| ROCE | 31% | 28% | 21% | Screener [V] (current 20.9%) |
| ROE | — | — | 16.4% (current) | Screener [V] |
| Borrowings | 70 | 181 | 273 | Screener [V]. The schedule shows this is **entirely lease liabilities** (FY26 ₹273 Cr); bank debt is nil |
| Cash equivalents + investments | 263 + 286 | 358 + 496 | 213 + 743 | Screener schedule [V] |
| Net debt / (net cash) | (479) | (673) | **(683)** | [E] screener basis. Company: "net cash ≈ ₹700 Cr" (Q1 call [V]) |
| CFO | 365 | 425 | 314 | Screener [V] |
| FCF (screener) | 339 | 361 | 218 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹440; m-cap **₹9,866 Cr**; 52-week high/low ₹580 / ₹352.
- P/E: screener shows **32.6×**. On reported TTM PAT of ₹236 Cr (EPS ₹10.53, after the Q4 goodwill write-off and before the Q1 FY26 gain dropped out) it is **41.8×** [E]. Ex-exceptionals, TTM PAT is ≈₹305 Cr → ≈32×, which matches screener's figure.
- P/B **4.3×** (book ₹103) [E].
- EV/EBITDA ≈ **18.3×** TTM OP ₹502 Cr [E] ((9,866 − 683) ÷ 502).
- Dividend yield 0.45%.

### Q1 FY27 (Jun-26 quarter) [V] deck; screener
| ₹ Cr | Q1 FY27 | Q1 FY26 reported | Q1 FY26 adjusted* | YoY vs adj. |
|---|---|---|---|---|
| Revenue | 521 | 491 | 465 | +11.9% (+6.1% reported) |
| Gross margin | 45.5% | 52.5% | — | −700 bp reported |
| EBITDA | 109 (21.0%) | 130 (26.6%) | 105 (22.6%) | +3.9% |
| Gear revenue / EBIT | 416 / 75 (17.9%) | 357 / 65 (18.2%) | — | +16.3% / +14.7% |
| MHE revenue / EBIT | 105 / 27 (25.6%) | 133 / 61 | 108 / 36 (33.4%) | −2.9% / −25% |
| PAT | 70 (13.5%) | 175 | 69 | +2.3% |
| Order intake | 755 (Gear 570, MHE 185) | 614 | — | +23% |
| Open order book (30 Jun) | **1,518** (Gear 1,043, MHE 475) | 1,110 | — | +37% |
| Overseas revenue | 151 (29%) | 124 (25%) | — | +21.9% |

\*Q1 FY26 adjusted excludes ₹25 Cr arbitration income in revenue and EBITDA, ₹10 Cr in other income, and the ₹80 Cr exceptional EIMCO gain (deck [V]).
- **Q2 FY27:** board meets **14 Oct 2026**; call on 15 Oct (BSE [V]). Not out as of 13 Oct.

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | ₹1,292 Cr (Mar-26, +36% YoY; Gear 894, MHE 398) → **₹1,518 Cr (Jun-26)** | Q4 and Q1 decks [V] |
| Order-book cover | ≈0.63× TTM revenue (≈7.6 months) | [E] 1,518 ÷ 2,396. In gears, ~₹160 Cr of the ₹1,050 Cr book falls beyond FY27 (Q1 call [V]) |
| Order inflow / book-to-bill | FY26 intake ₹2,660 Cr (+11.8%) → book-to-bill **1.12×**. Q1 FY27 ₹755 Cr → **1.45×** | [V] decks; [E] ratios |
| Gross margin | 47.4% (FY24) → 46.8% → 44.9% (FY26) → 45.5% (Q1 FY27) | Company basis [V]: revenue minus RM & manufacturing cost. Management cites ~5% average BOM inflation (steel +5–7%, bearings +6–7%, fabricated cases +7%, tooling +6–10%), said to be "taken care of" in order-book pricing (Q4 and Q1 calls [V]) |
| Debtor / inventory / payable days (screener) | FY24 84 / 97 / 80 · FY25 101 / 86 / 100 · FY26 **111 / 98 / 94** | Screener [V] |
| CCC / WC days (screener) | FY26 CCC 115 · WC days **74** (FY25 63, FY24 67) | Screener [V]. Debtors are creeping up (84 → 111 days); defence orders carry 2–3-year execution and higher WC (Q1 call [V]) |
| CFO/EBITDA | FY26 **60%** (314 ÷ 523); 3-yr FY24–26 **71%** (1,104 ÷ 1,546) | [E] screener. Screener's own CFO/OP shows 81% for FY26 |
| Fixed-asset turnover | ≈2.6× (2,366 ÷ average net block 922) | [E] screener |
| Export / overseas share | FY26 **22%** (₹512 Cr; FY25 23%, ₹517 Cr); Q1 FY27 29%. In Q1 FY27, international was ~36% of gear revenue. Overseas order book ₹256 Cr (+73%) | Q4 / Q1 decks and call [V] |
| Segment mix | FY26: Gear ₹1,699 Cr (72%; EBIT 18.8%) / MHE ₹667 Cr (28%; EBIT 27.6%, incl. the arbitration gain). FY25: Gear 1,763 (79%; EBIT 24.4%) / MHE 464 | Q4 deck [V] |
| End-markets | Power (≈27% of Q1 gear intake, one large order), steel, cement, sugar, mining & minerals, marine and defence (Indian Navy COGAG gearbox), ports | Q1 call and deck [V] |
| Client concentration | Not disclosed; a broad industrial base (65+ domestic distributors, 120+ overseas, 95+ countries). Low single-customer risk outside defence and power orders | Deck [V] |
| Capacity | One Indian plant at Vallabh Vidyanagar, ~335,000 sqm, including the new BMCE-2 gearbox facility inaugurated in 2026. Overseas: Benzlers Helsingborg (~3,100 sqm) and Venlo (~1,700 sqm); Radicon Elland UK (~3,000 sqm) and Elgin USA (~4,900 sqm). Utilisation not disclosed | Q1 deck [V] |

### Ownership (Sep-26; screener [V])
| Promoters | FIIs | DIIs | Govt | Public | Shareholders |
|---|---|---|---|---|---|
| **59.28%** | 6.92% | 7.09% | 0.04% | 26.69% | 1.20 lakh |

- FIIs have fallen steadily from 9.8% (Sep-24) to 6.9%. DIIs rose from 4.4% (Mar-25) to 7.1%.

### Capex, guidance
- **Capex:** ~₹400 Cr over FY26–FY28, "on track" (Q1 call [V]). Further capex is "being evaluated" for board approval.
- **Mexico:** a new Mexico entity has been set up to serve Latin America, because Indian-origin gearboxes into the US face a **50% tariff** (management, Q4 call [V]; it attributed this to "Section 232"). Capex there is minimal so far.
- **FY27 guidance:** "low double-digit" consolidated revenue growth, with EBITDA margin at the FY26 level (~22%) (Q1 call [V]). Management already describes the year as "lost Q1 and Q2" to execution delays.
- **FY30 target:** ₹5,000 Cr revenue, called "challenging but still achievable", with Gear 70–75% and MHE 25–30% (Q1 call [V]). That needs a ~20% CAGR from FY26.
- **Export aspiration:** ~50% of revenue "in the next 3 to 4 years". This was framed by an analyst as the earlier plan; management did not drop it (Q4 call [V]).

### Story bullets
1. **Gear franchise under cyclical pressure.** FY26 gear revenue fell 3.6% and EBIT margin compressed from 24.4% to 18.8%. Management blames US tariffs from Q2 FY26 and the US–Iran event in Q4, both of which deferred customer dispatches. Gear order book is up 47% YoY, so FY27 is an execution test.
2. **Overseas is the swing factor.** The ₹102 Cr goodwill on the 2010–11 Benzlers-Radicon acquisitions was written off in Q4 FY26. Overseas revenue is nonetheless recovering (+22% in Q1), and the overseas order book is up 73%.
3. **MHE has shifted to products and aftermarket rather than EPC.** It earned an EBIT margin of 25–28% in FY26. That is unusually high for MHE and is now normalising (Q1 FY27 25.6%, mix and input costs).
4. **Clean balance sheet.** About ₹700 Cr net cash and no bank debt. At ~18× EV/EBITDA it trades well below precision-component peers, reflecting low growth (TTM revenue +3%).

### Risks
- **US tariff persistence** (50%) and a European slowdown hitting Radicon and Benzlers.
- **Thermal power, cement and steel capex delays** (management flags all three).
- **Defence orders** stretching working capital.
- **BOM inflation** of ~5% against fixed-price orders.
- **FY30 target credibility** after two years of guidance cuts (FY26 was lowered in Q4).
