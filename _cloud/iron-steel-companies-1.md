# Iron & Steel: company packs, batch 1 (integrated majors)

Sub-sector: Iron & Steel || Iron & Steel. Prepared 2026-10-13 (Phase-1b company-pack subagent, batch 1 of 3).
Members: JSW Steel, Tata Steel, Jindal Steel, Steel Authority of India (SAIL), NMDC Steel.

**Tags.** [V] = fetched and read this session (URL given). [K] = from memory, with the source named; not re-fetched. [E] = estimate or my own arithmetic (method stated). [S] = search-result snippet only, not fetched. Treat these as unverified.

**Common sources (fetched 2026-10-13):**
- Screener consolidated pages, saved as HTML by curl and parsed with python: `https://www.screener.in/company/<NSE>/consolidated/`. NMDC Steel's consolidated page is empty, so its standalone page `/company/NSLNISP/` is used. Cash and equivalents come from screener's balance-sheet schedule API, `/api/company/<id>/schedules/?parent=Other Assets&section=balance-sheet`. "Other Assets" in that schedule is **not** cash. Only the "Cash Equivalents" line is used. All m-caps and prices are as of the 13-Oct-2026 fetch.
- Screener "Operating Profit" = sales minus expenses, **before other income**. It is used as the screener EBITDA basis. Company "Adjusted EBITDA" figures differ: they exclude FX on intercompany loans, one-offs and similar items, and are labelled where used.
- Screener P/E is on TTM reported PAT. For JSW Steel that includes the ₹17,888 Cr BPSL slump-sale gain (see below), so its screener P/E is distorted.
- Q2 FY27 (Sep-26 quarter) results: **none of the five has reported as of 13-Oct-2026.** JSW Steel's board meets on 23-Oct-2026 [S: psuconnect.in "JSW Steel Board Meet 23 Oct for Q2 Results"]. JSW Steel and Tata Steel have published Q2 FY27 **production updates** (7–8 Oct 2026); both are included below.
- Shareholding: the latest pattern on screener is **Jun-2026**. The Sep-2026 filing is due by ~21-Oct and was not yet posted.

---

## 1. JSW Steel Ltd: NSE JSWSTEEL · BSE 500228

Fetched 2026-10-13. Still listed; no merger or demerger of the listed entity. A proposed merger of the subsidiary JSW Ispat Special Products into JSW Steel was announced with Q4 FY26 [V: freepressjournal.in Q4 FY26 piece, via search; status not re-checked]. **Major perimeter change:** the BPSL (Bhushan Power & Steel) steel undertaking was slump-sold in **March 2026** into JSW-JFE Steel Ltd, a 50:50 JV with JFE Steel. JSW now reports BPSL outside its consolidated volumes, and prior-year volumes are restated to exclude it.

### 1a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 1,75,006 | 1,68,824 | **1,85,470** (+9.9% YoY) | [V] screener |
| Operating profit (screener EBITDA, before OI) | 28,157 | 22,725 | **29,464** | [V] screener |
| OPM | 16% | 13% | **15.9%** | [V] screener |
| Company "Adjusted EBITDA" | n/a | n/a | **32,048** (reported EBITDA 29,821) | [V] Angel One FY26 results article, https://oga-prod.angelone.in/news/stocks/jsw-steel-share-price-in-focus-revenue-rises-in-fy26-results-dividend-announced |
| Other income | 1,500 | 73 | **18,489** (includes the BPSL slump-sale gain) | [V] screener |
| PAT (reported) | 8,973 | 3,491 | **25,508** | [V] screener |
| PAT normalised (ex-exceptional) | n/a | n/a | **8,698** | [V] Angel One (above) |
| Exceptional gain Q4 FY26 | n/a | n/a | net ₹17,888 Cr (₹18,051 Cr BPSL slump-sale gain, less a ₹163 Cr labour-code charge) | [V] Groww, https://groww.in/blog/jsw-steel-q4-fy26-results |
| ROCE (screener) | 13% | 8% | 11% | [V] screener |
| Borrowings | 87,984 | 98,752 | **99,310** | [V] screener |
| Cash & equivalents | 12,348 | 13,285 | **40,989** | [V] screener schedule API |
| Net debt (screener basis) | 75,636 | 85,467 | **58,321** | [E] borrowings minus cash |
| Net debt (company) | n/a | ~79,850 (Q4 FY25 chart) | **53,870** (Mar-26); **46,157** (Jun-26) | [V] BOBCAPS Q1 FY27 review (Fig 7) and cofacto.ai call summary. 53,870 = 46,157 + 7,713 reduction in Q1 |
| ND/EBITDA (company) | n/a | 3.34× (per primer) | **1.81×** (Mar-26); **1.46×** (Jun-26) | [V] Angel One; cofacto.ai, https://cofacto.ai/market-news/jswsteel-q1-fy27-earnings-call |
| CFO / FCF (screener) | 12,078 / −3,469 | 20,899 / 8,264 | 25,152 / 10,610 | [V] screener |

**Valuation, 13-Oct-2026** [V screener]: price ₹1,177; m-cap **₹2,88,076 Cr**; 52-week high/low ₹1,351/1,073; book value ₹409, so **P/B 2.88×**; screener P/E **23.9×**. That P/E is on TTM PAT of ₹27,995 Cr, which includes the BPSL gain. On normalised earnings the P/E is far higher [E]: TTM normalised PAT is roughly ₹8.7k + Q1 uplift ≈ ₹11k Cr, which gives about 26×. ROCE 11.0%, ROE 10.2%. Dividend yield 0.60% (₹7.10/share FY26).
**EV/EBITDA** [E]: m-cap + company net debt at Jun-26 = ₹2,88,076 + 46,157 = ~₹3.34 lakh Cr. That is **~10.7× TTM screener operating profit** (₹31,155 Cr) and **~10.4× FY26 adjusted EBITDA**. Minority interest and the JV stake are ignored.

### 1b. Q1 FY27 (Jun-26 quarter) and Q2 FY27 production

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | **47,364** | 51,180 reported / 49,798 restated ex-BPSL | 43,147 reported / 42,460 restated | [V] screener; BOBCAPS Fig 1 |
| EBITDA (₹ Cr) | **9,383** reported / 9,373 adjusted | 8,634 | 7,576 (restated) | [V] BOBCAPS; cofacto.ai |
| EBITDA margin | 20.1% | 17.3% | 17.8% | [V] BOBCAPS |
| PAT (₹ Cr) | **4,696** (screener; BOBCAPS 4,651) | 19,243 | 2,209 | [V] screener; BOBCAPS |
| Crude steel (MT) | 6.59 consolidated; India 6.35 | 7.49 | n/a | [V] cofacto.ai; Arihant, https://www.arihantcapital.com/company-information/companynewsdetails/25198010267 |
| Steel sales (MT) | **6.25** (+4% YoY ex-BPSL) | 6.5 (ex-BPSL) | 6.4 | [V] BOBCAPS Fig 3 |
| Realisation (₹/t, consolidated) | **74,659** (+13% YoY, +19.5% QoQ) | 62,482 | 66,034 | [V] BOBCAPS Fig 3 (PL Capital gives ₹75,782) |
| EBITDA/t (company, consolidated) | **₹14,997** | 12,187 | 11,782 | [V] BOBCAPS Fig 3 |
| EBITDA/t computed | ₹15,013 = 9,383 / 6.25 | n/a | n/a | [E] |
| EBITDA/t (standalone) | ₹12,609 on 5.2 MT | 9,815 | 10,740 | [V] BOBCAPS Fig 4 |
| India utilisation | 94% | n/a | 88% | [V] BOBCAPS |
| Capex in quarter | ~₹4,869 Cr | n/a | n/a | [V] cofacto.ai |

BOBCAPS Q1 FY27 review (18-Jul-2026), fetched as PDF via WebFetch and read with pdftotext: https://www.barodaetrade.com/Reports/JSWSteel-Q1FY27ResultReview18Jul26-Research.pdf

**Q2 FY27 production update (8-Oct-2026)** [V: FPJ, https://www.freepressjournal.in/business/jsw-steel-reports-727-lakh-tonnes-consolidated-crude-steel-production-in-q2-fy27-up-10-qoq]:
- Consolidated crude steel 7.27 MT, +10% QoQ and +5% YoY on the restated ex-BPSL base. Originally reported Q2 FY26 was 7.90 MT including BPSL.
- India 7.07 MT; US (Ohio) 0.20 MT.
- India utilisation 88% for the quarter and ~90% in September, as Vijayanagar BF3 ramped up after its upgrade.
- H1 FY27 crude steel 13.86 MT, +4% YoY.
- Q2 results: board meeting on 23-Oct-2026.

### 1c. Steel KPIs

| KPI | Value | Basis / source |
|---|---|---|
| Crude capacity, India (current) | ~32 MTPA on the domestic consolidated perimeter, ex-BPSL | [V] BOBCAPS ("current 32mnt"). The primer's ~34.2 MTPA India / ~35.7 MTPA global appears to pre-date BPSL deconsolidation. |
| Capacity in JV | JSW-JFE (ex-BPSL) 4.5 MTPA, expanded from 2.75 | [V] JSW-JFE announcement (BSE, 3-Dec-2025), https://bsmedia.business-standard.com/_media/bs/data/announcements/bse/03122025/cadf63bd-ec7a-43e0-a8e5-4187e021095d.pdf |
| Overseas capacity | US: Ohio (EAF/plate & pipe, ~1.5 MTPA EAF) and Texas (plate & pipe mill); Italy: Piombino rail mill (no steelmaking) | [K] JSW annual report FY25. FY27 guidance for Ohio is 1.0 MT production [V] Angel One. |
| Target | 49 MTPA India by FY30, 62 MTPA India by FY32, 78 MTPA including JVs by FY32 | [V] BOBCAPS. Management describes the "₹2,26,000 Cr / 62 Mt" plan as not yet board-approved [V] cofacto.ai. The primer says "~56 MTPA by FY31". |
| FY26 crude steel | **30.14 MT** (+8%); includes BPSL for most of the year | [V] Angel One |
| FY26 sales | **29.63 MT** | [V] Angel One |
| FY27 guidance | Production 29.75 MT, sales 28.60 MT (India 28.75 / 27.60; USA 1.0 / 1.0), ex-BPSL | [V] Angel One |
| Utilisation | 94% Q1 FY27; 88% Q2 FY27 (India) | [V] BOBCAPS; FPJ |
| Realisation | FY26 n/a; Q1 FY27 ₹74,659/t | [V] |
| EBITDA/t FY26 (computed) | ₹10,816 = adjusted 32,048 / 29.63; ₹10,064 on reported 29,821 | [E] sales-volume basis, perimeter includes BPSL |
| EBITDA/t Q1 FY27 | ₹14,997 (company); ₹15,013 (computed) | [V]/[E] |
| Cost items | Coking coal +US$17/t QoQ in Q1, guided +US$12–15/t in Q2. Direct iron-ore cost +₹230/t. West Asia indirect cost ~US$20/t in Q1, expected to reverse in Q2. | [V] cofacto.ai; PL Capital, https://www.plindia.com/pl-research/jsw-steel-jstl-in-q1fy27-result-update-volumes-to-outrun-cost-headwinds-accumulate/ |
| Captive iron ore | **~30%** of Q1 FY27 requirement. EC sought to lift Karnataka/Odisha mine output from ~19.2 MT to ~31 MT. | [V] cofacto.ai |
| Coking coal | Mostly imported (Indian mills import ~90% of coking coal [S] Kotak Neo). Targets: ~50% hard coking coal self-sufficiency by CY28 (Mozambique ~20%, Australia ~10%). Mozambique 7 Mt mine to start mid-2028. Domestic 3 Mt by FY29–30. BCCL linkage >7.5 Mt. | [V] cofacto.ai |
| Capex | FY27 ₹22,000–24,000 Cr; board-approved total ₹1,30,000 Cr | [V] cofacto.ai |
| Capex per tonne | Dolvi Phase 3 (+5 MTPA, due Sep-2027) at **< ₹5,000 Cr per MT**, i.e. <₹50,000/t, after a ~₹2,000 Cr overrun | [V] cofacto.ai |
| Net debt / ND-EBITDA | ₹53,870 Cr / 1.81× (Mar-26); ₹46,157 Cr / 1.46× (Jun-26). Ceiling 2.5× target, 3× hard cap. | [V] |
| Ratings | Fitch upgraded to BB+ (positive); CARE also upgraded | [V] cofacto.ai |
| Decarbonisation / CBAM | Project Seed: ~5 Mt cumulative CO₂ reduction since FY22. Scrap use +16% YoY. First "Green Edge" export order. Exports ~10% of India sales (Q4 FY26 exports 0.75 MT), with Europe 35–40% of exports, so CBAM exposure is roughly 3.5–4% of volume [E]. EU CBAM definitive phase began 1-Jan-2026 [V Tata Steel FY26 release]. | [V] cofacto.ai; Groww |

### 1d. Segment / geography mix
- India steel is the overwhelming bulk of EBITDA. Overseas results in Q1 FY27: Ohio + Texas EBITDA US$16 mn; Italy rail mill €7 mn, plus a €33 mn modernisation grant [V cofacto.ai].
- Value-added and special products (VASP) were 61% of Q1 FY27 sales. Exports were 0.68 MT in Q1, +46% YoY [V PL Capital]. JSW keeps ~90% domestic focus [V cofacto.ai].
- JSW One (B2B platform): GMV ₹5,919 Cr in Q1 (+51%) and EBITDA-positive [V cofacto.ai].
- Q1 FY27 India: flat sales +9% YoY, HR +18% [V cofacto.ai].

### 1e. Capacity by plant [K unless tagged; JSW investor presentations FY25–26]
- **Vijayanagar** (Karnataka), the largest site, ~17.5–19.5 MTPA. BF3 was upgraded from 3 to 4.5 MTPA, relit end-June 2026 and running at ~80% [V cofacto.ai]. JVML (Vijayanagar Metallics) is a separate expansion at this site.
- **Dolvi** (Maharashtra) 10 MTPA, with Phase 3 adding +5 MTPA by Sep-2027 [V].
- **Salem** (Tamil Nadu) ~1 MTPA special steel.
- **JSW Steel Coated / Ispat Special Products / others.** Ispat is proposed to merge into JSW Steel.
- **BPSL Sambalpur** (Odisha) 4.5 MTPA, now in the JSW-JFE JV [V announcement].
- Ohio (US) EAF; Texas plate/pipe; Piombino (Italy) rolling.
- Gadchiroli (Maharashtra) potential 25 MTPA: early evaluation, no timeline [V cofacto.ai].
- Odisha (Paradeep) greenfield in the long-term plan [K].

### 1f. BPSL saga
**Court timeline.**
- 2-May-2025: the Supreme Court (two-judge bench) set aside JSW's 2021 resolution plan and ordered BPSL into liquidation [K: SC judgment *Kalyani Transco v. BPSL*, widely reported].
- 31-Jul-2025: the Court recalled that verdict for fresh hearing [K].
- **26-Sep-2025:** a three-judge bench upheld JSW's resolution plan [K]. The primer dates match.

**JFE JV deal** (3-Dec-2025, [V] BSE announcement PDF above):
- BPSL's steel undertaking is slump-sold to JSW Sambalpur Steel for cash consideration of **₹24,483 Cr**.
- JFE takes 50% of JSW Kalinga Steel for **₹15,750 Cr**, in two tranches of ₹7,875 Cr. Equity value is ₹31,500 Cr [S].
- Expected completion was 6–9 months.
- The deal **completed in March 2026** [V FPJ production release]. JSW booked an ₹18,051 Cr gain [V Groww].

The primer's figure of "₹29,475 Cr" could not be reconciled to any fetched document; see Primer Issues.

### 1g. Ownership (Jun-2026) [V screener]
| Holder | Jun-26 | Mar-26 | Jun-25 |
|---|---|---|---|
| Promoters (Sajjan Jindal family / JSW group, including JFE's ~15% stake classed as promoter group [K]) | **44.29%** | 45.31% | 45.31% |
| FIIs | 25.92% | 25.38% | 25.42% |
| DIIs | 11.49% | 11.16% | 10.93% |
| Government | 0.51% | 0.51% | 0.51% |
| Public | 17.62% | 17.47% | 17.59% |

Promoters were down ~1 pp in Jun-26. The reason was not verified, possibly a group-entity sale or dilution.

### 1h. Capex / guidance
- FY27 capex ₹22–24k Cr.
- FY27 volumes: production 29.75 MT, sales 28.6 MT.
- FY27 India steel demand guided +7–9% (+12–13 MT).
- Q2 FY27: volumes up QoQ, coking coal +US$12–15/t, prices seasonally soft before an H2 recovery.
- Leverage cap 2.5×. Foreign-currency debt share (64% at FY26) to fall to 50–55%; the FY26 rupee-depreciation hit was ~₹5,600 Cr.

All [V] cofacto.ai / BOBCAPS.

### 1i. Story bullets
1. **The BPSL risk is resolved and monetised.** The Supreme Court restored the plan (Sep-2025), the asset moved into a JFE JV (Mar-2026) for cash plus a 50% share of future upside, and net debt fell from ~₹80k Cr to ₹46k Cr in about 15 months. ND/EBITDA is now 1.46×, the strongest balance sheet in a decade.
2. **Spread recovery from the safeguard duty.** Q1 FY27 EBITDA/t of ~₹15,000 is the best in years. Realisations rose 19.5% QoQ after the safeguard duty (final, Dec-2025 [V cofacto.ai]), while coking coal rose only US$17/t.
3. **The next volume leg is mid-2027.** It rests on Vijayanagar BF3 at 4.5 MTPA plus the Dolvi Phase 3 5 MTPA by Sep-2027, at <₹5,000 Cr/MT, which is among the cheapest brownfield capex in the industry. The 62-MTPA plan is not yet board-approved.
4. **Raw-material security is the weak flank.** Only ~30% of iron ore is captive and coking coal is almost fully imported. The CY28 target of ~50% coking-coal self-sufficiency depends on Mozambique and Australia ramp-ups.

### 1j. Risks
- Chinese export surge (CY25 ~133.5 MT, per the primer) and erosion of the safeguard duty. India became a net importer in Q1 FY27: imports +22% QoQ [V cofacto.ai].
- Coking-coal spikes, including West Asia freight and energy effects.
- 64% FX debt and rupee depreciation.
- Execution and cost overruns on Dolvi.
- Related-party and group capital allocation (JSW One IPO sale, JSW Ispat merger).
- CBAM costs on EU exports. Small today (~3–4% of volume [E]).

---

## 2. Tata Steel Ltd: NSE TATASTEEL · BSE 500470

Fetched 2026-10-13. Still listed. Group subsidiaries were merged in over FY23–FY25 (Tata Steel Long Products, Tata Metaliks, Tinplate and others) [K]. NINL (Neelachal Ispat Nigam) is a subsidiary, reported in "India" on a proforma basis [V].

Primary sources this session:
- Q4/FY26 press release (15-May-2026), [V] https://www.tatasteel.com/media/25700/4qfy2026-press-release.pdf
- FY26 results presentation, [V] https://www.tatasteel.com/media/25699/4qfy26-and-fy2026-results-presentation.pdf
- Q1 FY27 press release (30-Jul-2026), [V] https://www.tatasteel.com/media/26234/1qfy2027-press-release.pdf
- Q2 FY27 production update (7-Oct-2026), [V] FPJ, https://www.freepressjournal.in/business/tata-steel-india-crude-steel-production-rises-10-yoy-in-q2-fy27-to-621-million-tonnes

### 2a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 2,29,171 | 2,18,543 | **2,32,140** (+6.2%) | [V] screener; company release (same) |
| Screener operating profit | 22,248 | 25,298 | **34,352** (14.8%) | [V] screener |
| Company reported EBITDA | n/a | 25,802 | **34,848** (+35%, 15.0%); adjusted 34,640 | [V] company FY26 release |
| PAT (reported) | −4,910 | 3,174 | **10,886** | [V] screener / company |
| ROCE (screener) | 7% | 9% | 13% | [V] screener |
| Borrowings | 87,082 | 94,801 | **92,382** | [V] screener; company gross debt Mar-26 also 92,382 |
| Cash & equivalents (screener) | 8,678 | 11,647 | **10,058** | [V] screener schedule |
| Company "cash, bank & current investments" | n/a | n/a | **11,573**, plus MTM hedge gain 664 | [V] FY26 presentation, net-debt bridge |
| Net debt (company) | n/a | ~82,429 | **80,144** (Mar-26); **84,173** (Jun-26) | [V] FY26 release; Q1 FY27 release |
| ND/EBITDA (company) | 3.19× | ~3.3× | **2.3×** (Mar-26 and Jun-26) | [V] presentation; Q1 release |
| Group liquidity | n/a | n/a | ₹45,237 Cr (Mar-26); ₹45,950 Cr (Jun-26) | [V] |
| CFO / FCF (screener) | 20,301 / 2,569 | 23,138 / 8,731 | 35,064 / 21,906 | [V] screener. Company says FCF >₹10,700 Cr after capex of ₹14,026 Cr. |

**Valuation, 13-Oct-2026** [V screener]: price ₹175; m-cap **₹2,18,386 Cr**; 52-week high/low ₹224/160; book value ₹81.8, so **P/B 2.14×**; P/E **18.5×** TTM; ROCE 12.5%; ROE 11.7%; dividend yield 2.29% (₹4/share).
**EV/EBITDA** [E]: ₹2,18,386 + ₹84,173 Cr net debt (Jun-26) = ₹3.03 lakh Cr. TTM company EBITDA = 34,848 − 7,480 (Q1 FY26) + 9,370 (Q1 FY27) = ₹36,738 Cr, giving **~8.2×**. On FY26 EBITDA it is ~8.6×.

### 2b. Q1 FY27 (Jun-26) [V Q1 FY27 press release]

| Item | India (standalone + NINL proforma) | Netherlands | UK | Consolidated |
|---|---|---|---|---|
| Production | 5.76 MT crude (Meramandali and Kalinganagar maintenance) | 1.55 MT liquid | n/a (no iron-making) | 7.69 MT |
| Deliveries | 5.17 MT (domestic 4.85 MT, +11% YoY) | 1.40 MT | ~0.48 MT [V FPJ Q2 article] | 7.27 MT |
| Revenue | ₹36,989 Cr | €1,445 mn | £484 mn | ₹60,794 Cr |
| EBITDA | ₹9,908 Cr (27% margin) | **€4 mn** (Direct Sheet Plant closure) | **−£27 mn** (vs −£48 mn Q4) | ₹9,370 Cr (+25% YoY) |
| EBITDA/t (company) | **₹19,162** (+₹3,255 QoQ) | n/a | n/a | **₹12,898** |
| EBITDA/t computed | n/a | ~€3/t [E: 4/1.40] | ~−£56/t [E: −27/0.48] | ₹12,889 [E: 9,370/7.27] |
| PAT | ₹4,668 Cr | n/a | n/a | ₹2,385 Cr |

Other Q1 FY27 points:
- India net realisation rose ~₹5,991/t QoQ.
- NINL EBITDA ₹498 Cr (29% margin).
- Capex ₹3,579 Cr.
- **The Board approved the NINL core expansion: +4.8 MTPA for ₹33,873 Cr, taking NINL to 6.2 MTPA.** That is **~₹70,600 Cr per MT, i.e. ~₹70,600/t** [E].

**Q2 FY27 production update (7-Oct-2026)** [V FPJ]:
- India crude steel **6.21 MT** (+10% YoY, +8% QoQ); deliveries **5.97 MT** (+7% YoY, +15% QoQ). H1 production 11.97 MT, deliveries 11.14 MT [S for H1].
- Netherlands liquid steel ~1.52 MT, deliveries ~1.30 MT. Operations resumed in Aug-2026 after the chromium-6 emission shutdown of the Direct Sheet Plant [S].
- UK deliveries ~0.38 MT, against 0.48 MT in Q1 and 0.57 MT a year earlier. Customers built inventory ahead of the new UK safeguard regime on 1-Jul-2026.
- Thailand 0.32 MT production, 0.31 MT deliveries.

Q2 results not yet out.

### 2c. Steel KPIs

| KPI | Value | Basis / source |
|---|---|---|
| Group capacity | ~36 MTPA crude | [V] Q1 FY27 release, "About Tata Steel" |
| India capacity | **~27.4 MTPA** "current" (FY25 26.6) | [V] FY26 presentation, capacity chart |
| India plants | Jamshedpur ~11; **Kalinganagar 8** (5 MTPA BF fully ramped; 2.2 MTPA CRM); Meramandali (ex-Bhushan) 5.6; NINL ~1.1; Gamharia ~1; Ludhiana EAF 0.75 (commissioned Mar-2026, ~₹3,200 Cr, i.e. ~₹42,700/t) | [V] presentation; [K] for the Jamshedpur split |
| India targets | Land bank for >40 MTPA. NINL +4.8 MTPA (approved Jul-2026). Meramandali 2.5 MTPA thin-slab caster and rolling. 6 MTPA greenfield in Maharashtra with Lloyds Metals (Gadchiroli ore). | [V] presentation; Q1 release |
| Netherlands | IJmuiden ~7 MTPA liquid steel (FY26 liquid ~6.5 MT [E]). Plan: replace BF6 with DRI+EAF. ~€2 bn Dutch state support under a joint letter of intent (Sep-2025) [K]. **Material uncertainty over TSN going concern.** Province and Environment Agency letter of 23-Apr-2026 signalling intent to revoke permits and close the coke and gas plants early. | [V] FY26 release |
| UK | Port Talbot blast furnaces shut in 2024 [K]. **~3 MTPA scrap EAF under construction, project cost £1.25 bn with £500 mn UK Government funding**. Emissions ~0.4 tCO₂/tcs after commissioning. Currently re-rolls bought-in substrate. | [V] FY26 presentation, slide 15 |
| FY26 production | Consolidated 31.67 MT (crude India + liquid Europe + saleable SEA); India **23.43 MT** (best ever) | [V] FY26 release |
| FY26 deliveries | Consolidated **31.97 MT**; India **22.53 MT** (+7.6%) | [V] |
| India EBITDA/t FY26 | **₹15,213** reported; ₹15,121 adjusted. Computed 34,272/22.53 = ₹15,212 | [V]/[E] |
| Consolidated EBITDA/t FY26 | **₹10,900** (company); computed 34,848/31.97 = ₹10,900 | [V]/[E] |
| Netherlands FY26 | EBITDA **€267 mn**, almost 3× YoY. Q4 ₹3,671/t, Q3 ₹4,068/t. FY26 roughly €40/t [E: €267m / ~6.5 MT deliveries] | [V] |
| UK FY26 | EBITDA **−£217 mn** (loss halved). Q4 −₹11,409/t, Q3 −₹14,199/t. FY26 roughly −£100/t [E: on ~2.1–2.2 MT deliveries] | [V] |
| Cost items | Q4 FY26: raw-material costs up on "increase in coking coal consumption cost in India". FY26 cost-transformation benefit **₹10,868 Cr** | [V] |
| Captive self-sufficiency | **India iron ore 100% captive** (Jharkhand and Odisha mines; Odisha leases run to 2030 [K]). Coking coal ~20–25% captive (Jharia, West Bokaro); the rest imported. | [K] Tata Steel IR, IAR FY25 |
| Capex | FY26 ₹14,026 Cr; Q1 FY27 ₹3,579 Cr. FY27 guidance ~₹15,000 Cr [K, not re-verified] | [V]/[K] |
| Net debt | ₹80,144 Cr (2.3×) Mar-26; ₹84,173 Cr (2.3×) Jun-26. Stated through-cycle range 2.5–3.0×. | [V] |
| Ratings | S&P / Moody's investment grade (BBB / Baa2 range shown) | [V] presentation |
| Decarbonisation / CBAM | Net zero by 2045. Ludhiana EAF <0.3 tCO₂/t. HIsarna 1 MTPA demo at Jamshedpur. UK EAF ~0.4 tCO₂/t. EU CBAM rolled out 1-Jan-2026 and "improved pricing conditions" in Europe. TSN is an inside-EU producer, so it is the beneficiary of CBAM. India exports to the EU are small. | [V] FY26 release / presentation |

### 2d. Geography mix (FY26) [V FY26 release]
- **India:** revenue ₹1,40,302 Cr (~60% of consolidated before eliminations); EBITDA ₹34,272 Cr, **~98% of consolidated EBITDA**.
- **Netherlands:** revenue €6,028 mn; EBITDA €267 mn.
- **UK:** revenue £1,978 mn; EBITDA −£217 mn.
- **Rest:** Thailand and other.

India's FY26 downstream (Tubes, Tinplate, Wires) and branded retail (Tiscon in ~97% of districts) are growing. E-commerce GMV ₹8,495 Cr (+137%).

### 2e. Ownership (Jun-2026) [V screener]
| Holder | Jun-26 | Mar-26 | Jun-25 |
|---|---|---|---|
| Promoters (Tata Sons and group) | **32.94%** | 33.19% | 33.19% |
| FIIs | 18.90% | 18.58% | 17.22% |
| DIIs (LIC a large holder [K]) | 26.44% | 26.67% | 26.07% |
| Government | 0.18% | 0.18% | 0.18% |
| Public | 21.52% | 21.36% | 23.31% |

Shareholders: 51.8 lakh.

### 2f. Capex / guidance [V]
- **India:** NINL 4.8 MTPA (₹33,873 Cr).
- **Downstream:** 0.7 MTPA HRPGL (Maharashtra); Tinplate 0.4→0.7 MTPA Phase 1; Tubes 1.7→4 MTPA; Wires 0.6→1 MTPA.
- **UK:** EAF (£1.25 bn; commissioning targeted ~late 2027 [K, per primer and press]).
- **Netherlands:** decarbonisation pending regulator talks.
- **Leverage:** stated range 2.5–3.0× through cycle.
- **Outlook:** management flags West Asia input-cost pressure continuing into FY27, and the UK safeguard reset from 1-Jul-2026 as supportive.

### 2g. Story bullets
1. **India is the whole profit engine.** India EBITDA/t hit **₹19,162 in Q1 FY27**, the highest in the coverage. India makes ~98% of group EBITDA, while Europe swings between around zero and negative.
2. **NINL is the next India growth leg.** It was approved Jul-2026 at ₹33,873 Cr for 4.8 MTPA of long products. At ~₹70,600/t it costs well above JSW's Dolvi (<₹50,000/t) but is near typical greenfield cost [E]. Kalinganagar (8 MTPA) is fully ramped.
3. **The Netherlands is now a regulatory risk, not just a margin problem.** FY26 accounts carry a **going-concern material uncertainty** for TSN. The regulator intends to revoke the coke and gas plant permits. The Direct Sheet Plant shutdown cut Q1 EBITDA to €4 mn.
4. **UK: transition losses are narrowing.** The UK loss fell from −£48 mn in Q4 to −£27 mn in Q1. The EAF (£500 mn grant) plus the new UK safeguard regime are the path to break-even. Q2 deliveries dipped to 0.38 MT.

### 2h. Risks
- TSN closure or permit loss and further penalties (>€20 mn paid in FY26 [V]).
- UK EAF delay or cost overrun.
- Coking-coal import exposure in India.
- India price risk if the safeguard duty lapses or Chinese exports surge.
- Net debt rising with NINL capex (Jun-26 ₹84k Cr, above Mar-26).
- FX on European debt.

---

## 3. Jindal Steel Ltd: NSE JINDALSTEL · BSE 532286

Fetched 2026-10-13. Still listed under the same ticker. **Renamed** from Jindal Steel & Power Ltd to Jindal Steel Ltd in 2025; the primer says Jul-2025 [K]. Screener title [V] reads "Jindal Steel Ltd". The power business (JPL) was sold earlier [K].

**Thyssenkrupp Steel Europe (TKSE).**
- The bidder was **Jindal Steel International**, the Naveen Jindal group's overseas vehicle, **not the listed JSL** [V Manila Times / Reuters].
- Sep-2025: non-binding offer (gmk.center, AIST) [S].
- Mar-2026: talks reported faltering over pensions (~€2.7–3 bn) and energy costs [S].
- **2-May-2026: thyssenkrupp and Jindal mutually paused the talks** [V: https://www.manilatimes.net/2026/05/04/business/foreign-business/thyssenkrupp-jindal-call-off-steel-sale-talks-after-months-of-negotiations/2334432].
- No binding deal as of Oct-2026.

### 3a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue (net) | 50,354 | 49,765 | **53,225** (+7.0%) | [V] screener. The primer's "gross revenue ₹62,412 Cr" is a gross figure, inclusive of duties. |
| Screener operating profit | 10,202 | 9,488 | **9,704** (18.2%) | [V] screener |
| Company adjusted EBITDA | n/a | 9,570 | **9,099** (17.1%), after a ₹561 Cr FX one-off | [V] Elara Q4 FY26 note; primer |
| PAT | 5,943 | 2,846 | **3,361** | [V] screener |
| Exceptional | n/a | −1,306 | −310, including an ₹830 Cr Australian coal-mine write-down in Q4 FY26 | [V] Elara |
| ROCE (screener) | 13% | 11% | 10% | [V] |
| Borrowings | 16,472 | 18,406 | **22,610** | [V] screener |
| Cash & equivalents (screener) | 4,024 | 4,180 | **4,142** | [V] schedule. Elara's "cash, bank & treasury investments" is ₹6,249 Cr. |
| Net debt (company) | n/a | ~11,900 | **16,019** (Mar-26, **rose ~₹4.1k Cr YoY** on ₹9.5k Cr of capex); **15,927** (Jun-26) | [V] Elara (₹160 bn vs ₹119 bn); filingreader Q1 call summary |
| ND/EBITDA | n/a | n/a | **1.66×** company (Mar-26); **1.71×** (Jun-26). Computed 16,019/9,099 = 1.76× | [V]/[E] |
| CFO / capex / FCF | 6,008 / ~8,400 / −2,418 | 10,824 / 10,490 / 334 | 7,204 / 9,547 / **−2,343** | [V] screener; Elara |

Elara Q4 FY26 note (2-May-2026), fetched PDF: https://bsmedia.business-standard.com/_media/bs/data/market-reports/equity-brokertips/2026-05/17778709670.53869400.pdf

**Valuation, 13-Oct-2026** [V screener]: price ₹1,032; m-cap **₹1,04,264 Cr**; 52-week high/low ₹1,306/977; book value ₹499, so **P/B 2.07×**; **P/E 33.8×** TTM (TTM PAT ₹2,709 Cr); ROCE 9.7%; ROE 8.2%.
**EV/EBITDA** [E]: ₹1,04,264 + ₹15,927 Cr = ₹1.20 lakh Cr. That is **~12.9× TTM screener operating profit** (₹9,299 Cr) and ~13.2× FY26 adjusted EBITDA.

### 3b. Q1 FY27 (Jun-26)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue | **₹15,482 Cr** (+25.9% YoY, −4.5% QoQ) | 16,218 | 12,294 | [V] screener; sahi.com, https://www.sahi.com/blogs/jindal-steel-q1-fy27-results |
| Screener operating profit | ₹2,660 Cr (17.2%) | 2,929 | 3,006 | [V] screener |
| Adjusted EBITDA | **₹2,667 Cr** | ~2,650 | n/a | [V] filingreader, https://filingreader.com/news-wire/mumbai/2026-07-31/jindal-steel-reports-resilient-q1-ebitda-despite-plant-shutdowns |
| PAT | ₹844 Cr (−43.6% YoY) | 1,041 | 1,496 | [V] screener / sahi |
| Production | **2.40 MT** (+14.8% YoY, −9.4% QoQ) | ~2.65 | 2.09 | [V] sahi |
| Sales | **2.23 MT** (+17.4% YoY, −14.9% QoQ) | ~2.6 | 1.90 | [V] sahi; Elara |
| EBITDA/t (company) | **₹11,937** (+₹1,843 QoQ) | ₹10,103 | n/a | [V] filingreader; Elara (Q4) |
| EBITDA/t computed | ₹11,960 = 2,667/2.23 | n/a | n/a | [E] |
| Realisation | ~₹69,400/t [E: revenue / sales; includes non-steel revenue]. Q4 FY26 steel realisation ₹61,900/t, cost ₹51,797/t | n/a | n/a | [E]; [V] Elara |
| Value-added share | 66% (Q4 61%) | n/a | n/a | [V] filingreader |
| Capex | ~₹2,000 Cr (annual plan ~₹8,500 Cr; range ₹7,500–10,000 Cr) | n/a | n/a | [V] filingreader; sahi |

Q1 volumes were hit by planned maintenance shutdowns. No Q2 FY27 production release was found. Q2 results are not out.

### 3c. Steel KPIs

| KPI | Value | Source |
|---|---|---|
| Crude capacity | **15.6 MTPA** total (Angul 12 + Raigarh ~3.6) [V sahi]. Elara: "15.5 mn t currently", up from 9.6 at end-FY25. **No overseas steel capacity** (Oman/Jindal Shadeed was sold in 2023 [K]). | [V] |
| Target | ~25 MTPA at Angul alone by ~2030 (company vision) [K, per primer]. Management says the near-term priority is utilisation and returns, not new big-ticket expansion [V sahi]. | [V]/[K] |
| FY26 production / sales | **9.25 MT** (+14%) / **8.68 MT** (Elara: 8.7) | [V] Elara; primer |
| FY27 guidance | **Sales 10.5–11.0 MT** (+21–27%) | [V] Elara |
| Utilisation | ~62% of 15.6 MTPA in Q1 FY27 annualised [E: 2.40 × 4 / 15.6]. Ramp-up phase. | [E] |
| EBITDA/t FY26 | **₹10,482** (company); computed 9,099/8.68 = ₹10,483 (sales basis) | [V]/[E] |
| Start-up costs | ₹477/t in Q4 FY26 vs ₹1,500/t in Q3 | [V] Elara |
| Cost / coal | Coking coal +US$20–25/t in Q4 FY26 and again in Q1 FY27. Barbil–Angul 192 km slurry pipeline commissioning Aug-2026 should save ₹750–1,000/t of finished steel. 1,050 MW Shri Bimla captive power plant stabilising in H1 FY27. | [V] Elara; filingreader |
| Captive ore / coal | Iron ore: Kasia (Odisha) and Tensa mines, majority self-sufficient (~60–70% [K, JSPL IR FY25; not re-verified]). Thermal coal: Gare Palma IV/6, Utkal B1/B2/C (captive, used for power and DRI). Coking coal: largely imported; Mozambique (Jindal Africa, held by promoter / overseas group [K]) and an Australian mine (written down ₹830 Cr in Q4 FY26 [V Elara]). | [K]/[V] |
| Capex | FY24–26 ~₹9.5–10.5k Cr a year; FY27 ₹7,500–10,000 Cr | [V] |
| Capex per tonne | Angul 6 MTPA addition for ~₹30–35k Cr cumulative, roughly ₹50–60k/t [E from FY23–26 capex sums; not company-stated] | [E] |
| Net debt | ₹16,019 Cr (1.66×) Mar-26; ₹15,927 Cr (1.71×) Jun-26; target <1.5× in Q2 | [V] |
| Decarbonisation / CBAM | Coal-gasification DRI at Angul (syngas DRI, lower coking-coal intensity) [K]. Green-hydrogen DRI pilot plans [K]. India-focused, so EU CBAM exposure is minimal. The TKSE bid (by the promoter vehicle) was framed around Duisburg green steel and CBAM [S eurometal]. | [K]/[S] |

### 3d. Product / segment mix
- Q4 FY26 sales were 52% flat products (42% in Q4 FY25). The long-term aim is ~70% flat / 30% long [V Elara].
- India's only private rail maker (Raigarh) [K].
- Value-added share was 66% in Q1 FY27 [V].
- The company is essentially single-country (India); the primer is correct on this.

### 3e. Capacity by plant [V sahi / Elara; K for the split]
- **Angul** (Odisha): 12 MTPA after doubling in FY26 (BF2 4.6 MTPA; BOF2/BOF3). BF ramping toward 13,000 t/day by Dec-2026 [S].
- **Raigarh** (Chhattisgarh): ~3.6 MTPA, covering rails, structurals and plates.
- **Patratu** (Jharkhand): rolling and wire rod [K].

### 3f. Ownership (Jun-2026) [V screener]
| Holder | Jun-26 | Mar-26 | Jun-25 |
|---|---|---|---|
| Promoters (Naveen Jindal group) | **62.71%** | 62.71% | 62.36% |
| — of which pledged | ~10.9% of promoter holding (Q3 FY26) | n/a | n/a |
| FIIs | 8.84% | 9.19% | 9.76% |
| DIIs | 19.52% | 19.14% | 18.09% |
| Public | 8.73% | 8.73% | 9.54% |

Pledge source: [V] Elara.

### 3g. Guidance / capex
- FY27 sales 10.5–11 MT.
- Capex ₹7.5–10k Cr.
- ND/EBITDA <1.5× by Q2 FY27.
- H2 FY27 margin uplift expected from the slurry pipeline, the power plant and the tapering of start-up costs.

### 3h. Story bullets
1. **The capex has been built; FY27 is the "asset-sweat" year.** Capacity rose 9.6 → 15.6 MTPA in a single year. Guided sales growth is 21–27%, and Elara models FY27 EBITDA ~₹14.8k Cr (+62%).
2. **Leverage peaked low.** ND/EBITDA was ~1.7× at the peak of a 60% capacity add, unlike past cycles at this company.
3. **The cost tailwinds are specific and dated.** The slurry pipeline (Aug-2026, ₹750–1,000/t) and the 1,050 MW captive power plant should lift EBITDA/t from ~₹12k toward ₹13–14k [E].
4. **The TKSE pause removes an overhang.** The Europe bid was by the promoter's private vehicle and talks paused May-2026. Watch for any related-party or listed-company involvement if talks revive.

### 3i. Risks
- Ramp-up and utilisation risk at Angul (Q1 shutdowns).
- Promoter pledge (~11%).
- Coking-coal exposure.
- Group overseas ventures (Mozambique, Australia write-downs).
- High P/E (~34×) on trough-ish earnings.
- Long-product pricing weakness: TMT prices fell ₹7–8k/t between Mar and Jun 2026 [V cofacto.ai JSW call].

---

## 4. Steel Authority of India Ltd (SAIL): NSE SAIL · BSE 500113

Fetched 2026-10-13. Still listed. A Maharatna PSU under the Ministry of Steel. **Government of India holds 65.00%** [V screener]. No disinvestment of SAIL is under way. Note: screener's consolidated figures are close to standalone (JVs are equity-accounted).

### 4a. Standardised financials (consolidated, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 1,05,378 | 1,02,479 | **1,10,811** (+8.1%) | [V] screener (standalone ₹1,10,810 Cr per primer and BOBCAPS) |
| Screener operating profit | 11,149 | 10,690 | **12,119** (10.9%) | [V] screener |
| Standalone EBITDA (company, via BOBCAPS) | n/a | 10,646 | **12,000** (10.8%) | [V] BOBCAPS Q4 FY26 review, https://www.barodaetrade.com/Reports/SAIL-Q4FY26ResultReview16May26-Research.pdf |
| PAT (consolidated) | 3,067 | 2,372 | **3,373** | [V] screener |
| PAT (BOBCAPS table) | n/a | 2,372 | 3,373 (adjusted 4,041, ex-exceptional −668) | [V] BOBCAPS. This matches screener's consolidated figure. Standalone PAT is **₹3,233 Cr** (vs ₹2,148 Cr) [S realtynmore / primer]. So the primer's ₹3,233 Cr is a standalone figure set beside consolidated-looking items. |
| ROCE (screener) | 8% | 7% | 8% | [V] |
| Borrowings (screener, including leases) | 36,323 | 36,934 | **31,928** | [V] screener |
| Cash & equivalents | 673 | 967 | **733** | [V] schedule |
| Net debt (screener basis) | 35,650 | 35,967 | **31,195** | [E] |
| Total debt (company) | n/a | n/a | ~₹29.9k Cr Mar-26 [E: 21,729 + Q1 reduction not disclosed; FY26 cut ₹8,148 Cr]. **₹21,729 Cr at Jun-26** per the Q1 call. D/E 0.36 (call), or 0.54 (another source) | [V] investywise call summary, https://www.investywise.com/?p=99737 |
| ND/EBITDA | n/a | n/a | **2.57×** (screener basis, FY26). ~1.6× at Jun-26 on company debt and TTM EBITDA [E: 21,729 / 13,384] | [E] |
| CFO / FCF | 2,911 / −1,297 | 9,914 / 4,537 | **19,039 / 10,942** | [V] screener |

The Jun-26 company debt of ₹21,729 Cr versus screener's Mar-26 borrowings of ₹31,928 Cr is a ~₹10k Cr gap. It is too large to be one quarter's repayment. Likely causes are basis differences (leases, acceptances) or a large Q1 paydown from the ₹19k Cr FY26 CFO. **Flag: unverified, reconcile against the Q1 FY27 balance sheet.**

**Valuation, 13-Oct-2026** [V screener]: price ₹173; m-cap **₹71,363 Cr**; 52-week high/low ₹210/124; book value ₹146, so **P/B 1.18×**; **P/E 14.8×** TTM (TTM PAT ₹4,272 Cr); ROCE 7.9%; ROE 6.6%; dividend yield 1.36%.
**EV/EBITDA** [E]: ₹71,363 + ₹31,195 Cr = ₹1.03 lakh Cr, i.e. **~7.7× TTM screener operating profit** (₹13,384 Cr) and ~8.5× FY26. On Jun-26 company debt (₹21.7k Cr) it would be ~6.9×.

### 4b. Q1 FY27 (Jun-26)

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 | Source |
|---|---|---|---|---|
| Revenue | **₹26,246 Cr** | 30,813 | 25,922 | [V] screener |
| EBITDA (standalone) | **₹4,356 Cr** (16.7%) | 4,409 | 2,925 | [V] SMM, https://news.metal.com/en/newscontent/104029092-smm-analysis-higher-steel-realizations-offset-lower-production-for-sail-in-q1-despite-elevated-coking-coal-costs |
| PAT | ₹1,636 Cr standalone; ₹1,644 Cr consolidated | 1,835 | 745 | [V] SMM; screener |
| Crude steel | ~**4.76–4.8 MT** (down YoY; capital repairs at IISCO, Durgapur, Bokaro) | ~5.0 | ~4.9 | [V] SMM; investywise |
| Sales | **~4.16–4.2 MT** (−7–8% YoY); inventory +0.2 MT | 5.3 | ~4.5 | [V] |
| Realisation | **~₹57,150/t** (+~₹5,000/t QoQ); July ~₹55,600/t | ₹58,139 (BOBCAPS) | n/a | [V] SMM |
| EBITDA/t (company) | **₹10,464** | ₹8,313 (BOBCAPS; primer ₹8,279) | n/a | [V] |
| EBITDA/t computed | ₹10,471 = 4,356 / 4.16 | n/a | n/a | [E] |
| Imported coking coal consumption cost | **~₹21,300/t** (Q4 ~₹18,100/t) | n/a | n/a | [V] SMM |
| Capex | ₹2,575 Cr; FY27 target ₹15,000 Cr | n/a | n/a | [V] SMM |

The two sources disagree on Q4 realisation: SMM says Q1 realisation was "~₹5,000 higher QoQ", while BOBCAPS reports Q4 at ₹58,139/t. The bases differ (net steel realisation vs revenue per tonne), so the two cannot be compared directly.

**Q2 FY27 guidance** [V SMM]:
- Realisation −₹1,000–2,000/t (longs weaker).
- Coking coal −₹1,200–1,500/t from August.
- Iron-ore sales up to 8 MT in FY27 (vs ~3.5 MT).

Q2 results not out.

### 4c. Steel KPIs

| KPI | Value | Source |
|---|---|---|
| Crude capacity | **~20.6 MTPA** (BOBCAPS: "from 21 mnt"); 5 integrated plants plus 3 special-steel plants; no overseas capacity | [V] BOBCAPS; [K] SAIL AR FY25 (crude 20.63 MTPA) |
| Target | **~35 MTPA by ~FY31** (BOBCAPS: +14 MT, from 21 to 35). Incremental volumes from FY29. Capex FY27 ₹15k Cr, then >₹20k Cr a year for 2–3 years, then ₹25–26k Cr a year. | [V] BOBCAPS; investywise |
| Key projects | **IISCO Burnpur expansion** (~4.5 MTPA, ~₹36k Cr [K, primer and press 2025]), completion "later this decade" [V SMM]. Durgapur new TMT mill 0.8–0.9 MTPA by Sep–Dec 2027 [V SMM]. Bokaro, Rourkela and Bhilai brownfield [K]. | [V]/[K] |
| Capex per tonne | ~₹70–80k/t for brownfield, based on ₹1 lakh Cr+ for ~14 MT [E: the primer's "₹1 lakh Cr" / 14 MT ≈ ₹71k/t] | [E] |
| FY26 crude steel | **19.43 MT** (+1.4%) | [V] BOBCAPS (19.4); primer |
| FY26 sales | **19.93 MT** (+11.4%). Angel One gives 20.14 MT [S]; BOBCAPS 19.9 | [V] BOBCAPS |
| Utilisation | ~94% of ~20.6 MTPA (FY26) [E]. Q1 FY27 ~92% annualised [E] | [E] |
| Realisation FY26 | **₹55,594/t** (−2.9%) | [V] BOBCAPS |
| EBITDA/t FY26 | **₹6,018** (company/BOBCAPS). Computed 12,000/19.93 = ₹6,021 standalone; 12,119/19.93 = ₹6,081 on the screener basis | [V]/[E] |
| Cost | Coke rate −20 kg/thm in Q4 FY26. Imported coking coal ₹21,300/t in Q1 FY27. FY27 cost-cut target ₹2–3k/t. | [V] |
| Captive self-sufficiency | **Iron ore 100% captive** (mines in Odisha, Jharkhand, Chhattisgarh; also selling ore externally). **Coking coal ~85% imported** (SMM). Tasra captive coking-coal mine production from Dec-2026. | [V] SMM; [K] |
| Net debt | See 4a: ₹31.2k Cr screener (Mar-26); company total debt ₹21.7k Cr (Jun-26) | [V]/[E] |
| Decarbonisation / CBAM | PSU decarbonisation roadmap (CDQ, PCI, TRT, green-hydrogen pilots) [K]. Exports are minimal, so CBAM exposure is negligible. | [K] |

### 4d. Product / plant mix [K, SAIL AR FY25; primer]
- **Bhilai** (Chhattisgarh): rails (including 130 m long rails), plates, structurals. ~7 MTPA crude.
- **Bokaro** (Jharkhand): flats/HR. ~4.6 MTPA.
- **Rourkela** (Odisha): flats/plates/pipes. ~4.2 MTPA.
- **Durgapur** (West Bengal): longs and wheels. ~2.2 MTPA.
- **IISCO Burnpur** (West Bengal): longs/structurals. ~2.5 MTPA.
- Special-steel plants: Salem, Alloy Steels Durgapur, Visvesvaraya (Bhadravati).

The mix is heavy in longs, plates and rails (railways, infra, defence).

### 4e. Ownership (Jun-2026) [V screener]
| Holder | Jun-26 | Mar-26 | Jun-25 |
|---|---|---|---|
| Government of India (promoter) | **65.00%** | 65.00% | 65.00% |
| FIIs | **7.09%** (up from 3.21% in Mar-25) | 5.01% | 3.65% |
| DIIs (LIC a large holder [K]) | 16.87% | 18.40% | 17.30% |
| Public | 11.05% | 11.58% | 14.03% |

FII holding doubled in 12 months. Shareholders fell from 20.5 lakh to 15.1 lakh.

### 4f. Story bullets
1. **Q1 FY27 margin inflection.** EBITDA/t of ₹10,464 is the highest since FY22, against an FY26 average of ₹6,018. It came from higher realisation plus cost-out (coke rate), despite imported coking coal at ₹21,300/t.
2. **The balance sheet is being reset before the capex wave.** FY26 CFO was ₹19k Cr and debt was cut by ₹8,148 Cr. Company total debt was ₹21.7k Cr at Jun-26 (D/E ~0.36). This creates headroom for a ₹1 lakh Cr+ programme toward 35 MTPA.
3. **Iron-ore monetisation is a new lever.** FY27 external ore sales target is up to 8 MT (vs ~3.5 MT); Q1 ore sales were 1.1 MT.
4. **The FII re-rating is visible.** FII holding is 7.1% (from 3.2%) and P/B is ~1.2×. The government's 65% (no sale planned) caps free float at 35%.

### 4g. Risks
- Coking-coal price (85% imported).
- PSU wage and cost gap.
- Execution of IISCO and other brownfield projects (history of long delays [K]).
- Long-product price pressure (Q2 guidance).
- Safeguard-duty expiry.
- Government dividend demands.

---

## 5. NMDC Steel Ltd: NSE NSLNISP · BSE 543768

Fetched 2026-10-13. Still listed. NMDC Steel was demerged from NMDC Ltd with effect from **13-Oct-2022** and listed in Feb-2023 [V Ministry of Steel annexure, https://steel.gov.in/sites/default/files/2026-01/Annexure%20-I%20Overview%20of%20NDMC%20Ltd%20and%20NSL.pdf; K for the listing date]. It is a single asset: the 3 MTPA Nagarnar integrated plant (BF-BOF-thin slab caster-HSM) in Chhattisgarh. Blast furnace blow-in was 12-Aug-2023; the PM dedicated the plant on 3-Oct-2023 [V MoS]. No consolidated accounts exist; all figures below are standalone.

### 5a. Standardised financials (standalone, ₹ Cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 3,049 | 8,503 | **13,642** (+60.4%) | [V] screener standalone, https://www.screener.in/company/NSLNISP/ ; company figure ₹13,641.81 Cr [V investywise, https://www.investywise.com/?p=116219] |
| Operating profit (screener) | −1,436 | −1,788 | **1,518** (11.1%) | [V] screener |
| Company EBITDA (including other income) | n/a | −1,717 | **1,604** | [V] investywise (BSE filing) |
| PAT | −1,560 | −2,374 | **59** (₹58.72 Cr) | [V] screener / investywise |
| ROCE (screener) | −9% | −13% | 3% | [V] |
| Borrowings | 6,662 | 5,909 | **4,613** | [V] screener (primer: ~₹4,602 Cr) |
| Cash & equivalents | 721 | 908 | **800** | [V] screener schedule |
| Net debt | 5,941 | 5,001 | **3,813** | [E] |
| ND/EBITDA | n/a | n/a | **2.5×** (3,813 / 1,518) | [E] |
| CFO / FCF | −2,825 / −3,409 | 1,966 / 1,538 | 1,796 / 1,525 | [V] screener |
| Book value | n/a | n/a | equity ₹13,174 Cr (₹2,931 Cr capital + ₹10,243 Cr reserves) | [V] |

**Valuation, 13-Oct-2026** [V screener standalone]: price ₹40.1; m-cap **₹11,776 Cr**; 52-week high/low ₹53.8/33.0; book value ₹45.0, so **P/B 0.89×**; **P/E 141×** TTM (TTM PAT ₹84 Cr); ROCE 3.1%; ROE 0.45%; no dividend.
**EV/EBITDA** [E]: ₹11,776 + ₹3,813 Cr = ₹15,589 Cr, **~10.3×** TTM operating profit (₹1,510 Cr). EV is about 65% of the ~₹24,000 Cr build cost [K, primer and press].

### 5b. Q1 FY27 (Jun-26) [V screener; S sahi for revenue detail]

| Item | Q1 FY27 | Q4 FY26 | Q1 FY26 |
|---|---|---|---|
| Revenue | **₹3,662 Cr** (+8.8% YoY) | 3,879 | 3,365 |
| Operating profit | **₹400 Cr** (11%) | 806 (21%) | 408 (12%) |
| Other income | 43 | 26 | 20 |
| PAT | **₹51 Cr** (sahi: ₹55.15 Cr [S]) | 392 | 26 |
| Interest / depreciation | 126 / 242 | 96 / 249 | 134 / 258 |

**Volumes, Q1 FY27: unverified.** No fetched source gave Q1 production or sales tonnage; kalkine and psuconnect returned 403. Q1 EBITDA/t therefore cannot be computed from a verified volume. If volume was ~0.6 MT of HRC (a run-rate assumption), EBITDA/t would be ~₹6,700/t [E, low confidence]. Q2 FY27 results are not out.

### 5c. Steel KPIs

| KPI | Value | Source |
|---|---|---|
| Capacity | **3.0 MTPA** crude/liquid steel (single site, Nagarnar); no overseas capacity; no announced expansion verified | [V] MoS annexure |
| FY26 hot metal | **3.071 MT** (~102% of 3 MTPA BF rating) | [V] investywise (BSE filing) |
| FY26 liquid (crude) steel | **2.425 MT** (~81% of 3 MTPA) | [V] |
| FY26 HRC production | **2.325 MT** (FY25 1.439 MT, +62%) | [V] |
| FY26 HRC sales | Value ₹11,608.58 Cr. Volume **not verified**; the primer's ~2.46 MT would imply ~₹47,200/t [E] | [V]/[E] |
| Utilisation | ~81% liquid steel; ~100% hot metal. Management says utilisation is now "nearing 90%" and the plant broke even in Mar–Apr 2026 [S compoundingai preview] | [V]/[S] |
| EBITDA/t FY26 (computed) | **~₹6,530/t** on HRC production (1,518 / 2.325); ₹6,900/t including other income. On the primer's 2.46 MT sales, ~₹6,170/t | [E] |
| Q4 FY26 EBITDA | ₹806 Cr operating (₹832 Cr including other income) | [V] screener |
| Energy | Specific energy 6.21 Gcal/tcs (FY25 6.99) | [V] investywise |
| Captive ore / coal | Iron ore: no own mines. Supplied by parent NMDC from Bailadila (~20 km away), so this is group-captive, not owned [K]. Coking coal ~100% imported [K]. | [K] |
| Capex | Plant cost ~₹24,000 Cr for 3 MTPA, i.e. **~₹80,000/t** [K, MoS/press; primer] | [K]/[E] |
| Decarbonisation / CBAM | CE certification for European markets is in place, so EU export is possible and CBAM would apply. No EAF or H₂ plan verified. | [V] investywise |

### 5d. Ownership (Jun-2026) [V screener]
| Holder | Jun-26 | Mar-26 | Jun-25 |
|---|---|---|---|
| Government of India (promoter) | **60.79%** | 60.79% | 60.79% |
| FIIs | 5.48% | 4.85% | 4.67% |
| DIIs (LIC a large holder [K]) | 15.78% | 15.85% | 15.90% |
| Public | 17.93% | 18.50% | 18.63% |

The NMDC Ltd parent holds **no** stake after the demerger. GoI's 60.79% mirrors its holding in NMDC [V MoS annexure for NMDC's 60.79%].

### 5e. Disinvestment status
- **The plan:** CCEA gave in-principle approval for strategic sale of GoI's **50.79%** stake with management control. The remaining ~10% is to be offered to NMDC Ltd after a buyer is chosen. The company's Q3 FY26 filing states the process "continues as per the government's plan" [S: psuconnect / quartr].
- **Progress:** multiple EoIs were received in 2023 [S: Outlook Business, "Government Gets Multiple EoIs For Privatising NMDC Steel"]. A recent report (Aug/Sep-2026, dating uncertain) quotes an official saying "all work done, only financial bids left; needs PMO go-ahead". Unions are opposed [S: indiaseatradenews].
- **No financial bids have been invited**, as far as the sources found show.
- **Status:** unverified beyond snippets. No DIPAM page was fetched.

### 5f. Story bullets
1. **The J-curve flipped in FY26.** The company swung from a ₹2,374 Cr loss to a ₹59 Cr profit. Q4 FY26 operating profit was ₹806 Cr (21% margin). Q1 FY27 fell back to ₹400 Cr (11%) on costs and prices.
2. **The hot-metal side is at rated capacity.** Hot metal reached 3.07 MT (~102%). Liquid steel (2.43 MT) and HRC (2.33 MT) lag, so the next gains come from downstream yield and the BOF/caster, not the furnace.
3. **The stock trades below book.** P/B is 0.89× and EV is ~65% of replacement cost. The strategic-sale "option" depends on a PMO decision; P/E of 141× is meaningless at these earnings.
4. **A single-asset, non-integrated cost base.** It buys ore from the parent and imports all its coking coal. EBITDA/t (~₹6.5k FY26 [E]) sits well below the integrated privates.

### 5g. Risks
- Single-plant operational risk.
- Coking-coal price risk.
- Commodity HRC only (little value-added product).
- The disinvestment could stall indefinitely (unions, politics).
- Iron-ore pricing from the parent (related party).
- Debt ~₹4.6k Cr with interest ~₹480 Cr a year.

---

## Summary grid: batch 1 (prices and m-cap as of 13-Oct-2026; ₹ Cr unless stated)

| Metric | JSW Steel | Tata Steel | Jindal Steel | SAIL | NMDC Steel |
|---|---|---|---|---|---|
| FY26 revenue | 1,85,470 | 2,32,140 | 53,225 (net; ₹62,412 Cr gross) | 1,10,811 | 13,642 |
| YoY growth | +9.9% | +6.2% | +7.0% | +8.1% | +60.4% |
| FY26 EBITDA (basis) | 32,048 company adjusted (screener operating profit 29,464) | 34,848 company (screener 34,352) | 9,099 company adjusted (screener 9,704) | 12,000 standalone (screener 12,119) | 1,518 screener (1,604 including other income) |
| EBITDA margin | 17.3% adjusted / 15.9% screener | 15.0% | 17.1% / 18.2% | 10.8% / 10.9% | 11.1% |
| FY26 PAT | 25,508 (normalised 8,698) | 10,886 | 3,361 | 3,373 consolidated / 3,233 standalone | 59 |
| Net debt (company or derived) | 53,870 (Mar-26); 46,157 (Jun-26) | 80,144 (Mar-26); 84,173 (Jun-26) | 16,019 (Mar-26); 15,927 (Jun-26) | 31,195 screener (Mar-26); total debt 21,729 company (Jun-26) | 3,813 [E] |
| ND/EBITDA | 1.81× (Mar) → 1.46× (Jun) | 2.3× | 1.66× (Mar) → 1.71× (Jun) | 2.6× screener (FY26) / ~1.6× [E, Jun] | 2.5× [E] |
| M-cap | 2,88,076 | 2,18,386 | 1,04,264 | 71,363 | 11,776 |
| P/E (screener TTM) | 23.9× (includes BPSL gain) | 18.5× | 33.8× | 14.8× | 141× |
| P/B | 2.88× | 2.14× | 2.07× | 1.18× | 0.89× |
| EV/EBITDA TTM [E] | ~10.7× | ~8.2× | ~12.9× | ~7.7× | ~10.3× |
| ROCE (screener) | 11.0% | 12.5% | 9.7% | 7.9% | 3.1% |
| Crude capacity | ~32 MTPA India (ex-BPSL) + 4.5 MTPA in JFE JV + US Ohio | ~36 MTPA group; India ~27.4 | 15.6 MTPA (India only) | ~20.6 MTPA | 3.0 MTPA |
| Capacity target | 49 MTPA (FY30) / 62 MTPA India (FY32) | >40 MTPA India (NINL +4.8 approved) | ~25 MTPA Angul (~2030, vision) | ~35 MTPA (~FY31) | none announced |
| FY26 sales volume | 29.63 MT | 31.97 MT group / 22.53 MT India | 8.68 MT | 19.93 MT | HRC prod 2.33 MT (sales volume unverified) |
| EBITDA/t FY26 | ₹10,816 (adjusted, computed) | ₹10,900 group / ₹15,213 India | ₹10,482 | ₹6,018 | ~₹6,530 [E] |
| EBITDA/t Q1 FY27 | ₹14,997 | ₹12,898 group / ₹19,162 India; NL ~€3/t; UK ~−£56/t | ₹11,937 | ₹10,464 | n/a (volume unverified) |
| Captive iron ore | ~30% | India 100% | majority (~60–70% [K]) | 100% | 0% own (parent NMDC supplies) |
| Coking coal imported | ~90%+ | ~75–80% [K] | mostly imported | ~85% | ~100% [K] |
| Promoter / Govt (Jun-26) | 44.29% | 32.94% | 62.71% | 65.00% GoI | 60.79% GoI |

---

## PRIMER ISSUES

Each primer was read at the cover strip, the "What's new" box and the first sections, then grepped for key figures. Text was extracted from the HTML; locations are given by section. All five primers were last refreshed between 30-Jun and 19-Jul-2026. None contains Q1 FY27 (Jun-26 quarter) results or the Oct-2026 Q2 production updates.

### P1. primers/jsw-steel.html (refreshed 30-Jun-2026)
1. **BPSL deal value.**
   - Primer (cover lede and What's new): "the BPSL saga that ended in a ₹29,475-crore sale to a JFE joint venture" and "slump-sale into the 50:50 JSW JFE JV (₹29,475 Cr)".
   - Correct: the 3-Dec-2025 BSE announcement gives a **slump-sale cash consideration of ₹24,483 Cr** to JSW Sambalpur Steel, plus a **JFE equity investment of ₹15,750 Cr** for 50% of JSW Kalinga, in two ₹7,875 Cr tranches. The gain booked was **₹18,051 Cr** (net exceptional ₹17,888 Cr).
   - ₹29,475 Cr does not match any fetched document; it may be a closing-adjusted figure. Verify, or cite the components.
   - Sources: BSE announcement PDF [V]; Groww Q4 FY26 [V].
2. **BPSL capacity.**
   - Primer (BPSL section): liquidation "stripped out ~3.5 MTPA of working capacity".
   - Correct: the announcement states BPSL capacity was **expanded from 2.75 to 4.5 MTPA** [V BSE PDF].
3. **Capacity base and target are not on the post-BPSL perimeter.**
   - Primer (snapshot, "Capacity" table): "~34 MTPA in India today (~35.7 MTPA globally)" and "roadmap toward ~56 MTPA in India by FY31".
   - Correct: after the Mar-2026 slump sale, BOBCAPS gives **current domestic capacity ~32 MT, rising to 49 MT by FY30 and 62 MT India by FY32 (78 MT including JVs)**. Management says the ₹2.26 lakh Cr / 62 Mt plan is **not yet board-approved**.
   - The capex figure is also stale: the primer says "~₹1-lakh-crore build-out"; board-approved capex is **₹1,30,000 Cr** [V cofacto.ai].
   - Sources: BOBCAPS Q1 FY27 [V]; cofacto.ai call [V].
4. **Q1 FY27 is missing.** Revenue ₹47,364 Cr; EBITDA ₹9,383 Cr; EBITDA/t **₹14,997**; sales 6.25 MT; PAT ₹4,696 Cr; net debt **₹46,157 Cr / 1.46×** [V]. The Q2 FY27 production update (7.27 MT crude, India utilisation 88%) and the 23-Oct results date are also missing.
5. **EBITDA/t wording.**
   - Primer (§01 table): "₹32,048 Cr on ~30 MT of sales implies roughly ₹10,000+ per tonne".
   - Correct: FY26 sales were **29.63 MT**, so adjusted EBITDA/t is **₹10,816** (₹10,064 on reported EBITDA ₹29,821 Cr) [V Angel One]. The primer should show both bases and also quote the volume.
6. **Captive ore is not quantified.** The primer has no captive iron-ore %. Management gives **~30%** of Q1 FY27 requirement and an EC expansion from 19.2 to 31 MT [V cofacto.ai]. Coking-coal targets (~50% by CY28; Mozambique 7 Mt from mid-2028) are also missing.
7. **Stale or missing valuation and ownership.**
   - No live m-cap, P/E or P/B on the cover. Now: m-cap ₹2,88,076 Cr; P/E 23.9× (distorted by the BPSL gain); P/B 2.88× [V screener].
   - Promoter stake is given as "~45%". Jun-26 is **44.29%** (down from 45.31%) [V screener].
8. **Banned phrases:** "Think of JSW Steel as…" (§00 "In plain terms"); "honest" ×3 ("The honest framing", "The honest view on overseas", "The honest answer sits in between").

### P2. primers/tata-steel.html (refreshed 30-Jun-2026)
1. **Production metric is mislabelled.**
   - Primer (cover KPI strip and What's new): "31.67 MT Crude steel output (FY26)".
   - Correct: 31.67 MT is consolidated "production", which mixes **crude steel for India, liquid steel for Europe and saleable steel for SEA** (company footnote). India crude steel was 23.43 MT [V FY26 release].
2. **The Netherlands going-concern uncertainty is missing.** The primer frames IJmuiden as a decarbonisation plan "backed by ~€2bn of Dutch support". The FY26 release says:
   - The **Environment Agency and Province wrote on 23-Apr-2026 of their intention to revoke permits and trigger early closure of the coke and gas plants**.
   - **TSN's accounts carry a material uncertainty on going concern**.
   - TSN paid **>€20 mn of penalties in FY26**.
   - Then, in Q1 FY27, the **Direct Sheet Plant was shut** (chromium-6 emissions), cutting NL EBITDA to **€4 mn**. It restarted in Aug-2026.
   - Sources: FY26 press release [V]; Q1 FY27 release [V]; FPJ Q2 update [V].
3. **Q1 FY27 is missing.** Consolidated EBITDA ₹9,370 Cr (₹12,898/t). **India EBITDA/t ₹19,162**. UK −£27 mn. Net debt ₹84,173 Cr (2.3×) [V].
4. **NINL approval is missing.** The primer mentions NINL only as an acquisition. The **Board approved the 4.8 MTPA NINL expansion at ₹33,873 Cr on 30-Jul-2026**, taking NINL to 6.2 MTPA [V Q1 release].
5. **The Q2 FY27 production update is missing:** India 6.21 MT crude (+10% YoY), deliveries 5.97 MT; UK deliveries down to 0.38 MT [V FPJ].
6. **No live valuation or ownership.** No m-cap, P/E or P/B figures in the valuation section. Now: m-cap ₹2,18,386 Cr, P/E 18.5×, P/B 2.14×. Promoter stake is given as "~33%"; Jun-26 is **32.94%** [V screener].
7. **UK safeguard reset not covered:** the new UK safeguard regime of 1-Jul-2026 [V Q1 release, FPJ] is absent; the primer covers only the India duty.
8. **Banned phrases:** "Think of Tata Steel as two steelmakers under one roof" (§00); "honest" ×3.

### P3. primers/jindal-steel.html (refreshed 2-Jul-2026)
1. **Internal capacity inconsistency.**
   - Primer (cover lede): "doubling crude-steel capacity toward ~15.9 MTPA now".
   - Elsewhere it says 15.6 MTPA; the §06 chart labels 15.9 as the "next milestone".
   - Correct: **15.6 MTPA current** (Angul 12 + Raigarh). Elara says 15.5 MT [V sahi; Elara]. Use one number.
2. **Net-debt direction is wrong.**
   - Primer (cover lede): "cut net debt to a comfortable 1.66× EBITDA"; §00: "net debt is down to ₹16,019 crore".
   - Correct: net debt **rose** from ~₹11.9k Cr (Mar-25) to **₹16,019 Cr** (Mar-26) on ₹9.5k Cr of capex [V Elara: "Net debt rose to ~INR160bn from ~INR119bn"]. The leverage ratio is moderate, not "cut".
3. **FY27 guidance basis.**
   - Primer (What's new and §06): "FY27 output guided to 11.0–11.5 MT".
   - Correct: Elara reports FY27 **sales** guidance of **10.5–11.0 MT** (+21–27%) [V]. If 11.0–11.5 MT is production guidance, label it so and add the sales figure.
4. **Thyssenkrupp Steel Europe is missing entirely.**
   - The promoter vehicle **Jindal Steel International** made a non-binding bid for TKSE in Sep-2025.
   - **Talks were paused by mutual decision on 2-May-2026** [V Manila Times / Reuters].
   - Relevant to governance and related-party risk, even though it is not a listed-entity deal. The primer says only "No overseas drag".
5. **The Q4 FY26 Australian coal-mine write-down (₹830 Cr) is missing** [V Elara]. So is the **promoter pledge (~10.9%)** [V Elara]. The Mozambique / Australia coking-coal assets are not covered.
6. **Stale valuation.**
   - Primer (§ valuation): "Market cap ~₹1.06 lakh crore (mid-2026)… P/E ~26× on trailing earnings".
   - Now: **₹1,04,264 Cr, P/E 33.8×** (TTM PAT fell to ₹2,709 Cr after the weak Q1), P/B 2.07× [V screener].
7. **Stale promoter stake.** Primer: "promoter group owns ~61%+". Jun-26 is **62.71%** [V screener].
8. **Q1 FY27 is missing.** Revenue ₹15,482 Cr; adjusted EBITDA ₹2,667 Cr; **EBITDA/t ₹11,937**; sales 2.23 MT; PAT ₹844 Cr (−44% YoY); ND ₹15,927 Cr (1.71×). The slurry pipeline is due in Aug-2026 [V].
9. **Banned phrases:** "Think of Jindal Steel as…" (§00); "honest" ×2 ("The honest caveat", "keeps bears honest").

### P4. primers/sail.html (refreshed 3-Jul-2026)
1. **FY26 EBITDA does not reconcile.**
   - Primer (cover strip, §00, §10 table): "₹13,146 Cr EBITDA (FY26, ~11.9% margin)".
   - Correct: BOBCAPS (company data) gives **FY26 EBITDA ₹12,000 Cr (10.8%)**; screener operating profit is ₹12,119 Cr (10.9%). The FY26 EBITDA/t of **₹6,018** × 19.9 MT also gives ~₹12,000 Cr.
   - ₹13,146 Cr may include other income (₹894 Cr standalone), but even that does not reach it. Correct, or state the basis.
   - Sources: BOBCAPS Q4 FY26 review [V]; screener [V].
2. **PAT basis is mixed.** Primer: "PAT ₹3,233 Cr (+50%)". That is standalone [S]. Consolidated is **₹3,373 Cr** [V screener / BOBCAPS], and adjusted is ₹4,041 Cr. State the basis.
3. **Coking-coal import share understated.** Primer (§00): "has to import roughly three-quarters of its coking coal". Correct: **~85%** imported (Q1 FY27 call, SMM) [V]. The Tasra captive coking-coal mine (production from Dec-2026) is not mentioned.
4. **Stale valuation multiples.**
   - Primer (§10): "~18–21× Trailing P/E", "~1.1× Price-to-book", "~₹70,000 Cr Market cap (~₹170/share, Jul '26)".
   - Now: **P/E 14.8×** (TTM PAT jumped with Q1), **P/B 1.18×**, m-cap ₹71,363 Cr at ₹173 [V screener].
4b. **Minor EBITDA/t difference.** Primer: "~₹8,279 EBITDA per tonne, Q4 FY26". BOBCAPS gives **₹8,313** [V].
5. **Q1 FY27 is missing.** EBITDA ₹4,356 Cr; **EBITDA/t ₹10,464**; realisation ~₹57,150/t; PAT ₹1,636 Cr; total debt ₹21,729 Cr. Iron-ore external sales target up to 8 MT. Imported coal cost ₹21,300/t [V SMM; investywise].
6. **Ownership shift is missing.** FII holding rose to **7.09%** (Jun-26) from ~3% a year earlier. GoI is unchanged at 65.00% [V screener].
7. **Banned phrases:** "Think of SAIL as a national steel furnace…" (§00); "honest" ×1 (acceptable count).

### P5. primers/nmdc-steel.html (refreshed 19-Jul-2026)
1. **Crude steel is mislabelled.**
   - Primer (cover strip, What's new, §00, §04): "~2.33 MT Crude steel made (FY26)", "record crude-steel output of 2.33 MT".
   - Correct: 2.325 MT is **HR coil production**. **Liquid (crude) steel was 2.425 MT** and **hot metal 3.071 MT** (BSE FY26 filing) [V investywise / BSE].
   - The "~80% utilisation" matches liquid steel (2.43/3.0 = 81%), not the 2.33 MT figure.
2. **Stale m-cap.** Primer (cover strip): "~₹12,700 Cr Market cap (mid-2026)", also used in the EV build. Now **₹11,776 Cr** at ₹40.1; P/B 0.89×; P/E 141× [V screener]. EV is ~₹15.6k Cr (vs the primer's ~₹17,300 Cr) [E].
3. **Disinvestment stage is stale or wrong.**
   - Primer (timeline): "FY27 (in progress) Expression-of-interest stage of the government's stake sale underway".
   - Correct: **multiple EoIs were received in 2023** [S Outlook Business]. Recent reports say the process awaits PMO approval to invite **financial bids** [S indiaseatradenews], and the Q3 FY26 filing says it "continues as per the government's plan" [S]. The EoI stage is long past. Status remains unverified from a primary DIPAM source.
4. **Ownership is vague.** Primer: "holding a controlling majority (roughly ~60%+, approx.)". Exact: **GoI 60.79%** (Jun-26); FII 5.48%, DII 15.78% [V screener].
5. **Q1 FY27 is missing.** Revenue ₹3,662 Cr (+8.8%); operating profit ₹400 Cr (11%, half of Q4's ₹806 Cr); PAT ₹51 Cr [V screener]. The primer's narrative of a "FY26 exit run-rate" should note that Q1 FY27 margins halved QoQ.
6. **Demerger date.** Primer (§00): "In 2023 that plant was carved out of NMDC". The demerger was effective **13-Oct-2022**; listing followed in early 2023 [V MoS annexure].
7. **Sales-volume figure is unverified.** Primer: "sales up ~74% to ~2.46 MT". No fetched source confirms the volume; the BSE filing gives HRC sales **value** of ₹11,608.58 Cr only. Flag for checking.
8. **Banned phrases:** "honest" ×1 ("The honest tension in the disinvestment"), which is acceptable.

### Cross-primer issues
- **Safeguard duty.** The JSW primer correctly notes "provisional 12% for 200 days (Apr-2025), formalised for three years in Dec-2025". The Jindal, SAIL and NMDC primers mention safeguard duties only generically and do not give the final order (Dec-2025, three years, tapering duty [K: DGTR final findings / MoF notification]). The Tata primer cites the April 2025 provisional duty. All primers should carry the final-order date and rates. Also note that India turned net importer in Q1 FY27: imports +22% QoQ [V cofacto.ai].
- **CBAM.** The EU's definitive CBAM phase began **1-Jan-2026** [V Tata FY26 release]. Only the Tata and JSW primers mention CBAM, and only qualitatively. None quantifies EU export share. JSW's is ~10% exports × 35–40% to Europe ≈ 3.5–4% of volume [E].
- **Q2 FY27.** All five primers predate the Q2 results. JSW reports 23-Oct-2026 [S]. Tata and JSW Q2 production updates are already out [V].

---

### Verification notes / gaps
- **Unverified (snippet only, or fetch failed):**
  - NMDC Steel Q1 FY27 volumes (kalkine and psuconnect returned 403).
  - NMDC Steel disinvestment status (snippets only).
  - JSW Q2 board date (snippet).
  - SAIL standalone PAT ₹3,233 Cr (snippet).
  - Jindal BF ramp to 13,000 t/day (snippet).
  - Tata Q2 H1 totals (snippet).
- **[K] items not re-fetched:**
  - BPSL Supreme Court dates.
  - Plant-level capacity splits for JSW, Tata (Jamshedpur) and SAIL.
  - Captive coking-coal % for Tata and Jindal; Jindal captive ore %.
  - IISCO cost (~₹36k Cr).
  - Dutch €2 bn LoI.
  - Port Talbot commissioning timing.
  - Safeguard final-order rates.
- **Data-quality flags:**
  - SAIL Jun-26 company debt (₹21.7k Cr) vs screener Mar-26 borrowings (₹31.9k Cr): gap not reconciled.
  - JSW screener P/E is inflated by the ₹18k Cr one-off gain.
  - Jindal and SAIL screener cash may understate treasury investments. Jindal's company/Elara cash is ₹6,249 Cr vs ₹4,142 Cr on screener.
