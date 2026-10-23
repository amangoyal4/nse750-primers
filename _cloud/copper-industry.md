# Indian Copper (Non - Ferrous Metals || Copper): Research Dossier + Company Fact Packs

Compiled 23-Oct-2026 for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), with sections §0–12 and A–H. It covers the WHOLE Indian copper chain (mine → concentrate → smelter/refinery → rod → wire/cable → end use, plus scrap), using Hindustan Copper (HCL) as the lens.
- **Part 2** is the company fact pack (brief-companies.md): one FULL pack for the only member, Hindustan Copper, plus clearly marked REFERENCE packs (Hindalco/Birla Copper, Vedanta/Sterlite Copper, Adani Enterprises/Kutch Copper, Polycab, KEI, and global leaders). A JSON block follows.
- **Part 3** is the company-KPI appendix: summary grid (HCL row + REFERENCE rows; no combined row because the sub-sector has one member), reconciliation against our primers, primer issues, and source URLs.

**Member (1, Tier C):** Hindustan Copper Ltd (HINDCOPPER · 513599) — primer `primers/hindustan-copper.html` (refreshed 04-Jul-2026).

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source. The URL is inline or in §3.5.
- **[V-snip]** = verified only from a search-result summary or a secondary article, not the primary document.
- **[K]** = well-established public fact from memory. The source is named but was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic done for this file. Present it as "approx." or as a range.
- **[primer]** = from our own primer in primers/.
- **[screener 23-Oct-26]** = screener.in pages pulled 23-Oct-2026, ~17:38 UTC, after the close. It was a down day for the whole metals pack: HCL −3.27%, Hindalco −1.78%, Vedanta −3.56%, Adani Ent. −2.86%.

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. 1 lakh tonnes = 100,000 t = 100 kt. t = metric tonne; kt = thousand tonnes; mt/Mt = million tonnes; MTPA/mtpa = million tonnes per annum; tpa = tonnes per annum; ktpd = thousand tonnes per day.
- **Copper prices:** $/t. 1 $/t = 0.04536 c/lb, and 1 c/lb = $22.046/t. So $14,215/t ≈ 645 c/lb ≈ $6.45/lb.
- **TC/RC** is quoted as TC $/dmt of concentrate plus RC c/lb of payable copper. The benchmark convention is RC = TC/10 in c/lb (e.g. $80/t + 8.0 c/lb). A combined "c/lb" figure is TC + RC expressed per lb of copper. At ~25% Cu concentrate, $1/dmt TC is ≈ 0.18 c/lb [E].
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. HCL, Hindalco, Vedanta and Adani Ent. all have a March year-end. Global miners (FCX, SCCO, Antofagasta, BHP's copper unit, Glencore, Codelco) report on calendar years, except BHP (June year-end).
- **FX: ₹94.9 = US$1** (19-Oct-2026; record low near ₹96.8, per the run brief). This rate is used for all *current* USD↔₹ conversions. Historic-period conversions use that period's average rupee [E/K]: FY22 ~₹74.5, FY23 ~₹80.4, FY24 ~₹82.8, FY25 ~₹84.6, FY26 ~₹88.0, Q1 FY27 ~₹94. **The FY26 average of ₹88 is my composite [E]. Flag it if it drives a conclusion.**
- **Macro context** from sibling dossiers (commodity-chem-industry.md, 21-Oct-26; not re-verified here):
  - RBI repo hiked to 5.50% on 7-Oct-2026.
  - West Asia war from 28-Feb-2026 → Hormuz closure, Brent peaked at ~$118/bbl, ceasefire 7-Apr-2026.
  - Since 24-Jul-2026, a 10% Sec 301 tariff applies on India on top of MFN.
  - Sec 232 50% on copper/aluminium derivatives.
- **"MIC"** = metal in concentrate: tonnes of copper *contained* in concentrate. It is HCL's production unit. Concentrate itself is ~17–26% Cu by weight (HCL corporate presentation Aug-2026 [V]).

---

## Q2 FY27 status (as of 23-Oct-2026)

None of the copper-relevant companies has reported Q2 FY27 yet. The two downstream cable makers (Polycab, KEI) already have.

| Company | Role in copper | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|---|
| **Hindustan Copper** (member) | Miner (MIC) | **10-Aug-2026** (psuwatch, 10-Aug-26, 3:59 pm) [V]; corporate presentation filed 18-Aug-2026 [V BSE] | **Not announced** as of 23-Oct [V screener: no "upcoming result" date]. Trading-window Reg 74(5) certificate filed 8-Oct. FY26's Q2 board was in **mid-Nov 2025** [K; PIB's year-end review prints the Q2 FY26 release without a date]. Expect ~early–mid Nov-2026 [E]. |
| Hindalco (REFERENCE) | Custom smelter + rod (Birla Copper, Dahej) | **7-Aug-2026** (concall 4 pm, 7-Aug) [V transcript] | **6-Nov-2026** [V screener "Upcoming result date"] |
| Vedanta (REFERENCE) | Refinery (Silvassa); Tuticorin smelter shut | Late Jul-2026 (PPT filed Jul-2026) [V screener concall list] | **28-Oct-2026** [V screener] |
| Adani Enterprises (REFERENCE) | Kutch Copper smelter (Mundra) | Late Jul-2026 (Q1 FY27 deck) [V] | **28-Oct-2026** [V screener] |
| Polycab (context) | Wires & cables (user) | — | **Reported:** Q2 FY27 sales ₹9,899 Cr, OP ₹1,422 Cr (14%), PAT ₹990 Cr [V screener] |
| KEI (context) | Wires & cables (user) | — | **Reported:** Q2 FY27 sales ₹3,776 Cr, OP ₹377 Cr (10%), PAT ₹262 Cr [V screener] |
| Freeport-McMoRan (global) | Miner | — | Q3 CY26 results **27-Oct-2026** (pre-market) [V FCX 2-Oct-26 release] |
| Southern Copper (global) | Miner | — | Q3 CY26 **reported 20-Oct-2026** [V SEC 8-K ex-99.1] |

**Still listed?** All companies above are listed. Four live corporate facts change the analysis:
1. **The Government sold 6% of HCL via an OFS on 25–26-Aug-2026.**
   - DIPAM set a floor of **₹514**, a 10.45% discount to the ₹574 close of 24-Aug. The offer was a 3% base plus a 3% green shoe, with 25,000 shares for employees and 10% of the offer for retail. Mint estimated **~₹3,000 Cr** of proceeds [V outlookbusiness 24-Aug-26].
   - The non-retail book was reportedly 3.41× covered on day 1 and the green shoe was exercised [V-snip].
   - Screener's Sep-2026 shareholding confirms the result: **promoter (President of India) 66.14% → 60.14%**; FII 5.96% → 7.08%; DII 4.84% → 5.02%; public 23.05% → 27.77%; shareholders 13.6 lakh [V screener].
   - **Every primer/press figure of "66.14%" is now stale.**
2. **The HCL share price has fallen ~30% from the OFS level.**
   - Path: ₹574 (24-Aug) → ₹514.5 (11-Sep) → ₹468 (13-Oct) → **₹399.05 (23-Oct)**. The last five sessions alone fell −13% (₹458 → ₹399) [V screener price API].
   - LME copper did *not* collapse: cash eased from $14,822 (12-Oct) to $14,215 (22-Oct), −4%, while LME on-warrant stocks rose 225 kt → 273 kt [V westmetall].
   - Peers fell the same day. **No company-specific trigger was found** (announcements were only management changes, 9–12 Oct) — FLAG for the writer; do not invent a cause.
   - **M-cap is now ₹38,584 Cr, P/E 31.9× TTM**, versus the primer's ~₹48,000 Cr and ~49× (end-Jun) [V screener].
3. **Vedanta demerged into five listed companies; four new ones listed on 15-Jun-2026** [primer vedanta.html]. Copper (Silvassa refinery, the shut Tuticorin smelter, Fujairah rod) **stays in residual Vedanta Ltd (VEDL)** together with the ~63% Hindustan Zinc stake.
   - Screener's VEDL consolidated P&L is now restated for continuing operations: FY26 sales ₹78,437 Cr, OP ₹23,183 Cr, PAT ₹25,096 Cr [V screener]. The primer's ₹1,74,075 Cr is the pre-demerger whole.
   - **Do not compare the two.**
4. **HCL has a new top team.**
   - The press now captions **Anupam Misra as CMD** (psuwatch, 10-Aug-26 [V-snip: photo caption only]). The FY26 PIB year-end review quoted Sanjiv Kumar Singh as CMD.
   - New Malanjkhand unit head (Abhimanue Singh, 11-Oct-26) and a new ED Mining-Production (Nagesh Shenoy, 12-Oct-26); Taloja/Gujarat unit head changed 9-Oct-26 [V screener announcements].
   - Verify the CMD's appointment date before printing it.

---

## READ THIS FIRST: ten definitional traps

1. **MIC is not cathode, and HCL is (today) not a metal producer.**
   - HCL's output is **27,421 t of copper contained in concentrate (MIC)** in FY26, from **36.72 lakh t (3.67 Mt) of ore** [V AR FY26].
   - Its own smelters are shut: **Khetri since Dec-2008; Ghatsila/ICC smelter, refinery, acid and nickel plants since Dec-2019** [V AR FY26 note 3].
   - Own cathode/CCR production "remained suspended during the year due to business economic decision for direct sale of Copper Concentrate which gives better realization" [V AR FY26]. FY26 cathode sales were just **8 t**.
   - The **12,886 t of CC wire rod** made at Taloja is **third-party tolling** (a conversion fee, not HCL metal) [V].
   - **Never add HCL's MIC to India's refined copper output.** HCL's concentrate is an *input* to Hindalco/Adani and is counted again when they refine it.
2. **"India's copper production" has four different numbers:**
   - (a) **Ore mined:** 3.67 Mt (FY26).
   - (b) **Mine metal content / MIC:** ~27 kt.
   - (c) **Primary refined cathode:** ~704 kt in FY26 = Hindalco 422 + Vedanta-Silvassa 170 + Kutch 112 (HCL AR FY26 MD&A [V]); USGS gives 620 kt for CY2025 [V].
   - (d) **Refined + secondary (scrap-based) supply.** Hindalco's market slide puts total domestic copper demand at ~1.56 Mt in FY26, incl. ~0.6 Mt scrap [V Hindalco Q1 FY27 deck, §2].
   - Always state which one you mean.
3. **Ore *mined* ≠ ore *treated*; ore grade ≠ recovered grade.**
   - IBM reports ore produced at **0.82% Cu** (FY23), but ore treated in FY23 at a printed **2.35%** — a data error, because Rajasthan is printed at 5.27% [V IMYB 2023]. Do **not** quote 2.35%.
   - HCL's *effective* MIC yield (MIC ÷ ore mined) is **~0.73–0.75%** (FY24–FY26). That figure is head grade × recovery [E from V data].
   - HCL's reserves average **1.31%**, but total reserves+resources average **0.94%** (company, 1-Apr-2025) [V presentation]. The MD&A also quotes "0.88%" for HCL's share of India's R&R [V].
   - Concentrate grade is 22–23% Cu (IMYB: 22.47% FY23) [V].
4. **HCL standalone = consolidated.**
   - Consolidation adds only 74%-owned **Chhattisgarh Copper Ltd** and equity-accounts 30%-owned **KABIL**, both immaterial. FY26 consolidated PAT is ₹919–920.66 Cr vs standalone ₹920.67 Cr [V screener note; V AR].
   - Use standalone (ICRA and the company do).
5. **Three EBITDA numbers for HCL FY26:**
   - **Company EBITDA ₹1,533.83 Cr** on sales of ₹3,054.40 Cr = **50.2%**. This is pre-exceptional and includes other income [V AR].
   - **Screener OP ₹1,463 Cr** on revenue from operations of ₹3,078 Cr = **48%** [V].
   - Screener books the **₹95.75 Cr exceptional** (a one-time Post-Retirement Medical Scheme provision, Q3 FY26) inside "other income" (Dec-25 quarter OI −₹78 Cr).
   - "Sales" (₹3,054.40 Cr) ≠ "Revenue from operations" (₹3,077.92 Cr). The latter adds services ₹9.5 Cr and other operating income ₹14.0 Cr [V AR note 32].
6. **LME vs HCL realisation (by-products and pricing lag).**
   - HCL's FY26 sales ÷ MIC sold = **₹11.16 lakh/t ≈ $12,680/t at ₹88**. That is **~117% of the FY26 average LME cash ($10,817/t)**. FY25 was ~106%; FY22–FY24 were 95–98% [E from V data].
   - Reasons: (i) concentrate is sold on **provisional pricing** with final settlement on assay and the quotational-period price. In a sharply rising year the "differential sales value" is booked upward (auditor's emphasis of matter [V]). (ii) **Gold and silver payables** in the concentrate rode a doubling of gold ($3,218/oz Apr-25 → $4,753 Jan-26) and silver (~$32 → ~$92/oz) [V World Bank]. (iii) TC/RC deductions fell to ~zero.
   - **Do not write "HCL realises the LME price."** Write "HCL realises an LME-linked price, net of TC/RC, plus payable precious metals."
   - Sulphuric acid is a **smelter** by-product (Hindalco/Adani), not HCL's.
7. **TC/RC direction (the most common error).**
   - TC/RC is what the **miner pays the smelter**. **Low or negative TC/RC = good for miners, bad for custom smelters.**
   - The 2026 annual benchmark is **$0/t and 0.0 c/lb**, the lowest ever, vs $21.25 / 2.125 c in 2025 [V thedeepdive 12-Oct-26].
   - **Spot TCs are about −$235 to −$240/dmt** (9-Oct-26 weekly assessment) [V same]. Hindalco quoted −26 to −30 c/lb all-in for Apr–Jun 2026 [V transcript]. Smelters are now **paying** miners to take concentrate.
   - Antofagasta booked TC/RC as a **credit of $18.7m** in H1-2026, vs a $29.7m expense in H1-2025 [V FCA RNS].
8. **"Capacity" means four things:**
   - **Ore-mining capacity** (HCL 4.21 MTPA "present" → 12.2 MTPA FY30).
   - **Milling/concentrator capacity** (HCL 47 lakh t = 4.7 MTPA: MCP 25, KCC 18, ICC 4 [V presentation]; the primer says ~3.8 MTPA).
   - **Smelting/refining capacity** (cathode t).
   - **Rod (CCR) capacity.**
   - HCL lists "refined copper capacity" of 0.685 lakh t (Ghatsila + GCP), but it is idle [V AR MD&A]. **Do not add idle HCL capacity to India's operating smelting capacity.**
9. **Hindalco "metal sales" ≠ Hindalco cathode production ≠ India refined output.**
   - Hindalco FY26 copper **metal sales** were **487 kt** (and CCR sales 373 kt) [V Hindalco Q4 PR].
   - HCL's MD&A credits Hindalco with **4.22 lakh t of refined production** in FY26 [V].
   - Sales can exceed own-smelter output: CCR is made from purchased cathode, and there is inventory and trading.
   - BigMint's "Hindalco ~0.45 Mt, Kutch ~0.05 Mt" (28-Apr-26) [V] conflicts with Adani's own **114.2 kt Kutch FY26 production** [V AEL deck]. Use the company numbers.
10. **Trade-data units and HS codes.**
    - TradeStat quantities are in kg. HS **2603** = ores & concentrates (gross weight, not Cu content). **7402** = unrefined copper/anodes. **7403** = refined copper *and alloys*, unwrought (cathode is 7403.11). **7404** = scrap. **7408** = wire (incl. 8 mm rod).
    - The primer's "**~2.3 MT concentrate imports in FY25**" is wrong: TradeStat shows **1.18 Mt FY25 and 1.57 Mt FY26** (gross concentrate) [V].
    - Concentrate import value ÷ tonnes ≈ $3,779/t in FY26. At ~26–28% Cu that is roughly 0.42 Mt of contained copper [E].

---

## 0. Top-line framing (what an expert leads with)

- **India is a copper *processor*, not a copper *miner*.**
  - India has ~0.2% of world mine output (USGS: **23 kt of 23,000 kt in 2025**) and ~0.2% of world reserves (**2.2 Mt of 980 Mt**). Yet it has ~2% of world refinery output (**620 kt of 29,000 kt**) [V USGS MCS 2026].
  - HCL's MD&A frames it the same way: mining ~0.2% of world, refining capacity ~4% [V].
  - The industry value chain is therefore **imported concentrate → port-based custom smelters (Hindalco Dahej, Adani Mundra; Vedanta Tuticorin shut since May-2018) → cathode/rod → a large organised + unorganised wire/cable industry**, with scrap as a big parallel feed.
- **HCL is the only listed lens on primary mining, and its volumes have gone nowhere for a decade.**
  - MIC was **31,578 t in FY16 vs 27,421 t in FY26** (−1.4% CAGR); ore 39.1 Mt → 36.7 lakh t. The peak was 32,439 t in FY19 [V ARs].
  - FY26 revenue rose +49% to ₹3,078 Cr and PAT +97% to ₹921 Cr on **+12% MIC sold** (27,369 t vs 24,457 t). **Price did the work**: LME FY26 +15% in $, rupee ~+4%, by-product payables, TC/RC to zero [V/E].
- **Three numbers set the 2026 copper landscape:**
  - **LME cash ~$14,200–14,800/t in Sep–Oct 2026**, an all-time high zone. World Bank monthly averages: Jan-26 $13,012 → Sep-26 $14,474 [V]. CY2025 averaged $9,947; CY2026 YTD (9m) **$13,431** (+35%) [V World Bank Pink Sheet, Oct-2026].
  - **TC/RC benchmark $0 (2026); spot ~−$235/dmt.** Concentrate is the scarce input; 2027 benchmark talks (from LME Week, 19-Oct-26) may fail for the first time (Friedland) [V].
  - **₹94.9/$** (record low ~₹96.8): every $1,000/t on LME is ≈ **₹260 Cr of HCL revenue a year** at 27,400 t, and every ₹1/$ ≈ ₹39 Cr [E].
- **The Indian smelting map changed in FY26.** Primary refined output jumped **5.73 → 7.04 lakh t (+23%)** [V HCL AR]:
  - **Kutch Copper (Adani)** produced 114.2 kt in its first full year at a 500 ktpa smelter (≈23% utilisation), then 65.4 kt in Q1 FY27 (≈52%) [V AEL deck].
  - **Vedanta-Silvassa** made 170 kt and now runs at a >245 ktpa annualised rate [V-snip metal.com/ET, 7-Oct-26].
  - **Hindalco** made ~422 kt [V HCL AR].
  - Even so, India still imported **279 kt of refined copper (7403) in FY26** and exported 100 kt [V TradeStat].
- **Custom smelters are living on by-products.**
  - Hindalco copper EBITDA **fell 7% in FY26 (₹2,809 Cr vs ₹3,025 Cr)** as "declining TC/RCs" bit. It recovered to a record **₹918 Cr in Q1 FY27**, thanks to sulphuric acid realisations (the sulphur index spiked with the West Asia war) [V Hindalco PR/transcript].
  - Adani's copper EBITDA was **₹749 Cr in Q1 FY27** at 52% utilisation [V AEL deck].
  - Smelter margins are now hostage to **acid prices and domestic cathode premiums**, not TC/RC.
- **Policy points one way: more domestic mining, more smelting, more recycling.**
  - **National Critical Mineral Mission (29-Jan-2025, ₹16,300 Cr outlay + ₹18,000 Cr PSU investment)** [V PIB].
  - **Copper Vision Document (4-Jul-2025):** demand ~6× by 2047; add **5 MTPA** of smelting/refining by 2030 [V-snip PIB].
  - **₹1,500 Cr recycling incentive scheme** (guidelines 2-Oct-2025) [V PIB].
  - Record **141 mineral-block auctions in CY2025** [V PIB]. HCL was preferred bidder for **Baghwari-Khirkhori** (MP; e-auction 22-Jan-2026) [V AR].
- **HCL valuation (23-Oct-26):** ₹399; m-cap ₹38,584 Cr; P/E 31.9× TTM (TTM PAT ₹1,139 Cr); P/B 11.5×; EV/EBITDA ~26× FY26 OP / ~21.5× TTM OP; dividend yield 0.72%; ROCE 42% [V screener; E].
  - Global pure-play miners trade at ~10–14× EBITDA at peak prices [K]. **The premium is for Vision-2030 volume (4.2 → 12.2 MTPA) and scarcity**, not for current earnings.

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Products along the chain

| Stage | Product | Cu content / spec | Indian players | Unit of account |
|---|---|---|---|---|
| Mining | Copper ore (sulphide; chalcopyrite) | 0.7–1.3% Cu in India; world mines ~0.5–1% | HCL only (Malanjkhand MP, Khetri/Kolihan/Banwas Rajasthan, Surda/Kendadih Jharkhand) | Mt ore; % Cu |
| Beneficiation | **Copper concentrate** | 17–26% Cu (HCL); 22–23% avg (IMYB) + payable Au/Ag | HCL (MCP, KCC, ICC concentrators) | t concentrate (DMT); **t MIC** |
| Smelting | Matte → blister → **anode** | ~99% (anode) | Hindalco (Dahej), Kutch Copper (Mundra), [Sterlite Tuticorin shut]; HCL idle | t anode |
| Refining | **Cathode** (Grade A, LME-deliverable) | 99.99% | Hindalco, Kutch, Vedanta Silvassa (refinery fed by imported anode/blister) | t cathode |
| By-products | **Sulphuric acid** (~3.0–3.3 t per t Cu from sulphide smelting [K]); **phosphoric acid / DAP** (Hindalco); **anode slime → gold, silver**, selenium, tellurium; gypsum; slag | — | Hindalco (DAP plant), Kutch Copper, Vedanta | t acid; kg Au/Ag |
| Casting | **CC wire rod (8 mm; 8–19.6 mm)** | 99.97% | Hindalco (world's #2 rod maker outside China [V screener/Hindalco]), Vedanta Silvassa + Fujairah (UAE), Kutch Copper, HCL Taloja (tolling), cable majors' captive rod | t rod |
| Fabrication | Wire, cable, winding wire, strip, tube, inner-grooved tube (IGT), foil, alloys (brass/bronze) | — | Polycab, KEI, Havells, RR Kabel, Finolex, Apar; Hindalco (IGT Vadodara); MSMEs | km / t |
| Secondary | **Scrap** (new + old) → refined/alloy; e-waste | — | Organised: Hindalco (Pakhajan scrap melting, e-waste FY27), Lohum (HCL GCP LOI); large unorganised base | t Cu |

### 1.2 Value chain (inputs → customer) and who earns what

1. **Mine (HCL).**
   - Costs: drilling/blasting, haulage, hoisting from depth (Khetri 700 m+ [V AR]), power, water (a chronic issue at Khetri), explosives, MDO/contractor fees, royalty (price-linked) and DMF/NMET contributions.
   - Revenue: **LME-linked value of payable Cu** − TC/RC (now ~0) + payable Au/Ag.
   - **Captures the "metal rent"** when the price is high.
2. **Concentrate trade.**
   - India imported **1.57 Mt of concentrate in FY26 ($5.94 bn)**, up from 1.18 Mt ($3.85 bn) in FY25 [V TradeStat].
   - Main origins in FY23: Chile 34%, Indonesia 22%, Peru 14%, Australia 9%, Panama 8% (pre-Cobre Panama closure) [V IMYB].
   - HCL exported 3,414 t MIC-equivalent (₹406 Cr) in FY26 [V AR].
3. **Custom smelter/refiner (Hindalco, Kutch, Vedanta).**
   - Earns: TC/RC (now ~0 to negative) + **free metal** (metal recovered above the payable %) + **by-products** (acid, DAP, precious metals) + **domestic premium** + rod conversion margin.
   - Hindalco's FY26 copper EBITDA/t ≈ ₹57,700 per t of metal sold (~$655/t). Its Q1 FY27 ex-shutdown run rate is "~$1,000/t" [V/E].
4. **Rod and fabrication.**
   - Rod premiums plus conversion. Metal is **passed through** to cable makers, who price on LME/MCX + premium and hedge.
   - Polycab/KEI earn on volume × spread: **14%/10% OPM** [V screener].
5. **End-users.** Building wire, power cables (T&D, renewables, data centres), motors/transformers, ACs/refrigeration (IGT), autos/EVs, railways/metro, defence, consumer durables.

### 1.3 Where value is captured (the key point for the report)
- **In a price-up, concentrate-short market (2025–26), value sits at the mine.**
  - HCL EBITDA/t of MIC sold was ≈ **₹5.6 lakh/t ($6,370/t)** in FY26 [E from V].
  - Hindalco's smelter makes ≈ **$650–1,000/t of metal** [V/E].
  - SCCO's 64.7% EBITDA margin [V] and Antofagasta's 63.4% [V] show the same thing globally.
- **Smelters capture value when concentrate is plentiful** (TC/RC $80–90/t in 2018–2024 [K]) **and through by-products and local premiums.**
  - In India, smelters also benefit from **import-duty parity**: refined copper from non-FTA origins pays basic customs duty, while most cathode imports come duty-free from Japan under the CEPA [K]. That is why 81% of FY23 refined imports came from Japan [V IMYB].
- **Fabricators capture value from brand, distribution and approvals, not from metal.** Polycab's ROCE is 33% [V screener].

---

## 2. Size and growth

### 2.1 India copper market (FY26)

| Metric | Value | Source / tag |
|---|---|---|
| Total copper demand incl. scrap (Hindalco basis) | **~1,556 kt** (Q1 396, Q2 398, Q3 380, Q4 382) | Hindalco Q1 FY27 deck slide 14 [V]; quarterly components summed [E] |
| — of which domestic refined | ~663 kt (170/157/152/184) | same [V] |
| — of which scrap (domestic + imported) | ~603 kt (145/161/152/145) — **~39%** | same [V] |
| — of which refined imports | ~291 kt (81/80/76/54) | same [V] |
| Q1 FY27 demand | **359 kt (−9% YoY)**: imports 39, scrap 145, domestic refined 175 — "cautious buying" at record LME + West Asia supply disruption | [V Hindalco deck/transcript] |
| Primary refined production (cathode) | **704 kt** FY26 vs 573 kt FY25 (+23%) | HCL AR FY26 MD&A [V] |
| Refined imports (HS 7403, incl. alloys) | **278.9 kt, $2.77 bn** (FY25: 250.0 kt, $2.39 bn) | TradeStat [V] |
| Refined exports (7403) | **100.5 kt, $1.02 bn** (FY25: 48.9 kt) | TradeStat [V] |
| Apparent refined consumption | **~883 kt** = 704 + 279 − 100 | [E] |
| Concentrate imports (2603) | **1,572 kt, $5.94 bn** (+34% qty, +54% value) | TradeStat [V] |
| Anode/unrefined imports (7402) | 231.8 kt, $2.60 bn | TradeStat [V] |
| Scrap imports (7404) | **466.9 kt, $3.43 bn** (+35%) | TradeStat [V] |
| Wire imports (7408) | 167.7 kt, $1.83 bn | TradeStat [V] |
| **Import bill, 5 HS lines (2603+7402+7403+7404+7408)** | **$16.6 bn (~₹1.46 lakh Cr at ₹88)** vs $12.6 bn in FY25 | sum of TradeStat [E] |
| Market value of demand | ~1.56 Mt × ~₹10–12 lakh/t ≈ **₹1.6–1.9 lakh Cr (~$18–21 bn)** at FY26 prices | [E] |
| India per-capita refined use | **~0.6 kg** vs world 3.2 kg, China ~8 kg (company says 0.6 → 1 kg "in coming years") | HCL presentation (ICSG) [V] |
| India share of world refined usage | ~3% (≈0.9 Mt of ~28 Mt) | [E; ICSG world usage ~28 Mt K] |

### 2.2 Growth history and forecasts
- Apparent refined availability: **FY22 514.5 kt; FY23 704.7 kt** (IBM: production + imports − exports) [V IMYB]. FY26 ~883 kt [E]. That is a **~14% CAGR FY22–FY26** [E], helped by restocking after Tuticorin, power-sector capex and the 2024–26 cable boom.
- Primary refined production:
  - FY18 peak **0.84 Mt** (with Tuticorin) [V-snip BigMint].
  - After Tuticorin: FY21 363.6 kt → FY22 484.0 → FY23 554.2 → FY25 573 → **FY26 704 kt** [V IMYB/HCL AR].
  - BigMint projects **FY27 0.77–0.78 Mt**, surpassing FY18 by FY28–29, **~1.2 Mt by FY30**, plus ~1 Mt secondary [V-snip BigMint 28-Apr-26].
- **Demand forecasts (FLAG, vary widely):**
  - Copper Vision Document: demand **~6× by 2047** [V-snip PIB].
  - The primer's "~8.8–9.8 Mt by 2047" [primer, source unclear].
  - BigMint end-use CAGRs to FY30: construction 17%, transport 18%, infra/industrial 12%, consumer durables 6% [V-snip].
  - Treat 2047 numbers as policy aspiration.
- **Hindalco's quarterly series shows FY26 demand flat-to-down** (396 → 382 kt by quarter) and Q1 FY27 −9%. Record LME is causing **demand destruction / destocking** in India in 2026 [V]. This is a counterpoint to the "super-cycle" narrative.

### 2.3 India vs world
- World mine production **23.0 Mt (2025e)**; refinery **29.0 Mt**; reserves **980 Mt** [V USGS 2026].
- India: mine 23 kt (0.1%), refinery 620 kt (2.1%), reserves 2.2 Mt (0.22%) [V USGS]. HCL's presentation quotes India R&R as 0.21% of the world's and reserves 0.22% [V].
- China: **14.0 Mt refined (48%)**; 1.8 Mt mined [V USGS]. China is the price-setter for TC/RC and for refined demand (~57% of usage per HCL deck [V]).

---

## 3. Demand drivers and end-markets

| End-use | India share | World share | Notes |
|---|---|---|---|
| Building construction | **24%** | 26% | Housing wire, plumbing; building wire is the largest volume line for Polycab/KEI |
| Infrastructure | **19%** | 17% | Power T&D (copper in transformers, switchgear, cables), railways/metro electrification |
| Industrial | **17%** | 12% | Motors, machinery |
| Diverse/others | **17%** | — | Defence, brass/alloys, coinage |
| Consumer durables | **12%** | — | ACs/refrigeration (IGT tubes), fans, appliances |
| Transport | **11%** | 13% | Autos (avg car ~23 kg; luxury/hybrid ~40 kg, ICSG [V IMYB]); EVs ~3–4× an ICE car [K]; railways |
| Equipment (world) | — | 32% | |

Source: HCL corporate presentation Aug-2026, citing the MoM Copper Vision Document 2025 [V]. The ICSG world split by *product* (IMYB) is electrical/telecom 56%, transport 8%, consumer durables 7%, building 7%, general engineering 6%, other 16% [V]. The US (CDA via USGS) is building 42%, electrical/electronic 23%, transport 18%, consumer 10%, industrial 7% [V].

**Drivers with numbers:**
- **Power sector:** 500 GW non-fossil target by 2030/2032 [V HCL deck: "500 GW … by 2032"]. Renewables need ~3–5 t Cu/MW (wind offshore ~8–10 t/MW) vs ~1 t/MW for thermal [K, ICA]. Transmission buildout (Green Energy Corridors).
- **Data centres / AI:** copper in power distribution, busbars and cooling; ~27–40 t Cu per MW of DC capacity is often cited [K, FLAG]. AdaniConneX 2 GW plans [primer adani].
- **EVs:** PM E-DRIVE ₹10,900 Cr outlay [V HCL deck: "PM-EV drive – Total Fund Rs 10,900 Cr"]; EV ~80+ kg Cu per car vs ~23 kg ICE [K].
- **Housing/urbanisation, smart cities (100), metro & rail, PLI for electronics/ACs** [V HCL deck list].
- **Cables boom:** Polycab FY26 revenue ₹28,884 Cr (+29%), KEI ₹11,748 Cr (+21%) [V screener]. The cable industry's volume growth (KEI guides ~17–18% volume [primer]) is the closest real-time demand proxy.
- **Counter-forces:**
  - **Aluminium substitution** in power cables and conductors (Al is ~⅓ the density and ~¼ the price per tonne).
  - **Thrifting** at record prices (thinner-walled IGT, Cu-clad Al).
  - **Destocking:** Q1 FY27 demand −9% [V].
  - At $14,000+/t the substitution incentive is the strongest in a decade [E].

---

## 4. Supply side and cost structure

### 4.1 Indian capacity map (smelting/refining)

| Plant | Owner | Capacity (cathode) | FY26 output | Status / plans |
|---|---|---|---|---|
| **Birla Copper, Dahej (Gujarat)** | Hindalco | **500 ktpa** (HCL deck; IMYB) | ~422 kt refined (HCL AR) [V]; metal sales 487 kt, CCR sales 373 kt [V Hindalco] | **Smelter expansion — target FY29** ("+25% POs placed") [V Hindalco Q1 deck]; BigMint: +50–60% (+0.25–0.28 Mt), ₹2,450 Cr Gujarat investment [V-snip]; copper & e-waste recycling FY27; Pakhajan scrap melting FY27; IGT Vadodara commissioned; "downstream copper 4× by FY30" [V] |
| **Kutch Copper, Mundra (Gujarat)** | Adani Enterprises | **500 ktpa** Phase-1 | **114.2 kt** (≈23% util.) [V AEL] | Q1 FY27 65.4 kt (52%); Phase-2 +500 ktpa → 1 Mtpa [V HCL deck; V-snip metal.com]; 115 MW RE integration [V-snip]; CFO guided ₹2,800–3,100 Cr FY27 EBITDA (Feb-26) [V-snip angelone] |
| **Sterlite Copper, Silvassa (DNH)** | Vedanta | 216 ktpa per HCL deck/AR [V]; ~258 ktpa implied by "245 kt at ~95%" [E] | **170 kt** cathode [V-snip ET/metal.com] | Refinery + rod mill fed by imported anode/blister; running at >245 ktpa annualised [V-snip] |
| **Sterlite Copper, Thoothukudi/Tuticorin (TN)** | Vedanta | **400 ktpa** smelter | 0 (shut since May-2018) | Restart sought: $250m refurbishment, 8–9 months after approval, ~250 ktpa; court decision "within ~3 months" per Vedanta Copper CEO (7-Oct-26) [V-snip] |
| Ghatsila (ICC) smelter/refinery | HCL | ~19 ktpa (IMYB) | 0 (suspended Dec-2019) | Impaired; carrying ₹7.1 Cr [V AR] |
| Khetri (KCC) smelter | HCL | ~31 ktpa | 0 (suspended Dec-2008) | Impaired [V AR] |
| Gujarat Copper Project (Bharuch) — secondary | HCL | 50 ktpa | 0 | **LOI to Lohum Materials** on a revenue-share model; production to start Q4 FY27 [V presentation] |
| Taloja CCWR (Maharashtra) | HCL | 60 ktpa rod | 12,886 t (tolling) | Third-party tolling; target 60,000 tpa [V] |
| JSW (Odisha) | JSW Group | 500 ktpa announced | — | [V HCL deck: "JSW has announced smelter refinery plant capacity of 5 lakh tpa in Odisha"] |
| Indo Asia Copper (Gujarat) | — | ~35 ktpa cathode (reported) | — | [V-snip BigMint, "understood"] |

- **Operating primary capacity today:** Hindalco 500 + Kutch 500 + Silvassa ~216–258 = **~1.2–1.26 Mtpa**. HCL's MD&A quotes total installed capacity of 12.85 lakh t, which includes HCL's idle 0.685 lakh t [V].
- **Utilisation FY26:** 704 ÷ ~1,240 ≈ **57%**, depressed by Kutch's ramp-up [E].

### 4.2 Mine supply (HCL is the whole of it)

| Unit | Mines | FY26 ore (lakh t) | FY25 ore | Capacity now → FY30 (MTPA) | Notes |
|---|---|---|---|---|---|
| **Malanjkhand (MCP), Balaghat MP** | Open pit exhausted → **underground** | **24.25** (−11%) | 27.25 | **2.5 → 5.0** | "Geotechnical issues in north section, limited stope availability in south" in FY26 [V AR]; 3.0 MTPA paste-fill plant operating; residual UG works split into packages (vent, shaft, hoist, power awarded FY26; crushing & pumping tendered Mar-2026) [V AR]; depth exploration to −300 mRL (~750 m) |
| **Khetri (KCC), Jhunjhunu Rajasthan** | Khetri UG, Kolihan UG, Banwas (contract), Chandmari | **10.04** (+40%) | 7.18 | **1.5 → 3.0** | Kolihan apron feeder at 0 mRL by mid-FY27 → 12,000 → 15,000 t/month; Banwas contractor 3.34 lakh t in FY26; trackless conversion at Khetri; Kolihan EC 1.5 MTPA; water shortage (STP 1 MLD from Q2 FY27); Kolihan–Chandmari lease amalgamation pending [V AR] |
| **Indian Copper Complex (ICC), Singhbhum Jharkhand** | Surda, Kendadih, Rakha, Chapri | **2.43** (vs 0.30) | 0.30 | **0.4 → 4.2** | Surda 0.4 → 0.9 (awaiting Stage-II FC); Kendadih 0.21 → 0.40 (lease to 2-Jun-2043, EC 6-Sep-2025, deed 4-Oct-2025); **Rakha + new Chapri UG + new concentrator via MDO South West Mining Ltd — 3.0 MTPA, ~₹2,700 Cr capex, 20+10 yrs** (lease to 28-Aug-2041) [V AR] |
| **Total** | | **36.72** | 34.74 | **~4.21 → 12.2** | Company: "around 4 MTPA → 12.20 MTPA" [V] |

- **Milling capacity:** MCP 25 + KCC 18 + ICC 4 = 47 lakh tpa [V presentation].
- **The plan beyond 12.2 MTPA:** a Phase-II to **20.2 MTPA** was in earlier ARs (FY22) [V].
- **South West Mining Ltd is a JSW Group company** [K]. BigMint describes "JSW Group: long-term mine development deal with Hindustan Copper for two Jharkhand blocks, ~3 mnt/yr" [V-snip]. That matches Rakha + Chapri.

### 4.3 HCL cost structure — "where ₹100 of HCL revenue went" (FY26) [E from V AR]
- Revenue base: sales ₹3,054.40 Cr.

| Item | ₹ Cr | Per ₹100 of sales |
|---|---|---|
| Cost of production ex-D&A and finance cost | 1,615.84 | **52.9** |
| — of which royalty & cess (paid to exchequer) | 260.84 | 8.5 |
| — of which employees (1,154 people; ~₹ lakh/head not computed) | n/s | — |
| — contractors/MDO, power, stores, explosives, other (residual) | ~1,355 | ~44 |
| EBITDA (company basis, includes other income ₹71.75 Cr) | 1,533.83 | 50.2 |
| Depreciation & amortisation (mine development amortised on ore extracted) | 200.44 | 6.6 |
| Finance cost | 4.91 | 0.2 |
| Exceptional (PRMS provision) | 95.75 | 3.1 |
| Tax | 312.06 | 10.2 |
| **PAT** | **920.67** | **30.1** |
| Dividend (₹2.86/share) | 276.57 | 9.1 |
| Capex (internal accruals) | 464.53 | 15.2 |

- **Unit costs [E from V]:**
  - Cost ex-D&A per t of ore: **₹4,400 (FY26) vs ₹3,838 (FY25)**, +15% (deeper mining, the MCP north-section problems, royalty rising with price).
  - Per t of MIC produced: **₹5.89 lakh (FY26) vs ₹5.28 lakh (FY25)** ≈ **304 c/lb at ₹88 (FY26) and 283 c/lb at ₹84.6 (FY25)**. Ex-royalty: 255 c/lb (FY26) and 240 c/lb (FY25).
  - This is a "C1-like" cost **before** by-product credits and before TC/RC (which is ~0 now).
- **Cost-curve position [E, FLAG]:**
  - HCL's gross cash cost (~2.4–3.0 $/lb ex-royalty) is in line with or above Southern Copper's **2.455 $/lb gross** (Q3-26) and Antofagasta's **$2.85/lb gross** (H1-26) [V].
  - But those peers net by-products down to **$0.09/lb (SCCO)** and **$1.22/lb (Antofagasta)** [V]. HCL's payable Au/Ag is much smaller (no moly, low gold).
  - So **HCL sits in roughly the 3rd–4th quartile of the global net cash-cost curve**: profitable at $9,000+/t, highly geared at $14,000/t.
  - **No public C1 for HCL** — say "estimated".

### 4.4 Smelter economics (Hindalco/Adani) — "where ₹100 of smelter revenue goes" [E, ILLUSTRATIVE]
- Concentrate/anode/scrap purchase (LME-linked, passed through): ~88–92.
- Conversion cost (power, fuel, oxygen, consumables, labour, maintenance): ~3–4.
- Logistics/port: ~1.
- By-product credits (acid, DAP, Au/Ag, slag): +2 to +4.
- TC/RC: ~0 (2026) vs +2–3 in 2018–24.
- EBITDA: **~4–5** (Hindalco FY26: ₹2,809 Cr on ₹69,838 Cr = **4.0%**; Q1 FY27 ₹918 Cr on ₹17,232 Cr = **5.3%** [V]).

## 5. Industry structure

### 5.1 Concentration
- **Mining:** a **monopoly**. HCL holds "all the operating mining leases of copper ore in India" and access to ~45% of India's R&R [V presentation]; its MD&A SWOT says "mining lease of more than 80% of country's copper reserves" [V].
  - IBM: **9 mining leases, 3,916.85 ha** (31-Mar-2023) [V IMYB]; 5 reporting mines, all public sector.
  - New entrants come only via **auctions**: composite licences/MLs to private bidders. Hindalco is "drilling holes" on one copper exploration block [V transcript]. Vedanta, Hindalco and JSW are all looking.
- **Primary refining (FY26 output share)** [E from V HCL AR]: Hindalco 422 kt (**60%**), Vedanta-Silvassa 170 kt (**24%**), Kutch Copper 112 kt (**16%**), HCL 0%.
  - **By capacity the market is now a three-way oligopoly** (Hindalco 500, Kutch 500, Silvassa ~216–258) and becomes four-way if Tuticorin (400) restarts or JSW (500) builds.
  - Hindalco claims to serve "more than half of the country's copper requirements" [V Hindalco deck].
- **Rod:** Hindalco (world #2 outside China), Vedanta, Kutch, captive rod at cable majors, plus 7408 imports of 168 kt [V].
- **Wires & cables:** Polycab (~25–26% of the organised W&C market [K]), KEI, Havells, Finolex, RR Kabel, Apar.
  - New entrants: UltraTech/Aditya Birla (₹1,800 Cr; Gujarat plant late-2026) and Adani (cables via Kutch Copper) [primer KEI/Polycab].
- **Secondary/scrap:**
  - Highly fragmented and unorganised.
  - CPCB: 35 licensed scrap units (2.42 lakh tpa) + 132 multi-metal units (5.17 lakh tpa); IBM: 1.07 lakh tpa of organised secondary copper [V IMYB].
  - Scrap supplies ~39% of demand (Hindalco basis) [V]. Scrap imports 467 kt in FY26 [V].

### 5.2 Unlisted / MNC / PE players
- **Kutch Copper Ltd** — wholly owned subsidiary of Adani Enterprises (listed via AEL).
- **Sterlite Copper** — a division of Vedanta Ltd (listed).
- **Indo Asia Copper** (Gujarat refinery plan, reported) [V-snip]; **Lohum** (battery/metals recycler; HCL GCP LOI) [V]; **Lloyds Metals & Energy** — 12 ktpa cathode plant in DRC, Chemaf deal (75 ktpa capability) [V-snip BigMint].
- **Japanese cathode** (Pan Pacific, Mitsubishi Materials, Sumitomo [K]) — the dominant import supplier (81% of FY23 refined imports) [V IMYB].
- **Global miners selling concentrate to India:** Chile (Codelco, Antofagasta, BHP Escondida [K]), Indonesia (Freeport/PTFI — now smelting at home), Peru, Australia [V IMYB].

### 5.3 Imports and China
- India is **net-short refined copper** since the Tuticorin closure.
  - Net refined imports (7403): FY19 46 kt → FY24 **263 kt** → FY25 201 kt → FY26 **178 kt** [E from V TradeStat].
  - India was a **net exporter** in FY18 and earlier (BigMint: "The 2018 Tuticorin closure removed nearly 56% of India's refined output, turning the country from a net exporter into a net importer" [V-snip]).
  - FY22 was briefly balanced (imports 140 kt vs exports 136 kt).
- **China** owns ~48% of world refining [V USGS] and overbuilt smelting capacity. That is the root cause of TC/RC collapsing to below zero.
  - Indian smelters compete with Chinese smelters for the same Chilean/Peruvian concentrate. Hindalco says "China is not closing its excess smelting capacity" (analyst question) and that it has **85% of its concentrate needs "blocked in"** [V transcript].

---

## 6. Business-model archetypes and their economics

| Archetype | Indian example | Revenue driver | Profit driver | Margin (latest) | Capital intensity | Cycle exposure |
|---|---|---|---|---|---|---|
| **1. Integrated primary miner (concentrate seller)** | **HCL** | LME × MIC × FX + payable Au/Ag − TC/RC | (Realisation − unit cash cost) × volume; royalty scales with price | **OPM 48–54%** (FY26 / Q1 FY27) [V] | High (mine development, UG shafts, concentrators); capex ₹465 Cr FY26 → ₹2,227 Cr FY29 plan | **Maximum** to LME and FX; benefits from low TC/RC |
| **2. Custom smelter-refiner + rod** | Hindalco (Birla Copper), Kutch Copper, Vedanta (Silvassa refinery) | Metal pass-through + TC/RC + by-products + premiums | TC/RC, acid price, free metal, utilisation, rod premium | **4–5% of revenue**; ~$650–1,000/t (Hindalco) [V/E]; Adani ~₹1.15 lakh/t in Q1 FY27 [E] | Very high upfront (~$1.2bn for Kutch Ph-1 [V-snip gulfnews]); low sustaining | **Inverse** to concentrate tightness; positive to acid and Au/Ag |
| **3. Secondary refiner / recycler** | Hindalco (Pakhajan, e-waste), Lohum–HCL GCP, MSMEs | Scrap-to-cathode/alloy spread + recovered metals | Scrap discount to LME (wide when LME is high) | Hindalco: recycling "quite more attractive" than smelting even incl. acid [V transcript] | Low-moderate | Positive to high LME (more scrap flows); policy-supported (₹1,500 Cr scheme) |
| **4. Fabricator (wire/cable/tube)** | Polycab, KEI, Havells, Hindalco IGT | Volume × (metal pass-through + conversion) | Conversion spread, mix, brand/distribution | OPM **14% (Polycab), 10–12% (KEI)** [V] | Moderate | Volume-driven; metal mostly passed through (inventory gains/losses) |
| **5. State strategic/overseas acquirer** | KABIL (NALCO 40 : HCL 30 : MECL 30), ₹100 Cr paid-up [V AR] | — | — | Loss (HCL share of accumulated loss ₹5.05 Cr) [V] | — | Policy |

**How the economics differ in a sentence each:**
- The **miner** owns price risk and keeps the metal rent.
- The **smelter** is a toll processor whose toll has gone negative, so it now lives on acid, precious metals and local premiums.
- The **recycler** profits when high prices pull scrap out.
- The **fabricator** passes metal through and earns on the spread and the brand.

---

## 7. Regulation and policy

**Regulators and key laws**
- **Ministry of Mines** (HCL's administrative ministry; IBM, GSI, NMEDT); the **MMDR Act 1957** (amended 2015 for auctions, 2023 for critical minerals/exploration licences, 2025 for NMET→NMEDT) [V PIB].
- MoEF&CC (environmental and forest clearances — **the binding constraint on HCL's timelines**: Surda awaits Stage-II FC; Kendadih/Rakha Stage-I FC came 20-Jun-2025) [V AR].
- State governments (lease extensions, royalty/DMF); CPCB/SPCBs (smelter consents — the Tuticorin precedent); BIS (QCOs); DGTR/CBIC (duties); DIPAM (disinvestment).

**Key policy items (with dates)**
1. **National Critical Mineral Mission (NCMM)** — Cabinet **29-Jan-2025**; ₹16,300 Cr outlay + ₹18,000 Cr expected from PSUs; FY25–FY31.
   - GSI 230 critical-mineral projects in 2025–26; 34 critical-mineral blocks auctioned; exploration licences; 9 Centres of Excellence [V PIB year-end review].
   - **Copper is on India's critical-minerals list (2023, 30 minerals)** [K]. **The US added copper to its critical list on 7-Nov-2025** [V USGS].
2. **₹1,500 Cr Critical Mineral Recycling Incentive Scheme** — guidelines 2-Oct-2025 [V PIB].
3. **Copper Vision Document** — released 4-Jul-2025 by Union Minister G. Kishan Reddy and prepared by HCL for the Ministry: demand ~6× by 2047; **+5 MTPA smelting/refining by 2030**; secondary refining, recycling and overseas assets [V AR FY26; V-snip PIB PRID 2142191].
4. **Auction regime** — 585 blocks auctioned since 2015 (368 ML, 217 CL); **141 in CY2025 to 5-Dec, a record**; MP and Rajasthan the leading auctioning states [V PIB].
   - HCL won **Baghwari-Khirkhori** (Sidhi, MP; copper + associated minerals; CL; e-auction 22-Jan-2026; deed in progress) [V AR] and was allotted the **Bodal block** (Chhattisgarh; 3-yr exploration funded by NMEDT, with MECL) [V AR].
5. **Lease extensions:**
   - Surda to 31-Mar-2040 (order 6-Sep-2024); Kendadih to 2-Jun-2043; Rakha to 28-Aug-2041; Chandmari to 26-Dec-2042 [V AR].
   - The Surda lease **lapsed from 1-Apr-2020 to Jan-2022**, which halted ICC output — a key reason FY21–FY25 MIC was weak [V AR FY22].
6. **Copper Quality Control Order (BIS):**
   - The Copper Products QCO came in Oct-2023 (effective ~6 months later) [V-snip].
   - The **copper cathode QCO was implemented on 1-Dec-2024**: all cathode imports need BIS certification.
   - Bombay Metal Exchange and traders challenged it in the Bombay HC (petition 18-Mar-2025). The MoM says there is "no monopolistic practices or price distortion". ~10 foreign suppliers were certified by Jun-2025 [V-snip outlookbusiness/mining-technology].
   - **Effect:** non-tariff protection for domestic smelters (Hindalco, Adani, Vedanta) [E].
7. **Customs duty [K — not re-verified; FLAG]:**
   - Refined copper basic customs duty ~5% (MFN); **nil from Japan (CEPA)** and ASEAN-FTA origins with rules of origin. This explains the 81% Japan share.
   - Budget Jul-2024 cut BCD on blister copper to nil and exempted a list of critical minerals.
   - Concentrate BCD is low or nil (verify). Scrap BCD 2.5% (verify).
   - **The writer must not print duty rates without checking the CBIC tariff.**
8. **Disinvestment:** the Govt OFS of 6% in **Aug-2026** [V]. An earlier QIP (Apr-2021 to fund capex) and an earlier OFS (2021) [K] took GoI from 76% to 66.14%. Remaining headroom to the 51% PSU floor: **9.14 pp** [E].
9. **PSU governance:** MoU targets with the Ministry (HCL's capex targets: FY22 ₹428 Cr, FY23 ₹381 Cr, FY24 ₹481 Cr, FY25 ₹410 Cr, FY26 ₹465 Cr — chart labels ambiguous between target and actual [V presentation]); CAG audits (a revised audit report was issued on CAG observations for FY26 [V AR]); dividend policy (30% payout).
10. **US Section 232:**
    - Proclamation of 30-Jul-2025 imposed **50% on the copper content of semi-finished copper products and copper-intensive derivatives** (pipes, wire, rod, sheet, tube, fittings, cable, connectors, electrical components), effective **12:01 am EDT 1-Aug-2025**.
    - **Ores, concentrates, mattes, cathodes, anodes and scrap are excluded** [V Cassidy Levy, 1-Aug-2025].
    - A **phased universal duty on refined copper (15% from 1-Jan-2027, 30% from 2028)** was left for a decision after a Commerce update due 30-Jun-2026. Mid-Aug-2026 reports said Commerce recommended it, but COMEX implied only ~14.6% odds [V-snip Crux/ING]. **The final status is unverified as of 23-Oct-2026 — FLAG.**
    - Domestic sales requirements for high-quality scrap (25%) and input materials from 2027 [V-snip].
    - **India exposure:** Indian exports of copper wire (7408) and cables to the US face 50% on copper content. India's 7408 exports fell from **208 kt in FY24** (a front-loading spike) to 59 kt (FY25) and 90 kt (FY26) [V TradeStat]; the destination split was not fetched.
11. **Tuticorin closure (environment/law-and-order precedent):**
    - Police firing on anti-Sterlite protesters on **22-May-2018** killed 13; the TN government ordered permanent closure on **28-May-2018**; the Madras HC upheld it (Aug-2020); the **Supreme Court dismissed Vedanta's appeal (29-Feb-2024)** [K].
    - A 2026 restart attempt is "subject to legal and regulatory approval" [V-snip].
    - **The single largest structural shock to Indian copper in the last decade.**

---

## 8. History and cycles (narrative; full timeline in §G)

- **1967–1995: the state monopoly era.** HCL was formed in 1967 (taking over from NMDC) and integrated mine-to-wire rod: Khetri (Rajasthan, 1970s), ICC Ghatsila (Jharkhand, inherited Indian Copper Corp. assets), Malanjkhand (MP, open pit 1982) and Taloja (rod). It was **the sole producer of refined copper till 1995** [V IMYB].
- **1995–2018: liberalisation and private custom smelting.**
  - Sterlite's Tuticorin smelter (1997; later 400 ktpa) and Birla Copper Dahej (Indo Gulf, merged into Hindalco 2002 [K]).
  - India became a **net exporter of refined copper**, peaking at **0.84 Mt** output in FY18 [V-snip BigMint].
  - HCL's small smelters became uneconomic: Khetri suspended **Dec-2008** [V].
- **2018: Tuticorin shut** (22/28-May-2018). India flipped to a net importer, with Japan as the swing supplier via CEPA.
- **2019–2021: HCL's crisis and pivot.**
  - The Malanjkhand open pit reached ultimate depth, but the UG transition was delayed (contractor under-performance); the Surda lease lapsed (Apr-2020); ICC smelter suspended **Dec-2019**.
  - **FY20 net loss ₹569 Cr** (screener) on sales of ₹832 Cr. Borrowings peaked at **₹1,564 Cr (Mar-20)** [V screener].
  - HCL signed a **long-term concentrate sale agreement with "one of the Indian conglomerates" (Hindalco) on 17-Sep-2020**; ~80% of FY22 concentrate was sold under it [V AR FY22]. A QIP followed (Apr-2021) [V AR FY26 reference].
- **2021–2024: deleveraging on high copper.** LME averaged $9,317 in CY2021. Borrowings fell to ₹156 Cr (Mar-23) [V]. MIC stagnated at ~24.7–27.4 kt.
- **2024–2026: smelter build-out and the concentrate squeeze.**
  - Kutch Copper Phase-1 commissioned (first cathode ~Mar-2024 [V-snip gulfnews]; ramp-up through FY26).
  - The QCO on cathode imports (Dec-2024); global TC/RC fell from $80 (2024 benchmark [K]) to **$21.25 (2025)** and **$0 (2026)** [V].
  - Mine disruptions: Cobre Panama shut Nov-2023 [K]; Kamoa-Kakula seismic events (May-2025) [K; HCL AR notes "Grasberg and Kamoa constrained as a result of the major incidents that occurred in 2025" V]; **Grasberg mud-rush incident Sep-2025** (PTFI mill at ~67% of normal by Q3-2026; full capacity by YE-2027) [V FCX].
  - US Sec 232 (Aug-2025) and stockpiling: US refined imports 1.7 Mt in 2025 (from 0.9 Mt) [V USGS].
  - LME record highs: >$13,000 (Jan-2026), ~$14,800 (Sep/Oct-2026) [V].
- **2025–26: the policy push.** NCMM (Jan-2025), Codelco MoU (1-Apr-2025), Copper Vision Document (Jul-2025), recycling scheme (Oct-2025), record auctions (2025), HCL Vision-2030 capex ₹7,189 Cr, Rakha MDO, the 6% OFS (Aug-2026).
- **Cycle lesson:** HCL's earnings have tracked LME with **~2–3× operating leverage**, while volumes stayed flat. The last cycle trough (FY20) coincided with an operational crisis. A repeat of "falling price + execution slip" is the bear case.

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 HCL — key KPIs (definitions and values)

| KPI | Definition | FY24 | FY25 | FY26 | Q1 FY27 | Source |
|---|---|---|---|---|---|---|
| Ore production | Mt of ore hoisted/mined | 3.782 | 3.474 | **3.672** | n/s | AR [V] |
| MIC production | t Cu in concentrate | 27,404 | 25,241 | **27,421** | n/s (GAP) | AR [V] |
| MIC sold | t | 25,630 | 24,457 | **27,369** | n/s | AR [V] |
| MIC/ore (effective yield) | MIC ÷ ore | 0.725% | 0.727% | **0.747%** | — | [E] |
| Reserve grade / R&R grade | % Cu | — | — | **1.31% / 0.94%** | — | presentation [V] |
| Concentrate grade | % Cu | — | — | 17–26% range (India avg 22.5% FY23) | — | [V] |
| Recovery (concentrator) | MIC ÷ Cu in ore treated | ~90–93% typical [K] | — | — | — | not disclosed; GAP |
| Sales | ₹ Cr | 1,686.50 | 2,048.11 | **3,054.40** | 936.50 (rev. ops) | AR / psuwatch [V] |
| Realisation per t MIC sold | sales ÷ MIC sold | ₹6.58 lakh ($7,950) | ₹8.37 lakh ($9,900) | **₹11.16 lakh ($12,680)** | — | [E] |
| Realisation ÷ FY-avg LME | | 95% | 106% | **117%** | — | [E] (see trap 6) |
| Cost ex-D&A per t ore | ₹/t | — | 3,838 | **4,400** | — | [E] |
| Cost ex-D&A per t MIC | ₹ lakh/t (c/lb) | — | 5.28 (283c) | **5.89 (304c)** | — | [E] |
| EBITDA (company) | ₹ Cr / margin | ~₹584 Cr (34%, PIB) [E] | 816 (38–39%) | **1,533.83 (50.2%)** | 507.5 (54%) [V-snip] | AR/PIB [V] |
| EBITDA per t MIC sold | ₹ lakh/t | — | 3.34 | **5.60** | — | [E] |
| Royalty + cess | ₹ Cr | — | 202.83 | **260.84** | — | AR [V] |
| Capex | ₹ Cr | 481 | 410 | **464.53** | — | AR/presentation [V] |
| Reserves & resources | Mt ore @ grade | — | 767.37 @0.94% (1-Apr-25) | same | — | [V] |
| Reserves (P&P) | Mt Cu metal | — | ~2.05 Mt Cu (1-Apr-25); 2.73 Mt (1-Apr-22) | — | — | AR / IMYB [V] |
| Mine life (reserves ÷ ore rate) | yrs | — | 156.97 Mt ÷ 3.7 MTPA ≈ **42 yrs**; at 12.2 MTPA ≈ **13 yrs** (R&R 767 Mt ≈ 63 yrs at 12.2) | — | — | [E] |
| Employees | No. | 1,302 | 1,274 | **1,154** (1,134 Jul-26) | — | AR [V] |
| CCR tolling | t | 27,833 | 15,218 | 12,886 | — | AR [V] |

- **The reserves basis conflicts:** 156.97 Mt of "copper ore reserves" @1.31% = ~2.06 Mt Cu, consistent with the "~2.05 Mt Cu P&P" [V]. The FY23 IMYB quoted 2.73 Mt Cu (1-Apr-2022). **Reserves in metal terms appear to have *fallen* ~25% over three years** while R&R rose (568.75 Mt in 2018 → 767.37 Mt in 2025 [V presentation]). FLAG for the writer: the conversion of resources to reserves (feasibility work) is lagging.

### 9.2 Sensitivities [E]
- **LME:** ±$1,000/t ≈ ±₹260 Cr revenue ≈ ±₹195 Cr PAT (25% tax, royalty ~10% of the increment ignored → closer to ±₹175 Cr) at 27,400 t MIC and ₹94.9.
- **FX:** ±₹1/$ ≈ ±₹39 Cr revenue at $14,200/t.
- **Volume:** +1,000 t MIC ≈ +₹135 Cr revenue at $14,200 × ₹94.9; incremental EBITDA ~60–70% (fixed-cost leverage).
- **At 12.2 MTPA × 0.75% yield = ~91,500 t MIC**, at $10,000/t and ₹90: revenue ≈ ₹8,200 Cr [ILLUSTRATIVE].
  - Management's own Vision-2030 deck projects **PAT ~₹1,568 Cr by FY30** from a "₹589 Cr FY26 base" [primer, citing ScanX/Kotak; V-snip]. That implies a much lower price deck than spot.

### 9.3 Smelter KPIs (reference)
- TC/RC ($/dmt, c/lb), utilisation (%), cathode and CCR volumes (kt), EBITDA/t ($), acid realisation (₹/t), by-product share of EBITDA, free metal, concentrate tied up (%; Hindalco 85%).

---

## 10. Global lens

### 10.1 Production, reserves and refining by country (USGS MCS 2026) [V]

| Country | Mine 2024 (kt) | Mine 2025e | Refinery 2024 | Refinery 2025e | Reserves (kt) |
|---|---|---|---|---|---|
| Chile | 5,510 | 5,300 | 1,940 | 1,700 | 180,000 |
| Congo (DRC) | 2,990 | 3,200 | 2,560 | 2,800 | 80,000 |
| Peru | 2,740 | 2,700 | 385 | 340 | 85,000 |
| China | 1,840 | 1,800 | 12,400 | **14,000** | 41,000 |
| Russia | 1,020 | 1,300 | 896 | 950 | 80,000 |
| United States | 1,050 | 1,000 | 921 | 850 | 47,000 |
| Zambia | 823 | 940 | 189 | 270 | 21,000 |
| Australia | 765 | 730 | 434 | 460 | 100,000 (JORC 27,000) |
| Indonesia | 1,010 | **710** (Grasberg) | 349 | 400 | 21,000 |
| Kazakhstan | 724 | 710 | 498 | 500 | 20,000 |
| Mexico | 717 | 690 | 489 | 480 | 53,000 |
| Canada | 515 | 500 | 324 | 320 | 7,000 |
| Poland | 400 | 410 | 589 | 560 | 33,000 |
| Japan | — | — | 1,570 | 1,400 | — |
| Germany | — | — | 597 | 610 | — |
| Korea | — | — | 604 | 610 | — |
| **India** | **27** | **23** | **545** | **620** | **2,200** |
| Other | 2,850 | 3,000 | 2,310 | 2,100 | 210,000 |
| **World** | **23,000** | **23,000** | **27,600** | **29,000** | **980,000** |

- USGS world resources: identified 2.1 bn t (incl. 0.6 bn t past production); undiscovered 3.5 bn t [V].
- World refined balance (ICSG via HCL AR): Oct-2025 forecast of a 2026 **deficit of 150 kt** was revised to a **surplus of ~96 kt**; 2026 mine growth cut to 1.6% (from 2.3%); refined output +0.4%; usage +1.6% [V HCL AR MD&A].
  - Hindalco: **Q2 CY26 global production 7.2 Mt vs consumption 7.5 Mt → 0.3 Mt deficit** [V transcript].
  - Sources conflict on 2026 balance — FLAG. Refined may be in surplus while **concentrate** is in deficit (hence negative TCs).

### 10.2 Global leaders vs HCL

| Company | Latest period | Revenue | EBITDA / margin | Cu production | Unit cost | Valuation | Tag |
|---|---|---|---|---|---|---|---|
| **Southern Copper (SCCO)** | Q3 CY26 | **$4,696.6m** (+39%); 9M $13,237m | **$3,040.2m, 64.7%**; 9M 65.0% | 232.4 kt mined (−1.1%) | **$0.09/lb net of by-products**; 245.5 c/lb gross | n/f (EV/EBITDA ~13–15× typical [K]) | [V SEC 8-K 20-Oct-26] |
| **Freeport-McMoRan (FCX)** | Q3 CY26 update | n/a (results 27-Oct) | — | Q3 production ~830 mlb (~376 kt); sales ~750 mlb | Unit net cash cost ~$2.10/lb (5% above $2.00); 2026 guide $1.90/lb; idle/restoration ~$1.2bn 2026 | realised >$6.50/lb | [V FCX 2-Oct-26] |
| **Antofagasta** | H1 CY26 | **$4,479.0m** (+18%) | **$2,840.5m, 63.4%** | 285 kt (−9%); FY26 guide 625–655 kt | **$1.22/lb net**; $2.85 gross | ND/EBITDA 0.68× | [V FCA RNS 13-Aug-26] |
| **Codelco** | CY2025 | ~$17–19 bn [K] | — | ~1.4 Mt own mines [K] | High-cost (C1 >$2/lb) [K] | State-owned (Chile) | [K] |
| **BHP (copper)** | FY Jun-26 | Copper the largest EBITDA contributor [K] | ~50–60% [K] | ~2.0 Mt [K] | Escondida low quartile [K] | EV/EBITDA ~6–7× group [K] | [K] |
| **Glencore (copper)** | CY2025 | — | — | ~0.85–0.9 Mt (falling) [K] | — | — | [K] |
| **Hindustan Copper** | FY26 / Q1 FY27 | **₹3,078 Cr ($0.35 bn)** / ₹936.5 Cr | ₹1,463–1,534 Cr, **48–50%**; Q1 54% | **27.4 kt MIC** | ~304 c/lb gross cost ex-D&A [E] | **EV/EBITDA ~26× FY26, ~21.5× TTM; P/E 31.9×** | [V/E] |

- **Scale:** HCL's annual MIC (27 kt) is ~12% of **one quarter** of SCCO's mined copper; ~2% of Antofagasta's annual output.
- **Margins:** HCL's 48–54% is close to the global leaders' 63–65%, despite its poorer by-product credits, because the price is at a record.
- **Valuation:** HCL at ~21–26× EV/EBITDA is ~2× global leaders' typical peak-cycle multiples [K]. **Scarcity (only listed Indian miner), PSU-index flows and Vision-2030** explain it. The comparison is INDICATIVE because the global multiples were not fetched.
- **TC/RC benefit is global:** Antofagasta's TC/RC turned into a $18.7m **credit** [V]. SCCO's cash cost net of by-products is near zero [V].

---

## 11. Technology and disruption risks

- **Underground mass mining at depth:**
  - Malanjkhand UG (sub-level/blast-hole stoping with paste fill); Khetri/Kolihan to 700 m+ and exploration to −300 mRL (~750 m).
  - Risks: geotechnical failures (MCP north section, FY26), ventilation/heat, hoisting bottlenecks, and **a thin Indian UG metal-mining contractor base** ("Limited availability of competent underground Metal mining contractor" — HCL SWOT [V]).
- **MDO model:** Rakha/Chapri (SWML, 20+10 years, ~₹2,700 Cr capex [V]). It transfers execution to the private sector, but HCL shares economics (terms not disclosed; GAP).
- **Low grade and recovery:** the R&R grade is 0.94%; the tailings re-treatment (COT) plant at MCP **failed** (₹146 Cr impaired; sole technology provider did not deliver) [V AR] — a cautionary tale on beneficiation tech.
  - **Leaching** of low-grade ore (FCX's "leach innovation" [V]) could matter for Indian deposits; HCL has not announced it.
- **Smelting technology:** flash smelting (Outotec) at Dahej/Mundra; acid-plant economics; SO₂ emissions — the **Tuticorin social-licence risk** applies to every coastal smelter.
- **Substitution:** aluminium in cables, conductors, radiators and HVAC; optical fibre in telecom; thrifting at $14,000/t [V USGS substitutes].
- **Recycling:** rising scrap (39% of Indian supply) caps primary demand at high prices; the e-waste/battery recycling scheme ₹1,500 Cr [V].
- **Decarbonisation:** renewable power at smelters (Kutch 115 MW RE [V-snip]); CBAM on EU-bound products (copper is not in CBAM's first phase [K]).
- **Digital/automation:** HCL's UG LAN/leaky-feeder comms at Khetri (700 m) and MCP [V AR] — basic; automation is limited.

---

## 12. What to watch

1. **LME copper and stocks:**
   - Cash $14,215 (22-Oct-26) vs a $14,822 high (12-Oct); LME stocks 273 kt and rising [V westmetall].
   - The China stimulus/property path; the **US refined copper tariff decision (15% from 1-Jan-2027?)** and the COMEX–LME spread (Q3-26 average COMEX $6.48 vs LME $6.41/lb = ~$150/t [V SCCO]).
2. **2027 TC/RC benchmark** (LME Week, 19-Oct-2026 onward): does a benchmark get set, or move to spot-index pricing? [V].
3. **Grasberg ramp-up** (80% mid-2027; full by YE-2027 [V FCX]), Kamoa-Kakula, Cobre Panama (stockpile processing [V HCL AR]), and Chile weather/strikes (Antofagasta guidance cut [V]).
4. **HCL Q2 FY27 results (board ~Nov-2026 [E]):**
   - Expect a record quarter: LME Q2 FY27 average **$14,114/t** vs Q1's $13,349 [V WB; E] and the rupee ~₹94–95.
   - Watch **MIC volume** (Kolihan apron feeder, Kendadih/Rakha start), the **MCP UG recovery**, and **FY27 capex run-rate vs the ₹1,421.73 Cr plan**.
5. **Vision-2030 milestones:** MCP crushing & pumping award, shaft/hoist commissioning; Rakha/Chapri MDO (SWML) mine plan and concentrator; Surda Stage-II FC; Kolihan–Chandmari amalgamation; Baghwari-Khirkhori CL deed; Bodal exploration; GCP–Lohum production (Q4 FY27); Taloja tolling to 60 ktpa.
6. **Further GoI OFS** (9 pp of headroom to 51%) — a supply overhang.
7. **Smelters:** Kutch utilisation (>52%; Phase-2 FID); Hindalco smelter expansion (FY29), e-waste plant (FY27), Pakhajan scrap; **the Tuticorin restart court decision (~Q4 CY2026 per Vedanta)**; JSW Odisha smelter; Vedanta's Saudi smelter decision.
8. **Policy:** cathode QCO litigation; customs duty changes (Budget Feb-2027); NCMM tranche; overseas assets via KABIL/HCL (Codelco MoU; Chile/Zambia/Argentina).
9. **India demand:** Hindalco's quarterly demand slide (359 kt in Q1 FY27, −9%); Polycab/KEI volume growth; T&D/renewables orders.
10. **FX:** ₹94.9 → ₹96.8 record-low risk (positive for HCL ₹ realisation; negative for smelters' $ costs only at the margin).

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **The LME price cycle — the tide that sets HCL's P&L.**
   - LME cash averaged $9,947/t in CY2025 and **$13,431/t in CY2026 YTD** (Jan $13,012 → Sep $14,474) [V World Bank]. Spot on 22-Oct-26 was $14,215 [V].
   - Drivers: energy transition (grids, renewables, EVs), AI data-centre power build-out, US tariff-driven stockpiling (US refined imports 1.7 Mt in 2025 vs 0.9 Mt [V USGS]), and mine disruptions.
   - HCL's FY26 PAT doubled on +12% volume. Q1 FY27 OPM was 54% [V].
   - **Reasoning:** HCL has ~50% operating leverage to price, and its volumes are fixed in the short run, so the stock is a call option on copper.
   - Counterpoint: LME stocks are rising (225 → 273 kt in October [V]), ICSG now sees a 2026 refined *surplus* (~96 kt [V HCL AR]), and Indian demand fell 9% in Q1 FY27 [V].
2. **The concentrate squeeze: TC/RC at zero or negative (miners win, custom smelters lose).**
   - Benchmark $80 (2024) → $21.25 (2025) → **$0 (2026)**; spot **−$235 to −$240/dmt** (Oct-2026) [V].
   - The cause: Chinese and Asian smelter overbuild versus slow mine growth (2026 mine growth cut to 1.6% [V]).
   - For HCL it means near-zero deductions (realisation ≈ LME + precious metals).
   - For Hindalco, FY26 copper EBITDA −7% despite record LME, rescued in Q1 FY27 by **sulphuric acid** (the West Asia sulphur spike) [V]. For Adani, the Kutch ramp-up has been "constrained by limited concentrate" [V-snip].
   - **Reasoning:** the profit pool in copper has migrated upstream. India's smelter-heavy, mine-light structure is on the wrong side of this, except for HCL.
3. **Mine-expansion execution at HCL (Vision-2030: 4.21 → 12.2 MTPA; ₹7,188.9 Cr capex FY26–FY30).**
   - The plan: MCP UG 2.5 → 5.0; KCC 1.5 → 3.0; ICC 0.4 → 4.2 (Rakha/Chapri MDO 3.0, Kendadih 0.4, Surda 0.9) [V presentation/AR].
   - Capex phasing: FY26 ₹450.5 Cr, FY27 ₹1,421.7 Cr, FY28 ₹1,993.7 Cr, **FY29 ₹2,227.2 Cr**, FY30 ₹1,095.5 Cr [V psuwatch].
   - **Reasoning:** HCL's record is poor. The same 12.2 MTPA target was announced in **FY2010-11** and was "by 2028-29" in FY22 [V AR FY22]. MIC is *lower* than FY16, and MCP ore fell 11% in FY26 on geotechnical issues [V].
   - The 30× multiple requires a ~3× volume step-up within ~4 years.
4. **Ore grade, depth and cost inflation.**
   - R&R grade 0.94% (reserves 1.31%); effective MIC/ore yield ~0.75%.
   - Cost per t of ore +15% in FY26 (₹3,838 → ₹4,400) [E]. Depth exploration to ~750 m.
   - **Reasoning:** in UG mining at sub-1% grade, unit costs rise as the mine deepens. At a "normal" $9,000/t LME, HCL's margin would compress sharply (gross cost ~$6,700/t of Cu at ₹88; break-even including D&A ~$7,500–8,000/t [E]).
5. **India's import dependence and smelter build-out (from deficit to surplus processing capacity?).**
   - FY26: concentrate imports 1.57 Mt (+34%), refined imports 279 kt, scrap imports 467 kt; a 5-line import bill of **$16.6 bn** [V/E].
   - Capacity: Kutch 0.5 → 1.0 Mtpa; Hindalco +~0.25 Mtpa (FY29); possible Tuticorin 0.25–0.4; JSW 0.5; the Vision target **+5 MTPA by 2030** [V].
   - **Reasoning:** India is adding smelters in exactly the phase of the cycle when smelting earns least. Each 0.5 Mtpa smelter needs ~2 Mt/yr of concentrate, about 70× HCL's output. HCL's strategic value is rising, but the country's concentrate dependence is rising faster.
6. **Critical-minerals policy and resource access.**
   - NCMM (₹16,300 Cr), auctions (141 blocks in 2025), recycling incentives (₹1,500 Cr), KABIL overseas, Codelco MoU, HCL's new blocks (Baghwari-Khirkhori, Bodal).
   - **Reasoning:** policy is decisively supportive, but it also **ends HCL's lease monopoly over time**: private miners (Hindalco, Vedanta, JSW) are bidding for copper blocks [V transcript], and MDOs (JSW's SWML) capture part of the mining margin.
7. **Rupee at ~₹94.9/$ (record low ~₹96.8).**
   - HCL's realisation is $-linked while its costs are mostly ₹. FY26's average was ~₹88 [E]; Q2 FY27 is ~₹94–95.
   - **Reasoning:** each ₹1 is ~₹39 Cr of revenue (~2.5% of FY26 EBITDA). The rupee and LME together explain most of the FY27 earnings upgrade.
8. **US Section 232 and the COMEX–LME arbitrage.**
   - 50% on the copper content of semis/derivatives since 1-Aug-2025 (cathode, concentrate and scrap exempt); a possible refined duty of 15% from 1-Jan-2027 [V/V-snip].
   - The US hoarded refined copper in 2025 (stocks 450 kt year-end [V USGS]), tightening ex-US markets. The spread has narrowed (Q3-26 COMEX $6.48 vs LME $6.41/lb [V SCCO]).
   - Indian wire/cable exporters to the US are hit (7408 exports −57% from the FY24 spike) [V].
   - **Reasoning:** the tariff is a global price *support* (stockpiling) but a direct headwind to Indian downstream exports. A refined-copper tariff decision is a near-term LME catalyst either way.
9. **Demand: India's per-capita gap versus price elasticity.**
   - 0.6 kg/capita vs a world 3.2 kg [V]. Power T&D, renewables (500 GW), data centres, ACs (IGT), EVs (PM E-DRIVE ₹10,900 Cr [V]), housing, rail/metro.
   - But the Hindalco demand slide shows FY26 flat and Q1 FY27 −9% [V].
   - **Reasoning:** structural growth is real, but at $14,000/t substitution to aluminium and thrifting are rational. Volume growth in Indian copper demand is lagging the cable makers' rupee growth (metal inflation).
10. **Recycling and scrap as the swing supply.**
    - Scrap is ~39% of Indian supply; scrap imports +35% in FY26 [V].
    - Hindalco says recycling returns beat smelting even with acid [V transcript]. HCL itself is pivoting its idle Gujarat secondary smelter to a **Lohum revenue-share** model [V].
    - **Reasoning:** at high prices the secondary loop grows, capping primary premiums.

## B. Bespoke deep-dive themes (own sections in the report)

1. **"A miner in a country of smelters": the TC/RC inversion.**
   - Explain how the 2026 $0 benchmark and −$235 spot moved profit from Dahej/Mundra to Malanjkhand/Chile.
   - Use: Hindalco copper EBITDA by quarter (673 → … → 907 → 918) and FY (3,025 → 2,809); Adani Kutch EBITDA (−170 → 749 Cr); Antofagasta's TC/RC credit ($18.7m); SCCO's near-zero net cash cost.
   - Charts: the TC/RC benchmark series 2018–2026; smelter EBITDA/t vs miner EBITDA/t.
2. **Vision-2030 under the microscope: can HCL triple ore?**
   - Mine-by-mine (MCP UG, Khetri/Kolihan/Banwas, Surda, Kendadih, Rakha/Chapri MDO), the clearance pipeline, the capex S-curve (₹451 → 1,422 → 1,994 → 2,227 → 1,095 Cr), the history of missed targets (12.2 MTPA first announced FY2010-11), reserves-to-resources conversion, the contractor base, MDO economics.
   - Charts: ore by unit FY24–FY26; MIC FY16–FY26; capex plan vs actual; R&R growth 568.75 (2018) → 767.37 Mt (2025).
3. **India's copper balance sheet: from net exporter (FY18) to net importer and back?**
   - Tuticorin's closure; refined imports/exports FY19–FY26 (TradeStat); concentrate imports surging (1.57 Mt); scrap imports; the Japan CEPA; the QCO; Kutch ramp-up; Silvassa at 245 ktpa; the Tuticorin restart; BigMint's FY30 refined output of 1.2 Mt.
   - Charts: stacked supply (domestic refined / scrap / imports) by quarter; net refined trade by year.
4. **Price, rupee and by-products: decoding HCL's realisation.**
   - Why FY26 realisation was 117% of LME (provisional pricing, Au/Ag, rupee, TC/RC → 0); the sensitivity table; Q2 FY27 preview at $14,114 and ₹94–95.

## C. The REVENUE / PROFIT EQUATION

**HCL (miner):**

Revenue ≈ **MIC sold (t) × [LME ($/t) × payable % − TC/RC ($/t Cu) + precious-metal credits ($/t Cu)] × ₹/$** + tolling fees + other operating income

EBITDA ≈ Revenue − (ore mined × cash cost per t ore) − royalty (≈ % of value) − overheads ± other income

PAT ≈ (EBITDA − D&A (amortisation of mine development) − interest) × (1 − 25% tax)

**Worked example (FY27 run-rate, ILLUSTRATIVE) [E]:**
- MIC sold 28,000 t (FY26 27,369 + Kolihan/ICC ramp).
- LME $14,000/t; payable ~96.5% (standard for 25% concentrate [K]) → $13,510. TC/RC ~$0. Precious-metal credit ~$700/t Cu (back-solved from the FY26 117% realisation premium, part of which was pricing lag) [E]. Realisation ≈ $14,200/t.
- At ₹94.9: ₹13.48 lakh/t × 28,000 t = **₹3,774 Cr revenue** (+23% vs FY26's ₹3,078 Cr).
- Cash cost (incl. royalty, which is inside HCL's cost of production): ore 3.8 Mt × ₹4,600/t (FY26 ₹4,400 + ~5%) = ₹1,748 Cr → **EBITDA ≈ ₹2,026 Cr (54% margin)**. Q1 FY27's actual OPM was 54% [V]. Royalty scales with value, so the true cost per t would rise slightly above ₹4,600 at $14,000 copper [E].
- D&A ~₹220 Cr; interest ~₹10 Cr → PBT ~₹1,796 Cr → **PAT ~₹1,344 Cr** (vs TTM ₹1,139 Cr) → EPS ~₹13.9 → at ₹399 = **~29× forward**.
- Sensitivity: LME $10,000 (−$4,000) → revenue −₹1,060 Cr → PAT ~₹550 Cr → ~70× at ₹399. **This is the bear arithmetic.**

**Custom smelter (Hindalco/Adani):**

EBITDA ≈ cathode tonnes × [TC/RC ($/t Cu-equivalent) + free-metal gain + by-product credit (acid t × ₹/t + Au/Ag + DAP) + domestic premium + rod premium − conversion cost] × FX

- Worked example (Hindalco FY26, from reported figures): ₹2,809 Cr ÷ 487 kt = ₹57,700/t ≈ $655/t at ₹88 [E].
- Q1 FY27: ₹918 Cr ÷ 105 kt = ₹87,400/t ≈ $930/t; management's ex-shutdown figure is "~$1,000/t" [V].
- Indicative split [ILLUSTRATIVE]: TC/RC ~$0–(−50); acid ~$300–400 (3.2 t acid/t Cu × ~₹9–11k/t at war-spike prices [K/E]); precious metals/free metal ~$300–400; premiums + rod ~$200–300; conversion cost −$350–450.

**Fabricator (Polycab/KEI):** Revenue = tonnes × (metal price + conversion price); EBITDA = tonnes × conversion spread − overhead. Metal is passed through.

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Figure | Source |
|---|---|---|
| India copper demand incl. scrap, FY26 | **~15.6 lakh t** | Hindalco Q1 FY27 deck [V; sum E] |
| India import bill (concentrate + refined + anode + scrap + wire), FY26 | **~₹1.46 lakh Cr** ($16.6 bn at ₹88) | TradeStat [V; E] |
| Domestic mine output (HCL MIC), FY26 | **27,421 t** (≈2% of demand) | HCL AR [V] |
| HCL revenue / PAT, FY26 | **₹3,078 Cr / ₹921 Cr** | screener/AR [V] |
| HCL Vision-2030 capex | **₹7,189 Cr** (4.2 → 12.2 MTPA ore) | HCL / psuwatch [V] |
| HCL m-cap (23-Oct-26) | **₹38,584 Cr** (P/E 31.9×) | screener [V] |

Alternates: primary refined output FY26 **7.04 lakh t** [V]; ₹16,300 Cr NCMM outlay [V]; India reserves 163.89 Mt ore / R&R 1,660.87 Mt [V].

## E. Chart-ready datasets

**E1. LME copper cash, annual average ($/t)** — World Bank Pink Sheet (Oct-2026 update; LME grade A cash) [V]
2015: 5,510 · 2016: 4,868 · 2017: 6,170 · 2018: 6,530 · 2019: 6,010 · 2020: 6,174 · 2021: 9,317 · 2022: 8,822 · 2023: 8,490 · 2024: 9,142 · 2025: 9,947 · 2026 YTD (Jan–Sep): 13,431
*Fiscal-year averages:* FY16 5,221 · FY17 5,159 · FY18 6,449 · FY19 6,347 · FY20 5,862 · FY21 6,885 · FY22 9,694 · FY23 8,562 · FY24 8,366 · FY25 9,369 · **FY26 10,817** · H1 FY27 13,732 [V; FY averaging E]
*USGS cross-check:* LME cash 2021 422.5 c/lb ($9,315) · 2022 399.8 · 2023 384.8 · 2024 414.7 · 2025e 440 ($9,700) [V].

**E2. LME copper monthly ($/t), 2025–26** — World Bank [V]
Jan-25 8,991 · Feb 9,331 · Mar 9,740 · Apr 9,177 · May 9,533 · Jun 9,835 · Jul 9,771 · Aug 9,670 · Sep 9,984 · Oct 10,740 · Nov 10,812 · Dec 11,785 · **Jan-26 13,012** · Feb 12,951 · Mar 12,529 · Apr 12,951 · May 13,543 · Jun 13,552 · Jul 13,543 · Aug 14,326 · **Sep 14,474** · Oct-26 MTD (1–22 Oct, westmetall daily cash) ~14,531 [V/E].
- Daily: 12-Oct-26 $14,822 (window high); 22-Oct-26 $14,215; LME stocks 225,425 t (16-Oct) → 272,950 t (22-Oct) [V westmetall].
- Precious metals (World Bank): gold Apr-25 $3,218/oz → Jan-26 $4,753 → Sep-26 $4,319; silver Apr-25 $32.2 → Jan-26 $92.1 → Sep-26 $64.6 [V].

**E3. HCL physicals FY16–FY26** — HCL annual reports [V]

| FY | Ore (lakh t) | MIC (t) | MIC/ore % [E] | Cathode (t) | CCR (t) |
|---|---|---|---|---|---|
| FY16 | 39.08 | 31,578 | 0.81 | 23,024 | 26,062 |
| FY17 | 38.45 | 30,587 | 0.80 | 18,602 | 18,167 |
| FY18 | 36.75 | 31,793 | 0.87 | 25,949 | 22,211 |
| FY19 | 41.22 | 32,439 | 0.79 | 16,215 | 21,450 |
| FY20 | 39.68 | 26,502 | 0.67 | 5,340 | 8,443 |
| FY21 | 32.73 | 23,866 | 0.73 | nil | 1,360 (toll) |
| FY22 | 35.70 | 24,741 | 0.69 | 621 | 1,240 (toll) |
| FY23 | 33.47 | 24,760 | 0.74 | 7 | 6,558 (toll) |
| FY24 | 37.82 | 27,404 | 0.72 | nil | 27,833 (toll) |
| FY25 | 34.74 | 25,241 | 0.73 | nil | 15,218 (toll) |
| FY26 | 36.72 | 27,421 | 0.75 | (8 sold) | 12,886 (toll) |

- **Ore by unit (lakh t):** FY25 MCP 27.25 / KCC 7.18 / ICC 0.30 → FY26 MCP 24.25 / KCC 10.04 / ICC 2.43 [V].
- **Quarterly MIC: not disclosed in fetched sources (GAP).** IBM state split FY23: MP ore 2.165 Mt @0.91%, Rajasthan 1.108 Mt @0.68%, Jharkhand 0.053 Mt @0.88% [V].

**E4. HCL financials FY17–FY26 (₹ Cr, standalone; screener; FY17–FY19 sales from AR ten-year table)** [V]

| FY | Sales | OP | OPM | PAT | Borrowings (Mar) |
|---|---|---|---|---|---|
| FY17 | 1,204 | 223 | 18% | 62 | 472 |
| FY18 | 1,670 | 271 | 16% | 80 | 657 |
| FY19 | 1,816 | 506 | 28% | 146 | 1,070 |
| FY20 | 832 | −242 | −29% | −569 | 1,564 |
| FY21 | 1,787 | 411 | 23% | 110 | 1,137 |
| FY22 | 1,822 | 512 | 28% | 374 | 409 |
| FY23 | 1,677 | 492 | 29% | 295 | 156 |
| FY24 | 1,717 | 547 | 32% | 295 | 223 |
| FY25 | 2,071 | 738 | 36% | 469 | 167 |
| FY26 | 3,078 | 1,463 | 48% | 921 | 111 |
| TTM (Jun-26) | 3,498 | 1,758 | 50% | 1,139 | — |

**E5. HCL quarterly (₹ Cr; screener standalone)** [V]

| Qtr | Sales | OP | OPM | PAT |
|---|---|---|---|---|
| Sep-24 | 518 | 152 | 29% | 102 |
| Dec-24 | 328 | 108 | 33% | 63 |
| Mar-25 | 731 | 267 | 36% | 191 |
| Jun-25 | 516 | 212 | 41% | 134 |
| Sep-25 | 718 | 282 | 39% | 186 |
| Dec-25 | 687 | 340 | 50% | 156 (after ₹95.75 Cr exceptional in OI) |
| Mar-26 | 1,156 | 628 | 54% | 444 |
| **Jun-26 (Q1 FY27)** | **936** | **508** | **54%** | **353** |

**E6. India refined copper: production, imports, exports (kt)** [V IBM / TradeStat / HCL AR; E]

| FY | Primary cathode production | Refined imports (7403) | Refined exports (7403) | Net imports |
|---|---|---|---|---|
| FY18 | ~840 (peak, with Tuticorin) [V-snip BigMint] | n/f | n/f | net exporter |
| FY19 | n/f (Tuticorin shut May-18) | 95.7 | 49.7 | 46.1 |
| FY20 | n/f | 154.9 | 47.2 | 107.7 |
| FY21 | 363.6 (IBM) | 156.7 | 125.8 | 30.9 |
| FY22 | 484.0 (Hindalco 358.9, Silvassa 125.1) | 139.9 (IBM refined 138.5) | 136.4 (IBM 108.0) | 3.5 |
| FY23 | 554.2 (Hindalco 407.1, Silvassa 147.2) | 181.3 | 59.8 | 121.6 |
| FY24 | n/f | **373.3** | 109.9 | 263.4 |
| FY25 | 573 (HCL AR) | 250.0 | 48.9 | 201.1 |
| FY26 | **704** (Hindalco 422, Silvassa 170, Kutch 112) | 278.9 | 100.5 | 178.4 |

- Note: 7403 includes alloys. IBM's "refined" is a subset (FY23 IBM 180.6 vs 7403 181.3 — nearly identical).

**E7. India copper trade by HS, FY19–FY26 (imports; kt, $ m)** — TradeStat [V]

| FY | 2603 conc kt ($m) | 7402 anode kt | 7403 refined kt ($m) | 7404 scrap kt ($m) | 7408 wire kt ($m) |
|---|---|---|---|---|---|
| FY19 | 824 (1,754) | 132 | 96 (629) | 212 (937) | 264 (1,797) |
| FY20 | 822 (1,225) | 135 | 155 (969) | 257 (967) | 214 (1,353) |
| FY21 | 415 (797) | 156 | 157 (1,072) | 229 (930) | 89 (655) |
| FY22 | 1,019 (3,009) | 200 | 140 (1,219) | 250 (1,590) | 109 (999) |
| FY23 | 1,179 (3,410) | 239 | 181 (1,456) | 271 (1,646) | 103 (963) |
| FY24 | 1,016 (3,133) | 205 | 373 (3,063) | 310 (1,674) | 131 (1,183) |
| FY25 | 1,176 (3,848) | 270 | 250 (2,387) | 347 (2,376) | 154 (1,498) |
| FY26 | **1,572 (5,941)** | 232 (2,601) | 279 (2,768) | **467 (3,429)** | 168 (1,835) |

- Exports FY26: concentrate 12.7 kt ($40m); refined 100.5 kt ($1,020m); scrap 40.7 kt ($318m); wire 89.5 kt ($999m) [V].
- Concentrate origins FY23 (kt): Chile 400.2, Indonesia 262.8, Peru 162.4, Australia 102.4, Panama 90.9, Malaysia 31.4, Brazil 20.4 [V IMYB].
- Refined origins FY23: Japan 145.9 (81%), Tanzania 22.2 (12%), UAE 2.7 [V IMYB].

**E8. India copper reserves/resources by state (1-Apr-2020, NMI/UNFC; '000 t ore; metal kt)** — IMYB 2023 [V]
Rajasthan 867,849 ore (52.25%; metal 4,635.6; reserves 34,388) · Madhya Pradesh 386,665 (23.28%; metal 3,666.9; **reserves 120,353**) · Jharkhand 251,463 (15.14%; metal 2,779.7; reserves 9,150) · Haryana 53,816 · Karnataka 41,499 · Maharashtra 17,755 · Gujarat 12,613 · Odisha 11,991 · Andhra Pradesh 7,582 · Uttarakhand 4,220 · Nagaland 2,000 · Sikkim 958 · Meghalaya 880 · Tamil Nadu 790 · Telangana 666 · WB 113 · Arunachal 10. **All-India 1,660,870 ore (metal 12,197 kt); reserves 163,891 (metal 2,161.6 kt)**.
- By grade: ≥1.85% Cu 8.3 Mt; 1–1.85% 586.8 Mt (incl. all reserves); 0.5–1% 797.9 Mt; <0.5% 267.9 Mt [V].
- **HCL:** R&R 767.37 Mt @0.94% (6.75 Mt Cu); reserves 156.97 Mt @1.31% (1-Apr-2025); R&R 568.75 Mt (2018) → 767.36 Mt (2025) [V].

**E9. World mine production 2025e and reserves (kt Cu)** — USGS MCS 2026 [V]: see the §10.1 table.
- Earlier BGS series for 2020–2022 world totals: 20.9 / 21.8 / 22.2 Mt [V IMYB].

**E10. End-use split (India vs world, %)** — HCL presentation citing the Copper Vision Document 2025 [V]
- India: building 24, infrastructure 19, industrial 17, diverse 17, consumer durables 12, transport 11.
- World: equipment 32, building 26, infrastructure 17, transport 13, industrial 12.

**E11. TC/RC annual benchmark ($/dmt / c/lb)**
- 2018: 82.25/8.225 [K] · 2019: 80.80/8.08 [K] · 2020: 62.00/6.20 [K] · 2021: 59.50/5.95 [K] · 2022: 65.00/6.50 [K] · 2023: 88.00/8.80 [K] · 2024: 80.00/8.00 [K] · **2025: 21.25/2.125 [V]** · **2026: 0.00/0.0 [V]** · spot Oct-2026: −235 to −240 $/dmt [V].
- Hindalco: Apr–Jun 2026 at "−26 to −30 c/lb" [V].
- **The 2018–2024 values are from memory — re-verify before charting.**

**E12. India quarterly copper demand (kt)** — Hindalco Q1 FY27 deck [V]

| Qtr | Domestic refined | Scrap | Refined imports | Total |
|---|---|---|---|---|
| Q1 FY26 | 170 | 145 | 81 | 396 |
| Q2 FY26 | 157 | 161 | 80 | 398 |
| Q3 FY26 | 152 | 152 | 76 | 380 |
| Q4 FY26 | 184 | 145 | 54 | 382 |
| Q1 FY27E | 175 | 145 | 39 | 359 |

**E13. Hindalco India copper segment (₹ Cr; kt)** [V Hindalco PRs; FY22–FY24 K]

| Period | Revenue | EBITDA | EBITDA % | Metal sales | CCR sales |
|---|---|---|---|---|---|
| FY22 | ~₹30,700 [K] | ~₹1,800 [K] | — | — | — |
| FY23 | ~₹42,000 [K] | ~₹2,300 [K] | — | — | — |
| FY24 | ~₹47,000 [K] | ~₹2,300 [K] | — | — | — |
| FY25 | 54,703 | 3,025 | 5.5% | 491 | 394 |
| FY26 | 69,838 | 2,809 | 4.0% | 487 | 373 |
| Q4 FY25 | 14,565 | 614 | 4.2% | 135 | 82 |
| Q1 FY26 | 14,886 | 673 | 4.5% | 124 | 104 |
| Q4 FY26 | 22,156 | 907 | 4.1% | 128 | 91 |
| Q1 FY27 | 17,232 | 918 | 5.3% | 105 | 96 |

- **The FY22–FY24 rows are approximate memory values — FLAG/verify** from Hindalco FY24 and FY23 PRs.

**E14. Kutch Copper timeline (Adani)** [V/V-snip]
- 2021: AEL announces Kutch Copper (Mundra), a 1 Mtpa two-phase plan [K/V-snip wirecable].
- ~Mar-2024: first cathode dispatched (Phase-1, 0.5 Mtpa; ~$1.2 bn) [V-snip gulfnews/projectblue].
- FY26: production 114.2 kt (~23% util.); Q4 FY26 depreciation start pushes AEL to a Q4 loss [V AEL; primer].
- Q1 FY27: 65.4 kt (52% of annual capacity); copper EBITDA ₹749 Cr (vs −₹170 Cr) [V AEL deck; V-snip psuconnect].
- Phase-2: +0.5 Mtpa → 1 Mtpa (timing not fixed) [V HCL deck].
- Copper-vertical debt (AEL deck table): ₹5,063 Cr + ₹3,782 Cr = ₹8,844 Cr in one column and ₹4,989 + ₹5,553 = ₹10,542 Cr in another. The column headers (likely "debt / capital creditors / total" for two dates) were not legible — FLAG.

**E15. Sterlite Copper / Vedanta history**
- 1997 Tuticorin smelter commissioned [K]; capacity raised to 400 ktpa [V IMYB].
- 22-May-2018 police firing (13 killed); 28-May-2018 TN closure order [K].
- Aug-2020 Madras HC upholds closure [K]; 29-Feb-2024 SC dismisses Vedanta's appeal [K].
- FY22 Silvassa cathode 125.1 kt; FY23 147.2 kt [V IMYB]; FY26 170 kt; run-rate >245 ktpa (Oct-2026) [V-snip].
- Oct-2026: restart plan ($250m, 8–9 months after approval, ~250 ktpa); a court decision expected within ~3 months; $2.3 bn copper capex incl. ~$2 bn in Saudi Arabia (mining, smelting, rod; $33m rod mill nearing commissioning); target ~1 Mtpa (0.5 India + 0.5 Saudi) by 2030; Fujairah ~100 ktpa rod [V-snip metal.com 7-Oct-26].

**E16. HCL shareholding (%)** [V screener]

| Date | Promoter (GoI) | FII | DII | Public | Shareholders |
|---|---|---|---|---|---|
| Dec-23 | 66.14 | 2.05 | 13.70 | 18.11 | 3.64 lakh |
| Sep-25 | 66.14 | 5.05 | 6.00 | 22.79 | 6.46 lakh |
| Mar-26 | 66.14 | 6.34 | 5.39 | 22.14 | 13.39 lakh |
| Jun-26 | 66.14 | 5.96 | 4.84 | 23.05 | 13.06 lakh |
| **Sep-26** | **60.14** | **7.08** | **5.02** | **27.77** | **13.60 lakh** |

**E17. HCL 5-year capex plan (₹ Cr)** [V psuwatch]
FY26 450.51 · FY27 1,421.73 · FY28 1,993.70 · FY29 2,227.18 · FY30 1,095.48 · **Total 7,188.60**.
Actual capex: FY22 ~₹428 Cr · FY23 ~₹381 Cr · FY24 ~₹481 Cr · FY25 ~₹410 Cr · **FY26 ₹464.53 Cr** (presentation chart; target/actual labelling ambiguous; FY26 per AR) [V].

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Definition | Good | Average | Weak | HCL now |
|---|---|---|---|---|---|
| Ore head grade (UG Cu mine) | % Cu in ore mined | >1.5% | 0.8–1.5% | <0.8% | ~0.8–0.9% mined (IMYB FY23: 0.82%) [V]; R&R 0.94% |
| Concentrator recovery | % of Cu in feed reporting to concentrate | >90% | 85–90% | <85% | not disclosed (GAP); implied ~88–92% [E] |
| Concentrate grade | % Cu | >28% | 22–28% | <20% | 17–26%; avg ~22.5% [V] |
| MIC/ore (effective yield) | MIC ÷ ore mined | >1.0% | 0.7–1.0% | <0.7% | 0.75% FY26 [E] |
| Cost per t ore (cash) | ₹/t | <₹2,500 (open pit) | ₹2,500–4,500 (UG) | >₹4,500 | ₹4,400 FY26 [E] |
| Net cash cost (C1) | $/lb after by-products | <$1.0 (SCCO $0.09; Anto $1.22) | $1.0–2.0 (FCX ~$2.0) | >$2.5 | ~$2.5–3.0 gross, little credit [E] |
| Realisation vs LME | % | >100% (by-product payables) | 95–100% | <93% | 117% FY26 (lag + Au/Ag) [E] |
| EBITDA margin (miner) | % | >55% | 35–55% | <25% | 48–54% [V] |
| EBITDA/t Cu (miner) | $/t | >$6,000 | $3,000–6,000 | <$2,000 | ~$6,370 FY26 [E] |
| Reserve life | reserves ÷ annual ore | >25 yrs | 15–25 | <10 | ~42 yrs at 3.7 MTPA; ~13 at 12.2 [E] |
| Capex intensity | $ per t annual Cu capacity (greenfield) | <$20,000 | $20–35k | >$40k | ₹7,189 Cr for +~60 kt MIC ≈ $13–14k/t [E, ILLUSTRATIVE] |
| TC/RC (smelter view) | $/dmt + c/lb | >$80/8.0 | $50–80 | <$25 | **$0 benchmark; spot −$235** [V] |
| Smelter utilisation | % | >90% | 75–90% | <60% | Hindalco ~85–95%; Kutch 23% FY26 → 52% Q1 FY27 [V/E] |
| Smelter EBITDA/t | $/t Cu | >$800 | $400–800 | <$300 | Hindalco ~$655 FY26; ~$930 Q1 FY27 [E] |
| Acid by-product | t H₂SO₄ per t Cu | — | ~3.0–3.3 [K] | — | n/a (HCL) |
| Cable maker OPM | % | >13% | 10–13% | <9% | Polycab 14%, KEI 10% [V] |

## G. Timeline (year: event)

- **1967:** Hindustan Copper Ltd incorporated (takes over from NMDC) [V screener/presentation].
- **1970s–80s:** Khetri Copper Complex and Indian Copper Complex (Ghatsila) integrated mine-smelter-refinery; Taloja rod plant [K/primer].
- **1982:** Malanjkhand open-pit mine commissioned (MP) [primer].
- **1995:** HCL ceases to be India's sole refined producer — liberalisation [V IMYB].
- **1997–98:** Sterlite's Tuticorin smelter and Birla Copper Dahej start (custom smelting era) [K].
- **2002:** Indo Gulf (Birla Copper) merged into Hindalco [K].
- **Dec-2008:** Khetri smelter, refinery and acid plant suspended [V AR].
- **FY2010-11:** HCL first announces the 3.4 → 12.2 MTPA mine plan (later 20.2 MTPA) [V AR FY22].
- **FY18:** India's primary refined output peaks at ~0.84 Mt; India a net exporter [V-snip BigMint].
- **22/28-May-2018:** Tuticorin police firing; permanent closure order [K].
- **8-Aug-2019:** KABIL incorporated (NALCO 40 : HCL 30 : MECL 30) [V AR].
- **Dec-2019:** ICC Ghatsila smelter/refinery suspended; HCL pivots to concentrate sales [V AR].
- **1-Apr-2020:** Surda lease lapses (ICC output halts until renewal, Jan-2022) [V AR].
- **FY20:** HCL net loss ₹569 Cr; borrowings ₹1,564 Cr [V screener].
- **17-Sep-2020:** HCL long-term concentrate sale agreement with an Indian conglomerate (Hindalco) [V AR FY22].
- **Apr-2021:** HCL QIP (expansion funding) [V AR]; GoI later at 66.14% [V].
- **2023:** 30 critical minerals list incl. copper [K]; Copper Products QCO (Oct-2023) [V-snip]; Cobre Panama shut (Nov-2023) [K].
- **~Mar-2024:** Kutch Copper Phase-1 first cathode [V-snip].
- **29-Feb-2024:** SC dismisses Vedanta's Tuticorin appeal [K].
- **1-Dec-2024:** Copper cathode QCO implemented [V-snip].
- **29-Jan-2025:** National Critical Mineral Mission approved (₹16,300 Cr) [V PIB].
- **1-Apr-2025:** HCL–Codelco MoU (New Delhi, in the presence of PM Modi and President Boric) [V AR/PIB].
- **4-Jul-2025:** Copper Vision Document released (6× demand by 2047; +5 MTPA smelting by 2030) [V AR; V-snip PIB].
- **1-Aug-2025:** US Sec 232 50% tariff on copper semis/derivatives [V].
- **Sep-2025:** Grasberg mud-rush incident; PTFI output cut [V FCX].
- **2-Oct-2025:** ₹1,500 Cr recycling incentive guidelines [V PIB].
- **4-Oct-2025:** Kendadih mining lease deed executed [V PIB].
- **7-Nov-2025:** US adds copper to its critical minerals list [V USGS].
- **Nov/Dec-2025:** 2026 TC/RC benchmark settled at $0/0.0c [V].
- **Jan-2026:** LME averages >$13,000/t for the first time [V].
- **22-Jan-2026:** HCL preferred bidder, Baghwari-Khirkhori (MP) [V AR].
- **FY26 (Mar-2026):** HCL record revenue ₹3,078 Cr / PAT ₹921 Cr; MIC 27,421 t; India primary refined 704 kt [V].
- **22-May-2026:** Hindalco FY26 results — copper EBITDA ₹2,809 Cr (−7%) [V].
- **15-Jun-2026:** Vedanta demerger listings (copper stays with residual VEDL) [primer].
- **10-Aug-2026:** HCL Q1 FY27 — PAT ₹352 Cr (+162%), OPM 54% [V].
- **25–26-Aug-2026:** GoI OFS of 6% in HCL at a ₹514 floor; GoI → 60.14% [V].
- **Late Aug-2026:** PTFI smelter restarts [V FCX].
- **Sep/Oct-2026:** LME ~$14,400–14,800; spot TC −$235/dmt; 2027 benchmark talks begin at LME Week (19-Oct) [V].
- **Oct-2026:** Vedanta seeks a Tuticorin restart ($250m) [V-snip].

## H. Figures I could not source well (and conflicts)

1. **HCL quarterly MIC/ore production (last 8 quarters)** — not in any fetched source. HCL does not appear to publish quarterly production in results; the press only covers annual "provisional" numbers. GAP.
2. **HCL concentrator recovery %, head grade by mine, cost per t MIC by mine, MDO fee structure (SWML/Rakha), Hindalco offtake share today** — not disclosed. The primer's "~60% to Hindalco" vs FY22 AR "~80% under LTA" — unresolved.
3. **ICRA rationale (29-Sep-2026)** for HCL — the fetch failed twice (timeout/empty reply). Rating per the company: ICRA AA+ (Stable)/A1+ (Oct-2025) [V presentation]. **Unverified for Sep-2026.**
4. **HCL Q2 FY27 board date** — not announced as of 23-Oct-2026.
5. **Reason for HCL's −13% move over 19–23 Oct-2026** — no trigger found.
6. **HCL CMD name/date** (Anupam Misra per photo caption) — V-snip only.
7. **India refined production FY19, FY20, FY24** — not fetched (IBM IMYB 2024 copper chapter, published ~Jan-2026, not located). FY18 0.84 Mt is V-snip (BigMint).
8. **India total copper consumption, official (MoM)** — no official series. Used Hindalco's slide (company estimate) and apparent refined consumption [E].
9. **Customs duty rates on concentrate/cathode/scrap after Budget 2024/2025/2026** — from memory only [K]. Verify on CBIC.
10. **US refined copper tariff decision (15% from 1-Jan-2027)** — status unverified after mid-Aug-2026.
11. **TC/RC benchmarks 2018–2024** — memory [K]. 2025/2026 and spot [V].
12. **Hindalco copper FY22–FY24 segment revenue/EBITDA** — memory approximations [K].
13. **Vedanta copper segment financials (FY26/Q1 FY27)** — not fetched; Silvassa volumes V-snip (ET via metal.com).
14. **Global multiples (EV/EBITDA) for FCX, SCCO, Antofagasta, BHP, Glencore; Codelco/BHP/Glencore volumes** — not fetched (stockanalysis 403). Volumes [K].
15. **C1 cost for HCL** — no disclosure; the "~304 c/lb gross" is my derivation from total cost ex-D&A ÷ MIC (includes royalty, overheads and the CCR tolling cost base) [E].
16. **ICSG 2026 balance conflict:** HCL AR quotes ICSG ~96 kt surplus (2026); Hindalco cites a Q2 CY26 deficit of 0.3 Mt. Different periods/methods — present both.
17. **Kutch Copper capacity utilisation basis and copper-vertical debt columns** (AEL deck table legibility).
18. **Silvassa capacity:** 2.16 lakh tpa (HCL deck/AR) vs ~258 kt implied by the Vedanta CEO's "245 kt at ~95%" — the capacity may have been debottlenecked; present both.
19. **India concentrate imports in Cu-content terms** — only gross tonnes are available; ~0.4 Mt Cu is [E].
20. **Data-centre copper intensity, renewables t/MW** — industry rules of thumb [K].

---

# PART 2 — COMPANY FACT PACKS (1 member + REFERENCE packs)

**Sources and conventions for every pack:**
- Screener.in pulled 23-Oct-2026 ~17:38 UTC (after close) via curl with a generic UA [V screener].
  - HCL: standalone (= consolidated for practical purposes, trap 4).
  - Others: consolidated.
- "OP" = screener operating profit (EBITDA ex other income).
- EV/EBITDA = (m-cap + borrowings − cash/treasury) ÷ FY26 OP, unless a company net-debt figure is preferred (stated).
- **Only Hindustan Copper is a member of this sub-sector.** Everything else in Part 2 is **REFERENCE** (context, comparison, value-chain partners) and must never be summed with HCL.

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 23-Oct-26)

| Company | Status | NSE · BSE | Year | Revenue | YoY % | OP (EBITDA) | OPM % | PAT | ROCE % | ROE % | Net debt (cash) | M-cap | P/E | P/B | EV/EBITDA | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Hindustan Copper** | **MEMBER** | HINDCOPPER · 513599 | FY26 | 3,078 | +48.6 | 1,463 (co. 1,534) | 47.5 (co. 50.2) | 921 (pre-exc. ~993) | 42.4 | 32.9 | **(~700) company cash ₹810 Cr − debt ₹110 Cr**; screener-basis net debt 80 (misses cash) | 38,584 | 31.9 (TTM) | 11.5 | ~25.9× FY26 / 21.5× TTM | MIC 27,421 t | Ore 3.67 Mt; MIC/ore 0.75% | R&R 767 Mt @0.94%; Vision-2030 12.2 MTPA |
| Hindalco (cons.) | REFERENCE | HINDALCO · 500440 | FY26 | 274,944 | +15.3 | 34,880 (co. 38,097) | 12.7 | 13,391 (pre-exc. 18,733 [primer]) | 13.2 | 13.0 | **~69,700 co. (1.83× ND/EBITDA)**; screener gross borrowings 99,165 | 194,947 | 9.4 | 1.4 | ~6.9× (co. ND) / 8.4× gross | Copper rev 69,838; EBITDA 2,809 | Cu metal sales 487 kt; CCR 373 kt | Q1 FY27 Cu EBITDA 918 (record) |
| Vedanta (cons., continuing ops restated) | REFERENCE | VEDL · 500295 | FY26 | 78,437 | +25.1 (restated base 62,717) | 23,183 | 29.6 | 25,096 | 16.1 | 38.2 | ~17,529 (screener: 32,947 − 15,418) | 89,274 | 8.1 | 1.8 | ~4.6× | Silvassa cathode 170 kt FY26 [V-snip] | Run-rate >245 ktpa | Tuticorin 400 ktpa shut since 2018 |
| Adani Enterprises (cons.) | REFERENCE | ADANIENT · 512599 | FY26 | 100,469 | +2.6 | 13,991 | 13.9 | 9,951 (screener; primer 9,339 incl. ₹9,215 Cr one-off) | 5.8 | 4.5 | ~97,200 (screener: 106,622 − 9,428) | 336,300 | 142 | 3.95 | ~31× | Kutch Cu production 114.2 kt FY26 | Q1 FY27 65.4 kt (52% util.) | Q1 FY27 copper EBITDA ₹749 Cr |
| Polycab (cons.) | REFERENCE (user) | POLYCAB · 542652 | FY26 | 28,884 | +28.9 | 4,013 | 13.9 | 2,708 | 33.2 | 23.0 | net cash (inv. 3,405 > debt 236) | 112,434 | 35.6 | 8.6 | n/c | Q2 FY27 sales 9,899 (+53% YoY) | Q2 OPM 14% | W&C ~87% of sales [primer] |
| KEI (cons.) | REFERENCE (user) | KEI · 517569 | FY26 | 11,748 | +20.7 | 1,229 | 10.5 | 918 | 20.0 | 14.7 | ~net debt 251 (screener; cash not shown) | 35,564 | 33.7 | 4.9 | n/c | Q2 FY27 sales 3,776 (+38.5%) | Q2 OPM 10% | volume growth guide ~17–18% [primer] |

- Polycab BSE code 542652 and KEI 517569 are [K] (not re-checked).
- Vedanta and Adani P/B = price ÷ screener book value (226/127; 2,477/627).

## 2.1 Hindustan Copper (HINDCOPPER · 513599) — MEMBER — India's only copper miner; concentrate seller; Vision-2030 4.2 → 12.2 MTPA

**Primer:** `primers/hindustan-copper.html`, refreshed **04-Jul-2026** (FY26 results; before Q1 FY27, the OFS and the October sell-off).

**Standardised financials [V screener 23-Oct-26, standalone; consolidated differs by ≤₹4 Cr]**
- **P&L (₹ Cr):**
  - Sales: FY22 1,822 · FY23 1,677 · FY24 1,717 · FY25 2,071 · **FY26 3,078 (+48.6%)** · TTM 3,498.
  - OP: 512 · 492 · 547 · 738 · **1,463 (OPM 48%)** · TTM 1,758 (50%).
  - Other income: 50 · 96 · 54 · 78 · **−24** (FY26 includes the −₹95.75 Cr PRMS exceptional in Q3).
  - Interest: 30 · 17 · 17 · 8 · 6. Depreciation: 150 · 175 · 175 · 176 · 200.
  - PBT: 382 · 396 · 410 · 634 · **1,233**. Tax ~25%.
  - **PAT: 374 · 295 · 295 · 469 · 921** (consolidated 919). EPS FY26 ₹9.52; TTM ₹11.78. Payout 30%.
- **Company basis (AR FY26) [V]:** Sales ₹3,054.40 Cr; **EBITDA ₹1,533.83 Cr**; D&A 200.44; finance 4.91; exceptional 95.75; PBT 1,232.73; tax 312.06; **PAT 920.67**.
  - Pre-exceptional PAT ≈ ₹992 Cr [E: 920.67 + 95.75 × 0.75].
- **Quarters (sales / OP / OPM / PAT):**
  - Jun-25: 516 / 212 / 41% / 134
  - Sep-25: 718 / 282 / 39% / 186
  - Dec-25: 687 / 340 / 50% / 156
  - Mar-26: 1,156 / 628 / 54% / 444
  - **Jun-26: 936 / 508 / 54% / 353** (cons. 352.37; PBT 471.77)
  - Earlier: Sep-24 518/152/29%/102; Dec-24 328/108/33%/63; Mar-25 731/267/36%/191.
- **Balance sheet (Mar-26):**
  - Equity ₹484 Cr + reserves ₹2,864 Cr = **net worth ₹3,348 Cr** (BV ₹34.6/share).
  - Borrowings **₹111 Cr** (from ₹1,564 Cr in Mar-20).
  - Fixed assets ₹1,922 Cr; CWIP ₹741 Cr; investments ₹31 Cr.
  - **Cash & cash equivalents ₹395.85 Cr + other bank balances ₹413.79 Cr = ₹809.6 Cr** [V AR]. Inventories ₹387 Cr; receivables ₹133 Cr.
  - **Net cash ≈ ₹700 Cr (company basis; use this).** Screener basis (borrowings − investments) shows "net debt ₹80 Cr" because it misses bank balances — **do not use**.
- **Cash flow:** CFO FY26 ₹1,474 Cr; investing −₹434 Cr; **FCF ₹1,019 Cr**; financing −₹299 Cr [V screener].
- **Valuation:**
  - Price **₹399.05** (−3.27% on the day); **m-cap ₹38,584 Cr**; 52-week high/low ₹760 / ₹308.
  - P/E 31.9× TTM (≈42× FY26 PAT); P/B 11.5×; dividend yield 0.72% (FY26 DPS ₹2.86 = interim ₹1.00 + final ₹1.86 [V AR]).
  - ROCE 42.4%; ROE 32.9%.
  - **EV ≈ ₹37,880 Cr → EV/EBITDA ~25.9× FY26 OP, ~24.7× company EBITDA, ~21.5× TTM OP** [E].
  - Company presentation m-cap: ₹51,619 Cr (5-Aug-2026) [V].
- **Ratings:** ICRA AA+ (Stable) / A1+ (Oct-2025 report cited by the company) [V presentation]. ICRA rating updates dated 29-Apr-2026 and 29-Sep-2026 are listed on screener, but **content not fetched** (GAP).

**Q1 FY27 (results 10-Aug-2026) [V psuwatch/screener; V-snip others]**
- Revenue from operations ₹936.50 Cr (+81.4% vs ₹516.37 Cr). Total expenses ₹481.83 Cr (vs ₹347.29 Cr). EBITDA ~₹507.5 Cr (54% vs 41%) [V-snip]. **PAT ₹352.37 Cr consolidated (+162%)**.
- The base quarter (Q1 FY26) was depressed by "planned maintenance and expansion-related shutdowns" [V psuwatch].
- **LME Q1 FY27 average ~$13,349/t vs Q1 FY26 ~$9,515/t (+40%)** [E from World Bank]; rupee ~₹94 vs ~₹85.6 [E]. Price × FX alone ≈ +55%; the rest is volume/mix/by-products [E].
- Physical MIC for the quarter: **not disclosed in fetched sources (GAP).**

**Native KPIs [V AR FY26 / presentation unless noted]**
- **Production FY26:** ore 36.72 lakh t (+6%); MIC 27,421 t (+9%); MIC sold 27,369 t; CCR tolling 12,886 t (−15%).
  - Growth driven by "resumption of production at Kolihan, Surda and Kendadih mines".
  - Unit ore: MCP 24.25 (−11%), KCC 10.04 (+40%), ICC 2.43 (vs 0.30).
- **Resources:** R&R 767.37 Mt @0.94% (6.75 Mt Cu); reserves 156.97 Mt @1.31% (~2.05 Mt Cu); +12.05 Mt R&R added in FY25; +135.52 Mt in the last 3 years. FY26 drilling (45,894 m surface + 19,082 m UG) was the most in 10 years.
- **Capacity:** ore ~4.21 MTPA → 12.2 MTPA (FY30): MCP 2.5 → 5.0; KCC 1.5 → 3.0; ICC 0.4 → 4.2. Milling 4.7 MTPA (MCP 2.5, KCC 1.8, ICC 0.4). Taloja rod 60 ktpa (tolling). GCP secondary 50 ktpa (idle → Lohum revenue-share, Q4 FY27).
- **Capex:** FY26 ₹464.53 Cr (internal accruals). Plan ₹7,188.9 Cr (FY26–30): 450.51 / 1,421.73 / 1,993.70 / 2,227.18 / 1,095.48 [V psuwatch]. **Rakha/Chapri MDO (SWML) ~₹2,700 Cr** (separate MDO-funded? — unclear whether inside the ₹7,189 Cr; FLAG).
- **Unit economics [E]:** realisation ₹11.16 lakh/t MIC (~117% of FY-avg LME); cost ex-D&A ₹4,400/t ore, ₹5.89 lakh/t MIC (~304 c/lb); EBITDA ₹5.6 lakh/t MIC (~$6,370).
- **Exchequer:** ₹784.71 Cr in FY26 (royalty & cess ₹260.84 Cr; GST ₹249.23 Cr; income tax ₹232.68 Cr).
- **People:** 1,154 employees (Mar-26; 2,843 in FY17); 1,134 (Jul-26).
- **Customers:** domestic smelters (largely Hindalco under the LTA of 17-Sep-2020; ~80% in FY22); exports 3,414 t MIC (12.5% of MIC sold) worth ₹406 Cr in FY26; open tenders for the balance [V AR FY22/FY26].
- **Subsidiaries/JVs:** Chhattisgarh Copper Ltd (74%); KABIL (30%; ₹30 Cr invested; share of losses ₹5.05 Cr).
- **New blocks/partnerships:** Baghwari-Khirkhori (MP, CL, preferred bidder 22-Jan-2026); Bodal (Chhattisgarh, exploration); reservation sought for a Balaghat block (MP MoU 25-Feb-2025); Codelco MoU (1-Apr-2025); MoUs with RITES, IOCL, CIL, GAIL, OIL, NTPC Mining, CSIR-IMMT, MECON.

**Ownership [V screener Sep-26]:** President of India **60.14%** (after the Aug-2026 OFS, from 66.14%); FII 7.08%; DII 5.02%; public 27.77%; 13.6 lakh shareholders.

**Story bullets**
- **The only listed way to own Indian copper mining**, at the best moment in the copper cycle in history. FY26 PAT doubled, Q1 FY27 OPM was 54%, and the balance sheet is net cash (~₹700 Cr).
- **Volume is the problem, not price.** MIC (27.4 kt) is below FY16 (31.6 kt). MCP, ~66% of ore, fell 11% in FY26 on geotechnical issues. Vision-2030's 12.2 MTPA was first promised in FY2010-11. The MDO model (JSW's SWML at Rakha/Chapri) and the new ICC mines are the real test in FY27–FY29.
- **Valuation pricing a ~3× volume step-up:** ~21–26× EV/EBITDA and 32× P/E at record copper, versus global miners at a fraction of that [K]. The GoI still has 9 pp of OFS headroom.
- **Risks:** LME mean-reversion (a $4,000/t fall roughly halves PAT [E]); grade/depth cost inflation (+15% cost per t of ore in FY26); clearances (Surda Stage-II FC); PSU execution; a monopoly on leases that auctions are slowly eroding.

## 2.2 Hindalco Industries (HINDALCO · 500440) — REFERENCE — Birla Copper custom smelter (Dahej, 500 ktpa), India's largest refined copper and rod producer

**Primer:** `primers/hindalco.html`.

- **Screener (cons.) [V]:**
  - FY26 sales ₹2,74,944 Cr (+15.3%); OP ₹34,880 Cr (13%); other income −₹4,074 Cr (Novelis Oswego fire); PAT ₹13,391 Cr.
  - Q1 FY27: sales ₹84,825 Cr, OP ₹13,932 Cr (16%), PAT ₹7,013 Cr (+75%).
  - Borrowings ₹99,165 Cr; investments ₹24,958 Cr.
  - M-cap ₹1,94,947 Cr at ₹870; P/E 9.36; BV ₹608; ROCE 13.2%; promoter 34.67%.
  - **Q2 FY27 results 6-Nov-2026.**
- **Copper segment [V Hindalco Q4 FY26 PR (22-May-2026) and Q1 FY27 PR/deck/transcript (7-Aug-2026)]:**
  - FY25: revenue ₹54,703 Cr, EBITDA ₹3,025 Cr (5.5%), metal 491 kt, CCR 394 kt.
  - **FY26: revenue ₹69,838 Cr, EBITDA ₹2,809 Cr (4.0%), metal 487 kt, CCR 373 kt.**
  - Q4 FY26: revenue ₹22,156 Cr, **EBITDA ₹907 Cr (record at the time; +48%)**; "declining TC/RCs" offset by by-products (sulphuric acid).
  - **Q1 FY27: revenue ₹17,232 Cr (+16%), EBITDA ₹918 Cr (+36%, new record) despite a planned major smelter shutdown;** metal 105 kt (−16%), CCR 96 kt (−8%). Ex-shutdown EBITDA "~$1,000/t".
  - TC/RC "minus 26 to minus 30 cents per pound"; **85% of concentrate needs blocked in**; exploring one copper block in India.
  - Copper ≈ **20% of group revenue in Q1 FY27** (23% in Q1 FY26) [V screener].
- **Projects:** copper smelter expansion (target **FY29**; ~25% of POs placed); copper & e-waste recycling (FY27); Pakhajan scrap melting (FY27); Inner Grooved Tubes, Vadodara (commissioned; customer qualification); AC fins (Taloja); "copper downstream 4× by FY30"; management "plans to double copper capacity" [V]. BigMint: Dahej +50–60% (+0.25–0.28 Mt), ₹2,450 Cr Gujarat investment; e-waste 0.3–0.35 Mt scrap/yr → 50 kt Cu [V-snip].
- **Story:** the largest buyer of HCL concentrate and the price-setter for Indian cathode/rod. Its copper profits now depend on **acid prices and premiums**, not TC/RC. A smelter expansion into negative TCs is a contrarian bet ("do a smelter when it's the most adverse condition" — Satish Pai [V]).

## 2.3 Vedanta Ltd (VEDL · 500295) — REFERENCE — Sterlite Copper: Silvassa refinery/rod (running ~245 ktpa), Tuticorin smelter shut since 2018, Fujairah rod; copper stays in residual VEDL after the 2026 demerger

**Primer:** `primers/vedanta.html`.

- **Screener (cons., restated continuing ops) [V]:** FY26 sales ₹78,437 Cr; OP ₹23,183 Cr (30%); OI ₹14,186 Cr; PAT ₹25,096 Cr. Q1 FY27: ₹24,205 / ₹8,501 / ₹7,918 Cr. Borrowings ₹32,947 Cr (Mar-26; ₹91,479 Cr Mar-25 pre-demerger). M-cap **₹89,274 Cr** at ₹226; P/E 8.1; dividend yield 15.0%; ROE 38%; promoter 54.72%. **Q2 FY27 results 28-Oct-2026.**
- **Copper [V-snip metal.com citing ET, 7-Oct-2026; HCL deck V]:**
  - Silvassa cathode **170 kt in FY26**; now >245 ktpa annualised (~95% of capacity). HCL lists capacity as 2.16 lakh tpa.
  - **Tuticorin 400 ktpa, shut since May-2018.** Restart plan $250m, 8–9 months after approval, ~250 ktpa; court decision expected in ~3 months.
  - **$2.3 bn copper capex over 3–4 years** (~$2 bn in Saudi Arabia: mining, smelting, rod; $33m rod mill nearing commissioning; smelter decision "this quarter"); target ~1 Mtpa (0.5 India + 0.5 Saudi) by 2030; Fujairah ~100 ktpa.
  - BigMint: Sterlite output ~0.20 Mt in FY26 (+33%) [V-snip] — likely includes rod/other; prefer 170 kt cathode.
  - The Vedanta Q1 FY27 deck lists "Copper Business" under residual VEDL and **Tuticorin land parcels (3) in an asset-monetisation list** [V deck]. Read-through on restart intent is ambiguous — FLAG.
- **Copper segment P&L:** not fetched (GAP).

## 2.4 Adani Enterprises (ADANIENT · 512599) — REFERENCE — Kutch Copper Ltd (Mundra): 500 ktpa Phase-1 smelter-refinery, ramping; Phase-2 to 1 Mtpa

**Primer:** `primers/adani-enterprises.html`.

- **Screener (cons.) [V]:**
  - FY26 sales ₹1,00,469 Cr; OP ₹13,991 Cr (14%); OI ₹11,688 Cr; PAT ₹9,951 Cr.
  - Q1 FY27: sales ₹32,924 Cr; OP ₹5,019 Cr; **PAT −₹1,462 Cr** (reported alongside a one-time OFAC settlement [V-snip trendlyne/psuconnect]). Q4 FY26 PAT −₹167 Cr.
  - Borrowings ₹1,06,622 Cr. M-cap **₹3,36,300 Cr** at ₹2,477; P/E 142; promoter 71.97% (−2.87 pp in Sep-26 quarter).
  - **Q2 FY27 results 28-Oct-2026.**
- **Kutch Copper [V AEL Q1 FY27 deck]:** capacity 500 KTPA; **production FY26 114.2 kt; Q1 FY26 11.6 kt → Q1 FY27 65.4 kt (4.6×), "~52% of annual capacity"**; copper EBITDA ₹749 Cr in Q1 FY27 (vs −₹170 Cr) [V deck headline; comparative V-snip]. CFO guided ₹2,800–3,100 Cr FY27 EBITDA (Feb-2026) [V-snip angelone]. Ramp-up was constrained by concentrate availability [V-snip].
- **Implied EBITDA/t Q1 FY27 ≈ ₹1.15 lakh/t (~$1,220/t)** — above Hindalco's ~$930. That suggests a large by-product/premium/inventory contribution in a rising-price quarter [E; FLAG].
- **Story:** the swing new smelter. Each tonne it ramps up adds Indian cathode supply, reducing refined imports, and adds concentrate demand. It also feeds Adani's cable/wire entry [primer KEI].

## 2.5 Downstream context (one line each) — REFERENCE
- **Polycab (POLYCAB):** India's largest W&C maker; FY26 revenue ₹28,884 Cr (+29%), OPM 14%, PAT ₹2,708 Cr; Q2 FY27 sales ₹9,899 Cr (+53% YoY vs ₹6,477 Cr), PAT ₹990 Cr; m-cap ₹1,12,434 Cr, P/E 35.6 [V screener]. Copper is passed through; it sold its Ryker copper-rod plant to Hindalco in 2021 [primer].
- **KEI Industries (KEI):** FY26 revenue ₹11,748 Cr (+21%), OPM 10%, PAT ₹918 Cr; Q2 FY27 sales ₹3,776 Cr (+38.5%), OPM 10%, PAT ₹262 Cr; m-cap ₹35,564 Cr, P/E 33.7 [V screener]. Copper/Al ~60–70% of cable cost [primer].

## 2.6 Global leaders — REFERENCE (see §10.2 for the table)
- **Southern Copper:** Q3-26 sales $4,696.6m; adj. EBITDA $3,040.2m (64.7%); net cash cost $0.09/lb; 232 kt [V].
- **Freeport:** Q3-26 ~830 mlb produced; unit net cash cost ~$2.10/lb; realised >$6.50/lb; Grasberg at 67%; results 27-Oct [V].
- **Antofagasta:** H1-26 revenue $4,479m; EBITDA $2,840.5m (63.4%); net cash cost $1.22/lb; 285 kt; TC/RC credit $18.7m [V].
- **Codelco, BHP, Glencore:** [K] only (see §10.2).

## 2.7 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
{
  "as_of": "2026-10-23",
  "fx_inr_per_usd": 94.9,
  "lme_cash_usd_t_2026_10_22": 14215,
  "members": [
    {
      "name": "Hindustan Copper", "role": "MEMBER", "nse": "HINDCOPPER", "bse": "513599", "basis": "standalone",
      "fy": "FY26", "revenue": 3078, "revenue_prev": 2071, "revenue_growth_pct": 48.6,
      "sales_company": 3054.40, "op": 1463, "opm_pct": 47.5, "ebitda_company": 1533.83,
      "pat": 921, "pat_company": 920.67, "exceptional": 95.75, "roce_pct": 42.4, "roe_pct": 32.9,
      "borrowings": 111, "cash_and_bank": 809.6, "net_cash_company": 700,
      "mcap": 38584, "price": 399.05, "pe_ttm": 31.9, "pb": 11.5, "div_yield_pct": 0.72, "dps_fy26": 2.86,
      "ev_ebitda_fy26_op": 25.9, "ev_ebitda_ttm": 21.5,
      "q1fy27": {"revenue": 936.50, "op": 508, "opm_pct": 54, "pat": 353, "pat_cons": 352.37},
      "ttm": {"revenue": 3498, "op": 1758, "pat": 1139},
      "ore_mt": 3.672, "mic_t": 27421, "mic_sold_t": 27369, "ccr_tolling_t": 12886,
      "rr_mt": 767.37, "rr_grade_pct": 0.94, "reserves_mt": 156.97, "reserves_grade_pct": 1.31,
      "capacity_ore_mtpa_now": 4.21, "capacity_ore_mtpa_fy30": 12.2, "capex_fy26": 464.53, "capex_plan_fy26_30": 7188.6,
      "promoter_pct_sep26": 60.14, "promoter_pct_jun26": 66.14, "fii_pct": 7.08, "dii_pct": 5.02,
      "q2fy27_board_date": null
    }
  ],
  "reference": [
    {"name": "Hindalco", "role": "REFERENCE", "nse": "HINDALCO", "fy": "FY26", "revenue": 274944, "op": 34880, "pat": 13391, "borrowings": 99165, "mcap": 194947, "pe": 9.36,
     "copper_revenue": 69838, "copper_ebitda": 2809, "copper_ebitda_fy25": 3025, "copper_metal_sales_kt": 487, "ccr_sales_kt": 373,
     "q1fy27_copper_revenue": 17232, "q1fy27_copper_ebitda": 918, "q2fy27_result_date": "2026-11-06"},
    {"name": "Vedanta", "role": "REFERENCE", "nse": "VEDL", "fy": "FY26", "revenue": 78437, "op": 23183, "pat": 25096, "borrowings": 32947, "mcap": 89274, "pe": 8.11,
     "silvassa_cathode_kt_fy26": 170, "tuticorin_capacity_ktpa": 400, "q2fy27_result_date": "2026-10-28"},
    {"name": "Adani Enterprises", "role": "REFERENCE", "nse": "ADANIENT", "fy": "FY26", "revenue": 100469, "op": 13991, "pat": 9951, "borrowings": 106622, "mcap": 336300, "pe": 142,
     "kutch_copper_prod_kt_fy26": 114.2, "kutch_copper_prod_kt_q1fy27": 65.4, "kutch_capacity_ktpa": 500, "q1fy27_copper_ebitda": 749, "q2fy27_result_date": "2026-10-28"},
    {"name": "Polycab", "role": "REFERENCE", "nse": "POLYCAB", "fy": "FY26", "revenue": 28884, "op": 4013, "pat": 2708, "mcap": 112434, "pe": 35.6},
    {"name": "KEI Industries", "role": "REFERENCE", "nse": "KEI", "fy": "FY26", "revenue": 11748, "op": 1229, "pat": 918, "mcap": 35564, "pe": 33.7}
  ],
  "global_reference_usd_m": [
    {"name": "Southern Copper", "period": "Q3CY26", "revenue": 4696.6, "adj_ebitda": 3040.2, "ebitda_margin_pct": 64.7, "cu_kt": 232.4, "net_cash_cost_usd_lb": 0.09},
    {"name": "Antofagasta", "period": "H1CY26", "revenue": 4479.0, "ebitda": 2840.5, "ebitda_margin_pct": 63.4, "cu_kt": 285, "net_cash_cost_usd_lb": 1.22},
    {"name": "Freeport-McMoRan", "period": "Q3CY26 (prelim)", "cu_prod_mlb": 830, "cu_sales_mlb": 750, "unit_net_cash_cost_usd_lb": 2.10, "realised_usd_lb": 6.50}
  ],
  "india_trade_fy26_kt": {"conc_2603_imp": 1571.9, "anode_7402_imp": 231.8, "refined_7403_imp": 278.9, "refined_7403_exp": 100.5, "scrap_7404_imp": 466.9, "wire_7408_imp": 167.7, "wire_7408_exp": 89.5},
  "india_refined_prod_kt_fy26": {"total": 704, "hindalco": 422, "vedanta": 170, "kutch": 112}
}
```

## 2.8 Conflicts and gaps (company level)
- HCL: EBITDA bases (screener 1,463 vs company 1,533.83); exceptional ₹95.75 Cr; quarterly MIC not disclosed; the ICRA Sep-26 rationale was not fetched; the CMD name is V-snip; the Q2 board date is not announced; the Rakha MDO capex (₹2,700 Cr) vs the ₹7,189 Cr plan overlap is unclear.
- Hindalco: refined production (422 kt, HCL AR) vs metal sales (487 kt) — different bases.
- Vedanta: Silvassa capacity 216 kt (HCL) vs ~258 kt implied; copper P&L not fetched; Tuticorin land in the monetisation list vs restart plan.
- Adani: copper EBITDA/t appears high (₹1.15 lakh/t); the copper debt table columns are illegible; Q1 FY27 PAT hit by an OFAC settlement (V-snip).

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (₹ Cr; screener 23-Oct-26 unless noted)

**The sub-sector has ONE member. There is no combined/aggregate row: the "sector total" equals the HCL row. REFERENCE rows are for context only and must not be summed with HCL or with each other.**

| Company | Status | FY26 rev | YoY % | OP | OPM % | PAT | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | M-cap | P/E | EV/EBITDA (FY26) | Volume (latest) | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Hindustan Copper** | **MEMBER** | **3,078** | **+48.6** | **1,463** | **47.5** | **921** | **936** | **+81.4** | **54** | **353** | **38,584** | **31.9 (TTM)** | **~25.9× (21.5× TTM)** | **MIC 27,421 t; ore 3.67 Mt (FY26)** | **Realisation ~117% of LME; cost ₹4,400/t ore [E]** |
| Hindalco — copper segment | REFERENCE | 69,838 (segment) | +27.7 | 2,809 (seg. EBITDA) | 4.0 | n/a | 17,232 | +15.8 | 5.3 | n/a | (group 1,94,947) | (group 9.4) | (group ~6.9×) | Cu metal 105 kt; CCR 96 kt (Q1) | TC/RC −26 to −30 c/lb; 85% conc. tied |
| Vedanta — copper | REFERENCE | n/f | — | n/f | — | — | n/f | — | — | — | (group 89,274) | (group 8.1) | (group ~4.6×) | Silvassa 170 kt FY26; >245 ktpa run-rate | Tuticorin shut (400 ktpa) |
| Adani Ent. — Kutch Copper | REFERENCE | n/f | — | n/f | — | — | n/f | — | — | — | (group 3,36,300) | (group 142) | (group ~31×) | 114.2 kt FY26; 65.4 kt Q1 | Q1 copper EBITDA ₹749 Cr; util. 52% |
| Polycab | REFERENCE | 28,884 | +28.9 | 4,013 | 13.9 | 2,708 | 8,210 | +39.0 | 13.8 | 797 | 1,12,434 | 35.6 | n/c | Q2 FY27 sales 9,899 | W&C pass-through |
| KEI | REFERENCE | 11,748 | +20.7 | 1,229 | 10.5 | 918 | 3,185 | +23.0 | 12.4 | 274 | 35,564 | 33.7 | n/c | Q2 FY27 sales 3,776 | — |

Notes:
- HCL Q1 YoY uses screener ₹936 Cr vs ₹516 Cr. Hindalco copper FY26 YoY is vs ₹54,703 Cr.
- Polycab/KEI Q1 FY27 = the Jun-2026 quarter (screener). Both have already reported Sep-2026.

## 3.2 Aggregates
- **Not applicable (single-member sub-sector).** Sector revenue = HCL ₹3,078 Cr; PAT ₹921 Cr; m-cap ₹38,584 Cr; P/E 31.9× TTM (₹38,584 ÷ ₹1,139 TTM PAT = 33.9× on TTM PAT; screener shows 31.9× — screener's TTM EPS basis; FLAG minor).
- **Industry-level aggregates (not company sums) the writer may use [E from V]:**
  - India primary refined output FY26: **704 kt** = 422 + 170 + 112 (HCL AR).
  - Refined imports − exports FY26: 278.9 − 100.5 = **178.4 kt** net (TradeStat).
  - Apparent refined consumption FY26: 704 + 178.4 ≈ **882 kt**.
  - Copper import bill FY26 (5 HS lines): 5,940.81 + 2,600.66 + 2,768.09 + 3,429.19 + 1,834.76 = **$16,573.5m**. FY25: 3,848.42 + 2,479.46 + 2,386.62 + 2,375.74 + 1,497.63 = **$12,587.9m** (+31.7%).
  - Hindalco demand FY26: 396 + 398 + 380 + 382 = **1,556 kt**; scrap 145 + 161 + 152 + 145 = **603 kt (38.8%)**; imports 81 + 80 + 76 + 54 = **291 kt**; domestic refined 170 + 157 + 152 + 184 = **663 kt**.
  - Smelter capacity operating: 500 + 500 + 216 (HCL-basis Silvassa) = **1,216 ktpa**; utilisation 704 ÷ 1,216 = **58%**.

## 3.3 Reconciliation vs primers

| Company / primer | Item | Primer | Verified (23-Oct-26) | Use |
|---|---|---|---|---|
| HCL | FY26 revenue / PAT / MIC | ₹3,078 Cr / ₹921 Cr / 27,421 t | Same [V] | — |
| HCL | EBITDA margin | ~48.7% | Screener 47.5% (OP); company 50.2% (EBITDA ₹1,533.83 Cr incl. OI) | State the basis |
| HCL | Exceptional item | not mentioned | ₹95.75 Cr PRMS provision (Q3 FY26) | Add |
| HCL | M-cap / P/E | ~₹48,000 Cr / ~49× (Jun-26) | **₹38,584 Cr / 31.9× TTM**; price ₹399 | Screener |
| HCL | GoI stake | 66.14% | **60.14%** (6% OFS, 25–26-Aug-2026, floor ₹514) | Screener / Outlook Business |
| HCL | FII / DII | ~6.3% / ~5.4% | 7.08% / 5.02% | Screener |
| HCL | Dividend FY26 | ₹1.00/share; yield ~0.3% | **₹2.86/share** (₹1.00 interim + ₹1.86 final; ₹276.57 Cr); yield 0.72% | AR |
| HCL | Vision-2030 by unit | MCP 2.5 → 5; Khetri ~1.0 → 2.9; Surda ~0.4 → 0.9 | **MCP 2.5 → 5.0; KCC 1.5 → 3.0; ICC 0.4 → 4.2** (Rakha/Chapri 3.0 MDO + Kendadih 0.4 + Surda 0.9) | Company presentation Aug-26 |
| HCL | Milling capacity | ~3.8 MTPA | 4.7 MTPA (25 + 18 + 4 lakh t) | Presentation |
| HCL | R&R | ~755 Mt | 767.37 Mt @0.94% (1-Apr-2025) | Presentation/AR |
| HCL | Malanjkhand share of output | ~80% | FY26 MCP 24.25 of 36.72 lakh t = **66%** of ore (FY25 78%) | AR |
| HCL | Hindalco offtake | ~60% of concentrate | FY22 AR: ~80% under the LTA (17-Sep-2020); FY26: exports 12.5% of MIC; current split n/d | Flag |
| HCL | Concentrate imports FY25 | ~2.3 Mt | **1.18 Mt** (FY26 1.57 Mt) | TradeStat |
| HCL | Copper imports FY25 | ~$14.5 bn | 5 core HS lines $12.6 bn (FY26 $16.6 bn); the full chapter 74 + 2603 would be higher | Specify basis |
| HCL | Execution partner | "Engineers India (EIL) engaged" | AR FY26 names **MECON** as consultant for MCP residual UG works; EIL not found | Flag |
| HCL | Expansion partners | not covered | **SWML (JSW) MDO for Rakha/Chapri, ~₹2,700 Cr**; **Lohum LOI for GCP**; Taloja tolling | Add |
| HCL | Q1 FY27 | not covered | Rev ₹936.5 Cr (+81%); OPM 54%; PAT ₹352–353 Cr | Add |
| HCL | Smelter exit | "~2020" | KCC smelter suspended **Dec-2008**; ICC **Dec-2019** | Correct |
| HCL | Founding | "1967 Government enterprise" | Incorporated 1967, taking over from NMDC [V screener] | Fine |
| Hindalco | FY26 copper revenue / EBITDA | ₹69,838 Cr / ₹2,809 Cr | Same [V] | — |
| Hindalco | Copper trend | "FY26 was a strong copper year" | **FY26 EBITDA −7% vs FY25 (₹3,025 Cr)**; Q1 FY27 record ₹918 Cr | Correct |
| Hindalco | Copper capex | "being expanded" | Smelter expansion FY29; e-waste FY27; IGT commissioned | Add |
| Vedanta | Copper | mentioned as residual piece only | Silvassa 170 kt FY26; Tuticorin 400 ktpa shut since 2018; restart bid; $2.3 bn capex | Add |
| Vedanta | M-cap / P/E | ~₹1.08 L Cr / ~6× (Jul-26) | **₹89,274 Cr / 8.1×**; DY 15% | Screener |
| Vedanta | FY26 revenue | ₹1,74,075 Cr (pre-demerger) | Screener restated ₹78,437 Cr (continuing) | Note basis |
| Adani | Kutch Copper | "commissioned Phase-1 (0.5 MTPA) in record time; targets 1 MTPA" | FY26 production 114.2 kt (~23% util.); Q1 FY27 65.4 kt (52%); EBITDA ₹749 Cr | Add ramp data |
| Adani | M-cap | (not checked) | ₹3,36,300 Cr; P/E 142; promoter 71.97% | Screener |

## 3.4 Primer issues (format as primer-issues.md)

### From Copper research (2026-10-23, copper-industry.md §3.4)

- **hindustan-copper.html — Vision-2030 unit capacities wrong and internally inconsistent:** the primer gives Malanjkhand 2.5 → 5, Khetri ~1.0 → 2.9 and Surda ~0.4 → 0.9. Those sum to ~8.8 MTPA, not the 12.2 MTPA headline.
  - The company's Aug-2026 corporate presentation (BSE filing 18-Aug-2026): **MCP 2.5 → 5.0; KCC 1.5 → 3.0; ICC 0.4 → 4.2 MTPA**. ICC's jump comes from the **Rakha + new Chapri underground mine and concentrator (3.0 MTPA) under an MDO contract with South West Mining Ltd (JSW group), ~₹2,700 Cr capex, 20+10 years** (AR FY26 note), plus Kendadih 0.21 → 0.40 and Surda 0.4 → 0.9.
  - Fix the table and the §08 narrative; add the MDO.
- **hindustan-copper.html — ownership stale:** "Promoter ~66.14%" → **60.14%** after the **Govt OFS of up to 6% on 25–26-Aug-2026 (floor ₹514, ~₹3,000 Cr)**. FII 7.08%, DII 5.02%, public 27.77% (Sep-26). The "recurring supply-of-stock overhang" warning has now happened; GoI has 9.14 pp of headroom to 51%.
- **hindustan-copper.html — valuation stale:** m-cap ~₹48,000 Cr / ~49× (end-Jun) → **₹38,584 Cr / 31.9× TTM** at ₹399 (23-Oct-26). The stock fell ~30% from the OFS level (₹574 on 24-Aug) and −13% in the week to 23-Oct, with LME only −4%. Also note the 52-week range ₹308–760.
- **hindustan-copper.html — dividend wrong:** "₹1.00 dividend/share (FY26); yield ~0.3%". The FY26 total is **₹2.86/share** (interim ₹1.00 + final ₹1.86 recommended; ₹276.57 Cr; 30% payout) [AR FY26 note 23]. Yield is ~0.72% at ₹399.
- **hindustan-copper.html — EBITDA basis and exceptional item:** "~48.7% EBITDA margin" mixes bases. Company EBITDA was ₹1,533.83 Cr on sales of ₹3,054.40 Cr (50.2%, incl. other income); screener OP was ₹1,463 Cr on revenue of ₹3,078 Cr (47.5%). The **₹95.75 Cr exceptional (Post-Retirement Medical Scheme, Q3 FY26)** is not mentioned. Pre-exceptional PAT was ~₹992 Cr.
- **hindustan-copper.html — Q1 FY27 missing (refreshed 4-Jul):** add Q1 FY27 (board 10-Aug-2026): revenue ₹936.5 Cr (+81%), OPM 54%, PAT ₹352–353 Cr (+162%), PBT ₹471.8 Cr; capex phasing FY27 ₹1,421.7 Cr / FY28 ₹1,993.7 Cr / FY29 ₹2,227.2 Cr / FY30 ₹1,095.5 Cr.
- **hindustan-copper.html — "Malanjkhand ~80% of output" is stale:** in FY26 MCP produced 24.25 of 36.72 lakh t of ore (**66%**, down 11% on geotechnical issues in the north section and limited stope availability in the south), while KCC rose 40% (10.04 lakh t) and ICC restarted (2.43 lakh t) [AR FY26]. "~70% of India's reserve" is fine (IBM: MP 120.35 of 163.89 Mt reserves = 73%).
- **hindustan-copper.html — India trade numbers wrong:** "Concentrate imports (FY25) ~2.3 MT" — TradeStat HS 2603 shows **1.18 Mt in FY25 and 1.57 Mt in FY26**. "Copper imports ~$14.5 bn" — the basis is unclear; the five core HS lines (2603 + 7402 + 7403 + 7404 + 7408) were **$12.6 bn in FY25 and $16.6 bn in FY26**. State the basis.
- **hindustan-copper.html — reserves/milling numbers:** "~755 MT" R&R → **767.37 Mt @0.94% (1-Apr-2025)**; reserves 156.97 Mt @1.31%. "Milling capacity ~3.8 → 12.2 MTPA" → present milling is 4.7 MTPA (MCP 25 + KCC 18 + ICC 4 lakh t).
- **hindustan-copper.html — smelter history imprecise:** "largely stopped making cathode back in 2020" — the **Khetri smelter was suspended in Dec-2008** and the **Ghatsila (ICC) smelter/refinery in Dec-2019** (AR note 3). The Taloja rod plant now runs in **third-party tolling** (12,886 t FY26), and the idle Gujarat Copper Project has an **LOI with Lohum (revenue share; production Q4 FY27)**. Neither is mentioned.
- **hindustan-copper.html — Hindalco offtake share:** "~60% of concentrate to Hindalco" is unsourced. The FY22 AR says ~80% was sold under the LTA signed 17-Sep-2020; FY26 exports were 3,414 t MIC (12.5%). Verify or soften to "the majority".
- **hindustan-copper.html — "Engineers India (EIL) engaged for project management":** not found in the FY26 AR, which names **MECON** as consultant for the Malanjkhand residual UG works. Verify or remove.
- **hindustan-copper.html — TC/RC section needs the 2026 facts:** benchmark **$0/t, 0.0 c/lb (2026)** vs $21.25 (2025); spot ~−$235/dmt (Oct-2026). Smelters now pay miners (Antofagasta booked a TC/RC *credit*). Also explain why FY26 realisation was ~117% of the average LME (provisional pricing + gold/silver payables + rupee).
- **hindustan-copper.html — omissions:** NCMM (₹16,300 Cr, Jan-2025); Copper Vision Document (4-Jul-2025, prepared by HCL); Codelco MoU (1-Apr-2025); Baghwari-Khirkhori preferred bidder (22-Jan-2026); Bodal block; Kendadih/Rakha lease extensions and clearances (2025); the new CMD (Anupam Misra per press — verify); US Sec 232; the BIS cathode QCO.
- **hindalco.html — copper trend misdescribed:** "FY26 was a strong copper year — Q4 EBITDA up ~48%". **Full-year copper EBITDA fell 7% (₹2,809 Cr vs ₹3,025 Cr in FY25)** on declining TC/RCs; metal sales 487 kt (491) and CCR 373 kt (394) both fell.
  - Add Q1 FY27: record ₹918 Cr despite a planned shutdown; TC/RC −26 to −30 c/lb; 85% of concentrate tied up.
  - Add the smelter expansion (FY29), the copper/e-waste recycling plant (FY27) and the IGT plant.
- **hindalco.html — by-products:** the formula lists "DAP fertiliser" and acid, but not that **sulphuric acid (sulphur index spiked with the West Asia war) is now the main profit lever** (management, 7-Aug-2026).
- **vedanta.html — copper almost absent:** no mention of the **Tuticorin smelter (400 ktpa) closed since May-2018** (the single largest event in Indian copper), the **Silvassa refinery (170 kt FY26; >245 ktpa run-rate)**, the restart bid ($250m; court decision expected ~Q4 CY2026), or the **$2.3 bn copper plan (Saudi Arabia ~$2 bn)**. Residual VEDL holds copper, so this matters for the post-demerger story.
- **vedanta.html — valuation stale / basis:** m-cap ~₹1.08 L Cr / P/E ~6× (Jul-26) → **₹89,274 Cr / 8.1×** (23-Oct-26). Screener now shows restated continuing-operations FY26 revenue of ₹78,437 Cr vs the primer's ₹1,74,075 Cr (pre-demerger) — label the basis.
- **adani-enterprises.html — Kutch Copper ramp data missing:** add FY26 production **114.2 kt (~23% of 500 ktpa)**, Q1 FY27 **65.4 kt (~52%)**, **copper EBITDA ₹749 Cr in Q1 FY27** (vs a loss), and concentrate-supply constraints. "Commissioned in record time" should be balanced with the slow ramp. Add the Q1 FY27 reported loss (−₹1,462 Cr, OFAC settlement per press — verify).
- **kei-industries.html — "Adani (via a Kutch Copper joint venture) moved into the space":** Kutch Copper is a wholly owned AEL subsidiary, not a JV; verify the cable-entry vehicle.
- **General (all copper-touching primers):** none uses the **TradeStat import series** or the **Hindalco India-demand slide (FY26 ~1.56 Mt incl. ~39% scrap; Q1 FY27 −9%)**, and none mentions the **2026 TC/RC benchmark of $0**. All market caps are stale by 1–4 months.

## 3.5 Key source URLs
- **Screener (23-Oct-2026):** https://www.screener.in/company/HINDCOPPER/ · /HINDCOPPER/consolidated/ · /HINDALCO/consolidated/ · /VEDL/consolidated/ · /ADANIENT/consolidated/ · /POLYCAB/consolidated/ · /KEI/consolidated/ ; price history via the screener chart API (company id 1338).
- **HCL corporate presentation Aug-2026 (BSE filing 18-Aug-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=900d4d66-861d-432e-8159-182f1533c099.pdf
- **HCL Annual Reports (BSE):**
  - FY26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/4606eebf-eb1e-4196-960b-8b3433a0d2f6.pdf
  - FY25: …/AttachHis/9a9f4a77-f5bf-4016-9538-60f345b18a9f.pdf
  - FY24: …/AttachHis/4cf78b3d-34b8-43d7-9e50-9b50a088cb4a.pdf
  - FY23: …/AttachHis/1c33aed2-89d9-47b3-ad85-87280e11f5ba.pdf
  - FY22: https://www.bseindia.com/bseplus/AnnualReport/513599/75311513599.pdf
  - FY21: …/69916513599.pdf · FY20: …/66062513599.pdf · FY19: …/5135990319.pdf · FY17: …/5135990317.pdf
- **HCL OFS:** https://www.outlookbusiness.com/corporate/hindustan-copper-stake-sale-govt-sets-514-floor-price-for-up-to-6-stake
- **HCL Q1 FY27:** https://psuwatch.com/newsupdates/q1fy27-hindustan-copper-profit-jumps-162-expansion-execution-remains-the-bigger-test
- **Ministry of Mines year-end review 2025 (PIB):** https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/dec/doc20251231748501.pdf ; Copper Vision Document PIB: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2142191 (snippet only)
- **IBM Indian Minerals Yearbook 2023 (copper chapter pp. 292–300):** https://ibm.gov.in/writereaddata/files/17454767536809dc9139ba8IMYB_BOOK_2023.pdf
- **DGCI&S TradeStat (commodity-wise import/export, HS 2603/7402/7403/7404/7408):** https://tradestat.commerce.gov.in/eidb/commodity_wise_import · /commodity_wise_export
- **USGS MCS 2026 copper:** https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-copper.pdf
- **World Bank Pink Sheet (monthly, Oct-2026 update):** https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Historical-Data-Monthly.xlsx
- **LME daily (westmetall):** https://www.westmetall.com/en/markdaten.php?action=table&field=LME_Cu_cash
- **TC/RC:** https://thedeepdive.ca/copper-miners-and-smelters-may-fail-to-agree-on-2027-benchmark-as-fees-stay-negative-friedland-warns/
- **Hindalco:** Q4 FY26 PR https://www.hindalco.com/media/press-releases/hindalco-results-q4-fy26 ; Q1 FY27 PR https://www.adityabirla.com/media/press-releases/hindalco-posts-record-q1fy27-results/ ; Q1 FY27 deck https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ced6169a-dd22-4b23-abbb-c07d313569a3.pdf ; transcript …Pname=3390ab52-08d5-43ad-af0f-baea13e97773.pdf
- **Adani Enterprises Q1 FY27 deck:** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=87f9b62b-f36b-448a-8882-f051473798ea.pdf
- **Vedanta Q1 FY27 deck:** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f8b18e0e-4d21-46a7-916d-732b896b18ed.pdf ; Vedanta copper plans: https://news.metal.com/newscontent/104144173-vedanta-eyes-23b-copper-expansion-tuticorin-smelter-restart
- **BigMint (India primary production FY26):** https://www.bigmint.co/insights/detail/indias-primary-copper-production-surges-25-y-o-y-in-fy26-whats-driving-the-new-wave-of-expansion-745171
- **Global:** FCX Q3-26 update https://s22.q4cdn.com/529358580/files/doc_news/2026/FCX_261002.pdf ; SCCO Q3-26 https://www.sec.gov/Archives/edgar/data/0001001838/000110465926117588/scco-ex99d1.htm ; Antofagasta H1-26 https://data.fca.org.uk/artefacts/NSM/RNS/a74ead84-0008-42a9-b7e5-16f2b249decc.html
- **US Sec 232 copper:** https://www.cassidylevy.com/news/tariffs-imposed-pursuant-to-u-s-section-232-copper-investigation/
