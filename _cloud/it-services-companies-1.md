# IT Services — Company packs, batch 1 (TCS, Infosys, HCLTech, Wipro, Tech Mahindra, LTM)

Prepared 2026-10-13 (company-research subagent, batch 1). Tags: **[V]** fetched this session (URL given), **[K]** from memory with source named, **[E]** estimate / derived by me (formula shown).

**Sources used for every pack**
- screener.in consolidated pages fetched via curl on **2026-10-13 ~15:08 UTC** (intraday/last-close prices as shown on the page at that time): `https://www.screener.in/company/<NSE>/consolidated/` [V]. Screener "Operating Profit" = revenue − expenses *before* other income and depreciation (i.e. an EBITDA proxy, includes some one-offs that companies class as exceptional) — **not** company EBIT. Screener "Borrowings" include lease liabilities for all six IT names (none has meaningful financial debt).
- Exchange filings on bseindia.com (`https://www.bseindia.com/xml-data/corpfiling/AttachLive/<id>.pdf`) — press releases, investor decks and earnings-call transcripts, fetched and parsed with pdftotext [V].
- tcs.com / BSE API / nseindia.com returned "Access Denied" (Akamai) — TCS's own Q2 FY27 fact sheet could not be fetched; TCS Q2 FY27 KPIs are taken from fetched secondary reports of the results release (named inline) and flagged.

**Results calendar status (as of 2026-10-13):** Q2 FY27 (Sep-26 quarter) is **out** for TCS (8 Oct 2026) and HCLTech (12 Oct 2026). Not yet out: Wipro (15 Oct, per BSE intimation 7 Oct), Tech Mahindra (15 Oct, intimation 2 Oct), LTM (16 Oct, board-meeting intimation 8 Oct), Infosys (Q2 date not in the last-5 BSE announcements; typically mid-Oct). For these four, the latest reported quarter is Q1 FY27 (Jun-26).

**Sector event, Oct 2026:** US Department of Labor suspension of the PERM (green-card labour certification) programme — TCS (9 Oct), Infosys (10 Oct) and Wipro (13 Oct) each filed BSE statements saying they expect no material impact (BSE filings, fetched [V]).


---

## 3. HCL Technologies Ltd (NSE: HCLTECH · BSE: 532281) — tier-1, #3 by revenue

**Status:** listed, no merger/demerger pending. CEO & MD C. Vijayakumar; CFO Shiv Walia; Chairperson Roshni Nadar Malhotra. **Latest reported quarter: Q2 FY27 (Sep-26), results 12 Oct 2026** (BSE filing "Investor Release Q2 FY 2027", https://www.bseindia.com/xml-data/corpfiling/AttachLive/8fd9d38c-edbc-45b0-b23d-2263edfffc06.pdf [V]).

### 3.1 Standardised financials (screener.in consolidated, fetched 2026-10-13 [V] — https://www.screener.in/company/HCLTECH/consolidated/)
| ₹ cr | FY25 | FY26 | YoY | TTM (to Sep-26) |
|---|---|---|---|---|
| Revenue | 1,17,055 | **1,30,144** | +11.2% | 1,38,052 |
| Screener operating profit (EBITDA proxy) | 25,504 (22%) | 26,752 (20.6%) | +4.9% | 28,433 (20.6%) |
| Other income | 2,485 | 574 | | 346 |
| Depreciation | 4,084 | 4,355 | | 4,270 |
| PAT | 17,399 | **16,652** | −4.3% | 18,330 |
| EPS ₹ | 64.08 | 61.33 | | 67.51 |
| CFO / FCF (screener) | 22,261 / 21,178 | 19,975 / 18,576 | | |
| ROCE (screener) | 32% | 30% | | — |
| Dividend payout (screener) | 94% | 88% | | |

- **Basis notes:** FY26 PAT includes the one-time **New Labour Codes** charge (company: ₹956 cr at EBIT / ₹719 cr at NI in Q3 FY26) — company-reported FY26 NI ex-labour-codes = **$1,959M (13.3% margin)**, incl. = $1,877M (Q4 FY26 call transcript, BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/48f5d6fd-b499-45da-bc6d-2e0439495ec2.pdf [V]). Screener's "operating profit" FY26 20.6% ≈ company EBITDA; company **EBIT FY26 = $2,526M = 17.2%** ex labour codes (17.9% also ex-restructuring); incl. labour codes $2,417M ≈ 16.5% [V, same transcript].
- **Market data (screener, 2026-10-13):** price ₹1,326; **m-cap ₹3,60,717 cr**; P/E 19.0x (TTM); book value ₹280 → **P/B 4.7x** [E: 1,326/280]; 52-wk H/L ₹1,780/₹1,030; dividend yield 4.07%; ROCE 30.4%, ROE 23.8% [V].
- **Balance sheet / cash (Sep-26):** screener borrowings ₹6,013 cr — but company splits this as **borrowings ₹954 cr + lease liabilities ₹5,059 cr**. Screener "investments" ₹4,467 cr **misses fixed deposits**: company **gross cash ₹25,457 cr ($2,656M) = cash 10,046 + FDs 12,464 + investment securities 2,947; net cash ₹24,503 cr ($2,556M)** (down from ₹33,288 cr at Mar-26 after ₹3,742 cr acquisition payments and ₹3,245 cr dividends in Q2) [V, investor release].
- **EV/EBITDA [E]:** EV = 3,60,717 − 24,503 (company net cash) + 5,059 (leases) = ₹3,41,273 cr; ÷ TTM screener EBITDA ₹28,433 cr = **12.0x** (11.8x ex-leases).

### 3.2 Native IT KPIs (company investor releases [V])
| Quarter | Rev $M | QoQ cc | YoY cc | Services YoY cc | EBIT % (reported) | Restructuring in EBIT | Bookings (new-deal TCV) |
|---|---|---|---|---|---|---|---|
| Q2 FY26 (Sep-25) | 3,644 | +2.4% | +4.6% | +5.5% | 17.5% | 55 bps | ~$2.57bn [E: Q2 FY27 $3.258bn ÷ 1.27 per "up 27% YoY"] |
| Q3 FY26 (Dec-25) | 3,793 | +4.2% | +4.8% | +5.0% | 18.6% ex labour codes (incl: ~16%) | 81 bps | ~$3.0bn [K: HCL Q3 FY26 release, Jan 2026] |
| Q4 FY26 (Mar-26) | 3,682 | −3.3% | +2.4% | +4.2% | 16.5% | 122 bps | $1.9bn [V, Q4 call] |
| Q1 FY27 (Jun-26) | 3,650 | −0.5% | +2.6% | +3.5% | 16.9% | 62 bps | $2.407bn (record Q1; excl. a Fortune Global 50 mega-deal signed early July) [V, Q1 deck/call] |
| **Q2 FY27 (Sep-26)** | **3,724** | **+2.3%** | **+2.6%** | **+4.0%** | **18.2%** (19.0% ex-restructuring) | 84 bps | **$3.258bn** (+27% YoY; H1 bookings a record) |
- **FY26 totals:** revenue **$14,664M, +3.9% cc** (Services $13,315M +4.8%; HCLSoftware $1,395M −4.1%); EBIT 17.2% (17.9% ex-restructuring); **net-new TCV $9.3bn (flat on FY25)**; Advanced-AI annualised revenue $620M [V, Q4 FY26 call].
- **Q2 FY27 INR P&L:** revenue ₹35,620 cr (+3.0% QoQ, +11.5% YoY); EBITDA ₹7,477 cr (21.0%); EBIT ₹6,465 cr (18.2%); **net income ₹5,132 cr (+11.0% QoQ, +21.2% YoY; record)**; Q2 dividend ₹12/share (record date 16 Oct, pay 26 Oct 2026) [V].
- **Q2 FY27 margin drivers (from cost table, % of revenue, Q1→Q2):** employee cost 56.9%→55.6% (−130 bps), outsourcing/subcontracting 14.8%→15.0% (+20 bps), hardware/software resale 2.5%→2.7%, R&D 1.6%→1.9%, SG&A 12.0%→11.5%, D&A 3.0%→2.8%; restructuring cost 84 bps vs 62 bps; average USD/INR **95.72 vs 94.73** (rupee depreciation tailwind) [V]. (The Q2 call transcript is not yet filed — company margin walk not available; for Q1 FY27 the company walk was: +70 bps lower restructuring, +20 bps PDD, −110 bps seasonal productivity give-backs/ERS decline, +60 bps forex [V, Q1 transcript].)
- **Segment mix Q2 FY27 (revenue %, YoY cc, EBIT %):** IT & Business Services 75.6% / +4.4% / 18.6%; Engineering & R&D 16.8% / +2.1% / 15.2%; HCLSoftware 7.9% / **−11.2%** / 20.1% [V]. HCLSoftware ARR $1,134M (+7.8% YoY cc, includes newly acquired **Jaspersoft**, $15M revenue in Q2).
- **Vertical mix (Services, Q2 FY27, YoY cc):** Financial Services 22.4% (+7.1%), Manufacturing 18.3% (+3.9%), Technology & Services 14.3% (+5.9%), Life Sciences & Healthcare 13.8% (−2.1%), Telecom/Media 12.0% (−2.1%; two large US telecom clients cut spend from Q4 FY26), Retail & CPG 10.5% (+14.0%), Public Services 8.8% (+1.2%) [V].
- **Geography (Services):** USA 56.1% (+3.5% cc), Europe 26.9% (−0.3%), RoW 13.6% (+11.4%), India 3.4% (+21.8%) [V].
- **Client concentration (LTM, Sep-26):** top-5 11.4%, top-10 18.4%, top-20 27.4% (all declining YoY). $100M+ clients 23, $50M+ 62, $20M+ 161, $10M+ 291, $1M+ 981 [V].
- **Capacity / people:** headcount **230,339** (Sep-26; +6,450 QoQ incl. 6,136 freshers; Jun-26 223,889, Mar-26 227,181); LTM voluntary attrition **12.8%** (12.6% a year earlier). HCL does not publish utilisation. Revenue per employee (company definition: LTM revenue ÷ avg of last 5 quarter-end headcounts) **$65.4K** [V]; check [E]: LTM $ revenue (3,793+3,682+3,650+3,724 = $14,849M) ÷ avg headcount 226,886 = $65.4K ✓.
- **DSO:** 58 days excl. unbilled (Sep-26) vs 56 a year ago [V]; the Q4 FY26 call quoted DSO 84 days *including* unbilled [V]. Screener debtor days FY26: 88.
- **Cash conversion:** LTM FCF/NI 87% (Q2 FY27 release; 107% for FY26 per Q4 call); Q2 FY27 OCF ₹4,758 cr, FCF ₹4,128 cr [V]. LTM ROIC 41.2% (Services 49.4%, Software 19.2%).
- **Payout:** FY26 dividend ₹60/share = 97.6% of NI; 5-year (FY22–26) payout 89.9% = $8.5bn; capital-allocation policy (≥75% payout) extended for another 5 years in April 2026 [V, Q4 call]. No buyback.
- **FY27 guidance (raised 12 Oct 2026):** company revenue **+2.5% to +4.0% cc** (was 1–4% in Apr and Jul); Services **+3.0% to +4.0%** (was 1.5–4.5%); **EBIT margin 17.5–18.5%** (unchanged; includes ~40–50 bps restructuring) [V, Q2 release vs Q1 deck]. Guidance is organic — excludes Jaspersoft (≈$10–15M/quarter) and the pending **CTG** acquisition (expected to close around Q2 per Q1 call) [V].
- **Ownership (screener, Jun-26 latest shown):** promoters 60.88%, FIIs 14.90% (19.38% Dec-24), DIIs 18.75%, public 5.14%, 10.24 lakh shareholders [V].

### 3.3 Story bullets
1. **Best-in-class growth among tier-1s in FY26 (3.9% cc) and the only one to *raise* FY27 guidance so far** — on the back of record H1 bookings ($5.7bn) and a Fortune-Global-50 workplace/network mega deal signed in July 2026.
2. **AI as offset to deflation:** "Advanced AI" revenue $219M in Q2 FY27 (+28.4% QoQ, +78% YoY cc; ~$0.9bn annualised). Management frames AI-disrupted run work as a "deflationary curve" to stay ahead of; Q1 seasonal productivity give-backs cost 110 bps margin.
3. **HCLSoftware is the drag** — revenue −11.2% YoY cc in Q2, perpetual-licence revenue collapsing ($14M vs $24M); ARR now growing again (+7.8%) mainly due to Jaspersoft.
4. **Project Ascend restructuring** (55–122 bps a quarter since Q2 FY26) is masking ~19% underlying EBIT; net cash fell ₹8.8k cr in H1 on M&A + dividends.

### 3.4 PRIMER ISSUES — primers/hcl-technologies.html (cover "last refreshed 30 Jun 2026")
| # | Primer says | Verified (source) | Fix |
|---|---|---|---|
| 1 | Cover/whatsnew: FY27 guidance "1–4%" cc, services 1.5–4.5% implied; "cautious 1–4%" repeated in snapshot, timeline, bear case | **Raised to 2.5–4.0% (Services 3.0–4.0%)** on 12 Oct 2026; EBIT 17.5–18.5% unchanged (Q2 FY27 investor release, BSE [V]) | Update everywhere |
| 2 | Primer stops at FY26; no Q1/Q2 FY27 | Q1 FY27: $3,650M (−0.5% QoQ cc), EBIT 16.9%, bookings $2.41bn; Q2 FY27: $3,724M (+2.3% QoQ cc), EBIT 18.2%, NI ₹5,132 cr (record), bookings $3.26bn [V] | Add whatsnew |
| 3 | Segment mix "ITBS ~72%, ERS ~16%, HCLSoftware ~12%"; "Services ~88%" | FY26 Software = $1,395M / $14,664M = **9.5%**; Q2 FY27 ITBS 75.6%, ERS 16.8%, Software **7.9%**, Services 92.4% [V] | Correct mix |
| 4 | Cover "Net profit (FY26) ~₹17,361 Cr" | Reported FY26 PAT ₹16,652 cr incl. labour-codes charge (screener [V]); ₹17,361 cr is only the *ex-labour-codes* figure — label it as adjusted | Relabel / show both |
| 5 | Headcount "~227k" | 230,339 at Sep-26 [V] | Update |
| 6 | Attrition "~12.5% FY26" | 12.5% Mar-26 is right; now 12.8% (Sep-26) [V] | Update |
| 7 | "~$620m Advanced AI annualised revenue" | Q2 FY27 Advanced-AI revenue $219M/quarter (~$0.88bn annualised) [V] | Update |
| 8 | Promoter "~60.8%" | 60.88% (Jun-26 screener [V]) — fine; add FII fall to 14.9% / DII 18.75% | Minor |
| 9 | Missing events | Jaspersoft acquisition completed early Jul 2026; CTG acquisition pending; July 2026 Fortune Global 50 mega deal; Project Ascend restructuring charges each quarter; PERM suspension (sector) | Add |
| 10 | No m-cap / P/E shown | m-cap ₹3,60,717 cr, P/E 19.0x, P/B 4.7x, div yield 4.1% (screener 2026-10-13 [V]) | Add valuation strip |
| 11 | "Net cash" (no figure) | Net cash ₹24,503 cr (Sep-26) vs ₹33,288 cr (Mar-26) [V] | Add figure |

---

## 1. Tata Consultancy Services Ltd (NSE: TCS · BSE: 532540) — tier-1, #1

**Status:** listed; promoter Tata Sons. CEO & MD K. Krithivasan; CFO Samir Seksaria; ED, President & COO Aarthi Subramanian; CHRO Sudeep Kunnumal. **Latest reported quarter: Q2 FY27 (Sep-26), results 8 Oct 2026** (Q2 call audio filed on BSE 8 Oct; newspaper extract filed 10 Oct). **tcs.com fact sheets returned HTTP 403 to both curl and WebFetch** — TCS Q2 FY27 KPIs below come from fetched secondary reports of the results release (IIFL Securities https://www.indiainfoline.com/news/companies/tcs-share-price-jumps-5-46-after-q2-fy27-results-net-profit-rises-4-qoq-to-13884-crore and NiftyTrader https://www.niftytrader.in/markets/?p=31958, both fetched 2026-10-13 [V-secondary]); FY26 and Q1 FY27 KPIs come from the BSE-filed call transcripts [V].

### 1.1 Standardised financials (screener.in consolidated, fetched 2026-10-13 [V] — https://www.screener.in/company/TCS/consolidated/)
| ₹ cr | FY25 | FY26 | YoY | TTM (to Sep-26) |
|---|---|---|---|---|
| Revenue | 2,55,324 | **2,67,021** | +4.6% | 2,83,248 |
| Screener operating profit (EBITDA proxy) | 67,407 (26.4%) | 72,398 (27.1%) | +7.4% | 74,916 (26.4%) |
| Other income | 3,962 | −124 (incl. exceptional items netted by screener) | | 721 |
| Depreciation | 5,242 | 5,560 | | 5,287 |
| PAT | 48,797 | **49,454** | +1.3% | 51,858 |
| EPS ₹ | 134.20 | 136.01 | | 142.64 |
| CFO / FCF (screener) | 48,908 / 44,994 | 52,094 / 48,013 | | |
| ROCE (screener) | 65% | 63% | | |
| Dividend payout (screener) | 94% | 81% | | |

- **Basis:** company **operating (EBIT) margin FY26 = 25.0%** (+70 bps YoY, 4-year high), *excluding* one-offs (severance/restructuring, legal provisions, India wage-code impact) — Q4 FY26 call [V] (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/07ae2d32-1050-4e80-96ff-eb2d98378d4e.pdf). Screener's ~27% "OPM" is pre-depreciation and nets the one-offs in "other income" (FY26 other income shown as −₹124 cr; Q3 FY26 −₹2,273 cr). Net margin FY26 19.8%; ETR 24.6%.
- **FY26 in USD:** revenue **$30.017bn, −0.5% USD, −2.4% cc** (first-ever annual decline); **TCV $40.7bn incl. 5 mega deals**; Q4 FY26 revenue $7.621bn (+1.2% QoQ cc), op margin 25.3%, TCV $12.0bn (mega deals: Marks & Spencer, a UK telecom, a US healthcare/pharmacy retailer); $100M+ clients 66, $50M+ 139, $1M+ 1,397; FY26 dividend ₹110/share (final ₹31) [V, Q4 call].
- **Market data (screener 2026-10-13):** price ₹2,269; **m-cap ₹8,20,319 cr**; P/E 15.0x; book value ₹329 → **P/B 6.9x** [E]; 52-wk H/L ₹3,350/₹1,976; div. yield 2.82%; ROCE 63.0%, ROE 51.8%; 1-yr price −25%, 3-yr CAGR −14% [V]. (Stock closed ₹2,076 on 8 Oct pre-results and rose ~5.5% on 9 Oct — IIFL [V-secondary].)
- **Balance sheet (Sep-26, screener):** borrowings ₹11,808 cr (essentially lease liabilities — TCS has no material financial debt [K: TCS annual report FY26]); investments ₹40,840 cr; other assets ₹1,14,690 cr (includes cash, deposits, receivables). Company "**invested funds**" (cash + deposits + investments) **$5.3bn at Jun-26** (≈₹50,200 cr at ₹94.7/$) [V, Q1 call]. Screener's investment line therefore understates liquidity.
- **EV/EBITDA [E]:** EV ≈ 8,20,319 − 50,700 (invested funds $5.3bn × ₹95.7) + 11,808 leases ≈ ₹7,81,400 cr ÷ TTM EBITDA ₹74,916 cr = **~10.4x**.

### 1.2 Native IT KPIs
| Quarter | Rev ₹ cr | Rev $M | QoQ cc | YoY cc | Op. (EBIT) margin | TCV $bn |
|---|---|---|---|---|---|---|
| Q1 FY26 (Jun-25) | 63,437 | ~7,421 [K] | −3.3% [K] | — | 24.5% [K] | 9.4 [K] |
| Q2 FY26 (Sep-25) | 65,799 | ~7,466 [K] | +0.8% [K] | — | 25.2% [V-sec: "down ~120 bps YoY" in Q2 FY27] | 10.0 [V-sec: "year-ago $10bn"] |
| Q3 FY26 (Dec-25) | 67,087 | ~7,508 [E: Q4 $7,621M ÷ 1.015] | +0.8% [K] | — | 25.2% [K] | 9.3 [E: FY 40.7 − 9.4 − 10.0 − 12.0] |
| Q4 FY26 (Mar-26) | 70,698 | 7,621 | +1.2% | — | 25.3% | 12.0 |
| Q1 FY27 (Jun-26) | 72,275 | 7,624 | +0.4% | +3.2% | **24.0%** (−130 bps QoQ) | 9.5 |
| **Q2 FY27 (Sep-26)** | **73,188** | **7,642** | **+0.5%** | **+2.8%** | **24.0%** (flat QoQ, ~−120 bps YoY) | **9.6** |
(₹ revenue: screener [V]; Q4/Q1 KPIs: BSE transcripts [V]; Q2 FY27 KPIs: IIFL/NiftyTrader [V-secondary]; [K] = TCS quarterly press releases FY26 from memory.)

- **Book-to-bill [E]:** FY26 TCV $40.7bn ÷ revenue $30.0bn = **1.36x**; Q2 FY27 $9.6bn ÷ $7.642bn = 1.26x; Q1 FY27 1.25x.
- **Q2 FY27 P&L:** operating profit ₹17,553 cr (24.0%); net profit (attrib.) **₹13,884 cr (+4.0% QoQ, ~+15% YoY)**, net margin 19.0%; Q1 FY27 included an exceptional loss on a legal-claim settlement (Q1 NP ₹13,349 cr reported, ₹13,849 cr ex-exceptional) [V-secondary]. Cash from operations ₹14,190 cr = 102.2% of NP. Dividend ₹12/share (record 14 Oct, pay 30 Oct 2026) after ₹12 in Q1.
- **Margin bridge:** Q1 FY27 (company): annual increments −170 bps, partner/GTM investments, offset by +40 bps currency and operating efficiencies → 24.0% (−130 bps) [V]. Q4 FY26: +40 bps realisation, +110 bps currency, −40 bps subcontractors, −40 bps talent/wage-code, −50 bps partner/GTM, −10 bps integration → 25.3% [V]. Q2 FY27 bridge not in fetched sources (flat QoQ).
- **Vertical growth Q2 FY27 (QoQ cc):** BFSI +2.5%, Manufacturing +3.1%, Technology & Services +3.1%, Consumer −0.7%, ERU −0.5% [V-sec]. **Geography (QoQ cc):** UK +3.5%, APAC +2.0%, North America +0.4%, Continental Europe +0.4%, **India −10.3%** (cause not stated in fetched sources; likely large Indian govt deal ramp-down [E]) [V-sec]. FY26 mix (primer, unverified this session: tcs.com blocked): BFSI ~32%, NA ~48.5%, UK ~16%.
- **People / capacity:** headcount **598,056 (Sep-26)**, 593,798 (Jun-26), 584,519 (Mar-26) → +4,258 QoQ, +13,537 in H1 FY27 after a ~23.5k fall in FY26 (incl. the July-2025 ~12,000-role / ~2% restructuring [K: TCS statement, Jul 2025]); LTM voluntary attrition IT services **13.3%** [V-sec]. Utilisation not captured (fact sheet blocked).
- **Revenue per employee [E]:** annualised Q2 FY27 $7,642M × 4 ÷ avg(593,798, 598,056) = **$51.3K** (FY26: $30,017M ÷ avg(607,979 [K: Mar-25 headcount], 584,519) = $50.3K). Lowest among the tier-1s — reflects pyramid and India/BPS mix.
- **DSO:** 74 days ($ terms) at Jun-26 and Mar-26 [V]. Screener debtor days FY26: 93 (includes unbilled).
- **AI revenue:** annualised $2.3bn (Q4 FY26) → $2.6bn (Q1 FY27) → **$3.1bn (Q2 FY27, >10% of revenue)** [V / V-sec].
- **Client buckets Q2 FY27 (QoQ):** $10M+ +2, $5M+ +6, $1M+ +11 [V-sec].
- **Guidance:** TCS gives no numeric guidance [V, Q4 call safe-harbour]. Management (Q4 FY26 call) guided wage-hike impact of 150–200 bps in Q1 — delivered −170 bps.
- **Capital return:** FY26 dividend ₹110/share (screener payout 81%); no buyback since the ₹17,000 cr programme of Dec 2023 [K: TCS buyback 2023]. FY26 FCF ₹48,013 cr vs PAT ₹49,454 cr → FCF/PAT **97%** [E, screener].
- **Ownership (screener, Jun-26 latest shown):** promoters **71.77%** (Tata Sons + group), FIIs **9.07%** (12.04% Mar-25 — steady FII exit), DIIs 13.41%, public 5.69%, 26.05 lakh shareholders [V].

### 1.3 Capex / expansion / M&A (2025–26)
- **HyperVault** — gigawatt-scale AI data-centre platform (announced Oct 2025, TPG co-investment [K: Nov 2025 announcements]); per Q4 FY26 call: anchor workloads of 100–200 MW per customer; **OpenAI partnership for 100 MW, option to scale to 1 GW**; AMD "Helios" rack-scale collaboration; ABB MoU; partners Tata Power/Tata Projects/Tata Comms [V].
- **Acquisitions:** ListEngage ($72.8M), **Coastal Cloud ($700M, Dec 2025)**, and **MHP (Porsche's IT/management consultancy) — SPA signed 24 Aug 2026, EV €320M (~₹3,573 cr), ~4,500 staff, CY25 turnover €742M**, with a linked **€1.25bn, 5-year Porsche/MHP/TCS partnership**; closing expected in 3–4 months (Outlook Business, fetched [V-secondary] https://www.outlookbusiness.com/corporate/tcs-to-buy-porsches-it-consulting-unit-mhp-for-320-mn).
- **Partnerships Q1 FY27:** Anthropic global premier partnership (50,000 Claude licences), Mistral AI (first GSI partner), TCS SovereignSecure Cloud for Europe, new GCC business unit ("Global Value and Innovation Center" — build/operate/transfer/divest GCCs); Best Buy India GCC transitioned to TCS (Q2 FY27) [V / V-sec].
- **US policy:** 9 Oct 2026 BSE statement on US PERM suspension — "PERM applications in single digits in last two years", 31 US offices/delivery centres, plan to hire **15,000 more in the US over five years** [V].

### 1.4 Story bullets
1. **Growth has bottomed but is crawling:** five straight quarters of sequential cc growth, yet YoY cc only +2.8% in Q2 FY27; TCV steady at $9.5–12bn a quarter (book-to-bill ~1.3x) — no conversion surge yet.
2. **Margin reset to 24%** after FY27 increments; FY26's 25% was flattered by right-sizing and currency. Rupee at ~₹95–96/$ is the main cushion.
3. **Pivot to "infrastructure-to-intelligence":** HyperVault data centres + ~$1.1bn of acquisitions in 10 months (Coastal Cloud, ListEngage, MHP) — a first real use of the balance sheet in a decade; payout still ~80–100%.
4. **Valuation de-rated to ~15x P/E** (from ~30x in 2024) with FIIs down to 9% — DIIs absorbing.

### 1.5 PRIMER ISSUES — primers/tata-consultancy-services.html (cover "last refreshed 30 Jun 2026")
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "Market cap ~₹7.6 lakh Cr (Jun '26)"; "~15× trailing P/E (Jun '26)" | **₹8,20,319 cr at ₹2,269; P/E 15.0x** (screener 2026-10-13 [V]) | Update m-cap & date |
| 2 | Cover headcount 584,519 (Mar 2026); "~584,500 employees"; "down ~23,500" | **598,056 at Sep-26** (+13.5k in H1 FY27) [V-sec]; Jun-26 593,798 [V] | Update; note headcount growing again |
| 3 | Attrition "~13.7% LTM" | **13.3%** (Q2 FY27) [V-sec] | Update |
| 4 | Cover/whatsnew stop at FY26 | Q1 FY27: ₹72,275 cr, $7,624M, +0.4% QoQ cc, margin 24.0%, TCV $9.5bn; **Q2 FY27: ₹73,188 cr, $7,642M, +0.5% QoQ / +2.8% YoY cc, margin 24.0%, NP ₹13,884 cr, TCV $9.6bn** | Add whatsnew |
| 5 | "25.0% op. margin" presented as current | Now **24.0%** after FY27 increments (−170 bps) [V] | Update |
| 6 | "~$2.3bn annualised AI revenue" | **$3.1bn** (Q2 FY27) [V-sec] | Update |
| 7 | Missing M&A | Coastal Cloud ($700M, Dec 2025), ListEngage ($72.8M), **MHP/Porsche (EV €320M, SPA 24 Aug 2026) + €1.25bn Porsche partnership** [V-sec] | Add |
| 8 | Missing events | Anthropic/Mistral partnerships (Q1 FY27); OpenAI 100 MW HyperVault deal; Q1 FY27 exceptional legal-settlement charge; US PERM statement and 15,000-US-hires pledge (9 Oct 2026) [V] | Add |
| 9 | Ownership "Tata Sons ~71.7%" | Promoter group 71.77% ✓ (Jun-26) — but add FII 9.07% (falling) / DII 13.41% [V] | Minor |
| 10 | "HyperVault ~$2bn JV, ~51% TCS / TPG-funded" | Not re-verified this session (fetch of TCS IR blocked) — flag as **unverified**; the Q4 FY26 call describes a 1 GW build-out with OpenAI as 100 MW anchor [V] | Re-check structure |
| 11 | Revenue-per-employee / utilisation figures (if any) | Rev/employee ≈ $51.3K annualised [E]; utilisation unverified (fact sheet blocked) | — |
