# Indian City Gas & LNG (Gas Transmission || LPG/CNG/PNG/LNG Supplier): Research Dossier, Part 1 (Industry)

Compiled 21-Oct-2026 for the writer agent. This is source material, not prose for publication. **This is the second, re-verified edition.** The first draft (same path, ~92 KB) was written while the network was blocked, so none of its figures had been fetched. This edition re-fetched the figures that carry an argument from primary pages: PPAC price notifications, the PPAC Ready Reckoner FY2025-26, the PPAC monthly gas report and the PPAC Oct-2026 snapshot, PNGRB, Petronet press releases, broker result notes and named news pages. Each re-fetched figure is retagged [V] with its URL. A **"Corrections vs first draft"** list sits right after the traps.
- **Part 1 (this file)** is the industry dossier (brief-industry.md §0–12 plus sections A–H).
- **Parts 2/3** (company fact packs, KPI grid, reconciliation) are in `_cloud/gas-distribution-companies-1.md`, written by a separate agent. Company numbers here are illustrations only. Where the two files disagree, the company file wins on company figures, and this file wins on industry and policy figures.

**Display name:** City Gas & LNG. **Slug:** gas-distribution. **Tier B, 5 members:**

| Member | NSE | BSE | Archetype | Primer |
|---|---|---|---|---|
| Adani Total Gas | ATGL | 542066 | CGD, high-growth new GAs (Adani 37.4% + TotalEnergies 37.4% [K]) | adani-total-gas.html |
| Indraprastha Gas | IGL | 532514 | CGD, mature metro (Delhi-NCR), CNG-heavy (GAIL 22.5% + BPCL 22.5% [K]) | indraprastha-gas.html |
| Mahanagar Gas | MGL | 539957 | CGD, mature metro (Mumbai), CNG-heavy (GAIL 32.5% [K]) | mahanagar-gas.html |
| Petronet LNG | PETRONET | 532522 | LNG regasification terminal (GAIL/IOC/BPCL/ONGC 12.5% each [K]) | petronet-lng.html |
| Aegis Logistics | AEGISLOG | 500003 | LPG/liquid port terminals + LPG sourcing and distribution (owns ~50.1% of listed Aegis Vopak Terminals [primer]) | aegis-logistics.html |

**Context names that are NOT members:**
- **Gas transmission and state utilities:** GAIL (gas transmission and marketing; primer gail-india.html); Gujarat Gas, renamed **Gujarat Energy Ltd** after merging with GSPC/GSPL (PPAC's Aug-2026 report already lists "Gujrat Energy Limited" as a reporting entity [V PPAC monthly gas report Aug-2026]; merger effective 1-May-2026 [V-snip]); GSPL.
- **Other CGD players:** Torrent Gas, Think Gas, AG&P Pratham, Megha City Gas, IRM Energy (listed, but not in our list), the CGD arms of BPCL, HPCL and IOC, and IOAGPL (IOC-Adani 50:50 JV).
- **Aegis Vopak Terminals** (AEGISVOPAK): a separate sub-sector, primer aegis-vopak-terminals.html.
- **Non-Petronet LNG terminals** (PPAC list, 1-Oct-2026): Hazira (Shell, 6 mtpa), Dabhol (Konkan LNG, 5), Ennore (IOC, 5), Mundra (GSPC LNG, 5), Dhamra (Adani-Total, 5), Chhara (HPCL, 5) [V PPAC snapshot Oct-2026].

### Confidence tags
- **[V]** = fetched this session from a primary or near-primary page; the URL is inline or in the §H source list. **More than 150 distinct figures in this file are now [V] (about 440 [V] tags in all; about 160 [V-snip] tags remain).** The core sources:
  - PPAC price notifications for APM and HPHT (Oct-2026);
  - the PPAC Ready Reckoner FY2025-26 (gas balance FY21–FY26, CGD sales by segment, LNG imports by value, LPG balance, terminal utilisation, CNG/PNG infrastructure);
  - the PPAC monthly gas report (Aug-2026) and the PPAC "Snapshot of India's Oil & Gas" (Oct-2026 edition, Sep-2026 data);
  - the PPAC daily petrol/diesel price file (21-Oct-2026);
  - the PNGRB unified-tariff press release (16-Dec-2025);
  - Petronet's Q4 FY26 and Q1 FY27 press releases;
  - PL Capital's IGL and MGL Q1 FY27 result notes (concall details);
  - Reuters via Baird Maritime (Qatar FM, 13-Aug-2026);
  - PTI via Outlook Business (the 9/10-Mar-2026 gas order; the Apr-2025 APM cut);
  - EVreporter (Sep-2026 EV penetration); FADA via Storyboard18 (FY26 fuel mix);
  - the Delhi EV Policy 2026 notification report; Business Today (PNG incentive scheme); The Week (Adani dismissal); IGU (World LNG Report 2026 press release).
- **[V-snip]** = verified only from a search-result summary of a named article or document (publisher and date inline). It is good but secondary. Spot-check it before printing a number that carries an argument.
- **[K]** = well-established fact from memory, source named, not re-fetched this session.
- **[E]** = estimate, composite or arithmetic by the compiler. Present it as "approx." or as a range.
- **[primer]** = from our own primers in `/primers/` (FY26 basis, refreshed 3–19 Jul 2026).

### Macro context fixed for all dossiers (as of 21-Oct-2026)
- RBI repo hiked to **5.50% on 7-Oct-2026**.
- Nifty closed at **22,780 on 28-Sep-2026**.
- **Rupee ~₹94.9/$ (19-Oct-2026)**, with a record low near ₹96.8. PPAC used ₹95.46 for the Sep-2026 monthly average and ₹95.48 for its Oct-2026 snapshot conversions [V PPAC snapshot].
- **West Asia crisis from 28-Feb-2026** brought crude, freight and LPG shocks.
  - **Brent averaged $116.77/bbl in Sep-2026** (Aug-2026 $90.84; Sep-2025 $68.02). The Indian crude basket (ICB) averaged $116.09 in Sep-2026 (Aug-2026 $90.19) [V PPAC snapshot Oct-2026].
  - **The crude shock re-intensified in September 2026.** That is why the October APM *formula* price jumped to $11.22.
- **Excise cut 26-Mar-2026:** central excise on petrol is now **₹11.90/l** and on diesel **₹7.80/l**, "effective 26.03.2026" [V PPAC snapshot]. The pre-cut rates were ~₹21.90/₹17.80 after the Apr-2025 ₹2 hike [K], so the cut was roughly ₹10/l [E].
  - **The cut did not change pump prices.** Delhi petrol stayed at ₹94.77 until 14-May-2026 [V PPAC daily RSP file], so OMCs absorbed it.
  - Then came **four pump-price hikes in May-2026** (15, 19, 23 and 25 May) [V].
- **GST 2.0** applies from 22-Sep-2025.
- **Adani:** OFAC settlement of $275m (18-May-2026) [V-snip]. Criminal counts against Gautam Adani, Sagar Adani and Vneet Jaain were **dismissed with prejudice in Aug-2026** (EDNY, Judge Garaufis) [V The Week 11-Aug-2026].
- **US tariffs:** Section 232 50% on copper/aluminium derivatives (not material to this sub-sector).

### Units, conventions and FX
- **Money and periods.** ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All five members have a March year-end.
- **FX: ₹94.9 = US$1 (19-Oct-2026).** All USD→₹ conversions use this rate unless a period rate is stated.
  - Period averages (PPAC): **FY25 ₹84.57, FY26 ₹88.31, Sep-2026 ₹95.46** [V PPAC snapshot].
  - **Rupee depreciation is itself a gas-cost driver,** because APM, HPHT and LNG are all priced in dollars. From the FY26 average to today the rupee fell ~7.5%, which alone lifts dollar-priced gas cost by ~7.5% [E].
- **Gas volume units:**
  - **scm** = standard cubic metre. **mmscm** = million scm. **mmscmd** = million scm per day. **bcm** = billion cubic metres (1 bcm/yr ≈ 2.74 mmscmd).
  - **Energy:** mmbtu = million British thermal units. TBTU = trillion BTU = 1 million mmbtu.
  - **Conversion used: 1 mmbtu = 25.2 scm** (at GCV 10,000 kcal/scm). This is PPAC's own convention [V PPAC Ready Reckoner Table 3.10 note; snapshot note]. At a GCV of ~9,400 kcal/scm the figure is ~26.8 scm (~6% difference). State the basis.
  - **₹ per scm from $ per mmbtu:** $1/mmbtu × ₹94.9 ÷ 25.2 ≈ **₹3.77/scm**.
    - APM at $7.00 ≈ ₹26.4/scm.
    - HPHT at $9.89 ≈ ₹37.2/scm.
    - LNG at $12 ≈ ₹45/scm.
    - Spot LNG at $21 ≈ ₹79/scm.
    - IGX spot at $28.4 (Sep-2026) ≈ ₹107/scm.
    - All are before transport, taxes and compression [E].
- **LNG conversions (PPAC conventions):** **1 MT of LNG = 1,325 scm** and **1 mtpa = 3.60 mmscmd** [V PPAC Ready Reckoner conversion table]. So 1 MT ≈ 52.6 mmbtu, and 1 mtpa ≈ 52.6 TBTU/yr.
  - Check: Dahej 22.5 mtpa × 52.6 = 1,183 TBTU/yr ≈ 296 TBTU/quarter. Q1 FY27 processed 192 TBTU → **65–66%**. The company reports **66%** [V Petronet Q1 FY27 press release].
- **CNG:** sold per **kg**. 1 kg ≈ **1.39–1.45 scm** (IGL/MGL convention ~1.4) [K]. IGL's CNG of 5.3 mn kg/day ≈ 7.2 mmscmd implies ~1.36 scm/kg [V PL IGL note; E].
- **LPG:** sold per kg/cylinder. Domestic cylinder 14.2 kg; commercial 19 kg. TMT = thousand metric tonnes.
- **Crude:** Indian crude basket (ICB) in $/bbl.

---

## READ THIS FIRST: twelve definitional traps

1. **₹/kg vs ₹/scm.**
   - CNG is priced per kg. PNG and all CGD margins are quoted per scm. Some brokers quote CGD EBITDA "per kg".
   - Rule: **divide ₹/kg by ~1.4 to get ₹/scm.**
   - Delhi CNG at ₹86.98/kg ≈ ₹62/scm, inclusive of excise and VAT [V price, PPAC snapshot citing IGL website 13-Oct-2026; E conversion].
2. **EBITDA/scm depends on its denominator.** The KPI is EBITDA ÷ total sales volume (scm), usually derived by analysts.
   - Three things make figures differ: other operating income, one-offs (IGL's FY26 includes a ~₹114 Cr reversal of an OMC dealer-margin item [primer]), and standalone vs consolidated volume.
   - **MGL FY26:** the primer says "~₹8.3/scm", but ₹1,451 Cr ÷ (4.585 mmscmd × 365 = 1,673 mmscm) = **₹8.67/scm** [E]. **MGL Q1 FY26:** PL's note says ₹9.6/scm [V PL]; other sites say ₹12.35 [V-snip multibagg]. Always state the method.
3. **APM vs New-Well Gas (NWG) vs HPHT/deepwater vs R-LNG are four different prices.** Section 7.2 has the full table.
   - **APM** (ONGC/OIL nomination fields): formula = 10% of the ICB, with a floor of $4 and a ceiling of **$6.50 (FY24–FY25) → $6.75 (Apr-2025) → $7.00 (Apr-2026)**.
     - Oct-2026: formula **$11.22**, ceiling **$7.00**, so the ceiling binds [V PPAC notification 30-Sep-2026].
     - **The ceiling did not bind every month.** In Jun-2025 ($6.41) and Nov-2025 to Feb-2026 ($6.55 → $6.21) the formula was below the ceiling and set the price [V PPAC snapshot Table 23].
   - **NWG** (new wells in nomination fields): priced at **12% of the ICB ("almost $8")** in the CGD contracts of 2025 [V Outlook Business/PTI 18-Apr-2025]. The Parikh committee recommended a 20% premium over APM [V-snip]. With ICB ~$90–116 in Aug–Sep 2026, 12% of ICB = **$10.8–13.9**, so NWG is now far dearer than APM [E].
   - **HPHT/deepwater ceiling:** **$9.89 for Oct-2026 to Mar-2027**, up from $8.90 for Apr–Sep 2026 [V PPAC notification 30-Sep-2026; V snapshot].
   - **R-LNG:** term contracts at a Brent slope (Qatar ~12–12.67% [V-snip]), Henry Hub-linked US contracts, spot/JKM, plus regas and pipeline tariff.
   - "Gas cost" for a CGD company is a blend of all four. **The mix, not any one price, drives margins.** Two examples from Q1 FY27:
     - **MGL:** 30% APM, 22% NWG/pooled, 15% HPHT, 21–22% Henry Hub-linked LNG; balance Brent-linked, IGX and spot [V PL MGL note 1-Aug-2026].
     - **IGL:** 48% domestic (APM ~2.6 mmscmd, NWG ~1.26, HPHT 0.6–0.7) and 52% imported (spot ~3%) [V PL IGL note 15-Aug-2026].
4. **"Allocation %" has several denominators.** Each is quoted as if it were the same number:
   - (a) APM as a % of the CGD company's **CNG-T + PNG-D requirement**. Examples: ATGL CNG ~36% in Q4 FY26, from 41% the prior quarter [primer]. IGL CNG 37% → 51% after the Jan-2025 restoration [V-snip angelone].
   - (b) APM as a % of the **total CGD requirement**: **34% vs 51% a year earlier**, after the 16-Apr-2025 cut [V Outlook Business/PTI 18-Apr-2025].
   - (c) The MoPNG **pro-rata ratio of "projected demand"**: 54.68% (Q3 FY25), 55.68% (Q1 FY26), 54.74% (Q2 FY26 projected) [V-snip Energetica]. This includes NWG.
   - (d) **"Domestic gas" share of CGD supply** (APM + NWG + HPHT + other domestic), per PPAC sector data: **62% in FY26** (10,256 of 16,516 mmscm) and **55% in Aug-2026** (910 of 1,667 mmscm) [V PPAC monthly gas report Aug-2026; E %].
   - (e) **Company "domestic share of sourcing"**: IGL 48% (Q1 FY27) [V PL].
5. **Gross revenue includes central excise (CGD).**
   - Natural gas is outside GST: "GST Council shall recommend the date on which GST shall be levied on ... natural gas" [V PPAC snapshot tax table]. CNG bears **central excise of 14%** [K] plus state VAT (Delhi 5% on CNG [K]; other states up to 14.5–15% [V-snip FIPI]).
   - IGL/MGL/ATGL show revenue **including excise**, then deduct excise as an expense. **Use volume and EBITDA, never revenue, for CGD growth.**
6. **Petronet's revenue is mostly the value of the gas.**
   - Petronet buys Qatar LNG on back-to-back terms and resells it, so revenue (₹43,495 Cr in FY26 [primer]) moves with LNG prices. The earnings engine is a **regas tariff (~₹66/mmbtu at Dahej in 2025 [V-snip Argus])** plus marketing margin, plus use-or-pay, plus trading/inventory gains.
   - FY26 standalone **PBT ₹5,158 Cr / PAT ₹3,843 Cr vs ₹5,275 / ₹3,926 Cr in FY25** [V Petronet Q4 FY26 press release].
7. **Regas tariff escalation is contractual, not regulated (yet).**
   - Dahej's tariff has historically **escalated ~5%/yr**: ₹62.91/mmbtu (2024) → ₹66.06 (2025) [V-snip Argus Dec-2025].
   - Petronet reportedly offered GAIL **₹52.05/mmbtu** on the expanded capacity and further cuts of up to ₹30/mmbtu from 2028. **Neither company confirmed this** [V-snip Argus].
   - Kochi's long-term tariff is ~₹114.5/mmbtu [V-snip Argus].
   - PNGRB has power to regulate terminal tariffs, but terminals are currently outside common-carrier rules [K]. "Will PNGRB regulate Dahej?" is a live overhang [primer]. Motilal Oswal (28-Sep-2026) called the tariff-cut fears "overdone" [V-snip].
8. **"Use-or-pay" vs throughput.**
   - **Use-or-pay:** capacity holders pay for booked regas capacity whether used or not. **Take-or-pay:** the buyer pays for contracted LNG whether lifted or not (on the Qatar SPA).
   - **Petronet's record Q4 FY26 PAT (₹1,338 Cr) included ₹630.04 Cr of overdue use-or-pay dues for CY2022** [V Petronet Q4 FY26 press release]. Strip it out before calling Q4 a run-rate.
   - **Force majeure suspends both.** Qatar's FM has affected **56 Petronet cargoes**. Under the contract, delayed cargoes can be delivered **by April 2028, when the existing long-term contract ends** [V Reuters via Baird Maritime 13-Aug-2026].
9. **Aegis has two businesses, and revenue lies.**
   - **LPG sourcing & distribution** (buy LPG abroad; sell to OMCs and industrial/auto-LPG users): ₹7,689 Cr of FY26 revenue (~92%) on a thin margin.
   - **Terminals:** liquids revenue ₹644 Cr with ₹472 Cr EBITDA, plus LPG terminalling [primer].
   - The terminal assets are now mostly inside **Aegis Vopak Terminals (AVTL)**, a listed ~50.1% subsidiary (listed 2-Jun-2025 [V-snip]). Minorities take ~49.9% of AVTL profit.
   - **Liquid** tankage (KL/cbm) ≠ **gas** tankage (MT). **Throughput** (5.15 MT LPG in FY26 [primer]) ≠ **static capacity** (~226,000 MT LPG [primer]).
10. **ATGL has three bases.** Standalone, consolidated, and "including the IOAGPL JV" (50:50 with IOC, equity-accounted).
    - Q1 FY27 volume: 303 mmscm standalone vs **496 mmscm including the JV** [V-snip IANS].
    - CNG stations: 705–707 standalone vs 1,167–1,169 including the JV [primer; V-snip].
11. **Marketing exclusivity ≠ infrastructure exclusivity.**
    - **Infrastructure exclusivity runs 25 years.** **Marketing exclusivity** was 5 years for older GAs and 8 years for 9th–11th-round GAs, and can be extended [primer; K].
    - IGL's Delhi and MGL's Mumbai **marketing exclusivity lapsed long ago**. Third-party sale via open access is legally possible but has not happened at scale [primer; K].
    - The Supreme Court's 2015 ruling in IGL v PNGRB is why PNGRB does not set retail CNG prices [K].
12. **"Gas share 6% → 15% by 2030" is a target, not a forecast.**
    - Natural gas is ~6–6.5% of India's primary energy [K, EI Statistical Review]. National consumption **fell 3.6% in FY26 to 68,753 mmscm (≈188 mmscmd)** [V PPAC Ready Reckoner FY26].
    - On this trajectory **the 15% target will be missed by a wide margin** [E].

---

## CORRECTIONS VS FIRST DRAFT (read before using any first-draft number)

1. **APM ceiling did NOT "bind every month since Apr-2023".** PPAC's monthly table shows the formula below the ceiling in **Jun-2025 ($6.41)** and **Nov-2025 to Feb-2026 ($6.55, $6.48, $6.25, $6.21)**, when crude was ~$62–66. The ceiling binds again from Mar-2026 (formula $6.81 → $10.76 in Apr-2026, peak **$11.59 in May-2026**, $11.22 in Oct-2026) [V PPAC snapshot Table 23].
2. **FY26 gas balance is now primary data, not a composite.**
   - Consumption **68,753 mmscm** (first draft ~69–70 bcm); LNG imports **34,427 mmscm = 26.0 mt** (first draft 25–26 mt); gross production **34,776 mmscm** (first draft ~35 bcm).
   - **Import dependence 50.1%** in both FY25 and FY26 (first draft ~49%) [V PPAC Ready Reckoner].
   - FY20–FY24 values also changed slightly. For example, FY24 consumption is **67,512** (first draft 66.6 bcm), and FY24 LNG imports are **24.0 mt** (first draft 23.4).
3. **CGD volume is larger than the first draft said.** PPAC's CGD-entity sales table gives **FY26 17,080 mmscm = 47 mmscmd** (first draft "~44–45"); **FY25 43 mmscmd** (first draft ~41); **FY24 37 mmscmd** [V PPAC Ready Reckoner Table 3.12C].
   - The PPAC *consumption-basis* CGD figure is slightly lower: **16,516 mmscm (+9.7%), 23.9% share** [V PPAC monthly report].
   - **Members' share of national CGD volume is therefore ~36%** (17.1 of 47 mmscmd), not 38–39% [E].
4. **India's regas capacity is 58.5 mtpa (1-Oct-2026)**, not "~60–65 mtpa by end-FY26". It was **53.5 mtpa on 1-Apr-2026** (with Dahej still at 17.5 in PPAC's table) [V PPAC snapshot; Ready Reckoner Table 3.9].
   - **Hazira is 6.0 mtpa, not ~5.2.**
   - **Dhamra ran at 34.1% in FY26 and 46.5% in Apr–Sep 2026**, not "~25%".
   - **Jafrabad and Jaigarh FSRUs are not in PPAC's operational list.** Treat them as not operating.
5. **Terminal utilisation by terminal is now sourced.** FY26: Dahej 91.9%, Hazira 27.2%, Dabhol 34.5%, Kochi 26.3%, Ennore 25.1%, Mundra 17.4%, Dhamra 34.1%, Chhara 6.2% [V PPAC Ready Reckoner]. The first draft's "Kochi ~52% in Q4" is not supported. Kochi's record FY26 throughput was 68 TBTU [V Petronet] ≈ 26% of 5 mtpa [E].
6. **Petronet's share of India's LNG imports is ~66%,** not 60–65% and not the primer's ~75%. FY26: Petronet processed 901 TBTU [V Petronet] against India's LNG imports of 1,366 TBTU (34,427 mmscm ÷ 25.2) [V PPAC] = **~66%** [E].
7. **PNG-D connections were 169.5 lakh on 1-Apr-2026** (16,949,377) and **176.9 lakh on 31-Aug-2026**. They were 150.4 lakh on 1-Apr-2025 [V PPAC Ready Reckoner / snapshot citing PNGRB]. The first draft's "167.25 lakh (31-Mar-2026)" and "171.1 lakh (Apr-2026)" are superseded.
8. **CNG stations: 8,067 (1-Apr-2025) → 8,916 (1-Apr-2026) → 9,158 (31-Aug-2026)** [V PPAC/PNGRB]. The first draft estimated ~8,800–9,300.
9. **LPG FY26 data now exists.** Consumption **33.17 mt** (+5.9%), production 13.04 mt, imports **21.45 mt**, import dependence **61%** [V PPAC Ready Reckoner Table 7.1]. **Apr–Sep 2026 consumption 13.70 mt (−15.5% YoY)** [V PPAC snapshot].
   - The first draft's Apr–Aug figure (11.3 mt, −15.9%) [V-snip ThePrint] is consistent, and is superseded by the longer period.
10. **Delhi domestic LPG cylinder is ₹942 (1-Oct-2026)** [V PPAC snapshot], not ~₹913.
11. **Delhi EV Policy 2026 took effect 1-Jul-2026** (to 31-Mar-2030), with an outlay of ~₹15,000 Cr [V EV Infrastructure News 7-Jul-2026]. The first draft said "approved Jun-2026" with the start date unclear.
12. **IGL's EV exposure is smaller than implied.**
    - IGL's CNG mix: **cars 48–50%, commercial vehicles ~19%, taxis ~14%, buses ~12%, three-wheelers only ~7–8%** [V PL IGL note].
    - Management sees the Delhi e-3W mandate costing **<1% of CNG volume in FY27 and 2–3% by 2030**.
    - **DTC bus CNG volume is already zero** (vs ~1.5 lakh kg/day a year ago).
    - The first draft's "cars and taxis ~65%" and its "autos/taxis/buses are the fleets EV targets" framing need this nuance.
13. **EV share of passenger vehicles was 8.5% in Sep-2026** [V EVreporter], not "~4–5%". It was 4.25% for FY26 as a whole [V FADA via Storyboard18].
14. **Electric share of L5 passenger three-wheelers reached 55.8% in Sep-2026** (L5 cargo 32.6%) [V EVreporter]. The first draft stopped at 46.9% (Q1 FY27).
15. **Adani criminal case:** the court dismissal with prejudice came in **Aug-2026** (10/11-Aug; Judge Garaufis granted the DOJ motion) [V The Week 11-Aug-2026]. The first draft placed the DOJ dismissal on 18-May-2026. 18-May is the **OFAC** settlement date [V-snip]. **The brief's "Aug-2026" is correct.**
16. **PNG incentive scheme:** reported by Business Today on **22-Aug-2026** (not 20-Aug). It runs in **two tranches over six months** from 1-Sep-2026, and the government claims it cuts D-PNG payback from ~10 years to ~3 [V BT].
    - The first draft's "threshold = Apr–Jun average + 10%" is **not** in the BT article. Keep it [V-snip kotakneo] or drop it.
17. **9-Mar-2026 gas order details are verified** [V PTI via Outlook Business 10-Mar-2026]:
    - P1 (CNG-T, PNG-D, LPG production, pipeline fuel): 100%. P2 fertiliser: 70%. P3 grid industry: 80%. P4 CGD industrial/commercial: 80%.
    - Petchem and then power are curtailed first; refineries go to ~65%.
    - The first draft's "fertiliser ≤70% [verify]" is now confirmed.
18. **Petrol path verified:** Delhi petrol went ₹94.77 → 97.77 (15-May) → 98.64 (19-May) → 99.51 (23-May) → **102.12 (25-May)**, unchanged to 21-Oct-2026. Diesel went 87.67 → **95.20** [V PPAC daily RSP]. The first draft's dates were right. The "assumed unchanged after 25-May" is now verified.
19. **Delhi PNG-D price is ₹50.59/scm and Mumbai CNG is ₹89.00/kg** (Mumbai PNG ₹53.00) [V PPAC snapshot]. This resolves the first draft's "Mumbai price path conflicting" gap for the current level.
20. **Global LNG:** 437 mt (+6.3%) and US 110.7 mt are now [V IGU press release 7-Jul-2026]. Also verified: liquefaction capacity **524.5 mtpa** at end-2025 and FIDs of **68.4 mtpa in 2025**.
21. **CRISIL's "import dependence ~36%" conflict is resolved.** PPAC's 50.1% is the authoritative figure (LNG imports ÷ consumption) [V].

---
## 0. Top-line framing (what an expert leads with)

### 0.1 Five members, three business models, one molecule
- **CGD utilities (IGL, MGL, ATGL).** They buy gas, carry it on an exclusive city network, and sell it as CNG (per kg) and PNG (per scm). Profit = volume × (realisation − gas cost − opex).
  - FY26: revenue ₹32,051 Cr (IGL standalone ₹16,451 + MGL ₹9,185 + ATGL ₹6,415); EBITDA ₹4,526 Cr (1,850 + 1,451 + 1,225); combined volume ~17.1 mmscmd (9.39 + 4.59 + 3.10) [primer; E sums].
  - That is **~36% of India's 47 mmscmd CGD market** [V PPAC; E].
- **LNG regas terminal (Petronet).** A toll on imported LNG.
  - FY26: revenue ₹43,495 Cr, mostly pass-through gas value [primer]. **PAT ₹3,843 Cr standalone; throughput 901 TBTU** (FY25: 934) [V Petronet].
  - Capacity **27.5 mtpa** (Dahej 22.5 after the expansion + Kochi 5) [V Petronet Q1 FY27 press release]. It handles **~66% of India's LNG imports** [E from V].
- **LPG/chemical port logistics (Aegis).** Terminals plus LPG trading/distribution. FY26 revenue ₹8,333 Cr, normalised EBITDA ₹1,599 Cr, PAT ₹1,107 Cr [primer].
- **All five, FY26 [E, primer sums]:** revenue ~₹83,900 Cr, PAT ~₹8,000 Cr.
  - Market caps in mid-2026 primer snapshots: ~₹2.0 lakh Cr. ATGL ~₹79,000 Cr, Aegis ~₹46,500, Petronet ~₹41,000, IGL ~₹23,500, MGL ~₹11,200.
  - PL put IGL at ₹21,200 Cr on 15-Aug-2026 [V PL].
  - **ATGL alone is ~39% of the group's market cap but ~8% of its PAT** [E]. Refresh market caps for the report date.

### 0.2 The defining fact of 2024–26: the state controls both the cheapest input and the competing technology
- **The APM squeeze.**
  - Policy guideline of 10-Aug-2022: APM gas should meet the CNG-T/PNG-D requirement [V Outlook/PTI].
  - By Apr-2025, **APM covered only 34% of CGD requirement (51% a year earlier)**. APM supply to CGD had been **cut ~50% in a year**, because ONGC's APM output declines **9–10% a year** [V Outlook Business/PTI 18-Apr-2025].
  - Prices rose at the same time: the ceiling went $6.50 → $6.75 → $7.00, and the replacement gas moved with crude. NWG at 12% of ICB is $10.8–13.9 at Aug–Sep 2026 crude; HPHT is $9.89 [V PPAC; E].
  - Result: **IGL earned ₹3.4/scm in Q1 FY27**, against ₹4.8 in Q4 FY26 and ₹6.2 in Q1 FY26. **Gas cost rose 22.9% YoY to ₹43.3/scm** [V PL IGL note 15-Aug-2026].
- **The EV squeeze.**
  - Electric share of L5 passenger three-wheelers: **55.8% in Sep-2026** (32% a year earlier) [V EVreporter].
  - **Delhi EV Policy 2026** (in force from 1-Jul-2026): from **1-Jan-2027** only electric autos and light goods carriers can be newly registered [V].
  - **Caveat:** three-wheelers are only ~7–8% of IGL's CNG volume [V PL].
- **The paradox.** CNG passenger cars are booming. CNG reached **21.98% of FY26 PV retail, overtaking diesel (18.08%)** [V FADA via Storyboard18; V-snip diesel].
  - IGL's vehicle conversions/additions rose to **~27,300 a month** (from ~18,000) [V PL].
  - MGL's CNG vehicle base reached **1.31 million** [V PL].
  - **CNG volume keeps growing (IGL CNG +6.4%, MGL CNG +9.7% YoY in Q1 FY27) while margins compress** [V PL].

### 0.3 The 2026 West Asia war hit every member, in different directions
- **The shock.** Iranian strikes hit Ras Laffan and knocked out **two of Qatar's 14 LNG trains**. Qatar declared force majeure in March 2026, then reviewed it month by month: FM for August; no September plan as of 13-Aug [V Reuters via Baird Maritime].
  - FM start date: some reports say 4-Mar [V-snip]; Petronet-linked reports backdate FM to 28-Feb [V-snip PL].
  - Qatar was ~40–45% of India's LNG imports before the war [V-snip moneylife/Kpler].
- **India's priority order.** The **Natural Gas (Supply Regulation) Order** (gazette, 9/10-Mar-2026) set allocations as a share of six-month average use [V PTI via Outlook Business 10-Mar-2026]:
  - 100% for CNG-T, PNG-D, LPG production and pipeline fuel;
  - 70% for fertiliser;
  - 80% for grid industry and for CGD industrial/commercial users;
  - ~65% for refineries; petchem and power curtailed.
- **Prices.**
  - Spot LNG: JKM >$21/mmbtu by 19-Mar (Kpler) and ~$24 for Indian buyers [V-snip]; Northeast Asia spot still ~$21 on 11-Aug-2026 [V-snip Energy Intelligence].
  - **India's own spot gas exchange (IGX GIXI) averaged ₹2,712/mmbtu = $28.4 in Sep-2026, on 456 mmscm traded** [V PPAC snapshot]. In Apr-2026 the GIXI was $16.8 (Western region) [V PPAC Ready Reckoner].
- **LNG import volumes and value.**
  - **Apr–Sep 2026: 18,189 mmscm (+4.5% YoY), costing $8.5 bn (vs $6.9 bn)**. That is an average of ~$11.8/mmbtu vs ~$10.0 a year earlier [V PPAC snapshot; E/mmbtu].
  - Sep-2026 imports **−8.55% YoY** [V].
  - Suppliers replacing Qatar: Oman, the US, Nigeria and Angola [V Reuters/Baird]. US top in May–Jul; Oman top in Sep [V-snip Equirus/Kpler].
- **LPG.** India's import dependence is **61% (FY26)** [V PPAC]; ~90% of LPG imports came through Hormuz [V-snip ThePrint].
  - **Apr–Sep 2026 consumption fell 15.5% to 13.70 mt.** Bulk LPG fell 61.8%. Domestic LPG production rose to 7.9 mt from 6.3 mt (+25%) as refiners maximised LPG [V PPAC snapshot].
  - **Active domestic LPG customers fell 1.2% to 3,267 lakh**, the first decline in the series [V PPAC snapshot].
  - Delhi domestic cylinder **₹942** (1-Oct-2026) [V]. The commercial 19-kg cylinder went from ₹1,691.50 (Jan) to ₹3,113.50 (Jun) [V-snip wionews/outlookmoney].
- **Retail fuel prices.**
  - Delhi petrol ₹94.77 → **₹102.12/l** and diesel ₹87.67 → **₹95.20/l** across four hikes (15/19/23/25 May 2026), unchanged since [V PPAC daily RSP].
  - **Delhi CNG ₹86.98/kg, Mumbai CNG ₹89.00/kg** (Oct-2026) [V PPAC snapshot]. Delhi CNG was ₹77.09 in Jan and ₹83.09 on 26-May [V-snip HDFC Sky/Deccan Herald].
- **OMCs absorbed the shock.** PSU downstream companies' **Q1 FY27 PAT was −₹18,150 Cr** [V PPAC snapshot]. That loss is the hidden cost behind "pump prices only up ~8%".
- **Who won and who lost:**
  - **Petronet:** Q1 FY27 standalone PAT ₹1,133 Cr (+33% YoY) despite company utilisation of 58% (76% a year earlier) [V Petronet]. The source was trading/inventory gains [V-snip PL].
  - **MGL:** EBITDA/scm ₹7.9 (₹6.2 in Q4 FY26), on Henry Hub-linked sourcing and ₹5/kg of CNG hikes [V PL].
  - **Aegis:** Q1 FY27 normalised EBITDA ₹727 Cr (+184%); distribution volume +91% [V-snip deck].
  - **IGL lost** (₹3.4/scm) [V]. **ATGL was squeezed** (gas cost +39%; EBITDA margin 14.2% vs 19.6%) [V-snip IANS].

### 0.4 Valuation dispersion is extreme (mid-2026 primer snapshots; refresh)
| | P/E (TTM) | What it prices |
|---|---|---|
| ATGL | ~125× | Long-dated new-GA growth, Adani/Total scarcity premium; US criminal case dismissed with prejudice Aug-2026 |
| Aegis | ~50× | LPG import super-cycle, AVTL capex, ammonia optionality |
| IGL | ~13–15× | Delhi EV + APM; de-rated from 20×+. PL EV/EBITDA FY27E 9.9× [V PL] |
| MGL | ~12–13× | Similar to IGL, but higher margin and Henry Hub-linked sourcing. PL values it at 12× FY28E; EV/EBITDA FY27E 7.6× [V PL] |
| Petronet | ~11× | Toll road with petchem capex risk, tariff-regulation risk and Qatar FM |
| Global CGD (ENN, China Resources Gas) | ~10× P/E, ~8× EV/EBITDA | [V-snip TipRanks/Yahoo 2026] |

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 The molecules and products
| Product | What it is | Unit sold | Main customers | Members |
|---|---|---|---|---|
| **CNG** | Natural gas compressed to ~200–250 bar at a filling station | ₹/kg | Private cars (~48–50% of IGL CNG), commercial vehicles (~19%), taxis (~14%), buses (~12%), autos (~7–8%) [V PL IGL] | IGL, MGL, ATGL |
| **PNG-Domestic** | Piped gas to household kitchens (metered) | ₹/scm | Households (176.9 lakh connections nationally, Aug-2026 [V]) | IGL, MGL, ATGL |
| **PNG-Commercial** | Piped gas to hotels, restaurants, hospitals | ₹/scm | 56,378 connections nationally [V] | IGL, MGL, ATGL |
| **PNG-Industrial** | Piped gas to factories (ceramics, glass, food, metals, textiles) | ₹/scm (often ₹/mmbtu) | 22,964 connections nationally [V]; competes with LPG, propane, FO, LSHS, coal | IGL, MGL, ATGL (also Gujarat Energy/Morbi) |
| **R-LNG** (regasified LNG) | LNG shipped at −162°C, unloaded, stored, re-vaporised into the grid | ₹/mmbtu regas tariff; gas value pass-through | GAIL, IOC, BPCL, GSPC, Torrent, fertiliser, power, refineries, CGD | Petronet |
| **LPG** (propane/butane) | Liquefied petroleum gas, imported by VLGC (Very Large Gas Carrier), stored in refrigerated or pressurised tanks | ₹/MT terminalling fee; ₹/MT trading margin | OMCs (IOC, BPCL, HPCL), industry, commercial users, auto-LPG | Aegis (and AVTL) |
| **Liquid bulk** | Chemicals, POL, vegetable oils, bitumen | ₹/KL/month storage + throughput fee | Chemical traders, OMCs, edible-oil importers | Aegis via AVTL |
| **New energy** | EV charging, CBG, LNG for trucks, ammonia storage | Various | — | ATGL (EV ~5,100 points, 2 CBG plants), IGL (CBG, EV; first LNG operation with CONCOR [V PL]), MGL (350-t/day MSW CBG plant [V PL], LNG trucking), Aegis (Pipavav ammonia terminal) [primer] |

### 1.2 The natural-gas value chain, and where each member sits
1. **Upstream production.** Domestic output comes from ONGC/OIL nomination fields (APM), Reliance-BP KG-D6 (deepwater, HPHT-ceiling priced) and Vedanta-Cairn and others.
   - **Gross production 34,776 mmscm in FY26 (−3.7%)**: PSC/JV fields −6.7%, ONGC nomination −1.7%, OIL −2.4% [V PPAC Ready Reckoner].
   - Apr–Sep 2026: **16,804 mmscm (−4.4%)**; Aug-2026: 2,830 mmscm (−4.7%) [V PPAC].
   - ONGC's APM output is ~22–23 mmscmd at Hazira, of which ~10 mmscmd went to CGD (Apr-2025) [V Outlook/PTI].
   - **Imported LNG: 26.0 mt (34,427 mmscm) in FY26, costing $13.4 bn** [V PPAC].
2. **LNG regasification (Petronet + 6 others).** India has **58.5 mtpa of terminals (1-Oct-2026)** [V PPAC snapshot].
   - Ships unload at Dahej (22.5 mtpa) or Kochi (5 mtpa). LNG is stored, vaporised and sent into the GAIL/GSPL grid.
   - **Petronet never sees the end customer.** It earns ₹/mmbtu.
3. **Trunk transmission.** Common-carrier operational network: **27,598 km** (30-Jun-2026). **GAIL owns 18,717 km (~68%)**, GSPL 2,916, PIL (the former East-West line) 1,497, IOCL 1,370. A further 5,991 km is under construction [V PPAC snapshot citing PNGRB].
   - Since **1-Jan-2026** the **unified tariff** applies: **₹54.00/mmbtu up to 300 km, ₹102.86/mmbtu beyond**. **CNG/PNG-D are always billed at Zone-1** [V PNGRB press release 16-Dec-2025].
   - ~90% of pipelines are under the unified tariff [V PPAC Ready Reckoner foreword].
4. **Gas marketing.**
   - GAIL implements both APM allocation to CGD and the 2026 priority order [V PTI].
   - Marketers (GAIL, IOC, BPCL, Shell, TotalEnergies, Adani) sell term and spot R-LNG.
   - **IGX** handles spot trades: 456 mmscm in Sep-2026 [V PPAC].
5. **City gate → CGD network (IGL, MGL, ATGL).** Steel pipelines (inch-km), then MDPE (medium-density polyethylene) networks, then district regulating stations, then CNG stations (online/mother/daughter-booster) and PNG meters.
6. **Retail.**
   - **CNG** is dispensed at company (COCO) stations or at OMC dealer forecourts. OMC retail outlets with CNG/LNG: **7,778** of ~1.04 lakh outlets [V PPAC snapshot]. Dealer commission is ~₹2–3/kg [K/E].
   - **PNG** is billed per scm (domestic bimonthly; industrial monthly).
7. **Parallel LPG chain (Aegis).** VLGC from Saudi Arabia/UAE/Qatar/US → Aegis/AVTL terminal (Kandla, Pipavav, Mangalore, Haldia, Kochi, JNPA) → OMC bottling plants (218 PSU plants, 23.2 mtpa bottling capacity [V PPAC]) or Aegis's own distribution (industrial bulk, auto-LPG, packed cylinders) [primer].

### 1.3 Where value is captured
- **The CGD last mile captures the most value per unit.**
  - A metro CGD earns **₹3.4–9/scm of EBITDA** on gas sold at ₹52–55/scm net realisation: IGL ₹52.1, MGL ₹54.7 in Q1 FY27 [V PL]. That is ~6–16% of net realisation.
  - The terminal earns ~₹2.6/scm (₹66/mmbtu ÷ 25.2) [V-snip tariff; E].
  - Zone-1 pipeline transport is ₹2.14/scm (₹54/mmbtu ÷ 25.2) [V PNGRB; E].
  - **In normal times a CGD earns ~2–3× the terminal's per-unit fee on far less capital per unit. In Q1 FY27 IGL earned only ~1.3× [E].**
- **The terminal moat is physical, but diluted.**
  - Only ~8–9 coastal sites have breakwater, draft and pipeline evacuation.
  - India has **58.5 mtpa of regas for ~27 mt/yr of imports** (Apr–Sep 2026 annualised: 18,189 mmscm × 2 ÷ 1,325 ≈ 27.5 mt) → **~47% national utilisation** [V; E].
  - A terminal's pricing power therefore rests on its **pipeline connectivity**. Dahej, at 91.9% FY26 utilisation, is the best connected [V PPAC].
- **LPG logistics.** Value sits in scarce port-side tankage with rail/road/pipeline evacuation, plus long-term OMC throughput contracts. The trading/distribution layer is high-volume and thin-margin (~₹4,000–7,000/t EBITDA) [primer].

---

## 2. Size and growth

### 2.1 India gas market: volumes (FY18–FY26, PPAC)
| FY | Gross production (mmscm) | LNG imports (mmscm) | LNG (mt) | LNG value ($ mn) | LNG $/mmbtu (avg) | Consumption (mmscm) | ≈ mmscmd | Import dependence | Tag |
|---|---|---|---|---|---|---|---|---|---|
| FY18 | — | 27,439 | 20.7 | 8,051 | 7.4 | — | — | — | [V RR Table 3.10] |
| FY19 | — | 28,740 | 21.7 | 10,253 | 9.0 | — | — | — | [V RR] |
| FY20 | ~31,200 [K] | 33,886 | 25.6 | 9,489 | 7.1 | ~64,100 [K] | ~176 | ~53% [K] | [V LNG; K rest] |
| FY21 | 28,672 | 33,198 | 25.1 | 7,881 | 6.0 | 60,981 | 167 | 54.4% | [V RR Table 3.4/3.10] |
| FY22 | 34,024 | 31,028 | 23.4 | 13,472 | 10.9 | 64,159 | 176 | 48.4% | [V] |
| FY23 | 34,450 | 26,304 | 19.9 | 17,114 | **16.4** | 59,969 | 164 | 43.9% | [V] (2022 price spike) |
| FY24 | 36,438 | 31,795 | 24.0 | 13,405 | 10.8 | 67,512 | 184 | 47.1% | [V] |
| FY25 | 36,113 | 35,720 | **27.0** | 14,908 | 10.6 | **71,314** | 195 | 50.1% | [V] (record) |
| FY26 | 34,776 | 34,427 | 26.0 | 13,356 | 9.8 | 68,753 | 188 | 50.1% | [V] |
| Apr–Sep FY26 | 17,585 | 17,414 | — | 6,900 | ~10.0 [E] | 34,773 | 190 | — | [V PPAC snapshot] |
| **Apr–Sep FY27** | **16,804** | **18,189** | ~13.7 [E] | **8,500** | **~11.8 [E]** | **34,769** | **190** | ~52% [E] | [V PPAC snapshot] |
| Aug-2026 | 2,830 (−4.7%) | 2,953 (+1.4%, prorated) | — | — | — | 5,857 (−0.7%) | 189 | — | [V PPAC monthly report] |
| Sep-2026 | 2,730 | 2,957 (−8.55%) | — | 1,200 | ~10.3 [E] | 5,653 (−6.67%) | 188 | — | [V PPAC snapshot] |

**Notes for the writer.**
- **India's gas demand is price-elastic.**
  - LNG imports fell to 19.9 mt in FY23, when the average landed price was $16.4/mmbtu, and recovered to 27.0 mt in FY25 at $10.6 [V].
  - Consumption fell again in FY26 (−3.6%), mainly in power (−10.5%), "others" (−11.7%), refinery (−5.8%) and fertiliser (−4.1%). **CGD grew 9.7%** [V PPAC monthly report].
- **Domestic production is falling.** From a FY24 peak of 36,438 mmscm it was down to 34,776 in FY26 and is falling a further 4–5% in FY27 [V].
- **The war did not reduce total Indian gas use in Apr–Sep 2026** (34,769 vs 34,773 mmscm). **LNG volume actually rose 4.5%** as buyers replaced Qatar at a higher price, and the import bill rose 23% [V; E].
- **Statistical Review cross-check:** India's CY2025 LNG imports were **35.4 bcm (4th largest in the world)** per the Energy Institute Statistical Review 2026, vs PPAC's 33.9 bcm for CY2025 [V PPAC Ready Reckoner note].

### 2.2 CGD's share and segment mix
- **CGD sales by segment (CGD entity data, mmscm) [V PPAC Ready Reckoner Table 3.12C]:**

  | FY | CNG | PNG-D | PNG-C | PNG-I | Total | mmscmd | CNG share |
  |---|---|---|---|---|---|---|---|
  | FY22 | 5,563 | 959 | 213 | 5,124 | 11,859 | 32 | 47% |
  | FY23 | 7,001 | 1,000 | 249 | 4,086 | 12,336 | 34 | 57% |
  | FY24 | 7,885 | 1,068 | 272 | 4,298 | 13,524 | 37 | 58% |
  | FY25 | 9,317 | 1,224 | 314 | 4,722 | 15,576 | 43 | 60% |
  | FY26 | **10,753** | 1,305 | 355 | 4,668 | **17,080** | **47** | **63%** |

  - **FY22–FY26 CAGR: total 9.5%; CNG 17.9%; PNG-D 8.0%; industrial PNG −2.3%** [E from V].
  - **The CGD growth story is entirely CNG.** Industrial PNG fell from 43% to 27% of CGD volume, and it collapsed in FY23 when LNG spiked.
  - **Half-years (mmscmd):** H1 FY26 45.5 → **H2 FY26 48.1** (CNG 30.5, PNG-D 3.8, commercial 1.0, industrial 12.8) [V RR Table 3.12B].
- **CGD share of national consumption (consumption basis): 21.1% in FY25 → 23.9% in FY26 → 28.5% in Aug-2026.** The Aug-2026 figure was 1,667 mmscm, +20.3% YoY, ~54 mmscmd [V PPAC monthly report].
  - CGD is now about as large as fertiliser (29.3% in Aug-2026).
  - **CGD is the only consistently growing large gas segment**, and it was protected at 100% (CNG/PNG-D) under the war-time order.
- **Domestic vs R-LNG supply to CGD (PPAC sector split) [V; E %]:**
  - FY26: domestic 10,256 mmscm (62%), R-LNG 6,260 (38%).
  - Aug-2026: domestic 910 (55%), R-LNG 757 (45%).
- **Members' CGD volume (~17.1 mmscmd FY26) ≈ 36% of national CGD volume** [E]. Adding Gujarat Energy (~10–12 mmscmd CGD, with Morbi swings) [V-snip], **the four listed majors are ~57–62%** [E].
- **State concentration of gas use (Aug-2026, all sectors, mmscmd)** [V PPAC monthly report]:
  - Gujarat 39.1, UP 29.3, Maharashtra 25.0, Rajasthan 11.4;
  - Haryana 9.0, MP 9.0, Western Offshore 9.0;
  - Tamil Nadu 7.9, Delhi 7.85, Assam 7.8.

### 2.3 ₹ size [E]
- **CGD retail market:** 17,080 mmscm × ~₹50/scm average net realisation ≈ **₹85,000 Cr/yr ex-tax**, ~₹1.0–1.05 lakh Cr including excise/VAT [E]. In USD: ~$9–11 bn at ₹94.9.
- **LNG import bill:** **$13.4 bn in FY26** (₹1.18 lakh Cr at the FY26 average of ₹88.31) [V; E]. Annualised Apr–Sep FY27: **~$17 bn** [E from V $8.5 bn H1].
- **Total natural gas market (delivered value):** ~69 bcm × ~₹40/scm ≈ **₹2.8 lakh Cr** [E].
- **Regas services:** ~1,366 TBTU × ~₹60/mmbtu ≈ **₹8,200 Cr/yr** of tolling-equivalent revenue nationally [E].
- **LPG:** 33.2 mt consumed in FY26 [V] × ~₹60,000/t ≈ **₹2.0 lakh Cr** retail value [E]. LPG import bill FY26 ≈ **$11.3 bn for 21.3 mt** (PPAC import table, read from a dense row; spot-check) [V-row].

### 2.4 Growth history and forecasts
- **Members' FY26 growth:** IGL 8.99 → 9.39 mmscmd (+4.5%); MGL +8.25% to 4.585; ATGL +14% to 1,133 mmscm [primer; V-snip].
- **Members' FY27 guidance and estimates:**
  - IGL FY27 capex **₹1,800–2,000 Cr** (₹1,200–1,500 Cr core CGD + ₹500–600 Cr diversification) [V PL]. PL estimates IGL volume at 10.0 mmscmd in FY27 [V PL]. The 10.67 mmscmd volume target is from earlier guidance [V-snip sahi].
  - MGL FY27 capex raised to **₹1,800 Cr** (from ₹1,200 Cr); it may borrow. PL builds in volume growth of **8.0%/11.2% for FY27/FY28** [V PL].
- **Forecasts:**
  - ICRA: national consumption **+3–4% in FY27** after a flat-to-down FY26 [V-snip BS 31-Dec-2025]. Apr–Sep 2026 was flat [V].
  - PNGRB/outlook studies: gas demand **+60% by 2030**, led by CGD [V-snip]. **All pre-date the 2026 war; haircut them.**
- **CNG stations:** 4,433 (Mar-22) → 5,665 (Mar-23) → 6,861 (Mar-24) [V-snip Lok Sabha] → **8,067 (1-Apr-25) → 8,916 (1-Apr-26, +10.5%) → 9,158 (31-Aug-26)** [V PPAC/PNGRB].
  - By state (31-Aug-26): UP 1,305, Maharashtra 1,234, Gujarat 1,096, Haryana 584, Karnataka 525, Tamil Nadu 499, **Delhi 459**, Rajasthan 457 [V PPAC snapshot].
- **PNG-D connections:** **150.4 lakh (1-Apr-25) → 169.5 lakh (1-Apr-26, +12.7%) → 176.9 lakh (31-Aug-26)** [V].
  - By state: Maharashtra 45.5 lakh, Gujarat 40.0, UP 23.4, **Delhi 20.1** [V].
  - Pro-rata MWP target (Apr-2026): 417.6 lakh [V-snip policyedge/PNGRB].
- **CNG cars:** FY25 CNG PV share 19.60% (~7.9 lakh units) → **FY26 21.98% (~10.3 lakh)** [V FADA share; V-snip units]. CNG is also **11.79% of commercial-vehicle retail** in FY26 [V FADA].

### 2.5 India's share of the global market
- **Global LNG trade 2025: a record 437 mt (+6.3%, the strongest growth since 2022)** [V IGU press release 7-Jul-2026].
  - The **US was the top exporter at 110.7 mt** [V]. Qatar 81.5 mt and Australia ~third [V-snip]. Europe's imports rose 26.1 mt [V] to 126.2 mt [V-snip]. China −8.9 mt [V-snip].
  - Liquefaction capacity **524.5 mtpa** at end-2025; FIDs **68.4 mtpa** in 2025 and 206 mtpa over five years [V IGU].
- **India's 26–27 mt ≈ 6% of global LNG trade.** India is the **4th-largest importer** (EI Statistical Review 2026: 35.4 bcm in CY2025) [V PPAC RR note].
- **India's regas capacity (58.5 mtpa) is ~5% of the world's ~1,113 mtpa** [V IGU (page typo "1,1113.5"); V PPAC; E].
- **Gas share of India's energy mix ~6%** vs a world average of ~23–24% [K, EI Statistical Review].
- **India is the world's 2nd-largest LPG importer** (21.45 mt in FY26 [V PPAC]) after China [K].

---

## 3. Demand drivers and end-markets (with numbers)

### 3.1 CNG for transport (CNG-T): 63% of national CGD volume, ~70–76% at metro CGDs
- **Mix.**
  - National CGD: CNG 63% in FY26 [V PPAC].
  - IGL: CNG 7.2 of 9.7 mmscmd (74%) in Q1 FY27 [V PL]. MGL: CNG 3.5 of 4.8 mmscmd (73%) [V PL]. ATGL: CNG 218 of 303 mmscm (72%), +18% YoY [V-snip IANS].
- **IGL's CNG by vehicle type (Q1 FY27 concall)** [V PL]:
  - cars 48–50%, commercial vehicles ~19%, taxis ~14%, buses ~12%, autos ~7–8%;
  - 70–80% of auto volume is in Delhi.
- **MGL:** ~6,000 CNG buses = only **4–5% of CNG volume** [V PL].
- **The driver is a running-cost gap, not policy.** Delhi CNG vs petrol per km [E, assuming a CNG hatch at ~25 km/kg and a petrol hatch at ~17 km/l; prices V unless noted]:

  | Date | CNG ₹/kg | Petrol ₹/l | Diesel ₹/l | CNG ₹/km | Petrol ₹/km | CNG saving per km | CNG/petrol per unit |
  |---|---|---|---|---|---|---|---|
  | Jan-2026 | 77.09 [V-snip] | 94.77 | 87.67 | 3.08 | 5.57 | ~45% | 0.81 |
  | 26-May-2026 | 83.09 [V-snip] | 102.12 | 95.20 | 3.32 | 6.01 | ~45% | 0.81 |
  | Oct-2026 | **86.98** | **102.12** | **95.20** | 3.48 | 6.01 | **~42%** | **0.85** |
  | Mumbai Oct-2026 | **89.00** | **111.21** | 97.83 | 3.56 | 6.54 | ~46% | 0.80 |

  - Sources: petrol/diesel from the PPAC daily RSP file (21-Oct-2026); Oct-2026 CNG from the PPAC snapshot (IGL website 13-Oct-2026).
  - **CNG still saves ~40–45% per km.** The August CNG-only hike (+₹3.89 [V-snip Deccan Herald]) gave back part of the gap that the May fuel hikes had widened.
  - IGL says it intends to "maintain a healthy delta with MS/HSD" [V PL]. MGL sees "room for CNG price hikes if MS and HSD prices increase" [V PL]. **Petrol is the price umbrella, and it is fixed by OMCs that are losing money.**
- **Vehicle pipeline.**
  - FY26 CNG PV retail share 21.98% (FY25 19.60%) [V FADA; V-snip FY25].
  - Maruti: >7 lakh CNG units in FY26; 2.2 lakh in Q1 FY27 (+58%); targets 9 lakh in FY27 [V-snip BusinessToday].
  - IGL: ~27,300 vehicle additions/conversions a month [V PL]. MGL: CNG vehicle base up 26,000 in a quarter to 1.31 mn [V PL].
  - **Every new private CNG car adds ~1.0–1.8 scm/day of demand** [E]. So 10 lakh new CNG cars a year ≈ **+1.0–1.8 mmscmd per year**, ~2–4% of national CGD volume [E].

### 3.2 PNG-Domestic: small volume, sticky, politically favoured
- **National PNG-D volume** was 1,305 mmscm in FY26 (~3.6 mmscmd, 8% of CGD) on ~160–170 lakh connections. That is **~0.22 scm per connection per day** [V; E]. A large minority of connections are inactive.
  - MGL: ~3.3 mn connected households but only ~2.3 mn active consumers; addressable market 3.8–4.0 mn [V PL].
- **The 2026 LPG shock made PNG the government's preferred substitute.**
  - PNG Drive 2.0 (Jan–Jun 2026). MGL added a record 97,000 PNG-D connections in Q1 FY27; IGL ~1 lakh, taking it past 35 lakh [V PL].
  - **Incentive Scheme for Promotion of Domestic PNG Connections** (from 1-Sep-2026, two tranches over six months) [V Business Today 22-Aug-2026]:
    - **+200 scm of APM gas per incremental billed PNG-D connection** above each GA's threshold;
    - the extra APM substitutes LNG in the CNG segment;
    - the government claims D-PNG payback falls from ~10 years to ~3.
  - MGL expects PNG-D volume growth of 7–8% (vs a normal 5–6%) for 2–3 years [V PL].
- **PNG is cheaper than LPG.** Delhi PNG-D at ₹50.59/scm [V]; 1 scm ≈ 0.9 kg of LPG in heat. The Delhi domestic LPG cylinder is ₹942 for 14.2 kg = ₹66/kg [V PPAC; E].
- **Margin on D-PNG is thin** because prices are politically sticky. Its value is that it secures **APM priority allocation** and network density.

### 3.3 PNG-Industrial & Commercial (I/C): the price-taker
- **National industrial PNG: 4,668 mmscm in FY26 (27% of CGD)**, down from 5,124 in FY22 [V PPAC]. Metros are low (IGL ~13–14%); Gujarat (Morbi ceramics) is high.
- **It competes against propane, LPG, furnace oil, LSHS, pet-coke and coal.** Pricing is linked to alternate fuels or Brent/HH/JKM, and it gets no APM.
- **War effects:**
  - The **2026 order capped CGD I/C users at 80% of their six-month average** [V PTI]. MGL's PNG-I/C volume fell 9.9% QoQ as a result [V PL].
  - **MGL's I&C realisations rose 70–80% YoY**, up ₹27–32/scm QoQ; commercial rose more than industrial [V PL].
- **The Morbi lesson.** Gujarat Energy's Morbi volume went ~0.4 mmscmd (Apr-2026) → ~8 mmscmd (May–Jun) → ~3 mmscmd as propane supply returned. Indicative prices: PNG ~₹78/scm vs propane ~₹65/scm [V-snip PL/multibagg]. **I/C volume is a swing load.**

### 3.4 LNG demand (Petronet's drivers)
- **R-LNG by sector, FY26** [V PPAC monthly report; E %]:
  - fertiliser 16,762 mmscm (85% of fertiliser gas);
  - CGD 6,260;
  - refinery 4,264; others 3,795; power 2,407; petchem 2,045.
- **Price elasticity is the key.** Imports were 19.9 mt at $16.4 (FY23) and 27.0 mt at $10.6 (FY25) [V]. Petronet's utilisation is high when LNG is <$10–11/mmbtu and low above ~$14–15 [primer; E].
- **2026:** Apr–Sep imports rose 4.5% despite the war, because fertiliser and CGD are price-inelastic priority users [V PPAC]. Sep-2026 fell 8.55% YoY [V].
- **Petronet's share: ~66% of India's LNG (FY26)** [E from V]. Dahej alone ~61% (833 of 1,366 TBTU) [E].

### 3.5 LPG demand (Aegis's drivers)
- **LPG balance (TMT) [V PPAC Ready Reckoner Table 7.1]:**

  | FY | Production | Consumption | Imports | Import dependence |
  |---|---|---|---|---|
  | FY21 | 12,072 | 27,540 | 16,476 | 56% |
  | FY22 | 12,238 | 28,253 | 17,125 | 57% |
  | FY23 | 12,831 | 28,503 | 18,309 | 55% |
  | FY24 | 12,778 | 29,663 | 18,461 | 57% |
  | FY25 | 12,785 | 31,328 | 20,840 | 59% |
  | FY26 | 13,035 | **33,172** | **21,454** | **61%** |

  - FY26 PSU sales: domestic packed 28,747 kt, non-domestic 2,990, bulk 1,150, auto-LPG 69. Private direct imports 217 kt [V].
- **3,267 lakh active domestic customers (1-Oct-2026), including 1,057 lakh PMUY** [V PPAC snapshot].
- **2026 shock (Apr–Sep 2026 vs Apr–Sep 2025)** [V PPAC snapshot]:
  - consumption 13.70 mt vs 16.22 (−15.5%); domestic packed −13.5%; non-domestic −10.2%; **bulk −61.8%**; auto-LPG +34.2%; private direct imports −93%;
  - domestic production 7.9 mt vs 6.3 (refiners told to maximise LPG [V-snip onmanorama]);
  - POL imports fell 47.7%, "mainly due to reduction in imports of LPG" [V PPAC].
- **The supply response favours Aegis.**
  - OMCs signed a **2.2 mt US LPG deal for 2026** [V-snip S&P]. US cargoes are long-haul VLGCs into west-coast terminals, which is Aegis/AVTL's core geography.
  - **Aegis Q1 FY27:** LPG logistics volume held (~1,124 vs 1,161 kMT) while distribution almost doubled (277 vs 145 kMT) [V-snip investor deck chart labels]. Its private distribution book gained share from rationed OMC commercial and bulk supply.

---

## 4. Supply side and cost structure

### 4.1 Inputs for a CGD company (₹ at ₹94.9/$ and 25.2 scm/mmbtu)
| Cost element | $/mmbtu | ₹/scm | Driver | Tag |
|---|---|---|---|---|
| APM gas (ceiling) | 7.00 (FY27) | 26.4 | Govt ceiling × FX; allocation % | [V price; E ₹] |
| New-well gas (12% of ICB) | ~10.8 (Aug-26 ICB 90) – 13.9 (Sep-26 ICB 116) | 41–52 | ICB, FX | [V formula & ICB; E] |
| HPHT/deepwater (KG-D6) | 8.90 (Apr–Sep 26) → **9.89** (Oct-26–Mar-27) | 33.5 → 37.2 | ceiling × FX | [V; E ₹] |
| "Pooled" gas (MGL, Q1 FY27) | 12.5–13 | 47–49 | pool of APM/NWG/LNG | [V PL MGL] |
| Henry Hub-linked US LNG | HH × 1.15 + ~$2.5–3 liquefaction + ~$1–2 freight ≈ ~$8–10 [K/E] | 30–38 | Henry Hub, freight | [E] |
| Term R-LNG (Brent-linked, ~12% slope) | ~$11–14 at Brent $90–116 | 41–53 | Brent, slope, FX | [E] |
| Spot LNG / IGX | 16–28 (GIXI Apr-26 16.8; Sep-26 28.4) | 60–107 | JKM, Hormuz | [V GIXI; E] |
| Pipeline tariff (Zone-1 unified) | ₹54/mmbtu | 2.14 | PNGRB | [V] |
| Compression power (CNG) | — | ~1.5–2.5 | Electricity tariff | [E/K] |
| OMC dealer commission (CNG) | — | ~1.5–2 (₹2–3/kg) | Contracts | [E] |
| Employee + O&M + other opex | — | IGL 5.5, MGL 5.8 (Q1 FY27, all opex) | Network age, density | [V PL] |
| Central excise (CNG 14% of value) + state VAT | — | passed through | Govt | [K] |

**Reported gas cost per scm, Q1 FY27 [V PL]:** IGL **₹43.3** (₹36.8 in Q4 FY26, ₹35.2 in Q1 FY26); MGL **₹39.9** (₹35.2 in Q4 FY26, ₹32.3 in Q1 FY26). IGL's management put its average gas cost at ₹40–45/scm.

**Why IGL and MGL diverged (₹3.4 vs ₹7.9/scm) [V PL; E reasoning]:**
- **Sourcing.** IGL's 52% imported gas is mostly Brent-linked term plus some spot. MGL's mix had **only a residual Brent/spot slice** and **21–22% Henry Hub-linked LNG**. That kept MGL's cost ~₹3.4/scm below IGL's.
- **Pricing.** MGL raised CNG by ₹5/kg and PNG-D by ₹1/scm in Q1. Realisation rose to ₹54.7 vs IGL's ₹52.1.
- **Mix.** MGL's I/C realisations were up 70–80%.

**Sensitivities [E, at ₹94.9]:**
- Every 10 percentage points of APM ($7) replaced by $12 LNG adds ~$0.5/mmbtu ≈ **₹1.9/scm**, which is more than half of IGL's Q1 FY27 EBITDA/scm.
- **FX:** every ₹1/$ of depreciation adds ~1.05% to dollar-linked gas cost ≈ ₹0.4/scm on a ₹40–43 cost.
- **Crude:** every $10/bbl of ICB moves NWG (12%) by $1.2/mmbtu ≈ ₹4.5/scm on the NWG slice. At IGL's ~13% NWG share that is ~₹0.6/scm blended.

### 4.2 Where ₹100 of CGD revenue goes [E; composite of IGL FY26 standalone and MGL FY26; Q1 FY27 note]
| Bucket | ₹ of 100 (gross revenue incl. excise) | Notes |
|---|---|---|
| Central excise duty | ~10–11 | CNG at 14% of value; netted below the revenue line |
| Gas purchase cost (incl. transport) | ~62–66 (FY26) → ~70–74 (IGL Q1 FY27) | Gas cost was 83% of *net* sales for IGL in Q1 FY27 vs 75% a year earlier [V-snip Baroda BNP] |
| Employee costs | ~2 | — |
| Other opex (compression power, O&M, dealer commission, repairs) | ~8–10 | — |
| **EBITDA** | **~11 (IGL FY26) to ~16 (MGL FY26); ~6–7 (IGL Q1 FY27)** | IGL 1,850/16,451 = 11.2%; MGL 1,451/9,185 = 15.8% [primer]; IGL Q1 FY27 margin ~6.5–7.1% [V PL table] |
| Depreciation | ~2.5–4 | Heavy for new-GA builders |
| Other income (treasury) | +2 to +3 | IGL/MGL hold large cash balances |
| Tax (25%) | ~3 | — |
| **PAT** | **~8–9 (FY26)** | IGL 1,364/16,451 = 8.3%; MGL 847/9,185 = 9.2% |

ATGL: EBITDA 1,225/6,415 = 19.1% in FY26 but 14.2% in Q1 FY27 [V-snip]. Its percentage is higher because of its I/C mix and lower excise share, not better per-unit economics.

### 4.3 Where ₹100 of LNG-terminal revenue goes [E; Petronet FY26 standalone]
| Bucket | ₹ of 100 | Notes |
|---|---|---|
| Cost of LNG (Qatar back-to-back, pass-through) | ~85–87 | Moves with Brent |
| Regas & marketing gross margin | ~13–15 | — |
| Opex (power, consumables, O&M, employees) | ~2 | — |
| **EBITDA** | **~12–13** | ~₹5,500–5,800 Cr [E] |
| D&A + interest (Kochi/jetty leases) | ~2 | — |
| Other income | +1 to +1.5 | Large cash balance |
| Tax | ~3 | — |
| **PAT** | **~8.8** | 3,843/43,495 [V PAT; primer revenue] |

On the ~₹6,000 Cr of "true" service revenue (regas + margin), **EBITDA is ~90%** [E]. The economics are those of a toll road. FY26 PBT of ₹5,158 Cr includes ₹630 Cr of CY2022 use-or-pay dues collected in Q4 [V].

### 4.4 LPG terminal / Aegis cost structure [E; primer]
- **Liquids terminals:** revenue ₹644 Cr, EBITDA ₹472 Cr (**~73% margin**) [primer].
- **LPG sourcing & distribution:** revenue ₹7,689 Cr. Distribution EBITDA rose from **~₹4,000/t to ~₹7,000/t** by Q4 FY26 [primer]. Saudi CP-linked LPG averaged **$532/t in FY26** vs $605 in FY25 and **$646 in Sep-2026** [V PPAC snapshot, international LPG price].
- **Where ₹100 of Aegis revenue goes [E]:**

  | Bucket | ₹ of 100 |
  |---|---|
  | LPG purchase cost | ~78–80 |
  | Freight, port, handling | ~2–3 |
  | Opex | ~2 |
  | **EBITDA** | **~19** (1,599/8,333) |
  | D&A + interest | ~3–4 |
  | Tax | ~2–3 |
  | **PAT incl. minorities** | **~13** (1,107/8,333) |

### 4.5 Capacity and utilisation
- **LNG regas capacity and utilisation [V PPAC Ready Reckoner Table 3.9 and snapshot Table 21]:**

  | Terminal | Operator | Capacity (mtpa) | Util FY26 | Util Apr–Sep 2026 |
  |---|---|---|---|---|
  | **Dahej** | Petronet | 17.5 → **22.5** (expansion; 66% Q1 FY27 on 22.5 [V Petronet]) | **91.9%** | **68.45%** (Apr–Aug) |
  | Hazira | Shell Energy India | 6.0 | 27.2% | 42.4% |
  | Dabhol | Konkan LNG (GAIL) | 5.0 | 34.5% | 43.9% |
  | Kochi | Petronet | 5.0 | 26.3% | 23.63% (Apr–Aug) |
  | Ennore | IOC (Indian Oil LNG) | 5.0 | 25.1% | 26.2% |
  | Mundra | GSPC LNG | 5.0 | 17.4% | 26.9% |
  | Dhamra | Adani-TotalEnergies | 5.0 | 34.1% | **46.5%** |
  | Chhara | HPCL LNG | 5.0 | 6.2% | 6.0% |
  | **Total** | | **53.5 (1-Apr-26) → 58.5 (1-Oct-26)** | ~49% [E] | ~47% [E] |

  - The national FY26 utilisation was stated on a 52.7 mtpa base ("ranged from 6.2% (Chhara) to 91.9% (Dahej)") [V].
  - Pipeline: ICRA expects **77.5 mtpa by FY29** [V-snip ICRA]; Petronet's Gopalpur (5 mtpa, ~₹6,355 Cr) is under construction [primer].
  - **The war spread volume across terminals.** Non-Dahej terminals (Hazira, Dabhol, Dhamra) rose as spot cargoes arrived from the US/Atlantic. Dahej fell as Qatar's long-term cargoes stopped.
- **CGD:** network utilisation is not a KPI. The constraints are **gas allocation, CNG compressor capacity, and PNG conversion** (connections laid vs active).
  - MGL: 3.3 mn connected vs 2.3 mn active [V PL].
  - MGL network: 8,477 km of pipe, 519 CNG stations [V PL].
- **LPG terminals.**
  - Aegis LPG static capacity ~226,000 MT and throughput 5.15 mt (FY26) → **~23 turns/yr** [primer; E].
  - AVTL after the Mangalore acquisition: ~2,01,000 MT LPG and ~1.7 mn cbm of liquids [V-snip].
  - PSU LPG bottling capacity: 23.2 mtpa across 218 plants [V PPAC].

---

## 5. Industry structure

### 5.1 CGD: a patchwork of local monopolies
- **307 Geographical Areas (GAs)** authorised, giving **near-100% geographical coverage** [V PPAC Ready Reckoner foreword]. Before the 12th round, 300 GAs covered ~88% of area and ~98% of population [V-snip Energetica].
- **Who holds the GAs [K/E, approximate; not re-verified]:**
  - **ATGL** 53 (34 direct + 19 via IOAGPL) [primer].
  - **Torrent Gas** ~32–34. **Think Gas** (I Squared) ~16–20. **AG&P Pratham** ~12 (PPAC lists many "AGP City Gas"/"AGP CGD India" GAs [V RR GA table]).
  - **Megha City Gas:** many GAs in Karnataka, Tamil Nadu, MP, Telangana and Punjab [V RR GA table; count E].
  - **BPCL** ~25+ (incl. JVs). **HPCL** ~20+. **IOC** ~20+ standalone plus IOAGPL. **GAIL Gas** ~10+.
  - **Gujarat Energy** ~25. **IGL** 12. **MGL** 3–4. **IRM Energy** ~4–5. **Haryana City Gas** (Gurugram-2, Bhiwadi) [V RR].
  - Exact counts were not verified; use "approx.".
- **Concentration by VOLUME is high, by AREA low.** The legacy metro/state networks still carry the bulk. Gujarat + Maharashtra + Delhi + UP hold **74% of PNG-D connections** (13.0 of 17.7 mn) and **45% of CNG stations** (4,094 of 9,158) [V PPAC/PNGRB; E].
- **Listed CGD universe:** IGL, MGL, ATGL, Gujarat Energy (ex-Gujarat Gas), IRM Energy. **Unlisted:** Torrent Gas, Think Gas (I Squared Capital), AG&P (PE-backed), Megha, plus the PSU arms.
- **IGL associates:**
  - 50% of **Maharashtra Natural Gas (MNGL, Pune):** 2.19 mmscmd in Q1 FY27, +18% QoQ.
  - 50% of **Central UP Gas (CUGL, Kanpur):** ~2.5 mmscmd combined figure as stated in PL's note (verify split).
  - Together they add ~₹180 Cr to IGL's consolidated PAT [V PL; primer].

### 5.2 LNG terminals: listed vs unlisted
See §4.5 for the PPAC table.
- **Listed owners:** Petronet (Dahej, Kochi); Adani Total Gas's group sibling Adani-Total (Dhamra, unlisted JV); GAIL (Dabhol via Konkan LNG); IOC (Ennore); HPCL (Chhara).
- **Unlisted:** Shell (Hazira); GSPC LNG (Mundra; GSPC group, now within the Gujarat Energy structure [V-snip]).
- **Petronet ≈ 27.5/58.5 = 47% of capacity but ~66% of volume (FY26)** [V; E].

### 5.3 LPG terminals
- **Owners:**
  - OMCs (IOC, BPCL, HPCL) own most import terminals; there is also HPCL's Mangalore cavern.
  - **Aegis/AVTL** is the largest independent third-party LPG and liquid tankage operator.
  - Adani has the Mundra LPG terminal. Haldia is Aegis's ~75% subsidiary Hindustan Aegis LPG. Reliance is captive [primer].
- **AVTL claims to be India's largest third-party tank-storage platform** [primer].

### 5.4 Imports and China
- **No China angle in pipes.** City gas is a non-tradable local service.
- **China's LNG demand is a price swing factor.** China's imports fell 8.9 mt in 2025 [V-snip IGU]; that moves JKM, and therefore Indian LNG affordability.
- **Equipment:** CNG compressors, dispensers and MDPE pipe are partly imported. Indian makers include Kirloskar Pneumatic [K].

---
## 6. Business models inside the sub-sector (the archetypes)

| # | Archetype | Members | Revenue driver | Margin driver | Capital intensity | Key risk |
|---|---|---|---|---|---|---|
| 1 | **Mature metro CGD** | IGL, MGL | Volume growth 5–9%; CNG-heavy | Gas-sourcing mix (APM/HH vs Brent/spot), pricing pass-through, opex density | Rising: IGL ₹1,800–2,000 Cr and MGL ₹1,800 Cr capex in FY27 [V PL] | APM cuts, EV substitution (autos, buses), exclusivity expiry |
| 2 | **Growth CGD (new GAs)** | ATGL (also Torrent, Think, AG&P, IRM, Megha) | Volume growth 12–20% from a low base | Fixed-cost absorption; I/C pricing | High (₹1,000–1,500 Cr/yr for ATGL [E]) | Slow ramp, MWP penalties, capital cost, sponsor risk |
| 3 | **Regas toll terminal** | Petronet | Throughput × tariff, plus use-or-pay, plus trading | Utilisation, tariff escalation, marketing margin | Lumpy (₹2,000–6,000 Cr expansions; ₹20,685 Cr petchem [primer]) | LNG price elasticity, tariff regulation, Qatar FM, overcapacity |
| 4 | **Port tank-storage (liquids + LPG)** | Aegis via AVTL | Static capacity × rental + throughput fees | Utilisation, contract tenor, ₹/KL/MT | Medium-high (₹500–2,000 Cr per terminal) | Port concession terms, execution, customer concentration |
| 5 | **LPG sourcing & distribution** | Aegis | Volume (MT) | ₹/t spread over Saudi CP | Low (working capital) | Price/inventory risk, sanctions-screening (cf. the Adani OFAC/LPG case) |

**How their economics differ [E]:**
- **RoE:** IGL ~14% (down from 20%+); MGL ~16–18%; ATGL ~13%; Petronet ~19%; Aegis ~16–18% [primer; E].
- **Payback:**
  - A metro CNG station: ₹3–5 Cr, 2–4 years [E].
  - A greenfield GA: ₹500–1,500 Cr over 8 years, breaking even in ~6–8 years [E/K].
  - D-PNG capex: ~10 years per the government, ~3 years with the new 200-scm incentive [V BT].
  - A 5 mtpa terminal: ₹4,500–6,500 Cr (Gopalpur ₹6,355 Cr [primer]).

---

## 7. Regulation and policy

### 7.1 Regulators and their roles
- **MoPNG:** allocation policy (10-Aug-2022 guideline [V]), domestic gas pricing (7-Apr-2023 APM notification; 21-Mar-2016 HPHT notification [V PPAC notifications cite both]), and emergency orders (9/10-Mar-2026).
- **PPAC:** notifies the APM monthly price and the HPHT half-yearly ceiling (the DG signs) [V]; publishes data.
- **PNGRB:**
  - authorises CGD GAs and pipelines;
  - sets pipeline/CGD network tariffs (the unified tariff [V]);
  - sets the MWP, exclusivity and open access, and safety rules.
  - It **does not set retail CNG/PNG prices** [K].
- **GAIL:** nodal agency for APM allocation and for implementing the war-time priority order [V PTI].
- **State governments:** VAT on gas (Delhi CNG 5% [K]; Gujarat 15% [V-snip FIPI]) and EV policies (Delhi EV Policy 2026 [V]).
- **Courts:** the 1998 Supreme Court CNG order (M.C. Mehta) [K].

### 7.2 Domestic gas pricing: APM and HPHT history
**Monthly APM formula vs ceiling, Apr-2024 to Oct-2026 [V PPAC snapshot Table 23; Oct-2026 V PPAC notification 30-Sep-2026]:**

| Month | Formula $ | Price paid (ceiling-capped) $ | Month | Formula $ | Price paid $ |
|---|---|---|---|---|---|
| Apr-24 | 8.38 | 6.50 | Aug-25 | 7.02 | 6.75 |
| May-24 | 8.90 | 6.50 | Sep-25 | 6.99 | 6.75 |
| Jun-24 | 8.44 | 6.50 | Oct-25 | 6.96 | 6.75 |
| Jul-24 | 8.24 | 6.50 | **Nov-25** | 6.55 | **6.55** |
| Aug-24 | 8.51 | 6.50 | **Dec-25** | 6.48 | **6.48** |
| Sep-24 | 7.85 | 6.50 | **Jan-26** | 6.25 | **6.25** |
| Oct-24 | 7.48 | 6.50 | **Feb-26** | 6.21 | **6.21** |
| Nov-24 | 7.53 | 6.50 | Mar-26 | 6.81 | 6.75 |
| Dec-24 | 7.29 | 6.50 | Apr-26 | 10.76 | 7.00 |
| Jan-25 | 7.30 | 6.50 | **May-26** | **11.59** | 7.00 |
| Feb-25 | 7.94 | 6.50 | Jun-26 | 10.93 | 7.00 |
| Mar-25 | 7.80 | 6.50 | Jul-26 | 8.73 | 7.00 |
| Apr-25 | 7.26 | 6.75 | Aug-26 | 7.86 | 7.00 |
| May-25 | 6.93 | 6.75 | Sep-26 | 9.00 | 7.00 |
| **Jun-25** | 6.41 | **6.41** | **Oct-26** | **11.22** | **7.00** |
| Jul-25 | 6.89 | 6.75 | | | |

**HPHT/deepwater ceiling (half-yearly) [V PPAC]:** Apr–Sep 2024 **9.87** · Oct-24–Mar-25 **10.16** · Apr–Sep 2025 **10.04** · Oct-25–Mar-26 **9.72** · Apr–Sep 2026 **8.90** · Oct-26–Mar-27 **9.89**.

**Earlier history [K PPAC; not re-fetched]:**

| Period | APM ($/mmbtu) | HPHT ceiling ($/mmbtu) |
|---|---|---|
| Apr–Sep 2021 | 1.79 | 3.62 |
| Oct-21–Mar-22 | 2.90 | 6.13 |
| Apr–Sep 2022 | 6.10 | 9.92 |
| Oct-22–Mar-23 | **8.57** (peak) | **12.46** (peak) |
| Apr–Sep 2023 | — | 12.12 |
| Oct-23–Mar-24 | — | 9.96 |

From 8-Apr-2023 the Kirit Parikh formula applies: 10% of ICB, floor $4, ceiling $6.50 [V-snip; the notification date of 7-Apr-2023 is cited in the PPAC notification, V].

- **Reading the table.**
  - The **ceiling is worth ~$4/mmbtu to CGD at Oct-2026 crude** ($11.22 − $7.00), ≈ **₹16/scm** of subsidy on every APM scm [E]. That is why APM *allocation* is the whole game.
  - In H2 FY26, with crude at ~$62–66, the formula fell below the ceiling. APM was briefly "market priced" at $6.21–6.55.
- **The Parikh path.** The committee envisaged **ceiling increases of $0.50/yr** and APM freeing by 2027 [V-snip ICRA]. **Actual increases: $0.25/yr.** The next decision is the Apr-2027 ceiling: $7.25 if the pattern holds [E].
- **HPHT fell** for Apr–Sep 2026 ($8.90) because the formula uses lagged global fuel prices (pre-war). It rose to $9.89 for Oct-2026 [V; mechanism K].

### 7.3 Allocation policy: the APM squeeze, step by step
| Date | Event | Tag |
|---|---|---|
| 10-Aug-2022 | MoPNG guideline: APM to CGD for the priority CNG-T and PNG-D segments, "only up to the quantity available" | [V Outlook/PTI 18-Apr-2025 citing it] |
| 16-Oct-2024 | APM to CGD for CNG cut ~20%; IGL/MGL shares fall ~20% in a session | [primer; V-snip] |
| 16-Nov-2024 | Further ~20% cut (IGL −40% in two months; MGL −18%; ATGL −13%) | [V-snip samco/angelone] |
| 31-Dec-2024 | APM diverted from LPG-extraction plants to CGD: IGL +31% (CNG domestic share 37% → 51%), ATGL +20%, MGL +26% | [V-snip angelone] |
| 16-Apr-2025 | GAIL cuts APM up to 20%: IGL −20% (backfilled with NWG at 125% of the reduced volume), MGL −18%, ATGL −15%. **APM = 34% of CGD requirement (51% a year earlier)**. Cumulative cut 45% since the start of FY25. ONGC NWG supply rises to 6.8 mmscmd | [V Outlook Business/PTI 18-Apr-2025] |
| Q1 FY26 | MoPNG moves to two-quarter-advance pro-rata allocation including NWG: 54.68% (Q3 FY25), 55.68% (Q1 FY26), 54.74% (Q2 FY26 projected) | [V-snip Energetica] |
| FY26 | CGDs sign 15–20% long-term NWG contracts; CRISIL expected margin recovery to ₹7.2–7.5/scm | [V-snip Outlook/CRISIL Feb-2026] |
| Q4 FY26 | ATGL APM share for CNG ~36% (41% the quarter before) | [primer] |
| 9/10-Mar-2026 | **Natural Gas (Supply Regulation) Order:** CNG-T/PNG-D/LPG production 100%; fertiliser 70%; grid industry 80%; CGD I/C 80%; refineries ~65%; petchem then power curtailed | [V PTI via Outlook 10-Mar-2026] |
| Q1 FY27 | IGL sourcing: APM ~2.6 mmscmd (~27% of volume), NWG 1.26, HPHT 0.6–0.7; domestic 48%. MGL: APM 30% | [V PL] |
| 1-Sep-2026 | **PNG incentive:** +200 scm APM per incremental billed PNG-D connection, two tranches over six months | [V Business Today 22-Aug-2026] |

**Writer's framing.**
- **APM is a depleting asset** (−9–10%/yr [V]). Its allocation keeps shrinking, with politically timed top-ups (Jan-2025; Sep-2026).
- **CGD margins are structurally moving from "APM-subsidised" (₹7–12/scm in FY21–FY24) to "market-gas" economics (₹3.5–8/scm).** The fixes are price hikes, cheaper (HH-linked) LNG, or more NWG/HPHT.
- **NWG is no longer cheap.** At 12% of a $116 ICB it costs $13.9 [E].

### 7.4 PNGRB CGD regime
- **Bidding rounds [K/V-snip]:**
  - Rounds 1–8 (2008–2017): ~92 GAs.
  - **9th** (2018): 86 GAs. **10th** (2018–19): 50. **11th** (2021–22): 61. **11A** (2022): a few.
  - **12th/12A** (launched Oct-2023, awarded Mar-2024): 8 GAs in the North-East, J&K and Ladakh [V-snip].
  - **Total 307 GAs** [V PPAC]. A 13th round was not found.
- **Bid criteria (9th round onward):** weights on PNG connections, CNG stations and inch-km committed (the MWP). This produced very aggressive MWP commitments [K].
- **MWP 2034 national targets:** 12.63 crore PNG-D connections, 18,336 CNG stations, 5.46 lakh inch-km [V-snip policyedge/Lok Sabha].
  - **Achieved:** 1.77 crore PNG-D (Aug-2026) = **14% of the 2034 target**; 9,158 CNG stations = **50%** [V; E].
  - **PNG-D is far behind; CNG stations are on track** (ahead of pro-rata at Nov-2024 [V-snip]).
  - Only 55 GAs had met their MWP by Mar-2026 [V-snip PNGRB MIS].
- **Exclusivity:** 25 years for infrastructure; 5 or 8 years for marketing (trap 11). IGL Delhi and MGL Mumbai are past marketing exclusivity [primer; K].
  - IGL has "conditionally accepted" previously litigated pockets of Gurugram; most of Faridabad stays with another operator [V PL].
- **Network tariff and compression charge:** PNGRB-determined per GA. It matters for open access [K].

### 7.5 Unified pipeline tariff
- **1-Apr-2023:** unified tariff with three zones [K].
- **1-Jan-2026 (PNGRB press release, 16-Dec-2025):** **two zones, ₹54.00/mmbtu (≤300 km) and ₹102.86/mmbtu (>300 km)** [V].
  - **CNG and D-PNG are charged Zone-1 nationwide**, "resulting in nearly 50% lower transportation charges for consumers located beyond 300 km".
  - Savings **~₹1,000 Cr/yr**; delivered prices fall by **CNG ₹1.25–2.50/kg and D-PNG ₹0.90–1.80/scm** [V PNGRB].
  - ATGL cut prices by up to ₹4 [V-snip].
  - **Beneficiaries:** GAs far from the gas source (ATGL's UP/Rajasthan/Odisha GAs, Torrent, Think), more than Gujarat/Mumbai.
  - The zone-reduction amendment itself is dated **7-Jul-2025** per a Lok Sabha answer [V-snip].
- **8-Oct-2026 draft:** brings **all** natural-gas pipelines into the unified tariff; comments closed 23-Oct-2026 [V-snip PNGRB public notice]. ~90% are already covered [V PPAC RR].

### 7.6 Taxes
- **Natural gas is outside GST.** "GST Council shall recommend the date on which GST shall be levied on petroleum crude, HSD, MS, natural gas and ATF" [V PPAC snapshot tax table].
  - CNG bears **14% central excise**. States levy VAT (Delhi CNG 5%; UP/AP 14.5%; Gujarat 15%; MP 14% [V-snip FIPI; K]).
  - CGD companies cannot claim input tax credit on capex GST [K/E].
- **Apr-2026:** a committee recommended gas be brought into GST at a lower slab with full ITC, plus removal of excise on CNG [V-snip taxo.online 17-Apr-2026]. No GST Council decision was found.
- **Petrol/diesel excise cut (26-Mar-2026):** petrol **₹11.90/l**, diesel **₹7.80/l** [V PPAC]. This cut in liquid-fuel tax **narrows CNG's tax advantage** (CNG excise is ad valorem at 14%). The pump prices then *rose* in May.
- **LPG:** domestic LPG GST 5%, basic customs duty Nil for PSU domestic imports (5% for other importers of domestic LPG); non-domestic LPG GST 18% [V PPAC snapshot]. **This duty asymmetry matters for Aegis's private LPG imports.**

### 7.7 CBG (compressed biogas) blending obligation
- **The CBO:** 1% of CNG + PNG-D consumption in FY26, 3% in FY27, 4% in FY28, 5% from FY29. It was voluntary to FY25 and mandatory from Apr-2025 [V-snip gktoday/vikaspedia].
- **CBG sales (PPAC):** **42.7 kt in FY25 → 96.5 kt in FY26 → 88.4 kt in Apr–Sep 2026 alone**. CBG is sold in 135 GAs; 194 plants have commissioned and started sales; 629 GAIL–CGD tripartite agreements exist [V PPAC snapshot]. PPAC counts 180 plants operational at end-FY26 [V RR].
- **FY26 compliance: 1.05% vs the 1% target** [V-snip swarajya, Puri reply 6-Aug-2026]. That squares with 96.5 kt against an NRI-implied 87 kt mandate [V-snip; E].
- **FY27 implies ~310 kt** [V-snip NRI]. H1 delivered 88 kt, so the run-rate is ~57% of mandate [E]. **Expect shortfall or a relaxation.**
- CBG costs more than APM (~₹72–80/kg ex-plant [K/E]), a ~₹0.3–0.6/scm drag at 3–5% blending [E].

### 7.8 EV and transport policy (the demand-side regulator)
- **Delhi EV Policy 2026 ("EV Policy 2.0"):** in force **1-Jul-2026 to 31-Mar-2030**; outlay ~₹15,000 Cr over four years [V EV Infrastructure News 7-Jul-2026].
  - **From 1-Jan-2027:** only electric autos and electric light goods carriers may be newly registered.
  - **From 1-Apr-2028:** no new petrol/CNG two-wheelers.
  - Incentives: e-3W subsidy ₹50,000/40,000/30,000 and e-2W ₹30,000/20,000/10,000 in years 1–3. Road-tax waiver for EV cars up to ₹30 lakh (hybrids excluded). >30,000 charge points planned in NCR.
- **IGL's own estimate:** the Delhi mandate costs **<1% of CNG volume in FY27 and ~2–3% by 2030**, removing ~5,000–6,000 autos a year. Autos fall from 7–8% to ~2–3% of IGL's CNG [V PL].
- **Buses:** DTC CNG volume at IGL went to **zero** in Q1 FY27 (from ~1.5 lakh kg/day); DIMTS stays ~1.5 lakh kg/day [V PL]. The Delhi bus-fleet shift to electric is effectively complete for DTC.
  - Mumbai: ~6,000 CNG buses = 4–5% of MGL's CNG; private operators "likely to continue favouring CNG" [V PL].
- **National:** PM E-DRIVE and PM e-Bus Sewa (10,000 e-buses) [K].

---

## 8. History and cycles

### 8.1 Phases
1. **Birth by court order (1995–2004).**
   - MGL (1995) and IGL (1998) were formed. The **1998 Supreme Court order** forced Delhi's buses, autos and taxis to CNG [primer; K].
   - **Petronet** was incorporated in 1998; **Dahej was commissioned in 2004 (5 mtpa)** [K].
2. **The APM-subsidy golden era (2005–2021).**
   - Cheap APM ($1.8–4.2 for much of 2014–2021 [K]) and CNG benchmarked to diesel/petrol: metro CGDs earned ₹6–9/scm with RoE of 20–25%.
   - The **PNGRB Act (2006)**; CGD bidding from 2008.
   - Dahej grew 10 → 15 → 17.5 mtpa. Kochi (2013) was stranded until the 2019–21 pipelines [K].
   - **MGL IPO Jul-2016** [K].
   - LNG landed at **$6.0–9.0/mmbtu in FY18–FY21** [V PPAC].
3. **CGD land-grab (2018–2022).**
   - The 9th–11th rounds took coverage to ~98% of the population [K].
   - **ATGL listed Nov-2018.** TotalEnergies bought 37.4% (2019–20) [K].
4. **The 2022 price shock.**
   - JKM hit a **record $59.67/mmbtu (3-Mar-2022)** [V-snip QCIntel].
   - India's average landed LNG price reached **$16.4/mmbtu in FY23** and imports fell to **19.9 mt** [V PPAC].
   - APM reached **$8.57** (Oct-2022) [K]. **The Parikh formula (Apr-2023)** capped APM at $6.50.
5. **Hindenburg (24-Jan-2023).** ATGL fell ~80% from its peak [K].
6. **The APM squeeze (Oct-2024 onward).** Repeated cuts; the Jan-2025 restoration; the Apr-2025 re-cut to 34% of requirement [V]; the ceiling raised to $6.75, then $7.00 [V]. IGL/MGL de-rated to ~13× [primer].
7. **Infrastructure listings and capacity (2025–26).**
   - **Aegis Vopak Terminals** IPO: ₹2,800 Cr; listed 2-Jun-2025 [V-snip].
   - Chhara commissioned [V PPAC list]. Dahej expanded to 22.5 mtpa (Q1 FY27 utilisation computed on the 22.5 base) [V Petronet].
   - India's regas capacity reached 58.5 mtpa by 1-Oct-2026 [V].
8. **The West Asia war (Feb/Mar-2026 onward).**
   - Two of 14 Qatari trains struck; FM from March, reviewed monthly; 56 Petronet cargoes affected by Aug [V Reuters].
   - The 9/10-Mar priority order [V]. The APM formula spiked to $11.59 (May) [V].
   - LPG consumption −15.5% (Apr–Sep) [V]. Petrol +₹7.35/l in May [V]. CNG hikes (May, Aug) [V-snip].
   - **Brent averaged $116.77 in Sep-2026** [V], a second spike.
9. **Adani legal overhang lifted (May–Aug 2026).**
   - **18-May-2026:** OFAC settlement by Adani Enterprises, $275m, for Iran-sanctions violations tied to LPG purchases [V-snip].
   - **Aug-2026:** the court dismissed the criminal charges against Gautam Adani, Sagar Adani and Vneet Jaain **with prejudice**, on the DOJ's motion (EDNY, Judge Garaufis) [V The Week 11-Aug-2026]. The SEC civil settlement ($18m total) was finalised [V-snip].
   - The OFAC case concerns LPG imports. It is relevant to the LPG-sourcing archetype, not to ATGL's CGD operations.

### 8.2 Cycles to explain
- **The CGD margin cycle is policy-driven.** EBITDA/scm (₹):
  - ~6–7 (FY19) → 8–9 (FY21) → ~4–5 (H1 FY23) → 8–12 (FY24) → 5–8 (FY26) [primer; K/E];
  - then **IGL 6.2 → 4.8 → 3.4** (Q1 FY26 → Q4 FY26 → Q1 FY27) and **MGL 9.6 → 6.2 → 7.9** [V PL].
- **The LNG cycle is price-driven.** Imports run 25–27 mt at ≤$11 and drop to ~20 mt at $16 [V PPAC].
  - Dahej utilisation: 91.9% (FY26) → 90.1% (Q4 FY26) → 66% (Q1 FY27, new base plus Qatar FM) [V].
  - **Petronet's PAT was flat at ₹3,650–3,950 Cr for three years** [primer; V FY25/FY26].
- **LPG is a secular import story:** imports 16.5 mt (FY21) → 21.5 mt (FY26) [V]. Supply shocks are episodic: the 2022 Saudi CP spike; the 2026 Hormuz closure.

---

## 9. Unit economics and native KPIs (definitions and drivers; benchmarks in §F)

### 9.1 CGD KPIs
1. **Sales volume (mmscmd)**, total and by segment.
   - National CGD 47 mmscmd (FY26) [V].
   - Q1 FY27: IGL 9.7 [V PL], MGL 4.8 [V PL], ATGL 3.3 standalone (303 mmscm/91 days) [V-snip; E].
2. **EBITDA/scm (₹).** Q1 FY27: **IGL 3.4, MGL 7.9** [V PL]; ATGL ~9.3 [E: ₹281 Cr ÷ 303 mmscm, V-snip inputs].
   - Through-cycle guidance: IGL **₹7** [V PL]; MGL **₹8–9** [V PL].
3. **Gross realisation, gas cost and gross margin per scm.**
   - IGL: realisation ₹52.1, gas cost ₹43.3, gross margin ₹8.8, opex ₹5.5 [V PL].
   - MGL: realisation ₹54.7, gas cost ₹39.9, gross margin ₹14.7, opex ₹5.8 [V PL].
4. **Sourcing mix (%)**: APM / NWG / HPHT / HH-LNG / Brent-LNG / spot. **The best single leading indicator of margin** (trap 4).
5. **CNG/petrol price ratio and ₹/km saving.** Delhi 0.85 and Mumbai 0.80 (Oct-2026) [V prices; E]. Above ~0.9, conversion momentum fades [E/K].
6. **Vehicle conversions/additions per month** (IGL ~27,300 [V]) and **CNG vehicle base** (MGL 1.31 mn [V]).
7. **CNG stations** and throughput per station (t/day). Metros 8–15 t/day; new GAs 2–5 [E].
8. **PNG-D connections and active ratio.** MGL 2.3 mn active of 3.3 mn connected = 70% [V PL; E].
9. **Inch-km** of steel pipeline (MWP metric); MGL network 8,477 km [V PL].
10. **Capex per GA and per mmscmd added;** capex/EBITDA.
11. **ROCE / RoE.**

### 9.2 Terminal KPIs (Petronet)
1. **Throughput (TBTU/quarter)** and **utilisation (%)**.
   - Q1 FY27: Dahej 192 TBTU (66%); company 207 TBTU (58%).
   - Q4 FY26: Dahej 201 (90.1%); company 219.
   - FY26: Dahej 833; company 901 [V Petronet].
2. **Regas tariff (₹/mmbtu)** and escalation: Dahej ~₹66 (2025), +5%/yr historically; Kochi ~₹114.5 [V-snip Argus].
3. **Long-term vs tolling mix.** Long-term contracts: Qatar 7.5–8.5 mtpa back-to-back to 2028/2048 [V-snip]; Gorgon (Exxon) 1.2 mtpa plus a separate 1.42 mtpa [V Reuters/Baird].
   - New regas contracts: a 5.5-year deal with a Deepak Fertilisers subsidiary [V-snip angelone] and a 5-year ONGC deal [V-snip].
4. **Use-or-pay recoveries:** ₹630.04 Cr in Q4 FY26 for CY2022 [V].
5. **Trading/inventory gains** (Q1 FY27: ~₹300 Cr trading + ~₹190 Cr inventory per PL [V-snip]). Petronet's own wording: "commercial and operational efficiency" [V].

### 9.3 LPG/terminal KPIs (Aegis/AVTL)
1. **LPG terminal throughput:** 5.15 mt in FY26 (+14%) [primer].
2. **LPG distribution volume:** 754 kMT in FY26 (+45%); Q1 FY27 277 kMT (+91%) [V-snip deck].
3. **Distribution EBITDA/t:** ~₹4,000 → ~₹7,000 (Q4 FY26) [primer].
4. **Static capacity:** LPG MT; liquids KL/cbm. Liquid tankage utilisation 85–95% for good terminals [K/E].
5. **Liquid terminal EBITDA margin:** ~73% [primer].
6. **Macro LPG gauges:** India's LPG import volume (21.45 mt FY26 [V]); private direct imports (217 kt FY26; collapsed to 13 kt in Apr–Sep 2026 [V]); Saudi CP ($646/t Sep-2026 [V]).

---

## 10. Global lens

### 10.1 Global LNG
- **2025:** 437 mt (+6.3%); the US largest exporter at 110.7 mt [V IGU]; Qatar 81.5 mt [V-snip]; Australia ~80 mt [K/E].
- **The coming wave:** 206 mtpa of FIDs in five years (68.4 mtpa in 2025 alone) and >1,100 mtpa proposed [V IGU]. Qatar's North Field East/South (+48 mtpa) [K]; US Plaquemines, Golden Pass, Corpus Christi Stage 3 [K].
  - **This wave was the bull case for cheap LNG and Petronet's utilisation from 2027.**
  - **The 2026 war took two of Qatar's 14 trains out for 3–5 years** [V Reuters (two trains); V-snip (duration)].
- **Volatility:** S&P measured JKM volatility at an average 94% over Mar–Sep 2026 [V-snip S&P 19-Oct-2026].
- **Contracting:** Qatar's 2024 renewal with Petronet (7.5 mtpa, 20 years to 2048, ~$78 bn) [V-snip]. Its slope was reported at ~12% vs the old 12.67%, unconfirmed [V-snip]. The current contract ends **Apr-2028** [V Reuters].

### 10.2 Global city-gas comparables [V-snip TipRanks/Yahoo/MarketScreener 2026; K]
| Company | Market | Model | P/E | EV/EBITDA | Notes |
|---|---|---|---|---|---|
| ENN Energy (2688.HK) | China | CGD + integrated energy | ~10–11× | ~8× | Retail gas margin ~RMB 0.5/m³ ≈ ₹6.5/scm [K/E] |
| China Resources Gas (1193.HK) | China | CGD | ~10× | ~8.4× | State-owned |
| HK & China Gas (0003.HK) | HK + China | Town gas | ~18–22× [K] | ~13× [K] | Regulated HK monopoly |
| Tokyo Gas (9531.T) | Japan | Gas utility + LNG | ~10–15× [K] | ~7–9× [K] | Deregulated retail |
| **IGL / MGL** | India | Metro CGD | ~13× | 9.9× / 7.6× FY27E [V PL] | Debt-free, net cash |
| **ATGL** | India | Growth CGD | ~125× | ~60×+ [E] | Outlier |
| **Petronet** | India | Regas | ~11× | ~6–7× [E] | — |

**Takeaways.**
- IGL/MGL now trade in line with Chinese CGD.
- ATGL's multiple has no global analogue.
- Indian metro per-unit margins (₹3.4–9/scm) bracket Chinese retail margins (~₹6.5/scm) [E].

### 10.3 Other comparables
- Royal Vopak (EV/EBITDA ~9–11× [K]); Excelerate Energy (FSRUs) [K].
- **Aegis's ~50× P/E is ~3× Vopak's** [E].

---

## 11. Technology and disruption risks

1. **EVs: the biggest structural threat, but by segment.**
   - **Three-wheelers:** EV share of L5 passenger reached **55.8% in Sep-2026**; L5 cargo 32.6% [V EVreporter]. All 3W retail (incl. e-rickshaws) was 60.95% EV in FY26 [V FADA].
     - **But autos are only ~7–8% of IGL's CNG**, and IGL sees a <1% hit in FY27 [V PL].
   - **Buses:** DTC CNG volume at IGL is already zero [V PL]. Every CNG bus replaced removes ~80–100 kg/day (~110–140 scm/day) [E].
     - Buses were ~12% of IGL's CNG [V], so most of the bus shift has already hit the base. MGL buses are 4–5% [V].
   - **Cars:** EV share of PV was **8.5% in Sep-2026** (FY26 4.25%) [V], vs CNG at ~22% of FY26 PV [V].
     - **CNG is still winning the "cheap fuel" race in private cars,** but EV share doubled within a year.
     - Cars are ~48–50% of IGL's CNG [V], so this is the slow-burn risk for 2028+.
   - **Taxis/aggregators** (~14% of IGL's CNG [V]): EV fleet programs are the medium-term risk [K].
   - **Net:** CNG volume growth persists for ~5+ years, but the mix shifts to private cars with lower usage per vehicle [E].
2. **Hydrogen / H-CNG blending:** pilots only; immaterial before 2030 [K].
3. **CBG:** mandated (§7.7). It is both an opportunity (CGD-owned plants; MGL's 350-t/day MSW plant [V PL]) and a cost [E].
4. **LNG for trucks:** nascent. IGL's first LNG operation is with CONCOR [V PL].
5. **Induction cooking vs PNG-D/LPG:** a slow, minor threat [K/E].
6. **For terminals:** FSRUs and overbuild (58.5 mtpa for ~27 mt [V]). Ammonia storage is an opportunity: Aegis's Pipavav terminal was transferred to a subsidiary for ₹525 Cr on 24-Aug-2026 [V-snip].
7. **Digital/smart metering, SCADA:** opex efficiency.

---

## 12. What to watch (leading indicators, events, pipelines)

**Monthly**
- **PPAC monthly gas report:** sector consumption, R-LNG vs domestic split for CGD, LNG imports. It is published ~6–8 weeks after month-end [V].
- **PPAC APM price notification** (last working day of each month) [V].
- **IGX GIXI** spot price (Sep-2026: $28.4) [V].
- **Brent/ICB** (Sep-2026: $116.77 / $116.09) [V].
- **Vahan/EVreporter:** CNG PV share and e-3W and PV EV penetration [V].
- **Delhi/Mumbai CNG vs petrol** prices [V].
- **PPAC LPG consumption** and private imports [V].

**Quarterly**
- MoPNG/GAIL APM allocation for the next two quarters.
- Company EBITDA/scm, volume, **sourcing mix** (APM/NWG/HPHT/HH/Brent/spot).
- Petronet TBTU/utilisation; Aegis LPG throughput and distribution EBITDA/t.

**Event calendar (as of 21-Oct-2026)**
1. **Q2 FY27 results** (late Oct to mid-Nov 2026; dates in the company file). Watch:
   - IGL EBITDA/scm after the Aug CNG hike and Sep–Oct NWG at $10.8–13.9;
   - Petronet under continued Qatar FM;
   - MGL's "gas costs to rise over the next 1–2 months" warning [V PL].
2. **Qatar FM / Hormuz.** Last firm data point: FM in force for Aug, no Sep plan (13-Aug-2026) [V Reuters]. Sep-2026 imports from Qatar were 94 kt [V-snip Kpler]. **Status on 21-Oct-2026 not found.**
3. **PNGRB final unified-tariff amendment** (comments closed 23-Oct-2026) [V-snip].
4. **PNG incentive scheme:** tranche-1 results (Sep–Nov 2026) and tranche 2 [V BT].
5. **Delhi e-3W-only registrations from 1-Jan-2027** [V].
6. **APM ceiling for Apr-2027** ($7.25 if the +$0.25 pattern holds) [E]. **HPHT ceiling for Apr-2027.**
7. **CBO 3% (FY27) compliance; 4% from FY28** [V-snip].
8. **Petronet:** expansion offtake tariffs (₹52.05?), the 2028 Qatar contract changeover, Gopalpur, PDH-PP petchem [V-snip/primer].
9. **GST on natural gas** (GST Council) [V PPAC note; V-snip committee].
10. **Aegis/AVTL:** Mangalore/Pipavav ramp; JNPA propane tank (51,998 MT, ₹142.5 Cr contract) [V-snip].
11. **Global LNG supply wave 2026–28** (US projects; Qatar NFE timing after the war) [V IGU FIDs].
12. **Gujarat Energy:** post-merger reporting; Morbi I/C demand vs propane.

---
## A. The forces that define this sub-sector (eight forces, in depth, with numbers)

An expert leads with forces 1–4. Forces 5–8 are what separate a good report from a generic one.

### Force 1. The state-rationed input: APM cuts and the shift to costlier HPHT/NWG/LNG
- **Mechanism.** CGD's priority segments (CNG-T, PNG-D) are entitled to APM gas "only up to the quantity available" (MoPNG guideline, 10-Aug-2022) [V].
  - ONGC's APM fields decline **9–10% a year** [V Outlook/PTI].
  - Each cut forces the CGD to buy NWG (12% of ICB), HPHT ($9.89 ceiling) or LNG.
- **The allocation path (each line uses its own denominator; see trap 4):**

  | Point in time | Measure | Value |
  |---|---|---|
  | Aug-2022 | Policy: APM for CNG-T/PNG-D | ~100% of need |
  | Apr-2024 | APM as % of CGD requirement | ~51% [V] |
  | Oct–Nov 2024 | IGL cuts | −20%, then −20% again (−40% in two months) [V-snip] |
  | Jan-2025 | IGL CNG domestic share after restoration | 37% → 51% [V-snip] |
  | Apr-2025 | APM as % of CGD requirement | **34%** [V]; cumulative −45% since Apr-2024 [V] |
  | H1 FY26 | Pro-rata ratio incl. NWG | ~55% [V-snip] |
  | Q4 FY26 | ATGL CNG APM share | 36% [primer] |
  | Q1 FY27 | IGL APM share of total volume | **~27%** (2.6 of 9.7 mmscmd); domestic total 48% [V PL] |
  | Q1 FY27 | MGL APM share | **30%** [V PL] |
  | National CGD | Domestic gas share | **62% (FY26) → 55% (Aug-2026)** [V PPAC] |

- **Price per mmbtu of each source today [V; E ₹ at ₹94.9]:**
  - APM $7.00 (₹26.4/scm).
  - HPHT $9.89 (₹37.2).
  - NWG ~$10.8–13.9 (₹41–52) at Aug–Sep 2026 crude.
  - Pooled gas $12.5–13 (₹47–49) [V PL MGL].
  - Spot/IGX $16.8–28.4 (₹63–107).
- **Effect on gross margin per scm (IGL, Q1 FY26 → Q1 FY27) [V PL; E]:**
  - Gas cost ₹35.2 → **₹43.3 (+₹8.1)**.
  - Realisation ~₹47.1 → **₹52.1 (+₹5.0)**.
  - Gross margin ₹11.8 → **₹8.8 (−₹3.0)**.
  - Opex ₹5.7 → ₹5.5.
  - **EBITDA/scm ₹6.2 → ₹3.4.**
  - Rule of thumb: **each 10 percentage points of APM replaced by $12 gas ≈ −₹1.9/scm** [E].
- **The twist of 2026.** With crude at ~$116 in Sep-2026, **NWG (12% of ICB) became dearer than HPHT and even than Henry Hub-linked LNG.** The "cheap domestic replacement" is no longer cheap.
  - That is why MGL (21–22% HH-linked LNG) held ₹7.9/scm while IGL did not [V PL; E].
- **Direction.** Structural decline. Top-ups (Jan-2025; the 200-scm PNG incentive from Sep-2026) are episodic and tied to policy goals.

### Force 2. CNG pricing power vs EVs and vs petrol/diesel
- **Price parity over time (Delhi, CNG ₹/kg ÷ petrol ₹/l):**
  - ~0.52 (early 2021: ~₹43 vs ~₹84) [K].
  - ~0.68 (Apr-2022: ~₹72 vs ~₹105) [K].
  - ~0.78 (2024: ~₹74–76 vs ₹94.72–94.77) [K/V petrol].
  - **0.81 (Jan-2026: ₹77.09 vs ₹94.77)** [V-snip/V].
  - **0.85 (Oct-2026: ₹86.98 vs ₹102.12)** [V].
  - Mumbai Oct-2026: 0.80 (₹89.00 vs ₹111.21) [V].
  - **CNG's per-unit discount to petrol has shrunk from ~50% to ~15% in five years.** Per km, CNG still saves ~42% (₹3.48 vs ₹6.01/km) [E], because a CNG car goes further per kg than a petrol car per litre.
- **The diesel comparison** (buses, LCVs, taxis): Delhi diesel ₹95.20/l [V]. CNG at ₹86.98/kg is close to parity per unit, but cheaper per km for LCVs [E].
- **The EV comparison** [E]:
  - e-auto running cost ~₹0.6–1.0/km vs a CNG auto ~₹2.5–3.0/km;
  - e-bus total cost of ownership is subsidised under PM e-Bus Sewa / PM E-DRIVE [K].
- **Adoption data:** L5 passenger e-share 55.8% (Sep-2026) [V]; PV EV 8.5% (Sep-2026) [V]; CNG PV 21.98% (FY26) [V]; CV CNG 11.79% (FY26) [V].
- **Exposure by member:**
  - IGL CNG: autos 7–8%, buses ~12% (DTC already zero), taxis ~14%, CVs ~19%, cars 48–50% [V PL].
  - MGL: buses 4–5% of CNG [V PL].
- **Delhi EV Policy 2026:** e-3W/e-LGV-only registrations from 1-Jan-2027; e-2W-only from 1-Apr-2028; ₹15,000 Cr outlay [V].
- **Pricing power is bounded on both sides.** Petrol (set by loss-making OMCs; PSU downstream Q1 FY27 PAT −₹18,150 Cr [V]) caps CNG. EV economics erode the high-usage commercial fleets.
  - **IGL's stated rule: "maintain a healthy delta with MS/HSD"** [V PL].

### Force 3. PNGRB regime: exclusivity expiry, bidding rounds, MWP targets
- **Coverage:** 307 GAs, near-100% of the country [V]. Rounds 9–12 (2018–2024) added ~200 GAs [K/V-snip].
- **The MWP-vs-actual gap** [V-snip targets; V actuals; E %]:
  - PNG-D: target 12.63 crore by 2034 vs **1.77 crore (Aug-2026) = 14%**.
  - CNG stations: target 18,336 vs **9,158 = 50%**.
  - Only 55 GAs had met their MWP (Mar-2026) [V-snip].
- **Metro marketing exclusivity has lapsed** (IGL Delhi, MGL Mumbai) [primer; K], but there is no third-party marketer at scale yet.
  - **The real competitive edge in metros is infrastructure exclusivity (25 years) plus incumbency.**
  - The Gurugram/Faridabad boundary contest shows that contested GAs are where competition actually happens [V PL].
- **Unified tariff** (§7.5): ₹1,000 Cr/yr transferred to far-from-source GAs [V]. This favours ATGL-type networks over IGL/MGL on relative cost.
- **What to watch:** a 13th round (none found); PNGRB MWP penalty enforcement; open-access rules; the all-pipelines unified-tariff notification.

### Force 4. The 2026 West Asia crisis: Qatar LNG, Hormuz, LPG shock and India's response
- **Supply.**
  - Two of 14 Qatari trains struck; FM from March, reviewed monthly; **56 Petronet cargoes affected** by mid-Aug; make-up allowed to **Apr-2028** [V Reuters/Baird].
  - Qatar's share of India's LNG fell from ~40–45% to single digits (Sep-2026: 94 kt, 6th) [V-snip Kpler].
- **Prices.**
  - JKM >$21 in March and ~$21 in mid-Aug [V-snip].
  - **India's GIXI spot $28.4 in Sep-2026** [V].
  - APM formula **$11.59 (May)** and $11.22 (Oct) [V].
  - **Brent $116.77 (Sep)** [V].
  - India's LNG import cost ~$11.8/mmbtu in Apr–Sep 2026 vs ~$10.0 [V; E].
- **India's response:**
  - **9/10-Mar gas order** (CNG/PNG-D/LPG 100%; fertiliser 70%; industry 80%; refinery 65%) [V].
  - Refiners maximise LPG (production +25%) [V].
  - **Excise cut on petrol/diesel to ₹11.90/₹7.80 (26-Mar-2026)** [V], absorbed by OMCs.
  - **Four pump-price hikes, 15–25 May** (petrol +₹7.35, diesel +₹7.53) [V].
  - PNG push: PNG Drive 2.0; the 200-scm incentive [V].
- **LPG shock:**
  - Consumption −15.5% (Apr–Sep); bulk −61.8% [V].
  - Active domestic LPG customers −1.2% (the first decline) [V].
  - Delhi domestic cylinder ₹942 (Oct) [V]; commercial ₹3,113.50 at the June peak [V-snip].
- **Member impact:**
  - Petronet: PAT +33% in Q1 despite 58% utilisation [V].
  - MGL resilient (₹7.9/scm); IGL squeezed (₹3.4) [V].
  - ATGL: gas cost +39% [V-snip].
  - Aegis: distribution +91% [V-snip].
- **Lasting effects:**
  - supplier diversification (US, Oman, Nigeria, Angola) [V];
  - Qatar damage lasting 3–5 years [V-snip];
  - policy tilt from LPG to PNG;
  - a structurally higher and more volatile spot gas price (JKM volatility 94% [V-snip]).

### Force 5. Petronet: Dahej utilisation, Kochi, Gopalpur, petchem, the tariff path and competing terminals
- **Utilisation.**
  - **Dahej 91.9% in FY26** (on 17.5 mtpa) [V PPAC].
  - 90.1% in Q4 FY26, then **66% in Q1 FY27 on the new 22.5 mtpa base** [V Petronet]; 68.45% for Apr–Aug 2026 [V PPAC].
  - Kochi: 26.3% (FY26), with a record 68 TBTU; 23.6% in Apr–Aug 2026 [V].
- **Volumes:** FY26 Dahej 833 TBTU, company 901 (FY25: 876 / 934) [V]. **Petronet ≈ 66% of India's LNG** [E].
- **Tariff path.**
  - Dahej ₹62.91 (2024) → ₹66.06 (2025), ~+5%/yr [V-snip Argus].
  - Reported offer of ₹52.05 on the expansion, with up to −₹30 from 2028; unconfirmed [V-snip].
  - **Sensitivity:** ₹10/mmbtu on ~880 TBTU ≈ ₹880 Cr of revenue, ~16% of EBITDA [E].
- **Competing terminals (utilisation FY26 → Apr–Sep 2026)** [V PPAC]:
  - Hazira 6.0 mtpa: 27% → 42%.
  - Dabhol 5: 35% → 44%.
  - Dhamra 5: 34% → 47%.
  - Ennore 5: 25% → 26%.
  - Mundra 5: 17% → 27%.
  - Chhara 5: 6% → 6%.
  - **Total 58.5 mtpa**, heading to ~77.5 by FY29 [V-snip ICRA].
- **Growth projects:** Gopalpur (5 mtpa, ~₹6,355 Cr) and the PDH-PP petchem complex (~₹20,685 Cr) [primer]. Status updates after Jul-2026 were not found.
- **One-offs:** ₹630 Cr of use-or-pay dues in Q4 FY26 [V]; trading/inventory gains in Q1 FY27 [V-snip].
- **Contract cliff:** the Qatar long-term contract ends **Apr-2028**, and the renewed 2048 deal starts at a lower price [V Reuters; V-snip].

### Force 6. Aegis: LPG and liquid tank terminals, LPG import volumes, Aegis Vopak
- **The macro tailwind:** LPG imports grew from 16.5 mt (FY21) to **21.5 mt (FY26)**, and import dependence from 56% to **61%** [V PPAC].
  - Consumption rose 27.5 → 33.2 mt [V].
  - Most imports are Gulf-sourced. The 2026 shock pushed India to US cargoes, which are long-haul VLGCs into west-coast terminals [V-snip].
- **2026:**
  - National consumption −15.5% but production +25% [V].
  - **Aegis's terminal throughput held** (~1.12 mt in Q1) and **distribution nearly doubled** (277 kMT) [V-snip deck].
- **Data conflict to flag:** PPAC's "Direct Private Imports" of LPG collapsed to **13 kt in Apr–Sep 2026 (−93%)** [V]. That is hard to square with Aegis's distribution of +91%.
  - Likely causes: Aegis's distribution is supplied from OMC-routed or terminal-held imports; or PPAC's prorated DGCIS data (Jul–Aug) understates private imports.
  - **Do not print the two side by side without explaining the gap.**
- **Aegis Vopak (AVTL):**
  - Listed 2-Jun-2025 (₹2,800 Cr IPO) [V-snip]; Aegis ~50.1% [primer].
  - LPG static ~2.0 lakh MT, liquids ~1.7 mn cbm after Mangalore [V-snip].
  - JNPA propane tank (51,998 MT) [V-snip]; Pipavav ammonia terminal (₹525 Cr transfer, Aug-2026) [V-snip].
- **Tax edge:** non-PSU importers of domestic LPG pay 5% basic customs duty (PSU domestic: Nil); non-domestic LPG GST is 18% [V PPAC]. Private distributors compete on commercial/industrial/auto-LPG, not household.
- **Auto-LPG:** stations are shrinking (316 PSU stations, −21% YoY) while auto-LPG volume rose 34% in Apr–Sep 2026 [V PPAC]. It is a niche.

### Force 7. Unified pipeline tariff, GST inclusion and excise/VAT
- **Unified tariff:** ₹54/₹102.86 per mmbtu since 1-Jan-2026, with Zone-1 for CNG/PNG-D everywhere [V].
  - Value ₹1,000 Cr/yr: CNG −₹1.25–2.50/kg, PNG-D −₹0.90–1.80/scm [V].
  - The Oct-2026 draft extends it to all pipelines [V-snip].
- **GST:** gas is still outside GST ("GST Council shall recommend the date") [V PPAC].
  - Inclusion with full ITC would remove ~₹100–200 Cr/yr of stranded ITC for a large CGD [E] and the 14% CNG excise.
  - It would also cut state VAT revenue, which is the political obstacle.
  - Committee recommendation Apr-2026 [V-snip].
- **Excise/VAT on competing fuels:** petrol excise cut to ₹11.90/l (26-Mar-2026) [V]. Every rupee of liquid-fuel tax cut narrows CNG's tax edge.
  - Delhi petrol VAT ₹16.59/l and diesel ₹13.91/l (1-Oct-2026 price build-up) [V PPAC].

### Force 8. The rupee (~₹94.9/$) as a gas-cost driver
- **Every molecule is dollar-priced:** APM ($7.00), HPHT ($9.89), NWG (% of ICB), LNG (slope × Brent, or HH, or JKM).
- **FX path:** ₹84.57 (FY25 avg) → ₹88.31 (FY26 avg) → ₹95.46 (Sep-2026) → ₹94.9 (19-Oct) [V PPAC; context].
  - FY25 avg → today = **+12.2% on rupee gas cost** with no change in dollar prices [E].
- **Per-scm effect:** APM at $7 cost ₹23.4/scm at ₹84.57 and ₹26.4/scm at ₹94.9 (+₹3.0) [E]. On IGL's ₹43.3 blended cost, each ₹1/$ ≈ ₹0.45/scm ≈ ₹145 Cr/yr of EBITDA at 9.7 mmscmd [E].
- **ATGL** cited "currency depreciation" for its Q1 FY27 gas cost rise of 39% [V-snip IANS].
- **India's LNG import bill rose 23% in Apr–Sep 2026 in dollars** ($8.5 bn vs $6.9 bn) [V]. In rupees, ~+33% [E].

(Second-order forces to mention but not lead with: the CBG mandate (3% in FY27 vs a ~57% run-rate [E]); the Adani legal overhang (resolved May–Aug 2026 [V/V-snip]); OMC under-recoveries capping petrol prices [V].)

---

## B. Bespoke deep-dive themes (each deserves its own section)

1. **"The APM squeeze": how a government spreadsheet sets CGD margins.**
   - Use the monthly formula-vs-ceiling table (§7.2), including the H2 FY26 months when the ceiling did not bind.
   - Use the allocation table (Force 1), and the IGL-vs-MGL sourcing comparison (27% vs 30% APM; Brent vs HH LNG; ₹43.3 vs ₹39.9 gas cost; ₹3.4 vs ₹7.9 EBITDA/scm) [V PL].
   - Point out that NWG became dear at $116 crude.
2. **"CNG vs EV: the bridge fuel being crossed from both ends."**
   - Price-parity drift (0.52 → 0.85), per-km economics, IGL's segment mix, Delhi EV Policy 2026, e-3W at 55.8%, PV EV at 8.5%, CNG PV at 21.98%.
   - Scenario: IGL's 2030 CNG volume with autos and buses gone and taxis half-electrified [E].
3. **"The 2026 West Asia shock: a stress test of India's gas and LPG system."**
   - Timeline (§G), the priority order, LPG −15.5%, the GIXI spike to $28.4, OMC losses, and who won and lost among the five members.
4. **"Toll roads in an overbuilt port: LNG terminal economics."**
   - Dahej 92% vs the rest at 6–47%; 58.5 mtpa for ~27 mt; the tariff path; use-or-pay (₹630 Cr); the 2028 Qatar contract cliff.
   - Sidebar: **Aegis/AVTL as the LPG equivalent** (turns, static capacity, the distribution flywheel, the private-import data puzzle).

---

## C. Revenue / profit equations with worked ₹ examples

### C.1 CGD
**EBITDA = Volume (scm) × [Net realisation − Gas cost − Opex] per scm**
- Net realisation = retail price ex-excise and ex-VAT, weighted by mix (CNG ₹/kg ÷ ~1.4 → ₹/scm).
- Gas cost = Σ (share_i × $/mmbtu_i × FX ÷ 25.2) + transport (₹54/mmbtu ÷ 25.2 = ₹2.14/scm).

**Worked example 1: IGL Q1 FY27 (all inputs V, PL note)**
- Volume 9.7 mmscmd × 91 days = **883 mmscm**.
- Realisation ₹52.1 − gas cost ₹43.3 − opex ₹5.5 = **₹3.3/scm**. PL reports ₹3.4; the difference is rounding.
- EBITDA ≈ 883 × 3.3–3.4 = **₹291–300 Cr**, against a reported standalone ~₹295 Cr [V-snip].

**Worked example 2: IGL FY26 [E, reconciled to primer totals]**
- 9.39 × 365 = **3,427 mmscm**.
- Net realisation ≈ ₹42.9 (gross ₹16,451 Cr less excise ~₹1,750 Cr); gas cost ≈ ₹31.5; opex ≈ ₹6.0.
- EBITDA = 3,427 × ₹5.4 = **₹1,850 Cr** [primer].

**Worked example 3: MGL Q1 FY27**
- 4.8 × 91 = **437 mmscm** × ₹7.9 = **₹345 Cr**, against a reported EBITDA of ₹343 Cr [V-snip] / ₹3.4 bn adjusted [V PL].
- NB: PL's gross margin of ₹14.7 minus opex of ₹5.8 = ₹8.9, not ₹7.9. PL's per-scm lines are on slightly different bases. **Use the reported EBITDA/scm.**

**Sensitivities (IGL scale, ~3,540 mmscm/yr at 9.7 mmscmd) [E]**
- **+₹1/kg CNG** ≈ +₹0.71/scm on 74% of volume ≈ +₹0.53/scm blended ≈ **+₹185 Cr/yr**.
- **−10 percentage points APM → $12 gas** ≈ −₹1.9/scm on the priority pool (~80% of volume) ≈ −₹1.5/scm blended ≈ **−₹540 Cr/yr**.
- **₹1/$ depreciation** ≈ −₹0.45/scm ≈ **−₹160 Cr/yr**.
- **$10/bbl ICB** ≈ −₹0.6/scm via NWG ≈ **−₹210 Cr/yr** (more if Brent-linked LNG is included).
- **+5% volume** at a constant ₹3.4 spread ≈ **+₹60 Cr**.
- **Lesson:** margin levers dominate volume levers by ~5–9×.

### C.2 LNG terminal
**Regas revenue = Capacity (mtpa) × 52.6 TBTU/mt × Utilisation × Tariff (₹/mmbtu)**, plus marketing margin on back-to-back volumes, plus use-or-pay, plus trading.

**Worked example (Dahej, FY27E) [E]**
- 22.5 × 52.6 = 1,183 TBTU of capacity.
- At **75%** = 887 TBTU × ~₹66 blended = **₹5,860 Cr** of service revenue.
- Less opex ~₹600 Cr → **EBITDA ≈ ₹5,250 Cr** from Dahej regas.
- Kochi at 25% × 263 TBTU × ₹114.5 ≈ **₹750 Cr** of revenue.
- **Sensitivities:**
  - 10 percentage points of Dahej utilisation ≈ 118 TBTU ≈ **±₹780 Cr**.
  - A ₹10/mmbtu cut ≈ **−₹890 Cr**.
- **Check against actuals:** Q1 FY27 Dahej 192 TBTU (66%). Annualised ~770 TBTU × ₹66 ≈ ₹5,080 Cr. Yet Q1 PBT was ₹1,514 Cr (₹6,056 Cr annualised) [V], so **trading/inventory gains carried the quarter** [E/V-snip].

### C.3 Aegis (terminals + LPG)
**EBITDA = Σ terminals (static capacity × utilisation × ₹/KL-month, or throughput MT × ₹/MT) + LPG distribution volume × ₹/t spread + sourcing volume × ₹/t fee.**

**Worked example (FY26) [E]**
- Liquids: ₹472 Cr EBITDA [primer].
- LPG distribution: 7.54 lakh t × ~₹5,500/t ≈ **₹415 Cr**.
- LPG terminalling + sourcing (residual): ₹1,599 − 472 − 415 ≈ **₹710 Cr** on 5.15 mt ≈ **~₹1,380/t**.
- Q1 FY27 normalised EBITDA ₹727 Cr [V-snip] is ~1.8× the FY26 quarterly average. **That is the war dividend.**

---

## D. Proposed 6-cell ₹ stat strip

| # | Figure | Label | Source |
|---|---|---|---|
| 1 | **₹3.4 vs ₹7.9** | EBITDA per scm, Q1 FY27: IGL vs MGL (same product, different gas sourcing) | [V PL notes 15-Aug / 1-Aug-2026] |
| 2 | **₹86.98/kg vs ₹102.12/l** | Delhi CNG vs Delhi petrol, Oct-2026 | [V PPAC snapshot; PPAC daily RSP] |
| 3 | **₹664 vs ₹1,065 per mmbtu** | APM ceiling ($7.00) vs APM formula ($11.22) for Oct-2026, at ₹94.9/$: the subsidy CGD gets on every APM unit | [V PPAC notification; E ₹] |
| 4 | **₹2,712/mmbtu** | India spot gas (IGX GIXI), Sep-2026 average: 4× the APM ceiling | [V PPAC snapshot] |
| 5 | **₹54/mmbtu** | Unified pipeline tariff charged on CNG and household PNG anywhere in India since 1-Jan-2026 | [V PNGRB] |
| 6 | **1.77 crore** | Household PNG connections (Aug-2026) vs a 12.63-crore 2034 target | [V PPAC/PNGRB; V-snip target] |

Alternates:
- **₹942**: Delhi domestic LPG cylinder, 1-Oct-2026 [V].
- **₹630 Cr**: Petronet's CY2022 use-or-pay dues collected in Q4 FY26 [V].
- **₹1,000 Cr/yr**: unified-tariff saving [V].
- **₹18,150 Cr**: PSU OMC downstream Q1 FY27 loss [V].
- **₹83,900 Cr / ₹8,000 Cr**: FY26 revenue/PAT of the five members [E].

---

## E. Chart-ready datasets

**E1. India natural gas balance, mmscm [V PPAC Ready Reckoner FY26 Table 3.4]**
- Gross production: FY21 28,672 · FY22 34,024 · FY23 34,450 · FY24 36,438 · FY25 36,113 · FY26 34,776
- LNG imports: FY21 33,198 · FY22 31,028 · FY23 26,304 · FY24 31,795 · FY25 35,720 · FY26 34,427
- Consumption: FY21 60,981 · FY22 64,159 · FY23 59,969 · FY24 67,512 · FY25 71,314 · FY26 68,753
- Import dependence %: 54.4 · 48.4 · 43.9 · 47.1 · 50.1 · 50.1

**E2. LNG imports, mt and average landed $/mmbtu [V PPAC RR Table 3.10]**
FY18 20.7/7.4 · FY19 21.7/9.0 · FY20 25.6/7.1 · FY21 25.1/6.0 · FY22 23.4/10.9 · FY23 19.9/16.4 · FY24 24.0/10.8 · FY25 27.0/10.6 · FY26 26.0/9.8 · Apr–Sep FY27 ~13.7 mt/~11.8 (E from V)

**E3. APM formula vs ceiling, $/mmbtu, monthly Apr-2025 to Oct-2026 [V PPAC]**
- Formula: 7.26 · 6.93 · 6.41 · 6.89 · 7.02 · 6.99 · 6.96 · 6.55 · 6.48 · 6.25 · 6.21 · 6.81 · 10.76 · 11.59 · 10.93 · 8.73 · 7.86 · 9.00 · 11.22
- Price paid: 6.75 · 6.75 · 6.41 · 6.75 · 6.75 · 6.75 · 6.75 · 6.55 · 6.48 · 6.25 · 6.21 · 6.75 · 7.00 · 7.00 · 7.00 · 7.00 · 7.00 · 7.00 · 7.00
- HPHT ceiling (half-yearly): 9.87 · 10.16 · 10.04 · 9.72 · 8.90 · 9.89 (Apr-24 → Oct-26)

**E4. CGD sales by segment, mmscm [V PPAC RR Table 3.12C]**
FY22 / FY23 / FY24 / FY25 / FY26
- CNG: 5,563 / 7,001 / 7,885 / 9,317 / 10,753
- PNG-D: 959 / 1,000 / 1,068 / 1,224 / 1,305
- Commercial: 213 / 249 / 272 / 314 / 355
- Industrial: 5,124 / 4,086 / 4,298 / 4,722 / 4,668
- Total mmscmd: 32 / 34 / 37 / 43 / 47

**E5. CNG stations and PNG-D connections [V PPAC/PNGRB; V-snip for 2022–24]**
- Stations: Mar-22 4,433 · Mar-23 5,665 · Mar-24 6,861 · Apr-25 8,067 · Apr-26 8,916 · Aug-26 9,158 · 2034 MWP 18,336
- PNG-D (lakh): Apr-25 150.4 · Apr-26 169.5 · Aug-26 176.9 · 2034 MWP 1,263

**E6. Delhi fuel prices 2026 (₹) [V PPAC daily RSP for petrol/diesel; CNG V-snip except Oct V]**
- Petrol: ≤14-May 94.77 · 15-May 97.77 · 19-May 98.64 · 23-May 99.51 · 25-May → 21-Oct 102.12
- Diesel: 87.67 · 90.67 · 91.58 · 92.49 · 95.20
- CNG ₹/kg: Jan 77.09 · 26-May 83.09 · 29-Aug/Oct 86.98

**E7. EBITDA per scm, ₹ [V PL unless noted]**
- IGL: Q1 FY26 6.2 · Q4 FY26 4.8 · Q1 FY27 3.4 · FY26 ~5.4 [primer]
- MGL: Q1 FY26 9.6 · Q4 FY26 6.2 · Q1 FY27 7.9 · FY26 ~8.3–8.7 [primer/E]
- ATGL (standalone, E): FY26 ~10.8 · Q1 FY27 ~9.3

**E8. LNG terminal utilisation, % (FY26 → Apr–Sep 2026) [V PPAC]**
Dahej 91.9 → 68.45 · Hazira 27.2 → 42.4 · Dabhol 34.5 → 43.9 · Kochi 26.3 → 23.6 · Ennore 25.1 → 26.2 · Mundra 17.4 → 26.9 · Dhamra 34.1 → 46.5 · Chhara 6.2 → 6.0

**E9. EV penetration (%) [V EVreporter Sep-2026; V FADA FY26; V-snip earlier months]**
- L5 passenger: May-25 32.0 · Apr-26 43.1 · May-26 50.3 · Aug-26 55.5 · Sep-26 55.8
- PV EV: FY26 4.25 · Sep-26 8.5
- CNG share of PV: FY25 19.60 · FY26 21.98

**E10. LPG balance, mt [V PPAC RR Table 7.1; snapshot]**
- Consumption: FY21 27.5 · FY22 28.3 · FY23 28.5 · FY24 29.7 · FY25 31.3 · FY26 33.2 · Apr–Sep 2026 13.7 (−15.5%)
- Imports: 16.5 · 17.1 · 18.3 · 18.5 · 20.8 · 21.5
- Import dependence: 56 · 57 · 55 · 57 · 59 · 61%

**E11. CGD share of national gas consumption, % [V PPAC monthly report]**
FY25 21.1 · FY26 23.9 · Aug-26 28.5 (fertiliser 29.3, power 9.7, refinery 5.8, petchem 4.9, others 21.9)

**E12. India LNG imports by supplier [V-snip Equirus; Kpler]**
- May–Jul 2026 (mt): US 2.19 · Nigeria 1.31 · Oman 1.22 · Angola 0.80 · Qatar 0.23 · total 7.08
- Sep-2026 (kt): Oman 585 (27%) · Nigeria 351 · Qatar 94 (6th) · total 2,170

**E13. Members' FY26 snapshot (₹ Cr) [primer; Petronet PAT V]**

| Member | Revenue | EBITDA | PAT | Volume | Market cap (mid-2026) |
|---|---|---|---|---|---|
| IGL | 16,451 (s/a) | 1,850 | 1,364 s/a / 1,543 cons | 9.39 mmscmd | ~23,500 (₹21,200 on 15-Aug [V PL]) |
| MGL | 9,185 | 1,451 | 847 | 4.59 mmscmd | ~11,200 |
| ATGL | 6,415 | 1,225 | 637 s/a / 656 cons | 1,133 mmscm | ~79,000 |
| Petronet | 43,495 | ~5,500–5,800 (E) | **3,843 (V)** | **901 TBTU (V)** | ~41,000 |
| Aegis | 8,333 | 1,599 (normalised) | 1,107 | 5.15 mt LPG throughput | ~46,500 |

---

## F. KPI glossary with benchmark ranges [E unless tagged; calibrated on members FY24–Q1 FY27]

| KPI | Definition | Good | Average | Weak | Notes |
|---|---|---|---|---|---|
| **Sales volume growth (CGD)** | YoY % change in mmscmd | >10% (new GAs >15%) | 5–10% | <5% | National CGD +9.7% FY26 [V]; IGL +5.8%, MGL +7% Q1 FY27 [V] |
| **CNG share of volume** | CNG ÷ total | — | 60–75% | >75% = EV-exposed | National 63% [V]; IGL 74%, MGL 73% [V] |
| **EBITDA/scm** | EBITDA ÷ scm sold | >₹8 | ₹5–8 | <₹5 | MGL 7.9, IGL 3.4 [V]; guidance IGL 7, MGL 8–9 [V] |
| **Gas cost/scm** | Blended purchase cost incl. transport | <₹36 | ₹36–42 | >₹42 | MGL 39.9, IGL 43.3 (Q1 FY27) [V] |
| **Gross margin/scm** | Realisation − gas cost | >₹13 | ₹10–13 | <₹10 | MGL 14.7, IGL 8.8 [V] |
| **Opex/scm** | All opex ÷ scm | <₹5.5 | ₹5.5–6.5 | >₹6.5 | IGL 5.5, MGL 5.8 [V] |
| **APM share of total sourcing** | APM ÷ total volume | >35% | 25–35% | <25% | IGL ~27%, MGL 30% [V] |
| **Non-Brent imported share** | (HH + other non-oil-linked) ÷ total | >20% | 10–20% | <10% | MGL 21–22% HH [V] |
| **CNG/petrol price ratio** | ₹/kg ÷ ₹/l | <0.75 | 0.75–0.9 | >0.9 | Delhi 0.85, Mumbai 0.80 [V; E] |
| **Vehicle additions/month** | New CNG vehicles in the GA | >25,000 (metro) | 10–25k | <10k | IGL ~27,300 [V] |
| **CNG stations added/yr** | Count | >80 (large CGD) | 30–80 | <30 | National +849 in FY26 [V] |
| **PNG-D active ratio** | Active ÷ connected | >85% | 70–85% | <70% | MGL ~70% [V; E] |
| **Capex/EBITDA (CGD)** | Annual capex ÷ EBITDA | <0.6 | 0.6–1.0 | >1.2 | IGL FY27 ~1.0–1.1, MGL ~1.3 [V capex; E] |
| **RoE (CGD)** | PAT ÷ equity | >20% | 14–20% | <14% | IGL ~14% |
| **Terminal utilisation** | TBTU ÷ capacity | >85% | 50–85% | <40% | Dahej 91.9% FY26; others 6–47% [V] |
| **Regas tariff** | ₹/mmbtu | >₹65 with escalation | ₹50–65 | <₹50 or cut | Dahej ~₹66 (2025) [V-snip] |
| **Share of national LNG** | Terminal TBTU ÷ India TBTU | >50% | 15–50% | <15% | Petronet ~66% [E from V] |
| **LPG terminal throughput** | mt/yr | >5 | 2–5 | <2 | Aegis 5.15 mt [primer] |
| **Throughput turns (LPG)** | Throughput ÷ static capacity | >20×/yr | 12–20× | <12× | Aegis ~23× [E] |
| **LPG distribution EBITDA/t** | ₹/t | >₹6,000 | ₹3,500–6,000 | <₹3,500 | Aegis ₹4,000 → 7,000 [primer] |
| **Liquid terminal EBITDA margin** | % | >70% | 55–70% | <55% | Aegis 73% [primer] |

---

## G. Timeline (year: event)

1. **1995:** Mahanagar Gas formed (British Gas + GAIL) [K].
2. **1998:** Supreme Court orders Delhi's public transport onto CNG; IGL formed; Petronet incorporated [K].
3. **2004:** Dahej LNG commissioned (5 mtpa) [K].
4. **2006:** PNGRB Act [K].
5. **2013:** Kochi LNG commissioned [K].
6. **2015:** Supreme Court (IGL v PNGRB) limits PNGRB's retail price/tariff powers [K].
7. **Jul-2016:** MGL IPO [K].
8. **21-Mar-2016:** MoPNG HPHT/deepwater pricing-freedom notification (the basis of today's ceiling) [V cited in PPAC notification].
9. **2018:** 9th CGD round (86 GAs); ATGL listed (Nov); SATAT launched [K].
10. **3-Mar-2022:** JKM record $59.67/mmbtu [V-snip]. **FY23:** India's LNG imports fall to 19.9 mt at $16.4 [V].
11. **10-Aug-2022:** MoPNG guideline on APM for CNG-T/PNG-D [V cited].
12. **7/8-Apr-2023:** Parikh formula (APM = 10% of ICB, $4–$6.50) [V cited]; unified tariff starts (1-Apr) [K].
13. **24-Jan-2023:** Hindenburg report; ATGL crashes [K].
14. **Nov-2023:** CBG Blending Obligation notified [V-snip].
15. **Feb-2024:** Petronet–QatarEnergy renewal to 2048 [V-snip]. **Mar-2024:** 12th round awarded; 307 GAs [V-snip/V].
16. **16-Oct / 16-Nov-2024:** APM cuts (~20% each) [V-snip]. **31-Dec-2024:** partial restoration [V-snip].
17. **1-Apr / 16-Apr-2025:** APM ceiling $6.75; APM cut up to 20% → 34% of CGD requirement [V].
18. **2-Jun-2025:** Aegis Vopak Terminals lists [V-snip].
19. **16-Dec-2025 / 1-Jan-2026:** two-zone unified tariff; CNG/PNG-D at ₹54/mmbtu nationwide [V].
20. **Nov-2025 to Feb-2026:** APM formula below the ceiling ($6.21–6.55) [V].
21. **28-Feb/Mar-2026:** West Asia war; Ras Laffan struck (two of 14 trains); Qatar FM [V Reuters]. **9/10-Mar:** gas priority order [V]. **26-Mar:** petrol/diesel excise cut to ₹11.90/₹7.80 [V].
22. **Apr-2026:** APM ceiling $7.00; HPHT $8.90; APM formula $10.76, then **$11.59 in May** [V].
23. **15/19/23/25-May-2026:** four pump-price hikes; Delhi petrol ₹102.12, diesel ₹95.20 [V]. **18-May:** Adani OFAC settlement ($275m) [V-snip].
24. **1-Jul-2026:** Delhi EV Policy 2026 in force (e-3W-only registrations from 1-Jan-2027) [V]. **7-Jul:** IGU: 2025 LNG trade record 437 mt [V].
25. **Aug-2026:** Qatar FM still in force; 56 Petronet cargoes affected (13-Aug) [V]. Adani criminal charges dismissed with prejudice (10/11-Aug) [V]. **22-Aug:** PNG connection incentive announced (+200 scm APM, from 1-Sep) [V]. **29-Aug:** Delhi CNG ₹86.98 [V-snip date; V level].
26. **Sep-2026:** Brent averages $116.77; IGX spot $28.4/mmbtu [V].
27. **30-Sep-2026:** PPAC notifies Oct-2026 APM (formula $11.22, ceiling $7.00) and HPHT $9.89 for Oct-26–Mar-27 [V]. **8-Oct:** PNGRB draft to extend the unified tariff to all pipelines [V-snip].

---

## H. Figures I could not source well, and conflicts (flag for the writer)

1. **JKM 2026 path.** No primary page was fetched (S&P Global and IEA returned 403). Only these are available: ">$21 (19-Mar, Kpler)", "~$24 for India" [V-snip], "~$21 NE Asia (11-Aug, Energy Intelligence)" [V-snip], and S&P's "94% volatility" [V-snip]. **Use PPAC's IGX GIXI ($16.8 Apr-2026; $28.4 Sep-2026) [V] as the verified Indian spot proxy.** No October-2026 JKM level was found.
2. **Qatar FM / Hormuz status on 21-Oct-2026.** The latest firm item is Reuters, 13-Aug-2026 (FM for Aug; no Sep plan) [V]. The Sep-2026 Qatar volume of 94 kt is [V-snip Kpler]. **FM start date conflict:** Petronet-linked reports backdate it to 28-Feb; other reports say 4-Mar [V-snip].
3. **APM allocation % to CGD for 2026 (MoPNG quarterly ratio).** No 2026 MoPNG ratio was found. We have company proxies (IGL APM ~27% of volume, MGL 30%) [V PL] and PPAC's domestic share of CGD (55% in Aug-2026) [V]. **Neither is the official allocation ratio.**
4. **NWG price formula** after Apr-2025 ("12% of ICB" per PTI [V]) is not confirmed for 2026 contracts. "Up to $7.70 for Oct-2026" [V-snip, first draft] conflicts with 12% × $116 = $13.9. **Treat NWG's current price as unverified.**
5. **Petronet regas tariff 2026** (~₹69.36 projected), the ₹52.05 expansion tariff and the "−₹30 from 2028" are all [V-snip Argus] and unconfirmed by the companies. Gopalpur and petchem status after Jul-2026 was not found.
6. **Aegis Q1 FY27 volumes** (1,124 kMT logistics; 277 kMT distribution) were read from deck chart labels [V-snip]. **Conflict:** PPAC's private LPG direct imports were −93% (13 kt) in Apr–Sep 2026 [V]. See Force 6.
7. **ATGL Q1 FY27** (303/496 mmscm, gas cost +39%, margin 14.2%) is [V-snip IANS]; it was not re-fetched. The company file should verify.
8. **Delhi CNG intermediate dates** (₹77.09 Jan; ₹83.09 on 26-May; +₹3.89 on 29-Aug) are [V-snip]. Only the Oct-2026 level (₹86.98) is [V]. The pre-2026 parity ratios (0.52, 0.68, 0.78) are [K].
9. **Commercial LPG cylinder path** (₹1,691.50 → ₹3,113.50) is [V-snip]. The PPAC snapshot gives only the domestic price (₹942).
10. **MWP 2034 targets** (12.63 crore PNG-D; 18,336 stations; 5.46 lakh inch-km) and "55 GAs met MWP" are [V-snip]. **GA counts by entity are [K/E].**
11. **E-bus fleet sizes in Delhi/Mumbai** were not sourced. We have only IGL's "DTC CNG volume zero" and MGL's "~6,000 CNG buses" [V PL].
12. **National CNG vehicle parc** was not found. MGL's base is 1.31 mn [V]; no national figure is sourced.
13. **Global comparables multiples** are [V-snip] single-provider snapshots; Tokyo Gas and HK & China Gas are [K].
14. **IGU India utilisation** (47% 2025 vs 58% 2024) is [V-snip]. The IGU press release itself has no India figures. Our own E (from PPAC) is ~47–49%.
15. **CBG mandate tonnage** (87/310/868 kt) and the FY26 compliance of 1.05% are [V-snip]. CBG sales volumes are [V PPAC].
16. **GST-on-gas committee** (Apr-2026) is [V-snip taxo.online], a weak source.
17. **The OFAC settlement ($275m, 18-May-2026) and SEC settlement ($18m)** are [V-snip]. The court dismissal date (10 vs 11-Aug) varies by report; one report says FCPA/obstruction counts against five India-based co-defendants were reserved [V-snip].
18. **Market caps** are mid-2026 primer snapshots, not 21-Oct-2026 prices. The company file should supply current figures.
19. **MGL per-scm lines don't tie** (gross ₹14.7 − opex ₹5.8 = ₹8.9 vs EBITDA/scm ₹7.9) [V PL]. Use the reported EBITDA/scm.
20. **The LPG import value for FY26 (~$11.3 bn)** was read from a dense PPAC import table row. Spot-check it before printing.

### Source list: URLs fetched this session ([V])
- PPAC APM notification Oct-2026: https://ppac.gov.in/download.php?file=importantnews/1790767940_Domestic_Natural_Gas_Price_October_2026.pdf
- PPAC HPHT ceiling Oct-2026–Mar-2027: https://ppac.gov.in/download.php?file=importantnews/1790767955_Gas_Price_Ceiling_October2026-March2027.pdf
- PPAC Ready Reckoner FY2025-26: https://ppac.gov.in/download.php?file=rep_studies/1784899305_The_PPAC_Ready_Reckoner_FY_2025–26_Final.pdf (Tables 3.4, 3.9, 3.10, 3.10A, 3.12B/C, 7.1; gas summary p.19)
- PPAC Monthly Gas Report Aug-2026: https://ppac.gov.in/download.php?file=rep_studies/1792052546_Monthly_Gas_Report_Aug_26-WebV.pdf
- PPAC Snapshot of India's Oil & Gas (Oct-2026 edition, Sep-2026 data): https://ppac.gov.in/download.php?file=rep_studies/1792155544_Snapshot_of_India_Oil_and_Gas_Sept_2026_V3.pdf (Tables 2, 11, 14–18, 20–25)
- PPAC daily RSP of MS/HSD in metros (21-Oct-2026): https://ppac.gov.in/download.php?file=importantnews/1792565149_PP_9_a_DailyPriceMSHSD_Metro_21.10.2026.pdf
- PNGRB press release, unified tariff (16-Dec-2025): https://pngrb.gov.in/pdf/press-note/20251216_PR.pdf
- Petronet press release Q1 FY27: https://www.petronetlng.in/w/press-release-q1-2026-27-financial-results-1
- Petronet press release Q4 FY26: https://www.petronetlng.in/w/press-release-q4-2025-26-financial-results-1
- PL Capital, IGL Q1 FY27 (15-Aug-2026): https://plindia.com/ResReport/IGL-15-8-26-PL.pdf
- PL Capital, MGL Q1 FY27 (1-Aug-2026): https://plindia.com/ResReport/MAHGL-1-8-26-PL.pdf
- Reuters via Baird Maritime (13-Aug-2026), Petronet/Qatar FM: https://www.bairdmaritime.com/shipping/tankers/gas/still-in-limbo-indias-petronet-lng-awaits-clear-gas-supply-commitments-from-qatar
- PTI via Outlook Business (18-Apr-2025), APM cut / NWG: https://www.outlookbusiness.com/industry/ongcs-cheaper-apm-gas-supply-falls-costlier-new-well-supply-doubles-for-city-gas-distributors
- PTI via Outlook Business (10-Mar-2026), gas priority order: https://www.outlookbusiness.com/news/govt-rejigs-gas-allocation-lpg-cng-piped-cooking-gas-get-top-priority
- EVreporter (5-Oct-2026), Sep-2026 EV penetration: https://evreporter.com/?p=34271
- Storyboard18 (6-Apr-2026), FADA FY26 fuel mix: https://www.storyboard18.com/how-it-works/cleaner-fuels-leaner-inventory-two-structural-shifts-power-indias-auto-retail-in-fy26-94329.htm
- EV Infrastructure News (7-Jul-2026), Delhi EV Policy 2026: https://www.evinfrastructurenews.com/ev-policies/delhi-notifies-ev-policy-2026-with-tax-exemptions-for-ev
- Business Today (22-Aug-2026), PNG incentive scheme: https://www.businesstoday.in/india/story/more-homes-to-get-piped-gas-centre-unveils-incentive-scheme-to-boost-domestic-png-connections-550728-2026-08-22
- The Week (11-Aug-2026), Adani dismissal: https://www.theweek.in/news/biz-tech/2026/08/11/gautam-adani-charges-dismissed-us-court.html
- IGU press release, World LNG Report 2026 (7-Jul-2026): https://igu.org/press-releases/world-lng-report-2026

### Search-result-level sources ([V-snip], publisher and date)
- Argus (Dec-2025, Petronet regas offers); ICRA LNG note (Dec-2025) and gas outlook (BS, 31-Dec-2025); CRISIL "The flow tapers" (Dec-2025) and CGD newsletter (Feb-2026).
- Kpler (19-Mar-2026; Sep-2026 imports); Equirus/BusinessToday (7-Aug-2026); S&P Global (19-Oct-2026 JKM infographic, page 403); Energy Intelligence (11-Aug-2026 spot).
- Angel One / samco / The Week (2024–25 APM cuts); Energetica (allocation ratios); IANS (ATGL Q1 FY27); Aegis Q1 FY27 investor deck (6-Aug-2026).
- HDFC Sky / Deccan Herald (CNG prices); ThePrint, wionews, outlookmoney, onmanorama (LPG).
- Moneylife / MLex (OFAC/SEC); gktoday / swarajya (CBG); taxo.online (GST committee); zerodha / 5paisa (AVTL); Motilal Oswal (28-Sep-2026, Petronet).
