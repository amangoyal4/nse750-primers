# Indian Airports (Infrastructure || Airport & Airport services): Research Dossier + Company Fact Pack

Compiled 13-Nov-2026 (UTC) for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md): §0–12 plus sections A–H. Because this is a **single-member sub-sector (Tier C)**, Part 1 covers the WHOLE Indian airports industry — AAI, the two private platforms (GMR, Adani), Bengaluru (Fairfax), Cochin (CIAL), Noida (Zurich) and the global listed peers — with GMR as the lens.
- **Part 2** is the company fact pack for the one member, GMR Airports Ltd (brief-companies.md), plus reference-peer fact sheets and JSON.
- **Part 3** is the company-KPI appendix: summary grid, per-airport/per-SPV breakdowns that bridge to the consolidated figures, reconciliation vs our primer, primer issues and source URLs.

**Member (1, Tier C):** GMR Airports Ltd (NSE GMRAIRPORT · BSE 532754) — primer `primers/gmr-airports.html` (last refreshed 2-Jul-2026).

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source (URL inline or in §3.6). The core GMR set is [V] from the company's own **Q2 FY27 press release and investor presentation (29-Oct-2026)**, the **Q4 FY26 investor presentation**, **CRISIL's 1-Sep-2026 rating rationale**, **screener.in (pulled 13-Nov-2026)** and **AAI's monthly traffic annexures (FY26 and Apr–Sep 2026)**.
- **[V-snip]** = verified only from a search-result summary or a secondary article (press, aggregator), not the primary document.
- **[V-sib]** = verified in the sibling airline dossier (`airline-industry.md`, Nov-2026) and reused for consistency; not re-fetched.
- **[K]** = well-established public fact from memory. The source is named but it was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic on [V] inputs. Present it as "approx." or as a range.
- **[primer]** = from our own primer `primers/gmr-airports.html` (FY26 basis, refreshed 2-Jul-2026).
- **[screener 13-Nov-26]** = screener.in consolidated page for GMRAIRPORT, fetched by curl on 13-Nov-2026 (price ₹99.0).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. GMR reports in **INR million** in its decks (₹10 mn = ₹1 Cr) — so "INR 61,502 mn" = **₹6,150 Cr**. "bn" in GMR decks = INR billion = ₹100 Cr.
- **mppa** = million passengers per annum (capacity). **pax** = passengers. **ATM** = air traffic movement (one take-off or landing). **MT** = metric tonne (landing charges are per tonne of aircraft weight).
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. **Q2 FY27 = Jul–Sep 2026**. GMR's Indian SPVs have March year-ends. **Medan (Indonesia) is consolidated with a one-quarter lag** — "Q2 FY27" Medan = Apr–Jun 2026 [V GMR deck footnote]. Global peers report on **calendar years** (ADP, Aena, Fraport, Zurich: Jan–Dec); "H1 2026" = Jan–Jun 2026.
- **FX (13-Nov-2026, open.er-api.com mid-rates, fetched this session [V]): ₹94.09 = US$1; ₹104.1 = €1; ₹112.8 = CHF 1.** The sibling dossiers used ₹94.9/$ (19-Oct-2026); the rupee has firmed ~1% since. The ~₹88.7/$ rate mentioned in the brief is the FY26 *average* (IndiGo reported ₹88.06 average for FY26 [V-sib]) and must not be used for current conversions. CRISIL converted the ADP–GMR deal at **₹110/€** [V CRISIL] — note the difference when quoting the deal in rupees.
- **AAI vs DGCA passenger counts (trap 2):** AAI counts *terminal* passengers (each domestic trip counted twice — at departure and at arrival airport); DGCA counts passengers *carried* by Indian airlines. FY26: AAI domestic **339.45 mn** vs DGCA domestic carried **~167.4 mn** [V AAI; V-sib DGCA/ICRA]. Airports live on AAI-basis numbers; airlines on DGCA-basis numbers.
- Macro context reused from the airline dossier (verified there, not re-fetched): **West Asia war from 28-Feb-2026** → Strait of Hormuz closure, Gulf airspace restrictions, Brent peak ~$118/bbl, ceasefire 7-Apr-2026; **IndiGo's 3–5 Dec-2025 operational meltdown** (2,507 cancellations); **DGCA domestic traffic Jan–Sep 2026 1,223.53 lakh, −0.82% YoY; Sep-2026 118.23 lakh, −6.5% YoY**; IndiGo 65.4% + Air India group 26.8% = 92.2% of domestic passengers in Sep-2026; ICRA aviation outlook **Negative since Mar-2026** with FY27 airline losses ₹36,000–38,000 Cr; RBI repo 5.50% (hiked 7-Oct-2026) [V-sib]. **This dossier's AAI numbers agree with those facts** (see §3.1): AAI domestic terminal pax Sep-2026 **−6.3%**, Aug **−6.0%** [V AAI].

**Q2 FY27 status (as of 13-Nov-2026): GMR Airports HAS reported Q2 FY27.**

| Item | Detail | Source |
|---|---|---|
| Q1 FY27 (Jun-26) | Total income ₹4,085 Cr; EBITDA ₹1,568 Cr; PAT ₹148 Cr; results ~early Aug-2026 (transcript listed "Aug 2026") | [V Q2 deck; V screener] |
| **Q2 FY27 board meeting** | **28-Oct-2026** (results letter "in continuation of our letter dated October 28, 2026"; press release filed 29-Oct-2026, 00:06 IST) | [V BSE press release] |
| Q2 FY27 earnings call | **29-Oct-2026**; audio posted 29-Oct; transcript uploaded to company website, intimated **4-Nov-2026** | [V BSE intimations via screener] |
| Q2 FY27 headline | **Total income ₹4,188 Cr (+12% YoY), EBITDA ₹1,569 Cr (+2%), PAT ₹65 Cr (5th consecutive positive quarter)**; pax 28.0 mn (+0.6%) | [V press release] |
| Post-results corporate events | 28-Oct: Sanjeev Gupta appointed Deputy CEO from 29-Oct-2026; Alexis Benjamin Riols resigned 28-Oct-2026 (the writer should verify whether Riols was an ADP nominee [K-uncertain]); 11-Nov: investor-conference meetings intimated | [V screener announcements] |
| **Next result (Q3 FY27, Dec-2026 quarter)** | **Not announced.** Last year's Q3 FY26 call was in **Feb-2026** (screener transcript list); expect **late Jan to mid-Feb 2027** [E] | [V screener; E] |

**Still listed? Yes — GMR Airports Ltd (GMRAIRPORT/532754) is listed and trading (₹99.0, m-cap ₹1,05,840 Cr on 13-Nov-2026) [V screener].** Corporate history and live actions:
1. **The 2024 merger is complete.** The Composite Scheme of Amalgamation & Arrangement among **erstwhile GMR Airports Ltd (GAL, the airport holdco in which ADP had invested), erstwhile GMR Infra Developers Ltd and the listed company (then GMR Airports Infrastructure Ltd, formerly GMR Infrastructure Ltd)** became **effective 25-Jul-2024** [V Q2 deck]. The listed entity was renamed **GMR Airports Limited** (Sep-2024 per primer [primer]; the press release letterhead reads "GMR Airports Limited (Formerly GMR Airports Infrastructure Limited)" [V]). The non-airport businesses (energy, EPC, urban infra) had been demerged earlier into **GMR Power & Urban Infra Ltd (GPUIL)**, separately listed [K; V CRISIL mentions GPUIL]. Screener's "About" blurb still describes the old GMR Infrastructure conglomerate (power, coal, highways) — it is stale [V screener].
2. **Shareholding realignment with Groupe ADP is live (not a delisting risk, but it changes the cap table).** ADP agreed (early 2026) to sell **up to 7.3% of GAL plus its FCCBs** to GMR promoter-group entities for **~€924 mn (~₹10,164 Cr at ₹110/€)**: **tranche 1 — 3.4% for €256 mn — completed Apr-2026**; **tranche 2 — 3.9% for €285 mn — by Apr-2027**; GMR promoters also buy **US$330 mn of FCCBs** from ADP during FY27 (**$30 mn bought by Jul-2026**). ADP **remains a co-promoter**; equal board representation continues; GMR retains management control while ADP keeps a minimum stake (CRISIL: "provided it maintains a minimum 10% stake") [V CRISIL 1-Sep-2026]. After tranche 1: **GMR group 38.26% + ADP 28.9% = 67.16% promoter group** (matches screener's Jun-2026 promoter 67.16%) [V CRISIL; V screener].
3. **OCRPS conversion (29-Sep-2026):** GAL issued **102 mn equity shares to an ADP wholly owned subsidiary** on conversion of **2.55 mn OCRPS at 1:40** (instruments created under the 2024 scheme) [V Q2 deck]. Equity capital rose from ₹1,056 Cr to **₹1,066 Cr** (face value ₹1) and promoter holding to **67.48%** (Sep-2026) [V screener].
4. **FCCBs held by ADP (~₹2,910 Cr at 30-Sep-2026; ₹2,880 Cr at 31-Mar-2026)** are **excluded from GMR's reported net debt** [V decks]; CRISIL treats ₹2,396 Cr of FCCBs and ₹260.4 Cr of OCRPS as "neither debt nor equity" [V CRISIL]. Since ADP is selling the FCCBs to GMR promoters, they will sit with a related party, not a third party.
5. **No merger/demerger of GAL itself is pending.** Peer corporate actions to note: **Adani Airport Holdings (AAHL) pre-IPO raise of ₹9,825 Cr at ~US$18 bn valuation (binding agreements reported Sep-2026)**, IPO timing reported variously as "by Mar-2027" or "FY28" [V-snip kotakneo; angelone]. AAHL is unlisted today (inside Adani Enterprises).

---

## READ THIS FIRST: twelve definitional traps

1. **"Revenue" has three layers at an Indian PPP airport — gross, revenue share, net.**
   - GMR reports **Gross Income** (revenue from operations + other income), then deducts **Revenue Share** paid to the grantor (AAI or a state government), to get **Net Income**; **EBITDA margin is computed on Net Income** [V decks: "Margins calculated on net income"].
   - FY26 consolidated: revenue from operations **₹14,807 Cr** + other income ₹393 Cr = **gross income ₹15,201 Cr** − revenue share **₹3,444 Cr** = **net income ₹11,757 Cr**; EBITDA **₹6,150 Cr** = **52% of net income but only 40.5% of gross income** [V Q4 deck; E].
   - Screener's "Sales" = revenue from operations (₹14,807 Cr) and its "Operating Profit" (₹5,757 Cr, OPM 39%) **excludes other income** and treats revenue share as an expense; company EBITDA (₹6,150 Cr) includes other income [V screener; V deck]. **Never mix the two margins.** Use company EBITDA for prose and EV/EBITDA; use screener OP in the standard peer table and say so.
   - Delhi is the extreme case: FY26 DIAL gross income ₹7,653 Cr, of which **₹3,232 Cr (42.2%) went to AAI as revenue share** [V Q4 deck; E].
2. **AAI passenger numbers ≠ DGCA passenger numbers** (see Units). AAI FY26 all-India **420.09 mn** terminal pax (+1.9%); DGCA FY26 domestic carried ~167.4 mn (+1.2%) [V AAI; V-sib]. Always say "airport passengers (AAI)" when quoting 420 mn.
3. **Consolidated vs SPV.** GAL consolidates **DIAL (74%)**, **GHIAL (74%)**, **GGIAL/Mopa (100%, subject to NIIF CCDs convertible into up to 49%)**, Nagpur (100%), Vizag/Bhogapuram (100%, NIIF CCDs), and the non-aero subsidiaries; **Medan (49%) and Crete (21.6%) are not consolidated line-by-line** and several non-aero businesses are JVs (Delhi advertising 49.9%, Delhi T3 F&B 40%, Hyderabad advertising 49%) whose profits enter only via "share of profit of JVs/associates" [V Q2 deck]. The 26% of DIAL and GHIAL held by AAI (and NIIF's claims at Mopa/Vizag) make **PAT attributable to GAL shareholders much smaller than consolidated PAT**.
4. **PAT: consolidated vs attributable to owners.** Consolidated PAT FY26 **₹472 Cr**; Q2 FY27 **₹65 Cr** [V deck; V screener]. Attributable: screener EPS FY26 **₹0.17** (≈ **+₹180 Cr** on ~1,056 crore shares) and Q2 FY27 EPS **−₹0.01** (≈ **−₹10 Cr**) [E from V screener EPS]. A JM Financial note reports Q4 FY26 "consolidated net profit ₹302.35 Cr" vs the headline ₹400.49 Cr — consistent with ₹302 Cr being the owners' share [V-snip]. **Our primer says FY26 was "still a small loss at the owners-of-parent level"; the EPS arithmetic says a small profit (~₹180 Cr). FLAG — verify against the FY26 annual report's attributable line before printing either.**
5. **Intercompany duty-free flows inflate "sum of SPVs".** Since **28-Jul-2025 (Delhi) and 10-Sep-2025 (Hyderabad)** GAL itself runs duty free; it pays a concession fee/revenue share to DIAL/GHIAL, which DIAL books as non-aero revenue and on which DIAL in turn pays AAI its 45.99% [V CRISIL; V decks]. Summing DIAL + GHIAL + GGIAL + GAL-standalone revenue share gives ₹4,642 Cr vs the consolidated ₹3,444 Cr — **~₹1,198 Cr of intercompany revenue share is eliminated** [E from V]. EBITDA sums are close (₹6,044 Cr vs ₹6,150 Cr consolidated) because other subsidiaries roughly offset eliminations [E]. See Part 3 §3.2 for the bridge.
6. **Regulatory till: "hybrid" = 30% shared till at DIAL/GHIAL/MIAL.** Under the OMDA/SSA framework (Delhi, Mumbai) and AERA's hybrid till (Hyderabad and the post-2019 approach), **30% of non-aeronautical revenue cross-subsidises the aeronautical revenue requirement**; 70% stays with the operator [K: AERA tariff orders; V CRISIL "hybrid tariff system, guaranteeing returns on aero assets"]. "Dual till" (0% cross-subsidy) is AERA's 2021-amended guideline default for new PPP airports [K]. "Single till" (100%) was AAI's historic model. **TDSAT (1-Jul-2025) ruled that for Delhi/Mumbai's First Control Period (2009–14) AERA must use the then-prevailing single till per the SSA** when back-solving the hypothetical regulatory asset base [V Cyril Amarchand blog] — the tribunal's logic favoured the operators because it raised the opening asset base. Do not write "GMR's airports keep all non-aero profit".
7. **Aero tariff = RAB × fair rate of return + depreciation + opex + tax − 30% × non-aero revenue (+/− true-ups).** "Aero revenue" therefore rises in steps at each **control period (CP)** reset and with **true-ups** of past under-recovery. DIAL's aero revenue jumped **₹1,153 Cr (FY25) → ₹3,011 Cr (FY26)** when the CP4 order took effect on **16-Apr-2025** — aero yield per pax **~₹145 → ~₹383** [V Q4 deck; E]. This is a regulatory step, not organic growth. Hyderabad's CP4 (from 1-Sep-2026) **cut** departing UDF [V dailypioneer].
8. **UDF ≠ total aero yield.** UDF (User Development Fee) is a per-passenger levy collected via the ticket; aero revenue also includes landing, parking, X-ray/baggage, and (at Hyderabad, per its tariff order) **cargo, ground handling and fuel farm (CGF) revenues treated as aeronautical** [V Q2 deck footnote; TDSAT ruled CGF should be non-aero — "got favourable judgement by TDSAT"]. GMR's "Aero YPP" = aero revenue ÷ pax of DEL+HYD+GOX(+NAG+VTZ) [V deck definition].
9. **"Non-Aero IPP" (income per pax) is GMR's own composite, not a standard.** It = revenue from non-aero businesses **adjusted for revenue share to airports** + all airport non-aero revenues, ÷ pax; excludes MRO and the Hyderabad hotel; "previous periods not comparable due to recent concession wins" [V deck]. The **+62% FY26 jump to ₹600** is mostly the insourcing of duty free (GAL now books gross duty-free sales), not a 62% rise in spend. Adani's "non-aero revenue per pax ₹961" (H1 FY27) is a different construct [V-snip Moodie Davitt].
10. **Ind AS / concession accounting.** Indian airport concessions are accounted under Ind AS 115 / Appendix D of Ind AS 115 (service concession arrangements — intangible-asset model); the airport's terminal assets sit as "intangible assets / right to charge users" or PPE depending on the concession; **construction revenue** under IFRIC 12 shows up at Fraport (H1 2026 revenue ex-IFRIC 12 €1.98 bn vs reported €2.07 bn [V-snip]) [K for Ind AS treatment]. Lease liabilities (Ind AS 116) and **Refundable Security Deposits (RSD)** from real-estate lessees at Delhi (interest-free deposits funded part of DIAL's capex) [K] sit outside "debt" in some presentations — check what is in "net debt".
11. **Net debt basis.** GMR consolidated **net debt ₹34,000 Cr (INR 340 bn) at 30-Sep-2026, unchanged QoQ and YoY**, **excluding FCCBs of ₹2,910 Cr held by ADP** [V Q2 deck]. Screener "Borrowings" **₹47,408 Cr (Sep-2026)** / ₹43,550 Cr (Mar-2026) is gross and likely includes lease liabilities and possibly the FCCBs [V screener]. CRISIL's GAL-standalone net debt/EBITDA (incl. dividends) is a *holdco* metric: **5.8× (Mar-26) vs 11.7× (Mar-25)** [V CRISIL] — not the consolidated 5.5×.
12. **Fiscal vs calendar years; Medan lag; Cebu and Crete.** Medan's quarter lags one quarter; GAL **no longer owns Mactan-Cebu** (it is only Technical Services Provider **until Dec-2026**; 12.1 mn Cebu pax in FY26 are not GMR's revenue) [V deck]. **Crete (Heraklion–Kastelli) is 21.6% owned, 78% complete at Sep-2026, debt-free (state grant + Airport Modernisation & Development Tax)** [V deck]; opening widely reported for 2027–28 [K — verify]. GMR's deck headline "~187 mn passengers handled" (footnote: FY26 incl. DIAL, GHIAL, Goa, Medan and Cebu) does **not** reconcile with the airport-wise sum (78.7 + 30.5 + 5.4 + 7.1 + 12.1 ≈ 134 mn) [V deck; E] — do not use it; use 121.6 mn (GMR-operated, ex-Cebu) or 114.6 mn (three Indian airports).

---

# PART 1 — THE INDIAN AIRPORTS INDUSTRY

## 0. Top-line framing (what an expert leads with)

- **India is the world's third-largest aviation market by passengers, but its airports run on a 2026 that has gone flat.**
  - AAI all-India airport passengers **FY26: 420.09 mn (+1.9%)** — domestic 339.45 mn (+1.4%), international **80.64 mn (+4.2%)**; ATMs 2.91 mn (+0.6%); freight **3.96 mt (+6.2%)** [V AAI Mar-2026 traffic report].
  - **Apr–Sep 2026 (H1 FY27): 196.24 mn (−2.9%)** — domestic −1.9%, international **−7.1%**; freight **+11.7%** [V AAI Sep-2026 report]. GMR's deck quotes −3.1% (−2.2% dom, −7.1% intl) [V Q2 deck] — small basis difference; use AAI.
  - Monthly pax went negative from Mar-2026 (−4.4%), with only May positive (+4.5%); **Jul −4.7%, Aug −5.6%, Sep −5.9%** [V AAI monthly reports]. ICRA (Sep-2026) now sees **FY27 airport traffic +1–3% (424–432 mn)** and **airport revenues of its sample +6–8%** [V-snip FPJ].
  - Causes (consistent with the airline dossier): West Asia war (Gulf corridors shut from 28-Feb-2026), fare inflation from jet fuel (IndiGo yield +34% in Q2 FY27), airline capacity cuts (IndiGo post-meltdown, P&W-grounded fleet, SpiceJet's collapse, Air India's widebody reductions) [V-sib].
- **The industry is a three-way split: GMR ~27%, Adani ~23%, AAI ~35%, the rest ~15% (FY26, by passengers).**
  - Computed from AAI airport-wise data [E from V]: **GMR (Delhi + Hyderabad + Mopa) 114.6 mn = 27.3%**; **Adani (Mumbai + Navi Mumbai + Ahmedabad + Lucknow + Jaipur + Guwahati + Thiruvananthapuram + Mangaluru) 95.3 mn = 22.7%**; **Bengaluru BIAL (Fairfax-controlled) 44.5 mn = 10.6%**; Cochin CIAL 11.3 mn = 2.7%; Kannur 0.3%; Nagpur 0.7% (MIHAN JV until GMR took over 25-Jun-2026); **AAI-run and others 147.0 mn = 35.0%** [E]. GMR's own figure: 27% of India pax in FY26 (Delhi 19%), 26% of domestic, 34% of international [V Q4 deck].
  - H1 FY27: GMR's three airports **27.6%** (Jul–Sep 2026 incl. Nagpur/Vizag: **29%**, Delhi alone **20%**; international **35%**) [E from V AAI; V Q2 deck]; Adani 8 airports **23.2%** [E].
- **Delhi is the national hub — and the only big airport growing in 2026.**
  - Delhi IGI H1 FY27 **38.50 mn (+5.0%)**, Sep-2026 **+2.7%** while Mumbai **−8.2%** (H1), Bengaluru −1.8%, Hyderabad **−11.7%**, Chennai −10.9%, Kolkata −7.3% [V AAI]. Delhi was "the only airport among top 5 Indian airports which saw a YoY increase in seats in Oct'26 per OAG" [V Q2 deck].
  - Reason: Air India's hub strategy ("Easy Connect"), IndiGo international growth from Delhi, **T3 Pier C converted to international (T3 international capacity +50% to 32 mppa)**, and Delhi climbing to **#28 in OAG Megahubs 2026** (only Indian airport in the top 50) [V Q2 deck].
- **Profitability flipped in FY26 because regulators reset tariffs, not because traffic grew.**
  - GMR FY26: traffic **+0.9%**, but gross income **+40%** to ₹15,201 Cr, EBITDA **+47%** to ₹6,150 Cr, PAT **₹472 Cr vs −₹817 Cr** — the **first positive annual PAT in over a decade** [V Q4 deck; V screener].
  - Two drivers: (1) **Delhi CP4 tariff** (aero revenue ₹1,153 → ₹3,011 Cr; effective 16-Apr-2025) and (2) **insourced duty free** (Delhi from 28-Jul-2025, Hyderabad from 10-Sep-2025) — GAL-standalone revenue ₹1,263 → ₹4,242 Cr [V Q4 deck].
  - Adani's airports did the same in Q2 FY27: income **+20%** to ₹3,786 Cr, EBITDA **+55%** to ₹1,641 Cr on **flat-to-down traffic** (H1 45.5 mn vs 46.0 mn), driven by non-aero +57% [V-snip AEL Q2 coverage; Moodie Davitt].
- **The regulatory pendulum swung toward operators in 2025–26 at the tribunal, and toward passengers at AERA.**
  - TDSAT **1-Jul-2025**: Delhi/Mumbai CP1 hypothetical regulatory asset base must be back-solved under the then single till → recoverable deficits [V Cyril Amarchand]. TDSAT **Sep-2026** (company announcement 20-Sep-2026): DIAL won **"on all counts"** against AERA's CP4 order, including AERA's non-implementation of earlier TDSAT orders; AERA must implement within 3 months unless it appeals [V GMR PR; V-snip investywise].
  - But AERA itself is pushing passenger affordability: Delhi domestic UDF **held at ₹129** for CP4; Hyderabad's CP4 **cut domestic departing UDF ₹750 → ₹515 and international ₹1,500 → ₹1,030** (from 1-Sep-2026), adding a first-ever **arrival UDF (₹220 dom / ₹440 intl)** [V-snip; V dailypioneer]. The Supreme Court (18-Oct-2024) **upheld AERA's powers** in a setback to GMR/Adani [V-snip BS headline].
- **Leverage is still the binding constraint, but it is being refinanced cheaper and re-rated.**
  - GMR consolidated **net debt ₹34,000 Cr** (flat for a year), **~5.5× FY26 EBITDA / 5.3× TTM** [V; E]. Interest ₹3,859 Cr in FY26 vs EBITDA ₹6,150 Cr → **EBITDA/interest ~1.6×** [V; E].
  - Q2 FY27 refinancing: **DIAL ₹3,500 Cr 15-yr NCDs at 8.71%** replacing **US$522.6 mn notes**; **GAL ₹1,500 Cr NCBs at 9.56% replacing 10.75% debt**; ratings: **GHIAL to investment grade (S&P BBB− from BB, two notches; Fitch BBB− from BB+)**, DIAL notes S&P **BB+** (from BB), GAL NCDs **CRISIL AA− (from A+)**, CARE AA− [V Q2 PR; V CRISIL]. CRISIL domestic: DIAL **AA/Stable**, GHIAL **AA+/Positive**, AAI **AAA/Stable** [V CRISIL].
- **Capacity has leapt ahead of demand in 2026.**
  - New airports opened into a falling market: **Navi Mumbai (NMIA, Adani) 25-Dec-2025** (domestic) with international from Jul-2026 — H1 FY27 2.71 mn pax [V-sib; V AAI]; **Noida/Jewar (NIA, Zurich Airport) commercial ops 15-Jun-2026** — 0.21 mn pax by Sep [V-snip; V AAI]; **Vizag/Bhogapuram (GMR) inaugurated 1-Aug-2026, COD 17-Aug-2026**, 6 mppa initial capacity [V Q2 PR]; **Nagpur (GMR) handover 25-Jun-2026** [V].
  - Delhi capacity **106 mppa** vs FY26 traffic 78.7 mn (**~74% utilised**); Hyderabad **34 mppa** vs 30.5 mn (**~90%** in FY26, ~80% annualising H1 FY27) [V Q2 deck; E].
- **Valuation: GMR trades at ~22–23× EV/EBITDA vs 9–13× for European listed airports.**
  - GMR m-cap **₹1,05,840 Cr**, EV ~**₹1.40 lakh Cr** (+ net debt ₹34,000 Cr; ~₹1.43 lakh Cr incl. FCCBs) → **22.7× FY26 company EBITDA, ~21.6× TTM** [E from V screener + V deck].
  - **Aena ~12.8×, Fraport ~10.4×, ADP ~8.9× (2026 guided EBITDA), Zurich ~9× m-cap/EBITDA** [E from V-snip H1-2026 data + V prices 13-Nov-2026].
  - **ADP's own exit price is a reference point:** tranche 1 (3.4% for €256 mn) implies **~€7.5 bn (~₹78,400 Cr at ₹104.1/€; ~₹82,800 Cr at CRISIL's ₹110/€) for 100% of GAL — roughly ₹73–78/share vs ₹99 in the market** [E from V CRISIL]. Tranche 2 implies ~€7.3 bn [E].

---

## 1. What the sub-sector does: services, value chain, where value is captured

### 1.1 Services and revenue lines (Indian airport operator)

| Line | What it is | Who pays | Regulated? | GMR example (FY26 / H1 FY27) |
|---|---|---|---|---|
| **Aeronautical — landing & parking** | Charge per MT of aircraft weight per landing; parking/housing per hour | Airlines | Yes (AERA, per control period) | Hyderabad CP4 landing **₹435/MT domestic, ₹630/MT international** (initial period) [V dailypioneer] |
| **Aeronautical — UDF** | User Development Fee per departing (and now arriving) passenger, collected in the ticket | Passengers (via airlines) | Yes | Delhi dom ₹129; Delhi intl economy **₹650 dep / ₹275 arr**, business ₹810 dep (CP4) [V-snip]; Hyderabad dom **₹515 dep / ₹220 arr**, intl **₹1,030 / ₹440** from 1-Sep-2026 [V dailypioneer] |
| **Aeronautical — other** | Passenger service/security (Aviation Security Fee goes to the government, not the airport [K]), X-ray, CUTE/common-use, aerobridge | Airlines/passengers | Yes | Bundled in "Aero revenue" |
| **CGF (cargo, ground handling, fuel farm)** | Treated as aero at Hyderabad per tariff order; non-aero at Delhi | Airlines/cargo agents/oil cos | Partly | Delhi cargo revenue H1 FY27 ₹280 Cr (+15%), 0.63 mt (+12%) [V Q2 deck] |
| **Non-aero — retail & duty free** | Duty free (arrival + departure), specialty retail | Passengers | No | Delhi Duty Free H1 FY27 total income ₹1,144 Cr, EBITDA post revenue share ₹219 Cr [V Q2 deck]; Delhi DF spend per departing pax (SPP) **₹1,095** H1 FY27 vs ₹1,045 [V] |
| **Non-aero — F&B, lounges** | Concession fees (% of sales, minimum guarantee) | Passengers | No | Delhi F&B ₹210 Cr H1 FY27 (+12%); GAL's 70% subsidiary GMR Hospitality won Delhi T3 F&B to May-2036 (+10 yrs) [V] |
| **Non-aero — advertising** | Site concessions | Brands | No | Delhi advertising ₹150 Cr H1 FY27 (+29%); site occupancy 66% (Delhi) vs 34% (Hyderabad) [V] |
| **Non-aero — car parking, ground transport** | Car park concessions | Passengers | No | Delhi car park subsidiary FY26 revenue ₹327 Cr; Hyderabad car park ₹161 Cr [V Q4 deck] |
| **Non-aero — space rentals, ground handling** | Airline offices, check-in counters, GH concessions | Airlines/agents | No | Delhi GH ~7%, space rentals in "others" [V Q2 deck] |
| **CPD / real estate** | City-side development: land leases (Aerocity), hotels, offices, hospitals, logistics; **upfront premiums + annual rentals** | Developers, tenants | No (but subject to revenue share) | DIAL **CPD rentals ₹949 Cr FY26**; GGIAL ₹7 Cr [V Q4 deck]; GHIAL 1,500-acre land bank, GMR Interchange retail project [V] |
| **MRO** | Third-party aircraft & engine maintenance | Airlines/lessors | No | GMR Aero Technic FY26 revenue ₹677 Cr, EBITDA ₹186 Cr [V Q4 deck] |
| **Hospitality** | Airport hotels | Travellers | No | Hyderabad hotel FY26 revenue ₹138 Cr [V] |

### 1.2 Value chain (who does what, from concession to passenger)

1. **Grantor / owner of the land and the airport right:** Government of India via **AAI** (for Delhi, Mumbai, Hyderabad brownfield, the 2019 PPP-6 and the 2026 round), or **state governments** (Goa for Mopa; Uttar Pradesh/NIAL for Noida; Andhra Pradesh for Bhogapuram; Maharashtra/MADC for Navi Mumbai via CIDCO and Nagpur via MIHAN India) [K; V deck for GMR assets].
2. **Concessionaire / airport operator (the listed or private platform):** GMR, Adani, Fairfax (BIAL), Zurich (Noida), CIAL (Kerala-government-anchored public company), AAI itself for ~125+ airports [K; airline dossier V-sib for ~125].
3. **Economic regulator:** **AERA** (Airports Economic Regulatory Authority of India; statutory since 2009) sets aero tariffs for **"major airports"** (traffic above the threshold — the 2019 amendment raised it from 1.5 mn to **3.5 mn passengers per year** [K]) on a five-year **control period** basis; **TDSAT** hears appeals; Supreme Court is final [K; V-snip].
4. **Policy and safety:** MoCA (policy, bilaterals, privatisation), DGCA (aerodrome licensing — e.g. Noida's aerodrome licence 6-Mar-2026 [V-snip]), BCAS (security), CISF (screening), Customs/Immigration.
5. **Service providers inside the fence:** ground handlers (Celebi, Bird, AISATS, IndiGo's Agile), fuel farms (oil companies/JVs), cargo terminal operators, duty-free operators (now increasingly the airport platform itself), F&B/retail concessionaires (Travel Food Services, SSP, Lagardère, Encalm), advertising concessionaires.
6. **Customers:** airlines (pay landing/parking, rent space), passengers (pay UDF, spend in terminal), cargo shippers, real-estate tenants.

### 1.3 Where value is captured

- **The regulated till is designed to earn the allowed return and no more** — FRoR (fair rate of return) on RAB. AERA's cost of equity for major airports has historically been ~14–16% (equity) [V-sib K]; with 30% of non-aero cross-subsidy, aero is "just enough".
- **Value accrues in (a) the 70% of non-aero kept by the operator, (b) real estate outside the till, (c) platform businesses (duty free, F&B, cargo) that capture the concessionaire's margin as well as the airport's concession fee, and (d) step-ups and true-ups won at TDSAT.**
  - GMR's strategy since 2025 is (c): insource duty free, F&B, cargo, car parks, MRO — "GAL Platform" — so it earns *both* the concession fee (inside DIAL, shared 45.99% with AAI and 26% with AAI as shareholder) and the operator margin (inside GAL, 100% owned) [V decks; E]. CRISIL: GAL-standalone non-aero >85% of revenue in FY26 (46% in FY25), expected >90% from FY27 [V].
- **Revenue share is the hidden "tax" in brownfield PPPs.** Delhi pays **45.99%** of gross revenue (aero + non-aero + real estate) to AAI; Mumbai **38.7%** [K]; Hyderabad only **4%** (greenfield, 2008 terms); Mopa **36.99%**; Nagpur **14.49%** [V Q2 deck for GMR assets]. The 2019 PPP-6 (Adani) moved to **per-passenger fees** (₹115–177 per domestic pax) [K]; Vizag/Bhogapuram: **₹303 domestic / ₹606 international per pax at FY35 base, 10-year moratorium, inflation-indexed from FY36** [V Q2 deck]; Noida ~₹400.97/pax to the UP government [K].

---

## 2. Size and growth

### 2.1 Traffic (AAI, all Indian airports)

| Year | Total pax (mn) | YoY | Domestic (mn) | International (mn) | Freight (kt) | ATMs ('000, ex-GA) | Source |
|---|---|---|---|---|---|---|---|
| FY25 | 412.09 | — | 334.70 | 77.38 | 3,733 | 2,887 | [V AAI Mar-26 report, prior-year column] |
| **FY26** | **420.09** | **+1.9%** | **339.45 (+1.4%)** | **80.64 (+4.2%)** | **3,964 (+6.2%)** | **2,906 (+0.6%)** | [V AAI] |
| H1 FY26 (Apr–Sep 2025) | 202.14 | — | 162.62 | 39.52 | 1,963 | 1,428 | [V AAI Sep-26 report] |
| **H1 FY27 (Apr–Sep 2026)** | **196.24** | **−2.9%** | **159.54 (−1.9%)** | **36.70 (−7.1%)** | **2,192 (+11.7%)** | **1,377 (−3.5%)** | [V AAI] |
| FY27 ICRA forecast | 424–432 | +1–3% | | | | | [V-snip ICRA Sep-26] |

Earlier history [K, AAI annual traffic; spot-check if used]: FY20 ~341 mn (pre-COVID peak); FY21 ~115 mn; FY22 ~189 mn; FY23 ~327 mn; FY24 ~376 mn (+15%). ICRA had projected FY26 at **440–450 mn** in 2025 [V-snip entrepreneur.com] — actual 420 mn, a large miss. ICRA (Apr-2025) expected airport operators' revenue +18–20% in FY26 [V-snip Business Today]; GMR delivered +42% (tariff + duty free).

**Monthly 2026 (AAI, mn pax; YoY):**

| Month | Total | YoY | Domestic | YoY | Intl | YoY |
|---|---|---|---|---|---|---|
| Jan-26 | 38.63 | +4.0% | 30.87 | +3.3% | 7.76 | +7.1% |
| Feb-26 | 35.08 | +0.5% | 28.49 | −0.1% | 6.59 | +3.0% |
| Mar-26 | 34.51 | −4.4% | 29.17 | −1.3% | 5.34 | **−18.5%** |
| Apr-26 | 33.83 | −5.4% | 28.27 | −2.9% | 5.56 | **−16.1%** |
| May-26 | 36.98 | +4.5% | 30.83 | +7.7% | 6.15 | −9.1% |
| Jun-26 | 33.39 | −1.8% | 27.24 | −1.2% | 6.15 | −4.6% |
| Jul-26 | 30.63 | −4.7% | 24.30 | −4.7% | 6.33 | −4.6% |
| Aug-26 | 31.01 | −5.6% | 24.61 | −6.0% | 6.40 | −4.0% |
| Sep-26 | 30.10 | −5.9% | 24.00 | −6.3% | 6.10 | −4.2% |

[V AAI monthly traffic reports TRJan2k26 … TRSep2k_26.] The March–April international collapse is the West Asia war; the Jul–Sep domestic slide is fares/capacity. Sep-2026 freight **+12.1%** (intl freight +18.9%) — cargo diverted from sea/Gulf hubs [V AAI].

### 2.2 Money size of the industry [E composite — label approximate]

- **Private operators' FY26 revenue (approx.):** GMR consolidated revenue from operations **₹14,807 Cr** [V]; Adani airports segment ~₹13,000–14,000 Cr in FY26 [E: Q2 FY27 income ₹3,786 Cr was +20% YoY → Q2 FY26 ~₹3,155 Cr; ×4 with seasonality] [E — FLAG, AEL FY26 airport segment not fetched]; BIAL ~₹4,000–5,000 Cr [E — not sourced]; CIAL **₹1,220 Cr** [V-snip]; AAI total income ~₹15,000–20,000 Cr [E — AAI FY25 profit ₹6,711 Cr per MoCA [V-snip]; revenue not sourced].
- **Indicative total airport-operator revenue: ~₹50,000–55,000 Cr (US$5.3–5.8 bn) in FY26** [E — wide band; FLAG]. Of this, GMR is ~27–30%.
- **Capex cycle:** ICRA has flagged **~₹1 lakh Cr of airport investment over 4–5 years** [V-snip Tribune/ICRA headline]; Adani alone plans **₹1 lakh Cr (US$11 bn)** for its airports [V-snip Bloomberg via search]; AAI announced **₹15,000 Cr by 2028** for ATC/navigation [V-sib]; Crete ~€0.5 bn+ [K-uncertain].
- **India's share of world:** India ~4% of global airport passengers (ACI world ~9.5–10 bn in 2025 [K]; India 420 mn) [E].

### 2.3 Per-airport size (FY26 and H1 FY27, AAI)

| Rank | Airport (operator) | FY26 pax (mn) | FY26 YoY | FY26 dom / intl (mn) | H1 FY27 (mn) | H1 YoY |
|---|---|---|---|---|---|---|
| 1 | **Delhi IGI (GMR–DIAL)** | **78.70** | −0.7% | 57.15 / 21.55 | **38.50** | **+5.0%** |
| 2 | Mumbai CSMIA (Adani–MIAL) | 55.29 | +0.3% | 38.94 / 16.35 | 24.75 | −8.2% |
| 3 | Bengaluru KIA (Fairfax–BIAL) | 44.47 | +6.2% | 37.24 / 7.23 | 21.26 | −1.8% |
| 4 | **Hyderabad RGIA (GMR–GHIAL)** | **30.48** | +3.4% | 25.02 / 5.46 | **13.58** | **−11.7%** |
| 5 | Chennai (AAI) | 23.02 | +2.7% | 16.87 / 6.14 | 10.25 | −10.9% |
| 6 | Kolkata (AAI) | 21.10 | −3.3% | 18.80 / 2.30 | 9.42 | −7.3% |
| 7 | Ahmedabad (Adani) | 13.82 | +2.9% | 11.41 / 2.42 | 6.24 | −5.4% |
| 8 | Kochi (CIAL) | 11.30 | +1.5% | 5.97 / 5.33 | 5.29 | −7.3% |
| 9 | Pune (AAI/IAF) | 11.01 | +5.2% | 10.67 / 0.34 | 5.47 | +1.5% |
| 10 | Guwahati (Adani) | 6.62 | +7.5% | | 3.09 | −4.2% |
| 11 | Goa Dabolim (AAI/Navy) | 6.13 | **−15.4%** | | 2.78 | −4.6% |
| 12 | Lucknow (Adani) | 6.07 | −5.8% | | 2.97 | +3.6% |
| 13 | Jaipur (Adani) | 5.63 | −7.1% | | 2.35 | −4.5% |
| 14 | **Goa Mopa (GMR–GGIAL)** | **5.38** | **+15.8%** | 4.99 / 0.39 | **2.02** | **−14.4%** |
| 15 | Bhubaneswar (AAI) | 5.13 | +6.0% | | 2.13 | −14.5% |
| 16 | Thiruvananthapuram (Adani) | 4.69 | −4.0% | | 2.22 | −7.8% |
| — | Nagpur (MIHAN → GMR from 25-Jun-26) | 3.01 | +3.9% | | 1.46 | +4.3% |
| — | Visakhapatnam (AAI → GMR Bhogapuram from 17-Aug-26) | 2.97 | +0.4% | | 1.31 | −10.2% |
| — | Mangaluru (Adani) | 2.55 | +8.8% | | 1.13 | −9.3% |
| — | Navi Mumbai (Adani–NMIAL) | 0.64 (from 25-Dec-25) | n.m. | all dom | **2.71** | n.m. |
| — | Noida/Jewar (Zurich–YIAPL/NIAL) | — | — | — | **0.21** (from 15-Jun-26) | n.m. |

[V AAI Annexure III-C, Mar-2026 and Sep-2026.] Mumbai *system* (CSMIA + NMIA) H1 FY27 **27.46 mn vs 26.95 mn (+1.9%)** [E] — NMIA cannibalised CSMIA rather than growing the market. Goa *system* (Dabolim + Mopa) FY26 11.50 mn (−1.0%); Mopa's share of Goa **~49% in Q4 FY26, ~42% in Apr–Sep 2026** [V GMR decks; E].

---

## 3. Demand drivers and end-markets

### 3.1 The drivers, with 2026 numbers

1. **Domestic air travel penetration.** India's ~0.12–0.15 trips per capita per year vs China ~0.5 and the US ~2.5 [K, IATA/ICAO ballpark — FLAG for exact figures]. Air India + IndiGo order books (>1,500 aircraft) presuppose 8–10% CAGR [V-sib].
2. **Fares and fuel — the 2026 counter-force.** IndiGo yield **+21% (Q1 FY27), +34% (Q2 FY27)**; domestic traffic −6.3% (Aug) / −6.5% (Sep) DGCA [V-sib]; AAI domestic terminal pax −6.0% / −6.3% [V AAI] — the two series agree.
3. **International: diaspora/Gulf labour corridors and the hub play.** International = **19% of AAI pax in FY26** (80.64 of 420.09 mn) [E from V]; **24% of GMR's Indian pax** [V Q4 deck]; **34–35% of India's international traffic goes through GMR airports** [V decks]. The West Asia war cut India international pax **−18.5% in Mar-2026, −16.1% in Apr** [V AAI]; foreign carriers gained (Emirates India pax +7% in Apr–Jun) [V-sib].
4. **Airline capacity supply.** P&W GTF groundings (~40 IndiGo aircraft still AOG in Jan-2026), SpiceJet's fleet collapse (domestic share 0.6% in Sep-2026), IndiGo's DGCA-mandated schedule cut after the Dec-2025 meltdown, Air India post-AI171 widebody cuts [V-sib]. Hyderabad's management attributes its −13% domestic decline to "route rationalization by airlines" [V Q2 PR].
5. **Hub formation at Delhi.** Air India's "Easy Connect" (Ahmedabad added as a spoke), Delhi international +7.2% in Sep-2026 [V AAI; V Q2 PR].
6. **Cargo.** FY26 freight +6.2%; H1 FY27 **+11.7%** (international +15.2%) [V AAI] — Delhi cargo 1.15 mt record FY26 and +12% in H1 FY27; Hyderabad record 52 kt in Q2 FY27 [V decks]. Cargo is a growing non-aero line at Delhi (14% of non-aero) and a CGF/aero line at Hyderabad.
7. **Consumer spend per pax.** Delhi duty-free SPP **₹1,095** (H1 FY27, +5%); Hyderabad **₹929** (+20%) [V Q2 deck]. Adani non-aero/pax **₹961 (+56%)** [V-snip]; Paris (Extime) **~€31 (~₹3,230)** per pax [V-snip ADP H1] — India's spend per pax is ~⅓ of Paris's.
8. **Real-estate demand around airports.** Delhi Aerocity: Taj terminal hotel (~380 keys, partial ops Q4 FY27), Aerocity One office (~1 mn sq ft, handover FY27), AIG hospital (500+ beds), Hilton/Waldorf (500 keys); Hyderabad: GMR Interchange retail (~0.77 mn sq ft BUA), build-to-suit SEZ for XDLinx, CFM, TechnipFMC; Mopa: 4 hotels (900+ keys); Vizag: 152-key Vivanta [V Q2 PR].

### 3.2 Seasonality

- Indian airport traffic peaks in **Q3–Q4 (Oct–Mar: festive + winter + holiday)** and in May (summer holidays); Jul–Sep (monsoon) is the trough. GMR Q2 FY27 traffic fell **8.2% QoQ**; management guides "seasonality to provide sequential uptick in H2 FY27" [V Q2 deck]. Delhi Q2 FY27 18.1 mn vs Q1 20.4 mn (−11%) [V].

---

## 4. Supply side and cost structure

### 4.1 Capacity (mppa) vs traffic → utilisation

| Airport | Operator | Current capacity (mppa) | Ultimate / master-plan (mppa) | Traffic FY26 (mn) | Utilisation FY26 | Notes |
|---|---|---|---|---|---|---|
| Delhi IGI | GMR (DIAL) | **106** | 125 (GMR deck) | 78.7 | **~74%** | Phase 3A complete (T1 expansion, 4th runway, eastern cross taxiway) [K]; T3 Pier C intl → T3 intl cap 32 mppa [V] |
| Hyderabad RGIA | GMR (GHIAL) | **34** | 80 | 30.5 | **~90%** (H1 FY27 annualised ~80%) | Expansion completed 2023–24 [K]; northern expansion may add a UDF component [V-snip] |
| Goa Mopa | GMR (GGIAL) | **7.7** | 33 | 5.4 | ~70% | Phase 1 opened Jan-2023 [K] |
| Nagpur | GMR | **2.9** | 50 (30 at COD+30y, then 50) | 3.0 | ~104% | Brownfield; greenfield terminal under concession signed 8-Oct-2024 [V] |
| Vizag Bhogapuram | GMR (GVIAL) | **6** | 40 | ~2.6–3.0 (old airport) | ~50% | COD 17-Aug-2026; old Vizag civil enclave closed [V; K] |
| Medan Kualanamu | GMR 49% (with Angkasa Pura II) | 10 | n.a. | 7.1 | ~71% | [V deck] |
| Crete Kastelli | GMR 21.6% | — | 15 | — | — | 78% complete [V] |
| Mumbai CSMIA | Adani (MIAL) | ~55 [K] | constrained (single-runway system) | 55.3 | ~100% | [K] |
| Navi Mumbai NMIA | Adani (NMIAL) | **20 (Phase 1)** [K] | 90 [K] | 0.64 (FY26) / 2.71 (H1 FY27) | ~25–30% annualised | [V AAI; K capacity] |
| Bengaluru KIA | Fairfax (BIAL) | ~50+ (T1 + T2 phase 1) [K] | 90+ [K] | 44.5 | ~85% | [K] |
| Noida NIA | Zurich (YIAPL) | **12 (Phase 1)** [K] | 70 [K] | — | ~3–4% annualised (H1) | [V AAI; K] |
| Kochi | CIAL | ~10–12 [K] | — | 11.3 | ~95%+ | [K] |

[V GMR Q2 deck for GMR rows; K for others — FLAG the K capacities.] GMR group: "operational capacity ~167 mppa, under development ~20 mppa, rated capacity of 400 mppa+ at full build-out" [V deck].

### 4.2 Cost structure — "where ₹100 of gross revenue goes" [E composites from V SPV accounts]

**A. Delhi DIAL (brownfield, 45.99% revenue share), FY26** — gross income ₹7,653 Cr = 100:
| Item | ₹ per ₹100 of gross income | Basis |
|---|---|---|
| Revenue share to AAI | **42.2** | ₹3,232 Cr [V] |
| Operating expenditure (staff, O&M, utilities, security, upkeep) | 20.1 | ₹1,539 Cr [V] |
| **EBITDA** | **37.7** | ₹2,882 Cr [V] |
| Depreciation | 13.2 | ₹1,011 Cr [V] |
| Interest & finance charges | 20.0 | ₹1,534 Cr [V] |
| Exceptional (gain) | +1.8 | ₹140 Cr [V] |
| **PAT** (no tax — losses carried forward) | **6.2** | ₹477 Cr [V] |

**B. Hyderabad GHIAL (greenfield, 4% revenue share), FY26** — gross income ₹2,579 Cr = 100:
| Item | ₹ per ₹100 | Basis |
|---|---|---|
| Revenue share | **4.0** | ₹102 Cr [V] |
| Opex | 33.4 | ₹862 Cr [V] |
| **EBITDA** | **62.6** | ₹1,614 Cr [V] |
| Depreciation | 18.8 | ₹485 Cr [V] |
| Interest | 25.6 | ₹660 Cr [V] |
| Tax | 1.6 | ₹42 Cr [V] |
| **PAT** | **16.6** | ₹427 Cr [V] |

**C. Goa Mopa GGIAL (greenfield ramp-up, 36.99% revenue share kicked in FY26), FY26** — gross ₹406 Cr = 100: revenue share **25.0**; opex 43.6; **EBITDA 31.4**; depreciation 41.4; interest 71.4; **PAT −81.6** (₹−331 Cr) [V Q4 deck; E].

**Read:** the revenue-share term, not opex, is the biggest swing in airport economics. Delhi and Hyderabad have the same ~65% EBITDA-to-net-income margin, but per ₹100 of gross revenue Delhi keeps 38 and Hyderabad 63 [E].

### 4.3 Key cost inputs and drivers
- **Staff and O&M contracts** (indexed to wages/inflation); **power** (Delhi and Hyderabad run on 100% renewable/clean power — GHIAL "National Energy Leader" 8 years running; 89% renewable in energy mix in 2024 [V CRISIL]); **security** (CISF cost borne via Aviation Security Fee to the government, not airport opex [K]); **insurance, IT, maintenance capex**.
- **Interest rates:** DIAL's ₹3,500 Cr 15-yr NCD at **8.71%** vs the US$ notes it replaced; GAL ₹1,500 Cr at **9.56%** vs 10.75% [V]. GAL's Aug-2025 NCDs carry **5% cash coupon** with the rest accruing (zero-coupon-like accretion) [V CRISIL annexure].
- **FX:** GMR booked a **non-cash FX loss of ~₹260 Cr in FY26 from EUR appreciation** [V Q4 deck] (euro-linked liabilities — likely the FCCBs/Greek project funding [E]). DIAL's dollar notes were being refinanced into rupees [V].

---

## 5. Industry structure

### 5.1 Concentration and shares (basis: AAI terminal passengers)

| Operator group | Airports (FY26 basis) | FY26 pax (mn) | Share FY26 | Share FY25 | H1 FY27 pax (mn) | Share H1 FY27 | Ownership |
|---|---|---|---|---|---|---|---|
| **GMR Airports** | Delhi, Hyderabad, Mopa (+ Nagpur from 25-Jun-26, Vizag from 17-Aug-26) | **114.56** | **27.3%** | 27.5% | 54.10 (3 airports) | **27.6%** | Listed; GMR group 38.26% + Groupe ADP 28.9% (promoter group 67.48% Sep-26); AAI 26% of DIAL & GHIAL |
| **Adani Airport Holdings** | Mumbai, Navi Mumbai, Ahmedabad, Lucknow, Jaipur, Guwahati, Thiruvananthapuram, Mangaluru | **95.31** | **22.7%** | 22.9% | 45.45 | **23.2%** | Unlisted subsidiary of Adani Enterprises; MIAL 74% Adani / 26% AAI [K]; pre-IPO raise ₹9,825 Cr at ~$18 bn [V-snip] |
| **Fairfax (BIAL)** | Bengaluru | 44.47 | 10.6% | 10.2% | 21.26 | 10.8% | 74% private (Fairfax ~64%, Siemens exited [K]); 26% GoI-AAI 13% + Karnataka KSIIDC 13% [V-snip AERA doc; K split] |
| **CIAL** | Kochi | 11.30 | 2.7% | 2.7% | 5.29 | 2.7% | Unlisted public company; Kerala govt ~32–33% + ~19,000 shareholders [K] |
| KIAL | Kannur | 1.43 | 0.3% | 0.3% | 0.56 | 0.3% | Kerala-govt anchored [K] |
| Zurich Airport (YIAPL) | Noida/Jewar | — | — | — | 0.21 | 0.1% | 100% Flughafen Zürich AG [K] |
| MIHAN India / GMR | Nagpur | 3.01 | 0.7% | 0.7% | 1.46 | 0.7% | GMR from 25-Jun-2026 [V] |
| **AAI and others** | ~125 operational AAI airports incl. Chennai, Kolkata, Pune, Goa-Dabolim, Bhubaneswar, Varanasi, Patna, Srinagar… | **147.04** | **35.0%** | 35.0% | ~66.5 | ~33.9% | Government of India |
| **Total** | | **420.09** | 100% | | 196.24 | | [V AAI] |

[E from V AAI airport-wise data; GMR's own FY26 India share 27% and Jul–Sep 2026 29% [V decks].] By operator *count*: AAI owns ~137 airports and operates ~125 [K/V-sib]; private PPP covers **~14 large airports but ~65% of passengers** [E].

**Herfindahl reading [E]:** GMR + Adani + BIAL = **60.6%** of FY26 India passengers. With Navi Mumbai, Noida and the 2026 round, private share heads to ~70% by FY30 [E].

### 5.2 Market structure inside cities (catchment competition)

- **Mumbai:** CSMIA and NMIA are *both* Adani — no competition; NMIA mitigates CSMIA's slot cap. H1 FY27 CSMIA −8.2%, NMIA +2.71 mn → system +1.9% [E from V].
- **Delhi NCR:** DIAL (GMR) vs **Noida/Jewar (Zurich)** and **Hindon** (AAI civil enclave: 1.13 mn FY26 vs 0.08 mn FY25 [V AAI]). DIAL's concession includes a **first right of refusal / 150-km exclusivity** for a second airport — GMR declined to match Zurich's Noida bid in 2019 [K — verify wording]. Noida H1 FY27 traffic 0.21 mn vs DIAL 38.5 mn — no visible cannibalisation yet [V AAI].
- **Goa:** Mopa (GMR) vs Dabolim (AAI, Navy airfield): Mopa took ~49% (Q4 FY26) but slipped to **~42% in Apr–Sep 2026** as Mopa's "special initiative program" incentives were discontinued and aero tariffs normalised (+35% aero revenue in Q2 FY27 on −24% traffic) [V Q2 PR]. Dabolim international FY26 0.19 mn (−23%) vs Mopa 0.39 mn (+15%) [V AAI].
- **Hyderabad:** sole commercial airport (Begumpet 0.01 mn) [V AAI].
- **Bengaluru:** sole commercial airport (HAL 0.02 mn) — BIAL's concession has a 150-km exclusivity to 2033 [K].

### 5.3 Who owns what: unlisted heavyweights, MNCs, financial investors

- **Groupe ADP (France; 50.6% French state)** — GMR co-promoter since 2020 (bought 49% of erstwhile GAL for ~₹10,780 Cr in two tranches, 2020 [K]); now **28.9% of the listed GAL** after selling 3.4% in Apr-2026; selling a further 3.9% by Apr-2027 → ~25% [V CRISIL; E]. ADP's 2025 revenue **€6.70 bn**, net income €382 mn; **379 mn pax** in airports in France and abroad, Paris CDG+ORY **107 mn** [V GMR PR boilerplate]. ADP H1-2026 attributable net income **tripled to €312 mn** helped by the gain on the GMR partial sale; ADP says the full GMR transaction cuts its net debt **>€1.3 bn** and leverage 3.7× → 3.1× [V-snip ADP H1 release].
- **Fraport (Germany)** — sold its **10% DIAL stake to GAL** (agreement concluded per GAL announcement 7-Mar-2025) → GAL 74% of DIAL [V Q2 deck].
- **Malaysia Airports (MAHB)** — sold its **11% of GHIAL to GAL** (funded by ₹5,000 Cr GAL bonds in FY24) → GAL 74% of GHIAL [V CRISIL].
- **NIIF** — CCDs in GGIAL (Mopa) and GVIAL (Vizag) convertible into up to **49% equity** [V Q2 deck footnote].
- **Angkasa Pura II (Indonesia)** — 51% partner in Medan (GAL 49%) [V deck; K partner name].
- **Fairfax Financial (Canada)** — BIAL control (~64%) via Fairfax India/Anchorage platform [K]; BIAL distributed >₹16 Cr to KSIIDC for FY26 (dividend resumption) [V-snip].
- **Zurich Airport (Flughafen Zürich AG)** — 100% of Noida concessionaire YIAPL; H1-2026 opex +6% "mainly due to Noida opening"; Noida EBITDA negative in 2026, break-even 2027 [V-snip quartr/Zurich HY report].
- **Adani** — AAHL raised/agreed ₹9,825 Cr pre-IPO at ~$18 bn [V-snip]; AAHL plans ₹1 lakh Cr capex [V-snip].
- **CIAL** — the "people's airport" model (Kerala govt + NRIs); FY26 PAT **₹502 Cr** on revenue **₹1,220 Cr**, 55% dividend [V-snip onmanorama/dailypioneer].
- **AAI** — statutory corporation; CRISIL AAA/Stable [V CRISIL]; FY25 profit **₹6,711 Cr, its highest ever** (MoCA speech, Apr-2025) [V-snip]; ICRA noted **one-time income ₹2,232 Cr from PPP airports** (under-recovery to COD) [V-snip ICRA Dec-2025].

### 5.4 Imports/China equivalent — none; the "foreign" force is foreign airlines and Gulf hubs
- Airports face no import competition, but **Gulf hubs (Dubai, Doha, Abu Dhabi) compete with Delhi for India–Europe/US transfer traffic**. Indian carriers' share of India international pax was ~43% in FY26 and ~36% in Apr–Jun 2026 [V-sib]. A Delhi hub reduces leakage; Delhi is now OAG #28 megahub [V].

---

## 6. Business-model archetypes and their economics

| Archetype | Examples | Revenue model | Till / concession fee | Economics (FY26, per pax) | Risk profile |
|---|---|---|---|---|---|
| **A. Brownfield mega-hub, OMDA 2006 vintage** | Delhi (DIAL), Mumbai (MIAL) | Aero (RAB-based, 30% shared till) + non-aero + CPD | **High revenue share (DEL 45.99%, BOM 38.7%)** | DEL: aero **₹383**, non-aero+CPD **₹579**, revenue share **₹411**, EBITDA **₹366** per pax [E from V] | Regulatory/tribunal; lumpy tariff steps; real-estate optionality |
| **B. Greenfield 2000s, low revenue share** | Hyderabad (GHIAL), Bengaluru (BIAL) | Aero (hybrid till) + non-aero + land bank | **4% revenue share** (HYD) | HYD: aero **₹546**, non-aero **₹254**, revenue share **₹34**, EBITDA **₹530** per pax [E] | Higher aero dependence; tariff cuts (CP4 UDF cut); land monetisation |
| **C. New-generation greenfield, high fee** | Mopa (GGIAL), Navi Mumbai, Noida, Bhogapuram | Aero (dual till default) + non-aero; ramp-up | Revenue share (Mopa 36.99%) or **per-pax fee** (Vizag ₹303/₹606 at FY35 base after moratorium; Noida ~₹401 [K]) | Mopa: aero **₹517**, non-aero+CPD **₹197**, rev share **₹188**, EBITDA **₹237** per pax; PAT −₹331 Cr [E/V] | J-curve; competes with an old AAI airport until closure; high initial losses |
| **D. PPP lease of AAI brownfields (2019 round)** | Adani: Ahmedabad, Lucknow, Jaipur, Guwahati, TVM, Mangaluru | Aero (AERA/AAI) + non-aero; capex to expand | **Per-domestic-pax fee to AAI ₹115–177** [K] | Not disclosed separately [FLAG] | Bid aggressiveness; small airports under AERA threshold |
| **E. Government-owned network** | AAI (~125 airports) | Aero + non-aero + ANS (air navigation services) + PPP lease income | — (single till historically) | AAI FY25 profit ₹6,711 Cr [V-snip] | Cross-subsidy of loss-making regional airports (UDAN) |
| **F. "Platform" non-aero businesses** | GAL standalone (duty free, cargo), GMR Hospitality (F&B), Adani's Flamingo/duty free [K] | Gross sales of duty free / F&B / cargo handling | Pay concession fee to the airport SPV | GAL-standalone FY26 revenue ₹4,242 Cr, EBITDA ₹1,420 Cr (incl. dividends) [V]; Delhi DF EBITDA margin post revenue share ~19–20% [E from V] | Exclusive but contract-term-limited (Delhi DF 10 yrs +30; HYD 20 yrs) |
| **G. Foreign concession** | Medan (49%), Crete (21.6%) | Same as A–C in local currency | Medan: 19% of gross revenue + 2.5% of aero + **US$207 mn over 8 years**; Crete: state-granted, debt-free | Medan FY26 net income ₹444 Cr, EBITDA ₹157 Cr, PAT ₹2 Cr [V] | FX, local regulation, partner |
| **H. Technical services** | Cebu (TSP to Dec-2026), Bidar (cost-plus, contracted by GHIAL) | Fees | n.a. | small [V] | Contract renewal |

**Key comparison:** Delhi earns **less EBITDA per passenger (₹366) than Hyderabad (₹530)** despite much higher non-aero spend, because 42% of gross revenue goes to AAI [E from V]. Hyderabad's CP4 order trims its aero yield (AERA baseline YPP **₹426** vs ₹445 in CP3 [V-snip/dailypioneer]) — Hyderabad's per-pax advantage narrows from FY27.

---

## 7. Regulation and policy

### 7.1 Regulators and statutes
- **AERA Act 2008** (operational 2009): AERA determines aero tariffs (incl. UDF) for **major airports** (>3.5 mn pax/yr after the 2019 amendment [K]); monitors service quality; 5-year **control periods**; issues consultation papers → tariff orders [K].
- **AERA Act amendment 2019** also allowed tariffs fixed through a **bid** (pre-determined tariff, as in PPP-6) to be adopted by AERA [K].
- **TDSAT** (Telecom Disputes Settlement and Appellate Tribunal) is the appellate tribunal for AERA orders; appeals then go to the **Supreme Court** [K].
- **OMDA (Operation, Management and Development Agreement, 2006)** + **SSA (State Support Agreement)** govern Delhi and Mumbai: 30-year term + 30-year extension option; **revenue share to AAI: DIAL 45.99%, MIAL 38.7%** of gross revenue; **SSA Schedule 1 formula: target revenue = RAB × WACC + opex + depreciation + tax − S (S = 30% of gross revenue from revenue-share assets = non-aero)** [K; formula wording V Cyril Amarchand blog].
- **AERA tariff guidelines (2011, amended 2021):** hybrid till (30%) as default for major airports from 2021 after the government's direction to adopt hybrid; dual till for some greenfields [K — verify current position].
- **Greenfield Airports Policy 2008**: 150-km exclusion zone for new airports near existing ones (government can relax) [K].
- **Privatisation:** 2006 (Delhi, Mumbai via OMDA), 2004–08 (Hyderabad, Bengaluru greenfield PPPs), **2019 PPP-6 (Adani won all six: Ahmedabad, Lucknow, Mangaluru, Jaipur, Guwahati, Thiruvananthapuram) on per-pax fee**, 2021 National Monetisation Pipeline (**25 AAI airports for FY22–25** [K]); **2026 round: 11 airports in 5 clusters** — Varanasi, Amritsar, Bhubaneswar, Raipur, Tiruchirappalli, Kushinagar, Gaya, Hubballi, Aurangabad, Jabalpur, Tirupati — **PPPAC in-principle clearance 4-Aug-2026**, **50-year concessions**, government targets ~₹6,000 Cr in FY27; bidders named: Adani, GMR, Vinci and others; 60% AAI staff retention for 3 years [V-snip sahi/FE/Deccan Chronicle]. CRISIL: "AAI has earmarked 11 airports for privatisation over fiscals 2026 and 2027" [V CRISIL].

### 7.2 The tariff formula and its fights

**Aggregate Revenue Requirement (ARR) = (RAB × FRoR) + Depreciation + O&M + Taxes + Concession fee (where allowed) − 30% × Non-aero revenue (hybrid) ± True-ups**; **Yield per pax = ARR ÷ projected traffic**; tariffs (landing, parking, UDF) set so that yield is achieved over the CP [K].

| Issue | Operator view | AERA view | Status (Nov-2026) |
|---|---|---|---|
| **HRAB (hypothetical RAB) for Delhi/Mumbai CP1** | Back-solve from pre-existing tariffs under single till → higher opening RAB | Lower HRAB using shared till | **TDSAT 1-Jul-2025: operators win; AERA to recompute in 12 weeks; deficit recoverable in future tariffs** [V Cyril Amarchand]. Whether AERA appealed to the SC: not found [FLAG] |
| **Delhi CP4 order (28-Mar-2025)** | DIAL sought a far higher yield (primer: "~730% rise") | Granted large rise but trimmed; domestic UDF kept ₹129; intl UDF re-based | **TDSAT judgment ~Sep-2026: DIAL wins "on all counts", incl. non-implementation of earlier TDSAT order; AERA to implement within 3 months unless appealed** [V GMR PR 29-Oct-2026; V-snip investywise 20-Sep-2026]. Amount at stake: **not disclosed** [FLAG] |
| **CGF (cargo, ground handling, fuel farm) — aero or non-aero?** | Non-aero (not in RAB; 70% kept) | Aero at Hyderabad per order | "Got favourable judgement by TDSAT for treating CGF as Non-Aero Revenues" (GHIAL) [V Q2 deck footnote] |
| **Fuel throughput charge** | — | Aeronautical | **SC (Jul-2022): FTC collected till 2019 was an aeronautical service** [V-snip verdictum] |
| **AERA's powers / scope** | Narrower | Wider | **SC 18-Oct-2024 upheld AERA's powers (setback to GMR and Adani)** [V-snip Business Standard headline] |
| **Hyderabad CP4 (order 24-Aug-2026; 1-Apr-2026 to 31-Mar-2031; effective 1-Sep-2026)** | GHIAL sought ARR **₹27,851 Cr**; intl UDF ₹1,150 | **Baseline ARR ₹11,683.49 Cr; YPP ₹426.39**; dom dep UDF ₹750 → **₹515**; intl ₹1,500 → **₹1,030**; new arrival UDF ₹220/₹440; landing ₹435/₹630 per MT | Implemented 1-Sep-2026 [V GMR PR; V dailypioneer]. GHIAL Q2 FY27 aero revenue −8.3% YoY [V] |
| **Vizag Bhogapuram CP1** | — | **Ad-hoc tariff from COD**; consultation paper for CP1 incl. pre-control period **1-Jul-2026 to 31-Mar-2032** issued | Pending final order [V Q2 PR] |

**Hyderabad CP4 domestic departing UDF path (₹):** 515 (Sep-2026 to FY27) → **555 (FY28)** → **620 (FY29)** → **670 (Apr–Oct 2029)** → **415 (from Nov-2029)** — "stays below ₹750 throughout" [V dailypioneer]. Arrival UDF: ₹220 dom / ₹440 intl.

**Delhi CP4 (1-Apr-2024 to 31-Mar-2029; effective 16-Apr-2025):** domestic UDF **₹129** (unchanged; domestic ~80% of Delhi traffic); international **economy ₹650 departing / ₹275 arriving; business ₹810 departing**; UDF split across embarking and disembarking; "variable tariff plan" principles accepted; reported aero yield increase **~148%**; CP3 YPP **~₹145** [V-snip Week/ANI/BS]. GMR's realised Delhi aero/pax: FY25 **₹145** → FY26 **₹383** → H1 FY27 **₹406** [E from V].

### 7.3 Other policy levers
- **UDAN (regional connectivity scheme)**: viability gap funding funded by a levy on major-route flights [K]; drives AAI's small airports (Hindon, Darbhanga, Jharsuguda etc. growing 40–50% [V AAI]).
- **Aviation Turbine Fuel (ATF) taxation** (state VAT; GST exclusion) — affects fares and therefore traffic [V-sib].
- **Bilaterals / Gulf seat caps** — MoCA has kept Gulf carriers' seat entitlements capped to protect Indian hubs [K].
- **Digi Yatra** (biometric boarding) — rolled out at GMR airports incl. Nagpur [V].
- **GST**: UDF and aero charges attract 18% GST [K].
- **Land and city-side**: CPD revenue at DIAL counts in gross revenue for the 45.99% share [K; consistent with DIAL CPD rentals inside gross income V].

---

## 8. History and cycles (narrative; full timeline in §G)

1. **1994–2003: AAI era.** All major airports AAI-run; under-investment, congestion [K].
2. **2003–08: privatisation wave 1.** Greenfield PPPs at Hyderabad (GMR, opened Mar-2008) and Bengaluru (Siemens/Unique Zurich/L&T consortium, opened May-2008); **OMDA concessions for Delhi (GMR-led consortium with Fraport, Malaysia Airports, AAI 26%) and Mumbai (GVK-led with ACSA, Bidvest; AAI 26%) signed 2006** [K; V deck for 2006/2008 award years].
3. **2008–14: build-out and tariff wars.** Delhi T3 (2010, Commonwealth Games), Mumbai T2 (2014); Delhi Development Fee and UDF controversies; AERA created 2009; CP1 (2009–14) tariff fights begin [K].
4. **2014–19: GVK and GMR stretched.** GMR's power/EPC/roads debt crisis; asset sales; GMR Infrastructure persistently loss-making (PAT −₹2,972 Cr FY15, −₹3,356 Cr FY19) [V screener].
5. **2019: Adani enters.** Wins all six PPP-6 airports on per-pax bids (Feb-2019) [K]; **2020–21 acquires GVK's 50.5% + ACSA/Bidvest's 23.5% of MIAL → 74%** and the Navi Mumbai project [K].
6. **2020: ADP buys 49% of GAL** (~₹10,780 Cr) [K]; COVID: FY21 GMR revenue −58% to ₹3,566 Cr, PAT −₹3,428 Cr [V screener].
7. **2021–23: restructuring and greenfields.** Non-airport demerger to GPUIL; **Mopa opens (Jan-2023)** [K]; Hyderabad/Delhi expansions; Delhi Phase 3A (4th runway, T1 expansion; T1 reopened 2024–25) [K]; Medan (49%) won 2022 [V].
8. **2023–24: buy-outs of foreign partners.** GAL buys MAHB's 11% of GHIAL (FY24, ₹5,000 Cr bond-funded) [V CRISIL]; Fraport's 10% of DIAL (concluded per 7-Mar-2025 announcement) [V]; Nagpur concession signed 8-Oct-2024 [V]; scheme effective 25-Jul-2024 [V].
9. **2025: tariff step-up and insourcing.** Delhi CP4 from 16-Apr-2025 [V-snip]; TDSAT CP1 ruling 1-Jul-2025 [V]; GAL takes Delhi duty free 28-Jul-2025 and Hyderabad 10-Sep-2025 [V CRISIL]; Delhi Cargo Terminal 1 concession to 2036 [V]; GAL ₹5,900 Cr NCDs Aug-2025 [V]; **IndiGo meltdown 3–5 Dec-2025** [V-sib]; **Navi Mumbai opens 25-Dec-2025** [V-sib].
10. **2026: the flat year.** West Asia war 28-Feb-2026 → intl pax −18.5% in March [V AAI]; ADP sells 3.4% of GAL (Apr) [V]; **Noida opens 15-Jun-2026** [V-snip]; GMR takes Nagpur 25-Jun-2026 [V]; Vizag inaugurated 1-Aug, COD 17-Aug-2026 [V]; Hyderabad CP4 UDF cut from 1-Sep-2026 [V]; ratings upgrades; TDSAT CP4 win for DIAL (Sep) [V]; PPPAC clears 11-airport round (4-Aug-2026) [V-snip]; Delhi T3 Pier C goes international [V]; Q2 FY27: GMR EBITDA +2% on +0.6% traffic [V].

**Cycle lesson:** airport *traffic* cycles are short (COVID, 2026 war) but airport *profit* cycles are set by **regulatory resets every five years** and by **concession-structure changes** (insourcing). FY26's profit inflection came from two regulatory/contractual events, not from a demand boom.

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where GMR stands

| KPI | Definition | GMR latest | Comparator |
|---|---|---|---|
| **Passengers (pax)** | Terminal pax (arr + dep), AAI basis | FY26 **121.6 mn** incl. Medan (+0.9%); Q2 FY27 **28.0 mn (+0.6%)**; H1 FY27 **58.4 mn (+0.8%)** [V] | Adani H1 FY27 45.5 mn [V-snip] |
| **ATMs** | Passenger aircraft movements | FY26 756.1k (+2%); Q2 FY27 178.7k (+0.3%) [V] | Delhi Q2 FY27 112.4k (+7%); Hyderabad 42.8k (−16%) [V] |
| **Aero YPP (yield per pax)** | Aero revenue ÷ pax (DEL+HYD+GOX+NAG+VTZ) | FY26 **₹433**; H1 FY27 **₹470**; Q2 FY27 **₹497** (+12% QoQ) [V] | AERA HYD CP4 baseline ₹426 [V-snip] |
| **Non-aero IPP** | Non-aero income (net of revenue share to airports) ÷ pax | FY26 **₹600 (+62%)**; H1 FY27 **₹728 (+9%)**; Q2 FY27 **₹772 (+6% YoY, +12% QoQ)** [V] | Adani non-aero/pax ₹961 H1 FY27 (different basis) [V-snip] |
| **Duty-free SPP** | Duty-free sales ÷ departing pax | Delhi **₹1,095** (H1 FY27, +5%); Hyderabad **₹929** (+20%) [V] | Paris Extime ~€31/pax all retail [V-snip] |
| **Non-aero share of revenue** | (non-aero + CPD) ÷ (aero + non-aero + CPD) | DIAL FY26 **60%**; GHIAL **32%**; GGIAL **28%** [E from V] | ADP retail+RE ~⅓ [K] |
| **EBITDA margin** | EBITDA ÷ net income (company basis) | Consolidated FY26 **52%**; Q2 FY27 **49%**; DIAL 65%, GHIAL 65%, GGIAL 42% (FY26) [V] | Aena 54.5% (on revenue) [V-snip]; Zurich ~56% [V-snip] |
| **EBITDA per pax** | SPV EBITDA ÷ pax | DIAL **₹366** FY26 / ₹380 H1 FY27; GHIAL **₹530** / ₹583; GGIAL **₹237** / ₹321 [E from V] | |
| **Revenue share % gross** | Concession fee ÷ gross income | DIAL **42.2%**; GHIAL 4.0%; GGIAL 25.0% (FY26) [E from V] | MIAL 38.7% headline [K] |
| **Capacity utilisation** | Traffic ÷ capacity | DEL ~74%, HYD ~90% (FY26), GOX ~70% [E from V] | |
| **Net debt / EBITDA** | Consolidated | **~5.5× FY26; ~5.3× TTM** [E from V]; GAL-standalone 5.8× (CRISIL) [V] | Fraport 6.0×, ADP 3.9×, Aena 1.7× [V-snip] |
| **EBITDA / interest** | | **1.6×** FY26 and H1 FY27 [E from V] | |
| **Concession life remaining** | Assuming renewal | DEL 40 yrs, HYD 42, GOX 52, Medan 21, Bidar 7, Nagpur 30, Vizag 60, Crete 38 [V Q2 deck] | |

### 9.2 Operating leverage arithmetic [E]
- Delhi Q2 FY27: traffic +3.0% → net income +10.0%, EBITDA +12.4%, PAT ₹121 Cr vs ₹74 Cr [V Q2 deck]. Non-aero +20.3% and aero +4.7% [V].
- Hyderabad Q2 FY27: traffic −11.2% → aero −8.3%, non-aero +4.6%, EBITDA −6.6%, PAT ₹91 Cr vs ₹100 Cr [V] — the regulated aero line moves with traffic until the next true-up; AERA's mechanism should true up traffic shortfalls in the next CP (to the extent volume risk sits with users) [K — FLAG: true-up of traffic risk depends on the order].
- Group Q2 FY27: total income +12% on pax +0.6% (price/mix + platform businesses) but EBITDA only +2% → margin 53% → 49% as opex rose (Vizag start-up, new businesses) [V].

### 9.3 Returns
- Screener ROCE (consolidated) **11.6%** (latest), FY26 12%, FY25 7%, FY24 6%, FY15–FY23 ≤7% [V screener]. ROE not meaningful (book value **−₹2.33/share**, reserves −₹3,548 Cr at Sep-2026) [V screener].
- Regulatory return reference: AERA FRoR historically ~11–13% post-tax WACC with ~14–16% cost of equity [K/V-sib] — DIAL and GHIAL's EBITDA/RAB is consistent with this order of magnitude [E — RAB not sourced; FLAG].

---

## 10. Global lens

### 10.1 Listed global airport operators vs GMR (₹ at ₹104.1/€, ₹112.8/CHF; prices 13-Nov-2026)

| Company | Pax (latest) | Revenue (latest) | EBITDA (latest, margin) | Net debt | M-cap (13-Nov-26) | EV/EBITDA | ND/EBITDA | Notes |
|---|---|---|---|---|---|---|---|---|
| **GMR Airports** | FY26 121.6 mn (incl. Medan); India 3 airports 114.6 mn | FY26 ₹14,807 Cr rev ops (gross ₹15,201 Cr) | FY26 **₹6,150 Cr** (52% of net income; 40% of gross) | **₹34,000 Cr** (+₹2,910 Cr FCCB) | **₹1,05,840 Cr** | **~22.7× FY26 / ~21.6× TTM** | 5.5× | [V screener; V deck; E] |
| **Aena (Spain)** | H1-26 190.0 mn group (+3.9%); Spain 156.2 mn | H1-26 €3,299.6 mn (+10.1%) = ₹34,359 Cr | H1-26 €1,798.9 mn (**54.5%**) = ₹18,732 Cr; LTM ~€3.89 bn [E] | €6,724 mn = ₹70,017 Cr | €43.2 bn = **₹4.50 lakh Cr** (€28.78 × 1,500 mn sh [K]) | **~12.8×** | 1.73× | [V-snip aena.es PR 29-Jul-26; V price; E] |
| **Groupe ADP (France)** | 2025: 379 mn group; Paris 107 mn | 2025 €6,704 mn = ₹69,809 Cr; H1-26 €3,215 mn (+1.6%) | 2026 guide recurring €2,300–2,350 mn (≈₹24,200 Cr); H1-26 €1,015 mn | €9,052 mn = ₹94,258 Cr (Jun-26) | €11.55 bn = **₹1.20 lakh Cr** (€116.7 × 98.96 mn sh [K]) | **~8.9×** | 3.9× | [V GMR PR; V-snip ADP H1; E] |
| **Fraport (Germany)** | H1-26 77.7 mn network (+1.0%); FRA ~63.2 mn 2026 guide | H1-26 €2,069.1 mn (+4.0%) = ₹21,546 Cr | H1-26 €582.3 mn (28%); LTM ~€1.45 bn [E] | €8,691.8 mn = ₹90,508 Cr | €6.34 bn = **₹66,045 Cr** (€68.65 × 92.39 mn sh [K]) | **~10.4×** | 6.0× | [V-snip; E] |
| **Flughafen Zürich** | H1-26 ZRH 15.8 mn (+6%); 2026 >33 mn | H1-26 CHF 673.6 mn = ₹7,596 Cr | H1-26 ~CHF 374 mn (~56%) = ₹4,217 Cr | not sourced [FLAG] | CHF 6.71 bn = **₹75,673 Cr** (CHF 218.6 × 30.70 mn sh [K]) | ~9× m-cap/EBITDA (EV not computed) | n.a. | [V-snip HY report; E]; owns Noida |
| **Adani Airports (AAHL)** — unlisted | H1 FY27 45.5 mn | Q2 FY27 ₹3,786 Cr (+20%) | Q2 FY27 ₹1,641 Cr (+55%); PBT −₹290 Cr | not disclosed | Pre-IPO ~$18 bn = **~₹1.69 lakh Cr** equity | n.a. | n.a. | [V-snip] |

**Read for the writer:**
- GMR's m-cap (₹1.06 lakh Cr) is **below ADP's (₹1.20 lakh Cr) and well below Aena's (₹4.50 lakh Cr)** but GMR's **EV/EBITDA (~22×) is roughly double** the European range (9–13×). The premium prices India's traffic runway (pre-2026: 8–10% CAGR) and the platform/real-estate optionality; European airports grow 1–4% [V-snip guides].
- GMR's EBITDA (~₹6,150 Cr) ≈ **Fraport's (~₹15,000 Cr LTM) × 0.4 and Aena's (~₹40,500 Cr LTM) × 0.15** [E]. Per passenger, GMR's consolidated EBITDA ≈ **₹506/pax** (₹6,150 Cr ÷ 121.6 mn incl. Medan pax that is not consolidated → ~₹537/pax on 114.6 mn India pax) vs **Aena ~₹1,065/pax** (₹40,472 Cr LTM ÷ ~380 mn annualised group pax [E]) — Aena earns about twice GMR's EBITDA per passenger [E].
- Leverage: GMR 5.5× is close to Fraport (6.0×) and above ADP (3.9×) and Aena (1.7×).
- **Adani's private mark (~$18 bn equity, ~₹1.69 lakh Cr) exceeds GMR's listed equity (₹1.06 lakh Cr)** on fewer passengers (95 mn vs 115 mn) but a far larger capex/greenfield pipeline (Navi Mumbai) [E].

### 10.2 Global benchmarks [K unless stated]
- Airport non-aero share of revenue: global average ~40% (ACI) [K]; Aena commercial ~30% + real estate [K]; ADP retail & services + real estate ~⅓ [K]; DIAL **60%** (incl. CPD) [E from V].
- Regulatory models: UK RAB-based price cap (Heathrow, single till) [K]; France "double caisse" (dual till) at ADP since 2011 [K]; Spain DORA (Aena, dual till since 2017) [K]; India hybrid 30% [K].

---

## 11. Technology and disruption risks
1. **Digital passenger processing** — Digi Yatra biometric boarding at DEL/HYD/Nagpur [V]; e-gates reduce staff cost but also dwell time (retail risk).
2. **Retail disruption** — online duty-free pre-order, liquor/tobacco regulation; GST/customs rules on duty-free allowance [K].
3. **Aircraft technology** — narrowbody long-range (A321XLR, first in India Jan-2026 [V-sib]) enables point-to-point international from tier-2 cities, eroding hub transfer at Delhi/Mumbai [K/E].
4. **High-speed rail / expressways** — Mumbai–Ahmedabad HSR (under construction, first section ~2027–28 [K]) competes on the 500-km corridor.
5. **Climate/ESG** — DIAL and GHIAL at **ACI Airport Carbon Accreditation Level 5** (highest) [V CRISIL]; GHIAL 89% renewable energy mix (2024) [V CRISIL]; Mopa targets Level 3+ by 2027 [V]. SAF mandates (1% blending for international flights by 2027 [K]) affect airlines more than airports.
6. **Cyber/IT outages** — e.g. Jul-2024 CrowdStrike outage hit Indian airports' check-in [K].
7. **Drone/airspace** — Pakistan airspace closure to Indian carriers since Apr-2025 lengthens westbound flights [V-sib]; GPS spoofing near borders [K].
8. **MRO and engines** — GMR's MRO (GAT) signed with **StandardAero** to become an authorised on-wing engine service centre for APAC; MoU with Logic Air (Canada) [V Q2 PR] — capitalising on the P&W/LEAP shop-visit crunch.

---

## 12. What to watch

| Item | When | Why it matters |
|---|---|---|
| **AERA's response to TDSAT's DIAL CP4 judgment** (implement within 3 months ≈ Dec-2026, or appeal to SC) | Dec-2026 | Size of Delhi tariff true-up; DIAL cash flows FY27–29 [V] |
| **AERA recomputation of Delhi/Mumbai CP1 HRAB** (TDSAT 1-Jul-2025) | pending | Recoverable deficits added to future tariffs [V] |
| **AAI monthly traffic** (Oct-2026 data ~late Nov) | monthly | Festive recovery? GMR guides traffic +3–4% for FY27 (cut from 5–7%) [V-snip] — H1 was +0.8%, so H2 needs ~+6% [E] |
| **GMR Q3 FY27 results** | late Jan–mid Feb 2027 [E] | First full quarter of Hyderabad CP4 UDF cut; Vizag first full quarter; Delhi seasonality |
| **ADP tranche 2 (3.9% for €285 mn) and FCCB purchase ($330 mn)** | by Apr-2027 | Promoter funding at holdco (not GAL) — CRISIL monitorable; pledge 28.86% (Jun-26) vs 54% (Jul-24) [V CRISIL] |
| **GAL ₹1,500 Cr NCD bullet** | **13-Feb-2027** | Refinancing (CRISIL: "in the process of refinancing ₹1,500 Cr") [V CRISIL] |
| **2026 privatisation round (11 airports)** — RFQ/bids | FY27 | GMR vs Adani vs Vinci; aggressiveness of per-pax bids [V-snip] |
| **Adani Airports IPO / demerger** | Mar-2027 – FY28 | First listed comparable for GMR; valuation anchor ($18 bn pre-IPO) [V-snip] |
| **Noida international launch; Navi Mumbai ramp** | end-2026 onward | Competitive pressure on Delhi (NCR) and Mumbai pricing [V-snip] |
| **Crete opening** | 2027–28 [K] | 21.6% equity; debt-free [V] |
| **Vizag CP1 final tariff order** | FY27 | Pre-control period from 1-Jul-2026 [V] |
| **Delhi real-estate deliveries** (Aerocity One handover FY27; Taj T3 hotel partial Q4 FY27) | FY27 | CPD rental growth [V] |
| **GPUIL repayment of ₹2,430 Cr ICDs** | FY27–FY29 | Holdco deleveraging [V CRISIL] |
| **Dividend initiation** | when GAL holdco ND/EBITDA reaches 3–4× | Management condition per CRISIL [V] |
| **ICRA/CRISIL airport outlook updates** | half-yearly | ICRA FY27 airport revenue +6–8% [V-snip] |

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **The regulator-and-tribunal cycle, not the traffic cycle, sets airport profits.**
   - Delhi's aero revenue went **₹1,153 Cr → ₹3,011 Cr** (FY25 → FY26) on a CP4 order while traffic fell 0.7% [V]; Hyderabad's CP4 does the opposite from 1-Sep-2026 (domestic departing UDF −31%) [V].
   - TDSAT has ruled for operators twice in 15 months (CP1 HRAB, 1-Jul-2025; DIAL CP4, Sep-2026) but the Supreme Court (Oct-2024) upheld AERA's powers [V; V-snip]. Every valuation of GMR embeds a view on how much of the TDSAT wins AERA implements.
2. **Concession structure decides who keeps the rupee.**
   - The same ₹100 of gross revenue yields ₹38 of EBITDA at Delhi (45.99% revenue share) and ₹63 at Hyderabad (4%) [E from V]. New concessions use per-pax fees (Vizag ₹303/₹606 at FY35 base; PPP-6 ₹115–177 [K]; Noida ~₹401 [K]) — operators now bid away future rent up front.
   - Insourcing (GAL running duty free, F&B, cargo, car parks) is a way to capture the concessionaire's margin *outside* the revenue-share-and-AAI-minority leakage at DIAL [V; E].
3. **Traffic has hit an air pocket — and GMR's network is unusually exposed to which airports win.**
   - AAI H1 FY27 −2.9%; international −7.1% (West Asia) [V]. Delhi +5.0% (hub gains) offsets Hyderabad −11.7% and Mopa −14.4% [V]. GMR guidance cut to **+3–4%** for FY27 from 5–7% [V-snip].
4. **Leverage and refinancing: the cheapest lever is the credit rating.**
   - Net debt ₹34,000 Cr flat for a year; ND/EBITDA ~5.5× [V; E]. But GHIAL is now **international investment grade** (S&P/Fitch BBB−), DIAL notes BB+, GAL NCDs AA− [V] — refinancing ~10.75% paper at 8.7–9.6% lifts PAT more than traffic does: a 100-bp cut on ~₹40,000 Cr of gross debt ≈ ₹400 Cr pre-tax, i.e. ~85% of FY26 PAT [E].
5. **Capacity overshoot in 2026–27.**
   - New capacity (NMIA 20 mppa, Noida 12, Vizag 6, Delhi T3 Pier C international) arrives into falling traffic [V; K capacities]. Utilisation of new airports in their first year is ~25–30% (NMIA) and ~3–4% (Noida) annualised [E from V]. Airports are long-duration assets; the 2026 dip delays returns but does not change 30–60 year concession values much — unless it changes regulators' traffic forecasts (which drive the yield per pax).

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The ₹1,153 Cr → ₹3,011 Cr year": how a tariff order made GMR profitable
- Data spine: DIAL aero revenue FY25 ₹1,153 Cr → FY26 ₹3,011 Cr; aero YPP ~₹145 → ₹383 → ₹406 (H1 FY27) [E from V]; DIAL EBITDA ₹1,753 → ₹2,882 Cr; DIAL PAT −₹976 → +₹477 Cr [V]; GMR consolidated PAT −₹817 → +₹472 Cr [V].
- Mechanism: RAB × FRoR — Phase 3A capex (T1 expansion, 4th runway) entered the RAB; CP4 order 28-Mar-2025, effective 16-Apr-2025 [V-snip]; domestic UDF kept at ₹129 (AERA politics: ~80% of Delhi traffic is domestic) while international and landing charges rose [V-snip].
- Next act: TDSAT (Sep-2026) "all counts" win → potential further true-up; AERA's appeal decision due ~Dec-2026 [V].
- Charts: DIAL aero/non-aero/CPD FY25 vs FY26 vs H1 FY27; aero YPP path; revenue-share outflow to AAI.

### B2. "Platform, not landlord": the insourcing of duty free, F&B and cargo
- Data spine: GAL-standalone revenue ₹1,263 Cr (FY25) → ₹4,242 Cr (FY26); EBITDA ₹685 → ₹1,420 Cr; PAT −₹191 → +₹142 Cr [V Q4 deck]. CRISIL: non-aero >85% of GAL-standalone revenue in FY26 (46% FY25), >90% from FY27; expected revenue ~₹5,000 Cr and EBITDA (incl. dividends) ~₹1,300 Cr [V].
- Delhi Duty Free FY26 (from 28-Jul-2025, provisional proportionate) revenue ₹1,602 Cr, EBITDA ₹323 Cr, PBT ₹258 Cr; H1 FY27 ₹1,144 Cr / ₹219 Cr / ₹174 Cr [V decks]. Hyderabad DF FY26 ₹348 Cr / ₹50 Cr; H1 FY27 ₹237 Cr / ₹36 Cr [V].
- Delhi Cargo (GAL, CT1 concession to 2036 + 30 yrs) FY26 ₹758 Cr revenue, EBITDA ₹234 Cr; H1 FY27 ₹471 Cr / ₹136 Cr [V]. FedEx express terminal licence (Q2 FY27) [V].
- F&B: GMR Hospitality (70%) won Delhi T3 F&B (to May-2036, +10 yrs), replacing a 40% JV from Oct-2026 [V].
- Why it matters: profits move from DIAL (where AAI takes 45.99% of revenue and owns 26% of equity) to GAL (100%) — but each contract has a term (Delhi DF 10 yrs + 30-yr extension option; Hyderabad 20 yrs) [V CRISIL]. Regulatory risk: AERA could question the arm's-length nature of the concession fees [E — FLAG as a risk, no source].
- Charts: GAL-standalone revenue/EBITDA FY25→FY26→H1 FY27; non-aero IPP ₹600 → ₹728 → ₹772; Delhi DF SPP ₹1,045 → ₹1,095.

### B3. "Two airports, two directions": Delhi vs Hyderabad in 2026
- Delhi H1 FY27 +5.0% (international +2.0%, domestic +6.2%), Hyderabad −11.7% (domestic −12.8%, international −6.7%) [V AAI].
- Delhi ATMs +7% (Q2), Hyderabad −16% [V]; Delhi Q2 EBITDA +12.4%, Hyderabad −6.6% [V].
- Hyderabad then took a CP4 tariff cut from 1-Sep-2026 (domestic departing UDF ₹750 → ₹515; arrival UDF added) — aero revenue −8.3% in Q2 [V].
- Explanation: Delhi's hub status (Air India Easy Connect, OAG #28 megahub, T3 Pier C) vs Hyderabad's "route rationalisation by airlines" and Gulf exposure [V].
- Charts: monthly pax DEL vs HYD vs BOM vs BLR (Apr–Sep 2026 YoY); EBITDA/pax by airport.

### B4. "Who will own India's next 11 airports?" — the privatisation pipeline and the Adani–GMR duopoly
- 2019 PPP-6: Adani won all six on per-pax fees (₹115–177/dom pax) [K]; 2021 NMP listed 25 AAI airports [K]; 2026: **11 airports in 5 bundles, 50-year concessions, PPPAC in-principle 4-Aug-2026, ~₹6,000 Cr target** [V-snip].
- Shares: GMR 27.3% / Adani 22.7% / BIAL 10.6% / AAI+others 35% (FY26) [E from V]. The 11 airports handled ~20 mn pax in FY26 (Varanasi 4.34, Amritsar 2.94, Bhubaneswar 5.13, Raipur ~2.6 [K], Trichy 2.22, Tirupati 1.20, Aurangabad 0.63, Hubballi 0.38, Jabalpur 0.51, Gaya 0.36, Kushinagar ~0) [V AAI except Raipur] → **~20 mn pax, ~5% of India traffic** [E].
- GMR's capacity to bid: CRISIL builds in ₹400–450 Cr/yr of equity support for new projects [V].
- Charts: operator share pie FY26; airports by operator; privatisation timeline.

### B5 (optional). "ADP's half-exit": what the €924 mn deal says about GMR's value
- ADP sells 7.3% + FCCBs for ~€924 mn; tranche 1 at €256 mn for 3.4% → ~€7.5 bn for 100% (~₹78,400 Cr at ₹104.1/€) vs listed m-cap ₹1,05,840 Cr — the strategic seller accepted a ~25–30% discount to market [E from V]. ADP books a gain and cuts its leverage 3.7× → 3.1× [V-snip]. ADP stays co-promoter with board parity [V CRISIL].

## C. The REVENUE / PROFIT EQUATION

**Airport SPV:**
- **Aero revenue = Pax × Aero YPP**, where **Aero YPP ≈ [RAB × FRoR + Depreciation + O&M + Tax − 30% × Non-aero revenue ± true-ups] ÷ forecast pax** (hybrid till) [K].
- **Non-aero revenue = Pax × (retail/DF SPP × departing share × concession %) + F&B + advertising + parking + cargo + space rentals**.
- **CPD revenue = land leased (acres/sq ft) × rental + upfront premia**.
- **Net income = (Aero + Non-aero + CPD + other income) × (1 − revenue-share %)** (for revenue-share concessions) or − per-pax fee × pax.
- **EBITDA = Net income − O&M opex**; **PAT = EBITDA − D&A − interest − tax**.

**Group (GAL consolidated):** Σ SPVs + platform businesses (duty free, cargo, F&B, MRO, hotel) − intercompany concession fees + share of JV profits.

### C.1 Worked example 1 — Delhi DIAL, FY26 [V inputs; E arithmetic]
| Step | ₹ Cr | Per pax (78.7 mn) |
|---|---|---|
| Aero revenue | 3,011 | ₹383 |
| Non-aero revenue | 3,607 | ₹458 |
| CPD rentals | 949 | ₹121 |
| Other income | 85 | ₹11 |
| **Gross income** | **7,653** | **₹972** |
| − Revenue share to AAI (45.99% headline; 42.2% effective) | −3,232 | −₹411 |
| **Net income** | **4,421** | **₹562** |
| − Opex | −1,539 | −₹196 |
| **EBITDA** | **2,882** (65% of net) | **₹366** |
| − Depreciation | −1,011 | −₹128 |
| − Interest | −1,534 | −₹195 |
| + Exceptional | +140 | +₹18 |
| **PAT** | **477** | **₹61** |
| GAL's 74% share | ~353 | |

### C.2 Worked example 2 — Hyderabad GHIAL, FY26 and the CP4 hit [V inputs; E]
| Step | FY26 ₹ Cr | Per pax (30.48 mn) |
|---|---|---|
| Aero revenue | 1,665 | ₹546 |
| Non-aero | 775 | ₹254 |
| Other income | 139 | ₹46 |
| Gross income | 2,579 | ₹846 |
| − Revenue share (4%) | −102 | −₹34 |
| Net income | 2,476 | ₹812 |
| − Opex | −862 | −₹283 |
| **EBITDA** | **1,614** | **₹530** |
| − D&A − interest − tax | −1,187 | −₹389 |
| **PAT** | **427** | **₹140** |
- CP4 sensitivity [E]: if FY27 aero YPP converges to AERA's baseline **₹426** (vs FY26 realised ₹546 incl. CGF) on ~28 mn pax, aero revenue ≈ ₹1,195–1,530 Cr vs ₹1,665 Cr — a ₹150–450 Cr hit to EBITDA before cost/true-up offsets. FLAG: the ₹546 includes CGF revenues treated as aero; the like-for-like comparison needs the order's yield definition.

### C.3 Worked example 3 — one departing domestic passenger at Delhi vs Hyderabad (post-Sep-2026) [E]
- Passenger pays UDF: **Delhi ₹129** (dep; domestic arrival share per variable plan not sourced) vs **Hyderabad ₹515 dep + ₹220 on arrival** [V-snip; V].
- Airport aero yield per pax (all charges ÷ all pax): Delhi ~₹406 (H1 FY27) vs Hyderabad ~₹576 (H1 FY27) [E from V].
- Of Delhi's ₹1,058 gross per pax in H1 FY27 (aero ₹406 + non-aero+CPD ₹652), **₹481 goes to AAI** as revenue share [E from V].

### C.4 Worked example 4 — GAL consolidated, FY26 bridge [V; E]
| Entity | Revenue from ops (₹ Cr) | EBITDA (₹ Cr) | PAT (₹ Cr) |
|---|---|---|---|
| DIAL (standalone) | 7,568 | 2,882 | 477 |
| GHIAL (standalone) | 2,440 | 1,614 | 427 |
| GGIAL Mopa | 384 | 127 | −331 |
| GAL standalone (DF, cargo, holdco incl. dividends) | 4,242 | 1,420 | 142 |
| Sum of four | 14,634 | 6,044 | 715 |
| Others (MRO, Hyd cargo/hotel/car park, Delhi car park, Vizag, Nagpur, Greece holdco etc.) − intercompany eliminations − dividends + JV share | +173 | +107 | −243 |
| **GAL consolidated (reported)** | **14,807** | **6,150** | **472** |
Note: revenue shares — sum of the four ₹4,642 Cr vs consolidated ₹3,444 Cr; the ₹1,198 Cr gap is intercompany (GAL's DF concession fees paid to DIAL/GHIAL) [E from V].

### C.5 Worked example 5 — a ₹1 lakh crore question: what EV/EBITDA implies [E]
- EV ₹1.40 lakh Cr ÷ FY26 EBITDA ₹6,150 Cr = 22.7×. To de-rate to Aena's ~12.8× at a constant EV, EBITDA must reach **~₹10,900 Cr** — i.e. +77%, or ~12% CAGR for 5 years [E]. Management's FY27 non-aero growth guide is 15–17% [V-snip].

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| India airport passengers FY26 | **420 mn (+1.9%)**; H1 FY27 196 mn (−2.9%) | [V AAI] |
| GMR share of India passengers | **27.3% (FY26); 29% in Jul–Sep 2026** | [E from V AAI; V GMR deck] |
| GMR FY26 EBITDA | **₹6,150 Cr (+47%)** on gross income ₹15,201 Cr | [V Q4 deck] |
| Revenue share paid to grantors (GMR, FY26) | **₹3,444 Cr** (Delhi alone ₹3,232 Cr = 42% of its gross) | [V; E] |
| GMR net debt | **₹34,000 Cr (~5.5× EBITDA)** | [V Q2 deck; E] |
| GMR market cap / EV/EBITDA | **₹1,05,840 Cr / ~22×** (Europe 9–13×) | [V screener; E] |

## E. Chart-ready datasets

**E1. AAI all-India airport passengers, FY (mn)** — FY20 ~341 [K]; FY21 ~115 [K]; FY22 ~189 [K]; FY23 ~327 [K]; FY24 ~376 [K]; FY25 412.09 [V]; FY26 420.09 [V]; FY27E 424–432 (ICRA) [V-snip].

**E2. AAI monthly pax Jan–Sep 2026, total (mn) and YoY %** — Jan 38.63 (+4.0); Feb 35.08 (+0.5); Mar 34.51 (−4.4); Apr 33.83 (−5.4); May 36.98 (+4.5); Jun 33.39 (−1.8); Jul 30.63 (−4.7); Aug 31.01 (−5.6); Sep 30.10 (−5.9) [V AAI].

**E3. AAI monthly international pax 2026 (mn; YoY %)** — Jan 7.76 (+7.1); Feb 6.59 (+3.0); Mar 5.34 (−18.5); Apr 5.56 (−16.1); May 6.15 (−9.1); Jun 6.15 (−4.6); Jul 6.33 (−4.6); Aug 6.40 (−4.0); Sep 6.10 (−4.2) [V AAI].

**E4. Operator share of India airport pax, FY26 (%)** — GMR 27.3; Adani 22.7; BIAL 10.6; CIAL 2.7; Nagpur 0.7; Kannur 0.3; AAI & others 35.0 [E from V AAI].

**E5. Top-12 airports FY26 pax (mn) and H1 FY27 YoY %** — Delhi 78.70 (+5.0); Mumbai 55.29 (−8.2); Bengaluru 44.47 (−1.8); Hyderabad 30.48 (−11.7); Chennai 23.02 (−10.9); Kolkata 21.10 (−7.3); Ahmedabad 13.82 (−5.4); Kochi 11.30 (−7.3); Pune 11.01 (+1.5); Guwahati 6.62 (−4.2); Goa-Dabolim 6.13 (−4.6); Lucknow 6.07 (+3.6) [V AAI].

**E6. GMR network pax (mn)** — FY23 ~90 [primer, approx]; FY24 ~107 [primer]; FY25 ~120.5 [E: 121.6 ÷ 1.009]; FY26 121.6 [V]; H1 FY26 57.9 [E]; H1 FY27 58.4 [V]. Per airport FY25 → FY26: Delhi 79.3 → 78.7; Hyderabad 29.5 → 30.5; Mopa 4.66 → 5.37; Medan → 7.1 [V].

**E7. GMR consolidated P&L, FY15–FY26 (₹ Cr; screener basis)** — Sales: 11,088 / 8,261 / 9,557 / 8,556 / 7,411 / 8,395 / 3,566 / 4,601 / 6,674 / 8,755 / 10,414 / 14,807; OP: 2,555 / 457 / 3,163 / 1,558 / 1,453 / 2,178 / 905 / 2,285 / 1,727 / 2,972 / 3,775 / 5,757; Interest: 3,572 / 2,196 / 2,128 / 2,316 / 2,684 / 3,545 / 1,803 / 2,019 / 2,338 / 2,929 / 3,705 / 3,859; PAT: −2,972 / −2,749 / −347 / −1,115 / −3,356 / −2,202 / −3,428 / −1,131 / −840 / −828 / −817 / 472 [V screener]. NB FY15–FY21 include the old conglomerate (power, roads, EPC) — only FY22+ is airport-comparable [K].

**E8. GMR quarterly (₹ Cr; screener)** — Sales Sep-24 → Sep-26: 2,495 / 2,653 / 2,863 / 3,205 / 3,670 / 3,994 / 3,938 / 3,967 / 4,100; OP: 859 / 992 / 1,009 / 1,165 / 1,447 / 1,701 / 1,445 / 1,450 / 1,480; PAT: −429 / 202 / −253 / −137 / 35 / 174 / 400 / 148 / 65 [V screener].

**E9. GMR company EBITDA and margin (₹ Cr; % of net income)** — FY25 4,188 (51%); FY26 6,150 (52%); Q2 FY26 1,531 (53%); Q1 FY27 1,568 (50%); Q2 FY27 1,569 (49%) [V decks].

**E10. Revenue share paid (₹ Cr)** — GMR consolidated FY25 2,635 → FY26 3,444; H1 FY27 1,965; DIAL FY25 2,496 → FY26 3,232; GHIAL 93 → 102; GGIAL 38 → 101 [V decks].

**E11. Per-pax economics FY26 (₹/pax)** — Delhi: aero 383, non-aero+CPD 579, revenue share 411, EBITDA 366; Hyderabad: aero 546, non-aero 254, revenue share 34, EBITDA 530; Mopa: aero 517, non-aero+CPD 197, revenue share 188, EBITDA 237 [E from V].

**E12. GMR KPIs** — Aero YPP: FY26 ₹433 → H1 FY27 ₹470 → Q2 FY27 ₹497; Non-aero IPP: FY26 ₹600 → H1 FY27 ₹728 → Q2 FY27 ₹772; Delhi DF SPP H1 FY26 ₹1,045 → H1 FY27 ₹1,095; Hyderabad DF SPP ₹777 → ₹929 [V decks].

**E13. Capacity vs traffic, GMR airports (mppa / mn)** — Delhi 106 / 78.7; Hyderabad 34 / 30.5; Mopa 7.7 / 5.4; Nagpur 2.9 / 3.0; Vizag 6 / ~3.0; Medan 10 / 7.1; ultimate: Delhi 125, Hyderabad 80, Mopa 33, Nagpur 50, Vizag 40, Crete 15 [V Q2 deck].

**E14. Revenue-share / concession fee by airport** — Delhi 45.99%; Mumbai 38.7% [K]; Mopa 36.99%; Nagpur 14.49%; Hyderabad 4%; PPP-6 ₹115–177/dom pax [K]; Vizag ₹303 dom / ₹606 intl per pax (FY35 base); Medan 19% of gross + 2.5% of aero + US$207 mn [V Q2 deck except K].

**E15. UDF comparison (₹ per departing pax)** — Delhi dom 129; Delhi intl econ 650 (+275 arr); Delhi intl business 810; Hyderabad dom 515 (+220 arr; was 750); Hyderabad intl 1,030 (+440 arr; was 1,500) [V-snip; V dailypioneer]. Mumbai/Navi Mumbai/Noida/Mopa UDF: not sourced [FLAG].

**E16. Global peers EV/EBITDA (13-Nov-2026)** — GMR ~22.7× (FY26) / 21.6× (TTM); Aena ~12.8×; Fraport ~10.4×; ADP ~8.9×; Zurich ~9× (m-cap/EBITDA) [E].

**E17. Leverage (net debt/EBITDA)** — GMR 5.5×; Fraport 6.0×; ADP 3.9×; Aena 1.73× [E/V-snip].

**E18. GMR shareholding (%), Sep-2024 → Sep-2026 (quarterly)** — Promoters 66.07 / 66.07 / 66.24 / 66.24 / 66.24 / 66.24 / 66.33 / 67.16 / 67.48; FII 14.81 / 14.86 / 15.09 / 15.74 / 17.08 / 18.96 / 20.17 / 21.74 / 22.95; DII 4.46 / 4.32 / 4.13 / 4.45 / 4.80 / 4.59 / 4.93 / 5.14 / 4.80; Public 14.65 / 14.74 / 14.55 / 13.56 / 11.88 / 10.19 / 8.56 / 5.95 / 4.77 [V screener]. Shareholders 8.54 lakh → 6.72 lakh.

**E19. GMR share price (monthly close, ₹), Nov-25 → Nov-26** — 104.4, 93.9, 100.6, 84.8, 96.4, 100.4, 112.1, 105.3, 93.6, 95.2, 86.9, 100.1, 99.0; 52-week high ₹115.6, low ₹84.1 [V Yahoo chart API, 13-Nov-2026].

**E20. Freight (AAI, kt)** — FY25 3,733; FY26 3,964 (+6.2%); H1 FY27 2,192 (+11.7%); Sep-26 372.3 (+12.1%) [V AAI].

**E21. Debt maturities and coupons (GAL holdco, ₹ Cr)** — 1,500 (Feb-2027, 5% cash coupon); 1,100 (Feb-2028); 400 (Apr-2028); 4,400 (Aug-2028, 5% cash coupon); new 1,500 at 9.56% (Sep-2026) [V CRISIL; V Q2 PR]. DIAL: ₹3,500 Cr 15-yr at 8.71% (Q2 FY27) [V].

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Definition | Good | Average | Weak | GMR / India now |
|---|---|---|---|---|---|
| Traffic growth (YoY) | AAI terminal pax | >8% | 3–8% | <3% | India FY26 +1.9%, H1 FY27 −2.9%; GMR H1 +0.8% |
| Capacity utilisation | pax ÷ mppa | 70–90% (headroom without congestion) | 50–70% or 90–100% | <50% (new) / >100% (congested) | DEL ~74%, HYD ~90%→80%, GOX ~70% |
| Aero YPP (₹) | aero rev ÷ pax | at/above AERA allowed yield | — | below allowed (under-recovery) | GMR ₹470 H1 FY27 |
| Non-aero revenue per pax (₹) | non-aero ÷ pax | >₹700 (Indian metro) | ₹300–700 | <₹300 | DIAL ₹652 (incl. CPD, H1 FY27); GHIAL ₹297 |
| Duty-free SPP (₹ per departing pax) | DF sales ÷ dep pax | >₹1,000 | ₹600–1,000 | <₹600 | DEL ₹1,095; HYD ₹929 |
| Non-aero share of revenue | (non-aero+CPD) ÷ total | >55% | 35–55% | <35% | DIAL 60%; GHIAL 32% |
| EBITDA margin (on net income) | | >60% | 45–60% | <45% | DIAL/GHIAL 65%; GGIAL 42%; group 49–52% |
| Revenue share % of gross | | <10% | 10–30% | >30% | DIAL 42%; GGIAL 25%; GHIAL 4% |
| Net debt / EBITDA | | <3× | 3–5× | >5× | 5.5× (Aena 1.7×; ADP 3.9×; Fraport 6.0×) |
| EBITDA / interest | | >3× | 2–3× | <2× | 1.6× |
| Credit rating (int'l scale) | | BBB or better | BBB−/BB+ | BB or lower | GHIAL BBB− (S&P/Fitch); DIAL notes BB+ |
| Concession life remaining | | >40 yrs | 20–40 | <20 | DEL 40, HYD 42, GOX 52 |
| Cost of new debt | | <8.5% | 8.5–10% | >10% | DIAL 8.71%; GAL 9.56% (from 10.75%) |
| EV/EBITDA (listed) | | — | 9–13× (Europe) | — | GMR ~22× |

## G. Timeline (year: event)

- **1995:** Airports Authority of India formed (merger of IAAI and NAA) [K].
- **2004:** Bengaluru (BIAL) and Hyderabad (GHIAL) concession agreements signed [K].
- **2006:** OMDA concessions for Delhi (GMR-led DIAL) and Mumbai (GVK-led MIAL); AAI 26% in each; Delhi revenue share 45.99%, Mumbai 38.7% [V deck for DEL award 2006; K].
- **2008 (Mar/May):** Hyderabad RGIA and Bengaluru KIA open [K; V deck "2008" HYD].
- **2009:** AERA operational; CP1 (FY10–FY14) begins [K].
- **2010:** Delhi T3 opens (Commonwealth Games) [K].
- **2016:** GMR wins Goa Mopa concession [V deck].
- **2017:** GMR-GEK consortium wins Crete Heraklion (Kastelli) [V deck "2017"].
- **2019 (Feb):** Adani wins all six PPP-6 airports; AERA Act amended (3.5 mn threshold) [K].
- **2020:** Groupe ADP buys 49% of GAL; Bhogapuram (Vizag) concession awarded to GMR; Bidar operated by GHIAL [V deck; K].
- **2020–21:** Adani acquires control (74%) of MIAL and Navi Mumbai project [K].
- **2021:** National Monetisation Pipeline lists 25 AAI airports [K].
- **2022:** GMR wins Medan Kualanamu (49%) [V deck]; Supreme Court on fuel throughput charge (Jul) [V-snip].
- **2023 (Jan):** Mopa (Manohar International) opens [K].
- **2024 (25-Jul):** GMR composite scheme effective; listed company becomes airport pure-play; renamed GMR Airports Ltd (Sep) [V; primer]. **(8-Oct):** Nagpur concession agreement signed [V]. **(18-Oct):** SC upholds AERA's powers [V-snip].
- **2025 (7-Mar):** GAL concludes purchase of Fraport's 10% of DIAL → 74% [V]. **(28-Mar):** AERA Delhi CP4 order; effective 16-Apr-2025 [V-snip]. **(1-Jul):** TDSAT CP1 HRAB judgment for DIAL/MIAL [V]. **(28-Jul):** GAL starts Delhi Duty Free [V]. **(Aug):** GAL ₹5,900 Cr NCDs [V]. **(10-Sep):** GAL starts Hyderabad Duty Free [V]. **(3–5 Dec):** IndiGo meltdown [V-sib]. **(25-Dec):** Navi Mumbai opens [V-sib].
- **2026 (28-Feb):** West Asia war; Gulf corridors shut [V-sib]. **(6-Mar):** Noida aerodrome licence [V-snip]. **(Mar):** ICRA aviation outlook Negative [V-sib]. **(Apr):** ADP sells 3.4% of GAL to GMR promoters (€256 mn) [V]. **(15-Jun):** Noida commercial operations [V-snip]. **(25-Jun):** GMR takes over Nagpur [V]. **(Jul):** Navi Mumbai international ops [V-snip]. **(1-Aug):** PM inaugurates Vizag Bhogapuram; COD 17-Aug [V]. **(4-Aug):** PPPAC clears 11-airport round [V-snip]. **(24-Aug):** AERA Hyderabad CP4 order; effective 1-Sep [V]. **(1-Sep):** CRISIL upgrades GAL NCDs to AA− [V]. **(Sep):** TDSAT rules for DIAL on CP4; DIAL ₹3,500 Cr NCDs at 8.71%; GHIAL to investment grade; GAL ₹1,500 Cr NCBs at 9.56%; OCRPS conversion (102 mn shares to ADP, 29-Sep); AAHL pre-IPO ₹9,825 Cr [V; V-snip]. **(29-Oct):** GMR Q2 FY27 results [V].
- **2027 (13-Feb):** GAL ₹1,500 Cr NCD bullet [V]. **(by Apr):** ADP tranche 2 (3.9%) [V]. Crete opening expected 2027–28 [K].

## H. Figures I could not source well (and conflicts)

1. **PAT attributable to GMR owners (FY26, Q2 FY27).** Not fetched from the results filing (BSE API blocked; screener raw PDFs require login; GMR transcript site is JS-driven). EPS-based estimate: FY26 **~+₹180 Cr**, Q2 FY27 **~−₹10 Cr** [E]; JM Financial's Q4 "₹302.35 Cr" likely attributable [V-snip]. **Conflicts with our primer** ("small loss at owners level").
2. **TDSAT DIAL CP4 judgment — exact date, issues, ₹ amount.** Only "favourable on all issues" and the 3-month implementation window are confirmed [V PR; V-snip]. Whether AERA has appealed to the SC: unknown.
3. **Delhi CP4 order numbers** — ARR sought vs allowed, RAB, FRoR, yield path. AERA's website (aera.gov.in) failed TLS verification / returned 503 this session; numbers are press snippets (₹129 dom UDF, ₹650/₹275/₹810 intl, "~148%" yield rise) [V-snip]. The primer's "DIAL asked ~730%, AERA granted ~140%" is unverified.
4. **Hyderabad CP4 RAB / FRoR / true-ups** — only ARR (₹27,851 Cr sought vs ₹11,683.49 Cr baseline) and yield (₹426.39) [V dailypioneer, secondary].
5. **Per-SPV debt.** GMR's deck shows the net debt break-up only as a chart (values not extractable); only deltas are in text (DIAL+GHIAL −₹380 Cr QoQ, Vizag +₹200 Cr, Delhi car park +₹130 Cr; "Others": Greece ₹380 Cr, GLPPL ₹420 Cr) [V]. GAL holdco bonds ₹7,400 Cr (Mar-26) [V CRISIL]. **DIAL and GHIAL gross debt not sourced** — use SPV interest (DIAL ₹1,534 Cr, GHIAL ₹660 Cr FY26) as a proxy [V].
6. **Adani Airports FY26 segment revenue/EBITDA and per-airport traffic split; NMIA capacity (20 mppa Phase 1) and UDF** — [E]/[K].
7. **BIAL FY26 revenue/EBITDA/PAT; exact Fairfax stake** — not found [K ~64%].
8. **AAI FY25/FY26 audited revenue and net profit** — only "₹6,711 Cr profit FY25" from a ministerial speech [V-snip].
9. **Mumbai MIAL revenue share 38.7%, PPP-6 per-pax fees (₹115–177), Noida ₹400.97/pax** — [K], not re-fetched.
10. **Zurich Airport net debt; Aena FY2025 revenue; ADP 2025 EBITDA** — not fetched; EV/EBITDA for Zurich not computed.
11. **Crete opening date** — "2027–28" [K]; GMR says only "78% progress" [V].
12. **Capacities for non-GMR airports** (BOM ~55, BLR ~50+, Noida 12, Kochi ~10–12 mppa) — [K].
13. **Earlier AAI annual traffic (FY20–FY24)** — [K].
14. **ICRA airport-specific outlook label (Stable vs Negative)** — airline outlook Negative; ICRA's Mar-2026 airport deck said Stable [V-snip]; Sep-2026 airport outlook label unclear.
15. **Fraport 2026 EBITDA guidance** — sources conflict (up to €1.5 bn vs €1.26–1.36 bn) [V-snip].
16. **Adani Q2 FY27 pax** — 21.3 mn (company, CEO quote) vs 22.6 mn (Outlook Business) [V-snip]; AAI airport-wise data give Adani's 8 airports **45.45 mn in H1 FY27**, matching the company's 45.5 mn [E from V] — use the company's 21.3 mn for Q2.
17. **Navi Mumbai international start** — 15-Jul vs 26-Jul-2026 [V-snip conflict]; AAI shows NMIA international pax 6,269 in Apr–Sep (i.e. tiny) [V].
18. **GMR H1 FY27 all-India growth** — GMR deck −3.1% vs AAI −2.9% [V both]; basis/revision difference.

---

# PART 2 — COMPANY FACT PACK (1 member) + REFERENCE PEERS

## 2.0 Peer table (FY26 / latest; ₹ Cr; m-cap and multiples 13-Nov-2026)

| Company | Ticker | Year | Revenue ₹ Cr | Growth | EBITDA margin | PAT ₹ Cr | ROCE | ROE | Net debt ₹ Cr | M-cap ₹ Cr | P/E | P/B | EV/EBITDA | Pax (mn) | Non-aero/pax | India pax share |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **GMR Airports** | GMRAIRPORT · 532754 | FY26 (Mar) | **14,807** (rev ops; gross 15,201) | **+42%** | **OPM 39% (screener); co. EBITDA 52% of net income / 40% of gross** | **472** (attrib. ~+180 [E]) | 12% (FY26); 11.6% latest | n.m. (negative book) | **34,000 (co.; ex-FCCB ₹2,910)** | **1,05,840** | 178 (TTM, screener) | n.m. (BV −₹2.33) | **~22.7× FY26 / ~21.6× TTM (co. EBITDA)**; 23.0× on screener TTM OP | 121.6 (FY26 incl. Medan) | IPP ₹600 FY26; ₹728 H1 FY27 | 27.3% |
| Adani Airports (AAHL) — ref., unlisted | inside ADANIENT | Q2 FY27 | 3,786 (qtr) | +20% | 43% (qtr EBITDA ₹1,641 ÷ income) | PBT −290 (qtr) | n.a. | n.a. | n.a. | ~1,69,000 (pre-IPO $18 bn) | n.a. | n.a. | n.a. | 95.3 (FY26, AAI); H1 FY27 45.5 | ₹961 (H1 FY27, own basis) | 22.7% |
| Aena — ref. | AENA.MC | H1-2026 (Dec YE) | 34,359 (H1) | +10.1% | 54.5% | 10,434 (H1, €1,002 mn) | n.a. | n.a. | 70,017 | 4,49,529 | n.a. | n.a. | ~12.8× | 190.0 (H1, group) | n.a. | — |
| Groupe ADP — ref. | ADP.PA | 2025 / H1-26 | 69,809 (2025) | H1 +1.6% | ~32% (H1 recurring EBITDA ÷ revenue) | 3,249 (H1 attrib., €312 mn incl. GMR gain) | n.a. | n.a. | 94,258 | 1,20,256 | n.a. | n.a. | ~8.9× (2026 guide) | 379 (2025, group) | Paris ~€31 ≈ ₹3,230 | — |
| Fraport — ref. | FRA.DE | H1-2026 | 21,546 (H1) | +4.0% | 28% | 537 (H1, €51.6 mn) | n.a. | n.a. | 90,508 | 66,045 | n.a. | n.a. | ~10.4× | 77.7 (H1) | n.a. | — |
| Flughafen Zürich — ref. | FHZN.SW | H1-2026 | 7,596 (H1) | +5.1% | ~56% | 1,846 (H1, CHF 163.7 mn) | n.a. | n.a. | n.a. | 75,673 | n.a. | n.a. | ~9× m-cap/EBITDA | 15.8 (ZRH, H1) | n.a. | (owns Noida) |
| CIAL (Kochi) — ref., unlisted | — | FY26 | 1,220 | +6.6% | n.a. | 502 | n.a. | n.a. | n.a. | n.a. | n.a. | n.a. | n.a. | 11.4 (co.) / 11.3 (AAI) | n.a. | 2.7% |

[V screener 13-Nov-26; V GMR decks; V-snip peers; E conversions at ₹104.1/€, ₹112.8/CHF.] Peer revenue/PAT figures for H1 are half-years — do not compare to GMR's full year without annualising.

---

## 2.1 GMR Airports Ltd (GMRAIRPORT · 532754) — India's largest private airport platform: Delhi, Hyderabad, Goa-Mopa, Nagpur, Vizag; Medan and Crete abroad; "GAL Platform" non-aero businesses

### 2.1.1 Standardised financials (screener consolidated, fetched 13-Nov-2026) [V screener]

**Annual (₹ Cr)**

| FY | Sales | Growth | Expenses | OP | OPM | Other inc. | Interest | Depn | PBT | Tax % | PAT | EPS ₹ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FY22 | 4,601 | +29% | 2,316 | 2,285 | 50% | −521 | 2,019 | 889 | −1,144 | −1% | −1,131 | −1.70 |
| FY23 | 6,674 | +45% | 4,947 | 1,727 | 26% | 923 | 2,338 | 1,038 | −727 | 16% | −840 | −0.30 |
| FY24 | 8,755 | +31% | 5,783 | 2,972 | 34% | 788 | 2,929 | 1,466 | −635 | 30% | −828 | −0.93 |
| FY25 | 10,414 | +19% | 6,639 | 3,775 | 36% | 1,205 | 3,705 | 1,910 | −635 | 29% | −817 | −0.37 |
| **FY26** | **14,807** | **+42%** | 9,050 | **5,757** | **39%** | 524 | **3,859** | 1,837 | **586** | 19% | **472** | **0.17** |
| TTM (to Sep-26) | 15,999 | +29% | 9,924 | 6,075 | 38% | 496 | 3,797 | 1,866 | 909 | — | 788 | 0.49 |

Compounded sales growth: 10 yrs 6%, 5 yrs 33%, 3 yrs 30%, TTM 29% [V screener]. FY22 OPM 50% is distorted (COVID-era concession fee relief/one-offs) [E].

**Quarterly (₹ Cr)**

| Qtr | Sales | YoY | OP | OPM | Other inc. | Interest | Depn | PBT | PAT | EPS ₹ |
|---|---|---|---|---|---|---|---|---|---|---|
| Sep-24 | 2,495 | +21% | 859 | 34% | 260 | 1,031 | 474 | −386 | −429 | −0.27 |
| Dec-24 | 2,653 | +19% | 992 | 37% | 562 | 829 | 479 | 246 | 202 | 0.25 |
| Mar-25 | 2,863 | +17% | 1,009 | 35% | 241 | 955 | 491 | −196 | −253 | −0.23 |
| Jun-25 | 3,205 | +33% | 1,165 | 36% | 208 | 949 | 489 | −65 | −137 | −0.20 |
| Sep-25 | 3,670 | +47% | 1,447 | 39% | 130 | 1,043 | 431 | 103 | 35 | −0.04 |
| Dec-25 | 3,994 | +51% | 1,701 | 43% | −73 | 917 | 465 | 246 | 174 | 0.12 |
| Mar-26 | 3,938 | +38% | 1,445 | 37% | 260 | 950 | 452 | 302 | 400 | 0.29 |
| Jun-26 | 3,967 | +24% | 1,450 | 37% | 167 | 938 | 456 | 223 | 148 | 0.09 |
| **Sep-26 (Q2 FY27)** | **4,100** | **+12%** | **1,480** | **36%** | 143 | **993** | **493** | **137** | **65** | **−0.01** |

**Balance sheet (₹ Cr)**

| | Mar-22 | Mar-23 | Mar-24 | Mar-25 | Mar-26 | **Sep-26** |
|---|---|---|---|---|---|---|
| Equity capital | 604 | 604 | 604 | 1,056 | 1,056 | **1,066** |
| Reserves | −1,421 | −1,396 | −2,768 | −3,827 | −3,803 | **−3,548** |
| Borrowings | 26,633 | 32,157 | 35,905 | 38,485 | 43,550 | **47,408** |
| Other liabilities | 11,272 | 12,557 | 14,748 | 12,845 | 13,755 | 15,646 |
| Total | 37,087 | 43,921 | 48,489 | 48,559 | 54,558 | **60,572** |
| Fixed assets | 10,325 | 15,157 | 28,737 | 28,218 | 28,929 | 33,408 |
| CWIP | 10,176 | 11,175 | 1,674 | 3,808 | 5,520 | 1,947 |
| Investments | 3,798 | 4,478 | 4,425 | 4,288 | 5,959 | 6,811 |
| Other assets | 12,788 | 13,111 | 13,653 | 12,246 | 14,150 | 18,406 |

CWIP fell ₹3,573 Cr and fixed assets rose ₹4,479 Cr between Mar-26 and Sep-26 — Vizag Bhogapuram capitalised at COD (17-Aug-2026) [V screener; E inference]; this is why Q2 interest and depreciation rose (company: "primarily attributable to operationalization of Vizag") [V PR].

**Cash flow (₹ Cr)** — CFO: FY22 3,256 / FY23 2,199 / FY24 3,880 / FY25 3,443 / **FY26 4,884**; CFI: −2,043 / −2,310 / −5,792 / −3,673 / −3,589; CFF: −3,894 / 1,731 / 467 / −1,010 / −1,238; FCF: 194 / −1,685 / −641 / −581 / **1,582**; CFO/OP: 146% / 125% / 135% / 94% / 88% [V screener].

**Ratios** — ROCE: FY22 5% / FY23 4% / FY24 6% / FY25 7% / **FY26 12%**; debtor days 15 (FY26); working-capital days −202 (deposits/payables-funded) [V screener].

**Valuation (13-Nov-2026)** — Price **₹99.0**; m-cap **₹1,05,840 Cr**; 52-wk **₹116 / ₹84.1**; P/E 178 (TTM consolidated PAT basis — meaningless); book value **−₹2.33**; dividend yield 0% [V screener]. **EV ≈ ₹1,39,840 Cr** (m-cap + company net debt ₹34,000 Cr); **≈ ₹1,42,750 Cr incl. FCCB ₹2,910 Cr** [E]. Minority interests (AAI 26% of DIAL/GHIAL) are not added — a "true" EV would be higher still [E; FLAG]. **EV/EBITDA: 22.7× FY26 company EBITDA (₹6,150 Cr); 21.6× TTM (₹6,474 Cr); 23.0× TTM screener OP; 24.3× FY26 screener OP** [E].

### 2.1.2 Company-basis financials (GMR investor decks) [V]

**Consolidated (₹ Cr)**

| | FY25 | FY26 | Q2 FY26 | Q1 FY27 | **Q2 FY27** | H1 FY26 | **H1 FY27** |
|---|---|---|---|---|---|---|---|
| Revenue from operations | 10,414 | 14,807 | 3,670 | 3,964 | **4,095** | 6,875 | **8,059** |
| Other income | 422 | 393 | 84 | 121 | 93 | 200 | 214 |
| **Gross income** | 10,836 | **15,201** | 3,754 | 4,085 | **4,188** | 7,075 | **8,273** |
| Revenue share | 2,635 | 3,444 | 851 | 978 | 987 | 1,662 | 1,965 |
| **Net income** | 8,201 | 11,757 | 2,903 | 3,107 | **3,202** | 5,413 | **6,308** |
| Total expenditure | 4,014 | 5,607 | 1,372 | 1,539 | 1,633 | 2,602 | 3,172 |
| **EBITDA** | 4,188 | **6,150** | 1,531 | 1,568 | **1,569** | 2,812 | **3,136** |
| EBITDA margin (on net income) | 51% | 52% | 53% | 50% | **49%** | 52% | **50%** |
| Interest & finance charges | 3,705 | 3,859 | 1,043 | 938 | 993 | 1,992 | 1,931 |
| Depreciation | 1,910 | 1,837 | 431 | 456 | 493 | 920 | 949 |
| PBT before exceptional | −1,428 | 455 | 58 | 174 | 83 | −100 | 257 |
| Exceptional | 607 | −109 | 35 | 0 | 0 | 81 | 0 |
| Tax | 182 | 114 | 68 | 75 | 72 | 140 | 147 |
| Share of JV/associate profit | 185 | 240 | 11 | 49 | 55 | 57 | 104 |
| **PAT (consolidated)** | **−817** | **472** | 35 | 148 | **65** | −102 | **213** |
| PAT ex-exceptional | −1,420 | ~580 | | | | | |
| Non-cash FX loss (EUR appreciation) | | ~260 | | | | | |

[V Q4 FY26 and Q2 FY27 decks; INR mn ÷ 10.] Note: FY25/FY26 PAT ex-exceptionals per company: **−₹1,420 Cr / +₹580 Cr** [V Q4 deck].

**Segment/SPV detail** — see Part 3 §3.2 (per-airport P&L) and §3.3 (non-aero platform).

### 2.1.3 Native KPIs [V decks unless stated]

| KPI | FY25 | FY26 | Q2 FY26 | Q1 FY27 | Q2 FY27 | H1 FY27 |
|---|---|---|---|---|---|---|
| Pax, GAL airports (mn; incl. Medan, excl. Cebu) | ~120.5 [E] | **121.6 (+0.9%)** | 27.8 [E] | 30.5 [E] | **28.0 (+0.6%)** | **58.4 (+0.8%)** |
| — Delhi | 79.3 | 78.7 | 17.6 | 20.4 | **18.1 (+3.0%)** | 38.5 (+5.0%) |
| — Hyderabad | 29.5 | 30.5 | 7.3 | 7.1 | **6.5 (−11.2%)** | 13.6 (−11.7%) |
| — Mopa | 4.66 | 5.37 | 1.13 | 1.16 | **0.86 (−24%)** | 2.02 (−14.4%) |
| — Medan (lagged qtr) | | 7.1 | 1.77 | 1.81 [E] | **1.58 (−11.1%)** | 3.38 (−4.3%) |
| ATMs ('000, passenger) | ~741 [E] | 756.1 (+2%) | | ~190.5 [E] | 178.7 (+0.3%) | 369.2 (+0.4%) |
| Aero YPP (₹) | | **433** | | ~444 [E] | **497** | 470 |
| Non-aero IPP (₹) | | **600 (+62%)** | ~728 [E from +6%] | ~689 [E] | **772** | 728 (+9%) |
| Delhi DF SPP (₹) | | | | | | **1,095** (vs 1,045) |
| Hyderabad DF SPP (₹) | | | | | | **929** (vs 777) |
| Share of India pax (GAL Indian airports) | 27.5% | **27%** (DEL 19%) | | | **29%** (DEL 20%) Jul–Sep | |
| Share of India international pax | | 34% | | | 35% | |
| Net debt (₹ Cr) | | 34,000 | 34,000 | 34,000 | **34,000** | |
| Cargo — Delhi (mt) | | ~1.15 (record) | | | | 0.63 (+12%) |
| Cargo — Hyderabad (kt) | | ~187 (record) | | | 52.0 (record) | ~102 |

### 2.1.4 Portfolio and concessions [V Q2 FY27 deck unless stated]

| Airport | GAL stake | Partners | Award / COD | Remaining life (with renewal) | Capacity now / max (mppa) | FY26 pax | Revenue share / fee | Land |
|---|---|---|---|---|---|---|---|---|
| **Delhi IGI (DIAL)** | **74%** (bought Fraport's 10%, concluded Mar-2025) | AAI 26% | 2006 | 40 yrs | 106 / 125 | 78.7 | **45.99%** of gross revenue | 230 acres |
| **Hyderabad RGIA (GHIAL)** | **74%** (bought MAHB's 11%, FY24) | AAI 13% + Telangana 13% [K split] | 2008 | 42 yrs | 34 / 80 | 30.5 | **4.0%** | 1,500 acres |
| **Goa Mopa (GGIAL)** | **100%** (NIIF CCDs → up to 49%) | NIIF | 2016 award; COD Jan-2023 [K] | 52 yrs | 7.7 / 33 | 5.4 | **36.99%** | 232 acres |
| **Medan Kualanamu** | **49%** | Angkasa Pura II 51% [K] | 2022 | 21 yrs | 10 / n.a. | 7.1 | 19% of gross revenue + 2.5% of aero + US$207 mn over 8 yrs | n.a. |
| Mactan-Cebu | none | Aboitiz-led owner [K] | 2014 (exited) | — | n.a. / 28 | 12.1 (not GMR's) | (original upfront US$320 mn + VAT) | 11 acres |
| Bidar | (contracted by GHIAL) | Karnataka | 2020 | 7 yrs | n.a. | n.m. | cost-plus | n.a. |
| **Nagpur (Babasaheb Ambedkar Intl)** | **100%** | (MIHAN India grantor) | CA 8-Oct-2024; ops 25-Jun-2026 | 30 yrs | 2.9 / 50 (30 at COD+30y, then 50) | 3.0 | **14.49%** | 247 acres |
| **Vizag Bhogapuram (GVIAL)** | **100%** (NIIF CCDs) | NIIF; Andhra Pradesh grantor | 2020 award; COD 17-Aug-2026 | 60 yrs | 6 / 40 | n/a (old VTZ 2.97, AAI) | **₹303/dom pax, ₹606/intl pax at FY35 base; moratorium to FY35; inflation-indexed from FY36** | 794 acres (Q2 deck; Q4 deck said 294 — FLAG) |
| **Crete Heraklion–Kastelli** | **21.6%** | GEK Terna majority [K]; Greek state | 2017 | 38 yrs | — / 15 | — | debt-free; state grant + AMDT | ~10 acres |

Total land "~3,010 acres with strong real-estate development potential" [V Q2 deck]. **Discrepancy:** Vizag land 794 acres (Q2 FY27 deck) vs 294 acres (Q4 FY26 deck) — likely additional land handed over; FLAG.

### 2.1.5 Debt, ratings, refinancing [V unless stated]

- **Consolidated net debt ₹34,000 Cr** at 31-Mar-2026 and 30-Sep-2026 (unchanged); Q4 FY26: −₹470 Cr QoQ (standalone −₹940 Cr; Bhogapuram +₹420 Cr); Q2 FY27: DIAL+GHIAL −₹380 Cr, Vizag +₹200 Cr, Delhi car park +₹130 Cr; "Others" = GMR Airports Greece (₹380 Cr) and GMR Logistics Park (₹420 Cr) [V decks]. **FCCB ₹2,910 Cr (Sep-26; ₹2,880 Cr Mar-26) held by ADP excluded** [V].
- **Gross borrowings (screener) ₹47,408 Cr (Sep-26)** → implied cash & equivalents/treasury ~₹13,400 Cr if screener includes FCCB and leases [E — FLAG basis].
- **Holdco (GAL standalone)**: NCDs ₹7,400 Cr (Mar-26) — ₹1,500 Cr bullet **13-Feb-2027** and ₹4,400 Cr bullet **13-Aug-2028** (both issued 13-Aug-2025, 5% cash coupon), ₹1,100 Cr Feb-2028, ₹400 Cr Apr-2028; **new ₹1,500 Cr NCBs at 9.56%** (Sep-2026) refinancing 10.75% debt; cash ~₹1,191 Cr (25-Aug-2026); FY26 interest paid ₹1,220 Cr incl. accrued; ICDs to GPUIL ₹2,430 Cr (repay FY27–29); **holdco ND/EBITDA (incl. dividends) 5.8× (Mar-26) vs 11.7× (Mar-25)**; CRISIL upgrade trigger ~4×, downgrade >6×; promoter pledge **28.86%** of GMR group's stake (Jun-26) vs 54% (Jul-24) [V CRISIL 1-Sep-2026].
- **DIAL**: ₹3,500 Cr 15-yr NCDs at **8.71%** (quarterly) refinanced **US$522.6 mn notes**; S&P senior secured notes **BB+** (from BB); CRISIL **AA/Stable** [V]. FY26 interest ₹1,534 Cr [V].
- **GHIAL**: S&P issuer **BBB−** (from BB, two notches) and Fitch IDR **BBB−** (from BB+) — **international investment grade**; CRISIL **AA+/Positive** [V]. FY26 interest ₹660 Cr [V].
- **Ratios [E]:** consolidated ND/EBITDA 5.5× (FY26), 5.3× (TTM), 5.4× (Q2 annualised); EBITDA/interest 1.6×.

### 2.1.6 Ownership [V screener 13-Nov-26; V CRISIL]

| | Sep-24 | Mar-25 | Sep-25 | Mar-26 | Jun-26 | **Sep-26** |
|---|---|---|---|---|---|---|
| Promoters (GMR group + Groupe ADP) | 66.07% | 66.24% | 66.24% | 66.33% | 67.16% | **67.48%** |
| — of which GMR group | | | | | 38.26% (CRISIL) | ~38.3% [E] |
| — of which Groupe ADP | | | | ~32.3% [E: 28.9 + 3.4 sold Apr-26] | 28.9% (CRISIL) | ~29.2% [E: + OCRPS shares] |
| FIIs | 14.81% | 15.09% | 17.08% | 20.17% | 21.74% | **22.95%** |
| DIIs | 4.46% | 4.13% | 4.80% | 4.93% | 5.14% | **4.80%** |
| Public | 14.65% | 14.55% | 11.88% | 8.56% | 5.95% | **4.77%** |
| No. of shareholders | 8.54 lakh | 8.57 lakh | 7.62 lakh | 6.94 lakh | 6.77 lakh | **6.72 lakh** |

- Pre-merger (Jun-2024): promoters 59.07%, FIIs 25.98% — the Jul-2024 scheme issued shares to ADP (now classified as promoter) and **FII % fell ~11 pts** [V screener; E].
- **Retail exit:** public holding has fallen from 14.7% to 4.8% in two years while FIIs rose from 14.8% to 23.0% [V screener].
- Promoter pledge: 28.86% of GMR group holding (Jun-2026) [V CRISIL].
- Management: Chairman G.M. Rao [K]; MD/CEO roles — G.B.S. Raju / Srinivas Bommidala / Kiran Kumar Grandhi family members [K — verify current titles]; **Sanjeev Gupta, Deputy CEO from 29-Oct-2026** [V].

### 2.1.7 Story bullets
1. **What defines it:** the gatekeeper to India's busiest airport (Delhi, 78.7 mn pax, ~19–20% of national traffic, 27% of international) plus Hyderabad; 27–29% of all Indian air passengers pass through a GMR airport [V].
2. **The edge:** (a) incumbency at the two most valuable non-Mumbai airports with 40+ years of concession left; (b) the platform model — GAL owns the duty free, cargo, F&B, MRO businesses at its airports (GAL-standalone revenue ₹1,263 → ₹4,242 Cr in a year) [V]; (c) investment-grade/AA credit at the operating SPVs, falling coupons [V]; (d) ADP as co-promoter (operating know-how; Extime retail model) [V].
3. **The inflection:** FY26 = first group PAT in a decade (₹472 Cr) from Delhi's CP4 tariff and duty-free insourcing; FY27 = test year — traffic flat (H1 +0.8%), EBITDA +12% (H1) but only +2% in Q2; Hyderabad tariff cut from Sep-2026; Vizag/Nagpur ramp costs [V].
4. **Main risks:** (a) regulatory — AERA may appeal the TDSAT CP4 ruling; AERA's Hyderabad cut shows the regulator's passenger-affordability tilt [V]; (b) leverage — ₹34,000 Cr net debt has not fallen in a year; ₹1,500 Cr holdco bullet Feb-2027 [V]; (c) traffic — FY27 guide cut to +3–4% [V-snip]; Hyderabad −11.7%, Mopa −14.4% in H1 [V]; (d) valuation — ~22× EV/EBITDA vs 9–13× global peers; ADP sold at an implied ~25–30% discount to market [E]; (e) minorities/attributable earnings thin — AAI owns 26% of DIAL and GHIAL; attributable PAT ~breakeven [E].

### 2.1.8 Sources
- GMR Q2 FY27 press release (BSE, 29-Oct-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/7f9b9072-bdcb-4e0b-bb3a-75a4374c09db.pdf [V]
- GMR Q2 FY27 investor presentation: https://www.bseindia.com/xml-data/corpfiling/AttachHis/7efbfbce-bb58-4e6e-a6e8-c69dd1058442.pdf [V]
- GMR Q4 FY26 investor presentation: https://www.bseindia.com/xml-data/corpfiling/AttachHis/cf244e3e-2715-4126-b471-7be55a5e9405.pdf [V]
- CRISIL rating rationale, GMR Airports Ltd, 1-Sep-2026: https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GMRAirportsLimited_September%2001_%202026_RR_404899.html [V]
- screener.in consolidated: https://www.screener.in/company/GMRAIRPORT/consolidated/ (curl, 13-Nov-2026) [V]

---

## 2.2 Reference peer fact sheets (not members; for the industry chapters)

### 2.2.1 Adani Airport Holdings Ltd (AAHL; 100% of Adani Enterprises' airports vertical)
- **Airports (8):** Mumbai CSMIA (MIAL 74%; AAI 26% [K]), **Navi Mumbai NMIA (opened 25-Dec-2025; international from Jul-2026)**, Ahmedabad, Lucknow, Jaipur, Guwahati, Thiruvananthapuram, Mangaluru (2019 PPP-6, per-pax fees [K]) [V-sib; V-snip].
- **Traffic (AAI):** FY26 95.31 mn (22.7% of India) [E from V]; H1 FY27 45.45 mn (−0.6%; company 45.5 mn vs 46.0 mn) [E/V-snip]; Q2 FY27 21.3 mn (company) [V-snip]. Mumbai H1 FY27 24.75 mn (−8.2%); NMIA 2.71 mn; Ahmedabad 6.24 mn (−5.4%); Lucknow 2.97 mn (+3.6%) [V AAI].
- **Financials (Q2 FY27):** total income **₹3,786 Cr (+20%)**, EBITDA **₹1,641 Cr (+55%)**, PBT **−₹290 Cr** (vs +₹99 Cr) on NMIA depreciation; aero +9%, non-aero +57%; H1 non-aero **₹4,370 Cr (+55%)**; non-aero per pax **₹961 (+56%)** [V-snip AEL coverage; Moodie Davitt 30-Oct-2026].
- **Parent:** Adani Enterprises Q2 FY27 consolidated income ₹38,023 Cr (+74%), EBITDA ₹6,316 Cr (+62%), attributable PAT ₹1,492 Cr (−55%; prior year had one-off gains) [V-snip — figures vary by source]. ADANIENT price ₹2,688 (13-Nov-26) [V Yahoo].
- **Corporate:** pre-IPO equity ₹9,825 Cr at ~US$18 bn (Sep-2026); IPO by Mar-2027 or FY28 (reports differ); ₹1 lakh Cr capex plan [V-snip].
- **Capacity:** NMIA Phase 1 20 mppa → 90 mppa ultimate; CSMIA ~55 mppa [K].

### 2.2.2 Airports Authority of India (AAI)
- Statutory body (1995); owns ~137, operates ~125 airports; also the air navigation service provider [K/V-sib]; grantor and 26% shareholder in DIAL, MIAL, GHIAL (13%), BIAL (13%) [K].
- FY25 profit **₹6,711 Cr** ("highest ever", MoCA, Apr-2025) [V-snip]; one-time ₹2,232 Cr from PPP airports [V-snip ICRA]; **CRISIL AAA/Stable** [V CRISIL]; ₹15,000 Cr ATC/navigation capex by 2028 [V-sib].
- AAI-run airports handled **~147 mn pax (35%) in FY26** [E from V AAI].
- 2026 round: 11 airports, 5 clusters, 50-yr PPP, PPPAC in-principle 4-Aug-2026 [V-snip].

### 2.2.3 Bengaluru International Airport Ltd (BIAL)
- FY26 **44.47 mn pax (+6.2%)**, international **+23.9%**, cargo **532 kt** [V-snip ACI-APAC/Daily Excelsior]; AAI shows 44.47 mn [V].
- Ownership: 74% private (Fairfax ~64% [K]; Siemens exited [K]); 26% GoI-AAI (13%) and Karnataka/KSIIDC (13%) [V-snip AERA capex review doc; K split]. Dividend to KSIIDC >₹16 Cr for FY26 [V-snip].
- Financials: not sourced [FLAG]; "first-ever profit" claim unverified [V-snip weak].

### 2.2.4 Cochin International Airport Ltd (CIAL)
- FY26 revenue **₹1,220 Cr (+6.6%)**, PAT **₹502 Cr** (FY25 ₹490–499 Cr); group PAT ₹527 Cr; dividend 55% [V-snip onmanorama/dailypioneer, Aug-2026]. FY25: revenue ₹1,142 Cr, PAT ₹490 Cr [V-snip PTI Sep-2025].
- Pax FY26 **11.44 mn** (international 5.40 mn, domestic 6.04 mn; +2.2%); ATMs 73,134 [V-snip]; AAI 11.30 mn [V].
- PAT margin ~41% on revenue [E] — a low-leverage, Kerala-diaspora airport; H1 FY27 −7.3% (international −12.1%) [V AAI].

### 2.2.5 Noida International Airport (YIAPL; 100% Flughafen Zürich)
- DGCA aerodrome licence 6-Mar-2026; commercial operations **15-Jun-2026** (IndiGo 6E-2278 Lucknow–Noida); cargo 17-Jun-2026; international expected by end-2026 [V-snip]. Project cost ~₹11,200 Cr (Phase 1) [V-snip Tribune headline]. Phase 1 capacity 12 mppa [K]; concession fee ~₹400.97/pax to UP [K].
- Traffic: Apr–Sep 2026 **0.21 mn** (Sep 55,890) [V AAI]. Zurich: Noida EBITDA negative in 2026, break-even 2027 [V-snip quartr].

### 2.2.6 Global listed peers (detail)
- **Aena (Spain):** H1-26 revenue €3,299.6 mn (+10.1%), EBITDA €1,798.9 mn (54.5%), net profit €1,002 mn, net debt €6,724 mn (1.73×), pax 190.0 mn group / 156.2 mn Spain; 2026 Spain traffic +3% [V-snip aena.es PR 29-Jul-2026]. Price €28.78 [V].
- **Groupe ADP (France):** 2025 revenue €6,704 mn, NI €382 mn [V GMR PR]; H1-26 revenue €3,215 mn (+1.6%), recurring EBITDA €1,015 mn (−1.0%), attributable NI €312 mn, net debt €9,052 mn (3.9×); 2026 guide recurring EBITDA €2,300–2,350 mn, ~3.8×; Paris traffic ~+0.5% for 2026 [V-snip]. Price €116.7 [V].
- **Fraport (Germany):** H1-26 revenue €2,069.1 mn (+4.0%), EBITDA €582.3 mn (+3.8%), group result €51.6 mn (−47.7%), NFD €8,691.8 mn (6.0× LTM), network pax 77.7 mn (+1.0%) [V-snip]. Price €68.65 [V].
- **Flughafen Zürich:** H1-26 revenue CHF 673.6 mn (+5.1%), EBITDA ~CHF 374 mn, profit CHF 163.7 mn (record H1), ZRH pax 15.8 mn (+6%) [V-snip HY report/quartr]. Price CHF 218.6 [V].

---

## 2.3 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
{
  "as_of": "2026-11-13",
  "fx": {"inr_per_usd": 94.09, "inr_per_eur": 104.1, "inr_per_chf": 112.8, "source": "open.er-api.com 13-Nov-2026"},
  "industry": {
    "aai_pax_fy25_mn": 412.09, "aai_pax_fy26_mn": 420.09, "aai_pax_fy26_growth_pct": 1.9,
    "aai_dom_pax_fy26_mn": 339.45, "aai_intl_pax_fy26_mn": 80.64,
    "aai_pax_h1fy27_mn": 196.24, "aai_pax_h1fy27_growth_pct": -2.9,
    "aai_dom_h1fy27_growth_pct": -1.9, "aai_intl_h1fy27_growth_pct": -7.1,
    "aai_freight_fy26_kt": 3964.35, "aai_freight_h1fy27_growth_pct": 11.7,
    "aai_atm_fy26_000": 2906.24,
    "share_fy26_pct": {"GMR": 27.3, "Adani": 22.7, "BIAL": 10.6, "CIAL": 2.7, "Nagpur": 0.7, "Kannur": 0.3, "AAI_and_others": 35.0},
    "icra_fy27_pax_mn": [424, 432], "icra_fy27_airport_revenue_growth_pct": [6, 8]
  },
  "companies": [
    {
      "name": "GMR Airports Ltd", "nse": "GMRAIRPORT", "bse": "532754", "fy": "FY26",
      "revenue_ops": 14807, "revenue_ops_prev": 10414, "revenue_growth_pct": 42.2,
      "gross_income_co": 15201, "revenue_share_co": 3444, "net_income_co": 11757,
      "op_screener": 5757, "opm_screener_pct": 39, "ebitda_co": 6150, "ebitda_margin_net_income_pct": 52,
      "interest": 3859, "depreciation": 1837, "pat_consolidated": 472, "pat_attributable_est": 180,
      "roce_pct": 12, "roe_pct": null, "book_value_per_share": -2.33,
      "borrowings_screener_sep26": 47408, "net_debt_co_sep26": 34000, "fccb_adp_sep26": 2910,
      "mcap_cr": 105840, "price": 99.0, "pe_ttm": 178, "pb": null,
      "ev_cr_est": 139840, "ev_ebitda_fy26": 22.7, "ev_ebitda_ttm": 21.6, "nd_ebitda_fy26": 5.5,
      "q2fy27": {"revenue_ops": 4095, "gross_income": 4188, "revenue_share": 987, "net_income": 3202, "ebitda": 1569, "ebitda_margin_pct": 49, "interest": 993, "depreciation": 493, "pat": 65, "eps": -0.01},
      "h1fy27": {"revenue_ops": 8059, "gross_income": 8273, "ebitda": 3136, "pat": 213},
      "ttm": {"sales_screener": 15999, "op_screener": 6075, "pat": 788, "ebitda_co_est": 6474},
      "pax_fy26_mn": 121.6, "pax_q2fy27_mn": 28.0, "pax_h1fy27_mn": 58.4,
      "pax_by_airport_fy26_mn": {"Delhi": 78.7, "Hyderabad": 30.5, "Mopa": 5.4, "Medan": 7.1, "Nagpur_pre_GMR": 3.0},
      "aero_ypp_fy26_inr": 433, "aero_ypp_q2fy27_inr": 497, "nonaero_ipp_fy26_inr": 600, "nonaero_ipp_q2fy27_inr": 772,
      "india_pax_share_fy26_pct": 27.3, "india_pax_share_julsep26_pct": 29,
      "shareholding_sep26_pct": {"promoters": 67.48, "fii": 22.95, "dii": 4.80, "public": 4.77},
      "gmr_group_pct_jun26": 38.26, "adp_pct_jun26": 28.9, "promoter_pledge_pct_of_gmr_stake": 28.86,
      "stakes_pct": {"DIAL": 74, "GHIAL": 74, "GGIAL": 100, "Medan": 49, "Nagpur": 100, "GVIAL": 100, "Crete": 21.6},
      "revenue_share_pct": {"Delhi": 45.99, "Hyderabad": 4.0, "Mopa": 36.99, "Nagpur": 14.49},
      "capacity_mppa": {"Delhi": 106, "Hyderabad": 34, "Mopa": 7.7, "Nagpur": 2.9, "Vizag": 6, "Medan": 10},
      "ratings": {"DIAL_crisil": "AA/Stable", "GHIAL_crisil": "AA+/Positive", "GAL_ncd_crisil": "AA-/Stable", "GHIAL_sp": "BBB-", "GHIAL_fitch": "BBB-", "DIAL_notes_sp": "BB+"}
    }
  ],
  "spv_fy26": {
    "DIAL": {"aero": 3011, "non_aero": 3607, "cpd": 949, "other_income": 85, "gross_income": 7653, "revenue_share": 3232, "net_income": 4421, "opex": 1539, "ebitda": 2882, "interest": 1534, "depreciation": 1011, "pat": 477, "pax_mn": 78.7},
    "GHIAL": {"aero": 1665, "non_aero": 775, "other_income": 139, "gross_income": 2579, "revenue_share": 102, "net_income": 2476, "opex": 862, "ebitda": 1614, "interest": 660, "depreciation": 485, "tax": 42, "pat": 427, "pax_mn": 30.48},
    "GGIAL": {"aero": 278, "non_aero": 99, "cpd": 7, "other_income": 22, "gross_income": 406, "revenue_share": 101, "net_income": 305, "opex": 177, "ebitda": 127, "interest": 290, "depreciation": 168, "pat": -331, "pax_mn": 5.38},
    "GAL_standalone": {"revenue_ops": 4242, "revenue_share": 1206, "ebitda": 1420, "interest": 1254, "pat": 142},
    "Medan_100pct": {"net_income": 444, "ebitda": 157, "pat": 2}
  },
  "peers_ref": [
    {"name": "Adani Airport Holdings", "q2fy27_income": 3786, "q2fy27_ebitda": 1641, "q2fy27_pbt": -290, "pax_fy26_mn_aai": 95.31, "pax_h1fy27_mn": 45.5, "nonaero_per_pax_inr": 961, "equity_value_preipo_cr": 169355},
    {"name": "Aena", "h1_2026_revenue_cr": 34359, "h1_2026_ebitda_cr": 18732, "net_debt_cr": 70017, "mcap_cr": 449529, "ev_ebitda": 12.8, "pax_h1_mn": 190.0},
    {"name": "Groupe ADP", "rev_2025_cr": 69809, "ebitda_2026_guide_cr": 24210, "net_debt_cr": 94258, "mcap_cr": 120256, "ev_ebitda": 8.9, "pax_2025_mn": 379},
    {"name": "Fraport", "h1_2026_revenue_cr": 21546, "h1_2026_ebitda_cr": 6063, "net_debt_cr": 90508, "mcap_cr": 66045, "ev_ebitda": 10.4, "pax_h1_mn": 77.7},
    {"name": "Flughafen Zurich", "h1_2026_revenue_cr": 7596, "h1_2026_ebitda_cr": 4217, "net_debt_cr": null, "mcap_cr": 75673, "pax_h1_mn": 15.8},
    {"name": "CIAL", "fy26_revenue": 1220, "fy26_pat": 502, "pax_fy26_mn": 11.44},
    {"name": "BIAL", "fy26_revenue": null, "pax_fy26_mn": 44.47}
  ]
}
```

## 2.4 Conflicts and gaps (company level)

1. **Attributable PAT** — primer "small loss" vs EPS-implied ~+₹180 Cr (FY26) [E]. Verify in the annual report.
2. **EBITDA basis** — company ₹6,150 Cr (incl. other income, margin on net income) vs screener OP ₹5,757 Cr (ex other income, margin on revenue). Use company for prose and EV/EBITDA, screener in the standard table.
3. **Net debt** — company ₹34,000 Cr ex-FCCB; screener gross borrowings ₹47,408 Cr; CRISIL holdco-only ND/EBITDA 5.8×. Use the company figure; mention FCCB ₹2,910 Cr separately.
4. **ADP stake** — 28.9% (CRISIL, after the Apr-2026 tranche) [V] vs primer "economic interest ~43–46%" (pre-merger look-through of 49% in erstwhile GAL) — primer is stale.
5. **Vizag land** — 794 acres (Q2 FY27 deck) vs 294 acres (Q4 FY26 deck) [V both].
6. **All-India H1 FY27 traffic** — −3.1% (GMR deck) vs −2.9% (AAI) [V both].
7. **FY27 traffic guidance** — +3–4% (cut from 5–7%) [V-snip multibagg] — not seen in the deck text; verify in the Q2 transcript.
8. **Q2 FY27 Medan quarter** — GMR's "Q2 FY27" Medan = Apr–Jun 2026 [V footnote]; do not mix with Indian Jul–Sep.
---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (single member; ₹ Cr; screener consolidated 13-Nov-26 unless noted)

| Company | FY26 rev | YoY % | OP (screener) | OPM % | Co. EBITDA | EBITDA % net inc. | PAT (cons.) | PAT attrib. | Q2 FY27 rev | Q2 YoY % | Q2 OPM % | Q2 co. EBITDA | Q2 PAT | M-cap | P/E | EV/EBITDA | Pax FY26 | Native KPI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GMR Airports | 14,807 | +42.2 | 5,757 | 38.9 | 6,150 | 52 | 472 | ~180 [E] | 4,100 (screener) / 4,095 (co.) | +11.7 | 36.1 | 1,569 (49%) | 65 (attrib. ~−10 [E]) | 1,05,840 | 178 (n.m.) | 22.7× FY26 / 21.6× TTM | 121.6 mn | Aero YPP ₹497, Non-aero IPP ₹772 (Q2 FY27) |

Single member → **no combined aggregates**. Instead §3.2 gives per-airport / per-SPV breakdowns on **one basis (company standalone SPV accounts, ₹ Cr)** that bridge to the consolidated totals, with ratios computed as ratios of sums.

## 3.2 Per-SPV breakdown bridging to the consolidated (company basis, ₹ Cr) [V decks; E arithmetic]

### 3.2.1 FY26 (Apr-25 to Mar-26)

| Line | DIAL (74%) | GHIAL (74%) | GGIAL Mopa (100%) | GAL standalone (DF, cargo, holdco) | **Sum of 4** | Others + eliminations (balancing) | **Consolidated (reported)** |
|---|---|---|---|---|---|---|---|
| Aero revenue | 3,011 | 1,665 | 278 | — | 4,954 | | n.d. |
| Non-aero revenue | 3,607 | 775 | 99 | (GAL non-aero ~4,242 incl. dividends/EPC) | | | n.d. |
| CPD / real-estate rentals | 949 | (in non-aero) | 7 | — | 956 | | n.d. |
| **Revenue from operations** | 7,568 | 2,440 | 384 | 4,242 | **14,634** | +173 | **14,807** |
| Other income | 85 | 139 | 22 | 54 | 299 | +94 | 393 |
| **Gross income** | 7,653 | 2,579 | 406 | 4,296 | **14,933** | +268 | **15,201** |
| Revenue share | 3,232 | 102 | 101 | 1,206 | **4,642** | **−1,198 (intercompany DF fees)** | **3,444** |
| **Net income** | 4,421 | 2,476 | 305 | 3,089 | **10,291** | +1,466 | **11,757** |
| Opex | 1,539 | 862 | 177 | 1,670 | 4,247 | +1,360 | 5,607 |
| **EBITDA** | **2,882** | **1,614** | **127** | **1,420** | **6,044** | **+107** | **6,150** |
| Interest | 1,534 | 660 | 290 | 1,254 | 3,738 | +121 | 3,859 |
| Depreciation | 1,011 | 485 | 168 | 56 | 1,721 | +116 | 1,837 |
| **PAT** | **477** | **427** | **−331** | **142** | **715** | −243 (minorities' share is *within* cons. PAT; JV share +240; other subs; eliminations of dividends) | **472** |
| Pax (mn) | 78.70 | 30.48 | 5.38 | — | **114.56** | Medan 7.1 (not consolidated line-by-line) | 121.6 (incl. Medan) |
| GAL economic share of SPV PAT [E] | 353 (74%) | 316 (74%) | −331 | 142 | **480** | | (attrib. ~180 [E]) |

**Ratios of sums (FY26) [E]:**
- Three Indian airports combined (DIAL+GHIAL+GGIAL): gross income **₹10,638 Cr**, revenue share **₹3,435 Cr = 32.3% of gross**, EBITDA **₹4,623 Cr = 43.5% of gross / 64.2% of net income (₹7,202 Cr)**, PAT **₹573 Cr**, pax **114.56 mn** → **gross income ₹929/pax; EBITDA ₹404/pax; revenue share ₹300/pax**.
- Aero revenue of the three = **₹4,954 Cr** = 47% of their revenue from operations (₹10,392 Cr); aero/pax ₹432 (GMR's reported YPP ₹433 ✓) [E/V].
- Delhi = **72% of the three airports' gross income, 62% of their EBITDA, 69% of pax** [E].
- The three airports' interest ₹2,484 Cr vs EBITDA ₹4,623 Cr → **EBITDA/interest 1.9×**; GAL holdco interest ₹1,254 Cr vs EBITDA ₹1,420 Cr → **1.1×** (matches CRISIL's 1.1×) [E/V].

### 3.2.2 H1 FY27 (Apr–Sep 2026)

| Line | DIAL | GHIAL | GGIAL | GAL standalone | **Sum of 4** | Others + elim. | **Consolidated** |
|---|---|---|---|---|---|---|---|
| Aero | 1,562 | 782 | 173 | — | 2,517 | | |
| Non-aero | 2,015 | 404 | 42 | 2,010 (non-aero income) | | | |
| CPD | 497 | — | 6 | — | 503 | | |
| Revenue from ops | 4,074 | 1,186 | 221 | 2,357 | **7,838** | +221 | **8,059** |
| Other income | 78 | 73 | 10 | 12 | 173 | +41 | 214 |
| Gross income | 4,152 | 1,259 | 230 | 2,370 | **8,011** | +262 | **8,273** |
| Revenue share | 1,853 | 47 | 58 | 767 | **2,725** | **−760** | **1,965** |
| Net income | 2,299 | 1,212 | 172 | 1,603 | **5,286** | +1,022 | **6,308** |
| Opex | 837 | 420 | 108 | 895 | 2,260 | +912 | 3,172 |
| **EBITDA** | **1,462** | **792** | **65** | **707** | **3,026** | **+110** | **3,136** |
| Interest | 787 | 307 | 145 | 586 | 1,825 | +106 | 1,931 |
| Depreciation | 483 | 250 | 84 | 42 | 859 | +90 | 949 |
| **PAT** | **191** | **175** | **−169** | **60** | **257** | −44 | **213** |
| Pax (mn) | 38.5 | 13.6 | 2.02 | — | 54.1 | +Nagpur/Vizag partial, Medan 3.38 | 58.4 |

**Ratios of sums (H1 FY27) [E]:** three airports' gross income ₹5,641 Cr; revenue share ₹1,958 Cr (34.7%); EBITDA ₹2,319 Cr (41.1% of gross; 63.0% of net income ₹3,683 Cr); pax 54.1 mn → **EBITDA ₹429/pax** (vs ₹404 FY26) and **revenue share ₹362/pax** (vs ₹300) — Delhi's rising share of the mix and its 45.99% fee push both up.

### 3.2.3 Q2 FY27 vs Q2 FY26 by airport (₹ Cr) [V Q2 deck]

| Airport | Pax Q2 FY27 (mn, YoY) | Gross income Q2 FY27 (YoY) | Net income | EBITDA (YoY) | EBITDA margin (net) | Interest | PAT Q2 FY27 (Q2 FY26) |
|---|---|---|---|---|---|---|---|
| Delhi DIAL | 18.1 (+3.0%) | 2,084 (+12.7%) | 1,153 (+10.0%) | 759 (+12.4%) | 66% | 394 | 121 (74) |
| Hyderabad GHIAL | 6.5 (−11.2%) | 632 (−6.2%) | 608 (−6.1%) | 402 (−6.6%) | 66% | 154 | 91 (100) |
| Mopa GGIAL | 0.86 (−24%) | 104 (+24.5%) | 78 (+24%) | 24 (+102%) | 31% | 73 | −95 (−101) |
| Medan (100%, Apr–Jun) | 1.58 (−11.1%) | 151 (+4.3%) | 120 | 46 (+32%) | 38% | n.d. | 8 (−4) |
| GAL standalone | — | 1,140 | 760 | 318 | 42% | 296 | 2 (−133) |
| **Consolidated** | **28.0 (+0.6%)** | **4,188 (+12%)** | **3,202 (+10.3%)** | **1,569 (+2.4%)** | **49%** | **993** | **65 (35)** |

Sum DIAL+GHIAL+GGIAL+GAL-SA EBITDA = ₹1,503 Cr vs consolidated ₹1,569 Cr (others +₹66 Cr: MRO ₹33 Cr, Hyd cargo ₹32 Cr, hotel ₹25 Cr, Delhi car park ₹17 Cr, less GAL dividend income/eliminations) [E from V].

### 3.2.4 Non-aero platform businesses (100% basis, ₹ Cr) [V decks]

| Business | Owner / accounting | FY26 revenue | FY26 EBITDA | FY26 PAT/PBT | H1 FY27 revenue | H1 FY27 EBITDA | H1 FY27 PAT/PBT |
|---|---|---|---|---|---|---|---|
| Delhi Duty Free | GAL standalone (from 28-Jul-25) | 1,602* | 323 | PBT 258 | 1,144 | 219 | PBT 174 |
| Delhi Cargo (CT1) | GAL standalone | 758 | 234 | PBT 234 | 471 | 136 | PBT 132 |
| Hyderabad Duty Free | GAL standalone (from 10-Sep-25) | 348* | 50 | PBT 28 | 237 | 36 | PBT 21 |
| Hyderabad Retail | GAL standalone | 147 | 42 | PBT 30 | 79 | 24 | PBT 18 |
| Hyderabad Car Park | GAL standalone | 161 | 62 | PBT 61 | 82 | 32 | PBT 30 |
| Goa DF / car park / cargo | GAL | 17 / 15 / 5 | 3 / 8 / −8 | 1 / 6 / −11 | — / 5 / 2 | — / 2 / −3 | — / 1 / −5 |
| Delhi Car Park | Subsidiary (DIAL 49.9% / GAL 50.1%) | 327 | 95 | PAT 48 | 157 | 35 | PAT 14 |
| Hyderabad Cargo | Subsidiary (GHIAL 100%) | 297 | 123 | PAT 73 | 168 | 71 | PAT 45 |
| MRO (GMR Aero Technic) | Subsidiary (GHIAL 100%) | 677 | 186 | PAT 96 | 361 | 81 | PAT 36 |
| Hyderabad Hotel | Subsidiary (GHIAL 100%) | 138 | 54 | PAT 18 | 84 | 37 | PAT 15 |
| F&B (Hyd, Goa, Del T3 from Oct-26) | Subsidiary GMR Hospitality (GAL 70%) | 142 | 11 | PAT 0 | 74 | 2 | PAT −3 |
| Delhi Advertising | JV (DIAL 49.9%) | 489 | 49 | PAT 31 | 256 | 25 | PAT 16 |
| Delhi T3 F&B | JV (DIAL 40%) | 230 | 55 | PAT 33 | 105 | 16 | PAT 10 |
| Hyderabad Advertising | JV (GHIAL 49%) | 164 | 44 | PAT 31 | 77 | 20 | PAT 12 |
*FY26 duty-free figures are "proportionate provisional" from the start dates [V Q4 deck].

**Platform EBITDA (consolidated subsidiaries + GAL-standalone businesses), H1 FY27 [E sum]:** DF Delhi 219 + Delhi cargo 136 + Hyd DF 36 + Hyd retail 24 + Hyd car park 32 + Delhi car park 35 + Hyd cargo 71 + MRO 81 + hotel 37 + F&B 2 ≈ **₹673 Cr** = ~21% of consolidated H1 EBITDA (₹3,136 Cr) [E]. GMR's own "Consolidated EBITDA incl. JVs (proforma attributable)" H1 FY27 **~₹1,610 Cr**; FY26 **~₹6,370 Cr** [V decks].

### 3.2.5 Airport non-aero mix (H1 FY27) [V Q2 deck]
- **Delhi non-aero ₹2,010 Cr (+16%)**: retail incl. duty free 25%, cargo 14%, others 18%, F&B 10%, ground handling 7%, advertising 7%, space rentals and other lines the balance; retail ₹500 Cr (+11%), cargo ₹280 Cr (+15%), F&B ₹210 Cr (+12%), advertising ₹150 Cr (+29%); DF SPP ₹1,095; advertising site occupancy 66% [V].
- **Hyderabad non-aero ₹400 Cr (+8%)**: retail incl. DF 29%, F&B 20%, space rentals 19%, others 15%, car park 11%, advertising (balance); retail ₹120 Cr (+9%), F&B ₹80 Cr (+4%), car park ₹50 Cr (+7%), advertising ₹50 Cr (−3%); DF SPP ₹929; site occupancy 34%. CGF is aero at Hyderabad per tariff order [V].

## 3.3 Reconciliation vs primer (`primers/gmr-airports.html`, refreshed 2-Jul-2026)

| Item | Primer | Fetched (13-Nov-26) | Use |
|---|---|---|---|
| Total income FY26 | ₹15,201 Cr (+40%) | ₹15,201 Cr gross income (+40%) [V] | Same |
| Revenue from operations FY26 | ₹14,807 Cr | ₹14,807 Cr [V screener/deck] | Same |
| EBITDA FY26 / margin | ₹6,150 Cr; "~52% margin (on total income)" (§09) | ₹6,150 Cr; **52% of net income (after revenue share); 40.5% of total income**; screener OP ₹5,757 Cr (39%) | Fix basis wording |
| PAT FY26 | ₹472 Cr; "small loss at owners-of-parent level" | ₹472 Cr consolidated; attributable **~+₹180 Cr [E from EPS ₹0.17]**; JM Fin Q4 NP ₹302 Cr [V-snip] | Verify; likely primer wrong |
| Passengers FY26 | 121.6 mn; Delhi 78.7, Hyderabad 30.5, Goa 5.4 | Same [V] | Same |
| Non-aero per pax | ~₹600 (+62%) | ₹600 FY26; **₹728 H1 FY27; ₹772 Q2 FY27** [V] | Update |
| Delhi DF spend per departing pax | ~₹1,063 | **₹1,095 H1 FY27 (vs ₹1,045 H1 FY26)** [V] | Update |
| Net debt / leverage | ~₹34,000 Cr; 5.5×; target <4× in 18–24 months | ₹34,000 Cr at Mar-26 and Sep-26 (flat a year); FCCB ₹2,910 Cr excluded [V]; 5.5× [E] | Same + note flat + FCCB |
| Gross borrowings | ~₹43,000 Cr | ₹43,550 Cr (Mar-26) → **₹47,408 Cr (Sep-26)** [V screener] | Update |
| Market cap | ~₹1.15 lakh Cr (Jun-26) | **₹1,05,840 Cr** at ₹99.0 [V] | Update |
| EV/EBITDA | ~22–33× | **~21.6× TTM / 22.7× FY26** [E] | Update |
| Book value/share | −₹2.35 | **−₹2.33** [V] | Minor |
| Promoter holding | ~66% (Mar-26) | 66.33% (Mar-26) → **67.48% (Sep-26)** [V] | Update |
| ADP stake | "economic interest of roughly 43–46% in GAL" | **28.9% of listed GAL** (after selling 3.4% in Apr-26); another 3.9% to go by Apr-27 [V CRISIL] | **Wrong — fix** |
| FII / DII | ~20% / ~5% | **22.95% / 4.80%** (Sep-26) [V] | Update |
| India pax share | ~27% | 27.3% FY26 [E/V]; **29% Jul–Sep 2026** [V] | Same + update |
| Delhi CP4 | "DIAL asked ~730%; AERA granted ~140% (live Apr-2025)" | Order 28-Mar-25, effective **16-Apr-25**; press: ~148% yield increase; aero/pax ₹145 → ₹383 [V-snip; E]; **TDSAT Sep-26: DIAL wins on all counts** [V] | Update; flag 730% as unverified |
| Hyderabad tariff | not covered | **CP4 from 1-Sep-26: dom dep UDF ₹750 → ₹515; intl ₹1,500 → ₹1,030; arrival UDF ₹220/₹440** [V] | Add |
| Till framework | "hybrid… largely ring-fence non-aero profits" | Hybrid = 30% of non-aero cross-subsidises aero [K]; TDSAT CP1 single-till ruling [V] | Clarify |
| Bhogapuram (Vizag) | "nearing commissioning"; 40-yr (+20) | **Inaugurated 1-Aug-26; COD 17-Aug-26**; 6 mppa; 60 yrs remaining incl. renewal [V] | Update |
| Nagpur | "just added", 30-yr | **Operations taken over 25-Jun-26**; 14.49% revenue share; 2.9 → 50 mppa [V] | Update |
| Crete | 35-yr greenfield under construction | 21.6% stake; **78% complete (Sep-26)**; debt-free [V] | Update |
| Cebu | TSP to Dec-2026 | Same [V] | Same |
| Refinancing example | Hyderabad ₹2,100 Cr 15-yr at ~7.6% | Not verified; **Q2 FY27: DIAL ₹3,500 Cr 15-yr at 8.71%; GAL ₹1,500 Cr at 9.56%; GHIAL BBB− (S&P, Fitch); DIAL notes BB+; GAL NCDs CRISIL AA−** [V] | Replace/add |
| Real-estate share of income | "~15%" | DIAL CPD rentals ₹949 Cr + GGIAL ₹7 Cr ≈ **6.5% of consolidated revenue from ops** (GHIAL real-estate inside non-aero, not split) [E from V] | Overstated — fix to "~6–8%" |
| Revenue chart FY22–FY26 | 4,601 / 6,674 / 8,755 / 10,414 / 14,807 | Same [V screener] | Same |
| PAT chart FY22–FY26 | −1,131 / −840 / −828 / −817 / +472 | Same [V screener] | Same |
| Merger date | Sep-2024 "merger completes; renamed" | Scheme effective **25-Jul-2024**; renaming Sep-2024 [V; primer] | Add effective date |
| Q1/Q2 FY27 | not covered | Q1: income ₹4,085 Cr, EBITDA ₹1,568 Cr, PAT ₹148 Cr; Q2: ₹4,188 / ₹1,569 / ₹65 Cr [V] | Add |
| FY27 guidance | "new airports ~+5 mn pax in FY27" | **Traffic +3–4% (cut from 5–7%); non-aero +15–17%** [V-snip] | Add |
| Adani description | "Mumbai + 7 others + greenfield Navi Mumbai… will rival Mumbai" | Adani operates **8 airports incl. NMIA (open since 25-Dec-25)**; CSMIA+NMIA both Adani [V-sib; V AAI] | Fix |
| JM Financial target | ~₹120 SOTP | Not re-verified; dated | Drop or date-stamp |

## 3.4 Primer issues (format as primer-issues.md)

### From Airports research (2026-11-13, airports-industry.md §3.4)

- **gmr-airports.html — EBITDA margin basis wrong (§09 stat card and §08 "~52% EBITDA margin"):** the card says "~52% FY26 EBITDA margin (on total income)". GMR computes margins **on net income (gross income minus revenue share)**: ₹6,150 Cr ÷ ₹11,757 Cr = 52%. On total income (₹15,201 Cr) the margin is **40.5%**; screener's OPM is 39%. Fix the label to "on net income (after revenue share to AAI)" and explain the revenue-share deduction (₹3,444 Cr in FY26; Delhi alone ₹3,232 Cr = 42% of its gross).
- **gmr-airports.html — ADP stake wrong (§07 "Ownership & the ADP partnership"):** "economic interest of roughly 43–46% in GAL" is a pre-merger look-through figure. After the Jul-2024 merger ADP holds shares in the listed company directly: **28.9% after selling 3.4% to GMR promoters in Apr-2026 for €256 mn; a further 3.9% for €285 mn by Apr-2027; GMR promoters also buy US$330 mn of FCCBs** (CRISIL, 1-Sep-2026). GMR group holds 38.26%. ADP remains co-promoter with board parity. Also add: 102 mn shares issued to ADP on OCRPS conversion (29-Sep-2026).
- **gmr-airports.html — owners-of-parent loss claim needs checking (§00, §07, §09, bear case):** the primer says FY26 was "still a small loss at the owners-of-parent level". Screener's FY26 EPS is **+₹0.17** (≈ +₹180 Cr attributable on ~1,056 crore shares) and JM Financial reports Q4 FY26 consolidated net profit (likely attributable) of ₹302 Cr vs headline ₹400 Cr. Verify against the FY26 annual report; if attributable was positive, rewrite the "whisker of loss" passages. Q2 FY27 EPS −₹0.01 (≈ −₹10 Cr) — the owners' line is about breakeven.
- **gmr-airports.html — valuation stale (cover strip, §09):** m-cap "~₹1.15 L Cr (Jun '26)" → **₹1,05,840 Cr at ₹99.0 (13-Nov-2026)**; 52-week ₹84.1–₹116. EV/EBITDA "~22–33×" → **~21.6× TTM / 22.7× FY26** (EV ≈ ₹1.40 lakh Cr ex-FCCB). Book value −₹2.35 → −₹2.33.
- **gmr-airports.html — shareholding stale (§07):** promoters ~66% → **67.48% (Sep-2026)**; FIIs ~20% → **22.95%**; DIIs ~5% → **4.80%**; public down to **4.77%** (from 14.6% in Sep-2024); promoter pledge 28.86% of GMR group's stake (Jun-2026) vs 54% (Jul-2024) — add.
- **gmr-airports.html — Q1/Q2 FY27 not covered ("Up to date" badge is wrong):** add Q1 FY27 (income ₹4,085 Cr, EBITDA ₹1,568 Cr, PAT ₹148 Cr) and Q2 FY27 (income ₹4,188 Cr +12%, EBITDA ₹1,569 Cr +2%, margin 49% vs 53%, PAT ₹65 Cr; pax 28.0 mn +0.6%; Delhi 18.1 mn +3.0%, Hyderabad 6.5 mn −11.2%, Mopa 0.86 mn −24%). FY27 traffic guidance cut to +3–4% (from 5–7%) [V-snip].
- **gmr-airports.html — Bhogapuram and Nagpur status stale (§00, §05, §07, §11):** "Bhogapuram nearing commissioning" → **inaugurated by the PM 1-Aug-2026, commercial operations 17-Aug-2026, 6 mppa, ad-hoc tariff pending CP1 order**. "Nagpur just added" → **operations taken over 25-Jun-2026; revenue share 14.49%; capacity 2.9 → 50 mppa**. Vizag concession fee: ₹303/dom pax and ₹606/intl pax at FY35 base after a 10-year moratorium.
- **gmr-airports.html — Delhi tariff numbers unverified/incomplete (§02 "Tariff cycle"):** "DIAL asked ~730%; AERA granted ~140% (live from April 2025)" — could not verify 730%; press reports put the yield increase at ~148%; CP4 order dated 28-Mar-2025, effective **16-Apr-2025**; domestic UDF kept at ₹129, international economy ₹650 dep / ₹275 arr, business ₹810. Realised Delhi aero revenue ₹1,153 Cr (FY25) → ₹3,011 Cr (FY26). Add the **TDSAT judgment (Sep-2026) in DIAL's favour "on all counts"** (AERA to implement within 3 months unless appealed) and the **TDSAT CP1 HRAB ruling (1-Jul-2025)**.
- **gmr-airports.html — Hyderabad CP4 tariff cut omitted:** AERA's Hyderabad CP4 order (24-Aug-2026; 1-Apr-2026 to 31-Mar-2031; effective 1-Sep-2026) **cut domestic departing UDF ₹750 → ₹515 and international ₹1,500 → ₹1,030**, added arrival UDF ₹220/₹440; AERA's baseline ARR ₹11,683 Cr vs ₹27,851 Cr sought. This is a material negative for GHIAL aero revenue (Q2 FY27 aero −8.3%).
- **gmr-airports.html — "dual-till vs hybrid-till" passage muddled (§02):** state that DIAL/GHIAL are on a **hybrid till in which 30% of non-aero revenue cross-subsidises aero charges** (operator keeps 70%), not that non-aero profits are "largely ring-fenced". Remove "Under a pure single/dual-till debate…" phrasing.
- **gmr-airports.html — real-estate share overstated (§02 chart "Real estate & other ~15%"):** DIAL CPD rentals ₹949 Cr + Mopa ₹7 Cr ≈ **6.5% of FY26 consolidated revenue from operations**; aero (DIAL+GHIAL+GGIAL ₹4,954 Cr) ≈ 33% ✓; non-aero incl. GAL platform ≈ 60%. Change "~15%" to "~6–8%" or relabel the bucket.
- **gmr-airports.html — refinancing example unverified (§08):** "Hyderabad refinanced ₹2,100 Cr via 15-year debentures at ~7.6%" — not found. Replace with Q2 FY27 actions: **DIAL ₹3,500 Cr 15-yr NCDs at 8.71% refinancing US$522.6 mn notes; GAL ₹1,500 Cr NCBs at 9.56% refinancing 10.75% debt; GHIAL upgraded to international investment grade (S&P BBB− from BB; Fitch BBB− from BB+); DIAL notes S&P BB+; GAL NCDs CRISIL AA− (from A+)**.
- **gmr-airports.html — net debt detail (§08):** add that net debt has been **flat at ₹34,000 Cr for a year** (Sep-25, Mar-26, Sep-26) and **excludes ₹2,910 Cr of FCCBs held by ADP**; gross borrowings rose to ₹47,408 Cr (Sep-2026, screener). Holdco bullets: ₹1,500 Cr Feb-2027, ₹1,100 Cr Feb-2028, ₹400 Cr Apr-2028, ₹4,400 Cr Aug-2028. Dividend only after holdco ND/EBITDA reaches 3–4× (CRISIL).
- **gmr-airports.html — Delhi duty-free SPP (§02):** "~₹1,063" → H1 FY27 **₹1,095** (vs ₹1,045 in H1 FY26); Hyderabad ₹929 (vs ₹777).
- **gmr-airports.html — Adani description stale (§10 table):** "Mumbai + 7 others + greenfield Navi Mumbai… Navi Mumbai will directly rival Mumbai" → Adani runs **8 airports including Navi Mumbai (opened 25-Dec-2025)**; NMIA and CSMIA are both Adani, so there is no intra-Mumbai rivalry. Adani's share of India pax FY26 ~22.7% vs GMR 27.3% (AAI data). Add AAHL's pre-IPO raise (₹9,825 Cr at ~$18 bn, Sep-2026).
- **gmr-airports.html — portfolio stakes missing (§05 table):** add GAL stakes — Delhi 74% (after buying Fraport's 10%), Hyderabad 74% (after buying MAHB's 11%), Mopa 100% (NIIF CCDs convertible to up to 49%), Medan 49%, Nagpur 100%, Vizag 100%, Crete 21.6%; AAI holds 26% of DIAL and GHIAL — this drives the minority-interest gap.
- **gmr-airports.html — Crete status (§05):** add "78% complete at Sep-2026; debt-free (state grant + Airport Modernisation & Development Tax)"; Mopa traffic reversed in FY27 (H1 −14.4%; Goa share ~42% Apr–Sep 2026 vs ~49% Q4 FY26).
- **gmr-airports.html — corporate timeline (§07):** add scheme effective date **25-Jul-2024**; FY26 events (Delhi DF from 28-Jul-2025, Hyderabad DF from 10-Sep-2025, Cargo Terminal 1 concession to 2036) and FY27 events (ADP tranche Apr-2026, Nagpur 25-Jun-2026, Vizag 17-Aug-2026, TDSAT Sep-2026, Deputy CEO Sanjeev Gupta 29-Oct-2026).
- **gmr-airports.html — analyst target:** "JM Financial's ~₹120 target" is undated — date-stamp or remove.

## 3.5 Cross-check with the airline dossier (consistency)

| Fact | Airline dossier | This dossier | Verdict |
|---|---|---|---|
| India international pax FY26 | 80.64 mn (+4.2%) [V-snip there] | **80.64 mn (+4.2%) [V AAI]** | Agree — upgrade to [V] |
| Domestic traffic Sep-2026 | DGCA −6.5% (118.23 lakh) | AAI domestic terminal pax **−6.3%** | Consistent (different bases) |
| Domestic traffic Aug-2026 | DGCA −6.3% | AAI domestic **−6.0%** | Consistent |
| Jan–Sep 2026 domestic | DGCA −0.82% YTD | AAI domestic terminal pax Jan–Sep 2026 **247.8 mn vs 250.6 mn → −1.1%** [E: sum of AAI monthly reports, prior-year columns] | Broadly consistent (AAI slightly weaker; terminal vs carried basis) |
| Navi Mumbai opening | 25-Dec-2025, IndiGo first | AAI shows NMIA from FY26 (0.64 mn) [V] | Agree |
| Noida opening | "Q1 FY27" | **15-Jun-2026** [V-snip]; AAI Apr–Sep 0.21 mn [V] | Agree |
| ICRA outlook | Negative since Mar-2026 (aviation) | ICRA Sep-2026: airport traffic +1–3%, airport revenue +6–8% FY27 [V-snip] | Complementary |
| Airport fees in IndiGo cost | ~7–8% of cost; +9.4% in Q2 FY27 | Delhi aero +4.7%, Hyderabad −8.3% Q2 FY27 [V] | Consistent (Delhi tariff step already in base) |

## 3.6 Key source URLs (fetched this session unless marked)

- GMR Q2 FY27 press release: https://www.bseindia.com/xml-data/corpfiling/AttachHis/7f9b9072-bdcb-4e0b-bb3a-75a4374c09db.pdf
- GMR Q2 FY27 presentation: https://www.bseindia.com/xml-data/corpfiling/AttachHis/7efbfbce-bb58-4e6e-a6e8-c69dd1058442.pdf
- GMR Q4 FY26 presentation: https://www.bseindia.com/xml-data/corpfiling/AttachHis/cf244e3e-2715-4126-b471-7be55a5e9405.pdf
- GMR Q2 FY27 transcript intimation (4-Nov-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/12f9a8b1-2ef4-488f-84ec-77178c062a28.pdf
- CRISIL GAL rationale 1-Sep-2026: https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GMRAirportsLimited_September%2001_%202026_RR_404899.html
- screener.in: https://www.screener.in/company/GMRAIRPORT/consolidated/ and https://www.screener.in/company/GMRAIRPORT/
- AAI traffic news index: https://www.aai.aero/en/business-opportunities/aai-traffic-news ; FY26: https://www.aai.aero/sites/default/files/traffic-news/TRMar2k26_2.pdf , …/Mar2k26Annex1_0.pdf , …/Mar2k26Annex3_0.pdf ; H1 FY27: …/TRSep2k_26.pdf , …/Sep2k26Annex_3.pdf ; monthly …/TRJan2k26_0.pdf, TRFeb2k26.pdf, TRApr2k26.pdf, TRMay2k26.pdf, TRJun2k26.pdf, TRjul2k26.pdf, TRAug2k26.pdf
- FX: https://open.er-api.com/v6/latest/USD (13-Nov-2026)
- Prices: Yahoo Finance chart API (ADP.PA, AENA.MC, FRA.DE, FHZN.SW, GMRAIRPORT.NS, ADANIENT.NS), 13-Nov-2026
- Hyderabad CP4: https://dailypioneer.com/news/aera-cuts-hyderabad-airport-user-development-fee [V secondary]
- TDSAT CP1 (1-Jul-2025): https://corporate.cyrilamarchandblogs.com/2025/08/tdsat-redefines-aeronautical-tariff-setting-in-indian-airports/ [V secondary]
- TDSAT CP4 (Sep-2026): https://www.investywise.com/?p=119842 [V-snip]
- Adani Q2 FY27: https://moodiedavittreport.com/?p=486909 [V secondary]; republicworld/outlookbusiness coverage [V-snip]
- Aena H1-2026: https://www.aena.es/en/press/aena-closes-the-first-half-of-2026-with-a-profit-of-1002-million-euros.html [V-snip]
- ADP H1-2026: https://www.webdisclosure.com/press-release/groupe-adp-epa-adp-aeroports-de-paris-sa-2026-half-year-results-K7ZV7YlcUwb [V-snip]
- Fraport H1-2026: https://aircargoweek.com/fraport-posts-stronger-h1-operating-results/ [V-snip]
- Zurich H1-2026: https://report.flughafen-zuerich.ch/2026/hyr/en/revenue [V-snip]
- CIAL FY26: https://www.onmanorama.com/news/kerala/2026/08/08/cial-logs-record-502-cr-profit-plans-to-enter-airport-consultancy-business.html [V-snip]
- Noida opening: https://www.indiatvnews.com/news/india/noida-airport-set-to-begin-operations-today-indigo-flight-from-lucknow-scheduled-to-land-at-8-am-2026-06-15-1044849 [V-snip]
- 11-airport round: https://en.channeliam.com/2026/08/27/aai-airport-privatisation-11-airports-ppp/ ; sahi.com coverage [V-snip]
- ICRA airports Sep-2026: https://www.freepressjournal.in/business/indian-aviation-traffic-growth-to-slow-to-1-3-in-fy27-amid-fuel-price-geopolitical-pressures-icra [V-snip]
- AAHL pre-IPO: https://www.kotakneo.com/news/stocks/adani-airports-raise-9825-crore-global-investors-aahl-18-billion-valuation/ [V-snip]
- Sibling: /tmp/airports-ref/airline-industry.md (airline dossier, Nov-2026) [V-sib]

Scratch notes: /tmp/airports-dossier/notes-01.md … notes-04-calcs.md; parsed AAI CSVs /tmp/airports-dossier/aai/fy26.csv and h1fy27.csv.
