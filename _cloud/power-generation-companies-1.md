# Power Generation: company packs, batch 1
**Members:** Adani Power (ADANIPOWER), NTPC (NTPC), Adani Green Energy (ADANIGREEN), JSW Energy (JSWENERGY), NHPC (NHPC), NTPC Green Energy (NTPCGREEN), NLC India (NLCINDIA)
**Prepared:** 13-Oct-2026 · sub-sector report "Power Generation" · all seven are still listed; no merger or delisting is pending. Corporate actions to note: the NHPC–Jalpower amalgamation (MCA hearing 28-Sep-26), the planned NIRL IPO (NLC), the APL QIP approval and JSW's QIP.

### Sources and fetch log
- **screener.in consolidated pages** for all 7 companies were fetched with curl at **13-Oct-2026 16:14 UTC** (m-cap, price, P/E, BV, P&L, BS, CF, ratios, shareholding). The balance-sheet schedules (borrowings split, cash equivalents, receivables) came from screener's `/api/company/<id>/schedules/` endpoint in the same session [V].
- **Company filings and decks (bseindia.com AttachLive/AttachHis PDFs, company sites), fetched and parsed:**
  - APL investor presentation Sep-2026 (USD; BSE 7-Sep-26) and APL Bhutan SHA disclosure (BSE 6-Oct-26)
  - adani.com Q1 FY27 release (22-Jul-26)
  - NTPC "Operational & Financial Snapshot Q1 FY27" (ntpc.co.in)
  - AGEL Q1 FY27 earnings deck, AGEL H1 FY27 provisional operational update (BSE 10-Oct-26) and AGEL board-meeting intimation (Q2 on 21-Oct-26)
  - JSW Energy Q1 FY27 results presentation (BSE 22-Jul-26)
  - NHPC investor presentation Jun-2026 / Q1 FY27 (nhpcindia.com)
  - NGEL COD filings (BSE 29-Sep and 9-Oct-26)
  - NLC Q1 FY27 results filing (BSE 7-Aug-26) and NLC investor presentation May-2026 (BSE 27-May-26)
  - WebFetch: psuwatch.com (NGEL Q1; NTPC CMD extension), energetica-india.net (NGEL Q1 operating data) and filingreader.com (AGEL US-case disclosures)
- **Unverified (search-snippet only):**
  - NHPC OFS terms (floor ₹71, 6%); the resulting 61.39% stake is verified
  - APL FY27 capex of about ₹23,000 cr
  - NLC Q1 group generation (8,262 MU) and Talabira Q1 output
  - NIRL IPO BRLMs and DRHP status
  - the status of the 5 non-appearing defendants in the US case
  - NGEL FY26 generation (14,596 MU) and CUF (22.48%)
- **Primer/company figures not re-verified this session:** JSW FY26 company EBITDA ₹11,041 cr (screener OP+OI gives ₹10,988 cr) and NGEL FY26 "operating EBITDA" ₹2,475 cr (screener OP ₹2,461 cr).
- **Tags:** [V] = fetched this session · [K] = known / prior company statement, source named · [E] = estimate or computation from [V] inputs.
- **EBITDA basis:** "screener OP" excludes other income. "Company EBITDA" for APL, JSW and NLC includes other income and regulatory income (it reconciles to screener OP + OI). AGEL's "EBITDA from power supply" is a narrower company definition. EV = m-cap + net debt; it excludes minority interest.
- **Results calendar:** Q1 FY27 (Jun-26 quarter) is reported for all seven: APL, JSW and NGEL on 22-Jul-26; AGEL on 22/23-Jul; NTPC late-Jul; NHPC early-Aug; NLC on 7-Aug-26. **No member has reported Q2 FY27 yet.** AGEL's board meets on **21-Oct-2026**; the others are expected late-Oct to mid-Nov. The Sep-2026 shareholding pattern is on screener only for APL and AGEL; the other five use Jun-2026.

## 0. Batch summary grid
| Metric | Adani Power | NTPC | Adani Green | JSW Energy | NHPC | NTPC Green | NLC India |
|---|---|---|---|---|---|---|---|
| M-cap ₹ cr (13-Oct-26) [V] | 3,59,198 | 3,01,178 | 2,12,886 | 84,360 | 74,717 | 78,230 | 34,014 |
| Price ₹ / 52-wk H–L | 186 / 254–128 | 311 / 414–306 | 1,287 / 1,632–765 | 460 / 617–428 | 73.5 / 87.8–68.7 | 92.8 / 120–84 | 245 / 388–230 |
| M-cap change vs primer (Jun/Jul-26) | −17% (vs ~4.3 L cr) | −13% (vs ~3.46 L) | −15% (vs ~2.5 L) | −19% (vs ~1.04 L) | −8% (vs ~81.6k) | −3% (vs ~80.6k) | −22% (vs ~43.5k) |
| P/E TTM [V] | 25.2 | 10.8 | 110 | 42.0 | 19.7 | 129 | 10.6 |
| P/B [V/E] | 5.5 | 1.48 | 10.6 | 2.63 | 1.78 | 4.1 | 1.58 |
| EV/EBITDA TTM (incl OI) [E] | 15.8 | 9.4 | ~26 (co. ND) | ~13.2 (co. ND) | 15.7 | 36.3 | 7.9 |
| FY26 revenue ₹ cr (YoY) [V] | 54,241 (−3.5%) | 1,87,385 (−0.4%) | 12,928 (+15.3%) | 18,901 (+60.9%) | 11,615 (+11.9%) | 2,858 (+29.3%) | 17,519 (+14.3%) |
| FY26 EBITDA ₹ cr, company basis (margin) | 23,431 reported (43%); continuing ≈21,150 | ≈58,100 (31%) [E] | 10,865 power-supply (91%) | 11,041 co. / 10,988 OP+OI (58%) | ≈7,293 (63%) [E] | ≈2,682 (94%) [E] | 7,475 (43%) [V] |
| FY26 screener OPM (ex-OI) | 36.5% | 29.6% | 83.4% | 53.3% | 35.3% | 86.1% | 31.7% |
| FY26 PAT ₹ cr [V] | 12,971 | 27,546 | 1,987 | 2,762 | 4,220 (owners 3,766) | 521 | 3,769 |
| ROCE / ROE % [V] | 17.2 / 21.1 | 8.9 / 15.1 | 7.4 / 11.4 | 8.2 / 7.5 | 5.8 / 9.3 | 3.6 / 2.8 | 8.4 / 11.9 |
| Borrowings Mar-26 ₹ cr [V] | 54,670 | 2,71,005 | 1,03,545 | 76,946 | 52,327 | 31,716 | 27,892 |
| Cash equivalents (screener) ₹ cr [V] | 6,926 | 8,004 | 2,766 | 5,765 (co. 12,881 Jun-26) | 3,651 | 618 | 842 |
| Net debt ₹ cr (company figure where given) | 47,643 (Jun-26) [V] | ≈2,63,000 [E] | 91,252 (FY26) [V] | 61,322 (Jun-26) [V] | ≈48,700 [E] | ≈31,100 [E] | ≈27,050 [E] |
| Net debt / EBITDA | 2.12x (co., cont. TTM) | ≈4.5x | 5.6x run-rate (co.) / ≈8.4x FY26 | 5.53x TTM (co.) | ≈6.7x | ≈11.6x | ≈3.6x |
| Q1 FY27 revenue ₹ cr (YoY) [V] | 18,902 (+34%) | 50,741 (+8%) | 4,431 (+17%); power supply 4,280 (+29%) | 5,207 (+1%); co. total 5,437 (flat) | 3,808 (+18.5%) | 1,107 (+63%) | 4,717 (+23%) |
| Q1 FY27 PAT ₹ cr (YoY) [V] | 4,867 (+47%) | 6,896 (+13%) | 983 (+19%) | 533 (−36%) | 1,178 (+4%) | 305 (+38%) | 436 (−48%) |
| Promoter % (latest SHP) [V] | 74.96 (Sep-26) | 51.10 GoI (Jun-26) | 62.43 (Sep-26) | 66.53 (Jun-26) | 61.39 GoI (Jun-26) | 89.01 NTPC (Jun-26) | 69.47 GoI (Jun-26) |
| FII / DII % [V] | 11.03 / 4.47 | 16.30 / 29.44 | 11.33 / 5.30 | 11.41 / 16.16 | 12.29 / 14.54 | 1.67 / 5.21 | 4.62 / 12.94 |
| Installed capacity | 18.33 GW coal (incl 40 MWp solar) | 90.9 GW group (Jun-26) | 20.76 GW RE + 6.6 GWh BESS (Sep-26) | 14.54 GW (thermal 5.66, hydro 1.78, wind 3.13, solar 2.28, hybrid 1.70) | 9.33 GW (hydro 8.77, RE 0.56) | 11.33 GW RE (10-Oct-26) | ≈8.35 GW (thermal ≈6.62, RE 1.73) [E] |
| Under construction / locked-in | 23.7 GW locked-in (→45 GW target FY32) | 35.7 GW (coal 15.7, hydro 3.6, RE 16.4) | ~5 GW RE + ~2 GWh BESS u/c; 50 GW by 2030 | 13.6 GW u/c; 32.4 GW locked-in; 29.6 GWh storage locked | 9.2 GW (hydro 8.0, solar 1.2) | 16.0 GW (solar 9.6, wind 6.4) | 2.4 GW TPS (LoA) + 5.8 GW RE |
| PLF / CUF / PAF (latest) | PLF 77.9% Q1 (FY26 66.5%) | coal PLF 76.7% Q1 (FY26 72.0%); PAF 94.0% | CUF solar 25.3 / wind 44.4 / hybrid 49.0 (Q1) | thermal PLF 71% (LT 63%, deemed 84%) | PAF 80.8% Q1 (FY26 74.8%) | CUF solar 24% / wind 37% (Q1) | n.d. |
| Generation / sales (latest qtr) | 28.8 BU sold | 93.6 BU (standalone commercial) | 13.66 BU sold | 12.9 BU net | 9.49 BU (hydro) | 5.75 BU (Q1, +65%) | 8.26 BU group (snippet) |
| Regulated equity | n.a. (bid PPAs) | ₹1,21,745 cr consol / ₹92,797 cr SA | n.a. | n.a. (some CERC hydro) | ≈₹18.3k cr hydro → ≈₹30.7k cr FY27E (chart) | n.a. | n.d. (CERC lignite) |
| Tariff / realisation | PPA ₹5.95, merchant ₹7.04/kWh | variable ≈₹2.68 + fixed ≈₹1.78 | 25-yr fixed PPAs (~75%) + C&I | thermal u/c ₹5.6; RE ₹2.8–3.7/kWh | CERC cost-plus | 25-yr PPAs / RTC | CERC cost-plus; NUPPL interim tariff |
| Merchant / short-term share | ≈15% of Q1 units (4.3 of 28.8 BU) [E] | negligible | ~25% C&I/merchant buckets | ST 1.6 of 12.9 BU (≈12%) | ~0 (secondary energy only) | ~0 | ~0 |
| Capex guidance | ~US$21 bn over 7 yrs; FY27 ~₹23k cr (snippet) | Q1 ₹11,591 cr | FY26 ₹30,365 cr; Q1 ₹8,826 cr | FY27 ₹20,000 cr | FY27 ₹15,000 cr | n.d. | 10 GW RE ~₹50k cr by 2030 |
| Next results | Q2 n.a. | Q2 n.a. | **21-Oct-26** | Q2 n.a. | Q2 n.a. | Q2 n.a. | Q2 n.a. |

## 0b. Cross-company read-across
1. **Thermal had a strong Q1 FY27.** All-India peak demand set a record of **271 GW in May-26** and Q1 energy demand rose about 8.5% YoY (JSW deck citing CEA). The IEX DAM price averaged **₹5.1/kWh, up 15.7%** (APL release). This lifted coal PLFs: NTPC 76.7% and APL 77.9%, against 70.3% for the rest of India. Thermal operating leverage shows up in APL (PAT +47%) and NTPC (+13%). JSW's thermal fleet lagged because of a one-off Mahanadi evacuation force majeure.
2. **Two kinds of drag from completed capex.** Depreciation and interest move to the P&L once projects are capitalised, which hit Q1 PAT at NHPC (finance cost +132%), JSW (−36%) and NGEL (standalone PAT −7.5%). NLC's PAT halved for a different reason: its tax rate normalised. Regulated names (NTPC, NHPC) earn ROE only after COD, which is why the FY27 commissioning wave matters: Subansiri, Pakal Dul, Kiru, PVUNL and Ghatampur.
3. **Leverage dispersion is wide.** Net debt/EBITDA: APL about 2x, NLC 3.6x, NTPC 4.5x, JSW 5.5x, AGEL 5.6x (run-rate), NHPC 6.7x, NGEL about 11.6x. Equity is being raised or sold across the group: the JSW QIP (₹4,000 cr) plus promoter preferential, the APL QIP approval (₹15,000 cr), AGEL promoter warrants, and GoI OFSs in **NHPC (6%)** and **NLC (2.73%)**.
4. **Storage is the new KPI.** AGEL has **6.6 GWh of BESS operating** at Khavda. JSW has 29.6 GWh of storage locked in, mostly PSP. NTPC has 5 GWh of BESS VGF, an 18 GW PSP portfolio, and CERC regulations allowing BESS at thermal stations. NIRL (NLC) has won BESS tenders in Haryana (₹2.35 lakh/MW/month) and with TNGECL and PSPCL. NHPC has 17.9 GW of PSP under survey. APL has diversified into hydro (Bhutan 770 MW).
5. **The sector has de-rated since the primers were written.** All seven m-caps are 3–22% below the June/July primer values. NLC (−22%), JSW (−19%) and APL (−17%) fell most. Multiples cluster as follows: PSU regulated names at 10–20x P/E (NTPC 10.8x, NLC 10.6x, NHPC 19.7x); private growth names at 25–42x (APL 25x, JSW 42x); pure-RE names above 100x (AGEL 110x, NGEL 129x).
6. **Governance overhang.** The US DOJ/SEC matters affecting the Adani promoters were resolved on 10-Aug-26 (dismissal with prejudice; SEC civil penalties of US$18 mn). Neither APL nor AGEL is a party.


---

## 1. Adani Power Ltd (NSE: ADANIPOWER · BSE: 533096)

**Status:** listed, active. Face value ₹2 after the 1:5 split (Sep-2025). Screener equity capital ₹3,857 cr, so about 1,929 cr shares. No merger or demerger pending. The board approved a QIP of up to ₹15,000 cr on 22-Jul-26 (EGM 14-Aug-26). There is **no evidence it has launched yet**: equity capital is unchanged and the Sep-26 promoter stake is still 74.96% [V screener SHP Sep-2026].

### 1a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:14 UTC [V])
| Metric | FY26 (Mar-26) | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹54,241 cr | ₹56,203 cr | −3.5% YoY [V screener]. Company: US$6,142 mn of revenue from ops at ₹88.3, about ₹54,230 cr [V APL Sep-26 investor deck] |
| Operating profit (screener, ex-OI) | ₹19,806 cr (36.5%) | ₹21,418 cr (38.1%) | [V screener] |
| EBITDA incl. other income (company basis) | ≈₹23,431 cr (43.2%) | ≈₹24,008 cr | Company "reported" EBITDA = US$2,653 mn FY26 [V deck]. Continuing EBITDA = US$2,395 mn, about ₹21,150 cr [V deck] |
| Other income | ₹3,625 cr | ₹2,590 cr | Includes prior-period/regulatory items |
| PAT | ₹12,971 cr | ₹12,750 cr | +1.7% [V screener] |
| ROCE / ROE | 17.2% / 21.1% | 23% / — | [V screener top ratios]. Company TTM Jun-26: RoCE 18.6%, RoE 21.6% [V deck] |
| Borrowings (Mar-26) | ₹54,670 cr (LT 42,830 + ST 10,726 + lease 1,115) | ₹39,495 cr | [V screener schedules] |
| Cash equivalents | ₹6,926 cr | ₹6,120 cr | [V screener schedule]. Investments ₹1,516 cr |
| Net debt (screener basis) | ≈₹47,744 cr | ≈₹33,375 cr | Company: **net debt ₹47,643 cr at 30-Jun-26**, total debt ₹58,381 cr [V adani.com Q1 FY27 release]. Net debt/continuing EBITDA 2.12x TTM Jun-26 [V deck] |
| Net debt / EBITDA (incl OI) | ≈2.0x | ≈1.4x | [E] computed |
| CFO / FCF | ₹20,514 cr / −₹2,817 cr | ₹21,501 / ₹9,957 cr | FCF turned negative on the capex ramp (CWIP ₹35,053 cr vs ₹12,104 cr) [V screener] |
| Market cap | **₹3,59,198 cr** @ ₹186 (13-Oct-2026, screener fetch 16:14 UTC) | | 52-wk H/L ₹254/₹128 [V] |
| P/E (TTM) | 25.2x | | [V screener] |
| P/B | 5.5x (BV ₹33.7) | | [V/E] |
| EV/EBITDA (TTM) | ≈15.8x (incl OI) / ≈18.4x (screener OP) | | EV ≈ ₹4.07 L cr [E] |
| Dividend | nil | | Dividend payout 0% [V] |

### 1b. Latest quarter: Q1 FY27 (Jun-26). Results 22-Jul-2026. Q2 FY27 is not out as of 13-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops (screener) | ₹18,902 cr | ₹14,109 cr | +34% [V screener] |
| Total reported revenue (company) | ₹19,322 cr | ₹14,574 cr | +32.6% [V adani.com release] |
| Continuing revenue from ops | ₹17,550 cr | ₹13,703 cr | +28.1% [V] |
| Reported EBITDA | ₹8,369 cr | ₹6,150 cr | +36.1%. Includes ₹1,386 cr of one-time prior-period income [V] |
| Continuing EBITDA | ₹6,983 cr | ₹5,744 cr | +21.6%, the highest ever on a continuing basis [V] |
| PAT | ₹4,867 cr | ₹3,305 cr | +47.2% [V] (screener ₹4,867 cr) |
| PLF | 77.9% | 67.0% | FY26 66.5% [V] |
| Units sold | 28.8 BU | 24.6 BU | FY26 99.1 BU. Generation 31 BU, a quarterly record [V] |
| PPA realisation | ₹5.95/kWh | | +8.5%. PPA sales 24.5 BU (+30%) [V] |
| Merchant/short-term realisation | ₹7.04/kWh | | +13.1%. IEX DAM average ₹5.1/kWh (+15.7%) [V] |
| Sequential | Q4 FY26 revenue ₹14,223 cr, PAT ₹4,271 cr | | [V screener] |

Deck operating table [V APL Sep-2026 USD deck, annexure]. PLF: FY22 52%, FY23 48%, FY24 65%, FY25 71%, FY26 67%, Q1 FY27 78%. Plant availability: FY26 89%, Q1 FY27 96%. PPA realisation: FY26 ₹5.53, Q1 ₹5.93. Merchant realisation: FY24 ₹6.92, FY25 ₹5.93, FY26 ₹5.30, Q1 FY27 ₹7.05/kWh. The deck uses USD/INR 94.7 for Q1 FY27 (88.3 for FY26). The rupee move inflates INR growth relative to the USD-reported +20% revenue growth.

### 1c. Native power KPIs
- **Installed/operating capacity:** 18,330 MW across 13 operating assets, including 40 MWp of solar at Bitta. Effective capacity 18,150 MW [V deck]. Organic 10,840 MW: Mundra 4,620 MW (4×330 + 5×660), Tiroda 3,300 MW, Kawai 1,320 MW, Godda 1,600 MW (100% exported to Bangladesh). Inorganic 7,450 MW: Udupi 1,200, Raipur 1,370, Raigarh 600, Mahan 1,200, Korba 600 (ex-Lanco Amarkantak), Mutiara 1,200 (49% via Moxie), Dahanu 500, Butibori 600 (Vidarbha Industries Power), Churk 180 MW (open capacity) [V deck]. Note the primer's figure: Mahan's operating capacity is **1,200 MW**, with 3,200 MW under development.
- **Locked-in pipeline:** 23,720 MW, giving 42,050 MW. A further ~3 GW is "proposed", for a **45 GW target by FY32** [V deck]. Under construction per the Q1 release: Korba-II 1,320 MW (to be commissioned this year), Mahan-II 1,600 MW (COD Q1 FY28, >88% progress), Raipur-II 1,600 MW (>62%), Raigarh-II 1,600 MW (>54%), Mirzapur 1,600 MW (execution started) [V release]. Also Pirpainti 2,400, Anuppur 2,400 (1,600 PPA), Mahan-III, Kawai-II/III and Korba-III, each 1,600 MW [V deck]. BTG has been ordered for 22.4–23.7 GW, all the land is available, and 60% of the additions are brownfield [V deck].
- **PPA tie-up:** 95%+ of operating capacity is tied up. 13,320 MW of new PPAs are locked in (about 56% of the upcoming capacity per the release; the deck says 60%+). APL has won 13,945 MW of the 20,920 MW of SHAKTI B(iv) state PPAs awarded: MP 2,920, Bihar 2,400, UP 1,600, Maharashtra 3,200, Karnataka 625, Assam 3,200 [V deck]. A new 1,600 MW 25-year PSA with MSEDCL was signed in Q1 [V release].
- **Coal sourcing:** domestic linkages (SHAKTI) plus imported coal at Mundra and Udupi. Mundra FSAs total 17.71 MTPA, including 6.41 MTPA under inter-plant transfer. APL is developing 4 captive coal mines with 14 MTPA capacity [V deck].
- **Acquisitions and stakes (FY26–27):** Churk 180 MW. **24% stake in Jaiprakash Power Ventures** (2,220 MW). 11.49% of Prayagraj Power Generation (1,980 MW) [V release]. **Bhutan:** on 5-Oct-26 APL signed an SHA with DGPC for the 770 MW Chamkharchhu hydro project (49:51 JV with DGPC) [V BSE filing 6-Oct-26]. Older: Lanco Amarkantak became Korba Power, Coastal Energen became Mutiara via Moxie (49%), and Vidarbha Industries became Butibori. GVK Goindwal Sahib is not in APL's asset list; it was bought by PSPCL in 2024 [K, press reports 2024].
- **Capex:** about US$21 bn over 7 years (deck), funded largely from internal accruals; FFO FY26 US$2.29 bn [V deck]. FY27 capex of about ₹23,000 cr is reported by secondary media (sahi.com headline, **unverified**).
- **Rating:** "AA rated by four domestic agencies" [V deck]. CARE updated 17-Aug-26, Ind-Ra 31-Aug-26 [V screener doc list].
- **Regulatory/legal:** SEBI settlement order of 28-Sep-2026, with APL and its directors paying ₹37.05 lakh [V screener announcement list/BSE]. US matters: see the Adani Green section. APL is not a party.
- **Management:** CEO S B Khyalia [V adani.com release].

### 1d. Ownership (screener SHP, Sep-2026 [V])
Promoters 74.96% (unchanged for 5 quarters). FII 11.03% (11.76% in Jun-26). DII 4.47%, rising steadily from 1.64% in Mar-25. Public 9.55%. 21.8 lakh shareholders.

### 1e. Concentration
Revenue depends on state discom PPAs (Gujarat, Maharashtra, Rajasthan, Haryana, Karnataka, MP, Chhattisgarh) plus Bangladesh (Godda, BPDB). Debtor days fell to 79 in FY26 from 109 in FY23 [V screener ratios]. Fuel: a single group logistics chain, with more than 18,500 rake-equivalents a year [V deck].

### 1f. Story bullets
1. **The best thermal quarter on record.** In Q1 FY27 PLF hit 77.9% and merchant realisation ₹7.04/kWh amid the record 271 GW national peak in May-26. Continuing EBITDA rose 22% and PAT 47%. Note the ₹1,386 cr of prior-period income.
2. **A 45 GW coal build-out:** 23.7 GW is locked in with equipment and land, and over half has PPAs under SHAKTI B(iv). The capex cycle has made FCF negative, and net debt rose to ₹47.6k cr. The ₹15,000 cr QIP and the borrowing-limit increase to ₹1 L cr signal heavier funding needs.
3. **Diversifying beyond coal:** the Bhutan 770 MW hydro JV (Oct-26), minority stakes in JPVL (24%) and Prayagraj (11.5%), and Adani Atomic Energy for nuclear (per the primer).
4. **Valuation has de-rated:** m-cap is ₹3.59 L cr against about ₹4.3 L cr in the primer (Jun-26). Trailing P/E is 25x, down from about 33x.


### 1g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 14,237 | 14,109 | 13,457 | 12,451 | 14,223 | 18,902 |
| Operating Profit | 4,813 | 5,685 | 5,150 | 4,238 | 4,732 | 7,949 |
| OPM % | 34% | 40% | 38% | 34% | 33% | 42% |
| Other Income | 298 | 465 | 851 | 543 | 1,766 | 538 |
| Interest | 765 | 857 | 842 | 701 | 967 | 901 |
| Depreciation | 1,085 | 1,089 | 1,193 | 1,135 | 1,147 | 1,167 |
| Profit before tax | 3,261 | 4,204 | 3,966 | 2,945 | 4,384 | 6,418 |
| Net Profit | 2,599 | 3,305 | 2,906 | 2,488 | 4,271 | 4,867 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 27,711 | 38,773 | 50,351 | 56,203 | 54,241 | 59,033 |
| Operating Profit | 9,881 | 10,096 | 18,228 | 21,418 | 19,806 | 22,070 |
| OPM % | 36% | 26% | 36% | 38% | 37% | 37% |
| Other Income | 3,908 | 4,216 | 9,883 | 2,590 | 3,625 | 3,698 |
| Interest | 4,095 | 3,334 | 3,388 | 3,340 | 3,367 | 3,411 |
| Depreciation | 3,118 | 3,304 | 3,931 | 4,309 | 4,565 | 4,643 |
| Net Profit | 4,912 | 10,727 | 20,829 | 12,750 | 12,971 | 14,533 |
| EPS in Rs | 2.55 | 5.56 | 10.80 | 6.71 | 6.66 | 7.39 |
| Dividend Payout % | 0% | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 25,772 | 39,042 | 52,490 | 61,080 |
| Borrowings | 42,596 | 34,862 | 39,495 | 54,670 |
| Fixed Assets | 51,451 | 63,016 | 69,297 | 69,401 |
| CWIP | 12,880 | 925 | 12,104 | 35,053 |
| Investments | 654 | 374 | 1,097 | 1,516 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 8,431 | 14,170 | 21,501 | 20,514 |
| Cash from Investing Activity | 1,545 | 3,481 | -17,142 | -26,461 |
| Free Cash Flow | 5,188 | 11,568 | 9,957 | -2,817 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 109 | 85 | 85 | 79 |
| ROCE % | 16% | 32% | 23% | 17% |

---

## 2. NTPC Ltd (NSE: NTPC · BSE: 532555)

**Status:** listed Maharatna PSU, with the GoI holding 51.10%. Subsidiary **NTPC Green Energy (NGEL)** has been listed since Nov-2024 (NTPC owns 89.01%). Other subsidiaries and JVs: THDC, NEEPCO, PVUNL (74%), NTPC Mining, NVVN, BRBCL, RGPPL, Meja, Aravali, NSPCL, HURL and others. NTPC acquired **Sinnar Thermal** under CIRP in Feb-26 (units under revival) [V NTPC Q1 FY27 OFS deck]. CMD Gurdeep Singh has been extended a second time, from 1-Aug-26 to 31-Jan-27 or until a regular appointee joins. The Search-cum-Selection Committee interviewed 18 candidates on 4-Jul-26 and no successor has been named [V psuwatch.com, fetched]. Piyush Singh ceased to be a government nominee director on 5-Oct-26 [V screener/BSE announcement list].

### 2a. Standardised financial pack (consolidated; screener.in fetched 13-Oct-2026 16:14 UTC [V])
| Metric | FY26 | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹1,87,385 cr | ₹1,88,138 cr | −0.4% (flat) [V] |
| Operating profit (screener) | ₹55,438 cr (29.6%) | ₹54,355 cr (28.9%) | [V] |
| EBITDA incl OI | ≈₹58,100 cr (31.0%) | ≈₹62,881 cr | [E] screener OP + OI. FY25 OI was inflated (₹8,526 cr) |
| PAT (incl. minorities) | ₹27,546 cr | ₹23,953 cr | +15% [V]. FY26 tax was −12%, a deferred-tax credit. Q4 FY26 PAT of ₹10,615 cr was boosted by tax |
| Standalone PAT / adjusted | ₹23,162 cr / ₹19,530 cr | | [V NTPC Q1 FY27 deck] |
| ROCE / ROE | 8.9% / 15.1% | 11% / — | [V screener] |
| Borrowings | ₹2,71,005 cr (LT 2,07,664 + ST 59,594 + lease 3,746) | ₹2,50,096 cr | [V schedules]. Company 30-Jun-26: LT debt ₹2,33,684 cr + ST ₹38,398 cr (consol) [V deck] |
| Cash equivalents | ₹8,004 cr | ₹11,457 cr | [V schedule]. Investments ₹24,180 cr (mostly JV equity, not liquid) |
| Net debt | ≈₹2,63,001 cr | ≈₹2,38,639 cr | [E] |
| Net debt / EBITDA | ≈4.5x | | [E] Debt/equity 1.30x consol (Jun-26) [V deck] |
| CFO / FCF | ₹50,902 cr / ₹6,895 cr | ₹50,488 / ₹9,431 cr | [V] |
| Market cap | **₹3,01,178 cr** @ ₹311 (13-Oct-26) | | 52-wk H/L ₹414/₹306, so the stock is near its 52-week low [V] |
| P/E / P/B | 10.8x / 1.48x (BV ₹210) | | [V]. Company BVPS ₹216.41 consol (Jun-26) [V deck] |
| EV/EBITDA (TTM) | ≈9.4x (incl OI) / ≈10.8x (OP) | | [E]; EV excludes minority interest (₹8,144 cr) |
| Dividend yield | 2.89% | | [V]. Payout 32% in FY26 [V] |

### 2b. Latest quarter: Q1 FY27. Q2 FY27 is not out as of 13-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | Q4 FY26 |
|---|---|---|---|
| Revenue (consol, screener) | ₹50,741 cr | ₹47,064 cr (+7.8%) | ₹49,686 cr [V] |
| Operating profit / OPM | ₹16,231 cr / 32% | ₹12,579 cr / 27% | ₹8,505 cr / 17% [V] |
| Consolidated PAT | ₹6,896 cr | ₹6,108 cr (+12.9%) | ₹10,615 cr [V deck & screener] |
| Standalone revenue | ₹43,832 cr | ₹42,573 cr | ₹43,111 cr [V deck] |
| Standalone PAT / adjusted PAT | ₹5,342 / ₹5,128 cr | ₹4,775 / ₹4,413 cr | ₹8,747 / ₹5,289 cr [V deck] |
| Profit from subsidiaries / JVs | ₹1,204 cr / ₹628 cr | ₹655 / ₹476 cr | THDC ₹294 cr, NGEL ₹276 cr, NEEPCO ₹146 cr, NTPC Mining ₹146 cr; HURL JV ₹238 cr [V deck] |
| Commercial generation (standalone) | 93.6 BU | 91.1 BU | [V deck] |
| Coal PLF (standalone) | **76.71%** | 75.16% | vs rest of India 70.32% (67.67% in Q1 FY26). FY26 72.04% [V deck] |
| Coal PAF | 93.98% | 93.48% | FY26 90.12% [V] |
| Gas / solar / hydro PLF | 5.29% / 31.06% / 30.92% | 11.08% / 26.81% / 59.50% | [V deck] |
| Average tariff (₹/kWh) | variable ~2.68 + fixed ~1.78 | ~2.88 + ~1.75 | [V deck chart; label pairing inferred] |
| Captive coal | 19.26% of coal requirement met from captive mines; captive dispatch +13% YoY | | [V deck] |
| Group capex | ₹11,591 cr | ₹11,260 cr | [V deck] |

### 2c. Native power KPIs
- **Installed capacity:** group **90,904 MW** at 30-Jun-26 (89,108 MW at 31-Mar-26; 82,646 MW at 30-Jun-25). Standalone 60,992 MW [V deck]. Q1 FY27 additions were 1,796 MW: PVUNL 800 MW (Unit 2 COD 25-Jun-26), Tehri PSP 250 MW (the 1,000 MW Tehri PSP is now fully commercial), RE 726 MW and Dadri-II 20 MW [V deck].
- **Under construction (30-Jun-26):** **35,702 MW**. Coal 15,720 MW: Talcher 1,320, Singrauli 1,600, Lara 1,600, Darlipalli 800, Sipat 800, Nabinagar 2,400, Gadarwara 1,600, Telangana 2,400, Patratu 800, Meja-II 2,400. Hydro incl. PSP 3,581 MW: Tapovan Vishnugad 520, Rammam 120, Lata Tapovan 171, THDC 1,644, NEEPCO 1,126. RE 16,401 MW, of which NGEL group is 16,024 MW [V deck]. Roadmap: about 130 GW by 2032 [K, company statements].
- **Regulated equity:** standalone **₹92,797 cr**, consolidated **₹1,21,745 cr** (30-Jun-26), against ₹92,344 / ₹1,11,393 cr a year earlier [V deck]. Regulated ROE is 15.5% for thermal under the CERC 2024–29 regulations [K, CERC Tariff Regs 2024].
- **Gross fixed assets:** ₹4,80,743 cr consol (Jun-26), up from ₹4,19,648 cr. CWIP ₹85,527 cr [V deck].
- **Incentives/surcharge (standalone Q1):** incentive ₹244 cr, disincentive −₹146 cr, LPS surcharge ₹20 cr, rebate −₹237 cr [V deck]. Debtor days 71 in FY26 (67 in FY25) [V screener]. Trade receivables ₹36,616 cr [V screener schedule].
- **New frontiers:** nuclear via **ASHVINI** (JV with NPCIL), building the Mahi Banswara 4×700 MW plant; foundation stone laid 25-Sep-25 and excavation consent for Units I–II received Mar-26. NTPC Parmanu Urja Nigam is a wholly owned subsidiary for advanced nuclear, with 30 sites identified. The group has an 18 GW PSP portfolio. 5 GWh of BESS was allocated under PSDF VGF and awarded (4.7 GWh NTPC + 0.3 GWh NTECL), and CERC issued BESS-at-thermal tariff regulations on 20-Mar-26 [V deck].
- **Dividend:** FY26 cash dividend paid ₹8.85/share, the highest ever [V deck]. The primer says ₹9.00.
- **Ratings:** CARE, Ind-Ra, CRISIL and ICRA updated May-26 [V screener doc list]. AAA domestic [K].

### 2d. Ownership (screener, Jun-2026 [V]. The Sep-26 SHP is not yet on screener)
Promoter (GoI) 51.10%. FII 16.30%. DII 29.44%. Government 0.00% (0.12% earlier). Public 3.14%. 32.0 lakh shareholders, down from 41.4 lakh in Mar-25.

### 2e. Concentration
Buyers are state discoms; tariffs are cost-plus under CERC with LPS rules. NTPC is exposed to coal from CIL (around 81% non-captive) [V deck: 19.26% captive].

### 2f. Story bullets
1. **The regulated-equity compounding is working:** consolidated regulated equity rose 9% YoY to ₹1.22 L cr. Q1 FY27 consolidated PAT rose 13% and coal PLF hit 76.7% in a record-demand quarter.
2. **The build-out is accelerating:** 35.7 GW is under construction, including 15.7 GW of coal, and group capex was ₹11.6k cr in Q1. Net debt is about ₹2.6 L cr (≈4.5x EBITDA).
3. **Subsidiary profits are now material:** subsidiaries and JVs contributed ₹1,832 cr in Q1 against ₹1,131 cr a year earlier, led by THDC (Tehri PSP and Khurja), NGEL and NTPC Mining.
4. **The stock has de-rated:** ₹311, near the 52-week low of ₹306; m-cap ₹3.01 L cr against the primer's ~₹3.46 L cr; P/E 10.8x. CMD succession is unresolved.


### 2g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 49,834 | 47,064 | 44,786 | 45,846 | 49,686 | 50,741 |
| Operating Profit | 14,754 | 12,579 | 12,816 | 14,570 | 8,505 | 16,231 |
| OPM % | 30% | 27% | 29% | 32% | 17% | 32% |
| Other Income | 4,180 | 3,241 | 2,734 | 1,738 | 1,918 | 1,549 |
| Interest | 3,648 | 3,468 | 3,432 | 3,164 | 3,737 | 3,386 |
| Depreciation | 4,663 | 4,587 | 4,816 | 5,093 | 5,134 | 5,234 |
| Profit before tax | 10,623 | 7,765 | 7,301 | 8,050 | 1,553 | 9,160 |
| Net Profit | 7,897 | 6,108 | 5,225 | 5,597 | 10,615 | 6,896 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 132,669 | 176,207 | 178,525 | 188,138 | 187,385 | 191,059 |
| Operating Profit | 40,362 | 47,596 | 51,469 | 54,355 | 55,438 | 52,121 |
| OPM % | 30% | 27% | 29% | 29% | 30% | 27% |
| Other Income | 4,809 | 2,561 | 5,177 | 8,526 | 2,662 | 7,938 |
| Interest | 9,376 | 11,447 | 12,301 | 13,282 | 13,801 | 13,719 |
| Depreciation | 13,788 | 14,792 | 16,204 | 17,401 | 19,629 | 20,276 |
| Net Profit | 16,960 | 17,121 | 21,332 | 23,953 | 27,546 | 28,334 |
| EPS in Rs | 17.20 | 17.44 | 21.46 | 24.16 | 27.90 | 28.63 |
| Dividend Payout % | 41% | 42% | 36% | 35% | 32% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 137,326 | 151,013 | 174,374 | 193,479 |
| Borrowings | 222,913 | 237,131 | 250,096 | 271,005 |
| Fixed Assets | 240,424 | 258,934 | 271,437 | 318,697 |
| CWIP | 89,179 | 87,664 | 100,859 | 84,957 |
| Investments | 13,935 | 15,885 | 19,704 | 24,180 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 47,152 | 40,099 | 50,488 | 50,902 |
| Cash from Investing Activity | -26,145 | -31,456 | -45,852 | -37,578 |
| Free Cash Flow | 22,432 | 9,358 | 9,431 | 6,895 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 62 | 68 | 67 | 71 |
| ROCE % | 10% | 10% | 11% | 9% |

---

## 3. Adani Green Energy Ltd (NSE: ADANIGREEN · BSE: 541450)

**Status:** listed, active. Equity capital rose from ₹1,584 cr to ₹1,647 cr in FY26 [V screener], reflecting conversion of the promoter's warrants. The deck says "Funding tied up for Promoter's USD 1.125 bn warrants" [V AGEL Q1 FY27 deck]. TotalEnergies holds stakes in the JV platforms of 2,353 MW, 1,050 MW and 1,150 MW [V deck]. **The Q2 FY27 board meeting is on 21-Oct-2026** [V BSE intimation 10-Oct-26]. The H1 FY27 provisional operational update came out on 10-Oct-26 [V].

**US matters (AGEL is not a party):** on 10-Aug-2026 the EDNY court entered final judgment in the SEC civil case. Gautam Adani pays US$6 mn and Sagar Adani US$12 mn, and both are permanently enjoined. The same day the court **dismissed the DOJ indictment with prejudice** for the appearing defendants (Gautam Adani, Sagar Adani, Vneet Jaain) [V filingreader.com summary of AGEL's BSE disclosures of 11-Aug-26]. Wikipedia's account says a decision on the 5 non-appearing (Azure/CDPQ-linked) defendants was deferred pending DOJ submissions due 31-Aug-26 [search snippet, unverified].

### 3a. Standardised financial pack (consolidated; screener fetched 13-Oct-26 [V])
| Metric | FY26 | FY25 | Note |
|---|---|---|---|
| Revenue from ops (screener) | ₹12,928 cr | ₹11,212 cr | +15.3% [V] |
| Revenue from power supply (company) | ₹11,602 cr | | +22% [V AGEL H1 FY27 ops update, FY26 key metrics] |
| Operating profit (screener) | ₹10,785 cr (83.4%) | ₹8,889 cr (79.3%) | [V] |
| EBITDA from power supply (company) | **₹10,865 cr (91.2%)** | ≈₹8,830 cr implied (91.7%) | +23% [V]. The company definition excludes some other operating income and adds carbon credits and PPD |
| PAT | ₹1,987 cr | ₹2,001 cr | −1% [V] |
| ROCE / ROE | 7.4% / 11.4% | 9% / — | [V] |
| Borrowings | ₹1,03,545 cr (LT 87,897 + ST 12,581 + lease 3,067) | ₹80,040 cr | [V schedules] |
| Cash equivalents | ₹2,766 cr | ₹3,332 cr | [V]. Screener misses bank deposits and other liquid assets |
| Net debt | **Company ₹91,252 cr** (₹73,677 cr operational + ₹17,574 cr under construction) | ₹64,462 cr (per primer) | [V ops update]. Screener basis ≈₹1,00,779 cr [E] |
| Net debt / run-rate EBITDA | **5.6x** (company, FY27E run-rate) | | [V]. ≈8.4x on FY26 company EBITDA [E] |
| Capex incurred | ₹30,365 cr FY26 (+7%); Q1 FY27 ₹8,826 cr (+41%) | | [V decks] |
| CFO / FCF | ₹10,135 cr / −₹15,857 cr | ₹8,364 / −₹16,397 cr | [V] |
| Market cap | **₹2,12,886 cr** @ ₹1,287 (13-Oct-26) | | 52-wk H/L ₹1,632/₹765 [V] |
| P/E / P/B | 110x / 10.6x (BV ₹121) | | [V] |
| EV/EBITDA (TTM) | ≈26x (company net debt; screener OP TTM ₹11,711 cr) | | [E] |

### 3b. Latest quarter: Q1 FY27 (results 22/23-Jul-26). Q2 due 21-Oct-26
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue (screener) | ₹4,431 cr | ₹3,800 cr | +16.6% [V] |
| Revenue from power supply | ₹4,280 cr | ₹3,312 cr | +29% [V deck] |
| EBITDA from power supply | ₹4,122 cr (93.7%) | ₹3,108 cr (92.8%) | +33% [V deck] |
| Cash profit | ₹2,225 cr | ₹1,744 cr | +28% [V] |
| PAT (screener) | ₹983 cr | ₹824 cr | +19% [V]. Interest ₹2,001 cr vs ₹1,525 cr |
| Sale of energy | 13,657 MU | | +30% [V] |
| Operational capacity | 20,142 MW (848 MW added in Q1) | | +27% YoY [V] |
| CUF solar / wind / hybrid | 25.3% / 44.4% / 49.0% | | [V] |

**H1 FY27 operational update (10-Oct-26) [V BSE filing]:** operational capacity **20,763 MW**, made up of solar 14,550, wind 3,266 and hybrid 2,947 MW. That is +24% YoY, with 4,083 MW of greenfield additions YoY but only 621 MW added in Q2. BESS 3,081 MWh was commissioned in Q2 at Khavda, taking the **total to 6,632 MWh**. H1 energy sales were 25,747 MU (+32%): solar 14,143, wind 5,120, hybrid 6,484. H1 CUF: solar 22.9% (99.3% plant availability), wind 42.9%, hybrid 45.2%. Solar grid availability is lower because of daytime transmission curtailment.

### 3c. Native KPIs
- **Capacity:** 20.8 GW operational at Sep-26. Target **50 GW by 2030** [V]. Resource mix (FY26): solar ~70%, wind ~16%, hybrid ~14%. Sites: about 2.5 lakh acres; Khavda has additional sites of ~20–21 GW plus 10+ GW in Rajasthan. 5+ GW of PSP sites. BESS target 10+ GWh by FY27 [V].
- **Under construction:** facilities for about 5 GW of RE plus about 2 GWh of BESS under construction [V deck].
- **Contract mix:** about 75% 25-year fixed-tariff PPAs with SECI, NTPC, SJVN and states. About 25% is C&I fixed PPAs with private players, which were sold as merchant until FY26. "Infirm" power is sold on merchant before COD. Of 4.7 GW tied up, 974 MW is converting from merchant to a 25-year PPA [V ops update].
- **Funding:** IG-rated US$3.4 bn of issuance (RG1/RG2). A revolving construction facility. Promoter warrants of US$1.125 bn. Non-fund lines of US$1.5 bn [V deck]. Ratings: CRISIL May-26, CARE Sep-26 [V screener doc list].

### 3d. Ownership (screener, Sep-2026 [V])
Promoters 62.43%, up from 56.37% in Mar-24 after the warrant conversion. FII 11.33%. DII 5.30%. Public 20.94%. 7.86 lakh shareholders. The Adani portfolio slide shows the family holding AGEL at 62.43% [V deck].

### 3e. Concentration
Gujarat (Khavda), Rajasthan; offtakers are SECI and states. Debtor days 60 [V screener].

### 3f. Story bullets
1. **Growth has slowed in Q2:** only 621 MW was added against 848 MW in Q1, but BESS more than doubled to 6.6 GWh. Watch Q2 numbers on 21-Oct.
2. **The leverage stays heavy:** net debt was ₹91k cr at FY26, interest of ₹2,001 cr in Q1 consumes about half of EBITDA, and FCF is −₹15.9k cr. P/E is 110x and P/B 10.6x.
3. **The US overhang has cleared:** the criminal indictment was dismissed with prejudice and the SEC case settled on 10-Aug-26. The primer still says the judge was "still reviewing".
4. **Merchant to C&I conversion:** about 25% of capacity is in C&I/merchant-linked buckets. FY26 CUFs benefit from Khavda's scale, but transmission curtailment is cutting solar grid availability.


### 3g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 3,073 | 3,800 | 3,008 | 2,618 | 3,502 | 4,431 |
| Operating Profit | 2,402 | 3,042 | 2,603 | 2,241 | 2,882 | 3,985 |
| OPM % | 78% | 80% | 87% | 86% | 82% | 90% |
| Other Income | 39 | 189 | 158 | 208 | 117 | 230 |
| Interest | 1,368 | 1,525 | 1,635 | 1,698 | 1,626 | 2,001 |
| Depreciation | 663 | 767 | 834 | 886 | 885 | 1,026 |
| Profit before tax | 410 | 939 | 292 | -135 | 488 | 1,188 |
| Net Profit | 383 | 824 | 644 | 5 | 514 | 983 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 5,133 | 7,792 | 9,220 | 11,212 | 12,928 | 13,559 |
| Operating Profit | 3,512 | 4,970 | 7,318 | 8,889 | 10,785 | 11,711 |
| OPM % | 68% | 64% | 79% | 79% | 83% | 86% |
| Other Income | 507 | 667 | 1,262 | 1,316 | 1,072 | 713 |
| Interest | 2,617 | 2,911 | 5,006 | 5,492 | 6,484 | 6,960 |
| Depreciation | 849 | 1,300 | 1,903 | 2,498 | 3,372 | 3,631 |
| Net Profit | 489 | 973 | 1,260 | 2,001 | 1,987 | 2,146 |
| EPS in Rs | 3.13 | 6.15 | 6.94 | 9.12 | 10.03 | 10.83 |
| Dividend Payout % | 0% | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 5,720 | 8,250 | 10,553 | 18,318 |
| Borrowings | 54,223 | 64,858 | 80,040 | 103,545 |
| Fixed Assets | 48,336 | 62,284 | 79,914 | 102,138 |
| CWIP | 5,291 | 6,427 | 14,480 | 19,031 |
| Investments | 1,149 | 1,515 | 2,743 | 2,983 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 7,265 | 7,713 | 8,364 | 10,135 |
| Cash from Investing Activity | -3,857 | -21,060 | -19,828 | -26,227 |
| Free Cash Flow | 3,927 | -7,987 | -16,397 | -15,857 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 103 | 53 | 50 | 60 |
| ROCE % | 8% | 10% | 9% | 7% |

---

## 4. JSW Energy Ltd (NSE: JSWENERGY · BSE: 533148)

**Status:** listed, active. The company raised equity in FY27: a **₹4,000 cr QIP on 25-May-26** and a ₹3,000 cr preferential allotment to promoters (₹1,125 cr received, the balance due before Jun-27). It also sold 2.5 cr JSW Steel shares for ₹3,150 cr on 18-May-26 [V JSW Q1 FY27 deck, BSE 22-Jul-26]. The deck calls this a total "growth capital raise" of ₹10,150 cr. Acquisitions: KSK Mahanadi (1,800 MW operating, completed FY25) and O2 Power (renewables platform). A definitive agreement for **Maruti Clean Coal & Power (300 MW, broad EV ₹1,410 cr)** was signed on 13-Jun-26 and is under acquisition [V deck]. Executive Director Sharad Mahendra (JMD & CEO) [V deck lists "Executive Director Mr. Sharad Mahendra"; CEO title K]. Q2 FY27 is not out as of 13-Oct-26.

### 4a. Standardised financial pack (consolidated; screener fetched 13-Oct-26 [V])
| Metric | FY26 | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹18,901 cr | ₹11,745 cr | **+60.9%** (KSK Mahanadi + O2 Power + RE additions) [V] |
| Operating profit (screener) | ₹10,068 cr (53.3%) | ₹5,221 cr (44.5%) | [V] |
| EBITDA (company, incl OI) | ₹11,041 cr (+81%) per primer/company; screener OP+OI ≈₹10,988 cr (58.1%) | ₹6,137 cr | Company Q1 EBITDA matches screener OP+OI, so the company basis includes other income [V deck/E] |
| PAT (incl NCI) | ₹2,762 cr | ₹1,983 cr | +39%. FY26 tax was −39% (DTA credits) [V] |
| ROCE / ROE | 8.2% / 7.5% | 6% / — | [V] |
| Borrowings | ₹76,946 cr (LT 64,875 + ST 10,971 + lease 1,100) | ₹50,185 cr | [V schedules] |
| Cash equivalents (screener) | ₹5,765 cr | ₹4,695 cr | Company "Cash & cash equivalents" **₹12,881 cr at 30-Jun-26** after the QIP and stake sale [V deck]. Screener misses bank deposits/liquid investments. Investments ₹11,379 cr (mainly JSW Steel shares) |
| Net debt | Company **₹65,834 cr (Mar-26)** → **₹61,322 cr (Jun-26)** (operational ₹54,885 cr + CWIP ₹6,437 cr) | ₹59,313 cr (Mar-25) | [V deck]. Screener basis ≈₹71,181 cr at Mar-26 [E] |
| Net debt / EBITDA | 5.53x TTM (Jun-26); operational 4.95x (from ~5.2x in FY26) | | Net debt/equity 1.70x (2.15x Mar-26) [V deck] |
| Wtd avg cost of debt | 8.36% (Jun-26) | 9.05% (Mar-25) | [V deck] |
| CFO / FCF | ₹9,898 cr / −₹213 cr | ₹3,838 / −₹2,868 cr | [V] |
| Market cap | **₹84,360 cr** @ ₹460 (13-Oct-26) | | 52-wk H/L ₹617/₹428 [V] |
| P/E / P/B | 42.0x / 2.63x (BV ₹175) | | [V] |
| EV/EBITDA (TTM) | ≈13.2x (company net debt Jun-26 ₹61,322 cr; TTM OP+OI ₹11,033 cr) | | [E] |
| Dividend | ₹2/share (FY26); yield 0.43% | | [V] |

### 4b. Latest quarter: Q1 FY27 (results 22-Jul-26)
| Metric | Q1 FY27 | Q1 FY26 | Note |
|---|---|---|---|
| Total revenue (company) | ₹5,437 cr | ₹5,411 cr | flat [V deck]. Screener revenue ₹5,207 cr vs ₹5,143 cr |
| EBITDA (company) | ₹3,103 cr (57%) | ₹3,057 cr (56%) | +2%. Thermal −₹186 cr, RE +₹217 cr [V] |
| PAT / to shareholders | ₹533 cr / ₹471 cr | ₹836 / ₹743 cr | −36%. Finance cost ₹1,519 cr vs ₹1,306 cr [V] |
| Cash PAT | ₹1,464 cr | ₹1,579 cr | −7% [V] |
| Net generation | 12.9 BU | 13.5 BU | −5%. RE 4.8 BU (−3%), thermal 8.0 BU (−6%), weak hydrology, Mahanadi evacuation force majeure [V] |
| LT / ST generation | 11.2 BU / 1.6 BU | 11.8 / 1.7 BU | [V] |
| Thermal PLF (total) | 71% | 76% | LT 63% (deemed 84%) vs 79% [V] |
| Capex | ₹4,076 cr | | FY27 guidance **₹20,000 cr** [V] |
| DSO | 65 days | 58 days | Receivables ₹4,151 cr incl. unbilled [V] |

### 4c. Native KPIs
- **Installed capacity:** **14,535 MW** at 8-Jul-26 (14,326 MW at Q1 end; 12,768 MW a year earlier). Thermal 5,658 MW, hydro 1,781 MW, wind 3,125 MW, solar 2,275 MW, hybrid 1,696 MW [V deck]. 1,081 MW was added YTD to 8-Jul (solar 442, hybrid 381, hydro 150 (Tidong, commissioned 12-Jun-26, ahead of the Oct-26 target), wind 108). H1 FY27 target about 1.5 GW [V].
- **Thermal fleet [V deck]:** Ratnagiri 1,200 MW (imported coal; Q1 PLF 79%). Barmer 1,080 MW (lignite; 64%). Vijayanagar 860 MW (imported coal; 79%). **KSK Mahanadi 1,800 MW** (domestic coal; 70%). Utkal 700 MW (domestic coal; a new LT tie-up from Apr-26; 61%). Nandyal 18 MW.
- **Under construction:** **13,567 MW**: thermal 3,800 MW (Salboni 2×1,600 MW at fixed costs of ₹3.6 and ₹4.06/kWh, plus JSW Mahanadi 600 MW), wind 2,245 MW, solar 3,105 MW, hybrid 4,417 MW. Pipeline (LoA) 4,261 MW. Locked-in **32.4 GW**; target **30 GW by 2030** [V deck]. Weighted tariffs: thermal ₹5.6, wind ₹3.5, hybrid ₹3.7, solar ₹2.8/kWh [V deck].
- **Storage:** target 40 GWh by 2030, of which **29.6 GWh is locked in**. PSP: 24.0 GWh under construction (MSEDCL 12 GWh at ₹84.6 lakh/MW/yr, FY30; UPPCL 12 GWh at ₹77.2 lakh/MW/yr, FY31), plus PCKL 2.4 GWh, for 26.4 GWh in total. BESS: 1.7 GWh under construction (SECI Kerala, RVUNL, group captive, KREDL, FDRE), 3.2 GWh including pipeline. A 5 GWh battery container assembly line is stabilised. The first external BESS order is 200 MW/400 MWh [V deck].
- **Offtake mix:** group captive (JSW Steel) 20%, SECI 12%, Rajasthan 9%, UP 8%, PTC 7%, open/merchant 4% [V deck, by installed capacity].

### 4d. Ownership (screener, Jun-2026 [V])
Promoters **66.53%**, down from 69.41% in Mar-26 after the QIP. FII 11.41%. DII 16.16%, up from 14.29%. Public 5.82%. 5.55 lakh shareholders. The Sep-26 SHP is not yet on screener.

### 4e. Concentration
JSW Steel (group captive) about 20% of capacity. Thermal depends on imported coal at Ratnagiri and Vijayanagar.

### 4f. Story bullets
1. **De-leveraging through equity:** ₹10,150 cr was raised (QIP, promoter preferential and the JSW Steel stake sale). Net debt fell to ₹61.3k cr, with ₹12.9k cr of cash.
2. **Earnings are stalled by depreciation and interest from the acquisitions:** Q1 PAT fell 36% despite flat EBITDA, and TTM P/E is 42x.
3. **The storage moat:** 29.6 GWh is locked in, including the two 12 GWh PSPs with MSEDCL and UPPCL, plus in-house BESS assembly.
4. **Thermal growth continues:** Salboni 3.2 GW, Mahanadi expansion, and the Maruti 300 MW acquisition.


### 4g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 3,189 | 5,143 | 5,177 | 4,082 | 4,499 | 5,207 |
| Operating Profit | 1,204 | 2,789 | 2,996 | 2,030 | 2,250 | 2,873 |
| OPM % | 38% | 54% | 58% | 50% | 50% | 55% |
| Other Income | 313 | 271 | 186 | 111 | 356 | 232 |
| Interest | 675 | 1,306 | 1,418 | 1,485 | 1,608 | 1,519 |
| Depreciation | 482 | 739 | 809 | 829 | 809 | 890 |
| Profit before tax | 361 | 1,015 | 955 | -173 | 188 | 696 |
| Net Profit | 415 | 836 | 824 | 529 | 574 | 533 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 8,167 | 10,332 | 11,486 | 11,745 | 18,901 | 18,965 |
| Operating Profit | 3,572 | 3,282 | 5,382 | 5,221 | 10,068 | 10,149 |
| OPM % | 44% | 32% | 47% | 44% | 53% | 54% |
| Other Income | 575 | 674 | 472 | 916 | 920 | 884 |
| Interest | 777 | 844 | 2,053 | 2,269 | 5,816 | 6,030 |
| Depreciation | 1,131 | 1,169 | 1,633 | 1,655 | 3,185 | 3,336 |
| Net Profit | 1,743 | 1,480 | 1,725 | 1,983 | 2,762 | 2,459 |
| EPS in Rs | 10.51 | 8.99 | 10.47 | 11.16 | 12.74 | 11.11 |
| Dividend Payout % | 19% | 22% | 19% | 18% | 16% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 16,988 | 19,191 | 25,616 | 28,995 |
| Borrowings | 25,051 | 31,573 | 50,185 | 76,946 |
| Fixed Assets | 25,020 | 28,946 | 54,155 | 74,523 |
| CWIP | 4,788 | 10,285 | 10,281 | 17,465 |
| Investments | 6,033 | 7,035 | 9,755 | 11,379 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 2,084 | 6,234 | 3,838 | 9,898 |
| Cash from Investing Activity | -6,778 | -8,197 | -22,990 | -18,523 |
| Free Cash Flow | -2,152 | -1,798 | -2,868 | -213 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 54 | 27 | 41 | 31 |
| ROCE % | 7% | 9% | 6% | 8% |

---

## 5. NHPC Ltd (NSE: NHPC · BSE: 533098)

**Status:** listed Navratna PSU (since Aug-24). **GoI sold 6% through an OFS on 2–3 Jun-2026** (3% base plus 3% green-shoe exercised, 60.27 cr shares, floor ₹71, about 8% below the ₹77.19 close) [OFS terms: search snippets from businesstoday/kotakneo; the fetch was 403, so the terms are **unverified**]. The resulting holding of **61.39%** is [V] in both screener SHP Jun-26 and the NHPC Jun-2026 investor deck. Subsidiaries: NHDC (51:49 with GoMP, 1,616 MW), plus CVPPL (Kiru, Pakal Dul, Kwar), Ratle HEP Corp (Ratle) and Jalpower (Rangit-IV) [K, structure]. The **Jalpower Corporation scheme of amalgamation with NHPC** had its MCA hearing on 28-Sep-2026 [V screener/BSE announcement 22-Sep-26]. Q2 FY27 is not out as of 13-Oct-26.

### 5a. Standardised financial pack (consolidated; screener fetched 13-Oct-26 [V])
| Metric | FY26 | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹11,615 cr | ₹10,380 cr | **+11.9%** [V] |
| Operating profit (screener) | ₹4,097 cr (35.3%) | ₹5,523 cr (53.2%) | Q3–Q4 FY26 OPM fell to 10% and 23% on higher expenses [V] |
| EBITDA incl OI | ≈₹7,293 cr (62.8%) | ≈₹7,149 cr | [E]. Screener OI ₹3,196 cr includes rate-regulated income and late-payment surcharge |
| PAT (incl NCI) / to owners | ₹4,220 cr / **₹3,765.7 cr** | ₹3,412 cr / — | [V screener; NHPC deck "Key ratios"]. Standalone PAT **₹3,617.8 cr** [V deck]. FY26 tax was −8% |
| ROCE / ROE | 5.75% / 9.32% | 7% | [V]. Company RoNW 9.29% consol [V deck] |
| Borrowings | ₹52,327 cr (LT 46,174 + ST 5,960 + lease 193) | ₹39,557 cr | [V] |
| Cash & bank | ₹3,651 cr | ₹2,751 cr | [V schedule = deck]. ₹2,049 cr at 30-Jun-26 [V deck] |
| Net debt | ≈₹48,676 cr (Mar-26); ≈₹51,800 cr (Jun-26: LT ₹47,705 cr; ST not separately given) | | [E] |
| Net debt / EBITDA | ≈6.7x | | [E]. Debt/equity 1.31x consol [V deck] |
| CFO / FCF | ₹3,294 cr / −₹8,274 cr | ₹5,026 / −₹3,823 cr | [V] |
| Capex | FY26 **₹13,689 cr** (consol actual); FY27 target **₹15,000 cr** | FY25 ₹11,596 cr | [V deck] |
| Market cap | **₹74,717 cr** @ ₹73.5 (13-Oct-26) | | 52-wk H/L ₹87.8/₹68.7 [V] |
| P/E / P/B | 19.7x / 1.78x (BV ₹41.2) | | [V] |
| EV/EBITDA | ≈15.7x incl OI (≈23.6x on screener OP) | | [E]; excludes NCI of ₹6,958 cr |
| Dividend | ₹1.61/share for FY26 (incl. final ₹0.21); yield 2.19% | | [V deck] |

### 5b. Latest quarter: Q1 FY27 (results early Aug-26)
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops | ₹3,808 cr | ₹3,214 cr | +18.5% [V deck & screener] |
| EBITDA (company) | ₹2,518 cr (64%) | | [V deck] |
| Finance cost | ₹606 cr | ₹261 cr | +132%: Subansiri and Parbati-II interest is now expensed [V] |
| Depreciation | ₹600 cr | ₹436 cr | +38% [V] |
| Rate-regulated income | ₹254 cr | ₹184 cr | [V] |
| PAT / NHPC share | ₹1,178 cr / ₹1,096 cr | ₹1,131 / ₹1,065 cr | +4.2% / +2.9% [V] |
| Consolidated hydro generation | 9,486 MU | 8,813 MU | +7.6%. NHPC holds a 26% share of India's hydro generation in the quarter [V deck] |
| PAF (incentive basis) | 80.79% | 83.66% | FY26 74.75% [V deck] |
| Incentives (secondary energy + PAF + deviation) | ₹44 cr | ₹12 cr | FY26 ₹913 cr [V] |
| Trade receivables | ₹4,354 cr (incl. ₹2,425 cr unbilled); >45 days only ₹262 cr | ₹3,452 cr | Top debtors: UP, J&K, Rajasthan, Punjab, Haryana [V deck] |

### 5c. Native KPIs
- **Installed:** **9,333 MW** consolidated across 31 stations: hydro 8,771 MW in 24 stations, solar and wind 562 MW in 7 [V deck, CEA 30-Jun-26]. This is 16.85% of India's installed hydro capacity of 52,065 MW. **Subansiri Lower** (8×250 MW): 4 units commissioned on 23-Dec-25, 1-Feb-26, 20-Mar-26 and 8-May-26; the remaining 4 are due in Q4 FY27 [V deck]. Teesta-V (510 MW) restoration is complete and **commercial operation resumed in Jul-26** [V deck].
- **Under construction:** **9,204 MW**: hydro 8,014 MW across 10 projects plus solar 1,190 MW across 7 [V]. Own projects: Subansiri Lower balance, Teesta-VI 500 MW (FY30), Uri-I Stage-II 240 MW, Dulhasti Stage-II 260 MW, Dibang 2,880 MW (₹31,876 cr, FY32). Subsidiaries: Rangit-IV 120 MW (Q3 FY27), Kiru 624 MW and Pakal Dul 1,000 MW (Q4 FY27), Kwar 540 MW (Q4 FY28), Ratle 850 MW (Q3 FY29) [V deck]. Awaiting clearance: 10,263 MW. Survey and investigation: 19,820 MW, including 15 PSPs totalling 17,930 MW. Total portfolio 48,620 MW [V].
- **New approvals:** CCEA investment approval for the 1,720 MW Kamala HEP (8-Apr-26). MoA for the 3,097 MW Etalin HEP with Arunachal (16-Jun-26) [V deck].
- **Regulated equity (hydro, consolidated incl. share of subsidiaries):** the deck chart reads roughly ₹18,309 cr (FY26) → ₹30,723 cr (FY27E, +₹12,414 cr from Subansiri, Pakal Dul, Kiru and Rangit-IV) → ₹36,603 cr (FY30E) [V deck chart; values read from chart, **treat as approximate**]. Capacity path: 11,515 MW in FY27, 12,055 in FY28, 12,905 in FY29, 13,905 MW in FY30 [V].
- **Regulated ROE:** 16.5% for storage-type hydro and 15.5% for run-of-river under CERC 2024–29 [K, CERC Tariff Regs 2024].

### 5d. Ownership (screener, Jun-2026 [V]; deck 30-Jun-26 matches)
GoI 61.39%, down from 67.40% after the June OFS. FII 12.29%, up from 10.34%. DII 14.54%, up from 10.78%. Government (other) 1.13%. Public 10.64%. 33.1 lakh shareholders.

### 5e. Story bullets
1. **Commissioning cliff into FY27:** Subansiri's full 2 GW, Pakal Dul, Kiru and Rangit-IV would add about ₹12.4k cr of regulated equity, roughly +68% on the deck chart. Q1 already shows interest and depreciation moving to P&L.
2. **Divestment overhang cleared:** the GoI sold 6% at ₹71. The stock (₹73.5) trades near that OFS price and the 52-week low.
3. **Earnings quality:** FY26 PAT was helped by tax (−8% effective rate) and other income; screener OPM fell to 35%.
4. **Hydro and PSP optionality:** 17.9 GW of PSP under survey, Etalin 3,097 MW and Kamala 1,720 MW approvals, and Dibang 2,880 MW by FY32.


### 5g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 2,347 | 3,214 | 3,365 | 2,221 | 2,816 | 3,808 |
| Operating Profit | 1,205 | 1,802 | 2,027 | 212 | 637 | 2,352 |
| OPM % | 51% | 56% | 60% | 10% | 23% | 62% |
| Other Income | 265 | 413 | 448 | 1,449 | 306 | 407 |
| Interest | -12 | 261 | 278 | 310 | 574 | 606 |
| Depreciation | 315 | 436 | 441 | 457 | 642 | 600 |
| Profit before tax | 1,167 | 1,518 | 1,755 | 894 | -274 | 1,554 |
| Net Profit | 920 | 1,131 | 1,219 | 321 | 1,549 | 1,178 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 9,144 | 10,607 | 9,631 | 10,380 | 11,615 | 12,210 |
| Operating Profit | 4,013 | 6,184 | 4,936 | 5,523 | 4,097 | 5,227 |
| OPM % | 44% | 58% | 51% | 53% | 35% | 43% |
| Other Income | 981 | 743 | 2,030 | 1,626 | 3,196 | 2,609 |
| Interest | 586 | 475 | 767 | 1,189 | 1,423 | 1,768 |
| Depreciation | 1,190 | 1,215 | 1,184 | 1,193 | 1,976 | 2,140 |
| Net Profit | 3,774 | 4,261 | 4,000 | 3,412 | 4,220 | 4,267 |
| EPS in Rs | 3.51 | 3.89 | 3.58 | 2.99 | 3.75 | 3.78 |
| Dividend Payout % | 52% | 48% | 53% | 64% | 43% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 26,916 | 28,624 | 29,623 | 31,392 |
| Borrowings | 29,540 | 32,561 | 39,557 | 52,327 |
| Fixed Assets | 22,137 | 21,474 | 22,168 | 50,290 |
| CWIP | 31,357 | 39,798 | 50,601 | 34,948 |
| Investments | 499 | 479 | 444 | 440 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 4,705 | 7,252 | 5,026 | 3,294 |
| Cash from Investing Activity | -4,191 | -5,940 | -7,550 | -11,139 |
| Free Cash Flow | -269 | 285 | -3,823 | -8,274 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 212 | 168 | 90 | 83 |
| ROCE % | 8% | 8% | 7% | 6% |

---

## 6. NTPC Green Energy Ltd (NSE: NTPCGREEN · BSE: 544289)

**Status:** listed since 27-Nov-2024 (₹10,000 cr IPO at ₹108). NTPC holds 89.01%, so the company must reach 25% public float within 5 years of listing (by about Nov-2029) [K, SCRR]. Subsidiaries and JVs: NTPC Renewable Energy (NREL, 100%), GVREL (51%), INGEL (50% JV with IOCL), ONGC NTPC Green (ONGPL, 50% JV, which owns the Ayana platform), and APNHAL (stake raised to 51% from 50%, approved with the Q1 results) [V psuwatch Q1 report]. **Q2 FY27 is not out** as of 13-Oct-26.

### 6a. Standardised financial pack (consolidated; screener fetched 13-Oct-26 [V])
| Metric | FY26 | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹2,858 cr | ₹2,210 cr | +29.3% [V] |
| Operating profit (screener) | ₹2,461 cr (86.1%) | ₹1,920 cr (86.9%) | [V]. Company "operating EBITDA ₹2,475 cr" per primer (not re-verified) |
| EBITDA incl OI | ≈₹2,682 cr (93.8%) | ≈₹2,177 cr | [E] |
| PAT | ₹521 cr | ₹474 cr | +10% [V] |
| ROCE / ROE | 3.6% / 2.8% | 5% | [V] |
| Borrowings | ₹31,716 cr (LT 28,637 + ST 621 + lease 2,458) | ₹19,441 cr | [V] |
| Cash equivalents | ₹618 cr | ₹3,517 cr (IPO cash, since deployed) | [V]. Investments ₹3,536 cr (mostly JV equity) |
| Net debt | ≈₹31,098 cr | ≈₹15,924 cr | [E]. Jun-26 paid-up debt ₹32,353 cr, D/E 1.68x, net worth ₹19,270 cr [V psuwatch summary of the results filing] |
| Net debt / EBITDA | ≈11.6x (incl OI) / 12.6x (OP) | | [E]. Still loading up on under-construction capex |
| CFO / FCF | ₹2,386 cr / −₹12,832 cr | ₹2,051 / −₹9,986 cr | [V] |
| Market cap | **₹78,230 cr** @ ₹92.8 (13-Oct-26) | | 52-wk H/L ₹120/₹84 [V]. 14% below the ₹108 IPO price |
| P/E / P/B | 129x / 4.1x (BV ₹22.5) | | [V] |
| EV/EBITDA (TTM) | ≈36x (incl OI) / ≈39x (OP) | | [E] |

### 6b. Latest quarter: Q1 FY27 (results 22-Jul-26)
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue from ops | ₹1,106.9 cr | ₹680.2 cr | **+62.7%** [V screener & psuwatch] |
| Operating profit | ₹989 cr (89%) | ₹604 cr (89%) | [V] |
| Interest / depreciation | ₹322 cr / ₹343 cr | ₹193 / ₹223 cr | [V] |
| Share of JV profit | ₹29 cr | | [V psuwatch] |
| PAT (consol) | ₹304.8 cr | ₹220.5 cr | +38.3%; +55% QoQ [V] |
| Standalone PAT | ₹152.8 cr | ₹165.2 cr | −7.5%, as growth sits in NREL [V] |
| Sequential | Q4 FY26 revenue ₹913 cr, PAT ₹197 cr | | [V screener] |

### 6c. Native KPIs
- **Q1 FY27 operating data** [V energetica-india.net, fetched; it reports the company's Q1 release]:
  - Operational capacity **10,671 MW at 30-Jun-26** (solar 9,891 MW + wind 780 MW); 10,722 MW at 20-Jul-26. Added 595 MW in Q1 FY27 and **4,174 MW in FY26**.
  - Generation **5,753 MU** (+65% YoY from 3,486 MU): solar 5,126 MU, wind 627 MU.
  - **CUF: solar 24%, wind 37%**.
  - Operating EBITDA ₹989 cr (+64%).
  - **Portfolio 30,413 MW** = 10,671 operational + **16,318 MW contracted and awarded** + 3,424 MW pipeline.
  - BESS planned: Kerala 320 MWh, Rajasthan 1,600 MWh, UP 200 MWh, **over 2.1 GWh** in total.
- **FY26 operating data** [search snippet citing the company; **unverified**]: consolidated generation 14,596 MU (6,828 MU in FY25). CUF 22.48% (24.07%); solar CUF was hit by grid curtailment and wind improved. Contracted and awarded capacity was 16,468 MW plus 3,426 MW of pipeline at 31-Mar-26.
- **Mix implication:** NGEL is about 93% solar by operating MW (9,891 of 10,671). Its under-construction book (6.4 GW wind of 16.0 GW) shifts it toward wind and hybrid, which should lift the blended CUF from the current ~22–24% [E].
- **Capacity bridge:** 10,076 MW (Mar-26, per primer) → 10,671 MW (Jun-26) [V] → 10,722 MW (20-Jul-26) [V] → 11,058.6 MW (26-Sep-26) [V BSE] → 11,212.5 MW (1-Oct-26) [V BSE] → **11,328.7 MW (10-Oct-26)** [V BSE]. That is about 660 MW added in Q2 FY27 to date, against 595 MW in Q1.
- **Installed capacity (group):** **11,328.69 MW at 10-Oct-2026** (commercial 11,262.51 MW before the latest 66.18 MW Kalasar block) [V BSE filing 9-Oct-26]. It was 11,212.51 MW at 1-Oct-26 [V BSE 29-Sep-26], 10,671 MW at 30-Jun-26 [V energetica-india] and 10,076 MW at Mar-26 (per primer). The Kalasar (Bikaner) solar blocks are part of the 650 MW solar component of the **500 MW REMCL RTC project** (round-the-clock supply to Railways) [V]. ONGPL JV project CODs (Project Sixteen Renewable) were filed 9-Oct-26 [V screener/BSE list].
- **Under construction (30-Jun-26):** **16,024 MW** for the NGEL group: solar 9,648 MW and wind 6,376 MW. By entity: NREL solar 8,338 MW, NREL wind 4,904 MW, GVREL solar 310 MW, INGEL solar 800 + wind 871 MW, ONGPL solar 200 + wind 601 MW [V NTPC Q1 FY27 deck].
- **Target:** 60 GW by FY32 [K, company; reiterated in primer]. Q1 FY27 additions of 3,869 MW YoY in the NGEL group drove the subsidiary profit [V NTPC deck].
- **PPA/offtake:** mostly 25-year PPAs with SECI, NTPC and states, plus RTC (REMCL) and C&I. CUF is in the Q1 data bullet above (solar 24%, wind 37%). For comparison, NTPC standalone solar PLF was 31.06% in Q1 FY27 [V NTPC deck].
- **Green hydrogen:** the Pudimadaka (AP) green hydrogen hub, with its foundation stone laid Jan-2025 (per primer) [K].
- **Ratings:** CRISIL (Jun-26) and Ind-Ra (Jun-26) updates [V screener doc list]. AAA [K].

### 6d. Ownership (screener, Jun-2026 [V])
NTPC (promoter) 89.01%. FII 1.67%. DII 5.21%. Public 4.12%. 12.3 lakh shareholders, down from 14.1 lakh in Mar-25, as retail IPO holders exit.

### 6e. Story bullets
1. **Volume growth is finally showing up:** Q1 revenue +63% and PAT +38% as about 4 GW added in FY26 starts earning. It crossed 11.3 GW in Oct-26.
2. **A 16 GW construction book:** the target is about 60 GW by FY32, but net debt/EBITDA is above 11x and FCF −₹12.8k cr. Growth is funded by NTPC parentage, not cash flow.
3. **Valuation:** P/E 129x and P/B 4.1x, with the stock 14% below its IPO price. The float overhang is still to come (89% promoter, MPS deadline about 2029).
4. **JV platforms:** Ayana via ONGPL, INGEL with IOCL, and APNHAL hydrogen at 51%. These diversify the mix but add complexity.


### 6g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 622 | 680 | 612 | 653 | 913 | 1,107 |
| Operating Profit | 560 | 604 | 530 | 535 | 774 | 989 |
| OPM % | 90% | 89% | 86% | 82% | 85% | 89% |
| Other Income | 129 | 89 | 60 | 31 | 48 | 44 |
| Interest | 177 | 193 | 207 | 230 | 257 | 322 |
| Depreciation | 206 | 223 | 261 | 300 | 318 | 343 |
| Profit before tax | 307 | 277 | 122 | 37 | 247 | 368 |
| Net Profit | 233 | 220 | 86 | 17 | 197 | 305 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|
| Sales | 170 | 1,963 | 2,210 | 2,858 | 3,285 |
| Operating Profit | 152 | 1,745 | 1,920 | 2,461 | 2,828 |
| OPM % | 90% | 89% | 87% | 86% | 86% |
| Other Income | 1 | 77 | 257 | 221 | 183 |
| Interest | 51 | 694 | 766 | 898 | 1,016 |
| Depreciation | 50 | 643 | 758 | 1,102 | 1,221 |
| Net Profit | 171 | 343 | 474 | 521 | 606 |
| EPS in Rs | 0.36 | 0.60 | 0.56 | 0.62 | 0.71 |
| Dividend Payout % | 0% | 0% | 0% | 0% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 168 | 513 | 10,014 | 10,539 |
| Borrowings | 6,137 | 13,856 | 19,441 | 31,716 |
| Fixed Assets | 14,758 | 17,573 | 21,816 | 39,202 |
| CWIP | 1,749 | 7,138 | 13,983 | 14,193 |
| Investments | 0 | 0 | 3,199 | 3,536 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 17 | 1,616 | 2,051 | 2,386 |
| Cash from Investing Activity | -10,304 | -9,218 | -17,845 | -12,117 |
| Free Cash Flow | -734 | -7,937 | -9,986 | -12,832 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 700 | 131 | 85 | 78 |
| ROCE % |  | 8% | 5% | 4% |

---

## 7. NLC India Ltd (NSE: NLCINDIA · BSE: 513683)

**Status:** listed Navratna PSU under the Ministry of Coal. **GoI OFS of 2.73% in Jun-2026** was oversubscribed in the institutional portion and raised about ₹1,260 cr [V NLC Q1 FY27 results notes, BSE 7-Aug-26]. GoI is now **69.47%** [V screener SHP Jun-26]. Group: NTPL (JV with TANGEDCO, 1,000 MW) [K], **NUPPL (Ghatampur 3×660 MW, fully commissioned; Unit-3 COD 13-Jun-2026)** [V results notes], and **NLC India Renewables (NIRL), 100% owned**, with step-down JVs NIRL Assam (with APDCL), NIRL Rajasthan (with RVUNL) and NIRL NCRTC [V results filing; May-26 investor deck]. **The NIRL IPO** (about ₹4,000 cr, up to 25% dilution, BRLMs SBI Caps, HDFC Bank, IIFL, IDBI Caps) was guided for "FY2027". **The DRHP has not been seen filed** as of Oct-26 [V May-26 deck: "IPO of NIRL is planned in FY2027"; banker details are search snippets, unverified]. Recent filings: ₹1,000 cr commercial paper issued 12-Oct-26. P L S S Chaitanya Prakash appointed Director (Power) on 5-Oct-26. NIRL won a 265 MW/530 MWh BESS tender in Haryana at ₹2.35 lakh/MW/month (30-Sep-26) [V screener/BSE announcement list]. Q2 FY27 is not out.

### 7a. Standardised financial pack (consolidated; screener fetched 13-Oct-26 [V])
| Metric | FY26 | FY25 | Note |
|---|---|---|---|
| Revenue from ops | ₹17,519 cr (company ₹17,490 cr) | ₹15,322 cr (company ₹15,283 cr) | +14.3% [V screener; V NLC May-26 deck] |
| Operating profit (screener) | ₹5,558 cr (31.7%) | ₹4,747 cr (31.0%) | [V] |
| EBITDA (company) | **₹7,475 cr (43%)** | ₹6,513 cr (43%) | [V deck]. Equals screener OP + OI exactly, so it includes net regulatory income of ₹909 cr (₹66 cr in FY25) |
| PAT | ₹3,769 cr | ₹2,714 cr | +39%. The tax rate was only 3% [V] |
| ROCE / ROE | 8.4% / 11.9% | 11% | [V] |
| Borrowings | ₹27,892 cr (LT 23,032 + ST 4,770 + lease 90) | ₹22,429 cr | [V] |
| Cash equivalents | ₹842 cr | ₹320 cr | [V] |
| Net debt | ≈₹27,050 cr | ≈₹22,109 cr | [E]. Debt/equity 1.29x in FY22 to 1.57x in FY26 [V deck chart, label order inferred] |
| Net debt / EBITDA | ≈3.6x | ≈3.4x | [E] |
| CFO / FCF | ₹5,166 cr / −₹2,474 cr | ₹8,977 / ₹1,709 cr | [V] |
| Segment revenue FY26 (incl. inter-segment ₹6,475 cr) | Mining ₹8,795 cr; Thermal ₹14,443 cr; Renewables ₹726 cr | | [V deck] |
| Market cap | **₹34,014 cr** @ ₹245 (13-Oct-26) | | 52-wk H/L ₹388/₹230. The ₹387.80 all-time high was on 14-May-26 [V screener & deck] |
| P/E / P/B | 10.6x / 1.58x (BV ₹155) | | [V] |
| EV/EBITDA (TTM) | ≈7.9x (incl OI) / ≈10.2x (OP) | | [E] |
| Dividend | 38.5% of FV for FY26 (₹3.85/share: interim 36% + final 2.5%); yield 1.57% | | [V deck & screener] |

### 7b. Latest quarter: Q1 FY27 (results 7-Aug-26)
| Metric | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue (consol) | ₹4,717 cr | ₹3,826 cr | +23.3% [V screener] |
| Operating profit / OPM | ₹1,471 cr / 31% | ₹935 cr / 24% | +57% [V] |
| Other income | ₹228 cr | ₹497 cr | [V] |
| PBT | ₹652 cr | ₹594 cr | +9.8% [V] |
| PAT (consol) | ₹436 cr | ₹839 cr | −48%. The tax rate was 33% vs −41% (a credit) last year [V] |
| Standalone revenue / PAT | ₹2,871.7 cr / ₹374.3 cr | ₹2,495.6 cr / ₹368.2 cr | +15.1% / +1.7% [V NLC results filing, BSE 7-Aug-26]. Standalone FY26: revenue ₹10,863.9 cr, PAT ₹2,525.1 cr [V] |
| Group gross generation | 8,262 MU | 6,609 MU | +25% [search snippet; **unverified**] |
| Talabira coal production | 40.85 lakh t | 37.88 lakh t | [search snippet; **unverified**] |
| Sequential | Q4 FY26 revenue ₹5,042 cr, PAT ₹1,481 cr | | [V] |

### 7c. Native KPIs
- **Installed capacity:** at Mar-26 (May-26 deck) thermal **5,960 MW** (NLCIL 3,640 + JVs 2,320) and renewables **1,734 MW**. NUPPL Unit-3 (660 MW) added in Jun-26 takes thermal to **≈6,620 MW** and the group to **≈8.35 GW** [V deck + V results note; total E]. Secondary reports say "8.4 GW" [snippet]. FY26 additions were 963 MW (660 thermal + 303 RE) [V deck].
- **Mining:** capacity **50 MTPA** (lignite 30 + coal 20). Talabira II & III produced **19.14 MT in FY26** (record) and dispatched 17.69 MT. **Pachwara South (9 MTPA)** started coal production in Mar-26 [V deck]. Pipeline: Machhakata 30 MT (FY32), New Patrapara 12 MT (FY32), North Dhadu 3 MT (FY29), Neyveli Mine-III 11.5 MT, Gurha 1 MT, Bithnok 2.25 MT. Target 104 MTPA [V deck].
- **Thermal pipeline:** Odisha Pithead TPS Phase-I **2,400 MW (₹27,213 cr; LoA issued; units in Feb-30, Aug-30 and Feb-31)**. Phase-II 800 MW. TPS-II 2nd Expansion 1,000 MW (₹11,653 cr; NIT floated). Rajasthan lignite 375 MW. Target 10,020 MW thermal by 2030 [V deck].
- **RE pipeline:** NIRL has 1,734 MW operational and **5,810 MW under implementation**, plus 3,885 MW tied up through JVs. Projects: Gujarat solar 600 MW (Sep-26), Rajasthan solar 810 MW (Mar-28), CPSU 200 MW (Dec-26), hybrid 150 MW, TNGECL BESS 250 MW/500 MWh, PSPCL BESS 500 MW, NTPC hybrid 450 MW, SJVN wind 200 MW, Odisha PSP 750 MW. Target **10,110 MW RE by 2030**, with about ₹50,000 cr of RE investment [V deck].
- **Tariff:** lignite plants earn CERC cost-plus with mine-integrated lignite transfer pricing. NUPPL is billing on an interim tariff order at 85% of the claimed AFC [V results note 8; the OCR is partly garbled].
- **Receivables:** debtor days fell to 70 in FY26 from 98 in FY25 [V screener]. Trade receivables ₹3,338 cr [V].

### 7d. Ownership (screener, Jun-2026 [V])
Promoter (GoI) **69.47%**, down from 72.20% after the OFS. FII 4.62%. DII 12.94%. Government (other) 4.31%. Public 8.66%. 3.33 lakh shareholders.

### 7e. Story bullets
1. **Ghatampur is complete:** 1,980 MW at NUPPL lifts group generation by 25%. Consolidated revenue rose 23% in Q1, but PAT halved on tax normalisation.
2. **Coal is the hidden growth engine:** Talabira produced 19 MT in FY26, Pachwara South 9 MTPA has started, and the target is 104 MTPA. The 2.4 GW Odisha pithead TPS has been awarded.
3. **NIRL value-unlock:** the 10 GW RE target and a ~₹4k cr IPO were planned for FY27. Execution is lagging, with 1.7 GW operating and the DRHP still pending.
4. **De-rating:** ₹245 vs the ₹388 ATH in May-26; m-cap ₹34k cr vs the primer's ₹43.5k cr; P/E 10.6x; OFS supply.


### 7g. Financial history (screener consolidated, fetched 13-Oct-26 [V])
**Six-quarter trend**

| ₹ cr | Mar 2025 | Jun 2025 | Sep 2025 | Dec 2025 | Mar 2026 | Jun 2026 |
|---|---|---|---|---|---|---|
| Sales | 3,836 | 3,826 | 4,178 | 4,443 | 5,042 | 4,717 |
| Operating Profit | 861 | 935 | 1,400 | 1,344 | 1,774 | 1,471 |
| OPM % | 22% | 24% | 34% | 30% | 35% | 31% |
| Other Income | 957 | 497 | 359 | 364 | 802 | 228 |
| Interest | 325 | 299 | 289 | 269 | 364 | 382 |
| Depreciation | 581 | 539 | 548 | 597 | 695 | 666 |
| Profit before tax | 912 | 594 | 921 | 843 | 1,518 | 652 |
| Net Profit | 468 | 839 | 725 | 724 | 1,481 | 436 |

**Annual P&L (FY22–FY26, TTM)**

| ₹ cr | Mar 2022 | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 | TTM |
|---|---|---|---|---|---|---|
| Sales | 12,070 | 16,165 | 13,001 | 15,322 | 17,519 | 18,381 |
| Operating Profit | 3,951 | 5,740 | 3,438 | 4,747 | 5,558 | 5,990 |
| OPM % | 33% | 36% | 26% | 31% | 32% | 33% |
| Other Income | 1,544 | -872 | 2,118 | 1,766 | 1,917 | 1,753 |
| Interest | 984 | 1,012 | 849 | 932 | 1,222 | 1,305 |
| Depreciation | 1,909 | 1,801 | 1,825 | 1,884 | 2,379 | 2,505 |
| Net Profit | 1,116 | 1,426 | 1,868 | 2,714 | 3,769 | 3,367 |
| EPS in Rs | 7.88 | 10.07 | 13.37 | 18.90 | 25.40 | 23.14 |
| Dividend Payout % | 19% | 35% | 22% | 16% | 15% |  |

**Balance sheet / cash flow / ratios**

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Reserves | 13,782 | 15,144 | 17,336 | 20,138 |
| Borrowings | 22,333 | 22,415 | 22,429 | 27,892 |
| Fixed Assets | 24,058 | 23,391 | 30,699 | 36,596 |
| CWIP | 14,636 | 17,726 | 15,297 | 14,293 |
| Investments | 8 | 8 | 9 | 8 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Cash from Operating Activity | 4,171 | 5,512 | 8,977 | 5,166 |
| Cash from Investing Activity | -2,499 | -3,059 | -7,160 | -7,549 |
| Free Cash Flow | 1,618 | 2,357 | 1,709 | -2,474 |

| ₹ cr | Mar 2023 | Mar 2024 | Mar 2025 | Mar 2026 |
|---|---|---|---|---|
| Debtor Days | 96 | 106 | 98 | 70 |
| ROCE % | 13% | 7% | 11% | 8% |

---

# PRIMER ISSUES (batch 1)

Method: for each primer I read the cover strip, the "What's new" box and the first sections (snapshot, model, company/owners), then grepped for m-cap, P/E, capacity, revenue, promoter %, net debt, management and key projects. I compared these against the screener fetch of 13-Oct-2026 16:14 UTC and the company filings and decks fetched this session. All seven primers were last refreshed between 30-Jun and 4-Jul-2026 on FY26 data, so **none carries Q1 FY27 (Jun-26 quarter) results** and every m-cap is stale.

## 1. primers/adani-power.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹4.3 L Cr Market cap (Jun '26)" | **₹3,59,198 cr** @ ₹186 (13-Oct-26) | screener [V] |
| 2 | Stale P/E | "~33× trailing earnings (and ~6–7× book)" | **25.2x** P/E; P/B 5.5x | screener [V] |
| 3 | Operating capacity | "18,150 MW across 13 plants" | **18,330 MW** operating (18,150 MW is "effective" capacity), including the Churk 180 MW acquisition | APL Sep-26 deck; Q1 FY27 release [V] |
| 4 | Wrong plant size | "Mahan Energen (MP) ~2,800 MW" | Mahan operating **1,200 MW** (2×600); +3,200 MW under development (Mahan-II 1,600 MW COD Q1 FY28; Mahan-III 1,600 MW) | APL deck [V] |
| 5 | Stale target | "~41.9 GW by FY32" | 42,050 MW locked in (18,330 operating + 23,720 locked-in); **45 GW target by FY32** including ~3 GW proposed | APL deck & Q1 release [V] |
| 6 | Stale net debt | "net debt ~₹45,000 Cr (borrowings ~₹54,000 Cr vs ~₹8,500 Cr cash)" | Net debt **₹47,643 cr at 30-Jun-26** (total debt ₹58,381 cr); Mar-26 screener borrowings ₹54,670 cr and cash equivalents ₹6,926 cr | Q1 release; screener [V] |
| 7 | FY26 revenue basis | "~₹55,600 Cr Revenue (FY26, continuing)" | Revenue from ops **₹54,241 cr** (screener) ≈ US$6,142 mn × 88.3 (company). The primer's figure doesn't reconcile to either | screener; deck [V] |
| 8 | Missing Q1 FY27 | none | Revenue ₹19,322 cr (+33%), continuing EBITDA ₹6,983 cr (+22%), PAT **₹4,867 cr (+47%)**, PLF **77.9%**, merchant ₹7.04/kWh | adani.com release [V] |
| 9 | Missing corporate events | none | Board approved a **₹15,000 cr QIP** and raised the borrowing limit to ₹1 L cr (22-Jul-26; EGM 14-Aug-26; not yet launched). **24% stake in Jaiprakash Power Ventures**, 11.49% of Prayagraj Power. **770 MW Chamkharchhu hydro JV in Bhutan with DGPC (SHA 5-Oct-26)**. SEBI settlement order 28-Sep-26 (₹37.05 lakh) | release; BSE filings [V] |
| 10 | Missing PPA wins | "Maharashtra (MSEDCL) award ~1,600 MW" (LoA) | A 25-year PSA was **signed** in Q1 FY27. APL now has 13,945 MW of SHAKTI B(iv) PPAs awarded across MP, Bihar, UP, Maharashtra, Karnataka and Assam | release; deck [V] |
| 11 | Merchant price context | "FY26 average exchange price fell ~14% to ~₹3.86/unit" | APL's own merchant realisation was **₹5.30/kWh FY26** and **₹7.05/kWh Q1 FY27**. The primer quotes only the exchange average, which understates APL's realised merchant rate | APL deck [V] |
| 12 | Missing face-value change | none | FV ₹2 after the 1:5 split; ~1,929 cr shares | screener [V] |
| 13 | Management | none named | CEO **S B Khyalia** | adani.com release [V] |

## 2. primers/ntpc.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹3.46 L Cr Market cap (Jun '26)" | **₹3,01,178 cr** @ ₹311 (13-Oct-26), near the 52-week low of ₹306 | screener [V] |
| 2 | Stale P/E | "around 12–13× earnings" | **10.8x**; P/B 1.48x | screener [V] |
| 3 | Stale capacity | "89,108 MW group installed" | **90,904 MW** at 30-Jun-26 (standalone 60,992 MW) | NTPC Q1 FY27 deck [V] |
| 4 | Regulated equity | "~₹1.19 lakh Cr" (FY26) | **₹1,21,745 cr consolidated / ₹92,797 cr standalone** (30-Jun-26) | NTPC deck [V] |
| 5 | Under-construction split | "~33 GW under construction … ~17 GW thermal" | **35,702 MW** under construction: coal 15,720, hydro/PSP 3,581, RE 16,401 (30-Jun-26) | NTPC deck [V] |
| 6 | Dividend | "₹9.00/share in FY26, ~2.3% yield" | Deck: "Highest cash dividend paid in FY26 (₹8.85/share)". Yield now 2.89% | NTPC deck; screener [V] |
| 7 | Nuclear status | Mahi Banswara "first concrete poured in early 2026" | Deck: siting consent and EC May-25; foundation stone 25-Sep-25; **excavation consent (Units I & II) received Mar-26**. There is no mention of first pour of concrete, so this is likely overstated | NTPC deck [V] |
| 8 | Missing Q1 FY27 | none | Consol PAT **₹6,896 cr (+13%)**; standalone PAT ₹5,342 cr; coal PLF **76.71%**; Q1 group capex ₹11,591 cr | NTPC deck [V] |
| 9 | Missing events | none | Sinnar Thermal acquired under CIRP (Feb-26). PVUNL Unit-2 800 MW COD 25-Jun-26. Tehri PSP fully commercial. 5 GWh BESS VGF awarded. **CMD Gurdeep Singh's second extension runs to 31-Jan-27** pending a successor | NTPC deck; psuwatch [V] |
| 10 | Ownership not stated | not given | GoI **51.10%**, DII 29.44%, FII 16.30% (Jun-26) | screener [V] |

## 3. primers/adani-green-energy.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹2.5 L Cr Market cap (Jun '26)" | **₹2,12,886 cr** @ ₹1,287 (13-Oct-26) | screener [V] |
| 2 | Stale P/E | "~130–150× earnings" | **110x**; P/B 10.6x | screener [V] |
| 3 | Stale capacity | "~19.3 GW operating (FY26 end)" | **20,763 MW** at 30-Sep-26 (solar 14,550 / wind 3,266 / hybrid 2,947); 20,142 MW at Q1 | H1 FY27 ops update; Q1 deck [V] |
| 4 | Stale BESS | "BESS scaling past 3.37 GWh" | **6,632 MWh** installed at 30-Sep-26 (3,081 MWh added in Q2) | H1 FY27 ops update [V] |
| 5 | **US legal status wrong** | "US federal judge … declined to dismiss … the overhang has eased but is not yet [over]"; "judge still reviewing" | On **10-Aug-26 EDNY dismissed the indictment with prejudice** for Gautam Adani, Sagar Adani and Vneet Jaain, and entered final judgment in the SEC case (US$6 mn + US$12 mn). AGEL is not a party | AGEL BSE disclosures 11-Aug-26 via filingreader [V] |
| 6 | Missing Q1 FY27 | none | Revenue from power supply ₹4,280 cr (+29%), EBITDA ₹4,122 cr (+33%, 93.7%), cash profit ₹2,225 cr; PAT ₹983 cr | Q1 deck; screener [V] |
| 7 | Misleading CUF benchmark | "a solar plant runs at only ~24% and wind at ~29% CUF" | AGEL's actual Q1 FY27 CUFs: solar 25.3%, **wind 44.4%**, hybrid 49.0% (H1: 22.9 / 42.9 / 45.2%) | Q1 deck; ops update [V] |
| 8 | Missing results date | none | Q2 FY27 board meeting **21-Oct-2026** | BSE intimation [V] |
| 9 | Ownership not stated | not given | Promoters **62.43%** (Sep-26), up from 56.37% in Mar-24 after the warrants | screener [V] |

## 4. primers/jsw-energy.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap/price | "~₹1.04 L Cr (Jul 2026)", "share price around ₹565" | **₹84,360 cr** @ **₹460** (13-Oct-26) | screener [V] |
| 2 | Stale multiples | "P/E near 48×, P/B ~3.2×, EV/EBITDA ~18×" | **42.0x / 2.63x / ≈13x** | screener [V]; [E] |
| 3 | Stale capacity | "13.45 GW installed" | **14,535 MW** (8-Jul-26): thermal 5,658, hydro 1,781, wind 3,125, solar 2,275, hybrid 1,696 | Q1 FY27 deck [V] |
| 4 | **Wrong KSK Mahanadi size** | "KSK Mahanadi (Chhattisgarh, 3,600 MW)" | **1,800 MW operating**; 600 MW "JSW Mahanadi" under construction | Q1 deck thermal table [V] |
| 5 | Wrong Vijayanagar size | "Vijayanagar (Karnataka, ~1,460 MW)" | **860 MW** | Q1 deck [V] |
| 6 | Wrong hydro size | "Hydro (Himachal) ~1.4 GW" | **1,781 MW** after Tidong 150 MW (12-Jun-26); about 1,631 MW at FY26 | Q1 deck [V] |
| 7 | Stale net debt | "net debt ₹65,834 Cr (net-debt/equity ~2.1×)" | **₹61,322 cr (30-Jun-26)**, ND/equity **1.70x**, ND/EBITDA 5.53x; cash ₹12,881 cr | Q1 deck [V] |
| 8 | Missing capital raises | none | **QIP ₹4,000 cr (25-May-26)**; promoter preferential ₹3,000 cr; JSW Steel stake sale ₹3,150 cr (18-May-26). Promoter fell to 66.53% | Q1 deck; screener [V] |
| 9 | Missing acquisition | none | Maruti Clean Coal & Power 300 MW (DA 13-Jun-26, EV ₹1,410 cr) | Q1 deck [V] |
| 10 | Locked-in figure | "locked-in generation 32.1 GW" | **32.4 GW** (Q1 FY27); under construction 13,567 MW | Q1 deck [V] |
| 11 | Missing Q1 FY27 | none | EBITDA ₹3,103 cr (+2%), PAT ₹533 cr (−36%), thermal PLF 71%; FY27 capex guidance ₹20,000 cr | Q1 deck [V] |

## 5. primers/nhpc.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Wrong post-OFS stake** | "Govt of India cut its stake to ~67.4% via a June-2026 OFS"; "~67% owned" | 67.40% was the **pre-OFS** level. After the 6% OFS (2–3 Jun-26) GoI holds **61.39%** | screener SHP Jun-26; NHPC Jun-26 deck [V] |
| 2 | Stale m-cap | "~₹81,600 Cr (Jul 2026)" | **₹74,717 cr** @ ₹73.5 (13-Oct-26) | screener [V] |
| 3 | Stale P/E | "~21.7×", P/B ~1.8× | **19.7x**, P/B 1.78x | screener [V] |
| 4 | FY26 PAT basis/figure | "standalone net profit ₹3,689 Cr (+24.6%)" | Deck: standalone FY26 PAT **₹3,617.8 cr**; consolidated (owners) **₹3,765.7 cr**; consolidated incl. NCI ₹4,220 cr | NHPC Jun-26 deck "Key ratios"; screener [V] |
| 5 | Revenue growth | "₹11,615 Cr Revenue (FY26) · +6%" | ₹11,615 cr is **+11.9%** on FY25's ₹10,380 cr (consolidated) | screener [V] |
| 6 | Hydro share | "~9.3 GW … ~83% hydro" | 8,771 MW hydro of 9,333 MW = **94% hydro** | NHPC deck [V] |
| 7 | Project status | Under construction "(Subansiri Lower, Parbati-II, Teesta-VI and more)" | Parbati-II (800 MW) is **commissioned** and in operating stations. Under construction: Subansiri balance 4 units (Q4 FY27), Teesta-VI, Dibang, Kiru, Pakal Dul, Kwar, Ratle, Rangit-IV etc. | NHPC deck [V] |
| 8 | Missing events | none | Teesta-V back in commercial operation Jul-26. CCEA approval for **Kamala 1,720 MW** (8-Apr-26). Etalin 3,097 MW MoA (16-Jun-26). Jalpower amalgamation (MCA hearing 28-Sep-26). FY27 capex target ₹15,000 cr | NHPC deck; BSE [V] |
| 9 | Missing Q1 FY27 | none | Revenue ₹3,808 cr (+18.5%), PAT ₹1,178 cr (+4%); finance cost +132% | NHPC deck [V] |

## 6. primers/ntpc-green-energy.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap/price | "~₹80,600 Cr (Jul 2026)", "share price around ₹95–96" | **₹78,230 cr** @ **₹92.8** (13-Oct-26) | screener [V] |
| 2 | Stale P/E | "~140–150×" | **129x**; P/B 4.1x | screener [V] |
| 3 | Stale capacity | "10.1 GW operational (Mar 2026)" | **11,328.69 MW** installed at 10-Oct-26 | NGEL BSE COD filing 9-Oct-26 [V] |
| 4 | Net debt basis | "net debt ~₹31,700 Cr, debt/equity ~1.5×" | ₹31,716 cr is **gross** borrowings. Net ≈₹31,100 cr (Mar-26). Jun-26 paid-up debt ₹32,353 cr, **D/E 1.68x** | screener; psuwatch summary of the results filing [V] |
| 5 | ROE | "ROE only ~3–4%" | **2.79%** | screener [V] |
| 6 | Missing Q1 FY27 | none | Revenue ₹1,107 cr (**+63%**), PAT ₹305 cr (+38%); standalone PAT down 7.5% | screener; psuwatch [V] |
| 7 | Missing pipeline figure | (no hard under-construction figure) | **16,024 MW** under construction in the NGEL group (solar 9,648 / wind 6,376) at 30-Jun-26 | NTPC Q1 FY27 deck [V] |
| 8 | Missing events | none | APNHAL stake raised to 51%; REMCL 500 MW RTC (Kalasar) blocks commissioned Sep–Oct-26 | psuwatch; BSE [V] |
| 9 | Ownership not prominent | — | NTPC **89.01%**; MPS 25% deadline about Nov-2029 | screener [V]; [K] |

## 7. primers/nlc-india.html
| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹43,500 Cr Market cap (Jul '26)" | **₹34,014 cr** @ ₹245 (13-Oct-26) | screener [V] |
| 2 | Stale P/E | "~12× earnings" | **10.6x**; P/B 1.58x | screener [V] |
| 3 | **Wrong installed capacity** | "~6,900 MW installed" | Mar-26: thermal **5,960 MW** + RE **1,734 MW** = 7,694 MW. After NUPPL U-3 (660 MW, COD 13-Jun-26): **≈8,350 MW** | NLC May-26 deck; Q1 results notes [V]; total [E] |
| 4 | **Wrong NIRL ownership** | "NLC's ~72% (or so) stake in NIRL" | NIRL is a **wholly-owned (100%) subsidiary**. 72% was GoI's stake in NLC, not NLC's stake in NIRL | NLC May-26 deck; results filing (subsidiary list) [V] |
| 5 | OFS outcome / GoI stake | "GoI held ~72.2% … June 2026 OFS of up to 3% (floor ₹303)" | OFS sold **2.73%** for about ₹1,260 cr; GoI now **69.47%** | NLC results note 4 (BSE 7-Aug-26); screener [V] |
| 6 | NIRL IPO timing | "NIRL renewable-arm IPO greenlit for ~Q2 FY27" | Deck: "planned in FY2027". No DRHP seen as of 13-Oct-26 (Q2 FY27 has ended). BRLMs appointed Jul-26 [snippet] | NLC deck [V]; search [unverified] |
| 7 | Missing Q1 FY27 | none | Consol revenue ₹4,717 cr (+23%), PAT ₹436 cr (−48% on tax normalisation); standalone PAT ₹374 cr (+2%) | screener; results filing [V] |
| 8 | Missing pipeline facts | — | Odisha Pithead TPS 2,400 MW LoA (₹27,213 cr). Pachwara South 9 MTPA started Mar-26. Talabira 19.14 MT in FY26. RE 5,810 MW under implementation. NIRL BESS win 265 MW/530 MWh (30-Sep-26) | NLC deck; BSE [V] |
| 9 | Missing record share price context | — | All-time high of ₹387.80 on 14-May-26; now ₹245 (−37%) | NLC deck; screener [V] |
