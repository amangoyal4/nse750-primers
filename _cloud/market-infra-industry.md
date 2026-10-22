# Indian Depositories & Registrars (Business Services || Depositories, Clearing Houses and Other Intermediaries): Research Dossier + Company Fact Packs

Compiled 22-Oct-2026 for the writer agent (slug: market-infra; display name "Depositories & Registrars"; tier C, 3 members). This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), including sections A–H.
- **Part 2** is the company fact pack for all three members (brief-companies.md) plus a context pack on NSDL (listed peer, not a member).
- **Part 3** is the company-KPI appendix: summary grid, aggregates, reconciliation vs primers, primer issues (§3.4) and source URLs.

**Members (3, Tier C):** Central Depository Services (India) (CDSL · NSE only — no BSE listing), Computer Age Management Services (CAMS · 543232), KFin Technologies (KFINTECH · 543720).
**Key listed peer outside the member list:** National Securities Depository Ltd (NSDL · BSE 544467 / NSE NSDL; listed 6-Aug-2025). It is used throughout for the depository duopoly but is **excluded from all member aggregates**.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source (company investor presentation / transcript / press release filed on BSE/NSE, AMFI monthly note PDF, screener.in page). URLs in §3.5.
- **[V-deck]** = read from a fetched company investor presentation. Some chart values were recovered from PDF text layout (bars without labels); where a value had to be inferred from layout, it says "layout-read" — the totals reconcile, but spot-check before quoting to one decimal.
- **[V-snip]** = verified only from a search-result summary or a secondary article (press), not the primary document.
- **[K]** = well-established public fact from memory. The source is named but was not re-fetched. Spot-check if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic (my calculation from [V] inputs unless stated). Present as "approx." or a range.
- **[primer]** = from our own primers in /primers/ (cdsl.html refreshed 13-Jul-2026; cams.html 14-Jul-2026; kfin-technologies.html 18-Jul-2026).
- **[screener 22-Oct-26]** = screener.in consolidated pages pulled 22-Oct-2026 (intraday; prices CDSL ₹1,225, CAMS ₹674, KFin ₹847, NSDL ₹721).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion (Tn). "bps" = basis points = 0.01%. 1 bp of ₹1 lakh crore = ₹10 Cr a year.
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All members have a March year-end.
- **FX: ₹94.9 = US$1** (Oct-2026, per orchestrator) for USD conversions. KFin reports its international AAUM in US$ at its own rate (US$49.6 bn = ₹4,722 bn, i.e. ~₹95.2/$ [V-deck]).
- Macro context (from orchestrator; sibling dossiers): Nifty **22,780 on 28-Sep-2026**; RBI repo **hiked to 5.50% on 7-Oct-2026**; rupee ~₹94.9/$; **West Asia war from 28-Feb-2026**, Hormuz closure, ceasefire 7-Apr-2026. AMFI's March-2026 note records **Nifty 50 −11.3% in March 2026 alone, "the fourth consecutive month" of decline, "owing to the ongoing global market turmoil arising from the US-Israel–Iran conflict"** [V AMFI Mar-26 note].

**Q2 FY27 status (as of 22-Oct-2026): none of the three members (nor NSDL) has reported Q2 FY27. Q1 FY27 (Jun-26) is the latest quarter for all.**

| Company | Q1 FY27 result (board / call) | Q2 FY27 board date / status |
|---|---|---|
| CDSL | Results ~1-Aug-2026 (investor presentation filed with NSE 1-Aug-2026); call **3-Aug-2026** (HDFC Securities host) [V-deck; V transcript] | **Board 31-Oct-2026** (intimated 12-Oct); trading window closed from 1-Oct [V screener announcements] |
| CAMS | Results ~1-Aug-2026 (revised presentation re-filed 3-Aug-2026 to fix a typo); call **4-Aug-2026** [V-deck; V transcript] | **"Upcoming result date: 29-Oct-2026"** on screener [V screener]; a 1-on-1 investor call is already scheduled for 2-Nov-2026 [V screener] |
| KFin Technologies | Results **24-Jul-2026** (press release dated Mumbai, 24-Jul); call **27-Jul-2026** [V-deck; V transcript] | **Results 26-Oct-2026**; earnings call **27-Oct-2026, 11:00 am IST** (intimated 7-Oct) [V screener] |
| NSDL (peer) | Q1 FY27 presentation filed Jul-2026 [V-deck] | **Board 31-Oct-2026**; ICICI Securities-hosted call **2-Nov-2026, 4:30 pm** [V screener] |

**Still listed?** All three members are listed and trading; no merger, demerger or delisting is pending. Corporate actions and ownership events the writer must know:
1. **CDSL is NSE-only — confirmed.** BSE Ltd is CDSL's promoter (15.00%, the MII cap); CDSL lists only on NSE (symbol CDSL, ISIN INE736A01011) [V CDSL filing header lists only NSE; V screener shows "NSE F&O" only]. CDSL listed on 30-Jun-2017, "India's first and Asia-Pacific's first listed depository" (company's own wording) [V-deck]. A 1:1 bonus in 2024 doubled equity capital from ₹104 Cr to ₹209 Cr (FY25 balance sheet) [V screener; bonus date K, Jul-2024].
2. **CAMS completed a 1:5 stock split** (face value ₹10 → ₹2) — screener shows FV ₹2 and FY26 EPS ₹19.20 on ~24.8 crore shares [V screener; primer dates the split Dec-2025 — not re-verified]. All CAMS per-share history before the split must be divided by 5.
3. **KFin's promoter General Atlantic (GA) is exiting in blocks.** Screener promoter holding **22.82% (Jun-26) → 14.06% (Sep-26)** [V screener]. A block of **1.51 crore shares (8.75%) at ₹925 (~₹1,400 Cr) traded on 20-Aug-2026** [V Business Today; seller named as General Atlantic Singapore Fund in V-snip reports]. Earlier GA blocks: ~5.8% (May-2024, ~₹712 Cr) and ~10% (May-2025, ~₹1,790 Cr) [V-snip]. Reports put GA's post-deal stake at ~13.1%; screener's 14.06% for Sep-26 may include other promoter-group entities or reflect the filing basis — **flag; use 14.06% (screener, Sep-26) in tables, "~13–14%" in prose.**
4. **KFin's Ascent Fund Services is only 51% owned**: "Acquired 51% stake on 13th Oct'25 with a path to 100% ownership over the next 5 years" [V-deck footnote]. The obligation to buy the remaining 49% is the likely driver of KFin's jump in "other liabilities" from ₹296 Cr (Mar-25) to ₹1,041 Cr (Mar-26) [V screener; interpretation E] — a debt-like item for EV.
5. **KFin chair change:** V. M. Nair retired as chairperson 30-Sep-2026; **Dinesh Khara (ex-SBI chairman) took over 1-Oct-2026** [V screener announcement].
6. **NSDL** listed **6-Aug-2025** (100% offer for sale; price band ₹760–800, issue ~₹4,012 Cr [K]; the deck confirms the Aug-6-2025 listing date [V-deck]). It now trades at ₹721 — **below its IPO price** [V screener].
7. **CAMS:** JPMorgan entities raised their stake from 5.05% to 7.06% on 11-Sep-2026 (open market) [V screener announcement]. CAMS has no promoter.

---

## READ THIS FIRST: ten definitional traps

1. **AAUM vs QAAUM vs closing AUM — three different "AUMs".**
   - **AMFI closing (month-end) AUM**: industry ₹73.73 lakh Cr at 31-Mar-2026 [V AMFI note]; ₹82.64 lakh Cr at 30-Sep-2026 [V-snip, AMFI via Bajaj Broking/Angel One].
   - **Quarterly average AUM (QAAUM / "last quarter average AAUM")** is what RTAs bill on and what market shares use: industry **₹83.1–83.2 Tn in Q1 FY27** (CAMS deck ₹83.1 Tn excl. domestic FoF; KFin deck ₹83.2 Tn) [V-deck]. In a falling market the average is far above the closing figure (Mar-26 close ₹73.7 Tn vs Q4 FY26 average ~₹81.6 Tn).
   - **Fund-of-funds (FoF):** CAMS reports share "excluding FoF domestic" (₹55.9 Tn, 67.2%) but computes yield on AUM **including** FoF (₹57.33 Tn) [V-deck footnote]. Never mix.
   - **CAMS 67.2% + KFin 32.8% = 100%** of QAAUM [V-deck both] — there is no third MF RTA of scale.
2. **BO accounts ≠ investors.** Demat accounts ("beneficial owner" accounts) were **~232 mn at Jun-26** (CDSL 185.9 mn + NSDL 45.6 mn) [V-deck CDSL, NSDL; SEBI series in KFin deck 232 mn]. Unique MF investors were only **~4.85 Cr serviced by CAMS** (Jun-26) [V-deck], and AMFI folios **28.62 Cr** (Sep-26) [V-snip]. One person can hold several demat accounts (multiple brokers) and dozens of folios. "18.6 crore investors on CDSL" is wrong; say "18.6 crore demat accounts".
3. **Market share has three bases at the depositories.**
   - **Accounts:** CDSL ~80% (1,859 lakh of ~2,315 lakh, Jun-26) [V-deck; E].
   - **Custody value:** NSDL **85.8%** (institutional/FPI and bonds sit at NSDL) [V-deck NSDL]. CDSL custody ₹88 lakh Cr (Jun-26) [V-deck].
   - **Total income:** NSDL **43.2%**, i.e. CDSL ~57% [V-deck NSDL, its own computation]. "CDSL has 80% share" is true only for accounts.
4. **Equity vs non-equity AUM yield.** RTA fees are tiered by asset class: equity AUM pays several times the bps of liquid/debt AUM (KFin CEO: a mix shift "from debt to liquid" accounted for ~30% of a ~2% QoQ yield drop in Q1 FY27) [V transcript]. CAMS equity share of its AAUM **54.3%** (Q1 FY27) [V-deck]. A rise in debt/liquid assets inflates AUM while diluting yield.
5. **"Yield" has two numerators.** CAMS splits MF revenue into **asset-based (74.1% of Q1 FY27 revenue)** and **MF non-asset-based (11.0%)** (transaction, NFO, OP/other) [V-deck]. Asset-based yield ≈ **2.0 bps**; all-MF-revenue yield ≈ **2.35 bps** (Q1 FY27, on ₹57.33 Tn incl. FoF) [E from V-deck]. The primer's "~3 bps" is neither. KFin does not split; its domestic-MF revenue ÷ its AAUM ≈ **3.15 bps** [E] — higher because its clients are mid-sized AMCs on higher telescopic slabs.
6. **CDSL standalone vs consolidated, and the CVL dividend.** Standalone income includes dividends from subsidiary CVL (₹62 Cr in Q1 FY26; ₹39.5 Cr in Q1 FY27) [V-deck] — which inflates standalone Q1 PAT and makes standalone YoY comparisons noisy. Use **consolidated**: FY26 total income ₹1,238 Cr (operating revenue ₹1,145 Cr + other income ₹93 Cr), PAT ₹455 Cr [V screener]. The primer's "income ₹1,239 Cr" is **total income**, not revenue.
7. **CDSL "other income" mixes operating and treasury lines.** In the deck, "Other Income" (consolidated) for Q1 FY27 = ₹75 Cr, which the CFO split as: e-CAS fees ₹14.8 Cr, e-voting ₹6.32 Cr, **investment MTM + accrued investment income ₹43.8 Cr**, other operating ₹6 Cr, other ₹3.94 Cr [V transcript]. So ~₹44 Cr of the quarter (13% of total income) was treasury, not toll revenue.
8. **Reported PAT vs attributable vs "excl. Ascent".**
   - CAMS: screener PAT ₹472 Cr (FY26) vs **attributable to owners ₹476.0 Cr** (non-controlling interest in Think360/Fintuple is negative) [V screener; V-deck]. Use ₹476 Cr in prose, ₹472 Cr in screener-basis aggregates.
   - KFin: company reports "incl. Ascent" (FY26 PAT ₹343.7 Cr; EBITDA margin 40.7%) and "excl. Ascent" (PAT ₹350.2 Cr; margin 43.5%) [V-deck]. **Ascent is loss-making at PAT level after amortisation** (FY26 incl. PAT is *below* excl. PAT). Always label.
9. **Screener operating profit vs company EBITDA.**
   - CAMS: screener FY26 OP ₹683 Cr (45.1%); company "operating EBITDA" sum of quarters ₹686 Cr (45.2%) [V; E sum]. Immaterial.
   - KFin: screener OP ₹530 Cr = company EBITDA ₹529.7 Cr (40.7%) [V]. Same.
   - CDSL: screener OP ₹582 Cr (50.8%) **excludes** other income; CDSL's deck "EBITDA" includes subsidiary dividends at standalone level. Use screener.
   - NSDL: company "EBITDA" (57.8% Q1 FY27) **includes other income**; its operating margin is 43.8% [V-deck]. Screener's consolidated NSDL OPM (20–28%) is far lower because consolidation includes **NSDL Payments Bank** (low-margin) [V screener; E]. Never compare NSDL's consolidated OPM with CDSL's.
10. **Cash = cash + investments (+ deposits), and screener understates it.**
    - CAMS: company "cash & cash equivalents" **₹971.45 Cr (30-Jun-26)** incl. bank balances, FDs, G-secs and MF units, excluding money held in trust [V-deck]; screener "investments" is only ₹446 Cr.
    - KFin: company cash & equivalents **₹687 Cr (30-Jun-26)**, of which ~₹200 Cr goes to the declared dividend [V transcript]; screener investments ₹239 Cr.
    - CDSL: screener investments ₹1,487 Cr (Mar-26); the deck/transcript gives no single cash figure; the CFO says the treasury is mainly debt MFs with ~5–7% in ETFs [V transcript]. **Our primer's "~₹2,850 Cr cash & investments" is impossible: CDSL's entire consolidated balance sheet totals ₹2,419 Cr (Mar-26)** [V screener]. A defensible estimate is **~₹1.6–1.9k Cr** (investments ₹1,487 Cr + bank balances inside "other assets" ₹424 Cr, which also hold receivables) [E].
    - All three are effectively debt-free; screener "borrowings" (CAMS ₹64 Cr, KFin ₹55 Cr, CDSL ₹2 Cr) are lease liabilities. **But KFin carries a likely Ascent put/earn-out liability** inside other liabilities (see still-listed item 4).

---

## 0. Top-line framing (what an expert leads with)

- **Three companies, two toll roads, one customer: the Indian retail saver.**
  - **CDSL** (depository) charges issuers, DPs/brokers and investors-via-DPs for keeping and moving securities in demat form: FY26 consolidated revenue **₹1,145 Cr**, OP ₹582 Cr (**50.8%**), PAT **₹455 Cr (−13.5%)** [V screener].
  - **CAMS** and **KFin** (mutual-fund registrars & transfer agents, RTAs) charge AMCs a basis-point fee on the assets they keep the books for: FY26 revenue **₹1,516 Cr** (+6.6%) and **₹1,301 Cr** (+19.2%, with Ascent), OP margins **45.1%** and **40.7%**, PAT **₹472 Cr** (attrib. ₹476 Cr) and **₹344 Cr** [V screener; V-deck].
  - **All three: FY26 revenue ₹3,962 Cr (+10.2%), OP ₹1,795 Cr (45.3%), PAT ₹1,271 Cr (−4.0%); m-cap ₹56,986 Cr on 22-Oct-2026 → 44.8× FY26 PAT, 14.4× revenue** [E: sums of screener 22-Oct-26].
- **FY26 was a "volume up, price down, activity down" year; Q1 FY27 shows the toll-booths re-accelerating even in a falling market.**
  - Volumes kept compounding: demat accounts **192 mn (Mar-25) → 225 mn (Mar-26) → 232 mn (Jun-26)** [V KFin deck, SEBI data]; industry QAAUM **₹67.4 Tn (Q4 FY25) → ₹81.6 Tn (Q4 FY26) → ₹83.2 Tn (Q1 FY27)** [V KFin deck]; monthly SIP **₹32,087 Cr (Mar-26, first time >₹32k Cr) → ₹32,490 Cr (Sep-26, record)** [V AMFI; V-snip].
  - Price fell: CAMS took a "one-time pricing adjustment" in FY26 that pushed operating EBITDA margin down to ~42% before it climbed back to 46.4% [V transcript]; KFin guides ~3% a year of yield erosion and saw ~2% QoQ in Q1 FY27 [V transcript]; KRA tariffs were cut by SEBI (fetch ₹35 → ₹28, new KYC ₹20 → ₹5) [V CDSL transcript].
  - Activity fell: SEBI's F&O curbs (from 20-Nov-2024) cut unique retail F&O traders from 98.1 lakh (FY25) to 78.6 lakh (FY26) and options contracts by ~51.5% [V-snip, SEBI study via press]; CDSL's IPO/corporate-action income dropped from ₹62 Cr (Q2 FY26) to ₹17 Cr (Q4 FY26) [V-deck].
  - **Q1 FY27 (Apr–Jun 2026) all three grew revenue double-digit**: CDSL +13% (PAT +16%), CAMS +11.6% (PAT +17.6%, op. EBITDA margin 46.4%), KFin +30% (Ascent-led; PAT −2.6%) [V screener; V-deck].
- **Structure is the moat.** Two depositories (CDSL, NSDL) by law and licence; two MF RTAs of scale (CAMS 67.2%, KFin 32.8% of QAAUM) by history and switching cost [V-deck]. No MF has switched RTA in a way that moved share by more than a point or two in years [K; management commentary]. KYC registration (KRA) is a 5-player oligopoly in which **CDSL's CVL is the largest (10.62 crore records)** and **CAMS KRA is #2 (~20% share, 2 crore+ records)** [V-deck both].
- **The debate is price, not volume.** Each of these businesses compounds units at 15–25% a year but gives some of it back in price: depository tariffs are SEBI-supervised and were cut/flattened in 2024 ("true-to-label", flat ₹3.50/debit from 1-Oct-2024 [V-snip]); RTA fees "telescope" with AMC size and are re-negotiated at renewals; KRA fees were cut by SEBI in 2026. **Operating leverage on volume vs regulated/negotiated price erosion** is the whole equation.
- **Valuations price scarcity, but have de-rated.** 22-Oct-2026: **CDSL 54.3× TTM P/E, 13.1× book; CAMS 33.8×, 12.6×; KFin 41.8×, 8.7×; NSDL 37.1×, 6.1×** [V screener]. Primer valuations (Jun–Jul 2026) were CDSL ~60×/₹28,700 Cr, CAMS ~40×/₹18,600 Cr, KFin ~45×/₹15,457 Cr — the group has lost **~5–11% of market value in three months** (CDSL −11%, CAMS −10%, KFin −5%) [primer vs V screener]. CDSL trades 27% below its 52-week high (₹1,674), CAMS 20% (₹845), KFin 30% (₹1,217), NSDL 40% (₹1,198) and 10% below its IPO price [V screener]. Global plumbing peers (Broadridge, SS&C, Computershare) trade at roughly **mid-teens to low-20s P/E** [V-snip/K; see §10] — Indian names still carry a ~1.5–2.5× growth/scarcity premium.

---

## 1. What the sub-sector does: services, value chain, where value is captured

### 1.1 Services (by member)

| Service | What it is | Who pays | Members (and key peers) |
|---|---|---|---|
| **Depository (custody + settlement of demat securities)** | Electronic registry of who owns which security (equities, bonds, MF units in demat, CPs/CDs, G-secs); executes debits/credits on settlement, pledges, transfers | Issuers (annual fee per folio/ISIN), DPs (transaction charge per debit, account fees), exchanges/clearing corps (settlement) | **CDSL**; NSDL (peer) |
| **Annual issuer charges** | Yearly fee from each company/issuer whose securities sit in the depository, formula-driven on folios | Listed & unlisted companies, MFs, bond issuers | CDSL (₹456 Cr FY26), NSDL ("annual custody fee" ₹101 Cr in Q1 FY27 alone) [V-deck] |
| **Transaction charges** | Per debit instruction from a demat account (sale/transfer); CDSL flat **₹3.50/debit** since 1-Oct-2024 (₹0.25 discount for women first-holders and MF/bond ISINs) [V-snip] | DP/broker, passed to investor | CDSL (₹240 Cr FY26) |
| **IPO / corporate-action (CA) fees** | Credit of IPO allotments, bonus, rights, splits, mergers | Issuers | CDSL (₹159 Cr FY26), NSDL ("CA/IPO" ₹18.9 Cr Q1 FY27) |
| **e-Voting, e-CAS, pledge, e-locker, eAGM** | Shareholder voting platform; consolidated account statements; margin pledge | Issuers, DPs, investors | CDSL (e-CAS ₹14.8 Cr, e-voting ₹6.3 Cr in Q1 FY27 [V transcript]); NSDL (e-voting ₹8.9 Cr, pledge ₹17.2 Cr Q1 FY27) |
| **KYC Registration Agency (KRA)** | Central store of investor KYC; "verify once, fetch everywhere"; fees per new KYC, per fetch/modify, per search | Brokers, AMCs, intermediaries | **CVL (CDSL, #1, 10.62 Cr records)**, **CAMS KRA (#2, ~20%)**, NDML (NSDL), KFin KRA, NSE's DotEx KRA [V-deck; K for the others] |
| **MF RTA (transfer agency)** | Master register of MF investors/folios; transaction origination & processing; NAV-day allotment; payouts; brokerage computation; statements; call centre; AML/compliance | AMCs (bps on AAUM + per-transaction/value-added fees) | **CAMS (67.2%)**, **KFin (32.8%)** [V-deck] |
| **Issuer solutions (corporate registry)** | Share registry for companies; IPO allotments; corporate actions; AGMs; e-voting | Companies | **KFin (#1 by clients: 11,275; 50.0% of NSE-500 by m-cap)** [V-deck]; Link Intime (MUFG), Bigshare, CVL (3,508 companies) [V-deck CDSL; K] |
| **Alternatives/AIF, PMS, wealth admin** | Fund accounting + investor servicing for AIFs, PMS, family offices | AIF/PMS managers | **CAMS Alternatives (550+ funds, ₹3.2 Tn AUA)**, **KFin (731 AIF funds, 37.3% of SEBI-registered AIFs; ₹20.6 Tn AUM)** [V-deck] |
| **International fund administration** | FA/TA for funds in SE Asia, Middle East, Cayman, etc. | Global fund managers | **KFin (511 clients incl. 394 at Ascent; US$49.6 bn AAUM)**; CAMS (GIFT City only) [V-deck] |
| **Insurance repository (e-IA)** | Electronic insurance policies held in an e-insurance account | Insurers | **CAMSRep (Bima Central; 10.7 mn e-IAs)**, **CDSL's CIRL (54.25% owned; 24.42 lakh e-IAs)**, NSDL NDML [V-deck] |
| **Payments** | NACH/UPI-Autopay mandates, bank-account verification, payment aggregation for BFSI | AMCs, insurers, NBFCs | **CAMSPay** (5.7% of CAMS revenue; 13.4 mn bank-account verifications in Q1 FY27) [V-deck] |
| **Account Aggregator (AA)** | RBI-licensed consent-based data sharing | FIUs (lenders) | **CAMSfinserv (~9% share; 363 enterprises, 90+ FIPs)** [V-deck]; NSDL's AA (NADL) [K, verify]; CDSL's chairman referenced work "for the account aggregator ecosystem" [V transcript, context unclear] |
| **NPS CRA / PoP** | Central record-keeping for National Pension System | PFRDA / subscribers | **KFin (1 of 3 CRAs; 2.3 mn subscribers, 12.2%)** [V-deck]; CAMS CRA (launched 2022) [V-deck]; Protean (NSDL e-Gov, largest) [K] |
| **Commodity repository** | Electronic negotiable warehouse receipts | Warehouses, lenders | CDSL's CCRL (52%) [V-deck] |

### 1.2 Value chains (inputs → customer)

1. **Equity investor's demat path (depository):** investor → broker/DP (Zerodha, Groww, Angel One, banks) opens a **BO account at CDSL or NSDL** (the broker chooses; most discount brokers are CDSL DPs) → trades on NSE/BSE → clearing corporation (NSCCL/ICCL) settles → depository debits seller (charging the DP ₹3.50) and credits buyer → issuer pays an annual fee per folio held at the depository; IPOs and corporate actions generate per-credit fees.
   - **Value capture:** the depository earns on *stock* (issuer fees, custody fees at NSDL) and *flow* (debits, IPO credits, pledges). The DP/broker earns its own much larger DP charge (₹13–30 per debit at many brokers vs CDSL's ₹3.50 [V-snip, Federal Bank schedule ₹30]) — **most of the end-investor's "DP charge" is the broker's, not the depository's.**
2. **MF investor's SIP path (RTA):** investor → distributor/platform (or direct) → order via MFU/BSE StAR/NSE NMF/ RTA's own portal → **RTA** validates, applies cut-off NAV, allots units, updates the register, reconciles bank receipt (NACH/UPI via CAMSPay or banks), computes distributor brokerage, sends statements → AMC (fund manager) never touches the investor record → custodian (Citi, HDFC Bank, etc.) holds the underlying securities.
   - **Value capture:** the AMC charges investors a TER (~0.1%–2% of AUM) and pays the RTA **~2–3.5 bps** of that from its own management fee. So the RTA captures roughly **3–4% of the AMC fee pool** [E: ~₹2,160 Cr RTA MF revenue FY26 ÷ an industry management-fee pool of the order of ₹55–65k Cr — K/E].
3. **KYC path (KRA):** investor's first KYC at any intermediary is uploaded to one KRA (creation fee) → every other intermediary "fetches" it (fetch fee) → modifications (modify fee); SEBI's 2026 reset: creation ₹20 → ₹5, fetch ₹35 → ₹28, plus a new ₹0.25 "Search API" charge [V CDSL transcript]. CAMS calls the cut "a market-wide recommended rate revision of ~29%" [V-deck].
4. **Issuer path (registrar):** company → appoints RTA (KFin, MUFG Intime, Bigshare, CVL...) → RTA maintains the member register reconciled with both depositories' beneficiary positions → runs dividends, AGMs/e-voting, IPO allotment (KFin handled **79.2% of main-board IPO issue size in Q1 FY27** [V-deck]).

### 1.3 Where value is captured

- **At the registry layer, not the distribution layer.** Brokers and platforms own the customer and fight on price (zero brokerage); depositories and RTAs sit behind them, unseen, with mandated or near-mandated roles. Margins: CDSL ~51% OP, CAMS ~45%, KFin ~41% vs listed brokers' far more volatile margins [V screener; K].
- **Value accrues to whoever owns the "golden record"**: the depository for demat securities, the RTA for MF folios (MF units held in SOA form never touch a depository), the KRA for KYC. Each is a database with regulatory standing — replicating it requires SEBI registration plus every counterparty's integration.
- **But pricing power is capped by regulators and counterparties:** SEBI supervises MII tariffs (depositories are MIIs — "public utility"-like); AMCs are concentrated (top-10 AMCs hold most AUM) and negotiate RTA contracts; SEBI sets KRA fees. This is why these "toll-booths" grow revenue slower than volume.

---

## 2. Size and growth

### 2.1 The fee pools (FY26, ₹ Cr) [E unless tagged]

| Pool | FY26 size | Basis |
|---|---|---|
| Depository revenue (CDSL + NSDL depository business) | **~₹1,800–1,900 Cr** | CDSL consolidated operating revenue ₹1,145 Cr [V]; NSDL standalone depository revenue ~₹690 Cr (Q1 FY27 ₹182 Cr × ~4, FY26 slightly lower) [E from V-deck]. NSDL's consolidated ₹1,530 Cr includes NSDL Payments Bank [V screener] |
| MF RTA revenue (CAMS MF + KFin domestic MF) | **~₹2,160 Cr** | CAMS MF ~86% of ₹1,516 Cr ≈ ₹1,304 Cr [V screener key points; E]; KFin domestic MF ₹852.8 Cr [V-deck] |
| KRA (five KRAs) | **~₹400–450 Cr** | CVL ~₹197 Cr "online data charges" FY26 (mostly KYC) [V-deck, layout-read]; CAMS KRA ~2.1–2.6% of CAMS revenue ≈ ₹35–40 Cr; others smaller [E] |
| Issuer registry (all RTAs) | **~₹500–600 Cr** | KFin ₹154 Cr [V-deck]; MUFG Intime, Bigshare, CVL, others unlisted [E] |
| Alternatives/PMS servicing | ~₹200 Cr (listed two) | KFin ₹73.6 Cr; CAMS AIF ~3.1% ≈ ₹45 Cr [V-deck; E] |
| International FA (KFin only) | ₹159 Cr FY26 (part-year Ascent); run-rate ~₹290 Cr | KFin "International Investor Solutions" ₹158.7 Cr FY26; ₹73.0 Cr in Q1 FY27 [V-deck] |
- **Sub-sector (3 members) revenue FY22 → FY26: ₹2,101 → ₹2,247 → ₹2,787 → ₹3,595 → ₹3,962 Cr** (CDSL 551/555/812/1,082/1,145; CAMS 910/972/1,137/1,422/1,516; KFin 640/720/838/1,091/1,301) [V screener]. **4-yr CAGR 17.2%** [E]; PAT ₹748 → ₹757 → ₹1,017 → ₹1,324 → ₹1,271 Cr (CAGR 14.2%) [V screener; E].
- **In USD:** the three members' FY26 revenue ≈ **US$418 mn**; m-cap ≈ **US$6.0 bn** [E at ₹94.9/$]. Broadridge alone has revenue of ~US$6.5–7 bn [K] — India's market plumbing is tiny in dollar terms but serves the world's largest investor *count* after China/US.

### 2.2 Volume drivers (the units)

| Driver | FY22 | FY23 | FY24 | FY25 | FY26 | Latest | Source |
|---|---|---|---|---|---|---|---|
| Demat accounts, total (mn, Mar) | ~90 | 114 | 151 | 192 | 225 | 232 (Jun-26) | [V KFin deck citing SEBI; FY22 K] |
| CDSL BO accounts (lakh, Mar) | ~630 | ~830 | ~1,130 | 1,529 | 1,801 | 1,859 (Jun-26) | [V-deck FY25–Jun-26; earlier primer/K] |
| NSDL BO accounts (mn) | ~27 | ~31 | ~37 | ~38.5 | ~44.4 | 45.6 (Jun-26) | [V-deck Jun-26; FY26 = Jun minus Q1 net adds 1.24 mn, E; earlier K/E] |
| MF industry closing AUM (₹ lakh Cr, Mar) | 37.57 | 39.42 | 53.40 | 65.74 | 73.73 | 82.64 (Sep-26) | [V AMFI Mar-26 note for FY23, FY25, FY26; FY22/FY24 K; Sep-26 V-snip] |
| MF industry QAAUM (₹ Tn, Q4) | — | 40.5 | 54.1 | 67.4 | 81.6 | 83.2 (Q1 FY27) | [V KFin deck] |
| Monthly SIP (₹ Cr, March) | 12,328 | 14,276 | 19,271 | 25,926 | 32,087 | 32,490 (Sep-26) | [V AMFI Mar-26; Sep-26 V-snip; earlier K] |
| Annual SIP inflows (₹ lakh Cr) | 1.24 | 1.56 | 1.99 | 2.89 | ~3.5 | — | [K FY22–25; FY26 E: sum of monthly prints ~₹3.50 lakh Cr] |
| SIP AUM (₹ lakh Cr) | — | — | — | 13.35 | 15.11 | 17.86 (Sep-26) | [V AMFI Mar-26; Sep-26 V-snip; FY25 K] |
| Contributing SIP accounts (crore) | — | — | — | ~8.1 | 9.72 | 10.06 (Sep-26) | [V AMFI Mar-26; V-snip Sep-26; FY25 K] |
| MF folios (crore) | 12.95 | 14.57 | 17.78 | 23.45 | 27.39 | 28.62 (Sep-26) | [V AMFI Mar-26; Sep-26 V-snip; earlier K] |
| Unique MF investors (crore) | ~3.3 | ~3.8 | ~4.5 | ~5.4 | ~5.9 | ~6.0+ | [K/E — AMFI publishes PAN-based counts irregularly; CAMS alone services 4.85 Cr (Jun-26) V-deck] |
| Unique retail F&O traders (lakh) | — | — | — | 98.1 | 78.6 | — | [V-snip SEBI study] |

- **Demat accounts grew ~2.5× in four years (FY22 → FY26 ~25% CAGR), MF AUM ~2× (~18% CAGR), SIP flows ~2.6× (~27% CAGR)** [E].
- **Growth is decelerating in accounts:** CDSL net adds per quarter 64 lakh (Q4 FY25) → 57 → 65 → 76 → 74 → **58 lakh (Q1 FY27)** [V-deck]; total demat accounts +3.1% QoQ in Q1 FY27 vs +22.5% YoY [V KFin deck]. KFin's CEO: "deceleration of the net new folios into the industry despite IPOs" [V transcript].
- **MF assets slowed sharply after the 2025–26 correction:** closing AUM rose only 12.2% in FY26 (vs 24% in FY25 and 35% in FY24) [V AMFI; E]; QAAUM still grew 21% Q4-on-Q4 (₹67.4 → ₹81.6 Tn) because the market fell late in the year [V KFin deck]. **From Q4 FY26 to Q1 FY27, industry QAAUM grew only ~2%** [V-deck].

### 2.3 Forecasts (none sourced from a rating agency this session)
- CAMS management FY27 guidance: **revenue ~13%, EBITDA ~16%, MF revenue ≥12%, non-MF ~20% (22–23% "if lucky")** [V CAMS transcript Aug-2026].
- KFin management: **revenue 18–20% CAGR (medium term), EBITDA margin 40–45%, ≥40% incl. Ascent by end-FY27** [V KFin transcript].
- CDSL: gives no guidance ("we don't give forward-looking statements") [V transcript].
- A neutral base case for industry MF AUM is ~13–16% CAGR to FY30 (SIP flows of ~₹3.9–4.0 lakh Cr/yr on current run-rate plus 8–10% MTM) [E]; demat accounts ~12–15% CAGR (net adds ~2.5–3 crore/yr on a growing base) [E]. **Flag: no CRISIL/ICRA forecast fetched.**

---

## 3. Demand drivers and end-markets

1. **Financialisation of household savings.** Households' financial-asset flows are shifting from deposits/gold/property toward equities and MFs; MF AUM is ~₹82 lakh Cr (Sep-26) vs bank deposits of ~₹230+ lakh Cr [V-snip AMFI; K RBI]. Every rupee that moves into MFs adds RTA fees; every new equity investor adds a demat account (and usually a KYC fetch).
2. **The SIP habit (the most important single number).** SIP contributions hit **₹32,490 Cr in Sep-2026 (record) with 10.06 crore contributing SIP accounts and ~63 lakh new registrations** [V-snip AMFI via Angel One/Uni India]; SIP AUM **₹17.86 lakh Cr** [V-snip]. SIPs held up through the Feb–Mar 2026 crash: ₹29,845 Cr in Feb-26 → ₹32,087 Cr in Mar-26 [V AMFI]. CAMS: SIP collections **₹59,681 Cr in Q1 FY27 (+20.7% YoY vs industry +16.5%)**, live SIP accounts **6.72 Cr (63.9% share)** [V-deck]. KFin: **36.2% of monthly SIP inflows (Jun-26)** [V-deck]. Note CAMS 63.9% + KFin 36.2% ≈ 100%.
3. **Equity flows despite the market fall.** Equity MF net inflows: ₹40,450 Cr (Mar-26, 61st positive month), ₹38,307 Cr (Sep-26, 67th positive month) [V AMFI; V-snip]. Equity AUM is the RTAs' highest-yield asset.
4. **IPO/primary-market cycle** — feeds CDSL's IPO/CA fees, issuer additions (CDSL issuers 35,922 → 49,684 from Mar-25 to Jun-26 [V-deck]; partly unlisted-company dematerialisation) and KFin's issuer business (79.2% of main-board IPO issue size in Q1 FY27; mandates for **Jio Platforms, Razorpay, Garuda Aerospace** [V-deck]).
5. **Unlisted-company dematerialisation mandate.** MCA required private companies (other than small companies) to dematerialise securities (rule notified Oct-2023, compliance from ~Sep-2024/2025) [K]. NSDL's unlisted-equity market share is ~72–73% [V-deck NSDL]; its deck notes the **definition of "small company" was amended from 1-Dec-2025**, reducing the pool of companies that must dematerialise [V-deck] — a headwind to issuer-fee growth.
6. **Derivatives and trading activity** — affects CDSL's transaction charges only indirectly (charges apply to *delivery* debits, not F&O). The SEBI F&O curbs hit broker revenues and new-account enthusiasm more than CDSL's per-debit income: CDSL transaction charges were flat at ₹59–66 Cr a quarter through FY26–Q1 FY27 [V-deck].
7. **Regulatory "digitisation" mandates** create new fee pools: KYC (KRA, CKYC), e-voting, e-CAS, insurance repositories (IRDAI push for e-insurance accounts; Bima Central), NPS, account aggregators, DPDP-Act consent management (CAMS's ConsenPro) [V-deck].
8. **New MF entrants and products** — each new AMC chooses an RTA. KFin services **32 of India's 52 AMCs** (6 of its 32 not yet operational) and has **won 24 of the last 42 new AMC launches** [V-deck "At a Glance"; the PDF text reads "322 out of 622" / "Won 244 out of 425" — footnote superscripts fused to the numbers; my reading, flag]. CAMS: AlphaGrep MF live (Jul-2026), ASK, Carnelian, Oaklane and Neo going live → **31 AMC clients**; services "9 of the 15 largest" MFs [V-deck]. **SIFs** (specialised investment funds, first launch Oct-2025): CAMS has 11 SIFs live, >₹10,000 Cr AUM [V-deck]. **GIFT City retail funds** (CAMS: 10,000 investors, ₹750 Cr AUM) [V-deck]. A SEBI circular in Jul-2026 on **"MF-only PMS"** is flagged by KFin as the next new asset class [V transcript].

---

## 4. Supply side and cost structure

### 4.1 Key inputs
- **People** (the largest cost): CAMS consolidated employee cost **₹497 Cr = 32.8% of FY26 revenue** [V-deck P&L]; KFin **₹525 Cr = 40.3%** incl. Ascent (₹456 Cr = 37.9% excl. Ascent) [V-deck]; CDSL employee cost ~₹35–48 Cr a quarter (~15% of income) [V-deck, layout-read]; NSDL standalone ₹34.7 Cr in Q1 FY27 (19% of revenue) [V-deck].
- **Technology** (the fastest-rising cost): CDSL quarterly IT cost rose from ~₹13 Cr to ₹15–16 Cr+, and capex (data centres, new platforms) lifted depreciation from ₹27 Cr (FY24) to ₹66 Cr (FY26) [V screener; V-deck layout-read]. NSDL technology expense +53.8% YoY to ₹27.6 Cr (Q1 FY27) [V-deck]. CAMS depreciation ₹70 Cr (FY24) → ₹99 Cr (FY26) as its new MF platform ("Fundsnet", go-live planned Sep-2026) is capitalised [V screener; V-deck]. KFin D&A ₹53 → ₹86 Cr (FY24 → FY26) incl. Ascent amortisation [V screener].
- **Regulatory levies:** depositories contribute to the **Investor Protection Fund (IPF)** and pay SEBI fees (CDSL "SEBI/IPF" line ~₹12–16 Cr/qtr; NSDL IPF ₹3.9 Cr in Q1 FY27) [V-deck]. SEBI's MII framework requires a share of profits to IPF [K].
- **Outsourced operations / "operating expenses"**: CAMS operating expenses (printing, courier, call-centre, bank charges, payments costs) ₹210 Cr consolidated FY26 [V-deck]; CAMSPay's growth carries "high bank charges" — CEO: margins "will remain limited" in that business [V transcript].
- **Cyber security & resilience:** SEBI's Cyber Security and Cyber Resilience Framework (CSCRF, Aug-2024) applies to MIIs and RTAs (qualified RTAs) [K]; KFin appointed a group CISO on 16-Oct-2026 [V screener]; KFin cites a BitSight security score of 810 [V-deck].

### 4.2 "Where ₹100 of revenue goes" [E composites from FY26 screener/deck data]

| Line (₹ per ₹100 revenue) | Depository (CDSL, consolidated) | RTA — CAMS | RTA — KFin (incl. Ascent) |
|---|---|---|---|
| Employee | ~15 | ~33 | ~40 |
| Technology / IT | ~6 | inside other exp. (~8–10) | inside other exp. (~8–10) |
| Operating / outsourced (print, courier, bank, call-centre) | ~4 | ~14 | ~9 |
| SEBI / IPF levies | ~5 | — | — |
| Other admin | ~19 (incl. marketing, investor education, CSR) | ~8 | ~10 |
| **OP (EBITDA ex OI)** | **~51** | **~45** | **~41** |
| Depreciation & amortisation | ~6 | ~6.5 | ~6.6 |
| Other income (+) | +8 (treasury) | +3.4 | +2.3 |
| Tax (~25%) | ~13 | ~10.4 | ~9.5 |
| **PAT** | **~40** | **~31** | **~26** |
- Sources: screener FY26 P&L (OP, D&A, OI, tax, PAT) [V]; CAMS consolidated P&L split [V-deck]; KFin deck P&L [V-deck]; CDSL expense split from deck bars (layout-read) [V-deck/E].
- **The depository runs ~10 points higher margin than the RTAs** because its "service" is a ledger entry with no investor-servicing labour (no call centres, branches, physical forms). The RTAs are part software, part BPO.

### 4.3 Capacity and utilisation
- Capacity is technology, not plant. Relevant "capacity" numbers: CAMS processed **292.3 mn transactions** in Q1 FY27 (+19.7%), 240.3 mn systematic transactions, 116.2 mn live folios [V-deck]; KFin **159.1 mn transactions** (+17.9%), 2.7 mm average daily transactions, ~1,300 IT engineers [V-deck]; CDSL settles all retail debits on T+1 and since 2025 does **direct pay-out of securities to clients' demat accounts** (no broker pool) [V-deck].
- **Productivity is now an explicit lever:** CAMS has moved ~10% of physical-transaction acceptance to AI "at the maker layer" (4 of 8 transaction types live; all by Nov-2026), targets a **4–5% fall in average headcount in FY27** (already −2–3%), net headcount −200 QoQ in Q1 FY27 [V transcript].

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)

| Market | Players | Shares (basis) |
|---|---|---|
| Depositories | CDSL, NSDL (only two licensed) | Accounts: **CDSL ~80.3% / NSDL ~19.7%** (Jun-26: 185.9 mn vs 45.6 mn) [V-deck; E]. Net adds Q1 FY27: CDSL 58 lakh vs NSDL 12.4 lakh → **CDSL ~82%** [E]; analyst on CDSL call: CDSL incremental share **81.4% in Jun-26, down ~420 bps since March** [V transcript, analyst's figure]; NSDL's own estimate of its gross incremental share **~18.7% (Q1 FY27) vs ~17.5% (Q1 FY26)** [V-deck]. Custody value: **NSDL 85.8%** [V-deck]. Total income: **NSDL 43.2%** [V-deck]. |
| MF RTA | CAMS, KFin | QAAUM: **CAMS 67.2% / KFin 32.8%** (Q1 FY27) [V-deck]. Equity AAUM: KFin 32.4% → CAMS ~67.6% [V-deck; E]. Live SIPs: CAMS 63.9%; SIP inflows: KFin 36.2% [V-deck]. Number of AMCs: KFin is #1 ("largest... based on number of AMCs serviced") [V-deck]. Transactions: CAMS ~66–68% share (Q1 FY27 chart) [V-deck, layout-read]. |
| KRA | CVL (CDSL), CAMS KRA, NDML (NSDL), KFin KRA, DotEx (NSE) | CVL **10.62 Cr records**, "first and the largest" [V-deck CDSL]; CAMS KRA "2nd largest, 2 Cr+ records, 20% market share" [V-deck CAMS] (CAMS's share basis is probably new-KYC flow, not stock — flag). |
| Issuer registry (RTA) | KFin, MUFG Intime (ex-Link Intime, unlisted, Japanese-owned), Bigshare, CVL, Purva, Skyline, others | KFin: **50.0% of NSE-500 by m-cap; 37.7% by number of NSE-500 clients; 42.1% by folios** [V-deck]. MUFG Intime is the other large player [K]. |
| AIF servicing | KFin, CAMS, Deutsche/HSBC/Kotak fund services, Indus, others | KFin 37.3% of SEBI-registered AIFs (731 funds) [V-deck]; CAMS 550+ funds across 260+ fund houses, ₹3.2 Tn [V-deck] — counts overlap on different bases |
| NPS CRA | Protean (ex-NSDL e-Gov), KFin, CAMS | KFin **12.2%** of subscriber base, **22%** of new subscriber additions [V-deck]; Protean the largest [K] |
| Insurance repository | CAMSRep, CDSL's CIRL, NSDL NDML, Karvy legacy (now KFin?) | CAMSRep 10.7 mn e-IAs [V-deck]; CIRL 24.42 lakh e-IAs [V-deck]; shares not published [gap] |
| Account aggregators | ~15+ licensed (OneMoney, Finvu, CAMSfinserv, Anumati, NADL (NSDL), etc.) | CAMSfinserv ~9% [V-deck] |

### 5.2 Ownership and the MII rules
- **CDSL (MII):** BSE Ltd **15.00%** (the cap for a stock exchange/approved institution in a depository under SEBI D&P Regulations 2018; others capped at 5%) [V screener; K for the rule]. LIC 4.40%, Nippon India Small Cap 1.35%, Parag Parikh Flexi Cap 1.13%, New India Assurance 0.88% (Jun-26) [V-deck]. **Retail 61.57% of shares** (Jun-26) [V-deck] — unusually retail-heavy for a ₹25k Cr company; ~14.7 lakh shareholders [V screener].
- **NSDL (MII):** no promoter; DIIs 38.2%, FIIs 8.2%, public 53.6% (Sep-26) [V screener]. IDBI Bank, NSE, SBI, Union Bank, etc. sold in the 2025 OFS [K]; NSE must cut to ≤15% (and to 0 under one reading of the MII cross-holding rules) [K, flag].
- **CAMS:** **no promoter**; FIIs 45.58%, DIIs 21.79%, public 32.64% (Sep-26) [V screener]. NSE exited completely in 2023–24; Great Terrain (Warburg Pincus) exited by 2023 [K]. JPMorgan 7.06% (Sep-26) [V].
- **KFin:** promoter **General Atlantic 14.06% (Sep-26)** after three block sales; DIIs **37.54%** (up from 27.31% in Jun-26 as Indian MFs/insurers bought the block), FIIs 20.07% [V screener]. **Kotak Mahindra Bank** is a strategic holder with a board nominee (Devang Gheewalla) [V-deck board page; stake K ~9.9% acquired 2022].
- **Note the conflict-of-interest geometry:** BSE owns 15% of CDSL; NSE owned NSDL and CAMS historically; Indian MFs (the RTAs' customers) now own large stakes in both RTAs (KFin DII 37.5%) — the customers own the toll-booth [E].

### 5.3 Unlisted/global players
- **MUFG Intime India** (ex-Link Intime; MUFG acquired Link Group in 2024) — the main issuer-RTA competitor [K].
- **Protean eGov** (listed, ex-NSDL e-Gov) — NPS CRA leader and a KYC/PAN infrastructure player [K]; not a member here.
- **Global fund administrators** competing with KFin abroad: Apex Group, Citco, SS&C GlobeOp, Northern Trust, State Street, BNY [K].
- **No foreign RTA has entered Indian MF transfer agency** — the market is too low-priced (2–3 bps) and too customised for global TA platforms (DST/SS&C) [E].

---

## 6. Business-model archetypes and their economics

| Archetype | Member(s) | Revenue driver | Pricing | Cyclicality | OP margin | Capital intensity | Key risk |
|---|---|---|---|---|---|---|---|
| **A. Retail-heavy depository** | CDSL | Accounts × activity (debits, IPOs) + issuer folios | SEBI-supervised tariff; flat ₹3.50/debit; issuer formula | **High** (IPO/CA, debits, treasury MTM) | ~50–60% | Very low; capex for DR/DC, platforms | Tariff cuts; incremental share loss to NSDL; KYC price cuts |
| **B. Institutional/custody depository** | NSDL (peer) | Custody value (annual custody fee) + settlement/pledge | SEBI-supervised; value-linked | Medium | ~44% standalone operating; consolidated diluted by payments bank | Low; bank needs capital | Payments-bank drag; account-share loss |
| **C. MF RTA — scale leader** | CAMS | MF QAAUM × yield (asset-based ~74%) + per-transaction/NFO (~11%) + non-MF (~15%) | Bilateral, telescopic, renegotiated | **Low–medium** (AUM-linked, not activity-linked) | ~45–47% | Low (platform rebuild ~₹100+ Cr) | Yield resets at renewals; AMC concentration; platform migration |
| **D. MF RTA + diversified platform** | KFin | Domestic MF (60%), international FA (20%), issuer (9%), alternatives/wealth (6%) | Mix of bps, per-folio, per-fund fees | Low–medium; issuer seasonal | ~41% (39% ex-Ascent in Q1 FY27; Ascent ~8%) | Moderate (acquisitions) | Ascent integration; GA overhang; lower-margin international |
| **E. Data/KYC registries (embedded)** | CVL (CDSL), CAMS KRA, NDML | Records × fetch/creation volumes | **SEBI-set** (cut in 2026) | Follows new-account cycle | ~30–35% (CVL Q1 FY27 PBT ₹16 Cr on ₹50 Cr income) [V transcript] | Low | Regulatory price cuts; CKYC unification |
- **Economics differ mainly in what drives the meter:** A is activity-geared (CDSL FY26 PAT −13.5% while accounts +18%); C/D are stock-geared (CAMS PAT +1.5%, KFin +3.3% despite a falling market, because QAAUM still rose ~20%).
- **Archetype A has the highest margin and the most volatile PAT; C has the most predictable revenue but a structurally falling price; D buys growth with margin dilution.**

---

## 7. Regulation and policy

### 7.1 Regulators and rulebooks
- **SEBI** regulates depositories (SEBI (Depositories and Participants) Regulations, 2018), RTAs (SEBI (Registrars to an Issue and Share Transfer Agents) Regulations, 1993 — under revision), KRAs (SEBI KRA Regulations, 2011), MFs (**SEBI (Mutual Funds) Regulations, 2026**, replacing the 1996 regulations) [K; V-snip for the 2026 MF regulations].
- **Depositories are Market Infrastructure Institutions (MIIs)** alongside exchanges and clearing corporations: ownership caps (exchange/approved institution ≤15%, others ≤5%), public-interest directors, SEBI approval for KMP/MD appointments (CDSL's two new Executive Directors were approved by SEBI before shareholders [V transcript]), profit transfers to IPF, and SEBI's power over charges [K].
- **IRDAI** (insurance repositories), **PFRDA** (NPS CRA), **RBI** (account aggregators as NBFC-AA; NSDL Payments Bank), **WDRA** (commodity repository CCRL), **IFSCA** (GIFT City — CAMS KRA in-principle approval 1-Jul-2026 [V-deck]), and **MCA** (unlisted-company demat rule) [V-deck; K].

### 7.2 Recent and pending changes that move the P&L (2024–26)

| Date | Change | Who it hits | Effect | Tag |
|---|---|---|---|---|
| Jul-2024 | SEBI **"True-to-label" circular**: MIIs must charge uniform, published fees (no volume-slab rebates passed opaquely to brokers) | Depositories, exchanges | CDSL moved to a **flat ₹3.50/debit from 1-Oct-2024** (after a 50-paise slab cut on 1-Jun-2024) | [V-snip] |
| 1-Oct-2024 / 20-Nov-2024 → Apr-2025 | **SEBI F&O measures**: index contract size ↑ (₹15 lakh), one weekly expiry per exchange, upfront option premium, removal of calendar-spread benefit on expiry day, intraday position monitoring | Brokers, exchanges; indirectly depositories (new-account enthusiasm, pledge/margin activity) | Unique retail F&O traders **98.1 → 78.6 lakh** (FY25 → FY26); options contracts **−51.5%**; equity-derivatives turnover ₹213 → ₹202 lakh Cr; retail F&O losses ₹91,685 Cr (−18%) | [V-snip SEBI study via press; K for measure list] |
| Oct-2024 | SEBI framework for MIIs' monitoring / "Vertical" structure (critical operations, regulatory compliance, other) | CDSL, NSDL | New ED posts (CDSL's "Vertical 1/Vertical 2" EDs approved 2026) | [V transcript; K] |
| Aug-2024 | **CSCRF** (Cyber Security & Cyber Resilience Framework) for SEBI REs incl. MIIs, qualified RTAs, KRAs | All | Higher IT/security spend; CISO roles | [K] |
| 2025 | **Direct pay-out of securities** to investors' demat accounts (no broker pool account) | CDSL, NSDL, brokers | More debits/credits at depository; investor protection | [V-deck CDSL] |
| Oct-2025 | **SIFs** (specialised investment funds) go live | RTAs | New asset class (CAMS 11 SIFs, >₹10k Cr) | [V-deck] |
| 1-Dec-2025 | MCA amends **"small company"** definition | Unlisted-demat pipeline (NSDL ~72% share, CDSL) | Fewer private companies required to dematerialise | [V-deck NSDL] |
| Dec-2025 board → **notified 16-Jan-2026 → effective 1-Apr-2026** | **SEBI (Mutual Funds) Regulations, 2026**: TER split into a **Base Expense Ratio (BER = AMC fee)** + brokerage + statutory levies (STT, stamp duty, GST, exchange fees disclosed separately); **brokerage caps cut to 6 bps (cash, from ~8.59) and 2 bps (derivatives, from ~3.89)**; reported cuts in BER caps for index funds/ETFs (1.0% → 0.9%) and close-ended equity (1.25% → 1.0%); removal of the extra 5 bps for exit-load schemes; BER may be linked to performance | AMCs directly; **RTAs indirectly** (AMCs under margin pressure push harder at RTA renewals) | Expected equity-scheme TER cut of ~5–7 bps per commentary; RTA fee is paid out of the AMC's fee, so any squeeze on AMC revenue/AUM is a pricing headwind at renewal | [V-snip Angel One for dates & brokerage caps; BER caps V-snip Moneylife/VRO snippets; RTA pass-through = E] |
| Q1 FY27 (Apr–Jun 2026) | **SEBI KRA fee reset**: KYC creation **₹20 → ₹5 (−75%)**, fetch **₹35 → ₹28 (−20%)**, new **Search API ₹0.25** per search of a PAN not created/fetched/modified that month | CVL, CAMS KRA, NDML, KFin KRA, DotEx | CAMS: "market-wide recommended rate revision of ~29%"; CAMS KRA revenue −2.6% YoY in Q1 FY27; CVL revenue still **+22% (₹36 → ₹45 Cr)** on higher fetch volumes and Search-API income, but CVL PAT −5% | [V CDSL transcript; V CAMS deck] |
| Pending | **CKYC/unified KYC** integration of KRAs with CERSAI's CKYC | KRAs | Risk that KRA becomes a commodity layer; CVL "in the process of getting integrated with CKYC" | [V transcript] |
| Pending | **RTA regulations rewrite** (SEBI consultation on a new RTA framework, "qualified RTA" obligations, investor charter) | CAMS, KFin, issuer RTAs | Compliance cost; possible fee-disclosure rules | [K, flag — consultation not fetched] |
| Jul-2026 | SEBI circular enabling **MF-only PMS** (KFin's description) | RTAs, PMS | New servicing pool | [V KFin transcript] |
| 1-Apr-2026 | NSDL **"Women Demat Plan"** | NSDL | Women ~24% of NSDL's incremental demat additions in Q1 FY27 | [V-deck NSDL] |

### 7.3 How depository pricing is set (and why it rarely rises)
- Depository charges are filed with and overseen by SEBI; any increase invites regulatory and broker pushback, and the policy direction since 2020 has been **lower/flatter** charges (true-to-label, BSDA basic accounts with nil/low AMC for small holders, waiver of charges for small debit values) [K].
- Issuer charges are **formula-driven on folios** ("it is what it is") [V transcript]; CDSL issuer income grew **12.3% YoY** in Q1 FY27 to ₹128 Cr [V transcript/deck] on **38.73 crore folios** [V transcript].
- The only lever left is **volume and new services**; CDSL's FY26 shows the limits: revenue +5.8% with accounts +18% [V].

### 7.4 How RTA pricing is set
- Bilateral contracts with each AMC, typically multi-year, with **telescopic (slab-based) bps on AAUM by asset class** — the more an AMC's AUM grows, the lower its marginal rate [primer; V KFin CEO: yield is "a factor of three distinct factors... pricing... mix... which AMC growth... given the telescopic pricing"].
- Renewals reset prices: CAMS took a large "one-time pricing adjustment" in FY26 (margin dipped to ~42%) [V transcript]; KFin guides "around maybe 3-odd percent in a year" of yield decline [V transcript].
- **AMC concentration** gives the top AMCs bargaining power: SBI MF, ICICI Pru, HDFC, Nippon, Kotak, Aditya Birla etc. are CAMS/KFin clients worth hundreds of crores of fees each [K]. The AMC-by-AMC client map is not disclosed in either deck (CAMS: "9 of the 15 largest" MFs, 31 AMCs; KFin: 32 of 52 AMCs) — **do not name which large AMC sits with which RTA without checking the AMCs' scheme information documents** [flag].

---

## 8. History and cycles (narrative; full timeline in §G)

1. **Paper era to demat (1996–2000):** Depositories Act 1996; NSDL (1996, promoted by IDBI, UTI, NSE) and CDSL (Feb-1999, promoted by BSE with banks) [V-deck CDSL; K]. Karvy (registrar since 1985) and CAMS (1988) grow as MF/issuer registrars [K].
2. **The MF RTA duopoly forms (2000s):** CAMS becomes the largest MF RTA; Karvy Computershare (JV with Australia's Computershare) the second [K]. **CVL launches the KRA system with the MF industry in 2006** [V-deck].
3. **CDSL takes the retail lead (2019–22):** discount brokers (Zerodha, Upstox, Groww, Angel) onboard on CDSL; CDSL becomes the largest depository by accounts in **2019**, crosses 6 crore accounts in **Feb-2022** [V-deck; primer]; eDIS (2021), DDPI (2022), T+1 (2022–23) [V-deck].
4. **Karvy scandal and KFin's rebirth (2018–22):** General Atlantic buys Karvy's registry business (2018), renamed KFin Technologies; Karvy Stock Broking's 2019 client-securities misuse scandal leads SEBI to tighten pledge rules (margin-pledge system, 2020) [K]. KFin IPO **Dec-2022** (₹1,500 Cr OFS, ₹366/share) [K]. Kotak Mahindra Bank buys ~9.9% (2022) [V-deck timeline; K].
5. **Listing wave:** CDSL IPO **Jun-2017** (Asia-Pacific's first listed depository) [V-deck]; CAMS IPO **Oct-2020** (₹2,240 Cr OFS by NSE/Great Terrain) [K]; KFin **Dec-2022**; NSDL **Aug-2025** [V-deck].
6. **The boom (FY21–FY25):** demat accounts 4 crore → 19 crore; CDSL PAT ₹107 Cr (FY20) → ₹526 Cr (FY25) [V screener]; CAMS revenue ₹700 Cr → ₹1,422 Cr; KFin ₹450 Cr → ₹1,091 Cr [V screener].
7. **The squeeze (FY26):** F&O curbs (Nov-2024 →), the Sep-2024 market top, a choppy FY26 and the **Feb–Mar 2026 West-Asia crash (Nifty −11.3% in March alone)** [V AMFI]; CDSL PAT −13.5%; CAMS takes a pricing reset; KRA fees cut. Stocks de-rate: CDSL from 52-week high ₹1,674 to ₹1,225; KFin ₹1,217 → ₹847 [V screener].
8. **Diversification and productivity (FY26–27):** KFin buys 51% of Ascent (Oct-2025); CAMS builds payments/AIF/insurance/AA and an AI-led ops platform; CDSL invests in tech (D&A ₹27 → ₹66 Cr in two years) [V].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands

| KPI | Definition / computation | CDSL | CAMS | KFin | NSDL (peer) |
|---|---|---|---|---|---|
| Demat (BO) accounts | Accounts held at the depository (period-end) | **185.9 mn** (Jun-26); 180.1 mn (Mar-26); 152.9 mn (Mar-25) [V-deck] | — | — | **45.6 mn** (Jun-26) [V-deck] |
| Account market share | Own ÷ (CDSL+NSDL) | **~80.3%** (Jun-26) [E] | — | — | ~19.7% [E] |
| Net new accounts / quarter | Period-end difference | **58 lakh** (Q1 FY27); 272 lakh in FY26 [V-deck] | — | — | 12.4 lakh net (14.7 lakh gross) Q1 FY27 [V-deck] |
| Revenue per BO account (₹/yr) | Operating revenue ÷ average accounts | **~₹69** (FY26: ₹1,145 Cr ÷ 166.5 mn avg) [E] | — | — | ~₹155–160 (standalone depository revenue ~₹729 Cr annualised ÷ 45 mn) [E] |
| Transaction charge per debit | Tariff | **₹3.50** (₹3.25 women/MF-bond ISINs) [V-snip] | — | — | NSDL tariff (not fetched) |
| Implied debits | Transaction charges ÷ ₹3.50 | **~68 crore debits in FY26** (₹240 Cr ÷ ₹3.5) [E, ignores discounts] | — | — | — |
| Issuers / ISINs | Admitted issuers | **49,684 issuers; 1,33,364 ISINs** (Jun-26) [V-deck] | — | — | 1,15,107 issuers (69.9%); 2,53,903 active instruments (65.6%) [V-deck] |
| Custody value | Market value of demat holdings | ₹88 lakh Cr (Jun-26) [V-deck] | — | — | 85.8% share [V-deck] |
| KYC records | KRA stock | **CVL 10.62 Cr** [V-deck] | **2 Cr+** (~20%) [V-deck] | n/d | NDML n/d |
| MF QAAUM serviced | Quarterly average AUM of client AMCs | — | **₹55.9 Tn ex-FoF / ₹57.33 Tn incl.** (Q1 FY27, +14.8%) [V-deck] | **₹27.3 Tn** (+16.4%) [V-deck] | — |
| QAAUM market share | Own ÷ industry | — | **67.2%** | **32.8%** (31.5% FY23 → 32.8%) [V-deck] | — |
| Equity AAUM share | Equity-oriented | — | ~67.6% [E]; equity AAUM ₹31.4 Tn (+17.6%) [V-deck] | **32.4%** (+14.1% vs industry +16.3%) [V-deck] | — |
| MF yield (bps of AAUM) | MF revenue × 4 ÷ QAAUM | — | **Asset-based ~2.04 bps** (Q1 FY27) vs ~2.13 bps Q1 FY26 (−4%); all-MF ~2.35 bps [E from V-deck] | **~3.15 bps** domestic-MF revenue ÷ AAUM (Q1 FY27) vs ~3.43 bps Q1 FY26 (−8%) [E from V-deck] | — |
| Live SIPs / SIP share | Registered live SIP accounts | — | **6.72 Cr, 63.9%** [V-deck] | **36.2%** of SIP inflows [V-deck] | — |
| Folios / unique investors | Live folios; PAN-level investors | — | **116.2 mn folios; 48.5 mn unique investors** (+16.8%) [V-deck] | **37.9 mn live folios? (deck: "Live folios: 37.9 million", +7.3% vs industry 14.4%) — flag basis**; total folios 199 mn [V-deck] | — |
| Transactions processed | Quarterly | — | 292.3 mn (+19.7%) [V-deck] | 159.1 mn (+17.9%) [V-deck] | — |
| Non-MF revenue share | Non-MF ÷ total | — | **14.9%** Q1 FY27 (13.0% Q1 FY26); ~14% FY26 [V-deck; V screener] | **39.6%** "non-domestic MF" Q1 FY27; 34.5% FY26 [V-deck] | — |
| OP / EBITDA margin | Screener OP ÷ revenue | **50.8%** FY26; 47.1% Q1 FY27 [V] | **45.1%** FY26; **46.4%** Q1 FY27 (company) [V] | **40.7%** FY26; **34.2%** Q1 FY27 (39.4% ex-Ascent) [V] | 28% consolidated; 43.8% standalone operating (Q1 FY27) [V] |
| Cash & investments | Company basis | ~₹1.6–1.9k Cr [E]; screener investments ₹1,487 Cr | **₹971 Cr** (Jun-26) [V-deck] | **₹687 Cr** (Jun-26) [V-deck] | screener investments ₹2,559 Cr (incl. bank) [V] |
| Dividend payout | DPS ÷ EPS | **58%** FY26 (₹12.75/sh) [V screener; primer] | **65%** FY26 [V screener] (~₹12.5/sh post-split [E]); interim ₹2.50 in Q1 FY27 [V-deck] | **60%** FY26 (~₹12/sh) [V screener; primer] | 21% [V screener] |

### 9.2 The wedge: volume growth vs revenue growth (FY26)

| | Volume growth | Revenue growth | Wedge | Why |
|---|---|---|---|---|
| CDSL | Accounts +17.8% (1,529 → 1,801 lakh) | +5.8% | ~−12 pts | Accounts are a stock, revenue is mostly flow (debits, IPOs) + issuer folios; KYC price cut; treasury lower |
| CAMS | QAAUM +~15–20% (₹49.3 Tn Q1 FY26 → ₹56.6 Tn Q4 FY26 incl. FoF; Q4-on-Q4 not disclosed) | +6.6% | ~−9 to −13 pts | One-time pricing reset; telescopic slabs; equity share flat |
| KFin (domestic MF) | QAAUM **+19%** (₹21.2 Tn FY25 → ₹25.3 Tn FY26, last-quarter-average basis, deck chart layout-read) | Domestic MF revenue **~+10.5%** (FY26 ₹852.8 Cr) [primer growth; V-deck level] | ~−9 pts | Telescoping; renewals; mix to liquid |
| All-industry | Industry QAAUM +21% Q4-on-Q4 | — | — | — |
- **Rule of thumb [E]:** an RTA's MF revenue grows ≈ QAAUM growth − 3 to 5 pts in a normal year (yield erosion of 3–4%/yr plus mix), and ≈ QAAUM growth − 10 pts in a renewal-reset year (FY26). A depository's revenue grows ≈ issuer-folio growth + activity, *not* account growth.

### 9.3 Operating leverage
- **CAMS Q1 FY27:** revenue +11.5%, operating EBITDA **+18.3%**, PAT **+17.3%**; costs ex-D&A **<7%** YoY; headcount −85 YoY [V-deck; V transcript]. That is the RTA model working: margin +270 bps.
- **CDSL FY26:** revenue +5.8% but expenses +23% (₹457 → ₹563 Cr) as IT, employee and SEBI/IPF costs rose; OP −7%; PAT −13.5% [V screener]. **Negative operating leverage in a flat-activity year** — the depository is less "fixed-cost" than the narrative suggests because it is investing ahead.
- **KFin FY26:** revenue +19% (Ascent), EBITDA +10.6%, PAT +3.3% [V screener]: acquired revenue at ~8% margin dilutes.

---

## 10. Global lens

| Company | Country / role | Scale (approx.) | Margin | Valuation (approx.) | Relevance |
|---|---|---|---|---|---|
| **Broadridge (BR)** | US; proxy/investor communications, post-trade tech, wealth platforms | Revenue ~US$6.5–7 bn [K] | Adj. op. margin ~20% [K] | P/E ~15–23× (sources differ: LTM 15.4×, 2026E 22.6× per multiples.vc Jul-26; EV/EBITDA 11–16×) [V-snip] | Issuer/investor-communication analogue to KFin issuer solutions + CDSL e-voting/e-CAS |
| **SS&C Technologies (SSNC)** | US; fund administration, transfer agency (DST) | Revenue ~US$6 bn [K] | Adj. EBITDA ~38–40% [K] | P/E ~12–20×; EV/EBITDA ~10–11× [V-snip multiples.vc/OpenCapital] | **The global MF transfer agent (DST)** and fund admin — analogue to CAMS/KFin |
| **Computershare (CPU.AX)** | Australia; share registry, employee plans, (sold US mortgage services) | Revenue ~US$3 bn [K] | EBIT margin ~25–30% (incl. margin income on client balances) [K] | EV/EBITDA ~22× trailing (ValueInvesting.io May-26) [V-snip]; P/E ~20–25× [K] | **Former JV partner of Karvy**; issuer-registry analogue |
| **DTCC** (US), **Euroclear** (Belgium), **Clearstream** (Deutsche Börse) | Central securities depositories / ICSDs | Euroclear ~€2 bn+ revenue with large interest income [K] | High | DTCC is user-owned/at-cost; Euroclear unlisted (stakes trade privately) | **Depository analogues — and a warning: in most markets the CSD is a cost-plus utility, not a profit-maximising listed toll-booth** |
| **Apex Group, Citco** | Global fund administrators (private) | Large private | — | PE-owned | Competitors to KFin/Ascent abroad |
- **India vs world [E]:** Indian members earn **40–51% OP margins** vs ~20–40% globally, but on far smaller revenue (members combined ≈ US$418 mn). They trade at **34–54× P/E vs ~12–25× for global peers** — a 1.5–3× premium justified (if at all) by 15–20% unit growth vs low single digits abroad.
- **Fee levels:** India's MF RTA fee (~2–3.5 bps of AUM) is a fraction of US transfer-agency economics, which are priced per account (US$10–20+ per account per year historically [K]) — India's per-folio economics are ~₹100–120 per folio per year [E: CAMS MF revenue ~₹1,300 Cr ÷ ~110 mn folios]. Per-account pricing in India would be politically and commercially impossible; bps pricing is why AUM matters more than folio count.
- **Depository business model contrast:** DTCC rebates surplus to users; India's depositories are listed, for-profit MIIs whose surpluses partly go to IPF — a political-economy risk if SEBI decides CDSL's 50% margins are too high for a utility [E].

---

## 11. Technology and disruption risks

1. **AI/automation (a cost tailwind more than a threat):** CAMS's AI at the "maker layer" (10% of physical transactions → 100% in 12 months), headcount −4–5% in FY27 [V transcript]; KFin's Aegix (AI-native IR platform), Finex SIP automation, SupremaPlus (cloud pension admin) [V-deck]; CAMS's RAIDAR expanded to AMFI [V-deck]. **Risk:** AMCs may demand AI savings be passed through in renewals [E].
2. **Platform migrations (execution risk):** CAMS is moving to **Fundsnet** (go-live planned Sep-2026; old platform deprecated by Q4) [V-deck]; a failed migration in a business where "a mistake isn't a bad quarter, it's a compliance failure" [primer] is the biggest operational risk [E].
3. **Cyber risk:** all three hold sensitive PII for 15–25 crore people; CSCRF compliance; KFin's group CISO appointed Oct-2026 [V screener]. A breach at an MII is a regulatory event [E].
4. **Disintermediation by exchanges/platforms:** MF Central (CAMS–KFin 50:50 JV for investor services, CAMS share of loss ₹0.76 Cr FY26 [V-deck]) and exchange MF platforms already sit in the order path; the RTA's register remains the golden copy. A move to **hold all MF units only in demat** would shift value from RTAs to depositories — a long-standing debate [K; E].
5. **KYC unification (CKYC):** if SEBI makes CKYC the single source, KRAs' fetch revenue could compress further [V transcript; E].
6. **Blockchain/DLT:** CDSL already uses DLT to record secured-bond covenants [V-deck]; tokenised securities could in theory bypass CSDs, but Indian law requires a depository [K].
7. **Fintech onboarding friction:** an analyst on CDSL's call noted rivals' tech changes "reduced onboarding friction" for fintech brokers and CDSL lost ~420 bps of incremental share since March [V transcript]. **Depository choice is made by brokers**, so API quality and DP economics matter.

---

## 12. What to watch

| Indicator | Where / frequency | Latest | What it tells you |
|---|---|---|---|
| CDSL/NSDL BO accounts & net adds | Depository websites, monthly; company decks | CDSL 185.9 mn; +58 lakh Q1 FY27 | Retail participation; CDSL incremental share (81–82%) |
| AMFI monthly: AUM, SIP flows, SIP accounts, folios | AMFI ~10th of month | Sep-26: AUM ₹82.64 lakh Cr; SIP ₹32,490 Cr; 10.06 Cr SIP accounts | RTA volume driver |
| Industry QAAUM & RTA shares | AMFI quarterly; CAMS/KFin decks | Q1 FY27 ₹83.1–83.2 Tn; CAMS 67.2% / KFin 32.8% | Share shifts (KFin gaining ~0.3–1 pt/yr) |
| RTA yields | Derived from decks | CAMS asset-based ~2.0 bps (flat QoQ); KFin ~3.15 bps (−2% QoQ) | Pricing resets |
| Equity share of AUM | AMFI | CAMS 54.3% of its AAUM | Yield mix |
| IPO pipeline (Jio Platforms etc.) | SEBI DRHP/RHP filings | KFin has Jio Platforms, Razorpay mandates | CDSL IPO/CA fees; KFin issuer |
| SEBI circulars on MII charges, KRA fees, RTA regulation, MF BER implementation | SEBI weekly | KRA reset Q1 FY27; MF Regs 2026 effective 1-Apr-26 | Price risk |
| CVL quarterly revenue | CDSL calls | ₹45 Cr Q1 FY27 (+22%) | Whether Search API offsets the KRA cut |
| Ascent EBITDA margin | KFin calls | ~8.4%; target double digits by FY27-end | KFin margin path to 40% |
| GA residual stake | Shareholding, block deals | ~13–14% | Overhang |
| Q2 FY27 results | KFin 26-Oct; CAMS 29-Oct; CDSL & NSDL 31-Oct | — | First quarter after the Q1 market recovery; RBI hike (7-Oct) affects treasury MTM next quarter |
| Treasury MTM | CDSL other income | ₹43.8 Cr in Q1 FY27 | Rate hike (repo 5.50%) = MTM losses on debt MFs in Q3 [E] |

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **Volume compounding is structural; price is the battleground.** Accounts (+~25% CAGR FY22–26), SIP flows (+~27%) and MF AUM (+~18%) compound, but each toll-booth surrenders price: SEBI flattens depository tariffs and cuts KRA fees; AMCs telescope and renegotiate RTA fees. The investment case is the size of the wedge — FY26 showed it can be 10–12 points in a reset year [V; E].
2. **Duopolies with switching costs, but a regulator who treats them as utilities.** CDSL/NSDL (by licence) and CAMS/KFin (by history) face no third entrant; migrating an AMC's register or a broker's DP is a multi-year, high-risk project. The ceiling on returns is SEBI, not competition [E].
3. **Activity vs stock exposure separates the depository from the RTAs.** CDSL's PAT moves with IPOs, debits, KYC creation and treasury MTM (FY26 −13.5%); the RTAs' PAT moves with average AUM (FY26 +1.5% / +3.3% despite the crash). In a falling-but-not-collapsing market, RTAs are the safer earners [V].
4. **Diversification is the RTAs' answer to yield erosion — at a margin cost.** CAMS non-MF 14.9% (target 16% by FY27-end; growth 20%+); KFin non-domestic-MF 39.6% (Ascent-led; margin 34% vs 39% ex-Ascent). The market is rewarding CAMS's margin-accretive path (stock flat-to-down less) more than KFin's acquisitive one [V; E].
5. **Valuation is the swing factor.** At 34–54× earnings with 0–17% EPS growth recently, these stocks need volume re-acceleration (market recovery) and price stability; the group has de-rated ~10% in three months and 20–40% from 52-week highs [V screener].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The paise economy": how a ₹3.50 debit and 2 basis points become a ₹57,000 Cr market cap
- Show the meters: CDSL ₹3.50 × ~68 crore debits = ₹240 Cr; issuer charges on 38.7 crore folios = ₹456 Cr (~₹12/folio/yr) [E from V]; CAMS ~2.0 bps × ₹57 Tn = ~₹1,170 Cr asset-based; KFin ~3.15 bps × ₹27 Tn = ~₹860 Cr [E].
- Contrast with the investor's actual "DP charge" (₹13–30 + GST per sell day, mostly broker's) and the AMC's TER (0.1–2%).

### B2. "Accounts are not revenue": CDSL's FY26 paradox
- Accounts +18%, revenue +6%, PAT −13.5%. Decompose: issuer +x, transactions flat, IPO/CA collapse in Q4 (₹17 Cr), CVL price cut, treasury, cost growth (IT, people, SEBI/IPF). Q1 FY27 recovery (PAT +16%) with treasury MTM ₹43.8 Cr flattering [V].
- NSDL comparison: fewer accounts, ~2.3× revenue per account; institutional custody fees are value-linked and steadier.

### B3. "The telescoping fee": why CAMS and KFin earn less per rupee every year — and how they fight back
- Telescopic slabs, renewal resets (CAMS FY26 one-off), mix (equity vs liquid; KFin's 30%-of-2% example), AMC-specific growth.
- Fight-back: non-MF (CAMSPay +69%, Alternatives +25.6%, KFin international +32% organic), AI productivity (CAMS headcount −4–5%), new asset classes (SIF, GIFT, MF-only PMS) [V].
- The SEBI MF Regulations 2026 (BER) as a second-order squeeze on AMCs → RTAs at renewal [E].

### B4. "Two ways to diversify": CAMS (build, margin-accretive) vs KFin (buy, Ascent)
- KFin: Ascent 51% (Oct-2025), US$49.6 bn international AAUM, 511 clients; Ascent margin ~8%; group margin 34% → target 40%; 49% put obligation; GA exiting [V].
- CAMS: organic adjacencies, margin back to 46.4%; non-MF 14.9% [V].

### B5 (optional). "The KYC toll": CVL vs CAMS KRA after the 2026 tariff reset.

## C. The REVENUE / PROFIT EQUATIONS

**Depository (CDSL):**
Revenue ≈ (issuer folios × issuer rate) + (debits × ₹3.50) + (IPO/CA credits × rate) + (KYC creations × ₹5 + fetches × ₹28 + searches × ₹0.25 + other CVL services) + (e-CAS, e-voting, pledge, other) ; PAT ≈ (Revenue − people − IT − SEBI/IPF − admin − D&A + treasury income) × (1 − 25%).

**RTA (CAMS/KFin):**
Revenue ≈ Σ_AMC [AAUM_AMC × telescopic bps(AAUM_AMC, asset class)] + transactions × per-txn fees + non-MF businesses ; PAT ≈ (Revenue × ~45% EBITDA − D&A + other income) × 75%.

### C.1 Worked example — CDSL FY26 (consolidated, ₹ Cr) [E from V-deck/V screener]
| Line | Volume | Price | ₹ Cr |
|---|---|---|---|
| Annual issuer charges | ~38–39 crore folios (Jun-26: 38.73 Cr) | ~₹12 per folio per year (implied) | 456 |
| Transaction charges | ~68 crore debits | ₹3.50 (gross of discounts) | 240 |
| IPO / corporate action | volatile (Q2 ₹62 Cr, Q4 ₹17 Cr) | per credit | 159 |
| Online data charges (mainly CVL KYC) | 10+ crore records; fetch volumes | ₹28 fetch / ₹5 create (from Q1 FY27) | 197 |
| Other income (e-CAS, e-voting, pledge, treasury, misc.) | — | — | 186 |
| **Total income** | | | **1,238** |
| Expenses (screener) | | | (563) |
| D&A | | | (66) |
| PBT | | | 609 |
| Tax 25% | | | (154) |
| **PAT** | | | **455** |
- The five income lines are read from the deck's quarterly stacked bars and sum exactly to screener total income (₹1,145 + ₹93 = ₹1,238 Cr) [V-deck layout-read; V screener]. Shares of total income: issuer 36.8%, transactions 19.4%, IPO/CA 12.8%, online data 15.9%, other 15.0% [E].
- **Market-linked share** (transactions + IPO/CA + treasury inside other) ≈ **35–40%** of income [E].

### C.2 Worked example — CAMS Q1 FY27 annualised (₹ Cr) [E from V-deck]
| Line | Volume | Price | ₹ Cr (annualised) |
|---|---|---|---|
| MF asset-based | ₹57.33 Tn QAAUM incl. FoF | ~2.04 bps | ~1,171 (Q1 actual ₹292.7 Cr = 74.1% × ₹395 Cr) |
| MF non-asset-based | 292 mn transactions/qtr, NFOs | per txn | ~174 (11.0%) |
| Non-MF | CAMSPay 5.7%, AIF 3.1%, KRA 1.9%, Rep 1.4%, Think360 1.1%, other 1.7% | — | ~235 (14.9%) |
| **Revenue** | | | **~1,580** |
| Op. EBITDA 46.4% | | | ~733 |
| D&A ~6% / OI +4% / tax 26% | | | |
| **PAT (attrib.)** | | | **~512** (Q1 ₹128 Cr × 4) |
- **Sensitivity [E]:** +10% QAAUM at constant yield → +₹117 Cr revenue, ~+₹85–90 Cr PAT (marginal cost ~25%). A 5% yield reset on the asset-based book → −₹59 Cr revenue ≈ −₹44 Cr PAT (−9%).

### C.3 Worked example — KFin Q1 FY27 annualised (₹ Cr) [E from V-deck]
| Segment | Driver | ₹ Cr (Q1 × 4) | Margin note |
|---|---|---|---|
| Domestic MF | ₹27.3 Tn × ~3.15 bps | ~861 | ~45%+ |
| International (incl. Ascent) | US$49.6 bn AAUM, 511 clients | ~292 | Ascent EBITDA ~8.4%; KFin SEA higher |
| Issuer solutions | 11,275 clients; IPOs | ~128 (Q1 seasonally weak; FY26 ₹154 Cr) | high |
| Alternatives, PMS, wealth | 731 AIFs, ₹20.6 Tn | ~81 | "broken even... should get to be one of the highest-margin" |
| Other allied | | ~16 | |
| **Revenue** | | **~1,426** | |
| EBITDA 34.2% | | ~488 | 39.4% ex-Ascent |
| **PAT** | | **~301** (Q1 ₹75.2 Cr × 4) | |

### C.4 Worked example — the RTA fee inside a ₹5,000 SIP [E]
- ₹5,000/month for a year ≈ ₹60,000 invested; average balance in year 1 ≈ ₹30,000; equity fund TER ~1.0% → ~₹300 to AMC/distributor/levies; **RTA fee at ~2–3 bps ≈ ₹6–9 a year** + per-transaction charges (12 SIP instalments) of a few rupees. The RTA earns ~₹10–15 per SIP per year; CAMS's 6.72 crore live SIPs [V-deck] are therefore worth ~₹700–1,000 Cr of revenue capacity including the asset-based fee on SIP AUM [E].

### C.5 Worked example — one demat account at CDSL [E]
- A typical discount-broker account with 6 sell-days a year → 6–15 debits (one per ISIN per day) × ₹3.50 = ₹21–52; plus KYC fetch ₹28 at onboarding (CVL). **Issuer fees (~₹12 per folio per year [E]) are paid by the companies whose shares the account holds, not by the investor** — so an account with 10 holdings "brings" ~₹120 a year of issuer income to CDSL even if it never trades. Annual maintenance charges (AMC) on the account are the DP's revenue, not CDSL's. Average CDSL operating revenue per account ≈ **₹69/yr** (FY26) [E]; most accounts are dormant (NSE's "active clients" ~45–50 mn vs 232 mn demat accounts [K, flag]).

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| Demat accounts (Jun-26) | **23.2 crore** (CDSL 18.6 Cr, ~80%) | [V CDSL & NSDL decks; KFin deck SEBI series] |
| MF industry QAAUM serviced by CAMS + KFin (Q1 FY27) | **₹83 lakh crore** (CAMS 67.2% / KFin 32.8%) | [V-deck] |
| Monthly SIP inflow (Sep-26) | **₹32,490 Cr** (record) | [V-snip AMFI via Angel One/Bajaj] |
| Members' FY26 revenue | **₹3,962 Cr** (+10.2%) | [E sum of V screener] |
| Members' FY26 OP margin | **45.3%** (CDSL 50.8 / CAMS 45.1 / KFin 40.7) | [E; V screener] |
| Members' m-cap (22-Oct-26) | **₹56,986 Cr — 44.8× FY26 PAT** | [E; V screener] |

## E. Chart-ready datasets

**E1. Demat accounts, total (mn, March year-end)** [V KFin deck (SEBI) FY23–Q1 FY27; FY22 K]
FY22: ~90 · FY23: 114 · FY24: 151 · FY25: 192 · FY26: 225 · Jun-26: 232

**E2. CDSL BO accounts (lakh, quarter-end) and net additions (lakh)** [V-deck]
Mar-25: 1,529 (+64) · Jun-25: 1,586 (+57) · Sep-25: 1,651 (+65) · Dec-25: 1,727 (+76) · Mar-26: 1,801 (+74) · Jun-26: 1,859 (+58)

**E3. Depository market shares, Jun-26 (%)** [V-deck; E]
Accounts — CDSL 80.3 / NSDL 19.7 · Custody value — NSDL 85.8 / CDSL 14.2 · Total income — NSDL 43.2 / CDSL 56.8

**E4. CDSL consolidated income by stream, FY26 (₹ Cr)** [V-deck layout-read; reconciles to V screener]
Annual issuer: 456 · Transaction charges: 240 · Online data (CVL/KYC): 197 · Other income (e-CAS, e-voting, treasury, misc.): 186 · IPO/CA: 159 · Total: 1,238

**E5. CDSL quarterly income streams (₹ Cr; consolidated)** [V-deck layout-read]
| Quarter | Issuer | Transactions | IPO/CA | Online data | Other | Total |
|---|---|---|---|---|---|---|
| Q1 FY26 | 114 | 62 | 21 | 36 | 62 | 295 |
| Q2 FY26 | 115 | 59 | 62 | 59 | 46 | 341 |
| Q3 FY26 | 113 | 60 | 59 | 53 | 49 | 334 |
| Q4 FY26 | 114 | 59 | 17 | 49 | 29 | 268 |
| Q1 FY27 | 128 | 66 | 27 | 45 | 75 | 341 |
(Q1 FY27 other ₹75 Cr confirmed by CFO; CVL revenue ₹36 → ₹45 Cr confirmed [V transcript]. The Q2–Q4 split between "online data" and "other" is layout-inferred — totals are exact.)

**E6. MF industry AUM (₹ lakh Cr, March close)** [V AMFI Mar-26 note for FY23/25/26; K FY22/24; V-snip Sep-26]
FY22: 37.57 · FY23: 39.42 · FY24: 53.40 · FY25: 65.74 · FY26: 73.73 · Sep-26: 82.64

**E7. Industry QAAUM (₹ Tn, last-quarter average)** [V KFin deck]
Q4 FY23: 40.5 · Q4 FY24: 54.1 · Q4 FY25: 67.4 · Q4 FY26: 81.6 · Q1 FY27: 83.2

**E8. Monthly SIP contributions (₹ Cr)** [V AMFI Mar-26 note (Oct-25 to Mar-26); V-snip Aug/Sep-26]
Oct-25: 29,529 · Nov-25: 29,445 · Dec-25: 31,002 · Jan-26: 31,002 · Feb-26: 29,845 · Mar-26: 32,087 · Aug-26: 32,297 · Sep-26: 32,490
(Note: Angel One's article says SIPs "crossed ₹32,000 Cr for the first time in August 2026" — **wrong**: AMFI's own March-2026 note says they first crossed ₹32k Cr in March 2026.)

**E9. RTA QAAUM market share (%)** [V KFin deck]
KFin: FY23 31.5 · FY24 31.7 · FY25 32.4 · FY26 32.5 · Q1 FY27 32.8 → CAMS = 100 − KFin (68.5 → 67.2)

**E10. Members' revenue FY22–FY26 (₹ Cr)** [V screener]
CDSL: 551 / 555 / 812 / 1,082 / 1,145 · CAMS: 910 / 972 / 1,137 / 1,422 / 1,516 · KFin: 640 / 720 / 838 / 1,091 / 1,301

**E11. Members' PAT FY22–FY26 (₹ Cr)** [V screener]
CDSL: 312 / 276 / 420 / 526 / 455 · CAMS: 287 / 285 / 351 / 465 / 472 · KFin: 149 / 196 / 246 / 333 / 344

**E12. OP margin FY22–FY26 (%)** [V screener]
CDSL: 66 / 57 / 60 / 58 / 51 · CAMS: 47 / 43 / 44 / 46 / 45 · KFin: 45 / 41 / 43 / 44 / 41

**E13. CAMS revenue mix (% of quarter revenue)** [V-deck]
Q1 FY26: asset-based 74.3 / non-asset MF 12.7 / non-MF 13.0 · Q4 FY26: 73.0 / 11.7 / 15.3 · Q1 FY27: 74.1 / 11.0 / 14.9

**E14. KFin revenue mix FY26 (₹ Cr; %)** [V-deck]
Domestic MF 852.8 (65.5) · International 158.7 (12.2) · Issuer 153.9 (11.8) · Alternatives/PW/PMS 73.6 (5.7) · Other allied 13.3 (1.0) · Total 1,301.5

**E15. Valuation snapshot, 22-Oct-2026** [V screener]
P/E — CDSL 54.3 · KFin 41.8 · NSDL 37.1 · CAMS 33.8 | P/B — CDSL 13.1 · CAMS 12.6 · KFin 8.7 · NSDL 6.1 | Div. yield — CAMS 1.87% · KFin 1.41% · CDSL 1.02% · NSDL 0.55%

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Good | Average | Weak | Members now |
|---|---|---|---|---|
| Demat net adds (CDSL, per quarter) | >70 lakh | 50–70 lakh | <40 lakh | 58 lakh (Q1 FY27) |
| CDSL incremental account share | >85% | 78–85% | <75% | ~81–82% |
| Revenue per BO account (₹/yr) | >₹80 | ₹60–80 | <₹55 | ~₹69 (FY26) |
| Issuer income growth | >15% | 8–15% | <8% | +12.3% (Q1 FY27) |
| Industry QAAUM growth (YoY) | >20% | 12–20% | <10% | ~15% (Q1 FY27) |
| RTA serviced QAAUM vs industry | +2 pts | ±1 pt | −2 pts | CAMS −0.5 pt (14.8 vs 15.3); KFin +1.1 pt |
| RTA yield erosion (per yr) | <2% | 2–4% | >5% (reset years) | CAMS ~4% YoY, 0% QoQ; KFin ~8% YoY, ~2% QoQ |
| MF revenue growth − QAAUM growth (wedge) | > −3 pts | −3 to −6 | < −8 | CAMS ~−5; KFin ~−9 (Q1 FY27) [E] |
| Non-MF share (CAMS) / non-domestic-MF share (KFin) | >20% / >40% | 12–20% / 30–40% | <10% / <25% | 14.9% / 39.6% |
| OP/EBITDA margin — depository | >55% | 45–55% | <45% | CDSL 50.8% FY26, 47.1% Q1 |
| OP/EBITDA margin — RTA | >45% | 38–45% | <35% | CAMS 46.4%; KFin 34.2% (39.4% ex-Ascent) |
| Live SIP share (CAMS) | >65% | 60–65% | <58% | 63.9% |
| CFO/EBITDA | >100% | 85–100% | <80% | CDSL 107%, CAMS 110%, KFin 90% (FY26) [V screener] |
| Dividend payout | >60% | 40–60% | <35% | CDSL 58%, CAMS 65%, KFin 60% |
| ROE | >35% | 20–35% | <15% | CAMS 36.3%, CDSL 24.5%, KFin 21.6% [V screener] |

## G. Timeline (year: event)
- 1996: Depositories Act; NSDL set up (IDBI, UTI, NSE) [K].
- 1988 / 1985: CAMS founded (Chennai); Karvy registry (Hyderabad) [K].
- Feb-1999: CDSL receives SEBI certificate of commencement (BSE-promoted) [V-deck].
- 2005: CDSL crosses 1 million demat accounts [V-deck].
- 2006: CVL launches the KRA system with the MF industry [V-deck].
- 2009: CDSL launches e-Voting [V-deck].
- Jun-2017: CDSL lists — India's and Asia-Pacific's first listed depository [V-deck].
- 2018: General Atlantic acquires Karvy Computershare's registry business → KFin [K].
- 2019: CDSL becomes India's largest depository by accounts [V-deck].
- Nov-2019: Karvy Stock Broking client-securities misuse; SEBI tightens pledge rules (2020) [K].
- Oct-2020: CAMS IPO (OFS by NSE and Great Terrain) [K].
- 2021: CDSL launches eDIS [V-deck].
- Feb-2022: CDSL crosses 6 crore accounts [primer].
- 2022: DDPI; T+1 settlement phase-in; Kotak Mahindra Bank buys ~9.9% of KFin [V-deck; K].
- Dec-2022: KFin IPO [K].
- 2023: CDSL crosses 100 million demat accounts — first Indian depository to do so [V-deck].
- 2024: CDSL "Silver Jubilee" (25 years) [V-deck]; CDSL 1:1 bonus [K]; GA sells ~5.8% of KFin (May) [V-snip].
- 1-Oct-2024: CDSL flat ₹3.50/debit tariff (true-to-label) [V-snip].
- 20-Nov-2024: SEBI F&O curbs begin [K].
- May-2025: GA sells ~10% of KFin (~₹1,790 Cr) [V-snip].
- 2025: Direct pay-out of securities to investor demat accounts mandated [V-deck].
- 6-Aug-2025: NSDL lists [V-deck].
- Oct-2025: First SIFs launch [V CAMS transcript].
- 13-Oct-2025: KFin acquires 51% of Ascent Fund Services (path to 100% over 5 years) [V-deck].
- Dec-2025: CAMS 1:5 split [primer; V screener FV ₹2].
- 16-Jan-2026: SEBI (Mutual Funds) Regulations, 2026 notified; effective 1-Apr-2026 [V-snip].
- Feb–Mar 2026: West-Asia war; Nifty −11.3% in March; AMFI AUM −10.1% MoM to ₹73.73 lakh Cr [V AMFI].
- Mar-2026: Monthly SIP crosses ₹32,000 Cr for the first time (₹32,087 Cr) [V AMFI].
- Q1 FY27 (Apr–Jun 2026): SEBI KRA tariff reset (create ₹5, fetch ₹28, search ₹0.25) [V transcript].
- 1-Jul-2026: CAMS KRA gets IFSCA in-principle approval (GIFT City) [V-deck].
- 20-Aug-2026: GA sells 8.75% of KFin at ₹925 (~₹1,400 Cr) [V].
- Sep-2026: Record SIP ₹32,490 Cr; AUM ₹82.64 lakh Cr; equity inflows ₹38,307 Cr [V-snip].
- 1-Oct-2026: Dinesh Khara becomes KFin chairman [V].
- 7-Oct-2026: RBI hikes repo to 5.50% [orchestrator].
- 26/29/31-Oct-2026: Q2 FY27 results — KFin, CAMS, CDSL/NSDL [V screener].

## H. Figures I could not source well (and conflicts)
1. **CDSL cash & investments.** Primer ₹2,850 Cr is impossible (total assets ₹2,419 Cr). Company figure not found in the deck/transcript; estimate ₹1.6–1.9k Cr [E]. **Get from the FY26 annual report balance sheet (cash + bank + current/non-current investments).**
2. **CDSL income split between "online data" and "other income" for Q2–Q4 FY26** is layout-inferred from stacked bars (totals exact). Verify in CDSL's FY26 annual report segment/revenue note.
3. **NSDL account history** before Jun-26 (FY22–FY25) is [K/E]; NSDL's tariffs and FY26 standalone depository revenue were not fetched.
4. **AMFI FY history** (FY22, FY24 closing AUM; FY22–FY25 annual SIP totals; unique investors) is [K]. FY26 annual SIP total ~₹3.5 lakh Cr is [E] (sum of monthly prints, Apr–Sep 2025 from memory).
5. **AMFI Sep-2026 data** (AUM ₹82.64 lakh Cr, SIP ₹32,490 Cr, 10.06 Cr SIP accounts, SIP AUM ₹17.86 lakh Cr) is from secondary articles (Bajaj Broking, Angel One) — [V-snip]; the AMFI note itself was not fetched.
6. **RTA yields** are my computations from deck revenue mixes and QAAUM [E]; CAMS's FY26 serviced-AUM growth (primer "+21%") could not be verified on a like-for-like Q4-vs-Q4 basis.
7. **KFin "live folios 37.9 million"** in the deck conflicts with "199 million total investor folios" — different bases (live vs total incl. inactive?). Flag; don't quote either as "investors".
8. **GA's residual stake in KFin:** 14.06% (screener Sep-26) vs ~13.1% (press after the Aug-2026 block). Reconcile with the Sep-26 shareholding pattern on BSE.
9. **Ascent deal terms** (consideration for 51%, valuation of the 49% put, earn-out) not found. KFin's ₹1,041 Cr "other liabilities" at Mar-26 likely includes it [E].
10. **SEBI MF Regulations 2026 BER caps** — only secondary snippets; the gazette/circular was not fetched. RTA fee treatment under BER (is the RTA fee inside BER? yes, as an AMC operating cost [K/E]) — verify.
11. **Global peer multiples** are inconsistent across free data sites [V-snip]; treat as ranges.
12. **SEBI F&O study numbers** (98.1 → 78.6 lakh traders; options contracts −51.5%) are [V-snip] from press summaries of a SEBI/government statement.
13. **CAMS FY26 DPS** (payout 65% per screener → ~₹12.5/share post-split) vs primer "~₹4 final" — not reconciled.
14. **KRA market shares** (CVL vs CAMS KRA vs NDML vs others) on a common basis — not published.
15. **Unlisted issuer-RTA market (MUFG Intime etc.)** sizes — not found.

---

# PART 2 — COMPANY FACT PACKS (3 members + NSDL context)

**Sources and conventions for every pack:**
- Screener.in consolidated pages, pulled 22-Oct-2026 (curl, generic UA) [V screener]. NSDL is at /company/544467/consolidated/ (the /NSDL/ slug 404s).
- Q1 FY27 investor presentations and earnings-call transcripts filed on BSE/NSE (links in §3.5) [V-deck / V transcript].
- Primers in /primers/ (refresh dates in each pack) [primer].
- "OP" = screener operating profit (EBITDA excluding other income). EV = m-cap + borrowings (lease liabilities) − company-reported cash & investments where available (CAMS ₹971 Cr, KFin ₹687 Cr, both Jun-26), else screener investments (CDSL ₹1,487 Cr, NSDL ₹2,559 Cr, Mar-26). EV/EBITDA on FY26 OP.

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 22-Oct-26)

| Company | NSE | Year | Revenue | YoY % | OP (EBITDA) | OPM % | PAT | ROCE % | ROE % | Net debt (cash) | M-cap | P/E (TTM) | P/B | EV/EBITDA | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CDSL | CDSL (NSE only) | FY26 cons. | 1,145 | +5.8 | 582 | 50.8 | 455 | 32.0 | 24.5 | (1,485) screener basis; ~(1,600–1,900) [E] | 25,602 | 54.3 | 13.1 | ~41× | BO accounts 18.59 Cr (Jun-26), ~80% share | Net adds 58 lakh Q1 FY27 | Rev/BO acct ~₹69/yr |
| CAMS | CAMS | FY26 cons. | 1,516 | +6.6 | 683 | 45.1 | 472 (attrib. 476) | 47.0 | 36.3 | (907) company cash ₹971 − leases ₹64 | 16,742 | 33.8 | 12.6 | ~23× | QAAUM ₹55.9 Tn, 67.2% share | Asset-based yield ~2.0 bps [E] | Non-MF 14.9% |
| KFin Technologies | KFINTECH | FY26 cons. (incl. Ascent from Oct-25) | 1,301 | +19.2 | 530 | 40.7 | 344 | 29.2 | 21.6 | (632) company cash ₹687 − leases ₹55; **plus an unquantified Ascent 49% put** | 14,642 | 41.8 | 8.7 | ~26× (before Ascent put) | QAAUM ₹27.3 Tn, 32.8% share | Dom. MF yield ~3.15 bps [E] | Non-dom-MF 39.6%; intl AAUM US$49.6 bn |
| *NSDL (peer, not a member)* | NSDL | FY26 cons. (incl. payments bank) | 1,530 | +7.7 | 430 | 28.1 | 380 | 22.1 | 16.0 | (2,542) screener | 14,413 | 37.1 | 6.1 | ~28× | BO accounts 4.56 Cr | Custody share 85.8% | Total-income share 43.2% |

## 2.1 Central Depository Services (India) Ltd (CDSL · NSE: CDSL · no BSE listing) — India's retail depository + CVL (KYC)

**Full record (screener consolidated, 22-Oct-26) [V]**
- Price ₹1,225; m-cap **₹25,602 Cr**; 52-week high/low ₹1,674 / ₹1,116; **P/E 54.3 (TTM)**; book value ₹93.8 (**P/B 13.1**); dividend yield 1.02%; ROCE 32.0%; ROE 24.5%; face value ₹10; ~20.9 crore shares.
- **FY26:** sales ₹1,145 Cr (FY25 ₹1,082 Cr, **+5.8%**); expenses ₹563 Cr (+23%); OP **₹582 Cr (50.8%)**; other income ₹93 Cr; D&A ₹66 Cr; PBT ₹609 Cr; tax 25%; **PAT ₹455 Cr (−13.5%)**; EPS ₹21.82; dividend payout 58% (**₹12.75/share** [primer; consistent with payout]).
- **TTM (to Jun-26):** sales ₹1,179 Cr; OP ₹590 Cr; PAT ₹470 Cr; EPS ₹22.55.
- **Long history (sales / PAT, ₹ Cr):** FY20 225/107 · FY21 344/201 · FY22 551/312 · FY23 555/276 · FY24 812/420 · FY25 1,082/526 · FY26 1,145/455. OPM peaked 66% (FY22). 10-yr median sales growth 23.7% [V screener].
- **Quarterly (sales / OP / OPM / PAT):** Q1 FY26 259/130/50%/102 · Q2 319/176/55%/140 · Q3 304/160/52%/133 · Q4 263/116/44%/80 · **Q1 FY27 293/138/47%/118** (+13.1% sales, +15.7% PAT YoY). Q1 FY27 other income ₹48 Cr on screener (₹43.8 Cr treasury MTM/accrual per CFO) [V].
- **Balance sheet (Mar-26):** equity ₹209 Cr + reserves ₹1,751 Cr = net worth ₹1,960 Cr; borrowings ₹2 Cr; investments ₹1,487 Cr; fixed assets ₹500 Cr (₹106 Cr in FY22 → large tech/office capex incl. Marathon Futurex premises [E]); total assets ₹2,419 Cr.
- **Cash flow FY26:** CFO ₹467 Cr; FCF ₹346 Cr; CFO/EBITDA 107%.
- **EV/EBITDA:** (₹25,602 + 2 − 1,487) ÷ 582 = **~41×** [E].

**Native KPIs [V-deck Q1 FY27 unless noted]**
- BO accounts **1,859 lakh (18.59 Cr) at Jun-26**; 1,801 lakh Mar-26; 1,529 lakh Mar-25. Net adds: 57 / 65 / 76 / 74 / 58 lakh (Q1 FY26 → Q1 FY27). ~80% market share by accounts (company) [V transcript].
- Incremental share: 81.4% in Jun-26, −~420 bps since March (analyst on the call; management did not dispute) [V transcript].
- Issuers 49,684 (Jun-26; 35,922 Mar-25); ISINs 1,33,364; custody ₹88 lakh Cr (₹77 lakh Cr Mar-26); issuer folios 38.73 crore [V transcript].
- Income streams (consolidated, ₹ Cr) FY26: issuer 456 · transactions 240 · IPO/CA 159 · online data 197 · other 186 = 1,238 [V-deck layout-read; §E4]. Q1 FY27: 128 / 66 / 27 / 45 / 75 = 341.
- Transaction tariff ₹3.50/debit flat since 1-Oct-2024 [V-snip].
- **CVL (100%)**: 10.62 Cr KYC records (10.35 Cr at Mar-26); RTA to ~3,508 companies; Q1 FY27 revenue ₹45 Cr (+22%), total income ₹50 Cr, expenditure ₹34.67 Cr (+31%), PBT ₹15.98 Cr (−4%), PAT ₹12.12 Cr (−5%) [V transcript]. KRA tariff reset in Q1 FY27: create ₹20 → ₹5, fetch ₹35 → ₹28, Search API ₹0.25 [V transcript].
- **CIRL (Centrico Insurance Repository, 54.25%)**: 49 insurer partners; 23.94 lakh policies in 24.42 lakh e-IAs (20.70 lakh / 22.62 lakh at Mar-26) [V-deck].
- **CCRL (Countrywide Commodity Repository, 52%)**: WDRA-regulated e-NWRs; 9 non-agri commodities notified [V-deck].
- Treasury: mainly debt MFs; ETFs ~5–7% of the investable portfolio; **margin-pledge income ₹6.19 Cr in Q1 FY27** [V transcript].
- New products: direct pay-out of securities; unified investor app (launched by SEBI chairman Tuhin Kanta Pandey); proxy-advisor recommendations inside e-voting; DLT for secured-bond covenants; CDSL IPF education site in 12 languages [V-deck].

**Ownership (Sep-26) [V screener]:** promoter **BSE Ltd 15.00%** (cap); FIIs 8.66% (down from 18.16% in Dec-23); DIIs 17.77%; public 58.56%; 14.69 lakh shareholders. Top holders (Jun-26): BSE 15.00%, LIC 4.40%, Nippon India Small Cap 1.35%, PPFAS Flexi Cap 1.13%, New India Assurance 0.88%; retail 61.57% [V-deck].

**Management/governance:** MD & CEO Nehal Vora; CFO Girish Amesara; CVL head Sunil Alvares [V transcript]. Two Executive Directors (Vertical 1: Amit Mahajan; Vertical 2: Nayana Ovalekar) appointed with SEBI approval in Q1 FY27 [V transcript]. A CDSL nominee director on CVL's board resigned effective 28-Sep-2026 [V screener].

**Story bullets**
- **What defines it:** the default depository of India's discount-broker generation — ~4 of every 5 demat accounts — with a second toll in KYC (CVL). Highest margin in the group (51%) and the most activity-geared earnings.
- **Edge:** broker integrations (eDIS, DDPI, margin pledge, eKYC), low-cost positioning, CVL's records base; formula-driven issuer annuity (₹456 Cr, 37% of income) growing ~12%.
- **Main risks:** (1) regulated price (tariff flattened in 2024; KRA cut in 2026); (2) incremental share slipping toward NSDL as NSDL courts fintech brokers (NSDL gross incremental share 17.5% → 18.7%); (3) cost growth (expenses +23% in FY26) and tech investment; (4) treasury MTM volatility (RBI hike to 5.50% on 7-Oct-2026 = likely MTM headwind in Q3 FY27 [E]); (5) 54× P/E on a falling-EPS year.
- **Q2 FY27 board: 31-Oct-2026.** Watch: IPO/CA income (strong Jul–Sep IPO calendar? not verified), CVL after full-quarter KRA cut, treasury MTM.

**Sources:** screener.in/company/CDSL/consolidated/; CDSL Q1 FY27 investor presentation (NSE, 1-Aug-2026); CDSL Q1 FY27 transcript (call 3-Aug-2026); CDSL Q4 FY26 presentation (NSE, 2-May-2026); primer cdsl.html (13-Jul-2026).

## 2.2 Computer Age Management Services Ltd (CAMS · NSE: CAMS · BSE: 543232) — India's largest MF RTA; payments, AIF, KRA, insurance, AA

**Full record (screener consolidated, 22-Oct-26) [V]**
- Price ₹674; m-cap **₹16,742 Cr**; 52-week high/low ₹845 / ₹611; **P/E 33.8 (TTM)**; book value ₹53.3 (**P/B 12.6**); dividend yield **1.87%**; ROCE 47.0%; ROE 36.3%; face value ₹2 (post 1:5 split); ~24.8 crore shares.
- **FY26:** sales **₹1,516 Cr** (FY25 ₹1,422 Cr, **+6.6%**); expenses ₹833 Cr; OP **₹683 Cr (45.1%)**; other income ₹51 Cr; D&A ₹99 Cr; interest ₹7 Cr (leases); PBT ₹629 Cr; **PAT ₹472 Cr** (+1.5%) — **attributable to owners ₹476.0 Cr** [V-deck]; EPS ₹19.20 (screener) / ₹19.23 basic (company); payout 65%.
- Company FY26 consolidated P&L (₹ lakh → Cr) [V-deck]: revenue from operations ₹1,516.2 Cr; other income ₹51.2 Cr; employee ₹497.0 Cr; operating expenses ₹209.7 Cr; other expenses ₹125.6 Cr; D&A ₹98.8 Cr; share of MF Central JV loss ₹0.76 Cr; PBT ₹628.6 Cr; tax ₹156.5 Cr. **Standalone FY26: revenue ₹1,412.3 Cr, PAT ₹437.1 Cr** [V-deck].
- **TTM:** sales ₹1,557 Cr; OP ₹712 Cr; PAT ₹491 Cr.
- **History (sales / PAT, ₹ Cr):** FY20 700/172 · FY21 706/205 · FY22 910/287 · FY23 972/285 · FY24 1,137/351 · FY25 1,422/465 · FY26 1,516/472 [V screener].
- **Quarterly (company: revenue / op. EBITDA / margin / PAT attrib., ₹ Cr):** Q1 FY26 354.2/154.8/43.7%/109.1 · Q2 376.7/168.1/44.6%/114.9 · Q3 390.1/179.4/46.0%/125.5 · Q4 395.2/183.7/46.5%/126.4 · **Q1 FY27 395.0/183.2/46.4%/128.0** (+11.5% revenue, +18.3% EBITDA, +17.3% PAT YoY) [V-deck].
- **Balance sheet (Mar-26, screener):** net worth ₹1,321 Cr; borrowings ₹64 Cr (leases); investments ₹446 Cr; CWIP ₹89 Cr (platform build); total assets ₹1,809 Cr. **Company cash & equivalents ₹971.45 Cr at 30-Jun-26** (bank, FDs, G-secs, MF units; excludes money held in trust) [V-deck].
- **Cash flow FY26:** CFO ₹584 Cr; FCF ₹444 Cr; CFO/EBITDA 110% [V screener].
- **EV/EBITDA:** (16,742 + 64 − 971) ÷ 683 = **~23×** FY26; ~22× TTM [E].
- **Dividend:** FY26 payout 65% (≈₹12.5/share post-split [E]); Q1 FY27 interim **₹2.50/share** [V-deck].

**Native KPIs (Q1 FY27) [V-deck]**
- **QAAUM serviced ₹55.9 Tn ex-FoF (+14.8% YoY, +1.4% QoQ); ₹57.33 Tn incl. FoF (Q4 FY26 ₹56.59 Tn; Q1 FY26 ₹49.34 Tn); market share 67.2%**; industry QAAUM ₹83.1 Tn (+15.3%).
- Equity QAAUM ₹31.4 Tn (+17.6% vs industry +16.4%); equity = **54.3%** of CAMS AAUM (53.5% Q4 FY26, 53.8% Q1 FY26); equity net sales ₹86,026 Cr (+43% vs industry +39%).
- **Live SIPs 6.72 Cr (+18.8%; share 63.9%, up from 61.5%)**; SIP collections ₹59,681 Cr (+20.7% vs industry +16.5%); SIP book 67.2 mn.
- Unique investors **4.85 Cr (+16.8% vs industry +12.1%)**; live folios 116.2 mn (+19.4%); transactions 292.3 mn (+19.7%); systematic transactions 240.3 mn.
- NFO mobilisation share 53%; transaction share ~66–68% (chart, layout-read).
- **Revenue mix:** asset-based 74.1% · MF non-asset 11.0% · non-MF 14.9%. Asset-based revenue +11.2% YoY, +1.4% QoQ; non-asset MF −3.5% YoY, −5.9% QoQ; MF revenue +9.0% YoY; non-MF **+28.4% YoY**.
- **Non-MF breakdown (% of revenue, Q1 FY26 → Q4 FY26 → Q1 FY27):** AIF 2.8 → 3.1 → 3.1 · CAMSPay 3.7 → 5.0 → **5.7** ("one non-MF business crossed 5%") · CAMSRep 1.5 → 1.7 → 1.4 · Think360 AI 1.3 → 1.1 → 1.1 · CAMS KRA 2.1 → 2.6 → 1.9 · Others 1.6 → 1.8 → 1.7.
- **Yield [E]:** asset-based revenue ≈ ₹292.7 Cr × 4 ÷ ₹57.33 Tn = **~2.04 bps** (Q4 FY26 ~2.04; Q1 FY26 ~2.13 → −4% YoY, flat QoQ). All MF revenue ≈ 2.35 bps. Management: "no yield decline as such in the current quarter... no depletion quarter-on-quarter" [V transcript].
- Businesses: **CAMSPay** revenue +69.1%, 17 new deals, 13.4 mn bank-account verifications (+32%), 5.04 mn+ UPI AutoPay mandates, ~40% of insurance-industry NACH; **CAMS Alternatives** revenue +25.6%, AUA ₹3.2 Tn, 550+ funds / 260+ fund houses, 50 new mandates; **CAMS KRA** revenue −2.6% (after ~29% rate revision), 2 Cr+ records, ~20% share, IFSCA in-principle KRA approval 1-Jul-2026, 58 new intermediaries; **CAMSRep / Bima Central** 10.7 mn e-IAs, >14 mn e-policies, 2.5 mn active users (+8.3 lakh in Q1), 16 insurer-services clients; **CAMSfinserv (AA)** revenue +45.3%, ~9% share, 363 enterprises; **CAMS CRA (NPS)** subscriber base +75%, 10.6% share of non-govt business; **Think360 (55%)** 190+ clients; **MF Central** 50% JV with KFin [V-deck].
- **SIF and GIFT:** 11 SIFs launched, >₹10,000 Cr AUM, 8,000 distributors, 45,000 investors; GIFT City retail funds >10,000 investors, ₹750 Cr AUM, ₹200 Cr monthly gross sales; 40+ GIFT funds outsourcing [V-deck].
- **Clients:** services 9 of the 15 largest MFs; average 23.3-year relationship with 10 largest MF clients; client base to reach 31 AMCs with ASK, Carnelian, Oaklane, Neo going live; 285+ service centres [V-deck].
- **Guidance FY27 (Aug-2026 call):** revenue ~13%; EBITDA ~16%; MF revenue ≥12%; non-MF ~20% (22–23% "if lucky"); non-MF share ~16% by year-end; costs ex-D&A <10% YoY (Q1 <7%); average headcount −4–5% (Q1 −2–3%); appraisal deferred to 1-Jul (cost step-up in Q2) [V transcript].
- **Platforms:** Fundsnet go-live planned Sep-2026, old platform deprecated by Q4 FY27 (deck says "Q4 FY'26" — likely typo for FY27, flag); CAMSLens 2.0; AI acceptance of ~10% of physical transactions [V-deck; V transcript]. CAMS Lens integrated into NISM's RegTech Lab (14-Oct-2026) [V screener].

**Ownership (Sep-26) [V screener]:** **no promoter**; FIIs 45.58% (peak 57.63% Dec-24); DIIs 21.79%; public 32.64%; 5.39 lakh shareholders. JPMorgan 7.06% (11-Sep-26). Deck lists marquee holders incl. HDB (HDFC group), Fidelity, Seafarer, LIC, Whiteoak, Vanguard, Aditya Birla Sun Life, Franklin Templeton [V-deck].

**Management:** MD & CEO Anuj Kumar; CFO Ram Charan [V transcript].

**Story bullets**
- **What defines it:** two-thirds of Indian MF assets run on its register; the scale leader with ~46% margins and 36% ROE, now visibly past last year's pricing reset (margin 42% → 46.4%).
- **Edge:** scale (9 of top-15 AMCs; 63.9% of live SIPs), productivity (AI, headcount down), the broadest margin-accretive non-MF portfolio (payments, AIF, KRA, insurance, AA, NPS).
- **Main risks:** (1) renewal repricing by large AMCs, amplified by the 2026 BER regime squeezing AMC fees [E]; (2) QAAUM share drifting (67.2% vs ~68.5% three years ago — KFin gains ~0.3–0.5 pt a year) [E from V-deck]; (3) Fundsnet migration; (4) KRA price cut; (5) equity-market drawdowns lower AAUM with a lag.
- **Q2 FY27 results expected 29-Oct-2026.**

**Sources:** screener.in/company/CAMS/consolidated/; CAMS Q1 FY27 presentation (BSE, revised 3-Aug-2026); CAMS Q1 FY27 transcript (4-Aug-2026); primer cams.html (14-Jul-2026).

## 2.3 KFin Technologies Ltd (KFINTECH · BSE: 543720) — #2 MF RTA, #1 issuer registrar, international fund administrator (Ascent), AIF/NPS

**Full record (screener consolidated, 22-Oct-26) [V]**
- Price ₹847; m-cap **₹14,642 Cr**; 52-week high/low ₹1,217 / ₹785; **P/E 41.8 (TTM)**; book value ₹97.0 (**P/B 8.7**); dividend yield 1.41%; ROCE 29.2%; ROE 21.6%; face value ₹10; 17.28 crore shares [V-deck].
- **FY26:** sales **₹1,301 Cr** (FY25 ₹1,091 Cr, **+19.2%**; ~₹99 Cr from Ascent for ~5.5 months [E: incl. vs excl. Ascent international revenue ₹267.6 − ₹168.1 Cr]); expenses ₹772 Cr; OP **₹530 Cr (40.7%)**; other income ₹30 Cr; D&A ₹86 Cr; interest ₹5 Cr; PBT ₹468 Cr; **PAT ₹344 Cr (+3.3%)**; EPS ₹19.92 (diluted ₹19.81 company); payout 60%.
- **Company basis FY26 [V-deck]:** incl. Ascent — revenue ₹1,301.5 Cr, EBITDA ₹529.7 Cr (40.7%), PAT ₹343.7 Cr (26.4%); **excl. Ascent — revenue ₹1,202.1 Cr, EBITDA ₹522.9 Cr (43.5%), PAT ₹350.2 Cr (29.1%)**. Ascent therefore contributed ~₹99 Cr revenue, ~₹7 Cr EBITDA and **−₹6.5 Cr PAT** in FY26 [E].
- **TTM:** sales ₹1,384 Cr; OP ₹537 Cr; PAT ₹342 Cr.
- **History (sales / PAT, ₹ Cr):** FY20 450/5 · FY21 481/−65 · FY22 640/149 · FY23 720/196 · FY24 838/246 · FY25 1,091/333 · FY26 1,301/344 [V screener]. 5-yr profit CAGR 48.3% (from a distorted base) [V screener pros].
- **Quarterly (revenue / EBITDA / margin / PAT, ₹ Cr):** Q1 FY26 274.1/113.9/41.5%/77.3 · Q4 FY26 347.3/128.5/37.0%/81.2 · **Q1 FY27 356.5/122.0/34.2%/75.2** (+30.1% revenue; +7.1% EBITDA; −2.6% PAT). Ex-Ascent Q1 FY27: revenue ₹300.4 Cr (+9.6%), EBITDA ₹118.4 Cr (39.4%), PAT ₹79.9 Cr (26.6%) [V-deck].
- **Balance sheet (Mar-26, screener):** net worth ₹1,674 Cr; borrowings ₹55 Cr (leases); investments ₹239 Cr (₹462 Cr Mar-25); **fixed assets ₹1,773 Cr (₹803 Cr Mar-25) — ~₹970 Cr jump = goodwill/intangibles from Ascent [E]**; **other liabilities ₹1,041 Cr (₹296 Cr Mar-25) — likely includes the liability for the remaining 49% of Ascent [E; flag]**; total assets ₹2,770 Cr. Company cash & equivalents **₹687 Cr (30-Jun-26)**; ~₹200 Cr to be paid as dividend [V transcript].
- **Cash flow FY26:** CFO ₹370 Cr; FCF ₹259 Cr; CFO/EBITDA 90%; management: ~51% of EBITDA converts to FCF [V screener; V transcript].
- **EV/EBITDA:** (14,642 + 55 − 687) ÷ 530 = **~26×** before any Ascent put liability; if the full ₹745 Cr increase in other liabilities were debt-like, ~28× [E].
- Debtor days 76 (vs 14 at CAMS) — issuer and international billing cycles [V screener].

**Revenue by segment (₹ Cr) [V-deck]**
| Segment | Q1 FY26 | Q4 FY26 | Q1 FY27 | FY26 | FY26 share |
|---|---|---|---|---|---|
| Domestic MF investor solutions | 201.4 | 213.2 | 215.2 | 852.8 | 65.5% |
| International investor solutions (incl. Ascent) | 11.8 | 70.9 | 73.0 | 158.7 | 12.2% |
| Issuer solutions | 30.5 | 32.6 | 31.9 | 153.9 | 11.8% |
| Alternates, private wealth & PMS | 17.1 | 16.0 | 20.2 | 73.6 | 5.7% |
| Other allied services | 3.3 | 3.0 | 4.0 | 13.3 | 1.0% |
| **Total** | **274.1** | **347.3** | **356.5** | **1,301.5** | 100% |
- (The deck's revenue-break-up table mislabels the Q1 FY27 column as "Q1FY26" and the year-ago as "Q1FY25"; values match the Q1 FY27 summary table. International & Other (excl. GBS) +192% YoY; +32.2% excl. Ascent and GBS.) Non-domestic-MF share **39.6%** Q1 FY27 (vs ~26.5% Q1 FY26) [V-deck]. VAS revenue 5.4–6.4% of total [V-deck].

**Native KPIs (Q1 FY27) [V-deck]**
- **QAAUM ₹27.3 Tn (+16.4% vs industry +15.3%); market share 32.8%** (31.5% FY23 → 32.8%); equity AAUM share 32.4% (equity growth +14.1% vs industry +16.3% — losing equity share YoY); 36.2% of monthly SIP inflows (Jun-26); 34.0% of industry net flows; NFO share 48.4% by number, 47.8% by mobilisation; 159.1 mn transactions (+17.9%); live folios 37.9 mn (+7.3% vs industry 14.4% — flag basis); total investor folios 199 mn; 2.7 mm average daily transactions; MF Central CAS API 6.9 mn hits.
- **AMCs:** services 32 of 52 Indian AMCs (largest by count); won 24 of the last 42 new AMCs (my reading of a garbled deck line — flag); 5 of the top-10 fastest-growing AMCs (by AAUM, ≥₹10k Cr) are KFin clients; new RTA deal: Alpha Alternatives [V-deck].
- **Domestic MF yield [E]:** ₹215.2 Cr × 4 ÷ ₹27.3 Tn ≈ **3.15 bps** (Q1 FY26 ≈ 3.43 bps on ₹23.45 Tn) → ~−8% YoY; management: ~2% QoQ yield correction in Q1 FY27, ~30% of it from mix (debt → liquid); normal guide "maybe 3-odd percent in a year" [V transcript].
- **International:** 511 clients (Ascent 394; KFintech SEA 117; 22 yet to go live); AAUM **US$49.6 bn (₹4,722 bn) vs US$10.1 bn a year ago (+390%)**; "US$370 billion global AUM" and 1,742 global funds on the at-a-glance page; 18 jurisdictions (Malaysia, Philippines, Thailand, Singapore, Hong Kong, Cayman, BVI, Bahrain, Saudi Arabia, UAE, Canada, Jersey, UK, Japan, Australia, Mauritius, Seychelles, GIFT City); Ascent added 18 funds (6 with US$100 mn+); 8 GIFT City mandates; SupremaPlus cloud pension platform launched [V-deck]. **Ascent: 51% acquired 13-Oct-2025, path to 100% over 5 years; EBITDA margin ~8.4%, target double digits by FY27-end; group margin dilution "a couple of years"; "EBITDA accretive by the end of this year or early next year"; full KFin-level margins "three to five years"** [V-deck; V transcript]. Ascent revenue +32% YoY [V-deck].
- **Issuer solutions:** 11,275 corporate clients (+672 in Q1; +27.2% YoY); 175 mn investor folios (+7.2%); NSE-500 share: 50.0% by m-cap (52.3% Mar-26), 37.7% by clients, 42.1% by folios; main-board IPOs Q1 FY27: **79.2% of issue size, 66.7% of number**; mandates incl. **Jio Platforms, Razorpay, Garuda Aerospace, Pushp Brand** [V-deck].
- **Alternatives/wealth/PMS:** 731 AIF funds (757 incl. platform clients), **37.3% share**; AUM ₹20.6 Tn (+27.9%); 15 new AIF funds (JM Financial AM, 360 One WAM, Godrej AM, Onterra); 3 mPowerWealth wins; mPower FA platform: 26 clients incl. 5 AMCs where KFin is not the RTA; business "broken even", expected to become one of the highest-margin lines [V-deck; V transcript]. New InPro AML platform with APMI for PMS (1-Oct-2026) [V screener].
- **NPS:** 2.3 mn subscribers (+39.4% vs industry +12.7%); 12.2% share (9.9% a year ago); 22.0% of new subscriber additions; 6,194 corporate clients [V-deck].
- **Guidance:** revenue 18–20% CAGR; EBITDA margin 40–45%; ≥40% incl. Ascent by end-FY27; cost optimisation visible from Q2 FY27 [V transcript].

**Ownership (Sep-26) [V screener]:** **promoter General Atlantic Singapore Fund 14.06%** (39.05% Dec-23 → 33.06% Jun-24 → 22.90% Jun-25 → 22.82% Jun-26 → 14.06% Sep-26); FIIs 20.07%; **DIIs 37.54%** (from 27.31% in Jun-26); public 28.32%; 2.71 lakh shareholders. Jun-26 top institutional holders included Mercer, Mirae, Norges Bank, Skerryvore, State Street, Go Digit, HSBC MF, ICICI Lombard, **Kotak Mahindra Bank**, Kotak MF [V-deck]. GA blocks: May-2024 ~5.8% (~₹712 Cr), May-2025 ~10% (~₹1,790 Cr), **20-Aug-2026 8.75% at ₹925 (~₹1,400 Cr)** [V Business Today for Aug-26; V-snip for earlier].

**Management/board:** MD & CEO Sreekanth Nadella; WTD & CFO Vivek Mathur; IR head Ram Gattani [V-deck]. **Chairman Dinesh Khara from 1-Oct-2026** (V. M. Nair retired 30-Sep) [V screener]. Board includes a Kotak nominee (Devang Gheewalla) and a GA nominee (Srinivas Peddada, GA principal) [V-deck]. Group CISO appointed 16-Oct-2026 [V screener].

**Story bullets**
- **What defines it:** the challenger RTA that is more platform than RTA — #1 by number of AMCs and issuer clients, #2 by AUM, with the only real international leg (Ascent) among Indian peers.
- **Edge:** mid-size and new AMCs (higher telescopic yields ~3.15 bps vs CAMS ~2.0–2.35 bps), dominance in IPO registry (79% of Q1 issue size), AIF leadership (37%), NPS share gains, global FA platform (mPower) sold even to non-client AMCs.
- **Main risks:** (1) Ascent dilution (Q1 FY27 margin 34.2%; PAT −2.6%) and the 49% buyout liability; (2) GA overhang (~13–14% left); (3) losing equity-AAUM share YoY (32.4%; equity growth 14.1% vs industry 16.3%); (4) yield erosion faster than CAMS (−8% YoY on my basis); (5) higher receivables (76 debtor days).
- **Q2 FY27 results 26-Oct-2026; call 27-Oct, 11:00 am.**

**Sources:** screener.in/company/KFINTECH/consolidated/; KFin Q1 FY27 press release + presentation (BSE, 24-Jul-2026); KFin Q1 FY27 transcript (27-Jul-2026); Business Today 20-Aug-2026 (block deal); primer kfin-technologies.html (18-Jul-2026).

## 2.4 Context pack — National Securities Depository Ltd (NSDL · BSE 544467) — NOT a member; listed peer for the depository duopoly

- **Screener (22-Oct-26) [V]:** price ₹721; m-cap **₹14,413 Cr**; 52-week ₹1,198 / ₹718 (at its low; below the ₹800 IPO price [K]); P/E 37.1; BV ₹118 (P/B 6.1); div. yield 0.55%; ROCE 22.1%; ROE 16.0%; FV ₹2; ~20 crore shares.
- **FY26 consolidated:** sales ₹1,530 Cr (+7.7%); OP ₹430 Cr (28%); other income ₹130 Cr; PAT **₹380 Cr (+10.8%)**; investments ₹2,559 Cr; net worth ₹2,370 Cr; CFO ₹713 Cr [V screener]. Consolidation includes **NSDL Payments Bank** (5.0 mn accounts; ₹477 Cr deposits; "amongst top 34 banks in UPI") and NDML [V-deck] — hence the low consolidated OPM.
- **Q1 FY27 consolidated (screener):** sales ₹517 Cr (+66% YoY — payments-bank-driven? flag), OP ₹101 Cr (20%), PAT ₹98 Cr (+9%) [V screener].
- **Q1 FY27 standalone depository (company) [V-deck]:** revenue from operations ₹182.2 Cr (+13.2%); other income ₹37.5 Cr; total income ₹219.7 Cr (+15.3%); operating profit ₹79.8 Cr (43.8% margin, flat YoY); EBITDA incl. OI ₹126.9 Cr (57.8%); PAT ₹89.1 Cr (+7.9%); annualised ROE 16.4%. Revenue mix: **annual custody fee ₹101.1 Cr (+30.3%; 55.5% "recurring")**, settlement ₹14.8 Cr, pledge ₹17.2 Cr (+28.5%), e-voting ₹8.9 Cr, CA/IPO ₹18.9 Cr, other transaction charges ₹21.3 Cr (−34.9%). Costs: employees ₹34.7 Cr (+37.8%), technology ₹27.6 Cr (+53.8%).
- **KPIs [V-deck]:** BO accounts **45.6 mn**; Q1 FY27 adds 14.7 lakh gross / 12.4 lakh net (vs 13.0 / 10.4 lakh a year earlier); gross incremental share ~18.7% (vs ~17.5%); 317 DPs (+6 in Q1); custody-value share **85.8%**; individuals & HUFs custody share 66.8%; FPI demat holdings 99.9%; listed-debt share by value 97.6%; issuers 1,15,107 (69.9%); active instruments 2,53,903 (65.6%); unlisted-equity share ~72–73%; **total-income market share 43.2%**; average value per demat account ₹11.7 mn (vs CDSL ~₹0.47 mn [E: ₹88 lakh Cr ÷ 18.59 Cr accounts]); women ~24% of incremental accounts (Women Demat Plan from 1-Apr-2026).
- **Ownership (Sep-26):** no promoter; DIIs 38.18%, FIIs 8.24%, public 53.59%; 9.08 lakh shareholders [V screener].
- **Why it matters for the writer:** NSDL is the institutional/value depository (custody fees on ₹500+ lakh Cr), CDSL the retail/volume depository. NSDL earns ~2.3× CDSL's revenue per account and is fighting back for fintech-broker accounts. Its listing created the first like-for-like valuation comparison: **NSDL 37× vs CDSL 54× P/E** — CDSL's premium is for retail growth and margin.

## 2.5 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {"company":"Central Depository Services (India) Ltd","nse":"CDSL","bse":null,"member":true,"basis":"FY26 consolidated","screener_date":"2026-10-22",
   "revenue_fy26":1145,"revenue_fy25":1082,"revenue_growth_pct":5.8,"op_fy26":582,"opm_pct":50.8,"other_income_fy26":93,"total_income_fy26":1238,"pat_fy26":455,"pat_fy25":526,"pat_growth_pct":-13.5,
   "roce_pct":32.0,"roe_pct":24.5,"borrowings":2,"investments_screener":1487,"cash_company":null,"cash_est_range":[1600,1900],
   "mcap":25602,"price":1225,"pe_ttm":54.3,"pb":13.1,"div_yield_pct":1.02,"ev_ebitda_fy26":41.4,"dividend_payout_pct":58,"dps_fy26":12.75,
   "q1fy27_revenue":293,"q1fy26_revenue":259,"q1fy27_op":138,"q1fy27_pat":118,"q1fy26_pat":102,"q2fy27_board_date":"2026-10-31",
   "bo_accounts_lakh_jun26":1859,"bo_accounts_lakh_mar26":1801,"bo_accounts_lakh_mar25":1529,"net_adds_lakh_q1fy27":58,"account_share_pct":80.3,
   "issuers_jun26":49684,"custody_lakh_cr_jun26":88,"issuer_folios_cr":38.73,"txn_charge_per_debit_rs":3.50,
   "fy26_income_streams":{"annual_issuer":456,"transaction":240,"ipo_ca":159,"online_data":197,"other_income":186},
   "cvl_kyc_records_cr":10.62,"cvl_revenue_q1fy27":45,"rev_per_bo_account_rs":69,
   "promoter_pct_sep26":15.00,"fii_pct_sep26":8.66,"dii_pct_sep26":17.77,"public_pct_sep26":58.56},
  {"company":"Computer Age Management Services Ltd","nse":"CAMS","bse":"543232","member":true,"basis":"FY26 consolidated","screener_date":"2026-10-22",
   "revenue_fy26":1516,"revenue_fy25":1422,"revenue_growth_pct":6.6,"op_fy26":683,"opm_pct":45.1,"other_income_fy26":51,"pat_fy26":472,"pat_attrib_fy26":476.0,"pat_fy25":465,"pat_growth_pct":1.5,
   "roce_pct":47.0,"roe_pct":36.3,"borrowings":64,"investments_screener":446,"cash_company":971,"cash_company_date":"2026-06-30",
   "mcap":16742,"price":674,"pe_ttm":33.8,"pb":12.6,"div_yield_pct":1.87,"ev_ebitda_fy26":23.2,"dividend_payout_pct":65,"interim_dps_q1fy27":2.50,
   "q1fy27_revenue":395.0,"q1fy26_revenue":354.2,"q1fy27_ebitda":183.2,"q1fy27_ebitda_margin_pct":46.4,"q1fy27_pat_attrib":128.0,"q1fy26_pat_attrib":109.1,"q2fy27_result_date":"2026-10-29",
   "qaaum_tn_exfof_q1fy27":55.9,"qaaum_tn_inclfof_q1fy27":57.33,"qaaum_share_pct":67.2,"equity_share_of_aaum_pct":54.3,"live_sips_cr":6.72,"live_sip_share_pct":63.9,
   "unique_investors_cr":4.85,"live_folios_mn":116.2,"transactions_mn_q1":292.3,"asset_based_yield_bps_est":2.04,"mf_yield_bps_est":2.35,
   "non_mf_share_pct_q1fy27":14.9,"non_mf_growth_pct_q1fy27":28.4,"guidance_fy27":{"revenue_pct":13,"ebitda_pct":16,"non_mf_pct":20,"mf_pct":12},
   "promoter_pct_sep26":0,"fii_pct_sep26":45.58,"dii_pct_sep26":21.79,"public_pct_sep26":32.64},
  {"company":"KFin Technologies Ltd","nse":"KFINTECH","bse":"543720","member":true,"basis":"FY26 consolidated incl. Ascent (51% from 13-Oct-2025)","screener_date":"2026-10-22",
   "revenue_fy26":1301,"revenue_fy25":1091,"revenue_growth_pct":19.2,"op_fy26":530,"opm_pct":40.7,"other_income_fy26":30,"pat_fy26":344,"pat_fy25":333,"pat_growth_pct":3.3,
   "revenue_fy26_ex_ascent":1202.1,"ebitda_margin_fy26_ex_ascent_pct":43.5,"pat_fy26_ex_ascent":350.2,
   "roce_pct":29.2,"roe_pct":21.6,"borrowings":55,"investments_screener":239,"cash_company":687,"cash_company_date":"2026-06-30","other_liabilities_mar26":1041,
   "mcap":14642,"price":847,"pe_ttm":41.8,"pb":8.7,"div_yield_pct":1.41,"ev_ebitda_fy26":26.4,"dividend_payout_pct":60,
   "q1fy27_revenue":356.5,"q1fy26_revenue":274.1,"q1fy27_ebitda":122.0,"q1fy27_ebitda_margin_pct":34.2,"q1fy27_ebitda_margin_ex_ascent_pct":39.4,"q1fy27_pat":75.2,"q1fy26_pat":77.3,"q2fy27_result_date":"2026-10-26",
   "segments_fy26":{"domestic_mf":852.8,"international":158.7,"issuer":153.9,"alternates_pw_pms":73.6,"other_allied":13.3},
   "qaaum_tn_q1fy27":27.3,"qaaum_share_pct":32.8,"equity_aaum_share_pct":32.4,"sip_inflow_share_pct":36.2,"dom_mf_yield_bps_est":3.15,
   "non_domestic_mf_share_pct_q1fy27":39.6,"intl_aaum_usd_bn":49.6,"intl_clients":511,"issuer_clients":11275,"nse500_mcap_share_pct":50.0,"aif_funds":731,"aif_share_pct":37.3,"nps_subscribers_mn":2.3,
   "guidance":{"revenue_cagr_pct":[18,20],"ebitda_margin_pct":[40,45]},
   "promoter_pct_sep26":14.06,"fii_pct_sep26":20.07,"dii_pct_sep26":37.54,"public_pct_sep26":28.32},
  {"company":"National Securities Depository Ltd","nse":"NSDL","bse":"544467","member":false,"basis":"FY26 consolidated incl. NSDL Payments Bank","screener_date":"2026-10-22",
   "revenue_fy26":1530,"revenue_fy25":1420,"op_fy26":430,"opm_pct":28.1,"pat_fy26":380,"pat_fy25":343,"mcap":14413,"price":721,"pe_ttm":37.1,"pb":6.1,"roce_pct":22.1,"roe_pct":16.0,"investments_screener":2559,"borrowings":17,
   "bo_accounts_mn_jun26":45.6,"custody_share_pct":85.8,"total_income_share_pct":43.2,"q1fy27_standalone_revenue":182.2,"q1fy27_standalone_pat":89.1,"q2fy27_board_date":"2026-10-31"}
]
```

## 2.6 Conflicts and gaps (company level)
- **CDSL cash:** primer ₹2,850 Cr vs balance-sheet maximum ~₹1.9k Cr (total assets ₹2,419 Cr). Use screener investments ₹1,487 Cr as a floor; get the annual-report figure.
- **CDSL revenue mix:** primer's "standalone" shares (issuer ~31%, transactions ~27%, online data ~20%, IPO/CA ~11%, e-CAS ~4%, e-voting ~3%) vs FY26 consolidated income shares from the deck (issuer 36.8%, transactions 19.4%, online data 15.9%, IPO/CA 12.8%, other 15.0%). Primer overstates transactions' weight.
- **CAMS PAT basis:** ₹472 Cr (screener, after NCI) vs ₹476.0 Cr (attributable, company) — the NCI is negative (loss-making subsidiaries); use ₹476 Cr in prose.
- **CAMS FY26 serviced-AUM growth "+21%"** (primer) — not verified; Q1 FY27 YoY is +14.8% (ex-FoF).
- **KFin segment values:** primer domestic MF ₹862 Cr vs deck ₹852.8 Cr; issuer ₹171 Cr vs ₹153.9 Cr; international "~20% of revenue" vs 12.2% of FY26 (20.5% in Q1 FY27).
- **KFin GA stake:** primer ~32% vs 14.06% (screener Sep-26) / ~13.1% (press).
- **KFin Ascent:** primer "completes the Ascent acquisition" vs 51% with a 5-year path to 100%.
- **NSDL Q1 FY27 consolidated revenue +66%** (₹517 Cr vs ₹312 Cr) on screener while standalone grew 13% — payments bank or a one-off; not investigated.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (all three members; ₹ Cr; screener consolidated 22-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP | OPM % | PAT (reported) | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | Q1 PAT YoY % | M-cap | % of group m-cap | P/E (TTM) | EV/EBITDA (FY26) | Volume (latest) | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CDSL | 1,145 | +5.8 | 582 | 50.8 | 455 | 293 | +13.1 | 47.1 | 118 | +15.7 | 25,602 | 44.9 | 54.3 | ~41× | 18.59 Cr BO accounts (+58 lakh in Q1) | ~80% account share; ₹3.50/debit |
| CAMS | 1,516 | +6.6 | 683 | 45.1 | 472 (attrib. 476) | 395 | +11.6 | 46.1 (company 46.4) | 127 (attrib. 128) | +17.6 | 16,742 | 29.4 | 33.8 | ~23× | QAAUM ₹55.9 Tn ex-FoF (+14.8%) | 67.2% share; asset-based yield ~2.0 bps [E] |
| KFin | 1,301 | +19.2 | 530 | 40.7 | 344 | 357 | +30.3 | 34.2 | 75 | −2.6 | 14,642 | 25.7 | 41.8 | ~26× | QAAUM ₹27.3 Tn (+16.4%); intl US$49.6 bn | 32.8% share; dom-MF yield ~3.15 bps [E] |
| **Total (3)** | **3,962** | **+10.2** | **1,795** | **45.3** | **1,271** | **1,045** | **+17.8** | **42.3** | **320** | **+11.5** | **56,986** | 100 | **44.8× FY26 PAT; 43.7× TTM PAT (₹1,303 Cr)** | ~30× [E] | | |

Notes:
- All rows are screener consolidated FY26 and Q1 FY27 (Q1 FY26 bases: CDSL ₹259 / OP ₹130 / PAT ₹102; CAMS ₹354 / ₹154 / ₹108; KFin ₹274 / ₹114 / ₹77).
- KFin FY26 includes ~5.5 months of Ascent (51% subsidiary); KFin Q1 FY27 includes a full quarter (₹56 Cr revenue [E: 356.5 − 300.4]).
- Group EV/EBITDA ≈ (₹56,986 + 121 leases − 3,145 cash/investments [1,487 + 971 + 687]) ÷ 1,795 = **~30×** [E].

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one basis: screener consolidated, FY26 and FY25, reported PAT (CAMS ₹472 Cr, not attributable ₹476 Cr), m-cap 22-Oct-26.** Ratios are ratios of the sums.

**(a) FY26 by subgroup [E]**

| Group | Members | FY26 rev | FY25 rev | YoY | OP | OPM | PAT | FY25 PAT | PAT YoY | M-cap | Agg. P/E (m-cap ÷ FY26 PAT) | M-cap ÷ revenue |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **All three members** | CDSL, CAMS, KFin | 3,962 | 3,595 | +10.2% | 1,795 | 45.3% | 1,271 | 1,324 | −4.0% | 56,986 | 44.8× | 14.4× |
| **The two RTAs** | CAMS, KFin | 2,817 | 2,513 | +12.1% | 1,213 | 43.1% | 816 | 798 | +2.3% | 31,384 | 38.5× | 11.1× |
| The depository member | CDSL | 1,145 | 1,082 | +5.8% | 582 | 50.8% | 455 | 526 | −13.5% | 25,602 | 56.3× | 22.4× |
| *Context: both depositories (not a member aggregate)* | CDSL + NSDL | 2,675 | 2,502 | +6.9% | 1,012 | 37.8% | 835 | 869 | −3.9% | 40,015 | 47.9× | 15.0× |
| *Context: all four listed plumbing names* | CDSL, CAMS, KFin, NSDL | 5,492 | 5,015 | +9.5% | 2,225 | 40.5% | 1,651 | 1,667 | −1.0% | 71,399 | 43.2× | 13.0× |

- CDSL is **28.9% of members' revenue, 35.8% of PAT, but 44.9% of m-cap** — the market pays most for the retail depository.
- The two RTAs are 71.1% of revenue and 55.1% of m-cap.
- Ex-Ascent KFin (company basis) would lift the RTA pair's FY26 margin to ~44% [E].

**(b) Q1 FY27 vs Q1 FY26 (quarterly) [E]**

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | OPM Q1 FY27 / Q1 FY26 | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|
| All three | 1,045 | 887 | +17.8% | 442 | 398 | +11.1% | 42.3% / 44.9% | 320 | 287 | +11.5% |
| Two RTAs | 752 | 628 | +19.7% | 304 | 268 | +13.4% | 40.4% / 42.7% | 202 | 185 | +9.2% |
| Two RTAs ex-Ascent (KFin ex-Ascent per company) | ~695 | 628 | ~+10.7% | ~300 | 268 | ~+12% | ~43.2% / 42.7% | ~207 | 185 | ~+12% |
| CDSL | 293 | 259 | +13.1% | 138 | 130 | +6.2% | 47.1% / 50.2% | 118 | 102 | +15.7% |

**Read:**
- Q1 FY27 broke the FY26 slump: members' PAT +11.5% after −4.0% in FY26.
- **Organic RTA growth is ~11%**, not 20%: strip Ascent and the RTA pair grew revenue ~11% with flat-to-better margins.
- CDSL's PAT growth (+15.7%) outran its OP growth (+6.2%) because of treasury income (₹43.8 Cr MTM/accrual in Q1) — **lower quality** [V transcript; E].

**(c) Balance sheet and cash (company basis where available) [E]**
- Cash & investments: CDSL ≥₹1,487 Cr (screener investments; est. ₹1.6–1.9k Cr incl. bank) + CAMS ₹971 Cr + KFin ₹687 Cr = **≥₹3,145 Cr** (~5.5% of m-cap).
- Borrowings (all leases): ₹2 + ₹64 + ₹55 = ₹121 Cr. Group **net cash ≥ ₹3,024 Cr** — less KFin's Ascent put liability (unquantified; KFin other liabilities rose ₹745 Cr in FY26).
- Net worth: ₹1,960 + ₹1,321 + ₹1,674 = ₹4,955 Cr → group P/B **11.5×**; group ROE on FY26 PAT ≈ **25.7%** [E].
- FY26 FCF (screener): ₹346 + ₹444 + ₹259 = **₹1,049 Cr** → FCF yield **1.8%** on m-cap; FY26 dividends ≈ payout × PAT ≈ ₹264 + ₹307 + ₹206 = **~₹777 Cr** (dividend yield ~1.4%) [E].

**(d) Ownership (Sep-26, simple averages) [E from V screener]**
- Promoter: CDSL 15.00% (BSE), CAMS 0%, KFin 14.06% (GA) → average **9.7%** — essentially **professionally run, widely held** companies.
- FII: 8.66 / 45.58 / 20.07 → average 24.8%. DII: 17.77 / 21.79 / 37.54 → average 25.7%. Public/retail: 58.56 / 32.64 / 28.32 → average 39.8%.
- FII exits: CDSL FII 18.2% (Dec-23) → 8.7%; CAMS 57.6% (Dec-24) → 45.6%. Domestic institutions are the marginal buyers (KFin DII +10 pts in one quarter on the GA block).

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (22-Oct-26) | Use |
|---|---|---|---|---|
| CDSL | FY26 total income / PAT | ~₹1,239 Cr / ~₹455 Cr | Total income ₹1,238 Cr (revenue ₹1,145 + OI ₹93); PAT ₹455 Cr | Same; label "total income" |
| CDSL | M-cap / P/E | ~₹28,700 Cr (Jun-26) / ~60× | **₹25,602 Cr / 54.3×** | Screener |
| CDSL | Cash & investments | ~₹2,850 Cr | Impossible (total assets ₹2,419 Cr); investments ₹1,487 Cr; est. ₹1.6–1.9k Cr | Screener floor + [E] |
| CDSL | Demat accounts | 18.0 Cr (Mar-26); 18.38 Cr (May-26) | 18.01 Cr (Mar-26); **18.59 Cr (Jun-26)** | Deck |
| CDSL | Revenue mix | issuer ~31%, txn ~27%, online data ~20%, IPO/CA ~11% (standalone, "illustrative") | FY26 consolidated income: issuer 36.8%, txn 19.4%, online data 15.9%, IPO/CA 12.8%, other 15.0% | Deck |
| CDSL | New-account share | "~85%+ of new ones" | ~81–82% (Q1 FY27); −420 bps since March (analyst) | Deck/transcript |
| CDSL | Q1 FY27 | not covered | Total income ₹340.5 Cr; PAT ₹118 Cr (+16%); CVL ₹45 Cr (+22%) | Web |
| CDSL | KRA tariff reset | not mentioned | create ₹20 → ₹5; fetch ₹35 → ₹28; Search API ₹0.25 | Transcript |
| CDSL | Promoter | BSE ~15% | 15.00% | Same |
| CDSL | Dividend | ₹12.75 | payout 58% (consistent) | Same |
| CAMS | FY26 revenue / PAT | ~₹1,516 Cr / ~₹476 Cr | ₹1,516 Cr / ₹472 Cr (screener), ₹476.0 Cr attributable | Same; note basis |
| CAMS | M-cap / P/E | ~₹18,600 Cr (Jul-26) / ~40× | **₹16,742 Cr / 33.8×** | Screener |
| CAMS | Yield | "~3 bps" | Asset-based ~2.0 bps; all-MF ~2.35 bps [E] | Deck-derived |
| CAMS | AUM serviced / share | ~₹55 lakh Cr / ~68% | ₹55.9 Tn ex-FoF (Q1 FY27) / **67.2%**; ₹56.59 Tn incl. FoF (Q4 FY26) | Deck |
| CAMS | FY26 AUM growth | ~21% | Not verifiable; Q1 FY27 +14.8% YoY | Flag |
| CAMS | FY27 guidance | "steady ~46.5% margin; <3% yield erosion; non-MF >20%" | Revenue ~13%, EBITDA ~16%, MF ≥12%, non-MF ~20%; Q1 margin 46.4% | Transcript |
| CAMS | Non-MF share | ~15.3% (Q4) | 14.9% (Q1 FY27); FY26 ~14% | Deck |
| CAMS | Dividend | "~₹4/sh final" | FY26 payout 65% (~₹12.5/sh total [E]); Q1 FY27 interim ₹2.50 | Flag |
| CAMS | Q1 FY27 | not covered | Rev ₹395 Cr (+11.5%); EBITDA ₹183 Cr (46.4%); PAT ₹128 Cr (+17.3%); cash ₹971 Cr | Deck |
| KFin | FY26 rev / EBITDA / PAT | ~₹1,301 / ~₹530 / ~₹344 Cr | ₹1,301.5 / ₹529.7 / ₹343.7 Cr | Same |
| KFin | M-cap / P/E | ~₹15,457 Cr / ~45× | **₹14,642 Cr / 41.8×** | Screener |
| KFin | GA stake | ~32% | **14.06% (Sep-26)**; 8.75% sold 20-Aug-26 @ ₹925 | Screener + press |
| KFin | Ascent | "completes the acquisition" | **51% on 13-Oct-25; path to 100% over 5 yrs** | Deck |
| KFin | Domestic MF revenue | ~₹862 Cr (+10.5%) | ₹852.8 Cr | Deck |
| KFin | Issuer revenue | ~₹171 Cr (+10.6%) | ₹153.9 Cr | Deck |
| KFin | International share | "~20% of revenue" (FY26) | 12.2% of FY26; 20.5% of Q1 FY27 | Deck |
| KFin | Global AUM | ~US$360 bn | US$370 bn (at-a-glance); international AAUM US$49.6 bn | Deck — explain both |
| KFin | AIF | ~37%, ~592 funds | 37.3%, 731 funds (757 incl. platform) | Deck |
| KFin | Chairman | Dinesh Khara (stated as already appointed) | V. M. Nair chair until 30-Sep-26; Khara from 1-Oct-26 | Screener announcement |
| KFin | Q1 FY27 | not covered | Rev ₹356.5 Cr (+30%); EBITDA 34.2% (39.4% ex-Ascent); PAT ₹75.2 Cr (−2.6%) | Deck |

## 3.4 Primer issues (format as primer-issues.md)

### From Depositories & Registrars research (2026-10-22, market-infra-industry.md §3.4)

- **cdsl.html — cash & investments impossible:** "~₹2,850 Cr of cash and investments" (snapshot, §06 stat, §08 table, bull case). CDSL's **entire consolidated balance sheet is ₹2,419 Cr (Mar-26)**; screener investments **₹1,487 Cr**; net worth ₹1,960 Cr. Replace with "~₹1.5k Cr of investments (screener, Mar-26); ~₹1.6–1.9k Cr including bank balances [estimate]" until the annual-report figure is pulled. (screener.in/company/CDSL/consolidated/)
- **cdsl.html — valuation stale:** m-cap ~₹28,700 Cr (Jun-26) → **₹25,602 Cr**; P/E ~60× → **54.3× (TTM)**; P/B → 13.1×; price ₹1,225 vs 52-week high ₹1,674 (22-Oct-26, screener).
- **cdsl.html — revenue-mix bars mislabelled/overstated:** "standalone operating revenue by stream" shows issuer ~31%, transactions ~27%, online data ~20%, IPO/CA ~11%, e-CAS ~4%, e-voting ~3%. The company deck gives FY26 **consolidated** income: issuer ₹456 Cr (36.8%), transactions ₹240 Cr (19.4%), online data (CVL) ₹197 Cr (15.9%), IPO/CA ₹159 Cr (12.8%), other income (e-CAS, e-voting, treasury, misc.) ₹186 Cr (15.0%) — total ₹1,238 Cr. Transactions are overstated by ~8 points. (CDSL Q4 FY26 and Q1 FY27 investor presentations.)
- **cdsl.html — "~85%+ of new ones":** incremental account share was **~81–82% in Q1 FY27** (CDSL 58 lakh net adds vs NSDL 12.4 lakh), down ~420 bps since March per an analyst on the Aug-2026 call; NSDL's gross incremental share rose to ~18.7% (from ~17.5%). Update and add the "NSDL fights back for fintech brokers" point.
- **cdsl.html — KRA tariff cut missing (§07 CVL):** SEBI cut KRA charges in Q1 FY27 — **new KYC ₹20 → ₹5 (−75%), fetch ₹35 → ₹28 (−20%)**, plus a new ₹0.25 Search-API charge. CVL revenue still rose 22% to ₹45 Cr in Q1 FY27, but PAT fell 5% to ₹12.1 Cr. Also update CVL records **10 crore+ → 10.62 crore** (Jun-26). (CDSL Q1 FY27 transcript.)
- **cdsl.html — Q1 FY27 omitted (refreshed 13-Jul):** add BO accounts **18.59 Cr**, consolidated total income ₹340.5 Cr (+15%), PAT **₹118 Cr (+16%)**, issuer income +12.3%, treasury/MTM ₹43.8 Cr inside other income; **Q2 FY27 board 31-Oct-2026**.
- **cdsl.html — "only the second [listed depository] in the world":** unverified (CDSL itself says "India's first and Asia-Pacific's first listed depository"). Soften or delete.
- **cdsl.html — "585+ DPs at FY26":** not verified this session (NSDL reports 317 DPs; CDSL's count not in the deck). Verify or remove the number.
- **cdsl.html — NSDL comparison stale:** NSDL is listed (Aug-2025) and now trades at **₹14,413 Cr / 37.1× P/E**, below its ₹800 IPO price — add as the like-for-like valuation comparator. NSDL custody share 85.8%, total-income share 43.2% (NSDL Q1 FY27 deck).
- **cams.html — yield wrong:** "of the order of three paise a year per ₹100" / "~3 bps" blended yield. From the Q1 FY27 deck, **asset-based revenue ≈ 2.0 bps** of AAUM (₹292.7 Cr × 4 ÷ ₹57.33 Tn) and **all MF revenue ≈ 2.35 bps**. Use "about 2–2.5 paise per ₹100 a year".
- **cams.html — valuation stale:** m-cap ~₹18,600 Cr → **₹16,742 Cr**; P/E ~40× → **33.8×**; dividend yield 1.87% (screener 22-Oct-26).
- **cams.html — market share:** ~68% → **67.2%** (Q1 FY27, QAAUM ex-FoF); serviced QAAUM **₹55.9 Tn** (₹57.33 Tn incl. FoF).
- **cams.html — "+21% serviced AUM in FY26":** not supported by disclosed figures (Q1 FY27 YoY +14.8%; Q1 FY26 → Q4 FY26 incl. FoF +14.7% in three quarters). Verify against the Q4 FY26 deck or soften to "mid-to-high teens".
- **cams.html — guidance stale:** replace "FY27 guided steady ~46.5% margin; <3% yield erosion" with the Aug-2026 call: **revenue ~13%, EBITDA ~16%, MF ≥12%, non-MF ~20%**, average headcount −4–5%, yields flat QoQ in Q1 FY27; margin back to 46.4% after FY26's one-time pricing reset (dipped to ~42%).
- **cams.html — Q1 FY27 and non-MF detail omitted:** revenue ₹395 Cr (+11.5%), op. EBITDA ₹183 Cr (46.4%), PAT ₹128 Cr (+17.3%); non-MF +28.4% (CAMSPay +69%, Alternatives +25.6%, KRA −2.6% after ~29% rate revision); CAMSPay now 5.7% of revenue; IFSCA in-principle KRA approval (1-Jul-26); SIFs (11, >₹10k Cr); Fundsnet migration (Sep-26); cash ₹971 Cr; JPMorgan 7.06%; **Q2 results 29-Oct-2026**.
- **cams.html — dividend:** "~₹4/sh final (FY26)" vs screener payout 65% of ₹19.20 EPS (≈₹12.5/sh total for FY26, post-split). Reconcile (interims + final).
- **cams.html — ownership history:** "Warburg Pincus (via Great Terrain) buys ~12.6% from HDFC and NSE for ~₹420 Cr" — not verified; my recollection is that Great Terrain bought a much larger stake (~37%+) from NSE in 2018. Verify against the CAMS RHP (2020) before keeping.
- **kfin-technologies.html — GA stake stale (§03):** "General Atlantic... roughly ~32%" → **14.06% (Sep-26 shareholding, screener)** after block sales of ~5.8% (May-2024), ~10% (May-2025) and **8.75% at ₹925 (~₹1,400 Cr) on 20-Aug-2026**. DIIs now 37.5%. (Business Today 20-Aug-2026; screener.)
- **kfin-technologies.html — Ascent ownership:** "Completes the Ascent Fund Services acquisition" → KFin bought **51% on 13-Oct-2025 with a path to 100% over five years** (Q1 FY27 deck). Mention the deferred obligation (KFin's other liabilities rose to ₹1,041 Cr at Mar-26).
- **kfin-technologies.html — segment values wrong:** domestic MF ~₹862 Cr → **₹852.8 Cr**; issuer solutions ~₹171 Cr → **₹153.9 Cr**; international "~20% of revenue / roughly a fifth" → **12.2% of FY26** (₹158.7 Cr; ~20% only on the Q1 FY27 run-rate); add alternates/PW/PMS ₹73.6 Cr (5.7%) and other allied ₹13.3 Cr. Pie (~66/~20/~13) should read 65.5 / 12.2 / 11.8 / 5.7 / 1.0.
- **kfin-technologies.html — Ascent/EBITDA framing:** add the company's ex-Ascent figures (FY26 EBITDA 43.5%, PAT ₹350 Cr) — Ascent was **PAT-negative** in FY26; Ascent EBITDA margin ~8.4% (Q1 FY27), double digits targeted by FY27-end.
- **kfin-technologies.html — valuation stale:** m-cap ~₹15,457 Cr → **₹14,642 Cr**; P/E ~45× → **41.8×**; 52-week high ₹1,217 (stock −30% from high).
- **kfin-technologies.html — AIF and global metrics:** "~37%, ~592 funds" → **37.3%, 731 funds**; "~US$360 bn serviced" → deck now says **US$370 bn global AUM** and **US$49.6 bn international AAUM** (explain the difference: platform/fund-admin AUM vs AAUM).
- **kfin-technologies.html — chairman:** primer presents Dinesh Khara as chairman during FY26; he **took over on 1-Oct-2026** (V. M. Nair retired 30-Sep-2026).
- **kfin-technologies.html — Q1 FY27 omitted (refreshed 18-Jul):** revenue ₹356.5 Cr (+30.1%), EBITDA ₹122 Cr (34.2%; 39.4% ex-Ascent), PAT ₹75.2 Cr (−2.6%); QAAUM ₹27.3 Tn (32.8% share); guidance 18–20% revenue CAGR, 40–45% EBITDA margin; cash ₹687 Cr; **Q2 results 26-Oct-2026 (call 27-Oct)**.
- **General (all three):** none mentions the **SEBI (Mutual Funds) Regulations 2026 / BER regime effective 1-Apr-2026** (brokerage caps 6 bps cash / 2 bps derivatives; TER unbundling) and its second-order effect on RTA renewals; none mentions the **KRA tariff reset**; market caps are 3–4 months stale (CDSL −11%, CAMS −10%, KFin −5% vs primer figures).

## 3.5 Key source URLs
- **Screener (22-Oct-2026, consolidated):** https://www.screener.in/company/CDSL/consolidated/ · https://www.screener.in/company/CAMS/consolidated/ · https://www.screener.in/company/KFINTECH/consolidated/ · https://www.screener.in/company/544467/consolidated/ (NSDL)
- **CDSL:**
  - Q1 FY27 investor presentation (NSE, 1-Aug-2026): https://nsearchives.nseindia.com/corporate/CDSL_01082026134647_NSEIntimation_InvestorPresentation.pdf
  - Q1 FY27 call transcript (3-Aug-2026): https://nsearchives.nseindia.com/corporate/CDSL_07082026155803_NSEintimationtranscript.pdf
  - Q4 FY26 investor presentation (May-2026): https://nsearchives.nseindia.com/corporate/CDSL_02052026161257_NSEIntimation_InvestorPresentation.pdf
- **CAMS:**
  - Q1 FY27 presentation (revised, 3-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=bb36cffa-352e-463d-b5c9-dc99ff304b8d.pdf
  - Q1 FY27 transcript (4-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6eea256f-e30e-4035-9e58-2533d72b4a3d.pdf
- **KFin:**
  - Q1 FY27 press release + presentation (24-Jul-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=bf87b284-279c-401c-bba4-8f3a494ffb7b.pdf
  - Q1 FY27 transcript (27-Jul-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=41a3ca96-1c84-46c9-a004-8a384facdd01.pdf
  - GA block deal: https://www.businesstoday.in/markets/stocks/story/kfin-tech-shares-rise-as-8-75-stake-worth-rs-1400-crore-changes-hands-in-block-deals-550220-2026-08-20
- **NSDL** Q1 FY27 presentation: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=de31aace-8ba0-402e-ba26-f4fb553b3a02.pdf
- **AMFI** monthly note, March 2026: https://www.amfiindia.com/uploads/AMFI_Monthly_Note_Mar_2026_1f0a1f5c48.pdf
- **AMFI Sep-2026 data (secondary):** https://www.bajajbroking.in/share-market-news/amfi-september-2026-equity-fund-inflows-rise-31percent-mom-to-rupees-38307-crore · https://www.angelone.in/news/mutual-funds/sip-investments-set-new-record-at-32-490-crore-in-september-2026
- **SEBI MF Regulations 2026 (secondary):** https://www.angelone.in/news/market-updates/sebi-s-new-rules-for-mutual-funds-to-be-effective-from-april-1-2026-major-shift-in-expense-ratio
- **CDSL ₹3.50 uniform tariff (secondary, search snippets):** businessworld.in "cdsl introduces uniform tariff of rs 350 per transaction effective 1 oct"; in.benzinga.com (Sep-2024)
- **SEBI F&O study FY26 (secondary, search snippets):** moneylife.in "Retail F&O Traders Lose Rs91,685 Crore in FY26"; angelone.in "sebi report shows over 50 drop in options trading volumes in fy26"
- **Global peer multiples (secondary, search snippets):** multiples.vc (Broadridge, SS&C); opencapital.sh; valueinvesting.io (Computershare)
