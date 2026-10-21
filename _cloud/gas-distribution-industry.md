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

---

# Part 4 — Deep-research supplement (21-Oct-2026)

Second, primary-source pass, compiled 21-Oct-2026 for the writer. This part **overrides Parts 1–3 wherever the Supersedes table (4.0) says so**.

**What was read this session.** Every item below was fetched and read on 21-Oct-2026. PDFs were extracted with pdftotext; scratch copies are in `/tmp/gas-distribution-deep/dl/`.
- **Q1 FY27 earnings-call transcripts for all five members:**
  - ATGL, call 22-Jul-2026, filed with BSE 28-Jul;
  - MGL, 31-Jul-2026;
  - Petronet, 13-Aug-2026, filed 19-Aug;
  - Aegis, 14-Aug-2026;
  - IGL, 14-Aug-2026, from iglonline.net.
- **Investor presentations:** MGL Q1 FY27 (31-Jul-2026); Aegis Q1 FY27 (Aug-2026); and Aegis's **Corporate Presentation, October 2026**, filed with BSE for the Singapore investor meetings.
- **FY26 annual reports for all five** (BSE AttachHis PDFs, 214–433 pages each). The sections read were MD&A, contingent liabilities, related-party and commitments notes, capacity, and auditor emphasis-of-matter paragraphs.
- **Screener.in** consolidated pages for all five, plus MGL standalone (FY22–FY26 and the last 8 quarters).
- **PPAC:** the Oct-2026 Snapshot (Sep-2026 data) and the Ready Reckoner FY2025-26.
- **World Bank** CMO monthly prices (Oct-2026 Pink Sheet data).
- **Other pages fetched:**
  - CRISIL rating rationale for IRM Energy (17-Aug-2026), used for the sector view;
  - All India Radio (Delhi CNG hike, 29-Aug-2026);
  - DT Next (gas-order withdrawal, 5-Jul-2026);
  - PSU Watch (PNGRB common-carrier withdrawal);
  - Tank Terminals / Bloomberg (Qatar FM extension, 28-Sep-2026).

**Tags in Part 4:**
- **[V-pri]** = fetched this session from a primary source: a company filing, transcript, presentation or annual report, or PPAC, PNGRB, MoPNG or BSE.
- **[V-scr]** = fetched this session from screener.in (an aggregator of filed numbers).
- **[V-sec]** = fetched this session from a secondary news page.
- **[V-snip]** = search-result summary only.
- **[E]** = compiler arithmetic.
- **[K]** = memory, not re-checked.

**Q2 FY27 status (checked 21-Oct-2026, evening IST).** None of the five has published Q2 FY27. Screener's quarterly columns still end at Jun-2026 for all five [V-scr].
- **ATGL's board meets 22-Oct-2026** (call 23-Oct). Its Q2 results were **not** out when this was written.
- Aegis reports on 26-Oct and Petronet on 2-Nov. IGL and MGL have not announced dates (Part 2).

## 4.0 Supersedes (corrections to Parts 1–3; old → new → source)

| # | Item | Old value (Part, tag) | New value | Source (fetched 21-Oct-2026) |
|---|---|---|---|---|
| S1 | **CUGL volume, Q1 FY27** | "2.5 mmscmd (+8% QoQ)", flagged as implausible (P2 §2.4, V PL) | **0.36 mmscmd** (CNG 0.23→0.25, PNG 0.11→0.12; +6% YoY). PL's 2.5 is an error. MNGL is 2.19 (CNG 1.44 / PNG 0.75), confirmed | IGL Q1 FY27 call transcript, 14-Aug-2026 [V-pri] |
| S2 | **MGL per-scm bridge** | Gross ₹14.7 − opex ₹5.8 ≠ EBITDA ₹7.9, "doesn't tie" (P1 §H-19; P2 §2.5, V PL) | Company slide: realisation **₹54.35**, gas cost **₹39.85**, gross margin **₹14.50**, EBITDA **₹7.91**/scm. **Implied opex (incl. other items) ₹6.59/scm** (Q4 FY26 ₹13.35 − ₹6.19 = ₹7.16; Q1 FY26 ₹18.82 − ₹12.35 = ₹6.47). PL's ₹5.8 is on a different basis. **Use ~₹6.6 opex** | MGL Investor Presentation Jul-2026, slide 11 [V-pri]; [E] arithmetic |
| S3 | **MGL–Unison Enviro (UEPL) merger** | "Board approved Oct-2024; completion unverified"; "UEPL still slightly loss-making" explains cons. vs SA (P2 §2.5, §2.7) | **Merger complete.** The NCLT Mumbai sanctioned it on **9-Jul-2025**, with an appointed date of **1-Feb-2024**. FY25 comparatives are restated. UEPL is now part of standalone MGL. **The remaining cons.–SA gap** comes from small new-energy subsidiaries and JVs (LNG long-haul stations, International Battery Co., an EV-3W cargo start-up) [V-pri MGL call] | MGL FY26 AR (BSE) [V-pri]; MGL Q1 PPT footnote [V-pri] |
| S4 | **MGL Q1 FY26 one-off** | "PL adjusts ~₹110 Cr; exact item n/s" (P2 §3.6) | The base includes a **"reversal of OMC trade margin provided earlier"**. The company does not state the amount in the PPT; PL's ~₹110 Cr adjustment remains the size estimate | MGL Q1 FY27 PPT slides 8/10/11 [V-pri] |
| S5 | **Petronet's Qatar 2028+ contract** | "Renewal [K] vs PL 'discussions ongoing, closure in 1–2 qtrs' — not final" (P2 §2.2, §2.7) | **The SPA was signed on 6-Feb-2024:** ~7.5 mtpa for 20 years, **DES basis, 2028–2048**, with offtake GAIL 60% / IOC 30% / BPCL 10%, the same as the 1999 deal. What remains open is the **back-to-back GSPA terms with offtakers**, which management expects to close in **"2–3 quarters"**. The new price is "formula-driven incl. shipping" (undisclosed) | Petronet FY26 AR (Directors' Report, Note 37) [V-pri]; Q1 FY27 call [V-pri] |
| S6 | **Petronet regas tariff** | Dahej ₹62.91 (2024) → ₹66.06 (2025) [V-snip Argus]; "implied blended ≈ ₹58/mmbtu, high-₹50s" (P2 §2.2, E) | **Dahej "around ₹69"/mmbtu and Kochi "around ₹98"/mmbtu** for the current quarter (management, 13-Aug-2026). Regas revenue of **₹1,214 Cr ≈ 176 TBTU of tolling volume × ₹69**, so regas revenue is booked on tolling volume only. Own-LNG sales carry their regas inside the sales margin. ₹69 ≈ ₹66.06 × 1.05, so **the ~5%/yr escalation is intact** [E] | Petronet Q1 FY27 call [V-pri] |
| S7 | **Petronet "₹52.05 offer" and "−₹30 from 2028"** | Reported offer, unconfirmed (P1 trap 7, Force 5; V-snip Argus) | Management, 13-Aug-2026: **"the status quo is there. There is no discussion on tariff revision."** Treat the Argus numbers as **unconfirmed and contradicted** by the company. Print them only as "press reports, denied in effect by management" | Petronet Q1 FY27 call [V-pri] |
| S8 | **Kochi tariff** | "~₹114.5/mmbtu long-term" (P1 trap 7, V-snip Argus) | **~₹98/mmbtu** (management, current quarter) | Petronet Q1 FY27 call [V-pri] |
| S9 | **Petronet vessel-owner claim** | "~₹348 Cr, not provided for" (P2 §2.2, V-snip) | AR: owners of the three chartered vessels claimed **₹89.30 Cr to 31-Mar-2026**, "and have continued to do so". No provision (legal advice). Charters were **suspended under other clauses of the time-charter agreements, not under FM** (CFO, 13-Aug). The ₹348 Cr may be a later cumulative figure; it stays [V-snip] | Petronet FY26 AR Note 46 [V-pri]; Q1 call [V-pri] |
| S10 | **Qatar FM start date** | "4-Mar vs Petronet-linked 28-Feb" conflict (P1 §H-2, §0.3) | **The war began 28-Feb-2026.** Petronet served FM on QatarEnergy on **2-Mar**, and on vessel owners and customers on **3-Mar**. **QatarEnergy invoked FM on 4-Mar.** Petronet served a further FM notice on customers on 5-Mar. **Loadings were disrupted from 3-Mar.** Use "FM from 4-Mar (QatarEnergy)"; "28-Feb" is the war start | Petronet FY26 AR [V-pri] |
| S11 | **Stranded Qatar cargo** | "One stranded cargo delivered 19-Jun" (P2, V PL) | Confirmed. The cargo was carried at **₹258.53 Cr** as stock-in-transit on 31-Mar. It arrived at Dahej on **19-Jun-2026** as the "first Indian LNG carrier to transit the Strait of Hormuz following its reopening" | Petronet FY26 AR [V-pri] |
| S12 | **Petchem progress vs spend** | "~40% physical; spend to date ₹470 Cr — odd" (P2 §2.2, §2.7) | **₹470–472 Cr is the Q1 FY27 petchem spend, not cumulative.** Physical progress is **~38.6% at end-Jul-2026**. Packages tendered total ₹15,548 Cr, of which **₹13,346 Cr is already committed**. Total cost ₹20,685 Cr (750 KTA PDH + 500 KTA PP). The ratio is no longer odd | Petronet FY26 AR [V-pri]; Q1 call [V-pri] |
| S13 | **Petronet FY27 capex** | ₹9,060 Cr (P2, V PL) | **₹9,064 Cr budgeted; FY28 "similar"** | Q1 call [V-pri] |
| S14 | **Petronet use-or-pay (UoP) receivable** | "₹630 Cr one-off in Q4 FY26" only (P1 trap 8) | **Received ₹630.04 Cr against CY2022 dues of ₹643.15 Cr.** UoP receivables at 31-Mar-2026: **₹719.84 Cr gross / ₹413.02 Cr net** after a ₹306.82 Cr provision. By year: CY22 ₹13.11 Cr, **CY23 ₹540.50 Cr**, CY24 ₹117.27 Cr, CY25 ₹48.96 Cr. **₹120.64 Cr waived** against make-up cargoes. CY2024 recovery mechanism approved 9-Apr-2026. **The auditor flags this as an Emphasis of Matter** | Petronet FY26 AR (auditor's report; Note 14) [V-pri] |
| S15 | **Aegis LPG static capacity** | ~226,000 t (primer, P2); "~2.0 lakh MT" (P1 Force 6) | **~245,800 MT existing at 30-Jun-2026**: Kandla 48k, Pipavav c.71k (70,800), Mumbai 20–21k, Mangaluru 82k, Haldia 25k. **Upcoming:** 129k MT LPG at JNPT plus 36k MT ammonia at Pipavav (now commissioned). Throughput capacity is **19.6 mt**; static turns **79×** in FY26 | Aegis Corporate Presentation Oct-2026, slides 6/9/11 [V-pri]; Q1 call [V-pri] |
| S16 | **Aegis liquids capacity** | "Total KL not sourced" (P2 §2.3, §3.6); "~1.7 mn cbm" (P1 Force 6, V-snip) | **2,008k KL existing**: Kandla 952k, Mumbai 334k, Haldia 227k, Mangaluru 193k, Pipavav 117k, JNPT 102k, Kochi 83k. **526k KL upcoming**: JNPT 318k, Kandla 94k, Mumbai 64k, Kochi 50k. So **c.2.5 mn KL incl. upcoming** | Aegis Oct-2026 deck [V-pri] |
| S17 | **Purpose of the Aegis ₹6,000 Cr raise and the CARE "watch – developing"** | "Not disclosed; do not speculate" (P2 §2.3, §2.7) | **Tristar acquisition.** Aegis, via step-down subsidiary Aegis Logistics International Pte Ltd, signed a **definitive agreement to buy c.89.8% of Tristar Holdings Ltd** from Agility Tristar Holdings, Gulf Investment Corporation and Diamond Holdings, for an **equity consideration of US$809 mn** (incl. contingent and deferred-interest components; ≈ ₹7,680 Cr at ₹94.9 [E]). It needs antitrust approvals and is **expected to complete in Q4 FY27**. Aug-2026's "no definitive agreement" has been overtaken | Aegis Corporate Presentation Oct-2026, slide 29 [V-pri] |
| S18 | **Pipavav ammonia terminal** | "Commissioning not confirmed" (P2) | **Commissioned 10-Aug-2026**, 36,000 MT static. A 15-yr take-or-pay with **Hindustan Zinc** (DAP plant) covers part of the capacity. **ITOCHU holds 10%** of Aegis Terminal Pipavav Ltd and intends to go to 25% within 3 years | Aegis Oct-2026 deck [V-pri]; Q1 call [V-pri] |
| S19 | **Aegis net cash FY26** | ₹1,790 Cr (screener basis, P2) | Company figure: **net cash ₹3,523 Cr**; "liquidity reserves" **₹5,940 Cr** (incl. investments). Screener's basis nets all borrowings incl. leases. **State which basis** | Aegis Oct-2026 deck slide 24 [V-pri] |
| S20 | **ATGL CNG stations at Mar-26** | "702 implied by 707 after +5" vs primer 705 (P2 §2.7) | **AR: 705 at 31-Mar-2026.** The Q1 call says "added 5… total 707". Treat as a **net +2** (likely closures or reclassification). Use 705 for Mar-26 and 707 for Jun-26 | ATGL FY26 AR; ATGL Q1 call [V-pri] |
| S21 | **ATGL FY27 capex** | "n/s" (P2 §3.6) | **FY26 capex ₹903 Cr** (AR). For FY27 the CEO said "slightly higher budget compared to last year". No number was given | ATGL FY26 AR; Q1 call [V-pri] |
| S22 | **ATGL sourcing** | "APM for CNG ~30%" (P2, V company release) | Management, portfolio basis: **APM + NWG ≈ 40%; domestic ≈ 62% / R-LNG ≈ 38%** (HH- plus Brent-linked); **long-term contracts 48%; spot ≈ 15% "after the curtailment"**. The 30% figure is APM's share of the CNG requirement, a different denominator (trap 4) | ATGL Q1 call [V-pri] |
| S23 | **NWG price** | "12% of ICB [V PTI 2025] vs '$7.70 for Oct-2026' — unverified" (P1 §H-4) | **ATGL's gas-sourcing head, 22-Jul-2026: NWG "is 12% of the Indian crude basket"**, "significantly more than $5" above APM-type levels in Q1. **At the Sep-2026 ICB ($116.09) this is ≈ $13.9/mmbtu** [E]. **Drop the $7.70 figure** | ATGL Q1 call [V-pri]; PPAC snapshot (ICB) [V-pri] |
| S24 | **IGL Q1 FY27 volume** | 9.7 mmscmd (P2, V PL) | **9.66 mmscmd vs 9.13** (+5.8%). CNG **5.31 mn kg/day**; record day **58 lakh kg** | IGL Q1 call [V-pri] |
| S25 | **IGL CNG stations** | Primer 1,024 vs screener text 819 (P2 §2.7) | **1,024 at 31-Mar-2026** (70 added in FY26). FY26 capex **₹1,120 Cr**; >3.7 lakh new homes connected; 12 GAs, 32 districts, 4 states | IGL FY26 AR [V-pri] |
| S26 | **IGL FY27 capex split** | ₹1,800–2,000 Cr = core ₹1,200–1,500 + diversification ₹500–600 (P2, V PL) | Same total, but **core is "₹1,200–1,300 Cr, maybe maximum ₹1,500 Cr"**. Q1 FY27 capex **₹327 Cr** (PL ₹330) | IGL Q1 call [V-pri] |
| S27 | **IGL Jun-26 ownership swing** | "FII 17.1% → 9.7%, DII → 30.1%, unexplained" (P2 §2.4) | Aggregator data: **mutual funds +6.87 pp to 16.33%**; insurers flat (13.36%); FII holders fell from 256 to 229. It was **an FII-to-MF transfer** (pattern consistent with block deals). The trigger is still unsourced | marketsmojo (Jun-26 snapshot) [V-snip] |
| S28 | **MGL FY27 capex** | "Raised to ₹1,800 Cr from ₹1,200 Cr" (P2, V PL) | CFO: "an increase of almost **₹1,500–1,800 Cr**, subject to manpower"; "ready to spend almost ₹1,800 Cr". Q1 ₹350 Cr. Debt possible; DPS ₹30 to be maintained | MGL Q1 call [V-pri] |
| S29 | **MGL FY26 EBITDA/scm** | ₹8.3 (primer) / ₹8.66 (E) | **₹8.67/scm** (company); EBITDA ₹1,451.07 Cr; gross revenue ₹9,059.77 Cr | MGL FY26 AR [V-pri] |
| S30 | **MGL PNG-D base** | "2.2 mn active vs 3.24 mn connected — state which" | **32,41,195 connections** (Jun-26); **2.17 mn "burning" conversions**. Management: "~3.3 mn connected, ~2.3 mn consuming", addressable 3.8–4.0 mn | MGL Q1 PPT; Q1 call [V-pri] |
| S31 | **Qatar FM status** | Latest firm item: FM for Aug-2026 (Reuters 13-Aug) | **Extended to end-Nov-2026** for Asian and European buyers incl. at least one Indian buyer (Bloomberg via Tank Terminals, 28-Sep-2026). **Qatar has exported 18 cargoes this year vs 509 a year earlier (−96%)**. A Pakistani report of 21-Oct says FM runs to 6-Nov for Pakistan | Tank Terminals [V-sec]; The Nation 21-Oct [V-snip] |
| S32 | **Hormuz was not closed continuously** | P1 implies an unbroken disruption since March | **A ceasefire reopened Hormuz around late Jun / early Jul-2026.** MoPNG amended the Natural Gas (Supply Regulation) Order on **~4-Jul-2026** (a Saturday), withdrawing most provisions and ending pooled gas from the 2nd week of July. **The conflict re-escalated "7–8 days later"**, and Hormuz flows were hit again. HH-linked volumes (MGL's ~1.5 mmscmd GAIL contract) remained short. IGL's 29-Aug CNG hike cited "the re-escalation of the West Asia crisis" | MGL Q1 call [V-pri]; ATGL Q1 call [V-pri]; DT Next 5-Jul [V-sec]; AIR 29-Aug [V-sec] |
| S33 | **FY26 LPG import value** | "~$11.3 bn, read from a dense row — spot-check" (P1 §H-20) | **21.3 MMT, $11.3 bn, ₹99,149 Cr** (FY25: 20.7 MMT, $12.5 bn, ₹1,05,679 Cr). Cross-check: 21.3 mt × FY26 CP-type average $532.47/t ≈ $11.3 bn [E] | PPAC Ready Reckoner FY26 (imports table); PPAC snapshot (LPG $/MT) [V-pri] |
| S34 | **Adani OFAC/SEC** | "OFAC $275m (18-May-2026) and SEC $18m [V-snip]" in the ATGL governance context | The **OFAC $275 m settlement was by Adani Enterprises** over Iran-origin LPG bought via a Dubai trader (Nov-2023 to Jun-2025; 32 USD payments ≈ $192.1 m; announced 18-May-2026; statutory maximum $384.2 m). **The SEC $18 m civil settlement was by Gautam and Sagar Adani personally** (Adani Green-linked bond disclosures). **ATGL is party to neither.** The DOJ moved to drop the case in May; the court dismissed it in Aug | Claims Journal / Moneylife / IANS [V-snip] |
| S35 | **Delhi CNG path** | ₹77.09 (Jan) → ₹83.09 (26-May) → +₹3.89 on 29-Aug [V-snip] | **+₹3.89 to ₹86.98 on 29-Aug-2026 confirmed**; Gurugram ₹92.1, Noida/Ghaziabad ₹95.59 [V-sec AIR]. The ₹77.09 → ₹83.09 steps remain [V-snip] | newsonair.gov.in 29-Aug-2026 [V-sec] |
| S36 | **Commercial 19-kg LPG path** | ₹1,691.50 (Jan) → ₹3,113.50 (Jun) [V-snip] | Adds **₹2,930 (1-Jul, −₹183.50)** and **₹2,810 (1-Oct, +₹62.50; the second monthly rise)** | Business Today 1-Jul; Goodreturns 1-Oct [V-snip] |
| S37 | **Petronet's offtaker contract mix** | Qatar 7.5 mtpa base only (P2) | Long-term book: Qatar 7.5 mtpa (FOB to Apr-2028); **MARC/Exxon Australia 1.425 mtpa to 2035 (Kochi)**; **ExxonMobil Asia Pacific ~1.2 mtpa, 15-yr SPA, supplies began Apr-2026**. Both Exxon contracts go to BPCL 40 / IOC 30 / GAIL 30. **Deepak Fertilisers 0.5 mtpa tolling at Dahej started May-2026** (2 cargoes by mid-Aug) | Petronet FY26 AR; Q1 call [V-pri] |
| S38 | **ATGL contingent exposure** | Not in Parts 1–3 | **₹3,472.15 Cr corporate guarantee** for performance bank guarantees to PNGRB for the IOAGPL JV's authorisations. Also a **₹103.63 Cr gas-supplier claim** (FY14–FY22) alleging that allocated domestic gas was used for non-specified purposes (refuted), and a NOIDA Authority licence-fee demand of ₹150 Cr | ATGL FY26 AR Note 43 [V-pri] |
| S39 | **IGL contingent exposure** | Not in Parts 1–3 | **DDA licence-fee demand of ₹330.73 Cr** (to Mar-2016, ex-interest). Delhi HC disposed of it on 11-Mar-2026, relegating it to the **AMRCD** dispute mechanism. **Auditor's Emphasis of Matter**; a second EoM covers the New Labour Codes | IGL FY26 AR [V-pri] |
| S40 | **Exclusivity / common carrier** | "Marketing exclusivity lapsed; open access legally possible" (P1 trap 11) | PNGRB **withdrew (order 27-May-2024) its Sep-2021 notice proposing to declare 54 CGD networks, incl. IGL-Delhi and MGL-Mumbai, common/contract carriers**. Infrastructure exclusivity for Delhi and Mumbai "expired in 2012" per the report. The proposal could be revived. Also, IGL still litigates Gurugram but has **conditionally accepted** part-area authorisation; molecules in the disputed part still flow via IGL in bulk | PSU Watch 3-Jun-2024 [V-sec]; IGL Q1 call [V-pri] |

## 4.1 Verification table — the 40 figures the writer will lean on

"Agrees?" compares the value with Parts 1–3. Of the 40 figures, **38 are [V-pri]** (fetched this session from a filing, transcript, presentation, AR, PPAC or PNGRB data). One (#15) is from the World Bank, an international-institution primary series, and one (#40) is [V-sec]. Row 13 has a secondary source as well (AIR, for the hike date). The weaker items are listed below the table.

| # | Figure | Value | Primary source (fetched 21-Oct-2026) | Tag | Agrees with P1–3? |
|---|---|---|---|---|---|
| 1 | APM gas price, Oct-2026 (formula / ceiling) | $11.22 / **$7.00** per mmbtu | PPAC Snapshot Oct-2026, Table 23 | V-pri | Yes |
| 2 | APM formula peak | **$11.59 (May-2026)**; Jul $8.73, Aug $7.86, Sep $9.00 | PPAC Snapshot Table 23 | V-pri | Yes; Jul–Sep path new |
| 3 | HPHT ceiling | **$9.89** (Oct-26 to Mar-27); $8.90 (Apr–Sep-26) | PPAC Snapshot Table 23 | V-pri | Yes |
| 4 | Brent, Sep-2026 | **$116.77/bbl** (PPAC); $116.8 (World Bank) | PPAC Snapshot; WB CMO monthly | V-pri ×2 | Yes |
| 5 | India LNG imports FY26 | **34,427 mmscm; $13.4 bn** (FY25 35,720; $14.9 bn) | PPAC Snapshot Table 2 | V-pri | Volume yes; value new |
| 6 | LNG imports Apr–Sep 2026 | **18,189 mmscm, $8.5 bn** vs 17,414 / $6.9 bn | PPAC Snapshot Table 2 | V-pri | Yes |
| 7 | LPG imports FY26 | **21.3 MMT, $11.3 bn, ₹99,149 Cr** | PPAC Ready Reckoner FY26 | V-pri | Yes (closes §H-20) |
| 8 | LPG consumption Apr–Sep 2026 | **13.7 mt vs 16.2 (−15.5%)**; production 7.9 vs 6.3 | PPAC Snapshot Tables 11/15 | V-pri | Yes |
| 9 | Bulk LPG Apr–Sep 2026 | **186.9 vs 488.8 TMT (−61.8%)**; auto-LPG +34.2% | PPAC Snapshot Table 15 | V-pri | Yes |
| 10 | Active domestic LPG customers | **3,267 lakh (1-Oct-2026)** vs 3,339 (1-Apr) | PPAC Snapshot Table 16 | V-pri | Yes |
| 11 | CNG stations, India | **9,158 (31-Aug-2026)** | PPAC Snapshot Table 22 (PNGRB) | V-pri | Yes |
| 12 | PNG-D connections, India | **1,76,89,278**; commercial 56,378; industrial 22,964 | PPAC Snapshot Table 22 (PNGRB) | V-pri | Yes |
| 13 | Delhi / Mumbai CNG | **₹86.98 / ₹89.00 per kg** (PNG ₹50.59 / ₹53.00 per scm) | PPAC Snapshot Table 24; AIR 29-Aug (hike date) | V-pri + V-sec | Yes |
| 14 | IGX GIXI, Sep-2026 | **₹2,712 = $28.4/mmbtu; 456 mmscm** | PPAC Snapshot Table 24 | V-pri | Yes |
| 15 | Global benchmarks, Sep-2026 | **TTF $25.42; HH $2.95; Japan LNG import $14.25** per mmbtu | World Bank CMO monthly (Oct-2026) | V-pri (IFI) | New (closes part of §H-1) |
| 16 | Delhi petrol / diesel | **₹102.12 / ₹95.20** (1-Oct-2026) | PPAC Snapshot Table 25 | V-pri | Yes |
| 17 | Petronet Q1 FY27 SA PBT / PAT | **₹1,514 Cr / ₹1,133 Cr** (+33%); cons. PAT ₹1,137 Cr | Petronet Q1 call | V-pri | Yes |
| 18 | Utilisation, Q1 FY27 | **Dahej 65.6% (22.5 mtpa); Kochi 23.27%; company 58%** (vs 76%) | Petronet Q1 call | V-pri | Yes |
| 19 | Petronet Q1 one-offs | **Trading gain ₹301 Cr; inventory gain ₹193 Cr** | Petronet Q1 call | V-pri | Yes (PL ₹300/₹190) |
| 20 | Regas tariff | **Dahej ~₹69; Kochi ~₹98 per mmbtu**; regas revenue ₹1,214 Cr | Petronet Q1 call | V-pri | **No**, see S6/S8 |
| 21 | Petronet capex | **FY27 ₹9,064 Cr; FY28 similar** | Petronet Q1 call | V-pri | ≈ Yes |
| 22 | Petchem project | **₹20,685 Cr; 38.6% progress (end-Jul-26); ₹13,346 Cr committed** | Petronet FY26 AR | V-pri | Refines (S12) |
| 23 | Qatar contract | **7.5 mtpa FOB to Apr-2028; new SPA 7.5 mtpa DES 2028–2048, signed 6-Feb-2024** | Petronet FY26 AR | V-pri | Resolves conflict (S5) |
| 24 | UoP settlement | **₹630.04 Cr received** (CY22); receivable ₹719.84 Cr gross / ₹413.02 Cr net | Petronet FY26 AR | V-pri | Yes + new |
| 25 | Vessel-owner claims | **₹89.30 Cr to 31-Mar-2026**, continuing, unprovided | Petronet FY26 AR | V-pri | **No** (₹348 Cr, S9) |
| 26 | ATGL Q1 FY27 volume | **303 mmscm (+13%)**: CNG +18%, PNG +4%; incl. JV 496 | ATGL Q1 call; Adani release (P2) | V-pri | Yes (upgrades IANS V-snip) |
| 27 | ATGL network, Jun-26 | **707 CNG stations SA / 1,167 incl. JV; 11.41 lakh PNG-D; 53 GAs** | ATGL Q1 call | V-pri | Yes |
| 28 | ATGL FY26 capex / net worth | **₹903 Cr / ₹4,824 Cr**; cash ₹800 Cr | ATGL FY26 AR | V-pri | New |
| 29 | IOAGPL (JV) FY26 | **681 mmscm (+26.1%); 464 CNG stations; 2.16 lakh PNG homes; 19 GAs** | ATGL FY26 AR | V-pri | New |
| 30 | NWG pricing | **12% of the Indian crude basket** | ATGL Q1 call | V-pri | Resolves §H-4 |
| 31 | IGL Q1 FY27 volume | **9.66 mmscmd** (vs 9.13); CNG 5.31 mn kg/day | IGL Q1 call | V-pri | ≈ Yes (9.7) |
| 32 | IGL sourcing Q1 FY27 | **Domestic 48% (APM ~2.6, NWG 1.26, HPHT 0.6–0.7 mmscmd); imported 52% (LT 3.9–4.0, pooled 0.6–0.7, spot ~3% at $17–22)** | IGL Q1 call | V-pri | Yes + detail |
| 33 | IGL CNG by vehicle | **Cars 48–50%, CVs 19%, taxis 14%, buses 12%, 3W 7–8%** | IGL Q1 call | V-pri | Yes |
| 34 | IGL network / capex FY26 | **1,024 CNG stations; capex ₹1,120 Cr** | IGL FY26 AR | V-pri | Yes |
| 35 | MGL Q1 FY27 per-scm | **₹54.35 / ₹39.85 / ₹14.50 / ₹7.91** (realisation / gas cost / GM / EBITDA); volume 4.766 mmscmd | MGL Q1 PPT | V-pri | Yes; opex corrected (S2) |
| 36 | MGL FY26 | **EBITDA ₹1,451.07 Cr, ₹8.67/scm; volume 4.59 mmscmd (+8.25%)** | MGL FY26 AR | V-pri | Yes (S29) |
| 37 | Aegis Q1 FY27 | **Normalised EBITDA ₹727 Cr (gas ₹591 / liquids ₹136); PAT ₹545 Cr; EPS ₹13.80** | Aegis Q1 PPT | V-pri | Yes (upgrades V-snip) |
| 38 | Aegis Q1 FY27 LPG volumes | **Logistics 1,124 kt (−3%); distribution 277 kt (+91%); sourcing 121 kt (+1%)** | Aegis Q1 PPT; call | V-pri | Yes (closes §H-6 volumes) |
| 39 | Aegis Tristar deal | **c.89.8% of Tristar Holdings for US$809 mn equity; completion Q4 FY27** | Aegis Corporate Presentation Oct-2026 | V-pri | New (S17) |
| 40 | Qatar FM horizon | **Extended to end-Nov-2026; Qatar 18 cargoes YTD vs 509** | Tank Terminals/Bloomberg 28-Sep-2026 | V-sec | New (S31) |

**Not upgraded this session (still [V-snip] or [E]):**
- JKM spot levels (only "~$21" mid-Aug). The World Bank Japan series is a contract-heavy import average, not JKM.
- Commercial LPG ₹2,810 (1-Oct).
- The Delhi CNG ₹77.09 → ₹83.09 steps.
- The national CNG passenger-vehicle sales share of 21.98% for FY26, which is FADA via a news page.
- MWP 2034 targets.

**Credibility rules where sources conflict:**
- The company transcript or AR beats a broker note: CUGL volume, MGL opex, tariffs.
- PPAC beats news.
- For the regas tariff, a management statement on the call (₹69/₹98) beats Argus (₹66.06 / ₹114.5 / ₹52.05). Argus is secondary, and its figures predate the expansion.

## 4.2 Company deep-dives (primary documents)

### 4.2.1 Adani Total Gas (ATGL · 542066)

**Management-guidance digest** (Q1 FY27 call, 22-Jul-2026: CEO Sanjay Pandita, interim CFO Preyash Jhaveri, gas-sourcing head Ravindra Desai; transcript filed with BSE 28-Jul-2026) [V-pri]:
- **Why margins fell from ~25% to ~15%.** The CEO named two causes: buying gas at market-driven prices, and an APM allocation "slowly going down". Sourcing said margins should return "to the last level or better" once the Middle East crisis ends, as US and Qatari supply returns.
- **Sourcing mix (portfolio basis).**
  - Domestic about 62% and imported R-LNG about 38% (Henry Hub- and Brent-linked).
  - Within that, APM + NWG is about 40% and long-term contracts about 48%.
  - **Spot is ~15% of consumption "after the curtailment".** Spot is the swing cost.
  - NWG is priced at **12% of the Indian crude basket**, with no ceiling mentioned. Brent above $107 in the crisis lifted NWG cost.
- **Pooled-gas withdrawal.** Pooled gas was the crisis allocation. Its withdrawal "after the peace deal" was a "sudden decision by the government". ATGL and the industry are lobbying for its return, and management expects "positive news" if tensions persist. Mitigation is mid-term contracts now and long-term contracts once the market stabilises.
- **Volume and pricing.**
  - Volume growth will "continue in a similar manner" (about 13%); the challenge is the spot gap.
  - There is room on the CNG–petrol arbitrage, but pricing is calibrated GA by GA, given competing CGD areas.
  - LCV, PV and taxi CNG demand is growing at double digits, and CNG vehicle numbers about 30%.
- **PNG-D drive.**
  - At least the current rate (~38k a quarter) will be held.
  - Shortages of skilled plumbers are being met through ITI and diploma tie-ups.
  - "Deemed approval" rules help, and 90–99% of districts are cooperative.
  - Conversion of LPG reticulated systems is being explored.
  - A domestic customer uses about 0.38–0.40 scmd.
- **Capex.** "Slightly higher budget compared to last year"; no number given. FY26 capex was ₹903 Cr [V-pri AR].
- **E-mobility.** 5,306 charge points (58 MW); units sold +100% YoY; target 10,000 points.

**Concall KPI table (ATGL standalone unless noted)** [V-pri call; P2 release]

| KPI | Q1 FY27 | Q1 FY26 | Q4 FY26 | Note |
|---|---|---|---|---|
| Gas sales volume (mmscm) | **303** | 267 [E from +13%] | — | CNG +18%, PNG +4% |
| Incl. IOAGPL JV (mmscm) | 496 | — | — | release |
| Revenue (gross, ₹ Cr) | 1,908–1,910 | 1,500 | — | +27% |
| EBITDA (₹ Cr) | **281** | 301 | — | −7% |
| EBITDA/scm (₹) [E] | 9.3 | 11.3 | ~10.5 | — |
| CNG stations | 707 SA / 1,167 incl. JV | — | 705 (AR) | — |
| Domestic PNG (lakh) | 11.41 SA / 13.74 incl. JV | — | 10.99 (AR) | +38k in Q1 |
| I&C customers | 10,422 SA / 12,326 incl. JV | — | 9,965 (AR) | commercial +392, industrial +56 |
| Steel pipeline (inch-km) | 15,987 SA / ~28,600 incl. JV | — | 15,572 (AR) | — |
| Domestic : imported gas | 62 : 38 | — | — | APM+NWG ~40%; spot ~15% |
| EV charge points | 5,306 (58 MW) | — | — | target 10,000 |

**5-year history (consolidated; ₹ Cr)** [V-scr, fetched 21-Oct-2026]

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Sales (net of excise) | 3,038 | 4,378 | 4,475 | 5,000 | 5,894 |
| Operating profit | 773 | 870 | 1,104 | 1,137 | 1,195 |
| OPM % | 25% | 20% | 25% | 23% | 20% |
| Net profit | 509 | 546 | 668 | 654 | 656 |
| EPS ₹ | 4.63 | 4.97 | 6.07 | 5.95 | 5.96 |
| ROCE % | 25% | 21% | 21% | 17% | 15% |

**8-quarter trend (consolidated; ₹ Cr)** [V-scr]

| | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|
| Sales | 1,219 | 1,294 | 1,341 | 1,379 | 1,451 | 1,507 | 1,557 | 1,754 |
| Operating profit | 306 | 265 | 266 | 293 | 295 | 305 | 301 | 270 |
| OPM % | 25% | 20% | 20% | 21% | 20% | 20% | 19% | 15% |
| Net profit | 186 | 142 | 155 | 165 | 163 | 159 | 168 | 142 |

**Annual-report findings (FY26 Integrated AR, BSE 29-May-2026)** [V-pri]:
- **Scale at Mar-26:**
  - 705 CNG stations (CODO/DODO models: 140);
  - 10.99 lakh PNG-D (+1.37 lakh in FY26); 9,965 I&C customers;
  - 15,572 inch-km of steel and 8,306 km of MDPE;
  - 9 new city gate stations (CGS) and 1 new LCNG station in FY26;
  - CBG 1,654 MT sold; organic fertiliser 4,575 MT.
  - Net worth ₹4,824 Cr; cash ₹800 Cr; capex ₹903 Cr.
- **IOAGPL JV (50:50 with IOC).**
  - FY26 volume **681 mmscm (+26.1%)**; 19 GAs across 10 states and 3 UTs.
  - 2.16 lakh PNG homes; 544 industrial and 1,020 commercial customers; 464 CNG stations.
  - Funding: rated AA- by CARE and CRISIL; a ₹1,400 Cr compulsorily convertible debenture (CCD) issue; ~₹3,100 Cr of new debt tied up.
  - **ATGL + JV FY26 volume ≈ 1,814 mmscm ≈ 4.97 mmscmd** [E]. The JV is growing about twice as fast as standalone ATGL.
  - Smart Meters Technologies (JV with GSEC): capacity 7.2 lakh meters a year; 1.83 lakh sold in FY26.
- **Contingent liabilities (Note 43):**
  - A **₹3,472.15 Cr corporate guarantee** backs the performance bank guarantees to PNGRB for the JV's authorisations. It is unchanged YoY, and is **~71% of ATGL's net worth** [E]. If the JV misses minimum work programme (MWP) targets, the guarantee could be invoked.
  - **Gas suppliers' claim of ₹103.63 Cr** (FY14–FY22) alleging that allocated domestic gas was used for non-specified purposes. ATGL refutes it as a data error. It matters because the APM-diversion test will tighten as allocation shrinks.
  - NOIDA Authority licence-fee demand ₹150 Cr (revised Apr-2023); HSVP ₹39.18 Cr (₹25.58 Cr paid); indirect taxes ₹27.49 Cr; property tax ₹15.57 Cr.
  - Management "not expecting any future cash outflow".
- **Related parties.** TotalEnergies Gas & Power Projects India and Adani group entities appear in the related-party note at small values. No material gas-purchase or royalty flows were found in the lines read; a full RPT scan was not done [V-pri partial].
- **Risks named:** APM reduction; spot exposure; permissions and RoW; competition at GA borders.

### 4.2.2 Petronet LNG (PETRONET · 532522)

**Management-guidance digest** (Q1 FY27 call, 13-Aug-2026: Director Finance Saurav Mitra and team; transcript filed 19-Aug-2026) [V-pri]:
- **Mix shift persists.** Third-party tolling is replacing Qatari term volume, and the pattern "continues" into Q2.
  - **More than two-thirds of the missing Gulf volume is being brought in by offtakers** under tolling contracts.
  - April was weak; May–June improved, and the run-rate stayed at May–June levels.
  - Utilisation "should be better slightly".
- **How the trading gain works.**
  - Q1 had ₹301 Cr of trading gains and ₹193 Cr of inventory gains. They arise when spot trades far above term prices and throughput drops.
  - Only **~6 TBTU** of spot trading generated the gain.
  - Management calls this an "established business model" seen after COVID and in 2022. **It is not tied to spare Qatari capacity.**
- **Qatar.**
  - QatarEnergy declares FM monthly, about a week before month-end. At the call it ran to end-August.
  - Qatar is ramping production (Bloomberg, 12-Aug). Petronet will lift FOB as soon as Hormuz opens.
  - Petronet does not buy replacement cargoes itself because of the tax inefficiency of buy-and-resell. Offtakers import directly.
- **UoP mechanics.** Offtakers' extra tolling cargoes first satisfy the current-year commitment; any excess then retires past UoP dues. GAIL had no UoP. The Qatar SPA itself is take-or-pay, not use-or-pay.
- **Tariffs.** Dahej ~₹69 and Kochi ~₹98 per mmbtu. **"No discussion on tariff revision."** Offtaker terms for the 2028 Qatar volumes should close in 2–3 quarters.
- **New contracts.**
  - Deepak Fertilisers (0.5 mtpa at Dahej) began in May-2026, 2 cargoes so far.
  - ExxonMobil's Kochi volumes have started.
  - The new Qatar SPA is DES and formula-priced including shipping. Most time charters end with the old SPA, except one vessel.
- **Capex and petchem.**
  - FY27 capex ₹9,064 Cr; FY28 similar.
  - Petchem: ~40% physical progress, on schedule; Q1 spend ₹472 Cr; propane supply contract in 2027 (Middle East and US); ethane-handling (600 ktpa) and Deepak Phenolics contracts signed.
  - Equity IRR not disclosed (2023 guide: 30%); 25-year plant life.
- **Kochi–Bengaluru pipeline:** mechanical completion "by end of this quarter" (Sep-2026); not re-verified after the call.
- **Ind AS 116 effects in Q1:** gross margin +₹14 Cr; forex −₹5 Cr; other expenses +₹8 Cr; depreciation ₹66 Cr; finance cost ₹48 Cr.

**Concall KPI table** [V-pri call; P2 PL for the regas/sales split]

| KPI | Q1 FY27 | Q4 FY26 | Q1 FY26 |
|---|---|---|---|
| Dahej throughput (TBTU) | **192** | 201 | 207 |
| Company throughput (TBTU) | **207** | 219 | 220 |
| Dahej utilisation | **65.6%** (22.5 mtpa) | 90% (17.5) | 92% (17.5) |
| Kochi utilisation | **23.27%** | ~20% | — |
| Company utilisation | **58%** | 76% | 76% |
| Regas revenue (₹ Cr) | **1,214** | — | — |
| Tolling / sales volume (TBTU) | 176 / 31 (PL) | 127 / 92 | 102 / 118 |
| Trading / inventory gain (₹ Cr) | **301 / 193** | — | — |
| SA PBT / PAT (₹ Cr) | **1,514 / 1,133** | — / 1,338 | 1,136 / 851 |
| Tariff Dahej / Kochi (₹/mmbtu) | **~69 / ~98** | — | — |

**5-year history (consolidated; ₹ Cr)** [V-scr]

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Sales | 43,169 | 59,899 | 52,729 | 50,982 | 43,495 |
| Operating profit | 5,250 | 4,854 | 5,209 | 5,525 | 5,338 |
| OPM % | 12% | 8% | 10% | 11% | 12% |
| Net profit | 3,438 | 3,326 | 3,652 | 3,973 | 3,913 |
| EPS ₹ | 22.92 | 22.17 | 24.35 | 26.48 | 26.08 |
| ROCE % | 30% | 26% | 26% | 25% | 23% |

**8-quarter trend (consolidated; ₹ Cr)** [V-scr]

| | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|
| Sales | 13,024 | 12,227 | 12,316 | 11,880 | 11,009 | 11,164 | 9,442 | 5,558 |
| Operating profit | 1,202 | 1,247 | 1,512 | 1,159 | 1,117 | 1,198 | 1,861 | 1,535 |
| OPM % | 9% | 10% | 12% | 10% | 10% | 11% | 20% | 28% |
| Net profit | 871 | 902 | 1,095 | 842 | 830 | 870 | 1,371 | 1,137 |

**Annual-report findings (FY26 AR)** [V-pri]:
- **Contract book:**
  - Qatar: 7.5 mtpa for 25 years, FOB, supplies since 2004 and running to Apr-2028. Offtake via GSPAs with GAIL 60 / IOC 30 / BPCL 10. Shipped in three long-term-chartered carriers (Disha, Raahi, Aseem; 25-year charters from an NYK/K-Line/MOL/SCI consortium) plus Prachi.
  - New Qatar SPA (6-Feb-2024): 7.5 mtpa, DES, 2028–2048, same offtake split.
  - MARC (ExxonMobil Australia): 1.425 mtpa to 2035, delivered at Kochi; BPCL 40 / IOC 30 / GAIL 30 (GSPA to Nov-2035).
  - ExxonMobil Asia Pacific: ~1.2 mtpa for 15 years, **from Apr-2026**.
- **War timeline** (S10): FM chain 2/3/4/5-Mar; loadings disrupted from 3-Mar; the stranded cargo (₹258.53 Cr) arrived 19-Jun.
- **Vessel claims** ₹89.30 Cr to 31-Mar, not provided for (S9).
- **UoP** (S14): ₹719.84 Cr gross receivable; **auditor Emphasis of Matter**. CY2023 dues (₹540.50 Cr) are the big open item; bank guarantees have been received from most customers.
- **Contingent liabilities (Note 37)** are modest:
  - Afcons claim ₹106.66 Cr (₹65.40 Cr award already provided);
  - CTCI–CINDA ₹49.59 Cr + $22.22 lakh (Dahej 2.5 mtpa expansion EPC);
  - B.L. Kashyap ₹85.33 Cr (office building);
  - legacy customs and service-tax cases.
  - **No large regulatory contingent was disclosed.**
- **Projects:**
  - Petchem: 38.6% progress at end-Jul-2026; ₹13,346 Cr committed; LNG cold-energy integration saves 12–15 MW.
  - **Gopalpur 5 mtpa, ₹6,354.80 Cr:** pre-project work complete; **environmental clearance "at an advanced stage"**; 80-acre land paid for and possessed; Odisha MoU 8-Apr-2025. **No FID or EPC award yet.**
  - Truck-loading bays: Dahej 8 → 14, Kochi 4 → 6. The small-scale LNG thesis (8–10 mtpa trucking market in 6–8 years) is supported by 4 LNG stations in South India.
- **Market data cited in the AR:** India's LNG imports were ~26.0 MMT in FY26 vs 27.0 in FY25, with no shipments from Qatar or the UAE in Mar-2026. New long-term contracts signed by peers include Uniper–GSPC (0.5 mtpa, 10 years from 2028) and TotalEnergies (~0.4 mtpa).

### 4.2.3 Aegis Logistics (AEGISLOG · 500003)

**Management-guidance digest** (Q1 FY27 call, 14-Aug-2026: CMD Raj Chandaria and CFO Murad Moledina; Q1 FY27 PPT; Corporate Presentation Oct-2026) [V-pri]:
- **Distribution margin is re-based.**
  - The "₹4,000/t margin… till FY24–25 is history".
  - The **blended full-year margin should be "₹7,000+ per tonne" and sustainable**. Q4 FY26 and Q1 FY27 margins were about three times ₹5,000/t, i.e. windfall levels.
  - As war premia fade, management expects volume-driven procurement savings to replace them. Its example: VLGC freight ~$15/t vs ~$50/t on medium gas carriers, worth ≈ ₹3,000/t.
- **Unit economics (CFO's method).**
  - Logistics throughput earns about **₹1,000/t** of EBITDA.
  - Sourcing is "a very low contributor" (~$85–90 on the analysts' metric).
  - Divide the rest of gas EBITDA by distribution tonnes.
  - **Q1 FY27 implied distribution EBITDA ≈ (₹591 Cr − 1,124 kt × ₹1,000) ÷ 277 kt ≈ ₹17,300/t** [E]. That is consistent with "3× of ₹5,000".
- **Volume.**
  - Logistics: "worst-case" growth of ~25% a year.
  - Distribution: target **2 mt "next year or the year next"**. FY26 was 0.75 mt, FY27 should exceed 1 mt and FY28 exceed 1.5 mt, i.e. "closer to 50%" growth.
  - Distribution needs almost no capex because the franchise model has franchisees fund the assets.
- **Capex and funding.**
  - **~$1.2 bn in FY27; a ~$5 bn pipeline to FY31.**
  - Gearing target ~0.6. Funding mixes equity, accruals and debt. AVTL is self-funded through equity dilution.
  - Cash by entity: standalone ₹2,700 Cr; SEAL ₹410 Cr; Aegis Gas ₹840 Cr; Aegis International ₹306 Cr.
  - **Tristar** (S17, US$809 mn for 89.8%, completion Q4 FY27) is the "inorganic" leg behind the 21-Oct EGM and the CARE watch.
- **Port-by-port:**
  - **Mumbai:** 334k KL + 21k MT LPG; +64k KL (₹125 Cr) in H1 FY27.
  - **JNPA:** 101.9k KL now; expansion of 318.1k KL + 77,236 MT LPG + 35k tpa bottling (₹1,675 Cr); first ~100k KL in Q3 FY27; **new 52,000 MT refrigerated LPG tank approved**.
  - **Haldia:** 25k MT LPG under an exclusive HPCL terminalling agreement **to 2038**; 226,890 KL liquids; 3 acres added.
  - **Kandla:** 952k KL + 48k MT LPG; VLGC-compliant; CRL-4 (+94,148 KL) next year; L&T MoU for ammonia terminals.
  - **Pipavav:** LPG total 70,800 MT; a liquids rail gantry on a 15-yr take-or-pay (>0.5 mtpa); APM Terminals' VLGC liquids jetty; ammonia terminal commissioned (HZL 15-yr take-or-pay; ITOCHU 10% → 25%).
  - **Kochi:** 82,545 KL → 132,122 KL (+49,577) by early FY28.
  - **Mangaluru:** 82k MT LPG; 193k KL fully used; +60k KL under evaluation; ₹52.5 Cr rail gantry and bottling.
  - **Vadhavan:** MoU, potential ~₹20,000 Cr.
  - **Pipelines:** Jamnagar–Loni LPG pipeline now operational; Kandla–Gorakhpur in H1 FY27. Both are evacuation enablers for Kandla and Pipavav.
- **Other.**
  - Shipments are shifting to US VLGCs: US-to-India LPG reached ~1 mt (June report). This favours big terminals (Mangaluru, Pipavav).
  - Aegis Gas FY26 other income of ~₹870 Cr was the gain on selling Hindustan Aegis, eliminated on consolidation.

**Concall KPI table** [V-pri PPT/call]

| KPI | Q1 FY27 | Q1 FY26 | YoY | FY26 | FY25 |
|---|---|---|---|---|---|
| Revenue (₹ Cr) | 2,357 | 1,719 | +37% | 8,333 | 6,764 |
| Normalised EBITDA (₹ Cr) | **727** | 256 | +184% | 1,599 | 1,173 |
| — Gas division | **591** | ~149 | +296% | 1,127 | — |
| — Liquids division (revenue / EBITDA) | 178 / **136** | 144 / 106 | +24% / +28% | 644 / 472 | 650 / 498 |
| PAT (₹ Cr) / EPS (₹) | 545 / 13.80 | 175 / 3.74 | +212% / +269% | 1,107 / 25.59 | 788 / 18.90 |
| LPG logistics throughput (kt) | 1,124 | 1,161 | −3% | 5,152 | 4,523 |
| LPG distribution (kt) | **277** | 145 | +91% | 754 | 521 |
| LPG sourcing (kt) | 121 | 119 | +1% | 607 | 597 |
| LPG static (kMT) / throughput-to-static turns | ~246 / — | — | — | 246 / 79× | — |
| Liquids storage existing / upcoming (KL) | 2,008k / 526k | — | — | — | — |
| Net cash (company def., ₹ Cr) | — | — | — | 3,523 | 307 |

**5-year history (consolidated; ₹ Cr)** [V-scr]

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Sales | 4,631 | 8,627 | 7,046 | 6,764 | 8,333 |
| Operating profit | 535 | 672 | 923 | 1,098 | 1,452 |
| OPM % | 12% | 8% | 13% | 16% | 17% |
| Net profit (incl. NCI) | 385 | 511 | 672 | 787 | 1,107 |
| EPS ₹ (attributable) | 10.19 | 13.19 | 16.22 | 18.90 | 25.59 |
| ROCE % | 17% | 16% | 15% | 13% | 13% |

**8-quarter trend (consolidated; ₹ Cr)** [V-scr]

| | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|
| Sales | 1,750 | 1,707 | 1,705 | 1,719 | 2,294 | 1,725 | 2,594 | 2,357 |
| Operating profit | 224 | 233 | 409 | 240 | 291 | 297 | 624 | 714 |
| OPM % | 13% | 14% | 24% | 14% | 13% | 17% | 24% | 30% |
| Net profit | 152 | 160 | 318 | 175 | 244 | 233 | 455 | 545 |

**Annual-report and filing findings** (FY26 AR, BSE 14-Jul-2026; Q1 PPT balance sheet; Oct-2026 deck) [V-pri]:
- **Consolidated balance sheet, FY26:**
  - Equity attributable to owners ₹6,055 Cr; **non-controlling interest ₹2,729 Cr** (FY25 ₹1,091 Cr), the AVTL IPO effect.
  - Borrowings ₹347 Cr non-current + ₹2,070 Cr current.
  - Lease liabilities ₹1,594 Cr + ₹140 Cr (port concessions).
  - Cash ₹2,511 Cr; investments ₹919 Cr + ₹826 Cr.
  - **Note the large current-borrowing reclassification** (₹2,353 Cr non-current in FY25 → ₹347 Cr in FY26), which signals refinancing due within a year [E].
- **Ownership.** The Oct-2026 deck lists "JVs with Royal Vopak and ITOCHU". **Aegis's exact AVTL stake is not stated in the documents read.** Keep P2's 44.71% [V-snip], and treat P1's "~50.1%" as superseded by P2.
- **Contracts.** Long-dated contract revenue: Haldia/HPCL to 2038; HZL 15-yr ammonia; Pipavav rail gantry 15-yr take-or-pay.
- **Risks** (deck/AR): the LPG pricing regime; OMC dependence in logistics; port-concession renewals; and integration and FX risk on Tristar (a USD-denominated acquisition).
- **The PPAC "private LPG imports −93%" vs Aegis "distribution +91%" conflict** (P1 Force 6) is **partly explained:**
  - (i) Aegis's terminal throughput (1,124 kt) is mostly **OMCs' and other importers' cargo**, which PPAC counts as PSU imports.
  - (ii) Aegis's **own** sourcing was flat at 121 kt.
  - (iii) Distribution of 277 kt therefore draws on more than its own direct imports: on stock and ullage at its own terminals, and on product bought from importers using its terminals, per the CFO's "ullage and more locations".
  - PPAC's Jul–Aug data are also prorated.
  - **Do not print the two side by side without (i)–(iii).** [E reasoning on V-pri inputs]

### 4.2.4 Indraprastha Gas (IGL · 532514)

**Management-guidance digest** (Q1 FY27 call, 14-Aug-2026: new MD Kumar Shanker, Director (Commercial) Mohit Bhatia, new CFO Manjeet Gulati) [V-pri]:
- **Volume.**
  - 9.66 mmscmd (+5.8%).
  - CNG ex-DTC/DIMTS +11%: Delhi +9%; new GAs +27%; double-digit growth in all three non-Delhi states.
  - New GAs supply ~50% of incremental sales.
  - **DTC CNG volume is now ~zero** (vs ~1.5 lakh kg/day a year ago). DIMTS is stable at ~1.5 lakh kg/day.
  - Analysts' suggestion of 12–13% CNG growth was accepted as plausible, citing GST 2.0.
  - Delhi: ~42% of new PV registrations are CNG; the Delhi-NCR parc is ~24–25% CNG.
  - Conversions and additions run at ~27,300 vehicles a month (vs 18,000).
- **Sourcing.**
  - Domestic 48%: APM ~2.6 mmscmd (vs ~3.3 earlier); NWG 1.26 (vs <1); HPHT 0.6–0.7.
  - Imported 52%: long-term contracts 3.9–4.0 mmscmd; pooled gas 0.6–0.7; spot ~3% (0.25–0.30 mmscmd) at $17–22/mmbtu.
  - Expects **more HPHT** from producer auctions closing around September.
  - **Started Henry Hub hedging in May-2026.**
- **Margin.**
  - **Long-term guidance ₹7/scm "still similar", but no quarterly guidance.**
  - Q1 gas cost ₹40–45/scm, with "some increase" from July.
  - Keeps a ~₹17/kg gap to petrol to protect growth.
  - Four swing factors for the next 6 months: US supply; Middle East; China/Japan demand; EU storage and weather (a possible super El Niño).
- **EV policy.**
  - Delhi has ~1 lakh autos; 5–6k a year retire.
  - Impact **<1% of CNG volume in 2027 and ~2–3% by 2030**. 70–80% of IGL's 3W volume is in Delhi.
  - The policy applies only to Delhi, not Noida or Gurugram.
  - School buses must reach 30% EV by 2030. IGL is lobbying to keep CNG.
- **Capex.** ₹1,800–2,000 Cr: core ₹1,200–1,300 Cr (max ₹1,500 Cr) plus ₹500–600 Cr diversification. Q1 ₹327 Cr.
- **JVs.**
  - MNGL 2.19 mmscmd (+18%; Nashik now pipeline-fed via the Samruddhi line).
  - **CUGL 0.36 mmscmd (+6%)**: price-sensitive markets with an adverse tax structure for I&C.
- **Territory.**
  - Gurugram litigation continues. IGL **conditionally accepted** the part-area authorisation and has started service; bulk molecules in the disputed part still flow via IGL.
  - Faridabad is mostly with another licensee.
  - Consent submitted for the remaining Gurugram and Faridabad areas.
  - New Rohini CGS; first LNG operations in NCR (with CONCOR); CNG at Noida International Airport; Indian Army cantonment MoU.
  - On inorganic growth: "framework still evolving".
- **GST on gas.** MoPNG supports it; "no evidence" of imminent change.

**Concall KPI table (standalone)** [V-pri call; P2 PL per-scm]

| KPI | Q1 FY27 | Q4 FY26 | Q1 FY26 |
|---|---|---|---|
| Total volume (mmscmd) | **9.66** | 9.4 | 9.13 |
| CNG (mn kg/day) | **5.31** | — | ~5.0 |
| Gross turnover (₹ Cr) | **5,028** (record) | — | ~4,340 |
| EBITDA / PAT (₹ Cr) | **296 / 186** | ~420 / ~280 | 512 / 356 |
| EBITDA/scm (₹, PL) | 3.4 | 4.8 | 6.2 |
| Gas cost (₹/scm) | 40–45 (mgmt); 43.3 (PL) | 36.8 | 35.2 |
| Sourcing: domestic / imported | 48% / 52% | — | — |
| Spot share | ~3% | — | — |
| PNG-D (lakh) / I&C | 35+ / ~13,600 | ~34 / ~13,070 | — |
| CNG stations | — | **1,024** (AR) | — |
| MNGL / CUGL (mmscmd) | **2.19 / 0.36** | — | 1.85 / 0.34 |
| Capex (₹ Cr) | 327 | — | — |

**5-year history (consolidated; ₹ Cr)** [V-scr]

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Sales | 7,710 | 14,133 | 14,000 | 14,913 | 16,168 |
| Operating profit | 1,894 | 2,044 | 2,388 | 1,979 | 1,876 |
| OPM % | 25% | 14% | 17% | 13% | 12% |
| Net profit | 1,502 | 1,640 | 1,983 | 1,713 | 1,544 |
| EPS ₹ (post-bonus) | 10.73 | 11.71 | 14.18 | 12.27 | 11.07 |
| ROCE % | 27% | 27% | 28% | 21% | 18% |

**8-quarter trend (consolidated; ₹ Cr)** [V-scr]

| | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|
| Sales | 3,698 | 3,759 | 3,948 | 3,914 | 4,023 | 4,068 | 4,163 | 4,587 |
| Operating profit | 535 | 362 | 493 | 511 | 441 | 471 | 421 | 294 |
| OPM % | 14% | 10% | 12% | 13% | 11% | 12% | 10% | 6% |
| Net profit | 454 | 325 | 453 | 428 | 385 | 392 | 339 | 238 |

**Annual-report findings (FY26 AR, BSE 2-Sep-2026)** [V-pri]:
- **Scale.** 12 GAs, 32 districts, 4 states. Records in FY26: average CNG of **50 lakh kg/day** and **industrial sales of 1 mmscmd**. GAs outside Delhi-NCR supplied 50% of incremental sales.
- **FY26 build-out.** 70 new CNG stations → **1,024**; 100 DODO stations; capex ₹1,120 Cr; >3.7 lakh new homes.
- **Dividend.** ₹4.75 per share = ₹3.25 interim + ₹1.50 final.
- **Contingent liabilities (Note 35):**
  - **DDA licence fee ₹330.73 Cr** (Auditor EoM; now before AMRCD; IGL seeks parity with OMCs);
  - Greater Noida lease rent ₹22.29 Cr;
  - UP VAT ₹13.59 Cr (₹2.72 Cr deposited);
  - legacy DTC excise ₹2.42 Cr + penalty.
- **Second EoM:** the New Labour Codes (effective 21-Nov-2025). This is the source of the ~₹30 Cr Q1 adjustment PL noted.
- **The ~₹114 Cr FY26 OMC dealer-margin reversal (primer)** was **not located** in the AR sections read; it stays [primer]. MGL's PPT shows the same kind of OMC trade-margin reversal in its Q1 FY26 base (S4), so the item is sector-wide.

### 4.2.5 Mahanagar Gas (MGL · 539957)

**Management-guidance digest** (Q1 FY27 call, 31-Jul-2026: MD Praveer Kumar Srivastava, DMD Ajay Sinha, CFO Rajesh Patel; Q1 PPT) [V-pri]:
- **Supply.** 100% of D-PNG and most of CNG come from domestic gas. I&C supplies were cut 20% by government directive.
  - Sourcing: **APM ~30%; NWG + pooled 21–22%; HPHT 14–15%** (0.6 mmscmd long-term plus ~0.2 via IGX); **Henry Hub-linked 21–22% received** (contracted more); the rest small Brent/IGX/spot.
  - Prices: pooled gas $12.5–13; Brent-linked $13–14; spot touched ~$20/mmbtu.
- **The July shock.**
  - Hormuz normalised around the first week of July. The government **withdrew the priority and pooled-gas notification around 4-Jul**.
  - Within 7–8 days the US–Iran conflict restarted, and FM again hit HH-linked imports (the ~1.5 mmscmd GAIL HH contract was not fully received).
  - MGL bought spot for 15 days to 3 weeks and signed a slightly longer-term contract.
  - **Q2 "slightly worse compared to Q1"**; margin "under pressure for at least 1–2 months".
- **Pricing.**
  - CNG up ₹5/kg since Feb (in Q2 for the full quarter). CNG is ~40–45% cheaper than petrol and ~12% cheaper than diesel.
  - **I&C realisation +₹27–32/scm QoQ (+70–80% YoY)**, because pricing is alternate-fuel-linked: commercial to bulk LPG, industrial to FO/LDO. Brent was $62–63 in Q4 and $95–100 in Q1.
  - **Natural hedge:** high Brent plus low HH means high margins. MGL sees the HH book as its structural edge.
- **Guidance.**
  - **EBITDA ₹8–9/scm "over a longer period"**, with no quarterly guidance.
  - CNG volume +8–9% a year, sustainable into FY28–29.
  - D-PNG growth could rise from 5–6% to 7–8% as ~1 mn connected-but-idle homes convert. 8–10 lakh conversions are possible in FY27 if bottlenecks ease; 5 lakh conversions ≈ +0.06–0.07 mmscmd on 0.65.
  - Ex-UEPL areas: **0.322 mmscmd vs 0.224 (+30–35%)**, potential ~1.2 mmscmd.
  - By GA: GA-2 (Thane) >2.1 mmscmd; GA-1 (Mumbai) ~1.95; Raigad 0.40 (0.33).
- **Buses.** ~6,000 CNG buses = 4–5% of CNG. BEST ~90,000 kg/day; MSRTC 34–35k kg/day; the rest private. A "fleet program" targets private fleets, which are less likely to electrify because of financing costs.
- **Capex and balance sheet.** FY27 capex ₹1,500–1,800 Cr (Q1 ₹350 Cr) is "preponed", not added, and road-reinstatement (RI) charge cuts lower unit cost. Will borrow if needed (zero debt today). **DPS ₹30 maintained.**
- **Non-CGD.**
  - LNG long-haul: 2 stations, ~5 t/day, breakeven.
  - International Battery Co.: on hold and being restructured (cell prices fell from >$100 to $70–75/kWh; partner capital constraints).
  - EV 3W cargo start-up: loss-making.
  - CBG: 350 tpd MSW Phase I on MCGM land.
  - Open to **acquisitions of stressed new CGD entrants**; PNGRB bidding is largely over.

**Concall KPI table (standalone)** [V-pri PPT]

| KPI | Q1 FY27 | Q4 FY26 | Q1 FY26 |
|---|---|---|---|
| Revenue, net (₹ Cr) | **2,371.71** | 2,051.22 | 2,081.38 |
| Gross profit (₹ Cr) | 639.24 | 570.24 | 771.67 |
| EBITDA (₹ Cr) / margin | **342.98 / 14.46%** | 260.34 / 12.69% | 500.71 / 24.06% |
| PAT (₹ Cr) | **193.70** | 131.92 | 319.56 |
| Volume (mmscmd): total | **4.766** | 4.672 | 4.454 |
| — CNG / D-PNG / I&C | 3.496 / 0.623 / 0.648 | 3.349 / 0.605 / 0.719 | 3.185 / 0.571 / 0.698 |
| Realisation (₹/scm) | 54.35 | 48.45 | 51.02 |
| Gas cost (₹/scm) | **39.85** | 35.10 | 32.20 |
| Gross margin (₹/scm) | 14.50 | 13.35 | 18.82 |
| EBITDA (₹/scm) | **7.91** | 6.19 | 12.35 |
| Implied opex + other (₹/scm) [E] | 6.59 | 7.16 | 6.47 |
| Sales mix: CNG / D-PNG / commercial / industrial | 73.34% / 13.07% / 3.28% / 10.31% | — | — |
| Network: CNG stations / steel km / PE km | 519 / 752 / 7,725 | 518 | — |
| CNG vehicles / PNG HH connections / I&C | 13,11,105 / 32,41,195 / 6,198 | — / 32,13,904 / 5,924 | — |

**5-year history** (FY22 is standalone; FY23–FY26 consolidated; ₹ Cr) [V-scr]

| | FY22 (SA) | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Sales (net) | 3,560 | 6,299 | 6,290 | 7,264 | 8,246 |
| Operating profit | 924 | 1,184 | 1,844 | 1,569 | 1,446 |
| OPM % | 26% | 19% | 29% | 22% | 18% |
| Net profit | 597 | 790 | 1,285 | 1,040 | 841 |
| EPS ₹ | 60.43 | 79.98 | 130.06 | 105.31 | 85.16 |
| ROCE % (SA) | 23% | 27% | 34% | 23% | 17% |

**8-quarter trend (consolidated; ₹ Cr)** [V-scr]

| | Q2 FY25 | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|
| Sales | 1,786 | 1,847 | 1,964 | 2,083 | 2,050 | 2,060 | 2,052 | 2,373 |
| Operating profit | 413 | 325 | 394 | 500 | 336 | 351 | 258 | 342 |
| OPM % | 23% | 18% | 20% | 24% | 16% | 17% | 13% | 14% |
| Net profit | 287 | 221 | 247 | 319 | 191 | 201 | 130 | 193 |

**Annual-report findings (FY26 AR, BSE 3-Aug-2026)** [V-pri]:
- **Merger.** UEPL merged into MGL (NCLT 9-Jul-2025; appointed date 1-Feb-2024).
- **FY26 results.**
  - Gross revenue ₹9,059.77 Cr (FY25 ₹7,976.42 Cr).
  - **EBITDA ₹1,451.07 Cr = ₹8.67/scm**; PAT ₹846.82 Cr; capex **₹1,068.72 Cr**.
  - Volume 4.59 mmscmd (+8.25%): CNG 3.27 (+7.21%; 71.24%), D-PNG 0.59 (+5.36%; 12.85%), I&C 0.73 (+15.87%; 15.91%; the fastest-growing segment before the war).
  - Additions: 1,18,590 CNG vehicles; 3,42,157 homes (→ 32,13,904); 872 I&C (→ 5,924); ~499 km of pipe (→ ~8,320 km); 518 stations.
- **Contingent liability.**
  - **UTNGPL (Uran–Trombay) transport-tariff dispute** with ONGC and GAIL. PNGRB's Sep-2022 order requires payment of the disputed tariff for 2014–2021. The Delhi HC stayed recovery (13-Dec-2022) against a **₹50 Cr deposit with GAIL**, with a hearing listed for 13-Aug-2026. The total is not quantified in the lines read.
  - Consumer claims ₹0.36 Cr.
- **Operational risk event.** Damage to GAIL's 18-inch feeder at Trombay cut supply to CGS Wadala (~2.2 mmscmd), causing a city-wide disruption. Cylinder cascades from Raigad kept stations running. **This single-feeder concentration risk** belongs in the risk section.
- **Shareholding (Jun-26).** GAIL 32.50%, Government of Maharashtra 10.00%, FPI 23.21%, DII 22.53%, public 11.76%. Market cap per the PPT: ₹9,164 Cr at Jun-26.

## 4.3 Industry data upgraded from primary sources (chart-ready)

**Dataset P4-1 — Global gas benchmarks vs India's APM formula, monthly ($/mmbtu; Brent $/bbl)**
- **Sources:** World Bank CMO monthly prices, Oct-2026 Pink Sheet data [V-pri]; PPAC Snapshot Table 23 (APM) and the IGX figure [V-pri].
- **Units:** "Japan LNG" is the average Japanese import price, which is contract-heavy and lagged. **It is not the JKM spot price.**

| Month | Brent | Henry Hub | TTF (Europe) | Japan LNG (import) | APM formula (ceiling) |
|---|---|---|---|---|---|
| Jun-2024 | 82.6 | 2.51 | 10.87 | 12.13 | 8.44 (6.50) |
| Dec-2024 | 73.8 | 3.02 | 13.86 | 12.76 | 7.29 (6.50) |
| Jun-2025 | 71.5 | 3.02 | 12.37 | 12.17 | 6.41 (6.41) |
| Sep-2025 | 68.0 | 2.97 | 11.12 | 11.47 | 6.99 (6.75) |
| Dec-2025 | 62.7 | 4.25 | 9.48 | 11.32 | 6.48 (6.48) |
| Jan-2026 | 66.8 | 7.58 | 11.76 | 11.49 | 6.25 (6.25) |
| Feb-2026 | 71.1 | 3.61 | 11.24 | 11.32 | 6.21 (6.21) |
| Mar-2026 | 103.7 | 3.06 | 17.91 | 11.42 | 6.81 (6.75) |
| Apr-2026 | 120.4 | 2.77 | 15.41 | 15.65 | 10.76 (7.00) |
| May-2026 | 107.5 | 2.93 | 16.17 | 12.88 | 11.59 (7.00) |
| Jun-2026 | 85.4 | 3.15 | 15.17 | 11.79 | 10.93 (7.00) |
| Jul-2026 | 83.4 | 2.89 | 18.06 | 13.85 | 8.73 (7.00) |
| Aug-2026 | 90.9 | 2.77 | 21.11 | 15.27 | 7.86 (7.00) |
| Sep-2026 | 116.8 | 2.95 | **25.42** | 14.25 | 9.00 (7.00); Oct 11.22 |

- **How to read it.** The July dip in Brent and APM was the ceasefire window. September was the re-escalation. **The HH–TTF spread hit ~$22.5 in Sep-2026**, which is why MGL's HH book (~21–22% of its gas) and IGL's new HH hedges matter.
- **IGX GIXI** ($16.8 Apr-2026 → $28.4 Sep-2026, PPAC) is the Indian spot proxy. In September it traded above TTF.

**Dataset P4-2 — India's LNG and LPG import bill (PPAC) [V-pri]**

| Period | LNG (mmscm) | LNG ($ bn) | LNG $/mmbtu [E] | LPG imports (MMT) | LPG ($ bn) |
|---|---|---|---|---|---|
| FY25 | 35,720 | 14.9 | ~10.5 | 20.7 | 12.5 |
| FY26 | 34,427 | 13.4 | ~9.8 | 21.3 | 11.3 |
| Apr–Sep 2025 | 17,414 | 6.9 | ~10.0 | — | — |
| Apr–Sep 2026 | 18,189 | 8.5 | ~11.8 | (POL imports −47.7% by volume) | — |
| Sep-2026 | 2,957 | 1.2 | ~10.2 | — | — |

- **$/mmbtu basis:** $ bn ÷ (mmscm ÷ 25.2) [E].
- **The Sep-2026 unit value looks low against spot ($21–28)** because the Jul–Sep volumes are PPAC-prorated and long-term (HH/Brent-lagged) cargoes dominate.

**Dataset P4-3 — Where the members' gas came from, Q1 FY27 (company calls) [V-pri]**

| | APM | NWG / pooled | HPHT | Long-term LNG (HH/Brent) | Spot / IGX |
|---|---|---|---|---|---|
| IGL (9.66 mmscmd) | ~2.6 mmscmd (27%) | NWG 1.26 + pooled 0.6–0.7 | 0.6–0.7 | 3.9–4.0 | ~3% (0.25–0.3) |
| MGL (4.77 mmscmd) | ~30% | 21–22% | 14–15% | HH 21–22% + small Brent | small (IGX ~0.2 mmscmd within HPHT) |
| ATGL (3.33 mmscmd) | APM + NWG ~40% | — | — | ~38% R-LNG; long-term contracts 48% of total | **~15%** |

- **Read-across: spot share explains Q1 FY27 EBITDA/scm** — MGL ₹7.9, ATGL ₹9.3 (with a higher I&C share), IGL ₹3.4.
- **Caveat:** IGL's low spot share and low margin show that **APM's share of CNG and the speed of price pass-through matter as much as spot**.

**Dataset P4-4 — Delhi CNG retail path, 2026 (₹/kg)**
- Jan ₹77.09 [V-snip] → May hikes totalling ~₹6, reaching ₹83.09 [V-snip] → **29-Aug +₹3.89 to ₹86.98** [V-sec AIR; V-pri PPAC level].
- NCR on 29-Aug: Gurugram ₹92.1; Noida/Ghaziabad ₹95.59 [V-sec].
- **CNG vs Delhi petrol (₹102.12):** 0.85 on a ₹/unit basis. At 26 km/kg vs 18 km/l (MGL's mileage assumptions), the per-km cost of CNG is ~59% of petrol's [E].
- Mumbai: CNG ₹86 (Jun) → ₹89 (Oct); petrol ₹111.21 (MGL PPT) [V-pri].

**Dataset P4-5 — Network scale of members vs India (latest primary counts)**

| | CNG stations | PNG-D | Date / source |
|---|---|---|---|
| India | 9,158 | 1,76,89,278 | 31-Aug-2026, PNGRB via PPAC [V-pri] |
| IGL | 1,024 | 35 lakh+ | Mar-26 AR / Jun-26 call [V-pri] |
| MGL | 519 | 32.4 lakh connections (≈23 lakh consuming) | Jun-26 PPT [V-pri] |
| ATGL SA / incl. IOAGPL | 707 / 1,167 | 11.41 / 13.74 lakh | Jun-26 call [V-pri] |
| **Members' share** [E] | **~24%** of India's stations (2,250 SA; ~2,710 with the JV) | **~45%** of PNG-D (79 lakh SA; ~81 lakh with the JV) | — |

**Dataset P4-6 — Regas tariff path (₹/mmbtu)**
- Dahej: ₹62.91 (2024) [V-snip Argus] → ₹66.06 (2025) [V-snip Argus] → **~₹69 (current, i.e. CY2026)** [V-pri call].
- Kochi: **~₹98** [V-pri].
- **Sensitivity** (from P1, updated): ₹10/mmbtu on ~834 TBTU (PL FY27E) ≈ ₹834 Cr of revenue ≈ 15% of FY26 operating profit (₹5,338 Cr) [E].

**Sector view from a rating agency (CRISIL, IRM Energy rationale, 17-Aug-2026)** [V-sec, rating-agency primary document]:
- CRISIL says CGD players are "increasingly exposed to the volatility in prices of non-APM gas as well as its availability", after the Oct-2024 and Apr-2025 APM cuts.
- It notes a better ability to pass on cost.
- IRM's own EBITDA/scm went 4.6 (FY25) → 5.0 (FY26) → **10.5 (Q1 FY27)**, which CRISIL expects to normalise to **~₹6**. So a small CGD with an alternate-fuel-linked I&C book also earned a windfall in Q1, like MGL.
- **ICRA, CARE and India Ratings 2026 CGD sector notes were not found free** (see 4.4).

## 4.4 Gap log (every §H item, plus the prompt's named gaps)

| # | Gap | Status | Source / what was tried |
|---|---|---|---|
| H-1 | JKM path 2024–Oct-2026 | **Partly filled.** The World Bank monthly TTF/HH/Japan-LNG series (to Sep-2026) and the IGX GIXI are now [V-pri]. **JKM itself is still open:** Platts is paywalled; the S&P 19-Oct infographic gives only volatility (94%); a "$56 on 6-Oct" hit is from 2021 and must not be used | WB CMO xlsx [V]; searches |
| H-2 | Qatar FM / Hormuz status, Oct-2026 | **Filled (secondary):** FM extended to end-Nov-2026; Qatar 18 cargoes vs 509. FM chain dates now primary (AR). The early-July reopening and mid-July re-escalation come from the MGL/ATGL calls. **Repair times for the damaged trains: still unsourced** | Tank Terminals [V-sec]; Petronet AR; MGL/ATGL calls [V-pri] |
| H-3 | 2026 APM allocation % to CGD | **Still open** for the official MoPNG ratio. New company-level primary data: IGL APM ~2.6 mmscmd (from ~3.3); MGL APM ~30% (D-PNG 100% APM); ATGL APM+NWG ~40%; an MGL analyst cited PNGRB data of ~1.585 mmscmd APM to MGL for Jan–Apr. The order's withdrawal (~4-Jul) is [V-sec] | Calls [V-pri]; DT Next [V-sec] |
| H-4 | NWG price | **Filled:** 12% of ICB (ATGL management). The "$7.70" figure is dropped | ATGL call [V-pri] |
| H-5 | Petronet tariffs, Gopalpur, petchem | **Filled:** tariffs ₹69 / ₹98; "no tariff revision" talks; Gopalpur EC at an advanced stage with no FID; petchem 38.6% with ₹13,346 Cr committed. The −₹30 claim is contradicted | Call; AR [V-pri] |
| H-6 | Aegis Q1 volumes and the PPAC conflict | **Volumes filled** (PPT). **Conflict partly explained** (4.2.3); exact sourcing of distribution volume not disclosed | Aegis PPT/call [V-pri] |
| H-7 | ATGL Q1 FY27 | **Filled** from the company call (303 mmscm, EBITDA ₹281 Cr, network) | ATGL call [V-pri] |
| H-8 | Delhi CNG intermediate dates | **Partly filled:** the 29-Aug hike to ₹86.98 is [V-sec AIR]. Jan ₹77.09 and the May steps remain [V-snip]. Pre-2026 parity ratios remain [K] | AIR |
| H-9 | Commercial LPG path | **Partly filled:** adds ₹2,930 (1-Jul) and ₹2,810 (1-Oct) [V-snip]. PPAC gives only domestic ₹942 [V-pri] | Search |
| H-10 | MWP 2034 targets; GA counts | **Still open** for the 2034 targets. GA counts now primary for the members: IGL 12 GAs; MGL 6 GA units (3 + 3 ex-UEPL); ATGL 34 + IOAGPL 19 = 53 | ARs/calls [V-pri] |
| H-11 | E-bus fleets Delhi/Mumbai | **Partly filled:** Mumbai ~6,000 CNG buses = 4–5% of MGL's CNG; BEST ~90,000 kg/day and MSRTC 34–35k kg/day on CNG. Delhi: DTC CNG volume ≈ 0 and DIMTS ~1.5 lakh kg/day. **E-bus counts are still unsourced** | MGL/IGL calls [V-pri] |
| H-12 | National CNG vehicle parc | **Still open** for the parc. Flows: FY26 CNG PV sales ~10.34 lakh (21.98%) [V-snip]; Aug-2026 CNG/LPG 25.28% of PV registrations (FADA) [V-snip]. Regional parcs [V-pri]: Delhi-NCR ~24–25% CNG; MGL GAs 13.1 lakh vehicles | Search; calls |
| H-13 | Global comparables multiples | **Not attempted** (budget). Remain [V-snip]/[K] | — |
| H-14 | IGU India utilisation | **Superseded** by PPAC terminal data (P1) and Petronet's company utilisation (58% in Q1) | — |
| H-15 | CBG mandate tonnage | **Not re-checked.** Company CBG data now [V-pri]: ATGL FY26 1,654 MT sold; MGL 350 tpd MSW plant planned | ARs/calls |
| H-16 | GST-on-gas committee | **Status:** IGL's MD says MoPNG "strongly supporting", "no available evidence… any big change". Keep the committee item [V-snip] | IGL call [V-pri] |
| H-17 | OFAC / SEC | **Clarified:** OFAC $275 m = Adani Enterprises (Iran-origin LPG); SEC $18 m = Gautam and Sagar Adani personally; ATGL is not a party. Still [V-snip] | Search |
| H-18 | Market caps | Unchanged from P2 (screener 21-Oct-2026) | — |
| H-19 | MGL per-scm doesn't tie | **Filled** (S2): opex ≈ ₹6.6/scm | MGL PPT [V-pri] |
| H-20 | FY26 LPG import value | **Filled:** $11.3 bn (21.3 MMT; ₹99,149 Cr) | PPAC RR [V-pri] |
| P-a | Petronet ₹348 Cr vessel claim | **Partly filled:** AR shows ₹89.30 Cr to 31-Mar, continuing. ₹348 Cr unverified | AR [V-pri] |
| P-b | Petronet ₹630 Cr UoP one-off | **Filled** with full UoP detail (S14) | AR [V-pri] |
| P-c | Qatar post-2028 terms | **Filled** (S5) | AR [V-pri] |
| P-d | Aegis ₹6,000 Cr purpose; CARE rationale | **Filled:** Tristar, US$809 mn. CARE's rationale text was not re-read (P2 read the BSE PDF) | Oct deck [V-pri] |
| P-e | Aegis/Vopak exact stakes in AVTL | **Still open:** not stated in the documents read | — |
| P-f | ATGL FY27 capex; PNG-D vs I/C split; EV | Capex qualitative only ("slightly higher" than ₹903 Cr); **PNG split still not disclosed**; EV filled (5,306 points, 58 MW, target 10,000) | Call/AR [V-pri] |
| P-g | IGL station count, CUGL/MNGL, one-offs, FII shift, exclusivity, guidance | Stations, CUGL/MNGL and guidance **filled**. FII shift **partly** (to MFs). Exclusivity: litigation status (Gurugram) and the PNGRB common-carrier withdrawal (2024) **filled**. The ₹114 Cr one-off was **not found** in the AR | IGL call/AR [V-pri]; PSU Watch [V-sec] |
| P-h | MGL UEPL, bridge, sourcing, capex, GoM stake | **All filled** (S2–S4, S28; GoM 10.00% per PPT) | PPT/AR [V-pri] |
| P-i | MGL/IGL CNG by vehicle type | IGL filled. MGL: buses 4–5%; the rest not split | Calls |
| P-j | LNG import value Apr–Sep | **Filled** ($8.5 bn vs $6.9 bn) | PPAC [V-pri] |
| P-k | HS-code trade data (2711.11/.12/.13) | **Not fetched.** TradeStat is JS-driven, and the budget went to PPAC, which uses DGCIS data | — |
| P-l | Rating-agency sector views | **Partly:** CRISIL (IRM rationale) [V-sec]. ICRA's 2026 CGD note, CARE and Ind-Ra not found free. ICRA Apr-2025 (₹0.35/scm APM-cut impact) [V-snip] | Search |
| P-m | PNGRB bidding rounds; MWP compliance | **Still open.** MGL: "most of the geographies are already bidded out by PNGRB" [V-pri] | MGL call |
| P-n | ATGL Q2 FY27 | **Not out** at 21-Oct evening (board 22-Oct; call 23-Oct) | Screener [V-scr] |

## 4.5 New insights the first pass missed, and new primer issues

**Insights (for an expert's framing):**
1. **The crisis had two phases, not one.**
   - Hormuz briefly reopened around a late-June/early-July ceasefire. The stranded Petronet cargo transited and reached Dahej on 19-Jun.
   - MoPNG withdrew the priority and pooled-gas order on ~4-Jul. The conflict then **re-escalated within 7–8 days**.
   - **CGDs lost both their crisis shield (pooled gas at $12.5–13) and their contracted HH volumes**, and so had to buy spot. That is why ATGL's spot share was ~15%, why IGL raised CNG ₹3.89 on 29-Aug, and why MGL said Q2 is "slightly worse than Q1".
   - **Q2 FY27 CGD margins are likely to be weaker than Q1, not stronger**, despite Q1 price hikes. This contradicts the brokers' Q2 estimates in P2 (IGL EBITDA ₹420 Cr vs ₹296 Cr in Q1).
2. **Petronet's Q1 is two businesses, and the split is now measurable.**
   - **Regas revenue of ₹1,214 Cr is ≈ 176 TBTU of tolling × ₹69**, a clean tariff × volume identity.
   - On top sat ₹494 Cr of trading and inventory gains on only ~6 TBTU of spot trading. Strip those out and Q1 operating profit is about ₹1,040 Cr, below the ₹1,159 Cr of a year earlier [E].
   - **The Q1 "record" therefore depended on the spot dislocation.** Watch whether Q2 repeats it: the dislocation persisted, with TTF at $25 in September.
3. **The 2028 Qatar renewal moves freight risk off Petronet.** The new SPA is **DES**, so the seller ships. Most of Petronet's 25-year charters end with the old SPA. The charter-hire claims (₹89 Cr and rising) and FOB vessel risk therefore disappear after Apr-2028. The open variable is the offtaker GSPA, whose closure is guided for 2–3 quarters.
4. **Aegis is turning into a cross-border LPG/energy-logistics platform.**
   - The **US$809 mn Tristar acquisition** (89.8%, Q4 FY27) exceeds Aegis's FY26 attributable PAT several times over [E] and explains both the ₹6,000 Cr raise and CARE's watch.
   - With a ~$1.2 bn FY27 capex plan as well, **the "fortress balance sheet" (net cash ₹3,523 Cr) is about to be spent**. Gearing target ~0.6.
5. **Aegis's earnings jump is mostly a margin windfall, not volume.**
   - Implied Q1 distribution EBITDA is ~₹17,000/t, vs a "new normal" of ₹7,000+/t and an old ₹4,000/t.
   - At 1 mt of distribution, each ₹1,000/t of margin is worth ₹100 Cr of EBITDA [E].
   - The ₹7,000 floor rests on a procurement-efficiency claim (VLGC freight) that has not yet been shown outside a war.
6. **MGL's margin resilience is structural.**
   - Its I&C prices are alternate-fuel-linked (+70–80% YoY realisation), while its CNG cost is partly HH-linked. **A high-Brent / low-HH world (Sep-2026 spread ~$22.5) is MGL's best case.**
   - IGL lacks an equivalent I&C book (~1 mmscmd industrial) and HH share. It began HH hedging only in May-2026.
7. **Hidden balance-sheet items the screener view misses:**
   - ATGL's ₹3,472 Cr guarantee for its JV's PNGRB performance guarantees (~71% of net worth);
   - IGL's ₹331 Cr DDA claim (auditor EoM);
   - Petronet's ₹720 Cr gross UoP receivable (EoM) and unprovided vessel claims;
   - MGL's UTNGPL tariff dispute (₹50 Cr deposited);
   - MGL's single-feeder Wadala vulnerability (~2.2 mmscmd).
8. **NWG at 12% of ICB is the policy lever nobody prices.** At the Sep-2026 ICB of $116, NWG ≈ $13.9/mmbtu, about double the APM ceiling of $7.00 and above HPHT ($9.89). NWG is replacing APM in IGL's mix (1.26 vs <1 mmscmd). **The APM-to-NWG shift raises cost even when "domestic share" looks stable at ~48%.**

**New primer issues** (format as primer-issues.md; adds to P2 §3.4):

*adani-total-gas.html*
- Add the IOAGPL JV's FY26 operating data: 681 mmscm (+26%), 464 CNG stations, 2.16 lakh PNG homes. Combined FY26 volume is ≈ 1,814 mmscm.
- Add the ₹3,472.15 Cr corporate guarantee for the JV's PNGRB bank guarantees, and the ₹103.63 Cr domestic-gas-diversion claim (FY14–FY22, refuted).
- **Clarify that the OFAC $275 m settlement was by Adani Enterprises (Iran-origin LPG) and the SEC $18 m by individuals; ATGL is party to neither.** The primer should not imply ATGL liability.
- Sourcing language: replace "APM ~30–36% for CNG" alone with management's portfolio mix (domestic 62 / R-LNG 38; spot ~15% in Q1 FY27; NWG = 12% of ICB).
- FY26 capex ₹903 Cr; FY27 "slightly higher". Mar-26 CNG station count 705 (AR) vs 707 at Jun-26.

*petronet-lng.html*
- Replace "Qatar renewal under negotiation" with: SPA signed 6-Feb-2024, DES, 2028–2048; offtaker GSPA terms pending (2–3 quarters).
- Tariff: Dahej ~₹69, Kochi ~₹98 per mmbtu (Q1 FY27 call); "no discussion on tariff revision". Remove or caveat the ₹52.05 and −₹30 claims.
- Add the UoP receivable of ₹719.84 Cr gross / ₹413.02 Cr net (auditor EoM), the vessel claims (₹89.30 Cr at Mar-26, continuing), and the FM timeline (2/3/4/5-Mar).
- Petchem: 38.6% progress at end-Jul-2026, ₹13,346 Cr committed; FY27 capex ₹9,064 Cr. Gopalpur: EC "advanced stage", land in hand, no FID.
- New contracts: ExxonMobil 1.2 mtpa from Apr-2026 (Kochi); Deepak Fertilisers 0.5 mtpa tolling (May-2026).

*aegis-logistics.html*
- **Add the Tristar acquisition** (89.8%, US$809 mn equity, completion Q4 FY27) as the year's defining event. Link it to the 21-Oct EGM (₹6,000 Cr) and CARE's Rating Watch.
- Capacity: LPG static ~246k MT existing (+129k MT JNPT); liquids 2.0 mn KL existing (+0.5 mn KL); ammonia 36k MT commissioned 10-Aug-2026 (HZL take-or-pay; ITOCHU 10% → 25%). Replace the primer's ~226k t figure.
- Distribution-margin framework: ₹4,000/t (to FY25) → ₹7,000+/t guided. Q1 FY27 implied ~₹17,000/t [E].
- Net cash: company ₹3,523 Cr vs screener basis ₹1,790 Cr; NCI ₹2,729 Cr.
- Haldia's exclusive HPCL agreement to 2038; Jamnagar–Loni pipeline live.

*indraprastha-gas.html*
- CUGL 0.36 mmscmd (not 2.5); MNGL 2.19.
- Q1 FY27 volume 9.66 mmscmd; sourcing split (APM 2.6 / NWG 1.26 / HPHT 0.6–0.7 / long-term 3.9–4.0 / pooled 0.6–0.7 / spot ~3%); Henry Hub hedging from May-2026.
- Add the DDA ₹330.73 Cr contingent (EoM; now at AMRCD), the 29-Aug CNG hike to ₹86.98, and the Delhi EV-policy impact (<1% in 2027, 2–3% by 2030).
- Gurugram: conditional acceptance of part-area authorisation; litigation ongoing.
- New MD (Kumar Shanker) and CFO (Manjeet Gulati) as of Aug-2026.
- The Jun-26 FII → MF ownership swing.

*mahanagar-gas.html*
- **UEPL merged into MGL** (NCLT 9-Jul-2025; appointed date 1-Feb-2024). Remove "subsidiary" language. Ex-UEPL volume 0.322 mmscmd (+30–35%).
- Per-scm table from the company slide (₹54.35 / ₹39.85 / ₹14.50 / ₹7.91); implied opex ~₹6.6 (not ₹5.8).
- FY26 EBITDA/scm ₹8.67 (company). Capex FY26 ₹1,068.72 Cr; FY27 ₹1,500–1,800 Cr.
- Sales mix: CNG 73.3%, D-PNG 13.1%, commercial 3.3%, industrial 10.3%. HH-linked gas 21–22%.
- Risks: the UTNGPL tariff dispute (₹50 Cr deposited) and the Wadala single-feeder incident. PNG-D connections 32.4 lakh vs ~23 lakh consuming.

**Source list for Part 4 (all fetched 21-Oct-2026):**
- **ATGL:**
  - Q1 FY27 transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0e2db754-d704-481c-a2b7-866ec8a6a6a9.pdf
  - FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/0f702c2e-0453-488f-abca-75b7d5e7b35b.pdf
- **Petronet:**
  - Q1 transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e29749a4-36a9-4a35-bef4-5e7e31fb041f.pdf
  - FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/800b4577-af9a-436e-b86d-911e6cea8ffe.pdf
- **Aegis:**
  - Q1 transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dfddf588-87ed-48eb-9e29-193c0b200451.pdf
  - Q1 PPT: …Pname=1e4aab73-75ac-412f-86b9-99e186c722ca.pdf
  - Corporate Presentation Oct-2026: …Pname=0247d415-3494-4b7a-a23a-435e3141e9d2.pdf
  - FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/f5fba98c-ac6c-449d-ae61-6399e84b41dc.pdf
- **IGL:**
  - Q1 transcript: https://www.iglonline.net/uploads/announcement/Transcript%20of%20Conference%20Call%20-%20Aug%2014,%202026.pdf
  - FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/4a0b4f92-33ab-42a9-9835-9d056332e300.pdf
- **MGL:**
  - Q1 transcript: …Pname=0ea88aca-7ee8-4c87-8c7f-beffab60a9ba.pdf
  - Q1 PPT: …Pname=d44ebb1b-c892-4af1-8a57-3293f5fa739e.pdf
  - FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/93b4c703-dd91-48d2-aa6f-4cd2d9eac75a.pdf
- **Screener (consolidated pages for the five; MGL standalone):** https://www.screener.in/company/<NSE>/consolidated/ ; https://www.screener.in/company/MGL/
- **PPAC:**
  - Snapshot Oct-2026: https://ppac.gov.in/download.php?file=rep_studies/1792155544_Snapshot_of_India_Oil_and_Gas_Sept_2026_V3.pdf
  - Ready Reckoner FY26: https://ppac.gov.in/download.php?file=rep_studies/1784899305_The_PPAC_Ready_Reckoner_FY_2025–26_Final.pdf
- **World Bank CMO monthly:** https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Historical-Data-Monthly.xlsx
- **CRISIL, IRM Energy rationale (17-Aug-2026):** https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/IRMEnergyLimited_August 17_ 2026_RR_402822.html
- **News pages (secondary):**
  - AIR: https://newsonair.gov.in/cng-price-hiked-by-rs-3-89-kg-in-delhi-ncr/
  - DT Next: https://www.dtnext.in/news/business/govt-withdraws-emergency-gas-curbs-imposed-during-hormuz-disruption-as-lng-supplies-normalise-2
  - PSU Watch: https://psuwatch.com/newsupdates/pngrb-withdraws-notices-to-declare-54-cgd-networks-as-common-carriers
  - Tank Terminals: https://tankterminals.com/news/qatar-extends-lng-force-majeure-as-hormuz-crisis-drags-on/
- **Snippet-only:** marketsmojo (IGL shareholding); Goodreturns / Business Today (commercial LPG); Claims Journal / Moneylife / IANS (OFAC/SEC); Autocar Pro / Vahan Bazaar (CNG PV share); The Nation (Pakistan FM to 6-Nov).
- **Scratch notes and raw text:** `/tmp/gas-distribution-deep/notes.md`, `/tmp/gas-distribution-deep/dl/*.txt`.

*End of Part 4.*
