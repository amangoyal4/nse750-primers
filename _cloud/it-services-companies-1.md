# IT Services — Company packs, batch 1 (TCS, Infosys, HCLTech, Wipro, Tech Mahindra, LTM)

Prepared 2026-10-13 (company-research subagent, batch 1). Tags: **[V]** fetched this session (URL given), **[K]** from memory with source named, **[E]** estimate / derived by me (formula shown).

**Sources used for every pack**
- screener.in consolidated pages fetched via curl on **2026-10-13 ~15:08 UTC** (intraday/last-close prices as shown on the page at that time): `https://www.screener.in/company/<NSE>/consolidated/` [V]. Screener "Operating Profit" = revenue − expenses *before* other income and depreciation (i.e. an EBITDA proxy, includes some one-offs that companies class as exceptional) — **not** company EBIT. Screener "Borrowings" include lease liabilities for all six IT names (none has meaningful financial debt).
- Exchange filings on bseindia.com (`https://www.bseindia.com/xml-data/corpfiling/AttachLive/<id>.pdf`) — press releases, investor decks and earnings-call transcripts, fetched and parsed with pdftotext [V].
- tcs.com / BSE API / nseindia.com returned "Access Denied" (Akamai) — TCS's own Q2 FY27 fact sheet could not be fetched; TCS Q2 FY27 KPIs are taken from fetched secondary reports of the results release (named inline) and flagged.

**Results calendar status (as of 2026-10-13):** Q2 FY27 (Sep-26 quarter) is **out** for TCS (8 Oct 2026) and HCLTech (12 Oct 2026). Not yet out: Wipro (15 Oct, per BSE intimation 7 Oct), Tech Mahindra (15 Oct, intimation 2 Oct), LTM (16 Oct, board-meeting intimation 8 Oct), Infosys (Q2 date not in the last-5 BSE announcements; typically mid-Oct). For these four, the latest reported quarter is Q1 FY27 (Jun-26).

**Sector event, Oct 2026:** US Department of Labor suspension of the PERM (green-card labour certification) programme — TCS (9 Oct), Infosys (10 Oct) and Wipro (13 Oct) each filed BSE statements saying they expect no material impact (BSE filings, fetched [V]).


## 0. Batch-1 summary grid (for the KPI appendix)

Market data = screener.in, fetched 2026-10-13 15:08 UTC (= 20:38 IST, i.e. **13 Oct 2026 closing prices**). ₹ cr unless stated. "Co" = company-reported basis.

| Metric | TCS | Infosys | HCLTech | Wipro | Tech Mahindra | LTM |
|---|---|---|---|---|---|---|
| Latest quarter reported | **Q2 FY27** (8 Oct) | Q1 FY27 (Q2 on 23 Oct) | **Q2 FY27** (12 Oct) | Q1 FY27 (Q2 on 15 Oct) | Q1 FY27 (Q2 on 15 Oct) | Q1 FY27 (Q2 on 16 Oct) |
| FY26 revenue ₹ cr (screener) | 2,67,021 | 1,78,650 | 1,30,144 | 92,624 | 56,815 | 42,308 |
| FY26 revenue growth (₹) | +4.6% | +9.6% | +11.2% | +4.0% | +7.2% | +11.3% |
| FY26 revenue $ (Co) | $30.02bn | >$20bn | $14.66bn | $10.48bn (IT svcs) | $6.39bn | $4.76bn |
| FY26 cc growth (Co) | **−2.4%** | +3.1% | **+3.9%** | −1.6% | ~+0.6% (primer) | ~+5.3% [E] (+6% USD) |
| Latest-quarter YoY cc | +2.8% | +2.4% | +2.6% (Services +4.0%) | +0.9% | **+6.6%** | +6.4% |
| FY26 Co EBIT margin | **25.0%** (ex one-offs) | 21.0% adj | 17.2% (17.9% ex-restr.) | 17.2% (IT svcs) | ~12.5% [E] | 15.4% [E] |
| Latest-quarter EBIT margin | 24.0% | 21.1% | 18.2% | 16.0% | 14.4% | 15.5% |
| Screener EBITDA margin FY26 | 27.1% | 23.7% | 20.6% | 19.2% | 15.9% | 17.9% |
| FY26 PAT (screener) | 49,454 | 29,474 | 16,652 | 13,266 | 4,806 | 4,983 |
| ROCE / ROE (screener) | 63% / 51.8% | 40% / 31.9% | 30% / 23.8% | 18% / 15.5% | 23% / 17.5% | 30% / 23.1% |
| Net cash (Co basis) | ~₹50,700 cr (invested funds $5.3bn) [E] | ~₹37,000 cr ($3.9bn) [E] | ₹24,503 cr | ~₹20,400 cr [E] (only one with debt) | ~₹9,630 cr | ~₹12,700 cr [E] |
| M-cap (13 Oct 2026) | **8,20,319** | 4,32,301 | 3,60,717 | 1,67,607 | 1,51,390 | 1,24,563 |
| P/E (TTM) / P/B | 15.0x / 6.9x | 13.9x / 4.7x | 19.0x / 4.7x | 12.7x / 2.0x | 28.4x / 5.1x | 22.2x / 5.2x |
| EV/EBITDA (TTM) [E] | ~10.4x | ~9.2x | ~12.0x | ~8.1x | ~14.6x | ~14.0x |
| Dividend yield | 2.8% | 4.5% | 4.1% | 6.5% | 3.3% | 1.8% |
| FY26 deal TCV | $40.7bn (all) | $14.9bn (large >$50M) | $9.3bn (net new) | ~$16.5bn total / ~$7.8bn large [E] | $3.79bn (new) | $6.60bn (order inflow) |
| Latest-qtr TCV | $9.6bn | $3.6bn (61% net new) | $3.26bn | $3.37bn / $1.63bn large | $1.08bn | $1.68bn |
| Book-to-bill (FY26) [E] | 1.36x | 0.74x (large only) | 0.63x (net new) | ~1.6x (total) | 0.59x (new) | 1.39x |
| Headcount (latest) | 598,056 | ~327,600 | 230,339 | 240K+ (Mar-26) | 146,760 | 87,886 |
| LTM attrition | 13.3% | 13.0% | 12.8% | 13.9% | 11.8% (IT) | 13.3% |
| Utilisation (ex-trainees) | n/a (blocked) | 84.9% | not disclosed | "slightly down" | 87.0% (IT) | 86.4% |
| Revenue/employee (annualised) [E] | $51.3K | $62.0K | $65.4K (Co, LTM) | ~$43.6K | $45.1K | $55.7K |
| Top-5 / top-10 clients | n/a | n/a | 11.4% / 18.4% | 14.3% / 23.6% | 14.7% / 24.0% | **23.5% / 32.0%** |
| DSO | 74 ($ terms) | 63 billed / 76 incl. unbilled | 58 ex-unbilled | n/a (screener 54) | 84 | 56 billed / 85 incl. unbilled |
| FCF / PAT FY26 | 97% [E, screener] | 106% (Co, adj.) | 107% (Co) | 101% [E] | ~117% [E, screener] | 78% [E] |
| FY27 guidance | none | 1.5–3.0% cc; EBIT 20–22% | **2.5–4.0% cc (raised)**; EBIT 17.5–18.5% | Q2: −1.5% to +0.5% QoQ cc | EBIT 15% (Fortius target) | "better than FY26"; FY31 2x rev, +200 bps EBIT |
| Promoter (latest) | 71.77% | 13.82% (founders) | 60.88% | 72.57% | 34.96% | 68.49% |
| FII / DII | 9.07% / 13.41% | 27.09% / 42.78% | 14.90% / 18.75% | 9.46% / 5.14% | 18.66% / 36.92% | 6.31% / 16.73% |

### Cross-company read-across for the sub-sector angle
- **cc growth has converged to ~2–3% YoY for the four largest** (TCS +2.8%, Infosys +2.4%, HCL +2.6%, Wipro +0.9%), while **TechM (+6.6%) and LTM (+6.4%) now out-grow the tier-1s** — partly base effects (TechM portfolio pruning finished; LTM mega-deal ramps).
- **TCV ≠ revenue (AI deflation signature):** Infosys large deals $3.6bn at 61% net new and TCS $9.5–12bn a quarter have not lifted growth; Infosys cut its FY27 guide citing "client expectation on productivity" and "softer increase in price"; HCL talks of staying "ahead of the deflationary curve"; HCL Q1 lost 110 bps margin to annual productivity give-backs in managed-services contracts.
- **AI revenue disclosure race:** TCS $3.1bn annualised (>10%); Infosys 8.2% of revenue; HCL "Advanced AI" $219M/quarter (+78% YoY); all six cite Anthropic/OpenAI partnerships (TCS–Anthropic premier partnership, Wipro Claude CoE, Infosys 80k staff on coding agents).
- **Rupee is the margin cushion:** USD/INR average ~95 in Q1–Q2 FY27 vs ~86 a year earlier (HCL 95.72 avg Q2; LTM hedges at ₹95.17) — Infosys +70 bps, TCS +40 bps, HCL +60 bps from currency in Q1 FY27, funding wage hikes (TCS −170 bps; Infosys and TechM hikes land in Q2/Q3 FY27).
- **Headcount:** TCS is re-hiring (+13.5k in H1 FY27 after −23.5k in FY26); Infosys, Wipro (ex-acq.), TechM and LTM flat-to-down — revenue/employee rising slowly; attrition stable at 12–14%.
- **US policy:** the Oct-2026 US PERM suspension drew BSE statements from TCS (single-digit PERM filings; 15,000 US hires planned), Infosys and Wipro (80% of US staff local) — all "no material impact".
- **GCCs as competitor and customer:** TCS launched a GCC business unit and took over Best Buy's India GCC; Infosys signed a US regional-bank GCC deal; LTM will transform Randstad's India GCC; Wipro bought Olam's captive (Mindsprint).
- **M&A is back:** TCS (Coastal Cloud $700M, ListEngage, MHP €320M EV), HCL (Jaspersoft, CTG pending), Wipro (DTS Harman, Mindsprint), Infosys (Stratus, Optimum, Versent pending), LTM (Randstad T&C €160M EV pending).
- **Valuation:** tier-1s de-rated to 13–19x P/E with FIIs exiting (TCS FII 9.1%, Infosys 27.1% vs 33% two years ago); turnaround/mid-tier names (TechM 28x, LTM 22x) trade at premiums.

### Figures marked unverified / secondary in this file
1. **TCS Q2 FY27 company KPIs** (TCV $9.6bn, op. margin 24.0%, headcount 598,056, attrition 13.3%, vertical/geo growth, AI $3.1bn, cash conversion) — tcs.com fact sheet returned HTTP 403 to curl and WebFetch (retried); taken from fetched IIFL/NiftyTrader reports of the release [V-secondary]. TCS vertical/geo mix, utilisation and client concentration **unverified**. TCS Q1–Q3 FY26 quarterly USD/TCV and HyperVault–TPG structure are [K].
2. **Infosys** vertical/geo mix, client concentration, Q1–Q3 FY26 quarterly figures — [K]/unverified (infosys.com "Access Denied"); buyback terms [K] (corroborated by screener share-capital fall); Q2 date 23 Oct from Upstox [V-secondary].
3. **HCL** Q2–Q3 FY26 bookings [E/K].
4. **Wipro** Q1–Q3 FY26 bookings/margins [K/E]; exact headcount (deck says "240K+"); buyback completion inferred from cash and share count [E].
5. **Tech Mahindra** FY26 cc growth (~0.6%) and FY26 DPS ₹51 from primer/screener yield (FY26 press release not fetched); Q2–Q3 FY26 deal wins [K, reconcile to LTM TCV].
6. **LTM** FY26 cc growth [E]; CEO start date (31 May 2025) [K/primer]; rename date 17 Mar 2026 [V-secondary].
7. All EV/EBITDA, P/B, revenue/employee, book-to-bill and FCF/PAT ratios are my computations [E] (formulas shown in each pack).

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

---

## 2. Infosys Ltd (NSE: INFY · BSE: 500209 · NYSE ADR: INFY) — tier-1, #2

**Status:** listed (also NYSE ADR); no promoter in control (founder group 13.8%). Chairman Nandan Nilekani; CEO & MD Salil Parekh (term ends 31 Mar 2027); CFO Jayesh Sanghrajka. **CEO succession announced 23 Jul 2026: Ashiss Dash (31-year Infosys veteran, based in LA) to become CEO from 1 Apr 2027**; mentoring with Parekh from 1 Oct 2026 (Q1 FY27 press-conference transcript, BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/95f8af86-dc92-49dc-a7cf-ecce287f8cce.pdf [V]). **Latest reported quarter: Q1 FY27 (Jun-26).** Q2 FY27 results due **23 Oct 2026** (board 22–23 Oct; Upstox, fetched [V-secondary]). infosys.com IR PDFs returned "Access Denied" to curl — KPIs from BSE-filed transcripts.

### 2.1 Standardised financials (screener.in consolidated, fetched 2026-10-13 [V] — https://www.screener.in/company/INFY/consolidated/)
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 1,62,990 | **1,78,650** | +9.6% | 1,84,582 |
| Screener operating profit (EBITDA proxy) | 39,236 (24.1%) | 42,280 (23.7%) | +7.8% | 43,745 (23.7%) |
| Other income | 3,600 | 3,033 | | 2,975 |
| Depreciation | 4,812 | 4,902 | | 5,007 |
| PAT | 26,750 | **29,474** | +10.2% | 30,325 |
| EPS ₹ | 64.32 | 72.59 | +12.9% | 74.25 |
| CFO / FCF (screener) | 35,694 / 33,457 | 33,986 / 31,259 | | |
| ROCE (screener) | 38% | 40% | | |
| Dividend payout (screener) | 67% | 66% | | |

- **Basis:** company **operating margin FY26 = 21.0% adjusted** (20.3% reported incl. Labour-Code charge in Q3 FY26); Q4 FY26 20.9% (Q4 FY26 call, BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/2ab7badf-388c-4dab-bfcc-3e128677734c.pdf [V]). Screener 23.7% is pre-depreciation. FY26 PAT includes favourable tax-order reversals (Q4 tax rate 21%) and the Labour-Code charge (Q3 other income −₹150 cr on screener).
- **FY26 USD:** revenue **crossed $20bn, +3.1% cc** (acquisitions +70 bps; absorbed −1% third-party revenue and −70 bps onsite-mix shift); volumes flattish, growth from realisation (Project Maximus) [V].
- **Market data (screener 2026-10-13):** price ₹1,062; **m-cap ₹4,32,301 cr**; P/E 13.9x; book value ₹225 → **P/B 4.7x** [E]; 52-wk H/L ₹1,728/₹980; dividend yield 4.52%; ROCE 40.0%, ROE 31.9%; 1-yr −29% [V].
- **Balance sheet:** screener borrowings ₹9,176 cr (Mar-26) = lease liabilities (Infosys is "debt-free" per CFO [V]); screener investments ₹21,880 cr **understate liquidity** — company **cash & investments $4.5bn (Mar-26) → $3.9bn (Jun-26)** after >$1bn of Q1 dividends [V, Q1 call] ≈ ₹37,000 cr at ₹94.7/$ [E].
- **EV/EBITDA [E]:** (4,32,301 − 37,000 + 9,176) ÷ 43,745 = **9.2x**.
- **Buyback:** **₹18,000 cr at ₹1,800/share completed in FY26 (Nov–Dec 2025)** [K: Infosys buyback offer letter, Nov 2025] — corroborated by screener equity capital falling ₹2,073 cr → ₹2,024 cr (≈9.8 cr shares of ₹5) [V]. FY26 dividend ₹48/share (₹23 interim + ₹25 final, +11.6%) [V, Q4 call]. Total FY26 return >$4bn [V].

### 2.2 Native IT KPIs (BSE transcripts [V] unless tagged)
| Quarter | Rev ₹ cr (screener) | Rev $M | QoQ cc | YoY cc | Op. margin | Large-deal TCV $bn (net new %) |
|---|---|---|---|---|---|---|
| Q1 FY26 (Jun-25) | 42,279 | 4,941 [K] | +2.6% [K] | +3.8% [K] | 20.8% [K] | 3.8 [K] |
| Q2 FY26 (Sep-25) | 44,490 | 5,076 [K] | +2.2% [K] | +2.9% [K] | 21.0% [K] | 3.1 [K] |
| Q3 FY26 (Dec-25) | 45,479 | ~5,100 [K] | +0.6% [K] | — | 21.2% adj. [K] | 4.8 [K] |
| Q4 FY26 (Mar-26) | 46,402 | ~5,030 [E] | **−1.3%** | +4.1% | 20.9% | 3.2 (19 deals) |
| **Q1 FY27 (Jun-26)** | **48,211** | **5,082** | **+1.0%** (acq. +1.1 pp) | **+2.4%** | **21.1%** | **3.6 (61% net new; 22 deals, three of ~$400M)** |
- FY26 large deals **$14.9bn (+28% YoY), 55% net new, 96 deals incl. 3 mega** [V]. Book-to-bill on large deals [E]: FY26 14.9/20.1 = **0.74x**; Q1 FY27 3.6/5.08 = 0.71x (Infosys counts only deals >$50M).
- **Q1 FY27 margin bridge (+20 bps QoQ to 21.1%):** +70 bps rupee depreciation, +20 bps Project Maximus, +10 bps net amortisation; −50 bps AI sales & marketing investment, −40 bps one-time revenue loss from an EURS client programme termination; +30 bps one-time cost benefit offset by −20 bps other expenses [V]. Gross margin +60 bps QoQ.
- **Q1 FY27 P&L:** net profit ₹7,775 cr (screener; EPS ₹19.19, +~15% YoY); FCF **$955M = 116.5% of NP**; ETR guide 29–30% [V].
- **Utilisation (ex-trainees):** **84.9%** (Q1 FY27, +1.9 pp QoQ); 83.0% Q4 FY26; FY26 84.4% (81.1% incl. trainees) [V]. Onsite mix 22.8% (Q4 FY26), guided to fall 75–100 bps in FY27.
- **People:** headcount **"over 328,000" at Mar-26** (FY26 +~5,000; −8,440 in Q4 per primer source); **Q1 FY27 −500 despite +2,000 from acquisitions** → ~327,600 [E]; LTM voluntary attrition **13.0%** (12.6% in Q4) [V]. Freshers: 20,000+ in FY26, similar plan for FY27. Wage hikes: most employees effective **Oct 2026**, rest Jan 2027 → Q3 FY27 margin headwind [V].
- **Revenue per employee [E]:** annualised Q1 FY27 $5,082M × 4 ÷ avg(328,000, 327,500) = **$62.0K**; FY26 ≈ $20.1bn ÷ avg(323,578 [K: Mar-25], 328,000) = $61.7K.
- **DSO:** 63 days billed (−4 QoQ); 76 days incl. unbilled net of unearned (78 in Q4, "lowest in seven years") [V]. Screener debtor days FY26: 72.
- **AI:** AI services revenue **8.2% of revenue** in Q1 FY27 (~$1.67bn annualised [E]); 80,000+ delivery staff using coding agents ("Claude Code or Codex"); plan for 6,000 "Frontier Engineers"; Topaz Fabric platform [V].
- **Clients:** FY26 $50M+ clients +3, $100M+ +3, $400M+ +2 [V]. Top-client concentration not in transcripts (fact sheet blocked) — **unverified**.
- **Verticals (qualitative, Q1 FY27):** FS cautious but ~$1bn net-new large-deal TCV; Manufacturing hit by a large European auto client; EURS hit by one-off termination; FY26 FS growth 4.4% cc [V]. Vertical/geo % mix not verified (fact sheet blocked).
- **FY27 guidance:** revenue **1.5–3.0% cc (cut 23 Jul 2026 from 1.5–3.5% set in Apr)**; operating margin **20–22%** (unchanged) [V]. Acquisitions: Stratus (closed, ~25 bps in guide), Optimum and an Australian client JV (pending regulatory approval, not in guide); Versent (regulatory delay) — brokerages estimated 200–225 bps total inorganic contribution [V, Q4 call Q&A].
- **Capital allocation:** policy to return ~85% of FCF over 5 years via dividends/buybacks [K: Infosys capital allocation policy, Apr 2024; primer agrees].
- **Ownership (screener, Jun-26):** promoters/founders **13.82%** (14.60% Mar-25), FIIs **27.09%** (33.30% Dec-24), DIIs **42.78%** (largest block — LIC/MFs), public 15.88%, 29.6 lakh shareholders [V]. (Note: the Jun-26 dip in promoters and rise in public reflects buyback tender participation timing/ADR conversion — not verified.)

### 2.3 Story bullets
1. **Guidance cut to 1.5–3.0%** after a soft Q1 (volumes, client productivity demands, competitive pricing, a client programme termination) — yet large-deal TCV remains strong ($3.6bn, 61% net new): the classic AI-deflation signature of TCV not converting into revenue.
2. **Leadership transition:** first CEO change since 2018 — Ashiss Dash from 1 Apr 2027.
3. **Margins held at ~21%** purely by rupee (−70 bps tailwind in Q1) and Maximus; October wage hike is the next test.
4. **Capital return:** ₹18,000 cr buyback + ₹48 dividend in FY26; DIIs now own 43% as FIIs exit.

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

---

## 4. Wipro Ltd (NSE: WIPRO · BSE: 507685 · NYSE ADR: WIT) — tier-1, #4

**Status:** listed; promoter Premji family/entities. Executive Chairman Rishad Premji; CEO & MD Srini Pallia (since Apr 2024); CFO Aparna Iyer. **Latest reported quarter: Q1 FY27 (Jun-26), results 16 Jul 2026. Q2 FY27 results on 15 Oct 2026** (BSE intimation 7 Oct [V]). Sources: Q1 FY27 investor deck (https://www.wipro.com/content/dam/nexus/en/investor/quarterly-results/2026-2027/q1fy27/wipro-investor-ppt-q1fy27.pdf [V]), Q4 FY26 deck (…/2025-2026/q4fy26/wipro-investor-ppt-q4fy26.pdf [V]), Q1 FY27 and Q4 FY26 call transcripts (BSE …/36342956-3182-4962-a695-068bbafdb263.pdf and …/78fab9a0-4864-4470-be49-3544e57f1c49.pdf [V]).

### 4.1 Standardised financials (screener.in consolidated, fetched 2026-10-13 [V] — https://www.screener.in/company/WIPRO/consolidated/)
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 89,088 | **92,624** | +4.0% | 94,968 |
| Screener operating profit (EBITDA proxy) | 18,021 (20.2%) | 17,811 (19.2%) | −1.2% | 18,211 (19.2%) |
| Other income (large treasury book) | 3,909 | 3,899 | | 3,807 |
| Interest | 1,477 | 1,458 | | 1,570 |
| Depreciation | 2,958 | 2,911 | | 3,030 |
| PAT (incl. minority) | 13,218 | **13,266** | +0.4% | 13,285 |
| EPS ₹ | 12.54 | 12.58 | | 12.79 |
| CFO / FCF (screener) | 16,943 / 15,621 | 14,932 / 13,447 | | |
| ROCE (screener) | 20% | 18% | | |
| Dividend payout (screener) | 48% | 87% | | |

- **Basis:** company reports the **IT Services segment** — FY26 IT Services revenue **$10,478M (−0.3% USD, −1.6% cc)**, **IT Services EBIT margin 17.2%** (+15 bps), absorbing two months of DTS Harman and a 1 Mar wage hike [V, Q4 call/deck]. Company FY26 net income +2.2% YoY (after restructuring charges in prior year); FY26 EPS ₹12.6 [V]. Screener OPM 19.2% is pre-depreciation and includes non-IT segments.
- **Market data (screener 2026-10-13):** price ₹169; **m-cap ₹1,67,607 cr**; P/E 12.7x; book value ₹83.9 (pre-buyback balance sheet) → P/B 2.0x [E]; 52-wk H/L ₹273/₹157; dividend yield 6.51%; ROCE 17.8%, ROE 15.5% [V]. Implied shares ≈ 991.8 cr vs ~1,049 cr at Mar-26 (equity capital ₹2,098 cr ÷ ₹2) → **−5.5%, consistent with the ₹15,000 cr buyback (5.7% of capital) having completed in Q1 FY27** [E].
- **Balance sheet:** Wipro is the only one of the six with real financial debt — screener borrowings **₹20,291 cr (Mar-26)** (USD bonds, short-term borrowings and leases). Company **gross cash incl. investments $5.9bn (Mar-26) → $4.3bn (Jun-26)** (the ~$1.6bn fall ≈ the buyback) [V] ≈ ₹40,700 cr at ₹94.7/$ [E]. **Net cash ≈ ₹20,400 cr** [E: 40,700 − 20,291].
- **EV/EBITDA [E]:** (1,67,607 − 20,400) ÷ 18,211 = **8.1x** — cheapest of the six.

### 4.2 Native IT KPIs (decks/transcripts [V] unless tagged)
| Quarter | IT Svcs rev $M | QoQ cc | YoY cc | IT Svcs EBIT % | Total bookings $M | Large-deal bookings $M |
|---|---|---|---|---|---|---|
| Q1 FY26 (Jun-25) | 2,587 [K] | −2.0% [K] | — | 17.3% [K] | ~5,000 [K] | 2,666 [K] |
| Q2 FY26 (Sep-25) | 2,605 [K] | +0.3% [K] | — | 16.7% [K] | ~4,700 [K] | 2,853 [K] |
| Q3 FY26 (Dec-25) | ~2,635 [E: Q4 ÷ 1.006] | — | — | 17.6% [E: Q4 17.3% + 0.3] | ~3,350 [E: Q4 ÷ 1.032] | ~872 [E: Q4 ÷ 1.651] |
| Q4 FY26 (Mar-26) | 2,651.0 | +0.2% | −0.2% | 17.3% | 3,455 (−13.9% YoY) | 1,440 (14 deals) |
| **Q1 FY27 (Jun-26)** | **2,614.5** | **−1.2%** | **+0.9%** | **16.0%** (−130 bps QoQ, −120 bps YoY) | **3,370** (−2.4% QoQ cc) | **1,626** (13 deals, +12.9% QoQ cc) |
- **FY26 large-deal bookings ≈ $7.8bn** [E: sum of quarters; primer says $7.8bn +45%]; total bookings ≈ $16.5bn [E]. **Book-to-bill [E]:** FY26 total bookings ÷ revenue ≈ 1.6x; Q1 FY27 3,370 ÷ 2,614.5 = **1.29x**.
- **Q2 FY27 guidance:** IT Services revenue **$2,574–2,627M = −1.5% to +0.5% QoQ cc** (includes full-quarter Mindsprint; assumes ₹94.50/$) [V]. Q1 FY27 delivered −1.2% vs guide −2.0% to 0%.
- **Q1 FY27 margin drivers (qualitative):** −120 bps YoY from salary increase (effective 1 Mar), ramp-up costs of earlier large deals, AI investments and acquisition integration (DTS Harman, Mindsprint), partly offset by rupee depreciation and efficiencies; target to return to the **17.0–17.5% "narrow band"** [V]. Net income ₹3,360 cr (+0.6% YoY); EPS ₹3.20; ETR 22.6%; OCF 98% of NI [V].
- **SMU mix Q1 FY27 (% / YoY cc):** Americas 1 35.2% (flat; −2.3% QoQ), Americas 2 25.4% (**−7.3%**), Europe 27.2% (+6.0%), APMEA 12.2% (+13.5%) [V].
- **Sector mix Q1 FY27 (% / YoY cc):** BFSI 34.1% (+2.6%), Consumer 18.8% (+1.9%), Tech & Comms 17.0% (+10.8%), EMR 16.1% (**−8.9%**), Health 14.0% (−3.0%) [V].
- **Concentration (TTM, Q1 FY27):** top client **4.4%**, top-5 **14.3%**, top-10 **23.6%**; $100M+ clients 16, $50M+ 45; 1,233 active clients; 97.3% of FY26 revenue from existing clients [V]. Offshore revenue 59.7% / onsite 40.3% [V].
- **People:** "240K+ employees" at Mar-26 [V, deck]; Q1 FY27 headcount up only because of Mindsprint — **ex-Mindsprint −2,500** [V]; utilisation "came off slightly" (no figure); LTM voluntary attrition **13.9%** (13.8% Q4) [V].
- **Revenue per employee [E]:** annualised Q1 FY27 IT Services $2,614.5M × 4 ÷ ~240,000 = **~$43.6K** (headcount includes BPS staff — lowest of the six).
- **DSO:** not in fetched docs — screener debtor days FY26 **54** (lowest of the six; working-capital days −47).
- **Cash conversion:** FY26 OCF 112.6% of NI [V]; screener FY26 FCF ₹13,447 cr ÷ PAT 13,266 = **101%** [E].
- **Capital return:** **₹15,000 cr buyback at ₹250/share** (largest ever; 5.7% of capital; approved 16 Apr 2026, completed Q1 FY27) [V announcement / E completion]; FY26 dividends $1.3bn; 3-year (FY24–26) payout ~88% vs ≥70% policy; Q1 FY27 interim dividend ₹2 [V]. 1:1 bonus issue Dec 2024 [K].
- **M&A:** **DTS Harman (Harman's digital transformation solutions unit)** — fully in Q4 FY26 numbers (~0.7–0.8% revenue contribution per 1.5 months) [V]; **Mindsprint** (Olam group's IT/digital arm) — closed in Q1 FY27, with Olam relationship deepening [V]. Capco ($1.45bn, 2021) remains the BFSI consulting arm. Wipro Ventures "half a billion dollar" fund [V].
- **AI:** "AI-native business & platforms" unit (Nagendra Bandaru); Applied AI CoE for Claude (Anthropic); WINGS / Wipro Intelligence platform [V].
- **Ownership (screener, Sep-26 — latest shown for Wipro):** promoters **72.57%**, FIIs 9.46%, DIIs **5.14%** (7.86% Mar-26 — DIIs tendered into buyback), public 12.70%, 29.25 lakh shareholders [V].
- **US policy:** 13 Oct 2026 BSE statement — PERM suspension not material; **~80% of US workforce locally hired** [V].

### 4.3 Story bullets
1. **Still the growth laggard:** FY26 −1.6% cc; Q1 FY27 −1.2% QoQ; Q2 guide −1.5% to +0.5%; Americas 2 (BFSI/healthcare-heavy) −7.3% YoY. Large-deal wins have not converted.
2. **Margins slipped below the 17–17.5% band** to 16.0% on wage hikes, deal ramp-ups and two acquisitions.
3. **Shareholder-return story is the floor:** ₹15,000 cr buyback done, 6.5% dividend yield, P/E 12.7x, EV/EBITDA ~8x.
4. **Inorganic catch-up:** DTS Harman (engineering/automotive) and Mindsprint (agri-food captive with Olam anchor) — "GCC-buy" model.

---

## 5. Tech Mahindra Ltd (NSE: TECHM · BSE: 532755) — tier-1 (#5), turnaround

**Status:** listed; promoter Mahindra & Mahindra group (~35%). MD & CEO Mohit Joshi (since Dec 2023); CFO Rohit Anand. **Latest reported quarter: Q1 FY27 (Jun-26), results 16 Jul 2026. Q2 FY27 results on 15 Oct 2026** (BSE intimation 2 Oct [V]). Source: BSE filing "Outcome of Board Meeting… Q1 FY27" incl. press release and earnings presentation (https://www.bseindia.com/xml-data/corpfiling/AttachLive/69335367-5774-4df4-87d8-25013ef60722.pdf [V]) and Q1 FY27 call transcript (…/32f1b314-0ff0-4d2b-88f3-73df00061855.pdf [V]).

### 5.1 Standardised financials (screener.in consolidated, fetched 2026-10-13 [V] — https://www.screener.in/company/TECHM/consolidated/)
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 52,988 | **56,815** | +7.2% | 59,176 |
| Screener operating profit (EBITDA proxy) | 6,964 (13.1%) | 9,033 (15.9%) | +29.7% | 9,834 (16.6%) |
| Other income | 864 | −240 (hedge MTM / one-offs) | | −564 |
| Depreciation | 1,853 | 1,882 | | 1,902 |
| PAT (incl. minority) | 4,253 | **4,806** | +13.0% | 5,163 |
| EPS ₹ | 43.43 | 49.10 | | 52.41 |
| CFO / FCF (screener) | 5,786 / 5,303 | 6,172 / 5,626 | | |
| ROCE (screener) | 19% | 23% | | |
| Dividend payout (screener) | 94% | 94% | | |

- **Basis:** company **EBIT margin FY26 ≈ 12.5–12.6%** [E: average of quarterly 11.1/12.1/13.1/13.8%; primer says 12.6%, +290 bps] — quarterly EBIT % from the Q1 FY27 deck [V]. Screener 15.9% is pre-depreciation. Screener "other income" is negative because hedge MTM losses are booked there (Q1 FY27: MTM −$24.85M, of which −$14.55M in P&L) [V].
- **FY26 USD revenue** = 1,564 + 1,586 + 1,610 + 1,625 = **$6,385M** [V, deck quarterly series]; cc growth ~+0.6% (primer; not re-verified — FY26 press release not fetched).
- **Market data (screener 2026-10-13):** price ₹1,544; **m-cap ₹1,51,390 cr**; P/E **28.4x** (highest of the six); book value ₹302 → **P/B 5.1x** [E]; 52-wk H/L ₹1,854/₹1,304; dividend yield 3.30% (≈ FY26 DPS ₹51); ROCE 23.1%, ROE 17.5% [V].
- **Balance sheet:** screener borrowings ₹2,186 cr (Mar-26) are almost entirely leases — company borrowings ex-leases only **$7M**; **cash & equivalents incl. investments & margin money $1,026M = ₹9,695 cr (Jun-26)** vs screener investments ₹3,426 cr [V]. **Net cash ≈ ₹9,630 cr** [E].
- **EV/EBITDA [E]:** (1,51,390 − 9,630 + 2,120 leases) ÷ 9,834 = **14.6x** — richest of the six (market pricing the 15% margin target).

### 5.2 Native IT KPIs (Q1 FY27 deck/press release [V])
| Quarter | Rev $M | EBIT % | New deal wins TCV $M | LTM TCV $M | ROCE |
|---|---|---|---|---|---|
| Q1 FY26 (Jun-25) | 1,564 | 11.1% | 809 | 2,955 | 23.8% |
| Q2 FY26 (Sep-25) | 1,586 | 12.1% | 816 [K: TechM Q2 FY26 release; reconciles: 809+816+1,096+1,073 = 3,794] | 3,168 | 24.4% |
| Q3 FY26 (Dec-25) | 1,610 | 13.1% | 1,096 [K, same reconciliation] | 3,518 | 23.1% |
| Q4 FY26 (Mar-26) | 1,625 | 13.8% | 1,073 | 3,794 | 26.2% |
| **Q1 FY27 (Jun-26)** | **1,660** (+2.6% QoQ cc, **+6.6% YoY cc**) | **14.4%** (+60 bps QoQ, +330 bps YoY) | **1,078** (+33% YoY) | **4,063** (+37.5%) | **28.3%** |
- **FY26 TCV $3,794M (+41.6%)** [V: LTM at Q4]; **book-to-bill [E]:** FY26 3,794 ÷ 6,385 = 0.59x; Q1 FY27 1,078 ÷ 1,660 = 0.65x (TechM reports only *new* deal wins, not renewals).
- **Q1 FY27 P&L:** revenue ₹15,712 cr (+4.2% QoQ, +17.7% YoY); EBIT ₹2,264 cr (+53.3% YoY); PAT ₹1,465 cr (+28.4% YoY), PAT margin 9.3%; diluted EPS ₹16.50; ETR 27.2% [V].
- **Margin bridge (Q1 FY27, qualitative):** +volume growth and Project Fortius savings, partly offset by Comviva seasonality and business mix [V]. **Wage hike to be effective Q2 FY27, phased** — headwind in Q2 [V].
- **Geography (Q1 FY27 % / QoQ / YoY):** Americas 48.6% / −0.1% / +4.8%; Europe 27.5% / +8.1% / +12.1%; RoW 23.9% / +0.6% / +2.5% [V].
- **Verticals:** Communications **32.3%** (+1.3% YoY; one client pulled back a complex project, to reverse in Q2), Manufacturing 19.3% (**+17.2%**), BFSI 16.7% (+8.1%), Tech/Media/Ent 12.9% (+3.4%), Retail/Logistics 8.1% (+8.6%), Healthcare/LS 7.3% (+7.2%), Others 3.4% [V]. All verticals grew YoY.
- **Concentration:** top-5 **14.7%**, top-10 **24.0%**, top-20 37.3% (Q1 FY27; down from 15.6/25.2/39.0% a year ago). $50M+ clients 33 (+7 YoY), $20M+ 66, $10M+ 115, $1M+ 499 (−30 YoY — tail pruning) [V].
- **People:** total headcount **146,760** (−863 QoQ): IT 74,689, BPS 64,080, sales & support 7,991; IT onsite 22.5%; **IT utilisation 87.0%** (85.0% a year ago — highest disclosed in the batch); **LTM IT attrition 11.8%** [V].
- **Revenue per employee [E]:** annualised $1,660M × 4 ÷ avg(147,623, 146,760) = **$45.1K** (all staff incl. BPS); per IT employee ≈ $88K (not meaningful as BPS revenue included).
- **DSO 84 days** (95 a year ago, 89 at Mar-26) [V]. **FCF $167M = 108% of PAT** (65% a year ago) [V].
- **Hedge book** $0.72bn [V].
- **Targets ("Project Fortius", set Apr 2024 for FY27):** EBIT margin **15%**, growth above peer average, ROCE >30% — management on Q1 call: "on track for the 15%… upwards of 15%" exit; new AI programme **"Project Helix"** ("what Fortius has been to margin, Helix is to AI-led transformation") [V]. No numeric revenue guidance.
- **Capital return:** FY26 record dividend ₹51/share (primer; consistent with screener yield) — payout policy ~85% of FCF [K: TechM capital allocation policy 2024]. No buyback.
- **Portfolio clean-up:** liquidated step-down subsidiary LCC Networks Poland (BSE filing 9 Oct 2026 [V]); Satyam-era ₹1,230 cr "suspense account" claims still an emphasis-of-matter in the audit report [V].
- **Ownership (screener, Jun-26):** promoters **34.96%**, FIIs 18.66% (24.19% Dec-24), DIIs **36.92%**, public 9.28% [V].

### 5.3 Story bullets
1. **The turnaround is delivering:** 11 straight quarters of EBIT expansion to 14.4%, ROCE 28.3%, FCF/PAT >100%, DSO −11 days YoY — the 15% FY27 target looks reachable before the Q2 wage hike.
2. **Growth now leads the tier-1s on YoY cc (+6.6%)**, driven by Manufacturing and Europe, while Communications (32%) is still flat.
3. **Priced for success:** P/E 28x, EV/EBITDA ~15x — a premium to TCS/Infosys despite lower margins.
4. **Tail pruning:** $1M+ client count down 30 YoY while $50M+ up 7 — classic mining strategy.

---

## 6. LTM Ltd, formerly LTIMindtree (NSE: LTM · BSE: 540005) — tier-1.5 / upper mid-tier

**Status:** listed; promoter Larsen & Toubro (68.49%). **Renamed LTIMindtree Ltd → LTM Ltd with effect from 17 Mar 2026** (fresh certificate of incorporation; Angel One report fetched [V-secondary]; filings now carry "LTM Limited (Formerly LTIMindtree Limited)" [V]); NSE symbol now LTM. No merger/demerger pending; **proposed acquisition of Randstad's technology & consulting business (Europe & Australia)** pending regulatory approvals. CEO & MD Venu Lambu (since 31 May 2025, succeeding Debashis Chatterjee [K/primer]); CFO & WTD Vipul Chandra. **Latest reported quarter: Q1 FY27 (Jun-26), results 11 Jul 2026. Q2 FY27 board meeting/results 16 Oct 2026** (BSE intimation 8 Oct; call 16 Oct 18:00 IST [V]). Sources: Q1 FY27 investor release (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/688ab977-49ac-448b-907e-f7411a08af5e.pdf [V]), Q1 call transcript (…/6f02061b-223a-4268-8ce0-701e016d14d0.pdf [V]), Randstad deal deck 22 May 2026 (…/2664e71a-20d8-4972-8001-c4ac0a31a0b5.pdf [V]), Investor Day deck 2 Jun 2026 (…/e29489e6-eec4-4a12-ae9e-614e9b8f572d.pdf [V]).

### 6.1 Standardised financials (screener.in consolidated, fetched 2026-10-13 [V] — https://www.screener.in/company/LTM/consolidated/)
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 38,008 | **42,308** | +11.3% | 44,075 |
| Screener operating profit (EBITDA proxy) | 6,495 (17.1%) | 7,555 (17.9%) | +16.3% | 7,966 (18.1%) |
| Other income (incl. forex) | 990 | 566 | | 430 |
| Depreciation | 992 | 1,054 | | 1,072 |
| PAT | 4,602 | **4,983** | +8.3% | 5,197 |
| EPS ₹ | 155.21 | 169.25 | | 176.40 |
| CFO / FCF (screener) | 4,546 / 3,612 | 4,799 / 3,890 | | |
| ROCE (screener) | 28% | 30% | | |
| Dividend payout (screener) | 42% | 44% | | |

- **Basis:** company **EBIT FY26 = 15.4%** [E: Σ quarterly EBIT ₹65,011 mn ÷ revenue ₹4,23,076 mn; quarterly 14.3/15.9/16.1/15.1%] — matches primer; Q4 FY26 had a ₹62 cr exceptional item (labour codes); TTM EBIT 15.6%, TTM PAT margin 12.7% ex-exceptional [V]. Screener 17.9% is EBITDA (company EBITDA Q1 FY27 17.8%).
- **FY26 USD revenue** = 1,153.3 + 1,180.1 + 1,208.0 + 1,222.4 = **$4,764M (+6% USD)**; **cc growth ≈ +5.3%** [E: mean of quarterly YoY cc 4.4/4.4/5.2/7.0%] [V series]. **FY26 order inflow $6.60bn** (1.63+1.59+1.69+1.69; "highest ever"; 10 large deals, +100% YoY; two mega deals) [V].
- **Market data (screener 2026-10-13):** price ₹4,215; **m-cap ₹1,24,563 cr**; P/E 22.2x; book value ₹810 → **P/B 5.2x** [E]; 52-wk H/L ₹6,430/₹3,528; dividend yield 1.78%; ROCE 29.6%, ROE 23.1% [V].
- **Balance sheet:** screener borrowings ₹2,310 cr (Mar-26; mostly leases); screener investments ₹12,568 cr — company **cash & investments ₹15,021 cr ($1.59bn) at Jun-26** (₹15,445 cr Mar-26) [V]. **Net cash ≈ ₹12,700 cr** [E: 15,021 − 2,310]. CRISIL AAA/Stable reaffirmed [V].
- **EV/EBITDA [E]:** (1,24,563 − 15,021 + 2,310) ÷ 7,966 = **14.0x**.

### 6.2 Native IT KPIs (Q1 FY27 investor release [V])
| Quarter | Rev $M | QoQ cc | YoY cc | EBIT % | Order inflow $bn | Utilisation (ex-trainees) | LTM attrition |
|---|---|---|---|---|---|---|---|
| Q1 FY26 | 1,153.3 | +0.8% | +4.4% | 14.3% | 1.63 | 88.1% | 14.4% |
| Q2 FY26 | 1,180.1 | +2.4% | +4.4% | 15.9% | 1.59 | 88.1% | 14.2% |
| Q3 FY26 | 1,208.0 | +2.4% | +5.2% | 16.1% | 1.69 | 86.9% | 13.8% |
| Q4 FY26 | 1,222.4 | +1.2% | +7.0% | 15.1% | 1.69 | 85.7% | 13.3% |
| **Q1 FY27** | **1,223.5** | **+0.3%** | **+6.4%** | **15.5%** (+40 bps QoQ despite wage hikes; +120 bps YoY) | **1.68** (two large deals) | **86.4%** | **13.3%** |
- **Book-to-bill [E]:** FY26 6.60 ÷ 4.764 = **1.39x**; Q1 FY27 1.68 ÷ 1.2235 = 1.37x.
- **Q1 FY27 P&L (₹ mn):** revenue 1,16,080 (+18.0% YoY); gross margin 28.0%; SG&A 11,854 (−2.1% YoY — "Fit4Future" indirect-cost re-baselining); EBITDA 20,606 (17.8%); EBIT 17,993 (15.5%); forex loss −2,664; other income 5,218; **PAT 14,686 (+17.1% YoY), EPS ₹49.4** [V]. Hedges outstanding $5,031M at avg ₹95.17 [V].
- **Segments (re-organised in Q1 FY27; Q1 FY27 % / YoY USD / QoQ cc):** Financial Services 34.0% / −2.6% / +3.2%; Consumer (now incl. healthcare, life sciences, public services) 26.6% / +17.3% / −0.7%; Technology & Services 20.0% / +9.7% / +3.4%; Production (ex-Manufacturing & Resources) 19.4% / +5.1% / −5.7% [V].
- **Geography:** North America **73.9%** (+5.4% YoY USD), Europe 15.0% (+8.4%), RoW 11.1% (+7.5%); Middle East <3% [V].
- **Concentration:** top-5 **23.5%**, top-10 **32.0%**, top-20 42.8%, top-40 56.1% (top-5 27.3% a year ago) — **highest client concentration of the six**; $100M+ clients 2, $50M+ 15, $20M+ 52 (+11 YoY), $10M+ 104; 740 active clients [V].
- **People:** **87,886** employees (software professionals 83,185); offshore effort 85.8% (onsite 14.2%) [V].
- **Revenue per employee [E]:** annualised $1,223.5M × 4 ÷ avg(87,950, 87,886) = **$55.7K**; FY26 $4,764M ÷ avg(84,307 [K: Mar-25], 87,950) = $55.3K.
- **DSO (TTM):** billed 56 days; billed + unbilled **85 days** [V].
- **FCF:** FY26 ₹3,890 cr (Σ quarters 7,614+9,993+10,826+10,463 ₹ mn) = **78% of PAT** [E]; Q1 FY27 ₹922 cr = 63% of PAT [E]. Company ROCE 29.8%, ROE 22.0% (Q1 FY27) [V].
- **Dividend:** FY26 ₹53/share (primer; screener payout 44%) — lowest payout of the six; L&T is main recipient.
- **Guidance / targets:** no numeric annual guidance; CEO: FY27 growth "will be better than FY2026" (6%) [V, Q1 call]. **Investor Day (2 Jun 2026) "Lakshya FY31": ~2x revenue FY26→FY31 and ~+200 bps EBIT margin by FY31**; Randstad deal "no material margin impact in FY27", margin support from year 2 [V].
- **M&A — Randstad:** proposed acquisition of Randstad's technology & consulting services business in **France, Germany, Belgium/Luxembourg and Australia (+ nearshore Romania, Portugal)**: **revenue $500M+ (€469M; 78% Europe/22% Australia), EV €160M** cash/debt-free (~0.34x sales), ~2,900 billable staff, 15+ $10M+ accounts; plus a 5-year IT partnership to transform Randstad's India GCC and Randstad as talent MSP for LTM (announced 22 May 2026; regulatory filings made, "on track" per Q1 call) [V]. Would lift Europe from ~15% to ~22% of revenue [E].
- **Ownership (screener, Jun-26):** promoter L&T **68.49%**, FIIs 6.31%, DIIs 16.73%, public 8.30% [V].

### 6.3 Story bullets
1. **Fastest organic grower among the six in FY26 (~5–6% cc, 6% USD)** with record $6.6bn inflow, but Q1 FY27 sequential growth slowed to +0.3% cc (Production −5.7% QoQ, RoW −9.4% QoQ).
2. **Margin rebuild:** 15.5% EBIT despite wage hikes, via Fit4Future (SG&A down YoY), utilisation 86.4%; target +200 bps by FY31.
3. **Rename + Randstad = Europe push:** cheap (€160M for $500M revenue) but margin-dilutive onshore business; closing pending.
4. **Concentration risk:** top-5 clients 23.5%, North America 74%, FS 34% — single-client ramp-downs move the quarter.

---

# PRIMER ISSUES (batch 1)

Each member primer was read (cover strip, "what's new" box, snapshot/first sections) and grepped for m-cap, P/E, revenue, margin, headcount, attrition, promoter %, CEO and key events. Every row lists the primer statement, the verified figure with source, and the fix. Market data are screener.in as fetched 2026-10-13 ~15:08 UTC.

### primers/tata-consultancy-services.html (cover "last refreshed 30 Jun 2026")
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


### primers/infosys.html (cover "last refreshed 30 Jun 2026")
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | FY27 guidance "1.5%–3.5%" (cover snapshot, timeline, multiple places) | **Cut to 1.5–3.0% cc on 23 Jul 2026**; margin 20–22% unchanged (Q1 FY27 transcript, BSE [V]) | Update |
| 2 | CEO "Salil Parekh" with no succession | **Ashiss Dash named CEO-designate, takes over 1 Apr 2027**; Parekh's term ends 31 Mar 2027 [V] | Add major event |
| 3 | Market cap "~₹4.2 L Cr (Jun '26)", P/E "~14×" | **₹4,32,301 cr at ₹1,062; P/E 13.9x** (screener 2026-10-13 [V]) | Update m-cap/date |
| 4 | Headcount "~329,000 / ~328,600" | ~327,600 at Jun-26 (−500 QoQ) [V/E] | Minor update |
| 5 | Attrition 12.6% | **13.0%** (Q1 FY27) [V] | Update |
| 6 | Ownership "founders ~14%, FII ~28%" | Founders **13.82%**, FIIs **27.09%**, DIIs **42.78%** (Jun-26 [V]) | Update; add DII figure |
| 7 | No Q1 FY27 | Q1 FY27: $5,082M, +1.0% QoQ / +2.4% YoY cc, margin 21.1%, large deals $3.6bn (61% net new), FCF $955M, utilisation 84.9%, AI = 8.2% of revenue [V] | Add whatsnew |
| 8 | "~113% FCF / net profit" | FY26 adjusted FCF/NP **106%** (company) [V]; Q1 FY27 116.5% | Correct |
| 9 | Missing events | Acquisitions Stratus (closed), Optimum, Versent, Australian JV (pending); Q2 results date 23 Oct 2026; US PERM statement 10 Oct 2026 (no material impact) [V] | Add |
| 10 | Revenue "$20.2bn" | Company says "crossed $20bn" [V]; $20.2bn not re-verified (fact sheet blocked) — OK but flag | — |


### primers/hcl-technologies.html (cover "last refreshed 30 Jun 2026")
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


### primers/wipro.html (cover "last refreshed 1 Jul 2026")
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "Market cap ~₹1.82 L Cr (Jul '26)"; "~18× forward P/E" | **₹1,67,607 cr at ₹169; trailing P/E 12.7x** (screener 2026-10-13 [V]) | Update |
| 2 | "around 230,000 employees" | "240K+ employees" (Mar-26, Q1 FY27 deck [V]) | Correct |
| 3 | Peer frame: "TCS roughly flat" cc in FY26 | TCS FY26 **−2.4% cc** (−0.5% USD) [V, TCS Q4 call] — Wipro was not "the softest of the big-four" on cc (TCS −2.4% vs Wipro −1.6%) | Correct both statements |
| 4 | Whatsnew stops at Q4 FY26 / Q1 guide | **Q1 FY27: $2,614.5M, −1.2% QoQ / +0.9% YoY cc, EBIT 16.0%, bookings $3.37bn, large deals $1.63bn; Q2 guide −1.5% to +0.5%** [V] | Add |
| 5 | Buyback "completed Jun 2026" | Consistent: gross cash $5.9bn→$4.3bn and share count −5.5% [V/E] ✓ | OK |
| 6 | Promoter ~72.7% | **72.57%** (Sep-26 [V]) | Minor |
| 7 | Missing events | Mindsprint acquisition closed (Q1 FY27); DTS Harman integration; Anthropic Claude CoE; AI-native unit; PERM statement 13 Oct 2026; Q2 results 15 Oct 2026 [V] | Add |
| 8 | IT-services margin 17.2% shown as current | **16.0%** in Q1 FY27 [V] | Update |
| 9 | Attrition (if shown) | 13.9% LTM Q1 FY27 [V] | — |


### primers/tech-mahindra.html (cover "last refreshed 2 Jul 2026")
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "Market cap ~₹1.4 L Cr (Jun–Jul '26)"; sources "~₹1.375 L Cr, P/E ~27–28, div. yield ~3.6%" | **₹1,51,390 cr at ₹1,544; P/E 28.4x; yield 3.30%** (screener 2026-10-13 [V]) | Update |
| 2 | Headcount 147,623 / "~148,000" | **146,760** (Jun-26; IT 74,689, BPS 64,080) [V] | Update |
| 3 | IT attrition "~12.1%" | **11.8%** [V] | Update |
| 4 | Q4 "exit margin 13.8%", "10th straight quarter" | **Q1 FY27 EBIT 14.4%** (11th quarter of expansion) [V] | Update |
| 5 | TCV "$3,794 mn" FY26 | ✓; now LTM **$4,063M** (+37.5%), Q1 FY27 $1,078M [V] | Add |
| 6 | Missing Q1 FY27 | $1,660M, +2.6% QoQ / +6.6% YoY cc; PAT ₹1,465 cr; FCF $167M; utilisation 87%; DSO 84 [V] | Add whatsnew |
| 7 | Promoter "~34.97% (Mar 2026)" | 34.96% (Jun-26) ✓; FIIs 18.66%, DIIs 36.92% [V] | Minor |
| 8 | Missing events | Project Helix (AI programme) launched; phased wage hike from Q2 FY27; Q2 results 15 Oct 2026; LCC Poland liquidation [V] | Add |
| 9 | ROCE (sources) 23.1% | Company quarterly ROCE 28.3% (Q1 FY27) vs screener annual 23% — state basis [V] | Clarify |


### primers/ltm-ltimindtree.html (cover "last refreshed 2 Jul 2026")
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "Market cap ~₹1.1 L Cr (Jun–Jul '26)"; "20–23× trailing" | **₹1,24,563 cr at ₹4,215; P/E 22.2x** (screener 2026-10-13 [V]) | Update |
| 2 | FY26 "revenue $4.76 bn (+6.0% cc)"; chart "FY26 +6.0% cc" | $4,764M ✓ but **+6% is USD growth** (Investor Day "6% USD revenue growth" [V]); quarterly YoY cc 4.4/4.4/5.2/7.0% → **~5.3% cc** [E] | Correct cc figure |
| 3 | Sources line: "Q4 FY26 … Revenue ₹9,836 Cr, PAT ₹1,392 Cr" | Q4 FY26 revenue **₹11,292 cr** (₹1,12,917 mn); PAT ₹1,341 cr ex-exceptional / ₹1,387 cr reported [V] — ₹9,836 cr is wrong | Fix |
| 4 | Segment names "BFSI ~33%" etc. | Segments **re-organised in Q1 FY27**: Financial Services 34.0%, Consumer 26.6%, Technology & Services 20.0%, Production 19.4% [V] | Update taxonomy |
| 5 | "~72% North America" | **73.9%** (Q1 FY27) [V] | Update |
| 6 | Peer table "HCLTech ~19% margin" | HCLTech FY26 EBIT **17.2%** (17.9% ex-restructuring) [V] | Correct |
| 7 | No Q1 FY27 | $1,223.5M, +0.3% QoQ / +6.4% YoY cc, EBIT 15.5%, PAT ₹1,469 cr, inflow $1.68bn, utilisation 86.4% [V] | Add whatsnew |
| 8 | Randstad "margin-dilutive deal" (no terms) | **EV €160M for $500M+ revenue, ~2,900 staff, FR/DE/BE/LU/AU; announced 22 May 2026; regulatory approvals pending** [V] | Add terms |
| 9 | Headcount ~87,950 / attrition 13.3% | 87,886 / 13.3% (Jun-26) ✓ [V] | Minor |
| 10 | Ownership "L&T ~68.5%, DIIs ~17%, FIIs ~7%" | 68.49% / 16.73% / **6.31%** (Jun-26) [V] | Minor |
| 11 | Lakshya 2031 | Verified: ~2x revenue and ~+200 bps EBIT FY26→FY31 (Investor Day deck [V]) — check primer wording matches | — |
