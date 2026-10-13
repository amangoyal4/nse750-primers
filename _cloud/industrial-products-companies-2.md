# Industrial Products — Company Packs, Batch 2 (process, cryogenic and heat-transfer equipment)

Companies: INOX India (INOXINDIA), The Anup Engineering (ANUP), GMM Pfaudler (GMMPFAUDLR), Praj Industries (PRAJIND), KRN Heat Exchanger and Refrigeration (KRN).
Prepared 13 Oct 2026. Tags: **[V]** fetched this session; **[K]** from memory, source named; **[E]** estimate or derived by me (method stated).

**Sourcing conventions in this file**
- "Screener" means the screener.in consolidated company page, fetched by curl on 13 Oct 2026 and parsed with python: `https://www.screener.in/company/<NSE>/consolidated/`. All five have consolidated accounts. Balance-sheet "Other Assets" was split with screener's schedule API (`/api/company/<id>/schedules/?parent=Other+Assets&section=balance-sheet`). "Cash" below is screener's *Cash Equivalents* line, not "Other Assets". Borrowings were split the same way (`parent=Borrowings`). Material cost % comes from the expenses schedule (`parent=Expenses`).
- **EBITDA basis.** Screener "Operating Profit" (OP) is revenue minus expenses, before other income. Several companies here (INOX India, Praj) quote EBITDA *including* other income, or on "total income". I quote both and label which is which.
- **Gross margin basis.** Gross margin = 100 − screener "Material Cost %", where material cost includes change in inventory. It is a material-margin proxy, not a true gross margin, because it leaves out conversion labour, power and subcontracting. For project companies (Praj, Anup) it also moves with how much of the job is bought-out items versus made in-house.
- **Net debt** = screener borrowings (incl. lease liabilities) − screener cash equivalents − screener investments. This can miss bank deposits held in "other asset items", so the company's own net-cash figure is shown wherever I fetched it.
- **EV/EBITDA** [E] = (m-cap + net debt) ÷ TTM screener OP (Jul-25 to Jun-26).
- **CFO/EBITDA** [E] = screener cash from operations ÷ screener OP, computed by me. Screener's own "CFO/OP" row uses a different denominator and prints higher figures; I show it in brackets for reference only. 3-yr = FY24–FY26 summed.
- **NWC days** come from screener's ratios table (Debtor days, Inventory days, Days payable, Cash conversion cycle, Working capital days). Screener computes inventory and payable days on its own basis, so they are useful for trends, less so in absolute terms.
- **Fixed-asset turnover** [E] = revenue ÷ year-end net fixed assets (screener, excluding CWIP).
- **Q2 FY27 (Sep-26 quarter):** none of the five had reported as of 13 Oct 2026. All five closed their trading windows from 1 Oct 2026 (BSE filings dated 24–29 Sep 2026, listed on each screener page [V]). Screener shows Sep-26 shareholding only for KRN; for the other four the latest pattern is Jun-26.
- **Listing status:** all five are listed, with no merger or demerger pending (screener and BSE announcement lists [V]).

---

## 1. INOX India Ltd — NSE: INOXINDIA · BSE: 544046
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/INOXINDIA/consolidated/
- Q1 FY27 investor presentation, dated 3 Aug 2026 (BSE filing) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=09ffaefc-91f1-49d4-ae5c-6a63685fef4c.pdf
- Q1 FY27 earnings-call transcript, 4 Aug 2026 (BSE filing) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d5dacfe9-299d-4497-b4b9-c364dae67781.pdf
- Listing status: listed (IPO Dec 2023, an offer for sale). Brand name INOXCVA. It is a separate company from Inox Wind and PVR INOX.

**Archetype:** an export-led maker of engineered cryogenic products (tanks, trailers, systems) on long-dated order books. It is debt-free, earns very high returns, and carries a heavy inventory and work-in-progress load. Its end-markets are industrial gases, LNG, space, fusion science, semiconductor fabs and beverage kegs.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 1,133 | 1,306 | 1,587 (+21.5%) | Screener [V] |
| Total income (company headline, incl. other income) | — | — | 1,632 | Q1 FY27 deck p.3 [V] |
| EBITDA (screener OP) | 252 (22.2%) | 285 (21.8%) | 343 (21.6%) | Screener [V] |
| EBITDA (company, incl. other income) | — | — | 388 (23.8% of total income) | Deck p.3, p.19 [V] |
| Other income | 30 | 48 | 42 | Screener [V]. Mostly mutual-fund gains and forex |
| PAT | 196 | 226 | 258 (+14%) | Screener [V]; company ₹258 Cr (deck p.3) [V] |
| ROCE | 43% | 38% | 33% | Screener ratios [V]; company 31% (deck p.3) |
| ROE | — | — | 26.1% (current); company 23% | Screener [V]; deck [V] |
| Borrowings | 16 | 43 | 81 (ST 70 + lease 12) | Screener schedule [V] |
| Cash equivalents + investments | 9 + 247 | 21 + 267 | 23 + 297 | Screener schedule [V] |
| Net debt / (net cash) | (240) | (245) | **(239)** | [E] screener basis. Company: "net debt free", "total fund availability ₹331 Cr" at 30 Jun 2026 (call) [V] |
| CFO | 122 | 122 | 117 | Screener [V] |
| FCF (screener) | 32 | −3 | 11 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹2,084; m-cap **₹18,904 Cr**; 52-week high/low ₹2,340 / ₹1,031.
- P/E **73.5×** (TTM PAT ₹255 Cr).
- P/B **16.9×** (book ₹123/share).
- EV/EBITDA ≈ **54.6×** TTM OP of ₹342 Cr; EV ≈ ₹18,665 Cr [E].
- Dividend yield 0.10%.
- For reference, the company deck put m-cap at ₹17,775 Cr (₹1,960/share) on 30 Jun 2026 [V].

### Q1 FY27 (Jun-26 quarter)
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY | Source |
|---|---|---|---|---|
| Revenue (screener) | 371 | 340 | +9.1% | Screener [V] |
| Total income (company) | 382 | 352 | +8.3% | Deck p.19 [V] |
| EBITDA, screener OP | 76 (20.5%) | 76 (22.4%) | flat | Screener [V] |
| EBITDA, company | 90 (23.5% of total income) | 88 (25.1%) | +1.4% | Deck p.19, p.27 [V] |
| PAT | 58 (screener) / 61 (company) | 61 / 61 | −5% / flat | Screener vs deck. Screener's figure is likely after minority or other adjustments; the company headline is ₹61 Cr |
| Order inflow | 532 (record) | 415 | +28% | Deck p.22 [V] |
| Order backlog | 1,686 (record) | 1,457 | +16% | Deck p.24 [V] |

- **Why revenue missed:** management had targeted ₹410–415 Cr. About ₹32–35 Cr of equipment ready for dispatch was held back because of freight and shipping disruption around Iran and the Gulf. Container freight to Europe rose from $3–4k to $8–9k (call, 4 Aug 2026 [V]).
- **Q2 FY27 is not out.** The trading window closed on 28 Sep 2026. On the same day the company filed an "intimation of cancellation of scheduled investor/analyst meet" (BSE, via the screener list [V]).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | ₹1,686 Cr (Jun-26); ₹1,514 Cr (Mar-26); ₹1,457 Cr (Jun-25) | Deck p.24 [V] |
| Order-book cover | ≈1.04× TTM revenue (≈12.5 months) | [E] 1,686 ÷ 1,618 TTM. About 1.1× on FY27 guided revenue |
| Order inflow / book-to-bill | Q1 FY27 inflow ₹532 Cr → book-to-bill 1.43×. FY26 average ₹421 Cr/quarter (~₹1,685 Cr/year) → FY26 book-to-bill ≈1.06× | Deck p.22 [V]; [E] ratios on screener revenue |
| Export share | Revenue: ~56–62% exports quarterly (Q1 FY26 to Q1 FY27). Export backlog ₹1,140 Cr = 68% of the order book (63% in Mar-26) | Deck p.21, p.25 [V] |
| Gross margin (proxy) | FY24 55.6% · FY25 55.8% · FY26 55.4% · Q1 FY27 61.1% | [E] 100 − screener material cost %. The Q1 jump reflects a labour-heavy job mix; the gain was offset by higher other expenses (deck p.27 [V]) |
| NWC days (FY26) | Debtor 72 · Inventory 247 · Payable 80 · CCC 238 · WC days 83 (FY25: 70/312/87/295/61) | Screener ratios [V]. Inventory includes long-cycle work in progress. Working-capital days have risen from 44 (FY24) to 83 |
| CFO/EBITDA | FY26 34% · 3-yr (FY24–26) 41% | [E] 117/343; 361/880 (screener's own CFO/OP row: 58% FY26). Weak cash conversion for a debt-free name; inventory and contract assets absorb the cash |
| Fixed-asset turnover | 3.7× FY26 (3.6× FY25; 4.4× FY24) | [E] revenue ÷ net block |
| Client concentration | One US private aerospace/space company accounts for ~₹400 Cr of the order book (~24%). Total orders from this customer exceed ₹1,000 Cr across Q4 FY26 to Q2 FY27, for delivery by end-FY28. Q1 FY27 included a ₹217 Cr order from it | Call [V]; deck p.22 [V] |

### Segment / end-market mix
| Segment | FY25 | FY26 | Q1 FY27 | Share of Q1 FY27 inflow | Share of backlog (Jun-26) |
|---|---|---|---|---|---|
| Industrial gas (IG; includes space and semiconductor tanks) | 61% | 54% | 53% | 72% (₹385 Cr) | 55% |
| LNG | 17% | 28% | 22% | 16% (₹83 Cr) | 25% |
| Cryo Scientific (CSD: ITER, CERN, ISRO) | 17% | 14% | 20% (record ₹75 Cr) | 10% (₹54 Cr) | 18% |
| Others (beverage kegs) | 5% | 4% | 5% | 2% | 2% |

Source: deck p.20–24 [V].
- Semiconductor: orders from fabs at Dholera, Micron, Foxconn and Tata Assam, about ₹30 Cr so far (call [V]).
- New businesses: transformer tanks, and a freshwater-infrastructure tie-up with Wayout (deck p.4 [V]).

### Capacity and plants
- **Plants:** large-scale manufacturing at four locations in India, part-manufacturing and service in Brazil, and a stock-and-sale point in the Netherlands (deck p.3 [V]). The four Indian sites are believed to be Kalol (two units), Savli and the Kandla SEZ unit, all in Gujarat [K, per the Dec-2023 RHP; not re-checked].
- **Savli:** the new cryo and non-cryo tank shop and the keg shop are both "under full production" (call [V]).
- **Kegs:** capacity is 300,000 kegs a year, running at about 30% utilisation. The target is 50–60% by end-FY27. Brewery approvals include Heineken; enquiries from Asahi, AB InBev and Molson Coors (call [V]).
- **Kandla (new plant):** civil work is under way, pre-engineered building (PEB) structures and major machines are ordered, and operations should start in Dec-2026 or Jan-2027 (call [V]). It will carry the large aerospace tanks.

### Ownership (Jun-26; screener [V], matches deck p.29)
| Holder | Share |
|---|---|
| Promoters (Jain family / INOX group) | 74.86% (75.00% until Mar-26) |
| FIIs | 6.86% |
| DIIs | 7.67% |
| Public | 10.61% |

- About 1.47 lakh shareholders.
- No pledge reported.

### Capex and guidance
- **FY27 guidance (call, 4 Aug 2026 [V]):**
  - Revenue growth of 18–20%, reaffirmed despite Q1.
  - EBITDA margin of 21–24%.
  - Order intake of ₹450–500 Cr a quarter, likely to be revised "slightly" upward.
- **Capex:** the Kandla greenfield is funded internally (no amount given on the call).
- **US market:** a non-compete agreement keeps the company out of direct US manufacturing or sales until 2028.

### Story bullets
- **Record order book.** The order book of ₹1,686 Cr is a record, and two-thirds of it is exports. The space/aerospace customer has turned IG into the growth engine for now. LNG and CSD inflows were flat because large projects are waiting on approvals.
- **Margins are high but cash conversion is weak.** Margins are in the low 20s at the OP level, but CFO has been flat at about ₹120 Cr for three years while EBITDA rose 36%. Working-capital days doubled from 44 to 83.
- **Several options, none yet material.** Hydrogen, fusion (ITER, CERN), the semiconductor fab build-out (ISM), a third ISRO launch pad (RFQ due) and Andaman mini-LNG terminals (bids due). None is yet a large share of revenue.
- **The valuation is the main risk.** The stock trades at ~74× P/E and ~17× book, after doubling from its 52-week low of ₹1,031.

### Risks
- **Customer concentration** in one US space company, with first-of-a-kind, very large tanks due by FY28.
- **Freight and Gulf disruption** to the export dispatch schedule.
- **Input costs:** stainless steel and aluminium prices. Fixed-price contracts make pass-through only partial.
- **US entry** is barred until 2028.
- **Ramp-up costs:** low keg utilisation, and Savli and Kandla start-up costs weigh on margins.

---

## 2. The Anup Engineering Ltd — NSE: ANUP · BSE: 542460
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/ANUP/consolidated/. The consolidated series has no FY24 column, because Mabel was not yet a subsidiary.
- Screener standalone, used for FY24 [V] https://www.screener.in/company/ANUP/
- Q1 FY27 investor presentation, 6 Aug 2026 (BSE) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7fbec40c-de9a-40e7-b747-44192b259df2.pdf
- Q1 FY27 earnings-call transcript, 6 Aug 2026 (company site) [V] https://www.anupengg.com/wp-content/uploads/2026/08/Earning-call-Transcript-of-Q1-of-FY-2027-on-6th-August-2026.pdf
- Listing status: listed. It is a Lalbhai (Arvind) group company, demerged from Arvind and listed in 2019. Mabel Engineers (Chennai) is a 100% subsidiary (deck p.18 [V]). No merger or demerger is pending.

**Archetype:** a made-to-order fabricator of static process equipment: shell-and-tube and air-cooled heat exchangers, pressure vessels, columns and reactors in exotic alloys. It works on fixed-price, milestone-recognised contracts. It is a pure play on oil & gas, refinery, fertiliser and chemicals capex, with a meaningful export book.

### Standardized financials (₹ Cr)
| Item | FY24 (standalone = group) | FY25 (consol.) | FY26 (consol.) | Source |
|---|---|---|---|---|
| Revenue | 550 | 733 (+33%) | 822 (+12.1%) | Screener standalone / consolidated [V]; company 822.3 (deck p.9) [V] |
| EBITDA (screener OP) | 128 (23.3%) | 168 (22.9%) | 177 (21.5%) | Screener [V] |
| EBITDA (company) | — | — | 174.2 (21.2%) | Deck p.9 [V] |
| PAT | 103 | 118 | 110 (−7%) | Screener [V]; company 110.4 [V] |
| ROCE | — | — | 21.0% (screener current); 21% FY26 | Screener [V] |
| ROE | — | — | 17.1% | Screener [V] |
| Borrowings | 20 | 32 | 110 (LT 34 + ST 74 + lease 2) | Screener schedule [V] |
| Cash equivalents + investments | n/a + 104 | 16 + 11 | 13 + 0 | Screener [V] |
| Net debt / (net cash) | (≥84) | 5 | **97** (Mar-26) | [E] screener basis. CFO on the call (6 Aug 2026): cash ~₹45 Cr against LT debt ~₹44 Cr, so "net cash ₹1 Cr positive" [V]. The Q1 deck still calls it "net debt free" |
| CFO | 169 | −7 | 2 | Screener [V] |
| FCF (screener) | — | −51 | −51 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹1,511; m-cap **₹3,027 Cr**; 52-week high/low ₹2,480 / ₹1,410, so the stock is near its low.
- P/E **35.3×** on TTM PAT of ₹85 Cr. TTM is depressed by Q1 FY27; on FY26 PAT it is 27.5×.
- P/B **4.4×** (book ₹345/share).
- EV/EBITDA ≈ **21.8×** TTM OP of ₹143 Cr, or 17.6× FY26 OP [E].
- Dividend yield 0.79%.
- The group page in the deck shows m-cap ~₹2,800 Cr (highest price 27 Jun–5 Jul 2026) [V].

### Q1 FY27 (Jun-26 quarter) — a sharp miss
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY | Source |
|---|---|---|---|---|
| Revenue | 125.2 | 175.2 | **−28.5%** | Deck p.9 [V]; screener 125.25 [V] |
| EBITDA | 9.5 (7.6%) | 40.4 (23.0%) | −76.5% | Deck [V]. The MD's opening remarks said ₹9.2 Cr |
| PBT | 0.9 | 35.3 | −97% | Deck [V] |
| PAT | 0.6 | 26.3 | **−97.8%** | Deck [V] |
| Order inflow | ~315 (record) | — | — | Deck p.7 [V] |
| Pending order book (incl. LOI), 6 Aug 2026 | 985 | ~770 entering FY27 (primer, unverified) | — | Deck p.13 [V] |

- **Why revenue fell:** management "delayed new order intake last year to wait for better margins". Execution also started late (customer design approvals take 4–6 weeks), so milestones were not reached. Supply-chain problems and higher freight, energy and raw-material costs (war and closure of a critical sea route) added to the drag. Gross margin is said to be intact; the EBITDA fall is fixed-cost under-absorption (call [V]).
- **Q2 FY27 is not out.** The trading window closed on 28 Sep 2026 (BSE [V] via screener).
- **Other filings:** CARE rating update dated 10 Aug 2026 (not fetched). A GST appellate order set aside a ₹1.33 Cr demand (BSE, 4 Oct 2026).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | ₹985 Cr pending incl. LOIs (6 Aug 2026). About ₹240 Cr of this is for FY28 | Deck p.13–14 [V] |
| Order-book cover | ≈1.28× TTM revenue (≈15 months); ≈1.1× FY27 guided revenue | [E] 985 ÷ 772 TTM; 985 ÷ ~884 (FY26 +7.5%) |
| Order inflow / book-to-bill | Q1 FY27 inflow ~₹315 Cr → book-to-bill ≈2.5×. FY27 to 6 Aug: ₹538 Cr booked. Guided run-rate ₹200–250 Cr/quarter. Enquiry pipeline ₹1,100 Cr | Deck [V]; call [V]; [E] ratio |
| Export share | Q1 FY27 revenue: exports 40% + deemed export/SEZ 11% (domestic 49%). Order book: exports 38.7%, domestic 61.3%. The MD says export:domestic is running "almost 50:50" | Deck p.11, p.13 [V]; call [V] |
| Gross margin (proxy) | FY25 45.7% · FY26 52.2% · Q1 FY27 50.6% | [E] 100 − screener material cost %. Gross margin held while EBITDA collapsed: the problem is volume, not price |
| NWC days (FY26) | Debtor **185** · Inventory 94 · Payable 79 · CCC 199 · WC days 144 (FY25: 141/135/81/195/116) | Screener consolidated ratios [V]. Receivables rose from ₹284 Cr to ₹416 Cr in FY26 (schedule [V]); this is the main cash drain |
| CFO/EBITDA | FY26 **1%** · 3-yr (FY24–26) 35% | [E] 2/177; (169 − 7 + 2)/(128 + 168 + 177). Screener's CFO/OP row: 19% FY26 |
| Fixed-asset turnover | 2.1× FY26 (2.0× FY25; 1.8× FY24 standalone) | [E] revenue ÷ net block |
| Client concentration | Not disclosed in the deck. It is a project business, so a handful of EPC and licensor customers dominate in any year. A "marquee customer in Germany" is the anchor for air-cooled heat exchangers | Deck p.7 [V]; concentration unverified |
| Contract terms | "Mostly fixed price"; no cost pass-through to the customer. 99% of contracts are FOB India port, so freight is the customer's cost | Call [V] |

### Segment / end-market mix (Q1 FY27; deck p.10–13 [V])
- **Product (revenue):**
  - Vessels 60.1% (₹75.3 Cr)
  - Heat exchangers 26.7% (₹33.3 Cr)
  - Towers and reactors 5.7%
  - Tanks and silos 2.8%
  - Centrifuges and others 4.8%
- **Product (order book):**
  - Heat exchangers 57.5% (₹566 Cr)
  - Vessels 30.1%
  - Towers 3.3%
  - Silos 1.1%
  - Others 8.0%
- **Industry (revenue):**
  - Oil & gas 40%
  - Power & energy 22%
  - Petrochemicals 11%
  - Chemicals & silos 11%
  - Fertilisers 9%
  - Hydrogen 7%
- **New lines:** more than ₹150 Cr of orders for critical heat exchangers in thermal power plants, two proprietary-licence product orders (export), and the first air-cooled heat exchanger order (Germany). Nuclear was begun last year.
- **Diversification aim:** management sees "about ₹1,000 Cr" of steady conventional business for the next decade. It then wants nuclear, hydrogen, green fertiliser and AI data-centre cooling as diversifiers about three years out (call [V]).

### Capacity and plants (deck p.18–21 [V])
| Plant | Shop area | Single-piece capacity | Status |
|---|---|---|---|
| Ahmedabad (Odhav) | 45,000 m² (23,000 m² under hook) | up to 500 MT; ISO 8 clean room; 500 m² exotic-material bay | operating |
| Kheda | 125,000 m² (10,000 m² under hook, Phase 1+) | up to 1,000 MT; 8.5 m diameter; 100 m length | Phase 1 (2 bays) Jun-2023. Phase 2A (2 bays): one bay Q2 FY26, one open bay Jan-2026. **Phase 3 (3 bays): future plan** |
| Mabel Engineers, Chennai (100% subsidiary) | 20,000 m² (5,100 m² under hook) | up to 75 MT; U-stamp; EIL-qualified for silos | operating. Mabel adds ≈₹33 Cr revenue (FY26 consolidated 822 − standalone 789) [E] |

- Tonnage capacity is not given in the Q1 deck. The primer's "~20,000 MT/yr" is unverified this session.
- Licences: polymerisation reactors (Germany), EM-baffle heat exchangers (Italy), Helixchangers (Netherlands).

### Ownership (Jun-26; screener [V])
| Holder | Share |
|---|---|
| Promoters (Lalbhai family / group) | **40.92%** (42.91% in Sep-23) |
| FIIs | 2.88% (falling from a 4.72% peak) |
| DIIs | 16.52% (rising) |
| Public | 39.67% |

### Capex and guidance
- **FY27 guidance (call, 6 Aug 2026 [V]):**
  - Consolidated revenue growth of **5–10%** and EBITDA margin of **~15%**. This is the lowest margin guide in recent history; it reflects costs already committed on fixed-price jobs taken in a weak pricing window.
  - FY27 is framed as a year of "stabilisation, consolidation and risk protection".
- **Capex:** Kheda Phase 3 is a "future plan"; no FY27 capex figure was given in the materials fetched.

### Story bullets
- **FY27 is a reset year.** Management chose margin over volume in FY26 bidding, and the cost is a −28% revenue quarter and a near-zero PAT in Q1 FY27. Order intake has since rebounded to a record (₹538 Cr in about four months), at margins "very close to historic" (Chairman, call [V]).
- **The order book leans domestic and toward power.** Thermal power heat exchangers and nuclear are new end-markets that could offset a slower oil & gas and chemicals cycle.
- **Working capital is the real flag.** Debtor days of 185, CFO of ₹2 Cr on ₹177 Cr EBITDA in FY26, and the balance sheet moved from net cash to modest net debt.
- **US tariffs hurt FY26 bookings.** The Chairman cites "order cancellations and uncertainties due to tariffs" in FY26, which later normalised.

### Risks
- **Fixed-price contracts with no pass-through:** steel, alloy and energy inflation hits margins directly.
- **Lumpy, milestone-based revenue recognition.**
- **Under-absorption at Kheda** if inflow stalls.
- **Receivables build-up.**
- **Shareholder base:** low promoter holding (41%) and a thin FII base.

---

## 3. GMM Pfaudler Ltd — NSE: GMMPFAUDLR · BSE: 505255
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/GMMPFAUDLR/consolidated/
- Q1 FY27 earnings presentation, 5 Aug 2026 (BSE) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5cc7309b-c09d-4908-93d4-08c1a8024d0a.pdf
- Q1 FY27 earnings-call transcript, 6 Aug 2026 (BSE) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=521d7045-696d-49d3-b923-4f1e6f70ff54.pdf
- BSE announcement list (via the screener page) [V]:
  - 15 Sep 2026: Group CFO Alexander Poempner resigned; **Ankit Nayyar appointed Group CFO effective November 2026**.
  - 17 Sep 2026: CRISIL reaffirmed **AA-/Stable** on ₹600 Cr of facilities.
- Listing status: listed. The parent is Indian; the global Pfaudler business is a wholly owned subsidiary group. Bolt-ons in FY26: SEMCO (India) and GMM Inox (Poland); FY26 was restated for their purchase-price allocation (deck p.5 [V]). No merger or demerger is pending.

**Archetype:** a global niche leader in corrosion-resistant process equipment (glass-lined reactors and fluoropolymers), with a large installed base and service annuity. It is mid-cycle in a turnaround: acquisition-led leverage, and weak conversion from EBIT to PAT. Its end-market is chemicals and pharma capex, with diversification into mining, petrochemicals, defence and nuclear.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 3,446 | 3,199 (−7.2%) | 3,524 (+10.2%) | Screener [V]; deck p.27 [V] |
| EBITDA (screener OP = company EBITDA) | 476 (13.8%) | 361 (11.3%) | 403 (11.4%) | Screener [V]; deck margin row 13.8/11.3/11.4% [V] |
| Other income | 20 | −17 | −20 | Screener [V]. Negative because of FX and other losses on intercompany loans |
| Finance cost | 95 | 103 | 123 | Screener [V] |
| PAT | 171 | 49 | 52 (+6%) | Screener [V] |
| ROCE | 19% | 13% | 14% | Screener ratios [V] |
| ROE | — | — | 6.7% (current) | Screener [V] |
| Borrowings | 906 | 850 | 1,041 (LT 545 + ST 290 + lease 206) | Screener schedule [V] |
| Cash equivalents + investments | 344 + 0 | 467 + 0 | 688 + 3 | Screener schedule [V] |
| Net debt | 562 | 383 | **350** (≈0.9× FY26 EBITDA) | [E] screener basis. The company did not give a net-debt figure in the Q1 deck; it plans to repay ~€7m by end-Q2 FY27 from internal accruals |
| CFO | 284 | 378 | 389 | Screener [V] |
| FCF (screener) | 221 | 318 | 367 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹1,321; m-cap **₹5,952 Cr**; 52-week high/low ₹1,534 / ₹735.
- P/E **47.2×** (TTM PAT ₹65 Cr).
- P/B **4.9×** (book ₹268/share).
- EV/EBITDA ≈ **16.0×** TTM OP of ₹395 Cr [E].
- Dividend yield 0.15%. Dividends are now paid annually instead of semi-annually (deck p.8 [V]).

### Q1 FY27 (Jun-26 quarter) [V] deck p.4, p.24
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 925 | 795 | +16% | 944 |
| Material cost | 366 | 291 | +26% | 420 |
| EBITDA | 94 (10.1%) | 101 (12.7%) | −7% | 75 (8.0%) |
| Finance cost | 23 | 43 | −47% | 16 |
| PAT | 22.1 (2.4%) | 10 (1.3%) | +118% | 15 |
| Order intake | **1,007** (company calls it the highest quarter ever) | 1,004 (incl. a ₹355 Cr defence order) | flat | 871 |
| Backlog | 2,289 | 1,906 | +20% | 2,194 |

- **Standalone (India) Q1 FY27:** revenue ₹235 Cr (+2%); EBITDA ₹26 Cr at 11.0%, against 15.7% a year earlier; PAT ₹11 Cr (−33%) (deck p.25 [V]). The India margin squeeze is blamed on mix and investment in the new organisation (call [V]).
- **Q2 FY27 is not out.** The trading window closed on 29 Sep 2026, and an analyst-meet schedule was filed on 28 Sep (BSE [V] via screener).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order backlog | ₹2,289 Cr (Jun-26); ₹2,194 Cr (Mar-26); ₹1,636 Cr (Mar-25) | Deck p.6 [V] |
| Order-book cover | ≈0.63× TTM revenue (≈7.5 months). This is a short-cycle book plus service and spares | [E] 2,289 ÷ 3,654 |
| Order inflow / book-to-bill | FY24 ₹3,014 Cr · FY25 ₹3,102 Cr · FY26 ₹3,714 Cr (book-to-bill 0.87 / 0.97 / 1.05). Q1 FY27 ₹1,007 Cr (1.09×) | Deck p.6–7 [V]; [E] ratios |
| Gross margin (proxy) | FY24 60.0% · FY25 60.7% · FY26 60.4% · Q1 FY27 60.4% | [E] 100 − material cost % (screener and deck). Employee cost is ~28–31% of revenue (European wage base), so gross margin overstates what reaches EBITDA |
| NWC days (FY26) | Debtor 48 · Inventory 167 · Payable 123 · CCC 92 · WC days **23** (FY25: 44/157/116/85/33) | Screener ratios [V]. Customer advances keep net working capital low |
| CFO/EBITDA | FY26 **97%** · 3-yr (FY24–26) 85% | [E] 389/403; 1,051/1,240 (screener's CFO/OP row: 114% FY26). The best cash conversion in this batch |
| Fixed-asset turnover | 2.4× FY26 (2.7× FY25; 2.8× FY24) | [E]. The net block rose from ₹1,165 Cr to ₹1,497 Cr in FY26 (bolt-on acquisitions) |
| Export / international share | Most revenue is earned outside India: standalone India is ≈₹235 Cr of ₹925 Cr in Q1 FY27 (≈25%), so ≈75% comes from subsidiaries. Standalone India also exports | [E] deck p.24–25 [V]. Region split is no longer disclosed after the move to four global divisions |
| End-market of orders | Non-traditional industries (oil & gas, petrochemicals, defence, nuclear, mining) ≈31% of FY24 order intake → ≈42% FY26 → ≈43% Q1 FY27. Company: traditional ~55% / non-traditional ~45% today, against ~80% traditional before the acquisitions | Deck p.7, p.28 [V]; FY shares read from the chart [E] |
| Client concentration | Low: thousands of chemical and pharma customers plus aftermarket. One-off large orders do occur (₹355 Cr defence order in Q1 FY26) | Deck p.6 [V] |

### Segment / division mix (Q1 FY27; new four-division structure, deck p.15 [V])
| Division | Revenue | YoY | Order intake | YoY |
|---|---|---|---|---|
| CRT — Corrosion Resistant Technologies (glass-lined + fluoropolymer) | 466 | +10% | 502 | +23% |
| PPT — Process Performance Technologies (sealing, mixing, filtration, drying) | 255 | +23% | 367 | +64% |
| HET — Heavy Engineering Technologies (India, ETO equipment for nuclear/power/O&G) | 74 | flat | 58 | +719% |
| PST — Process System Technologies (modular systems, acid recovery, defence) | 131 | +46% | 80 | −78% (high base) |

- **Demand colour (MD Tarak Patel, call [V]):**
  - Glass-lined demand is the best "for quite some time". It is driven by India pharma, CDMOs and Hyderabad API makers.
  - **Large US pharma orders are tied to reshoring under the Trump-era pharma investment push.**
  - China has unexpectedly returned with chemicals orders. Europe "structurally still a bit slow".

### Capacity and plants
- **Footprint:** 20 manufacturing facilities, with presence in 35+ countries (deck p.28 [V]).
- **India:** the main site is at Karamsad, Gujarat. The De Dietrich Hyderabad plant was closed in FY25 and its work moved to Karamsad (deck p.27 [V]).
- **Utilisation:** not disclosed. Management says better utilisation and pricing will absorb costs (call [V]).

### Ownership (Jun-26; screener [V])
| Holder | Share |
|---|---|
| Promoters (Patel family) | **25.18%**, unchanged every quarter Sep-23 to Jun-26 |
| FIIs | 14.39% (26.49% Sep-23; 21.03% Jun-25), a steady exit |
| DIIs | 18.42% (rising) |
| Public | 42.01% |

- The promoter sell-downs by the Pfaudler/Millars side came earlier, before Sep-2023 [K, not re-fetched]. Screener shows no change in promoter holding since then.
- The MD notes that he and Group CEO Gregory Gelhaus are both family members and "control a large shareholding" (call [V]).

### Capex, targets and guidance
- **Guidance:** no numeric revenue guidance.
- **Margin target:** the "minimum target" is a **15% EBITDA margin** for the group (outgoing CFO, call [V]). Management expects margins to improve on FY26 across all businesses.
- **Balance sheet:** repay ~€7m of debt in Q2 FY27, refinance, unwind intercompany FX loans within 12–18 months, and simplify the group tax structure within 18–24 months (deck p.19 [V]).
- **Capex:** maintenance-level. The acquisition phase is "largely behind us" (call [V]).

### Story bullets
- **Record orders, but conversion is the issue.** Order intake is at a record (~₹1,000 Cr/quarter) and the backlog is up 20% YoY, but EBITDA margin has slipped to 10% (8% in Q4 FY26) against a 15% target. EBIT-to-PAT leakage (interest, FX, tax at a 45–50% effective rate) leaves PAT at about 2% of revenue.
- **Strong cash conversion.** CFO is close to EBITDA and FCF was ₹367 Cr in FY26, so leverage is falling (net debt about 0.9× EBITDA, on screener figures).
- **Management churn.** There is a new Group CEO (Gelhaus) and the Group CFO resigned in Sep-2026, with an India-based successor joining in November. The four-division reorganisation is meant to unlock global synergies.
- **US reshoring helps.** Reshoring of US pharma manufacturing is a direct positive for glass-lined orders from the US subsidiary. India-to-US exports of tariff-exposed equipment are small.

### Risks
- **India margin compression** (standalone 11% against 16% a year earlier).
- **European cost base and restructuring.**
- **FX and tax leakage.**
- **Integration risk** from bolt-on acquisitions.
- **Slower glass-lined demand** if the chemicals capex recovery stalls.

---

## 4. Praj Industries Ltd — NSE: PRAJIND · BSE: 522205
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/PRAJIND/consolidated/
- Q1 FY27 earnings presentation (company site) [V] https://www.praj.net/wp-content/uploads/2026/08/Praj-Industries-Earnings-Presentation-Q1-FY27-.pdf
- Q4 FY26 earnings presentation (BSE), used for the Mar-26 backlog and the FY26 balance sheet [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0da516fd-04a2-4760-9d42-b9a5d397cf8e.pdf
- Q1 FY27 call transcript, call held 14 Aug 2026 and filed 18 Aug (BSE) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=55386e27-0641-4766-8f3e-0916ce53bdcf.pdf
- BSE announcements (via screener) [V]: 16 Sep 2026 press release, a Bio-IBA (bio-isobutanol) development and commercialisation pact with Gevo; 19 Aug 2026 CRISIL rating update (not fetched).
- Listing status: listed. Subsidiaries include Praj HiPurity Systems (PHS) and Praj GenX (Mangaluru). No merger or demerger is pending.

**Archetype:** a process-technology licensor and EPC/equipment supplier for bio-refineries (1G/2G ethanol, CBG, SAF, bio-chemicals), plus high-purity water (pharma, semiconductor) and heavy fabrication (GenX). It runs on negative working capital funded by customer advances. Earnings are cyclical and set by Indian ethanol-blending policy. This is the batch's clearest "order-intake slowdown" case.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 3,466 | 3,228 (−6.9%) | 3,168 (−1.9%) | Screener [V]; company 3,466.3 / 3,228.0 / 3,167.9 [V] |
| EBITDA (screener OP) | 372 (10.7%) | 314 (9.7%) | 155 (4.9%) | Screener [V] |
| EBITDA (company, operating) | 387.9 (11.2%) | 314.5 (9.7%) | 151.8 (4.8%) | Q1 FY27 deck p.19 [V] |
| Other income | 59 | 89 | 21 (company 50.4) | Screener / deck [V]. Screener nets the exceptional item (−₹26.4 Cr in FY26) |
| PAT | 283 | 219 | 24 (−89%) | Screener [V]; company 283.4 / 218.9 / 23.8 [V] |
| ROCE | 29% | 18% | 6% (company 7%) | Screener ratios [V]; Q4 deck [V] |
| ROE | — | — | 1.5% (screener current) | Screener [V] |
| Borrowings | 169 | 195 | 173, all lease liabilities; zero bank debt | Screener schedule [V]; company lease liabilities ₹116 Cr NC + ₹57 Cr current [V] |
| Cash + bank + investments | 213 + 497 | 181 + 428 | 204 + 418 = 622 | Screener [V]. Company FY26: cash ₹142 Cr + other bank balances ₹61 Cr + current investments ₹407 Cr + non-current investments ₹11 Cr = ₹622 Cr [V] |
| Net debt / (net cash) | (541) | (414) | **(449)** incl. leases; (622) excl. leases | [E]. The company reports net debt/equity of (0.16)× (≈₹210 Cr net cash on its own definition) and "cash in hand ₹616 Cr" at 30 Jun 2026 (call [V]) |
| CFO | 199 | 43 | 200 | Screener [V] |
| FCF (screener) | 111 | −1 | 157 | Screener [V] |

**Valuation, 13 Oct 2026** (Screener [V]): price ₹288; m-cap **₹5,295 Cr**; 52-week high/low ₹428 / ₹273, so the stock is near its low.
- P/E **105×** on trough TTM PAT of ₹30 Cr.
- P/B **4.0×** (book ₹71.2/share).
- EV/EBITDA ≈ **32×** TTM OP of ₹150 Cr (EV ≈ ₹4,846 Cr) [E].
- Dividend yield 1.25%. The FY26 payout ratio was 278%; the final dividend of 180% (₹3.6/share) was approved at the 13 Aug 2026 AGM (call [V]).
- For reference, the deck put m-cap at ₹6,455 Cr (₹351) on 30 Jun 2026 [V].

### Q1 FY27 (Jun-26 quarter) [V] deck p.15, call
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY | Q4 FY26 |
|---|---|---|---|---|
| Revenue | 715.8 | 640.2 | +11.8% | 844.6 |
| EBITDA (operating) | 30.0 (4.19%) | 31.4 (4.90%) | −4.5% | 23.3 (2.76%) |
| Other income | 20.0 | 8.6 | — | 24.5 |
| PAT | 11.6 (1.6%) | 5.3 | +117% | 11.6 |
| Order intake | **1,000** | — | +52% QoQ (Q4 FY26: 658) | 658 |
| Order backlog | 4,589 | — | +6.6% QoQ | 4,305 |

- **Standalone:** revenue ₹539 Cr (+5.7%), EBITDA ₹20.4 Cr (3.8%), PAT ₹25.4 Cr (helped by ₹29 Cr other income) (deck p.14 [V]).
- **Why margins are low:**
  - **Domestic 1G greenfield remains in slowdown.** Enquiries come only from ethanol-deficit states (Tamil Nadu, Assam). Management expects this "till the time we see policies around higher blending mandates".
  - "Funding-related issues persist", stretching execution and slowing collections.
  - Export execution in Q1 was mostly in Africa, at lower margins than Europe or the Americas. Material cost is under geopolitical pressure (MD Ashish Gaikwad and JMD/CFO Sachin Raole, call [V]).
- **Q2 FY27 is not out.** The trading window is closed from 1 Oct 2026 until 48 hours after results (BSE, 24 Sep 2026 [V]).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order backlog | ₹4,589 Cr (Jun-26); ₹4,305 Cr (Mar-26); ₹4,293 Cr (Mar-25); FY26 quarterly peak ₹4,491 Cr | Q1 FY27 deck p.11 and Q4 FY26 deck p.29 [V] |
| Order-book cover | ≈1.41× TTM revenue (≈17 months) | [E] 4,589 ÷ 3,244. Some backlog is slow-moving because of customer funding problems (call [V]) |
| Order inflow / book-to-bill | FY26 intake ≈₹3,180 Cr (Q1–Q3 bars ₹914, ₹813 and ₹795 Cr in an order I could not pin down from the chart text; Q4 ₹658 Cr) → book-to-bill ≈1.00. Q1 FY27 ₹1,000 Cr → 1.40× | [E] sum of the Q4 FY26 deck quarterly bars [V] |
| Gross margin (proxy) | FY24 43% · FY25 49% · FY26 49% · Q1 FY27 45% | [E] 100 − screener material cost %. It moves with project stage and with the material versus site-expense mix (CFO, call [V]), so it is a weak signal here |
| NWC days (FY26) | Debtor 64 · Inventory 60 · Payable 132 · CCC **−8** · WC days 16 (FY25: 63/56/106/12/32) | Screener ratios [V]. Customer advances (other current liabilities ₹899 Cr, company BS) fund the projects |
| CFO/EBITDA | FY26 **129%** · 3-yr (FY24–26) 53% | [E] 200/155; 442/841 (screener's CFO/OP row: 175% FY26). FY26 is flattered by a receivables release and payables build |
| Fixed-asset turnover | 5.7× FY26 (5.7× FY25; 7.3× FY24) | [E]. Asset-light, but the Mangaluru GenX facility raised the base |
| Export share | Revenue: 25% Q1 FY27. Order intake 43% export (Q1 FY27; 21% in Q4 FY26). Backlog 37% export (34% Mar-26) | Deck p.9, p.11; Q4 deck [V] |
| Client concentration | Not disclosed. Domestic customers are sugar mills, grain distillers and OMC JV projects. One large Brazil corn-ethanol order in Q1 FY27 | Call [V] |

### Segment / end-market mix (deck p.10–11 [V])
| Segment | Q1 FY26 revenue | Q1 FY27 revenue | Share | Share of Q1 FY27 intake | Share of backlog |
|---|---|---|---|---|---|
| Bioenergy (1G/2G ethanol, CBG, SAF, Bio-IBA) | 382.6 | 474.0 | 66% | 62% | 77% |
| Engineering (critical equipment / GenX, brewery, ZLD) | 183.3 | 157.0 | 22% | 28% | 18% |
| HiPurity (pharma / semiconductor water) | 74.2 | 85.0 | 12% | 10% | 5% |

- **New drivers (call [V]):**
  - India's first commercial demo plant for Bio-IBA. A 2% blend in diesel would be a ">₹3,000 Cr project opportunity".
  - SAF detailed-engineering order (ethanol-to-jet).
  - A Praj GenX framework with a global EPC for hyperscale data-centre modules, with a minimum of ~US$50m (~₹500 Cr) over 2.5 years.
  - The first combined ultrapure-water + ZLD order from a semiconductor company.
  - GOBARdhan scheme (₹23,731 Cr outlay) for CBG.
  - The US move to E15 is being "closely followed".

### Capacity and plants
- **Manufacturing:** five facilities in Maharashtra, Gujarat and Karnataka, the latter being the Mangaluru "mega" GenX facility (deck p.8 [V]).
- **R&D:** Praj Matrix, Pune.
- **Utilisation:** not disclosed. Management says GenX volumes will improve with the data-centre orders.

### Ownership (Jun-26; screener [V]; matches deck p.22)
| Holder | Share |
|---|---|
| Promoters (Dr Pramod Chaudhari family) | 32.81%, unchanged |
| FIIs | 17.75% |
| DIIs | 14.09% (19.51% in Mar-25; MFs 13.52% per deck) |
| Public | 35.34% |

- About 3.83 lakh shareholders.

### Capex and guidance
- **No numeric FY27 guidance.** Management says margins will improve through international mix and GenX volume (call [V]).
- **Domestic 1G:** no recovery expected until higher blending mandates (E27/E30) are notified.
- **Capex:** modest. The GenX Mangaluru capex is complete. An "asset held for sale" of ₹13.7 Cr appears in the Jun-26 balance sheet (deck p.18 [V]).

### Story bullets
- **Profit has collapsed.** Profit fell ~90% in two years (PAT ₹283 Cr → ₹24 Cr) on flat-to-down revenue, as India's 1G ethanol greenfield wave ended after E20.
- **Intake has recovered, but margins have not.** Intake recovered to ₹1,000 Cr in Q1 FY27 (best in five quarters), led by bioenergy and exports (Brazil). Margins are still about 4%, so the recovery is in orders, not yet in profit.
- **The balance sheet is solid.** Bank debt is nil, there are about ₹620 Cr of cash and investments, and working capital is negative. The 278% payout is not sustainable at current earnings.
- **The optionality is real but small.** It covers SAF, Bio-IBA (Gevo pact, Sep 2026), CBG (GOBARdhan), data-centre fabrication and semiconductor water. None yet moves group margins.

### Risks
- **Policy timing** on E27/E30 and SAF mandates.
- **Customer funding stress** stretching execution and collections.
- **Africa-heavy export mix** at low margins.
- **Material-cost inflation** on fixed-price EPC.
- **Valuation on trough earnings** (P/E above 100×).

---

## 5. KRN Heat Exchanger and Refrigeration Ltd — NSE: KRN · BSE: 544263
Fetched 13 Oct 2026. Sources:
- Screener consolidated [V] https://www.screener.in/company/KRN/consolidated/
- Q1 FY27 investor presentation (BSE) [V] https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=17aada7c-c1ea-47c2-917f-ace1793f26e6.pdf
- Q1 FY27 earnings-call transcript, 14 Aug 2026 (company site) [V] https://krnheatexchanger.com/wp-content/uploads/2026/08/transcript-for-Q1fy27.pdf
- Monitoring-agency report on the QIP, quarter to Jun-26 (CRISIL, NSE archive, 12 Aug 2026) [V] https://nsearchives.nseindia.com/corporate/KRNHEAT_12082026210348_maqipsigned.pdf
- Listing status: listed (IPO Oct 2024, at ₹220 upper band [K, Outlook Business, Sep 2024]). It is a group of KRN plus its 100% subsidiary KRN HVAC Products Pvt Ltd (Plant II). The Bus AC division of Sphere Refrigeration Systems was acquired in FY26 (deck p.8 [V]). No merger or demerger is pending.

**Archetype:** a high-growth HVAC&R (heating, ventilation, air-conditioning and refrigeration) component maker. It makes fin-and-tube and bar-and-plate heat exchangers, and is moving into complete HVAC systems, bus AC and rail. It is a capacity-ramp story after a ~6× plant, with copper and aluminium passed through to customers but held as inventory, and an export push into data-centre cooling.

### Standardized financials (consolidated, ₹ Cr)
| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue | 308.3 | 429.9 (+39.4%) | 600.1 (+39.6%) | Deck p.30 [V]; screener 307/430/600 [V] |
| EBITDA (company = screener OP) | 58.5 (19.0%) | 70.5 (16.4%) | 112.5 (18.7%) | Deck [V]; screener 59/70/112 [V] |
| Other income | 5.5 | 11.9 | 10.2 | Deck [V] |
| PAT | 39.4 | 52.9 | 76.5 (+44.6%) | Deck [V]; screener [V] |
| ROCE | — | 21% | 16% | Screener ratios [V] |
| ROE | — | — | 14.1% (current) | Screener [V] |
| Borrowings | 87 (incl. lease 27) | 33 | 187 (almost all short-term working-capital debt) | Screener schedule; deck p.31 [V] |
| Cash & bank | 16 | 151 | 46 | Deck p.31 [V] |
| Net debt / (net cash) | 71 | (118) | **141** at Mar-26 | [E]. Q1 FY27 brought **QIP gross proceeds of ₹350 Cr (net ₹341.8 Cr)**; ₹198.6 Cr was deployed by 30 Jun 2026 and ₹143.2 Cr was unutilised (CRISIL monitoring report [V]). The post-QIP position is likely net cash, but the Jun-26 balance sheet was not published |
| CFO | 16.9 | 21.4 | **−113.8** | Deck p.30 [V] |
| FCF (screener) | −41 | −52 | −312 | Screener [V] |

**QIP (May–Jun 2026):**
- About 33 lakh shares were allotted. The share count rose from 6.216 Cr to 6.546 Cr (deck p.32 [V]).
- Press reports give the price as ₹1,060/share, with ADIA and WhiteOak funds among buyers (Kotak Neo / Sahi, 2026; search results only, so the price is **unverified**).

**Valuation, 13 Oct 2026** (Screener [V]): price ₹1,381; m-cap **₹9,038 Cr**; 52-week high/low ₹1,687 / ₹590.
- P/E **93.2×** (TTM PAT ₹97 Cr).
- P/B **14.9×** on screener's book of ₹92.4. That book uses Mar-26 equity over the pre-QIP share count. On post-QIP equity (≈₹574 Cr + ₹342 Cr + Q1 PAT ₹33 Cr ≈ ₹949 Cr, i.e. ₹145/share) P/B is ≈**9.5×** [E].
- EV/EBITDA ≈ **64×** TTM OP of ₹144 Cr on Mar-26 net debt, or ≈61× allowing for the undeployed QIP cash [E].
- No dividend.

### Q1 FY27 (Jun-26 quarter) [V] deck p.26–27
| ₹ Cr | Q1 FY27 | Q1 FY26 | YoY |
|---|---|---|---|
| Revenue (consolidated) | 252.3 | 115.3 | **+119%** |
| Raw material | 171.0 | 85.7 | +100% |
| Gross margin (rev − RM) | 32.2% | 25.6% | +660 bp |
| EBITDA | 49.1 (19.4%) | 17.6 (15.3%) | +179% |
| PAT | 32.9 (13.0%) | 12.4 | +165% |
| Standalone revenue / EBITDA % | 182.0 / 13.6% | 114.4 / 17.3% | Plant I margin down; Plant II (KRN HVAC) ≈₹115 Cr revenue at a higher margin (call [V]) |

- **Exports:** about ₹52 Cr (20.8% of revenue), up 177% YoY, to 14 countries. Gains came mainly from North America (data-centre customers, two to three new ones) and Europe. UAE fell because of the war, with freight rising from ~$1,500 to ~$6,000 a container (call [V]).
- **Q2 FY27 is not out.** The trading window closed on 26 Sep 2026; the AGM was held on 25 Sep 2026 (BSE [V] via screener).

### Native KPIs
| KPI | Value | Basis / source |
|---|---|---|
| Order book | **Not disclosed.** This is a short-cycle, purchase-order business; management speaks only of "order in hand" | Call [V] |
| Order-book cover / book-to-bill | n/a. The proxy is the guided path to ~₹2,000 Cr revenue at 80% utilisation by FY28 | Call [V] |
| Gross margin (proxy) | FY24 27.9% · FY25 25.8% · FY26 31.4% · Q1 FY27 32.2% | [E] (rev − RM) ÷ rev, from the deck. Copper and aluminium are a pass-through, so the % moves with metal prices |
| NWC days (FY26) | Debtor 106 · Inventory **242** · Payable 140 · CCC 208 · WC days 110 (FY25: 79/110/63/125/153) | Screener ratios [V]. Inventory rose from ₹96 Cr to ₹273 Cr and receivables from ₹93 Cr to ₹175 Cr in FY26 (deck p.31 [V]) |
| CFO/EBITDA | FY26 **−101%** · 3-yr (FY24–26) −31% | [E] −113.8/112.5; (16.9 + 21.4 − 113.8)/241.5. The worst in the batch: growth is funded by debt and then equity (QIP) |
| Fixed-asset turnover | 1.9× FY26 (5.1× FY25) | [E] 600/314 (screener net block). Plant II is capitalised and still ramping |
| Export share | FY24 14.7% · FY25 15.7% · FY26 16.6% · Q1 FY27 20.8%. Target ₹200 Cr of exports in FY27 (vs ~₹100 Cr FY26); ≥50% exports for fin-and-tube within 2–3 years | Deck p.14, p.28 [V]; call [V]. In Q1 FY27 the USA is the largest export market (~one-third of exports) |
| Client concentration | High. The primer cites Daikin >33% and top-10 ~72%, which matches the RHP era [K, RHP Sep 2024, not re-fetched]. Twenty-nine new customer accounts were added in Q1 FY27, mostly bus-AC body-builders (call [V]) | Unverified this session |

### Segment / end-market mix
- **Business lines:** fin & tube, bar & plate, complete HVAC systems, bus AC, refrigeration components, technical tubes, sheet metal, tubing (deck p.6 [V]).
- **End-markets:** room and commercial HVAC OEMs, data centres (precision AC), refrigeration and cold chain, railways (loco transformer oil coolers), off-highway (oil coolers), buses.
- **Plant split (Q1 FY27, call [V]):** Plant I (heat exchangers) ≈₹140 Cr; Plant II (KRN HVAC) ≈₹115 Cr.
- **Bus AC:** run-rate ₹5–6 Cr/month, with a target of ~15% market share after an MoU with a large customer (supplies from Sep-26).
- **Oil coolers:** target ~₹40 Cr in FY27.
- **Railways:** L1 in a ~₹70 Cr CLW loco oil-cooler tender (KRN eligible for ≤20%, ~₹8 Cr). A complete railway HVAC system is under development for FY28.

### Capacity and plants (deck p.12 [V]; call [V])
| Plant | Land | Status |
|---|---|---|
| Unit I — KRN Heat Exchanger, EPIP RIICO Neemrana (plots F-46–49) | 104,948 sq ft | operating |
| Unit II — KRN HVAC Products, Kolila Joga, RIICO Neemrana | 840,128 sq ft | commercial production since May-2025 (primer); ramping |
| Bangalore (new) | land applied for via single window | operations within ~1 year; a 10–15% addition that relocates existing south-India business first |
| Bus AC / railway site near Neemrana | land bought | part of the ~₹100 Cr capex |

- **Utilisation guidance:** "80% utilisation by FY28 → ₹2,000 Cr revenue — still same" (call, 14 Aug 2026 [V]).
- **Incentives:**
  - PLI: eligibility arrives once fin-and-tube revenue reaches ₹400 Cr in FY27; the company expects to apply in Q3 or Q4 FY27, and nothing has been booked yet.
  - Rajasthan RIPS: an entitlement certificate was received in about June 2026, and provisional booking is under discussion with auditors.

### Ownership (Sep-26; screener [V])
| Holder | Share |
|---|---|
| Promoters (Santosh Kumar Yadav family) | **65.69%** (70.79% until Mar-26) |
| FIIs | 8.98% |
| DIIs | 7.98% |
| Public | 17.35% |

- About 97,000 shareholders.
- The 5.1-point promoter drop is larger than QIP dilution alone (70.79% × 6.216/6.546 ≈ 67.2%). That implies roughly 1.5 points of promoter selling or a share-count difference **[E, not reconciled to a filing]**.
- Top public holders include WhiteOak MF, Mukul Agrawal, Holani VC, VQ Fastercap, LACERS, ITI, Bandhan and Motilal Oswal MF (deck p.32 [V]).

### Capex and guidance (call [V])
- **Revenue:** ~₹2,000 Cr at 80% utilisation in FY28.
- **Margin:** EBITDA "20-plus" at scale.
- **Exports:** ~₹200 Cr in FY27.
- **Capex:** ~₹100 Cr over the next year (Bangalore, bus-AC and railway sites), funded from profits.
- **Funding:** the QIP money covers working capital for about two years. Interest cost should fall.
- **FY27 revenue guidance:** not stated as a number on this call (the Q1 run-rate is ₹1,000 Cr+ annualised) [E].

### Story bullets
- **Revenue ramp.** Plant II takes revenue from ₹600 Cr (FY26) to a ₹1,000 Cr+ run-rate in Q1 FY27 (+119% YoY), with margins *rising* to 19.4%. It is the strongest operating print in the batch.
- **Cash flow is the problem.** FY26 CFO was −₹114 Cr and inventory days 242, and the ₹350 Cr QIP has partly refilled working capital. Copper and aluminium price spikes swell inventory even when they are passed through.
- **China+1 and data-centre exports are working.** North America and Europe offset the UAE war disruption. US tariffs have not stopped North American orders so far (call [V]).
- **Valuation:** ~93× P/E and ~9.5× post-QIP book. The thesis rests on the FY28 ₹2,000 Cr target; FY27 needs about 2× FY26 revenue to stay on that path.

### Risks
- **Customer concentration** (Daikin-heavy) and the risk that OEMs make coils in-house.
- **Metal-price working-capital swings.**
- **Execution on multiple new lines:** bus AC, rail, Bangalore.
- **Governance:** related-party dealings in a promoter-run group, and incentive income (PLI/RIPS) whose accounting is not yet booked.

---

## Batch 2 — summary grid (₹ Cr; FY26 consolidated unless noted; prices 13 Oct 2026)
| Metric | INOX India | Anup Engg | GMM Pfaudler | Praj | KRN |
|---|---|---|---|---|---|
| FY26 revenue | 1,587 | 822 | 3,524 | 3,168 | 600 |
| Growth YoY | +21.5% | +12.1% | +10.2% | −1.9% | +39.6% |
| EBITDA (screener OP) | 343 | 177 | 403 | 155 | 112 |
| EBITDA margin | 21.6% (co. 23.8% on total income) | 21.5% | 11.4% | 4.9% | 18.7% |
| PAT | 258 | 110 | 52 | 24 | 76 |
| Net debt / (cash), Mar-26 | (239) | 97 (co.: ~₹1 Cr net cash, Aug-26) | 350 | (449) incl. leases | 141 (pre-₹350 Cr QIP) |
| M-cap | 18,904 | 3,027 | 5,952 | 5,295 | 9,038 |
| P/E (TTM) | 73.5× | 35.3× | 47.2× | 105× | 93.2× |
| P/B | 16.9× | 4.4× | 4.9× | 4.0× | 14.9× (≈9.5× post-QIP) |
| EV/EBITDA (TTM) [E] | 54.6× | 21.8× | 16.0× | 32× | 64× |
| ROCE (screener) | 33.5% | 21.0% | 13.6% | 6.1% | 16.0% |
| Order book (Jun-26) | 1,686 | 985 (6 Aug, incl. LOI) | 2,289 | 4,589 | not disclosed |
| Order-book cover (× TTM rev) | 1.04× | 1.28× | 0.63× | 1.41× | n/a |
| Q1 FY27 book-to-bill | 1.43× | ~2.5× | 1.09× | 1.40× | n/a |
| Gross margin proxy FY26 | 55.4% | 52.2% | 60.4% | 49% | 31.4% |
| NWC: WC days / CCC (FY26) | 83 / 238 | 144 / 199 | 23 / 92 | 16 / −8 | 110 / 208 |
| CFO/EBITDA FY26 · 3-yr | 34% · 41% | 1% · 35% | 97% · 85% | 129% · 53% | −101% · −31% |
| Fixed-asset turnover | 3.7× | 2.1× | 2.4× | 5.7× | 1.9× |
| Export share | ~56–62% of revenue; 68% of book | 40% exports + 11% SEZ/DE (Q1); 39% of book | ~75% outside India (subsidiaries) [E] | 25% revenue (Q1); 37% of book | 16.6% FY26; 20.8% Q1 |
| Q1 FY27 YoY revenue / PAT | +9% / −5% (co. flat) | −28.5% / −98% | +16% / +118% | +12% / +117% | +119% / +165% |
| Promoter holding (latest) | 74.86% | 40.92% | 25.18% | 32.81% | 65.69% (Sep-26) |

**Archetypes and end-markets (for the sub-sector map):**
- **INOX India — export-led engineered-product maker on long-cycle books.** End-markets: industrial gas, LNG, space, fusion and semiconductor fabs. High return on capital, but cash is tied up in inventory.
- **Anup — capex-cycle job-shop on fixed-price contracts.** End-markets: oil & gas, refining, fertiliser, power and nuclear. Margins are exposed to steel and alloy costs because there is no pass-through. FY27 is a reset year.
- **GMM Pfaudler — global installed-base niche leader in a turnaround.** End-markets: chemicals and pharma capex, US pharma reshoring and China. Cash conversion is good; the drag is leakage below EBIT.
- **Praj — policy-cyclical technology licensor and EPC.** End-markets: ethanol blending, SAF, CBG and Bio-IBA. It runs on negative working capital and earnings are at a trough.
- **KRN — HVAC component volume ramp.** End-markets: HVAC/room AC, data centres, buses and rail; China+1 exports to North America and Europe. Copper and aluminium are passed through to customers but inflate inventory, and working capital is very heavy.

**Q2 FY27:** not reported by any of the five as of 13 Oct 2026. All closed their trading windows from 1 Oct 2026.

---

## PRIMER ISSUES

Method: each primer was read in slices (cover strip, "what's new" box, sections 00–03, then the financials and valuation section), and grepped for key figures and banned phrases. Locations refer to the primer's section headings. "Stripped-text line" means the line number in a tag-stripped text copy of the HTML, to help find the passage. "Correct" values are the verified figures above.

### primers/inox-india.html (last refreshed 27 Jul 2026, before the 3–4 Aug Q1 FY27 release)
1. **Stale m-cap and P/E.** Cover strip "~₹18,200 Cr Market cap (mid-2026)"; §10 "~70× P/E on ~₹18,200 Cr market cap". **Correct:** m-cap ₹18,904 Cr, P/E 73.5×, P/B 16.9× (screener, 13 Oct 2026 [V]). P/B and EV/EBITDA (~55×) are not given at all.
2. **Q1 FY27 missing.** Total income ₹382 Cr (+8.3%), EBITDA ₹90 Cr (23.5%), PAT ₹61 Cr (flat). The revenue miss came from ~₹32–35 Cr of dispatches held back by Gulf and freight disruption (Q1 FY27 deck p.19 and call [V]).
3. **Stale order book.** Cover "~₹1,514 Cr Order book (Mar 2026)"; §05 "~63% of it is exports". **Correct (Jun-26):** ₹1,686 Cr, a record; exports ₹1,140 Cr = **68%**; Q1 inflow a record ₹532 Cr (deck p.22–25 [V]). Management also cited ~₹930 Cr of orders in Jun–Jul 2026 (call [V]).
4. **Understated aerospace exposure.** §03 timeline "a ~₹200 Cr US aerospace order". **Correct:** the US private space customer has placed **>₹1,000 Cr** of orders across Q4 FY26 to Q2 FY27, with ~₹400 Cr in the Jun-26 book (≈24%), for delivery by end-FY28 (call [V]). Q1 FY27 alone held a ₹217 Cr order. This is a material concentration point the primer does not make.
5. **FY26 EBITDA/PAT basis.** What's-new box: "adjusted EBITDA ~₹380 Cr … adjusted PAT ~₹261 Cr". **Company's own FY26 figures:** EBITDA ₹388 Cr (23.8% of total income ₹1,632 Cr), PAT ₹258 Cr (Q1 FY27 deck p.3 [V]). Screener OP is ₹343 Cr (21.6% of revenue). The primer should state its basis; 23.8% is on total income including other income.
6. **Kandla timing.** §03 "guided to commission within roughly 9–10 months of the FY26 update". **Latest:** start of operations "by December end or mid of January" 2027 (call, 4 Aug 2026 [V]).
7. **Missing FY27 guidance:** revenue growth 18–20%, EBITDA margin 21–24%, order intake ₹450–500 Cr a quarter, possibly revised up (call [V]).
8. **Missing:** keg capacity of 300,000/year at ~30% utilisation (target 50–60%); a US non-compete until 2028; the first semiconductor-fab orders (Dholera, Micron, Tata); the 28 Sep 2026 cancellation of an investor meet (BSE).
9. **Missing cash-conversion caveat.** §10 "Debt-free, cash-generative". CFO has been flat at ₹117–122 Cr for three years (CFO/EBITDA 34% in FY26), and working-capital days rose from 44 to 83 (screener [V]). "Cash-generative" overstates this.
10. **Shareholding.** "~75% (about 74.9%)" is fine. Latest is 74.86% (Jun-26), down from exactly 75.00%.
11. **Banned or near-banned phrasing.**
    - §09: "priced for the growth legs to keep scaling" (close to "priced for perfection").
    - §10: "The order book, quarter by quarter, is where that verdict gets written" (close to "the story will be written in").
    - "honest" appears once, which is acceptable.

### primers/anup-engineering.html (last refreshed 2 Sep 2026, after the 6 Aug Q1 FY27 release, but Q1 is absent)
1. **Q1 FY27 missing, the biggest gap.** Revenue ₹125.2 Cr (**−28.5%**), EBITDA ₹9.5 Cr (7.6%), PAT ₹0.6 Cr (−98%) (Q1 deck p.9 [V]). The primer's cover and §10 still describe a "quality compounder" with a ~21% margin.
2. **Missing FY27 guidance:** revenue growth of **5–10%** and EBITDA of **~15%**, on fixed-price contracts with no cost pass-through (call [V]). This contradicts §10's "the FY26 profit dip reads as a ramp blip".
3. **Stale order book and pipeline.** Cover "~₹770 Cr Order book (FY27 entry)"; §05 "~₹1,200 Cr enquiry pipeline". **Correct:** pending order book ₹985 Cr incl. LOI (6 Aug 2026), with ~₹240 Cr of it for FY28. Record Q1 inflow ~₹315 Cr; enquiry pipeline ₹1,100 Cr; intake run-rate ₹200–250 Cr a quarter (deck p.13–14, call [V]).
4. **Wrong net worth.** §03 "Borrowings are modest relative to a ~₹2,700 Cr net worth base". **Correct:** equity ≈ ₹691 Cr (₹20 Cr capital + ₹671 Cr reserves, Mar-26, screener [V]).
5. **Wrong promoter description.** §03 "holding a large majority stake". **Correct:** promoters hold **40.92%** (Jun-26, screener [V]), a minority, down from 42.91% in Sep-23.
6. **Stale m-cap and P/E.** §09 "~33× … ~₹3,600 Cr market cap"; cover "~₹3,600 Cr". **Correct:** ₹3,027 Cr, P/E 35.3× TTM (27.5× FY26), P/B 4.4×, stock near its 52-week low of ₹1,410 (screener [V]).
7. **"Low debt / net cash".** At Mar-26 borrowings were ₹110 Cr against ₹13 Cr cash, so screener-basis net debt is ~₹97 Cr. The company says ~₹1 Cr net cash as of 6 Aug 2026 (call [V]). Also, CFO was ₹2 Cr in FY26 and debtor days 185, which contradicts "structurally cash-generative".
8. **Export band.** §07 "Anup consistently targets that 50–60% export band". **Latest:** the order book is **39% export** / 61% domestic. Q1 revenue was 40% export + 11% deemed export/SEZ (deck p.11, p.13 [V]).
9. **Mabel Engineers (Chennai, 100% subsidiary) is never mentioned.** It is the third plant (20,000 m², U-stamp, EIL-qualified for silos) (deck p.18–21 [V]). Kheda Phase-2A status and the Phase-3 plan are also missing.
10. **Peer table.** §08 calls "Godrej Process Equipment" "the closest listed twin". It is a division of Godrej & Boyce, which is not separately listed [K].
11. **FY24 revenue.** §09 bar "~560". **Correct:** ₹550 Cr (screener standalone; there was no subsidiary in FY24 [V]).
12. **Capacity.** "~20,000 MT/yr" could not be verified this session; the Q1 deck gives floor areas and single-piece tonnage, not annual tonnes.
13. **Banned phrases:** none found. "honest" appears once.

### primers/gmm-pfaudler.html (last refreshed 4 Sep 2026, after the 5–6 Aug Q1 FY27 release)
1. **Wrong management name.** §03 "with Vivek Bhatia as Managing Director & CEO". **Correct:** **Tarak Patel is Managing Director** and **Gregory Gelhaus is Group CEO**; both are promoter-family members (Q1 FY27 call [V]). Group CFO Alexander Poempner resigned and **Ankit Nayyar is Group CFO from November 2026** (BSE, 15 Sep 2026 [V]). None of this is in the primer.
2. **Q1 FY27 missing.** Revenue ₹925 Cr (+16%), EBITDA ₹94 Cr (10.1%, −7%), PAT ₹22 Cr (+118%); record order intake ₹1,007 Cr; backlog ₹2,289 Cr (+20% YoY) (deck p.4 [V]). Standalone India EBITDA margin fell to 11.0% from 15.7% (deck p.25 [V]), which undercuts the primer's "India business EBITDA +24%" framing for FY27.
3. **Stale m-cap.** Cover "~₹4,800 Cr Market cap (mid-2026)". **Correct:** ₹5,952 Cr; P/E 47.2×; P/B 4.9×; EV/EBITDA ~16× (screener, 13 Oct 2026 [V]). The primer gives no P/E or P/B.
4. **Promoter stake not given.** §03 "investors should read the latest shareholding pattern". **Correct:** promoters 25.18% (unchanged since Sep-23); FIIs fell from 26.49% to 14.39%; DIIs 18.42% (Jun-26, screener [V]).
5. **Missing four-division reorganisation** (CRT/PPT/HET/PST) and the new divisional disclosure (deck p.11–15 [V]). The primer's segment frame (Technologies / Systems / Services, India vs International) is now superseded.
6. **Missing targets:** 15% EBITDA as the "minimum target", ~€7m debt repayment in Q2 FY27, unwinding intercompany FX loans within 12–18 months, and the switch to an annual dividend (deck p.8, p.19; call [V]). CRISIL reaffirmed AA-/Stable on 17 Sep 2026 (BSE [V]).
7. **"Loss-making global arm"** (§09). Not supported by anything fetched. Consolidated EBITDA is positive, and management describes international margins as below India's, not as losses. Soften this or source it.
8. **FY24 EBITDA "~482".** Screener/company: ₹476 Cr (13.8%) [V]. Minor.
9. **US reshoring tailwind missing.** The MD says large glass-lined orders came from US pharma reshoring, and China has returned with chemicals orders (call [V]).
10. **Banned phrases:** none found. "honest" appears once.

### primers/praj-industries.html (last refreshed 24 Aug 2026, after the 14 Aug Q1 FY27 call)
1. **Wrong FY26 order book.** Cover "~₹4,491 Cr Order book (FY26)" and the what's-new box. **Correct:** the Mar-26 (FY26-exit) backlog was **₹4,305 Cr**; ₹4,491 Cr was a mid-FY26 quarter. The Jun-26 backlog is **₹4,589 Cr** (Q4 FY26 deck p.29; Q1 FY27 deck p.11 [V]).
2. **Q1 FY27 missing.** Revenue ₹716 Cr (+12%), EBITDA ₹30 Cr (4.2%), PAT ₹11.6 Cr; order intake ₹1,000 Cr (best in five quarters; +52% QoQ) (deck p.15, p.11 [V]).
3. **Stale m-cap.** Cover "~₹6,478 Cr Market cap (mid-2026)". **Correct:** ₹5,295 Cr; P/E 105×; P/B 4.0×; stock near its 52-week low of ₹273 (screener [V]).
4. **Export share.** §00 "exports (already ~36% of revenue)". **Correct (latest):** 25% of Q1 FY27 revenue. Exports are 37% of the Jun-26 backlog and 34% of the Mar-26 backlog (decks [V]); 36% looks like a backlog share, not a revenue share.
5. **Founding year.** §03 "Praj was founded in 1985". The company deck says "Incorporated in 1983" (Q1 FY27 deck p.3 [V]).
6. **Bio-IBA status stale.** What's-new: "bio-isobutanol first commercial order guided for FY27". **Correct:** the order for India's first commercial demo Bio-IBA plant has been **received** (Q1 FY27). A Bio-IBA development pact with **Gevo** followed on 16 Sep 2026 (BSE [V]).
7. **Missing:**
   - The Praj GenX data-centre framework agreement (≥US$50m / ~₹500 Cr over 2.5 years).
   - The Brazil corn-ethanol order.
   - The first semiconductor UPW + ZLD order.
   - The GOBARdhan CBG scheme (₹23,731 Cr).
   - Management's statement that domestic 1G stays slow until higher blending mandates.
   - Customer-funding problems stretching execution.

   Sources: deck p.13 and call [V].
8. **Net cash.** Correct in spirit. The figure is: no bank debt; cash, bank and investments ₹622 Cr; leases ₹173 Cr (FY26 BS [V]). The FY26 dividend payout was 278%, which the primer should flag as unsustainable.
9. **Banned or near-banned phrasing.** §00: "is priced for that pivot to work" (close to "priced for perfection"). "honest" appears once.

### primers/krn-heat-exchanger.html (last refreshed 14 Aug 2026, the day of the Q1 FY27 call)
1. **Q1 FY27 missing.** Revenue ₹252 Cr (**+119%**), EBITDA ₹49 Cr (19.4%), PAT ₹32.9 Cr (+165%); exports +177% (deck p.26–28 [V]).
2. **₹350 Cr QIP (May–Jun 2026) missing.** Gross ₹350 Cr / net ₹341.8 Cr; ₹198.6 Cr deployed by Jun-26 (CRISIL monitoring report [V]). The share count rose from 6.216 Cr to 6.546 Cr (deck [V]). The primer still describes the IPO as the funding event.
3. **Stale shareholding.** §03 "retains the controlling majority … promoter skin stayed high" gives no figure. **Correct:** promoters 65.69% (Jun/Sep-26) against 70.79% before the QIP (screener [V]).
4. **Stale valuation.** Cover "~₹8,700 Cr Market cap (Aug 2026)"; §09 ">100× P/E". **Correct:** m-cap ₹9,038 Cr, **P/E 93.2×**, P/B 14.9× (≈9.5× on post-QIP book) (screener [V]).
5. **Utilisation guidance year.** §05 chart "FY29 guided ~80%". **Correct:** management reiterated "80% utilisation by FY28 → ₹2,000 Cr revenue — still same" (call, 14 Aug 2026 [V]).
6. **Revenue figures.** §09 "FY25 ~435" and "+38%". **Correct:** FY25 ₹429.9 Cr; FY26 growth +39.6% (deck p.30 [V]).
7. **Cash-flow risk missing.** FY26 CFO was −₹113.8 Cr, inventory rose from ₹96 Cr to ₹273 Cr, and net debt was ₹141 Cr at Mar-26 (deck p.30–31 [V]). The primer's "high-quality growth print" ignores this.
8. **Missing new lines and guidance:**
   - Bus AC (Sphere Refrigeration division acquired; ₹5–6 Cr/month; 15% share target).
   - Railway oil coolers (L1 in a CLW tender; ~₹40 Cr FY27 target) and railway HVAC for FY28.
   - Exports of ₹200 Cr in FY27.
   - ~₹100 Cr capex (Bangalore plus a bus-AC/rail site).
   - PLI eligibility at ₹400 Cr fin-and-tube revenue.
   - Rajasthan RIPS entitlement.

   Source: call [V].
9. **Concentration figures** (Daikin >33%, top-10 ~72%) match the RHP era, but I could not re-verify them this session. They should be dated (RHP, Sep 2024).
10. **Banned or near-banned phrasing.**
    - §10: "asked to grow into an enormous factory and an enormous multiple" (a variant of "grow into its multiple").
    - §04: "the diversification the company is trying to grow into".
    - §05: "KRN has to grow into an enormous new footprint".
    - §09: "an extreme multiple pricing the ramp to near-perfection" (close to "priced for perfection").
    - "honest" does not appear.
