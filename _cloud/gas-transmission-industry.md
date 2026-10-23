# Indian Gas Transmission & Marketing (Gas Transmission || Gas Transmission/Marketing): Research Dossier + Company Fact Pack

Compiled 2026-10-23 (UTC) for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), sections §0–12 plus A–H.
- **Part 2** is the company fact pack for the single member, GAIL (India) Ltd (brief-companies.md), plus a **reference-peer fact pack** (listed Indian gas-chain companies that are NOT members of this sub-sector but are needed to describe the industry), and JSON.
- **Part 3** is the company-KPI appendix: summary grid, reference aggregates, reconciliation vs our primer, **3.4 Primer issues**, and source URLs.

**Member (1, Tier C — single-company sub-sector):** GAIL (India) Limited — NSE **GAIL** · BSE **532155** · primer `primers/gail-india.html` (last refreshed 2-Jul-2026).

**The report is about the whole Indian gas transmission & marketing industry, not a GAIL primer.** GAIL is the only listed member. Everyone else in this file (GSPL Transmission, Gujarat Energy (ex-Gujarat Gas), Petronet LNG, IGL, MGL, Adani Total Gas, ONGC, Reliance, IOCL, BPCL, Pipeline Infrastructure/Energy InvIT, Indradhanush Gas Grid, GAIL Gas, global midstream/LNG companies) is a **reference company**. Their figures are context, not member data. The gas-distribution (CGD) sub-sector report is **not** in this library, so do not plan cross-links to it.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary document. Main fetched sources: GAIL Q1 FY27 results filing (BSE, 31-Jul-2026; segment tables); GAIL Q1 FY27 investor presentation (BSE, 31-Jul-2026); GAIL Q1 FY27 earnings-call transcript (31-Jul-2026); GAIL FY26 Investors' & Analysts' Meet presentation (BSE, 22-May-2026); GAIL Annual Report FY2025-26 (BSE, 426 pp); PNGRB "NGPL Tariff MIS" (13-Jan-2026); PPAC notifications of 30-Sep-2026 (domestic gas price for Oct-2026; HPHT ceiling for Oct-26–Mar-27); PPAC Flash Report Sep-2026; FIPI Policy & Economic Reports Apr/May/Jul-2026 (reproducing PPAC monthly data); World Bank CMO monthly price file (2019–Dec-2024); screener.in pages fetched 23-Oct-2026 (GAIL standalone + consolidated, PETRONET, IGL, MGL, ATGL, ONGC, RELIANCE, IOC, BPCL, GUJENERGY, GSPL (stale), GSPLTRANS).
- **[V-snip]** = from a search-result summary or secondary article only (not the primary document).
- **[K]** = well-established public fact from memory; source named but not re-fetched. Spot-check if it carries an argument.
- **[E]** = analyst estimate, composite, conversion or arithmetic. Present as "approx." or a range.
- **[primer]** = from our own primer `primers/gail-india.html` (refreshed 2-Jul-2026).
- **[V-sib]** = verified in a sibling dossier this month (commodity-chem-industry.md, 21-Oct-2026) and reused for the macro backdrop only.

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. GAIL has a March year-end.
- **FX: ₹94.9 = US$1** for all USD conversions of current values in this file (per the brief). Historical $-denominated prices (Henry Hub, JKM, APM) are quoted in $ as published; where a past-period ₹ conversion matters, the period rupee is stated (FY26 average ≈ ₹87–88/$ [K/E]).
- **Gas volume units (the single biggest source of reader confusion — see Trap 1):**
  - **MMSCMD** = million standard cubic metres per day (a flow rate). GAIL's "122 MMSCMD transmitted" = the average daily flow over the year.
  - **MMSCM** = million standard cubic metres (a quantity). PPAC monthly data are in MMSCM.
  - **bcm** = billion cubic metres per year. **1 bcm/yr ≈ 2.74 MMSCMD; 1 MMSCMD ≈ 0.365 bcm/yr** [E, arithmetic].
  - **MTPA / MMTPA** = million tonnes per annum of LNG. **1 MTPA ≈ 3.6 MMSCMD** — this is GAIL's own conversion (India's 23.1 MTPA long-term LNG portfolio = "~83.16 MMSCMD", FY26 analyst-meet presentation) [V]. So 1 MTPA ≈ 1.31 bcm/yr [E].
  - **mmBtu** = million British thermal units (an energy unit; all gas prices and pipeline tariffs are per mmBtu). **1 mmBtu ≈ 25–27 scm of Indian pipeline gas; working factor 1 scm ≈ 0.038 mmBtu (GCV)** [K convention; E]. 1 MMSCMD ≈ 38,000 mmBtu/day ≈ 13.9 million mmBtu/yr [E].
  - **GCV vs NCV:** Indian domestic gas prices (APM, HPHT ceiling) are notified on **GCV** (gross calorific value) basis [V PPAC]. LNG contracts are on GCV too; some older contracts and power-sector tariffs use NCV (≈10% lower energy content per unit). Always state the basis.
  - **TMT** = thousand metric tonnes (GAIL uses it for polymer, LPG and LHC volumes).
- **Macro context (reused from sibling dossier; verified there):** **West Asia war from 28-Feb-2026** → Strait of Hormuz closure; Brent peak ~$118/bbl; ceasefire 7-Apr-2026; Brent → ~$95 thereafter [V-sib]. GAIL's FY26 Annual Report independently gives **Brent ~US$117.5/bbl in March 2026** [V AR]. RBI repo hiked to 5.50% on 7-Oct-2026 [V-sib].

---

## Q2 FY27 STATUS (as of 23-Oct-2026)

**GAIL has NOT reported Q2 FY27. Board meets 30-Oct-2026 (unaudited Q2/H1 results, standalone and consolidated); earnings call 30-Oct-2026, 4:30 pm IST; trading window closed until 1-Nov-2026** [V screener announcements, 15-Oct and 16-Oct-2026]. **Q1 FY27 (Jun-26) is the latest reported quarter** (board 31-Jul-2026; analyst call 31-Jul-2026, 3:30 pm) [V BSE filing]. The FY26 Annual Report is out (on BSE) [V].

| Company (role) | Latest reported | Q2 FY27 board / status |
|---|---|---|
| **GAIL (India) — MEMBER** | Q1 FY27, board **31-Jul-2026** [V] | **Board 30-Oct-2026; call 30-Oct 4:30 pm** [V screener] |
| Petronet LNG (reference) | Q1 FY27 [V screener] | **Board 2-Nov-2026** (Q2/H1 + interim dividend); call **3-Nov-2026, 12 noon**; trading window closed to 4-Nov [V screener] |
| Indraprastha Gas (reference; GAIL 22.5% [K]) | Q1 FY27 | **Board 30-Oct-2026** [V screener] |
| Mahanagar Gas (reference; GAIL 32.5% [K]) | Q1 FY27 | Not announced as of 23-Oct (Reg 74(5) certificate filed 8-Oct) [V screener] |
| Adani Total Gas (reference) | **Q2 FY27 reported 22-Oct-2026**: revenue +34% YoY, EBITDA +12%, volumes +12%; screener Sep-26 qtr: sales ₹1,944 Cr, OP ₹328 Cr, PAT ₹173 Cr; investor call 23-Oct [V screener] | Done |
| ONGC (reference) | Q1 FY27 | Board intimation filed 23-Oct-2026 (results + 1st interim dividend); date not captured [V screener]. New Chairman Sunil Kumar from 7-Dec-2026 (ACC approval) [V screener] |
| GSPL Transmission Ltd (reference; new listing) | No quarterly results on screener yet | **Board 3-Nov-2026** for Q2/H1 [V screener] |
| Gujarat Energy Ltd (ex-Gujarat Gas; reference) | Q1 FY27 [V screener] | Not captured [V screener lists no Q2 board date] |
| Reliance / IOCL / BPCL (reference) | Q1 FY27 | Not checked (not needed for the gas argument) |

**Still listed? GAIL is listed and unchanged.** No merger, demerger or delisting is pending at GAIL. Items the writer must know:
1. **PNGRB has withdrawn the "clause 5A" unbundling requirement.** In 2014 PNGRB inserted clause 5A requiring entities in both gas transmission and gas marketing to separate them (legal unbundling) with effect from **1-Apr-2027**; GAIL challenged it in court (case pending); per GAIL's Director (Finance) on the Q1 FY27 call, **"recently, PNGRB has withdrawn clause 5A from their regulation. So right now, there is no obligation for unbundling"**. An independent Transport System Operator (TSO) concept survives in PNGRB's Action Plan 2027, but only to monitor the 25% open-access (common-carrier) capacity [V transcript]. **So the long-discussed "GAIL pipeline subsidiary / separation" is OFF the table for now** — treat it as a dormant option, not a catalyst. (The FY26 Annual Report still lists "Restructuring risk (monetisation & unbundling)" among risks and refers to the "regulatory requirement of legal unbundling of gas marketing" [V AR] — it was written before the withdrawal.)
2. **Konkan LNG (Dabhol, 5 MTPA terminal) became a wholly-owned subsidiary of GAIL from 6-Jul-2026**, after an NCLT order of 3-Jun-2026 sanctioned a capital-reduction scheme that cancelled MSEB Holding's 7,40,55,220 shares [V transcript; V AR]. Management: "streamline operations… tax efficiencies… make RLNG sourcing more competitive" [V].
3. **Reference-peer corporate action that changes the industry map — the GSPC group restructuring (Gujarat):**
   - **Effective 1-May-2026** (MCA final sanction 17-Apr-2026): **GSPC and Gujarat State Petronet (GSPL) were merged into Gujarat Gas**, and **GSPL's gas-transmission business was demerged into a new company, GSPL Transmission Ltd (GTL)** [V-snip DSIJ/FilingReader/MachineMaker].
   - **Gujarat Gas was renamed Gujarat Energy Ltd from 1-Jul-2026** [V-snip]; screener now lists it as **GUJENERGY** and the old GUJGASLTD page returns 404 [V screener].
   - **Entitlement: 1 GTL share (FV ₹10) for every 3 Gujarat Energy shares (FV ₹2)**; GTL allotted **31,27,43,617 shares on 8-Jul-2026** (record date reportedly 2-Jul-2026) [V-snip FilingReader].
   - **GTL is trading:** screener shows m-cap **₹3,525 Cr at ₹113** (52-week high/low ₹160/₹104) and a Q2 board on 3-Nov-2026; no operating P&L on screener yet [V screener]. CARE withdrew the erstwhile GSPL bank-facility ratings on 19-Oct-2026 "immediately after transfer to GSPL Transmission" [V screener].
   - **GSPL's own screener page is stale** (last quarter Dec-2025; "m-cap ₹15,141 Cr at ₹268" is a frozen pre-merger quote) — **do not use it**. Gujarat Energy's screener history has been **restated** to include GSPC (FY25 sales ₹27,615 Cr vs Gujarat Gas's ~₹15.7k Cr standalone history), so its year-on-year comparisons mix bases.
   - Gujarat Energy promoter holding dropped from **60.89% (Mar-26) to 38.94% (Jun/Sep-26)** as the merger swapped GSPL/GSPC holders in; FII rose 3.98% → 11.94% [V screener].
4. **Governance flag at GAIL:** "The Board of the Company did not have any Independent Director with effect from 28th March 2026. Consequently, the Company re-constituted the Audit Committee comprising three Whole-time Directors" [V Q1 FY27 results filing]. This is a listing-compliance gap (SEBI LODR Reg 17/18) common at PSUs when government nominations lapse; flag it, do not over-dramatise it. A government nominee director (Rajeev Kumar) was appointed effective 1-Oct-2026 [V screener].

---

## READ THIS FIRST: twelve definitional traps

1. **MMSCMD vs MMSCM vs bcm vs MTPA vs mmBtu.** India's FY26 gas consumption was **~189.2 MMSCMD** [V GAIL AR MD&A] = **~69 bcm** for the year [E]. Domestic production **~34.3 bcm** [V AR] = ~94 MMSCMD [E]; LNG imports **~26.5 MMT** [V AR] = ~95 MMSCMD at 3.6 MMSCMD/MTPA [E]. Import dependence **~50.6%** [V AR]. Never add MMSCMD to bcm; never compare a GAIL MMSCMD (daily average) with a PPAC MMSCM (monthly quantity) without ×30.
2. **GAIL "transmission volume" ≠ "marketing volume" ≠ India consumption.**
   - Transmission (122.18 MMSCMD FY26) = gas carried in GAIL pipes for **all shippers** including GAIL itself [V].
   - Marketing (104.21 MMSCMD FY26) = gas GAIL **itself buys and sells**, including gas moved on other companies' pipes and **overseas sales/trading** (8.76 MMSCMD of Q1 FY27's 93.82 was international) [V].
   - The two overlap heavily; you cannot add them. GAIL's "~65% transmission share" and "~48% marketing share" (FY26 analyst meet) are of different denominators [V].
3. **Standalone vs consolidated GAIL.**
   - Standalone FY26: revenue ₹1,38,697 Cr, EBITDA ₹13,119 Cr, PAT ₹6,968 Cr [V AR/PPT].
   - Consolidated FY26: revenue ₹1,42,094 Cr (results filing; screener shows "sales" ₹1,41,598 Cr; PPT "gross turnover" ₹1,41,716 Cr), EBITDA ₹14,524 Cr, **PAT attributable ₹7,582 Cr** [V].
   - Consolidated adds **City Gas segment (GAIL Gas)**, petchem subsidiaries (BCPL), overseas trading subsidiaries, and **equity-accounted associates/JVs** (Petronet LNG 12.5%, IGL 22.5%, MGL 32.5%, ONGC Petro-additions, China Gas, etc. — stakes [K]).
   - The marketing segment is ~₹20,000 Cr bigger consolidated (₹1,44,713 Cr vs ₹1,24,244 Cr FY26) because overseas subsidiaries (GAIL Global Singapore/USA) trade LNG [V segment tables].
4. **"Gross turnover" vs "revenue from operations" vs screener "sales".** GAIL's presentations quote "Turnover (Gross)" (e.g. Q1 FY27 standalone ₹38,912 Cr), the results filing quotes "Sales/Income from operations" (₹38,981.63 Cr incl. other operating income), and screener shows ₹38,953 Cr. Differences are excise/other-operating-income presentation — immaterial (<0.5%) but do not mix them in one table.
5. **Segment EBIT ≠ segment PBT ≠ EBITDA.** GAIL's segment "results" are **profit before interest and tax** (PBIT) per segment, before unallocable items [V]. Management often says "marketing PBT" — e.g. Q1 FY27 marketing "₹3,353 Cr at PBT level" (call) vs segment PBIT ₹3,481.29 Cr standalone / ₹3,607.72 Cr consolidated (filing) [V]. The **₹4,500 Cr FY27 marketing guidance is on management's PBT basis**. Group EBITDA (₹14,524 Cr FY26 cons) adds back depreciation and includes other income; screener "operating profit" (₹11,502 Cr FY26 cons) **excludes other income**. Quote the basis every time.
6. **Reported vs one-off-adjusted profits (FY25 and FY26 are both distorted).**
   - **FY25** PBT included a **one-time settlement of ₹2,440 Cr from SMTS** (SEFE Marketing & Trading Singapore — the former Gazprom Marketing & Trading Singapore that defaulted on its LNG supply contract in 2022) [V AR]. It shows up as the **₹3,211 Cr "other income" in Q3 FY25 (Dec-2024)** on screener [V]. FY25 "record" profit (cons PAT ₹12,450 Cr; standalone ₹11,312 Cr) is therefore flattered by ~₹1,800 Cr post-tax [E at ~25% tax].
   - **FY26** includes: Q1 +₹155 Cr (transmission differential-tariff settlement ₹133 Cr + write-back ₹22 Cr); Q4 net +₹218 Cr (marketing: doubtful-dues provision −₹675 Cr for NFCL, entry-tax reversal +₹291 Cr; transmission: write-back +₹87 Cr, **depreciation +₹475 Cr from extending pipeline useful life 30 → 40 years**, provision −₹111 Cr; petchem: depreciation +₹189 Cr from extending PE-plant life 25 → 35 years; LPG transmission −₹58 Cr and +₹20 Cr) [V FY26 PPT "One-off transactions"].
   - **Depreciation is now structurally lower**: management guides ~₹3,200–3,300 Cr a year (standalone) after the life change, plus ~₹312 Cr when the PDH-PP plant is commissioned [V transcript].
7. **Marketing segment includes trading and overseas sales.** "Natural gas marketing" revenue (₹1.24 lakh Cr standalone FY26, ~90% of GAIL's revenue) is mostly **pass-through gas cost**; margin per mmBtu is tiny in normal years (~₹21/mmBtu FY26 standalone EBIT [E]) and can be large in dislocated quarters (~₹107/mmBtu in Q1 FY27 [E]). **Never value GAIL on revenue or EBITDA margin %.**
8. **APM vs non-APM gas (and the four domestic price tiers).**
   - **APM gas** = gas from ONGC/OIL **nomination fields**; price = 10% of the Indian crude basket (monthly), **floor $4, cap $6.50 from Apr-2023, raised to $6.75 for FY26 and $7.00 for FY27** [V FIPI/PPAC]. The October-2026 notified "domestic gas price" is **$11.22/mmBtu but APM is capped at $7.00** [V PPAC 30-Sep-2026].
   - **New-well gas (NWG)** from nomination fields: 20% premium to APM (Parikh formula) [K]; GAIL's LHC plants now get NWG at "$12 to $13" alongside APM at "~$7" [V transcript — note this is management's stated landed price, higher than a pure 20% premium; flag].
   - **HPHT / deepwater / ultra-deepwater gas** (e.g. Reliance KG-D6, ONGC KG-98/2): marketing freedom subject to a **ceiling** — **$8.90 (Apr–Sep 2026) → $9.89 (Oct-2026–Mar-2027)** [V PPAC].
   - **Imported RLNG** (re-gasified LNG): contract-priced (Brent-slope, Henry Hub-linked, JCC-linked) or spot.
   - "Domestic gas" in PPAC price tables is the **formula price**, not what APM producers receive. Do not chart the $10.76–11.59 Apr–Jun-2026 numbers as "APM price".
9. **Brent-slope vs Henry Hub-linked vs JCC-lag vs spot.** GAIL's book mixes: ~5.8 MTPA US LNG (~21 MMSCMD) **Henry Hub-linked**; a **2.4 MTPA JCC-linked contract priced on a 9-month average with a 2-month lag**, while most downstream sales are on **3-month dated Brent**; plus Qatar/Petronet Brent-slope term volumes and spot [V transcript]. A crude spike produces a **temporary windfall** (sales reprice faster than JCC-lagged purchases) that reverses as the averages converge — this is the core of the Q1 FY27 surprise.
10. **"Tariff" means three different things.** (a) **PNGRB's Unified Tariff (UFT)** — what a shipper pays on the National Gas Grid, now **₹54.00/mmBtu (≤300 km) and ₹102.86 (>300 km)**, levelised **₹83.94**, from 1-Jan-2026 [V PNGRB]. (b) **GAIL's own levelised INGPL tariff** — the revenue requirement PNGRB allows GAIL's integrated network, **₹65.69/mmBtu from 1-Jan-2026** (order 27-11-2025) [V PNGRB]. (c) Other pipelines' standalone tariffs (e.g. East-West ₹74.67; GSPL HP grid ₹18.1; IGGL NE grid ₹166.33) [V]. Under UFT, shippers pay zone rates into a pool, and each grid operator recovers its approved revenue via apportionment — so the ₹54/₹102.86 zone rates are **not** GAIL's realisation.
11. **"Capacity" and "network length" have multiple definitions.** GAIL quotes "18,000+ km" (FY26 PPT), "~18,700 km" (AR, 31-Mar-2026), "~14,200 km integrated network" (PPT), while PNGRB's MIS shows GAIL's INGPL at **14,035 km authorised / 13,658 km operating (as on 31-3-2025)** with **163.8 MMSCMD capacity** [V]. India's network: **23,286 km operating vs 28,687 km authorised (PNGRB MIS, as on 31-3-2025)** and **"27,427 km operational / 34,273 km authorised" (PNGRB map as on 31-Dec-2025, reproduced in GAIL's FY26 PPT)** [V]. The difference between the two PNGRB totals is mostly dating and inclusion of spur lines/LMCs. Always give the date and basis.
12. **"Petrochemical output" vs "sales", and GAIL vs BCPL.** FY26 polymer **production 768 TMT** [primer] vs **sales 785 TMT** [V AR]. GAIL's own capacity is **870 KTA (810 KTA PE + 60 KTA PP, the PP unit commissioned 4-Feb-2026)** [V PPT/AR]; **BCPL (Brahmaputra Cracker & Polymer, Assam) adds 280 KTA** and marketed 302 TMT in FY26 [V PPT]. "~1,085 KTA sold" combines both [V].

---

# PART 1 — INDUSTRY DOSSIER

## 0. Top-line framing (what an expert leads with)

- **India's gas chain is a small, import-dependent, policy-priced market wrapped around one dominant midstream company.**
  - Gas is only **6.13% of India's primary energy (CY2025), down from 6.58% in CY2024** (EI Statistical Review 2026, as quoted in GAIL's AR) — against an official goal of **15% by 2030** [V AR; target K, MoPNG/NITI]. The target is effectively unreachable on current trends: at ~6% share, reaching 15% by 2030 would need consumption to roughly 2.5× in four years [E].
  - Consumption **fell 3.1% in FY26 to ~189.2 MMSCMD** (fertiliser −4.3%, power −10.6%, "others"/industrial −11.7%; CGD +9.7%, petchem +16.3%) [V AR]. It then fell further during the West Asia war: Apr-2026 consumption availability **−11.2% YoY**, May-2026 **−7%** [V FIPI/PPAC].
  - Import dependence is **~50.6% (FY26, GAIL AR)** / **54.35% (CY2025, EI stats basis)** [V AR]. Domestic production is in slow decline (Jan–May 2026 monthly output −4% to −5% YoY) [V FIPI/PPAC].
- **GAIL owns the highway, runs the biggest trading desk, and makes plastics and LPG on the side.**
  - ~18,700 km of natural-gas pipelines (31-Mar-2026), ~65% of India's transmission market by GAIL's own estimate; 2,040 km of LPG pipelines; 16.56 MTPA LNG portfolio; ~48% share of India's RLNG/gas marketing; 870 KTA polymers; 1.34 MMTPA LHC capacity [V AR/PPT].
  - FY26 standalone segment EBIT ₹9,361 Cr: **NG transmission ₹6,229 Cr (67%)**, LPG transmission ₹456 Cr, marketing ₹3,078 Cr, LHC ₹489 Cr, other ₹518 Cr, **petrochemicals −₹1,408 Cr** [V results filing].
  - Q1 FY27 flipped the mix: segment EBIT ₹6,237 Cr, of which **marketing ₹3,481 Cr (56%)**, transmission ₹1,906 Cr (31%), **LHC ₹773 Cr**, petchem −₹123 Cr [V].
- **The 2026 West Asia war is the defining event of the year — and it was a windfall for GAIL's trading book, a disaster for volumes elsewhere.**
  - QatarEnergy declared **force majeure on 4-Mar-2026** after attacks halted Ras Laffan; Petronet LNG passed FM on to GAIL/IOC; GAIL's allocation from Petronet was **cut to zero effective 4-Mar** [V pgjonline, 4-Mar-2026]. **~52.5% of India's LNG came from Hormuz-exposed Qatar (40.4%) and UAE (12.1%)**; India's LNG imports fell **~25%**; **~94% of LPG imports** come from the Gulf [V AR].
  - Spot LNG roughly doubled (JKM from ~$10–11 to ~$24–25/mmBtu reported peaks) [V-snip Moneylife/other reports — FLAG: no fetched price series for the 2026 JKM peak]. Monthly Japan LNG **import** price (a lagged contract average) rose to **$14.49 in Mar-2026 (+28% MoM)** [V FIPI]; TTF averaged **$17.91 in Mar-2026 (+59% MoM)** while **Henry Hub fell to $3.04** [V FIPI].
  - GAIL's portfolio (US Henry Hub cargoes unaffected by Hormuz + JCC-lag + 8 spot cargoes) let it supply customers at crisis prices: **Q1 FY27 standalone PAT ₹4,292 Cr (3.4× Q4 FY26's ₹1,262 Cr); consolidated PAT ₹4,665 Cr; EBITDA ₹7,573 Cr cons** [V].
  - Management keeps **FY27 marketing guidance at ~₹4,500 Cr PBT** (already ₹3,353 Cr in Q1) and calls the Q1 spread "one-off… much of it will get cured within the year" [V transcript].
- **Volumes are the soft spot.** FY27 transmission guidance was **cut from ~133–134 MMSCMD to ~123 MMSCMD** (FY26 actual 122.18; FY25 127.32) [V transcript; primer for the old guidance]. Polymer output collapsed to **51 TMT in Q1** as gas was diverted to priority sectors under the Essential Commodities notification [V].
- **The regulated toll is intact but the regulator just re-cut the grid.**
  - PNGRB approved GAIL's integrated-network tariff of **₹65.69/mmBtu from 1-Jan-2026** (order 27-Nov-2025), below the **₹78.72 GAIL sought** [V PNGRB MIS for 65.69; primer for 78.72]. Our primer calls this a "cut"; the prior INGPL tariff was **₹58.61/mmBtu** [K, PNGRB 2023 order — VERIFY], i.e. it is a **~12% increase that fell short of the ask**.
  - The **Unified Tariff** moved from three zones to two from 1-Jan-2026: **₹54.00 (≤300 km) / ₹102.86 (>300 km)**, CNG and domestic PNG pay ₹54 everywhere; levelised UFT **₹80.97 → ₹83.94** [V PNGRB].
- **Valuation (screener 23-Oct-2026):** GAIL **₹163; m-cap ₹1,07,749 Cr; P/E 10.9× TTM consolidated (14.2× FY26); P/B 1.21×; dividend yield 3.36%**; screener ROCE 9.67%, ROE 8.71% (FY26) [V]. The stock is **~13% below the primer's Jun-2026 ₹1.15 lakh Cr** and near the lower half of its 52-week ₹134–187 range [V]. Listed CGD/LNG stakes (Petronet 12.5%, IGL 22.5%, MGL 32.5% [K stakes]) are worth **~₹13,150 Cr at 23-Oct prices (~12% of GAIL's m-cap)** [E].

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 The chain (wellhead/LNG ship → burner tip)

| Stage | What happens | Who does it in India | How it earns | Regulation |
|---|---|---|---|---|
| **Upstream production** | Gas from nomination fields (ONGC, OIL), PSC/NELP fields (Reliance–bp KG-D6, ONGC KG-98/2, Cairn/Vedanta), CBM | ONGC, OIL, RIL–bp, Vedanta, small private | Gas price (APM cap $7.00; HPHT ceiling $9.89) × volume | MoPNG/DGH; PPAC notifies prices [V] |
| **LNG import & regasification** | Long-term/spot LNG purchase; shipping; regas at terminals | Petronet LNG (Dahej 22.5 MTPA, Kochi 5), Shell (Hazira 5.2), GAIL/Konkan LNG (Dabhol 5), IOCL (Ennore 5), Adani–Total (Dhamra 5; Mundra 5 GSPC-LNG), HPCL (Chhara 5) [V PPT terminal table] | Regas tariff (₹/mmBtu) × throughput (capacity-booking model); LNG trading margin for the buyer | Terminals largely unregulated (PNGRB authorisation, no tariff regulation) [K] |
| **Transmission (trunk pipelines)** | High-pressure carriage from terminals/fields to demand centres | **GAIL (~65%)**, GSPL Transmission (Gujarat), Pipeline Infrastructure Ltd/Energy InvIT (East-West KG–Gujarat), IOCL, Indradhanush Gas Grid (NE), GSPL India Gasnet/Transco (Mehsana–Bhatinda; Mallavaram–Bhilwara), Reliance Gas Pipelines (Shahdol–Phulpur) [V PNGRB MIS] | **Cost-plus tariff on capital employed** (PNGRB; 12% post-tax ROCE norm [K]) × volume, under the Unified Tariff pooling | **PNGRB** (Act 2006): authorisation, tariff, 25% common-carrier capacity [V transcript for 25%] |
| **Gas marketing / trading** | Aggregates supply (domestic + RLNG), sells to fertiliser, power, CGD, industry, refineries, petchem; overseas trading | **GAIL (~48% share)**, IOCL, BPCL, HPCL, ONGC (APM sales via GAIL), RIL (KG-D6 auctions), Shell, Torrent, GSPC (now Gujarat Energy), Adani–Total, IGX traded volumes | Sale price − delivered cost (margin per mmBtu × volume); index/basis risk | Pricing largely free except APM/priority allocations; Essential Commodities orders in crises [V] |
| **City gas distribution (CGD)** | Low-pressure networks: PNG to homes/commerce/industry, CNG to vehicles, in authorised Geographical Areas (GAs) | IGL, MGL, Adani Total Gas, Gujarat Energy (ex-Gujarat Gas), Torrent Gas, GAIL Gas (16 GAs + 9 via JVs), BPCL, IOCL–Adani JV, Think Gas, AG&P (≈307 GAs authorised: 300 in rounds 1–11, 7 in round 12) [V PPT] | Spread between priority-allocated APM/NWG gas and retail CNG/PNG price; marketing exclusivity; network tariff | PNGRB authorisation; APM allocation priority for CNG/PNG-D [V PPT] |
| **Gas-based conversion** | Polymers (gas cracking, PDH), LPG/propane extraction (LHC), fertiliser (urea), power | GAIL (Pata, Usar, LHC plants), BCPL, OPaL (ONGC/GAIL JV), fertiliser PSUs/co-ops | Product spread over gas | Urea pricing (NBS/new urea policy) [K] |

### 1.2 Where value is captured (and why)
- **Transmission** captures a **regulated, volume-linked toll**: GAIL's NG-transmission segment earned **₹6,229 Cr EBIT on ₹11,206 Cr revenue (55.6% EBIT margin)** in FY26 [V]. Return on segment capital is ~20% pre-tax on our rough split [E, §9].
- **Regasification** captures a capacity-linked fee: Petronet's FY26 OP ₹5,338 Cr on ₹43,495 Cr revenue (12% "margin" — but the revenue is mostly pass-through LNG) and **ROCE 22.6%** [V screener]. Its revenue collapsed to **₹5,558 Cr in Q1 FY27** (Qatar FM: no LNG to resell) while OP held at **₹1,535 Cr** — proof that terminal economics are fee-based, not commodity-based [V screener].
- **Marketing** captures a thin, volatile spread: GAIL's FY26 marketing EBIT ≈ **₹21/mmBtu** (~$0.24) on revenue of ~₹860/mmBtu [E]; Q1 FY27 ≈ ₹107/mmBtu (~$1.13) [E].
- **CGD** captures the richest per-unit margin because it buys cheapest priority gas and sells at fuel-substitution prices — but margins have compressed as APM allocations were cut: IGL OPM **17% (FY24) → 12% (FY26) → ~6% in Q1 FY27** (₹294 Cr OP on ₹4,587 Cr) [V screener]; MGL OPM **29% → 18% → 14%** [V screener].
- **Upstream** captures the commodity rent where price is free (HPHT ceiling ~$9–10) and is squeezed where it is capped (APM $7) [V PPAC].

### 1.3 GAIL's five reporting segments (+ City Gas consolidated)
| Segment | FY26 revenue (SA, incl. inter-segment) | FY26 EBIT (SA) | Q1 FY27 revenue | Q1 FY27 EBIT | Driver |
|---|---|---|---|---|---|
| Transmission – Natural gas | ₹11,205.94 Cr | ₹6,229.11 Cr | ₹3,042.09 Cr | ₹1,782.65 Cr | Tariff × volume |
| Transmission – LPG | ₹916.18 Cr | ₹455.54 Cr | ₹226.49 Cr | ₹122.87 Cr | Regulated LPG tariff × TMT |
| Natural gas marketing | ₹1,24,244.41 Cr | ₹3,077.58 Cr | ₹34,437.58 Cr | ₹3,481.29 Cr | Spread/index mismatch |
| Petrochemicals | ₹7,574.42 Cr | **−₹1,408.22 Cr** | ₹646.08 Cr | −₹122.53 Cr | Polymer price − gas cost |
| LPG & liquid hydrocarbons | ₹4,293.33 Cr | ₹489.32 Cr | ₹2,039.21 Cr | ₹772.50 Cr | LPG/propane price − APM/NWG gas |
| Other (CGD own GAs, E&P, CBG, power) | ₹2,210.76 Cr | ₹517.91 Cr | ₹657.87 Cr | ₹200.52 Cr | — |
| Inter-segment elimination | −₹11,749.06 Cr | | −₹2,067.74 Cr | | |
| **Total (sales/income from operations)** | **₹1,38,696.52 Cr** | **₹9,361.24 Cr** | **₹38,981.63 Cr** | **₹6,237.30 Cr** | |
Source: GAIL results filing for Q1 FY27 (BSE, 31-Jul-2026), standalone segment table, which carries FY26 audited comparatives [V]. Consolidated adds a **City Gas segment: FY26 revenue ₹7,401.37 Cr, EBIT ₹698.68 Cr; Q1 FY27 ₹2,256.11 Cr / ₹225.62 Cr** [V].

---

## 2. Size and growth

### 2.1 India gas market — volumes
| FY | Consumption (MMSCMD) | ≈ bcm | Source |
|---|---|---|---|
| FY22 | 168.47 | 61.5 | [V GAIL AR MD&A table; bcm E] |
| FY23 | 160.83 | 58.7 | [V; E] (2022 LNG price shock: demand destruction) |
| FY24 | 188.52 | 68.8 | [V; E] |
| FY25 | 195.30 | 71.3 | [V; E] |
| FY26 | 189.2 (−3.1%) | 69.1 | [V; E] |
| FY27 Apr–May | Apr −11.2% YoY, May −7% YoY (consumption availability) | — | [V FIPI/PPAC] |
- **Earlier years (different PPAC basis, incl. internal use — indicative only):** FY15 ~51 bcm, FY16 ~52.5, FY17 ~55.7, FY18 ~59.2, FY19 ~60.8, FY20 ~64.1, FY21 ~60.8 bcm [K, PPAC "natural gas consumption" series from memory; FLAG — PPAC's historical file now needs a login, so these were NOT re-fetched; GAIL's FY22 figure (61.5 bcm) is ~4% below PPAC's ~64 bcm on the older basis].
- **Care Ratings (via Polymerupdate)** estimated FY26 at ~212 MMSCMD consumption (116 production, 96 imports) vs FY25 196/114/82 [V-snip] — **conflicts** with GAIL's AR (189.2) — Care's is a forecast made before the war; **use GAIL AR**.
- **CAGR FY22–FY26: +2.9% a year** (168.5 → 189.2 MMSCMD) [E]. That is roughly one-third of the growth the 15%-by-2030 goal requires.

### 2.2 Supply: domestic vs LNG
| FY | Domestic production | LNG imports | Import share | Source |
|---|---|---|---|---|
| FY15 | ~33.7 bcm | ~14–15 MMT | ~38% | [K PPAC, approx] |
| FY20 | ~31.2 bcm | ~25–26 MMT | ~53% | [K PPAC, approx] |
| FY21 | ~28.7 bcm | ~25 MMT | ~54% | [K] |
| FY22 | ~34.0 bcm | ~23 MMT | ~48% | [K] |
| FY23 | ~34.5 bcm | ~19.9 MMT (CY22) | ~44% | [K] |
| FY24 | ~36.4 bcm | ~22–23 MMT | ~46% | [K] |
| FY25 | ~36 bcm | **27 MMT** | ~50% ("about half") | [V pgjonline/Reuters for 27 MMT; K for production] |
| FY26 | **~34.3 bcm** | **~26.5 MMT** | **~50.6%** | [V GAIL AR] |
| CY2025 | — | **~25.5 MMT** (Qatar 12 = 46%; UAE 3.2 = 13%; US 3.0 = 12%; Oman 2.1 = 8%; Nigeria 1.8 = 7%; Angola 1.7 = 7%; others) | — | [V GAIL FY26 PPT, citing S&P Global] |
- Monthly 2026 (PPAC via FIPI) [V]: production Jan 2,912 MMSCM (−5.0%), Feb 2,613 (−4.9%), Mar 2,874 (−4.9%), Apr 2,787 (−4.2%), May 2,835 (−4.2%). LNG imports Jan 2,825 (+16%), Feb 2,889 (+6.5%), Mar 2,888 (P, +20.5% — "expected to be much lower due to Middle East conflict"), Apr 2,266 (P, −18.4%), May 2,604 (P, −9.1%). Consumption availability Jan 5,702, Feb 5,468, Mar 5,726, Apr 5,014 (−11.2%), May 5,399 (−7%). [Jan–Mar values partly V-snip from the search summary; Mar–May fetched.]
- **India's long-term LNG contract book: 23.1 MTPA (~83.16 MMSCMD) as of Dec-2025; ~8.5 MTPA is source-specific to Qatar and UAE** (the rest portfolio contracts) [V GAIL PPT].
- **India regas capacity ~57.7 MTPA** across 8 terminals (Apr-2025–Apr-2026 utilisation in brackets): Dahej 22.5 MTPA from 31-3-2026 (92%), Hazira 5.2 (37%), Dabhol 5 (37%), Kochi 5 (27%), Ennore 5 (28%), Mundra 5 (21%), Dhamra 5 (38%), Chhara 5 (16%) [V GAIL PPT]. **Weighted utilisation ≈ 55%** [E]. Upcoming: Dabhol expansion 1 (1.3 MTPA) and 2 (6.3), Jaigarh 4, Jafrabad 5 [V].

### 2.3 Size in ₹ and US$ [E unless stated]
- **Value of gas consumed, FY26:** 69 bcm × ~0.038 mmBtu/scm ≈ 2.6 billion mmBtu. At a blended delivered price of ~$9–10/mmBtu → **~$24–26 bn ≈ ₹2.1–2.3 lakh Cr at FY26 rupee** [E]. GAIL's own marketing revenue (₹1.24 lakh Cr standalone; ₹1.45 lakh Cr consolidated incl. overseas) is roughly half [V/E].
- **LNG import bill:** 26.5 MMT × ~52 million mmBtu/MT ≈ 1.38 billion mmBtu × ~$10–11 delivered ≈ **$14–15 bn** [E]. A search snippet reports India's gas import bill **up 17% in Apr–Jan FY26** [V-snip Indian Sea Trade News; no value captured]. **FLAG: LNG import value by year not sourced.**
- **Transmission tariff pool:** ~122 MMSCMD on GAIL × ₹66/mmBtu ≈ ₹11,200 Cr (= GAIL's NG-transmission revenue) [V/E]; plus East-West (~₹4,000 Cr total income FY25, Energy InvIT [V-snip]), GSPL grid (~₹1,500–2,000 Cr [E]), others → **India gas-transmission revenue pool ≈ ₹17,000–19,000 Cr a year** [E].
- **India vs world:** ~69 bcm of a ~4,100–4,200 bcm world market ≈ **1.7%** [E; world total K, IEA]. India imported **~26 MMT of ~440 MMT world LNG trade (2025) ≈ 6%** [V GAIL PPT for 440 and 25.5].

### 2.4 Forecasts
- **PNGRB "India's Natural Gas Demand Projection 2030–2040" (Good-to-Go scenario):** **~297 MMSCMD in 2030** — CGD 88 (30%), fertiliser 65 (22%), others 57 (19%), refinery & petchem 43 (15%), power 36 (12%), steel/sponge iron 4, LNG trucking 4 — and **~495 MMSCMD in 2040** (CGD 217 = 44%, fertiliser 72, refinery & petchem 53, power 44, LNG trucking 26, steel 6, others 77). A higher "Good-to-Best" scenario exists [V GAIL PPT, citing PNGRB].
- GAIL management (Q1 FY27 call): demand to rise from "~200 MMSCMD" now to 297 by 2030; **CGD 45–46 → 80–85 MMSCMD**, **power 25–26 → 30–35**, **fertiliser +10–12** [V transcript]. CGD sector to grow ~15% CAGR to 2030 [V PPT].
- **Implied FY26→2030 CAGR to hit 297: ~12% a year** vs ~3% achieved FY22–26 [E]. Treat 297 as an aspiration.

---

## 3. Demand drivers and end-markets

| Sector | FY26 MMSCMD (share) | YoY | What drives it | 2030 (PNGRB GtG) |
|---|---|---|---|---|
| **Fertiliser (urea)** | 53.8 (28%) | −4.25% | Urea production (gas = ~70–80% of urea cost [K]); pooled-price gas; new plants (GAIL evaluating 2 × 1.27 MMTPA urea units at Saoner, Maharashtra and in Chhattisgarh [V AR/PPT; capacity "1.2 MMTPA each" in PPT]) | 65 |
| **City gas distribution** | 45.3 (24%) | **+9.71%** | CNG vehicles, PNG-D homes (~1.67 crore connections Feb-2026 → 12.5 crore target 2030; CNG stations ~8,692 → 18,000 target [V PPT, PPAC/IEA]); industrial/commercial PNG; LPG→PNG push after the 2026 LPG shock [V transcript] | 88 |
| **Power** | 21.8 (12%) | −10.62% | Peak-hour and summer balancing; very price-sensitive; stranded gas plants (~25 GW [K]) | 36 |
| **Refinery** | 15.1 (8%) | −6.15% | Hydrogen/fuel; switches to naphtha/fuel oil when LNG is dear | (with petchem) 43 |
| **Petrochemicals** | 10.7 (6%) | +16.3% | GAIL Pata, OPaL Dahej (C2/C3), BCPL; feedstock economics | — |
| **Others (industry, steel, sponge iron, glass, ceramics, own use)** | 42.5 (22%) | −11.72% | Fuel switching to alternatives when gas is costly ("switching to alternate fuels" — AR) | 57 + steel 4 + trucking 4 |
| **Total** | **189.2** | **−3.12%** | | **~297** |
Source: GAIL AR FY26 MD&A table [V]; PNGRB projection via GAIL PPT [V]. Monthly sector mix (PPAC): Jan-26 fert 29/CGD 24/power 10/refinery 10/petchem 6; Mar-26 26/30/11/7/3; Apr-26 27/29/12/6/3; May-26 30/26/12/7/3 [V FIPI; Jan V-snip] — **CGD's share jumped to ~29–30% during the war months** because priority allocation protected CNG/PNG-D while refineries/petchem were cut [E reading].

**Key demand mechanics**
- **Price elasticity is extreme outside priority sectors.** FY23 (LNG ~$19–24) consumption fell to 160.8 MMSCMD; FY24 (LNG ~$13) recovered to 188.5 [V AR; LNG prices V World Bank: Japan LNG FY23 avg $19.08, FY24 $13.26]. Power and "others" are the swing.
- **Priority allocation ladder (APM gas):** CNG (transport) and PNG-D (domestic) get APM first; then fertiliser (pooled), LPG production, then others. Government re-allocates APM away from power/non-priority to CGD [V PPT]. During the 2026 crisis the government introduced a **priority-based gas allocation framework (PNG, CNG, LPG production, fertiliser) with GAIL as nodal agency for gas pooling** [V AR].
- **The LPG shock is a structural tailwind for piped gas.** ~60% of India's LPG is imported, ~90–94% of it from the Middle East [V PPT; V AR]. LPG consumption fell **14.9% in Apr–Sep 2026** (13,797 TMT vs 16,218) [V PPAC flash Sep-26]. GAIL: "LPG has to be replaced in a very… projectile manner with natural gas… industrial customers… which used to earlier use LPG they are all now coming up for tying up natural gas"; I&C CGD connections rising [V transcript].
- **CBG (compressed biogas):** >0.6 MMSCMD; **CBG Blending Obligation up to 5% in CGD by FY2028-29**; CBG-CGD synchronisation scheme extended to 2047 [V AR/PPT]. GAIL sold ~88,174 t of CBG in FY26 under the synchronisation scheme; 443 TPAs with 344 producers [V PPT].

---

## 4. Supply side and cost structure

### 4.1 Gas supply sources and their price tiers (Oct-2026)
| Source | Volume (approx.) | Price basis | Current level | Tag |
|---|---|---|---|---|
| APM (ONGC/OIL nomination fields) | majority of domestic output [K] | 10% of Indian crude basket; floor $4; **cap $7.00 (FY27)** | Formula $11.22 (Oct-26) → capped at **$7.00** | [V PPAC] |
| New-well gas (nomination) | small; rising | APM + 20% premium (Parikh) [K] | GAIL LHC quotes "$12–13" landed [V transcript] | [K/V] |
| HPHT/deepwater (KG-D6, KG-98/2) | ~1/3 of domestic [K] | Free pricing, ceiling | **$9.89 (Oct-26–Mar-27)**; $8.90 Apr–Sep-26 | [V PPAC] |
| Long-term Brent-linked LNG (Qatar via Petronet, etc.) | ~8.5 MTPA Qatar/UAE source-specific | slope × Brent (≈12–13% slope [K]) + constant | ~$11–13 at $90–95 Brent [E] | [K/E] |
| Henry Hub-linked US LNG (GAIL 5.8 MTPA) | ~21 MMSCMD | ~115% HH + ~$3 liquefaction (Sabine) + shipping [primer/K] | HH $3.15 (Jun-26) → ~$6.6 FOB + ~$1–2 freight/regas ≈ $8–9 delivered [E] | [V HH FIPI; E] |
| JCC-linked (GAIL 2.4 MTPA) | ~8.6 MMSCMD [E] | 9-month avg Japan crude cocktail, 2-month lag | lags Brent by ~6–9 months | [V transcript] |
| Spot LNG | balancing | JKM | ~$12 avg CY25; 2026 spike to reported ~$24–25 | [V AR for CY25; V-snip for spike] |
| IGX-traded gas (GIXI) | small | exchange | **$18.6 (Jun-26), +79% YoY**; $16.9 (Apr), $10.8 (Mar) | [V FIPI] |

### 4.2 Price history (chart-ready)
- **World Bank monthly averages, FY basis [V World Bank CMO; FY25 = Apr–Dec-2024 only]:**

| FY | Brent $/bbl | Henry Hub $/mmBtu | Europe (TTF) | Japan LNG (import) |
|---|---|---|---|---|
| FY20 | 60.85 | 2.32 | 4.04 | 10.14 |
| FY21 | 44.81 | 2.40 | 4.10 | 8.05 |
| FY22 | 80.04 | 4.15 | 22.64 | 12.43 |
| FY23 | 95.44 | 5.87 | 36.39 | 19.08 |
| FY24 | 83.04 | 2.41 | 11.09 | 13.26 |
| FY25 (Apr–Dec 24) | 79.88 | 2.21 | 11.70 | 12.56 |
- Peak months: TTF **$70.04 (Aug-2022)**; Japan LNG $23.73 (Sep-2022); HH $8.79 (Aug-2022) [V World Bank].
- **2026 monthly (FIPI/PPAC/EIA/World Bank):** Mar-26 HH $3.04, TTF $17.91, Japan LNG $14.49, GIXI $10.8; Apr-26 HH $2.77, TTF $15.41, Japan LNG $11.67, GIXI $16.9; Jun-26 HH $3.15, TTF $15.17, Japan LNG $12.83, GIXI $18.6 [V].
- **CY2025 averages:** JKM ~$12.15, TTF ~$12.11 [V GAIL AR].
- **HH vs JKM spread** — the engine of GAIL's US-LNG value: CY25 ~$12.15 − ~$3.5 [K HH CY25] ≈ $8.6 gross; minus 15% HH uplift, $3 liquefaction, ~$1.5 shipping ≈ **~$3/mmBtu net advantage in a normal year** [E]; in Mar–Jun 2026 spot JKM ~$15–25 vs HH ~$3 → advantage widened to **~$8–18** [E/V-snip].

### 4.3 Domestic price history (half-yearly, $/mmBtu GCV)
| Period | APM / domestic | HPHT ceiling | Tag |
|---|---|---|---|
| Apr–Sep 2019 | 3.69 | 9.32 | [K] |
| Oct-19–Mar-20 | 3.23 | 8.43 | [K] |
| Apr–Sep 2020 | 2.39 | 5.61 | [K] |
| Oct-20–Mar-21 | 1.79 | 4.06 | [K] |
| Apr–Sep 2021 | 1.79 | 3.62 | [K] |
| Oct-21–Mar-22 | 2.90 | 6.13 | [K] |
| Apr–Sep 2022 | 6.10 | 9.92 | [K] |
| Oct-22–Mar-23 | 8.57 | 12.46 | [K] |
| Apr–Sep 2023 | APM monthly, capped **6.50** | **12.12** | [V FIPI for 6.50 and 12.12] |
| Oct-23–Mar-24 | cap 6.50 | 9.96 | [K] |
| Apr–Sep 2024 | cap 6.50 | 9.87 | [K] |
| Oct-24–Mar-25 | cap 6.50 | 10.16 | [K] |
| Apr–Sep 2025 | cap **6.75** | **10.04** | [V] |
| Oct-25–Mar-26 | cap 6.75 | **9.72** | [V] |
| Apr–Sep 2026 | cap **7.00** | **8.90** | [V] |
| Oct-26–Mar-27 | cap 7.00 (formula $11.22 for Oct-26) | **9.89** | [V PPAC 30-Sep-2026] |
- **Monthly domestic formula price (PPAC, $/mmBtu GCV):** Jul-25 6.89, Aug 7.02, Sep 6.99, Oct 6.96, Nov 6.55, Dec 6.48, Jan-26 6.25, Feb 6.21, Mar 6.81, **Apr-26 10.76, May 11.59, Jun 10.93**, Jul 8.73, Oct-26 11.22 [V FIPI/PPAC]. The war lifted the formula far above the $7 cap — ONGC/OIL received only $7; the gap is a hidden subsidy to CGD/fertiliser consumers [E].

### 4.4 Cost structure — "where ₹100 of revenue goes" (GAIL standalone FY26) [E from segment table and screener]
- Revenue ₹1,38,697 Cr (= 100).
- Gas purchase and other materials ≈ **₹88–89** (marketing pass-through gas cost dominates) [E: screener expenses ₹1,28,277 Cr = 92.5 incl. employee/other].
- Employee + other opex ≈ ₹3–4 [E].
- Operating profit (screener) **₹7.4** (₹10,324 Cr); other income ₹2.0; depreciation ₹2.3; interest ₹0.7; **PBT ₹6.5; PAT ₹5.0** [V screener SA].
- **By segment, the ₹6.8 of segment EBIT per ₹100 splits:** transmission (NG+LPG) ₹4.8, marketing ₹2.2, LHC ₹0.35, other ₹0.37, petchem −₹1.0 [V/E].
- **For a pure pipeline (GAIL NG transmission segment):** ₹100 tariff revenue → ~₹55.6 EBIT; the remaining ~₹44 is system-use gas/fuel, O&M, depreciation [V/E]. **For a pure regas terminal (Petronet, ex-pass-through):** OP ₹5,338 Cr on ~₹6,000–6,500 Cr of regas income [E].

### 4.5 Capacity
- **Pipelines:** 23,286 km operating / 28,687 km authorised (PNGRB, as on 31-3-2025) [V]; 27,427 km operational / 34,273 km authorised (PNGRB, 31-Dec-2025) [V via GAIL PPT]; GAIL's AR: "national gas grid expanded to ~27,427 km" [V].
- **GAIL INGPL capacity 163.8 MMSCMD** vs FY26 transmission of 122.18 → **~75% utilisation on the integrated network** [E]; GAIL's other networks (KG basin 19.37 MMSCMD capacity, KKBMPL 16, Cauvery 4.33, etc.) are smaller and some (KKBMPL) under-utilised [V capacities].
- **East-West (PIL/Energy InvIT):** 85 MMSCMD capacity, ~1,480 km; RIL's reserved capacity reduced from 56 to 33 MMSCMD under reworked terms [V PNGRB; V-snip].
- **LNG regas:** ~57.7 MTPA (~208 MMSCMD at 3.6) vs LNG imports ~95 MMSCMD → ~46% average (GAIL's terminal table implies ~55% weighted, Apr-25–Apr-26) [V/E].
- **LPG pipelines:** GAIL 4.58 MMTPA capacity, **100% utilised**, record 4,600 TMT FY26 [V PPT]; 3 new LPG pipelines authorised 14-Jul-2026 (Jhansi–Sitarganj 610 km, Cherlapally–Nagpur 556 km, Shikarpur–Hubli–Goa 635 km; ~1,800 km; ~₹6,700 Cr over 3 years) [V transcript].

---

## 5. Industry structure

### 5.1 Transmission: who owns the pipes (PNGRB NGPL Tariff MIS, as on 31-3-2025, km) [V]
| Operator | Authorised km | Operating km | Capacity (MMSCMD) | Tariff (₹/mmBtu) | Notes |
|---|---|---|---|---|---|
| **GAIL — Integrated network (INGPL)**: HVJ/GREP/DVPL, DVPL-2/VDPL, DUPL–Dabhol, CJHPL, DBNPL, JHBDPL–Paradip–Barauni–Guwahati (3,546 auth/3,272 op), Mumbai regional, Dabhol–Bangalore, Baroda | 14,035 | 13,658 | 163.8 | **65.69** levelised (w.e.f. 1-1-2026; order 27-11-2025); GAIL zones Z1 33.98 … Z13 101.92 | National Gas Grid core |
| GAIL — other networks (KG basin 878 km, ₹8.4; Cauvery 240; KKBMPL 1,104 auth/644 op, ₹42.79; Gujarat regional 128; Agartala 55; Assam 8; Dukli 5) | ~2,418 | ~1,990 | KG 19.37; KKBMPL 16 | various | |
| **Pipeline Infrastructure Ltd (East-West, KG–Bharuch/Ahmedabad; Brookfield's Energy InvIT)** | 1,459 | 1,483 | 85 | **74.67** (w.e.f. 1-1-2026); Z1 67.00…Z5 87.62 | Ex-Reliance; bought 2019 by Brookfield InvIT for ~₹13,000 Cr [V-snip DailyPioneer] |
| **GSPL (now GSPL Transmission Ltd)** — HP Gujarat grid 2,860/2,758 km (₹18.1); LP grid 58 km (₹4.07) | 2,918 | 2,815 | 36 + 12 | 18.1 | Gujarat intra-state grid |
| Gujarat Gas (Hazira–Ankleshwar) | 73 | 73 | 5.06 | 5.69 | now Gujarat Energy |
| IOCL Dadri–Panipat | 132 | 143 | 9.5 | 11.18 | |
| IOCL Ennore–Tuticorin (partially commissioned) | 1,431 | 1,087 | 84.67 | n.d. | |
| ONGC Uran–Trombay | 24 | 24 | 6 | 13.89 | |
| **Indradhanush Gas Grid (IGGL; NE grid)** — JV of IOCL, ONGC, GAIL, OIL, NRL (20% each [K]) | 1,656 | 196 (line-pack) | 4.75 | **166.33** (Z1 164.99, Z2 166.64; order 11-6-2025) | Viability-gap funded [K] |
| GSPL India Gasnet (GIGL): Mehsana–Bhatinda 1,940/1,200; Bhatinda–Gurdaspur 261/102 | 2,201 | 1,302 | 80.11 / 42.42 | n.d. | GSPL–IOC–HPCL–BPCL JV [K] |
| GSPL India Transco (GITL): Mallavaram–Bhopal–Bhilwara–Vijaipur | 1,881 | 364 | 78.25 | n.d. | |
| Reliance Gas Pipelines: Shahdol–Phulpur | 312 | 304 | 3.5 | Z1 96.33 | CBM evacuation |
| AGCL (Assam) / DFPCL (Uran–Taloja) | 147 | 149 | — | 1.81 / n.d. | |
| **Total** | **28,687** | **23,286** | | | |
- **GAIL operates ~15,650 of 23,286 operating km ≈ 67%** on the PNGRB 31-3-2025 basis [E]; GAIL itself says **~65% market share** and "18,000+ km" (FY26 PPT) / **~18,700 km at 31-3-2026** (AR) after commissioning ~2,000 km in FY26 (1,504 of 1,707 km of Mumbai–Nagpur–Jharsuguda; ~470 of 744 km Srikakulam–Angul; LMCs; hook-ups to IOCL's Noonmati and Bongaigaon refineries) [V AR]. **MNJPL fully operational on 31-May-2026** [V transcript].
- **Concentration:** top 3 operators (GAIL, PIL, GSPL/GTL) ≈ 85–90% of operating km and an even higher share of tariff revenue [E].
- **Who is on the National Gas Grid for Unified Tariff:** GAIL, IOCL, PIL, GSPL, RGPL, GIGL, GITL, ONGC, GGL, IGGL [V PNGRB MIS list].

### 5.2 Marketing: who sells the gas
- **GAIL ~48% share of India's gas marketing/RLNG** [V PPT]; FY26 104.21 MMSCMD of ~189 MMSCMD consumption ≈ 55% gross (but includes overseas sales) [E]. Q1 FY27 sector-wise GAIL supply 93.82 MMSCMD: fertiliser 30.01, power 9.68, CGD 33.59, overseas 8.76, others 11.78 (domestic gas 49.22 = 52%, RLNG 35.84 = 39%, overseas 8.76 = 9%) [V Q1 PPT; mapping of the domestic/RLNG split to sectors is partly ambiguous in the PDF text].
- Q4 FY26 comparison: total 101.88 — fertiliser 32.92, power 8.57, CGD 30.22, overseas 14.32, others 15.85 (domestic 49.15 = 48%, RLNG 38.41 = 38%, overseas 14.32 = 14%) [V].
- Other marketers: IOCL, BPCL, HPCL (RLNG via their terminals/bookings), ONGC (APM sold through GAIL's network), Reliance–bp (KG-D6 sold by e-auction), Shell, Torrent, Gujarat Energy (ex-GSPC trading), Adani–Total, H-Energy [K]. **Overseas:** GAIL Global Singapore trades LNG cargoes (overseas sales were ~13.6 MMSCMD in H1 FY26 vs ~4.1 a year earlier [primer]; 14.32 in Q4 FY26; 8.76 in Q1 FY27 [V]).
- **Market-share drift:** analysts note GAIL's marketing volume has lagged its transmission volume for years (CGDs increasingly source their own gas); management says the LPG→PNG shift and I&C growth will help close the gap [V transcript].

### 5.3 LNG import & regas
| Terminal | Owner | Capacity (MTPA) | Utilisation Apr-25–Apr-26 | Tag |
|---|---|---|---|---|
| Dahej | Petronet LNG (GAIL, IOCL, BPCL, ONGC 12.5% each [K]) | 22.5 (from 31-3-2026; 17.5 before [K]) | 92% | [V PPT] |
| Hazira | Shell (+ TotalEnergies 26% sold? [K—verify]) | 5.2 | 37% | [V] |
| Dabhol | **Konkan LNG — 100% GAIL from 6-Jul-2026** | 5 (expansions +1.3 and +6.3 planned) | 37% | [V] |
| Kochi | Petronet LNG | 5 | 27% | [V] |
| Ennore | IOCL (IOC LNG) | 5 | 28% | [V] |
| Mundra | GSPC LNG (GSPC 50%/Adani 50% [K]) — now within Gujarat Energy | 5 | 21% | [V] |
| Dhamra | Adani Total Private Ltd (with IOCL/GAIL capacity bookings) [K] | 5 | 38% | [V] |
| Chhara | HPCL | 5 | 16% | [V] |
| **Total** | | **~57.7** | **~55% weighted [E]** | |
- **Dabhol** was historically monsoon-constrained (no breakwater) — the breakwater was completed ~2024 [K]; an **ambient-air heating system (to cut regas fuel) completes by Jun-2027** [V transcript]. All GAIL's new LNG deals carry "West India optionality" so cargoes can be routed to Dabhol [V].

### 5.4 Unlisted / non-member players that matter
| Entity | What | Owner | Latest public numbers |
|---|---|---|---|
| **GAIL Gas Ltd** | CGD in 16 GAs + 9 GAs via 6 JVCs; 592 CNG stations, 7,93,684 DPNG (30-Jun-2026); with JVs 11.06 lakh households, 650+ CNG stations | 100% GAIL | FY26 turnover **₹12,681 Cr** (FY25 ₹12,229 Cr) [V AR]; Q1 FY27 turnover ₹3,326 Cr, PBT ₹162 Cr, PAT ₹120 Cr [V transcript]; target +275 CNG stations and +3.70 lakh DPNG in 2 years [V]. Six GAIL GAs (Varanasi, Patna, Ranchi, East Singhbhum, Cuttack, Khordha) to be transferred in [V AR] |
| **Pipeline Infrastructure Ltd (East-West Pipeline)** | 1,480-km, 48-inch KG–Gujarat line, 85 MMSCMD | Energy Infrastructure Trust (Brookfield-sponsored InvIT) | FY25 total consolidated income ₹4,036 Cr; distributions ₹1,141 Cr [V-snip]; tariff ₹74.67 from 1-1-2026 [V PNGRB]. RIL's reserved capacity cut 56 → 33 MMSCMD [V-snip]. Energy InvIT units are privately placed (not NSE-traded) [K—verify] |
| **Indradhanush Gas Grid Ltd (IGGL)** | NE gas grid, 1,656 km, 4.75 MMSCMD | IOCL, ONGC, GAIL, OIL, NRL (20% each) [K] | Tariff ₹166.33/mmBtu (order 11-6-2025) [V]; 196 km in line-pack Guwahati–Numaligarh [V] |
| **Konkan LNG Ltd** | Dabhol 5 MTPA terminal | 100% GAIL from 6-Jul-2026 | (utilisation 37%) [V] |
| **GSPL India Gasnet / GSPL India Transco** | Mehsana–Bhatinda–Jammu–Srinagar; Mallavaram–Bhilwara–Vijaipur | GSPL (now GTL)-led JVs with IOC/HPCL/BPCL [K] | partially commissioned [V] |
| **ONGC Petro-additions (OPaL)** | Dahej cracker (C2/C3 from Dahej LNG rich gas) | ONGC ~ majority, GAIL ~ 49% [K—verify current] | Ran "drastically" lower in Mar-2026 [V pgjonline] |
| **BCPL (Brahmaputra Cracker & Polymer)** | Lepetkata, Assam; 280 KTA polymers | GAIL subsidiary (~70% [K]) | Marketed 302 TMT FY26 [V] |
| **GAIL Mangalore Petrochemicals (GMPL)** | 1,250 KTA PTA (ex-MCPI, acquired via IBC 2021 [K]) | GAIL subsidiary | "Advanced stage of commissioning" Jul-2026 [V] |
| **Indian Gas Exchange (IGX)** | Gas exchange; GIXI index | IEX-led; GAIL, ONGC, IOCL stakes [K] | GIXI $18.6 Jun-26 [V] |

### 5.5 Imports and China
- India imports ~half its gas; the swing supplier is LNG. US share of world LNG to rise from ~20% (~103 MTPA, 2024) to ~33% (~234 MTPA) by 2030 with ~220 MTPA of new liquefaction mostly US and Qatar [V GAIL PPT, citing IEA/S&P]. **Global 2025 LNG trade ~440 MMTPA; US 114 (26%), Qatar 84 (19%), Australia 79 (18%) — 63% from three countries** [V PPT].
- Hormuz carries ~82 MTPA from Qatar + ~5 MTPA from UAE ≈ **~20% of global LNG** [V PPT]. New 2026–27 supply: Pluto T2 (5 MTPA, Oct-2026), ECA Ph-1 Mexico (3.3, May-2026), Qatar NFE T1 (8, Feb-2027), NLNG T7 (8, May-2027), Rio Grande P1 (16.2, Jun-2027), Port Arthur P1 (12, Sep-2027) etc. [V PPT, citing BNEF] — a supply wave from 2027 that should push spot LNG down and erode the HH-vs-JKM advantage.
- **China** matters for polymers (GAIL's petchem): Chinese PE/PP overbuild drove the FY26 polymer glut [K; primer]; India per-capita polymer use ~14–15 kg vs China 83, world 39–42, US 93 [V PPT/AR].

---

## 6. Business-model archetypes and their economics

| Archetype | Example | Revenue model | Margin (latest) | ROCE | Risk |
|---|---|---|---|---|---|
| **1. Regulated trunk pipeline** | GAIL NG transmission; GTL; PIL/East-West | Tariff (cost + 12% post-tax return on capital, levelised over volume) | GAIL NG-transmission EBIT margin **55.6% FY26 / 58.6% Q1 FY27** [V] | ~12% post-tax by design [K]; ~20% pre-tax segment [E] | Volume shortfall vs PNGRB's normative volume; tariff review cuts; under-utilised new lines |
| **2. Regas terminal (tolling)** | Petronet LNG; Konkan LNG; Shell Hazira | Regas fee per mmBtu + capacity booking; use-or-pay | Petronet OP **₹5,338 Cr FY26**; Q1 FY27 OP ₹1,535 Cr on collapsed revenue | Petronet ROCE **22.6%** (screener) [V] | Supply shocks (Qatar FM), low utilisation of new terminals |
| **3. Gas marketing/trading** | GAIL marketing; IOCL/BPCL gas; Gujarat Energy (GSPC) | Buy–sell spread; index arbitrage; overseas trading | GAIL ~₹21/mmBtu FY26; ~₹107/mmBtu Q1 FY27 [E] | n.m. (low capital, high working capital) | Index mismatch, take-or-pay, counterparty default (Gazprom 2022), destination/shipping |
| **4. City gas distribution** | IGL, MGL, ATGL, Gujarat Energy, GAIL Gas | Retail CNG/PNG margin over priority gas | IGL OPM 12% FY26 (6% Q1 FY27); MGL 18% (14%); ATGL 20% (17% Q2 FY27) [V screener] | IGL ROCE 17.5%, MGL 17.0%, ATGL 15.3% [V screener] | APM allocation cuts, EV adoption in CNG, exclusivity expiry |
| **5. Gas-based conversion (petchem, LHC)** | GAIL Pata, BCPL, OPaL; GAIL LHC | Product spread over gas | GAIL petchem −18.6% EBIT margin FY26; LHC 11.4% FY26 → 37.9% Q1 FY27 [V/E] | negative to high, cyclical | Polymer cycle, gas availability (diversion), LPG price |
- **GAIL is all five at once** (archetypes 1, 3, 5 directly; 2 via Konkan/Petronet; 4 via GAIL Gas, IGL, MGL, own GAs). This is why its consolidated profit is lumpy and why SOTP is the natural valuation lens (§C, §10).

---

## 7. Regulation and policy

### 7.1 Regulators and laws
- **PNGRB** (Petroleum & Natural Gas Regulatory Board Act, 2006): authorises pipelines, CGD GAs and LNG terminals; determines pipeline tariffs (NGPL Tariff Regulations 2008, amended); enforces common-carrier/contract-carrier capacity (**25% for third parties**) and access code [V transcript for 25%; K otherwise].
- **MoPNG / PPAC:** domestic gas price notifications (monthly APM formula; half-yearly HPHT ceiling) [V]; allocation/priority policy (CGD first) [V PPT]; Essential Commodities Act notifications during the 2026 crisis (gas declared an essential commodity; LPG production prioritised; propane/butane diverted to OMCs) [V AR/transcript].
- **DGH:** upstream contracts (PSC, HELP, nomination) [K].

### 7.2 Pipeline tariff mechanics (what writers need)
- **Cost-plus with levelisation:** PNGRB computes the tariff that, over the pipeline's economic life (now often 30–40 years [V GAIL life change]), discounts capex + opex + a **12% post-tax return on capital employed** [K — PNGRB NGPL Tariff Regulations] against **normative volumes** (capacity utilisation assumptions rising to 75% [K]). Shortfalls in early years are recovered later via levelisation; tariffs are reviewed every ~5 years [K].
- **Integrated tariff (2016 →):** PNGRB lets GAIL pool its integrated network into one tariff (the INGPL tariff) [K]. **Current: ₹65.69/mmBtu from 1-1-2026 (order 27-11-2025)**; GAIL had sought **₹78.72** [primer; V-snip Business Standard via primer]. The previous INGPL tariff was **₹58.61/mmBtu (2023)** [K — VERIFY], so the order is a ~12% rise but ~17% below the ask [E].
- **Unified Tariff (UFT) — "One Nation, One Grid, One Tariff":** introduced 1-Apr-2023 [K] with 3 zones (≤300 km, 300–1,200 km, >1,200 km). Values at 31-3-2025: levelised ₹80.97; Z1 ₹42.04, Z2 ₹80.08, Z3 ₹106.77 [V PNGRB]. (The 2023 launch values — levelised ~₹73.93; Z1 ₹39.45, Z2 ₹74.97, Z3 ₹99.90 — are the ones in our primer [primer; K].) **From 1-1-2026: two zones — Z1 (≤300 km) ₹54.00; Z2 (>300 km) ₹102.86; levelised ₹83.94; CNG & PNG-D pay Z1 ₹54.00 nationwide** → ~₹1,000 Cr/yr saving for CGD; CNG cheaper by ₹1.25–2.50/kg, PNG-D by ₹0.90–1.80/scm [V PNGRB MIS; PNG range V-snip]. GAIL Gas cut CNG/PNG prices ₹1; ATGL up to ₹4 [V-snip].
- **Who pays for the subsidy to far-off/CGD users?** Industrial/power shippers beyond 300 km now pay ₹102.86 vs ₹80.08/₹106.77 before [V]. The pool is revenue-neutral for operators by design [K].
- **System-use gas (SUG):** PNGRB now requires ≥3-year long-term sourcing for pipeline SUG; GAIL currently uses previously auctioned HPHT gas [V transcript].

### 7.3 Pricing policy
- **Kirit Parikh committee (2022) → Cabinet, 6-Apr-2023:** APM = 10% of Indian crude basket, floor $4, cap $6.50, cap to rise $0.25/yr from FY26 (→ $6.75 FY26, $7.00 FY27) [V FIPI for the numbers; K for the committee]. New-well gas 20% premium [K]. **Full market pricing of APM gas was recommended from 2027** [K — Parikh; status unclear; FLAG].
- **HPHT ceiling** = formula on alternative fuel/import prices, half-yearly [K]; $9.89 for Oct-26–Mar-27 [V].
- **CGD priority:** APM to CNG (T) and PNG (D) first; cuts in APM allocation to CGD since Oct-2024 (replaced by NWG/RLNG) squeezed CGD margins [K; consistent with IGL/MGL margin trend V screener].

### 7.4 Other policies
- **15% gas share by 2030** (MoPNG, reiterated since 2016) [K]; actual 6.13% (CY2025) [V].
- **Gas under GST?** Natural gas remains **outside GST** (VAT + central excise), causing tax cascading for industrial users [K]. Inclusion is a long-pending demand [K].
- **CBG:** SATAT scheme, CBG-CGD synchronisation (extended to 2047), CBO 1% FY26 → 5% FY29 [V AR for 5% and 2047; K for 1%].
- **Unbundling (clause 5A):** **withdrawn** by PNGRB (per GAIL, Jul-2026) [V transcript]. TSO to monitor open access only.
- **Gas storage:** government studying strategic gas storage after the 2026 crisis [V transcript].
- **Coal gasification** incentivised (₹8,500 Cr scheme, 2024 [K]) [V transcript mention].
- **New urea investment policy** published (Jul-2026; "12–16% IRR" assured-return framework mentioned by an analyst) [V transcript — the IRR figure is the analyst's, not management's].

---

## 8. History and cycles (narrative; full timeline in §G)

1. **1984–2000s: GAIL as the HBJ pipeline company.** Gas Authority of India set up in 1984 to build Hazira–Bijaipur–Jagdishpur (HBJ/HVJ) to feed fertiliser plants from Bombay High gas [K; primer]. Pata petchem (1999) and LPG plants added [V transcript "since 1999"].
2. **2004–2009: LNG arrives; KG-D6 boom and bust.** Petronet Dahej (2004) with RasGas 7.5 MTPA long-term; Reliance KG-D6 started 2009 (peak ~60+ MMSCMD in 2010) then collapsed; Reliance's East-West pipeline (2008) built for KG-D6 [K].
3. **2006: PNGRB Act**; pipelines move to regulated tariffs [K].
4. **2011–2013: GAIL's US bet.** Sabine Pass (Cheniere) 3.5 MTPA, 20-year, HH-linked; Cove Point (Dominion) 2.3 MTPA tolling; GAIL Global USA buys 20% of Carrizo's Eagle Ford shale acreage [K; V AR for Eagle Ford/Sabine/Cove Point]. GMTS (Gazprom) 2.5 MTPA 20-year deal signed 2012 [K].
5. **2014–2016: oil crash** makes Brent-linked LNG cheap; US LNG (from 2018) looked expensive; GAIL swapped and re-sold US cargoes; PSU pressure to renegotiate [K].
6. **2016: Urja Ganga (JHBDPL)** sanctioned with ₹5,176 Cr capital grant (40%) [K] — eastern India gas grid; city gas in Varanasi/Patna/Ranchi etc.
7. **2019: Brookfield's InvIT buys Reliance's East-West pipeline** for ~₹13,000 Cr [V-snip].
8. **2020–21: COVID low** — Japan LNG $8.05 FY21 avg; APM $1.79; GAIL PAT ₹6,143 Cr (FY21 cons) [V World Bank; K APM; V screener].
9. **2022: the Russia–Ukraine shock.** TTF $70 (Aug-2022); Japan LNG $23.7 [V World Bank]. **Gazprom Marketing & Trading Singapore (GMTS, later SEFE Marketing & Trading Singapore — "SMTS") stopped delivering** its contracted LNG to GAIL from mid-2022 [K]; GAIL cut supplies to customers and lost marketing volume; FY23 cons PAT fell to ₹5,596 Cr (−55%) [V screener]; India consumption fell to 160.8 MMSCMD [V AR]. APM jumped to $8.57 (Oct-22–Mar-23) [K].
10. **Apr-2023: Parikh pricing** (APM cap $6.50) and **Unified Tariff** (1-Apr-2023) [V/K].
11. **FY24–FY25: normalisation and the SMTS settlement.** HH ~$2.2–2.4, Japan LNG ~$12.5–13.3 [V World Bank] — US cargoes deeply in the money; GAIL cons PAT ₹9,903 Cr (FY24) and ₹12,463 Cr (FY25, screener) incl. **₹2,440 Cr one-time SMTS settlement** in Q3 FY25 [V AR/screener].
12. **FY26: the double squeeze.** Cheap spot LNG/soft crude narrowed marketing spreads; petchem lost ₹1,408 Cr on weak polymer prices and ~₹1,400 Cr higher input gas cost; NFCL provision ₹675 Cr; PAT −39% cons [V AR/filing]. PNGRB INGPL tariff ₹65.69 (Nov-2025) and two-zone UFT (Jan-2026) [V].
13. **28-Feb/4-Mar-2026: West Asia war and Qatar force majeure.** India LNG imports −~25%; LPG shock; Essential Commodities orders; GAIL designated gas-pooling nodal agency [V AR/pgjonline]. Ceasefire 7-Apr-2026 [V-sib]; QatarEnergy FM reportedly extended into Sep–Oct for India/Korea/Bangladesh buyers [V-snip]. GAIL's diversified book prints a record quarter (Q1 FY27 SA PAT ₹4,292 Cr) [V].
14. **May–Jul 2026:** GSPC/GSPL/Gujarat Gas restructuring effective 1-May; Gujarat Energy rename 1-Jul; GTL listing; MNJPL complete 31-May; Konkan LNG 100% GAIL 6-Jul; PNGRB drops unbundling clause [V/V-snip].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 Transmission
- **Tariff realisation (₹/mmBtu)** = NG-transmission revenue ÷ (volume × 365 × 0.038 mmBtu/scm). FY26: ₹11,206 Cr ÷ (122.18 × 365 × 0.038 = 1,695 million mmBtu) ≈ **₹66/mmBtu** (≈ the ₹65.69 levelised tariff — a good cross-check of the conversion) [E]. Q1 FY27: ₹3,042 Cr ÷ (122.36 × 91 × 0.038 = 423 million mmBtu) ≈ **₹72/mmBtu** (new tariff from Jan-2026) [E].
- **Transmission EBIT per mmBtu:** FY26 ≈ ₹37; Q1 FY27 ≈ ₹42 [E].
- **Utilisation** = volume ÷ capacity: GAIL INGPL ~75% (122 / 163.8) [E]; PNGRB tariff assumes ramp to 75% normative [K].
- **Volume history (GAIL, MMSCMD) [V PPT]:** FY22 111 → FY23 107 → FY24 120 → FY25 127 (127.32) → FY26 122 (122.18) → Q1 FY27 122.36; Q4 FY26 118.99. **FY27 guidance ~123** (was ~133–134).
- **Sensitivity:** ±1 MMSCMD ≈ ±13.9 million mmBtu/yr × ₹66 ≈ **±₹92 Cr revenue, ~±₹60–70 Cr EBIT** (high incremental margin) [E].
- **LPG transmission:** FY26 4,600 TMT (record; capacity 4.58 MMTPA, 100% utilised); revenue ₹916 Cr ≈ ₹1,990/t; EBIT ₹456 Cr (~50% margin) [V/E]. Q1 FY27 1,077 TMT (−3% QoQ; LPG import disruption) [V].

### 9.2 Marketing
- **Marketing margin (₹/mmBtu)** = marketing segment EBIT ÷ marketed mmBtu. FY26: ₹3,078 Cr ÷ (104.21 × 365 × 0.038 = 1,445 million mmBtu) ≈ **₹21/mmBtu (~$0.24 at ₹87)**. FY25: segment EBIT not fetched; management's long-run "normal" ≈ ₹4,500 Cr PBT/yr ≈ ₹31/mmBtu at ~104 MMSCMD [E]. **Q1 FY27: ₹3,481 Cr ÷ 324 million mmBtu ≈ ₹107/mmBtu (~$1.13)** [E].
- **Volume history [V PPT]:** FY22 96 → FY23 95 → FY24 98 → FY25 101 (101.49) → FY26 104 (104.21) → Q1 FY27 93.82 (Q4 FY26 101.88).
- **Portfolio [V]:** LNG portfolio **16.56 MTPA** (16.5 per Q1 call); target +7–8 MTPA by 2030 of which ~2.5 MTPA signed (Vitol, ADNOC — volumes start 2026) [V transcript]; FY26 PPT says "+4–5 MTPA by 2030". **US HH book ~21 MMSCMD (5.8 MTPA): ~45–50% sold back-to-back on HH, ~20% consumed at Pata, ~25–30% sold into Brent-linked contracts (the open "cross-index" position, partly hedged)** [V transcript]. JCC contract 2.4 MTPA (9-month average, 2-month lag) [V]. 5 long-term + 2 short-term chartered LNG vessels [V PPT].
- **Guidance:** FY27 marketing **~₹4,500 Cr PBT** (maintained after Q1's ₹3,353 Cr PBT) [V].

### 9.3 Petrochemicals
- **Capacity 870 KTA (PE 810 + PP 60)**; FY26 utilisation 94% (pre-war) [V PPT]. Sales FY22 790 → FY23 399 (Pata shutdown/gas shortage year) → FY24 787 → FY25 845 → FY26 785 TMT; **Q1 FY27 sales 37 TMT, production 51 TMT** [V].
- **Realisation/cost:** Q1 FY27 polymer price ~**₹1,46,000/t** vs ~₹98,000/t in Q4 FY26; Pata landed gas **$10.54/mmBtu** in Q1; **breakeven ~$13–14/mmBtu gas at ~₹1,30,000/t polymer** [V transcript]. FY26 revenue/t ≈ ₹96,500; EBIT/t ≈ **−₹17,900** [E].
- **Segment EBIT:** FY26 −₹1,408 Cr (SA); Q1 FY26 −₹249 Cr; Q4 FY26 −₹378 Cr; Q1 FY27 −₹123 Cr [V]. Management expects **breakeven in FY27**, plant at 100% from mid-May (50% load before) [V].
- **Pipeline:** PDH-PP Usar 500 KTA (₹11,256 Cr; commissioning slipped from Jun-2027 to ~**Dec-2027**; ~₹6,000 Cr loan → ~₹440 Cr/yr extra interest; ~₹312 Cr/yr depreciation) [V transcript/AR]; GMPL PTA 1,250 KTA "should start production shortly" [V]; C2-C3 Vijaipur–Pata pipeline (FY27) and Dabhol–Vijaipur ethane pipeline; shift of Pata from gas to **ethane** feedstock [V]. Group petchem capacity to rise **~2.7× to ~2.9 MMTPA** incl. JVs/subsidiaries [V AR].

### 9.4 LPG & liquid hydrocarbons
- **4 plants, 1.34 MMTPA capacity; FY26 production 813 TMT (61% utilisation); sales 815 TMT** (FY25 951; FY24 929; FY23 998; FY22 1,004) [V].
- Gas allocation **~1.9 MMSCMD (1.12 APM at ~$7 + ~0.78 NWG at $12–13)**, after +0.597 MMSCMD NWG allocated in Q1 FY27 [V transcript].
- **Q1 FY27: production 232 TMT (+20% QoQ), sales 225 TMT, realisation ₹90,796/t (vs ~₹54,000), EBIT ₹772.5 Cr** [V] → EBIT/t ≈ ₹34,300 vs FY26 ≈ ₹6,000 [E]. Management: prices "softened" in Q2; profitability will decline [V].

### 9.5 Company-level
- **ROCE (company, PBIT/CE):** FY22 ~20%? (PPT chart), FY23 10%, FY24 14%, FY25 16.91%, FY26 **10.04%** [V AR/PPT]. Screener cons ROCE FY26 9.67% [V].
- **RONW:** FY25 17.89% → FY26 10.49% [V AR]; Q1 FY27 annualised ~24% [V PPT chart].
- **Capex:** FY25 ₹10,512 Cr; FY26 ₹9,594 Cr (pipelines 2,900; operational 2,443; petchem 2,059; JV equity 1,594; CGD 313; E&P 240; RE 44); **FY27 plan ₹11,500–11,600 Cr** (operational 3,530; pipelines 2,401; net-zero/RE 1,950; petchem 1,486; JV equity 713; other 692; E&P 484; CGD 344); **Q1 FY27 ₹6,176 Cr** of which "operational capex incl. ship chartering" ₹4,548 Cr (likely Ind AS 116 right-of-use for new LNG charters) [V PPT/AR].
- **Dividend:** FY26 ₹5.50/share (₹5 interim + ₹0.50 final) = 51.9% payout; cash dividends paid in FY26 ₹3,945 Cr [V PPT/results]. DPS history (as declared): FY22 ₹10 (pre-Sep-2022 1:2 bonus; ~₹6.67 adjusted), FY23 ₹4, FY24 ₹5.5, FY25 ₹7.5, FY26 ₹5.5; payout 42.84% / 49.61% / 40.92% / 43.59% / 51.90% [V PPT chart; FY22 DPS reading from chart — VERIFY].

---

## 10. Global lens

**All global figures INDICATIVE; ₹ at ₹94.9/$; m-caps approximate and not fetched today [K unless tagged].**

| Company | Model | Latest-year revenue | EBITDA | Indicative m-cap | Notes |
|---|---|---|---|---|---|
| **Kinder Morgan (US)** | Largest US gas pipeline operator (~70,000 miles gas pipes [K]) | **$16.94 bn (2025)** ≈ ₹1.61 lakh Cr | **Adj. EBITDA $8.39 bn (2025)** ≈ ₹79,600 Cr; 2026 budget $8.6 bn | ~$60–65 bn [K] | [V-snip KMI Q4-2025 release coverage] |
| **Williams (US)** | Transco + gathering | ~$11–12 bn [K] | ~$7.7 bn (2025 guidance midpoint) [K] | ~$70 bn [K] | Transco = largest US interstate line |
| **Enbridge (Canada)** | Liquids + gas transmission + utility | ~C$60 bn [K] | ~C$19.5–20 bn adj. [K] (~US$14 bn) | ~US$95–100 bn [K] | |
| **TC Energy (Canada)** | Gas pipelines (post South Bow spin-off, Oct-2024) | — | ~C$10.8–11 bn comparable EBITDA (2025 outlook) [K] | ~US$50 bn [K] | |
| **Snam (Italy)** | Regulated gas TSO (RAB-based) | ~€3.6–3.8 bn [K] | ~€2.9–3.1 bn [K] | ~€18 bn [K] | Pure regulated-asset benchmark: trades ~1.1–1.3× RAB [K] |
| **Cheniere (US)** | US LNG exporter (Sabine Pass, Corpus Christi) — **GAIL's Sabine Pass counterparty** | ~$17–20 bn [K] | **Consolidated adj. EBITDA guidance $6.6–7.0 bn (2025)**; 9M-2025 $4.9 bn | ~$50 bn [K] | [V-snip Cheniere Q3-2025 release] |
| **Shell (Integrated Gas segment)** | World's largest LNG portfolio (~65–70 MTPA sales [K]) | — | ~$15–17 bn segment adj. EBITDA [K] | Shell ~$210 bn [K] | owns Hazira LNG (India) |
| **TotalEnergies (Integrated LNG)** | #2–3 LNG portfolio (~40 MTPA [K]) | — | ~$5 bn adj. net operating income (LNG) [K] | ~$140 bn [K] | 37.4% of Adani Total Gas [K]; Dhamra partner |
| **GAIL (for scale)** | | ₹1.42 lakh Cr ≈ **$15.0 bn** (FY26 cons) | ₹14,524 Cr ≈ **$1.53 bn** | ₹1,07,749 Cr ≈ **$11.4 bn** | [V; $ at ₹94.9] |
- **Scale:** GAIL's EBITDA is ~1/5 of Kinder Morgan's and ~1/9 of Enbridge's [E]. Its revenue is similar to KMI's because GAIL's revenue is mostly traded gas.
- **Multiples (indicative):** North American midstream trades ~10–12× EV/EBITDA; Snam ~11–12×; Cheniere ~9–11× [K]. **GAIL ≈ 9.1× FY26 EV/EBITDA on gross debt** ((₹1,07,749 + ₹24,831 Cr) ÷ ₹14,524 Cr) [E] and ~6.5–7× on FY27E if marketing guidance holds [E]. GAIL's 3.4% yield vs KMI ~4–4.5% [K].
- **Returns:** regulated TSOs earn ~6–8% post-tax on RAB [K]; India's 12% post-tax regulatory return is generous by global standards — the tariff design compensates for volume risk (India's pipes are under-filled) [K/E].
- **The GAIL–Cheniere link:** GAIL buys 3.5 MTPA from Sabine Pass on HH × 115% + ~$3 [K/primer]; Cheniere's EBITDA is mostly fixed liquefaction fees, while GAIL wears the HH-vs-Asian-price basis — the mirror image.

---

## 11. Technology and disruption risks

- **Electrification of transport** (EV 2/3-wheelers, e-buses) erodes CNG's growth in cities — the single biggest structural risk to CGD volumes (~45 MMSCMD of demand, 24%) [E; K].
- **Renewables + storage** displace gas in power (gas only 12% of demand and falling; India RE capacity ~274.68 GW Mar-2026) [V AR].
- **Green hydrogen** may substitute gas-based (grey) hydrogen in refineries and fertiliser (~70 MMSCMD combined) in the 2030s [E]. GAIL runs a 10 MW PEM electrolyser at Vijaipur (~4.3 TPD H₂) and H₂-blending pilot [V PPT; primer].
- **CBG** is complementary (uses the same grid) — CBO 5% by FY29 = ~2–3 MMSCMD at 2030 CGD volumes [E].
- **LNG trucking** (4 MMSCMD by 2030; 26 by 2040 per PNGRB) and **small-scale LNG** — GAIL plans 29 LNG stations [V PPT].
- **Coal gasification** could add syngas supply (not pipeline-grade) [V transcript mention].
- **Methane leakage regulation / EU methane rules** could raise costs of US LNG for European resale — minor for GAIL [K].
- **Digital/remote SCADA, compressor electrification** — GAIL electrifying compressors at Vijaipur (3.6 MW drive) [V AR].

---

## 12. What to watch

**Next 3 months**
1. **GAIL Q2 FY27 results, 30-Oct-2026** — the key test of how much of Q1's ₹3,481 Cr marketing EBIT and ₹772 Cr LHC EBIT persists. Management explicitly guided both lower in Q2 [V]. Watch: marketing PBT vs the ₹4,500 Cr FY27 guidance (₹1,147 Cr left for 9 months if guidance is unchanged); petchem returning to breakeven at 100% load; transmission vs ~123 MMSCMD; any one-off reversal (the Q4 FY26 ₹675 Cr NFCL provision "not reversed" in Q1) [V].
2. **Petronet LNG Q2 (2-Nov)** — Dahej throughput post-Qatar FM; **QatarEnergy FM status/Ras Laffan restart** (reported extensions to mid-Sep/Oct) [V-snip].
3. **PPAC October gas data and the 1-Nov domestic price notification** (formula $11.22 in Oct vs APM cap $7.00) [V].
4. **GSPL Transmission's first results (3-Nov)** — gives a clean listed comparable for a pure regulated pipeline.
**6–18 months**
5. **FY27 transmission volumes** — power demand spikes (Aug–Sep, Dec–Jan) and the LPG→PNG switch vs price-led industrial switching [V transcript].
6. **New LNG supply wave (2027)** — Qatar NFE, Rio Grande, Port Arthur, NLNG T7 → lower JKM → narrower HH advantage for GAIL; cheaper gas for Indian demand [V PPT].
7. **PNGRB tariff reviews and UFT re-zoning;** SUG long-term sourcing rule; any tariff order for MNJPL/SAPL inclusion.
8. **Petchem projects:** GMPL PTA start-up (imminent); PDH-PP Usar (~Dec-2027); Pata ethane conversion; C2-C3 pipeline.
9. **Fertiliser plants** (Saoner, Chhattisgarh) investment decision under the new urea policy [V].
10. **APM pricing reform after FY27** (cap path beyond $7.00; Parikh's proposed freeing by 2027) [K].
11. **GST inclusion of natural gas** [K].
12. **Board governance:** appointment of independent directors at GAIL [V].
**Leading indicators:** PPAC monthly consumption and LNG imports; JKM–HH spread; Brent 3-month vs 9-month JCC average; PPAC domestic gas price and HPHT ceiling; IGX GIXI; Indian polymer prices (₹/t); Saudi CP propane; CGD connections (PNGRB); regas utilisation at Dabhol.

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **The 2026 West Asia war and the LNG/LPG supply shock.** Qatar FM (4-Mar-2026) took out ~40% of India's LNG supply; India's LNG imports fell ~25%; LPG (94% Gulf-sourced) consumption fell ~15% in H1 FY27 [V AR/PPAC]. Consequence: demand destruction in price-sensitive sectors, priority allocation, Essential Commodities orders — and a windfall for portfolios that held non-Gulf, non-spot supply (GAIL's US HH and lagged JCC contracts). The crisis also strengthened the policy case for piped gas over LPG and for supply diversification and storage.
2. **The index basis in the marketing book (HH vs Brent vs JCC vs JKM).** GAIL's profit is a function of *spreads between indices*, not the gas price level. FY26 (narrow spreads, cheap spot) gave ₹3,078 Cr marketing EBIT; Q1 FY27 alone gave ₹3,481 Cr [V]. Management's ₹4,500 Cr/yr "normal" guidance is the anchor; 2027's LNG supply wave will compress the HH advantage [V PPT].
3. **Volume vs the 15% dream.** Consumption is ~189 MMSCMD and falling, gas share 6.1% and falling; PNGRB's 297 MMSCMD-by-2030 needs ~12% CAGR [V/E]. Transmission volumes (GAIL 122 MMSCMD; FY27 guide 123) drive the only truly stable earnings. CGD (+9.7%) is the one growing sector; power and industry swing on price.
4. **Regulated returns and the tariff pen.** PNGRB's 12% post-tax framework makes transmission a bond-like annuity; but the regulator decides the tariff (₹65.69 vs ₹78.72 ask), the zoning (two zones from Jan-2026, CGD at ₹54 everywhere) and the market design (unbundling now withdrawn; TSO for open access) [V]. Transmission EBIT ~₹6.2–7.1k Cr is ~2/3 of GAIL's normal earnings.
5. **Domestic price administration (APM cap, HPHT ceiling, allocation ladder).** APM capped at $7.00 while the formula reads $11.22 (Oct-2026) → upstream (ONGC) under-recovers, CGD/fertiliser are subsidised; allocation cuts to CGD compress city-gas margins (IGL OPM 17% → 6% in Q1 FY27) [V]. GAIL's LHC profit depends on APM/NWG allocation (1.9 MMSCMD) [V].
6. **Petchem spread and the capex re-mix.** FY26 petchem loss ₹1,408 Cr; breakeven needs gas ≤$13–14 at polymer ₹1.3 lakh/t [V]. GAIL is spending into petchem (PDH-PP ₹11,256 Cr; PTA 1,250 KTA; ethane shift), taking group petchem capacity ~2.7× — the largest execution and cycle risk in the story [V].
7. **Capital intensity and the national grid build-out.** ~2,000 km commissioned in FY26; ~1,500 km under construction; FY27 capex ~₹11,500 Cr [V]. New eastern/central lines (JHBDPL, MNJPL, SAPL) start under-utilised (Jharsuguda ~0.5 MMSCMD) — the tariff levelisation absorbs this but volumes must come [V transcript].
8. **Valuation discount/SOTP.** GAIL trades at ~1.2× book, ~10–11× TTM P/E and ~9× FY26 EV/EBITDA — below global midstream (~10–12×) — because ~1/3 of earnings is an unhedgeable trading book, petchem is loss-making, and PSU governance (dividend policy, no independent directors since Mar-2026) [V/E].

## B. Bespoke deep-dive themes (own sections in the report)

1. **"Three indices, one contract book": how GAIL's LNG portfolio actually makes money.** Walk through: the 5.8 MTPA US deals (Sabine Pass FOB SPA; Cove Point tolling), the 21 MMSCMD HH book split (back-to-back ~45–50% / Pata ~20% / open cross-index ~25–30%), the JCC 9-month-lag vs 3-month Brent sales mismatch, swaps and overseas trading, and why Q1 FY27 was a ₹3,481 Cr quarter that management expects to "cure within the year" [V transcript]. Include the 2022 Gazprom/SMTS default (lost supply, then ₹2,440 Cr settlement in FY25) [V AR/K].
2. **The Hormuz quarter: India's gas system under stress.** Supply (−25% LNG), price (formula $10.76–11.59, GIXI $16.9–18.6, TTF $15–18), allocation (priority framework; GAIL as nodal pooling agency), casualties (petchem output 51 TMT; OPaL cut; LPG −15%), winners (GAIL marketing/LHC) [V].
3. **One Nation, One Grid, One Tariff: the economics of a postage-stamp pipeline tariff.** Zones, levelisation, who subsidises whom (₹54 vs ₹102.86), GAIL's INGPL tariff order (₹65.69), East-West (₹74.67), NE grid (₹166.33), and why the 12% return makes new pipes viable even when half-empty [V PNGRB].
4. **Gas vs LPG vs electricity in Indian kitchens and factories.** Post-crisis policy push for PNG-D (1.67 crore → 12.5 crore by 2030 target), I&C conversions, CBG blending, EV threat to CNG [V PPT/AR].

## C. The REVENUE / PROFIT EQUATION

**GAIL group profit ≈ Transmission toll + Marketing spread + Conversion spreads − corporate costs**

1. **Transmission EBIT = Volume (MMSCMD) × 365 × 0.038 mmBtu/scm × Tariff (₹/mmBtu) × EBIT margin (~55–59%)**
   - FY27E: 123 × 365 × 0.038 = 1,706 million mmBtu × ₹70 ≈ **₹11,940 Cr revenue → ~₹6,800 Cr EBIT** at 57% [E; inputs V: 123 guide, ₹72 Q1 realisation, 58.6% Q1 margin].
   - LPG transmission: ~4,450 TMT × ~₹2,000/t ≈ ₹890 Cr revenue → ~₹450 Cr EBIT [E].
2. **Marketing EBIT = Marketed volume (MMSCMD) × 365 × 0.038 × margin (₹/mmBtu)**
   - Normal: 100 × 365 × 0.038 = 1,387 million mmBtu × ₹30 ≈ **₹4,200–4,500 Cr** (= guidance) [E].
   - Q1 FY27 run-rate: 93.82 MMSCMD × ₹107 → ₹3,481 Cr in one quarter [V/E].
3. **Petchem EBIT = Sales (t) × [polymer price − (gas mmBtu/t × gas $/mmBtu × ₹/$) − conversion]**
   - Rule of thumb from management: zero EBIT at gas $13–14 and polymer ₹1.30 lakh/t [V]. At Q1's $10.54 gas and ₹1.46 lakh/t, full-load quarterly EBIT would be strongly positive [E]; Q1 lost ₹123 Cr only because volume was 37 TMT.
4. **LHC EBIT = Sales (t) × [LPG/propane realisation − gas cost (APM $7 / NWG $12–13 on ~1.9 MMSCMD) − opex]**
   - Q1 FY27: 225 TMT × ~₹34,300/t ≈ ₹772 Cr [V/E]; FY26: 815 TMT × ~₹6,000/t ≈ ₹489 Cr [V/E].
5. **Worked FY27E standalone [E]:** Transmission NG ₹6,800 + LPG ₹450 + Marketing ₹4,500 + Petchem ₹0 + LHC ₹1,800 (Q1 ₹772 + ~₹350/qtr) + Other ₹600 = **segment EBIT ~₹14,150 Cr**; less finance cost ~₹1,250 Cr (Q1 ₹310 Cr × 4) and unallocable ~₹0 → **PBT ~₹12,900 Cr; PAT ~₹9,700 Cr at 25% tax; EPS ~₹14.7** (6,575 Cr shares) → **P/E ~11× at ₹163**. Consolidated adds ~₹600–1,000 Cr (City Gas ₹700 Cr EBIT FY26 + associates) [E].
6. **SOTP sketch (₹ Cr) [E — for the writer's framing, not a target]:**
   - Transmission (NG + LPG) NOPAT ~₹5,400 Cr × 12–14× = **₹65,000–75,000 Cr**.
   - Marketing (normal ₹4,000–4,500 Cr PBT → ~₹3,200 Cr post-tax) × 6–8× = **₹19,000–26,000 Cr**.
   - Petrochemicals (segment capital ~₹18,100 Cr at Mar-26 [V/E]) at 0.5–0.8× = **₹9,000–14,500 Cr**.
   - LHC (normal ~₹600–800 Cr EBIT) × 5–6× post-tax = **₹2,500–3,500 Cr**.
   - Listed stakes at market (Petronet 12.5% ₹5,369 Cr; IGL 22.5% ₹4,473 Cr; MGL 32.5% ₹3,306 Cr = ₹13,148 Cr) less 20–30% holding discount = **₹9,200–10,500 Cr** [E; stakes K, m-caps V].
   - Unlisted (GAIL Gas ~₹12,700 Cr revenue, BCPL, Konkan LNG, GMPL, OPaL, China Gas, overseas) **₹8,000–12,000 Cr**.
   - Less net debt (standalone total loans ₹17,414 Cr at Mar-26 [V AR], cash not captured) ≈ **−₹12,000 to −₹16,000 Cr**.
   - **Total ≈ ₹1.0–1.25 lakh Cr vs m-cap ₹1.08 lakh Cr** — the market roughly prices the pipes plus a heavily discounted everything-else.

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| India gas consumption FY26 | **~189 MMSCMD** (−3.1% YoY; ~50.6% imported) | [V GAIL AR FY26] |
| GAIL pipeline network | **~18,700 km** (~65% of India's gas transmission) | [V AR; V PPT] |
| GAIL integrated-network tariff | **₹65.69/mmBtu** (from 1-Jan-2026) | [V PNGRB MIS] |
| GAIL FY26 consolidated PAT | **₹7,582 Cr** (−39%) | [V results/PPT] |
| GAIL Q1 FY27 standalone PAT | **₹4,292 Cr** (vs ₹1,886 Cr in Q1 FY26) | [V results; screener for Q1 FY26] |
| GAIL market cap (23-Oct-2026) | **₹1,07,749 Cr** (₹163/share; P/E 10.9× TTM) | [V screener] |
Alternates: Transmission volume 122.18 MMSCMD (FY26) [V]; marketing guidance ₹4,500 Cr PBT (FY27) [V]; capex ₹11,500 Cr (FY27 plan) [V]; Unified Tariff ₹54 / ₹102.86 per mmBtu [V].

## E. Chart-ready datasets

**E1. India gas consumption by sector (MMSCMD) — GAIL AR FY26 [V]**
| Sector | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Fertiliser | 49.53 | 53.15 | 57.63 | 56.19 | 53.8 |
| CGD | 33.36 | 32.95 | 36.96 | 41.29 | 45.3 |
| Power | 27.83 | 22.34 | 24.88 | 24.39 | 21.8 |
| Refinery | 14.55 | 10.71 | 15.22 | 16.09 | 15.1 |
| Petrochemicals | 7.85 | 5.37 | 8.15 | 9.20 | 10.7 |
| Others | 35.35 | 36.31 | 45.67 | 48.14 | 42.5 |
| **Total** | **168.47** | **160.83** | **188.52** | **195.30** | **189.2** |

**E2. India monthly gas balance 2026 (MMSCM; PPAC via FIPI) [V; Jan–Feb V-snip]**
| Month | Gross production | LNG imports (P) | Consumption availability |
|---|---|---|---|
| Jan-26 | 2,912 | 2,825 | 5,702 |
| Feb-26 | 2,613 | 2,889 | 5,468 |
| Mar-26 | 2,874 | 2,888 ("much lower" expected) | 5,726 |
| Apr-26 | 2,787 | 2,266 | 5,014 |
| May-26 | 2,835 | 2,604 | 5,399 |

**E3. India LNG imports by source, CY2025 (MMT; total ~25.5) — GAIL FY26 PPT citing S&P Global [V]:** Qatar 12.0 (46%); UAE 3.2 (13%); US 3.0 (12%); Oman 2.1 (8%); Nigeria 1.8 (7%); Angola 1.7 (7%); others ~1.7 (7%) [others E = residual].

**E4. Global LNG exporters 2025 (MMTPA; ~440 total) [V PPT]:** US 114; Qatar 84; Australia 79; Russia 32; Malaysia 28; Indonesia 17; Nigeria 16; Oman 12; Algeria 10; PNG 9; Trinidad 8; UAE 5; Brunei 5; Angola 5; Peru 4; Mozambique 4; Norway 3; Eq. Guinea 3; Canada 2; Cameroon 2.

**E5. Gas price benchmarks, FY averages ($/mmBtu; Brent $/bbl) — World Bank CMO [V]:** see §4.2 table (FY20–FY25). Plus 2026 monthly points (FIPI) and CY25 JKM ~$12.15 / TTF ~$12.11 (GAIL AR) [V].

**E6. Domestic gas prices ($/mmBtu GCV):** APM cap 6.50 (FY24–FY25) → 6.75 (FY26) → 7.00 (FY27); HPHT ceiling half-yearly 12.12 (H1 FY24) … 10.04 (H1 FY26), 9.72 (H2 FY26), 8.90 (H1 FY27), 9.89 (H2 FY27) [V]; earlier half-years [K] in §4.3; monthly formula Jul-25 → Oct-26 in §4.3 [V].

**E7. PNGRB Unified Tariff (₹/mmBtu) [V; 2023 values primer/K]**
| Date | Levelised | Zone 1 | Zone 2 | Zone 3 |
|---|---|---|---|---|
| Apr-2023 (launch) | ~73.93 | 39.45 | 74.97 | 99.90 |
| 31-Mar-2025 | 80.97 | 42.04 | 80.08 | 106.77 |
| 1-Jan-2026 | 83.94 | 54.00 (≤300 km; all CNG/PNG-D) | 102.86 (>300 km) | — |

**E8. Gas pipeline network by operator (km, PNGRB 31-3-2025) [V]:** GAIL INGPL 13,658 op / 14,035 auth; GAIL other ~1,990 / ~2,418; PIL East-West 1,483 / 1,459; GSPL HP+LP grid 2,815 / 2,918; IOCL (Dadri–Panipat + Ennore–Tuticorin) 1,230 / 1,563; GIGL 1,302 / 2,201; GITL 364 / 1,881; IGGL 196 / 1,656; RGPL 304 / 312; others ~246 / ~244. **Total 23,286 / 28,687.** Dec-2025 snapshot: 27,427 operational / 34,273 authorised [V].

**E9. LNG regas capacity and utilisation (MTPA; Apr-25–Apr-26) [V PPT]:** Dahej 22.5 (92%); Hazira 5.2 (37%); Dabhol 5 (37%); Kochi 5 (27%); Ennore 5 (28%); Mundra 5 (21%); Dhamra 5 (38%); Chhara 5 (16%). Upcoming: Dabhol +1.3, +6.3; Jaigarh 4; Jafrabad 5.

**E10. India gas demand outlook (PNGRB GtG, MMSCMD) [V PPT]:** 2030 ~297 = CGD 88, Fert 65, Others 57, Refinery & Petchem 43, Power 36, Steel 4, LNG trucking 4. 2040 ~495 = CGD 217, Fert 72, Refinery & Petchem 53, Power 44, LNG trucking 26, Steel 6, Others 77. Today ~189 (FY26) [V AR].

**E11. GAIL 12-year consolidated P&L (₹ Cr) — screener [V]**
| FY | Sales | Op. profit | OPM | Other inc. | Dep. | Interest | PBT | PAT | EPS ₹ | Payout |
|---|---|---|---|---|---|---|---|---|---|---|
| FY15 | 60,557 | 5,631 | 9% | 945 | 1,433 | 652 | 4,492 | 3,160 | 4.67 | 24% |
| FY16 | 52,053 | 4,536 | 9% | 731 | 1,496 | 822 | 2,949 | 1,874 | 2.76 | 37% |
| FY17 | 48,552 | 6,021 | 12% | 1,212 | 1,541 | 509 | 5,183 | 3,374 | 4.98 | 56% |
| FY18 | 54,496 | 7,802 | 14% | 948 | 1,527 | 295 | 6,928 | 4,805 | 7.09 | 43% |
| FY19 | 76,190 | 9,938 | 13% | 1,719 | 1,667 | 159 | 9,831 | 6,553 | 9.68 | 25% |
| FY20 | 72,518 | 9,022 | 12% | 3,796 | 2,080 | 309 | 10,429 | 9,515 | 13.93 | 31% |
| FY21 | 57,372 | 7,245 | 13% | 2,833 | 2,174 | 179 | 7,725 | 6,143 | 9.21 | 36% |
| FY22 | 92,770 | 15,161 | 16% | 2,925 | 2,420 | 202 | 15,464 | 12,304 | 18.40 | 36% |
| FY23 | 1,45,668 | 7,500 | 5% | 2,822 | 2,702 | 365 | 7,256 | 5,596 | 8.54 | 59% |
| FY24 | 1,33,228 | 14,314 | 11% | 2,672 | 3,672 | 719 | 12,595 | 9,903 | 15.06 | 37% |
| FY25 | 1,41,902 | 15,412 | 11% | 5,223 | 3,799 | 740 | 16,096 | 12,463 | 18.93 | 40% |
| FY26 | 1,41,598 | 11,502 | 8% | 3,023 | 3,835 | 964 | 9,725 | 7,582 | 11.53 | 48% |
| TTM (Jun-26) | 1,47,485 | 14,939 | 10% | 2,924 | 3,829 | 1,070 | 12,964 | 9,870 | 15.03 | — |
Company-basis consolidated EBITDA (incl. other income): FY22 18,086; FY23 10,323; FY24 16,986; FY25 20,643; FY26 14,524 [V PPT]. Company PAT (owners): FY22 12,256; FY23 5,616; FY24 9,899; FY25 12,450; FY26 7,582 [V PPT] (screener's FY22–FY25 differ by ₹4–48 Cr — minority/presentation).

**E12. GAIL standalone 5-year (₹ Cr) [V AR/PPT]:** Gross turnover FY22 91,426; FY23 1,43,976; FY24 1,30,284; FY25 1,36,960; FY26 1,38,328. EBITDA 15,876 / 9,384 / 15,583 / 19,168 / 13,119. PBT 13,590 / 6,584 / 11,555 / 14,825 / 8,964. PAT 10,364 / 5,302 / 8,836 / 11,312 / 6,968. Mcap (31-Mar, ₹ Cr): FY22 ~69,137; FY23 69,203; FY24 1,19,108; FY25 1,20,160; FY26 90,539.

**E13. GAIL volumes [V PPT/AR/transcript]**
| | FY22 | FY23 | FY24 | FY25 | FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|
| NG transmission (MMSCMD) | 111 | 107 | 120 | 127.32 | 122.18 | 118.99 | 122.36 |
| NG marketing (MMSCMD) | 96 | 95 | 98 | 101.49 | 104.21 | 101.88 | 93.82 |
| Polymer sales (TMT) | 790 | 399 | 787 | 845 | 785 | n.a. | 37 (prod. 51) |
| LHC sales (TMT) | 1,004 | 998 | 929 | 951 | 815 | (prod. 194) | 225 (prod. 232) |
| LPG transmission (TMT) | 4,199 | 4,335 | 4,396 | 4,478 | 4,600 | 1,114 | 1,077 |

**E14. GAIL standalone segment EBIT (₹ Cr) — quarterly [V results filing; Q2+Q3 FY26 derived E]**
| Segment | Q1 FY26 | Q2+Q3 FY26 (derived) | Q4 FY26 | FY26 | Q1 FY27 |
|---|---|---|---|---|---|
| NG transmission | 1,557.56 | 2,789.97 | 1,881.58 | 6,229.11 | 1,782.65 |
| LPG transmission | 120.27 | 259.14 | 76.13 | 455.54 | 122.87 |
| Marketing | 1,071.60 | 2,157.30 | −151.32 | 3,077.58 | 3,481.29 |
| Petrochemicals | −248.63 | −781.88 | −377.71 | −1,408.22 | −122.53 |
| LHC | 205.01 | 140.42 | 143.89 | 489.32 | 772.50 |
| Other | 191.23 | 235.37 | 91.31 | 517.91 | 200.52 |
| **Total** | **2,897.04** | **4,800.32** | **1,663.88** | **9,361.24** | **6,237.30** |
Segment revenue (SA): NG transmission Q1 FY26 2,805.38 / Q4 FY26 2,904.36 / FY26 11,205.94 / Q1 FY27 3,042.09; marketing 31,003.09 / 31,213.20 / 1,24,244.41 / 34,437.58; petchem 1,681.18 / 1,870.76 / 7,574.42 / 646.08; LHC 1,105.40 / 1,064.29 / 4,293.33 / 2,039.21; LPG transmission 226.46 / 224.29 / 916.18 / 226.49 [V]. **FLAG:** Q2 and Q3 FY26 individual segment numbers, and FY22–FY25 segment EBIT, were not fetched (older results PDFs are scanned images); the writer should label the "8-quarter segment chart" as partial or use the derived H1/H2 split.

**E15. GAIL consolidated quarterly (₹ Cr; screener) [V]:** Sales Jun-24 34,738; Sep-24 33,889; Dec-24 36,835; Mar-25 36,440; Jun-25 35,311; Sep-25 35,537; Dec-25 35,173; Mar-26 35,577; **Jun-26 41,198**. OP 4,790 / 3,937 / 3,169 / 3,526 / 3,669 / 3,460 / 2,927 / 1,453 / **7,098**. PAT 3,183 / 2,690 / 4,084 (incl. SMTS) / 2,506 / 2,382 / 1,989 / 1,729 / 1,481 / **4,671**.

**E16. GAIL capex (₹ Cr) [V]:** FY25 10,512; FY26 9,594 (mix above); FY27 plan 11,600 (PPT) / ~11,500 (call); Q1 FY27 6,176. Earlier years: FY20–FY24 roughly ₹7,000–11,000 Cr a year [K — FLAG unsourced].

**E17. GAIL shareholding (%) — screener [V]**
| | Mar-22 | Mar-23 | Mar-24 | Mar-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|---|---|---|
| Promoter (GoI) | 51.80 | 51.91 | 51.90 | 51.88 | 51.88 | 51.79 | 51.85 |
| FII | 19.62 | 16.40 | 14.17 | 14.79 | 13.04 | 15.00 | 16.59 |
| DII | 15.90 | 17.93 | 19.56 | 19.02 | 20.50 | 19.09 | 17.88 |
| Government (other: ONGC, IOC [K]) | 7.93 | 7.93 | 7.63 | 7.61 | 7.61 | 7.59 | 7.60 |
| Public | 4.75 | 5.83 | 6.75 | 6.68 | 6.98 | 6.52 | 6.07 |
| Shareholders (lakh) | 7.27 | 9.25 | 12.27 | 16.71 | 16.18 | 15.67 | 15.20 |
GAIL's FY26 PPT shows "President of India 51.52%" [V] vs screener promoter 51.85% — small definitional gap (possibly a different date or treatment); flag.

**E18. GAIL dividends [V PPT]:** DPS FY22 ₹10 (pre-bonus), FY23 ₹4, FY24 ₹5.5, FY25 ₹7.5, FY26 ₹5.5; payout 42.84 / 49.61 / 40.92 / 43.59 / 51.90%. Buybacks: ~6.98 crore shares @₹150 (FY21); ~5.70 crore @₹190 (FY23). Bonuses: 1:3 (Mar-17), 1:3 (Mar-18), 1:1 (Jul-19), 1:2 (Sep-22) [V].

**E19. Reference-peer valuation snapshot (23-Oct-2026; screener) [V]** — see Part 2 §2.2.

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Definition | Good | Average | Weak | GAIL latest |
|---|---|---|---|---|---|
| Transmission volume (MMSCMD) | Avg daily gas carried | >130 (GAIL) / utilisation >75% | 115–130 / 60–75% | <115 / <60% | 122.36 (Q1 FY27); ~75% INGPL [V/E] |
| Tariff realisation (₹/mmBtu) | Transmission revenue ÷ mmBtu carried | ≥ approved levelised tariff | within 5% | >10% below (volume shortfall) | ~₹72 vs ₹65.69 approved [E/V] |
| Transmission EBIT margin | Segment EBIT ÷ segment revenue | >55% | 45–55% | <45% | 58.6% Q1 FY27; 55.6% FY26 [V] |
| Marketing volume (MMSCMD) | Gas bought & sold | >105 | 95–105 | <95 | 93.82 (Q1 FY27) [V] |
| Marketing margin (₹/mmBtu) | Marketing EBIT ÷ mmBtu sold | >₹40 | ₹20–40 | <₹20 | ~₹107 Q1 FY27; ~₹21 FY26 [E] |
| Marketing PBT (₹ Cr/yr) | Mgmt basis | >₹5,000 | ₹3,500–5,000 | <₹3,500 | Guide ₹4,500 FY27 [V] |
| Petchem utilisation | Production ÷ capacity | >90% | 75–90% | <75% | 94% FY26; ~23% Q1 FY27 (51/~217 qtr) [V/E] |
| Petchem EBIT/t | Segment EBIT ÷ tonnes sold | >₹15,000 | ₹0–15,000 | <0 | −₹17,900 FY26 [E] |
| Pata gas cost ($/mmBtu) | Landed feed gas | <$9 | $9–13 | >$13–14 (loss) | $10.54 Q1 FY27 [V] |
| LHC EBIT/t | | >₹20,000 | ₹8,000–20,000 | <₹8,000 | ₹34,300 Q1 FY27; ₹6,000 FY26 [E] |
| LPG transmission utilisation | TMT ÷ capacity | >95% | 85–95% | <85% | 100% FY26 [V] |
| Regas utilisation | Throughput ÷ capacity | >80% | 50–80% | <50% | Dahej 92%; Dabhol 37% [V] |
| Capex (₹ Cr/yr) | incl. JV equity | — | ₹9,000–12,000 | — | ₹11,500 plan FY27 [V] |
| ROCE (company, pre-tax) | PBIT ÷ CE | >15% | 10–15% | <10% | 10.04% FY26; ~23% Q1 annualised [V] |
| RONW | PAT ÷ NW | >15% | 10–15% | <10% | 10.49% FY26 [V] |
| Debt/Equity | | <0.3 | 0.3–0.6 | >0.6 | 0.28 FY26; 0.32 Jun-26 [V] |
| Dividend payout | | >50% | 35–50% | <35% | 51.9% FY26 [V] |
| CGD OPM (reference) | OP ÷ sales | >20% | 12–20% | <12% | IGL 12% FY26; MGL 18%; ATGL 20% [V] |

## G. Timeline (year: event)

- **1984:** Gas Authority of India Ltd incorporated to build the HBJ (HVJ) pipeline [K; primer].
- **1999:** GAIL's Pata gas-based petrochemical complex starts (GAIL "in the petrochemical industry since 1999") [V transcript].
- **2004:** Petronet LNG's Dahej terminal commissioned with RasGas term LNG [K].
- **2006:** PNGRB Act — independent downstream regulator [K].
- **2008–09:** Reliance East-West pipeline and KG-D6 gas (2009) [K].
- **2010–11:** GAIL integrated pipelines authorised by PNGRB (HVJ/GREP 19-4-2010; DVPL-VDPL 14-2-2011; DUPL-Dabhol 10-5-2010) [V PNGRB MIS].
- **2011–13:** GAIL signs Sabine Pass (3.5 MTPA) and Cove Point (2.3 MTPA tolling) US LNG deals; buys 20% of Eagle Ford acreage; Gazprom/GMTS 2.5 MTPA deal (2012) [K; V AR for US assets].
- **2013:** Renamed GAIL (India) Ltd; Maharatna status [primer; K].
- **2016:** Pradhan Mantri Urja Ganga (JHBDPL) approved with 40% capital grant [K].
- **2018:** First US LNG cargo for GAIL (Sabine Pass, Mar-2018) [K]; JHBDPL authorisation 29-1-2018 [V PNGRB].
- **2019:** Brookfield-sponsored InvIT buys East-West pipeline (~₹13,000 Cr) [V-snip]; Petronet Dahej to 17.5 MTPA [K].
- **2020:** IGGL authorised for the NE gas grid (17-11-2020) [V PNGRB]; COVID trough (APM $1.79) [K].
- **2022:** Russia–Ukraine; TTF $70 (Aug); GMTS/SMTS stops LNG deliveries to GAIL (mid-2022) [V World Bank; K]; 1:2 bonus (Sep-2022) [V].
- **Apr-2023:** Parikh APM formula (cap $6.50); PNGRB Unified Tariff launched [V/K].
- **Dec-2024 (Q3 FY25):** ₹2,440 Cr one-time settlement with SMTS booked [V AR/screener].
- **27-Nov-2025:** PNGRB INGPL tariff order — ₹65.69/mmBtu from 1-Jan-2026 (GAIL sought ₹78.72) [V/primer].
- **1-Jan-2026:** UFT re-zoned to two zones (₹54.00 / ₹102.86); CNG/PNG-D at ₹54 nationwide [V].
- **4-Feb-2026:** 60 KTA PP plant at Pata commissioned [V AR].
- **28-Feb-2026:** West Asia war begins; Hormuz closes [V-sib; V AR "late February"].
- **4-Mar-2026:** QatarEnergy force majeure; Petronet FM; GAIL's Petronet allocation cut to zero [V pgjonline].
- **28-Mar-2026:** GAIL board left without any independent director [V].
- **31-Mar-2026:** APM cap raised to $7.00 for FY27; HPHT ceiling $8.90; Dahej at 22.5 MTPA [V].
- **7-Apr-2026:** Ceasefire [V-sib].
- **1-May-2026:** GSPC + GSPL merged into Gujarat Gas; transmission demerged to GSPL Transmission [V-snip].
- **21/22-May-2026:** GAIL FY26 results (PAT ₹6,968 Cr SA; ₹7,582 Cr cons) and analyst meet [V].
- **31-May-2026:** Mumbai–Nagpur–Jharsuguda pipeline (1,707 km) fully operational [V].
- **1-Jul-2026:** Gujarat Gas renamed Gujarat Energy [V-snip].
- **6-Jul-2026:** Konkan LNG becomes 100% GAIL [V].
- **14-Jul-2026:** PNGRB authorises 3 GAIL LPG pipelines (~1,800 km, ~₹6,700 Cr) [V].
- **31-Jul-2026:** GAIL Q1 FY27: SA PAT ₹4,292 Cr; FY27 transmission guide cut to ~123 MMSCMD; PNGRB clause-5A unbundling withdrawn (per management) [V].
- **30-Sep-2026:** PPAC: Oct-2026 domestic price $11.22 (APM cap $7.00); HPHT ceiling $9.89 for Oct-26–Mar-27 [V].
- **22-Oct-2026:** Adani Total Gas reports Q2 FY27 (+34% revenue) [V].
- **30-Oct-2026:** GAIL Q2 FY27 board meeting [V].

## H. Figures I could not source well (and conflicts)

1. **India annual gas consumption/production/LNG FY15–FY21** — PPAC's historical download now requires a login (not used under the no-login rule). Values in §2.1–2.2 for those years are **[K] from memory** and on a different basis (PPAC incl. internal use) from GAIL's AR series (FY22–FY26 [V]).
2. **LNG import value (US$/₹) by year** — not sourced. A snippet says the gas import bill rose 17% in Apr–Jan FY26 [V-snip].
3. **2026 spot JKM peak** — reports range $15.07 (early March) to $24–25.39 [V-snip]; no fetched daily/monthly JKM series for 2026. Use the fetched **Japan LNG import price ($14.49 Mar-26)**, **TTF ($17.91 Mar-26)** and **GIXI ($16.9–18.6 Apr–Jun-26)** instead, or label JKM "reported".
4. **Previous GAIL INGPL tariff (₹58.61/mmBtu)** — memory [K]; verify against the 2023 PNGRB order. Our primer's "cut" framing depends on it.
5. **GAIL's ₹78.72 tariff ask** — from primer (Business Standard, 28-Nov-2025) [primer; V-snip].
6. **Exact GAIL stakes** in Petronet (12.5%), IGL (22.5%), MGL (32.5%), BCPL (~70%), OPaL (~49%), IGGL (20%), ONGC cross-holdings — [K]; not re-verified from shareholding patterns.
7. **Energy InvIT/PIL FY26 financials** — only FY25 figures [V-snip].
8. **Segment EBIT FY22–FY25 and Q2/Q3 FY26** — not fetched (Q4 FY26 results PDF is a scanned image without a text layer; earlier PDFs not pulled). E14 uses derived Q2+Q3.
9. **GAIL marketing-mix and transmission-mix pie labels (FY26 PPT)** — text extraction scrambles which % belongs to which source (APM/NAPM, RLNG, spot, mid-term, RIL&BP, overseas); treat any split as unverified.
10. **Q1 FY27 sector-supply split by domestic vs RLNG** — partially ambiguous in the PDF text.
11. **Global peers** — only KMI revenue/EBITDA and Cheniere guidance [V-snip]; all others [K] and m-caps not fetched — INDICATIVE.
12. **Conflict — FY26 consumption:** GAIL AR 189.2 MMSCMD (−3.1%) vs Care Ratings forecast ~212 MMSCMD [V-snip]. Use GAIL AR.
13. **Conflict — import dependence:** 50.6% (FY26, GAIL AR, consumption basis) vs 54.35% (CY2025, EI stats energy basis) [V]. State the basis.
14. **Conflict — Q1 FY26 marketing profit:** our primer says "~₹661 Cr (vs ~₹2,057 Cr a year earlier)"; the results filing shows Q1 FY26 standalone marketing segment EBIT **₹1,071.60 Cr** (consolidated ₹1,044.68 Cr) [V]. The primer's figure may be management "PBT" on a different basis — unverified.
15. **Network length:** 18,000+ km (PPT) vs ~18,700 km (AR) vs 13,658 km INGPL operating (PNGRB, 31-3-2025) — dates/definitions differ (see Trap 11).
16. **NWG landed price "$12–13"** (GAIL CFO) vs Parikh's 20% premium over APM (~$8.40 at a $7 cap) [V/K] — likely includes transport/other costs or refers to a different NWG pricing; flag.

---

# PART 2 — COMPANY FACT PACK (member) + REFERENCE-PEER PACK

## 2.0 Member peer table (single member; FY26; m-cap and multiples 23-Oct-2026)

| Company | NSE | Year | Revenue ₹ Cr | Growth | EBITDA margin | PAT ₹ Cr | ROCE | ROE | Net debt ₹ Cr | M-cap ₹ Cr | P/E | P/B | EV/EBITDA | Transmission vol. | Marketing vol. | Marketing EBIT |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GAIL (India) | GAIL | FY26 cons | 1,41,598 (screener) / 1,42,094 (filing) | −0.2% | 8.1% screener OP (₹11,502 Cr); 10.2% company EBITDA (₹14,524 Cr) | 7,582 | 9.67% | 8.71% | gross borrowings 24,831; screener investments 26,233 are mostly strategic → **use gross debt** | **1,07,749** | 10.9× TTM; 14.2× FY26 | 1.21× | **9.1× FY26 on gross debt (company EBITDA)**; 8.9× TTM screener OP | 122.18 MMSCMD | 104.21 MMSCMD | ₹3,078 Cr (SA) |

## 2.1 GAIL (India) Ltd (GAIL · 532155) — India's gas highway operator, largest gas marketer, gas-based petchem and LPG producer

**Full record (screener consolidated, fetched 23-Oct-2026, ~6 pm IST) [V]**
- Price **₹163**; m-cap **₹1,07,749 Cr**; 52-week high/low ₹187/₹134; P/E 10.9 (TTM); book value ₹135/share (P/B 1.21×); dividend yield 3.36%; ROCE 9.67%; ROE 8.71%; FV ₹10; shares ~657.5 crore [E from equity capital ₹6,575 Cr].
- **FY26:** sales ₹1,41,598 Cr (FY25 ₹1,41,902 Cr; −0.2%); OP ₹11,502 Cr (8%); other income ₹3,023 Cr; depreciation ₹3,835 Cr; interest ₹964 Cr; PBT ₹9,725 Cr; tax 22%; **PAT ₹7,582 Cr** (FY25 ₹12,463 Cr; −39%); EPS ₹11.53; payout 48%.
- **TTM (to Jun-26):** sales ₹1,47,485 Cr; OP ₹14,939 Cr; PAT ₹9,870 Cr; EPS ₹15.03.
- **Balance sheet Mar-26 (cons):** equity ₹6,575 Cr + reserves ₹82,474 Cr = net worth ₹89,049 Cr; borrowings ₹24,831 Cr (FY25 ₹21,595 Cr); other liabilities ₹26,688 Cr; fixed assets ₹68,667 Cr; CWIP ₹24,072 Cr; investments ₹26,233 Cr; total ₹1,40,569 Cr.
- **Cash flow FY26 (cons):** CFO ₹11,249 Cr; CFI −₹8,856 Cr; CFF −₹2,750 Cr; FCF ₹2,451 Cr (FY25 ₹7,818 Cr). CFO/OP 113%.
- **Working capital:** debtor days 22; inventory 16; payables 19; working-capital days −14 (FY26).
- **Standalone (screener):** FY26 sales ₹1,38,601 Cr; OP ₹10,324 Cr; PAT ₹6,968 Cr; ROCE 10.7%; ROE 9.63%; P/E 11.5; BV ₹113.
- **Company-reported (SA, AR FY26) [V]:** total loans ₹17,414 Cr (FY25 ₹13,577 Cr); net worth ₹66,365 Cr; D/E 0.28; ICR 10.14×; DSCR 2.47×; current ratio 0.83; capital employed ₹98,667 Cr (Mar-26) → ₹1,05,910 Cr (Jun-26); net worth ₹70,658 Cr and LT loans ₹13,823 Cr at Jun-26 (D/E 0.32) [V Q1 PPT].
- **Q1 FY27 (Jun-26):** cons sales ₹41,198 Cr (+16.7% YoY; screener), OP ₹7,098 Cr (17%), PAT ₹4,671 Cr (+96%); company: cons turnover ₹41,277 Cr, EBITDA ₹7,573 Cr, PBT ₹6,268 Cr, PAT (ex-MI) ₹4,665 Cr; SA turnover ₹38,912 Cr, EBITDA ₹6,948 Cr, PBT ₹5,773 Cr, PAT ₹4,292 Cr [V].
- **Net debt basis for the writer:** screener "borrowings − investments" would show ~net cash ₹1,400 Cr — **wrong**: the ₹26,233 Cr investments are strategic equity stakes (Petronet, IGL, MGL, China Gas, JVs). **Use gross debt (₹24,831 Cr cons; ₹17,414 Cr SA total loans)** and value stakes separately (listed stakes ≈ ₹13,148 Cr at market [E]). Consolidated borrowings likely include lease liabilities for chartered LNG ships [E — verify].

**Native KPIs [V unless tagged]**
- Transmission: 122.18 MMSCMD FY26 (127.32 FY25); 122.36 Q1 FY27; FY27 guide ~123. INGPL tariff ₹65.69 (from 1-1-26). INGPL capacity 163.8 MMSCMD. Network ~18,700 km (+~1,500 km under construction).
- Marketing: 104.21 MMSCMD FY26; 93.82 Q1 FY27 (8.76 overseas); segment EBIT ₹3,078 Cr FY26 / ₹3,481 Cr Q1 FY27; FY27 guidance ~₹4,500 Cr PBT; LNG portfolio 16.56 MTPA; HH book ~21 MMSCMD.
- Petchem: capacity 870 KTA (+BCPL 280 KTA subsidiary); sales 785 TMT FY26; Q1 FY27 production 51 TMT; EBIT −₹1,408 Cr FY26, −₹123 Cr Q1 FY27.
- LHC: 1.34 MMTPA capacity; 815 TMT sales FY26; Q1 FY27 232 TMT production; EBIT ₹489 Cr FY26, ₹772.5 Cr Q1 FY27.
- LPG transmission: 4,600 TMT FY26 (record; 4.58 MMTPA capacity); 1,077 TMT Q1 FY27; EBIT ₹456 Cr FY26.
- City gas (own GAs + GAIL Gas): own 6 GAs — 217 CNG stations, 2.63 lakh DPNG; GAIL Gas 16 GAs + 9 via JVs — 592 CNG, 7.94 lakh DPNG (Jun-26); consolidated City Gas EBIT ₹699 Cr FY26.
- Capex ₹9,594 Cr FY26; ₹11,500–11,600 Cr FY27 plan; ₹6,176 Cr Q1 FY27.
- Dividend ₹5.50/share FY26 (51.9% payout).
- Employees 5,356; R&D ₹262.67 Cr; CSR ₹179.59 Cr (AR) / ~₹189 Cr (PPT) — flag minor conflict.
- Ratings: domestic AAA (Stable); international Baa3/BBB− (capped at sovereign) [V PPT]; ICRA/CARE rating updates in 2026 (30-Sep ICRA; 6-Aug CARE) [V screener].

**Ownership (screener, Sep-2026) [V]:** Promoter (President of India) 51.85%; FII 16.59% (up from 13.04% in Mar-26); DII 17.88%; Government (other PSUs — ONGC ~4.9%, IOC ~2.4% [K]) 7.60%; public 6.07%; 15.20 lakh shareholders. GDRs listed on LSE [V PPT].

**Group structure (FY26 PPT/AR) [V]:** Subsidiaries — GAIL Gas, BCPL, GAIL Mangalore Petrochemicals, Konkan LNG (100% from 6-Jul-26), Tripura Natural Gas, Bengal Gas, GAIL Global (Singapore), GAIL Global (USA) Inc / GAIL Global (USA) LNG LLC, GAIL Global IFSC. JVs/associates — Petronet LNG, IGL, MGL, ONGC Petro-additions, ONGC Tripura Power, Indradhanush Gas Grid, Ramagundam Fertilizers, Talcher Fertilizers, Coal Gas India, China Gas Holdings, Fayum Gas (Egypt), LNG Japonica Shipping, South-East Asia Gas Pipeline, TAPI Pipeline Co., Aavantika, Bhagyanagar, Central UP Gas, Green Gas, Maharashtra Natural Gas, Vadodara Gas, Leafiniti Bioenergy (49% acquired Mar-2026), Indian Gas Exchange (stake [K]).

**Story bullets**
1. **What defines it:** a regulated pipeline annuity (~2/3 of normal EBIT) bolted to the country's largest gas trading book and a loss-making petchem arm; consolidated PAT has swung ₹5,596 Cr (FY23) → ₹12,463 Cr (FY25) → ₹7,582 Cr (FY26) → ₹4,671 Cr in a single quarter (Q1 FY27) [V].
2. **Its edge:** owns ~65% of India's transmission grid incl. all the new eastern/central trunk lines; most diversified LNG portfolio in India (US HH, JCC, Qatar, spot, new Vitol/ADNOC), which made it the system's shock absorber in the 2026 crisis (nodal agency for pooling) [V].
3. **Main risks:** marketing mean-reversion after Q1 FY27 (management guides lower); petchem capex (PDH-PP ₹11,256 Cr, delayed to ~Dec-2027) into a weak polymer cycle; transmission volume stagnation (FY27 ~123 vs 127 in FY25); PNGRB tariff decisions; PSU governance (no independent directors since 28-Mar-2026) [V].
4. **What changed since our primer (2-Jul-2026):** Q1 FY27 record quarter; FY27 transmission guidance cut; clause-5A unbundling withdrawn; Konkan LNG 100%; MNJPL complete; LPG pipelines authorised; Gujarat restructuring created a listed pure-play pipeline comparable (GTL); stock −13% vs the primer's m-cap [V].

**Sources:** screener.in/company/GAIL/consolidated/ and /GAIL/ (23-Oct-2026); BSE results filing Q1 FY27 (via screener source link /company/source/quarter/1074/6/2026/); BSE PPTs (Pname 3eda4efe… Q1 FY27; 07a07684… FY26 analyst meet); gailebank.gail.co.in/InvestorsZone/GAIL_EARNINGS_CALL_Q1_FY27.pdf; GAIL Annual Report 2025-26 (BSE AttachHis 474d7528…).

## 2.2 Reference-peer fact pack (NOT members; for industry context) — screener consolidated, fetched 23-Oct-2026 [V]

| Company | Role in gas chain | FY26 revenue ₹ Cr (FY25) | YoY | OP ₹ Cr (OPM) | PAT ₹ Cr | ROCE / ROE | Borrowings / investments ₹ Cr | M-cap ₹ Cr | P/E | P/B | EV/EBITDA [E] | Q1 FY27 rev / OP / PAT | Promoter Sep-26 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Petronet LNG** (PETRONET) | LNG import/regas (Dahej, Kochi) | 43,495 (50,982) | −14.7% | 5,338 (12.3%) | 3,913 | 22.6% / 18.3% | 2,341 / 742 | **42,952** (₹286) | 10.2 | 1.92 | 8.5× gross | 5,558 / 1,535 / 1,137 | 50.00% (GAIL, IOCL, BPCL, ONGC 12.5% each [K]) |
| **Indraprastha Gas** (IGL) | CGD Delhi NCR | 16,168 (14,913) | +8.4% | 1,876 (11.6%) | 1,544 | 17.5% / 13.3% | 98 / 3,175 | **19,882** (₹142) | 14.6 | 1.73 | ~9.0× net-cash basis | 4,587 / 294 / 238 | 45.00% (GAIL 22.5 + BPCL 22.5 [K]); Govt (Delhi) 5% |
| **Mahanagar Gas** (MGL) | CGD Mumbai | 8,246 (7,264) | +13.5% | 1,446 (17.5%) | 841 | 17.0% / 12.2% | 223 / 1,148 | **10,172** (₹1,025) | 14.2 | 1.57 | ~6.4× net cash | 2,373 / 342 / 193 | 32.50% (GAIL [K]); Govt (Maharashtra) 10% |
| **Adani Total Gas** (ATGL) | CGD (Ahmedabad etc.); Q2 reported | 5,894 (5,000) | +17.9% | 1,195 (20.3%) | 656 | 15.3% / 14.4% | 2,255 / 1,690 (Mar-26) | **58,182** (₹529) | 90.6 | 11.2 | ~49× | 1,754 / 270 / 142; **Q2: 1,944 / 328 / 173** | 74.80% (Adani + TotalEnergies [K]) |
| **Gujarat Energy** (GUJENERGY; ex-Gujarat Gas + GSPC + GSPL, transmission demerged) | CGD + gas trading (GSPC) | 23,614 (27,615 restated) | −14.5% (mixed base) | 3,087 (13.1%) | 1,678 | 11.7% / 10.2% | 3,243 / 1,010 | **20,090** (₹214) | 10.3 | 0.80 | ~7.2× (mixed basis) | 9,545 / 1,381 / 1,007 | 38.94% (GoG entities); Govt 7.38% |
| **GSPL Transmission** (GSPLTRANS) | Gujarat gas grid (~2,900 km) | n.a. (new) | — | — | — | — | — | **3,525** (₹113) | — | — | — | Q2 board 3-Nov | n.a. |
| **ONGC** | Producer (APM/NWG/deepwater gas); OPaL | 6,08,663 (6,12,064) | −0.6% | 1,03,120 (16.9%) | 49,793 | 14.2% / 11.6% | 1,74,316 / 1,01,084 | **2,84,504** (₹226) | 6.5 | 0.76 | 4.5× gross | 2,04,987 / 15,485 / 6,554 | 58.89%; Govt 10.30% |
| **Reliance** | KG-D6 gas (with bp), CBM, gas marketing | 10,55,780 (9,62,820) | +9.7% | 1,79,065 (17.0%) | 95,754 | 10.3% / 8.9% | 4,02,962 / 2,48,332 | **16,22,011** (₹1,190) | 21.7 | 1.78 | 11.3× gross | 3,09,468 / 47,517 / 23,196 | 50.44% |
| **IOCL** (IOC) | Ennore LNG, Dadri–Panipat & Ennore–Tuticorin pipelines, gas marketing | 7,84,415 (7,58,106) | +3.5% | 77,108 (9.8%) | 43,677 | 18.7% / 20.5% | 1,31,822 / 73,298 | **1,82,834** (₹129) | 5.4 | 0.83 | 4.1× gross | 2,66,407 / 4,062 / **−1,141** | 51.50%; Govt 19.57% |
| **BPCL** | Gas marketing (RLNG), IGL 22.5%, Petronet 12.5% [K] | 4,55,228 (4,40,272) | +3.4% | 41,202 (9.1%) | 25,843 | 25.6% / 28.8% | 54,424 / 30,136 | **1,22,212** (₹281) | 7.9 | 1.22 | 4.3× gross | 1,51,277 / −4,055 / **−1,873** | 52.98% |
| GSPL (old page — STALE) | pre-merger | FY25 17,370 | — | FY25 2,650 | FY25 1,637 | — | — | 15,141 (frozen) | — | — | — | last qtr Dec-25 | — |

Notes:
- **Petronet's Q1 FY27 revenue fell 53% YoY (₹5,558 Cr vs ₹11,880 Cr) while OP rose 32% (₹1,535 Cr vs ₹1,159 Cr)** — Qatar FM removed traded LNG volume; regas fees (incl. use-or-pay) held [V screener; interpretation E]. Board 2-Nov.
- **IGL and MGL Q1 FY27 margins compressed** (IGL OP −42% YoY; MGL −32%) — costlier replacement gas for lost APM/LNG [V screener; E reason].
- **IOCL and BPCL posted Q1 FY27 losses** (LPG under-recoveries and crude spike during the war) [V screener; reason E/V-sib].
- **ONGC Q1 FY27 PAT ₹6,554 Cr (−43%)** despite higher crude — APM cap $7 vs formula $10.76–11.59 and windfall-type effects [V screener; reason E — verify].
- **Gujarat Energy's history is restated for the merger**; its Q1 FY27 (₹9,545 Cr revenue) includes GSPC's trading; YoY comparisons are not like-for-like [V screener; E].
- **Energy InvIT (East-West, PIL):** FY25 total income ₹4,036 Cr; distributions ₹1,141 Cr [V-snip]; tariff ₹74.67 [V].
- **GAIL Gas (unlisted, 100% GAIL):** FY26 turnover ₹12,681 Cr; Q1 FY27 turnover ₹3,326 Cr, PAT ₹120 Cr [V].
- **Indradhanush Gas Grid (unlisted JV):** NE grid 1,656 km authorised; tariff ₹166.33 [V].
- Global peers: §10 (INDICATIVE).

## 2.3 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
{
  "asof": "2026-10-23",
  "fx_inr_per_usd": 94.9,
  "member": {
    "name": "GAIL (India) Ltd", "nse": "GAIL", "bse": "532155", "primer": "primers/gail-india.html",
    "price_inr": 163, "mcap_cr": 107749, "pe_ttm": 10.9, "pe_fy26": 14.2, "pb": 1.21, "div_yield_pct": 3.36,
    "fy26_cons": {"revenue_screener": 141598, "revenue_filing": 142094, "revenue_fy25_screener": 141902, "op_screener": 11502, "ebitda_company": 14524, "other_income": 3023, "depreciation": 3835, "interest": 964, "pbt": 9725, "pat": 7582, "roce_pct": 9.67, "roe_pct": 8.71, "borrowings": 24831, "investments_strategic": 26233, "cfo": 11249, "fcf": 2451},
    "fy26_sa": {"revenue": 138697, "ebitda": 13119, "pbt": 8964, "pat": 6968, "total_loans": 17414, "net_worth": 66365, "de": 0.28, "roce_pct": 10.04, "ronw_pct": 10.49},
    "fy25": {"cons_pat_company": 12450, "cons_pat_screener": 12463, "sa_pat": 11312, "smts_settlement_one_off": 2440},
    "q1fy27": {"cons_revenue_screener": 41198, "cons_op_screener": 7098, "cons_pat_screener": 4671, "cons_ebitda_company": 7573, "cons_pat_company": 4665, "sa_turnover": 38912, "sa_ebitda": 6948, "sa_pbt": 5773, "sa_pat": 4292},
    "segments_sa_ebit": {
      "fy26": {"ng_transmission": 6229.11, "lpg_transmission": 455.54, "marketing": 3077.58, "petchem": -1408.22, "lhc": 489.32, "other": 517.91, "total": 9361.24},
      "q1fy26": {"ng_transmission": 1557.56, "lpg_transmission": 120.27, "marketing": 1071.60, "petchem": -248.63, "lhc": 205.01, "other": 191.23, "total": 2897.04},
      "q4fy26": {"ng_transmission": 1881.58, "lpg_transmission": 76.13, "marketing": -151.32, "petchem": -377.71, "lhc": 143.89, "other": 91.31, "total": 1663.88},
      "q1fy27": {"ng_transmission": 1782.65, "lpg_transmission": 122.87, "marketing": 3481.29, "petchem": -122.53, "lhc": 772.50, "other": 200.52, "total": 6237.30}
    },
    "segments_sa_revenue_fy26": {"ng_transmission": 11205.94, "lpg_transmission": 916.18, "marketing": 124244.41, "petchem": 7574.42, "lhc": 4293.33, "other": 2210.76, "intersegment": -11749.06},
    "city_gas_cons": {"fy26_revenue": 7401.37, "fy26_ebit": 698.68, "q1fy27_revenue": 2256.11, "q1fy27_ebit": 225.62},
    "volumes": {
      "transmission_mmscmd": {"FY22": 111, "FY23": 107, "FY24": 120, "FY25": 127.32, "FY26": 122.18, "Q4FY26": 118.99, "Q1FY27": 122.36, "FY27_guide": 123},
      "marketing_mmscmd": {"FY22": 96, "FY23": 95, "FY24": 98, "FY25": 101.49, "FY26": 104.21, "Q4FY26": 101.88, "Q1FY27": 93.82},
      "polymer_sales_tmt": {"FY22": 790, "FY23": 399, "FY24": 787, "FY25": 845, "FY26": 785, "Q1FY27": 37},
      "lhc_sales_tmt": {"FY22": 1004, "FY23": 998, "FY24": 929, "FY25": 951, "FY26": 815, "Q1FY27": 225},
      "lpg_transmission_tmt": {"FY22": 4199, "FY23": 4335, "FY24": 4396, "FY25": 4478, "FY26": 4600, "Q4FY26": 1114, "Q1FY27": 1077}
    },
    "tariff_ingpl_inr_per_mmbtu": 65.69, "tariff_ask_inr_per_mmbtu": 78.72, "network_km": 18700, "ingpl_capacity_mmscmd": 163.8,
    "marketing_guidance_pbt_fy27": 4500, "capex": {"FY25": 10512, "FY26": 9594, "FY27_plan": 11600, "Q1FY27": 6176},
    "dps_inr": {"FY22": 10.0, "FY23": 4.0, "FY24": 5.5, "FY25": 7.5, "FY26": 5.5}, "payout_pct_fy26": 51.9,
    "shareholding_sep26_pct": {"promoter": 51.85, "fii": 16.59, "dii": 17.88, "govt_other": 7.60, "public": 6.07},
    "q2fy27_board": "2026-10-30"
  },
  "reference_peers": [
    {"name": "Petronet LNG", "nse": "PETRONET", "fy26_rev": 43495, "fy25_rev": 50982, "fy26_op": 5338, "fy26_pat": 3913, "mcap": 42952, "pe": 10.2, "roce": 22.6, "borrowings": 2341, "q1fy27_rev": 5558, "q1fy27_op": 1535, "q1fy27_pat": 1137, "q2_board": "2026-11-02"},
    {"name": "Indraprastha Gas", "nse": "IGL", "fy26_rev": 16168, "fy25_rev": 14913, "fy26_op": 1876, "fy26_pat": 1544, "mcap": 19882, "pe": 14.6, "roce": 17.5, "borrowings": 98, "q1fy27_rev": 4587, "q1fy27_op": 294, "q1fy27_pat": 238, "q2_board": "2026-10-30"},
    {"name": "Mahanagar Gas", "nse": "MGL", "fy26_rev": 8246, "fy25_rev": 7264, "fy26_op": 1446, "fy26_pat": 841, "mcap": 10172, "pe": 14.2, "roce": 17.0, "borrowings": 223, "q1fy27_rev": 2373, "q1fy27_op": 342, "q1fy27_pat": 193, "q2_board": null},
    {"name": "Adani Total Gas", "nse": "ATGL", "fy26_rev": 5894, "fy25_rev": 5000, "fy26_op": 1195, "fy26_pat": 656, "mcap": 58182, "pe": 90.6, "roce": 15.3, "borrowings": 2255, "q1fy27_rev": 1754, "q1fy27_op": 270, "q1fy27_pat": 142, "q2fy27_rev": 1944, "q2fy27_op": 328, "q2fy27_pat": 173},
    {"name": "Gujarat Energy (ex-Gujarat Gas)", "nse": "GUJENERGY", "fy26_rev": 23614, "fy25_rev_restated": 27615, "fy26_op": 3087, "fy26_pat": 1678, "mcap": 20090, "pe": 10.3, "roce": 11.7, "borrowings": 3243, "q1fy27_rev": 9545, "q1fy27_op": 1381, "q1fy27_pat": 1007, "note": "restated, mixed basis"},
    {"name": "GSPL Transmission", "nse": "GSPLTRANS", "mcap": 3525, "price": 113, "q2_board": "2026-11-03"},
    {"name": "ONGC", "nse": "ONGC", "fy26_rev": 608663, "fy26_op": 103120, "fy26_pat": 49793, "mcap": 284504, "pe": 6.51},
    {"name": "Reliance Industries", "nse": "RELIANCE", "fy26_rev": 1055780, "fy26_op": 179065, "fy26_pat": 95754, "mcap": 1622011, "pe": 21.7},
    {"name": "Indian Oil", "nse": "IOC", "fy26_rev": 784415, "fy26_op": 77108, "fy26_pat": 43677, "mcap": 182834, "pe": 5.44, "q1fy27_pat": -1141},
    {"name": "BPCL", "nse": "BPCL", "fy26_rev": 455228, "fy26_op": 41202, "fy26_pat": 25843, "mcap": 122212, "pe": 7.88, "q1fy27_pat": -1873}
  ]
}
```

## 2.4 Conflicts and gaps (company level)
1. Consolidated revenue: ₹1,42,094 Cr (results filing "sales/income from operations") vs ₹1,41,598 Cr (screener "sales") vs ₹1,41,716 Cr (PPT "gross turnover") [V]. Use the filing figure in prose; screener in peer tables.
2. FY25 cons PAT: ₹12,450 Cr (company, owners) vs ₹12,463 Cr (screener) [V]. Our primer uses both in different places.
3. Q1 FY27 marketing: ₹3,353 Cr "PBT" (call) vs ₹3,481 Cr standalone segment EBIT vs ₹3,608 Cr consolidated segment EBIT [V]. State the basis.
4. CSR spend: ₹179.59 Cr (AR) vs "~₹189 Cr" (PPT) [V].
5. President of India 51.52% (PPT) vs promoter 51.85% (screener) [V].
6. Fertiliser plant capacity: "1.2 MMTPA each" (PPT) vs "1.27 MMTPA"-type wording partially legible in the AR text [V/unclear].
7. Consolidated borrowings ₹24,831 Cr vs standalone total loans ₹17,414 Cr — difference = subsidiaries (BCPL, GAIL Gas, GMPL, Konkan) and probably lease liabilities [E].

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (member + reference peers; ₹ Cr; screener consolidated 23-Oct-2026 unless noted)

| Company | Role | FY26 rev | YoY % | OP | OPM % | PAT | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | M-cap | P/E | EV/EBITDA FY26 | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **GAIL (MEMBER)** | Transmission + marketing + petchem + LHC | 1,41,598 | −0.2 | 11,502 (co. EBITDA 14,524) | 8.1 (10.2) | 7,582 | 41,198 | +16.7 | 17.2 | 4,671 | 1,07,749 | 10.9 TTM | 9.1× (gross debt, co. EBITDA) | Transmission 122.36 MMSCMD; marketing EBIT ₹3,481 Cr (Q1) |
| Petronet LNG (ref) | Regas | 43,495 | −14.7 | 5,338 | 12.3 | 3,913 | 5,558 | −53.2 | 27.6 | 1,137 | 42,952 | 10.2 | 8.5× gross | Dahej util. 92% (Apr-25–Apr-26) |
| IGL (ref) | CGD | 16,168 | +8.4 | 1,876 | 11.6 | 1,544 | 4,587 | +17.2 | 6.4 | 238 | 19,882 | 14.6 | ~9.0× net cash | — |
| MGL (ref) | CGD | 8,246 | +13.5 | 1,446 | 17.5 | 841 | 2,373 | +13.9 | 14.4 | 193 | 10,172 | 14.2 | ~6.4× net cash | — |
| ATGL (ref) | CGD | 5,894 | +17.9 | 1,195 | 20.3 | 656 | 1,754 | +27.2 | 15.4 | 142 | 58,182 | 90.6 | ~49× | Q2 FY27 vol +12% |
| Gujarat Energy (ref) | CGD + trading | 23,614 | −14.5 (restated) | 3,087 | 13.1 | 1,678 | 9,545 | +63.1 (mixed) | 14.5 | 1,007 | 20,090 | 10.3 | ~7.2× | — |
| GSPL Transmission (ref) | Pipeline | n.a. | | | | | | | | | 3,525 | n.a. | n.a. | ~2,900 km Gujarat grid; tariff ₹18.1 |

## 3.2 Aggregates (reference only — this sub-sector has ONE member, so the report has no "combined" row)

All sums below are straight sums of the screener consolidated rows above on one basis (FY26 vs FY25; Q1 FY27 vs Q1 FY26; m-cap 23-Oct-2026). Ratios are ratios of sums. **Label them "India listed gas-chain reference set", never "sub-sector".** [E]

**(a) FY26 — "listed gas-chain pure plays" (GAIL + Petronet + IGL + MGL + ATGL + Gujarat Energy)**
| Group | FY26 rev | FY25 rev | YoY | OP | OPM | PAT | FY25 PAT | M-cap | Agg. P/E (m-cap ÷ FY26 PAT) |
|---|---|---|---|---|---|---|---|---|---|
| All six | 2,39,015 | 2,47,676 | −3.5% | 24,444 | 10.2% | 16,214 | 23,822 | 2,59,027 | 16.0× |
| Ex-ATGL (valuation outlier) | 2,33,121 | 2,42,676 | −3.9% | 23,249 | 10.0% | 15,558 | 23,168 | 2,00,845 | 12.9× |
| CGD trio (IGL, MGL, ATGL) | 30,308 | 27,177 | +11.5% | 4,517 | 14.9% | 3,041 | 3,407 | 88,236 | 29.0× (ex-ATGL: 30,054 ÷ 2,385 = 12.6×) |
| GAIL alone | 1,41,598 | 1,41,902 | −0.2% | 11,502 | 8.1% | 7,582 | 12,463 | 1,07,749 | 14.2× |
- GAIL = **59% of the six's revenue, 47% of OP, 47% of PAT, 42% of m-cap** [E].
- FY25 Gujarat Energy is the restated merged figure; the six-company FY25 base is therefore approximate.
- With GTL (₹3,525 Cr) the reference m-cap is ₹2,62,552 Cr.

**(b) Q1 FY27 vs Q1 FY26 (six)**
| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|
| All six | 65,015 | 60,418 | +7.6% | 10,920 | 6,969 | **+56.7%** | 7,388 | 4,683 | +57.8% |
| GAIL | 41,198 | 35,311 | +16.7% | 7,098 | 3,669 | +93.5% | 4,671 | 2,382 | +96.1% |
| Ex-GAIL (five) | 23,817 | 25,107 | −5.1% | 3,822 | 3,300 | +15.8% | 2,717 | 2,301 | +18.1% |
| CGD trio | 8,714 | 7,376 | +18.1% | 906 | 1,304 | **−30.5%** | 573 | 912 | **−37.2%** |
- **Read:** the war quarter split the chain — GAIL (diversified supply, lagged-index purchases) and Petronet (fee model) gained; CGD margins collapsed (−31% OP on +18% revenue) [E]. Gujarat Energy's +65% OP is distorted by the GSPC merger.

**(c) Balance sheet (screener Mar-26) [E]:** borrowings GAIL 24,831 + Petronet 2,341 + IGL 98 + MGL 223 + ATGL 2,255 + Gujarat Energy 3,243 = **₹32,991 Cr**; GAIL is 75% of it. Gross debt/OP for the six ≈ 1.35×.

**(d) Ownership (Sep-26):** state/PSU control dominates — GAIL 51.85% GoI; Petronet 50% (four PSUs); IGL 45% (GAIL+BPCL) + 5% Delhi; MGL 32.5% GAIL + 10% Maharashtra; Gujarat Energy 38.94% + 7.38% GoG entities; ATGL 74.8% Adani/TotalEnergies (the only private-promoter name) [V screener; stake splits K].

**(e) GAIL's listed-stake look-through [E]:** Petronet 12.5% × ₹42,952 Cr = ₹5,369 Cr; IGL 22.5% × ₹19,882 Cr = ₹4,474 Cr; MGL 32.5% × ₹10,172 Cr = ₹3,306 Cr → **₹13,148 Cr ≈ 12.2% of GAIL's m-cap** (stakes [K]).

## 3.3 Reconciliation vs primer (`primers/gail-india.html`, refreshed 2-Jul-2026)

| Item | Primer | Fetched (23-Oct-2026) | Use |
|---|---|---|---|
| FY26 cons revenue / EBITDA / PAT | ₹1,42,094 / 14,524 / 7,582 Cr | Same (filing/PPT) [V] | — |
| FY26 SA revenue / EBITDA / PAT | ₹1,38,697 / 13,119 / 6,968 Cr | Same [V] | — |
| FY25 cons PAT | ₹12,450 Cr (table) and ₹12,463 Cr (chart) | 12,450 company / 12,463 screener [V] | Pick one basis; note SMTS ₹2,440 Cr one-off |
| M-cap | ~₹1.15 lakh Cr (Jun-26) | **₹1,07,749 Cr** (₹163) [V] | Screener |
| P/E / P/B / yield | ~15× / ~1.3× (₹174 vs ₹135) / ~4.3% | **10.9× TTM (14.2× FY26) / 1.21× / 3.36%** [V] | Screener |
| ROCE / ROE | ~9.7% / ~8.7% | 9.67% / 8.71% screener cons; company SA ROCE 10.04%, RONW 10.49% [V] | Label basis |
| Network | ~16,000+ km, ~70% of grid | **~18,700 km (31-3-26), ~65% share** [V AR/PPT] | Fetched |
| Unified tariff | ₹73.93; zones 39.45/74.97/99.90 | **₹83.94 levelised; two zones ₹54.00/₹102.86 from 1-1-26** (₹80.97; 42.04/80.08/106.77 at Mar-25) [V] | Fetched |
| GAIL tariff | "cut to ₹65.69 (below ask ₹78.72)" | ₹65.69 from 1-1-26 [V]; prior ₹58.61 [K] → an increase below ask | Reframe |
| FY27 transmission guidance | ~133–134 MMSCMD | **~123 MMSCMD** (Q1 call) [V] | Fetched |
| Q1 FY26 marketing profit | ~₹661 Cr vs ~₹2,057 Cr | Segment EBIT ₹1,071.60 Cr SA [V] | Verify / relabel |
| Petchem capacity | ~810 KTA | 870 KTA (810 PE + 60 PP from 4-Feb-26) [V] | Fetched |
| Polymer "output 768 TMT" | production | Sales 785 TMT [V AR] | Label both |
| US LNG pricing | "~115% HH + ~$3" for all 5.8 MTPA | Sabine SPA (HH-linked); Cove Point is tolling (GAIL buys gas + pays liquefaction) [V AR; K] | Clarify |
| Capex FY26 | ₹9,594 Cr | Same [V]; FY27 plan ₹11,500–11,600 Cr [V] | Add |
| Renewables | ~154 MW; ~1 GW ambition | 154 MW; 1,063 MW near-term programme; **3.6 GW by 2035** target [V PPT/AR] | Update |
| Ownership | GoI ~51.9%; DIIs ~20%+; FIIs ~13% | 51.85% / 17.88% / 16.59% (Sep-26) [V] | Screener |
| CGD stakes | "Mahanagar Gas via associates" | MGL is a JV/associate (GAIL ~32.5% [K]) | Minor wording |
| Unbundling | not covered | PNGRB withdrew clause 5A (per GAIL, Jul-26) [V] | Add |
| Konkan LNG | not covered | 100% GAIL from 6-Jul-26 [V] | Add |
| Q1 FY27 | not covered | SA PAT ₹4,292 Cr; cons ₹4,665 Cr; marketing EBIT ₹3,481 Cr; LHC ₹772.5 Cr; petchem −₹122.5 Cr (51 TMT output) [V] | Add |

## 3.4 Primer issues (format as primer-issues.md)

### From Gas Transmission & Marketing research (2026-10-23, gas-transmission-industry.md §3.4)

- **gail-india.html — valuation stale:** m-cap "~₹1.15 lakh Cr (Jun '26)" → **₹1,07,749 Cr at ₹163 (23-Oct-2026)**; "~15× trailing P/E" → **10.9× TTM consolidated** (14.2× on FY26); "~1.3× book (₹174 vs ~₹135)" → **1.21×**; "~4.3% dividend yield" → **3.36%** (screener) / ~3.4% on ₹5.50 DPS. FII holding "~13%" → **16.59% (Sep-26)**.
- **gail-india.html — network length and share stale:** "~16,000+ km… roughly 70% of India's grid" → **~18,700 km at 31-Mar-2026, ~65% share** (GAIL AR FY26; FY26 analyst-meet PPT). Mumbai–Nagpur–Jharsuguda (1,707 km) became fully operational on 31-May-2026; ~1,500 km more under construction.
- **gail-india.html — Unified Tariff numbers are the 2023 launch values:** "Zone 1 ~₹39.45, Zone 2 ~₹74.97, Zone 3 ~₹99.90 (~₹73.93 blended)" → from **1-Jan-2026 PNGRB moved to two zones: ₹54.00/mmBtu (≤300 km) and ₹102.86 (>300 km), levelised ₹83.94; CNG and domestic PNG pay ₹54 nationwide** (PNGRB NGPL Tariff MIS, 13-Jan-2026). The three-zone values just before the change were ₹42.04/₹80.08/₹106.77 (levelised ₹80.97).
- **gail-india.html — tariff "cut" framing:** the Nov-2025 order set GAIL's integrated tariff at **₹65.69/mmBtu from 1-Jan-2026**, below the ₹78.72 sought. The previous INGPL tariff was ~₹58.61 [K — verify], so it was an **increase that fell short of the ask**, not a cut. Fix §02, §03, timeline and bear case.
- **gail-india.html — FY27 transmission guidance stale:** "management targets ~133–134 MMSCMD by FY27" (§02, §07, bull case) → **cut to ~123 MMSCMD** on the Q1 FY27 call (31-Jul-2026), "assumption that the geopolitical situation continues".
- **gail-india.html — Q1 FY27 and the West Asia war omitted (refreshed 2-Jul):** add Q1 FY27 — SA PAT **₹4,292 Cr** (Q4 FY26 ₹1,262 Cr), cons PAT ₹4,665 Cr, cons EBITDA ₹7,573 Cr; marketing EBIT **₹3,481 Cr** (JCC 9-month-lag vs 3-month-Brent arbitrage + HH discount; 8 spot cargoes; Qatar FM via Petronet); **LHC EBIT ₹772.5 Cr** (LPG ₹90,796/t; +0.597 MMSCMD new-well gas); **petchem output 51 TMT** (gas diverted to priority sectors under the Essential Commodities notification), loss ₹122.5 Cr; FY27 marketing guidance **~₹4,500 Cr PBT** (maintained); GAIL designated nodal agency for gas pooling.
- **gail-india.html — FY25 "record" profit explained wrongly:** §09 says FY25 was a "strong LNG spread" year. FY25 PBT included a **one-time ₹2,440 Cr settlement with SMTS** (SEFE Marketing & Trading Singapore — the former Gazprom Marketing & Trading Singapore that defaulted on LNG deliveries in 2022) (GAIL AR FY26 MD&A). It sits in Q3 FY25 other income (₹3,211 Cr). The 2022 Gazprom default — the main reason FY23 PAT fell to ₹5,596 Cr — is not mentioned anywhere.
- **gail-india.html — FY26 profit-fall drivers incomplete:** AR attributes the PBT fall to the SMTS base effect, **~₹1,400 Cr higher petchem input-gas cost** and a **~₹675 Cr provision on NFCL dues**. Also: Q4 FY26 one-offs incl. **₹475 Cr + ₹189 Cr depreciation write-backs from extending pipeline life 30→40 years and PE-plant life 25→35 years**. Depreciation now guided at ~₹3,200–3,300 Cr a year.
- **gail-india.html — FY25 PAT inconsistency:** table "₹12,450 Cr" vs chart "₹12,463 Cr" (company vs screener basis). FY24 chart ₹9,903 Cr (screener) vs company ₹9,899 Cr. Pick one basis and label it.
- **gail-india.html — Q1 FY26 marketing figure unverified:** "Q1 FY26 marketing profit fell to ~₹661 Cr from ~₹2,057 Cr" — the results filing shows Q1 FY26 standalone marketing segment EBIT **₹1,071.60 Cr** (cons ₹1,044.68 Cr). Verify the source of ₹661 Cr or replace.
- **gail-india.html — petchem capacity and volumes:** "~810 KTA" → **870 KTA (810 KTA PE + 60 KTA PP commissioned 4-Feb-2026)**; "polymer output 768 TMT" is production — sales were 785 TMT (AR). Add BCPL (280 KTA subsidiary; 302 TMT marketed FY26). PDH-PP Usar (500 KTA, ₹11,256 Cr) commissioning has slipped to ~Dec-2027 (Q1 call); GMPL 1,250 KTA PTA "in advanced stage of commissioning". Petchem breakeven: gas ~$13–14/mmBtu at ~₹1.3 lakh/t polymer.
- **gail-india.html — US LNG description:** "~115% of HH plus about $3" applies to the **Sabine Pass** SPA (3.5 MTPA); **Cove Point (2.3 MTPA) is a tolling/liquefaction-capacity arrangement** where GAIL buys US gas and pays a liquefaction fee (AR: "LNG Tolling Agreement with Cove Point"). Add the HH-book split from the Q1 call: ~21 MMSCMD, ~45–50% back-to-back HH, ~20% to Pata, ~25–30% open cross-index (partly hedged); and the 2.4 MTPA JCC contract (9-month average, 2-month lag).
- **gail-india.html — unbundling/pipeline-subsidiary risk missing:** PNGRB's clause-5A requirement to separate transmission and marketing from 1-Apr-2027 has been **withdrawn** (per GAIL, Jul-2026); a TSO will only monitor 25% open access. Add as a removed overhang.
- **gail-india.html — omissions (corporate):** **Konkan LNG became a wholly-owned subsidiary from 6-Jul-2026** (NCLT 3-Jun-2026); **3 LPG pipelines authorised 14-Jul-2026** (~1,800 km, ~₹6,700 Cr); **no independent director on the board since 28-Mar-2026** (audit committee of three whole-time directors); six GAIL CGD GAs moving to GAIL Gas; Leafiniti Bioenergy 49% (CBG) acquired Mar-2026; GAIL Gas FY26 turnover ₹12,681 Cr.
- **gail-india.html — capex guidance:** add FY27 plan **₹11,500–11,600 Cr** (net-zero/RE ₹1,950 Cr, pipelines ₹2,401 Cr, operational ₹3,530 Cr, petchem ₹1,486 Cr) and Q1 FY27 ₹6,176 Cr (incl. ₹4,548 Cr "operational capex incl. ship chartering").
- **gail-india.html — renewables target:** "targeting ~1 GW" → programme to 1,063 MW under way (600 MW solar + 550 MWh BESS UP; 100 MW solar MH; 178.2 MW wind MH) and a **3.6 GW-by-2035** target (AR/PPT).
- **gail-india.html — gas-economy facts:** gas share is **6.13% (CY2025), down from 6.58%** (EI Statistical Review 2026 via GAIL AR) — "~6%" is fine but the trend is *down*; India's FY26 consumption **fell 3.1% to ~189 MMSCMD**; PNGRB's 2030 projection (~297 MMSCMD) and CGD 45 → 80–85 MMSCMD are worth adding. "India still imports about half its gas" ✓ (50.6% FY26).
- **gail-india.html — CGD wording:** "Mahanagar Gas via associates" — MGL and IGL are JV/associate stakes held directly by GAIL (MGL ~32.5%, IGL ~22.5% [K]); listed-stake value ≈ ₹13,150 Cr at 23-Oct prices incl. Petronet 12.5% [E].
- **gail-india.html — ownership detail:** promoter 51.85% (Sep-26) vs "President of India 51.52%" in the FY26 PPT; other PSUs (ONGC, IOC) hold a further 7.60% ("Government" on screener).
- **General:** the primer's sources list cites ₹78.72 ask and "Q1 FY26 ₹661 Cr" from secondary press; replace with filings where possible (PNGRB MIS; GAIL results PDFs).

## 3.5 Key source URLs
- **Screener (23-Oct-2026):** https://www.screener.in/company/GAIL/consolidated/ · https://www.screener.in/company/GAIL/ · /PETRONET/consolidated/ · /IGL/consolidated/ · /MGL/consolidated/ · /ATGL/consolidated/ · /ONGC/consolidated/ · /RELIANCE/consolidated/ · /IOC/consolidated/ · /BPCL/consolidated/ · /GUJENERGY/consolidated/ · /GSPLTRANS/ · /GSPL/consolidated/ (stale)
- **GAIL filings:** Q1 FY27 results (screener source link) https://www.screener.in/company/source/quarter/1074/6/2026/ · Q1 FY27 PPT https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3eda4efe-9d6d-438f-941c-a3a8a2389644.pdf · FY26 analyst meet PPT https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=07a07684-1220-4a04-a416-ac2cb360abbf.pdf · Q1 FY27 call transcript https://gailebank.gail.co.in/InvestorsZone/GAIL_EARNINGS_CALL_Q1_FY27.pdf · Annual Report 2025-26 https://www.bseindia.com/xml-data/corpfiling/AttachHis/474d7528-dc8d-40e6-bc63-d81008cbb813.pdf
- **PNGRB:** https://pngrb.gov.in/data-bank/20260113-NGPL-Tariff-MIS.pdf
- **PPAC:** https://ppac.gov.in/download.php?file=whatsnew/1790767900_Domestic_Natural_Gas_Price_October_2026.pdf · https://ppac.gov.in/download.php?file=whatsnew/1790767903_Gas_Price_Ceiling_October2026-March2027.pdf · https://ppac.gov.in/download.php?file=menu/1790857950_WEB_UPLOAD_Sep26_Flash_Report.pdf
- **FIPI Policy & Economic Reports (PPAC data):** https://fipi.org.in/Policy_Economic_Report/July26/files/basic-html/page47.html (and page48–50) · https://fipi.org.in/Policy_Economic_Report/May26/files/basic-html/page47.html (and 48–51) · https://fipi.org.in/Policy_Economic_Report/April26/files/basic-html/page38.html (and 39–42)
- **World Bank CMO monthly:** https://thedocs.worldbank.org/en/doc/5d903e848db1d1b83e0ec8f744e55570-0350012021/related/CMO-Historical-Data-Monthly.xlsx (file version ends Dec-2024)
- **West Asia/LNG:** https://pgjonline.com/news/2026/march/india-s-gail-weighs-gas-supply-cuts-after-petronet-lng-force-majeure [V] · https://moneylife.in/article/global-lng-crisis-deepens-qatar-declares-force-majeure-india-faces-supply-shock-with-spot-prices-doubling-to-24mmbtu/79846.html [V-snip; 403 on fetch]
- **GSPC restructuring [V-snip]:** https://insights.dsij.in/dsijarticledetail/gspc-group-restructuring-effective-from-may-1-2026-ggl-merger-gtl-demerger-share-swap-ratios-announced-id003-56862 · https://filingreader.com/news-wire/mumbai/2026-07-08/gspl-transmission-allots-312m-shares-to-gujarat-energy · https://themachinemaker.com/news/gspc-group-restructuring-comes-into-effect/
- **Unified tariff press [V-snip]:** https://indianinfrastructure.com/2025/12/16/pngrb-rationalises-unified-tariff-structure-for-natural-gas-transportation/
- **Global [V-snip]:** https://www.offshore-technology.com/news/kinder-morgan-surge-q4-2025-net-income/ · Cheniere Q3-2025 release (worldports.org summary)

---

# PART 4 — Deep-research supplement (2026-10-23)

Second, primary-source pass by the deep-research agent (same day as Parts 1–3). **Reading order note:** because Part 4 was appended in chunks while research was still running, the company material (4.2) comes first and the corrections (4.0 Supersedes) and the 40-figure verification table (4.1) come later in this Part, after 4.3. Numbering follows the brief; physical order is 4.2 → 4.3 → 4.0 → 4.1 → 4.4 → 4.5. **Where Part 4 and Parts 1–3 disagree, Part 4 wins** (see 4.0).

**Primary documents fetched and read in this pass ([V] below = read this session from these):**
- GAIL Q1 FY27 earnings-call transcript (31-Jul-2026), gailebank.gail.co.in/InvestorsZone/GAIL_EARNINGS_CALL_Q1_FY27.pdf — read in full (13 pp).
- GAIL Annual Report FY2025-26 (BSE AttachHis 474d7528…; 426 pp) — MD&A, BRSR investee list, Ind AS 112 note 47 (ownership), note 29 (contingent liabilities & commitments), segment note (FY26 and FY25), AGM related-party resolutions.
- GAIL standalone results filings (via screener "source" links to the BSE PDFs): **Q4 FY22 (FY22 + FY21 annual columns), Q4 FY23 (FY23), Q4 FY25 (FY25 + FY24 annual, Q4 FY25, Q3 FY25, Q4 FY24), Q1 FY26 (Q1 FY26, Q4 FY25, Q1 FY25), Q2 FY26 (emphasis-of-matter notes; segment table is a poor scan), Q3 FY26 (Q3 FY26, Q2 FY26, Q3 FY25, 9M FY26, 9M FY25)**, and Q1 FY27 (already used in Parts 1–3).
- GAIL FY26 Investors' & Analysts' Meet PPT (22-May-2026) — **slides 18 and 19 rendered to PNG and read visually** (transmission-mix and marketing-mix pies, which the text layer scrambles).
- GAIL Reg. 30 disclosure of 28-Nov-2025 on the PNGRB INGPL tariff order (NSE archive PDF).
- Others as cited in 4.3 (PPAC, PIB, PNGRB, World Bank, company releases).

## 4.2 GAIL (India) Ltd — member deep-dive

### 4.2.1 Management-commentary digest — Q1 FY27 call (31-Jul-2026; Director (Finance) S. K. Sinha, ED Marketing Sumit Kishore, IR head Anjana Sanjeeva; host Ambit) [V transcript]

**Guidance (paraphrased):**
| Item | FY27 guidance / statement | Comment |
|---|---|---|
| Gas marketing | **~₹4,500 Cr PBT for FY27, maintained**; "will review and revise, if required, after subsequent quarters" | Q1 alone was **₹3,353 Cr at PBT level** (segment PBIT ₹3,481 Cr). Implies only ~₹1,150 Cr for Q2–Q4 if unchanged — i.e., management is signalling a sharp fall or deliberately conservative |
| NG transmission volume | **~123 MMSCMD for FY27** (cut from ~133–134 earlier), "with the assumption that the geopolitical situation continues" | Q1 122.36; FY26 122.18; Q1 rise of ~4 MMSCMD came from **third-party shippers' volume** |
| Petrochemicals | **Breakeven in FY27**; Pata at 100% load now (50% load from mid-May) | Q1 segment loss: call says "₹130 Cr"; filing −₹122.53 Cr (basis difference) |
| LHC | Production "likely to remain in this range" (~232 TMT/qtr) on ~1.9 MMSCMD gas; **profitability to decline in Q2** as LPG prices softened | Gas: 1.12 MMSCMD APM (~$7) + ~0.78 NWG (~$12–13). Earlier allocation 1.32 MMSCMD; +0.597 NWG added |
| Capex | **~₹11,500 Cr FY27, "on track"**; Q1 ₹6,176 Cr | |
| Depreciation | **~₹3,200–3,300 Cr a year** after life extension (pipelines 40 yrs; petchem 35 yrs) **+ ~₹312 Cr** when PDH-PP (₹11,256 Cr, ~4% dep. rate) is commissioned | |
| Finance cost | Q1 ₹310 Cr → **~₹1,200–1,300 Cr a year**; **+~₹440 Cr a year** once PDH-PP interest stops being capitalised (₹6,000 Cr loan × ~7%) | |
| PDH-PP Usar (500 KTA) | Schedule June-2027, **"another 6 to 7 months… may be completed by December '27"** | No profit built in for FY28 for GMPL/PDH-PP |
| GMPL PTA (1,250 KTA) | "Advanced stage of commissioning… should start production shortly" | |
| LNG sourcing | Portfolio **16.5 MTPA**; plan **+7–8 MTPA by 2030, ~2.5 MTPA signed** (later in the call "up to 7 MMTPA") | FY26 PPT said "+4–5 MTPA by 2030" — the target has been raised or restated; quote both |
| Dabhol (Konkan LNG) | Ambient-air heating system complete by **June-2027**; all new deals carry "West India optionality" | Konkan 100% GAIL from 6-Jul-2026 |
| Unbundling | **PNGRB has withdrawn clause 5A** (2014 clause requiring separation of transmission and marketing from 1-Apr-2027); GAIL's court case still pending; TSO will only monitor 25% open-access capacity | Management statement, not a fetched PNGRB notification (see 4.4) |
| Jharsuguda (MNJPL tail) | ~0.5 MMSCMD today; two GAIL fertiliser plants on the MNJPL corridor would be "a big boost" in 3–4 years | |
| Policy tailwinds | Strategic gas storage being studied "very seriously"; coal-gasification incentives; better CBG schemes "likely"; strong MoPNG push for PNG-D and I&C LPG→gas switch | |

**The 8 most important analyst Q&A points [V transcript]:**
1. **Why Q1 marketing was so high (Probal Sen, ICICI Sec):** the **2.4 MTPA JCC-linked contract prices on a 9-month crude-cocktail average with a 2-month lag, while downstream sales are on 3-month dated Brent**; the Brent spike in Mar–Jun 2026 lifted sales prices far above sourcing cost. "This is one-off definitely. Much of it will get cured within the year." Plus HH-linked US gas sold into Brent-linked contracts.
2. **Henry Hub book (Amit Murarka, Axis):** ~21 MMSCMD (5.8 MTPA) on HH: **"around half or slightly less than half" back-to-back on HH; ~20% consumed at Pata; ~25–30% sold on Brent (cross-index)**, hedged "time to time". With Pata back at 100% load, **less HH gas is available for arbitrage** in Q2 (IR head).
3. **Q2 direction (Sumeet Rohra; Vikas Jain, CLSA):** management agreed that **marketing, petchem and LHC profitability will all decline from Q1 levels**; "if Brent goes down significantly, we may lose on that number because the 3-month Brent will start reflecting a lower number than our sourcing" — i.e., the JCC lag can become a **loss** when crude falls.
4. **Spot cargoes:** 7 cargoes from other contracts were affected (besides Qatar via Petronet FM); GAIL bought **8 spot cargoes** in Q1 — "closed at market price" and earned "reasonable margins", helped by strong power-sector peak demand in a deficient monsoon.
5. **Market share (Mayank Maheshwari, Morgan Stanley):** GAIL's marketing volume has lagged its transmission volume "over the years" because CGDs source on their own; management expects the LPG→gas shift (I&C customers) to narrow the gap.
6. **System-use gas (360 ONE):** pipeline SUG currently comes from **HPHT gas bought earlier by bidding**; PNGRB now requires **≥3-year long-term sourcing for SUG** — GAIL is "examining" it. (SUG was the main driver of the Nov-2025 tariff increase — see 4.2.4.)
7. **NFCL provision (Nomura):** the Q4 FY26 ~₹675 Cr doubtful-dues provision was **not reversed** in Q1 FY27.
8. **Fertiliser plants (Emkay):** a new urea investment policy was published by the Ministry of Fertilizers the day before the call; GAIL's two plants (Maharashtra, Chhattisgarh) are "under active evaluation"; DFR/FID to be announced later. (The "12–16% IRR" was the analyst's wording.)

**Numbers in the call that are not in the PPT:** Q4 FY26 consolidated EBITDA ₹2,703 Cr, PBT ₹1,966 Cr, PAT ₹1,485 Cr; standalone Q4 FY26 PBT ₹1,577 Cr; Q1 crude average "~$96–97"; polymer realisation ₹1,46,000/t (Q1) vs ₹98,000/t (Q4); LPG ₹90,796/t vs ~₹54,000/t; Pata landed gas $10.54/mmBtu; petchem breakeven at $13–14 gas and ₹1.30 lakh/t; GAIL Gas Q1 turnover ₹3,326 Cr, PBT ₹162 Cr, PAT ₹120 Cr; GAIL's own 6 GAs added 20,069 DPNG and 3 CNG stations in Q1; GAIL Gas added 16,610 DPNG.

**Q2 FY27 event:** board and call on **30-Oct-2026** (call 4:30 pm) [V screener, Part 1]. Not reported as of 23-Oct-2026.

### 4.2.2 Concall / presentation KPI table (standalone unless stated) [V]
| KPI | Q4 FY26 | Q1 FY27 | FY26 | Source |
|---|---|---|---|---|
| NG transmission (MMSCMD) | 118.99 | 122.36 | 122.18 | call / PPT |
| NG marketing (MMSCMD) | 101.88 | 93.82 (8.76 overseas) | 104.21 (113.41 incl. subsidiaries) | call / AR |
| LPG transmission (TMT) | 1,114 | 1,077 | 4,600 | call / AR |
| LHC production (TMT) | 194 | 232 | 813 (sales 815) | call / AR |
| Polymer production (TMT) | n.a. | 51 | 768 prod. / 785 sales | call / AR |
| Marketing PBT (mgmt) | n.a. | ₹3,353 Cr | — | call |
| Marketing segment PBIT | −₹151.32 Cr | ₹3,481.29 Cr | ₹3,077.58 Cr | filings |
| LHC "PBT" | ₹144 Cr | ₹772 Cr | ₹489 Cr | call |
| Petchem loss | ₹378 Cr | ₹130 Cr (call) / ₹122.53 Cr (filing) | ₹1,408 Cr | call / filing |
| SA PBT / PAT | ₹1,577 / 1,262 Cr | ₹5,773 / 4,292 Cr | ₹8,964 / 6,968 Cr | call / AR |
| Cons EBITDA / PAT (owners) | ₹2,703 / 1,485 Cr | ₹7,573 / 4,665 Cr | ₹14,524 / 7,582 Cr | call / PPT |
| Capex | — | ₹6,176 Cr | ₹9,594 Cr | call / PPT |
| GAIL Gas turnover / PAT | ₹3,227 / 117 Cr | ₹3,326 / 120 Cr | ₹12,681 Cr turnover | call / AR |
| FY26 average ₹/$ (AR) | | | **₹90.15** (closing rate also given) | AR p.~54 |

### 4.2.3 GAIL 5-year history (FY22–FY26) — standalone segment PBIT now complete [V results filings; AR segment note]

**(a) Standalone segment results — profit before interest and tax (₹ Cr)**
| Segment | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|---|
| NG transmission | 3,677.93 | 3,805.75 | 1,919.69 | 4,523.74 | 5,488.35 | 6,229.11 |
| LPG transmission | 351.38 | 335.04 | 368.69 | 317.06 | 421.44 | 455.54 |
| NG marketing | **−702.25** | 4,932.17 | 3,078.75 | 6,067.30 | **7,446.28** (incl. ₹2,440 SMTS one-off) | 3,077.58 |
| Petrochemicals | 1,064.86 | 1,245.26 | **−1,060.85** | −136.64 | −37.31 | **−1,408.22** |
| LPG & liquid hydrocarbons | 1,303.45 | 2,899.70 | 1,228.43 | 769.53 | 1,149.22 | 489.32 |
| Other (CGD own GAs, E&P, CBG, power) | 372.00 | 356.96 | 506.85 | 357.29 | 515.53 | 517.91 |
| **Total segment PBIT** | **6,067.37** | **13,574.88** | **6,041.56** [E sum of V rows] | **11,898.28** | **14,983.51** | **9,361.24** |
| Unallocable (net) | — | — | — | — | −1,464.77 (AR basis) | −1,527.12 (AR basis) |

Sources: FY21–FY22 from the Q4 FY22 results PDF; FY23 from the Q4 FY23 PDF; FY24–FY25 from the Q4 FY25 PDF; FY25–FY26 also in AR FY26 segment note (identical). Note the filings' "other un-allocable expenditure net of unallocable income" line (e.g., +₹585.22 Cr FY25) is presented differently from the AR's "unallocated expenses (net)" (−₹1,464.77 Cr FY25) because the AR moves interest/dividend income below the line — don't mix them.

**(b) Segment revenue (₹ Cr, incl. inter-segment)**
| Segment | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| NG transmission | 6,392.48 | 6,661.07 | **10,308.03** | 11,068.43 | 11,205.94 |
| LPG transmission | 668.59 | 721.62 | 731.87 | 834.92 | 916.18 |
| NG marketing | 77,325.95 | 1,35,290.35 | 1,14,589.95 | 1,20,411.66 | 1,24,244.41 |
| Petrochemicals | 8,548.52 | 4,917.26 | 7,753.41 | 8,088.17 | 7,574.42 |
| LHC | 4,865.16 | 5,569.97 | 5,075.83 | 5,180.17 | 4,293.33 |
| Sales/income from operations | 91,645.72 | 1,44,301.61 | 1,30,638.11 | 1,37,287.56 | 1,38,696.52 |

**(c) Derived unit economics [E from V inputs; 1 MMSCMD-year = 13.87 million mmBtu at 0.038 mmBtu/scm]**
| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Transmission volume (MMSCMD) | 111 | 107 | 120 | 127.32 | 122.18 |
| Transmission revenue ₹/mmBtu | 41.5 | 44.9 | 61.9 | 62.7 | 66.1 |
| Transmission PBIT ₹/mmBtu | 24.7 | **12.9** | 27.2 | 31.1 | 36.8 |
| Transmission PBIT margin | 59.5% | **28.8%** | 43.9% | 49.6% | 55.6% |
| Marketing volume (MMSCMD) | 96 | 95 | 98 | 101.49 | 104.21 |
| Marketing PBIT ₹/mmBtu | 37.0 | 23.4 | 44.6 | 52.9 (35.6 ex-SMTS) | 21.3 |
| Petchem PBIT ₹/t sold | +15,760 | −26,590 | −1,740 | −440 | −17,940 |
| LHC PBIT ₹/t sold | 28,880 | 12,310 | 8,280 | 12,080 | 6,000 |

- **Read-across:** (i) the **FY23 transmission collapse** (PBIT margin 29%) was the year of ruinous system-use-gas/fuel cost (SUG priced off LNG at ~$19–24) under a tariff still at the pre-2023 level [E reasoning; consistent with PNGRB's Nov-2025 order being driven by SUG]; (ii) **the 22-Mar-2023 PNGRB order (₹58.61 from 1-Apr-2023) lifted NG-transmission revenue 55% in FY24** (₹6,661 → ₹10,308 Cr) — the biggest single profit step in GAIL's recent history, and the template for what the 2028 review could do; (iii) marketing has **ranged ₹3,078–7,446 Cr** in five years (−₹702 Cr in FY21) — the ₹4,500 Cr "normal" is the mid-point of a very wide band.

**(d) Consolidated P&L (screener; ₹ Cr) — FY22–FY26 [V; from Part 1 E11, re-confirmed]:** sales 92,770 / 1,45,668 / 1,33,228 / 1,41,902 / 1,41,598; OP 15,161 / 7,500 / 14,314 / 15,412 / 11,502; OPM 16% / 5% / 11% / 11% / 8%; PAT 12,304 / 5,596 / 9,903 / 12,463 / 7,582; EPS ₹18.40 / 8.54 / 15.06 / 18.93 / 11.53. Company-basis consolidated EBITDA 18,086 / 10,323 / 16,986 / 20,643 / 14,524 [V PPT]. Screener cons ROCE FY26 9.67%; company SA ROCE 10.04% FY26 vs 16.91% FY25 [V].

### 4.2.4 GAIL 8-quarter trend (Q2 FY25 → Q1 FY27) — standalone segment PBIT (₹ Cr) [V filings unless marked]
| Segment | Q2 FY25 [E derived] | Q3 FY25 | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|---|
| NG transmission | 1,402.81 | 1,370.29 | 1,268.38 | 1,557.56 | 1,413.88 | 1,376.09 | 1,881.58 | 1,782.65 |
| LPG transmission | 85.51 | 139.97 | 115.21 | 120.27 | 128.77 | 130.37 | 76.13 | 122.87 |
| NG marketing | 1,328.83 | **2,880.98** (incl. SMTS ₹2,440) | 1,203.67 | 1,071.60 | 1,304.12 | 853.18 | **−151.32** (NFCL −675; entry-tax +291) | **3,481.29** |
| Petrochemicals | 157.49 | 4.68 | −158.01 | −248.63 | −299.24 | −482.64 | −377.71 | −122.53 |
| LHC | 248.94 | 378.46 | 291.97 | 205.01 | 111.79 | 28.63 | 143.89 | 772.50 |
| Other | 145.95 | 86.36 | 115.76 | 191.23 | 146.71 | 88.65 | 91.31 | 200.52 |
| **Total** | **3,369.53** | **4,860.74** | **2,836.98** | **2,897.04** | **2,806.03** | **1,994.28** | **1,663.88** | **6,237.30** |
Q1 FY25 for reference: 1,446.87 / 80.75 / 2,032.80 / −41.47 / 229.85 / 167.46 = 3,916.26 [V Q1 FY26 filing]. Q2 FY25 = 9M FY25 (Q3 FY26 filing) − Q1 FY25 − Q3 FY25 [E]. **This replaces Part 1's E14 "Q2+Q3 derived" — the individual Q2 and Q3 FY26 values are now fetched and sum exactly to the derived figures (marketing 1,304.12 + 853.18 = 2,157.30 ✓).** Q4 FY26 NG transmission includes the +₹475 Cr depreciation write-back from the 30→40-year life change and +₹87 Cr write-back, −₹111 Cr provision [V FY26 PPT].

**Consolidated quarterly (screener; ₹ Cr) [V]**
| | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Sales | 33,889 | 36,835 | 36,440 | 35,311 | 35,537 | 35,173 | 35,577 | 41,198 |
| Operating profit | 3,937 | 3,169 | 3,526 | 3,669 | 3,460 | 2,927 | 1,453 | 7,098 |
| OPM [E] | 11.6% | 8.6% | 9.7% | 10.4% | 9.7% | 8.3% | 4.1% | 17.2% |
| PAT | 2,690 | 4,084 | 2,506 | 2,382 | 1,989 | 1,729 | 1,481 | 4,671 |
- **Pattern:** marketing PBIT fell for five straight quarters from the SMTS-boosted Q3 FY25 to a loss in Q4 FY26, while petchem losses deepened every quarter of FY26 (−249 → −299 → −483 → −378). Transmission was the only line that rose (₹1,268 Cr Q4 FY25 → ₹1,783 Cr Q1 FY27, helped by the Jan-2026 tariff and lower depreciation). Q1 FY27 is an outlier on marketing and LHC, not a new run-rate (management's own words).

### 4.2.5 Annual-report findings (AR FY2025-26) [V]
**Ownership of investees (note 47, Ind AS 112, as on 31-Mar-2026; BRSR list identical):**
| Investee | Relation | GAIL % (31-3-26) | (31-3-25) |
|---|---|---|---|
| GAIL Gas | Subsidiary | 100.00 | 100.00 |
| GAIL Global (USA) Inc.; GAIL Global (Singapore); GAIL Mangalore Petrochemicals; GAIL Global IFSC (new) | Subsidiaries | 100.00 each | (IFSC 0) |
| **Konkan LNG** | Subsidiary | **93.50** (→ **100% from 6-Jul-2026** after NCLT capital reduction) | 93.50 |
| Bengal Gas | Subsidiary | 88.13 | 88.13 |
| Tripura Natural Gas | Subsidiary | 48.98 | 48.98 |
| **Brahmaputra Cracker & Polymer (BCPL)** | **Associate (sic) at 70.00%** | 70.00 | 70.00 |
| **Petronet LNG** | Associate | **12.50** | 12.50 |
| **Indraprastha Gas** | Associate | **22.50** | 22.50 |
| **Mahanagar Gas** | Associate | **32.50** | 32.50 |
| **ONGC Petro-additions (OPaL)** | Associate | **4.19** | 4.19 |
| Ramagundam Fertilizers & Chemicals | Associate | 14.30 | 14.30 |
| China Gas Holdings | Associate | 2.75 | 2.76 |
| Fayum Gas (Egypt) | Associate | 19.00 | 19.00 |
| ONGC Tripura Power | Associate | 26.00 | 26.00 |
| LNG Japonica Shipping | Associate | 26.00 | 26.00 |
| Coal Gas India | Associate | 49.00 | 49.00 |
| LLC Bharat Energy Office (Russia) | Associate | 20.00 | 20.00 |
| Leafiniti Bioenergy (CBG; acquired 18-3-2026) | Associate | 49.00 | 0 |
| **Indradhanush Gas Grid (IGGL)** | JV | **20.00** | 20.00 |
| Talcher Fertilizers | JV | **39.87** | 33.33 |
| Maharashtra Natural Gas (MNGL) | JV | 22.50 | 22.50 |
| Central UP Gas | JV | 25.00 | 25.00 |
| Green Gas; Aavantika Gas | JV | 49.99 each | 49.99 |
| Bhagyanagar Gas | JV | 47.72 | 47.51 |
| Vadodara Gas | JV | 50.00 (incl. 17.07% via GAIL Gas) | 50.00 |
| TAPI Pipeline Co. | JV | 5.00 | 5.00 |
- **Correction:** OPaL is **4.19%**, not "~49%" (Part 1 §5.4 [K]); GAIL's OPaL exposure is mainly through earlier share-warrant/CCD instruments and supply contracts rather than equity [E — the AR lists the equity %, the other instruments were not traced]. BCPL is 70% but classified as an associate in the AR's list (likely because of joint control/board rights with the Assam government/OIL/NRL) [E]. GAIL's 99.49 crore OPaL shares carry ₹994.95 Cr book value; 99.24 crore BCPL shares ₹992.37 Cr; Petronet 18.75 crore shares ₹98.75 Cr; IGL 31.5 crore shares ₹31.50 Cr; MGL 3.21 crore shares ₹32.10 Cr; IGGL 23.06 crore shares ₹234.72 Cr [V AR investment schedule].
- **Listed-stake look-through is now [V] on stakes** (Petronet 12.5%, IGL 22.5%, MGL 32.5%): **≈ ₹13,148 Cr at 23-Oct-2026 m-caps (~12.2% of GAIL's m-cap)** [E arithmetic]. Note book value of these three stakes is only ~₹162 Cr — hence the large unrecognised fair-value gap.

**Related-party transactions (AGM notice, material RPT approvals) [V]:**
| Party | GAIL holds | FY26 transactions | FY25 | Approval sought (AGM-to-AGM) | Nature |
|---|---|---|---|---|---|
| Petronet LNG | 12.50% | **₹26,594 Cr** | ₹27,134 Cr | ₹38,300 Cr (27% of GAIL's FY26 cons turnover; 88% of PLL's) | RLNG purchase + regas services at Dahej/Kochi; spot via tenders |
| IGL | 22.50% | ₹9,982 Cr | ₹8,584 Cr | ₹13,500 Cr | Gas sales |
| MGL | 32.50% | ₹4,071 Cr | ₹3,454 Cr | ₹6,800 Cr | Gas sales |
| Ramagundam Fertilizers | 14.30% | ₹2,117 Cr | ₹3,240 Cr | ₹5,500 Cr (147% of RFCL's turnover) | Gas sales |
- **Insight:** ~19% of GAIL's FY26 revenue is sold to or bought from four associates; **Petronet alone supplies gas worth ~₹26,600 Cr (≈ 21% of GAIL's marketing revenue)** — the channel through which the Qatar force majeure hit GAIL. There is no royalty; terms are "market-linked and similar to contracts with other off-takers".

**Contingent liabilities & commitments (standalone, note 29, 31-Mar-2026) [V]:**
- Claims not acknowledged as debt: **₹2,967 Cr** (FY25 ₹2,988 Cr) — LDs/price-reduction by suppliers; customers' gas-price-differential and transmission-charge disputes.
- Disputed indirect taxes: **₹4,550.56 Cr** (FY25 ₹4,019.74 Cr), of which **excise ₹3,834.92 Cr** — chiefly the **naphtha classification case: CESTAT (30-Nov-2018) demand ₹2,889 Cr, ₹3,768 Cr with interest/penalty at Mar-26** (₹3,705 Cr at Sep-25); Supreme Court stay on deposit of ₹20 Cr + ₹132 Cr security. GST disputes jumped to ₹373 Cr (₹38 Cr); entry tax ₹130 Cr (₹0.5 Cr).
- Corporate guarantees for related parties' loans **₹5,163.5 Cr** (loans outstanding ₹2,650 Cr) + **non-fund guarantees ₹11,743.6 Cr**; financial liability recognised ₹362.9 Cr.
- CGD MWP shortfall (6 GAs along JHBDPL; Cuttack and Jamshedpur pipeline-inch-km below target): contingent ₹33.2 Cr; cumulative PNG connections 4.81 lakh vs 2.00 lakh target.
- Capital commitments **₹8,464 Cr** (FY25 ₹9,884 Cr); further investment/loan commitments to subsidiaries/JVs **₹3,121 Cr**.
- **Lease commitments not yet commenced ₹9,847 Cr (FY25 ₹3,088 Cr)** — new LNG-carrier time charters (e.g., *Energy Fidelity*, delivered Apr-2026, chartered to 2038; *GAIL Bhuwan* extended to 2038). This explains the Q1 FY27 "operational capex incl. ship chartering ₹4,548 Cr" (right-of-use asset) and will lift reported consolidated borrowings/lease liabilities [E link].
- Q2 FY26 filing (emphasis of matter): **GAIL withdrew its six APTEL appeals against PNGRB natural-gas final tariff orders "on account of various moderations done by PNGRB"**, with no financial impact; two provisional tariff orders on petroleum-product pipelines remain under appeal [V]. SMTS settlement agreement dated **15-Jan-2025** [V].

**Capacity / project table (AR, as on Mar-26) [V]:**
| Project | Length (km) | Commissioned by Mar-26 | States |
|---|---|---|---|
| JHBDPL incl. Barauni–Guwahati (PM Urja Ganga) | 3,290 | 3,128 | UP, Bihar, Odisha, Jharkhand, WB |
| Kochi–Koottanad–Bengaluru–Mangaluru Ph-II | 902 | 608 | Kerala, TN, Karnataka |
| Srikakulam–Angul (SAPL) | 744 | 469.5 | Odisha, AP |
| Dhamra–Haldia | 253 | 154 | Odisha, WB |
| Mumbai–Nagpur–Jharsuguda (MNJPL) | 1,707 | 1,504 (all 1,707 by 31-May-2026) | MH, MP, CG, Odisha |
| Gurdaspur–Jammu | 153 | 0 | Punjab, J&K |
Dedications in FY26: Durgapur–Kolkata 132 km (18-Jul-2025); SAPL mainline 422 km (16-Oct-2025); MNJPL CG–Odisha 489 km (1-Nov-2025). LPG: 2,040 km (JLPL 1,427 km — record 3.26 MMT; VSPL 610 km — record 1.334 MMT).

**LNG portfolio additions (AR MD&A) [V]:** FY26 SPAs executed — **Vitol Singapore ~1 MTPA from 2026** and **QatarEnergy Trading ~0.8 MTPA from 2025**; seven LNG carriers in the fleet. Domestic gas: ~334 MMSCM bought on IGX and ~410 MMSCM won in upstream tenders in FY26.

**Top corporate risks (AR ERM list) [V]:** (i) project-execution delay (pipelines, plants); (ii) under-utilisation of pipelines; (iii) restructuring (monetisation & unbundling) — now largely moot after clause-5A withdrawal; (iv) petrochemical margin/unviable operations; (v) LNG market risk (price, cargo shortage, supplier default); (vi) third-party damage/encroachment; (vii) unfavourable regulatory change; (viii) domestic-gas business risk. Mega insurance cover **₹1.69 lakh Cr** sum insured (New India Assurance lead).

### 4.2.6 GAIL's sourcing and sales mix (FY26 analyst-meet PPT, slides 18–19, read from rendered images) [V]
| Share of FY26 volume | APM/NAPM (domestic) | RLNG (long-term) | Spot | Mid-term | RIL & bp (KG-D6 MDP) | Overseas sales |
|---|---|---|---|---|---|---|
| **Transmission mix** (122.18 MMSCMD) | **26%** | **44%** | 4% | 24% | 2% | — |
| **Marketing mix** (104.21 MMSCMD) | **35%** | **17%** | 4% | **28%** | 3% | **13%** |
- Slide text: "18,000+ km… (~65% market share)"; "**~14,200 km integrated pipeline network**"; "~1,500 km under construction"; marketing "**~48% market share in India's natural gas consumption**" (not "RLNG share", as Part 1 §5.2 implied); "5 long-chartered and 2 short-chartered vessels"; "source additional 4–5 MMTPA LNG by 2030"; "capacity expansion of DUPL pipeline and Dabhol LNG terminal".
- **Read:** two-thirds of what flows through GAIL's pipes is imported (RLNG 44% + mid-term 24% + spot 4% ≈ 72%) — the network is an LNG-evacuation system as much as a domestic-gas grid. GAIL's own marketing book is more domestic (APM/NAPM 35%) because it is the designated seller of ONGC/OIL APM gas to CGD and fertiliser.

## 4.3 Industry data upgraded from primary sources (chart-ready)

### 4.3.1 India gas balance FY14–FY26 — PPAC Ready Reckoners [V] (replaces Part 1 §2.1–2.2 [K] rows)
Sources: PPAC Ready Reckoner June-2018 (FY14–FY18, published in MMSCMD); PPAC Ready Reckoner Dec-2021 (FY18–FY21, MMSCM); **The PPAC Ready Reckoner FY2025-26 (dated 22-Jul-2026; FY21–FY26, MMSCM; Table 3.4)**; PPAC Snapshot of India's Oil & Gas Data, Oct-2026 edition (Sep-2026 data). All public PDFs on ppac.gov.in/download.php (no login). "Consumption" = net production + LNG imports (availability basis, includes producers' internal use). LNG source DGCIS. MMSCMD = MMSCM ÷ days [E].

| FY | Gross production (MMSCM) | Net production | LNG imports (MMSCM) | LNG (MMT) | Consumption (MMSCM) | Consumption (bcm) | ≈ MMSCMD [E] | Import dependence |
|---|---|---|---|---|---|---|---|---|
| FY14 | 97.0 MMSCMD | 94.7 MMSCMD | 47.1 MMSCMD | — | 141.8 MMSCMD | ~51.8 [E] | 141.8 | 33.2% |
| FY15 | 92.2 MMSCMD | 89.6 MMSCMD | 50.8 MMSCMD | ~14.0 [E] | 140.4 MMSCMD | ~51.2 [E] | 140.4 | 36.2% |
| FY16 | 88.1 MMSCMD | 85.1 MMSCMD | 58.4 MMSCMD | ~16.1 [E] | 143.5 MMSCMD | ~52.5 [E] | 143.5 | 40.7% |
| FY17 | 87.4 MMSCMD | 84.5 MMSCMD | 67.6 MMSCMD | ~18.6 [E] | 152.1 MMSCMD | ~55.5 [E] | 152.1 | 44.5% |
| FY18 | 32,649 | 31,731 | 27,439 | 20.7 | 59,170 | 59.2 | 162.1 | 46.4% [E] (RR-2018: 45.3% provisional) |
| FY19 | 32,875 | 32,058 | 28,740 | 21.7 | 60,798 | 60.8 | 166.6 | 47.3% [E] |
| FY20 | 31,184 | 30,257 | 33,887 | 25.6 | 64,144 | 64.1 | 175.3 | 52.8% [E] |
| FY21 | 28,672 | 27,784 | 33,198 | 25.1 | 60,981 | 61.0 | 167.1 | **54.4%** |
| FY22 | 34,024 | 33,131 | 31,028 | 23.4 | 64,159 | 64.2 | 175.8 | 48.4% |
| FY23 | 34,450 | 33,664 | 26,304 | 19.9 | 59,969 | 60.0 | 164.3 | **43.9%** |
| FY24 | 36,438 | 35,717 | 31,795 | 24.0 | 67,512 | 67.5 | 184.5 | 47.1% |
| FY25 | 36,113 | 35,594 | 35,720 | 27.0 | 71,314 | 71.3 | 195.4 | 50.1% |
| **FY26 (P)** | **34,776 (−3.7%)** | 34,326 | **34,427 (−3.6%)** | **26.0** | **68,753 (−3.6%)** | **68.8** | **188.4** | **50.1%** |
| H1 FY27 (Apr–Sep-26, P) | 16,804 (−4.4%; target 17,740) | 16,580 | **18,189 (+4.5%)** | — | 34,769 (≈ flat) | 34.8 | ~190 | 52.3% |
| Sep-2026 (P) | 2,730 | — | 2,957 (−8.6%) | — | 5,653 (−6.7%) | — | ~188 | — |
- FY21 LNG is 33,198 in the 2026 Reckoner vs 33,031 in the 2021 edition (revision); use the latest.
- **PPAC's FY26 consumption (188.4 MMSCMD; −3.6%) agrees with GAIL's AR (189.2 MMSCMD; −3.1%) within 0.5%** — two primary sources. GAIL's AR FY22–FY23 figures (168.5 / 160.8) are ~4% below PPAC's (175.8 / 164.3) — a different basis (GAIL's table appears to exclude producers' internal use); for a single long series use PPAC.
- **CAGR FY15–FY26 (PPAC): 140.4 → 188.4 MMSCMD = +2.7% a year** [E]; FY22–FY26 +1.7% a year [E]. Domestic gross production FY26 (95.3 MMSCMD) is **below FY14 (97.0)** — twelve years of zero domestic growth. ONGC nomination gross output fell every year from 23,746 MMSCM (FY20) to 18,481 (FY26); PSC/JV fields (KG-D6) rose from 4,321 (FY21) to 14,143 (FY25) then fell 6.7% to 13,195 in FY26 [V Table 3.5].
- **War-period nuance (new):** PPAC's H1 FY27 data show **LNG imports +4.5% YoY and consumption flat** — the 2026 crisis was a **March–May shock** (Apr −18%, May −9% in LNG) followed by a rebuild of cargoes from non-Gulf sources in Jun–Aug; by September consumption was again −6.7% as prices re-spiked. "India's LNG imports fell ~25%" (Part 1, from GAIL's AR) refers to the immediate post-FM period, not the half-year.
- EI Statistical Review 2026 vs PPAC (CY2025): consumption 67 bcm (EI; India #11) vs 69 bcm (PPAC); production 31 bcm (EI; #24) vs 35 bcm net (PPAC) [V RR notes]. Use PPAC for India series, EI only for global ranking.

### 4.3.2 LNG import bill by year — PPAC Ready Reckoner FY2025-26, Table 3.10 (DGCIS) [V] (closes §H-2)
| FY | MMT | MMSCM | Value (US$ mn) | Avg $/mmBtu (cif) | Value ₹ Cr [E] |
|---|---|---|---|---|---|
| FY18 | 20.7 | 27,439 | 8,051 | 7.4 | — |
| FY19 | 21.7 | 28,740 | 10,253 | 9.0 | — |
| FY20 | 25.6 | 33,886 | 9,489 | 7.1 | — |
| FY21 | 25.1 | 33,198 | 7,881 | 6.0 | — |
| FY22 | 23.4 | 31,028 | 13,472 | 10.9 | — |
| FY23 | 19.9 | 26,304 | **17,114 (peak)** | **16.4** | ~1.37 lakh Cr [E at ~₹80/$] |
| FY24 | 24.0 | 31,795 | 13,405 | 10.8 | ~1.11 lakh Cr [E at ~₹82.8/$] |
| FY25 | 27.0 | 35,720 | 14,908 | 10.6 | **₹1,26,080 Cr** [E at PPAC FY25 avg ₹84.57/$] |
| **FY26 (P)** | **26.0** | 34,427 | **13,356 (−10.4%)** | **9.8** | **₹1,17,950 Cr** [E at PPAC FY26 avg ₹88.31/$] |
| Sep-2026 (month) | — | 2,957 | ~1,200 | — | ~₹11,450 Cr [E at ₹95.46] |
- PPAC converts at **1 mmBtu = 25.2 scm** (i.e., 0.0397 mmBtu/scm), slightly richer than this dossier's 0.038 working factor; 1 MMT = 1,325 MMSCM. Our ₹/mmBtu margin estimates in Parts 1–3 would be ~4% lower on PPAC's factor — immaterial, but state it.
- **Average landed LNG cost fell to $9.8/mmBtu in FY26** — the cheapest since FY21 — which is exactly why GAIL's marketing spread compressed in FY26 (cheap spot competing with its HH/Brent-slope term book).

### 4.3.3 Global gas/LNG prices 2026, monthly — World Bank Pink Sheet (Apr, Jul, Oct-2026 editions) [V] (closes §H-3 as far as public data allow)
| Month 2026 | Brent $/bbl | Henry Hub $/mmBtu | Europe TTF $/mmBtu | Japan LNG import (cif) $/mmBtu | GIXI (IGX India) $/mmBtu |
|---|---|---|---|---|---|
| Jan | 66.8 | **7.58** (US cold snap) | 11.76 | 11.49 | — |
| Feb | 71.1 | 3.61 | 11.24 | 11.32 | — |
| Mar | 103.7 | 3.05 | 17.91 | 14.85 | 10.8 [Part 1, FIPI] |
| Apr | **120.4** | 2.77 | 15.41 | 15.65 | 16.9 (₹1,572 Western region cum.) [V PPAC RR] |
| May | 107.5 | 2.93 | 16.17 | 12.88 | — |
| Jun | 85.4 | 3.15 | 15.17 | 12.83 | 18.6 [Part 1, FIPI] |
| Jul | 83.4 | 2.89 | 18.06 | 13.85 | — |
| Aug | 90.9 | 2.77 | 21.11 | 15.27 | — |
| **Sep** | **116.8** | 2.95 | **25.42** | 14.25 (estimate) | **28.4 (₹2,712; 456 MMSCM)** [V PPAC Snapshot] |
| Q1 / Q2 / Q3 2026 avg | 80.5 / 104.4 / 97.1 | 4.75 / 2.95 / 2.87 | 13.63 / 15.58 / 21.53 | 11.41 / 13.44 / 14.45 | |
| CY2023 / 2024 / 2025 avg | 82.6 / 80.7 / 69.0 | 2.54 / 2.19 / 3.53 | 13.11 / 10.96 / 11.96 | 14.39 / 12.84 / 12.04 | |
- Monthly values are from the most recent edition carrying that month; the Oct-2026 edition revised Q2 Japan LNG to 13.44 (13.79 in the Jul edition) — the latest two months are World Bank estimates. Japan LNG is a lagged **contract** import price, not spot JKM; **no free primary JKM monthly series exists** (Platts is paywalled). For a spot proxy use **TTF** (World Bank) or India's **GIXI** (IGX).
- **CRITICAL NEW FACT for the writer — a second price spike in September 2026.** Both the World Bank (Brent **$116.8** Sep-2026 average; TTF $25.42) and PPAC (Brent **$116.77**, Indian basket **$116.09** in Sep-2026 vs $90.84/$90.19 in Aug; GIXI $28.4) show crude and gas re-spiking in September 2026. The macro line used in Parts 1–3 ("ceasefire 7-Apr-2026; Brent → ~$95 thereafter") is **incomplete**: Brent averaged $120.4 in **April** (above the "~$118 peak" quoted), fell to $83–91 in Jul–Aug, then rose to ~$117 in September. Henry Hub stayed ~$2.8–3.2 throughout. Implications: (i) GAIL's **JCC-lag/3-month-Brent arbitrage re-opens in Q3 FY27** (Oct–Dec sales on Jul–Sep Brent ~$97 vs JCC 9-month average lagged two months) — Q2 FY27 (Jul–Sep) sales were priced on Apr–Jun Brent (~$104) against a JCC average still catching up, so Q2 marketing may be stronger than management's July caution implied [E]; (ii) the HH-vs-Asia/Europe spread hit a record (~$22 vs TTF in Sep) [E]; (iii) APM formula price Oct-2026 $11.22 vs $7 cap reflects this. The writer should treat the September spike as fact (two primary sources) but avoid narrative detail on its cause — this pass did not find a primary account of the September events (search results were limited to March–April 2026 reporting). **Flag to the orchestrator: the shared macro context may need updating.**

### 4.3.4 Domestic gas prices — PPAC (Ready Reckoner FY2025-26 Table 3.11; Snapshot Oct-2026 Table 23) [V] (upgrades Part 1 §4.3 [K] rows to [V])
Half-yearly (2014 guidelines, $/mmBtu GCV): Nov-14–Mar-15 5.05; Apr–Sep-15 4.66; Oct-15–Mar-16 3.82; Apr–Sep-16 3.06 (HPHT ceiling 6.61); Oct-16–Mar-17 2.50 (5.30); Apr–Sep-17 2.48 (5.56); Oct-17–Mar-18 2.89 (6.30); Apr–Sep-18 3.06 (6.78); Oct-18–Mar-19 3.36 (7.67); Apr–Sep-19 3.69 (9.32); Oct-19–Mar-20 3.23 (8.43); Apr–Sep-20 2.39 (5.61); Oct-20–Mar-21 1.79 (4.06); Apr–Sep-21 1.79 (3.62); Oct-21–Mar-22 2.90 (6.13); Apr–Sep-22 6.10 (9.92); Oct-22–Mar-23 **8.57 (12.46)**; 1–7 Apr-2023 9.16 (12.12). **All Part 1 §4.3 [K] values for 2019–2023 are confirmed exactly.**

Monthly under the 7-Apr-2023 "Review of New Domestic Gas Pricing Guidelines" (calculated price → APM ceiling actually paid to ONGC/OIL):
| Month | Calc. | APM paid | | Month | Calc. | APM paid |
|---|---|---|---|---|---|---|
| Apr-23 (8–30) | 7.92 | 6.50 | | Jan-26 | 6.25 | **6.25** |
| FY24 range | 7.48–9.20 | 6.50 | | Feb-26 | 6.21 | **6.21** |
| FY25 range | 7.29–8.90 | 6.50 | | Mar-26 | 6.81 | 6.75 |
| Apr-25 | 7.26 | 6.75 | | Apr-26 | 10.76 | 7.00 |
| Jun-25 | 6.41 | **6.41** | | May-26 | **11.59** | 7.00 |
| Jul–Oct-25 | 6.89–7.02 | 6.75 | | Jun-26 | 10.93 | 7.00 |
| Nov-25 | 6.55 | **6.55** | | Jul-26 | 8.73 | 7.00 |
| Dec-25 | 6.48 | **6.48** | | Aug-26 | 7.86 | 7.00 |
| | | | | Sep-26 | 9.00 | 7.00 |
| | | | | Oct-26 | **11.22** | 7.00 |
HPHT ceiling: Apr–Sep-23 12.12; Oct-23–Mar-24 9.96; Apr–Sep-24 9.87; Oct-24–Mar-25 10.16; Apr–Sep-25 10.04; Oct-25–Mar-26 9.72; Apr–Sep-26 8.90; Oct-26–Mar-27 9.89 [V].
- **New nuance:** the APM "cap" is a ceiling, not a fixed price — in **5 of 12 months of FY26 the formula fell below the $6.75 cap** (Jun-25, Nov-25 to Feb-26), so APM gas was cheaper than the cap. The APM path is therefore **$6.50 (FY24–FY25) → $6.75 cap (FY26; actual 6.21–6.75) → $7.00 (FY27; binding every month so far)** [V]. This closes §H-16/item-9's APM path. The Kirit Parikh committee's "move to market pricing by 2027" has **no notification** in the PPAC documents; treat it as not implemented [V absence].

### 4.3.5 Pipeline network and flows — PNGRB data via PPAC [V] (resolves Trap 11 / §H-15)
**(a) Common-carrier NG pipeline network as on 30-Jun-2026 (PNGRB via PPAC Snapshot Oct-2026, Table 20)**
| Entity | Fully operational km | Partially commissioned km | **Total operational km** | Under construction km | Total km | Authorised capacity (MMSCMD, arithmetic sum) |
|---|---|---|---|---|---|---|
| **GAIL** | 13,075 | 5,642 | **18,717** | 1,582 | 20,299 | 268.5 |
| GSPL (now GSPL Transmission) | 2,916 | — | 2,916 | 337 | 3,253 | 75.3 |
| PIL (East-West; Energy InvIT) | 1,497 | — | 1,497 | — | 1,497 | 87.0 |
| IOCL | 249 | 1,121 | 1,370 | 496 | 1,866 | 25.2 |
| GIGL | — | 1,440 | 1,440 | 764 | 2,204 | — |
| GITL (GSPL India Transco) | — | 365 | 365 | 1,516 | 1,881 | — |
| AGCL / RGPL / GGL / DFPCL / ONGC | 107 / 304 / 73 / 42 / 54 | — | 580 | — | 580 | 2.4 / 3.5 / 5.1 / 0.7 / 9.5 |
| Others (APGDC, IGGL, IMC, HPPL/H-Energy) | 713 | — | 713 | 1,296 | 2,009 | 42.1 |
| **India total** | 19,030 | 8,568 | **27,598** | 5,991 | **33,589** | |
Including tie-in connectivity, dedicated lines and sub-transmission (STPL): **27,905 km operational, 34,803 km authorised, 8,551 km under construction (P)**.
- **This resolves the network-length conflict:** GAIL's "**~18,700 km**" (AR, 31-Mar-2026) = PNGRB's **18,717 km operational at 30-Jun-2026**, of which **5,642 km is only partially commissioned** (JHBDPL/PBG, MNJPL, SAPL, KKBMPL-II sections). "18,000+ km" (PPT) is the rounded version; "**~14,200 km integrated network**" (PPT) and PNGRB's **13,658 km INGPL (31-3-2025)** are the INGPL tariff zone only; PPAC's RR footnote gives "18,413 km total operational as on 31-Mar-2026" (pre-MNJPL completion). **GAIL share of India's operational common-carrier km = 18,717 / 27,598 = 67.8%** [E] (GAIL says ~65%; PPAC pie ~59% on a capacity/flow basis). Use **"~18,700 km, about two-thirds of India's operating gas pipelines (PNGRB, Jun-2026)"**.

**(b) Average flows and utilisation (PPAC Ready Reckoner FY2025-26, Table 5.1) [V]**
| Network | Capacity (MMSCMD) | FY25 flow | FY25 util. | FY26 flow | FY26 util. | H2 FY26 flow |
|---|---|---|---|---|---|---|
| **GAIL INGPL (integrated)** | 163.8 | 115.87 | 70.7% | **109.41** | **66.8%** | 110.09 (67.2%) |
| GAIL KG basin | 19.37 | 3.90 | 20.1% | 3.14 | 16.2% | 3.27 |
| GAIL Kochi–Bangalore–Mangalore | 12 | 3.94 | 32.9% | 5.14 | 42.8% | 4.65 |
| GAIL MNJPL (part-operational) | 14.6 | — | — | 0.12 | 0.8% | 0.09 |
| GAIL SAPL (op. from Sep-2025) | 6.65 | — | — | 0 | 0% | 0 |
| PIL East-West (Kakinada–Bharuch) | 85 | 35.45 | 41.7% | **34.45** | **40.5%** | 34.41 |
| GSPL HP Gujarat grid | 36 | 24.55 | 68.2% | 21.49 | 59.7% | 22.38 |
| GIGL Mehsana–Bhatinda | 48.94 | 3.60 | 7.8% | 5.03 | 10.3% | 4.70 |
| GITL Mallavaram–Bhilwara | 78.25 | 1.96 | 2.5% | 2.05 | 2.6% | 1.49 |
| IOCL Dadri–Panipat | 9.5 | 5.42 | 59% | 4.64 | 50% | 4.49 |
| IOCL Ennore–Tuticorin etc. | 34.67 | 5.19 | 16% | 5.29 | 16% | 5.28 |
| ONGC Uran–Trombay | 6 | 3.41 | 57% | 3.36 | 56% | 3.30 |
| RGPL Shahdol–Phulpur | 3.5 | 0.74 | 21% | 0.83 | 24% | 0.82 |
- **INGPL utilisation was ~67% in FY26, not "~75%"** as Part 1 §4.5/§9.1 estimated (122.18 ÷ 163.8). GAIL's 122.18 MMSCMD "transmission" counts gas on all its networks and double-counts gas moving across more than one GAIL network; PPAC's per-network flow is the cleaner utilisation measure. **East-West (PIL) runs at ~40%; GSPL ~60%; the new trunk lines (MNJPL, SAPL, GIGL, GITL) at 0–10%** — India's grid is roughly half empty, which is why the cost-plus tariff with normative volumes matters so much.

### 4.3.6 LNG terminals — two PPAC dates [V] (replaces Part 1 §5.3 / E9 capacities)
| Terminal | Owner | Capacity 1-Apr-2026 (MTPA) | Util. FY26 | Capacity 1-Oct-2026 | Util. Apr–Sep-2026 |
|---|---|---|---|---|---|
| Dahej | Petronet LNG | 17.5 | **91.9%** | **22.5** | 68.45% (Apr–Aug) |
| Hazira | Shell Energy India | **6.0** | 27.2% | 6.0 | 42.4% |
| Dabhol | Konkan LNG (GAIL) | 5.0 | 34.5% | 5.0 | **43.9%** |
| Kochi | Petronet LNG | 5.0 | 26.3% | 5.0 | 23.6% (Apr–Aug) |
| Ennore | Indian Oil LNG | 5.0 | 25.1% | 5.0 | 26.2% |
| Mundra | GSPC LNG | 5.0 | 17.4% | 5.0 | 26.9% |
| Dhamra | Adani Total Pvt | 5.0 | 34.1% | 5.0 | **46.5%** |
| Chhara | HPCL LNG | 5.0 | 6.2% | 5.0 | 6.0% |
| **Total** | | **53.5** | | **58.5** | |
- Conflict resolved: GAIL's PPT "57.7 MTPA, Dahej 22.5 from 31-3-2026, Hazira 5.2" vs PPAC "53.5 MTPA on 1-Apr-2026 (Dahej 17.5, Hazira 6.0)" — PPAC added the Dahej expansion (+5 MTPA) after 1-Apr and lists Hazira at 6.0. **Use PPAC: 58.5 MTPA from 1-Oct-2026 (≈ 210 MMSCMD at 3.6) vs LNG imports ~100 MMSCMD in H1 FY27 → ~48% utilisation.** PPAC's RR text says "52.7 MMTPA" for the FY26 utilisation base — a third, transitional figure. Jaigarh (4 MTPA, H-Energy FSRU) is **not** in PPAC's operational list [V absence].
- **War signature:** non-Qatar-linked terminals (Dhamra 46.5%, Dabhol 43.9%, Hazira 42.4%) **gained** utilisation in Apr–Sep 2026 while Dahej (Qatar-dependent) fell from 92% to 68%.

### 4.3.7 CGD and CBG infrastructure — PNGRB/PPAC [V]
- **1-Apr-2026: 8,916 CNG stations (+10.5% YoY from 8,067); 1,70,21,202 PNG connections — domestic 1,69,49,377 (+12.7% from 1,50,41,471), commercial 49,994, industrial 21,831** [V PPAC RR]. (Part 1's "~1.67 crore Feb-2026" ✓; "8,692 CNG stations" was an earlier date.)
- CNG/PNG prices (Oct-2026): Delhi CNG ₹86.98/kg, PNG-D ₹50.59/scm (IGL, 13-Oct-2026); Mumbai ₹89.00 / ₹53.00 [V Snapshot].
- **CBG under SATAT (1-Oct-2026): 194 plants selling CBG, of which 99 tie up with GAIL**; CBG sales FY26 **96.5 TMT, GAIL 88.2 TMT (91%)**; H1 FY27 88.4 TMT (GAIL 85.5) — already ~92% of the full FY26 volume; 629 tripartite agreements by GAIL with CGD entities; biomethane injection points at 23 locations [V Snapshot]. GAIL is effectively India's CBG offtaker of last resort.

### 4.3.8 PNGRB tariff facts verified [V]
- **INGPL tariff order TO/NGPL/25-26/09 dated 27-Nov-2025: ₹65.69/mmBtu (GCV) levelised, effective 1-Jan-2026, "as an interim measure", vs previous ₹58.61/mmBtu → ~+12%, positive impact ~₹1,200 Cr a year.** Scope limited to **system-use gas (incl. reduction for calorific value) and capacity determination**; true-up of capex/opex, transmission loss, working days, revenue-sharing etc. at the **next tariff review effective 1-Apr-2028 (FY2027-28 exercise)** [V GAIL Reg-30 letter of 28-Nov-2025, NSE archive].
- **₹58.61 was set by the PNGRB order of 22-Mar-2023, effective 1-Apr-2023** (GAIL had sought ~₹68.55) [V-snip: GAIL disclosure title "Integrated tariff by PNGRB 24-03-2023" and ICICI Direct sector note; the GAIL PDF returned HTTP 503]. The FY24 NG-transmission revenue jump (+55%, 4.2.3b) is the financial footprint of that order [V].
- **GAIL's ask in the 2025 process:** secondary sources disagree (₹77.98, ~₹78, ₹78.72, ₹79.98); the GAIL letter does not state it. **Keep "~₹78–80 sought" [V-snip]**, not the precise ₹78.72.
- Other unified-tariff values (₹54.00 / ₹102.86; levelised ₹83.94) remain [V PNGRB MIS 13-Jan-2026, Part 1].

### 4.2.7 Reference peers — brief 5-year and 8-quarter tables (NOT members) [V screener consolidated, fetched 23-Oct-2026]

**Petronet LNG (PETRONET) — India's regas toll-collector (GAIL holds 12.50% [V AR])**
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM Jun-26 |
|---|---|---|---|---|---|---|
| Sales | 43,169 | 59,899 | 52,729 | 50,982 | 43,495 | 37,173 |
| Operating profit | 5,250 | 4,854 | 5,209 | 5,525 | 5,338 | 5,711 |
| OPM | 12% | 8% | 10% | 11% | 12% | 15% |
| PAT | 3,438 | 3,326 | 3,652 | 3,973 | 3,913 | 4,208 |
| EPS ₹ | 22.92 | 22.17 | 24.35 | 26.48 | 26.08 | 28.06 |
| Dividend payout | 50% | 45% | 41% | 38% | 38% | — |
| ROCE | 30% | 26% | 26% | 25% | 23% | — |
| Borrowings (Mar) | 3,438 | 3,345 | 3,008 | 2,657 | 2,341 | — |
| Quarter | Jun-24 | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|---|
| Sales | 13,415 | 13,024 | 12,227 | 12,316 | 11,880 | 11,009 | 11,164 | 9,442 | 5,558 |
| OP | 1,562 | 1,202 | 1,247 | 1,512 | 1,159 | 1,117 | 1,198 | **1,861** | 1,535 |
| OPM | 12% | 9% | 10% | 12% | 10% | 10% | 11% | 20% | 28% |
| PAT | 1,105 | 871 | 902 | 1,095 | 842 | 830 | 870 | **1,371** | 1,137 |
- **Read:** OP has sat in a ₹4,850–5,550 Cr band for five years while sales swung ±40% — the purest proof in the reference set that regas is a fee business. Q4 FY26 (the force-majeure quarter) was Petronet's **best-ever quarterly OP (₹1,861 Cr)** — use-or-pay capacity charges and possibly one-offs — and Q1 FY27 OP held at ₹1,535 Cr on sales of ₹5,558 Cr [V; interpretation E]. Petronet's FY26 transactions with GAIL were **₹26,594 Cr** (GAIL AR), i.e., ~61% of Petronet's FY26 revenue [E]. M-cap ≈ US$4.5 bn (companiesmarketcap) / ₹42,952 Cr (screener). Q2 FY27 board 2-Nov-2026.

**Indraprastha Gas (IGL; GAIL 22.50%) and Mahanagar Gas (MGL; GAIL 32.50%) — CGD associates**
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| IGL sales | 7,710 | 14,133 | 14,000 | 14,913 | 16,168 |
| IGL OP (OPM) | 1,894 (25%) | 2,044 (14%) | 2,388 (17%) | 1,979 (13%) | 1,876 (12%) |
| IGL PAT | 1,502 | 1,640 | 1,983 | 1,713 | 1,544 |
| IGL ROCE | 27% | 27% | 28% | 21% | 18% |
| MGL sales | n.a. (cons) | 6,299 | 6,290 | 7,264 | 8,246 |
| MGL OP (OPM) | n.a. | 1,184 (19%) | 1,844 (29%) | 1,569 (22%) | 1,446 (18%) |
| MGL PAT | n.a. | 790 | 1,285 | 1,040 | 841 |
Quarterly OP Jun-24 → Jun-26: **IGL 576, 535, 362, 493, 511, 441, 471, 421, 294; MGL 437, 413, 325, 394, 500, 336, 351, 258, 342**; PAT IGL 480 … 238; MGL 289 … 193 [V].
- **Read:** CGD profitability peaked in FY24 when APM allocation was generous and has fallen ~20–25% since as APM was cut and replaced by NWG/RLNG. GAIL is both their main gas supplier (FY26 sales to IGL ₹9,982 Cr, MGL ₹4,071 Cr [V AR]) and a 22.5%/32.5% shareholder — so a CGD margin squeeze is partly a transfer *to* GAIL's marketing book.

**Global midstream/LNG peers — INDICATIVE (companiesmarketcap.com fetched 23-Oct-2026 for m-cap and revenue; EBITDA from Part 1 [V-snip/K])**
| Company | Model | Revenue CY2024 (US$ bn) | Revenue CY2025 | Revenue TTM (to Jun-26) | M-cap 23-Oct-2026 (US$ bn) | EBITDA (latest, as in Part 1) |
|---|---|---|---|---|---|---|
| Kinder Morgan (KMI) | US gas pipelines | 15.1 [E from +12.2%] | **16.93** | 17.95 | **77.1** | Adj. EBITDA $8.39 bn (2025) [V-snip] |
| Williams (WMB) | Transco; gathering | 10.50 | **11.95** | 12.20 | **88.0** | ~$7.7 bn (2025) [K] |
| Cheniere (LNG) | US LNG exporter; GAIL's Sabine Pass seller | 15.70 | **19.97** | 21.49 | **61.5** | $6.6–7.0 bn guidance 2025 [V-snip] |
| Enbridge (ENB) | Liquids + gas pipelines + utility | 38.75 | **46.84** | 50.07 | **107.5** | ~US$14 bn [K] |
| TC Energy (TRP) | Gas pipelines (post-spin) | 8.45 | **10.97** | 11.26 | **65.3** | ~C$11 bn [K] |
| Petronet LNG | India regas | — | — | ~4.2 (₹37,173 Cr) | **4.54** | ₹5,711 Cr TTM OP |
| **GAIL** | | | ~16.0 (₹1,42,094 Cr FY26 at ₹88.31) | ~15.5 TTM (₹1,47,485 Cr at ₹94.9) | **~11.4 (₹1,07,749 Cr)** | ₹14,524 Cr ≈ $1.6 bn (FY26 at ₹88.31) |
- **Read:** Williams (m-cap ~$88 bn) is worth ~7.7× GAIL on a revenue base 25% smaller; KMI's m-cap/revenue is ~4.3× vs GAIL's ~0.7× — because GAIL's revenue is ~90% traded gas, while US pipelines' is fee income. On EBITDA, KMI earns ~5× GAIL. The relevant multiple comparison is EV/EBITDA (Part 1 §10: GAIL ~9×, NA midstream ~10–12×).

## 4.0 Supersedes — corrections to Parts 1–3 (writer: apply these)
| # | Where (Parts 1–3) | Old value / statement | New value / statement | Source (fetched this pass) |
|---|---|---|---|---|
| 1 | §5.4, Part 2 group structure | OPaL stake "~49% [K—verify]" | **GAIL holds 4.19% of ONGC Petro-additions (associate)** | GAIL AR FY26 note 47 & BRSR list |
| 2 | Trap 3, §3.2(e), stakes everywhere [K] | Petronet 12.5%, IGL 22.5%, MGL 32.5%, BCPL ~70%, IGGL 20% [K] | **Confirmed [V]**: 12.50 / 22.50 / 32.50 / 70.00 (classified associate) / 20.00; Konkan 93.50% at 31-3-26 → 100% from 6-Jul-26; Talcher 39.87% (was 33.33%); China Gas 2.75% | AR FY26 note 47 |
| 3 | §2.1–2.2 FY15–FY21 [K] | FY15 ~51 bcm … FY21 ~60.8; FY15 production ~33.7 bcm; LNG FY20 ~25–26 MMT, FY22 ~23 MMT etc. | **PPAC [V]:** consumption FY15 140.4 MMSCMD (~51.2 bcm), FY16 143.5, FY17 152.1, FY18 59.2 bcm, FY19 60.8, FY20 64.1, FY21 61.0, FY22 64.2, FY23 60.0, FY24 67.5, FY25 71.3, FY26 68.8; LNG 20.7/21.7/25.6/25.1/23.4/19.9/24.0/27.0/26.0 MMT (FY18–FY26); import dependence 54.4% (FY21) → 43.9% (FY23) → 50.1% (FY25–FY26) | PPAC Ready Reckoners 2018, 2021, FY2025-26 |
| 4 | §2.2 FY26 row | Domestic production ~34.3 bcm, LNG ~26.5 MMT, import dep. 50.6% (GAIL AR) | PPAC: **gross production 34.78 bcm (net 34.33), LNG 26.0 MMT (34,427 MMSCM), import dependence 50.1%** — GAIL AR values are its own rounded estimates; prefer PPAC | PPAC RR FY2025-26 Table 3.4 |
| 5 | §2.3, §H-2 | LNG import bill "not sourced"; est. $14–15 bn FY26 | **FY26 US$13,356 mn (−10.4%; $9.8/mmBtu); FY25 $14,908 mn; FY23 peak $17,114 mn** (DGCIS) | PPAC RR Table 3.10 |
| 6 | §7.2, Trap 10, §G, 3.3, 3.4 primer issue | Previous INGPL tariff ₹58.61 [K—verify] | **₹58.61 confirmed** — GAIL letter: ₹65.69 "compared to the previous levelized tariff of ₹58.61… ~12%… positive impact of approximately ₹1,200 Crore"; order TO/NGPL/25-26/09 dated 27-11-2025, **interim**, SUG + capacity only; next full review effective **1-Apr-2028** | GAIL Reg-30 letter 28-11-2025 (NSE archive) |
| 7 | §7.2, primer | GAIL's ask "₹78.72" | **Unverified; secondary sources give ₹77.98–79.98** — write "~₹78–80 sought" | (no primary found) |
| 8 | Status item 1, §7.4, §G | Clause 5A required unbundling "with effect from 1-Apr-2027"; withdrawal "per GAIL" | **PNGRB Notification F.No. PNGRB/M(C)/42 dated 8-Jul-2026 (Affiliate Code of Conduct Amendment Regulations, 2026) omits regulation 5A** ("Degree of legal separation"); in force on Gazette publication. The omitted text's deadline was **"on or before 31 March 2017"** (stayed by litigation) — the "1-Apr-2027" in the transcript is a mis-statement or transcription error | pngrb.gov.in 20260715-NGPL-Affiliate-Code-Amendment.doc |
| 9 | §4.5, §9.1, §F | INGPL utilisation "~75%" (122.18 ÷ 163.8) | **PPAC: INGPL average flow 109.41 MMSCMD in FY26 = 66.8% of 163.8 (FY25 115.87 = 70.7%)**; GAIL's 122.18 includes other networks and multi-network double counting | PPAC RR Table 5.1 |
| 10 | Trap 11, §4.5, §5.1, E8, §H-15 | Network 18,000+ / ~18,700 / 13,658 km unresolved; India 23,286 (Mar-25) / 27,427 (Dec-25) | **PNGRB 30-Jun-2026: GAIL 18,717 km operational (13,075 full + 5,642 partially commissioned), 1,582 km under construction; India 27,598 km operational / 33,589 km total (27,905 / 34,803 incl. tie-ins & dedicated)**. GAIL share of operational km ≈ 68% | PPAC Snapshot Oct-2026 Table 20 |
| 11 | §2.2, §5.3, E9 | Regas ~57.7 MTPA; Dahej 22.5 "from 31-3-2026"; Hazira 5.2; Dahej util. 92% | **PPAC: 53.5 MTPA on 1-Apr-2026 (Dahej 17.5, Hazira 6.0); 58.5 MTPA on 1-Oct-2026 (Dahej 22.5)**; FY26 util. Dahej 91.9%, Hazira 27.2%, Dabhol 34.5%, Kochi 26.3%, Ennore 25.1%, Mundra 17.4%, Dhamra 34.1%, Chhara 6.2%; Apr–Sep-26 Dahej 68.5% | PPAC RR Table 3.9; Snapshot Table 21 |
| 12 | Part 1 §0, §A-1, §8-13 | "India's LNG imports fell ~25%" (implicitly for the crisis period/year) | **H1 FY27 LNG imports +4.5% YoY (18,189 vs 17,414 MMSCM); consumption flat (34,769 MMSCM)**; the fall was concentrated in Mar–May 2026 (Apr −18%). Keep "~25%" only for the immediate post-FM weeks, with that label | PPAC Snapshot Oct-2026 Table 18 |
| 13 | Macro line (Units §; §0; §8-13) | Brent peak ~$118; ceasefire 7-Apr; Brent ~$95 thereafter | **Monthly Brent 2026: Mar 103.7, Apr 120.4, May 107.5, Jun 85.4, Jul 83.4, Aug 90.9, Sep 116.8**; Indian basket Sep-26 $116.09 | World Bank Pink Sheet (Apr/Jul/Oct-26); PPAC Snapshot Oct-26 |
| 14 | §4.2 "2026 monthly", §4.1 | JKM "~$24–25 reported"; Mar-26 Japan LNG 14.49; Apr 11.67 | **World Bank (latest editions): Japan LNG Mar 14.85, Apr 15.65, May 12.88, Jun 12.83, Jul 13.85, Aug 15.27, Sep 14.25; TTF Mar 17.91 … Sep 25.42; HH Jan 7.58 (cold snap), Mar 3.05, Sep 2.95**; GIXI Sep-26 $28.4 (₹2,712). The Apr-26 Japan LNG 11.67 in Part 1 (FIPI) is superseded by the World Bank's 15.65 | World Bank Pink Sheet; PPAC Snapshot |
| 15 | E14, §H-8 | Segment EBIT FY22–FY25 and Q2/Q3 FY26 "not fetched"; Q2+Q3 derived | **Full FY21–FY26 and Q1 FY25–Q1 FY27 segment PBIT now [V]** (4.2.3–4.2.4). FY25 marketing ₹7,446 Cr; FY24 ₹6,067 Cr; FY23 ₹3,079 Cr; FY22 ₹4,932 Cr | GAIL results PDFs (Q4 FY22, Q4 FY23, Q4 FY25, Q1 FY26, Q3 FY26) |
| 16 | §H-14, 3.3, 3.4 primer issue | Primer's "Q1 FY26 marketing ~₹661 Cr vs ~₹2,057 Cr" flagged as unverified/wrong | **Primer is right on the originally-reported CONSOLIDATED basis**: Q1 FY26 consolidated marketing segment PBIT ₹661.25 Cr vs ₹2,056.58 Cr (Q1 FY25) in the Q1 FY26 filing; the Q1 FY27 filing shows Q1 FY26 consolidated restated to ₹1,044.68 Cr; standalone ₹1,071.60 Cr. Fix = add the basis label, not replace the number | GAIL Q1 FY26 results PDF (consolidated segment table) |
| 17 | §5.2 | "GAIL ~48% share of India's gas marketing/RLNG" | Slide wording: "**~48% market share in India's natural gas consumption**"; AR: "share in the Country's Domestic Gas Market is ~48%" | FY26 PPT slide 19; AR |
| 18 | §H-9 | Marketing/transmission mix "unverified" | **Transmission mix FY26: RLNG 44%, APM/NAPM 26%, mid-term 24%, spot 4%, RIL-bp 2%. Marketing mix: APM/NAPM 35%, mid-term 28%, RLNG 17%, overseas 13%, spot 4%, RIL-bp 3%** | FY26 PPT slides 18–19 (rendered images) |
| 19 | §9.2, guidance | "+7–8 MTPA by 2030, ~2.5 signed" vs PPT "+4–5 MTPA" | Both are GAIL statements: PPT (May-26) "4–5 MMTPA"; call (Jul-26) "7 to 8… 2.5 sourced" and later "up to 7"; AR: FY26 SPAs executed — Vitol ~1 MTPA from 2026, QatarEnergy Trading ~0.8 MTPA from 2025 | PPT; transcript; AR |
| 20 | Status item 3 (GSPC) | Effective 1-May-2026, rename 1-Jul-2026, 1:3 GTL [V-snip] | **[V] MCA sanction received 17-Apr-2026; effective 1-May-2026; GSPL holders' record date 12-May-2026 (27,06,97,005 GGL shares; GSPC holders 35,20,17,714); GTL record date 2-Jul-2026, 1 GTL (₹10) for 3 Gujarat Energy (₹2)**. The company was already filing as "Gujarat Energy Limited (Erstwhile Gujarat Gas Limited)" on **19-Jun-2026**, so the rename took effect **before** 1-Jul (exact date not captured) | NSE archive filings 29-Apr-2026 (GGL, GSPL), 19-Jun-2026 (GEL) |
| 21 | §4.3 [K] rows 2019–Mar-2023 | APM/HPHT half-yearly values [K] | **All confirmed [V]** (3.69/9.32 … 8.57/12.46); plus FY26 APM actual 6.21–6.75 (formula below cap in 5 months) and FY27 formula Aug 7.86, Sep 9.00 | PPAC RR Table 3.11; Snapshot Table 23 |
| 22 | §9.4, transcript | LHC gas "~1.9 MMSCMD after +0.597" | Confirmed; prior allocation **1.32 MMSCMD**; 1.12 APM | Transcript |
| 23 | 4.2.1 vs Part 1 | Q1 FY27 petchem loss −₹122.5 Cr | Call says "₹130 crores" loss; filing −₹122.53 Cr segment PBIT — basis difference; use filing | Transcript; filing |
| 24 | Trap 3 / 3.3 | FY26 average rupee "≈ ₹87–88/$ [K/E]" | **PPAC: FY26 average ₹88.31/$ (FY25 ₹84.57; Sep-26 ₹95.46)**; GAIL AR states FY26 average ₹90.15 (its own basis) | PPAC Snapshot Table 25; AR |
| 25 | §5.4 CGD/§3 | "~1.67 crore PNG-D (Feb-2026); 8,692 CNG stations" | **1-Apr-2026: 1,69,49,377 PNG-D (+12.7%), 8,916 CNG stations (+10.5%)** | PPAC RR (PNGRB data) |
| 26 | §4.4 conversion | 0.038 mmBtu/scm working factor | PPAC uses **25.2 scm/mmBtu (0.0397)**; 1 MMT = 1,325 MMSCM (PPAC) vs GAIL 1 MTPA ≈ 3.6 MMSCMD (=1,314 MMSCM/yr) — consistent. ₹/mmBtu estimates in Parts 1–3 may be ~4% high | PPAC RR notes |
| 27 | §9.2 | FY25 marketing segment EBIT "not fetched"; normal ≈ ₹31/mmBtu | **FY25 SA marketing PBIT ₹7,446 Cr (₹52.9/mmBtu; ₹35.6 ex-SMTS); FY24 ₹6,067 Cr (₹44.6)** | Q4 FY25 filing; AR |
| 28 | §1.2, §C-6 SOTP | Petchem segment capital ~₹18,100 Cr (Mar-26) [E] | **Petchem segment assets ₹19,794.85 Cr (Mar-26), ₹16,994.90 Cr (Mar-25)** | AR segment note |

## 4.1 Verification table — the 40 figures the writer will lean on
Tag key for this table: **[V]** = fetched and read in THIS pass from the named primary document; **[V-P1]** = primary, fetched in Parts 1–3 earlier today, consistent with this pass but not re-opened; **[V-snip]** = secondary only.
| # | Figure | Value | Primary source (fetched?) | Agrees with Parts 1–3? |
|---|---|---|---|---|
| 1 | India gas consumption FY26 | **188.4 MMSCMD (68,753 MMSCM; −3.6%)** PPAC; 189.2 MMSCMD (−3.1%) GAIL AR | PPAC Ready Reckoner FY2025-26 T3.4 [V]; GAIL AR MD&A [V] | Yes (two sources within 0.5%) |
| 2 | Domestic gross production FY26 | 34,776 MMSCM (−3.7%) = 34.8 bcm | PPAC RR T3.4 [V] | Close (AR ~34.3) — superseded |
| 3 | LNG imports FY26 | 26.0 MMT / 34,427 MMSCM (−3.6%) | PPAC RR T3.10 (DGCIS) [V] | AR said ~26.5 — superseded |
| 4 | Import dependence FY26 | 50.1% (PPAC); 50.6% (AR) | PPAC RR [V]; AR [V] | Yes |
| 5 | LNG import bill FY26 | US$13,356 mn (FY25 $14,908 mn; FY23 $17,114 mn) | PPAC RR T3.10 [V] | New (was a gap) |
| 6 | Gas share of primary energy | 6.13% CY2025 (6.58% CY2024) | GAIL AR (citing EI Statistical Review 2026) [V] | Yes |
| 7 | Hormuz-exposed LNG share | Qatar 40.4% + UAE 12.1% = 52.5%; ~94% of LPG imports from Gulf | GAIL AR MD&A [V] | Yes |
| 8 | India regas capacity | 58.5 MTPA (1-Oct-2026); 53.5 MTPA (1-Apr-2026) | PPAC Snapshot T21; RR T3.9 [V] | No — Part 1 57.7; superseded |
| 9 | Dahej utilisation | 91.9% FY26; 68.5% Apr–Aug-2026 | PPAC [V] | Yes (92%) + new |
| 10 | GAIL NG pipeline network | **18,717 km operational (30-Jun-2026)**; "~18,700 km" (31-Mar-2026) | PNGRB via PPAC Snapshot T20 [V]; AR [V] | Yes — definition now resolved |
| 11 | India operational gas pipelines | 27,598 km (33,589 km incl. under construction) | PNGRB via PPAC Snapshot [V] | Updates 27,427 (Dec-25) |
| 12 | GAIL INGPL tariff | ₹65.69/mmBtu from 1-Jan-2026 (order 27-11-2025, interim) | GAIL Reg-30 letter 28-11-2025 [V]; PNGRB MIS [V-P1] | Yes |
| 13 | Previous INGPL tariff | ₹58.61/mmBtu (from 1-Apr-2023) | GAIL Reg-30 letter [V] | Yes — [K] upgraded |
| 14 | GAIL's ask (2025) | ~₹78–80 (₹78.72 / 77.98 / 79.98 in press) | none primary [V-snip] | Unverified |
| 15 | Unified tariff | ₹54.00 (≤300 km) / ₹102.86; levelised ₹83.94 | PNGRB NGPL Tariff MIS 13-Jan-2026 [V-P1] | Yes |
| 16 | INGPL utilisation | 109.41 MMSCMD / 163.8 = 66.8% FY26 | PPAC RR T5.1 [V] | No — Part 1 ~75%; superseded |
| 17 | GAIL transmission volume FY26 | 122.18 MMSCMD (FY25 127.32) | FY26 PPT slide 18 [V]; AR [V] | Yes |
| 18 | GAIL marketing volume FY26 | 104.21 MMSCMD (113.41 incl. subsidiaries) | AR [V]; PPT slide 19 [V] | Yes + new |
| 19 | FY27 transmission guidance | ~123 MMSCMD | Q1 FY27 transcript [V] | Yes |
| 20 | FY27 marketing guidance | ~₹4,500 Cr PBT (maintained) | Transcript [V] | Yes |
| 21 | Q1 FY27 marketing PBT (mgmt) | ₹3,353 Cr | Transcript [V] | Yes |
| 22 | Q1 FY27 marketing segment PBIT | ₹3,481.29 Cr SA (₹3,607.72 Cr cons) | Q1 FY27 results filing [V-P1] | Yes |
| 23 | FY26 marketing segment PBIT | ₹3,077.58 Cr | AR segment note [V] | Yes |
| 24 | FY26 petchem segment loss | −₹1,408.22 Cr | AR segment note [V] | Yes |
| 25 | FY26 NG transmission PBIT | ₹6,229.11 Cr on ₹11,205.94 Cr revenue | AR segment note [V] | Yes |
| 26 | FY25 marketing PBIT / SMTS one-off | ₹7,446.28 Cr incl. ₹2,440 Cr SMTS settlement | AR segment note + MD&A [V]; Q4 FY25 filing [V] | Yes + new |
| 27 | GAIL FY26 consolidated PAT | ₹7,582 Cr (FY25 ₹12,450 Cr owners / ₹12,463 Cr total) | AR Directors' Report table [V] | Yes |
| 28 | GAIL FY26 standalone PAT | ₹6,968 Cr (PBT ₹8,964 Cr) | AR MD&A 2.2 [V] | Yes |
| 29 | Q1 FY27 standalone PAT | ₹4,292 Cr (Q4 FY26 ₹1,262 Cr); PBT ₹5,773 Cr | Transcript [V] | Yes |
| 30 | Q1 FY27 consolidated | PAT ₹4,665 Cr; EBITDA ₹7,573 Cr; turnover ₹41,277 Cr | Transcript [V] | Yes |
| 31 | FY27 capex plan | ~₹11,500 Cr (call); ₹11,600 Cr (PPT) | Transcript [V]; FY26 PPT [V] | Yes |
| 32 | FY26 capex | ₹9,594 Cr (FY25 ₹10,512 Cr) | AR [V] | Yes |
| 33 | GAIL stakes in listed associates | Petronet 12.50%, IGL 22.50%, MGL 32.50% | AR note 47 + AGM RPT notice [V] | Yes — [K] upgraded |
| 34 | GAIL stake in OPaL / BCPL / IGGL / Konkan | 4.19% / 70.00% / 20.00% / 93.50%→100% (6-Jul-26) | AR note 47 [V]; transcript [V] | OPaL **No** (Part 1 ~49%) |
| 35 | APM ceiling path and Oct-2026 formula | $6.50 (FY24–25) → $6.75 (FY26) → $7.00 (FY27); formula Oct-26 $11.22 | PPAC RR T3.11 & Snapshot T23 [V] | Yes |
| 36 | HPHT ceiling Oct-26–Mar-27 | $9.89/mmBtu (Apr–Sep-26 $8.90) | PPAC Snapshot T23 [V] | Yes |
| 37 | PNGRB 2030 demand vision | ~297 MMSCMD (2040 ~495) | GAIL FY26 PPT citing PNGRB [V]; transcript [V] (PNGRB report itself not fetched) | Yes |
| 38 | Clause 5A unbundling withdrawn | PNGRB notification dated 8-Jul-2026 omits reg. 5A | pngrb.gov.in amendment document [V] | Yes — upgraded from management claim |
| 39 | Brent, Sep-2026 average | $116.8 (World Bank); $116.77 (PPAC); Aug $90.9 | World Bank Pink Sheet Oct-2026 [V]; PPAC Snapshot [V] | **No** — shared macro said ~$95 after April |
| 40 | H1 FY27 LNG imports | 18,189 MMSCM, +4.5% YoY; consumption flat | PPAC Snapshot Oct-2026 T18 [V] | **No** — contradicts "LNG −25%" if read as the year |
**Score: 37 of 40 figures [V] from primary documents read in this pass** (company filings/transcript/AR/PPT: 22; regulator/ministry PPAC/PNGRB: 13; World Bank: 2 overlapping); 2 [V-P1] (primary, earlier today); 1 [V-snip] (the ₹78.72 ask). Where two primary sources conflict (consumption 188.4 vs 189.2; LNG 26.0 vs 26.5 MMT; regas 53.5/57.7/58.5 MTPA), **PPAC is more credible** — it is the ministry's statistical cell compiling producer/DGCIS data, while GAIL's AR rounds and estimates.

## 4.4 Gap log — every §H item and every priority gap in the brief
| # | Gap (Part 1 §H / brief priority) | Status | Source / what was tried |
|---|---|---|---|
| H-1 / P-1 | India consumption, production, LNG FY15–FY21 [K] | **Filled** (FY14–FY26 full series) | PPAC Ready Reckoners June-2018, Dec-2021, FY2025-26 (public PDFs; no login) |
| H-2 / P-2 | LNG import bill by year | **Filled** (FY18–FY26, US$; ₹ estimated for FY25–FY26) | PPAC RR T3.10 (DGCIS). TradeStat HS 271111 not needed |
| H-3 / P-3 | 2026 spot JKM monthly | **Partly filled** — no free JKM series; filled with World Bank monthly Japan LNG, TTF, HH, Brent (Jan–Sep-2026) and IGX GIXI (Apr, Jun, Sep) | World Bank Pink Sheets Apr/Jul/Oct-2026; PPAC. JKM itself remains [V-snip] "reported $24–25" — label as press reports |
| H-4 / P-4 | Previous INGPL tariff ₹58.61 | **Filled** | GAIL Reg-30 letter 28-11-2025 (NSE archive) |
| H-5 / P-4 | GAIL's ₹78.72 ask | **Still open** | GAIL letter silent; press values differ (₹77.98–79.98); PNGRB order PDF not located; gailonline.com returned TLS errors/HTTP 503 |
| H-6 / P-5 | Exact GAIL stakes | **Filled** (30 investees) | AR note 47 / BRSR list; AGM RPT notice. Correction: OPaL 4.19% |
| H-7 | Energy InvIT / PIL FY26 financials | **Still open** (flows filled: 34.45 MMSCMD, 40.5% util.) | Not searched further within budget; PPAC T5.1 gives operating data |
| H-8 / P-6 | Segment EBIT FY22–FY25 and Q2/Q3 FY26 | **Filled** (FY21–FY26; Q1 FY25–Q1 FY27) | Results PDFs via screener source links; Q4 FY26 (scanned) not needed — its numbers come as comparatives in the Q1 FY27 filing |
| H-9 / P-7 | Marketing & transmission mix (FY26 PPT) | **Filled** | Rendered slides 18–19 to PNG |
| H-10 | Q1 FY27 sector supply by domestic vs RLNG | **Still open** (Part 1 split stands as partly ambiguous) | Q1 FY27 PPT text layer ambiguous; slide not rendered (budget) |
| H-11 / P-8 | Global peers | **Partly filled** — m-caps and revenues fetched (companiesmarketcap, INDICATIVE); EBITDA still [K]/[V-snip] | companiesmarketcap.com |
| H-12 | FY26 consumption conflict (Care 212) | **Closed** — PPAC 188.4 and GAIL 189.2 agree; Care's was a pre-war forecast | PPAC RR |
| H-13 | Import-dependence basis conflict | **Closed** — PPAC 50.1% (consumption basis) is the official figure; 54.35% is EI energy basis | PPAC RR |
| H-14 / P-10 | Q1 FY26 marketing ₹661 Cr vs ₹1,071.60 Cr | **Closed** — ₹661.25 Cr = originally-reported **consolidated** segment PBIT (Q1 FY26 filing); ₹1,071.60 Cr standalone; consolidated later restated to ₹1,044.68 Cr | GAIL Q1 FY26 results PDF |
| H-15 / P-11 | Network length definitions | **Closed** — 18,717 km operational incl. 5,642 km partially commissioned (PNGRB 30-6-2026); INGPL ~13,658–14,200 km | PPAC Snapshot T20; FY26 PPT |
| H-16 / P-9 | NWG "$12–13" vs Parikh 20% premium; APM path | **APM path filled**; NWG conflict **still open** — PPAC tables do not publish an NWG price; management's $12–13 likely reflects NWG bought by tender/auction at market-linked prices (as the AR says other domestic gas is bought "at discovered prices… linked to WIM, JKM, Brent") rather than the 20%-premium formula [E] | PPAC RR T3.11; AR MD&A |
| P-12 | Clause 5A withdrawal notification/date | **Filled** — PNGRB notification dated 8-Jul-2026 | pngrb.gov.in amendment doc (Gazette page itself not fetched) |
| P-13 | GSPC/GSPL/Gujarat Gas restructuring | **Filled** (MCA 17-Apr; effective 1-May; record dates 12-May & 2-Jul; 1:3 GTL); rename date **open** (before 19-Jun, not 1-Jul) | NSE archive filings (GGL/GSPL 29-Apr-2026; GEL 19-Jun-2026) |
| P-14 | Headline verifications | **Done** — see 4.1 (37/40 [V]) | — |
| — | Q1 FY27 investor PPT & transcript | Transcript **re-read in full** [V]; PPT used from Part 1 | gailebank PDF |
| — | West Asia crisis allocation (priority ladder) | **Partly filled** — Natural Gas (Supply Regulation) Order, 2026, 9-Mar-2026 under the Essential Commodities Act: Priority I (PNG-D, CNG-T, LPG production, pipeline fuel) 100%; II fertiliser 70%; III grid industry 80%; IV CGD I&C 80%; petchem then power curtailed; refineries ~65%; PPAC notifies pooled prices for diverted gas; GAIL with PPAC manages supplies [V-snip SCC Online]; gazette text not fetched | scconline.com |
| — | Rating-agency notes | **Partly** — ICRA (Dec-2025): FY27 consumption +3–4%, LNG price moderation from CY2027, sector debt ~₹30,000 Cr by Mar-26 [V-snip]; IEA (2026): India gas demand −~8% in CY2026 [V-snip] | search summaries only |
| — | GAIL Q2 FY27 | Board/call 30-Oct-2026 — not out | — |

## 4.5 New insights the first pass missed
1. **GAIL's transmission profit grows by regulatory order, not by volume — and the next order (1-Apr-2028) is set up to be large.** The 22-Mar-2023 order (₹58.61) lifted NG-transmission revenue **+55% in one year** (₹6,661 → ₹10,308 Cr, FY23 → FY24) while volume rose only 12%; the Nov-2025 order (+12%, ~₹1,200 Cr/yr) was explicitly **interim** (SUG and capacity only). The 2028 review must true-up **~5,600 km of partially-commissioned trunk lines** (JHBDPL/PBG, MNJPL, SAPL, KKBMPL-II) whose utilisation is **0–10%** (MNJPL 0.8%, SAPL 0%), plus actual capex/opex. Under cost-plus with normative volumes, empty new pipes *raise* the levelised tariff. With INGPL at only **67% utilisation**, the writer should frame transmission as a **regulated-asset-base story** with a 2028 catalyst, not a volume story. [V PPAC T5.1; GAIL letter; filings; E inference]
2. **The September-2026 price re-spike changes the Q2/Q3 FY27 set-up.** Brent averaged **$116.8 in Sep-2026** (World Bank; PPAC $116.77), TTF $25.4, GIXI $28.4, while Henry Hub stayed ~$2.9. GAIL's JCC contract (9-month average, 2-month lag) vs 3-month-Brent sales and its ~25–30% open HH cross-index book both **widen again** when crude rises — management's July caution assumed convergence. The ₹4,500 Cr FY27 guidance (₹3,353 Cr done in Q1) now looks conservative on our arithmetic [E]; the risk is the mirror image when crude falls (management: "we may lose on that number"). Expect high quarter-to-quarter volatility, not mean reversion in a straight line.
3. **The war did not shrink India's LNG intake for the half-year — it re-routed it.** PPAC: H1 FY27 LNG imports **+4.5%**, consumption flat; Dahej (Qatar-dependent) fell to 68% utilisation while **Dabhol (GAIL's Konkan LNG) rose to 43.9%**, Dhamra 46.5%, Hazira 42.4%. That is the economic case for GAIL taking Konkan LNG to 100% by cancelling MSEB's 6.5% through the NCLT-sanctioned capital reduction (6-Jul-2026) and for "West India optionality" in new SPAs. [V PPAC]
4. **India's gas grid is mostly an LNG-evacuation system.** GAIL's FY26 transmission mix: **RLNG 44% + mid-term 24% + spot 4% ≈ 72% imported**; domestic APM/NAPM only 26% [V PPT]. Domestic gross production in FY26 (95 MMSCMD) is **below FY14 (97)** — twelve years without growth — and H1 FY27 is −4.4% [V PPAC]. Every incremental MMSCMD on GAIL's pipes is imported gas, so transmission volume is ultimately a function of LNG affordability (FY23 shows the downside: transmission PBIT margin 29%).
5. **The APM "cap" cuts both ways.** In FY26 the formula price fell **below** the $6.75 cap in five months (as low as $6.21), so ONGC/OIL received less than the cap; in FY27 the cap ($7.00) binds every month (formula up to $11.59). The cap is an asymmetric option written by producers to CGD/fertiliser users — relevant for GAIL's LHC (1.12 MMSCMD APM) and its CGD sales. [V PPAC]
6. **Hidden commitments grew sharply in FY26.** Lease commitments not yet commenced jumped to **₹9,847 Cr (from ₹3,088 Cr)** — new LNG-carrier charters to 2038 — and non-fund guarantees for group companies stand at **₹11,744 Cr**; the naphtha excise dispute is **₹3,768 Cr** with interest (Supreme Court). None is in net debt. Meanwhile **Petronet supplies ~₹26,600 Cr of GAIL's gas (≈21% of marketing revenue)** — the single counterparty through which a Gulf shock enters GAIL. [V AR]
7. **GAIL is India's CBG offtaker.** 99 of 194 SATAT CBG plants sell through GAIL; GAIL bought **88.2 TMT of 96.5 TMT (91%)** of CBG in FY26 and **85.5 TMT in H1 FY27 alone** — the H1 run-rate is ~2× FY26 [V PPAC]. Small in ₹ today but the fastest-growing gas molecule GAIL touches, and the 5% CBO by FY29 makes it mandatory demand.
8. **The marketing "normal" is the mid-point of an ₹8,000 Cr-wide range.** Standalone marketing PBIT: **FY21 −₹702 Cr, FY22 ₹4,932 Cr, FY23 ₹3,079 Cr, FY24 ₹6,067 Cr, FY25 ₹7,446 Cr (incl. ₹2,440 Cr one-off), FY26 ₹3,078 Cr, Q1 FY27 ₹3,481 Cr in one quarter** [V filings]. A writer should present ₹4,500 Cr as management's planning anchor inside a historically observed −₹700 to +₹7,400 Cr band.

### New primer issues — `primers/gail-india.html` (add to the Part 3 §3.4 list)
- **gail-india.html — Q1 FY26 marketing figure: keep, but label the basis.** "~₹661 Cr vs ~₹2,057 Cr" is the **originally-reported consolidated** marketing segment PBIT (₹661.25 Cr vs ₹2,056.58 Cr, Q1 FY26 results filing). Standalone was ₹1,071.60 Cr (vs ₹2,032.80 Cr); the Q1 FY27 filing restates consolidated Q1 FY26 to ₹1,044.68 Cr. Part 3's "verify / replace" note is withdrawn — add "(consolidated, as reported)".
- **gail-india.html — prior tariff now verified:** the INGPL tariff rose from **₹58.61 to ₹65.69/mmBtu (+~12%, ~₹1,200 Cr a year) from 1-Jan-2026** under PNGRB order TO/NGPL/25-26/09 (27-Nov-2025), an **interim** order covering SUG and capacity only; full true-up at the **next review effective 1-Apr-2028**. Replace "cut" with "interim increase, below what GAIL sought (~₹78–80)"; drop the precise "₹78.72" unless a primary source is cited.
- **gail-india.html — unbundling: cite the regulator, not just management:** PNGRB's notification dated **8-Jul-2026** omits regulation 5A (legal separation of transmission and marketing). The original deadline in the clause was **31-Mar-2017** (not "1-Apr-2027").
- **gail-india.html — OPaL stake:** if the primer or its sources describe GAIL's OPaL holding as ~49% (or call OPaL a JV), correct to **4.19% equity (associate)** per AR FY26 note 47. BCPL is 70%.
- **gail-india.html — utilisation:** add that GAIL's integrated network ran at **~67% of its 163.8 MMSCMD capacity in FY26 (PPAC)**, and the new eastern lines (MNJPL, SAPL) at ~0–1% — context for both the tariff case and volume risk.
- **gail-india.html — network length wording:** "~18,700 km" is right but **~5,600 km of it is only partially commissioned** (PNGRB, 30-Jun-2026: 13,075 km fully operational + 5,642 km partial).
- **gail-india.html — sourcing mix:** add FY26 marketing sources (APM/NAPM 35%, mid-term 28%, RLNG 17%, overseas sales 13%, spot 4%, RIL-bp 3%) and transmission mix (RLNG 44%, APM/NAPM 26%, mid-term 24%) from the FY26 analyst-meet deck.
- **gail-india.html — segment history:** the primer's profit narrative should use the verified standalone segment PBIT series (FY22–FY26 marketing 4,932 / 3,079 / 6,067 / 7,446 / 3,078; transmission 3,806 / 1,920 / 4,524 / 5,488 / 6,229; petchem 1,245 / −1,061 / −137 / −37 / −1,408 ₹ Cr) and note that FY24's jump came from the Apr-2023 tariff order (+55% transmission revenue).
- **gail-india.html — commitments/risks:** add lease commitments of ₹9,847 Cr (LNG ship charters to 2038), the ₹3,768 Cr naphtha excise contingent liability (Supreme Court), and GAIL's ~₹26,600 Cr annual gas purchases from Petronet (related party) as the Qatar-FM transmission channel.
- **gail-india.html — India gas facts:** PPAC FY26: consumption 68.8 bcm (188 MMSCMD, −3.6%), LNG 26.0 MMT costing **US$13.4 bn**, import dependence 50.1%; H1 FY27 LNG imports +4.5% despite the war.
- **gail-india.html — CBG:** GAIL handled 91% of India's SATAT CBG sales in FY26 (88 TMT) and 85.5 TMT in H1 FY27 (PPAC).
- **gail-india.html — Q2 FY27 preview (for the next refresh):** Brent re-spiked to ~$117 in Sep-2026 (World Bank/PPAC) with HH ~$2.9 — the JCC-lag and HH cross-index gains may persist into Q2/Q3 FY27, against management's July guidance of a decline.

### Flags for the orchestrator (outside this dossier's remit)
- The shared macro context ("Brent peak ~$118; ceasefire 7-Apr-2026; Brent ~$95 thereafter") is contradicted by two primary sources: Brent averaged **$120.4 in Apr-2026** and **$116.8 in Sep-2026** (World Bank Pink Sheet; PPAC Snapshot). Sibling dossiers using the same line may need a correction.
- PPAC public PDFs (Ready Reckoner, monthly Snapshot) are freely downloadable via `ppac.gov.in/download.php?file=rep_studies/…` — no login needed — and carry the gas, LNG-value, pipeline-flow, terminal and price tables that earlier passes believed were login-gated.

*End of Part 4 (deep-research supplement, 2026-10-23).*
