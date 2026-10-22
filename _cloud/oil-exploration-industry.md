# Indian Oil & Gas E&P (Crude Oil || Oil Exploration & Production): Research Dossier + Company Fact Packs

Compiled 2026-10-22 for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), §0–12 plus sections A–H.
- **Part 2** is the company fact pack for both members (brief-companies.md), with a JSON block.
- **Part 3** is the company-KPI appendix: summary grid, aggregates, reconciliation vs primers, primer issues and source URLs.

**Members (2, Tier C):** Oil and Natural Gas Corporation (ONGC · 500312 · primers/ongc.html) and Oil India (OIL · 533106 · primers/oil-india.html). Display name: "Oil & Gas E&P". Slug: oil-exploration.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source (URL inline or in §3.5). The main fetched primaries are:
  - screener.in consolidated and standalone pages for ONGC and OIL, plus HPCL and MRPL consolidated (pulled 22-Oct-2026, ~6 pm IST);
  - ONGC's Q1 FY27 earnings-call transcript (5-Aug-2026, ongcindia.com);
  - Oil India's Q1 FY27 call transcript (10-Aug-2026, BSE filing) and its FY26 Investors' Meet presentation (25-May-2026, BSE filing);
  - ONGC's Integrated Annual Report 2025-26 (BSE filing);
  - PPAC's "Snapshot of India's Oil & Gas data – Oct 2026", the PPAC Ready Reckoner FY2025-26, PPAC's monthly gas-price notifications Mar–Oct 2026 and HP-HT ceiling notices, and PPAC's SAED/export-levy table (source CBIC).
- **[V-snip]** = verified only from a search-result summary or a secondary article (broker, news), not the primary document.
- **[K]** = well-established public fact from memory. The source is named but it was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present it as "approx." or as a range.
- **[primer]** = from our own primers (ongc.html refreshed 30-Jun-2026; oil-india.html refreshed 3-Jul-2026).
- **[screener 22-Oct-26]** = screener.in pages pulled 22-Oct-2026: ONGC ₹225 (m-cap ₹2,83,395 Cr) and OIL ₹457 (m-cap ₹74,467 Cr).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. MMT = million metric tonnes. BCM = billion cubic metres. MMSCMD = million standard cubic metres per day. MMTOE = million tonnes of oil equivalent. bbl = barrel. boe = barrel of oil equivalent. mmBtu = million British thermal units. **GCV** = gross calorific value (Indian gas prices are quoted on GCV).
- **Conversions (PPAC [V]):**
  - 1 t crude = 7.33 bbl.
  - 1 BCM/yr = 2.74 MMSCMD.
  - 1 mmBtu = 25.2 SCM at 10,000 kcal/SCM.
  - NCV = 90% of GCV.
  - 1 MMTPA LNG = 3.6 MMSCMD.
  - 1 mb/d = 49.8 MMTPA.
- **Oil-equivalent convention:** both companies add MMT of oil and BCM of gas 1:1 to get "MMTOE". ONGC group FY26: 27.41 MMT + 22.72 BCM = 50.14 MMTOE. OIL FY26: 3.45 + 3.19 = 6.64. On a thermal basis 1 BCM of gas ≈ 0.86–0.90 Mtoe [K], so the 1:1 convention slightly overstates gas. **1 MMTOE ≈ 7.33 million boe** [E].
- **Fiscal year:** FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. Both members have a March year-end. ONGC Videsh's overseas assets are consolidated on the March year.
- **FX: ₹94.9 = US$1** (prompt, ~19–22 Oct-2026) for all USD conversions in this file unless stated. PPAC averages [V]: FY25 ₹84.57/$, FY26 ₹88.31/$, Sep-2026 ₹95.46/$. Use the period FX when converting historical $ realisations.
- **Macro context:**
  - **West Asia war from 28-Feb-2026**: Hormuz disruption, then a ceasefire ~7-Apr-2026 with Hormuz transits still restricted [V-sib from commodity-chem dossier; V-snip Gulf News].
  - **Indian basket $/bbl** [V PPAC RR & Snapshot]: Jan-26 63.08, Feb 69.01, **Mar 113.49, Apr 114.48, May 106.23**, Jun 83.22, Aug 90.19, **Sep 116.09**.
  - **Brent** averaged **$116.77 in Sep-2026** (Aug $90.84; Sep-2025 $68.02) [V PPAC Snapshot]. It was ~$102–107 in early/mid Oct-2026 [V-snip Gulf News].
  - RBI repo was hiked to 5.50% on 7-Oct-2026 [V-sib].

**Q2 FY27 status (as of 22-Oct-2026): neither member has reported. Q1 FY27 (Jun-26) is the latest quarter for both.**

| Company | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|
| ONGC | **Board 4-Aug-2026**; call 5-Aug-2026 [V transcript] | **Not announced** as of 22-Oct (no intimation in screener's BSE announcements feed) [V screener]. SEBI 45-day outer limit is **14-Nov-2026**. Last year the Q2 FY26 call was ~18-Nov-2025 (transcript filename "Transcription181125") [V screener doc list] — so ONGC tends to report at or near the deadline [E]. |
| Oil India | **Board 7-Aug-2026**; call 10-Aug-2026 [V transcript] | **Not announced** as of 22-Oct [V screener]. Q2 FY26 was approved on **14-Nov-2025** [V-snip Univest/NSE]. Expect ~early-mid Nov-2026 [E]. |
| *Subsidiaries already out* | — | **HPCL Q2 FY27 reported 22-Oct-2026**: consolidated PAT ₹3,625 Cr (standalone ₹3,482.6 Cr), H1 still a loss after Q1's −₹12,265 Cr [V screener]. **MRPL Q2 FY27 reported 14-Oct-2026**: consolidated PAT ₹1,901 Cr (press ₹1,881 Cr), ₹3 interim dividend [V screener]. NRL (unlisted) reports with OIL. |

**Read-across for Q2 FY27 [E]:**
- The Indian basket averaged roughly ~$80–85 in Jul [E], $90.19 in Aug and $116.09 in Sep [V]. So the Q2 average is ~$95–97 [E], slightly below Q1's $99 realisation.
- APM gas was capped at $7.00 all quarter (formula price $8.73/$7.86/$9.00) [V PPAC].
- ONGC/OIL standalone Q2 should therefore be strong again, but a little below Q1.
- ONGC consolidated Q2 swings positive because HPCL turned to a ₹3,625 Cr profit.

**Still listed?** Yes — both are listed, with no merger or demerger announced.
- ONGC incorporated a new entity "OPML" on 7-Oct-2026 with ₹25 Cr subscription [V screener announcement; purpose not read — FLAG]. OPML is likely tied to the planned petchem/port JVs, but this is unverified.
- Oil India's arm OGEL (Oil Green Energy Ltd) set up **Hind Oil Biofuels Pvt Ltd (50%)** on 13-Oct-2026 [V screener].
- OIL signed an RSC for **special CBM block SR-ONHP-(CBM)-2026/1** on 15-Oct-2026 [V].
- OIL's board designated a new **corporate office at WTC, New Delhi** (21-Oct-2026) [V].
- None of these changes the comparability of the numbers.

---

## READ THIS FIRST: ten definitional traps

1. **"ONGC" is two companies, and its consolidated revenue is mostly refining.**
   - **Standalone** (the E&P parent), FY26: revenue ₹1,32,506 Cr, OP (screener) ₹61,722 Cr (47%), PAT ₹32,894 Cr [V screener].
   - **Consolidated** (+ HPCL 54.90%, MRPL 71.63% direct / 88.58% group, OVL 100%, OPaL, ONGC Green, PSC-JV shares), FY26: revenue ₹6,08,663 Cr (screener, net of excise) or ₹6,62,247 Cr (company "revenue from operations", gross of excise) [V screener; V ONGC AR26].
   - HPCL alone had FY26 consolidated sales of ₹4,41,771 Cr [V screener]. **~70–75% of ONGC's consolidated revenue is HPCL/MRPL refining and marketing** [E].
   - Consolidated OPM (17% FY26, 8% Q1 FY27) is a refining-blended number. Never compare it with OIL standalone margins.
2. **Pre-minority vs attributable PAT (both companies).**
   - **ONGC FY26:** PAT ₹49,793 Cr is *pre-minority*; **attributable to owners ₹41,424 Cr**; NCI ₹8,369 Cr [V ONGC AR26 MD&A].
   - **ONGC Q1 FY27:** screener "net profit" **₹6,554 Cr is pre-minority**. **Attributable is ~₹11,899 Cr** (+21% YoY), because HPCL lost ₹12,265 Cr and ~45% of that loss belongs to HPCL's other shareholders [V call: HPCL loss; V-snip askfuzz: ₹11,899 Cr; consistent with screener EPS ₹9.46 × 1,258 Cr shares ≈ ₹11,900 Cr].
   - Screener's P/E (6.48×) uses *attributable* EPS (TTM EPS ₹34.59).
   - **OIL FY26:** PAT ₹7,551 Cr pre-minority vs attributable ≈ **₹6,620 Cr** (EPS ₹40.70 × 162.66 Cr shares) [V screener; E]. The gap is NRL's 30.37% outside holders (Assam Govt 26%, EIL 4.37% [K]).
   - **OIL Q1 FY27:** ₹4,027 Cr pre-minority vs ~₹3,631 Cr attributable [E from EPS ₹22.32].
   - **Use attributable PAT for P/E; pre-minority for "group profit pool".** Part 3 shows both.
3. **Screener revenue ≠ company "total income".**
   - OIL's presentation headlines consolidated "Total Income" ₹38,981 Cr for FY26 [V]. Screener shows sales ₹33,081 Cr [V]. The gap is other income (₹3,053 Cr) plus excise/levies netting [E].
   - OIL standalone "total income" ₹24,039 Cr vs screener sales ₹20,480 Cr.
   - ONGC consolidated ₹6.62 lakh Cr (primer, company) vs ₹6.09 lakh Cr (screener).
   - **This file uses screener sales for all aggregates.**
4. **EBITDA bases differ.**
   - ONGC standalone FY26: company EBITDA ₹72,078 Cr (incl. other income) vs screener OP ₹61,722 Cr [V AR26; V screener].
   - OIL standalone FY26: company EBITDA ₹8,753 Cr vs screener OP ₹6,060 Cr.
   - OIL consolidated FY26: company EBITDA ₹13,498 Cr vs screener OP ₹10,446 Cr [V presentation; V screener].
   - **Exploration write-offs (dry wells) sit inside screener "expenses"**, so screener OP is after dry-well costs. ONGC FY26 write-offs were ~₹8,236 Cr [primer].
   - Q1 FY27 ONGC standalone EBITDA ₹28,355 Cr equals screener OP (61%) [V-snip Ventura].
5. **Crude "production" has three scopes for ONGC.**
   - (a) **Nomination crude only:** 16.8 MMT FY26 (PPAC RR table 2.5B [V]).
   - (b) **ONGC "standalone" crude + condensate in operated nomination areas:** 19.33 MMT (AR26 table) — *the primer's "18.36 MMT crude" appears to exclude condensate* [V AR26 vs primer; FLAG].
   - (c) **Incl. JV share:** 20.501 MMT FY26 (20.892 FY25) [V AR26].
   - (d) **Group incl. OVL:** 27.41 MMT crude + 22.72 BCM gas = **50.14 MMTOE** [V AR26].
   - Gas: ONGC 19.53 BCM; + JV 0.43; + OVL 2.76 = 22.72 BCM [V AR26].
   - PPAC's company gas table counts ONGC nomination gross gas at 18,481 MMSCM [V RR]. That is a different scope again.
   - **Always state scope.** For OIL the domestic scope is clean: 3.45 MMT + 3.19 BCM = 6.64 MMTOE (FY26) [V presentation]. The "8.7 MMTOE FY26" on OIL's strategy slide is not reconciled — likely includes overseas share [FLAG].
6. **Gross vs net realisation.**
   - The headline "$99.45/bbl" (ONGC Q1 FY27) and "$98.73/bbl" (OIL) are **pre-royalty, pre-cess** sale prices. Brent-linked plus a premium: ONGC says "Brent is the base … about 5% … 4% comes to our kitty" [V call].
   - **Statutory levies** come off before profit:
     - royalty — ~20% of wellhead value onshore nomination, ~10% offshore, lower/nil for deepwater early years [K];
     - **OID cess 20% ad valorem** on nomination crude [V PPAC table: "Cess @20% + NCCD ₹50/MT"];
     - NCCD ₹50/t;
     - and in 2022–24, **SAED** (windfall tax).
   - Net-of-levy realisation is roughly 65–75% of gross for nomination crude [E].
   - Gas prices are on GCV basis. Royalty on gas is paid on the APM price.
7. **APM "price" vs APM "ceiling" vs "new-well gas" vs "HP-HT ceiling".**
   - **Formula price** = 10% of the Indian crude basket (monthly), with **floor $4 / ceiling $6.50** from Apr-2023. The ceiling rises $0.25/yr from FY26: **$6.75 FY26, $7.00 FY27** [V PPAC; V ONGC AR26 note 30.2].
   - **New-well gas** from nomination fields gets a **20% premium** on the APM price (effectively 12% of the basket) [V ONGC AR26]. ONGC realised **$13.31/mmBtu on new-well gas in Q1 FY27** [V-snip Angel One].
   - **HP-HT / deepwater gas** (e.g., KG-98/2, KG-D6) has marketing freedom up to a **separate ceiling**: $8.90 (Apr–Sep 2026), **$9.89 (Oct-26–Mar-27)** [V PPAC].
   - **The OIL primer's "APM raised to $7 for FY26" is wrong**: FY26's ceiling was $6.75; $7.00 applies from Apr-2026 (FY27) [V PPAC table 23].
8. **Windfall tax (SAED) on domestic crude is NOT back.**
   - PPAC's SAED table [V] shows crude SAED nil from 18-Sep-2024, formally "scrapped effective 02.12.2024" [V PPAC Snapshot footnote].
   - Since **27-Mar-2026** the Centre levies SAED/AED **on exports of diesel and ATF** (petrol from 16-May-2026), revised fortnightly [V PPAC; V BusinessToday].
   - Refiners (e.g., NRL) also gave **OMC discounts "exactly as per SAED"** [V OIL call]. That is a refining-margin claw-back, not an upstream tax.
   - Writers must not say "the windfall tax returned" for ONGC/OIL crude.
9. **Gas volume ≠ gas sold.** ONGC's gas **sales-to-production ratio fell to 75–76% in Q1 FY27 from ~79%** (internal use, flaring and customer offtake) [V call]. OIL shut in 30–60 wells for lack of offtake [V call]. Revenue models must use sales volume.
10. **Fiscal-year and price-period mismatches.**
    - APM prices are monthly (from Apr-2023). HP-HT ceilings are half-yearly (Apr–Sep, Oct–Mar).
    - The Indian basket was **redefined from Mar-2026** to the crude actually imported each month [V PPAC RR note].
    - OIL's realisation is per barrel *sold*. ONGC's "net realisation" includes the premium mechanics in trap 6.

---

## 0. Top-line framing (what an expert leads with)

- **Two state-controlled producers pump ~86% of India's crude and ~62% of its gas** [V PPAC: Apr–Sep-26 crude share ONGC 71.7%, OIL 14.4% of PI production; FY26 gas: ONGC 18.5 + OIL 3.1 of 34.8 BCM gross].
  - **India is still 88.7% import-dependent for crude** (FY26, consumption basis) and ~50% for gas [V PPAC RR]. The figure was 88.1% in H1 FY27 [V].
  - Domestic crude + condensate fell from **32.2 MMT (FY20) to 28.0 MMT (FY26)**, and H1 FY27 is **−3.5%** (13.7 vs 14.2 MMT) [V PPAC].
  - Self-sufficiency in petroleum products fell from 15.0% to **11.3%** [V PPAC RR].
- **2026 is a price shock year, and it turned these two "cheap PSUs" into record earners.**
  - The West Asia war (28-Feb-2026) took the Indian basket from $69 (Feb) to **$113–114 (Mar–Apr)**. It eased to $83 (Jun) and **re-spiked to $116 (Sep)** [V PPAC].
  - **Q1 FY27 standalone results:**
    - ONGC: PAT **₹17,034 Cr (+112%)**, record PBT ₹22,848 Cr, crude **$99.45/bbl** vs $66.13 [V call; V screener].
    - OIL: PAT **₹2,870 Cr (vs ₹813 Cr)**, record revenue ₹7,958 Cr, crude **$98.73/bbl** vs $66.20, EBITDA margin 54%+ [V call].
  - **Combined standalone PAT ₹19,904 Cr in one quarter vs ₹37,349 Cr in all of FY26** [E: sums of screener].
- **Policy kept the upside "uncapped" on crude but capped on gas.**
  - No windfall tax on crude (trap 8). The Centre chose export levies on fuels and an **excise cut to ₹11.90/₹7.80 per litre on petrol/diesel from 26-Mar-2026** [V PPAC].
  - Gas is the opposite: APM formula prices hit **$10.76–11.59/mmBtu (Apr–Jun)** and **$11.22 (Oct)**, but nomination gas was **capped at $7.00** [V PPAC].
  - The difference (~$3.7–4.6/mmBtu on ~70% of ONGC's gas) is the 2026 transfer from producers to fertiliser, power and CGD consumers [E].
  - **New-well gas** (20% premium, 19% of ONGC's gas volume, 38% of nomination gas revenue in Q1) escaped the cap and fetched ~$13.3 [V call; V-snip].
- **The integrated hedge worked — for ONGC, painfully.**
  - HPCL lost **₹12,265 Cr in Q1 FY27** on under-recoveries (retail prices held, LPG losses). ONGC's *consolidated* pre-minority PAT fell to ₹6,554 Cr even as standalone doubled [V call; V screener].
  - PSU OMCs as a group lost **₹18,150 Cr in Q1 FY27** while PSU upstream/midstream earned ₹24,196 Cr [V PPAC Snapshot].
  - **OIL's refinery leg (NRL) is a pure refiner without retail**, so it *benefited*: GRM **$35.95/bbl** in Q1 FY27, PAT ₹1,305 Cr [V call].
- **Volumes are flat-to-down, and the turnaround is promised for FY27–FY29.**
  - **ONGC:**
    - FY26 standalone O+OEG 38.87 MMTOE (ex-JV). Guidance ~39 for FY27 and ~40 for FY28, split 50:50 oil and gas [V call].
    - Q1 FY27 crude −4.9% (4.452 MMT), gas −1.9% (4.756 BCM) [V-snip].
    - KG-98/2 oil has slid to **~21,000 bpd** (vs ~45,000 hoped). Its gas is ~1.5–1.7 MMSCMD, targeted at 3+ by Q4 FY27 and 6–7 by Q4 FY28 [V call].
  - **OIL:**
    - Crude is at a record **10,921–11,017 t/d** (Jun–Aug 2026). FY27 crude ≥3.9 MMT (vs 3.45), FY29 ~4.2 MMT [V call].
    - **Gas 2.93 → 3.8 BCM (FY28) → ~5 BCM (FY29)** once pipelines (DNPL common carrier, IGGL feeder line) remove the evacuation bottleneck [V call].
- **Valuation is still a PSU-cyclical discount** (screener 22-Oct-26):
  - **ONGC**: ₹2,83,395 Cr, **P/E 6.48× (attributable TTM)**, P/B 0.76× (consolidated BV ₹296), **yield 5.89%**.
  - **OIL**: ₹74,467 Cr, **P/E 8.91×**, P/B 1.28×, yield 2.52%.
  - ONGC (6.5×) is slightly below CNOOC (6.8×) and Petrobras (7.4×). OIL (8.9×) is slightly above both.
  - Both sit well below Equinor (12.6×), Saudi Aramco (14.4×) and ExxonMobil (22.8×) [V companiesmarketcap Oct-2026].
  - The 1-year stock move is ONGC −9% and OIL +12% [V screener].

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Products

| Product | What it is | Customers / pricing | Members |
|---|---|---|---|
| **Crude oil** (incl. condensate) | Liquid hydrocarbons from nomination (state-allotted, pre-1999), pre-NELP/NELP PSC and HELP/OALP RSC blocks | Sold under **Crude Oil Sales Agreements (COSA)** to designated PSU refiners (HPCL, IOCL, BPCL, MRPL, CPCL; NE crude to IOCL/NRL) at **Brent-linked** formula prices [V ONGC AR26 note 30.1]. Western Offshore COSAs valid to 31-Mar-2027 [V]. | ONGC (~72–73% of India), OIL (~12–15%) |
| **Natural gas** — nomination (APM) | Gas from nomination fields | **APM price = 10% of Indian basket, floor $4, ceiling $6.75 (FY26) / $7.00 (FY27)**. Allocated by government to CGD (CNG/PNG), fertiliser, power. NE consumers pay 60%; the GoI budget pays 40% as "North-East gas subsidy" [V ONGC AR26] | ONGC, OIL |
| **New-well gas (NWG)** | Gas from new wells / well interventions in nomination fields | **APM + 20% premium (12% of basket)**. ONGC's NWG is allocated to GAIL for CGD and to its Dahej C2-C3 plant (MoPNG 8-Aug-2024) [V AR26] | ONGC (19% of volume Q1 FY27), OIL ("all incremental gas will be NWG") [V calls] |
| **HP-HT / deepwater gas** | Gas from deepwater, ultra-deepwater, HP-HT discoveries | **Marketing freedom up to a ceiling** set half-yearly: $8.90 (Apr–Sep 26), $9.89 (Oct-26–Mar-27) [V PPAC] | ONGC (KG-98/2, DSF), RIL-bp KG-D6 (non-member) |
| **Value-added products (VAP)** | LPG, naphtha, ethane-propane (C2-C3), SKO, LSHS from gas processing at Hazira/Uran/Dahej | LPG sold to OMCs under MoPNG guidelines; naphtha/C2-C3 to OPaL and others | ONGC (2.561 MMT FY26, ₹11,879 Cr revenue) [V AR26]; OIL (small LPG at Duliajan) |
| **Refined products** | Petrol, diesel, ATF, LPG, petchem | Regulated-in-practice retail prices (OMC pricing "frozen" in crises) | ONGC via **HPCL** (26.04 MMT throughput FY26, GRM $8.79) and **MRPL** (16.774 MMT, GRM $9.22) [V AR26]; OIL via **NRL** (3 MMTPA, 103.75% utilisation, GRM $13.43 FY26) [V presentation] |
| **Petrochemicals** | Polymers from naphtha/C2-C3 | Market-priced | ONGC via **OPaL** (Dahej; FY26 EBITDA ₹1,207 Cr; Q1 FY27 −₹57 Cr) [V call]; OIL via BCPL (10% + NRL 10%), APL (NRL 26% + OIL 23%), NRL's 360 ktpa PP project [V presentation] |
| **Pipelines / transport** | Crude & product pipelines | Tariff-based | OIL: NBPL crude line **9.65 MMTPA**, NSPL products **1.72 → 5.5 MMTPA** (mechanical completion 12-Oct-2025), DNPL gas **1.2 → 2.5 MMSCMD**; 20% of IGGL [V presentation] |
| **New energy** | RE, CBG, green H₂ | PPA / market | ONGC Green Ltd: RE portfolio **2.853 GW** [V call]; OIL: 188 MW RE, 5+ GW by 2040, 25 CBG plants by 2030 [V presentation] |

### 1.2 Value chain (wellhead → consumer)

1. **Acreage:**
   - Nomination PMLs (legacy, ~79% of crude in Sep-2026 [V PPAC]).
   - Pre-NELP and NELP PSCs (profit-sharing: cost recovery then profit petroleum split).
   - **HELP/OALP revenue-sharing contracts** (since 2016; bid on revenue share and work programme; pricing and marketing freedom).
   - DSF (discovered small fields).
2. **Exploration:** seismic (2D/3D), then exploratory wells.
   - ONGC drilled **100 conventional exploratory wells in FY26**, with a success ratio of **53.4% (55 of 103 wells concluded)** [V AR26].
   - OIL drilled **22 exploratory + 52 development wells** in FY26 and targets **42 + 57** in FY27 [V call].
   - Dry wells are expensed (successful-efforts accounting).
3. **Development:** platforms, subsea, pipelines, wells, EOR/IOR. ONGC Western Offshore has **>₹40,000 Cr** of projects in execution [V call].
4. **Production:** lift crude and gas, then process (separate gas, extract LPG/C2-C3/naphtha at Uran/Hazira).
5. **Sale:**
   - Crude to refineries under COSA.
   - Gas into GAIL/GSPL/IGGL grids at APM/NWG/HP-HT prices.
   - VAP to OMCs and petchem.
6. **Refining and marketing** (consolidated, not E&P): HPCL/MRPL/NRL turn crude (mostly imported) into fuels sold through ~1,03,682 retail outlets nationally (1-Jul-2026) [V PPAC RR].
7. **The state** takes royalty (to Centre for offshore, to states for onshore), OID cess, GST on royalty (disputed, see §7), corporate tax and dividends.
   - **Petroleum-sector contribution to central exchequer: ₹4,75,719 Cr in FY26 (14% of Centre's revenue receipts); states ₹3,41,821 Cr** [V PPAC Snapshot].
   - OIL alone contributed **₹50,687 Cr over FY22–FY26** (61% Centre, 39% states) [V presentation].

### 1.3 Where value is captured
- **At the wellhead when crude is high, but only on crude.**
  - The upstream PSUs' standalone margin is EBITDA 47–61% of revenue (ONGC: FY26 47% OP / 54% company EBITDA; Q1 FY27 61%) [V].
  - Royalty and cess take ~25–35% of gross crude value before that [E].
- **Gas value is captured mostly by consumers.** In H1 2026 the APM cap transferred ~$3.7–4.6/mmBtu to fertiliser, power and CGD users [E from V PPAC prices].
- **Refining margins are captured by integrated owners only when retail prices are allowed to move.**
  - In 2026, OMC marketing (HPCL) lost heavily (Q1: −₹12,265 Cr).
  - Stand-alone refiners without retail (MRPL, NRL) made windfall GRMs: NRL $35.95/bbl in Q1 FY27 [V call]; MRPL Q1/Q2 PAT ₹946/₹1,901 Cr [V screener].
- **The exchequer** captures a large share via royalty, cess, taxes and dividends. GoI's direct dividend share: ONGC ₹16,669 Cr × 58.89% ≈ **₹9,816 Cr**; OIL ₹1,871 Cr × 56.66% ≈ ₹1,060 Cr for FY26 [E]. Add indirect stakes via IOC, GAIL, LIC (ONGC's "Government" category 10.30%; OIL's IOC/BPCL/HPCL 9.87%) [V screener; V presentation].

---

## 2. Size and growth

### 2.1 India production (PPAC [V])

| FY | Crude + condensate (MMT) | of which ONGC nomination | OIL nomination | PSC/RSC | Condensate | Gross gas (BCM) | O+OEG (MTOE) |
|---|---|---|---|---|---|---|---|
| FY20 | 32.2 | 19.2 | 3.1 | 8.2 | 1.6 | n/a | n/a |
| FY21 | 30.5 | 19.1 | 2.9 | 7.1 | 1.4 | 28.67 | n/a |
| FY22 | 29.7 | 18.5 | 3.0 | 7.0 | 1.2 | 34.02 | n/a |
| FY23 | 29.2 | 18.4 | 3.2 | 6.2 | 1.4 | 34.45 | n/a |
| FY24 | 29.4 | 18.1 | 3.3 | 5.7 | 2.2 | 36.44 | n/a |
| FY25 | 28.7 | 17.4 | 3.4 | 5.6 | 2.2 | 36.11 | 64.8 |
| FY26 | 27.9–28.0 | 16.8 | 3.4 | 5.7 | 2.0 | 34.78 | 62.7 |
| H1 FY27 | 13.7 (−3.5%) | — | — | — | 0.9 | 16.80 (−4.4%) | 30.5 (−4.1%) |

**Older years [K]:** the 10-year arc is ~37.5 MMT crude in FY12 → 32.2 FY20 → 28.0 FY26. Gas: 47.6 BCM in FY11 (KG-D6 peak) → 28.7 BCM FY21 trough → 36.4 BCM FY24 (KG-D6 R-series/MJ revival) → 34.8 FY26.

**Gas by company (gross MMSCM, PPAC RR table 3.5 [V]):**

| FY | ONGC | OIL | PSC/JV (incl. RIL-bp KG-D6, Cairn) | Total |
|---|---|---|---|---|
| FY21 | 21,872 | 2,480 | 4,321 | 28,672 |
| FY22 | 20,629 | 2,893 | 10,502 | 34,024 |
| FY23 | 19,969 | 3,041 | 11,440 | 34,450 |
| FY24 | 19,316 | 3,090 | 14,032 | 36,438 |
| FY25 | 18,795 | 3,175 | 14,143 | 36,113 |
| FY26 | 18,481 | 3,099 | 13,195 | 34,776 |

**Regional crude, FY26 (TMT, [V RR]):**
- Western Offshore 11,919 (43%) — down from 14,857 in FY20.
- Gujarat onshore 5,183 (19%).
- Assam 4,415 (16%) — up from 4,093.
- **Rajasthan 2,946 (11%) — down from 6,653 in FY20 (Cairn/Vedanta decline).**
- **Eastern Offshore 2,725 (10%) — up from 557 (KG-98/2 and others).**

### 2.2 Import dependence and the bill [V PPAC]
- **Crude import dependence (consumption basis):** FY21 84.4%, FY22 85.5%, FY23 87.4%, FY24 87.8%, FY25 88.2%, **FY26 88.7%**, H1 FY27 88.1%. Gas: 54.4% (FY21) → 50.1% (FY26).
- **Crude imports:** FY26 246.6 MMT, $123.4–125.8bn. **H1 FY27 122.7 MMT for $90.6bn (vs $61.9bn H1 FY26, +46%).**
- **Net oil & gas import bill** FY26 $119.1bn. **H1 FY27 $81.1bn vs $60.2bn.**
- Petroleum products consumption FY26 241.6 MMT (+1%). **H1 FY27 114.8 MMT (−3.3%)**, led by **LPG −14.9%** (supply shock), with diesel +4.9% and petrol +7.0% [V PPAC flash Sep-26].

### 2.3 Sub-sector revenue and growth (the two members) [V screener; E sums]
- **Standalone (pure E&P + VAP):** FY26 revenue ₹1,52,986 Cr (−0.9% YoY), OP ₹67,782 Cr (44.3%), PAT ₹37,349 Cr (−10.5%).
  - Q1 FY27: revenue ₹54,418 Cr (+47%), OP ₹32,439 Cr (59.6%), PAT ₹19,904 Cr (+125%).
- **Consolidated (incl. HPCL, MRPL, NRL, OVL):** FY26 sales ₹6,41,744 Cr (−0.3%), OP ₹1,13,566 Cr (17.7%), pre-minority PAT ₹57,344 Cr (+26%), attributable ≈ ₹48,044 Cr.
- **USD lens:** standalone FY26 revenue ≈ $17.3bn at FY26 FX ₹88.31; consolidated ≈ $72.7bn [E].
- **Global share:** India produces ~0.6–0.7 mb/d of crude (~0.6% of world supply ~105 mb/d) and consumes ~5.5 mb/d (~5%) [K/E; PPAC: processing 5.46 mb/d FY26].
- **ONGC group overseas** (OVL 9.67 MMTOE FY26) + OIL overseas: total overseas production by Indian companies was **19.2 MMTOE in FY26** (20.2 FY25) [V PPAC].

### 2.4 Forecast [E]
- Government's aspiration: gas to 15% of the energy mix by 2030 (6.13% in 2025 per EI [V PPAC RR]).
- Company guidance implies:
  - ONGC standalone O+OEG +1–3%/yr to FY28 (39 → 40 MMTOE) [V call];
  - OIL +8–10%/yr to FY29–30 (6.64 → 10–12 MMTOE by FY30 is the stretch target) [V presentation].
- National crude output is unlikely to grow much before FY29 without a large deepwater discovery. **Samudra Manthan** (₹84,084 Cr outlay, exploration phase to 2031) is the swing factor [V call].

---

## 3. Demand drivers and end-markets

- **Crude demand is not the constraint.** Every domestic barrel is absorbed by Indian refineries (272.1 MMT processed in FY26, 5.46 mb/d [V]), since domestic crude is only ~10% of throughput. Price, not volume, is the demand variable.
- **Product demand** (drives refining legs):
  - FY26: petrol 42.6 MMT (+6.5%), diesel 94.7 (+3.6%), LPG 33.2 (+6%), ATF 9.2 (+3.9%) [V ONGC AR26 MD&A].
  - H1 FY27: petrol +7.0%, diesel +4.9%, ATF +0.4%, **LPG −14.9%** [V PPAC].
  - Ethanol blending reached **20% for ESY Nov-25–Sep-26** [V PPAC]. This structurally trims petrol-demand growth for refiners (not for upstream).
- **Gas demand** (drives APM allocation and offtake):
  - Consumption FY26 68.75 BCM (−3.6%). Sep-2026 −6.7% YoY; LNG imports −8.6% [V PPAC].
  - The **spot price spike** (IGX GIXI **$28.4/mmBtu in Sep-2026** [V PPAC]) priced LNG out of power and industry and made capped domestic APM gas extremely valuable to its allottees.
  - CGD network covers ~100% of geography: 9,158 CNG stations, 1.77 crore domestic PNG connections [V PPAC Snapshot].
- **Offtake constraints matter for OIL.** Its Assam gas is stranded behind small regional demand (BCPL petchem, NEEPCO power, tea gardens, CGD). NEEPCO swings to hydro when gas is dear [V call]. Only the IGGL feeder line (Dec-2027/FY28) links it to the national grid [V].

---

## 4. Supply side and cost structure

### 4.1 Key inputs and their price drivers
- **Rigs and services** (offshore jack-ups, deepwater drillships, OSVs, well services):
  - Day-rates are global and USD-linked. **Deepwater exploratory well ₹800–1,000 Cr (~$100m)** [V ONGC call]. KG-98/2 well re-entry >₹500 Cr per well [V call].
  - ONGC had to **re-tender seismic contracts** in Q1 FY27 because bids were "not workable" [V call].
- **Statutory levies:** royalty (onshore nomination ~20% of wellhead price; offshore ~10%) [K], **OID cess 20% ad valorem** [V PPAC], NCCD ₹50/t [V], GST on royalty (18% since 1-Jul-2017; OIL provided ~₹2,500 Cr principal [V call]).
- **Manpower:** ONGC ~25,000 employees [K]; OIL 6.6k (1.9k executives, 4.7k unionised) [V presentation]. Both have high fixed employee cost.
- **Depreciation, depletion and amortisation (DD&A):** unit-of-production over proved reserves [V ONGC AR26 policy]. ONGC standalone DD&A ₹25,134 Cr FY26 [V screener]. OIL ₹2,712 Cr consolidated.
- **FX:** realisations are in USD; most costs are rupee. **A weaker rupee raises rupee realisation one-for-one.** FY26 average ₹88.31 → ₹94.9–95.5 now (+7–8%) [V PPAC; prompt].

### 4.2 "Where ₹100 of revenue goes" [E composites]

**(a) ONGC standalone, FY26 (₹1,32,506 Cr revenue, crude ~$63–67/bbl):**

| Item | ₹ per ₹100 revenue | Note |
|---|---|---|
| Statutory levies (royalty + OID cess + NCCD) | ~20 | [E] (~₹26.5k Cr; historically 18–22% of revenue in low-price years) |
| Production / operating costs (excl. levies, incl. employee, contracts, consumables, transport, survey) | ~27 | [E] (~₹36,000 Cr; consistent with §C.1) |
| Exploration write-offs (dry wells) | ~6 | [E: ₹8,236 Cr write-offs FY26 per primer] |
| **= Screener OP (47%)** | **47** | [V] |
| + Other income (dividends from HPCL/IOC/GAIL/Petronet, treasury) | +8 | ₹10,356 Cr [V screener] |
| − DD&A | −19 | ₹25,134 Cr [V] |
| − Interest (mostly lease/decommissioning unwinding) | −3 | ₹4,529 Cr [V] |
| = PBT | **32** | ₹42,415 Cr [V] |
| − Tax (22%) | −7 | [V] |
| **= PAT** | **25** | ₹32,894 Cr [V] |
| Dividend paid (₹13.25 × 1,258 Cr shares) | ~13 | ₹16,669 Cr [V primer/AR] |

**(b) OIL standalone, FY26 (₹20,480 Cr; $69.04/bbl):**
- OP 30% [V screener]. Other income 13% (₹2,693 Cr). DD&A, interest ~15% [E]. PBT ~27%. PAT **22%** (₹4,455 Cr) [V].
- FY26 OP margin was depressed by **higher contract/G&G costs, record drilling and dry wells (Andaman Vijayapuram-2 write-down)** [V call; E].

**(c) Q1 FY27 shock-quarter version (ONGC standalone, $99.45/bbl):**
- OP margin **61%**, PAT margin **37%** (₹17,034 Cr / ₹46,460 Cr) [V].
- Costs were flat in rupees ("opex broadly at the same level") [V call], so **~77% of the incremental revenue fell to EBITDA** after incremental royalty and cess [E: ΔOP ₹11,170 Cr ÷ Δrevenue ₹14,457 Cr].

### 4.3 Capacity, utilisation and the production base
- **ONGC:**
  - Domestic 1P (incl. JV) 528 MMTOE; group 1P incl. OVL **793.31 MMTOE (Apr-2026)** vs 845.87 in FY22 [V AR26].
  - 2P accretion FY26 **44.01 MMTOE**, domestic 2P RRR **1.17** [V AR26].
  - ONGC produced 73% of India's crude and 57% of gas in FY26 [V AR26]. Cumulative production 2,152 MMTOE since inception [V].
- **OIL:**
  - 2P **190 MMTOE domestic** (69 MMT crude + 121 MMTOE gas) + **41 overseas** (21 + 20) = **231 MMTOE**; RRR **1.02** (FY25 0.94); domestic reserve life ~31 years [V presentation].
  - 63 operated blocks over **93,061 sq km** (106,481 incl. non-operated), 55% of it offshore [V presentation; V call].
- **National 2P (MoPNG physical asset account [V RR]):**
  - Crude 3,291 Mbbl (Apr-2022) → **3,101 Mbbl (Mar-2025)**; discoveries 201/104/117 Mbbl vs extraction ~210–215/yr.
  - Gas 6,49,560 → **5,95,386 MMSCM**, after a 32,693 MMSCM downward reappraisal in FY25.
  - **India's 2P crude R/P ≈ 15 years** [E: 3,101 / ~205 Mbbl].
- **Refining legs:** HPCL ~24.8 MMTPA standalone capacity (Mumbai + Visakh) + HMEL JV + Barmer HRRL (9 MMTPA, COD 2026) [K/V RR]; MRPL 15 MMTPA; NRL 3 → 9 MMTPA (target Dec-2026 per PPAC [V RR]; full ramp FY28).

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)

| Basis | ONGC | OIL | Others | Source |
|---|---|---|---|---|
| Crude + condensate, PI basis, Apr–Sep 2026 | **71.7%** | **14.4%** | Vedanta 3.8, CEHL 3.2, RIL 2.4, Sun Petro 1.8, other 1.3 | [V PPAC Snapshot chart; label-to-slice mapping best-effort — FLAG] |
| Crude + condensate, PI basis, Sep-2026 | 71.0% | 15.1% | Vedanta 4.4, CEHL 3.7, RIL 2.0, Sun 1.9, other 2.7 | [V PPAC; same caveat] |
| Crude, FY26 (company claim) | ">73%" | — | — | [V ONGC AR26] |
| Gross gas, FY26 | 53.1% (18.48 BCM) | 8.9% (3.10 BCM) | PSC/JV 37.9% (13.20 BCM; mostly RIL-bp KG-D6) | [V PPAC RR; E shares] |
| Gas incl. JV share, FY26 (company claim) | "~57%" | — | — | [V ONGC AR26] |
| Crude by regime, FY26 | nomination 21.2 MMT (ONGC 16.8 + OIL 3.4 + ~1 condensate) | | pre-NELP 3.7, NELP 2.94, DSF 0.03, OALP 0.02 | [V PPAC] |

- **Two-firm oligopoly by legacy, not by competition.** The nomination regime (pre-1999 acreage granted to the NOCs) still supplies ~79% of crude [V PPAC].
  - Private/JV share peaked during Cairn's Rajasthan plateau (Mangala, ~175–200 kb/d in FY12–FY16 [K]) and RIL KG-D6's 2010 peak.
  - Both are now in decline: Rajasthan 6.65 → 2.95 MMT FY20–FY26 [V].
- **Unlisted/MNC players:**
  - Cairn Oil & Gas (Vedanta, listed via Vedanta; Rajasthan RJ-ON-90/1 PSC — extension litigation [K]).
  - **RIL–bp (KG-D6** R-Cluster, Satellite, MJ — ~28–30 MMSCMD at peak 2023–24 [K]); Sun Petrochemicals; Hindustan Oil Exploration (listed, small); Selan; Jubilant; Invenire; Antelopus (small DSF players) [K].
  - **bp** is ONGC's Technical Services Provider at Mumbai High and the wider Western Offshore [V call].
  - **TotalEnergies and Petrobras** advise OIL on offshore seismic and prospect de-risking [V call].
  - ONGC has MoUs with Equinor, ExxonMobil, Chevron, TotalEnergies, Petrobras, Petronas, Shell and RIL-bp for OALP joint bidding and farm-ins [V AR26].
- **Imports:** 88% of crude is imported. Top sources diversified from 27 to 41 countries [V PPAC RR]. Russia was the largest supplier 2023–25 [K]. Upstream PSUs do not compete with imports on price (both are Brent/Dubai-linked); they compete only for refinery slots under COSA.

### 5.2 Corporate structure of the two members [V screener; V AR26; V presentation; K]
- **ONGC Group:**
  - Standalone E&P.
  - **ONGC Videsh (100%)**: 29 projects in 14 countries, 9.67 MMTOE FY26, 1P 265 MMTOE. Key assets: Sakhalin-1 (20%), Vankor (26% incl. OIL consortium), Mozambique Area 1 (16% [K]), Block 06.1 Vietnam, Azerbaijan ACG, Brazil BM-SEAL-11, Venezuela San Cristóbal/Carabobo, Sudan/South Sudan (legacy receivables).
  - **HPCL (54.90%)**, **MRPL (71.63% direct + 16.96% via HPCL = 88.58% group** [V primer/ScanX; K split]).
  - **OPaL** (ONGC Petro additions; ONGC ~95% after conversions [K/FLAG]).
  - **ONGC Green Ltd (100%**, from 27-Feb-2024) [V AR26]; **ONGC NTPC Green** (50:50 JV; acquired Ayana Renewable in 2025 [K]).
  - Petronet LNG (12.5%), Mangalore SEZ, ONGC Tripura Power, Dahej SEZ [K].
  - Strategic stakes: **IOC ~14.2%, GAIL ~5.0%** [K]. These sit in screener "investments" and are not cash.
  - **IOC and GAIL in turn hold ~7.8% and ~2.5% of ONGC** — screener's "Government" category 10.30% [V screener 10.30%; K split].
- **Oil India Group:**
  - Standalone E&P + pipelines.
  - **NRL (69.63%**; Assam Govt 26%, EIL 4.37% [K]).
  - Oil India International BV, Oil India Sweden AB, Oil India International Pte Singapore (100%). OGEL (100%, green).
  - JVs: BCPL (OIL 10% + NRL 10%), APL (NRL 26% + OIL 23%), IGGL (OIL 20% + NRL 20%), Assam Valley Fertilizer & Chemical (18%), Beas Rovuma (Mozambique, 40% via BREML → 4% PI [K]), Vankor/Taas (Russia; **$997m cumulative dividends received to FY26** [V presentation]), Suntera Nigeria (25%), Libya (new gas discovery FY26) [V presentation].
  - **IOC 4.93%, BPCL 2.47%, HPCL 2.47%** hold OIL (= the 9.87% "Government" category on screener) [V presentation; V screener].

### 5.3 Ownership (Sep-2026, screener [V])

| | Promoter (GoI) | "Government" (PSU cross-holdings) | FII | DII | Public | Shareholders |
|---|---|---|---|---|---|---|
| ONGC | **58.89%** (unchanged since ≥Dec-2023) | 10.30% | 8.55% (up from 6.98% Sep-25) | 18.66% | 3.60% | 27.4 lakh |
| OIL | **56.66%** (unchanged) | 9.87% | 7.15% (down from 10.99% Dec-23) | 20.66% (LIC 6.86%, MFs 9.31% at Mar-26 [V presentation]) | 5.67% | 4.31 lakh |

- **Effective state-controlled ownership is ~69% (ONGC) and ~66.5% (OIL)** [E]. The free float that institutions can trade is ~31–33%.

---

## 6. Business-model archetypes and their economics

1. **Nomination-field mature producer (ONGC Western Offshore/onshore; OIL Upper Assam).**
   - Low lifting cost, high royalty + cess, APM-capped gas, steep natural decline (5–7%/yr offshore [V call]; Mumbai High in its 50th year).
   - Economics: fat EBITDA margins, but heavy sustaining capex (ONGC ~$3.5–4bn/yr [V call]) just to stay flat.
   - **Native KPIs:** decline rate, RRR, workovers, water cut, opex/boe.
2. **Deepwater / HP-HT developer (ONGC KG-DWN-98/2; future Samudra Manthan; RIL-bp KG-D6).**
   - High capex, long lead times, reservoir surprise risk (KG-98/2 oil 45k bpd hoped → ~21k bpd actual [primer; V call]).
   - Benefits from **HP-HT pricing freedom** ($8.90–9.89 ceilings) and low/deferred royalty [K].
   - **Native KPIs:** first-oil/peak dates, plateau rate, F&D cost/boe, uptime.
3. **Overseas E&P portfolio (OVL; OIL's Russia/Mozambique/Venezuela/Libya).**
   - Market prices, but **sanctions, price caps and stranded receivables** (Sudan, Venezuela, Russian dividends trapped in 2022–24 [K]).
   - OVL profit went from ~₹500–600 Cr/yr to **~₹1,000 Cr per quarter** after Sakhalin-1 was regained (Dec-2025, accounted from Jan-2026) [V call].
   - **Native KPIs:** production share, realisation vs Brent (Russian discount), dividend repatriation.
4. **Integrated refining/marketing attached to an E&P (ONGC–HPCL/MRPL; OIL–NRL).**
   - Earnings are inverse to crude when retail prices are sticky (HPCL Q1 FY27 −₹12,265 Cr).
   - A refiner without retail benefits from high cracks (NRL Q1 FY27 GRM $35.95; normal $7–8 [V call]).
   - NRL also gets a **50% excise-duty benefit** as a North-East refinery [V presentation]. Its value shrank when excise was cut in Mar-2026 [V call: "excise benefit realisation has come down"].
5. **Midstream/pipeline + green optionality (OIL pipelines, CGD; ONGC Green; OGEL).**
   - Regulated tariffs. Small today; RE at ~6–8% project IRRs [K].

**How the economics differ [E]:**

| Archetype | EBITDA margin | ROCE (through cycle) | Capital intensity | Policy exposure |
|---|---|---|---|---|
| Nomination producer | 45–60% | 13–20% (ONGC SA ROCE 22–27% company basis; screener 13–24%) | High sustaining | Very high (APM cap, levies, windfall risk) |
| Deepwater | 60–75% at plateau | 8–15% (front-loaded capex) | Very high upfront | Medium (pricing freedom) |
| Overseas | 30–60% | 5–12% | High | Geopolitical/sanctions |
| Refining + marketing | 3–8% | 8–20% swinging | Medium | Very high (retail pricing, under-recoveries) |
| Standalone refiner (NE) | 8–25% | 15–30% in good years | Medium | Medium (excise benefit, OMC discounts) |

---

## 7. Regulation and policy

### 7.1 Regulators and contract regimes
- **MoPNG** (policy, pricing notifications); **DGH** (upstream regulator: block award, field development plans, reserves); **PPAC** (price notifications, data; designated nodal agency under the Essential Commodities Act by Gazette 19-Mar-2026 [V RR]); **PNGRB** (pipelines, CGD; declared DNPL a common carrier in 2026 [V OIL call]); OISD/PESO (safety).
- **Regimes** [V PPAC RR; K]:
  - Nomination (PEL 1947–1990);
  - pre-NELP PML (1991–96);
  - **NELP** (1999–2010, nine rounds, profit-sharing PSCs with cost recovery);
  - **HELP** (2016; revenue sharing, uniform licence for all hydrocarbons, marketing and pricing freedom);
  - **OALP** rounds I (2018, 55 blocks) … IX (2024, 28 blocks) — **177 offered / 172 awarded through OALP-IX** [V RR table 2.7B];
  - **OALP-X and XI** bidding ongoing. ONGC will "participate in OALP-X in a big way" [V call]. OALP-X offers ~$100bn of potential across ~2.63 lakh sq km [V RR].
  - DSF rounds (2016, 2018, 2021).
  - 2019 reform: no revenue share in Category II/III basins; exploration-only bidding [K].
- **Oilfields (Regulation and Development) Amendment Act, 2025** [V ONGC AR26; V RR]:
  - unified "petroleum lease" replacing the mining lease;
  - widens "mineral oils" to shale oil/gas, tight oil/gas, gas hydrates, CBM;
  - permits integrated energy projects (e.g., CCUS/renewables on lease areas);
  - infrastructure sharing;
  - **fiscal stability** language;
  - decriminalised penalties [K].
- **Petroleum and Natural Gas Rules, 2025** [V RR; V OIL call]: single petroleum lease, **180-day approval deadline**, and the right to seek lease extension where a discovery extends beyond the block.
- **Samudra Manthan — National Offshore Exploration Scheme** [V ONGC call]:
  - **₹84,084 Cr outlay**, phase 1 (exploration) to 2031.
  - Government reimburses seismic and up to **₹675 Cr per deep/ultra-deep well** (OIL's reading).
  - ~₹10,000 Cr for common infrastructure hubs [V OIL call].
  - Stratigraphic wells are fully government-funded (OIL Mahanadi well ₹800 Cr [V call]; ONGC AND-P-1 Andaman [V AR26]).
  - **Detailed modalities not yet notified as of Aug-2026** [V both calls].

### 7.2 Gas pricing (the most consequential rule)

| Period | Regime | Price/ceiling ($/mmBtu, GCV) |
|---|---|---|
| 2005–2010 | APM | $1.79 → $4.2 (2010) [K] |
| Nov-2014 to Mar-2023 | "Rangarajan-lite" formula (HH, NBP, Alberta, Russia; half-yearly) | $5.05 (Nov-14) → trough **$1.79 (Oct-20–Mar-21)** → **$8.57 (Oct-22–Mar-23)** [K] |
| Mar-2016 | HP-HT/deepwater pricing freedom with ceiling | ceiling half-yearly [V PPAC notification ref O-22013/27/2012-ONG-D-V dt 21-03-2016] |
| **Apr-2023 →** | **Kirit Parikh committee formula: 10% of Indian basket, monthly; floor $4, ceiling $6.50 for FY24–FY25, +$0.25/yr thereafter** [V AR26; V PPAC] | FY24–25 ceiling $6.50; **FY26 $6.75; FY27 $7.00** |
| Apr-2023 → | New-well gas premium 20% (12% of basket) | e.g., ~$7.7 (FY26 [primer]); **$13.31 (Q1 FY27)** [V-snip] |

**Monthly APM formula price vs nomination ceiling (PPAC [V]):**

| Month | Formula ($) | Ceiling ($) | Binding? |
|---|---|---|---|
| Apr-25 | 7.26 | 6.75 | yes |
| May-25 | 6.93 | 6.75 | yes |
| Jun-25 | 6.41 | 6.41 | no |
| Jul-25 | 6.89 | 6.75 | yes |
| Aug-25 | 7.02 | 6.75 | yes |
| Sep-25 | 6.99 | 6.75 | yes |
| Oct-25 | 6.96 | 6.75 | yes |
| Nov-25 | 6.55 | 6.55 | no |
| Dec-25 | 6.48 | 6.48 | no |
| Jan-26 | 6.25 | 6.25 | no |
| Feb-26 | 6.21 | 6.21 | no |
| Mar-26 | 6.81 | 6.75 | yes |
| **Apr-26** | **10.76** | 7.00 | yes |
| **May-26** | **11.59** | 7.00 | yes |
| **Jun-26** | **10.93** | 7.00 | yes |
| Jul-26 | 8.73 | 7.00 | yes |
| Aug-26 | 7.86 | 7.00 | yes |
| Sep-26 | 9.00 | 7.00 | yes |
| **Oct-26** | **11.22** | 7.00 | yes |

- **FY25 formula prices:** 8.38, 8.90, 8.44, 8.24, 8.51, 7.85, 7.48, 7.53, 7.29, 7.30, 7.94, 7.80 (Apr→Mar), all capped at $6.50 [V].
- **HP-HT ceilings:** Apr–Sep-24 $9.87; Oct-24–Mar-25 $10.16; Apr–Sep-25 $10.04; Oct-25–Mar-26 $9.72; **Apr–Sep-26 $8.90; Oct-26–Mar-27 $9.89** [V PPAC]. The HP-HT ceiling uses lagged fuel-oil/LNG/coal benchmarks [K], so it *fell* into the 2026 spike and only now rises.
- **Note:** the monthly formula price does not equal exactly 10% of the prior-month basket printed by PPAC (e.g., Apr-26 $10.76 vs Mar basket $113.49). PPAC's averaging window/definition differs. **Do not back-solve the basket from gas prices** [E].
- **Who benefits from the cap:** CGD (CNG/PNG domestic get APM/NWG allocations), fertiliser, power. Delhi CNG ₹86.98/kg, PNG ₹50.59/SCM (13-Oct-2026) [V PPAC].

### 7.3 Windfall tax (SAED) — full history [V PPAC table, source CBIC]

**Domestic crude SAED (₹/tonne):**

| Effective | ₹/t |
|---|---|
| 01-07-2022 | **23,250** |
| 20-07-2022 | 17,000 |
| 03-08-2022 | 17,750 |
| 19-08-2022 | 13,000 |
| 01-09-2022 | 13,300 |
| 17-09-2022 | 10,500 |
| 02-10-2022 | 8,000 |
| 16-10-2022 | 11,000 |
| 02-11-2022 | 9,500 |
| 17-11-2022 | 10,200 |
| 02-12-2022 | 4,900 |
| 16-12-2022 | 1,700 |
| 03-01-2023 | 2,100 |
| 17-01-2023 | 1,900 |
| 04-02-2023 | 5,050 |
| 16-02-2023 | 4,350 |
| 04-03-2023 | 4,400 |
| 21-03-2023 | 3,500 |
| 04-04-2023 | **nil** |
| 19-04-2023 | 6,400 |
| 02-05-2023 | 4,100 |
| 16-05-2023 | nil |
| 15-07-2023 | 1,600 |
| 01-08-2023 | 4,250 |
| 15-08-2023 | 7,100 |
| 02-09-2023 | 6,700 |
| 16-09-2023 | 10,000 |
| 30-09-2023 | **12,100** |
| 18-10-2023 | 9,050 |
| 01-11-2023 | 9,800 |
| 16-11-2023 | 6,300 |
| 01-12-2023 | 5,000 |
| 19-12-2023 | 1,300 |
| 02-01-2024 | 2,300 |
| 16-01-2024 | 1,700 |
| 03-02-2024 | 3,200 |
| 16-02-2024 | 3,300 |
| 01-03-2024 | 4,600 |
| 16-03-2024 | 4,900 |
| 04-04-2024 | 6,800 |
| 16-04-2024 | 9,600 |
| 01-05-2024 | 8,400 |
| 16-05-2024 | 5,700 |
| 01-06-2024 | 5,200 |
| 15-06-2024 | 3,250 |
| 02-07-2024 | 6,000 |
| 16-07-2024 | 7,000 |
| 01-08-2024 | 4,600 |
| 17-08-2024 | 2,100 |
| 31-08-2024 | 1,850 |
| **18-09-2024** | **nil** |
| **02-12-2024** | **scrapped** |

- **2026: no crude SAED at any date** [V PPAC table].
- **Mechanics [K]:** the levy was set fortnightly off the average international price, effectively taxing realisation above ~$75/bbl. At ₹23,250/t (~$40/bbl at ₹79/$) it absorbed most of the excess over ~$75. ONGC and OIL booked it as a statutory levy (excise) above EBITDA.
- **2026 export levies (₹/litre, SAED + AED/RIC) [V PPAC]:**

| Effective | Petrol | Diesel | ATF |
|---|---|---|---|
| 27-03-2026 | — | 21.50 (12 + 9.5 AED) | 29.50 |
| **11-04-2026** | — | **55.50** (24 + 31.5) | **42.00** |
| 01-05-2026 | — | 23.00 | 33.00 |
| 16-05-2026 | 3.00 | 16.50 | 16.00 |
| 01-06-2026 | 1.50 | 13.50 | 9.50 |
| 15-06-2026 | 1.50 | 14.00 | 12.50 |
| 01-07-2026 | 4.00 | 8.50 | 7.50 |
| 16-07-2026 | 2.50 | 15.50 | 14.50 |
| 03-08-2026 | 3.50 | 25.50 | 22.00 |
| 15-08-2026 | — | 24.00 | 19.50 |
| 01-09-2026 | 1.50 | 25.00 | 19.00 |
| 16-09-2026 | 0.50 | 20.00 | 15.00 |
| 01-10-2026 | 0.50 | 16.00 | 10.50 |
| **16-10-2026** | **2.50** | **8.50** | **10.50** |

- **Why upstream was spared in 2026 (inference [E]):**
  - (i) The 2024 abolition was explicitly linked to encouraging exploration, and the 2025 Act promises fiscal stability.
  - (ii) The government needed upstream cash for dividends and Samudra Manthan co-funding.
  - (iii) The fiscal pain was at the OMCs (under-recoveries). The claw-back was routed via export levies, refinery discounts to OMCs (NRL gave ₹13 → ₹3/litre on petrol and ₹10/litre → nil on diesel through Q1 FY27 "exactly as per SAED" [V OIL call]) and an excise cut.
  - **Risk of return:** a crude SAED remains a fortnightly notification away. If Brent stays >$100 into Q3–Q4 FY27 and OMC losses persist, the probability rises [E].

### 7.4 Subsidy / under-recovery sharing (2003–2015) [K, approximate; FLAG for verification]
- From FY2003-04, upstream PSUs (ONGC, OIL, GAIL) gave **discounts on crude/LPG/SKO** to OMCs to share under-recoveries on PDS kerosene and domestic LPG (and diesel until Oct-2014).
- **The upstream share peaked at ~₹60–67k Cr/yr in FY12–FY14 (ONGC ~₹49–56k Cr, OIL ~₹7–8k Cr)** [K]. ONGC's net realisation in those years was ~$40–48/bbl against ~$105–110 Brent [K].
- Petrol was deregulated in Jun-2010 and diesel in Oct-2014. Upstream discounts fell to ~₹1.5k Cr in FY16 and were **discontinued from FY2016-17** (the scheme was formally ended in 2015–16 when the government absorbed LPG/SKO subsidy via DBTL/budget) [K].
- **2026 relevance:**
  - HPCL's Q1 FY27 loss, OMC borrowings jumping (IOCL ₹1,10,668 → ₹1,41,453 Cr; HPCL ₹47,599 → ₹72,597 Cr; BPCL ₹10,480 → ₹17,396 Cr, Mar → Jun-2026 [V PPAC]) and domestic LPG ₹942/cylinder in Delhi [V PPAC] recreate the 2012-style under-recovery problem.
  - The government has *not* reinstated upstream sharing [no evidence found — E]. Any return would hit ONGC/OIL standalone directly, while relieving HPCL inside ONGC's consolidated accounts.
- **DBTL subsidy** FY26 ₹1,647 Cr; PMUY ₹12,212 Cr; petroleum subsidy 0.08% of GDP in FY26 [V PPAC] — tiny vs the 2012–13 peak (~1.0% of GDP incl. under-recoveries [K]).

### 7.5 Other live legal/tax items
- **GST on royalty** (since 1-Jul-2017): OIL ~₹2,500 Cr principal, already provided; court gave 6 weeks to settle (Aug-2026) [V OIL call]. ONGC's equivalent is larger [E; not quantified — FLAG].
- **Assam land-tax law** (on oil/gas lands): the state undertook in court to repeal it; OIL carried it as a contingent liability [V OIL call].
- **Panna-Mukta-Tapti (PMT) arbitration:** ONGC carries a contingent liability of **₹15,216 Cr**. It did *not* join the arbitration against GoI ("two arms of Government fighting… not good"); its understanding is that the JV outcome will apply to it [V call]. This is a minority-shareholder governance point.
- **Excise:** petrol ₹11.90/l and diesel ₹7.80/l from **26-Mar-2026** (cut to cushion retail) [V PPAC]. Delhi RSP petrol ₹102.12, diesel ₹95.20 (1-Oct-2026), vs ₹94.77/₹87.67 pre-crisis [K]. So retail prices were raised ~₹7.4/l as well.

---

## 8. History and cycles (narrative; full timeline in §G)

- **1889–1959: the Assam era.** Digboi oil (1889; Assam Oil Co.) [primer]. OIL was incorporated 18-Feb-1959 as a Burmah Oil–GoI JV, fully nationalised in 1981 [primer].
- **1956–1990: the ONGC build-out.** ONGC was created in 1956. **Bombay (Mumbai) High was discovered in 1974** and first produced in 1976 [K]. India's crude output peaked ~34 MMT in FY1990 (Mumbai High at ~400 kb/d) [K].
- **1991–2010: opening up.** Pre-NELP JVs (PMT, Ravva) and NELP from 1999.
  - **RIL's KG-D6** discovery (2002), first gas in 2009, peak ~60+ MMSCMD in 2010 then collapse.
  - **Cairn's Mangala** (2004 discovery, production 2009).
  - The ONGC FPO in 2004; the **OIL IPO in Sep-2009** [K].
  - OVL went global (Sakhalin-1 2001, Sudan, Vietnam, Imperial Energy 2008).
- **2003–2015: the subsidy-sharing decade** (§7.4). Upstream PSU earnings were decoupled from $100+ oil.
- **2014–2016: price crash + reform.**
  - Brent fell from $115 to $30.
  - The 2014 gas formula, diesel deregulation, HELP (Mar-2016), HP-HT pricing freedom (Mar-2016) and DSF.
- **2018: the HPCL deal.** ONGC bought GoI's 51.11% of HPCL for ₹36,915 Cr (Jan-2018), largely debt-funded [K; primer]. This created today's consolidated structure.
- **2020–2021: COVID trough.** The Indian basket averaged $44.82 in FY21 [V]. APM gas hit $1.79. OIL's NRL acquisition from BPCL (Mar-2021) [primer/K].
- **2022–2024: the Ukraine spike and windfall tax.** Basket $93.15 in FY23 [V]. **SAED from 1-Jul-2022** (₹23,250/t), revised fortnightly, nil from Sep-2024, **scrapped 2-Dec-2024** [V].
  - Kirit Parikh gas formula (Apr-2023).
  - Sakhalin-1 was expropriated into a Russian entity (Oct-2022 decree [K]).
  - Mozambique LNG remained in force majeure (since 2021).
  - **KG-98/2 first oil Jan-2024** [primer].
  - OIL became a Maharatna (Aug-2023 [K]; "2023" per primer).
- **2025:**
  - bp became TSP for Mumbai High (Phase-1 NOA 26-Dec-2025; +2.699 MMT oil and +2.806 BCM gas by 2040 [V AR26]).
  - Oilfields Amendment Act 2025 and PNG Rules 2025.
  - Mozambique force majeure lifted (~Aug–Sep 2025 [V call]).
  - **Sakhalin-1 interest restored to OVL (Dec-2025)** [V call].
  - NRL became a Navratna (Dec-2025) [V presentation].
- **2026: the Hormuz shock.**
  - War from 28-Feb. Basket $113–116 (Mar–Apr, Sep).
  - Export levies from 27-Mar. Excise cut 26-Mar.
  - **Record upstream quarters (Q1 FY27)** alongside an HPCL loss.
  - Samudra Manthan approved (₹84,084 Cr).
  - ONGC spudded its first Samudra Manthan deepwater well in Mahanadi (~25-Jul-2026). It struck gas in Mahanadi deepwater well **MN-DW18-1-H-D on 18-Sep-2026** [V screener announcement].
  - The APM ceiling stepped to $7.00.

**Cycle lesson [E]:**
- Upstream India earns most in "$70–85 oil + no levy" windows: FY19, FY24–FY26, and now 2026 without a levy.
- In >$100 years, value is usually taken by the state: 2012–14 via subsidy sharing, 2022–24 via SAED.
- **2026 is the first >$100 episode in two decades in which crude upstream kept the windfall.**

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands

| KPI | Definition | ONGC (latest) | OIL (latest) | Source |
|---|---|---|---|---|
| Crude production | MMT/yr; state scope (trap 5) | 19.33 MMT op. + 1.17 JV = 20.50 (FY26); Q1 FY27 4.452 MMT standalone (−4.9%) | 3.45 MMT (FY26); Q1 FY27 0.95 MMT (+11%) | [V AR26; V-snip; V presentation; V call] |
| Gas production | BCM/yr | 19.53 + 0.43 JV (FY26); Q1 FY27 4.756 BCM (−1.9%) | 3.19 BCM (FY26); ~2.93 BCM run-rate | [V] |
| O+OEG | MMTOE | Standalone ex-JV 38.87 (FY26); group 50.14 | 6.64 (FY26); Q1 FY27 1.707 | [V call; AR26; presentation] |
| Crude realisation (gross) | $/bbl, pre-royalty/cess | **$99.45 Q1 FY27** vs $66.13; FY26 ~$63–67 [E] | **$98.73 Q1 FY27** vs $66.20; FY26 $69.04, FY25 $78.09, FY24 $83.03, FY23 $95.47, FY22 $78.96 | [V calls; V presentation] |
| Gas realisation | $/mmBtu | APM $7.00 cap; NWG $13.31 (Q1 FY27; $8.24 a year ago) | $7.19 (Q1 FY27) vs $6.72 | [V-snip; V call] |
| NWG share | % of gas | 19% of volume / 24% of sales qty / 38% of nomination gas revenue (Q1 FY27) | "all incremental" | [V call] |
| Gas share of revenue | % | 25% FY25 → 28% FY26 | n/a | [V call] |
| 1P reserves | MMTOE | 517.88 ONGC + 10.16 JV + 265.27 OVL = **793.31** | not disclosed (2P only) | [V AR26] |
| 2P reserves | MMTOE | accretion 44.01 FY26 (stock not given in pages read) | **231** (190 dom. + 41 overseas) | [V] |
| RRR (2P) | accretion ÷ production | **1.17** (domestic, FY26) | **1.02** (FY26), 0.94 (FY25) | [V] |
| Reserve life | 2P ÷ production | ~13–14 yrs on 1P [E: 528 ÷ 38.9] | ~31 yrs domestic 2P | [E; V] |
| Exploratory success | hydrocarbon wells ÷ tested | 53.4% (55/103) | 8 discoveries in 3 yrs | [V AR26; V presentation] |
| Wells drilled | # | 100 exploratory (FY26) + development (n/a) | 74 (22E + 52D) FY26; target ~99–100 FY27; Q1 17 | [V] |
| Opex / lifting cost | $/boe ex-levies | not disclosed in pages read; historically ~$10–14/boe incl. DD&A-excluded opex [K, FLAG] | not disclosed; "low-cost onshore" [primer]; NRL refinery opex $4.5–5/bbl → $3.5 | [K; V call] |
| Capex | ₹ Cr | Standalone FY26 ₹35,878 Cr (FY25 ₹62,057 Cr incl. one-offs); group FY26 ₹61,131 Cr; guidance $3.5–4bn/yr (₹33–38k Cr); PPAC FY27 target ₹30,000 Cr, H1 ₹14,534 Cr | Standalone FY26 ₹13,025–13,026 Cr; FY27 BE ₹8,600 Cr (PPAC target ₹8,653; H1 ₹5,548); NRL FY26 ₹8,317 Cr, FY27 target ₹7,500 Cr | [V AR26; call; PPAC] |
| Payout | DPS / payout % | ₹13.25 (FY26, record; ₹16,669 Cr), FY25 ₹12.25; payout 28% (screener SA) — 51% of SA PAT on company basis [E] | ₹11.50 (FY26, ₹1,871 Cr); FY25 11.50; FY24 14.50; FY23 20.00; FY22 14.25 (pre-bonus) | [V AR26; V presentation] |

### 9.2 Through-cycle returns [V screener]
- **ONGC standalone ROCE:** 19% FY15 → 8% FY21 trough → 24% FY23 peak → 13% FY26. Company-basis ROCE 22.46% FY26 / 26.54% FY25 (different capital-employed definition) [V AR26].
- **OIL standalone ROCE:** 13% FY15 → 4% FY21 → 22% FY23 → 10% FY26. Company basis 10.1% FY26 [V presentation].
- **OIL consolidated ROCE** 9.0% FY26 (company) vs 12% (screener) — NRL CWIP (~₹37,644 Cr consolidated CWIP) is unproductive until NREP runs [V].

### 9.3 Price sensitivity [E]
- **ONGC standalone:** ~20.5 MMT × 7.33 = 150 mbbl/yr.
  - $1/bbl × ₹95 = **~₹1,425 Cr revenue**. After royalty (~10–20%) and 20% OID cess, ~₹950–1,050 Cr EBITDA, **~₹750 Cr PAT per $1/bbl per year**.
  - Empirically, Q1 FY27 PAT rose ₹9,010 Cr on +$33.3/bbl = **₹270 Cr per $1 per quarter (₹1,080 Cr annualised)**. That figure includes NWG gains and FX.
- **Gas:** ~14.3 BCM net sales/yr (FY26 ONGC 14,292 MMSCM [V RR]) ≈ 0.57 bn mmBtu (GCV) [E].
  - **+$0.25 ceiling step ≈ +₹1,000–1,100 Cr revenue/yr** [E]. Removing the cap at April–June 2026 formula prices (~$11) would have added ~₹4,500–5,000 Cr per quarter [E].
- **OIL:** 3.45 MMT = 25.3 mbbl.
  - $1/bbl = **~₹240 Cr revenue, ~₹165 Cr EBITDA, ~₹125 Cr PAT/yr** [E].
  - NRL: $1/bbl GRM on 3 MMTPA (22 mbbl) ≈ ₹210 Cr EBITDA; at 9 MMTPA ≈ ₹630 Cr [E].
- **Rupee:** each ₹1/$ depreciation ≈ +1.1% on realisations. At ~$70 crude, ≈ +₹1,000 Cr revenue for ONGC standalone [E].

---

## 10. Global lens

| Company | Country | Type | Production (approx.) | P/E TTM (Oct-26) | Note |
|---|---|---|---|---|---|
| **ONGC** | India | NOC, integrated via HPCL/MRPL | ~1.0 mboe/d group (50.14 MMTOE ≈ 368 mmboe/yr) [E] | **6.48** (cons. attrib.); 6.76 SA | Yield 5.9%, P/B 0.76 [V screener] |
| **Oil India** | India | NOC, E&P + NE refinery | ~0.13 mboe/d (6.64 MMTOE) [E] | **8.91** (cons.); 11.4 SA | Yield 2.5%, P/B 1.28 [V screener] |
| ExxonMobil | US | IOC super-major | ~4.5–4.7 mboe/d [K] | **22.8** | end-2025 P/E 18.0 [V cmc] |
| Petrobras | Brazil | NOC, pre-salt deepwater | ~2.7–2.9 mboe/d [K] | **7.39** | state-controlled; high payout [V cmc; K] |
| CNOOC | China | NOC, offshore E&P | ~2.0 mboe/d [K] | **6.76** | lifting cost ~$7/boe all-in ~$28 [K] [V cmc] |
| Equinor | Norway | State-majority, North Sea gas | ~2.1 mboe/d [K] | **12.6** | Europe gas exposure [V cmc] |
| Saudi Aramco | KSA | NOC | ~12–13 mboe/d [K] | **14.4** | [V cmc] |

- **Scale:** ONGC group is ~1/4 of Petrobras and ~1/12 of Aramco by output [E].
- **Valuation:** the Indian NOCs trade in line with other state-controlled E&Ps (Petrobras, CNOOC) at 6–9× P/E, a 40–70% discount to Equinor/XOM [V].
- **Margins:** standalone EBITDA margins of 47–61% (ONGC) are comparable to CNOOC (~50–60% [K]). Royalty + cess (~20% of revenue) is heavier than at most peers [E].
- **Reserve life:** ONGC's ~13–14 years on 1P is in line with majors (~10–12 years [K]). OIL's ~31 years (2P) is long but gas-heavy and evacuation-constrained.
- **Global deal valuations (from ONGC AR26 MD&A citing industry data):** 2P reserves transacted at ~$7.2/boe in Q2-2026 (from $8.6). Producing resources $3.8/boe (from $4.5) [V AR26 p. MD&A]. This is useful for an SOTP of OVL/OIL overseas reserves.

---

## 11. Technology and disruption risks
- **Mature-field recovery tech (upside):**
  - bp TSP at Mumbai High: oil at ~107% and gas at ~113% of the contractual baseline (absolute +1–2% oil, +5–6% gas vs a 6–7% natural decline) [V call]. Now extended to all of Western Offshore (TSP-2).
  - OIL's hydrofrac, radial drilling, a 'high-level workover planning board' and record 307 workovers [V call/presentation].
  - ONGC: 17 ER pilots approved by DGH; 12,963 well-stimulation jobs in FY26 [V AR26].
- **Deepwater execution risk:** KG-98/2 oil reservoir compartmentalisation ("interconnection between one reservoir to another") needs re-entries at >₹500 Cr each [V call].
- **Unconventionals:** the 2025 Act now covers shale/tight/hydrates. ONGC drilled 8 basement-exploration wells in FY26 [V AR26]. Commercial impact before 2030 is unlikely [E].
- **Energy transition:**
  - **ONGC net-zero Scope 1+2 by 2038 (~₹2 lakh Cr)** [primer]. OGL RE at 2.853 GW [V].
  - **OIL net-zero 2040; zero routine flaring by 2027; zero methane by 2030 with TotalEnergies** [V presentation].
  - EV adoption and 20% ethanol blending dent petrol growth long-term. Gas is the "bridge" (6.13% of India's primary energy in 2025 vs 15% goal) [V RR].
- **Digital:** ONGC's NETRA production control centre (Panvel) and digital twins [V AR26].
- **Disruption to the business model:** sanctions (Russia price cap hit OVL's Q1 FY27 realisation [V call]), the security of Hormuz-routed imports (positive for domestic-barrel value), and climate-litigation/ESG fund exclusions (FII holding in ONGC is only 8.55%).

---

## 12. What to watch (leading indicators, events, decisions)
1. **Q2 FY27 results (by 14-Nov-2026).** Watch ONGC standalone realisation (~$95–97 expected [E]), the KG-98/2 gas ramp (CPP commissioning Oct–Nov), DUDP to 3 MMSCMD by Q3, consolidated attributable PAT (HPCL turned to +₹3,625 Cr in Q2 [V]), and the OVL contribution (~₹1,000 Cr/qtr).
2. **Fortnightly SAED notifications** (1st and 16th of each month). Any line for "crude oil" re-appearing is the single biggest risk event [V PPAC table].
3. **Monthly PPAC gas price (last day of each month)** and the APM ceiling for FY28 (likely $7.25 [E per +$0.25 rule]). Also any move to remove the cap or raise the NWG premium.
4. **Indian basket / Brent**: $116 (Sep) → ~$102–107 (Oct) [V/V-snip]. Hormuz status and the Iran–Gulf talks in Oman.
5. **OMC under-recoveries / retail price changes / LPG** (HPCL H1 loss; OMC debt +₹70k Cr in a quarter). Any revival of upstream subsidy sharing.
6. **Samudra Manthan modalities**, OALP-X/XI awards, the Mahanadi results (ONGC gas strike MN-DW18-1-H-D, 18-Sep-2026 [V]) and OIL's Andaman wells (Vijayapuram-1 hydrofrac; 4th well by Dec-2026; appraisal decision ~Feb–Apr 2027 [V call]).
7. **NREP commissioning:** CDU/VDU + DHDT + SRU by Oct–Nov 2026, remaining units by 31-Mar-2027, ~75% utilisation by Q4 FY28. **Paradip–Numaligarh crude pipeline** commissioning Dec-2026 [V call].
8. **OIL gas evacuation:** the DNPL 200-m tie-in (2–3 months from Aug-2026), DNPL 1.2 → 2.5 MMSCMD, IGGL Duliajan Feeder Line (~20% done; Dec-2027) [V call].
9. **OVL:** Mozambique LNG first cargo end-FY28/early FY29 (OVL share ~3 MMTPA [V call]); Venezuela operatorship after the OFAC licence; Sakhalin-1 cash repatriation under the price cap.
10. **Dividends:** interim dividends usually announced with Q2/Q3 results. ONGC's FY26 record ₹13.25 [V].
11. **Disinvestment/OFS:** no GoI OFS in ONGC/OIL since 2021–22 [K]. The promoter stake has been flat since Dec-2023 [V screener].

---

## A. The forces that define this sub-sector (what an expert leads with)

1. **The oil price, filtered through the state.**
   - Revenue per barrel is set in London (Brent + ~1–5% premium [V call]). What the producer keeps is set in New Delhi: royalty, 20% cess, and historically subsidy sharing (2003–15) or SAED (2022–24).
   - 2026 is the exception: a $100+ shock with no crude levy. That is why Q1 FY27 was a record for both.
   - The expert question is not "where is Brent?" but "**at what Brent does the state reach in, and through which pipe?**"
2. **The 2026 West Asia crisis (crude, freight, LPG).**
   - Basket $69 → $113–116 [V]. LPG consumption −15% as supply was disrupted [V].
   - OMCs lost ₹18,150 Cr in Q1 [V]. IGX spot gas went to $28/mmBtu [V].
   - Upstream gained, downstream bled. ONGC's *consolidated* accounts show both sides, while OIL's NRL (no retail) gained twice.
   - Rupee at ₹95/$ (+8% vs FY26 average) is an extra tailwind on rupee realisations.
3. **Gas: capped legacy vs uncapped new gas.**
   - 70–80% of ONGC/OIL gas is APM at $6.75–7.00. New-well (+20%) and HP-HT (ceiling $9.89) gas earn 40–90% more.
   - Every incremental BCM is "new gas", so production growth and price mix move together. ONGC's NWG went from 17% → 24% of sales quantity in a year [V call].
   - Gas is the stated growth engine: ONGC 50:50 oil-gas by FY28; OIL gas 2.9 → 5 BCM by FY29.
4. **Decline vs renewal of the resource base.**
   - India crude −13% in six years (32.2 → 28.0 MMT) [V]. Mumbai High is in its 50th year.
   - KG-98/2 oil disappointed (~21 kb/d). The counter-moves are bp TSP, ONGC's >₹40,000 Cr Western Offshore programme, OIL's record drilling and **Samudra Manthan (₹84,084 Cr)** for frontier deepwater.
   - RRR >1 at both (1.17 / 1.02) in FY26 [V]. Reserves are being replaced on paper, but production is not yet growing.
5. **Capital allocation under a dividend-hungry majority owner.**
   - GoI takes ~59%/57% of dividends directly, plus the cross-holdings.
   - ONGC's balance sheet funded HPCL (2018); OIL's funds NRL's ~₹35k Cr expansion plus the ₹7.2k Cr PP plant.
   - New energy (ONGC ~₹2 lakh Cr to 2038; OIL ₹20k Cr to 2040) competes for cash.
   - The **PSU discount** (P/E 6–9×) is the market's price for this.

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The windfall nobody taxed": how 2026 differs from 2012 and 2022
- Line up the three $100+ episodes:
  - FY12–14: subsidy sharing; ONGC net ~$45 vs Brent ~$110 [K].
  - FY23: SAED ₹23,250/t, nil by Apr-23 [V].
  - Q1 FY27: no crude levy. ONGC realised $99.45 [V].
- Show where the state collected instead: export SAED (diesel up to ₹55.50/l on 11-Apr-2026 [V]), refinery discounts to OMCs, an excise cut (cost to the exchequer), and upstream dividends.
- Datasets: the SAED table (§7.3), PSU sector PAT Q1 FY27 (upstream +₹24,196 Cr vs OMCs −₹18,150 Cr [V]), ONGC standalone vs consolidated Q1 PAT.

### B2. "Seven dollars": the APM cap as a hidden subsidy, and the slow escape via new-well and deepwater gas
- Monthly formula vs ceiling table (§7.2). Quantify the 2026 transfer [E]:
  - ONGC nomination gas ~14 BCM/yr net × ~$3.5–4.5/mmBtu gap ≈ $1.8–2.3bn/yr ≈ ₹17–22k Cr if April-June prices had persisted.
- The +$0.25/yr ceiling step, the NWG premium, HP-HT ceilings that *fall* when oil spikes (lagged formula), and OIL's pipeline-constrained gas.

### B3. "One ticker, two cycles": ONGC's consolidation of HPCL/MRPL and OIL's NRL
- Q1 FY27 natural experiment:
  - ONGC standalone +₹9,010 Cr YoY vs HPCL −₹12,265 Cr. Consolidated pre-minority PAT −43% YoY, attributable +21%.
  - OIL standalone +₹2,057 Cr *and* NRL +₹817 Cr.
- Explain attributable vs pre-minority (trap 2). HPCL m-cap ₹72,736 Cr → ONGC's 54.9% ≈ ₹39,932 Cr. MRPL ₹29,060 Cr × 71.63% ≈ ₹20,816 Cr. Together ~**21% of ONGC's m-cap** [E].
- NRL 3 → 9 MMTPA: ~₹30k Cr spent of ₹34–35k Cr, debt ₹19k Cr, plus Paradip crude line and PP unit [V call].

### B4. "Running up a down escalator": Mumbai High, KG-98/2 and OIL's Assam push
- **ONGC:** natural decline 5–7%/yr. TSP gains +1–2% oil absolute. KG-98/2 oil 45k bpd hope → 35k (2024 peak) → 28k (Nov-2025) → 21k (Aug-2026) [primer; V call]. Gas 1.5 → 3 (Q4 FY27) → 6–7 MMSCMD (Q4 FY28).
- **OIL:** record 11,017 t/d (3-Aug-2026); 1 MMT/quarter; ≥3.9 MMT FY27, 4.2 MMT FY29; gas 5 BCM once IGGL links (Dec-2027).
- **Frontier:** Andaman (OIL Vijayapuram 1–3; ONGC 4 UDW wells + AND-P-1), Mahanadi (ONGC strike Sep-2026), KG/Cauvery deepwater.

### B5 (optional). OVL: sanctions, Sakhalin's return, Mozambique's restart
- 9.67 MMTOE FY26 (down from 12.33 in FY22: 8.10 + 4.23) [V AR26].
- PAT ~₹1,000 Cr/qtr post-Sakhalin. The Russian price cap hit Q1 realisation. Mozambique first LNG ~FY28–29. Venezuela OFAC licence.

## C. The REVENUE / PROFIT EQUATION

**Upstream (standalone):**
- PAT ≈ [Crude sales (bbl) × Brent-linked realisation ($/bbl) × FX + Gas sales (mmBtu) × (APM_cap·share_APM + NWG·share_NWG + HP-HT·share_HPHT) × FX + VAP]
- − royalty (~10–20% of wellhead value) − OID cess (20% on nomination crude) − [SAED if any]
- − opex (fixed, rupee) − exploration write-offs − DD&A − interest
- × (1 − tax ~25%)

**Consolidated:** + share of refining (throughput × GRM − opex ± marketing margin/under-recovery) + OVL + petchem − NCI.

### C.1 Worked example 1 — ONGC standalone, one year at FY26 volumes, two price decks [E composite]

| Line | FY26 deck ($66 crude, ₹88.3/$, APM $6.75) | 2026 shock deck ($99 crude, ₹95/$, APM $7.00, NWG $13) |
|---|---|---|
| Crude & condensate sold ~145 mbbl | 145 × 66 × 88.3 = **₹84,500 Cr** (actual crude revenue ₹83,810 Cr [V]) | 145 × 99 × 95 = **₹1,36,400 Cr** |
| Gas sold ~14.3 BCM ≈ 0.57 bn mmBtu (1 BCM ≈ 39.7m mmBtu at 25.2 SCM/mmBtu; mix 80% APM / 20% NWG) | (0.8 × 6.75 + 0.2 × 8.1) = $7.02 × 0.57bn × 88.3 = **₹35,200 Cr** (actual ₹36,330 Cr incl. JV/HP-HT [V]) | (0.8 × 7.0 + 0.2 × 13.3) = $8.26 × 0.57bn × 95 = **₹44,600 Cr** |
| VAP | ₹11,900 Cr [V] | ~₹15,000 Cr |
| **Revenue** | **~₹1,32,500 Cr** [V actual] | **~₹1,96,000 Cr** (annualised Q1 FY27 = ₹1,85,840 Cr [V]) |
| Royalty + cess (~20% → ~19%) | −₹26,500 Cr | −₹37,500 Cr |
| Opex (flat, rupee) | −₹36,000 Cr | −₹37,500 Cr |
| Exploration write-offs + survey | −₹8,300 Cr | −₹8,000 Cr |
| **EBITDA (screener basis)** | **₹61,700 Cr [V]** (47%) | **~₹1,13,000 Cr** (58%) (Q1 FY27 annualised ₹1,13,420 Cr [V]) |
| + Other income − DD&A − interest | +10,356 − 25,134 − 4,529 [V] | +8,000 − 25,500 − 4,400 |
| PBT | ₹42,415 Cr [V] | ~₹91,000 Cr |
| **PAT (×0.77)** | **₹32,894 Cr [V]** | **~₹70,000 Cr** (Q1 FY27 annualised ₹68,136 Cr) |

- The point: **+50% crude price → +~100% PAT** (operating leverage).
- In 2022–24 the SAED would have removed ~₹25–35k Cr of the shock-deck PBT [E].

### C.2 Worked example 2 — Oil India: one barrel and one mmBtu, Q1 FY27 [E composite]
- **Crude:**
  - Realisation $98.73 × ₹95 = ₹9,380/bbl.
  - Royalty 20% of wellhead (~₹1,690 after ~10% wellhead discount [E]) + cess 20% (~₹1,875) → ~₹5,800 net.
  - Opex ~₹1,000–1,300/bbl ($11–14 incl. G&A [E]).
  - **Cash margin ≈ ₹4,600/bbl ($48)**, vs ~₹2,500/bbl at $66 [E].
- **Gas:** $7.19/mmBtu × ₹95 = ₹683/mmBtu. Royalty ~10–20% [K]. Cash margin ~₹350–450/mmBtu ($4–5) [E]. Oil is ~6× more lucrative per boe.
- **NRL refining:** GRM $35.95 (normal $7–8) × 0.75 MMT/qtr × 7.33 = 5.5 mbbl → ~₹1,880 Cr GRM pool. Opex $4.5–5/bbl (~₹250 Cr). → EBITDA ₹1,843 Cr [V]. At a normal $7.5, EBITDA ≈ ₹250–300 Cr/qtr [E].

### C.3 Worked example 3 — ONGC consolidated Q1 FY27 bridge [V/E]
- Standalone PAT ₹17,034 Cr.
- + HPCL (100%) −₹12,265 Cr.
- + MRPL +₹946 Cr.
- + OVL ~+₹1,140 Cr (ex-impairment; ~₹1,000 Cr per mgmt).
- + OPaL (EBITDA −₹57 Cr → PAT ~−₹500–700 Cr [E]).
- + others/eliminations (incl. ~₹4,000+ Cr intra-group dividend elimination and tax effects [E]).
- **= pre-minority ₹6,554 Cr** [V].
- − NCI (HPCL's 45.1% of −₹12,265 = +₹5,530 Cr; MRPL's 11.4% of +₹946 = −₹110 Cr) → **attributable ≈ ₹11,899 Cr** [V-snip; E bridge].

### C.4 Worked example 4 — gas-cap arithmetic, ONGC Apr–Jun 2026 [E]
- Nomination gas sold ~3.6 BCM in the quarter ≈ 143m mmBtu (GCV basis, approx.).
- Formula price avg ($10.76 + 11.59 + 10.93) / 3 = $11.09 vs cap $7.00 → gap $4.09.
- Forgone revenue ≈ 143m × 0.81 (non-NWG share) × $4.09 × ₹95 ≈ **₹4,500 Cr in the quarter**. That is ~2.4× the ₹1,897 Cr extra that NWG earned over APM in the same quarter [V call].

### C.5 Company-level reconciliations
- **ONGC FY26 standalone:** crude ₹83,810 + gas ₹36,330 + VAP ₹11,879 + other ₹490 = ₹1,32,508 Cr [V AR26] = screener ₹1,32,506 Cr [V]. Implied crude realisation ~$63/bbl on 20.5 MMT at ₹88.31 [E] — below the $66–67 quarterly prints because of the condensate/JV mix and FX timing.
- **OIL FY26 standalone [E]:**
  - Crude: 3.45 MMT × 7.33 × $69.04 × ₹88.31 ≈ ₹15,400 Cr.
  - Gas: 2.5 BCM net sold (PPAC [V]) × 39.7m mmBtu/BCM = 99m mmBtu × ~$6.6 × ₹88.3 ≈ ₹5,800 Cr.
  - Pipelines, LPG and condensate add a little more.
  - Gas and crude alone (~₹21,200 Cr) are ~3–4% above screener revenue of ₹20,480 Cr [V], within the tolerance of the price and volume approximations.

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| Combined market cap | **₹3.58 lakh Cr** (ONGC ₹2,83,395 + OIL ₹74,467 Cr, 22-Oct-26) | [V screener] |
| Combined standalone (E&P) PAT, Q1 FY27 | **₹19,904 Cr** (+125% YoY; = 53% of all FY26) | [V screener] |
| India crude produced at home | **28.0 MMT (FY26)**; ~86% of it by these two | [V PPAC] |
| Crude import dependence | **88.7% (FY26)** | [V PPAC RR] |
| Gas ceiling vs formula (Oct-2026) | Producers get the **$7.00** cap vs a $11.22 formula price — shown in ₹: ~₹665 vs ~₹1,065 per mmBtu at ₹95/$ | [V PPAC; E conversion] |
| FY26 dividends paid by the two | **₹18,540 Cr** (ONGC ₹16,669 + OIL ₹1,871 Cr); ~₹10,900 Cr to GoI directly | [V AR26/presentation; E] |

## E. Chart-ready datasets

1. **India crude + condensate (MMT), FY20–FY26** [V PPAC RR]: FY20 32.2 · FY21 30.5 · FY22 29.7 · FY23 29.2 · FY24 29.4 · FY25 28.7 · FY26 27.9. Stacked: ONGC nomination 19.2/19.1/18.5/18.4/18.1/17.4/16.8; OIL nomination 3.1/2.9/3.0/3.2/3.3/3.4/3.4; PSC/RSC 8.2/7.1/7.0/6.2/5.7/5.6/5.7; condensate 1.6/1.4/1.2/1.4/2.2/2.2/2.0.
2. **Gross gas (MMSCM) by producer, FY21–FY26** [V RR]: see §2.1 table.
3. **Crude import dependence %** [V RR]: FY21 84.4 · FY22 85.5 · FY23 87.4 · FY24 87.8 · FY25 88.2 · FY26 88.7 · H1 FY27 88.1.
4. **Indian basket ($/bbl), annual FY12–FY26** [V RR]: 111.89, 107.97, 105.52, 84.16, 46.17, 47.56, 56.43, 69.88, 60.47, 44.82, 79.18, 93.15, 82.58, 78.56, 70.99. **Monthly 2026**: Jan 63.08, Feb 69.01, Mar 113.49, Apr 114.48, May 106.23, Jun 83.22, Jul n/a, Aug 90.19, Sep 116.09.
5. **APM formula vs ceiling ($/mmBtu), Apr-2024–Oct-2026 monthly** [V PPAC]: §7.2 table. Plus the HP-HT ceiling series 9.87, 10.16, 10.04, 9.72, 8.90, 9.89.
6. **SAED on domestic crude (₹/t), Jul-2022–Dec-2024** [V PPAC]: §7.3 table (step chart).
7. **OIL crude realisation ($/bbl)** [V presentation/call]: FY22 78.96 · FY23 95.47 · FY24 83.03 · FY25 78.09 · FY26 69.04 · Q1 FY27 98.73. **ONGC**: Q2 FY26 ~67 · Q3 FY26 ~61 [primer] · Q1 FY26 66.13 · Q1 FY27 99.45 [V].
8. **Standalone PAT (₹ Cr), FY15–FY26** [V screener]:
   - ONGC: 17,733 · 16,140 · 17,900 · 19,945 · 26,765 · 13,445 · 11,246 · 40,306 · 38,829 · 40,526 · 35,610 · 32,894.
   - OIL: 2,510 · 2,302 · 1,549 · 2,668 · 2,590 · 2,584 · 1,742 · 3,887 · 6,810 · 5,552 · 6,114 · 4,455.
9. **Quarterly standalone PAT (₹ Cr), Q1 FY24–Q1 FY27** [V screener]:
   - ONGC: 10,527 · 10,238 · 9,892 · 9,869 · 8,938 · 11,984 · 8,240 · 6,448 · 8,024 · 9,848 · 8,372 · 6,650 · **17,034**.
   - OIL: 1,613 · 325 · 1,584 · 2,029 · 1,467 · 1,834 · 1,222 · 1,591 · 813 · 1,044 · 808 · 1,790 · **2,870**.
10. **ONGC group production (MMTOE) by source, FY22–FY26** [V AR26]: ONGC (oil+gas) 40.45/40.21/39.44/39.25/38.86; JV 2.93/2.62/2.34/1.83/1.60; OVL 12.33/10.17/10.52/10.28/9.67; total 55.71/53.00/52.30/51.36/50.14 [E sums of V components].
11. **OIL production (MMTOE), FY21–FY26** [V presentation]: crude 2.96/3.01/3.18/3.36/3.46/3.45; gas 2.64/3.05/3.18/3.18/3.25/3.19; total 5.60/6.06/6.36/6.54/6.71/6.64.
12. **PSU oil capex (₹ Cr), FY24/FY25/FY26/FY27 target/H1 FY27** [V PPAC]: ONGC 34,551/61,110/34,939/30,000/14,534; OVL 3,262/5,023/5,387/7,265/4,890; OIL 5,390/7,624/11,623/8,653/5,548; NRL 8,585/9,038/8,317/7,500/3,027; HPCL 13,842/13,630/14,358/9,641/2,975; MRPL 1,513/1,006/1,316/836/359.
13. **2026 export levies on diesel (₹/l)** [V PPAC]: 21.5 → 55.5 → 23 → 16.5 → 13.5 → 14 → 8.5 → 15.5 → 25.5 → 24 → 25 → 20 → 16 → 8.5.
14. **Sector PAT Q1 FY27 (₹ Cr)** [V PPAC]: PSU upstream/midstream +24,196 · PSU OMCs −18,150 · PSU standalone refiners +3,237 · RIL +13,272.

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Definition | Good | Average | Weak | Members now |
|---|---|---|---|---|---|
| Production growth (O+OEG) | YoY % | > +3% | −2% to +3% | < −2% | ONGC FY26 −1% standalone, Q1 FY27 −3 to −5%; OIL FY26 −1%, Q1 FY27 crude +11% |
| Natural decline rate (mature fields) | % pa without new work | < 5% | 5–8% | > 10% | ONGC offshore 5–7% [V call] |
| Reserve replacement ratio (2P) | additions ÷ production | > 1.2 | 0.9–1.2 | < 0.9 | ONGC 1.17; OIL 1.02 [V] |
| Reserve life (2P/1P ÷ production) | years | > 15 | 10–15 | < 10 | ONGC ~13–14 (1P) [E]; OIL ~31 (2P dom.) [V] |
| Exploration success ratio | hydrocarbon-bearing ÷ tested | > 50% | 30–50% | < 30% | ONGC 53.4% [V] |
| Realisation vs Brent | $/bbl diff | ≥ 0 | −$2 to 0 | < −$3 | ONGC +$1.5–3 (Q1 FY27) [V call]; OIL ~Brent |
| Gas realisation | $/mmBtu | > $8 | $6.5–8 | < $6.5 | APM $7.00; NWG $13.3; OIL $7.19 |
| Opex / lifting cost (ex-levies) | $/boe | < $8 | $8–14 | > $14 | not disclosed this session — FLAG |
| Statutory levies / revenue | % | < 15% | 15–22% | > 22% | ONGC ~20% [E] |
| EBITDA margin (standalone E&P) | % | > 55% | 40–55% | < 40% | ONGC 47% FY26 / 61% Q1; OIL 30% FY26 / 51% Q1 (screener) |
| ROCE (standalone) | % | > 18% | 12–18% | < 12% | ONGC 13% (screener) / 22.5% (company); OIL 10% |
| Net debt / EBITDA (cons.) | × | < 1 | 1–2.5 | > 2.5 | OIL 2.6× (company, FY26) [V]; ONGC ~1.0–1.3× [E] |
| Dividend yield | % | > 5% | 2.5–5% | < 2.5% | ONGC 5.89%; OIL 2.52% [V] |
| Payout (standalone PAT) | % | > 45% | 30–45% | < 30% | ONGC ~51% [E]; OIL 42% [V screener] |
| GRM (refining legs) | $/bbl | > $10 | $6–10 | < $6 | NRL $13.43 FY26 / $35.95 Q1; HPCL $8.79; MRPL $9.22 |
| Capacity utilisation (refinery) | % | > 100% | 90–100% | < 90% | NRL 103.75% FY26; 105% Q1 FY27 [V] |

## G. Timeline (year: event)
- **1889:** Oil struck at Digboi, Assam [primer].
- **1956:** Oil & Natural Gas Commission set up [primer].
- **18-Feb-1959:** Oil India incorporated (Burmah Oil–GoI JV) [primer].
- **1974:** Bombay (Mumbai) High discovered; production from 1976 [primer/K].
- **1981:** OIL fully government-owned [primer].
- **1993–94:** ONGC corporatised; partial listing [primer].
- **1999:** NELP round I [K].
- **2002–03:** RIL KG-D6 discovery; upstream subsidy-sharing begins (FY04) [K].
- **2009:** OIL IPO (Sep-2009); KG-D6 and Mangala on stream [K/primer].
- **Jun-2010 / Oct-2014:** petrol / diesel price deregulation [K].
- **Nov-2014:** new domestic gas price formula [K].
- **Mar-2016:** HELP; HP-HT gas pricing freedom (notification 21-03-2016) [V PPAC ref]; DSF [K].
- **FY2016-17:** upstream subsidy sharing ends [K].
- **Jan-2018:** ONGC buys 51.11% of HPCL for ~₹36,915 Cr [primer/K].
- **2018:** OALP round I (55 blocks) [V RR].
- **Mar-2021:** OIL acquires majority of NRL (now 69.63%) [primer].
- **1-Jul-2022:** SAED on domestic crude ₹23,250/t; export duties on diesel/petrol/ATF [V PPAC].
- **7-Apr-2023:** Kirit Parikh gas formula notified (10% of basket; $4–6.50) [V PPAC/AR26].
- **2023:** OIL becomes a Maharatna [primer].
- **Jan-2024:** KG-DWN-98/2 first oil [primer].
- **27-Feb-2024:** ONGC Green Ltd incorporated [V AR26].
- **Jul-2024:** OIL 1:2 bonus [V presentation].
- **18-Sep-2024 / 2-Dec-2024:** crude SAED cut to nil / formally scrapped [V PPAC].
- **Feb–Mar 2025:** ONGC–bp TSP for Mumbai High [primer]; Oilfields Amendment Act 2025 [V].
- **Apr-2025:** APM ceiling $6.75 [V].
- **Aug–Sep 2025:** Mozambique LNG force majeure lifted [V call].
- **Dec-2025:** OVL regains Sakhalin-1 interest; NRL gets Navratna; ONGC-bp Phase-1 NOA (26-Dec) [V].
- **28-Feb-2026:** West Asia war begins [V-sib].
- **26/27-Mar-2026:** excise cut on petrol/diesel; export SAED on diesel/ATF [V PPAC].
- **Mar-2026:** DUDP gas starts; Indian basket $113.49 [V].
- **Apr-2026:** APM ceiling $7.00; formula $10.76; ceasefire ~7-Apr [V; V-sib].
- **11-Apr-2026:** diesel export levy peaks at ₹55.50/l [V].
- **25-May-2026:** OIL Investors' Meet (net zero 2040; 10–12 MMTOE by FY30) [V].
- **Jul-2026:** ONGC spuds its first Samudra Manthan deepwater well (Mahanadi, ~25-Jul) [V call].
- **4–10 Aug-2026:** record Q1 FY27 results (ONGC PAT ₹17,034 Cr; OIL ₹2,870 Cr); HPCL −₹12,265 Cr [V].
- **Sep-2026:** basket $116.09; ONGC gas strike in Mahanadi deepwater (18-Sep) [V].
- **1-Oct-2026:** HP-HT ceiling $9.89; APM formula $11.22 vs cap $7 [V].
- **14 / 22-Oct-2026:** MRPL / HPCL Q2 results (HPCL back to profit) [V].
- **By 14-Nov-2026:** ONGC/OIL Q2 FY27 results due [E].
- **Dec-2026:** Paradip–Numaligarh crude pipeline and NREP first units due [V call/RR].

## H. Figures I could not source well (and conflicts)
1. **Lifting / production cost per boe** (ONGC and OIL) — not in the pages read. ONGC used to publish "cost of production $/bbl" in its presentations [K]. **Unverified; do not print a number without a source.**
2. **ONGC quarterly realisation series FY26** — only Q1 FY26 ($66.13) and Q1 FY27 ($99.45) are verified. The primer's ~$67 (Q2) and ~$61 (Q3) are unverified. The Q4 FY26 and Q1 FY25 (~$83) prints are not verified.
3. **ONGC 2P reserve stock** — only the 1P stock (793.31 MMTOE group) and the 2P accretion (44.01) were verified.
4. **APM vs NWG vs HP-HT volume split** for ONGC is only partially sourced (19% NWG by volume, Q1 FY27). OIL's NWG share is not disclosed.
5. **Upstream subsidy-sharing history (2003–2016)** amounts are [K], from memory — verify against PPAC's subsidy tables before printing exact crore figures.
6. **SAED collections** (₹ Cr paid by ONGC/OIL in FY23–FY25) — not sourced. The primer's "~₹25,000 Cr in year one" is unverified.
7. **Shareholding cross-holdings split** (IOC ~7.8% / GAIL ~2.5% in ONGC; ONGC's ~14.2% of IOC / ~5% of GAIL / 12.5% of Petronet) — [K].
8. **MRPL split** (71.63% direct + 16.96% via HPCL) — [K]; the 88.58% total is in the primer (ScanX).
9. **PI-share chart labels** in the PPAC Snapshot (ONGC 71.7/73.3, OIL 14.4/11.9) — parsed from chart text; the mapping of values to periods is best-effort.
10. **Brent July-2026 and Indian basket July-2026** — not obtained. Q2 FY27 average realisation is therefore an estimate.
11. **OIL "8.7 MMTOE in FY26"** (strategy slide) vs 6.64 MMTOE domestic — unreconciled.
12. **ONGC "OPML" entity** (7-Oct-2026) — purpose unknown.
13. **HPCL's exact Q2 FY27 investor-handout revenue** ₹1,39,140 Cr vs screener sales ₹1,34,407 Cr — basis difference (gross vs net of excise?).
14. **ONGC net debt** — company-basis cash not obtained. Screener borrowings (₹1,74,316 Cr consolidated) include lease liabilities and HPCL/MRPL/OPaL debt. Investments (₹1,01,084 Cr) are largely strategic (IOC, GAIL, Petronet) and not cash.
15. **OIL Q2 FY27 board date and ONGC Q2 board date** — not announced as of 22-Oct-2026.

---

# PART 2 — COMPANY FACT PACKS (2 members)

Basis for all standardised numbers: **screener.in pulled 22-Oct-2026** (consolidated and standalone pages), unless tagged otherwise. FY26 = year to Mar-2026. Q1 FY27 = Jun-2026 quarter. Native KPIs come from company filings fetched this session, with primer data tagged [primer].

## 2.0 Peer table (₹ Cr; m-cap and multiples 22-Oct-26)

| Company | NSE | Basis | FY26 revenue | FY25 revenue | Growth | OP (EBITDA proxy) | OPM | PAT (pre-minority) | PAT attributable | ROCE | ROE | Net debt (company / screener) | M-cap | P/E | P/B | EV/EBITDA | Crude realisation | O+OEG (FY26) | RRR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ONGC | ONGC | Consolidated | 6,08,663 | 6,12,064 | −0.6% | 1,03,120 | 16.9% | 49,793 | **41,424** [V AR26] | 14.2% | 11.6% | n/a / 73,232 (borrowings 1,74,316 − investments 1,01,084; investments mostly strategic → overstates cash) | **2,83,395** | **6.48** (attrib. TTM) | 0.76 | ~4.4× (gross debt, ex-NCI) / ~4.8× incl. HPCL+MRPL minorities [E] | $99.45 (Q1 FY27); FY26 ~$63–67 | 50.14 MMTOE group; 38.87 SA ex-JV | 1.17 (2P dom.) |
| ONGC | ONGC | Standalone | 1,32,506 | 1,33,863 | −1.0% | 61,722 (company EBITDA 72,078) | 46.6% | 32,894 | 32,894 | 13.0% (company 22.46%) | 10.2% | loan funds 7,823 (PPAC); screener borrowings 33,645 incl. leases; D/E 0.02 | 2,83,395 | 6.76 | 0.85 | n.m. (holdco value in investments) | — | — | — |
| Oil India | OIL | Consolidated | 33,081 (total income 38,981 [V pres.]) | 31,703 | +4.3% | 10,446 (company EBITDA 13,498) | 31.6% | 7,551 | **~6,620** [E from EPS] | 11.5% (company 9.0%) | 12.2% | **~35,100 (company 2.6× EBITDA) / 696 (screener: 37,478 − 36,782)**; group gross debt 37,233 [V call] | **74,467** | **8.91** | 1.28 | ~8.1× (company net debt, company EBITDA) / 10.7× (gross debt, OP) [E] | $98.73 (Q1 FY27); $69.04 FY26 | 6.64 MMTOE | 1.02 |
| Oil India | OIL | Standalone | 20,480 (total income 24,039) | 20,527 | −0.2% | 6,060 (company EBITDA 8,753) | 29.6% | 4,455 | 4,455 | 10.4% (company 10.1%) | 9.4% | ~13,100 (company 1.5× EBITDA); loans 13,278 (PPAC) | 74,467 | 11.4 | 1.53 | n.m. | — | — | — |

Notes:
- OIL attributable PAT = EPS ₹40.70 × 162.66 Cr shares ≈ ₹6,620 Cr [E]. ONGC attributable from AR26 MD&A [V].
- Dividend yield: ONGC **5.89%** (FY26 DPS ₹13.25); OIL **2.52%** (₹11.50) [V screener].
- 52-week range: ONGC ₹218–308; OIL ₹396–531 [V].

---

## 2.1 ONGC (ONGC · 500312) — India's national oil company: ~72% of domestic crude, ~53–57% of gas; consolidates HPCL, MRPL, OVL, OPaL

**Standardised financials [V screener 22-Oct-26 unless noted]**
- **Consolidated:**
  - FY26 sales ₹6,08,663 Cr (FY25 ₹6,12,064; FY24 ₹6,01,581; FY23 ₹6,32,291). Company "revenue from operations" (gross of excise): ₹6,62,247 Cr [V AR26].
  - OP ₹1,03,120 Cr (17%). Company EBITDA ₹1,15,476 Cr [V AR26].
  - Other income ₹14,923 Cr; interest ₹13,029 Cr; DD&A ₹37,391 Cr.
  - PBT ₹67,623 Cr; PAT ₹49,793 Cr (+30%); **attributable ₹41,424 Cr (+14%)**; NCI ₹8,369 Cr [V AR26].
  - EPS ₹32.93. Payout 22% of consolidated PAT (screener).
- **Consolidated quarters (sales / OP / PAT pre-minority):**
  - Q1 FY26 1,63,106 / 25,770 / 11,554.
  - Q2 FY26 1,57,911 / 26,521 / 12,615.
  - Q3 FY26 1,67,423 / 25,335 / 11,946.
  - Q4 FY26 1,73,801 / 25,352 / 13,678.
  - **Q1 FY27 2,04,987 / 15,485 (8%) / 6,554 (attributable ~11,899)**.
  - TTM PAT ₹44,793 Cr pre-minority; TTM EPS ₹34.59.
- **Standalone:**
  - FY26 sales ₹1,32,506 Cr (FY25 1,33,863; FY24 1,29,741; FY23 1,44,513).
  - OP ₹61,722 Cr (47%); other income ₹10,356 Cr; DD&A ₹25,134 Cr; interest ₹4,529 Cr; PBT ₹42,415 Cr; **PAT ₹32,894 Cr (−7.6%)**. Revenue mix: crude ₹83,810 / gas ₹36,330 / VAP ₹11,879 Cr [V AR26].
  - **Q1 FY27: sales ₹46,460 Cr (+45%), OP ₹28,355 Cr (61%), PBT ₹22,848 Cr (record), PAT ₹17,034 Cr (+112%)**. TTM PAT ₹41,904 Cr.
- **Balance sheet (consolidated, Mar-26):**
  - Equity ₹6,290 Cr (1,258 Cr shares of ₹5). Reserves ₹3,65,478 Cr. Borrowings ₹1,74,316 Cr. CWIP ₹1,16,272 Cr. Investments ₹1,01,084 Cr.
  - CFO ₹1,12,719 Cr; FCF ₹72,219 Cr (screener definition).
- **Balance sheet (standalone, Mar-26):** reserves ₹3,25,480 Cr; borrowings ₹33,645 Cr (loan funds ₹7,823 Cr per PPAC RR [V]); investments ₹1,13,379 Cr (subsidiaries + IOC/GAIL/Petronet stakes); CFO ₹69,272 Cr; FCF ₹42,427 Cr.
- **Ratios:**
  - Consolidated ROCE 14.2%, ROE 11.6%.
  - Standalone ROCE 13.0% (company 22.46% on its capital-employed definition) [V AR26], ROE 10.2%.
  - 10-yr consolidated sales CAGR 17% (HPCL acquisition); 3-yr −1%.
  - Stock CAGR: 10-yr 1%, 5-yr 7%, 1-yr −9%.
- **Valuation (22-Oct-26):** price ₹225; **m-cap ₹2,83,395 Cr**; P/E 6.48 (consolidated attributable) / 6.76 (standalone); BV ₹296 consolidated / ₹264 standalone → P/B 0.76 / 0.85; **dividend yield 5.89%**.
  - **SOTP pointer [E]:** listed stakes alone are worth ~₹60,700 Cr — HPCL 54.9% × ₹72,736 Cr = ₹39,932 Cr, plus MRPL 71.63% × ₹29,060 Cr = ₹20,816 Cr — ≈ 21% of ONGC's m-cap. IOC/GAIL/Petronet stakes are extra [K, not priced here].

**Native KPIs**
- **Production [V AR26]:**
  - Crude incl. JV 20.501 MMT (FY25 20.892); gas incl. JV 19.966 BCM (20.190); VAP 2.561 MMT.
  - Standalone ex-JV O+OEG 38.87 MMTOE [V call].
  - Group incl. OVL **50.14 MMTOE** (FY25 51.36; FY22 55.71).
  - Q1 FY27 standalone crude 4.452 MMT (−4.9%), gas 4.756 BCM (−1.9%) [V-snip Ventura/Angel One].
- **Guidance [V call 5-Aug-26]:**
  - FY27 standalone O+OEG ~39 MMTOE, FY28 ~40 (50:50 oil/gas).
  - FY27 gas +~1 BCM from DUDP (to 3 MMSCMD by Q3), East Coast CPP (+1.3 MMSCMD), Tapti-Daman (+0.5).
  - Oil flat vs FY26 by year-end.
- **KG-DWN-98/2:**
  - Oil ~21,000 bpd (13 wells), affected by reservoir connectivity.
  - Gas 1.5–1.7 MMSCMD from 4 of 7 wells; 3 more after CPP (Oct–Nov 2026) → 3+ MMSCMD by Q4 FY27 → 6–7 MMSCMD by Q4 FY28 [V call].
- **Western Offshore:**
  - >₹40,000 Cr of projects. bp TSP-1 (Mumbai High) oil 107% / gas 113% of baseline; TSP extended to all of Western Offshore.
  - Part Replacement Pipeline Project completed Mar-2026 (₹1,219 Cr) [V call; V AR26].
- **Realisation:** crude $99.45 (Q1 FY27) vs $66.13 (Q1 FY26) [V]. Pricing = Brent-based with ~1–5% premium ("4% comes to our kitty") [V call].
- **Gas:**
  - APM capped at $6.75 (FY26) and $7.00 (FY27) [V].
  - NWG $13.31 (Q1 FY27) vs $8.24; NWG revenue ₹3,998 Cr, +₹1,897 Cr over APM; NWG = 38% of nomination gas revenue, 19% of volume, 24% of sales quantity [V call; V-snip].
  - Gas share of standalone revenue 28% (FY26).
- **Reserves [V AR26]:** 1P group 793.31 MMTOE (ONGC 517.88 + JV 10.16 + OVL 265.27). 2P accretion 44.01 MMTOE, **RRR 1.17**.
- **Exploration:**
  - 100 exploratory wells and a 53.4% success ratio in FY26; 3 discoveries (Vajramani, MBS202HAA-1, MBS191HCA-1) [V AR26].
  - First Samudra Manthan deepwater well in Mahanadi spudded ~25-Jul-2026. **Gas struck in MN-DW18-1-H-D on 18-Sep-2026** [V screener].
- **Capex:**
  - Standalone FY26 ₹35,878 Cr (FY25 ₹62,057 Cr). Group ₹61,131 Cr (HPCL ₹15,705; OVL ₹7,207; MRPL ₹2,044) [V AR26].
  - Guidance $3.5–4bn/yr [V call]. PPAC FY27 target ₹30,000 Cr; H1 FY27 ₹14,534 Cr [V].
- **Dividend:** FY26 ₹13.25 (record; ₹16,669 Cr) vs FY25 ₹12.25 [V AR26]. FY24 ₹12.25, FY23 ₹11.25, FY22 ₹10.50 [K].
- **Subsidiaries:**
  - **HPCL:** FY26 consolidated PAT ₹18,047 Cr (standalone ₹17,175 Cr), GRM $8.79, throughput 26.04 MMT, 25,098 outlets; Q1 FY27 −₹12,265 Cr; Q2 FY27 +₹3,625 Cr [V].
  - **MRPL:** GRM $9.22, 16.774 MMT; PAT ₹1,931 Cr standalone; Q1/Q2 FY27 ₹946 / ₹1,901 Cr [V].
  - **OVL:** 9.67 MMTOE; ~₹1,000 Cr PAT/qtr post-Sakhalin [V].
  - **OPaL:** FY26 EBITDA ₹1,207 Cr; Q1 FY27 −₹57 Cr [V call]; SEZ exit worth ~₹1,000 Cr EBITDA; Mitsui OSK ethane carriers.
  - **ONGC Green:** 2.853 GW RE [V call].

**Ownership [V screener Sep-26]:** promoter (President of India) **58.89%** (flat since ≥Dec-23); "Government" (IOC/GAIL cross-holdings) 10.30%; FII 8.55%; DII 18.66%; public 3.60%; 27.4 lakh shareholders. The primer's "~58.9%" is confirmed.

**Story bullets**
1. **Record standalone, broken consolidation.** Q1 FY27 standalone PAT doubled on $99 crude with no windfall tax, while HPCL's under-recoveries cut consolidated pre-minority PAT by 43%. The writer must separate the two (trap 1–2).
2. **Gas is the growth story; oil is the defence.** NWG and HP-HT prices are 1.9× and 1.4× the APM cap. KG-98/2 gas, DUDP and Daman are the FY27–FY28 volume adds. Oil relies on bp-led redevelopment to offset a 5–7% decline.
3. **A state instrument.** GoI takes ~₹9.8k Cr/yr in dividends directly. ONGC declined to arbitrate a ₹15,216 Cr PMT claim against GoI [V call]. It funds HPCL/OPaL rescues and Samudra Manthan exploration. The P/E 6.5× and P/B 0.76× are the discount for that.
4. **Main risk:** a crude SAED or subsidy-sharing revival if $100+ oil persists, combined with continued KG-98/2 underperformance and HPCL losses if retail prices stay frozen.

**Sources:** screener.in/company/ONGC/consolidated/ and /company/ONGC/ (22-Oct-26); ONGC Q1 FY27 transcript (ongcindia.com); ONGC Integrated AR 2025-26 (BSE); PPAC Snapshot/RR; Ventura/Angel One/askfuzz Q1 FY27 summaries [V-snip].

---

## 2.2 Oil India (OIL · 533106) — India's #2 NOC: Upper Assam + Rajasthan onshore E&P, 69.63% of Numaligarh Refinery (3 → 9 MMTPA), NE pipelines

**Standardised financials [V screener 22-Oct-26 unless noted]**
- **Consolidated:**
  - FY26 sales ₹33,081 Cr (FY25 31,703; FY24 31,749; FY23 36,084). Company total income ₹38,981 Cr [V presentation].
  - OP ₹10,446 Cr (32%); company EBITDA ₹13,498 Cr.
  - Other income ₹3,053 Cr; interest ₹1,204 Cr; DD&A ₹2,712 Cr; PBT ₹9,582 Cr.
  - **PAT ₹7,551 Cr (+7%)**; attributable ~₹6,620 Cr; EPS ₹40.70.
- **Consolidated quarters (sales / OP / PAT):**
  - Q1 FY26 7,929 / 2,351 / 2,047.
  - Q2 FY26 8,394 / 2,303 / 1,644.
  - Q3 FY26 8,330 / 2,287 / 1,436.
  - Q4 FY26 9,293 / 3,281 / 2,424.
  - **Q1 FY27 12,503 / 5,793 (46%) / 4,027 (record)**. TTM PAT ₹9,531 Cr; TTM EPS ₹51.36.
- **Standalone:**
  - FY26 sales ₹20,480 Cr; OP ₹6,060 Cr (30%); **PAT ₹4,455 Cr (−27%)**.
  - **Q1 FY27 sales ₹7,958 Cr (record), OP ₹4,084 Cr (51%; company EBITDA ₹4,605 Cr, 54%+), PBT ₹3,742 Cr, PAT ₹2,870 Cr (vs ₹813 Cr)** [V screener; V call].
- **Balance sheet (consolidated Mar-26):**
  - Equity ₹1,627 Cr (162.66 Cr shares of ₹10). Reserves ₹56,372 Cr (net worth ₹53,716 Cr company basis excl. NCI [V presentation]).
  - Borrowings ₹37,478 Cr. **CWIP ₹37,644 Cr (NREP)**. Investments ₹36,782 Cr (incl. IOC shares and JV stakes).
  - CFO ₹10,684 Cr; FCF ₹2,126 Cr.
- **Company debt [V call]:** group ~₹37,233 Cr = OIL standalone $1.4bn loan (Mozambique) + $500m Singapore bond due May-2027 + NRL ~₹19,000 Cr.
- **Company ratios [V presentation]:**
  - Consolidated: net debt/EBITDA **2.6×**, D/E 0.56, ROCE 9.0%.
  - Standalone: net debt/EBITDA 1.5×, D/E 0.27, ROCE 10.1%, operating margin 17.3%.
- **Screener ratios:** consolidated ROCE 11.5%, ROE 12.2%; standalone ROCE 10.4%, ROE 9.36%. 5-yr consolidated profit CAGR 12%; stock CAGR 5-yr 27%, 1-yr +12%.
- **Valuation (22-Oct-26):** price ₹457; **m-cap ₹74,467 Cr**; P/E 8.91 consolidated / 11.4 standalone; BV ₹357 / ₹298 → P/B 1.28 / 1.53; yield 2.52%. OIL's own presentation showed ₹82k Cr m-cap on 20-May-2026 [V].

**Native KPIs**
- **Production [V presentation]:** FY26 crude 3.45 MMT, gas 3.19 BCM, **6.64 MMTOE** (FY25 6.71; FY21 5.60).
  - FY26 lost 0.33 MMTOE: 0.23 gas offtake + 0.10 crude to a Q3 blockade.
  - **Q1 FY27: 1.707 MMTOE; crude 0.95 MMT (+11%); record 10,921 t/d (27-Jun) → 11,017 t/d (3-Aug)**; gas −8% YoY (offtake) [V call].
- **Guidance [V call]:** crude ≥3.9 MMT FY27 (maybe 4.0); ~4.2 MMT FY29. Gas 3.8 BCM FY28 → ~5 BCM FY29. Group target 10–12 MMTOE by FY30 [V presentation].
- **Realisation:** crude $98.73 (Q1 FY27) vs $66.20; FY26 $69.04, FY25 $78.09, FY24 $83.03, FY23 $95.47, FY22 $78.96. Gas $7.19 vs $6.72 [V].
- **Reserves:** 2P 231 MMTOE (domestic 190 = crude 69 + gas 121; overseas 41). **RRR 1.02 (FY26), 0.94 (FY25)**. Reserve life ~31 yrs [V presentation].
- **Drilling:** FY25 22E + 35D; **FY26 22E + 52D = 74 (record) + 307 workovers**; FY27 target 42E + 57D; Q1 FY27 17 wells (7E/10D) [V call].
- **Frontier:**
  - Andaman: Vijayapuram-2 intermittent gas (written down); Vijayapuram-3 continuous flow (technical discovery); Vijayapuram-1 (~₹1,000–1,050 Cr spent) being hydrofracked; 4th well by Dec-2026.
  - KG/Mahanadi deep and ultra-deep: rigs Jun–Jul 2027 and Mar-2028. A ₹800 Cr government-funded stratigraphic well.
  - TotalEnergies + Petrobras technical partners [V call].
  - Libya gas discovery (FY26) [V presentation].
- **Capex:**
  - Standalone FY26 ₹13,025 Cr; Q1 FY27 ₹3,050 Cr (survey 450, exploratory drilling 1,230, development 700, equipment 350, investments 350); FY27 BE ₹8,600 Cr.
  - NRL FY26 ₹8,317 Cr (₹6,855 Cr refinery expansion) [V call; presentation]. PPAC FY27 target OIL ₹8,653 Cr, NRL ₹7,500 Cr; H1 ₹5,548 / ₹3,027 Cr [V].
- **NRL:**
  - FY26 revenue ₹26,658 Cr; PAT ₹3,065 Cr (+90%); GRM $13.43 (ex excise benefit); utilisation 103.75%; distillate yield 87.25%; NCI 9.2; Navratna Dec-2025.
  - **Q1 FY27: revenue ₹9,146 Cr (+45%), GRM $35.95 (≈$2 inventory gain; normal $7–8), EBITDA ₹1,843 Cr, PAT ₹1,305 Cr**. Discounts to OMCs: petrol ₹13 → ₹3/l and diesel ₹10/l → nil through the quarter [V presentation; V call].
- **NREP:**
  - ~₹30,000 Cr spent of ₹34–35k Cr; plus PP unit (360 ktpa) ₹7.2–7.3k Cr.
  - CDU/VDU + DHDT + SRU by Oct–Nov 2026; rest by 31-Mar-2027; ~75% utilisation by Q4 FY28.
  - Paradip–Numaligarh crude pipeline: 1,626 km, 9 MMTPA, 95% complete (30-Apr-26), mechanical completion Oct-2026, commissioning Dec-2026 [V call/presentation].
- **Pipelines:** NBPL 9.65 MMTPA crude; NSPL 1.72 → 5.5 MMTPA (mechanically complete 12-Oct-2025); DNPL 1.2 → 2.5 MMSCMD (₹750 Cr vs ₹860 Cr approved); Duliajan Feeder Line to IGGL 3.5 MMSCMD (1.28 BCM; PNGRB approval Feb-2026; ~20% done; FY28) [V].
- **Dividend:** FY26 ₹11.50 (₹1,871 Cr); FY25 ₹11.50; FY24 ₹14.50; FY23 ₹20.00; FY22 ₹14.25 (pre-bonus; 1:2 bonus Jul-2024). Five-year total ₹9,028 Cr [V presentation].
- **New energy:** 188 MW RE; 5+ GW by 2040; 25 CBG plants by 2030 (₹3,750 Cr approved); 1 MW GH₂ (Himachal); ₹20,000 Cr to 2040; **net zero (S1+2) 2040**, zero routine flaring 2027, zero methane 2030 [V presentation].

**Ownership [V screener Sep-26; V presentation Mar-26]:**
- Promoter (GoI) **56.66%** (flat).
- "Government" 9.87% = IOCL 4.93% + BPCL 2.47% + HPCL 2.47%.
- FII 7.15% (down from 10.99% Dec-23). DII 20.66% (LIC 6.86%, MFs 9.31% at Mar-26). Public 5.67%; 4.31 lakh holders.
- Ratings AAA/A1+ domestic; Moody's Baa3, S&P/Fitch BBB− (sovereign-capped) [V presentation].

**Story bullets**
1. **The cleanest "oil price + volume" play in India.** Onshore Assam crude at record rates, uncapped Brent-linked pricing, and now 1 MMT/quarter. Q1 FY27 standalone PAT was 3.5× a year earlier.
2. **The gas option is a pipeline problem, not a geology problem.** "Ramping up the production by itself is not a challenge… absence of the network is" [V call]. The DNPL tie-in (late 2026) and the IGGL feeder (Dec-2027) take gas from 2.9 to ~5 BCM, all at NWG prices.
3. **NRL triples in 2027.** It turns OIL into a majority-refining group by revenue. Normal GRMs of $7–8/bbl are far below Q1's $36, and consolidated net debt/EBITDA is already 2.6×.
4. **Main risks:** NE blockades and offtake shut-ins; Andaman dry-hole write-offs (~₹1,000 Cr per well); NREP cost and commissioning slippage; the excise benefit eroding; a crude SAED revival.

**Sources:** screener.in/company/OIL/consolidated/ and /company/OIL/ (22-Oct-26); OIL Q1 FY27 transcript (BSE, filed 12-Aug-2026); OIL Investors' Meet presentation FY2025-26 (BSE, 25-May-2026); PPAC.

---

## 2.3 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {
    "company": "Oil and Natural Gas Corporation Ltd",
    "nse": "ONGC", "bse": "500312", "primer": "primers/ongc.html",
    "screener_date": "2026-10-22", "price_inr": 225, "mcap_cr": 283395,
    "pe_consolidated_attrib_ttm": 6.48, "pe_standalone_ttm": 6.76,
    "pb_consolidated": 0.76, "pb_standalone": 0.85, "div_yield_pct": 5.89, "dps_fy26_inr": 13.25, "dividend_total_fy26_cr": 16669,
    "cons_fy26": {"revenue": 608663, "revenue_company_gross": 662247, "op": 103120, "opm_pct": 16.9, "ebitda_company": 115476, "pat_pre_minority": 49793, "pat_attributable": 41424, "nci": 8369, "roce_pct": 14.2, "roe_pct": 11.6, "borrowings": 174316, "investments": 101084, "cwip": 116272, "cfo": 112719},
    "cons_fy25": {"revenue": 612064, "op": 88857, "pat_pre_minority": 38329, "pat_attributable": 36226},
    "cons_q1fy27": {"revenue": 204987, "op": 15485, "pat_pre_minority": 6554, "pat_attributable": 11899},
    "cons_q1fy26": {"revenue": 163106, "op": 25770, "pat_pre_minority": 11554, "pat_attributable": 9800},
    "sa_fy26": {"revenue": 132506, "crude_rev": 83810, "gas_rev": 36330, "vap_rev": 11879, "op": 61722, "ebitda_company": 72078, "pat": 32894, "roce_pct_screener": 13.0, "roce_pct_company": 22.46, "roe_pct": 10.2, "loan_funds_ppac": 7823, "borrowings_screener": 33645},
    "sa_fy25": {"revenue": 133863, "op": 65237, "pat": 35610},
    "sa_q1fy27": {"revenue": 46460, "op": 28355, "pbt": 22848, "pat": 17034},
    "sa_q1fy26": {"revenue": 32003, "op": 17185, "pat": 8024},
    "crude_realisation_usd_bbl": {"q1fy26": 66.13, "q1fy27": 99.45},
    "nwg_price_usd_mmbtu": {"q1fy26": 8.24, "q1fy27": 13.31},
    "production": {"crude_incl_jv_mmt_fy26": 20.501, "crude_incl_jv_mmt_fy25": 20.892, "gas_incl_jv_bcm_fy26": 19.966, "gas_incl_jv_bcm_fy25": 20.190, "group_mmtoe_fy26": 50.14, "group_mmtoe_fy25": 51.36, "ovl_mmtoe_fy26": 9.67, "sa_ex_jv_mmtoe_fy26": 38.87, "q1fy27_crude_mmt_sa": 4.452, "q1fy27_gas_bcm_sa": 4.756, "guidance_mmtoe_fy27": 39, "guidance_mmtoe_fy28": 40},
    "reserves": {"group_1p_mmtoe": 793.31, "ovl_1p_mmtoe": 265.27, "rrr_2p_domestic_fy26": 1.17, "accretion_2p_mmtoe_fy26": 44.01},
    "capex": {"sa_fy26": 35878, "group_fy26": 61131, "ppac_target_fy27": 30000, "h1fy27": 14534},
    "shareholding_sep26_pct": {"promoter": 58.89, "govt_psu_crossholding": 10.30, "fii": 8.55, "dii": 18.66, "public": 3.60},
    "listed_stakes": {"hpcl_pct": 54.90, "hpcl_mcap": 72736, "mrpl_direct_pct": 71.63, "mrpl_mcap": 29060}
  },
  {
    "company": "Oil India Ltd",
    "nse": "OIL", "bse": "533106", "primer": "primers/oil-india.html",
    "screener_date": "2026-10-22", "price_inr": 457, "mcap_cr": 74467,
    "pe_consolidated_ttm": 8.91, "pe_standalone_ttm": 11.4,
    "pb_consolidated": 1.28, "pb_standalone": 1.53, "div_yield_pct": 2.52, "dps_fy26_inr": 11.50, "dividend_total_fy26_cr": 1871,
    "cons_fy26": {"revenue": 33081, "total_income_company": 38981, "op": 10446, "opm_pct": 31.6, "ebitda_company": 13498, "pat_pre_minority": 7551, "pat_attributable": 6620, "roce_pct": 11.5, "roce_pct_company": 9.0, "roe_pct": 12.2, "borrowings": 37478, "investments": 36782, "cwip": 37644, "net_debt_company_est": 35100, "net_debt_to_ebitda_company": 2.6, "cfo": 10684},
    "cons_fy25": {"revenue": 31703, "op": 11158, "pat_pre_minority": 7040, "pat_attributable": 6550},
    "cons_q1fy27": {"revenue": 12503, "op": 5793, "pat_pre_minority": 4027, "pat_attributable": 3631},
    "cons_q1fy26": {"revenue": 7929, "op": 2351, "pat_pre_minority": 2047, "pat_attributable": 1897},
    "sa_fy26": {"revenue": 20480, "total_income_company": 24039, "op": 6060, "ebitda_company": 8753, "pat": 4455, "roce_pct": 10.4, "roce_pct_company": 10.1, "roe_pct": 9.36, "net_debt_to_ebitda_company": 1.5},
    "sa_fy25": {"revenue": 20527, "op": 8766, "pat": 6114},
    "sa_q1fy27": {"revenue": 7958, "op": 4084, "ebitda_company": 4605, "pbt": 3742, "pat": 2870},
    "sa_q1fy26": {"revenue": 5012, "op": 1606, "pat": 813},
    "crude_realisation_usd_bbl": {"fy22": 78.96, "fy23": 95.47, "fy24": 83.03, "fy25": 78.09, "fy26": 69.04, "q1fy26": 66.20, "q1fy27": 98.73},
    "gas_price_usd_mmbtu": {"q4fy26": 6.72, "q1fy27": 7.19},
    "production": {"crude_mmt": {"fy21": 2.96, "fy22": 3.01, "fy23": 3.18, "fy24": 3.36, "fy25": 3.46, "fy26": 3.45}, "gas_bcm": {"fy21": 2.64, "fy22": 3.05, "fy23": 3.18, "fy24": 3.18, "fy25": 3.25, "fy26": 3.19}, "mmtoe_fy26": 6.64, "q1fy27_mmtoe": 1.707, "q1fy27_crude_mmt": 0.95, "guidance_crude_mmt_fy27": 3.9, "guidance_gas_bcm_fy28": 3.8, "guidance_gas_bcm_fy29": 5.0, "target_mmtoe_fy30": "10-12"},
    "reserves": {"2p_total_mmtoe": 231, "2p_domestic_mmtoe": 190, "2p_overseas_mmtoe": 41, "rrr_fy26": 1.02, "rrr_fy25": 0.94, "reserve_life_years": 31},
    "wells": {"fy26_exploratory": 22, "fy26_development": 52, "fy27_target_exploratory": 42, "fy27_target_development": 57, "workovers_fy26": 307},
    "capex": {"sa_fy26": 13025, "sa_fy27_be": 8600, "sa_q1fy27": 3050, "nrl_fy26": 8317, "nrl_fy27_target": 7500},
    "nrl": {"stake_pct": 69.63, "rev_fy26": 26658, "pat_fy26": 3065, "grm_fy26_usd": 13.43, "grm_q1fy27_usd": 35.95, "pat_q1fy27": 1305, "ebitda_q1fy27": 1843, "debt": 19000, "nrep_spent": 30000, "nrep_cost": 34500},
    "shareholding_sep26_pct": {"promoter": 56.66, "govt_psu_crossholding": 9.87, "fii": 7.15, "dii": 20.66, "public": 5.67}
  }
]
```

## 2.4 Conflicts and gaps (company level)
- **ONGC crude volume scope:** primer 18.36 MMT vs AR26 19.33 MMT operated (incl. condensate) vs 20.501 incl. JV. State the scope (trap 5).
- **ONGC consolidated revenue:** ₹6.62 lakh Cr (company, gross) vs ₹6.09 lakh Cr (screener, net). Use screener in tables and quote the company figure only with "gross of excise".
- **ONGC Q1 FY27 consolidated PAT:** ₹6,554 Cr (pre-minority, screener) vs ₹11,899 Cr (attributable, press). Both are right; label the basis.
- **ONGC net debt:** company-basis cash not obtained. Screener investments are mostly strategic stakes. Do not print "net debt ₹73k Cr" without caveats.
- **OIL net debt:** screener basis ≈ ₹0.7k Cr vs company ~₹35k Cr (2.6× EBITDA). **Use the company figure.**
- **OIL EBITDA:** company ₹13,498 / ₹8,753 Cr vs screener OP ₹10,446 / ₹6,060 Cr (other income included by the company).
- **OIL m-cap history:** primer "~₹67,000 Cr (Jun-26)" vs company "₹82K Cr (20-May-26)" vs screener ₹74,467 Cr (22-Oct). The primer's June figure implies ~₹412/share — plausible after a sell-off, but unverified.
- **OIL "8.7 MMTOE FY26"** (strategy slide) vs 6.64 MMTOE (production slide). Unreconciled.
- **Gas price for FY26 (OIL primer $7) vs PPAC ($6.75)** — PPAC is authoritative.
- **Q2 FY27 board dates** — none announced for either as of 22-Oct-2026.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (both members; ₹ Cr; screener 22-Oct-26 unless noted)

| Company | Basis | FY26 rev | YoY % | OP | OPM % | PAT (pre-min.) | PAT attrib. | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT (pre-min.) | Q1 PAT attrib. | M-cap | % of pair m-cap | P/E | Crude real. Q1 FY27 | Volume (FY26) | Native KPI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ONGC | Consolidated | 6,08,663 | −0.6 | 1,03,120 | 16.9 | 49,793 | 41,424 | 2,04,987 | +25.7 | 7.6 | 6,554 | ~11,899 | 2,83,395 | 79.2 | 6.48 | $99.45 | 50.14 MMTOE group | RRR 1.17; NWG 19% vol |
| ONGC | Standalone | 1,32,506 | −1.0 | 61,722 | 46.6 | 32,894 | 32,894 | 46,460 | +45.2 | 61.0 | 17,034 | 17,034 | — | — | 6.76 | $99.45 | 38.87 MMTOE ex-JV | APM cap $7.00 |
| OIL | Consolidated | 33,081 | +4.3 | 10,446 | 31.6 | 7,551 | ~6,620 | 12,503 | +57.7 | 46.3 | 4,027 | ~3,631 | 74,467 | 20.8 | 8.91 | $98.73 | 6.64 MMTOE | RRR 1.02; NRL GRM $35.95 (Q1) |
| OIL | Standalone | 20,480 | −0.2 | 6,060 | 29.6 | 4,455 | 4,455 | 7,958 | +58.8 | 51.3 | 2,870 | 2,870 | — | — | 11.4 | $98.73 | 3.45 MMT + 3.19 BCM | 10,921–11,017 t/d crude |
| **Pair (consolidated)** | | **6,41,744** | **−0.3** | **1,13,566** | **17.7** | **57,344** | **~48,044** | **2,17,490** | **+27.2** | **9.8** | **10,581** | **~15,530** | **3,57,862** | 100 | **7.45× on attrib. FY26; 6.24× on pre-min.** | | 56.78 MMTOE | |
| **Pair (standalone E&P)** | | **1,52,986** | **−0.9** | **67,782** | **44.3** | **37,349** | 37,349 | **54,418** | **+47.0** | **59.6** | **19,904** | 19,904 | | | **9.6× on FY26 SA PAT** | | 45.51 MMTOE (domestic ex-JV + OIL) | |

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one stated basis**:
- (i) screener **consolidated** FY26/FY25 and Q1 FY27/Q1 FY26 (pre-minority PAT), with attributable PAT shown alongside from company/EPS-derived figures;
- (ii) screener **standalone** for the "pure E&P" subgroup.
- M-cap is 22-Oct-26. Ratios are ratios of the sums.

**(a) FY26 vs FY25 [E: sums of V]**

| Group | FY26 rev | FY25 rev | YoY | OP FY26 | OP FY25 | OPM FY26 / FY25 | PAT FY26 | PAT FY25 | YoY | M-cap | M-cap ÷ PAT |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Both, consolidated (pre-minority) | 6,41,744 | 6,43,767 | −0.3% | 1,13,566 | 1,00,015 | 17.7% / 15.5% | 57,344 | 45,369 | +26.4% | 3,57,862 | 6.24× |
| Both, consolidated (attributable) | — | — | — | — | — | — | ~48,044 | ~42,776 | +12.3% | 3,57,862 | 7.45× |
| **Both, standalone E&P** | 1,52,986 | 1,54,390 | −0.9% | 67,782 | 74,003 | 44.3% / 47.9% | 37,349 | 41,724 | −10.5% | 3,57,862 | 9.58× (overstates: m-cap includes subsidiaries) |
| ONGC consolidated less ONGC standalone ("ONGC subsidiaries + JV, pre-elims") [E] | 4,76,157 | 4,78,201 | −0.4% | 41,398 | 23,620 | 8.7% / 4.9% | 16,899 | 2,719 | 6.2× | — | — |
| OIL consolidated less standalone ("NRL + others") [E] | 12,601 | 11,176 | +12.8% | 4,386 | 2,392 | 34.8% / 21.4% | 3,096 | 926 | 3.3× | — | — |

- ONGC is **95% of pair consolidated revenue, 91% of OP, 87% of PAT and 79% of m-cap**.
- On standalone E&P, ONGC is 87% of revenue and 88% of PAT [E].
- **The subsidiary layers did all the FY26 growth:** standalone E&P PAT −10.5% vs consolidated +26%.

**(b) Q1 FY27 vs Q1 FY26 (quarterly) [E: sums of V]**

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | OPM Q1 FY27 / Q1 FY26 | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|
| Both, consolidated (pre-minority) | 2,17,490 | 1,71,035 | +27.2% | 21,278 | 28,121 | −24.3% | 9.8% / 16.4% | 10,581 | 13,601 | −22.2% |
| Both, consolidated (attributable) | — | — | — | — | — | — | — | ~15,530 | ~11,697 | +32.8% |
| **Both, standalone E&P** | 54,418 | 37,015 | +47.0% | 32,439 | 18,791 | +72.6% | 59.6% / 50.8% | 19,904 | 8,837 | **+125%** |
| Subsidiary layers (cons − SA) [E] | 1,63,072 | 1,34,020 | +21.7% | −11,161 | 9,330 | n.m. | n.m. | −9,323 | 4,764 | n.m. |

**Read:**
- In Q1 FY27 the E&P layer earned ₹19,904 Cr (more than double), and the refining/marketing layer lost ~₹9,300 Cr pre-minority (HPCL −₹12,265 Cr partly offset by MRPL, NRL and OVL).
- **A single "sector" PAT line is meaningless — always show both layers.**

**(c) Balance sheet (Mar-26) [V/E]**
- Screener consolidated borrowings: ONGC ₹1,74,316 + OIL ₹37,478 = **₹2,11,794 Cr**. Investments ₹1,01,084 + ₹36,782 = ₹1,37,866 Cr. Screener "net debt" ₹73,928 Cr — **misleading** (strategic stakes).
- Company-basis: OIL group gross debt ₹37,233 Cr [V call]; net ~₹35,100 Cr (2.6×) [V/E]. ONGC standalone loan funds ₹7,823 Cr (D/E 0.02) [V PPAC/AR26]. ONGC consolidated net debt is mostly HPCL (₹72,597 Cr borrowings at Jun-26 [V PPAC]) + MRPL (₹14,334 Cr) + OPaL + OVL [E].
- Pair consolidated borrowings ÷ pair OP = **1.9×** gross [E].

**(d) Ownership (Sep-26, simple averages) [E]**
- Promoter (GoI) 57.8% average (58.89 / 56.66). PSU cross-holdings 10.1%.
- FII 7.85% (8.55 / 7.15). DII 19.66% (18.66 / 20.66). Public 4.6%.

**(e) Dividends and payout [V/E]**
- FY26 dividends: ONGC ₹16,669 Cr + OIL ₹1,871 Cr = **₹18,540 Cr** → pair yield on today's m-cap **5.18%**.
- GoI direct share ≈ ₹10,876 Cr.
- Payout vs standalone PAT: ONGC 50.7%, OIL 42.0% → **pair 49.6%**.

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (22-Oct-26) | Use |
|---|---|---|---|---|
| ONGC | FY26 consolidated revenue | ₹6.62 lakh Cr | ₹6,08,663 Cr (screener, net); ₹6,62,247 Cr (company, gross) | Screener in tables; label |
| ONGC | FY26 consolidated PAT | ₹49,793 Cr (+30%) | Same (pre-minority); **attributable ₹41,424 Cr (+14%)** | Show both |
| ONGC | FY26 standalone PAT | ₹32,894 Cr (−7.6%) | Same | — |
| ONGC | Standalone FY25 PAT | "~35,600" | 35,610 | Same |
| ONGC | Consolidated FY25 PAT | "~38,300" | 38,329 | Same |
| ONGC | M-cap | ~₹2.94 lakh Cr (Jun-26) | **₹2,83,395 Cr** (−3.6%) | Screener |
| ONGC | P/E | ~6–8× | 6.48 (cons. attrib.) / 6.76 (SA) | Screener |
| ONGC | Yield | ~5–7% | 5.89% | Screener |
| ONGC | GoI stake | ~58.9% | 58.89% (+10.30% PSU cross-holdings) | Same; add the cross-holdings |
| ONGC | Crude output FY26 | 18.36 MMT | 19.33 operated (incl. condensate) / 20.501 incl. JV | State scope |
| ONGC | Gas FY26 | 19.53 BCM | 19.53 ONGC; 19.966 incl. JV | Same |
| ONGC | KG-98/2 | oil ~28k bpd; gas → ~10 MMSCMD by mid-2026 | oil ~21k bpd; gas 1.5–1.7 now → 3+ by Q4 FY27 → 6–7 by Q4 FY28 | Web (call) |
| ONGC | Offshore projects | ₹33,075 Cr under development | Western Offshore projects >₹40,000 Cr | Web |
| ONGC | OVL | "~15 countries" | 29 projects, 14 countries; 9.67 MMTOE | AR26 |
| ONGC | HPCL outlets | ~22,000+ | 25,098 (Mar-26) | AR26 |
| ONGC | APM | ceiling $6.75 from Apr-25; ~$6.4 realised Q4 | Correct for FY26; **$7.00 from Apr-26**; formula $10.8–11.6 in Apr–Jun 26 | PPAC |
| ONGC | NWG | ~$7.7 | $13.31 (Q1 FY27) | Web |
| ONGC | Windfall | imposed 2022, scrapped later | Nil from 18-Sep-24; scrapped 2-Dec-24; not reimposed in 2026 | PPAC |
| ONGC | Q1 FY27 | not covered | SA PAT ₹17,034 Cr; HPCL −₹12,265 Cr; attributable ₹11,899 Cr | Web |
| ONGC | Reserves | not quantified | 1P 793.31 MMTOE; RRR 1.17 | AR26 |
| OIL | FY26 consolidated PAT | ₹7,551 Cr (+7%) | Same (pre-minority); attributable ~₹6,620 Cr | Show both |
| OIL | FY26 consolidated "revenue" | ~₹38,981 Cr | That is total income; screener sales ₹33,081 Cr | Screener in tables |
| OIL | FY26 EBITDA | ~₹13,498 Cr consolidated / ~₹8,753 Cr standalone | Company basis; screener OP 10,446 / 6,060 | Label |
| OIL | M-cap | ~₹67,000 Cr (Jun-26) | **₹74,467 Cr** | Screener |
| OIL | P/E / P/B / yield | ~10× / ~1.2× / ~2.7% | 8.91× / 1.28× / 2.52% | Screener |
| OIL | GoI stake | 56.66% | 56.66% (+9.87% OMC cross-holdings) | Same |
| OIL | APM gas | "$7 for FY26" | **$6.75 FY26; $7.00 FY27** | PPAC |
| OIL | HP-HT ceiling | ~$8.90 (Apr–Sep 26) | Correct; **now $9.89 (Oct-26–Mar-27)** | PPAC |
| OIL | Production | ~3.4 MMT / ~3 BCM / 6.64 MMTOE | 3.45 / 3.19 / 6.64 | Presentation |
| OIL | NRL pipeline | ~1,640 km | 1,626 km | Presentation |
| OIL | NREP cost | ~₹34,000 Cr | ₹34–35k Cr + PP ₹7.2–7.3k Cr; ~₹30k Cr spent; NRL debt ~₹19k Cr | Call |
| OIL | Q1 FY27 | not covered | SA PAT ₹2,870 Cr; crude $98.73; NRL GRM $35.95; consolidated PAT ₹4,027 Cr | Web |
| OIL | Gas growth | 10–12 MMTOE by FY30 | Gas 3.8 BCM FY28 → 5 BCM FY29 (pipeline-led) | Call |

## 3.4 Primer issues (format as primer-issues.md)

### From Oil & Gas E&P research (2026-10-22, oil-exploration-industry.md §3.4)

- **ongc.html — attributable PAT missing / basis:** the stat strip's "₹49,793 Cr Net profit (FY26, cons. +30%)" is pre-minority. **Attributable to owners is ₹41,424 Cr (+14%)** [ONGC AR26 MD&A]. Add it, and say that P/E uses attributable.
- **ongc.html — consolidated revenue basis:** "₹6.62 lakh Cr" is gross of excise (company "revenue from operations"). Screener/net is ₹6.09 lakh Cr. Label it.
- **ongc.html — crude volume scope:** "FY26 standalone output 18.36 MMT crude". The Annual Report shows ONGC-operated crude 19.33 MMT (incl. condensate) and **20.501 MMT incl. JV share**. Group incl. OVL is 27.41 MMT crude + 22.72 BCM gas = 50.14 MMTOE. State the scope.
- **ongc.html — KG-98/2 gas stale/over-optimistic:** "gas ramping from ~3 toward ~10 MMSCMD by mid-2026". Per the Q1 FY27 call, KG-98/2 gas is **1.5–1.7 MMSCMD**, targeted at 3+ by Q4 FY27 and 6–7 by Q4 FY28. Oil is **~21,000 bpd** (not 28,000), due to reservoir connectivity issues.
- **ongc.html — Q1 FY27 omitted (refreshed 30-Jun):**
  - Standalone PAT ₹17,034 Cr (+112%, record PBT ₹22,848 Cr) at $99.45/bbl.
  - HPCL Q1 loss ₹12,265 Cr → consolidated ₹6,554 Cr pre-minority / ₹11,899 Cr attributable.
  - NWG $13.31 and 38% of nomination gas revenue.
  - OPaL EBITDA −₹57 Cr.
  - OVL ~₹1,000 Cr/qtr after **Sakhalin-1 was regained (Dec-2025)**.
  - Mozambique force majeure lifted.
  - Venezuela OFAC licence.
- **ongc.html — windfall section needs dates and the 2026 nuance:** SAED was nil from 18-Sep-2024 and formally scrapped 2-Dec-2024. **In 2026 the government taxed fuel *exports* (from 27-Mar-2026) and cut excise, but did not reimpose SAED on crude.** "Raised roughly ₹25,000 Cr in year one" is unverified.
- **ongc.html — subsidy history:** "pre-2014-ish" / "diesel freed in 2014 largely ended this mechanism". Upstream discounts continued in diminishing form until FY2015-16 and ended from FY2016-17 [K — verify]. Add the 2026 OMC under-recovery context (HPCL loss, OMC debt +₹70k Cr in Q1).
- **ongc.html — gas-price section incomplete:** add the **$7.00 FY27 ceiling**, the monthly 2026 formula prices ($10.76–11.59 Apr–Jun; $11.22 Oct) and HP-HT ceilings ($8.90 → $9.89). "Free-market LNG often $10+" understates 2026 (IGX spot **$28.4/mmBtu** in Sep-2026).
- **ongc.html — stale counts:** HPCL "~22,000+" outlets → 25,098 (Mar-26). OVL "~15 countries" → 29 projects in 14 countries. "₹33,075 Cr offshore projects" → Western Offshore projects >₹40,000 Cr (Q1 FY27 call).
- **ongc.html — reserves/RRR absent:** add group 1P 793.31 MMTOE (ONGC 517.88, JV 10.16, OVL 265.27), 2P accretion 44.01 MMTOE, RRR 1.17, exploration success 53.4%, and the 3 FY26 discoveries.
- **ongc.html — new items to add:**
  - Samudra Manthan (₹84,084 Cr); first deepwater Mahanadi well (spud ~25-Jul-2026); **gas strike MN-DW18-1-H-D (18-Sep-2026)**.
  - bp TSP Phase-1 NOA 26-Dec-2025 (+2.699 MMT oil, +2.806 BCM gas by 2040), extended to all of Western Offshore.
  - PMT arbitration contingent liability ₹15,216 Cr (ONGC not party against GoI).
  - Capex guidance $3.5–4bn/yr.
- **ongc.html — MRPL stake label:** "~88.6% subsidiary" is the group holding (71.63% direct + ~16.96% via HPCL [K]). Say so, or the HPCL minority leak is invisible.
- **ongc.html — chart label:** the realisation chart mixes "Q1 FY25 ~$83" with Q2/Q3 FY26 prints. Verify or relabel; Q1 FY26 was $66.13 [V-snip].
- **ongc.html — valuation stale:** m-cap ~₹2.94 lakh Cr → **₹2.83 lakh Cr**; P/E "~6–8×" → **6.48×**; yield "~5–7%" → **5.89%**; P/B ~0.76× (consolidated).
- **oil-india.html — APM price error:** "For FY26, that APM price was raised to $7/mmBtu, with a floor of $4 and a ceiling of $7". **Wrong: the FY26 ceiling was $6.75; $7.00 applies from 1-Apr-2026 (FY27)** [PPAC]. The FY26 formula price was *below* the ceiling in Jun-25 and Nov-25–Feb-26. Also update the HP-HT ceiling: $8.90 (Apr–Sep 26) → **$9.89 (Oct-26–Mar-27)**.
- **oil-india.html — "Revenue / total income ~₹38,981 Cr":** that is consolidated *total income*. Screener sales are ₹33,081 Cr (standalone ₹20,480 Cr vs "~₹24,039 Cr"). Label the basis. EBITDA ₹13,498 / ₹8,753 Cr is the company basis (screener OP ₹10,446 / ₹6,060 Cr).
- **oil-india.html — attributable PAT:** ₹7,551 Cr includes NRL's 30.37% minorities. Attributable is ≈ ₹6,620 Cr (EPS ₹40.70). P/E "~10×" is on attributable EPS.
- **oil-india.html — Q1 FY27 omitted (refreshed 3-Jul):**
  - Crude $98.73/bbl; standalone PAT ₹2,870 Cr (record); consolidated PAT ₹4,027 Cr.
  - NRL GRM **$35.95** (PAT ₹1,305 Cr).
  - Record 10,921 → 11,017 t/d crude; FY27 crude ≥3.9 MMT; gas 3.8 BCM FY28 → 5 BCM FY29.
  - 100-well FY27 programme; Andaman Vijayapuram results; Samudra Manthan; TotalEnergies/Petrobras technical partnerships.
  - GST-on-royalty settlement (~₹2,500 Cr, provided).
- **oil-india.html — rivals table contradiction:** "ONGC lacks Oil India's refinery-in-hand hedge (it owns HPCL/MRPL separately)". ONGC *consolidates* HPCL (54.9%) and MRPL. The difference is that OIL's refinery has **no retail arm** (so it gains in a price spike), while HPCL bleeds. Fix the wording, and §05's "ONGC largely lacks".
- **oil-india.html — valuation stale:** m-cap ~₹67,000 Cr (Jun) → **₹74,467 Cr**; P/E ~10× → **8.91×**; P/B ~1.2× → 1.28×; yield ~2.7% → **2.52%**. (The company's own presentation cites ₹82K Cr at 20-May-2026; recheck the June figure.)
- **oil-india.html — NREP/pipeline details:**
  - Paradip–Numaligarh pipeline is 1,626 km (not ~1,640).
  - Add the **360 ktpa polypropylene unit (₹7.2–7.3k Cr)**, ~₹30k Cr spent, NRL debt ~₹19k Cr, and the phased commissioning (CDU/VDU + DHDT + SRU Oct–Nov 2026; balance by Mar-2027; ~75% utilisation by Q4 FY28).
  - PPAC's Ready Reckoner gives "completion by Dec-2026".
- **oil-india.html — ownership detail:** "Public & institutions ~43%" includes **IOCL 4.93%, BPCL 2.47%, HPCL 2.47%** (state cross-holdings) and LIC 6.86%. Effective state control is ~66.5%.
- **oil-india.html — "8.7 MMTOE in FY26":** the company's strategy slide figure is not reconciled with 6.64 MMTOE. Don't use it; note it.
- **oil-india.html — net zero target:** add **net zero (Scope 1+2) 2040**, zero routine flaring by 2027, zero methane by 2030 (with TotalEnergies).
- **General (both):**
  - Neither primer covers the **2026 West Asia shock** (basket $113–116; LPG −15%; export SAED; excise cut; OMC losses).
  - Neither covers the **Oilfields (R&D) Amendment Act 2025 / PNG Rules 2025** or **Samudra Manthan (₹84,084 Cr)**.
  - The import-dependence figures should be updated to **88.7% (FY26)**.
  - Market caps are 4 months stale.

## 3.5 Key source URLs
- **Screener (22-Oct-2026):** https://www.screener.in/company/ONGC/consolidated/ · https://www.screener.in/company/ONGC/ · https://www.screener.in/company/OIL/consolidated/ · https://www.screener.in/company/OIL/ · https://www.screener.in/company/HINDPETRO/consolidated/ · https://www.screener.in/company/MRPL/consolidated/
- **ONGC Q1 FY27 transcript:** https://ongcindia.com/documents/77751/2660534/Transcription-Q1-FY2627.pdf
- **ONGC Integrated Annual Report 2025-26 (BSE):** https://www.bseindia.com/xml-data/corpfiling/AttachHis/a521f688-6bf3-465c-8f05-b20ed08b2f32.pdf
- **Oil India Q1 FY27 transcript (BSE):** https://www.bseindia.com/xml-data/corpfiling/AttachLive/446efde6-34f5-4d65-b403-85acfbd635fa.pdf
- **Oil India Investors' Meet presentation FY2025-26 (BSE, 25-May-2026):** https://www.bseindia.com/xml-data/corpfiling/AttachHis/653d5f5c-6d22-4e92-9000-d3a4f470f2c9.pdf
- **PPAC:**
  - Snapshot Oct-2026: https://ppac.gov.in/download.php?file=rep_studies/1792155544_Snapshot_of_India_Oil_and_Gas_Sept_2026_V3.pdf
  - Ready Reckoner FY2025-26: https://ppac.gov.in/download.php?file=rep_studies/1784899305_The_PPAC_Ready_Reckoner_FY_2025–26_Final.pdf
  - Gas price page: https://ppac.gov.in/natural-gas/gas-price (monthly notifications Mar–Oct 2026; ceiling notices Apr–Sep 2026 and Oct-2026–Mar-2027)
  - SAED/export levy table: https://ppac.gov.in/prices/excise-duty-on-export-of-petrol-diesel-atf-and-special-additional-excise-duty-saed-on-domestic-crude-oil-production
  - Flash report Sep-26: https://ppac.gov.in/download.php?file=menu/1790857950_WEB_UPLOAD_Sep26_Flash_Report.pdf
- **Export levy news:** https://www.businesstoday.in/india/story/petrol-export-duty-hiked-5x-diesel-export-levy-slashed-from-today-561962-2026-10-16
- **Q1 FY27 ONGC summaries [V-snip]:** https://www.venturasecurities.com/news/stocks/ongc-q1fy27-results-profit-jumps-112-yoy-to-17034-crore-as-crude-realisations-surge-ebitda-margin-expands-to-61/ · https://www.angelone.in/news/stocks/ongc-q1fy27-earnings-results-net-profit-grows-by-112-to-17-034-crore · https://askfuzz.ai/discover/news/companies/ongc-q1-fy27-net-profit-jumps-21-37-to-11-899-crore
- **Q2 timing [V-snip]:** https://univest.in/blogs/ongc-q2-results-fy27-preview-date-expectations · https://univest.in/blogs/oil-india-q2-results-fy27-preview-date-expectations
- **Global P/E (Oct-2026):** https://companiesmarketcap.com/exxon-mobil/pe-ratio/ · /petrobras/pe-ratio/ · /cnooc/pe-ratio/ · /equinor/pe-ratio/ · /saudi-aramco/pe-ratio/
- **Brent Oct-2026 [V-snip]:** https://gulfnews.com/business/energy/brent-crude-oil-surges-past-102-amid-hormuz-tensions-us-iran-conflict-1.500695537

---

# PART 4 — Deep-research supplement (22-Oct-2026)

Second, primary-source pass on Parts 1–3. Done on 22-Oct-2026 (~62 web calls). No logins, no paid sources.

**What was read this session (all tagged [V] below means fetched and read here):**
- **ONGC Integrated Annual Report 2025-26** (BSE AttachHis a521f688…, 697 pp). Read: the 10-year "Standalone Performance at a Glance" and "Contribution to Exchequer" tables, the Board's Report (reserves, capex, drilling), MD&A, investments note, related-party note 45, contingent-liabilities note 49 and the top-10 shareholders.
- **ONGC earnings-call transcripts** (ongcindia.com): Q1 FY27 (5-Aug-2026), Q4 FY26 (27-May-2026), Q3 FY26 (Feb-2026), Q2 FY26 (11-Nov-2025), Q1 FY26 (Aug-2025), Q4 FY25 (22-May-2025) and Q2 FY25.
- **ONGC Annual Report 2014-15** (BSE bseplus 5003120315) for the subsidy-sharing years. ONGC BSE filings of 8-Oct-2026 (OPML) and 9-Oct-2026 (CARE rating).
- **Oil India Integrated Annual Report 2025-26** (BSE AttachHis 8ca090c8…, 573 pp). Read: reserves tables, production section, five-year table, exchequer table, standalone P&L, note 40, balance sheets, related-party note 45.3 and the shareholding.
- **Oil India Annual Report 2023-24** (BSE 87592a13…) for SAED paid in FY23–FY24.
- **Oil India call transcripts** (BSE): Q1 FY27 (10-Aug-2026), Q4 FY26 (May-2026), Q3 FY26 (11-Feb-2026), Q2 FY26 (17-Nov-2025). Also the Investors' Meet FY26 deck (25-May-2026).
- **CRISIL rating rationale on Oil India** (9-Oct-2026).
- **ICRA "Indian Upstream Oil & Gas"** (Mar-2026).
- **PPAC:**
  - the international-price data service (Indian basket monthly FY26 and FY27-to-date, pulled 22-Oct-2026);
  - the legacy under-recovery and subsidy tables 2002-03 to 2009-10 (embedded in the same PPAC workbook);
  - the PPAC Ready Reckoner FY2025-26 (tables 2.5B, 2.8, 3.10, 8.23, 8.24).
- **EIA Brent spot monthly series** (RBRTEm.xls).
- **Screener.in** consolidated and standalone pages for ONGC and OIL, re-pulled 22-Oct-2026.

**Tags in Part 4:**
- **[V]** = fetched and read this session from the named primary source.
- **[V-arith]** = arithmetic on [V] inputs only.
- **[V-snip]** = secondary or search-snippet only.
- **[E]** = estimate.
- **[V-P1]** = verified in Parts 1–3 and not re-fetched here.

Scratch notes are in /tmp/oil-exploration-deep/ (00-plan.md, 01-ongc-ar26.md, 02-screener-22oct.txt, 03-calls.md, 04-oil-ar26.md, 05-industry.md).

## 4.0 Supersedes (corrections the writer must apply to Parts 1–3)

| # | Where in Parts 1–3 | Old value | New value | Source |
|---|---|---|---|---|
| 1 | §C.5, §2.0 ("FY26 ~$63–67") | ONGC FY26 implied crude realisation **~$63/bbl** (crude revenue ÷ *production* 20.5 MMT) | **~$68.9/bbl** — divide by crude *sold*: ₹83,810 Cr ÷ 18.79 MMT = ₹44,604/t = ₹6,085/bbl ÷ ₹88.31. FY25 on the same method: **$77.2** (₹89,535 Cr ÷ 18.71 MMT ÷ ₹84.57). | [V-arith on V ONGC AR26 10-yr table] |
| 2 | §0, E.4 (basket "Jul n/a") | Indian basket Jul-2026 not obtained | **Jul-2026 $82.04**. **Oct-2026 month-to-date (to 21-Oct) $120.09**; spot **$116.73 on 21-Oct-2026**. October's basket is unusually sour-heavy (sweet:sour 65:35 vs ~78:22 in Jul–Sep). | [V PPAC price service, posted 22-Oct-2026] |
| 3 | Header "Brent ~$102–107 in early/mid Oct-2026" [V-snip Gulf News] | ~$102–107 | **Conflict.** PPAC's basket averaged $120 month-to-date in October, so Brent was probably well above $102–107 for much of the month. PPAC is the more credible source (official, daily-averaged). Say "the basket averaged ~$120 in Oct-2026 to date". | [V PPAC] |
| 4 | §0 "Read-across for Q2 FY27" | Q2 FY27 average **~$95–97** | Indian basket Q2 average **$96.11** [V-arith PPAC]; EIA Brent Q2 average **$96.33** [V-arith EIA]. ONGC and OIL have realised **$1–4 *below* EIA dated Brent** in every quarter with a printed number (table in 4.2.1c). So expect **~$93–95/bbl realised in Q2 FY27** [E]. That is ~$5 below Q1's $99.45/$98.73, not "slightly below". | [V/E] |
| 5 | Header table (ONGC Q2 FY26 call "~18-Nov-2025" from filename) | ~18-Nov-2025 | **Board 10-Nov-2025; call 11-Nov-2025.** OIL's Q2 FY26 call was 17-Nov-2025. Last year's Q2 cadence was therefore ~6 weeks after quarter-end, not at the 45-day deadline. | [V ONGC and OIL transcripts] |
| 6 | §2.3 "overseas production 19.2 MMTOE FY26 (20.2 FY25)" | FY25 20.2 | **FY25 18.1 MMTOE.** Series FY21–FY26: 21.9 / 21.8 / 19.5 / 19.9 / 18.1 / 19.2. | [V PPAC RR FY26 Table 2.8] |
| 7 | §5.2, §H-8, primer issue (MRPL) | "71.63% direct + 16.96% via HPCL = **88.58% group**" | **Legal holding:** 71.63% direct + ~16.96% via HPCL. **Economic (effective) group interest is 80.94%**: the consolidated statements show MRPL at 80.94% with **NCI 19.06%**, because HPCL's 16.96% is itself only 54.90% ONGC-owned (71.63 + 0.549 × 16.96 = 80.94). Use 80.94% for look-through value. | [V ONGC AR26 consolidated-entity table; E for 16.96% back-solve] |
| 8 | §5.2 "IOC ~7.8% / GAIL ~2.5% hold ONGC" [K] | ~7.8% / ~2.5% | **IOC 7.84%, GAIL 2.45%** (31-Mar-2026). Also LIC 10.18%, CPSE ETF 1.25%. | [V ONGC AR26 top-10 shareholders] |
| 9 | §5.2 "ONGC holds IOC ~14.2%, GAIL ~5.0%" [K] | [K] | ONGC holds **2,005.82 mn IOC shares** (fair value ₹27,159 Cr at Mar-26) ≈ **14.2%**, and **326.72 mn GAIL shares** (₹4,499 Cr) ≈ **4.97%**. Petronet LNG **12.50%** (associate). Via HPCL the group also holds **40.13 mn OIL shares = 2.47% of OIL** (₹1,908 Cr). | [V AR26 notes 11/14; E for % using ~1,412 Cr IOC and ~657.5 Cr GAIL shares outstanding] |
| 10 | §7.5, story bullets (PMT contingent liability) | ₹15,216 Cr | **₹15,225 Cr** at 31-Mar-2026: ONGC's 40% share of the DGH demand, **US$1,624.05 m** incl. interest to Nov-2016. The ₹15,216 Cr in the call is the same exposure at a different exchange rate. | [V AR26 note 49] |
| 11 | §7.5, OIL story (GST on royalty "~₹2,500 Cr principal; court gave 6 weeks") | ~₹2,500 Cr, pending | **~₹3,304 Cr paid in Aug and Sep 2026, under protest**. It was funded by internal accruals plus incremental borrowings and had been substantially provided for already; the Supreme Court outcome is still pending. FY26 P&L provision for GST on royalty was ₹865 Cr (FY25 ₹809 Cr). | [V CRISIL 9-Oct-2026; V OIL AR26 note 40] |
| 12 | §B3, NREP cost "₹34–35k Cr" | ₹34–35k Cr + PP ₹7.2–7.3k Cr | **Refinery ₹33,901 Cr** (revised from ~₹28,000 Cr) + **PP ₹7,231 Cr** = **₹41,132 Cr** integrated complex. | [V CRISIL 9-Oct-2026] |
| 13 | §7.4 (subsidy amounts all [K]) | "Upstream ~₹60–67k Cr/yr FY12–FY14; ONGC ~₹49–56k Cr" | **FY14: ONGC ₹56,384 Cr; upstream ₹67,021 Cr = 47.9% of total under-recovery ₹1,39,870 Cr. FY15: ONGC ₹36,300 Cr (nil in Q4 FY15); upstream ₹42,823 Cr = 59.2% of ₹72,314 Cr.** ONGC's gross crude price was $106.72 (FY14) and $85.28 (FY15); it gave a discount of $65.75 and $40.40/bbl; **net realisation $40.97 / $44.87**. PBT impact ₹47,756 Cr (FY14) and ₹30,960 Cr (FY15). | [V ONGC AR 2014-15 MD&A and note 26.1] |
| 14 | primer ongc.html; §H-6 "SAED ~₹25,000 Cr in year one" | attributed to ONGC | **Company-paid SAED (standalone):** ONGC **₹10,964 Cr (FY23), ₹8,634 Cr (FY24), ₹3,948 Cr (FY25), nil (FY26)**; OIL **₹1,887 Cr, ₹1,405 Cr, ₹780 Cr, nil**. **Pair total ₹27,618 Cr over FY23–FY25.** The ~₹25,000 Cr is a government-wide FY23 crude-SAED figure [V-snip], not ONGC's. | [V ONGC AR26 exchequer table; V OIL AR24 note 57.16, AR26 note 57.10] |
| 15 | §9.1, §F "Reserve life ~13–14 yrs (1P)"; "2P stock not given" | 2P not given | **ONGC 2P on 1-Apr-2026 = 709.32 MMTOE** (operated 697.83 + JV share 11.49; PRMS) [V AR26]. **2P R/P ≈ 17.6 years** on 40.3 MMTOE domestic incl. JV production [E]. 1P R/P ≈ 13.1 years (528.04 ÷ 40.3) [E]. | [V AR26 Board's Report §4] |
| 16 | §9.1 "OIL 1P not disclosed (2P only)" | n.d. | **OIL 1P: domestic 107.73 + overseas 20.38 = 128.11 MMTOE.** 2P: domestic **190.09** + overseas **40.57** = **230.67**. 3P: 243.05 + 56.16. Domestic 2P = 68.68 MMT oil + 139.68 BCM gas (balance recoverable; 50.58 BCM on a sales-contract basis). FY26 2P accretion **6.232 MMTOE**. | [V OIL AR26 Board's Report] |
| 17 | §1.3, §9.1, §F (opex/boe "not disclosed — FLAG") | not disclosed | Neither company publishes $/boe lifting cost. **Proxies [E from V]:** **ONGC** "operating expenses" ₹28,209 Cr ÷ (38.87 MMTOE × 7.33) = **₹990/boe ≈ $11.2/boe (FY26)**; FY25 ≈ $11.3. This excludes statutory levies, write-offs and DD&A, and includes VAP processing and transport. **OIL** cash opex (employees + stores + fuel + contract + insurance + misc) ₹5,432 Cr ÷ 48.7 mboe ≈ **₹1,116/boe ≈ $12.6/boe (FY26)**. Contract cost rose 41% YoY (₹2,798 vs ₹1,980 Cr). | [E on V AR26] |
| 18 | §H-11, trap 5 ("8.7 MMTOE unreconciled") | unreconciled | **Partly reconciled.** OIL's FY26 share of overseas production = Vankor 0.945 MMTOE + Taas 0.464 MMT + Carabobo 0.014 MMT ≈ **1.42 MMTOE**. 6.64 + 1.42 = **~8.06 MMTOE**. The remaining ~0.6 MMTOE is not explained in the AR; it may be gas-equivalence or rounding on the slide. **Use 6.64 domestic / ~8.1 incl. overseas.** | [V OIL AR26 + presentation slide 'OIL's near-term strategy'] |
| 19 | trap 5, primer issue ("primer's 18.36 MMT crude appears to exclude condensate — FLAG") | primer possibly wrong | **The primer is right on its own scope.** ONGC standalone crude **excluding condensate** was **18.355 MMT FY26** (18.558 FY25). 19.33 MMT is operated crude *incl.* condensate; 20.50 includes the JV share. Keep the primer number but label it "crude excl. condensate". | [V ONGC Q4 FY26 transcript] |
| 20 | §H-2, E.7 (ONGC realisation series) | Q1 FY25 "~$83", Q2 FY26 "~67", Q3 FY26 "~61" unverified | **Q1 FY25 $83.05; Q2 FY25 $78.33; Q3 FY25 $72.57; Q1 FY26 $66.13; Q2 FY26 $67.34; Q3 FY26 $61.63; Q1 FY27 $99.45.** Q4 FY25 (~$74.9) and Q4 FY26 (~$80.5) are residual estimates. | [V ONGC transcripts; E residuals] |
| 21 | JSON (OIL) "gas_price_usd_mmbtu": {"q4fy26": 6.72} | Q4 FY26 | **$6.72 is Q1 FY26** (the year-ago comparator), not Q4 FY26. OIL gas: Q2 FY26 $6.78, Q3 FY26 $6.65, Q1 FY27 $7.19. | [V OIL Q1 FY27/Q3/Q2 transcripts] |
| 22 | §0 & §2.0 OIL net debt "~₹35,100 Cr (2.6×)"; standalone "~₹13,100 Cr (1.5×)" | ₹35.1k / ₹13.1k Cr | **Consolidated: borrowings ₹35,959 Cr − cash & bank ₹5,609 Cr = ~₹30,350 Cr ≈ 2.25× company EBITDA** (the company's 2.6× probably includes lease liabilities). **Standalone: ₹13,278 Cr − ₹3,693 Cr cash/bank/current investments ≈ ₹9,585 Cr ≈ 1.1×.** | [V OIL AR26 balance sheets; V CRISIL cash ₹5,609 Cr; E] |
| 23 | §H-14, §3.2(c) "ONGC net debt not obtained" | n.a. | **ONGC standalone is net cash: cash & bank ₹28,660 Cr vs borrowings ₹7,823 Cr → net cash ~₹20,837 Cr** (Mar-26). Lease liabilities are **₹25,822 Cr** (mostly offshore vessels and rigs, Ind AS 116). Including leases → net debt ~₹4,985 Cr. Site Restoration Fund deposits ₹32,728 Cr are restricted and excluded. Consolidated net debt is essentially HPCL + MRPL + OPaL [E]. | [V ONGC AR26 10-yr table] |
| 24 | §4.2(a) ONGC "Opex ~₹36,000 Cr (27/100)" and "statutory levies ~₹26.5k Cr" | composites [E] | **Statutory levies ₹26,148 Cr = 19.7% of revenue** (royalty ₹12,965 Cr + OIDB cess ₹13,034 Cr + NCCD ₹86 Cr + other ₹63 Cr). **Operating expenses ₹28,209 Cr (21.3%)**; survey + dry-well write-offs ₹9,729 Cr (7.3%); provisions/write-offs ₹3,948 Cr; FX loss ₹2,699 Cr. The "~27" opex line should read ~21 opex + ~5 provisions/FX. | [V ONGC AR26] |
| 25 | §1.2 (ONGC exploration write-offs "₹8,236 Cr [primer]") | ₹8,236 Cr | AR26: survey ₹1,493 Cr + exploratory wells ₹8,236 Cr = **₹9,729 Cr** (FY25 ₹9,826 Cr). The primer's ₹8,236 Cr is dry wells only. | [V AR26] |
| 26 | §9.1 RRR history | FY26 1.17 only | **ONGC 2P RRR FY25 = 1.35** (domestic, ex-JV; ">1 for the 19th consecutive year"). FY26 1.17. | [V Q4 FY25 transcript] |
| 27 | §2.4 forecast ("national crude unlikely to grow") | qualitative | **ICRA (Mar-2026) expects India's FY27 crude at 28.0–28.5 MMT.** H1 FY27 is running −3.5% (13.7 MMT), so the full year is more likely ~27–27.5 MMT [E]. | [V ICRA; V-P1 PPAC] |
| 28 | Guidance history (not in Parts 1–3) | — | **ONGC's FY27 standalone guidance was cut from 21 MMT oil + 21.5 BCM gas (≈42.5 MMTOE; Q2 FY26 call, Nov-2025) to ~39 MMTOE (Q1 FY27 call)**. At the Q4 FY25 call (May-2025) the plan was gas ~21 BCM FY26 and ~22 BCM FY27; actual FY26 gas was 19.53 BCM. | [V transcripts] |
| 29 | §7.2 "HP-HT ceiling $8.90" | [V PPAC] | Confirmed in ONGC AR26 MD&A ("higher ceiling of USD 8.9/MMBtu for April–September 2026"). | [V AR26] |
| 30 | §10 global lens "CNOOC lifting ~$7/boe, all-in ~$28" [K] | [K] | **CNOOC 2025: opex $7.46/boe (2024 $7.61); all-in cost $27.90/boe (−2.2%).** Petrobras Brazil lifting cost **$6.33/boe in Q2-2026; pre-salt $4.45/boe**. | [V-snip The Standard HK / World Oil / Economic News Brasil] |

**Net effect for the writer:**
- The Q2 FY27 earnings read-across moves down a little: realisation ~$93–95.
- Balance sheets are cleaner than Part 2 implied: ONGC standalone is net cash, and OIL group net debt is ~2.25×.
- The subsidy and windfall history can now be printed with primary numbers.

## 4.1 Verification table — 40 figures the writer will lean on

"Agrees?" compares the figure with Parts 1–3.

| # | Figure | Value | Primary source (fetched?) | Agrees with Parts 1–3? |
|---|---|---|---|---|
| 1 | ONGC standalone PAT FY26 | ₹32,894 Cr (FY25 ₹35,610 Cr) | ONGC AR26 10-yr table (₹328,940 mn) [V]; screener [V] | Yes |
| 2 | ONGC consolidated PAT attributable FY26 | **₹41,424 Cr** (+14.35%); NCI ₹8,369 Cr; pre-minority ₹49,793 Cr | ONGC AR26 MD&A consolidated table [V] | Yes |
| 3 | ONGC standalone PAT Q1 FY27 | ₹17,034 Cr (+112%); PBT ₹22,848 Cr (record) | Q1 FY27 transcript [V]; screener [V] | Yes |
| 4 | ONGC consolidated attributable PAT Q1 FY27 | **~₹11,900 Cr** (EPS ₹9.46 × 1,257.99 Cr shares); pre-minority ₹6,554 Cr | screener EPS [V-arith]; press figure ₹11,899 Cr [V-snip askfuzz] | Yes (two sources) |
| 5 | ONGC crude realisation Q1 FY27 | **$99.45/bbl** vs $66.13 Q1 FY26. The transcript misprints "INR 99.45". | Q1 FY27 transcript [V]; Q1 FY26 transcript [V] | Yes |
| 6 | ONGC standalone crude Q1 FY27 | 4.452 MMT (−4.93% YoY) | [V-snip Angel One/Ventura]. Cross-check: Q1 FY26 4.683 MMT [V transcript] × (1 − 4.93%) = 4.452 | Yes; not primary |
| 7 | ONGC standalone gas Q1 FY27 | 4.756 BCM (−1.85%) | [V-snip]. Cross-check: Q1 FY26 4.846 BCM [V] × (1 − 1.85%) = 4.756 | Yes; not primary |
| 8 | ONGC new-well-gas price Q1 FY27 | **$13.31/mmBtu** (Q1 FY26 $8.24) | [V-arith]: 1.2 × PPAC APM formula prices (10.76, 11.59, 10.93) = 12.91 / 13.91 / 13.12 → average 13.31. The Q4 FY26 call quotes "this month [May] NWG $13.91" [V]. | Yes (now primary-derived) |
| 9 | NWG share, Q1 FY27 | 19% of gas volume; 24% of sales quantity (17% a year ago); 38% of nomination gas revenue; NWG revenue ~₹4,000 Cr, +~₹1,900 Cr over APM | Q1 FY27 transcript [V] | Yes |
| 10 | ONGC production guidance | FY26 standalone ex-JV 38.87 MMTOE; **FY27 ~39; FY28 ~40** | Q1 FY27 transcript [V] | Yes (but see Supersede 28: guidance was cut) |
| 11 | KG-DWN-98/2 | Oil **~21,000 bpd**; gas **1.5–1.7 MMSCMD**; **3+ MMSCMD** after 3 more wells (Q4 FY27); **6–7 MMSCMD** later (Q4 FY28) | Q1 FY27 transcript [V] | Yes |
| 12 | ONGC group 1P reserves (1-Apr-2026) | **793.31 MMTOE** (ONGC 517.88 + JV 10.16 + OVL 265.27); FY22 845.87 | AR26 [V] | Yes |
| 13 | ONGC 2P reserves (1-Apr-2026) | **709.32 MMTOE** (697.83 operated + 11.49 JV) | AR26 Board's Report [V] | **New** |
| 14 | ONGC 2P RRR | **1.17 (FY26)**; 1.35 (FY25); 44.01 MMTOE accreted in FY26 | AR26 [V]; Q4 FY25 transcript [V] | Yes, plus FY25 |
| 15 | ONGC FY26 dividend | **DPS ₹13.25 = ₹16,669 Cr** (payout 51%; record) | AR26 (₹166,689 mn) [V]; Q4 FY26 transcript [V] | Yes |
| 16 | GoI stake in ONGC | **58.89%** (31-Mar-2026) | AR26 top-10 [V]; screener Sep-26 [V] | Yes |
| 17 | PSU cross-holdings in ONGC | IOC **7.84%**, GAIL **2.45%** (= 10.29% ≈ screener "Government" 10.30%) | AR26 [V] | Refines [K] |
| 18 | SAED paid by ONGC | FY23 ₹10,964 Cr; FY24 ₹8,634 Cr; FY25 ₹3,948 Cr; FY26 nil | AR26 exchequer table [V] | **New** |
| 19 | ONGC statutory levies FY26 | **₹26,148 Cr** (19.7% of revenue); FY25 ₹30,968 Cr | AR26 [V]; Q4 FY26 transcript [V] | Yes (Part 1 ~₹26.5k [E]) |
| 20 | ONGC crude sales FY26 | ₹83,810 Cr on **18.79 MMT sold** (gas ₹36,330 Cr on 15.491 BCM sold) | AR26 10-yr table [V] | Yes, plus volumes |
| 21 | OIL standalone PAT FY26 | ₹4,455.34 Cr (FY25 ₹6,114.19 Cr) | OIL AR26 5-yr table [V]; screener [V] | Yes |
| 22 | OIL consolidated PAT FY26 | ₹7,551 Cr pre-minority; **attributable ~₹6,620 Cr** (EPS ₹40.70 × 162.66 Cr shares) | CRISIL key indicators (₹7,551 Cr) [V]; screener EPS [V-arith] | Yes |
| 23 | OIL Q1 FY27 | Crude **$98.73** (vs $66.20); gas $7.19; standalone PAT **₹2,870 Cr**; EBITDA ₹4,605 Cr (54%+) | OIL Q1 FY27 transcript [V] | Yes |
| 24 | OIL consolidated PAT Q1 FY27 | ₹4,027 Cr pre-minority (revenue ₹12,503 Cr); **attributable ~₹3,631 Cr** (EPS ₹22.32 × 162.66 Cr) | CRISIL [V]; screener [V-arith] | Yes |
| 25 | OIL 2P reserves | **190.09 domestic + 40.57 overseas = 230.67 MMTOE**; 1P 107.73 + 20.38 | OIL AR26 [V] | Yes (2P); 1P new |
| 26 | OIL RRR | **1.02 (FY26)**, 0.94 (FY25); accretion 6.232 MMTOE | OIL AR26 [V] | Yes |
| 27 | OIL gas guidance | 3.8 BCM FY28; 5 BCM annualised from ~Q1 FY28 jump → ~5 BCM FY29 (framed by an analyst and agreed by management) | OIL Q1 FY27 transcript [V] | Yes, with nuance |
| 28 | OIL crude guidance | "minimum 3.9 MMT" FY27; ~4.2 MMT by FY29 | OIL Q1 FY27 transcript [V] | Yes |
| 29 | OIL FY26 dividend | **₹1,870.60 Cr** (DPS ₹11.50; same as FY25) | OIL AR26 5-yr table [V] | Yes |
| 30 | GoI stake in OIL | **56.66%** (921.56 mn shares); LIC 6.86% | OIL AR26 [V]; CRISIL (Jun-26) [V] | Yes |
| 31 | APM ceiling | $6.50 FY24–FY25 → **$6.75 FY26 → $7.00 FY27** | ONGC AR26 MD&A and note 30.2 [V]; ICRA Mar-26 [V] | Yes |
| 32 | HP-HT ceiling | **$8.90 (Apr–Sep 2026)**; $9.89 (Oct-26–Mar-27) | ONGC AR26 MD&A ($8.9) [V]; $9.89 [V-P1 PPAC] | Yes |
| 33 | APM formula price Apr–Jun 2026 | $10.76 / $11.59 / $10.93 | [V-P1 PPAC]; consistent with figure #8 | Yes |
| 34 | Crude SAED window | 1-Jul-2022 → abolished 2-Dec-2024 | ONGC AR26 exchequer-table caption [V]; Q2 FY26 transcript [V] | Yes |
| 35 | 2026 fuel-export levy | from 27-Mar-2026 (diesel/ATF; petrol from 16-May-2026) | [V-P1 PPAC]; not re-fetched | Yes (Part 1) |
| 36 | Samudra Manthan outlay | **₹84,084 Cr** | ONGC Q1 FY27 transcript [V] | Yes |
| 37 | Indian basket | FY26 average **$70.99** (FY25 $78.56); **Jul-26 $82.04; Oct-26 MTD $120.09** | ONGC AR26 MD&A [V]; PPAC price service [V] | Yes; fills gap |
| 38 | India crude + condensate FY26 | **27.9 MMT**: ONGC nomination 16.8, OIL nomination 3.4, PSC/RSC 5.7, condensate 2.0 | PPAC RR FY26 Table 2.5B [V] | Yes |
| 39 | India crude imports FY26 | **245.8 MMT, $123.4 bn ($68.49/bbl)** | PPAC RR Table 8.24 [V] | Yes |
| 40 | MRPL effective group ownership | **80.94%** (NCI 19.06%); 71.63% direct | ONGC AR26 [V] | **Corrects 88.58%** |

**Score:**
- **35 of 40 are [V] from primary documents fetched this session**, counting two [V-arith] that rest only on primary inputs (#4, #8).
- **#33 and #35 are [V-P1]** (Part 1's PPAC fetches, consistent here).
- **#6 and #7 remain [V-snip]**, but they reconcile exactly to primary prior-year figures.
- **#27 is [V], with an attribution caveat:** the 5 BCM path was framed by the analyst and agreed by management.
- **Conflicts resolved:**
  - #40 MRPL: the AR beats the primer.
  - #3/#37 October oil price: PPAC beats Gulf News.
  - Supersede 1, ONGC FY26 realisation: the sold-volume basis beats the production basis.

## 4.2 Company deep-dives

### 4.2.1 ONGC (500312)

**Primary documents read:**
- Q1 FY27 call transcript (5-Aug-2026).
- Earlier transcripts: Q4 FY26 (27-May-2026), Q3 FY26, Q2 FY26 (11-Nov-2025), Q1 FY26, Q4 FY25 (22-May-2025), Q2 FY25.
- Integrated Annual Report 2025-26 and Annual Report 2014-15.
- BSE filings of 8-Oct-2026 (OPML) and 9-Oct-2026 (CARE).
- Screener consolidated and standalone (22-Oct-2026).

**Not found:** a Q1 FY27 investor presentation. ONGC's last investor decks on its site and BSE are corporate presentations (2022, Apr-2023). The quarterly "presentation" is effectively the press release plus the call, so the transcript is the KPI source.

#### (a) Management-commentary digest (paraphrased; source and date in brackets)

1. **Q1 FY27 was a price quarter, not a volume quarter** (D(F), 5-Aug-26).
   - Standalone revenue was ₹46,460 Cr (+45%) and PAT ₹17,034 Cr (+112%), with record PBT of ₹22,848 Cr.
   - Average crude realisation was $99.45.
   - Opex was held "broadly at the same level" YoY despite inflation and the weaker rupee.
2. **Production dipped for "execution, not structural" reasons** (5-Aug-26):
   - reservoir complexity at KG-98/2;
   - pre-commissioning shut-ins for big offshore projects;
   - pipeline replacement in Western Offshore;
   - customer-side gas offtake disruptions.
   - Recovery is expected from DUDP, the TSP expansion and DSF monetisation.
3. **Volume guidance** (5-Aug-26):
   - FY26 standalone ex-JV was 38.87 MMTOE. FY27 is expected at ~39 and FY28 at ~40.
   - The upside is mainly gas: about +1 BCM a year from new developments (DUDP to ~3 MMSCMD by Q3, East Coast CPP +1.3 MMSCMD, Tapti/Daman +0.5 MMSCMD).
   - **This is a cut.** In Nov-2025 the same company guided FY27 to 21 MMT oil + 21.5 BCM gas ≈ 42.5 MMTOE (Q2 FY26 call). In May-2025 it guided gas ~21 BCM FY26 and ~22 BCM FY27 (Q4 FY25 call); FY26 actual was 19.53 BCM.
4. **KG-DWN-98/2** (5-Aug-26):
   - Oil ~21,000 bpd, held back by inter-reservoir connectivity.
   - Gas 1.5–1.7 MMSCMD; three more wells add ~1.5 MMSCMD (to "3 million plus") around the CPP start (Oct–Nov 2026).
   - The 6–7 MMSCMD peak is a later goal.
   - In May-2025 management had said 10 MMSCMD (Q4 FY25 call); in Nov-2025, 3 MMSCMD near term.
5. **Western Offshore renewal** (5-Aug-26):
   - More than ₹40,000 Cr of projects are in execution.
   - bp's TSP-1 at Mumbai High is running at ~107% of baseline oil and ~113% of baseline gas, which offsets a 6–7% natural decline. The absolute gain is +1–2%.
   - The TSP model is extended to all of Western Offshore.
   - On cost, the CEO framed bp's programme as ~₹5,000 Cr per phase; an analyst converted this to ~$1.8/boe (27-May-26).
6. **Gas pricing mix** (5-Aug-26):
   - NWG was 19% of gas volume, 24% of sales quantity (17% a year earlier) and 38% of nomination gas revenue.
   - NWG revenue was ~₹4,000 Cr in the quarter, ~₹1,900 Cr above what APM would have paid.
   - Gas rose from 25% of standalone revenue in FY25 to 28% in FY26.
   - In the May-2026 call the CEO cited NWG at $13.91 that month, against LNG ~$18 and imported ethane ~$9.
7. **Crude pricing** (5-Aug-26). The COSA formula is "Brent is the base … Brent plus 1% … when we account … about 5% … 4% comes to our kitty". The Q1 premium analysts saw was "volatility, not formula".
   - **Our check:** against EIA dated Brent, ONGC realised **$1.6–3.8 *below*** Brent in every printed quarter (table c). The "premium" depends on which Brent is used — ICE futures or dated, and the pricing-period lag.
8. **Capex** (27-May-26):
   - FY27 E&P capex is "INR 30,000 crore bound", ~₹30–32k Cr with some spillover to ~₹33k Cr.
   - Non-E&P capex is separate (~one-third extra, ~₹8–11k Cr if opportunities arise).
   - PPAC's FY27 target is ₹30,000 Cr; H1 actual ₹14,534 Cr [V-P1].
9. **Consolidation drag** (5-Aug-26). HPCL lost ₹12,265 Cr on under-recoveries. OVL and MRPL cushioned it. Russian-asset realisations were weak because of geopolitics (price cap).
10. **Dividends** (27-May-26). FY26 total ₹13.25/share = ₹16,669 Cr, the highest ever (interims ₹6.00 + ₹6.25, final ₹1.00), payout 51%.
11. **Cost programme** (Q1 FY26 call, Aug-25):
    - Pipavav supply base, crew boats instead of helicopters.
    - Management declined to guide opex/bbl.
    - Opex rose 9% YoY in Q3 FY26 (₹7,151 vs ₹6,563 Cr) on Dahej LNG consumption.
12. **OVL** (Nov-25):
    - FY26 ~10 MMTOE (actual 9.67).
    - Mozambique Area 1 restart: OVL had spent ~$6.6 bn of own equity, plus its ~16% share of $16.1 bn project finance.

#### (b) Concall KPI table — ONGC standalone (from transcripts, [V] unless marked)

| KPI | Q1 FY25 | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|---|
| Crude realisation ($/bbl) | 83.05 | 78.33 | 72.57 | ~74.9 [E] | 66.13 | 67.34 | 61.63 | ~80.5 [E] | **99.45** |
| Crude realisation (₹/bbl) | — | 6,561 | — | — | — | — | — | — | ~9,400 [E] |
| Avg crude price (₹/t) | — | 49,160 | — | — | — | 44,043 | — | — | — |
| Crude prod. excl. condensate (MMT) | 4.63 [E] | 4.576 | — | FY25 18.558 | 4.683 | — | 4.592; 9M 13.907 | FY26 18.355 | 4.452 [V-snip] |
| Gas prod. (BCM) | 4.863 | — | — | FY25 19.654 | 4.846 | — | ↑ YoY | FY26 19.533 | 4.756 [V-snip] |
| Statutory levies (₹ Cr) | — | 7,830 (incl. SAED 1,128) | 6,630 | FY25 30,968 | — | 6,470 | 5,975 | FY26 26,148 | — |
| NWG metric | — | — | — | ~20% of gas | — | H1 rev ₹3,352 Cr (+651 vs APM); >21% of nom. gas rev | 9M rev >₹5,000 Cr (+944); >18% of gas sales rev | May-26 price $13.91 | rev ~₹4,000 Cr (+~1,900); 38% rev; 19% vol; 24% sales qty |
| APM ceiling ($/mmBtu) | 6.50 | 6.50 | 6.50 | 6.50 | 6.75 | 6.75 | 6.75 | 6.75 | 7.00 |
| EIA Brent quarter avg ($) [V-arith EIA] | n.f. | n.f. | 74.61 | 75.81 | 68.01 | 68.97 | 63.63 | 80.21 | 103.28 |
| Realisation − EIA Brent ($) | — | — | −2.0 | ~−0.9 [E] | −1.9 | −1.6 | −2.0 | ~+0.3 [E] | −3.8 |

**Q4 residuals [E]:**
- FY25 annual $77.2 and FY26 $68.9 come from AR26 crude revenue ÷ volume sold (Supersede 1).
- Q4 = 4 × annual − the three printed quarters. This assumes equal quarterly volumes, so treat it as approximate.
- Q1 FY25 crude of 4.63 MMT is back-solved from the "+1.2%" in the Q1 FY26 call.

#### (c) 5-year history (₹ Cr; screener 22-Oct-2026 [V]; company figures from AR26 [V])

**Standalone (the E&P company):**

| FY | Revenue | OP (screener) | OPM | Company EBITDA (PBIDT) | Other income | DD&A | PBT | PAT | ROCE screener / company | DPS (₹) | Crude sold (MMT) | Gas sold (BCM) | Implied crude $/bbl [E] |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FY22 | 1,10,319 | 54,430 | 49% | 60,946 | 6,516 | 17,546 | 41,040 | 40,306 | 18% / 29.0% | 10.50 | 20.30 | 16.753 | ~$76 |
| FY23 | 1,44,513 | 71,499 | 49% | 80,843 | −1,609 | 16,795 | 50,395 | 38,829 (exceptional −₹9,235 Cr) | 24% / 33.8% | 11.25 | 19.19 | 16.677 | ~$91 |
| FY24 | 1,29,741 | 66,815 | 52% | 77,593 | 10,778 | 20,496 | 53,016 | 40,526 | 19% / 30.6% | 12.25 | 18.87 | 15.927 | ~$80 |
| FY25 | 1,33,863 | 65,237 | 49% | 75,716 | 10,479 | 24,352 | 46,760 | 35,610 | 15% / 26.5% | 12.25 | 18.71 | 15.510 | $77.2 |
| FY26 | 1,32,506 | 61,722 | 47% | 72,078 | 10,356 | 25,134 | 42,415 | 32,894 | 13% / 22.5% | 13.25 | 18.79 | 15.491 | $68.9 |

**Notes on the standalone table:**
- **Gas price × volume:** gas revenue went from ₹12,441 Cr in FY22 to ₹36,330 Cr in FY26 (×2.9) while gas sold fell 7.5%.
- **Crude revenue:** ₹83,661 Cr in FY22 vs ₹83,810 Cr in FY26 — flat on lower volume.
- **Implied $/bbl for FY22–FY24** uses approximate FX of ₹74.5, ₹80.4 and ₹82.8 [K]. Treat those three as [E].

**Consolidated (screener basis; attributable = EPS × 1,257.99 Cr shares [V-arith]):**

| FY | Sales | OP | OPM | PBT | PAT pre-minority | PAT attributable | ROCE (screener) | Company ROCE |
|---|---|---|---|---|---|---|---|---|
| FY22 | 4,91,246 | 79,874 | 16% | 54,091 | 49,294 | ~45,527 | 16% | — |
| FY23 | 6,32,291 | 75,527 | 12% | 43,051 | 32,778 | ~35,438 | 14% | — |
| FY24 | 6,01,581 | 1,02,383 | 17% | 73,629 | 55,273 | ~49,137 | 18% | — |
| FY25 | 6,12,064 | 88,857 | 15% | 52,398 | 38,329 | 36,226 [V AR] | 12% | 20.66% |
| FY26 | 6,08,663 | 1,03,120 | 17% | 67,623 | 49,793 | **41,424 [V AR]** | 14% | 22.62% |

#### (d) 8-quarter trend (₹ Cr; screener 22-Oct-2026 [V])

**Standalone:**

| Quarter | Revenue | OP | OPM | Other inc. | PBT | PAT | Crude $/bbl |
|---|---|---|---|---|---|---|---|
| Q2 FY25 (Sep-24) | 33,881 | 17,041 | 50% | 4,750 | 15,036 | 11,984 | 78.33 |
| Q3 FY25 (Dec-24) | 33,717 | 17,132 | 51% | 1,722 | 11,000 | 8,240 | 72.57 |
| Q4 FY25 (Mar-25) | 34,982 | 13,961 | 40% | 2,075 | 8,767 | 6,448 | ~74.9 [E] |
| Q1 FY26 (Jun-25) | 32,003 | 17,185 | 54% | 1,210 | 10,744 | 8,024 | 66.13 |
| Q2 FY26 (Sep-25) | 33,031 | 16,599 | 50% | 3,424 | 12,545 | 9,848 | 67.34 |
| Q3 FY26 (Dec-25) | 31,547 | 15,272 | 48% | 3,094 | 10,602 | 8,372 | 61.63 |
| Q4 FY26 (Mar-26) | 35,928 | 12,666 | 35% | 2,628 | 8,524 | 6,650 | ~80.5 [E] |
| **Q1 FY27 (Jun-26)** | **46,460** | **28,355** | **61%** | 1,861 | **22,848** | **17,034** | **99.45** |

**Pattern:** Q4 is the weak quarter every year (OPM 40% and 35%). Year-end dry-well write-offs and provisions land there — Q4 FY26 had GST-on-royalty, the KG-98/2 umbilical write-off, receivables and stores provisions, and an FX loss [V Q4 FY26 call]. Do not annualise a Q4.

**Consolidated:**

| Quarter | Sales | OP | OPM | PBT | PAT pre-minority | EPS (₹) | PAT attributable [V-arith] |
|---|---|---|---|---|---|---|---|
| Q2 FY25 | 1,59,331 | 20,574 | 13% | 12,655 | 9,841 | 8.14 | ~10,240 |
| Q3 FY25 | 1,67,213 | 24,354 | 15% | 13,480 | 9,747 | 6.82 | ~8,580 |
| Q4 FY25 | 1,67,749 | 21,766 | 13% | 13,137 | 8,965 | 5.91 | ~7,435 |
| Q1 FY26 | 1,63,106 | 25,770 | 16% | 15,509 | 11,554 | 7.79 | ~9,800 |
| Q2 FY26 | 1,57,911 | 26,521 | 17% | 17,284 | 12,615 | 8.57 | ~10,781 |
| Q3 FY26 | 1,67,423 | 25,335 | 15% | 16,190 | 11,946 | 7.96 | ~10,014 |
| Q4 FY26 | 1,73,801 | 25,352 | 15% | 18,640 | 13,678 | 8.60 | ~10,819 |
| **Q1 FY27** | **2,04,987** | **15,485** | **8%** | 7,012 | **6,554** | 9.46 | **~11,901** |

- **Check:** the four FY26 attributable quarters sum to ₹41,414 Cr vs ₹41,424 Cr in AR26. The method holds.
- **Read:** in Q1 FY27, attributable PAT (₹11,901 Cr) *exceeded* pre-minority (₹6,554 Cr) by ₹5,347 Cr. That is the minorities' 45.1% share of HPCL's loss.

#### (e) Annual-report findings (AR26 [V])

**Reserves (1-Apr-2026):**
- **2P 709.32 MMTOE** (697.83 operated + 11.49 JV, PRMS since 1-Apr-2019).
- **1P** group 793.31 (ONGC 517.88; JV 10.16; OVL 265.27).
- **1P trend FY22→FY26:**
  - ONGC 557.31 → 530.71 → 514.83 → 515.17 → 517.88;
  - JV 14.22 → 10.16;
  - OVL 274.34 → 249.50 (FY25) → 265.27 (Sakhalin-1 restored).
- Domestic 1P has stabilised since FY24 after a ~42 MMTOE fall in FY23–FY24.

**Production (5-yr, AR26):**
- Group crude 29.80 → 27.41 MMT FY22→FY26 (ONGC 19.54 → 19.33; JV 2.16 → 1.17; OVL 8.10 → 6.91).
- Group gas 25.91 → 22.72 BCM (ONGC 20.91 → 19.53; JV 0.77 → 0.43; OVL 4.23 → 2.76).

**Drilling and capex:**
- 501 wells in FY26 (100 exploratory, 401 development) vs a 35-year-high 578 in FY25.
- Group capex ₹61,131 Cr: ONGC ₹35,878; HPCL ₹15,705; OVL ₹7,207; MRPL ₹2,044; OPaL ₹184; OGL ₹100 Cr.
- OALP-X & XI: 46 blocks on offer (28 offshore, 18 onland).

**Where revenue goes (FY26 standalone, ₹ Cr, % of revenue from operations ₹1,32,508):**

| Line | ₹ Cr | % |
|---|---|---|
| Royalty | 12,965 | 9.8% |
| OIDB cess | 13,034 | 9.8% |
| NCCD + other levies | 149 | 0.1% |
| Operating expenses | 28,209 | 21.3% |
| Survey write-off | 1,493 | 1.1% |
| Dry-well write-off | 8,236 | 6.2% |
| Provisions and write-offs | 3,948 | 3.0% |
| FX loss | 2,699 | 2.0% |
| Other | 55 | — |
| **PBIDT (with other income ₹10,356 Cr)** | **72,078** | — |

**10-year context of statutory levies (% of revenue):**
- FY22 25.3%; **FY23 29.1% (SAED year)**; FY24 26.6%; FY25 22.5%; FY26 19.7%.
- SAED ("other levies") was ₹11,054 Cr in FY23, ₹8,720 Cr in FY24 and ₹4,032 Cr in FY25 on the P&L line (the exchequer-table figures in Supersede 14 differ slightly).

**Employees:** 23,117 at FY26 vs 33,660 at FY17 (−31%); employee cost ₹10,211 Cr.

**Contribution to exchequer:** ₹55,865 Cr in FY26 (42.2% of turnover). Dividend to the Centre was ₹9,817 Cr (paid in FY26).

**Related parties (FY26):**
- ONGC sold **₹12,215 Cr of crude to MRPL** and **₹20,048 Cr of crude, gas and VAP to HPCL**. Together that is ₹32,263 Cr, ~24% of standalone revenue, eliminated on consolidation.
- Dividends received: HPCL ₹1,811 Cr, MRPL ₹502 Cr, OVL ₹51 Cr, Petronet MHB ₹53 Cr.

**Contingent liabilities:**
- Total **₹71,577 Cr** at Mar-26 (Mar-25 ₹65,220 Cr). Main items:
  - contractor claims ₹14,551 Cr (+₹1,888 Cr JV);
  - income tax ₹11,235 Cr;
  - **Assam specified land tax ₹1,639 Cr**;
  - sales tax ₹3,100 Cr;
  - JV-block ST/GST ₹8,950 Cr (of which ₹6,683 Cr is other partners' share);
  - **PMT ₹15,225 Cr** (inside "JV others" ₹20,065 Cr).
- **GST/ST on royalty:** provision **₹19,645 Cr** (FY26 addition ₹2,526 Cr), with **₹18,647 Cr deposited under protest**. The question is pending before a **nine-judge Supreme Court bench**.

**Cash and leases (standalone, Mar-26):**
- Cash & bank ₹28,660 Cr; borrowings ₹7,823 Cr; lease liabilities ₹25,822 Cr; SRF deposits ₹32,728 Cr.
- Quoted investments' market value is **₹98,076 Cr**: HPCL, MRPL, IOC, GAIL, Petronet and others.

**Ratings:** CARE AAA/Stable and A1+ reaffirmed 9-Oct-2026 on ₹42,500 Cr of facilities [V BSE].

**OPML (gap 12 closed):**
- **ONGC Petrochemicals Marketing Ltd**, incorporated 7-Oct-2026. It is a JV of ONGC : MRPL : OPaL at 50 : 25 : 25, with ₹50 Cr capital (ONGC ₹25 Cr).
- Purpose: a single integrated marketing and trading platform for the group's petrochemicals — branding, pricing, distribution, logistics, sourcing/trading and S&OP.
- It follows a 25-Apr-2026 board approval [V BSE 8-Oct-2026].
- It is *not* a port or upstream vehicle. It is the commercial front-end for OPaL + MRPL polymers/aromatics.

**Risks emphasised in the MD&A:**
- natural decline and reservoir complexity;
- APM-capped gas;
- fiscal/levy risk;
- offshore execution;
- rupee volatility (FY26 FX loss from INR −₹9/$, +11%);
- subsidiary (HPCL) margin exposure;
- energy transition.

### 4.2.2 Oil India (533106)

**Primary documents read:**
- Q1 FY27 call transcript (10-Aug-2026, BSE).
- Q4 FY26 call (May-2026), Q3 FY26 call (11-Feb-2026), Q2 FY26 call (17-Nov-2025).
- Investors' Meet FY26 deck (25-May-2026).
- Integrated AR 2025-26 and AR 2023-24.
- CRISIL rationale (9-Oct-2026).
- Screener consolidated and standalone (22-Oct-2026).

OIL does not publish a separate quarterly results deck; the call is the KPI source.

#### (a) Management-commentary digest (paraphrased)

1. **Record quarter on price and volume** (CIRO, 10-Aug-26).
   - Production 1.707 MMTOE. Crude 0.95 MMT (+11% YoY); a record 10,921 t/d on 27-Jun-2026 and 11,017 t/d in early August.
   - Gas +0.4% QoQ.
   - Crude realisation $98.73 (vs $66.20); gas $7.19 (vs $6.72 in Q1 FY26).
   - Standalone revenue ₹7,958 Cr (highest since listing); EBITDA ₹4,605 Cr (54%+ margin vs 34%); PBT ₹3,742 Cr; PAT ₹2,870 Cr (vs ₹813 Cr); EPS ₹17.65.
2. **NRL** (10-Aug-26):
   - Operating income ₹9,146 Cr (+45%); utilisation 105%; distillate yield 87%.
   - **GRM $35.95 vs $5.02**; EBITDA ₹1,843 Cr (vs ₹786 Cr); PAT ₹1,305 Cr (vs ₹488 Cr).
   - Consolidated operating revenue ₹12,886 Cr.
3. **Crude guidance** (10-Aug-26): "minimum 3.9" MMT in FY27 (FY26 3.45), and ~4.2 MMT from the main producing area by FY29, excluding any deepwater.
4. **Gas** (10-Aug-26):
   - 3.8 BCM next year (FY28). Wells are being shut in today for lack of offtake.
   - The big step-up comes in Q1 FY28, when the IGGL/DNPL evacuation links are complete. Only a ~200-m tie-in within the NRL campus remains on DNPL.
   - Management accepted the analyst's framing of "2.93 BCM now → ~5 BCM annualised (FY29)".
5. **Samudra Manthan** (10-Aug-26): the government reimburses seismic and roughly ₹675 Cr per deep/ultra-deep well (OIL's reading). Detailed modalities were not yet notified.
6. **FY26 in hindsight** (Q4 FY26 call, May-2026).
   - The $69/bbl realisation was the lowest in five years, yet standalone total income held at ₹24,039 Cr and consolidated at ₹38,981 Cr.
   - Profit was hit by price and by E&P write-offs.
7. **Q3 FY26** (11-Feb-26):
   - Realisation $62.84 vs $73.80; 9M $65.73 vs $79.35 (−17%).
   - Gas $6.65 vs $6.56; EBITDA margin 33.96% (Q2 34.82%).
   - 19 wells in Q3, 51 in 9M (65% of the annual target).
8. **Q2 FY26** (17-Nov-25): realisation $68.19 vs $79.33; H1 $67.22 vs $82.09; gas $6.78 vs $6.70.
9. **Balance sheet events after FY26** (CRISIL, 9-Oct-26):
   - ~₹3,304 Cr of GST on royalty was paid in Aug–Sep 2026 under protest.
   - NRL refinery cost was revised to ₹33,901 Cr (from ~₹28,000 Cr); the PP plant costs ₹7,231 Cr.
   - Consolidated cash was ₹5,609 Cr at Mar-26.
   - CRISIL's FY27 crude assumption is $80–85/bbl.
10. **Gas-offtake reality** (AR26):
    - FY26 gas production was 3.186 BCM vs a MoU target of 3.889 BCM (82%). Sales were 2.632 BCM (83% of production).
    - **Lost gas: low market demand / low uplift 0.221 BCM, evacuation 0.175 BCM, bandhs 0.009 BCM.**
    - Rajasthan evacuates 98% of its gas; Assam/Arunachal only 78% (2.243 of 2.863 BCM).

#### (b) Concall KPI table — OIL standalone

| KPI | Q1 FY25 | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|---|
| Crude realisation ($/bbl) | ~84.9 [E: 2 × H1 82.09 − 79.33] | 79.33 | 73.80 | ~74.3 [E] | 66.20 | 68.19 | 62.84 | ~79.0 [E] | **98.73** |
| Gas price ($/mmBtu) | — | 6.70 | 6.56 | — | 6.72 | 6.78 | 6.65 | — | **7.19** |
| EBITDA margin (company) | — | — | — | — | 34%+ | 34.82% | 33.96% | — | **54%+** |
| Standalone PAT (₹ Cr) | 1,467 | 1,834 | 1,222 | 1,591 | 813 | 1,044 | 808 | 1,790 | **2,870** |
| Wells drilled | — | — | — | FY25 57 | — | — | Q3 19; 9M 51 | FY26 74 | 17 (7E + 10D) |
| Realisation − EIA Brent ($) | — | — | −0.8 | ~−1.5 [E] | −1.8 | −0.8 | −0.8 | ~−1.2 [E] | −4.6 |

**Q4 residuals [E]:** FY25 average $78.09 and FY26 $69.04 [V presentation], minus the 9M averages [V], assuming equal volume. Q1 FY27's −$4.6 gap is the largest. It is consistent with month-lag pricing in a quarter where Brent peaked in April and fell to $85 in June, so expect a *smaller* or positive gap in Q2 FY27, when Brent rose through the quarter [E].

#### (c) 5-year history (₹ Cr)

**Standalone** (screener [V] and AR26 5-yr table [V]):

| FY | Revenue (screener) | Company op. revenue | OP | OPM | Company EBITDA | Other inc. | DD&A | PBT | PAT | ROCE (screener) | Dividend (₹ Cr) | Crude $/bbl | O+OEG (MMTOE) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FY22 | 14,530 | 14,530 | 5,369 | 37% | 7,266 | 1,897 | 1,497 | 4,986 | 3,887 | 14% | 1,545 | 78.96 | 6.06 |
| FY23 | 21,372 | 23,260 | 9,679 | 45% | 11,176 | 1,497 | 1,595 | 8,857 | 6,810 | 22% | 2,169 | 95.47 | 6.36 |
| FY24 | 20,008 | 22,130 | 9,693 | 48% | 11,643 | −413 | 1,775 | 6,745 | 5,552 | 20% | 1,708 | 83.03 | 6.54 |
| FY25 | 20,527 | 22,117 | 8,766 | 43% | 10,636 | 1,870 | 1,919 | 7,851 | 6,114 | 15% | 1,871 | 78.09 | 6.71 |
| FY26 | 20,480 | 21,346 | 6,060 | 30% | 8,753 | 2,693 | 2,367 | 5,420 | 4,455 | 10% | 1,871 | 69.04 | 6.64 |

**Notes on the standalone table:**
- FY23 includes ₹1,887 Cr of SAED and FY24 ₹1,405 Cr. Screener nets SAED/excise out of revenue, which is why its FY23–FY24 revenue is below the company's operating revenue.
- **Plan expenditure (capex):** ₹4,367 / 5,534 / 5,907 / 8,467 / 13,026 Cr — tripled in 4 years.
- **CFO:** ₹6,005 / 7,660 / 7,715 / 8,171 / 7,576 Cr.
- **Borrowings:** ₹11,636 / 11,161 / 11,341 / 12,074 / 13,278 Cr.

**Consolidated (screener; attributable ≈ EPS × 162.66 Cr bonus-adjusted shares [V-arith]):**

| FY | Sales | OP | OPM | PBT | PAT pre-minority | PAT attributable [E] | ROCE |
|---|---|---|---|---|---|---|---|
| FY22 | 25,906 | 10,500 | 41% | 8,990 | 6,719 | ~5,622 | 21% |
| FY23 | 36,084 | 15,255 | 42% | 13,144 | 9,854 | ~8,728 | 25% |
| FY24 | 31,749 | 12,504 | 39% | 8,846 | 6,980 | ~6,336 | 18% |
| FY25 | 31,703 | 11,158 | 35% | 9,436 | 7,040 | ~6,550 | 13% |
| FY26 | 33,081 | 10,446 | 32% | 9,582 | 7,551 | ~6,620 | 12% |

#### (d) 8-quarter trend (₹ Cr; screener 22-Oct-2026 [V])

**Standalone:**

| Quarter | Revenue | OP | OPM | Other inc. | PBT | PAT | Crude $/bbl |
|---|---|---|---|---|---|---|---|
| Q2 FY25 | 5,246 | 2,183 | 42% | 856 | 2,305 | 1,834 | 79.33 |
| Q3 FY25 | 5,240 | 2,133 | 41% | 189 | 1,550 | 1,222 | 73.80 |
| Q4 FY25 | 5,519 | 1,984 | 36% | 664 | 2,020 | 1,591 | ~74.3 [E] |
| Q1 FY26 | 5,012 | 1,606 | 32% | 176 | 1,098 | 813 | 66.20 |
| Q2 FY26 | 5,457 | 1,325 | 24% | 831 | 1,318 | 1,044 | 68.19 |
| Q3 FY26 | 4,916 | 1,308 | 27% | 547 | 948 | 808 | 62.84 |
| Q4 FY26 | 5,961 | 1,821 | 31% | 1,139 | 2,057 | 1,790 | ~79.0 [E] |
| **Q1 FY27** | **7,958** | **4,084** | **51%** | 521 | **3,742** | **2,870** | **98.73** |

**Consolidated:**

| Quarter | Sales | OP | OPM | PBT | PAT pre-minority | EPS (₹) | PAT attributable [V-arith] |
|---|---|---|---|---|---|---|---|
| Q2 FY25 | 7,247 | 2,536 | 35% | 2,626 | 2,069 | 12.40 | ~2,017 |
| Q3 FY25 | 8,337 | 2,542 | 30% | 1,917 | 1,457 | 8.23 | ~1,339 |
| Q4 FY25 | 8,808 | 2,588 | 29% | 2,193 | 1,497 | 8.05 | ~1,309 |
| Q1 FY26 | 7,929 | 2,351 | 30% | 2,505 | 2,047 | 11.66 | ~1,897 |
| Q2 FY26 | 8,394 | 2,303 | 27% | 2,048 | 1,644 | 8.78 | ~1,428 |
| Q3 FY26 | 8,330 | 2,287 | 27% | 1,910 | 1,436 | 7.35 | ~1,196 |
| Q4 FY26 | 9,293 | 3,281 | 35% | 3,119 | 2,424 | 12.91 | ~2,100 |
| **Q1 FY27** | **12,503** | **5,793** | **46%** | **5,322** | **4,027** | 22.32 | **~3,631** |

- **Check:** the FY26 attributable quarters sum to ₹6,621 Cr vs ~₹6,620 Cr from annual EPS.
- **NRL's share of Q1 FY27:** consolidated − standalone PAT = ₹1,157 Cr, broadly NRL's ₹1,305 Cr PAT less eliminations.

#### (e) Annual-report findings (OIL AR26 [V])

**Reserves (1-Apr-2026):**

| Scope | 1P | 2P | 3P |
|---|---|---|---|
| Domestic oil + condensate (MMT) | 28.70 | 68.68 | 87.34 |
| Domestic gas (BCM, balance recoverable) | 90.56 | 139.68 | 178.99 |
| Domestic gas (BCM, sales-contract basis) | 35.30 | 50.58 | 61.96 |
| **Domestic O+OEG (MMTOE)** | 107.73 | **190.09** | 243.05 |
| Overseas oil + condensate (MMT) | 8.76 | 20.53 | 32.27 |
| Overseas gas (BCM) | 11.62 | 20.04 | 23.89 |
| **Overseas O+OEG (MMTOE)** | 20.38 | 40.57 | 56.16 |

- **Read:** 73% of domestic 2P is gas (139.7 BCM). Only ~36% of that gas (50.6 BCM) is backed by sales contracts.
- The "31-year reserve life" therefore overstates *monetisable* life. On the contract basis, domestic 2P is ~119 MMTOE, ~18 years at 6.64 MMTOE/yr [E].

**Overseas assets:**
- Vankor: 0.945 MMTOE share of FY26 production; cumulative dividends **$508.29 m** via VIPL.
- Taas-Yuryakh: 0.464 MMT; **$491.89 m** of dividends and capital returned.
- Russia investment ₹8,229.68 Cr ($1,033.7 m).
- **Mozambique Area 1:** investment ₹11,714.19 Cr ($1,695.7 m); project 41.8% complete at Mar-26; OIL 2P share 16.21 MMTOE gas + 0.46 MMT condensate.
- Carabobo (Venezuela): 3.5% share, 0.0139 MMT production.
- License 61 (Russia): operator bankrupt.

**Production detail FY26:**
- Crude 3.45 MMT; gas 3.186 BCM (Assam/Arunachal 2.863, Rajasthan 0.255, Dirok JV 0.068).
- Gas revenue ₹5,636.72 Cr (FY25 ₹5,514.09 Cr).
- Terminal oil reached 10,566 MTPD in Mar-2026, a decade high.

**P&L anatomy FY26 (standalone, ₹ Cr):**

| Line | FY26 | FY25 | Note |
|---|---|---|---|
| Statutory levies | 5,299 | 5,520 | Royalty 2,800 (2,995); cess 2,482 (2,509); 24.8% of operating revenue |
| Contract cost | 2,798 | 1,980 | +41% |
| Employee cost | 1,929 | 1,837 | |
| Exploratory wells written off | 746 | 77 | |
| Impairment of exploratory wells | 1,342 | 569 | Andaman |
| Exchange loss | 915 | 198 | |
| GST on royalty | 865 | 809 | |
| DD&A | 2,367 | 1,919 | Depletion 1,558; ROU depreciation net 376 |

- **Dry-hole / impairment and FX items together took ~₹3,000 Cr** out of FY26 PBT (₹5,420 Cr) [E].

**Related party:**
- OIL sold **₹10,101 Cr of crude and gas to NRL** (FY25 ₹10,857 Cr) = **~47% of standalone operating revenue**. It also earned ₹588 Cr of pipeline tariff from NRL (₹243 Cr in FY25).
- **This is why consolidated revenue is far below the sum of OIL + NRL:** OIL's own crude is NRL's main feedstock.
- When NREP takes NRL to 9 MMTPA, OIL's ~3.5–4 MMT will be <45% of the feed, and NRL becomes a net crude importer via the Paradip pipeline [E].

**Exchequer FY26:**
- Total ₹9,213 Cr: Centre ₹5,335 Cr (corporate tax ₹1,607 Cr; cess ₹2,478 Cr; SAED + BED ₹0.33 Cr vs ₹773 Cr in FY25); states ₹3,878 Cr (royalty ₹2,644 Cr; VAT ₹1,156 Cr).
- FY25 total was ₹11,232 Cr.

**Balance sheet (Mar-26):**
- Standalone borrowings ₹13,278 Cr vs cash, bank and current investments ₹3,693 Cr → **net ~₹9,585 Cr**.
- Consolidated borrowings ₹35,959 Cr vs cash ₹5,609 Cr → **net ~₹30,350 Cr (~2.25× company EBITDA)**.
- Net worth (company basis) ₹42,128 Cr standalone; ₹53,716 Cr consolidated.
- D/E 0.27× standalone. DSCR improved to 2.03× from 1.61×.

**Ownership (Mar-26):**
- President of India 56.66% (921.56 mn shares); LIC 6.86% (6.51%).
- IOC/BPCL/HPCL hold 9.87% [V-P1 presentation]. The ONGC group's look-through holding in OIL via HPCL is 2.47% [V ONGC AR26].

**Contingent / legal:**
- GST on royalty paid ~₹3,304 Cr (Aug–Sep 2026).
- Assam land-tax law (state undertook to repeal) [V-P1 call].

**Risks highlighted:** reserve replacement; offtake and evacuation; NE law and order (bandhs); overseas geopolitics (Russia sanctions, Mozambique security); NREP cost and timing; commodity prices.

## 4.3 Industry datasets upgraded from primary sources (chart-ready)

### D1. Crude benchmarks, monthly, Apr-2025 → Oct-2026 ($/bbl)

**Sources:**
- Indian basket: PPAC international-price service, posted 22-Oct-2026 [V].
- Brent: EIA Europe Brent spot FOB monthly (RBRTEm), fetched 22-Oct-2026 [V].

PPAC's Snapshot quotes Brent as $90.84 (Aug-26) and $116.77 (Sep-26) on its own assessment. EIA has $91.08 and $114.16. Use one series per chart.

| Month | Indian basket | EIA Brent | Sweet:sour in basket |
|---|---|---|---|
| Apr-25 | 67.72 | 68.13 | — |
| May-25 | 64.04 | 64.45 | — |
| Jun-25 | 69.77 | 71.44 | — |
| Jul-25 | 70.95 | 71.04 | — |
| Aug-25 | 69.11 | 67.87 | — |
| Sep-25 | 69.61 | 67.99 | — |
| Oct-25 | 65.08 | 64.54 | — |
| Nov-25 | 64.31 | 63.80 | — |
| Dec-25 | 62.20 | 62.54 | — |
| Jan-26 | 63.08 | 66.60 | — |
| Feb-26 | 69.01 | 70.89 | — |
| Mar-26 | 113.49 | 103.13 | 61.0 : 39.0 |
| Apr-26 | 114.48 | 117.29 | 61.0 : 39.0 |
| May-26 | 106.23 | 107.14 | 70 : 30 |
| Jun-26 | 83.22 | 85.40 | 71.0 : 29.0 |
| **Jul-26** | **82.04** | **83.76** | 79.4 : 20.6 |
| Aug-26 | 90.19 | 91.08 | 74.9 : 25.1 |
| Sep-26 | 116.09 | 114.16 | 77.8 : 22.2 |
| **Oct-26 (to 21st)** | **120.09** (spot 21-Oct **116.73**) | n.a. | 65.3 : 34.7 |

**Quarterly averages [V-arith]:**

| Quarter | Basket | EIA Brent |
|---|---|---|
| FY26 (full year) | 70.99 | 70.20 |
| Q1 FY26 | 67.18 | 68.01 |
| Q2 FY26 | 69.89 | 68.97 |
| Q3 FY26 | 63.86 | 63.63 |
| Q4 FY26 | 81.86 | 80.21 |
| Q1 FY27 | 101.31 | 103.28 |
| **Q2 FY27** | **96.11** | **96.33** |

The basket closed FY26 at $124.85 on 31-Mar-2026 (spot) [V PPAC].

### D2. Upstream crude realisation vs Brent, quarterly ($/bbl)

**Sources:** company transcripts [V]; [E] = residual from annual averages.

| Quarter | ONGC | OIL | EIA Brent |
|---|---|---|---|
| Q1 FY25 | 83.05 | ~84.9 [E] | n.f. |
| Q2 FY25 | 78.33 | 79.33 | n.f. |
| Q3 FY25 | 72.57 | 73.80 | 74.61 |
| Q4 FY25 | ~74.9 [E] | ~74.3 [E] | 75.81 |
| Q1 FY26 | 66.13 | 66.20 | 68.01 |
| Q2 FY26 | 67.34 | 68.19 | 68.97 |
| Q3 FY26 | 61.63 | 62.84 | 63.63 |
| Q4 FY26 | ~80.5 [E] | ~79.0 [E] | 80.21 |
| **Q1 FY27** | **99.45** | **98.73** | **103.28** |
| Q2 FY27 (expected) | ~93–95 [E] | ~93–95 [E] | 96.33 |

- **Annual averages:** ONGC FY25 $77.2 and FY26 $68.9 [V-arith AR]; OIL FY22–FY26 $78.96 / 95.47 / 83.03 / 78.09 / 69.04 [V-P1 presentation].
- **Gas ($/mmBtu):**
  - OIL: Q2 FY25 6.70, Q3 FY25 6.56, Q1 FY26 6.72, Q2 FY26 6.78, Q3 FY26 6.65, Q1 FY27 7.19 [V].
  - ONGC NWG: Q1 FY26 8.24, Q1 FY27 13.31 [V-arith]. APM cap: 6.50 → 6.75 → 7.00.

### D3. Windfall tax actually paid by the two members (₹ Cr, standalone)

**Sources:** ONGC AR26 exchequer table; OIL AR24 note 57.16 and AR26 note 57.10 [V].

| FY | ONGC SAED | OIL SAED | Pair | Context: ONGC statutory levies total (% of revenue) |
|---|---|---|---|---|
| FY23 (from 1-Jul-22) | 10,964 | 1,887 | **12,852** | 45,284 (29.1%) |
| FY24 | 8,634 | 1,405 | **10,039** | 36,798 (26.6%) |
| FY25 (to 2-Dec-24; nil from 18-Sep-24) | 3,948 | 780 | **4,728** | 30,968 (22.5%) |
| FY26 | nil | nil (₹0.33 Cr BED) | **0** | 26,148 (19.7%) |
| **Total** | **23,546** | **4,072** | **27,618** | |

- **Mechanism detail [V OIL AR24]:** SAED was charged only on crude volume up to the previous year's output. **Incremental production above the prior year was exempt.** That clause matters for any 2026-style reimposition debate, because both companies are now guiding volume growth.
- **Government-wide crude SAED** was "about ₹25,000 Cr" in FY23, with FY24 at "40–50% of it" [V-snip Cogencis citing a finance-ministry official]. ICRA estimated ~₹40,000 Cr for FY23 including product-export SAED [V-snip].
- **So ONGC + OIL paid roughly half of the government's FY23 crude windfall take** [E]. The rest came from Vedanta/Cairn, RIL-bp and other PSC producers.

### D4. Under-recovery and upstream burden-sharing, 2002-03 → 2015-16 (₹ Cr)

**(i) PPAC under-recoveries on sensitive products** [V PPAC legacy table, sheet "UR(FAQ)"]

| FY | Petrol | Diesel | Domestic LPG | PDS kerosene | **Total** |
|---|---|---|---|---|---|
| 2002-03 | 0 | 0 | 3,363 | 2,067 | **5,430** |
| 2003-04 | 0 | 0 | 5,523 | 3,751 | **9,274** |
| 2004-05 | 150 | 2,154 | 8,362 | 9,480 | **20,146** |
| 2005-06 | 2,723 | 12,647 | 10,246 | 14,384 | **40,000** |
| 2006-07 | 2,027 | 18,776 | 10,701 | 17,883 | **49,387** |
| 2007-08 | 7,332 | 35,166 | 15,523 | 19,102 | **77,123** |
| 2008-09 | 5,181 | 52,286 | 17,600 | 28,225 | **1,03,292** |
| 2009-10 | 5,151 | 9,279 | 14,257 | 17,364 | **46,051** |

- Totals are [V-arith].
- **Budgetary (fiscal) subsidy** on PDS kerosene + domestic LPG in the same years: 4,496 / 6,292 / 2,930 / 2,662 / 2,524 / 2,641 / 2,688 / 1,814 [V PPAC].

**(ii) Upstream (ONGC + OIL + GAIL) share**

| FY | Upstream share | of which ONGC | of which OIL | Total UR | Upstream % | Source |
|---|---|---|---|---|---|---|
| 2003-04 | ~3,100 | 2,695 | n.a. | 9,274 | ~1/3 | [V-snip Lok Sabha; Business Standard] |
| 2004-05 | ~5,900 | 4,104 | ~706 [?] | 20,146 | ~1/3 | [V-snip LS] |
| 2005-06 | — | 8,549 (Apr–Dec) | ~676 [?] | 40,000 | — | [V-snip LS] |
| 2009-10 | 14,430 | n.a. | n.a. | 46,051 | 31% | [V-snip LS 2012] |
| 2010-11 | 30,297 | n.a. | n.a. | ~78,000 | 39% | [V-snip LS 2012] |
| 2011-12 | 36,894 (to Dec-11) | n.a. | n.a. | — | 38% | [V-snip LS 2012] |
| **2013-14** | **67,021** | **56,384** | 8,737 [V-snip] | **1,39,870** | **47.9%** | **[V ONGC AR 2014-15]** |
| **2014-15** | **42,823** | **36,300** | n.a. | **72,314** | **59.2%** | **[V ONGC AR 2014-15]** |
| 2015-16 | 1,980 (Apr–Sep) | n.a. | n.a. | — | — | [V-snip LS]; sharing stopped from Q3 FY16 |

- **ONGC FY14/FY15 economics [V AR15]:**
  - gross crude $106.72 / $85.28;
  - discount $65.75 / $40.40 per bbl;
  - **net realisation $40.97 / $44.87**;
  - PBT hit ₹47,756 / ₹30,960 Cr.
- In FY15 the government bore 37.8% and the OMCs 3.0%. ONGC alone was 50.2% of the total and 84.8% of the upstream share.
- **Still open:** primary company-wise rows for FY06–FY13 and the FY12–FY13 peak years. eparlib/sansad PDFs failed to load (502/503).

**(iii) Today's equivalent, for scale [V PPAC RR Table 8.23]**

Total subsidy and under-recovery on petroleum products and natural gas, FY21–FY26 (₹ Cr):

| FY | Total | Note |
|---|---|---|
| FY21 | 12,231 | |
| FY22 | 2,237 | |
| FY23 | 30,396 | incl. LPG under-recovery compensation 22,000 |
| FY24 | 12,696 | |
| FY25 | 14,810 | |
| FY26P | 27,584 | incl. LPG compensation 12,500 |

- PMUY claims were ₹12,212 Cr in FY26.
- NE gas subsidy ₹1,119 Cr in FY26: this is the 40% of APM price the budget pays on NE gas, which ONGC and OIL receive.

### D5. Domestic crude + condensate by producer (MMT) and shares

**Source:** PPAC RR FY26 Table 2.5B [V].

| FY | ONGC nomination | OIL nomination | PSC/RSC (all cos) | Condensate | **Total** | ONGC nom. share | OIL share |
|---|---|---|---|---|---|---|---|
| FY20 | 19.2 | 3.1 | 8.2 | 1.6 | 32.2 | 59.6% | 9.6% |
| FY21 | 19.1 | 2.9 | 7.1 | 1.4 | 30.5 | 62.6% | 9.5% |
| FY22 | 18.5 | 3.0 | 7.0 | 1.2 | 29.7 | 62.3% | 10.1% |
| FY23 | 18.4 | 3.2 | 6.2 | 1.4 | 29.2 | 63.0% | 11.0% |
| FY24 | 18.1 | 3.3 | 5.7 | 2.2 | 29.4 | 61.6% | 11.2% |
| FY25 | 17.4 | 3.4 | 5.6 | 2.2 | 28.7 | 60.6% | 11.8% |
| FY26 | 16.8 | 3.4 | 5.7 | 2.0 | 27.9 | 60.2% | 12.2% |

- **On a "company incl. JV share and condensate" basis**, ONGC is >73% (AR26) and OIL ~11–12% (CRISIL "~11%").
- The PI-basis shares of 71.7% / 14.4% (Apr–Sep 2026, PPAC Snapshot chart) [V-P1] remain the best H1 FY27 split. Their label mapping is unverified.
- **ICRA's FY27 projection for India is 28.0–28.5 MMT** [V]. H1 actual 13.7 MMT [V-P1].
- **Overseas production by Indian companies (MMTOE)** [V RR 2.8]: FY21 21.9, FY22 21.8, FY23 19.5, FY24 19.9, FY25 18.1, FY26 19.2. Domestic O+OEG: 59.2 / 63.7 / 63.6 / 65.8 / 64.8 / 62.7.

### D6. Gas price-mix split (gap 4) [E built on V inputs]

**ONGC FY26:** production 19.53 BCM ≈ 53.5 MMSCMD.

| Gas stream | Volume | Share of production | Price |
|---|---|---|---|
| **NWG** (Q1 FY27) | — | 19% of volume (24% of sales quantity) | $13.31 |
| **HP-HT** (KG-98/2) | 1.5–1.7 MMSCMD | ~3% | ceiling $8.90 (Apr–Sep 26) / $9.89 |
| **APM legacy** (remainder) | — | **~78% of production volume** | **$7.00 cap** |

- **By revenue:** NWG = 38% of nomination gas revenue in Q1 FY27 [V].
- **FY28 path [E]:** DUDP (NWG pricing [V Q4 FY25 call]) plus KG-98/2 at 6–7 MMSCMD would take uncapped gas to ~35–40% of volume.

**OIL:**
- No split is published. Management says "all incremental gas will be NWG" [V-P1].
- **Inference [E]:** OIL's Q3 FY26 gas price was $6.65, against an APM price of ~$6.59 (the average of Oct–Dec 2025 formula prices capped at $6.75). In Q1 FY27 it realised $7.19 against the $7.00 cap. Both imply that NWG/premium gas is a **low-single-digit share** of OIL's gas today.
- So OIL's FY28–FY29 gas growth (2.9 → ~5 BCM) is also a *price-mix* story: incremental gas earns ~12% of the basket.

### D7. Imports (crude HS 2709 and LNG HS 2711) — PPAC series used in place of commerce.gov.in TradeStat

TradeStat is a form-driven site and was not attempted within budget.

**Sources:** PPAC RR Tables 8.24 and 3.10 [V].

| FY | Crude imports (MMT) | Crude imports ($ bn) | $/bbl | LNG (MMT) | LNG ($ bn) | LNG $/mmBtu |
|---|---|---|---|---|---|---|
| FY19 | 226.5 | 111.9 | 67.41 | 21.7 | 10.25 | 9.0 |
| FY20 | 227.0 | 101.4 | 60.94 | 25.6 | 9.49 | 7.1 |
| FY21 | 196.5 | 62.2 | 43.23 | 25.1 | 7.88 | 6.0 |
| FY22 | 212.4 | 120.7 | 77.52 | 23.4 | 13.47 | 10.9 |
| FY23 | 232.7 | 157.5 | 92.36 | 19.9 | 17.11 | 16.4 |
| FY24 | 234.3 | 133.4 | 77.67 | 24.0 | 13.41 | 10.8 |
| FY25 | 243.2 | 137.2 | 76.94 | 27.0 | 14.91 | 10.6 |
| FY26 | 245.8 | 123.4 | 68.49 | 26.0 (P) | 13.36 | 9.8 |

- FY26 crude imports were ₹10,92,248 Cr.
- **Domestic crude (27.9 MMT) is worth ~10% of the import bill.** At FY26 prices that is ~$14 bn of import substitution [E].
- At $96 (Q2 FY27) and ₹95/$, every extra 1 MMT of domestic crude saves ~$0.70 bn a year [E].

### D8. Reserves (chart-ready)

| Series | FY22 | FY23 | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|---|---|
| ONGC 1P (MMTOE) | 557.31 | 530.71 | 514.83 | 515.17 | 517.88 | [V AR26] |
| ONGC JV 1P | 14.22 | 12.10 | 11.26 | 10.75 | 10.16 | [V AR26] |
| OVL 1P | 274.34 | 264.09 | 253.81 | 249.50 | 265.27 | [V AR26] |
| ONGC group 1P | 845.87 | 806.90 | 779.90 | 775.42 | 793.31 | [V AR26] |
| ONGC 2P (operated + JV) | — | — | — | — | **709.32** | [V AR26] |
| ONGC 2P RRR (domestic) | — | — | — | 1.35 | 1.17 | [V calls / AR26] |
| OIL 2P (domestic + overseas) | — | — | — | ~230 | 230.67 | [V AR26 / presentation] |
| OIL RRR | — | — | — | 0.94 | 1.02 | [V] |

- **India 2P (MoPNG physical asset account)** [V-P1 RR]: crude 3,101 Mbbl, gas 5,95,386 MMSCM (Mar-2025).
- ONGC operated 2P (697.83 MMTOE) is roughly **two-thirds (~65–70%) of India's crude + gas 2P** on a 1:1 MMTOE basis [E: 3,101 Mbbl ≈ 423 MMT + 595 BCM ≈ 1,018 MMTOE; the dates differ by a year and the definitions may not match exactly].

### D9. Cost benchmarks (lifting/opex per boe)

| Company | Metric | Value | Basis / source |
|---|---|---|---|
| ONGC (standalone) | Opex ÷ O+OEG production | **~$11.2/boe FY26** (FY25 ~$11.3) | [E on V AR26]: ₹28,209 Cr ÷ 284.9 mboe ÷ ₹88.31; excludes levies (~$10.4/boe), write-offs and DD&A (~$10/boe) |
| ONGC | Statutory levies per boe | ~$10.4/boe FY26 | [E: ₹26,148 Cr ÷ 284.9 mboe ÷ ₹88.31] |
| ONGC | DD&A per boe | ~$10.0/boe | [E: ₹25,134 Cr screener ÷ 284.9 mboe] |
| OIL (standalone) | Cash opex ÷ production | **~$12.6/boe FY26** | [E on V AR26] |
| OIL | Statutory levies per boe | ~$12.3/boe | [E: ₹5,299 Cr ÷ 48.7 mboe ÷ ₹88.31] |
| CNOOC | Operating expense per boe | $7.46 (2025); all-in cost $27.90 | [V-snip The Standard HK; World Oil] |
| Petrobras | Lifting cost, Brazil / pre-salt | $6.33 / $4.45 per boe (Q2-2026) | [V-snip Economic News Brasil] |

- **Read:** Indian NOC opex per boe is ~1.5× CNOOC's and ~2× Petrobras's.
- **The bigger gap is the state's take**: royalty + cess ≈ $10–12/boe at $69 oil. All-in (opex + levies + DD&A) ONGC ≈ $31/boe vs CNOOC $27.90 [E]. So at $60 Brent, ONGC's standalone margin compresses faster than CNOOC's.

### D10. Policy and rating datapoints (new, primary)

- **ICRA (Mar-2026):**
  - Import dependence 89–90% (FY25 and 10M FY26, ICRA basis).
  - FY27 crude output 28.0–28.5 MMT.
  - APM to stay at the $7.00 ceiling.
  - Nomination production costs "low", so APM gas stays remunerative.
  - Industry debt stable in FY27 [V].
- **CRISIL on OIL (9-Oct-2026):** AAA/Stable reaffirmed. FY27 crude assumption $80–85/bbl. Downgrade trigger: GoI stake below 51% or large debt-funded capex [V].
- **CARE on ONGC (9-Oct-2026):** AAA/Stable and A1+ reaffirmed on ₹42,500 Cr [V].
- **Gas-price rules** confirmed in ONGC AR26: APM 10% of basket, floor $4 / ceiling $6.50 for FY24–FY25 then +$0.25/yr; NWG +20%; HP-HT ceiling $8.9 (Apr–Sep 2026). NE consumers pay 60%, and the budget pays the remaining 40% as "NE gas subsidy" [V].
- **New royalty regime** (ONGC AR26 MD&A): a uniform formula for post-wellhead cost deduction. It removes long-standing inconsistencies in royalty computation and is a mild positive for net realisation [V; quantum not disclosed].

## 4.4 Gap log (§H items and the extra gaps in the brief)

| # | Gap | Status | What was found / tried |
|---|---|---|---|
| 1 | Lifting / production cost per boe | **Partly filled ([E] on [V])** | Neither ONGC (AR26, 7 transcripts) nor OIL (AR26, 4 transcripts) publishes $/boe lifting cost. ONGC declined to guide opex/bbl (Q1 FY26 call). Proxies computed from AR line items: ONGC ~$11.2/boe, OIL ~$12.6/boe (FY26), plus levies and DD&A per boe (D9). Peers: CNOOC $7.46 opex / $27.90 all-in [V-snip]; Petrobras $6.33 / $4.45 pre-salt [V-snip]. |
| 2 | ONGC quarterly realisation series; 8-quarter tables for both | **Filled** (6 of 8 ONGC and 6 of 8 OIL quarters primary; Q4s residual [E]) | ONGC: Q1 FY25 83.05, Q2 78.33, Q3 72.57, Q1 FY26 66.13, Q2 67.34, Q3 61.63, Q1 FY27 99.45 [V transcripts]. OIL: Q2 FY25 79.33, Q3 73.80, Q1 FY26 66.20, Q2 68.19, Q3 62.84, Q1 FY27 98.73 [V]. Gas series in D2. Q4 FY25/Q4 FY26 not printed in either Q4 call → [E]. |
| 3 | ONGC 2P stock; OIL 1P | **Filled** | ONGC 2P 709.32 MMTOE (1-Apr-2026) [V AR26]. OIL 1P 107.73 domestic + 20.38 overseas [V AR26]. |
| 4 | APM / NWG / HP-HT volume split | **Partly filled** | ONGC: NWG 19% of volume / 24% of sales quantity / 38% of revenue [V]; HP-HT ~3% [E from 1.5–1.7 MMSCMD]; APM ~78% [E]. OIL: no disclosure; price evidence implies NWG is a low single-digit share [E] (D6). |
| 5 | Subsidy-sharing history 2003–2016 | **Partly filled** | Primary: PPAC under-recovery by product 2002-03→2009-10 [V]; ONGC FY14 ₹56,384 Cr and FY15 ₹36,300 Cr, upstream ₹67,021 / ₹42,823 Cr, net realisation $40.97 / $44.87 [V ONGC AR15]. FY04–FY06 company rows and FY10–FY12 and FY16 aggregates are [V-snip Lok Sabha]. **Still open:** primary rows for FY06–FY13 (eparlib/sansad PDFs failed with 502/503; PPAC's subsidy page is JS-rendered with no table). |
| 6 | SAED collections and amounts paid | **Filled for the companies; partly for the government** | ONGC ₹10,964 / 8,634 / 3,948 Cr; OIL ₹1,887 / 1,405 / 780 Cr (FY23–FY25) [V ARs]. Rate path: §7.3 [V-P1]. Government-wide totals only [V-snip] (~₹25k Cr FY23; FY24 40–50% of that). Rajya Sabha PDFs returned an HTML shell. |
| 7 | Cross-holdings | **Filled** | IOC 7.84% and GAIL 2.45% in ONGC; ONGC holds 2,005.82 mn IOC shares (~14.2%), 326.72 mn GAIL shares (~4.97%), Petronet 12.5%; HPCL holds 2.47% of OIL [V AR26]. IOC 4.93%, BPCL 2.47%, HPCL 2.47% in OIL [V-P1]. |
| 8 | MRPL holding split | **Filled** | 71.63% direct; effective group 80.94% (NCI 19.06%) [V AR26]; HPCL ~16.96% [E back-solve]. |
| 9 | PPAC production shares by company FY26 | **Filled** | RR Table 2.5B [V] (D5). The H1 FY27 PI-share chart mapping is still best-effort [V-P1]. |
| 10 | Brent and basket monthly 2026 incl. Jul–Sep | **Filled** | Basket Jul 82.04 / Aug 90.19 / Sep 116.09 / Oct-MTD 120.09 [V PPAC]; EIA Brent Jul 83.76 / Aug 91.08 / Sep 114.16 [V]. |
| 11 | OIL "8.7 MMTOE" vs 6.64 | **Partly reconciled** | Overseas share ~1.42 MMTOE (Vankor 0.945, Taas 0.464, Carabobo 0.014) [V AR26] → ~8.06; ~0.6 unexplained. |
| 12 | ONGC "OPML" | **Filled** | ONGC Petrochemicals Marketing Ltd: JV of ONGC 50 / MRPL 25 / OPaL 25; ₹50 Cr; integrated petchem marketing [V BSE 8-Oct-2026]. |
| 13 | Net debt | **Filled** | ONGC standalone net cash ~₹20.8k Cr ex-leases (leases ₹25.8k Cr) [V]. OIL standalone net debt ~₹9.6k Cr; consolidated ~₹30.4k Cr (~2.25×) [V/E]. ONGC consolidated net debt is not computed (needs HPCL/MRPL/OPaL cash). |
| 14 | Q2 FY27 board dates | **Still open (none filed)** | No intimation in the screener/BSE feeds as of 22-Oct-2026 (latest filings: ONGC 9-Oct, OIL 21-Oct) [V]. The BSE API is blocked (403). Last year: ONGC board 10-Nov-2025 / call 11-Nov [V]; OIL call 17-Nov-2025 [V]. IOC's board is 30-Oct-2026 [V-snip]. **Expect ONGC ~10–14 Nov and OIL ~10–14 Nov [E].** |
| 15 | HPCL Q2 handout revenue basis (Part 1 §H-13) | Not pursued (out of scope) | — |
| — | ONGC Q1 FY27 investor presentation | **Not available** | No Q1 FY27 deck on the ONGC site or BSE (the latest decks are corporate presentations from 2022–2023). |
| — | ONGC Q1 FY27 production 4.452 MMT / 4.756 BCM | **Upgraded to [V-snip + arithmetic]** | Exact match to −4.93% / −1.85% on primary Q1 FY26 bases; the press release itself was not fetched. |
| — | commerce.gov.in HS 2709 / 2711 | **Substituted** | PPAC RR import tables used (D7). TradeStat is form-driven and was not attempted within budget. |
| — | DGH OALP data | **Partly** | RR Table 2.7B (OALP status) is available but not re-tabulated; AR26 gives OALP-X & XI = 46 blocks (28 offshore, 18 onland) [V]. |

## 4.5 New insights the first pass missed

1. **The 2022–24 windfall tax was smaller for these two than folklore says. The real lever was always gas.**
   - ONGC + OIL paid **₹27,618 Cr of SAED over three years** (D3).
   - That is less than ONGC alone gave up in **one** subsidy year (FY14: ₹56,384 Cr) and about the same as the FY26 APM-cap "transfer" if April–June 2026 prices had lasted a year (§B2 ≈ ₹17–22k Cr) [E].
   - SAED also exempted incremental production. A reimposition in 2026–27 would likely carry the same carve-out, which favours the growing producer (OIL) over the declining one (ONGC).
2. **"Brent-plus" realisation is a myth in the data.**
   - Against dated Brent, both companies realised **$1–4/bbl *below*** in every quarter printed since Q3 FY25 (D2). The gap was widest in Q1 FY27 (−$3.8 / −$4.6), when prices fell through the quarter.
   - Pricing lags help on the way up, so Q2 FY27 (Brent rising Jul→Sep) should see a narrower gap.
   - Writers should model realisation ≈ Brent − $2, not Brent + 1–4%.
3. **ONGC's volume guidance has been cut three times in 15 months.**
   - Gas: ~22 BCM for FY27 (May-25) → 21.5 BCM (Nov-25) → total O+OEG ~39 MMTOE (Aug-26).
   - KG-98/2 gas: 10 MMSCMD (May-25) → 3 MMSCMD near term (Nov-25) → 1.5–1.7 now, 3+ by Q4 FY27.
   - The price windfall is masking a credibility problem on execution.
4. **ONGC standalone is a net-cash company sitting on ~₹98k Cr of quoted stakes.**
   - Net cash ~₹20.8k Cr ex-leases. Quoted investments (HPCL, MRPL, IOC, GAIL, Petronet) were worth ₹98,076 Cr at Mar-26, ~35% of today's m-cap.
   - Leases of ₹25.8k Cr (vessels/rigs) are the real "debt".
   - In SOTP terms (m-cap ₹2,83,395 Cr − quoted stakes at Mar-26 value − net cash), the E&P business is valued at ~₹1.64 lakh Cr, ~2.3× FY26 company EBITDA of ₹72,078 Cr [E].
5. **OIL's reserve life is gas-heavy and contract-light.**
   - 73% of domestic 2P is gas, and only 36% of that gas is backed by sales contracts.
   - On the contract basis, domestic 2P life is ~18 years, not 31.
   - That is why the IGGL feeder line and DNPL matter more than any discovery. The FY26 gas loss (0.40 BCM to low uplift and evacuation) was ~12% of output.
6. **OIL and NRL are one integrated barrel.**
   - ~47% of OIL's standalone revenue (₹10,101 Cr) is crude and gas sold to NRL.
   - NREP's cost has crept to ₹41,132 Cr (incl. PP) from a ~₹28k Cr refinery estimate.
   - After 9 MMTPA, NRL becomes a mostly-imported-crude refiner via the Paradip line. Its GRM will then look like a coastal refiner's, plus the NE excise benefit — not Q1 FY27's $36 [E].
7. **Fiscal take dominates unit costs.**
   - Royalty + cess ≈ $10–12/boe vs opex ~$11–13/boe at FY26 prices (D9). The state takes as much per barrel as it costs to lift it.
   - The new uniform post-wellhead royalty formula (AR26) and any royalty relief under the 2025 Act are under-reported earnings levers.
8. **The legal overhang is bigger at ONGC than the PMT headline.**
   - Contingent liabilities ₹71.6k Cr. A ₹19.6k Cr GST/ST-on-royalty provision is already booked with ₹18.6k Cr deposited, awaiting a nine-judge Supreme Court bench.
   - A favourable ruling would be a cash *inflow* of up to ~₹18.6k Cr (~6.6% of m-cap) [E].

### New primer issues (format as primer-issues.md)

#### From Oil & Gas E&P deep-research pass (2026-10-22, oil-exploration-industry.md Part 4)

**primers/ongc.html**
- **Crude volume:** keep "18.36 MMT", but label it "crude excl. condensate (standalone)". 19.33 MMT includes condensate; 20.50 includes the JV share [V Q4 FY26 call]. *Supersedes the Part 3 issue that called the primer figure suspect.*
- **MRPL stake:** "~88.6% subsidiary" → "**71.63% direct; 80.94% effective group interest** (HPCL holds ~17%)" [AR26].
- **Windfall section:** replace "~₹25,000 Cr in year one" with **ONGC paid ₹10,964 Cr (FY23), ₹8,634 Cr (FY24), ₹3,948 Cr (FY25)**. Add that SAED exempted output above the prior year's level.
- **Subsidy history:** add FY14 ₹56,384 Cr / FY15 ₹36,300 Cr shared and net realisation $40.97 / $44.87 vs gross $106.72 / $85.28 [AR 2014-15]. Sharing ended from Q3 FY16.
- **Reserves:** add **2P 709.32 MMTOE** (1-Apr-2026), the 1P trend 845.87 → 793.31 (FY22→FY26) and RRR 1.35 (FY25) / 1.17 (FY26).
- **Realisation chart:** "Q1 FY25 ~$83" is confirmed ($83.05). Add Q2 FY25 $78.33, Q3 FY25 $72.57, Q2 FY26 $67.34, Q3 FY26 $61.63, Q1 FY27 $99.45. Note realisation runs ~$2 below dated Brent.
- **Guidance credibility:** note the FY27 cut from ~42.5 MMTOE (Nov-25) to ~39 MMTOE (Aug-26), and the KG-98/2 gas target path (10 → 3 → 1.5–1.7 now).
- **Balance sheet:** add standalone net cash ~₹20.8k Cr (ex-leases ₹25.8k Cr) and quoted investments ₹98k Cr. The PMT contingent is ₹15,225 Cr at Mar-26. Add the GST-on-royalty provision of ₹19.6k Cr (deposited ₹18.6k Cr; nine-judge SC bench).
- **Cross-holdings:** IOC 7.84% and GAIL 2.45% own ONGC; ONGC owns ~14.2% of IOC, ~5% of GAIL and 12.5% of Petronet.
- **New entity:** OPML (7-Oct-2026), a petchem marketing JV (ONGC 50 / MRPL 25 / OPaL 25).
- **Cost:** add the opex proxy ~$11/boe and levies ~$10/boe (FY26), labelled as estimates.

**primers/oil-india.html**
- **GST on royalty:** "~₹2,500 Cr provided / pending" → **~₹3,304 Cr paid Aug–Sep 2026 under protest** (CRISIL 9-Oct-2026).
- **NREP cost:** "~₹34,000 Cr" → **refinery ₹33,901 Cr + PP ₹7,231 Cr = ₹41,132 Cr** (CRISIL).
- **Reserves:** add **1P 128.1 MMTOE** (107.73 domestic + 20.38 overseas). 2P is 190.09 + 40.57. Note that only 50.6 BCM of the 139.7 BCM domestic 2P gas is contract-backed.
- **"8.7 MMTOE in FY26":** explain as domestic 6.64 + overseas ~1.42 (≈8.1); the residual is unexplained.
- **Net debt:** use consolidated ~₹30.4k Cr (borrowings ₹35,959 Cr − cash ₹5,609 Cr) ≈ 2.25× EBITDA. Standalone ~₹9.6k Cr.
- **SAED history:** OIL paid ₹1,887 Cr (FY23), ₹1,405 Cr (FY24) and ₹780 Cr (FY25).
- **Related party:** ~47% of standalone revenue (₹10,101 Cr) is sales to NRL. Explain the consolidation elimination.
- **Gas evacuation losses FY26:** 0.221 BCM low demand + 0.175 BCM evacuation + 0.009 BCM bandhs. Production was 3.186 BCM vs a MoU target of 3.889 BCM.
- **Realisation series:** Q2 FY25 $79.33, Q3 FY25 $73.80, Q1 FY26 $66.20, Q2 $68.19, Q3 $62.84, Q1 FY27 $98.73. Gas $6.56–6.78 → $7.19.
- **Ratings:** CRISIL AAA/Stable reaffirmed 9-Oct-2026, with an FY27 crude assumption of $80–85.

**General (both)**
- Update the 2026 oil-price narrative: **the Indian basket averaged ~$120 in October 2026 to date**, not ~$102–107.
- Q2 FY27 realisation is expected at ~$93–95, not the high-$90s.

### Part 4 source URLs (fetched 22-Oct-2026)

- **ONGC:**
  - AR 2025-26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/a521f688-6bf3-465c-8f05-b20ed08b2f32.pdf
  - AR 2014-15: https://www.bseindia.com/bseplus/AnnualReport/500312/5003120315.pdf
  - Transcripts (ongcindia.com/documents/77751/…):
    - Q1 FY27: Transcription-Q1-FY2627.pdf
    - Q4 FY26: 2659209/Transcription_Q4FY26.pdf
    - Q3 FY26: Transcription-Q3-FY26200226.pdf
    - Q2 FY26: Transcription181125.pdf
    - Q1 FY26: Transcription-Q1-FY-2025-26.pdf
    - Q4 FY25: Q4FY25Earnings.pdf
    - Q2 FY25: Transcription-ONGCQ2-FY25-Conference.pdf
  - OPML filing: https://www.bseindia.com/xml-data/corpfiling/AttachLive/0a212297-13a3-431a-9f58-9d5d2e0c85f6.pdf
  - CARE filing: https://www.bseindia.com/xml-data/corpfiling/AttachLive/90bda03e-7496-4109-9f13-1523441ec2c7.pdf
- **Oil India:**
  - AR 2025-26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/8ca090c8-e109-41af-883a-496c2bb503c5.pdf
  - AR 2023-24: https://www.bseindia.com/xml-data/corpfiling/AttachHis/87592a13-6f68-4fa8-8d13-118c99ea2e75.pdf
  - Transcripts (BSE AttachHis): Q4 FY26 2a520951-8bd3-4612-92b2-5e1b1ca8af5b.pdf; Q3 FY26 6d71db85-f319-40c8-8df5-32d2a7964686.pdf; Q2 FY26 9dc539df-9ad6-432c-bb55-30e5f3f573cf.pdf; Q1 FY27 446efde6-34f5-4d65-b403-85acfbd635fa.pdf
  - CRISIL: https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/OilIndiaLimited_October%2009_%202026_RR_406244.html
- **ICRA:** https://www.icra.in/Rating/DownloadResearchSummaryReport?id=6837
- **PPAC:**
  - Price service: https://ppac.gov.in/prices/international-prices-of-crude-oil (AJAX getInternationalPricesCrudeOil, pageId 30)
  - Workbook: https://ppac.gov.in/download.php?file=reports/1792653040_crude_PP_1_a_InternationalPrice(C)_22.10.2026.xlsx
  - Ready Reckoner FY26 (as in §3.5)
- **EIA Brent:** https://www.eia.gov/dnav/pet/hist_xls/RBRTEm.xls
- **Screener (re-pulled 22-Oct-2026):** /company/ONGC/, /company/ONGC/consolidated/, /company/OIL/, /company/OIL/consolidated/
- **[V-snip] only:**
  - Cogencis (FY23/FY24 SAED);
  - eparlib Lok Sabha answers 26140, 121484, 26814, 49191 (subsidy shares; PDFs did not load);
  - Angel One / Ventura (ONGC Q1 production);
  - World Oil / The Standard (CNOOC costs);
  - Economic News Brasil (Petrobras lifting cost);
  - univest.in (Q2 date previews).

*End of Part 4.*
