# Power Generation: company packs, batch 2
**Members:** SJVN (SJVN), ACME Solar Holdings (ACMESOLAR), Jaiprakash Power Ventures (JPPOWER), Reliance Power (RPOWER), KPI Green Energy (KPIGREEN), GMR Power and Urban Infra (GMRP&UI), RattanIndia Power (RTNPOWER)

**Prepared:** 13-Oct-2026 · sub-sector report "Power Generation"

All seven are still listed, and none has a merger or delisting pending. Corporate actions to note:
- **JPVL** became an associate of Adani Power, which bought JAL's 24% on 21-May-26 under the JAL resolution plan.
- **ACME** completed a ₹2,800 cr QIP in Jun-26.
- **GMR P&UI** made a ₹1,200 cr preferential issue (Jan-26), and its AGM approved a QIP/FCCB enabler (Sep-26).
- **Reliance Power** has a ₹6,000 cr equity enabler and US$600 mn FCCB authority; its warrants lapsed.
- **KPI Green** made a binding offer for 507.9 MW of wind assets (Sep-26).
- **RattanIndia's former Sinnar subsidiary** was acquired by NTPC–MAHAGENCO (Feb-26).

### Sources and fetch log
- **screener.in consolidated pages** for all 7 were fetched with curl at **13-Oct-2026 16:30 UTC**: m-cap, price, P/E, BV, P&L, BS, CF, ratios, shareholding and pledge flag. The borrowings and other-assets schedules came from screener's `/api/company/<id>/schedules/` endpoint in the same session [V].
- **Company filings and decks (bseindia.com AttachLive/AttachHis PDFs, nsearchives PDFs), fetched and parsed:**
  - **SJVN:** Q4 FY26 call transcript (BSE 21-May-26), AGM outcome (30-Sep-26), Jamui solar COD release (NSE 12-Aug-26), CARE rating PR (13-Jul-26), and an investor deck dated Dec-24 (stale, used only for context).
  - **ACME:** Q1 FY27 earnings deck (BSE 29-Jul-26), Q1 call transcript (30-Jul-26), ICRA rating letter (BSE 7-Oct-26).
  - **JPVL:** FY26 Annual Report (BSE), NARCL IBC disclosure (NSE 27-Feb-26), NARCL settlement (BSE 19-Sep-26), CFO/CS cessation (30-Sep-26), Q2 board-meeting intimation (5-Oct-26).
  - **Reliance Power:** FY26 Annual Report (BSE), CBI chargesheet disclosures (BSE 7-Sep and 1-Oct-26), Dec-25 investor deck.
  - **KPI Green:** Q1 FY27 deck and transcript (Aug-26), "KP 3.0" investor deck (30-Sep-26), wind-acquisition release (30-Sep-26), CEO resignation (1-Oct-26).
  - **GMR P&UI:** Q1 FY27 investor deck (BSE 14-Aug-26), AGM voting results (22-Sep-26).
  - **RattanIndia Power:** Q1 FY27 earnings update (BSE 24-Jul-26), FY26 Annual Report, BHEL arbitral award disclosure (BSE 3-Oct-26).
  - **NTPC:** Sinnar acquisition completion disclosure (NSE 25-Feb-26).
- **WebFetch (secondary, fetched):** mercomindia.com (SJVN Q1 FY27), uniindia.com (Buxar U2 COD), renewablewatch.in (ACME QIP), outlookbusiness.com (APL–JPVL deal; Delhi HC stay of SECI debarment), filingreader.com (APL–JPVL transfer; GMR preferential terms), kotakneo.com (JPVL NARCL settlement and Adani 51% denial).
- **Unverified (search-snippet only):**
  - SJVN Q1 FY27 standalone revenue, PAT and D/E
  - ACME QIP price of ₹279.5
  - JPVL Q1 FY27 exceptional charge (₹193.6 cr) and tax-regime details
  - RPower Q1 FY27 headline from freepressjournal (it matches screener) and the ED ₹715 cr pre-cognizance notice (Aug-26)
  - The ₹3,800 cr Sinnar consideration
  - The Vedanta challenge to the JAL plan [K]
- **Not available this session:** the Sep-2026 shareholding pattern is on screener only for SJVN; the other six use Jun-2026. Pledge status after the APL purchase at JPVL is not verified.
- **Tags:** [V] = fetched this session · [K] = known / prior company statement, source named · [E] = estimate or computation from [V] inputs.
- **EBITDA basis:** "screener OP" excludes other income. Company EBITDA for ACME, KPI, GMR and RattanIndia includes other income. Other income is material for GMR (LPS, claim recoveries) and RattanIndia (carrying cost on Change-in-Law dues). EV = m-cap + net debt, using the company net debt where disclosed; it excludes minority interest.
- **Results calendar:** Q1 FY27 (Jun-26 quarter) is reported for all seven:
  - JPVL 20-Jul, RattanIndia 24-Jul, ACME 29-Jul, SJVN 31-Jul, RPower 6-Aug, KPI 12-Aug, GMR about 14-Aug.
  - **No member has reported Q2 FY27 yet.** **JPVL's board meets on 19-Oct-2026.** The others are expected late-Oct to mid-Nov.

## 0. Batch summary grid
| Metric | SJVN | ACME Solar | JP Power | Reliance Power | KPI Green | GMR P&UI | RattanIndia Power |
|---|---|---|---|---|---|---|---|
| M-cap ₹ cr (13-Oct-26) [V] | 22,034 | 29,275 | 10,314 | 8,271 | 6,459 | 7,965 | 3,576 |
| Price ₹ / 52-wk H–L | 56.1 / 91.2–53.7 | 414 / 477–196 | 15.1 / 24.5–13.1 | 20.0 / 47.8–19.1 | 327 / 542–272 | 102 / 136–86.7 | 6.67 / 11.7–6.33 |
| M-cap change vs primer | −21% (vs ~27.9k, Jul-26) | +9% (vs ~26.9k, Jul-26) | −11% (vs ~11.6k, mid-26) | −18% (vs ~10.1k, Jun-26) | ≈+1–3% (vs ~6.3–6.4k) | +4% (vs ~7.6k, Aug-26) | −16% (vs ~4.27k, Aug-26) |
| P/E TTM [V] | 34.5 | 49.2 | 12.4 | n.m. (TTM loss) | 14.2 | n.m. | 32.1 |
| P/B [V/E] | 1.55 | 4.96 | 0.81 | 0.52 | 2.12 | 4.2 | 0.77 |
| EV/EBITDA TTM [E] | 14.3 (incl OI) | 16.2 (co. ND) | 7.7 (OP) | 9.1 (OP) | 10.6 | 10.7 OP / 5.7 incl OI | 9.5 (incl OI) |
| FY26 revenue ₹ cr (YoY) [V] | 4,528 (+47.4%) | 2,023 (+44.0%) | 5,563 (+1.8%) | 7,620 (+0.5%) | 2,696 (+55.4%) | 7,332 (+15.6%) | 2,991 (−8.9%) |
| FY26 EBITDA ₹ cr (margin), basis | 3,350 CARE (74%); OP 3,361 | 2,267 incl OI (112% of rev); OP 1,785 (88%) | 1,586 co. PBIDT (28.5%); OP 1,367 (24.6%) | OP 2,365 (31.0%) | 1,006 co. (37%); OP 958 (35.5%) | OP 1,604 (21.9%); +OI 3,132 | OP 405 (13.5%); +OI 760 |
| FY26 PAT ₹ cr [V] | 642 (SA 1,008) | 498 | 451 | −337 | 509 | 614 | 52 |
| ROCE / ROE % [V] | 5.7 / 4.6 | 8.9 / 10.4 | 7.0 / 3.6 | 6.1 / −0.9 | 13.7 / 16.9 | 12.0 / −42.8 | 6.2 / 1.1 |
| Borrowings Mar-26 ₹ cr [V] | 32,278 | 19,896 | 3,391 | 14,812 | 5,197 (incl 665 lease) | 11,594 | 3,711 (2,682 promoter ICD) |
| Cash equivalents ₹ cr [V] | 2,523 | 6,158 | 2,009 | 1,705 | 559 | 1,174 | 75 |
| Net debt ₹ cr | ≈29,755 [E] | 12,600 (Jun-26, co.) [V] | ≈1,382 [E] | ≈13,107 [E] | ≈4,638 [E] | 9,300 (Jun-26, co.) [V] | ≈3,636 [E] |
| Net debt / EBITDA | ≈8.4x (CARE debt/EBITDA 9.6x) | 2.9x operational (co.); ≈4.9x total | ≈0.9x | ≈5.5x | ≈4.6x | ≈4.5x proforma (co.) | ≈4.8x (incl OI) |
| Q1 FY27 revenue ₹ cr (YoY) [V] | 1,394 (+52%) | 858 (+68%); co. 954 incl OI (+63%) | 1,776 (+12%) | 1,956 (+4%) | 694 (+15%) | 1,705 (+3.5%) | 799 (−3%) |
| Q1 FY27 PAT ₹ cr (YoY) [V] | 225 (−1%) | 235 (+80%) | 469 (+69%, tax credit) | 65 (+45%) | 95 (−14%) | −35 (vs −7) | 46 (vs −13) |
| Promoter % (latest SHP) [V] | 81.85 (Sep-26; GoI 55, GoHP 26.85) | 71.40 (Jun-26) | 24.00 Adani Power (Jun-26) | 24.98 (Jun-26) | 49.41 (51.9 diluted) | 46.28 (Jun-26) | 44.06 (Jun-26) |
| FII / DII % [V] | 2.65 / 3.79 | 4.39 / 19.10 | 6.75 / 11.15 | 13.64 / 2.79 | 8.16 / 0.67 | 16.00 / 5.47 | 5.25 / 6.58 |
| Promoter pledge (screener) [V] | nil | nil | 73% of holding | n.s. | 44.7% | 60.0% | nil (NCD pledge released, implied) |
| Installed capacity | ≈4.93 GW (hydro 1.97, thermal 1.32, RE ≈1.6) | 2,990 MW RE + 3.62 GWh BESS | 2,220 MW (coal 1,820, hydro 400) | 5,305 MW (coal 5,160) + Meghnaghat stake | 1.87 GW (IPP 0.97 GWp + CPP 0.90); IPP 1.16 GW Sep-26 | 1,650 MW coal + 36 MW solar + gas JVs at 49% | 1,350 MW coal |
| Under construction / pipeline | ≈3.3 GW (Arun-3 900, hydro 1.56 GW incl., solar ≈1.7 GW); 11 GW+ pre-construction | 5,080 MW / ≈20 GWh (3,880 MW PPA-signed) | nil | ≈2.4 GWp solar + ≈5.9 GWh BESS; Bhutan 500 MW solar + 770 MW hydro | 5.07 GW WIP; +507.9 MW wind M&A | 350 MW thermal + 1,425 MW hydro + 26 MW solar | nil |
| PLF / CUF / PAF (latest) | Buxar ≈60% PLF; hydro above NAPAF | CUF 30.9% Q1; PAF 99.2% | Nigrie PLF 88.8% FY26, Bina 75.2% | Sasan ≈87% FY26 | n.d. (IPP gen 4x YoY) | Warora 90%, Kamalanga 87% (Q1) | PLF 92.4% / PAF 98.2% (Q1) |
| Generation (latest) | 13,302 MU FY26 | 2,020 MU Q1 | 14,145 MU saleable FY26 | Sasan 30,092 + Rosa 6,952 MU FY26 | 279 MU IPP Q1 | n.d. (MU) | 8,958 MU FY26 sales |
| Regulated equity / tariff | Buxar ≈₹4,000 cr equity; hydro CERC 15.5% RoE | wtd tariff ₹3.4 op / ₹4.4 u/c | MPERC cost-plus (part) + merchant | Sasan ≈₹1.196 bid; Rosa cost-plus 15% RoE | GUVNL bid PPAs | bid PPAs | MSEDCL bid PPA ≈₹3.34/kWh realised [E] |
| Merchant / short-term share | ~0 | BESS short-term + merchant (₹226 cr Q1) | **≈50% of energy** | ~0 | ~0 (pilot trading) | small (trading arm) | ≈2% (28 MW) |
| Capex guidance | FY27 ₹9,400 cr; FY28 ₹7,800 cr | FY27 ₹15,000–20,000 cr | none | ≈₹10,000 cr SECI project (unfunded) | n.d.; M&A EV ₹2,410 cr | Warora refinancing; meters | none |
| Next results | n.a. | n.a. | **19-Oct-26** | n.a. | n.a. | n.a. | n.a. |

## 0b. Cross-company read-across
1. **Thermal plants are running at record utilisation.** Peak demand hit **271 GW in May-26** (KPI deck citing CEA) and all-India generation rose about 9% YoY in Q1 (RattanIndia deck citing CEA). The batch's coal plants are all above the national average: Amravati 92% PLF, Warora 90%, Kamalanga 87%, Nigrie 89% (FY26) and Sasan about 87% (FY26). **JPVL is the only meaningful merchant seller in the batch** (about 50% of energy), so it has the most direct IEX upside: Q1 operating profit +26%. The contracted names (RattanIndia, GMR, RPower) gained mainly through lower interest, not tariff.
2. **New capacity is depressing earnings.** SJVN (Bikaner 1 GW solar and Buxar U1) and KPI (IPP assets) both show revenue up and PAT flat or down. Depreciation and interest arrive before steady-state CUF and PLF, and curtailment adds to it: SJVN Bikaner has 120 MW curtailed and Khavda about 300 MW; ACME Rajasthan curtailment is under 1% of revenue. ACME is the exception (+80% PAT) because BESS revenue arrived early.
3. **Storage has moved from the pipeline to revenue.** ACME has 3.6 GWh of BESS commissioned (≈40% of India's) and guides to more than 10 GWh by Mar-27; BESS earned ₹226 cr in Q1 at an 82% margin with a ₹93 lakh/MWh capitalised cost. RPower (≈5.9 GWh) and KPI (565 MW/1,130 MWh) have BESS only on paper. SJVN, as REIA, has awarded 2 GWh. **Transmission and connectivity are the binding constraint.** RPower's 930 MW SECI project has a **connectivity start date of May-2029**. SJVN's Khavda and Bikaner plants face curtailment and reactor delays. ACME's CODs depend on Fatehgarh, Bikaner and Neemuch substations.
4. **Six of the seven are still cleaning up legacy issues:**
   - JPVL: settled the NARCL guarantee for ₹511 cr; a ₹5,697 cr ICICI recompense claim remains contingent.
   - RattanIndia: Sinnar has exited to NTPC–MAHAGENCO; it faces a BHEL award of ₹171 cr; promoter ICDs fall due in 2027.
   - RPower: named in two CBI chargesheets plus an ED prosecution complaint, with a going-concern flag over the Samalkot guarantee.
   - GMR: Haryana LPS dues have been recovered, so other income is fading; Ambala–Chandigarh and DFCC claims are still in litigation.
   - SJVN: has reset its 25/50 GW vision; about 9 GW of REIA capacity has no PSA.
   - KPI: governance repair (BDO as auditor, CEO exit).
5. **Discom dues have shrunk post-LPS but have not disappeared.** SJVN's DSO is about 160 days, but only temporarily (true-up). ACME's DSO is 20 days. RattanIndia has **336 debtor days** of MSEDCL Change-in-Law receivables now at the Supreme Court. For GMR, Haryana LPS income has ended.
6. **Valuation dispersion.** Four of seven m-caps are below their primer values (SJVN −21%, RPower −18%, RattanIndia −16%, JPVL −11%). ACME (+9%) re-rated on its QIP and BESS. P/B splits the batch: the turnaround and legal-overhang names trade at or below book (RPower 0.52x, RattanIndia 0.77x, JPVL 0.81x), while growth RE trades at 2–5x book (KPI 2.1x, GMR 4.2x on thin equity, ACME 5.0x). Coal EV/MW clusters at about ₹5.3 cr for JPVL and RattanIndia.

---

## 1. SJVN Ltd (NSE: SJVN · BSE: 533206)

**Status:** listed, active Navratna CPSE (Ministry of Power). Face value ₹10. Equity capital ₹3,930 cr, so 393 cr shares. No merger, demerger or OFS is pending. Board changes in October: the MoP named Raman Gharsanghi as the Government of Himachal Pradesh nominee director from 12-Oct-26 [V screener/BSE announcement list]. BSE and NSE fined SJVN ₹13.44 lakh for board/committee composition non-compliance in Jun-26 [V same list]. The AGM on 30-Sep-26 approved the FY26 dividend: ₹1.15 interim plus ₹0.35 final, ₹1.50 in total [V BSE AGM outcome PDF].

### 1a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹4,528 cr | ₹3,072 cr | **+47.4%** YoY [V screener]. The jump includes ₹679 cr of prior-year true-up income on the 2019-24 tariff orders for Nathpa Jhakri and Rampur (standalone), plus first revenue from Bikaner solar (1,000 MW) and Buxar U1 [V Q4 FY26 call transcript, BSE 21-May-26]. Standalone: ₹3,545 cr (+22%) [V transcript] |
| Operating profit (screener, ex-OI) | ₹3,361 cr (74.2%) | ₹2,223 cr (72.4%) | [V screener] |
| EBITDA (rating-agency basis) | ₹3,350 cr | ₹2,221 cr | CARE puts FY26 revenue at ₹4,538 cr [V CARE PR 13-Jul-26]. Screener OP + OI = ₹3,541 cr (78%) |
| Other income | ₹180 cr | ₹308 cr | Lower LPS and bank interest [V transcript] |
| PAT | ₹642 cr | ₹818 cr | **−21.5%** [V screener]. Standalone PAT ₹1,008 cr (+4%). Subsidiary losses: SGEL −₹258 cr, STPL (Buxar) −₹93 cr [V transcript] |
| ROCE / ROE | 5.73% / 4.58% | 5% / 5% | [V screener top ratios] |
| Borrowings (Mar-26) | ₹32,278 cr (LT 27,132 + ST 4,971 + lease 175) | ₹27,025 cr | [V screener schedules]. ST debt jumped because of short-term construction finance, "a major portion of which becomes due in September 2027" [V CARE] |
| Cash equivalents | ₹2,523 cr | ₹2,963 cr | [V screener]. CARE: free cash ~₹1,900 cr plus ₹630 cr encumbered at 31-Mar-26 [V] |
| Net debt | ≈₹29,755 cr | ≈₹24,062 cr | [E] screener basis |
| Net debt / EBITDA | ≈8.4x (OP+OI) | ≈9.5x | [E]. CARE: total debt/EBITDA **9.6x**, gearing 2.3x [V] |
| CFO / FCF | ₹1,860 cr / −₹3,839 cr | ₹2,483 cr / −₹4,186 cr | Five straight years of negative FCF [V screener] |
| Market cap | **₹22,034 cr** @ ₹56.1 (13-Oct-2026, screener fetch 16:30 UTC) | | 52-wk H/L ₹91.2 / ₹53.7. The stock is near its low [V] |
| P/E (TTM) | 34.5x | | [V screener]. TTM PAT ₹639 cr |
| P/B | 1.55x (BV ₹36.2) | | [V/E] |
| EV/EBITDA (TTM, incl OI) | ≈14.3x | | EV ≈ ₹51,790 cr [E] |
| Dividend | ₹1.50/sh FY26; yield 2.68% | | Payout 92% of consolidated PAT [V] |

### 1b. Latest quarter: Q1 FY27 (Jun-26). Board approved 31-Jul-26. Q2 FY27 is not out as of 13-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops (consol) | ₹1,394 cr | ₹917 cr | **+52%** [V screener; mercomindia.com 3-Aug-26 fetched] |
| Total expenses | ₹1,084 cr | ₹551 cr | Nearly doubled. **Fuel cost ₹243 cr (nil a year ago, Buxar)**, finance cost ₹326 cr (+51%), D&A ₹247 cr (+54%) [V Mercom] |
| Operating profit (screener) | ₹850 cr (61%) | ₹707 cr (77%) | Margin dilution from the thermal fuel pass-through [V] |
| PAT (consol) | ₹225 cr | ₹228 cr | −1.2% [V screener / Mercom] |
| Standalone | Revenue ₹759 cr (−7.7%), PAT ₹247 cr (−4.5%) | ₹822 cr / ₹259 cr | Standalone net worth ≈₹14,952 cr; D/E 0.69 [search snippet: indianmasterminds/investywise. **Standalone figures unverified**] |
| Sequential | Q4 FY26: revenue ₹1,496 cr, PAT −₹118 cr (₹174 cr impairment under Ind AS 36) | | [V screener; transcript] |
| Tariff note | NJHPS billing is provisional: CERC has not yet issued the 2024-29 order. The Rampur tariff is approved | | [V Mercom] |

### 1c. Native power KPIs
- **Installed capacity:** **4,196.5 MW at 31-Mar-26** across 15 operating projects, plus two transmission lines [V transcript]. CARE puts the Jun-26 mix at about 2 GW hydro (1,972 MW: NJHPS 1,500, Rampur 412, Naitwar Mori 60), about 1.5 GW RE and 0.66 GW thermal [V CARE]. Additions since:
  - **Buxar U2 (660 MW):** COD from midnight 12-Sep-26, commemorated 14-Sep-26 [V uniindia.com fetched; filing reported by search]
  - **75 MW Jamui solar** (Bihar, SGEL): COD Aug-26 [V SJVN press release, NSE archive 12-Aug-26]
  - Taken together, **about 4.93 GW operating** at Oct-26 [E]. Other FY27 solar CODs are not individually verified.
- **FY26 additions:** 1,730 MW, made up of 1,070 MW solar (Bikaner 1,000 MW CPSU scheme, COD 24-Dec-25; Dhubri, Assam, COD 5-Feb-26, at ₹3.92/kWh) and 660 MW thermal (Buxar U1, COD 14-Nov-25) [V transcript].
- **Generation:** FY26 **13,302 MU** (+25% vs 10,646 MU). NJHPS 7,506 MU; Rampur 2,108 MU [V transcript]. Hydro ran above design energy and NAPAF, earning incentive and secondary-energy income [V CARE].
- **PLF/PAF:** Buxar U1 ran at about 60% PLF and about 70% PAF in its first months. It breaks even at about 70% PLF, with curtailment by the Bihar beneficiary during solar hours [V transcript]. The RE fleet is running below P90 estimates [V CARE]. Bikaner has about 120 MW curtailed until a shunt reactor arrives (Oct-26). Khavda (Gujarat) faces about 300 MW of curtailment because of delays to connectivity and transmission [V transcript].
- **Regulated equity / ROE:** 1,912 MW of hydro is on CERC cost-plus at 15.5–16.5% post-tax RoE [V CARE]. Buxar U1 capitalised cost is about ₹7,000 cr, so regulated equity is about ₹2,100 cr. For the full 1,320 MW it is about ₹4,000 cr [V transcript]. Group regulated equity is not disclosed in the sources fetched.
- **Under construction:** about 3.9 GW per management (May-26): 4 hydro (1,561.5 MW), Buxar U2 (now done) and 10 solar (1,705 MW) [V transcript]. CARE puts it at about 5.4 GW: 0.66 thermal, about 1.5 hydro and about 3.2 RE [V].
  - **Arun-3 (900 MW, Nepal):** SCOD pushed from Dec-25 to **Mar-28** (CARE). The CMD said all four units are targeted by **Dec-28** because of dam right-bank geology.
  - Dhaulasidh 69.5 MW (Mar-27); Luhri-I 210 MW; Sunni Dam 382 MW [K, company project list]. Pipeline under pre-construction or S&I: over 11 GW [V CARE].
- **Commissioning guidance:** FY27 about 2,284 MW: Buxar U2 660, Dhaulasidh 69.5, and about 1,555 MW of solar. FY28 about 650 MW of solar. FY29–30 about 2,500 MW [V transcript]. **The "25 GW by 2030 / 50 GW by 2040" Shared Vision is under review.** The CMD said a new, "realistic" business plan is coming [V transcript].
- **Capex:** about ₹9,400 cr in FY27, ₹7,800 cr in FY28 and ₹7,500 cr in FY29 [V transcript]. CARE cites ₹7,000–10,000 cr a year at 70:30 or 80:20 debt:equity. Equity is to come from hydro securitisation, partial monetisation of SGEL and accruals [V]. Cost per MW for solar: Jamui ₹342 cr for 75 MW, about **₹4.6 cr/MW** at a ₹2.96/kWh tariff [V press release].
- **REIA (implementing-agency) book:** about 15–16 GW awarded. Only **about 6 GW of PSAs signed**, so about 9 GW is unsigned (about 2.5 GW pure solar, about 0.9 GW solar+BESS, the rest FDRE/hybrid). 2,000 MWh of BESS awarded in UP and Haryana [V transcript].
- **Receivables:** ₹2,009 cr at Mar-26 (DSO about 160 days vs about 70 in FY25). This was driven by the one-time ₹670 cr true-up and by Buxar billing. Collections have been timely since the LPS rules came in [V CARE; screener debtor days 162].
- **Rating:** CARE AA+/Stable and A1+ (reaffirmed 13-Jul-26) [V]. CRISIL update 10-Aug-26 and Ind-Ra 3-Sep-26 [V screener doc list]. A World Bank loan for Rampur carries a GoI guarantee (₹709 cr).
- **Management:** CMD **Bhupender Gupta**; Director (Finance) Parthajit De; Director (Personnel) Ajay Kumar Sharma. **Director (Projects) Rajesh Chandel** per the Aug-26 press release; Suprakash Adhikari held the post in May-26 [V].

### 1d. Ownership (screener SHP, Sep-2026 [V])
Promoters **81.85%** (GoI 55.00% and GoHP 26.85%), unchanged since the Sep-2023 OFS. FII 2.65%, DII 3.79%, public 11.70%. There are 13.4 lakh shareholders, down from 15.6 lakh at the Mar-25 peak.

### 1e. Concentration
NJHPS and Rampur, both on the Satluj in Himachal Pradesh, still earn most of the profit. Buxar sells 85% of its output to Bihar discoms. Offtakers are northern-state discoms, with LC, escrow and RBI tripartite-agreement cover [V CARE].

### 1f. Story bullets
1. **From hydro annuity to a group with a capex drag.** Consolidated revenue rose 47% in FY26, yet PAT fell 21%. Interest grew from ₹743 cr to ₹1,298 cr and depreciation from ₹676 cr to ₹1,042 cr as Bikaner, Buxar U1 and other solar came onto the books before reaching steady state. In Q1 FY27 revenue rose 52% but PAT was flat.
2. **Buxar (1,320 MW) is fully commercial from Sep-26.** It adds about ₹4,000 cr of regulated equity at 15.5% RoE, but needs PLF above 70% to make money. Bihar demand and solar-hour backing-down are the watch items.
3. **Targets reset.** Management has publicly shelved the 25/50 GW vision pending a new plan. About 9 GW of REIA capacity has no PSA. Arun-3 has slipped to FY28–29.
4. **Valuation de-rated:** m-cap ₹22.0k cr, down 21% from about ₹27.9k cr in the primer (Jul-26). P/E 34x on depressed consolidated PAT. P/B 1.55x. Yield 2.7%. Debt/EBITDA is about 9x and short-term construction loans fall due in Sep-27.

### 1g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 504 | 917 | 1,032 | 1,082 | 1,496 | 1,394 |
| Operating Profit | 241 | 707 | 860 | 773 | 910 | 850 |
| OPM % | 48% | 77% | 83% | 71% | 61% | 61% |
| Other Income | 52 | 54 | 79 | 44 | 60 | 35 |
| Interest | 159 | 216 | 315 | 245 | 522 | 326 |
| Depreciation | 275 | 160 | 171 | 216 | 494 | 247 |
| Profit before tax | -142 | 385 | 453 | 357 | -47 | 311 |
| Net Profit | -128 | 228 | 308 | 224 | -118 | 225 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 2,417 | 2,938 | 2,579 | 3,072 | 4,528 | 5,005 |
| Operating Profit | 1,794 | 2,273 | 1,843 | 2,223 | 3,361 | 3,393 |
| OPM % | 74% | 77% | 71% | 72% | 74% | 68% |
| Other Income | 195 | 310 | 380 | 308 | 180 | 218 |
| Interest | 226 | 449 | 482 | 743 | 1,298 | 1,408 |
| Depreciation | 404 | 396 | 557 | 676 | 1,042 | 1,129 |
| Net Profit | 990 | 1,359 | 911 | 818 | 642 | 639 |
| EPS in Rs | 2.52 | 3.46 | 2.32 | 2.09 | 1.63 | 1.62 |
| Dividend Payout % | 68% | 51% | 78% | 70% | 92% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 3,930 | 3,930 | 3,930 | 3,930 |
| Reserves | 9,930 | 10,141 | 10,249 | 10,309 |
| Borrowings | 14,059 | 20,323 | 27,025 | 32,278 |
| Fixed Assets | 8,489 | 10,906 | 11,610 | 23,459 |
| CWIP | 15,674 | 20,033 | 26,414 | 19,155 |
| Investments | 36 | 37 | 61 | 52 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 1,632 | 1,310 | 2,483 | 1,860 |
| Cash from Investing Activity | -6,877 | -5,502 | -6,430 | -3,481 |
| Free Cash Flow | -5,212 | -4,340 | -4,186 | -3,839 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 34 | 89 | 34 | 162 |
| ROCE % | 9% | 5% | 5% | 6% |


---

## 2. ACME Solar Holdings Ltd (NSE: ACMESOLAR · BSE: 544283)

**Status:** listed (IPO Nov-2024 at ₹289), active. Face value ₹2. Equity capital ₹121 cr at Mar-26. Shares outstanding are about **70.7 cr** after the QIP (m-cap ÷ price). There is no merger or demerger. **QIP of ₹2,800 cr completed in early Jun-26** (opened 1-Jun, closed 4-Jun-26). About 10.0 cr shares were allotted at ₹279.50, a 5% discount to the ₹294.13 floor, to fund corporate debt reduction [V renewablewatch.in fetched; price and allotment from businesstoday/indiainfoline snippets]. The company continues to incorporate new project SPVs: 18 wholly owned subsidiaries on 6-Oct-26 and 2 more on 13-Oct-26. It granted 116,788 ESOPs on 10-Oct-26 [V screener/BSE announcement list].

### 2a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹2,023 cr | ₹1,405 cr | **+44.0%** [V screener]. Company "total revenue" including other income was ₹2,505 cr (+59%). That is the primer's ₹2,507 cr basis |
| Operating profit (screener, ex-OI) | ₹1,785 cr (88.2%) | ₹1,237 cr (88%) | [V] |
| EBITDA incl. other income (company basis) | ≈₹2,267 cr | ≈₹1,384 cr | The company reports EBITDA including OI. FY26 OI of ₹482 cr includes treasury income on IPO cash and one-offs [V screener] |
| PAT | ₹498 cr | ₹251 cr | +98% [V] |
| ROCE / ROE | 8.91% / 10.4% | 8% / — | [V screener top ratios]. Company "Cash RoE" was 17.3% TTM Jun-26 [V Q1 deck] |
| Borrowings (Mar-26) | ₹19,896 cr (LT 16,740 + ST 2,248 + lease 908) | ₹10,976 cr | [V screener schedules] |
| Cash equivalents | ₹6,158 cr | ₹2,916 cr | [V screener]. Includes undeployed construction drawdowns |
| Net debt | Screener basis ≈₹13,738 cr (Mar-26). **Company: ₹12,600 cr at 30-Jun-26** (operational ₹7,550 cr + CWIP ₹5,050 cr) | — | [V Q1 FY27 deck]. Net debt/net worth 1.6x [V] |
| Net debt / EBITDA | **2.9x** (company: operational net debt / TTM EBITDA ₹2,565 cr) | 4.2x (Q1 FY26) | [V deck]. Total net debt / TTM EBITDA is about 4.9x [E]. Target: below 5.5x on the operational portfolio |
| CFO / FCF | ₹1,249 cr / −₹4,071 cr | ₹1,543 / −₹1,719 cr | [V] |
| Market cap | **₹29,275 cr** @ ₹414 (13-Oct-2026, screener fetch 16:30 UTC) | | 52-wk H/L ₹477 / ₹196 [V] |
| P/E (TTM) | 49.2x | | TTM PAT ₹602 cr [V] |
| P/B | 4.96x (BV ₹83.5) | | [V/E] |
| EV/EBITDA (TTM, incl OI, company ND) | ≈16.2x | | EV ≈ ₹41,875 cr [E] |
| Dividend | yield 0.05% | | [V] |

### 2b. Latest quarter: Q1 FY27 (Jun-26). Results 29-Jul-26, call 30-Jul-26. Q2 FY27 is not out as of 13-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops (screener) | ₹858 cr | ₹511 cr | +68% [V] |
| Total revenue incl OI (company) | ₹954 cr | ₹584 cr | **+63.3%**, a record [V deck] |
| EBITDA incl OI (company) | ₹831 cr (87.1%) | ₹531 cr | +56.5%. RE margin about 88–89%; BESS about 82% (charging power is booked in opex) [V deck and transcript] |
| PAT | ₹235 cr | ₹131 cr | **+79.9%**. Cash PAT ₹390 cr [V] |
| BESS revenue | ₹226 cr, about 85% from short-term contracts and 15% merchant. EBITDA ₹189 cr | — | First full BESS quarter. 3.1 GWh were operational at June-end [V deck] |
| Generation | 2,020 MU | 1,636 MU | +23.4%. **CUF 30.9%**, the highest ever (Rajasthan assets 32.5%, wind 41.4%) [V deck] |
| Plant / grid availability | 99.2% / 98.8% | 99.4% / 98.7% | [V] |
| Capex in quarter | ≈₹2,958 cr | | FY27 capex guidance **raised to ₹15,000–20,000 cr** [V transcript] |

### 2c. Native power KPIs
- **Operating capacity:** **2,990 MW** of generation, unchanged since FY26-end (2,890 MW in Q1 FY26), plus **~3,621 MWh of BESS commissioned** at Jul-26. About 2.3 GWh was added in Q1 FY27 to date [V deck]. ACME claims about 40% of India's commissioned BESS [V transcript]. The BESS plan is cumulative 5,009 MWh by Q2E, 9,459 by Q3E and **10,959 MWh by Q4 FY27E** [V deck].
- **Under construction:** 5,080 MW / about 20 GWh BESS. Of this, **3,880 MW has PPAs** (including 600 MW signed with SECI in Q1: a 300 MW FDRE at ₹6.28 and a 300 MW hybrid at ₹3.25/kWh) and 1,200 MW holds an LoA without a PPA. Total portfolio **8,070 MW**, of which 6,870 MW is PPA-signed [V deck].
- **FY27 commissioning target:** about 1.5 GW of RE (FDRE and hybrid): Sigma Urja 250+50 MW at Neemuch (Aug-26); Urja One 190 MW (Oct-26); Platinum Urja 150 MW (Mar-27); Surya and Sun Power 570 MW (GNA Jun-27); Renewtech 300 MW (Sep-27). All are "subject to substation/transmission" availability, and ACME prefers not to commission on temporary GNA because of Rajasthan curtailment [V deck and transcript].
- **Tariffs:** weighted average **₹3.4/kWh on the operating fleet** and **₹4.4/kWh on under-construction** [V deck]. The legacy GUVNL 15 MW Gujarat plant earns ₹15/kWh for its first 12 years [V deck].
- **Merchant exposure:** zero merchant outside PPA on generation. Management expects about 10 GWh a year of BESS capacity to be available for merchant/short-term sale in the first year before PPA start. Short-term contracts lock in **₹1,400+ cr of FY27 BESS revenue** [V transcript].
- **BESS cost:** about ₹93 lakh/MWh capitalised. EBITDA/capex yield on BESS above 20% [V deck and transcript]. More than 15 GWh has been ordered (CATL, Hithium).
- **Offtakers:** operating fleet 67% central (SECI, NTPC, SJVN, NHPC), 28% state, 5% GUVNL. Total portfolio 84% central [V deck]. **DSO 20 days** excluding BESS (37 days including it), down from 181 in FY23 [V deck].
- **Financing:** cost of debt 8.4% on operating projects. ₹6,000+ cr tied up with REC and PFC for 700 MW of FDRE. About 85% of PPA-signed projects have debt tied up [V deck].
- **Rating:** ICRA AA−/Stable, reaffirmed and enhanced to ₹3,500 cr on 7-Oct-26 [V BSE filing]. CRISIL AA−/Stable (CRISIL update 1-Oct-26 per screener doc list).
- **Incident:** a fire at the **ACME Suryodaya BESS on 13-Jul-26**. The RCA found an AC-cable short circuit between the transformer and the PCS, not the battery. Corrective actions have been implemented [V deck].
- **Targets:** 10 GW of generation and 25 GWh of BESS by 2030. Management "contemplates" going beyond 10 GW [V deck and transcript].
- **Management:** CMD **Manoj Kumar Upadhyay** (founder). CEO **Nikhil Dhingra**. CFO **Arun Chopra** [V transcript].

### 2d. Ownership (screener SHP, Jun-2026 [V]; deck 30-Jun-26 matches)
Promoter group **71.40%** (83.29% in Mar-26, diluted by the QIP). DII **19.10%** (7.05% before), FII 4.39%, public 4.92%, others 0.18%. QIP allottees include Nippon, HDFC, SBI, ICICI Pru, Kotak and Tata MF, plus SBI Life [V deck]. Shareholders 1.43 lakh. The Sep-26 SHP is not yet on screener.

### 2e. Concentration
Generation is concentrated in Rajasthan (2,250 MW of contracted operating capacity), which brings grid-curtailment and GNA-delay risk. Curtailment cost under 1% of revenue in Q1 [V transcript]. Offtakers are mainly SECI and other central agencies.

### 2f. Story bullets
1. **The BESS first mover is now in the P&L.** 3.6 GWh is commissioned and over 10 GWh is guided by Mar-27, earning short-term and merchant revenue (₹226 cr in Q1 at an 82% margin) ahead of the FDRE PPAs. This makes ACME the listed proxy for India's evening-peak storage trade.
2. **Record Q1:** revenue +63%, EBITDA +57%, PAT +80%, CUF 30.9%. FY26 PAT doubled to ₹498 cr.
3. **The ₹2,800 cr QIP de-risked the balance sheet.** Operational ND/EBITDA fell to 2.9x from 4.2x. Capex is stepping up to ₹15–20k cr in FY27, so leverage will rebuild.
4. **Execution and evacuation risk:** generation capacity has not grown since FY26 (2,990 MW). About 1.5 GW is due in FY27 and depends on substations at Fatehgarh, Bikaner and Neemuch. There was a BESS fire in Jul-26. 1,200 MW still has no PPA.
5. **Valuation:** m-cap ₹29.3k cr is +9% above the primer's ₹26.9k cr. P/E 49x; EV/EBITDA about 16x.

### 2g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 487 | 511 | 468 | 497 | 548 | 858 |
| Operating Profit | 436 | 458 | 400 | 444 | 479 | 734 |
| OPM % | 90% | 90% | 86% | 89% | 87% | 86% |
| Other Income | 38 | 57 | 138 | 120 | 171 | 96 |
| Interest | 206 | 233 | 265 | 288 | 337 | 344 |
| Depreciation | 102 | 108 | 117 | 120 | 123 | 155 |
| Profit before tax | 166 | 174 | 156 | 156 | 190 | 331 |
| Net Profit | 122 | 131 | 115 | 114 | 138 | 235 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 1,488 | 1,295 | 1,319 | 1,405 | 2,023 | 2,370 |
| Operating Profit | 1,240 | 1,173 | 1,094 | 1,237 | 1,785 | 2,058 |
| OPM % | 83% | 91% | 83% | 88% | 88% | 87% |
| Other Income | 404 | 106 | 891 | 147 | 482 | 526 |
| Interest | 996 | 809 | 767 | 759 | 1,123 | 1,234 |
| Depreciation | 546 | 485 | 308 | 287 | 468 | 515 |
| Net Profit | 62 | -3 | 698 | 251 | 498 | 602 |
| EPS in Rs | 5.94 | -0.30 | 66.81 | 4.17 | 8.23 | 9.41 |
| Dividend Payout % | 0% | 0% | 0% | 5% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 104 | 104 | 121 | 121 |
| Reserves | 1,796 | 2,486 | 4,390 | 4,940 |
| Borrowings | 9,014 | 8,536 | 10,976 | 19,896 |
| Fixed Assets | 6,631 | 6,758 | 12,315 | 15,732 |
| CWIP | 2,147 | 2,828 | 1,362 | 4,358 |
| Investments | 23 | 150 | 275 | 275 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 1,263 | 1,434 | 1,543 | 1,249 |
| Cash from Investing Activity | -1,410 | -1,888 | -3,976 | -7,317 |
| Free Cash Flow | 495 | -1,368 | -1,719 | -4,071 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 197 | 116 | 99 | 60 |
| ROCE % | 7% | 8% | 8% | 9% |


---

## 3. Jaiprakash Power Ventures Ltd (NSE: JPPOWER · BSE: 532627)

**Status:** listed, active. Face value ₹10. Equity ₹6,853 cr, so about 685 cr shares. No merger is pending. **Change of control: JPVL is now an associate of Adani Power, not a subsidiary.**
- NCLT Allahabad approved Adani Enterprises' resolution plan for parent Jaiprakash Associates (JAL) on 17-Mar-26, and NCLAT upheld it on 4-May-26. The challenge came from an unsuccessful bidder; Vedanta had contested the CoC choice [K, press 2025-26].
- Adani Power was nominated as an implementing entity. On **21-May-26** it acquired JAL's **24% (164.48 cr shares) for ₹2,993.6 cr, about ₹18.20/share**, together with JAL's 180 MW Churk plant and 11.49% of Prayagraj Power for ₹1,200 cr. That makes ₹4,193.6 cr in total.
- The deal was exempt from an open offer [V outlookbusiness.com/PTI 21-May-26 and filingreader.com 29-May-26 fetched; JPVL AR FY26 "Key developments" V].
- Adani Power denied Sep-26 media reports that it would raise its stake to 51% [V kotakneo.com fetched].
- The board was reconstituted on 22-May-26. **Savan Jayendra Patel** (an Adani Power veteran since 1998) became Whole-Time Director, and Jayadeb Nanda and Naresh Telgu joined as non-executive directors. MD & CEO Suren Jain, Sunil Kumar Sharma, Praveen Kumar Singh and others left. Manoj Gaur remains a non-executive director [V JPVL AR FY26].
- CFO R.K. Porwal and CS Mahesh Chaturvedi retired on 30-Sep-26 [V BSE filing].

### 3a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹5,563 cr | ₹5,462 cr | +1.8% [V screener; AR standalone "Net Revenue" ₹5,563.44 cr]. Total income including OI ₹5,791 cr; this is the primer's "revenue" basis |
| Operating profit (screener, ex-OI) | ₹1,367 cr (24.6%) | ₹1,855 cr (34.0%) | [V] |
| EBITDA incl OI (company PBIDT, standalone) | ₹1,586 cr (28.5%) | ₹2,099 cr | −24% [V AR]. Screener OP + OI = ₹1,595 cr |
| PAT | ₹451 cr | ₹814 cr | −45% [V screener; AR consolidated ₹450.63 cr] |
| ROCE / ROE | 6.97% / 3.60% | 10% / — | [V screener] |
| Borrowings (Mar-26) | ₹3,391 cr (LT 2,875 + ST 505 + lease 11) | ₹3,778 cr | [V screener schedules] |
| Cash equivalents | ₹2,009 cr | ₹1,561 cr | [V] |
| Net debt | **≈₹1,382 cr** | ≈₹2,217 cr | [E] screener basis |
| Net debt / EBITDA | ≈0.87x | ≈1.1x | [E] |
| Contingent claims | **Lender "recompense" claim of ₹5,696.5 cr** (ICICI-led) from the earlier restructuring. It is not provided for, and the auditors modified their opinion. **NARCL guarantee claim of ₹511.7 cr** (see 3c) | | [V AR FY26] |
| CFO / FCF | ₹1,301 cr / ₹1,298 cr | ₹1,714 / ₹1,472 cr | FCF-positive every year since FY15 [V] |
| Market cap | **₹10,314 cr** @ ₹15.1 (13-Oct-2026, screener fetch 16:30 UTC) | | 52-wk H/L ₹24.5 / ₹13.1. **Below the ₹18.2/share Adani Power paid** [V/E] |
| P/E (TTM) | 12.4x | | TTM PAT ₹641 cr [V] |
| P/B | 0.81x (BV ₹18.6) | | [V/E] |
| EV/EBITDA (TTM OP) | ≈7.7x | | EV ≈ ₹11,700 cr. EV/MW ≈ ₹5.3 cr [E] |
| Dividend | nil | | "Non-availability of distributable profits" [V AR] |

### 3b. Latest quarter: Q1 FY27 (Jun-26). Results 20-Jul-26. **Q2 FY27 board meeting 19-Oct-2026** [V BSE intimation 5-Oct-26]
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops | ₹1,776 cr | ₹1,583 cr | +12.2% [V screener] |
| Operating profit | ₹759 cr (43%) | ₹601 cr (38%) | +26% [V] |
| Other income (screener) | −₹163 cr | ₹48 cr | Includes the **₹193.6 cr exceptional charge for surrendering the Amelia (North) and Bandha North coal mines** [snippet: univest/marketsmojo, consistent with screener] |
| Tax | −24% (a credit) | 36% | Moved to the s.115BAA regime: MAT-credit reversal ₹140.8 cr less DTL reversal ₹248.9 cr [snippet, unverified detail] |
| PAT | ₹469 cr | ₹278 cr | +69%, flattered by the tax credit [V screener]. Q4 FY26 was −₹13 cr |

### 3c. Native power KPIs
- **Installed capacity: 2,220 MW.** Nigrie 1,320 MW supercritical coal (2×660, 2014-15), Bina 500 MW coal (2×250, 2012-13) and Vishnuprayag 400 MW hydro (2006). There is also a 2 MTPA cement grinding unit at Nigrie (idle in FY26 for lack of clinker; the company is trying to exit it) [V AR FY26]. No capacity is under construction. Lower Siang 2,700 MW and Hirong 500 MW in Arunachal are dormant subsidiaries [V AR].
- **FY26 operations [V AR]:**

| Plant | PAF % | PLF % | Net saleable MU | Offtake |
|---|---|---|---|---|
| Nigrie 1,320 MW | 97.43 | **88.79** (FY25 80.93) | 9,666 | PPA with MPPMCL for 30% of capacity plus 7.5% of output to GoMP at variable cost. **5,799 MU (about 60%) sold merchant** via IEX, HPX, PXIL and bilateral deals |
| Bina 500 MW | 93.39 | 75.21 (68.64) | 2,963 | 70% to MPPMCL (65% PPA + 5% GoMP). 1,375 MU on exchange or bilateral; MPPMCL schedules are "restricted and erratic" |
| Vishnuprayag 400 MW | 99.30 | n.a. | 1,516 | 88% to UPPCL; 12% free power to Uttarakhand. Weaker hydrology |
| **Total** | | | **14,145 MU** (+9%) | |

- **Merchant share:** about **50% of saleable energy** (about 7,170 of 14,145 MU) is merchant or short-term [E from AR]. This makes JPVL the most IEX-geared name in the batch, so a strong summer helps directly.
- **Coal:** Amelia (North) captive mine (2.8 MTPA PRC, used at Nigrie). Its surrender, along with Bandha North, was approved by the board after FY26 "in view of changes in Government coal policies, economic viability". **Nigrie will move to linkage or auction coal**, which is a cost watch item [V AR]. FGD is not required: both plants are Category C under the MoEF&CC notification of 11-Jul-25, and the GEPIL FGD contract was foreclosed [V AR].
- **NARCL IBC petition:** a Section 7 petition was filed (disclosed 27-Feb-26) for ₹511.73 cr plus interest on JPVL's **corporate guarantee to JAL** [V NSE archive filing]. **It was settled on 19-Sep-26 for ₹511 cr "full and final"**, subject to definitive agreements; the IBC petition will be withdrawn on fulfilment [V BSE filing]. Withdrawal has not been confirmed as of 13-Oct-26.
- **Rating:** CRISIL BBB / **Rating Watch Negative** (FY26 AR). CRISIL updates followed on 2-Jun and 31-Aug-26, and Ind-Ra on 6-Jul-26 [V AR; screener doc list].
- **Pledge:** JAL's 24% stake had been pledged to JAL's lenders. Post-transfer pledge status is not verified this session; check the Sep-26 SHP.
- **Management:** WTD Savan J. Patel (Adani nominee) is the senior executive. There is no MD/CEO or CFO/CS named after 30-Sep-26 [V].

### 3d. Ownership (screener SHP, Jun-2026 [V])
Promoter **24.00%**, now Adani Power. FII 6.75%. **DII 11.15%, down from 17.03% in Mar-26**, which suggests lender or institutional selling into the Adani news [E]. Public 58.08%. 24.5 lakh shareholders. The Sep-26 SHP is not yet on screener.

### 3e. Concentration
Two MP discoms/MPPMCL plus UPPCL for contracted volume; the rest goes to the exchanges. Singrauli/MP is the operating hub.

### 3f. Story bullets
1. **Post-Jaypee, Adani-influenced.** APL owns 24% and runs the board through its WTD. This is an associate stake, not control, and there is no open offer. Watch for a stake increase or a merger with APL. APL denied the 51% reports in Sep-26.
2. **A pure merchant-plus-PPA coal play.** Nigrie ran at an 89% PLF in FY26 with about 60% merchant sales. Q1 FY27 operating profit rose 26% on strong IEX prices.
3. **Clearing the legacy claims.** The ₹511 cr NARCL settlement removes the IBC overhang. The ₹5,697 cr ICICI recompense claim remains a contingent liability. Coal-mine surrender drove a ₹194 cr charge and changes the fuel-cost base.
4. **Cheap on assets:** P/B 0.8x, EV/MW about ₹5.3 cr, net debt about 0.9x EBITDA. But m-cap of ₹10.3k cr is 11% below the primer, and the price of ₹15.1 sits below APL's ₹18.2 entry. The Q2 print is due on 19-Oct.

### 3g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 1,341 | 1,583 | 1,438 | 1,156 | 1,386 | 1,776 |
| Operating Profit | 388 | 601 | 471 | 174 | 121 | 759 |
| OPM % | 29% | 38% | 33% | 15% | 9% | 43% |
| Other Income | 26 | 48 | 40 | 56 | 84 | -163 |
| Interest | 97 | 97 | 100 | 91 | 87 | 102 |
| Depreciation | 116 | 117 | 119 | 119 | 117 | 117 |
| Profit before tax | 201 | 435 | 292 | 19 | 2 | 377 |
| Net Profit | 156 | 278 | 182 | 4 | -13 | 469 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 4,625 | 5,787 | 6,763 | 5,462 | 5,563 | 5,756 |
| Operating Profit | 1,113 | 1,121 | 2,236 | 1,855 | 1,367 | 1,525 |
| OPM % | 24% | 19% | 33% | 34% | 25% | 26% |
| Other Income | 235 | 129 | -73 | 245 | 228 | 18 |
| Interest | 556 | 560 | 449 | 414 | 375 | 380 |
| Depreciation | 481 | 464 | 465 | 470 | 473 | 473 |
| Net Profit | 107 | 55 | 1,022 | 814 | 451 | 641 |
| EPS in Rs | 0.16 | 0.08 | 1.49 | 1.19 | 0.66 | 0.94 |
| Dividend Payout % | 0% | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 6,853 | 6,853 | 6,853 | 6,853 |
| Reserves | 3,592 | 4,614 | 5,428 | 5,879 |
| Borrowings | 4,761 | 4,246 | 3,778 | 3,391 |
| Fixed Assets | 13,385 | 13,007 | 12,696 | 12,280 |
| CWIP | 419 | 240 | 249 | 277 |
| Investments | 191 | 525 | 490 | 483 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 767 | 1,927 | 1,714 | 1,301 |
| Cash from Investing Activity | 109 | -991 | 39 | -676 |
| Free Cash Flow | 648 | 1,729 | 1,472 | 1,298 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 74 | 64 | 63 | 72 |
| ROCE % | 5% | 14% | 10% | 7% |


---

## 4. Reliance Power Ltd (NSE: RPOWER · BSE: 532939)

**Status:** listed, active. Face value ₹10. Equity ₹4,136 cr, so about 413.6 cr shares. There is no merger. **Preferential warrants have lapsed:** of 46.20 cr warrants issued in FY25, 11.88 cr converted in FY26 and **34.32 cr lapsed** for non-conversion within 18 months [V FY26 Annual Report, BSE].
- **Fund-raise enablers:** the board approved (21-May-26) an enabling special resolution for **up to ₹6,000 cr** via QIP, private placement or FPO, and authority for **NCDs up to ₹3,000 cr**, both at the 2026 AGM. A prior shareholder authority for **FCCBs up to US$600 mn** also exists [V AR notice and directors' report]. None has been launched as of 13-Oct-26 (equity capital unchanged) [E].
- **Board:** Non-executive non-independent director Sachin Mohapatra resigned on 25-Sep-26 [V screener/BSE list]. Chairman: Ashok Ramaswamy (independent). **ED, CEO and CFO: Neeraj Parakh** [V AR].

### 4a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹7,620 cr | ₹7,583 cr | +0.5% [V screener] |
| Operating profit (screener, ex-OI) | ₹2,365 cr (31.0%) | ₹2,142 cr (28.2%) | [V]. The Dec-25 deck shows "normative EBITDA" ₹2,405 cr for FY25 [V Dec-25 investor PPT] |
| Other income | −₹14 cr | ₹3,871 cr | FY26 includes the Q4 impairment of about ₹382 cr (primer). FY25 was inflated by one-off gains (debt settlements, VIPL deconsolidation) [V screener] |
| PAT | **−₹337 cr** | ₹2,948 cr | [V]. Q4 FY26 −₹494 cr |
| ROCE / ROE | 6.11% / −0.90% | 6% | [V] |
| Borrowings (Mar-26) | ₹14,812 cr (LT 9,956 + ST 4,857) | ₹15,153 cr | All at subsidiaries (Sasan, Rosa, Samalkot). **Standalone bank debt is zero** [V screener; AR] |
| Cash equivalents | ₹1,705 cr | ₹973 cr | [V] |
| Net debt | ≈₹13,107 cr | ≈₹14,180 cr | [E] |
| Net debt / EBITDA | ≈5.5x (screener OP) | ≈6.6x | [E]. The primer's "10.25x debt/EBITDA" is not reproduced on FY26 numbers |
| CFO / FCF | ₹2,824 cr / ₹2,708 cr | ₹1,938 / ₹2,091 cr | [V] |
| Market cap | **₹8,271 cr** @ ₹20.0 (13-Oct-2026, screener fetch 16:30 UTC) | | **52-wk H/L ₹47.8 / ₹19.1**: the stock is at its low, about 58% off the high [V] |
| P/E (TTM) | not meaningful (TTM PAT −₹317 cr; screener shows 2,304) | | [V] |
| P/B | **0.52x** (BV ₹38.8; net worth ≈₹16,040 cr) | | [V/E] |
| EV/EBITDA (TTM OP) | ≈9.1x | | EV ≈ ₹21,380 cr [E] |
| Dividend | nil | | |

### 4b. Latest quarter: Q1 FY27 (Jun-26). Results 6-Aug-26. Q2 not out (trading window closed from 1-Oct)
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops | ₹1,956 cr | ₹1,886 cr | +3.7% [V screener; freepressjournal snippet "₹64.71 cr PAT, revenue +3.75%"] |
| Operating profit | ₹562 cr (29%) | ₹565 cr (30%) | −0.5% [V] |
| Other income | ₹147 cr | ₹140 cr | [V] |
| Interest | ₹387 cr | ₹426 cr | −9% as debt amortises [V] |
| PAT | ₹65 cr | ₹45 cr | +45% [V] |

### 4c. Native power KPIs
- **Operating capacity: 5,305 MW** [V AR]:
  - **Sasan UMPP 3,960 MW** (6×660 MW supercritical, pit-head, Moher and Moher-Amlohri captive mines). FY26 generation **30,092 MU at a PLF of about 87%**. The mine produced 17.18 MT of coal and removed 48 mn BCM of overburden [V AR]. Sasan supplies 14 discoms across 7 states at a levelised bid tariff of about ₹1.196/kWh [K, primer and deck]. Its FY25 revenue was ₹4,475 cr and debt ₹8,638 cr [V Dec-25 deck].
  - **Rosa 1,200 MW** (UP; cost-plus PPA with UPPCL at 15% RoE; CCL linkage). FY26 generation **6,952 MU**, about 66% PLF [E]. FY25 revenue ₹3,046 cr, debt ₹2,250 cr, availability 96% [V deck].
  - Solar 40 MW PV (Dhursar, 46.8 MU) + 100 MW CSP (12.6 MU). **Wind 5 MW in Tamil Nadu**, not 45 MW in Maharashtra [V AR].
- **Bangladesh:** the Meghnaghat 718 MW (net) CCGT (RBLPL, with JERA) began commercial operations in **Jul-25**. RPower holds a minority stake (40% per the deck, with JERA at 60%) and plans to exit by 2031 [V AR and deck].
- **Under development (renewables + BESS)** [V AR]:
  - **SECI Tranche XVII:** 930 MW solar + 465 MW/1,860 MWh BESS (Reliance NU Suntech; 25-yr PPA signed 2-May-25; more than 1,700 MWp DC). **Final connectivity at Kurnool-IV PS was granted 12-Jun-26 with a start date of 30-May-2029**. The "24-month" COD is therefore effectively pushed out by evacuation [V AR note]. Tariff ₹3.53/kWh [K primer].
  - **SJVN awards (Reliance NU Energies):** two projects totalling about 1,500 MWp solar + 4,000 MWh BESS: 350 MW + 175 MW/700 MWh, and 650 MW + 750 MW/3,300 MWh [V AR].
  - **Bhutan:** Reliance Enterprises (RPower–RInfra JV) and DHI have agreed a 500 MWp solar project (50:50) and a planned 770 MW hydro project. A JV, GDL–Reliance Solar Pte, was formed with Green Digital (a Royal Government of Bhutan SOE) [V AR].
- **Merchant share:** effectively nil. Sasan and Rosa are fully contracted [V deck].
- **Disposals:** an SPA was signed with Biotruster (Singapore) to sell 5 Indonesian coal subsidiaries; it is still pending. Samalkot equipment (2×754 MW) is up for sale [V AR and deck].
- **Legal and regulatory: a very heavy overhang** [V AR FY26 and BSE filings]:
  1. **Fake SECI bank guarantee (₹68.2 cr, via Biswal Tradelink):** SECI debarred RPower and Reliance NU BESS for 3 years on 6-Nov-24. The **Delhi HC stayed the debarment for RPower and all subsidiaries except Reliance NU BESS** (26-Nov-24) [V outlookbusiness fetched]. The ED filed a supplementary prosecution complaint (Q3 FY26) against RPower, Rosa, NU BESS and individuals. **Former ED and CFO Ashok Kumar Pal was arrested** under PMLA s.19 (Oct-25). RPower and Rosa have petitioned the Delhi HC to quash the ECIR. Delhi Police EOW has also filed an FIR.
  2. **ED PMLA attachments:** the Reliance Centre leasehold (RNRL) and 5 MW of wind assets were attached and **confirmed on 18-May-26 for up to 365 days**. An appeal is planned. A pre-cognizance notice from the CBI special court (Aug-26) relates to an ED complaint of about ₹715 cr [snippet: businesstoday 18-Aug-26; unverified].
  3. **CBI:** RPower is named as accused in the **first supplementary chargesheet in the RCFL matter (7-Sep-26)** and the **second chargesheet in the RHFL matter (1-Oct-26)** [V BSE filings].
  4. **SEBI:** a show-cause notice (30-Sep-25) under the PFUTP Regulations over RInfra's CLE exposure; another (10-Apr-26) on LODR disclosures; and a **forensic audit initiated 14-Jan-26** [V AR].
  5. **IBC:** an application was filed in **Apr-26** against RPower as guarantor of Samalkot Power's debt (net US$165.4 mn); it has not been admitted. The auditor has flagged a **"Material Uncertainty related to Going Concern"** (standalone) [V AR auditor's report].
- **Rating:** the last ICRA update listed on screener is Nov-25. The Sasan and Rosa ratings were not verified this session.

### 4d. Ownership (screener SHP, Jun-2026 [V])
Promoter **24.98%** (Reliance Infrastructure and the Anil Ambani group; stable since the Jun-25 warrant conversion). FII 13.64%, DII 2.79%, public 58.57%. **43.2 lakh shareholders**, overwhelmingly retail. The Sep-26 SHP is not on screener. Pledge status was not verified this session.

### 4e. Concentration
Sasan supplies about 75% of capacity and most of the cash. Offtake is MP, UP, Punjab, Delhi, Haryana, Rajasthan and Uttarakhand discoms (Sasan) and UPPCL (Rosa).

### 4f. Story bullets
1. **A cash engine wrapped in legal risk.** Sasan (87% PLF on captive coal) and Rosa (cost-plus) generate about ₹2,800 cr of CFO and about ₹2,365 cr of EBITDA a year. But RPower is now an **accused in two CBI chargesheets and an ED prosecution complaint**, has SEBI forensic audit and SCNs open, carries a going-concern flag over the Samalkot guarantee, and has a confirmed ED attachment.
2. **The equity has collapsed:** ₹20, an m-cap of ₹8.3k cr and 0.5x book, down from about ₹10.1k cr in the primer (Jun-26) and ₹47.8 at the 52-wk high. The warrants lapsed, and the ₹6,000 cr QIP enabler and US$600 mn FCCB authority remain unused.
3. **The renewables and BESS pipeline (about 2.4 GWp solar + about 5.9 GWh BESS) faces a real timing problem.** SECI connectivity starts only in **May-2029**, and RPower must self-fund about ₹10,000 cr or more without access to capital markets.
4. **Q1 FY27 was steady:** PAT ₹65 cr (+45%) on flat EBITDA and lower interest.

### 4g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 1,978 | 1,886 | 1,974 | 1,873 | 1,887 | 1,956 |
| Operating Profit | 590 | 565 | 618 | 604 | 576 | 562 |
| OPM % | 30% | 30% | 31% | 32% | 31% | 29% |
| Other Income | 88 | 140 | 93 | 77 | -323 | 147 |
| Interest | 399 | 426 | 395 | 371 | 474 | 387 |
| Depreciation | 211 | 207 | 208 | 210 | 205 | 207 |
| Profit before tax | 67 | 72 | 108 | 100 | -426 | 116 |
| Net Profit | 126 | 45 | 87 | 25 | -494 | 65 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 7,503 | 7,514 | 7,893 | 7,583 | 7,620 | 7,690 |
| Operating Profit | 2,735 | 1,886 | 1,160 | 2,142 | 2,365 | 2,361 |
| OPM % | 36% | 25% | 15% | 28% | 31% | 31% |
| Other Income | 192 | 1,296 | 499 | 3,871 | -14 | -5 |
| Interest | 2,721 | 2,504 | 2,451 | 2,056 | 1,666 | 1,627 |
| Depreciation | 1,077 | 1,017 | 1,062 | 910 | 829 | 830 |
| Net Profit | -915 | -403 | -2,068 | 2,948 | -337 | -317 |
| EPS in Rs | -2.84 | -1.26 | -5.15 | 7.34 | -0.81 | -0.76 |
| Dividend Payout % | 0% | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 3,735 | 4,017 | 4,017 | 4,136 |
| Reserves | 7,860 | 7,597 | 12,320 | 11,904 |
| Borrowings | 21,236 | 18,766 | 15,153 | 14,812 |
| Fixed Assets | 35,776 | 33,584 | 31,859 | 30,944 |
| CWIP | 2,320 | 1,293 | 1,387 | 1,720 |
| Investments | 39 | 209 | 173 | 142 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 4,024 | 3,174 | 1,938 | 2,824 |
| Cash from Investing Activity | -354 | -192 | 451 | -212 |
| Free Cash Flow | 3,639 | 3,225 | 2,091 | 2,708 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 130 | 76 | 73 | 63 |
| ROCE % | 3% | 1% | 6% | 6% |


---

## 5. KPI Green Energy Ltd (NSE: KPIGREEN · BSE: 542323)

**Status:** listed, active. Face value ₹5. Shares outstanding **19.77 cr** (deck, 10-Aug-26). There is no merger.
- **Promoter warrants are outstanding**, and promoter-group company Quyosh has been buying shares [V Q1 call]. The deck shows promoters at **51.9% "factoring in dilution from warrants"** versus 49.41% reported [V Q1 deck].
- **Group CEO Dr. Alok Das resigned** with effect from 1-Oct-26 [V BSE filing].
- **Auditor changed to BDO** in FY27 as part of a governance push [V Q1 call].
- **Acquisition:** on 30-Sep-26 KPI signed a **binding offer for 100% of Alfanar Energy (301.4 MW) and Netra Wind (206.5 MW): 507.9 MW of operating SECI-contracted wind at Bhuj, EV ≈ ₹2,410 cr** (≈₹4.7 cr/MW). About 21 years of PPA life remain. Closing is targeted by **28-Feb-2027**, subject to definitive agreements and lender/regulatory approvals [V BSE press release].
- New SPV KPGC Three Pvt Ltd was incorporated on 5-Oct-26 [V screener/BSE list].

### 5a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹2,696 cr | ₹1,735 cr | **+55.4%** [V screener; deck ₹2,696 cr]. Total income ₹2,742 cr (the primer's basis) |
| Operating profit (screener, ex-OI) | ₹958 cr (35.5%) | ₹561 cr (32.3%) | [V] |
| EBITDA (company, incl OI) | ₹1,006 cr (37%) | ₹581 cr | +73% [V Q1 deck] |
| PAT | ₹509 cr | ₹325 cr | +57% [V] |
| ROCE / ROE | 13.7% / 16.9% | 17% / — | [V screener] |
| Borrowings (Mar-26) | ₹5,197 cr (LT 3,666 + ST 866 + **lease 665**) | ₹1,475 cr | [V screener schedules]. Excluding leases, ₹4,532 cr, which matches the primer; D/E about 1.49 |
| Cash equivalents | ₹559 cr (investments ₹199 cr) | ₹427 cr | [V] |
| Net debt | ≈₹4,638 cr (incl leases) / ≈₹3,973 cr (excl) | ≈₹1,048 cr | [E]. **4.4x in one year** |
| Net debt / EBITDA | ≈4.6x (incl leases) / ≈3.9x | ≈1.8x | [E] |
| Working capital | Inventory ₹1,449 cr (CPP WIP); receivables ₹740 cr; debtor days 100 | | [V screener] |
| CFO / FCF | ₹482 cr / −₹2,550 cr | ₹241 / −₹1,264 cr | [V] |
| Market cap | **₹6,459 cr** @ ₹327 (13-Oct-2026, screener fetch 16:30 UTC) | | 52-wk H/L ₹542 / ₹272. The company deck showed ₹7,314 cr on 10-Aug-26 [V] |
| P/E (TTM) | 14.2x | | TTM PAT ₹493 cr [V] |
| P/B | 2.12x (BV ₹154) | | [V/E] |
| EV/EBITDA (TTM, incl OI) | ≈10.6x | | EV ≈ ₹11,100 cr [E] |
| Dividend | yield 0.28% | | [V] |

### 5b. Latest quarter: Q1 FY27 (Jun-26). Results and call on 12-Aug-26. Q2 FY27 is not out as of 13-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops | ₹694 cr | ₹603 cr | +15% [V deck/screener] |
| Total income | ₹710 cr | ₹614 cr | +16% [V] |
| EBITDA | ₹262 cr (37%) | ₹217 cr (35%) | +21% [V] |
| Interest / D&A | ₹80 cr / ₹51 cr | ₹38 / ₹30 cr | +111% / +70%: newly commissioned IPP assets [V] |
| PAT | ₹95 cr | ₹111 cr | **−14%** [V]. Cash profit ₹176 cr (+6%) |
| Revenue mix | IPP 17% / CPP 83% | IPP 10% / CPP 90% | [V deck] |
| Commentary | Revenue growth (16%) missed the 30–40% run-rate because billing slipped on utility-scale CPP jobs (Coal India, Adani, Aditya Birla). Steel, cable and logistics costs are up on "geopolitical conditions". The **FY27 PAT margin will fall below the 16–18% guided**. The CFO guides 30–40% revenue growth; the CMD still speaks of 40–50% [V Q1 transcript] | | |

### 5c. Native power KPIs
- **Portfolio (30-Jun-26): 6.94 GW**, up 71% YoY. **Installed 1.87 GW** (IPP 0.97 GWp, CPP 0.90 GW) and **5.07 GW work in progress**. By segment: IPP 2.57 GWp and CPP 4.37 GW. Over the year 0.85 GW was commissioned and 2.88 GW of new orders booked [V deck]. By Sep-26 installed IPP capacity was **1.16 GW**. After the Alfanar/Netra deal it would be about 1.67 GW, and management targets **more than 2 GW of IPP installed by end-CY26** [V press release].
- **IPP book (2.57 GWp)** [V deck]:
  - Commissioned: 240 MWp solar, 92 MWp hybrid, 187 MWp of C&I/KUSUM.
  - Under execution: 677 MWp hybrid (194.7 MW commissioned); 350 MWp solar (251.1 MW commissioned); 150 MW wind (GUVNL PPA, financial close done); **565 MW / 1,130 MWh BESS** (BESPA signed, financial close in progress); 300 MW wind (SJVN-backed, PPA signing in progress).
  - **All utility-scale IPP offtake is GUVNL** except the SJVN wind project.
- **Generation:** IPP output was 27.9 crore kWh (279 MU) in Q1 FY27, about **4x YoY** and more than 65% of FY26's 410 MU. Full run-rate is above 3,900 MU a year [V deck]. CUF is not disclosed.
- **Enablers:** land bank **8,657 acres** (6,275 a year earlier) and **5.10 GW of evacuation** (3,297 MW). There are 133 sites, and Rajasthan was entered in Q1 [V deck]. A 142 MW floating-solar EPC is under way at Kadana Dam. KPI holds CERC and GERC trading licences, with pilot merchant trading [V deck].
- **CPP order book:** about ₹5,000 cr or more [V transcript]. Customers include Coal India, Adani Green, Aditya Birla RE, L&T, Tata Motors, Zydus and UPL [V deck].
- **Merchant:** negligible; only pilot trading.
- **International:** Botswana MoU for 5 GW (500 MW phase 1). UAE project approved, with land being acquired [V deck].
- **Capex and cost:** wind M&A at about ₹4.7 cr/MW [E]. Project debt is about 75% of capex (primer).
- **Rating:** ICRA **A (Stable)** at the issuer level, plus AA+(CE) green bonds from CRISIL/ICRA. ICRA updated on 22-Sep-26 and CRISIL on 15-Sep-26 [V deck; screener doc list].
- **Pledge:** screener shows **44.7% of promoter holding pledged** [V screener page]. Investors raised this on the Q1 call.
- **Management:** CMD **Dr. Faruk G. Patel**. WTDs Mohmed Sohil Dabhoya and Rajesh Shrivastava; Vice-Chairman Prof. Sunil Maheshwari. **Group CEO post vacant since 1-Oct-26.** CFO Salim Yahoo (spoke on the Q1 call) [V].

### 5d. Ownership (screener SHP, Jun-2026 [V])
Promoter **49.41%** (51.9% fully diluted for warrants). FII 8.16%, DII 0.67%, public 41.75%, with 3.09 lakh shareholders. Institutional holders named: Vanguard, Norway GPFG, BlackRock, ADIA, Ökoworld and State Street [V deck]. Domestic institutional ownership is low.

### 5e. Concentration
Gujarat accounts for nearly all sites, mostly in Kutch and Bharuch. **GUVNL is the single IPP offtaker** for utility-scale projects. Related-party links run through KP Energy (wind EPC/O&M) and KP Green Engineering (structures). The CPP customer list is concentrated among large corporates.

### 5f. Story bullets
1. **The IPP pivot is now visible.** IPP generation rose about 4x and IPP is 17% of revenue. But interest doubled and PAT fell 14% in Q1. Borrowings rose about 3.5x in FY26 to ₹5.2k cr including leases.
2. **First large M&A: 508 MW of SECI wind for an EV of ₹2,410 cr.** That is about 37% of current m-cap. It would add contracted annuity EBITDA quickly, but needs more debt and equity, with closing by Feb-27.
3. **Governance repair:** BDO appointed as auditor, the Group CEO exit (Oct-26), 44.7% of promoter shares pledged, and promoter warrants. The market prices KPI at 14x P/E despite more than 50% growth.
4. **De-rated:** m-cap ₹6.46k cr, against ₹7.3k cr in Aug-26 and a ₹542 52-wk high.

### 5g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 569 | 603 | 634 | 663 | 796 | 694 |
| Operating Profit | 161 | 206 | 226 | 236 | 291 | 246 |
| OPM % | 28% | 34% | 36% | 36% | 37% | 35% |
| Other Income | 8 | 11 | 7 | 16 | 14 | 16 |
| Interest | 14 | 38 | 43 | 48 | 53 | 80 |
| Depreciation | 16 | 30 | 32 | 33 | 39 | 51 |
| Profit before tax | 139 | 149 | 158 | 170 | 214 | 131 |
| Net Profit | 104 | 111 | 117 | 126 | 155 | 95 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 230 | 644 | 1,024 | 1,735 | 2,696 | 2,787 |
| Operating Profit | 109 | 208 | 337 | 561 | 958 | 998 |
| OPM % | 47% | 32% | 33% | 32% | 36% | 36% |
| Other Income | 1 | 3 | 7 | 20 | 48 | 53 |
| Interest | 37 | 47 | 86 | 79 | 182 | 224 |
| Depreciation | 14 | 23 | 40 | 61 | 133 | 154 |
| Net Profit | 43 | 110 | 162 | 325 | 509 | 493 |
| EPS in Rs | 2.66 | 6.74 | 8.94 | 16.23 | 24.13 | 23.19 |
| Dividend Payout % | 4% | 9% | 3% | 5% | 4% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 36 | 60 | 98 | 99 |
| Reserves | 222 | 775 | 2,325 | 2,935 |
| Borrowings | 676 | 1,036 | 1,475 | 5,197 |
| Fixed Assets | 801 | 979 | 2,361 | 4,508 |
| CWIP | 0 | 101 | 163 | 918 |
| Investments | 2 | 0 | 4 | 199 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 159 | -57 | 241 | 482 |
| Cash from Investing Activity | -309 | -387 | -2,098 | -4,129 |
| Free Cash Flow | -151 | -244 | -1,264 | -2,550 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 83 | 152 | 122 | 100 |
| ROCE % | 25% | 22% | 17% | 14% |


---

## 6. GMR Power and Urban Infra Ltd (NSE: GMRP&UI · BSE: 543490)

**Status:** listed (demerged from GMR Infra in 2022), active. Face value ₹5. Equity ₹391 cr, so about 78.2 cr shares. There is no merger at the listco level.
- **Preferential issue of up to ₹1,200 cr at ₹120.88**, approved by the board on 17-Dec-25 and by postal ballot to 16-Jan-26: 6.62 cr shares (₹800 cr) to non-promoters Synergy Industrials, Metals & Power Holdings and Credit Solutions India Trust, plus 3.31 cr warrants (₹400 cr) to promoter-group Hyderabad Jabilli Properties. ₹1,000 cr is earmarked for debt repayment [V filingreader.com fetched]. Equity capital rose from ₹357 cr to ₹391 cr in FY26, consistent with the allotment [V screener].
- **The 7th AGM (21-Sep-26) passed all 12 resolutions.** These include an enabling **QIP/FCCB fund-raise**, AoA changes to broaden share issuance, reappointment of four independent directors, and two intra-group amalgamations (one of them with GMR Warora Energy, a step-down subsidiary) [V BSE AGM voting results; the amount is not stated in the voting document].
- Infomerics rating updates followed on 25-Feb and 29-May-26 [V screener doc list].

### 6a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹7,332 cr | ₹6,344 cr | **+15.6%** [V screener] |
| Operating profit (screener, ex-OI) | ₹1,604 cr (21.9%) | ₹1,534 cr (24.2%) | [V] |
| Other income | ₹1,528 cr | ₹2,228 cr | Haryana discom LPS/claim recoveries, exceptional gains at Kamalanga (₹3.2 bn) and Warora (₹1.2 bn) [V Q1 deck; screener] |
| EBITDA incl OI | ≈₹3,132 cr | ≈₹3,762 cr | [E]. Recurring EBITDA is closer to screener OP |
| PAT (reported) | ₹614 cr | ₹1,552 cr | −60% [V]. Screener P/E is blank and ROE shows −42.8%, which points to a TTM loss after minorities [V] |
| ROCE | 12.0% | 13% | [V] |
| Borrowings (Mar-26) | ₹11,594 cr (LT 9,657 + ST 1,847 + lease 90) | ₹10,259 cr | [V screener schedules] |
| Cash equivalents | ₹1,174 cr | ₹986 cr | Investments ₹1,190 cr [V] |
| Net debt | Screener ≈₹10,420 cr (Mar-26). **Company: ₹9,300 cr consolidated at 30-Jun-26**: energy ₹5,540 cr, smart meters ₹1,440 cr, highways ₹740 cr, corporate ₹1,310 cr, SEZ ₹230 cr | | [V Q1 FY27 deck]. **Proforma net debt including Bajoli Holi and GREL about ₹12,900 cr; proforma ND/LTM EBITDA about 4.5x** [V deck chart] |
| Net debt / EBITDA | ≈6.5x (screener OP) / ≈3.3x (incl OI) | | [E] |
| CFO / FCF | ₹1,260 cr / ₹1,233 cr | ₹2,833 / ₹2,742 cr | [V] |
| Market cap | **₹7,965 cr** @ ₹102 (13-Oct-2026, screener fetch 16:30 UTC) | | 52-wk H/L ₹136 / ₹86.7 [V]. Below the ₹120.88 preferential price |
| P/E (TTM) | n.m. (screener blank) | | |
| P/B | 4.2x (BV ₹24.4; net worth ≈₹1,904 cr) | | [V/E] |
| EV/EBITDA (TTM) | ≈10.7x on OP / ≈5.7x incl OI | | EV ≈ ₹17,265 cr using company net debt [E] |

### 6b. Latest quarter: Q1 FY27 (Jun-26). Investor deck 14-Aug-26. Q2 FY27 is not out as of 13-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops (screener) | ₹1,705 cr | ₹1,648 cr | +3.5% [V] |
| Total income (company) | ₹1,750 cr | — | −1% YoY, −15% QoQ. Energy ₹1,390 cr (₹1,450 cr); **smart meters ₹230 cr** (₹185 cr; Q4 FY26 ₹520 cr) [V deck] |
| EBITDA (company) | ₹500 cr (28%) | ≈₹520 cr | −4%. Excluding OI: ₹450 cr (+13%) [V] |
| Finance cost | ₹318 cr | ₹441 cr | Non-cash finance cost fell from ₹121 cr to ₹3 cr [V] |
| PAT (continuing) | **−₹35 cr** | −₹7 cr | [V screener; deck] |

### 6c. Native power KPIs
- **Capacity:** **operational coal 1,650 MW**: **Kamalanga 1,050 MW** (Odisha; 100% after buying IDFC First's 2.37% in Mar-26) and **Warora 600 MW** (Maharashtra; 92.07%). **Solar 36 MW, wind 3.4 MW.** Gas: Vemagiri and Rajahmundry are held at **49%** (JVs) after framework agreements to divest 51% each. **Bajoli Holi 180 MW hydro: a framework agreement exists to divest 79.86%**, leaving only a residual minority. Under development: a 350 MW brownfield thermal expansion, about 26 MW AC of solar at Kamalanga, and **1,425 MW of hydro** (Talong; Alaknanda; Upper Karnali in Nepal, 73%) [V Q1 deck].
- **PLF** [V deck]:

| Plant | Q1 FY26 | Q4 FY26 | Q1 FY27 | FY25 | FY26 |
|---|---|---|---|---|---|
| Warora | 88% | 91% | 90% | 85% | 85% |
| Kamalanga | 91% | 92% | 87% (Unit-2 overhaul) | 86% | 87% |

  The All-India private IPP average was about 77% in Q1.
- **Plant economics, Q1 FY27 (₹ mn)** [V deck]:
  - **Kamalanga:** revenue 6,690, EBITDA 2,514, PAT 970, **net debt 20,690** (24,031 a year earlier). FY26: total income ₹2,850 cr, EBITDA ₹940 cr, PAT ₹510 cr including a ₹320 cr exceptional gain.
  - **Warora:** revenue 4,833, EBITDA 1,848 (+19%), PAT 758, net debt 18,936 (22,778). FY26: EBITDA ₹570 cr, PAT ₹310 cr including a ₹120 cr exceptional gain.
  - Warora is being refinanced "to mobilise cash flows".
- **Discom dues and arbitration:** the overdue **Haryana discom claim has been realised**, so LPS other income is falling. Overdue accounted receivables are about **₹680 cr** (energy about ₹180 cr; DFCC about ₹500 cr), excluding claims under litigation. **DFCC prolongation claims total ₹2,829 cr**, of which ₹506 cr is considered so far. **Ambala–Chandigarh** traffic-diversion claim: NHAI's SLP in the Supreme Court is challenging the Delhi HC order for de novo arbitration [V deck].
- **Smart meters:** 7.57 mn meters across three UP clusters (Kashi 2.73 mn, Triveni 2.29 mn, Agra 2.55 mn; PuVVNL and DVVNL), contract value **₹7,590 cr** including GST. **About 41 lakh (4.1 mn) installed by 31-Jul-26.** The installation deadline has been **extended to 31-Mar-28**. Bosch (BGSW) holds 10% of each SPV and is the IT partner [V deck].
- **Merchant share:** coal output is PPA-tied (Kamalanga with GRIDCO, Haryana and Bihar; Warora with MSEDCL and DNH) [K, prior company disclosures]. GMR also has an energy-trading arm.
- **Pledge:** screener shows **60.0% of promoter holding pledged** [V screener page].
- **Management:** promoter group GMR Enterprises (G.M. Rao family). CS Vimal Prakash [V deck]. CEO and CFO names were not verified this session.

### 6d. Ownership (screener SHP, Jun-2026 [V])
Promoter **46.28%** (50.56% before the preferential issue). **FII 16.00%** (3.43% in Mar-26), DII 5.47%, public 32.23%. The FII jump coincides with the preferential allottees being reclassified [E]. 3.25 lakh shareholders. The Sep-26 SHP is not on screener.

### 6e. Concentration
In Q1 FY27 energy was 79% of income and 92% of EBITDA [V deck]. Two coal plants and their discom PPAs (Odisha/GRIDCO, Haryana, Maharashtra). The smart-meter book depends on two UP discoms.

### 6f. Story bullets
1. **A coal cash engine running hot:** Warora at 90% and Kamalanga at 87% PLF. Plant-level net debt is down about ₹770 cr YoY combined. Recurring EBITDA excluding OI rose 13% in Q1.
2. **Reported profits are fading as one-offs end.** LPS from the Haryana dues has dried up, and Q1 showed a loss (−₹35 cr). The equity case is deleveraging: net debt ₹9,300 cr consolidated, about 4.5x proforma.
3. **Smart meters are a second engine but lumpy:** revenue was ₹520 cr in Q4 and ₹230 cr in Q1. About 41 lakh of 75.7 lakh meters are installed, and the deadline has moved to Mar-28.
4. **Capital actions:** ₹1,200 cr preferential issue (promoter diluted to 46%), QIP/FCCB enabler (Sep-26), and divestment of the gas JVs and Bajoli Holi. The price of ₹102 is below the ₹120.88 issue price.

### 6g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 1,737 | 1,648 | 1,810 | 1,869 | 2,004 | 1,705 |
| Operating Profit | 290 | 401 | 341 | 369 | 459 | 446 |
| OPM % | 17% | 24% | 19% | 20% | 23% | 26% |
| Other Income | 291 | 213 | 1,134 | 104 | 112 | 44 |
| Interest | 394 | 441 | 446 | 379 | 392 | 318 |
| Depreciation | 148 | 160 | 164 | 166 | 176 | 163 |
| Profit before tax | 38 | 13 | 865 | -72 | 2 | 9 |
| Net Profit | 49 | -7 | 895 | -160 | -114 | -35 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 4,102 | 5,516 | 4,489 | 6,344 | 7,332 | 7,389 |
| Operating Profit | 495 | 427 | 914 | 1,534 | 1,604 | 1,614 |
| OPM % | 12% | 8% | 20% | 24% | 22% | 22% |
| Other Income | 441 | 2,304 | 755 | 2,228 | 1,528 | 1,394 |
| Interest | 1,354 | 1,350 | 1,477 | 1,571 | 1,659 | 1,536 |
| Depreciation | 128 | 149 | 286 | 600 | 666 | 669 |
| Net Profit | -652 | 1,139 | -127 | 1,552 | 614 | 585 |
| EPS in Rs | -10.73 | 19.60 | -1.71 | 19.83 | 7.69 | 8.11 |
| Dividend Payout % | 0% | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 302 | 302 | 357 | 391 |
| Reserves | -2,923 | -3,219 | 229 | 1,513 |
| Borrowings | 8,216 | 13,876 | 10,259 | 11,594 |
| Fixed Assets | 2,912 | 10,938 | 8,167 | 7,671 |
| CWIP | 0 | 358 | 505 | 457 |
| Investments | 2,111 | 650 | 365 | 1,190 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 1,230 | 1,690 | 2,833 | 1,260 |
| Cash from Investing Activity | 3,120 | -902 | -157 | -806 |
| Free Cash Flow | 1,301 | 1,651 | 2,742 | 1,233 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 36 | 125 | 98 | 59 |
| ROCE % | 19% | 12% | 13% | 12% |


---

## 7. RattanIndia Power Ltd (NSE: RTNPOWER · BSE: 533122)

**Status:** listed, active. Face value ₹10. Equity ₹5,370 cr, so about 537 cr shares. There is no merger. **The Nashik/Sinnar plant is no longer part of the group.**
- Sinnar Thermal Power Ltd (5×270 MW) was admitted to CIRP on Shapoorji Pallonji's petition (NCLT Delhi, 19-Sep-22) and ceased to be a subsidiary on 18-Jan-24 [V RPL AR FY26, related-party note].
- The **NTPC–MAHAGENCO 50:50 consortium completed its acquisition on 24-Feb-2026** for ₹3,800 cr under the NCLT-approved plan of 28-Nov-25 [V NTPC BSE/NSE disclosure 25-Feb-26; consideration from insolvencytracker snippet].
- RPL's interlocutory application against STPL for CIRP costs was dismissed on 14-Oct-25 [V AR].
- **RattanIndia Power is now a single-plant company: Amravati, 1,350 MW.**

### 7a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:30 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹2,991 cr | ₹3,284 cr | **−8.9%** ("lower power tariff") [V screener; AR] |
| Operating profit (screener, ex-OI) | ₹405 cr (13.5%) | ₹585 cr (17.8%) | [V] |
| EBITDA incl OI | ≈₹760 cr | ≈₹942 cr | [E]. OI of ₹355 cr is largely carrying cost and late-payment interest on Change-in-Law receivables |
| PAT | ₹52 cr | ₹222 cr | −76% [V; AR ₹52.44 cr] |
| ROCE / ROE | 6.21% / 1.14% | 9% / — | [V] |
| Borrowings (Mar-26) | ₹3,711 cr (LT 2,728 + ST 909 + lease 73) | ₹3,615 cr | [V screener]. Composition per the AR: **₹2,682 cr of ICDs from promoter-group RR Infralands** (elevated ₹1,017 cr, of which ₹550 cr bullet is due Jun-27; subordinate ₹1,665 cr, of which ₹900 cr bullet is due Sep-27). OCCRPS ₹377 cr (due Dec-26). Overdue OTS RPS ₹250 cr. Facility C ₹47 cr (Jun-27) [V AR note 15]. **The secured NCD Series II and III were fully repaid in FY26** |
| Cash equivalents | ₹75 cr | ₹363 cr | [V]. Pledged FDs ₹62 cr [V AR] |
| Net debt | ≈₹3,636 cr | ≈₹3,252 cr | [E]. About 74% is owed to the promoter group |
| Net debt / EBITDA | ≈4.8x (incl OI) / ≈9.0x (OP) | | [E]. AR debt/equity 0.75x; interest cover 1.10x [V AR] |
| Receivables | ₹2,757 cr; **debtor days 336** | ₹2,435 cr | Mostly MSEDCL Change-in-Law dues [V screener] |
| CFO / FCF | ₹372 cr / ₹294 cr | ₹410 / ₹293 cr | [V] |
| Market cap | **₹3,576 cr** @ ₹6.67 (13-Oct-2026, screener fetch 16:30 UTC) | | 52-wk H/L ₹11.7 / ₹6.33. Near the low [V] |
| P/E (TTM) | 32.1x | | TTM PAT ₹111 cr [V] |
| P/B | 0.77x (BV ₹8.64; reserves −₹732 cr) | | [V/E] |
| EV/EBITDA (TTM incl OI) | ≈9.5x | | EV ≈ ₹7,210 cr; EV/MW ≈ ₹5.3 cr [E] |

### 7b. Latest quarter: Q1 FY27 (Jun-26). Earnings update 24-Jul-26. Q2 not out
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops (standalone) | ₹798.6 cr | ₹822.0 cr | −2.8% [V company earnings update]. Consolidated ₹799 cr [V screener] |
| Other income | ₹77.0 cr | ₹108.1 cr | [V] |
| Fuel cost | ₹611.1 cr | ₹653.6 cr | [V] |
| Finance cost | ₹85.9 cr | ₹148.2 cr | **−42%** after the NCD repayment [V] |
| PAT | **₹44.4 cr** (consol ₹46 cr) | −₹14.6 cr | Turnaround [V] |
| PLF / PAF | **92.43% / 98.15%** | — | 449 coal rakes received (4.9/day) [V] |
| Merchant | 17.99 MU sold on IEX for ₹15.05 cr (≈₹8.4/kWh) | | [V/E] |

### 7c. Native power KPIs
- **Capacity:** **Amravati 1,350 MW** (5×270 MW subcritical, COD Mar-2015), design output 11,826 MU a year. **1,200 MW is under a 25-year PPA with MSEDCL**; 28 MW is sold in the open market. Coal comes under an FSA with SECL (6.10 MTPA), and water from Upper Wardha (60 MCM). There is a 35 km dedicated rail siding [V Q1 deck]. No expansion is announced.
- **PLF and PAF trend** [V deck chart]: PLF FY22 about 75% → FY25 about 82% → FY26 about 78–81% → **Q1 FY27 92%**. PAF has been 86–98%. FY26 generation sales were **8,958 MU** (FY25 8,546 MU) [V AR table]. IEX sales in FY26: 22.19 MU for ₹16.38 cr [V AR].
- **Tariff:** an MSEDCL bid tariff with Change-in-Law pass-throughs. Revenue per unit fell in FY26 ("lower power tariff"). FY26 realisation is about ₹3.34/kWh (revenue ÷ MU) [E].
- **Discom dues and regulatory receivables:** **₹876.84 cr of Change-in-Law claims received to date** under MERC and APTEL orders. APTEL (8/15-May-25) also allowed ash-transport and SECL STC/sizing charges as change in law. MSEDCL has appealed to the Supreme Court (4-Aug-25), and RPL filed a remand petition with MERC on 10-Jul-25. **MSEDCL paid ₹44.73 cr for ash transport in Q1 FY27** [V deck; AR].
- **Legal:** the **BHEL arbitral award (3-Oct-26) on Amravati Phase-II** went net against RPL: **₹170.78 cr plus interest on part**. "Most BHEL claims rejected"; RPL is evaluating a challenge [V BSE filing]. **An RPS holder's IBC petition** (₹28.72 cr) was dismissed by NCLT on 17-Sep-25; the parallel petition against subsidiary PPDL was dismissed on 7-Nov-25 and is under NCLAT appeal. The **₹250 cr of OTS RPS remains unredeemed** because of s.55 (accumulated losses) [V AR].
- **Debt resolution history:** the Dec-2019 OTS assigned Amravati debt to Aditya Birla ARC [K, primer]. NCDs (Series I–III, about ₹1,100 cr, Kotak-arranged per the primer) were fully repaid by FY26. The **residual funding is promoter ICDs**, with bullets due in Jun and Sep-27, so **refinancing in FY28 is the watch item**.
- **Pledge:** the AR describes a pledge of 209.76 cr promoter shares (RattanIndia Enterprises and RR Infralands) securing the now-repaid NCDs. **Screener shows no promoter pledge** [V screener page; AR]. Release is implied but not separately verified.
- **Rating:** CRISIL updated on 6-Aug-26; the primer describes it as an upgrade [V screener doc list].
- **Management:** **Rajiv Rattan, Executive Chairman.** WTDs Himanshu Mathur and Ravi Kumar Pakalapati. **CFO Manish Ratnakar Chitnis**. CS Lalit Narayan Mathpati. The 2026 AGM approved an office-of-profit appointment for Dhruv Rattan Nashier, Rajiv Rattan's son. T R Chadha & Co. were appointed statutory auditors for 5 years (AGM 24-Sep-26) [V AR; BSE].

### 7d. Ownership (screener SHP, Jun-2026 [V])
Promoter **44.06%**, unchanged since 2022. FII 5.25%, DII 6.58%, public 44.10%. **19.1 lakh shareholders.** The Sep-26 SHP is not on screener.

### 7e. Concentration
**One plant and one customer:** 100% of contracted revenue comes from MSEDCL. Coal is single-source from SECL.

### 7f. Story bullets
1. **An operating peak.** Amravati ran at 92% PLF and 98% availability in Q1 FY27. Finance cost fell 42% after the NCDs were repaid, and Q1 PAT was ₹44 cr against a loss a year earlier.
2. **Clean-up done; the Sinnar overhang is gone.** NTPC and MAHAGENCO own Sinnar from Feb-26. External secured debt is essentially retired. **About 74% of the remaining ₹3.7k cr debt is owed to the promoter group (RR Infralands), with bullets in Jun and Sep-27.**
3. **Working capital is the drag:** ₹2.76k cr of receivables (336 days), mostly MSEDCL Change-in-Law dues sub judice in the Supreme Court. The BHEL award adds a ₹171 cr liability.
4. **Valuation:** m-cap ₹3.6k cr, 16% below the primer's ₹4.27k cr (Aug-26). Price ₹6.67 is near its 52-wk low. P/B 0.77x; EV/MW about ₹5.3 cr.

### 7g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 936 | 822 | 654 | 728 | 788 | 799 |
| Operating Profit | 212 | 97 | 52 | 127 | 130 | 125 |
| OPM % | 23% | 12% | 8% | 18% | 16% | 16% |
| Other Income | 92 | 99 | 90 | 99 | 67 | 68 |
| Interest | 118 | 148 | 112 | 110 | 91 | 86 |
| Depreciation | 60 | 61 | 61 | 61 | 64 | 61 |
| Profit before tax | 126 | -13 | -32 | 54 | 43 | 46 |
| Net Profit | 126 | -13 | -32 | 54 | 43 | 46 |

**Annual P&L (last five years + TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 3,260 | 3,231 | 3,364 | 3,284 | 2,991 | 2,968 |
| Operating Profit | 803 | 738 | 646 | 585 | 405 | 434 |
| OPM % | 25% | 23% | 19% | 18% | 14% | 15% |
| Other Income | -28 | 328 | 10,976 | 357 | 355 | 324 |
| Interest | 2,342 | 2,512 | 2,363 | 479 | 461 | 399 |
| Depreciation | 414 | 404 | 382 | 241 | 246 | 247 |
| Net Profit | -1,981 | -1,870 | 8,897 | 222 | 52 | 111 |
| EPS in Rs | -3.69 | -3.48 | 16.57 | 0.41 | 0.10 | 0.21 |
| Dividend Payout % | 0% | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Equity Capital | 5,370 | 5,370 | 5,370 | 5,370 |
| Reserves | -9,903 | -1,006 | -785 | -732 |
| Borrowings | 11,018 | 3,562 | 3,615 | 3,711 |
| Fixed Assets | 13,051 | 6,412 | 6,253 | 6,103 |
| CWIP | 1,110 | 67 | 65 | 21 |
| Investments | 8 | 0 | 0 | 0 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 1,015 | 1,306 | 410 | 372 |
| Cash from Investing Activity | -5 | -462 | 87 | 66 |
| Free Cash Flow | 985 | 1,207 | 293 | 294 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 282 | 224 | 271 | 336 |
| ROCE % | 9% | 8% | 9% | 6% |


---

# PRIMER ISSUES (batch 2)

**Method:** for each primer I read the cover strip, the "What's new" box and the first sections (snapshot, model, company/owners, assets). I then grepped for m-cap, P/E, capacity, revenue, promoter %, pledge, debt, management, legal matters and key projects. I compared all of this with the screener fetch of 13-Oct-2026 16:30 UTC and with the company filings fetched this session. The primers were refreshed between 11-Jul and 29-Aug-2026, and **none of them carries Q1 FY27 (Jun-26 quarter) results**. This holds even for KPI (refreshed 14-Aug), GMR (14-Aug) and RattanIndia (29-Aug), whose Q1 results were already out. Every m-cap is stale.

## 1. primers/sjvn.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap / price | "~₹27,900 Cr Market cap (Jul '26)"; "share ~₹71" | **₹22,034 cr @ ₹56.1** (13-Oct-26); 52-wk low ₹53.7 | screener [V] |
| 2 | Stale P/E, yield | "P/E (consolidated) ~43×"; "~2% yield" | **34.5x** TTM; yield **2.68%**; P/B 1.55x | screener [V] |
| 3 | **Wrong operating capacity (cover strip and throughout)** | "~2.0 GW oper. · 12+ plants"; "today's ~2 GW base"; RE "~90 MW solar, ~98 MW wind" | **4,196.5 MW across 15 projects at 31-Mar-26** (1,730 MW added in FY26: Bikaner 1,000 MW solar, Dhubri, others, Buxar U1 660 MW). **About 4.93 GW by Oct-26** after Buxar U2 (COD 12-Sep-26) and Jamui 75 MW (Aug-26) | Q4 FY26 transcript; CARE PR; uniindia; SJVN PR [V] |
| 4 | Buxar shown as pipeline | Buxar is listed in "the build pipeline" and as "adds… capacity" | **U1 COD 14-Nov-25; U2 COD Sep-26.** All 1,320 MW are commercial. Regulated equity is about ₹4,000 cr | transcript; uniindia [V] |
| 5 | Stale generation | "record ~10,647 million units… in FY25" | **FY26 13,302 MU (+25%)**; NJHPS 7,506 MU, Rampur 2,108 MU | transcript [V] |
| 6 | Vision presented as live | "~12 GW by ~2027, ~25 GW by 2030 and ~50 GW by 2040" | The CMD said in May-26 that the targets are **under review** and a new "realistic" business plan is coming. Guidance: FY27 about 2,284 MW, FY28 about 650 MW, FY29–30 about 2,500 MW | transcript [V] |
| 7 | Stale capex | "SJVN guided ~₹12,000 Cr for FY26" | FY27 **₹9,400 cr**, FY28 ₹7,800 cr, FY29 ₹7,500 cr (CARE: ₹7–10k cr a year) | transcript; CARE [V] |
| 8 | Arun-3 timing missing | "biggest execution watch-item" (no date) | SCOD moved from Dec-25 to **Mar-28** (CARE); management targets all units by **Dec-28** | CARE; transcript [V] |
| 9 | Dhaulasidh size | "Dhaulasidh Hydro · Himachal 66" | **69.5 MW**, target Mar-27 | transcript [V] |
| 10 | Missing Q1 FY27 | none | Revenue **₹1,394 cr (+52%)**, PAT ₹225 cr (−1%); fuel cost ₹243 cr; finance cost +51% | screener; Mercom [V] |
| 11 | Missing leverage and REIA risk | Borrowings "~₹32,000 Cr" (correct) | Debt/EBITDA **9.6x**, gearing 2.3x. Short-term construction loans fall due **Sep-27**. About 9 GW of REIA awards have no PSA (6 GW signed out of about 15 GW) | CARE; transcript [V] |
| 12 | Missing governance items | none | BSE/NSE fine of ₹13.44 lakh (Sep-26) for board composition. New GoHP nominee director (12-Oct-26). Director (Projects) is now Rajesh Chandel | screener/BSE list; SJVN PR [V] |

## 2. primers/acme-solar-holdings.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹26,900 Cr Market cap (Jul '26)" | **₹29,275 cr @ ₹414** (13-Oct-26) | screener [V] |
| 2 | P/E | "roughly the mid-50s×" | **49.2x** TTM; P/B 4.96x | screener [V] |
| 3 | **Revenue basis** | "~₹2,507 Cr Revenue (FY26)" (+59%) | **Revenue from ops ₹2,023 cr (+44%)**. ₹2,505 cr is total income including ₹482 cr of other income | screener [V] |
| 4 | **Stale promoter stake** | "~83% founder-held"; "~83%" | **71.40% (Jun-26)** after the **₹2,800 cr QIP (Jun-26)**. DII 19.10% | screener SHP; Q1 deck; renewablewatch [V] |
| 5 | Missing QIP / deleveraging | "IPO proceeds used to cut debt" only | QIP of ₹2,800 cr (about 10 cr shares). Operational ND/TTM EBITDA **2.9x** (4.2x a year earlier). Net debt **₹12,600 cr at 30-Jun-26** | Q1 deck [V] |
| 6 | BESS figure / unit | "~2.3 GW of battery storage commissioned" (FY26) | About 1.3 GWh at FY26-end; **3.62 GWh at Jul-26** (2.3 GWh added in Q1 FY27). Guidance **above 10 GWh by FY27** (raised from CY27) | Q1 deck and transcript [V] |
| 7 | Stale PPA-signed figure | "~6,570 MW already has PPAs signed" | **6,870 MW** (600 MW signed with SECI in Q1); 1,200 MW still LoA-only | Q1 deck [V] |
| 8 | Growth target framing | "~7 GW operational by FY28", "₹5,900 Cr revenue / ₹950 Cr PAT FY28" | Current deck targets: **10 GW + 25 GWh by 2030**; FY27 RE commissioning about 1.5 GW; capex FY27 **₹15–20k cr**. The FY28 numbers were not found in the documents fetched | Q1 deck and transcript [V]. Primer FY28 figures unverified |
| 9 | Missing Q1 FY27 | none | Total income ₹954 cr (+63%), EBITDA ₹831 cr (+57%), **PAT ₹235 cr (+80%)**, CUF **30.9%**, BESS revenue ₹226 cr | Q1 deck [V] |
| 10 | Missing incident and management | none | **BESS fire at ACME Suryodaya (13-Jul-26)**: AC cable short; RCA done. CEO Nikhil Dhingra; CFO Arun Chopra | Q1 deck and transcript [V] |
| 11 | Rating | n.a. | ICRA AA−/Stable reaffirmed and enhanced to ₹3,500 cr (7-Oct-26) | BSE filing [V] |

## 3. primers/jaiprakash-power.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹11,555 Cr Market cap (mid-2026)" | **₹10,314 cr @ ₹15.1** (13-Oct-26). Below APL's ₹18.2/share entry | screener [V] |
| 2 | P/E | "~25×" trailing | **12.4x** TTM (Q1 FY27 PAT ₹469 cr); P/B 0.81x | screener [V] |
| 3 | **Wrong EBITDA margin** | "~44% FY26 EBITDA margin" (elsewhere "~27–28%") | **28.5%** (company PBIDT ₹1,586 cr on ₹5,563 cr); screener OP margin 24.6% | AR FY26; screener [V] |
| 4 | Revenue basis | "~₹5,792 Cr Revenue (FY26)" | Revenue from ops **₹5,563 cr**. ₹5,791 cr is total income including OI | AR; screener [V] |
| 5 | **Overstated control** | "Adani Power as its new controlling shareholder"; "the promoter shareholding… passed to Adani Power" | APL holds **24%** (164.48 cr shares for ₹2,993.6 cr). JPVL is an **associate**, not a subsidiary. The deal was **exempt from an open offer**. APL denied Sep-26 reports of going to 51% | AR FY26; outlookbusiness; filingreader; kotakneo [V] |
| 6 | Stale net debt | "net debt ~₹1,360 Cr (approx., Sep-2025)" | About **₹1,382 cr at Mar-26** (borrowings ₹3,391 cr, cash ₹2,009 cr) | screener [V] |
| 7 | NARCL IBC status stale | "As of early 2026 it had not been scheduled…" | **Settled 19-Sep-26 for ₹511 cr "full and final"**, subject to definitive agreements; the IBC petition to be withdrawn | BSE filing [V] |
| 8 | Missing board and KMP change | none | Board reconstituted on 22-May-26 with **Savan J. Patel (Adani) as WTD**. Suren Jain (MD & CEO) and others left. CFO R.K. Porwal and CS Mahesh Chaturvedi retired on 30-Sep-26 | AR; BSE filing [V] |
| 9 | Missing Q1 FY27 and coal-mine charge | Coal-mine surrender mentioned | Q1 revenue ₹1,776 cr (+12%), **PAT ₹469 cr** helped by a tax-regime change. **₹193.6 cr exceptional charge for the mine surrender** | screener [V]; exceptional figure from snippet |
| 10 | Merchant exposure understated | "sells… into the merchant power market" (no figure) | **Nigrie sold 5,799 MU merchant (about 60%)**; Bina sold 1,375 MU outside the PPA. About half of total energy is merchant | AR FY26 [V] |
| 11 | Pledge | "pledge picture should change" | Screener still flags **73% of promoter holding pledged** (Jun-26 SHP) | screener [V] |
| 12 | Upcoming event | n.a. | **Q2 FY27 board meeting 19-Oct-26** | BSE intimation [V] |

## 4. primers/reliance-power.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap / price | "~₹10,058 Cr Market cap (Jun 2026)"; "share ~₹24.5" | **₹8,271 cr @ ₹20.0** (13-Oct-26), at the 52-wk low (₹19.1); P/B **0.52x** | screener [V] |
| 2 | Sasan PLF | "Sasan PLF ~91%" (FY26) | **About 87%**, with 30,092 MU in FY26 | AR FY26 [V] |
| 3 | Wrong wind asset | "a wind farm in Maharashtra of roughly 45 MW" | **5 MW wind in Tamil Nadu** (Kollupalyam/Pavoorchatram), now **ED-attached** | AR FY26 [V] |
| 4 | Wrong fund-raise size | "enabling resolution for a capital raise of up to ₹9,000 Cr" | The board (21-May-26) sought an enabler of **up to ₹6,000 cr** (QIP/PP/FPO) plus **NCDs up to ₹3,000 cr**; FCCB authority of US$600 mn. The primer appears to add the two together | AR notice [V] |
| 5 | Wrong SJVN award | "Reliance NU Energies separately wins 350 MW from SJVN" | **Two SJVN projects**: 350 MW + 175 MW/700 MWh and 650 MW + 750 MW/3,300 MWh, about **1,500 MWp solar + 4,000 MWh BESS** in total | AR FY26 [V] |
| 6 | SECI project timing | "~24-month build clock… mid-2027" | **Connectivity at Kurnool-IV starts 30-May-2029** (final grant 12-Jun-26), so commissioning before then is constrained | AR FY26 note [V] |
| 7 | **Missing legal events** | ED attachments, CBI search (Jul-26), SEBI settlement rejection | **Named accused in the CBI RCFL supplementary chargesheet (7-Sep-26) and the RHFL second chargesheet (1-Oct-26).** ED supplementary prosecution complaint against RPower, Rosa and NU BESS. **ED attachment confirmed 18-May-26** (365 days). **SEBI forensic audit (14-Jan-26)** and SCNs (Sep-25, Apr-26). Former CFO Ashok Kumar Pal arrested | BSE filings; AR [V] |
| 8 | Missing going-concern flag | none | **Auditor flagged "Material Uncertainty related to Going Concern"**: an Apr-26 IBC application against RPower as guarantor of Samalkot debt (US$165.4 mn), not yet admitted | AR auditor's report [V] |
| 9 | SECI debarment status | not stated precisely | SECI debarment (Nov-24) **stayed by Delhi HC for RPower and all subsidiaries except Reliance NU BESS** | outlookbusiness [V] |
| 10 | Missing Bhutan, Bangladesh, warrants | none | Bhutan: 500 MWp solar JV (50:50) + 770 MW hydro with DHI. **Meghnaghat 718 MW CCGT COD Jul-25**. **34.32 cr warrants lapsed** | AR FY26 [V] |
| 11 | Missing management and Q1 | none | ED, CEO and CFO **Neeraj Parakh**; director Sachin Mohapatra resigned on 25-Sep-26. Q1 FY27 PAT **₹65 cr** (+45%) on revenue of ₹1,956 cr | AR; screener [V] |
| 12 | Leverage ratio | "debt-to-EBITDA ratio around 10.25×" | FY26 net debt / screener OP about **5.5x** (borrowings ₹14,812 cr, cash ₹1,705 cr, OP ₹2,365 cr) | screener [E] |

## 5. primers/kpi-green-energy.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | M-cap / P/E | "~₹6,300–6,400 Cr market cap"; "~12–13×" | **₹6,459 cr @ ₹327** (13-Oct-26); P/E **14.2x**. The company deck showed ₹7,314 cr on 10-Aug-26 | screener; Q1 deck [V] |
| 2 | Revenue basis | "~₹2,742 Cr Total income" (labelled correctly) | Revenue from ops **₹2,696 cr (+55%)** | screener [V] |
| 3 | Stale capacity | "~1.62 GW installed (Mar 2026)"; "~6.26 GW portfolio"; "4.64 GW under execution" | Jun-26: **installed 1.87 GW, WIP 5.07 GW, portfolio 6.94 GW**. IPP installed was 1.16 GW by Sep-26 | Q1 deck; BSE PR [V] |
| 4 | Stale enablers | "6,000+ acre land bank, ~3.4 GW evacuation" | **8,657 acres; 5.10 GW** of evacuation | Q1 deck [V] |
| 5 | Borrowings basis | "borrowings… ~₹4,532 Cr" | Excluding leases that is correct. **Including ₹665 cr of leases, ₹5,197 cr**; net debt about ₹4.6k cr, about 4.6x EBITDA | screener schedules [V] |
| 6 | **Missing acquisition** | none | **Binding offer for 507.9 MW of operating SECI wind (Alfanar 301.4 MW + Netra 206.5 MW), EV ≈ ₹2,410 cr**, closing by 28-Feb-27 | BSE PR 30-Sep-26 [V] |
| 7 | Missing management change | none | **Group CEO Dr. Alok Das resigned** (effective 1-Oct-26). **BDO appointed as auditor** | BSE filing; Q1 call [V] |
| 8 | Missing Q1 FY27 | none | Revenue ₹694 cr (+15%), EBITDA ₹262 cr (+21%), **PAT ₹95 cr (−14%)**. FY27 PAT margin guided below the earlier 16–18% | Q1 deck and transcript [V] |
| 9 | Promoter stake | "controlling stake" (no %) | **49.41%** reported (51.9% diluted for warrants); pledge 44.7% (primer correct) | screener; Q1 deck [V] |
| 10 | BESS / new verticals | "Push into BESS, floating solar…" | **565 MW/1,130 MWh BESPA signed**; 142 MW Kadana floating-solar EPC; CERC and GERC trading licences | Q1 deck [V] |

## 6. primers/gmr-power-urban-infra.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹7,640 Cr Market cap (Aug 2026)" | **₹7,965 cr @ ₹102** (13-Oct-26) | screener [V] |
| 2 | **Gas and hydro ownership** | "GPUIL owns roughly 2,300 MW of gas-fired capacity"; "The 180 MW Bajoli Holi… genuinely good asset" | **Vemagiri and Rajahmundry now 49% JVs** after a framework agreement to divest 51% each. **A framework agreement exists to divest 79.86% of Bajoli Holi**, leaving only a minority stake | Q1 FY27 deck [V] |
| 3 | Promoter / capital actions missing | "GEPL controls the company" (no %) | **Promoter 46.28%** after the **₹1,200 cr preferential issue at ₹120.88** (Jan-26). FII rose to 16.0%. **AGM (21-Sep-26) approved a QIP/FCCB enabler** | screener SHP; filingreader; BSE AGM results [V] |
| 4 | Net debt framing | "₹11,600 Cr gross debt" only | Correct gross. **Company net debt ₹9,300 cr (30-Jun-26)**; proforma ND/LTM EBITDA **about 4.5x** | Q1 deck [V] |
| 5 | Missing operating KPIs | No PLF given | **Warora 90%, Kamalanga 87% PLF** (Q1 FY27); FY26 85% and 87% | Q1 deck [V] |
| 6 | Smart-meter status | "fast-growing smart-meter business" | **7.57 mn meters, ₹7,590 cr contract; about 41 lakh installed (31-Jul-26)**; deadline extended to **31-Mar-28**. Q1 revenue ₹230 cr against ₹520 cr in Q4 (lumpy) | Q1 deck [V] |
| 7 | Missing Q1 FY27 | none | Total income ₹1,750 cr (−1%), EBITDA ₹500 cr (−4%), **PAT −₹35 cr**. The Haryana LPS has ended | Q1 deck; screener [V] |
| 8 | Kamalanga stake | n.a. | **100%** after buying IDFC First's 2.37% (Mar-26) | Q1 deck [V] |

## 7. primers/rattanindia-power.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Sinnar wrongly shown as owned** | "2,700 MW… split across two identical plants… Amravati and Sinnar"; "the dark twin… the prize nobody prices"; "free but unpredictable extra" | Sinnar Thermal (1,350 MW) went into **CIRP in Sep-22** and stopped being a subsidiary in **Jan-24**. It was **acquired by the NTPC–MAHAGENCO consortium on 24-Feb-26**. RattanIndia owns **only Amravati 1,350 MW** | NTPC disclosure; RPL AR FY26 [V] |
| 2 | Stale m-cap / price | "~₹4,269 Cr Market cap (Aug 2026)"; "roughly ₹8 a share" | **₹3,576 cr @ ₹6.67** (13-Oct-26) | screener [V] |
| 3 | P/E | "~38×" | **32.1x** TTM; P/B 0.77x | screener [V] |
| 4 | Stale PLF | "Amravati… ~80%+ PLF"; "~82%" | **Q1 FY27 PLF 92.43%, PAF 98.15%** | Q1 earnings update [V] |
| 5 | **Debt holder narrative stale** | ARC (Aditya Birla, Goldman, Värde) and Kotak NCDs "woven into the capital structure" | NCD Series II and III **fully repaid in FY26**. **₹2,682 cr of the ₹3,711 cr debt is ICDs from promoter-group RR Infralands** (bullets of ₹550 cr Jun-27 and ₹900 cr Sep-27). OCCRPS ₹377 cr; overdue RPS ₹250 cr | AR FY26 note 15 [V] |
| 6 | Missing BHEL award | none | **Arbitral award (3-Oct-26): net ₹170.78 cr plus interest payable to BHEL** (Amravati Phase-II) | BSE filing [V] |
| 7 | Missing Q1 FY27 | none | **PAT ₹44.4 cr** (vs −₹14.6 cr); finance cost −42% | Q1 earnings update [V] |
| 8 | Receivables risk understated | Change-in-Law "now partly banked" | ₹876.84 cr received to date, but **receivables ₹2,757 cr (336 debtor days)**. MSEDCL's SC appeal is pending | AR; screener [V] |
| 9 | Pledge | "Track… any pledge levels" | The NCD-linked pledge of 209.8 cr promoter shares is no longer flagged; **screener shows no pledge** | screener; AR [V] |
