# Aerospace & Defence: company packs, batch 3 of 3 (aerospace precision manufacturing & engineering)

Sub-sector: Capital Goods || Aerospace & Defense. Companies: MTAR Technologies, Aequs, Dynamatic Technologies.
Pack compiled 13 Oct 2026. Every m-cap, price, P/E and Book Value was re-pulled from screener.in on **13 Oct 2026** (curl fetch of the consolidated page, prices as screener showed them that day).

**Tags.** [V] = fetched and checked this session. [K] = from memory, with the source named. [E] = my estimate or a figure I derived.

**How the bases are defined**
- **"OP" / EBITDA.** Screener operating profit = revenue minus operating expenses, *excluding* other income. Where the company's own EBITDA is used (investor presentation), I say so; for MTAR they are the same number (₹171.2 cr FY26).
- **"Cash".** Cash and cash equivalents **plus** "bank balances other than cash" (fixed deposits) **plus** current investments (liquid mutual funds) where the company counts them as treasury, from the company's balance sheet. I show screener's "Cash Equivalents" line separately because screener puts mutual funds under "Investments" and often misses deposits.
- **Net debt.** Borrowings (incl. lease liabilities unless stated) minus cash as defined above.
- **EV.** M-cap + borrowings − cash (company basis).
- **Working-capital days.** Screener's "Working Capital Days" and its debtor/inventory days (inventory days on screener are on a **cost-of-goods** basis, so they run much higher than inventory ÷ sales). The company's own NWC days are given next to them.
- **Q2 FY27 (Sep-26 quarter).** **Not out for any of the three on 13 Oct 2026** — the latest quarter on screener is Jun-2026 for all three [V]. MTAR closed its trading window on 23 Sep 2026 (results expected late Oct / early Nov); Dynamatic closed its window on 28 Sep 2026 [V, screener announcement list]. Aequs: no Q2 date seen.
- **Sep-26 shareholding.** Not yet on screener for any of the three; the latest pattern is **Jun-2026** [V].
- **Listing status.** All three are listed on NSE and BSE. No merger/demerger pending. Aequs listed only in Dec 2025 (see §2).

---

## 1. MTAR Technologies Ltd (NSE: MTARTECH · BSE: 543270)

Fetched 13 Oct 2026. Sources:
- screener: https://www.screener.in/company/MTARTECH/consolidated/ (page + schedules API `/api/company/1274841/schedules/`) [V]
- MTAR Investor Presentation, July 2026 (Q1 FY27), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a1cb7bb8-13fd-41c8-9b7d-5e2cb401512f.pdf [V] — contains FY23–FY26 audited consolidated P&L, balance sheet and cash flow
- MTAR Q1 FY27 earnings-call transcript (30 Jul 2026), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=31540446-ebf5-41a7-954a-4a975f0025bd.pdf [V]
- Arihant Capital, MTAR Q1 FY27 result update (31 Jul 2026): https://arihantresearch.arihantcapital.com/Mumbai_Research/MTAR_Technologies_Q1FY27_Result_update.pdf [V]
- Business Today, 30 Jul 2026 (amended PO, share-price move): https://www.businesstoday.in/markets/stocks/story/mtar-technologies-shares-snap-five-session-losing-streak-climb-5-after-q1-results-order-update-546219-2026-07-30 [V]
- Business Today 21 Jul 2026 / Outlook Business (lower circuits, ASM) — search-level only, not fetched [unverified fetch]

### 1.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 580.8 | 676.0 | **876.2** | Company PPT [V]; screener 581 / 676 / 876 [V] |
| Growth YoY | +1.2% | +16.4% | **+29.6%** | [E] calc |
| Gross profit (company basis: revenue − materials − Δinventory) | 278.4 | 334.1 | 417.8 | PPT [V] |
| Gross margin (company) | 47.9% | 49.4% | **47.7%** | PPT [V]. Screener proxy (100 − material cost %) = 48% / 49% / 48% [V] — close here |
| EBITDA (company = screener OP, ex other income) | 112.7 | 120.9 | **171.2** | PPT [V]; screener 113 / 121 / 171 [V] |
| EBITDA margin | 19.4% | 17.9% | **19.5%** | PPT [V] |
| Other income | 5.8 | 5.2 | 23.1 | PPT [V] (FY26 includes treasury gains on the MF book and forex) |
| Finance cost | 22.3 | 22.2 | 29.4 | PPT [V] |
| Exceptional | 0 | 0 | 3.8 (new Labour Codes) | PPT [V] |
| PAT | 56.1 | 52.9 | **94.0** (+77.7%) | PPT [V]; screener 56 / 53 / 94 [V] |
| EPS (₹) | 18.24 | 17.19 | 30.57 | screener [V] |
| ROCE | 11% | 10% | **15%** (screener) / 12.5% (company: EBIT ÷ avg capital employed) | screener ratios [V]; PPT p.30 [V] |
| ROE | ~8.7% | ~7.5% | **12.4%** (screener) / 12.1% (company, avg equity) | screener top ratios [V]; PPT [V] (bar labels, mapping of years to labels [E]) |
| Borrowings (LT + ST) | 190.9 | 177.3 | **369.3** (+ lease 7.3 = 376.6) | PPT balance sheet [V]; screener 191 / 177 / 377 [V] |
| Cash + bank (incl. FDs) | 50.8 | 16.9 | **21.2** (1.0 cash + 20.2 other bank balances) | PPT [V]; screener "Cash Equivalents" 51 / 17 / 21 [V] |
| Liquid mutual funds (current investments) | 0 | 0 | **215.3** | PPT [V]; screener shows it under "Investments" (215) [V] |
| Treasury total (cash + FDs + MF) | 50.8 | 16.9 | **236.5** | [E] sum |
| Net debt (incl. lease) | 140 | 160 | **140** (ex-lease 133) | [E] |
| Net debt / EBITDA | 1.2× | 1.3× | **0.8×** | [E] |
| Net worth | 676.3 | 728.9 | 822.6 | PPT [V] |
| CFO | 57.4 | 101.3 | **196.9** | PPT cash-flow [V]; screener 57 / 101 / 197 [V] |
| Capex (CFI) | −55.6 | −102.7 | −352.6 (incl. ₹215 cr MF purchase) | PPT [V] |
| Dividend | nil | nil | nil | screener payout 0% [V] |

**Valuation on 13 Oct 2026** [V, screener top ratios]

| Metric | Value |
|---|---|
| Price | **₹7,718** |
| M-cap | **₹23,769 cr** (company PPT: ₹23,432 cr on 30 Jun 2026) |
| P/E (TTM) | **175×** (TTM PAT ₹133 cr) |
| Book value / share | ₹267 → **P/B 28.9×** [E] |
| EV | ₹23,769 + 377 − 237 = **₹23,909 cr** [E] |
| EV/EBITDA | **139.7×** FY26 (₹171 cr); **104.9×** TTM OP (₹228 cr); ~63× on FY27 guidance (₹876 cr × 1.8 × 24% = ~₹378 cr) [E] |
| 52-week high / low | ₹8,715 (19 Jun 2026) / ₹1,910 |
| 1-yr price change | **+309%** (screener stock-price CAGR, 1 year) [V] |
| Dividend yield | 0% |

**Price path, Jun–Oct 2026.** Record high ₹8,715 on 19 Jun 2026 → about −34/35% by 21 Jul 2026 after six lower circuits in seven sessions on the Bloom Energy/AI-data-centre sell-off (Bloom stock was down ~38–46% in a month) → ₹5,454 on 31 Jul (Arihant CMP) → **₹7,718 on 13 Oct 2026, +41% off the 31-Jul level and ~11% below the high** [V for the 31-Jul and 13-Oct prices; the July circuit sequence is press-level, BT/Outlook Business search snippets, unverified fetch]. BSE/NSE put the stock under the long-term **ASM** framework (BT 30 Jul 2026 [V]).

### 1.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 | QoQ |
|---|---|---|---|---|---|
| Revenue | **360.7** | 156.6 | **+130.4%** | 306.1 | +17.9% |
| Gross profit | 164.2 | 84.9 | +93.4% | 135.4 | +21.3% |
| Gross margin | 45.5% | 54.2% | −870 bp | 44.2% | +128 bp |
| EBITDA | **85.1** | 28.4 | **+199.7%** | 61.8 | +37.6% |
| EBITDA margin | **23.6%** | 18.1% | +545 bp | 20.2% | +339 bp |
| Other income | 7.9 | 0.6 | | 16.4 | |
| Finance cost | 15.8 | 5.8 | | 9.6 | |
| PAT | **50.2** | 10.8 | **+364.5%** | 44.3 | +13.4% |
| PAT margin | 13.9% | 6.9% | | 14.5% | |

Sources: company PPT p.12 [V]; screener quarters (361 / 85 / 50) [V]; Arihant [V]. Note screener shows Q1 interest ₹16 cr vs ₹6 cr a year ago: gross debt rose to ₹423.6 cr at 30 Jun 2026 (CFO on call) [V].

Q1 segment revenue (₹ cr, PPT [V]): fuel cells/hydel/others 220.8 (61%), products & others 100.4 (28%), A&D 36.4 (10%), civil nuclear 3.2 (1%). Exports 81% [V].

**Q2 FY27:** not out on 13 Oct 2026 (trading window closed 23 Sep 2026) [V].

### 1.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book, 31 Mar 2026 | **₹2,581.9 cr** | PPT [V] |
| Order book, 30 Jun 2026 | **₹5,143.3 cr** (+99% QoQ, +453% YoY) | PPT p.13 [V] |
| Post-Q1 add | Amended PO from the key fuel-cell customer, total **US$324.62 m (~₹3,100 cr)**, **incremental US$85.86 m (~₹820 cr)**, announced 30 Jul 2026; execution "next year" (FY28) | BT 30 Jul 2026 [V]; call transcript [V]. Arihant puts the book "to date" at **₹5,960 cr** (its "INR 59.6bn"; its "INR 514.3bn" is a typo for ₹51.4bn) [V] |
| Order-book cover | **5.9×** FY26 revenue (Jun-26 book); ~**6.8×** on ₹5,960 cr; **3.3×** FY27E revenue (₹1,577 cr on 80% guidance) | [E] |
| Order-book mix, 30 Jun 2026 | Fuel cell/hydel/others **66.7%** (₹3,431 cr), products & others 12.6% (₹648 cr), civil nuclear 13.3% (₹684 cr), A&D **7.4%** (₹381 cr) | PPT [V]; Arihant exhibit [V] |
| FY26 order inflow | **₹2,453.3 cr** (record at the time) | PPT [V] |
| Q1 FY27 order inflow | **₹2,895.1 cr** — highest ever in a quarter, above all of FY26 | PPT [V] |
| Book-to-bill | **2.8×** FY26 (2,453 / 876); **8.0×** Q1 FY27 | [E] |
| FY27 guidance | **Revenue +80%; EBITDA margin 24% ± 100 bp**; mgmt "confident to do better"; NWC target cut to **~100 days** (from 150–175) | MD and CFO on 30 Jul call [V]; PPT p.4 [V] |
| FY28 guidance | None given officially; target **4–5× asset turn** on new capex | Call [V] |
| Medium-term aspirations | Products division **₹1,000 cr** and A&D **₹600–700 cr** revenue in 3–4 years | Arihant concall notes [V] |
| Gross margin (company) | FY26 **47.7%**; Q1 FY27 45.5% (mix shift to assemblies, cable harnesses) | PPT [V] |
| NWC days (company) | **172 days FY26 → 59 days Q1 FY27** (receivables 140 → 82; inventory 208 → 145; current liabilities 176 → 168) | PPT p.14 [V]; ₹70 cr GST refund helped (Arihant [V]) |
| NWC days (screener) | Working-capital days **69** FY26 (168 FY25, 192 FY24) | screener ratios [V]. Screener's 69 is much lower than the company's 172 because it nets ₹253 cr of customer advances (other current liabilities jumped from ₹45 cr to ₹255 cr) [V] |
| Receivable days | **140** FY26 (113 FY25) | screener [V]; company 140 [V] |
| Inventory days | **399** FY26 (cost basis; 369 FY25) | screener [V]; inventory ₹500.5 cr ÷ sales = 208 days [V/E] |
| Customer advances | ₹253 cr at Mar-26 (₹43 cr Mar-25) | screener "Advance from Customers" schedule [V] |
| CFO / EBITDA | **115%** FY26 (196.9 / 171.2); 3-yr FY24–26 **88%** (355.6 / 404.8). Screener's own "CFO/OP" line shows 130% for FY26 (different OP basis) | PPT + screener [V]; [E] ratio |
| Q1 FY27 CFO | ₹247.7 cr in the quarter (CFO statement on call) vs ₹191.7 cr "last year" | Call [V] |
| Cash incl. FDs (company) | **₹21.2 cr** + ₹215.3 cr liquid MFs = ₹236.5 cr at Mar-26; **₹379 cr investments** at Jun/Jul-26 | PPT [V]; call [V] |
| Net debt | **₹140 cr** Mar-26 (0.8× EBITDA) [E]; mgmt: gross debt ₹423.6 cr at 30 Jun 2026, **net ~₹20–45 cr** after ₹379 cr investments | PPT [V]; call [V] |
| Export share | **82% FY26**, 81% Q1 FY27 | PPT p.13 [V]; Arihant quarterly split [V] |
| Top-customer concentration | **Bloom Energy not disclosed by name in numbers** (NDA). Fuel-cell/hydel segment = **70.2% of FY26 revenue** and **66.7% of the Jun-26 order book**; press says Bloom is "more than half" of revenue (BT [V]) and estimates 55–65%. Since fuel-cells dominate that segment and some product revenue also goes to Bloom, **Bloom ~60–70% of FY26 revenue** is my estimate [E]. MTAR "holds a majority share in Bloom's supply chain" (Arihant concall notes [V]); a "Taiwanese player" is the other hot-box source (analyst on call [V]) |
| Capacity / plants | Seven units within 4 km in Hyderabad + a dedicated export unit (screener profile [V]); dedicated aerospace facility commissioned Jan 2025; NADCAP special-process facility (>30 processes) [V, PPT]. Fuel cells: **Phase 1 commissioned; Phase 2 Sep–Oct 2026; Phase 3 "multifold" by Mar 2027**; earlier guided ~20,000 hot boxes/yr capacity (analyst on call, not contradicted) [V]. Greenfield oil & gas / Phase-2 facility to be commissioned Q3 FY27; dedicated data-centre facility planned [V] |
| Utilisation | Not disclosed. Mgmt says execution is capacity-constrained (the ₹3,100 cr order executes in FY28 "depending on how soon we implement our expansion") [V, call] |
| Capex plan | **~₹500 cr over FY27–FY28** (70:30 clean energy : others), funded by internal accruals + debt; ₹35 cr spent in Q1, ₹80 cr capitalised | Call [V]; Arihant [V] |
| R&D | Not separately disclosed in the PPT/call; **unverified** this session (check AR FY26 R&D note) |
| Promoter holding | **29.35%** Jun-26 (30.44% Mar-26; 31.77% Mar-25; 37.26% Mar-24; 50.25% Mar-21) | screener [V] |
| Pledges | Screener shows no pledge note; **not verified** from the SHP filing this session |
| FII / DII / public | 24.80% / 22.35% / 23.51% (Jun-26). FIIs up from 6.74% (Mar-25) and 17.31% (Mar-26); DIIs (mostly MFs) cut from 27.66% to 22.35% in Q1 | screener [V] |
| Shareholders | 2,58,386 (Jun-26) | screener [V] |

### 1.4 Segment mix (₹ cr, consolidated revenue)

| Segment | FY24 | FY25 | FY26 | FY26 share | Q1 FY27 | Q1 share |
|---|---|---|---|---|---|---|
| Clean energy – fuel cells, hydel & others | 351.2 | 416.9 | **615.4** | **70.2%** | 220.8 | 61% |
| Products & others | 108.3 | 147.5 | **134.1** | 15.3% | 100.4 | 28% |
| Aerospace & defence (ISRO, Tejas, MNC aero) | ~64.5 | 93.2 | **103.8** | 11.8% | 36.4 | 10% |
| Clean energy – civil nuclear | 61.9 | 18.4 | **23.6** | **2.7%** | 3.2 | 1% |
| Total | 580.8 | 676.0 | 876.2 | 100% | 360.7 | 100% |

Source: PPT segment slides pp.7–10 [V] (the slides print values in sorted order; I mapped values to years by the printed % shares, so FY24 figures are [E] on mapping, FY25/FY26/Q1 tie to totals [V]).

**Key point for the report:** nuclear is ~3% of **revenue** but 13% of the **order book** (₹684 cr incl. Kaiga 5 & 6's ₹504 cr — the single largest nuclear order). Defence/space is ~12% of revenue and 7% of the book. MTAR is today an **export fuel-cell supplier with a defence/nuclear option**, not a defence company in the HAL/BEL sense.

### 1.5 Ownership

Promoters (PR Reddy, KSN Reddy, PJ Reddy families; MD Parvat Srinivas Reddy) **29.35%**; FIIs 24.80%; DIIs 22.35%; public 23.51% (Jun-26, screener [V]). Promoter stake has fallen ~21 pp since IPO through secondary sales (50.25% Mar-21 → 29.35% Jun-26) [V]. Top holders named in the PPT include Nippon Life MF, HSBC MF, HDFC MF [V].

### 1.6 Capex & guidance (summary)
- FY27: revenue +80% (→ ~₹1,577 cr) and EBITDA margin 24% ±1 pp (→ ~₹380 cr EBITDA) [V guidance; E rupee figures]; H2 to be stronger than H1 [V, call].
- Q1 revenue of ₹361 cr is 23% of the guided FY27 total (~₹1,577 cr); the Q1 run-rate alone annualises to ~₹1,440 cr, so guidance needs only modest sequential growth through H2 [E].
- Capex ~₹500 cr FY27–28; NWC ~100 days by FY27-end [V].

### 1.7 Key contracts / events (dated)

| Date | Event | Value | Source |
|---|---|---|---|
| FY26 (Q4) | Kaiga 5 & 6 (NPCIL) fuel-handling assemblies — single largest nuclear order | ₹504 cr | PPT p.7 [V] |
| Q1 FY27 | Record ₹2,895 cr inflow, mostly fuel cells (clean-energy book ₹3,431 cr) | ₹2,895 cr | PPT [V] |
| Q1 FY27 | SLB data-centre infrastructure first-article order (export) | ₹45 cr (potential 8× repeat) | PPT p.22 [V]; call [V] |
| Jun 2026 | Bloom-linked data-centre scare #1 (Crusoe pause at Wyoming "Project Jade"); stock −12% on 11 Jun, +13% on 12 Jun after Bloom said project on track; MTAR said no customer cut | — | BT 11/15 Jun 2026 search-level [unverified fetch] |
| Jul 2026 | Scare #2: Bloom −38–46% in a month on Oracle-linked project delay; MTAR six lower circuits, −34/35% from high | — | BT 30 Jul [V]; others search-level |
| 30 Jul 2026 | Amended PO from key customer: total US$324.6 m (~₹3,100 cr), incremental US$85.9 m (~₹820 cr) | +₹820 cr | BT [V]; call [V] |
| 2025–26 | AMCA main-landing-gear support-structure test-box order; L1 on a fuselage door assembly; Tejas Mk1A actuator programme qualified (~₹140–150 cr) | — | PPT p.19 [V]; call [V] |
| Ongoing | MNC aerospace: Thales (Z-adapter for Thales Alenia Space), GKN, IAI, Rafael, Elbit — first articles moving to volume ("10–15×" volumes) | — | PPT p.8/19 [V]; call [V] |
| 2026 | PFBR (Kalpakkam) criticality; MTAR supplied "a majority of the critical assemblies for the reactor core" | — | PPT p.17 [V] |
| 6 Oct 2026 | CRISIL ESG rating assigned | — | screener announcement list [V] (rating not read) |

### 1.8 Story bullets
1. **The fuel-cell super-cycle is the whole near-term story.** Bloom's data-centre-led 5 GW Fremont ramp has taken MTAR's clean-energy book from ₹443 cr (Jun-25) to ₹3,431 cr (Jun-26) [V, Arihant/PPT]. Q1 FY27 revenue +130% with EBITDA margin 23.6% shows operating leverage arriving.
2. **Working capital has flipped.** NWC from 172 days (FY26) to 59 days (Q1 FY27) via customer advances (₹253 cr at Mar-26) and better terms; CFO ₹197 cr in FY26 (115% of EBITDA) [V]. This addresses the long-standing bear point (screener inventory days 399).
3. **Defence/aerospace is the diversification, not the driver.** A&D is ~12% of revenue; the upside is volume conversion at MNC primes (Rafael, Elbit, IAI, Thales, GKN), Tejas Mk1A actuators and AMCA structures. Ties to the report's indigenisation and offsets themes.
4. **Valuation already discounts the guidance and more:** 175× TTM P/E, ~140× FY26 EV/EBITDA, ~63× FY27E EBITDA on guidance [E]; the stock recovered most of the July fall within ten weeks.

### 1.9 Risks
- **Single-customer risk:** Bloom ≈ 60–70% of revenue [E]; two Bloom-driven drawdowns in Jun–Jul 2026. Bloom also has a second (Taiwanese) hot-box source.
- **Capacity execution:** the ₹3,100 cr order is for FY28 and depends on Phase 3 commissioning by Mar-27; gross debt rose to ₹424 cr and interest cost nearly tripled YoY in Q1.
- **Gross-margin dilution** from mix (54% → 45.5% YoY) as assemblies/cable harnesses grow.
- **Exchange surveillance (ASM)** and very high free-float churn (FII 6.7% → 24.8% in 15 months).
- Nuclear and defence order timing is lumpy (Mahi Banswara, refurbishments not yet ordered).

---

## 2. Aequs Ltd (NSE: AEQUS · BSE: 544634)

Fetched 13 Oct 2026. Sources:
- screener: https://www.screener.in/company/AEQUS/consolidated/ (page + schedules API `/api/company/1285800/schedules/`) [V]
- Aequs Q4 & FY26 investor presentation (May 2026), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a683efb2-203b-4955-a8ab-3acfffe9ad4e.pdf [V]
- Aequs Q1 FY27 investor presentation (29 Jul 2026), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0e3b0dcb-47ff-48a5-9699-2c34ad3375f2.pdf [V]
- Aequs Q1 FY27 earnings-call transcript (29 Jul 2026), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a9338519-b657-4364-8c1b-c5a22e74e3cf.pdf [V]
- Prospectus (RoC, 8 Dec 2025), SEBI: https://www.sebi.gov.in/sebi_data/attachdocs/dec-2025/1765174487747.pdf [V]
- Safran LTA press release (12 Oct 2026, revised), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=cb12a21f-55b9-4af6-a5f8-2925e39e78eb.pdf [V]
- Ajna Aerospace & Defence rights investment (9 Oct 2026), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=eefd14fa-1129-40f7-989b-8cfdae5366a2.pdf [V]
- Listing day: 5paisa, 10 Dec 2025: https://www.5paisa.com/news/aequs-ipo-listing [V]; Business Standard (₹140 listing, 101.6× subscription) — search snippet only, page returned 403 [unverified fetch]

### 2.1 IPO facts (prospectus [V] unless stated)

| Item | Value |
|---|---|
| Bid/offer period | Anchor 2 Dec 2025; offer **3–5 Dec 2025**; allotment 8 Dec; **listed 10 Dec 2025** on NSE and BSE |
| Price band / offer price | ₹118–124 / **₹124** (face value ₹10; employee discount ₹11) |
| Offer size | **₹921.8 cr** = fresh issue **₹670.0 cr** (5.40 cr shares) + OFS **₹251.8 cr** (2.03 cr shares) |
| Pre-IPO placement | ₹144.0 cr (folded into the ₹670 cr fresh issue size) |
| Selling shareholders | Promoters: Aequs Manufacturing Investments (₹1.2 cr), Melligeri Private Family Foundation (₹16.4 cr). Investors: Amicus Capital PE I LLP (₹92.8 cr), Amicus Capital Partners India Fund I (₹9.4 cr) and Fund II (₹110.1 cr), Vasundhara and Girija Dempo family trusts (₹5.4 cr each), Ravindra Mariwala (₹10.8 cr), Raman Subramanian (₹0.3 cr) |
| Objects (net proceeds + pre-IPO) | Repay/prepay borrowings **₹433.2 cr**; machinery capex (Aequs + AeroStructures Manufacturing India) **₹64.0 cr**; inorganic growth + general corporate purposes **₹125.2 cr** |
| Subscription | **104.3×** overall (QIB 122.9×, NII 83.6×, retail 81.0×) per 5paisa [V]; Business Standard says 101.6× [unverified]. Use 104.3× (final NSE+BSE figure quoted by 5paisa) |
| Listing | Opened **₹140** (+12.9%) on both exchanges; day range ₹135.5–148, VWAP ₹141.3 [V, 5paisa] |
| Promoter holding | Pre-offer ~**64%** (AMIPL 47.16% + MPFF 16.50% + Aravind Melligeri 0.16%); post-offer **~59%** (AMIPL 43.35% at ₹124 + MPFF ~14.9%) [V]. Screener shows 59.08% in Dec-25 [V] |
| Performance since IPO | ₹265 on 13 Oct 2026 = **+114% vs ₹124 issue price**, +89% vs ₹140 listing [E from V prices]; 52-week range ₹113–295 [V] |

### 2.2 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 965 | 924.6 | **1,230.4** | FY26 PPT P&L (₹12,304 mn / ₹9,246 mn) [V]; screener 965 / 925 / 1,230 [V] |
| Growth YoY | +18.8% | −4.2% | **+33.1%** | [E] |
| Aerospace revenue | n/a | 824.6 | **1,046.4** (+27%) | FY26 PPT [V] |
| Consumer revenue | n/a | 100.0 | **184.0** (+84%) | FY26 PPT [V] |
| Gross margin proxy (100 − material %) | 56.8% | 57.6% | **59.8%** | screener expense schedule [V]. Company does not publish a gross-margin line; Q1 FY27 (revenue − consumption) = 57.4% [E from V PPT] |
| EBITDA — **company basis (incl. other income)** | n/a | 108.0 | **154.5** (12.6%) | FY26 PPT [V] |
| Other income | 44 | 34.6 | 65.4 (largely forex) | FY26 PPT [V]; screener 44 / −6 / 69 (screener reclassifies) [V] |
| **Operational EBITDA (ex other income)** | 129 (screener) | ~73 | **~89** (7.2%) | [E] 154.5 − 65.4; screener OP 129 / 79 / **92 (7.5%)** [V] |
| Depreciation | 108 | 103 | 138 | screener [V] |
| Finance cost | 69 | 64 | 94 | screener [V] |
| PBT | −4 | −94 | −71.5 | PPT / screener [V] |
| PAT (consolidated) | −14 | −102.4 | **−113.3** | PPT [V]; screener −14 / −102 / −113 [V]. FY26 includes ₹7.6 cr one-off share-issue and labour-code costs |
| EPS (₹) | −0.26 | −1.76 | −1.69 | screener [V] |
| ROCE | 4% | 1% | **1.7–2%** | screener [V]. Company segment ROCE (EBIT ÷ net capital employed ex cash): aerospace 14% → 20%, consumer −9% → −15% [V, PPT] |
| ROE | n.m. | n.m. | **−10.0%** | screener [V]; company −7.6% (FY26) [V] |
| Borrowings (ex lease) | 292 | 437 | **403.6** (100.2 LT + 303.4 ST) | PPT balance sheet [V]; screener LT+ST 292 / 437 / 403 [V] |
| Lease liabilities | 407 | 348 | **297.3** | PPT [V] |
| Preference capital (in borrowings on screener) | 407 | 0 | 0 | screener [V] |
| Cash + bank incl. FDs | 252 | 79.7 | **356.7** (301.5 cash + 55.2 other bank balances) | PPT [V]; screener "Cash Equivalents" 252 / 80 / 357 [V] — matches |
| Net debt — ex lease | — | 357 | **47** | [E] |
| Net debt — incl. lease | — | 705 | **344** → **net debt/equity 0.23×** (company figure 0.23× [V]) | [E] |
| Net debt / EBITDA | | | **2.2×** on company EBITDA (154.5); **3.9×** on operational EBITDA (~89) — incl. lease | [E] |
| Net worth | 280 | 716 | **1,485.5** (IPO added ~₹900 cr net) | PPT [V]; screener [V] |
| CFO | −19 | 26.1 | **−98.8** | PPT cash flow [V]; screener −19 / 26 / −99 [V] |
| Capex | −265 | −265 | **−341** | PPT [V] |
| Free cash flow | −175 | −239 | **−440** | screener [V] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | **₹265** |
| M-cap | **₹17,779 cr** (67.07 cr shares) |
| P/E | **n.m.** (TTM PAT −₹170 cr) |
| Book value / share | ₹22.2 → **P/B 11.9×** [E] |
| EV | 17,779 + 701 (borrowings + leases) − 357 = **₹18,123 cr** [E] (Mar-26 balance sheet) |
| EV/EBITDA | **117×** FY26 company EBITDA (₹154.5 cr); **~200×** FY26 operational EBITDA (₹89–92 cr); **~240×** TTM screener OP (₹76 cr) [E] |
| EV/Sales | **14.7×** FY26; 13.2× TTM (₹1,370 cr) [E] |
| 52-week high / low | ₹295 / ₹113 |

### 2.3 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 | QoQ |
|---|---|---|---|---|---|
| Revenue | **395.5** | 255.6 | **+55%** | 367.1 | +8% |
| — Aerospace | 322.2 | 230.3 | +40% | 304.0 | +6% |
| — Consumer | 73.4 | 25.3 | +190% | 63.1 | +16% |
| Other income | 6.7 | 12.6 | | 27.9 | |
| EBITDA, company (incl. OI) | 21.5 (5.4%) | 39.9 (15.6%) | −46% | 32.1 (8.7%) | −33% |
| **Operational EBITDA (ex OI)** | **14.8 (3.7%)** | 27.2 (10.6%) | −46% | 4.2 (1.1%) | **3.5×** |
| Aerospace segment EBITDA | 73.1 (22.7%) | 53.9 | +35% | 101.0 (incl. high OI) | |
| Consumer segment EBITDA | **−36.1** | −7.4 | | −47.3 | loss −24% |
| Depreciation | 45.3 | 24.6 | | 45.5 | |
| Finance cost | 18.9 | 10.1 | | 35.8 | |
| PAT | **−53.2** | +3.9 | n.m. | −54.1 (−63.1 ex ₹9 cr exceptional gain) | |
| PAT margin | −13% | +1% | | −14% | |

Sources: Q1 FY27 PPT pp.8–13 [V]; transcript [V]; screener quarters (396 / OP 15 / PAT −53) [V]. The YoY EBITDA fall is partly optical: consumer-electronics start-up costs were **capitalised** in Q1 FY26 and **expensed** in Q1 FY27 (mgmt, PPT p.8 [V]).

**Including JV share** (50% of SQuAD forging JV with Aubert & Duval, API, ACPL; 33% of Ajna): revenue ₹430.1 cr, EBITDA ₹30.7 cr (7%) [V, PPT p.9].

Q1 balance sheet: borrowings ₹485.8 cr (181.8 LT + 304.0 ST), leases ₹287.4 cr, cash + FDs **₹287.7 cr** (234.0 + 53.7) → net debt incl. leases **₹485.5 cr, 0.34× equity** (company 0.34× [V]). Q1 CFO −₹41.4 cr; capex ₹83.0 cr [V, PPT p.14–15].

**Q2 FY27:** not out on 13 Oct 2026 [V, screener].

### 2.4 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Aerospace order book | **US$1,004 m at 30 Jun 2026** (+13% QoQ); US$889 m at 31 Mar 2026 (+28% YoY); US$814 m at Dec-25 | Q1 PPT p.7 [V]; FY26 PPT [V] |
| Order book in ₹ | **~₹9,590 cr** at ₹95.5/$ (the rate in MTAR's 30-Jul-2026 PO disclosure, BT [V]); the primer's "₹7,400 cr" used ~₹83/$ | [E] |
| Order-book cover | **~7.8×** FY26 consolidated revenue; ~**9×** FY26 aerospace revenue (₹1,046 cr) | [E]. Aerospace books are life-of-programme LTAs (requirement-based, no fixed quantities — prospectus risk factor 3 [V]), so "cover" overstates firmness compared with a defence order book |
| Not yet in the book | Two new aerostructures Tier-1 LTAs (Farnborough, Jul-26); Safran A320 wheels LTA (Jul-26, to 2042); Safran LTAs of 12 Oct 2026 (superalloy machining, landing-gear components for A320/A330/A350/B787; work at Hosur) — "reflect in next quarter's order book" | Transcript [V]; Safran PR [V] |
| FY26 order inflow | Not disclosed. Implied ≈ US$313 m (889 − 694 + ~US$118 m aero revenue) | [E] |
| Book-to-bill | **~2.7×** FY26 aerospace; **~4.4×** Q1 FY27 aerospace (≈US$149 m implied inflow vs ≈US$34 m revenue) | [E] |
| FY27 guidance | **Consolidated revenue +45–50%** (→ ₹1,785–1,845 cr); **operational EBITDA to double** (H2-weighted); aerospace revenue **+25–30% at >20% segment EBITDA margin**; **consumer EBITDA breakeven by Q4 FY27**; consumer utilisation 40–50% by Q4 | Transcript (CEO, CFO) [V] |
| Later milestones | **Consolidated PAT breakeven by H1 FY28**; **Vision 2031**: 4–6× revenue over FY26 base, **18–22% EBITDA margin**, ~20% steady-state ROCE | Q1 PPT p.6 [V]; FY26 PPT [V] |
| Net working-capital days (company) | **132 days FY26** (FY25 151; on full-year revenue); 125 days Q1 FY27 (annualised quarter; mgmt said 127 at FY26-end on the same basis) | FY26 PPT p.15 [V]; transcript [V] |
| NWC days (screener) | Working-capital days **49** FY26 (12 FY25) | screener [V] |
| Receivable days | **78** FY26 (62 FY25) | screener [V] |
| Inventory days | **450** FY26 (cost basis; 420 FY25); inventory ₹567 cr = 168 days of sales | screener [V]; PPT [V/E] |
| Payable days | 238 | screener [V] |
| CFO / EBITDA | **FY26 n.m. (−₹99 cr CFO vs ₹92 cr OP = −107%)**; 3-yr FY24–26 **−31%** (CFO −92 vs OP 300, screener basis) | screener [V]; [E] |
| Cash incl. FDs (company) | **₹356.7 cr** (Mar-26); ₹287.7 cr (Jun-26). Peak ₹754 cr just after the IPO (Dec-25 opening cash in Q4 cash flow) | PPT [V] |
| Net debt | ₹47 cr ex-lease / **₹344 cr incl. leases** (Mar-26); ₹485 cr incl. leases (Jun-26) | [E] from PPT [V] |
| Debt reduction | Q4 FY26: repaid ₹252.7 cr of term loans + ₹78.9 cr net short-term; Q1 FY27: redeemed ₹35 cr NCDs but drew ₹110 cr new term loans | PPT cash flow [V]; transcript [V] |
| Export share | **88% FY26** (89% FY25); 88% Q1 FY27 | PPT [V] |
| Segment mix | FY26 revenue: **aerospace 85%** (₹1,046 cr), **consumer 15%** (₹184 cr). Q1 FY27: 81% / 19%. Defence: negligible direct revenue today; the bridge is **Ajna Aerospace & Defence** (UAV JV, 33%) and Safran Electronics & Defense | PPT [V] |
| Top-customer concentration | **Top-5 customer groups 63% of revenue** (Q1 FY27); **top-10 = 88.6% (FY25), 82.5% (H1 FY26)** of revenue. Airbus, Boeing, Safran, Collins named as key customers; average tenure of top-3 groups 15 years. **Airbus's individual share is not disclosed** in the prospectus or PPTs — I could not verify a figure | Q1 PPT [V]; prospectus risk factor 2 [V] |
| Capacity | **4.78 m machining/moulding hours** a year (annualised Q1 FY27); aerospace **2.02 m hours** (largest aero machining capacity in India, per company); **220 aerospace + 218 consumer CNC machines; 172 moulding (80–450 t) + 7 blow-moulding machines**; 2.22 m sq ft; 3,315 workforce | Q1 PPT p.4/23 [V] |
| Utilisation | **Aerospace 70% (India 78%)** in Q1 FY27 (62% / India 70% in FY26); **consumer 22%** (23% FY26) | Q1 PPT p.7 [V]; FY26 PPT [V] |
| Plants | Belagavi aerospace SEZ (India's first precision-engineering SEZ, 2009) incl. SQuAD forging JV (10,000-t press, with Aubert & Duval); Hubballi (consumer electronics, laptop bases and smartwatch enclosures for a "large electronics brand"); Koppal (toy cluster); US and France units | PPTs [V]; prospectus [V] |
| Capex plan | **FY27 ~₹660 cr** (aero + consumer); possible **acceleration of aerospace capex** for new wins. MoUs: **₹1,900 cr Hosur (Tamil Nadu)** integrated aero-engine/landing-gear ecosystem (first facility Sep-27 to Mar-28, revenue from FY29); **₹2,856 cr Karnataka** (consumer/aero expansion) | Transcript [V]; FY26 PPT [V] |
| R&D | Not disclosed as a line; engineering centre tie-up with IIT Dharwad (FY26 PPT) — **unverified** spend |
| Promoter holding | **59.09%** (Jun-26; 59.08% Dec-25 and Mar-26) | screener [V] |
| Pledges | Nil at IPO for the promoters' contribution (prospectus [V]). **But on 9 Oct 2026 promoter Melligeri Private Family Foundation (Mellwood Trustee Services) filed a Reg 31(2) SAST disclosure of a "release of pledge" on 8 Oct 2026 of its entire 10,05,13,070 shares = 14.99% of equity**, described as "for a temporary short period to enable Company to complete certain regulatory requirements"; the annexure shows "already encumbered: Nil" and does not name a lender, and notes 10,04,38,070 of those shares are under the 12-month IPO lock-in. Reading [E]: the shares carried a pledge/encumbrance mark (possibly lock-in-related or lender collateral) that is being lifted temporarily and may be re-created. **Treat promoter encumbrance as up to ~15% of equity (~25% of the promoter stake) until clarified** | BSE filing 9 Oct 2026, https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=415990DE_EA77_4E28_8C57_C40548054898_105118.pdf [V] |
| FII / DII / public / others | 5.17% / 8.85% / 24.62% / 2.29% (Jun-26). DIIs fell from 11.39% (Mar-26) | screener [V] |
| Lock-in | 6-month pre-IPO lock-in ended ~Jun 2026; promoters' 18-month lock-in on the 20% contribution runs to ~Jun 2027 | [E] from prospectus lock-in terms [V] |
| SAST disclosure | See "Pledges" above (Reg 31(2) release-of-pledge filing, 9 Oct 2026) [V] |

### 2.5 Segment / customer mix

| ₹ cr | FY25 | FY26 | Q1 FY26 | Q1 FY27 |
|---|---|---|---|---|
| Aerospace revenue | 824.6 | 1,046.4 | 230.3 | 322.2 |
| Aerospace EBITDA (segment, incl. allocated OI) | 159.8 | 281.3 | 53.9 | 73.1 |
| Aerospace EBITDA margin | 19.4% | 26.9% | 23.4% | 22.7% |
| Consumer revenue | 100.0 | 184.0 | 25.3 | 73.4 |
| Consumer EBITDA | −15.9 | **−78.3** | −7.4 | −36.1 |
| Exports % of revenue | 89% | 88% | 90% | 88% |

Source: FY26 and Q1 FY27 PPTs [V]. (The FY26 aerospace margin is flattered by forex other income allocated to the segment; Q1 FY27's 22.7% is the cleaner read.)

Aerospace products: 5,740 parts (86 added in Q1) across engine systems, structures, actuation, landing systems, interiors and cargo; platforms A220, A320, A330, A350, B737, B767, B777, B787; engines CFM/LEAP qualified [V, PPTs]. Consumer customers named: Mattel, Spin Master, Tramontina, Wonderchef, plus a large consumer-electronics brand [V].

### 2.6 Ownership
Promoter group (Aravind Melligeri via Aequs Manufacturing Investments Pvt Ltd and Melligeri Private Family Foundation) 59.09%. Pre-IPO investors that sold in the OFS: Amicus Capital funds, Dempo family trusts, Ravindra Mariwala; other top-10 pre-IPO holders named in the prospectus include SBI Emergent India Fund and Think India Opportunities Master Fund (prospectus top-10 table [V]). MPFF's 14.99% carries the Oct-2026 pledge-release question (§2.4).

### 2.7 Key contracts / events (dated)

| Date | Event | Source |
|---|---|---|
| 3–10 Dec 2025 | ₹921.8 cr IPO at ₹124; 104× subscribed; listed at ₹140 | prospectus [V]; 5paisa [V] |
| FY26 | MoUs: ₹1,900 cr Hosur aero-engine ecosystem (TN); ₹2,856 cr Karnataka | FY26 PPT [V] |
| Q3 FY26 | Consumer-electronics commercial operations start at Hubballi (laptop bottom bases from 31 Jul 2025; smartwatch enclosures H2 FY26) | prospectus [V]; FY26 PPT [V] |
| Jul 2026 (Farnborough) | LTAs with **two new aerostructures Tier-1 customers**; **Safran Landing Systems A320 wheels** — first Aequs serial contract beyond 15 years (to 2042), 100% Indian value addition from Indian-sourced aluminium | Transcript [V]; Safran PR [V] |
| 30 Jun 2026 | Aerospace order book crosses **US$1 bn** | Q1 PPT [V] |
| 9 Oct 2026 | ₹15.75 cr further rights investment in **Ajna Aerospace & Defence** (UAV JV, incorporated 22 Oct 2025; FY26 revenue ₹0.02 cr, loss ₹0.99 cr, net worth ₹28.8 cr); ₹29.25 cr further calls due within 12 months | BSE filing [V] |
| 12 Oct 2026 | **Long-term supply agreements with Safran** (Landing Systems, Aerosystems, Electronics & Defense — now six Safran entities): superalloy machining, coating and landing-gear assembly for **A320, A330, A350, B787**; major work at the Hosur Aequs Engine Components Ecosystem. Value not disclosed | BSE press release [V] |

### 2.8 Story bullets
1. **Aerospace is a real, profitable, export franchise**: ₹1,046 cr FY26 revenue (+27%), ~23% segment EBITDA margin, 20% segment ROCE, US$1 bn order book and two Safran LTA rounds in three months. It is India's clearest listed play on **Airbus/Boeing India sourcing** and **engine-component localisation** (Hosur).
2. **Consumer is the drag that decides the P&L**: ₹78 cr FY26 segment EBITDA loss at 22–23% utilisation; consolidated operational EBITDA was only 1.1% in Q4 FY26 and 3.7% in Q1 FY27. Consumer EBITDA breakeven by Q4 FY27 and PAT breakeven by H1 FY28 are the dated checkpoints.
3. **The IPO repaired the balance sheet, but cash burn continues**: net debt/equity fell from 0.99× to 0.23× (FY26) and back up to 0.34× (Q1 FY27) with ₹660 cr FY27 capex, negative CFO and Hosur still to fund.
4. **Valuation**: ₹17,779 cr m-cap, 2.1× the IPO price, ~15× EV/Sales and ~117× company-basis EBITDA — far above MTAR or Dynamatic on any profit metric; the market is valuing the aerospace order book and Vision 2031, not current earnings.

### 2.9 Risks
- **Consumer ramp**: utilisation stuck at 22–23% for two quarters; customer-specific consumer-electronics capex (one large brand) is a concentration and obsolescence risk.
- **Customer concentration**: top-5 = 63%, top-10 ≈ 83–89% of revenue; requirement-based contracts with no fixed quantities.
- **Aircraft build rates**: Airbus A320/A350 and Boeing 787 ramps, engine-supply bottlenecks and any Boeing disruption flow straight through.
- **Forex**: 88% exports; other income (forex) swung from ₹27.9 cr in Q4 FY26 to ₹6.7 cr in Q1 FY27 and moves reported EBITDA.
- **Funding**: Hosur (₹1,900 cr MoU) plus Karnataka MoUs far exceed internal accruals; a further equity raise is possible.

---

## 3. Dynamatic Technologies Ltd (NSE: DYNAMATECH · BSE: 505242)

Fetched 13 Oct 2026. Sources:
- screener: https://www.screener.in/company/DYNAMATECH/consolidated/ (page + schedules API `/api/company/865/schedules/`) [V]
- Dynamatic Q1 FY2027 earnings presentation (7 Aug 2026), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=52560acc-c854-48cc-a3a8-46bc7acaa248.pdf [V]
- Dynamatic Q4 & FY2026 earnings presentation (20 May 2026; audited P&L, balance sheet, cash flow), BSE: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b5157e00-bb84-4440-8846-8a621fbbe1a8.pdf [V]
- Dynamatic Annual Report 2025-26, BSE: https://www.bseindia.com/xml-data/corpfiling/AttachHis/9c8916af-1a68-4687-9064-90a1e5d5fdc0.pdf [V] (segment, geography, major-customer notes)
- Dynamatic news release, Falcon 6X rear fuselage (4 Dec 2025): https://news.dynamatics.com/?p=1213 [V]
- machinist.in, L&T–BEL AMCA consortium (4 Nov 2025): https://machinist.in/2025/11/dynamatic-technologies-named-exclusive-partner-in-lt-bel-5th-generation-fighter-aircraft-programme-for-india/ [V]
- The Defense News, AMCA RFP to three shortlisted bidders (27 May 2026): https://www.thedefensenews.com/India-Issues-AMCA-Stealth-Aircraft-RFP-to-Three-Shortlisted-Bidders/ [V]
- No Q1 FY27 earnings-call transcript exists on screener/BSE for Dynamatic (the company publishes presentations, not regular calls) [V, screener document list]

### 3.1 Standardised financials (consolidated, ₹ cr)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 1,429 | 1,403.8 | **1,621.3** | FY26 PPT (₹16,213.4 mn / ₹14,038.0 mn) [V]; screener 1,429 / 1,404 / 1,621 [V] |
| Growth YoY | +8.6% | −1.8% | **+15.5%** | [E]; constant-currency growth is lower (rupee weakened sharply vs EUR/GBP/USD in FY26–27) |
| Gross margin (company: revenue − materials − Δinventory) | n/a | 53.4% | **49.8%** | FY26 PPT [V]; screener proxy (100 − material %) 53% / 53% / 50% [V] |
| EBITDA (company, ex other income) | 162 (screener) | 158.3 | **182.7** | FY26 PPT [V]; screener OP 162 / 161 / 186 [V] (screener nets small items differently) |
| EBITDA margin | 11.3% | 11.3% | **11.3%** | PPT [V] |
| Other income | 105 (incl. one-off gains) | 22.8 | 29.7 | PPT [V]; screener shows FY26 other income as 2 because it nets the ₹27.6 cr exceptional charge into it [V/E] |
| Depreciation | 66 | 69.3 | 76.6 | PPT [V] |
| Finance cost | 65 | 56.7 | 58.0 | PPT [V] |
| Exceptional items | 0 | 0 | **−27.6** (Q3 ₹14.3 cr + Q4 ₹6.4 cr + earlier ₹6.9 cr) | PPT [V] |
| PAT — reported | 122 | 43.0 | **32.4** (−24.7%) | PPT [V]; screener 122 / 43 / 32 [V] |
| PAT — normalised (ex exceptionals) | — | 43.0 | **60.0 (+39.4%)** | PPT [V] |
| EPS reported / normalised (₹) | 192.1 | 63.4 | 47.7 / 88.3 | PPT [V]; screener [V] |
| ROCE | 10% | 9% | **10%** (screener; 10.2% top ratio) | screener [V] |
| ROE | — | ~6% | **6.7%** (screener top ratio, reported PAT) | screener [V] |
| Borrowings (ex lease) | 458 | 451.0 | **529.4** (249.4 LT + 280.0 ST) | PPT capital-structure slide [V]; screener LT+ST 458 / 451 / 529 [V] |
| Lease liabilities | 127 | 120.2 | **108.5** | PPT [V]; screener [V] |
| Cash + bank incl. FDs | 61 | 45.9 | **67.7** (52.5 cash + 15.1 other bank balances) | PPT balance sheet [V]; screener "Cash Equivalents" 61 / 46 / 68 [V] — matches |
| Net debt — ex lease (company definition) | ~397 | 405.1 | **461.4** | PPT [V] |
| Net debt / EBITDA — company | — | 2.6× | **2.5×** (Jun-26: **2.4×**) | PPT [V] |
| Net debt incl. leases / EBITDA | — | 3.3× | **3.1×** | [E] (569.9 / 182.7) |
| Net debt / equity | — | 0.6× | **0.6×** | PPT [V] |
| Net worth | 668 | 717.5 | **793.5** | PPT [V] |
| CFO | 97 | 144.3 | **95.3** | PPT cash flow [V]; screener 97 / 144 / 95 [V] |
| Capex | — | 66.6 | **66.0** (cash); AR: ₹60.0 cr physical + ₹24.6 cr intangibles | PPT [V]; AR FY26 directors' report [V] |
| Interest coverage (EBITDA ÷ interest) | — | 2.8× | 3.1× (Q1 FY27: 2.4× on company's "operating profit ÷ interest" definition shown in its chart) | [E]; PPT [V] |
| Dividend payout | 6% | 3% | 21% | screener [V] |

**Valuation on 13 Oct 2026** [V, screener]

| Metric | Value |
|---|---|
| Price | **₹13,985** |
| M-cap | **₹9,482 cr** (67.91 lakh shares, AR [V]) |
| P/E | Screener top ratio **162×** [V]. My cross-checks: **~220×** on TTM reported consolidated PAT (₹43 cr); **~135×** on TTM normalised PAT (₹70 cr = FY26 normalised 60.0 − Q1 FY26 10.8 + Q1 FY27 20.8) [E]. Screener's 162× appears to sit on a different (likely standalone) EPS base — state the basis when quoting |
| Book value / share | ₹1,251 → **P/B 11.2×** [E] |
| EV | 9,482 + 638 − 68 = **₹10,052 cr** [E] |
| EV/EBITDA | **55×** FY26 (₹182.7 cr); **50×** TTM (company LTM EBITDA ₹200.0 cr at Jun-26, PPT [V]) [E] |
| 52-week high / low | ₹14,409 / ₹7,628; **+80% in one year** (screener stock CAGR 1 yr) [V] |
| Dividend yield | 0.07% |

### 3.2 Q1 FY27 (Jun-26 quarter, consolidated, ₹ cr)

| Item | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 | QoQ |
|---|---|---|---|---|---|
| Revenue | **424.8** | 370.9 | **+14.5%** (constant currency **+3.9%**) | 433.2 | −1.9% |
| — Aerospace | 202.3 | 172.9 | +17.0% | 210.2 | −3.8% |
| — Hydraulics | 116.0 | 106.1 | +9.4% | 131.2 | −11.6% |
| — Metallurgy | 106.3 | 91.9 | +15.7% | 91.6 | +16.1% |
| Gross margin (company) | 51.1% | 50.2% | | 49.3% | |
| EBITDA (ex OI) | **55.1** | 37.8 | **+45.9%** | 48.6 | +13.4% |
| EBITDA margin | **13.0%** | 10.2% | +280 bp | 11.2% | |
| — Aerospace EBITDA / margin | 48.2 / 23.8% | 40.0 / 23.1% | +20.5% | 44.3 / 20.7% | |
| — Hydraulics EBITDA / margin | 14.5 / 12.5% | 3.6 / 3.4% | ~4× | 10.8 / 8.2% | |
| — Metallurgy EBITDA / margin | 4.0 / 3.7% | 1.7 / 1.9% | | 3.2 / 3.4% | |
| Other income | 5.9 | 10.1 | | 6.9 | |
| Finance cost | 14.9 | 14.1 | | 14.5 | |
| PAT | **20.8** | 10.8 | **+93%** | 12.6 reported / 19.0 normalised | |
| PAT margin | 4.9% | 2.9% | | | |

Sources: Q1 FY27 PPT [V]; screener quarters (425 / 55 / 21) [V]. **Forex flattered the quarter**: ₹39.3 cr of the revenue gain and ₹5.1 cr of the EBITDA gain came from the weaker rupee (EUR/INR 109.98 vs 96.58, GBP/INR 126.95 vs 113.52, USD/INR 94.63 vs 85.32) [V, PPT]. Note segment EBITDAs sum to more than group EBITDA (unallocated corporate costs).

Jun-26 balance sheet (PPT [V]): total debt ₹527.3 cr, cash ₹54.1 cr, net debt **₹473.1 cr**, leases ₹104.3 cr, net worth ₹818.5 cr; net debt/LTM EBITDA **2.4×**.

**Q2 FY27:** not out on 13 Oct 2026; trading window closed 28 Sep 2026 [V].

### 3.3 Native KPIs

| KPI | Value | Source / basis |
|---|---|---|
| Order book | **Not disclosed.** Neither the FY26/Q1 FY27 presentations nor the FY26 annual report give a rupee order book; AR says only that the DML "order book … looks positive and in process of expanding steadily" and that key platforms (A220, A330, Falcon 6X, D328eco) have "a strong order book" | AR FY26 [V]; PPTs [V] |
| OB cover / book-to-bill / FY26 inflow | **n.a. (not disclosed)** — the aerospace business runs on life-of-programme LTAs (shipsets × rate), not a booked backlog | [V] absence |
| FY27 guidance | **None numeric.** Qualitative: aerospace "well positioned for strong growth"; hydraulics margin recovery from UK restructuring; metallurgy "early signs of demand recovery" | Q1 FY27 PPT [V] |
| Gross margin (company) | **49.8% FY26** (53.4% FY25); 51.1% Q1 FY27 | PPT [V] |
| NWC days (screener) | **42** FY26 (34 FY25, 30 FY24) | screener [V] |
| Receivable days | **72** FY26 (75 FY25) | screener [V]; 318.5 / 1,621 × 365 = 72 [E] |
| Inventory days | **185** FY26 (cost basis; 194 FY25); inventory ₹411.8 cr = 93 days of sales | screener [V]; PPT [V/E] |
| Payable days | 115 | screener [V] |
| CFO / EBITDA | **52% FY26** (95.3 / 182.7); FY25 91%; 3-yr FY24–26 **66%** (CFO 336 / screener OP 509) | PPT + screener [V]; [E] ratio. FY26 hit by ₹58 cr inventory build and ₹30 cr receivables |
| Cash incl. FDs (company) | **₹67.7 cr** (Mar-26); ₹54.1 cr (Jun-26) | PPT [V] |
| Net debt | **₹461 cr** ex lease (2.5×), ₹570 cr incl. lease (3.1×) at Mar-26; ₹473 cr ex lease (2.4×) at Jun-26 | PPT [V]; [E] |
| Export / overseas share | **70% of FY26 revenue billed to customers outside India** (Europe ₹561 cr, UK ₹310 cr, US ₹151 cr, Canada ₹80 cr, RoW ₹31 cr; India ₹488 cr = 30%). FY25: 75% overseas. Note this includes local sales of the German foundry and UK units, so it is not the same as "exports from India" | AR FY26 geographic note [V] |
| Segment mix | FY26: **aerospace 47.8%** (₹775.6 cr), hydraulics 30.1% (₹487.4 cr), metallurgy 22.1% (₹358.1 cr). Q1 FY27: 48% / 27% / 25%. Defence (P-8I, F-15 parts, HAL, Dynauton UAS, AMCA consortium) sits inside "aerospace" and is not split out | FY26 PPT [V]; AR [V] |
| Segment EBITDA FY26 | Aerospace ₹177.6 cr (**22.9%**, down from 26.0%); hydraulics ₹35.9 cr (7.4%); metallurgy ₹2.8 cr (0.8%) | FY26 PPT [V] |
| Top-customer concentration | **One customer ≥10% of consolidated revenue: ₹228.8 cr = 14.1% of FY26** (₹214.6 cr = 15.3% FY25) — not named; most likely the Airbus group (directly and via the former Spirit sites) [E]. Standalone: four customers ≥10% (₹151.9 / 136.0 / 103.1 / 91.8 cr) | AR FY26 notes [V] |
| Capacity / plants | **8 facilities**: Bangalore (Dynamatic Aerotropolis at KIADB Aerospace Park; three hydraulics plants making ~1 m pumps a year; Dynamatic Manufacturing Ltd (DML) detail-parts unit, ~250,000 parts a year), Swindon and Bristol (UK), Schwarzenberg (Eisenwerk Erla, Germany). D328eco rear-fuselage jigs and assembly line "nearing completion" at Aerotropolis | PPT [V]; AR [V] |
| Utilisation | Not disclosed (AR mentions improving utilisation at Erla) | AR [V] |
| Capex plan | No multi-year figure disclosed. FY26 actual ₹84.6 cr (₹60.0 cr physical + ₹24.6 cr intangibles/IP; aerospace ₹30.5 cr, metallurgy ₹22.4 cr, others ₹26.7 cr) | AR FY26 [V] |
| R&D | DSIR-recognised R&D units; in-house design IP for all hydraulics products; ₹35.4 cr of "intangible assets under development" at Mar-26 (₹10.7 cr Mar-25). Revenue R&D spend not extracted (AR table did not parse) — **unverified** | PPT [V]; balance sheet [V] |
| Market position (hydraulics) | ~**70%** of India's organised tractor-pump market (company, Q1 FY27 PPT [V]); screener's profile says 80% India / 38% global (older company claim) |
| Promoter holding | **41.50%** (Jun-26; 41.87% until Dec-25) | screener [V]; PPT [V] |
| Pledges | Not shown on screener; **not verified** this session from the SHP filing |
| FII / DII / AIF / public | FII 10.26%, DII 15.86% (screener, incl. AIFs 7.5%) / public 32.38% (Jun-26). Company split: FIIs 10.7%, DIIs 8.4%, AIFs 7.5%, bodies corporate 5.9%. Named holders: HDFC MF, Abakkus, Al Mehwar (Noosa), Alchemy, Madhusudan Kela group, Carnelian | screener [V]; PPT [V] |

### 3.4 Programmes / customers (aerospace)

| Programme | What Dynamatic does | Status | Source |
|---|---|---|---|
| Airbus A320 family | Flap-track beams; **>9,000 single-aisle shipsets delivered**, supplied to Airbus through Spirit AeroSystems (now Prestwick AeroSystems is a named customer); redesigned beam in series production on >1,000 aircraft | Rate-driven | AR FY26 [V]; PPT customer list [V] |
| Airbus A330 | **"Tier-1 global single-source"** manufacturer of A330 flap-track beams; "largest single-source manufacturer of flap-track beams in the world for Airbus" | Rate-driven | AR FY26 [V] |
| Airbus A220 | All eight door types (passenger, service, cargo, over-wing exit) — first complete shipset delivery-ready ahead of schedule in FY26; escape-hatch door order from Stelia/Airbus Atlantic (2022) | Ramp | FY26 PPT [V]; AR [V]; 2022 BS report search-level |
| Boeing | P-8 and F-15 programmes "at a steady pace"; CH-47 Chinook aft-pylon and cargo-ramp assemblies (PPT: "ramp structure assembly", "AFT pylon assembly") | Steady | AR FY26 [V]; PPT [V]; Chinook name [K, Boeing/Dynamatic releases] |
| Dassault Falcon 6X | Rear fuel tank (first delivered 4 Dec 2024, in serial production) and, from **4 Dec 2025, complete rear fuselage (Section 5)** | Industrialising | Dynamatic news 4 Dec 2025 [V]; AR [V] |
| Deutsche Aircraft D328eco | Rear-fuselage assembly jigs and assembly line | Pre-production | AR FY26 [V] |
| Bell Textron | Detail parts and assemblies (DML) | Ramp | AR FY26 [V] |
| Hutchinson | MoA for aerospace composites (FY26) | Early | FY26 PPT [V] |
| **Dassault Rafale fuselage** | **Not Dynamatic.** Rafale fuselage production-transfer agreements (Jun 2025) are with **Tata Advanced Systems**; no Dynamatic Rafale fuselage contract found | — | search results incl. Dynamatic/Dassault releases [unverified fetch for the Tata PTAs; K: Dassault release, Jun 2025] |
| AMCA (5th-gen fighter) | "Exclusive partner" in the **L&T–BEL consortium** (4 Nov 2025); consortium is one of **three shortlisted bidders** (with Tata Advanced Systems, and Bharat Forge–BEML–Data Patterns) that received the RFP on 27 May 2026 for 5 prototypes + 1 structural test specimen (~₹15,000 cr development phase); L1 selection and contract negotiation expected by early 2027 | Bid stage | machinist.in [V]; The Defense News [V] |
| Dynauton Systems (UAS) | Kaatil loitering munition, Patang tethered UAS, counter-drone portfolio (user trials) | Pre-revenue / trials | AR FY26 [V] |

DML (wholly owned) FY26 revenue ₹120.9 cr (+82%), aerospace +42.5% on Dassault, Bell, Prestwick AeroSystems and Airbus Aerostructures GmbH volumes [V, AR].

### 3.5 Ownership
Promoter group led by Dr Udayant Malhoutra (CEO & MD) **41.50%**; board has 5 of 8 independent directors incl. Air Chief Marshal V.R. Chaudhari (Retd.) [V, PPT/AR]. Promoter stake fell from 50.2% (FY17–18) through the 2023 preferential allotment and small sales [V, screener].

### 3.6 Story bullets
1. **The private aerostructures incumbent**: A330 single-source flap-track beams, A320 beams (>9,000 sets), all A220 doors, Falcon 6X rear fuselage, Boeing P-8/F-15/Chinook work — the most diversified Western-OEM aerostructures book among listed Indian privates. Aerospace was 48% of FY26 revenue at 23–24% EBITDA margin.
2. **Defence optionality is real but unbooked**: a seat in the L&T–BEL AMCA consortium (decision due ~early 2027) and Dynauton UAS/loitering munitions; nothing material in revenue yet. This is the stock's link to the report's AMCA/indigenisation theme, not Operation Sindoor emergency buys.
3. **FY26 profit "fall" was an exceptional-item story**: reported PAT −25% to ₹32 cr, but normalised PAT +39% to ₹60 cr; Q1 FY27 PAT doubled to ₹20.8 cr on a 13% EBITDA margin as UK hydraulics restructuring paid off.
4. **Leverage is moderate, not extreme**: company net debt/EBITDA 2.5× (Mar-26) → 2.4× (Jun-26); 3.1× including leases. The constraint is that cash conversion is weak (CFO/EBITDA 52% FY26), so deleveraging is slow.

### 3.7 Risks
- **Forex-inflated growth**: Q1 FY27 constant-currency revenue growth was only 3.9%; 70% of revenue is billed overseas.
- **Metallurgy (Eisenwerk Erla, Germany)**: ~0–4% EBITDA margin, tied to German auto/turbocharger demand and energy costs.
- **Customer concentration**: one customer = 14% of revenue; Airbus rate decisions and the Spirit/Prestwick ownership change matter.
- **Valuation**: 50–55× EV/EBITDA and ~135× normalised P/E on a business earning ~7% ROE.
- **AMCA**: the L&T–BEL bid may lose to Tata or Bharat Forge; even a win yields prototype work (2028–29), not serial revenue before the mid-2030s.

---

## 4. Summary grid (consolidated; ₹ cr unless stated; m-cap/P/E/P/B on 13 Oct 2026)

| Metric | MTAR Technologies | Aequs | Dynamatic Technologies |
|---|---|---|---|
| FY26 revenue | 876.2 | 1,230.4 | 1,621.3 |
| Growth YoY | +29.6% | +33.1% | +15.5% |
| FY26 EBITDA (basis) | 171.2 (ex OI = screener OP) | 154.5 company (incl. OI); ~89–92 ex OI | 182.7 (ex OI) |
| EBITDA margin | 19.5% | 12.6% company / ~7.3% ex OI | 11.3% |
| PAT | 94.0 | −113.3 | 32.4 reported / 60.0 normalised |
| Cash incl. FDs (company) | 21.2 (+215.3 liquid MF = 236.5) | 356.7 | 67.7 |
| Net debt (ex lease) | 133 (140 incl. lease) | 47 (344 incl. lease) | 461 (570 incl. lease) |
| ND/EBITDA | 0.8× | 2.2× company EBITDA incl. lease (3.9× ex OI) | 2.5× (3.1× incl. lease) |
| M-cap | 23,769 | 17,779 | 9,482 |
| P/E (TTM) | 175× | n.m. (loss) | 162× screener; ~135× normalised; ~220× reported |
| P/B | 28.9× | 11.9× | 11.2× |
| EV/EBITDA (FY26) | ~140× (105× TTM) | ~117× company / ~200× ex OI | ~55× (50× TTM) |
| ROCE (screener) | 15% | 1.7% | 10% |
| Order book (date) | ₹5,143 cr (30 Jun 2026); ~₹5,960 cr incl. 30-Jul add | US$1,004 m ≈ ₹9,590 cr (30 Jun 2026) | Not disclosed |
| OB / FY26 revenue | 5.9× (6.8× incl. add) | ~7.8× (programme LTAs) | n.a. |
| Book-to-bill | 2.8× FY26; 8.0× Q1 FY27 | ~2.7× FY26 aero [E]; ~4.4× Q1 [E] | n.a. |
| NWC days | Company 172 (FY26) → 59 (Q1 FY27); screener 69 | Company 132 (FY26), 125 (Q1); screener 49 | Screener 42 |
| Receivable / inventory days (screener) | 140 / 399 | 78 / 450 | 72 / 185 |
| CFO / EBITDA FY26 (3-yr) | 115% (88%) | n.m. −107% (−31%) | 52% (66%) |
| Export share | 82% | 88% | 70% billed overseas (incl. foreign subsidiaries) |
| Top-customer % | Bloom ~60–70% [E]; fuel-cell segment 70% of revenue | Top-5 63%, top-10 ~83–89%; Airbus % not disclosed | Customer 1 = 14.1% |
| Promoter % (Jun-26) | 29.35% | 59.09% (MPFF 14.99% pledge-release filing, Oct-26) | 41.50% |
| Q1 FY27 revenue / EBITDA margin / PAT | 360.7 (+130%) / 23.6% / 50.2 | 395.5 (+55%) / 5.4% company, 3.7% ex OI / −53.2 | 424.8 (+14.5%) / 13.0% / 20.8 |
| FY27 guidance | Revenue +80%, EBITDA margin 24% ±1 pp | Revenue +45–50%, operational EBITDA ×2, consumer EBITDA breakeven Q4 FY27 | None numeric |

---
