# Indian City Gas & LNG (Gas Transmission || LPG/CNG/PNG/LNG Supplier): Research Dossier, Part 1 (Industry)

Compiled 21-Oct-2026 for the writer agent. This is source material, not prose for publication.
- **Part 1 (this file)** is the industry dossier (brief-industry.md §0–12 plus sections A–H).
- **Parts 2/3** (company fact packs, KPI grid, reconciliation) are in `_cloud/gas-distribution-companies-1.md`, written by a separate agent. Company numbers here are illustrations only. Where the two files disagree, the company file wins on company figures, and this file wins on industry and policy figures.

**Display name:** City Gas & LNG. **Slug:** gas-distribution. **Tier B, 5 members:**

| Member | NSE | BSE | Archetype | Primer |
|---|---|---|---|---|
| Adani Total Gas | ATGL | 542066 | CGD, high-growth new GAs (Adani 37.4% + TotalEnergies 37.4%) | adani-total-gas.html |
| Indraprastha Gas | IGL | 532514 | CGD, mature metro (Delhi-NCR), CNG-heavy (GAIL 22.5% + BPCL 22.5%) | indraprastha-gas.html |
| Mahanagar Gas | MGL | 539957 | CGD, mature metro (Mumbai), CNG-heavy (GAIL 32.5% [K]) | mahanagar-gas.html |
| Petronet LNG | PETRONET | 532522 | LNG regasification terminal (GAIL/IOC/BPCL/ONGC 12.5% each) | petronet-lng.html |
| Aegis Logistics | AEGISLOG | 500003 | LPG/liquid port terminals + LPG sourcing and distribution (owns ~50.1% of listed Aegis Vopak Terminals) | aegis-logistics.html |

**Context names that are NOT members:** GAIL (gas transmission and marketing; primer gail-india.html), Gujarat Gas (renamed **Gujarat Energy** after merging with GSPC/GSPL, effective 1-May-2026 [V-snip PL/multibagg]), GSPL, Aegis Vopak Terminals (AEGISVOPAK; separate sub-sector, primer aegis-vopak-terminals.html), Torrent Gas, Think Gas, AG&P Pratham, IRM Energy (listed but not in our list), BPCL/HPCL/IOC CGD arms, IOAGPL (IOC-Adani 50:50 JV), and the LNG terminals of Shell (Hazira), GSPC LNG (Mundra), Adani-Total (Dhamra), IOC (Ennore), HPCL (Chhara), Petronet (Kochi), and the Dabhol terminal (GAIL/NTPC-linked Konkan LNG).

### Confidence tags
- **[V]** = fetched this session from a primary page. **None in this file.** WebFetch could not resolve hosts and the sandbox proxy refused direct curl (403 connect_rejected) for every host tried (PIB, PPAC, PNGRB, Reuters, ET, BS, Mint, screener, Wikipedia, Petronet). Every web figure below was therefore verified only through search-result summaries.
- **[V-snip]** = verified this session from a search-result summary of a named article or document (publisher and date given inline). Treat it as good but secondary. Before printing a number that carries an argument, spot-check it against the named source.
- **[K]** = well-established fact from memory, source named, not re-fetched this session.
- **[E]** = estimate, composite or arithmetic by the compiler. Present it as "approx." or as a range.
- **[primer]** = from our own primers in `/primers/` (FY26 basis, refreshed 3–19 Jul 2026).

### Units, conventions and FX
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All five members have a March year-end.
- **FX: ₹94.9 = US$1 (19-Oct-2026)**. All USD→₹ conversions in this file use this rate unless a period rate is stated. Earlier rates for context: ~₹83.5 in FY25 and ~₹86–88 in FY26 [K/E]. **Rupee depreciation is itself a gas-cost driver**, because APM, HPHT and LNG are all priced in dollars. ATGL cited "currency depreciation" as a reason its Q1 FY27 gas cost rose 39% [V-snip IANS 21-Jul-2026].
- **Gas volume:**
  - **scm** = standard cubic metre. **mmscm** = million scm. **mmscmd** = million scm per day. **bcm** = billion cubic metres (1 bcm/yr ≈ 2.74 mmscmd).
  - **Energy:** mmbtu = million British thermal units. TBTU = trillion BTU = 1 million mmbtu.
  - **Conversion used in this file: 1 mmbtu ≈ 25.2 scm** (at a GCV of 10,000 kcal/scm, the basis on which Indian domestic gas prices are notified).
    - At a GCV of 9,400 kcal/scm (typical of lean R-LNG/domestic gas) the figure is ~26.8 scm.
    - The difference is ~6%. Always state which one is used.
  - **₹ per scm from $ per mmbtu:** $1/mmbtu × ₹94.9 ÷ 25.2 ≈ **₹3.77 per scm**.
    - APM gas at $7 ≈ ₹26.4/scm.
    - LNG at $12 delivered ≈ ₹45/scm.
    - Spot LNG at $21 ≈ ₹79/scm.
    - All three are before transport, taxes and compression [E].
  - **LNG:** 1 tonne of LNG ≈ 52 mmbtu ≈ 1,310 scm. So **1 mtpa ≈ 52 TBTU/yr ≈ 1.31 bcm/yr ≈ 3.6 mmscmd** (use 3.6; some sources use 3.7–3.8 at lower GCV) [K].
    - Check: Petronet Dahej 22.5 mtpa × 52 TBTU = 1,170 TBTU/yr ≈ 292 TBTU/quarter. Q1 FY27 processed 192 TBTU → 66% utilisation, which matches the company-reported 66% [V-snip indianmasterminds/Baroda BNP].
  - **CNG:** sold per **kg**. 1 kg CNG ≈ **1.39–1.45 scm** (IGL/MGL convention ~1.4) [K]. So EBITDA of ₹5.4/scm ≈ ₹7.6/kg.
  - **LPG:** sold per kg/cylinder. Domestic cylinder 14.2 kg; commercial 19 kg. MT = metric tonne. KL/cbm = kilolitre/cubic metre (liquid tankage).
  - **Crude:** Indian crude basket (ICB) in $/bbl.

---

## READ THIS FIRST: twelve definitional traps

1. **₹/kg vs ₹/scm.**
   - CNG is priced and quoted per kg. PNG and all CGD margins are quoted per scm. Some brokers quote CGD EBITDA "per kg".
   - Rule: **divide ₹/kg by ~1.4 to get ₹/scm.**
   - "Delhi CNG ₹86.98/kg" ≈ ₹62/scm, inclusive of excise and VAT [E].
2. **EBITDA/scm depends on its denominator.** The industry KPI is EBITDA ÷ total sales volume (scm), and it is usually derived by analysts.
   - Company-reported and analyst-derived figures differ because of three things: the treatment of other operating income, one-offs (IGL's FY26 includes a ~₹114 Cr reversal of an OMC dealer-margin item [primer]), and standalone vs consolidated volume.
   - MGL FY26: the primer says "~₹8.3/scm", but ₹1,451 Cr ÷ (4.585 mmscmd × 365 = 1,673 mmscm) = **₹8.67/scm** [E]. Always state the method.
3. **APM vs New-Well Gas (NWG) vs HPHT/deepwater vs R-LNG are four different prices.** Section 7 has the full table. In brief:
   - **APM** (legacy ONGC/OIL nomination fields): 10% of the ICB, floor $4, **ceiling $6.50 → $6.75 (Apr-2025) → $7.00 (Apr-2026)**. The formula price for Oct-2026 is reported at $11.22, so the **ceiling binds** [V-snip angelone/lapaasvoice Oct-2026].
   - **NWG** (new wells in nomination fields): a premium over APM (10–20%), or 12% of ICB in GAIL's CGD contracts. Reported "up to $7.70" for Oct-2026 [V-snip]. IGL's Apr-2025 filing priced NWG at **12% of ICB** [V-snip The Week 16-Apr-2025]. **Sources conflict; flag.**
   - **HPHT/deepwater ceiling:** **$9.89 for Oct-2026 to Mar-2027**, up from $8.90 for Apr–Sep 2026 [V-snip angelone Oct-2026].
   - **R-LNG** (imported): term contracts at a Brent slope (Qatar ~12–12.67%), plus spot/JKM, plus regas, plus pipeline tariff.
   - "Gas cost" for a CGD company is a blend of all four. **The mix, not any one price, drives margins.**
4. **"Allocation %" has three denominators.** Each is quoted as if it were the same number:
   - (a) APM as a % of the CGD company's **CNG-T + PNG-D requirement**. Example: ATGL CNG ~36% in Q4 FY26 from 41% the prior quarter [primer]. IGL CNG 37% → 51% after the Jan-2025 restoration [V-snip angelone].
   - (b) APM as a % of **total CGD requirement**: ~34% vs 51% a year earlier, per The Week, Apr-2025 [V-snip].
   - (c) The MoPNG **pro-rata ratio of "projected demand"**: 54.68% Q3 FY25, 55.68% Q1 FY26, 54.74% Q2 FY26 (projected) [V-snip Energetica]. This includes NWG.
5. **Gross revenue includes central excise (CGD).**
   - Natural gas is outside GST. CNG bears **central excise of 14%** [K] plus state VAT (Delhi 5% on CNG [K]; other states up to 14.5–15% on gas, per FIPI [V-snip]). IGL/MGL/ATGL show revenue **including excise**, then deduct excise as an expense.
   - Revenue growth can be pure price pass-through. **Use volume and EBITDA, never revenue, for CGD growth.**
6. **Petronet's revenue is mostly the value of the gas.**
   - Petronet buys Qatar LNG on back-to-back terms and resells it, so revenue (₹43,495 Cr in FY26) moves with LNG prices [primer]. The earnings engine is a **regas tariff (~₹66–69/mmbtu at Dahej)** plus a marketing margin, plus use-or-pay recoveries.
   - Revenue fell in FY26 while PAT was flat (₹3,926 → ₹3,843 Cr) [primer].
7. **Regas tariff escalation is contractual, not regulated (yet).**
   - Dahej's tariff has historically **escalated ~5%/yr**: ₹62.91/mmbtu in 2024 → ~₹66.06 in 2025 → ~₹69.36 projected for 2026 [V-snip Argus Dec-2025].
   - Petronet reportedly offered GAIL **₹52.05/mmbtu** on the new 5 mtpa expansion and up to ₹30/mmbtu cuts from 2028 [V-snip Argus, unconfirmed by the companies].
   - Kochi's long-term tariff is ~₹114.5/mmbtu [V-snip Argus].
   - PNGRB has power to regulate terminal tariffs, but terminals are currently exempt from common-carrier rules [K]. "Will PNGRB regulate Dahej?" is a live overhang [primer].
8. **"Use-or-pay" vs throughput.**
   - **Use-or-pay:** capacity holders pay for booked regas capacity whether used or not.
   - **Take-or-pay:** the buyer pays for contracted LNG volume whether lifted or not; this sits on the Qatar SPA.
   - Utilisation can fall while revenue holds. Petronet's Q4 FY26 beat included **use-or-pay recoveries** [primer, JPMorgan].
   - **Force majeure suspends both.** Q1 FY27: Qatar declared FM from 28-Feb to 30-Jun-2026 and no long-term cargo was loaded [V-snip PL/indianmasterminds].
9. **Aegis has two businesses, and revenue lies.**
   - **LPG sourcing & distribution** (buy LPG abroad, sell to OMCs and industrial/auto-LPG users): ₹7,689 Cr of FY26 revenue (~92%) on a thin margin.
   - **Terminals:** liquid revenue ₹644 Cr with ₹472 Cr EBITDA, plus LPG terminalling [primer].
   - The terminal assets are now mostly inside **Aegis Vopak Terminals (AVTL)**, a listed ~50.1% subsidiary (listed 2-Jun-2025). Aegis consolidates AVTL, so minorities take ~49.9% of AVTL profit.
   - **Liquid** terminals (chemicals, POL, vegetable oils; measured in KL/cbm) ≠ **gas** terminals (LPG, cryogenic/pressurised; measured in MT static and MT throughput). Throughput (5.15 MT LPG in FY26 [primer]) ≠ static capacity (~226,000 MT LPG [primer]).
10. **ATGL has three bases.**
    - Standalone vs consolidated, and "including IOAGPL JV". The JV is 50:50 with IOC and equity-accounted.
    - Example, Q1 FY27: volume 303 mmscm standalone vs **496 mmscm including the JV** [V-snip IANS]. CNG stations 705–707 standalone vs 1,167–1,169 including the JV [primer; V-snip].
    - ATGL "revenue" also includes small EV-charging, CBG and LNG-retail lines. They are immaterial to EBITDA today.
11. **Marketing exclusivity ≠ infrastructure exclusivity.**
    - Under PNGRB's CGD authorisation regulations, **infrastructure exclusivity runs 25 years**: only the authorised entity may build the network.
    - **Marketing exclusivity** (sole seller of gas) was **5 years** for older GAs and **8 years** for 9th–11th round GAs, and can be extended [primer; K].
    - IGL's Delhi and MGL's Mumbai **marketing exclusivity lapsed long ago**. Third-party sale via open access is legally possible, but in practice it has not happened at scale [primer; K].
    - IGL/MGL's 2008-era litigation over PNGRB tariff-setting powers (Supreme Court 2015, IGL v PNGRB) is why PNGRB does not set retail CNG prices [K].
12. **"Gas share 6% → 15% by 2030" is a target, not a forecast.**
    - Natural gas is ~6–6.5% of India's primary energy [K, BP/EI Statistical Review]. The 15% target dates from 2016 [K].
    - On the FY26 trajectory, flat consumption (~190 mmscmd) means **the target will be missed by a wide margin** [E].

---

## 0. Top-line framing (what an expert leads with)

### 0.1 Five members, three business models, one molecule
- **CGD utilities (IGL, MGL, ATGL).** They buy gas, carry it on an exclusive city network, and sell it as CNG (per kg) and PNG (per scm). Profit = volume × (realisation − gas cost − opex).
  - FY26: revenue ₹32,051 Cr (IGL standalone ₹16,451 + MGL ₹9,185 + ATGL ₹6,415); EBITDA ₹4,526 Cr (1,850 + 1,451 + 1,225); combined volume ~17.1 mmscmd (9.39 + 4.59 + 3.10) [primer; E sums].
- **LNG regas terminal (Petronet).** A toll on imported LNG. FY26 revenue ₹43,495 Cr, mostly pass-through gas value. PAT ₹3,843 Cr standalone. Capacity 27.5 mtpa (Dahej 22.5 from 31-Mar-2026 + Kochi 5) [primer].
- **LPG/chemical port logistics (Aegis).** Terminals plus LPG trading/distribution. FY26 revenue ₹8,333 Cr, normalised EBITDA ₹1,599 Cr, PAT ₹1,107 Cr [primer].
- **All five, FY26 [E, primer sums]:** revenue ~₹83,900 Cr, PAT ~₹8,000 Cr. The PAT uses consolidated IGL ₹1,543 Cr, MGL ₹847 Cr, ATGL ₹656 Cr, Petronet ₹3,843 Cr and Aegis ₹1,107 Cr; the Aegis figure includes AVTL minorities.
  - Market caps in mid-2026 primer snapshots: ~₹2.0 lakh Cr. ATGL ~₹79,000 Cr, Aegis ~₹46,500, Petronet ~₹41,000, IGL ~₹23,500, MGL ~₹11,200.
  - **ATGL alone is ~39% of the group's market cap but ~8% of its PAT** [E]. Refresh market caps for the report date; these are not 21-Oct-2026 prices.

### 0.2 The defining fact of 2024–26: the state controls both the cheapest input and the competing technology
- **The APM squeeze.** The government's allocation of cheap legacy domestic (APM) gas to CGD fell:
  - **from ~100% of CNG-T/PNG-D needs (the Aug-2022 policy)** to roughly **35–55% by 2025–26**, depending on the denominator (trap 4) [V-snip The Week, Energetica, CRISIL; primer].
  - At the same time the APM ceiling rose from $6.50 to $6.75 to $7.00 [V-snip], and the rupee fell to ₹94.9/$.
  - Result: **IGL earned ₹3.4/scm in Q1 FY27 against ₹6.2 a year earlier**, and against a management "normalised" target of ₹7–8 [V-snip PL/Baroda BNP Aug-2026].
- **The EV squeeze.**
  - Electric share of L5 passenger three-wheelers rose to **46.9% in Q1 FY27** from 34.9% in Q4 FY26 [V-snip EVreporter/Vahan].
  - **Delhi EV Policy 2.0** (approved Jun-2026) allows only electric three-wheelers and goods carriers for new registration from **1-Jan-2027** [V-snip Outlook/Energetica; primer].
- **Paradox:** CNG passenger cars are booming. CNG reached **~22% of FY26 PV sales (~10.3 lakh units), overtaking diesel (18%)** [V-snip Autocar Pro/vahanbazaar]. Maruti sold 2.2 lakh CNG cars in Q1 FY27 (+58%) and targets 9 lakh in FY27 [V-snip]. **CNG volume keeps growing (IGL +5.8%, MGL +7%, ATGL CNG +18% YoY in Q1 FY27) while margins collapse.**

### 0.3 The 2026 West Asia war hit every member, in different directions
- **The shock.** Iranian strikes on **Ras Laffan** (from ~2-Mar-2026) shut Qatari LNG [V-snip Bloomberg Law 2-Mar; Kpler 19-Mar]. QatarEnergy declared force majeure, **backdated by Petronet to 28-Feb-2026** [V-snip PL].
  - Qatar was **~40–45% of India's ~27 mt/yr LNG imports** [V-snip moneylife; Kpler].
  - India's **Natural Gas (Supply Regulation) Order of 9-Mar-2026** protected CNG/PNG-D at 100% and cut industrial users to ~80% of their six-month average [V-snip angelone/visionias; verify the order text].
- **Spot LNG.** JKM went **>$21/mmbtu by 19-Mar** (Kpler); Indian buyers saw ~$24 [V-snip moneylife]. Pre-war JKM was ~$10–11 [K/E].
- **Qatar volumes to India:**
  - **−91% in May–Jul 2026 (0.23 mt)**. The **US became the top supplier** (2.19 mt), then **Oman led in September** (585 kt, 27%); Qatar slipped to 6th (94 kt) [V-snip Equirus/BusinessToday 7-Aug; Kpler/FreePressJournal Oct-2026].
  - Two damaged Qatari trains (4 and 6, **12.8 mtpa**) could take **up to 3 years** to restore (Qatar's energy minister, 21-Sep-2026) or up to 5 years (other reports) [V-snip].
- **LPG.** India imports **~60–62% of its LPG, ~90% of it through Hormuz** [V-snip ThePrint/PPAC].
  - The domestic cylinder rose ₹60 on 7-Mar-2026. The **commercial 19-kg cylinder in Delhi went from ₹1,691.50 (Jan) to ₹3,113.50 (Jun)** [V-snip wionews/outlookmoney].
  - LPG consumption fell **15.9% to 11.3 mt in Apr–Aug 2026** [V-snip ThePrint/PPAC].
  - The government pushed PNG as the substitute: the **PNG Drive 2.0** campaign, and an **Aug-2026 incentive of 200 scm of extra domestic gas per new paying PNG household, effective 1-Sep-2026** [V-snip BusinessToday 20-Aug-2026].
- **Retail fuel prices.**
  - Delhi petrol rose **₹94.77 → ₹102.12/l** across four hikes from 15–25 May 2026 [V-snip scroll/ETV].
  - Delhi CNG rose **₹77.09 (Jan) → ₹83.09 (26-May) → ₹86.98/kg (29-Aug)** [V-snip HDFC Sky/Deccan Herald].
- **Who won and who lost:**
  - **Petronet** (Q1 FY27 PAT +33% on trading and inventory gains, despite utilisation of 58% vs 76%) [V-snip].
  - **MGL** (EBITDA/scm ₹7.9, helped by price hikes and "minimal Brent-linked sourcing") [V-snip MOSL/PL].
  - **Aegis** (Q1 FY27 normalised EBITDA ₹727 Cr, +184%; distribution volume +91%) [V-snip investor deck].
  - **IGL lost** (₹3.4/scm) and **ATGL was squeezed** (gas cost +39%; EBITDA margin 14.2% vs 19.6%) [V-snip].

### 0.4 Valuation dispersion is extreme (mid-2026 primer snapshots; refresh)
| | P/E (TTM) | What it prices |
|---|---|---|
| ATGL | ~125× | Long-dated new-GA growth, Adani/Total scarcity premium; US legal overhang removed May-2026 |
| Aegis | ~50× | LPG import super-cycle, AVTL capex, ammonia optionality |
| IGL | ~13–15× | Delhi EV + APM; de-rated from 20×+ |
| MGL | ~13× [E] | Similar to IGL, with higher margin and a smaller EV threat in Mumbai so far |
| Petronet | ~11× | Toll road with petchem capex risk, tariff-regulation risk and Qatar FM |
| Global CGD (ENN, China Resources Gas) | ~10× P/E, ~8× EV/EBITDA | [V-snip TipRanks/Yahoo 2026] |

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 The molecules and products
| Product | What it is | Unit sold | Main customers | Members |
|---|---|---|---|---|
| **CNG** | Natural gas compressed to ~200–250 bar at a filling station | ₹/kg | Autos, taxis, buses, private cars, LCVs | IGL, MGL, ATGL |
| **PNG-Domestic** | Piped gas to household kitchens (metered) | ₹/scm | Households | IGL, MGL, ATGL |
| **PNG-Commercial** | Piped gas to hotels, restaurants, hospitals | ₹/scm | Commercial establishments | IGL, MGL, ATGL |
| **PNG-Industrial** | Piped gas to factories (ceramics, glass, food, metals, textiles) | ₹/scm (often ₹/mmbtu) | Industry; competes with LPG, propane, FO, LSHS, coal | IGL, MGL, ATGL (also Gujarat Energy/Morbi) |
| **R-LNG** (regasified LNG) | LNG shipped at −162°C, unloaded, stored, re-vaporised into the grid | ₹/mmbtu regas tariff; gas value pass-through | GAIL, IOC, BPCL, GSPC, Torrent, fertiliser, power, refineries, CGD | Petronet |
| **LPG** (propane/butane) | Liquefied petroleum gas, imported by VLGC (Very Large Gas Carrier) and stored in cryogenic or pressurised tanks | ₹/MT terminalling fee; ₹/MT trading margin | OMCs (IOC, BPCL, HPCL), industrial, commercial, auto-LPG | Aegis (and AVTL) |
| **Liquid bulk** | Chemicals, POL, vegetable oils, bitumen | ₹/KL/month storage + throughput fee | Chemical traders, OMCs, edible-oil importers | Aegis via AVTL |
| **New energy** | EV charging, CBG, LNG for trucks, ammonia storage | Various | — | ATGL (EV ~5,100 points, 2 CBG plants), IGL (CBG, EV), MGL (CBG, LNG trucking), Aegis (Pipavav ammonia terminal) [primer] |

### 1.2 The natural-gas value chain, and where each member sits
1. **Upstream production.**
   - Domestic: ONGC/OIL nomination fields (APM), Reliance-BP KG-D6 (deepwater, HPHT-ceiling priced), Vedanta-Cairn and others. **~36 bcm/yr (~98–100 mmscmd), flat for 5 years** [V-snip Argus CY2024 36 bcm; K PPAC].
   - **Imported LNG:** Qatar, US, UAE, Oman, Nigeria, Angola, Australia. **~27 mt/yr (~36 bcm)** [V-snip moneylife].
2. **LNG regasification (Petronet).**
   - Ships unload at Dahej (22.5 mtpa) or Kochi (5 mtpa). LNG is stored and vaporised, then sent into the GAIL/GSPL grid.
   - **Petronet never sees the end customer.** It earns ₹/mmbtu.
3. **Trunk transmission.**
   - GAIL (~70% of trunk pipeline km [K]), GSPL (Gujarat), IOC, Reliance-owned East-West pipeline (now Pipeline Infrastructure Ltd/Brookfield) [K].
   - Since 1-Apr-2023 the **unified tariff** has applied: from 1-Jan-2026, **₹54.00/mmbtu up to 300 km, ₹102.86/mmbtu beyond**, with CNG/PNG-D always billed at Zone-1 [V-snip PNGRB PR 16-Dec-2025, indianinfrastructure].
4. **Gas marketing.**
   - GAIL is the **nodal allocator of APM gas** to CGD. Marketers (GAIL, IOC, BPCL, Shell, TotalEnergies, Adani) sell term/spot R-LNG. The IGX (Indian Gas Exchange) handles spot domestic trades [K].
5. **City gate → CGD network (IGL, MGL, ATGL).**
   - Steel pipelines (inch-km) → MDPE (medium-density polyethylene) pipe network → district regulating stations → CNG stations (mother/online/daughter-booster) and PNG meters.
6. **Retail.**
   - CNG dispensed per kg, at the company's own (COCO) stations or at OMC dealer forecourts (dealer commission ~₹2–3/kg [K/E]).
   - PNG billed per scm (domestic bimonthly; industrial monthly).
7. **Parallel LPG chain (Aegis).**
   - VLGC from Saudi Arabia/UAE/Qatar/US → Aegis/AVTL terminal (Kandla, Pipavav, Mangalore, Haldia, Kochi, JNPA) → OMC bottling plants or Aegis's own distribution (industrial bulk, auto-LPG stations, packed cylinders) [primer].

### 1.3 Where value is captured
- **The CGD last mile captures the most value per unit.**
  - A CGD earns **₹5–9/scm of EBITDA** (₹4,500–8,000 per 1,000 scm) on delivered gas worth ~₹45–60/scm. That is ~10–18% of the ex-tax price.
  - The terminal earns ~₹2.6–2.8/scm (₹66–69/mmbtu ÷ 25.2) — **~5–6% of the delivered gas price** [primer; E]. Pipeline transport is ~₹2.1/scm (Zone-1 ₹54/mmbtu).
  - **The CGD earns ~2–3× the terminal's per-unit fee, on far less capital per unit** [E].
- **The CGD monopoly is local and time-limited; the terminal "moat" is physical.** Only ~8–9 coastal sites have breakwater, draft and pipeline evacuation. But India has **overbuilt regas** (52.7 mtpa at end-FY25 vs ~27 mt imports) [V-snip ICRA], so a terminal's pricing power rests on its **pipeline connectivity**. Dahej is the best connected [primer].
- **In LPG logistics, value sits in scarce port-side cryogenic/pressurised tankage** with rail/road/pipeline evacuation, plus long-term OMC throughput contracts. The trading/distribution layer is high-volume, low-margin (~₹4,000–7,000/t EBITDA) [primer].

---

## 2. Size and growth

### 2.1 India gas market: volumes (FY20–FY26)
| FY | Consumption (bcm) | ≈ mmscmd | Domestic production (bcm) | LNG imports (bcm) | ≈ LNG (mt) | Import share | Tag |
|---|---|---|---|---|---|---|---|
| FY20 | ~64.1 | ~176 | ~31.2 | ~33.9 | ~25.7 | ~53% | [K PPAC] |
| FY21 | ~60.8 | ~167 | ~28.7 | ~33.0 | ~25.0 | ~54% | [K PPAC] (Covid) |
| FY22 | ~64.2 | ~176 | ~34.0 | ~31.0 | ~23.5 | ~48% | [K PPAC] |
| FY23 | ~60.0 | ~164 | ~34.5 | ~26.3 | ~19.9 | ~44% | [K PPAC] (2022 price spike) |
| FY24 | ~66.6 | ~182 | ~36.4 | ~30.9 | ~23.4 | ~46% | [K PPAC] |
| FY25 | ~72 | ~196–200 | ~36 | ~36–37 | ~27 | ~50–51% | [E from V-snip: Apr–Dec FY25 consumption 55,496 mmscm (+12%), LNG 28,586 mmscm (+24%), imports 51.5% of supply; Argus CY2024 72 bcm, 36 bcm output] |
| FY26 | ~69–70 | ~190 | ~35 | ~33–34 | ~25–26 | ~49% | [E from V-snip: CRISIL Apr–Oct ~190 mmscmd (−4.6%); Apr–Aug LNG −12.6%, output −3%, import reliance 49.4%] |
| Jun-2026 (month) | — | **197** | ~87 mmscmd | ~110 mmscmd | — | **56%** | [V-snip Equirus/asianetnews] |
| May-2026 (month) | — | — | 2,835 mmscm (−4.2%) | 2,604 mmscm (−9.1%) | — | — | [V-snip FIPI/PPAC] |

**Notes for the writer.**
- **India's gas demand is price-elastic.** Consumption fell in FY23 (2022 LNG spike) and FY26 (soft power demand, volatile LNG). It rose in FY24–FY25 when LNG eased.
- **Domestic production is stuck at ~36 bcm.** ONGC's legacy (APM) fields decline. KG-D6 (~28–30 mmscmd [K]) and ONGC KG-98/2 provide the growth, but at HPHT-ceiling prices.
- **FY26 full-year PPAC totals were NOT sourced.** The FY26 row is a composite; flag it.
- **CRISIL's "import dependence ~36%"** for Apr–Oct FY26 [V-snip CRISIL Dec-2025] conflicts with the PPAC-based ~49%. CRISIL likely uses a different numerator. **Prefer PPAC's ~49–51%.**

### 2.2 CGD's share
- **CGD consumption: ~44 mmscmd in Apr–Oct FY26, +8.8% YoY**, while total gas consumption fell 4.6% [V-snip CRISIL "The flow tapers", Dec-2025].
- **CGD share of national consumption: 24% in Sep-2025, 23% in Dec-2025.** Fertiliser 28–29%, power 13%, refinery 8%, petchem 6% [V-snip FIPI/PPAC].
- Implied CGD ~37 mmscmd in FY24 → ~41 in FY25 → **~44–45 in FY26** [E]. **CGD is the only consistently growing large gas segment.**
- **The three members' CGD volume (~17.1 mmscmd FY26) ≈ 38–39% of national CGD volume** [E]. Adding Gujarat Energy (~10–12 mmscmd CGD, with Morbi swings) [V-snip], **the four listed majors are ~60–65%** [E].

### 2.3 ₹ size [E]
- **CGD retail market:** ~44 mmscmd × 365 = ~16 bcm × ~₹50/scm average ex-tax realisation ≈ **₹80,000 Cr/yr ex-tax**, roughly **₹95,000–1,00,000 Cr incl. excise/VAT** [E]. USD ~$10–10.5 bn at ₹94.9.
- **Total natural gas market (delivered value):** ~70 bcm × ~₹40/scm ≈ **₹2.8 lakh Cr** [E]. LNG import bill ~$13–15 bn/yr [K/E].
- **Regas services:** ~27 mt × 52 TBTU × ~₹60/mmbtu ≈ **₹8,400 Cr/yr** of tolling-equivalent revenue nationally [E].
- **LPG:** ~31 mt × ~₹60,000/t ≈ **₹1.9 lakh Cr** retail value [E]. LPG terminalling at ~₹500–1,000/t × ~21 mt imports ≈ ₹1,000–2,000 Cr/yr [E].

### 2.4 Growth history and forecasts
- **CGD volume CAGR ~8–10% (FY19–FY26)**, with a 2020–21 Covid dip and FY23 price-shock flattening [E/K].
  - Members: IGL 8.99 → 9.39 mmscmd FY25→FY26 (+4.5%). MGL +8.25% to 4.585. ATGL +14% to 1,133 mmscm [primer; V-snip].
  - FY27 guidance: IGL 10.67 mmscmd (+~14%) with ₹1,500 Cr capex; MGL CNG +8–9% [V-snip sahi].
- **Forecasts:**
  - ICRA: national consumption **+3–4% in FY27** after a flat-to-down FY26 [V-snip BS 31-Dec-2025].
  - PNGRB/outlook studies: gas demand **+60% by 2030**, led by CGD [V-snip Outlook Business]; demand to "more than double by 2040" [V-snip PNGRB study].
  - **All pre-date the 2026 war; haircut them.**
- **CNG stations:** **4,433 (Mar-22) → 5,665 (Mar-23) → 6,861 (Mar-24) → 7,395 (Nov-24) → >8,000 (May-25)** [V-snip Lok Sabha/energetica]. 474 were added in Jan–Jun 2026 under PNG Drive 2.0 [V-snip]. Implied ~8,800–9,300 by mid-2026 [E; PNGRB Mar-2026 MIS not read].
- **PNG-D connections:** >1.50 crore (May-2025) [V-snip Parliament] → **167.25 lakh (31-Mar-2026, PNGRB MIS)** → 171.1 lakh (Apr-2026) vs a pro-rata MWP target of 417.6 lakh [V-snip policyedge/PNGRB].
- **CNG cars:** FY25 industry CNG PV **7,87,724** → FY26 **~10.34 lakh (21.98% of PV)** [V-snip]. CNG share of PV sales: 26% (Aug-25) → 32% (Aug-26) [V-snip].

### 2.5 India's share of the global market
- **Global LNG trade 2025: a record 437 mt (+6.3%)** [V-snip IGU World LNG Report 2026].
  - US 110.7 mt (largest exporter), Qatar 81.5 mt (18.7%), Australia third; the three together supply 62%.
  - Importers: Asia-Pacific 168.7 mt; Europe 126.2 mt (+26.1); China −8.9 mt.
- **India's ~27 mt ≈ 6% of global LNG imports.** India is the **4th-largest importer** after China, Japan and Korea [K/E].
- **India's regas capacity (~52.7 mtpa end-FY25) made it the 4th-largest regas market** [V-snip IGU via swarajya].
- **Gas share of India's energy mix ~6%** vs a world average of ~23–24% [K, EI Statistical Review].
- **India is the world's 2nd-largest LPG importer** (~21 mt FY25) after China [K/E].

---

## 3. Demand drivers and end-markets (with numbers)

### 3.1 CNG for transport (CNG-T): ~70–76% of metro CGD volume
- **Mix.** IGL is ~76% CNG, ~14% industrial/commercial, ~8% domestic. Within CNG, cars and taxis are ~65% [primer]. MGL is ~71% CNG [primer]. ATGL Q1 FY27: CNG 218 of 303 mmscm (72%), +18% YoY; PNG +4% [V-snip IANS].
- **The driver is a running-cost gap, not policy.** Delhi CNG vs petrol per km [E, assuming a CNG hatch at ~25 km/kg and a petrol hatch at ~17 km/l]:

  | Date | CNG ₹/kg | Petrol ₹/l | CNG ₹/km | Petrol ₹/km | CNG saving per km |
  |---|---|---|---|---|---|
  | Jan-2026 | 77.09 | 94.77 | 3.08 | 5.57 | ~45% |
  | 26-May-2026 | 83.09 | 102.12 | 3.32 | 6.01 | ~45% |
  | 29-Aug-2026 | 86.98 | 102.12* | 3.48 | 6.01 | ~42% |

  - \*Petrol after 25-May not re-verified; assumed unchanged.
  - Per-unit price ratio: CNG/petrol = 0.81 (Jan) → 0.85 (Aug). **The gap narrowed in % terms after the August CNG hike, but CNG still saves ~40–45% per km.** That matches the "40–50% cheaper per km" industry claim [V-snip Autocar Pro].
  - **The May fuel hikes widened the absolute ₹/km gap; the August CNG-only hike (+₹3.89, citing LNG costs and Hormuz [V-snip Deccan Herald]) gave some back.**
  - NCR satellite cities are dearer: Noida/Ghaziabad ₹95.59/kg, Gurugram ₹92.01/kg (29-Aug) [V-snip].
- **Vehicle pipeline.**
  - FY26 CNG PV sales ~10.34 lakh (21.98% share; diesel 18.08%, petrol 47.48%) [V-snip].
  - Maruti >7 lakh CNG units in FY26 (~70% segment share), 2.2 lakh in Q1 FY27 (+58%); targets 9 lakh in FY27 and "CNG ~50% of its sales" [V-snip BusinessToday 19-Sep-2026]. Tata Motors 1.72 lakh in FY26 (+24%, ~27% of its PV) [V-snip].
  - **Every new CNG car adds ~1.0–1.3 scm/day of demand** (~12,000 km/yr at ~25 km/kg ≈ 480 kg ≈ 670 scm/yr ≈ 1.8 scm/day for a heavy user, ~1 scm/day for a private car) [E]. So 10 lakh new CNG cars a year ≈ **+1.0–1.8 mmscmd per year of new demand**, roughly 2–4% of national CGD volume [E].
- **Commercial fleets.** Autos and taxis use 8–15× more gas than a private car [E], and they are exactly the fleets EV policy targets (section 11).

### 3.2 PNG-Domestic: small volume, sticky, politically favoured
- ~0.4–0.5 scm/day per household [E; IGL ~1.3 mmscmd D-PNG over ~2.5–2.7 mn homes ≈ 0.5 scm/day]. The **167 lakh connections nationally ≈ ~7–8 mmscmd** [E].
- **The 2026 LPG shock made PNG the government's preferred substitute:**
  - PNG Drive 2.0 (Jan–Jun 2026).
  - The **200-scm-per-new-household APM incentive from 1-Sep-2026**, payable on additions above Apr–Jun average monthly additions +10% [V-snip BusinessToday/kotakneo Aug-2026].
- Domestic PNG is cheaper than LPG for consumers. 1 scm PNG (~₹48–53 in metros [K/E]) ≈ 0.9 kg LPG in heat. The subsidised domestic LPG cylinder (~₹853 + ₹60 = ~₹913 for 14.2 kg after 7-Mar-2026 [E/V-snip]) ≈ ₹64/kg.
- **Margin on D-PNG is thin** because prices are politically sticky. Its value is that it secures **APM priority allocation** and gives the network density.

### 3.3 PNG-Industrial & Commercial (I/C): the price-taker
- **~14–30% of CGD volume.** Metros (IGL ~14%) are at the low end; Gujarat Energy (Morbi ceramics) and ATGL (Ahmedabad/Vadodara industry) are higher [primer; K].
- **Competes against propane, LPG, furnace oil, LSHS (low-sulphur heavy stock), pet-coke and coal.** Pricing is linked to alternate fuels or Brent/HH/JKM; it gets no APM.
- **The 2026 Morbi lesson.** Ceramic kilns in Morbi switch between PNG and propane.
  - Gujarat Energy's Morbi volume went **~0.4 mmscmd (Apr-2026) → ~8 mmscmd (May–Jun 2026)** when Middle-East propane dried up, then fell back to ~3 mmscmd once propane was sourced elsewhere.
  - Indicative prices: **PNG ~₹78/scm vs propane ~₹65/scm** [V-snip PL/multibagg Q1 FY27].
  - **I/C volume is a swing load: it can quadruple or vanish within weeks.**
- The 9-Mar-2026 supply order **cut industrial users to ~80% of their six-month average** [V-snip, verify].

### 3.4 LNG demand (Petronet's drivers)
- **Sectoral users of R-LNG:** fertiliser (urea; pooled gas price), CGD (replacing APM shortfall), refineries/petchem, power (peaking, in summer), steel/sponge iron [K].
- **Price elasticity is the key.**
  - Utilisation is high when LNG is <$10–11/mmbtu and low above ~$14–15 [primer; E].
  - FY23 (2022 spike): LNG imports ~19.9 mt. FY25 (soft prices): ~27 mt [K/E].
  - 2026: May–Jul imports were **7.08 mt (+15% YoY) despite the war**. Buyers scrambled for non-Qatar cargoes, and CGD/fertiliser are price-inelastic priority users [V-snip Equirus]. **September fell 14% MoM to 2.17 mt** [V-snip Kpler].
- **Petronet's share:** ~60–75% of India's LNG imports flow through Dahej + Kochi. The primer's "~75%" is the high end. With Chhara, Dhamra, Mundra, Ennore and Dabhol ramping, **~60–65% is more realistic for FY26** [E; V-snip ICRA: ex-Dahej utilisation 25–30%].

### 3.5 LPG demand (Aegis's drivers)
- **FY25 consumption 31.3 mt.** Imports 20.7 mt, domestic production 12.8 mt, import share ~60% (vs ~46% a decade ago) [V-snip Rau's IAS/PPAC]. FY26 was projected at 33–34 mt (not verified).
- **33.37 crore LPG customers, including 10.56 crore PMUY (Ujjwala) connections** [V-snip PPAC summary]. Average household use is ~half a cylinder per month [V-snip superkalam 16-Mar-2026].
- **2026 shock:** Apr–Aug 2026 consumption **11.3 mt (−15.9% YoY)** because of supply curbs, rationing of commercial users and the PNG push [V-snip ThePrint/PPAC].
- **The supply response favours Aegis:**
  - The government ordered refiners to maximise C3/C4 to LPG (Mar-2026), then **set maximum LPG production targets per refinery** (Aug-2026) [V-snip onmanorama].
  - OMCs signed a **2.2 mt US LPG deal for 2026 (~10% of imports)** [V-snip S&P Nov-2025]. US cargoes are long-haul VLGCs into west-coast terminals, which is Aegis/AVTL's core geography.
  - **Aegis's Q1 FY27 LPG logistics volume held (~1,124 kMT vs 1,161) while distribution almost doubled (277 vs 145 kMT)** [V-snip investor deck chart labels]. Its private distribution book gained share from rationed OMC commercial supply.

---

## 4. Supply side and cost structure

### 4.1 Inputs for a CGD company
| Cost element | ₹/scm (FY26, metro CGD) | Driver | Tag |
|---|---|---|---|
| APM gas (ceiling $6.75 FY26, $7.00 FY27) | ₹22–26/scm (at ₹86–95/$) | Govt ceiling × FX; allocation % | [E] |
| New-well gas (APM+premium, or 12% of ICB) | ₹27–32/scm | ICB/Brent, FX | [E] |
| HPHT/deepwater (KG-D6) | ceiling $8.90 (Apr–Sep 26) → $9.89 (Oct-26–Mar-27) ≈ ₹33–37/scm | ceiling × FX | [V-snip ceiling; E ₹] |
| Term R-LNG (Brent-linked, ~12% slope + regas + tariff) | ~₹38–48/scm at Brent $70–90 | Brent, slope, FX | [E] |
| Spot R-LNG (JKM + ~$1 regas/transport) | ₹45–90/scm ($12–24) | JKM | [E] |
| Pipeline tariff (Zone-1 unified) | ₹2.1/scm (₹54/mmbtu) | PNGRB | [V-snip] |
| Compression power (CNG) | ~₹1.5–2.5/scm | Electricity tariff | [E/K] |
| OMC dealer commission (CNG at OMC outlets) | ~₹1.5–2/scm (₹2–3/kg) | Contracts | [E] |
| Employee + O&M + other opex | ~₹3–5/scm | Network age, density | [E] |
| Central excise (CNG 14% of value) + state VAT | passed through | Govt | [K] |

**The blended gas cost is what matters.**
- **Illustration [E].** Take IGL's CNG pool at ~40% APM, ~20% NWG, ~10% HPHT and ~30% term/spot LNG, at $7 / $8.4 / $9.9 / $12, at ₹94.9:
  - Blended ≈ **$8.9/mmbtu ≈ ₹33.5/scm** before tariff and compression.
- **Sensitivity [E]:** every 10 percentage points of APM replaced by $12 LNG adds ~$0.5/mmbtu ≈ **₹1.9/scm** to gas cost. That is **~35% of IGL's FY26 EBITDA/scm**.
- **FX:** every ₹1/$ of depreciation adds ~1.1% to gas cost ≈ ₹0.35–0.4/scm on a ~₹33/scm cost [E].
- **This explains the Q1 FY27 collapse at IGL (₹3.4/scm)** [V-snip]. It also explains why MGL, which had "minimal Brent-linked sourcing" and took earlier price hikes, held ₹7.9/scm.

### 4.2 Where ₹100 of CGD revenue goes [E; composite of IGL FY26 standalone and MGL FY26]
| Bucket | ₹ of 100 (gross revenue incl. excise) | Notes |
|---|---|---|
| Central excise duty | ~10–11 | CNG at 14% of value; netted below the revenue line |
| Gas purchase cost (incl. transport) | ~62–66 | Rising share as APM falls |
| Employee costs | ~2 | Lean: ~₹300–400 Cr for IGL [E] |
| Other opex (power for compression, O&M, dealer commission, repairs) | ~10–12 | |
| **EBITDA** | **~11 (IGL) to ~16 (MGL)** | IGL 1,850/16,451 = 11.2%; MGL 1,451/9,185 = 15.8% [primer arithmetic] |
| Depreciation | ~2.5–4 | Heavy in new-GA builders |
| Other income (treasury) | +2 to +3 | IGL/MGL hold large cash balances |
| Tax (25%) | ~3 | |
| **PAT** | **~8–9** | IGL 1,364/16,451 = 8.3%; MGL 847/9,185 = 9.2% |

ATGL: EBITDA 1,225/6,415 = 19.1% in FY26, but only 14.2% in Q1 FY27 [V-snip]. Its margin percentage is higher because its I/C mix is higher and its excise share lower, not because its per-unit economics are better.

### 4.3 Where ₹100 of LNG-terminal revenue goes [E; Petronet FY26 standalone]
| Bucket | ₹ of 100 | Notes |
|---|---|---|
| Cost of LNG (Qatar back-to-back, pass-through) | ~85–87 | Moves with Brent; zero-margin pass-through plus a small marketing margin |
| Regas & marketing gross margin | ~13–15 | |
| Opex (power, consumables, O&M, employees) | ~2 | Terminals are cheap to run |
| **EBITDA** | **~12–13** | ~₹5,500–5,800 Cr [E] |
| D&A + interest (leases on Kochi/jetty) | ~2 | |
| Other income | +1 to +1.5 | Cash ~₹10,000+ Cr [K/E] |
| Tax | ~3 | |
| **PAT** | **~8.8** | 3,843/43,495 [primer] |

Flip the view: **on the ~₹6,000 Cr of "true" service revenue (regas + margin), EBITDA is ~90%** [E]. The economics are those of a toll road.

### 4.4 LPG terminal / Aegis cost structure [E; primer]
- **Liquids terminals:** revenue ₹644 Cr, EBITDA ₹472 Cr (**~73% margin**) [primer].
- **LPG sourcing & distribution:** revenue ₹7,689 Cr. Segment EBITDA = terminalling plus a trading/distribution spread. Distribution EBITDA rose from **~₹4,000/t to ~₹7,000/t** by Q4 FY26 [primer].
- **Where ₹100 of Aegis revenue goes [E]:**

  | Bucket | ₹ of 100 |
  |---|---|
  | LPG purchase cost (Saudi CP-linked) | ~78–80 |
  | Freight, port, handling | ~2–3 |
  | Opex | ~2 |
  | EBITDA | **~19** (1,599/8,333) |
  | D&A + interest | ~3–4 |
  | Tax | ~2–3 |
  | PAT incl. minorities | **~13** (1,107/8,333) |

  The terminals earn most of the EBITDA on ~8% of revenue.

### 4.5 Capacity and utilisation
- **LNG regas:** 52.7 mtpa at end-FY25 (2.0× FY25 consumption) → ~**60–65 mtpa by end-FY26** [E: + Dahej +5, Chhara ramp, Dabhol to 5] → **77.5 mtpa by FY29** (ICRA) [V-snip ICRA Dec-2025].
  - Four projects under construction add 11.3 mtpa by 2028 [V-snip IGU].
  - Utilisation: **~45–50% nationally since FY23; ex-Dahej only 25–30%** [V-snip ICRA]; IGU puts 2025 at ~47% (58% in 2024) [V-snip].
  - **Dahej runs at 85–100%.** Q4 FY26 ~90%; Q1 FY27 66% on 22.5 (85% on the old 17.5) [primer; V-snip].
- **CGD:** network utilisation is not a KPI. The constraints are **APM allocation, CNG station queues (compressor capacity) and PNG connection conversion** (connections laid vs "gas-ified" paying customers).
- **LPG terminals:** Aegis LPG static capacity ~226,000 MT, throughput 5.15 mt in FY26 (+14%) → **~23 turns a year** [primer; E]. AVTL at IPO had 70,800 MT LPG static and ~1.50 mn cbm liquids. After acquiring Mangalore's cryogenic LPG terminal: ~2,01,000 MT LPG, ~1.7 mn cbm liquids [V-snip zerodha/5paisa].

---

## 5. Industry structure

### 5.1 CGD: a patchwork of local monopolies
- **307 Geographical Areas (GAs)** authorised, covering ~100% of India's area and **~733–784 districts across 34 states/UTs** [V-snip PNGRB/indianinfrastructure Aug-2026]. Before the 12th round, 300 GAs covered **~88% of area and ~98% of population** [V-snip Energetica].
- **Who holds the GAs [K/E, approximate]:**
  - **ATGL** 53 (34 direct + 19 via IOAGPL) [primer].
  - **Torrent Gas** ~32–34 (largest private by GA count after ATGL).
  - **Think Gas** (Hindustan Infralog/I Squared) ~16–20.
  - **AG&P Pratham** ~12.
  - **BPCL** ~25+ (many via JVs).
  - **HPCL** ~20+ (incl. JVs).
  - **IOC** ~20+ standalone + IOAGPL.
  - **GAIL Gas** ~10+.
  - **Gujarat Energy** ~25 (Gujarat, Maharashtra, Rajasthan, Punjab, MP).
  - **IGL** 12.
  - **MGL** 3–4 (Mumbai, Thane/Raigad, Ratnagiri-Kolhapur, UCGL Ratnagiri via acquisition).
  - **IRM Energy** ~4–5.
  - Others: Megha Engineering, Haryana City Gas, Sanwariya, Tripura Natural Gas [K/E].
  - **Exact counts were not verified; use "approx."**
- **Concentration by VOLUME is high, by AREA low.** The five legacy metro/state networks (IGL, MGL, Gujarat Gas, plus GAIL Gas and Sabarmati Gas, now Gujarat Energy) still carry the bulk of volume. The **9th–12th round GAs (2018–2024) are mostly sub-scale**, with a 5–10-year ramp.
- **Listed CGD universe:** IGL, MGL, ATGL, Gujarat Energy (ex-Gujarat Gas), IRM Energy. **Unlisted:** Torrent Gas (Torrent group), Think Gas (PE-owned: I Squared Capital), AG&P (Philippines-HQ, PE-backed), Megha, plus the PSU arms.
- **Associates matter for IGL:** 50% of **Maharashtra Natural Gas (Pune)** and 50% of **Central UP Gas (Kanpur)**. They add ~₹180 Cr to consolidated PAT [primer].

### 5.2 LNG terminals: listed vs unlisted
| Terminal | Operator / owner | Capacity (mtpa) | Commissioned | Utilisation (recent) | Tag |
|---|---|---|---|---|---|
| **Dahej** (Gujarat) | Petronet LNG | **22.5** (17.5 → 22.5 on 31-Mar-2026) | 2004 | ~90% Q4 FY26; 66% Q1 FY27 (Qatar FM) | [primer; V-snip] |
| **Hazira** (Gujarat) | Shell Energy India (TotalEnergies exited 2019 [K]) | ~5.2 | 2005 | ~38% | [primer; K] |
| **Kochi** (Kerala) | Petronet LNG | 5 | 2013 | ~23% Q1 FY27; record ~68 TBTU in Q4 FY26 (~52%) | [V-snip; primer] |
| **Dabhol** (Maharashtra) | Konkan LNG (GAIL) | 5 (from 2.9 after breakwater) | 2013 | low; monsoon constraints | [V-snip ICRA/laex] |
| **Mundra** (Gujarat) | GSPC LNG (GSPC/Adani Ports) | 5 | 2020 | low (~20–30%) | [K/E] |
| **Ennore** (Tamil Nadu) | IOC (IOC LNG) | 5 | 2019 | low (pipeline gaps) | [K/E] |
| **Dhamra** (Odisha) | Adani-TotalEnergies (Dhamra LNG) | 5 | 2023 | ~25% | [primer] |
| **Chhara** (Gujarat) | HPCL LNG | 5 | 2025 | ramping | [V-snip laex] |
| **Jafrabad FSRU** (Gujarat), **Jaigarh FSRU** (H-Energy, Maharashtra) | Swan Energy; H-Energy | ~5; ~4 | 2023–24 | low/idle | [K/E] |
| **Gopalpur** (Odisha) | Petronet (planned) | 5 | under construction (~₹6,355 Cr) | — | [primer] |

Total ≈ **52.7 mtpa (end-FY25)**. **Petronet ≈ 27.5/~60 ≈ 45% of capacity but ~60–65% of volume** [E].

### 5.3 LPG terminals
- **Owners:** OMCs (IOC, BPCL, HPCL own most import terminals, e.g. HPCL Mangalore cavern, ISPRL), **Aegis/AVTL** (largest independent third-party LPG and liquid tankage), Adani (Mundra LPG terminal, Adani Total/Adani Ports), Haldia (Aegis's ~75% subsidiary Hindustan Aegis LPG; partner identity not re-verified) [primer], Reliance (captive).
- **AVTL claims to be India's largest third-party tank-storage platform** [primer]. In LPG, its rivals are OMC-owned import terminals and Adani Mundra.

### 5.4 Imports and China
- **No China angle in pipes.** City gas is a non-tradable local service. China's LNG demand (−8.9 mt in 2025 [V-snip IGU]) is a price swing factor for JKM, and therefore for Indian LNG affordability.
- **Equipment:** CNG compressors, dispensers and MDPE pipe are partly imported. Indian makers include Kirloskar Pneumatic (compressors) [K].

---

## 6. Business models inside the sub-sector (the archetypes)

| # | Archetype | Members | Revenue driver | Margin driver | Capital intensity | Key risk |
|---|---|---|---|---|---|---|
| 1 | **Mature metro CGD** | IGL, MGL | Volume growth 4–8%; CNG-heavy | APM share, pricing pass-through, opex density | Low incremental (₹1,000–1,500 Cr/yr capex on ₹16k Cr revenue) | APM cuts, EV substitution, exclusivity expiry, regulated pricing |
| 2 | **Growth CGD (new GAs)** | ATGL (also Torrent, Think, AG&P, IRM) | Volume growth 12–20% from a low base | Fixed-cost absorption; I/C pricing | High (₹1,000–1,500 Cr/yr for ATGL on ₹6,400 Cr revenue [E]) | Slow ramp, MWP penalties, capital cost, sponsor risk |
| 3 | **Regas toll terminal** | Petronet | Throughput × tariff, plus use-or-pay | Utilisation, tariff escalation, marketing margin | Lumpy (₹2,000–6,000 Cr expansions; ₹20,685 Cr petchem) | LNG price elasticity, tariff regulation, Qatar FM, overcapacity |
| 4 | **Port tank-storage (liquids + LPG)** | Aegis via AVTL | Static capacity × rental + throughput fees | Utilisation, contract tenor, tariff per KL/MT | Medium-high (₹500–2,000 Cr per terminal) | Port concession terms, capex execution, customer concentration |
| 5 | **LPG sourcing & distribution** | Aegis | Volume (MT) | ₹/t spread over Saudi CP | Low (working capital) | Price/inventory risk, OFAC/sanctions sourcing risk |

**How their economics differ [E]:**
- **RoE:** IGL ~14% (down from 20%+); MGL ~16–18%; ATGL ~13%; Petronet ~19%; Aegis ~16–18% [primer; E].
- **Asset turnover:** CGD ~1.5–2× gross block (revenue includes the gas). Terminals ~0.3–0.5× on service revenue.
- **Payback:**
  - A metro CNG station costs ~₹3–5 Cr (online, on own land) and pays back in 2–4 years at 15–20 t/day [E].
  - A greenfield GA needs ~₹500–1,500 Cr over 8 years and breaks even in ~6–8 years [E/K].
  - A 5 mtpa terminal costs ~₹4,500–6,500 Cr [primer Gopalpur ₹6,355 Cr] and earns ~₹1,000–1,300 Cr/yr of regas revenue at 70–80% utilisation [E].

---

## 7. Regulation and policy

### 7.1 Regulators and their roles
- **MoPNG** (ministry): gas allocation policy, domestic gas pricing (APM/HPHT), LNG import policy.
- **PPAC:** notifies APM, HPHT and NWG prices half-yearly or monthly; publishes data.
- **PNGRB** (regulator under the PNGRB Act, 2006):
  - authorises CGD GAs through bidding rounds, and pipelines;
  - sets **pipeline and CGD network tariffs** and compression charges;
  - sets the Minimum Work Programme (MWP) and penalties, exclusivity rules, open access, and safety (T4S).
  - It **does not set retail CNG/PNG prices** (Supreme Court, 2015, IGL v PNGRB [K]).
- **GAIL:** nodal agency for APM allocation to CGD.
- **State governments:** VAT on gas (Delhi CNG 5%; Maharashtra 3% on CNG/PNG [K]; Gujarat 15% on gas [V-snip FIPI]); state EV policies (Delhi EV 2.0).
- **SC/NGT:** the clean-air mandates (1998 Delhi CNG order) [primer].

### 7.2 Domestic gas pricing: the APM and HPHT history
| Period | APM / domestic price ($/mmbtu, GCV) | HPHT/deepwater ceiling ($/mmbtu) | Tag |
|---|---|---|---|
| Apr–Sep 2021 | 1.79 | 3.62 | [K PPAC] |
| Oct-2021–Mar-2022 | 2.90 | 6.13 | [K PPAC] |
| Apr–Sep 2022 | 6.10 | 9.92 | [K PPAC] |
| Oct-2022–Mar-2023 | **8.57** (peak) | **12.46** (peak) | [K PPAC; V-snip "then-current $8.57"] |
| **From 8-Apr-2023 (Kirit Parikh formula)** | **10% of ICB monthly; floor $4, ceiling $6.50** for FY24–FY25; formula price $7.92 for Apr-2023 | 12.12 (Apr–Sep 23) → 9.96 (Oct-23–Mar-24) | [V-snip Tribune/BusinessToday Apr-2023; K] |
| FY25 | 6.50 (ceiling binding) | 9.87 (Apr–Sep 24) → 10.16 (Oct-24–Mar-25) | [K PPAC] |
| FY26 (from Apr-2025) | **6.75** (ceiling raised $0.25) | ~10.04 (Apr–Sep 25) → ~9.72 (Oct-25–Mar-26) | [V-snip IGL filing "fixed at $6.75"; HPHT K, flag] |
| Apr–Sep 2026 | **7.00** | **8.90** | [V-snip angelone/deccanherald] |
| Oct-2026–Mar-2027 | **7.00** (formula $11.22 reported; ceiling binds) | **9.89** | [V-snip angelone Oct-2026] |

- The Parikh committee envisaged **ceiling increases of $0.50/yr** and APM freeing by 2027 [V-snip ICRA]. **Actual increases were only $0.25/yr.** Recommended NWG premium: 20% [V-snip Outlook].
- **Why the ceiling matters:** with ICB at $70–110, 10% = $7–11. **The ceiling has bound every month since Apr-2023**, so APM gas has been a subsidy to CGD and fertiliser.

### 7.3 Allocation policy: the APM squeeze, step by step
| Date | Event | Tag |
|---|---|---|
| Aug-2022 | MoPNG guideline: domestic (APM) gas to CGD to meet **100%** of CNG-T and PNG-D requirement as a priority sector; I/C PNG on market gas | [V-snip MGL statement; K] |
| May-2023 onward | Allocation tied to **APM availability**, as ONGC's legacy fields decline (~4–5%/yr) | [K] |
| 16-Oct-2024 | APM to CGD for CNG cut **~20%** at short notice; IGL/MGL shares fell ~20% in a session | [primer; K] |
| Nov-2024 | Further cut; cumulative cut **up to ~40%** | [V-snip angelone] |
| 31-Dec-2024 | Order diverts APM from LPG-extraction plants to CGD: **IGL allocation +31% (CNG domestic share 37% → 51%), ATGL +20%, MGL +26%** | [V-snip angelone/constructionworld] |
| 16-Apr-2025 | New cut of **~18–20%**; APM ≈ **34% of CGD requirement vs 51%** a year earlier; NWG (12% of ICB) partly backfills | [V-snip The Week; Gas Processing News] |
| Q1 FY26 | MoPNG moves to **two-quarter-advance pro-rata allocation** including NWG: 54.68% (Q3 FY25), 55.68% (Q1 FY26), 54.74% (Q2 FY26 projected) | [V-snip Energetica] |
| FY26 | CGDs sign **15–20% long-term NWG** contracts to offset a ~30% APM cut; CRISIL expects margin recovery to ₹7.2–7.5/scm | [V-snip Outlook/CRISIL Feb-2026] |
| Q4 FY26 | ATGL APM share for CNG **~36% (41% the quarter before)** | [primer] |
| 9-Mar-2026 | **Natural Gas (Supply Regulation) Order**: D-PNG/CNG 100%, industry ≤80%, fertiliser ≤70% [blog; verify]; separately APM to CGD **cut 18–20%** per exchange filings | [V-snip angelone/visionias/energyintel] |
| 1-Sep-2026 | **PNG incentive**: +200 scm of domestic gas per incremental paying PNG-D household | [V-snip BusinessToday] |

**Writer's framing.** APM is a depleting asset. Its allocation will keep shrinking, with occasional politically-timed top-ups (Jan-2025, Sep-2026). **CGD margins are structurally moving from "APM-subsidised" (₹7–12/scm in FY21–FY24) to "market-gas" economics (₹4–8/scm).** The only fixes are price hikes or cheaper LNG.

### 7.4 PNGRB CGD regime
- **Bidding rounds [K/V-snip]:**
  - Rounds 1–8 (2008–2017) covered ~92 GAs.
  - **9th round** (2018): 86 GAs. **10th** (2018–19): 50 GAs. **11th** (2021–22): 61 GAs. **11A** (2022): a few.
  - **12th/12A** (launched Oct-2023, awarded Mar-2024): 8 GAs in the North-East, J&K and Ladakh, ~₹41,000 Cr anticipated investment [V-snip indianinfrastructure/energetica].
  - Total: **307 GAs** [V-snip]. A 13th round was not found.
- **Bid criteria (9th round onward):** weights on PNG connections, CNG stations and inch-km committed (the MWP), plus tariff bids. This produced **very aggressive MWP commitments** [K].
- **MWP 2034 national targets:** **12.63 crore PNG-D connections, 18,336 CNG stations, 5.46 lakh inch-km** [V-snip policyedge/Lok Sabha].
  - **Achieved vs target:** 171 lakh PNG-D vs a pro-rata 417.6 lakh (Apr-2026). Only **55 GAs had met their MWP** by Mar-2026 [V-snip PNGRB MIS]. CNG stations, by contrast, are **ahead of the pro-rata target** (7,395 vs 4,025 at Nov-2024) [V-snip].
  - **Penalties:** PNGRB can encash performance bank guarantees for MWP shortfalls. Several entities have been penalised, but enforcement has been lenient [K].
- **Exclusivity:** 25-year infrastructure exclusivity; 5- or 8-year marketing exclusivity (trap 11).
  - **IGL Delhi (authorised 1998/2008) and MGL Mumbai (1995/2008) are past marketing exclusivity** [primer; K].
  - Open-access/common-carrier rules exist (2020 framework), but **no meaningful third-party marketing has happened** [primer].
- **Network tariff and compression charge:** PNGRB-determined for each GA (₹/mmbtu). It matters for open access, not for current P&L [K].

### 7.5 Unified pipeline tariff
- **1-Apr-2023:** unified tariff for the integrated national grid, with three zones [K].
- **1-Jan-2026 (PNGRB order 16-Dec-2025):** **two zones, ₹54.00/mmbtu (≤300 km) and ₹102.86/mmbtu (>300 km)**.
  - **CNG and D-PNG are billed Zone-1 everywhere**, which saves the CGD sector ~**₹1,000 Cr/yr** [V-snip].
  - Expected delivered-price cuts: CNG −₹1.25 to −2.50/kg, D-PNG −₹0.90 to −1.80/scm.
  - ATGL cut CNG/PNG prices by up to ₹4; GAIL Gas cut by ₹1 [V-snip freepressjournal].
  - **Beneficiaries:** GAs far from the gas source (ATGL's UP/Rajasthan/Odisha GAs, Torrent, Think) more than Gujarat/Mumbai.
- **8-Oct-2026 draft amendment:** brings **all** natural gas pipelines into the unified tariff; comments closed 23-Oct-2026 [V-snip PNGRB public notice]. **Watch the final notification.**

### 7.6 Taxes
- **Natural gas is outside GST** (with crude, petrol, diesel and ATF) [K].
  - CNG bears **central excise of 14%**. States levy VAT: Delhi CNG 5%; UP/AP 14.5%, Gujarat 15%, MP 14% on gas [V-snip FIPI; K].
  - CGD companies cannot claim input tax credit on capex GST (~18% on equipment). This is a sunk cost of ~₹100–200 Cr/yr for a large CGD [E].
- **Apr-2026:** a high-level committee recommended **inclusion of gas in GST at a lower slab with full ITC, removal of excise on CNG**, and VAT cuts in the interim [V-snip taxo.online 17-Apr-2026]. No GST Council decision was found.

### 7.7 CBG (compressed biogas) blending obligation
- **Announced Nov-2023.** The **CBO** is **1% of CNG + PNG-D consumption in FY26, 3% in FY27, 4% in FY28, 5% from FY29**. It was voluntary to FY25 and **mandatory from Apr-2025** [V-snip gktoday/vikaspedia].
- **FY26 compliance: 1.05% vs the 1% target** (Hardeep Puri, written reply, 6-Aug-2026) [V-snip swarajya].
- **SATAT (2018)** targeted 5,000 plants by 2023; **only ~132 had been completed by 3-Jun-2026** [V-snip].
- CBG demand implied by the mandate: **87 kt (FY26) → 310 kt (FY27) → 868 kt (FY30)** [V-snip NRI via NGW].
  - **The FY27 tripling to 3% is a sourcing headache.** CBG costs more than APM (procurement at ~₹72–80/kg ex-plant [K/E]), so it is a mild margin drag of ~₹0.3–0.6/scm at 3–5% [E].

### 7.8 EV and transport policy (the demand-side regulator)
- **Delhi EV Policy 2.0:** approved Jun-2026, to 31-Mar-2030 [V-snip].
  - **Only electric three-wheelers and goods carriers for new registration from 1-Jan-2027; only e-2W from 1-Apr-2028.**
  - CNG autos over 10 years old to be replaced or retrofitted.
  - Scrap/replacement incentive ₹50,000 / 40,000 / 30,000 in years 1–3. Headline target "95% EV in new registrations by 2027" [primer; V-snip Outlook/Energetica/Tribune].
  - **The final text vs the draft differ; verify the notified version.**
- **National:** PM E-DRIVE (FY25–FY26 subsidy scheme, e-3W/e-bus/e-truck) and PM e-Bus Sewa (10,000 e-buses) [K].
- **Mumbai:** BEST is targeting an all-electric bus fleet (wet-lease e-buses) [K]. **Maharashtra EV policy 2025** [K].

---

## 8. History and cycles

### 8.1 Phases
1. **Birth by court order (1995–2004).**
   - MGL (1995, British Gas + GAIL; Mumbai gas since 1995) and IGL (1998, GAIL + BPCL) were formed.
   - The **Supreme Court's 1998 order** (M.C. Mehta) forced Delhi's buses, autos and taxis to CNG by 2001–02, creating IGL's market by law [primer; K].
   - **Petronet LNG** incorporated 1998; **Dahej commissioned 2004 (5 mtpa)**; IGL IPO Dec-2003/2004 [primer; K].
2. **APM-subsidy golden era (2005–2021).**
   - Cheap APM gas fed CNG/PNG-D (APM at $1.8–4.2 for much of 2014–2021 under the 2014 formula [K]).
   - CNG pump prices were benchmarked to diesel/petrol. Metro CGDs earned ₹6–9/scm with near-zero debt and RoE of 20–25%.
   - **PNGRB Act 2006**; CGD bidding from 2008. Dahej expanded to 10 → 15 → 17.5 mtpa. Kochi (2013) was stranded until the Kochi–Mangalore pipeline (2021) [K].
   - **MGL IPO Jul-2016.** Gujarat Gas re-listed after the 2015 merger with GSPC Distribution [K].
3. **CGD land-grab (2018–2022).**
   - The 9th, 10th and 11th rounds took coverage from ~20% to ~98% of the population [K].
   - **ATGL demerged from Adani Enterprises and listed in Nov-2018.** **TotalEnergies bought 37.4% (2019–20)** [K]. ATGL's P/E reached 500×+ in 2022 [K].
   - Aegis built Kandla/Pipavav/Haldia LPG capacity.
4. **The 2022 price shock (2022–23).**
   - Russia–Ukraine: JKM reached a **record $59.67/mmbtu on 3-Mar-2022** [V-snip QCIntel]. APM hit **$8.57 (Oct-2022)** [V-snip].
   - CNG prices rose ~70% in Delhi in 2022 [K/E]. India's LNG imports fell to ~19.9 mt in FY23.
   - **The Kirit Parikh formula (Apr-2023)** capped APM at $6.50 to stabilise CGD [V-snip].
5. **Hindenburg (Jan-2023).** The Hindenburg report on the Adani group (24-Jan-2023). ATGL fell ~80% from its peak [K].
6. **The APM squeeze (Oct-2024 onward).** Repeated cuts; restoration in Jan-2025; re-cut in Apr-2025; ceiling raised to $6.75, then $7.00 [V-snip; section 7.3]. IGL/MGL de-rated from 20×+ to ~13× [primer].
7. **Infrastructure listings (2025).**
   - **Aegis Vopak Terminals IPO**: ₹2,800 Cr fresh issue at ₹235; listed **2-Jun-2025 at a 6.3% discount**; 2.09× subscribed [V-snip].
   - India added regas capacity (Chhara; Dabhol to 5) to **52.7 mtpa** [V-snip].
8. **The West Asia war (Feb/Mar-2026 onward).**
   - Ras Laffan was struck. Qatar declared FM (28-Feb to at least Aug-2026). JKM went above $21. India rationed gas (9-Mar order).
   - LPG crunch; retail fuel price hikes (May); CNG hikes (May, Aug).
   - The US, then Oman, replaced Qatar as India's top LNG supplier [V-snip].
   - Ceasefire/talks in Apr and Jun; a renewed attack on a Qatari tanker on 6-Jul-2026 put the restart on hold [V-snip].
9. **Adani legal overhang lifted (May-2026).**
   - **18-May-2026:** OFAC settlement by **Adani Enterprises, $275m, for 32 apparent Iran-sanctions violations tied to LPG purchases**.
   - The **DOJ dismissed the criminal case against Gautam and Sagar Adani with prejudice** (reported the same day, 18-May-2026).
   - The SEC civil case was settled: $6m (Gautam) and $12m (Sagar), approved by Judge Garaufis [V-snip moneylife/theweek/MLex].
   - **NB:** the brief says "criminal counts dismissed with prejudice Aug-2026". Search results date the DOJ dismissal to **18-May-2026**. An August date may be the court's formal order or the SEC judgment. **Flag; verify.**
   - **The OFAC case concerns LPG imports.** It is relevant to the LPG-sourcing archetype (sanctions-screening risk), not to ATGL's CGD operations.

### 8.2 Cycles to explain
- **The CGD margin cycle is policy-driven, not demand-driven.** EBITDA/scm:
  - ~₹6–7 (FY19) → ₹8–9 (FY21, cheap APM)
  - → ~₹4–5 (H1 FY23, 2022 spike)
  - → ₹8–12 (FY24, Parikh cap + cheap LNG; MGL ~₹12+)
  - → ₹5–8 (FY26, APM cuts)
  - → IGL ₹3.4 / MGL ₹7.9 (Q1 FY27) [primer; V-snip; K/E].
- **The LNG terminal cycle is utilisation-driven.** Dahej ran ~100%+ (FY20) → ~80% (FY23) → ~95% (FY25) → ~90% (Q4 FY26) → 66% on new capacity (Q1 FY27) [primer; K/E]. **Profit has been flat at ₹3,650–3,950 Cr for three years** [primer].
- **LPG is a secular import growth story** with episodic supply shocks: 2022 Saudi CP spike; 2026 Hormuz.

---

## 9. Unit economics and native KPIs (definitions and drivers; benchmarks in §F)

### 9.1 CGD KPIs
1. **Sales volume (mmscmd).** Total, and split by CNG / PNG-D / PNG-I / PNG-C.
   - Metros grow 4–8%; new GAs 12–20%.
   - FY26: IGL 9.39, MGL 4.59, ATGL 3.10 standalone (5.0 incl. JV) [primer; E].
2. **EBITDA/scm (₹).** EBITDA ÷ sales volume. Q1 FY27: IGL 3.4, MGL 7.9, ATGL ~9.3 [E: ₹281 Cr ÷ 303 mmscm].
   - Normalised targets: IGL 7–8 (long-term 7), MGL >8 (was 10–12) [V-snip sahi].
3. **Gas cost/scm (₹)** and **gross spread/scm (₹)** = net realisation (ex-excise/VAT) − gas cost.
   - Metro gross spread ~₹10–15/scm. Opex ~₹4–6/scm [E].
4. **APM share of the priority pool (%).** The single best leading indicator of margin (trap 4).
5. **CNG/petrol price ratio (₹/kg ÷ ₹/l)** and **₹/km saving.** Above ~0.9 per unit, conversion momentum fades [E/K].
6. **CNG stations** (count, additions/yr), and **throughput per station** (t/day). Metro stations sell ~8–15 t/day; new-GA stations 2–5 t/day [E].
7. **PNG-D connections** (lakh) and the **gas-ification ratio** (connected and consuming ÷ connections laid).
8. **Inch-km of steel pipeline** (MWP metric).
9. **Capex per GA** and **capex per mmscmd added.**
   - Rule of thumb: ~₹800–1,500 Cr per mature GA over 8–10 years [E].
   - ATGL: ~₹1,500 Cr/yr on 34 direct GAs [K/E]. IGL FY27 capex guidance ₹1,500 Cr [V-snip].
10. **ROCE / RoE.** Mature metro 18–25% historically; ~14% now (IGL) [primer].

### 9.2 Terminal KPIs (Petronet)
1. **Throughput (TBTU/quarter)** and **utilisation (%)** = TBTU ÷ (mtpa × 52 ÷ 4). Q1 FY27: Dahej 192 TBTU (66%); total 207 TBTU (58%); Kochi ~23% [V-snip].
2. **Regas tariff (₹/mmbtu)** and escalation. Dahej ~₹66–69 (+5%/yr); Kochi ~₹114.5 [V-snip Argus].
3. **Long-term vs spot/tolling mix.** Dahej: 8.5 mtpa Qatar back-to-back + ~8.25 mtpa tolling (pre-expansion) [V-snip Argus; primer].
4. **Use-or-pay / take-or-pay recoveries (₹ Cr).** A one-off but recurring item.
5. **Trading/inventory gains** (Q1 FY27: ~₹300 Cr trading + ~₹190 Cr inventory, per PL) [V-snip].

### 9.3 LPG/terminal KPIs (Aegis/AVTL)
1. **LPG terminal throughput (mt/yr):** 5.15 mt in FY26 (+14%) [primer].
2. **LPG distribution volume (kMT):** 754 in FY26 (+45%); Q1 FY27 277 (+91%) [V-snip deck].
3. **Distribution EBITDA/t (₹):** ~₹4,000 → ~₹7,000 (Q4 FY26) [primer].
4. **Static capacity:** LPG MT, liquids KL/cbm. **Utilisation of liquid tankage (%)**: ~85–95% for good terminals [K/E].
5. **Liquid terminal EBITDA margin (%):** ~70–75% [primer: 472/644 = 73%].

---

## 10. Global lens

### 10.1 Global LNG
- **2025 trade: 437 mt (record, +6.3%).** US 110.7 mt, Qatar 81.5 mt, Australia ~80 mt [K/E]; together 62% [V-snip IGU].
- **Coming wave:** ~150–200 mtpa of new liquefaction by 2030 [K: IEA/IGU]. Qatar North Field East/South (+48 mtpa → 126–142 mtpa by 2030 [K]); US Plaquemines, Golden Pass, Corpus Christi Stage 3 [K].
  - **This wave was the bull case for cheap LNG and Petronet's utilisation from 2027.**
  - **The 2026 war damaged ~12.8 mtpa of Qatari capacity for 3–5 years** [V-snip] and pushed the glut back.
  - **Volatility:** S&P measured JKM volatility at an average 94% over Mar–Sep 2026; winter implied volatility 59–70% (as of 30-Sep-2026) [V-snip S&P 19-Oct-2026].
- **Contracting:** Qatar's 2024 renewal with Petronet (7.5 mtpa, 20 years to 2048, ~$78 bn) saves ~$0.8/mmbtu. The old slope was 12.67% of Brent. The new slope was reported at ~12% (S&P), against the ~10.2% Qatar gave Bangladesh/China/Pakistan; **unconfirmed** [V-snip]. Indian buyers also signed US/ADNOC/TotalEnergies term deals in 2024–25 [K].

### 10.2 Global city-gas comparables [V-snip TipRanks/Yahoo/MarketScreener 2026; K]
| Company | Market | Model | P/E | EV/EBITDA | Notes |
|---|---|---|---|---|---|
| ENN Energy (2688.HK) | China | CGD + integrated energy | ~10–11× | ~8× | Connection-fee decline, retail gas margin RMB 0.5/m³ ≈ ₹6.5/scm [K/E] |
| China Resources Gas (1193.HK) | China | CGD | ~10× | ~8.4× | State-owned |
| Hong Kong & China Gas (Towngas, 0003.HK) | HK + China | Town gas utility | ~18–22× [K] | ~13× [K] | Regulated HK monopoly |
| Tokyo Gas (9531.T) | Japan | Gas utility + LNG | ~10–15× [K] | ~7–9× [K] | Deregulated retail since 2017 |
| **IGL / MGL** | India | Metro CGD | ~13× | ~8–10× [E] | Debt-free, net cash |
| **ATGL** | India | Growth CGD | ~125× | ~60×+ [E] | Outlier |
| **Petronet** | India | Regas | ~11× | ~6–7× [E] | — |

**Takeaways.**
- IGL/MGL now trade **in line with Chinese CGD**, which face the same "mature-growth, regulated-margin" story.
- ATGL's multiple has no global analogue.
- **Indian metro CGD per-unit margins (₹5–9/scm) exceed Chinese retail gas margins (~₹6/scm)**, and India's per-capita gas use is far lower, so the runway is longer [E].

### 10.3 Other comparables
- Global tank storage: **Royal Vopak** (EV/EBITDA ~9–11× [K]), Oiltanking (Marquard & Bahls, private).
- LNG terminals: Japanese/Korean utility-owned; **Excelerate Energy** (FSRUs, US-listed) [K].
- **Aegis's ~50× P/E is ~3× Vopak's earnings multiple** [E].

---

## 11. Technology and disruption risks

1. **EVs (the biggest structural threat to CNG-T).**
   - **E-3W:** L5 passenger EV share 32% (May-25) → 43.1% (Apr-26) → 50.3% (May-26). Q1 FY27 average 46.9%; Jan–Jul 2026 42.9% (1.99 lakh units). L5 cargo ~26–30% [V-snip EVreporter/Vahan].
     - **About half of new Indian passenger autos are now electric.** That attacks the highest-consumption CNG fleet.
   - **E-buses:** Delhi's DTC/cluster fleet is now majority electric (≥3,000–4,000 e-buses by 2025–26 [K/E, verify]). Mumbai BEST is transitioning to e-buses [K]. **Every CNG bus replaced removes ~80–100 kg/day (~110–140 scm/day)** [E].
   - **E-cabs:** fleet aggregators (BluSmart's collapse in 2025 [K], Uber/Ola EV programs) and Delhi's aggregator policy mandate fleet electrification [K].
   - **Private cars:** EVs ~4–5% of PV in FY26 [K/E] vs CNG ~22%. **For private cars, CNG is winning the "cheap fuel" war for now.** Maruti's CNG push is a strategic hedge against EV economics.
   - **Net:** CNG volume growth persists for ~5+ years (car parc grows), but **the growth mix shifts from high-usage commercial to low-usage private**, which lowers volume per station [E].
2. **Hydrogen / H-CNG blending.** Pilots only (IGL, GAIL Indore, NTPC Kawas). Immaterial before 2030 [K].
3. **CBG.** Mandated (section 7.7). It is an **opportunity** (CGDs own CBG plants: ATGL 2, IGL/MGL JVs) and a **cost** (dearer than APM) [primer; E].
4. **LNG for trucks.** Nascent (IOC, GAIL, ATGL LNG stations). It competes with diesel and electric/hydrogen trucks. A small optionality [primer].
5. **Induction cooking / electric cooking vs PNG-D and LPG.** A slow, minor threat. Electricity tariffs make induction competitive in some states [K/E].
6. **For terminals:**
   - **FSRUs** (floating storage-regas units) lower entry barriers and add overcapacity (Jafrabad, Jaigarh).
   - **Ammonia/green-fuels** storage is an opportunity: Aegis's Pipavav ammonia terminal (36,000 MT; transferred to a subsidiary for ₹525 Cr on 24-Aug-2026) [primer; V-snip].
7. **Digital/smart metering, SCADA, GIS:** opex efficiency, not disruption.

---

## 12. What to watch (leading indicators, events, pipelines)

**Monthly**
- **PPAC Natural Gas snapshot:** consumption by sector, LNG imports, domestic output.
- **APM ceiling/formula notifications.**
- **Kpler/Equirus LNG imports by source.**
- **JKM and Brent.**
- **Vahan registrations** (CNG PV share, e-3W share).
- **Delhi/Mumbai CNG and petrol prices.**
- **PPAC LPG consumption.**

**Quarterly**
- MoPNG **APM allocation ratio** for the next two quarters (two-quarter advance basis).
- Company EBITDA/scm, volume, gas-sourcing mix.
- Petronet TBTU/utilisation; Aegis LPG throughput and distribution EBITDA/t.

**Event calendar (as of 21-Oct-2026)**
1. **Q2 FY27 results** (late Oct to mid-Nov 2026; dates to be confirmed by the company file). Watch:
   - IGL EBITDA/scm recovery after the Aug CNG hike;
   - Petronet's Q2 with Qatar FM still in place (Aug FM confirmed) [V-snip];
   - ATGL gas cost.
2. **Qatar FM status and Hormuz transit** (monthly reviews). The 21-Sep statement was "normal ops at parts within weeks of reopening" [V-snip]. **Status on 21-Oct-2026 not found.**
3. **PNGRB final unified-tariff amendment** (comments closed 23-Oct-2026) [V-snip].
4. **APM allocation for Q4 FY27 / Q1 FY28**, and the effect of the PNG-household incentive (from 1-Sep-2026).
5. **Delhi EV Policy 2.0: the 1-Jan-2027 e-3W-only registration start.** Watch for slippage or notification changes.
6. **CBO step-up to 4% in FY28** (Apr-2027); FY27's 3% compliance.
7. **Petronet:**
   - Dahej expansion offtake contracts (GAIL at ₹52.05?);
   - **PDH-PP petchem (~₹20,685 Cr) progress**;
   - **Gopalpur (5 mtpa, ~₹6,355 Cr)**;
   - Qatar renewed contract from 2028 at the lower price, with **the reported regas cut of up to ₹30/mmbtu from 2028** [V-snip Argus].
8. **APM ceiling for Apr-2027** (likely $7.25 if the +$0.25/yr pattern holds) [E].
9. **GST inclusion of natural gas** (GST Council agenda) [V-snip committee Apr-2026].
10. **Aegis/AVTL:** Mangalore/Pipavav ramp, JNPA propane tank (51,998 MT, ₹142.5 Cr contract), fundraising (board 28-Sep-2026, unverified) [V-snip].
11. **Global LNG supply wave 2026–28** (US/Qatar NFE timing after the war damage).
12. **Gujarat Energy** (ex-Gujarat Gas) post-merger reporting; Morbi I/C demand vs propane.
