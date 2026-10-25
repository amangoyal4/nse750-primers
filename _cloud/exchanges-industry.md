# Indian Exchanges (Finance || Exchange and Data Platform): Research Dossier + Company Fact Packs

Compiled 2026-10-25 for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), including sections A–H.
- **Part 2** is the company fact pack for all three members (brief-companies.md).
- **Part 3** is the company-KPI appendix: summary grid, aggregates, reconciliation vs primers, primer issues and source URLs.

**Members (3, Tier C):** BSE Limited (BSE · NSE-listed only, no BSE scrip code), Multi Commodity Exchange of India (MCX · 534091), Indian Energy Exchange (IEX · 540750).
**Benchmark that is no longer unlisted:** National Stock Exchange of India (NSE) **listed on BSE on 24-Sep-2026 (BSE scrip 544937)** after a ₹22,562 Cr pure-OFS IPO. It is outside the frozen July-2026 NSE 750 list, so it is *context, not a member*, but it is now a listed peer with a live market cap (₹4.13 lakh Cr on 25-Oct-26). See "Still listed?" item 1. This changes the framing the brief assumed ("unlisted benchmark").

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source (URL inline or in §3.5). Includes screener.in pages pulled by `curl` on 25-Oct-2026, NSE's Q4 FY26 press release + investor deck (PDF, fetched), the ICICI Direct MCX Q1 FY27 result note (PDF, fetched), IEX's Q2 FY27 volume release (via Free Press Journal, fetched), BSE Q1 FY27 deck summary (multibagg, fetched), the Jefferies monthly note (via Business Today, fetched), the NSE IPO page (Kotak Neo, fetched), the SEBI FY26 F&O study summary (Finnovate, fetched).
- **[V-snip]** = verified only from a search-result summary or secondary article, not the primary document.
- **[V-sib]** = verified in a sibling report this month and reused for consistency (subsectors/stockbroking.html, fetched data 19-Oct-26; subsectors/market-infra.html, 22-Oct-26). Not re-fetched here.
- **[K]** = well-established public fact from memory; the source is named but was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present it as "approx." or a range.
- **[primer]** = from our primers in primers\ (BSE refreshed 1-Jul-26; MCX 3-Jul-26; IEX 20-Jul-26).
- **[screener 25-Oct-26]** = screener.in consolidated pages pulled 25-Oct-2026 (Sunday; prices are Friday 23-Oct close).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. MU = million units (kWh); BU = billion units = 1,000 MU. MMBtu = million British thermal units.
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All three members (and NSE) have a March year-end.
- **ADTO / ADT / ADTV** = average daily turnover (the exchanges use all three abbreviations for the same thing). Always state **premium** or **notional** for options (trap 1).
- **FX: ₹94.9 = US$1** (19-Oct-2026). Used for all USD conversions in this file. Global peer data come in USD from an aggregator.
- Macro context (owner's consistency facts, as of 21-Oct-2026): RBI repo **hiked to 5.50% on 7-Oct-2026**; Nifty **22,780 on 28-Sep-2026**; rupee ~₹94.9/$; **gold & silver import duty 6% → 15% on 13-May-2026**; **West Asia crisis from 28-Feb-2026**; Jio Platforms IPO (₹1,065–1,119; subscription 21–23 Oct; listing ~28-Oct) — a large live primary-market event for BSE/NSE listing and clearing volumes. A "February–March 2026 market crash" is referenced in market-infra.html [V-sib].

**Q2 FY27 status (as of 25-Oct-2026): none of the three members (nor NSE) has reported Q2 FY27 results. Q1 FY27 (Jun-26) is the latest reported quarter for all.** IEX has published Q2 *volumes* (6-Oct).

| Company | Q1 FY27 result (date) | Q2 FY27 board date / status | Q2 data already public |
|---|---|---|---|
| BSE Ltd | **~4–5-Aug-2026** (Business Standard "BSE Q1 PAT rises 62% YoY", 5-Aug-26) [V-snip]; deck summarised 3-Aug [V multibagg] | **Board 4-Nov-2026**; trading window closed 1-Oct → 6-Nov [V screener announcements] | None official. Jefferies monthly: June premium ADTO ₹26,200 Cr; Aug ADTO −12% MoM (Swastika snippet) [V / V-snip] |
| MCX | **~4–5-Aug-2026** (multibagg article 5-Aug-26; ICICI Direct note 7-Aug-26) [V] | **Board 3-Nov-2026**; analyst call intimated 22-Oct [V screener] | None |
| IEX | **23-Jul-2026** (board 2:00–4:07 pm) [V FPJ] | **Board 29-Oct-2026**; earnings call intimated 23-Oct [V screener] | **Q2 volume 39,685 MU (+12.7%)**, released 6-Oct-26 [V FPJ] |
| NSE (context) | ~late Jul/early Aug 2026 (screener shows Jun-26 quarter) [V screener] | **Board 3-Nov-2026**; analyst call 3-Nov [V screener] | — |

**Still listed? All three members are listed. Live corporate/structural items:**
1. **NSE is now listed (on BSE only).** IPO open 17-Sep → close 21-Sep-2026; price band ₹1,700–1,785; **pure OFS of up to 12.64 crore shares, ₹22,562 Cr**; subscribed **5.7×** overall (QIB 12.68×, NII 6.54×, retail 1.37×, employee 2.38×); allotment 22-Sep; **listing 24-Sep-2026 on BSE** [V Kotak Neo IPO page]. Selling shareholders include SBI (up to 1.60 crore shares), CPPIB (1.19 crore), Aranda Investments (Temasek, 1.12 crore), MS Strategic (1.10 crore) [V]. Anchors include LIC (₹400 Cr), Norway's GPFG (₹250 Cr), MAS and ADIA (₹200 Cr each) [V]. Listing price ~₹1,800 per one tracker [V-snip]. **Screener 25-Oct-26: ₹1,669 (6.5% below issue), m-cap ₹4,12,966 Cr, P/E 44.9× TTM, ROE 28.6%** [V screener 544937]. Earlier steps: DRHP filed **June 2026** (5paisa/financeasia reported ~17-Jun) [V-snip]; SEBI observation letter reported ~7-Sep-2026 [V-snip]; SEBI in-principle approval of the **₹1,491.21 Cr co-location + dark-fibre settlement** disclosed with the June-quarter results; Supreme Court then disposed of SEBI's appeals [V-snip moneylife/outlookbusiness/FPJ].
   - **Consistency flag:** subsectors/stockbroking.html says NSE's "draft prospectus filed on 10 September 2026" and lists "NSE IPO pending". By 19-Oct (that page's data date) NSE had already listed (24-Sep). The 10-Sep document was most likely the RHP, not the DRHP. Tell the owner; the writer should say "NSE listed on 24-Sep-2026 after a June-2026 DRHP".
   - **Symmetry worth one line in the report:** BSE Ltd is listed only on NSE (an exchange cannot list on its own platform); NSE is listed only on BSE. Each exchange is now the listing venue of its main rival.
2. **IEX's gas exchange, IGX, is now an associate, not a subsidiary.** Screener's announcement (13-Oct-26) calls it "An Associate Company, Indian Gas Exchange Limited"; **SEBI issued its observation letter on IGX's DRHP on 12-Oct-2026** [V screener]. IEX is selling down (OFS of ~22.3%) to 25% to comply with PNGRB ownership rules [V-snip FPJ/sahi]. **Consequence:** from the quarter of deconsolidation IEX's consolidated revenue will drop IGX's revenue (IGX FY26 PAT ₹41.9 Cr [primer]) and pick up a share of profit + likely a one-off gain on the OFS. Do not compare IEX consolidated FY27 revenue with FY26 without adjusting.
3. **MCX** incorporated two new wholly owned subsidiaries: **MCX Coal Exchange of India** (after SEBI approval of Apr-2026; mentioned in Q1 FY27 call) and **MCX Mineral Exchange of India Ltd (16-Oct-2026)** [V ICICI Direct; V screener].
4. **IEX** incorporated **Indian Coal Exchange Ltd** (WOS) on 1-Jun-2026 [primer]. Both MCX and IEX are building coal exchanges → future head-to-head competition.
5. **BSE** published an advertisement inviting applications for **MD & CEO on 22-Oct-2026** [V screener]. The incumbent, Sundararaman Ramamurthy, took charge in Jan-2022 for five years [K] → term ends ~Jan-2027. Leadership transition is a 2027 watch item. SEBI approved Ashutosh Singh as Executive Director (21-Oct) [V screener].
6. **NSE board:** LIC nominee director resigned 9-Oct-26 [V screener]. Not material.

---

## READ THIS FIRST: ten definitional traps

1. **Options "turnover" has two numbers that differ ~100×: notional and premium.**
   - **Notional** = strike (or underlying) × lot × contracts — the face value of exposure. BSE's notional ADTO is quoted in **hundreds of lakh crore** per day; MCX options notional ADT was **₹9,89,691 Cr (~₹9.9 lakh Cr) in Q1 FY27** [V multibagg].
   - **Premium** = price actually paid for options. BSE premium ADTO **₹29,615 Cr in Q1 FY27**; NSE **₹64,352 Cr**; MCX **₹9,086 Cr** [V].
   - **Exchange fees on options are charged on premium** (since true-to-label, Oct-2024) — so premium ADTO drives revenue. SEBI's regulatory fee on exchanges, by contrast, is levied on **notional** (the Apr-2024 BSE dispute) — so costs scale with notional (trap 6).
   - **Premium-to-notional ratio moves with implied volatility.** BSE: 12.5 bps in Q1 FY27 vs 11.8 bps in Q4 FY26 [V Jefferies]. MCX bullion options: **1.03% → 0.35% of notional** from Q4 FY26 to Q1 FY27 as gold/silver volatility fell; premium ADT −27% QoQ while notional +116% [V ICICI Direct]. **A notional boom can coincide with a revenue fall.** Never chart notional as if it were revenue-relevant.
   - **Industry options premium ADTO is not published by anyone as one number.** It is derived as NSE ADTO ÷ NSE share (stockbroking.html did this: ~₹77,200 Cr FY26, ~₹94,000 Cr Q1 FY27 [V-sib, INDICATIVE]); Jefferies gives a monthly industry index-options figure (₹80,900 Cr in Jun-26) [V].
2. **Turnover is counted once; fees are charged on both sides.** BSE's Sensex options fee is **₹3,250 per crore of premium** (₹325 per ₹10 lakh) and NSE's ~₹3,500/Cr [primer; V-snip Swastika]. Dividing BSE's FY26 equity-derivatives revenue (₹3,134 Cr [primer]) by FY26 premium turnover (₹19,522 Cr/day × ~248 days ≈ ₹48.4 lakh Cr) gives **~₹6,470 per Cr** — i.e. **2 × ₹3,250**. NSE: options transaction revenue ₹9,996 Cr [V NSE deck] ÷ (₹57,662 Cr × ~248) ≈ **₹6,990 per Cr ≈ 2 × ₹3,500** [E]. MCX and IEX work the same way (IEX: 2 p/kWh from *each* of buyer and seller ≈ 4 p per unit traded). **When the writer quotes a "take rate", say whether it is per side or per trade.**
3. **"Revenue" at BSE has four numbers.**
   - Screener "Sales" FY26 **₹5,124 Cr**; primer "revenue from operations" **₹4,834 Cr**; primer "total revenue/income" **₹5,148 Cr**; screener "other income" only **₹24 Cr** [V screener; primer].
   - The difference is **investment income on clearing & settlement funds and own treasury**, which BSE classifies partly inside revenue from operations ("treasury income on clearing/settlement funds") and partly in other income; screener reclassifies. Q1 FY27: revenue from operations ₹1,566.1 Cr and total income ₹1,706.8 Cr [V multibagg] — screener matches the ₹1,566 Cr there.
   - **Use screener for the peer table** (one basis across members) and say "revenue from operations incl. clearing-fund investment income". Use the company's split in prose.
4. **BSE consolidated vs standalone, and "PAT attributable".** BSE consolidated PAT includes its **share of profit of CDSL (associate, 15%)** and 100% of **BSE Clearing (ex-ICCL)**, India INX (GIFT City) and other subsidiaries. Q1 FY27 "net profit attributable to shareholders" ₹874.0 Cr (company) vs screener net profit ₹873 Cr [V]. Use screener ₹873 Cr in tables.
   - **BSE owns 15% of CDSL — not ~24%.** The primer's "~24%" is pre-2019. SEBI's MII ownership cap forced BSE down to 15% [V-sib market-infra.html; K]. Whether BSE still equity-accounts CDSL as an associate at 15% (it has board representation, so "significant influence" is plausible) — **VERIFY in BSE's FY26 annual report**; I could not fetch it. Do not write "associate" as fact without it.
5. **MCX's EBITDA margin has three bases.**
   - Screener OP FY26 **₹1,642 Cr (71%)**; ICICI Direct "EBITDA" FY26 **₹1,647 Cr (71.5%)**; primer "~73%" (likely company EBITDA incl. some other income) [V screener; V ICICI; primer].
   - Q1 FY27: **₹494.0 Cr (70.4%)** on revenue-from-operations basis vs company-reported **₹544 Cr (72.3%)** — the gap ≈ other income ₹49.8 Cr [V ICICI Direct].
   - Use **screener OP** in tables; label company EBITDA when quoted.
6. **SEBI regulatory fee, SGF contributions and clearing costs are expenses, and they scale with activity.**
   - **SEBI turnover fee** is levied on **notional** turnover for options (SEBI's Apr-2024 direction to BSE; BSE provided ~₹170 Cr for prior years incl. interest, payable in instalments Aug-2025 → Aug-2027) [primer; K]. NSE FY26 regulatory fees **₹796 Cr** (FY25 ₹963 Cr) [V NSE deck]; NSE paid **₹1,008 Cr of SEBI fees** to the exchequer line in FY26 [V].
   - **Core Settlement Guarantee Fund (Core SGF)**: exchanges and clearing corporations must contribute (SEBI's minimum required corpus framework); contributions run through the P&L. NSE FY26 Core SGF contribution ₹1 Cr vs **₹234 Cr in FY25**; NSE's Core SGF stood at **~₹13,079 Cr (Mar-26)** [V NSE deck]. BSE reports "operating EBITDA (incl. Core SGF contribution)" [V multibagg]. MCX's balance sheet SGF **₹1,367 Cr (FY26) vs ₹930 Cr (FY25)** [V ICICI].
   - BSE: **54% of operating expenses** in Q1 FY27 were regulatory fees + clearing/settlement costs [V multibagg]. That is why BSE's margin (67%) trails NSE's (78% on Q1 FY27 screener OP) despite similar fee rates.
7. **"Operating income" vs "other income" vs "investment income on clearing funds".** Exchanges hold huge member margins and SGF balances. Interest earned on them is *operating* (NSE: "operating investment income" ₹842 Cr FY26, separate from "income on investments" ₹1,929 Cr, which is other income) [V NSE deck]. The split is a company choice; screener's OP will not match company EBITDA. **Rule: compare margins on screener OP for the peer table; discuss treasury income separately.** Treasury income is rate-sensitive (repo hiked to 5.50% on 7-Oct-26 → modest tailwind) and MTM-sensitive (BSE and MCX both booked MTM gains in Q1 FY27 as yields eased [V]).
8. **MCX's FY24 base is distorted by 63 Moons software charges, and the migration date is Oct-2023, not Oct-2024.**
   - MCX went live on the **TCS-built Commodity Derivatives Platform (CDP) on 16-Oct-2023** [primer; K]. The brief's "Oct-2024 migration" is wrong — do not repeat it.
   - The legacy vendor's quarterly fee escalated to ~₹125 Cr/quarter before exit [primer]; FY24 OP margin **9%**, PAT **₹83 Cr** [V screener]. Growth "from FY24" is meaningless; use FY23 (₹514 Cr revenue, ₹149 Cr PAT) or FY25 as base.
   - **Software cost now:** ₹105 Cr in FY26 (₹93 Cr FY25), i.e. **4.6% of revenue** [V ICICI Direct].
9. **IEX volume: MU vs BU, and what is counted.**
   - IEX reports **electricity volume in MU** monthly/quarterly (Q2 FY27 **39,685 MU** = 39.7 BU) and annual totals in BU (FY26 **141.1 BU**) [V; primer]. **RECs are counted in certificates (lakh), not MU**, and are excluded from MU totals. Gas (IGX) is in **MMBtu** and is not IEX volume.
   - "DAM" in IEX releases **includes HP-DAM** (high-price day-ahead) [V FPJ]. "TAM" is often bundled with **Day-Ahead Contingency (DAC)**.
   - IEX's share must be computed against **all three exchanges' volume** (CEA/CERC market-monitoring: **168.55 BU across IEX, PXIL, HPX in FY26** [V-snip]) → **IEX ~83.7%** [E]. IEX's **DAM** share is ~98–99% [primer]; its share in TAM/green/REC segments is lower.
   - **Price ≠ revenue.** IEX earns per kWh (2 p/side), not on value. Q2 FY27 DAM average price **₹5.7/kWh (+46%)** [V FPJ] has **no direct revenue effect** — but high prices suppress buy-side volume and can trigger the ₹10/kWh price cap [K].
10. **Exchange market share has many bases.** NSE's Q4 FY26 shares: cash **93%**, equity futures **~100%**, equity options (premium) **73%**, electricity futures **72% (by lots, Jul-25–Mar-26)** [V NSE deck]. MCX says it has **~55% of electricity futures by ADT and >70% by open interest** (Q1 FY27 call) [V ICICI Direct] — **direct conflict with NSE's 72% claim; different bases (lots vs value vs OI) and periods.** MCX ">98% of commodity futures" is by value of futures, non-agri; NCDEX dominates agri. BSE's options share differs by premium vs notional vs contracts vs expiry-day. **Always name the base.**

---

## 0. Top-line framing (what an expert leads with)

- **Three members, three regulators, one economic model: a toll on activity over a fixed cost base.**
  - **BSE (SEBI; equity cash, equity derivatives, listing, StAR MF, clearing via BSE Clearing, CDSL 15%)** — FY26 screener revenue **₹5,124 Cr (+59.5%)**, OP **₹3,480 Cr (68%)**, PAT **₹2,487 Cr (+88%)** [V screener].
  - **MCX (SEBI; commodity derivatives — bullion, energy, base metals; MCXCCL clearing)** — FY26 revenue **₹2,302 Cr (+107%)**, OP **₹1,642 Cr (71%)**, PAT **₹1,332 Cr (+138%)** [V screener].
  - **IEX (CERC; electricity spot/term markets, RECs; IGX gas now associate)** — FY26 revenue **₹616 Cr (+14.7%)**, OP **₹520 Cr (84%)**, PAT **₹493 Cr (+14.9%)** [V screener].
  - **All three: FY26 revenue ₹8,042 Cr (+65.4%), OP ₹5,642 Cr (70.2%), PAT ₹4,312 Cr; m-cap ₹2,17,818 Cr on 25-Oct-2026 → 50.5× FY26 PAT, 44.7× TTM** [E: sums of screener 25-Oct-26].
  - **Context:** NSE alone earned **₹10,302 Cr PAT on ₹16,601 Cr revenue from operations** in FY26 — 2.4× the three members' combined profit — and is now valued at **₹4.13 lakh Cr (40.1× FY26 PAT)** [V NSE PR; V screener].
- **The single most important fact of 2024–26: SEBI's curbs shrank the number of traders but not the money traded, and moved share from NSE to BSE.**
  - Individual F&O traders fell **106.2 lakh → 87.5 lakh (−18%)** in FY26; new entrants **−39%** [V Finnovate summary of SEBI FY26 study; V-sib stockbroking].
  - NSE options premium ADTO fell only **7.7%** (₹62,449 → ₹57,662 Cr) in FY26 and was **+15.9% YoY in Q1 FY27 (₹64,352 Cr)** — the first quarter under the Budget-2026 STT hike [V-sib from NSE offer document].
  - **NSE's share of options premium: 96.86% (FY24) → 87.43% (FY25) → 74.71% (FY26) → 68.48% (Q1 FY27)** [V-sib]. **BSE's share therefore ~3% → ~13% → ~25% → ~31.5%** [E]; BSE's own Q1 FY27 premium ADTO of ₹29,615 Cr ÷ (₹29,615 + ₹64,352 Cr) = **31.5%**, matching [E from V]. June 2026 index-options share **32.4%** (Jefferies) [V].
  - Why: SEBI's Nov-2024 "one weekly expiry per exchange" rule left NSE with one weekly Nifty contract and BSE with one weekly Sensex contract — a **regulatory duopoly of expiry days**. The Sep-2025 shift (NSE → Tuesday, BSE → Thursday) gave BSE a clean, uncontested expiry day; on 4-Sep-2025 BSE took a record **56%** share of that day's premium (₹49,265 Cr) [V-snip scanx].
- **The cash-flow equation is volatile, not structural, for MCX in FY26–27.** MCX's FY26 doubled on a **bullion price and volatility shock** (gold/silver records; West Asia war from 28-Feb-26; India's import duty to 15% on 13-May-26). Q4 FY26 was the peak (revenue ₹889 Cr, OP margin 75%); Q1 FY27 revenue fell **21% QoQ** to ₹702 Cr as volatility normalised, even though notional options ADT rose 72% QoQ [V ICICI; V screener]. ICICI Direct downgraded MCX to HOLD (7-Aug-26), arguing "the volatility-led surge has largely played out" [V].
- **IEX is the opposite: steady volumes, collapsing multiple.** Volumes keep compounding (FY26 **141.1 BU, +17%**; Q2 FY27 **39.7 BU, +12.7%**; H1 FY27 **77.2 BU, +14.2%**) [primer; V FPJ], but the stock is at **₹101, P/E 17.8×** (vs ~40×+ a year earlier and ₹121 in Jul-26) [V screener; primer] because **CERC's market-coupling** programme — order of **23-Jul-2025**, draft regulations of **17-Apr-2026** naming **Grid-India as sole Market Coupling Operator** — would pool all exchanges' bids into one national order book and dissolve IEX's liquidity moat [V-snip multiple].
  - Legal path: APTEL dismissed IEX's appeal (procedural grounds) **Feb-2026**; **Supreme Court refused an interim stay on 27-Jul-2026** and admitted the appeal for a merits hearing; CERC told the court the rules would be issued "shortly"/"within 4–6 weeks" [V-snip sahi 3-Aug-26, flagged unverified by the source]. **I could not confirm final notification of the regulations as of 25-Oct-2026** (CERC's site is JavaScript-rendered; no press report of notification found) — **treat as "draft, final notification awaited" and FLAG.**
- **Valuation: Indian exchanges trade at ~2× global peers' multiples.**
  - BSE **46.5× TTM / 53.0× FY26**; MCX **50.0× TTM / 57.8× FY26**; NSE **44.9× TTM / 40.1× FY26**; IEX **17.8× TTM / 18.3× FY26** [V screener; E].
  - Global: CME ~25.8×, ICE ~22.9×, Deutsche Börse ~27.9×, HKEX ~30.3×, Nasdaq ~29.8×, JPX ~34.0×, B3 ~23.0× TTM (Oct-2026) [V-snip aggregator companiesmarketcap].
  - The premium rests on growth (Indian exchanges compounded revenue 50–100%/yr in FY25–26 vs mid-single digits globally), margins (68–84% vs 55–70%), ROE (39–56% vs 10–30%), and scarcity (four listed exchange stocks in a large market). The discount at IEX shows how fast the market removes that premium when a regulator threatens the moat.
- **Regulation is the business model.** Every member's revenue = (activity) × (regulated or regulator-blessed fee). SEBI decides product approvals, expiry days, contract sizes, fees ("true-to-label"), position limits and clearing-fund rules; the Finance Ministry sets STT; CERC sets IEX's fee cap and may couple its market; RBI sets bank-guarantee rules that affect brokers' margin funding (Feb-2026 amendments, effective 1-Apr-2026) [V-snip]. **The 2024–26 record shows the regulator can (a) cut participation (SEBI F&O curbs), (b) redistribute share (expiry-day rules), (c) raise costs (notional-based regulatory fee), and (d) dissolve a moat (coupling).**

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Services (by member)

| Service | What it is | Who pays | Members (and NSE context) |
|---|---|---|---|
| **Equity index options** | Weekly/monthly options on Sensex (BSE), Nifty (NSE), Bankex, Sensex 50/Next 30, Focused Midcap, Focused IT (BSE, launched May-26) | Trading members (passed through to clients) — fee on premium, both sides | BSE (Sensex weekly expiry Thursday); NSE (Nifty weekly Tuesday) |
| **Equity futures** | Index & stock futures | Fee on notional | NSE ~100% share; BSE futures charge ~nil [K] |
| **Equity cash market** | Secondary trading in shares | Fee per ₹ lakh traded | NSE 93%; BSE ~7% (BSE cash ADTV ₹9,955 Cr Q1 FY27 vs NSE ₹1,19,617 Cr Q4 FY26) [V] |
| **Listing services** | Initial and annual listing fees; SME platforms | Issuers | BSE (SME leader; 2,979 companies listed on NSE vs BSE's ~5,500 incl. legacy [K]) |
| **Clearing & settlement** | Novation, margining, settlement guarantee via clearing corporations | Clearing members; investment income on margins | BSE Clearing (ex-ICCL), NSE Clearing (NCL), MCXCCL, IEX's in-house settlement |
| **Commodity derivatives** | Futures and options on gold, silver, crude, natural gas, copper, zinc, aluminium, electricity | Fee on notional (futures) and premium (options) | MCX (>98% of non-agri futures value); NSE (small, rising); NCDEX (agri) |
| **Electricity spot & term markets** | DAM (incl. HP-DAM), RTM, TAM/DAC, GDAM/GTAM, RECs | Buyers and sellers, ~2 p/kWh each | IEX (~84% of exchange volume), PXIL, HPX |
| **Electricity futures (financial)** | Monthly electricity futures under SEBI (launched Jul-2025) | Fee on notional | NSE (claims 72% by lots), MCX (claims ~55% by ADT, >70% OI) [V] |
| **MF order platform** | BSE StAR MF; NSE NMF II | AMCs/distributors per transaction | BSE StAR MF (₹285 Cr FY26 revenue; 234 mn orders Q1 FY27, +28%) [primer; V]; NSE MF platform 12.1 cr orders FY26 (+91%) [V] |
| **Market data, index licensing, co-location** | Data feeds, index licences (Sensex; Nifty), co-location racks, connectivity | Vendors, AMCs/ETFs, HFT/prop firms | BSE (co-location ₹51 Cr Q1 FY27; 500 racks) [V]; NSE (data connectivity ₹1,129 Cr; racks ₹205 Cr; 1,826 racks capacity) [V] |
| **Depository (associate)** | Holding securities in demat form | Issuers, DPs, investors | CDSL (BSE 15%); NSDL (NSE 15%) [V-sib] |
| **Gas exchange** | Physical gas spot trade | Members | IGX (IEX associate, being diluted to 25%) |

### 1.2 Value chain (an order's journey and who takes a slice)

1. **Client** places an order through a **broker** (₹20/order discount model) [V-sib stockbroking].
2. **Exchange** matches it and charges a **transaction fee** (options: ~₹3,250–3,500 per Cr of premium per side; IEX: 2 p/kWh per side).
3. **Clearing corporation** novates the trade, collects **margins** (SPAN + exposure + ELM; upfront premium for option buyers since Feb-2025), and guarantees settlement from member margins, its own **SGF/Core SGF** and capital.
4. **Depository** (CDSL/NSDL) moves securities on settlement (₹3.50/debit flat since Oct-2024) [V-sib].
5. **State** collects **STT** (0.15% of option premium sold; 0.05% of futures sold since 1-Apr-2026), **stamp duty**, **GST (18%)** on fees and **SEBI fees** [V-sib].
6. **Counterparties** — prop/algo desks and FPIs — take the trading P&L: FY26 gross profits **~₹44,000 Cr (prop)** and **~₹14,000 Cr (FPIs)** vs individuals' net loss **₹91,685 Cr** [V Finnovate].

**Illustrative split of ₹100 of costs on a ₹1 lakh option-premium round trip (buy + sell) at FY27 rates** [V-sib stockbroking, ILLUSTRATIVE]: STT ₹150; exchange charges ~₹70; brokerage ₹40; GST/stamp/SEBI ~₹23 — total **₹283**. **The exchange's take (~25%) is larger than the broker's on large tickets; on a ₹10,000 ticket the broker's ₹40 is 56% of the ₹71 cost.**

### 1.3 Where value is captured
- **At the exchange, not the broker, per rupee of activity.** Options transaction charges were **60.22% of NSE's FY26 operating revenue** [V-sib, from NSE offer document]; on NSE's own deck options = **₹9,996 Cr of ₹13,057 Cr transaction charges (77%)** [V].
- **The state captures more than the exchanges.** NSE alone collected **₹48,345 Cr of STT/CTT in FY26** (46% from equity derivatives) [V NSE PR] — 4.7× NSE's FY26 profit and 11× BSE+MCX+IEX combined PAT. STT paid by individual derivatives traders: **₹1,291 Cr (FY22) → ₹6,645 Cr (FY26)** [V-sib; V Finnovate].
- **Clearing earns float.** Investment income on clearing funds/margins is material: NSE "operating investment income" ₹842 Cr + "income on investments" ₹1,929 Cr (FY26) = 16.6% of total income [V].
- **Listing and data are the annuity.** NSE listing ₹352 Cr + data/index/connectivity ~₹1,956 Cr (FY26) ≈ 14% of revenue [V]. For BSE, listing (~₹500 Cr), StAR MF (₹285 Cr) and data/services (~₹280 Cr) ≈ 21% of FY26 revenue [primer, approx.].
- **IEX** captures ~1.1% of the value of power traded (4.3 p on a ₹3.86/kWh FY26 DAM price) [primer]; at Q2 FY27's ₹5.7/kWh the take falls to ~0.8% [E].

---

## 2. Size and growth

### 2.1 The listed revenue pool (₹ Cr, screener consolidated) [V screener; E sums]

| Year | BSE | MCX | IEX | Members total | NSE (context; rev ops) | All four |
|---|---|---|---|---|---|---|
| FY22 | 841 | 367 | 431 | 1,639 | 8,313 | 9,952 |
| FY23 | 925 | 514 | 401 | 1,840 | 11,856 | 13,696 |
| FY24 | 1,568 | 684 | 449 | 2,701 | 14,780 | 17,481 |
| FY25 | 3,212 | 1,113 | 537 | 4,862 | 17,141 | 22,003 |
| FY26 | 5,124 | 2,302 | 616 | 8,042 | 16,601 | 24,643 |
| FY22→FY26 CAGR | **57.2%** | **58.3%** | **9.3%** | **48.8%** | **18.9%** | **25.4%** |

- In USD: members' FY26 revenue **≈ $847 mn**; with NSE **≈ $2.6 bn** at ₹94.9/$ [E]. For scale, **CME's 2025 revenue was $6.52 bn and ICE's $12.64 bn (gross)** [V-snip aggregator]. India's four listed exchanges together are ~40% of CME's revenue but NSE is the **world's largest derivatives exchange by contracts (FIA, CY2025)** [V NSE PR] — the contract count is huge because Indian contracts are tiny.
- **Share of the pool (FY26):** NSE 67%, BSE 21%, MCX 9%, IEX 2.5% [E].
- PAT pool FY26: NSE ₹10,302 Cr; BSE ₹2,487 Cr; MCX ₹1,332 Cr; IEX ₹493 Cr → **₹14,614 Cr** [V; E]. **BSE + MCX profit grew from ₹355 Cr (FY23) to ₹3,819 Cr (FY26) — 10.8×.**

### 2.2 Activity pools (the real "market size")

| Pool | Latest | Growth | Source |
|---|---|---|---|
| NSE equity options premium ADTO | ₹57,662 Cr (FY26); ₹64,352 Cr (Q1 FY27); ₹76,375 Cr (Q4 FY26) | −7.7% FY26; +15.9% Q1 FY27 | [V-sib; V NSE PR] |
| BSE equity options premium ADTO | ₹8,977 Cr (FY25) → ₹19,522 Cr (FY26) → ₹29,615 Cr (Q1 FY27) | +118% FY26; +96% Q1 FY27 | [primer; V multibagg] |
| Industry index options premium ADTO | ~₹77,200 Cr (FY26, derived); ₹80,900 Cr (Jun-26, Jefferies) | ~+8% FY26 | [V-sib INDICATIVE; V] |
| NSE cash ADTV | ₹1,19,617 Cr (Q4 FY26) | +21% QoQ | [V NSE PR] |
| BSE cash ADTV | ₹9,955 Cr (Q1 FY27, record) | — | [V] |
| NSE equity futures ADTV | ₹1,77,891 Cr (Q4 FY26) | +17% QoQ | [V] |
| MCX F&O ADT (notional) | ₹10.49 lakh Cr (Q1 FY27) vs ₹3.11 lakh Cr (Q1 FY26) | +238% | [V] |
| MCX futures ADT | ₹27,153 Cr (FY25) → ₹64,407 Cr (FY26); ₹90,200 Cr (Q4 FY26); ₹59,674 Cr (Q1 FY27) | +137% FY26 | [primer; V] |
| MCX options premium ADT | ~₹1,600 Cr (FY24) → ₹3,131 Cr (FY25) → ₹6,534 Cr (FY26); ₹10,628 Cr (Q4 FY26); ₹9,086 Cr (Q1 FY27) | ~2× FY26 | [primer; V] |
| MCX annual traded value (F+O notional) | ₹276.6 lakh Cr (FY24) → ₹565.2 (FY25) → ₹773.8 lakh Cr (FY26) | +37% FY26 | [V ICICI Direct] |
| Power-exchange volume (all three) | 168.55 BU (FY26) | — | [V-snip CEA/CERC] |
| IEX electricity volume | ~120 BU (FY25) → 141.1 BU (FY26); 77.2 BU (H1 FY27) | +17%; +14.2% | [primer; V] |
| Short-term power as % of total electricity | 17.70% (FY26); PX 9.87% | — | [V-snip CEA/CERC] |
| India electricity consumption | 502 BU in Q2 FY27 (+11.5%); 162 BU in Sep-26 (+11%) | | [V FPJ, from IEX release] |

### 2.3 Growth outlook (no rating-agency forecast found; use these anchors)
- **ICICI Direct MCX forecasts:** revenue ₹2,948 Cr (FY27E), ₹3,324 Cr (FY28E); PAT ₹1,730 / ₹1,942 Cr; **2-yr CAGR ~20%** after 65% 3-yr CAGR [V]. Target multiple ~40× FY28E.
- **IEX:** volume growth ~12–17% (power demand + PPA migration + RTM), but share expected to taper (one brokerage: **75% FY28E → 60% FY30E**) [V-snip BS broker PDF].
- **BSE:** no guidance; consensus not fetched. Run-rate check: Q1 FY27 annualised revenue ₹6,264 Cr, PAT ₹3,492 Cr [E]; TTM PAT ₹2,822 Cr [V].
- **Pool-level:** Indian options premium has been flat-to-up in rupees despite curbs; growth now depends on (i) market level/volatility, (ii) SEBI's next step (weekly expiries), (iii) STT elasticity. **Do not extrapolate FY24–26 growth.**

---

## 3. Demand drivers and end-markets

1. **Retail participation (the volume base).**
   - Demat accounts: **~4 crore (Mar-2020) → 5.5 crore (Mar-2021) → 23.2 crore (Jun-2026)** [V-sib market-infra; K for Mar-20]. CDSL holds ~80% (18.01 crore, Mar-26) [V-sib].
   - Investor accounts registered: **~25.7 crore at NSE; 25.8 crore at BSE**; NSE **~13 crore unique registered investors** (Mar-26) [V NSE deck; V multibagg].
   - NSE active clients: **4.92 crore (Mar-25) → 4.57 crore (Mar-26)**, 4.61 crore (Sep-26) — the first annual fall of the app era [V-sib].
   - **Unique individual F&O traders: 106.2 lakh (FY25) → 87.5 lakh (FY26)**; new entrants 34.3 → 20.8 lakh [V].
   - MCX traded clients (F&O): **13.72 lakh in Q1 FY27 vs 7.03 lakh** a year earlier; ~20 lakh UCCs traded in FY26 [V ICICI/multibagg].
   - SIP inflows **₹32,490 Cr/month (Sep-26, record)**; MF unique investors ~6.2–6.3 crore; MF AUM **₹82.64 lakh Cr (Sep-26)** — feeds BSE StAR MF and listing/IPO demand [V-sib amc/market-infra].
2. **Market level and volatility.** Options premium rises with implied volatility; Q4 FY26 (West Asia war, Feb–Mar 2026 crash) drove record premium on NSE (₹76,375 Cr, +43% QoQ), MCX (₹10,628 Cr) and BSE (Q4 +49% QoQ) [V]. Q1 FY27 normalised (MCX −15% premium; BSE +2% QoQ).
3. **Commodity prices and policy.** Gold and silver at records; **import duty 6% → 15% on 13-May-2026** (10% BCD + 5% AIDC) after FY26 gold imports of a record **$71.98 bn (+24%)**; MCX gold futures jumped up to 7% intraday (~₹1,64,497/10 g) and silver 8% (~₹3,01,429/kg) that day [V-snip multiple]. Higher domestic premia raise hedging demand for jewellers and arbitrage activity, but higher prices also raise contract values (MCX launched **Silver 100 g** futures on 1-Jun-2026 and **Gold 10 g** for smaller tickets) [V].
4. **Primary markets.** NSE: **219 IPOs and ₹1.8 lakh Cr equity raised via IPOs in FY26**; total fund mobilisation ₹20.3 lakh Cr [V NSE deck]. BSE: >250 companies seeking ~₹1.75 lakh Cr in the pipeline; 13 mainboard IPOs raising ₹18,348 Cr in July-2026 [V multibagg]. NSE's own ₹22,562 Cr IPO and Jio Platforms' IPO (Oct-26) are the largest of the cycle.
5. **Power-market structure (IEX).** Demand growth (Q2 FY27 consumption +11.5%), renewable intermittency (RTM 16.5 BU in Q2 FY27, +10.5%; record 315 MU single-day RTM on 26-Sep-26), PPA expiry and DISCOM migration to short-term procurement, open-access C&I buyers and data centres [V; primer].
6. **Institutional and FPI participation.** MCX: ~220 FPIs, ~2.5% of ADT [V]; BSE targets more FPI participation in derivatives [V]. Prop/algo desks provide liquidity and are the largest gainers in index options (SEBI study).

---

## 4. Supply side and cost structure

### 4.1 Cost lines and their drivers
- **Technology** (matching engines, clearing systems, DR sites, software licences): NSE **₹1,315 Cr (7.9% of revenue)** FY26, +29% [V]; MCX software **₹105 Cr (4.6%)** [V ICICI]. Capacity is scaled ahead of demand: MCX now handles **3 bn+ messages/transactions a day vs <1 bn four quarters earlier**, with headroom to double [V ICICI].
- **Employees:** NSE **₹790 Cr (4.8%)**; MCX **₹180 Cr (7.8%)**; IEX ~₹50–55 Cr (~9%) [V; E for IEX from screener expenses ₹96 Cr].
- **Regulatory fees** (SEBI turnover fee, on notional): NSE **₹796 Cr (4.8%)** FY26; BSE: regulatory fee + clearing costs = **54% of opex** in Q1 FY27 [V].
- **Clearing & settlement costs, Core SGF contributions**: NSE Core SGF **₹234 Cr (FY25) → ₹1 Cr (FY26)** — lumpy; BSE reports EBITDA after Core SGF [V].
- **Legal/regulatory settlements:** NSE **SEBI settlement fees ₹1,432 Cr in FY26** (co-location + dark fibre, final ₹1,491.21 Cr) [V]. BSE: ₹170 Cr differential SEBI fee provision (FY24/25) [primer].
- **Marketing/advertising** (investor awareness, product launches): MCX **₹108 Cr (4.7%)** FY26, guided up to ₹167 Cr FY27E [V ICICI].
- **CSR** (2% of profits): NSE ₹230 Cr FY26 [V].
- **Depreciation**: BSE ₹159 Cr; MCX ₹78 Cr; IEX ₹23 Cr; NSE ₹624 Cr (FY26) [V screener].

### 4.2 "Where ₹100 of revenue goes" — three archetypes [E composites from FY26 screener + company decks]

| Line (₹ per ₹100 revenue) | Equity exchange — BSE | Equity exchange — NSE (context) | Commodity exchange — MCX | Power exchange — IEX |
|---|---|---|---|---|
| Regulatory fees + clearing/SGF + settlement | ~17 [E: 54% of ~32 opex] | ~5 reg fees + ~1 SGF | ~6 [E] | ~1 |
| Technology / software | ~5 [E] | ~8 | ~5 | ~3 [E] |
| Employees | ~5 [E] | ~5 | ~8 | ~9 |
| Advertising, CSR, other opex | ~5 [E] | ~10 (incl. ₹1,432 Cr settlement = 8.6) | ~9 | ~3 |
| **= Operating profit (screener OP)** | **68** | **68** | **71** | **84** |
| Depreciation | 3 | 4 | 3 | 4 |
| Other income (+) | +0.5 (screener) | +21 | +6 | +25 |
| Tax (~25%) | −16 | −22 | −15 | −26 |
| **= PAT** | **~49** | **~62** | **~58** | **~80** |

Notes: IEX's PAT exceeds 80% of revenue because other income (₹151 Cr treasury) is 25% of revenue. NSE's other income (₹3,417 Cr on screener basis incl. ₹1,201 Cr profit on sale of an associate stake) inflates its PAT ratio [V screener; V NSE deck].

### 4.3 Capacity
- Capacity is **messages per second, racks and DR**, not plant. NSE co-location capacity **1,826 full-rack equivalents**; BSE **500 racks** (sufficient ~1.5 years), now charging order-flow-based colo fees at ~20% of prevailing market rates [V].
- MCX: platform capacity >2× current peak [V]. Outages are the binding risk (§11): MCX had a **4-hour+ outage on 28-Oct-2025** (moved to DR, resumed 1:25 pm; root cause a predefined user-limit parameter) and a halt on **23-Jul-2025**; SEBI sought details/probe [V-snip BS/Outlook].
- IEX: auction engine capacity is not binding; RTM runs 48 half-hourly sessions a day [K].

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)

| Market | Leader | Share (basis, period) | Challenger(s) | Source |
|---|---|---|---|---|
| Equity cash | NSE | 93% (turnover, Q4 FY26) | BSE ~7% | [V NSE deck] |
| Equity futures | NSE | ~100% | BSE (negligible) | [V] |
| Equity index options | NSE | 73% (premium, Q4 FY26); 74.71% FY26; **68.48% Q1 FY27** | **BSE ~25% FY26, ~31.5% Q1 FY27, 32.4% Jun-26** | [V; V-sib; E] |
| Commodity derivatives (non-agri) | MCX | >98% of futures value; >99% in bullion, base metals, energy | NSE (small; commodity ADTO up ~10× FY22→FY26 off a tiny base), BSE (none since exit), NCDEX (agri) | [primer; V ICICI; V NSE deck] |
| Electricity futures (SEBI, since Jul-2025) | **Disputed** | NSE 72% (lots, Jul-25–Mar-26); MCX ~55% by ADT and >70% by OI (Q1 FY27) | — | [V both; conflict] |
| Physical power exchange | IEX | ~84% of all PX volume FY26 [E: 141.1/168.55 BU]; ~98–99% DAM | PXIL, HPX | [primer; V-snip CEA] |
| Currency derivatives | NSE | ~100% | BSE | [V] |
| MF order platform | BSE StAR MF (largest by orders) | — | NSE NMF II (12.1 cr orders FY26, +91%) | [primer; V] |
| Depositories | CDSL ~80% of demat accounts | — | NSDL | [V-sib] |

- **HHI** is extreme in every segment (>7,000 in equity cash, futures, commodity futures; ~5,000–6,000 in index options after BSE's gain) [E].
- **Market structure is a set of regulated duopolies/monopolies.** SEBI controls who can run an exchange (recognition under SCRA), and caps ownership (no single shareholder >5%, exchanges/banks/insurers ≤15% of an MII [K; V-sib]). New entrants have repeatedly failed: MSEI (Metropolitan Stock Exchange, ex-MCX-SX) never gained traction despite capital infusions [K]; PXIL (2008) and HPX (2022) never broke IEX's DAM liquidity [primer].

### 5.2 Unlisted and adjacent players (context)
- **NSE** — now listed (24-Sep-2026, BSE 544937) [V]. Ownership after IPO: FII 25.35%, DII 28.26%, public 46.39%; 29.46 lakh shareholders (Sep-26) [V screener]. Pre-IPO large holders included LIC, SBI, CPPIB, Temasek (Aranda), Morgan Stanley (MS Strategic) [V].
- **NCDEX** — agri-commodity exchange (NSE, LIC, NABARD, IFFCO, others) [K]; agri derivatives repeatedly suspended by SEBI (seven agri commodities suspended Dec-2021, extended several times) [K]. Not a threat to MCX in non-agri.
- **MSEI** — third equity exchange; recapitalised (2023–24) by a consortium; negligible volumes; plans to relaunch derivatives [K; unverified 2026 status].
- **PXIL** (Power Exchange India; NSE, NCDEX among backers) and **HPX** (Hindustan Power Exchange; PTC India, BSE, ICICI Bank) — IEX's physical-power rivals [primer]. **BSE owns a stake in HPX** [primer/K], so BSE is an indirect beneficiary of coupling.
- **India INX (BSE) and NSE IX (NSE)** at GIFT City IFSC — dollar-denominated derivatives; **NSE IX transaction revenue ₹112 Cr in FY26** [V NSE deck]; GIFT Nifty trading migrated from SGX to NSE IX in Jul-2023 [K].
- **CDSL** (BSE 15%), **NSDL** (NSE 15%; listed Aug-2025 [K]) — adjacent MIIs; see market-infra.html.
- **Clearing corporations**: NSE Clearing (NCL, AAA since 2008), BSE Clearing (ex-ICCL, renamed FY26), MCXCCL, NCDEX's NCCL [V; primer]. SEBI's interoperability (2019) lets members clear through any CC [K].

### 5.3 Why the structure is so concentrated (the network effect, and its regulatory limits)
- **Liquidity begets liquidity**: deepest order book → tightest spread → more traders. Fees are too small (₹3,250/Cr premium = 0.0325%) for a cheaper rival to win on price [primer].
- **The two times share moved, regulation moved it:** (1) BSE's Sensex revival (May-2023 relaunch of Sensex/Bankex derivatives with a Friday expiry and smaller lots) rode on SEBI-approved product design; (2) SEBI's **one-weekly-expiry-per-exchange rule (20-Nov-2024)** and **Tuesday/Thursday expiry mandate (Jun-2025; NSE moved to Tuesday from 1-Sep-2025, BSE to Thursday)** gave BSE a protected weekly slot [V-sib; V-snip]. (3) For IEX, **market coupling** is the regulator's way of moving share away from the incumbent.

---

## 6. Business-model archetypes and their economics

| Archetype | Member | Revenue driver | Fee basis | Margin (FY26 OP) | ROE (screener) | Cyclicality | Regulatory exposure |
|---|---|---|---|---|---|---|---|
| **Multi-asset equity exchange (#2)** | BSE | Index-options premium (~65% of revenue [E]), listing, StAR MF, data, clearing float, CDSL share | Premium (options), value (cash), per-company (listing) | 68% | 46% | High (retail options + volatility) | SEBI (products, expiry, fees), Finance Ministry (STT) |
| **Commodity derivatives monopoly** | MCX | Options premium (>2/3 of transaction fees by Q4 FY26) + futures notional | Premium/notional | 71% | 56% | Very high (commodity price volatility, bullion cycle) | SEBI (products, position limits), customs duty (gold), RBI (bank guarantees) |
| **Physical power exchange** | IEX | Volume (BU) × 2 p/kWh/side | Volume, not value | 84% | 39% | Low (volume compounding) | **CERC: fee cap + coupling** |
| **Dominant multi-asset exchange (context)** | NSE | Options premium (77% of transaction charges), cash, futures, data, listing, clearing float | as BSE | 68% (screener) / 67% company | 29–33% | High | SEBI + Finance Ministry |

**Economic differences that matter for the writer:**
- **BSE's leverage is to share × industry premium.** A 1-point gain in options share ≈ ₹770 Cr/day of premium ≈ **₹125 Cr of annual transaction revenue** at ₹6,500 per Cr (two sides) × 248 days [E].
- **MCX's leverage is to volatility.** Premium per unit of notional fell from 1.03% to 0.35% in one quarter; revenue fell 21% QoQ while traded notional rose [V]. MCX also has the lowest regulatory-cost burden per rupee of revenue.
- **IEX's leverage is to volume and is regulator-capped on price.** Revenue/unit ~4.3–4.4 p (both sides) [E]; a cut to 1.5 p/side (reported CERC consideration) would take ~25% off revenue at flat volume [primer; V-snip BS Dec-2025 "CERC mulls moderation in power trading fee"].
- **Treasury/float** is 0.5–25% of revenue depending on the member's accounting (trap 7).

---

## 7. Regulation and policy

### 7.1 SEBI's equity F&O measures (Oct-2024 → 2025) and their effect on BSE vs NSE
The SEBI circular of **1-Oct-2024** ("Measures to strengthen equity index derivatives framework for increased investor protection and market stability") was phased in from 20-Nov-2024 [V-sib stockbroking; K]:

| # | Measure | Effective | Effect on exchanges |
|---|---|---|---|
| 1 | Minimum contract value ₹15 lakh at introduction (from ₹5–10 lakh); lot sizes reset | 20-Nov-2024 | Fewer contracts; premium per contract up |
| 2 | **One weekly expiry per exchange** on one benchmark index (NSE: Nifty; BSE: Sensex) | 20-Nov-2024 | Killed Bank Nifty/FinNifty/Midcap weeklies on NSE and Bankex weekly on BSE → share shifted to BSE |
| 3 | Extra 2% ELM on short options on expiry day | 20-Nov-2024 | Raises expiry-day writing cost |
| 4 | Upfront collection of option premium from buyers | 1-Feb-2025 | Removes intraday leverage on premium |
| 5 | Calendar-spread margin benefit removed on expiry day | 1-Feb-2025 | Raises spread margins |
| 6 | Intraday monitoring of position limits (≥4 snapshots/day) | 1-Apr-2025 | Large players |
| 7 | Delta-based OI, new MWPL, index-option limits (₹1,500 Cr net / ₹10,000 Cr gross delta), futures pre-open, stricter eligibility for non-benchmark indices | Circular 29-May-2025; phased Jul–Dec 2025 | Prop/institutional; anti-manipulation (post Jane Street order, Jul-2025 [K]) |
| 8 | **Expiry days restricted to Tuesday or Thursday**; NSE → Tuesday, BSE → Thursday; non-benchmark contracts minimum 1-month tenor; prior SEBI approval to change expiry day | Decided Jun-2025; NSE moved 1-Sep-2025 | BSE's share jumped; record 56% on 4-Sep-2025 [V-snip] |
| — | "True-to-label" uniform charges (no volume slabs) | Circular 1-Jul-2024; effective 1-Oct-2024 | Exchanges reset fee schedules (BSE Sensex options ₹3,250/Cr; NSE ~₹3,503/Cr) [primer; K] |

- **2026:** **No new SEBI F&O circular found for 2026** [V-snip search]. The live overhang is SEBI's stated intent (Sep-2025, chairman Tuhin Kanta Pandey) to consult on **lengthening derivative tenure / ending weekly expiries** with a "glide path" — no paper published as of Oct-2026 [V-snip Outlook Money/5paisa]. BSE fell 4.5–8% on those reports. **Writer: frame weekly expiries as the single largest regulatory risk to BSE (and to NSE).**
- **Effect on BSE vs NSE share** (premium): NSE 96.86% (FY24) → 87.43% (FY25) → 74.71% (FY26) → 68.48% (Q1 FY27) [V-sib from NSE offer document]. BSE: 3% → 13% → 25% → 31.5% [E]. June 2026: BSE 32.4%, dented by an extra NSE weekly expiry (five Tuesdays) [V Jefferies].

### 7.2 STT (Finance Ministry) — two hikes in 18 months [V-sib stockbroking: Union Budgets Jul-2024 and 1-Feb-2026; K PIB]

| Instrument (STT on sell side) | To 30-Sep-2024 | 1-Oct-2024 → 31-Mar-2026 | From 1-Apr-2026 | Multiple since Sep-24 |
|---|---|---|---|---|
| Futures (% of value) | 0.0125% | 0.02% | **0.05%** | ×4.0 |
| Options (% of premium) | 0.0625% | 0.10% | **0.15%** | ×2.4 |
| Exercised options (% of intrinsic value) | 0.125% | 0.125% | **0.15%** | ×1.2 |

- Budget-day (1-Feb-2026) reaction: BSE, CDSL, Angel One −6–8%; Groww −13.85% intraday [V-sib]. Commentators estimated a 20–30% F&O volume hit.
- **Elasticity so far ≈ zero for premium turnover:** NSE Q1 FY27 premium ADTO **+15.9% YoY**; BSE **+96% YoY** [V]. Contract counts and futures are more elastic (futures STT ×2.5 on Apr-26). BSE management cited the STT increase as a regulatory change without quantifying it [V multibagg].
- **Per-trade arithmetic:** selling ₹1 lakh of option premium costs ₹150 STT (was ₹62.50); selling a ₹15 lakh futures contract costs ₹750 (was ₹187.50) [V-sib].
- **Note:** STT is collected by exchanges' clearing corporations and passed to the government; it is not exchange revenue. **CTT (commodity transaction tax)** on MCX non-agri futures is 0.01% and on options 0.05% of premium [K; verify whether Budget-2026 changed CTT — not found].

### 7.3 Exchange fees, regulatory fees, SGF
- **True-to-label (SEBI circular 1-Jul-2024, effective 1-Oct-2024):** MIIs must charge uniform published fees; no volume slabs/rebates to brokers [V-sib].
- **Current schedules [K/V-snip — verify on exchange circulars before quoting exactly]:** NSE options ₹3,503/Cr premium; NSE futures ₹173/Cr; NSE cash ₹297/Cr. BSE Sensex/Bankex options ₹3,250/Cr premium; other BSE options ₹500/Cr; BSE futures nil. MCX non-agri futures ₹210/Cr (₹2.10 per lakh); MCX options ₹4,180/Cr of premium (₹41.80 per lakh) — **the MCX Q4 FY26 cross-check works: options fees ~₹569 Cr ÷ (₹10,628 Cr × ~62 days) ≈ ₹8,640/Cr two-sided ≈ 2 × ₹4,180–4,320; futures ~₹242 Cr ÷ (₹90,200 Cr × 62) ≈ ₹433/Cr ≈ 2 × ₹210** [E]. IEX: ≤2 p/kWh per side (CERC cap) [primer].
- **SEBI turnover fee:** levied on notional value for options; BSE was directed (Apr-2024) to pay on notional from FY07 onward with interest; SEBI applied a 10-year limitation and allowed instalments [primer]. NSE paid ₹1,008 Cr of SEBI fees in FY26 [V].
- **SGF/Core SGF:** SEBI's 2014 framework (amended) requires the CC's Core SGF ≥ the stress-test-based minimum required corpus; contributions: CC ≥50%, exchange ≥25%, members ≤25% [K]. Exchanges also transfer 25% of profits? — **No**: the old "25% of profits to SGF" rule was replaced; NSE Core SGF contribution FY26 ₹1 Cr vs ₹234 Cr FY25 [V]. MCXCCL SGF ₹1,367 Cr [V].

### 7.4 Commodity-specific (MCX)
- SEBI regulates commodity derivatives since FMC's merger (28-Sep-2015) [K].
- **Gold & silver import duty 15% (13-May-2026)** [V-snip]; the duty differential widens domestic premia and arbitrage vs international prices (MCX contracts reference domestic prices incl. duty).
- **Electricity futures** (SEBI–CERC jurisdiction settled in 2021 Supreme Court/ MoU; launched by NSE and MCX in Jul-2025) [V NSE deck; K MCX date 14-Jul-2025].
- **Coal exchange**: SEBI approval for MCX to set up a coal exchange (Apr-2026) [primer]; MCX Coal Exchange of India incorporated [V]. IEX's Indian Coal Exchange (Jun-2026) [primer]. The Ministry of Coal's coal-exchange framework (draft rules 2025) [K; unverified].
- **AMCs referencing MCX bullion price** for gold/silver ETF valuation (>15 AMCs, following a regulatory directive) [V ICICI].
- **Agri suspensions** (NCDEX/MCX agri) since Dec-2021 [K].

### 7.5 Power-market regulation (IEX) — the coupling timeline [V-snip unless marked]
- **CERC (Power Market) Regulations, 2021** provided for market coupling [K].
- **23-Jul-2025:** CERC order — DAM coupling **by January 2026**, in **round-robin** among the three exchanges plus Grid-India as MCO; Grid-India to pilot TAM coupling; RTM coupling "under review". IEX fell ~28–29% the next day [V-snip upstox/BS].
- **Aug-2025:** IEX appealed to APTEL; APTEL directed an amended plea adding Grid-India, PXIL, HPX as respondents (Oct-2025) [V goodreturns 28-Oct-2025].
- **Dec-2025:** CERC reported to be considering moderating the exchange transaction fee (from 2 p/side toward ~1.5 p; ~1.25 p for TAM) [V-snip BS 28-Dec-2025 headline; primer].
- **Jan-2026:** CERC corrigendum recast the July "order" as "directions" [V-snip scanx]. The January 2026 go-live did not happen.
- **Feb-2026:** APTEL dismissed IEX's appeal on procedural grounds [V-snip sahi].
- **17-Apr-2026:** Draft **CERC (Power Market) (Second Amendment) Regulations, 2026** — **Grid-India as sole MCO**; exchanges validate, anonymise and forward bids; MCO maximises economic surplus, publishes uniform MCP with market splitting under congestion; DAM, RTM "and other segments from dates to be notified"; Grid-India to frame the Power Market Coupling Procedure within **six months of notification**; comments to 16-May-2026. IEX −7.5% intraday to ₹127.50 on 20-Apr [V-snip SolarQuarter/Indian Infrastructure/PowerPeak]. NSE publicly welcomed the draft [V-snip NSE media coverage title].
- **27-Jul-2026:** Supreme Court declined interim stay; admitted appeal for merits hearing; CERC said rules would come "shortly" / "within 4–6 weeks" [V-snip sahi, flagged unverified by source].
- **As of 25-Oct-2026: final notification not confirmed** [FLAG]. If notified in ~Aug–Sep 2026, the six-month procedure clock runs to ~Feb–Mar 2027, so **coupled DAM go-live is unlikely before H1 FY28** [E].
- **Price caps:** CERC/Grid-India ceiling of **₹10/kWh** on DAM/RTM (₹20/kWh for HP-DAM) [K]. Q2 FY27 DAM average ₹5.7/kWh, Sep-26 ~₹7.3/kWh (+105% YoY per one report) [V; V-snip] → cap binding in evening blocks is plausible [E].

### 7.6 RBI and others
- **RBI's Feb-2026 amendments** to bank credit facilities for capital-market intermediaries (effective 1-Apr-2026; one source says 1-Jul-2026): bank guarantees to exchanges/CCs must be ≥50% collateralised with ≥25% cash; prop-trading guarantees fully secured with ≥50% cash; 40% haircut on equity collateral; no bank funding of brokers' own-account purchases [V-snip]. BSE and MCX both flagged it as a Q2 FY27 factor; MCX saw "no significant detriment yet" [V].
- **Ownership caps:** no person >5% of an MII; stock exchanges, depositories, banks, insurers, PFIs up to 15% [K] — why BSE holds exactly 15% of CDSL and NSE 15% of NSDL [V-sib].
- **Listing rule:** an exchange cannot list on itself → BSE on NSE; NSE on BSE [V].

---

## 8. History and cycles (narrative; full timeline in §G)
- **1875–1994: BSE's monopoly era.** Open-outcry floor; brokers' club; Sensex launched 1986 [primer].
- **1992–2000: NSE disrupts.** Harshad Mehta scam (1992) → SEBI statutory; NSE (1994) with screen-based nationwide trading; NSE overtook BSE in cash within ~a year (NSE "largest by turnover every year since 1995") [V NSE PR]. Derivatives: index futures (2000), options (2001) — NSE won both.
- **2003–2013: commodity and power exchanges born.** MCX (2003, FTIL), NCDEX (2003); IEX (2008, FTIL + PTC), PXIL (2008). MCX IPO Feb-2012 (first listed exchange). **NSEL payment scandal (Jul-2013)** → FTIL declared "not fit and proper" → forced exit from MCX and IEX [primer; K].
- **2015–2019: consolidation under SEBI.** FMC merged into SEBI (Sep-2015). BSE IPO (Feb-2017, on NSE), IEX IPO (Oct-2017, ₹1,650 issue price [K]), CDSL IPO (Jun-2017). **NSE co-location case** (2015 whistle-blower → SEBI orders 2019; ₹625 Cr disgorgement) derailed NSE's IPO (DRHP Dec-2016 withdrawn) [K].
- **2020–2024: the retail options boom.** Pandemic-era demat explosion (4 → 15 crore by Mar-24); weekly index options; RTM launched (Jun-2020); green markets (2020–21). **BSE relaunched Sensex/Bankex derivatives May-2023**; MCX migrated to CDP (16-Oct-2023). SEBI study (Jan-2023): 89% of individual F&O traders lost money in FY22 [K]. Sep-2024 study: 93% lost over FY22–FY24 (~₹1.8 lakh Cr aggregate) [K].
- **2024–2026: SEBI curbs, share shift, STT hikes, NSE listing.** True-to-label (Oct-2024); six-measure circular (Oct-2024); expiry-day mandate (2025); SEBI fee on notional for BSE (Apr-2024); **CERC coupling order (Jul-2025)**; NSE settlement (₹1,491 Cr) and **NSE IPO/listing (Sep-2026)**; **Budget-2026 STT hike (Apr-2026)**; gold duty 15% (May-2026). BSE's PAT went ₹206 Cr (FY23) → ₹2,487 Cr (FY26); MCX ₹149 Cr → ₹1,332 Cr; IEX ₹306 Cr → ₹493 Cr [V screener].
- **Cycles:** exchange revenue tracks (i) retail participation waves (2003–08, 2020–24), (ii) volatility spikes (2008, 2020, Q4 FY26), (iii) regulatory resets (2013 NSEL; 2024–25 F&O curbs). Profit troughs: BSE FY20 (PAT ₹121 Cr), MCX FY24 (₹83 Cr, software), IEX flat FY22–23 (high power prices, price caps) [V screener].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands

| KPI | Definition / formula | BSE | MCX | IEX | NSE (context) |
|---|---|---|---|---|---|
| Options premium ADTO | Premium traded ÷ trading days | ₹19,522 Cr (FY26); ₹29,615 Cr (Q1 FY27) [primer; V] | ₹6,534 Cr (FY26); ₹9,086 Cr (Q1 FY27) [primer; V] | n/a | ₹57,662 Cr (FY26); ₹64,352 Cr (Q1 FY27) [V-sib] |
| Notional ADTO | Contract value ÷ days | n/s (Jefferies prem/notional 12.5 bps → notional ≈ ₹237 lakh Cr/day in Q1 FY27 [E]) | Options ₹9.90 lakh Cr; futures ₹59,674 Cr (Q1 FY27) | n/a | n/s |
| Market share | Own ADTO ÷ industry (same basis) | 31.5% options premium (Q1 FY27) [E] | >98% non-agri futures | ~84% of PX volume FY26 [E] | 68.5% options premium; 93% cash |
| Yield (take rate) | Transaction revenue ÷ turnover | ~₹6,470 per Cr premium, two sides [E] | ~₹8,600/Cr premium (options), ~₹430/Cr notional (futures) [E] | ~4.3–4.4 p/kWh both sides [E] | ~₹6,990/Cr premium [E] |
| OP (EBITDA) margin | Screener OP ÷ revenue | 68% FY26; 67% Q1 FY27 | 71% FY26; 70% Q1 FY27 | 84% FY26; 83% Q1 FY27 | 68% FY26 (company 67%); 78% Q1 FY27 |
| Incremental margin | ΔOP ÷ Δrevenue | 84% FY25→26 [E: 1,604/1,912] | 83% [E: 977/1,189] | 83% [E: 66/79] | n.m. (revenue fell) |
| Regulatory + clearing cost / revenue | | ~17% [E] | ~6% [E] | ~1% [E] | ~6% |
| Employee cost / revenue | | ~5–7% [E] | 7.8% [V] | ~9% [E] | 4.8% [V] |
| Tech cost / revenue | | ~5% [E] | 4.6% software [V] | ~3% [E] | 7.9% [V] |
| Treasury/other income / PAT | | ~1% screener (OI ₹24 Cr; but large clearing-fund income in revenue) | 9.5% | 31% | 33% (screener OI ₹3,417 Cr) |
| ROE | Screener | 46% | 56.3% | 39.4% | 28.6% |
| P/E | Screener TTM | 46.5× | 50.0× | 17.8× | 44.9× |
| Clients | | Investor a/c 25.8 cr (registered) | Traded clients 13.72 lakh (Q1) | 8,000+ participants [primer] | ~13 cr unique investors; 4.61 cr active |

### 9.2 Operating leverage (the whole story)
- BSE: revenue **+3.3× FY24→FY26** (₹1,568 → ₹5,124 Cr); expenses **+1.9×** (₹857 → ₹1,644 Cr); OP **+4.9×** (₹711 → ₹3,480 Cr) [V screener].
- MCX: revenue **+3.4×** (₹684 → ₹2,302 Cr); expenses **+1.06×** (₹621 → ₹660 Cr, flattered by the software exit); OP **26×** [V].
- IEX: revenue **+1.37×**; expenses +1.33×; OP +1.38× — mature, already at 84% [V].
- **Reverse leverage:** MCX Q1 FY27 revenue −21% QoQ → OP −26% QoQ → PAT −22% [V ICICI]. A 30% fall in BSE's premium ADTO from the Q1 FY27 run-rate would cut annualised revenue by ~₹1,600 Cr and OP by ~₹1,400 Cr (−33%) at ~85% incremental margin [E].

### 9.3 Sensitivities [E]
- **BSE:** ±₹1,000 Cr/day of premium ADTO ≈ ±₹161 Cr annual revenue (₹6,500/Cr × 248 days) ≈ ±₹115 Cr PAT (after ~85% incremental margin and 25% tax). ±1 pt of index-options share at an ₹80,000 Cr/day industry ≈ ±₹129 Cr revenue.
- **MCX:** ±₹1,000 Cr/day of options premium ≈ ±₹220 Cr revenue (₹8,600/Cr × ~255 days); ±₹10,000 Cr/day of futures notional ≈ ±₹110 Cr revenue (₹430/Cr × 255) — **options matter 20× more per rupee of ADT**.
- **IEX:** ±10 BU ≈ ±₹43 Cr revenue ≈ ±₹30 Cr PAT; fee cut 2.0 → 1.5 p/side ≈ −₹150 Cr revenue (−25%) and ≈ −₹115 Cr PAT (−23%) at flat volume; coupling share loss 84% → 60% at flat market ≈ −29% volume.

---

## 10. Global lens

### 10.1 Peer table (USD; market cap Oct-2026; P/E TTM) [V-snip companiesmarketcap unless marked; margins K]

| Exchange | Country | M-cap ($ bn, Oct-26) | Revenue ($ bn, latest FY / TTM) | Op/EBITDA margin (approx.) | P/E TTM | Notes |
|---|---|---|---|---|---|---|
| CME Group | US | 109.9 | 6.52 (2025) / 6.77 TTM | ~65–70% adj. op [K] | 25.8 | Futures/options; rates, equity, energy, metals |
| ICE | US | 91.4 | 12.64 gross (2025) / 13.42 TTM | ~58–60% adj. op [K] | 22.9 | Exchanges + fixed income/data + mortgage tech |
| Deutsche Börse | DE | 63.6 | 7.55 (2024) [aggregator; check] | ~55% EBITDA [K] | 27.9 | Eurex, Clearstream, Qontigo/SimCorp |
| HKEX | HK | 59.7 | 3.19 TTM | ~75–78% EBITDA [K] | 30.3 | Stock Connect, LME |
| Nasdaq | US | 57.3 | 8.27 gross (2025) | ~55% adj. op on net revenue [K] | 29.8 | Increasingly software (Adenza) |
| LSEG | UK | n/a (fetch blocked) | ~£8.5 bn [K] | ~48% EBITDA [K] | n/a | Data & analytics heavy |
| B3 | BR | 23.4 | 1.83 (2025) / 2.03 TTM | ~60–65% EBITDA [K] | 23.0 | Closest EM analogue (equity+derivs monopoly) |
| SGX | SG | 17.4 | 0.75 TTM [aggregator; stale] | ~55–60% [K] | 51.3 (suspect, stale data) | Lost GIFT Nifty to NSE IX (2023) |
| JPX | JP | 14.3 | 1.07 TTM | ~55–60% op [K] | 34.0 | TSE, OSE |
| **NSE** | IN | **43.5** [E: ₹4,12,966 Cr ÷ 94.9] | 1.75 (FY26 rev ops) [E] | 68% (screener OP) | **44.9** | World's largest by contracts |
| **BSE** | IN | **13.9** [E] | 0.54 [E] | 68% | **46.5** | |
| **MCX** | IN | **8.1** [E] | 0.24 [E] | 71% | **50.0** | World's largest commodity options exchange by contracts (FIA 2025, per MCX) [primer, unverified] |
| **IEX** | IN | **0.95** [E] | 0.065 [E] | 84% | **17.8** | |

**Read:**
- **BSE ($13.9 bn) is now about the size of JPX ($14.3 bn) on ~half of JPX's revenue, and MCX ($8.1 bn) is worth ~half of SGX**; NSE ($43.5 bn) is worth ~40% of CME and more than B3 + SGX + JPX combined [E].
- **Indian margins are higher** (68–84% vs 50–70%) because (i) no cost-heavy data/analytics businesses, (ii) cheap labour, (iii) monopoly/duopoly pricing within a regulated fee. **Indian ROEs (39–56%) are 2–4× global** because capital needs are tiny and payout ratios moderate.
- **Multiples ~2× global** reflect growth (FY24→FY26 revenue CAGR: BSE 81%, MCX 83% vs global mid-single-digit) and domestic scarcity premium (Indian institutional money has few listed MII stocks: BSE, MCX, IEX, CDSL, CAMS, KFin, NSDL, now NSE). **The supply of exchange paper just rose sharply with NSE's listing (₹4.1 lakh Cr m-cap)** — a possible headwind to BSE's scarcity premium [E — writer's judgement].
- **Global lesson for BSE:** exchange revenue mixes that rely on one retail product (e.g. Korea's KOSPI 200 options after 2011–12 multiplier increase; Taiwan weeklies) have seen volumes fall 50–80% after regulators raised contract sizes [K — Korea's KOSPI 200 options volume fell sharply after the 2012 multiplier increase from 100,000 to 500,000 won]. India's curbs so far reduced contracts but not premium.

### 10.2 Market coupling abroad (IEX lens)
- EU day-ahead markets have been coupled since 2014 (PCR/SDAC; "NEMOs" — multiple exchanges e.g. EPEX SPOT, Nord Pool compete within one coupled book) [K]. **After the EU allowed multiple NEMOs (CACM, 2015), incumbents kept most volume for years**, competing on fees and services [K; primer]. This is IEX's bull case.
- Differences in India: one state-owned MCO (Grid-India) rather than exchange-run PCR algorithm; DISCOM buyers concentrated; fee cap already low [E].

---

## 11. Technology and disruption risks
1. **Outages and SEBI's MII tech norms.** MCX: 23-Jul-2025 halt; **28-Oct-2025 4-hour+ outage** (DR invoked; root cause "predefined limit on simultaneous users / UCC reference-data parameter"); SEBI sought details; penalty possible [V-snip BS/Outlook]. ICICI Direct lists "technical breakdown… recent couple of glitches" as a key risk (Aug-2026) [V]. NSE had the 24-Feb-2021 four-hour outage [K]. SEBI's framework for MIIs (business continuity, RTO 30 min for critical systems; root-cause timelines) can impose penalties and cap compensation [K].
2. **Co-location and fairness.** NSE's co-location/dark-fibre cases (2015–2026) ended with a **₹1,491.21 Cr settlement** (₹1,223.56 Cr co-location + ₹267.65 Cr dark fibre; NSE paid ₹776.47 Cr earlier + ₹714.74 Cr balance) and Supreme Court disposal [V-snip moneylife/outlookbusiness]; NSE expensed ₹1,432 Cr of SEBI settlement fees in FY26 [V]. BSE has begun charging co-location by order flow [V]. Algo/HFT share is high; SEBI's retail-algo framework (2025) [K].
3. **Platform dependency.** MCX's 63 Moons dispute (2014–2023) shows the cost of not owning the stack; now owned (TCS-built) [primer]. BSE's matching engine (in-house/ex-Eurex partnership heritage) and BSE ending the Deutsche Börse market-data distribution partnership from **1-Jan-2027** to distribute data itself [V multibagg].
4. **Market coupling (IEX)** is a technology-enabled regulatory disruption: the MCO algorithm, not the exchange, discovers the price [V-snip].
5. **Competition by product innovation:** NSE in commodities (electricity, gold 10 g, Electronic Gold Receipts; S&P Platts collaboration; ₹100 Cr capital infusion in commodity sub) [V NSE deck]; BSE in new indices (Focused IT, Midcap, Sensex Next 30/50) [V; primer]; MCX in mineral/coal exchanges [V].
6. **Tokenisation/crypto/24×7 trading** — not material for India's regulated exchanges in the forecast horizon [E]; GIFT City (NSE IX, India INX) is the offshore extension.
7. **Cyber risk** — CDSL/NSDL/exchanges are critical information infrastructure; no major 2026 incident found [E].

---

## 12. What to watch

| Indicator / event | Date / frequency | Why it matters | Current reading |
|---|---|---|---|
| **IEX Q2 FY27 results** | **29-Oct-2026** | First quarter with IGX moving to associate; coupling commentary | Q2 volume 39,685 MU (+12.7%) [V] |
| **MCX Q2 FY27 results** | **3-Nov-2026** | Options premium after Q1 normalisation; RBI BG impact; electricity futures | Q1 premium ADT ₹9,086 Cr [V] |
| **NSE Q2 FY27 results** (first as listed co.) | **3-Nov-2026** | Options share; BSE comparison | Q1 FY27 PAT ₹3,120 Cr [V] |
| **BSE Q2 FY27 results** | **4-Nov-2026** | Premium ADTO vs Q1 ₹29,615 Cr; share >31%? | Jun ₹26,200 Cr; Aug −12% MoM [V; V-snip] |
| SEBI paper on weekly expiries / tenure | Any time | Largest risk to BSE & NSE | Signalled Sep-2025; nothing issued [V-snip] |
| Monthly NSE/BSE premium ADTO and share (Jefferies/Motilal monthly notes; exchange data) | Monthly | Share trend | BSE 32.4% Jun-26 [V] |
| **CERC final notification of Power Market (2nd Amdt) Regs 2026**; Grid-India's coupling procedure (6 months later); Supreme Court merits hearing | Pending | IEX's moat | Draft 17-Apr-26; SC no stay 27-Jul-26 [V-snip] |
| CERC fee order (2 p → 1.5 p?) | Pending | IEX revenue −25% risk | Reported Dec-2025 [V-snip] |
| IEX monthly volumes (first week of each month) and DAM/RTM prices | Monthly | Volume runway; price-cap binding | Sep-26 12,220 MU (+10.4%); DAM ~₹7.3 [V; V-snip] |
| CEA/CERC market monitoring (IEX share) | Annual/monthly | Share vs PXIL/HPX | FY26 PX total 168.55 BU [V-snip] |
| Gold/silver prices; import duty; volatility (MCX premium/notional ratio) | Daily | MCX revenue | Bullion prem/notional 0.35% Q1 FY27 [V] |
| Budget 2027 (1-Feb-2027): STT/CTT | Feb-2027 | Another hike? | Options 0.15%, futures 0.05% [V-sib] |
| NSE lock-in expiries (50% anchor 21-Oct-26; 90-day ~21-Dec-26) | Oct–Dec 2026 | Supply of exchange paper | NSE ₹1,669 vs issue ₹1,785 [V; V-snip] |
| BSE MD & CEO succession | ~Jan-2027 | Strategy continuity | Ad 22-Oct-26 [V] |
| IGX IPO (SEBI observation 12-Oct-26) | H2 FY27 | IEX one-off gain; valuation marker | [V] |
| SEBI FY27 F&O loss study | ~Jul–Sep 2027 | Political pressure | FY26: 87.7%, ₹91,685 Cr [V] |
| RBI bank-guarantee rules (effective Apr/Jul-2026) | Q2–Q3 FY27 | Prop/broker margin costs → volumes | "No significant detriment yet" (MCX) [V] |
| Coal exchanges (MCX, IEX), MCX Mineral Exchange | FY27–28 | New pools | Incorporated [V] |
| Interest rates (repo 5.50% after 7-Oct-26 hike) | | Treasury/float income | +25 bp tailwind [E] |

---

## A. The forces that define this sub-sector (what an expert leads with)

1. **SEBI holds the volume tap — and has learned to redistribute share, not just cut activity.** The Oct-2024 package cut individual F&O traders by 18% in FY26 but premium turnover held (NSE −7.7% FY26, +15.9% Q1 FY27) because larger, more active traders replaced small ones. The one-weekly-expiry and Tuesday/Thursday rules converted the NSE monopoly into a *regulated expiry-day duopoly* and moved BSE from ~3% to ~31.5% of options premium in three years. The next lever — ending or lengthening weekly expiries — is the largest single risk to BSE (and NSE).
2. **Operating leverage on a fixed cost base makes these the highest-margin businesses in Indian equities — in both directions.** Incremental margins of 83–84% FY25→26 (BSE, MCX, IEX) [E]; MCX's Q1 FY27 shows the reverse (revenue −21% QoQ, OP −26%). Volume is destiny; regulatory and clearing costs (BSE 54% of opex) are the only costs that scale.
3. **Retail options are the product; volatility is the fuel.** Options are 77% of NSE's transaction charges and >2/3 of MCX's (Q4 FY26). Premium per unit of notional moves with implied volatility (MCX bullion 1.03% → 0.35% in one quarter). The FY26 records were partly a West-Asia/bullion volatility windfall.
4. **The state's take keeps rising.** Two STT hikes in 18 months (options ×2.4, futures ×4 since Sep-2024); NSE alone remitted ₹48,345 Cr STT/CTT in FY26. SEBI's own fee moved to notional (Apr-2024). So far premium turnover shows near-zero elasticity, but the policy direction is one way, backed by SEBI's loss studies (87.7% loss-makers FY26).
5. **A regulator can dissolve a moat without a competitor spending a rupee (IEX).** Market coupling with Grid-India as sole MCO pools the order book; IEX's 98–99% DAM share stops being self-reinforcing. IEX's P/E (17.8×) is the market's estimate of that; BSE/MCX at ~50× price no such risk.
6. **NSE's listing re-prices the space.** A ₹4.1 lakh Cr, 44.9× P/E, 68%-share-of-options incumbent is now a listed comparable — ending BSE's status as the only listed equity-exchange play and creating a direct relative-value trade (BSE at 46.5× vs NSE at 44.9× TTM despite NSE's larger, more diversified franchise).

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The expiry-day duopoly": how SEBI's rules rebuilt BSE
- Data: NSE premium share 96.86 → 87.43 → 74.71 → 68.48% (FY24 → Q1 FY27) [V-sib]; BSE premium ADTO ₹8,977 → ₹19,522 → ₹29,615 Cr [primer; V]; BSE record 56% on 4-Sep-2025 [V-snip]; June-2026 dip to 32.4% on a five-Tuesday month [V].
- Mechanism: one weekly contract per exchange (Nov-2024) + fixed days (NSE Tue, BSE Thu from Sep-2025) + BSE's lower fee (₹3,250 vs ~₹3,500/Cr) + Sensex brand.
- Risk: a SEBI move to monthly-only or longer tenures would hit BSE harder (BSE has no large monthly franchise) [E].
- Chart ideas: quarterly BSE vs NSE premium ADTO (Dataset E1); NSE share line (E2); BSE revenue/PAT bars (E8).

### B2. "Premium, not notional": reading MCX after the bullion shock
- Futures ADT ₹27,153 → ₹64,407 Cr (FY25 → FY26), ₹90,200 Cr Q4 FY26 → ₹59,674 Cr Q1 FY27; options notional ₹5.75 → ₹9.90 lakh Cr QoQ but premium ₹10,628 → ₹9,086 Cr; revenue −21% QoQ [V].
- Gold import duty 15% (13-May-26), West Asia war, record prices; Silver 100 g / Gold 10 g contracts; electricity futures contested with NSE; coal and mineral exchanges.
- 63 Moons → CDP (Oct-2023) as the base effect; software now 4.6% of revenue.
- ICICI Direct HOLD (TP ₹2,970, ~40× FY28E) [V] vs price ₹3,020 (25-Oct) [V].

### B3. "A toll booth the regulator is redesigning": IEX and market coupling
- Timeline §7.5; volumes keep compounding (Q2 FY27 +12.7%; RTM +10.5%; TAM/DAC +101.5%; green −5.8%; RECs −65.5%) [V]; prices up (DAM ₹5.7, +46%) [V].
- Scenario table (worked in §C.4): share 84% → 60–75%; fee 2 → 1.5 p; volume +12%/yr.
- IGX deconsolidation and IPO; Indian Coal Exchange.
- European NEMO precedent (incumbents keep share) vs single state MCO.

### B4. "Who really pays": the F&O loss studies, STT and the exchange's take
- SEBI studies: FY22 89% lost [K]; FY22–24 93% lost over three years (~₹1.8 lakh Cr) [K]; FY25 90.9% (₹1,11,788 Cr revised) [V-snip]; **FY26 87.7% (₹91,685 Cr)** [V]. Costs ~₹25,000 Cr/yr (brokerage 44%, STT 27%) [V]; prop +₹44,000 Cr and FPI +₹14,000 Cr gross [V].
- Exchange share of traders' costs: residual ~29% split among exchange charges, GST, stamp, SEBI fee [E].
- Consistency: identical to stockbroking.html figures (87.7%, ₹91,685 Cr, 106.2 → 87.5 lakh, 44%/27%) — **no disagreement** [V-sib].

### B5 (optional). "Two listed rivals listed on each other": NSE vs BSE valuation and economics
- NSE FY26: rev ops ₹16,601 Cr, op EBITDA ₹11,098 Cr (67%), PAT ₹10,302 Cr, ROE 33%; BSE FY26: ₹5,124 Cr / ₹3,480 Cr / ₹2,487 Cr, ROE 46% [V].
- BSE m-cap = 32% of NSE's on 24% of its PAT (FY26) / 31% of TTM [E].

## C. The REVENUE / PROFIT EQUATION

**Equity/commodity derivatives exchange:**
Transaction revenue = Σ products [ADTO (premium for options; notional for futures; value for cash) × trading days × fee per ₹ Cr × 2 sides]
+ Listing + data/index/co-location + MF platform + clearing services + investment income on clearing funds
− (regulatory fees on notional + clearing/settlement + Core SGF + tech + staff + other) = EBITDA; + other (treasury) income + associates − D&A − tax = PAT.

**Power exchange:**
Revenue = Volume (kWh) × fee (p/kWh) × 2 sides (+ REC fees, admission/annual fees) − small fixed cost base = EBITDA (~84%); + treasury income (~25% of revenue) − tax = PAT.

### C.1 Worked example — BSE Q1 FY27 annualised [E from V inputs]
- Premium ADTO ₹29,615 Cr × 248 days = ₹73.4 lakh Cr premium/year.
- × ₹6,500 per Cr (₹3,250 × 2 sides) ≈ **₹4,770 Cr** equity-options revenue.
- Q1 FY27 actual: derivatives revenue ₹1,155 Cr (snippet) / transaction charges ₹1,327.7 Cr (incl. cash) → annualised ₹4,620 / ₹5,311 Cr [V-snip; V]. ✓ within ~3%.
- Plus StAR MF ~₹293 Cr (₹73.3 Cr × 4), co-location ~₹204 Cr, listing/data/clearing/treasury ~₹600–800 Cr → revenue ~₹6,260 Cr annualised (screener Q1 × 4 = ₹6,264 Cr) [E].
- Costs: Q1 ₹520 Cr → ~₹2,080 Cr/yr, of which ~54% regulatory + clearing → OP ~₹4,184 Cr (67%) → + other income ~₹640 Cr − D&A ~₹172 Cr − tax 25% → **PAT ~₹3,490 Cr** (Q1 × 4) [E].
- **At 46.5× TTM PAT (₹2,822 Cr), the market cap ₹1,31,779 Cr is ~37.8× the Q1 run-rate** [E].

### C.2 Worked example — MCX: why premium beats notional [E from V inputs]
- Q1 FY27 options premium ADT ₹9,086 Cr × ~63 days × ~₹8,600 per Cr (two sides) ≈ **₹492 Cr** options fees.
- Futures ADT ₹59,674 Cr × 63 × ~₹430/Cr ≈ **₹162 Cr**.
- Total ≈ ₹654 Cr + membership/data/other ~₹48 Cr ≈ **₹702 Cr** = reported revenue ✓ [V ICICI].
- If premium/notional had stayed at Q4's ratio on Q1's notional, premium ADT would have been far higher; instead revenue fell 21% QoQ. **A ₹1 lakh Cr/day jump in notional at 0.35% = ₹350 Cr/day of premium ≈ ₹77 Cr annual revenue (₹350 Cr × ₹8,600/Cr × 255 days) [E].**

### C.3 Worked example — IEX FY26 [E from V inputs]
- 141.1 BU × 2 p × 2 sides = **₹564 Cr** transaction fees; + REC/admission/other + IGX ~₹52 Cr → ₹616 Cr screener revenue ✓.
- Opex ₹96 Cr → OP ₹520 Cr (84%); + other income ₹151 Cr − D&A ₹23 Cr − interest ₹2 Cr → PBT ₹646 Cr − 24% tax → **PAT ₹493 Cr** [V screener].

### C.4 Coupling scenarios for IEX FY29 [E — illustrative, not a forecast]
Assume market volume grows 12%/yr from 168.55 BU (FY26) → ~237 BU (FY29).

| Scenario | IEX share | Fee (p/side) | IEX volume (BU) | Txn revenue (₹ Cr) | vs FY26 ₹564 Cr |
|---|---|---|---|---|---|
| No change | 84% | 2.0 | 199 | 796 | +41% |
| Coupling, sticky members | 75% | 2.0 | 178 | 711 | +26% |
| Coupling + fee cut | 75% | 1.5 | 178 | 533 | −5% |
| Coupling, share loss | 60% | 1.5 | 142 | 427 | −24% |
| Bear | 50% | 1.25 | 119 | 296 | −48% |

### C.5 Company-level reconciliations [E]
- BSE: ₹3,134 Cr equity-derivatives revenue FY26 ÷ ₹19,522 Cr ADTO ÷ 248 days = ₹6,473/Cr ✓ two-sided ₹3,250.
- NSE: ₹9,996 Cr options transaction revenue ÷ ₹57,662 Cr ÷ 248 = ₹6,990/Cr ✓ two-sided ~₹3,500.
- IEX: ₹608 Cr standalone revenue ÷ 141.1 BU = 4.31 p/kWh ✓ 2 p/side + other fees.

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Label | Source |
|---|---|---|---|
| 1 | **₹8,042 Cr** | Members' FY26 revenue (+65%) | [E: sum screener] |
| 2 | **70%** | Members' FY26 operating (EBITDA) margin | [E: ₹5,642 ÷ ₹8,042 Cr] |
| 3 | **₹2.18 lakh Cr** | Members' m-cap, 25-Oct-26 (50.5× FY26 PAT) | [E: sum screener] |
| 4 | **31.5%** | BSE's share of equity-options premium, Q1 FY27 (FY24: ~3%) | [E from V: ₹29,615 vs NSE ₹64,352 Cr] |
| 5 | **₹91,685 Cr** | Net loss of individual F&O traders, FY26 (87.7% lost) | [V SEBI study summary; V-sib] |
| 6 | **0.15%** | STT on options premium from 1-Apr-2026 (2.4× Sep-2024) | [V-sib Budget 2026] |

Alternates: "₹29,615 Cr BSE premium ADTO Q1 FY27 (+96%)"; "39,685 MU IEX Q2 FY27 volume (+12.7%)"; "₹4.13 lakh Cr NSE m-cap after 24-Sep-26 listing".

## E. Chart-ready datasets

**E1. Equity options premium ADTO, NSE vs BSE (₹ Cr/day)** [NSE V-sib/V; BSE primer/V; quarterly BSE E derived]

| Period | NSE | BSE | BSE share |
|---|---|---|---|
| FY25 | 62,449 | 8,977 | 12.6% |
| FY26 | 57,662 | 19,522 | 25.3% |
| Q1 FY26 | 55,514 | ~15,114 [E] | 21.4% |
| Q2 FY26 | ~45,350 [E] | ~14,970 [E] | ~25% [E] |
| Q3 FY26 | ~53,409 [E: Q4 ÷ 1.43] | ~19,754 [E] | 27% |
| Q4 FY26 | 76,375 [V] | ~28,250 [E; BSE Q4 ≈ Q1/1.02 = ~29,030 per Jefferies] | 27% |
| Q1 FY27 | 64,352 [V-sib] | 29,615 [V] | 31.5% |
| Jun-26 | n/s | 26,200 [V] | 32.4% (index options) |
Note: Q2 FY26 NSE is backed out from the FY26 average and other quarters [E]; flag as derived. NSE share figures: FY24 96.86%, FY25 87.43%, FY26 74.71%, Q1 FY26 78.6%, Q4 FY26 73%, Q1 FY27 68.48%.

**E2. NSE share of equity options premium (%)**: FY24 96.86; FY25 87.43; FY26 74.71; Q1 FY27 68.48 [V-sib from NSE offer document via multibagg].

**E3. MCX ADT (₹ Cr/day)** [primer; V]

| Period | Futures ADT | Options premium ADT | Options notional ADT |
|---|---|---|---|
| FY24 | n/s | ~1,600 | n/s |
| FY25 | 27,153 | 3,131 | ~1.92 lakh Cr [E: 4.72 ÷ 2.46] |
| FY26 | 64,407 | 6,534 | 4.72 lakh Cr |
| Q4 FY26 | 90,200 | 10,628 | 5.75 lakh Cr |
| Q1 FY27 | 59,674 | 9,086 | 9.90 lakh Cr |
Also: MCX total annual traded value ₹276.6 / 565.2 / 773.8 lakh Cr (FY24/25/26) [V ICICI]. Futures turnover mix Q1 FY27: gold 34.5%, silver 29.7% (bullion 77% incl. minis), rest energy/base metals [V]; Q4 FY26 approx.: gold 43%, silver 34%, crude 7%, natural gas 7%, copper 7%, other 2% [primer].

**E4. IEX volumes by segment (MU)** [V FPJ; primer]

| Segment | Q1 FY27 | Q2 FY27 | Q2 YoY | FY26 |
|---|---|---|---|---|
| DAM (incl. HP-DAM) | 13,344 | 14,855 | +2.2% | ~55,000 [E: 39% of 141.1 BU] |
| RTM | 16,019 | 16,490 | +10.5% | 54,850 |
| TAM + DAC | n/s | 5,477 | +101.5% | ~19,750 [E: 14%] |
| Green (GDAM+GTAM) | n/s | 2,863 | −5.8% | 10,780 |
| Total electricity | 37,534 | 39,685 | +12.7% | 141,100 |
| RECs (lakh certificates) | 9.77 | 15.27 | −65.5% | 187.2 |
H1 FY27 total 77.2 BU (+14.2%); RTM H1 32.5 BU (+16.5%).

**E5. Power prices (₹/kWh, IEX DAM avg)**: FY25 4.47; FY26 3.86; Q2 FY27 5.7 (+46%); Sep-26 ~7.3 (+105%, one report). RTM FY25 4.28; FY26 3.59; Q2 FY27 5.2 (+49%) [primer; V; V-snip].

**E6. Revenue and PAT, FY22–FY26 (₹ Cr, screener consolidated)** [V]

| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM |
|---|---|---|---|---|---|---|
| BSE revenue | 841 | 925 | 1,568 | 3,212 | 5,124 | 5,442 |
| BSE PAT | 245 | 206 | 772 | 1,322 | 2,487 | 2,822 |
| MCX revenue | 367 | 514 | 684 | 1,113 | 2,302 | 2,631 |
| MCX PAT | 143 | 149 | 83 | 560 | 1,332 | 1,542 |
| IEX revenue | 431 | 401 | 449 | 537 | 616 | 632 |
| IEX PAT | 309 | 306 | 351 | 429 | 493 | 507 |
| NSE revenue (context) | 8,313 | 11,856 | 14,780 | 17,141 | 16,601 | — |
| NSE PAT (context) | 5,198 | 7,356 | 8,306 | 12,188 | 10,302 | ~9,200 [E: m-cap ÷ P/E] |

**E7. Quarterly (₹ Cr, screener)** [V]

| Quarter | BSE rev | BSE OP | BSE PAT | MCX rev | MCX OP | MCX PAT | IEX rev | IEX OP | IEX PAT |
|---|---|---|---|---|---|---|---|---|---|
| Q1 FY26 (Jun-25) | 958 | 625 | 538 | 373 | 241 | 203 | 142 | 115 | 121 |
| Q2 FY26 (Sep-25) | 1,068 | 680 | 557 | 374 | 242 | 197 | 154 | 133 | 123 |
| Q3 FY26 (Dec-25) | 1,244 | 732 | 597 | 666 | 494 | 401 | 146 | 122 | 119 |
| Q4 FY26 (Mar-26) | 1,564 | 1,041 | 795 | 889 | 665 | 530 | 174 | 149 | 130 |
| Q1 FY27 (Jun-26) | 1,566 | 1,046 | 873 | 702 | 494 | 413 | 158 | 131 | 135 |

**E8. OP margin by year (%)**: BSE FY22 42, FY23 34, FY24 45, FY25 58, FY26 68; MCX 44, 28, 9, 60, 71; IEX 84, 84, 84, 84, 84; NSE 79, 80, 67, 74, 68 [V screener].

**E9. Retail participation**: demat accounts (crore) Mar-20 ~4.1 [K], Mar-21 5.5, Mar-22 ~9.0 [K], Mar-23 ~11.4 [K], Mar-24 ~15.1 [K], Mar-25 ~19.2 [K], Jun-26 23.2 [V-sib]. Unique individual F&O traders (lakh): FY25 106.2, FY26 87.5 [V]. NSE active clients (crore): Mar-25 4.92, Mar-26 4.57, Sep-26 4.61 [V-sib]. NSE unique registered investors ~13 crore (Mar-26) [V].

**E10. F&O loss studies (individuals)**: FY22 89% lost [K, SEBI Jan-2023]; FY24 91.1% lost / ~₹75,000 Cr [K, SEBI Sep-2024]; FY25 90.9% / ₹1,11,788 Cr (revised) [V-snip]; FY26 87.7% / ₹91,685 Cr [V]. Avg loss per trader FY26 ₹1.17 lakh [V].

**E11. STT rates** — table in §7.2.

**E12. Valuation: P/E TTM (×, Oct-2026)**: MCX 50.0; BSE 46.5; NSE 44.9; JPX 34.0; HKEX 30.3; Nasdaq 29.8; Deutsche Börse 27.9; CME 25.8; B3 23.0; ICE 22.9; IEX 17.8 [V screener; V-snip aggregator]. ROE (%): MCX 56.3; BSE 46.0; IEX 39.4; NSE 28.6 [V].

**E13. NSE FY26 revenue mix (₹ Cr)**: transaction charges 13,057 (options 9,996; futures 1,370; cash 1,555; others 137); data connectivity 1,129; operating investment income 842; data feed 470; listing 352; clearing 251; rack 205; index licensing 152; other 143 → rev ops 16,601; other income 2,112 [V NSE deck].

**E14. NSE's contribution to the exchequer FY26 (₹ Cr)**: STT/CTT 48,345; income tax + GST 6,422; stamp duty 3,411; SEBI fees 1,008; total 59,186 [V].

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Good | Average | Weak | Members now |
|---|---|---|---|---|
| OP (EBITDA) margin | >70% | 55–70% | <55% | BSE 68, MCX 71, IEX 84 |
| Incremental margin | >80% | 60–80% | <60% | ~83–84% all three (FY26) |
| ROE | >40% | 25–40% | <25% | 46 / 56 / 39 |
| Options premium ADTO growth (YoY) | >30% | 0–30% | <0 | BSE +96% (Q1 FY27); MCX notional options +266% (premium YoY n/s); NSE +16% |
| Market share trend (own segment) | gaining | stable | losing | BSE gaining; MCX stable >98%; IEX easing (88% FY23 → ~84%) |
| Yield (per ₹ Cr premium, two sides) | stable/rising | −0–10% | cut >10% | BSE ~₹6,470; NSE ~₹6,990; MCX ~₹8,600 |
| Regulatory + clearing cost / revenue | <8% | 8–15% | >15% | BSE ~17% (weak), MCX ~6%, IEX ~1% |
| Employee cost / revenue | <6% | 6–10% | >10% | NSE 4.8, MCX 7.8, IEX ~9 |
| Tech cost / revenue | 4–8% (adequate) | <4% (under-investment risk) or 8–12% | >12% | NSE 7.9, MCX 4.6 |
| Treasury income / PAT | <15% (core-driven) | 15–30% | >30% (rate-dependent) | BSE low (screener), MCX 9.5%, IEX 31% |
| Revenue concentration (top product) | <40% | 40–65% | >65% | BSE options ~65% [E]; MCX options ~2/3; IEX electricity ~95% |
| P/E vs growth (PEG on 2-yr EPS CAGR) | <1.5 | 1.5–2.5 | >2.5 | MCX ~2.4 (50× / ~21% FY26–28E) [E]; IEX ~1.5 (18× / ~12%) [E] |
| Uptime | No outage in 12 months | 1 minor | Multi-hour outage | MCX weak (Oct-2025) |

## G. Timeline (year: event)
- **1875:** Native Share & Stock Brokers' Association (BSE) founded [primer].
- **1986:** Sensex launched [primer].
- **1992:** SEBI given statutory powers after the Harshad Mehta scam [K].
- **1994:** NSE begins trading (screen-based, nationwide) [V NSE PR].
- **1996/1999:** NSDL (1996); CDSL (1999, promoted by BSE) [V-sib].
- **2000–01:** Index futures (Jun-2000) and options (Jun-2001) launched [K].
- **2003:** MCX and NCDEX launched [primer; K].
- **2008:** IEX (Jun-2008) and PXIL begin trading [primer].
- **Feb-2012:** MCX IPO — first listed Indian exchange [primer].
- **Jul-2013:** NSEL payment crisis; FTIL later declared not fit and proper; exits MCX/IEX [primer; K].
- **28-Sep-2015:** FMC merged into SEBI [K].
- **Feb-2017 / Jun-2017 / Oct-2017:** BSE IPO (on NSE); CDSL IPO; IEX IPO [primer; K].
- **2019:** SEBI co-location orders against NSE (₹625 Cr disgorgement) [K].
- **Jun-2020:** IEX Real-Time Market launched [primer].
- **May-2023:** BSE relaunches Sensex/Bankex derivatives [primer].
- **16-Oct-2023:** MCX goes live on the TCS-built CDP, ending 63 Moons dependence [primer; K].
- **Apr-2024:** SEBI directs BSE to pay regulatory fee on options notional; BSE −19% in a day [primer].
- **1-Jul-2024 / 1-Oct-2024:** True-to-label circular / effective; STT hike #1; SEBI six-measure F&O circular [V-sib].
- **20-Nov-2024:** One weekly expiry per exchange; ₹15 lakh minimum contract [V-sib].
- **1-Feb-2025 / 1-Apr-2025:** Upfront premium & no calendar-spread benefit on expiry / intraday position monitoring [V-sib].
- **29-May-2025 → Dec-2025:** Delta-based OI and position-limit circular phased in [V-sib].
- **Jun-2025:** SEBI fixes expiries to Tuesday/Thursday; NSE files settlement applications (₹1,387 Cr) [V-sib; V-snip].
- **Jul-2025:** NSE and MCX launch electricity futures [V NSE deck; K]; **23-Jul-2025 CERC market-coupling order** (DAM by Jan-2026); IEX −28–29% [V-snip].
- **1-Sep-2025 / 4-Sep-2025:** NSE weekly expiry moves to Tuesday / BSE record 56% share on first Thursday [V-snip].
- **28-Oct-2025:** MCX 4-hour outage [V-snip].
- **Q2 FY26:** NSE books ₹1,297 Cr SEBI-settlement provision [V-snip].
- **1-Feb-2026:** Budget raises STT (options 0.15%, futures 0.05%) from 1-Apr-2026 [V-sib].
- **Feb-2026:** APTEL dismisses IEX's coupling appeal; RBI tightens bank credit to capital-market intermediaries [V-snip].
- **28-Feb-2026:** West Asia war; Feb–Mar market crash; Q4 FY26 record volatility-driven volumes [owner facts; V].
- **13-Mar-2026:** NSE revises settlement terms to ₹1,491.21 Cr [V NSE PR].
- **17-Apr-2026:** CERC draft Power Market (Second Amendment) Regulations — Grid-India sole MCO [V-snip].
- **13-May-2026:** Gold & silver import duty 6% → 15% [V-snip].
- **May-2026 / 1-Jun-2026:** BSE Focused IT index derivatives; MCX Silver 100 g futures; IEX incorporates Indian Coal Exchange [V; primer].
- **Jun-2026:** NSE files DRHP (~₹30,000 Cr OFS estimate) [V-snip].
- **27-Jul-2026:** Supreme Court declines stay on coupling [V-snip].
- **Aug-2026:** SEBI FY26 F&O study (87.7%, ₹91,685 Cr) [V].
- **17–21-Sep-2026 / 24-Sep-2026:** NSE IPO (5.7×) / lists on BSE [V].
- **6-Oct / 12-Oct / 16-Oct-2026:** IEX Q2 volume +12.7%; SEBI observation on IGX DRHP; MCX Mineral Exchange incorporated [V].
- **22-Oct-2026:** BSE advertises for new MD & CEO [V].
- **29-Oct / 3-Nov / 4-Nov-2026:** IEX / MCX & NSE / BSE Q2 FY27 board meetings [V].
- **1-Jan-2027:** BSE ends 13-year Deutsche Börse market-data partnership [V].

## H. Figures I could not source well (and conflicts)
1. **Market-coupling status Oct-2026** — whether CERC has *notified* the final Second Amendment Regulations (and the start date) is **unverified**; last confirmed item is the SC's 27-Jul-2026 refusal of stay [V-snip]. CERC's website did not render. **Highest-priority gap.**
2. **Monthly NSE and BSE premium ADTO Apr-2024 → Sep-2026** — not fetched (nseindia blocks bots; BSE monthly not found). Quarterly series in E1 is partly derived [E]. Q2 FY27 (Jul–Sep 2026) BSE premium ADTO: only directional (Aug −12% MoM) [V-snip].
3. **BSE notional ADTO** — only implied from Jefferies' bps ratio (≈₹237 lakh Cr/day) [E]; one snippet says "₹237 lakh crore", another "2.37 trillion" — unit conflict.
4. **BSE FY26 revenue mix** (transaction ~₹3,795 Cr; equity derivatives ₹3,134 Cr; listing ~₹500 Cr; StAR MF ₹285 Cr; data ~₹280 Cr; treasury ~₹315 Cr) is from the primer, "approximate, reconstructed" — not re-verified against the FY26 annual report.
5. **BSE's accounting for CDSL** (associate at 15%?) and **BSE's stake in HPX/other entities** — not verified.
6. **MCX FY26 segment split (bullion/energy/base metals) for options** — only "energy ~70% of options turnover" [primer] and futures shares [V]; Q1 FY27 options premium split by commodity not found.
7. **Electricity-futures market share** — NSE 72% (lots) vs MCX ~55% ADT / >70% OI: unreconciled.
8. **IEX FY26 segment volumes** — DAM/TAM shares are primer approximations; CEA per-exchange table not fetched (PDF 404).
9. **IEX market share by segment (FY26/Q2 FY27)** — derived ~84% overall; no official per-segment split fetched.
10. **CERC fee-cut proposal** (1.5 p/1.25 p) — reported only; no draft order found.
11. **Global peer margins** (CME, ICE, DB, HKEX, Nasdaq, LSEG, JPX, B3) — from memory [K]; LSEG m-cap/P/E not fetched; SGX P/E 51× looks stale. Aggregator revenue for DB/HKEX/JPX/SGX years are inconsistent (some 2023/2024).
12. **Exact current transaction-charge schedules** (NSE ₹3,503/Cr; MCX ₹41.80/lakh options; ₹2.10/lakh futures) — [K], cross-checked only arithmetically.
13. **CTT changes in Budget 2026** — not checked.
14. **NSE DRHP date** (June-2026 vs stockbroking.html's "10-Sep-2026") and NSE **listing price** (₹1,800, single tracker) — conflict noted.
15. **FY22/FY24 loss-study numbers** — [K]; not fetched.
16. **Demat accounts Mar-22 → Mar-25** — [K] approximations; only Mar-21 and Jun-26 [V-sib].
17. **BSE Q1 FY27 derivatives revenue ₹1,155 Cr** — search snippet only.
18. **RBI bank-guarantee rule effective date** (1-Apr vs 1-Jul-2026) — sources conflict.
19. **SEBI 2026 F&O actions** — none found; absence not proven.
20. **IEX price cap** (₹10/kWh DAM/RTM; ₹20 HP-DAM) — [K], current values not re-verified.

---

# PART 2 — COMPANY FACT PACKS (3 members + NSE context)

**Sources and conventions for every pack:**
- Screener.in consolidated, pulled 25-Oct-2026 via `curl` (prices = Friday 23-Oct close) [V screener].
- Primers in primers\ (refresh dates in each pack) [primer].
- Q1 FY27 results coverage [V / V-snip as marked].
- "OP" = screener operating profit (EBITDA ex other income). Net cash on screener basis = investments − borrowings (excludes cash in "other assets" and includes no clearing-fund adjustment — see each pack).
- EV/EBITDA = (m-cap + borrowings − screener investments) ÷ FY26 OP [E].

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 25-Oct-26)

| Company | NSE | Year | Revenue | YoY % | OP (EBITDA) | OPM % | PAT | ROCE % | ROE % | Net debt (cash), screener basis | M-cap | P/E (TTM) | P/E (FY26) | P/B | EV/EBITDA | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BSE Ltd | BSE | FY26 | 5,124 | +59.5 | 3,480 | 67.9 | 2,487 | 60.0 | 46.0 | (3,837) investments; borrowings 0 | 1,31,779 | 46.5 | 53.0 | 19.7 | ~36.8× | Premium ADTO ₹29,615 Cr Q1 FY27 (+96%) | Options premium share ~31.5% Q1 FY27 [E] | Sensex fee ₹3,250/Cr/side |
| MCX | MCX | FY26 | 2,302 | +106.8 | 1,642 | 71.3 | 1,332 | 71.4 | 56.3 | (2,944) | 77,015 | 50.0 | 57.8 | 27.0 | ~45.1× | Options premium ADT ₹9,086 Cr Q1 FY27 (FY26 ₹6,534 Cr) | Futures ADT ₹59,674 Cr Q1 FY27 | >98% share; 13.72 lakh traded clients |
| IEX | IEX | FY26 | 616 | +14.7 | 520 | 84.4 | 493 | 51.4 | 39.4 | (1,982) | 9,024 | 17.8 | 18.3 | 6.6 | ~13.5× | Volume 141.1 BU FY26 (+17%); Q2 FY27 39.7 BU (+12.7%) | ~84% of PX volume [E] | ~4.3 p/kWh realised |
| *NSE (context, not a member)* | — (BSE 544937) | FY26 | 16,601 | −3.2 | 11,265 (company op EBITDA 11,098) | 67.9 | 10,302 | 40.6 | 28.6 | (28,930) | 4,12,966 | 44.9 | 40.1 | ~12.9 [E: ₹1,669 ÷ ₹129.75 BVPS] | ~34× | Options premium ADTO ₹64,352 Cr Q1 FY27 | Options share 68.5% | Cash share 93% |

## 2.1 BSE Ltd (BSE · NSE-listed only; no BSE scrip code) — Asia's oldest exchange, rebuilt by Sensex weekly options

**Financial record (screener consolidated, 25-Oct-26) [V]**
- FY26 revenue **₹5,124 Cr** (FY25 ₹3,212 Cr, +59.5%); OP **₹3,480 Cr (68%)**; other income ₹24 Cr; D&A ₹159 Cr; interest ₹34 Cr; PBT ₹3,311 Cr; tax 25%; **PAT ₹2,487 Cr (+88%)**; EPS ₹61.22.
- FY24: ₹1,568 Cr / OP ₹711 Cr (45%) / PAT ₹772 Cr (incl. ₹417 Cr other income — FY24 had a one-off gain [K: sale of part of CDSL? unverified]); FY23: ₹925 / ₹316 / ₹206 Cr; FY22: ₹841 / ₹352 / ₹245 Cr.
- **Q1 FY27 (Jun-26): revenue ₹1,566 Cr (+63.5% YoY; flat QoQ vs ₹1,564 Cr), OP ₹1,046 Cr (67%), other income ₹160 Cr, PAT ₹873 Cr (+62%)**; Q1 FY26: ₹958 / ₹625 / ₹538 Cr. TTM PAT ₹2,822 Cr.
- Company basis (Q1 FY27): total income ₹1,706.8 Cr; transaction charges **₹1,327.7 Cr (+80%)**; co-location ₹51 Cr; StAR MF ₹73.3 Cr (+20%); operating EBITDA incl. Core SGF ₹1,046.0 Cr; PAT attributable ₹874.0 Cr; 54% of opex = regulatory fees + clearing/settlement costs; a ~₹40 Cr debtor provision in the clearing subsidiary inflated Q4 FY26 other expenses [V multibagg].
- Balance sheet (Mar-26): equity ₹82 Cr (bonus 2:1 in FY26 [K] — equity capital ₹27 → ₹82 Cr) + reserves ₹6,591 Cr = net worth **₹6,673 Cr**; borrowings nil; investments ₹3,837 Cr; other assets ₹8,890 Cr (incl. clearing members' margins/settlement funds — not BSE's own cash) [V]. CFO FY26 ₹3,104 Cr; FCF ₹2,589 Cr.
- **Net cash: use "debt-free; own investments ₹3,837 Cr (screener)"; do not add clearing-fund cash** [E]. Company-reported own net worth/treasury not fetched.
- Valuation: price ₹3,231; m-cap **₹1,31,779 Cr**; P/E **46.5× TTM**, 53.0× FY26; book value ₹164 → P/B 19.7×; dividend yield 0.31%; 52-week ₹4,447 / ₹2,326 (price 27% below high) [V].
- Ownership (Sep-26): **no promoter**; FII 17.10% (down from 21.32% Jun-26), DII 25.89%, public 56.70%, govt 0.32%; 11.64 lakh shareholders [V]. LIC ~5.6% (Mar-26) [primer].

**Native KPIs**
- Equity-options premium ADTO: ~₹50 Cr "illustrative" (FY24, primer — **wrong**, see §3.4), **₹8,977 Cr (FY25), ₹19,522 Cr (FY26, +118%), ₹29,615 Cr (Q1 FY27, +96%)**, ₹26,200 Cr (Jun-26) [primer; V].
- Premium share: ~25% FY26 [E]; **31.5% Q1 FY27** [E]; 32.4% Jun-26 index options [V Jefferies]; record 56% on 4-Sep-2025 expiry [V-snip].
- Premium/notional: 12.5 bps (Q1 FY27), 11.8 bps (Q4 FY26) [V].
- Cash ADTV: ~₹7,950 Cr (Q4 FY26) [primer] → **₹9,955 Cr (Q1 FY27, record)** [V].
- Fee: ₹3,250 per Cr of Sensex/Bankex options premium per side (₹325 per ₹10 lakh) vs NSE ~₹3,500 [primer; V-snip].
- StAR MF: 84 crore transactions FY26 (+27%), ₹285 Cr revenue (+24%) [primer]; 234 mn orders Q1 FY27 (+28%) [V].
- Investor accounts registered 25.8 crore; >₹6.2 lakh Cr raised on BSE platforms in Q1 FY27 [V].
- Products: Sensex (weekly, Thursday), Bankex, Sensex 50, Sensex Next 30, Focused Midcap, **Focused IT (launched May-2026)** [V; primer].

**Story bullets**
- **What defines it:** a 150-year-old #2 that became the only real challenger in Indian index options because SEBI's expiry rules handed it a protected weekly slot; ~65% of revenue now from options [E].
- **Edge:** lower fee than NSE, Sensex brand, Thursday expiry, StAR MF (largest MF order rail), 15% of CDSL, SME/IPO platform, co-location now monetised.
- **Main risk:** a SEBI move against weekly expiries; NSE's renewed competitiveness as a listed company; regulatory/clearing cost burden (54% of opex); leadership transition (MD & CEO ad 22-Oct-26).
- **Watch:** Q2 FY27 on 4-Nov; Deutsche Börse data partnership ends 1-Jan-2027 (BSE takes global data distribution in-house) [V].

**Sources:** screener.in/company/BSE/consolidated/ (25-Oct-26); multibagg BSE Q1 FY27 (3-Aug-26); Business Today/Jefferies (3-Jul-26); primer bse-limited.html (1-Jul-26).

## 2.2 Multi Commodity Exchange of India (MCX · 534091) — India's commodity-derivatives monopoly, now an options exchange

**Financial record (screener consolidated, 25-Oct-26) [V]**
- FY26 revenue **₹2,302 Cr** (FY25 ₹1,113 Cr, +107%); OP **₹1,642 Cr (71%)**; other income ₹127 Cr; D&A ₹78 Cr; PBT ₹1,690 Cr; tax 21%; **PAT ₹1,332 Cr (+138%)**; EPS ₹52.22.
- FY24: ₹684 / OP ₹63 (9%) / PAT ₹83 Cr (63 Moons software charges); FY23: ₹514 / ₹145 / ₹149; FY22: ₹367 / ₹161 / ₹143 Cr.
- **Q1 FY27: revenue ₹702 Cr (+88% YoY; −21% QoQ), OP ₹494 Cr (70%), other income ₹50 Cr, PAT ₹413 Cr (+103% YoY; −22% QoQ)**; Q4 FY26: ₹889 / ₹665 (75%) / ₹530 Cr. TTM PAT ₹1,542 Cr.
- Company basis Q1 FY27: total income ₹751.8 Cr; EBITDA ₹544 Cr (72.3%, incl. other income); employee ₹57.5 Cr (+28%, annual increments); operating expenses ₹150.6 Cr (advertising, regulatory fees, statutory-fund provisioning) [V ICICI].
- FY26 cost lines: software ₹105 Cr; advertising ₹108 Cr; others ₹263 Cr; employees ₹180 Cr; total ₹655 Cr [V ICICI].
- Balance sheet (Mar-26): net worth ₹2,848 Cr; borrowings ₹5 Cr; investments ₹2,889–2,949 Cr; cash & equivalents ₹2,537 Cr; **SGF ₹1,367 Cr**; current liabilities ₹3,170 Cr (member margins/deposits) [V ICICI; V screener]. **Own net cash ≈ net worth less fixed assets ≈ ₹2,600 Cr [E]**; screener-basis net cash ₹2,944 Cr. Do not add the gross ₹5,426 Cr of cash + investments (includes SGF and margins).
- CFO FY26 ₹3,035 Cr (inflated by margin inflows) [V].
- Valuation: price ₹3,020; m-cap **₹77,015 Cr**; P/E **50.0× TTM**, 57.8× FY26; P/B ~27×; yield 0.26%; 52-week ₹3,481 / ₹1,761 [V]. ICICI Direct (7-Aug-26): HOLD, TP ₹2,970 (~40× FY28E), FY27E PAT ₹1,730 Cr, FY28E ₹1,942 Cr [V].
- Ownership (Sep-26): **no promoter**; FII 27.06%, DII 55.16%, public 17.57%; 4.21 lakh shareholders [V].

**Native KPIs**
- Options premium ADT: ~₹1,600 Cr (FY24) → ₹3,131 Cr (FY25) → **₹6,534 Cr (FY26)**; ₹10,628 Cr (Q4 FY26) → **₹9,086 Cr (Q1 FY27)** [primer; V].
- Options notional ADT: ₹4.72 lakh Cr (FY26, +146%); ₹5.75 lakh Cr (Q4 FY26) → **₹9.90 lakh Cr (Q1 FY27, +266% YoY)** [primer; V].
- Futures ADT: ₹27,153 Cr (FY25) → ₹64,407 Cr (FY26); ₹90,200 Cr (Q4 FY26) → **₹59,674 Cr (Q1 FY27, +47% YoY)** [primer; V].
- Total F&O ADT ₹10.49 lakh Cr (Q1 FY27) vs ₹3.11 lakh Cr (+238%) [V].
- Q4 FY26 transaction fees: options ~₹569 Cr vs futures ~₹242 Cr (options overtook futures) [primer].
- Bullion: 77% of futures turnover (gold 34.5%, silver 29.7% in Q1 FY27); energy ~70% of options turnover (FY26) [V; primer]. Bullion premium/notional 1.03% → 0.35% (Q4 → Q1) [V].
- Traded clients: 13.72 lakh (Q1 FY27) vs 7.03 lakh; ~20 lakh UCCs traded FY26 [V].
- Electricity futures: ADT ₹37 Cr; ~55% share by ADT, >70% by OI (Q1 FY27) [V] — conflicts with NSE's 72% (lots) claim.
- FPIs ~220 (~2.5% of ADT); 12 new members and 35 new FPIs in Q1 FY27 [V].
- Platform: 3 bn+ transactions/day, headroom to double [V].

**Story bullets**
- **What defines it:** >98% share of non-agri commodity derivatives; the options shift (premium-based fees) multiplied revenue; FY26 was turbo-charged by a bullion/geopolitical volatility shock and Q1 FY27 shows normalisation.
- **Edge:** liquidity monopoly; owned platform (CDP since 16-Oct-2023); gold/silver delivery network (first domestic silver refiner empanelled; three more gold refiners) [V]; >15 AMCs reference MCX bullion prices [V].
- **Main risks:** volatility mean-reversion; outages (Jul-2025 halt; 28-Oct-2025 4-hour outage; SEBI probe) [V-snip]; NSE competition in electricity/gold; SEBI retail-options stance; RBI bank-guarantee rules for prop traders.
- **New pools:** electricity futures (Jul-2025), MCX Coal Exchange of India, **MCX Mineral Exchange of India (16-Oct-26)**, Silver 100 g, Gold 10 g, iCOMDEX index options [V; primer].

**Sources:** screener.in/company/MCX/consolidated/; ICICI Direct MCX Q1 FY27 PDF (7-Aug-26); multibagg MCX Q1 FY27 (5-Aug-26); primer mcx.html (3-Jul-26).

## 2.3 Indian Energy Exchange (IEX · 540750) — India's power exchange under a coupling cloud

**Financial record (screener consolidated, 25-Oct-26) [V]**
- FY26 revenue **₹616 Cr** (FY25 ₹537 Cr, +14.7%); OP **₹520 Cr (84%)**; other income **₹151 Cr**; D&A ₹23 Cr; PBT ₹646 Cr; tax 24%; **PAT ₹493 Cr (+14.9%)**; EPS ₹5.53. Primer's "consolidated revenue ~₹747 Cr" is **total income incl. other income** (616 + 151 = 767 on screener; company ~₹747 Cr) — trap for the writer.
- FY24 ₹449 / ₹377 / ₹351 Cr; FY23 ₹401 / ₹336 / ₹306 Cr; FY22 ₹431 / ₹364 / ₹309 Cr.
- **Q1 FY27: revenue ₹158 Cr (+11%), OP ₹131 Cr (83%), other income ₹53 Cr, PAT ₹135 Cr (+12%)** (company: revenue ₹157.88 Cr, OI ₹44.93 Cr, PAT ₹133.78 Cr; standalone PAT ₹126.69 Cr; result 23-Jul-26) [V screener; V FPJ]. TTM PAT ₹507 Cr.
- Balance sheet (Mar-26): net worth ₹1,364 Cr; borrowings ₹11 Cr (leases); investments ₹1,993 Cr [V]. Own net cash ≈ ₹1,300–2,000 Cr [E — the investments line may include settlement-related balances; use "~₹2,000 Cr of investments, debt-free"].
- Valuation: price **₹101** (52-week low ₹100, high ₹160); m-cap **₹9,024 Cr**; P/E **17.8× TTM**; P/B 6.6×; **dividend yield 3.46%** [V]. Final dividend ₹2/share (FY26) [V FPJ; primer].
- Ownership (Sep-26): **no promoter**; FII 12.02%, DII 31.79%, public 55.93%; 14.32 lakh shareholders [V].

**Native KPIs**
- Electricity volume: ~120 BU (FY25) → **141.1 BU (FY26, +17%)**; Q1 FY27 37,534 MU (+15.9%); **Q2 FY27 39,685 MU (+12.7%)**; H1 FY27 77.2 BU (+14.2%); Sep-26 12,220 MU (+10.4%) [primer; V].
- Q2 FY27 segments: DAM incl. HP-DAM 14,855 MU (+2.2%); RTM 16,490 MU (+10.5%); TAM+DAC 5,477 MU (+101.5%); Green 2,863 MU (−5.8%); RECs 15.27 lakh (−65.5%) [V].
- Prices: DAM ₹5.7/kWh (+46%), RTM ₹5.2/kWh (+49%) in Q2 FY27 [V].
- Share: ~84% of all PX volume FY26 [E: 141.1/168.55 BU]; ~98–99% of DAM [primer]; trend 88% (FY23) → ~84% (FY24–25) → ~83% (9M FY26) [primer, MOSL].
- Realised fee ~4.3 p/kWh both sides (standalone ₹608 Cr ÷ 141.1 BU) [primer; E].
- IGX: 76.8 mn MMBtu FY26 (+28%), PAT ₹41.9 Cr [primer]; **now an associate**; IEX selling down to 25%; SEBI observation on IGX DRHP 12-Oct-26 [V].

**Story bullets**
- **What defines it:** an 84%-margin volume toll whose moat is liquidity concentration — which CERC's coupling (Grid-India as sole MCO) is designed to neutralise.
- **Edge:** 8,000+ participants, 18-year settlement record, RTM/green/REC product breadth; volume growth tied to power demand (+11.5% in Q2 FY27) and renewables.
- **Main risks:** coupling (final notification pending; SC no stay); fee cut (2 → 1.5 p); RECs collapse; high prices suppress buy-side volume (cap ₹10/kWh).
- **Optionality:** Indian Coal Exchange (Jun-2026); ICX (I-RECs); IGX stake monetisation via IPO/OFS.

**Sources:** screener.in/company/IEX/consolidated/; FPJ (23-Jul-26 Q1 results; 6-Oct-26 Q2 volumes); sahi (3-Aug-26, SC hearing); goodreturns (28-Oct-25, APTEL); primer indian-energy-exchange.html (20-Jul-26).

## 2.4 Context pack — National Stock Exchange of India (BSE 544937; listed 24-Sep-2026)
- FY26 (company): total income ₹18,713 Cr (−2%); revenue from operations ₹16,601 Cr (−3%); op EBITDA ₹11,098 Cr (67% vs 74%); PAT **₹10,302 Cr (−15%)**; EPS ₹41.62; ROE 33%; BVPS ₹129.75; dividend ₹35 (incl. ₹10 special) [V NSE PR 5-May-26]. FY26 hit by **₹1,432 Cr SEBI settlement fees** and ₹126 Cr labour-code impact; FY25 had ₹1,209 Cr profit on sale of associate stake (FY26 ₹1,201 Cr) [V].
- Q4 FY26: total income ₹5,360 Cr; transaction charges ₹4,077 Cr (+34% QoQ); op EBITDA ₹3,633 Cr (73%); PAT ₹2,871 Cr [V].
- Q1 FY27 (screener): revenue ₹4,560 Cr; OP ₹3,546 Cr (78%); other income ₹784 Cr; PAT **₹3,120 Cr** (+6.7% YoY) [V].
- Market shares Q4 FY26: cash 93%, futures ~100%, options (premium) 73%, currency ~100%, electricity futures 72% (lots) [V].
- Scale: ~25.7 cr investor accounts; ~13 cr unique investors; 2,979 listed companies; Core SGF ~₹13,079 Cr; colo 1,826 racks [V].
- Valuation 25-Oct-26: ₹1,669; m-cap ₹4,12,966 Cr; P/E 44.9× TTM; ROCE 40.6%; ROE 28.6% [V].

## 2.5 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {"company":"BSE Ltd","nse":"BSE","bse":null,"fy":"FY26","revenue":5124,"revenue_prev":3212,"rev_growth_pct":59.5,"ebitda_op":3480,"opm_pct":67.9,"other_income":24,"pat":2487,"pat_prev":1322,"ttm_pat":2822,"roce_pct":60.0,"roe_pct":46.0,"borrowings":0,"investments_screener":3837,"net_worth":6673,"mcap":131779,"price":3231,"pe_ttm":46.5,"pe_fy26":53.0,"pb":19.7,"div_yield_pct":0.31,"ev_ebitda":36.8,"q1fy27_rev":1566,"q1fy27_op":1046,"q1fy27_pat":873,"q1fy26_rev":958,"q1fy26_op":625,"q1fy26_pat":538,"premium_adto_fy25":8977,"premium_adto_fy26":19522,"premium_adto_q1fy27":29615,"premium_share_q1fy27_pct_est":31.5,"cash_adtv_q1fy27":9955,"fee_per_cr_premium_per_side":3250,"txn_charges_q1fy27":1327.7,"starmf_rev_fy26":285,"cdsl_stake_pct":15,"promoter_pct":0,"fii_pct":17.10,"dii_pct":25.89,"public_pct":56.70,"q1_result_date":"2026-08-05","q2_board_date":"2026-11-04"},
  {"company":"Multi Commodity Exchange of India","nse":"MCX","bse":"534091","fy":"FY26","revenue":2302,"revenue_prev":1113,"rev_growth_pct":106.8,"ebitda_op":1642,"opm_pct":71.3,"other_income":127,"pat":1332,"pat_prev":560,"ttm_pat":1542,"roce_pct":71.4,"roe_pct":56.3,"borrowings":5,"investments_screener":2949,"cash_equivalents":2537,"sgf":1367,"net_worth":2848,"own_net_cash_est":2600,"mcap":77015,"price":3020,"pe_ttm":50.0,"pe_fy26":57.8,"pb":27.0,"div_yield_pct":0.26,"ev_ebitda":45.1,"q1fy27_rev":702,"q1fy27_op":494,"q1fy27_pat":413,"q1fy26_rev":373,"q1fy26_op":241,"q1fy26_pat":203,"q4fy26_rev":889,"q4fy26_pat":530,"options_premium_adt_fy25":3131,"options_premium_adt_fy26":6534,"options_premium_adt_q4fy26":10628,"options_premium_adt_q1fy27":9086,"options_notional_adt_q1fy27":989691,"futures_adt_fy26":64407,"futures_adt_q1fy27":59674,"traded_clients_q1fy27_lakh":13.72,"software_cost_fy26":105,"employee_cost_fy26":180,"promoter_pct":0,"fii_pct":27.06,"dii_pct":55.16,"public_pct":17.57,"q1_result_date":"2026-08-04","q2_board_date":"2026-11-03"},
  {"company":"Indian Energy Exchange","nse":"IEX","bse":"540750","fy":"FY26","revenue":616,"revenue_prev":537,"rev_growth_pct":14.7,"ebitda_op":520,"opm_pct":84.4,"other_income":151,"pat":493,"pat_prev":429,"ttm_pat":507,"roce_pct":51.4,"roe_pct":39.4,"borrowings":11,"investments_screener":1993,"net_worth":1364,"mcap":9024,"price":101,"pe_ttm":17.8,"pe_fy26":18.3,"pb":6.6,"div_yield_pct":3.46,"ev_ebitda":13.5,"q1fy27_rev":158,"q1fy27_op":131,"q1fy27_pat":135,"q1fy26_rev":142,"q1fy26_op":115,"q1fy26_pat":121,"volume_fy26_bu":141.1,"volume_q1fy27_mu":37534,"volume_q2fy27_mu":39685,"volume_q2fy27_yoy_pct":12.7,"rtm_q2fy27_mu":16490,"dam_q2fy27_mu":14855,"dam_price_q2fy27":5.7,"px_total_fy26_bu":168.55,"iex_share_fy26_pct_est":83.7,"fee_paise_per_side":2.0,"promoter_pct":0,"fii_pct":12.02,"dii_pct":31.79,"public_pct":55.93,"q1_result_date":"2026-07-23","q2_board_date":"2026-10-29"},
  {"company":"National Stock Exchange of India (context)","nse":null,"bse":"544937","fy":"FY26","revenue":16601,"revenue_prev":17141,"rev_growth_pct":-3.2,"ebitda_op":11265,"ebitda_company":11098,"pat":10302,"pat_prev":12188,"roe_pct":28.6,"mcap":412966,"price":1669,"ipo_price":1785,"listing_date":"2026-09-24","pe_ttm":44.9,"q1fy27_rev":4560,"q1fy27_pat":3120,"options_premium_adto_fy26":57662,"options_premium_adto_q1fy27":64352,"options_share_q1fy27_pct":68.48,"cash_share_q4fy26_pct":93,"q2_board_date":"2026-11-03"}
]
```

## 2.6 Conflicts and gaps (company level)
1. **BSE:** four revenue bases (screener ₹5,124 Cr; rev ops ₹4,834 Cr; total ₹5,148 Cr; Q1 company total income ₹1,706.8 Cr vs screener ₹1,566 + ₹160 OI = ₹1,726 Cr). CDSL stake 15% (not ~24%) and its accounting basis unverified. FY24 premium ADTO in primer ("~₹50 Cr") is wrong. Notional ADTO units conflict (₹237 lakh Cr vs ₹2.37 tn).
2. **MCX:** EBITDA margin basis (71% screener vs 72.3–73% company). Electricity-futures share conflict with NSE. Migration date: 16-Oct-2023 (correct) vs brief's Oct-2024. Q1 FY26 PAT base ₹203.2 Cr (screener/ICICI) vs one summary's "₹11,092 lakh" — use ₹203 Cr.
3. **IEX:** revenue ₹616 Cr (screener, rev ops) vs primer "₹747 Cr consolidated revenue" (total income basis). IGX now associate → FY27 consolidated comparability. Coupling status unverified. Share basis.
4. **NSE:** DRHP date (June-2026) vs stockbroking.html "10-Sep-2026"; listing price single-source.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (₹ Cr; screener consolidated 25-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP | OPM % | PAT | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | M-cap | % of members' m-cap | P/E TTM | EV/EBITDA (FY26) | Activity (latest) | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BSE | 5,124 | +59.5 | 3,480 | 67.9 | 2,487 | 1,566 | +63.5 | 66.8 | 873 | 1,31,779 | 60.5 | 46.5 | ~36.8× | Premium ADTO ₹29,615 Cr | Share ~31.5% [E] |
| MCX | 2,302 | +106.8 | 1,642 | 71.3 | 1,332 | 702 | +88.2 | 70.4 | 413 | 77,015 | 35.4 | 50.0 | ~45.1× | Options premium ADT ₹9,086 Cr | Futures ADT ₹59,674 Cr |
| IEX | 616 | +14.7 | 520 | 84.4 | 493 | 158 | +11.3 | 82.9 | 135 | 9,024 | 4.1 | 17.8 | ~13.5× | 39,685 MU (Q2 FY27, +12.7%) | ~4.3 p/kWh |
| **Total (3)** | **8,042** | **+65.4** | **5,642** | **70.2** | **4,312** | **2,426** | **+64.7** | **68.9** | **1,421** | **2,17,818** | 100 | **44.7× (agg. m-cap ÷ agg. TTM PAT ₹4,871 Cr); 50.5× FY26** | — | | |

Notes: Q1 FY26 bases are screener (BSE ₹958/₹625/₹538; MCX ₹373/₹241/₹203; IEX ₹142/₹115/₹121 Cr). All three have no promoter; all are effectively debt-free.

## 3.2 Aggregates

**Basis: straight sums of the company rows above — screener consolidated FY26 and FY25 (revenue = screener "Sales"; PAT = reported net profit, which for all three equals PAT attributable to owners, no material minorities); Q1 FY27 vs Q1 FY26; m-cap 25-Oct-26. Ratios are ratios of sums.** NSE is shown separately as context and never included in member totals.

**(a) FY26 by subgroup [E]**

| Group | Members | FY26 rev | FY25 rev | YoY | OP | OPM | PAT | FY25 PAT | PAT YoY | M-cap | Agg. P/E FY26 | Agg. P/E TTM |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All three | BSE, MCX, IEX | 8,042 | 4,862 | +65.4% | 5,642 | 70.2% | 4,312 | 2,311 | +86.6% | 2,17,818 | 50.5× | 44.7× |
| **Securities & commodity exchanges** | BSE, MCX | 7,426 | 4,325 | +71.7% | 5,122 | 69.0% | 3,819 | 1,882 | +102.9% | 2,08,794 | 54.7× | 47.8× |
| Power exchange | IEX | 616 | 537 | +14.7% | 520 | 84.4% | 493 | 429 | +14.9% | 9,024 | 18.3× | 17.8× |
| *Context: members + NSE* | 4 | 24,643 | 22,003 | +12.0% | 16,907 | 68.6% | 14,614 | 14,499 | +0.8% | 6,30,784 | 43.2× | — |

- BSE is **63.7% of members' revenue and 60.5% of m-cap**; MCX **28.6% / 35.4%** (the market pays more per rupee of MCX revenue); IEX **7.7% / 4.1%** (the coupling discount).
- Members' FY26 PAT ₹4,312 Cr = **42% of NSE's ₹10,302 Cr**; members' m-cap = **53% of NSE's** [E].

**(b) Q1 FY27 vs Q1 FY26 [E]**

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | OPM | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|
| All three | 2,426 | 1,473 | +64.7% | 1,671 | 981 | +70.3% | 68.9% / 66.6% | 1,421 | 862 | +64.8% |
| BSE + MCX | 2,268 | 1,331 | +70.4% | 1,540 | 866 | +77.8% | 67.9% / 65.1% | 1,286 | 741 | +73.5% |
| IEX | 158 | 142 | +11.3% | 131 | 115 | +13.9% | 82.9% / 81.0% | 135 | 121 | +11.6% |
| QoQ check (all three vs Q4 FY26: rev 2,627; OP 1,855; PAT 1,455) | 2,426 | 2,627 | −7.7% QoQ | 1,671 | 1,855 | −9.9% QoQ | | 1,421 | 1,455 | −2.3% QoQ |

**Read:** YoY growth is still ~65% because Q1 FY26 was pre-share-shift for BSE and pre-bullion-spike for MCX; **QoQ the group has already turned down (−8% revenue)** — MCX −21%, BSE flat, IEX −9% (seasonal). The writer should not present FY26/Q1 FY27 growth as run-rate.

**(c) Balance sheet (screener, Mar-26) [E]**
- Borrowings: BSE 0; MCX 5; IEX 11 → **₹16 Cr** (lease liabilities).
- Investments (screener): 3,837 / 2,949 / 1,993 → **₹8,779 Cr**; screener-basis net cash ₹8,763 Cr.
- Net worth: 6,673 / 2,848 / 1,364 → **₹10,885 Cr**; aggregate ROE on average equity ≈ 4,312 ÷ ~9,165 (avg of Mar-25 ₹7,444 Cr and Mar-26 ₹10,885 Cr) ≈ **~47%** [E].
- Do **not** add "other assets" (₹13,335 Cr combined) — mostly clearing members' margins and settlement balances.

**(d) Ownership (Sep-26, simple averages) [E]**
- Promoter: 0% at all three.
- FII: 18.7% average (BSE 17.10, MCX 27.06, IEX 12.02). DII: 37.6% (25.89 / 55.16 / 31.79). Public/retail: 43.4% (56.70 / 17.57 / 55.93).
- BSE (11.6 lakh) and IEX (14.3 lakh) have very large retail shareholder bases.

**(e) Native-KPI aggregates (on one basis) [E]**
- Equity options premium ADTO, BSE + NSE: Q1 FY27 **₹93,967 Cr/day** (29,615 + 64,352) vs Q1 FY26 **₹70,628 Cr** (+33%) — **total premium traded rose a third in the first STT-hike quarter.**
- Exchange-traded power FY26: 168.55 BU (IEX 141.1).

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (25-Oct-26) | Use |
|---|---|---|---|---|
| BSE | FY26 revenue | ₹5,148 Cr "total revenue"; ₹4,834 Cr rev ops | ₹5,124 Cr screener sales | Screener for tables; explain basis |
| BSE | FY26 PAT | ₹2,487 Cr | ₹2,487 Cr | Same |
| BSE | EBITDA margin | ~64% | OP 68% (screener) | Screener; company basis differs (Core SGF, treasury) |
| BSE | M-cap / P/E | ~₹1.6 lakh Cr / ~64× (Jul-26) | **₹1,31,779 Cr / 46.5× TTM** (53× FY26) | Screener (−18% since primer) |
| BSE | ROE / ROCE | ~45% / ~58% | 46% / 60% | Screener |
| BSE | CDSL stake | ~24% | **15%** (MII cap) [V-sib] | 15% |
| BSE | Premium ADTO FY24 | "~₹50 Cr" | NSE share 96.86% FY24 → BSE ~3% of a ~₹50,000 Cr+ pool ≈ ₹1,500–2,000 Cr [E] | Fix |
| BSE | Options share | ~27% (Q3 FY26) | ~25% FY26; ~27% Q3–Q4 FY26; 31.5% Q1 FY27; 32.4% Jun-26 | Web |
| BSE | Q1 FY27 | not covered | Rev 1,566; PAT 873; premium ADTO 29,615 (+96%); cash ADTV 9,955 | Web |
| BSE | Ownership | Public ~55, DII ~25, FII ~19 (Mar-26) | Public 56.70, DII 25.89, FII 17.10 (Sep-26) | Screener |
| BSE | NSE status | implicit unlisted rival | **NSE listed on BSE 24-Sep-26; ₹4.13 lakh Cr** | Web |
| MCX | FY26 rev / PAT | 2,302 / 1,332 | 2,302 / 1,332 | Same |
| MCX | EBITDA margin | ~73% | 71% screener; 71.5% ICICI | Screener |
| MCX | M-cap / P/E | ~₹75,000 Cr / ~54× | **₹77,015 Cr / 50.0× TTM** | Screener |
| MCX | Investments/cash | ~₹2,900 Cr | Investments ₹2,889–2,949 Cr + cash ₹2,537 Cr gross (incl. SGF/margins) | Say "own net cash ~₹2,600 Cr [E]" |
| MCX | Ownership | DII ~54, FII ~26, public ~19 | DII 55.16, FII 27.06, public 17.57 | Screener |
| MCX | Q1 FY27 | not covered | Rev 702 (−21% QoQ); PAT 413; prem ADT 9,086; notional 9.9 lakh Cr | Web |
| MCX | CDP go-live | 16-Oct-2023 | Same [K] (brief's "Oct-2024" is wrong) | Primer |
| IEX | FY26 revenue | "~₹747 Cr consolidated revenue" | ₹616 Cr rev ops (screener); ~₹767 Cr incl. OI | Screener; relabel primer |
| IEX | FY26 PAT | ₹492.9 Cr | ₹493 Cr | Same |
| IEX | M-cap / P/E / price | ~₹10,900 Cr / ~22× / ~₹121 | **₹9,024 Cr / 17.8× / ₹101** (52-wk low ₹100) | Screener (−17%) |
| IEX | Coupling history | "2023–24 surfaced and deferred"; draft Apr-26 | **CERC order 23-Jul-2025** (DAM by Jan-26), Jan-26 corrigendum, APTEL dismissal Feb-26, draft 17-Apr-26, **SC no stay 27-Jul-26** | Web |
| IEX | IGX | subsidiary | **Associate**; OFS to 25%; DRHP observation 12-Oct-26 | Web |
| IEX | Q1/Q2 FY27 | not covered | Q1 PAT ₹134–135 Cr; Q2 volume 39,685 MU (+12.7%); DAM ₹5.7 (+46%) | Web |
| IEX | IPO price | "debuting at ₹1,500" | Issue price ₹1,650 [K] (listing ~₹1,500 below issue [K]) | Clarify |

## 3.4 Primer issues (format as primer-issues.md)

### From Exchanges research (2026-10-25, exchanges-industry.md §3.4)

- **bse-limited.html — CDSL stake wrong:** "~24% stake in the depository CDSL" (title deck, §07, stat "~24%") is outdated. **BSE holds 15% of CDSL**, the SEBI cap for an exchange in an MII (it sold down from 24% to 20% to 15% by 2019 [K]); market-infra.html already says 15% [V-sib]. Also verify "associate" accounting before saying so.
- **bse-limited.html — FY24 premium ADTO "~₹50" is wrong/misleading:** the bar chart labels FY24 "~₹50" Cr as "illustrative". NSE held 96.86% of options premium in FY24, so BSE's FY24 average was roughly ₹1,500–2,000 Cr/day [E]. Replace with a sourced figure or drop the FY24 bar.
- **bse-limited.html — valuation stale:** m-cap ~₹1.6 lakh Cr → **₹1,31,779 Cr**; P/E ~64× → **46.5× TTM (53× FY26)**; the "~64×" phrase appears ~10 times in the text (title, §00, §09, §11). Price ₹3,231, 27% below the 52-week high ₹4,447.
- **bse-limited.html — options share stale:** "~27% (Q3 FY26)" → **~31.5% in Q1 FY27** (₹29,615 vs NSE ₹64,352 Cr), 32.4% in Jun-26 (Jefferies). Add NSE's share series (96.86 → 87.43 → 74.71 → 68.48%).
- **bse-limited.html — Q1 FY27 omitted (refreshed 1-Jul):** revenue ₹1,566 Cr (+63%), transaction charges ₹1,327.7 Cr (+80%), EBITDA ₹1,046 Cr (67%), PAT ₹874 Cr (+62%), premium ADTO ₹29,615 Cr (+96%), cash ADTV ₹9,955 Cr (record), StAR MF 234 mn orders (+28%), Focused IT derivatives (May-26), co-location 500 racks, Deutsche Börse data partnership ending 1-Jan-2027.
- **bse-limited.html — NSE is now listed:** the primer treats NSE as an unlisted rival. **NSE listed on BSE on 24-Sep-2026** (₹22,562 Cr OFS, 5.7× subscribed); at ₹4.13 lakh Cr it is the obvious valuation comparable (44.9× TTM vs BSE 46.5×). Also note BSE now earns listing fees from NSE.
- **bse-limited.html — revenue basis:** "Revenue from operations ₹4,834 Cr" vs screener ₹5,124 Cr; "Total revenue ₹5,148 Cr". State the basis once (clearing-fund investment income) and keep it consistent across stat strip, §04 and §09.
- **bse-limited.html — missing 2026 items:** Budget-2026 STT hike is mentioned only generically ("raised to 0.15%") — give dates (1-Apr-2026) and the 1-Oct-2024 step; the SEBI weekly-expiry review (Sep-2025) is not mentioned; the **MD & CEO search (ad 22-Oct-2026)** is new; the **RBI bank-guarantee rules** flagged by management are missing.
- **bse-limited.html — "BSE 500 primers" wink (§00):** the library now tracks the NSE 750; the line "this primer library is called 'BSE 500 primers'" may be stale — check with the owner.
- **mcx.html — valuation stale:** ~₹75,000 Cr / ~54× → **₹77,015 Cr / 50.0× TTM (57.8× FY26)**.
- **mcx.html — Q1 FY27 omitted (refreshed 3-Jul):** revenue ₹702 Cr (+88% YoY, **−21% QoQ**), PAT ₹413 Cr (−22% QoQ), options premium ADT ₹9,086 Cr (vs ₹10,628 Cr Q4), notional ₹9.9 lakh Cr (+266%), bullion premium/notional 1.03% → 0.35%, futures ADT ₹59,674 Cr, traded clients 13.72 lakh, ICICI Direct downgrade to HOLD. The primer's growth narrative needs the "volatility normalisation" caveat.
- **mcx.html — omissions:** **gold/silver import duty to 15% (13-May-2026)**; Silver 100 g (1-Jun-26) and Gold 10 g contracts; **outages (23-Jul-2025 halt; 28-Oct-2025 4-hour outage; SEBI probe/penalty risk)** — the primer says "it went well… that particular overhang is behind the company" and never mentions 2025 outages; **MCX Mineral Exchange of India (16-Oct-26)** and MCX Coal Exchange incorporation; RBI bank-guarantee rules; FPI count (~220).
- **mcx.html — competition understated:** NSE claims **72% of electricity futures (by lots, Jul-25–Mar-26)** vs MCX's ~55% (ADT) / >70% (OI) — the primer presents electricity as MCX's new pool without NSE's challenge. NSE also launched Gold 10 g futures, EGRs and a Platts collaboration.
- **mcx.html — EBITDA basis:** "~73% EBITDA margin" vs screener OP 71% / ICICI 71.5%. Label as company basis incl. other income.
- **mcx.html — cash:** "~₹2,900 crore of investments and cash" understates gross balances (₹5,426 Cr) but those include SGF ₹1,367 Cr and member margins; say "own net cash ~₹2,600 Cr [E]".
- **indian-energy-exchange.html — coupling history incomplete/wrong:** the timeline says coupling "first surfaces… 2023–2024… deferred" and treats the **Apr-2026 draft** as the main event. It omits the **CERC order of 23-Jul-2025** (DAM coupling by Jan-2026, round-robin MCO; IEX fell ~28–29% the next day), IEX's APTEL appeal and its **Feb-2026 dismissal**, the Jan-2026 corrigendum ("order" → "directions"), and the **Supreme Court's refusal of a stay on 27-Jul-2026**. "The stock's first serious de-rating" was July-2025, not 2023–24.
- **indian-energy-exchange.html — revenue label:** "~₹747 Cr consol. revenue (FY26)" in the stat strip is total income; revenue from operations is **₹616 Cr** (screener). Fix label or number; the "revenue grew 13.6%" line mixes bases.
- **indian-energy-exchange.html — valuation stale:** ~₹10,900 Cr / ₹121 / ~22× → **₹9,024 Cr / ₹101 / 17.8×**; dividend yield 3.46%.
- **indian-energy-exchange.html — IGX now an associate:** the primer calls IGX a "subsidiary". IEX is diluting to 25% (PNGRB); SEBI observation on IGX's DRHP 12-Oct-2026. Consolidated FY27 numbers will not be comparable.
- **indian-energy-exchange.html — Q1/Q2 FY27 and prices:** add Q1 FY27 PAT ₹134–135 Cr and Q2 FY27 volume 39,685 MU (+12.7%; RTM +10.5%; TAM/DAC +101.5%; green −5.8%; RECs −65.5%). The "volume up, prices down" framing has reversed: **DAM ₹5.7/kWh in Q2 FY27 (+46%)**, ~₹7.3 in Sep-26 — price-cap binding risk.
- **indian-energy-exchange.html — IPO detail:** "lists… debuting at ₹1,500" — the issue price was ₹1,650 (Oct-2017) [K]; say "₹1,650 issue price; listed below issue".
- **indian-energy-exchange.html — share basis:** add CEA/CERC FY26 total PX volume 168.55 BU → IEX ~84% [E]; short-term market 17.70% of electricity, PX 9.87%.
- **General (all three):** none mentions **NSE's IPO/listing (24-Sep-2026)**; none mentions the **SEBI FY26 loss study (87.7%, ₹91,685 Cr)**; market caps are 3–4 months stale (BSE −18%, MCX +3%, IEX −17%).
- **Cross-report (stockbroking.html):** "NSE's draft prospectus filed on 10 September 2026" and "NSE IPO pending" — NSE filed its DRHP in June-2026 and **listed on 24-Sep-2026**; update. All other shared facts (87.7%, ₹91,685 Cr, STT schedule, NSE share 96.86 → 68.48%, NSE ADTO) are **consistent** with this dossier.
- **Cross-report (market-infra.html):** consistent (BSE 15% of CDSL; demat 23.2 crore Jun-26).
- **Brief/queue note:** queue.json says SEBI curbs ran "Nov-2024 to Dec-2025" — consistent; the brief's "MCX Oct-2024 migration" is wrong (16-Oct-2023).

## 3.5 Key source URLs
- **Screener (25-Oct-2026, curl):** https://www.screener.in/company/BSE/consolidated/ · https://www.screener.in/company/MCX/consolidated/ · https://www.screener.in/company/IEX/consolidated/ · https://www.screener.in/company/544937/consolidated/ (NSE)
- **NSE Q4 FY26 press release + investor presentation (5-May-2026):** https://nsearchives.nseindia.com/web/pressrelease/2026-05/PR_cc_05052026_20260505191148.pdf
- **NSE IPO:** https://www.kotakneo.com/ipo/nse-ipo/ · https://www.5paisa.com/news/nse-ipo-drhp-filed-sebi-key-details-investors · https://www.moneylife.in/article/nse-files-for-rs30000-crore-ipo-sbi-and-gic-re-among-key-selling-shareholders/80806.html · settlement: https://www.outlookbusiness.com/markets/sebi-clears-nses-1491-cr-co-location-settlement-removing-major-ipo-hurdle · https://www.moneylife.in/article/sc-disposes-of-sebis-pleas-against-nse-after-1500-crore-settlement-report/81559.html
- **BSE Q1 FY27:** https://www.multibagg.ai/market-pulse/articles/bse-q1fy27-97234 · https://www.business-standard.com/markets/capital-market-news/bse-q1-pat-rises-62-yoy-126080500302_1.html
- **Jefferies monthly (Jun-26):** https://www.businesstoday.in/markets/stocks/story/bse-index-options-market-share-falls-in-june-groww-mtf-book-grows-jefferies-540760-2026-07-03
- **MCX Q1 FY27:** https://mailcontent.icicidirect.com/mailcontent/idirect_mcx_q1fy27.pdf · https://www.multibagg.ai/market-pulse/articles/mcx-q1fy27-97237
- **IEX:** Q2 volumes https://www.freepressjournal.in/business/iex-power-trading-volume-rises-127-to-39685-mu-in-q2-fy27-real-time-market-up-105 · Q1 results https://www.freepressjournal.in/business/indian-energy-exchange-reports-q1-fy27-consolidated-net-profit-of-13378-crore · SC/coupling https://www.sahi.com/news/iex-market-coupling-cerc-informs-supreme-court-of-upcoming-rule-implementation-4616-PE1_COR · APTEL (Oct-2025) https://www.goodreturns.in/news/iex-share-price-remains-under-pressure-ahead-of-cerc-hearing-q2-result-what-should-be-investors-s-1465941.html · draft regs https://solarquarter.com/2026/04/30/cerc-draft-regulations-2026-introduce-market-coupling-for-centralized-power-price-discovery/ · https://indianinfrastructure.com/2026/04/21/cerc-issues-draft-cerc-power-market-second-amendment-regulations-2026/ · July-2025 order https://www.business-standard.com/markets/capital-market-news/indian-energy-exchange-slumps-after-cerc-announces-decision-to-initiate-power-market-coupling-125072400557_1.html
- **SEBI FY26 F&O study (summary):** https://www.finnovate.in/learn/blog/sebi-fno-trader-losses-fy26-individual-derivatives · https://www.outlookmoney.com/invest/sebi-futures-options-study-transaction-costs-traders-losses-fy26
- **Gold duty:** https://www.outlookmoney.com/invest/gold-silver-prices-on-mcx-surge-after-govt-raises-import-duty-to-15-per-cent · https://ianslive.in/gold-silver-prices-surge-up-to-8-pc-after-import-duty-hike--20260513101711
- **RBI CMI credit rules:** https://elplaw.in/leadership/rbi-issues-new-framework-for-bank-credit-facilities-to-capital-market-intermediaries/ · https://moneylife.in/article/100-percentage-collateral-40-percentage-haircuts-rbi-resets-economics-of-trading-and-brokerage/79689.html
- **MCX outages:** https://www.business-standard.com/markets/news/sebi-seeks-details-mcx-outage-trading-glitch-investigation-october-2025-125102801207_1.html · https://www.outlookbusiness.com/corporate/mcx-disruption-due-to-predefined-trade-limit-may-face-sebi-penalty
- **SEBI weekly-expiry review (2025):** https://www.outlookmoney.com/news/sebi-to-float-consultation-paper-on-endin-futures-and-options-weekly-expiry-soon-tuhin-kanta-pandey
- **Global peers (aggregator, Oct-2026):** https://companiesmarketcap.com/cme-group/pe-ratio/ (and /intercontinental-exchange/, /deutsche-boerse/, /hong-kong-exchanges-and-clearing/, /nasdaq/, /b3/, /japan-exchange-group/, /singapore-exchange/ — pe-ratio, revenue, marketcap pages)
- **Sibling reports:** subsectors/stockbroking.html (F&O measures, STT, SEBI study, NSE share series); subsectors/market-infra.html (CDSL 15%, demat).
- Scratch notes: /tmp/exchanges-dossier/notes-primers.md; raw pages /tmp/exchanges-dossier/raw/.
