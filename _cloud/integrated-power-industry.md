# Integrated Power Utilities (Power || Integrated Power Utilities): Research Dossier + Company Fact Packs

Compiled 22-Oct-2026 (UTC) for the writer agent. This is source material, not prose for publication. Slug: `integrated-power`. Tier C (3 members).
- **Part 1** is the industry dossier (brief-industry.md §1–12 plus A–H).
- **Part 2** is the company fact pack for all three members (brief-companies.md), with JSON.
- **Part 3** is the company-KPI appendix: summary grid, aggregates (straight sums on one basis), reconciliation vs primers, primer issues, source URLs.

**Members (3, Tier C):** The Tata Power Company (TATAPOWER · 500400), Torrent Power (TORNTPOWER · 532779), CESC (CESC · 500084).

**Sibling report:** `subsectors/power-generation.html` (14 generators: NTPC, NHPC, SJVN, NLC, JSW Energy, Adani Power, Adani Green, ACME, KPI Green, Reliance Power, RattanIndia, JP Power etc.). It already covers capacity mix, IEX cycle, LPS Rules, storage, coal logistics and the generator KPI masterclass. **This report should lead with the wires (distribution and regulated equity) and cross-link to power-generation for generation economics.** Cross-link points: its §01 (three generator equations), §07 (CERC ROE 15.5%, LPS Rules), §08 (firm power), §10 (delivery race / transmission), §11 (storage, PSP), §12 (merchant cycle: IEX), §14 (KPI masterclass: PLF, PAF, regulated equity).

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary document (company deck/press release from NSE archive or company site, CARE rationale PDF, screener page). URL in §3.5.
- **[V-snip]** = verified only from a search-result summary or a secondary article (not the primary document).
- **[V-sib]** = verified in the sibling report `subsectors/power-generation.html` (published Oct-2026, market data 13-Oct-2026) and reused for consistency; not re-fetched here.
- **[K]** = well-established public fact from memory; source named, not re-fetched. Spot-check if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic.
- **[primer]** = our own primer (tata-power.html refreshed 2-Jul-2026; torrent-power.html 3-Jul-2026; cesc.html 14-Jul-2026).
- **[screener 22-Oct-26]** = screener.in consolidated pages pulled 22-Oct-2026 ~15:03 UTC (after Indian market close).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹1 lakh crore = ₹1 trillion. MU = million units (kWh) = GWh. BU = billion units = TWh. ckm = circuit-kilometre. MWp = DC rating of solar (Torrent and CESC quote solar in MWp, wind in MW AC).
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All three have a March year-end.
- **FX: ₹94.9 = US$1** (mid/late-Oct-2026, as used across the Oct-2026 dossier set). Use for all USD conversions; LNG/coal quotes in $ are converted at this rate unless stated.
- Macro context reused from sibling dossiers [V-sib]: West Asia war from 28-Feb-2026 → Strait of Hormuz closure, ceasefire 7-Apr-2026; RBI repo hiked to 5.50% on 7-Oct-2026; IEX day-ahead (DAM) ₹7.3/kWh in Sep-2026 (+105% YoY), RTM ₹6.9; all-India peak demand record **270.8 GW on 21-May-2026**.
- **Three PAT bases exist for every member — always name the basis.** (1) Screener "Net Profit" = consolidated PAT **including minority interests** (this is what Tata Power headlines as "reported PAT"). (2) PAT attributable to owners (= EPS × shares). (3) Company "EBITDA" includes other income (Tata, Torrent) and **regulatory income** (CESC). Part 3 aggregates use basis (1) for P&L and show (2) separately.

**Q2 FY27 status (as of 22-Oct-2026): none of the three has reported Q2 FY27. Q1 FY27 (Jun-26) is the latest quarter for all three.**

| Company | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|
| Tata Power | **27-Jul-2026** (press release dated 27-Jul-2026, filed NSE/BSE; analyst call 28-Jul, 11 am) [V PR; V-snip sahi] | **11-Nov-2026** — screener shows "Upcoming result date: 11 November 2026" [V screener]. Last year's Q2 also 11-Nov-2025 [V-snip trendlyne]. Q2 operating updates already filed: TPREL commissioned **419 MW + 131.2 MWh storage in Q2 (H1 645 MW)** (12-Oct); TP Solar produced **1 GW modules / 0.9 GW cells in Q2 (H1 2.0 GW / 1.8 GW)** (8-Oct) [V screener announcements]. |
| Torrent Power | **3-Aug-2026** (investor presentation filed 3-Aug-2026 17:27 IST; call 6:30 pm) [V NSE PDF; V-snip multibagg] | **Not announced** as of 22-Oct [V screener: latest filing 8-Oct]. Trading window closed 28-Sep. Last year Q2 FY26 board/call 11-Nov-2025 [V-snip filingreader]; expect ~early-to-mid Nov [E]. |
| CESC | **13-Aug-2026** (investor update dated 13-Aug-2026, filed NSE) [V NSE PDF]; interim dividend ₹6, record date 19-Aug [V-snip] | **Not announced** as of 22-Oct [V screener: latest filing 8-Oct]. Trading window closed 25-Sep. Last year's Q2 FY26 board was 17-Oct-2025 [V-snip filingreader] — this year is already later; expect late Oct/early Nov [E]. |

**Still listed?** All three are listed; no merger/demerger affecting the listed entity is live. Corporate actions that change the analysis:
1. **Torrent Power completed the Nabha Power acquisition on 25-Jun-2026** (1,400 MW supercritical coal, Patiala, 25-yr PPA with PSPCL; bought from L&T for an **equity consideration of ₹3,632.35 Cr** [V-snip psuconnect/sahi]; the primer's "₹6,889 Cr" is the enterprise value incl. debt [primer]). Q1 FY27 consolidates only 5 days (₹68.6 Cr revenue, ₹7.6 Cr PAT) [V-snip]. **FY27 is not comparable with FY26**: management guides steady-state Nabha EBITDA ~**₹1,000 Cr/yr** [V-snip sahi, Q1 call]. Torrent's capacity jumped from 5,094 MW to **6,564 MWp** [V deck].
2. **CESC's renewables arm Purvah Green signed an SPA (Aug-2026) to buy 100% of six ReNew solar SPVs (1,411 MWp, EV ~₹4,859 Cr; ~₹600 Cr annual revenue), expected to close before 31-Oct-2026** [V CESC Q1 deck; V CARE 12-Aug-2026]. CESC equity contribution ~₹1,600 Cr; CARE expects a fresh equity raise at Purvah by FY28-end [V CARE]. If it closes before Q2 results, H2 FY27 numbers change materially.
3. **Tata Power: Mundra (4,150 MW imported-coal UMPP, held in Coastal Gujarat Power Ltd) runs under Section 11 directions to 31-Dec-2026** (MoP order 25-Sep, disclosed 26-Sep; earlier validity 30-Jun then 30-Sep) [V psuconnect; V Tata PR]. A Supplementary PPA (SPPA) with GUVNL is signed; other states in discussion [V Tata PR]. After 31-Dec the plant's economics depend on SPPAs with the remaining procurers (Maharashtra, Punjab, Haryana, Rajasthan) [K procurer list].
4. **Tata Power board change:** three independent directors (incl. Anjali Bansal, Vibha Padalkar) ceased 13-Oct-2026 [V screener] — term completions, not a governance event as far as seen (not investigated).
5. **Torrent:** SECI 300 MW wind PPA (LoA 14-Jul-2022) **terminated**; Torrent pays ₹39.78 Cr liquidated damages (7-Oct-2026) [V screener].
6. **Torrent shareholding oddity:** screener shows a "Government" holding of **8.35%** since the Sep-2024 quarter (1.47% before) [V screener]. Not explained in anything fetched; the writer should NOT interpret it without checking the shareholding pattern (possibly a reclassification). FLAG.

---

## READ THIS FIRST: ten definitional traps

1. **Tata Power's "PAT" has two numbers that differ by ~₹1,370 Cr a year.**
   - FY26 "reported PAT" **₹5,118 Cr** (screener net profit; includes minority shares in TPDDL 49%, the four Odisha discoms 49%, Maithon 26%, TPREL 11.43%) [V screener; primer].
   - **PAT attributable to owners ≈ ₹3,748 Cr** (EPS ₹11.73 × 319.53 Cr shares) [E from V screener EPS].
   - Q1 FY27: reported **₹1,401 Cr** vs attributable **₹1,176 Cr** (EPS ₹3.68) [V PR; V-snip upstox/sahi].
   - The deck also shows FY26 "PAT ₹5,212 Cr" on a third, adjusted/before-minority basis [V deck p6]. Screener P/E (28.9×) uses the attributable EPS (₹354 ÷ ₹12.10 TTM EPS ≈ 29×) [E].
2. **Company EBITDA ≠ screener operating profit.**
   - Tata FY26: company EBITDA **₹16,090 Cr** (incl. other income ₹3,433 Cr) vs screener OP **₹13,271 Cr** [V deck; V screener].
   - Torrent FY26: company PBDIT **₹5,864 Cr** (incl. other income ₹323 Cr) vs screener OP ₹5,577 Cr [V deck; V screener].
   - CESC FY26: company EBITDA **₹4,707 Cr** includes **regulatory income ₹903 Cr** and other income ₹357 Cr; screener OP is **₹3,624 Cr** (screener puts regulatory income in "other income" ₹1,255 Cr) [V CESC deck; V screener]. CARE's standalone EBITDA *excluding* regulatory income was ₹2,150 Cr vs company standalone EBITDA ₹2,673 Cr [V CARE].
   - Use screener OP for cross-company tables; quote company EBITDA in prose with the basis.
3. **"Regulatory income" and "regulatory assets" are accounting for tariffs not yet collected.** When a regulator does not let tariffs rise to cover costs, the licensee books the shortfall as income (Ind AS 114 regulatory deferral account) and a receivable on the balance sheet. It is real only when the regulator later lets it be billed. CESC: adjusted regulatory assets **₹5,257 Cr (Mar-26)**, up from ₹4,350 Cr [V CARE]. Tata Power: regulatory assets **₹10,790 Cr** (Jun-26), of which TPDDL ₹4,940 Cr [V deck]. A rising RA balance means profit is running ahead of cash.
4. **T&D loss vs AT&C loss vs "distribution loss".** T&D loss = (units input − units billed) ÷ input. AT&C loss also counts what was billed but not collected: AT&C = 1 − (billing efficiency × collection efficiency). Torrent and CESC report **T&D/distribution loss**; Tata reports **AT&C** for Delhi and Odisha. **Odisha figures are quarterly and "excluding past arrears"** — Q1 is seasonally the worst quarter (summer agricultural/rural load). Never compare a Q1 figure with an annual one.
5. **Licensee vs franchisee vs JV discom.**
   - **Licensee** (owns wires, earns regulated ROE): Tata Mumbai; Torrent Ahmedabad/Gandhinagar, Surat, Dahej SEZ, Dholera SIR, DNH&DD; CESC Kolkata/Howrah, Greater Noida (NPCL), Chandigarh (CPDL).
   - **JV licensee, 51% private / 49% state** (consolidated with 49% minority): Tata Power-DDL (Delhi), TPCODL/TPSODL/TPWODL/TPNODL (Odisha) [V deck "TPCL stake 51%"].
   - **Input-based franchisee** (does not own wires; buys power from the state discom at a fixed input rate, keeps the spread): Torrent Bhiwandi, Agra, Shil-Mumbra-Kalwa; CESC Kota, Bharatpur, Bikaner, Malegaon; Tata Power Ajmer (TPADL) [V decks; K Ajmer].
   - **Revenue from a franchise is gross** (the full bill), so franchise revenue inflates sales without adding much equity (CESC Malegaon: ₹799 Cr revenue, **−₹125 Cr PAT** in FY26) [V CESC deck].
6. **Capacity units and perimeters differ.**
   - Tata "16.7 GW" (FY26) = 8.8 GW thermal (incl. 4.15 GW Mundra) + ~0.9 GW hydro + ~0.4 GW waste heat + ~6.6–6.7 GW RE. The deck calls "clean & green" **~7 GW** [V deck p6]; primer's "47% clean" includes hydro/WHR [primer]. Tata also quotes "26 GW operational + under construction" [V PR].
   - Torrent "6,564 MWp" mixes DC solar MWp and AC MW [V deck].
   - CESC: group thermal **2,143 MW** (Kolkata 1,125 MW installed but **885 MW operating**: BBGS 750 + Southern 135; Haldia 600; Dhariwal 600; Crescent 40) [V CARE; V deck]; Purvah's "1.8 GWp operational" **includes the 1,411 MWp ReNew portfolio not yet closed** [V deck].
7. **Tata Power's net debt has three numbers.** Company net external debt **₹56,122 Cr (Mar-26) → ₹61,238 Cr (Jun-26)** after cash ₹15,000/12,831 Cr [V deck]. Screener borrowings **₹76,141 Cr** (incl. leases/other) [V screener]. Screener "investments" ₹16,575 Cr are largely **equity-accounted JVs/associates** (coal mines KPC/BSSR, Tata Projects, PPGCL, IEL…), not cash. **Use the company figure**; net debt ÷ underlying EBITDA **3.34× FY26, 3.41× Q1 FY27** [V deck].
8. **Torrent's leverage was reset by the QIP and is now being re-levered.** Company ND/EBITDA **2.06×** and ND/equity **0.56×** at FY26 [V deck] (primer: 0.67× — conflict). Post-Nabha, gross debt/equity ~**0.97×** (Q1 call, per secondary) [V-snip sahi]. Screener borrowings jumped ₹8,840 → ₹13,971 Cr in FY26 [V screener].
9. **"Allowed ROE" is not "earned ROE".** CERC allows 15.5% post-tax on generation/transmission (2024–29) [V-sib]; state commissions set their own (typically 14–16%) [K/E]. A licensee earns more than allowed via **efficiency gains** (beating normative loss, normative availability, heat rate) and **incentives**, and less via disallowances and delayed true-ups. Consolidated ROE (Tata 10.2%, Torrent 12.5%, CESC 12.0%) [V screener] blends regulated, merchant, EPC and growth capex still under construction.
10. **Revenue "growth" in this sector is mostly fuel and power-purchase pass-through.** Tata's FY26 revenue fell 4.7% while EBITDA rose (Mundra offline cut coal revenue; EPC billing fell) [V screener; primer]. CESC's +9.2% includes FPPAS (₹0.62/unit surcharge ≈ ₹700 Cr in FY26) [V CARE]. Use **units sold (MU), regulated equity and EBITDA** for growth; revenue is a weak signal.

---

## 0. Top-line framing (what an expert leads with)

- **Three companies, one model: a regulated distribution monopoly that funds a generation (now renewables) build.**
  - FY26 combined revenue **₹1,09,965 Cr** (−1.5% YoY), screener operating profit **₹22,472 Cr (20.4%)**, reported PAT **₹9,205 Cr**, PAT attributable to owners **≈₹7,706 Cr**; m-cap **₹1,91,252 Cr** on 22-Oct-2026 [E: sums of V screener rows].
  - Company-basis EBITDA ₹26,661 Cr; company-basis net debt ≈ **₹84,346 Cr** (3.2× EBITDA) [E: Tata ₹56,122 + Torrent ≈₹12,080 + CESC ≈₹16,144 Cr].
  - Tata Power is **57% of revenue and 59% of m-cap**; Torrent 26%/32%; CESC 17%/9% [E].
- **The wires business is the ballast, and it is growing faster than the headlines.**
  - Tata Power T&D cluster: Q1 FY27 revenue ₹11,441 Cr (+13.5%), EBITDA ₹1,541 Cr (+14%), PAT ₹492 Cr (+11%); FY26 T&D PAT ₹2,978 Cr (+49%) [V PR; primer]. Regulated equity **₹15,178 Cr** (Jun-26, 100% basis), +11% YoY [V deck].
  - Torrent: T&D segment = **74% of FY26 segment revenue and 62% of segment EBITDA** (₹3,793 Cr of ₹6,125 Cr) [V deck]; "more than c.70% of EBITDA from integrated generation + distribution" [V deck].
  - CESC: Kolkata standalone EBITDA ₹2,673 Cr + NPCL ₹442 Cr + CPDL ₹61 Cr = ~₹3,176 Cr of distribution-anchored EBITDA, out of ₹4,707 Cr [E from V deck].
- **Operating efficiency is the moat — and the profit lever.**
  - Licensed-area losses: Torrent **2.33%** (Ahmedabad 3.35%, Surat 2.77%, DNH&DD <2%) FY26 [V deck]; CESC Kolkata **6.11%** vs WBERC norm 8% [V deck; V CARE]; NPCL **6.95%**; Tata Power-DDL AT&C ~**5–6%** (Q1 FY27 5.5%) [V deck].
  - National AT&C losses **15.04% (FY25)**, from 22.62% in FY14 [V-sib]; PFC's FY24 report had 16.12% [V-snip].
  - Odisha is the outlier and the upside: Q1 FY27 AT&C excluding arrears **31% / 32% / 26% / 17%** (TPCODL/TPSODL/TPWODL/TPNODL) vs vesting-order targets of **16% / 22% / 15% / 13%** [V deck]. Five years after privatisation, three of the four are still ~10–15 pp above target — a regulatory risk (disallowance) and an earnings option.
- **The growth capex has moved to renewables, storage and solar manufacturing.**
  - Tata: ₹25,000 Cr capex guided for FY27 (FY26 actual ~₹13,000 Cr vs ₹20–22k guided) [V-snip angelone/sahi]; Q1 FY27 record ₹5,375 Cr [V PR]. RE portfolio 12.0 GW (6.7 operating + 5.3 under construction); **4.3 GW integrated cell & module plant** (Tirunelveli) earned ₹371 Cr PAT in Q1 FY27 alone (3.9×) [V PR/deck]. FY30 aspiration: **revenue ₹1 lakh Cr, EBITDA ₹30,000 Cr, PAT ₹10,000 Cr, >30 GW, ~40 mn distribution customers** [V deck].
  - Torrent: ~4.6 GWp RE under implementation (~₹29,638 Cr), 3 GW Raigad PSP (₹14,000 Cr, SCOD Oct-2028), 1,600 MW Anuppur coal (₹23,000 Cr), Nabha bought; FY26 capex ₹8,720 Cr; FY27 renewables capex ~₹10,000 Cr [V deck; V-snip sahi].
  - CESC/Purvah: contracted 4.5 GWp (1.8 GWp operating incl. ReNew acquisition + 2.7 GWp under implementation) + 1.53 GWh BESS; 3 GW cell plant at Greater Noida/Jewar (~₹3,000 Cr, cell lines 2027); 1.1 GW module plant (RPSG Solvanta, since Oct-2025) [V deck; V CARE].
- **Valuations rank exactly by perceived regulatory quality and growth (screener 22-Oct-26).**
  - Tata Power: **₹1,13,277 Cr**, P/E 28.9×, P/B 2.85×, EV/EBITDA ~10.5× FY26 company EBITDA (before adding minorities) [E].
  - Torrent: **₹60,752 Cr**, P/E 26.1×, P/B 3.18×, EV/EBITDA ~12.4× [E].
  - CESC: **₹17,223 Cr**, P/E 11.1×, P/B 1.38×, dividend yield 4.62%, EV/EBITDA ~7.1× [E]. CESC is −28% over 1 year (52-wk range ₹128–204) [V screener] — the market is pricing WBERC's tariff freeze, rising regulatory assets and Purvah's capital needs.
  - All three are **near 52-week lows**: Tata ₹354 (low ₹334), Torrent ₹1,204 (low ₹1,165), CESC ₹130 (low ₹128) [V screener].

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Activities (by member)

| Activity | What it is | How it earns | Tata Power | Torrent Power | CESC |
|---|---|---|---|---|---|
| **Licensed distribution** | Own wires + retail supply monopoly in a licensed area | Cost-plus ARR: ROE on regulated equity + pass-through of power purchase/fuel + efficiency gains | Mumbai (~0.77 mn customers [primer]), Delhi TPDDL 51% (~2.1 mn), Odisha 4 discoms 51% (~9.5 mn; >1 crore registered) | Ahmedabad/Gandhinagar (>21 lakh), Surat (>6 lakh), Dahej SEZ (146), Dholera SIR, DNH&DD (>1.7 lakh) | Kolkata/Howrah (37 lakh), Greater Noida NPCL (2.15 lakh), Chandigarh CPDL (2.4 lakh) |
| **Distribution franchise** | Operate a state discom's network for 15–20 years | Input-rate spread: collect retail tariff, pay state an input rate | Ajmer (TPADL) | Bhiwandi, Agra, Shil-Mumbra-Kalwa | Kota, Bharatpur, Bikaner (5.5 lakh), Malegaon (1.3 lakh) |
| **Regulated / PPA thermal** | Coal/gas plants with cost-plus or bid PPAs | Capacity charge (ROE + O&M + interest + depreciation) + energy charge | Mumbai gen, Jojobera, Maithon 74%, IEL, PPGCL (assoc.), Mundra (now Section 11/SPPA) | AMGEN 362 MW, SUGEN/UNOSUGEN 1,530 MW (CERC regulated, 835+278 MW to own discoms), Nabha 1,400 MW | BBGS 750, Southern 135, Haldia 600, Dhariwal 600 (partly merchant), Crescent 40 |
| **Merchant thermal/gas** | Uncontracted capacity sold on IEX/bilateral | Exchange price − variable cost | Haldia (merchant margin), parts of Mundra pre-2026 | DGEN 1,200 MW (no PPA), ~1.5 GW gas available for merchant | Dhariwal (part), Crescent |
| **Renewable IPP** | Solar/wind/hybrid/FDRE/BESS under 25-yr PPAs | MW × hours × CUF × tariff | TPREL 6.7 GW operating (5.4 solar + 1.3 wind) + 5.3 GW UC | 1,092 MWp solar + 980 MW wind; ~4.6 GWp UC | Purvah ~0.4 GWp organic + 1.4 GWp acquisition; 2.7 GWp UC |
| **Pumped storage** | Water-battery for evening peak | Storage-facility fixed charge (₹/MW/month) | Bhivpuri 1,000 MW (324 MW tied with SECI), 2.8 GW signed | Raigad 3,000 MW (2,000 MW/16,000 MWh with MSEDCL; ₹1,680 Cr/yr); 8.4 GW plan | — |
| **Transmission (TBCB/regulated)** | High-voltage lines | Regulated ROE (Mumbai) or bid annuity for 35 years (TBCB) | 5,562 ckm operating; 2,332 ckm UC; Ryapte 491 ckm (>₹4,000 Cr) | 952 ckm 400 kV + 388 ckm 220 kV operating | — (none material) |
| **Solar manufacturing** | Cells and modules (ALMM) | Product margin | TP Solar 4.3 GW cell & module (Tirunelveli); 10 GW ingot/wafer planned (Gopalpur, Odisha) | — | RPSG Solvanta 1.1 GW modules; CESC Green 3 GW cells (2027) |
| **Solar EPC / rooftop / EV** | Building plants for others; rooftop under PM Surya Ghar | EPC margin; product + install | Rooftop 5.2 GWp cumulative, 4.8 lakh customers; EV 2.4 lakh home chargers, 5,900+ public points | C&I solar (~74 MWp) | — |
| **Coal mining (equity-accounted)** | Indonesian thermal coal | Share of profit | KPC 30%, BSSR 26%, AGM 26% | — | Sarisatolli captive mine (negative bid ₹470/t) feeding BBGS |
| **Trading / cross-border** | Power trading licence; Bhutan hydro | Trading margin; PPA | TPTCL; Khorlochhu 600 MW (UPPCL 511 MW 30-yr PPA approved), Dorjilung, Nyera Amari MoU 404 MW | Torrent Power trading (small) [K] | — |
| **City gas** | — | — | — | Sister company Torrent Gas (unlisted, not in TPL) | — |

Sources: Tata Q1 FY27 PR and deck; Torrent Q1 FY27 deck; CESC Q1 FY27 deck; CARE CESC 12-Aug-2026 [all V].

### 1.2 Value chain (fuel → plug) and where each member sits

1. **Fuel.** Domestic coal (Coal India linkage at notified prices + e-auction premium + captive mines); imported coal (Indonesia/Australia, mostly for coastal plants like Mundra); domestic gas (APM/HPHT) and imported LNG (Petronet Dahej). Members: Tata (equity in KPC/BSSR/AGM in Indonesia; Mundra burns imported coal), Torrent (DGEN/SUGEN on LNG, 1 MTPA regas at Petronet Dahej for 20 years from Apr-2017 [V deck]), CESC (FSA of 15.95 MTPA with CIL subsidiaries; Sarisatolli captive mine = 28% of FY26 coal) [V CARE].
2. **Generation.** Station heat rate, availability and fuel cost decide cost per kWh. Cross-ref power-generation §04 and §14.
3. **Transmission.** Inter-state (CTU/ISTS, mostly POWERGRID + TBCB winners like Adani Energy Solutions, Tata Power, Sterlite) and intra-state (STUs). Members: Tata (Mumbai regulated transmission; Powerlinks; TBCB SPVs), Torrent (lines evacuating Khavda/Solapur RE).
4. **Distribution.** The discom buys power under PPAs (~85–90% of cost of supply), wheels it over its 33/11 kV and LT network, meters, bills and collects. **This is where the members are distinctive** — >95% of India's distribution is still run by state-owned discoms [E; K].
5. **Beyond the meter.** Rooftop solar, EV charging, smart meters (RDSS AMISP contracts), home energy. Tata is the only member with a scaled consumer business.

### 1.3 Where value is captured (and why integration matters)

- **Distribution licence economics are not a margin on power; they are a return on the network.** A discom's profit ≈ regulated equity × allowed ROE + efficiency gains − disallowances. On ₹100 of tariff, the licensee keeps perhaps ₹4–7 as PAT [E: Torrent FY26 PAT/revenue 8.5%; CESC standalone 8.6%; Odisha Q1 FY27 2.0%].
- **Integration adds two things:** (a) an assured buyer for own generation (Torrent: c.32.8% of operating thermal and c.44.0% of operating RE capacity are tied to its own discoms [V deck]; CESC: 1,721 MW of 2,143 MW group thermal supplies Kolkata/Noida [V CARE]); (b) RPO-compliant renewable PPAs into own discoms (Torrent TPL-D 450 MW @₹3.65 + 250 MW FDRE @₹4.87; CESC Kolkata 300 MW solar @₹2.69 and 300 MW hybrid @₹3.75; NPCL 300 MW hybrid @₹3.84) [V decks]. The regulator must approve these as prudent; self-dealing scrutiny is a risk.
- **Value capture by sub-activity (FY26, screener-agnostic company segment data):**
  - Tata FY26 segment PAT: T&D ₹2,978 Cr; Renewables ₹1,994 Cr; TP Solar ₹857 Cr; rooftop ₹499 Cr; Maithon ₹404 Cr [primer, from company FY26 release]. Q1 FY27 cluster PAT: thermal+coal+hydro ₹635 Cr; renewables ₹612 Cr; T&D ₹492 Cr [V deck].
  - Torrent FY26 segment EBITDA: T&D ₹3,793 Cr (62%), generation ₹1,320 Cr (22%), RE ₹1,012 Cr (16%) [V deck].
  - CESC FY26 EBITDA by entity: Kolkata standalone ₹2,673 Cr; Haldia ₹825 Cr; Dhariwal ₹797 Cr; NPCL ₹442 Cr; Crescent ₹116 Cr; CPDL ₹61 Cr; Rajasthan franchises ₹118 Cr; Malegaon −₹112 Cr [V deck].

---

## 2. Size and growth

### 2.1 The national electricity system (context)

| Metric | Value | Source |
|---|---|---|
| Installed capacity | 532.7 GW (31-Mar-2026); 548.9 GW (30-Jun-2026); **552 GW (Jul-2026)**, non-fossil 300.5 GW (54%) | CEA via IEEFA [V-sib]; govt factsheet via IANS [V-snip] |
| Capacity added FY26 | 57.5 GW net (record) | [V-sib] |
| RE capacity (30-Sep-2026) | ~299 GW incl. large hydro: solar 171.05 GW, wind 59.20 GW, large hydro 52.06 GW, bio 10.87 GW; FY27 YTD (Apr–Sep) RE addition 24.56 GW (solar 20.79, wind 3.11) | MNRE via Energetica, Oct-2026 [V-snip] |
| Peak demand | FY15 148.2 → FY19 177.0 → FY22 203.0 → FY23 215.9 → FY24 243.3 → FY25 249.9 GW (250 GW on 30-May-2024) → **270.8 GW on 21-May-2026** | CEA via CERC; IEEFA [V-sib] |
| Peak projection | 366 GW in 2031-32 (NEP 2023) [K]; 388 GW by FY32 (cited on Torrent Q1 call) [V-snip]; **459 GW FY36** (CEA 20th EPS mid-term review) [V-sib] |
| Energy requirement | 1,069 BU FY15 → 1,694 BU FY25 (4.7% CAGR); FY26 growth only **+0.8%** (cool, wet year); Q1 FY27 power demand **+8.5% YoY** (Tata deck); Sep-2026 +9–11% | [V-sib]; [V Tata deck] |
| Per-capita consumption | 1,395 kWh FY24 vs world ~3,474 kWh | [V-sib] |
| Short-term market | 238 BU traded short-term FY25 (13% of generation); IEX ~85% of exchange volume | CERC [V-sib] |

### 2.2 The distribution money pool [E]

- All-India energy sold to consumers ≈ **1,450–1,500 BU** (energy requirement ~1,700 BU less ~15% AT&C/T&D losses) [E].
- At an average cost of supply of **₹7.09/kWh (FY24, PFC via CERC)** [V-sib], retail distribution revenue (incl. subsidy) ≈ **₹10–11 lakh Cr a year** (~US$110–115 bn at ₹94.9) [E].
- **Private share:** private distribution licensees/JVs/franchisees serve roughly **30–35 mn of India's ~300+ mn consumers (~10–12%)** [E: Tata 13.2 mn + Torrent ~4.2 mn + CESC 4.9 mn + Adani Electricity Mumbai ~3.1 mn [K] + BSES Rajdhani/Yamuna ~4.9 mn [K] + others]. The three members alone serve **~22 mn customers** [E from V decks; Torrent from primer].
- **Members' distribution volume FY26:** CESC distribution sales ≈ **20,973 MU** (Kolkata 11,990 incl. export/banking + NPCL 3,888 + CPDL 1,746 + Rajasthan 2,427 + Malegaon 922) [E from V deck]; Torrent ~**30 BU** distributed [primer]; Tata Power Odisha ~36–38 BU sold (Q1 FY27 8,960 MU × ~4.2) [E], TPDDL ~11–12 BU [E: Q1 3,238 MU], Mumbai ~5–6 BU [E/K]. Combined members ≈ **100–110 BU, ~7% of national retail sales** [E].

### 2.3 Members' revenue and growth (screener consolidated, ₹ Cr) [V screener 22-Oct-26]

| Company | FY22 | FY23 | FY24 | FY25 | FY26 | 4-yr CAGR | FY26 YoY |
|---|---|---|---|---|---|---|---|
| Tata Power | 42,816 | 55,109 | 61,449 | 65,478 | 62,429 | 9.9% | −4.7% |
| Torrent Power | 14,258 | 25,694 | 27,183 | 29,165 | 28,966 | 19.4% | −0.7% |
| CESC | 12,544 | 14,246 | 15,293 | 17,001 | 18,570 | 10.3% | +9.2% |
| **Sum** | **69,618** | **95,049** | **1,03,925** | **1,11,644** | **1,09,965** | **12.1%** | **−1.5%** |

- Torrent's FY23 jump (+80%) was LNG-priced merchant gas sales and DNH&DD (taken over 1-Apr-2022) [V deck note; K]. Tata's FY22–23 jump = Odisha discoms consolidated + EPC + coal prices [K].
- PAT (screener, incl. minorities): Tata 2,156 / 3,810 / 4,280 / 4,775 / 5,118; Torrent 459 / 2,165 / 1,896 / 3,059 / 2,469; CESC 1,404 / 1,397 / 1,447 / 1,429 / 1,618 (FY22→FY26) [V screener]. Sum: 4,019 / 7,372 / 7,623 / 9,263 / 9,205.
- Torrent FY22 PAT ₹459 Cr was after a ₹928 Cr impairment (net of DTL reversal) [V deck note]; FY25 ₹3,059 Cr included a ₹637 Cr one-off deferred-tax gain [primer].

---

## 3. Demand drivers and end-markets

1. **Weather now beats GDP.** Cooling load sets the peak: in Apr–Jun 2026 the daily peak fell in solar hours on 61 of 91 days; FY26 demand grew only 0.8% in a cool, wet year, then +8.5% in Q1 FY27 [V-sib; V Tata deck]. Distribution licensees are volume-insensitive in profit (cost-plus) but volume drives RA build-up when purchase costs spike.
2. **Urban and industrial mix.** Members' licences are concentrated in rich, industrial cities (Mumbai, Ahmedabad, Surat, Kolkata, Delhi, Greater Noida, Chandigarh) and industrial zones (Dahej SEZ, Dholera SIR, DNH&DD peak 1,437 MW). Torrent DNH&DD and Surat are HT-heavy; NPCL has a "superior HT:LT mix" [V CARE]. HT consumers cross-subsidise LT/agriculture, so open-access migration by HT users is a key risk.
3. **Data centres.** Tata Power (14-Oct-2026): **2.8 GW+ data-centre opportunity pipeline across 18 players and ₹15,000 Cr of Mumbai grid upgrades**; a 400 kV ring for Mumbai by 2031 [V screener announcement; V PR]. Torrent's Ahmedabad and Dholera, CESC's Greater Noida (Jewar/YEIDA corridor) are also data-centre catchments [E].
4. **Electrification:** EVs (Tata EZ Charge ~476 mn green miles), metro/rail, induction cooking, green hydrogen (Torrent 72 TPA pilot; 18 KTPA PLI award [primer]).
5. **Rooftop solar reduces billed demand** for discoms but is a product for Tata (PM Surya Ghar: 1 crore households, ₹75,021 Cr outlay, Feb-2024 [K]). TPDDL crossed 10,000 rooftop installations (160 MWp) [V PR].
6. **Privatisation is the volume driver for distribution franchises/licences** (§7.3): Tata's FY30 target of ~40 mn customers (from 13.1 mn) can only be met by new states [V deck].

---

## 4. Supply side and cost structure

### 4.1 Key inputs and their price drivers

| Input | Driver | 2025–26 data | Who is exposed |
|---|---|---|---|
| **Power purchase** (discom's biggest cost) | PPA tariffs (fixed + energy), exchange prices, RPO | Torrent FY26 power purchase ₹18,998 Cr = **66% of revenue**; Q1 FY27 ₹5,818 Cr (72%) [V deck]. CESC consol. electricity purchased ₹7,622 Cr (41%) + fuel ₹3,838 Cr (21%) [V deck]. Odisha power cost ₹2.1–4.0/unit vs revenue ₹5.6–6.4/unit (Q1 FY27) [V deck] | All; pass-through with lag (FPPAS) |
| **Exchange power** | Demand, coal stocks, solar hours | IEX DAM avg: FY22 ~₹4.5, FY23 ~₹5.9, FY24 ₹5.2, FY25 ₹4.4, FY26 **₹3.8**, Apr–Jul 2026 ₹5.1, Jul–Sep ₹5.7, **Sep-2026 ₹7.3** (RTM ₹6.9) [V-sib]. Cap ₹10/kWh [V-sib] | CESC buys ~25% of procurement from the market [V CARE]; Tata/Torrent sell merchant |
| **Domestic coal** | CIL notified price, e-auction premium, rail freight | CIL 768 MT FY26 (−2%), captive/commercial 210 MT (+10%); plant stocks 19.2 days Mar-26 → ~11 days Aug-2026, 43 GW on critical stock [V-sib] | CESC (all), Tata (Maithon, Jojobera, Mumbai), Torrent (AMGEN, Nabha) |
| **Imported coal** | Indonesian HBA/ICI, Newcastle, freight, rupee | Power-sector imports −27.5% FY26; Apr–Jun 2026 −72.9% YoY [V-sib]. Mundra cost is now passed through under SPPA/Section 11 benchmark (coal + shipping + O&M + margin, reviewed every 15 days) [V-snip] | Tata Mundra (4,150 MW); offset by 30% KPC + 26% BSSR equity income |
| **LNG / gas** | JKM, Brent-linked contracts, Hormuz | Petronet force majeure and **GAIL's Qatar allocation cut to zero from 4-Mar-2026**; Platts JKM **$25.39/MMBtu on 3-Mar-2026**; spot "near $20/MMBtu" in Aug-2026 (Torrent Q1 call); India sourced 59% of 2025 LNG (26 Mt) from Qatar+UAE; QatarEnergy FM reportedly extended to Nov-2026 [V-snip]. At $20/MMBtu and a combined-cycle heat rate of ~1,750 kcal/kWh (≈0.0069 MMBtu/kWh; 1 MMBtu = 252,000 kcal) the fuel cost alone is **~₹13/kWh** [E: 20 × 94.9 × 0.0069], ~₹14–15 with regas and transport — above the ₹10 exchange cap; at a pre-war ~$11–12 it was ~₹7–8 [E] | Torrent (2,730 MW gas; SUGEN PLF 43.4% Q1, DGEN idle) |
| **Equipment / modules** | China polysilicon, ALMM, BCD | BCD 40% modules / 25% cells; ALMM List-II (cells) effective **1-Jun-2026**, 30,056 MW enlisted (Tata Power 4,813 MW, 3rd largest) [V-sib]; India ~193 GW module vs ~30 GW listed cell capacity [V-sib] | Developers buy DCR cells → favours Tata (captive) and CESC (from 2027) |
| **Interest** | G-sec, ratings | RBI repo hiked to 5.50% (7-Oct-2026) [V-sib]. Tata interest ₹5,257 Cr FY26; Torrent ₹934 Cr; CESC ₹1,532 Cr (screener) [V] | All; regulated businesses get normative interest pass-through |

### 4.2 "Where ₹100 of revenue goes" — three archetypes [E composites]

**(a) A licensed urban discom (Torrent Ahmedabad/Surat or CESC Kolkata type), FY26:**
| Item | ₹ |
|---|---|
| Power purchase (incl. own-generation transfer price) | 70–75 |
| Transmission/wheeling charges | 3–5 |
| Employee + O&M + other opex | 8–10 |
| Depreciation | 3–4 |
| Interest | 2–4 |
| Tax | 1–2 |
| **PAT (≈ ROE on regulated equity + efficiency gains)** | **4–7** |
Basis: Torrent consolidated FY26 power purchase 66% + material 5.5% of revenue; CESC standalone FY26 fuel 16.6% + power purchase 40% (own generation embedded), employee 10.8%, other opex 12.6%, finance 8.9%, D&A 7.0%, PAT 8.8% of ₹9,732 Cr revenue from operations [V decks; E].

**(b) An Odisha-type JV discom in turnaround (Tata Power Odisha, Q1 FY27):** revenue ₹5,530 Cr; EBITDA ₹651 Cr (11.8%); PAT ₹111 Cr (**2.0%**) [V deck]. Power purchase ≈ 55–65% (bulk supply tariff from GRIDCO), employee cost is large (inherited workforce), and high AT&C compresses billed revenue [E].

**(c) Input-based franchisee (CESC Rajasthan / Torrent Agra type):** revenue = full retail bill; input cost paid to the state discom ≈ 85–90%; O&M + capex depreciation ≈ 6–8%; EBITDA ≈ **2–7%** (Kota 5.0%, Bikaner 6.2%, Bharatpur 7.5% in FY26; Malegaon −14%) [V CESC deck; E].

### 4.3 Capacity and utilisation (members)

| Company | Thermal | Gas | Hydro/PSP | RE operating | RE under construction | Notes |
|---|---|---|---|---|---|---|
| Tata Power | ~8.8 GW incl. Mundra 4,150 MW (5×830) [K units], Maithon 1,050 MW (74%) [K], Mumbai/Jojobera/IEL | small (Trombay gas unit) [K] | ~0.9 GW Mumbai hydro (Bhira, Khopoli, Bhivpuri) [K]; PSP 2.8 GW signed (Bhivpuri 1,000 MW, Shirawta 1,800 MW [K]) | 6.7 GW (5.4 solar + 1.3 wind) Jun-26; +419 MW in Q2 [V] | 5.3 GW | Bhutan: Khorlochhu 600 MW, Dorjilung (~1,125 MW [K]) |
| Torrent | 1,762 MW (Nabha 1,400 + AMGEN 362) | 2,730 MW (SUGEN 1,147.5, UNOSUGEN 382.5, DGEN 1,200) | PSP 3,000 MW UC (Raigad); 8.4 GW plan | 1,092 MWp solar + 980 MW wind | ~4.6 GWp (₹29,638 Cr) | Anuppur 1,600 MW coal (DBFOO, ₹5.829/kWh PPA) |
| CESC | 2,143 MW (Kolkata 885 operating of 1,125 installed; Haldia 600; Dhariwal 600; Crescent 40) | — | — | 18 MW TN solar + Purvah ~435 MWp organic (op.) ; +1,411 MWp ReNew pending | 2.7 GWp + 1.53 GWh BESS | 1.1 GW modules (Solvanta) + 3 GW cells (2027) |

**PLF/CUF (latest):**
- Tata Q1 FY27: generation availability 96.2% (thermal ex-Mundra ~98%, Mundra 94%) [V PR/deck]; Maithon PLF 81% (3,491 MU) [V deck]; RE solar CUF 24.3% (curtailment in Rajasthan/Gujarat), wind 24.9% (delayed monsoon) [V deck].
- Torrent Q1 FY27: AMGEN 91.1%, SUGEN 43.4%, DGEN ~very low/idle, wind 33.3%, solar 25.9% (on contracted capacity) [V deck; V-snip investywise].
- CESC FY26 PLF: Budge Budge 81.7%, Haldia 94.9%, Dhariwal 82.9%, Southern 31.2%, Crescent 91.7%; Q1 FY27: BBGS 87.3%, Southern 80.9% (29% a year ago), Haldia 98.4%, Dhariwal 82.3% [V deck]. Group PLF 74% FY26 (76% FY25; 69% FY22) [V CARE].

---

## 5. Industry structure

### 5.1 Concentration (distribution) — name the basis

- **India's distribution is ~90% state-owned.** Roughly 72 distribution utilities (PFC covers 63 of 72 in its 2023-24 report) [V-snip powerline]; the large private licensees/JVs are Tata Power (Mumbai, Delhi-DDL, Odisha ×4), Adani Electricity Mumbai (AEML, unlisted subsidiary of Adani Energy Solutions) [K], BSES Rajdhani and BSES Yamuna (Reliance Infrastructure 51% / Delhi govt 49%) [K], Torrent (Gujarat, DNH&DD), CESC (Kolkata, Greater Noida, Chandigarh), and small licensees (e.g., India Power Corp at Asansol) [K].
- **Private share by customers ≈ 10–12%** [E §2.2]. **By members:** Tata ~13.2 mn customers (largest private distributor in India; Odisha alone >1 crore registered) [V PR/deck]; CESC >4.9 mn [V deck]; Torrent ~4.2 mn [primer; deck gives licensed-area counts only].
- **Members' share of national generation capacity:** Tata ~16.7 GW (3.0% of 552 GW), Torrent ~6.6 GWp (1.2%), CESC ~2.6 GW incl. organic Purvah (0.5%) → ~4.7% [E]. Generation is NOT where these companies are big; they are mid-sized IPPs attached to distribution monopolies.
- **Solar cells:** Tata's 4,813 MW ALMM-II enlisted cell capacity is ~16% of India's 30 GW listed cell capacity (Apr-2026) — 3rd after "other six" and Waaree [V-sib].

### 5.2 Unlisted heavyweights, MNC/PE, state partners

- **Unlisted peers:** AEML (Mumbai suburbs, ~3.1 mn customers; Adani Energy Solutions listed parent) [K]; BSES Rajdhani/Yamuna (RInfra, listed parent) [K]; NPCL (Greater Noida) is a CESC subsidiary (CESC ~72.7%, UPPCL ~27.3% [K, verify]).
- **State partners (49% minority):** Govt of NCT Delhi (TPDDL), Govt of Odisha/GRIDCO (four Odisha discoms); Punjab/Jharkhand (Maithon is a 74:26 JV with DVC [K]).
- **Financial investors:** TPREL — **BlackRock Real Assets + Mubadala consortium (GreenForest New Energies) invested ₹4,000 Cr (2022–23) for ~11.4%; Tata Power now owns 88.57%** [V deck for 88.57%; K for investors — our primer wrongly says "Blackstone"]. Torrent and CESC have no PE at listed level; CARE expects external equity at Purvah Green by FY28 [V CARE].
- **Promoters (Sep-2026, screener):** Tata Sons/group 46.86%; Torrent group (Mehta family) 51.09% (53.56% before the FY25 QIP); RP-Sanjiv Goenka group 52.11% [V screener].
- **Group context:** RPSG group ~US$5 bn turnover, ~US$900 mn EBITDA, >US$8 bn assets (FY26) [V CESC deck]; Torrent group = Torrent Pharma + Torrent Power + Torrent Gas (17 GAs, >500 CNG stations) [V Torrent deck]; Tata Power is the Tata group's energy company.

### 5.3 Competition for the next distribution areas

- **Privatisation bidders seen in 2020–25 rounds:** Tata Power (won all four Odisha discoms, 2020–21), Torrent (won DNH&DD; also Daman-Diu merged UT), RPSG/CESC's Eminent Electricity (won Chandigarh at ₹871 Cr, Nov-2020; took over **1-Feb-2025** after litigation), Adani (bid for Chandigarh/DNH) [K; primer].
- **The China angle is upstream:** cells, wafers, polysilicon, BESS cells. ALMM-II and DCR rules make domestic cell makers (Tata, CESC from 2027) more valuable [V-sib].

---

## 6. Business-model archetypes and their economics

| Archetype | Example | Revenue driver | Return driver | Typical PAT/revenue | Key risk |
|---|---|---|---|---|---|
| **1. Mature urban licensee** | Torrent Ahmedabad/Surat; CESC Kolkata; Tata Mumbai | Units × tariff (cost-plus ARR) | Regulated equity × ROE + loss-below-norm incentives | 6–9% | Tariff freeze / true-up delays (CESC); open access |
| **2. Privatised JV discom (turnaround)** | Tata Odisha ×4; TPDDL (2002) | Units × tariff; collection of arrears | ROE on growing equity + AT&C gains vs vesting targets; arrear collection | 1–5% (Odisha) → 4–5% (mature TPDDL Q1 FY27 4.8%) | Targets vs actual AT&C; regulatory assets (Delhi) |
| **3. Input-based franchise** | Torrent Bhiwandi/Agra/SMK; CESC Rajasthan/Malegaon | Retail collections − input rate | Loss reduction below the "input" assumption | −15% to +4% | Wrong input rate (Malegaon); contract expiry/renewal |
| **4. Regulated/PPA generator** | SUGEN (CERC), AMGEN (GERC), BBGS/Haldia (WBERC/PPA), Maithon, Nabha (Sec 63) | Capacity + energy charges | Normative availability (85%), heat rate, ROE 15.5% | 15–25% | Fuel supply, PPA disputes |
| **5. Merchant/flexible thermal & gas** | DGEN; Dhariwal part; Haldia surplus; Mundra (pre-2026) | IEX price × MU | Spread over variable cost | volatile | LNG price; caps; Section 11 |
| **6. Contracted RE/storage IPP** | TPREL, Torrent RE, Purvah | MW × CUF × tariff (₹2.2–4.9/kWh); PSP fixed charge | Project IRR 9–12% equity on 75–80% debt [E] | 20–30% (RE gencos Q1: ₹251 Cr PAT on ₹1,289 Cr) | Curtailment, connectivity, tariff aggression |
| **7. Solar manufacturing** | TP Solar; Solvanta/CESC Green | Modules/cells × price | DCR/ALMM premium | TP Solar Q1 FY27 EBITDA 25%, PAT 15% | Chinese prices, ALMM policy, overcapacity |

Torrent's own framing: "~70% of EBITDA from regulated businesses" (CRISIL) [primer] and "c.70% from integrated generation + distribution" [V deck]. Tata's framing: "Core business (generation, T&D, renewables) revenue +12%, EBITDA +12%, PAT +14% in Q1 FY27" [V PR].

---

## 7. Regulation and policy

### 7.1 The tariff machinery

- **Electricity Act 2003:** generation de-licensed; tariffs under **Section 62** (cost-plus, set by regulator) or **Section 63** (competitively bid); open access; distribution licences (multiple licensees allowed in law but rarely used); **Section 11** (government may direct a generator in extraordinary circumstances) [V-sib; K].
- **Regulators:** CERC (inter-state generation/transmission, e.g., SUGEN/UNOSUGEN); state commissions: **MERC** (Tata Power Mumbai G/T/D; Torrent Bhiwandi/SMK franchise via MSEDCL), **GERC** (Torrent Ahmedabad/Surat/Dahej/Dholera, AMGEN), **JERC for UTs** (Torrent DNH&DD; CESC/Eminent Chandigarh) [K], **WBERC** (CESC Kolkata, Haldia PPA), **UPERC** (NPCL; Torrent Agra franchise contract with DVVNL), **OERC** (Tata Odisha ×4), **DERC** (TPDDL), **RERC** (CESC Rajasthan franchises; Tata Ajmer) [K].
- **Multi-year tariff (MYT) cycle:** commissions set ARR for a 5-year control period (e.g., **MERC MYT order 28-Mar-2025 for FY26–30** covering TPC-G and TPC-T [V-snip MERC site]; review petitions by TPC-G (12-May-2025) and AEML-D; MSEDCL's 25-Jun-2025 review order was set aside by the Bombay HC and remanded by the Supreme Court on 17-Nov-2025 with a 12-week deadline [V-snip mercom/hitavada]). Annual **true-ups** reconcile actuals. **WBERC's last true-up order for CESC was issued June 2026 for FY22** — FY23 onwards still awaited [V CARE].
- **Allowed ROE:** CERC Tariff Regulations 2024–29: **15.5%** post-tax for generation/transmission [V-sib]; distribution ROE is set by each SERC (typically 14–16% post-tax; CRISIL describes Torrent's distribution RoE as 14–15.5%) [primer citing CRISIL; K]. Exact WBERC/OERC/DERC distribution ROE not fetched — FLAG.
- **Fuel and power-purchase pass-through (FPPCA/FPPAS):** the Electricity (Amendment) Rules 2022 require automatic monthly FPPAS pass-through by formula [K]. **CESC: FPPAS ₹0.50/unit from Jun-2024, ₹0.62/unit from Nov-2024 → ~₹700 Cr extra revenue in FY26**; retail tariff itself frozen at ~₹7.3/unit for several years [V CARE].
- **Normative losses:** WBERC cut CESC's normative T&D loss from 14.3% to **9% (FY24), 8.5% (FY25), 8% (FY26)** — shrinking the incentive cushion as actual loss is 6.1% [V CARE]. Odisha vesting-order AT&C targets (FY27): TPCODL 16%, TPSODL 22%, TPWODL 15%, TPNODL 13% [V deck].

### 7.2 Regulatory assets: the Supreme Court's 2025 order

- **6-Aug-2025 judgment** (in the Delhi discoms' case): existing regulatory assets (as of 1-Apr-2024) to be liquidated within **4 years**, new ones within **3 years**; commissions to give a roadmap; commentary cites a **3%-of-ARR cap** on new RAs (consistent with amended Rule 23 of Electricity Rules 2005) [V-snip SCC Online/vajiram; cap unverified]. Delhi dues to BSES and TPDDL to be cleared by **Apr-2028** [V-snip energetica].
- DERC sought **7 years** (Sep-2025), arguing a 4-year recovery would require 70–80% tariff hikes; DERC put RAs at ~₹31,552 Cr; Delhi RAs ~₹38,500 Cr (Jul-2026); SC ordered status quo on Delhi's CAG audit of the private discoms (Jul-2026) [V-snip].
- ICRA: liquidating ~**₹3 lakh Cr** of RAs across key states needs **20–40%** tariff hikes [V-snip].
- **Members:** TPDDL RAs ₹4,940 Cr (Jun-26; up from ₹3,666 Cr a year earlier) [V deck]; Tata total ₹10,790 Cr; CESC ₹5,257 Cr adjusted (Mar-26) [V CARE]. Torrent: not disclosed in the deck (GERC areas have timely tariffs; low RA) [E].

### 7.3 Privatisation and distribution reform

- **Odisha model (2020–21):** after Reliance Infra's Odisha discoms were taken back in 2015 [K], OERC re-privatised by bid: Tata Power won CESU→**TPCODL (1-Jun-2020)**, SOUTHCO→**TPSODL** and WESCO→**TPWODL (1-Jan-2021)**, NESCO→**TPNODL (1-Apr-2021)**; 51% Tata / 49% GRIDCO-Govt of Odisha; vesting orders fix AT&C trajectories and capex [K; V deck stake 51%].
- **Union territories (2020–25):** DNH&DD → Torrent (took over **1-Apr-2022**) [V deck]; Chandigarh → RPSG's Eminent Electricity (₹871 Cr; took over **1-Feb-2025**) [K; primer].
- **Uttar Pradesh:** UPPCL floated a tender on **12-Jan-2025** for PPP/privatisation of **Purvanchal (PuVVNL) and Dakshinanchal (DVVNL)** — 42 of 75 districts; unions and the consumer council have opposed it; agitation continued into May-2026; **no bid outcome found as of Oct-2026** [V-snip]. Torrent's Agra franchise sits inside DVVNL [K]. FLAG for the writer: status unverified.
- **Electricity (Amendment) Bill 2025:** draft (Nov-2025) — multiple licensees sharing networks with SERC-set charges, cost-reflective tariffs, SERCs empowered to act suo motu; Jan-2026 minister said Budget session; Feb-2026 government "revising after pushback"; **no evidence it has been introduced or passed** [V-snip]. Tata: "well-positioned … via PPP and parallel licensing models" [V PR].
- **RDSS (Jul-2021):** outlay ₹3.03 lakh Cr (GBS ~₹97,631 Cr), targets AT&C 12–15% and ACS-ARR gap zero by FY25 [K]; ₹2.83 lakh Cr sanctioned incl. smart meters [V-sib].
- **LPS Rules (3-Jun-2022):** legacy dues ₹1,39,947 Cr → ₹3,330 Cr (27-Mar-2026); current dues ₹13,594 Cr; total ₹16,894 Cr [V-sib]. Discom payment cycle 178 days (FY21) → 113 days (FY25) [V-sib].
- **National discom finances:** AT&C 22.62% (FY14) → 16.12% (FY24, PFC) → **15.04% (FY25, MoP)** [V-sib; V-snip]; ACS-ARR gap ₹0.69/kWh (FY21) → ₹0.22 (FY22) → ₹0.45 (FY23) → **₹0.21 (FY24, provisional)** [V-snip]; state discoms' book loss ₹57,200 Cr (FY23) → ₹25,600 Cr (FY24) → ₹9,400 Cr (FY25, ICRA); MoP all-utility measure shows **₹2,701 Cr profit in FY25** vs ₹67,962 Cr loss in FY14 [V-sib].

### 7.4 Generation-side rules that hit members

- **Section 11 for imported-coal plants:** Mundra directed to run from 1-Apr-2026 (order 22-Mar-2026), extended to 30-Sep (letter 19-Jun) and **31-Dec-2026** (order 25-Sep) [V]; tariff on a benchmark covering coal, shipping, O&M and margin reviewed fortnightly [V-snip]. Sibling: Section 11 also applied to **112 captive plants for Oct–Dec 2026** [V-sib].
- **Exchange price cap ₹10/kWh** (DAM/RTM) [V-sib]; market coupling order (Jul-2025) under appeal [V-sib].
- **ALMM List-II (cells) from 1-Jun-2026**; BCD 40%/25% [V-sib; V Tata deck note].
- **Gas:** no long-term PPA for DGEN; government schemes for stranded gas (e-bid RLNG with PSDF support, 2015–17) are history [K]; in 2026 the issue was supply (Qatar FM), not demand.
- **Transmission:** NEP transmission capex **₹9.2 tn FY25–32** [V Tata deck citing NEP/CEA]; TBCB awards via RECPDCL/PFCCL.

---

## 8. History and cycles (narrative; full timeline in §G)

- **1890s–1990s: the city licensees.** Calcutta Electric Supply Corporation (1897; first supply 17-Apr-1899), Ahmedabad Electricity Co. (1913) and Surat Electricity Co. (1920s) [K], and the Tata hydro companies for Bombay (1910s) were the private exceptions in a state-electricity-board system. RPG took CESC in 1989; Torrent took AEC (1996–97) and SEC [K; primer].
- **2002–2010: first privatisation wave.** Delhi (NDPL → TPDDL, BSES ×2, 2002); Bhiwandi input-franchise (Torrent, 2007), Agra (Torrent, 2010); UMPPs awarded (Tata Mundra 2006–07 at a largely fixed tariff) [K].
- **2011–2018: the imported-coal and gas shocks.** Indonesia's 2011 coal-pricing rule broke Mundra's economics (Tata carried Mundra losses for a decade); domestic gas from KG-D6 collapsed, stranding Torrent's DGEN (COD Nov-2014) [K; V deck]. Compensatory tariff litigation ended with the SC refusing relief (2017) [K]. CESC's 2017–18 demerger cleaned up its structure [primer].
- **2019–2022: reform, Covid, coal crisis.** Odisha discoms to Tata (2020–21); UDAY's failure led to RDSS (2021) and LPS Rules (2022); Oct-2021 coal crisis (stocks ~4 days, IEX ₹20 blocks); FY23 IEX ~₹5.9 and Section 11 for imported-coal plants (2022) gave gas/merchant windfalls (Torrent FY23 revenue +80%) [V-sib; K].
- **2023–2025: the renewables pivot and capital raising.** TPREL equity from BlackRock/Mubadala (2022–23); TP Solar 4.3 GW plant (2024); Torrent ₹3,500 Cr QIP (FY25, ~Oct-2024; promoter 53.56% → 51.09%) [V screener; K date]; Chandigarh to RPSG (Feb-2025); Mundra shut from Jul-2025 for ~9 months [primer]; FY26 demand growth only 0.8% and IEX fell to ₹3.8 [V-sib].
- **2026: the West Asia shock and the tight summer.** War from 28-Feb; LNG force majeure; Mundra back under Section 11 from 1-Apr; record 270.8 GW peak (21-May); Nabha to Torrent (25-Jun); ReNew 1.4 GWp to CESC (Aug); IEX ₹7.3 in Sep; RBI hikes to 5.50% (7-Oct) [V; V-sib].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands

| KPI | Definition / formula | Tata Power | Torrent | CESC |
|---|---|---|---|---|
| **Regulated equity (₹ Cr)** | Equity portion of approved regulated asset base (typically 30% of approved capex) | **₹15,178 Cr** Jun-26 (100% basis; +10.8% YoY): gen ₹4,869 / transmission ₹3,114 / distribution ₹7,195 [V deck] | n/d (not in deck) — FLAG | n/d — FLAG |
| **Allowed ROE** | Post-tax return on regulated equity | 15.5% (CERC/MERC gen-trans) [V-sib/K]; SERC distribution ~14–16% [K] | ~14–15.5% (CRISIL) [primer] | WBERC n/d [FLAG] |
| **Regulated assets (₹ Cr)** | Unrecovered tariff gap booked as asset | 10,790 (Jun-26) [V] | n/d | 5,257 adjusted (Mar-26) [V CARE] |
| **T&D / AT&C loss** | (input − billed)/input; AT&C adds collection | TPDDL 5.5% Q1 (4.0%); Odisha 26.7% Q1 blended; Mumbai <1% (chart) [V deck] | Licensed 2.33% FY26 (Ahd 3.35%, Surat 2.77%, DNH&DD <2%); franchises Bhiwandi ~9.1%, Agra ~5.4%, SMK ~23.1% [V deck] | Kolkata 6.11% (norm 8%); NPCL 6.95%; CPDL 8.30%; Rajasthan 11.44%; Malegaon 36.33% [V deck] |
| **Units sold (MU)** | Billed energy | Odisha 8,960 MU Q1 (+10.4%); TPDDL 3,238 MU Q1 (+3.9%) [V deck] | Purchase 9,205 MU Q1 (+3.4%) [V-snip tndindia] | Kolkata 3,610 MU Q1 (+4.9%); NPCL 1,169 (+10%); CPDL 435 (+16%) [V deck] |
| **Customers** | Connections | 13.2 mn | ~4.2 mn [primer] | >4.9 mn |
| **PLF / availability** | Gen ÷ (capacity × hours) | Availability 96.2%; Maithon PLF 81% | AMGEN 91.1%; SUGEN 43.4% | Haldia 98.4%; BBGS 87.3% (Q1) |
| **RE CUF** | Annual MWh ÷ (MW × 8,760) | Solar 24.3%, wind 24.9% (Q1) | Solar 25.9% (DC-contracted), wind 33.3% | Purvah n/d |
| **Net debt / EBITDA** | Company basis | 3.34× FY26 / 3.41× Q1 | 2.06× FY26 | 4.7× FY26 (CARE, EBITDA ex-reg. income) |
| **Capex (₹ Cr)** | | FY26 ~13,000; FY27 guide 25,000; Q1 5,375 [V-snip/V] | FY26 8,720; FY27 RE ~10,000 [V-snip] | Purvah ~16,500 by FY29 + 4,859 acq. + ~3,000 cells [V CARE] |

### 9.2 The licensee profit equation in practice

- **Regulated PAT ≈ regulated equity × allowed ROE.** Tata's ₹15,178 Cr × ~15% ≈ **₹2,280 Cr** "base" regulated PAT at 100% [E]. FY26 T&D cluster PAT ₹2,978 Cr [primer] + Mumbai gen/Maithon/Jojobera/IEL (part of thermal cluster) shows that **efficiency gains, incentives and non-regulated income (e.g., Odisha arrears collection, TBCB annuities) add ~30–50% on top of the ROE base** [E].
- **Efficiency gain arithmetic (CESC Kolkata):** normative loss 8% vs actual 6.11% on ~12,000 MU input-equivalent → ~1.9% × ~12,800 MU input ≈ 240 MU saved; at an average power cost of ~₹5/unit ≈ **₹120 Cr/yr** of incentive-type gain (sharing rules vary) [E]. When WBERC's norm was 14.3% (pre-FY24), the same efficiency was worth ~4× more — part of why CESC's standalone profit growth has slowed [E; V CARE norms].
- **Odisha AT&C sensitivity:** Q1 FY27 Odisha input 10,752 MU, revenue ₹5,530 Cr → ~₹5.14 per input unit [E]. Each 1 pp AT&C cut on ~43,000 MU annual input × ~₹5.9 avg revenue/unit ≈ **₹250 Cr/yr** of revenue, most of which drops to EBITDA unless the regulator claws it back via targets [E].

---

## 10. Global lens

| Company (country) | Model | Approx. P/E | Approx. EV/EBITDA | Note |
|---|---|---|---|---|
| NextEra Energy (US) | Regulated FPL + largest RE developer | ~20–23× | ~14–16× | Closest analogue to "regulated + RE build" [K, 2024–25 ranges] |
| Duke / Southern (US) | Vertically integrated regulated | ~17–20× | ~11–13× | ROE ~9.5–10.5% allowed [K] |
| Iberdrola (Spain) | Networks + renewables | ~16–19× | ~10–11× | Networks ~50% of EBITDA [K] |
| Enel (Italy) | Networks + RE + retail | ~10–12× | ~6.5–7.5× | Large distribution in Italy/LatAm [K] |
| National Grid (UK) | Pure networks | ~14–16× | ~11–12× | Allowed real ROE ~6% (RIIO) [K] |
| CLP Holdings (HK) | Integrated HK monopoly + India (Apraava) | ~14–17× | ~10× | Apraava Energy (CLP India/CDPQ) is an unlisted Indian peer [K] |
| Tenaga Nasional (Malaysia) | Integrated state utility | ~15–18× | ~8–9× | [K] |
| **Tata Power** | Integrated + RE + manufacturing | **28.9×** | **~10.5× (co. EBITDA, ex minorities)** | [V screener; E] |
| **Torrent Power** | Licensee-led integrated | **26.1×** | **~12.4×** | [V screener; E] |
| **CESC** | Licensee-led integrated, coal-heavy | **11.1×** | **~7.1×** | [V screener; E] |

- **All global multiples are [K]/approximate ranges from 2024–25 memory — not re-fetched; spot-check before printing.**
- Indian allowed ROEs (14–16% post-tax, nominal) are much higher than US (9.5–10.5%) or UK (~6% real), which is the structural reason Indian regulated utilities can trade above global P/Es on similar EV/EBITDA [E].
- Scale: Tata Power's FY26 revenue ≈ **US$6.6 bn**, Torrent ≈ US$3.1 bn, CESC ≈ US$2.0 bn at ₹94.9 [E]; NextEra ~US$25 bn, Iberdrola ~€45 bn [K].

---

## 11. Technology and disruption risks

1. **Rooftop + batteries + open access erode the best customers.** C&I consumers migrating to green open access (GEOA Rules 2022, 100 kW threshold [K]) remove high-tariff, cross-subsidising load. Mitigant: cross-subsidy and additional surcharges; Tata sells rooftop itself.
2. **Smart metering (RDSS):** prepaid smart meters improve collection (TPCODL ~9.3 lakh installed) [V deck] but cost money and face consumer pushback.
3. **Storage changes the value of gas plants.** Battery tariffs halved in 18 months (₹3.72 → ₹1.775 lakh/MW/month) [V-sib]; PSP and BESS compete with DGEN-type peakers. Torrent's answer is to own the PSP (Raigad).
4. **Solar manufacturing overcapacity:** ~193 GW modules vs ~30 GW cells (Apr-2026) [V-sib] → module margins compress; cell (and wafer) margins hold while ALMM-II binds. TP Solar Q1 FY27 EBITDA margin 25% [V deck] is a peak-like number.
5. **Parallel licensing** (Amendment Bill) would let competitors use incumbents' wires — threat to Mumbai/Ahmedabad/Kolkata monopolies, opportunity in state areas.
6. **Coal phase-down vs firm power:** new coal (Anuppur at ₹5.829/kWh; Nabha) is being bought/built by Torrent while Tata says "no new coal" [V deck; primer] — two opposite bets.

---

## 12. What to watch

| Item | Date / frequency | Why |
|---|---|---|
| Tata Power Q2 FY27 results | **11-Nov-2026** [V screener] | Mundra under Section 11 for a full quarter; TP Solar (1 GW modules/0.9 GW cells in Q2); Odisha AT&C (Q2 seasonally better) |
| Torrent / CESC Q2 FY27 board dates | Not announced (22-Oct) | Torrent: Nabha first full quarter, gas under LNG stress; CESC: ReNew closing |
| Purvah–ReNew closing | Before **31-Oct-2026** [V] | 1.4 GWp operating; ~₹600 Cr revenue/yr; CESC equity ~₹1,600 Cr |
| Mundra Section 11 expiry | **31-Dec-2026** [V] | SPPAs with the four non-Gujarat procurers decide 2027 earnings |
| WBERC true-ups FY23+ and FY27 tariff | Pending [V CARE] | CESC regulated assets ₹5,257 Cr; tariff frozen ~₹7.3 |
| SC/DERC regulatory-asset liquidation | Through Apr-2028 | TPDDL RAs ₹4,940 Cr |
| UP discom privatisation (PuVVNL/DVVNL) | Unresolved | Largest privatisation opportunity; Tata 40 mn-customer goal |
| Electricity (Amendment) Bill | Winter session? | Parallel licences, cost-reflective tariffs |
| Odisha OERC FY28 tariff/targets | ~Mar-2027 | AT&C targets vs actuals |
| IEX DAM monthly | Monthly | Sep-2026 ₹7.3; merchant upside (Haldia, Dhariwal, DGEN) vs CESC's purchase cost |
| LNG (JKM) / Qatar FM | Nov-2026 FM horizon | Torrent gas fleet economics |
| ALMM-II enforcement, cell prices | Ongoing | TP Solar margins; CESC's 2027 cell plant |
| Torrent Raigad PSP | SCOD Oct-2028 | ₹1,680 Cr/yr revenue |
| Tata Bhivpuri PSP / Bhutan Khorlochhu | FY28+ | Storage and cross-border hydro |

---

## A. The forces that define this sub-sector (what an expert leads with)

1. **Regulated equity × allowed ROE × efficiency is the compounding engine.** Tata's regulated equity grew ~11% YoY to ₹15,178 Cr [V]; Torrent's licensed areas grow with Gujarat's industrial load; CESC's Kolkata base is mature. Profit compounds with capex the regulator approves; returns above the allowed ROE come from beating loss and availability norms.
2. **The regulator's calendar is the risk.** Tariff freezes (WBERC: no hike for years, true-ups four years late), regulatory-asset build (CESC ₹5,257 Cr, TPDDL ₹4,940 Cr) and court-ordered liquidation timetables decide cash conversion — which is why CESC trades at 1.4× book and Torrent (timely GERC) at 3.2×.
3. **Distribution privatisation is the only big volume lever, and it is political.** Odisha and the UTs proved the model; UP is stuck; the Amendment Bill is stalled. Tata's 40 mn-customer FY30 target makes it the most exposed to (and most dependent on) this force.
4. **Fuel shocks flow through generation, not distribution.** Mundra (imported coal) and DGEN/SUGEN (LNG) carry the West Asia shock; Section 11 and SPPAs now pass imported-coal costs through, but LNG has no such shield.
5. **The capex cycle has shifted to renewables, storage and manufacturing — and leverage is rising.** Combined company net debt ≈ ₹84,000 Cr (3.2× EBITDA); Tata ₹25,000 Cr FY27 capex; Torrent ~₹80,000 Cr five-year plan [V-snip]; Purvah needs external equity [V CARE].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The Odisha experiment": five years of private discoms in a poor state
- Data: four discoms, 51:49; Q1 FY27 purchase 10,752 MU, sales 8,960 MU; AT&C 31/32/26/17% vs targets 16/22/15/13%; revenue/unit ₹5.6–6.4 vs power cost ₹2.1–4.0; EBITDA ₹651 Cr, PAT ₹111 Cr; regulated equity ₹3,679 Cr (sum of four, +19% YoY from ₹3,099 Cr); RAs ₹2,606 Cr; >1 crore registered customers; ~9.3 lakh smart meters at TPCODL; FY26 PAT ₹809 Cr (+84%, primer — likely includes arrear collections/one-offs) [V deck; primer].
- Questions: why does Q1 AT&C exceed targets by 10+ pp? How much of FY26 PAT was arrear recovery? Will OERC disallow?

### B2. "Three moats of 2–6%": what Torrent, CESC and Tata Mumbai/Delhi teach about efficient distribution
- Torrent 2.33% (Ahd 3.35%, Surat 2.77%), CESC Kolkata 6.11% vs norm 8%, NPCL 6.95%, TPDDL ~5%; franchise turnarounds Agra 58.77% → ~5.4%, Bhiwandi 58% → ~9.1%, SMK 48% → ~23.1%, CESC Malegaon 40.7% → 35.9% (Q1) — the model works where enforcement is backed by the state and fails where it is not [V decks].

### B3. "The fuel shock that skipped the wires": Mundra, DGEN and the West Asia war
- Mundra 4,150 MW: shut ~9 months (Jul-2025 → Mar-2026), restarted 1-Apr-2026 under Section 11, 94% availability Q1 FY27, directions to 31-Dec-2026; Mundra/coal/shipping Q1 EBITDA ₹473 Cr (₹511 Cr), PAT ₹225 Cr (₹147 Cr) [V deck]. Tata's 30% KPC + 26% BSSR + 26% AGM coal-mine stakes are a natural hedge (KPC ~12.5–12.9 Mt/quarter) [V deck].
- Torrent's 2,730 MW gas: SUGEN 43.4% PLF, DGEN no PPA; Q1 FY27 PAT −11% partly on LNG disruption [V deck; V-snip].

### B4. "Making the panels": Tata's TP Solar and CESC's late entry
- TP Solar: 4.3 GW cell & module; Q1 FY27 revenue ₹2,462 Cr (+53%), EBITDA ₹626 Cr (25%), PAT ₹371 Cr; >63% modules and >50% cells sold externally; Q2 output 1 GW/0.9 GW; 10 GW ingot/wafer planned (Gopalpur, 128 acres MoU) [V PR/deck/screener].
- CESC: RPSG Solvanta 1.1 GW modules (Oct-2025), 3 GW TOPCon+ cells at Greater Noida/Jewar (~₹3,000 Cr; 2027) [V CARE/deck]. ALMM-II from 1-Jun-2026 [V-sib].

## C. The REVENUE / PROFIT EQUATION

**Licensee:** PAT ≈ Regulated equity × allowed ROE + (normative loss − actual loss) × input units × power cost × sharing ratio + (actual availability − normative) gains − disallowances + other income on regulatory/cash balances.
**Franchisee:** EBITDA ≈ input units × [(1 − actual AT&C) × avg realisation − input rate] − O&M.
**Regulated generator:** Capacity charge = (ROE × equity + interest + depreciation + O&M + working-capital interest) × (actual PAF ÷ normative PAF, capped) + energy charge (pass-through).
**RE IPP:** Revenue = MW × 8,760 × CUF × (1 − curtailment) × tariff.

### C.1 Worked example 1 — a 3,000 MW-peak urban licensee (Torrent Ahmedabad-type) [E composite]
- Input ~12,000 MU/yr; actual loss 3.4% → billed 11,592 MU; average tariff ₹8.0/unit → revenue ≈ ₹9,270 Cr.
- Regulated equity assume ₹3,000 Cr × 15% ROE = ₹450 Cr; normative loss assume 5% → efficiency 1.6% × 12,000 MU × ₹5.5 power cost ≈ ₹106 Cr (if 100% retained; typically shared) → PAT ≈ ₹500–550 Cr (5.5–6% of revenue).
- Every +10% of approved network capex (₹1,000 Cr at 30% equity) adds ₹300 Cr equity × 15% = **₹45 Cr PAT**.

### C.2 Worked example 2 — CESC Kolkata FY26 (actual + derived)
- Sales 11,990 MU (incl. export/banking); standalone revenue from operations ₹9,732 Cr; regulatory income ₹535 Cr; EBITDA ₹2,673 Cr; finance ₹870 Cr; D&A ₹678 Cr; PBT ₹1,125 Cr; PAT ₹852 Cr [V deck].
- Per unit: revenue ₹8.12/kWh; EBITDA ₹2.23/kWh; PAT ₹0.71/kWh [E]. Of EBITDA, ₹535 Cr (20%) is regulatory income — not yet cash [V deck; E].

### C.3 Worked example 3 — Odisha discom AT&C lever (Tata, Q1 FY27 actual)
- TPCODL: input 3,870 MU; sales 3,165 MU (T&D-ish loss 18%); AT&C 31% (collection drag); revenue ₹1,873 Cr; EBITDA ₹153 Cr; PAT ₹6 Cr [V deck].
- If TPCODL reached its 16% target at the same input and ₹5.6 realisation: billed-and-collected units rise by ~15% of 3,870 = ~580 MU → ~₹325 Cr/quarter extra collections [E] — vastly more than its PAT; this is the size of the option (and of the regulatory penalty if targets are enforced on actuals).

### C.4 Worked example 4 — Mundra under Section 11 [E composite]
- 4,150 MW × 94% availability × 2,190 h/quarter ≈ 8,540 MU capacity; actual dispatch lower. Revenue for Mundra, coal & shipping cluster Q1 FY27 ₹2,732 Cr; EBITDA ₹473 Cr; PAT ₹225 Cr [V deck]. Under the benchmark mechanism the plant earns a "fair margin" over fuel rather than the old fixed-tariff loss.

### C.5 Worked example 5 — Purvah's acquired portfolio
- 1,411 MWp (≈1,150 MW AC [E]) × 8,760 × ~25% CUF ≈ 2,520 MU × ~₹2.4 blended tariff ≈ ₹600 Cr revenue (company "~₹600 Cr") [V deck; E]; EV ₹4,859 Cr → **EV/revenue 8.1×; EV ≈ ₹3.4 Cr/MWp** [E]. At ~88% EBITDA margin, EV/EBITDA ≈ 9.2× [E].

### C.6 Worked example 6 — Torrent Raigad PSP
- ₹14,000 Cr capex; 2,000 MW/16,000 MWh tied for 40 years; **₹1,680 Cr annual revenue** [V deck] → revenue/capex 12% (only two-thirds of capacity contracted) → ~₹7,000/MW/month on contracted MW [E: 1,680 Cr ÷ 2,000 MW ÷ 12].

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| Combined FY26 revenue | **₹1,09,965 Cr** | Sum of screener [V; E] |
| Combined FY26 reported PAT | **₹9,205 Cr** (attrib. ~₹7,706 Cr) | [V; E] |
| Combined m-cap (22-Oct-2026) | **₹1,91,252 Cr** | [V screener] |
| Distribution customers served | **~22 mn** (Tata 13.2 mn + CESC 4.9 mn + Torrent ~4.2 mn) | [V decks; primer] |
| Licensed-area loss, best in class | **2.33%** Torrent (vs national AT&C 15.04%) | [V deck; V-sib] |
| Tata Power regulated equity | **₹15,178 Cr** (Jun-2026) | [V deck] |

## E. Chart-ready datasets

1. **Revenue FY22–FY26 (₹ Cr, screener):** Tata 42,816 / 55,109 / 61,449 / 65,478 / 62,429; Torrent 14,258 / 25,694 / 27,183 / 29,165 / 28,966; CESC 12,544 / 14,246 / 15,293 / 17,001 / 18,570 [V].
2. **Operating profit FY22–FY26 (₹ Cr, screener):** Tata 7,031 / 7,728 / 10,735 / 12,450 / 13,271; Torrent 3,615 / 4,789 / 4,596 / 5,322 / 5,577; CESC 3,035 / 2,274 / 2,276 / 2,849 / 3,624 [V].
3. **Reported PAT FY22–FY26 (₹ Cr):** Tata 2,156 / 3,810 / 4,280 / 4,775 / 5,118; Torrent 459 / 2,165 / 1,896 / 3,059 / 2,469; CESC 1,404 / 1,397 / 1,447 / 1,429 / 1,618 [V].
4. **Tata Power regulated equity by licence, Jun-2026 (₹ Cr):** Mumbai gen 1,740; Jojobera 674; Maithon 1,663; IEL 792; Mumbai transmission 2,646; Powerlinks 468; Mumbai distribution 1,292; TPDDL 2,224; TPCODL 1,025; TPSODL 791; TPWODL 1,011; TPNODL 852; total 15,178 (Q1 FY26: 13,697) [V].
5. **Tata Power regulatory assets, Jun-2026 (₹ Cr):** Mumbai gen 1,368; Jojobera 52; Maithon −186; Mumbai trans 1,533; Mumbai dist 476; TPDDL 4,940; TPCODL 318; TPSODL 1,652; TPWODL −26; TPNODL 662; total 10,790 (Q1 FY26 9,009) [V].
6. **Distribution loss by licence, FY26 (%):** Torrent DNH&DD <2, Surat 2.77, Ahmedabad 3.35, (licensed blended 2.33); Agra ~5.4; Bhiwandi ~9.1; SMK ~23.1; CESC Kolkata 6.11, NPCL 6.95, CPDL 8.30, Bharatpur 9.24, Bikaner 10.88, Kota 12.38, Malegaon 36.33; India AT&C FY25 15.04 [V decks; V-sib].
7. **Odisha discoms Q1 FY27 AT&C actual vs target (%):** TPCODL 31 vs 16; TPSODL 32 vs 22; TPWODL 26 vs 15; TPNODL 17 vs 13 [V].
8. **Peak demand (GW):** FY15 148.2; FY19 177.0; FY22 203.0; FY23 215.9; FY24 243.3; FY25 249.9; 21-May-2026 270.8; FY32 388 (cited); FY36 459 (CEA) [V-sib; V-snip].
9. **IEX DAM average (₹/kWh):** FY20 ~3.1; FY21 ~2.8; FY22 ~4.5; FY23 ~5.9; FY24 5.2; FY25 4.4; FY26 3.8; Apr–Jul 2026 5.1; Jul–Sep 2026 5.7; Sep-2026 7.3 [V-sib].
10. **Installed generation capacity (MW, latest):** Tata ~16,700 (thermal 8,800, RE 6,700, hydro ~900, WHR ~400); Torrent 6,564 (gas 2,730, coal 1,762, solar 1,092 MWp, wind 980); CESC ~2,600 (thermal 2,143, solar 18 + Purvah ~435 MWp) [V; E].
11. **CESC FY26 EBITDA by entity (₹ Cr):** Kolkata 2,673; Haldia 825; Dhariwal 797; NPCL 442; Crescent 116; CPDL 61; Kota 51; Bikaner 48; Bharatpur 19; Malegaon −112 [V].
12. **Torrent FY26 segment EBITDA (₹ Cr):** T&D 3,793; generation 1,320; RE 1,012; unallocated 261 (total 6,125) [V].
13. **Net debt / EBITDA (company basis):** Tata FY22 3.92, FY23 2.66, FY24 2.75, FY25 2.93, FY26 3.34, Q1 FY27 3.41 [V deck; chart-parse — year mapping approximate]; Torrent FY26 2.06; CESC FY25 5.2, FY26 4.7 (CARE) [V].
14. **Tata Power Q1 FY27 cluster EBITDA (₹ Cr):** thermal/coal/hydro 1,027; renewables 1,696; T&D 1,541 (sum 4,264 before eliminations; reported 4,249) [V].

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Good | Average | Weak | Members |
|---|---|---|---|---|
| Licensed-area T&D loss | <5% | 5–10% | >10% | Torrent 2.33 (good); CESC Kolkata 6.11, NPCL 6.95 (avg); TPDDL ~5 (good/avg) |
| AT&C loss (state-type area) | <12% | 12–18% | >18% | Odisha 17–32% Q1 (weak) |
| Loss vs regulatory norm | ≥2 pp better | 0–2 pp | worse | CESC 1.9 pp better (norm 8%); Odisha 4–16 pp worse (Q1) |
| Collection efficiency | >99% | 97–99% | <97% | National 96.51% FY24 [V-snip] |
| Regulated equity growth | >10%/yr | 5–10% | <5% | Tata +10.8% YoY (good) |
| Regulatory assets ÷ annual revenue | <5% | 5–15% | >15% | CESC 28% of consol. revenue (weak); Tata 17% (weak-avg) [E] |
| Thermal PLF / PAF | >85% | 70–85% | <70% | Haldia 98%, AMGEN 91% (good); SUGEN 43% (weak) |
| Solar CUF (AC) | >25% | 21–25% | <21% | Tata 24.3% (avg) |
| Net debt / EBITDA | <3× | 3–4.5× | >4.5× | Torrent 2.06 (good); Tata 3.34 (avg); CESC 4.7 (weak) |
| ROE (consolidated) | >15% | 11–15% | <11% | Torrent 12.5, CESC 12.0, Tata 10.2 [V screener] |
| Dividend payout | 40–60% | 20–40% | <20% | CESC 52%, Torrent 42%, Tata 21% (FY26) [V screener] |
| Franchise EBITDA margin | >6% | 2–6% | <2% | Bharatpur 7.5, Bikaner 6.2, Kota 5.0, Malegaon −14 |

## G. Timeline (year: event)

- 1897: Calcutta Electric Supply Corporation formed; 17-Apr-1899 first supply [primer].
- 1910s: Tata hydro companies electrify Bombay (Khopoli 1915) [K].
- 1913: Ahmedabad Electricity Co. founded [K].
- 1989: RPG (Goenka) acquires control of CESC [primer].
- 1996–97: Torrent acquires control of AEC and SEC [K/primer — check framing].
- 2002: Delhi distribution privatised; NDPL (now Tata Power-DDL) 51:49 with Delhi govt [K].
- 2006: Torrent Power Ltd formed by merging AEC, SEC and Torrent Power Generation; Tata wins Mundra UMPP [primer; K].
- 2007: Bhiwandi — India's first input-based distribution franchise (Torrent) [V deck; K date].
- 2009–10: SUGEN commissioned (Aug-2009); Agra franchise to Torrent (2010) [V deck; primer].
- 2011: Indonesian coal-pricing regulation breaks Mundra's economics [K].
- 2014: DGEN 1,200 MW commissioned (Nov-2014) without gas/PPA; Nabha (2×700 MW) commissioned [V deck].
- 2015: CESC wins Sarisatolli coal mine at negative bid ₹470/t (Feb-2015) [V CARE].
- 2016–17: CESC Rajasthan franchises (Kota, Bharatpur, Bikaner) [V CARE: awarded FY15–16].
- 2017–18: CESC demerger leaves a pure power utility [primer].
- 2020: SMK franchise to Torrent (Mar-2020) [K]; CESC Malegaon franchise (FY20) [V CARE]; TPCODL takes over (1-Jun-2020); Chandigarh bid won by RPSG's Eminent (Nov-2020) [K].
- 2021: TPSODL, TPWODL (1-Jan-2021), TPNODL (1-Apr-2021); RDSS launched (Jul-2021) [K].
- 2022: DNH&DD to Torrent (1-Apr-2022) [V deck]; LPS Rules (3-Jun-2022) [V-sib]; BlackRock/Mubadala invest in TPREL [K].
- 2024: FPPAS at CESC (Jun-2024 ₹0.50; Nov-2024 ₹0.62) [V CARE]; Torrent ₹3,500 Cr QIP (~Oct-2024) [K; V screener promoter change]; CERC 2024–29 regulations (15.5% ROE); peak 250 GW (30-May) [V-sib].
- 2025: UP tender for PuVVNL/DVVNL privatisation (12-Jan) [V-snip]; Chandigarh takeover by CPDL (1-Feb) [K]; MERC MYT order (28-Mar) [V-snip]; Mundra shut from Jul-2025 [primer]; SC regulatory-assets judgment (6-Aug) [V-snip]; RPSG Solvanta 1.1 GW modules (Oct) [V CARE]; draft Electricity (Amendment) Bill (Nov) [V-snip].
- 2026: West Asia war (28-Feb); GAIL Qatar LNG cut to zero (4-Mar); Mundra Section 11 (order 22-Mar; run from 1-Apr); ALMM-II (1-Jun); peak 270.8 GW (21-May); Nabha to Torrent (25-Jun); WBERC FY22 true-up (Jun); Tata Q1 (27-Jul), Torrent Q1 (3-Aug), CESC Q1 (13-Aug); Purvah–ReNew SPA (Aug); CARE upgrades CESC outlook to Stable (12-Aug); IEX ₹7.3 (Sep); Mundra Section 11 to 31-Dec (25-Sep); RBI repo 5.50% (7-Oct); Tata Q2 results (11-Nov, scheduled).

## H. Figures I could not source well (and conflicts)

- **Regulated equity for Torrent and CESC** — not disclosed in the decks fetched. FLAG.
- **Allowed distribution ROE by SERC** (GERC, WBERC, OERC, DERC, MERC 2025–30) — not fetched; only CERC 15.5% [V-sib] and CRISIL's 14–15.5% for Torrent [primer].
- **Tata Power FY26 attributable PAT** — derived from EPS (₹3,748 Cr) [E]; the deck's "₹5,212 Cr" FY26 PAT basis is unclear.
- **Torrent customers (~4.2 mn)** — primer only; deck gives licensed counts (>21 lakh + >6 lakh + >1.7 lakh + 146) but not franchise counts.
- **Tata Power Mumbai distribution customers, units; Odisha FY26 AT&C (annual)** — not fetched; Q1 only.
- **Odisha FY26 PAT ₹809 Cr (+84%)** — primer only; Q1 FY27 run-rate (₹111 Cr) suggests FY26 included arrears/one-offs. FLAG.
- **Torrent ND/E: 0.56× (deck) vs 0.67× (primer)** — prefer deck. Torrent FY26 capex ₹8,720 Cr vs ~₹9,350 Cr (two secondary sources) [V-snip].
- **Torrent Q1 FY27 attributable PAT ₹638.85 Cr vs reported ₹661.85 Cr** — two bases [V-snip]; EPS-based ₹639 Cr [E].
- **CESC customers:** 37 lakh Kolkata (company) vs 3.4 mn (CARE) vs 3.6 mn (primer).
- **CESC Tamil Nadu solar:** 18 MW (company) vs 15 MW (CARE).
- **CESC stock −28% in a year** — cause not established by any source fetched (Univest May-2026 cites "earnings headwinds, sector pressures, macro" only) [V-snip].
- **UP privatisation status 2026; Electricity (Amendment) Bill status** — no primary confirmation.
- **SC 3%-of-ARR cap on regulatory assets** — commentary only.
- **Global utility multiples** — memory ranges [K].
- **Tata Power ND/EBITDA year mapping (FY19–FY22)** — parsed from a chart; approximate.
- **Torrent "Government" 8.35% holding** — unexplained.
- **NPCL ownership split (CESC ~72.7%)** — memory [K].
- **Mundra procurer list / SPPA status beyond GUVNL** — company says "discussions with other States are underway" [V PR]; individual states unverified.
- **National private distribution share (~10–12%)** — composite estimate.

---

# PART 2 — COMPANY FACT PACKS (3 members)

Basis for all standardised numbers: screener.in consolidated pages fetched **22-Oct-2026, ~15:03 UTC** (prices = 22-Oct close). Company figures from Q1 FY27 decks/press releases (Tata 27-Jul, Torrent 3-Aug, CESC 13-Aug-2026) and CARE (CESC, 12-Aug-2026).

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 22-Oct-26)

| Company | NSE | Year | Revenue | YoY % | OP (screener) | OPM % | Co. EBITDA | PAT (reported) | PAT attrib. [E] | ROCE % | ROE % | Net debt (company) | M-cap | P/E | P/B | EV/EBITDA (co.) | Distribution customers | Best licensed loss | Regulated equity |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Tata Power | TATAPOWER | FY26 | 62,429 | −4.7 | 13,271 | 21.3 | 16,090 | 5,118 | ~3,748 | 10.5 | 10.2 | 56,122 (Mar-26); 61,238 (Jun-26) | 1,13,277 | 28.9 | 2.85 | ~10.5× | 13.2 mn | TPDDL ~5% AT&C; Mumbai <1% | ₹15,178 Cr |
| Torrent Power | TORNTPOWER | FY26 | 28,966 | −0.7 | 5,577 | 19.3 | 5,864 | 2,469 | ~2,417 | 13.7 | 12.5 | ~12,080 [E: 2.06× EBITDA] | 60,752 | 26.1 | 3.18 | ~12.4× | ~4.2 mn | 2.33% licensed | n/d |
| CESC | CESC | FY26 | 18,570 | +9.2 | 3,624 | 19.5 | 4,707 (incl. ₹903 reg. income) | 1,618 | ~1,542 | 10.9 | 12.0 | ~16,144 [E: 21,671 − 5,527 cash] | 17,223 | 11.1 | 1.38 | ~7.1× | >4.9 mn | 6.11% Kolkata | n/d |

- EV = m-cap + company net debt; **minority interests are not added** (material for Tata: 49% of TPDDL and Odisha, 26% Maithon, 11.43% TPREL). Adding even ₹10,000 Cr of minorities would lift Tata's EV/EBITDA to ~11.1× [E].
- EV/EBITDA on screener OP: Tata 12.8×, Torrent 13.1×, CESC 9.2× [E].
- P/E is screener's (price ÷ TTM attributable EPS). P/B = price ÷ screener book value (Tata ₹124, Torrent ₹379, CESC ₹94.5).
- Dividend yield: Tata 0.71%, Torrent 1.66%, CESC 4.62% [V screener].

---

## 2.1 The Tata Power Company (TATAPOWER · 500400) — India's largest private integrated utility: 13.2 mn customers, 16.7 GW, 4.3 GW cell & module, Mundra

**Standardised record [V screener 22-Oct-26]**
- Price ₹354; m-cap **₹1,13,277 Cr**; 52-wk ₹465/₹334; P/E 28.9×; BV ₹124 (P/B 2.85×); dividend yield 0.71%; ROCE 10.5%; ROE 10.2%; face value ₹1; ~319.5 Cr shares.
- P&L (₹ Cr) FY22 / FY23 / FY24 / FY25 / FY26 / TTM: Sales 42,816 / 55,109 / 61,449 / 65,478 / 62,429 / 63,445; OP 7,031 / 7,728 / 10,735 / 12,450 / 13,271 / 12,816; OPM 16 / 14 / 17 / 19 / 21 / 20%; other income 2,486 / 5,540 / 3,416 / 2,689 / 3,433 / 4,318; interest 3,859 / 4,372 / 4,633 / 4,702 / 5,257 / 5,384; depreciation 3,122 / 3,439 / 3,786 / 4,117 / 4,811 / 4,910; PBT 2,535 / 5,457 / 5,732 / 6,320 / 6,636 / 6,840; net profit 2,156 / 3,810 / 4,280 / 4,775 / 5,118 / 5,256; EPS ₹5.45 / 10.44 / 11.57 / 12.43 / 11.73 / 12.10; payout 32 / 19 / 17 / 18 / 21%.
- Quarterly (Jun-25 / Sep-25 / Dec-25 / Mar-26 / Jun-26): sales 18,035 / 15,545 / 13,948 / 14,900 / 19,051; OP 3,565 / 3,302 / 3,055 / 2,599 / 3,860; other income 494 / 859 / 1,056 / 1,773 / 630; net profit 1,262 / 1,245 / 1,194 / 1,416 / 1,401; EPS 3.32 / 2.88 / 2.42 / 3.12 / 3.68.
- Balance sheet (Mar-26): equity ₹320 Cr + reserves ₹39,148 Cr; borrowings **₹76,141 Cr** (Mar-25 ₹62,866 Cr); other liabilities ₹58,956 Cr; fixed assets ₹87,293 Cr; CWIP **₹14,595 Cr**; investments ₹16,575 Cr; total assets ₹1,74,564 Cr.
- Cash flow FY26: CFO ₹5,993 Cr (FY25 ₹12,680 Cr; CFO/OP 54% vs 107%) — working capital/regulatory-asset build and EPC; CFI −₹14,129 Cr; CFF +₹7,783 Cr. Debtor days 26.
- Shareholding (Sep-26): promoter 46.86% (unchanged for 3 years), FII 10.13%, DII 18.48%, public 24.52%; ~39.5 lakh shareholders.

**Company-basis numbers [V Q1 FY27 deck/PR]**
- FY26: revenue (incl. other income) ₹63,681 Cr; EBITDA ₹16,090 Cr; PAT ₹5,212 Cr (deck basis; screener 5,118). FY30 aspiration: revenue ₹1,00,000 Cr (~1.6×), EBITDA ₹30,000 Cr (~2×), PAT ₹10,000 Cr (~2×); capacity >30 GW (clean >20 GW); transmission >10,000 ckm; ~40 mn distribution customers.
- Q1 FY27 (27-Jul-2026): revenue ₹18,898 Cr (+8%); EBITDA ₹4,249 Cr (+8%); reported PAT ₹1,401 Cr (+11%); attributable ₹1,176 Cr; capex record ₹5,375 Cr. "Core" (gen + T&D + RE) revenue +12%, EBITDA +12%, PAT +14%.
- Clusters Q1 FY27 (rev / EBITDA / PAT, ₹ Cr; Q1 FY26 in brackets):
  - Thermal generation, coal & hydro 5,193 / 1,027 / 635 (4,844 / 974 / 502): Maithon (74%) 837 / 218 / 102; traditional gen incl. Mumbai & hydro 1,589 / 296 / 213; IEL PAT 27; PPGCL PAT 39; **Mundra, coal & shipping 2,732 / 473 / 225 (2,780 / 511 / 147)**.
  - Renewables 3,771 / 1,696 / 612 (3,626 / 1,567 / 531): RE gencos 1,289 / 1,136 / 251; solar EPC & rooftop 1,761 / 140 / 97 (2,263 / 272 / 188); **TP Solar 2,462 / 626 / 371 (1,613 / 294 / 96)**; EV 63 / 11 / 0.
  - T&D 11,441 / 1,541 / 492 (10,081 / 1,348 / 443): Mumbai transmission 363 / 295 / 121; Powerlinks PAT 10; Mumbai distribution 1,374 / 129 / 50; **Odisha 5,530 / 651 / 111 (5,164 / 585 / 105)**; **Delhi (TPDDL) 3,052 / 352 / 146 (2,400 / 332 / 134)**.
  - Standalone 5,552 / 1,249 / 277 (5,148 / 1,472 / 520); JV & associates PAT 241 (130); eliminations −2,924 / −291 / −60.
- FY26 segment PAT [primer, company release]: T&D ₹2,978 Cr (+49%); renewables ₹1,994 Cr (+59%) on EBITDA ₹6,228 Cr; TP Solar ₹857 Cr (2×) on revenue ₹6,968 Cr; rooftop ₹499 Cr (+150%); Maithon ₹404 Cr; Odisha ₹809 Cr (+84%).

**Native KPIs**
- **Regulated equity ₹15,178 Cr** (Jun-26; Q4 FY26 ₹15,011 Cr; Q1 FY26 ₹13,697 Cr) — by licence in §E.4 [V].
- **Regulatory assets ₹10,790 Cr** (Jun-26; Q1 FY26 ₹9,009 Cr), TPDDL ₹4,940 Cr, TPSODL ₹1,652 Cr, Mumbai transmission ₹1,533 Cr, Mumbai gen ₹1,368 Cr [V].
- **Distribution:** 13.2 mn customers (Mumbai ~0.77 mn, Delhi ~2.06 mn, Odisha ~9.48 mn, Ajmer ~0.5 mn [primer split]); Odisha >1 crore registered customers [V PR]. TPDDL Q1: purchase 3,425 MU, sales 3,238 MU, AT&C 5.5% (4.0%); regulatory order impact −₹12 Cr. Odisha Q1: purchase 10,752 MU, sales 8,960 MU; AT&C (excl. arrears) TPCODL 31% (28%), TPSODL 32% (31%), TPWODL 26% (22%), TPNODL 17% (17%) vs vesting targets 16/22/15/13% (FY26: 18/27/19/16%); revenue/unit ₹5.6/6.4/5.8/5.9; power cost/unit ₹3.5/2.1/4.0/3.6; ~9.3 lakh smart meters (TPCODL) [V deck].
- **Generation:** ~16.7 GW (8.8 GW thermal; ~7 GW clean & green per deck; 47% clean per primer incl. hydro/WHR); availability 96.2% Q1; Mundra 4,150 MW fully operational from 1-Apr-2026, 94% availability; Maithon PLF 81%. Q2 FY27: TPREL commissioned 419 MW + 131.2 MWh storage (H1 645 MW) [V screener].
- **Renewables:** portfolio 12.0 GW = 6.7 GW operating (5.4 solar, 1.3 wind) + 5.3 GW under construction (Jun-26); utility RE commissioned 226 MW in Q1; solar CUF 24.3% (curtailment), wind 24.9% [V].
- **Pumped storage:** 2.8 GW signed; Bhivpuri 1,000 MW (upper reservoir built; EPC packages awarded; 324 MW tied with SECI for 40 years) [V PR].
- **Transmission:** 5,562 ckm operating + 2,332 ckm under construction = 7,894 ckm incl. Ryapte (Karnataka, 491 ckm, >₹4,000 Cr, LoI from RECPDCL); Jalpura-Khurja 164 ckm due FY27 [V].
- **Manufacturing:** TP Solar 4.3 GW cell & module (deck label) / "4.9 GW integrated" (PR); Q1 FY27 1,001 MW modules + 862 MW cells, yields >96%; Q2 FY27 1 GW + 0.9 GW; >63% of modules and >50% of cells sold externally; EBITDA margin 25% (18%); ALMM-II cell enlistment 4,813 MW [V-sib]; 10 GW ingot/wafer (2×5 GW) with MoU for 128 acres at Gopalpur SEZ [V PR].
- **Rooftop/EV:** rooftop 371 MWp in Q1 (+37%), revenue ₹1,350 Cr, cumulative 5.2 GWp, 4.8 lakh customers, 3,778 channel partners, order book ₹639 Cr; EV 2.4 lakh home chargers, 5,900+ public/semi-public/fleet points, 1,200+ e-bus points, 717 cities [V PR].
- **Coal mines (equity-accounted):** KPC 30%, BSSR 26%, AGM 26%; KPC production ~12.5–12.9 Mt/quarter [V deck] — the KPC stake has NOT been sold as of Jun-2026.
- **Cross-border:** Khorlochhu 600 MW (Bhutan; UPPCL 511 MW 30-yr PPA approved by UPERC; TPTCL is the seller); Dorjilung; MoU for 404 MW Nyera Amari I & II [V PR].
- **Leverage & ratings:** gross debt ₹74,069 Cr (Jun-26) — standalone 23,966, RE gencos 31,734, TP Solar 4,498, Odisha 5,624, coal SPVs+TPIPL 3,197, Maithon 1,476, TPDDL 848, others 2,725; cash ₹12,831 Cr; **net external debt ₹61,238 Cr; net worth ₹49,026 Cr; ND/E 1.25× (FY26 1.18×, FY25 1.05×); ND/underlying EBITDA 3.41× (FY26 3.34×)**. TPREL: net debt ₹33,440 Cr, net worth ₹16,293 Cr. Ratings: **CRISIL / India Ratings / ICRA / CARE AA+/Stable; S&P BBB/Stable; Moody's Ba1/Positive** [V deck]. CRISIL update 2-Sep-2026, ICRA 20-Aug, Fitch 9-Jul, CARE 18-Jun [V screener list].
- **Capex:** FY26 ~₹13,000 Cr (vs ₹20–22k guided); FY27 guidance ₹25,000 Cr (~50% renewables); FY26–30 plan ~₹1.25 lakh Cr (RE 53%, T&D 31%, PSP 11%, other 5%) [V-snip angelone/sahi; primer].
- **ESG:** MSCI A; S&P CSA 77 (68); CDP B; Net Zero 2045 [V PR].

**Story bullets**
1. **The wires carry the group:** T&D EBITDA +14% and regulated equity +11% YoY in Q1 FY27; Odisha has scale (>1 crore customers) but AT&C is still far above vesting targets — the biggest regulatory and earnings swing in the group.
2. **Manufacturing is the surprise profit engine:** TP Solar's Q1 PAT (₹371 Cr) exceeded the whole T&D cluster's Odisha + Delhi PAT (₹257 Cr). It is cyclical (module prices, ALMM) and not regulated.
3. **Mundra flipped from loss to fuel-neutral** under Section 11 + GUVNL SPPA; the risk now is what happens after 31-Dec-2026 if other procurers do not sign SPPAs.
4. **Leverage is rising with capex:** ND/EBITDA 3.4×; CFO halved in FY26 (₹5,993 Cr) while CFI was −₹14,129 Cr. AA+ ratings are intact; the FY30 plan doubles EBITDA only if privatisation adds ~27 mn customers.

**Sources:** Tata Power Q1 FY27 press release (NSE archive VPTPCL_27072026172805_PR.pdf) [V]; Analyst Presentation Q1 FY27 (tatapower.com) [V]; screener.in/company/TATAPOWER/consolidated (22-Oct-26) [V]; freepressjournal Q1 summary [V]; psuconnect (Section 11 to 31-Dec) [V]; angelone/sahi (capex guidance) [V-snip]; primer.

---

## 2.2 Torrent Power (TORNTPOWER · 532779) — the low-loss licensee of Ahmedabad and Surat, now building RE, PSP and coal

**Standardised record [V screener 22-Oct-26]**
- Price ₹1,204; m-cap **₹60,752 Cr**; 52-wk ₹1,824/₹1,165; P/E 26.1×; BV ₹379 (P/B 3.18×); dividend yield 1.66%; ROCE 13.7%; ROE 12.5%; face value ₹10; ~50.4 Cr shares.
- P&L (₹ Cr) FY22 / FY23 / FY24 / FY25 / FY26 / TTM: Sales 14,258 / 25,694 / 27,183 / 29,165 / 28,966 / 29,184; OP 3,615 / 4,789 / 4,596 / 5,322 / 5,577 / 5,596; OPM 25 / 19 / 17 / 18 / 19 / 19%; other income −1,089 / 352 / 307 / 473 / 287 / 299; interest 628 / 818 / 943 / 1,045 / 934 / 1,015; depreciation 1,334 / 1,281 / 1,378 / 1,497 / 1,613 / 1,623; PBT 564 / 3,041 / 2,583 / 3,253 / 3,317 / 3,257; net profit 459 / 2,165 / 1,896 / 3,059 / 2,469 / 2,390; EPS ₹9.45 / 44.06 / 38.14 / 59.31 / 47.95 / 46.11; payout 95 / 59 / 42 / 32 / 42%.
- Quarterly (Jun-25 / Sep-25 / Dec-25 / Mar-26 / Jun-26): sales 7,906 / 7,876 / 6,778 / 6,406 / 8,124; OP 1,483 / 1,506 / 1,403 / 1,149 / 1,538; net profit 742 / 742 / 655 / 331 / 662; EPS 14.52 / 14.36 / 12.76 / 6.31 / 12.68.
- Balance sheet (Mar-26): equity ₹504 Cr + reserves ₹18,571 Cr; borrowings **₹13,971 Cr** (Mar-25 ₹8,840 Cr); CWIP **₹6,965 Cr** (₹2,250 Cr); fixed assets ₹25,611 Cr; investments ₹1,531 Cr; total ₹45,045 Cr. (Nabha consolidated only from 25-Jun-26 — Jun-26 balance sheet will show a step-up.)
- Cash flow FY26: CFO ₹5,464 Cr; CFI −₹8,088 Cr; CFF +₹3,101 Cr; FCF −₹2,156 Cr (first negative in a decade).
- Shareholding (Sep-26): promoter 51.09%, FII 8.36%, DII 22.81%, **Government 8.35%** (unexplained, see Still-listed note 6), public 9.40%.

**Company-basis numbers [V Q1 FY27 deck]**
- FY26: revenue ₹28,966 Cr; power purchase ₹18,998 Cr; material ₹1,594 Cr; contribution ₹8,374 Cr; other income ₹323 Cr; G&A ₹2,833 Cr; **PBDIT ₹5,864 Cr**; finance ₹934 Cr; D&A ₹1,613 Cr; PBT ₹3,317 Cr; tax ₹847 Cr; PAT ₹2,469 Cr; TCI ₹2,514 Cr. 5-yr EBITDA FY22–26: 3,826 / 5,141 / 4,903 / 5,795 / 5,864. Net worth (incl. DTL) ₹20,704 Cr.
- FY26 segments (incl. ₹4,625 Cr inter-segment): revenue T&D ₹24,764 Cr (74%), generation ₹7,585 Cr (22%), RE ₹1,241 Cr (4%); EBITDA T&D ₹3,793 Cr (62%), generation ₹1,320 Cr (22%), RE ₹1,012 Cr (16%), unallocated ₹261 Cr.
- Q1 FY27 (3-Aug-2026): revenue ₹8,124 Cr (+3%); power purchase ₹5,818 Cr (+6%); material nil (₹261 Cr); contribution ₹2,306 Cr (+6%); PBDIT ₹1,618 Cr (+2%); finance ₹293 Cr (₹213 Cr, +38%); PBT ₹925 Cr (−6%); PAT ₹662 Cr (−11%); attributable ~₹639 Cr (−13%); TCI ₹639 Cr.
- Leverage: ND/EBITDA **2.06×**, ND/equity **0.56×** (FY26, deck); ROCE/RoNW charts ~12–14% FY26 [V deck, chart-parse]; post-Nabha debt/equity ~0.97× (secondary) [V-snip]. Ratings: **CRISIL AA+/Stable/A1+** (reaffirmed 23-Apr-2026 with new ₹4,000 Cr NCDs) [V-snip crisil]; Fitch updates 16-Apr/4-Feb [V screener]. ₹3,800 Cr Series-15 NCDs fully utilised [V-snip].

**Native KPIs**
- **Licensed distribution (FY26):** Ahmedabad/Gandhinagar ~356 sq km, >21 lakh customers, peak 1,967 MW, loss **3.35%**; Surat ~52 sq km, >6 lakh, 764 MW, **2.77%**; Dahej SEZ ~17 sq km, 146 customers, 117 MW; Dholera SIR ~920 sq km, 18 MW; DNH&DD ~603 sq km, >1.7 lakh, **1,437 MW**, <2%; blended licensed loss **2.33%**; power availability 99.9%; Ahmedabad & Surat ranked 1st (A+) in MoP's 14th integrated rating (FY25) [V deck].
- **Franchises (FY26):** Bhiwandi ~721 sq km, 634 MVA, AT&C 58% → ~9.1%; Agra ~221 sq km, 588 MVA, 58.77% → ~5.4%; SMK ~65 sq km, 165 MVA, 48% → ~23.1% [V deck].
- **Q1 FY27 losses (Q1 FY26):** Ahmedabad 10.8% (7.9%); Surat 4.1% (3.1%); DNH&DD 1.6% (1.7%); Dahej 0.6% (0.4%); Bhiwandi 10.2% (10.1%); Agra 15.2% (14.4%); SMK 24.6% (25.9%) [V deck chart; Ahmedabad/Agra also V-snip investywise]. Weighted loss 7.8% vs 6.5%; purchase 9,205 MU (+3.4%) [V-snip tndindia]. Q1 figures are seasonal; the YoY rise at Ahmedabad (+2.9 pp) is worth a question on the Q2 call.
- **Generation (30-Jun-26):** 6,564 MWp — gas 2,730 MW (SUGEN 3×382.5 MW, COD Aug-2009; UNOSUGEN 382.5 MW, Apr-2013; DGEN 3×400 MW, Nov-2014, no PPA, 1 MTPA Petronet regas to 2037); coal 1,762 MW (Nabha 2×700 MW supercritical, 25-yr PSPCL PPA, Case II; AMGEN 362 MW, GERC-regulated, SECL/NCL FSA); solar 1,092 MWp; wind 980 MW. SUGEN: 835 MW to own discoms + 50 MW MPPTC (CERC cost+RoE); UNOSUGEN 278 MW to own discoms. ~1.5 GW (c.50%) of gas capacity available for merchant. c.32.8% of operating thermal and c.44.0% of operating RE capacity tied to own discoms. Pipeline to **12,345 MWp** (gas 2,730; coal 3,362 incl. Anuppur; wind 3,216; solar 3,037).
- **PLF Q1 FY27:** AMGEN 91.1%, SUGEN 43.4%, DGEN negligible, wind 33.3%, solar 25.9% (on contracted capacity) [V].
- **RE pipeline (~2.6 GW contracted / ~4.6 GWp, ₹29,638 Cr):** MSEDCL 306 MW @₹3.10 (264 MW commissioned); SECI XII 300 MW @₹2.94 (₹2,500 Cr; FY27–28); SECI XVI 100 MW @₹3.60 (₹925 Cr); SECI XVIII 300 MW @₹3.97 (₹2,360 Cr; FY28); own discom (TPL-D) 450 MW/830 MWp @₹3.65 (₹5,500 Cr; FY27–29); REMCL 100 MW/401 MWp @₹4.25 (₹3,039 Cr); merchant 603 MWp (₹4,664 Cr); TPL-D FDRE 250 MW/500 MWp @₹4.87 (₹3,000 Cr); C&I ~776 MW/1,161 MWp (₹6,308 Cr). Commissioning guide: 1.2 GW FY27, 1.4–1.6 GW FY28, rest FY29 [V deck; V-snip sahi]. Target ~6.25 GWp RE.
- **PSP:** Raigad 3,000 MW (~₹14,000 Cr), 2,000 MW/16,000 MWh tied with MSEDCL for 40 years (ESFA), SCOD Oct-2028, **annual revenue ₹1,680 Cr**; civil/HM and E&M LoAs awarded; EC/FC received. Total PSP plan 8.4 GW (Maharashtra, UP) [V].
- **Thermal growth:** Nabha (acquired 25-Jun-2026; ~₹1,000 Cr steady-state EBITDA guided); **Anuppur 1,600 MW (2×800 USC, MP), ₹23,000 Cr, DBFOO, MPPMCL 25-yr PPA at ₹5.829/kWh, SHAKTI coal; Unit 1 66 months, Unit 2 72 months from PPA** [V deck].
- **Transmission:** 952 ckm 400 kV + 388 ckm 220 kV operational; ~40 km 400 kV D/C under construction [V].
- **Green hydrogen:** 72 TPA pilot blending into CGD network [V]; 18 KTPA PLI award [primer].
- **Capex:** FY26 ₹8,720 Cr (or ~₹9,350 Cr per another summary); FY27 renewables capex ~₹10,000 Cr; five-year plan ~₹80,000 Cr [V-snip]; primer: ₹60,000 Cr+ FY26–32.
- **SECI 300 MW wind PPA terminated** (7-Oct-2026), LD ₹39.78 Cr [V screener].

**Story bullets**
1. **Best-in-class licensee:** 2.33% licensed loss and 99.9% availability; Ahmedabad and Surat rank #1 nationally — the reason GERC trust and timely tariffs keep regulatory assets negligible and P/B at 3.2×.
2. **Gas is now a liability in a supply shock:** 2,730 MW of gas with DGEN un-contracted; LNG spot ~$20/MMBtu makes gas power ~₹13–15/kWh in fuel alone; Q1 FY27 PAT −11%.
3. **The balance sheet is being deliberately re-levered** (borrowings +58% in FY26; Nabha; ~₹10,000 Cr RE capex in FY27) from a 2.06× ND/EBITDA base — still the least levered of the three.
4. **Coal and storage, not just solar:** Nabha + Anuppur (3 GW coal) + 3 GW PSP make Torrent's portfolio "firm" in a way Tata's (no new coal) is not.

**Sources:** Torrent Q1 FY27 investor presentation (NSE archive TORNTPOWER_03082026172921_Investor_Presentation.pdf) [V]; screener.in/company/TORNTPOWER/consolidated (22-Oct-26) [V]; investywise, tndindia, sahi, psuconnect, freepressjournal (Q1 summaries) [V-snip]; CRISIL rationale list [V-snip]; primer.

---

## 2.3 CESC (CESC · 500084) — Kolkata's 127-year-old integrated monopoly, Noida and Chandigarh licences, four franchises, and the Purvah RE bet

**Standardised record [V screener 22-Oct-26]**
- Price ₹130; m-cap **₹17,223 Cr**; 52-wk ₹204/₹128 (1-yr −28%); P/E 11.1×; BV ₹94.5 (P/B 1.38×); dividend yield **4.62%**; ROCE 10.9%; ROE 12.0%; face value ₹1; ~132.6 Cr shares.
- P&L (₹ Cr) FY22 / FY23 / FY24 / FY25 / FY26 / TTM: Sales 12,544 / 14,246 / 15,293 / 17,001 / 18,570 / 18,853; OP 3,035 / 2,274 / 2,276 / 2,849 / 3,624 / 3,478; OPM 24 / 16 / 15 / 17 / 20 / 18%; other income (incl. regulatory income) 1,013 / 1,584 / 2,000 / 1,619 / 1,255 / 1,198; interest 1,248 / 1,241 / 1,377 / 1,479 / 1,532 / 1,309; depreciation 885 / 878 / 1,217 / 1,205 / 1,228 / 1,214; PBT 1,915 / 1,739 / 1,683 / 1,783 / 2,119 / 2,153; net profit 1,404 / 1,397 / 1,447 / 1,429 / 1,618 / 1,630; EPS ₹10.25 / 10.13 / 10.38 / 10.33 / 11.63 / 11.72; payout 44 / 45 / 44 / 44 / 52%.
- Quarterly (Jun-25 / Sep-25 / Dec-25 / Mar-26 / Jun-26): sales 5,202 / 5,267 / 4,005 / 4,096 / 5,485; OP 864 / 1,061 / 779 / 743 / 895; net profit 404 / 448 / 304 / 459 / 419; EPS 2.92 / 3.23 / 2.15 / 3.31 / 3.03.
- Balance sheet (Mar-26): equity ₹133 Cr + reserves ₹12,397 Cr; borrowings **₹21,671 Cr** (Mar-25 ₹17,978 Cr); CWIP ₹2,905 Cr (₹403 Cr); fixed assets ₹22,840 Cr; other assets ₹20,570 Cr (incl. regulatory assets and cash); total ₹46,470 Cr.
- Cash flow FY26: CFO ₹4,057 Cr; CFI −₹3,235 Cr; CFF +₹1,205 Cr; net cash +₹2,027 Cr; FCF ₹148 Cr.
- Shareholding (Sep-26): promoter 52.11%, FII 11.49%, DII 24.93%, public 11.45%.

**Company-basis numbers [V Q1 FY27 deck; V CARE]**
- FY26 consolidated: gross revenue ₹18,927 Cr; revenue from operations ₹18,570 Cr; other income ₹357 Cr; **regulatory income (net) ₹903 Cr**; electricity purchased ₹7,622 Cr; fuel ₹3,838 Cr; employee ₹1,478 Cr; other opex ₹2,185 Cr; **EBITDA ₹4,707 Cr** (FY25 ₹4,312 Cr); finance ₹1,360 Cr; D&A ₹1,228 Cr; PBT ₹2,119 Cr; tax ₹501 Cr; **PAT ₹1,618 Cr** (FY25 ₹1,429 Cr).
- FY26 standalone (Kolkata): generation 5,737 MU; power purchase 7,558 MU; sales 11,990 MU (incl. export & banking); gross revenue ₹9,939 Cr; EBITDA ₹2,673 Cr; PAT ₹852 Cr (₹800 Cr); regulatory income ₹535 Cr (FY25 ₹1,135 Cr; FY24 ₹1,496 Cr); CARE's EBITDA ex-regulatory income ₹2,150 Cr (₹1,931 Cr; ₹1,306 Cr).
- Q1 FY27 (13-Aug-2026): gross revenue ₹5,559 Cr (+5%); revenue from ops ₹5,485 Cr; regulatory income ₹180 Cr (₹233 Cr); EBITDA ₹1,149 Cr (−3%); finance ₹312 Cr (₹363 Cr); PAT ₹419 Cr (+3%); attributable ₹402 Cr (₹390 Cr). Standalone revenue ₹3,024 Cr (+4%), EBITDA ₹631 Cr (−5%), PAT ₹220 Cr (₹211 Cr). Interim dividend ₹6/share.
- Subsidiaries FY26 (revenue / EBITDA / PAT, ₹ Cr): NPCL 3,001 / 442 / 227; CPDL 1,007 / 61 / 25; Haldia Energy 2,166 / 825 / 286; Dhariwal 2,250 / 797 / 359; Crescent 242 / 116 / 46; Kota DF 1,021 / 51 / 7; Bharatpur DF 255 / 19 / 8; Bikaner DF 776 / 48 / 22; **Malegaon DF 799 / −112 / −125**. Q1 FY27: NPCL 857 / 109 / 52; CPDL 280 / 18 / 9; Haldia 549 / 201 / 67; Dhariwal 543 / 223 / 127; Crescent 63 / 32 / 12; Kota 323 / 18 / 7; Bharatpur 76 / 5 / 2; Bikaner 230 / 17 / 10; Malegaon 211 / −40 / −43.
- **Leverage (CARE):** net debt/EBITDA **4.7×** (Mar-26; 5.2× Mar-25; threshold 5.5×), overall gearing 1.65× (1.44×), TD/PBILDT 6.29×; consolidated cash ₹5,527 Cr; equity needs ~₹3,500–4,000 Cr over 12–18 months; dividend outgo ~₹800 Cr/yr (from ~₹600 Cr). Ratings: **CARE AA/Stable (outlook revised from Negative, 12-Aug-2026), CARE A1+**; ICRA AA (Stable) (19-Aug-2026 material-event note); Haldia CARE AA-, Dhariwal CARE A+, Purvah CARE A, Solvanta CARE A- [V CARE; V-snip ICRA]. NCD ₹190 Cr allotted to Kotak (24-Sep-2026) [V screener].

**Native KPIs**
- **Distribution (FY26):** >4.9 mn customers, 4.9 GW+ load, 1,454 sq km. Kolkata 567 sq km, 37 lakh customers, peak 2,700+ MW, 11,990 MU, **T&D loss 6.11%** (6.5% FY25; WBERC norm 8%); NPCL 335 sq km, 2.15 lakh, 848+ MW, 3,888 MU, 6.95%; CPDL 114 sq km, 2.4 lakh, 465+ MW, 1,746 MU, 8.30%; Rajasthan DF (Kota/Bharatpur/Bikaner) 381 sq km, 5.5 lakh, 696+ MW, 2,427 MU, 11.44%; Malegaon DF 57 sq km, 1.3 lakh, 238+ MW, 922 MU, 36.33% [V deck].
- **Q1 FY27 losses (Q1 FY26):** Kolkata 6.85% (7.08%); NPCL 8.47% (9.71%); CPDL 8.12% moving avg (11.99%); Kota 10.3% (13.8%); Bharatpur 9.8% (10.8%); Bikaner 7.3% (11.9%); Rajasthan combined 9.21% (12.78%); Malegaon 35.9% (40.7%). Volumes: Kolkata 3,610 MU (+5%), NPCL 1,169 MU (+10%), CPDL 435 MU (+16%), Malegaon 236 MU (+17%) [V deck].
- **Tariff/regulation:** Kolkata retail tariff frozen at ~₹7.3/unit "for several years"; FPPAS ₹0.62/unit since Nov-2024 (~₹700 Cr FY26); last WBERC true-up (FY22) issued Jun-2026; **adjusted regulatory assets ₹5,257 Cr (Mar-26; ₹4,350 Cr Mar-25)**; ~25% of Kolkata procurement from the market; ~80% of Kolkata requirement from own plants. Licences: Kolkata to **Sep-2038**; Noida to **Jun-2029** (since 1994) [V CARE].
- **Generation:** group thermal 2,143 MW: Budge Budge 3×250 (FY26 PLF 81.7%; Q1 87.3%), Southern 2×67.5 (31.2%; Q1 80.9%), Haldia 2×300 (94.9%; Q1 98.4%), Dhariwal 2×300 (82.9%; Q1 82.3%; contracts TANGEDCO 100 MW, NPCL 187–196 MW, medium-term PPAs 225 MW at >₹5/unit signed in Q1 FY27), Crescent 40 MW on washery rejects (91.7%); TN solar 18 MW. Kolkata standalone 1,125 MW installed, **885 MW operating**. FSA 15.95 MTPA; Sarisatolli captive mine (negative bid ₹470/t) = 28% of FY26 coal; 1,721 of 2,143 MW serves own licensees [V deck; V CARE].
- **Purvah Green:** contracted **4.5 GWp** = 1.8 GWp operational (incl. 1,411 MWp ReNew acquisition pending; organic ~0.4 GWp incl. 435 MWp CESC-Kolkata solar commissioned in Q1 @₹2.69) + 2.7 GWp under implementation; mix 3,297 MWp solar, 1,275 MW wind, 1,530 MWh BESS; 9.1 GW connectivity applied (3.8 GW secured); 15,700 acres under acquisition (8,900 secured); 2.2 GWp revenue-generating by end-FY27; vision 10 GW. Projects: NPCL 300 MW hybrid @₹3.84 (FY27); Kolkata 300 MW hybrid @₹3.75 (FY28); SECI 300 MW solar+600 MWh BESS @₹2.86 (FY29); REMCL 180 MW RTC @₹4.35 (900 MWh; FY29); SECI 250 MW wind @₹3.69 (FY29); SECI 175 MW wind @₹3.85 (LoA Q1 FY27). Phase-1 guided ₹23,000+ Cr for 3.2 GW vs committed organic ~₹18,300 Cr + ₹4,859 Cr acquisition. CARE: PPAs/LoAs 2.4 GW = ~₹16,500 Cr capex by FY29 at 80:20 D:E; ₹2,200 Cr equity infused by FY26 [V deck; V CARE]. Purvah 49.5 MW wind PPA with Prism Johnson (25-Sep-2026; PJL may invest up to ₹40 Cr) [V screener].
- **Manufacturing:** RPSG Solvanta 1.1 GW modules (operational Oct-2025); CESC Green 3 GW TOPCon+ cells at Greater Noida/Jewar (UP LoA, 100 acres; ~₹3,000 Cr; cell lines 2027; vendor finalised) [V deck; V CARE].

**Story bullets**
1. **A great network trapped in a tariff freeze:** Kolkata's 6.1% loss beats the 8% norm, but WBERC has not raised base tariffs for years and true-ups lag four years; regulatory assets rose ₹907 Cr in FY26 to ₹5,257 Cr (28% of revenue). This, not the network, explains 1.4× book.
2. **The franchise curve works in Rajasthan, not Malegaon:** Rajasthan losses 12.8% → 9.2% (Q1) and EBITDA +38%; Malegaon still 36% and loses ~₹125 Cr a year.
3. **Purvah is now the capital story:** ~₹16,500 Cr organic capex + ₹4,859 Cr ReNew + ₹3,000 Cr cells against a ₹17,223 Cr market cap; CARE expects outside equity at Purvah by FY28.
4. **Cheapest of the three on every multiple** (11.1× P/E, 7.1× EV/EBITDA, 4.6% yield) with the highest leverage (4.7× ND/EBITDA).

**Sources:** CESC Q1 FY27 investor update (NSE archive CESC_13082026151536_1.pdf) [V]; CARE Ratings press release 12-Aug-2026 (careratings.com) [V]; screener.in/company/CESC/consolidated (22-Oct-26) [V]; multibagg/investywise (Q1 summaries; attributable PAT) [V-snip]; ICRA list [V-snip]; primer.

---

## 2.4 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {
    "company": "The Tata Power Company Ltd", "nse": "TATAPOWER", "bse": "500400", "fy": "FY26",
    "screener_date": "2026-10-22",
    "revenue": 62429, "revenue_prev": 65478, "revenue_growth_pct": -4.7,
    "op_profit_screener": 13271, "opm_pct": 21.3, "ebitda_company": 16090, "other_income": 3433,
    "pat_reported": 5118, "pat_attributable_est": 3748, "eps": 11.73,
    "roce_pct": 10.5, "roe_pct": 10.2,
    "borrowings_screener": 76141, "investments_screener": 16575,
    "gross_debt_company_jun26": 74069, "net_debt_company_mar26": 56122, "net_debt_company_jun26": 61238,
    "net_debt_to_ebitda_company": 3.34, "net_debt_to_equity_company": 1.18,
    "mcap": 113277, "price": 354, "pe": 28.9, "pb": 2.85, "book_value_per_share": 124, "div_yield_pct": 0.71,
    "ev_ebitda_company_est": 10.5,
    "q1fy27": {"revenue_screener": 19051, "revenue_company": 18898, "op": 3860, "ebitda_company": 4249, "pat_reported": 1401, "pat_attributable": 1176},
    "q1fy26": {"revenue_screener": 18035, "op": 3565, "pat_reported": 1262},
    "promoter_pct": 46.86, "fii_pct": 10.13, "dii_pct": 18.48,
    "customers_mn": 13.2, "regulated_equity": 15178, "regulatory_assets": 10790,
    "installed_capacity_mw": 16700, "re_operating_mw": 6700, "re_under_construction_mw": 5300,
    "transmission_ckm_total": 7894, "cell_module_capacity_gw": 4.3,
    "capex_fy26_approx": 13000, "capex_fy27_guidance": 25000, "q2fy27_result_date": "2026-11-11",
    "rating": "AA+/Stable (CRISIL, ICRA, CARE, India Ratings); BBB/Stable (S&P); Ba1/Positive (Moody's)"
  },
  {
    "company": "Torrent Power Ltd", "nse": "TORNTPOWER", "bse": "532779", "fy": "FY26",
    "screener_date": "2026-10-22",
    "revenue": 28966, "revenue_prev": 29165, "revenue_growth_pct": -0.7,
    "op_profit_screener": 5577, "opm_pct": 19.3, "ebitda_company": 5864, "other_income": 287,
    "pat_reported": 2469, "pat_attributable_est": 2417, "eps": 47.95,
    "roce_pct": 13.7, "roe_pct": 12.5,
    "borrowings_screener": 13971, "investments_screener": 1531,
    "net_debt_company_mar26_est": 12080, "net_debt_to_ebitda_company": 2.06, "net_debt_to_equity_company": 0.56,
    "mcap": 60752, "price": 1204, "pe": 26.1, "pb": 3.18, "book_value_per_share": 379, "div_yield_pct": 1.66,
    "ev_ebitda_company_est": 12.4,
    "q1fy27": {"revenue": 8124, "op": 1538, "ebitda_company": 1618, "pat_reported": 662, "pat_attributable": 639},
    "q1fy26": {"revenue": 7906, "op": 1483, "pat_reported": 742},
    "promoter_pct": 51.09, "fii_pct": 8.36, "dii_pct": 22.81, "government_pct": 8.35,
    "customers_mn": 4.2, "licensed_loss_pct_fy26": 2.33, "regulated_equity": null, "regulatory_assets": null,
    "installed_capacity_mwp": 6564, "gas_mw": 2730, "coal_mw": 1762, "solar_mwp": 1092, "wind_mw": 980,
    "re_under_implementation_mwp": 4600, "psp_under_construction_mw": 3000, "pipeline_total_mwp": 12345,
    "capex_fy26": 8720, "capex_fy27_re_guidance": 10000, "q2fy27_result_date": null,
    "rating": "CRISIL AA+/Stable/A1+"
  },
  {
    "company": "CESC Ltd", "nse": "CESC", "bse": "500084", "fy": "FY26",
    "screener_date": "2026-10-22",
    "revenue": 18570, "revenue_prev": 17001, "revenue_growth_pct": 9.2,
    "op_profit_screener": 3624, "opm_pct": 19.5, "ebitda_company": 4707, "regulatory_income": 903, "other_income_company": 357,
    "pat_reported": 1618, "pat_attributable_est": 1542, "eps": 11.63,
    "roce_pct": 10.9, "roe_pct": 12.0,
    "borrowings_screener": 21671, "cash_company": 5527, "net_debt_est": 16144,
    "net_debt_to_ebitda_care": 4.7,
    "mcap": 17223, "price": 130, "pe": 11.1, "pb": 1.38, "book_value_per_share": 94.5, "div_yield_pct": 4.62,
    "ev_ebitda_company_est": 7.1,
    "q1fy27": {"revenue": 5485, "op": 895, "ebitda_company": 1149, "pat_reported": 419, "pat_attributable": 402},
    "q1fy26": {"revenue": 5202, "op": 864, "pat_reported": 404},
    "promoter_pct": 52.11, "fii_pct": 11.49, "dii_pct": 24.93,
    "customers_mn": 4.9, "kolkata_td_loss_pct_fy26": 6.11, "regulated_equity": null, "regulatory_assets_adjusted": 5257,
    "thermal_capacity_mw": 2143, "purvah_contracted_gwp": 4.5, "purvah_operational_gwp_incl_acq": 1.8,
    "renew_acquisition_ev": 4859, "cell_plant_gw": 3, "module_plant_gw": 1.1,
    "q2fy27_result_date": null,
    "rating": "CARE AA/Stable; ICRA AA/Stable"
  }
]
```

## 2.5 Conflicts and gaps (company level)

- **Tata PAT basis:** screener/"reported" ₹5,118 Cr vs attributable ~₹3,748 Cr vs deck ₹5,212 Cr. Use reported for sums, attributable for P/E.
- **Tata revenue:** screener Q1 FY27 sales ₹19,051 Cr vs company "revenue" ₹18,898 Cr (screener likely includes some other operating income); FY26 screener ₹62,429 Cr vs deck ₹63,681 Cr (incl. other income).
- **Tata cell/module capacity:** "4 GW" (primer), "4.3 GW cell & module" (deck), "4.9 GW integrated" (PR). Use "4.3 GW" with the PR figure footnoted.
- **Torrent ND/E 0.56× (deck) vs 0.67× (primer).**
- **Torrent capex FY26 ₹8,720 Cr vs ~₹9,350 Cr** (secondary sources).
- **Torrent Nabha: EV ₹6,889 Cr (primer) vs equity consideration ₹3,632 Cr (completion)** — both can be true (EV incl. debt); reconcile with the completion filing.
- **CESC EBITDA: ₹4,707 Cr (company, incl. ₹903 Cr regulatory income) vs screener OP ₹3,624 Cr vs CARE PBILDT ₹3,448 Cr.**
- **CESC Kolkata customers 37 lakh vs 3.4 mn (CARE); TN solar 18 vs 15 MW.**
- **CESC Q2 FY27 board date** — not announced; last year it reported on 17-Oct.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (all members; ₹ Cr; screener consolidated 22-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP | OPM % | PAT (reported) | PAT attrib. [E] | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT (rep.) | Q1 PAT attrib. | M-cap | % of total m-cap | % of total rev | P/E | P/B | EV/EBITDA (co.) | Customers | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Tata Power | 62,429 | −4.7 | 13,271 | 21.3 | 5,118 | 3,748 | 19,051 | +5.6 | 20.3 | 1,401 | 1,176 | 1,13,277 | 59.2 | 56.8 | 28.9 | 2.85 | ~10.5× | 13.2 mn | Reg. equity ₹15,178 Cr; Odisha AT&C 26.7% (Q1) |
| Torrent Power | 28,966 | −0.7 | 5,577 | 19.3 | 2,469 | 2,417 | 8,124 | +2.8 | 18.9 | 662 | 639 | 60,752 | 31.8 | 26.3 | 26.1 | 3.18 | ~12.4× | ~4.2 mn | Licensed loss 2.33% (FY26) |
| CESC | 18,570 | +9.2 | 3,624 | 19.5 | 1,618 | 1,542 | 5,485 | +5.4 | 16.3 | 419 | 402 | 17,223 | 9.0 | 16.9 | 11.1 | 1.38 | ~7.1× | >4.9 mn | Kolkata T&D 6.11% (FY26) |
| **Total (all members)** | **1,09,965** | **−1.5** | **22,472** | **20.4** | **9,205** | **7,706** | **32,660** | **+4.9** | **19.3** | **2,482** | **2,217** | **1,91,252** | 100 | 100 | **24.8× (agg. m-cap ÷ agg. attrib. PAT)** | **2.69× (agg. m-cap ÷ agg. screener equity ₹71,073 Cr)** | **10.3×** | **~22.3 mn** | |

Notes:
- Attributable PAT = screener EPS × shares (Tata 319.53 Cr, Torrent 50.40 Cr, CESC 132.56 Cr) [E]; matches company-reported attributable Q1 figures (₹1,176 / ₹639 / ₹402 Cr) [V/V-snip].
- EV/EBITDA uses company net debt (Tata ₹56,122 Cr Mar-26; Torrent ≈₹12,080 Cr [E]; CESC ≈₹16,144 Cr [E]) and company EBITDA (₹16,090 / 5,864 / 4,707 Cr). Minorities not added.
- Screener equity (share capital + reserves, Mar-26): Tata 39,468; Torrent 19,075; CESC 12,530 Cr.

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one basis**: screener consolidated FY26 and FY25 (revenue, OP, reported PAT incl. minorities); attributable PAT from EPS; Q1 FY27 vs Q1 FY26 from screener quarterly rows; m-cap 22-Oct-26. Company-basis EBITDA and net debt are summed separately and labelled. Ratios are ratios of the sums.

**(a) FY26 by subgroup [E]**

| Group | Members | FY26 rev | FY25 rev | YoY | OP | OPM | PAT (rep.) | FY25 PAT | PAT YoY | PAT attrib. | M-cap | M-cap ÷ attrib. PAT | Co. EBITDA | Co. net debt | ND ÷ co. EBITDA | EV ÷ co. EBITDA | Screener equity | P/B |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All members | Tata, Torrent, CESC | 1,09,965 | 1,11,644 | −1.5% | 22,472 | 20.4% | 9,205 | 9,263 | −0.6% | 7,706 | 1,91,252 | 24.8× | 26,661 | 84,346 | 3.16× | 10.3× | 71,073 | 2.69× |
| **Distribution-led (ex-Tata Power)** | Torrent, CESC | 47,536 | 46,166 | +3.0% | 9,201 | 19.4% | 4,087 | 4,488 | −8.9% | 3,958 | 77,975 | 19.7× | 10,571 | 28,224 | 2.67× | 10.0× | 31,605 | 2.47× |
| **AA+-rated large caps (ex-CESC)** | Tata, Torrent | 91,395 | 94,643 | −3.4% | 18,848 | 20.6% | 7,587 | 7,834 | −3.2% | 6,165 | 1,74,029 | 28.2× | 21,954 | 68,202 | 3.11× | 11.0× | 58,543 | 2.97× |
| **Coal-fleet integrated (ex-Torrent)** | Tata, CESC | 80,999 | 82,479 | −1.8% | 16,895 | 20.9% | 6,736 | 6,204 | +8.6% | 5,290 | 1,30,500 | 24.7× | 20,797 | 72,266 | 3.47× | 9.7× | 51,998 | 2.51× |

- **Tata Power is 56.8% of revenue, 59.2% of m-cap, 60.3% of company EBITDA and 66.5% of company net debt** [E].
- **CESC is 16.9% of revenue but 9.0% of m-cap** — the market's discount for WBERC risk and Purvah's capital needs.
- Torrent is 26.3% of revenue and 31.8% of m-cap — the premium for GERC's timely tariffs and 2.33% losses.
- The distribution-led group's FY26 PAT fell 8.9% only because Torrent's FY25 carried a ₹637 Cr one-off tax gain [primer]; ex that item the group's PAT rose ~6% [E: 4,087 ÷ (4,488 − 637) − 1 = +6.1%].

**(b) Q1 FY27 vs Q1 FY26 (quarterly, screener) [E]**

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | OPM FY27 / FY26 | PAT (rep.) Q1 FY27 | Q1 FY26 | YoY | PAT attrib. Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All members | 32,660 | 31,143 | +4.9% | 6,293 | 5,912 | +6.4% | 19.3% / 19.0% | 2,482 | 2,408 | +3.1% | 2,217 | 2,180 | +1.7% |
| Distribution-led (ex-Tata) | 13,609 | 13,108 | +3.8% | 2,433 | 2,347 | +3.7% | 17.9% / 17.9% | 1,081 | 1,146 | −5.7% | 1,041 | 1,119 | −7.0% |
| AA+-rated large caps (ex-CESC) | 27,175 | 25,941 | +4.8% | 5,398 | 5,048 | +6.9% | 19.9% / 19.5% | 2,063 | 2,004 | +2.9% | 1,815 | 1,793 | +1.2% |
| Coal-fleet integrated (ex-Torrent) | 24,536 | 23,237 | +5.6% | 4,755 | 4,429 | +7.4% | 19.4% / 19.1% | 1,820 | 1,666 | +9.2% | 1,578 | 1,448 | +9.0% |

**Read:** the quarter split on fuel. Coal-backed portfolios (Tata incl. Mundra under Section 11; CESC) grew PAT ~9%; Torrent's gas exposure (LNG force majeure, SUGEN at 43% PLF) and higher interest (+38%) cut its PAT 11%. The wires grew everywhere (Tata T&D EBITDA +14%; CESC NPCL/CPDL volumes +10%/+16%; Torrent purchase volume +3.4%).

**(c) Balance sheet and cash flow (Mar-26) [E]**
- Screener borrowings: Tata 76,141; Torrent 13,971; CESC 21,671 → **₹1,11,783 Cr** (+25% vs Mar-25's ₹89,684 Cr).
- Screener investments: 16,575 / 1,531 / 154 → ₹18,260 Cr — **not cash** (mostly Tata's equity-accounted JVs/associates). Screener-basis "net debt" (borrowings − investments) = ₹93,523 Cr — do not use.
- **Company-basis net debt: ₹84,346 Cr** (Tata 56,122 company; Torrent ~12,080 [2.06 × 5,864]; CESC ~16,144 [21,671 − 5,527 cash]) → **3.16× combined company EBITDA**. Tata alone rose to ₹61,238 Cr by Jun-26.
- CWIP: 14,595 / 6,965 / 2,905 → **₹24,465 Cr** (Mar-25: 12,679 / 2,250 / 403 = ₹15,332 Cr; +60%).
- FY26 CFO 5,993 / 5,464 / 4,057 = ₹15,514 Cr vs CFI −14,129 / −8,088 / −3,235 = **−₹25,452 Cr** → the group is funding ~₹10,000 Cr/yr of investment beyond operating cash flow [E].

**(d) Distribution operating aggregates [E]**
- Customers: Tata 13.2 mn + Torrent ~4.2 mn [primer] + CESC >4.9 mn = **~22.3 mn**.
- Peak load served (FY26, licensed + franchise, company decks): CESC 4.9 GW+; Torrent licensed ≈ 4.3 GW (1,967 + 764 + 117 + 18 + 1,437 MW) + franchises (634 + 588 + 165 MVA); Tata n/d.
- Regulatory assets: Tata ₹10,790 Cr (Jun-26) + CESC ₹5,257 Cr (Mar-26, adjusted) + Torrent n/d = **≥₹16,047 Cr** (~15% of combined FY26 revenue) [E].

**(e) Ownership (Sep-26, simple averages) [E]**
- Promoter 50.0% (range 46.86% Tata – 52.11% CESC); FII 10.0%; DII 22.1%.

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (22-Oct-26) | Use |
|---|---|---|---|---|
| Tata | FY26 revenue / PAT | ~62,400 / 5,118 | 62,429 / 5,118 (reported; attrib. ~3,748) | Screener; state basis |
| Tata | FY26 EBITDA | 16,090 | Co. 16,090; screener OP 13,271 | Both, labelled |
| Tata | M-cap / price / P/E / P/B | ~1.20 L Cr / ~₹376 / ~31× / ~3.0× | **₹1,13,277 Cr / ₹354 / 28.9× / 2.85×** | Screener |
| Tata | Promoter | ~46.9% | 46.86% | Same |
| Tata | TPREL investor | "Blackstone-affiliate / GreenForest" | BlackRock Real Assets + Mubadala (GreenForest New Energies) [K]; Tata owns 88.57% [V] | Fix |
| Tata | Cell/module | "4 GW cell + 4 GW module" | 4.3 GW cell & module (deck); "4.9 GW integrated" (PR) | Deck |
| Tata | Ingot/wafer | "~₹6,500 Cr plant" | 10 GW (2×5 GW), Gopalpur SEZ 128 acres MoU | Web |
| Tata | Mundra Section 11 | "extended through Sep-2026" | **to 31-Dec-2026** (order 25-Sep) | Web |
| Tata | Net debt / ND/E | borrowings ~₹71,000 Cr; ND/E 1.18× | Gross ₹71,122 (Mar-26) → ₹74,069 Cr (Jun-26); net ₹61,238 Cr; ND/E 1.25× | Web (company) |
| Tata | RE portfolio | 11.6 GW incl. 5.1 GW UC; ~6.4 GW op | 12.0 GW incl. 5.3 GW UC; 6.7 GW op (Jun-26); +419 MW in Q2 | Web |
| Tata | Rooftop | 4.8 GWp | 5.2 GWp, 4.8 lakh customers | Web |
| Tata | Regulated equity / RAs | absent | ₹15,178 Cr / ₹10,790 Cr | Web |
| Tata | Odisha AT&C | "further ~2% reduction" (FY26) | Q1 FY27: 31/32/26/17% vs targets 16/22/15/13% | Web; add |
| Tata | FY30 targets | 30+ GW, 70% clean | + revenue ₹1 L Cr, EBITDA ₹30k Cr, PAT ₹10k Cr, ~40 mn customers | Web |
| Tata | Q1 FY27 | not covered | Rev 18,898; EBITDA 4,249; PAT 1,401 (attrib. 1,176); capex 5,375 | Web |
| Tata | Coal mines | not mentioned | KPC 30%, BSSR 26%, AGM 26% still held | Web |
| Torrent | FY26 revenue / EBITDA / PAT | 28,966 / 5,864 / 2,469 | Same (screener OP 5,577) | — |
| Torrent | M-cap / price / P/E / P/B | ~₹69,000 Cr / ₹1,366 / ~28× / ~3.6× | **₹60,752 Cr / ₹1,204 / 26.1× / 3.18×** | Screener |
| Torrent | ND/E | 0.67× | 0.56× (deck, FY26) | Deck |
| Torrent | Capacity | 5,094 MW (gas 2,730; RE 2,002; coal 362) | 6,564 MWp incl. Nabha 1,400 MW (from 25-Jun-26) | Deck |
| Torrent | Gas plants | SUGEN ~1,148 + DGEN ~1,200 | + UNOSUGEN 382.5 MW (sum 2,730) | Deck |
| Torrent | Nabha | EV ₹6,889 Cr, "underway" | Completed 25-Jun-26; equity consideration ₹3,632 Cr; ~₹1,000 Cr EBITDA guided | Web |
| Torrent | RE pipeline | ~3.8 GW UC, ~₹24–28k Cr; ~10 GW ambition | ~4.6 GWp under implementation, ₹29,638 Cr; target ~6.25 GWp | Deck |
| Torrent | PSP | 3 GW Raigad | 3 GW UC (2 GW/16 GWh MSEDCL, ₹1,680 Cr/yr) + 8.4 GW plan | Deck |
| Torrent | New coal | "~1,600 MW MP" | Anuppur 1,600 MW, ₹23,000 Cr, ₹5.829/kWh PPA | Deck |
| Torrent | Franchise losses | Agra ~6.9–7%; SMK ~28% (from ~45%) | Agra ~5.4%; Bhiwandi ~9.1%; SMK ~23.1% (from 48%) FY26 | Deck |
| Torrent | QIP | "in 2025" / "2024–2025" | FY25 (promoter 53.56% → 51.09% in Dec-24 quarter) | Screener |
| Torrent | Promoter | ~51% (Mehta trusts ~53–54%) | 51.09% | Screener |
| Torrent | Q1 FY27 | not covered | Rev 8,124; PBDIT 1,618; PAT 662 (attrib. 639) | Web |
| CESC | FY26 revenue / EBITDA / PAT | 18,570 / 4,707 / 1,618 | Same; screener OP 3,624; reg. income 903 | Label |
| CESC | M-cap / P/E / DY | ~₹22,500 Cr (Mar-26) / ~14× / ~3.5% | **₹17,223 Cr / 11.1× / 4.62%**; P/B 1.38× | Screener |
| CESC | Debt / ND/EBITDA | ~₹17–18k Cr / ~4× | Borrowings ₹21,671 Cr; cash ₹5,527 Cr; ND/EBITDA 4.7× (CARE) | Web |
| CESC | Generation table | "Titagarh/Crescent ~40 MW" | Crescent Power 40 MW (Asansol, washery rejects); Kolkata 1,125 MW installed / 885 operating | Deck/CARE |
| CESC | Purvah | ~300 MW op; 3,200 MW FY29; 10 GW FY32 | 4.5 GWp contracted (1.8 op incl. 1.4 acq. + 2.7 UI); ReNew SPA EV ₹4,859 Cr | Deck |
| CESC | Manufacturing | absent | 1.1 GW modules (Solvanta) + 3 GW cells (₹3,000 Cr, 2027) | CARE/deck |
| CESC | Regulatory assets / tariff | "regulatory lag" (generic) | RA ₹5,257 Cr; tariff ~₹7.3 frozen; FPPAS ₹0.62; true-up only to FY22 | CARE |
| CESC | Kolkata customers | 3.6 mn | 37 lakh (deck) / 3.4 mn (CARE) | Deck |
| CESC | Ratings | not given | CARE AA/Stable (from Negative, 12-Aug-26); ICRA AA | Web |
| CESC | Q1 FY27 | not covered | Rev 5,485; EBITDA 1,149; PAT 419 (attrib. 402); interim ₹6 | Web |
| CESC | Promoter | ~52.1% | 52.11% | Same |

## 3.4 Primer issues (format as primer-issues.md)

### From Integrated Power Utilities research (2026-10-22, integrated-power-industry.md §3.4)

- **tata-power.html — TPREL investor misnamed:** §03, §09, §10, §11 call the ₹4,000 Cr TPREL investor "Blackstone-affiliate / GreenForest". The investor was the **BlackRock Real Assets + Mubadala consortium (GreenForest New Energies)**, not Blackstone [K]. Tata Power now owns **88.57%** of TPREL [V Q1 deck]. Fix all five mentions.
- **tata-power.html — PAT basis not stated:** "Record PAT ₹5,118 Cr" and "~31× trailing P/E" mix bases. ₹5,118 Cr is reported PAT incl. minorities (49% of TPDDL and the four Odisha discoms, 26% Maithon, 11.43% TPREL); **attributable PAT ≈ ₹3,748 Cr** (EPS ₹11.73). Add one line; the P/E is on attributable EPS. Similarly "EBITDA ₹16,090 Cr" includes ₹3,433 Cr other income (screener OP ₹13,271 Cr).
- **tata-power.html — valuation stale (refreshed 2-Jul):** m-cap ~₹1.20 L Cr → **₹1,13,277 Cr**; price ₹376 → **₹354** (52-wk low ₹334); P/E ~31 → **28.9**; P/B ~3.0 → **2.85**.
- **tata-power.html — Mundra:** "Section 11 directions were extended through September 2026" → **extended to 31-Dec-2026** (MoP order 25-Sep-2026). Add: SPPA signed with GUVNL; talks with other procurers; Q1 FY27 availability 94%; Mundra/coal/shipping Q1 PAT ₹225 Cr.
- **tata-power.html — manufacturing capacity and wafer plan:** "4 GW cell + 4 GW module" → company label "**4.3 GW cell & module**" (PR also says "4.9 GW integrated"); ALMM-II cell enlistment 4,813 MW. "~₹6,500 Cr ingot/wafer plant" → **10 GW (2×5 GW) ingot/wafer, MoU for 128 acres at Gopalpur SEZ, Odisha**.
- **tata-power.html — Odisha AT&C narrative:** "cut those losses steadily (a further ~2% reduction in FY26)" needs balance: Q1 FY27 AT&C (excl. arrears) was **31% / 32% / 26% / 17%** (TPCODL/TPSODL/TPWODL/TPNODL), higher YoY at three of four and **10–16 pp above vesting-order targets (16/22/15/13%)**. The FY26 Odisha PAT of ₹809 Cr (+84%) vs Q1 FY27 ₹111 Cr suggests arrear/one-off income — verify against the FY26 deck.
- **tata-power.html — missing native KPIs:** add regulated equity **₹15,178 Cr** (by licence) and regulatory assets **₹10,790 Cr** (TPDDL ₹4,940 Cr), plus the SC Aug-2025 order to liquidate regulatory assets (Delhi by Apr-2028).
- **tata-power.html — stale operating data:** RE 11.6 GW (5.1 UC) → **12.0 GW (6.7 operating + 5.3 UC)**, +419 MW + 131 MWh commissioned in Q2; rooftop 4.8 → **5.2 GWp**, 4.8 lakh customers; EV 5,500 → **5,900+ public points, 2.4 lakh home chargers**; transmission ~7,400 ckm → **7,894 ckm incl. Ryapte (491 ckm, >₹4,000 Cr)**; net debt **₹61,238 Cr, ND/E 1.25×** (Jun-26); ratings AA+/Stable (domestic), S&P BBB, Moody's Ba1/Positive.
- **tata-power.html — FY30 targets incomplete:** add revenue ₹1 lakh Cr, EBITDA ₹30,000 Cr, PAT ₹10,000 Cr and **~40 mn distribution customers (from 13.1 mn)** — the last depends on new privatisations. Also add Q1 FY27 (rev ₹18,898 Cr; EBITDA ₹4,249 Cr; PAT ₹1,401 Cr; capex ₹5,375 Cr) and FY27 capex guidance ₹25,000 Cr (FY26 actual ~₹13,000 Cr vs ₹20–22k guided).
- **tata-power.html — coal mines omitted:** KPC 30%, BSSR 26%, AGM 26% (Indonesia) are still held and are a natural hedge for Mundra; not mentioned.
- **tata-power.html — "47% clean":** the deck counts "clean & green ~7 GW" of 16.7 GW (~42%); 47% must include hydro/WHR or UC. State the basis.
- **torrent-power.html — gas capacity arithmetic:** §06 lists SUGEN ~1,148 MW + DGEN ~1,200 MW but the chart says gas 2,730 MW. **UNOSUGEN (382.5 MW, COD Apr-2013) is missing.** Correct: SUGEN 1,147.5 + UNOSUGEN 382.5 + DGEN 1,200 = 2,730 MW.
- **torrent-power.html — Nabha completed; capacity stale:** Nabha (1,400 MW) was **acquired on 25-Jun-2026** (equity consideration ₹3,632 Cr; primer's ₹6,889 Cr is EV); capacity is now **6,564 MWp** (gas 2,730; coal 1,762; solar 1,092 MWp; wind 980); management guides ~₹1,000 Cr steady-state Nabha EBITDA.
- **torrent-power.html — leverage figure:** ND/E "0.67×" vs company deck **0.56× (FY26)**; ND/EBITDA 2.06× agrees. Post-Nabha debt/equity ~0.97× (secondary).
- **torrent-power.html — QIP date:** "In 2025 Torrent completed a ₹3,500 Cr QIP" / timeline "2024–2025". Screener shows promoter 53.56% → 51.09% in the **Dec-2024 quarter** and equity capital up in FY25 — the QIP was in FY25 (~Oct-2024 [K]). Fix the year.
- **torrent-power.html — franchise data:** Agra "~6.9%/~7%" → **~5.4% (FY26)**; SMK "taken over in 2021 with ~45%, cut to ~28%" → **48% at takeover, ~23.1% in FY26** (takeover Mar-2020 [K]); add Bhiwandi **~9.1%** (from 58%). Licensed: Ahmedabad 3.35%, Surat 2.77%, DNH&DD <2% (blended 2.33%).
- **torrent-power.html — pipeline numbers:** "~3.8 GW UC, ₹24–28k Cr, ~10 GW ambition" → **~4.6 GWp under implementation, ₹29,638 Cr; target ~6.25 GWp** (Q1 FY27 deck); commissioning 1.2 GW FY27, 1.4–1.6 GW FY28. PSP: add 2,000 MW/16,000 MWh tied with MSEDCL (₹1,680 Cr/yr) and the **8.4 GW** PSP plan. New coal: **Anuppur 1,600 MW, ₹23,000 Cr, MPPMCL PPA ₹5.829/kWh**.
- **torrent-power.html — history line:** "1997 — Torrent acquires the Ahmedabad Electricity Company and the Surat Electricity Company from the Gujarat government" — AEC and SEC were private listed companies; Torrent acquired control from their earlier owners/the market, not "from the Gujarat government" [K — verify wording before fixing].
- **torrent-power.html — valuation stale:** m-cap ~₹69,000 Cr → **₹60,752 Cr**; price ₹1,366 → **₹1,204** (52-wk low ₹1,165); P/E ~28 → **26.1**; P/B ~3.6 → **3.18**; yield 1.5% → 1.66%. Add Q1 FY27 (rev ₹8,124 Cr; PBDIT ₹1,618 Cr; PAT ₹662 Cr, −11%; LNG disruption; SUGEN PLF 43.4%), the SECI 300 MW wind PPA termination (₹39.78 Cr LD, 7-Oct-2026), and the unexplained 8.35% "Government" holding on screener.
- **cesc.html — valuation stale (cover says "Mar '26"):** m-cap ~₹22,500 Cr → **₹17,223 Cr**; P/E ~14 → **11.1**; dividend yield ~3.5% → **4.62%**; P/B "near 1×" → **1.38×** (BV ₹94.5). Stock −28% in a year; 52-wk low ₹128.
- **cesc.html — EBITDA basis:** "EBITDA ~₹4,707 Cr" includes **₹903 Cr regulatory income** and ₹357 Cr other income; screener OP is ₹3,624 Cr. Add the regulatory-income line and CARE's standalone EBITDA ex-regulatory income (₹2,150 Cr).
- **cesc.html — debt understated:** "total debt ~₹17,000–18,000 Cr, ND/EBITDA ~4×" → borrowings **₹21,671 Cr** (Mar-26), cash ₹5,527 Cr, **ND/EBITDA 4.7× (CARE; 5.2× FY25)**, gearing 1.65×.
- **cesc.html — generation table:** "Titagarh / Crescent ~40 MW" → **Crescent Power 40 MW at Asansol (washery-reject coal)**; Kolkata stations = 1,125 MW installed but **885 MW operating** (BBGS 750 + Southern 135); group thermal 2,143 MW. Add Q1 FY27 PLFs (Haldia 98.4%, BBGS 87.3%).
- **cesc.html — Purvah stale:** "~300 MW operational" → 435 MWp commissioned in Q1 FY27 + **ReNew 1,411 MWp acquisition (EV ₹4,859 Cr; close before 31-Oct-2026)** → 1.8 GWp; contracted **4.5 GWp** (3,297 MWp solar, 1,275 MW wind, 1,530 MWh BESS); ~₹16,500 Cr capex by FY29 (CARE); external equity at Purvah expected by FY28.
- **cesc.html — solar manufacturing omitted:** RPSG Solvanta 1.1 GW modules (operational Oct-2025) and **CESC Green 3 GW TOPCon+ cell plant at Greater Noida/Jewar (~₹3,000 Cr; 2027)**.
- **cesc.html — regulatory specifics missing:** add WBERC base-tariff freeze (~₹7.3/unit), FPPAS ₹0.50 → ₹0.62/unit (~₹700 Cr in FY26), **regulatory assets ₹5,257 Cr** (from ₹4,350 Cr), last true-up only for FY22 (issued Jun-2026), normative loss cut 14.3% → 8% (FY26); licences valid to Sep-2038 (Kolkata) and Jun-2029 (Noida).
- **cesc.html — customer count:** "~3.6 million" Kolkata customers vs company **37 lakh** (CARE 3.4 mn); total ">4.9 million" (not ~4.7 mn).
- **cesc.html — Malegaon:** quantify the loss — FY26 PAT **−₹125 Cr** on ₹799 Cr revenue; Q1 FY27 −₹43 Cr. Rajasthan franchises Q1 FY27 loss 9.21% (from 12.78%).
- **cesc.html — ratings & Q1 FY27 omitted:** CARE AA/Stable (outlook raised from Negative, 12-Aug-2026); Q1 FY27 PAT ₹419 Cr (+3%), EBITDA ₹1,149 Cr (−3%), interim dividend ₹6.

## 3.5 Key source URLs

- Screener (22-Oct-2026): https://www.screener.in/company/TATAPOWER/consolidated/ ; https://www.screener.in/company/TORNTPOWER/consolidated/ ; https://www.screener.in/company/CESC/consolidated/ [V]
- Tata Power Q1 FY27 press release: https://nsearchives.nseindia.com/corporate/VPTPCL_27072026172805_PR.pdf [V]
- Tata Power Analyst Presentation Q1 FY27: https://www.tatapower.com/company-financials/quarterly-results-presentation/2026/Analyst%20Presentation%20Q1%20FY27.pdf [V]
- Torrent Power Q1 FY27 investor presentation: https://nsearchives.nseindia.com/corporate/TORNTPOWER_03082026172921_Investor_Presentation.pdf [V]
- CESC Q1 FY27 investor update: https://nsearchives.nseindia.com/corporate/CESC_13082026151536_1.pdf [V]
- CARE Ratings, CESC, 12-Aug-2026: https://www.careratings.com/upload/CompanyFiles/PR/202608120820_CESC_Limited.pdf [V]
- Tata Q1 summary: https://www.freepressjournal.in/business/tata-power-reports-11-pat-increase-to-1401-crore-in-q1-fy27-revenue-up-8 [V]
- Mundra Section 11 to 31-Dec-2026: https://www.psuconnect.in/power-sector-news/tata-power-mundra-plant-section-11-direction-extended-till-december-31-2026 [V]
- Torrent Q1 call guidance: https://www.sahi.com/news/torrent-power-outlines-10-000-crore-fy27-capex-and-1-000-crore-nabha-ebitda-guidance-3155-PE1_COR [V-snip; AI-assisted article]
- Torrent Q1 summaries: https://www.investywise.com/?p=100191 ; https://www.tndindia.com/torrent-power-sees-higher-distribution-losses-in-q1fy27/amp/ [V-snip]
- Tata capex guidance: https://www.angelone.in/news/stocks/tata-power-sees-6-7-power-demand-growth-in-fy27-sticks-to-25-000-crore-capex-plan-ceo [V-snip]
- SC regulatory assets: https://www.scconline.com/blog/post/2025/08/09/supreme-court-directs-states-clear-discom-dues-4-years/ ; https://www.energetica-india.net/news/derc-urges-supreme-court-for-7-years-to-clear-inr-31552-crore-discom-dues [V-snip]
- UP privatisation: https://www.outlookbusiness.com/news/over-27-lakh-power-workers-take-to-the-streets-against-discom-privatisation-in-up [V-snip]
- Electricity (Amendment) Bill: https://www.downtoearth.org.in/amp/story/energy/electricity-amendment-bill-centre-signals-course-correction-after-stakeholder-pushback ; https://powerline.net.in/2025/11/11/reforming-distribution-draft-amendment-bill-seeks-to-bring-in-competition-and-ensure-discom-health/ [V-snip]
- PFC FY24 performance report summary: https://powerline.net.in/2025/06/02/pfc-releases-latest-report-on-the-performance-of-state-power-utilities-for-2023-24/ [V-snip]
- LNG shock: https://www.businesstoday.in/amp/latest/corporate/story/west-asia-tensions-gail-says-lng-supply-cut-to-zero-after-petronet-invokes-force-majeure-519203-2026-03-05 ; https://www.woodmac.com/ja/press-releases/strait-of-hormuz-closure-threatens-south-asia-lng-supply/ [V-snip]
- RE capacity Sep-2026: https://www.energetica-india.net/news/india-adds-3-69-gw-re-capacity-in-september-2026-total-addition-in-fy27-reaches-24-56-gw ; total capacity Jul-2026: https://ianslive.in/indias-total-installed-power-capacity-reach-552-gw-non-fossil-portion-hits-54-pc-share--20260813160437 [V-snip]
- MERC MYT orders: https://merc.gov.in/wp-content/uploads/2025/04/Final-MYT-Order-TPC-T-Case-No.-185-of-2024_for-upload.pdf ; https://mercomindia.com/supreme-court-orders-merc-to-clear-pleas-on-multi-year-tariff-order-in-12-weeks [V-snip]
- CRISIL Torrent rationale (23-Apr-2026): https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/TorrentPowerLimited_April%2023_%202026_RR_393629.html [V-snip, listed not opened]
- Sibling report (national data): subsectors/power-generation.html [V-sib]

### Unsourced / weakly sourced figures (summary for the writer)
- Regulated equity of Torrent and CESC; SERC distribution ROEs (GERC/WBERC/OERC/DERC/MERC); Tata Mumbai customers/units; Odisha annual FY26 AT&C; Torrent total customers (~4.2 mn, primer) and franchise customer counts; NPCL ownership split; global utility multiples (memory ranges); national private-distribution share (composite); UP privatisation and Amendment Bill status (no primary source); SC 3%-of-ARR cap; Tata ND/EBITDA FY19–FY22 year mapping (chart parse); Torrent Q1 FY27 per-area loss chart values (chart parse; Ahmedabad and Agra confirmed by a secondary); TPREL investor identity and timing (memory); Odisha takeover dates, Chandigarh bid value/date, SMK/Bhiwandi/Agra start dates, Torrent QIP month (memory).
