# Aerospace & Defence: company packs, batch 2 of 3 (private defence electronics, sub-systems, simulators)

Sub-sector: Capital Goods || Aerospace & Defense. Companies: Data Patterns, Astra Microwave, Apollo Micro Systems, Paras Defence, Zen Technologies.
Pack compiled 13 Oct 2026. Every m-cap, price, P/E and Book Value was re-pulled from screener.in on **13 Oct 2026** (curl fetch, prices as screener showed them that day).

**Tags.** [V] = fetched and checked this session. [K] = from memory, with the source named. [E] = my estimate or a figure I derived.

**Main primary sources fetched this session**
- screener.in consolidated and standalone pages for all five, plus the balance-sheet schedule API (`/api/company/<id>/schedules/`), fetched 13 Oct 2026 [V].
- BSE filings (PDFs opened via the bseindia.com `AnnPdfOpen` links listed on each screener page): investor presentations, concall transcripts, Reg-30 disclosures and annual reports, as listed under each company [V].

**Status of Q2 FY27 (Sep-26 quarter).** No result was out for any of the five on 13 Oct 2026. The latest quarter on screener is Jun-2026 for all five [V]. Data Patterns' trading-window notice (BSE, 30 Sep 2026) says the window stays shut "until 48 hours after Q2 FY27 results" [V]. These companies usually report from late Oct to mid-Nov.

**Status of Sep-26 shareholding.** It is on screener for Astra Microwave and Apollo [V]. For Data Patterns, Paras and Zen, the latest pattern on screener is Jun-2026 [V].

**Listing status.** All five are still listed. There is no merger or demerger pending at any of them. Apollo now consolidates IDL Explosives, and Data Patterns has bought ST Advanced Composites (details under each company).

**How the bases are defined**
- **"OP".** Screener operating profit: revenue minus operating expenses, *excluding* other income. Company "EBITDA" in the presentations is also ex-other-income for these five unless I say otherwise.
- **"Cash".** The company's own "cash, bank balances and investments" figure (FDs and liquid MFs included) where it discloses one. Otherwise it is screener's "Cash Equivalents" line plus investments, and I flag that this may understate it.
- **CFO/EBITDA.** Screener CFO ÷ screener OP, computed by me. Screener's own "CFO/OP" row uses a different denominator and does not reconcile, so I do not use it.
- **Execution rate.** FY26 revenue ÷ order book at 31 Mar 2025.
- **Book-to-bill.** FY26 order inflow ÷ FY26 revenue.
- **EV.** M-cap + borrowings − cash (company basis).
- **Days.** Receivable, inventory, payable, cash-conversion-cycle and working-capital days are screener "Ratios" figures (cost basis for inventory and payables).

---

## 1. Data Patterns (India) Ltd (NSE: DATAPATTNS · BSE: 543428)

Fetched 13 Oct 2026. Data Patterns reports **standalone only**: the screener consolidated page is empty. ST Advanced Composites became a subsidiary only in Q2 FY27.

Sources:
- screener: https://www.screener.in/company/DATAPATTNS/ [V]
- Q1 FY27 investor presentation (BSE, 30 Jul 2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e68b20e7-1a07-425d-9ba3-08a112bd72a0.pdf [V]
- Q1 FY27 concall transcript (31 Jul 2026): Pname=7093a3fa-e59b-44c2-a5d3-faf1ede00cab [V]
- Q4 FY26 concall transcript: Pname=b5abfea9-bcf3-4a36-9b12-f8e4d38ffcfe [V]
- Annual Report FY26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/7cce9795-d29c-4001-99bb-13870f3ac42e.pdf [V]
- ST Advanced Composites SPA disclosure (25 Aug 2026): Pname=cc9833ce-25a5-4817-af75-a9c9d08766ed [V]

### 1.1 Standardised financials (standalone, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 520 | 708 | 925 (company figure: 924.8) | screener [V]; Q1 PPT [V] |
| Growth YoY | +14.8% | +36.2% | +30.6% | [E] |
| OP (ex other income) | 222 | 275 | 374 (company EBITDA: 371.0) | screener / PPT [V] |
| OP margin | 43% | 39% | 40.4% (company: 40.1%) | [V] |
| Gross margin, company basis | n.a. | 61.0% | **63.2%** | Q1 PPT [V] |
| Other income | 46 | 46 | 25 (company figure: 28.0) | [V] |
| PAT | 182 | 222 | 271 (net margin **29.3%**, not 40%) | [V] |
| ROCE / ROE | 20% / ~14% | 21% / ~15% | 21.9% / 15.2% (company: 20.8% / 16.7%) | screener / PPT [V] |
| Borrowings | 4 | 6 | 5 (all lease; no bank debt) | screener schedule [V] |
| Cash + FDs + investments (company) | n.a. | 543 | **517** at Mar-26; **466** at Jun-26 per PPT (530 per concall) | AR FY26 / Q1 PPT / transcript [V] |
| Net cash | — | ~537 | **~512** | [E] |
| CFO | 139 | −90 | 80 | screener [V] |
| Net worth | 1,324 | 1,508 | 1,736 | screener [V] |

The Jun-26 cash figure conflicts between sources: the PPT gives ₹465.9 cr and the concall gives ₹530 cr. The PPT is the written figure, so I use it; the concall number may include FDs under lien.

Screener shows only ₹94 cr "cash equivalents" plus ₹329 cr investments, so it understates cash. Part of the company's ₹517 cr sits in "other assets" as long-dated FDs.

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹4,143 |
| M-cap | ₹23,169 cr |
| P/E (TTM) | 85.7× |
| Book value / share | ₹310 → P/B 13.4× |
| EV | ≈ ₹22,660 cr → EV/EBITDA 60.6× FY26 OP, 60.7× TTM OP of ₹373 cr [E] |
| Dividend yield | 0.24% |
| 52-week range | ₹5,000 / ₹2,131 |

### 1.2 Q1 FY27 (Jun-26 quarter, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 116.0 | 99.3 | +16.8% | 344.9 |
| Gross margin | 78.9% | 79.8% | −90 bp | 73.4% |
| EBITDA | 31.4 | 32.1 | −2.2% | 192.8 |
| EBITDA margin | 27.0% | 32.3% | −526 bp | 55.9% |
| PAT | 22.1 | 25.5 | −13.5% | 138.4 |
| Order inflow | 117.2 | 183.5 | −36% | — |

Source: Q1 FY27 PPT [V]; it matches screener (116 / 31 / 22) [V].

Management's explanations for the quarter (transcript [V]):
- Revenue was "modest… due to temporary delays in customer approvals".
- Other expenses rose 64%, from facility repairs plus a ₹2 cr provision on old receivables.

Q2 FY27 is not out [V].

### 1.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Firm order book | **₹926.5 cr at 31 Mar 2026**; ₹927.7 cr at 30 Jun 2026 | Q1 PPT [V] |
| Order book incl. negotiated | ₹2,654 cr "as on date" (end-Jul 2026), up from ₹2,062 cr at FY26 results | PPT / transcript [V] |
| Order-book history | FY24 ₹1,083 cr → FY25 ₹729.8 cr → FY26 ₹926.5 cr | PPT chart, reconciled with inflow minus revenue [V/E] |
| OB cover | **1.0×** FY26 revenue on the firm book; 2.9× including negotiated | [E] |
| FY26 order inflow | **₹1,121 cr** (+216% YoY; FY25: ₹355 cr) | Q4 transcript / PPT [V] |
| FY26 inflow, largest orders | IMD radar and service ₹288 cr (development/service); ECIL EW ₹84 cr; HAL avionics ₹77 cr; MoD EW ₹66 cr; DRDO avionics ₹65 cr; BrahMos FCS ₹46 cr, AMC ₹46 cr, missile ₹43 cr | PPT [V] |
| Book-to-bill FY26 | **1.21×** | [E] |
| Execution rate FY26 | **127%** of opening book. Above 100% because short-cycle orders are booked and billed within the year | [E] 924.8 / 729.8 |
| FY27 guidance | Revenue +20–25%; EBITDA margin 35–40%; ~₹2,000 cr fresh inflow in FY27 beyond orders received or negotiated; ₹2,000–4,000 cr pipeline over 24 months (includes a HAL order and BrahMos seekers) | Q1 PPT / transcript [V] |
| Capex | ~₹150 cr over two years (PPT); "₹200 cr plus" (concall) | [V] |
| Receivable days | **287** (FY25: 307) | screener [V]; AR gives 287 vs 307 [V] |
| Inventory days | 294 | screener [V] |
| Payable days | 82 | screener [V] |
| Cash conversion cycle | 499 days on screener basis; company gives **365 days** FY26 (428 days FY25) | screener / Q4 transcript [V] |
| Working-capital days | **357** | screener [V] |
| CFO / EBITDA | FY26 **21%** (80/374); 3-yr FY24–26 **15%** (129/871) | [E] from screener [V] |
| Customer advances | Contract liabilities fell; current liabilities dropped ₹136 cr, "mainly due to reduction in contract liabilities". Screener tags 0 as advances | AR FY26 [V] |
| Export share | FY26 **6.7%** (₹61.8 cr of ₹924.8 cr; FY25: 15.1%). Export order book ₹53 cr at FY26 results, then **₹39 cr at 30 Jun 2026** | AR geography note / PPT [V] |
| R&D | ~₹185 cr spent on new-product development over 5 years, so roughly 4–5% of revenue a year. Not separately disclosed in the AR | PPT [V]; % is [E] |
| Customer concentration | 3 customers each >10% of revenue = **₹509 cr = 55% of FY26 revenue** (FY25: 2 customers, ₹337 cr = 48%). Q1 FY27 customer pie: DRDO, BrahMos, export, MoD, BEL, HAL, others | AR note / PPT [V] |
| Revenue type | FY26: production ~64%, development ~30%, services ~5% | PPT chart, approximate [V] |
| Promoter holding | **42.41%** (Jun-26; flat for 8 quarters). No pledge shown on screener | screener [V] |
| Dilution | QIP of ₹500 cr in 2023 [K, company QIP doc]. ₹37.65 cr of it was still unspent at Mar-26 | AR [V] |

### 1.4 Segment / product mix

Data Patterns reports one segment [V, AR]. The FY26 product split is in a pie in the PPT: radar ~37%, EW, avionics, AMC/services, ATE, communication, FCS and naval. The exact mapping of slices to labels is ambiguous in the text extract [V/E].

Q1 FY27 revenue was led by radar (~41%).

### 1.5 Capacity / plants

- A single Chennai campus. Floor area is being roughly doubled to handle large radar and EW integration [V, PPT]. The primer cites ~100,000 sq ft on ~5.8 acres; that figure was not re-verified this session.
- 1,112 engineers at Jun-26, with 82 hired in Q1 [V].
- STAC (Chennai) adds composite radomes and structures [V].

### 1.6 Ownership (Jun-26) [V]

| Holder | Share |
|---|---|
| Promoters (S. Rangarajan and Rekha Murthy Rangarajan) | 42.41% |
| FII | 12.50% |
| DII | 11.98% (up from 7.36% in Mar-25) |
| Public | 33.11% |
| No. of shareholders | 2.14 lakh |

### 1.7 Key contracts and events (dated)

- **30 Jul / 25 Aug 2026:** board approves, then signs the SPA for **100% of ST Advanced Composites Pvt Ltd**. Consideration ~₹10 cr: ₹1.5 cr for equity plus ₹8.5 cr loan to clear liabilities [V].
- **FY26:** largest order was IMD radars and service, ₹288 cr [V].
- **FY26:** delivered transportable PARs to a European country, with SAT completed [V].
- **Q1 FY27:** orders include MoD avionics ₹44.9 cr, DRDO radar ₹29.4 cr and BrahMos ATE/FCS [V].
- **8 Sep 2026:** CRISIL reaffirmed ratings on ₹775 cr of bank facilities [V, screener document list].
- **9 Sep 2026:** independent director S. V. R. Vadlamani ceased to be a director [V].

### 1.8 Story bullets

- **Highest-margin defence-electronics IP house in India.** FY26 gross margin was 63% and EBITDA margin 40%. Guidance of 35–40% for FY27 brings in production mix, and the Q1 margin of 27% was a seasonality effect, not a reset [V].
- **Inflow inflected.** It tripled to ₹1,121 cr in FY26. Management targets another ~₹2,000 cr in FY27, plus a negotiated ₹2,654 cr book, so the firm-OB cover of about 1× should rise if conversion happens [V].
- **New lines.** Counter-drone work (active radar and passive ELINT/COMINT) and the BrahMos seeker are the new optionalities, linked to emergency procurement after Op Sindoor. Neither is yet a quantified order [V transcript].
- **Cash conversion is the weak link.** CFO/EBITDA was ~15% over three years, and receivables are close to 290 days. Exports fell to 6.7% of revenue in FY26 [V/E].

### 1.9 Risks

- Q4-loaded revenue: Q4 FY26 was ~51% of FY26 PAT.
- Customer approval delays.
- Margin dilution as production rises.
- Key-person dependence on the CMD.
- Concentration: top-3 customers are 55% of revenue.
- Valuation of 86× P/E on falling Q1 profit.

---

## 2. Astra Microwave Products Ltd (NSE: ASTRAMICRO · BSE: 532493)

Fetched 13 Oct 2026. Consolidated figures include the wholly owned subsidiaries (e.g. Aelius Semiconductors, Singapore) and the **Astra Rafael Comsys (ARC)** JV with Israel's Rafael, which is equity-accounted as "share of profit from JVs" [V, PPT].

Sources:
- screener: https://www.screener.in/company/ASTRAMICRO/consolidated/ [V]
- Q1 FY27 investor presentation (BSE, 10 Aug 2026): Pname=c4b03964-affd-4c16-a7e2-384c4ab877f4 [V]
- Q1 FY27 transcript (11 Aug 2026): Pname=a3759892-3c11-4a78-9966-85a0d50319e3 [V]
- Q4 FY26 PPT: Pname=03c484ea-f8f7-4cee-9b9d-ab2696cf9a5d [V]
- Q4 FY26 transcript (27 May 2026): Pname=78f3aacc-b7ef-4d51-b1e1-d6e5863786b8 [V]
- Demerger in-principle approval (NSE, 27 Feb 2026): https://nsearchives.nseindia.com/corporate/ASTRAMICRO_27022026125251_outcomeofBM.pdf [V]

### 2.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 909 | 1,051 | 1,163 (standalone: 1,156) | screener / PPT [V] |
| Growth YoY | +11.4% | +15.6% | +10.7% | [E] |
| OP / EBITDA (ex OI) | 192 | 269 | 334 | screener = PPT [V] |
| OP margin | 21% | 25.6% | **28.7%** | [V] |
| Gross margin, company basis | n.a. | n.a. | 50.9% consolidated / 49.1% standalone | Q1 PPT [V] |
| Interest | 32 | 57 | 56 | screener [V] |
| PAT | 121 | 154 | 193 (includes JV share of ₹8 cr) | [V] |
| ROCE / ROE | 19% / ~13% | 19% / ~15% | 20.3% / 16.0% | screener [V] |
| Borrowings | 238 | 424 | **288** (₹224 cr short-term working capital + ₹63 cr long-term) | screener schedule / PPT BS [V] |
| Cash + bank incl. FDs | 131 | 98 | **253** (₹175 cr cash + ₹78 cr other bank balances) | consolidated BS in Q4 PPT; matches screener [V] |
| Net debt | 107 | 326 | **35** | [E] |
| CFO | −182 | −90 | **387** (standalone: 376) | screener / Q4 PPT [V] |
| Net worth | 966 | 1,098 | 1,315 | screener [V] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹1,674 |
| M-cap | ₹15,917 cr |
| P/E (TTM, consolidated) | 84.2× (standalone: 91.1×) |
| Book value / share | ₹138 → P/B 12.1× |
| EV | ₹15,952 cr → EV/EBITDA 47.8× FY26, 49.1× TTM OP of ₹325 cr [E] |
| Dividend yield | 0.14% (₹2.40/share for FY26 [V, Q4 transcript]) |
| 52-week range | ₹1,960 / ₹836 |

### 2.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 177 | 200 | −11.5% | 488 |
| Gross margin | 47.3% | 46.7% | +60 bp | n.a. |
| EBITDA | 33 | 41 | −19.3% | 161 |
| EBITDA margin | 18.7% | 20.5% | −180 bp | 33% |
| PAT | 12 | 16 | −24.0% | 106 |
| Order inflow (standalone) | ₹185 cr (transcript) / ₹194 cr (PPT bridge) | | | ₹530 cr |

Sources: PPT / transcript / screener [V].

On the quarter, management says Q1 is seasonally the weakest. Interest fell because the overdraft was barely used after the FY26 cash build [V].

Q2 FY27 is not out. The trading window has been closed since 1 Oct [V].

### 2.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book, standalone | **₹2,141 cr at 31 Mar 2026** (FY25: ₹1,952 cr); ₹2,156 cr at 30 Jun 2026 | PPT [V] |
| Order book, consolidated (incl. ARC and services) | ₹2,849 cr at 30 Jun 2026 | Q1 transcript [V] |
| Order book after Uttam | **~₹4,300 cr "as on date"** (11 Aug 2026), after the **HAL Uttam AESA radar sub-systems order of ₹2,205 cr incl. GST (~₹1,870 cr ex-GST), received end-Jul 2026**. This is Astra's largest order ever. It runs ~5 years: 12 sets by Sep-27, then ~25+ a year, finishing by FY31–32 | Q1 transcript [V] |
| OB cover | 1.85× FY26 revenue (Mar-26 standalone); **~3.7×** on the ₹4,300 cr book | [E] |
| FY26 order inflow | **~₹1,345 cr** standalone, from the OB bridge (2,141 − 1,952 + 1,156). The FY26 top-10 orders total ₹657 cr: IMD ₹145 cr, ARC export ₹138 cr, DRDO radar ₹112 cr, BEL radar ₹80 cr | [E] / PPT [V] |
| Book-to-bill FY26 | **1.16×** | [E] |
| Execution rate FY26 | **59%** (1,156 / 1,952) | [E] |
| FY27 guidance | Revenue ~**₹1,350 cr ± ₹25 cr** (>15%); FY28 ~₹1,600 cr ± ₹50 cr; inflow ~₹1,600 cr in FY27 excluding Uttam; ₹8,000–9,000 cr of intake over 3–4 years (QRSAM ₹700–800 cr, ARC ₹500–750 cr, Su-30/Virupaksha/Angad ≥₹3,000 cr). Margin: "maintain current trajectory", no number given | Q1 transcript [V] |
| Guidance conflict | Q4 call: "FY27 top-line growth 15–20%". Q1 call: ">15%, ~₹1,350 cr". ARC sales guidance also conflicts: ">₹600 cr" (Q4) vs "₹360 cr" (Q1). The Q1 figures are newer and I treat them as more credible | [V] |
| Receivable days | **216** (FY25: 273) | screener [V] |
| Inventory days | **394** | screener [V] |
| Payable days | 73 | screener [V] |
| Cash conversion cycle | 537 days on screener basis (company chart is lower, ~287 for FY26) | screener / PPT [V] |
| Working-capital days | **267** | screener [V] |
| CFO / EBITDA | FY26 **116%** (387/334); 3-yr FY24–26 **14%** (115/795). FY26 benefited from recovering old debtors | [E] from screener [V] |
| Customer advances | ₹83 cr (FY25: ₹96 cr) | screener schedule [V] |
| Export share | FY26 revenue: exports via ARC and Aelius **11.9%**. Quarterly "exports incl. deemed" ran 10–17% in FY26 and 5% in Q1 FY27. Export OB is ₹173 cr (8%) | PPT [V] |
| R&D | **₹58 cr in FY26 = 5.0% of standalone revenue** (FY21: ₹23 cr); 701 R&D staff | PPT [V] |
| Customer concentration (FY26 standalone revenue) | DRDO **28.2%**; BEL and other DPSUs **22.7%**; IMD 18.0%; exports 11.9%; ISRO/SAC 6.4%; others/AMC 9.5%; private 3.0% | PPT [V] |
| Order-book mix (Jun-26) | Production 65.7%; development 14.3%; export 8.0%; AMC/service 12.0%. By sector: defence ~66%, space/met/hydro ~34% | PPT / transcript [V] |
| Promoter holding | **6.54%** (Sep-26; flat). No pledge figure appears on the screener page | screener [V] |
| Dilution | QIP of ₹300 cr in 2023 [K; screener shows equity capital rising from 17 to 19 in FY24, consistent]. No warrants | [V/K] |

### 2.4 Segment / product mix

Q4 FY26 transcript [V]:
- Radar ~60% of FY26 revenue.
- Space and meteorology ~16%.
- FY27 expected mix: radar ~45%, EW+missile ~25%, space/met ~25%.

Quarterly sector mix, Q1 FY27 [V, PPT]:

| Sector | Share |
|---|---|
| Defence | 80.4% |
| Space | 7.7% |
| Exports | 5.0% |
| Meteorological | 4.9% |

### 2.5 Capacity / plants

- Hyderabad: five works units (Bollaram Units 1–2, Raviryala/Hardware Park Units 3–4, E-City Unit 7).
- R&D centres in Hyderabad and Bengaluru (Aerospace Park).
- ARC runs a 48,000 sq ft SDR plant in Hardware Park, Hyderabad, described as "India's first private-sector military-grade SDR facility" [V, PPT].
- Capex runs at maintenance-plus levels. Management says no extra capex is needed for the revenue ramp; working capital will rise [V, Q4 transcript].

### 2.6 Ownership (Sep-26) [V]

| Holder | Share |
|---|---|
| Promoters | 6.54% |
| FII | 10.48% (up from 5.30% in Mar-25) |
| DII | 16.52% |
| Public | 66.47% |
| No. of shareholders | 1.27 lakh |

### 2.7 Key contracts and events (dated)

- **27 Feb 2026:** board gives in-principle approval to **demerge the Space, Meteorology and Hydrology undertakings** into a separate company [V, NSE PDF].
- **10 Jun 2026:** the formal scheme into Astra Space Technologies Pvt Ltd (mirror shareholding, listing targeted by Q1 FY28) was reportedly approved. This comes from investywise.com via search and is **unverified**. Management confirmed the mirror-shareholding spin-off on the 11 Aug call [V].
- **Q4 FY26:** ₹530 cr inflow (SDR programmes, BEL radar sub-systems, ISRO Gaganyaan checkout hardware) plus ₹300 cr in PNC [V].
- **Jul 2026:** HAL Uttam radar sub-systems order, **₹2,205 cr** incl. GST [V, transcript].
- **Jul 2026:** BEL MMIC chipset order ₹45 cr. Also orders from BDL (missile, ₹14 cr) and SAC (₹49 cr) [V].
- **Aug 2026:** L1 in the AMCA prototype radar (AAAU) tender with BEL; contract expected in about a month. Not yet confirmed as signed [V, transcript].
- **Jul 2026:** demonstrations at Jalandhar of an "electromagnetic wall" and a vehicle-mounted anti-drone system [V].
- **28 Aug 2026:** CRISIL rating update [V, screener document list].

### 2.8 Story bullets

- **Uttam changes the profile.** The order roughly doubles the book to ₹4,300 cr. It moves Astra from an RF component vendor to the Tier-1 radar sub-system maker on Tejas Mk1A, linked to HAL's Mk1A ramp [V].
- **Clean FY26 cash year.** CFO was ₹387 cr after two negative years, receivables fell to 216 days, and net debt dropped to ~₹35 cr [V].
- **Demerger.** The space/met business (~₹150–200 cr of revenue) is to be spun off. The remaining company becomes a defence pure-play, but reported numbers will rebase [V/E].
- **Low promoter float, unusual for the sector.** Promoters hold 6.5%; institutions hold 27% and are rising.

### 2.9 Risks

- Q1 profit fell 24%, so the year is back-ended. The FY27 guidance of ₹1,350 cr needs ~₹1,170 cr in the remaining nine months.
- Uttam deliveries depend on HAL's Mk1A schedule and engine supply.
- Working capital: inventory is close to 400 days.
- JV forex provisions at ARC.
- Valuation: 84× P/E, 48× EV/EBITDA.

---

## 3. Apollo Micro Systems Ltd (NSE: APOLLO · BSE: 540879)

Fetched 13 Oct 2026. Consolidated figures include **IDL Explosives Ltd**, held 100% via Apollo Defence Industries Pvt Ltd and acquired from GOCL during FY26 [V, Q4 transcript]. The primer gives Nov 2025 as the completion month; I did not verify the month. As a result, FY26 consolidated (₹904 cr) is **not like-for-like** with FY25 (₹562 cr, standalone only).

Sources:
- screener: https://www.screener.in/company/APOLLO/consolidated/ [V]
- Q1 FY27 earnings presentation: Pname=36a5691a-6ad1-40a0-8d3f-f8f5b33f439b [V]
- Q1 FY27 transcript (8 Aug 2026): Pname=79339d93-3a2f-49ab-8391-0f7acc03990f [V]
- Q4 FY26 transcript (19 May 2026): Pname=626429de-b516-4b83-8f9c-3645cde8e959 [V]
- Kotak Neo news on the SEBI open-offer letter and Shauryastra: https://www.kotakneo.com/news/stocks/apollo-micro-systems-takes-34-percent-stake-new-defence-venture-sebi-sets-timeline-premier-explosives-deal/ [V, WebFetch]

### 3.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 372 | 562 | **904** (standalone: 765) | screener / transcript [V] |
| Growth YoY | +25% | +51% | **+61%** consolidated; **+36%** standalone (organic) | [E] |
| OP / EBITDA (ex OI) | 84 | 129 | 219 (company: 218) | [V] |
| OP margin | 22.6% | 23.0% | 24.2% (standalone: 28.5%) | [V] |
| Gross margin | n.a. | n.a. | Not disclosed in the fetched docs. Proxy: 100 − material % is unverified | — |
| Interest | 30 | 34 | 47 | [V] |
| PAT | 31 | 56 | **107** (company: 107; the primer's ₹113 cr is not supported) | screener / transcript [V] |
| ROCE / ROE | 12% / ~6% | 14% / ~9% | 14.5% / 11.8% on screener; company figure **18.2% / 11.2%** | screener / transcript [V] |
| Borrowings | 208 | 335 | **543** (₹413 cr short-term + ₹119 cr long-term + ₹11 cr lease) | screener schedule [V] |
| Cash + bank | 21 | 62 | **156** | screener schedule [V]. No separate company figure was found |
| Net debt | 187 | 273 | **387** (primer: ₹376 cr) | [E] |
| CFO | −76 | 10 | **−130** | screener [V] |
| Net worth | 518 | 607 | 1,313 (after the FY26 equity raise) | screener [V] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹407 |
| M-cap | ₹15,122 cr |
| P/E (TTM) | 125× |
| Book value / share | ₹36.8 → P/B 11.1× |
| EV | ≈ ₹15,509 cr → EV/EBITDA 70.8× FY26, 67.1× TTM OP of ₹231 cr [E] |
| 52-week range | ₹467 / ₹180 |

**Caveat.** These multiples are pre-money for the ₹3,322 cr preferential issue described below. When it is fully paid, the share count rises ~22% and the company turns net-cash before paying for Premier.

### 3.2 Q1 FY27 (Jun-26 quarter, ₹ cr)

| Item | Q1 FY27 consolidated | Q1 FY26 | YoY | Q1 FY27 standalone |
|---|---|---|---|---|
| Revenue | 251 | 134 | +88% | 156 (+17%) |
| EBITDA (ex OI) | 54 | 41 | +31% | ~48 (+18%) |
| EBITDA margin | 21.5% | 30.6% | −910 bp (IDL mix) | ~31% (+110 bp) |
| PAT | 25 | 18 | +43% | 28 (+43%; 18% margin) |

Source: transcript / PPT / screener [V].

Order inflow for the quarter was not disclosed. The consolidated order book rose from ₹1,432 cr (Mar-26) to **₹1,704 cr (8 Aug 2026)**. That ₹1,704 cr includes ₹480 cr at IDL; standalone is ₹1,224 cr. Implied inflow over ~4 months ≈ ₹523 cr+ [E].

Q2 FY27 is not out [V].

### 3.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹1,432 cr consolidated at 31 Mar 2026**; ₹1,704 cr at 8 Aug 2026 (standalone ₹1,224 cr; IDL ₹480 cr) | Q4 / Q1 transcripts [V] |
| OB cover | **1.6×** FY26 revenue (Mar-26); 1.9× on Aug-26 | [E] |
| FY26 order inflow / book-to-bill / execution rate | **Not computable.** The Mar-25 book on the same consolidated perimeter was not disclosed in the fetched documents, and management "never gives" OB composition. Unverified | — |
| Pipeline | Expects a **single order of ₹2,500–3,000 cr by FY27-end**, against an AoN already accorded (QRSAM-related per the call). That would take the book to **₹3,500–4,000 cr** | Q1 transcript [V] |
| FY27 guidance | Revenue growth **40–45%** (consolidated and standalone). "Not giving EBITDA guidance"; standalone PAT margin target ~15% was achieved in FY26 (16%) | Q1 / Q4 transcripts [V] |
| Receivable days | **194** | screener [V] |
| Inventory days | **478** | screener [V] |
| Payable days | 230 | screener [V] |
| Cash conversion cycle | 442 days on screener basis; company says "working-capital cycle 359 days FY26" (626 days in FY21) | screener / Q4 transcript [V] |
| Working-capital days | **256** | screener [V] |
| CFO / EBITDA | FY26 **−59%** (−130/219); 3-yr FY24–26 **−45%** (−196/432) | [E] from screener [V] |
| Customer advances | ₹15 cr | screener schedule [V] |
| Export share | **Nil** revenue ("currently the export revenue is nil"), although the first export order was received in FY26 | transcripts [V] |
| R&D | **~₹72 cr = 8% of FY26 revenue** (Q4 call). The Q1 call says "6–8% average", plus a "₹27.63 cr" figure whose basis is unclear (perhaps capitalised spend). I treat the Q4 figure as primary | [V] |
| Customer concentration | Not quantified. Customers are DRDO labs (DcPP partner), BDL, BEL, HAL and the Navy. Management declines to give the mix | transcript [V] |
| Promoter holding | **49.98%** (Sep-26; 55.12% in Dec-24) | screener [V] |
| Promoter pledge | **35.6% of promoter holding pledged** | screener "Cons" box [V] |
| Dilution | (a) FY26 raise: equity capital went from 31 to 36 and reserves from 576 to 1,277 (warrants/preferential) [V screener]. (b) **Jul 2026 preferential issue of ~₹3,322 cr**: 2.28 cr shares plus 5.69 cr warrants at ₹416.60, EGM 4 Aug 2026. The size is confirmed at "around ₹3,300 cr" on the call [V]; instrument detail is from search snippets [unverified]. Use of proceeds: ~₹2,500 cr for Premier (SPA + open offer), ~₹500 cr to repay working-capital debt, the rest general corporate purposes [V transcript] | |

### 3.4 Segment / product mix

- Apollo does not report segments by platform.
- Standalone electronics: missiles (Akash-NG, QRSAM, VSHORAD, Pralay, BrahMos-NG, NASM, Kusha), torpedoes (Takshak, Mareech), mines (MIGM "Vighana") and Pinaka guidance [V, PPT].
- IDL: commercial and defence explosives, with an industrial licence for TNT and RDX. FY26 revenue was a little under ₹380 cr, historically loss-making and "in transformation" [V, Q4 transcript].

### 3.5 Capacity / plants

- Hyderabad Units I–II.
- **Unit III** greenfield in Telangana: first phase is already producing, with full production "before March '27" [V, Q1 transcript].
- The primer's ₹250 cr+ capex and ~₹60 cr for test equipment are not re-verified this session.
- DPIIT lifetime licence covers UAVs, INS, radars, torpedoes, mines, ATGMs, bombs, rockets, missiles and loitering munitions [V, Q4 transcript].

### 3.6 Ownership (Sep-26) [V]

| Holder | Share |
|---|---|
| Promoters (Karunakar Reddy Baddam and family) | 49.98% (35.6% of it pledged) |
| FII | 5.95% |
| DII | 1.50% |
| Public | 42.58% |
| No. of shareholders | 4.25 lakh (very retail-heavy) |

### 3.7 Key contracts and events (dated)

- **FY26:** 100% acquisition of IDL Explosives.
- **FY26:** first export order.
- **FY26:** ToT for laser DEW and EO tracking.
- **FY26:** MoU with GRSE, and a tripartite alliance with the Navy and IIT Madras [V].
- **9 Jul 2026:** SPA to buy the **41.33% promoter stake in Premier Explosives Ltd for ~₹1,550 cr in cash** (₹698/share, 2.22 cr shares) [V transcript and PPT; price from search].
- **Open offer for up to 26%:** about 1.40 cr shares, ~₹976 cr at ₹698. SEBI observations came on 21 Aug 2026, and tendering must start within 12 working days of CCI approval [V, Kotak Neo]. A sahi.com snippet says CCI cleared it on 22 Sep 2026 [unverified].
- **Aug 2026:** 34% stake in **Shauryastra Defence Systems Pvt Ltd** (incorporated 21 Aug 2026, led by ex-DRDO DG Dr V. K. Saraswat) [V, Kotak Neo].
- **Q1 FY27:** handed over an indigenous Safety and Detonation Device to the Navy.
- **Q1 FY27:** Make-II prototype sanction for the **SAVIOR** ASW autonomous vessel.
- **Q1 FY27:** IAF named Apollo the development agency for the **IPREC** precision range-extension kit (Make-II) [V transcript].

### 3.8 Story bullets

- **Becoming a "complete weapon" group.** Apollo now spans electronics, IDL energetics and Premier propellants/explosives, so the FY27 consolidated base changes again once Premier is consolidated [V].
- **Equity-funded M&A on a 125× P/E stock.** ₹3,322 cr is being raised to deploy ~₹2,500 cr into Premier. Per-share accretion is the open question [E].
- **Pipeline hinges on one large order.** The ₹2,500–3,000 cr single order would roughly double the book [V].
- **Weakest cash conversion in the batch.** Three-year CFO is negative, and inventory runs at ~478 days. Pledged promoter shares add governance risk [V].

### 3.9 Risks

- Integration of IDL and Premier (both explosives; Premier is itself listed).
- Pledge at 35.6% of promoter holding.
- Negative CFO.
- Dilution.
- Timing of the large AoN conversion.
- Retail-heavy register and high volatility.

---

## 4. Paras Defence and Space Technologies Ltd (NSE: PARAS · BSE: 543367)

Fetched 13 Oct 2026. The company is still listed. Face value is now **₹5**: shareholders approved a 1:2 sub-division of each ₹10 share into two ₹5 shares, recorded in AR FY26 [V], and screener shows FV ₹5 [V]. All per-share figures are post-split.

Sources:
- screener: https://www.screener.in/company/PARAS/consolidated/ [V]
- Investor presentation May 2026: https://parasdefence.com/uploads/presentation/1779278288_paras-defence-investor-presentation-2026.pdf [V]
- Annual Report FY26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/355e0c81-b010-40a8-b649-0ad97faad7ed.pdf [V]
- Q1 FY27 results coverage (Kotak Neo, 7 Aug 2026): https://www.kotakneo.com/news/stocks/paras-defence-q1-fy-2026-27-results-net-profit-rises/ [V, WebFetch]
- No Q1 FY27 investor presentation or transcript appears in screener's document list. The Q1 figures are therefore screener plus press coverage.

### 4.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 254 | 365 | **477** (company: 476.57) | screener / AR [V] |
| Growth YoY | +14% | +44% | **+30.7%** | [E] |
| OP / EBITDA (ex OI) | 53 | 100 | 122 (company EBITDA: 120.46) | [V] |
| OP margin | 21% | 27% | **25.6%** (company: 25.3%) | [V] |
| Gross margin | n.a. | n.a. | Not in the fetched docs. The proxy (100 − material %) is not computed | — |
| PAT | 30 | 61 | **89** (company: 89.46; 19% margin) | [V] |
| ROCE / ROE | 10% / ~7% | 16% / ~11% | 17.2% / 12.4% | screener [V] |
| Borrowings | 66 | 24 | **27** (₹25.9 cr short-term) | screener schedule [V] |
| Cash + bank incl. FDs | 11 | 111 | **119.5** (₹25.4 cr cash + ₹94.1 cr other bank balances) | AR consolidated BS [V]; equals screener [V] |
| Net cash | −55 | 87 | **≈92** | [E] |
| CFO | −46 | 45 | 25 | screener [V] |
| Net worth | 445 | 640 | 725 | screener [V] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹1,292 |
| M-cap | ₹10,404 cr |
| P/E (TTM) | 112× |
| Book value / share | ₹90.0 → P/B 14.4× |
| EV | ≈ ₹10,312 cr → EV/EBITDA 84.5× FY26 OP, 79.3× TTM OP of ₹130 cr [E] |
| Dividend yield | 0.08% |
| 52-week range | ₹1,585 / ₹580 |

### 4.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 127.9 | 93.2 | +37.3% | 171.3 |
| EBITDA | 31.9 | 22.0 | +45.4% | 42.6 |
| EBITDA margin | 24.9% | 23.6% | +130 bp | 24.9% |
| PAT | 21.2 | 14.9 | +42.7% | 38.9 |

Sources: Kotak Neo [V]; screener 128 / 32 / 21 [V]; Q4 from May PPT [V].

Q1 order inflow was **not disclosed** in any fetched source. A pre-results sahi.com snippet claims ">₹1,000 cr order book at Jun-26" [unverified].

Q2 FY27 is not out. The trading window has been closed since a 19 Sep notice [V].

### 4.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹986 cr at 31 Mar 2026** (Mar-25: ₹928 cr) | AR FY26 / PPT chart [V] |
| Order-book mix | Optics and optronics 55%; defence engineering 35%; anti-drone 10% | AR / PPT [V] |
| OB cover | **2.1×** FY26 revenue | [E] |
| FY26 order inflow | **~₹535 cr** (986 − 928 + 477) | [E] |
| Book-to-bill FY26 | **1.12×** | [E] |
| Execution rate FY26 | **51%** (477 / 928) | [E] |
| Guidance FY27 and FY28 | Revenue **+30–40%** a year; "maintain or slightly better" profitability | May 2026 PPT [V] |
| Receivable days | **278** | screener [V] |
| Inventory days | 244 | screener [V] |
| Payable days | 88 | screener [V] |
| Cash conversion cycle | 435 days | screener [V] |
| Working-capital days | **273** | screener [V] |
| CFO / EBITDA | FY26 **20%** (25/122); 3-yr FY24–26 **9%** (24/275) | [E] from screener [V] |
| Customer advances | **₹105 cr** (FY25: ₹86 cr) | screener schedule [V] |
| Export share | **15.3%** of standalone turnover (FY26 BRSR). FX inflows ₹59.2 cr (FY25: ₹39.6 cr) | AR [V] |
| R&D | Amount not quantified in the AR. It "primarily comprises employee costs"; much of the R&D is DRDO-funded | AR [V]. Unverified % |
| Customer concentration | 3 customers each >10% = **₹244.8 cr = 51%** of consolidated revenue (FY25: ₹245.4 cr, 67%). Customers are mainly DRDO, BEL, ISRO, OFB/DPSUs, shipyards and BDL | AR note [V] |
| Promoter holding | **53.20%** (Jun-26; 58.94% in Sep-24). Fell after the QIP and after the Jun-25 quarter | screener [V] |
| Pledge | None reported on screener; the primer says none was disclosed for FY26 | [V screener absence] |
| Dilution | **QIP 8 Oct 2024: ₹135.18 cr** (12.94 lakh shares at ₹1,045 pre-split), fully used: ₹120 cr working capital + ₹11 cr GCP. ESOP 2024 is in place | AR FY26 [V] |

### 4.4 Segment / product mix (FY26 consolidated revenue) [V, AR]

| Segment | Share | What it covers |
|---|---|---|
| **Defence Engineering** | **46%** | Defence electronics, EMP protection, heavy engineering and flow-formed tubes |
| **Optics and Optronic Systems** | **42%** | Periscopes, space optics, EO/IR |
| **Subsidiaries** | **12%** | Anti-drone, drones, MechTech |

Group entities [V, PPT]:
- Paras Anti-Drone Technologies.
- Paras Aerospace (drones).
- Paras Heven Drones (hydrogen drones, JV with Heven Drones, Israel).
- MechTech Thermal.
- Paras Semiconductors (OSAT).
- Opel Technologies (SDR).
- Quantico (quantum communication).
- Paras Avionics.
- A Controp (Israel) JV for EO systems.

### 4.5 Capacity / plants

- Ambernath and Nerul (Navi Mumbai) plants [K, Paras DRHP 2021]. An Optical Systems Development Park is planned in Navi Mumbai (per the primer; site not re-verified).
- In **Jul 2026**, Paras Semiconductors signed an MoU with Madhya Pradesh DST for a greenfield **OSAT facility, investment ~₹6,200 cr**, with no timeline [V, Kotak Neo]. That is ~13× FY26 revenue, so funding is an open question [E].

### 4.6 Ownership (Jun-26) [V]

| Holder | Share |
|---|---|
| Promoters (Sharad Virji Shah, Munjal Sharad Shah and entities) | 53.20% |
| FII | 8.29% (up from 5.06% in Mar-26) |
| DII | 3.04% |
| Public | 35.46% |
| No. of shareholders | 3.36 lakh |

### 4.7 Key contracts and events (dated)

- **Oct 2024:** ₹135 cr QIP.
- **FY26:** 1:2 stock split.
- **FY26:** Elbit electro-optics order (~US$3.8 m).
- **FY26:** CERBAIR (France) counter-UAV export deal.

These are as described in the primer and Business Standard; the export orders were not re-fetched [K].

- **7 Aug 2026:** Q1 results. The board approves **sale of its entire 47.5% stake in associate Krasny Paras Defence Technologies** and a ₹1 final dividend (record date 28 Aug) [V, Kotak Neo].
- **28 Sep 2026:** DRDO order of **₹26.59 cr** for hyperspectral cameras/payloads [V, screener filing list title].
- **Sep 2026:** analyst meetings at the Motilal Oswal conference [V, filing list].

### 4.8 Story bullets

- **Scarce optics IP.** It is the only Asia-Pacific submarine-periscope maker, a key ISRO optics supplier, and makes hyperspectral payloads. Optics is now 55% of the order book [V/K].
- **Steady, not explosive.** Revenue grows ~30% with margins of 25–26%, and guidance of 30–40% for FY27–28 requires faster conversion of a ~2× order book [V].
- **Anti-drone after Op Sindoor.** Anti-drone is 10% of the book and is the obvious beneficiary of emergency-procurement (EP) rounds after May 2025. No specific EP order value was disclosed in the fetched docs [E].
- **OSAT optionality.** The ₹6,200 cr MoU is very large against a ₹725 cr net worth [V/E].

### 4.9 Risks

- Weak cash conversion: 9% over three years, 278 receivable days.
- Concentration: 51% from 3 customers.
- OSAT capital needs, with possible dilution.
- Valuation: 112× P/E, 85× EV/EBITDA.

---

## 5. Zen Technologies Ltd (NSE: ZENTEC · BSE: 533339)

Fetched 13 Oct 2026. Consolidated figures include these subsidiaries [V, AR FY26]:
- Applied Research International (ARI), now **100%** after the remaining 24% was bought in FY26.
- Vector Technics, 51%.
- TISA Aerospace, 76%, acquired in FY26.
- Unistring Tech Solutions, Anawave, ARI Labs, Zen Defence, Bhairav Robotics and others.

Sources:
- screener: https://www.screener.in/company/ZENTEC/consolidated/ [V]
- Q1 FY27 PPT (BSE): Pname=112d61fd-d4c8-4343-aef4-fc9961aee2b8 [V]
- Q1 FY27 transcript (28 Jul 2026): Pname=18f85d0f-0dc1-46fa-afab-316fab4fc70e [V]
- Q4 FY26 transcript (4 May 2026): Pname=48eebac2-93bf-420d-8b1a-57f4fbc44c32 [V]
- Q1 FY26 PPT: Pname=e10a2b2b-e08d-493e-a3c1-70e82a5eec7b [V]
- Annual Report FY26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/75a5280b-90c2-479f-aa9d-890f52712cf9.pdf [V]

### 5.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 440 | 974 | **688** (company: 687.7) | screener / Q4 transcript [V] |
| Growth YoY | +101% | +121% | **−29.4%** | [E] / [V] |
| OP / operational EBITDA (ex OI) | 181 | 382 | 245 (company "operational EBITDA": 247.2) | [V] |
| OP margin | 41% | 39% | **35.6%** (company: 35.95%) | [V] |
| Other income | 17 | 58 | **86**, mostly treasury income on the QIP cash. Reported EBITDA including OI is ~48% | screener [V] |
| PAT | 130 | 299 | **218** (company: 217.9; 31.7% margin) | [V] |
| ROCE / ROE | 46% / ~34% | 37% / ~27% | 16.2% / 10.7% (diluted by QIP cash) | screener [V] |
| Borrowings | 6 | 78 | **19** (₹15 cr lease) | screener schedule [V] |
| Cash + bank incl. FDs (company) | ~158 | n.a. | **₹1,308 cr at 31 Mar 2026**; **₹1,217 cr at 30 Jun 2026** | Q4 / Q1 transcripts [V] |
| Net cash | — | — | **≈ ₹1,289 cr** | [E] |
| CFO | 13 | 31 | **245** | screener [V] |
| Net worth | 448 | 1,701 | 1,889 | screener [V] |

**Screener undercounts cash here.** It shows only ₹355 cr of "cash equivalents": consolidated cash ₹78.9 cr + other bank balances ₹275.8 cr [V, AR]. The remaining deposits sit in "other financial assets", ₹697.6 cr current + ₹322.8 cr non-current [V, AR]. The primer's "~₹966 Cr net cash" is neither the screener figure nor the company figure.

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | ₹1,653 |
| M-cap | ₹14,916 cr |
| P/E (TTM, consolidated) | 82.1× (standalone: 108×) |
| Book value / share | ₹209 → P/B 7.9× |
| EV | ≈ ₹13,627 cr → EV/EBITDA 55.6× FY26 OP, 62.2× TTM OP of ₹219 cr [E] |
| Dividend yield | 0.06% |
| 52-week range | ₹2,044 / ₹1,223 |

### 5.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 141.6 | 158.2 | −10.5% | 178.1 |
| Operational EBITDA | 38.7 | 64.7 | −40% | 51.0 |
| Operational EBITDA margin | 27.3% | 40.9% (inflated by provision releases) | | 28.6% |
| EBITDA incl. OI | 57.9 (40.9%) | 86.5 | | 73.7 |
| PAT (after NCI) | 34.5 | 47.8 | −28% | 31.5 |
| Order inflow | **₹44.6 cr** | ₹64.3 cr | | ₹431 cr |

Sources: PPT / transcript [V]. Screener shows PAT of 32 including minority interest [V].

Quarter notes (transcript [V]):
- A fire at a subsidiary destroyed insured inventory. Excluding it, PAT would have been ~₹37 cr.
- Incremental R&D cost in the quarter was ₹4.25 cr.

Q2 FY27 is not out. The trading window has been closed since a 24 Sep notice [V].

### 5.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **₹1,336 cr at 31 Mar 2026** (standalone ₹1,222.6 cr). It was ₹848.5 cr at 1 Apr 2025 and **₹1,239 cr at 30 Jun 2026** (equipment ₹920.6 cr + AMC ₹318.4 cr; domestic ₹1,153.8 cr / export ₹85.3 cr) | Q4 transcript / PPTs [V] |
| Post-quarter order | **₹177.5 cr** MoD order in Jul 2026 for upgrade and integration of tank and crew gunnery simulators | Q1 PPT / transcript [V] |
| OB cover | **1.9×** FY26 revenue. Management says ~₹1,000 cr of the ₹1,336 cr converts in FY27; the AMC part is spread over the contract terms | [E] / Q4 transcript [V] |
| FY26 order inflow | **~₹1,175 cr** (1,336 − 848.5 + 687.7). Q4 alone was ₹431 cr. The FY26 inflow guidance had been ₹800 cr+ in H1 | [E] / [V] |
| Book-to-bill FY26 | **1.71×** (the "order-book collapse" of FY25 has reversed) | [E] |
| Execution rate FY26 | **81%** (687.7 / 848.5) | [E] |
| Guidance | **₹4,000 cr cumulative revenue in FY27 + FY28** (~₹2,000 cr of it from simulators); operational EBITDA margin "mid-30s" for FY27 (long-term ~35%; PAT ~25%); **FY27-end order book ~₹2,500 cr** | Q1 / Q4 transcripts [V] |
| Pipeline | ₹700–800 cr of large orders "in the pipeline". CMD: the government "almost placed ₹800 cr worth of anti-drone orders on us post-Op Sindoor" | Q1 transcript [V] |
| Receivable days | **119** on screener (company: 119 at FY26, 122 at Jun-26) | screener / transcripts [V] |
| Inventory days | **415** | screener [V] |
| Payable days | 109 | screener [V] |
| Cash conversion cycle | 425 days | screener [V] |
| Working-capital days | 543 on screener basis (inflated by deposits in current assets). Company figure: **196 days** at FY26, **257 days** at Jun-26 | screener / transcripts [V] |
| CFO / EBITDA | FY26 **100%** (245/245); 3-yr FY24–26 **36%** (289/808) | [E] from screener [V] |
| Customer advances | **₹60.4 cr** (FY25: ₹33.5 cr) | AR contract balances [V] |
| Export share | FY26 **11.4%** (overseas ₹78.7 cr of ₹687.7 cr); FY25 **37.3%** (₹363.5 cr, the large export year). Export OB ₹85 cr (6.9%) at Jun-26 | AR revenue disaggregation / PPT [V] |
| R&D | **₹36.9 cr = 8.7% of standalone sales** (capital + revenue, FY26) | AR [V] |
| Customer concentration | Consolidated: **3 customers = 56.9%** of FY26 revenue (FY25: one customer = 61.0%). Standalone: 3 customers = 74.4%. The main customer is MoD / Indian Army | AR [V] |
| Promoter holding | **48.51%** (Jun-26; 51.26% in Sep-24, before the QIP). No pledge on screener | screener [V] |
| Dilution | **QIP of ₹1,000 cr** in FY25. Screener shows FY25 financing inflow of ₹1,007 cr and reserves up from ₹440 cr to ₹1,692 cr [V]. AR timeline: "2025 – completes a Qualified Institutional Placement" [V]. Exact date and price [K: Dec 2024, ~₹1,610] are unverified. ESOP transfers continue (Sep–Oct 2026 filings) | |

### 5.4 Segment / product mix

Zen reports one segment. Its five capability lines are:
- Training solutions: live ranges, virtual and live simulation.
- Anti-drone systems.
- Force multipliers.
- Naval simulation (ARI): submarine navigation, bridge and DSRV.
- Marine and robotics: Bhairav, Vrishabh, Hyperstrike.

Air-force simulators are a new line, with the first R&D completed. Management's split of FY27–28 revenue is roughly 50 : 50 between simulators and the rest [V, PPT / transcript].

### 5.5 Capacity / plants

- Hyderabad campus [K].
- Vector Technics drone-propulsion capacity has been expanded to **~3 lakh units** [V, Q1 transcript].
- Government licence under the Arms Act received in FY26 [V, AR].

### 5.6 Ownership (Jun-26) [V]

| Holder | Share |
|---|---|
| Promoters (Ashok Atluri and family) | 48.51% |
| FII | 6.47% |
| DII | 10.42% |
| Public | 34.22% |
| Others | 0.39% |
| No. of shareholders | 2.91 lakh |

### 5.7 Key contracts and events (dated)

- **FY25:** QIP; record revenue of ₹974 cr, about 37% of it export; stakes taken in ARI (76%), Vector (51%) and Bhairav [V/K].
- **FY26:** remaining 24% of ARI bought; 76% of TISA Aerospace (loitering munitions) bought [V, AR].
- **FY26:** C-UAS described as "combat-proven during Operation Sindoor" [V, AR].
- **Q4 FY26:** ₹431 cr of inflow [V].
- **Jul 2026:** ₹177.5 cr tank and crew gunnery simulator upgrade order from MoD [V].
- **Q1 FY27:** launches of an AI-powered anti-drone system, the Hyperstrike interceptor drone and the Vrishabh UGV [V, PPT].

### 5.8 Story bullets

- **Order-book recovery is real; revenue recovery is not yet visible.** Book-to-bill was 1.7× in FY26, but Q1 FY27 revenue fell 10%. Hitting ₹4,000 cr over FY27–28 implies FY27 of ~₹1,600–1,800 cr, against a TTM of ₹671 cr [E].
- **Exports swung from 37% to 11%.** The FY25 export contract did not repeat, which is the main reason revenue fell 29% [V].
- **Biggest cash pile in the batch.** Net cash is about ₹1,290 cr, roughly 9% of m-cap, and other income is now ~25% of PBT. ROCE has fallen to 16% [V/E].
- **Op Sindoor:** the anti-drone line is the clearest emergency-procurement beneficiary among the five, at ~₹800 cr of orders by management's account [V].

### 5.9 Risks

- Concentration on a single buyer (MoD).
- Timing of tenders.
- Q1 margin of 27% against "mid-30s" guidance.
- Integration of many small acquisitions.
- The guidance gap: the book alone does not reach ₹4,000 cr.
- Valuation of 82× P/E on falling TTM profit.

---

## 6. Summary grid (₹ cr unless stated; FY26 = year to Mar-2026; prices as of 13 Oct 2026)

| Metric | Data Patterns | Astra Microwave | Apollo Micro | Paras Defence | Zen Tech |
|---|---|---|---|---|---|
| Basis | Standalone | Consolidated | Consolidated (incl. IDL) | Consolidated | Consolidated |
| FY26 revenue | 925 | 1,163 | 904 | 477 | 688 |
| Growth YoY | +30.6% | +10.7% | +61% (+36% organic) | +30.7% | −29.4% |
| EBITDA / OP (ex OI) | 374 | 334 | 219 | 122 | 245 |
| EBITDA margin | 40.4% | 28.7% | 24.2% | 25.6% | 35.6% |
| PAT | 271 | 193 | 107 | 89 | 218 |
| Cash incl. FDs (company) | 517 (Mar-26) | 253 | 156 | 119.5 | 1,308 |
| Borrowings | 5 | 288 | 543 | 27 | 19 |
| Net cash / (debt) | +512 | (35) | (387) | +92 | +1,289 |
| M-cap (13 Oct 2026) | 23,169 | 15,917 | 15,122 | 10,404 | 14,916 |
| P/E (TTM) | 85.7× | 84.2× | 125× | 112× | 82.1× |
| P/B | 13.4× | 12.1× | 11.1× | 14.4× | 7.9× |
| EV/EBITDA (FY26) | 60.6× | 47.8× | 70.8× | 84.5× | 55.6× |
| ROCE (screener) | 21.9% | 20.3% | 14.5% | 17.2% | 16.2% |
| Order book (date) | 926 (Mar-26); 2,654 incl. negotiated (Jul-26) | 2,141 (Mar-26); ~4,300 (Aug-26) | 1,432 (Mar-26); 1,704 (Aug-26) | 986 (Mar-26) | 1,336 (Mar-26); 1,239 (Jun-26) |
| OB cover (Mar-26 ÷ FY26 revenue) | 1.0× | 1.85× | 1.6× | 2.1× | 1.9× |
| FY26 inflow | 1,121 | ~1,345 [E] | n.a. | ~535 [E] | ~1,175 [E] |
| Book-to-bill | 1.21× | 1.16× | n.a. | 1.12× | 1.71× |
| Execution (revenue ÷ opening OB) | 127% | 59% | n.a. | 51% | 81% |
| NWC days (screener) | 357 | 267 | 256 | 273 | 543 (company: 196) |
| Receivable days | 287 | 216 | 194 | 278 | 119 |
| CFO / EBITDA, FY26 / 3-yr | 21% / 15% | 116% / 14% | −59% / −45% | 20% / 9% | 100% / 36% |
| Export share, FY26 | 6.7% | 11.9% | ~0% | 15.3% (standalone) | 11.4% |
| R&D % of revenue | ~4–5% [E] | 5.0% | ~8% | n.d. | 8.7% (standalone) |
| Top-customer concentration | top-3 = 55% | DRDO 28% + BEL/DPSU 23% | n.d. | top-3 = 51% | top-3 = 57% |
| Promoter % (latest) | 42.41% (Jun) | 6.54% (Sep) | 49.98% (Sep); 35.6% of it pledged | 53.20% (Jun) | 48.51% (Jun) |
| Q1 FY27 revenue YoY | +16.8% | −11.5% | +88% | +37.3% | −10.5% |
| Q1 FY27 EBITDA margin | 27.0% | 18.7% | 21.5% | 24.9% | 27.3% |
| FY27 revenue guidance | +20–25% | ~₹1,350 cr (+16%) | +40–45% | +30–40% | ₹4,000 cr cumulative FY27+28 |
| Q2 FY27 out? | No | No | No | No | No |

Basis note: OP and EBITDA are ex other income. EV uses the company cash figure where one is disclosed. "n.d." means not disclosed in the fetched documents.

**Cross-company read**
- Private-defence margins of 24–40% are well above PSU levels in the batch-1 pack.
- Working capital is much worse: receivables run 120–290 days, against roughly 45 for HAL.
- Only Zen and Astra converted EBITDA to cash in FY26, and the 3-yr CFO/EBITDA is ≤36% for all five.
- Op Sindoor and emergency procurement show up most clearly in Zen (~₹800 cr of anti-drone orders) and in pipeline commentary at Data Patterns (counter-drone), Astra (EM wall and anti-drone) and Paras (anti-drone 10% of the book).

---

## 7. PRIMER ISSUES

**Method.** For each primer I read the text extract of the cover strip, the "What's new" box and the opening sections, then grepped the full HTML text for key figures. Locations are given as the section names in each primer. "Correct" figures are from this pack and are [V] unless tagged otherwise.

**Checks across all five primers**
- **Banned phrases.** I checked the list ("think of", "priced for perfection", "no room for error", "no margin for error", "grow into the/its multiple", "a long way to fall", "call option on the future", "the bull owns", "the story will be written in", "both can be right", "both are true at once"). **None found** in any of the five.
- **"honest/honestly".** It appears exactly **once** in each primer, which is within the limit. In DP it is §11 ("The debate, honestly, …"), in Astra §07 ("The honest caveat about a policy tailwind") and in Apollo §05 ("The honest tension…"). In Paras it is in the §06 order-book text, and in Zen in the §07 concentration text.
- **Missing Q1 FY27.** None of the five primers mentions Q1 FY27 (Jun-26 quarter) results, although all were reported between 28 Jul and 8 Aug 2026.
- **Missing Op Sindoor.** None mentions **Operation Sindoor** (May 2025) or emergency procurement, which matters most for Zen and is relevant to Paras, DP and Astra.

### 7.1 Data Patterns (primers/data-patterns.html; "Last refreshed 13 Jul 2026")

1. **Cover strip "~₹23,900 Cr Market cap (Jul '26)"; §09 "~95× trailing P/E… ~14× book".** Now **₹23,169 cr, P/E 85.7×, P/B 13.4×** (screener, 13 Oct 2026).
2. **§00 snapshot: "a ~40% EBITDA margin and a ~40% net-profit margin".** **Wrong.** FY26 net margin is **29.3%** (PAT ₹271 cr on ₹925 cr). Only EBITDA is ~40% (40.1% company basis). Source: Q1 FY27 PPT.
3. **Cover strip and §06 "~₹2,062 Cr order pipeline (incl. negotiated)".** **Stale.** It is now **₹2,654 cr** including negotiated orders (end-Jul 2026). The firm book was ₹927.7 cr at 30 Jun 2026. Source: Q1 FY27 PPT and transcript.
4. **§06 "~₹53 Cr export order book".** Now **₹39 cr at 30 Jun 2026** (PPT). Also missing: FY26 **export revenue fell to ₹61.8 cr (6.7%) from ₹106.7 cr (15.1%)** (AR FY26 geography note).
5. **§09 revenue chart "FY24 ~566".** **Wrong.** FY24 revenue was **₹520 cr** (screener; company ₹519.8 cr).
6. **Missing event:** the **acquisition of 100% of ST Advanced Composites** (board approval Jul 2026, SPA signed 25 Aug 2026, ~₹10 cr). Source: BSE Reg-30 filing.
7. **Missing KPIs:**
   - FY26 order inflow of **₹1,121 cr (+216%)** and book-to-bill 1.21×. §09 asks for book-to-bill but gives none.
   - FY27 guidance of **~₹2,000 cr inflow** beyond negotiated orders.
   - Q1 FY27 inflow of ₹117 cr.
   - Top-3 customers are **55%** of revenue.
8. **§03 "funding the expansion from internal accruals and IPO proceeds".** This omits the **2023 QIP**. The AR says ₹37.65 cr of QIP money was still unspent at Mar-26.
9. **§03/§09 balance sheet: "~₹5 Cr borrowings against ~₹1,725 Cr reserves".** Reserves are not cash. The **company cash/FD/investments figure is ₹517 cr (Mar-26)**, and ₹466 cr per PPT (₹530 cr per concall) at Jun-26. The primer gives no cash figure.
10. **§03 ownership "FIIs ~12.5%, DIIs ~11.7% at March 2026".** Accurate for Mar-26, but the latest (Jun-26) is **FII 12.50%, DII 11.98%**; promoter unchanged at 42.41%.
11. **§10 "Net working-capital days approaching a full year".** Fine (357 days on screener). The primer could add the company's **cash conversion cycle of 365 days** and **3-yr CFO/EBITDA of ~15%**.

### 7.2 Astra Microwave (primers/astra-microwave.html; "Last refreshed 28 Jul 2026")

1. **Cover strip "~₹16,300 Cr Market cap (mid-2026)"; §00/§10 "near 90 times earnings".** Now **₹15,917 cr; P/E 84.2× consolidated (91.1× standalone); P/B 12.1×**.
2. **Cover strip, "What's new", §05: "~₹2,610 Cr order book (FY26 exit)", "~2.2× revenue".** This **does not match company disclosures**:
   - standalone **₹2,141 cr at 31 Mar 2026** (1.85×)
   - consolidated **₹2,849 cr at 30 Jun 2026**
   - **~₹4,300 cr as of 11 Aug 2026** after the Uttam order
   Source: Q1 FY27 PPT and transcript.
3. **Missing major event:** the **HAL Uttam AESA radar sub-systems order, ₹2,205 cr incl. GST (~₹1,870 cr ex-GST), end-Jul 2026**. It is the largest order in Astra's history and doubles the book.
4. **Missing:** **L1 in the AMCA radar prototype (AAAU) tender** (Aug 2026); the ₹45 cr BEL MMIC order; the EM-wall and anti-drone demonstrations (Jul 2026).
5. **Missing entirely: the Rafael JV.** **Astra Rafael Comsys (ARC)** is the SDR/EW JV with Rafael (Israel), with an OB of ₹836 cr (Aug-26) and FY27 sales guidance of ₹360–600 cr. It is also the channel for most "exports". Grep finds no "Rafael" anywhere in the primer.
6. **"What's new" / §08: "board approved a 1:1 demerger".** On 27 Feb 2026 the board gave only **in-principle** approval (NSE filing). A formal scheme on 10 Jun 2026 is reported by secondary sources (unverified). The share ratio is described by management as a "mirror shareholding", not formally confirmed in a fetched filing. Wording should say "in-principle approval; scheme subject to NCLT/shareholder approvals; listing targeted ~Q1 FY28".
7. **§03 balance sheet "effectively net-cash"; §11 "Fortress balance sheet — effectively net-cash".** **Wrong.** Borrowings are **₹288 cr** against cash and bank of ₹253 cr, so **net debt is ~₹35 cr** (FY25 net debt ₹326 cr). Interest cost was ₹56 cr in FY26.
8. **§05 "roughly half of it [OB] was defence and public-sector work".** The company's split is **~66–71% defence**, with space/met/hydro the rest (PPT pie 71.3% at Mar-26; 66% at Jun-26).
9. **Missing:**
   - FY27 guidance of **₹1,350 cr ± 25** and **₹1,600 cr ± 50 for FY28**.
   - The Q4 call's "15–20%" was later narrowed to ">15%".
   - FY27 inflow guidance of ₹1,600 cr excluding Uttam.
   - Customer mix: **DRDO 28%, BEL/DPSUs 23%, IMD 18%, exports 12%**.
   - R&D of **₹58 cr (5.0%)**.
   - FY26 CFO of +₹387 cr.
10. **Ownership.** Promoter "~6–7%" is fine (6.54% at Sep-26). The primer gives no FII/DII figures; Sep-26 is **FII 10.48% / DII 16.52%**.

### 7.3 Apollo Micro Systems (primers/apollo-micro-systems.html; "Last refreshed 28 Jul 2026")

1. **Cover strip "~₹15,000 Cr Market cap (mid-2026)"; §09 "well over 100× trailing earnings".** Now **₹15,122 cr; P/E 125×; P/B 11.1×; EV/EBITDA ~71×**. Broadly right, but it should be dated, and the pending preferential dilution should be flagged.
2. **"What's new" / §00: "PAT ₹113 Cr (roughly doubled)".** Screener and the company both give **₹107 cr** (+91%). The Q4 FY26 transcript says "increased by 91% to ₹107 crores".
3. **Missing major event: the Premier Explosives acquisition.** SPA dated **9 Jul 2026** for **41.33% of Premier Explosives Ltd for ~₹1,550 cr cash**, plus an **open offer for up to 26%** (~₹976 cr at ₹698). SEBI observations came on 21 Aug 2026; CCI clearance was reported for 22 Sep 2026 (unverified). Sources: Q1 FY27 transcript and PPT; Kotak Neo.
4. **Missing major event: the ~₹3,322 cr preferential issue** of shares and warrants at ₹416.60 (EGM 4 Aug 2026). Management confirms "around ₹3,300 cr", of which ₹2,500 cr is for the acquisition and ~₹500 cr for repaying working-capital debt. The primer mentions only "fresh shares listed in 2026". This roughly **+22% dilution** is the key per-share issue.
5. **Missing:**
   - **34% stake in Shauryastra Defence Systems** (led by Dr V. K. Saraswat, Aug 2026).
   - Navy **SAVIOR** Make-II sanction.
   - **IAF IPREC** development-agency selection.
   - SDD handover to the Navy.
6. **§03 ownership: promoter "~52–55%"; pledge "~30% of the promoter stake".** **Stale.** Promoter is **49.98% (Sep-26)**, and screener shows **35.6% of the promoter holding pledged**.
7. **§00 / §08 "net debt ~₹376 Cr (Mar 2026)".** Screener basis gives **₹387 cr** (543 − 156). Close, but the basis should be stated. It will flip to net cash once the preferential money is in, then be reduced again by the Premier payments.
8. **Missing:**
   - Updated order book of **₹1,704 cr consolidated (8 Aug 2026; IDL ₹480 cr)**.
   - Management target of **₹3,500–4,000 cr OB by FY27-end** on a single ₹2,500–3,000 cr order.
   - FY27 guidance of **+40–45% revenue**.
   - **Export revenue currently nil**.
9. **Missing cash-conversion data:** FY26 **CFO of −₹130 cr**; 3-yr CFO/EBITDA of −45%. §08 discusses working capital but gives no CFO number.

### 7.4 Paras Defence (primers/paras-defence.html; "Last refreshed 04 Aug 2026")

1. **Cover strip, "What's new", §00, §06, §11: "~₹1,432 Cr order book (FY26)"; "roughly three years of revenue".** **Wrong.** ₹1,432 cr is **Apollo Micro Systems'** Mar-26 order book. Paras' order book is **₹986 cr at 31 Mar 2026** (₹928 cr at Mar-25), which is **2.1×** revenue. Source: Paras AR FY26 and May 2026 investor presentation. This is the most serious error in the batch.
2. **§02/§06 "Optics… dominates the order book — roughly 60%".** The company split is **optics 55% / defence engineering 35% / anti-drone 10%** (AR FY26).
3. **Cover strip "~₹10,500 Cr Market cap (Aug 2026)"; §09 "~120×".** Now **₹10,404 cr; P/E 112×; P/B 14.4×**.
4. **Missing: the stock split.** The primer does not mention the **sub-division from FV ₹10 to ₹5 (1:2)** recorded in AR FY26. Per-share figures such as "book value ~₹90/share" are post-split and correct.
5. **Missing Q1 FY27:** revenue ₹127.9 cr (+37%), EBITDA ₹31.9 cr (24.9%), PAT ₹21.2 cr (+43%).
6. **Missing events:**
   - board decision (7 Aug 2026) to **sell the 47.5% stake in associate Krasny Paras**
   - **Paras Semiconductors' MoU for a ~₹6,200 cr OSAT plant in Madhya Pradesh** (Jul 2026)
   - **DRDO ₹26.59 cr hyperspectral order** (28 Sep 2026)
7. **Missing capital history:** the **Oct 2024 QIP of ₹135 cr**, which diluted the promoter from 58.9% to 57.1%. The promoter is now **53.20%** (Jun-26). The primer's "~53%" is fine.
8. **Missing KPIs:**
   - FY27–28 guidance of **+30–40% revenue a year** (May 2026 PPT)
   - top-3 customers **51%** of revenue
   - exports **15.3%** of standalone turnover
   - customer advances ₹105 cr
   - 3-yr CFO/EBITDA ~9%
9. **Cover strip omits the margin.** Fine, but "~19% net margin" in §08 is correct (89/477).

### 7.5 Zen Technologies (primers/zen-technologies.html; "Last refreshed 17 Jul 2026")

1. **§10 "market capitalisation around ₹16,356 Cr (mid-July 2026)… near 112× trailing earnings"; §00 "trades near 112× earnings".** Now **₹14,916 cr; P/E 82.1× consolidated** (108× is the standalone P/E); P/B 7.9×. The 112× figure appears to be a standalone or stale number.
2. **"What's new", §06, §09, §11: "~₹966 Cr net cash".** **Wrong under both bases.**
   - Company figure: cash and bank of **₹1,308 cr at 31 Mar 2026** and **₹1,217 cr at 30 Jun 2026**, debt-free (Q4 and Q1 transcripts).
   - Screener's cash line is only ₹355 cr, because most deposits sit in "other financial assets" (AR FY26).
3. **Missing Q1 FY27:**
   - revenue **₹141.6 cr (−10.5%)**
   - operational EBITDA margin **27.3%**
   - PAT ₹34.5 cr (−28%)
   - order inflow only **₹44.6 cr**
   - **OB down to ₹1,239 cr at 30 Jun 2026**
   - **₹177.5 cr** MoD tank-simulator order in Jul 2026
4. **Missing Op Sindoor:**
   - the AR describes C-UAS as "combat-proven during Operation Sindoor"
   - the CMD says ~₹800 cr of anti-drone orders came post-Sindoor
   - management targets a **~₹2,500 cr order book by FY27-end**
5. **§07 acquisitions list "ARI (~76%), Vector Technics (~51%), Bhairav Robotics (~45%)".** **Stale:**
   - ARI is now **100%** (remaining 24% bought in FY26)
   - **TISA Aerospace (76%, loitering munitions)** was acquired in FY26 and is missing
   Source: AR FY26 subsidiary list.
6. **Missing exports:** the primer does not quantify the export swing. Exports were **37% of FY25 revenue but 11% of FY26** (₹78.7 cr). This is the main driver of the −29% revenue year, which the primer attributes "purely" to order timing.
7. **Missing capital history:** the **₹1,000 cr QIP (FY25)**, which explains why ROCE fell from 46% to 16% and why other income (₹86 cr) is ~25% of PBT.
8. **Missing KPIs:**
   - FY26 inflow ~**₹1,175 cr**, book-to-bill **1.7×**. §05 asks for book-to-bill but gives none.
   - R&D of **8.7%** of standalone sales.
   - Top-3 customers **57%**.
   - FY26 CFO of ₹245 cr.
9. **Ownership.** Promoter ~48.5% is correct (48.51% at Jun-26). There is no FII/DII figure; Jun-26 is **FII 6.47% / DII 10.42%**.

---

## 8. Figures not fetched or verified (flagged)

- **Data Patterns:** customer-wise percentages for Q1 FY27 (the pie mapping is ambiguous); FY26 R&D spend (not disclosed; ~4–5% is my estimate); the Jun-26 cash conflict (₹466 cr in the PPT vs ₹530 cr on the call).
- **Astra:** the 10 Jun 2026 formal demerger scheme (secondary source only); the date and amount of the QIP (from memory, ₹300 cr in 2023).
- **Apollo:**
  - FY26 order inflow, book-to-bill and execution rate (Mar-25 order book on a like-for-like basis not found)
  - preferential-issue instrument split and allotment status
  - CCI approval date for Premier
  - month of IDL completion
  - customer concentration and gross margin
- **Paras:**
  - Q1 FY27 order book and inflow (no Q1 presentation or transcript in the filing list)
  - R&D spend
  - effective date of the stock split
  - Elbit and CERBAIR export-order values (from the primer and memory)
- **Zen:** QIP date and price (memory: Dec 2024, ~₹1,610 per share).
- **All five:** gross margin on a company basis is available only for Data Patterns (63.2%) and Astra (50.9% consolidated). For the other three it is not disclosed, and I did not compute the 100 − material % proxy.
