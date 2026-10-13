# Iron & Steel: company packs, batch 2 (mining-led, stainless, large secondary/DRI)

Sub-sector: Iron & Steel || Iron & Steel. Prepared 2026-10-13 (Phase-1b company-pack subagent, batch 2 of 3).
Members: Lloyds Metals and Energy, Jindal Stainless, Shyam Metalics and Energy, Sarda Energy & Minerals.

**Tags.** [V] = fetched and read this session (URL given). [K] = from memory, with the source named; not re-fetched. [E] = estimate or my own arithmetic (method stated). [S] = search-result snippet only, not fetched. Treat [S] as unverified.

**Common sources (all fetched 2026-10-13):**
- Screener consolidated pages, saved as HTML by curl and parsed with python: `https://www.screener.in/company/<NSE>/consolidated/`. Cash comes from screener's balance-sheet schedule API, `https://www.screener.in/api/company/<id>/schedules/?parent=Other%20Assets&section=balance-sheet`, and only its "Cash Equivalents" line is used. "Other Assets" is **not** cash. Company IDs: LLOYDSME 1902, JSL 1626, SHYAMMETL 1274880, SARDAEN 2895. All m-caps and prices are as of the 13-Oct-2026 fetch.
- Screener "Operating Profit" = sales minus expenses, **before other income**. It is the "screener EBITDA" basis below. Company-reported EBITDA is shown separately where it differs.
- Q1 FY27 investor presentations and concall transcripts were downloaded from bseindia.com (`https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=<id>.pdf`; the links are listed in each section) and read via pdftotext.
- **Q2 FY27 (Sep-26 quarter) results: none of the four had reported as of 13-Oct-2026.** Sarda's board meets on 31-Oct-2026. Shyam has published its Q2 FY27 **sales-volume update** (6-Oct-2026), which is included below. Lloyds' and JSL's results dates were not yet announced in the BSE announcements listed on screener.
- Shareholding: screener already shows **Sep-2026** patterns for Lloyds, JSL and Shyam. Sarda's latest is **Jun-2026**.
- EV/EBITDA [E] = (m-cap + net debt) ÷ TTM screener operating profit. Minority interests are ignored unless stated.

---

## 1. Lloyds Metals and Energy Ltd: NSE LLOYDSME · BSE 512455

Fetched 2026-10-13. Still listed. **Perimeter changes (important; consolidated FY26 is not comparable with FY25):**
- **Thriveni Earthmovers and Infra Pvt Ltd (TEIL/TEIPL), the Surjagarh mine developer and operator (MDO), became a 79.82% subsidiary w.e.f. 1-Jul-2025.** This was done by share subscription (₹70 Cr) after the NCLT-approved demerger of Thriveni's MDO business into TEIL [V: HDFC Sky, https://hdfcsky.com/news/lloyds-metals-completes-the-acquisition-of-79-82-percent-stake]. Lloyds subscribed a further ₹606.76 Cr in TEIL (3.5 Cr shares), credited on 8-Oct-2026 [V: BSE filing, https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9140fe3c-09f4-4f5a-94a5-81cf2509ac1f.pdf].
- **Chemaf (DRC copper-cobalt): 49% stake**, alongside **Surya Mines (DRC): 50%**. The Chemaf debt is being restructured. Management expects consolidated debt to fall "40–50%" of the Chemaf-related debt (~US$700–800m) once that closes, which it expects next quarter [V: Q1 FY27 concall transcript].
- **BRPL / Thriveni Pellets: 49.99%** (Tata Steel holds 50.01%). These are the Odisha pellet and slurry-pipeline assets under a pellet-conversion agreement with Tata Steel. The deal implies ~₹350 Cr EBITDA on a 100% basis for a ~₹515 Cr Lloyds investment. There is also a non-binding Tata Steel–Lloyds strategic MoU [V: Q4 FY26 investor presentation, https://www.bseindia.com/xml-data/corpfiling/AttachHis/550899f1-1300-4ccb-9683-fc114195c1ad.pdf].
- **Panguna (Bougainville, PNG) copper-gold:** a mining lease was signed with the Autonomous Bougainville Government (ABG) on 7 August. The resource is 1,838 Mt at 0.30% Cu and 0.34 g/t Au [V: Q1 FY27 investor presentation].
- **Upcoming:** a board meeting on 14-Oct-2026 will consider NCDs and USD-bond issuance [V: screener BSE announcements list].

Primary documents: Q1 FY27 investor presentation (10-Aug-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=54807dea-bee2-4650-b582-d5dbb9e2f2c2.pdf [V]. Q1 FY27 concall transcript (11-Aug-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=77a08c2d-cf48-49d7-ad4d-40112984a8f0.pdf [V]. Q4 FY26 presentation (link above) [V].

### 1a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 6,522 | 6,721 | **17,113** (+154.6% YoY) | [V] screener https://www.screener.in/company/LLOYDSME/consolidated/ ; company 1,71,127 mn, matches |
| Operating profit (screener EBITDA, before OI) | 1,729 | 1,956 | **6,205** | [V] screener |
| OPM (screener) | 26% | 29% | **36.3%** | [V] screener |
| Company EBITDA (consolidated) | 1,731 | 1,956 | **6,140** (35.9%) | [V] Q1 FY27 presentation, historical P&L |
| Standalone EBITDA (company) | n/a | 1,953 | **4,516** (33.0%) | [V] Q1 FY27 presentation |
| Other income | 53 | 54 | 149 | [V] screener |
| PAT (consolidated, reported) | 1,243 | 1,455 | **3,829** (+163%) | [V] screener; company 38,286 mn |
| ROCE / ROE (screener) | 78% / n/a | 37% / n/a | **27% / 36.6%** (latest) | [V] screener. The company's average ROCE ex-CWIP is 56% for FY26 |
| Borrowings (screener) | 33 | 1,073 | **20,716** | [V] screener |
| Company borrowings (non-current 1,38,493 mn + current 65,312 mn) | 0 | 1,034 | **20,381** (+ lease liabilities 336) | [V] Q1 FY27 presentation, consolidated balance sheet |
| Cash & equivalents (screener schedule) | 287 | 741 | **2,703** | [V] screener schedule API |
| Company cash + other bank balances + current investments | 316 | 816 | **2,808** | [V] presentation balance sheet (21,219 + 5,811 + 1,051 mn) |
| Net debt (screener basis) | net cash 254 | 332 | **18,013** | [E] borrowings minus cash |
| Net debt (company) | n/a | n/a | **~19,000 consolidated (Jun-26)**; standalone **5,616 (Jun-26)**; TEIPL **5,821 (Jun-26, incl. RPS)** | [V] concall; presentation |
| ND/EBITDA | n/a | 0.17× | **2.9× FY26 screener**; **~2.3× TTM** (19,000 ÷ 8,126); standalone **~0.96×** (5,616 ÷ TTM standalone EBITDA ~5,856) | [E] |
| CFO / FCF (screener) | 1,701 / −20 | 1,207 / −2,404 | **2,921 / −7,040** | [V] screener |

**Valuation, 13-Oct-2026** [V screener]: price ₹1,812; m-cap **₹1,02,055 Cr**; 52-week high/low ₹2,127/1,043; screener P/E **21.4×** (TTM PAT ₹4,921 Cr); book value ₹246, so **P/B 7.4×**; dividend yield 0.06%. Equity capital rose from ₹52 Cr to ₹56 Cr in FY26, a share-count increase from warrant conversion or allotment (562.79 mn shares at Jun-26 [V presentation]).
**EV/EBITDA** [E]: ₹1,02,055 + ~₹19,000 net debt = ~₹1.21 lakh Cr, which is **~14.9× TTM screener operating profit** (₹8,126 Cr) and ~19.7× FY26. The 20.18% TEIL minority and the 49% Chemaf liabilities are not adjusted.

### 1b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Consolidated revenue (₹ Cr) | **7,354** (+209% YoY) | 6,020 | 2,384 | [V] screener; presentation 73,544 mn |
| Consolidated EBITDA (company) | **2,782** (37.8%) | 2,545 (42.3%) | 806 (33.8%) | [V] presentation |
| Consolidated PAT | **1,734** | 1,530 | 642 (screener) / 652 (company) | [V] |
| Standalone revenue / EBITDA / PAT | **5,413 / 2,120 (39.2%) / 1,527** | 4,913 / 1,614 / 1,066 | 2,380 / 780 / 635 | [V] presentation |
| TEIPL revenue / EBITDA / cash PAT | 2,672 / 658 (24.6%) / 447 | n/a | 1,639 / 269 / 183 | [V] presentation. Guidance: FY27 margin 28–30% |
| Copper (Surya + Chemaf) | 2,754 t Cu; EBITDA −US$2.6m | n/a | n/a | [V] presentation. Chemaf EP-1 was shut for care and maintenance |
| Iron ore production / sales (MnT) | **6.05 / 5.46** (+53% / +58% YoY) | 9.09 / 6.16 | ~3.95 / 3.45 | [V] presentation |
| Iron ore realisation / EBITDA per t | **₹6,068 / ₹2,230** | ₹5,848 / ₹1,894 | n/a | [V] presentation |
| Pellet production / sales (MnT) | **1.69 / ~1.34** | 1.08 / ~0.89 | n/a (plant 1 began commercial output late Q2 FY26) | [V] presentation; sales read off chart |
| Pellet realisation / EBITDA per t | **₹11,783 / ₹5,803** | ₹9,590 / ₹4,040 | n/a | [V] |
| DRI sales (kt), realisation, EBITDA/t | **183.92 kt** (+133%), ₹27,376, **₹6,273** | 188.32 kt, ₹27,306, ₹7,999 | ~79 kt | [V] |
| Sales mix | 75.3% domestic / 24.7% export (Kenya, South Korea, Indonesia, China) | | | [V] concall |
| Capex in quarter | ₹3,005 Cr | | | [V] concall |
| Q2 FY27 | **Not reported** as of 13-Oct-2026 | | | [V] screener quarters end Jun-2026 |

### 1c. Steel-native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Iron ore EC / production | EC raised from 10 to **55 MTPA ROM**. FY26 production 21.96 MnT (+120%), sales 16.18 MnT (+71%). FY27 guidance **26 MnT** | [V] Q4 FY26 and Q1 FY27 presentations |
| Pellets | **8 MTPA** (two 4 MTPA lines at Konsari; line 2 commissioned May-2026; 100% utilisation within 4 months). Pellet plant-3 is planned, taking capacity to **12 MTPA**. FY26 production 3.03 MnT; FY27 guidance **7.75–8 MnT** | [V] |
| DRI / sponge iron | **0.70 MTPA → 1.2 MTPA**. FY26 production 484 kt, sales 479.69 kt (+56%). FY27 guidance 825 kt | [V] |
| Steel (wire-rod mill, long products) | **1.2 MTPA**, commissioning **by Mar-2027 (Q4 FY27)**. The larger Konsari ISP (originally 3 MTPA) is "on the study block" for an upsized capacity, with no board approval yet | [V] concall |
| BHQ beneficiation | 30 MTPA throughput under construction; pilot plant yield 38%+ | [V] presentation |
| Slurry pipeline | **85 km Hedri–Konsari, 10 MTPA, commissioned** (built in 16 months). Planned: ~195 km Hedri–Ghugus line at ~16 MTPA, saving ₹800–1,000/t, plus a Chandrapur stockyard saving ₹250/t | [V] presentation |
| Realisation/t, FY26 | Iron ore ₹5,806; pellets ₹10,277; DRI ₹27,009 | [V] Q4 FY26 presentation |
| EBITDA/t, FY26 (company) | Iron ore **₹1,930**; pellets **₹4,657**; DRI **₹6,643** | [V] Q4 FY26 presentation |
| EBITDA/t computed | Standalone FY26 EBITDA ₹4,516 Cr ÷ ~19.3 MnT of total saleable tonnes (16.18 ore + ~2.6 pellets + 0.48 DRI) ≈ **₹2,340/t blended**. Q1 FY27: ₹2,120 Cr ÷ ~6.98 MnT ≈ **₹3,040/t** | [E]. Pellet FY26 sales of ~2.6 MnT are read off the presentation chart |
| Utilisation | Pellets ~100% (Q1 FY27 annualised 6.8 MnT on 8 MTPA after line 2 started in May). Ore mining runs ~24 MnT annualised against a 26 MnT FY27 plan. DRI ~105% of 0.70 MTPA (Q1 annualised) | [E] |
| Captive self-sufficiency | Iron ore **100%** captive (Surjagarh lease valid to **2057**; reserves DSO 157 Mt + BHQ 706 Mt). Coal **0%** captive (the DRI kilns buy thermal coal; Thriveni mines coal only as a contractor). Power: CPP and WHRB plus 39 MW renewables in operation, ~85 MW more under commissioning, and a 205 MW RTC RE tender | [V] presentation |
| Iron ore → pellet → DRI conversion | 1.07 t ore per t pellet; ~1.5 t pellet per t DRI | [V] concall |
| Capex | **₹13,513 Cr FY24–26** (FY26 ₹8,131 Cr), ₹3,005 Cr in Q1 FY27. FY27: ~₹8,500 Cr domestic (ex-ISP) + ~US$300m overseas. **~₹11,000 Cr a year for two years, then ₹15,000–20,000 Cr in year 3**. Panguna is excluded | [V] concall |
| Capex per tonne | Not disclosed per project. The 1.2 MTPA WRM plant cost was not split out | n/a |
| Royalty / auction regime | Surjagarh is an **allotted (pre-2015) lease**, not an auctioned one, so Lloyds pays no auction premium. Company data puts the average auction premium for iron-ore blocks at 126% of IBM prices in 2026 (161% in 2025). The company also cites a Maharashtra IPS refund of state GST and royalty on captive ore consumed | [V] presentation, quoting Ministry of Mines |
| Decarbonisation / CBAM | The slurry pipeline replaces trucks. 88 electric HEMM units run at the mine. Lloyds is moving from LSHS to LNG, claims "India's first green pellet chain", and has a CARE ESG score of 76.7 (13-Oct-2026). **CBAM:** agglomerated iron ore (pellets, CN 2601 12) is within EU CBAM scope [K: EU Reg. 2023/956, Annex I], but Lloyds' pellet exports go to Asia and Kenya, so direct EU exposure is negligible. Future long-product steel will be coal-DRI based, which is carbon-intensive | [V]/[K] |

### 1d. Segment mix
- Standalone Q1 FY27 revenue: **mining (iron ore) 59% / steel and related value-added products (pellets, DRI, power) 41%**. EBIT split 60/40. In Q1 FY26 it was 87/13 revenue and 98/2 EBIT [V presentation]. Product revenue in Q1 FY27: iron ore ₹3,218 Cr (EBIT margin 37.5%); value-added products ₹2,195 Cr (EBIT margin 37.1%) [V, from chart].
- FY26 standalone total income was ₹13,838 Cr: iron ore ~₹9,394 Cr (~68%) and value-added products ~₹4,444 Cr (~32%) [V chart].
- Consolidated Q1 FY27 adds four streams: mining, steel and value-added products, MDO services (TEIPL third-party work) and copper. The chart labels are garbled in the PDF text, so no exact split is given. MDO third-party revenue is material: TEIPL revenue was ₹2,672 Cr against consolidated revenue of ₹7,354 Cr, and part of it is intra-group.

### 1e. Ownership (Sep-2026, screener) [V]
Promoters **61.61%** (61.65% at Mar-26; 63.44% at Jun-25). FIIs 1.93%, DIIs 2.13%, public 34.25%; 1,31,550 shareholders. Thriveni Earthmovers (a promoter) has been releasing pledges: encumbered shares were 16.88% of share capital after a 2-Sep-2026 release [S: filingreader.com, https://filingreader.com/news-wire/mumbai/2026-09-05/thriveni-earthmovers-releases-pledge-on-lloyds-metals-shares]. Institutional float is tiny (~4%).

### 1f. Concentration
Single mine (Surjagarh) in a single district (Gadchiroli). Ore is sold mostly to central and southern Indian merchant pellet and DRI makers; 24.7% is exported. The group's MDO revenue is concentrated in captive work for Lloyds.

### 1g. Guidance (FY27) [V presentation and concall]
Iron ore 26 MnT; pellets 7.75–8 MnT; DRI 825 kt; WRM steel commissioning in Q4 FY27; copper 8–10 kt. TEIPL EBITDA margin 28–30%. Group cost savings "to surpass ₹2,000 Cr per annum as initiatives mature". Odisha MDO volumes +39% to 34–35 MnT.

### 1h. Story bullets
1. **The cheapest ore in India is moving down the value chain fast.** In Q1 FY27, value-added products were 41% of standalone revenue against 13% a year earlier. Pellet EBITDA/t of ₹5,803 is 2.6× that of ore (₹2,230).
2. **The slurry pipeline is now running.** The 85 km, 10 MTPA line is operating, and the ~195 km line will cut another ₹800–1,000/t. This is a structural logistics cost lead over merchant miners.
3. **It is now a mining-services and critical-minerals group too.** TEIL (79.82%), Chemaf (49%), Surya (50%), Panguna and BRPL (49.99% with Tata Steel). That means more growth options, but also ~₹19,000 Cr of consolidated net debt (versus ₹5,616 Cr standalone) and governance and related-party complexity.
4. **Steel entry is near term but small.** The first 1.2 MTPA long-products plant is due by Mar-2027. The big ISP is unapproved and being re-scoped.

### 1i. Risks
Iron ore and pellet prices (management flagged softer pellet and ore prices in Q2). Consolidated leverage tied to Chemaf restructuring. Execution of capex at ₹11,000–20,000 Cr a year. Single-asset and Gadchiroli security risk. Related-party dealings with Thriveni. Fuel-cost pass-through at TEIPL (the Gulf crisis raised diesel and sulphuric-acid costs).

---
## 2. Jindal Stainless Ltd: NSE JSL · BSE 532508

Fetched 2026-10-13. Still listed. The 2023 merger of Jindal Stainless (Hisar) is complete. Subsidiaries and associates:
- **Jindal United Steel (JUSL)**: hot strip mill at Jajpur.
- **Chromeni Steels**: 0.6 MTPA cold rolling mill (CRM), Mundra. Utilisation is ~80–85% [V concall].
- **Rathi Super Steel**: long products, acquired 2025 [K]. Utilisation is ~70% [V concall].
- **Indonesia**: a 49% nickel pig iron (NPI) JV with New Yaking (commissioned Aug-2024) [K: JSL press release, Aug-2024], plus a **1.2 MTPA stainless melt shop**, recently commissioned, which is stabilising production and certifications [V concall].

Primary documents [V]: Q1 FY27 earnings presentation (3-Aug-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a36e5cf1-908d-43ad-942f-0d4141b4b0e8.pdf ; Q1 FY27 concall transcript (4-Aug-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6a8431ae-c850-4d94-ba72-97b7ffe785c4.pdf ; Q4 FY26 presentation, https://www.bseindia.com/xml-data/corpfiling/AttachHis/63f08539-8e0a-44e2-98bb-c0d0bc571111.pdf .

### 2a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 38,562 | 39,312 | **42,955** (+9.3% YoY) | [V] screener https://www.screener.in/company/JSL/consolidated/ ; company matches |
| Operating profit (screener, before OI) | 4,511 | 4,469 | **5,482** | [V] screener |
| OPM (screener) | 12% | 11% | **12.8%** | [V] |
| Company EBITDA (consolidated) | n/a | 4,667 (11.9%) | **5,560** (12.9%) | [V] Q4 FY26 presentation. It differs from screener by ~₹80–200 Cr because of expense classification |
| Standalone EBITDA | n/a | 3,905 | **4,322** | [V] Q4 FY26 presentation |
| Other income | 515 | 438 | 388 (company 351) | [V] |
| PAT (consolidated) | 2,693 | 2,500 | **3,185** (+27%) | [V] screener and company |
| ROCE (screener) | 22% | 18% | **19%** (latest 19.3%); ROE 17.7% | [V] |
| Borrowings (screener, incl. leases and other) | 6,052 | 6,402 | **7,460** | [V] screener |
| Company total debt (bank and FI loans) | 5,926 | 6,275 | **6,242**; Jun-26 **6,649** | [V] presentations |
| Cash (screener schedule) | 1,988 | 2,270 | **2,934** | [V] |
| Company cash and bank balances (incl. all deposits) | 1,992 | 2,284 | **3,203**; Jun-26 **3,698** | [V] |
| Net debt (company) | 3,934 | 3,991 | **3,040**; Jun-26 **2,950** | [V] |
| Net debt (screener basis) | 4,064 | 4,132 | 4,526 | [E] borrowings minus cash. It includes leases and non-bank debt, so it is higher than the company figure |
| ND/EBITDA (company) | n/a | 0.86× | **0.55×**; Jun-26 **0.53×**; ND/equity 0.14× | [V] |
| CFO / FCF (screener) | 4,818 / 3,367 | 4,718 / 2,890 | **3,395 / 755** | [V] |

**Valuation, 13-Oct-2026** [V screener]: price ₹721; m-cap **₹59,479 Cr**; 52-week high/low ₹884/652; P/E **18.1×**; book value ₹240, so **P/B 3.0×**; dividend yield 0.56%. **EV/EBITDA** [E]: ₹59,479 + ₹2,950 Cr company net debt = ₹62,429 Cr, which is **11.2× TTM screener operating profit** (₹5,566 Cr). Ratings: long-term AA/Positive, short-term A1+ [V presentation].

### 2b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | **11,279** (+10.5% YoY, −1% QoQ) | 11,337 | 10,207 | [V] presentation and screener |
| EBITDA (company) | **1,329** (11.8%) | 1,455 | 1,310 | [V] |
| PAT | **769** (+7.7%) | 834 | 715 | [V] |
| Finished-goods sales volume ('000 t) | **581** (−7.3% YoY) | 642 | 626 | [V]. The YoY fall is from the Apr-26 propane and LPG shortage caused by the Middle-East crisis, not from weak demand |
| Export share | ~11% (flat in absolute tonnes) | 7% | n/a | [V] concall |
| EBITDA/t (computed, consolidated EBITDA ÷ JSL volume) | **₹22,874** | ₹22,664 | ₹20,927 | [E]. Subsidiary EBITDA (JUSL, Chromeni, Rathi, Indonesia) is included while the volume is JSL's |
| Revenue/t (computed, consolidated) | ~₹1.94 lakh | ~₹1.77 lakh | ~₹1.63 lakh | [E] same basis, so it is overstated |
| Guidance | H1 FY27 EBITDA/t **₹18,000–20,000** maintained; 3.5 MTPA sales by FY29 | | | [V] concall |
| Q2 FY27 | **Not reported** as of 13-Oct-2026 | | | [V] screener |

### 2c. Steel-native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Stainless melt capacity | **4.2 MTPA**, the company's stated annual melt capacity, which includes the new 1.2 MTPA Indonesian melt shop. That implies ~3.0 MTPA in India (Jajpur + Hisar). The Q4 FY26 deck said "ramping up its facilities to reach 4.2 MTPA … in FY27" | [V] Q1 and Q4 FY26 presentations; India split [E] |
| Downstream | Cold rolling **2.0 → 2.67 MTPA by FY28** (Jajpur, then Kharagpur, then Hisar). New HRAP line (1.1 MTPA) ready around the end of Q3 FY27 | [V] concall |
| Sales volume | FY26 **2.566 MT** (standalone, +8% vs 2.373 MT); exports 8%. Target **3.5 MTPA by FY29** | [V] Q4 FY26 presentation |
| Utilisation | FY26 sales of 2.57 MT against ~3.0 MTPA of Indian melt capacity ≈ 85% [E]. Chromeni 80–85%; Rathi ~70% | [E]/[V] |
| Realisation/t, FY26 | Standalone revenue ÷ volume = ₹42,680 Cr ÷ 2.566 MT ≈ **₹1.66 lakh/t** | [E] |
| EBITDA/t, FY26 | Standalone **₹16,843** (₹4,322 Cr ÷ 2.566 MT). Consolidated basis **₹21,668** (₹5,560 Cr ÷ 2.566 MT), which includes subsidiaries. FY25: ₹16,456 standalone / ₹19,667 consolidated | [E] from [V] figures |
| Raw materials | LME nickel was in the ~US$15–16k/t range across FY26–Q1 FY27; ferrochrome ~₹1.0–1.2 lakh/t (BigMint) | [V] presentation charts; read approximately |
| Captive / self-sufficiency | Nickel: partial, through the 49% Indonesian NPI JV (up to ~200 kt NPI/yr). Chrome: captive ferrochrome capacity in Odisha [K: primer and company releases]. Scrap is **85–90% of feed at Hisar and 70–75% at Jajpur**, with 90–95% sourced domestically or from Southeast Asia and less than 2–3% from Europe. Power: captive power at Jajpur [K]. JSL uses no iron ore or coking coal, so the carbon-steel spread drivers do not apply | [V] concall; [K] |
| Capex | FY27 **₹2,400–2,600 Cr**, mainly downstream cold rolling. The 2023 ₹5,400 Cr package covered the Indonesian NPI JV, Jajpur downstream and the Chromeni buyout [K]. A Maharashtra greenfield is stuck on land acquisition | [V] concall |
| Capex per tonne | Not disclosed for the cold rolling additions | n/a |
| Trade remedies | The **DGTR anti-dumping probe on stainless cold-rolled flat products (300/400 series) from China, Indonesia and Vietnam** (initiated 29-Sep-2025) had its deadline **extended six months to 28-Mar-2027** (DGTR notification, 25-Sep-2026) [V: SteelOrbis, https://www.steelorbis.com/steel-news/latest-news/india-extends-ad-investigation-deadline-for-stainless-cr-flats-imports-from-three-countries-1479764.htm]. The public hearing was scheduled for 9-Sep-2026 [V concall]. The stainless **quality control order (QCO) relaxation runs to Mar-2027**, and management expects no reversal before then [V concall]. The carbon-steel safeguard duty does not cover stainless | |
| Decarbonisation / CBAM | Electric arc furnace route with high scrap feed. Hisar GHG intensity −12% YoY. Green hydrogen at Hisar and Jajpur (600 Nm³/h at Jajpur, with Greenzo, commissioning Aug-2026; ~₹35 Cr). Piped natural gas is replacing propane and LPG at Jajpur. The Hisar unit reports FY26 emissions −42% [V: BSE press release 10-Oct-2026, screener announcements]. **CBAM:** Europe is 30–40% of exports (Europe plus US ~60%), so EU exposure is only ~3–4% of volume. Management says the **cut in the EU safeguard quota**, not CBAM, is what hits EU volumes. It is waiting for the EU to appoint verifiers | [V] concall |

### 2d. Segment mix
JSL reports a single stainless segment. Product mix: 300 series, 200 series, 400 series and specials. FY26 sales were 92% domestic and 8% export; Q1 FY27 was ~89/11 [V]. End-use demand drivers [V presentation]: railways (Vande Bharat coaches moving to austenitic grades; the ICF K-RIDE specification), metro, infrastructure (flyovers, road over-bridges, foot over-bridges), autos, lifts and white goods, pipes and tubes, and process industry (oil and gas and power were hit by the fuel disruption). Wagon demand is weak on slow tendering.

### 2e. Ownership (Sep-2026, screener) [V]
Promoters **62.54%** (62.04% at Mar/Jun-26; 61.10% at Jun-25, so the stake is creeping up). FIIs **20.07%** (from 21.26% a year ago), DIIs 7.73%, public 9.61%; 2,03,646 shareholders.

### 2f. Concentration
Indian stainless leader. ~90% of revenue is domestic, and the customer base is spread across sectors. The key input dependence is imported nickel (Indonesia) and scrap.

### 2g. Story bullets
1. **A balance sheet ready for a new cycle.** Net debt is ₹2,950 Cr (0.53× EBITDA) after a ₹5,400 Cr expansion. Capex is now downstream-led (cold rolling to 2.67 MTPA).
2. **Margins above guidance despite the gas shock.** Q1 FY27 EBITDA/t of ~₹22.9k (consolidated basis) is above the ₹18–20k guide even with volume down 7%. The richer mix and Chromeni helped.
3. **Trade policy is the swing factor.** The anti-dumping (AD) ruling on Chinese, Indonesian and Vietnamese cold-rolled stainless is now due by Mar-2027. The QCO relaxation runs to Mar-2027. The EU safeguard quota cut limits exports.
4. **Indonesia is now both melt and nickel.** The 1.2 MTPA melt shop can supply slabs and HR coil to Indian downstream lines, a hedge against Indian melt bottlenecks and nickel export curbs.

### 2h. Risks
Chinese and Indonesian stainless imports if the AD or QCO goes against the industry. Nickel price and Indonesian policy (the change in the nickel-ore benchmark). Execution risk in Indonesia (certification, ramp-up). Energy (LPG and propane) shocks. EU quota cuts.

---
## 3. Shyam Metalics and Energy Ltd: NSE SHYAMMETL · BSE 543299

Fetched 2026-10-13. Still listed; no merger or demerger. **Recent events:**
- **Non-binding MoU with the Maharashtra government (2-Oct-2026)** for a **9 MTPA greenfield integrated steel complex at Chandrapur** costing ~**₹50,000 Cr**. Phase I is 3.75 MTPA of finished steel and Phase II adds 5.25 MTPA. The route is coke making, blast furnace (BF) plus DRI, then melting and rolling [V: BSE press release, https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9b0b7c4c-3806-41ed-9841-1114a2b0635e.pdf].
- **Phutamura coal block (Mand–Raigarh, Chhattisgarh; ~170 Mt reserves)** secured through an investment in Alom Solar Pvt Ltd, the successful bidder (13-Oct-2026) [V: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=40520f24-f3cd-49e2-bf92-9be5c3764803.pdf].
- Colour-coated line commissioned Apr-2026; aluminium foil facility (Odisha) commissioned Jul-2026; 0.15 MTPA CRM commissioned Apr-2026 [V presentation and concall].
- Trading window closed from 1-Oct until Q2 results; the results date was not yet announced.

Primary documents [V]: Q1 FY27 investor presentation (Jul-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2946942a-653e-4209-b905-1755f5414122.pdf ; Q1 FY27 concall transcript (21-Jul-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9bb4a6f0-691c-48ed-8f4c-ac1ec4db019d.pdf ; Q2 FY27 sales release (6-Oct-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ce69ffb4-2c0e-4c30-8288-ff2f97ae7398.pdf .

### 3a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 13,195 | 15,159 | **18,552** (+22.4% YoY) | [V] screener https://www.screener.in/company/SHYAMMETL/consolidated/ ; company 18,552.2 |
| Operating profit (screener) = company "Operating EBITDA" | 1,570 | 1,866 | **2,333** | [V] screener; company 2,333.0 |
| OPM | 12% | 12.3% | **12.6%** | [V] |
| Company "EBITDA" (incl. other income) | n/a | 2,096 | **2,537** | [V] presentation. Use the operating figure for comparisons |
| Gross margin (company, revenue minus raw material) | n/a | 27.7% | 28.0% | [V] |
| PAT | 1,029 | 909 | **1,060** (+16.6%) | [V] |
| ROCE / ROE (screener) | 11% | 12% | **13% / 9.7%**. The company's ROCE ex-investments and cash is ~16% | [V] |
| Borrowings (screener) | 597 | 789 | **1,005** | [V] |
| Cash equivalents (screener schedule) | 50 | 68 | **106**. This **misses liquid investments** (screener investments were ₹2,262 / 2,118 / 1,582 Cr) | [V] |
| Net debt (company: gross debt minus liquid investments and cash) | **−1,514** (net cash) | **−1,062** | **−378** (net cash) | [V] Q1 FY27 presentation chart |
| ND/EBITDA (company) | −0.96× | −0.57× | **−0.16×** | [V] |
| Net debt (screener basis, cash only) | 547 | 721 | 899 | [E]. It overstates debt because liquid mutual funds are ignored |
| CFO / FCF (screener) | 1,794 / −93 | 1,713 / −435 | **2,024 / −614** | [V] |

**Valuation, 13-Oct-2026** [V screener]: price ₹1,098 (near its 52-week high of ₹1,148; low ₹746); m-cap **₹30,621 Cr**; P/E **27.3×**; book value ₹413, so **P/B 2.66×**; dividend yield 0.41%. **EV/EBITDA** [E]: ₹30,621 − ₹378 = ₹30,243 Cr, which is **12.0× TTM operating EBITDA** (₹2,519 Cr). Rating: CRISIL AA+/Stable [V].

### 3b. Q1 FY27 (Jun-26 quarter) and Q2 FY27 volumes

| Item | Q2 FY27 (volumes only) | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|---|
| Revenue (₹ Cr) | not reported | **5,455** (+23.3% YoY, +4.1% QoQ) | 5,240 | 4,423 | [V] presentation |
| Operating EBITDA (₹ Cr) | n/a | **765** (14.0%) | 727 (13.9%) | 580 (13.1%) | [V] |
| PAT (₹ Cr) | n/a | **351** (+20.6%) | 312 | 291 | [V] |
| Metallics: pellets + sponge + pig iron (t) | **9,43,020** @ ₹20,325 | 8,48,575 @ ₹22,399 | n/a | n/a | [V] Q2 sales release |
| Carbon long: billets + long products (t) | **4,32,553** @ ₹43,723 | 4,04,858 @ ₹45,777 | n/a | n/a | [V] |
| Carbon flat: CR, crash barrier, HR tube (t) | **81,493** @ ₹85,111 | 49,539 @ ₹86,815 | n/a | n/a | [V] |
| Stainless steel (t) | **29,847** @ ₹1,77,156 | 23,237 @ ₹1,75,925 | n/a | n/a | [V] |
| Specialty alloys / ferro (t) | **56,683** @ ₹1,12,792 | 51,479 @ ₹1,06,613 | n/a | n/a | [V] |
| Aluminium foil (t) | **5,434** @ ₹4,96,215 | 5,606 @ ₹4,83,467 | n/a | n/a | [V] |
| Total volume (lakh t) | **~15.49** (+12% QoQ) [E: sum] | **13.83** (+14% YoY vs 12.12) | n/a | 12.12 | [V] presentation |
| EBITDA/t (company, Q1 FY27) | n/a | Metallics ₹2,906; carbon steel ₹7,688; CR coil/sheet ₹8,444; stainless ₹10,194; specialty alloys ₹21,809; aluminium ₹53,661 | Metallics 3,238; CS 7,460; CR 7,739; SS 8,512; SA 18,780; Al 36,562 | n/a | [V] presentation p.38 |
| Blended EBITDA/t (computed) | n/a | ₹765 Cr ÷ 13.83 lakh t = **₹5,531/t** | n/a | ₹580 Cr ÷ 12.12 lakh t = ₹4,786/t | [E] |

In Q2, metallics realisation fell ~9% QoQ and long-steel realisation ~4.5%. This points to softer Q2 spreads in intermediates, with volumes up [E, from the release]. Note that the sales release's QoQ % text for carbon long is internally inconsistent (it says a "decrease" when the tonnes rose). The table numbers are used here.

### 3c. Steel-native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Capacity, current → post-expansion (MTPA) | Iron pellets **6.0 → 6.0**; beneficiation **0 → 3.0**; sponge iron/DRI **3.05 → 4.10**; pig iron/BF **1.22 → 1.53** (with a 1.2 MTPA sinter plant); coke oven **0.45 → 0.70**; billets **2.01 → 2.41**; TMT/wire rod/structural **2.07 → 2.16**; parallel-flange beams **0 → 0.40**; SBQ mill **0 → 0.80**; **hot strip mill 0 → 1.58**; colour-coated/CR **0.40**; specialty (ferro) alloys **0.22 → 0.24**; stainless billet **0.12 → 0.85** (with a 0.6 MTPA SS melt shop); SS finished long **0.15**, SS flat **0 → 0.60** (HR 0.6, CR 0.4); aluminium foil **24 → 42 kt** (plus 60 kt flat-rolled and 5 kt battery foil); railway wagons **4,800/yr**; captive power **467 → 677 MW** (782 MW incl. RE); renewables **9 → 105 MW**. Total metal capacity is **16.93 MTPA** | [V] Q1 FY27 presentation pp.25–35 |
| FY26 sales volumes | Total **49.46 lakh t (+25.6%** vs 39.39). Pellets 1.18 MT; sponge iron 0.90; pig iron 0.66; billets 0.15; finished long 1.55; flat 0.17; specialty alloys 0.22; SS long 0.09; aluminium foil 21,620 t. **FY27P 61.62 lakh t (+25%)** | [V] presentation pp.33–34, 45 |
| FY26 realisations (₹/t) | Carbon steel 43,043; specialty alloys 93,837; stainless ~1,40,443; sponge iron 23,695; pellets 9,085; aluminium foil ~3,79,805 | [V] presentation p.40–41, read off charts |
| EBITDA/t, FY26 (computed) | ₹2,333 Cr ÷ 49.46 lakh t = **₹4,717/t blended**. It is low because more than half the tonnes are metallics intermediates | [E] |
| Utilisation | Not disclosed by unit. Sponge and pig iron sales (1.56 MT) plus internal consumption feed 2.01 MTPA of billets; finished long sales of 1.55 MT on 2.07 MTPA ≈ **75%** [E] | [E] |
| Captive power | **~79% of power from captive plants at ₹2.65/kWh**, against a blended ₹3.30/kWh and a grid tariff of ₹5–7 | [V] presentation p.35 |
| Captive iron ore / coal | **0% captive iron ore.** Ore is bought from government miners on advance-deposit terms, and the company is doing "continuous due diligence" on ore assets. **Coal: bought from Coal India and imported.** The newly secured Phutamura block (~170 Mt) via Alom Solar has no timeline yet | [V] concall; BSE release |
| Capex | Planned programme **₹18,785 Cr**, of which **₹9,205 Cr (49%) has been incurred** since listing (₹6,286 Cr capitalised); ₹575 Cr in Q1 FY27. **Balance ~₹9,580 Cr over 3–4 years**, funded from internal accruals. The original post-IPO plan was ₹9,425 Cr | [V] presentation; concall |
| Capex per tonne [E] | Hot strip mill ₹5,400 Cr ÷ 1.58 MT = **~₹34,200/t**. SS flat chain ₹2,940 Cr ÷ 1.38 MT ≈ ₹21,300/t. SBQ mill ₹900 Cr ÷ 0.8 MT ≈ ₹11,250/t. Chandrapur MoU ₹50,000 Cr ÷ 9 MTPA ≈ **₹55,600/t** of finished steel | [E] from [V] |
| Guidance | ROE/ROCE **+600–700 bps by 2031**. FY31 vision: carbon finished steel sales 3.07 MT, stainless 0.61 MT, aluminium 47.1 kt, 4,704 wagons [V presentation p.33–34]. FY27 volume about 61.6 lakh t | [V] |
| Decarbonisation / CBAM | Coal-based DRI plus induction/electric furnaces and a small BF, which is carbon-intensive [K: coal-DRI routes are ~2.5–3.1 tCO2/tcs; Ministry of Steel green-steel taxonomy, Dec-2024, rates <2.2 t as green-graded]. Mitigation: waste-gas and WHRB captive power, 105 MW RE, Emerge Green Power investment. **CBAM:** exports are mainly ferro alloys and intermediates; ferro-alloys (FeMn/FeSi; CN 7202) are inside CBAM scope [K: EU Reg. 2023/956]. Shyam's EU share is not disclosed | [K]/[V] |

### 3d. Segment mix
Q1 FY27 revenue split [V presentation p.39, read off the chart]: **carbon steel products ~77%**, specialty alloys ~10%, stainless ~7–8%, aluminium foil ~5%. By value-add: the company targets ~80% of revenue from finished, value-added products by FY31 [primer; the presentation shows a "moving towards value added" chart]. Power is captive and not sold, so there is no separate power segment.

### 3e. Ownership (Sep-2026, screener) [V]
Promoters **74.59%** (unchanged since Mar-24). **DIIs 11.16%** (13.75% at Jun-26; 8.64% a year ago). **FIIs 5.29%** (2.97% at Jun-26). Public 8.71%, others 0.27%. Free float is ~25%.

### 3f. Concentration
Plants in West Bengal and Odisha (Sambalpur, Jamuria, Mangalpur, Kharagpur) plus Pithampur (stainless) and Giridih/Pakuria (aluminium). Customers are eastern-India construction, re-rollers and ferro-alloy buyers. Input dependence is on NMDC/OMC ore and Coal India coal.

### 3g. Story bullets
1. **A volume compounder with a net-cash balance sheet.** Volume grew +25.6% in FY26 and is planned at +25% for FY27. Q2 FY27 tonnes rose ~12% QoQ. Even after ₹9,205 Cr of capex it holds ₹378 Cr of net cash.
2. **Steady shift into value-added products.** Specialty alloys (₹21.8k/t), stainless (₹10.2k/t) and aluminium (₹53.7k/t) earn 3–18× the EBITDA/t of metallics (₹2.9k/t). The hot strip mill (1.58 MTPA, ₹5,400 Cr) is the big flat-steel step and is mostly unspent (₹169 Cr incurred).
3. **Moving from a secondary producer to integrated scale.** The 9 MTPA Chandrapur BF/DRI MoU (₹50,000 Cr) and the Phutamura coal block signal a jump toward integrated steel and captive coal. Both are non-binding or early-stage, and either could change the balance sheet.
4. **Captive power is the key cost edge.** 79% captive power at ₹2.65/kWh, rising to 677 MW thermal and 105 MW RE.

### 3h. Risks
DRI/long-steel spreads (metallics realisation fell 9% QoQ in Q2). No captive ore, so it is exposed to NMDC and auction-ore pricing. Capex execution, with the hot strip mill and stainless flat lines unspent. Leverage risk if Chandrapur goes ahead (₹50,000 Cr is 1.6× the current m-cap). Coal-DRI carbon intensity under future carbon pricing. A PMLA attachment matter at a subsidiary [primer; not re-verified]. P/E of 27× on a 9.7% ROE.

---
## 4. Sarda Energy & Minerals Ltd: NSE SARDAEN · BSE 504614

Fetched 2026-10-13. Still listed. **Perimeter:** SKS Power Generation (Chhattisgarh) Ltd, the 2×300 MW IPP at Binjkot, was acquired under IBC on **21-Aug-2024**, and the Supreme Court has ratified the acquisition. FY25 therefore holds ~7 months of SKS and FY26 the full year [V presentation]. **Recent events:**
- A subsidiary was declared **preferred bidder for the Avagudem manganese block** (Andhra Pradesh; ~0.70 Mt reserves) on 10-Oct-2026 [V: screener BSE announcement list].
- The **board meets 31-Oct-2026 for Q2 FY27 results** [V: BSE intimation, https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a17db98c-e70e-4545-afe3-620dd0bfd893.pdf].
- The AGM was held on 7-Oct-2026.

Primary documents [V]: Q1 FY27 investor presentation (Aug-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4ef9a1ab-5d4a-4975-80eb-5f814080e813.pdf ; Q1 FY27 concall transcript (3-Aug-2026), https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1b4e3e9b-1fd4-41ef-920d-f07a359217e3.pdf .

### 4a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 3,868 | 4,643 | **5,690** (+22.6% YoY) | [V] screener https://www.screener.in/company/SARDAEN/consolidated/ ; company matches |
| Operating profit (screener, before OI) | 798 | 1,237 | **1,787** | [V] |
| OPM (screener) | 21% | 27% | **31%** | [V] |
| Company EBITDA (**includes other income**) | 982 | 1,409 | **2,025** (29.3% of total income) | [V] presentation. Ex-OI it is ~1,788, which matches screener |
| Other income | 181 | 172 | 247 (company 237) | [V] |
| PAT | 524 | 702 | **1,109** (+58%) | [V] |
| ROCE / ROE (screener) | 15% | 15% | **17% / 15.1%** | [V] |
| Borrowings (screener) | 1,366 | 2,861 | **2,632** | [V] |
| Company borrowings (LT + ST) | 1,366 | 2,823 | **2,594**; Jun-26 gross ~2,486 | [V] presentation BS / debt chart |
| Cash & equivalents (screener schedule) | 768 | 608 | **864** | [V] |
| Company cash + investments | 1,379 | 1,400 | **2,509** (864 cash + 1,645 investments); "liquidity of more than ₹2,500 Cr" at 30-Jun-26 | [V] presentation BS; concall |
| Net debt (company) | n/a | n/a | **₹215 Cr (Mar-26)**; **net cash ₹22 Cr (Jun-26)**. "Net debt-free on both standalone and consolidated basis" | [V] presentation p.12 chart; concall |
| Net debt (screener basis, cash only) | 598 | 2,253 | **1,768** | [E]. It ignores ₹1,645 Cr of investments |
| ND/EBITDA (company) | n/a | n/a | **~0.1× (Mar-26)**; (0.03×) Jun-26 | [E]/[V] |
| CFO / FCF (screener) | 742 / 477 | 886 / 396 | **1,735 / 1,400** | [V] |

**Valuation, 13-Oct-2026** [V screener]: price ₹472 (52-week high/low ₹624/453, so near the low); m-cap **₹16,622 Cr**; P/E **14.8×**; book value ₹209, so **P/B 2.26×**; dividend yield 0.42%. **EV/EBITDA** [E]: ₹16,622 − ₹22 ≈ ₹16,600 Cr, which is **9.1× TTM screener operating profit** (₹1,824 Cr), or ~7.9× TTM company EBITDA including OI (~₹2,090 Cr). The rating was upgraded to **AA-** in FY26 [V presentation].

### 4b. Q1 FY27 (Jun-26 quarter)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | **1,608** (−1.5% YoY) | 1,254 | 1,633 | [V] |
| Company EBITDA (incl. OI) | **762** (44.4%, +9.4% YoY) | 352 | 697 | [V] |
| Screener operating profit | 653 (41%) | 348 | 617 | [V] |
| PAT | **478** (+9.4%), the highest ever. It **includes a one-off ₹110 Cr net benefit** (final project-cost true-up for the 113 MW Sikkim hydro). Ex-one-off ≈ ₹368 Cr (−16% YoY) | 155 | 437 | [V]; adjustment [E] |
| Thermal generation (MU) | 1,391 (captive 265 + IPP 1,126); IPP PLF **85.9%** | 1,242 | 1,537 | [V] |
| Hydro generation (MU) | 119. The Sikkim plant was **shut 18-Jun to 5-Jul-2026** after a transmission-tower collapse | 43 | 120 | [V] |
| Pellet production / sales (t) | 2,24,097 / 1,16,983 | 1,76,606 / 73,892 | 2,30,375 / 1,39,650 | [V] |
| Sponge iron production (t) | 76,712 | n/a | n/a | [V] |
| Billet production / sales (t) | 19,079 / 6,040 (−65% / −45%) | 45,548 / 7,069 | 54,097 / 10,951 | [V]. The 30 MW captive unit was being replaced; stable operations expected from mid-Aug-2026 |
| Wire rod production / sales (t) | 13,075 / 4,162 | 37,120 / 24,621 | 41,877 / 32,812 | [V] |
| Ferro alloys production / sales (t) | 41,648 / 42,274 (−13% sales) | 44,380 / 43,731 | 50,981 / 48,342 | [V]. A Siltara furnace was down 53 days and the Vizag captive power plant 23 days |
| Coal: domestic mined / Indonesia (49% JV) mined (t) | 3,33,792 / 3,03,619 | 3,68,829 / 3,99,936 | 4,61,240 / 4,02,310 | [V] |
| Realisations Q1 FY27 (₹/t) | Pellets 10,100; sponge 25,408; billets 40,047; wire rod 45,654; HB wire 47,383; FeMn 76,942; SiMn 79,215 | | | [V] presentation p.24 |
| Q2 FY27 | **Not reported**; board meeting 31-Oct-2026 | | | [V] |

### 4c. Steel-native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Metals capacity | Pellets **0.90 MTPA** (approval received to raise to **2.0 MT**; ₹500 Cr expansion); sponge iron **0.36 MTPA**; billets **0.30 MTPA**; wire rod **0.25 MTPA**; HB wire **45 kt**; ferro alloys **45 MVA Siltara + 102 MVA Vizag (147 MVA)**. The integrated steel line is "~1 MTPA" across stages | [V] presentation pp.17, 24 |
| Captive consumption | Pellets ~42% captive; sponge iron ~24%; billets ~70%; wire rod ~76% | [V] p.24 |
| FY26 volumes | Production: pellets 8,26,293 t (+1%); billets 2,04,827 t; wire rod 1,60,498 t (−5%); ferro alloys **2,00,095 t (+9%)**; hydro 664 MU (+31%); iron ore **1,48,366 t (−57%)**; domestic coal 1.80 Mt; Indonesia coal 1.57 Mt. Sales: pellets 4,43,276 t (−12%); billets 39,387; wire rod 1,19,873; ferro 1,95,274 (+8%); IPP power 3,753 MU (+86%); hydro 644 MU; Indonesia coal 1.66 Mt | [V] p.7–8 |
| Utilisation | Pellets 92% (0.83 of 0.9 MTPA); billets 68% (0.205 of 0.30); wire rod 64%; IPP PLF ~86% in Q1 FY27 | [E] |
| Energy capacity | Thermal **761.5 MW** (SKS 600 + Siltara 81.5 + Vizag 80); hydro **~168 MW** (Sikkim 113, Gullu 24, Rehar 24.9, Uttarakhand 4.8); solar 50 MW captive, delayed by right-of-way and now due by end-Q2 FY27. Energy capacity is 929 MW in FY26 against 191 MW in FY21. **Target FY30: thermal 1,362 MW (SKS 600 → 1,200 MW) + renewables 400 MW**. SKS brownfield EC is expected in ~9–11 months (terms of reference being finalised) | [V] presentation; concall |
| Power PPAs | **380 MW** of the 710 MW saleable capacity is tied up (≈330 MW of it at SKS) at **₹5–6/kWh**. The maximum SKS PPA quantity is 540 MW | [V] concall |
| Mining capacity | Iron ore mine **1.5 MTPA** (Rajnandgaon, Chhattisgarh; captive). Coal **Gare Palma IV/7 1.8 MTPA** (captive thermal power; won in the 2020–21 commercial auction). Washery 1.8 MTPA. **PT Tigadaya Minergy, Indonesia (49%)**, commercial coal sales. Upcoming coal: **Shahpur West 0.6 MTPA** (high-grade, for sponge iron and ferro; **commissioning by end-FY27**), Senduri ~0.6, Gare Palma IV/5 2.0, **Bartunga 2.1 MTPA** (JV, SEML 67%; opening ~end-FY28), taking total coal to **7.1 MTPA by FY30** ("quadruple"). Iron ore: **Surjagad Block-1 (Maharashtra)** composite licence executed May-2025, prospecting under way. Manganese: Avagudem (preferred bidder, Oct-2026) | [V] presentation p.14, 23; concall |
| Captive self-sufficiency | **Power ~100% captive** for metals (Siltara and Vizag CPPs plus hydro). **Iron ore: low.** FY26 captive output of 0.15 Mt against ~0.9 Mt of fines needed for 0.83 Mt of pellets is ≈**15–20%** [E]; the rest is bought. **Coal:** domestic mining of 1.8 Mt covers the thermal plants (domestic coal sold externally was only 0.16 Mt), while sponge and ferro need high-grade coal from Shahpur West, so it is currently bought or imported [V concall; E] | |
| EBITDA/t (metals) | Not disclosed by segment. Computed: Q1 FY27 metals EBITDA ≈ 30% of ₹762 Cr ≈ ₹229 Cr ÷ (pellet + billet + wire rod + ferro sales ≈ 1.69 lakh t) ≈ **~₹13,500/t** [E, rough; it includes pellet tonnes, and OI is in EBITDA] | [E] |
| Segment mix | **Energy ~70% of consolidated EBITDA in Q1 FY27** (stable PLF, the Sikkim true-up). Mining "supports captive requirements"; metals ~30% [V presentation p.5]. The primer's "~two-thirds from power and mining" for FY26 is consistent | [V] |
| Capex | Pellet expansion ₹500 Cr; Vizag WHRB ₹300 Cr; Arunachal 66 MW hydro (majority stake; land acquired); three Chhattisgarh small hydros of 74 MW; SKS +600 MW (cost not yet disclosed). All are funded from internal accruals. Board aim: **double EBITDA (on the FY26 base) over the medium term** | [V] presentation p.15; concall |
| Capex per tonne / MW | Not disclosed for SKS. Brownfield coal plants typically cost ~₹7–9 Cr/MW [K: CEA/industry benchmarks; not company data] | [K] |
| Decarbonisation / CBAM | Hydro (168 MW, ~640 MU/yr) and 50 MW solar against 761.5 MW of coal thermal, so the group's Scope-1 footprint is coal-power heavy. The Vizag WHRB cuts emissions. **CBAM:** ferro-alloys (FeMn, SiMn) are in EU CBAM scope [K: Reg. 2023/956, CN 7202]. The Vizag subsidiary (SMAL) is the exporting unit; the EU share was not disclosed in Q1 materials | [K]/[V] |

### 4d. Ownership (Jun-2026; the Sep-2026 pattern was not yet on screener) [V]
Promoters **73.16%** (unchanged since Sep-24). FIIs 3.51%, DIIs 3.47%, public 19.84%.

### 4e. Concentration
All assets are in Chhattisgarh except Vizag (ferro), Sikkim, Uttarakhand and Arunachal (hydro) and the Indonesian coal JV. The power PPAs are with state discoms.

### 4f. Story bullets
1. **This is now an energy and mining company with a metals tail.** ~70% of EBITDA comes from energy. SKS (600 MW, IPP PLF ~86%) is being doubled to 1,200 MW, and 380 MW of PPAs at ₹5–6/kWh give visibility.
2. **Coal mining is being quadrupled.** It goes from 1.8 to 7.1 MTPA by FY30. Shahpur West (high-grade, end-FY27) finally gives captive coking-grade/high-grade coal for DRI and ferro.
3. **The balance sheet is net-debt-free again** (net cash ₹22 Cr at Jun-26) despite the ~₹2,600 Cr SKS-linked gross debt.
4. **Metals had a weak Q1 FY27**: billets −65% and wire rod −69% on the captive-power replacement. Headline PAT is flattered by the ₹110 Cr Sikkim one-off.

### 4g. Risks
Power tariffs and merchant prices, and hydrology. Regulatory approvals for the SKS EC and the coal blocks. Ferro-alloy prices (manganese ore, Chinese demand). The low share of captive iron ore. Coal-power ESG perception. Promoter concentration (73%).

---
## Mini summary grid (batch 2). Basis: consolidated FY26; m-cap, P/E and P/B as of 13-Oct-2026 [V screener]; EBITDA = screener operating profit unless noted

| Metric | Lloyds Metals (LLOYDSME) | Jindal Stainless (JSL) | Shyam Metalics (SHYAMMETL) | Sarda Energy (SARDAEN) |
|---|---|---|---|---|
| FY26 revenue (₹ Cr) | 17,113 | 42,955 | 18,552 | 5,690 |
| YoY growth | +154.6% (TEIL consolidated from Jul-25) | +9.3% | +22.4% | +22.6% (full year of SKS) |
| EBITDA (₹ Cr) | 6,205 (company 6,140) | 5,482 (company 5,560) | 2,333 (operating) | 1,787 (company 2,025 incl. OI) |
| EBITDA margin | 36.3% | 12.8% | 12.6% | 31.4% |
| PAT (₹ Cr) | 3,829 | 3,185 | 1,060 | 1,109 |
| Net debt (₹ Cr) | ~19,000 consolidated (Jun-26, company); standalone 5,616 | 2,950 (Jun-26, company) | **−378 net cash** (Mar-26, company) | 215 (Mar-26); **−22 net cash** (Jun-26) |
| ND/EBITDA | ~2.3× TTM consolidated; ~1.0× standalone | 0.53× | −0.16× | ~0.1× → (0.03×) |
| M-cap (₹ Cr) | 1,02,055 | 59,479 | 30,621 | 16,622 |
| P/E (TTM) | 21.4× | 18.1× | 27.3× | 14.8× |
| P/B | 7.4× | 3.0× | 2.66× | 2.26× |
| EV/EBITDA (TTM) [E] | ~14.9× | ~11.2× | ~12.0× | ~9.1× |
| ROCE (screener) | 27.3% | 19.3% | 13.0% | 16.9% |
| Key capacity | Iron ore EC 55 MTPA ROM (FY27 guide 26 MnT); pellets 8 MTPA (→12); DRI 0.7 (→1.2); 1.2 MTPA WRM steel by Mar-27 | Stainless melt 4.2 MTPA (incl. 1.2 MTPA Indonesia); CR 2.0 → 2.67 MTPA by FY28 | 16.93 MTPA total metal: pellets 6.0, DRI 3.05, billets 2.01, long 2.07; HSM 1.58 MTPA planned | Thermal 761.5 MW + hydro 168 MW; pellets 0.9 MTPA; ferro 147 MVA; coal 1.8 → 7.1 MTPA |
| FY26 main volume | Iron ore sales 16.18 MnT (+71%); pellets ~2.6 MnT; DRI 480 kt (+56%) | 2.566 MT stainless (+8%) | 49.46 lakh t, all products (+25.6%) | Ferro alloys 1.95 lakh t (+8%); IPP power 3,753 MU (+86%) |
| EBITDA/t | Ore ₹1,930; pellets ₹4,657; DRI ₹6,643 (company, FY26) | ₹16.8k standalone / ₹21.7k consolidated basis (FY26, E); Q1 FY27 ₹22.9k (E) | Blended ₹4,717 (FY26, E); metallics ₹2.9k, carbon steel ₹7.7k, stainless ₹10.2k (Q1 FY27, company) | Metals ~₹13.5k (Q1 FY27, rough E); not disclosed |
| Captive ore / coal / power | Ore 100% / coal 0% / power partial (CPP + 39 MW RE) | No iron ore or coal; nickel partial via Indonesian NPI JV; scrap 70–90% of feed | Ore 0% / coal 0% (Phutamura pending) / power **~79%** | Ore ~15–20% (E) / coal ~100% for thermal, Shahpur West for DRI by end-FY27 / power ~100% |
| Q1 FY27 | Rev 7,354; EBITDA 2,782; PAT 1,734 | Rev 11,279; EBITDA 1,329; PAT 769; vol 581 kt (−7%) | Rev 5,455; op. EBITDA 765; PAT 351; vol 13.83 lakh t (+14%) | Rev 1,608; EBITDA 762; PAT 478 (incl. ₹110 Cr one-off) |
| Q2 FY27 results | Not out | Not out | Not out; volumes out (15.49 lakh t, +12% QoQ) | Not out (board 31-Oct) |

---

## PRIMER ISSUES

Primers were read via the cover strip, the "What's new" box, the snapshot and the sections, followed by greps. Line references are to the HTML (`primers/<file>.html`) where given, otherwise to the section name. "Correct" figures are from this session's verified research above.

### A. `primers/lloyds-metals.html` (last refreshed 02-Jul-2026)
1. **Missing Q1 FY27.** The primer stops at FY26. Q1 FY27: consolidated revenue ₹7,354 Cr (+209%), EBITDA ₹2,782 Cr (37.8%), PAT ₹1,734 Cr; standalone EBITDA margin 39.2%; pellets at 100% utilisation (1.69 MnT produced). Source: Q1 FY27 presentation [V].
2. **Missing major perimeter change: Thriveni Earthmovers and Infra (TEIL) is a 79.82% *subsidiary* (from 1-Jul-2025).** §07 still frames Thriveni only as a "co-promoter … the paid mining contractor". Lloyds now consolidates the MDO business (TEIPL Q1 FY27 revenue ₹2,672 Cr) and injected a further ₹606.76 Cr (shares credited 8-Oct-2026). Sources: HDFC Sky [V]; BSE filing 8-Oct-2026 [V]. The related-party discussion needs reframing.
3. **Stale slurry-pipeline status.** §04 and §05 say "Lloyds is building a ~195 km slurry pipeline … >₹500 a tonne", and the FY26 timeline says "slurry pipeline in progress". In fact the **85 km Hedri–Konsari line (10 MTPA) is commissioned and operating**. The ~195 km Hedri–Ghugus line (~16 MTPA, saving ₹800–1,000/t) is the next phase. Source: Q1 FY27 presentation pp.27–31 [V].
4. **Stale steel-plant timing and size.** The primer says the "integrated steel plant at Konsari … first production around FY28, ramping toward ~1 million tonnes" (§03 and §04 timeline "~FY28 (target)"; §10 "targeted ~FY28"). In fact the **first 1.2 MTPA long-products (WRM) plant is to be commissioned by Mar-2027 (Q4 FY27)**. The larger Konsari ISP (originally ~3 MTPA) is under study for upsizing, with no board approval. Source: Q1 FY27 concall [V].
5. **Net-debt framing is incomplete.** The primer cites a "~1.0–1.5× targeted net debt/EBITDA band … no equity planned". Consolidated net debt is **~₹19,000 Cr (~2.3× TTM EBITDA)**, mostly Chemaf-related; standalone is ₹5,616 Cr. Separately, share count rose from 523 mn to 563 mn in FY26 (+7.6%), which conflicts with "no equity planned". The mechanism (warrants or preferential allotment) was not verified this session. Source: Q1 FY27 presentation and concall [V].
6. **Stale valuation.** The cover and §09 give "~27× trailing P/E". The **screener P/E is now 21.4×** (13-Oct-2026). M-cap ₹1,02,055 Cr happens to match the primer's "~₹1.02 L Cr", but the price is ₹1,812. P/B 7.4× ("several times book" should be quantified). Source: screener [V].
7. **EBITDA margin basis.** The cover says "~34% EBITDA operating margin (FY26)". The FY26 *consolidated* margin is **36.3% on screener and 35.9% on the company basis**. ~34% matches *standalone* (33.0%). Source: screener, presentation [V].
8. **DRC deal description is incomplete.** §08 has "Lloyds ~49% … ~US$30 million of equity … ~US$1 billion legacy debt". It omits the **50% Surya Mines** stake (12,000 TPA SX-EW; 2,754 t Cu in Q1 FY27), the Chemaf EP-1 shutdown, and management's statement that Chemaf debt restructuring should cut it by ~40–50%, expected in Q2 FY27. **Panguna (PNG) copper-gold** (lease signed) and the **Tata Steel BRPL 49.99% pellet-conversion JV** are also missing. Source: Q4 and Q1 FY27 presentations, concall [V].
9. **Thriveni "~18%" holding is not verified.** Encumbered shares were 16.88% of capital after the 2-Sep-2026 pledge release [S: filingreader]. The promoter total is 61.61% (Sep-26), not "~62% (Mar-26 61.65%)". This is a minor update.
10. **Missing guidance.** FY27 guidance: iron ore 26 MnT, pellets 7.75–8 MnT, DRI 825 kt. Capex ~₹11,000 Cr a year for two years, then ₹15–20k Cr. Source: presentation p.12, concall [V].
11. **Banned or stock phrases:** "Think of Lloyds Metals as a company that got hold of a golden goose" (§00 "In plain terms"); "a re-rated commodity stock has a long way to fall" (§11 bottom line); "A high-risk, high-variance call option on battery metals" (§10, close to the banned "call option on the future"); "Both are right at different points in the cycle" (§09, a variant of the banned "both can be right").

### B. `primers/jindal-stainless.html` (last refreshed 03-Jul-2026)
1. **Missing Q1 FY27.** Revenue ₹11,279 Cr (+10.5%), EBITDA ₹1,329 Cr, PAT ₹769 Cr. Volume **581 kt, −7.3% YoY**, because of the Apr-26 LPG and propane shortage. Net debt ₹2,950 Cr (0.53×). Source: Q1 FY27 presentation and concall [V].
2. **Stale valuation and ownership.** The cover and §10 say "~₹57,600 Cr market cap (Jun '26) … ≈₹698/share … P/E ~17.8×". Now: **₹59,479 Cr, ₹721, P/E 18.1×, P/B 3.0×** (13-Oct-2026). "Promoter holding 62.04% Mar 2026" is now **62.54% (Sep-26)**, with FIIs down to 20.07%. Source: screener [V].
3. **Anti-dumping status is out of date.** §09 says only "DGTR opened a probe (Sept 2025) … Duties, if imposed…". In fact the **DGTR extended the deadline by six months to 28-Mar-2027** (notification 25-Sep-2026), and the public hearing was on 9-Sep-2026. Sources: SteelOrbis [V]; concall [V].
4. **QCO status is vague.** The primer says relaxations are "periodically extended and fought over". Management says the stainless **QCO relaxation runs to Mar-2027**, with no reversal expected before then. Source: concall [V].
5. **Missing acquisition: Rathi Super Steel** (long products; ~70% utilisation in Q1 FY27) is not mentioned anywhere. Source: concall [V]; acquisition year [K].
6. **EBITDA/t basis is not stated.** The primer says "In FY26 that was about ₹21,300–21,700 per tonne". That is *consolidated* EBITDA (₹5,560 Cr) divided by *standalone* volume (2.566 MT). On a standalone basis it is **₹16,843/t** (₹4,322 Cr ÷ 2.566 MT). The basis should be stated. Source: Q4 FY26 presentation [V]; arithmetic [E].
7. **Indonesia melt-shop ownership is unverified.** §08 says the "Indonesia melt shop (SMS) >₹700 Cr … 1.2 MTPA … (49% JV)". Management calls it "our recently commissioned 1.2 MTPA … melt shop in Indonesia", still stabilising production and certifications. The 49% figure belongs to the NPI JV; the melt-shop holding was not confirmed this session and should be checked. Also, the whatsnew box says "capacity now 4.2 MTPA", while the Q4 FY26 deck said JSL was "ramping up … to reach 4.2 MTPA … in FY27". Source: concall; Q4 deck [V].
8. **Missing:** guidance (FY27 capex ₹2,400–2,600 Cr; CR to 2.67 MTPA by FY28; HRAP by end-Q3 FY27); the **EU safeguard quota cut** (management says it hits EU volumes more than CBAM does); scrap share 85–90% at Hisar and 70–75% at Jajpur. Source: concall [V].
9. **Banned or stock phrases:** "Think of JSL as a giant metal kitchen" (§00); "The story over the next few years will be written in three numbers each quarter" (§11; banned "the story will be written in"). "The honest read" appears once (§02), which is allowed.

### C. `primers/shyam-metalics.html` (last refreshed 30-Jun-2026)
1. **Missing Q1 FY27 and Q2 FY27 volumes.** Q1: revenue ₹5,455 Cr (+23%), operating EBITDA ₹765 Cr (14.0%), PAT ₹351 Cr, volume 13.83 lakh t (+14%). Q2 FY27 sales release (6-Oct-2026): ~15.49 lakh t (+12% QoQ); metallics realisation −9% QoQ; stainless 29,847 t (+28% QoQ). Source: presentation and BSE release [V].
2. **Stale capex programme.** The primer says "~₹16,000 Cr multi-year capex programme — of which roughly ₹8,600 Cr (~53%) is already spent" (§00, §08). The company now states **₹18,785 Cr planned, ₹9,205 Cr (49%) incurred**, with ~₹9,580 Cr to go over 3–4 years. Source: Q1 FY27 presentation p.37, concall [V].
3. **Missing major events:** the **9 MTPA, ₹50,000 Cr Chandrapur (Maharashtra) integrated steel MoU** (2-Oct-2026, non-binding; Phase I 3.75 MTPA) and the **Phutamura coal block** (~170 Mt; via Alom Solar; 13-Oct-2026). These change the "secondary/DRI" profile and the net-cash thesis. Source: BSE releases [V].
4. **Capacity table omits the biggest projects:** the **1.58 MTPA hot strip mill (₹5,400 Cr)**, BF/pig iron 1.22 → 1.53 MTPA, 3 MTPA beneficiation, 0.4 MTPA parallel-flange beams, the 0.8 MTPA SBQ mill (mentioned only in the ₹2,700 Cr box) and 4,800 wagons a year. Renewables are given as "9 → 109 MW"; the company says **105 MW**. Source: presentation pp.25–34 [V].
5. **Stale project status.** The primer says the "aluminium foil plant nears commissioning". In fact the **aluminium foil facility was commissioned in Jul-2026**, the **colour-coated line in Apr-2026** (CR capacity 0.25 → 0.40 MTPA) and the 0.15 MTPA CRM in Apr-2026. Source: concall; presentation p.30 [V].
6. **Stale valuation.** The primer gives "~₹27,000 Cr market cap (Jun '26) … ~25× trailing P/E … ~2.3× book". Now: **₹30,621 Cr, P/E 27.3×, P/B 2.66×**; EV/EBITDA ~12.0× (still valid). Source: screener [V].
7. **Stale shareholding.** Only promoter holdings (74.6%) are cited. As of Sep-26, **DIIs are 11.16% (13.75% at Jun-26) and FIIs 5.29%**, with institutional ownership rising sharply. Source: screener [V].
8. **Missing steel KPIs:** captive power is 79% of consumption at ₹2.65/kWh. Q1 FY27 segment EBITDA/t: metallics ₹2,906, carbon steel ₹7,688, stainless ₹10,194, specialty alloys ₹21,809, aluminium ₹53,661. There is no captive iron ore or coal (yet). Source: presentation [V].
9. **Banned or stock phrases:** "Think of Shyam Metalics as a self-sufficient steel factory town" (§00). "The honest framing" appears once (§06), which is allowed.

### D. `primers/sarda-energy-minerals.html` (last refreshed 16-Jul-2026)
1. **Missing Q1 FY27.** Revenue ₹1,608 Cr, EBITDA ₹762 Cr (incl. OI), PAT ₹478 Cr, which **includes a ₹110 Cr one-off** Sikkim hydro tariff true-up; underlying PAT ~₹368 Cr (−16% YoY). Billets −65% and wire rod −69% on the 30 MW CPP replacement. Sikkim was shut 18-Jun to 5-Jul. Source: Q1 FY27 presentation [V].
2. **Missing coal-mine pipeline.** There is no mention of **Shahpur West** (0.6 MTPA high-grade coal, commissioning by end-FY27, for sponge and ferro), **Bartunga** (2.1 MTPA JV, SEML 67%, opening ~end-FY28), Senduri or **Gare Palma IV/5** (2.0 MTPA). The primer says "quadruple coal mining" without the mines. Target: **7.1 MTPA by FY30**. Source: presentation p.14, 23; concall [V].
3. **Missing assets and events:** the **66 MW Arunachal hydro** (majority stake), the **Indonesian coal JV PT Tigadaya Minergy (49%)** (1.57 Mt mined in FY26), the **Surjagad Block-1 iron-ore composite licence** (Maharashtra, May-2025), the **Avagudem manganese block** (preferred bidder, 10-Oct-2026), the Vizag WHRB (₹300 Cr) and three small hydros (74 MW). Source: presentation; screener announcements [V].
4. **Wrong captive-thermal capacity.** §06 says "Captive thermal (Siltara + Vizag) ~130+ MW". The company gives thermal 761.5 MW = SKS 600 + Siltara **81.5** + Vizag **80** = **161.5 MW** captive. Source: presentation p.18 [V].
5. **Power target differs.** The primer says "roughly double power capacity toward ~1,720 MW by FY30". The company says **thermal 1,362 MW + renewables 400 MW = ~1,762 MW** by FY30, up from 929 MW in FY26. Source: presentation p.14 [V].
6. **"Captive iron ore" is overstated.** The primer says "owns its coal, its iron ore and its electricity". Captive iron-ore output was only **0.148 Mt in FY26 (−57% YoY)**, against 0.83 Mt of pellet production. Ore self-sufficiency is ~15–20% [E]. The thermal coal is captive; the high-grade coal for DRI and ferro is not, until Shahpur West. Source: presentation p.7 [V].
7. **Balance-sheet framing.** The primer says "gross debt … ~₹2,632 Cr … broadly net-debt-light". The company now says it is **net-debt-free on a consolidated basis** (net cash ₹22 Cr at Jun-26; liquidity >₹2,500 Cr). Screener's ₹864 Cr cash excludes ₹1,645 Cr of investments. Source: concall; presentation [V].
8. **Stale valuation.** The primer gives "~₹17,400 Cr market cap (mid-2026) … ~15–18× trailing P/E". Now: **₹16,622 Cr, P/E 14.8×, P/B 2.26×**; the stock is near its 52-week low (₹453). Source: screener [V].
9. **PPA detail missing.** 380 MW of 710 MW saleable power is under PPAs (≈330 MW at SKS) at ₹5–6/kWh. The SKS EC timeline is ~9–11 months. Source: concall [V].
10. **Banned phrases:** none found. ("Two ways to see it collide here" in §10 is acceptable.)

### Figures not verified this session
- Lloyds: the Thriveni ~18% stake (only the pledge-snippet 16.88% was seen); the mechanism behind the FY26 share-count increase; the exact consolidated Q1 FY27 segment split (PDF chart text garbled); FY26 pellet sales (~2.6 MnT, read off a chart).
- JSL: the Indonesian melt-shop ownership %; India-only melt capacity (~3.0 MTPA is inferred); captive ferrochrome and captive power capacities ([K] only).
- Shyam: the exact Mar-26 gross debt (the chart shows ~₹957–1,050 Cr; screener ₹1,005 Cr); segment revenue % (read off a chart); the PMLA matter (primer claim, not re-checked).
- Sarda: Indonesian coal JV capacity (the table lists 0.9 MTPA, but FY26 output was 1.57 Mt); metals EBITDA/t (rough estimate); Sep-26 shareholding not yet on screener.
