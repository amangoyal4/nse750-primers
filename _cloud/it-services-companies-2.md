# IT Services — Company packs, batch 2 (Persistent, Coforge, Mphasis, Hexaware, Zensar, Birlasoft)

Prepared 2026-10-13 (company-research subagent, batch 2).

Tags: **[V]** fetched this session (URL given), **[V-secondary]** fetched secondary report of a primary disclosure, **[V-title]** BSE announcement title/summary seen on the fetched screener feed (PDF not opened), **[K]** from memory with source named, **[E]** my estimate / derivation (formula shown).

**Sources used for every pack**
- screener.in consolidated pages fetched via curl on **2026-10-13 15:23 UTC (= 20:53 IST, i.e. 13 Oct 2026 closing prices)**: `https://www.screener.in/company/<NSE>/consolidated/` [V]. Screener "Operating Profit" = revenue − expenses before other income and depreciation (an EBITDA proxy); for Persistent and Coforge screener nets FX/hedge losses inside expenses, so it differs from company EBITDA (stated in each pack). Screener "Borrowings" include lease liabilities.
- Company results documents filed on BSE (`https://www.bseindia.com/xml-data/corpfiling/AttachLive/<id>.pdf`) and company IR sites (Persistent, Coforge, Zensar transcripts; Mphasis xlsx fact sheet; Birlasoft investor updates), fetched with curl and parsed with pdftotext/openpyxl [V]. The BSE announcement API returned "Access Denied"; announcement lists were read from screener's BSE feed.
- All six primers were read (cover strip, what's-new box, snapshot/first sections) and grepped for key figures.

**Results calendar status (as of 2026-10-13):** **No batch-2 company has reported the Sep-26 quarter.** Latest reported: Persistent Q1 FY27 (board 1–2 Aug 2026); Coforge Q1 FY27 (27 Jul); Mphasis Q1 FY27 (23 Jul; **Q2 FY27 call fixed for 6 Nov 2026**, BSE intimation 9 Oct [V]); Hexaware Q2 CY26 = Apr–Jun 2026 (29 Jul; calendar-year reporter); Zensar Q1 FY27 (29 Jul; trading window closed from 1 Oct); Birlasoft Q1 FY27 (28 Jul).

**Corporate events since the primers were refreshed (all major):** Persistent's **€1.27bn-EV take-private of Nagarro SE** (94.04% secured 9 Oct 2026; close by end-Q1 CY27; €1.4bn bridge, ₹5,000 cr NCDs, ICRA AA+ watch negative); Coforge's **$2.35bn-EV Encora acquisition** (closed ~1 May 2026) and **completed Cigniti amalgamation** (effective 5 May 2026), plus a US SEC Form F-1 on file; Mphasis' TAP acquisition and Blackstone stake at 30.5%; Hexaware's **CY26 guidance cut** (29 Jul) and Anthropic partnership; Zensar's **$210M mega-deal**; Birlasoft's OpenAI partnership and July wage hike. All six remain listed; no demergers.

## 0. Batch-2 summary grid (for the KPI appendix)

Market data = screener.in, fetched 2026-10-13 15:23 UTC (13 Oct 2026 close). ₹ cr unless stated. "Co" = company-reported basis. Hexaware column = **calendar year** (CY2025 in the FY26 rows; latest quarter Apr–Jun 2026).

| Metric | Persistent | Coforge | Mphasis | Hexaware (CY) | Zensar | Birlasoft |
|---|---|---|---|---|---|---|
| Latest quarter reported | Q1 FY27 (2 Aug) | Q1 FY27 (27 Jul) | Q1 FY27 (23 Jul); Q2 on 6 Nov | Q2 CY26 (29 Jul) | Q1 FY27 (29 Jul) | Q1 FY27 (28 Jul) |
| FY26 revenue ₹ cr (screener) | 14,748 | 16,403 | 15,880 | 13,430 (CY25) | 5,687 | 5,310 |
| FY26 revenue growth (₹) | +23.5% | +35.9% | +11.6% | +12.2% | +7.7% | −1.2% |
| FY26 revenue $ (Co) | $1,654.4M | $1,870M | $1,796.5M | $1,537.4M | $643.7M | $597.5M |
| FY26 cc growth (Co) | **+17.5%** | n/d (USD +29.2%, acquisition-aided) | +6.7% | +7.1% | +1.7% | **−6.5%** |
| Latest-qtr QoQ cc | +4.1% | +22.3% reported / +1.1% organic / +5.2% organic ex-exits | +2.1% | +4.4% | +1.1% | +0.3% |
| Latest-qtr YoY cc | +16.5% | +33.3% (USD, incl. Encora) | +8.3% | +6.3% | −2.0% | −3.0% |
| FY26 Co EBIT margin | 15.6% (16.2% ex Labour Code) | 14.4% | 15.3% | n/a — EBITDA 17.1% (incl. other income); EBIT ~11.6% [E] | 14.5% | ~14.0% rep. / ~14.8% adj. |
| Latest-qtr Co EBIT margin | 16.0% | 16.0% (organic 16.7%) | 14.8% | 13.6% | 12.7% | 14.7% |
| Screener EBITDA margin FY26 | 19.0% | 17.9% | 18.8% | 14.3% | 16.1% | 16.3% |
| FY26 PAT (screener) | 1,865 | 1,745 (attrib. 1,556) | 1,863 | 1,368 | 775 | 518 |
| ROCE / ROE (screener) | 34.4% / 27.2% | 23.5% / 21.4% | 22.1% / 18.5% | 30.1% / 24.9% | 22.8% / 17.3% | 21.2% / 14.1% |
| Net cash (Co basis, latest) | ~₹2,230 cr (pre-Nagarro; →1.9–2.5x ND/EBITDA at close) | **net debt ~₹3,590 cr** ($550M loan) | ~₹1,990 cr | ~₹980 cr | ~₹3,006 cr ($317.5M) | ~₹2,740 cr ($304M) |
| M-cap (13 Oct 2026) | **94,624** | 85,599 | 47,293 | 34,315 | 10,907 | 8,275 |
| Price | ₹5,988 | ₹1,929 | ₹2,466 | ₹562 | ₹479 | ₹297 |
| P/E (TTM) / P/B | 47.6x / 12.0x | 44.6x / 6.8x | 24.4x / 4.4x | 24.2x / 5.1x | 13.7x / 2.3x | 13.9x / 2.0x |
| EV/EBITDA (TTM) [E] | ~32x (~24x pro-forma Nagarro) | ~26x (~20x run-rate) | ~14.8x | ~15.5x | ~8.5x | ~6.0x |
| Dividend yield | 0.67% | 0.62% | 2.51% | 2.05% | 3.13% | 2.19% |
| FY26 deal TCV | $2,405M total (new $1,466M) | $2,262M order intake | $2,123M net-new (record) | **not disclosed** | n/d (Q4 order book $401.8M) | $658M (new $251M) |
| Latest-qtr TCV | **$1,146M** (record; $650M deal) | $691M; 12-m exec. book $2,228M | $461M | n/d | $149.2M | $169M |
| Book-to-bill FY26 [E] | 1.45x (new 0.89x) | 1.21x | 1.18x (net-new) | n/a | n/a | 1.10x (new 0.42x) |
| Headcount (latest) | 28,640 | 46,228 | 32,097 | 34,506 | 11,342 | 11,057 |
| LTM attrition | 12.3% | 10.4% (ex-BPS) | not disclosed | 11.2% (IT) | **9.6%** | 11.7% |
| Utilisation | 86.5% (incl. trainees) | 82.5% (incl. trainees) | 81.0% | 84.8% (IT) | 85.1% (ex-trainees) | 81.7% |
| Revenue/employee, latest qtr annualised [E] | $64.5K | $57.8K (distorted; Co IT/billable $70.6K) | $59.6K | $47.5K | $57.7K | $51.8K |
| Top-5 / top-10 clients | 33.2% / 43.0% | 18.0% / 26.1% | 40% / 56% | 25.3% / 35.7% | 24.7% / 38.9% | **43.4% / 56.2%** |
| DSO (Co) | 61 billed / 86 incl. unbilled | 63 billed / 102 total | **95** | 39 / 78 | 48 / 75 | 55 billed |
| FCF / PAT FY26 | 84% [E] | 76% (Co) | **50%** [E, Co data] | 115% [E] (CY25) | 93% [E] | 85% [E] |
| Guidance | $2bn exit run-rate by Q4 FY27; EBIT aspiration 16–17% | FY27 EBIT 15.5%, EBITDA >20.5%, FCF/PAT 100%; no broad wage hike till ≥Jan-27 | HSD–LDD cc; EBIT 14.75–15.75%; Q2 best seq. growth in 3 yrs | **CY26 cut to 6–7%**; EBIT 13–14% | none (margins flat Q2–Q3, up from Q3) | none; wage hike Jul-26 (170–200 bps gross) |
| Promoter (latest) | 30.29% (Sep-26; founders) | 0% | 30.54% (Blackstone; screener: 100% pledged) | 74.30% (Carlyle) | 49.00% (RPG) | 40.38% (CKA Birla) |
| FII / DII | 20.79% / 31.96% | 24.31% / 42.62% (public 33.07%) | 19.50% / 45.31% | 3.19% / 16.06% | 10.73% / 21.98% | 12.78% / 21.98% |

### Cross-company read-across for the sub-sector angle
- **Mid-tier divergence is extreme:** Persistent (+16.5% cc YoY) and Coforge (organic ex-exits +5.2% QoQ) out-grow tier-1s 5–6x; Mphasis (+8.3%) and Hexaware (+6.3%) are mid-single to high-single digit; **Zensar (−2.0%) and Birlasoft (−3.0%) are still shrinking** in cc. The market pays for it: P/E 45–48x vs 14x, EV/EBITDA 26–32x vs 6–9x.
- **Scale via M&A is the new mid-tier playbook:** Persistent–Nagarro (€1.27bn EV, ~$1.14bn revenue, Europe) and Coforge–Encora ($2.35bn EV, ~$600M revenue, LATAM/US hi-tech) are the two largest Indian IT acquisitions of 2026 in this batch; both are debt-funded (Persistent net debt/EBITDA 1.9–2.5x at close; Coforge $550M term loan) — a break from the net-cash model. Mphasis buys contracts ("Red Oak") and capabilities (TAP) with earn-outs through the P&L.
- **Mega-deals and vendor consolidation:** Persistent $650M/6.5-yr (tech client), Zensar $210M (BFSI, its largest ever), Mphasis 3 large deals incl. one >$100M, Hexaware consolidation deals at top-15 clients (down to 3 vendors) — consolidation/AI-productivity deals are where mid-tiers win share, at "fairly healthy but below company-average" margins (Persistent CEO).
- **AI deflation language is explicit:** Persistent CEO — AI cannibalises T&M revenue "for the scope of work they do currently… yes"; Hexaware — AI "will also be a dampener to the existing business"; "tokenomics… impact on IT labour budgets"; Coforge prices agents at ~$3K/month vs ~$19K/month per developer-equivalent; Birlasoft ">25% of code via agentic tools". Partnerships: Hexaware–Anthropic (Claude Partner Network), Birlasoft–OpenAI Select Partner, Nagarro an OpenAI reseller.
- **Margins:** rupee at ~₹94.5–95/$ (vs ~₹85.5 a year ago) is a tailwind but **hedge books at ₹87–93 created FX losses** (Persistent −₹105 cr in Q1; Coforge ~$10M + $14M MTM; Mphasis H1 losses). Wage hikes: Birlasoft from 1 Jul (170–200 bps gross), Persistent usually Q2; **Coforge defers broad hikes to ≥Jan 2027**. Zensar cites "travel, visa and training" costs (−1.5 pp) — the H-1B fee environment showing up in mid-tier P&Ls.
- **Utilisation dipped into Q1 ahead of ramps** (Persistent 88.0 → 86.5%, Mphasis 83.6 → 81.0%) — mid-tiers are pre-hiring for deal ramps; attrition is low everywhere (9.6–12.3%).
- **GCCs as customer:** Mphasis RoW +6.1% QoQ "led by GCCs"; Birlasoft ranked in ISG GCC services; Hexaware/Zensar not specific.
- **Ownership:** PE overhangs persist (Carlyle 74.3% of Hexaware; Blackstone 30.5% of Mphasis, pledged per screener); FIIs are exiting across the batch (Coforge FII 42.6% → 24.3% in 18 months; Hexaware 10.6% → 3.2%; Zensar 16.5% → 10.7%) with DIIs absorbing (Mphasis DII 45%).
- **Working capital is the weak spot:** Mphasis DSO 95 days and FCF/PAT ~50%; Coforge DSO 102 days total; Persistent billed DSO jumped 53 → 61.

### Figures marked unverified / secondary / estimated in this file
1. **Mphasis LTM attrition** — not in the fetched fact sheet (unverified). **Mphasis promoter pledge**: screener says 100% pledged; primer says "no encumbrance" — not reconciled to a BSE encumbrance filing this session.
2. **Coforge FY26 cc growth** not stated in the fetched release (only USD +29.2%; Q4 YoY cc 28.7%); **purpose of the US SEC Form F-1** not confirmed; Encora sellers (Advent/Warburg Pincus) [K]; Cigniti amalgamation dates and share allotment [V-secondary: scanx.trade/prysm.fi via search].
3. **Persistent** Q1 FY27 results date (1–2 Aug) and fund-raise board date (2 Sep) [V-secondary: multibagg/tipranks via search]; CDO resignation [V-title]; Q1 FY27 margin-bridge decomposition is mine [E] from the company P&L; $5bn FY31 target [K].
4. **Hexaware** CY25 EBIT (not published; ~11.6% reported [E]); vertical shares read from a pie chart (±1 pp); IPO price/listing details [K, consistent with primer]; Q3 CY25 revenue [E].
5. **Mphasis** CEO re-appointment term start (Oct 2026) [V-secondary]; Blackstone Nov-2025 sale price/size [V-secondary: PTI/The Week].
6. **Birlasoft** FY26 EBIT reported vs adjusted (fact-sheet column order ambiguous) [E]; CFO/CEO-Americas dates from primer [K].
7. Zensar Q3 FY26 order book [E]; all EV/EBITDA, P/B, revenue/employee, book-to-bill, net cash and FCF/PAT ratios are my computations [E] (formulas in each pack).


---

## 1. Persistent Systems Ltd (NSE: PERSISTENT · BSE: 533179) — mid-tier, growth leader

**Status:** listed; founder-promoter Dr Anand Deshpande (Chairman & MD); CEO & ED Sandeep Kalra; CFO Vinit Teredesai. **Latest reported quarter: Q1 FY27 (Jun-26), board approved results 1–2 Aug 2026** (multibagg/tipranks reports, search [V-secondary]; figures below from the company's BSE-filed Aug-2026 investor deck [V]). **Q2 FY27 not out** — no board-meeting intimation among the last five BSE announcements as of 13 Oct 2026 (screener announcement feed [V]); last year Q2 was reported 14 Oct. **Biggest event: the Nagarro SE take-private (see 1.3) — Persistent becomes a leveraged ~$2.9bn combined company; ICRA put the AA+ rating on Watch Negative.** Other filings: Chief Delivery Officer Dr Rajesh Gharpure resigned effective 14 Oct 2026 (BSE, 9 Oct [V-title]); third Hyderabad facility opened (13 Oct).

Sources: screener https://www.screener.in/company/PERSISTENT/consolidated/ (curl, **2026-10-13 15:23 UTC** = 13 Oct close) [V]; Q1 FY27 investor deck (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/3b69fe96-720a-48da-9ace-c045c4422419.pdf) [V]; Q4 FY26 deck (BSE …/eb576c3c-6adf-4f63-9347-4de1b08d8a60.pdf) [V]; Q4 FY26 call transcript (https://www.persistent.com/wp-content/uploads/2026/04/Analyst-Call-Transcript-Q4FY26.pdf) [V]; Nagarro/large-deal call 28 Jun 2026 (BSE …/b1c49752-0908-4750-9177-398a60654630.pdf) [V]; Sept-2026 investor deck (BSE …/05c651aa-b523-490c-bc71-82aa02d579c0.pdf) [V]; Nagarro offer-result release 9 Oct 2026 (BSE …/52866f53-edce-424a-8697-a963bbe20a83.pdf) [V]; ICRA letter 9 Oct 2026 (BSE …/1ffb29fc-9816-4e05-a1b6-3eb4f3035e9a.pdf) [V].

### 1.1 Standardised financials (screener consolidated [V])
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 11,939 | **14,748** | +23.5% | 15,718 |
| Screener operating profit (EBITDA proxy) | 2,058 (17.2%) | 2,796 (19.0%) | +35.9% | 2,881 (18.3%) |
| Other income | 138 | 91 | | 107 |
| Interest / Depreciation | 67 / 307 | 73 / 403 | | 85 / 424 |
| PAT | 1,400 | **1,865** | +33.2% | 1,923 |
| EPS ₹ | 90.54 | 118.23 | +30.6% | 122.18 |
| CFO / FCF (screener) | 1,157 / 964 | 1,767 / 1,572 | | |
| ROCE | 31% | 34% | | |
| Dividend payout | 39% | 34% (DPS ₹40: ₹22 interim + ₹18 final) | | |

- **Basis:** company **EBIT FY26 ₹2,303.5 cr = 15.6%** (vs 14.7% FY25), *after* a one-off ~0.6 pp hit from India's new Labour Codes (2.3 pp in Q3 FY26) → ~16.2% underlying [V, Q4 deck]. Company EBIT = PBT − other income net of finance cost − FX gain/loss, i.e. includes amortisation of acquired intangibles. Screener "operating profit" differs from company EBITDA because screener puts **FX gains/losses inside expenses**: Q1 FY27 screener OP ₹697 cr vs company EBITDA ₹802 cr — gap ≈ the ₹105 cr FX loss [V both].
- **Market data (screener 2026-10-13):** price **₹5,988**; **m-cap ₹94,624 cr**; P/E **47.6x**; book value ₹497 → **P/B 12.0x** [E]; 52-wk H/L ₹6,599 / ₹4,243; div. yield 0.67%; ROCE 34.4%, ROE 27.2% [V].
- **Balance sheet (Mar-26 screener):** borrowings ₹477 cr (mostly leases); investments ₹1,615 cr. **Company "cash and investments" ₹2,704 cr at 30 Jun 2026** (₹2,762 cr Mar-26) [V, Q1 deck] → net cash ≈ **₹2,230 cr** pre-Nagarro [E]. Net worth ₹8,417 cr (Jun-26).
- **EV/EBITDA [E]:** (94,624 − 2,230) ÷ TTM screener EBITDA 2,881 = **~32x** (on company TTM EBIT ₹2,473 cr: EV/EBIT ~37x). **Post-Nagarro this changes materially** — see 1.3.

### 1.2 Native IT KPIs (company fact sheets [V])
| Quarter | Rev $M | QoQ USD | QoQ cc | YoY cc | Rev ₹ cr | EBIT % | PAT ₹ cr | TCV $M (new) | ACV $M |
|---|---|---|---|---|---|---|---|---|---|
| Q1 FY26 | 389.7 | 3.9% | 3.3% | 18.6% | 3,334 | 15.5% | 425 | 520.8 [E: TTM 2,405.3 − Q2–Q4] | — |
| Q2 FY26 | 406.2 | 4.2% | 4.4% | 17.8% | 3,581 | 15.6% | 471 | 609.2 (350.8) | 447.9 |
| Q3 FY26 | 422.5 | 4.0% | 4.1% | 17.2% | 3,778 | 14.4% (16.7% ex Labour Code) | 439 | 674.5 (369.1) | 501.9 |
| Q4 FY26 | 436.0 | 3.2% | 3.4% | 16.2% | 4,056 | 16.3% | 529 | 600.8 (408.9) | 445.1 |
| **Q1 FY27** | **452.4** | **3.8%** | **4.1%** | **16.5%** | **4,303** | **16.0%** | **483** | **1,146.2 (952.2) — record** | 536.8 |
| FY26 | 1,654.4 | — | — | **17.5%** (USD +17.4%) | 14,748 | 15.6% | 1,865 | **2,405.3 (new 1,465.8)** | 1,780.1 |

- **Book-to-bill [E]:** FY26 total TCV $2,405M ÷ $1,654M = **1.45x** (new-only 0.89x); Q1 FY27 $1,146M ÷ $452M = **2.53x** — lifted by a **6.5-year, $650M+ TCV / ~$125M+ ACV net-new deal with "a leading global technology company"** (end-to-end product engineering & support; revenue- and margin-accretive from Q2 FY27; client unnamed under NDA) [V, 28 Jun call + Q1 deck]. TTM TCV $3,031M, TTM ACV $1,932M.
- **Q1 FY27 margin bridge (company P&L, QoQ):** EBIT 16.3% → **16.0% (−30 bps)**: gross margin −20 bps (direct costs 64.9% vs 64.7%; utilisation fell 150 bps), S&M +20 bps to 8.0% of revenue, amortisation +10 bps (2.1%), partly offset by rupee (₹95.1/$ vs ₹93.0, +2.2%) [V, deck; bridge decomposition E]. **PAT fell 8.7% QoQ to ₹483 cr because of a ₹105 cr exchange loss** (hedge book $500M at ₹93.3 vs spot ~₹95) [V]. YoY: revenue +29.1% ₹ / +16.1% USD; EBIT +32.7%; PAT +13.7%. Wage increments: Persistent's annual cycle normally lands in Q2 (Jul) [K: prior years' calls] — expect a Q2 FY27 margin dip.
- **Segments (FY26 / Q1 FY27 share):** Software, Hi-Tech & Emerging Industries 39.8% / 40.7%; BFSI 34.6% / 34.0%; Healthcare & Life Sciences 25.6% / 25.3%. Q1 FY27 YoY growth: Tech +15.7%, BFSI +16.3%, HLS +16.4% (BFSI decelerating from ~30% in FY26) [V].
- **Geography (FY26 / Q1 FY27):** North America 80.6% / 79.1%; Europe 8.7% / 8.5%; India 8.8% / 9.8%; RoW 1.9% / 2.6% [V].
- **Client concentration:** top-5 **33.2%**, top-10 **43.0%**, top-20 53.7%, top-50 70.7% (Q1 FY27; FY26 32.2% / 41.6%) — among the most concentrated in mid-tier; top-5 = 2 BFSI, 1 tech, 1 HLS (+1) per CEO [V]. $75M+ clients 4; $20–50M 8; $10–20M 20; $1M+ 214 (201 at Mar-26) [V].
- **People / capacity:** headcount **28,640 (Jun-26)** vs 27,502 (Mar-26), 25,340 (Jun-25) — +1,138 QoQ; technical 26,905. Utilisation (incl. trainees) **86.5%** (88.0% Q4, 88.3% FY26). LTM attrition **12.3%** (13.0% FY26). Effort mix: offshore India 84.8%. Staff by location: India 24,856, NA 3,241, Europe 318, RoW 225 [V].
- **Revenue per employee [E]:** FY26 $1,654.4M ÷ avg(24,594, 27,502) = **$63.5K**; Q1 FY27 annualised $452.4M × 4 ÷ avg(27,502, 28,640) = **$64.5K** (rising — revenue +16% YoY vs headcount +13%).
- **DSO:** billed **61 days** + unbilled 25 = 86 (Q1 FY27) vs 53 + 27 = 80 at Mar-26 — a sharp rise in billed DSO [V]. Screener debtor days FY26 83.
- **Cash conversion:** FY26 screener FCF ₹1,572 cr ÷ PAT ₹1,865 cr = **84%** [E]; CFO/PAT 95% [E].
- **Guidance / targets:** no formal guidance. **"$2bn by FY27" is a Q4 FY27 exit run-rate (~$500M quarter), "plus or minus a quarter at worst"** (CEO, Q4 FY26 call [V]); Q1 FY27 $452M needs ~3.4% CQGR for three quarters, and the new $125M-ACV deal adds ~$30M/quarter from Q2 → on track [E]. Longer-term $5bn by FY31 (pre-Nagarro) [K: Persistent FY24 investor day]. EBIT aspiration **16–17%** ("not guidance") [V].
- **Ownership (screener, Sep-26 latest):** promoters **30.29%**, FIIs **20.79%** (24.2% Jun-25), DIIs **31.96%**, public 16.39%, others 0.55% [V]. No pledge noted.

### 1.3 Capex / expansion / M&A — Nagarro take-private (2026)
- **Deal (announced 26 Jun 2026):** voluntary public takeover of **Nagarro SE** (Munich; Frankfurt-listed) at **€81/share cash → equity ~€1.0bn, EV ~€1.27bn** (incl. ~€267M net debt) = **1.27x EV/CY25 revenue, ~9.1–9.2x EV/adj. EBITDA**; premium ~140% to undisturbed price, ~94% to 3-month VWAP. Nagarro CY25: revenue **€999.3M (+2.8%)**, adj. EBITDA €138.2M (13.9%), EBIT 10.9% (12.1% Q1 CY26), **18,003 staff (13,145 in India)**, 1,000+ clients in 72 countries; geography Central Europe 29.8% + Germany 23.3%, North America 34.7%; verticals led by Automotive/Manufacturing/Industrial 24.9% [V, Sep-26 deck & 28 Jun call].
- **Result (9 Oct 2026):** 71.94% tendered + 22.10% bought from Lantano Beteiligungen (SPA) = **~94.04% secured**; squeeze-out planned; **closing expected by end-Q1 CY27**, subject to a few regulatory approvals (RBI/FDI; 3 of 5 FDI approvals and all merger-control clearances in hand by Sep) [V].
- **Financing:** committed **€1.4bn Barclays bridge** (Euribor + 175–250 bps ≈ 4.1–4.8%), parent corporate guarantee; net debt/combined EBITDA **1.9–2.5x** at close, target ~1x by FY30; shareholder approval for an **equity raise of up to US$450M** (EGM Oct 2026) with combined equity + borrowings capped at **US$1,250M**; board considered fund-raising options (QIP/NCD/ECB/FCCB) on 2 Sep 2026 [V deck / V-secondary]; **ICRA assigned [ICRA]AA+ (Watch Negative) to ₹5,000 cr of proposed NCDs** (9 Oct 2026) [V]. Goodwill ~70% / intangibles ~30% (8-year amortisation); management says cash- and reported-EPS accretive in year 1 ex-deal costs [V].
- **Combined profile:** ~$2.9bn revenue, 46,000+ people, 40+ countries; geography NA 62% / Europe 22% / RoW 16% [V].
- **Pro-forma valuation [E]:** EV ≈ ₹94,624 cr + ~₹14,000 cr (EV €1.27bn × ~₹110/€) − ₹2,230 cr net cash ≈ ₹1.06 lakh cr on combined EBITDA ≈ ₹2,881 cr + ~₹1,500 cr (€138M) ≈ ₹4,400 cr → **~24x** (vs ~32x standalone).
- **Other:** third Hyderabad facility (13 Oct 2026); earlier tuck-ins (Capiot, Starfish Associates, Arrka — FY24–25) [K: Persistent filings 2024–25].

### 1.4 Story bullets
1. **25 straight quarters of sequential growth; cc +16.5% YoY in Q1 FY27** — 5–6x the tier-1 rate, with a record $1.15bn TCV quarter (2.5x book-to-bill) anchored by a $650M tech-client consolidation deal.
2. **From net-cash compounder to leveraged acquirer:** Nagarro (~€1bn revenue, Europe-heavy, flat growth) nearly doubles headcount and lowers group margin/growth mix; financing (bridge → NCDs + up to $450M equity) and integration are the 2027 debates; ICRA watch negative.
3. **Margins stuck at ~16% EBIT** despite scale — reinvestment, amortisation and FX-hedge losses (Q1 PAT −8.7% QoQ) cap the walk to the 16–17% aspiration.
4. **Most expensive name in the pack (47.6x P/E, 12x P/B)** with high concentration (top-10 43%) and rising DSO (86 days incl. unbilled).

---

## 2. Coforge Ltd (NSE: COFORGE · BSE: 532541) — mid-tier, fastest-growing; now ~$2.4bn run-rate after Encora

**Status:** listed; **no promoter (0%)** since Baring PE Asia's exit (Aug 2023) [V: screener shareholding]. CEO & ED Sudhir Singh; CFO Saurabh Goel; John Speight (Q1 FY27 call). **Latest reported quarter: Q1 FY27 (Jun-26), results 27 Jul 2026, call 28 Jul** [V]. **Q2 FY27 not out** as of 13 Oct (no results among the last five BSE announcements; last year's Q2 came ~late Oct) [V-feed]. **Two corporate events since the last primer refresh:** (1) **Cigniti Technologies merged into Coforge** — scheme effective **5 May 2026** (appointed date 1 Apr 2025), 1:1 swap, **1,26,71,602 shares allotted 3 Jun 2026**; Cigniti delisted/dissolved (scanx.trade / prysm.fi reports, fetched via search [V-secondary]); (2) **Encora acquisition closed (~1 May 2026)** — see 2.3. The Q1 FY27 deck's disclaimer also states that **a Form F-1 registration statement relating to certain Coforge securities has been filed with the US SEC but is not yet effective** [V] — purpose (US listing/ADS vs resale registration for Encora sellers) not confirmed this session. HDFC MF cut its stake to 4.30% (6 Oct 2026, SAST filing [V-title]).

Sources: screener https://www.screener.in/company/COFORGE/consolidated/ (curl **2026-10-13 15:23 UTC**) [V]; Q1 FY27 investor deck/fact sheet (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/3c063cf7-0415-4631-a1cb-6c9cedcd84d7.pdf) [V]; Q1 FY27 call transcript (https://investors.coforge.com/hubfs/Coforge_Q1FY27%20Earnings%20Conference%20Call%20Transcript.pdf) [V]; Q4 FY26 press release + fact sheet (BSE …/e1748b92-a29a-47e5-9347-8dca589e1219.pdf) [V]; Encora EPS deck 28 Dec 2025 (BSE …/b52dfadc-8dae-4228-a8aa-1af7df356aa6.pdf) [V]; "Vantage Series" deck 17 Sep 2026 (BSE …/86403cba-158f-4d53-9016-01cac46ddef7.pdf) [V].

### 2.1 Standardised financials (screener consolidated [V])
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 12,073 | **16,403** | +35.9% | 18,195 |
| Screener operating profit (EBITDA proxy) | 1,694 (14.0%) | 2,936 (17.9%) | +73% | 3,390 (18.6%) |
| Other income | 137 | −83 | | −148 |
| Interest / Depreciation (incl. acquired-intangible amortisation) | 135 / 428 | 169 / 682 | | 209 / 764 |
| Net profit (screener, **before minority interest**) | 936 | 1,745 | +86% | 1,920 |
| **PAT attributable (company)** | 812 | **1,556** | +91.6% | — |
| EPS ₹ (post 1:5 split, FV ₹2) | 24.29 | 46.33 | | 48.64 |
| CFO / FCF (screener) | 1,237 / 680 | 1,792 / 1,197 | | |
| ROCE | 20% | 24% | | |
| Dividend payout | 16% | 34% | | |

- **Basis:** company FY26 **EBITDA ₹3,046 cr (18.6%)**, **EBIT ₹2,365 cr = 14.4%** (+370 bps; company EBIT is after amortisation of acquired intangibles ₹193 cr); PBT before exceptional ₹2,159 cr; exceptional items ₹226 cr (incl. Encora deal costs ₹50 cr in Q4 and a cybersecurity legal case) [V, Q4 release]. Screener "operating profit" ₹2,936 cr differs from company EBITDA because screener nets FX/hedge losses (₹110 cr in FY26) and exceptional items in other lines. **Screener "net profit" ₹1,745 cr is before ₹189 cr minority interest (Cigniti NCI pre-merger)**; attributable PAT is ₹1,556 cr [V both].
- **USD:** FY26 revenue **$1,870M, +29.2% USD** (cc not separately stated in the fetched release; Q4 FY26 +28.7% YoY cc); EBIT $269.6M; PAT $177.4M (+82.1%) [V].
- **Market data (screener 2026-10-13):** price **₹1,929**; **m-cap ₹85,599 cr**; P/E **44.6x**; book value ₹284 → **P/B 6.8x** [E]; 52-wk H/L ₹2,022 / ₹1,008 (near the high; the Encora shares were fair-valued at ₹1,220.60 on closing day [V]); div. yield 0.62%; ROCE 23.5%, ROE 21.4% [V].
- **Balance sheet (company, 30 Jun 2026):** net worth ₹21,877 cr (₹9,681 cr Mar-26 — equity issued to Encora sellers & Cigniti holders); **borrowings ₹5,380 cr ($568M)** vs ₹400 cr at Mar-26; cash ₹1,388 cr + other bank balances ₹403 cr = ₹1,791 cr → **net debt ≈ ₹3,590 cr ($379M)** ex-leases (lease liabilities ₹397 cr); goodwill ₹16,373 cr, acquired intangibles ₹5,687 cr [V]. The **$550M term loan at 4.60%** amortises over 3 years (US$25–75M/quarter, final repayment Q1 FY30) [V, deck repayment schedule].
- **EV/EBITDA [E]:** EV ≈ 85,599 + 3,590 = ₹89,190 cr ÷ TTM screener EBITDA ₹3,390 cr = **~26x** trailing; on Q1 FY27 company EBITDA annualised (₹1,123 cr × 4 = ₹4,490 cr, only 2 months of Encora) ≈ **~20x** run-rate.

### 2.2 Native IT KPIs (company fact sheets [V])
| Quarter | Rev $M | QoQ cc | YoY USD | Rev ₹ cr | EBITDA % | EBIT % | Order intake $M | 12-m exec. book $M |
|---|---|---|---|---|---|---|---|---|
| Q1 FY26 | 444.2 | 8.0% | 55.1% | 3,704 | 17.5% | 11.8% | 507 | 1,545 |
| Q2 FY26 | ~455.8 [E: FY − others] | — | — | 3,986 | — | — | ~514 [E: FY 2,262 − others] | — |
| Q3 FY26 | 480.9 | 4.4% | 22.6% | 4,232 | 18.3% | ~14.3% [E] | 593 | 1,717 |
| Q4 FY26 | 489.1 | 2.0% | 21.2% | 4,450 | 20.6% | 16.6% | 648 (5 large deals) | 1,752 |
| **Q1 FY27** | **592.2** (incl. $100.7M Encora, 2 months) | **22.3% reported; organic +1.1%; organic ex-exits +5.2%** | **33.3%** | **5,528** | **20.3%** | **16.0%** (organic 16.7%) | **691** (4 large deals) | **2,228 (+44% YoY)** |
| FY26 | 1,870 | — | 29.2% | 16,403 | 18.6% | 14.4% | **2,262** (FY25 3,456 incl. $1.56bn Sabre) | 1,752 |

- **Book-to-bill [E]:** FY26 order intake $2,262M ÷ revenue $1,870M = **1.21x**; Q1 FY27 $691M ÷ $592M = 1.17x. Exits: planned discontinuation of a **$15M low-margin India Government portfolio** and a **$4M data-centre asset divestment** in Q1 [V].
- **Q1 FY27 margin bridge (company P&L):** EBIT 16.6% (Q4) → **16.0%**: gross margin −13 bps (34.3%), SG&A +15 bps (13.9%), **acquired-intangible amortisation ₹112 cr vs ₹49 cr (~−90 bps; Encora customer relationships $480M over 12 years ≈ $40M/yr)**; offset by Encora G&A cut 40% (to 6.6% of revenue) [V]. Below EBIT: hedge loss ₹97 cr ($10M) + further $14M MTM to be realised over Q2–Q3, no hedge book beyond Q3 → ~$10M/quarter earnings tailwind from Q4 [V]; net interest −₹60 cr (acquisition debt); exceptional ₹55 cr ($6.5M integration). PAT ₹519 cr (−15.3% QoQ; Q4 had a tax credit) [V]. **Wage hikes: none for the broad organisation until at least 1 Jan 2027 ("may not have hikes in the current fiscal")** — CEO, Q1 call [V].
- **Guidance (FY27):** consolidated **EBIT 15.5%** ("confident of surpassing"); standalone (organic) EBIT **16.5–17%**; **EBITDA >20.5%**; **FCF/PAT 100%**; EPS-accretive Encora in FY27; "robust growth" from Q2 with large-deal signings in Q2 "close to a full year's count 2–3 years back"; no numeric revenue guide [V].
- **Verticals (Q1 FY27 / FY26):** BFS 24.7% / 26.5%; Insurance 13.6% / 15.0%; TTH 21.3% / 23.0%; **Healthcare & HiTech 17.3% / 10.8%** (Encora-driven, +123.5% YoY); Government outside India 6.0% / 7.0%; Others 17.1% / 17.7% [V].
- **Service lines (Q1 FY27):** AI-led Engineering 50.4%, Data & Integration 20.9%, Cloud 14.8%, Intelligent Automation 7.0%, BPM 7.0% [V].
- **Geography (Q1 FY27 / FY26):** Americas **61.8%** / 56.9%; EMEA 27.0% / 28.9%; RoW 11.2% / 14.2%. Onsite 49% / offshore 51% (IT). Fixed price 43% / T&M 57% [V].
- **Client concentration:** top-5 **18.0%**, top-10 **26.1%** (Q1 FY27; Q4 FY26 21.8% / 31.4% — diluted by Encora); clients >$100M: 1; $50–100M: 3; $20–50M: 14; $1M+: 379 (245 at Mar-26); repeat business 95.7% [V].
- **People / capacity:** headcount **46,228** (Jun-26) vs 35,777 (Mar-26): +10,451, of which **9,256 Encora**, organic +1,195; billable IT 34,061, BPS 9,360. Utilisation (incl. trainees, ex-BPS) **82.5%**; LTM attrition (ex-BPS) **10.4%** (10.8% Mar-26) — lowest in this batch [V]. Delivery: Encora brings LATAM nearshore (33% of Encora headcount) [V, Encora deck]; Kraków AI centre to exceed 660 staff by 2027 (BSE PR 1 Oct 2026 [V-title]).
- **Revenue per employee [E]:** FY26 $1,870M ÷ avg(33,023 [Mar-25 = 35,777 − 2,754 net adds], 35,777) = **$54.4K**; company metric "IT revenue per billable head" **$70.6K** (Q1 FY27; $71.8K Q4) [V].
- **DSO:** billed **63 days** + unbilled 24 + contract assets 15 = **102 total** (107 at Mar-26) [V] — highest working-capital intensity in the batch.
- **Cash conversion:** FY26 company FCF $135.4M ÷ PAT $177.4M = **76.3%** [V]; Q1 FY27 FCF $52.9M = 95.3% of PAT [V]. Screener FY26 FCF ₹1,197 cr ÷ ₹1,745 cr = 69% [E].
- **Ownership (screener, Jun-26 latest):** promoters 0%; **FIIs 24.31%** (30.66% Mar-26; 42.6% Dec-24), **DIIs 42.62%** (56.18% Mar-26), **public 33.07%** (13.16% Mar-26) — the jump in "public" and fall in FII/DII % reflect ~25% equity expansion (Encora consideration shares + Cigniti swap); the Encora sellers (PE funds Advent International / Warburg Pincus [K: Dec-2025 deal announcements]) appear to be classified outside FII/DII. 3.41 lakh shareholders [V]. Total shares ~44.27 cr diluted (filingreader report, Jul 2026 [V-secondary]).

### 2.3 Capex / expansion / M&A
- **Encora (announced 26–28 Dec 2025; closed ~1 May 2026):** US (Silicon Valley-born) AI-native product-engineering firm; FY26E revenue ~$600M, EBITDA ~19%, ~9,100 staff (49% India, 33% LATAM), revenue/FTE $74K [V, Dec deck]. **EV $2.35bn; equity value $1.897bn; 93.8M Coforge shares issued to sellers at ₹1,815.91 (preferential)**; term loan retirement funded by a **$550M, 3-year, 4.60% loan** (a QIP of ~$550M was the alternative modelled) [V]. Purchase price allocation at closing: consideration **$1,490M (₹13,982 cr)** = share swap $1,220M at fair value **₹1,220.60/share** + $270M cash infusion; customer-relationship intangibles $480M (12-yr); goodwill **$1,290M** [V, Q1 deck]. Pro-forma FY27E (illustrative, assumes 15% growth): combined revenue $2.83bn, EBITDA 18.9%, EBIT 14.1%, with $20M cost synergies [V].
- **Cigniti (acquired 2024, merged May 2026)** — see Status. Earlier deals: SLK Global (BPS), Incessant (Pega) [V: CEO references, Q1 call].
- **Sabre**: 13-year ~$1.56bn deal (FY25 order intake) [V: FY25 footnote].
- **Capex:** modest — Q1 FY27 net capex $4.6M; FY26 FCF $135M [V].

### 2.4 Story bullets
1. **Fastest compounder in Indian IT:** FY26 +29.2% USD; organic ex-exits +5.2% QoQ cc in Q1 FY27; executable book $2.23bn (+44% YoY) — and management talks of a record large-deal Q2.
2. **Transformed by Encora:** ~25% equity dilution, $550M debt, goodwill $1.3bn; revenue mix tilts to Americas (62%) and HiTech/Healthcare, cutting the Sabre/travel concentration (top-10 now 26%).
3. **Margin story rests on AI productivity + no wage hikes:** FY27 EBIT guide 15.5% (already 16.0% in Q1); deferring broad hikes to ≥Jan 2027 is a margin tailwind but an attrition risk (attrition 10.4% now).
4. **Valuation: 44.6x P/E, ~26x trailing EV/EBITDA** with FIIs selling (42.6% → 24.3% in 18 months) and HDFC MF trimming — growth must keep beating peers. US SEC F-1 filing is a watch item.

---

## 3. Mphasis Ltd (NSE: MPHASIS · BSE: 526299) — mid-tier, BFSI specialist, Blackstone-controlled

**Status:** listed; promoter **BCP Topco IX Pte Ltd (Blackstone)**. CEO & MD Nitin Rakesh (**re-appointed by shareholders for a further 5-year term from Oct 2026** — analysts congratulated him on the Q1 call [V]; term start per multibagg summary [V-secondary]); CFO Aravind Viswanathan. **Latest reported quarter: Q1 FY27 (Jun-26), results 23 Jul 2026, call 24 Jul** [V]. **Q2 FY27 results: earnings call scheduled Fri 6 Nov 2026, 8:30 IST, after the results** (BSE intimation 9 Oct 2026, https://www.bseindia.com/xml-data/corpfiling/AttachLive/90dd27ca-bed9-4133-83ce-6e7529e0845c.pdf [V]) — among the latest reporters in the sector. HDFC MF raised its stake to **7.06%** (8 Oct 2026, SAST filing [V-title]).

Sources: screener https://www.screener.in/company/MPHASIS/consolidated/ (curl **2026-10-13 15:23 UTC**) [V]; **company Q1 FY27 group fact sheet (xlsx)** https://www.mphasis.com/content/dam/mphasis-com/global/en/investors/financial-results/2027/group-overview-factsheet-q1fy27.xlsx [V]; Q1 FY27 deck (BSE …/700b2f08-52ae-4bda-8285-76e29bf75f15.pdf) and transcript (BSE …/63af4512-3a15-4246-8f91-a8ad756b76cb.pdf) [V]; Q4 FY26 deck (BSE …/60ac747b-806b-4cd7-bed5-87f706acadf1.pdf) and transcript (BSE …/aa45ef77-1b90-42d3-bcb1-d985fe550f70.pdf) [V].

### 3.1 Standardised financials (screener consolidated [V])
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 14,230 | **15,880** | +11.6% | 16,531 |
| Screener operating profit (EBITDA proxy) | 2,647 (18.6%) | 2,978 (18.8%) | +12.5% | 3,070 (18.6%) |
| Other income | 255 | 290 | | 293 |
| Interest / Depreciation | 166 / 476 | 204 / 555 | | 211 / 570 |
| PAT (reported, after ₹35.5 cr Labour-Code exceptional in Q3) | 1,702 | **1,863** | +9.5% | 1,910 |
| EPS ₹ | 89.55 | 97.61 | | 100.22 |
| CFO / FCF (screener) | 1,905 / 1,845 | 1,253 / 937 | | |
| ROCE | 22% | 22% | | |
| Dividend payout | 64% | 64% (DPS ₹62) | | |

- **Basis:** company "operating profit" (EBIT) **FY26 ₹2,428 cr = 15.3%** (quarters 15.3/15.3/15.2/15.4%); EBITDA margin ~18.8%; company PAT before exceptional ₹1,889 cr [V, fact sheet]. Screener operating profit ≈ company EBITDA (matches within rounding). Gross margin includes hedge P&L reclassified to revenue [V].
- **USD:** FY26 revenue **$1,796.5M** (sum of quarters 437.3 + 445.2 + 451.4 + 462.6) vs FY25 $1,680.8M → **+6.9% USD [E], +6.7% cc** (company, Q4 call [V]); Direct (ex-DXC) +8.7% cc; Direct = 98.6% of revenue.
- **Market data (screener 2026-10-13):** price **₹2,466**; **m-cap ₹47,293 cr**; P/E **24.4x**; book value ₹563 → **P/B 4.4x** [E]; 52-wk H/L ₹2,978 / ₹2,013; div. yield 2.51%; ROCE 22.1%, ROE 18.5% [V].
- **Balance sheet (company, 30 Jun 2026):** cash & cash equivalents incl. liquid investments **₹3,960 cr** (fact-sheet C&CE); short-term borrowings ₹1,970 cr (working-capital lines); lease liabilities ₹828 cr; goodwill ₹4,786 cr → **net cash ≈ ₹1,990 cr ex-leases** [E from V]. Screener's "investments ₹1,769 cr" (Mar-26) understates liquidity — company C&CE ₹3,668 cr at Mar-26.
- **EV/EBITDA [E]:** (47,293 − 1,990) ÷ TTM EBITDA 3,070 = **~14.8x**.

### 3.2 Native IT KPIs (company fact sheet [V])
| Quarter | Rev $M | QoQ cc | YoY cc | Rev ₹ cr | EBIT % | PAT ₹ cr* | Net-new TCV $M (large deals) | AI-led % of TCV |
|---|---|---|---|---|---|---|---|---|
| Q1 FY26 | 437.3 | 1.0% | — | 3,732 | 15.3% | 442 | 760 (4) | 68% |
| Q2 FY26 | 445.2 | 2.0% | — | 3,902 | 15.3% | 469 | 528 (6) | 42% |
| Q3 FY26 | 451.4 | 1.5% | — | 4,003 | 15.2% | 469 | 428 (4) | 62% |
| Q4 FY26 | 462.6 | 2.5% | 7.1% | 4,243 | 15.4% | 510 | 407 (4) | 64% |
| **Q1 FY27** | **471.1** | **2.1%** | **8.3%** (Direct 9.9%) | **4,384** | **14.8%** | **490** | **461 (3, one >$100M)** | 63% |
| FY26 | 1,796.5 | — | **6.7%** | 15,880 | 15.3% | 1,889 | **2,123 (18)** — record, +68% (FY25 1,267) | — |
(*PAT before exceptional. Rev ₹ = net revenue per fact sheet / screener.)

- **Book-to-bill [E]:** FY26 net-new TCV $2,123M ÷ revenue $1,797M = **1.18x** (net-new only — closer to a "total" ratio of ~1.6–1.8x at peers' definitions); Q1 FY27 $461M ÷ $471M = 0.98x. TTM TCV $1.8bn+ [V].
- **Q1 FY27 margin bridge (company):** EBIT 15.4% → **14.8% (−60 bps)**: **TAP acquisition ~−35 bps** (earn-out ≈ 2/3 of consideration runs through the P&L, will persist ~2 years) + "steep drop in utilisation" (tech-services utilisation incl. trainees **81.0% vs 83.6%**, hiring ahead of Q2 ramps) + ramp-up costs of new deals; gross margin 26.9% vs 28.3%; partly offset by lower G&A (4.6% vs 5.2%) [V]. Hedge losses continue in H1 FY27, easing in H2 [V].
- **Guidance FY27 (maintained Jul 2026):** **high-single-digit to low-double-digit cc growth**; EBIT band **14.75–15.75%**; OCF ≥80% of net income; **Q2 FY27 to be "the best sequential cc growth in the last 3 years"** [V].
- **Verticals (Q1 FY27 / Q4 FY26):** BFS 52.7% / 53.4%; Insurance 14.9% / 15.7% (→ BFSI ~67.6%); TMT 18.2% / 16.1%; Logistics & Transportation 4.2% / 5.1% (was 13.7% in Q1 FY25 — large logistics client restructuring); Others 10.0% [V]. Q1 Direct YoY cc: BFS +9.4%, Insurance +17.8%, TMT +13.6%, L&T −19.9% [V].
- **Service lines (Q1 FY27):** Application Services 75.5%, BPS 15.7%, Infrastructure 8.8% (ITO declining −11.5% YoY; non-core ATM business wound down) [V].
- **Geography (Q1 FY27):** Americas **85.2%**, EMEA 8.1%, Others 6.7%; RoW +6.1% QoQ "led by GCCs" [V]. Onsite revenue 60.9% / offshore 39.1%; contract mix T&M 46.5%, fixed price 44.3%, transaction-based 9.2% [V].
- **Client concentration (TTM, ex-DXC):** **top client 13%, top-5 40%, top-10 56%** (Q1 FY27) — the most concentrated in this batch; clients: $200M+ 1, $100M+ 4, $50M+ 7, $20M+ 15, $1M+ 133; new client wins 7 in Q1 [V].
- **People / capacity:** total headcount **32,097** (Jun-26) vs 31,179 (Mar-26), 31,063 (Jun-25) — +918 QoQ; billable 27,784 (onsite 6,879; offshore 20,905; BPO 7,333) [V]. Utilisation (tech services) **81.0%** incl. & excl. trainees (FY26 peak 87.7% in Q2) [V]. **LTM attrition not disclosed in the fetched fact sheet** (unverified).
- **Revenue per employee [E]:** FY26 $1,796.5M ÷ avg(31,442, 31,179) = **$57.4K**; Q1 FY27 annualised $471.1M × 4 ÷ avg(31,179, 32,097) = **$59.6K**.
- **DSO:** **95 days** (debtors 91 + contract assets 4), up from 75 at Mar-25 and 84 at Jun-25 — CFO expects progressive improvement; Q4 FY26 OCF hit by ~$17M of delayed remittances [V].
- **Cash conversion:** FY26 OCF ₹1,268 cr ÷ PAT (pre-exc.) ₹1,889 cr = **67%**; FCF ₹952 cr → **FCF/PAT 50%** [E from V fact sheet] — weakest in the batch; Q1 FY27 OCF/PAT 74.8%.
- **Ownership (screener, Jun-26 latest):** **promoter 30.54%** (Blackstone; 55.45% Mar-24 → 40.10% after a ~15% block in Jun 2024 → **30.59% after selling 1.80 cr shares / 9.46% at ~₹2,626 for ~₹4,726 cr on 18 Nov 2025** — PTI/The Week report [V-secondary]); FIIs 19.50%; **DIIs 45.31%** (HDFC MF 7.06% after Oct-2026 buying); public 4.65% [V]. **Screener flags "Promoters have pledged 100% of their holding"** [V] — consistent with BCP Topco's acquisition-financing pledge structure [K: Blackstone 2021 refinancing]; the primer says Blackstone "confirmed no encumbrance" — needs reconciliation against the latest BSE encumbrance disclosure (unverified this session).

### 3.3 Capex / expansion / M&A
- **TAP — Theory and Practice Business Intelligence Inc.** (decision-intelligence/AI firm), announced 3rd week of April 2026, completed in Q1 FY27; ~2/3 of consideration as earn-out expensed through P&L (~35 bps margin drag) [V].
- **"Red Oak" customer-contract acquisition** (vendor-consolidation deal; Mphasis pays ~1.0–1.2x revenue for contracts, accounted as customer-relationship intangibles) — consolidated from Q1 FY27 [V, Q1 call].
- **Platforms:** Mphasis **Tria** (launched ~June 2026; "deployment-ready AI stack", ARR + managed services bundles), NeoIP, NeoCrux/NeoZeta [V].
- **Capex:** light (FY26 capex ~₹316 cr per screener CFO−FCF [E]); buyback history (schedule documents on IR site) [V-link].

### 3.4 Story bullets
1. **Recovery after the US mortgage/BFSI slump:** cc growth from ~0% (FY25 quarters) to 7–8% YoY; record FY26 net-new TCV $2.12bn (+68%), 63–68% AI-led; Q2 FY27 guided to the best sequential growth in 3 years.
2. **Highest concentration in the batch** (top-10 56%, BFSI ~68%, Americas 85%) — rate-cycle and client-specific risk.
3. **Margin pinned at the 14.75–15.75% band floor** (Q1 14.8%) by TAP earn-out, utilisation investment and hedge losses; working capital (DSO 95) and FCF/PAT ~50% are the weak spots.
4. **Blackstone exit overhang shrinking:** stake 55% → 30.5% in 18 months, absorbed by DIIs (45%); P/E 24x — cheapest growth-recovery name among the mid-tier.

---

## 4. Hexaware Technologies Ltd (NSE: HEXT · BSE: 544362) — mid-tier, Carlyle-controlled, **calendar-year (Dec) reporter**

**Basis note:** Hexaware's fiscal year = calendar year. "FY26" in the brief maps to **CY2025 (Jan–Dec 2025)**; the latest quarter is **Q2 CY26 = Apr–Jun 2026** (the same calendar quarter as peers' Q1 FY27). Q3 CY26 (Jul–Sep 2026) is **not yet reported** as of 13 Oct 2026 (Q3 CY25 was reported in Nov 2025 per screener concall list [V]); no board-meeting intimation among the last five BSE announcements [V-feed].

**Status:** listed since **19 Feb 2025** (₹8,750 cr, 100% offer-for-sale by Carlyle at ₹708; listed at ₹745.5 [K: IPO prospectus/NSE listing; the primer's figures agree]). Promoter **CA Magnum Holdings (Carlyle) 74.30%**. CEO & ED R. Srikrishna. Q2 CY26 results approved 29 Jul 2026, call 30 Jul [V]. Recent filings: **Claude Partner Network — "preferred partner" with Anthropic (8 Oct 2026)**; Gartner MQ Visionary (7 Oct); postal ballot (9 Oct 2026) approved 7 special + 1 ordinary resolutions incl. **RSU Plan 2026 and ESOP plans**; EBT trust deed amended [V-titles]. The stock (₹562) trades **~21% below the IPO price**.

Sources: screener https://www.screener.in/company/HEXT/consolidated/ (curl **2026-10-13 15:23 UTC**) [V]; Q2 CY26 investor deck + fact sheet (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/55c32d96-eaca-4dfe-9a9a-88fa11c1c16f.pdf) [V]; Q4/CY25 deck + fact sheet (BSE …/3b7bfa1b-1c41-45d1-a38d-e239899f7a0a.pdf) [V]; Q1 CY26 deck (BSE …/10f48991-ea21-474a-9b88-2c4632abfc68.pdf) [V-downloaded].

### 4.1 Standardised financials (screener consolidated, Dec year-end [V])
| ₹ cr | CY2024 | **CY2025** | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 11,974 | **13,430** | +12.2% | 14,420 |
| Screener operating profit (EBITDA proxy, pre-other income) | 1,835 (15.3%) | 1,917 (14.3%) | +4.5% | 2,155 (14.9%) |
| Other income (incl. FV gains on contingent consideration) | 75 | 277 | | 84 |
| Interest / Depreciation | 71 / 279 | 106 / 361 | | 119 / 385 |
| PAT | 1,174 | **1,368** | +16.6% | 1,343 |
| EPS ₹ | 19.36 | 22.41 | | 22.01 |
| CFO / FCF (screener) | 1,548 / 1,417 | 1,739 / 1,576 | | |
| ROCE | 30% | 30% | | |
| Dividend payout | 45% | 51% | | |

- **Basis:** company **CY25 "Reported EBITDA" ₹2,300 cr = 17.1%** — *includes other income and fair-value changes in contingent consideration*; adjusted EBITDA ₹2,295 cr (17.1%); reported PAT ₹1,368 cr, adjusted PAT ₹1,571 cr (11.7%); EPS ₹22.51 (₹23.88 ex Labour Code) [V]. Screener's 14.3% "OPM" excludes other income/FV gains and includes one-off impairments (customer-contract impairments of $9.1M + $4.6M in CY25 [V]) — hence the ~280 bps gap to company EBITDA. **From CY26 the company reports EBIT** (guide 13–14%); CY25 EBIT not published — my estimate: screener OP − depreciation = ₹1,556 cr = **11.6% reported [E]**, ~13.5–14.5% adjusted [E: Q2 CY25 adjusted EBIT 14.7% per fact sheet].
- **USD:** CY25 revenue **$1,537.4M, +7.6% USD, +7.1% cc**; Q4 CY25 $389M (−1.4% QoQ cc) [V].
- **Market data (screener 2026-10-13):** price **₹562**; **m-cap ₹34,315 cr**; P/E **24.2x**; book value ₹110 → **P/B 5.1x** [E]; 52-wk H/L ₹808 / ₹400; div. yield 2.05%; ROCE 30.1%, ROE 24.9% [V].
- **Balance sheet:** borrowings ₹683 cr (Jun-26, screener; largely leases/acquisition-related); company **closing cash $176M ≈ ₹1,666 cr at 30 Jun 2026** (incl. restricted & MF investments; $237M at Dec-25, drawn down by dividend) [V] → **net cash ≈ ₹980 cr** [E]. Screener shows investments ₹0 at Jun-26 — cash sits in "other assets".
- **EV/EBITDA [E]:** (34,315 − 980) ÷ TTM screener EBITDA 2,155 = **~15.5x**.

### 4.2 Native IT KPIs (company fact sheets [V])
| Quarter (calendar) | Rev $M | QoQ cc | YoY cc | Rev ₹ cr | Margin (company basis) | PAT ₹ cr |
|---|---|---|---|---|---|---|
| Q2 CY25 (Apr–Jun 25) | 382.1 | ~+2.8% USD | — | 3,261 | EBIT 10.1% reported / **14.7% adjusted** | 380 |
| Q3 CY25 | ~395 [E: Q4 389 ÷ 0.985] | — | — | 3,484 | EBITDA 17.6% | 370 |
| Q4 CY25 | 389.0 | −1.4% | +3.5% | 3,478 | EBITDA 17.0% | 292 (Labour Code hit) |
| Q1 CY26 | 388.5 | ~−0.1% USD | +4.6% USD | 3,613 | **EBIT 13.0%** | 352 |
| **Q2 CY26 (Apr–Jun 26)** | **405.4** | **+4.4%** | **+6.3%** | **3,845** | **EBIT 13.6%** (+68 bps QoQ; −102 bps YoY vs adjusted) | **330** |
| CY2025 | 1,537.4 | — | **+7.1%** | 13,430 | EBITDA 17.1% | 1,368 |

- **TCV / book-to-bill:** **Hexaware does not disclose TCV** — only qualitative deal commentary (consolidation deals at top-15 clients, "AI partner" selection deals, Zero-License wins) [V]. Book-to-bill not computable.
- **Q2 CY26 margin bridge (USD P&L):** EBIT $50.4M → $55.3M; employee cost fell to 58.9% of revenue (59.7%), other expenses 25.3% (24.9%), D&A 2.1% (2.5%) → +68 bps QoQ; utilisation 84.8% (82.6%; 80 bps of the rise is a definitional change excluding platform staff) [V]. Below EBIT: other income −$5.3M (FX), no contingent-consideration gain (Q2 CY25 had +$18.5M) → **PAT −21% YoY in USD** [V].
- **Guidance (CY26):** **cut on 29 Jul 2026 to 6–7% reported revenue growth** (incl. ~50 bps from a CP rebadging deal) from "better than CY25's 7.6%" given in Feb 2026 — "pathway has narrowed… delay in deal ramp and worsening macro"; implies 2.7% CQGR at mid-point for H2; **EBIT 13.0–14.0% reiterated** (H2 > H1) [V]. Long-term thesis "low-teens base growth" (Feb 2026) [V].
- **Verticals (Q2 CY26 share; YoY USD growth):** Financial Services 29% (+1.4%); Healthcare & Insurance 23% (+18.9%); Manufacturing & Consumer 16% (+17.9%); Professional Services 14% (−3.4%); Banking 9% (+10.8%); Travel & Transportation 7% (−14.5%); Technology, Products & Platforms 2% (+4.5%) [V; shares read from deck pie, ±1 pp].
- **Geography (Q2 CY26):** Americas **73.6%** ($298M, +3.5% YoY), Europe 19.9% (+10.9%), APAC 6.5% (+24.8%). **Service mix:** IT services 85.2%, BPS 11.4%, others 3.3%. IT onshore 52.0% / offshore 48.0% [V].
- **Client concentration (TTM):** **top-5 25.3%, top-10 35.7%, top-20 48.7%** (Q2 CY26); clients $75M+: 2 (3 a year ago), $50M+ 4, $20M+ 16, $1M+ 206 [V].
- **People / capacity:** headcount **34,506** (Jun-26; IT 22,796, BPS 11,710) vs 33,844 (Dec-25), 32,410 (Jun-25); **LTM voluntary IT attrition 11.2%**; IT utilisation **84.8%** [V]. New delivery footprint in **Colombia** and **GIFT City** (Q2 CY26) [V].
- **Revenue per employee [E]:** CY25 $1,537.4M ÷ avg(32,309 [Dec-24 = 33,844 − 1,535 net adds], 33,844) = **$46.5K**; Q2 CY26 annualised $405.4M × 4 ÷ avg(33,798, 34,506) = **$47.5K** (BPS-heavy mix depresses the ratio).
- **DSO:** billed **39** + unbilled **39** = **78 days** (Q2 CY26; 75 in Q1, 73 a year ago) [V].
- **Cash conversion:** CY25 OCF ₹1,739 cr = 75.6% of reported EBITDA / **127% of reported PAT** (LTM Q2 CY26: 124.7%) [V]; screener FCF ₹1,576 cr ÷ PAT ₹1,368 cr = **115%** [E].
- **Ownership (screener, Jun-26 latest):** **promoter (Carlyle/CA Magnum) 74.30%**; **FIIs 3.19%** (10.59% Mar-25 — post-IPO anchor/FII exit), **DIIs 16.06%** (9.06% Mar-25), public 6.23% [V]. Free float ~26% — Carlyle sell-down (SEBI MPS requires 75% max — already satisfied; further sales discretionary) is the overhang.

### 4.3 Capex / expansion / M&A
- CY25 bolt-ons incl. **CyberSolve** (identity/cyber) [K: primer + Hexaware PR 2025]; contingent-consideration FV gains in 2025 reflect earn-out reversals on earlier deals [V].
- Capex: campus-led (Chennai/Pune/Navi Mumbai; CWIP ₹52 cr) — CY25 capex ~₹163 cr (CFO − FCF, screener [E]).
- AI/platforms: Agentverse, Tensai, RapidX, Amaze; pricing experiments ("token gain-share", hybrid squads, platform subscriptions); Anthropic as foundation-layer partner; AI day 21 Aug 2026 [V].

### 4.4 Story bullets
1. **Growth reset:** CY26 guide cut to 6–7% (from >7.6%) on delayed ramps and macro — Q2 CY26's +4.4% QoQ cc was strong, but the H2 bar (2.7% CQGR) is modest; no TCV disclosure limits visibility.
2. **Margins re-based to an EBIT framework (13–14%)** — below tier-1/Persistent; BPS (11%) and rebadging deals dilute; PAT volatile from FX/other income.
3. **Carlyle owns 74.3%; FIIs nearly gone (3.2%)** — stock ~21% below the Feb-2025 IPO price; P/E 24x, EV/EBITDA ~15.5x, yield 2%.
4. **Good cash conversion** (OCF/PAT ~125%) and low attrition (11.2%); Anthropic partnership is the AI angle.

---

## 5. Zensar Technologies Ltd (NSE: ZENSARTECH · BSE: 504067) — small-cap, RPG Group

**Status:** listed; promoter RPG Group (RP-Sanjiv Goenka/Harsh Goenka entities) **49.00%**. CEO & MD Manish Tandon; CFO Pulkit Bhandari; COO Vijayasimha Alilughatta [V, Q1 call]. **Latest reported quarter: Q1 FY27 (Jun-26), results 29 Jul 2026, call 30 Jul** [V]. **Q2 FY27 not out**: trading window closed from 1 Oct 2026 "until 48 hours after" Q2 results (BSE filing 30 Sep 2026 [V-title]); no results-date intimation in the last five announcements [V-feed].

Sources: screener https://www.screener.in/company/ZENSARTECH/consolidated/ (curl **2026-10-13 15:23 UTC**) [V]; Q1 FY27 press release + investor deck (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/5d3ae210-7fe2-46b0-a42c-7179c4dc275a.pdf) [V]; Q1 FY27 call transcript (https://www.zensar.com/assets/files/5b7AHFFQOCNcjg3Z4JelMf/Earning_Call_Transcripts_Q1_FY27.pdf) [V]; Q4 FY26 press release + deck (BSE …/899acdbb-eb7b-422b-a34f-b2a6965420fd.pdf, 24 Apr 2026) [V].

### 5.1 Standardised financials (screener consolidated [V])
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 5,281 | **5,687** | +7.7% | 5,811 |
| Screener operating profit (EBITDA proxy) | 817 (15.5%) | 916 (16.1%) | +12.1% | 926 (15.9%) |
| Other income (treasury income on ~$320M cash) | 160 | 209 | | 210 |
| Interest / Depreciation | 17 / 102 | 12 / 91 | | 12 / 97 |
| PAT | 650 | **775** | +19.2% | 776 |
| EPS ₹ | 28.61 | 34.05 | | 34.14 |
| CFO / FCF (screener) | 565 / 530 | 771 / 719 | | |
| ROCE | 21% | 23% | | |
| Dividend payout | 45% | 44% (final ₹12.60 proposed) | | |

- **Basis:** company FY26 **EBITDA ₹916 cr (16.1%)**, **EBIT ₹825 cr = 14.5%** (USD: $92.7M, 14.4%), PAT ₹775 cr (13.5%); a Labour-Code exceptional of $2.8M in Q3 [V, Q4 deck]. Screener OP = company EBITDA (exact match). **PAT is flattered by other income** — ₹209 cr = 27% of FY26 PAT.
- **USD:** FY26 revenue **$643.7M, +3.1% USD, +1.7% cc** (FY25 $624.5M) [V].
- **Market data (screener 2026-10-13):** price **₹479**; **m-cap ₹10,907 cr**; P/E **13.7x**; book value ₹207 → **P/B 2.3x** [E]; 52-wk H/L ₹822 / ₹416 (−42% from high); div. yield 3.13%; ROCE 22.8%, ROE 17.3% [V].
- **Balance sheet:** **no debt** (company: "Debt – nil"); screener borrowings ₹79 cr = leases. **Cash + investments $317.5M (≈ ₹3,006 cr at ₹94.7) at 30 Jun 2026** ($319.5M Mar-26) [V]. Screener shows only investments ₹1,921 cr — company figure is the right one.
- **EV/EBITDA [E]:** (10,907 − 3,006) ÷ TTM EBITDA 926 = **~8.5x**; ex-cash P/E ≈ (10,907 − 3,006) ÷ (776 − ~158 post-tax other income) ≈ **~12.8x** [E].

### 5.2 Native IT KPIs (company fact sheets [V])
| Quarter | Rev $M | QoQ cc | YoY cc | Rev ₹ cr | EBITDA % | EBIT % | PAT ₹ cr | Order book $M |
|---|---|---|---|---|---|---|---|---|
| Q1 FY26 | 162.0 | 1.9% | 3.8% | 1,385 | 15.2% | 13.5% | 182 | — |
| Q2 FY26 | 162.8 | — | — | 1,421 | 15.4% | — | 182 | — |
| Q3 FY26 | 160.5 | — | — | 1,431 | 17.4% | 16.0% | 200 | ~180 [E: 401.8 ÷ 2.229] |
| Q4 FY26 | 158.4 | −1.9% | −1.5% | 1,450 | 16.1% | 14.5% | 211 | **401.8 (+122.9% QoQ; incl. $210M mega-deal — largest ever)** |
| **Q1 FY27** | **159.5** | **+1.1%** | **−2.0%** | **1,508** | **14.6%** | **12.7%** | **184** | **149.2** |
| FY26 | 643.7 | — | **+1.7%** | 5,687 | 16.0% | 14.4% | 775 | — |

- **Book-to-bill [E]:** Q1 FY27 order book $149.2M ÷ revenue $159.5M = **0.94x**; Q4 FY26 2.54x (mega-deal); management's normal band is **0.9–1.1x** (Q1 call [V]). FY26 total order book not stated in fetched docs.
- **Mega-deal:** **$210M BFSI deal** (Zensar's largest), execution from mid-Feb 2026; transition in Q1; "full weight of revenue in Q3–Q4 FY27"; includes re-badging [V].
- **Q1 FY27 margin bridge (company, EBITDA −150 bps QoQ to 14.6%):** large-deal pre-staffing/transition **−2.0%**, travel/visa/training **−1.5%**; offset by forex **+0.8%** and **reversal of management bonuses +1.3%** [V]. CFO: Q2–Q3 margins "in a similar range", improvement from Q3 onwards [V]. Note: visa costs cited explicitly as a margin drag (US H-1B fee environment).
- **Verticals (Q1 FY27):** **BFS 48.8%** (41.5% a year ago; +14.7% YoY cc), Manufacturing & Consumer 24.9%, **TMT 16.2%** (22.3% a year ago; −28% YoY cc — slowdown at the largest client, "not too much to go down from there"), Healthcare & LS 10.0% (−8.7% YoY cc) [V].
- **Service lines (Q1 FY27):** Products & Platforms incl. CMO 26.6%, Cloud Infra & Security 22.6%, Data Engineering & Analytics 10.8% (rest: advanced engineering/application services) [V].
- **Geography (Q1 FY27):** US 66.2%, Europe 21.5%, **Africa 12.3%** (South Africa) [V]. Onsite 46.5% / offshore 53.5%.
- **Client concentration:** **top-5 24.7%, top-10 38.9%, top-20 56.6%**; active clients 177; $20M+ 6, $10M+ 19 (15 in Q4), $1M+ 89 [V].
- **People / capacity:** headcount **11,342** (Jun-26) vs 10,779 (Mar-26), 10,620 (Jun-25); gross adds 1,451 in Q1 (mega-deal rebadging + hiring); utilisation (ex-trainees) **85.1%**; **LTM voluntary attrition 9.6%** — lowest in batch [V].
- **Revenue per employee [E]:** FY26 $643.7M ÷ avg(10,620 [Jun-25, nearest disclosed], 10,779) ≈ **$60.2K**; Q1 FY27 annualised $159.5M × 4 ÷ avg(10,779, 11,342) = **$57.7K** (dip from rebadged staff ahead of revenue).
- **DSO:** billed 48 + unbilled 27 = **75 days** (78 at Mar-26) [V].
- **Cash conversion:** FY26 screener FCF ₹719 cr ÷ PAT ₹775 cr = **93%** [E]. Hedges outstanding $77M [V].
- **FY26 USD P&L walk (company [V]):** gross margin **31.9%** (29.7% FY25; +220 bps from subcontractor cuts/offshore mix), S&M 7.6% of revenue (6.4%), G&A 8.3% (7.8%) → EBITDA 16.0% (15.5%), D&A 1.6%, EBIT 14.4% (13.5%); other income $23.4M + FX gain $3.1M → PBT 17.9%; tax 24.2%; PAT 13.5% ($87.2M, +13.6%). **Q1 FY27 gross margin fell to 29.7%** (32.6% Q4) on mega-deal transition staffing [V].
- **Q4 FY26 segment detail (reported currency, QoQ / YoY):** Africa +0.6% / +14.4%; Europe −1.2% / +4.3%; US −1.7% / −2.2%; BFS +2.2% / +12.5%; HLS −6.7% / −0.3%; M&C −3.3% / −2.2%; TMT −3.7% / −16.0% [V]. Q1 FY27 (cc, QoQ / YoY): US +2.5% / −3.7%; Europe −1.4% / +3.0%; Africa −1.4% / −0.8% [V].
- **Client buckets trend:** $1M+ clients 82 (Q1 FY26) → 83 (Q4) → **89** (Q1 FY27); $10M+ 16 → 15 → **19**; $20M+ steady at 6; active clients 166 → 178 → 177 [V].
- **Headcount mix (Jun-26):** technical onsite 2,000 (1,706 in Mar-26 — rebadging for the mega-deal), offshore 8,414; women 30.7% [V].
- **Guidance:** none numeric; margin commentary above [V]. Management said the slowdown at the largest (TMT) client "might be more muted going forward" [V].
- **Ownership (screener, Jun-26 latest):** **promoter 49.00%** (no pledge reported); FIIs **10.73%** (16.5% Mar-24); DIIs **21.98%**; public 17.94%; others 0.34% [V].

### 5.3 Capex / expansion / M&A
- No acquisitions in FY26–Q1 FY27 in fetched filings; capex minimal (FY26 ~₹52 cr: CFO − FCF [E]); CWIP ₹176 cr at Mar-26 (campus build) [V screener]. Delivery: Pune HQ + 30+ locations incl. Cape Town, London, Colombia, Mexico City [V].
- Cash pile ($317.5M ≈ 28% of m-cap) is the capital-allocation question — no buyback announced.

### 5.4 Story bullets
1. **Growth still missing:** FY26 +1.7% cc; Q1 FY27 −2.0% YoY cc despite +1.1% QoQ; TMT (largest client) down 28% YoY.
2. **The $210M mega-deal (BFSI) is the swing factor** — revenue full weight Q3–Q4 FY27; it already lifted BFS to 49% of revenue.
3. **Margins dipped to 12.7% EBIT** (from 14.5%) on deal transition and visa/travel costs; management guides recovery from Q3.
4. **Cheapest in batch:** 13.7x P/E, ~8.5x EV/EBITDA, 3.1% yield, 28% of m-cap in cash; FIIs exiting (10.7%).

---

## 6. Birlasoft Ltd (NSE: BSOFT · BSE: 532400) — small-cap, CK Birla (CKA Birla) Group

**Status:** listed; promoter CKA Birla Group **40.38%**; Chairman Mrs Amita Birla; **CEO & MD Angan Guha** (since early 2023 — third CEO since the 2019 KPIT-IT merger, after Anjan Lahiri and Dharmender Kapoor [K: company announcements 2019–2022, consistent with primer]); **CFO Chandrasekar Thyagarajan** (joined Aug 2025 per primer; on Q4/Q1 calls [V]); **COO Vikram Puranik inducted in Q4 FY26** (Q4 investor update [V]). **Latest reported quarter: Q1 FY27 (Jun-26), results & call 28 Jul 2026** [V]. **Q2 FY27 not out** as of 13 Oct (no intimation in last five BSE announcements [V-feed]). Recent filings: **named an OpenAI Select Partner (8 Oct 2026)**; CARE reaffirmed AA+/Stable and A1+ (24 Sep 2026) [V-titles].

Sources: screener https://www.screener.in/company/BSOFT/consolidated/ (curl **2026-10-13 15:23 UTC**) [V]; **Q1 FY27 investor update** https://www.birlasoft.com/sites/default/files/resources/downloads/investors/investor-update/q1-fy27-investor-update.pdf [V] and Q1–Q3 FY26 updates (same path, q1/q2/q3-fy26) [V]; Q4 FY26 investor update (BSE https://www.bseindia.com/xml-data/corpfiling/AttachLive/0832935b-d2f2-4576-8c68-b78987484b37.pdf) [V]; Q1 FY27 call transcript (BSE …/b613c7fd-5e14-4d82-b90a-d633a695c06d.pdf) [V].

### 6.1 Standardised financials (screener consolidated [V])
| ₹ cr | FY25 | FY26 | YoY | TTM (to Jun-26) |
|---|---|---|---|---|
| Revenue | 5,375 | **5,310** | −1.2% | 5,404 |
| Screener operating profit (EBITDA proxy) | 698 (13.0%) | 866 (16.3%) | +24.1% | 930 (17.2%) |
| Other income | 108 | 24 | | 20 |
| Interest / Depreciation | 23 / 86 | 20 / 80 | | 19 / 79 |
| PAT | 517 | **518** | +0.2% | 573 |
| EPS ₹ | 18.60 | 18.55 | | 20.52 |
| CFO / FCF (screener) | 588 / 541 | 481 / 441 | | |
| ROCE | 21% | 21% | | |
| Dividend payout | 35% | 35% (final ₹4) | | |

- **Basis:** company FY26 EBITDA 16.3% (= screener); **EBIT reported ~14.0% / adjusted ~14.8%** (adjusted excludes the Q3 Labour-Code charge; the fact-sheet columns print "14.8% | 14.0%" — I read adjusted as the higher figure [E]); **PAT ₹518 cr depressed by a one-time incremental US federal tax provision** (FY26 ETR 34.4%; adjusted PAT $74.2M ≈ 12.4% margin vs reported $58.3M) [V].
- **USD:** FY26 revenue **$597.5M, −6.0% USD, −6.5% cc** (FY25 $635.4M) — the ₹ decline (−1.2%) is cushioned by the rupee [V].
- **Market data (screener 2026-10-13):** price **₹297**; **m-cap ₹8,275 cr**; P/E **13.9x**; book value ₹147 → **P/B 2.0x** [E]; 52-wk H/L ₹474 / ₹267 (near the low); div. yield 2.19%; ROCE 21.2%, ROE 14.1% [V].
- **Balance sheet:** **cash & cash equivalents ₹2,879 cr ($304.1M) at 30 Jun 2026** (₹2,637 cr Mar-26), debt-free (screener borrowings ₹141 cr = leases) [V] → **net cash ≈ ₹2,740 cr = 33% of m-cap** [E]. Screener investments ₹2,171 cr (Mar-26) understate the company cash figure.
- **EV/EBITDA [E]:** (8,275 − 2,740) ÷ TTM EBITDA 930 = **~6.0x** — lowest in the batch.

### 6.2 Native IT KPIs (company investor updates [V])
| Quarter | Rev $M | QoQ cc | YoY cc | Rev ₹ cr | EBITDA % | EBIT % | PAT ₹ cr | TCV $M (new) |
|---|---|---|---|---|---|---|---|---|
| Q1 FY26 | 150.7 | −1.8% | −6.0% | 1,285 | 12.4% | 10.7% | 106 | 141 (76) |
| Q2 FY26 | 150.7 | 0.0% | −8.0% | 1,329 | — | 14.5% | 116 | 107 (40) |
| Q3 FY26 | 150.8 | +0.3% | −6.7% | 1,348 | 18.2% | 13.7% (16.7% adj.) | 120 | 202 (94) |
| Q4 FY26 | 145.3 | −3.7% | −5.1% | 1,349 | 18.5% | 17.0% | 176 | 208 (41) |
| **Q1 FY27** | **145.2** | **+0.3%** | **−3.0%** | **1,379** | **16.1%** | **14.7%** | **161** | **169 (57)**, +20% YoY |
| FY26 | 597.5 | — | **−6.5%** | 5,310 | 16.3% | ~14.0% rep. | 518 | **658 (new 251)** [E: sum] |

- **Book-to-bill [E]:** FY26 TCV $658M ÷ $597.5M = **1.10x** (new-only 0.42x); Q1 FY27 $169M ÷ $145.2M = 1.16x.
- **Q1 FY27 margin bridge (company):** EBITDA 18.5% → **16.1% (−233 bps)**: absence of ~170 bps Q4 one-offs + continued sales/domain investment; EBIT −230 bps to 14.7% [V]. **Wage hikes effective 1 Jul 2026 — gross 170–200 bps, ~half the net impact in Q2 FY27 after productivity offsets** (CFO) [V]. ETR back to 29.4% [V].
- **Verticals (Q1 FY27):** Manufacturing **37.6%**, BFSI 25.3% (+5.1% QoQ USD), Energy & Utilities 17.5%, Lifesciences & Services 19.6% (+2.3%) [V]. **Service lines:** Digital & Data 56.7%, ERP 31.7% (Oracle JDE/SAP heritage), Infra 11.6% [V]. Contract mix T&M 49.5% / fixed 50.5%; onsite 40.0% / offshore 60.0% (offshore shift from 51% a year ago) [V].
- **Geography (Q1 FY27):** Americas **82.9%**, RoW 17.1% [V].
- **Client concentration (LTM):** **top-5 43.4%, top-10 56.2%, top-20 68.6%** — rising (37.8%/52.5% a year ago) as the tail is pruned; active clients 213 (247 a year ago); $10M+ clients 10, $5M+ 23, $1M+ 72 [V]. Equal-highest concentration in the batch with Mphasis.
- **People / capacity:** headcount **11,057** (Jun-26) vs 11,363 (Mar-26), 11,834 (Jun-25) — shrinking; LTM attrition **11.7%** (13.0% Mar-26); utilisation **81.7%** [V]. Sales hiring "substantial increase over the next few months" promised (analysts pushed back on the 30–40% sales-team addition guided earlier) [V].
- **Revenue per employee [E]:** FY26 $597.5M ÷ avg(11,930, 11,363) = **$51.3K**; Q1 FY27 annualised $145.2M × 4 ÷ avg(11,363, 11,057) = **$51.8K**.
- **DSO:** billed **55 days** (62 at Mar-26; 55 adjusted for 3-Apr spill-over) [V]; OCF/EBITDA 108% in Q1 FY27 [V].
- **Cash conversion:** FY26 screener FCF ₹441 cr ÷ PAT ₹518 cr = **85%** [E]. Hedge book cut to $43M (from $72M) [V].
- **Mix trend (Q1 FY26 → Q4 FY26 → Q1 FY27 [V]):** Manufacturing 38.2% → 39.0% → 37.6%; BFSI 24.4% → 24.1% → 25.3%; E&U 17.4% → 17.7% → 17.5%; LSS 20.0% → 19.2% → 19.6%. Americas 86.3% → 84.0% → 82.9% (RoW rising to 17.1%). Fixed-price share fell from 61.1% to 50.5% (T&M 38.9% → 49.5%) — a contract-mix shift that reduces execution risk but also productivity upside. Onsite 48.8% → 40.0% — the main margin lever in FY26.
- **Client buckets:** $1M+ clients 77 → 78 → 72; $5M+ 26 → 22 → 23; $10M+ 12 → 11 → 10 — the mid-sized client base is thinning as the top-5 grows to 43.4% [V].
- **TCV quality:** new-logo/new-scope TCV is a small share — Q1 FY27 $57M of $169M; Q4 FY26 $41M of $208M; FY26 $251M of $658M (38%) — most bookings are renewals [V/E].
- **Hedges:** USD hedge book cut to $43M (from $73M a year earlier, $72M at Mar-26) at an average ₹90.2 at Mar-26 [V] — less hedge-loss drag than peers at ₹94–95 spot.
- **Q1 FY27 P&L YoY:** revenue ₹ +7.4%, EBITDA ₹222 cr (+40.3%), PAT ₹161 cr (+51.3%) on the low Q1 FY26 base (EBITDA 12.4%) [V].
- **Guidance:** none numeric — "deliver 3–4 quarters of sequential organic growth" first; M&A only for capability, not revenue aggregation; buyback raised by investors, not committed [V].
- **Ownership (screener, Jun-26 latest):** **promoter 40.38%**; FIIs 12.78%; DIIs 21.98%; **public 24.85%** (4.0 lakh shareholders — high retail) [V].

### 6.3 Capex / expansion / M&A
- No acquisitions; capex ~₹40 cr/yr (CFO − FCF, screener [E]). AI: Cogito (agentic orchestration), LynX (test engineering), Sigma (AIOps/AMS); "over a quarter of code generated via agentic AI tools"; OpenAI Select Partner (Oct 2026) [V].
- Leadership rebuild: COO (Vikram Puranik, Q4 FY26), new heads for data & AI, ERP, alliances and LSS vertical (Q4–Q1) [V].

### 6.4 Story bullets
1. **Revenue still shrinking in USD** (FY26 −6.0%; Q1 FY27 −3.0% YoY cc) after tail-account pruning (active clients 254 → 213) — growth has not turned despite TCV of $169–208M a quarter (new TCV small).
2. **Margin repaired** (EBITDA 12.4% → 16–18.5%) via offshore shift and pyramid, but Jul-2026 wage hikes take 170–200 bps gross in Q2.
3. **Concentration rising** (top-10 56%) and headcount falling (−6.6% YoY) — dependence on a few manufacturing/BFSI clients.
4. **Deep value:** 13.9x P/E, ~6x EV/EBITDA, net cash ₹2,740 cr (33% of m-cap) — capital-allocation (buyback) is the obvious lever; leadership churn history (3 CEOs since 2019) explains the discount.

---

# PRIMER ISSUES (batch 2)

Each member primer was read (cover strip, "what's new" box, snapshot and first sections) and grepped for m-cap, P/E, revenue, margin, headcount, attrition, utilisation, promoter %, CEO and key events. Every row gives what the primer says, the verified figure with its source, and the fix. Market data is from screener.in, fetched 2026-10-13 15:23 UTC (13 Oct close). **Cross-cutting issue:** every primer stops at FY26/CY25 results. None carries the Jun-26 quarter, although all six reported it in late July 2026. All six m-caps are stale.

### primers/persistent-systems.html (cover "Last refreshed 3 Jul 2026", source Q4 & FY26 results)
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover strip cell "+17.4% YoY — USD growth · +23.5% INR" (USD-led cell) | ₹ basis: **+23.5% YoY (₹14,748 cr vs ₹11,939 cr)**; or replace the cell with **PAT ₹1,865 cr (+33.2%)** (screener [V]) | Replace USD cell with "₹ revenue growth +23.5%" |
| 2 | Cover/§10 "Market cap ~₹74,000 Cr (Jul '26)"; P/E "~38–44×" | **₹94,624 cr at ₹5,988; P/E 47.6x; P/B ~12x** (screener 13 Oct 2026 [V]) | Update m-cap/P/E and date |
| 3 | No mention of **Nagarro** anywhere (grep: 0 hits) | **Nagarro SE take-private announced 26 Jun 2026: €81/sh, EV ~€1.27bn; 94.04% secured (9 Oct 2026); close by end-Q1 CY27; €1.4bn Barclays bridge; up to $450M equity raise; ₹5,000 cr NCDs rated AA+ Watch Negative (ICRA 9 Oct)** [V] | Add as the lead "what's new" item and rework §03, §10, §11, §12 |
| 4 | Balance sheet "essentially net cash — negligible debt" / "Debt-free" (§03, §10) | Still net cash (~₹2,230 cr, Jun-26) **pre-close**, but net debt/EBITDA **1.9–2.5x at Nagarro close** per CFO [V] | Flag pending leverage |
| 5 | Headcount "~27,502 (FY26-end)" | **28,640 at 30 Jun 2026** [V] | Update |
| 6 | Attrition "~13% FY26 exit" | 13.0% FY26 ✓; **12.3% LTM Q1 FY27** [V] | Update |
| 7 | Nothing after FY26 | **Q1 FY27: $452.4M (+3.8% QoQ USD, +4.1% cc; +16.5% YoY cc), ₹4,303 cr, EBIT 16.0%, PAT ₹483 cr (−8.7% QoQ on ₹105 cr FX loss), record TCV $1,146M incl. $650M+ 6.5-yr deal; utilisation 86.5%** [V] | Add whatsnew |
| 8 | §11 "$2bn in annual revenue by FY27" (line contradicts §03 "$2bn exit run-rate by Q4 FY27") | CEO (Q4 FY26 call): **$2bn = Q4 FY27 exit run-rate (~$500M/quarter), "plus or minus a quarter"** — not FY27 annual revenue [V] | Correct §11 wording |
| 9 | Ownership "FIIs ~22%, DIIs ~30%" (Mar 2026); promoter ~30.3% | Promoter 30.29% ✓; **FIIs 20.79%, DIIs 31.96%** (Sep-26 [V]) | Update |
| 10 | TCV metric shows only new TCV $1,465.8M TTM | Also total TCV FY26 **$2,405.3M** (book-to-bill 1.45x); TTM to Jun-26 total $3,030.7M / new $2,081.0M [V] | Add total TCV & refresh |
| 11 | Missing management change | Chief Delivery Officer Dr Rajesh Gharpure resigned effective 14 Oct 2026 (BSE 9 Oct [V-title]) | Add |
| 12 | Concentration narrative "anchored by IBM" (no numbers) | Top-5 33.2%, top-10 43.0% (Q1 FY27) [V]; IBM still among top clients not verified this session | Add numbers |

### primers/coforge.html (cover "Last refreshed 04 Jul 2026", source Q4 & FY26 results)
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover strip cell "+29.2% USD YoY — Revenue growth" (USD-basis cell) | ₹ basis: **+35.9% YoY (₹16,403 cr vs ₹12,073 cr)** (screener/company [V]) | Replace with "+35.9% YoY (₹)" |
| 2 | Cover/§10 "Market cap ~₹62,950 Cr (Jul '26)"; "~38× P/E"; div. yield ~1.0% | **₹85,599 cr at ₹1,929; P/E 44.6x; P/B 6.8x; yield 0.62%** (screener 13 Oct 2026 [V]) | Update |
| 3 | **No mention of Encora** (0 hits) — a "three-vertical specialist (Travel, Banking, Insurance)" | **Encora acquired (announced Dec 2025, consolidated from ~1 May 2026): EV $2.35bn, 93.8M shares to sellers + $550M 4.6% term loan; goodwill $1.29bn; +9,256 staff**; Healthcare & HiTech now 17.3% of revenue, Americas 61.8% [V] | Add as lead item; rewrite §00/§04/§05/§10 |
| 4 | "Cigniti fully absorbed" / Cigniti described as an acquisition only | **Cigniti amalgamated into Coforge — scheme effective 5 May 2026, 1:1 swap, 1.267 cr shares allotted 3 Jun 2026; Cigniti delisted** [V-secondary] | State merger completion and dates |
| 5 | "PAT ₹1,745 Cr" (whatsnew, snapshot) | ₹1,745 cr is screener net profit **before minority interest**; **attributable PAT ₹1,556 cr (+91.6%)** (company FY26 release [V]) | Use ₹1,556 cr attributable (or label basis) |
| 6 | "FY27 EBITDA guidance 20.5–21%" | Release says **EBITDA >20.5%**; plus FY27 consolidated **EBIT 15.5%** (beat: 16.0% in Q1), standalone EBIT 16.5–17%, FCF/PAT 100% [V] | Update guidance set |
| 7 | Headcount "~35,777"; attrition "~10.8%" | **46,228** (Jun-26, incl. 9,256 Encora); attrition **10.4%** [V] | Update |
| 8 | "$1.75bn 12-month executable order book" | **$2,228M at Jun-26 (+44% YoY)**; Q1 FY27 order intake $691M [V] | Update |
| 9 | Debt: implies Cigniti-related borrowing being repaid | **Borrowings ₹5,380 cr ($568M) at Jun-26 vs ₹400 cr Mar-26; net debt ~₹3,590 cr** [V] | Update balance-sheet narrative |
| 10 | No Q1 FY27 | **Q1 FY27: $592.2M (+21.1% QoQ, +33.3% YoY; organic ex-exits +5.2% QoQ cc), ₹5,528 cr, EBIT 16.0%, PAT ₹519 cr, top-10 26.1%, DSO 102 days total** [V] | Add whatsnew |
| 11 | Ownership described only as "0% promoter" with institutional ownership (FII/DII levels from Mar-26) | Jun-26: **FII 24.31%, DII 42.62%, public 33.07%** (post-Encora/Cigniti share issuance) [V] | Update |
| 12 | Missing | Form F-1 filed with US SEC (not yet effective) per Q1 FY27 deck disclaimer [V]; no broad wage hikes until ≥Jan 2027 [V] | Add |
| 13 | §03 timeline sentence "revenue crosses ₹1,745 Cr" (garbled — that is a PAT figure) | FY26 revenue ₹16,403 cr / $1.87bn [V] | Fix text |

### primers/mphasis.html (cover "Last refreshed 03 Jul 2026", source FY26 results)
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "Market cap ~₹43,800 Cr (Jun '26)"; "~23× earnings"; "~2.7% yield" | **₹47,293 cr at ₹2,466; P/E 24.4x; P/B 4.4x; yield 2.51%** (screener 13 Oct 2026 [V]) | Update |
| 2 | Whatsnew "USD revenue $1.79 bn (+6.7%)" | +6.7% is **constant currency**; USD growth **+6.9%** ($1,796.5M vs $1,680.8M, fact sheet [V/E]) | Label as cc |
| 3 | Ownership: "two large block sales during the year (~15% and ~9.5%)" in FY26 | ~15% block was **June 2024 (FY25)**; only the **9.46% sale (18 Nov 2025, ~₹4,726 cr)** was in FY26 [V-secondary + screener: 55.45% Mar-24 → 40.35% Jun-24 → 30.59% Dec-25] | Fix dates |
| 4 | "confirmed no encumbrance on its shares" | Screener (13 Oct 2026) flags **"Promoters have pledged 100% of their holding"** [V] — conflict; check latest SAST/encumbrance filing | Re-verify and correct |
| 5 | "~31,000+ employees" | **32,097** (Jun-26), 31,179 (Mar-26) [V fact sheet] | Update |
| 6 | No Q1 FY27 | **Q1 FY27: $471.1M (+2.1% QoQ cc, +8.3% YoY cc), ₹4,384 cr, EBIT 14.8% (−60 bps: TAP earn-out ~35 bps, utilisation 81%), PAT ₹490 cr, net-new TCV $461M (3 large deals), DSO 95 days** [V] | Add whatsnew |
| 7 | Missing M&A | **TAP (Theory and Practice) acquisition, Apr 2026** (earn-out through P&L); "Red Oak" contract acquisition [V] | Add |
| 8 | Missing events | Nitin Rakesh re-appointed CEO & MD (AGM 2026) [V-call]; **Q2 FY27 results/call on 6 Nov 2026** [V]; HDFC MF at 7.06% [V-title]; Mphasis Tria platform launch [V] | Add |
| 9 | Ownership split (only promoter given) | Jun-26: promoter 30.54%, FII 19.50%, **DII 45.31%**, public 4.65% [V] | Add |
| 10 | Utilisation "a key margin lever" (no number), attrition not quantified | Utilisation 81.0% (Q1 FY27) vs 83.6% Q4; attrition not disclosed in fact sheet [V] | Add utilisation |
| 11 | Concentration narrative (no %) | **Top client 13%, top-5 40%, top-10 56%** (TTM, ex-DXC) [V] | Add numbers |
| 12 | Balance sheet "essentially net-cash / lightly levered" | Net cash ≈ ₹1,990 cr ex-leases (C&CE ₹3,960 cr vs borrowings ₹1,970 cr, Jun-26) ✓ [V/E] | OK — add figure |

### primers/hexaware-technologies.html (cover "Last refreshed 12 Jul 2026", source CY2025 + Q1CY26)
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "~₹13,782 Cr Revenue (CY2025)" | **₹13,430 cr** (company ₹1,34,304 Mn; screener ₹13,430 cr [V]) | Correct revenue |
| 2 | Cover "Market cap ~₹32,800 Cr (Jul '26)"; "~24× P/E"; price ~₹539 | **₹34,315 cr at ₹562; P/E 24.2x; P/B 5.1x; yield 2.05%** (screener 13 Oct 2026 [V]) | Update m-cap/date |
| 3 | Headcount "~33,800" | **34,506** (30 Jun 2026) [V] | Update |
| 4 | Cover KPI "~17.1% EBITDA operating margin" presented as the margin metric | Company **switched to EBIT reporting from CY26: Q2 CY26 EBIT 13.6%, CY26 guide 13–14%**; CY25 EBITDA 17.1% *includes other income and contingent-consideration FV gains* (screener EBITDA 14.3%) [V] | Add EBIT basis; caveat EBITDA definition |
| 5 | No CY26 guidance / no Q2 CY26 | **CY26 revenue guide cut to 6–7% (29 Jul 2026)** from ">7.6%"; **Q2 CY26: $405.4M (+4.4% QoQ cc, +6.3% YoY cc), ₹3,845 cr, EBIT 13.6%, PAT ₹330 cr (−13% YoY), attrition 11.2%, utilisation 84.8%** [V] | Add whatsnew |
| 6 | Utilisation "~81% in Q4 CY25" | 80.8% Q4 CY25 ✓; **84.8% Q2 CY26** (80 bps from definition change) [V] | Update |
| 7 | Ownership "FIIs ~4%, domestic ~15%" | Jun-26: **FII 3.19%, DII 16.06%**, public 6.23%, Carlyle 74.30% [V] | Minor update |
| 8 | Missing events | **Anthropic Claude Partner Network preferred partner (8 Oct 2026)**; postal ballot approving RSU Plan 2026/ESOPs (9 Oct 2026); Colombia & GIFT City delivery expansion [V] | Add |
| 9 | Client concentration not quantified | **Top-5 25.3%, top-10 35.7%, top-20 48.7%** (TTM Q2 CY26) [V] | Add |
| 10 | "28 countries" | Not verified this session | Flag |
| 11 | Snapshot reads CY25 "~12% INR" growth as revenue; TCV absent | ₹ growth +12.2% ✓; note **Hexaware does not disclose TCV** (deal commentary only) [V] | Clarify |

### primers/zensar-technologies.html (cover "Last refreshed 21 Jul 2026", source Q4 & FY26 results)
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "~₹5,921 Cr Revenue (FY26)" | **₹5,687 cr** (company ₹56,874 Mn; screener ₹5,687 cr [V]) | Correct |
| 2 | Cover "~10,550 Headcount (Q4 FY26)"; §06 "~10,550 employees → ~$61,000 revenue/head" | **10,779 at Mar-26; 11,342 at Jun-26** [V]; rev/head ≈ $60.2K FY26, $57.7K Q1 FY27 annualised [E] | Update |
| 3 | "Market capitalisation ~₹11,800 Cr (mid-2026)"; "P/E ~15×" | **₹10,907 cr at ₹479; P/E 13.7x; P/B 2.3x; yield 3.13%** (screener 13 Oct 2026 [V]) | Update |
| 4 | "Profit after tax ~₹800 Cr (approx.)" | **₹775 cr** (screener/company FY26 [V]) | Correct |
| 5 | Net cash "~₹2,900 Cr" | $319.5M ≈ **₹3,030 cr** at Mar-26 rate 94.8; $317.5M ≈ ₹3,006 cr at Jun-26 [V] | Correct ₹ conversion |
| 6 | Final dividend "a payout of roughly a third of earnings" | Screener FY26 payout **44%** (yield 3.1%) [V] | Correct |
| 7 | No Q1 FY27 | **Q1 FY27: $159.5M (+1.1% QoQ cc, −2.0% YoY cc), ₹1,508 cr, EBITDA 14.6%, EBIT 12.7%, PAT ₹184 cr (12.2%), order book $149.2M, attrition 9.6%, utilisation 85.1%, DSO 75** [V] | Add whatsnew |
| 8 | "largest deal in company history" (size not given) | **$210M BFSI mega-deal**, execution from mid-Feb 2026, full revenue in Q3–Q4 FY27 [V] | Add size/timing |
| 9 | Attrition 9.8% | **9.6%** (Q1 FY27) [V] | Update |
| 10 | Ownership "~49%, no shares pledged" | 49.00% ✓; add FII 10.73% / DII 21.98% (Jun-26) [V] | Minor |
| 11 | Concentration not quantified | Top-5 24.7%, top-10 38.9%, top-20 56.6%; TMT (largest client) −28% YoY cc [V] | Add |
| 12 | Leadership (CEO only) | COO Vijayasimha Alilughatta on Q1 FY27 call [V] | Add |

### primers/birlasoft.html (cover "Last refreshed 25 Jul 2026", source FY26 results)
| # | Primer says | Verified | Fix |
|---|---|---|---|
| 1 | Cover "Market cap ~₹8,100 Cr (mid-2026)"; P/E "~15.6×" (vs peers ~30×) | **₹8,275 cr at ₹297; P/E 13.9x; P/B 2.0x; yield 2.19%** (screener 13 Oct 2026 [V]); peers now Persistent 47.6x, Coforge 44.6x, Mphasis 24.4x [V] | Update |
| 2 | FY26 revenue "down ~1.2%" (₹) as the headline growth | ₹ −1.2% ✓, but **USD −6.0% and cc −6.5%** ($597.5M vs $635.4M) [V] | Lead with cc/USD decline |
| 3 | Net cash "~₹2,000 Cr" | **₹2,637 cr at Mar-26; ₹2,879 cr ($304.1M) at Jun-26** (company cash & equivalents) [V] | Correct (screener investments understate) |
| 4 | "Q4 deal TCV $208M" presented as "new deal wins" | Total TCV $208M, of which **new only $41M**; FY26 total TCV $658M, new $251M [V] | Split total/new |
| 5 | Revenue/employee "~$52,000" (FY26 rev ÷ year-end headcount) | $51.3K on average headcount [E]; fine as approximation | Minor |
| 6 | Attrition 13.0%; headcount 11,363 | **11.7%; 11,057 (Jun-26)** [V] | Update |
| 7 | No Q1 FY27 | **Q1 FY27: $145.2M (+0.3% QoQ cc, −3.0% YoY cc), ₹1,379 cr, EBITDA 16.1%, EBIT 14.7%, PAT ₹161 cr (+51% YoY), TCV $169M (+20% YoY), DSO 55, top-10 56.2%** [V]; wage hike from 1 Jul 2026 (170–200 bps gross) [V] | Add whatsnew |
| 8 | Leadership: new CFO (Aug 2025), CEO-Americas (Oct 2025) | Add **COO Vikram Puranik (inducted Q4 FY26)** and new data/AI, ERP, alliances, LSS heads [V] | Add |
| 9 | Missing events | **OpenAI Select Partner (8 Oct 2026)**; CARE AA+/Stable reaffirmed (24 Sep 2026) [V-titles] | Add |
| 10 | Promoter "~40.4%" | 40.38% ✓; add FII 12.78% / DII 21.98% / public 24.85% (Jun-26) [V] | Minor |
| 11 | FY26 PAT "~₹518 Cr flat" without tax caveat | Reported PAT depressed by one-time US federal tax provision (ETR 34.4%); adjusted PAT $74.2M (~₹660 cr) [V] | Add basis note |
| 12 | Client concentration (not quantified in cover) | Top-5 43.4% / top-10 56.2% (rising) [V] | Add |
