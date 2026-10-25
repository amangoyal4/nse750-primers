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


---

# PART 4 — DEEP-RESEARCH SUPPLEMENT (2026-10-25)

Second, primary-source pass, run 25-Oct-2026 (UTC). It supersedes Parts 1–3 wherever they conflict. **[V]** here means the figure was read this session from the named document, which was actually downloaded (PDF text-extracted or HTML fetched). **[V-p]** marks a *primary* source: a company filing, investor deck, concall transcript, annual report, exchange circular, regulator study or Government document. **[V-s]** marks a secondary page that was fetched (news, aggregator). **[V-snip]**, **[K]** and **[E]** keep their Part 1 meanings.

**Primary documents read this session** (scratch copies are in /tmp/exchanges-deep/raw/; notes are in /tmp/exchanges-deep/notes.md):
- **BSE:** Q1 FY27 investor presentation (4-Aug-26, 32 slides). Q1 FY27 concall transcript (call 4-Aug, filed 10-Aug). FY26 Annual Report (~300 pp: MD&A, associates note, contingent liabilities, regulatory-contribution note, AOC-1). Notice 20240927-37 (transaction charges).
- **MCX:** Q1 FY27 investor presentation (filed 5-Aug-26). Q1 FY27 concall transcript (call 5-Aug, filed 12-Aug). FY26 Integrated Annual Report (MD&A tables, expenditure note, contingent liabilities, secretarial audit). Circular MCX/F&A/631/2024 (fees).
- **IEX:** Analyst Meet 2026 deck and full transcript (24-Jul-26; this was the Q1 FY27 event). Q4 FY26 investor deck. FY26 Annual Report (product caps, IGX, contingent liabilities, Note 46 whistle-blower, Note 47 coupling). Media release of 6-Oct-26 (Q2 FY27 volumes). Board and earnings-call intimations of 22–23-Oct-26.
- **Regulator and Government:** SEBI study *Profitability of Individual Traders in the Equity Derivatives Segment (FY25–FY26)* (Aug-2026, 91 pp). SEBI PR 22/2024 (23-Sep-2024). Finance Bill 2026 Memorandum and Finance Bill text (indiabudget.gov.in). NSE circular NSE/FA/64232 (27-Sep-2024).
- **Screener:** consolidated pages for BSE, MCX and IEX, re-pulled 25-Oct-26 10:52 UTC. They match every screener figure in Parts 1–3.
- **Global peers:** ICE FY2025 release (via Mondo Visione), CME FY2025 release (PR Newswire), LSEG FY2025 preliminary results (lseg.com), HKEX 2025 results presentation (hkex.com.hk), companiesmarketcap P/E pages (CME, ICE, Deutsche Börse, HKEX).
- **Not obtainable:** CERC site (404 or JavaScript-rendered), CEA market-monitoring PDF (404), NSDL statistics (empty reply), SEBI press-release search (HTTP 530), Business Standard and Zee (403), and the NSE website.

## 4.0 Supersedes (corrections to Parts 1–3; the writer should apply these)

| # | Where in Parts 1–3 | Old value / claim | New value / claim | Source (fetched) |
|---|---|---|---|---|
| S1 | §0, §7.5, §12, B3, 2.3, 3.3 (IEX coupling legal path) | "Supreme Court refused an interim stay on 27-Jul-2026 and **admitted the appeal for a merits hearing**" | **27-Jul-2026 was the second SC hearing date. On 3-Aug-2026 the SC declined to intervene "at this stage"**: CERC may go on framing the regulations, IEX may challenge the *final* regulations once notified, and the court took no view on merits. In substance the SC disposed of the plea; no merits hearing is pending. The court called the PX segment "an unorganised space… in need of regulation". | IEX Analyst Meet transcript 24-Jul-26 [V-p] (hearing "on Monday 27th July"); PowerPeakDigest, order of 3-Aug-2026 [V-s]; Business Standard headline "SC allows CERC to frame mkt-coupling regulations, dismisses IEX challenge" [V-snip] |
| S2 | §7.5 timeline | APTEL dismissal "Feb-2026"; draft comments "to 16-May-2026" | **IEX appealed to APTEL on 28-Aug-2025. APTEL's order of 13-Feb-2026 held IEX "not aggrieved" until regulations are framed. Draft-regulation comments ran to 5-Jun-2026 (extended), with a public hearing on 10-Jun-2026.** | IEX Analyst Meet deck slides 22–23 [V-p] |
| S3 | §0, §5.2, 2.3 pack, 3.3, C.3, "Still listed?" item 2 | "IGX **is now** an associate… from the quarter of deconsolidation IEX's consolidated revenue will drop IGX's revenue"; C.3 adds "+ IGX ~₹52 Cr" to reconcile revenue | **IGX was already an equity-accounted associate (47.28%) in both FY25 and FY26.** Share of profit was ₹19.80 Cr in FY26 vs ₹14.63 Cr in FY25. Screener's ₹616 Cr FY26 revenue therefore **already excludes IGX** (standalone revenue ~₹608 Cr). **There is no FY27 deconsolidation step-down.** The only FY27–28 effect is a likely one-off gain when IEX sells ~22.3% in IGX's IPO OFS to reach 25% (the PNGRB 5-year window ended Dec-2025; a 1-year extension was granted). | IEX FY26 Annual Report, Directors' Report and financial notes [V-p]; Analyst Meet transcript [V-p] |
| S4 | bse-limited primer, §3.3, §3.4 | BSE FY24 premium ADTO "~₹50 Cr" (primer); "~₹1,500–2,000 Cr [E]" (Part 3) | **FY24 by quarter: ₹47 Cr (Q1), ₹768 Cr (Q2), ₹2,551 Cr (Q3), ₹4,630 Cr (Q4); simple average ≈ ₹2,000 Cr/day.** The primer's "~₹50" is the Q1 FY24 figure (the first quarter after the May-2023 relaunch). | BSE Q1 FY27 deck slide 13 [V-p] |
| S5 | E1 (BSE quarterly premium ADTO, "derived") | Q1 FY26 ~15,114 [E]; Q2 ~14,970 [E]; Q3 ~19,754 [E]; Q4 ~28,250 [E] | **Actual: Q1 FY26 ₹15,084 Cr; Q2 ₹15,005 Cr; Q3 ₹19,459 Cr; Q4 ₹28,921 Cr; Q1 FY27 ₹29,615 Cr.** Full series Q1 FY24–Q1 FY27 in §4.3 D1. | BSE deck slide 13 [V-p] |
| S6 | §H3, 9.1, 2.6 (BSE notional "unit conflict") | ₹237 lakh Cr vs "2.37 trillion" | **₹237 trillion = ₹237 lakh Cr per day (Q1 FY27).** FY26 average **₹1,87,15,375 Cr (₹187 lakh Cr)/day**; FY25 ₹1,10,66,674 Cr. Premium/notional: **8.1 bps (FY25) → 10.4 bps (FY26) → 11.8 bps (Q4 FY26) → 12.5 bps (Q1 FY27)**. "2.37 trillion" is wrong by 100×. | BSE deck slides 7 and 13; BSE AR FY26 MD&A p.46–47 [V-p] |
| S7 | §0, 7.6, H18, §12 | RBI bank-guarantee rules "effective 1-Apr-2026 (one source says 1-Jul)" | **Effective 1-Jul-2026.** BSE's MD said both the STT hike and the RBI circular were due on 1-Apr but **"the RBI circular was postponed, and it has started taking effect from July 1st"**. MCX's MD: "meant to come into effect in April… 90-day [absorption]… now in force… a Q2 action". BSE added that remnant bank guarantees may mature over coming months, so the full effect lags. | BSE and MCX Q1 FY27 transcripts [V-p] |
| S8 | §4.1, 9.1, F (BSE reg + clearing cost) | "~17% of revenue [E]" | **FY26: regulatory contribution ₹649.7 Cr (13.4% of revenue from operations ₹4,834 Cr), of which the SEBI regulatory fee is ₹566.2 Cr (FY25 ₹331.4 Cr, +71%), plus clearing & settlement expenses ₹280.4 Cr (5.8%) → 19.2% of revenue from operations.** These two lines are 55% of FY26 opex ex-D&A; in Q1 FY27 regulatory ₹192.8 Cr + C&S ₹90.3 Cr = 53% of total opex incl. D&A, matching management's "54%". | BSE AR FY26 note 27; BSE deck slide 25 [V-p] |
| S9 | 2.1 pack, §1.3, H4 (BSE revenue mix "primer, approximate") | Treasury ~₹315 Cr; data ~₹280 Cr; listing ~₹500 Cr | **FY26 consolidated (₹ Cr): transaction charges 3,795.0; treasury income on clearing & settlement funds 171.4; listing services 519.0; other operating income 348.5 → revenue from operations 4,834.0; investment income 290.3; other income 23.9 → total income 5,148.1.** Equity-derivatives revenue FY26 = ₹3,134 Cr (sum of quarterly slide figures 598/624/784/1,128), i.e. **64.8% of revenue from operations** (primer's "~65%" confirmed). | BSE deck slides 10, 13, 25 [V-p] |
| S10 | §H5, trap 4, primer issue | "Whether BSE still equity-accounts CDSL as an associate — VERIFY" | **Verified: CDSL is an associate, equity-accounted, at 15%** (3,13,50,000 shares; associated since 16-Jun-2010). Share of CDSL profit taken in FY26: ₹68.42 Cr. BSE's share of CDSL net worth: ₹1,959.78 Cr. Total share of associates FY26: ₹65.4 Cr (FY25 ₹82.6 Cr). **HPX: associate, 22.62%** (FY26 share of profit ₹1.04 Cr). | BSE AR FY26 consolidated note 1/2.x and Form AOC-1 [V-p] |
| S11 | §5.1, §5.2, §H7 | Electricity-futures share unreconciled | Still unreconciled, but MCX's own basis is now quoted: **Q1 FY27 ADT ~₹37 Cr, ~55% share by ADT; open interest ~1,630 lots = >70% of OI.** ADV rose from 1,313 lots (FY26) to 1,544 lots (Q1 FY27). NSE's 72% is by lots over Jul-25–Mar-26. **Different bases and periods; both can be true.** | MCX Q1 transcript; MCX AR FY26 MD&A [V-p] |
| S12 | §7.4, B2, 2.2 pack ("> 15 AMCs reference MCX bullion price") | >15 AMCs | **"At least 50-plus AMCs"** now use the MCX bullion price for AUM valuation (MD, 5-Aug-26). | MCX Q1 transcript [V-p] |
| S13 | E4, §H8 (IEX FY26 segment volumes) | DAM ~55,000 MU [E: 39% of 141.1 BU]; TAM+DAC ~19,750 MU [E: 14%] | IEX's FY26 product-mix pie gives shares of a **159.8 BU base that includes certificates** (1 REC = 1 MWh): DAM 39%, RTM 34%, TAM 6%, DAC 2%, Green 7%, Certificates 12%. So **DAM ≈ 62 BU, RTM 54.9 BU (exact), TAM ≈ 9.6 BU, DAC ≈ 3.2 BU, Green ≈ 11.2 BU**, summing to ≈141 BU. Part 1 applied the 39% to the wrong base. | IEX Q4 FY26 deck slide 7; Analyst Meet slide 10 [V-p]; arithmetic [E] |
| S14 | §11, mcx primer issue ("SEBI probe; penalty possible") | Penalty possible | **FY26 secretarial audit: MCX deposited ₹1 Cr into the MCX Investor Protection Fund as a SEBI "financial disincentive" for a technical glitch, and MCXCCL deposited ₹50 lakh into its Core SGF for another glitch.** Separately, standalone contingent liabilities for "legal & regulatory matters" rose from **₹0.11 Cr to ₹45.79 Cr** (Mar-25 → Mar-26). | MCX AR FY26, Annexure V and note 31 [V-p] |
| S15 | E3, 2.2 pack (MCX FY24 base) | Options premium ADT "~₹1,600 Cr (FY24)"; FY24 futures ADT "n/s" | **FY24: futures ADT ₹19,636 Cr; options premium ₹1,698 Cr; options notional ₹89,243 Cr.** FY25: ₹27,153 / ₹3,131 / ₹1,91,909 Cr. FY26: ₹64,407 / ₹6,534 / ₹4,71,641 Cr. | MCX Q1 FY27 deck slide "ADT Futures and Options" [V-p] |
| S16 | 2.2 pack, E3 ("energy ~70% of options turnover FY26 [primer]") | Basis unclear | **On premium: energy ₹6,647 Cr of ₹9,086 Cr = 73% (Q1 FY27); 68% (Q4 FY26); 84% (Q1 FY26).** On notional, bullion dominates (69% in Q1 FY27). | MCX deck "Breakdown of Turnover" [V-p]; [E] arithmetic |
| S17 | 2.2 pack (MCX SGF ₹1,367 Cr) | ₹1,367 Cr (Mar-26) | **Core SGF ₹1,444 Cr (30-Jun-26)** at MCXCCL (paid-up capital ₹239.99 Cr; 248 clearing members; 10 clearing banks). Update, not an error. | MCX deck [V-p] |
| S18 | §1 "Still listed?" item 1; E-series NSE IPO | Subscription "QIB 12.68×, NII 6.54×, retail 1.37×, employee 2.38×"; listing ₹1,800 "single tracker" | **5.71× overall; QIB 12.68×; NII 6.55×; retail 1.39×; employee 2.40×; 38.4 lakh applications.** Issue size **₹22,561.57 Cr** (12,64,36,650 shares at ₹1,785). Anchor book ₹6,746 Cr from ~189 investors. **Listed 24-Sep-2026 on BSE at ₹1,800 (+0.84%), intraday high ₹1,878.** Second-largest Indian IPO after Hyundai Motor India (₹27,858.75 Cr). Two independent fetched sources agree. | FPJ and HDFC Sky pages [V-s] |
| S19 | §10.1 peer table margins [K] | CME ~65–70% adj op; ICE ~58–60% adj op; LSEG ~48% EBITDA; HKEX ~75–78% EBITDA | **CME 2025: revenue $6,520.6m, operating income $4.2bn → ~64.9% GAAP (69.4% adjusted per proxy snippet). ICE 2025: total revenues $12,640m, net revenues $9,931m, operating margin 50% GAAP / 60% adjusted. LSEG 2025: EBITDA £4,523m, margin 50.3% (2024: 48.8%). HKEX 2025: revenue & other income HK$29.2bn (+30%), EBITDA HK$22.8bn (+40%), EBITDA margin 79% (74% in 2024).** | Company releases [V-p via fetched copies] |
| S20 | 2.1 pack "BSE cash ADTV ~₹7,950 Cr (Q4 FY26) [primer]" | Labelled Q4 FY26 | **₹7,950 Cr is the FY26 average** (+2.36% vs FY25 ₹7,766 Cr; total FY26 cash turnover ₹19.6 lakh Cr). Q1 FY27 ₹9,955 Cr is the record. | BSE AR FY26 MD&A [V-p] |
| S21 | §1 item 5 (BSE MD & CEO) | "took charge in Jan-2022 for five years [K] → term ends ~Jan-2027" | **BSE's own deck (slide 4) says Ramamurthy "Took charge in Jan 2023".** This is a direct conflict with the [K] date. If the deck is right, a 5-year term would run to ~Jan-2028, and the 22-Oct-2026 advertisement would point to an earlier transition or a shorter term. **Writer: say "BSE has begun the search for its next MD & CEO (advertisement 22-Oct-2026)" and avoid stating the term-end date.** A new ED (Vertical 2), Gopalan S. Raghavan, took charge in June 2026. | BSE deck slides 4–6 [V-p] |
| S22 | §2.2, E1 note, 3.2(e) (industry options premium "not published as one number") | "~₹77,200 Cr FY26 derived (INDICATIVE)" | **SEBI publishes it: NSE+BSE options premium turnover ₹69 / 119 / 156 / 178 / 191 lakh Cr in FY22 / 23 / 24 / 25 / 26** (+7% in FY26) → ≈₹77,000 Cr/day in FY26 at ~248 days, which **confirms the derivation**. Index-options premium ADT (NSE+BSE): Nov-24 ₹63,371 Cr → low ₹49,870 Cr (Jul-25) → **record ₹1,18,474 Cr (Mar-26)**. | SEBI FY25–26 study, Tables 5 and 9 [V-p] |
| S23 | §B4, E10 (FY24 loss study [K]) | "FY24 91.1% lost / ~₹75,000 Cr [K]" | Not in the fetched PR. **What is verified (SEBI PR 22/2024): 93% of >1 crore individual traders lost money over FY22–FY24; aggregate losses >₹1.8 lakh Cr; average ~₹2 lakh per trader; FY22 study (Jan-2023): 89% lost; FY24 gross P&L: prop +₹33,000 Cr, FPIs +₹28,000 Cr, individuals & others −₹61,000 Cr (pre-costs).** Keep the "91.1% FY24" only as [K]. | SEBI PR 22/2024 [V-p] |
| S24 | §2.2 / §7.5 (IEX share basis) | 168.55 BU "[V-snip CEA/CERC]" | **Still [V-snip]** (the CEA PDF 404'd). New conflict: IEX's FY26 AR MD&A cites CERC: short-term market ~302 BU in FY26 (238 BU FY25), of which PXs did "60%" (→ ~181 BU), bilateral 26%, DSM 13%. CEA's own split (snippet) is PX 168.55 BU, bilateral 96.04 BU, DSM 37.49 BU, total 302.08 BU, i.e. PX = 55.8%. **Use CEA's 168.55 BU (it sums correctly to 302.08 BU). IEX ≈ 83.7%**, consistent with management's "always 80–85% market share". | IEX AR FY26 [V-p]; CEA snippet [V-snip] |
| S25 | C.3 (IEX revenue bridge) | "141.1 BU × 2 p × 2 sides = ₹564 Cr; + REC/admission/other + **IGX ~₹52 Cr** → ₹616 Cr" | **Drop the IGX term (see S3).** IEX's standalone mix FY26 is transaction fees 78.4%, admission & annual fees 3.3% and other income 18.3% of standalone total income. So ₹616 Cr screener revenue ≈ transaction fees (~₹580 Cr) + admission/annual (~₹24 Cr) + ICX/other (~₹10 Cr) [E]. Implied realised fee ≈ 4.1 p/kWh both sides [E]. | IEX Q4 FY26 deck slide 25 [V-p] |
| S26 | §12 watch table | IEX Q2 board 29-Oct | Board **29-Oct-2026**; **earnings call Fri 30-Oct-2026, 2:30 pm**. | IEX intimation 23-Oct-26 [V-p] |

## 4.1 Verification table (40 figures the writer will lean on)

Legend: **P** = primary source fetched; **S** = secondary fetched; **N** = not fetched (snippet or memory). "Agrees?" compares with Parts 1–3.

| # | Figure | Value | Source (URL) | Fetched? | Agrees with Parts 1–3? |
|---|---|---|---|---|---|
| 1 | BSE revenue from operations FY26 (company basis) | ₹4,834.0 Cr (FY25 ₹2,957.3; FY24 ₹1,371.1) | BSE Q1 FY27 deck slide 25 — https://nsearchives.nseindia.com/corporate/BSE1_04082026185534_NSEintimation.pdf | P | Yes (primer ₹4,834) |
| 2 | BSE transaction charges FY26 / Q1 FY27 | ₹3,795.0 Cr / ₹1,327.7 Cr (+80%) | same deck | P | Yes |
| 3 | BSE Q1 FY27 total income / op. EBITDA incl. Core SGF / PAT attributable | ₹1,706.8 Cr / ₹1,046.0 Cr (67%) / ₹874.0 Cr | same deck slides 25–26; concall | P | Yes |
| 4 | BSE equity-options premium ADTO Q1 FY27 | ₹29,615 Cr (+96% YoY) | deck slide 13; concall 4-Aug-26 — https://nsearchives.nseindia.com/corporate/BSE1_10082026115817_NSEIntimation.pdf | P | Yes |
| 5 | BSE premium ADTO FY26 / FY25 | ₹19,523 Cr / ₹8,978 Cr | BSE AR FY26 MD&A — https://archives.nseindia.com/annual_reports/AR_29957_BSE_2025_2026_A_15352240_23072026103201.pdf | P | Yes (±₹1) |
| 6 | BSE options notional ADT Q1 FY27 / FY26 | ₹237 lakh Cr / ₹187 lakh Cr per day | deck slide 7/13; AR MD&A | P | Resolves the unit conflict (S6) |
| 7 | BSE equity-derivatives revenue Q1 FY27 | ₹1,155 Cr (Q4 FY26 ₹1,128 Cr) | deck slide 13 | P | Yes (was V-snip) |
| 8 | BSE stake in CDSL and its accounting | 15%, associate, equity method; FY26 share of profit ₹68.42 Cr | BSE AR FY26 AOC-1 | P | Settles §H5 |
| 9 | BSE stake in HPX | 22.62% associate | BSE AR FY26; deck slide 8 | P | New (primer said "stake") |
| 10 | BSE SEBI regulatory fee FY26 | ₹566.16 Cr (FY25 ₹331.41 Cr) | BSE AR FY26 note 27 | P | New |
| 11 | BSE cash ADTV Q1 FY27 / FY26 | ₹9,955 Cr (record) / ₹7,950 Cr | concall; AR MD&A | P | Yes / relabel (S20) |
| 12 | BSE Sensex/Bankex options fee | ₹3,250 per Cr of premium; futures nil; Sensex 50 & stock options ₹500/Cr | BSE notice 20240927-37 — https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20240927-37 | P | Yes (was primer/K) |
| 13 | NSE equity-options fee | ₹35.03 **each side** per ₹ lakh of premium (= ₹3,503/Cr/side); futures ₹1.73; cash ₹2.97 per lakh | NSE circular NSE/FA/64232 — https://nsearchives.nseindia.com/content/circulars/FA64232.pdf | P | Yes (was K) |
| 14 | MCX transaction fees | Futures ₹2.10 per ₹ lakh turnover; options ₹41.80 per ₹ lakh premium (from 1-Oct-2024) | MCX circular MCX/F&A/631/2024 — https://www.bseindia.com/xml-data/corpfiling/AttachHis/c4a7c1d1-37c0-4c00-82c3-66ebf482d383.pdf | P | Yes (was K) |
| 15 | MCX Q1 FY27 revenue from ops / EBITDA / PAT | ₹702.00 Cr / ₹543.77 Cr (72% of total income) / ₹413.44 Cr | MCX deck — https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8b3113f2-04dd-4505-a328-48aa659b87c0.pdf | P | Yes |
| 16 | MCX options ADT Q1 FY27 (premium / notional) | ₹9,086 Cr / ₹9,89,691 Cr | MCX deck | P | Yes |
| 17 | MCX options premium ADT FY24 / FY25 / FY26 | ₹1,698 / ₹3,131 / ₹6,534 Cr | MCX deck | P | FY24 corrected (S15) |
| 18 | MCX futures ADT FY26 / Q1 FY27 | ₹64,407 Cr / ₹59,674 Cr (+47% YoY) | MCX deck | P | Yes |
| 19 | MCX bullion options premium/notional | 0.35% (Q1 FY27) vs 1.03% (Q4 FY26) vs 0.62% (Q1 FY26) | computed from deck table (₹2,371 / ₹6,81,609 Cr etc.) | P (+E arithmetic) | Yes |
| 20 | MCX energy share of options premium Q1 FY27 | 73% (₹6,647 of ₹9,086 Cr) | MCX deck | P | Refines primer (S16) |
| 21 | MCX traded clients (F&O) Q1 FY27; FY26 | 13.72 lakh; 20.9 lakh | MCX deck | P | Yes |
| 22 | MCX Core SGF (30-Jun-26) | ₹1,444 Cr | MCX deck | P | Update (S17) |
| 23 | MCX electricity futures | ADT ~₹37 Cr; ~55% by ADT; >70% of OI (~1,630 lots) | MCX Q1 transcript — https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f5811825-62ee-496e-8783-f248900a283f.pdf | P | Yes |
| 24 | MCX global rank | World's largest commodity **options** exchange; 4th-largest commodity derivatives exchange by contracts (FIA, CY/FY2025) | MCX transcript; MCX AR FY26 | P | Upgrades primer [unverified] to P |
| 25 | IEX Q2 FY27 electricity volume | 39,685 MU (+12.7%); H1 77.2 BU (+14.2%) | IEX media release 6-Oct-26 — https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ae65f299-be0d-440c-b450-df74371b0935.pdf | P | Yes (was FPJ) |
| 26 | IEX DAM price Q2 FY27 / Sep-26 | ₹5.7/kWh (+46%) / ₹7.3/kWh (+105%) | same release | P | Yes (Sep upgraded from V-snip) |
| 27 | IEX FY26 electricity volume | 141.1 BU (+17.0%); FY25 121 BU (+18.7%) | IEX Q4 FY26 deck — https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6d8a5f6d-f1db-4710-90ce-1c3e8a057e51.pdf | P | Yes (FY25 "~120" → 121) |
| 28 | IEX RTM volume FY26 | 54.9 BU (+41%), 34% of electricity volume | IEX Analyst Meet deck slide 10 — https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b3ce6c35-25ec-4248-b1a3-1dd0dbb5d5ef.pdf | P | Yes |
| 29 | IEX price caps | DAM & RTM ₹10/kWh; HP-DAM ₹20/kWh (floor zero) | IEX AR FY26 product pages — https://www.bseindia.com/xml-data/corpfiling/AttachHis/6b4c0801-5233-47fc-8d66-7de6795f88a4.pdf | P | Yes (was K) |
| 30 | IEX stake in IGX | 47.28%, associate in FY25 and FY26 | IEX AR FY26 | P | **No** (S3) |
| 31 | IEX FY26 consolidated total revenue / EBITDA / PAT (company) | ₹747.0 / ₹671.2 / ₹492.9 Cr | IEX Q4 FY26 deck slide 25 | P | Yes (primer total-income basis) |
| 32 | CERC coupling milestones | Order 23-Jul-25; APTEL 13-Feb-26; draft 17-Apr-26; hearing 10-Jun-26; SC order 3-Aug-26; final regs **not notified** as of 25-Oct-26 | IEX Analyst Meet deck/transcript [P]; IEX AR Note 47 [P]; PowerPeakDigest [S] | P + S | **Partly no** (S1, S2) |
| 33 | Exchange-traded power FY26 (IEX+PXIL+HPX) | 168.55 BU; short-term total 302.08 BU; PX 9.87% of total | CEA Annual MMR FY26 (snippet only) | **N** | Same value; conflict with IEX AR's "60%" (S24) |
| 34 | SEBI FY26: share of individuals losing; net loss | 87.7%; ₹91,685 Cr (FY25 revised ₹1.12 lakh Cr, 90.9%) | SEBI study Aug-2026 — https://www.sebi.gov.in/sebi_data/attachdocs/aug-2026/1787233506209.pdf | P | Yes (was Finnovate) |
| 35 | Active individual EDS traders FY25 → FY26 | 106.2 → 87.5 lakh (−18%); new entrants 34.3 → 20.8 lakh | same | P | Yes |
| 36 | FY22–FY24 loss study | 93% lost; >₹1.8 lakh Cr; FY22: 89% | SEBI PR 22/2024 — https://www.sebi.gov.in/sebi_data/attachdocs/sep-2024/1727086965496.pdf | P | Yes (was K) |
| 37 | NSE+BSE options premium turnover FY26 | ₹191 lakh Cr (+7%); FY22 ₹69 lakh Cr | SEBI study Table 5 | P | Confirms derivation (S22) |
| 38 | STT from 1-Apr-2026 | Options 0.10% → 0.15% of premium; exercised 0.125% → 0.15%; futures 0.02% → 0.05%; **no CTT change** | Finance Bill 2026 Memorandum (Clause 143) — https://www.indiabudget.gov.in/doc/memo.pdf | P | Yes (was V-sib/K); CTT gap closed |
| 39 | Exchange fees as share of individual F&O traders' costs | 16% of ₹24,859 Cr (FY26); 20% over FY22–24 | SEBI study §6.35; SEBI PR 22/2024 | P | New |
| 40 | NSE IPO size / subscription / listing | ₹22,561.57 Cr OFS; 5.71×; listed 24-Sep-26 at ₹1,800 on BSE | FPJ — https://www.freepressjournal.in/business/nse-shares-rise-5-after-flat-market-debut ; HDFC Sky | S (two independent) | Yes, with minor corrections (S18) |

**Count: 39 of 40 figures fetched this session. 38 rest on primary documents (rows 1–32 and 34–39; in row 32 every milestone is primary except the 3-Aug-2026 SC order date, which rests on a fetched secondary page). Row 40 is secondary (two independent fetched pages). Row 33 is a snippet only.** Also fetched and consistent, but outside the 40: screener consolidated figures for all three members (re-pulled; identical to Parts 1–3); global peer P/Es (CME 25.8×, ICE 22.9×, Deutsche Börse 27.9×, HKEX 30.3× TTM, Oct-2026) [V-s companiesmarketcap].

## 4.2 Company deep-dives (primary documents)

### 4.2.1 BSE Limited (NSE: BSE)

**A. Management-commentary digest: Q1 FY27 call, 4-Aug-2026 (MD & CEO S. Ramamurthy; CFO Deepak Goel)** [V-p transcript]
- **Record run:** Q1 FY27 was the 14th consecutive quarter of record revenue. Total income was ₹1,707 Cr vs ₹1,630 Cr in Q4. Management again stated that 54% of opex is regulatory fees plus clearing and settlement costs, all "directly correlated" with volumes.
- **Market share stance:** "We do not measure our success in terms of market share." Management prefers to point to premium growth and breadth: 610+ members trade regularly; ~650 FPIs participate, with a target of 800.
- **Monthly and longer-dated options (the hedge against a weekly-expiry ban):** since Jan-2025, contracts other than current-week and next-week are ~5× higher and their premium ~10× higher. Management says this is "not where we would like to be". It names the RBI circular as a headwind to that build-out.
- **Regulatory headwinds, quantified only qualitatively:** STT (1-Apr-2026) plus the RBI bank-guarantee circular (postponed to 1-Jul-2026) "appears to have impacted the market significantly in respect of futures and to some extent in terms of options". BSE's own impact so far is "minimal", but management warned that it "cannot draw solace" because legacy bank guarantees may mature and not be re-issued. **Read: Q2 FY27 risk is to the downside.**
- **Cash-market ambition:** "meaningfully double-digit" share of equity cash by the beginning of CY2027 (FY26 share ~7%). The two levers are a common contract note (achieved in regulation) and best-price execution (still pending). Stock options are "aspirational… some distance to be covered".
- **Product pipeline:** Focused IT index derivatives (launched 11-May-26; three expiries so far). SEBI approval for **two more indices for derivatives** (the AR names Sensex Next 30 and Focused Midcap). A broader "highly representative" index for FPIs and institutions is being designed. Other lines: corporate bonds, enhanced data dissemination, 60 new indices, StAR NPS (launched 22-Apr-26) and Electronic Gold Receipts.
- **Co-location:** 500 racks now built; management expects them to suffice for "at least 1.5 years". Order-flow charges are ~20% of market rates "to be reconsidered at an appropriate stage", which is a pricing lever. Co-location revenue was ₹51 Cr in Q1.
- **Data:** the 13-year Deutsche Börse marketing partnership ends 1-Jan-2027, and BSE will license its data directly. Management notes data is "only 4–5% of revenue in India vs 10–25% in developed markets" (deck slide 24).
- **Cost and P&L items:** Q4 FY26 other expenses included a ~₹40 Cr debtor provision in the clearing subsidiary. Tech spend is rising (80+ peripheral systems replaced, clearing revamp, DR). Investment income rose from ₹67 Cr to ₹140.7 Cr QoQ because Q4's MTM loss reversed as bond yields eased. D&A fell because BSE resets WDV each April.
- **Primary market:** 13 mainboard IPOs raised ₹18,348 Cr in July 2026. The pipeline is 250+ companies seeking ~₹1.75 lakh Cr. BSE SME passed 750 listed companies (600 a year earlier). ₹6.2 lakh Cr was raised on BSE platforms in Q1.

**B. Concall/deck KPI table** [V-p deck slides 7, 13, 25–26]

| KPI | Q1 FY26 | Q4 FY26 | Q1 FY27 | QoQ | YoY |
|---|---|---|---|---|---|
| Equity-options premium ADTO (₹ Cr) | 15,084 | 28,921 | **29,615** | +2% | +96% |
| Options notional ADT (₹ lakh Cr) | 131 | 245 | **237** | −3% | +81% |
| Premium/notional (bps) [E] | 11.5 | 11.8 | **12.5** | | |
| Average daily lots (mn) | 82 | 151 | 156 | +3% | +90% |
| EQD members / UCC (mn) | 528 / 7.9 | 586 / 10.4 | 600 / 11.2 | | |
| EQD revenue (₹ Cr) | 598 | 1,128 | **1,155** | +2% | +93% |
| EQD revenue per ₹ Cr premium [E] | — | — | ~₹6,400 (≈2 × ₹3,200; mix incl. ₹500/Cr products) | | |
| Cash ADTV (₹ Cr) | ~7,200 [chart] | — | **9,955** (record) | | |
| StAR MF orders (mn) / revenue (₹ Cr) | 183 / 61 | — | 234 / 73.3 | | +28% / +20% |
| Registered investor accounts (cr) | — | — | 25.8 (+3.5 cr in 12 months) | | |
| Co-location revenue (₹ Cr) | — | — | 51 | | |
| Consolidated net worth (₹ Cr) | — | 6,673 | 7,547 | | |

**C. Five-year history (FY22–FY26)** [V screener 25-Oct-26 for the first block; V-p company deck/AR for the company-basis rows]

| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue (screener) | 841 | 925 | 1,568 | 3,212 | 5,124 |
| Operating profit (screener) | 352 | 316 | 711 | 1,876 | 3,480 |
| OPM % | 42 | 34 | 45 | 58 | 68 |
| Other income | 52 | 78 | 417 | 22 | 24 |
| PAT (screener) | 245 | 206 | 772 | 1,322 | 2,487 |
| EPS (₹, post-bonus) | 6.27 | 5.43 | 19.17 | 32.65 | 61.22 |
| ROCE % | 15 | 12 | 23 | 47 | 60 |
| CFO | 1,442 | −137 | 2,643 | 414 | 3,104 |
| *Company basis:* revenue from operations | — | — | 1,371.1 | 2,957.3 | 4,834.0 |
| *Company:* total income | — | — | 1,596.0 | 3,236.3 | 5,148.1 |
| *Company:* op. EBITDA incl. Core SGF (margin) | — | — | 398.9 (29%) | 1,499.7 (51%) | 3,078.7 (64%) |
| *Company:* regulatory contribution | — | — | 236.9 | 410.5 | 649.7 |
| *Company:* Core SGF contribution | — | — | 91.7 | 90.0 | 77.0 |
| *Company:* share of associates | — | — | 71.8 | 82.6 | 65.4 |
| *Company:* PAT attributable | — | — | 778.4 (incl. ₹367.5 Cr exceptional CDSL-stake gain) | 1,325.9 | 2,497.0 |
| Options premium ADTO (₹ Cr/day) | ~0 | ~0 | ~2,000 | 8,978 | 19,523 |

Note: CFO swings with clearing-member margin flows. FY24 screener PAT includes the exceptional gain on CDSL stake sales (net ₹367.5 Cr); ex-exceptional FY24 PAT was ~₹408 Cr (company "net profit ex exceptional & discontinued" ₹416.4 Cr).

**D. Eight-quarter trend (screener consolidated, ₹ Cr)** [V]

| Quarter | Revenue | Expenses | OP | OPM % | Other income | PAT | Premium ADTO (₹ Cr) [V-p deck] |
|---|---|---|---|---|---|---|---|
| Q2 FY25 (Sep-24) | 813 | 358 | 456 | 56 | 30 | 346 | 8,203 |
| Q3 FY25 (Dec-24) | 768 | 533 | 236 | 31 | 83 | 219 | 8,758 |
| Q4 FY25 (Mar-25) | 847 | 362 | 484 | 57 | 205 | 494 | 11,783 |
| Q1 FY26 (Jun-25) | 958 | 332 | 625 | 65 | 115 | 538 | 15,084 |
| Q2 FY26 (Sep-25) | 1,068 | 388 | 680 | 64 | 91 | 557 | 15,005 |
| Q3 FY26 (Dec-25) | 1,244 | 512 | 732 | 59 | 108 | 597 | 19,459 |
| Q4 FY26 (Mar-26) | 1,564 | 523 | 1,041 | 67 | 78 | 795 | 28,921 |
| Q1 FY27 (Jun-26) | 1,566 | 520 | 1,046 | 67 | 160 | 873 | 29,615 |
| Q2 FY27 (Sep-26) | **not declared — board 4-Nov-2026** | | | | | | Jul ~25,400; Aug ~18,700 [V-snip] |

Q3 FY25's 31% OPM reflects the SEBI notional-fee true-up and the start of the Nov-2024 curbs. In company terms the regulatory contribution jumped that quarter.

**E. Annual-report findings (FY26 AR)** [V-p]
- **Segment:** BSE reports a **single operating segment** ("facilitating trading in securities and related ancillary services"). There is no segment P&L; the deck's revenue-line split is the only disaggregation.
- **Group structure:** subsidiaries are BSE Clearing (100%), the GIFT-IFSC pair India International Exchange (India INX) and India International Clearing Corp (deck group chart shows majority stakes of 65.27% and 60.53%; the exact mapping of each percentage to each entity was not legible in the extracted text, so verify), India INX Global Access IFSC (100% of India INX), BSE Index Services (100% since 1-Jun-2024), BSE Technologies (100%; BSE Investments and BSE Administration & Supervision merged into it w.e.f. 23-Apr-2026), and BIL-Ryerson incubator (51%). **Associates:** CDSL 15% (plus CDSL Ventures, Centrico Insurance Repository), Countrywide Commodity Repository (24% direct, 31.8% group), EBIX Insurance Broking 40%, **Hindustan Power Exchange 22.62%**, India International Bullion Holding IFSC 12.58%, BSE E-Agricultural Markets 26.09%, BFSI Sector Skill Council 48.78% (a Section-8 company, not consolidated). ONDC 4.63% is an investment.
- **Related parties:** the AR states no material RPTs and no RPT conflicting with company interest. Group flows run through the clearing subsidiary: C&S expenses are paid to BSE Clearing (standalone C&S expense ₹371.9 Cr vs consolidated ₹280.4 Cr).
- **Contingent liabilities (Mar-26):** income-tax ₹134.96 Cr (₹111.70 Cr), indirect tax ₹59.30 Cr (₹22.10 Cr), claims not acknowledged ₹135.67 Cr (₹105.04 Cr), guarantees ₹0.23 Cr. **Total ≈ ₹330 Cr, about 4% of net worth.** A clearing-default note says available collateral is adequate. Capital commitments are ₹100.3 Cr.
- **SEBI regulatory fee:** ₹566.2 Cr in FY26, up 71% while premium ADTO rose 117%. Notional ADT rose only ~69%, and the fee is on notional. **As premium/notional rises, BSE's fee-to-revenue ratio falls.** This is the hidden margin driver behind OPM 58% → 68%.
- **Other segments:** currency derivatives turnover was **nil** in FY26 (₹1,525 Cr/day in FY25). Debt platforms are meaningful: corporate-bond reporting share 27%, G-sec reporting 39%, retail corporate-bond trading 79%.
- **Dividend:** FY26 total ₹315.8 Cr (deck), a payout of ~13% of consolidated PAT on screener basis (16% per screener).
- **Risks** (AR ERM section + call): regulatory change (weekly expiries, STT, RBI BG, SEBI fees on notional); tech or cyber outage; concentration in Sensex options (~65% of revenue from operations); clearing-member default. The MD & CEO succession process began with the 22-Oct-26 advertisement [V screener announcement].

### 4.2.2 Multi Commodity Exchange of India (MCX · 534091)

**A. Management-commentary digest: Q1 FY27 call, 5-Aug-2026 (MD & CEO Praveena Rai; CFO Chandresh Shah)** [V-p transcript]
- **Framing:** Q1 was a "consolidation" after an "exceptionally strong" Q4, which was driven by "big macro geopolitical factors". Management expects growth "on a strong track" in FY27 but gave no numeric guidance. It noted that energy and bullion tend to counterbalance each other.
- **Premium/notional normalisation is expected:** "there is a normalization of the premium ratio… as we look at volatility trends globally". Management steered analysts to *volume in tonnes*: gold options ADV ~300 t (+100% QoQ), silver ~9,400 t. Option open interest: gold 17.3 t (16.9 t), silver 583 t (522 t). Management denied that contract mix or participation shifts explain the yield fall; it attributes the fall to volatility.
- **RBI bank-guarantee rule:** "really more of a Q2 action"; management is "not expecting this to have a very significant detrimental impact" but expects it to raise members' cost of funds. It could not size the BG-backed share of trades.
- **Electricity futures:** Q1 ADT ~₹37 Cr; ~55% share by ADT; OI ~1,630 lots = >70% of the market. Liquidity extends across months 1–3, and DISCOMs are starting to participate. Spot exchanges carry ~8–10% of daily electricity.
- **Competition:** "competition is stepping in, and we are taking it seriously… big competitors in the adjacent spaces". A rival's expiry-date change drew volume "for about a couple of days" with no visible impact on MCX. Q1 added 12 new members and 35 new FPIs (~220 in total); FPIs are ~2.5% of ADT.
- **Products:** Silver 100 g futures were a success; Gold 10 g; BULLDEX futures and options are being reworked; index products "over the next few months"; the focus is on metals (copper depth). Good Delivery norms now cover silver, with the first domestic silver refiner and three more gold refiners empanelled.
- **Data monetisation:** 50+ AMCs use the MCX bullion price for AUM valuation. Revenue from this is not yet material; "data services" plans will be shared "over the next couple of quarters".
- **Numbers given only on the call:** **float income ~₹30 Cr in Q1 FY27** (inside operating income); employee cost includes a **one-time ~8–9%** element (variable pay at the subsidiary); SGF contributions are set by SEBI's monthly methodology plus a management buffer.
- **Capacity:** transactions rose from <1 bn/day four quarters ago to >3 bn/day handled, with capacity of more than 2× that. Sanjay Rajpal joined as ED (Critical Operations and Technology).
- **New pools:** MCX Coal Exchange of India is incorporated, at an "early stage", and is not a derivatives venture. FIA FY2025 ranks MCX the **world's largest commodity options exchange** and the **4th-largest commodity derivatives exchange** by contracts.
- **SEBI:** dedicated commodity teams now sit inside SEBI's Market Regulation Department; open items such as position limits and co-location have no timeline.

**B. KPI table** [V-p deck]

| KPI | Q1 FY26 | Q4 FY26 | Q1 FY27 | QoQ | YoY |
|---|---|---|---|---|---|
| Total F&O ADT (₹ lakh Cr, notional) | 3.11 | 6.66 | **10.49** | +58% | +238% |
| Futures ADT (₹ Cr) | 40,547 | 90,200 | **59,674** | −34% | +47% |
| – Bullion / Energy / Base metals futures | 30,295 / 7,531 / 2,714 | 69,402 / 12,728 / 8,056 | 38,350 / 15,175 / 6,144 | | |
| Options notional ADT (₹ Cr) | 2,70,228 | 5,75,387 | **9,89,691** | +72% | +266% |
| Options premium ADT (₹ Cr) | 4,245 | 10,628 | **9,086** | −15% | +114% |
| – Bullion premium (notional) | 658 (1,06,286) | 3,254 (3,15,321) | 2,371 (6,81,609) | −27% (+116%) | +260% (+541%) |
| – Energy premium (notional) | 3,584 (1,63,664) | 7,265 (2,52,138) | 6,647 (2,97,913) | −9% (+18%) | +85% (+82%) |
| – Base-metal premium (notional) | 3 (278) | 109 (7,927) | 69 (10,169) | | |
| Premium/notional — bullion / energy [E] | 0.62% / 2.19% | 1.03% / 2.88% | **0.35% / 2.23%** | | |
| Energy share of options premium [E] | 84% | 68% | **73%** | | |
| Traded clients F&O (lakh) | 7.03 | 13.9 | 13.72 | −1% | +95% |
| – of which options / futures (lakh) | 5.7 / 2.5 | 11.5 / 4.7 | 11.7 / 4.12 | | |
| Futures mix Q1 FY27 | gold 34.5%, silver 29.7%, crude 16.6%, natural gas 8.8%, copper 7.7%, aluminium 1.4%, zinc 1.1% | | | | |
| Core SGF (₹ Cr) | — | 1,367 | 1,444 | | |
| Members / APs / UCC | — | — | 597 / 29,474 / 4.05 cr | | |

**C. Five-year history (FY22–FY26)** [V screener; ADT V-p]

| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue | 367 | 514 | 684 | 1,113 | 2,302 |
| Operating profit | 161 | 145 | 63 | 665 | 1,642 |
| OPM % | 44 | 28 | 9 | 60 | 71 |
| Other income | 46 | 68 | 75 | 98 | 127 |
| PAT | 143 | 149 | 83 | 560 | 1,332 |
| EPS (₹) | 5.63 | 5.84 | 3.26 | 21.96 | 52.22 |
| ROCE % | 14 | 13 | 7 | 43 | 71 |
| CFO | 391 | 141 | 442 | 950 | 3,035 |
| Futures ADT (₹ Cr) | n/f | n/f | 19,636 | 27,153 | 64,407 |
| Options premium ADT (₹ Cr) | n/f | n/f | 1,698 | 3,131 | 6,534 |
| Options notional ADT (₹ Cr) | n/f | n/f | 89,243 | 1,91,909 | 4,71,641 |
| Options premium/notional [E] | | | 1.90% | 1.63% | 1.39% (Q1 FY27: 0.92%) |
| Traded clients F&O (lakh) | | | 9.3 | 13.0 | 20.9 |

FY26 MD&A, bullion ADT (notional, ₹ Cr, FY25 → FY26): gold futures 8,415 → 28,338; silver futures 9,037 → 21,648; gold options 28,100 → 1,92,810 (+586%); silver options 7,748 → 74,883 (+866%). Energy: crude options 1,30,411 → 1,39,181 (+7%); natural-gas options 24,014 → 49,556 (+106%); crude-mini options 1,057 → 7,839; natural-gas-mini options 409 → 3,765. **Read: FY26's options boom was bullion (notional ×7.5) and natural gas (×2); crude options, MCX's largest single contract, grew only 7% in notional.** [V-p MCX AR]

**D. Eight-quarter trend (screener consolidated, ₹ Cr)** [V]

| Quarter | Revenue | Expenses | OP | OPM % | Other income | PAT |
|---|---|---|---|---|---|---|
| Q2 FY25 (Sep-24) | 286 | 106 | 179 | 63 | 26 | 154 |
| Q3 FY25 (Dec-24) | 301 | 108 | 193 | 64 | 24 | 160 |
| Q4 FY25 (Mar-25) | 291 | 131 | 160 | 55 | 30 | 135 |
| Q1 FY26 (Jun-25) | 373 | 132 | 241 | 65 | 33 | 203 |
| Q2 FY26 (Sep-25) | 374 | 132 | 242 | 65 | 27 | 197 |
| Q3 FY26 (Dec-25) | 666 | 172 | 494 | 74 | 31 | 401 |
| Q4 FY26 (Mar-26) | 889 | 224 | 665 | 75 | 36 | 530 |
| Q1 FY27 (Jun-26) | 702 | 208 | 494 | 70 | 50 | 413 |
| Q2 FY27 | **not declared — board 3-Nov-2026** | | | | | |

Company P&L lines, Q1 FY27 / Q4 FY26 / Q1 FY26 (₹ Cr) [V-p deck]: employee 57.45 / 46.06 / 44.84; **product licence fees 39.68 / 42.52 / 22.01**; IT 28.12 / 28.10 / 23.86; **statutory funds & regulatory fees 54.19 / 61.89 / 26.81**; other 28.58 / 44.24 / 14.03; D&A 20.70 / 19.08 / 17.30; EBITDA (incl. other income) 543.77 / 702.52 / 274.27, i.e. 72% / 76% / 68% of total income.

**E. Annual-report findings (FY26 Integrated AR)** [V-p]
- **Variable cost lines (standalone FY26, ₹ Cr):** C&S charges paid to MCXCCL 256.70 (FY25 120.23); **product licence fees 107.96 (69.42, +56%)**; statutory funds and regulatory fees 163.73 (79.45, +106%); employee 147.16; IT 73.23; other 83.35; D&A 74.89; total expenditure 907.31 (+64%). **Product licence fees scale with volume (about 4.7% of consolidated revenue; this is the same line ICICI Direct called "software ₹105 Cr" in Part 1). Despite the CDP move, MCX still pays a per-volume licence fee; the AR does not name the licensor (likely the platform vendor [E]). The writer should not say the platform cost is now fully fixed.**
- **Related parties:** Kotak Mahindra Bank is a related party because it holds 15% (3,82,48,775 shares; 14.99% per the Jun-26 deck). Motilal Oswal MF holds 4.48%; MFs together 30.07%. There is no promoter. The FY26 AR contains **no 63 Moons royalty or licence line** (the legacy vendor relationship ended with the Oct-2023 CDP cut-over [K]).
- **Contingent liabilities (standalone, Mar-26):** income-tax demands under appeal ₹143.31 Cr (₹137.44 Cr); GST ₹13.41 Cr (₹6.28 Cr); **legal & regulatory matters ₹45.79 Cr (₹0.11 Cr)**, a new item worth a question to IR. Capital commitments ₹70.90 Cr.
- **Outage consequences:** SEBI "financial disincentives" were paid in FY26: **₹1 Cr by MCX to its IPF** (technical glitch) and **₹50 lakh by MCXCCL to Core SGF** (another glitch). Earlier: SEBI SCN of 16-Oct-2023 and a ₹25 lakh penalty (paid). The AR risk section lists "technical glitches… may result in monetary fines and business restrictions".
- **Delivery integrity as a moat:** ~5.80 lakh t of base metals delivered since compulsory delivery began (2019). Bullion deliveries since inception: 174.75 t of gold and 6,312 t of silver (deck). These underpin "One Nation One Price" and the AMC reference-price role.
- **Electricity futures:** ADV 1,313 lots (65,650 MWh) in FY26 → 1,544 lots (77,200 MWh) in Q1 FY27.
- **Risks named:** liquidity dispersion from competing exchanges, global-benchmark disruption, technical glitches and cyber, regulatory change (position limits, FPI access), volatility dependence.

### 4.2.3 Indian Energy Exchange (IEX · 540750)

**A. Management-commentary digest: Analyst Meet / Q1 FY27, 24-Jul-2026 (Chairman & MD S. N. Goel; Rohit Bajaj; CFO Vineet Harlalka)** [V-p transcript + deck]
- **Coupling, legal and process:** IEX recounted the order of 23-Jul-2025, the APTEL appeal of 28-Aug-2025, APTEL's 13-Feb-2026 order ("not aggrieved" yet), the SC appeal, the 17-Apr-2026 draft, comments to 5-Jun and the hearing on 10-Jun-2026. IEX attacks CERC's claimed **0.3% welfare gain** as insignificant and argues that in the Grid-India pilot gains accrued to sellers and prices rose. **Grid-India's own comments on the draft** asked for: (a) scope clarity (DAM vs integrated DAM: G-DAM, DAM, HP-DAM); (b) an industry-grade solver; (c) avoiding a **single point of failure**, with a fallback letting PXs discover price, and a note that Europe uses 9 NEMOs round-robin; (d) a steering committee to draft the procedure; (e) inter-exchange settlement rules in the regulation itself. **Management reads these as reasons implementation "will take long time".**
- **Downside sizing by management:** DAM is now ~40% of IEX volume (95% six to seven years ago). Even if coupling happens, impact "may be about 20, 30, 40%" of DAM, i.e. roughly **8–16% of total volume [E]**. Management: "I don't see any loss in market share… NSE and BSE… NSE has retained the market share." RTM coupling is harder, since CERC's proposal to cut RTM gate closure from 75 to 50 minutes leaves no time for an MCO.
- **Growth guide (qualitative):** RTM to keep growing 25–30% a year and to overtake DAM. New products are pending CERC approval: Green RTM, peak contracts (DAM/RTM), TAM up to 11 months (to pull ~40 BU from the DEEP platform). BESS arbitrage is a "game changer": evening prices hit the **₹10 cap on ~90–95% of days**, with solar-hour prices below ₹2.
- **Shareholder returns:** a **buyback "will consider"** (valuations at an "all-time low"; SEBI now allows market buybacks). No reservation for IEX shareholders in IGX's IPO.
- **IGX:** 47.3% held; must fall to 25% (PNGRB's 5-year window ended Dec-2025, extended one year). The 22.3% will be sold in the IPO OFS (SEBI observation 12-Oct-26 [V screener]). IGX FY26 traded 76.8 mn MMBtu with ₹42 Cr PAT (+28%); Q1 FY27 27.5 mn MMBtu, ₹16 Cr PAT.
- **Coal exchange:** the Ministry of Coal notified the coal-exchange rules on **4-Jun-2026**. **Within six months of a coal exchange starting, coal e-auction platforms (Coal India, MSTC, mJunction) must route through coal exchanges**, which means an initial target of ~100–120 Mt. IEX has incorporated Indian Coal Exchange Ltd; MCX has also incorporated a coal exchange, so the two will compete head-to-head. The Ministry of Mines has issued draft rules for a minerals exchange.
- **FY26 recap (company):** volume 141 BU (+17%), ~8% of India's consumption; consolidated revenue (total income) ₹747 Cr (+13.6%); PAT ₹492 Cr. Q1 FY27: 37.5 BU (+16%), total income ₹202.8 Cr, PAT ₹134.8 Cr (+12%). PAT split FY26: IEX standalone ₹474 Cr, IGX share ₹42 Cr (100% basis), ICX ₹5 Cr.

**B. KPI table** [V-p release 6-Oct-26; decks]

| KPI | Q2 FY26 | Q1 FY27 | Q2 FY27 | YoY | Sep-26 (YoY) |
|---|---|---|---|---|---|
| Electricity volume (MU) | 35,218 [E: 39,685 ÷ 1.127] | 37,534 | **39,685** | +12.7% | 12,220 (+10.4%) |
| DAM incl. HP-DAM (MU) | 14,534 | 13,344 | 14,855 (37.4% of total) | +2.2% | 4,251 (+0.5%) |
| RTM (MU) | 14,925 | 16,019 | 16,490 (41.6%) | +10.5% | 5,294 (+10.6%); record 315 MU on 26-Sep |
| DAC + TAM (MU) | 2,719 | n/s | 5,477 | +101.5% | 1,939 (+100.6%) |
| Green (G-DAM + G-TAM) (MU) | 3,040 | n/s | 2,863 | −5.8% | 737 (−32%) |
| RECs (lakh) | ~44.3 [E] | 9.77 | 15.27 | −65.5% | 5.25 (−16.2%); ₹343–345/REC |
| DAM price (₹/kWh) | ~3.9 [E] | — | 5.7 | +46% | 7.3 (+105%); DAM buy bids +281% |
| RTM price (₹/kWh) | ~3.5 [E] | — | 5.2 | +49% | 6.9 (+108%) |
| India consumption (BU) | — | — | 502 | +11.5% | 162 (+11%); peak 269 GW (10-Sep) |

**C. Five-year history (FY22–FY26)** [V screener; volumes V-p]

| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue (screener, ex-IGX) | 431 | 401 | 449 | 537 | 616 |
| Operating profit | 364 | 336 | 377 | 454 | 520 |
| OPM % | 84 | 84 | 84 | 84 | 84 |
| Other income | 61 | 86 | 112 | 135 | 151 |
| PAT | 309 | 306 | 351 | 429 | 493 |
| EPS (₹) | 3.44 | 3.43 | 3.93 | 4.81 | 5.53 |
| ROCE % | 61 | 50 | 50 | 53 | 51 |
| CFO | 762 | −23 | 298 | 427 | 433 |
| Electricity volume (BU) | n/f | n/f | ~102 [E: 121 ÷ 1.187] | 121 | 141.1 |
| RTM volume (BU) | — | 24.2 | 30.1 | 38.9 | 54.9 |
| Company "consolidated revenue" (total income) | — | — | — | 657.4 | 747.0 |

**D. Eight-quarter trend (screener consolidated, ₹ Cr)** [V]

| Quarter | Revenue | OP | OPM % | Other income | PAT | Electricity volume (MU) |
|---|---|---|---|---|---|---|
| Q2 FY25 | 139 | 120 | 86 | 31 | 108 | — |
| Q3 FY25 | 132 | 113 | 86 | 32 | 107 | — |
| Q4 FY25 | 142 | 121 | 85 | 37 | 117 | — |
| Q1 FY26 | 142 | 115 | 81 | 49 | 121 | ~32,400 [E: 37,534 ÷ 1.159] |
| Q2 FY26 | 154 | 133 | 87 | 34 | 123 | ~35,218 [E] |
| Q3 FY26 | 146 | 122 | 84 | 42 | 119 | — |
| Q4 FY26 | 174 | 149 | 86 | 27 | 130 | — |
| Q1 FY27 | 158 | 131 | 83 | 53 | 135 | 37,534 |
| Q2 FY27 | **results 29-Oct-2026 (call 30-Oct)**; volume known | | | | | **39,685** |

**E. Annual-report findings (FY26 AR)** [V-p]
- **Product rules:** DAM and RTM are double-sided closed auctions with a **₹10/unit cap**. HP-DAM (since Mar-2023) clears separately with a **₹20/unit cap and zero floor**. Clearing is sequential (G-DAM → DAM → HP-DAM), and uncleared G-DAM bids can carry forward to DAM. RTM runs 48 half-hourly sessions.
- **IGX:** associate at 47.28% (diluted earlier to NSE Investments, GAIL, ONGC, IOCL and others). Share of profit ₹19.80 Cr in FY26 (₹14.63 Cr in FY25). Dividend received ₹5.32 Cr. **ICX** (WOS; I-RECs; 179 lakh I-RECs issued in FY26, +200%) earned ₹4.74 Cr.
- **Liquidity:** standalone investments plus cash and bank were **₹2,045 Cr (Mar-26)** vs ₹1,772 Cr (Mar-25), including the ₹35.5 Cr IGX and ₹5 Cr ICX investments. Part of this backs settlement-related liabilities (screener "other liabilities" ₹1,060 Cr). Own surplus is roughly ₹1,300–1,400 Cr, in line with net worth of ₹1,364 Cr [E]. Interim dividend was ₹1.50/share (₹133.8 Cr).
- **Contingent liabilities:** immaterial. One GST order (28-Aug-2024) for ₹2.61 Cr tax + ₹2.17 Cr interest + ₹0.26 Cr penalty is under appeal.
- **Governance flag (Note 46):** "the Company received a **whistle-blower complaint relating to alleged conflict of interest and potential diversion of business involving certain officials**. The Audit Committee has initiated an **independent investigation, which remains ongoing**." Management says it has no material impact. **This is new, not in the primer, and worth a line.** Separately, in the SC IEX cited a SEBI report alleging illegal trading by CERC officials on the coupling team [V-s PowerPeak].
- **Note 47:** coupling is disclosed as a matter before the SC, with the draft regulations of 17-Apr-2026.
- **Risks:** coupling; CERC fee moderation (reported Dec-2025; no order found); dependence on DAM/RTM; REC demand (RECs −65% in Q2); price-cap binding; technology. RTO 5 minutes and near-zero RPO are claimed.

## 4.3 Industry datasets upgraded from primary sources (chart-ready)

**D1. BSE equity-derivatives quarterly series, Q1 FY24 → Q1 FY27** [V-p BSE Q1 FY27 deck slide 13; premium converted from ₹ mn to ₹ Cr]

| Quarter | Premium ADTO (₹ Cr) | Notional ADT (₹ lakh Cr) | Avg daily lots (mn) | EQD revenue (₹ Cr) | Members | UCC (mn) |
|---|---|---|---|---|---|---|
| Q1 FY24 | 47 | 0.62 | 0.98 | 0.2 | 200 | 0.1 |
| Q2 FY24 | 768 | 14 | 20 | 4.8 | 306 | 0.6 |
| Q3 FY24 | 2,551 | 46 | 68 | 57.6 | 365 | 1.7 |
| Q4 FY24 | 4,630 | 70 | 94 | 113.7 | 391 | 3.1 |
| Q1 FY25 | 7,162 | 98 | 126 | 242.2 | 422 | 4.4 |
| Q2 FY25 | 8,203 | 128 | 153 | 345.6 | 453 | 5.6 |
| Q3 FY25 | 8,758 | 105 | 128 | 353.0 | 479 | 6.2 |
| Q4 FY25 | 11,783 | 112 | 83 | 474.8 | 505 | 7.1 |
| Q1 FY26 | 15,084 | 131 | 82 | 598.0 | 528 | 7.9 |
| Q2 FY26 | 15,005 | 164 | 100 | 624.2 | 550 | 8.7 |
| Q3 FY26 | 19,459 | 210 | 125 | 784.2 | 567 | 9.5 |
| Q4 FY26 | 28,921 | 245 | 151 | 1,127.9 | 586 | 10.4 |
| Q1 FY27 | 29,615 | 237 | 156 | 1,155.0 | 600 | 11.2 |

Chart notes: lots fell after Nov-2024 (bigger lot sizes) while premium kept rising, so do not chart contracts or lots as the activity measure. EQD revenue tracks premium almost one-for-one (FY26 ₹3,134 Cr ÷ (₹19,523 Cr × ~248 days) = ₹6,473 per ₹ Cr ≈ 2 × ₹3,250) [E].

**D2. Equity options premium: NSE vs BSE and BSE share** [NSE: V-sib/V NSE PR as in Part 1; BSE: V-p; share E]

| Period | NSE premium ADTO (₹ Cr) | BSE premium ADTO (₹ Cr) | BSE share of NSE+BSE |
|---|---|---|---|
| FY24 | — (NSE share 96.86%) | ~2,000 | ~3% |
| FY25 | 62,449 | 8,978 | 12.6% |
| FY26 | 57,662 | 19,523 | 25.3% |
| Q1 FY26 | 55,514 | 15,084 | 21.4% |
| Q4 FY26 | 76,375 | 28,921 | 27.5% |
| Q1 FY27 | 64,352 | 29,615 | 31.5% |
| Jun-26 | — | 26,200 [V Jefferies] | 32.4% (index options, Jefferies) |
| Jul-26 / Aug-26 | — | ~25,400 / ~18,700 [V-snip] | n/f |

NSE Q2 and Q3 FY26 remain derived (Part 1 E1). **Q2 FY27: neither exchange has reported. BSE's monthly path (Jun ₹26,200 → Jul ~₹25,400 → Aug ~₹18,700 Cr) points to a Q2 FY27 premium ADTO of roughly ₹21,000–23,000 Cr (−20% to −30% QoQ) [E]**, the first sequential fall since Q2 FY26 (and the first material one since the Nov-2024 curbs). Drivers cited: STT (1-Apr), RBI BG norms (1-Jul), SEBI's closing-auction session [V-snip Centrum]. **Treat this as the key watch item for the 4-Nov result.**

**D3. Index-options premium ADT, NSE + BSE combined, by policy phase (₹ Cr/day)** [V-p SEBI study Table 9; BSE share E using D1]

| Phase | Period | Industry index-options ADT | Change | BSE quarterly avg in phase | BSE share of index options [E] |
|---|---|---|---|---|---|
| Pre-policy | Apr–Nov 2024 | 65,935 | — | ~7,900 | ~12% |
| Initial contraction | Dec 2024–Mar 2025 | 54,771 | −17.4% | ~10,300 | ~19% |
| Adjustment | Apr–Sep 2025 | 59,237 | +8% | ~15,045 | ~25% |
| Recovery | Oct 2025–Mar 2026 | 81,696 | +38% | ~24,190 | ~30% |
| Monthly markers | Nov-24 63,371; Jul-25 49,870 (low); **Mar-26 1,18,474 (record)** | | | | |

**D4. Expiry-day vs non-expiry-day premium ADT (₹ Cr)** [V-p SEBI study Table 10]

| | Pre-policy (Apr–Oct 2024) | Post-policy (Dec 2024–Mar 2025) | Recent (Oct 2025–Mar 2026) |
|---|---|---|---|
| NSE expiry-day | 64,181 | 47,761 | 79,802 |
| NSE non-expiry-day | 60,048 | 42,659 | 50,760 |
| BSE expiry-day | 22,271 | 25,648 | 53,357 |
| BSE non-expiry-day | 1,101 | 6,917 | 15,667 |
| NSE expiry ÷ non-expiry | 1.1× | 1.1× | 1.6× |
| BSE expiry ÷ non-expiry | 20.2× | 3.7× | 3.4× |

**Insight:** BSE's franchise is no longer only an expiry-day product. Non-expiry ADT rose 14× in 18 months (₹1,101 → ₹15,667 Cr). In a five-day week with one Thursday expiry, **slightly more than half of BSE's weekly premium now trades on non-expiry days** [E: 15,667 × 4 ÷ (15,667 × 4 + 53,357) ≈ 54%], against ~17% before the Nov-2024 measures [E: 1,101 × 4 ÷ (1,101 × 4 + 22,271)]. This partly hedges BSE against an expiry-day-specific curb, but not against an end to weekly contracts.

**D5. Equity-derivatives turnover, NSE + BSE (₹ lakh Cr)** [V-p SEBI study Table 5]

| FY | Futures (notional) | YoY | Options (**premium**) | YoY | Index options as % of options |
|---|---|---|---|---|---|
| FY22 | 295 | — | 69 | — | — |
| FY23 | 286 | −3% | 119 | +73% | 92% |
| FY24 | 329 | +15% | 156 | +31% | 91% |
| FY25 | 463 | +41% | 178 | +14% | 89% |
| FY26 | 394 | −15% | 191 | +7% | 91% |

**D6. Who pays and who takes: individual traders' F&O transaction costs (₹ Cr)** [V-p SEBI study §6.35; PR 22/2024]

| | FY24 | FY25 | FY26 |
|---|---|---|---|
| Total transaction costs | 22,451 | 24,827 | 24,859 |
| STT paid by individuals | — | 4,920 | 6,645 (26.7%) |
| Brokerage | — | — | ~11,010 (44.3%) |
| **Exchange transaction charges** | — | — | **~3,980 (16%)** (−6% YoY) |
| GST / stamp / SEBI fee | — | — | 11.0% / 1.3% / 0.9% |
| Cost per active trader (₹) | 26,000 | 26,027 | 31,628 |

FY22–FY24 cumulative: ~₹50,000 Cr, of which brokerage 51% and exchange fees 20%. FY22–FY26: ~₹1 lakh Cr, with STT's share rising from 13% to 27%. Gross trading P&L FY26: prop +₹44,000 Cr, FPIs +₹14,000 Cr (−55%), corporates +₹8,000 Cr, individuals −₹72,000 Cr (FY25 −₹98,000 Cr). 0DTE share of index-options turnover: 70% (FY25) → 59% (FY26).

**D7. SEBI loss studies (individuals, equity F&O)** [V-p]

| Study | Period | % loss-makers | Aggregate net loss | Other |
|---|---|---|---|---|
| Jan-2023 | FY22 | 89% | — | (cited in PR 22/2024) |
| Sep-2024 (PR 22/2024) | FY22–FY24 | 93% | >₹1.8 lakh Cr (3 yrs) | avg ~₹2 lakh per trader; >1 crore traders |
| Aug-2026 | FY25 | 90.9% | ₹1.12 lakh Cr (revised; broker sample 13 → 15) | 106.2 lakh traders |
| Aug-2026 | FY26 | **87.7%** | **₹91,685 Cr** | 87.5 lakh traders; avg loss ₹1.17 lakh; options 92% of losses |

**D8. Transaction-fee schedules (from 1-Oct-2024, SEBI "true to label")** [V-p circulars]

| Exchange / product | Fee | Basis | Per ₹ Cr, per side | Before (top slab) |
|---|---|---|---|---|
| NSE equity options | ₹35.03 per lakh, **each side** | premium | ₹3,503 | ₹49.50/lakh |
| NSE equity futures | ₹1.73 per lakh, each side | notional | ₹173 | ₹1.88 |
| NSE cash | ₹2.97 per lakh, each side | value | ₹297 | ₹3.22 |
| BSE Sensex & Bankex options | ₹3,250 per Cr | premium | ₹3,250 | ₹49.50/lakh |
| BSE Sensex 50 & stock options | ₹500 per Cr | premium | ₹500 | unchanged |
| BSE index & stock futures | Nil | — | 0 | Nil |
| BSE cash | ₹3.75 per lakh | value | ₹375 | unchanged [V-s Zerodha] |
| MCX futures | ₹2.10 per lakh | notional | ₹210 | ₹2.60 |
| MCX options | ₹41.80 per lakh | premium | ₹4,180 | ₹50.00 |
| IEX (all electricity segments) | ≤2 p/kWh per side (CERC cap) | volume | n/a | — [primer; CERC order not fetched] |

**D9. STT schedule (verified)** [V-p Finance Bill 2026 Memorandum, Clause 143]. Options 0.0625% → 0.10% (1-Oct-2024) → **0.15% of premium (1-Apr-2026)**. Exercised options 0.125% → **0.15% of intrinsic value**. Futures 0.0125% → 0.02% → **0.05%**. Stated rationale: "disproportionate increase in speculation in futures and options trading". **CTT: no change in Finance Bill 2026** (only a definitional cross-reference). Also from 1-Apr-2026, buy-back proceeds are taxed as capital gains, which matters for an IEX buyback.

**D10. MCX options by commodity group, ADT (₹ Cr)** [V-p deck]

| Group | Q1 FY26 premium | Q1 FY26 notional | Q4 FY26 premium | Q4 FY26 notional | Q1 FY27 premium | Q1 FY27 notional | Q1 FY27 prem/notional |
|---|---|---|---|---|---|---|---|
| Bullion | 658 | 1,06,286 | 3,254 | 3,15,321 | 2,371 | 6,81,609 | 0.35% |
| Energy | 3,584 | 1,63,664 | 7,265 | 2,52,138 | 6,647 | 2,97,913 | 2.23% |
| Base metals | 3 | 278 | 109 | 7,927 | 69 | 10,169 | 0.68% |
| **Total** | **4,245** | **2,70,228** | **10,628** | **5,75,387** | **9,086** | **9,89,691** | **0.92%** |

Gold vs silver vs crude vs natural gas *premium* is not disclosed. FY26 notional by contract (AR): gold options ₹1,92,810 Cr, silver options ₹74,883 Cr, crude options ₹1,39,181 Cr, natural-gas options ₹49,556 Cr per day.

**D11. IEX volumes by segment** [V-p]

| Segment | FY26 share of 159.8 BU (incl. certificates) | FY26 BU [E] | Q2 FY26 MU | Q2 FY27 MU | YoY |
|---|---|---|---|---|---|
| DAM (incl. HP-DAM) | 39% | ~62 | 14,534 | 14,855 | +2.2% |
| RTM | 34% | 54.9 | 14,925 | 16,490 | +10.5% |
| TAM | 6% | ~9.6 | 2,719 (with DAC) | 5,477 (with DAC) | +101.5% |
| DAC | 2% | ~3.2 | | | |
| Green (G-DAM + G-TAM) | 7% | ~11.2 | 3,040 | 2,863 | −5.8% |
| Certificates (REC, 1 REC = 1 MWh) | 12% | 18.7 (187 lakh RECs) | ~44.3 lakh [E] | 15.27 lakh | −65.5% |
| **Electricity total** | 88% | **141.1** | ~35,218 [E] | **39,685** | **+12.7%** |

RTM BU: FY23 24.2; FY24 30.1; FY25 38.9; FY26 54.9; Q1 FY26 13.0; Q1 FY27 16.0; H1 FY27 32.5. FY26 power-exchange total (IEX + PXIL + HPX) 168.55 BU, short-term market 302.08 BU, bilateral 96.04 BU, DSM 37.49 BU; PX = 9.87% of the 1,707 BU transacted [V-snip CEA]. **IEX share ≈ 83.7% [E].**

**D12. Global exchange peers, FY2025 (company releases)** [V-p unless marked]

| Exchange | FY2025 revenue | Margin | P/E TTM Oct-26 [V-s] | Note |
|---|---|---|---|---|
| CME Group | $6,520.6m (+6.4%) | op. income $4.2bn → ~64.9% GAAP (~69% adj.) | 25.8× | record ADV 28.1m contracts; RPC $0.707 (Q4) |
| ICE | $12,640m gross; **$9,931m net** (+7%) | op. margin 50% GAAP / 60% adj. | 22.9× | 20th straight record year |
| LSEG | total income ex-recoveries ~£8.99bn (+7.1% organic) [snippet] | **EBITDA margin 50.3%** (EBITDA £4,523m) | n/f | data-heavy model |
| HKEX | HK$29.2bn revenue & other income (+30%) | **EBITDA margin 79%** (EBITDA HK$22.8bn) | 30.3× | cash ADT HK$249.8bn (+90%) |
| Deutsche Börse | n/f | ~55% [K] | 27.9× | |
| Nasdaq | >$5.2bn net revenue [V-snip] | n/f | 29.8× [Part 1] | |
| JPX, SGX, B3 | n/f | [K] | Part 1 values | |
| **Indian members (FY26, screener OP)** | BSE ₹5,124 Cr; MCX ₹2,302 Cr; IEX ₹616 Cr | **68% / 71% / 84%** | 46.5× / 50.0× / 17.8× | |

**Read:** HKEX (79%) is the only large global peer whose margin matches Indian levels. Like BSE and MCX, it is a near-monopoly exchange-plus-clearing model without a data and analytics conglomerate attached. CME at ~65–69% is next. ICE and LSEG at 50–60% carry data and mortgage-tech businesses. The Indian premium is therefore **growth and monopoly structure, not margin per se.**

## 4.4 Gap log (Part 1 §H and the report-back list)

| # | Gap | Status | Evidence / what was tried |
|---|---|---|---|
| H1 | CERC final notification of the coupling regulations; DAM go-live date | **STILL OPEN — no notification found as of 25-Oct-2026.** Process and legal facts are now firm: comments to 5-Jun, hearing 10-Jun-2026; SC order 3-Aug-2026 lets CERC proceed; CERC told the SC "4–6 weeks" [V-snip Zee]. IEX's 6-Oct, 13-Oct, 22-Oct and 23-Oct filings are silent on notification. | CERC site 404/JS; two extended searches; IEX filings read [V-p]. **Writer: "final regulations awaited (draft Apr-2026); once notified, Grid-India has six months to frame the coupling procedure, so DAM coupling is unlikely before H1 FY28 [E]."** |
| H2 | Monthly/quarterly NSE vs BSE premium ADTO; Q2 FY27 BSE | **Largely filled.** BSE quarterly Q1 FY24–Q1 FY27 [V-p] (D1); industry phases and expiry split [V-p SEBI] (D3–D4). Monthly BSE Jun/Jul/Aug-26 [V/V-snip]. NSE Q2–Q3 FY26 still derived; Sep-26 not found. | nseindia blocked; Jefferies Jul–Sep notes not found |
| H3 | BSE notional ADTO units | **Filled** (S6) | BSE deck + AR [V-p] |
| H4 | BSE FY26 and Q1 FY27 revenue mix | **Filled** (S9; §4.2.1) | BSE deck slides 10, 25 [V-p] |
| H5 | BSE accounting for CDSL; HPX stake | **Filled:** CDSL 15% associate (equity method); HPX 22.62% associate (S10) | BSE AR FY26 [V-p] |
| H6 | MCX options split by commodity; premium-to-notional | **Mostly filled** at commodity-group level (bullion/energy/base) for three quarters, plus FY26 notional by contract. Gold vs silver and crude vs gas *premium* is not disclosed. | MCX deck + AR [V-p] |
| H7 | Electricity-futures share NSE vs MCX | **Explained, not reconciled:** bases differ (MCX ADT 55% / OI >70% in Q1 FY27; NSE lots 72% Jul-25–Mar-26). | MCX call/AR [V-p] |
| H8 | IEX FY26 segment volumes | **Filled** (S13; D11) | IEX decks [V-p] |
| H9 | IEX share by segment; CERC MMR | **Partly:** overall ~83.7% [E from CEA snippet]; management "80–85%"; DAM ~98–99% remains [primer]. Per-segment PX split not obtained. | CEA PDF 404; IEX AR conflict (S24) |
| H10 | CERC fee cut (2 p → 1.5 p) | **Still open:** no draft or order found; not mentioned in IEX's AR or Analyst Meet. | Searches; AR read |
| H11 | Global peer margins | **Mostly filled:** CME, ICE, LSEG, HKEX [V-p]; DB, Nasdaq, JPX, SGX, B3 remain [K]/snippet. | Releases fetched |
| H12 | Fee schedules | **Filled:** NSE, BSE, MCX circulars [V-p] (D8) | |
| H13 | CTT changes in Budget 2026 | **Filled: none** [V-p Finance Bill] | |
| H14 | NSE DRHP date; listing price | **Listing filled** (₹1,800, 24-Sep-26; two sources) [V-s]. DRHP June-2026 still [V-snip]. | |
| H15 | FY22/FY24 loss-study numbers | **Filled** for FY22 (89%) and FY22–24 (93%, >₹1.8 lakh Cr) [V-p]; FY24 single-year 91.1% stays [K]. | SEBI PR 22/2024 |
| H16 | Demat accounts FY22–FY26, Sep-26 | **Still partly open:** Mar-26 CDSL 18.01 cr; Jun-26 ~23.2 cr total (CDSL 18.6 + NSDL 4.6) [V-snip]; Dec-25 21.6 cr; Aug-25 20.5 cr [V-snip]. Mar-22 to Mar-25 stay [K]. A snippet's "25.7 cr" total is internally inconsistent (likely NSE investor accounts); do not use it as demat. | NSDL site empty reply |
| H17 | BSE Q1 FY27 derivatives revenue ₹1,155 Cr | **Filled** [V-p deck] | |
| H18 | RBI BG rule effective date | **Filled: 1-Jul-2026** (postponed from 1-Apr) [V-p transcripts] (S7) | |
| H19 | SEBI 2026 F&O actions | **Partly:** no new F&O-restriction circular found. The SEBI FY25–26 study (Aug-2026) documents the effect of the 2024 measures; the SEBI RSS (Oct-2026) shows only operational circulars (e.g. EPI margin waiver). A weekly-expiry consultation paper is still not found. MCX notes "SEBI now has dedicated commodity teams within MRD". | SEBI RSS fetched [V-s]; SEBI search API blocked |
| H20 | IEX price cap | **Filled:** ₹10 DAM/RTM; ₹20 HP-DAM [V-p AR]; cap binds on ~90–95% of evenings [V-p transcript] | |
| R1 | NSE IPO facts | **Filled** (S18) | |
| R2 | MCX net cash | **Unchanged [E] ~₹2,600 Cr.** Neither deck nor AR gives an "own funds" figure; Q1 float income ₹30 Cr shows margin money earns inside operating income. | |
| R3 | IEX net cash | **Improved:** standalone investments plus cash and bank ₹2,045 Cr (Mar-26) [V-p]; own surplus ~₹1,300–1,400 Cr [E]. | |
| R4 | MCX outages and SEBI action | **Filled:** ₹1 Cr IPF and ₹50 lakh Core SGF disincentives (FY26); legal & regulatory contingent ₹45.79 Cr [V-p] | |
| R5 | IGX status | **Corrected** (S3) | |

## 4.5 New insights and primer issues

### Insights the first pass missed
1. **The SEBI fee on notional makes BSE's margin a function of implied volatility.** BSE pays SEBI on options *notional* (₹566 Cr in FY26, 11.7% of revenue from operations) but earns on *premium*. Premium/notional rose from 8.1 bps (FY25) to 12.5 bps (Q1 FY27), so the fee-to-revenue ratio fell. This is a large, unflagged reason OPM went 58% → 68%. **A low-volatility regime would compress BSE's margin even at constant premium share** [E from V-p].
2. **Q2 FY27 is likely BSE's first real sequential decline since the curbs.** Monthly premium ADTO went Jun ₹26,200 → Jul ~₹25,400 → Aug ~₹18,700 Cr. Management flagged that RBI BG effects (live from 1-Jul) build as guarantees roll off. A ₹21,000–23,000 Cr Q2 average would cut quarterly EQD revenue by ~₹230–300 Cr vs Q1 [E]. MCX management also framed BG as a "Q2 action".
3. **BSE's moat is diversifying within options:** non-expiry-day premium rose from 1,101 → 15,667 Cr/day (SEBI), and ~54% of weekly premium is now non-expiry [E]. Monthly-contract premium is up ~10× since Jan-2025 (management). This is the only partial hedge against an expiry-day-specific SEBI action. It is not a hedge against ending weekly contracts.
4. **The state's cut of retail F&O costs now exceeds the exchanges'.** In FY26, STT was 26.7% of individuals' ₹24,859 Cr costs vs exchange charges at 16% (~₹4,000 Cr, −6% YoY). Exchange revenue is therefore increasingly paid by prop/FPI flow. Prop desks are the largest P&L winners (+₹44,000 Cr gross) and 99% of their profit is algo, so the RBI BG and co-location economics matter more than retail sentiment [E from V-p].
5. **MCX's revenue is an energy-options business that happens to have a bullion boom in its notional.** Energy was 73% of options premium in Q1 FY27 at 2.2% premium/notional, while bullion's 0.35% means a ₹1 lakh Cr/day bullion notional jump adds only ~₹350 Cr/day of premium. FY26 options p/n fell from 1.39% to 0.92% (Q1 FY27). Crude options, the largest contract, grew only 7% in notional in FY26 [V-p]. **Volatility in crude and natural gas, not gold prices, is the revenue swing factor.**
6. **IEX's DAM is capacity- and cap-constrained, not demand-constrained.** In Sep-26, DAM buy bids rose 281% YoY but DAM volume only 0.5%. Evening prices sit at the ₹10 cap on ~90–95% of days. Growth comes from RTM (+10.5%) and TAM/DAC (+101.5%). Since coupling targets DAM (~37% of Q2 volume), management's own 20–40%-of-DAM downside equals ~8–15% of total volume. This is smaller than the P/E (17.8×) implies, unless coupling extends to RTM or a fee cut follows [E].
7. **IGX is a gain, not a hole.** IGX was already equity-accounted in FY25–26, so FY27 consolidated revenue does *not* step down. The IGX IPO (SEBI observation 12-Oct-2026) will crystallise a one-off gain on ~22.3% and mark IEX's residual 25% to market. With a buyback "under consideration" (now taxed as capital gains for holders), IEX has two potential FY27 capital-return catalysts [E].
8. **Governance flags have moved to the power side.** IEX's FY26 AR Note 46 discloses an ongoing Audit-Committee investigation into a whistle-blower complaint (conflict of interest and potential diversion of business involving certain officials). In court, IEX alleged insider trading by CERC officials linked to the July-2025 order. On the securities side, MCX's FY26 outage disincentives (₹1.5 Cr) are small, but its "legal & regulatory" contingent jumped to ₹45.8 Cr.

### New primer issues (format for primer-issues.md)

**bse-limited.html**
- **FY24 premium ADTO bar ("~₹50"):** replace with the sourced quarterly series. Q1 FY24 ₹47 Cr; Q2 ₹768 Cr; Q3 ₹2,551 Cr; Q4 ₹4,630 Cr; FY24 average ~₹2,000 Cr (BSE Q1 FY27 deck slide 13). FY25 ₹8,978 Cr, FY26 ₹19,523 Cr (AR).
- **CDSL wording:** "associate, 15%, equity-accounted" is now verified (AR FY26 AOC-1; share of profit ₹68.4 Cr in FY26). Also add **HPX 22.62% (associate)**, which gives BSE a small stake in the coupling outcome on IEX's side of the market.
- **Revenue mix:** use FY26 company lines: transaction charges ₹3,795 Cr (78.5% of revenue from operations), listing ₹519 Cr, treasury on C&S funds ₹171 Cr, other operating ₹349 Cr; equity derivatives ₹3,134 Cr (64.8%).
- **Cost structure:** add SEBI regulatory fee ₹566 Cr (FY26, +71%) and clearing & settlement ₹280 Cr; together with other regulatory contributions they are 19% of revenue from operations. Explain the notional-vs-premium mismatch (insight 1).
- **Notional:** if the primer quotes notional ADT, use ₹237 lakh Cr/day (Q1 FY27), not "₹2.37 trillion".
- **Management targets:** cash share "meaningfully double-digit by early CY2027"; FPIs 650 → 800; two more indices approved for derivatives; Deutsche Börse data deal ends 1-Jan-2027; co-location 500 racks with order-flow pricing at ~20% of market.
- **MD & CEO dates:** the primer or report should not state the term-end date. BSE's deck says "took charge Jan 2023", which conflicts with the [K] Jan-2022.
- **RBI BG:** effective 1-Jul-2026 (not 1-Apr).

**mcx.html**
- **Options = energy:** add the Q1 FY27 split: energy 73% of premium (₹6,647 of ₹9,086 Cr) at 2.23% p/n; bullion 0.35% p/n. The primer's bullion-led narrative overstates gold/silver's revenue weight.
- **FY24 base:** options premium ADT ₹1,698 Cr (not "~₹1,600"); futures ₹19,636 Cr.
- **Outages:** add the SEBI financial disincentives paid in FY26 (₹1 Cr to IPF; MCXCCL ₹50 lakh to Core SGF) and the jump in "legal & regulatory" contingent liabilities to ₹45.79 Cr.
- **Variable licence cost:** product licence fees ₹108 Cr in FY26 (+56%), scaling with volume, so the claim that platform cost is "now fixed" after CDP is incomplete.
- **Shareholders:** Kotak Mahindra Bank 15% (related party); MFs 30%.
- **AMC reference price:** 50+ AMCs (not ">15"). MCX is the world's largest commodity options exchange (FIA FY2025), now verified from MCX's call and AR.
- **Core SGF:** ₹1,444 Cr (Jun-26). Float income ~₹30 Cr a quarter.
- **Coal:** both MCX and IEX have coal-exchange subsidiaries. The Ministry of Coal rules (4-Jun-2026) force e-auction volume onto coal exchanges within six months of launch, so a head-to-head contest is coming.

**indian-energy-exchange.html**
- **Coupling legal path (supersedes Part 3's fix):** APTEL appeal 28-Aug-2025 → APTEL order 13-Feb-2026 (not aggrieved yet) → draft regulations 17-Apr-2026 → comments 5-Jun, hearing 10-Jun → **SC 3-Aug-2026 declined to intervene at this stage** (IEX may challenge the final regulations). Do not write "SC admitted the appeal for a merits hearing". Add Grid-India's own objections (single point of failure, solver, scope, settlement).
- **IGX:** an associate at 47.28% *already in FY25–FY26*, not newly deconsolidated. Any primer line implying IGX revenue sits inside consolidated revenue is wrong.
- **Segment mix FY26:** DAM ~62 BU (39%), RTM 54.9 BU (34%), TAM ~9.6 BU, DAC ~3.2 BU, Green ~11.2 BU, RECs 187 lakh. RTM grew 41% and management guides 25–30% a year.
- **Price cap binding:** the ₹10/kWh cap is hit on ~90–95% of evenings; Sep-26 DAM averaged ₹7.3 (+105%) with buy bids +281% but DAM volume +0.5%.
- **Management downside:** coupling could cost "20–40%" of DAM, i.e. ~8–15% of volume [E].
- **Governance:** AR Note 46 whistle-blower investigation (ongoing).
- **Capital return:** buyback "will consider"; Q2 FY27 earnings call 30-Oct-2026.

**Cross-report**
- **stockbroking.html / market-infra.html:** the SEBI study's cost table (D6) gives exchange charges at 16% of individuals' F&O costs (FY26) and 20% over FY22–24. Use it for any "who earns what" chart. The individual-trader count (106.2 → 87.5 lakh) and the loss figures match.
- **All three primers:** RBI BG norms are effective 1-Jul-2026.

### Key primary URLs added in Part 4
- BSE Q1 FY27 deck: https://nsearchives.nseindia.com/corporate/BSE1_04082026185534_NSEintimation.pdf · transcript: https://nsearchives.nseindia.com/corporate/BSE1_10082026115817_NSEIntimation.pdf · AR FY26: https://archives.nseindia.com/annual_reports/AR_29957_BSE_2025_2026_A_15352240_23072026103201.pdf · fee notice: https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20240927-37
- MCX Q1 FY27 deck: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8b3113f2-04dd-4505-a328-48aa659b87c0.pdf · transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f5811825-62ee-496e-8783-f248900a283f.pdf · AR FY26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/14a275c3-afb7-4db3-b745-a22d023bfe29.pdf · fee circular: https://www.bseindia.com/xml-data/corpfiling/AttachHis/c4a7c1d1-37c0-4c00-82c3-66ebf482d383.pdf
- IEX Analyst Meet deck: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b3ce6c35-25ec-4248-b1a3-1dd0dbb5d5ef.pdf · transcript: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dc327ed0-8c29-4b9f-9334-114e92200e5b.pdf · Q4 FY26 deck: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6d8a5f6d-f1db-4710-90ce-1c3e8a057e51.pdf · AR FY26: https://www.bseindia.com/xml-data/corpfiling/AttachHis/6b4c0801-5233-47fc-8d66-7de6795f88a4.pdf · Q2 volumes: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ae65f299-be0d-440c-b450-df74371b0935.pdf
- SEBI FY25–26 study: https://www.sebi.gov.in/sebi_data/attachdocs/aug-2026/1787233506209.pdf · SEBI PR 22/2024: https://www.sebi.gov.in/sebi_data/attachdocs/sep-2024/1727086965496.pdf
- Finance Bill 2026 Memorandum: https://www.indiabudget.gov.in/doc/memo.pdf · NSE circular FA64232: https://nsearchives.nseindia.com/content/circulars/FA64232.pdf
- Coupling SC order (secondary): https://powerpeakdigest.com/iex-market-coupling-supreme-court-cerc-ruling/
- Peers: ICE https://mondovisione.com/media-and-resources/news/intercontinental-exchange-reports-strong-full-year-2025-results-20th-consecuti-202625/ · CME https://www.prnewswire.com/news-releases/cme-group-inc-reports-fourth-consecutive-year-of-record-annual-revenue-adjusted-operating-income-adjusted-net-income-and-adjusted-earnings-per-share-for-2025-302678360.html · LSEG https://www.lseg.com/en/media-centre/press-releases/2026/london-stock-exchange-group-plc-preliminary-results-for-the-year-ended-31-december-2025 · HKEX https://www.hkex.com.hk/-/media/HKEX-Market/News/News-Release/2026/260226news/2025-Q4-Results-Presentation_E.pdf
- NSE listing: https://www.freepressjournal.in/business/nse-shares-rise-5-after-flat-market-debut · https://hdfcsky.com/news/nse-ipo-shares-list-at-rs-1800-on-bse-0-84-percent-above-rs-1785-issue-price

*End of Part 4.*
