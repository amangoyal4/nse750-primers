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
