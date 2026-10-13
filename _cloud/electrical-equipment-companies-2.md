# Electrical Equipment — company packs, batch 2

**Scope:** Emmvee Photovoltaic Power · HBL Engineering · Fujiyama Power Systems (UTL Solar) · Vikram Solar · Saatvik Green Energy · Websol Energy System
**Prepared:** 2026-10-13 (research subagent, batch 2)
**Market data fetch time:** screener.in pages (consolidated and standalone) pulled via curl at **2026-10-13 18:38–18:39 UTC** (≈00:08 IST on 14-Oct, after the close, so these are 13-Oct-2026 closing prices). All m-cap, price, P/E, book value, ROCE and ROE figures below come from those pages unless stated otherwise.

**Sources used (fetched this session):** screener.in consolidated + standalone HTML for EMMVEE, HBLENGINE, UTLSOLAR, VIKRAMSOLR, SAATVIKGL, WEBELSOLAR; screener schedules API (`/api/company/<id>/schedules/?parent=Other+Assets|Borrowings&section=balance-sheet`) for cash/receivables/borrowing splits; BSE filing PDFs (AttachLive/AttachHis) for investor presentations, call transcripts, board-meeting intimations and Reg-30 disclosures — listed in each pack.

**Tags:** [V] = verified this session from a fetched primary or screener page · [V-sec] = fetched secondary (news/aggregator) page · [K] = known from memory, source named · [E] = estimate or my own arithmetic.

**Bases and conventions** (same as batch 1):
- "EBITDA" = screener "Operating Profit" (excludes other income) unless labelled company EBITDA.
- Net cash = screener "Cash Equivalents" + "Investments" − "Borrowings" (borrowings include lease liabilities). Screener often misses bank deposits, so the company figure is added where available.
- EV/EBITDA [E] = (m-cap − screener net cash) ÷ TTM operating profit. P/B [E] = price ÷ screener book value.
- ₹ figures in crore unless stated.

**Results-calendar status (as of 13-Oct-2026):**
- **Q1 FY27 (Jun-26) is the latest published quarter for all six.** No Q2 FY27 results are out.
- **Emmvee** reports Q2 FY27 on **14-Oct-2026** (call 15-Oct) [V BSE 7-Oct-26].
- **Fujiyama's board meets 15-Oct-2026** to approve an equity raise for minimum public shareholding (MPS). Its Q2 date has not been announced [V BSE 12-Oct-26].
- Vikram, Saatvik and Websol have closed their trading windows (30-Sep, 25-Sep and 28-Sep) and have no board dates filed. HBL has no intimation either; its Q1 results came out on 8-Aug-26.
- **Shareholding:** screener already shows **Sep-2026** shareholding for **Websol**. For the other five, Jun-2026 is the latest.

## 0. Batch summary grid

All market data comes from screener at the 13-Oct-2026 close (fetched 18:38–18:39 UTC) [V]. All companies report on an Indian FY (Apr–Mar). Figures are ₹ cr unless stated. Financials are consolidated except Fujiyama (standalone, because screener's consolidated history is sparse; FY26 is near-identical). For Websol I use company revenue (screener's annual line under-states it by ~₹75 cr).

| Metric | Emmvee | HBL Engineering | Fujiyama (UTL) | Vikram Solar | Saatvik | Websol |
|---|---|---|---|---|---|---|
| Archetype | Solar: integrated TOPCon cell + module | Batteries + rail/defence electronics (Kavach) | Solar: rooftop B2C kits (panels + inverters + batteries) + 1 GW DCR cells | Solar: module-only (cells Q4 FY27) + BESS | Solar: module-only (cells Q3 FY27) | Solar: cell-first (PERC) merchant DCR cells + small modules |
| FY26 revenue | 5,050 | 3,303 | 2,654 | 4,803 | 4,548 | 1,049 (co.) |
| YoY growth | +116% | +68% | +72% | +41% | +111% | +82% |
| EBITDA (screener OP) | 1,734 | 1,113 (CARE 1,137) | 493 | 916 | 543 (co. 581 incl. OI) | 429 (co., ex-OI) |
| EBITDA margin | 34% | 34% | 19% | 19% | 12% | 41% |
| PAT | 1,082 | 814 (after ₹31 cr EI) | 304 | 469 | 357 | 303 (Q4 tax-flattered) |
| ROCE / ROE (screener) | 44.6% / 50.7% | 59.3% / 45.3% | 35.1% / 36.6% | 30.6% / 21.4% | 33.0% / 42.3% | 63.2% / 66.9% |
| Borrowings (Mar-26, incl. leases) | 360 | 67 | 520 | 617 (517 leases) | 939 | 131 |
| Cash + investments (screener) | 411 | 954 | 161 | 1,734 | 82 | 152 |
| Net cash / (debt), screener [E] | +51 (co. ≈ +234 ex-leases) | +887 (CARE liquid ₹570 cr) | (359) | +1,117 | (857); **₹1,250 cr gross debt Jun-26**, peak net debt ₹2.2–2.4k cr | +21 (co. +34); IREDA ₹110 cr prepaid Aug-26 |
| **M-cap (13-Oct-26)** | **20,680** | **19,696** | **12,348** | **5,208** | **5,070** | **2,856** |
| Price vs IPO | ₹299 vs ₹217 (+38%) | — | ₹403 vs ₹228 (+77%) | ₹144 vs ₹332 (**−57%**) | ₹399 vs ₹465 (−14%) | — (1-yr −45%) |
| P/E (TTM, screener) | 16.2× | 24.6× | 29.5× (41× reported; ≈31× ex-fire [E]) | 14.4× | 20.4× | 9.1× |
| P/B [E] | 5.6× | 8.9× | 9.7× | 1.6× | 3.7× | 4.5× |
| EV/EBITDA TTM [E] | ~10.7× | ~17.6× | ~19.9× | ~5.1× | ~14.8× | ~6.3× |
| Latest quarter | Q1 FY27 | Q1 FY27 | Q1 FY27 | Q1 FY27 | Q1 FY27 | Q1 FY27 |
| Q revenue (YoY) | 1,556 (+51%) | 638 (+6%) | 1,346 (**+125%**) | 1,563 (+38%) | 511 (**−44%**) | 373 (+70%) |
| Q EBITDA margin | 35% | 23% (screener) | 18.9% | **8.1%** | 8.3% co. / 6.6% screener | 33.7% |
| Q PAT (YoY) | 380 (+103%) | 109 (−24%) | 58 reported / ≈165 ex-fire (+144%) | 20 (**−85%**) | 5 (**−95%**) | 78 (+16%) |
| Order book | 9.9 GW (Jun-26) | **₹5,902 cr (Sep-26)**, 75% Kavach/TMS | n.a. (B2C channel) | 7.9 GW (Jun-26) | 6.35 GW ≈ ₹8,200 cr | ₹1,278 cr (Jun-26) |
| Native capacity | Modules 10.3 GW; cells 2.94 GW → 16.3 / 8.9 GW by early FY28 | Batteries (Ni-Cd #2 globally), Kavach v4.0 loco/trackside, fuze plant | Panels 3.57 GW; cells 1 GW (+1.2 GW); PE 4.18 GW; Li-ion 0.55 → 2.55 GWh | Modules 15.5 GW nameplate; cells 0 → 9 GW (Q4 FY27); wafer 9 GW FY29 | Modules 4.8 → 8.8 GW; cells 0 → 2.4 GW (Q3 FY27) → 6 GW FY28 | Cells 1.2 GW PERC → 1.35 GW (TOPCon Mar-27); modules 0.55 GW; 4+4 GW greenfield |
| Native KPI 2 | Cell utilisation 83%; DCR >50% of Q1 sales; FY27 EBITDA guidance ₹2,400 cr | FY26 electronics PBIT 50% → 31% Q1 FY27; CLW order balance cancelled | 10,100+ channel partners; ~10% on-grid rooftop share; FY27 guidance +70% | Realisation ₹15.02/Wp; DCR only 76 MW; FY27 guidance under review | 30% DCR book; 1,000 cr capex spent of ~₹3,500 cr | Module ₹20.5/Wp; 100% DCR (PMSG/KUSUM); pledge 80% → 16% |
| Promoter % (latest) | 80.03% (Jun-26) | 59.11% (Jun-26) | **86.63%** (Jun-26) | 63.01% (Jun-26) | 75.99% (Jun-26) | **29.72% (Sep-26)** |
| FII / DII % | 2.92 / 9.80 | 5.62 / 0.97 | 1.63 / 5.98 | 3.37 / 4.04 | 0.19 / 10.97 | 4.17 / 0.21 |
| Corporate events 2026 | Q2 on 14-Oct; GST SCN ₹38 cr (subsidiary) | CARE upgrade to AA- (9-Oct); ₹1,710 cr loco Kavach order (May); Cochin Shipyard JV | **Bawal fire ₹143.6 cr (May)**; **QIP/MPS board 15-Oct**; Zayo 50% | Gangaikondan module plant live (Jun); sales head resigned (Sep) | Odisha module ramp (Aug); Melcon transformers; MSEDCL pumps ₹100 cr | **WB land 54.2 acres for 4 GW (23-Sep)**; IREDA prepaid |

## 0b. Cross-company read-across

**1. Archetypes in this batch**
- **(a) Integrated solar (cell + module):** Emmvee (2.94 GW cells) and, on a small scale, Fujiyama (1 GW cells feeding its own DCR rooftop panels).
- **(b) Module-only solar racing to cells:** Vikram (9 GW cells due Q4 FY27) and Saatvik (2.4 GW due Q3 FY27).
- **(c) Cell-first merchant:** Websol (1.2 GW PERC, 0.55 GW modules).
- **(d) Consumer rooftop/backup brand:** Fujiyama, which overlaps the "batteries" and "EV/charging" archetypes through its inverters, Li-ion and chargers.
- **(e) Batteries + rail/defence electronics:** HBL. Its battery heritage sits alongside a Kavach business that, in FY26, earned more than everything else combined.

**2. Q1 FY27 split the solar group cleanly by cell ownership.**
- **Own cells, high utilisation** (Emmvee 35%, Websol 34%) or own cells plus B2C pricing power (Fujiyama 19%): margins held or rose.
- **No cells** (Vikram 8.1%, Saatvik 8.3%/6.6%): margins collapsed. Three causes:
  - Imported Chinese cell prices spiked in Q4 FY26 and flowed through inventory.
  - Aluminium, copper and EVA costs jumped with the West Asia war.
  - C&I buyers paused around the ALMM-II switch.
- Batch 1 showed the same pattern: Premier ~29% (own cells), Waaree 18%.
- **This is the single most important read-across for the sub-sector report: in FY27, DCR cell ownership is the margin.**

**3. ALMM-II timeline.** All five solar managements describe it consistently:
- List-II (cells) took effect on **1-Jun-2026**.
- MNRE's **OM of 18-Jul-2026** gave non-DCR C&I and rooftop projects relief to **31-Dec-2026**. Saatvik and Vikram call this a "postponement to 1 January" [V calls].
- The **Jan-2027 cliff** hurts module-only makers whose FY27 mix is non-DCR (Vikram). It helps cell owners (Emmvee, Websol, Fujiyama, and Saatvik if Odisha is live).
- ALMM-III (wafers/ingots) is expected around **1-Jun-2028** (Saatvik deck). That explains the wave of ingot-wafer plans: Emmvee 9 GW (FY29–30), Vikram 9 GW (FY29), Saatvik 6 GW (FY29), Websol with Linton Crystal.

**4. Realisations and spreads (Q1 FY27):**
- Non-DCR modules: ~15–16 US¢/W (Emmvee).
- Vikram's blended realisation: ₹15.0/Wp, with DCR at +₹0.50/Wp.
- Websol modules: ₹20.5/Wp (all DCR).
- Emmvee guides EBITDA of ~₹2.5/W for module-only and **₹6.0–6.5/W integrated**. Integration is worth roughly 2.5× EBITDA per watt.
- Emmvee's deck says DCR modules are priced ~60% above non-DCR.

**5. Capex and leverage.** All four non-integrated or partly integrated solar names are in heavy capex:
- Emmvee: ~₹5,500 cr Unit 7 (₹3,300 cr debt) plus ₹5,000–5,500 cr ingot-wafer.
- Vikram: ~₹500 cr a quarter, sanctioned loans not yet drawn.
- Saatvik: ~₹3,500 cr, with peak net debt of ₹2.2–2.4k cr.
- Websol: undisclosed for the 4 GW plant, likely more than ₹2,000 cr [E].
- Fujiyama: ~₹500 cr in FY27 plus an MPS equity raise.
- FCF was negative in FY26 for Emmvee, Fujiyama and Saatvik.

**6. HBL is not a solar story.** HBL's FY26 margin step-up (20% to 34%) came from one segment, Electronics at 50% PBIT, and specifically from execution of the Kavach v4.0 loco order after RDSO approval. Q1 FY27 electronics margin was already 31%. The order book doubled to ₹5.9k cr, but management guides for a Kavach decline from FY29. CG Power (batch 1) is now a Kavach competitor through G.G. Tronics.

**7. IPO-vintage overhang.** Four of the six listed between Aug and Nov 2025 (Vikram, Saatvik, Emmvee, Fujiyama).
- Anchor and 6-month pre-IPO lock-ins have all expired, and DIIs trimmed Emmvee and Vikram.
- **18-month promoter lock-ins expire Feb-2027 (Vikram), Mar-2027 (Saatvik), and ~May-2027 (Emmvee, Fujiyama)** [K/E].
- Three promoters sit above the 75% MPS cap (Fujiyama 86.6%, Emmvee 80.0%, Saatvik 76.0%), so sell-downs or QIPs are mandatory by 2028. Fujiyama starts on 15-Oct-26.
- Price vs IPO: Fujiyama +77%, Emmvee +38%, Saatvik −14%, Vikram −57%.

**8. Valuation dispersion.** EV/EBITDA runs from ~5× (Vikram) and ~6× (Websol) through ~11× (Emmvee) and ~15× (Saatvik) to ~18× (HBL) and ~20× (Fujiyama). The market pays for B2C distribution (Fujiyama) and for railway/defence IP (HBL), and discounts module-only capacity (Vikram) and PERC merchant cells (Websol) [E].


---

## 1. Emmvee Photovoltaic Power (NSE: EMMVEE · BSE: 544608)

**Archetype:** Solar — integrated TOPCon cell + module maker (pure play), Bengaluru; all five units within 100 km.
**Listing status:** listed 18-Nov-2025 (IPO at ₹217; ₹2,900 cr issue = ₹2,144 cr fresh + ₹756 cr OFS — primer/prospectus figures, consistent with screener equity jump FY26) [V screener equity; issue split K: prospectus, SEBI filing linked from screener]. No merger/demerger. **Q2 FY27 board meeting 14-Oct-2026; earnings call 15-Oct-2026 4 pm** (BSE intimation 7-Oct-26) [V] — so Q1 FY27 is the latest published quarter.
**Documents fetched:** Q1 FY27 investor presentation (BSE, 15-Jul-26) [V]; Q1 FY27 call transcript (16-Jul-26) [V]; board intimation 7-Oct-26 [V]; GST SCN disclosure and litigation update (1-Oct-26) [V].

### 1.1 Market data (screener consolidated, 13-Oct-2026 close, fetched 18:38 UTC) [V]

| Item | Value |
|---|---|
| Price | ₹299 (52-wk high/low ₹372 / ₹172) — +38% vs ₹217 IPO price |
| Market cap | **₹20,680 cr** |
| P/E (TTM) | **16.2×** (TTM PAT ₹1,274 cr) |
| Book value / P/B | ₹53.4 / **5.6×** [E] |
| ROCE / ROE (FY26) | 44.6% / 50.7% |
| Dividend yield | 0.33% (FY26 payout 6%) |
| EV/EBITDA (TTM) | ≈ **10.7×** [E]: (20,680 − 51) ÷ 1,932 |

### 1.2 FY26 (Apr-25–Mar-26), consolidated (screener [V]; Q1 FY27 deck P&L [V])

| Metric | FY24 | FY25 | FY26 | YoY |
|---|---|---|---|---|
| Revenue | 952 | 2,336 | **5,050** (co. ₹5,049.9 cr) | +116% |
| Operating profit (screener) | 120 | 722 | **1,734** | +140% |
| OPM | 13% | 31% | **34%** | |
| Company EBITDA (deck, ex-OI) | — | 722 | 1,734 (34%) | same basis |
| Gross margin (deck: rev − RM − Δinventory) | — | 40% | 45% | |
| Other income | 3 | 25 | 54 | |
| Interest | 34 | 108 | 155 | |
| Depreciation | 42 | 156 | 296 | |
| PBT | 48 | 483 | 1,338 | |
| PAT | 29 | 369 | **1,082** | +193% |
| CFO / FCF (screener) | 234 / −440 | 625 / −363 | **200 / −440** | |

- FY26 CFO was squeezed by working capital: inventory +₹952 cr and receivables +₹531 cr (deck cash-flow) [V]. Screener inventory days 225 and CCC 159 days (FY25 136) [V].
- IPO net proceeds ₹2,060 cr (deck: "proceeds from issue of equity shares net of ₹81 cr expenses" = ₹20,600 mn) were mostly used to repay borrowings: FY26 repayments ₹1,911 cr [V deck].

### 1.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 due 14-Oct-26 [V deck + transcript + screener]

| Metric | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY | QoQ |
|---|---|---|---|---|---|
| Revenue | 1,028 | 1,739 | **1,556** | +51% | −11% |
| EBITDA (company/screener) | 350 (34%) | 571 (33%) | **548 (35%)** | +56% | −4% |
| Interest | 53 | 13 | 11 | | |
| PAT | 188 | 392 | **380** | +103% | −3% |
| Module production (MW) | 635 | 952 | **970** (record) | +53% | |
| Cell production (MW) | 360 | 428 | **454** (record) | +26% | |
| Module utilisation (effective) | 44% | 44% | **45%** | | |
| Cell utilisation | 68% | 79% | **83%** | | |
| Order inflow | | | 1,484 MW | | |

- Interest fell from ₹53 cr to ₹11 cr after IPO-funded debt repayment — the main reason PAT grew roughly twice as fast as EBITDA [V].
- Over 50% of Q1 sales were DCR; the sales mix included merchant cell sales (CEO Suhas Manjunatha, call) [V].
- Inventory: management expects the finished-goods build-up (₹1,711 cr inventory at Mar-26) to liquidate against the order book [V].

### 1.4 Native KPIs (solar) [V unless tagged]

| KPI | Value | Source |
|---|---|---|
| Module capacity (nameplate) | **10.3 GW** (Units 2–6: 0.87 + 2.21 + 2.21 + 2.5 + 2.5); Unit 1 retired 31-May-25 | Q1 deck |
| Cell capacity | **2.94 GW TOPCon** (Unit 3, Centrotherm PECVD) | Q1 deck |
| Expansion | Unit 7: **6 GW cell + 6 GW module** integrated TOPCon; module line by **Dec-2026**, cell line by **Mar-2027** → **16.3 GW modules / 8.9 GW cells by early FY28** | Q1 deck/call |
| Expansion cost | ~₹5,500 cr total (hard cost ~₹4,600 cr); **debt ~₹3,300 cr tied up at <8%**; all equipment ordered, ~60% of hard cost on order | Q1 deck/call |
| Ingot-wafer | **9 GW** in two phases: 5 GW FY29, 4 GW FY30, "subject to ALMM-III clarity"; capex **₹5,000–5,500 cr** (₹600–650 cr/GW), mainly internal accruals | Q1 deck |
| Order book | **9.9 GW** (Jun-26) vs 9.4 GW (Mar-26), 4.9 GW (Mar-25), 1.1 GW (Mar-24); ~7+ GW to execute in the next 18 months | Q1 deck/call |
| Order-book mix | C&I 39% · IPPs 33% · Others 28% | Q1 deck |
| EBITDA/W guidance | ~₹2.5/W module-only; **₹6.0–6.5/W** for cell (integrated) | Q1 call |
| Realisation | Non-DCR module ~15–16 US¢/W in Q4 FY26; DCR modules priced ~60% above non-DCR (deck) | Q1 call / deck |
| Peak cell utilisation | 85–90% (already near) | Q1 call |
| FY27 guidance | **~₹2,400 cr EBITDA** for FY27 (vs ₹1,734 cr FY26, +38%) | Q1 call |
| Customer concentration (revenue share, chart) | Top-10 ≈73%, top-5 ≈55%, largest ≈28% in Q1 FY27 (FY26: ≈68% / 53% / 19%; FY25: ≈85% / 75% / 36%) — read from bar chart; repeat-customer rate 57% | Q1 deck [V, chart read] |
| Policy view | ALMM List-II effective Jun-2026; C&I "brief transition impact"; mgmt says the industry is "looking at ALMM-3 now" | Q1 deck/call |

### 1.5 Balance sheet (Mar-26) [V]

| Item | Screener | Company (deck BS) |
|---|---|---|
| Borrowings | 360 (incl. leases 183) | 177 (LT 49 + ST 128) + leases 183 |
| Cash + bank | 354 | 243 cash + 111 other bank balances |
| Investments | 57 | 30 current MFs + 27 non-current equity |
| Net cash / (debt) | **≈ +51** [E] | ≈ **+234 ex-leases** [E] |
| Net worth | 3,694 | 3,695 |
| Inventory / receivables | 1,711 / 695 | same |

- Borrowings fell from ₹2,065 cr (Mar-25) to ₹360 cr. Net-cash status is thin and will reverse as the ₹3,300 cr Unit-7 project debt is drawn in FY27 [E].

### 1.6 Ownership (screener, Jun-2026 — latest shown; Sep-26 not yet on screener) [V]

| Holder | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|
| Promoters | 80.03% | 80.03% | **80.03%** |
| FIIs | 3.97% | 2.45% | 2.92% |
| DIIs | 12.50% | 12.28% | **9.80%** |
| Public | 3.43% | 5.24% | 7.24% |
| Shareholders | 1.01 lakh | 0.93 lakh | 1.33 lakh |

- DII holding fell 2.5 pts in the Jun-26 quarter as anchor/pre-IPO lock-ins rolled off. Under SEBI ICDR, anchor lock-in expired 30/90 days after allotment (≈Dec-25/Feb-26) and the 6-month pre-IPO lock-in ≈mid-May-2026 [K: SEBI ICDR rules; dates E]. The **18-month promoter lock-in on the excess over 20% expires ≈mid-May-2027** [K/E]. Promoter 80% exceeds the 75% MPS cap, so a promoter sell-down within three years of listing is mandatory (by ≈Nov-2028) [K: SCRR 19A].

### 1.7 Concentration, risk and governance notes
- Material subsidiary Emmvee Energy Pvt Ltd received a Karnataka GST show-cause notice (30-Sep-26) on FY23 input-tax credit: tax ₹20.4 cr, ₹38.4 cr including interest and penalty. The company says it has no material impact [V BSE 1-Oct-26].
- Criminal litigation disclosed in the prospectus: the Karnataka HC has directed the trial court to dispose of the case within nine months [V BSE 1-Oct-26].
- Module utilisation is only 45%, because 5 GW of the 10.3 GW was added in FY26. Cells are the binding constraint, so most modules still use bought-in (imported) cells until Unit 7 [V].

- **Peer read:** Emmvee's Q1 FY27 EBITDA margin of 35% is the highest among the integrated module+cell names (Premier ~29%, Waaree 18.2% per batch 1). It is helped by 83% cell utilisation and >50% DCR sales. On non-DCR modules (~15–16 ¢/W), its spread is no better than peers' [V/E].

### 1.8 Story bullets
1. **Cheapest integrated solar name by multiple**: 16× P/E and ~11× EV/EBITDA for 35% margins. The discount reflects a short public record, 80% promoter float overhang and a cell gap (2.94 GW cells vs 10.3 GW modules) [E].
2. **FY27 hinges on Unit 7**: the module line lands Dec-26 and the cell line Mar-27. The FY27 EBITDA guide of ₹2,400 cr is about utilisation and DCR mix, not new capacity [V].
3. **De-levered by IPO, re-levering for Unit 7**: ₹3,300 cr of project debt plus ₹5,000–5,500 cr ingot-wafer capex makes FCF negative through FY29 [E].
4. **Q2 FY27 print on 14-Oct-26**: watch whether the 35% margin holds as non-DCR prices fall and the DCR share rises after ALMM-II [V date].

---

## 2. HBL Engineering (NSE: HBLENGINE · BSE: 517271)

**Archetype:** Batteries + railway/defence electronics. HBL is a specialist engineering company with three reported segments: Industrial Batteries (lead-acid VRLA/PLT, Ni-Cd, Li-ion packs), Defence & Aviation Batteries, and Electronics (Kavach train-collision avoidance, TMS/CTC, electronic fuzes, EV drivetrain). It fits the "batteries" archetype by heritage, but FY26 profits are a **railway-signalling (Kavach)** story.
**Listing status:** listed on NSE and BSE (formerly HBL Power Systems; renamed Nov-2024). No merger or demerger. No Q2 FY27 board-meeting intimation appears in screener's announcement feed as of 13-Oct-26. Last year's Q1 results came out 8-Aug-26 [V].
**Documents fetched:** Annual Report FY26 (BSE, 3-Sep-26, 14,000 lines; segment note 44.9) [V]; Q1 FY27 results with segment table (BSE, 8-Aug-26) [V]; CARE rating rationale 9-Oct-26 (upgrade to AA-/Stable) [V]; Sahi news page on the ₹1,710 cr Kavach order (28-May-26) [V-sec]. **HBL holds no earnings calls**; its only "concall" material is AGM transcripts.

### 2.1 Market data (screener consolidated, 13-Oct-2026 close, fetched 18:38 UTC) [V]

| Item | Value |
|---|---|
| Price | ₹713 (52-wk high/low ₹1,122 / ₹603); 1-yr price change −22% |
| Market cap | **₹19,696 cr** |
| P/E (TTM) | **24.6×** (TTM PAT ₹780 cr) |
| Book value / P/B | ₹79.9 / **8.9×** [E] |
| ROCE / ROE (FY26) | 59.3% / 45.3% (company AR: ROCE 49%, RoNW 36.7% standalone) |
| Dividend yield | 0.42% (FY26 dividend ₹3/sh) |
| EV/EBITDA (TTM) | ≈ **17.6×** [E]: (19,696 − 887) ÷ 1,068 |

### 2.2 FY26 (Apr-25–Mar-26), consolidated (screener [V]; AR segment note [V]; CARE [V])

| Metric | FY24 | FY25 | FY26 | YoY |
|---|---|---|---|---|
| Revenue | 2,233 | 1,967 | **3,303** (CARE TOI 3,326) | +68% |
| Operating profit (screener) | 423 | 393 | **1,113** | +183% |
| OPM | 19% | 20% | **34%** (CARE PBILDT 1,137 = 34.2%) | |
| Other income | 8 | 38 | 44 | |
| Exceptional items | — | (1) | **(31)**: ₹26.5 cr obsolete WIP on a heavy-weight torpedo battery project for NSTL + ₹4.3 cr assets written off | |
| PBT | 377 | 374 | 1,092 | |
| PAT | 280 | 276 | **814** | +195% |
| CFO / FCF | 270 / 204 | 247 / 96 | **738 / 594** | |

**FY26 segments (consolidated, AR note 44.9; segment PBIT from the Q1 FY27 results table) [V]:**

| Segment | FY25 revenue | FY26 revenue | Growth | FY26 segment result (PBIT) | Margin |
|---|---|---|---|---|---|
| Industrial Batteries | 1,397 (exports 353) | **1,416** (exports 402) | +1% | 341 | 24.1% |
| Defence & Aviation Batteries | 227 | **212** (exports 101) | −7% | 58 | 27.2% |
| Electronics (Kavach, TMS, fuzes, EV) | 298 | **1,626** | **5.4×** | **818** | **50.3%** |
| Unallocated | 50 | 57 | | (78) | |
| Total | 1,967 | 3,303 | +68% | 1,139 | 34.5% |

- The annual report says **Kavach was "almost 50% of sales in FY26"** and should be about the same share in FY27. The BRSR note puts Railway Electronics incl. TMS/TCAS at **58.4%** of standalone turnover [V AR].
- CMD Dr A.J. Prasad's FY26 pay was ₹1.17 cr plus a **₹56.02 cr commission** (AR, Rule 5 disclosure) [V]. That is about 5% of PBT, a notable governance point.

### 2.3 Why FY26 margins hit 34%: Kavach explained [V unless tagged]
- **What Kavach is:** India's indigenous automatic train-protection (ATP/TCAS) system, certified to SIL-4. It has two halves. **Onboard loco equipment** (a radio, computer and driver interface on each locomotive) is supplied per loco. **Trackside/station equipment** (RFID tags, station Kavach, towers, LTE/radio) is supplied per route-km. Vendors must be RDSO-approved, and Version 4.0 equipment must interoperate across vendors. HBL co-developed the system with RDSO and calls itself "the leader in execution" (AR) [V].
- **The FY26 spike was one order executing.** HBL built inventory during a long RDSO approval wait for Kavach **v4.0**. Once approval arrived, it executed the **Chittaranjan Locomotive Works (CLW) loco order** in Q2–Q3 FY26 (CARE) [V].
  - Electronics revenue was ₹180 cr in Q1 FY26 and ₹179 cr in Q4 FY26. That leaves **≈₹1,267 cr in Q2+Q3 FY26** [E from AR and Q1 table].
  - Company revenue was ₹1,223 cr in Q2 FY26 (OPM **44%**) and ₹874 cr in Q3 FY26 (OPM 35%), against ₹600 cr per quarter otherwise [V screener].
  - Onboard equipment is high-value electronics with in-house IP and software, sold to a handful of approved vendors. FY26 electronics PBIT was 50%, after a **₹92.75 cr Kavach warranty provision** (AR note 39.2) [V].
- **The CLW order was not fully delivered.** CARE (9-Oct-26) says the balance quantity of the CLW order "remained unexecuted and was subsequently **cancelled**" because locomotives were not made available within the contract window [V]. This is the main execution risk: loco-shed availability is outside HBL's control.
- **Normalisation is already visible.** Electronics PBIT margin was **14% in Q4 FY26** (₹26 cr on ₹179 cr) and **31% in Q1 FY27** (₹71 cr on ₹227 cr) [V]. The chairman warns that "competitive bidding leads to variations in margin" and that Kavach sales and PBT "could decline from FY29 onwards" as competition increases (AR MD&A) [V].
- **Competition:** RDSO-approved vendors include Medha, Kernex and HBL (the original three) [K: RDSO/Wikipedia, as cited in the primer]. Newer entrants such as **CG Power's G.G. Tronics** (≈₹1,000 cr Kavach book, per batch-1 CG Q1 FY27 call [V]) mean HBL is no longer one of "only three".

### 2.4 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 not yet out (results ~Nov-26, date not yet announced) [V results PDF + screener]

| Metric | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY |
|---|---|---|---|---|
| Revenue (consolidated) | 602 | 604 | **638** | +6% |
| Operating profit / OPM | 192 / 32% | 75 / 12% | **147 / 23%** | −23% |
| Company PBILDT (CARE) | | | 167.3 (incl. OI) | |
| PAT | 143 | 64 | **109** (CARE 110.9) | −24% |
| Industrial Batteries revenue / PBIT | 337 / 84 | 345 / 61 | **362 / 83** (22.9%) | +7% |
| Defence & Aviation revenue / PBIT | 74 / 33 | 69 / 18 | **38 / 9** | −49% |
| Electronics revenue / PBIT | 180 / 89 | 179 / 26 | **227 / 71** (31%) | +26% / −21% |

- **Q2 FY27 base effect:** Q2 FY26 revenue was ₹1,223 cr with ₹544 cr operating profit, which was the CLW peak. Q2 FY27 is very likely to show a steep YoY decline unless the ₹1,710 cr loco order ramps fast [E].

### 2.5 Native KPIs (Kavach, batteries, defence) [V unless tagged]

| KPI | Value | Source |
|---|---|---|
| Order book | **≈₹5,902 cr (Sep-2026)**, up from ₹2,999 cr (31-Dec-25); Kavach + TMS ≈**₹4,440 cr (75%)** | CARE 9-Oct-26 |
| Large 2026 orders | ₹575 cr ICF onboard v4.0 (Jan-26); ₹800 cr BLW LoA (Feb-26); ₹179.8 cr BLW and ₹83.8 cr PLW (Apr-26); **₹1,710 cr onboard Kavach v4.0 loco order (28-May-26)**; ₹24 cr / ₹31.5 cr ICF (Jul–Aug-26) | Sahi [V-sec]; others search-snippet only (unverified) |
| National Kavach rollout | **>6,000 locos fitted**, ~7,300 more in progress; trackside work taken up on **>21,800 route-km** (Jul-2026) | CARE [V] |
| TMS/CTC | <2% of network covered; 4 installations proven | AR |
| Ni-Cd batteries | "Second-largest industrial Ni-Cd supplier globally"; exports +15% in FY26; capacity expansion | AR |
| PLT batteries (data centres) | Only Indian maker; DC sales +100% in FY26 (STT, NTT, Colt, CapitaLand, Reliance, CtrlS); PLT capacity being doubled | AR |
| Li-ion | Vande Bharat orders; Siemens picked HBL as one of 2 Li-ion suppliers; no telecom Li-ion (margins too low); defence Li-cells with DRDO-NSTL licence (~₹200 cr invested) | AR |
| Electronic fuzes | Grenade fuzes approved by MHA and selling; **Indian Army approval expected in 2027**; 155 mm artillery fuze approval expected in 2027; licensed plant in Telangana | AR |
| EV drivetrain (55 T trucks) | ~40,000 km of road trials; homologation by Mar-2027; **pilot sales from Jul-2027** (delayed ~9 months by the magnet-less motor redesign); **Green Maritime Propulsion JV with Cochin Shipyard** (incorporated 11-Jun-26) | AR |
| Long-term ambition | Current businesses to exceed **₹5,000 cr sales in FY2030** ("not a prediction") | AR chairman's letter |
| Exports | ₹520 cr FY26 (₹453 cr FY25) | AR |

### 2.6 Balance sheet (Mar-26) [V]

| Item | Screener | Company / CARE |
|---|---|---|
| Borrowings | 67 (LT 4 + ST 40 + leases 23) | D/E 0.03×; term loan fully repaid (CARE withdrew TL rating) |
| Cash equivalents | 552 | "cash and liquid investments" **₹570 cr** (CARE) |
| Investments | 402 (incl. ~₹87 cr associates Tonbo Imaging, Naval Systems & Technologies) | |
| Net cash | **≈ +887** [E] | ≈ +₹500 cr on the CARE liquid-only basis [E] |
| Net worth | 2,215 | 2,172 (standalone, AR) |
| Working capital | Debtor days 71, inventory days 148, CCC 171 (FY25 202) | Operating cycle 124 days (FY25 147) |

- Capex plans: Li-ion division, fuze infrastructure, charging hubs (TTL Electric Fuel subsidiary), and IT. All are funded internally (CARE). The board's surplus-cash policy also allows LP commitments to PE funds, start-up stakes and "secondary market" investments (AR) [V]. This is worth flagging on capital allocation.

### 2.7 Ownership (screener, Jun-2026 latest) [V]

| Holder | Jun-25 | Mar-26 | Jun-26 |
|---|---|---|---|
| Promoters (Aluru family; Aluru Family Private Trust ~51% per primer) | 59.10% | 59.11% | **59.11%** |
| FIIs | 4.83% | 5.94% | 5.62% |
| DIIs | 0.36% | 0.79% | 0.97% |
| Public | 35.70% | 34.17% | 34.28% |
| Shareholders | 3.82 lakh | 3.41 lakh | 3.50 lakh |

- The register is very retail-heavy, with DII ownership under 1%. Kavita Prasad Aluru became Executive Director in Jul-2026 [K: per primer; not re-verified].

### 2.8 Story bullets
1. **Kavach is a lumpy, policy-mandated windfall.** FY26 electronics earned ₹818 cr at a 50% margin from a single loco order. Q1 FY27 showed 31%, and management itself guides for a FY29 decline. Do not capitalise 34% company margins [V/E].
2. **Order book doubled to ₹5.9k cr** (Sep-26) on the ₹1.71k cr v4.0 loco order. Conversion depends on loco-shed availability, and the CLW precedent shows unexecuted balances can lapse [V].
3. **The battery base is steady**, at ₹1.4k cr and 24% PBIT. It is shifting from telecom VRLA to Ni-Cd, PLT (data centres) and Vande Bharat Li-ion [V].
4. **Optionality** in fuzes (Army approval 2027), e-truck drivetrain (pilot Jul-27), maritime JV, and sonar/underwater electronics (FY28+). Each one is late against earlier guidance [V].

---

## 3. Fujiyama Power Systems (NSE: UTLSOLAR · BSE: 544613) — brands UTL Solar / Fujiyama Solar

**Archetype:** Solar, consumer/rooftop. A B2C rooftop-solar and backup-power brand selling solar panels, inverters/PCUs/UPS and batteries (lead-acid tubular + Li-ion) through a dealer channel. It now has a **1 GW DCR cell line** plus 1.2 GW more under construction, so it no longer fits the "no cell factory" description.
**Listing status:** IPO Nov-2025: ₹828 cr (₹600 cr fresh + ₹228 cr OFS), price band ₹216–228, listed 20-Nov-2025 [K: primer/RHP; consistent with the screener equity jump from ₹397 cr to ₹1,274 cr in FY26 [V]]. No merger or demerger.
- **Live corporate actions:**
  - **Board meets 15-Oct-2026 to approve an equity raise (QIP or other route) "for the purpose of achieving minimum public shareholding"**. The promoter holds 86.63%, above the 75% cap [V BSE 12-Oct-26].
  - Q2 FY27 results date not yet announced; the trading window has been closed since 1-Oct-26 [V].
**Documents fetched:** Q1 FY27 investor presentation (13-Aug-26) [V]; Q1 FY27 call transcript (14-Aug-26) [V]; CRISIL rationale 14-Aug-26 [V]; board-meeting intimation for the fund raise (12-Oct-26) [V].

**Data note (screener gaps):**
- Screener's **consolidated** page is sparse: only FY20, FY21 and FY26 annual columns, and quarters for Jun-25, Mar-26 and Jun-26.
- The **standalone** page has the full FY20–FY26 history, including FY24 and FY25. The standalone FY25 figure (₹1,541 cr revenue, ₹156 cr PAT) matches the RHP-restated FY25 quoted by CRISIL ("₹1,541 crore in fiscal 2025") [V].
- Consolidated and standalone FY26 are near-identical (₹2,655 cr vs ₹2,654 cr), so I use the **standalone** series throughout and say so. I did not download the RHP itself; FY24/FY25 rest on screener standalone and CRISIL.

### 3.1 Market data (screener, 13-Oct-2026 close, fetched 18:38 UTC) [V]

| Item | Value |
|---|---|
| Price | ₹403 (52-wk high/low ₹494 / ₹171); +77% vs ₹228 IPO price |
| Market cap | **₹12,348 cr** |
| P/E | Screener shows **29.5×**. On TTM reported EPS of ₹9.80 it is **41×** [E]. Excluding the ₹107 cr post-tax Bawal fire provision, it is ≈**31×** [E] |
| Book value / P/B | ₹41.6 / **9.7×** [E] |
| ROCE / ROE (FY26, standalone) | 35.1% / 36.6% |
| Dividend | nil |
| EV/EBITDA (TTM) | ≈ **19.9×** [E]: (12,348 + 359) ÷ 639 |

### 3.2 FY24–FY26 (standalone; screener [V]; CRISIL [V])

| Metric | FY24 | FY25 | FY26 | YoY |
|---|---|---|---|---|
| Revenue | 925 | 1,541 | **2,654** (CRISIL 2,655) | +72% |
| Operating profit | 99 | 249 | **493** | +98% |
| OPM | 11% | 16% | **19%** | |
| Interest | 26 | 27 | 44 | |
| Depreciation | 13 | 18 | 44 | |
| PAT | 45 | 156 | **304** | +95% |
| CFO / FCF | 85 / 38 | 18 / −99 | **−3 / −515** | |

- **FY26 cash flow was negative.** Inventory rose from ₹383 cr to ₹910 cr (inventory days 180) and capex was about ₹520 cr. Both were funded by the IPO (financing inflow +₹654 cr) [V].
- **Product mix:**
  - FY25 per the primer/RHP: panels ~43%, inverters/UPS ~30%, batteries ~21% [K: primer citing RHP; not re-verified].
  - Management **no longer discloses segment mix**. In volume terms it says "if we sell 1 GW of panels we sell 2 GW of inverters", with panel revenue much higher per watt (Q1 call) [V].
  - Tubular batteries are about **10% of revenue** (Q1 call) [V].
  - About **90% of revenue is B2C** (Q1 deck) [V].
  - 4.5 lakh inverters were sold in FY26, and 1.4 million+ over five years (deck) [V].

### 3.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 not yet out [V deck + transcript + screener]

| Metric | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY |
|---|---|---|---|---|
| Revenue | 597 | 901 | **1,346** | **+125%** |
| EBITDA / margin (company) | 106 / 17.7% | 171 / 19.0% | **255 / 18.9%** | +141% |
| Other income (screener) | 0 | 3 | **−141** (screener nets the fire exceptional here) | |
| Exceptional: Bawal fire provision | — | — | **₹143.6 cr** pre-tax (₹107.4 cr post-tax) | |
| PAT, reported | 68 | 106 | **58** (4.3% margin) | −15% |
| PAT ex-fire (company) | 68 | 106 | **≈165** (12.3% margin) | +144% |

- **Bawal fire (6-May-2026).** The fire hit the lead-acid battery plant at Bawal, Rewari, Haryana. It damaged buildings, P&M and inventory with a net carrying value of ₹143.6 cr, all provided for in Q1.
  - The assets are insured. The survey is done, and management expects settlement by end-CY2026; CRISIL says in 6–9 months [V].
  - Tubular batteries were bought in from outside while the plant was down, with a gross-margin hit of under 0.5 pt [V].
  - CRISIL put the rating on Watch Developing after the fire and removed it on 14-Aug-26 (A/Stable, A1) [V].
- **FY27 guidance raised to ~70% revenue growth**, up from 50%. That implies **≈₹4,500 cr** [E]. EBITDA margin is guided "sustainable to improve" from 18.9% (CFO Prashant Gupta, Q1 call) [V]. CRISIL's base case is more cautious at ">₹3,000 cr" [V].

### 3.4 Native KPIs [V unless tagged]

| KPI | Value | Source |
|---|---|---|
| Solar panel capacity | **3,568 MW**: Greater Noida 368 + Dadri 1,200 + Ratlam 2,000 (Ratlam commissioned May-2026; single shift at first) | Q1 deck/call |
| Solar cell capacity | **1,000 MW operational** (DCR cells used in-house for DCR panels) + **1,200 MW announced** | Q1 deck/call |
| Power electronics (inverters, PCUs, UPS, chargers) | **4,180 MW** incl. Ratlam 2,000 MW (commissioned Aug-2026); Parwanoo 400 MW, Noida 1,780 MW | Q1 deck |
| Li-ion batteries | 545 MWh + **2,000 MWh Ratlam due Q2 FY27** | Q1 deck/call |
| Channel | **10,100+ channel partners** (Jun-26), up from ~8,900 (Mar-26). Q1 added 80+ distributors, 1,000+ dealers, 30+ Shoppes; target **15,000 by FY28** (CMD Garg). CRISIL lists 960+ distributors, 6,800+ dealers, 1,150+ Shoppes | Q1 deck/call; CRISIL |
| PM Surya Ghar exposure | Claims ~**10% share of the on-grid rooftop market**; the scheme runs at ~1 GW/month of installs, with ~50 lakh of 1 crore homes done (~15 GW untapped); system cost ₹26–30/W incl. battery. Subsidy needs DCR panel + on-grid/hybrid inverter, hence the cell plant. Watching "PM Surya Ghar 2.0" (battery support, generation incentives; not notified) | Q1 call/deck |
| Backward integration | Stakes in **Zayo Energy** (frames, ribbon, busbar) and **Zayo Cables** (junction box, cables, EVA) raised from 19% to **50%**; Zayo capex ~₹200 cr | Q1 deck/call |
| Capex | Gross block incl. CWIP ~₹800 cr at the start of FY27, heading to ~₹1,300 cr (≈₹500 cr FY27 capex incl. the 1.2 GW cell plant, solar park, BESS) | Q1 call |
| Customer concentration | Low: retail B2C through a dealer network; ~90% B2C | Q1 deck |

### 3.5 Balance sheet (Mar-26, standalone) [V]

| Item | Screener | Company/CRISIL |
|---|---|---|
| Borrowings | 520 (LT 136 + ST 325 + leases 58) | gearing 0.38× |
| Cash | 161 | unencumbered cash ~₹161 cr |
| Net debt | **≈ 359** [E] | |
| Net worth | 1,274 | adjusted NW ₹1,214 cr |
| Working capital | inventory days 180, debtor days 19, CCC 128 | GCA 188 days |

### 3.6 Ownership (screener, Jun-2026 latest) [V]

| Holder | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|
| Promoters (Pawan Kumar Garg, Chairman & Jt MD; Yogesh Dua; families) | 86.76% | 86.76% | **86.63%** |
| FIIs | 2.50% | 1.93% | 1.63% |
| DIIs | 4.72% | 5.60% | 5.98% |
| Public | 6.01% | 5.70% | 5.76% |
| Shareholders | 97,968 | 80,691 | 60,134 |

- **Overhang:**
  - Free float is about 13%.
  - The promoter must reach 25% public shareholding by **Nov-2028** (three years from listing) [K: SCRR 19A]. The 15-Oct-26 board meeting starts that process via a QIP or OFS, so expect dilution or supply of ~12 pts (≈₹1,500 cr at today's price) [E].
  - Anchor lock-ins (30/90 days) expired by ~Feb-2026, and the 6-month pre-IPO lock-in by ~May-2026 [K: ICDR; dates E].
  - The 18-month promoter lock-in on the excess over 20% runs to ~May-2027 [K/E].

### 3.7 Story bullets
1. **Hyper-growth from the channel plus the DCR cell:** Q1 revenue +125% at a 19% margin. In-house DCR cells let Fujiyama sell full PM-Surya-Ghar-eligible kits (panel + inverter + battery) [V].
2. **Valuation is the richest in the solar group:** ~20× EV/EBITDA and ~31× P/E ex-fire, against 10–11× for module makers. This is the "consumer brand" premium [E].
3. **Near-term supply:** the MPS-driven QIP (board 15-Oct-26) and the fire insurance claim are the two Q3 FY27 events [V].
4. **Risks:** inventory-heavy working capital (180 days); PM Surya Ghar dependence and the shape of the 2.0 scheme; the end of the CY2026 ALMM-II exemption for non-subsidy rooftop [V/E].

---

## 4. Vikram Solar (NSE: VIKRAMSOLR · BSE: 544488)

**Archetype:** Solar, module maker (non-integrated today) building cells, wafers and BESS. Plants are in Falta SEZ and Kolkata (West Bengal), Oragadam (Chennai), and the new **Gangaikondan (Tamil Nadu)** integrated hub. It also has an EPC/O&M arm and the BESS subsidiary **VSL PowerHive**.
**Listing status:** IPO Aug-2025: ₹2,079 cr at ₹332, listed 26-Aug-2025 at ₹338 [K: primer/prospectus; consistent with screener equity of ₹317 cr → ₹362 cr and FY26 financing inflow of ₹1,120 cr [V]]. No merger or demerger. The trading window has been closed since 30-Sep-26, and no Q2 board date has been announced yet [V].
**Documents fetched:** Q1 FY27 investor presentation (6-Aug-26) [V]; Q1 FY27 call transcript (7-Aug-26) [V]; BSE Reg-30 filings: 400 MW order (28-Sep-26) and SMP change (29-Sep-26) [V].

### 4.1 Market data (screener consolidated, 13-Oct-2026 close, fetched 18:38 UTC) [V]

| Item | Value |
|---|---|
| Price | **₹144** (52-wk high/low ₹355 / ₹141) — **−57% vs ₹332 IPO price**; 1-yr −55%; trading at its 52-week low |
| Market cap | **₹5,208 cr** |
| P/E (TTM) | **14.4×** (TTM PAT ₹357 cr; trailing earnings are falling) |
| Book value / P/B | ₹87.6 / **1.64×** [E] |
| ROCE / ROE (FY26) | 30.6% / 21.4% |
| EV/EBITDA (TTM) | ≈ **5.1×** [E]: (5,208 − 1,117) ÷ 800. On FY26 EBITDA of 916 it is 4.5× |

### 4.2 FY26 (Apr-25–Mar-26), consolidated (screener [V])

| Metric | FY24 | FY25 | FY26 | YoY |
|---|---|---|---|---|
| Revenue | 2,511 | 3,415 | **4,803** | +41% |
| Operating profit | 399 | 491 | **916** | +87% |
| OPM | 16% | 14% | **19%** | |
| Interest | 155 | 155 | 160 | |
| Depreciation | 138 | 156 | 162 | |
| PAT | 80 | 139 | **469** | +237% |
| CFO / FCF | 152 / 81 | 290 / 184 | **667 / 384** | |

- FY26 module sales were 3,342 MW (+76%), against production of 3,220 MW [K: primer citing the Q4 FY26 release; not re-verified].
- Quarterly OPM peaked at 21% in Q1–Q2 FY26 and then slid: 19% in Q3, 16% in Q4, **8% in Q1 FY27** [V].

### 4.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 not yet out [V deck + transcript + screener]

| Metric | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY |
|---|---|---|---|---|
| Sales volume (MW) | 764 | 999 | **1,006** | +32% |
| Revenue | 1,134 | 1,453 | **1,563** | +38% |
| Gross margin | 31% | 28% | **19%** | −12 pts |
| EBITDA / margin | 242 / 21% | 235 / 16% | **126 / 8.1%** | **−48%** |
| Depreciation | 34 | 57 | 64 | |
| Finance cost | 32 | 57 | 49 | |
| PAT | 133 | 110 | **20** | **−85%** |
| Blended realisation | | ₹13.9/Wp [E] | **₹15.02/Wp** (+8% QoQ, mix-driven) | |

- **CFO Ranjan Jindal: "the entire movement sits in a single line, cost of goods sold."** The drivers were:
  - War-related aluminium and copper inflation, which hits frames, ribbon and interconnects.
  - Chinese cell prices that spiked in Q4 and flowed through inventory.
  - Ramp-up costs on the new Gangaikondan lines.
  - Escalation clauses cover 88% of the order book, but only for cells, and an oversupplied market limited pass-through [V].
- **FY27 guidance (given on the 8-May-26 call) is under review**: "we will revisit that outlook at our H1 results." Management declined to say how much of the 8 GW book is executable in FY27. FY27 volume capacity is "9–9.5 GW effective" [V].
- DCR modules: only **76 MW** in Q1 (on bought-in domestic cells), but more than all of last year. DCR carries a ~₹0.50/Wp higher realisation [V].

### 4.4 Native KPIs (solar) [V unless tagged]

| KPI | Value | Source |
|---|---|---|
| Module capacity | **15.5 GW nameplate** (incl. **Gangaikondan 6 GW, first module out Jun-2026**); effective 9–9.5 GW in FY27 | Q1 deck/call |
| Cell capacity | **0 today**. **9 GW TOPCon at Gangaikondan, first cell targeted Q4 FY27 (Jan–Mar 2027)**; 40–50% utilisation in the first full year (FY28) | Q1 call |
| Wafer/ingot | **9 GW**, "first wafer out" FY29; groundbreaking "shortly" | Q1 deck/call |
| BESS (VSL PowerHive) | Master plan of 15 GWh integrated LFP cell + BESS assembly; **Phase 1 7.5 GWh LFP cell plant**, technology partner finalised (Gen-2 large-format cells); FY30 target | Q1 call/deck |
| Order book | **~7.9 GW (30-Jun-26)**: large accounts 7.1 GW (incl. export orders) + mid-market 0.8 GW; FY26-end was 8.2 GW (primer) | Q1 deck |
| New orders | 400 MW N-type TOPCon G12R from a "leading EPC company" in Maharashtra, supplies from Oct-26 (28-Sep-26) | BSE [V] |
| Channel | Distribution = **16.5% of revenue** (revenue +45.8% YoY); 119 distributors (+25%), 757 dealers (+100%); mid-market revenue +212% | Q1 deck |
| Q1 capex | ~₹500 cr (80% module, 20% cell); sanctioned capex loans not yet drawn | Q1 call |
| US/exports | US exports have "thinned to almost nothing" since the US tariffs (primer framing). The Q1 call mentions only a new "dedicated international team"; **no US plant is discussed in the Q1 deck or call** | Q1 call [V]; primer |
| ALMM-II | Mandate effective 1-Jun-26; MNRE OM of **18-Jul-26** gave relief/deferment (management: "ALMM has been postponed to December" for the exempt segments) | Q1 call |

### 4.5 Balance sheet (Mar-26) [V]

| Item | Screener |
|---|---|
| Borrowings | 617 (ST 100 + **leases 517**; LT nil) |
| Cash equivalents | 992 |
| Investments | 742 |
| Net cash | **≈ +1,117** [E], or +1,634 excluding leases |
| Net worth | 3,173 |
| Working capital | Debtor days 92 (FY25 131), payable days 168, CCC 13 |

- Management says net debt/equity "is almost negligible" (Jun-26) [V]. IPO cash is funding the Gangaikondan programme, so expect net cash to turn to net debt during FY27 as capex continues at ~₹500 cr a quarter and the sanctioned loans are drawn [E].

### 4.6 Ownership (screener, Jun-2026 latest) [V]

| Holder | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|
| Promoters (Chaudhary family) | 63.12% | 63.01% | 63.01% | **63.01%** |
| FIIs | 2.08% | 1.82% | 2.94% | 3.37% |
| DIIs | 6.20% | 4.71% | 4.80% | **4.04%** |
| Public | 28.59% | 30.45% | 29.25% | 29.60% |
| Shareholders | 3.06 lakh | 2.87 lakh | 2.85 lakh | 3.04 lakh |

- DIIs exited through the lock-in expiries (anchor 30/90 days ≈ Sep/Nov-2025; 6-month pre-IPO ≈ Feb-2026) [K/E]. The 18-month promoter lock-in ends ≈**Feb-2027** [K/E]. The primer flags that part of the promoter holding was pledged; this was not re-verified this session.
- **Management (Q1 deck):** **Gyanesh Chaudhary, Chairman & MD**; Sameer Nagpal, CEO & WTD; K.K. Maskara, COO & WTD; Ranjan Jindal, CFO. **Rony Banerjee (EVP Sales & BD) resigned 28-Sep-26; Nimish Jain appointed Chief Business Officer** [V].

### 4.6b Concentration, cost structure and policy notes [V unless tagged]
- **Customer mix:** the 7.9 GW book is "large accounts" (utilities, IPPs, large C&I, incl. exports) at 7.1 GW (90%). CEO Nagpal: these customers "still constitute a large share of our order book". Mid-market is 0.8 GW, and distribution sits outside the book at 16.5% of revenue. Q1 revenue growth by layer: large accounts +21%, mid-market +212%, distribution +46% [V deck].
- **Cost basket (CFO):**
  - Aluminium/copper items (frames, bus ribbon, interconnect) are **~35% of the balance of raw materials** (non-cell BOM).
  - EVA encapsulant is **~12%**, and it moved with crude.
  - Imported Chinese cells spiked in Q4 FY26 and flowed through Q1 inventory.
  - Escalation clauses cover cells only, so the metals and EVA spike was absorbed [V].
- **Policy read-across:** ALMM-II took effect on 1-Jun-26, and MNRE's 18-Jul-26 OM relieved non-DCR C&I/rooftop until Dec-26. Vikram's FY27 revenue mix is "skewed towards the NDCR" (Rinal Shah). The **Jan-2027 cliff** is therefore a bigger risk for Vikram than for the cell-owning peers [V].
- **BESS (VSL PowerHive):**
  - 7.5 GWh BESS assembly plant in Chennai: equipment delivery Nov-26, installation Jan-27, **COD Mar-2027**.
  - 7.5 GWh LFP cell plant: land short-listed in two states, Gen-2 large-format cells, **COD Q4 FY29**.
  - First 20 MWh utility BESS order executed [V].
- **Valuation context:** at ~5× EV/EBITDA and 1.6× book, Vikram trades at roughly half of Emmvee's EV/EBITDA and a third of Saatvik's. The market is treating it as a stranded module-only capacity owner until the Gangaikondan cells run [E].

### 4.7 Story bullets
1. **The weakest print in the solar group:** an 8% Q1 EBITDA margin against 35% at Emmvee and ~29% at Premier. That is the cost of being a module-only maker in an ALMM-II world with no own cells until Q4 FY27 [V].
2. **Deep-value optics:** 1.6× book, ~5× EV/EBITDA and net cash. The market is pricing a non-DCR module glut and execution risk on a 9 GW cell + 9 GW wafer greenfield [E].
3. **Catalysts:** H1 results and the restated FY27 guidance; first cell in Q4 FY27; ALMM-II exemption expiry Dec-2026 (non-DCR C&I demand falls away); DCR share in mix [V].
4. **People risk:** the head of sales and BD left in Sep-26 while the go-to-market is being "rebuilt" [V].

---

## 5. Saatvik Green Energy (NSE: SAATVIKGL · BSE: 544526)

**Archetype:** Solar, module maker (non-integrated), building cells. Module plant at Ambala, Haryana (4.8 GW) with an in-house EPE encapsulant line (2 GW). Side businesses: EPC, solar pumps, inverters, Melcon transformers, and an IPP stake (49% of Intelligent Hydel Solutions, per the primer).
**Listing status:**
- IPO Sep-2025: ₹900 cr (₹700 cr fresh + ₹200 cr OFS) at ₹465 [K: primer/prospectus; consistent with screener equity +₹1,021 cr in FY26 and financing inflow ₹946 cr [V]].
- No merger or demerger. On 28-Sep-26 a subsidiary was converted from private to public limited (BSE) [V, title only].
- The trading window has been closed since 25-Sep-26, and no Q2 date has been announced [V].
**Documents fetched:** Q1 FY27 investor presentation (14-Aug-26) [V]; Q1 FY27 call transcript (14-Aug-26, filed 18-Aug) [V]; MSEDCL solar-pump order (BSE, 10-Oct-26) [V].

### 5.1 Market data (screener consolidated, 13-Oct-2026 close, fetched 18:38 UTC) [V]

| Item | Value |
|---|---|
| Price | ₹399 (52-wk high/low ₹580 / ₹328): **−14% vs ₹465 IPO price**; 1-yr −24% |
| Market cap | **₹5,070 cr** |
| P/E (TTM) | **20.4×** (TTM PAT ₹246 cr, falling) |
| Book value / P/B | ₹107 / **3.7×** [E] |
| ROCE / ROE (FY26) | 33.0% / 42.3% |
| EV/EBITDA (TTM) | ≈ **14.8×** [E]: (5,070 + 857) ÷ 401; on FY26 OP (543) ≈ 10.9× |

### 5.2 FY26 (Apr-25–Mar-26), consolidated (screener [V]; Q1 deck P&L [V])

| Metric | FY24 | FY25 | FY26 | YoY |
|---|---|---|---|---|
| Revenue | 1,088 | 2,158 | **4,548** | +111% |
| Operating profit (screener) | 148 | 329 | **543** | +65% |
| OPM (screener) | 14% | 15% | **12%** | |
| Company EBITDA (deck, **incl. other income**) | | | 581 (12.8%) | |
| Interest | 14 | 46 | 73 | |
| PAT | 100 | 217 | **357** | +65% |
| CFO / FCF | 44 / −17 | 43 / −144 | **−27 / −628** | |

- **Margins fell through FY26.** Quarterly OPM went 19% (Q1), 14% (Q2), 12% (Q3), **6.7% (Q4, on record ₹1,608 cr revenue)** [V].
- FY26 production was ~3,162 MW [K: primer]. In Q4 FY26 the company produced 935 MW and sold 1,050 MW [V call].
- Basis note: **company "EBITDA" includes other income**. In Q1 FY27 it was ₹42.5 cr (8.3%), against screener OP of ₹33.8 cr (6.6%) [V].

### 5.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 not yet out [V deck + transcript + screener]

| Metric | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY |
|---|---|---|---|---|
| Production (MW) | 685 | 935 | **408** | −40% |
| Sales (MW) | 579 | 1,050 | **334** | −42% |
| Revenue | 916 | 1,608 | **511** | **−44%** |
| EBITDA, company incl. OI | 178 (19.4%) | 117 (7.25%) | **42.5 (8.33%)** | −76% |
| Operating profit, screener / OPM | 177 / 19.3% | 108 / 6.7% | **34 / 6.6%** | |
| Finance cost | 19 | 16 | 22 | |
| PAT | 117 | 60 | **5.4** (1.05% margin) | **−95%** |

- **Management's explanation (CMD Neelesh Garg's team):**
  - Customers "adopted a wait-and-watch approach" over ALMM-I vs ALMM-II.
  - Commodity, logistics and FX costs rose; the war in Iran was cited.
  - Saatvik deliberately chose not to execute orders "where the prevailing commercial economics were not attractive".
  - There were no in-house cells to cushion margins [V].
- **No FY27 numeric guidance.** Management said cell production "by Q3" would "immediately give a higher EBITDA in our second half" [V].

### 5.4 Native KPIs (solar) [V unless tagged]

| KPI | Value | Source |
|---|---|---|
| Module capacity | **4.8 GW operational** (Ambala) + **4 GW Odisha Phase I** (tools installed; ramp from end-Aug-2026) → **8.8 GW in FY27** | Q1 deck |
| Cell capacity | **0 today**. Odisha (Gopalpur) Phase I **2.4 GW**: tool move-in done, **ALMM-II inspection planned Sep-2026**, production hoped for "by Q3 FY27" (earlier plan: Q4). **Phase II +3.6 GW** (27 acres) from end-Q2 FY27, completion FY28 → **6 GW** | Q1 deck/call |
| Wafer/ingot | 6 GW (Phase III) planned for FY29, aligned with ALMM-III (expected 1-Jun-2028 per deck) | Q1 deck |
| Encapsulant | 2 GW live → 5 GW | Q1 deck/call |
| Capex | Phase I (2.4 GW cell + 4 GW module) ~₹1,850 cr; Phase II ~₹1,600–1,700 cr; **total ~₹3,500 cr**, of which ~₹1,000 cr spent by Aug-26 | Q1 call |
| Order book | **6.35 GW ≈ ₹8,200 cr** (≈132% of operational module capacity). **~30% DCR**; **~70% utility / 30% C&I and open access**. Q1 additions 0.79 GW vs executions 0.33 GW | Q1 deck/call |
| Recent orders | ₹171 cr TOPCon glass-glass, utility IPP (26-May-26); ₹138 cr domestic (22-Jul-26); ₹400 cr via subsidiary (11-Aug-26, execution by Mar-27); **MSEDCL ₹100 cr for 5,000 off-grid solar pumps (PM-KUSUM B, 10-Oct-26)** | Q1 deck; BSE [V] |
| India market view | ~55–57 GW DC installed last year; FY27 "around the same" because of the ALMM-I to ALMM-II transition and the cell shortage; ALMM-II full enforcement "postponed to 1 January" 2027 | Q1 call |
| New products | B2C: SuryaConnect solar kit, UDAY Plus hybrid inverter; exports being pursued | Q1 call |

### 5.5 Balance sheet [V]

| Item | Mar-26 (screener) | Jun-26 (company) |
|---|---|---|
| Borrowings | **939** (LT 211 + ST 670 + leases 58) | **≈₹1,250 cr** (mostly Odisha project debt); D/E 0.99× |
| Cash | 82 | — |
| Net debt | **≈ 857** [E] | ≈1,150–1,200 [E] |
| Expected peak net debt | — | **₹2,200–2,400 cr** (management) |
| Net worth | 1,361 | |
| Working capital | Inventory days 72, debtor days 56, CCC 69; "other asset items" ₹667 cr (likely capital advances/GST) | |

### 5.6 Ownership (screener, Jun-2026 latest) [V]

| Holder | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|
| Promoters (Garg family: Neelesh Garg CMD, Manik Garg MD) | 75.99% | 75.99% | 75.99% | **75.99%** |
| FIIs | 0.46% | 0.25% | 0.03% | 0.19% |
| DIIs | 8.05% | 9.35% | 10.52% | **10.97%** |
| Public | 15.51% | 14.42% | 13.46% | 12.84% |
| Shareholders | 1.72 lakh | 0.83 lakh | 0.78 lakh | 0.69 lakh |

- The promoter holds **75.99%**, just above the 75% MPS cap, so a ~1-pt sell-down is needed by ≈Sep-2028 [K: SCRR 19A]. The 18-month promoter lock-in on the excess over 20% expires ≈**Mar-2027** [K/E].
- Unusually, DIIs have **added** stake after the lock-ins expired, from 8% to 11% [V]. Retail shareholder count has fallen by 60% since listing [V].

### 5.6b Concentration, contract terms and diversification [V unless tagged]
- **Order-book economics:**
  - The book is ~70% utility (IPPs) and ~30% C&I/open access; retail sits outside it.
  - Pricing terms: **C&I orders are almost all fixed price**. On utility orders, only **30–40% are variable** (pass-through) and the rest are fixed.
  - This explains why the Q1 cost spike hit margins, and why management chose to defer unprofitable executions [V].
- **Policy timing:** C&I customers "postponed their purchases" over ALMM-I vs ALMM-II tariff dates (30-Jun / 1-Jul cut-offs). Management expects full ALMM-II enforcement from **1-Jan-2027**, which suits a cell maker that is live by Q3 FY27 [V].
- **Non-module business:** EPC, pumps, inverters, Melcon transformers (acquired mid-Q1 FY27), B2C kits and storage were 4–5% of revenue. The target is **7–10% in FY27 and 15% later**. Management sizes the transformer market at ₹30k cr, growing to ₹55k cr by 2031, with a manufacturing expansion "to be announced" [V].
- **Customer concentration:** not disclosed on the call. It is utility-heavy with large-ticket IPP orders (e.g. ₹171 cr, ₹400 cr), so lumpiness is high [E].
- **IPO proceeds:** about ₹700 cr fresh capital, earmarked largely for the Odisha expansion (primer/prospectus [K]). Capex spent to Aug-26 is ~₹1,000 cr, so the balance is debt-funded, consistent with debt rising from ₹939 cr to ₹1,250 cr [V/E].

### 5.7 Story bullets
1. **Q1 FY27 was the worst quarter in the group:** revenue −44% and PAT −95%. A module-only maker with a 70% utility book could not pass through cost inflation during the ALMM transition [V].
2. **Everything rides on the Odisha cell line.** ALMM-II inspection was due Sep-26 and production by Q3 FY27. If 2.4 GW of cells feeds 8.8 GW of modules, ~27% of module output could become DCR-integrated [E].
3. **Leverage is rising** to ₹2.2–2.4k cr peak net debt against ₹400–550 cr EBITDA. That is ~4–5× at the trough, which makes this the most balance-sheet-stretched name in the batch [E].
4. **Diversification is small but growing:** solar pumps (KUSUM), B2C kits, transformers and IPP. These are not yet material.

---

## 6. Websol Energy System (NSE: WEBELSOLAR · BSE: 517498)

**Archetype:** Solar, **cell-first** maker. Mono-PERC cells at Falta SEZ, West Bengal: 1.2 GW of cells against 550 MW of modules, so it is a merchant seller of DCR cells. A TOPCon upgrade is under way and a 4 GW integrated greenfield plant is planned.
**Listing status:** long-listed on NSE and BSE. No merger or demerger. The trading window has been closed since 28-Sep-26, and no Q2 date had been filed at fetch time [V].
**Documents fetched:** Q1 FY27 earnings presentation (11-Aug-26) [V]; Q1 FY27 call transcript (11-Aug-26) [V]; press release on the West Bengal land allotment (23-Sep-26) [V]; AGM/director-change filing (24-Sep-26) [V, title].

### 6.1 Market data (screener, 13-Oct-2026 close, fetched 18:39 UTC) [V]

| Item | Value |
|---|---|
| Price | ₹65.8 (52-wk high/low ₹138 / ₹50.4); 1-yr −45% |
| Market cap | **₹2,856 cr** |
| P/E (TTM) | **9.1×** (TTM PAT ₹314 cr) |
| Book value / P/B | ₹14.5 / **4.5×** [E] |
| ROCE / ROE (FY26) | 63.2% / 66.9% (company: ROCE 65.7%, ROE 66.7%) |
| Dividend | ₹0.25/sh (yield 0.38%) |
| EV/EBITDA (TTM) | ≈ **6.3×** [E]: (2,856 − 21) ÷ 451 |

### 6.2 FY26 (Apr-25–Mar-26) (company deck [V]; screener [V])

| Metric | FY24 | FY25 | FY26 | YoY |
|---|---|---|---|---|
| Revenue, company | 26 (screener) | 575 | **1,049** | +82% |
| Revenue, screener annual | 26 | 521 | 974 | (see note) |
| EBITDA, company (ex-OI) | (1) | 253 (43.9%) | **429 (40.8%)** | +70% |
| Gross margin (company: rev − RM − Δinv) | | | ≈60.7% [E] | |
| Finance cost | 5 | 19 | 16 | |
| Depreciation | 36 | 41 | 62 | |
| PAT | (121) | 155 | **303** | +96% |
| CFO / FCF (screener) | 35 / −189 | 167 / 124 | **255 / 75** | |

- **Screener revenue gap.** Screener's annual FY26 sales line is ₹974 cr, but its own four quarters sum to ₹1,049 cr (219 + 168 + 261 + 401), which matches the company. I use the company figure. The difference (≈₹75 cr) is probably other operating revenue classified differently [E].
- **Q4 FY26 PAT of ₹124–125 cr was tax-flattered.** An appellate order allowed brought-forward losses to be set off, cutting tax to ~₹0 for the quarter (deck footnote) [V].
- FY24 was a near-idle year (₹26 cr revenue, −₹121 cr PAT) while the plant was rebuilt. FY25 was the restart [V].

### 6.3 Q1 FY27 (Jun-26 quarter) — latest; Q2 FY27 not yet out [V deck + transcript + screener]

| Metric | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY |
|---|---|---|---|---|
| Revenue | 219 | 401 | **373** | +70% |
| Gross margin | — | — | **51.2%** | |
| EBITDA (ex-OI) / margin | 103 / 47.3% | 146 / 36.4% | **126 / 33.7%** | +21% |
| PAT | 67 | 125 | **78** (20.6%) | +16% |
| Cell production (MW) | 126 | 258 | **259** [chart] | |
| Module production (MW) | 50 | 95 | **103** [chart] | |
| Cell / module utilisation | ~83% / ~75% [chart] | 92% | **~90%+ / ~74–81%** [chart] | |

- **Margin compression is about mix.** Management (Sanjana Khaitan, ED): "module margins are lower than cell margins". Module output doubled YoY. Prices also softened during the quarter while BOM costs rose (West Asia, silver paste lag) [V].
- **Realisation (CFO Amrit Daga):** modules **~₹20.50/Wp**. The cell figure was transcribed as "INR 0.125/Wp", which is evidently **US$0.125/Wp ≈ ₹11/Wp** [E: transcript error]. Prices rose in July–August on ALMM-II, eased after the deferment to December, and "are still higher than" Q1 [V].
- **Policy exposure:** "we are completely dealing in the DCR market" (MD), supplying **PM Surya Ghar and PM-KUSUM**. The legacy SEZ export orientation is no longer the business model [V].

### 6.4 Native KPIs (solar) [V unless tagged]

| KPI | Value | Source |
|---|---|---|
| Cell capacity | **1.2 GW** mono-PERC (two 600 MW lines; line 2 commissioned in under 12 months); average efficiency 23.3%; 90%+ utilisation. One of "14 ALMM-approved cell manufacturers" | Q1 deck |
| Module capacity | **550 MW** | Q1 deck |
| TOPCon upgrade | 600 MW PERC line → 750 MW TOPCon (+150 MW, ~25% efficiency), **₹270 cr**, civil works Mar–Sep 2026, equipment Jun-26–Feb-27, **COD Mar-2027** → 1.35 GW cells | Q1 deck/call |
| Greenfield | **4 GW cell + 4 GW module** integrated TOPCon in two 2 GW phases. **54.2 acres allotted by the West Bengal government at Falta Industrial Park on 23-Sep-2026** (moved from the earlier **Andhra Pradesh** site plan). Capex/funding "unchanged" but not quantified on the call. Deck shows cell capacity reaching **5.35 GW by FY28**, ~88% TOPCon | BSE PR [V]; Q1 deck/call |
| Ingot/wafer | Planned with **Linton Crystal** (equipment/technology partner) for ALMM-III compliance; no timeline or capex given | Q1 deck |
| Order book | **₹1,278 cr (30-Jun-26)**, up from ₹1,161 cr (Mar-26): cells ₹665 cr (52%), modules ₹613 cr (48%). Management says it does not target a bigger book because DCR enquiries convert quickly | Q1 deck/call |
| Capital structure | IREDA term loan **₹110 cr repaid early on 4-Aug-2026** from accruals → **promoter pledge falls from 80% to 16% of promoter holding** | Q1 call |

### 6.5 Balance sheet (Mar-26) [V]

| Item | Screener | Company |
|---|---|---|
| Borrowings | 131 (LT 85 + ST 33 + leases 13) | D/E 0.19× |
| Cash + investments | 100 + 52 | |
| Net cash / (debt) | **≈ +21** [E] | **Net cash ₹34 cr** ("net debt ₹(34) cr") |
| Post-Aug-26 | ≈ ₹20 cr gross debt after the IREDA prepayment [E] | |
| Working capital | Inventory days 142, debtor days 35, CCC 113 (FY25 8) | |

### 6.6 Ownership (screener — **Sep-2026 pattern available**) [V]

| Holder | Sep-25 | Mar-26 | Jun-26 | **Sep-26** |
|---|---|---|---|---|
| Promoters (Sohan Lal Agarwal family) | 27.71% | 29.72% | 29.72% | **29.72%** |
| FIIs | 5.47% | 4.12% | 3.74% | 4.17% |
| DIIs | 0.26% | 0.32% | 0.43% | 0.21% |
| Public | 66.57% | 65.85% | 66.12% | 65.91% |
| Shareholders | 1.27 lakh | 1.39 lakh | 1.65 lakh | **1.73 lakh** |

- The promoter stake rose 2 pts in the Mar-26 quarter, probably through warrant or preferential conversion; I did not verify the mechanism this session. This is the lowest promoter holding in the batch, with retail owning about two-thirds of the register.
- **Management:** Sohan Lal Agarwal (MD, founder); **Sanjana Khaitan (Executive Director)**; Amrit Daga (CFO); Vasanthi Sreeram (CTO). The Sep-26 AGM approved Sanjay Kumar and Dinesh Agarwal as directors and the retirement of Rajeewa R Arya [V BSE titles/deck].
- Price volatility is extreme (52-week range ₹50–138), and an analyst on the call raised share-price "manipulation" concerns [V].

### 6.6b Concentration and risk notes [V unless tagged]
- **End-market concentration:** effectively 100% DCR, through PM Surya Ghar (rooftop) and PM-KUSUM (agri) installers and module makers that buy DCR cells. This makes Websol the purest policy play in the batch: MNRE DCR rules, the scheme budgets (KUSUM allocation of ~₹22,000 cr for FY27 per deck) and ALMM-II enforcement drive the whole P&L [V].
- **Technology risk:** 100% mono-PERC today, at 23.3% efficiency. The industry is moving to TOPCon at ~25%, and management's own deck projects TOPCon at ~88% of Websol's cell capacity by FY28. A PERC price discount could widen before Mar-27 [V/E].
- **Input risk:** imported wafers ("more or less similar" prices) and imported silver paste (with a lag). The war in West Asia has raised BOM costs [V].
- **Customer concentration:** not disclosed. The order book is short-cycle: ₹1,278 cr ≈ 3.4 quarters of Q1 FY27 revenue [E].
- **Governance flags:** the promoter stake is low (29.72%) with a history of pledges (now 16% of holding). Phase-3 site and disclosure delays drew investor complaints on the Q1 call [V].

### 6.7 Story bullets
1. **The only pure DCR-cell merchant in the batch.** Websol earns 34–47% EBITDA margins because ALMM-II and DCR scarcity price cells at a premium. It is the most exposed name if domestic cell capacity floods in: Waaree +10 GW, Premier 10.6 GW, Emmvee/Saatvik/Vikram ramps in FY27–28 [V/E].
2. **Cheapest on earnings, at 9× P/E and ~6× EV/EBITDA.** The market discounts PERC obsolescence (TOPCon only from Mar-27) and the execution risk of a 4 GW greenfield run by a small team [E].
3. **Balance sheet is now clean:** net cash after the IREDA prepayment, and the pledge is down to 16% of promoter shares. Funding for 4 GW (likely ₹2,000+ cr [E]) has not been disclosed, so equity dilution is a real possibility [V/E].
4. **The land is in hand (23-Sep-26).** Watch the Q2 call for the capex number, funding mix and Phase-1 COD [V].

---

# PRIMER ISSUES (batch 2)

**How I checked.** For each primer I read the cover strip, the "What's new" box and the first sections (snapshot, company/owners). I then grepped the full text for m-cap, P/E, capacity, order book, revenue, promoter %, MD/CEO, debt and cells. "Verified figure" entries come from pages fetched this session (tags as above). All m-caps are at the 13-Oct-2026 close.

**Common pattern.**
- Every primer is on FY26 numbers.
- **All six miss Q1 FY27.** Three were refreshed *after* their Q1 release: Vikram (refreshed 21-Aug, results 6-Aug), Saatvik (28-Aug vs 14-Aug) and Websol (2-Sep vs 11-Aug).
- Fujiyama (31-Jul) still carries a **FY25** headline.
- All m-caps are stale.

## 1. primers/emmvee-photovoltaic.html (last refreshed 13-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap and P/E | "~₹23,100 Cr (Jul '26)"; "~21× trailing" | **₹20,680 cr**; P/E **16.2×**; P/B 5.6× | screener [V] |
| 2 | Q1 FY27 missing | Nothing after FY26 | Q1 FY27 revenue ₹1,556 cr (+51%), EBITDA ₹548 cr (**35%**), PAT ₹380 cr (+103%); order book **9.9 GW** (inflow 1,484 MW); cell utilisation 83%, module 45% | Q1 FY27 deck/call [V] |
| 3 | Capacity target timing wrong | "16.3 GW modules and 8.9 GW cells **by FY27**" | Module line by **Dec-2026** and cell line by **Mar-2027**, so 16.3 GW / 8.9 GW "by **early FY28**" | Q1 deck [V] |
| 4 | Expansion described wrongly | "New cell line (~1.4 GW+)" | **Unit 7 = 6 GW cell + 6 GW module** integrated TOPCon; ~₹5,500 cr project (hard cost ₹4,600 cr), **₹3,300 cr debt tied up at <8%** | Q1 deck/call [V] |
| 5 | Ingot-wafer capex and timing | "~₹6,300 Cr", "first facility ~FY29" | **₹5,000–5,500 cr** (₹600–650 cr/GW); 5 GW FY29 + 4 GW FY30, "subject to ALMM-III clarity"; mostly internal accruals | Q1 deck [V] |
| 6 | FY27 guidance missing | — | **~₹2,400 cr EBITDA target for FY27**; EBITDA/W ~₹2.5 module-only, ₹6.0–6.5 with own cell | Q1 call [V] |
| 7 | CEO not named | Only "D.V. Manjunatha (Chairman & MD)" | **Suhas Donthi Manjunatha, Whole-time Director, President & CEO**; CFO Pawan Kumar Jain | Q1 deck [V] |
| 8 | ROCE | "ROCE ~38% (FY26)" | Screener **44.6%** (ROE 50.7%, consistent with the primer's ~51%) | screener [V] |
| 9 | Promoter stake imprecise; MPS obligation missing | "roughly 80%" | **80.03%** (Jun-26), above the 75% MPS cap, so a promoter sell-down is required by ~Nov-2028 | screener [V]; SCRR [K] |
| 10 | Recent events missing | — | Q2 FY27 board meeting **14-Oct-26**; GST show-cause notice of ₹38.4 cr on subsidiary Emmvee Energy (30-Sep-26); Karnataka HC order on the prospectus-disclosed criminal case (1-Oct-26) | BSE [V] |
| 11 | Net-cash framing | "net debt-to-equity ~−0.06×" | Broadly right for Mar-26: screener net cash ≈ +₹51 cr, company ≈ +₹234 cr ex-leases (ND/E ≈ −0.01 to −0.06×). It will reverse as the ₹3,300 cr Unit-7 debt is drawn | screener/deck [V/E] |

FY26 figures (revenue ₹5,049 cr, EBITDA ₹1,734 cr / 34%, PAT ₹1,082 cr, order book 9.4 GW, 10.3 GW / 2.94 GW capacity, IPO ₹2,900 cr at ₹217) are **correct** [V deck/screener].

## 2. primers/hbl-engineering.html (last refreshed 14-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹21,200 Cr (mid-2026)" | **₹19,696 cr**; P/E 24.6× (primer's ~25× is still right); P/B 8.9× | screener [V] |
| 2 | **Order book stale** | "Kavach order book of roughly ₹3,760 Cr" | Total order book **≈₹5,902 cr (Sep-2026)**, up from ₹2,999 cr (Dec-25); Kavach + TMS ≈ **₹4,440 cr (75%)** | CARE 9-Oct-26 [V] |
| 3 | **CLW order cancellation missing** | Treats CLW as a clean win-streak | CARE: the balance of the earlier CLW loco Kavach order "remained unexecuted and was subsequently **cancelled**" after loco unavailability. Time-bound loco contracts can lapse | CARE [V] |
| 4 | Q1 FY27 missing | — | Revenue ₹638 cr (+6%), OPM 23% (32% a year ago), PAT ₹109 cr (−24%). **Electronics PBIT margin 31%** (₹71 cr on ₹227 cr), down from 50% for FY26 and 14% in Q4 FY26. Defence & Aviation revenue −49% | Q1 results PDF [V] |
| 5 | "One of only three approved makers" | "one of only three original RDSO-approved Kavach makers" | Correct historically, but no longer exclusive. CG Power's G.G. Tronics now holds a ≈₹1,000 cr Kavach book; CARE says "limited number of vendors" | batch 1 CG call [V]; CARE [V] |
| 6 | Kavach rollout stats | "24,427 route-km", "4,154 locomotives" (early 2026) | As of **Jul-2026**: **>6,000 locos fitted**, ~7,300 in progress; trackside taken up on **>21,800 route-km** (definitions differ) | CARE [V] |
| 7 | Management's own Kavach outlook missing | Implies a multi-year runway | Chairman (AR FY26): Kavach was ~50% of FY26 sales and should be similar in FY27; "both sales and PBT **could decline from FY29 onwards**" as competition rises; margins vary by contract | AR FY26 [V] |
| 8 | Cash figure | "~₹528 Cr of cash" | Screener cash ₹552 cr + investments ₹402 cr; **CARE "cash and liquid investments" ₹570 cr**; term loan fully repaid (rating withdrawn) | screener/CARE [V] |
| 9 | Rating upgrade missing | — | **CARE upgraded to AA-/Stable** (from A+/Positive) on 9-Oct-26; ST A1+ | CARE [V] |
| 10 | EV, fuze and maritime timelines missing | — | E-truck: homologation Mar-27, **pilot sales Jul-2027** (≈9-month delay from the magnet-less motor redesign). Fuzes: MHA-approved grenade fuzes selling; Army and 155 mm approvals expected 2027. **Green Maritime Propulsion JV with Cochin Shipyard** (11-Jun-26) | AR FY26 [V] |
| 11 | Governance detail missing | — | CMD Dr A.J. Prasad FY26 remuneration ₹1.17 cr **plus ₹56.02 cr commission** | AR FY26 [V] |

FY26 figures (revenue ₹3,303 cr, PAT ₹814 cr, OPM ~34%, Electronics ₹1,626 cr, Industrial Batteries ₹1,416 cr, Defence ₹212 cr, ~₹26.5 cr torpedo-battery write-off, ₹67 cr borrowings, ~59% promoter) are **correct** [V screener/AR]. The ₹1,714 cr loco order (May-26) matches the ₹1,710 cr reported by Sahi [V-sec]. Its customer (CLW) was not confirmed from a primary filing this session.

## 3. primers/fujiyama-power-systems.html (last refreshed 31-Jul-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | **Headline figures a year stale** | Cover: "Revenue (FY25) ~₹1,541 Cr", "Net profit (FY25) ~₹156 Cr", "~16% EBITDA (FY25)" | **FY26: revenue ₹2,654 cr (+72%), EBITDA ₹493 cr (19%), PAT ₹304 cr (+95%)** (standalone; CRISIL ₹2,655 cr) | screener standalone [V]; CRISIL 14-Aug-26 [V] |
| 2 | Stale m-cap and P/E | "~₹11,700 Cr (mid-2026)", "~38× earnings" | **₹12,348 cr**; screener P/E 29.5×; on reported TTM EPS 41×, ≈31× ex-fire [E] | screener [V] |
| 3 | **Cell factory wrongly denied** | "…rather than owning a giant chip-like cell factory" | **1 GW solar-cell facility commissioned** (DCR cells for its PM-Surya-Ghar panels) + **1.2 GW announced** | Q1 deck/call [V] |
| 4 | **Bawal fire missing** | — | Fire at the Bawal (Rewari) lead-acid battery plant, **6-May-2026**; **₹143.6 cr exceptional loss** in Q1 FY27 (₹107 cr post-tax); insured, claim expected by end-CY26; CRISIL watch removed 14-Aug-26 | Q1 call/deck; CRISIL [V] |
| 5 | Q1 FY27 missing | — | Revenue **₹1,346 cr (+125%)**, EBITDA ₹255 cr (18.9%), PAT ₹58 cr reported / ≈₹165 cr ex-fire; **FY27 guidance raised to ~+70% revenue growth** | Q1 deck/call [V] |
| 6 | Distribution network stale | "~725 distributors, ~5,546 dealers and ~1,100 exclusive shoppes" | **10,100+ channel partners (Jun-26)**; target 15,000 by FY28 | Q1 deck/call [V] |
| 7 | Ratlam status stale | "inverter and battery lines are slated to follow in FY27" | **2 GW power-electronics line commissioned Aug-2026** (total 4,180 MW); 2 GWh Li-ion due Q2 FY27 | Q1 deck/call [V] |
| 8 | **Equity raise for MPS missing** | Mentions "eventual dilution" only | **Board meets 15-Oct-2026 to approve a QIP or other issue to achieve minimum public shareholding** | BSE 12-Oct-26 [V] |
| 9 | Promoter stake and names | "~86.8%"; names left unstated ("should be read directly from the offer document") | **86.63%** (Jun-26). Promoters **Pawan Kumar Garg (Chairman & Joint MD) and Yogesh Dua**; CFO Prashant Gupta | screener; Q1 deck; CRISIL [V] |
| 10 | Debt stale | "borrowings of ~₹688 Cr as of Sept-2025" | **₹520 cr (Mar-26)** incl. ₹58 cr leases; cash ₹161 cr; net debt ≈ ₹359 cr; gearing 0.38× | screener/CRISIL [V] |
| 11 | Backward-integration deals missing | — | Stakes in **Zayo Energy and Zayo Cables raised from 19% to 50%** (frames, ribbon, junction boxes, cables, EVA) | Q1 deck [V] |
| 12 | Segment mix no longer disclosed | "FY25 revenue mix (panels ~43%, inverters/UPS ~30%, batteries ~21%)" | Management no longer gives a mix. ~90% B2C; tubular batteries ~10% of revenue; inverter MW ≈ 2× panel MW | Q1 call [V] |

IPO facts (₹828 cr = ₹600 cr fresh + ₹228 cr OFS, ₹216–228 band, listed 20-Nov-2025) and the Ratlam 2 GW panel line (May-26, total ~3,568 MW) are **consistent** with filings [V deck; IPO terms K].

## 4. primers/vikram-solar.html (last refreshed 21-Aug-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap, price and P/E | "~₹6,190 Cr (Aug 2026)", "~₹173", "~17–18× trailing" | **₹5,208 cr**, **₹144** (52-week low ₹141; −57% vs ₹332 IPO), P/E **14.4×**, P/B 1.6× | screener [V] |
| 2 | **Q1 FY27 missing** (released 6-Aug, before the refresh) | — | Revenue ₹1,563 cr (+38%), **EBITDA ₹126 cr (8.1% vs 21%)**, **PAT ₹20 cr (−85%)**; gross margin 19% vs 31%; realisation ₹15.02/Wp; **FY27 outlook to be revisited at H1** | Q1 deck/call [V] |
| 3 | Module capacity stale | "~9.5 GW of module-assembly capacity" (cover/snapshot) | **15.5 GW nameplate**: Gangaikondan 6 GW module plant produced its first module Jun-2026; FY27 effective 9–9.5 GW | Q1 deck/call [V] |
| 4 | Cell timing wrong | "9 GW of cell manufacturing **by December 2026**" | **First cell targeted Q4 FY27 (Jan–Mar 2027)**; first-year (FY28) utilisation 40–50% | Q1 call [V] |
| 5 | Wafer plan wrong | "12 GW of wafer/ingot capacity by FY30" | **9 GW wafer-ingot**, first wafer FY29 (Gangaikondan, same fence) | Q1 deck/call [V] |
| 6 | MD title wrong; CEO missing | "Gyanesh Chaudhary… (Vice Chairman & Managing Director)" | **Gyanesh Chaudhary, Chairman & MD** (H.K. Chaudhary is Chairperson Emeritus); **Sameer Nagpal, CEO & WTD**; Ranjan Jindal, CFO | Q1 deck/transcript [V] |
| 7 | Order book | "8.2 GW (Mar 2026)" | **~7.9 GW (30-Jun-26)**: large accounts 7.1 GW + mid-market 0.8 GW. New 400 MW EPC order (28-Sep-26) | Q1 deck; BSE [V] |
| 8 | Leadership change missing | — | **Rony Banerjee (EVP Sales & BD) resigned 28-Sep-26; Nimish Jain named Chief Business Officer** | BSE 29-Sep-26 [V] |
| 9 | BESS detail stale | "15 GWh battery-storage (BESS)" | VSL PowerHive: **7.5 GWh BESS assembly in Chennai, COD Mar-2027**; 7.5 GWh LFP cell plant, COD Q4 FY29; first 20 MWh order executed | Q1 call [V] |
| 10 | ALMM-II relief missing | — | MNRE OM of 18-Jul-26 defers enforcement for non-DCR C&I/rooftop to Dec-2026; Vikram's FY27 mix is "skewed towards NDCR" | Q1 call [V] |

FY26 figures (revenue ₹4,802 cr, PAT ₹470 cr, 63% promoter, ₹2,079 cr IPO at ₹332) are **correct** (screener FY26 revenue ₹4,803 cr, PAT ₹469 cr; promoter 63.01%) [V].

## 5. primers/saatvik-green-energy.html (last refreshed 28-Aug-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap | "~₹5,360 Cr (mid-2026)" | **₹5,070 cr**; P/E 20.4× (primer's ~20× is still right); price ₹399 vs ₹465 IPO | screener [V] |
| 2 | **Q1 FY27 missing** (released 14-Aug, before the refresh) | — | Revenue **₹511 cr (−44%)**, sales 334 MW (−42%), EBITDA ₹42.5 cr (8.3%, incl. OI), **PAT ₹5.4 cr (−95%)** | Q1 deck/call [V] |
| 3 | Order book stale | "~5.9 GW (Mar 2026)" | **6.35 GW ≈ ₹8,200 cr**; ~30% DCR; ~70% utility / 30% C&I | Q1 call [V] |
| 4 | Debt stale; peak missing | "modest debt (~₹939 Cr)" | Debt **≈₹1,250 cr (Jun-26)**, D/E 0.99×; management sees **peak net debt ₹2,200–2,400 cr** | Q1 call [V] |
| 5 | Cell timing | "Cell capacity Odisha Phase I ~2.4" (no date) | **ALMM-II inspection planned Sep-2026; cell production hoped "by Q3 FY27"** (pulled forward from Q4). Odisha 4 GW module line ramp from end-Aug-26 | Q1 deck/call [V] |
| 6 | Capex not quantified | — | Phase I ~₹1,850 cr, Phase II ~₹1,600–1,700 cr (total ~₹3,500 cr); ~₹1,000 cr spent by Aug-26. Encapsulant 2 → 5 GW; ingot-wafer 6 GW FY29 | Q1 call/deck [V] |
| 7 | Promoter % imprecise; MPS | "roughly 76%" | **75.99%**, above the 75% MPS cap | screener [V] |
| 8 | New orders and businesses missing | Mentions Melcon only in passing | **MSEDCL ₹100 cr order for 5,000 solar pumps (10-Oct-26)**; ₹400 cr module orders (11-Aug); non-module revenue target 7–10% in FY27 | BSE [V]; Q1 call [V] |
| 9 | ALMM-II date | Implies full enforcement from Jun-2026 | Management: full enforcement **postponed to 1-Jan-2027**; deck: "ALMM-II implementation extended till December 2026" | Q1 call/deck [V] |

FY26 figures (revenue ₹4,548 cr, PAT ₹357 cr, 4.8–4.86 GW modules, IPO ₹900 cr at ₹465, Neelesh Garg CMD) are **correct** [V screener/deck].

## 6. primers/websol-energy.html (last refreshed 2-Sep-2026)

| # | Issue | Primer says | Verified figure | Source |
|---|---|---|---|---|
| 1 | Stale m-cap and P/E | "~₹3,230 Cr (mid-2026)", "~10× earnings" | **₹2,856 cr**, P/E **9.1×**, P/B 4.5× | screener [V] |
| 2 | **Q1 FY27 missing** (released 11-Aug, before the refresh) | — | Revenue ₹373 cr (+70%), EBITDA ₹126 cr (**33.7% vs 47.3%**, mix shift to modules), PAT ₹78 cr (+16%) | Q1 deck/call [V] |
| 3 | **4 GW greenfield missing entirely** | Only the ₹270 cr TOPCon upgrade to ~1.35 GW | **4 GW cell + 4 GW module** integrated TOPCon greenfield in two 2 GW phases. **54.2 acres allotted at Falta Industrial Park by the West Bengal government (23-Sep-26)**, moved from an Andhra Pradesh plan. Deck shows cells reaching 5.35 GW by FY28. Ingot-wafer planned with Linton Crystal | BSE PR [V]; Q1 deck/call [V] |
| 4 | **Net debt wrong/stale** | "net debt on the order of ₹130 Cr" | Company **net cash ₹34 cr (Mar-26)** (screener ≈ +₹21 cr). **IREDA loan ₹110 cr prepaid 4-Aug-2026** from accruals | Q1 deck/call [V] |
| 5 | Pledge missing | "Promoters hold a slim ~30%" (no pledge mention) | 29.72% (Sep-26); **promoter pledge falling from 80% to 16% of promoter holding** after the IREDA prepayment | screener; Q1 call [V] |
| 6 | Export orientation overstated | "SEZ status orients it toward exports" | Management: "**completely dealing in the DCR market**", supplying PM Surya Ghar and PM-KUSUM | Q1 call [V] |
| 7 | Order book stale | "~₹1,161 Cr order book" | **₹1,278 cr (Jun-26)**: cells ₹665 cr, modules ₹613 cr | Q1 deck [V] |
| 8 | Management not named | No MD or CEO named | **Sohan Lal Agarwal (MD)**, Sanjana Khaitan (ED), Amrit Daga (CFO), Vasanthi Sreeram (CTO) | Q1 deck [V] |
| 9 | Q4 FY26 PAT quality | Treats FY26 PAT ₹303 cr as clean | Q4 FY26 tax was ~₹0 after an appellate order allowed loss set-off, so FY26 PAT is flattered by ~₹30 cr [E] | Q1 deck footnote [V] |

FY26 figures (revenue ₹1,049 cr, EBITDA ₹429 cr / ~41%, PAT ₹303 cr, cells ~1.2 GW, modules ~550 MW, ₹270 cr TOPCon upgrade) are **correct** [V deck]. Screener's annual sales line (₹974 cr) under-states revenue; use the company figure.

---

**Unverified or memory-sourced items in this file** (all others are [V]):
- IPO issue sizes, prices and listing dates for Emmvee, Fujiyama, Vikram and Saatvik [K: primers/prospectus; each is consistent with screener equity movements].
- Lock-in expiry dates [K/E: SEBI ICDR rules].
- Emmvee and Fujiyama FY25 product mix [K: RHP via primer].
- HBL 2026 Kavach orders other than ₹1,710 cr (₹575 cr ICF, ₹800 cr BLW, ₹179.8 cr BLW, ₹83.8 cr PLW, ₹24/31.5 cr ICF): from search snippets only, unverified.
- The customer for HBL's ₹1,710 cr order (CLW per primer/Business Standard).
- Kavita Prasad Aluru's ED appointment; Vikram promoter pledge; Websol promoter-stake increase mechanism.
- FY26 module volumes for Vikram (3,342 MW) and Saatvik (~3,162 MW) [K: primers].
