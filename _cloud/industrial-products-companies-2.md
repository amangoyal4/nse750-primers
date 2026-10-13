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
