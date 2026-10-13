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

---

## 3. Tega Industries Ltd — NSE: TEGA · BSE: 543413
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/TEGA/consolidated/
- Q1 FY27 investor presentation (BSE, 13 Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/e6649326-1fd6-4d4e-8840-9c998ccaf8f8.pdf
- Q1 FY27 call transcript, 13 Aug 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/04245bec-9b05-4b72-a4a6-5abd83977126.pdf
- Q4 FY26 call transcript, 2 Jun 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/c5dc9eff-f1d0-4245-b50c-00d2e55ed133.pdf
- Press release "Executes Definitive Agreement for Molycop Acquisition", 29 Nov 2025 [V] https://www.tegaindustries.com/assets/pdfs/int/2025/Q3/Intimation-of-Press-Release---29.11.2025.pdf
- Listing status: listed. **Molycop acquisition completed on 1 June 2026** (Q4 call, Q1 deck [V]). Tega is the controlling shareholder, with funds managed by affiliates of Apollo Global Management as a "significant minority shareholder" in the acquisition vehicle. Tega's exact stake is reported in the press as ~77% (Angel One, Sep 2025; search snippet only, **unverified**).
- New BSE/NSE in-principle approval (6 Oct 2026) for 4,78,435 shares at ₹1,994 each (≈₹95 Cr; looks like the deferred tranche of the preferential issue) [V] title via screener. A promoter-group trust acquired shares in promoter entity NFSPL, with Tega control unchanged (SAST, 13 Oct 2026 [V] title).

**Archetype:** a global mining-consumables annuity. Mill liners (rubber, composite, DynaPrime), screens and wear parts are replaced on throughput, with a small McNally Sayaji-type equipment arm. Since June 2026 it has become a **leveraged global consumables roll-up**. Molycop (grinding balls and rods, 400+ mines, 40 countries, ~FY Jun-26 EBITDA US$191 m) is roughly 3–4× Tega's size, so Tega now behaves like a steel-bar converter with index-linked pass-through on the media side.

### Molycop deal: structure, financing, consolidation [V] unless marked
- **EV:** ~US$1.45 bn (definitive agreement 29 Nov 2025; term sheet 10 Sep 2025 at ~US$1.48 bn). Seller: American Industrial Partners.
- **Tega's funding:**
  - Preferential equity of **₹1,713 Cr** at ₹1,994/share (Nov 2025). This is why FY26 equity capital rose from ₹67 Cr to ₹75 Cr and reserves from ₹1,330 Cr to ₹3,332 Cr on screener.
  - An acquisition term loan of **₹1,500 Cr** from Standard Chartered, Axis and EXIM (JSA lenders'-counsel note; search result, not fetched).
- **Apollo:** funds co-invest as a significant minority. The group's ₹11,200 Cr (₹112 bn) total debt includes **~₹2,600 Cr of redeemable preference shares** (Q1 call, CFO Ravi Joshi [V]). The holder of the RPS was not stated; most likely Apollo-side instruments (inference).
- **Molycop net debt:** at closing, debt was cut by ~US$235 m through refinancing plus new equity. Net debt was **US$672.5 m (₹6,366 Cr) at 30 Jun 2026**, down from US$1.0 bn (₹9,580 Cr) at 31 Mar 2026 (Molycop CFO Patrick Koley, Q1 call [V]).
- **Goodwill:** provisional goodwill is **₹4,996 Cr** (US$528 m), subject to PPA (purchase-price allocation) within 12 months (Q1 call [V]).
- **One-time costs:** ₹191 Cr in Q1 FY27 and ₹77.5 Cr in FY26, "this is it" (Q1 call [V]).
- **Leverage** [E]: annualised group EBITDA ≈ Tega ~₹420 Cr + Molycop ~US$191 m (₹1,800 Cr) ≈ ₹2,200 Cr. Group net debt ex-RPS ≈ ₹8,000–8,600 Cr gives **net debt/EBITDA ≈ 3.6–3.9×**, or **~5×** if the RPS is counted as debt. This is consistent with the primer's "~4–4.5× FY27 peak" (that figure is not from a company filing).
- **Consolidation:** Q1 FY27 includes only one month (June 2026) of Molycop. FY27 will carry ten months. Molycop's year-end moves from June to March.

### Standardized financials (consolidated, ₹ Cr) — pre-Molycop years
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 1,493 | 1,639 (+10%) | **1,692 (+3%)** | Screener [V]. Company "consolidated revenue ₹1,773.6 Cr (+5%)" is total income including other income (Q4 call [V]) |
| EBITDA (screener OP) | 317 (21%) | 341 (21%) | **233 (14%)** | Screener [V]. Expenses include ₹77.5 Cr Molycop transaction costs and ₹6.4 Cr labour-code charge |
| EBITDA (company, before exceptionals, incl. other income) | — | 382.9 (23%) | **396.7 (22%)** | Q4 call [V] |
| Other income | 27 | 48 | 88 | Screener [V] |
| PAT (reported) | 194 | 200 | **143 (−29%)** | Screener [V]. Primer's "~₹227 Cr (+13%)" is an adjusted figure, not reported PAT |
| ROCE | 19% | 18% | 8% | Screener [V]. The FY26 ROCE is depressed by the ₹2,000 Cr of un-deployed equity raised for Molycop |
| ROE | — | — | 5.9% (current) | Screener [V] |
| Borrowings (incl. leases) | 308 | 330 | 398 | Screener [V]; FY26 = LT 128 + ST 190 + leases 81 |
| Cash equivalents + investments | 87 + 279 | 121 + 262 | **2,122 + 227** | Screener schedule [V]. Mar-26 cash was the parked preferential money awaiting closing |
| Net debt / (net cash) | (58) | (53) | **(1,951)** at Mar-26 → **post-deal ≈ ₹8,000–8,600 Cr net debt** ex-RPS | [E]. Mar-26 is pre-closing. Post-closing see the deal box above |
| CFO | 252 | 195 | 350 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹1,994; m-cap **₹14,947 Cr**; 52-week high/low ₹2,198 / ₹1,473.
- P/E: **n.m.** Screener shows blank: TTM PAT is −₹1 Cr after the Q1 loss. On FY26 reported PAT it is 105×. On Q1 FY27 adjusted PAT annualised (₹54.7 Cr × 4 = ₹219 Cr, with only one month of Molycop) it is ~68× [E].
- P/B **4.4×** (book ₹454) [E].
- EV/EBITDA, pro forma [E]: (14,947 + ~8,300 net debt ex-RPS + ~2,600 RPS + Apollo's minority, not quantified) ÷ ~₹2,200 Cr annualised ≈ **~12×** before the minority interest. Screener TTM is meaningless (OP ₹231 Cr).
- Dividend yield 0.10%.

### Q1 FY27 (Jun-26 quarter) [V] deck p.6; call; screener
| ₹ Cr | Tega ex-Molycop | Molycop (June only) | Group Q1 FY27 | Q1 FY26 | YoY (Tega ex-Molycop) |
|---|---|---|---|---|---|
| Revenue from operations | 431.8 | 1,291.6 | **1,723.4** | 356.1 | +21% |
| Gross margin (rev − COGS) | 62% | 36% | 42% | 59% | +300 bp |
| EBITDA (reported, incl. other income) | 95.5 | −22.5 | 73.0 | 71.1 | — |
| **Adjusted EBITDA** (ex ₹191 Cr one-time) | 101.1 (22%) | 162.8 (13%) | **263.9 (15%)** | 71.1 (19%) | +42% |
| Finance cost | 19.3 | 97.4 | 116.7 | 6.2 | — |
| PAT reported / adjusted | 40.1 / 44.4 | −148.4 / 10.3 | **−108.3 / 54.7** | 35.3 | +26% (adj.) |
| Order book (consumables + equipment) | ₹1,231 Cr (₹960 Cr executable within 12 months) | — | — | ₹1,009 Cr [E] (+22%) | +22% |

- **Segments, ex-Molycop:**
  - Consumables: revenue ₹396 Cr (+36%), EBITDA margin 24.1% (vs 20.9%).
  - Equipment: ₹36 Cr (−44%) because of customer-clearance delays.
- **Group revenue mix:** consumables 23%, grinding media 75%, equipment 2% (call [V]).
- **Q2 FY27:** not out. The trading window has been closed since late September (BSE 28 Sep 2026 [V] title).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | ₹1,206 Cr (Mar-26, +18% YoY; ₹906 Cr executable in 12 months) → ₹1,231 Cr (Jun-26). Molycop is a run-rate supplier and carries no order book | Q4 / Q1 calls [V] |
| Order-book cover | Tega legacy: ≈0.7× FY26 revenue (~8.6 months) | [E] 1,206 ÷ 1,692 |
| Book-to-bill | Not disclosed (no inflow figure) | — |
| Gross margin | Tega ~60% FY26; 62% Q1 FY27. Molycop ~36%. Group 42% | Company basis (rev − material − traded goods − inventory change) [V] |
| Pass-through | "Majority of [Molycop] customer contracts are tied to steel indices", and steel bar is ~80% of Molycop COGS (Q1 call [V]). Tega liners use rubber, steel and polymer, priced through periodic contracts | [V] |
| Debtor / inventory / payable days (screener) | FY24 109 / 209 / 104 · FY25 112 / 217 / 116 · FY26 **97 / 233 / 178** | Screener [V] (pre-Molycop) |
| CCC / WC days (screener) | FY26 CCC 153 · WC days **77** (FY25 100) | Screener [V]. Molycop's ABL (asset-based loan) swings with bar payments (Q1 call) |
| CFO/EBITDA | FY26 **150%** (350 ÷ 233; inflated because the OP is net of transaction costs). 3-yr **89%** (797 ÷ 891) | [E] screener. Screener's own CFO/OP shows 195% |
| Fixed-asset turnover | ≈2.6× FY26 (1,692 ÷ average net block 642) | [E] screener (pre-Molycop) |
| Export share | Legacy Tega: majority of sales outside India (plants in India, Chile, South Africa, Australia; 92+ countries). Exact FY26 share not in the docs fetched | Unverified (FY26 figure); [K] Tega DRHP 2021 ≈ 85%+ overseas |
| End-markets | Copper and gold mining dominate (Molycop is focused on copper and gold in SAG and ball mills). Iron ore, coal and aggregates via Tega. Molycop claims >50% share in its core regions (Q1 call [V]) | [V] |
| Client concentration | Global miners. Exposure was named on the call: Freeport (Grasberg restart), First Quantum. No top-10 share disclosed | [V] qualitative |
| Capacity / plants | Group: 26 manufacturing facilities post-deal (press release [V]). New Chile liner plant (US$25–30 m): soft commissioning ~Jan 2027, commercial production ~Mar 2027 subject to local approvals (Q1 call [V]) | [V] |

### Ownership (Sep-26; screener [V])
| Promoters | FIIs | DIIs | Public | Shareholders |
|---|---|---|---|---|
| **67.51%** | 2.86% | 17.15% | 12.49% | 57,152 |

- The promoter stake was diluted from 74.80% to 67.27% in the Dec-25 quarter by the preferential issue, then 67.51% from Mar-26.

### Capex, guidance
- **FY27 capex:** Tega ~US$40 m including Chile; Molycop ~US$28 m for its ten-month FY27 (Q1 call [V]).
- **FY27 finance cost:** ₹110–120 Cr for Tega standalone, plus ~US$70 m interest and principal at Molycop for the ten months (Q1 call [V]).
- **Guidance:**
  - Consumables: 15% revenue CAGR, 20–23% EBITDA margin. Equipment: ~25% growth.
  - Group consolidated EBITDA margin ~15%.
  - Molycop (ten-month comparable): volume +~5%, EBITDA +~4%. Formal long-term guidance to come.
  - **Synergies ~US$20 m** over 2–2.5 years (Q1 call [V]).
  - Non-core land parcels are to be sold to repay debt.

### Story bullets
1. **A minnow swallowing a whale.** A ₹1,700 Cr-revenue liner company now consolidates a ~₹15,000 Cr-revenue grinding-media business. Group revenue is ~₹7,000 Cr per quarter annualised from Q2 FY27, at a 15% margin instead of 22%.
2. **Same customer, same mill, same clock.** Liners and balls are both consumed per tonne milled, so cross-selling is the strategic logic. Copper above US$14,000/t and gold around US$4,400/oz support miner throughput (COO, Q1 call [V]).
3. **Deleveraging is the equity story.** Molycop's net debt fell from US$1.0 bn to US$672 m at closing, but group debt including RPS is ₹11,200 Cr against a ₹14,947 Cr m-cap. Equity holders also sit behind Apollo's minority and preference capital.
4. **The legacy Tega engine is accelerating.** Consumables grew 36% in Q1 FY27 with margins up 320 bp, after a flat FY26 when it guided 8% and delivered roughly 0%.

### Risks
- **Leverage** and RPS refinancing.
- **PPA and goodwill** (₹5,000 Cr) impairment risk.
- **Copper and gold price cycle** and mine disruptions (Grasberg).
- **Steel-bar cost lags.**
- **FX:** USD, CLP, AUD, ZAR.
- **Integration and minority-governance** with Apollo.
- **Equipment-segment lumpiness.**
- **US tariffs:** limited direct impact. Molycop has local plants in the Americas (inference).

---

## 4. Skipper Ltd — NSE: SKIPPER · BSE: 538562
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/SKIPPER/consolidated/ (expense schedule API for material cost %)
- Q1 FY27 results + investor presentation (BSE, 11 Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/551d4dce-3db0-4ead-8d99-a22d2ae66e40.pdf
- Q1 FY27 call transcript, 12 Aug 2026 [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/1a5d052f-3fb1-441f-a564-0d4d4a928d3e.pdf
- Board outcome, 12 Oct 2026 [V] (title via the screener announcements list): R. N. (Rabindra Nath) Nayak appointed independent director for 5 years; board approved a new wholly-owned subsidiary, "Evergrid", for transmission and EPC.
- Listing status: listed; no merger or demerger. The deck's P&L is labelled "Stand Alone". Screener's consolidated FY26 revenue (₹5,553 Cr) equals the company's standalone revenue, so the subsidiaries (Brazil and UAE set up, US entity "soon") are immaterial so far.

**Archetype:** an integrated domestic T&D structures fabricator (it rolls its own angles, then fabricates and galvanises lattice towers, monopoles and poles) with an EPC arm and a small branded polymer-pipes business. It is a pure play on the Indian grid capex cycle (765 kV / HVDC, renewable-energy evacuation) with an export option (China+1, plus US/Australia grid hardening). Steel is ~two-thirds of cost and is largely passed through.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 3,282 | 4,624 (+41%) | **5,553 (+20%)** | Screener [V]; company 4,624.5 / 5,552.8 [V] deck p.10 |
| EBITDA (screener OP) | 321 (9.8%) | 455 (9.8%) | **575 (10.4%)** | Screener [V]; company 451.7 (9.8%) / 572.7 (10.3%) [V] |
| Material cost % (screener) | 51% | 62% | 64% | Screener schedule [V]. Material + manufacturing (incl. EPC sub-contract) is ~80% in all three years |
| Interest | 155 | 214 | 218 | Screener [V]; 3.9% of FY26 revenue |
| PAT | 82 | 149 | **213 (+43%)** | Screener [V]; company standalone 145.8 / 207.3 [V] |
| ROCE | 21% | 24% | 24% | Screener [V] (current 23.6%) |
| ROE | — | — | 16.6% (current) | Screener [V] |
| Borrowings | 592 | 711 | 931 | Screener [V]; FY26 = LT 443 + ST 478 + leases 10 |
| Cash + investments | 135 + 17 | 121 + 20 | 32 + 26 | Screener schedule [V] |
| Net debt | 440 | 570 | **873** (≈1.5× EBITDA) | [E]. Pro forma for the ₹433.5 Cr preferential issue received in Aug 2026, "entire proceeds used for debt repayment" (Q1 call [V]): **≈₹440 Cr** [E] |
| CFO | 199 | 153 | 277 | Screener [V] |
| FCF (screener) | 98 | −83 | −88 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹528; m-cap **₹6,470 Cr**; 52-week high/low ₹617 / ₹300.
- P/E **27.8×** (TTM PAT ₹225 Cr).
- P/B **4.0×** (book ₹132; pre-preferential) [E].
- EV/EBITDA ≈ **12.5×** TTM OP ₹586 Cr on Mar-26 net debt, or ≈11.8× pro forma post-raise [E].
- Dividend yield 0.02%.

### Q1 FY27 (Jun-26 quarter) [V] deck pp.5–9
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 1,309.8 | 1,253.9 | +4.5% | 1,666.6 |
| EBITDA | 140.1 (10.7%) | 127.2 (10.1%) | +10.2% | 173.4 (10.4%) |
| Finance cost | 46.7 (3.6% of rev.) | 53.0 (4.2%) | −12% | 54.5 |
| PAT | 56.5 (4.3%) | 44.7 (3.6%) | +26.5% | 75.6 |
| Engineering products sales / EBITDA % | 940.1 / 12.1% | 1,024.8 / 11.3% | −8.3% | — |
| Polymer sales / EBITDA % | 117.0 / 5.2% | 127.2 / 4.1% | −8.0% | — |
| Infra projects sales / EBITDA % | 252.7 / 7.9% | 101.9 / 5.6% | +148% | — |
| Exports | 162.0 | 325.7 | **−50%** (West Asia holds/delays) | — |
| Order inflow | 1,674 | 1,592 | +5% | 1,029 |
| Closing order book | **9,217** | — | +8.4% vs Mar-26 (8,502) | — |

- Revenue mix Q1 FY27: Engineering 72%, Infra 19%, Polymer 9%.
- **Q2 FY27:** not out. No board-meeting date had been filed by 13 Oct; the 12 Oct board meeting was not a results meeting.

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | ₹8,502 Cr (Mar-26) → **₹9,217 Cr (Jun-26)**. Mix: T&D domestic 80%, export 9%, non-T&D domestic (rail, telecom, solar, water EPC) 11%. ~5,200 ckm of EHV/HVDC line work under execution | Deck p.11 [V] |
| Order-book cover | ≈1.64× TTM revenue (≈20 months) | [E] 9,217 ÷ 5,609 |
| Order inflow / book-to-bill | FY26 inflow ₹5,678 Cr (record) → **1.02×**. Q1 FY27 ₹1,674 Cr → **1.28×**. TTM ₹5,375 Cr. FY27 inflow target **₹7,000 Cr+**, closing book ₹10,000 Cr+ (Q1 call [V]) | [V]; [E] ratios |
| Bid pipeline | > ₹35,000 Cr | Deck p.4 [V] |
| Gross margin (proxy) | FY24 49% · FY25 38% · FY26 **36%** (100 − material cost %) | [E] screener schedule. The fall reflects the rising EPC and infra mix (bought-out items, sub-contracting), not lower tower spreads. Engineering-segment EBITDA rose from 11.2% (FY24) to 11.7% (FY26) (deck p.21 [V]) |
| Raw-material pass-through | Steel (main RM) spiked early in Q1 and was back to pre-Feb levels by May. Hedging uses inventory and price-variation clauses (Q1 call [V]) | [V] |
| Debtor / inventory / payable days (screener) | FY24 85 / 263 / 267 · FY25 55 / 152 / 155 · FY26 **98 / 109 / 176** | Screener [V] |
| CCC / WC days (screener) | FY26 CCC **30** · WC days **43** (FY25 28, FY24 48) | Screener [V]. FY26 receivables doubled (₹701 Cr → ₹1,485 Cr, screener schedule), offset by supplier credit |
| CFO/EBITDA | FY26 **48%** (277 ÷ 575); 3-yr **47%** (629 ÷ 1,351) | [E] screener. Screener's own CFO/OP shows 56% |
| Fixed-asset turnover | ≈5.4× (5,553 ÷ average net block 1,034) | [E] screener |
| Export share | FY26 export revenue **₹710 Cr ≈ 12.8%** of total, 16% of the engineering segment. Q1 FY27 12.4% (₹162 Cr). Exports go to 50+ countries; FY26 export order book by region: Africa 18%, S. America 9%, Middle East 7%, SE Asia 9%, N. America 3%, Oceania 2%, Europe 6% (approx., read from chart) | Deck p.27 [V]. Target "export mix to 50%", half from developed markets (Q1 call, analyst framing, "on track") |
| Segment mix (FY26) | Engineering ₹4,359 Cr (78.5%; EBITDA 11.7%), Infra ₹687 Cr (12.4%; 6.0%), Polymer ≈ ₹507 Cr (9.1%) [E residual] | Deck p.21 [V] |
| Client concentration | PGCIL plus private TBCB (tariff-based competitive bidding) developers and state utilities dominate the domestic book. Top-client share not disclosed | Deck [V] qualitative |
| Capacity / utilisation | Engineering 375,000 MTPA (Mar-26: Kolkata Unit 1 262k incl. poles, Unit 2 ~75k?, BCTL 38k, Guwahati 7k; split partly read from chart) → **450,000 MTPA** with the 75k expansion commissioning around end Q2 FY27 → 600,000 MTPA by FY29. Polymer 62,000 MTPA. FY26 utilisation ≈ 90%+ [E] (tonnage not disclosed in deck) | Deck pp.8, 23 [V] |

### Ownership (Jul-26, post-preferential; screener [V])
| Promoters | FIIs | DIIs | Public | Shareholders |
|---|---|---|---|---|
| **61.48%** | 10.64% | 2.24% | 25.65% | 88,286 |

- **Preferential issue:** ₹433.5 Cr at ₹470/share. Investors: Capital Group's SMALLCAP World Fund and American Funds Insurance, Bandhan Small Cap Fund, Cohesion MK Best Ideas, Emerge Private Opportunities Trust (deck p.7 [V]). The promoter stake fell from 66.50% to 61.48%; FIIs rose from 4.11% to 10.64%.
- Earlier capital raise: a rights issue in FY24, when promoters went from 71.89% to 66.47% (screener [V]; size not re-verified).

### Capex, guidance
- **FY27 guidance** (deck p.13 [V]): revenue growth ~15%, PAT growth ~30%, long-term EBITDA margin aspiration 12%+. FY27 will be H2-weighted on the capacity ramp.
- **Finance cost** to fall to 3.2–3.5% of revenue after the raise (Q1 call [V]).
- **Credit rating:** CRISIL upgraded the long-term rating to **A+/Stable**.
- **Capex:** 75k MTPA expansion in FY27, then +150k MTPA to FY29. CWIP was ₹273 Cr at Mar-26 (screener [V]).

### Story bullets
1. **Grid capex.** India's 765 kV / HVDC build-out (NEP transmission capex) fills the book. The record order book is ₹9,217 Cr and the bid pipeline over ₹35,000 Cr.
2. **Exports are the swing factor.** They halved in Q1 FY27 on the West Asia conflict. Management wants exports to rise toward 50% of the mix and says it has passed audits by prospective customers from Finland, the US and Australia. North America is the "main market", but US exposure is still only 3% of the export book.
3. **Balance-sheet reset.** The ₹433.5 Cr equity raise plus the CRISIL A+ upgrade roughly halves net debt. Interest has been the biggest drag on PAT, at ~4% of revenue against a ~10% EBITDA margin.
4. **Rising EPC mix.** Infra projects were 19% of Q1 revenue, at 7.9% margin. Growth is coming from the lower-margin segment while engineering products shrank 8% in Q1.

### Risks
- **Working-capital intensity.** Receivables doubled in FY26, and FCF has been negative for two years.
- **Steel and zinc price spikes** on fixed-price legacy orders.
- **Export geopolitics** and US tariffs (2025–26 reciprocal and Section 232 steel derivatives).
- **Capacity ramp execution** and manpower (management calls hiring its biggest worry).
- **Customer concentration** in PGCIL and TBCB developers.
- **Polymer competition** from Supreme and Astral.

---

## 5. Lloyds Engineering Works Ltd — NSE: LLOYDSENGG · BSE: 539992 (partly-paid: LLOYDSENPP / 890216)
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/LLOYDSENGG/consolidated/ (FY25–FY26 only) and standalone [V] https://www.screener.in/company/LLOYDSENGG/ (FY24 and earlier)
- Q1 FY27 earnings presentation (BSE, 6 Aug 2026) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/1a8d6e99-acc0-4366-ab22-a78142ea520f.pdf
- Merger press release and board outcome, 29 Dec 2025 (NSE archive) [V] https://nsearchives.nseindia.com/corporate/LSIL_29122025200030_PressReleaseCoveringlettersigned_.pdf and https://nsearchives.nseindia.com/corporate/LSIL_29122025203248_CoveringPressreleasesigned.pdf
- Listing status: listed. **Merger pending.** On 29 Dec 2025 the board approved a scheme of merger by absorption of Lloyds Infrastructure & Construction Ltd (LICL, 24.2% associate), Metalfab Hightech (76% subsidiary) and Techno Industries (100%) into LEWL [V].
  - Swap ratios: LICL 1,798 LEWL shares per 1,500 LICL shares; Metalfab 94 per 5 [V].
  - About 38.1 Cr new shares, taking equity from 147.42 Cr to **185.52 Cr shares** (+25.8%) [V].
  - Press reports: NSE/BSE no-objection in May 2026 and CCI approval (together with Thriveni Earthmovers buying a ~7.14% stake in LEWL). NCLT, shareholder and creditor approvals are pending (Sahi, NBM&CW, FilingReader; search results only, **not fetched**, so unverified).
- **Steel Infra Solutions Co. Ltd (SISCOL):** proposed acquisition of 52.16% for ~₹635 Cr (group 88.12% for ~₹1,073 Cr) announced June 2026. SISCOL is a top-3 Indian structural-steel fabricator: 100,000 MTPA, 6 units, order book ₹1,197 Cr (Q1 deck pp.9, 24 [V]).
- **Bhilai Engineering (BECL):** an engineering-division asset acquisition is "ongoing" (railway, nuclear, power fabrication; MoU Oct 2024).
- **Lloyds Advance Defence Systems (LADS, 85%)** stays outside the merger.
- **Fincantieri (Italy) JV is confirmed** in the deck (controllable-pitch propellers, shafting, thrusters; "initial orders exceeding ₹127 Cr"). Other defence tie-ups: FlyFocus (Poland, UAVs, exclusive India rights), Kliver Polska (torpedo test stands, underwater), Virtualabs (Italy, radar) (deck pp.13, 25 [V]).

**Archetype:** a group-anchored heavy-engineering and EPC roll-up of the Lloyds (Gupta family) group. Process equipment for hydrocarbons and steel, steel-plant machinery, naval steering gear and fin stabilisers, motors, pumps and elevators (Techno), light fabrication (Metalfab), and soon structural steel (SISCOL) plus turnkey EPC (LICL). Much of the backlog comes from **related-party** steel and power capex at Lloyds Metals & Energy (Gadchiroli) and Lloyds Enterprises.

### Standardized financials (₹ Cr)
| Item | FY24 (standalone) | FY25 (consol) | FY26 (consol) | Source |
|---|---|---|---|---|
| Revenue | 624 | 846 | **1,301 (+54%)** | Screener [V]; company consolidated 312.6 (FY23) / 624.2 / 845.7 / 1,301.1 [V] deck p.35 |
| EBITDA (screener OP) | 101 (16%) | 135 (16%) | **190 (15%)** | Screener [V] |
| EBITDA (company, incl. other income) | 108.4 (17.4%) | 159.3 (18.3%) | 225.7 (17.7%) | Deck p.35 [V] |
| Other income | 7 | 24 | 49 | Screener [V] |
| PAT (incl. associates) | 80 | 105 | **198 (+89%)** | Screener [V]; company 197.6 (15.2%) [V]. FY26 includes the 24.2% share of LICL profit |
| ROCE / ROE | — | — | ROCE 16% (screener FY26) | Screener [V]; current ROCE 16.1%, ROE 15.1%. The company chart (deck p.35) shows values of 22.0–26.3% (FY23–24), 18.9–20.2% (FY25) and 9.2–17.3% (FY26), but the extracted text does not show which line is ROE and which is ROCE. Not used |
| Borrowings | 75 | 83 | 109 | Screener [V]; FY26 = LT 9 + ST 25 + leases 75 |
| Cash + investments | — | 127 + 16 | **397 + 77** | Screener schedule [V] |
| Net debt / (net cash) | — | (60) | **(365)** | [E] screener. Company D/E 0.01× (FY26) [V] deck |
| CFO | −45 | 153 | **−253** | Screener [V] (FY24 standalone) |
| FCF (screener) | — | 154 | −494 | Screener [V] |

- **Equity raised:** FY26 equity capital rose from ₹117 Cr to ₹144 Cr and reserves from ₹531 Cr to ₹1,527 Cr. This reflects the **₹857 Cr rights issue (Jun 2025)**, partly paid and listed as LLOYDSENPP (BSE 890216 [V] in the filing header), plus share issues for acquisitions.
- **Pro forma merged entity (LEWL + Metalfab + Techno + LICL):** FY26 total income **₹3,253 Cr**, EBITDA ₹490 Cr (15.1%), PAT ₹331 Cr. Q1 FY27 income ₹1,181 Cr, EBITDA ₹173 Cr, PAT ₹109 Cr (deck p.5 [V]).

**Valuation, 13 Oct 2026** (Screener [V]): price ₹92.9; m-cap **₹14,433 Cr** on the current share count; 52-week high/low ₹104 / ₹37.4.
- P/E **64.5×** (TTM consolidated PAT ₹236 Cr).
- P/B **7.7×** (book ₹12.0) [E].
- EV/EBITDA ≈ **61×** TTM OP ₹229 Cr [E] ((14,433 − 365) ÷ 229).
- **Post-merger look-through** [E]: 185.52 Cr shares × ₹92.9 ≈ ₹17,235 Cr. That is ≈52× FY26 pro forma PAT of ₹331 Cr. EV/EBITDA is ≈35× pro forma EBITDA of ₹490 Cr, before LICL's net debt or cash, which was not disclosed.
- Dividend yield 0.27%.

### Q1 FY27 (Jun-26 quarter) [V] deck pp.4, 10–11
| ₹ Cr | Q1 FY27 consol | Q1 FY26 consol | YoY | Q1 FY27 standalone | Q1 FY26 standalone |
|---|---|---|---|---|---|
| Revenue | 527.2 | 217.0 | +143% | 355.8 | 174.0 (+104%) |
| Mfg, construction & operating expenses | 419.8 (79.6% of revenue) | 161.7 (74.5%) | — | 287.2 | 133.6 |
| EBITDA (incl. other income) | 79.2 (14.7%) | 35.3 (15.6%) | +124% | 60.0 (16.2%) | 33.0 (18.0%) |
| PAT before associates | 55.1 | 16.8 | +228% | 43.4 (11.7%) | 17.6 (+147%) |
| PAT incl. associates (LICL) | **68.2** | 30.0 | +127% | — | — |

- Subsidiaries: Metalfab ₹164.1 Cr revenue at 15.1% EBITDA margin (consolidated from 20 May 2025). Techno ₹39.2 Cr with EBITDA −₹4.5 Cr (seasonal; FY26 EBITDA 9.0%). LICL (associate) ₹640.8 Cr revenue at 14.6% margin, PAT ₹53.6 Cr.
- **Q2 FY27:** not out as of 13 Oct 2026. No results date had been announced in the screener-listed filings.

### Order book — the ₹2,817 Cr vs ₹8,857 Cr conflict, resolved from the company deck (p.21 [V], 30 Jun 2026)
| Bucket (₹ Cr) | Amount | Perimeter |
|---|---|---|
| Mining to Metal (incl. SAIL-IISCO with Primetals; Welspun) | 1,078 | LEWL |
| Power (Lloyds Metals & Energy power plant, related party) | 633 | LEWL |
| Civil | 265 | LEWL |
| Eco-pickling line (Lloyds Enterprises, related party) | 210 | LEWL |
| Hydrocarbon (L&T etc.) | 115 | LEWL |
| Naval & Defence (Mazagon Dock etc.) | 86 | LEWL |
| Marine/port + others | 46 | LEWL |
| Elevators, escalators & motors (Techno) | 198 | subsidiary |
| **Sub-total: LEWL + Techno** | **2,630** | reported consolidation |
| Metalfab | 196 | subsidiary (76%) |
| **= Current consolidated perimeter** | **≈2,826** | [E] sum. This is the "₹2.8k Cr" figure. The press ₹2,817 Cr is a rounding of this perimeter (unverified source date); Mar-26 consolidated was ₹2,643 Cr (primer; ScanX) |
| LICL — EPC & infrastructure | 4,830 | **associate (24.2%)**, merging in |
| SISCOL | 1,197 | **proposed** subsidiary, not yet acquired |
| **Combined platform** | **8,857** | the "₹8,857 Cr" headline (₹88,569 Mn) |

**Verdict:** both figures are company-sourced. ₹8,857 Cr is a *pro forma group* order book: it includes an associate not yet merged (LICL, 55% of the total) and an acquisition not yet completed (SISCOL). The executable book for the entity investors own today is **≈₹2,826 Cr**, about 1.8× TTM consolidated revenue. Use ₹2,826 Cr for current-entity cover. Use ₹8,857 Cr only against pro forma revenue (~₹3,250 Cr FY26 merged; ≈2.7× including SISCOL's book).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order-book cover | Consolidated perimeter ≈**1.75× TTM revenue** (2,826 ÷ 1,611) ≈ 21 months. Pro forma ≈2.7× | [E] |
| Order inflow / book-to-bill | Not disclosed. Implied Q1 FY27 inflow ≈ 2,826 − 2,643 + 527 ≈ ₹710 Cr → book-to-bill ≈ **1.35×** [E] (perimeter changes make this approximate) | [E] |
| Gross margin (proxy) | FY25 37% · FY26 42% (100 − material cost %). Q1 FY27 20.4% on the company's "mfg, construction & operating expenses" basis (25.5% in Q1 FY26) | Screener schedule [V]; deck [V]. The bases differ, so do not compare them |
| Debtor / inventory / payable days (screener) | FY25 117 / 59 / 71 · FY26 **67 / 209 / 93** | Screener [V] |
| CCC / WC days (screener) | FY26 CCC **184** · WC days **188** (FY25 105 / 101) | Screener [V]. Inventory rose from ₹86 Cr to ₹433 Cr and loans & advances from ₹62 Cr to ₹281 Cr in FY26 (schedule) |
| CFO/EBITDA | FY26 **−133%** (−253 ÷ 190). 2-yr consolidated **−31%**. Standalone 3-yr FY24–26 **−58%** (−219 ÷ 376) | [E] screener |
| Fixed-asset turnover | ≈3.9× (1,301 ÷ average net block 332). Company asset turnover chart: 8.5× FY26 | [E]; deck [V] |
| Export share | Negligible; domestic-focused | Deck (no export split) [V] |
| Segment / end-market | Steel & mining-to-metal, power, hydrocarbons, civil/infra, naval & defence, elevators and motors. Four "engines": Engineering, Electrical (Techno), EPC (LICL), Defence (LADS) | Deck p.13 [V] |
| Client concentration | **High and related-party.** Lloyds Metals & Energy and Lloyds Enterprises orders are ≥₹843 Cr of the ₹2,630 Cr LEWL sub-total (32%). LICL's ₹4,830 Cr book is focused on Gadchiroli "mining-to-metal, steel & power", largely for LMEL. Third-party names: SAIL, L&T, Welspun, MDL, Reliance, BPCL, FLSmidth | Deck pp.13, 21 [V]; [E] share |
| Capacity | ~300,000 sqm manufacturing. Fabrication ~150,000 MTPA after Bhilai and SISCOL (roadmap ~200,000 MTPA). Ahmedabad (Techno) expanding from 10,000 to 60,000 sqm, with a new HT motor line and 200+ elevators/month at Vatva. Metalfab is "at highest capacity utilisation" | Deck pp.4, 14, 24 [V] |

### Ownership (Aug-26; screener [V])
| Promoters | FIIs | DIIs | Public | Others | Shareholders |
|---|---|---|---|---|---|
| **40.00%** | 2.02% | 0.31% | 57.60% | 0.08% | 4.23 lakh |

- The promoter stake was 56.23% in Mar-25, 49.36% in Jun-25, 41.92% in Mar-26 and **40.00% in Aug-26**, diluted by the rights issue and share issues.
- **Pledge:** Lloyds Enterprises pledged 1.1 Cr LEWL shares to Aditya Birla Capital for a ₹40 Cr facility on 7 Oct 2026 (BSE SAST, 13 Oct 2026 [V] title).
- ESOP grant of 12.17 lakh options at ₹9.50 on 10 Oct 2026 [V] title.
- After the merger, the promoter share should rise, since LICL is promoter-held, but the exact post-merger holding was not computed.

### Capex, guidance
- **Target:** combined platform **₹10,000 Cr+ revenue by FY29/30** "with improving margins and return ratios" (deck p.24 [V]). That is about 3× FY26 pro forma income.
- **Growth spend:** SISCOL ₹635 Cr cash; Ahmedabad and Bhilai expansions. Q1 FY27 R&D was ₹32 Cr (12 contracts across ROMD, torpedoes, UAVs).

### Story bullets
1. **From fabricator to group EPC platform.** The merger with LICL (whose revenue is 1.5× LEWL's) changes the business into an EPC contractor whose largest client is its own promoter group's Gadchiroli steel and mining build-out.
2. **Defence optionality.** Fincantieri JV, FlyFocus UAVs, Kliver/Virtualabs. Small today (₹86 Cr naval book) but it carries much of the narrative.
3. **Working capital has turned.** FY26 CFO was −₹253 Cr, WC days rose to 188 and inventory was 5×'d, even as revenue rose 54%. The net cash comes from equity raises, not operations.
4. **Valuation:** ~64× P/E on the current entity, ~52× on the pro forma merged entity.

### Risks
- **Related-party revenue and pricing:** governance and arm's-length questions.
- **Merger execution:** NCLT approval, 25.8% dilution.
- **SISCOL integration** and funding.
- **Promoter pledge.**
- **Steel price pass-through** on fixed-price EPC.
- **Lumpy Lloyds group capex:** LMEL's Gadchiroli plan is the swing factor.
- **Retail-heavy register** (57.6% public, 4.2 lakh holders).

---

## Mini summary grid — Batch 3 (₹ Cr unless stated; FY26 = year to Mar-26; m-cap and multiples as of 13 Oct 2026; screener basis unless noted)

| Metric | Azad | Elecon | Tega | Skipper | Lloyds Engg |
|---|---|---|---|---|---|
| Archetype | Export precision airfoils (energy + aero), dedicated-plant LTCPAs | Domestic gear + MHE leader, net cash, overseas brands | Mining consumables → leveraged global roll-up (Molycop) | Integrated T&D tower fabricator + EPC + pipes | Group-anchored heavy engineering → EPC roll-up (merger pending) |
| FY26 revenue | 603 | 2,366 | 1,692 (pre-Molycop) | 5,553 | 1,301 |
| Growth YoY | +32% | +6% | +3% | +20% | +54% |
| EBITDA (screener OP) | 225 | 523 | 233 (co. 397 pre-exceptional, incl. other income) | 575 | 190 (co. 226, incl. other income) |
| EBITDA margin | 37% | 22% | 14% (co. 22%) | 10.4% | 15% (co. 17.7%) |
| PAT (reported) | 134 | 341 | 143 | 213 | 198 |
| Net debt / (cash) | 289 (co. 272) | (683) (co. ~₹700 Cr net cash) | (1,951) at Mar-26 → **≈8,300 net debt post-deal ex-RPS** [E] | 873 → ≈440 pro forma after the ₹433.5 Cr raise [E] | (365) |
| M-cap | 19,273 | 9,866 | 14,947 | 6,470 | 14,433 (≈17,235 post-merger share count) |
| P/E (TTM) | 139× | 32.6× (41.8× on reported) | n.m. (TTM loss) | 27.8× | 64.5× (~52× pro forma) |
| P/B | 12.6× | 4.3× | 4.4× | 4.0× | 7.7× |
| EV/EBITDA (TTM) [E] | ~81× | ~18× | ~12× pro forma | ~12.5× | ~61× (~35× pro forma) |
| ROCE (FY26) | 12% | 21% | 8% | 24% | 16% |
| Order book (latest) | ~₹6,500 Cr contract book (May-26) | ₹1,518 Cr (Jun-26) | ₹1,231 Cr (Jun-26, ex-Molycop) | ₹9,217 Cr (Jun-26) | ₹2,826 Cr current perimeter / ₹8,857 Cr combined (Jun-26) |
| Order-book cover (× TTM rev) | ~10× (multi-year LTCPA value) | 0.63× | ~0.7× | 1.64× | 1.75× (current perimeter) |
| Book-to-bill | n.d. | 1.12× FY26; 1.45× Q1 | n.d. | 1.02× FY26; 1.28× Q1 | ~1.35× Q1 [E] |
| Gross margin (basis) | 90% (material-proxy; misleading) | 44.9% (rev − RM & mfg) | ~60% Tega; 36% Molycop; 42% group | 36% (100 − material %) | 42% (100 − material %) |
| Working-capital days (screener) | 304 (≈337 sales-basis) | 74 | 77 | 43 | 188 |
| CCC (screener) | 1,720 (artefact) | 115 | 153 | 30 | 184 |
| CFO/EBITDA FY26 (3-yr) | −53% (−14%) | 60% (71%) | 150% (89%) | 48% (47%) | −133% (standalone 3-yr −58%) |
| Fixed-asset turnover | ~1.0× | ~2.6× | ~2.6× | ~5.4× | ~3.9× |
| Export share | ~93% | 22% FY26 (29% Q1 FY27) | majority overseas (FY26 % unverified) | 12.8% FY26 | ~nil |
| Promoter holding (latest) | 55.84% (Jun-26) | 59.28% (Sep-26) | 67.51% (Sep-26) | 61.48% (Jul-26) | 40.00% (Aug-26; partly pledged) |
| Q1 FY27 YoY (rev / PAT) | +26% / +20% | +6% (+12% adj.) / +2% adj. | consolidated: ₹1,723 Cr / −₹108 Cr (adj. +₹55 Cr) | +4.5% / +26% | +143% / +127% |
| Q2 FY27 status (13 Oct) | Not out | Board 14 Oct | Not out (window closed) | Not out | Not out |

Archetype mapping for the report:
- **(a) Qualification-moat export component makers:** Azad.
- **(b) Domestic capex-cycle component and equipment leaders:** Elecon.
- **(c) Global mining consumables (throughput annuity), now levered:** Tega.
- **(d) T&D / infra fabricators riding grid capex:** Skipper.
- **(e) Group-captive EPC / fabrication roll-ups:** Lloyds.

Raw-material pass-through ranks roughly Tega/Molycop (steel-index contracts) > Skipper (price-variation clauses; steel and zinc) > Elecon (~5% BOM inflation absorbed into order pricing) > Lloyds (fixed-price EPC) > Azad (superalloys; partly localised, small cost share).

---

## PRIMER ISSUES

Primer text was extracted from the HTML (tags stripped) and checked against the fetched sources above. Locations are given as the visible section ("cover strip", "What's new", §number).

### 1. primers/azad-engineering.html (last refreshed 28 Jul 2026)
1. **Stale m-cap (cover strip and §10 "Financials & valuation").** Says "~₹14,000 Cr Market cap (mid-2026)". Correct: **₹19,273 Cr** at ₹2,986 on 13 Oct 2026 (screener [V]).
2. **Stale P/E (§00 snapshot, §10, bear-case bullet).** Says "trading near ~95–100× earnings". Correct: **139×** TTM (screener [V]). P/B 12.6× and EV/EBITDA ~81× are not mentioned.
3. **Wrong balance-sheet status (§03 and §10 tile "Net cash — ~₹700 Cr cash vs ~₹240 Cr debt — funds the capacity ramp internally").** That is the FY25 position. At Mar-26 the company had gross borrowings of **₹457 Cr, treasury ₹184 Cr and net debt ₹272 Cr** (Q4 FY26 call [V]; deck p.31). Net D/E was 0.17×. §10 also credits a "net-cash balance sheet (low interest cost)" for PAT growth, but finance cost rose from ₹18 Cr to ₹31 Cr in FY26 and nearly doubled YoY in Q1 FY27.
4. **Stale promoter holding (§03 "Ownership").** Says "~59% (about 58.9% after a small secondary sale in mid-2025)". Correct: **55.84%** since Dec-25. It was 55.42% in Jun-25 after the sale (screener [V]).
5. **Order-book visibility understated or inconsistent (§00, §04, §08).** The cover says "~₹6,500 Cr" but the text repeatedly says "₹6,000 Cr+ … 5–6 years of visibility". Management says ≈₹6,500 Cr+ rolling contract book, "11×–12× FY26 revenue" (Q4 call, 16 May 2026 [V]). On ₹603 Cr revenue, ₹6,500 Cr is ~10–11 years, not 5–6. The primer should also say this is LTCPA contract value, not firm backlog.
6. **Missing Q1 FY27 (Jun-26 quarter, reported 7 Aug 2026).** Consolidated revenue ₹172.6 Cr (+25.9%), EBITDA ₹64.4 Cr (37.3%), PAT ₹35.2 Cr (+19.5%). PBT was down 5.5% YoY, and PAT rose only because of a 9% tax rate (deck [V]).
7. **Missing major events:**
   - Delivery of India's first indigenous expendable turbojet engine (GTRE design, Azad-built) to DRDO/MoD (Q1 deck p.5 [V]).
   - Baker Hughes dedicated plant inaugurated Apr-26.
   - MHI 8-year single-source hot-section nozzle-vane LTCPA.
   - BHEL ₹52.7 Cr rate contract (BSE, 12 Oct 2026 [V]).
   - Bill-discounting programme to cut debtor days from ~180 to ~90.
8. **Missing working-capital and cash red flags (§10).** FY26 CFO was **−₹119 Cr**, FCF −₹691 Cr, WC days 304 (screener [V]). The primer does not mention negative cash flow at all.
9. **Margin guidance missing.** Management guides 32–35% EBITDA margin (Q1 call [V]), not ~37%.
10. **Banned phrase variant (§10, "The one number…").** "the multiple, while rich, has something real to grow into" is a form of "grow into the multiple". "honest" appears once (§07), which is acceptable.

### 2. primers/elecon-engineering.html (last refreshed 19 Jul 2026)
1. **Stale m-cap and P/E (cover strip, §10).** Says "~₹11,400 Cr Market cap (Jul 2026)" and "~33×". Correct: **₹9,866 Cr** at ₹440 (screener [V]). Screener P/E is 32.6×, but P/E on reported TTM EPS (₹10.53) is **41.8×**. The primer should state the basis.
2. **Wrong export share (§00 "Overseas is already ~29% of revenue", and the source note).** ~29% is the **Q1 FY27** share (₹151 Cr). FY26 overseas revenue was **₹512 Cr = 22%**, against 23% in FY25 (Q4 FY26 deck [V]).
3. **Wrong margin hierarchy (§00 "MHE … thinner and more volatile margins", §06 "gears earn a higher and steadier margin than MHE").** In the company's segment data MHE EBIT margin was **28.4% FY25 / 27.6% FY26**, against gears **24.4% / 18.8%** (Q4 FY26 deck [V]). Only in Q1 FY27 did MHE (25.6%) approach gears (17.9%). The section's central claim is contradicted by the filings.
4. **Stale ROCE (§05 and §10 "ROCE historically around the ~30% mark").** Correct: 31% (FY24), 28% (FY25), **21% (FY26)**, 20.9% current (screener [V]).
5. **Export target misdated (§00, §08, §10).** Says "~50% of revenue by FY30". On the Q4 FY26 call the 50% goal was framed as "in the next 3 to 4 years". The explicit **FY30 target is ₹5,000 Cr revenue**, with Gear 70–75% and MHE 25–30% (Q1 FY27 call [V]). The ₹5,000 Cr target is missing from the primer.
6. **Segment number slightly off (§00, §02 chart).** MHE "~₹662 Cr". Reported FY26 MHE revenue was **₹667 Cr** (₹642 Cr ex the ₹25 Cr arbitration income) (Q4 deck [V]).
7. **Missing Q1 FY27 figures.** The primer cites the share reaction but not the numbers: revenue ₹521 Cr (+11.9% adj.), EBITDA ₹109 Cr (21.0%), PAT ₹70 Cr, order intake ₹755 Cr (+23%), open order book **₹1,518 Cr** (+37%), gross margin down 700 bp (Q1 deck [V]). The cover still shows the Mar-26 order book (₹1,292 Cr).
8. **Missing events:**
   - 50% US tariff on Indian gear exports, and the new Mexico entity to serve Latin America (Q4 call [V]).
   - ~₹400 Cr capex FY26–28.
   - EIMCO Elecon reclassification gain of ₹80 Cr (Q1 FY26).
   - Q2 FY27 board meeting on **14 Oct 2026**.
9. **Shareholding:** "~59%" is correct (59.28%). FII decline from 9.8% to 6.9% is not mentioned.

### 3. primers/tega-industries.html (last refreshed 19 Jul 2026)
1. **Wrong label and basis on revenue and profit (cover strip, "What's new", §10).**
   - Says "~₹1,774 Cr Revenue FY26 (standalone)". ₹1,773.6 Cr is **consolidated total income**. Consolidated revenue from operations was **₹1,692 Cr (+3%)** (screener [V]; Q4 call [V]).
   - "PAT ~₹227 Cr (+13%)" is an adjusted figure. **Reported PAT was ₹143 Cr (−29%)** after ₹84 Cr of exceptional costs (screener [V]).
2. **Stale promoter holding (§07).** Says "~74.8% … public float the remaining ~25%". Correct: **67.51%** (Sep-26), diluted by the ₹1,713 Cr preferential issue in Dec-25 (screener [V]).
3. **Deal value (§00 "What's new", §08).** Says "~US$1.48 bn Molycop". US$1.48 bn was the Sep-25 term-sheet EV. The **definitive agreement EV is ~US$1.45 bn** (press release, 29 Nov 2025 [V]).
4. **Stale m-cap (cover, §10).** Says "~₹14,150 Cr". Correct: **₹14,947 Cr** at ₹1,994 (screener [V]). P/E is now not meaningful (TTM loss).
5. **Missing Q1 FY27 (reported 13 Aug 2026), the first quarter with Molycop:**
   - Group revenue **₹1,723 Cr**, adjusted EBITDA ₹264 Cr (15%), **reported PAT −₹108 Cr** after ₹191 Cr one-time costs.
   - Tega ex-Molycop: revenue +21%, EBITDA margin 22.1%.
   - Order book ₹1,231 Cr.
   - (Q1 deck [V].)
6. **Missing post-closing balance-sheet facts (§08 relies on "approx." leverage).**
   - Group debt **₹11,200 Cr including ~₹2,600 Cr redeemable preference shares**.
   - Molycop net debt **US$672.5 m** at 30 Jun 2026 (from US$1.0 bn).
   - Provisional goodwill **₹4,996 Cr**.
   - FY27 Tega capex ~US$40 m; Molycop ~US$28 m (ten months).
   - Synergy target **US$20 m** over 2–2.5 years.
   - Group margin guide ~15%.
   - (Q1 call [V].) The primer's "~4–4.5× peak net debt/EBITDA" has no company source. My estimate is ≈3.6–3.9× ex-RPS and ~5× including RPS.
7. **Missing:** Chile plant timing (soft commissioning ~Jan 2027, commercial ~Mar 2027); in-principle approval on 6 Oct 2026 for 4.78 lakh more shares at ₹1,994.
8. No banned phrases found. "honest" appears 0 times.

### 4. primers/skipper.html (last refreshed 24 Aug 2026, after the 11 Aug Q1 results, yet Q1 is absent)
1. **Missing Q1 FY27:**
   - Revenue ₹1,310 Cr (+4.5%), EBITDA ₹140 Cr (10.7%), PAT ₹56.5 Cr (+26.5%).
   - **Exports −50%** (West Asia).
   - Order book **₹9,217 Cr** (the cover still shows ₹8,502 Cr).
   - Inflow ₹1,674 Cr; bid pipeline >₹35,000 Cr.
   - (Q1 deck [V].)
2. **Missing major events:**
   - **₹433.5 Cr preferential issue at ₹470** to Capital Group funds, Bandhan, Cohesion MK and Emerge; proceeds used for debt repayment.
   - **CRISIL upgrade to A+/Stable.**
   - FY27 guidance: ~15% revenue growth, ~30% PAT growth, ₹7,000 Cr+ inflow, ₹10,000 Cr+ closing book.
   - Capacity roadmap to 450k MTPA (FY27) and 600k MTPA (FY29).
   - Board approval (12 Oct 2026) of the "Evergrid" transmission/EPC subsidiary.
3. **Stale promoter holding (§03).** Says "broadly ~70%, approx.". Correct: **61.48%** (Jul-26, post-preferential), 66.50% before it (screener [V]).
4. **Unverified or wrong order detail ("What's new", §08).** Says "three fresh 765 kV PGCIL EPC awards booked in Q1 FY27". The company deck says "**two** prestigious 765 kV line projects from a reputed **domestic developer** in Maharashtra" (deck p.8 [V]).
5. **Export reach (§06).** Says "65+ countries". The company says "**50+ countries**" (deck p.27 [V]). The primer also does not quantify FY26 export revenue (**₹710 Cr, ~12.8%**).
6. **P/E (§10).** Says "~29×". Current is **27.8×** (screener [V]). M-cap ~₹6,500 Cr is still roughly right (₹6,470 Cr).
7. **Working capital (§08) lacks figures.** FY26 receivables doubled from ₹701 Cr to ₹1,485 Cr, CFO/EBITDA was 48%, and FCF was negative two years running (screener [V]).
8. "honest" appears once (§09), which is acceptable. No other banned phrases.

### 5. primers/lloyds-engineering-works.html (last refreshed 1 Aug 2026)
1. **Missing the defining event: the four-entity merger.** The board approved it on **29 Dec 2025**: LICL, Metalfab and Techno merge into LEWL. Swap ratios are LICL 1,798:1,500 and Metalfab 94:5, and the share count goes from 147.42 Cr to **185.52 Cr** (NSE filing [V]). The exchange NOCs (May 2026) and CCI approval were reported in the press (unverified). The primer's §03 "Ownership & structure" and §08 "Balance sheet" never mention it.
2. **Missing the SISCOL acquisition (Steel Infra Solutions).** Proposed 52.16% for ~₹635 Cr (group 88.12% for ~₹1,073 Cr), adding a ₹1,197 Cr order book and 100k MTPA (Q1 deck [V]). Also missing: the Thriveni Earthmovers ~7.14% stake (press, unverified).
3. **Missing defence JVs.** The Fincantieri (Italy) JV (propellers, shafting, thrusters; initial orders >₹127 Cr) and Kliver Polska / Virtualabs are absent. Only FlyFocus and Cemi are mentioned (§06).
4. **Order book stale and perimeter unexplained (cover, §05).** Says "~₹2,643 Cr Order book (Apr 2026)". At 30 Jun 2026 the current perimeter is **≈₹2,826 Cr** (LEWL + Techno ₹2,630 Cr + Metalfab ₹196 Cr), and the **combined platform is ₹8,857 Cr** including LICL ₹4,830 Cr and SISCOL ₹1,197 Cr (Q1 deck p.21 [V]). This is the source of the ₹2.8k Cr vs ₹8.9k Cr press conflict. The primer should present both and label the perimeter.
5. **Missing related-party concentration.** At least ₹843 Cr (~32%) of LEWL's own book is from Lloyds Metals & Energy and Lloyds Enterprises, and LICL's book is centred on the group's Gadchiroli projects (deck [V]). This is not flagged anywhere in the §11 risks.
6. **Stale m-cap and P/E (cover, §10).** Says "~₹12,970 Cr" and "~68×". Correct: **₹14,433 Cr** and **64.5×** (screener [V]). The primer does not give the post-merger share count (≈₹17,235 Cr at the current price).
7. **Stale promoter holding (§03, §06, §11).** Says "~42% (Jun 2026)". Latest is **40.00% (Aug-26)**, plus a new pledge of 1.1 Cr shares to ABCL (7 Oct 2026, BSE [V]).
8. **Missing Q1 FY27 (reported 6 Aug 2026).**
   - Consolidated revenue ₹527 Cr (+143%), EBITDA ₹79 Cr (14.7%), PAT incl. associates ₹68 Cr (+127%).
   - Pro forma merged FY26 income ₹3,253 Cr and PAT ₹331 Cr.
   - FY29/30 target ₹10,000 Cr+ revenue.
   - (deck [V].)
9. **Cash flow omitted.** FY26 CFO was **−₹253 Cr** and WC days rose from 101 to 188 (screener [V]). The primer calls the balance sheet a strength but does not show that the cash came from equity, not operations.
10. **Banned phrase variant (§11 closing).** "a ~68× multiple can be grown into by execution" is a form of "grow into the multiple". §11's "~68× … prices in years of flawless compounding; little cushion for a miss" is close to "priced for perfection / no room for error" in spirit.

### Cross-primer notes
- All five cover-strip m-caps and P/Es are stale. None of the five has Q1 FY27 numbers: Azad, Tega and Lloyds were refreshed before their Q1 releases; Elecon was refreshed after but cites only the share reaction; Skipper was refreshed after but has none.
- None reports a Q2 FY27 date. Elecon's board meets **14 Oct 2026**.

*End of batch 3.*
