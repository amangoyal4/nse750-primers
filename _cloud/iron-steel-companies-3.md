# Iron & Steel: company packs, batch 3 (secondary / DRI-based long-steel producers)

Sub-sector: Iron & Steel || Iron & Steel. Prepared 2026-10-13 (Phase-1b company-pack subagent, batch 3 of 3).
Members: Godawari Power & Ispat (GPIL), Gallantt Ispat, Jayaswal Neco Industries, Jai Balaji Industries.

**Tags.** [V] = fetched and read this session (URL given). [K] = from memory, source named, not re-fetched. [E] = estimate or my own arithmetic (method stated). [S] = search-result snippet only, not fetched; treat as unverified.

**Common sources (all fetched 13-Oct-2026):**
- Screener pages, saved as HTML with curl and parsed with python: `https://www.screener.in/company/<NSE>/consolidated/` and `/company/<NSE>/`. Cash comes from screener's balance-sheet schedule API, `https://www.screener.in/api/company/<id>/schedules/?parent=Other%20Assets&section=balance-sheet` (with `&consolidated=` for consolidated). Only the "Cash Equivalents" line is used as cash; "Other Assets" is not cash.
- **Basis per company.** GPIL and Gallantt use **consolidated** pages. Jayaswal Neco's consolidated page is empty (no financials), so its **standalone** page is used. Jai Balaji's consolidated page is **stale**: its last quarter is Sep-2025 and its last balance sheet is Sep-2025, so its **standalone** page (current to Jun-2026) is used. Jai Balaji's consolidated P/E of 20.4× is therefore stale and should not be quoted.
- Screener "Operating Profit" = sales minus expenses, **before other income**, and is used as the screener EBITDA basis. Company "EBITDA" differs. Gallantt includes other income. Jai Balaji reports "Adjusted EBITDA" (adjusted for non-cash items). Each is labelled where used.
- All prices and m-caps are screener values as of the 13-Oct-2026 fetch. P/B = price ÷ screener book value per share. EV = m-cap + net debt (screener basis: borrowings minus "Cash Equivalents"), ignoring minorities.
- **Q2 FY27 (Sep-26 quarter): none of the four has reported as of 13-Oct-2026.**
  - Jayaswal Neco board meets **16-Oct-2026** [V BSE intimation dated 8-Oct, via screener announcements feed].
  - Gallantt board meets **19-Oct-2026** [V BSE notice dated 13-Oct-2026. The notice misprints the year as "2025"; it covers the quarter ended 30-Sep-2026].
  - GPIL and Jai Balaji: no Q2 board-meeting intimation in the screener/BSE feed on 13-Oct [V feed].
- Shareholding: the latest pattern on screener is **Jun-2026** for all four. The Sep-2026 pattern was not yet posted.

---

## 1. Godawari Power & Ispat Ltd: NSE GPIL · BSE 532734

Fetched 13-Oct-2026. Still listed; no merger or demerger.

**Corporate actions:**
- Face value is ₹1 after the earlier 1:5 split. The current price is ₹207.
- **Exit from associate Ardent Steel**: stake cut from 37.85% to 0% in Q1 FY27 [V Q1 FY27 PPT].
- **Preferential convertible warrants** [V BSE allotment letter, 8-Oct-2026, https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=63047b8c-b57b-4ed4-8d40-b2b68c413190.pdf]:
  - 2,04,08,220 warrants allotted on 14-Nov-2025 at **₹245** each (≈₹500 Cr), 25% paid up front.
  - 1.0 Cr of these went to promoter-group members (Sarita Devi Agrawal 41.6 lakh, Dinesh Agrawal 12.2 lakh, and others). The rest went to non-promoters, including Meridien Realtech (81.6 lakh).
  - The first conversion was 2.72 lakh shares by Shree Nakoda Pipe Impex on 8-Oct-2026.
  - **The stock (₹207) is now ~16% below the ₹245 warrant price.** That makes it uncertain whether the remaining ~2.01 Cr warrants (~₹370 Cr of balance money) will be exercised.

**Sources:**
- Screener consolidated: https://www.screener.in/company/GPIL/consolidated/ [V]
- Q1 FY27 investor presentation, 8-Aug-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=af1f6c6d-f0ca-4497-acdd-1517dd0dab80.pdf [V, pdftotext]
- Q1 FY27 concall transcript, 10-Aug-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=41084c33-3f4e-4766-ac9d-a561811111bf.pdf [V]
- Q4 FY26 concall transcript, May-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4a0924d1-0fcd-4ce4-908d-514561d8999a.pdf [V]

### 1a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue (screener) | 5,445 | 5,370 | **5,376** (+0.1% YoY) | [V] screener |
| Revenue (company "net sales") | 5,455 | 5,376 | **5,381** (flat) | [V] Q1 FY27 PPT historical table |
| Operating profit (screener EBITDA, before OI) | 1,328 | 1,194 | **1,263** | [V] screener |
| OPM (screener) | 24% | 22% | **23%** | [V] |
| Company EBITDA | 1,328 | 1,194 | **1,253** (23.3%) | [V] PPT |
| Other income | 129 | 109 | 72 | [V] screener |
| PAT | 936 | 813 | **802** (−1%) | [V] screener; company "attributable" 935/812/802 |
| ROCE (screener ratios table) | 29% | 23% | **21%** (top-ratio TTM 20.5%) | [V] |
| ROE (screener TTM) | n/a | n/a | **15.3%** | [V] |
| Borrowings | 52 | 311 | **443** (LT 238 + ST 189 per company) | [V] screener; PPT balance sheet |
| Cash equivalents | 870 | 696 | **1,145** | [V] screener schedule API; matches company 1,145 |
| Investments (non-current) | 222 | 471 | 391 | [V] screener |
| Net cash, screener basis (cash − borrowings) | +818 | +385 | **+702** | [E] |
| Net cash (company) | n/a | n/a | **₹837 Cr** (FY26) | [V] PPT "Net Cash (FY26)". Likely includes liquid investments. |
| CFO / FCF (screener) | 1,044 / 626 | 898 / 364 | **1,157 / 76** | [V]. FCF is low because capex was ~₹1,080 Cr. |

**Valuation, 13-Oct-2026** [V screener]:
- Price ₹207; m-cap **₹13,962 Cr**; 52-week high/low ₹320/204, so the stock is at its 52-week low.
- Stock P/E **17.0×** (TTM PAT ₹808 Cr).
- Book value ₹86.5, so **P/B 2.39×**. Dividend yield 0.48%.
- **EV/EBITDA** [E]: EV = 13,962 − 702 = ₹13,260 Cr. That is **10.5× FY26** screener operating profit (₹1,263 Cr) and **10.6× TTM** (₹1,251 Cr). On the company's ₹837 Cr net cash, EV is ₹13,125 Cr and EV/EBITDA is ~10.5×.

### 1b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | **1,750** (+32% YoY, +9% QoQ) | 1,610 | 1,323 | [V] screener and PPT |
| EBITDA (₹ Cr, company = screener OP) | **334** (+3% YoY, −24% QoQ) | 439 | 324 | [V] |
| EBITDA margin | **19.1%** | 27.3% | 24.5% | [V] PPT |
| PAT (₹ Cr) | **222** (+3% YoY, −21% QoQ) | 280 | 216 | [V] |
| Iron ore mined (t) | 5,37,832 (−16% YoY) | 6,73,452 | 6,42,243 | [V] PPT |
| Pellet production (t) | 9,03,900 (+34% YoY) | 9,11,350 | 6,73,750 | [V] |
| Pellet sales (t) / realisation (₹/t) | 6,33,103 / **10,340** | 6,99,172 / 9,830 | 4,66,575 / 9,828 | [V] |
| Billet production (t) / realisation | 1,14,780 / 44,369 | 1,23,230 / 42,596 | 1,03,470 / 41,682 | [V] |
| HB wire sales (t) / realisation | 25,836 / 48,479 | 24,391 / 47,829 | 25,164 / 48,075 | [V] |
| Ferro alloys sales (t) / realisation | 27,154 / 82,058 | 22,347 / 76,868 | 25,456 / 75,399 | [V] |
| EBITDA per tonne of pellet produced | ₹3,695 = 334 / 0.904 MT | ₹4,817 | ₹4,809 | [E] |

**Why margins fell QoQ** [V Q1 call]:
- Ari Dongri ore output dropped because of overburden-dump space limits, while tree-cutting permission for the newly allotted land was delayed. GPIL had to buy more ore on the market.
- Imported coal rose from ~₹10,500/t to ~₹13,000/t because of the West Asia crisis.
- Of the rise in raw-material cost, ~75% came from iron ore and ~25% from imported coal.

**Q2 FY27 outlook** [V Q1 call]:
- **One of the three pellet plants has been shut** for ~45 days (as of 10-Aug) because of gas-supply force majeure from GAIL, and August was also expected to be a shutdown month.
- Management said Q2 "will be dull in terms of pellet". Q2 coal costs stay high.
- The FY27 pellet guidance of 4.0 MT is likely to be cut ("slightly on the lower side").

### 1c. Steel KPIs

| KPI | Value | Basis / source |
|---|---|---|
| Iron-ore mining capacity | **6.7 MTPA**: Ari Dongri 6.0 (EC and CTO for 2.35→6.0 in Feb-2026) + Boria Tibu 0.7 | [V] PPT p.28–29 |
| Mining production | FY25 2.34 MT → **FY26 2.75 MT** (+18%); FY27 guide 3.4 MT | [V] PPT |
| Beneficiation | 3.3 MTPA at plant + 0.6 at mines. A 5.4 MTPA crushing and beneficiation plant (₹325 Cr) is due **Q3 FY27**, taking the total to 9.3 MTPA. | [V] PPT |
| Pellets | Capacity **4.7 MTPA** after a 74% expansion (+2 MTPA for ₹600 Cr, so **₹3,000 per tonne**). FY26 production 2.86 MT (+17%), sales 1.88 MT (+15%). Q1 FY27 utilisation 77%; FY27 target 85%. | [V] PPT; capex/t [E] |
| Sponge iron (DRI) | 0.65 MTPA; FY26 production 0.650 MT, ~100% utilisation | [V] |
| Billets (SMS) | 0.525 MTPA; FY26 production 0.477 MT (91%); billet sales 0.144 MT (−30%) | [V] |
| Rolled / long | Rolling mills 0.2 MTPA Siltara + 0.2 MTPA Urla. FY26 MS rounds 0.231 MT produced. HB wire 0.115 MTPA capacity, 0.10 MT produced. Rolled structural products 90 kt produced (+319%). | [V] |
| Galvanised fabrication | 0.11 MTPA; FY26 production 85 kt, sales 90 kt (+10%) | [V] |
| Ferro alloys | 91,500 TPA (16.5k Siltara + 60.5k HFAL + 14.5k AFAL). FY26 production 94.4 kt, sales 89.1 kt (−9%). | [V] |
| Captive power | Solar 190 MW, WHRB 48.9 MW (+6.91 MW commissioned in Q1 FY27), biomass 28.5 MW, wind 1.5 MW, about 269 MW in all. A 98 MW captive power plant at Siltara plus 20 MW HFAL and 8 MW AFAL overlap with these. FY26 generation 123 crore kWh. | [V] PPT |
| FY26 realisations (₹/t) | Pellet 9,724 (−3%); sponge 26,232 (−10%); billets 40,108 (−7%); MS rounds 43,163 (−5%); HB wire 45,937 (−3%); ferro 75,831 (+5%) | [V] |
| EBITDA/t FY26 (computed) | **₹4,387 per tonne of pellet produced** (1,253 / 2.856 MT). On billet output it is ₹26,257/t (1,253 / 0.477 MT), but that overstates steel margin because the pellet/mining block earns most of the EBITDA. Not company-reported. | [E] |
| Captive iron ore % | Company claims "100% captive iron ore security". In practice, FY26 mined 2.75 MT against 2.86 MT of pellets, so **~85–95% captive [E]**. Q1 FY27: 0.54 MT mined against 0.90 MT of pellets, **~60% [E]**. Management expects 25–30% market purchase in Q3, <10% from Q4, and **100% captive in FY28**. | [V] call; [E] ratio, assuming ~1.0–1.1 t ore per t pellet |
| Ore cost | Captive landed ore ~₹2,900/t vs market ~₹6,200/t (Q1 FY27 chart). Mining cost ₹3,000–3,500/t, targeted **< ₹2,700/t from FY28**. Every ₹100/t saved adds ~₹45–50 Cr EBITDA at 5–6 MT. Selling captive ore on the market would attract 150% extra royalty on lump and 250% on fines, so it is not done. | [V] PPT p.28; Q1 call |
| Coal | DRI runs on ~100% **imported** thermal coal [V Q4 FY26 call]. No coking-coal exposure (no blast furnace). | [V] |
| Capex | FY27 guidance **₹1,500–2,000 Cr** [V Q4 call]. Project table below. | [V] |
| Net debt / ND-EBITDA | **Net cash** ₹702 Cr (screener basis) or ₹837 Cr (company). ND/EBITDA is negative (~−0.6×). | [E]/[V] |
| Ratings | CRISIL **AA-/Stable / A1+**, reaffirmed in Q1 FY27 | [V] PPT |
| Decarbonisation / CBAM | Q1 FY27 emission intensity: **2.485 tCO₂/t steel** (WSA, fixed-carbon basis; GoI target 2.492) and **3.180 tCO₂/t** on the CBAM total-carbon basis, assessed by SGS. Fleet of 15 EV dumpers, 24 EV loaders and 15 EV excavators. 5 TPD carbon-capture pilot with IIT Bombay due by end-FY27. Net-zero target 2050. | [V] Q1 call |

**Project pipeline** [V Q1 FY27 PPT p.23, ₹ Cr]:

| Project | Capacity | Cost | Spent to Q1 FY27 | Due |
|---|---|---|---|---|
| Crushing & beneficiation | +5.4 MT | 325 | 218 | Q3 FY27 |
| Cold-rolling mill complex | 0.7 MT | 1,100 (debt ₹550 Cr) | 85 | **Dec-2027**; relocated to Sambhajinagar, Maharashtra |
| 25 MW solar | 25 MW | 75 | 72 | Done (May-26) |
| 100 MW solar | 100 MW | 320 | 204 | Sep-26 |
| 45 MWh BESS for solar | 45 MWh | 40 | 37 | Oct-26 |
| BESS manufacturing (Godawari New Energy) | **20 GWh** | **1,425** (debt:equity 1:1) | **501** | **Q1 FY28** |
| WHRB | 6.91 MW | 75 | 75 | Done |

- **The 1 MTPA integrated steel plant (blast-furnace route) and the 250 MW captive solar plant are "kept in abeyance"** because of approval delays and on-the-ground challenges [V PPT; call: "please consider steel plant as on hold as of now, for medium term"].
- Capex per tonne: the CRM costs ~₹15,700 per tonne of capacity [E: 1,100 / 0.7 MT].
- Vision 2030: revenue ~₹24,000 Cr (≈4×), EBITDA ~₹3,500 Cr, PAT ~₹2,500 Cr. Management says the steel-plant contribution has now been removed from these targets [V call].

### 1d. Segment mix (FY26, revenue estimate from volume × realisation) [E]
- Pellets ~₹1,830 Cr (~34%).
- Steel (sponge, billets, rounds, HB wire, structurals, galvanised) ~₹2,670 Cr (~50%).
- Ferro alloys ~₹680 Cr (~13%).
- Power, by-products and others make up the balance of ~3–4%.

Calculation: sum of FY26 sales volume × FY26 realisation per product, which reconciles to ₹5,170 Cr against reported ₹5,381 Cr. Most EBITDA comes from the captive-ore → pellet block.

### 1e. Ownership (Jun-2026) [V screener]
- Promoters **63.18%** (63.51% a year ago; diluted slightly by warrant and ESOP changes). FII 6.00%, DII 3.10%, public 27.72%.
- 1,50,509 shareholders.
- Promoters confirmed zero pledge in FY26 [S per primer, not re-checked].

### 1f. Story bullets
1. **Captive ore is the moat, but FY27 shows it is not automatic.** Mining output fell 16% YoY in Q1 because of dump-space and tree-cutting delays. Market ore at ~₹6,200/t against captive ~₹2,900/t cut the EBITDA margin from 27% to 19% QoQ. The FY28 target is 100% captive.
2. **Pellets now carry the volume growth.** 4.7 MTPA is installed, and the 5.4 MT beneficiation plant (Q3 FY27) is the fix for ore quality and cost. A gas outage has idled one pellet plant in Q2.
3. **Pivot from steel to energy storage.** The integrated steel plant has been shelved, while the 20 GWh BESS (₹1,425 Cr, cells from EVE Energy, Q1 FY28) and a 0.7 MT CRM in Maharashtra are the new growth legs. BESS is unproven for a steelmaker.
4. **Net-cash balance sheet with a valuation reset.** At a 52-week low, P/E 17× and EV/EBITDA ~10.5×, the stock trades below the ₹245 warrant price, which puts conversion of ~₹370 Cr of balance warrant money in doubt.

### 1g. Risks
- Further delay in ore ramp-up (forest clearances) keeps market-ore purchases high.
- Imported coal and gas prices (West Asia).
- Pellet price cycle: management sees ₹9,000–11,000/t, with downside risk from Simandou supply.
- BESS execution and technology risk, plus the shift to a 1:1 debt-funded project.
- Warrant non-conversion.
- Royalty and mining-levy changes on captive leases.

---

## 2. Gallantt Ispat Ltd: NSE GALLANTT · BSE 532726

Fetched 13-Oct-2026. Still listed.

**Corporate history and recent events:**
- Today's entity is the former Gallantt Metal Ltd. The old Gallantt Ispat and group entities were amalgamated into it under an NCLT order of 20-May-2022, and it was renamed Gallantt Ispat [K: per primer and SEBI/BSE scheme filings; not re-fetched].
- **Promoter reorganisation, Mar-2026**: a ~37% block moved into Gallantt Trust under a SEBI open-offer exemption [S per primer]. Group holding is unchanged at ~70% [V screener].
- On **13-Oct-2026 BSE sought a clarification on a significant rise in trading volume**, and the company replied the same day [V screener announcement feed; reply PDF not read].
- **Q2 FY27 board meeting: 19-Oct-2026** [V BSE notice].
- **Segment reporting:** the FY26 annual report says the company is "predominantly engaged in single reporting segment of Iron and Steel". The MD&A says it "has only one segment that is Steel & Power". The product-wise turnover table lists only sponge iron, billets and TMT/rounds. A real-estate venture (hotels and a mall, with land of ₹120.75 Cr) is mentioned, but **no wheat-flour/agro segment appears** in the FY26 annual report; flour is mentioned only in a director's bio [V FY26 AR, https://www.bseindia.com/xml-data/corpfiling/AttachHis/e5793d34-3caa-419a-ad22-ed3de995529f.pdf].

**Sources:**
- Screener consolidated: https://www.screener.in/company/GALLANTT/consolidated/ [V]
- Q1 FY27 investor presentation (revised), 29-Jul-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=91e01191-1077-49cb-aee5-11a7f81fd7b3.pdf [V]
- Q1 FY27 concall transcript, call held 28-Jul-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=69501bcc-42b9-46c4-adeb-97b03a5b8da1.pdf [V]
- Q2 board notice, 13-Oct-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b3afa479-65ce-49f2-9f4a-97910dd22d80.pdf [V]

### 2a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 4,227 | 4,293 | **4,419** (+2.9% YoY) | [V] screener; company ₹4,418.9 Cr |
| Operating profit (screener, before OI) | 448 | 694 | **717** | [V] screener |
| OPM | 11% | 16% | **16.2%** | [V] |
| Company EBITDA (includes other income) | n/a | 710 | **776.0** (17.6%, +9.3%) | [V] Q1 PPT. 776 ≈ 717 OP + 59 OI. |
| Other income | 7 | 16 | 59 | [V] |
| PAT | 225 | 401 | **484** (+20.8%) | [V] screener; company ₹484.3 Cr |
| ROCE | 12% | 19% | **18%** (TTM 18.2%) | [V] |
| ROE (TTM) | n/a | n/a | **15.6%** | [V] |
| Borrowings | 462 | 378 | **548** | [V] screener |
| Cash & bank | 12 | 258 | **503** | [V] screener schedule. The FY26 AR shows cash and bank balances of ₹503.1 Cr (₹50,310.60 lakh). |
| Net debt, screener basis | 450 | 120 | **45** | [E] |
| Net debt (company view) | n/a | n/a | "net cash surplus company with **no term loans**" | [V] Q1 call. The ₹548 Cr of borrowings is working-capital/short-term. |
| CFO / FCF | 344 / 151 | 579 / 337 | **602 / 364** | [V] |

**Valuation, 13-Oct-2026** [V screener]:
- Price ₹588; m-cap **₹14,060 Cr**; 52-week high/low ₹948/471.
- P/E **32.3×**. Book value ₹137, so **P/B 4.29×**. Dividend yield 0.34% (₹2/share final dividend approved at the 30-Sep AGM).
- **EV/EBITDA** [E]: EV = ₹14,105 Cr. That is **19.7× FY26** screener OP (₹717 Cr), **21.5× TTM** OP (₹655 Cr), and **18.2× FY26** company EBITDA (₹776 Cr).

### 2b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | **1,146** (+1.6% YoY, −4.9% QoQ) | 1,205 | 1,128 | [V] screener and PPT |
| Screener OP (₹ Cr) / OPM | 185 / 16% | 184 / 15% | 247 / 22% | [V] |
| Company EBITDA (₹ Cr) / margin | **203.4 / 17.8%** | 209 / 17.3% | 254 / 22.5% | [V] PPT |
| PAT (₹ Cr) | **124** (−29% YoY, +0.7% QoQ) | 123 | 174 | [V] |
| EBITDA/t (company, on billet production) | **₹8,787** | ₹8,882 | ₹11,068 | [V] PPT. Basis check: 203.4 Cr / 231.4 kt billets = ₹8,790/t. |
| Production (kt): pellet / DRI / billets / TMT | 112.3 / 236.4 / 231.4 / 196.2 | 221.6 / 244.5 / 235.2 / 210.2 | 174.5 / 231.5 / 229.1 / 196.5 | [V] |
| Sales (kt): TMT / billets / DRI | **191.8** / 26.7 / 12.3 | 207.5 / 19.3 / 35.6 | 189.1 / 23.7 / 21.8 | [V] |
| Blended realisation [E] | ~₹49,650/t (1,146 Cr / 230.8 kt of steel + DRI sold) | ~₹44,650/t (incl. 7.5 kt pellets) | ~₹48,100/t | [E] |
| Capex in quarter | ₹137 Cr; ₹775 Cr cumulative under the ₹3,000 Cr programme | n/a | n/a | [V] PPT |

**EBITDA/t bridge, Q1 FY26 → Q1 FY27** [V PPT]: ₹11,068, then volume +₹777, NSR −₹2,269, raw material −₹311, power and fuel −₹405, fixed costs −₹73, giving ₹8,787. Raw-material cost rose 9% YoY.

**Why** [V call]:
- Higher coal prices and freight (Middle East conflict).
- A planned **annual shutdown of the pellet plant** forced open-market iron-ore purchases.
- Kutch rolling-mill utilisation was only **~66%**, against 93% at Gorakhpur.
- Management: "Q2 FY27 is definitely going to be muted because it's a full monsoon time." It also noted that India briefly became a net steel importer despite the safeguard duty, and that industry has sought anti-dumping action.

### 2c. Steel KPIs

| KPI | Value | Basis / source |
|---|---|---|
| Finished-steel capacity | **9.93 lakh t** (≈1.0 MTPA): Gorakhpur (UP) 6 lakh, Kutch (Gujarat) 4 lakh. Target **12.29 lakh t (+23%) in H2 FY27**. | [V] PPT p."Geographical presence" |
| Pellets | 7.92 lakh TPA (Gorakhpur). FY26 production 818.9 kt (+36.7%), so ~103% of nameplate. | [V] |
| DRI | FY26 production **914.8 kt** (+21%): Gorakhpur 577.6, Kutch 337.1. Nameplate not stated in the PPT; production implies ≥0.9 MTPA. | [V] |
| Billets (SMS) | FY26 production 883.4 kt (+3.4%), ~89% of steel capacity | [V]; utilisation [E] |
| TMT (rolling) | FY26 production 787.6 kt (+3.0%), ~79% utilisation. **FY26 TMT sales 765.8 kt (+1.6%)**: Gorakhpur 472.5, Kutch 293.3. | [V]; [E] |
| Captive power | **129 MW** thermal and WHRB (51 MW + 78 MW sites per the PPT map), target **160 MW**. WHRB is ~45% of generation. FY26 generation 854 MU (+6%). Solar 7 MW → **85 MW** (18 MW Gujarat in Q2 FY27, 60 MW Gorakhpur in Q4 FY27; ₹300 Cr). | [V] PPT and call |
| Iron-ore mines (new) | Three blocks won as preferred bidder in 2024–25: **Todpura, Rajasthan** (260 ha, ~85 MT) and **Sonbhadra, UP** (two blocks, 431 ha, ~51 MT). Planned mining capacity **7.0 MTPA**, with a beneficiation plant (UP) and a beneficiation-cum-pellet plant (Rajasthan). Production from **FY28**. Capex ~₹1,500 Cr. Guided EBITDA uplift **~₹2,000/t**. | [V] PPT; Q1 call |
| Captive iron ore today | **0%.** Ore is bought from OMC (Odisha), MP concentrate suppliers and Lloyds Metals. | [V] call |
| Coal | Gorakhpur power plant: 100% CIL linkage. Gorakhpur DRI: 60–70% Indian coal, the rest South African imports (Itochu and others); 50% of process coal on linkage. Kutch: Indonesian coal blended with local lignite. No coking coal. | [V] call |
| EBITDA/t FY26 | **₹8,785** (company, on 883.4 kt billet production) ⇒ 776 / 0.8834. On screener OP: ₹8,116/t (717 / 0.8834). Per tonne of TMT sold: ₹10,133 (776 / 0.766). | [V]/[E] |
| Realisation FY26 [E] | ~₹43,300/t blended (4,419 Cr / 1,021 kt of TMT + billet + DRI + pellet sold) | [E] |
| Utilisation ("operating efficiency") | FY23 72.5%, FY24 83.0%, FY25 89.3%, **FY26 85.7%** | [V] PPT |
| Capex plan | **₹3,000 Cr** over 2–3 years: ~₹1,500 Cr mines and beneficiation, ~₹1,200 Cr steelmaking (1.0→1.23 MT), ₹300 Cr solar. ₹775 Cr spent to Jun-26. All from internal accruals; no term loan planned. | [V] PPT and call |
| Capex per tonne | Steelmaking ₹1,200 Cr / 0.236 MT added ≈ **₹50,800 per tonne** (includes balancing facilities) | [E] |
| Net debt / ND-EBITDA | ₹45 Cr / **0.06×** (screener basis); company says net-cash, no term loans | [E]/[V] |
| Ratings | India Ratings **IND AA-/Stable** | [V] PPT |
| Decarbonisation | **2.5 tCO₂e/t**, against an industry norm above 3. 60 MW of thermal power from WHRB. Zero liquid discharge. 85 MW solar under way. | [V] PPT ESG slide |

### 2d. Segment mix
- Effectively a single segment, Iron & Steel (see the annual-report note above).
- FY26 product mix by volume: TMT 766 kt sold, billets 81 kt, DRI 125 kt, pellets 49 kt. TMT is ~75–80% of revenue [E: 766 kt × ~₹45k/t ≈ ₹3,450 Cr ≈ 78%].
- About 80% of sales go through 3,000+ dealers and 34 distributors.
- Claims a **25% share of its serviceable market** in UP and is the largest rebar maker in UP. Brand ambassador Ajay Devgn supports a 2–3% premium over unbranded rebar [V PPT].

### 2e. Ownership (Jun-2026) [V screener]
- Promoters **70.03%** (up from 68.93% a year ago). FII 0.02%, DII 0.08%, public 29.85%.
- 29,986 shareholders, up from 21,181 in Mar-26.
- Free float is thin and institutional ownership is negligible.

### 2f. Story bullets
1. **Moving from secondary to "quasi-primary" producer.** Three captive iron-ore blocks (~136 MT of resources, 7 MTPA planned) are due in FY28. They should lift EBITDA/t by ~₹2,000 from today's ~₹8,800, a ~23% uplift.
2. **Modest volume growth now.** Steel capacity rises 23% to 1.23 MT in H2 FY27. FY26 TMT sales grew only 1.6%, and Kutch rolling runs at ~66%.
3. **Self-funded.** ₹3,000 Cr of capex is to be funded from accruals. CFO was ₹602 Cr in FY26; with ~₹2,200 Cr of the programme still to spend, borrowings may need to rise in FY28 [E].
4. **Valuation is the richest in this batch**: P/E 32×, P/B 4.3×, EV/EBITDA ~20×, for a buyer of ore and coal whose Q1 PAT fell 29% YoY. The mine story is in the price before any ore has been mined.

### 2g. Risks
- Mine development and clearance delays (FY28 target).
- Coal and ore price spikes while 0% captive.
- Regional rebar price competition, and imports that bypass the safeguard via FTA routes.
- Monsoon seasonality.
- Promoter/related-party complexity: the Gallantt Trust reorganisation and a real-estate RPT with GLDPL.
- The unusual volume spike that drew the 13-Oct BSE query.
