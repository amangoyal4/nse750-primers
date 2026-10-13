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

---

## 3. Jayaswal Neco Industries Ltd: NSE JAYNECOIND · BSE 522285

Fetched 13-Oct-2026. Still listed.

**What it is:**
- An integrated **blast-furnace** alloy/special-steel plant at Siltara, Raipur (Chhattisgarh), plus iron and steel castings foundries in Nagpur. The company describes itself as "amongst the largest alloy steel (special steel) manufacturers in India" [V Q1 FY27 press release].
- The founder, Basant Lall Shaw, has retired and is now Chairman Emeritus. Arvind Jayaswal is Chairman and Ramesh Jayaswal is MD [V press release].
- **Debt history:** a long CDR/restructuring was exited by refinancing outstanding debt through NCDs (2022–23). A second NCD refinancing at "significantly lower costs" followed in 2025, and the company says it "successfully completed exit from debt restructuring" [V press release timeline].
- **Q2 FY27 board meeting: 16-Oct-2026** [V BSE intimation dated 8-Oct].
- A Reg 29(2) SAST disclosure was filed on 6-Oct-2026 (not read).

**Sources:**
- Screener standalone: https://www.screener.in/company/JAYNECOIND/ [V]. The consolidated page has no financial data.
- Q1 FY27 press release / presentation, 17-Jul-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=766eee23-c01f-4934-b063-a6dbb4fac3f4.pdf [V, pdftotext]
- FY26 press release, 24-Apr-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f6214415-f214-48ca-a694-60e434a42ea9.pdf [V]
- Pellet-plant financial-closure letter, 1-Oct-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9870f240-0052-4f1f-8fbb-9df87087eb04.pdf [V]
- No concall transcript was found on the screener feed.

### 3a. Standardised financials (standalone, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue (screener) | 5,887 | 5,954 | **7,085** (+19.0%) | [V] screener |
| Net sales (company) | 5,934 | 6,000 | **7,132** (+18.9%) | [V] press release |
| Operating profit (screener) | 1,028 | 941 | **1,329** | [V] |
| OPM (screener) | 17% | 16% | **19%** | [V] |
| EBITDA (company) | 1,045 | 952 | **1,341** (18.8%, +40.8%) | [V] press release |
| Finance cost | 470 | 564 | **427** (company 426, −24%) | [V] |
| PAT | 210 | 113 | **463** (+311%) | [V] |
| ROCE | 14% | 13% | **21%** (TTM 20.7%) | [V] |
| ROE (TTM) | n/a | n/a | **18.0%** | [V] |
| Borrowings (screener) | 3,214 | 2,735 | **2,109** | [V] |
| Secured debt outstanding (company, gross) | n/a | 2,721 | **2,118**; **₹1,884 Cr at 30-Jun-26** (NCDs ₹1,440.86 Cr + fund-based WC ₹443.18 Cr); ₹1,844 Cr on 17-Jul-26 | [V] press release |
| Secured net debt, post Ind-AS (company) | 3,198 | 2,697 | **2,077** | [V] press release chart (FY22 3,816; FY23 3,393) |
| Cash equivalents (screener schedule) | 140 | 191 | 267 | [V]. The company reports "Cash and bank balances" of 156 (FY25) and **126** (FY26), so screener includes other bank balances. |
| Net debt, screener basis | 3,074 | 2,544 | **1,842** | [E] |
| Net debt / EBITDA | 2.99× | 2.70× | **1.39×** (screener basis). Company ratio: secured debt / EBITDA **1.55×** (FY26) vs 2.83× (FY25). | [E]/[V] |
| CFO / FCF | 681 / 499 | 1,388 / 1,144 | **1,367 / 1,251** | [V]. FCF went to debt repayment: CFF −1,284. |

**Valuation, 13-Oct-2026** [V screener standalone]:
- Price ₹95.9; m-cap **₹9,325 Cr**; 52-week high/low ₹117/64.4.
- P/E **16.3×** (TTM PAT ₹564 Cr). Book value ₹29.3, so **P/B 3.27×**. No dividend.
- **EV/EBITDA** [E]: EV = 9,325 + 1,842 = ₹11,167 Cr. That is **8.4× FY26** screener OP, **8.3×** company EBITDA, and **7.9× TTM** OP (₹1,409 Cr).

### 3b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Net sales (₹ Cr) | **2,107** (+27.7% YoY, +6.7% QoQ) | 1,974 | 1,649 | [V] press release and screener |
| EBITDA (company) / margin | **407.4 / 19.3%** | 380.2 / 19.3% | 319.4 / 19.4% | [V] |
| Screener OP | 396 | 376 | 315 | [V] |
| Finance cost | **66** | 69 | 119 | [V]. Run-rate ~₹264 Cr/yr [E], against ₹564 Cr in FY25. |
| PAT (₹ Cr) | **194** (+109% YoY, +2% QoQ) | 191 | 93 | [V] |
| Hot-metal production (t) | 2,24,132 | 2,28,979 | 2,11,309 | [V] |
| Billets (SMS) production | 1,94,443 | 1,93,429 | 1,79,482 | [V] |
| Rolled products: production / sales | 1,82,415 / **1,81,419** (+11% YoY) | 1,90,721 / 2,01,105 | 1,66,584 / 1,63,144 | [V] |
| Pig iron sales | 57,452 | 41,139 | 29,744 | [V] |
| DRI: production / sales | 71,598 / 43,495 | 65,200 / 41,386 | 78,501 / 55,653 | [V] |
| Pellets: production / sales | 3,53,997 / 2,51,823 | 3,08,449 / 2,12,037 | 3,47,940 / 2,06,363 | [V] |
| Castings: production / sales | 11,041 / 11,168 | 13,024 / 13,325 | 11,917 / 12,381 | [V] |
| Iron-ore mining (Metabodeli + Chhotedongar) | 2,56,536 + 7,23,195 = **0.98 MT** | 1.08 MT | 1.10 MT | [V] |
| EBITDA/t (computed) | **₹22,456 per tonne of rolled product sold** (407.4 / 0.1814); **₹13,780 per tonne of iron units** (hot metal + DRI 0.2957 MT) | ₹18,907 rolled / ₹12,950 iron | ₹19,580 / ₹11,000 | [E] |
| Debt | Principal cash sweep of ₹160 Cr in Q1 FY27 | n/a | n/a | [V] |

### 3c. Steel KPIs

| KPI | Value | Basis / source |
|---|---|---|
| Iron-ore mining capacity | **7.0 MTPA**: Metabodeli (Kanker) 1.0 + **Chhotedongar (Narayanpur) 6.0**, enhanced from 2.95 MTPA in 2026. Small titaniferous-ore mines: Dhobitola 7,500 TPA and Manegaon 20,000 TPA. Manpur limestone mine (3.42 MT reserves). | [V] press release "Our Journey" and capacity slides |
| FY26 ore mined | **~3.72 MT** (Metabodeli ~1.00, Chhotedongar ~2.72) | [E] sum of the four quarterly figures in the Q1 FY27 PR |
| Captive iron-ore share | **100%** of iron-ore requirement met from captive mines (since 2023), with a captive beneficiation plant; ~30 years of reserves | [V] |
| Blast furnace (pig iron / hot metal) | **1.00 MTPA**, enhanced from 0.75 MTPA in 2026 after the 2024 capital repair. Hot metal now >2,700 TPD (was 1,850). FY26 hot metal 0.858 MT (+50%; FY25 had a May–Aug 2024 shutdown). | [V] |
| Sinter / coke oven | Sinter 0.4 + 0.4 MTPA; coke oven 0.1 + 0.1 MTPA (FY26 coke 186 kt) | [V] |
| DRI | 0.35 MTPA (350 + 500 TPD kilns, raised from 0.27). FY26 production 301 kt (86%). | [V] |
| Pellets | 1.5 MTPA (~90% utilisation; FY26 production 1.37 MT, sales 0.85 MT). **New 1.5 MTPA straight-grate pellet plant with 2.0 MTPA wet grinding: ₹720 Cr** (term debt ₹540 Cr plus equity/accruals ₹180 Cr). **Financial closure 1-Oct-2026.** 24-month build from first drawdown, so ~FY29 [E]. Capex ≈ **₹4,800 per tonne** of pellet capacity [E]. | [V] letter |
| SMS (billets) | SMS-I 0.33 + SMS-II 0.65 = 0.98 MTPA long, plus a 0.30 MTPA flat-product SMS and rolling mill. FY26 SMS output 742 kt (~76% of long SMS). | [V]; [E] utilisation |
| Rolling (long, alloy) | Light bar mill 0.13, wire-rod mill 0.28, heavy bar mill 0.55 = 0.96 MTPA; bright-bar 0.04 MTPA. FY26 rolled output 707 kt (+35%), **rolled sales 688 kt (+33%)**, bright bar 29.7 kt. | [V] |
| Castings | **0.075 MTPA** across four divisions: Centricast 0.02, Automotive 0.02, Engineering 0.02, Construction 0.015. FY26 production 49.2 kt, sales 48.8 kt. | [V] |
| Captive power | **62 MW** (DRI WHRB/AFBC 15 + 12, BF gas 15.5, coke-oven WHRB 12), plus a 7.5 MW plant on lease. Will procure **104 MWac of group-captive solar** (₹40.97 Cr equity in SPVs; definitive documents in process). | [V] |
| Coal | **No captive coal.** The coal blocks were lost in the 2014 Supreme Court de-allocation [K: SC judgment Manohar Lal Sharma v. Principal Secretary, 2014; per primer]. Coking coal for the BF and coke ovens and thermal coal for DRI are bought, imported coking coal included. Hence a direct coking-coal exposure, unusual for this batch. | [V] press release ("integrated from captive iron ore mines"); [K] |
| FY26 sales volumes | Pellets 853 kt (−6%), pig iron 146 kt (+81%), DRI 204 kt (+4%), billets 6 kt, rolled 688 kt (+33%), bright bar 29.7 kt (+9%) | [V] |
| Realisation | Not disclosed by product | n/a |
| EBITDA/t FY26 (computed) | **₹19,490 per tonne of rolled product sold** (1,341 / 0.688 MT; includes pellet, pig-iron and castings EBITDA). **₹11,570 per tonne of iron units** (hot metal + DRI 1.159 MT). | [E] |
| Net debt / ND-EBITDA | ₹1,842 Cr / 1.39× (screener). Company secured debt was ₹1,884 Cr at Jun-26, against TTM EBITDA of ~₹1,429 Cr, so ~1.3× [E]. | [V]/[E] |
| Ratings | India Ratings rating update dated 5-Feb-2026 (not fetched). Mid-term goal: "improvement in external credit rating". | [V] screener feed; press release |
| Decarbonisation | Entered the CCTS (carbon-credit trading) system after BEE PAT cycle 7. Solar procurement under way. BF-route steel has a high carbon intensity; no tCO₂/t figure is disclosed in the PR. ~6.5 lakh trees planted. | [V] press release ESG slide |

### 3d. Segment mix
- Two segments: Steel Plant Division (Raipur) and Castings (Nagpur and around).
- Castings are ~49 kt a year, against ~1.0 MT of steel and iron sales. **Castings are a small part of revenue** [E: likely <10%; the segment split was not fetched].
- Steel end-markets: auto and auto-components (approved Tier-2 to all major OEMs; foundries Tier-1), engineering, defence and railways. Product uses include axles, springs, bearings and gears.
- This is **special/alloy long steel, not construction TMT.**

### 3e. Ownership (Jun-2026) [V screener]
- Promoters **55.15%** (unchanged since Mar-25). FII 1.32% (0.04% a year ago), DII 0.78%, public 42.75%.
- 98,451 shareholders (doubled in Sep-25).

### 3f. Story bullets
1. **Deleveraging drives the earnings.** Secured debt fell from ₹2,721 Cr (FY25) to ₹1,884 Cr (Jun-26), with ₹160 Cr cash-swept in Q1. Quarterly interest is ₹66 Cr, against ~₹140 Cr in FY25. PAT went from ₹113 Cr (FY25) to ₹463 Cr (FY26) to a ₹776 Cr run-rate (Q1 × 4) [E].
2. **The only blast-furnace player in this batch, with 100% captive ore**: 7 MTPA of mines and ~3.7 MT mined in FY26. The BF was upgraded to 1.0 MTPA. It has coking-coal exposure, unlike the DRI peers.
3. **Growth capex restarts.** A 1.5 MTPA pellet plant (₹720 Cr, mostly debt) reached financial closure on 1-Oct-2026 and will monetise surplus captive ore. "Entire infrastructure available to double the steel capacity" [V PR].
4. **Cheapest of the batch** on EV/EBITDA (~8×) and P/E (16×). P/B is 3.3× on a still-thin, restructuring-scarred equity base.

### 3g. Risks
- Coking-coal and coke price spikes; the coal is imported.
- Auto-cycle demand for alloy steel.
- New debt for the pellet plant (₹540 Cr) re-levers the balance sheet.
- Chhattisgarh mining-levy and royalty changes.
- Concentration in one integrated site.
- Legacy-promoter governance perception.

---

## 4. Jai Balaji Industries Ltd: NSE JAIBALAJI · BSE 532976

Fetched 13-Oct-2026. Still listed.

**What it is:**
- An integrated secondary producer: DRI, a mini blast furnace, sinter, coke oven, SMS, TMT, DI pipes and ferro alloys.
- Five units: Units I–IV at Durgapur/Burdwan (West Bengal) and Unit V at Rasmada, Durg (Chhattisgarh).
- Face value is ₹2 after the 1:5 split. 91.23 Cr shares.
- **Screener's consolidated page is stale** (last data Sep-2025), so the **standalone** page is used throughout.
- **Rating downgrade: CRISIL cut the rating to BBB/Stable / A3+ (from BBB+/Stable / A2) on 21-Sep-2026.** Reasons cited: FY26 operating margin fell to 6.1% from 13.7–14.6%; DI-pipe utilisation fell to ~30% from 80% in FY25; and reliance on short-term debt rose to fund working capital and capex [V CRISIL rationale, https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/JaiBalajiIndustriesLimited_September%2021_%202026_RR_405521.html].

**Sources:**
- Screener standalone: https://www.screener.in/company/JAIBALAJI/ [V]
- Q1 FY27 investor presentation, 14-Aug-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5864a9d9-769c-4ce1-b395-8a53cd57b224.pdf [V]. Chart values were read from PDF bounding boxes and mapped to quarters by x-position, then cross-checked against the revenue split given on the call.
- Q1 FY27 concall transcript, call held 14-Aug-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=00118780-0114-4643-9e28-6863a2f520e1.pdf [V]
- The Q4 FY26 presentation and transcript were **not fetched**: they are not linked on screener and the BSE API returned non-JSON. FY26 volumes below are therefore summed from the Q1 FY27 PPT quarterly charts [E].

### 4a. Standardised financials (standalone, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 6,414 | 6,351 | **5,784** (−8.9% YoY) | [V] screener; CRISIL operating income 5,786.3 |
| Operating profit (screener) | 929 | 867 | **350** | [V] |
| OPM | 14% | 14% | **6.1%** | [V]; CRISIL 6.1% |
| Other income | 193 | 68 | 33 | [V] |
| PAT | 880 | 558 | **130** (−77%) | [V]; CRISIL 129.93 |
| ROCE | 62% | 36% | **10%** (TTM 9.57%) | [V] |
| ROE (TTM) | n/a | n/a | **5.87%** | [V] |
| Borrowings | 473 | 559 | **417** | [V] |
| Cash equivalents | 91 | 126 | **60** | [V] screener schedule |
| Net debt, screener basis | 382 | 433 | **357** | [E] |
| Net term debt (company) | 398 | 221 | **169**; **188 at Q1 FY27** | [V] Q1 PPT chart (FY21 3,408 → FY22 3,150 → FY23 871 → …) |
| Company total debt view | n/a | n/a | Term debt ₹188 Cr + working capital ₹375–400 Cr. "Net utilisation always below ₹500 Cr"; ₹70–80 Cr of cash/unutilised limits kept. | [V] Q1 call |
| Adjusted debt / adjusted net worth (CRISIL) | n/a | 0.26× | **0.20×**; interest cover 4.68× (FY25 13.93×) | [V] CRISIL |
| CFO / FCF | 839 / 459 | 311 / −43 | **358 / 115** | [V] |

**Valuation, 13-Oct-2026** [V screener]:
- Price ₹65.5; m-cap **₹5,972 Cr**; 52-week high/low ₹98.2/53.0.
- **P/E 40.8× on standalone TTM PAT** (₹145 Cr). The consolidated-page figure of 20.4× is stale and should not be used.
- Standalone book value ₹24.8, so **P/B 2.64×**. No dividend.
- **EV/EBITDA** [E]: EV = 5,972 + 357 = ₹6,329 Cr. That is **18.1× FY26** OP (₹350 Cr) and **17.1× TTM** OP (₹370 Cr).

### 4b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | **1,683** (+24% YoY, −4% QoQ) | 1,745 | 1,357 | [V] PPT and screener |
| EBITDA reported / adjusted (₹ Cr) | 151 / **154** (9.1%) | 92 / 91 (5%) | 127 / 106 (8%) | [V] PPT |
| PAT (₹ Cr) | **85** (+21% YoY, ~4× QoQ) | 21 | 71 | [V] |
| Production ('000 t): sponge / pig iron / billets / TMT / ferro / DI pipe | 72 / 132 / 51 / 60 / 40 / 41 | 71 / 126 / 56 / 70 / 40 / 48 | 59 / 136 / 29 / 49 / 35 / 51 | [V] PPT charts (bbox-mapped) |
| Sales ('000 t): sponge / pig iron / billets / TMT / ferro / DI pipe | 46 / 84 / 15 / 53 / 25 / 44 | 55 / 74 / 16 / 63 / 33 / 51 | 50 / 76 / 8 / 41 / 27 / 43 | [V] |
| Realisation (₹/t): sponge / pig / billets / TMT / ferro / DI | 26,935 / **38,217** / 40,772 / 47,267 / **1,87,642** / 57,581 | 26,827 / 35,647 / 40,583 / 46,822 / 1,60,111 / 57,626 | 25,729 / 32,982 / 40,345 / 47,206 / 1,28,520 / 64,099 | [V]. Ferro +46% and pig iron +16% YoY, matching the call. |
| Revenue mix Q1 FY27 | Ferro 27.3%, pig iron 19.1%, DI pipe 15.0%, TMT 14.8%, sponge 7.4%, coke ~7%, billets 3.5%, scrap/fines ~1% | n/a | n/a | [V] call |
| Value-added share | **42%** (ferro + DI pipes) | n/a | n/a | [V] call |
| DI-pipe utilisation | **~30%** of the enhanced 5.5 lakh TPA; ~4 months' order book | n/a | n/a | [V] call; CRISIL |
| EBITDA/t (computed) | **₹5,770 per tonne sold** (154 / 267 kt of all products) | ₹3,100 | ₹4,300 | [E] |

### 4c. Steel KPIs

| KPI | Value | Basis / source |
|---|---|---|
| Iron ore / coal | **No captive mines.** It buys non-coking coal, iron-ore lumps/fines, coking coal and chrome ore, with dedicated rail sidings for loading in Odisha and unloading at the plant. A 6 lakh t iron-ore beneficiation plant is planned for low-grade dumps. | [V] PPT |
| Sponge iron (DRI) | **3.45 lakh TPA** (Unit I 1.05, Unit IV 1.2, Unit V 1.2). FY26 production ~261 kt (~76%), sales ~205 kt. | [V] capacity; [E] FY26 sums |
| Pig iron (mini BF) | **5.495 lakh TPA** (Unit III); being enhanced, with commissioning in **Q3 FY27**. FY26 production ~510 kt (93%), sales ~320 kt. | [V]/[E] |
| Sinter / coke | Sinter 9.08 lakh TPA (being enhanced); coke oven 3.5 lakh TPA (captive met coke) | [V] |
| Billets (SMS) | **3.94 lakh TPA** (Unit IV 2.94 + Unit V 1.0). FY26 production ~176 kt (45%). | [V]/[E] |
| TMT | **3.0 lakh TPA** (debottlenecked from 2.6). FY26 production ~219 kt (73%), sales ~195 kt. | [V]/[E] |
| DI pipes | **5.5 lakh TPA** (from 5.0). FY26 production and sales ~166 kt (~30–33%). Q1 FY27 ~30%. Management sees 50–60% next. | [V]/[E] |
| Ferro alloys | **1.66 lakh TPA → 1.9 lakh TPA by Q3 FY27**. Utilisation >80%, guided 80–90%. FY26 production ~147 kt, sales ~120 kt. | [V]/[E] |
| Captive power | **101.1 MW** (Unit I 18.3, Unit IV 70, Unit V 12.8) | [V] |
| FY26 volumes, sum of Q1–Q4 FY26 charts ('000 t) | Sales: sponge 205, pig iron 320, billets 51, TMT 195, ferro 120, DI pipe 166, ≈1,057 kt in all | [E] |
| EBITDA/t FY26 | **₹3,310 per tonne sold** (350 / 1.057 MT); ₹4,540 per tonne of iron units (hot metal + DRI production ~0.77 MT) | [E] |
| Margin by business (management) | Commodity steel 5–8% EBITDA margin; DI pipe 12–13%+; specialised ferro alloys 15–18%, long-term 15–20% | [V] call |
| Capex | Original ₹1,000 Cr plan **revised to ₹1,112 Cr** (technical upgrades, ancillaries, inflation, delays). **₹1,076 Cr spent**, mostly from internal accruals; balance ₹36 Cr by end-CY26. Covers BF, sinter and ferro-alloy enhancements. | [V] PPT; CRISIL |
| Revenue ambition | ~₹7,500 Cr "in a normal market" by FY28 | [V] call |
| Net debt / ND-EBITDA | ₹357 Cr / **1.02×** (screener FY26). Company net term debt ₹188 Cr. | [E]/[V] |
| Ratings | **CRISIL BBB/Stable, downgraded 21-Sep-2026** | [V] |
| Decarbonisation | An ESG rating was disclosed on 7-Oct-2026 (not read). Captive WHRB power; no tCO₂/t disclosed. The DRI/BF route is coal-intensive. | [V] feed |

### 4d. Segment mix
- The company reports a single steel-and-allied segment.
- Q1 FY27 revenue by product (per the call): ferro alloys 27%, pig iron 19%, DI pipes 15%, TMT 15%, sponge 7%, coke 7%, billets 4%.
- Value-added share (ferro + DI) is **42%**. The PPT gives 40–45% and the plant-design aim is ~70%.
- Exports to 40+ countries ("3-Star Export House").

### 4e. Ownership (Jun-2026) [V screener; PPT shareholding slide]
- Promoters (Jajodia family) **64.84%**, unchanged since Mar-25. The stake rose from 50.98% in FY22 through preferential warrant conversions in FY23–FY25 [V screener history].
- FII 2.78%, DII 0.10%, public 32.27%. 47,451 shareholders.

### 4f. Story bullets
1. **The DI-pipe thesis has stalled.** Utilisation fell from ~80% (FY25) to ~30% as JJM and AMRUT order flow slowed. JJM 2.0 runs to Dec-2028 with an ₹8.69 lakh Cr outlay and could revive it, but management gives no volume guidance.
2. **Ferro alloys are the bright spot.** Realisation rose from ₹1.29 lakh/t to ₹1.88 lakh/t over five quarters, and ferro is now 27% of revenue. Capacity goes to 1.9 lakh t in Q3 FY27.
3. **Thin margins and a credit downgrade.** FY26 OPM was 6.1%, Q1 FY27 9%, and EBITDA/t is ~₹3,300–5,800, the lowest of this batch. There are no captive mines, so the business is a full spread-taker on ore and coal.
4. **Valuation still rich for trough earnings**: standalone P/E 41× and EV/EBITDA ~17–18×. The stock depends on mix recovery: Q1 FY27 PAT of ₹85 Cr annualises to ₹340 Cr [E], which would put P/E at ~18×.

### 4g. Risks
- DI-pipe orders tied to government water-scheme spending.
- Raw-material spread (0% captive ore and coal).
- Working-capital stretch and short-term debt (the reasons CRISIL cited for the downgrade).
- Ferro-alloy price reversal.
- History of distress (CDR and NPAs sold to ARCs) makes lenders cautious.
- Execution of the Q3 FY27 BF and ferro-alloy commissioning.

---

## 5. Mini summary grid: batch 3 (₹ Cr unless stated; prices 13-Oct-2026)

| Metric | GPIL (consol.) | Gallantt (consol.) | Jayaswal Neco (standalone) | Jai Balaji (standalone) |
|---|---|---|---|---|
| FY26 revenue | 5,376 | 4,419 | 7,085 (company 7,132) | 5,784 |
| Growth YoY | +0.1% | +2.9% | +19.0% | −8.9% |
| FY26 EBITDA (screener OP) | 1,263 (co. 1,253) | 717 (co. 776 incl. OI) | 1,329 (co. 1,341) | 350 (co. adj. n/a for FY) |
| EBITDA margin | 23% | 16% (co. 17.6%) | 19% (co. 18.8%) | 6.1% |
| FY26 PAT | 802 | 484 | 463 | 130 |
| Net debt (screener basis) | **−702 (net cash)**; co. −837 | 45; co. "net cash, no term loans" | 1,842; co. secured debt 1,884 (Jun-26) | 357; co. net term debt 169 (188 Jun-26) |
| ND/EBITDA | −0.6× | 0.06× | 1.39× (co. secured/EBITDA 1.55×) | 1.02× |
| M-cap | 13,962 | 14,060 | 9,325 | 5,972 |
| P/E (TTM) | 17.0× | 32.3× | 16.3× | 40.8× (consol. 20.4× is stale) |
| P/B | 2.39× | 4.29× | 3.27× | 2.64× |
| EV/EBITDA (FY26 OP / TTM OP) | 10.5× / 10.6× | 19.7× / 21.5× | 8.4× / 7.9× | 18.1× / 17.1× |
| ROCE (FY26) | 21% (TTM 20.5%) | 18% | 21% | 10% |
| Key capacity | Mining 6.7 MTPA; pellets 4.7; DRI 0.65; billets 0.525 | Steel 0.99 → 1.23 MT (H2 FY27); pellets 0.79; power 129 MW | BF 1.0 MTPA; SMS 0.98; rolling 0.96; pellets 1.5 (+1.5); mines 7.0 | DRI 0.345; pig iron 0.55; DI pipe 0.55; ferro 0.166 → 0.19; TMT 0.30 |
| FY26 main volume | Pellets 2.86 MT produced / 1.88 MT sold; ore 2.75 MT | TMT 766 kt sold; billets 883 kt produced | Rolled 688 kt sold; hot metal 858 kt | Pig iron ~320 kt, TMT ~195 kt, DI ~166 kt sold [E] |
| EBITDA/t (basis) | ₹4,387 per t pellet produced [E] | ₹8,785 per t billet produced (co.) | ₹19,490 per t rolled sold; ₹11,570 per t iron units [E] | ₹3,310 per t of all products sold [E] |
| Q1 FY27 rev / EBITDA / PAT | 1,750 / 334 / 222 | 1,146 / 203 (co.) / 124 | 2,107 / 407 / 194 | 1,683 / 154 (adj.) / 85 |
| Captive iron ore | ~85–95% FY26, ~60% Q1 FY27 [E]; 100% target FY28 | 0% (3 blocks from FY28) | 100% | 0% |
| Captive coal | 0% (DRI ~100% imported coal) | 0% (power coal on CIL linkage) | 0% (imported coking coal) | 0% (captive coke oven) |
| Captive power | ~269 MW (solar 190, WHRB 49, biomass 28.5, wind 1.5) → +100 MW solar | 129 MW → 160 MW; solar 7 → 85 MW | 62 MW + 104 MWac group solar | 101.1 MW |
| Q2 FY27 results | Not out; no board date seen | Board 19-Oct | Board 16-Oct | Not out; no board date seen |
| Promoter (Jun-26) | 63.18% | 70.03% | 55.15% | 64.84% |
| Rating | CRISIL AA-/Stable | IND AA-/Stable | Ind-Ra (Feb-26; not fetched) | **CRISIL BBB/Stable (downgraded 21-Sep-26)** |

**Read-across for the report:**
- **Integration ranking.** By captive raw-material depth: Jayaswal Neco (100% ore, but coking coal bought) > GPIL (ore-captive, pellet-led) > Gallantt (power-captive, ore from FY28) > Jai Balaji (power only).
- **EBITDA/t follows the same order** once the per-tonne bases are made comparable.
- **Valuation runs inversely to integration.** Gallantt and Jai Balaji carry the highest multiples, and Jayaswal Neco the lowest.
- **Coal is the shared weak point.** None of the four has captive coal. The West Asia spike (imported thermal coal ~₹10.5k → ₹13k/t per GPIL) hit every Q1 FY27 margin.

---

## 6. PRIMER ISSUES

Primers were read on 13-Oct-2026: text extracted from the HTML (cover strip, "What's new" box, all sections), then grepped. Locations are given as "cover", "What's new", or "§NN" (the primer's own section numbers).

**Banned phrases.** A grep across all four primers for "think of", "priced for perfection", "no room for error", "no margin for error", "grow into the/its multiple", "a long way to fall", "call option on the future", "the bull owns", "the story will be written in", "both can be right" and "both are true at once" found **no matches**. "Honest" appears once in Gallantt (§08, "One honest caveat on the numbers") and once in Jai Balaji (§07 title, "reading a bad year honestly"). Neither appears more than once, so neither breaches the rule.

### 6.1 godawari-power-ispat.html (refreshed 17-Jul-2026)

| # | Primer says (where) | Correct (verified) | Source |
|---|---|---|---|
| 1 | "~₹16,600 Cr Market cap (Jul '26)" (cover); "At ~₹16,600 Cr market cap…" (§08) | **₹13,962 Cr** at ₹207, a 52-week low (high ₹320) | [V] screener 13-Oct-2026 |
| 2 | "~20–22× Trailing P/E (Jun–Jul '26); P/B ~2.8×" (§08) | **P/E 17.0×, P/B 2.39×**; EV/EBITDA ~10.5× | [V] screener |
| 3 | No Q1 FY27 anywhere (cover says the source is FY26 results) | Q1 FY27: revenue ₹1,750 Cr (+32%), EBITDA ₹334 Cr (19.1%, from 27.3% QoQ), PAT ₹222 Cr (−21% QoQ). Ore mined −16% YoY, so market-ore purchases rose. | [V] Q1 FY27 PPT |
| 4 | Capex list includes "steel" (§05 timeline; "~₹2,000 Cr FY27 capex programme (pellet, mine, solar, BESS, steel)") | **The 1 MTPA integrated steel plant is "kept in abeyance"** (Q1 FY27), and management says to treat it "as on hold… for medium term". The 250 MW solar is also in abeyance. The CRM has moved from Chhattisgarh to Sambhajinagar, Maharashtra, with commissioning now **Dec-2027**. FY27 capex guidance is ₹1,500–2,000 Cr. | [V] Q1 PPT p.9, p.20; Q1 call; Q4 call |
| 5 | BESS: "An initial 10 GWh plant… ~₹700 Cr initial investment, targeted around FY27" (§06; §07 table "0 → 10 GWh") | **20 GWh, ₹1,425 Cr** (1:1 debt:equity), ₹501 Cr spent by Jun-26, commissioning **Q1 FY28**, at 112 acres in AURIC, Maharashtra; cells from EVE Energy | [V] Q1 PPT p.22–23 |
| 6 | Solar "~165 MW in place… expanding toward ~540 MW (a large 250 MW project plus an earlier 125 MW)" (§06); "165 → 540 MW" (§07; §00 "solar 165→540 MW") | **190 MW installed** (25 MW added May-26); +100 MW due Sep-26, then **290 MW**. The 250 MW project is in abeyance. | [V] Q1 PPT p.21, p.27 |
| 7 | "Pellet plant 2.7 → 4.7 MnT" listed as a pipeline project (§07); "pellets heading to 4.7 MnT" (§00) | **Already commissioned**: 4.7 MTPA running at 77% in Q1 FY27. **One of three pellet plants shut in Jul–Aug 2026** (gas force majeure). FY27 4.0 MT pellet guidance is likely to be cut. | [V] Q1 PPT p.19; Q1 call |
| 8 | "Revenue has sat near ₹5,381 Cr for three straight years" / "~₹5,381 Cr in FY24, FY25 and FY26 alike" (§00, §03, §08) | FY24 ₹5,455 Cr (company) / ₹5,445 Cr (screener); FY25 ₹5,376 / 5,370; FY26 ₹5,381 / 5,376. Broadly flat, but not identical. | [V] PPT historical table; screener |
| 9 | Captive ore described as fully insulating ("100% captive… the tonnes you don't buy"; §03) | In Q1 FY27 a large share of pellet feed was **market ore** (0.54 MT mined vs 0.90 MT pellets). Management targets 25–30% purchase in Q3, <10% from Q4, 100% only in FY28. Mining cost is ₹3,000–3,500/t, the highest in 10 years per an analyst on the call. | [V] Q1 call |
| 10 | Missing: preferential warrants | 2.04 Cr warrants at ₹245 (≈₹500 Cr) issued Nov-2025 to promoters and others. The first conversion was 8-Oct-2026. The current price is below the issue price. | [V] BSE 8-Oct-2026 |
| 11 | Missing: Ardent Steel exit; 5.4 MT beneficiation (₹325 Cr, Q3 FY27); Vision 2030 (₹24,000 Cr revenue, now ex-steel); CRISIL AA- reaffirmed | As stated | [V] Q1 PPT |
| 12 | "Wire rod ~0.23 MnT" (§01 table) | The company calls it **M.S. Rounds** (230,850 t). Wire-rod-type output is HB wire (100.5 kt). Rolled structural products (90 kt, +319%) and galvanised fabrication (85 kt) are omitted. | [V] PPT production table |
| 13 | Revenue "toward a management-flagged ₹6,000 Cr-plus in FY27" (§07) | Not found in the Q1 FY27 PPT or call; the FY27 guidance is volume-only. Mark as unverified. | [V] (absence) |
| 14 | Cycle section: safeguard duty mentioned only generically ("safeguard duties, when imposed, help", §09) | Add the actual safeguard regime: a 12% provisional duty from Apr-2025 for 200 days, followed by the final DGTR measure [K: DGTR/Finance Ministry notifications 2025; see batch-1/sector file]. GPIL sells mostly pellets and long products, so it benefits indirectly. | [K] |

### 6.2 gallantt-ispat.html (refreshed 17-Jul-2026)

| # | Primer says (where) | Correct (verified) | Source |
|---|---|---|---|
| 1 | Whole framing, "the steel maker that also mills your flour" (cover title, §01 "Steel and atta, one roof", §05 "The wheat-flour business"); "official segment list reads Steel · Agro · Power · Real Estate" (§05) | The **FY26 annual report says the company is "predominantly engaged in single reporting segment of Iron and Steel"** and that it "has only one segment that is Steel & Power". The product-wise turnover lists only sponge iron, billets and TMT/rounds. Wheat flour is mentioned only in a director's biography. A real-estate venture is disclosed. The Q1 FY27 PPT also has no agro business. The flour-milling narrative is unsupported for the listed company in FY26 and should be removed or heavily qualified. | [V] FY26 AR (BSE PDF) |
| 2 | "no captive mine, so a spike in raw-material costs can squeeze it more than an ore-owning peer" (§10 risks); "Gallantt buys its ore and coal (unlike an ore-owning peer)" (§09) | Gallantt **holds three iron-ore blocks as preferred bidder** (2024–25): Todpura, Rajasthan, 260 ha / ~85 MT; and two blocks at Sonbhadra, UP, 431 ha / ~51 MT. Planned mining is 7 MTPA with beneficiation and pellet plants, ~₹1,500 Cr of capex, **production from FY28**, and a guided ~₹2,000/t EBITDA uplift. Current captive share is 0%, but the "no mine" framing is wrong. | [V] Q1 FY27 PPT; Q1 call |
| 3 | "₹1,015 Cr Gorakhpur brownfield… billet 528→800 KT, rolling 528→805 KT… near-doubling" (cover/What's new, §00, §07); "toward ~1.3 MT steel" | The company now presents a **₹3,000 Cr programme**: ~₹1,500 Cr mines, ~₹1,200 Cr steelmaking, ₹300 Cr solar. ₹775 Cr has been spent to Jun-26. Total steel capacity goes from **9.93 lakh t to 12.29 lakh t (+23%) in H2 FY27**, not a near-doubling. | [V] Q1 PPT "Medium term growth"; Q1 call |
| 4 | "100 MW captive solar" (§00, §04, §07, §10) | **85 MW**: 7 MW commissioned, 18 MW Gujarat in Q2 FY27, 60 MW Gorakhpur in Q4 FY27. ₹300 Cr. | [V] Q1 call; PPT |
| 5 | "captive power 78→100 MW" (§00, §03) | Group captive power is **129 MW → 160 MW** after enhancement | [V] PPT map table |
| 6 | DRI "~544 KT, heading to 560 KT" (§02 table) | FY26 DRI **production was 914.8 kt** (Gorakhpur 577.6 + Kutch 337.1), so the primer's figure looks like a single plant and understates the company total | [V] FY26 AR product table; PPT |
| 7 | "~₹15,800 Cr Market cap (Jul '26)" (cover; §08) | **₹14,060 Cr** (₹588; 52-week range ₹948–471) | [V] screener 13-Oct-2026 |
| 8 | "P/B ~4.8×" (§08) | **4.29×** (P/E 32.3×, close to the primer's ~33×) | [V] screener |
| 9 | "Effectively net-cash" (§06, §08) | Borrowings ₹548 Cr against cash and bank ₹503 Cr, so **net debt ~₹45 Cr** on the screener basis. The company says there are no term loans; the debt is working capital. "Near net-cash" is more accurate. | [V] screener; FY26 AR; Q1 call |
| 10 | Missing Q1 FY27 | Revenue ₹1,146 Cr, company EBITDA ₹203 Cr (17.8%), PAT ₹124 Cr (−29% YoY). **EBITDA/t ₹8,787 vs ₹11,068 YoY** (pellet-plant shutdown, coal). Kutch rolling at 66% utilisation. | [V] Q1 PPT and call |
| 11 | Missing upcoming and recent events | Q2 board meeting on **19-Oct-2026**. **BSE volume-surge clarification on 13-Oct-2026**. ₹2 dividend approved at the 30-Sep-2026 AGM. | [V] BSE notices |
| 12 | Safeguard mentioned only generically (§09) | Management's Q1 call: India briefly became a **net importer despite the safeguard duty**, and industry has sought anti-dumping action. Add the actual safeguard timeline. | [V] Q1 call |

### 6.3 jayaswal-neco.html (refreshed 10-Aug-2026; Q1 FY27 already included)

| # | Primer says (where) | Correct (verified) | Source |
|---|---|---|---|
| 1 | Captive mines "together roughly 3.95 MTPA" (§00, §01 table, §04 KPI tile) | **7.0 MTPA**: Metabodeli 1.0 + Chhotedongar **6.0** (enhanced from 2.95 MTPA in 2026). FY26 mined ~3.72 MT. | [V] Q1 FY27 PR "Our Journey" and capacity slides |
| 2 | Castings "roughly 140,000 tonnes a year… India's largest maker of iron castings" (§00, §02, §06) | Castings capacity is **0.075 MTPA** (four divisions); FY26 production 49.2 kt. The company says "one of the largest ferrous casters", not the largest. | [V] PR capacity slide |
| 3 | Describes the steel arm as plain "steel and long products (bars, rounds, sections)" (§00, §02) | The company positions itself as **"amongst the largest alloy steel (special steel) manufacturers in India"**: alloy bars, wire rods and bright bars for auto (Tier-2 approved by all major OEMs), engineering and defence. The special-steel angle is missing. Castings are a small part of revenue (49 kt vs ~1.0 MT of steel/iron sales). | [V] PR |
| 4 | "~₹8,970 Cr Market cap (mid-2026)" (cover; §10) | **₹9,325 Cr** (₹95.9) | [V] screener 13-Oct-2026 |
| 5 | "trades near 19× earnings" (§00, §10, §11) | **P/E 16.3×** (TTM), P/B 3.27×, EV/EBITDA ~8× | [V] screener |
| 6 | "Net debt (post-refi) ~₹2,300 Cr" (cover; §00, §03, §07, §11) | Secured debt **₹1,884 Cr at 30-Jun-26** (NCDs ₹1,440.9 Cr + WC ₹443.2 Cr), and ₹1,844 Cr on 17-Jul-26. FY26 secured net debt was ₹2,077 Cr (post Ind-AS). ₹160 Cr was cash-swept in Q1 FY27. Screener net debt (FY26) is ₹1,842 Cr. | [V] Q1 FY27 PR |
| 7 | "Dec-2025 refinancing cut the borrowing rate from ~17.5% to ~12.5%" (What's new, §00) | The company timeline shows a "second debt refinancing through NCDs at significantly lower costs" in **2025** and a completed exit from restructuring. The 17.5% → 12.5% figures and the December date were **not verified** in the documents fetched. Interest is now ₹66 Cr/quarter. | [V] PR (date and rates unverified) |
| 8 | "FY27 interest ~₹288 Cr" (§07) | The Q1 FY27 run-rate is already ~₹264 Cr (₹66 Cr × 4) [E] | [V]/[E] |
| 9 | Promoters "roughly 60%+, approximate — held" (§03) | **55.15%** (Jun-26), unchanged since Mar-25. FII 1.32%, DII 0.78%. | [V] screener |
| 10 | Missing: new 1.5 MTPA straight-grate pellet plant | ₹720 Cr (term debt ₹540 Cr). **Financial closure 1-Oct-2026**, 24-month build. Also 104 MWac group-captive solar (₹41 Cr). | [V] BSE 1-Oct-2026; PR |
| 11 | Missing: blast furnace upgraded **0.75 → 1.00 MTPA** (hot metal >2,700 TPD from 1,850); DRI 0.27 → 0.35 MTPA | As stated | [V] PR |
| 12 | Missing: Q2 FY27 board meeting **16-Oct-2026**; founder Basant Lall Shaw retired (Chairman Emeritus) | As stated | [V] BSE; PR |
| 13 | "Nagpur-based integrated iron-and-steel maker" (cover) | Registered and corporate office is in Nagpur, but the **integrated steel plant is at Siltara, Raipur (Chhattisgarh)**. This deserves explicit mention, since the mining and levy regime is Chhattisgarh's. | [V] PR |

### 6.4 jai-balaji-industries.html (refreshed 28-Aug-2026)

| # | Primer says (where) | Correct (verified) | Source |
|---|---|---|---|
| 1 | "~₹6,450 Cr Market cap (mid-2026)" (cover; §10) | **₹5,972 Cr** (₹65.5; 52-week range ₹98.2–53.0) | [V] screener 13-Oct-2026 |
| 2 | "At a low-20s P/E" / "Trailing P/E… reasonable on peak EPS" (§10) | The **standalone TTM P/E is 40.8×**. Screener's consolidated P/E of 20.4× uses a stale consolidated dataset (last quarter Sep-2025) and should not be used. P/B 2.64×; EV/EBITDA ~17–18×. | [V] screener (standalone vs consolidated) |
| 3 | "Value-added products are already ~55% of revenue, with a stated aim of ~80% within 18 months" (§00, What's new, §02, §08, §10) | The company says value-added (DI + ferro) is **40–45%** of revenue (Q1 FY27: **42%**), with a plant-design aim of **~70%** | [V] Q1 FY27 PPT p.7; Q1 call |
| 4 | "₹1,000 Cr Durgapur brownfield underway" (What's new, §08, §11) | **Revised to ₹1,112 Cr** (₹112 Cr overrun); **₹1,076 Cr already spent**; balance ₹36 Cr by end-CY26. BF, sinter and ferro-alloy enhancements are to be commissioned in **Q3 FY27**. Ferro capacity goes 1.66 → 1.9 lakh t. | [V] Q1 PPT p.11; CRISIL |
| 5 | Quarterly cadence "a Q2 net profit near ₹37 Cr, a Q3 near ₹31 Cr" (§07) | Screener standalone: **Q2 FY26 PAT ₹26 Cr, Q3 FY26 ₹12 Cr**, Q4 ₹21 Cr | [V] screener quarters |
| 6 | Missing: **CRISIL downgrade to BBB/Stable / A3+ (21-Sep-2026)** | Downgraded from BBB+/A2 on low DI-pipe utilisation (~30% vs 80%), a 6.1% margin, and short-term debt reliance | [V] CRISIL rationale |
| 7 | Missing Q1 FY27 | Revenue ₹1,683 Cr (+24%), adjusted EBITDA ₹154 Cr (9%), PAT ₹85 Cr (+21%). Ferro realisation ₹1.88 lakh/t (+46% YoY). DI-pipe utilisation ~30%. | [V] Q1 PPT and call |
| 8 | "Near debt-free" / "net-debt-free is the stated aim" (§03, §04, §10) | Net term debt ₹188 Cr (Jun-26), plus ₹375–400 Cr working capital. Screener net debt is **₹357 Cr** (FY26), ~1.0× EBITDA. CRISIL flags rising short-term debt. "Low-debt" is fair; "near debt-free" is not. | [V] Q1 call; screener; CRISIL |
| 9 | Product list includes "wire rods, heavy rounds" (§00, §04) | The current capacity table (Mar-26) lists sponge iron, pig iron, sinter, coke, billets, TMT (3 lakh t), DI pipes (5.5 lakh t), ferro alloys and OPVC pipe. **No wire-rod or heavy-round line.** | [V] Q1 PPT p.18–19 |
| 10 | "~2.74 MTPA aggregate capacity" (cover) | The sum of the listed steel-chain capacities depends on what is counted: DRI 0.345 + pig iron 0.55 + billets 0.394 + TMT 0.30 + DI 0.55 + ferro 0.166 ≈ **2.3 MT**, or ~3.6 MT with sinter and coke. Not a company figure. Use the product capacities instead. | [V]/[E] |
| 11 | FY25 ROCE ~36% shown with no FY26 ratio | **FY26 ROCE ~10%, ROE ~5.9%** (TTM) | [V] screener |
| 12 | Promoter section omits the warrant-led creep | Promoter stake rose from 50.98% (FY22) to 55.90% (FY23) to 60.80% (FY24) to **64.84%** (FY25 onward) via preferential warrant conversions. Unchanged at Jun-26. | [V] screener shareholding history |
| 13 | Safeguard and import pressure not discussed concretely (§09) | Add India's safeguard-duty status. The biggest FY26 driver for JBIL was government water-scheme order flow (JJM/AMRUT), not imports. | [V] CRISIL; Q1 call |

---

**Figures not fetched or verified this session (flagged):**
- Jai Balaji's Q4 FY26 presentation and transcript (FY26 volumes are reconstructed from the Q1 FY27 PPT quarterly charts, [E]).
- Jayaswal Neco's India Ratings Feb-2026 rationale, the 6-Oct SAST disclosure, and the 17.5%→12.5% refinancing rates.
- Gallantt's Mar-2026 Gallantt Trust details [S] and the 13-Oct BSE clarification reply.
- GPIL's promoter-pledge status [S].
- Precise safeguard-duty dates [K].
