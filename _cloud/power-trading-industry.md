# Indian Power Trading (Power || Power Trading): Research Dossier + Company Fact Pack

Compiled 13-Nov-2026 (run date `date -u` = Fri 13-Nov-2026) for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), sections 0–12 plus A–H. Because this is a single-member sub-sector, Part 1 is about the WHOLE Indian power-trading industry (traders + power exchanges + the regulator), with PTC India as the lens.
- **Part 2** is the company fact pack (brief-companies.md) for the one member, PTC India, plus its 65%-owned listed NBFC subsidiary PTC India Financial Services (PFS), which is consolidated into PTC's numbers.
- **Part 3** is the company-KPI appendix: summary grid (member + REFERENCE peer rows), aggregates, reconciliation vs our primer `primers/ptc-india.html`, primer issues, and source URLs.

**Member (1, Tier C):** PTC India Ltd (NSE: PTC · BSE: 532524 · ISIN INE877F01012) — primer `primers/ptc-india.html` (last refreshed 29-Aug-2026 on an FY25 basis).
**Reference peers (not members):** Indian Energy Exchange (IEX · NSE IEX · BSE 540750; member of our `subsectors/exchanges.html`), PTC India Financial Services (PFS · BSE 533344; subsidiary), unlisted exchanges PXIL and HPX, unlisted traders NTPC Vidyut Vyapar Nigam (NVVN), Powerpulse Trading Solutions, Tata Power Trading Co (TPTCL), Manikaran Power, Arunachal Pradesh Power Corp (APPCPL), GMR Energy Trading, JSW Power Trading, Greenko, Shree Cement and others.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary document (BSE filing PDF, screener.in page, CERC report PDF). URL inline or in §3.5.
- **[V-snip]** = verified only from a search-result summary or a secondary article (investywise, whalesbook, outlookbusiness, deccanherald etc.), not the primary document.
- **[V-sib]** = verified in a sibling library report this month and reused for consistency (`subsectors/exchanges.html` 25-Oct-26; `subsectors/power-generation.html` 13-Oct-26; `subsectors/power-transmission.html` and `integrated-power.html` Oct-26). Not re-fetched here.
- **[K]** = well-established public fact from memory; source named, not re-fetched. Spot-check if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present as "approx." or as a range.
- **[primer]** = from `primers/ptc-india.html` (FY25 basis, refreshed 29-Aug-2026).
- **[screener 13-Nov-26]** = screener.in pages pulled 13-Nov-2026 (PTC consolidated + standalone, PFS, IEX). PTC price ₹139, 52-week range ₹230/131.

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. **1 unit = 1 kWh. MU = million units (GWh). BU = billion units (TWh) = 1,000 MU.** Paise (p) = ₹0.01. **1 paisa per kWh on 1 BU = ₹1 crore.** That identity is the single most useful piece of arithmetic in this sub-sector (e.g. 92.8 BU × 3.35 p = ₹311 Cr).
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. H1 FY27 = Apr–Sep 2026. PTC, PFS and IEX all have a March year-end.
- CERC data conventions: "short-term" = contracts of less than one year, inter-state, through traders, directly between entities, and on power exchanges; CERC reports it as "short-term transactions & DSM", i.e. INCLUDING Deviation Settlement Mechanism (imbalance) volume, which is not a market. From the March-2026 monthly report onward CERC computes the short-term share against generation EXCLUDING renewable and captive plants (17.71% in Mar-26), while the FY25 annual report used gross generation (13.03% for FY25). **The two percentages are not comparable** (trap 6).
- **FX: ₹94.9 = US$1** (mid-Oct-2026, reused from sibling dossiers [V-sib]). Not needed much; this report is in ₹.
- Macro context reused from siblings [V-sib]: **West Asia war from 28-Feb-2026** (Strait of Hormuz closure; LNG shock; ceasefire 7-Apr-2026); RBI repo hiked to **5.50% on 7-Oct-2026**; FY26 was a cool, wet year (energy demand +0.8%, peak 245.4 GW, the first annual fall in the series); FY27 set records (270.8 GW on 21-May-2026; 269 GW on 10-Sep-2026).

**Q2 FY27 status (as of 13-Nov-2026): PTC HAS REPORTED. Q2 FY27 (Sep-26) is the latest quarter. PFS and IEX have also reported Q2.**

| Company | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|
| PTC India (member) | Early Aug-2026 (results + ₹23/share one-time special interim dividend declared the day before the analyst call) [V: Q1 FY27 transcript, BSE] | **Board 2-Nov-2026**; press release and investor presentation filed 2-Nov (17:58 / 18:00 IST); analyst call **3-Nov-2026**; transcript filed 6-Nov-2026 [V: BSE PDFs]. Standalone PAT ₹113.23 Cr; consolidated PAT ₹159.10 Cr; volume 32.46 BU (+24%). |
| PTC India Financial Services (subsidiary, ref) | ~late Jul-2026 [E, date not verified] (Q1 PAT ₹40.24 Cr [V PFS Q2 deck]) | **Board 27-Oct-2026**; press release 27-Oct; call 28-Oct-2026 16:00; transcript 30-Oct [V: BSE]. PAT ₹44.04 Cr; loan assets ₹3,684 Cr. |
| IEX (reference peer) | 24-Jul-2026 [V-sib exchanges] | Reported (screener shows Sep-26 quarter: revenue ₹165 Cr, PAT ₹133 Cr) [V screener 13-Nov-26]. |

**Still listed? Yes — PTC India is listed and no merger/demerger is pending. But three live corporate/structural actions change the analysis:**
1. **Promoter restructuring — NTPC to become sole promoter.** A Ministry of Power office memorandum dated **16-Jan-2026** directed that NTPC be the sole promoter of PTC India, that PFC, POWERGRID and NHPC withdraw and seek reclassification from "promoter" to "public", and that the CMD post be bifurcated [V-snip: theweek/PTI 23-Jan-2026; psuconnect; investywise]. A postal ballot (e-voting **19-Feb to 20-Mar-2026**, cut-off 13-Feb, ~2.76 lakh eligible holders) **passed** resolution 1 (revised definition of "Promoters", >99.96% for) and resolution 7 (CMD designation/terms of Dr Manoj Kumar Jhawar, >99.96%), but **failed** resolutions 2, 4 and 5 (amendments to Articles 113, 129 and 133; ~55.9% for, short of the 75% needed for a special resolution) [V-snip whalesbook]. NHPC withdrew its nominee director and relinquished promoter status effective **2-Mar-2026** [V-snip investywise]. Screener still shows **promoters 16.22%** at Sep-2026 (exchange reclassification evidently not yet reflected) [V screener]; the Q2 deck says "4 PSUs under Power Ministry hold 16.20%" [V]. In the Nov-2026 call Jhawar is introduced as "Managing Director & Chief Executive Officer" (not CMD) [V transcript], consistent with the CMD split. **Writer: do not describe PTC as "promoted by four PSUs with ~4% each" without this context; say "historically promoted by NTPC, PGCIL, PFC and NHPC (~4% each, 16.2% combined); the government decided in Jan-2026 to make NTPC the sole promoter, a process still being completed."** Which specific article amendments failed (likely NTPC nomination/chair rights) is unverified — FLAG.
2. **PFS divestment re-started.** The PTC board lifted an earlier pause on selling its 64.99% stake in PTC India Financial Services (reaffirmed at the 19-May-2026 board) [V-snip whalesbook]; a transaction advisor was appointed by Aug-2026 (the Q1 call transcript's "SBI case" is almost certainly **SBI Capital Markets (SBICAPS)** — transcription error; FLAG) [V Q1 transcript]; nodal officers appointed at PFS and information dossiers "being prepared"; IR said "closer to [the end of] this FY, we should be in position to tell something to the market" [V Q1 transcript]. In the 3-Nov-2026 call the MD refused to give dates, said RBI and possibly SEBI approvals are needed, and said PTC would not sell "at this reduced trading price" below book [V Q2 transcript]. **No bidder, price or signed agreement has been disclosed.**
3. **New businesses announced:** (a) a **mineral exchange** (announced ~31-Oct/1-Nov-2026; regulator Indian Bureau of Mines; initial five minerals incl. iron ore; rivals MSTC and mjunction e-auction platforms which must migrate to exchanges) [V Q2 transcript]; (b) **NLC India JV "NPRL"** (renewables; DPE approval received, incorporated, first board meeting held Oct/Nov-2026) [V Q1+Q2 transcripts, Q2 deck]; (c) 500 MW/2,000 MWh BESS expression of interest for long-term procurement [V Q2 deck].
4. **One-time special dividend paid:** ₹23/share interim (≈₹681 Cr on 29.6 crore shares [E]) declared with Q1 FY27, explicitly "one-time" from the PTC Energy (PEL) sale proceeds [V Q1 transcript]. This is why screener shows a **16.5% dividend yield** at ₹139 and why the share price fell from the ₹230 high: the ₹23 is a return of capital, not a recurring yield (trap 2).

---

## READ THIS FIRST: ten definitional traps

1. **Revenue is ~98% pass-through; the business is "BU × paise".**
   - FY26 consolidated revenue ₹16,771 Cr; standalone ₹16,256 Cr [V screener]. Standalone **trading margin** (the actual product) was **₹310.52 Cr on 92,802 MU = 3.35 p/kWh** [V Q1 FY27 deck, FY25 vs FY26 slide]. Standalone "total operational income" (trading margin + consultancy + net rebate) ≈ **₹450–453 Cr** in FY26, flat on FY25 [V deck; V-snip whalesbook "₹450 crore, flat"].
   - Screener's "Operating Profit" for standalone (₹270 Cr FY26, OPM 1.7%) is **revenue minus cost of power minus opex**, and screener puts **surcharge income in "Other Income"** (₹362 Cr FY26 standalone, which also contains treasury income). **Never quote a PTC "EBITDA margin %" off screener** — it is a ratio of a margin to a pass-through. Use paise/kWh and operational income.
2. **The 16.5% dividend yield and FY25 "record profit" are both one-offs.**
   - FY25 standalone PAT ₹854.78 Cr includes **₹457.39 Cr from the PEL (wind) divestment**; ex-PEL ~₹397 Cr [V deck footnote]. FY26 standalone PAT ₹397.04 Cr [V].
   - The **₹23/share special dividend (Aug-2026)** distributed the PEL cash. Recurring DPS is ~₹8.6 (FY26, from screener's 42% consolidated payout × EPS ₹20.46 [E]) — ~6% yield at ₹139, not 16.5%.
3. **Consolidated ≠ PTC.** Consolidated = PTC standalone + 64.99% of PFS (NBFC) + (until FY25) PTC Energy (wind). Consolidated borrowings (₹1,421 Cr Sep-26) are **almost all PFS's** (PTC standalone borrowings ₹1 Cr) [V screener]. Consolidated "interest" contains PFS's cost of funds. Consolidated FY25 PAT ₹976 Cr and FY26 ₹717 Cr include PFS impairment **reversals** (e.g. ₹82 Cr reversal in Q1 FY26, ₹57 Cr in Q2 FY26) that flipped to a **₹51 Cr provision in Q2 FY27** [V transcripts]. Quote the basis every time.
4. **"Trading margin" means three different things.**
   - (a) **CERC cap**: 0 to 7 p/kWh under the CERC Trading Licence Regulations 2020 (w.e.f. 31-Jan-2020) [V CERC FY25 report + Mar-26 monthly report]; 2 p cap on back-to-back contracts where the trader has no independent payment-security obligation [V-snip]. The older 2010 rule (7 p if sale price > ₹3/kWh, 4 p if ≤ ₹3) is **superseded** — our primer's "~7 p if ≤ ₹4 and ~4 p if > ₹4" is wrong on both the threshold and the direction (see Primer issues).
   - (b) **Industry realised**: CERC's weighted-average margin on inter-state bilateral trades: **1.9 p in FY25** (2.9 p FY24) and **1.3 p in Mar-2026** [V CERC].
   - (c) **PTC blended**: 3.35 p FY26; 2.89 p Q2 FY27. PTC's blend is above the industry because it includes long-term (7.98 p) and cross-border (6.98 p) trades; its short-term margin was only **0.69 p** in Q2 FY27 [V Q2 transcript].
5. **"Surcharge" and "rebate" are separate lines, and both are falling for a good reason.**
   - **Net rebate** (PTC pays the generator early and earns a prompt-payment rebate that the discom did not claim) sits inside the sale/purchase accounts and is part of "operational income" (Q2 FY27 ₹30.16 Cr) [V].
   - **Net surcharge** (late-payment surcharge earned from discoms less surcharge paid back-to-back to generators) sits in other income/finance cost; it fell from ₹80.26 Cr (H1 FY26) to **₹28.96 Cr (H1 FY27)** as discom liquidity improved under the LPS Rules [V]. Management calls this a positive ("better management of receivables").
6. **"Short-term share" has at least four denominators.**
   - CERC annual (gross generation incl. RE): **13.03% in FY25** (238.35 BU of 1,829.7 BU, incl. DSM) [V CERC].
   - CERC monthly from 2026 (generation excl. RE & captive): **17.71% in Mar-2026** [V CERC].
   - Library exchanges report: "short-term 17.7% of electricity transacted in FY26; power exchanges 9.87%" (CEA, snippet) [V-sib].
   - Excluding DSM (a balancing mechanism, not a market) the FY25 figure is ~11.3% [E: (238.35 − 32.14)/1,829.7].
   - **Always name the denominator and say whether DSM is included.**
7. **"Traded through traders" double-counts exchange volume.** CERC's trader market-share table (PTC 31.80% FY25) is computed on the volume each licensee transacted **bilaterally AND on the power exchanges** [V CERC note]. A trader buying on IEX for a discom is counted as trader volume AND as exchange volume. So PTC's 92.8 BU (FY26) **includes ~60% exchange-traded volume** (~55 BU [E]). Do not add trader volume to exchange volume to get "the short-term market".
8. **The Oct-2023 GNA regime and Sep-2024 reporting break.** CERC flags that with the General Network Access (GNA) Regulations from 1-Oct-2023, bilateral volumes "are not strictly comparable" with earlier years; CERC's monthly bilateral-through-traders volume collapsed from 4.50 BU (Aug-24) to 1.12 BU (Sep-24) and stayed ~0.4–1.4 BU/month thereafter, and FY25 trader bilateral volume printed 26.25 BU vs 41.02 BU in FY24 [V CERC]. Part of this is a classification change (bilateral short-term under GNA/T-GNA, TAM on exchanges), not a collapse in trading. **Do not write "bilateral trading halved in FY25" without this caveat.**
9. **"Licensees" count: 662/664 vs 81.** CERC's FY25 annual report says "662" (and "664") inter-state trading licensees at 31-Mar-2025 with 44 active; the Mar-2026 monthly report says "81 trading licensees… 41 engaged in short-term trading"; PTC management says "over 70 licensed traders" [V CERC ×2; V-snip]. The 662 looks like a typo or a cumulative count. **Use "about 80 licensees, of which about 40 actually trade".**
10. **PTC's exchange stakes.** PTC co-promoted IEX (2008) and later sold out (2017) [K/V-snip — the ₹132.54 Cr IEX stake sale is variously attributed to PTC and to PFS; FLAG]; PTC today holds **22.5% of Hindustan Power Exchange (HPX)** [V Q2 transcript] — which our primer never mentions. CERC rules cap a trading member's shareholding in an exchange at **5%**, so **PTC cannot trade on HPX** unless it sells down to 5% [V Q1+Q2 transcripts].

---

# PART 1 — INDUSTRY DOSSIER: THE INDIAN POWER-TRADING MARKET

## 0. Top-line framing (what an expert leads with)

- **Power trading is a toll on the 10–18% of Indian electricity that is not locked into 25-year PPAs.**
  - ~82% of electricity still moves under long-term contracts directly between generator and discom (82.29% in Mar-2026 on CERC's new basis) [V CERC Mar-26]. Traders and exchanges compete for the rest.
  - FY25 short-term + DSM volume: **238.35 BU = 13.03% of gross generation** (FY22 12.5%, FY10 9.6%) [V CERC FY25]. Short-term volume CAGR 8.9% vs generation 5.8% over FY10–FY25 [V CERC].
  - FY25 split of that 238 BU: power exchanges **143.75 BU (60.3%)**, direct bilateral 36.21 BU (15.2%), DSM 32.14 BU (13.5%), **bilateral through traders 26.25 BU (11.0%)** [V CERC]. In FY10 traders had 40.5% and exchanges 10.9%.
  - FY26 (library, CEA snippet): all exchanges **168.55 BU** (+17%), IEX 141.1 BU; short-term ≈ 302 BU, exchanges ≈ 56% of it [V-sib exchanges].
- **The money pool is tiny relative to the electricity value.**
  - Market value of power traded through traders + exchanges: **₹89,681 Cr in FY25** (traders ₹18,822 Cr, exchanges ₹70,860 Cr) vs ₹1,00,729 Cr in FY24 [V CERC Table 12].
  - The *fee* pool is ~1–3 paise per unit: exchanges charge up to **2 p/side** (IEX FY26 revenue ₹616 Cr on 141.1 BU [V-sib]); traders realise **~1.3–1.9 p** on bilateral trades industry-wide [V CERC]. PTC's whole trading margin was ₹310.5 Cr in FY26 [V].
  - **[E] The industry's total intermediation revenue (all traders' margins + all exchange fees) is roughly ₹1,200–1,500 Cr a year** — smaller than one mid-size FMCG brand. FLAG as estimate.
- **Three forces are reshaping it in 2025–27:**
  1. **Exchanges have won the short-term market; traders have repositioned as exchange-access providers.** PTC itself now does **~60% of its volume on exchanges** (Q1 and H1 FY27) at sub-1 paisa margins (0.69 p short-term in Q2 FY27) [V].
  2. **Market coupling** (CERC order 23-Jul-2025; draft Power Market (Second Amendment) Regulations 17-Apr-2026, Grid-India as sole Market Coupling Operator; SC declined to intervene 3-Aug-2026; **not yet notified** as of Nov-2026) would end IEX's liquidity monopoly in day-ahead and could revive PXIL and HPX — in which PTC owns 22.5% [V-sib exchanges; V-snip; V PTC transcript].
  3. **Scarcity is back.** Peak demand records (270.8 GW 21-May-2026; 269.06 GW 10-Sep-2026 vs 229.15 GW in Sep-2025) [V-sib; V-snip], the West Asia LNG shock (gas power "almost ₹30 per unit" RTC per PTC's MD [V Q2 transcript]), and evening solar drop-off have pushed IEX DAM to **₹7.30 (Sep-26) and ₹6.66/kWh (Oct-26, +149% YoY)**, with the **₹10 cap binding on most evenings** [V-sib; V-snip investywise]. Scarcity raises traded value but not traders' per-unit fee.
- **PTC is the scale leader but its unit economics are drifting down.**
  - Largest trader every year: **31.80% of trader volume in FY25** (NVVN 17.30%, Powerpulse 17.13%, TPTCL 8.62%, Manikaran 6.34%); **31.16% in Mar-2026** (Powerpulse 21.19%, NVVN 15.15%) [V CERC]. HHI 0.176–0.178 = "moderately concentrated".
  - Volume FY25 82.75 BU → FY26 92.80 BU (+12%) → H1 FY27 58.25 BU (+18%), Q2 FY27 32.46 BU (+24%) [V]. Blended margin 3.37 p → 3.35 p → **2.89 p (Q2 FY27)** as cross-border Bhutan volume fell and exchange volume rose [V].
  - Standalone PAT FY26 ₹397 Cr; H1 FY27 ₹184 Cr (−23%) on lower net surcharge and lower treasury income after the special dividend [V].
- **Valuation is a holding-company puzzle, not a trading multiple.** [E, screener 13-Nov-26]
  - M-cap **₹4,117 Cr** (₹139/share). Standalone cash ₹2,431 Cr at 30-Sep-2026 (₹82/share) [V Q2 transcript]. PFS stake market value 64.99% × ₹1,662 Cr = **₹1,080 Cr** (₹36.5/share) [V screener]. HPX 22.5% (unlisted; value unknown).
  - Implied value of the trading business ≈ ₹4,117 − 2,431 − 1,080 ≈ **₹600 Cr** for a business whose trading margin + consultancy + rebate alone is ~₹450 Cr/yr of operational income [E]. That gap is the whole bull case; the ex-dividend cash erosion, PFS discount and governance history are the bear case.
  - Consolidated P/E 8.87×, P/B 0.77× (BV ₹182); standalone P/E 12.0×, BV ₹138 [V screener]. IEX by contrast: P/E 20.8×, m-cap ₹10,378 Cr [V screener].

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 The products ("routes to market" for a unit of electricity)

| Route | What it is | Tenure | Who intermediates | Fee/margin | Share of Indian electricity |
|---|---|---|---|---|---|
| **Long-term PPA (Sec 62/63)** | Generator ↔ discom contract, regulated or competitively bid tariff | 7–25 yrs (typically 25) | Mostly direct; legacy traders (PTC) on back-to-back PPAs; SECI/NTPC/NHPC/SJVN as "intermediary procurers" for RE | Trader margin set in PPA (PTC LT 7.98 p in Q2 FY27 [V]); SECI ~7 p trading margin on RE [K] | ~82–87% [V CERC Mar-26: 82.29% "long-term" incl. medium-term] |
| **Medium-term bilateral** | 1–5 year contracts (MoP medium-term bidding guidelines; DEEP portal) | 1–5 yrs | Traders (PTC, NVVN, TPTCL) | PTC MT 3.17 p (Q2 FY27) [V] | small; included in "long-term" in CERC's short-term statistics |
| **Short-term bilateral through traders** | Banking/swap, RTC/peak/off-peak contracts < 1 yr, often via DEEP e-bidding | days to 11 months | Licensed traders | 0–7 p cap; realised ~1.3–1.9 p industry [V CERC] | 26.25 BU = 1.4% of FY25 generation [V] |
| **Direct bilateral (short-term)** | Two entities contract without a trader (e.g. a captive generator and a discom) | < 1 yr | none | — | 36.21 BU FY25 [V] |
| **Power exchange — collective** | **DAM** (day-ahead double-sided closed auction, 96 × 15-min blocks); **RTM** (48 half-hourly auctions/day, since 1-Jun-2020); **G-DAM** (green, since 27-Oct-2021); **HP-DAM** (high-price, since 10-Mar-2023, cap ₹20) | next day / same day | Exchange as counterparty via clearing; traders act as members for clients | ≤ 2 p/side exchange fee + member/trader margin | FY25 DAM 61.29 BU, RTM 39.01, G-DAM 8.32, HP-DAM 0.003 [V CERC] |
| **Power exchange — bilateral contracts** | **TAM** (daily, weekly, monthly up to 3 months; any-day single-sided), **G-TAM**, **HP-TAM**, **DAC/intraday contingency** | intraday to 3 months | Exchange; traders as members | ≤ 2 p/side (IEX) | FY25 TAM 33.06 BU, G-TAM 1.63, HP-TAM 0.44 [V CERC] |
| **DSM** | Deviation Settlement Mechanism — penalty/settlement for deviating from schedule (normal rate linked to DAM/RTM ACP, cap ₹10) | real time | Grid-India/RLDCs | not a market | 32.14 BU FY25 (₹5.00/kWh average) [V CERC] |
| **Ancillary (TRAS)** | Tertiary reserve procured on exchanges (since CERC order 28-Apr-2023) | real time | Exchanges | — | small [V CERC] |
| **Cross-border** | Imports (Bhutan hydro, Nepal wet-season surplus) and exports (Bangladesh, Nepal dry season, Myanmar), via G2G, bilateral, bidding or IEX (Nepal on DAM since 17-Apr-2021; Bhutan since 1-Jan-2022; RTM since Oct-2023) | long and short | PTC (G2G nominated), NVVN (Bangladesh/Nepal), exchanges | PTC cross-border 6.98 p (Q2 FY27) [V] | Bhutan net imports 4.47 BU FY25; exports to Bangladesh 8.12 BU [V CERC] |
| **Certificates** | RECs (1 REC = 1 MWh), traded on exchanges and through traders (since 2022 also bilaterally via traders) | — | Exchanges/traders | small | Mar-26: ~45 lakh RECs on exchanges + 28.7 lakh via traders at ₹339–344/MWh [V CERC] |
| **Electricity futures (financial)** | Monthly electricity futures on MCX and NSE (SEBI-regulated since the 2021 CERC–SEBI accord), launched Jul-2025 | months | Commodity brokers | — | ~₹37 Cr/day ADT on MCX in Q1 FY27 [V-sib exchanges] |

### 1.2 The value chain (generator → trader/exchange → discom/consumer)
1. **Supply side (sellers):** central/state gencos with unrequisitioned surplus (URS), IPPs with untied ("merchant") capacity (Adani Power Raipur/Raigarh, Vedanta Chhattisgarh, JP, JSW), RE generators without PSAs (44.8 GW of awarded RE had no signed power sale agreement in Apr-2026 [V-sib power-gen]), captive plants (steel, cement, aluminium), state discoms with surplus (UP and Punjab were the top bilateral sellers in Mar-2026 [V CERC]), neighbouring countries (Bhutan, Nepal).
2. **Intermediaries:** inter-state trading licensees (traders), power exchanges (IEX, PXIL, HPX), and the system operator **Grid-India** (formerly POSOCO; schedules, runs DSM, is the proposed market-coupling operator).
3. **Demand side (buyers):** state discoms (Gujarat, Maharashtra, Karnataka, J&K and Uttarakhand were the top five bilateral buyers in Mar-2026 [V CERC]), open-access industrial consumers (C&I), SEZs, railways, data centres, Nepal/Bhutan/Bangladesh.
4. **What the trader provides:** (i) **credit intermediation** — the trader is a creditworthy counterparty to the generator and carries discom payment risk (PTC's top debtors at 30-Jun-2026: Punjab ~₹860 Cr, UPPCL ~₹600 Cr, Haryana ~₹500 Cr, Rajasthan ~₹400 Cr, Tamil Nadu ~₹300 Cr; total debtors ₹4,469 Cr [V Q1 transcript]); (ii) **aggregation and structuring** (banking/swap contracts where a summer-peaking state returns power to a winter-peaking state; RTC from RE + storage); (iii) **exchange access** for clients who are not members; (iv) **regulatory/scheduling services** (open-access approvals, REC/RPO compliance); (v) **G2G cross-border execution**.

### 1.3 Where value is captured
- **Generators capture the price** (scarcity rents in evening peaks); **exchanges capture a liquidity toll** (IEX 84% operating margin, ROE 39% [V-sib; V screener]); **traders capture a capped, competed spread** on credit and structuring, and a **float/surcharge** on discom payment delays.
- A trader's real economic edge = (a) balance sheet to absorb receivables and pay generators early (rebate capture), (b) relationships on both sides, (c) nominated franchises (PTC's G2G cross-border mandate), (d) legacy long-term back-to-back PPAs at 7–8 p.
- Value has migrated over 2009–2026 from bilateral traders to exchanges: traders' share of short-term & DSM volume 40.5% → 11.0%; exchanges 10.9% → 60.3% (FY10 → FY25) [V CERC].

---

## 2. Size and growth

### 2.1 Electricity, short-term market and exchanges — the long series [V CERC FY25 Tables 9, 10(a), 13, 14; FY26 from V-sib]

| Year | Gross generation (BU) | ST + DSM (BU) | % of gen | Through traders (BU) | Traders % of ST | Direct bilateral (BU) | DSM (BU) | Power exchanges (BU) |
|---|---|---|---|---|---|---|---|---|
| FY10 | 768.43 | 65.90 | 9.6% | 26.72 | 40.5% | 6.19 | 25.81 | 7.19 |
| FY15 | 1,110.07 | 98.99 | 8.9% | 34.56 | 34.9% | 15.58 | 19.45 | ~29.4 [E residual] |
| FY19 | 1,375.86 | 145.20 | 10.6% | 47.32 | 32.6% | 19.23 | 25.13 | ~53.5 [E] |
| FY20 | 1,390.93 | 137.16 | 9.9% | 29.95 | 21.8% | 28.17 | 22.59 | ~56.5 [E] |
| FY21 | 1,380.06 | 146.01 | 10.6% | 26.67 | 18.3% | 16.84 | 22.91 | ~79.6 [E] |
| FY22 | 1,491.85 | 186.75 | 12.5% | 39.47 | 21.1% | 20.56 | 25.27 | ~101.5 [E] |
| FY23 | 1,624.47 | 194.35 | 12.0% | 33.80 | 17.4% | 31.30 | 26.30 | ~103.0 [E] |
| FY24 | 1,739.09 | 218.22 | 12.5% | 41.02 | 18.8% | 28.92 | 26.78 | ~121.5 [E] |
| FY25 | 1,829.70 | 238.35 | 13.03% | 26.25 | 11.01% | 36.21 | 32.14 | **143.75** [V] |
| FY26 | ~1,840 [V-sib, estimate] | ~302 "short-term" (library, different basis) [V-sib] | 17.7% "of electricity transacted" [V-sib] | n/a | n/a | n/a | n/a | **168.55** [V-sib, CEA snippet] |

- Exchange volumes for FY15–FY24 are computed as residuals (ST+DSM − traders − direct − DSM) because CERC's Table 10(b) did not extract cleanly; they are within ~1–2 BU of the published figures [E]. The library's IEX-only series: ~102 BU (FY24), 121 BU (FY25), 141.1 BU (FY26), H1 FY27 77.2 BU (+14.2%) [V-sib].
- FY26 full-year CERC annual market report was **not yet published** on cercind.gov.in on 13-Nov-2026 (only Jan–Mar 2026 monthly reports are listed) [V: CERC report_MM-2026.html]. FY26 short-term totals on CERC's basis are therefore a gap (§H).

### 2.2 Market value (₹ Cr) [V CERC Table 12]

| Year | Bilateral trader market | Power exchange market | Total |
|---|---|---|---|
| FY10 | 14,055 | 3,568 | 17,622 |
| FY15 | 14,801 | 10,288 | 25,089 |
| FY19 | 20,255 | 22,809 | 43,064 |
| FY20 | 13,516 | 18,303 | 31,820 |
| FY21 | 9,245 | 23,731 | 32,976 |
| FY22 | 14,688 | 47,598 | 62,286 |
| FY23 | 24,771 | 59,886 | 84,657 |
| FY24 | 30,061 | 70,669 | 1,00,729 |
| FY25 | 18,822 | 70,860 | 89,681 |

- CAGR FY10–FY25 11.5% [V CERC]. FY25 fell 11% because prices fell (IEX DAM ₹4.47 in FY25 vs ~₹5.2 FY24 [V-sib/K]) and because of the GNA-related reclassification of bilateral volumes (trap 8).
- **FY26 [E]:** exchange volume 168.55 BU × IEX DAM average ~₹3.86 ≈ ~₹65,000 Cr exchange market (prices fell further in FY26 even as volume rose 17%); FY27 will be much larger (Q2 FY27 DAM ₹5.70, Sep ₹7.30, Oct ₹6.66) [E from V-sib prices]. Label clearly as estimate.

### 2.3 Prices — the scarcity cycle [V CERC; V-sib; V-snip]

| Period | IEX DAM avg (₹/kWh) | RTM avg | Trader bilateral wtd avg | Note |
|---|---|---|---|---|
| FY23 | 5.94 [V-sib integrated-power] | — | — | coal shortage, ₹12 then ₹10 caps |
| FY24 | ~5.2 [K] | — | — | HP-DAM launched (Mar-2023) |
| FY25 | 4.47 [V-sib] | ~3.3–4.8 monthly [V CERC] | Apr-24 8.24 → Mar-25 5.99; FY25 RTC 7.01, peak 9.35, OTP 6.61 [V CERC] | 79% of IEX DAM volume cleared < ₹5 [V CERC] |
| FY26 | 3.86 [V-sib] | — | Mar-26: 5.83 (RTC 5.39, peak 8.93) [V CERC] | cool, wet year; demand +0.8% |
| Q2 FY27 | 5.70 [V-sib] | 5.20 (+49%) [V-sib] | n/a | demand +11.5% (502 BU) [V-sib] |
| Sep-2026 | 7.30 [V-sib] | 6.90 [V-sib] | n/a | peak 269 GW (10-Sep) |
| Oct-2026 | **6.66 (+149% YoY)** [V-snip investywise] | **5.78 (+112%)** | n/a | consumption 159.8 BU (+21.9%) [V-snip] |

- **Bilateral trader prices sit above exchange prices** because bilateral contracts are mostly RTC, delivered at state periphery (exchange delivery is at regional periphery) and contracted weeks/months in advance [V CERC narrative]. Only 4% of FY25 trader volume was below ₹5/kWh vs 79% of IEX DAM volume [V CERC].
- **HP-DAM** is effectively dormant: 0.003 BU in FY25; Mar-2026 HP-DAM cleared 0.41 MU against **2,492.65 MU of sell bids and 0.71 MU of buy bids** [V CERC] — gas sellers at ₹12–20 find almost no buyers.

### 2.4 PTC's place in the size picture [E unless noted]
- PTC FY26 volume 92.8 BU [V] ≈ **5% of India's gross generation** (~1,840 BU) and ≈ 30% of short-term traded volume on a trader basis.
- Of PTC's 92.8 BU, ~60% (≈55 BU) is exchange-traded on behalf of clients [V % ; E BU]; that is ≈ **33% of all power-exchange volume (168.55 BU)** — PTC is the largest single trading member routing volume onto IEX [E].
- PTC's long-term + medium-term + cross-border ≈ 40% (≈37 BU) is where almost all of its margin comes from (§9).

---

## 3. Demand drivers and end-markets

1. **Electricity demand growth (the base).** Energy requirement rose 4.7%/yr FY15–FY25 (1,069 → 1,694 BU); peak demand 148 GW (FY15) → 250 GW (FY25) → 245.4 GW (FY26, first fall) → **270.8 GW record (21-May-2026)** [V-sib power-gen/power-transmission]. Q1 FY27 generation +9.38% (523 BU) and H1 FY27 +10.64% per PTC [V transcripts]; Q2 FY27 consumption +11.5% (502 BU) [V-sib]; Oct-2026 +21.9% [V-snip]. Management expects 4–6%/yr through-cycle [V Q1 transcript]. Draft National Electricity Policy 2026 targets 2,000 kWh per capita by 2030 and >4,000 kWh by 2047 (vs 1,395 kWh in FY24) [V Q1 transcript; V-sib].
2. **Mismatch volume (the trader's real driver).** PTC's MD: "there is always a gap between what kind of contracts a utility is having and what kind of quantum it can effectively utilize… those unbalances are the trading opportunities" — diurnal (solar noon surplus vs evening deficit), seasonal (Rabi/summer/winter peaks differ by state), and hydrological (Bhutan/Nepal/Himalayan hydro) [V Q1 transcript].
3. **Renewable intermittency → RTM.** RTM volume 24.2 BU (FY23) → 38.9 (FY25) → 54.9 BU (FY26, +41%), record **315 MU on RTM on 26-Sep-2026** [V-sib]; IEX Oct-2026 RTM 5,670 MU = 43% of IEX volume [V-snip]. Storage still < 20 GWh installed; intraday price range "less than ₹1 to the regulatory ceiling of ₹10" [V Q2 transcript].
4. **Discoms buying more short-term.** Expiring long-term PPAs, unwillingness to sign new 25-year coal PPAs at high tariffs, and RDSS-linked procurement optimisation push discoms to exchanges; but PTC's MD notes "more than 80% trading is happening on the long-term contract basis in which currently traders are not permitted" and "peak demand might be touching 260,000 MW… but the trading is hardly happening for 8,000 to 9,000 MW on the spot markets and the exchanges" [V Q1 transcript].
5. **Open access / C&I and green energy.** Green Energy Open Access Rules 2022 (threshold cut to 100 kW; ISTS waivers) [K] drive G-DAM/G-TAM and RE-RTC trading; PTC has 500–600 large C&I clients [V Q2 transcript], sourced 74 MW green power for MRPL [V Q2 deck], and calls C&I/CPP "the new growth driver" [V deck]. Green market volumes are, however, falling on IEX (Q2 FY27 −5.8%; Oct-26 −30%) [V-sib; V-snip] as cheap daytime solar shifts to plain DAM/RTM.
6. **Scarcity and price.** High prices increase the ₹ value traded and PTC's revenue line, but per-unit margins are capped, and high prices suppress exchange buy volume (DAM −3.8% YoY in Oct-2026 while RTM +23.7%) [V-snip].
7. **Cross-border.** Bhutan's own winter demand is rising (PTC signed to **export up to 1,200 MW to Bhutan in winter** on short-term) [V Q2 deck/transcript]; Nepal is now two-way and a net exporter to India in FY25 (+497 MU net import by India) [V CERC]; Bangladesh imports ~8 BU/yr from India [V CERC].
8. **Data centres, EVs, cooling** — library says data-centre volume is still "very negligible" at AESL [V-sib power-transmission]; a 2027–30 driver, not a 2026 one.

---

## 4. Supply side and cost structure

### 4.1 What a trader "buys" and what it spends
- **Inputs:** power (pass-through), working capital (receivables financed by own cash + bank lines; PTC working-capital interest ~₹7 Cr/quarter [V Q2 transcript]), payment-security instruments (LCs, bank guarantees to exchanges/generators), people (PTC "establishment expenditure" base ~₹10 Cr/quarter, +₹2 Cr after absorbing PEL staff [V Q2 transcript]), trading/IT systems, regulatory compliance.
- **Supply of tradeable power:** URS from central stations, merchant thermal (Adani Raipur/Raigarh, Vedanta), Bhutan hydro (Chukha 336 MW, Kurichhu 60 MW, Tala 1,020 MW, Mangdechhu 720 MW, Punatsangchhu-II 1,020 MW commissioning 2025–26 [K]), Nepal wet-season surplus, RE without PSAs, gas plants in peaks (only economic at very high prices — "almost ₹30/unit" RTC on RLNG in 2026 [V Q2 transcript]).

### 4.2 "Where ₹100 of revenue goes" — PTC standalone FY26 [E composite from V figures]
| Item | ₹ per ₹100 of revenue | Basis |
|---|---|---|
| Cost of power paid to generators | ~98.1 | ₹16,256 Cr revenue − ₹310.5 Cr trading margin |
| Trading margin retained | ~1.9 | ₹310.5 Cr / ₹16,256 Cr |
| — of which employee + other opex | ~0.3 | standalone opex inferred ~₹45–55 Cr/yr [E] |
| Consultancy income (separate line, adds) | +0.25 | ~₹40–45 Cr/yr (Q2 ₹9.86 Cr; H1 ₹20.62 Cr) [V] |
| Net rebate (inside sale/purchase) | +0.6 | FY26 ~₹100 Cr [E from H1 FY26 ₹52 Cr] |
| Net surcharge + treasury income (other income) | +2.2 | screener other income ₹362 Cr FY26 [V] |
| PAT | ~2.4 | ₹397 Cr / ₹16,256 Cr [V] |
- So per ₹100 of revenue, **PTC keeps ~₹2.4 of profit, of which only about ₹1 comes from the trading margin net of cost; the rest is rebate, surcharge, consultancy and treasury income** [E]. This is the key insight the writer should make visible.

### 4.3 Capacity/scale constraints
- No physical capacity; the constraints are **balance-sheet** (PTC net cash ₹2,451 Cr at 30-Jun-2026 before the special dividend; ₹2,431 Cr cash at 30-Sep [V]; CERC net-worth thresholds by licence category), **transmission congestion** (minimal in 2026: Mar-26 congestion cut only 0.03% of IEX DAM volume [V CERC]), **regulatory eligibility** (traders barred from long-term thermal bids under the standard bidding documents [V Q1 transcript]), and **credit limits** with discoms.

---

## 5. Industry structure

### 5.1 Traders: concentration and shares [V CERC FY25 annual Table 16; V CERC Mar-26 Table 2]

| Rank | Licensee | Ownership | FY25 share | Mar-26 share |
|---|---|---|---|---|
| 1 | **PTC India** | listed; PSU-promoted (NTPC sole promoter in process) | **31.80%** | **31.16%** |
| 2 | NTPC Vidyut Vyapar Nigam (NVVN) | 100% NTPC | 17.30% | 15.15% |
| 3 | Powerpulse Trading Solutions | unlisted (private; ownership not verified — FLAG) | 17.13% | 21.19% |
| 4 | Tata Power Trading Co (TPTCL) | 100% Tata Power [K] | 8.62% | 4.07% |
| 5 | Manikaran Power | unlisted private [K] | 6.34% | 7.00% |
| 6 | Arunachal Pradesh Power Corp (APPCPL) | private [K] | 4.60% | 4.17% |
| 7 | GMR Energy Trading | GMR group [K] | 2.83% | 1.47% |
| 8 | JSW Power Trading | JSW Energy [K] | 2.73% | 5.09% |
| 9 | Instinct Infra & Power | private | 1.01% | excluded from Mar-26 table |
| 10 | Kreate Energy | private | 0.87% | 0.97% |
| — | Greenko Energies | Greenko (AM Green) | 0.60% | 2.92% |
| — | Shree Cement | Shree Cement (captive) | 0.52% | 2.16% |
| — | Statkraft, Shell Energy, ENGIE, AMP, Serentica, Avaada, Sunsure | MNC/RE platforms | ≤0.44% each | ≤0.08% each |
| — | NLC India, NHPC, SJVN | CPSUs | 0.17% / 0.12% / 0.09% | 0.22% / — / 0.02% |
| | **Top 5** | | **81.19%** | **79.59%** |
| | **HHI** | | **0.1760** (FY24 0.1721) | **0.1777** |

- Basis: share of volume transacted by trading licensees **bilaterally (inter- & intra-state) and through power exchanges** [V CERC note] — i.e. includes exchange volume (trap 7).
- **Adani Enterprises**: does not appear in either CERC table under its own name in FY25/Mar-26 [V]. Adani Enterprises historically held a trading licence and was a top-5 trader in the 2010s [K]; the Adani group's 2026 trading presence is through **Adani Energy Solutions' "Energy Solutions Platform"** (25,333 MU supplied in H1 FY27 per the library — mostly intra-state retail/C&I supply in Mumbai, not inter-state trading) [V-sib power-transmission]. FLAG for writer: do not list "Adani" as a top trader without qualification.
- The number of active traders rose from 15 (FY09) to 44 (FY25) [V CERC]; licence holders ~81 (Mar-26) [V CERC].
- **Interpretation:** the top three (PTC, NVVN, Powerpulse) hold ~65–68%; PTC's share has been stable at ~31% while TPTCL halved and Powerpulse/JSW/Greenko/Shree grew. HHI 0.176 = moderate concentration (0.15–0.25 band) [V CERC].

### 5.2 Exchanges: concentration [V CERC; V-sib]
- **IEX ~84% of all exchange volume in FY26 (88% in FY23) and 98–99% of DAM** [V-sib]. In Mar-2026: IEX DAM 6,860.58 MU vs PXIL 4.22 MU vs HPX 0.16 MU; RTM IEX 5,279.88 vs PXIL 6.86 vs HPX 2.48 MU [V CERC].
- **Where PXIL and HPX compete is the bilateral/term products:** Mar-2026 TAM IEX 735 / PXIL 642 / HPX 463 MU; G-TAM 8.7 / 93.8 / 42.6 MU; intraday & contingency 208 / 217 / 197 MU [V CERC]. In TAM/contingency the three exchanges are roughly equal — price discovery there is continuous/bilateral, so liquidity network effects are weaker.
- Ownership: **IEX** listed (no promoter; FII 12.0%, DII 31.8% Sep-26 [V screener]); **PXIL** promoted by NSE and NCDEX [V-sib]; **HPX** promoted by **PTC India (22.5%)**, BSE and ICICI Bank [V-sib; V PTC transcript]. HPX revenue ₹18.13 Cr in Q2 FY27 (₹9.89 Cr Q2 FY26); H1 FY27 ₹32.11 Cr (₹22.18 Cr) [V Q2 transcript] — vs IEX's ₹165 Cr quarterly revenue [V screener].
- Exchange start dates: IEX June 2008, PXIL October 2008, HPX July 2022 [V CERC].

### 5.3 Unlisted heavyweights, PSU parents and MNCs
- **NVVN** (100% NTPC) — #2/#3 trader; nodal agency for Bangladesh exports and for bundled solar under JNNSM Phase I [K]. The awkward reality: NTPC, PTC's incoming sole promoter, owns PTC's largest PSU competitor. NTPC Q1 FY26 revenue included ₹2,331 Cr "sale of energy through trading" [V-snip]; NVVN traded 11.5 BU in Q1 FY25 (+43%) [V-snip psuconnect]. NVVN standalone FY25/FY26 financials not found (§H).
- **TPTCL** (Tata Power) — FY25 8.62% share; Tata Power's integrated report shows trading as a small segment [K]. Financials not fetched (§H).
- **Manikaran Power**, **APPCPL**, **Kreate**, **Instinct** — independent private traders.
- **MNC/RE-platform licensees** — Statkraft, Shell, ENGIE, AMP, Serentica, Avaada, Sunsure — tiny volumes; they hold licences to market their own RE and to be ready for storage/PPA aggregation [V CERC tables].
- **CPSU "intermediary procurers"** — SECI, NTPC, NHPC, SJVN buy RE under 25-year PPAs and resell to discoms under PSAs with a trading margin (~7 p for SECI [K]). These are the largest "traders" of long-term RE in India but are not counted in CERC's short-term trader shares.

### 5.4 Imports/China
- Not applicable in the goods sense. "Imports" = cross-border electricity: India has been a **net exporter since FY17** (FY25 net export 3,164 MU) [V CERC].

---

## 6. Business-model archetypes and their economics

| Archetype | Examples | Revenue model | Margin per unit | Capital need | Risk | Returns |
|---|---|---|---|---|---|---|
| **1. Platform exchange** | IEX (also PXIL, HPX) | Fee ≤ 2 p/side × volume; admission/annual fees; REC fees; treasury income | ~4.3 p per unit (both sides) [E: IEX ₹616 Cr / 141.1 BU] | Very low (servers, software) | Regulatory (fee cap, coupling) | IEX ROE 39%, ROCE 52% [V screener] |
| **2. Scale "national" trader with legacy LT book** | **PTC India** | Trading margin (LT 7.98 p, CB 6.98 p, MT 3.17 p, ST 0.69 p) + rebate + surcharge + consultancy + treasury | 2.9–3.4 p blended [V] | Medium (receivables carried with own cash; PTC NWC ₹848 Cr end-FY26 [V-snip]) | Discom credit, litigation on change-in-law pass-through (₹17.4 Cr provision Q1 FY27 [V]), cross-border hydrology | PTC standalone ROE ~8–9% (screener 8.3%) [V] |
| **3. Captive/group trader** | NVVN (NTPC), TPTCL (Tata Power), JSW Power Trading, GMR Energy Trading, Greenko, Shree Cement | Monetise parent's surplus/merchant capacity; group-customer supply | low; profit sits in parent's generation | Low | Parent's merchant exposure | n/a (subsidiary) |
| **4. Independent short-term/exchange-access trader** | Powerpulse, Manikaran, APPCPL, Kreate, Instinct | Volume on exchanges for discoms/C&I; sub-1 paisa margins; RECs | 0.5–1.5 p [E; CERC wtd 1.3–1.9 p] | Low, but needs margin money/LCs | Thin margins, client credit | unknown |
| **5. RE intermediary procurer** | SECI, NTPC, NHPC, SJVN | 25-yr back-to-back PPA/PSA with ~7 p margin; payment-security fund | ~7 p [K] | Low (payment security fund) | PSA signing delays (44.8 GW unsigned [V-sib]) | regulated |
| **6. Storage/aggregator trader (emerging)** | PTC (BESS EoI 500 MW/2,000 MWh), RE platforms | Buy cheap solar/off-peak, store, sell evening peak; or rent storage capacity | spread ₹3–8/kWh minus storage cost [E] | High if asset-owning, low if tolling | Price-cap, technology, cycle life | not yet observable |

**Key contrast for the writer:** the exchange earns ~4.3 p/unit on 141 BU with almost no balance sheet; PTC earns ~3.35 p/unit on 92.8 BU but has to carry ₹4,000–4,500 Cr of receivables (partly back-to-back) and litigation risk. That is why IEX trades at 20.8× earnings and PTC at 8.9×.

## 7. Regulation and policy

### 7.1 The legal architecture
- **Electricity Act 2003**: makes trading a distinct licensed activity (Sec 12, 14); CERC licenses inter-state traders (Sec 79(1)(e)) and may fix trading margins (Sec 79(1)(j)); Sec 66 tasks commissions with developing the market; non-discriminatory open access [V CERC Ch II intro; K].
- **CERC (Procedure, Terms and Conditions for grant of Trading Licence and other related matters) Regulations 2020** (notified Jan-2020; replaced the 2009 regulations) — sets licence categories, net-worth and liquidity requirements and the trading margin [V CERC].
- **CERC (Power Market) Regulations 2021** (Feb-2021; replaced PMR 2010) — governs exchanges, products, market coupling enabling clause, exchange shareholding limits [V CERC; V-sib].
- **CERC (Cross Border Trade of Electricity) Regulations 2019**; MoP **Guidelines for Import/Export (Cross Border) of Electricity 2018** (18-Dec-2018); CEA Designated Authority procedure 26-Feb-2021, modified 31-Jul-2023 to allow cross-border trade on RTM [V CERC Ch III]; **Aug-2024 amendment** allowing an exclusive exporter (Adani Godda) to sell in India if the importing country stops scheduling or delays payment, later followed by approval to connect Godda to the Indian grid [V-snip powerline/BS/thewire].
- **Deviation Settlement Mechanism Regulations 2022** (effective 5-Dec-2022); normal DSM rate = higher of DAM and RTM weighted ACP across exchanges, capped ₹10/kWh (order 9-Apr-2023; earlier ₹12 cap 26-Dec-2022) [V CERC].
- **Ancillary Services Regulations 2022** — TRAS on exchanges (28-Apr-2023) [V CERC].
- **GNA Regulations** (General Network Access) effective 1-Oct-2023 — reclassified bilateral short-term (T-GNA) and broke volume comparability [V CERC].
- **Electricity (Late Payment Surcharge and Related Matters) Rules 2022** (3-Jun-2022) — see §7.5.
- **Green Energy Open Access Rules 2022** (6-Jun-2022) — 100 kW threshold for green OA, 15-day approval, banking [K].
- CERC–SEBI accord (Supreme Court order 6-Oct-2021): CERC regulates physical-delivery contracts (TAM up to 3 months as NTSD contracts), SEBI regulates financial derivatives (electricity futures launched Jul-2025) [V CERC; V-sib].

### 7.2 Trading margin — the actual rules (verify against primer)
| Period | Rule | Source |
|---|---|---|
| Up to 2005 | Voluntary; traders charged ≤5 p; rose to ~10 p (Apr–Sep 2005) | [V CERC Ch II §6] |
| 26-Jan-2006 | **Fixed at 4 p/kWh** (CERC Fixation of Trading Margin Regulations 2006) | [V CERC] |
| 11-Jan-2010 | **7 p/kWh if sale price > ₹3/kWh; 4 p/kWh if ≤ ₹3/kWh** (TM Regulations 2010) | [V CERC] |
| 31-Jan-2020 → today | **Not less than 0 p and not exceeding 7 p/kWh** (Trading Licence Regulations 2020); applicability specified for (a) short-term, (b) [medium/long-term as agreed], (c) banking, (d) back-to-back, (e) cross-border; negative margins banned; **2 p cap for back-to-back contracts where the trader has no independent payment-security obligation** (draft had proposed 1 p); long-term margins as mutually agreed | [V CERC FY25 report + Mar-26 monthly report ("not less than 0 paise/kWh and up to 7 paise/kWh"); V-snip CERC order on 2 p] |
| Realised | Weighted average on inter-state bilateral trades: FY10 4.0 p; FY12 5.0 p; FY16 3.2 p; FY20 3.1 p; FY21 2.4 p; FY22 3.5 p; FY23 2.7 p; FY24 2.9 p; **FY25 1.9 p**; Mar-26 1.3 p | [V CERC Table 18; Mar-26 report] |
- No 2024–26 revision of the 0–7 p cap was found (§H). The Mar-2026 CERC monthly report still cites the 2020 regulations' 0–7 p band [V].
- The library's exchange fee cap (2 p/side; Dec-2025 reports of a possible cut to ~1.5 p, 1.25 p for TAM; no draft/order) [V-sib] is a separate rule for exchanges, not traders.

### 7.3 Licence categories and net worth
- CERC 2020 regulations define categories of inter-state trading licence by permitted annual volume, each with a minimum net worth and liquidity (current ratio ≥ 1, liquidity ratio ≥ 1) [K]. PTC's MD: "There is categorization of the license from Category 1 to Category 5 and for Category 5, even the net worth requirement is pretty low… The threshold for entering into the power trading business is really very low" [V Q1 transcript]. Exact ₹ thresholds per category not re-verified this session — FLAG (my recollection: Category I ≥ ₹50 Cr net worth for unlimited volume, Category V ≈ ₹1 Cr for ≤ 500 MU/yr [K, unverified]).
- **Shareholding cross-limits:** a trading member may not hold more than 5% in a power exchange (PMR 2021) — the reason PTC (22.5% of HPX) does not trade on HPX [V Q1+Q2 transcripts].

### 7.4 Exchange price caps and products
- **DAM and RTM cap ₹10/kWh** (CERC directed exchanges to cut the bidding ceiling from ₹20 to ₹10 w.e.f. 4-Apr-2023 [V-snip]; earlier ₹12 cap in 2022 [K]); **HP-DAM** approved 16-Feb-2023, trading from 10-Mar-2023, bid range ₹0–50 then **₹0–20 from 11-Apr-2023**; eligible sellers only imported-RLNG/naphtha gas, imported-coal plants and BESS [V CERC]. HP-TAM and HP-contingency approved on HPX (24-Jul-2023), PXIL (21-Sep-2023), IEX (16-Oct-2023) [V CERC]. Library: "₹10 cap binds on most evenings" in Sep–Oct 2026 [V-sib]; solar industry has lobbied for a higher cap [V-snip]. **No change to the ₹10/₹20 caps was found as of Nov-2026** [V-sib; V-snip]. One Reuters item cited a "₹12 retained" cap with an unclear date — treat as the 2022 regime [V-snip; FLAG].
- Product approvals: RTM (1-Jun-2020), GTAM (1-Aug-2020), G-DAM (IEX 27-Oct-2021; PXIL 20-Dec-2021), hydro GTAM (24-Feb-2022), longer-duration TAM up to 3 months (trading from Jun-2022) [V CERC]. Pending at IEX: Green RTM, peak contracts, longer TAM [V-sib].

### 7.5 Late Payment Surcharge Rules 2022 and discom dues
- LPS Rules notified 3-Jun-2022: all overdue amounts (incl. LPS) as on 3-Jun-2022 rescheduled into up to 48 EMIs; surcharge on new delays at base rate (SBI MCLR + 5%) escalating +0.5 pp per month of delay [V-sib power-gen]; defaulting discoms lose access to exchanges/short-term markets and face supply regulation [V-sib power-gen; K].
- Outcome: **legacy dues ₹1,39,947 Cr (3-Jun-2022) → ₹4,927 Cr (Jan-2026) → ₹4,109 Cr (10-Feb-2026) → ₹3,330 Cr (27-Mar-2026)**; 43 EMIs paid; current dues ₹13,594 Cr; total ₹16,894 Cr on PRAAPTI at 27-Mar-2026 [V-snip outlookbusiness/MoP Parliament reply]. A broader measure of total dues to suppliers incl. generators, transmission and trading companies was ₹25,287 Cr in Feb-2026 [V-snip].
- **Effect on traders:** surcharge income collapses as discoms pay on time. PTC net surcharge: H1 FY26 ₹80.26 Cr → H1 FY27 ₹28.96 Cr; Q1 FY27 just ₹3.06 Cr [V]. Net rebate also fell (H1 ₹52.11 → ₹46.15 Cr) as discoms claim prompt-payment rebates themselves [V]. PTC MD: "In previous years particularly with one particular customer which was a very big state, there was huge outstanding, and with great effort we were able to bring down that outstanding" [V Q2 transcript]. PTC's top debtor at 30-Jun-2026 was Punjab (~₹860 Cr) [V Q1 transcript].

### 7.6 Market coupling (the regulatory event of 2025–27) [V-sib exchanges; V-snip]
- PMR 2021 enabled coupling. **23-Jul-2025:** CERC ordered phased DAM coupling from January 2026, with the three exchanges and Grid-India operating it in rotation ("round robin"); RTM coupling "under review" [V-sib].
- **28-Aug-2025:** IEX appealed to APTEL; **13-Feb-2026:** APTEL disposed of it (IEX "not aggrieved" until regulations are framed; the Jan-2026 date was "aspirational") [V-sib; V-snip].
- **17-Apr-2026:** draft CERC (Power Market) (Second Amendment) Regulations 2026: **Grid-India sole Market Coupling Operator**; DAM, RTM and other segments from dates to be notified; Grid-India to frame a Power Market Coupling Procedure within six months of notification; comments deadline extended from 16-May to **5-Jun-2026** [V-sib; V-snip].
- **27-Jul / 3-Aug-2026:** Supreme Court declined to intervene "at this stage"; IEX may challenge final regulations once notified [V-sib].
- **Status 13-Nov-2026: final regulations not notified** (no evidence found) [V-snip]; one law-firm brief expects phased rollout "from Q3 FY27" [V-snip] — unconfirmed.
- **Impact on traders:** coupling creates one national clearing price and lets participants choose any exchange; competition shifts to fees and service. PTC MD (3-Nov-2026): "We expect a significant amount of trade to migrate from one dominant exchange to other exchanges… But that requires coupling to happen in the first place. We are still awaiting regulatory directives" [V Q2 transcript]. For PTC the effect is via its **22.5% HPX stake** (option value), not its trading margin. A broker estimate in the library has IEX's share falling from ~75% (FY28) to 60% (FY30) [V-sib].

### 7.7 Other policy items relevant to traders
- **Standard bidding documents bar traders from long-term thermal PPAs** ("traders cannot represent any generator"), so no new long-term trading PPAs are possible for conventional power [V Q1 transcript]. PTC: "Nothing is likely to expire in next three years" in its LT book [V Q1 transcript].
- **Contract-for-difference pilot** by SECI and the launch of **electricity futures** (Jul-2025) cited by PTC as market-deepening steps [V Q1 transcript; V-sib].
- **Coal and mineral exchanges:** Ministry of Coal requirement to route e-auction volume through coal exchanges (IEX's Indian Coal Exchange incorporated 1-Jun-2026; MCX's coal exchange) [V-sib]; mineral exchanges regulated by the Indian Bureau of Mines — PTC announced one (Oct/Nov-2026) [V Q2 transcript].
- **Storage push:** MoP BESS VGF and ISTS waivers; ~272 GWh of storage tendered [V-sib power-gen]; PTC expects storage to "moderate peak power price spikes" over 12–18 months [V Q2 transcript].
- **Proposed RTM gate-closure cut** from 75 to 50 minutes [V-sib].
- **Draft National Electricity Policy 2026** — per-capita targets; emphasis on competitive markets [V Q1 transcript].
- **Merchant-capacity mandate (wish, not policy):** PTC's MD would like a rule that new plants contract only 80% long-term with 20% merchant [V Q1 transcript] — no such policy exists.

---

## 8. History and cycles (narrative; full timeline in §G)

1. **1999–2008: State-created trader, then exchanges.** PTC incorporated 1999 by the GoI as a public-private initiative to buy surplus power and de-risk private generation; first trade 2001; Bhutan hydro from 2003–04; IPO 2004 [V PTC deck; K]. The Electricity Act 2003 made trading a licensed activity; traders began 2004. Margins drifted to ~10 p in 2005, prompting the 4 p cap (2006) and the 2010 7 p/4 p rule [V CERC]. IEX (co-promoted by PTC and MCX [K]) opened June 2008, PXIL October 2008 [V CERC].
2. **2008–2014: The trader's golden age and PTC's diversification.** PTC raised ₹1,700 Cr via two QIP tranches (2008–09) [V deck], created PFS and PTC Energy (2008) [V deck], listed PFS (Mar-2011 at ₹28/share per an investor on the Q2 FY27 call [V transcript]). Traders held 30–40% of short-term volume [V CERC]. Bilateral prices high (shortage years).
3. **2014–2020: Surplus, falling prices, exchange takeover.** Thermal overcapacity and low PLFs; DAM prices fell to ₹3–4; exchanges' share rose; the trader margin realised fell to ~3 p [V CERC]. PTC entered medium-term trading (2017), RE trading (2017) [V deck]. PTC/PFS sold the IEX stake (2017, ₹132.54 Cr) [V-snip; attribution FLAG]. PFS stress (FY18 loss −₹100 Cr) [V screener].
4. **2020–2023: New products, COVID volatility, coal crisis, price caps.** RTM (Jun-2020), GTAM (Aug-2020), G-DAM (Oct-2021), the Trading Licence Regulations 2020 (0–7 p) and PMR 2021. The 2021–22 coal crisis pushed DAM to the ₹20 ceiling; CERC imposed ₹12 then ₹10 caps; HP-DAM (Mar-2023) for imported-fuel plants [V CERC; K]. HPX launched July 2022 (PTC co-promoter) [V CERC]. **Jan-2022: three PFS independent directors resign alleging governance lapses** [primer; K]; SEBI investigation follows. LPS Rules (Jun-2022) start clearing ₹1.4 lakh Cr of legacy dues.
5. **2023–2025: GNA reset, governance aftermath, PEL exit.** GNA (Oct-2023) breaks bilateral comparability. **SEBI order 12-Jun-2024** bars ex-CMD Rajib Kumar Mishra from director roles for six months with a ₹10 lakh penalty over PFS lapses; he ceases as PTC CMD and PFS chair that day; **SAT quashes the order 11-Dec-2024** ("allegations baseless"); PTC's board (13-Dec-2024) resolves not to re-induct him [V-snip deccanherald/psuwatch/theweek]. Dr Manoj Kumar Jhawar becomes CMD (13-May-2025 per postal ballot notice) [V-snip]. **PTC Energy (~288 MW wind) sold to ONGC Green** (FY25, ~₹925 Cr equity value) → ₹457.39 Cr gain at standalone level [V deck; primer].
6. **2025–2026: Coupling fight and the return of scarcity.** CERC's coupling order (Jul-2025); FY26 cool/wet year with prices down to ₹3.86; then West Asia war (Feb-2026), record peak (May-2026), price cap binding (Sep–Oct-2026). MoP directs NTPC as sole promoter (Jan-2026); postal ballot partly passes (Mar-2026). PTC pays ₹23 special dividend (Aug-2026); restarts PFS sale; launches mineral exchange plan and NLC JV.

**Cycle pattern:** trader margins move inversely with exchange liquidity and directly with discom stress (surcharge/rebate), not with power prices. Exchange volumes move with price (inversely above ~₹8) and with RE intermittency.

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 The PTC margin stack by segment (Q2 FY27) [V Q2 transcript; volumes E]
| Segment | Margin (p/kWh) | Approx. volume Q2 FY27 | Margin ₹ Cr |
|---|---|---|---|
| Short-term (bilateral + exchange) | **0.69** | ~21.1 BU (65% of 32.46) [V % ] | ~14.6 [E] |
| Medium-term | 3.17 | ~2.0–2.5 BU [E] | ~7 [E] |
| Long-term (back-to-back PPAs) | **7.98** | ~7.5–8.0 BU [E: Q1 5.67 BU + monsoon hydro] | ~62 [E] |
| Cross-border (Bhutan/Nepal + Bangladesh) | 6.98 | ~1.0–1.3 BU [E] | ~8 [E] |
| **Blended** | **2.89** | **32.46 BU** [V] | **93.88** [V] |
- The segment volumes are my reconciliation to the reported ₹93.88 Cr; management did not give Q2 segment volumes in the call. **Long-term back-to-back PPAs (mostly hydro) earn ~two-thirds of PTC's trading margin on ~25% of its volume** [E]. Short-term is ~65% of volume and ~15% of margin.
- Q1 FY27 segment volumes (actual) [V Q1 deck]: exchange 15,453 MU (Q1 FY26 12,784); ST bilateral 1,924 (1,131); MT 1,822 (688); LT 5,672 (6,364); cross-border imports 497 (1,657); Bangladesh 410 (414). Total 25,783 MU (23,042).

### 9.2 PTC operating KPIs (standalone) [V decks/transcripts]
| KPI | Q1 FY26 | Q2 FY26 | H1 FY26 | Q1 FY27 | Q2 FY27 | H1 FY27 | FY25 | FY26 |
|---|---|---|---|---|---|---|---|---|
| Volume (MU) | 23,042 | 26,178 | 49,220 | 25,783 | 32,463 | 58,246 | 82,751 | 92,802 |
| Trading margin (₹ Cr) | 77.61 | 96.40 | 174.01 | 86.31 | 93.88 | 180.19 | 279.19 | 310.52 |
| Margin p/kWh [E arithmetic] | 3.37 | 3.68 | 3.54 | 3.35 | 2.89 | 3.09 | 3.37 | 3.35 |
| Consultancy (₹ Cr) | 9.88 | 12.08 | 21.96 | 10.76 | 9.86 | 20.62 | ~50 [primer] | n/a |
| Net rebate (₹ Cr) | 23.68 | 28.43 | 52.11 | 15.99 | 30.16 | 46.15 | n/a | n/a |
| Total operational income (₹ Cr) | 111.17 | 136.91 | 248.08 | 113.06 | 133.90 | 246.96 | ~450 | ~450–453 |
| Net surcharge (₹ Cr) | 37.65 | 42.61 | 80.26 | 3.06 | 25.90 | 28.96 | n/a | n/a |
| PBT (₹ Cr) | 140.96 | 180.34 | 321.30 | 95.54 | 152.25 | 247.79 | 1,056 [screener] | 535 [screener] |
| PAT (₹ Cr) | 104.78 | 133.82 | 238.60 | 70.67 | 113.23 | 183.90 | 854.78 | 397.04 |
- Operational income = trading margin + consultancy + net rebate (checks exactly: Q1 FY26 77.61 + 9.88 + 23.68 = 111.17) [E check on V data].
- FY25 vs FY26 total operational income printed as "450.37 / 452.57" on the FY slide; the label order suggests FY25 ₹450.37 Cr and FY26 ₹452.57 Cr [V deck; E reading]; whalesbook reports "₹450 crore, flat" [V-snip].

### 9.3 Industry KPIs
- **Short-term share of generation** 9.6% (FY10) → 13.03% (FY25, incl. DSM) [V].
- **Exchange share of short-term** 10.9% → 60.3% (FY10 → FY25) [V]; ~56% of a ~302 BU short-term pool in FY26 (library basis) [V-sib].
- **Trader HHI** 0.1721 (FY24), 0.1760 (FY25), 0.1777 (Mar-26) [V].
- **Realised industry trading margin** 1.9 p (FY25), 1.3 p (Mar-26) [V].
- **Exchange fee yield** IEX ~4.4 p per unit both sides incl. other fees [E from V-sib].
- **DSM share** 39.2% (FY10) → 13.5% (FY25) — a market-maturity indicator [V].
- **Price spread bilateral vs DAM** FY25: trader RTC ₹7.01 vs IEX DAM ₹4.47 [V; V-sib].

### 9.4 Returns
- PTC standalone ROE ~8–9% (screener 8.3%; ROCE 13%) [V]; consolidated ROE 10.3% [V]. PTC MD: "I would not say that this is a very high yield kind of business. I would say the return on equity, return on capital employed are pretty moderate" [V Q1 transcript].
- IEX ROE 39.4%, ROCE 51.8% [V screener].
- PFS ROE (RoNW) 5.64% annualised Q2 FY27 (12.30% Q2 FY26); ROA 3.65% [V PFS deck].

---

## 10. Global lens
- **Europe:** power trading is dominated by utilities' trading desks and merchant traders (Statkraft, Uniper, RWE Supply & Trading, Vitol/Trafigura power desks) and by exchanges (EPEX SPOT, Nord Pool) with day-ahead **market coupling (SDAC)** run since 2014 with **nine NEMOs in rotation** [V-sib exchanges cites the Grid-India letter on Europe's rotation; K]. Exchange-traded share of consumption: >50% in Nordics/Germany day-ahead [K]. India's coupling design (single operator Grid-India) differs from Europe's multi-NEMO model [V-sib].
- **US:** ISOs/RTOs (PJM, ERCOT, CAISO) run centralised nodal markets; "traders" are financial/virtual participants; no regulated trading-margin cap [K].
- **Comparison:** India's regulated trader margin (0–7 p ≈ 0–0.07 ¢/kWh at ₹94.9/$ ≈ US$0.74/MWh max) is far below typical European wholesale trading spreads [K/E]; India is unusual in capping both trader margins and exchange fees and in having a single dominant exchange (IEX 98–99% of DAM). Valuation: IEX at ~21× trailing (₹10,378 Cr) vs EEX/Deutsche Börse-type multiples ~20–25× [K]; PTC at ~9× has no clean global analogue (closest: listed merchant/utility trading arms embedded in utilities).
- **Neighbourhood:** the BBIN cross-border market — Bhutan (hydro exporter, now with winter deficits), Nepal (wet-season exporter, sells on IEX), Bangladesh (importer from India incl. Adani Godda 1,600 MW) — is a South Asian version of regional coupling; India's 2018 guidelines restrict imports from countries without a power-sector agreement (aimed at Chinese-owned plants) [K].

---

## 11. Technology and disruption risks
1. **Exchanges and market coupling** (disintermediation of bilateral traders): already happened to the bilateral short-term pool (traders 40.5% → 11.0% of ST volume FY10 → FY25 [V]). Traders survive as exchange members/aggregators at <1 p.
2. **Battery storage** compresses the intraday spread (PTC: storage "should help moderate peak power price spikes and contain the extent of intra-day price volatility" [V Q2 transcript]) — lowers the value of peak contracts but creates a new "store and sell" trading model (PTC BESS EoI).
3. **Algorithmic/automated bidding and AI forecasting** for RE schedules and RTM bids — lowers the cost of exchange access and erodes the human-desk advantage [K/E].
4. **Electricity futures and CfDs** (Jul-2025 launch; SECI CfD pilot) — financial hedging can substitute for some physical medium-term bilateral contracts [V Q1 transcript; V-sib].
5. **Direct discom procurement portals** (DEEP e-bidding, now standard) reduce the trader's matching role [K].
6. **Smart meters/ToD tariffs** shift demand into solar hours, flattening the evening peak over time [V-sib power-transmission on smart meters].
7. **Risk to PTC specifically:** loss of cross-border franchise economics if Bhutan consumes more of its hydro domestically (already visible: "cross-border power from Bhutan has shown a significant dip due to higher domestic requirement in Bhutan" [V Q2 press release]) or if Nepal/Bangladesh trade shifts to IEX/NVVN.

---

## 12. What to watch (leading indicators and dated events)
| Indicator / event | Latest | Where | Why it matters |
|---|---|---|---|
| PTC quarterly volume & blended p/kWh | Q2 FY27 32.46 BU, 2.89 p | PTC deck/call (Q3 FY27 results ~early Feb-2027 [E]) | margin dilution from exchange mix |
| PTC net surcharge + rebate | H1 FY27 ₹29 Cr + ₹46 Cr | deck | discom liquidity proxy; earnings swing |
| PFS divestment milestones (EoI, bidders, RBI approval) | advisor appointed; "closer of this FY" | BSE filings | SOTP unlock (₹1,080 Cr at market; book 64.99% × ₹3,079 Cr ≈ ₹2,000 Cr [E]) |
| NTPC sole-promoter reclassification | NHPC exited 2-Mar-2026; screener still 16.22% | BSE shareholding | control, board, NVVN conflict |
| CERC market-coupling final notification | draft 17-Apr-2026; not notified | CERC | HPX value; IEX share |
| CERC exchange fee-cap change | reported Dec-2025; no draft | CERC | exchange economics |
| ₹10 DAM/RTM cap and HP-DAM | binding most evenings Sep–Oct 2026 | IEX monthly | unmet demand; traded value |
| IEX monthly volumes and prices | Oct-26 13,092 MU (+16.5%); DAM ₹6.66 | IEX release (~3rd of each month) | short-term market health |
| CERC monthly market-monitoring report | latest posted: Mar-2026 | cercind.gov.in | trader shares, margin, HHI |
| CERC FY26 annual short-term market report | not yet posted (FY25 posted 2025) | cercind.gov.in | FY26 trader shares and margins |
| Peak demand / energy growth | 270.8 GW (May-26); Oct +21.9% | MoP/Grid-India | scarcity → RTM growth |
| Storage commissioning (GWh) | <20 GWh installed | CEA/MoP | intraday spread compression |
| Bhutan winter exports/imports | 1,200 MW winter export contract | PTC | cross-border margin |
| Teesta-III (Teesta Urja, 1,200 MW) restart | cofferdam power expected ~Dec-2026, 40–50% initially | PTC call | LT hydro volume at ~8 p |
| NTPC REL 1,200 MW solar PPA (25 yrs) | expected FY29 | PTC call | new LT margin volume |
| Mineral exchange licence/launch | announced Oct/Nov-2026 | IBM/PTC filings | new business optionality |
| LPS legacy dues | ₹3,330 Cr (27-Mar-2026) | PRAAPTI/MoP | surcharge income near zero |
| West Asia / LNG prices | gas power ~₹30/unit RTC (Nov-2026 comment) | — | peak prices, HP-DAM |

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **Disintermediation by exchanges (the structural force).** Exchanges went from 10.9% to 60.3% of short-term volume (FY10–FY25) while traders fell from 40.5% to 11.0% [V CERC]. Traders survived by becoming exchange-access agents (PTC ~60% of volume on exchanges [V]) at sub-1-paisa margins (0.69 p [V]). Expect continued volume growth but falling blended p/kWh.
2. **The regulated fee ceiling (0–7 p) and competitive compression.** The cap is rarely binding; competition is. Industry realised margin fell to 1.9 p (FY25) and 1.3 p (Mar-26) [V CERC]. PTC's 3.35 p blended is propped by legacy long-term (7.98 p) and cross-border (6.98 p) books that cannot be replicated (traders barred from new LT thermal PPAs) [V].
3. **Market coupling and exchange competition.** Coupling would end IEX's 98–99% DAM dominance; regulations still in draft (Apr-2026), SC allowed CERC to proceed (Aug-2026) [V-sib]. For traders it lowers exchange-access costs; for PTC it is optionality on HPX (22.5%) [V].
4. **Scarcity, price caps and the evening peak.** Record demand (270.8 GW May-2026; 269 GW Sep-2026) + West Asia LNG shock + solar drop-off → DAM ₹6.66–7.30 with the ₹10 cap binding [V-sib; V-snip]. Raises traded value, IEX RTM volume (+23.7% Oct-26) and trader opportunities in peak/banking contracts, but caps clear demand and suppresses DAM buy volume.
5. **Discom finances and the LPS Rules.** Legacy dues ₹1.4 lakh Cr → ₹3,330 Cr [V-snip]. Good for credit risk, bad for traders' surcharge/rebate income (PTC net surcharge −64% in H1 FY27 [V]).
6. **Renewables + storage reshape what is traded.** RTM (54.9 BU FY26, +41%) and green products; storage (<20 GWh today, ~272 GWh tendered) will compress spreads but create "store-and-sell" trading [V; V-sib].
7. **Cross-border as the residual franchise.** India net exporter (3.2 BU FY25); Bhutan imports falling (9.3 BU FY21 → 4.5 BU FY25) and Bhutan now needs winter imports; Nepal two-way and on IEX [V CERC]. PTC's G2G mandate is a moat whose volume is shrinking.
8. **PTC-specific: ownership, governance and the holding-company discount.** NTPC sole promoter (Jan-2026 directive; articles amendments failed); PFS sale restarted; SEBI order on ex-CMD quashed (Dec-2024); ₹23 special dividend; cash ₹2,431 Cr ≈ 59% of m-cap [V; V-snip; E].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "1 paisa on 1 BU = ₹1 crore": decoding a ₹16,000-crore revenue line that keeps ₹310 crore
- Build the bridge: ₹16,256 Cr revenue → ₹310.5 Cr trading margin (3.35 p) → +consultancy, +rebate = ~₹450 Cr operational income → + surcharge + treasury → ₹535 Cr PBT → ₹397 Cr PAT (FY26 standalone) [V]. Show the segment margin ladder (0.69 / 3.17 / 6.98 / 7.98 p) and how the mix shift to exchanges (Q2 FY27 volume +24%, margin ₹ −2.6%) dilutes the blend. Contrast with IEX (₹616 Cr revenue, 84% margin, no receivables).

### B2. "The trader that became an exchange's best customer": how exchanges ate bilateral trading, and why traders survived
- CERC time series FY10–FY25 (traders 26.7 → 26.3 BU flat; exchanges 7.2 → 143.8 BU) [V]; trader HHI and top-10; Powerpulse's rise to #2 in Mar-2026 [V]; PTC's 60% exchange share [V]; GNA reclassification caveat. Then coupling: what it means for IEX, PXIL/HPX (TAM already competitive [V CERC]) and for traders.

### B3. "Hydropower diplomacy": PTC's cross-border franchise (Bhutan, Nepal, Bangladesh)
- History (Chukha 1986; PTC nominated 2003–04 [V deck; K]); CERC net flows FY14–FY25 [V]; IEX cross-border trades (Nepal sold 1,606 MU at ₹4.22 in FY25; bought 1,365 MU at ₹3.50; Bhutan bought 1,098 MU, sold 240 MU) [V CERC]; Mar-2026: neighbours bought 412 MU on IEX DAM [V]; PTC Q1 FY27 cross-border imports 497 MU vs 1,657 MU a year earlier [V]; Bhutan winter export deal (1,200 MW) [V]; Nepal 204 MW medium-term to 2028 [V]; Bangladesh ~410 MU/quarter, "regular flow of payments" [V]; Adani Godda rule change (Aug-2024) [V-snip].

### B4. "The holding company and the governance overhang": PFS, the special dividend and the NTPC takeover of the promoter role
- PFS: loan book ₹3,684 Cr (Sep-26) vs ~₹10,000+ Cr peak (FY19 borrowings ₹10,918 Cr [V screener]); GS3 3.43%, CRAR 70.99% [V]; PAT FY26 ₹319 Cr flattered by write-backs [V]; Q2 FY27 ₹51 Cr provision (Kundli Manesar exposure, Danu Wind written off, IBC) [V PFS transcript]. The 2022 ID resignations → SEBI order (Jun-2024) → SAT quash (Dec-2024) → board refuses reinstatement [V-snip]. MoP Jan-2026 directive; failed article amendments. SOTP and the ₹23 dividend.

### B5 (optional). "Paid to wait for the storage era": BESS, mineral exchange, NLC JV — PTC's search for a second engine
- BESS EoI 500 MW/2,000 MWh; NTPC REL 1,200 MW solar (FY29); NLC JV NPRL ("in the near-term 1 year, 2 year I think it will be unwise to expect a lot of business activity" [V Q2 transcript]); mineral exchange (IBM-regulated, MSTC/mjunction incumbents) [V]; electricity futures participation [V Q1 transcript].

## C. The REVENUE / PROFIT EQUATION

**Trader:** PAT ≈ [Σ_segments (Volume_s × margin_s)] + consultancy + net rebate + net surcharge + treasury yield × cash − opex − provisions (litigation/credit) − tax.
**Exchange:** PAT ≈ Volume × fee per side × 2 (+ REC/other fees) + treasury income − fixed cost − tax.

### C.1 Worked example — PTC standalone FY26 [V inputs; E arithmetic]
- Trading margin: 92.80 BU × 3.35 p = **₹310.5 Cr** (reported ₹310.52 Cr) [V].
- + Consultancy ~₹43 Cr [E: ~4 × ₹10–12 Cr] + net rebate ~₹97 Cr [E: residual to ₹452.6 Cr] = **operational income ~₹452.6 Cr** [V total].
- + Net surcharge ~₹110–130 Cr [E: H1 FY26 ₹80 Cr run-rate, lower in H2] + treasury income ~₹150–170 Cr [E: ~6.5–7% on ₹2,300–2,500 Cr of cash] → screener "other income" ₹362 Cr [V] (other income contains gross surcharge; gross surcharge paid to generators sits in finance cost ₹94 Cr [V screener; V Q2 transcript]).
- Screener reconciliation: standalone operating profit ₹270 Cr [V] (= revenue − cost of power − employee/other opex; the ~₹180 Cr gap to operational income ₹452.6 Cr is opex of roughly ₹55–65 Cr plus accounting differences in how rebate/consultancy are netted — not reconcilable from screener alone [E; FLAG]) + other income ₹362 Cr − finance cost ₹94 Cr − depreciation ₹3 Cr = **PBT ₹535 Cr** [V] → tax 26% → **PAT ₹397 Cr** [V]. Writer: present the bridge as company-defined operational income (~₹453 Cr) + net surcharge + treasury − opex − provisions ≈ PBT ₹535 Cr, and do not try to tie every screener line.
- **Sensitivity [E]:** ±1 BU of volume at 3 p = ±₹3 Cr PBT; ±0.1 p on 92.8 BU = ±₹9.3 Cr; loss of ₹2,000 Cr of cash at 7% = −₹140 Cr pre-tax (≈ the special-dividend effect: ₹681 Cr × ~7% ≈ ₹48 Cr/yr of treasury income forgone [E]).

### C.2 Worked example — one Q2 FY27 margin bridge vs Q2 FY26 [V + E]
- Volume +6.29 BU (+24%) mostly exchange/medium-term at 0.7–3.2 p → +₹6–8 Cr [E]; Bhutan cross-border volume down at ~7 p → −₹8–10 Cr [E]; net trading margin −₹2.52 Cr (96.40 → 93.88) [V]. Consultancy −₹2.22 Cr; rebate +₹1.73 Cr → operational income −₹3.01 Cr (136.91 → 133.90) [V]. Net surcharge −₹16.71 Cr (42.61 → 25.90) [V]; treasury lower after special dividend; establishment cost +~₹2 Cr [V] → PBT −₹28.1 Cr (180.34 → 152.25) [V].

### C.3 Worked example — IEX FY26 [V-sib]
- 141.1 BU × 2 p × 2 sides = ₹564 Cr at full fee cap; reported transaction fees ~₹580 Cr incl. RECs; total revenue ₹616 Cr; opex ₹96 Cr → OP ₹520 Cr (84%); + other income ₹151 Cr − depreciation ₹23 Cr − tax 24% → PAT ₹493 Cr [V-sib]. (Screener shows FY26 sales ₹608 Cr, PAT ₹474 Cr consolidated basis differences [V screener].)

### C.4 Worked example — one bilateral short-term unit vs one exchange unit for a discom [E illustrative]
- Bilateral RTC through a trader, Mar-2026: ₹5.39/kWh delivered at state periphery, trader margin ~1.3 p (industry average) [V CERC] → trader keeps 0.24% of the ticket.
- Same discom on IEX DAM: ACP ~₹3.9 (Mar-26 IEX DAM, figure partly garbled in extraction — FLAG) + 2 p exchange fee each side + trader/member fee (~0.5–1 p) + transmission charges/losses to state periphery → ~₹4.2–4.5 [E]. The exchange route wins on price in surplus hours; the bilateral route wins in RTC certainty and peak cover.

## D. Proposed 6-cell stat strip (₹ only)
| Cell | Figure | Source |
|---|---|---|
| Electricity traded short-term (incl. DSM), FY25 | **238 BU = 13.0% of generation** | [V CERC FY25] |
| Power-exchange volume, FY26 | **168.6 BU (+17%)**, IEX ~84% | [V-sib exchanges, CEA snippet] |
| PTC volume FY26 / H1 FY27 | **92.8 BU (+12%) / 58.2 BU (+18%)** | [V PTC decks] |
| PTC trading margin FY26 → Q2 FY27 | **3.35 p → 2.89 p per unit** (industry bilateral avg 1.9 p FY25) | [V PTC; V CERC] |
| PTC share of trader volume | **31.8% (FY25), #1; HHI 0.176** | [V CERC] |
| PTC m-cap vs standalone cash | **₹4,117 Cr vs ₹2,431 Cr cash (30-Sep-26)** | [V screener 13-Nov-26; V Q2 transcript] |
Alternates: "₹16,256 Cr revenue, ₹397 Cr PAT (FY26 standalone)"; "IEX DAM ₹6.66/kWh in Oct-2026 (+149%)"; "Legacy discom dues ₹1.40 lakh Cr → ₹3,330 Cr".

## E. Chart-ready datasets
1. **Short-term & DSM volume and % of generation, FY10–FY25** (BU; %): FY10 65.90 (9.6%); FY11 81.56 (9.6%); FY12 94.51 (10.2%); FY13 98.94 (10.2%); FY14 104.64 (10.2%); FY15 98.99 (8.9%); FY16 115.23 (9.8%); FY17 119.23 (9.6%); FY18 127.62 (9.8%); FY19 145.20 (10.6%); FY20 137.16 (9.9%); FY21 146.01 (10.6%); FY22 186.75 (12.5%); FY23 194.35 (12.0%); FY24 218.22 (12.5%); FY25 238.35 (13.03%) [V CERC Table 9].
2. **Traders' share of short-term & DSM, FY10–FY25** (%): 40.5, 34.0, 37.9, 36.5, 33.6, 34.9, 30.7, 28.1, 30.5, 32.6, 21.8, 18.3, 21.1, 17.4, 18.8, 11.01 [V CERC Table 10(a)].
3. **FY25 short-term mix** (%): power exchanges 60.3; direct bilateral 15.2; DSM 13.5; traders 11.0 [V CERC].
4. **FY25 exchange volume by segment** (BU): DAM 61.29; RTM 39.01; TAM 33.06; G-DAM 8.32; G-TAM 1.63; HP-TAM 0.44; HP-DAM 0.003; total 143.75 [V CERC Table 15(b)].
5. **Trader market shares FY25** (%): PTC 31.80; NVVN 17.30; Powerpulse 17.13; TPTCL 8.62; Manikaran 6.34; APPCPL 4.60; GMR 2.83; JSW 2.73; Instinct 1.01; Kreate 0.87; others 6.77 [V CERC]. **Mar-2026**: PTC 31.16; Powerpulse 21.19; NVVN 15.15; Manikaran 7.00; JSW 5.09; APPCPL 4.17; TPTCL 4.07; Greenko 2.92; Shree Cement 2.16; GMR 1.47; others 5.62 [V CERC].
6. **Industry weighted-average trading margin** (p/kWh): FY10 4.0; FY11 5.0; FY12 5.0; FY13 4.1; FY14 3.5; FY15 3.8; FY16 3.2; FY17 3.2; FY18 3.1; FY19 3.2; FY20 3.1; FY21 2.4; FY22 3.5; FY23 2.7; FY24 2.9; FY25 1.9; Mar-26 1.3 [V CERC] — overlay PTC blended FY25 3.37, FY26 3.35, Q1 FY27 3.35, Q2 FY27 2.89 [V].
7. **Market value of trader vs exchange segments** (₹ Cr): see §2.2 [V CERC Table 12].
8. **PTC volume and margin** (BU; p): FY25 82.75 / 3.37; FY26 92.80 / 3.35; Q1 FY26 23.04 / 3.37; Q2 FY26 26.18 / 3.68; Q1 FY27 25.78 / 3.35; Q2 FY27 32.46 / 2.89 [V; p arithmetic E].
9. **PTC Q1 FY27 vs Q1 FY26 volume mix** (MU): exchange 15,453 vs 12,784; LT 5,672 vs 6,364; ST bilateral 1,924 vs 1,131; MT 1,822 vs 688; cross-border import 497 vs 1,657; Bangladesh 410 vs 414 [V Q1 deck].
10. **PTC segment margins Q2 FY27** (p/kWh): ST 0.69; MT 3.17; CB 6.98; LT 7.98; blended 2.89 [V Q2 transcript].
11. **Cross-border net flows** (MU, + = import by India): Bhutan FY14 5,555 → FY21 9,318 → FY24 3,863 → FY25 4,466; Nepal FY14 −840 → FY22 −1,921 → FY23 −158 → FY25 +497; Bangladesh FY14 −1,448 → FY23 −8,622 → FY25 −8,118; India net FY14 +3,267 → FY25 −3,164 [V CERC Table 35].
12. **IEX DAM price** (₹/kWh): FY23 5.94; FY25 4.47; FY26 3.86; Q2 FY27 5.70; Sep-26 7.30; Oct-26 6.66 [V-sib; V-snip].
13. **PTC net surcharge and net rebate by quarter** (₹ Cr): surcharge Q1 FY26 37.65, Q2 FY26 42.61, Q1 FY27 3.06, Q2 FY27 25.90; rebate 23.68, 28.43, 15.99, 30.16 [V].
14. **Legacy discom dues under LPS** (₹ Cr): 3-Jun-2022 1,39,947; Jan-2026 4,927; 10-Feb-2026 4,109; 27-Mar-2026 3,330 [V-snip].
15. **PFS loan assets and PAT** (₹ Cr): FY26 loan assets 3,292, Q1 FY27 2,946, Q2 FY27 3,684; PAT FY22 130, FY23 176, FY24 161, FY25 217, FY26 319, H1 FY27 84 [V PFS deck; V screener].
16. **Peak demand met** (GW): FY22 203; FY23 216; FY24 243; FY25 250; FY26 245; FY27 YTD record 270.8 [V-sib].

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]
| KPI | Definition | Good | Average | Weak | PTC (latest) |
|---|---|---|---|---|---|
| Trading volume growth | YoY BU | >15% | 5–15% | <5% | +24% Q2 FY27 [V] |
| Blended trading margin | Σ margin ₹ / BU (p/kWh) | >3.5 p | 2–3.5 p | <2 p | 2.89 p Q2 FY27 [V] |
| Short-term margin | ST margin p/kWh | >1.5 p | 0.7–1.5 p | <0.7 p | 0.69 p [V] |
| Industry wtd bilateral margin (CERC) | p/kWh | >3 p | 2–3 p | <2 p | 1.9 p FY25 / 1.3 p Mar-26 [V] |
| Market share (trader basis) | % of trader volume, CERC | >25% | 10–25% | <10% | 31.2–31.8% [V] |
| Exchange-traded share of own volume | % | — (lower = more margin) | 40–60% | >70% (margin dilution) | ~60% [V] |
| Operational income per BU | (TM + consultancy + rebate) ₹ Cr / BU | >₹5 Cr | ₹4–5 Cr | <₹4 Cr | ₹4.1 Cr H1 FY27 (246.96/58.2) [E] |
| Receivable days (gross) | debtors/revenue × 365 | <45 | 45–90 | >90 | 44 (company, FY26) [V-snip]; 98 (screener, FY26) [V] |
| Net surcharge as % of PBT | | <10% (healthy discoms) | 10–25% | >25% (dependence on defaults) | 12% H1 FY27 (28.96/247.79) [E]; 25% H1 FY26 |
| Cash as % of m-cap | standalone cash / m-cap | — | — | — | 59% (2,431/4,117) [E] |
| Payout ratio (ex specials) | DPS/EPS | >60% | 40–60% | <40% | 42% cons / 63% SA FY26 [V] |
| ROE (standalone) | | >15% | 10–15% | <10% | 8.3% [V] |
| Exchange: fee yield | revenue / BU | ≥4 p | 3–4 p | <3 p | IEX ~4.4 p [E] |
| Exchange: DAM share | % of DAM | >90% | 50–90% | <50% | IEX 98–99% [V-sib] |
| NBFC (PFS) GS3 / CRAR / RoNW | | <2% / >20% / >12% | 2–5% / 15–20% / 8–12% | >5% / <15% / <8% | 3.43% (H1) / 70.99% / 5.64% [V] |

## G. Timeline (year: event)
- **1999:** PTC (Power Trading Corporation of India) incorporated by GoI as a PPP to develop a power market [V deck].
- **2001:** First electricity trade in India by PTC [V deck].
- **2003:** Electricity Act 2003 makes trading a licensed activity; PTC among the first licensees [V deck; V CERC].
- **2003–04:** PTC begins importing Bhutan hydropower [V deck].
- **2004:** PTC IPO and listing (NSE/BSE) [V deck].
- **26-Jan-2006:** CERC fixes trading margin at 4 p/kWh [V CERC].
- **2006:** PTC begins Nepal cross-border business [V deck, "Cross Border business 2006"].
- **Jun-2008 / Oct-2008:** IEX and PXIL start operations [V CERC].
- **2008:** PTC creates PFS and PTC Energy (PEL); QIPs of ₹1,700 Cr (2008–09) [V deck].
- **11-Jan-2010:** Trading Margin Regulations 2010 (7 p if > ₹3; 4 p if ≤ ₹3) [V CERC].
- **Mar-2011:** PFS lists (₹28 issue price per investor remark) [V transcript; deck says 2011].
- **2012:** PTC starts tolling; adds Bangladesh as a client (exports from 2013) [V deck; V CERC].
- **2017:** PTC launches medium-term and RE trading [V deck]; IEX stake sold (₹132.54 Cr) [V-snip].
- **31-Jan-2020:** Trading Licence Regulations 2020: margin 0–7 p [V CERC].
- **Jun-2020 / Aug-2020:** RTM and GTAM launched [V CERC].
- **Feb-2021:** CERC (Power Market) Regulations 2021 [V CERC].
- **Oct-2021:** G-DAM launched; SC settles CERC–SEBI jurisdiction (6-Oct-2021) [V CERC].
- **Jan-2022:** Three PFS independent directors resign alleging governance lapses [primer; K].
- **3-Jun-2022:** Late Payment Surcharge Rules; legacy dues ₹1,39,947 Cr [V-snip].
- **Jul-2022:** HPX (PTC co-promoter) starts operations [V CERC].
- **10-Mar-2023:** HP-DAM trading begins; ₹10 cap on DAM/RTM from 4-Apr-2023; HP-DAM band ₹0–20 from 11-Apr-2023 [V CERC; V-snip].
- **1-Oct-2023:** GNA Regulations effective [V CERC].
- **12-Jun-2024:** SEBI order against ex-CMD Rajib Kumar Mishra (6-month bar, ₹10 lakh); he ceases as PTC CMD/PFS chair [V-snip].
- **Aug-2024:** Cross-border guidelines amended (Adani Godda can sell in India) [V-snip].
- **11-Dec-2024:** SAT quashes SEBI order; 13-Dec PTC board refuses reinstatement [V-snip].
- **FY25:** PTC Energy wind portfolio sold to ONGC Green; ₹457.39 Cr gain; record volume 82.75 BU [V deck; primer].
- **13-May-2025:** Dr Manoj Kumar Jhawar appointed CMD [V-snip].
- **23-Jul-2025:** CERC orders DAM market coupling (target Jan-2026) [V-sib].
- **16-Jan-2026:** MoP OM: NTPC to be sole promoter of PTC; CMD split [V-snip].
- **13-Feb-2026:** APTEL disposes IEX coupling appeal [V-sib].
- **28-Feb-2026:** West Asia war; LNG shock [V-sib].
- **2-Mar-2026 / 20-Mar-2026:** NHPC exits as promoter; postal ballot results (articles amendments fail) [V-snip].
- **17-Apr-2026:** CERC draft PMR (Second Amendment) — Grid-India sole MCO [V-sib].
- **19-May-2026:** PTC board reaffirms PFS divestment; pause lifted [V-snip].
- **21-May-2026:** All-time peak demand 270.8 GW [V-sib].
- **Aug-2026:** PTC Q1 FY27; ₹23 special dividend; PFS transaction advisor appointed [V transcript].
- **3-Aug-2026:** SC declines to stay coupling process [V-sib].
- **10-Sep-2026:** September record peak 269.06 GW [V-snip].
- **2-Nov-2026:** PTC Q2 FY27: volume 32.46 BU (+24%), margin 2.89 p, SA PAT ₹113 Cr; mineral exchange plan [V].

## H. Figures I could not source well (and conflicts)
1. **FY26 CERC annual short-term market report** (trader shares FY26, FY26 weighted-average trading margin, FY26 short-term volumes on CERC basis) — not yet published on cercind.gov.in; only Jan–Mar-2026 monthly reports listed. Used FY25 annual + Mar-2026 monthly instead.
2. **FY26 gross generation** — ~1,840 BU is a sibling estimate [V-sib], not CEA's final number.
3. **PTC trading volumes FY22–FY24 and segment mix by year** — only FY24 (74.84 BU, primer), FY25 (82.75 BU) and FY26 (92.80 BU) verified; FY22/FY23 volumes (≈ 78–80 BU [K]) unverified. Annual segment mix (LT/MT/ST/exchange/cross-border) for FY25/FY26 not fetched (would be in the Q4 FY26 deck, PPT link on screener `9ca78f46-…` / `7eb4830c-…` not downloaded).
4. **PTC Q2 FY27 segment volumes** — not disclosed in the call; my §9.1 split is reconciled [E].
5. **FY25 vs FY26 operational income** — slide prints 450.37 / 452.57 without unambiguous labels; FY25 primer figure ₹718 Cr conflicts with the company's ~₹450 Cr (primer may have included surcharge or used a different definition) — FLAG.
6. **NVVN, TPTCL, Manikaran, Powerpulse, GMR, JSW Power Trading financials** (revenue, PAT) — not found; only CERC shares. NVVN Q1 FY25 11.5 BU [V-snip] only.
7. **Powerpulse Trading Solutions ownership** — not verified (it rose to #2 in Mar-2026 with 21.19%).
8. **PXIL financials** — not fetched. HPX revenue from PTC call only.
9. **Licence category net-worth thresholds** (Cat I–V) — not re-verified; [K] recollection only.
10. **Exact provisions of the 2020 trading-margin regulation for back-to-back (2 p) and the absence of any 2024–26 amendment** — from a search snippet, not the gazette text.
11. **Which articles (113/129/133) failed in the Mar-2026 postal ballot and why** — not verified; the status of PFC and POWERGRID reclassification also unverified.
12. **PFS transaction advisor identity** — transcript says "SBI case" (likely SBICAPS) — FLAG.
13. **Status of Pawan Singh's SAT appeal (No. 401 of 2024) and any SEBI appeal of the SAT order to the Supreme Court** — not found.
14. **IEX stake sale attribution (PTC vs PFS) and the ₹132.54 Cr figure** — conflicting snippets.
15. **Mar-2026 IEX DAM average price** — CERC figure-6 values extracted out of order (3.88 likely IEX DAM; 9.59 PXIL DAM) — FLAG.
16. **FY26 recurring dividend per share** — ~₹8.6 derived from screener payout; actual interim/final split not fetched.
17. **Adani Enterprises' trading volume** — absent from CERC tables; library shows AESL retail supply only.
18. **Cross-border FY26 net flows** (Bhutan, Nepal, Bangladesh) — FY25 latest verified.
19. **West Asia effect on gas-based power generation (BU) and HP-DAM volumes in 2026** — only the PTC MD's "₹30/unit" remark and the Mar-26 HP-DAM sell-bid overhang.
20. **Short-term share conflict:** 13.03% (CERC FY25, gross gen incl. RE, incl. DSM) vs 17.7% (library FY26, "of electricity transacted") vs 17.71% (CERC Mar-26, excl. RE/captive). Not reconcilable without a common denominator — writer must pick one and label it.


---

# PART 2 — COMPANY FACT PACK (1 member + subsidiary + reference peers)

Screener pages pulled 13-Nov-2026 (PTC price ₹139; 52-week ₹230/131). Company filings from BSE (press release 2-Nov-2026; investor presentations Q1 and Q2 FY27; call transcripts Q1 and Q2 FY27; PFS Q2 FY27 press release, deck and transcript).

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 13-Nov-26)

| Company | NSE | Year | Revenue | Growth % | Op. profit (screener) | OPM % | PAT | ROCE % | ROE % | Net debt (cash) | M-cap | P/E | P/B | EV/EBITDA | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **PTC India (consolidated)** | PTC | FY26 | 16,771 | +7.0 | 892 | 5.3 (n.m.: pass-through) | 717 | 13.4 | 10.3 | Group borrowings 1,421 (Sep-26, ~all PFS); PTC standalone cash 2,431 → net cash ~1,000 on a group basis [E] | 4,117 | 8.87 (on attributable TTM ~₹464 Cr [E]) | 0.77 (BV 182) | n.m. (PFS is a lender) | Volume 92.80 BU FY26 | Blended margin 3.35 p FY26; 2.89 p Q2 FY27 | Trader share 31.8% FY25 |
| **PTC India (standalone)** | PTC | FY26 | 16,256 | +8.0 | 270 | 1.7 (n.m.) | 397 | 13 | 8.3 | Net cash 2,431 (30-Sep-26, company) [V]; borrowings ₹1 Cr | 4,117 | 12.0 | 1.01 (BV 138) | ~7× TTM OP [E: (4,117−2,431)/236] | Operational income ~453 | Consultancy ~43 [E] | Net surcharge H1 FY27 29 |
| PFS (subsidiary, ref; lender) | PFS | FY26 | 518 (total income) | −19 | NII 246 | NIM 4.49% | 319 | 11.8 | 11.0 | Borrowings 1,768 (Mar-26) | 1,662 | 9.19 | 0.54 (BV 48) | n.a. (lender) | Loan assets 3,684 (Sep-26) | GS3 3.43% (H1 FY27) | CRAR 70.99% |
| IEX (reference) | IEX | FY26 | 608 (screener) / 616 (company) | +14 | 514 | 84 | 474 (screener) / 493 (company) | 51.8 | 39.4 | Net cash ~2,160 (investments 2,170, borrowings 9; Sep-26) [E] | 10,378 | 20.8 | 7.4 (BV 15.6) | ~15.9× FY26 [E: (10,378−2,160)/514] | Electricity volume 141.1 BU FY26 | DAM share 98–99% | Fee 2 p/side |

Notes: PTC's OPM is a meaningless ratio of margin to pass-through revenue (trap 1); show it as "n.m." in any chart. Consolidated P/E on screener uses profit attributable to owners (PTC owns 64.99% of PFS) [E inference: 4,117 / 8.87 ≈ ₹464 Cr vs total TTM PAT ₹524 Cr].

---

## 2.1 PTC India Ltd (PTC · 532524) — India's largest power trader; G2G cross-border trader; 64.99% of PFS; 22.5% of HPX

### (a) Identity and status
- Formerly Power Trading Corporation of India; CIN L40105DL1999PLC099328; registered office 2nd Floor, NBCC Tower, 15 Bhikaji Cama Place, New Delhi [V filings].
- Management (Nov-2026): Dr Manoj Kumar Jhawar (MD & CEO); Rajiv Malhotra (ED & Chief Risk Officer; also MD of PFS per Q2 call); Pankaj Goel (ED & CFO); Bikram Singh (ED Marketing); H. L. Chaudhary (EVP Commercial & Operations); Rajiv Maheshwari (CS); Anand Kumar (VP IR) [V transcripts]. (Writer: management names are public filings; use designations rather than names where possible.)
- Listed; no merger/demerger; promoter restructuring in progress (see header item 1).

### (b) Standardised financials — consolidated (screener 13-Nov-26) [V]
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM (Sep-26) |
|---|---|---|---|---|---|---|
| Revenue | 16,856 | 15,971 | 16,763 | 15,679 | 16,771 | 17,889 |
| Growth % | −8 | −5 | +5 | −6 | +7 | +13 |
| Operating profit | 1,580 | 1,355 | 1,070 | 869 | 892 | 612 |
| Other income | 23 | 32 | 75 | 1,029 | 364 | 345 |
| Interest | 757 | 605 | 431 | 650 | 320 | 286 |
| Depreciation | 101 | 102 | 10 | 9 | 10 | 10 |
| PBT | 745 | 680 | 703 | 1,239 | 926 | 661 |
| Tax % | 26 | 25 | 24 | 21 | 22 | — |
| PAT | 552 | 507 | 533 | 976 | 717 | 524 |
| EPS (₹) | 17.10 | 15.05 | 16.11 | 30.41 | 20.46 | 15.57 |
| Dividend payout % | 46 | 52 | 48 | 38 | 42 | — |
- Depreciation fell from ~₹100 Cr to ~₹10 Cr in FY24 because PTC Energy (wind, ~₹1,600 Cr of fixed assets) was classified as held for sale and then sold (fixed assets ₹1,617 Cr Mar-23 → ₹43 Cr Mar-24) [V screener; E interpretation].
- Consolidated operating profit and interest are dominated by PFS (lender: its interest income is "revenue", its cost of funds is "interest").
- Balance sheet (consolidated, ₹ Cr): equity capital 296 throughout; reserves 4,427 (FY22) → 4,846 (FY24) → 5,509 (FY25) → 5,685 (FY26) → **5,083 (Sep-26, after ₹23 special dividend)**; borrowings 9,771 → 6,546 → 4,327 → 2,962 → 1,769 → **1,421**; investments 768 → 326 → 284 → 377 → 941 → 758; total assets 19,882 → 16,630 → 15,123 → 12,916 → 12,631 → 11,909 [V].
- Cash flow (consolidated): CFO FY22 3,049; FY23 3,575; FY24 2,451; FY25 1,864; FY26 2,817 (mostly PFS loan book run-off) [V].
- Ratios: debtor days (screener) 156 (FY22) → 130 → 125 → 111 → **95 (FY26)**; working-capital days 25 → 24 → 52 → 37 → 20 [V].

### (c) Standardised financials — standalone (the trading company) [V screener; V filings]
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM |
|---|---|---|---|---|---|---|
| Revenue | 15,631 | 14,887 | 16,007 | 15,050 | 16,256 | 17,434 |
| Operating profit (screener) | 612 | 447 | 456 | 271 | 270 | 236 |
| Other income | 6 | 72 | 52 | 1,116 | 362 | 338 |
| Interest | 43 | 34 | 20 | 328 | 94 | 110 |
| PBT | 571 | 481 | 484 | 1,056 | 535 | 461 |
| PAT | 425 | 370 | 369 | 855 | 397 | 342 |
| EPS (₹) | 14.35 | 12.49 | 12.47 | 28.88 | 13.41 | 11.57 |
| Payout % | 54 | 62 | 63 | 41 | 63 | — |
| Volume (BU) | ~78–80 [K, unverified] | ~78–80 [K, unverified] | 74.84 [primer] | 82.75 [V] | 92.80 [V] | ~101.6 [E: FY26 + H1 delta] |
| Trading margin (₹ Cr) | n/a | n/a | n/a | 279.19 [V] | 310.52 [V] | ~316.7 [E] |
| p/kWh | n/a | n/a | n/a | 3.37 | 3.35 | ~3.12 [E] |
- FY25 PAT includes ₹457.39 Cr PEL divestment gain [V deck]; FY25 interest ₹328 Cr includes back-to-back surcharge expense (e.g. Q2 FY25 ₹177 Cr) [V screener; V Q2 transcript explanation].
- Standalone balance sheet: reserves 3,619 (FY22) → 3,852 (FY24) → 4,471 (FY25) → 4,434 (FY26) → **3,774 (Sep-26)**; borrowings 1,232 → 202 → 402 → 101 → 1 → 1; investments 1,778 → 1,647 → 916 → 861 → 861 → 861 (includes PFS at cost and HPX) [V]. The ₹660 Cr fall in reserves in H1 FY27 despite ₹184 Cr PAT implies ~₹844 Cr of distributions ≈ ₹23 special + ~₹5.5/share FY26 final [E].
- Company-reported: net cash ₹2,451 Cr (30-Jun-2026, before special dividend payout) and "cash on hand" ₹2,431 Cr (30-Sep-2026) [V transcripts] — the second figure appears to be after the special dividend, implying the June figure excluded the dividend liability or that strong Q2 collections offset it; FLAG for the writer to describe as "about ₹2,400 Cr".
- Debtors ₹4,469 Cr (30-Jun-2026), of which back-to-back (change-in-law, compensation bills payable to generators only when collected) form a large part; PTC's own exposure "not more than 60 days" [V Q1 transcript]. Gross debtor days 44 (FY26) vs 51 (FY25) on the company's basis; net working capital ₹848 Cr [V-snip whalesbook]. Screener's 98 debtor days (standalone FY26) uses year-end gross debtors / revenue [V].

### (d) Quarterly — standalone [V screener; V decks]
| ₹ Cr | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 | Q2 FY27 |
|---|---|---|---|---|---|
| Revenue | 5,327 | 3,284 | 3,778 | 4,670 | 5,702 |
| Volume (MU) | 26,178 | ~19,980 [E] | ~23,600 [V-snip] | 25,783 | 32,463 |
| Trading margin | 96.40 | n/a | n/a | 86.31 | 93.88 |
| Operational income | 136.91 | n/a | n/a | 113.06 | 133.90 |
| Other income (screener) | 126 | 67 | 75 | 54 | 143 |
| Interest (screener) | 43 | 6 | 9 | 13 | 83 |
| PBT | 180 | 111 | 102 | 96 | 152 |
| PAT | 134 (133.82) | 83 | 76 (75.74) | 71 (70.67) | 113 (113.23) |
| EPS (₹) | 4.52 | 2.79 | 2.56 | 2.39 | 3.83 |
- Q2 FY27 other income ₹143 Cr and interest ₹83 Cr both include gross surcharge earned and paid back-to-back; working-capital interest only ~₹7 Cr in the quarter [V Q2 transcript].

### (e) Quarterly — consolidated [V screener; V transcripts]
| ₹ Cr | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 | Q2 FY27 |
|---|---|---|---|---|---|
| Revenue | 5,459 | 3,405 | 3,898 | 4,774 | 5,812 |
| Operating profit | 275 | 173 | 145 | 151 | 143 |
| Other income | 127 | 68 | 75 | 55 | 148 |
| Interest | 101 | 64 | 53 | 52 | 117 |
| PBT | 298 | 175 | 164 | 151 | 171 (171.10) |
| PAT | 222 | 131 | 121 | 112 | 159 (159.10) |
| EPS (₹) | 6.46 | 3.85 | 3.56 | 3.31 | 4.85 |
- Drivers: PFS swung from impairment **reversals** (₹82 Cr Q1 FY26; ₹57 Cr Q2 FY26) to a **₹51 Cr provision** in Q2 FY27 (≈₹40 Cr PAT hit) [V transcripts]. H1 FY27 consolidated PBT ₹322 Cr (−45%), PAT ₹271 Cr (−42%), EPS ₹8.16 (₹13.05) [V].

### (f) Native KPIs (latest)
- **Volume:** FY26 92.80 BU (+12%); Q1 FY27 25.78 BU (+12%); Q2 FY27 32.46 BU (+24%); H1 FY27 58.25 BU (+18%) vs India generation +10.6% [V].
- **Mix:** H1 FY27 ~60% exchange products; Q2 FY27 short-term 65% of volume, balance medium- and long-term [V]. FY26 short-term 56% of business [V-snip].
- **Margins:** blended 3.37 p (FY25), 3.35 p (FY26), 3.35 p (Q1 FY27), 2.89 p (Q2 FY27); Q2 FY27 by segment ST 0.69 / MT 3.17 / CB 6.98 / LT 7.98 p [V].
- **Rebate/surcharge:** net rebate Q2 FY27 ₹30.16 Cr (₹28.43 Cr); net surcharge ₹25.90 Cr (₹42.61 Cr) [V].
- **Consultancy income:** Q2 FY27 ₹9.86 Cr (₹12.08 Cr); H1 ₹20.62 Cr (₹21.96 Cr) [V]; mandates include the Renewable Energy Accelerator Programme for PM Surya Ghar: Muft Bijli Yojana [V Q2 deck].
- **Portfolio:** >7,500 MW of operating long-term and medium-term contracts; hydro 46% of PPA portfolio; renewables incl. hydro 58% [V deck]. Approx. MW by fuel from deck chart: hydro ~3,502, thermal ~3,065, wind ~950, gas ~50 (labels partly garbled — FLAG) [V deck, E reading]. >800 clients; "almost all utilities" are short-term clients [V deck].
- **New contracts (FY27):** 1,200 MW solar PPA with NTPC REL (25 years, power ~FY29); BESS EoI 500 MW/2,000 MWh; Bhutan winter export up to 1,200 MW; Nepal 204 MW medium-term extended to 2028; MRPL 74 MW green sourcing; 3 lakh RECs traded in Q2; 13 new clients in Q2 [V Q2 deck].
- **Teesta-III (Teesta Urja, 1,200 MW, Sikkim):** PTC's long-term hydro source washed away in the Oct-2023 GLOF; reconstruction in two stages (cofferdam first); power from cofferdam expected ~Dec-2026 at 40–50% initially [V Q1 transcript; K for 2023 event].
- **Litigation:** ₹17.4 Cr provision (Q1 FY27, note 8) after an adjudicating authority ordered PTC to pay a generator's disputed claim before recovering from the utility [V Q1 transcript]; "write-off last quarter" recovery depends on judicial process [V Q2 transcript].

### (g) Ownership (Sep-2026) [V screener; V Q2 deck]
- Promoters 16.22% (NTPC, PGCIL, PFC, NHPC ~4.05% each [K]; NTPC-sole-promoter reclassification in progress; NHPC relinquished promoter status 2-Mar-2026 [V-snip]); FIIs 24.19% (Jun-26 28.88%; Mar-25 25.72%); DIIs 7.95%; "Government" 3.38%; public 48.26%; 2,84,184 shareholders (up from 2,54,640 in Jun-26) [V screener].
- Company deck (Q2 FY27): 4 PSUs 16.20%, FPIs 20.80%, insurance companies 4.14%, mutual funds 3.56% [V].
- FII holding fell 4.7 pp in Jul–Sep 2026 (28.88% → 24.19%) — coincides with the ex-special-dividend period; BlackRock sold 0.28% on 17-Apr-2026 [V screener; V-snip].
- Primer said "~16% promoter, ~84% free float" — correct on promoter, but the primer does not mention the 2026 restructuring.

### (h) Valuation and SOTP (13-Nov-2026) [E unless noted]
- M-cap ₹4,117 Cr; price ₹139; 29.6 crore shares [V screener; E shares].
- Standalone cash ~₹2,431 Cr (₹82/share) [V transcript].
- PFS stake: market 64.99% × ₹1,662 Cr = ₹1,080 Cr (₹36/share) [V screener]; book 64.99% × ₹3,079 Cr = ₹2,001 Cr (₹68/share) [V screener BS].
- HPX 22.5%: carrying value not disclosed (small; HPX H1 FY27 revenue ₹32 Cr) [V transcript].
- Residual implied value of trading + consultancy business: ₹4,117 − 2,431 − 1,080 ≈ **₹606 Cr (₹20/share)**; at PFS book, ≈ −₹315 Cr (i.e. market pays less than cash + PFS book) [E].
- Trading business earnings power [E]: operational income ~₹450 Cr + net surcharge (now ~₹60–80 Cr/yr) − opex ~₹50–60 Cr − provisions → ~₹420–470 Cr pre-tax → ~₹315–350 Cr post-tax before treasury income. At even 6× that is ₹1,900–2,100 Cr vs ~₹600 Cr implied — the SOTP gap. Bear rebuttal: margin dilution (2.89 p), surcharge normalising to near zero, governance discount, cash potentially redeployed into new ventures (mineral exchange, BESS, NLC JV).
- Recurring dividend: FY25 ₹11.70/share (₹5 interim + ₹6.70 final) [primer]; FY26 ≈ ₹8.6/share [E from payout]; plus ₹23 special (FY27) [V]. Recurring yield at ₹139 ≈ 6% [E]; screener's 16.5% includes the special.

### (i) Story bullets
1. **Scale leader in a commoditised, capped-margin business**: #1 trader for 20+ years (31.8% FY25; 31.2% Mar-26) [V CERC]; volume growing faster than generation (+24% vs ~+10%) [V] — but via exchange volumes at 0.69 p.
2. **The margin is in the legacy books**: long-term back-to-back hydro PPAs (7.98 p) and G2G cross-border (6.98 p) earn most of the trading margin; no new LT thermal PPAs possible for traders; Bhutan imports falling; Teesta-III restart and NTPC REL solar (FY29) are the only visible LT additions [V].
3. **Earnings quality is improving but falling**: surcharge income (a by-product of discom defaults) is vanishing under the LPS Rules; treasury income fell after the ₹681 Cr special dividend; standalone H1 FY27 PAT −23% [V].
4. **Holding-company discount and governance**: cash ≈ 59% of m-cap; PFS sale restarted but slow; SEBI–SAT episode closed for the ex-CMD (Dec-2024); government re-cutting the promoter structure toward NTPC (which owns rival NVVN) [V; V-snip].
5. **Options**: HPX (22.5%) if coupling happens; mineral exchange; BESS trading; NLC JV — all early and small.

### (j) Sources (PTC)
- Screener: https://www.screener.in/company/PTC/consolidated/ and https://www.screener.in/company/PTC/ (13-Nov-2026).
- Q2 FY27 press release (2-Nov-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0efb4f7b-88be-49e0-8955-5ad00b7f613a.pdf
- Q2 FY27 investor presentation: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=343230e5-7625-445d-aedf-f9af7315156f.pdf
- Q2 FY27 call transcript (3-Nov-2026, filed 6-Nov): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=450b3098-9297-4875-a788-f7e04b7080dd.pdf
- Q1 FY27 investor presentation: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dc9e44b1-e30b-453a-931f-361dbb5ec843.pdf
- Q1 FY27 call transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dbb9e004-ebd7-41cf-8969-13e9dc9d6bcd.pdf
- Annual Report FY26 (not read): https://www.bseindia.com/xml-data/corpfiling/AttachHis/08b477e2-8d69-418b-b67d-65adecc51f1a.pdf

---

## 2.2 PTC India Financial Services (PFS · 533344) — 64.99%-owned infrastructure NBFC (IFC); under divestment [subsidiary, reference]

### (a) Lender KPIs [V PFS Q2 FY27 press release + deck; V screener]
| Metric | Q2 FY26 | Q1 FY27 | Q2 FY27 | H1 FY26 | H1 FY27 | FY26 |
|---|---|---|---|---|---|---|
| Loan assets (₹ Cr) | 3,697 | 2,946 | **3,684** | 3,697 | 3,684 | 3,292 |
| Sanctions (₹ Cr) | 1,048 | — | **3,098** (8-yr high) | 1,255 | 3,098 | 3,448 |
| Disbursements (₹ Cr) | 326 | 117 | **1,595** (4-yr high) | 464 | 1,712 | 1,235 |
| Total income (₹ Cr) | 131.86 | 103.31 | 113.67 | 274.10 | 216.98 | 518.25 |
| NII (₹ Cr) | 62.42 | 48.71 | 54.28 | 128.60 | 102.99 | 246.06 |
| NIM (Stage 1+2, %) | 4.59 | 4.40 | 4.43 | 4.63 | 4.41 | 4.49 |
| PBT (₹ Cr) | 117.63 | 54.25 | 17.02 | 263.94 | 71.27 | 389.70 |
| Tax (₹ Cr) | 29.49 | 14.01 | (27.02) credit | 39.17 | (13.01) | 70.34 |
| PAT (₹ Cr) | 88.14 | 40.24 | 44.04 | 224.77 | 84.28 | 319.36 |
| EPS (₹) | 1.37 | 0.63 | 0.69 | 3.50 | 1.31 | 4.97 |
| Cost-to-income (%) | 18.04 | 19.89 | 13.90 | 16.27 | 16.59 | 16.84 |
| Debt/equity (×) | 0.76 | 0.49 | 0.45 | 0.76 | 0.45 | 0.57 |
| RoNW (annualised, %) | 12.30 | 5.19 | 5.64 | 15.68 | 5.40 | 10.95 |
| ROA (annualised, %) | 6.50 | 3.31 | 3.65 | 8.15 | 3.49 | 6.00 |
| CRAR (%) | 62.63 | 68.91 | **70.99** | 62.63 | 70.99 | 66.63 |
| Yield on earning portfolio (%) | 11.23 | — | 10.45 | — | — | — |
| Gross Stage III | ₹193 Cr | ₹190 Cr | **₹126 Cr** | 5.23% | **3.43%** | — |
| Net Stage III | — | ₹47 Cr | **₹105 Cr** | — | — | — |
- Gross stage III fell because the **Danu Wind Parks** account was technically written off (≈75% provided; recovery via IBC); remaining stage III = **Kundli Manesar (₹124 Cr, 15% provided)** and Varam Bio (₹2.10 Cr, 100% provided); a ₹51 Cr provision in Q2 FY27 [V PFS transcript]. Implied PCR on stage III ≈ 17% [E: (126−105)/126] — low; the writer should flag the Kundli Manesar exposure.
- Portfolio: renewables 45% (₹1,649.61 Cr); other segments sustainable infra (water, e-mobility ₹114 Cr; water/urban ₹44 Cr), transmission, roads, others (ports, manufacturing, mining) [V deck].
- Ratings: CRISIL A/Negative and ICRA A-/Stable (long-term); CRISIL A1 (short-term) [V deck].
- Shareholding (Sep-26): PTC India 64.99%; FIIs 1.56%; DIIs 5.07%; public 28.36% [V screener; deck].
- Market (13-Nov-26): m-cap ₹1,662 Cr; price ₹25.9 (52-wk ₹36.5/23.2); BV ₹48; **P/B 0.54**; P/E 9.19 [V screener].
- Multi-year (screener): revenue FY22 968 → FY23 797 → FY24 761 → FY25 638 → FY26 518; PAT 130 → 176 → 161 → 217 → 319; borrowings 7,121 → 5,122 → 3,926 → 2,861 → 1,768; FY18 loss −₹100 Cr; peak borrowings ₹10,918 Cr (FY19) [V]. **Loan book has shrunk by roughly two-thirds since FY19** [E]; PAT FY25–FY26 flattered by write-backs (FY26 "expenses" −₹106 Cr = net provision reversals) [V screener].
- Ten-year sales CAGR −8%; PFS listed 2011 at ₹28 (investor remark) and trades at ₹25.9 [V transcript; V screener].

### (b) Governance history and the sale process
- Jan-2022: three independent directors resigned alleging governance/compliance lapses (incl. a contested appointment and Companies Act violations) [primer; K]; SEBI investigation.
- SEBI final order 12-Jun-2024 against Rajib Kumar Mishra (then PTC CMD and PFS non-executive chairman) — six-month bar from director/KMP roles in listed companies and ₹10 lakh penalty; he ceased as PFS chair and PTC CMD on 12-Jun-2024; SAT stayed the order (Jun-2024, subject to 50% penalty deposit per one report) and **quashed it on 11-Dec-2024** ("all the allegations against the appellant are baseless"; he had served ~six months "for no fault of his own"); PTC's board resolved on 13-Dec-2024 not to re-induct him [V-snip deccanherald, psuwatch, theweek, devdiscourse, taxmann]. Status of other noticees' appeals (e.g. Pawan Singh, Appeal 401/2024) unknown [§H].
- RBI: PFS is an RBI-registered IFC; the 2022–23 period saw RBI scrutiny of governance (supervisory concerns) [K; not re-verified this session — FLAG]. Any sale needs RBI change-of-control approval [V Q1/Q2 transcripts].
- **Sale process:** earlier attempt in 2020 (IDFC Securities advisor; bids due 31-Jul-2020) did not conclude [V-snip business-standard]; restarted 2025–26; pause lifted (May-2026); transaction advisor appointed (Aug-2026); "nodal person for data sharing" at PFS [V PFS transcript]; MD PTC (3-Nov-2026): "When you really wish to disinvest… you also want to see that you are realizing good value… operational stability is very, very necessary"; would not sell at a price "not aligned to the book value" [V]. **No bidders named; no timeline.** Investors on both calls publicly suspect management reluctance; management denied it [V].

---

## 2.3 Reference: Indian Energy Exchange (IEX · 540750) — the platform that took the short-term market
- Screener 13-Nov-26: m-cap ₹10,378 Cr; price ₹116 (52-wk ₹160/99.5); P/E 20.8; BV ₹15.6; dividend yield 3.01%; ROCE 51.8%; ROE 39.4% [V].
- FY22–FY26 sales 426 / 401 / 449 / 535 / 608; OP 366 / 337 / 379 / 455 / 514; PAT 303 / 293 / 341 / 415 / 474 (screener consolidated) [V]. Library uses company revenue ₹616 Cr and PAT ₹493 Cr for FY26 [V-sib] — basis difference (consolidation/IGX); use the library's figures in prose for consistency with `exchanges.html`.
- Quarterly (screener): Q2 FY26 sales 152 / PAT 122; Q1 FY27 156 / 127; **Q2 FY27 165 / 133** (+9% PAT YoY) [V].
- Investments ₹2,170 Cr (Sep-26); borrowings ₹9 Cr [V].
- Volumes: FY26 141.1 BU (+17%); Q2 FY27 39,685 MU (+12.7%: RTM 16,490, DAM incl HP 14,855, TAM+DAC 5,477, green 2,863) [V-sib]; **Oct-2026 13,092 MU (+16.5%): RTM 5,670 (+23.7%), DAM 4,508 (−3.8%), TAM+DAC 2,175 (+138.8%), green 738 (−30%); REC 12.22 lakh (+97.5%)** [V-snip investywise].
- Shareholding Sep-26: FII 12.02%, DII 31.79% (no promoter) [V screener].
- Library consistency: 84% of exchange volume (FY26, indicative), 98–99% of DAM, 2 p/side fee cap, ₹10 price cap (₹20 HP-DAM), coupling timeline — all reused from `subsectors/exchanges.html` and consistent with the CERC Mar-2026 data (IEX DAM 6,860.58 MU vs PXIL 4.22 MU and HPX 0.16 MU) [V CERC].

## 2.4 Reference: unlisted traders and exchanges (what is known)
| Entity | Parent | Trader share FY25 / Mar-26 | Known financials / facts |
|---|---|---|---|
| NTPC Vidyut Vyapar Nigam (NVVN) | NTPC (100%) | 17.30% / 15.15% | 11.5 BU traded in Q1 FY25 (+43%) [V-snip]; NTPC Q1 FY26 consolidated revenue included ₹2,331 Cr of trading sales [V-snip]; Bangladesh export nodal agency [K] |
| Powerpulse Trading Solutions | n/a (FLAG) | 17.13% / 21.19% | fastest-rising trader; no public financials found |
| Tata Power Trading Co (TPTCL) | Tata Power | 8.62% / 4.07% | no FY26 data found |
| Manikaran Power | private | 6.34% / 7.00% | no data |
| Arunachal Pradesh Power Corp (APPCPL) | private | 4.60% / 4.17% | no data |
| GMR Energy Trading | GMR | 2.83% / 1.47% | no data |
| JSW Power Trading | JSW Energy | 2.73% / 5.09% | no data |
| Greenko Energies | Greenko/AM Green | 0.60% / 2.92% | RE + pumped-storage owner trading own output |
| Shree Cement | listed (captive) | 0.52% / 2.16% | sells captive surplus |
| PXIL | NSE + NCDEX | exchange | FY25: tiny DAM/RTM; meaningful TAM (Mar-26 TAM 641.6 MU; G-TAM 93.8 MU; ID&C 217.4 MU) [V CERC] |
| HPX | PTC 22.5%, BSE, ICICI Bank | exchange | Q2 FY27 revenue ₹18.13 Cr (₹9.89 Cr); H1 ₹32.11 Cr [V PTC transcript]; Mar-26 TAM 463 MU, ID&C 197 MU [V CERC] |

---

## 2.5 JSON (numeric; ₹ Cr unless noted; null = not sourced)
```json
[
  {
    "company": "PTC India Ltd",
    "nse": "PTC", "bse": "532524", "member": true, "basis": "consolidated", "fy": "FY26",
    "revenue": 16771, "revenue_prev": 15679, "revenue_growth_pct": 7.0,
    "operating_profit": 892, "opm_pct": 5.3, "other_income": 364, "interest": 320,
    "pat": 717, "pat_prev": 976, "eps": 20.46,
    "roce_pct": 13.4, "roe_pct": 10.3,
    "borrowings_sep26": 1421, "investments_sep26": 758,
    "mcap_13nov26": 4117, "price": 139, "pe": 8.87, "pb": 0.77, "book_value_per_share": 182,
    "dividend_yield_pct_screener": 16.5, "dividend_payout_pct": 42,
    "promoter_pct_sep26": 16.22, "fii_pct": 24.19, "dii_pct": 7.95, "govt_pct": 3.38, "public_pct": 48.26,
    "q2fy27": {"revenue": 5812, "pbt": 171.10, "pat": 159.10, "eps": 4.85},
    "h1fy27": {"pbt": 322, "pat": 271, "eps": 8.16},
    "screener_date": "2026-11-13"
  },
  {
    "company": "PTC India Ltd",
    "nse": "PTC", "member": true, "basis": "standalone", "fy": "FY26",
    "revenue": 16256, "revenue_prev": 15050, "operating_profit_screener": 270, "other_income": 362, "interest": 94,
    "pbt": 535, "pat": 397.04, "pat_prev": 854.78, "pat_prev_pel_gain": 457.39, "eps": 13.41,
    "volume_mu": 92802, "volume_prev_mu": 82751,
    "trading_margin": 310.52, "trading_margin_prev": 279.19,
    "trading_margin_paise_per_kwh": 3.35, "trading_margin_paise_prev": 3.37,
    "operational_income": 452.57, "operational_income_prev": 450.37,
    "cash_30sep26": 2431, "net_cash_30jun26": 2451, "debtors_30jun26": 4469,
    "pe": 12.0, "book_value_per_share": 138, "roe_pct": 8.3,
    "special_dividend_per_share_fy27": 23, "dps_fy25": 11.70, "dps_fy26_est": 8.6,
    "q1fy27": {"volume_mu": 25783, "trading_margin": 86.31, "consultancy": 10.76, "net_rebate": 15.99, "operational_income": 113.06, "net_surcharge": 3.06, "pbt": 95.54, "pat": 70.67, "margin_paise": 3.35},
    "q2fy27": {"volume_mu": 32463, "trading_margin": 93.88, "consultancy": 9.86, "net_rebate": 30.16, "operational_income": 133.90, "net_surcharge": 25.90, "pbt": 152.25, "pat": 113.23, "eps": 3.83, "margin_paise": 2.89,
               "margin_paise_by_segment": {"short_term": 0.69, "medium_term": 3.17, "cross_border": 6.98, "long_term": 7.98}},
    "q2fy26": {"volume_mu": 26178, "trading_margin": 96.40, "consultancy": 12.08, "net_rebate": 28.43, "operational_income": 136.91, "net_surcharge": 42.61, "pbt": 180.34, "pat": 133.82},
    "q1fy26": {"volume_mu": 23042, "trading_margin": 77.61, "consultancy": 9.88, "net_rebate": 23.68, "operational_income": 111.17, "net_surcharge": 37.65, "pbt": 140.96, "pat": 104.78},
    "q1fy27_mix_mu": {"exchange": 15453, "st_bilateral": 1924, "medium_term": 1822, "long_term": 5672, "cross_border_import": 497, "bangladesh": 410},
    "q1fy26_mix_mu": {"exchange": 12784, "st_bilateral": 1131, "medium_term": 688, "long_term": 6364, "cross_border_import": 1657, "bangladesh": 414},
    "cerc_trader_share_fy25_pct": 31.80, "cerc_trader_share_mar26_pct": 31.16,
    "hpx_stake_pct": 22.5, "pfs_stake_pct": 64.99
  },
  {
    "company": "PTC India Financial Services Ltd",
    "nse": "PFS", "bse": "533344", "member": false, "role": "subsidiary (64.99%)", "fy": "FY26",
    "total_income": 518.25, "nii": 246.06, "nim_pct": 4.49, "pbt": 389.70, "pat": 319.36, "eps": 4.97,
    "loan_assets_fy26": 3292, "loan_assets_q2fy27": 3684, "loan_assets_q2fy26": 3697,
    "sanctions_q2fy27": 3098, "disbursements_q2fy27": 1595,
    "q2fy27_pat": 44.04, "q2fy27_pbt": 17.02, "q2fy27_nii": 54.28, "q2fy27_nim_pct": 4.43,
    "gross_stage3_cr_q2fy27": 126, "net_stage3_cr_q2fy27": 105, "gross_stage3_pct_h1fy27": 3.43,
    "crar_pct": 70.99, "ronw_q2fy27_pct": 5.64, "roa_q2fy27_pct": 3.65, "cost_to_income_q2fy27_pct": 13.90, "debt_equity": 0.45,
    "borrowings_fy26": 1768, "mcap_13nov26": 1662, "price": 25.9, "pb": 0.54, "pe": 9.19, "book_value_per_share": 48,
    "ptc_stake_value_market": 1080, "ptc_stake_value_book": 2001
  },
  {
    "company": "Indian Energy Exchange Ltd",
    "nse": "IEX", "bse": "540750", "member": false, "role": "reference peer (exchange)", "fy": "FY26",
    "revenue_screener": 608, "revenue_company": 616, "operating_profit": 514, "opm_pct": 84,
    "pat_screener": 474, "pat_company": 493, "roce_pct": 51.8, "roe_pct": 39.4,
    "investments_sep26": 2170, "borrowings_sep26": 9,
    "mcap_13nov26": 10378, "price": 116, "pe": 20.8, "book_value_per_share": 15.6, "dividend_yield_pct": 3.01,
    "volume_bu_fy26": 141.1, "volume_mu_q2fy27": 39685, "volume_mu_oct26": 13092,
    "q2fy27_revenue": 165, "q2fy27_pat": 133,
    "dam_price_fy26": 3.86, "dam_price_q2fy27": 5.70, "dam_price_oct26": 6.66, "rtm_price_oct26": 5.78
  }
]
```

## 2.6 Conflicts and gaps (company level)
1. **FY25 standalone operational income:** primer ~₹718 Cr (+17%) vs company deck ~₹450 Cr (FY25) / ~₹453 Cr (FY26) — use the company figure; the primer's number is probably operational income + surcharge or a different aggregate. FLAG.
2. **Cash:** net cash ₹2,451 Cr (30-Jun, pre-special dividend) vs cash on hand ₹2,431 Cr (30-Sep, post) — definitions differ; say "about ₹2,400 Cr".
3. **Debtor days:** company 44 days (FY26) vs screener 98 days (standalone FY26) — basis (gross vs exposure; year-end vs average). Use company number with the definition.
4. **Promoter holding:** screener 16.22% vs deck 16.20% — rounding; reclassification to NTPC-only pending.
5. **Consolidated P/E 8.87:** on attributable profit; total consolidated TTM PAT ₹524 Cr would give 7.9×.
6. **IEX FY26 PAT:** screener ₹474 Cr vs library/company ₹493 Cr — basis difference.
7. **PFS GS3 %:** H1 FY27 3.43% (deck) vs ₹126 Cr / ₹3,684 Cr = 3.42% — consistent.
8. **PTC FY22–FY24 volumes and annual segment mix** — not verified this session.
9. **FY26 recurring DPS** — derived (~₹8.6), not read from a filing.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (₹ Cr; screener 13-Nov-26 unless noted)

| Row | Company | Basis | FY26 revenue | FY26 PAT | TTM PAT | M-cap | P/E | P/B | ROE % | Volume / book | Unit economics | Latest quarter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **MEMBER** | **PTC India** | consolidated | 16,771 | 717 | 524 | **4,117** | 8.87 | 0.77 | 10.3 | 92.80 BU (FY26) | 3.35 p (FY26) | Q2 FY27 PAT 159.10 (−28%) |
| MEMBER (detail) | PTC India | standalone | 16,256 | 397.04 | 342 | 4,117 | 12.0 | 1.01 | 8.3 | 32.46 BU Q2 FY27 (+24%) | 2.89 p Q2 FY27; ST 0.69 / MT 3.17 / CB 6.98 / LT 7.98 p | Q2 FY27 PAT 113.23 (−15%) |
| REFERENCE (subsidiary) | PFS | standalone (lender) | 518 (total income) | 319.36 | 179 | 1,662 | 9.19 | 0.54 | 11.0 (FY26); RoNW 5.64% Q2 annualised | Loan assets 3,684 | NIM 4.43%; GS3 ₹126 Cr (3.43% H1); CRAR 70.99% | Q2 FY27 PAT 44.04 (−50%) |
| REFERENCE (exchange) | IEX | consolidated | 608 (co. 616) | 474 (co. 493) | 499 | 10,378 | 20.8 | 7.4 | 39.4 | 141.1 BU FY26; 39.7 BU Q2 FY27 | ~4.4 p revenue/unit (both sides) | Q2 FY27 PAT 133 (+9%) |
| REFERENCE (unlisted trader) | NVVN | — | n/a | n/a | — | — | — | — | — | 17.30% (FY25) / 15.15% (Mar-26) of trader volume | n/a | — |
| REFERENCE (unlisted trader) | Powerpulse Trading Solutions | — | n/a | n/a | — | — | — | — | — | 17.13% / 21.19% | n/a | — |
| REFERENCE (unlisted trader) | Tata Power Trading | — | n/a | n/a | — | — | — | — | — | 8.62% / 4.07% | n/a | — |
| REFERENCE (unlisted trader) | Manikaran Power | — | n/a | n/a | — | — | — | — | — | 6.34% / 7.00% | n/a | — |
| REFERENCE (unlisted exchange) | HPX (PTC 22.5%) | — | Q2 FY27 rev 18.13; H1 32.11 | n/a | — | — | — | — | — | Mar-26 DAM 0.16 MU; TAM 463 MU | — | — |
| INDUSTRY | All traders (CERC) | — | — | — | — | — | — | — | — | 26.25 BU bilateral FY25 (11.0% of ST) | wtd margin 1.9 p FY25; 1.3 p Mar-26 | HHI 0.1777 (Mar-26) |
| INDUSTRY | All exchanges | — | market value ₹70,860 Cr (FY25) | — | — | — | — | — | — | 143.75 BU FY25; 168.55 BU FY26 | fee ≤ 2 p/side | IEX 84% share |

## 3.2 Aggregates (single member, so aggregates = the member)
- **Sub-sector FY26 revenue:** ₹16,771 Cr consolidated (₹16,256 Cr standalone); **~98% pass-through** — the economically meaningful "sector revenue" is PTC standalone operational income **~₹453 Cr** (trading margin ₹310.52 Cr + consultancy + net rebate) [V/E].
- **Sub-sector FY26 PAT:** ₹717 Cr consolidated (incl. 100% of PFS before minority; attributable ≈ ₹605 Cr [E: 717 − 35.01% × 319]); ₹397 Cr standalone.
- **Sub-sector m-cap:** ₹4,117 Cr (13-Nov-2026). For context, the reference exchange IEX alone is ₹10,378 Cr — the market values the toll-booth at 2.5× the largest trader.
- **Balance sheet:** standalone net cash ~₹2,431 Cr (≈59% of m-cap); consolidated borrowings ₹1,421 Cr are PFS's; PFS book equity ₹3,079 Cr (Mar-26) [V].
- **Ownership:** promoters 16.22%, FII 24.19%, DII 7.95%, govt 3.38%, public 48.26% [V].
- **Volume aggregate:** PTC 92.80 BU (FY26) ≈ 31% of trader volume and ≈ 5% of national generation [E].
- **Native-KPI aggregate:** PTC blended 3.35 p (FY26) vs industry bilateral 1.9 p (FY25) — PTC's premium is the LT/cross-border book.

## 3.3 Reconciliation vs primer (`primers/ptc-india.html`, refreshed 29-Aug-2026, FY25 basis)

| Item | Primer | Fetched (13-Nov-26) | Use |
|---|---|---|---|
| Latest year covered | FY25 | **FY26 + Q1/Q2 FY27 available** (Q2 board 2-Nov-2026) | Update to FY26/H1 FY27 |
| Volume | 82.75 BU FY25 (+11%); 74.84 BU FY24 | 82,751 MU FY25 ✓; **92,802 MU FY26 (+12%)**; H1 FY27 58,246 MU (+18%) | Fetched |
| Core trading margin | ~3.37 p FY25 | 279.19 / 82,751 = 3.37 p ✓; **FY26 3.35 p; Q2 FY27 2.89 p** | Fetched |
| Trading-margin ₹ | ~₹279 Cr FY25 | ₹279.19 Cr ✓; FY26 ₹310.52 Cr | Fetched |
| Standalone operating income | ~₹718 Cr FY25 (+17%) | **~₹450 Cr FY25 / ~₹453 Cr FY26** (company "total operational income") | Company figure; primer number unexplained — FIX |
| Consultancy income | ~₹50 Cr | Q1 FY27 ₹10.76 Cr; Q2 ₹9.86 Cr (~₹41–43 Cr run-rate) | Consistent order of magnitude |
| Revenue FY25 | ~₹16,241 Cr | screener cons ₹15,679 Cr; SA ₹15,050 Cr | **Primer figure does not match either basis** — FIX |
| Revenue FY24 | ~₹16,763 Cr | cons ₹16,763 Cr ✓ (SA ₹16,007 Cr) | Label as consolidated |
| PAT FY25 | ~₹976 Cr incl. one-off | cons ₹976 Cr ✓; SA ₹854.78 Cr incl. ₹457.39 Cr PEL gain | Label basis |
| PAT FY23–FY24 "recurring ~₹500 Cr" | ~507–533 | cons 507 / 533 ✓ (SA 370 / 369) | Label as consolidated (incl. PFS) |
| PAT FY26 | not covered | cons ₹717 Cr; SA ₹397.04 Cr | Add |
| M-cap | ~₹4,670 Cr (mid-2026) | **₹4,117 Cr** (₹139) | Screener |
| P/E | ~9× | 8.87× cons (attributable); 12.0× SA | Screener |
| P/B / BV | ~0.8× / ~₹202 | **0.77× / ₹182** cons (BV cut by ₹23 special dividend); SA BV ₹138 | Screener |
| Dividend yield | ~14% | screener 16.5% incl. ₹23 special; recurring ~6% [E] | Explain |
| FY25 dividend | ₹11.70 (₹5 + ₹6.70) | consistent with screener 38% payout × EPS 30.41 ≈ ₹11.6 [E] | OK |
| Special dividend | not covered | **₹23/share (Aug-2026), one-time** | Add |
| Promoters | NTPC, PGCIL, PFC, NHPC ~4% each, ~16% | 16.22% (Sep-26) ✓; **MoP 16-Jan-2026: NTPC sole promoter; NHPC exited 2-Mar-2026; article amendments failed** | Add |
| PFS stake | "majority-owned… verify" | **64.99%** | Fetched |
| PFS listing year | 2010 | 2011 (deck timeline; investor: listed at ₹28) | FIX |
| HPX | not mentioned as PTC's | **PTC co-promoter, 22.5% stake**; cannot trade on HPX (5% rule) | Add |
| CERC margin cap | ~7 p if sale price ≤ ₹4; ~4 p if > ₹4 | **0–7 p/kWh since 31-Jan-2020** (2010 rule was 7 p if > ₹3, 4 p if ≤ ₹3); 2 p on back-to-back without PSM obligation | FIX |
| Exchange share of PTC volume | "transacts on IEX as one channel among many" | **~60% of volume on exchanges** (Q1 & H1 FY27) | FIX |
| Route-to-market split | LT ~85%, ST bilateral ~6–7%, exchanges ~7–8% | FY25 (gross gen): exchanges 7.9%, traders 1.4%, direct 2.0%, DSM 1.8% [E from V CERC]; Mar-26 (excl RE/captive): PX 9.63%, bilateral 5.69%, DSM 2.39%, LT 82.29% [V] | FIX bilateral share; name basis |
| Competitors | NVVN; Tata/Adani/JSW; Manikaran; IEX/PXIL/HPX | CERC FY25: PTC 31.80, NVVN 17.30, **Powerpulse 17.13**, TPTCL 8.62, Manikaran 6.34, **APPCPL 4.60**, GMR 2.83, JSW 2.73; Adani absent | FIX/add shares |
| Cross-border outlook | volume and margin "both point up" | Bhutan imports down (Q1 FY27 497 vs 1,657 MU); "significant dip" Q2; Bhutan now buys winter power (1,200 MW deal); CB margin 6.98 p | Qualify |
| Governance status | "some orders… partly set aside… verify" | SEBI order 12-Jun-2024 on ex-CMD → SAT quashed 11-Dec-2024; board refused reinstatement 13-Dec-2024 | Add specifics |
| PEL sale | ~288 MW to ONGC Green; ~₹925 Cr equity / ~₹1,179 Cr EV; ~₹457 Cr gain | ₹457.39 Cr "contribution from divestment of PEL" ✓ | OK |
| Surcharge | "reforms… would oddly shrink surcharge" | Happened: net surcharge H1 FY27 ₹28.96 Cr vs ₹80.26 Cr | Update |

## 3.4 Primer issues (format as primer-issues.md)

### From Power Trading research (2026-11-13, power-trading-industry.md §3.4)

- **ptc-india.html — whole primer stale (FY25 basis, refreshed 29-Aug-2026):** FY26 results and Q1/Q2 FY27 (board 2-Nov-2026) are out. Add: FY26 standalone volume **92,802 MU (+12%)**, trading margin **₹310.52 Cr (3.35 p)**, PAT **₹397.04 Cr**; consolidated PAT ₹717 Cr; Q2 FY27 volume **32.46 BU (+24%)**, blended margin **2.89 p**, standalone PAT ₹113.23 Cr (−15%), consolidated ₹159.10 Cr (−28%); H1 FY27 standalone PAT ₹183.90 Cr (−23%). The cover stat strip ("~₹976 Cr net profit FY25, ~82.8 BU, ~3.37 p, ~₹4,670 Cr m-cap") needs replacing.
- **ptc-india.html — CERC trading-margin cap wrong (§03, chart "A fee with a legal lid", Sources):** the primer says "~7 paise per unit where the sale price is up to ₹4/unit, and about 4 paise per unit where the sale price is higher". The current rule (CERC Trading Licence Regulations 2020, effective 31-Jan-2020) is a **single band of 0 to 7 paise/kWh** (negative margins prohibited), with a **2 p cap on back-to-back contracts where the trader has no independent payment-security obligation**. The old 2010 rule was **7 p if sale price > ₹3 and 4 p if ≤ ₹3** — the primer has the threshold (₹4 vs ₹3) and the direction (higher cap at lower prices) wrong. Also add CERC's industry realised average: **1.9 p (FY25), 1.3 p (Mar-2026)**.
- **ptc-india.html — "standalone operating income ~₹718 Cr (+17%)" (cover "what's new", §02, §10 chart, Sources):** the company's own "total operational income" (trading margin + consultancy + net rebate) was **~₹450 Cr in FY25 and ~₹453 Cr in FY26** (investor presentation FY25 vs FY26 slide; press coverage "₹450 crore, flat"). The ₹718 Cr figure cannot be reconciled to company disclosures — remove it or define it.
- **ptc-india.html — FY25 revenue "~₹16,241 Cr":** screener shows FY25 revenue ₹15,679 Cr (consolidated) and ₹15,050 Cr (standalone); FY24 ₹16,763 Cr is consolidated. The per-unit bridge (196 p collected, 192.6 p paid) is built on the unreconciled ₹16,241 Cr. Rebuild on standalone: ₹15,050 Cr / 82.75 BU ≈ 182 p collected, 3.37 p kept (FY25); FY26 ₹16,256 Cr / 92.80 BU ≈ 175 p collected, 3.35 p kept.
- **ptc-india.html — basis labels on profit:** "recurring net profit ~₹500 Cr FY23–FY24" and "₹976 Cr FY25" are **consolidated** (include PFS). Standalone (the trading company) earned ₹370 Cr (FY23), ₹369 Cr (FY24), ₹855 Cr (FY25 incl. ₹457 Cr PEL gain) and ₹397 Cr (FY26). Label every profit number.
- **ptc-india.html — valuation stale and the yield wrong (§07, §10, §11):** m-cap ~₹4,670 Cr → **₹4,117 Cr** (₹139, 13-Nov-2026); P/E ~9 → 8.87 (consolidated, attributable) / 12.0 (standalone); P/B ~0.8 on BV ~₹202 → **0.77 on BV ₹182** (book cut by the special dividend). The "~14% dividend yield" was never right on a recurring basis (₹11.70 on a ~₹158 price ≈ 7.4%); screener's 16.5% today includes the **one-time ₹23/share special dividend (Aug-2026)**. Recurring yield ≈ 6% (FY26 DPS ≈ ₹8.6, derived). The bull case "~14% yield" bullet must be rewritten.
- **ptc-india.html — special dividend omitted:** ₹23/share interim (≈₹681 Cr) declared with Q1 FY27 results, explicitly "one-time" from PEL proceeds. This is the "hand back the cash" catalyst the primer's §07/§11 asks for — it has happened; standalone cash is now ~₹2,431 Cr (30-Sep-2026).
- **ptc-india.html — promoter restructuring omitted (§04, timeline):** MoP OM 16-Jan-2026 directed **NTPC as sole promoter**, with PFC, POWERGRID and NHPC to reclassify as public and the CMD post split; postal ballot (results ~20-Mar-2026) passed the new promoter definition and Dr Jhawar's terms but **failed the amendments to Articles 113, 129 and 133** (~55.9% for; special resolutions need 75%); NHPC relinquished promoter status 2-Mar-2026. The §04 framing "controlled by none of them… no dominant controlling shareholder" needs updating; note that NTPC also owns rival trader NVVN.
- **ptc-india.html — PFS stake:** "majority-owned… verify" → **64.99%** (Sep-2026). Add: PFS m-cap ₹1,662 Cr (P/B 0.54), stake worth ₹1,080 Cr at market vs ~₹2,000 Cr at book; loan assets ₹3,684 Cr; GS3 ₹126 Cr (3.43%); CRAR 70.99%; Q2 FY27 ₹51 Cr provision; ratings CRISIL A/Negative, ICRA A-/Stable.
- **ptc-india.html — PFS divestment status omitted (§07):** board pause lifted (reaffirmed 19-May-2026); transaction advisor appointed (Aug-2026; likely SBICAPS — verify); no bidders/timeline; management will not sell below book; earlier 2020 attempt (IDFC Securities advisor) failed.
- **ptc-india.html — governance episode vague (§08):** add the specifics: **SEBI final order 12-Jun-2024** (ex-CMD Rajib Kumar Mishra barred six months from listed-company director roles, ₹10 lakh penalty; he ceased as PTC CMD and PFS chair that day) → **SAT quashed it 11-Dec-2024** ("allegations baseless") → **PTC board resolved 13-Dec-2024 not to re-induct him**. Dr Manoj Kumar Jhawar became CMD 13-May-2025 (now MD & CEO after the CMD split).
- **ptc-india.html — HPX stake missing (§06, §09):** PTC is a **co-promoter of Hindustan Power Exchange with 22.5%** (with BSE and ICICI Bank). Because CERC limits a trading member's exchange shareholding to 5%, PTC **cannot trade on HPX**. HPX revenue Q2 FY27 ₹18.13 Cr (₹9.89 Cr). Market coupling (CERC draft 17-Apr-2026, not yet notified) is the swing factor for HPX's value — the primer treats exchanges only as a threat.
- **ptc-india.html — exchange share of PTC's own volume understated (§06):** "PTC itself uses the exchanges… as one channel among many" — in fact **~60% of PTC's volume is exchange-traded** (Q1 and H1 FY27) and the short-term margin is only **0.69 p** (Q2 FY27). Add the segment margin ladder (ST 0.69 / MT 3.17 / CB 6.98 / LT 7.98 p).
- **ptc-india.html — route-to-market chart (§01):** "short-term bilateral ~6–7%, exchanges ~7–8%, LT ~85%". On CERC FY25 data (gross generation basis): exchanges ~7.9%, bilateral through traders ~1.4%, direct bilateral ~2.0%, DSM ~1.8% (total short-term incl. DSM 13.0%). On CERC's 2026 basis (excl. RE/captive): exchanges 9.63%, all bilateral 5.69%, DSM 2.39%, long-term 82.29%. Name the basis; the bilateral-trader slice is much smaller than shown.
- **ptc-india.html — competitor table (§09):** add CERC shares (FY25: PTC 31.80%, NVVN 17.30%, **Powerpulse Trading Solutions 17.13%**, TPTCL 8.62%, Manikaran 6.34%, **Arunachal Pradesh Power Corp 4.60%**, GMR 2.83%, JSW 2.73%; top-5 81.19%; HHI 0.176). Mar-2026: Powerpulse #2 at 21.19%. "Adani" does not appear in CERC's FY25 or Mar-26 trader tables — remove or qualify. Note ~81 licensees, ~41 active.
- **ptc-india.html — cross-border outlook too rosy (§05):** "volume lever and margin lever both point up" is contradicted by recent data: PTC's cross-border import volume fell to **497 MU in Q1 FY27 from 1,657 MU**, and Q2 saw a "significant dip" in Bhutan power "due to higher domestic requirement in Bhutan"; PTC now **exports** up to 1,200 MW to Bhutan in winter. India's net Bhutan imports fell from 9.3 BU (FY21) to 4.5 BU (FY25); Nepal became a net exporter to India in FY25 and trades directly on IEX. Cross-border margin 6.98 p is still high.
- **ptc-india.html — long-term book constraint missing:** traders are **not permitted to bid in long-term thermal procurement under the standard bidding documents**, so the 7.98 p LT book cannot be replenished from conventional power; "nothing is likely to expire in next three years"; new LT volume comes only from NTPC REL 1,200 MW solar (FY29) and the Teesta-III rebuild (~Dec-2026 start, 40–50% initially).
- **ptc-india.html — surcharge prediction has come true (§03):** net surcharge fell from ₹80.26 Cr (H1 FY26) to ₹28.96 Cr (H1 FY27) and net rebate from ₹52.11 Cr to ₹46.15 Cr as discom liquidity improved (LPS legacy dues ₹1.40 lakh Cr → ₹3,330 Cr). Make this a dated fact.
- **ptc-india.html — PFS listing year:** timeline says "2010 PFS lists separately"; the company deck places PFS listing in 2011 (IPO Mar-2011 at ₹28). Also the IEX stake: PTC was a co-promoter of IEX at its 2008 launch (not an "early stake" taken in 2010); the 2017 sale (~₹132.54 Cr) is attributed in different reports to PTC or to PFS — verify.
- **ptc-india.html — new businesses omitted:** mineral exchange (announced Oct/Nov-2026; IBM-regulated), NLC India JV "NPRL" (incorporated 2026), BESS EoI 500 MW/2,000 MWh, NTPC REL 1,200 MW solar PPA, Bhutan winter export contract, Nepal 204 MW medium-term to 2028, ₹17.4 Cr litigation provision (Q1 FY27).
- **ptc-india.html — West Asia/scarcity context missing:** record peak 270.8 GW (21-May-2026) and 269 GW (10-Sep-2026); IEX DAM ₹7.30 (Sep-2026) and ₹6.66 (Oct-2026, +149%); ₹10 cap binding; gas power "almost ₹30/unit" RTC (MD, Nov-2026). For a trader, scarcity raises traded value but not the capped per-unit fee.
- **ptc-india.html — sources list:** "CERC … indicative caps ~7 and ~4 paise/unit" — replace with "CERC (Procedure, Terms and Conditions for grant of Trading Licence) Regulations 2020: 0–7 paise/kWh; CERC Report on Short-term Power Market in India 2024-25; CERC monthly market monitoring report Mar-2026".

## 3.5 Key source URLs
- **Screener (13-Nov-2026):** https://www.screener.in/company/PTC/consolidated/ · https://www.screener.in/company/PTC/ · https://www.screener.in/company/PFS/ · https://www.screener.in/company/IEX/
- **PTC Q2 FY27 (BSE):**
  - Press release 2-Nov-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0efb4f7b-88be-49e0-8955-5ad00b7f613a.pdf
  - Investor presentation: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=343230e5-7625-445d-aedf-f9af7315156f.pdf
  - Transcript (call 3-Nov-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=450b3098-9297-4875-a788-f7e04b7080dd.pdf
- **PTC Q1 FY27 (BSE):**
  - Investor presentation (incl. FY25 vs FY26 slide): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dc9e44b1-e30b-453a-931f-361dbb5ec843.pdf
  - Transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dbb9e004-ebd7-41cf-8969-13e9dc9d6bcd.pdf
- **PFS Q2 FY27 (BSE):**
  - Press release 27-Oct-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3bbee5ba-89a7-4466-a77c-0bc18bd37093.pdf
  - Investor presentation: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e63c8cce-9859-4f8f-be83-ab3fa856b461.pdf
  - Transcript (call 28-Oct-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=04957a3d-9a9f-4233-b7e7-602c88af3c22.pdf
- **CERC Report on Short-term Power Market in India 2024-25:**
  - Chapter I (overview, capacity, generation): https://cercind.gov.in/2025/market_monitoring/Annual-2024-25/Chapter%20I.pdf
  - Chapter II (short-term market, trader shares, HHI, trading margin): https://cercind.gov.in/2025/market_monitoring/Annual-2024-25/Chapter%20II.pdf
  - Chapter III (cross-border): https://cercind.gov.in/2025/market_monitoring/Annual-2024-25/Chapter%20III.pdf
  - Chapter IV (RECs): https://cercind.gov.in/2025/market_monitoring/Annual-2024-25/Chapter%20IV.pdf
- **CERC monthly report, March 2026:** https://cercind.gov.in/2026/market_monitoring/MMC%20Report%20on%20Short%20term%20market%20for%20March%202026.pdf (index: https://cercind.gov.in/report_MM-2026.html)
- **Governance (SEBI/SAT on ex-CMD):**
  - https://www.deccanherald.com/business/sat-quashes-sebis-order-against-former-ptc-india-cmd-mishra-from-holding-directors-post-3314765
  - https://psuwatch.com/newsupdates/ptc-india-board-resolves-not-to-induct-rajib-mishra-in-cmd-director-role
  - https://www.theweek.in/wire-updates/business/2024/12/17/dcm49-biz-ptc-india-sebi.html
  - https://www.taxmann.com/post/blog/sebis-order-restraining-appellant-chairman-of-company-p-unsustainable-as-no-specific-statutory-violation-was-imputed-sat
- **NTPC sole promoter / postal ballot:**
  - https://www.theweek.in/wire-updates/business/2026/01/23/ptc-india-says-power-ministry-seeks-leadership-changes-ntpc-as-sole-promoter.html
  - https://www.whalesbook.com/corporate-news/English/energy/PTC-India-Shareholders-Reject-Key-Rule-Changes-OK-Promoter-and-CMD-Roles/69be5dd7774ac9d66c510a7e
  - https://www.investywise.com/?p=59464 (NHPC withdrawal)
  - https://ntpc.co.in/sites/default/files/announcement/2026/2026-01/20260130_STEX_CHANGEINMANAGMENTPTCINDIA.pdf (not opened)
- **PTC Q4 FY26 / PFS divestment restart:** https://www.whalesbook.com/corporate-news/English/energy/PTC-India-Sees-18percent-Profit-Rise-in-Q4-PFS-Divestment-to-Restart/6a157451ea3d61cca6a246fe · https://www.investywise.com/?p=89352
- **IEX Oct-2026 volumes:** https://www.investywise.com/indian-energy-exchange-power-market-update-october26/ · https://solarquarter.com/2026/11/03/iex-records-13-1-billion-units-electricity-trading-volume-in-october-2026-up-16-5-yoy/
- **Peak demand Sep-2026:** https://www.downtoearth.org.in/energy/unusual-peak-indias-september-power-demand-surges-nearing-summer-levels
- **LPS / discom dues:** https://www.outlookbusiness.com/economy-and-policy/discoms-legacy-dues-reduce-to-3300-cr-from-139-lakh-cr-in-4-years-power-min · https://solarquarter.com/2026/02/13/ministry-of-poweroutstanding-electricity-dues-decline-no-liquidation-scheme-required-for-state-discoms/
- **Market coupling:** https://powerline.net.in/2026/04/21/cerc-issues-draft-cerc-power-market-second-amendment-regulations-2026/ · https://solarquarter.com/2026/02/16/aptel-disposes-iex-appeal-allows-cerc-to-proceed-on-market-coupling-framework/amp/ · https://sagebridgelegal.beehiiv.com/p/the-gridline-monthly-insights-from-sagebridge-legal-fb82
- **Cross-border guideline amendment (Godda):** https://powerline.net.in/2024/09/02/rules-revision-mop-amends-guidelines-for-cross-border-electricity-trade/ · https://business-standard.com/companies/news/centre-allows-power-exporters-like-adani-to-sell-back-in-india-124081301694_1.html
- **Trading-margin 2020 regulations (draft/explanatory):** https://cercind.gov.in/2020/draft_reg/Explanatory%20Memorandum2020%20(First%20Amendment).pdf (not opened; CERC FY25 report Ch II §6 used instead)
- **Sibling library reports (reused facts):** `subsectors/exchanges.html` (IEX volumes, fee cap, price caps, coupling timeline, DAM prices); `subsectors/power-generation.html` (peak 270.8 GW, FY26 generation estimate, LPS mechanics, storage tenders); `subsectors/power-transmission.html` and `integrated-power.html` (peak demand series, West Asia, AESL supply volumes).
- **Primer:** `primers/ptc-india.html`.
