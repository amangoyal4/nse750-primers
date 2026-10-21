# Indian Logistics Solution Providers (Logistics || Logistics Solution Provider): Research Dossier + Company Fact Packs

Compiled 21-Oct-2026 (UTC evening) for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md §0–12 and A–H).
- **Part 2** is the company fact pack for all five members (brief-companies.md), with a JSON block.
- **Part 3** is the company-KPI appendix: summary grid, aggregates, reconciliation vs primers, primer issues (§3.4) and source URLs.

**Members (5, Tier B):** Container Corporation of India (CONCOR · 531344), Delhivery (DELHIVERY · 543529), Blue Dart Express (BLUEDART · 526612), BlackBuck Ltd, formerly Zinka Logistics Solutions (BLACKBUCK · 544288), TVS Supply Chain Solutions (TVSSCS · 543965).

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary page: screener.in consolidated pages (curl, generic UA, 21-Oct-2026 ~20:15 UTC, i.e. after the 21-Oct close), BSE-hosted company filings (Q1 FY27 investor presentations and call transcripts, CONCOR's Sep-2026 volume filing), and named news pages fetched in full.
- **[V-snip]** = verified only from a search-result summary or a secondary article, not the primary document.
- **[K]** = well-established public fact from memory; source named, not re-fetched. Spot-check before it carries an argument.
- **[K-brief]** = macro fact supplied in the orchestrator brief (BRIEF.md "verified facts to keep consistent", 21-Oct-2026). Not re-fetched here.
- **[E]** = analyst estimate, composite or arithmetic. Present as "approx." or a range.
- **[primer]** = from our own primer in primers/ (FY26 basis; refreshed 7-Jul to 22-Aug-2026).
- **[screener 21-Oct-26]** = screener.in consolidated, fetched 21-Oct-2026 after close.

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. MT = million tonnes; kt = thousand tonnes; t = tonne.
- **TEU** = twenty-foot equivalent unit (a 40-ft box = 2 TEU). **Originating TEU** = boxes loaded at a CONCOR terminal onto a CONCOR train; **handling/throughput TEU** = all boxes handled at its terminals (rail + road + transshipment), which is the 5.58m figure. Do not mix them.
- **NTKM / GTKM** = net / gross tonne-km. **Lead** = average haul distance (km). Rail freight earnings ≈ tonnes × lead × rate per tonne-km.
- **Express parcel** = small B2C/C2C parcels (mostly e-commerce, <5 kg). **PTL** = part-truckload B2B freight (palletised, 50 kg–3 t per consignment). **FTL** = full truckload. **SCS / ISCS** = supply-chain services (warehousing + contract logistics). **GFS** = global forwarding (ocean/air).
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All five have a March year-end. TVS SCS consolidates UK/Europe/US/APAC subsidiaries on the same March year.
- **FX: ₹94.9 = US$1** (19-Oct-2026; record low near ₹96.8) [K-brief] — used for all USD conversions. £1 ≈ ₹125 [E]; €1 ≈ ₹108 [E].
- Macro context [K-brief]: **West Asia war from 28-Feb-2026** → Strait of Hormuz disruption, Brent spike (peak ~$118/bbl per sibling dossiers), **excise cut on fuels 26-Mar-2026, then four pump-price hikes in May-2026**; RBI repo hiked to **5.50% on 7-Oct-2026**; **GST 2.0 from 22-Sep-2025**; US tariffs: IEEPA tariffs struck down by SCOTUS 20-Feb-2026, Sec 122 10% until 24-Jul-2026, then 10% Section 301 on top of MFN (under legal challenge); Sec 232 50% on copper/aluminium derivatives. CONCOR's CMD described US tariffs "up to 50%" during FY26 hitting textiles and marine products [V CONCOR Q4 FY26 call, 26-May-2026].
- The four May-2026 diesel hikes are verified this session: Delhi diesel **₹87.67 → ₹90.67 (15-May) → ₹91.58 (19-May) → ₹92.49 (23-May) → ₹95.20 (25-May)**, cumulative **+₹7.53/litre (+8.6%)**, the first revision since 2022 (four years) [V goodreturns.in; V-snip newsonair.gov.in]. The 26-Mar-2026 excise cut appears not to have been passed to pump prices (Delhi diesel was still ₹87.67 until 15-May); treat the cut as an OMC-margin support measure [E; FLAG].

**Q2 FY27 status (as of 21-Oct-2026): none of the five has reported Q2 FY27. Q1 FY27 (Jun-26) is the latest quarter for all five. Only BlackBuck has announced its Q2 board date.** CONCOR has already filed Q2 physical volumes (see below).

| Company | Q1 FY27 result (board / call) | Q2 FY27 board date / status |
|---|---|---|
| CONCOR | Q1 FY27 numbers on screener (Jun-26 quarter: revenue ₹2,160 Cr, PAT ₹269 Cr) [V screener]. The latest transcript on file is the **Q4 FY26 call of 26-May-2026** (filed 3-Jun) [V]; no Q1 FY27 call transcript was found among BSE documents [V screener docs list]. Q1 board date: ~early/mid-Aug-2026 [E]. | **Not announced** as of 21-Oct [V screener announcements]. **Q2 physical volumes filed 21-Oct-2026**: total 14,48,379 TEU (+0.53% YoY); EXIM 10,92,652 (−0.07%); domestic 3,55,727 (+2.43%) [V BSE filing]. Last year's Q2 board was in ~mid-Nov-2025 [K, verify]; expect ~early–mid Nov-2026 [E]. |
| Delhivery | Board + call **8-Aug-2026 (Saturday), 6 pm**; presentation filed 8-Aug; transcript filed 13-Aug [V BSE PDFs] | **Not announced** [V screener: trading window closed 25-Sep; latest items are ESOP allotments 1–10 Oct, Reg 74(5) 13-Oct]. Last year's Q2 board ~31-Oct/1-Nov-2025 [V-snip FilingReader 29-Oct-2025]. Outer deadline 14-Nov-2026 [V-snip univest]. |
| Blue Dart | Investor presentation dated **4-Aug-2026**; call transcript filed **8-Aug-2026** [V BSE PDFs] | **Not announced** [V screener; latest items: MoU with India Post 9-Oct-2026, company-secretary change 9/10-Oct, Reg 74(5) 20-Oct]. Expect ~late Oct/early Nov [E]. |
| BlackBuck | Board + call **29-Jul-2026, 5 pm**; transcript filed 3-Aug [V BSE PDFs] | **Board 29-Oct-2026** for Q2/H1 FY27 results (intimation 21-Oct-2026) [V screener]. |
| TVS SCS | Presentation filed **10-Aug-2026**; transcript filed 17-Aug [V BSE PDFs]; analyst meet 11-Sep-2026 [V screener] | **Not announced**; trading window closed from 1-Oct until 48 h after results [V screener]. Expect ~early Nov [E]. |

**Still listed? All five are listed and trading (screener prices 21-Oct-2026).** Live corporate actions:
1. **BlackBuck — internal restructuring of the loads business.** Board on **12-Oct-2026 approved a slump sale of the "Loads Business Undertaking" to a new wholly owned subsidiary, BlackBuck Transport Services Pvt Ltd (BTSPL)**, incorporated 24-Sep-2026 [V screener announcements]. On 28-Sep it put ₹21.999 Cr into another WOS ("TZF") via rights issue [V screener]. Not a delisting/merger; it ring-fences Superloads (the gross-revenue freight-brokering business, see trap 4). Flag for the writer: could presage a separate capital raise or partner for Superloads [E].
2. **TVS SCS — NCLT Bengaluru sanctioned the merger scheme of SPC International (a subsidiary) on 1-Oct-2026**, effective on ROC filing [V screener]. Intra-group; no effect on the listed entity's perimeter. **TVS SCS also acquired Swamy & Sons 3PL (22-May-2026)** and on 6-Oct-2026 invested ₹10.19 Cr for **51% of TVS SCS ALA India** (aerospace & defence JV with Italy's ALA group) [V presentation; V screener].
3. **Delhivery — Ecom Express is now a subsidiary** (CCI approval 17-Jun-2025; ≥99.44% fully diluted; consideration ≤₹1,407 Cr cash) [V-snip Business Standard/inc42]; primer gives completion **18-Jul-2025** and ">99.8%" [primer]. Ecom was fully consolidated from Q2 FY26 [V Delhivery Q1 FY27 call]. No listing effect.
4. **CONCOR — privatisation remains dormant.** The 2019 CCEA approval to sell a 30.8% GoI stake with management control has not progressed; the Sep-2022 land-lease (LLF) reform was its prerequisite [primer; K]. GoI still 54.80% (Sep-2026) [V screener]. Equity capital rose ₹305 Cr → ₹381 Cr in FY26 = a **1:4 bonus** (FY26 EPS ₹16.30 is on the enlarged base) [V screener; ratio K].
5. **Blue Dart — no corporate action.** DHL (Deutsche Post group) holds 75.00% [V screener]. MoU with India Post (9-Oct-2026) to extend reach into Tier III/IV towns [V screener announcement summary].

---

## READ THIS FIRST: ten definitional traps

1. **Delhivery has four EBITDAs. Quote the basis every time.**
   - **Screener "operating profit" FY26 = ₹640 Cr (6.1%)** — revenue minus all operating costs, **after** Ecom integration costs, **before** Ind-AS 116 lease adjustment (so lease rent is excluded from opex and sits in depreciation + interest) [V screener].
   - **Company "EBITDA" excluding Ecom integration cost** — Q1 FY27 ₹156 Cr (5.3%); FY26 ≈ ₹640 + ₹148 integration ≈ **~₹790 Cr** [V Q1 FY27 presentation; E]. The primer's "₹764 Cr EBITDA, ~7.3% margin" is roughly this basis.
   - **"Adjusted EBITDA"** = reported EBITDA + ESOP charge − **actual cash lease rent** + integration cost → **FY26 ₹457 Cr (4.4%)**; Q1 FY27 ₹76 Cr (2.6%). This is the management's own "cash" EBITDA and the right one for comparison with pre-Ind-AS history [V presentation, slide "Adjusted EBITDA bridge": lease rent paid ₹95–111 Cr a quarter].
   - **"Service EBITDA"** = segment contribution before corporate overheads (~9.3–9.6% of revenue): **FY26 ₹1,501 Cr (14.4%)**; Express 17.2%, PTL 11.0% [V presentation]. Never compare a service-EBITDA margin with another company's group EBITDA.
   - **PAT:** reported FY26 PAT = **₹153 Cr** (quarters 91 / −50 / 40 / 72) [V screener]. The primer's **"₹321 Cr (+98%)" is wrong on any reported basis** — even adding back the ₹148 Cr integration cost gives ~₹300 Cr [E]. See §3.4.
2. **Ind-AS 116 inflates EBITDA for every lease-heavy member — most for TVS SCS, Delhivery and Blue Dart.**
   - TVS SCS FY26: **₹403 Cr of right-of-use depreciation + ₹83 Cr lease interest** sit below EBITDA — ₹486 Cr against adjusted EBITDA of ₹773 Cr [V presentation]. Pre-Ind-AS ("cash") EBITDA is therefore ~₹290–300 Cr (~2.7%) [E].
   - Delhivery: ~₹95–111 Cr of cash rent a quarter (~₹400+ Cr a year) is excluded from reported EBITDA [V presentation].
   - Blue Dart: aircraft are leased by Blue Dart Aviation; standalone Blue Dart Express pays the aviation subsidiary, so **standalone EBITDA margin is 10.44% vs consolidated 16.05% (FY26, pre-exceptional)** [V Blue Dart presentation]. Use consolidated; note that ~₹536 Cr of D&A (screener) includes aircraft right-of-use.
   - Screener "borrowings" include lease liabilities for all five. CONCOR's ₹965 Cr is "mostly lease-related" [primer]; TVS SCS's ₹2,755 Cr includes large lease liabilities [E].
3. **CONCOR: standalone vs consolidated, and three "margins".**
   - Screener consolidated FY26: revenue ₹9,079 Cr, OP ₹1,951 Cr (**21.5%**), PAT ₹1,246 Cr [V screener].
   - Management (standalone) **EBITDA 24.33% FY26 (24.9% FY25)**, guided **24–25%** [V Q4 FY26 call]. The difference is basis (standalone; probably includes some other operating income/terminal-related income) [E].
   - "**Operating margin 30.89%**" and "**rail freight margin 27.16%**" in the call are segment-style margins (revenue less rail haulage charges/terminal costs), not EBITDA [V call]. Never put 27–31% next to Delhivery's 6%.
   - Consolidated includes JVs/subsidiaries (e.g., SIDCUL Concor, Fresh & Healthy Enterprises, Concor Last Mile, Concor Air, Punjab Logistics, a 30% stake in Bharat Container Shipping Line) [K/V call for BCSL].
4. **Gross vs net revenue for freight brokering (BlackBuck Superloads; Delhivery FTL "Orion"; TVS GFS).**
   - BlackBuck reports **revenue from operations ₹204.17 Cr** for Q1 FY27 but **net revenue ₹165.03 Cr**, because Superloads (managed full-truckload brokering) is booked gross; its revenue is swapped for its gross margin in "net revenue" [V presentation]. Growth businesses (mostly Superloads) were ₹58.99 Cr (+153%), core payments & telematics ₹145.18 Cr (+21%).
   - Consequence: BlackBuck's headline revenue growth (+42% Q1, +53% FY26) overstates platform growth; **net revenue grew +25%** and core +21% in Q1 FY27 [V].
   - TVS SCS's GFS (freight forwarding) is also booked gross (freight purchased ₹3,006 Cr of ₹11,003 Cr FY26 revenue) [V presentation]; its 2–4% margin is a gross-revenue artefact.
5. **BlackBuck's FY25 and two Q4s are distorted by one-offs and deferred tax.**
   - FY25: reported PAT −₹9 Cr (company −₹8.7 Cr); screener other income **−₹308 Cr** = IPO-year fair-value/ESOP and listing-related charges (Q2 FY25 −₹276 Cr) [V screener; primer]. Operating profit FY25 was +₹93 Cr.
   - **Q4 FY25 PAT ₹280 Cr on PBT ₹35 Cr** (tax line −696%) = recognition of a **deferred tax asset** [V screener]. **Q4 FY26 PAT ₹65.7 Cr on PBT ₹40 Cr** = a further DTA credit (management: Q1 FY27 PAT of ₹42 Cr is "in line" once the DTA is removed) [V screener; V call].
   - FY26 PAT ₹160 Cr therefore contains a ~₹25 Cr DTA credit; tax rate 4% [V screener; E]. Normalised FY26 PAT at 25% tax ≈ ₹125 Cr [E].
   - EPS history pre-FY25 on screener (e.g., −₹23,904) reflects a pre-split/bonus share count — ignore.
6. **TVS SCS FY26 PAT (₹117 Cr) is flattered by a one-off InvIT gain.**
   - FY26 includes **₹177.2 Cr "TVS ILP InvIT gain"** (share of capital gain when TVS Industrial & Logistics Parks transferred assets to an InvIT) and **₹105.6 Cr of exceptional charges**; management's **"operational PAT" is ₹69.0 Cr** [V presentation]. Q1 FY26 PAT ₹71 Cr contained most of this (operational ₹8.8 Cr).
   - So the Q1 FY27 PAT "decline" (₹22.5 Cr vs ₹71.1 Cr) is actually **+156% on operational PAT** (₹22.5 vs ₹8.8 Cr) [V].
   - Company "adjusted EBITDA" (₹773 Cr) excludes ESOP, forex and redundancy; reported EBITDA ₹782.6 Cr; screener OP ₹778 Cr [V]. Immaterial differences.
7. **TVS SCS is mostly NOT an Indian business.** Q1 FY27 revenue: **India ₹998 Cr (30%), Rest of World ₹2,338 Cr (70%)** [V presentation]; FY26 ISCS Europe ~₹4,800 Cr was the single largest region [V presentation chart, E reading]. Our primer's "roughly half outside India" understates the foreign share. Consolidated margins mix UK/Europe contract logistics (low single-digit) with India (higher growth).
8. **Blue Dart: "shipments" and "tonnage" are not like-for-like across sources.**
   - Company FY26 slide: "**404 million shipments in eCommerce**" and "**1,439 thousand tonnes**" [V presentation; label as printed]. Q1 FY27: **364,430 tonnes and 96.15 million shipments** (all products) [V call]. 404m looks like total shipments rather than e-commerce only (96m × 4 ≈ 385m) [E; FLAG].
   - Mix: revenue **B2B 70% / B2C 30%**; **air 60% / ground 40% by revenue, 1:3 by kilos** [V call].
   - FY26 exceptional ₹44 Cr (Q3) = new Labour Codes provision [V presentation]; EBITDA quoted "before exceptional".
9. **CONCOR "market share" has three denominators.**
   - **Share of rail container traffic** (CONCOR vs private container train operators): EXIM 53.9%, domestic 55.9%, overall **54.5% in FY26** (55.9% FY25; ~74% in FY20) [V call; V screener "key points"].
   - **Share of a port's rail-borne boxes**: JNPT 60%, Mundra 35.4%, Pipavav 48.3% [V call].
   - **Rail coefficient** = share of a port's total containers moving by rail at all: **JNPT 15.12%, Mundra 24.6%, Pipavav 57.5%** (FY26) [V call]. JNPA's own H1 FY27 data show its rail share **falling to ~12.7% from ~14.8%** [V maritimegateway] — see §0.
10. **Market value and multiples are post-close 21-Oct-2026 and many stocks are near 52-week lows.** CONCOR ₹427 (low ₹421), Delhivery ₹389 (low ₹374), Blue Dart ₹4,387 (low ₹4,346) — all within ~1–4% of their 52-week lows; primers' m-caps (Jul–Aug 2026) are 10–22% higher [V screener; primers]. Delhivery's screener P/E of 244 is on TTM PAT ₹93 Cr (after integration costs) — n.m.

---

## 0. Top-line framing (what an expert leads with)

- **Five members, four different businesses, one common input: freight demand × diesel.**
  - **Rail container logistics (CONCOR):** state-owned, asset-heavy, 21.5% OP margin, ₹9,079 Cr revenue [V screener].
  - **Express parcel + PTL networks (Delhivery, Blue Dart):** ₹16,649 Cr combined revenue, 9.6% OP margin; Blue Dart premium/air-led (15.5%), Delhivery volume-led (6.1%) [E: sums of screener].
  - **Trucker fintech platform (BlackBuck):** ₹652 Cr revenue, 25.6% OP margin, 93% contribution margin on net revenue [V].
  - **Integrated contract logistics (TVS SCS):** ₹11,003 Cr revenue, 7.1% OP margin (≈2.7% pre-Ind-AS), 70% overseas [V; E].
  - **All five: FY26 revenue ₹37,383 Cr (+10.1%), OP ₹4,487 Cr (12.0%), reported PAT ₹1,923 Cr; m-cap ₹87,094 Cr on 21-Oct-2026 (45× FY26 PAT)** [E: sums of screener 21-Oct-26].
  - CONCOR alone earns **65% of the group's PAT** (₹1,246 of ₹1,923 Cr) on 24% of revenue [E].
- **The size of the prize was just re-measured — and it is half of what everyone said.**
  - The first systematic estimate (NCAER for DPIIT, released Sep-2025) put **India's logistics cost at 7.97% of GDP in FY24 (₹24.01 lakh crore)**, 8.84% in FY23 and 8.79% in FY22; 9.09% of non-services output [V Outlook Business, 25-Sep-2025]. The 13–14% figure long quoted (Armstrong & Associates 13% of GDP for 2016; CII/AVALON 10.9% of GVA for 2015) used different methods [V same].
  - Same study: rail costs **₹1.96/tonne-km**, air **₹72/tonne-km**; fuel is **42.1% of road freight cost**; logistics eats **~17% of output value for firms under ₹5 Cr turnover vs ~7.6% for firms above ₹250 Cr** [V].
  - Implication: India's problem is less "cost too high" than **modal mix (road-heavy), speed and small-firm fragmentation** — exactly the fault lines of the five members.
- **2026 brought the infrastructure the rail bull case waited 20 years for — and the volumes did not follow (yet).**
  - **Western DFC complete:** the final 102-km JNPT–New Saphale stretch had its trial on 31-Mar-2026; PM dedicated 326 route-km (New Sanand North–New Makarpura, New Umbergaon–New Saphale, New Saphale–New JNPT; cost ₹20,703 Cr) on **8-Sep-2026**; WDFC = **1,506 km Dadri–JNPT**; with the Eastern DFC the network is ~**2,843 km** [V JICA press release 8-Sep-2026; V-snip indiashippingnews]. JICA has lent ¥620.8 bn (₹37,658 Cr) to DFCCIL [V JICA].
  - CONCOR's CMD (May-2026) expected the JNPT rail coefficient to rise from **15% (FY26) to 19–21% in FY27 and 30–35% in three years**, and guided FY27 volumes **+9.5% (EXIM +8%, domestic +15%)** [V call].
  - **Reality so far:** CONCOR's **Q2 FY27 EXIM TEUs −0.07% YoY** (total +0.53%), after +9.8% in Q1 [V BSE filing; E derived]; at **JNPA itself, H1 FY27 boxes +17.6% (4.66m TEU) but rail-borne TEUs only +0.3% (590,004) and rakes −5.2%**, so **rail share fell to ~12.7% from ~14.8%** [V maritimegateway, Oct-2026]. The DFC is complete; the modal shift is not. H1 FY27 CONCOR is running at +4.5% vs a +9.5% guide [E].
- **Parcels: consolidation happened, in-sourcing is the counterforce.**
  - Delhivery bought Ecom Express (≤₹1,407 Cr, ~80% below Ecom's last ~₹7,000 Cr valuation) after Ecom lost Meesho, which had been ~52% of its revenue [V-snip; primer].
  - **Meesho's own Valmo** went from **1.8% of Meesho orders (FY23) → 19.6% (FY24) → 48.1% (FY25) → 64.5% (H1 FY26)** [V-snip Axis Capital, citing RHP], cutting Meesho's logistics cost per order from **₹50.45 (FY23) to ₹37.70 (Q1 FY26)** [V-snip]. Flipkart (Ekart) and Amazon (ATS) run in-house networks [K].
  - Yet **Delhivery's express volumes rose 55% YoY to 322m in Q1 FY27** (Ecom base effect; "robust" ex-Ecom), PTL +18% to 542 kt, and management says it gained share "from customers who have in-house logistics" [V presentation/call]. Guidance: FY27 express growth at the "upper end" of 20–30%; express service EBITDA 16–18% in H2 FY27 [V call].
  - **Shadowfax** (listed Jan-2026 at a 9% discount to its ₹124 IPO price) has since re-rated: **₹272, m-cap ₹15,997 Cr; FY26 revenue ₹4,202 Cr (+69%), OP ₹221 Cr (5%), PAT ₹112 Cr** [V screener]. It is now worth **55% of Delhivery** on 40% of its revenue — the market's verdict that quick-commerce/hyperlocal and Meesho-type volume is where growth is.
- **The West Asia shock tested pass-through — the asset-light and contract players passed it, the asset-heavy carried it.**
  - Diesel +8.6% in ten days (15–25 May 2026) [V]. Delhivery: PTL contracts are fuel-indexed monthly, "97–98% covered", only ~6 paise of a 37-paise PTL yield gain was fuel [V call]. Blue Dart: monthly fuel-surcharge reset; Q1 FY27 revenue +15% on tonnage +~7% and shipments +~2% — i.e., price/surcharge-led [V call; V screener].
  - BlackBuck: "a very tough April" for truck movement, tolling transactions −3% QoQ, GTV +16% YoY [V call].
  - CONCOR: its Middle-East container service (~700 boxes under its own bill of lading) "stopped because of the conflict" [V call].
- **Valuations price a recovery that the volume data has not yet confirmed (screener 21-Oct-26):**
  - CONCOR **26.1× FY26 PAT, 2.5× book, 2.0% yield**; FII holding collapsed from 19.6% (Dec-23) to **8.1%** (Sep-26) while DIIs rose to 30.0% [V].
  - Delhivery **~190× FY26 reported PAT** (n.m.), 3.0× book, ~48× FY26 OP on gross debt [E]; FIIs 62.7% → **39.5%**, DIIs 17.0% → **46.0%** in eleven quarters [V].
  - Blue Dart **42× FY26 PAT (32× TTM), 5.9× book**, ~12× EV/OP [V; E].
  - BlackBuck **63× FY26 PAT (59× TTM), 7.1× book**; FIIs 11.7% → 31.0% since listing [V].
  - TVS SCS **43× reported FY26 PAT but ~73× operational PAT**, 2.5× book, ~10× EV/OP on gross debt [V; E].

---

## 1. What the sub-sector does: services, value chain, where value is captured

### 1.1 Services (by member)

| Service | What it is | Typical customer | Members |
|---|---|---|---|
| **Rail container haulage (EXIM)** | Moves import/export boxes port ↔ inland container depot (ICD) by container train; pays Indian Railways a haulage charge | Shipping lines, freight forwarders, exporters/importers (auto parts, textiles, polymers, solar parts, reefers) | CONCOR (4.21m EXIM TEU handled FY26) [V call] |
| **Rail container haulage (domestic)** | City-to-city boxes (cement in tank containers, food grain, steel, FMCG, gunny bales, tiles) | Manufacturers, FCI, cement cos | CONCOR (~1.37m TEU FY26 [E: 5.58 − 4.21]) |
| **Terminal / ICD / MMLP services** | Lift-on/lift-off, storage, ground rent, customs bonding, warehousing, first/last-mile trucking, cold chain | Same | CONCOR (65+ terminals [primer]), private CTOs |
| **Express parcel (B2C)** | Pick-up, line-haul (road/air), hub sortation, last-mile delivery, COD collection, returns | E-commerce marketplaces (Meesho, Flipkart, Amazon), D2C brands, social sellers | Delhivery (322m in Q1 FY27), Blue Dart (B2C ~30% of revenue), Shadowfax, Xpressbees, DTDC, Ecom (now Delhivery), Valmo/Ekart/ATS (captive) |
| **Express B2B / documents / time-definite air** | Overnight, guaranteed-time domestic express; dangerous goods; high-value | Banks, pharma, auto aftermarket, electronics | Blue Dart (own 8 freighters), Delhivery (belly + charters), DHL/FedEx (intl) |
| **PTL (part-truckload)** | Palletised B2B freight on shared hub-and-spoke | SMEs, auto aftermarket, FMCD, industrial | Delhivery (~2 MT FY26 [primer]; 542 kt Q1 FY27 [V]), TCI, VRL, Gati (Allcargo), Safexpress, Rivigo (Mahindra Logistics) |
| **FTL / freight exchange** | Full-truck brokering; matching shippers to truckers | Manufacturers, 3PLs | Delhivery (Orion), BlackBuck (Superloads in 14 cities), TVS SCS, many unorganised brokers |
| **Trucker payments & SaaS** | FASTag tolling, fuel cards, GPS telematics, load classifieds, fleet docs, vehicle finance | Small fleet owners (1–5 trucks) | BlackBuck (883k monthly transacting truck operators, ₹7,045 Cr tolling GTV in Q1 FY27) [V] |
| **Integrated supply chain (contract logistics)** | In-plant logistics, line-side feeding, warehousing, aftermarket spares, sourcing & procurement, closed-loop/reverse | Auto OEMs, industrial, defence, rail/utilities, consumer, tech | TVS SCS (ISCS 75% of FY26 revenue), Mahindra Logistics, Delhivery SCS (₹729 Cr FY26) [V] |
| **Global freight forwarding** | Ocean/air forwarding, customs | Importers/exporters | TVS SCS (GFS 25%), Delhivery (cross-border), DHL Global Forwarding, Allcargo/ECU |

### 1.2 Value chains (inputs → customer)

1. **EXIM container by rail (CONCOR model):** shipper's factory → first-mile truck → ICD (customs stuffing, bonded) → CONCOR rake (90 boxes single-stack; up to ~180 double-stack on DFC) on Indian Railways track/traction (haulage charge ~55–65% of rail revenue [E]) → port terminal (JNPT/Mundra/Pipavav) → ship. Imports reverse. CONCOR earns rail margin (FY26 rail freight margin 27.16%) plus terminal charges [V call]. Empty running (repositioning) is the big hidden cost — CONCOR cut EXIM empty running 27% in FY26 [V call].
2. **Road-only EXIM (the competitor):** factory → truck (one or two boxes) → port. Door-to-door, no first/last-mile handoffs; wins on transit time and reliability; loses on cost beyond ~500–700 km [E]. CONCOR's CMD: "rail point-to-point is still cheaper than road… the challenge… is the transit time" [V call].
3. **Express parcel (Delhivery model):** seller pick-up (or seller drop at partner centre) → first-mile centre → gateway/automated sort centre (Delhivery 136 gateways, 48 automated sort centres, 73 sorters, 23.3m sq ft infra) → line-haul (own-leased trucks, ~20,663 daily avg fleet; air belly) → destination processing centre → express delivery centre (4,266) → rider (82,768 partner agents + 75,074 team) → doorstep; COD remittance; returns (RTO) back [V Q1 FY27 presentation].
4. **Air express (Blue Dart model):** pick-up → hub → **own night freighter network** (Blue Dart Aviation: 6 × Boeing 757-200 + 2 × Boeing 737-800) → metro hubs → ground last mile; 56,400+ locations covered; 13,300+ employees [V presentation]. Freighter pallet utilisation 85–90% [V call].
5. **Trucker lifecycle platform (BlackBuck model):** truck operator onboarded via physical touchpoints in 10K+ distribution points (80%+ district presence) → buys FASTag/recharges (toll GTV) → fuel card → GPS device subscription (telematics) → posts/finds loads (classifieds, Superloads managed FTL) → vehicle loan (Blackbuck Finserve NBFC + partners) [V presentation; primer]. BlackBuck earns fees/float/subscription; never owns trucks.
6. **Contract logistics (TVS SCS model):** multi-year contract → TVS runs customer's warehouse/in-plant operation (435 warehouses, 25.1m sq ft managed: India 19.6m, Europe 2.2m, N America 2.0m, APAC 1.3m) with its people (16,500 employees) and IT (control tower, WMS) → bills on cost-plus / per-transaction / gain-share [V presentation].

### 1.3 Where value is captured
- **Density and network effects** capture value in parcels/PTL: the last 10% of volume through a fixed network is almost pure margin (Delhivery Express service EBITDA rose from 15.1% in Q2 FY25 to 18.8% in Q4 FY26 as volumes rose) [V presentation].
- **Scarce physical nodes** capture value in rail: terminals on railway land near cargo clusters and rail paths; CONCOR's terminal network is the moat, not the trains [primer].
- **Control of the clock** captures value in time-definite air express: Blue Dart's own freighters — B2B air yields support a 15–17% consolidated EBITDA margin vs 5–8% for road-led express [V; E].
- **Habit and data** capture value on trucker platforms: payments wedge (tolling GTV ~₹25,904 Cr FY26 vs revenue ₹652 Cr = ~2.5% "take" on toll GTV-equivalent, though revenue includes telematics/loans) [primer; E].
- **Switching costs and embeddedness** capture value in contract logistics — but margins stay thin because customers re-tender (TVS customer churn −₹126 Cr in one year's bridge) [V presentation].
- **The unorganised truck operator captures little:** ~85% of India's trucks are owned by operators with fewer than 20 trucks and a majority by 1–5-truck owners [K, BlackBuck RHP/CRISIL; FLAG figure].

---

## 2. Size and growth

### 2.1 The whole logistics market
| Metric | Value | Source |
|---|---|---|
| Logistics cost FY24 | **₹24.01 lakh crore = 7.97% of GDP** (≈ US$253 bn at ₹94.9) | NCAER/DPIIT via Outlook Business [V]; USD [E] |
| Logistics cost FY23 / FY22 (% GDP) | 8.84% / 8.79% | same [V-snip maritimegateway/indiaseatradenews] |
| As % of non-services output FY24 | 9.09% | [V] |
| Old benchmark | 13–14% of GDP (Armstrong 2016: 13%); 10.9% of GVA (CII/AVALON 2015) | [V] |
| US / Germany / Australia comparators | 8.8% / 8% / 8.6% (commentary) | [V-snip indiaseatradenews] |
| Logistics cost growth FY24→FY27 | at ~10–11% nominal GDP growth → ~₹29–30 lakh crore by FY27 [E] | [E] |
| Organised / listed share | The five members' FY26 revenue ₹37,383 Cr ≈ **1.4–1.5% of the ~₹26–27 lakh crore FY26 logistics spend** [E] | [E] |

### 2.2 Segments (best available)
| Segment | Size / volume | Growth | Source |
|---|---|---|---|
| Road freight | ~60–65% of freight tonne-km; ~₹10–12 lakh crore revenue pool [E] | ~8–10% nominal | [K NITI/World Bank estimates; E] |
| Rail freight (Indian Railways) | **1,670 MT loaded FY26 (+3.25%)**; wagons 29.18m (+4.56%) | 3% | [V indianinfrastructure, 6-Apr-2026] |
| Rail container | **93.69 MT FY26** (5.6% of IR tonnage) | — | [V same] |
| Rail container TEUs (CONCOR + private) | CONCOR handled 5.58m TEU at 54.5% rail share → rail container market ~**10m TEU handled** [E] | ~8–10% FY26 | [V call; E] |
| Ports — JNPA | **8.17m TEU FY26 (+11.94% from 7.30m)**; 102 MT total cargo | +12% | [V maritimegateway] |
| Ports — JNPA H1 FY27 | **4,661,517 TEU (+17.61%)** | — | [V] |
| Ports — Mundra | ~4.1m TEU (H1-2025 Alphaliner annualised estimate; FLAG) | — | [V-snip] |
| All-India container TEU | ~**13–14m TEU FY26** (major + non-major) [E; FLAG — national total not found] | ~8–10% | [E] |
| Air cargo | **3.7 MT FY25 (+10%)**: intl 2.32 MT (+14%), domestic 1.39 MT (+6%); **Q1 FY27 1.08 MT (+12%)**: intl 678,821 t (+14%), domestic 397,398 t (+9%); **Jun-2026 record 364,289 t** | +10–12% | AAI via indiaseatradenews/stattimes [V-snip] |
| Express parcel | **10–11 bn shipments FY25**; e-commerce >50% (4.8–5.5 bn); traditional courier ~17% (~2 bn); FY30 **24–29 bn** (19–23% CAGR) | ~20% | Redseer via maritimegateway (29-Mar-2025) [V] |
| Express parcel value | ~₹45,000–55,000 Cr FY25 at ₹45–50 per shipment blended [E; FLAG] | — | [E] |
| Contract logistics / warehousing | ~₹1.0–1.5 lakh crore [E; FLAG] | 12–15% | [E] |
| Trucker tolling (FASTag CV) | BlackBuck GTV ₹25,904 Cr FY26 = ~32.9% share (FY24 RHP basis) → CV toll pool ~₹75,000–80,000 Cr [E] | ~low-to-mid single digit NETC growth in Q1 FY27 | [primer; V call; E] |

### 2.3 Sub-sector revenue and growth (the five, screener consolidated) [V/E]
| | FY22 | FY23 | FY24 | FY25 | FY26 | 4-yr CAGR |
|---|---|---|---|---|---|---|
| CONCOR | 7,653 | 8,169 | 8,653 | 8,887 | 9,079 | 4.4% |
| Delhivery | 6,882 | 7,225 | 8,142 | 8,932 | 10,508 | 11.2% |
| Blue Dart | 4,410 | 5,172 | 5,268 | 5,720 | 6,141 | 8.6% |
| BlackBuck | 119 | 176 | 297 | 427 | 652 | 53% |
| TVS SCS | 9,250 | 9,994 | 9,200 | 9,996 | 11,003 | 4.4% |
| **Total** | **28,314** | **30,736** | **31,560** | **33,962** | **37,383** | **7.2%** |
- FY25→FY26 +10.1%; ex-Delhivery (Ecom-boosted), +7.4% (₹26,875 Cr vs ₹25,030 Cr) [E].
- PAT total: FY22 1,052−1,011+382−285−46 = **₹92 Cr**; FY23 1,173−1,008+371−290+42 = **₹288 Cr**; FY24 1,262−249+301−194−90 = **₹1,030 Cr**; FY25 **₹1,688 Cr**; FY26 **₹1,923 Cr** [E: sums of screener]. The group's profit pool has gone from ~zero to ~₹1,900 Cr in four years, almost entirely from Delhivery/BlackBuck/TVS losses ending; CONCOR and Blue Dart PAT were flat-to-down.

---

## 3. Demand drivers and end-markets

1. **Goods GDP and EXIM trade.** India FY26 merchandise exports **US$441.8 bn (+0.9%)**, imports **US$774.9 bn (+7.45%)** (as quoted by CONCOR's CMD) [V call]. CONCOR's EXIM handling grew 8% in FY26; exports +3% (auto parts +17%, buffalo meat +19%, aluminium ingots +22%), imports +5.8% (auto parts +38%, solar parts +92%, polymers +23%); reefer exports +17% [V call]. US tariffs (up to 50% in FY26) hit textiles and marine products [V call].
2. **E-commerce and quick commerce.** Express parcel market ~20% volume CAGR to FY30 [V Redseer]. Quick commerce substitutes some small-ticket express (groceries, electronics accessories) but Delhivery says it serves q-commerce "inventory movement to dark stores" and deliberately does not run dark stores or q-commerce last mile ("not a differentiated capability") [V call]. Delhivery Direct (C2C/SME) GMV ~₹150 Cr run-rate vs ₹250 Cr FY27 plan [V call].
3. **Manufacturing, autos and China+1.** TVS SCS customer mix FY26: industrial 32%, automotive 25%, consumer 14%, tech & tech infra 12%, rail & utilities 7.5%, healthcare 2.4%, others 4.6% (reading of chart) [V presentation]. TVS India ISCS +30% YoY in Q1 FY27; GFS India +84% [V].
4. **Infrastructure and trucks on roads.** Truckers' toll transactions (BlackBuck 17.84 crore in Q1 FY27, +12%) proxy highway freight; management says NETC-wide GTV grew "very small single digit" and CV toll GTV "higher single digit" in Q1 FY27 [V call]. **GST 2.0 cut CV GST from 28% to 18% (22-Sep-2025)**, cutting HCV prices by ₹2.8–4.65 lakh (Tata Motors) — supports truck sales, telematics device sales (BlackBuck had its "highest ever" quarter of new devices) and vehicle finance [V-snip; V call].
5. **E-way bills (the best high-frequency freight indicator).** Jul-2026 **13.98 crore** ("nears record high") [V-snip indiaseatradenews, 12-Aug-2026]; Oct-2025 12.69 crore (−4% MoM after a Sep-2025 high around GST 2.0) [V-snip Business Standard]. FY-level series not fetched — see §H. At ~13–14 crore a month, FY27 is tracking ~160–165 crore e-way bills [E].
6. **Bulk-to-container shift on rail.** Cement in tank containers (CONCOR target ≥1 MT in FY27; 500 tank containers in fleet, 200 added a month, +3,000 approved), food grain in lined containers, gas/LNG (talks with GAIL, Petronet) [V call]. CONCOR domestic does 14–15 MT a year [V call].
7. **Labour and urbanisation.** "Chronic labour shortages across the industry" in Apr–Jun 2026 plus Labour Codes cost Delhivery margin; Blue Dart booked ₹44 Cr exceptional for Labour Codes in Q3 FY26 [V call; V presentation].

---

## 4. Supply side and cost structure

### 4.1 Key inputs and price drivers
| Input | Who it hits | Driver | Pass-through |
|---|---|---|---|
| **Diesel** | Road line-haul (Delhivery, TVS, BlackBuck's customers), Blue Dart ground; ~42% of road freight cost [V NCAER] | Brent, excise, OMC pricing; Delhi diesel ₹87.67 → ₹95.20 in May-2026 [V] | Monthly fuel-indexed contracts (Delhivery PTL 97–98% covered; Blue Dart fuel surcharge reset monthly) [V calls]; 1-month lag |
| **ATF (jet fuel)** | Blue Dart Aviation (largest single cost of the airline), Delhivery air belly | Brent + crack, monthly ATF revision | Blue Dart fuel surcharge [V call] |
| **Rail haulage charges** | CONCOR (largest cost line) | Indian Railways tariff policy; empty-flat charges; double-stack pricing | CONCOR prices to market; RFM 25.65% → 27.16% FY26 [V call] |
| **Land licence fee (LLF)** | CONCOR | **Sep-2022 CCEA: 1.5% of land market value p.a., lease up to 35 years** (was 6% rising 7%/yr) [primer; K] | Fixed cost |
| **Labour (wages, riders, gig)** | Delhivery (wages ₹515 Cr corporate + network), TVS SCS (employee cost ₹2,502 Cr = 23% of revenue), Blue Dart | Labour Codes, gig welfare, shortages | Contractual escalators (TVS), GPI (Blue Dart 4–5%) [V] |
| **Real estate (warehouses, hubs)** | Delhivery (23.3m sq ft), TVS (25.1m sq ft) | Grade-A rents | Ind-AS 116 lease cost |
| **Aircraft leases & maintenance** | Blue Dart | USD lease rates, engine cycles | Embedded in yield |
| **Technology** | All; Delhivery tech ₹221 Cr FY26 [V] | Cloud, automation | — |
| **Credit cost** | BlackBuck vehicle finance | Trucker cash flows, freight rates | Pricing of loans |

### 4.2 "Where ₹100 of revenue goes" — four archetypes [E composites from FY26 reported lines]

**(a) CONCOR (rail container, FY26 consolidated, ₹9,079 Cr = 100)** [E: screener + call]
| Item | ₹ of 100 |
|---|---|
| Rail haulage paid to Indian Railways + terminal & other operating costs (incl. road first/last mile, handling) | ~70 |
| Employee cost | ~3–4 |
| LLF + other admin | ~5 |
| **Operating profit (screener)** | **21.5** |
| Depreciation | 6.8 |
| Interest | 0.9 |
| Other income (treasury on ~₹4–5k Cr cash/deposits [E]) | +4.3 |
| Tax (~25%) | ~4.6 |
| **PAT** | **13.7** |

**(b) Delhivery (express + PTL, FY26, revenue ₹10,486 Cr = 100)** [V presentation lines; E]
| Item | ₹ of 100 |
|---|---|
| Freight, handling and servicing costs (line-haul, last-mile partners, sortation) | ~70 |
| Employee benefit (incl. ~₹100 Cr ESOP) | ~14.6 |
| Other expenses (incl. Ecom integration ~₹148 Cr) | ~7.5 |
| **Reported EBITDA (≈ screener OP)** | **~6.1** |
| Depreciation (PPE ~3, right-of-use ~3.3, intangibles) | 6.6 |
| Finance cost (almost all lease interest) | 1.4 |
| Other income (treasury on ~₹3.6k Cr investments) | +3.2 |
| Associates, tax | ~0 |
| **PAT** | **1.5** |
| Memo: cash lease rent ~₹420 Cr (4.0 points) → **adjusted EBITDA 4.4** | |

**(c) Blue Dart (air + ground express, FY26 consolidated, ₹6,141 Cr = 100)** [E: screener; presentation]
| Item | ₹ of 100 |
|---|---|
| Network operating costs (fuel/ATF, ground transport, handling, airport, aircraft maintenance) | ~58 |
| Employee cost | ~17–18 |
| Other expenses | ~9 |
| **EBITDA (consol., pre-exceptional 16.05%; screener 15.5%)** | **15.5** |
| Depreciation (incl. aircraft & hub RoU) | 8.7 |
| Interest (leases) | 1.4 |
| Exceptional (labour codes) & other income | −0.7 |
| Tax | 1.3 |
| **PAT** | **4.0** |

**(d) TVS SCS (contract logistics + forwarding, FY26, ₹11,003 Cr = 100)** [V presentation P&L]
| Item | ₹ of 100 |
|---|---|
| Material-related costs (sourcing & procurement pass-through) | 18.6 |
| Freight, clearing, forwarding & handling | 27.3 |
| Sub-contracting | 14.1 |
| Employee benefits | 22.7 |
| Other expenses | 10.2 |
| **EBITDA (reported 7.1%; adjusted 7.0%)** | **7.1** |
| RoU depreciation | 3.7 |
| Other D&A | 1.5 |
| Finance cost + lease interest | 1.4 |
| **Adjusted PBT** | **0.9** |
| InvIT gain (+1.6) − exceptional (−1.0) − tax (−0.5) | |
| **PAT reported / operational** | **1.1 / 0.6** |

**(e) BlackBuck (platform, Q1 FY27, net revenue ₹165 Cr = 100)** [V presentation]
| Item | ₹ of 100 |
|---|---|
| Direct costs | 7.4 |
| **Contribution margin** | **92.6** |
| Operating expenses: employee, marketing, tech, Superloads investment, G&A (₹98.1 Cr) | ~59.5 |
| **Adjusted EBITDA** | **33.1** (on revenue from ops: 26.8%) |
| ESOP | 3.0 |
| D&A | 13.7 |
| Other income | +9.9 |
| **PAT** | **25.6** |

### 4.3 Capacity, assets and utilisation
| Company | Physical capacity (latest) | Utilisation / productivity |
|---|---|---|
| CONCOR | **423 rakes** (43 high-speed rakes added FY26); **57,746 own containers** (+4,729 in FY26); 500 tank containers (+3,000 approved); 230 LNG trucks; 65+ terminals; double-stack rakes **6,396 in FY26 (+1.5% from 6,302)** [V call; primer] | Rail: originating Q4 FY26 EXIM 5,49,273 + dom 1,29,065 = 6,78,338 TEU [V call]; FY26 ~5.58m handled TEU / 423 rakes ≈ 13,200 TEU per rake-year [E] |
| Delhivery | 23.3m sq ft infra; 136 gateways; 48 automated sort centres; 73 sorters; 141 freight service centres; 4,266 express delivery centres; ~20,663 trucks daily avg (mostly leased/partner); 18,810 PIN codes [V presentation] | Q1 FY27: 322m express parcels (≈3.5m/day); 542 kt PTL; revenue/employee ~₹15.6 lakh annualised (₹2,931 Cr × 4 ÷ 75,074) [E] |
| Blue Dart | 8 freighters (6 B757-200, 2 B737-800); 56,400+ locations; 13,300+ employees; two new hubs in North FY26; planned Bangalore/Chennai/Mumbai consolidation [V presentation/call] | Pallet utilisation 85–90% [V]; Q1 FY27 364,430 t, 96.15m shipments [V]; revenue per employee ~₹46 lakh (₹6,141 Cr ÷ 13,300) [E] |
| BlackBuck | Asset-light: 10K+ physical touchpoints; app with 44 min daily use; NBFC Blackbuck Finserve [V presentation; primer] | 883,386 monthly transacting truck operators; 458,919 using ≥2 services [V] |
| TVS SCS | 435 warehouses, 25.1m sq ft; 26 countries; 16,500 employees; 7,100+ active customers; 100 Fortune Global 500 clients [V presentation] | Revenue per employee ~₹67 lakh (₹11,003 Cr ÷ 16,500 permanent staff; inflated by pass-through) [E] |

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)
| Segment | Structure | Shares (basis) | Source |
|---|---|---|---|
| Rail container (CTOs) | Liberalised 2006 (~15–18 licences issued); CONCOR + ~10 active private operators | **CONCOR 54.5% of rail container traffic FY26** (EXIM 53.9%, domestic 55.9%); was ~74% in FY20; 53.8%/55.88%/54.35% at 9M FY26 | [V call; V screener key points] |
| Port rail share (JNPT) | JNPT rail coefficient 15.1% FY26; H1 FY27 ~12.7% | CONCOR ~60% of JNPT rail boxes; Mundra 35.4%; Pipavav 48.3% | [V call; V maritimegateway] |
| Express parcel (all) | 10–11 bn shipments FY25; captive (Valmo, Ekart, ATS) + 3PL (Delhivery, Shadowfax, Xpressbees, DTDC, Blue Dart, India Post, Ecom→Delhivery) | Ecom ~9% of express FY25 (Equitec); Ecom had ">27% of 3PL B2C e-commerce shipments" FY24 (DRHP) — different denominators | [V-snip] |
| Express parcel (Delhivery) | Q1 FY27 322m ≈ 1.3 bn annualised vs a ~12–13 bn FY27 market [E] | ~10% of all express parcels; ~20–25% of 3PL e-commerce [E; FLAG] | [V; E] |
| Air express (B2B domestic) | Blue Dart dominant; DHL (parent) for international; Delhivery/Gati/DTDC via belly | Blue Dart "dominant market leadership B2B Air Express" (company claim) | [V presentation] |
| PTL | Highly fragmented; Delhivery (~2 MT/yr), TCI, VRL, Safexpress, Gati, Rivigo | Delhivery claims #1 organised PTL by volume [primer; FLAG] | — |
| Road FTL | ~85%+ unorganised; millions of small owners; brokers | BlackBuck 27.5% of truck operators transacting on platform (RHP) and 32.9% of CV toll payments (FY24) | [primer, citing RHP] |
| Contract logistics | Fragmented; TVS SCS "India's largest integrated supply chain solutions provider" (company claim); Mahindra Logistics, DHL Supply Chain, Kuehne+Nagel, Allcargo, Delhivery SCS | — | [V presentation] |

### 5.2 Unlisted heavyweights, MNCs, PE and in-house fleets
- **Captive e-commerce logistics:** **Ekart** (Flipkart/Walmart; also sells 3PL services), **Amazon Transportation Services**, **Valmo** (Meesho — an orchestration layer of ~18K logistics partners and ~1.2 lakh last-mile agents, not an owned fleet), **Myntra/Nykaa/Reliance** own networks [V-snip; K].
- **Private CTOs/terminal owners:** Adani Logistics (ICDs + rakes, Mundra ecosystem), **DP World** (Hind Terminals/Container Rail Road Services; JNPT terminals NSICT/NSIGT), APM Terminals (Gateway Terminals India, JV with CONCOR at JNPT), **Gateway Distriparks** (listed; rail ICDs north-west; rail ~73% of revenue [primer]), Allcargo/ Gati, Hind Terminals, PSA (BMCT at JNPA; MoU with CONCOR for JNPA–ICD services) [V call; K].
- **Parcel 3PLs:** **Shadowfax** (listed Jan-2026; ₹4,202 Cr FY26), **Xpressbees** (unlisted; PE-backed — Blackstone, TPG, ChrysCapital [K]), **DTDC** (unlisted; Lightrock/ Pragnya [K]), Ecom Express (now Delhivery), India Post (MoU with Blue Dart Oct-2026) [V screener].
- **MNCs:** DHL group (Blue Dart 75%; DHL Supply Chain India; DHL Global Forwarding), FedEx, UPS (JV exit), Kuehne+Nagel, DB Schenker (now DSV), Maersk (rail and inland via own services), CMA CGM (NSFT terminal at JNPA with JM Baxi; H1 FY27 boxes +123%) [V maritimegateway; K].
- **Listed peers outside this member list:** Shadowfax (SHADOWFAX), Gateway Distriparks, Allcargo Logistics / Allcargo Gati, TCI, VRL Logistics, Mahindra Logistics, Transport Corporation of India, Aegis, JSW Infrastructure, Adani Ports (owns Adani Logistics) [K].
- **Ownership of the five (Sep-2026, screener):** CONCOR GoI 54.80%; Blue Dart DHL 75.00%; BlackBuck founders 24.99%; TVS SCS promoter group (TVS Mobility / T.S. Rajam family) 43.03%; Delhivery has **no promoter** (FIIs 39.54%, DIIs 45.95%) [V].

### 5.3 Imports, China and global players
Logistics is a non-tradable service, so "imports" bite through (i) foreign shipping lines and terminal operators capturing the ocean and port legs (India has almost no national container line — CONCOR holds 30% of the new **Bharat Container Shipping Line** [V call]), (ii) foreign 3PLs (DHL, Kuehne+Nagel, DSV) taking MNC contract logistics, and (iii) imported equipment (Chinese containers and tank containers, sorters, telematics hardware). China's relevance is indirect: China+1 manufacturing relocation lifts Indian EXIM and contract-logistics demand (TVS GFS India +84% in Q1 FY27) [V].

---

## 6. Business-model archetypes and their economics

| Archetype | Members | Revenue driver | Cost structure | FY26 OP margin | ROCE (screener FY26) | Capex/revenue (FY26) | Asset turnover (rev ÷ net block+CWIP) |
|---|---|---|---|---|---|---|---|
| **1. Asset-heavy rail container + terminals** | CONCOR | TEUs × lead × rate + terminal charges | Haulage (variable, paid to IR), LLF, depreciation on rakes/terminals | 21.5% | 13% | 12.5% (₹1,138 Cr [E: CFO−FCF]) | 1.12× |
| **2. Asset-heavy air express** | Blue Dart | Tonnes/shipments × yield + fuel surcharge | Aircraft (leased), hubs, people — high fixed cost | 15.5% | 16% | 5.1% (₹312 Cr) | 2.98× |
| **3. Asset-light network express/PTL** | Delhivery (also Shadowfax) | Parcels × yield per parcel; tonnes × ₹/kg | Leased line-haul, partner last mile, leased hubs; semi-variable | 6.1% | 1% | 3.9% (₹405 Cr) | 1.93× (goodwill/intangibles excluded) |
| **4. Contract / integrated supply chain** | TVS SCS | Contracted service fees (cost-plus/transactional) + forwarding gross revenue | People + leased warehouses + subcontractors; pass-through | 7.1% (≈2.7% pre-Ind-AS) | 10% | 2.4% (₹265 Cr) | 3.83× |
| **5. Platform / fintech for truckers** | BlackBuck | Transacting operators × services × take (fees, subscriptions, float, interest) | Tech, distribution, Superloads ops; 93% contribution margin | 25.6% | 13% | 17% (₹111 Cr, incl. telematics devices) | 5.5× |
- **Returns ranking (screener ROCE FY26):** Blue Dart 16% > CONCOR 13% ≈ BlackBuck 13% > TVS SCS 10% > Delhivery 1% [V]. Five-year average ROE: Blue Dart 25%, CONCOR 10%, Delhivery −6%, TVS −1%, BlackBuck n.m. [V screener ranges].
- **The asset-heavy paradox:** CONCOR has the highest margin but the lowest asset turnover (1.1×) and a 13% ROCE — similar to BlackBuck's with 1/50th of the fixed assets. Blue Dart's leased fleet gives it the best ROCE in the group.
- **Working capital:** Blue Dart −35 working-capital days, TVS −21 (payables 320 days vs debtor 55 — supplier-funded), BlackBuck −22, CONCOR +2, Delhivery +37 (debtor 48 days) [V screener FY26].

---

## 7. Regulation and policy

### 7.1 National Logistics Policy and PM Gati Shakti
- **PM Gati Shakti National Master Plan** launched 13-Oct-2021 (GIS-based infrastructure planning across 16+ ministries) [K].
- **National Logistics Policy (NLP)** launched 17-Sep-2022: targets (i) cut logistics cost to global benchmarks by 2030, (ii) India into the **top 25 of the World Bank LPI by 2030**, (iii) data-driven decision support; tools ULIP (Unified Logistics Interface Platform), LDB (Logistics Data Bank, container tracking via RFID), E-LogS, the LEADS state ranking [K, PIB 2022].
- **World Bank LPI 2023: India 38th of 139 (from 44th in 2018)** [K, World Bank LPI 2023]; next LPI edition not yet published [K; FLAG].
- **LEADS** (Logistics Ease Across Different States) annual ranking by DPIIT; the 2024/2025 editions classify states as Achievers/Fast Movers/Aspirers [K; FLAG — not re-fetched].
- **The NCAER/DPIIT cost study (Sep-2025)** reset the baseline to 7.97% of GDP (FY24) [V]. A DPIIT official said repeat studies are not assured [V Outlook Business].

### 7.2 Railways (CONCOR)
- **National Rail Plan (2020/2021):** raise rail's freight modal share to **45% by 2030** and average freight train speed to 50 km/h [V-snip CAG press release, Nov-2025]. Baseline ~27% (2022 ministry figure; other estimates 18–28%) [V-snip]. FY26 IR loading 1,670 MT (+3.25%) is far below the growth needed (road keeps gaining share) [V; E].
- **Dedicated Freight Corridors:** EDFC (~1,337 km, Sahnewal/Ludhiana–Sonnagar) fully commissioned by 2024 [K]; **WDFC 1,506 km Dadri–JNPT completed 2026** (final trial 31-Mar; dedication 8-Sep) [V]. ~2,843 km total [V-snip]. Future corridors (East Coast, East–West, North–South) proposed, not sanctioned [K; FLAG].
- **Gati Shakti Cargo Terminals (GCT) policy (Dec-2021):** private terminals on/near railway land; **115 of 132 approved GCTs commissioned by Aug-2025** [V-snip CAG] — new competition for CONCOR's terminals.
- **Land licence fee policy (CCEA, 7-Sep-2022):** railway land leased for cargo terminals at **1.5% of market value per year for up to 35 years** (vs 6% with 7% annual escalation earlier) [primer; K]. The old LLF had hammered CONCOR's FY21 margin (OPM 16% in FY21 vs 26% in FY20) [V screener; primer].
- **Haulage and policy reforms:** CONCOR's CMD expected "various reforms for container sector" from Indian Railways in mid-2026 [V call]; assured-transit services; liberalised DPD (direct port delivery) and cabotage policy at CONCOR (+38% DPD volumes FY26) [V call].
- **Privatisation:** CCEA (Nov-2019) approved strategic sale of 30.8% with management transfer; stalled [K; primer].

### 7.3 Roads, tolls and trucks (BlackBuck, Delhivery, TVS)
- **FASTag/NETC** mandatory since 15-Feb-2021 [K]; NHAI rule changes (blacklisting, KYV) and the private-car **FASTag annual pass (₹3,000, from 15-Aug-2025)** do not apply to commercial vehicles [K; FLAG]. A regulatory change to toll-payment economics is BlackBuck's biggest single risk (tolling >60% of revenue) [primer].
- **GST 2.0 (22-Sep-2025):** CVs 28% → 18%; GTA services: the 12%-with-ITC option became 18%-with-ITC, 5%-without-ITC retained [V-snip Lakshmikumaran & Sridharan briefing]. Warehousing/3PL services 18% [K].
- **E-way bill** (since Apr-2018) for consignments >₹50,000 — the freight-tracking backbone and a data source [K].
- **Diesel taxation:** excise cut 26-Mar-2026 [K-brief], pump prices raised four times in May-2026 [V].

### 7.4 Air (Blue Dart)
- Cargo-friendly policies: National Civil Aviation Policy 2016, Air Cargo Policy (2019 draft), freighter-airline permits; ATF outside GST (state VAT up to ~25–30% in some states) [K]. DGCA approvals for freighter imports; 8-aircraft fleet reflects slow additions.

### 7.5 Labour and gig workers
- **Four Labour Codes** notified/operational in FY26 (Blue Dart ₹44 Cr exceptional; Delhivery "changes to the statutory labour codes" flagged as Q1 FY27 cost pressure) [V]. Social-security code covers gig/platform workers (aggregator contribution 1–2% of turnover, capped at 5% of payouts) [K; FLAG].

### 7.6 Trade policy and US tariffs
- US tariffs on Indian goods rose to 50% in Aug-2025 (IEEPA 25% + 25% Russia-oil penalty) [K], struck down 20-Feb-2026; Sec 122 10% to 24-Jul-2026; now 10% Sec 301 + MFN [K-brief]. CONCOR cites textiles and marine products as hit [V call]. India–UK CETA (signed Jul-2025) and India–EU FTA talks matter for TVS SCS's European customers [K].

---

## 8. History and cycles (narrative; full timeline in §G)

- **1988–2006: CONCOR monopoly.** CONCOR incorporated Mar-1988 as a Railways PSU; sole container train operator until 2006 [K]. Listed 1994 [K].
- **1983–2005: Blue Dart** founded 1983 (partnership), IPO 1994, Blue Dart Aviation; **DHL bought 81% in 2005**, cut to 75% by OFS in Nov-2012 [V screener about; V presentation].
- **2006–2012: CTO liberalisation.** ~15+ private container train licences; CONCOR share falls gradually [K].
- **2011–2020: e-commerce logistics boom.** Delhivery founded 2011; Ecom Express 2012; Shadowfax 2015; Xpressbees 2015; BlackBuck 2015 [K]. Massive VC funding; price wars; Flipkart and Amazon build captive arms.
- **2017–2018: GST (Jul-2017) and e-way bill (Apr-2018)** remove check-posts; hub consolidation; warehousing boom [K].
- **2019–2022: CONCOR privatisation + LLF saga.** CCEA approval Nov-2019; LLF shock FY21 (OPM 16%); LLF reset Sep-2022 [V screener; primer].
- **2020–2021: COVID** — e-commerce volume spike; Blue Dart FY22 OPM 23% (peak) [V screener]. **Delhivery acquired Spoton (PTL) in Aug-2021** (~US$200m) [K; FLAG amount].
- **May-2022: Delhivery IPO** (₹5,235 Cr at ₹487; ~₹35,283 Cr valuation) [primer]; first profitable year FY25 [V].
- **2023: TVS SCS IPO (Aug-2023)** [primer]; **EDFC full commissioning; WDFC progressive** [K]; Red Sea crisis from Nov-2023 lifts ocean freight [K].
- **Nov-2024: Zinka Logistics (BlackBuck) IPO** (listed 22-Nov-2024) [K; primer]; renamed BlackBuck Ltd 2025 [primer].
- **2025: Consolidation.** Apr-2025 Delhivery–Ecom deal (≤₹1,407 Cr); CCI 17-Jun-2025; completed 18-Jul-2025 [V-snip; primer]. Meesho's Valmo takes ~half+ of Meesho volume [V-snip]. GST 2.0 (22-Sep-2025). US 50% tariffs (Aug-2025). NCAER logistics-cost study (Sep-2025) [V].
- **2026: Infrastructure arrives into a shock.** Shadowfax IPO (Jan-2026) [V-snip]; West Asia war from 28-Feb-2026 → Hormuz disruption; WDFC complete (31-Mar trial; 8-Sep dedication) [V]; diesel +8.6% in May [V]; CONCOR Q2 FY27 EXIM flat [V]; JNPA record 834,697 TEU in Sep-2026 (+28.6%) but rail share falling [V].

**Cycles:** container rail follows EXIM trade and rail policy (LLF shock FY21; haulage hikes); express parcel follows e-commerce funding cycles and captive-logistics decisions by marketplaces (Ecom's collapse after Meesho moved volume to Valmo is the defining "customer-concentration" event); contract logistics follows manufacturing capex and European macro (TVS FY24 revenue fell 8%).

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands
| KPI | Definition | Latest value | Source |
|---|---|---|---|
| **TEUs handled (CONCOR)** | Boxes handled at terminals | FY26 5.58m (+9.6%; EXIM 4.21m +8%, domestic +14.6%); H1 FY27 2.85m (+4.48%); Q2 FY27 1.45m (+0.53%) | [V call; V filing] |
| **Originating TEUs** | Boxes loaded on CONCOR trains | Q4 FY26 6.78 lakh (EXIM 5.49, dom 1.29) | [V call] |
| **Rail freight margin (CONCOR)** | (Rail revenue − haulage − direct costs)/rail revenue | 27.16% FY26 (25.65% FY25) | [V call] |
| **Double-stack rakes** | Number of DS train runs in year | 6,396 FY26 (+1.5%) | [V call] |
| **Rail coefficient (JNPT)** | Share of port boxes by rail | 15.12% FY26; ~12.7% H1 FY27 (JNPA data) | [V call; V maritimegateway] |
| **Lead (km)** | Average haul | EXIM lead fell ~3 km in FY26; domestic lead fell too | [V call] |
| **Express parcel shipments (Delhivery)** | Parcels delivered | Q1 FY27 322m (+55.2% YoY, +5.2% QoQ); FY26 >1 bn | [V presentation; primer] |
| **Express yield** | Express revenue ÷ shipments | Q1 FY27 ₹1,869 Cr ÷ 322m = **₹58.0/parcel**; Q1 FY26 ₹1,403 Cr ÷ 208m = ₹67.5 (mix shift to lighter Ecom/Meesho-type parcels) | [V; E] |
| **PTL yield** | PTL revenue ÷ kg | Q1 FY27 ₹633 Cr ÷ 542 kt = **₹11.7/kg** (mgmt "nearly ₹12"); Q1 FY26 ₹508 ÷ 458 kt = ₹11.1/kg; +37 paise, of which ~6 paise fuel | [V; E] |
| **Service EBITDA margin (Delhivery)** | Segment EBITDA before corporate overhead | FY26 14.4% (Express 17.2%, PTL 11.0%); Q1 FY27 13.1% | [V] |
| **Blue Dart tonnage & yield** | Tonnes; revenue ÷ kg | Q1 FY27 364,430 t → ₹1,658 Cr ÷ 364.4m kg = **₹45.5/kg**; per shipment ₹172 [E] | [V call; E] |
| **Blue Dart FY26 yield** | ₹6,141 Cr ÷ 1,439 kt | **₹42.7/kg** [E] | [V; E] |
| **Freighter utilisation** | Pallet load factor | 85–90% | [V call] |
| **Monthly transacting truck operators (BlackBuck)** | Avg monthly users with ≥1 paid transaction | 883,386 Q1 FY27 (+13%) | [V] |
| **≥2-service users** | Cross-sell depth | 458,919 (+19%) = 52% of transacting | [V; E] |
| **Tolling GTV** | FASTag spend through platform | ₹7,045 Cr Q1 FY27 (+16%); FY26 ₹25,904 Cr (+27%) | [V; primer] |
| **Take rate** | Net revenue ÷ tolling GTV (proxy; includes non-toll revenue) | Q1 FY27 ₹165 Cr ÷ ₹7,045 Cr = **2.3%**; core revenue ÷ GTV = 2.1% | [E] |
| **ARPU (BlackBuck)** | Net revenue ÷ transacting operators | ₹1,868 per operator per quarter (~₹623/month) | [E] |
| **ISCS/GFS margin (TVS)** | Segment adj. EBITDA | ISCS 8.1%, GFS 4.1% (Q1 FY27) | [V] |
| **New business wins (TVS)** | Annualised revenue from new contracts | ₹543 Cr in Q1 FY27 (record; 20.9% of Q1 FY26 revenue) | [V] |
| **Pipeline (TVS)** | BD pipeline | ₹7,500 Cr | [V] |
| **Revenue per employee** | Revenue ÷ headcount | TVS ~₹67 lakh (pass-through), Blue Dart ~₹46 lakh, Delhivery ~₹14 lakh (FY26 ₹10,486 Cr ÷ 73,477 incl. contract workers), BlackBuck n.a. (headcount not fetched) [E] | [E] |
| **Working-capital days** | Screener | Blue Dart −35, BlackBuck −22, TVS −21, CONCOR +2, Delhivery +37 | [V] |

### 9.2 Operating leverage — the core economics
- **Delhivery Express:** service EBITDA margin ranged 15.1% (Q2 FY25) → 18.8% (Q4 FY26) → 15.6% (Q1 FY27 on wages/fuel lag) — a ~3.7-point swing on volume and pricing [V].
- **Blue Dart:** standalone EBITDA margin by quarter FY26: 8.26%, 11.25%, 12.78%, 9.21%; Q1 FY27 11.44% — the festive Q3 peak and Q4/Q1 troughs are fixed-cost leverage on volume [V presentation].
- **BlackBuck:** 60–85% of incremental revenue converts to EBITDA in core businesses (management) [V call].
- **CONCOR:** volume +9.6% in FY26 but revenue only +2.2% (lead down, double-stacking lowers per-TEU realisation, domestic pricing weak) — volume leverage is diluted by realisation [V call].

### 9.3 Through-cycle returns (screener ROCE %)
| | FY20 | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|---|---|
| CONCOR | 13 | 7 | 13 | 14 | 14 | 14 | 13 |
| Blue Dart | 13 | 17 | 31 | 26 | 19 | 16 | 16 |
| Delhivery | −7 | −8 | −17 | −11 | −2 | 2 | 1 |
| TVS SCS | 0 | 1 | 6 | 6 | 5 | 5 | 10 |
| BlackBuck | n.a. | n.a. | −29 | −36 | −32 | 11 | 13 |
[V screener]

---

## 10. Global lens

| Company (country) | Business | Revenue (latest FY) | EBITDA/op margin | Valuation (approx.) | Source |
|---|---|---|---|---|---|
| DHL Group (Germany) — Blue Dart's parent | Express, forwarding, supply chain, eCommerce | ~€84 bn (2024) | EBIT ~7% | ~13–15× P/E | [K] |
| UPS (US) | Small package | ~US$91 bn (2024) | op ~9% | ~15–18× P/E | [K] |
| FedEx (US) | Express/ground/freight | ~US$88 bn (FY25) | op ~6–7% | ~13× P/E | [K] |
| SF Holding (China) | Express parcel + logistics | ~RMB 284 bn (2024) | op ~5% | ~20× P/E | [K] |
| ZTO Express (China) | Network parcel (franchise) | ~RMB 44 bn (2024), ~34 bn parcels | op ~25% | ~12× P/E | [K] |
| Kuehne+Nagel / DSV | Forwarding + contract logistics | CHF ~24 bn / DKK ~170 bn | EBIT 6–8% | 20–25× P/E | [K] |
| Union Pacific / CSX (US) | Freight railroads | US$24 bn / US$15 bn | op ~38–40% | 18–20× P/E | [K] |
| GXO (US) | Contract logistics | ~US$12 bn | adj EBITDA ~7% | ~8–10× EV/EBITDA | [K] |
| **Indian members (FY26)** | — | ₹652 Cr – ₹11,003 Cr (US$0.07–1.16 bn) | 6–26% | 26–190× P/E | [V screener] |
- Indian logistics names trade at **2–4× the multiples of global peers** (group 45× FY26 PAT vs 13–20× for UPS/FedEx/DHL/KN) [E]. The premium is for growth (~20% parcel volume CAGR) and formalisation optionality.
- **Scale gap:** India's ~10–11 bn parcels (FY25) vs China ~175 bn (2024) and US ~22 bn [K]; Delhivery's ~1.3 bn annualised run-rate is ~4% of ZTO's volume [E].
- **Rail:** US Class I railroads carry ~40% of US freight tonne-km with 35–40% op margins on owned track; CONCOR is an operator on someone else's track (IR) and earns ~21% [K; V].
- **Platform analogues for BlackBuck:** Full Truck Alliance (China, NYSE: YMM) — ~RMB 11 bn revenue 2024, mostly freight-matching commissions and financing, ~25% net margin [K]; Fleetcor/Corpay (fuel cards) [K].

---

## 11. Technology and disruption risks

1. **Captive logistics by marketplaces (biggest risk to parcel 3PLs).** Valmo's share of Meesho orders 1.8% → 64.5% in ~2.5 years [V-snip]; Ecom Express lost >half its revenue [V-snip] and sold at an ~80% markdown. Delhivery's Meesho-type exposure and Flipkart/Amazon insourcing are the key risk; Delhivery argues the trend may be reversing [V call].
2. **Quick commerce.** 10-minute delivery from dark stores substitutes some express parcels (electronics, beauty, grocery). Delhivery serves dark-store replenishment (PTL/FTL), not last mile [V call]. Shadowfax's growth and re-rating (FY26 revenue +69%) shows hyperlocal/q-commerce is a separate, fast-growing pool [V screener].
3. **Automation and AI.** Sorters (Delhivery 73), ASRS in fulfilment centres, Delhivery Maps (proprietary GIS) [V call]; BlackBuck uses AI in Superloads productivity [V presentation]; TVS SCS control towers, robotics [V]. Labour shortages accelerate automation [V call].
4. **Electric and LNG trucks.** CONCOR 230 LNG trucks, 5 electric reach-stackers [V call]; EV last-mile two/three-wheelers cut riders' costs; electric HCVs nascent [K].
5. **Rail productivity.** DFC double-stack + longer trains (1.5 km "Anaconda" trains [K]) could cut rail cost per TEU 20–30% [E] — but only if first/last-mile drayage falls (CMD: "we have to minimise first mile, last mile") [V call].
6. **Payments regulation.** RBI/NPCI changes to FASTag (issuer interchange, KYC), NHAI GNSS-based tolling (satellite tolling pilots) could disintermediate FASTag issuers [K; FLAG] — a direct risk to BlackBuck's wedge.
7. **Cyber and data.** Platforms (ULIP, NETC) concentrate data; outages matter.
8. **Climate/weather.** Delhivery cited weather disruption in Q1 and early Q2 FY27 [V call].

---

## 12. What to watch

**Upcoming dates**
- **BlackBuck Q2 FY27 board 29-Oct-2026** [V]. Watch: tolling GTV recovery after "tough April", transacting operators (>900k?), Superloads losses, vehicle finance breakeven "by end of FY27", any Superloads capital raise post slump sale (12-Oct) [V; E].
- **Delhivery Q2 FY27** (~late Oct/early Nov; deadline 14-Nov) [E]: express volumes vs "upper end of 20–30%", service EBITDA recovery to 14–15% as fuel pass-through lands in Q2, SCS's two new contracts stabilising, integration costs (₹17 Cr in Q1) ending [V call; E].
- **Blue Dart Q2 FY27** (~late Oct/early Nov) [E]: tonnage vs yield (Q1 shipments +2%), festive volumes, India Post MoU effect, Q2 FY26 base (EBITDA ₹261.6 Cr, 16.8%).
- **CONCOR Q2 FY27** (~Nov) [E]: volumes already out (EXIM −0.07%); watch realisations, rail freight margin, domestic margin (domestic segment EBIT was just 0.2% in Q4 FY26 [V call]), FY27 guidance revision (CMD said it would revise "if required") [V call].
- **TVS SCS Q2 FY27** (~early Nov) [E]: mid-teen FY27 growth guide, ISCS Europe "Project One" savings, GFS margins, net debt.
- **Monthly:** CONCOR volumes (quarterly filings), JNPA TEUs and rail-borne share (monthly release), e-way bills (GSTN ~3rd–5th of month), IR freight loading (1st of month), AAI air cargo, diesel/ATF prices (1st of month for ATF), FASTag/NETC volumes (NPCI).

**Leading indicators to track (with latest)**
| Indicator | Latest | Direction |
|---|---|---|
| JNPA TEUs | Sep-2026 834,697 (+28.6%); H1 FY27 +17.6% | Strong (partly transshipment/diversion [E]) |
| JNPA rail share | ~12.7% H1 FY27 vs ~14.8% | Falling — bad for CONCOR |
| CONCOR EXIM TEU | Q2 FY27 −0.07% | Stalled |
| IR freight loading | FY26 1,670 MT (+3.25%) | Slow |
| E-way bills | Jul-2026 13.98 crore | Near record |
| Air cargo | Q1 FY27 1.08 MT (+12%) | Strong (intl +14%) |
| Diesel (Delhi) | ₹95.20 since 25-May-2026 | +8.6% YoY step |
| Express parcels (Delhivery) | Q1 FY27 322m (+55%) | Strong |
| Truckers on BlackBuck | 883k (+13%) | Steady |

**Policy decisions pending:** IR container-sector reforms (haulage, assured transit) [V call]; CONCOR privatisation; next World Bank LPI; LEADS 2026; FASTag/satellite tolling; Labour Codes implementation rules; US–India trade deal/tariff litigation [K-brief]; Hormuz/West Asia normalisation [K-brief].

**Capacity pipelines:** CONCOR capex budget ₹945 Cr FY27 (₹1,085 Cr FY26), Salawas (Jodhpur) and Chharodi (Ahmedabad) double-stack terminals, new terminals Mandalgarh, Kadakola (Mysuru), Jajpur, Paradip, 3,000 tank containers [V call]; Blue Dart capex ₹100–150 Cr/yr standalone + aircraft engine cycles, new hubs Bangalore/Chennai/Mumbai "a few quarters away" [V call]; Delhivery automation and SCS contracts [V call]; TVS ALA aerospace-defence JV and Swamy & Sons integration [V].

---

## A. The forces that define this sub-sector (what an expert leads with)

1. **Modal shift is the policy promise; road is still winning the share war.** The WDFC is finished (1,506 km, Sep-2026) and the National Rail Plan wants 45% rail share by 2030, yet IR tonnage grew 3.25% in FY26 and JNPA's rail share fell to ~12.7% in H1 FY27 while port boxes rose 17.6% [V]. Until first/last-mile drayage and transit times fall, the DFC adds capacity, not traffic. CONCOR's earnings hinge on this conversion (and on not losing more share to private CTOs and GCTs: 74% → 54.5% since FY20).
2. **Density economics in parcels — and who owns the density.** A parcel network is a fixed-cost machine: Delhivery's express service margin moves ~4 points with volume [V]. But the biggest shippers (Meesho, Flipkart, Amazon) can build their own density (Valmo 65% of Meesho orders) [V-snip]. Consolidation (Ecom into Delhivery) and new listed rivals (Shadowfax ₹16k Cr m-cap) define the 3PL share fight.
3. **Fuel, wages and pass-through speed.** Fuel is ~42% of road freight cost [V NCAER]; the May-2026 diesel spike (+8.6%) and Labour Codes landed together. Members with indexed contracts (Delhivery PTL, Blue Dart surcharge, TVS cost-plus) recover with a 1–2-month lag; CONCOR's rail haulage is insulated but its road first/last mile is not [V calls].
4. **Asset intensity vs return on capital.** CONCOR (asset turnover 1.1×, ROCE 13%) and Blue Dart (3.0×, 16%) vs BlackBuck (5.5×, 13% on IPO cash) and TVS (3.8×, 10%) [V]. Ind-AS 116 makes asset-light companies look more EBITDA-rich than they are (TVS pre-Ind-AS EBITDA ~2.7%) [E]. The returns question decides valuation.
5. **Formalisation of the trucker economy.** ~85% of trucks belong to tiny operators [K]. GST/e-way bills, FASTag and GST 2.0's CV tax cut push them onto digital rails; BlackBuck monetises that (883k operators, ₹25,904 Cr toll GTV) and its next leg is credit (vehicle finance) [V; primer].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The corridor is built; where is the cargo?" — DFC, CONCOR and the rail coefficient
- Facts: WDFC complete (31-Mar trial; 8-Sep-2026 dedication of 326 km; ₹20,703 Cr for those sections; JICA ¥620.8 bn) [V]. CONCOR guided JNPT rail coefficient 15% → 19–21% FY27 → 30–35% in three years [V call]. Actual: JNPA rail-borne TEUs H1 FY27 +0.3%, rakes −5.2%, share ~12.7% [V]; CONCOR EXIM Q2 −0.07% [V].
- Explanations to weigh: (i) the box surge at JNPA is partly transshipment and West Asia diversions that never touch rail [E]; (ii) DFC services take time to stabilise ("changeover from road to rail will not happen overnight") [V call]; (iii) private CTOs (Adani, DP World/Hind, GDL) and new terminal JV flows (NSFT/CMA CGM +123%) [V]; (iv) road diesel up 8.6% should, if anything, favour rail [E] — so the stall is a transit-time/first-mile problem.
- Economics: double-stacking lowers realisation per TEU (CONCOR: "double stacking has been increasing, which is leading to a lower realization") even as it raises margin per train [V call].
- Also: LLF at 1.5% of land value; the privatisation option; 30% stake in Bharat Container Shipping Line; cement in tank containers.

### B2. "The parcel war after Ecom" — consolidation vs in-sourcing
- Delhivery–Ecom (≤₹1,407 Cr; integration cost ₹148 Cr FY26 + ₹17 Cr Q1 FY27, well under the ₹300 Cr original estimate [V; primer]); express volumes 322m in Q1 FY27 (+55%) [V]; express yield down to ~₹58/parcel (mix) [E]; guidance 16–18% express service EBITDA [V].
- The counterforce: Valmo (Meesho), Ekart (Flipkart; selling to third parties), ATS (Amazon). Meesho's cost/order ₹50.45 → ₹37.70 [V-snip].
- New listed rival: Shadowfax (FY26 ₹4,202 Cr revenue, +69%; m-cap ₹15,997 Cr vs Delhivery ₹29,044 Cr) [V screener].
- Blue Dart's choice: premium, B2B-heavy (70% B2B), e-commerce "not a completely focus area", fleet of 8 freighters; India Post MoU for reach [V call; V screener].

### B3. "A fintech wearing a logistics badge" — BlackBuck's model, take rate and the credit leg
- Payments wedge: ₹7,045 Cr tolling GTV in Q1 FY27; take ~2.3% of GTV in net revenue [V; E]; contribution margin 93%; adjusted EBITDA ₹54.6 Cr (33% of net revenue) [V].
- Growth businesses: Superloads (14 cities; investment phase; now being carved into BTSPL by slump sale) and vehicle finance (breakeven by FY27 end) [V].
- Accounting: gross vs net revenue; FY25 IPO/ESOP charges; DTA credits in Q4 FY25 and Q4 FY26 [V].
- Risk: toll-payment rule changes; credit cycle in trucking (diesel spike + "tough April" for movement) [V call].

### B4. "Thin margins, big balance sheets" — Ind-AS 116, ROCE and what EBITDA means in logistics
- TVS SCS: adjusted EBITDA 7.0% but ₹486 Cr of lease cost below the line → cash EBITDA ~2.7%; operational PAT ₹69 Cr on ₹11,003 Cr [V; E].
- Delhivery: reported EBITDA ≈ 6% vs adjusted (post-rent) 4.4% vs service 14.4% [V].
- Blue Dart: standalone 10.4% vs consolidated 16.1% (aircraft leasing inside the group) [V].
- CONCOR: 21.5% screener vs 24.3% management vs 27% rail freight margin vs 31% "operating margin" [V].
- A clean comparison: OP − depreciation (≈ EBIT incl. lease depreciation): CONCOR 1,335 (14.7%), Blue Dart 415 (6.8%), BlackBuck 114 (17.5%), TVS 208 (1.9%), Delhivery −55 (−0.5%) [E: screener FY26 OP − D&A].

### B5 (optional). "Seventy per cent abroad" — TVS SCS as a European contract-logistics turnaround
- RoW 70% of Q1 FY27 revenue; ISCS Europe the largest region; "Project One" European operating-model integration; ALA (Italy) A&D JV; Swamy & Sons India FMCG acquisition; credit outlook upgraded to Ind AA Positive [V presentation].

## C. The REVENUE / PROFIT EQUATION

**General:** Revenue = Volume (TEUs / parcels / kg / transacting users / contracts) × Yield (₹ per unit) ; EBITDA = Revenue − variable network cost (line-haul, last mile, haulage, fuel) − semi-fixed network cost (hubs, people, aircraft) ; Cash EBITDA = EBITDA − lease rent ; PAT = EBITDA − D&A − interest + other income − tax.

### C.1 Worked example 1 — CONCOR, FY26 [E composite, ILLUSTRATIVE]
- Handled TEUs 5.58m; consolidated revenue ₹9,079 Cr → **~₹16,270 per handled TEU** [E].
- EXIM: 4.21m TEU; EXIM revenue >₹6,000 Cr (≈₹6,028 Cr [E: 9,079 − 3,051 domestic, primer standalone split]) → ~₹14,300/TEU.
- Domestic: ~1.37m TEU; ₹3,051 Cr → ~₹22,300/TEU (longer leads, door-to-door).
- Rail freight margin 27.16% on rail revenue; terminal & handling adds; OP ₹1,951 Cr (21.5%) → **~₹3,500 OP per TEU** [E].
- Sensitivity: +1 point of JNPT rail coefficient ≈ 82,000 extra TEU at JNPA (1% × 8.17m) [E]; at CONCOR's ~60% share of JNPT rail boxes ≈ 49,000 TEU × ~₹14,300 ≈ **₹70 Cr revenue, ~₹15–20 Cr OP** [E]. Moving JNPT from 15% to 30% (management's 3-year aim) ≈ **₹1,050 Cr revenue** (+11.6%) [E].

### C.2 Worked example 2 — Delhivery Express, Q1 FY27 [V inputs; E derived]
- 322m parcels × ₹58.0 = ₹1,869 Cr express revenue [V].
- Express service EBITDA 15.6% ≈ ₹292 Cr → **₹9.1 per parcel** [V; E]. At 18% (guided upper end) on the same revenue → ₹336 Cr → ₹10.4/parcel.
- PTL: 542 kt × ₹11.7/kg = ₹633 Cr; service EBITDA 11.2% = ₹71 Cr → **₹1.31/kg** [V; E].
- Corporate overheads ₹272 Cr (9.4%) → adjusted EBITDA ₹76 Cr (2.6%) [V].
- Rule of thumb: every 1 point of express service margin ≈ ₹75 Cr a year at current run-rate (₹1,869 Cr × 4 × 1%) [E].

### C.3 Worked example 3 — Blue Dart, Q1 FY27 [V inputs; E derived]
- 364,430 t × ₹45.5/kg = ₹1,658 Cr; 96.15m shipments × ₹172 [V; E].
- Consolidated EBITDA 16.53% = ₹276.6 Cr → **₹7.6 per kg, ₹28.8 per shipment** [V; E].
- Mix: 60% of revenue from air at ~25% of kilos → air yield ~₹109/kg vs ground ~₹24/kg [E: 0.6 × 1,658 ÷ (0.25 × 364.4m kg) and 0.4 × 1,658 ÷ (0.75 × 364.4m kg)]. ILLUSTRATIVE.
- Fixed-cost leverage: a 5% volume swing with ~60% fixed costs moves EBITDA ~±15% [E].

### C.4 Worked example 4 — BlackBuck, Q1 FY27 [V inputs; E derived]
- 883,386 transacting operators × ₹1,868 net revenue per operator per quarter = ₹165 Cr net revenue [V; E].
- × 92.6% contribution = ₹152.7 Cr; − ₹98.1 Cr operating expenses = ₹54.6 Cr adjusted EBITDA (33.1%) [V].
- Tolling: ₹7,045 Cr GTV ÷ 17.84 crore transactions = **₹395 per toll transaction** [E].
- If operators +13% and ARPU +10% → net revenue +24% (≈ the reported +25%) [E].

### C.5 Worked example 5 — TVS SCS, FY26 [V inputs; E derived]
- Revenue ₹11,003 Cr: ISCS ~₹8,239 Cr (75%), GFS ~₹2,764 Cr (25%) [primer; V presentation split].
- Adjusted EBITDA ₹773 Cr (7.0%) − RoU depreciation ₹403 Cr − lease interest ₹83 Cr = **~₹287 Cr cash EBITDA (2.6%)** [E].
- − other D&A ₹167 Cr − finance cost ₹75 Cr + other ≈ adjusted PBT ₹99 Cr (0.9%) [V].
- Each +10 bps of margin on ₹12,650 Cr (FY27 at mid-teen growth [E]) ≈ ₹12.7 Cr PBT ≈ +13% of FY26 adjusted PBT [E].

### C.6 Company-level reconciliations [E]
- Delhivery FY26: screener OP ₹640 Cr + integration ₹148 Cr ≈ ₹788 Cr "EBITDA ex-integration"; − lease rent (~₹420 Cr) + ESOP (~₹100 Cr) ≈ ₹468 Cr vs company adjusted ₹457 Cr (rounding/other) [E].
- Blue Dart FY26: company consolidated EBITDA pre-exceptional ₹992.5 Cr vs screener OP ₹951 Cr (screener nets the ₹44 Cr exceptional into expenses or other income) [V; E].
- TVS FY26: company EBITDA ₹782.6 Cr vs screener OP ₹778 Cr [V].
- BlackBuck FY26: screener OP ₹167 Cr ≈ company EBITDA basis (excl. other income) [V].
- CONCOR FY26: screener OP ₹1,951 Cr (21.5%) vs management 24.33% EBITDA (standalone basis) [V].

## D. Proposed 6-cell stat strip (₹ only)
| Cell | Value | Source |
|---|---|---|
| Logistics cost, FY24 | **₹24 lakh crore (7.97% of GDP)** | NCAER/DPIIT, Sep-2025 [V] |
| Five members' FY26 revenue | **₹37,383 Cr (+10.1%)** | screener sum [E] |
| Five members' FY26 PAT | **₹1,923 Cr (CONCOR 65%)** | screener sum [E] |
| CONCOR TEUs FY26 | **5.58 million (+9.6%)**; Q2 FY27 +0.5% | company [V] |
| Delhivery express parcels, Q1 FY27 | **322 million (+55%)** | company [V] |
| Combined m-cap, 21-Oct-2026 | **₹87,094 Cr (45× FY26 PAT)** | screener sum [E] |
Alternates: Western DFC **1,506 km** complete (Sep-2026) [V]; Delhi diesel **₹95.20/litre** (+₹7.53 in May-2026) [V]; BlackBuck **8.8 lakh** truck operators [V].

## E. Chart-ready datasets

**E1. Five members' revenue, FY22–FY26 (₹ Cr, screener consolidated) [V]**
CONCOR: 7,653 / 8,169 / 8,653 / 8,887 / 9,079 · Delhivery: 6,882 / 7,225 / 8,142 / 8,932 / 10,508 · Blue Dart: 4,410 / 5,172 / 5,268 / 5,720 / 6,141 · BlackBuck: 119 / 176 / 297 / 427 / 652 · TVS SCS: 9,250 / 9,994 / 9,200 / 9,996 / 11,003.

**E2. PAT, FY22–FY26 (₹ Cr) [V]**
CONCOR: 1,052 / 1,173 / 1,262 / 1,293 / 1,246 · Delhivery: −1,011 / −1,008 / −249 / 162 / 153 · Blue Dart: 382 / 371 / 301 / 252 / 247 · BlackBuck: −285 / −290 / −194 / −9 / 160 · TVS SCS: −46 / 42 / −90 / −10 / 117 · Total: 92 / 288 / 1,030 / 1,688 / 1,923.

**E3. FY26 OP margin vs ROCE (%), for a scatter [V]**
CONCOR 21.5 / 13 · Blue Dart 15.5 / 16 · BlackBuck 25.6 / 13 · TVS SCS 7.1 / 10 · Delhivery 6.1 / 1. (Add asset turnover as bubble size: 1.12 / 2.98 / 5.53 / 3.83 / 1.93.)

**E4. Logistics cost as % of GDP [V]**
FY22 8.79 · FY23 8.84 · FY24 7.97 · old claim 13–14 · US 8.8 · Germany 8.0 · Australia 8.6.

**E5. Indian Railways FY26 loading by commodity (MT) [V]**
Coal 818.6 · Iron ore 190.12 · Cement 157.17 · Other goods 133.71 · Containers 93.69 · Pig iron & steel 76.88 · Fertilisers 68.01 · POL 51.7 · Food grains 48.75 · RMSP 31.31 · Total 1,670.

**E6. CONCOR quarterly TEUs, FY26–FY27 (lakh TEU) [V/E]**
Q1 FY26 EXIM 9.74 / Dom 3.16 [E derived]; Q2 FY26 10.93 / 3.47 [V]; H2 FY26 EXIM ~10.7 avg/qtr [E: (42.1 − 20.67) ÷ 2]; Q1 FY27 10.69 / 3.36 [E derived]; Q2 FY27 10.93 / 3.56 [V]. FY26 total 55.8 (EXIM 42.1).

**E7. CONCOR rail market share (%) [V]**
FY20 ~74 · FY25 55.9 · FY26 54.5 (EXIM 55.2 → 53.9; Dom 57.6 → 55.9).

**E8. JNPA H1 FY27 terminal volumes (TEU, YoY) [V]**
BMCT (PSA) 1,582,117 (+19.7%) · GTI (APM/CONCOR) 1,187,822 (+7.4%) · NSFT (CMA CGM/JM Baxi) 707,242 (+123.5%) · NSICT (DP World) 603,254 (−8.2%) · NSIGT (DP World) 562,591 (+2.6%). Rail-borne 590,004 (+0.3%); rakes 3,446 (−5.2%).

**E9. Delhivery quarterly (Q1 FY26 → Q1 FY27) [V]**
Revenue (₹ Cr): 2,294 / 2,546 / 2,798 / 2,848 / 2,931 · Service EBITDA %: 13.0 / 13.2 / 15.1 / 15.8 / 13.1 · Adjusted EBITDA %: 3.3 / 3.3 / 5.3 / 5.3 / 2.6 · Express SE %: 16.3 / 15.3 / 18.1 / 18.8 / 15.6 · PTL SE %: 10.7 / 8.5 / 11.0 / 13.4 / 11.2 · Integration cost (₹ Cr): 0 / 90 / 35 / 22 / 17.

**E10. BlackBuck KPIs (Q1 FY26 → Q4 FY26 → Q1 FY27) [V]**
Transacting operators: 783,399 → 866,091 → 883,386 · ≥2 services: 386,351 → 441,874 → 458,919 · Tolling GTV (₹ Cr): 6,073 → 7,094 → 7,045 · Net revenue (₹ Cr): 131.85 → 159.86 → 165.03 · Adjusted EBITDA (₹ Cr): 47.21 → 50.20 → 54.62.

**E11. Blue Dart quarterly EBITDA margin, standalone vs consolidated (%) [V]**
Q1 FY26 8.26 / 14.15 · Q2 11.25 / 16.78 · Q3 12.78 / 17.92 · Q4 9.21 / 15.14 · FY26 10.44 / 16.05 · Q1 FY27 11.44 / 16.53.

**E12. TVS SCS segment & geography (Q1 FY27) [V]**
ISCS ₹2,417 Cr (8.1% adj EBITDA) · GFS ₹918 Cr (4.1%) · India ₹998 Cr (ISCS 674, GFS 323; +43.9%) · RoW ₹2,338 Cr (ISCS 1,743, GFS 595; +23.1%).

**E13. Delhi diesel price, 2026 (₹/litre) [V]**
pre-15-May 87.67 · 15-May 90.67 · 19-May 91.58 · 23-May 92.49 · 25-May 95.20.

**E14. Shareholding shifts (Dec-2023 → Sep-2026, %) [V]**
CONCOR FII 19.55 → 8.09, DII 22.76 → 30.01 · Delhivery FII 62.71 → 39.54, DII 17.02 → 45.95 · Blue Dart FII 5.29 → 3.31, DII 11.76 → 14.30 · BlackBuck (Dec-24 → Sep-26) FII 11.73 → 31.01, DII 9.98 → 14.97 · TVS SCS FII 0.37 → 2.42, DII 6.60 → 2.24.

**E15. Valmo share of Meesho orders (%) [V-snip]**
FY23 1.83 · FY24 19.55 · FY25 48.08 · H1 FY26 64.52.

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]
| KPI | Good | Average | Weak | Members now |
|---|---|---|---|---|
| Rail freight margin (CTO) | >27% | 22–27% | <22% | CONCOR 27.2% (FY26) [V] |
| Rail market share (CONCOR) | >60% | 50–60% | <50% | 54.5% |
| Port rail coefficient | >30% | 15–30% | <15% | JNPT 15% (falling to ~13%), Mundra 25%, Pipavav 58% [V] |
| TEU growth | >10% | 5–10% | <5% | FY26 +9.6%; Q2 FY27 +0.5% |
| Double-stack share | rising >10%/yr | flat | falling | +1.5% FY26 |
| Express service EBITDA | 16–18%+ | 13–16% | <13% | Delhivery 17.2% FY26, 15.6% Q1 FY27 |
| PTL service EBITDA | >15% | 10–15% | <10% | Delhivery 11.0% FY26 |
| Group EBITDA (asset-light express, post-Ind-AS) | >10% | 5–10% | <5% | Delhivery 6.1%; Shadowfax 5.3% |
| Group EBITDA (air express, consol.) | >17% | 13–17% | <13% | Blue Dart 15.5–16.5% |
| Contract-logistics adj. EBITDA (post-Ind-AS) | >9% | 6–9% | <6% | TVS 7.0% |
| Contribution margin (platform, on net rev.) | >85% | 70–85% | <70% | BlackBuck 93% |
| Take rate on toll GTV (net revenue ÷ GTV) | >2.5% | 1.5–2.5% | <1.5% | BlackBuck ~2.3% |
| Transacting-user growth | >15% | 8–15% | <8% | BlackBuck +13% |
| Freighter/pallet utilisation | >85% | 75–85% | <75% | Blue Dart 85–90% |
| ROCE | >18% | 12–18% | <12% | Blue Dart 16, CONCOR 13, BlackBuck 13, TVS 10, Delhivery 1 |
| Asset turnover (rev ÷ net block) | >3× | 1.5–3× | <1.5× | BlackBuck 5.5, TVS 3.8, BD 3.0, DLV 1.9, CONCOR 1.1 |
| Capex/revenue | <4% (asset-light) / <10% (asset-heavy) | — | above | CONCOR 12.5%, BB 17%, DLV 3.9%, BD 5.1%, TVS 2.4% |
| Working-capital days | negative | 0–30 | >30 | BD −35, BB −22, TVS −21, CONCOR +2, DLV +37 |
| CFO/EBITDA | >90% | 70–90% | <70% | CONCOR 95%, BD 98%, TVS 102%, DLV 146%, BB 111% (FY26) [V] |
| Revenue per employee (₹ lakh) | >50 | 20–50 | <20 | BD ~46, DLV ~14, TVS ~67 (gross) |

## G. Timeline (year: event)
- 1983: Blue Dart founded (partnership) [V presentation].
- Mar-1988: CONCOR incorporated under Ministry of Railways [K].
- 1994: Blue Dart IPO; CONCOR listing [V presentation; K].
- 2005: DHL acquires 81% of Blue Dart [V screener about].
- 2006: Container train operations opened to private operators [K].
- 2011: Delhivery founded; 2015: BlackBuck (Zinka) and Shadowfax founded [K].
- Nov-2012: DHL cuts Blue Dart stake to 75% via OFS [V].
- Jul-2017: GST; Apr-2018: e-way bill nationwide [K].
- Nov-2019: CCEA approves CONCOR strategic sale (30.8%) [K].
- FY21: LLF shock; CONCOR OPM 16% [V screener].
- Aug-2021: Delhivery acquires Spoton (PTL) [K].
- 13-Oct-2021: PM Gati Shakti; Dec-2021: Gati Shakti Cargo Terminal policy [K; V-snip].
- May-2022: Delhivery IPO (₹5,235 Cr) [primer].
- 7-Sep-2022: LLF cut to 1.5% of land value, 35-year leases [primer/K]; 17-Sep-2022: National Logistics Policy [K].
- 2023: World Bank LPI — India 38th [K]; Aug-2023: TVS SCS IPO [primer]; Nov-2023: Red Sea crisis begins [K].
- 22-Nov-2024: BlackBuck (Zinka) lists [K].
- Apr-2025: Delhivery agrees to buy Ecom Express (≤₹1,407 Cr); 17-Jun-2025 CCI approval; 18-Jul-2025 completion [V-snip; primer].
- Aug-2025: US tariffs on India reach 50% [K].
- 22-Sep-2025: GST 2.0 (CVs 28% → 18%) [V-snip]; 25-Sep-2025: NCAER/DPIIT logistics cost 7.97% of GDP [V].
- Jan-2026: Shadowfax IPO (₹1,907 Cr; listed at ₹112.6 vs ₹124) [V-snip].
- 20-Feb-2026: SCOTUS strikes down IEEPA tariffs [K-brief].
- 28-Feb-2026: West Asia war; Hormuz disruption [K-brief].
- 26-Mar-2026: fuel excise cut [K-brief]; 31-Mar-2026: WDFC final JNPT–New Saphale trial [V-snip].
- 15–25-May-2026: four pump-price hikes; Delhi diesel ₹87.67 → ₹95.20 [V].
- 26-May-2026: CONCOR FY27 guidance (+9.5% volume, 24–25% EBITDA) [V].
- 22-May-2026: TVS SCS acquires Swamy & Sons 3PL [V].
- 8-Sep-2026: PM dedicates final 326 km of WDFC [V JICA].
- 12-Oct-2026: BlackBuck slump sale of loads business to WOS [V].
- 21-Oct-2026: CONCOR Q2 FY27 volumes +0.5% (EXIM −0.07%) [V].
- 29-Oct-2026: BlackBuck Q2 FY27 board [V].

## H. Figures I could not source well (and conflicts)
1. **All-India container TEUs FY26 (major + non-major ports)** — not found; only JNPA (8.17m) [V]; Mundra ~4.1m is an Alphaliner H1 estimate of uncertain year [V-snip]. Writer: say "~13–14m TEU" only as [E] or omit.
2. **Rail's current freight modal share** — only the 2022 ministry baseline (27%) and NITI's 2020 18% are available [V-snip]. No FY26 figure.
3. **E-way bills monthly series FY24–FY27** — only Jul-2026 (13.98 crore, headline) and Oct-2025 (12.69 crore) [V-snip]. FY totals not fetched.
4. **Air cargo FY26 full-year** — only FY25 (3.7 MT) and Q1 FY27 (1.08 MT) [V-snip].
5. **Express parcel market shares by player (Delhivery, Shadowfax, Xpressbees, DTDC, Valmo, Ekart, ATS)** — no consistent source; Ecom ~9% FY25 (Equitec) [V-snip]. Delhivery ~10% of all parcels / ~20–25% of 3PL e-commerce is [E].
6. **Delhivery FY26 express shipments and PTL tonnage (exact)** — primer says ">1 bn" and "~2 MT"; Q1 FY27 and Q1 FY26 verified only [V].
7. **CONCOR LLF paid (₹ Cr) FY26** and EXIM/domestic segment revenue/EBIT for FY26 — taken from primer (EXIM >₹6,000 Cr; domestic ₹3,051 Cr) and call (domestic segment EBIT 0.2% in Q4) [primer; V]. Not re-verified in the annual report.
8. **CONCOR Q1 FY27 call transcript** — none found on BSE; Q1 FY27 commentary unavailable. Q1 EXIM growth (+9.8%) is derived from H1 minus Q2 [E].
9. **BlackBuck vehicle-finance book (AUM), credit cost and headcount** — primer: ~₹60 Cr own book + ~₹600 Cr partner-managed [primer; FLAG]; not in Q1 FY27 deck.
10. **Blue Dart FY26 shipments** — "404 million shipments in eCommerce" label on the company slide vs Q1 FY27 total 96.15m: likely total shipments; flag [V; E].
11. **Excise cut of 26-Mar-2026** — not confirmed by this session's search; the pump price stayed at ₹87.67 until 15-May [V], so the cut was not passed through [E].
12. **West Asia ceasefire date vs "Hormuz shutdown in its third month" (25-May-2026)** — sibling dossiers cite a ceasefire on 7-Apr-2026 [K-brief/sibling], but a 25-May article describes Hormuz as still shut [V goodreturns]. Writer should say "disruption persisted into May" and not assert reopening dates.
13. **Q2 FY27 board dates** for CONCOR, Delhivery, Blue Dart, TVS SCS — not announced as of 21-Oct [V screener]; any date given is [E].
14. **LEADS 2025 rankings, next LPI** — not fetched [K].
15. **Logistics market size in ₹ for FY26** — only FY24 ₹24.01 lakh crore [V]; FY26 ~₹26–27 lakh crore is [E].

---

# PART 2 — COMPANY FACT PACKS (5 members)

Basis for all standardised numbers: **screener.in consolidated, fetched 21-Oct-2026 after close** [V]. FY = March year. OP = screener "operating profit" (revenue − operating expenses, before other income, D&A, interest; post-Ind-AS 116). PAT = screener "net profit" (reported, after exceptional items; for Delhivery includes minorities/associate). Borrowings include lease liabilities. Net debt "screener basis" = borrowings − investments (excludes bank deposits/cash held in "other assets", so it **understates net cash** for CONCOR, BlackBuck and Delhivery — see each profile).

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 21-Oct-26)

| Company | NSE · BSE | FY | Revenue | YoY % | OP margin % | PAT | ROCE % | ROE % | Net debt (cash), screener basis | M-cap | P/E (FY26) | P/B | EV/OP (gross debt) | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CONCOR | CONCOR · 531344 | FY26 | 9,079 | +2.2 | 21.5 | 1,246 | 12.6 (FY26 13) | 9.8 | (104) — true net cash much larger [E] | 32,507 | 26.1 (screener TTM 26.2) | 2.51 | 17.2× | 5.58m TEU (+9.6%) | Rail share 54.5% | Q2 FY27 TEU +0.5% |
| Delhivery | DELHIVERY · 543529 | FY26 | 10,508 | +17.6 | 6.1 | 153 | 1.0 | −0.2 (TTM) | (1,498) | 29,044 | 190 (screener TTM 244) | 3.02 | 47.7× | Express 322m Q1 FY27 (+55%) | Service EBITDA 14.4% FY26 | PTL 542 kt Q1 (+18%) |
| Blue Dart | BLUEDART · 526612 | FY26 | 6,141 | +7.4 | 15.5 | 247 | 15.8 | 15.7 | 729 | 10,412 | 42.2 (TTM 32.1) | 5.86 | 12.1× | 1,439 kt FY26; 364 kt Q1 FY27 | Consol. EBITDA 16.05% | 8 freighters |
| BlackBuck | BLACKBUCK · 544288 | FY26 | 652 | +52.7 | 25.6 | 160 | 12.8 | 12.2 | 9 (IPO cash in other assets) | 10,084 | 63.0 (TTM 58.7) | 7.08 | 60.7× | 883k transacting operators | Toll GTV ₹25,904 Cr FY26 | Take ~2.3% of GTV |
| TVS SCS | TVSSCS · 543965 | FY26 | 11,003 | +10.1 | 7.1 | 117 (op. 69) | 10.1 | 9.7 | 2,475 (company cash ₹613 Cr → ~2,142) | 5,047 | 43.1 (op. 73) | 2.47 | 10.0× | ISCS 75% / GFS 25% | RoW 70% of revenue | Pipeline ₹7,500 Cr |
| **All five** | | FY26 | **37,383** | **+10.1** | **12.0** | **1,923** | — | 6.9 (agg. PAT ÷ agg. equity) | (screener) 1,611 | **87,094** | **45.3** | 3.13 | 20.8× | | | |

- ROCE/ROE columns are screener's headline ratios (latest), with FY26 annual ROCE in brackets where different. EV/OP = (m-cap + borrowings) ÷ FY26 OP; no cash netting.
- Screener P/E is on TTM PAT (Jul-25 to Jun-26); FY26 P/E is m-cap ÷ FY26 PAT [E].

---

## 2.1 Container Corporation of India (CONCOR · 531344) — rail container logistics PSU; terminals; EXIM + domestic

**Standardised record (screener consolidated) [V]**
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|---|---|
| Revenue | 7,653 | 8,169 | 8,653 | 8,887 | 9,079 | 9,085 |
| Operating profit | 1,748 | 1,868 | 1,959 | 1,930 | 1,951 | 1,962 |
| OPM % | 23 | 23 | 23 | 22 | 21 | 22 |
| Other income | 270 | 333 | 400 | 447 | 394 | 354 |
| Depreciation | 561 | 573 | 619 | 581 | 616 | 604 |
| Interest | 63 | 65 | 72 | 74 | 79 | 80 |
| PAT | 1,052 | 1,173 | 1,262 | 1,293 | 1,246 | 1,247 |
| EPS ₹ (post-bonus base for FY26) | 13.85 | 15.41 | 16.55 | 16.94 | 16.30 | 16.30 |
| Dividend payout % | 52 | 57 | 56 | 54 | 53 | — |
| ROCE % | 13 | 14 | 14 | 14 | 13 | — |
| CFO | 1,369 | 1,406 | 1,388 | 1,712 | 1,482 | — |
| FCF | 765 | 835 | 603 | 868 | 344 | — |
- Longer history: FY15 revenue ₹6,032 Cr, PAT ₹1,056 Cr — **10-year sales CAGR 4%, profit CAGR 3%; stock price CAGR 10-yr 2%, 5-yr −5%, 1-yr −20%** [V screener]. FY20 PAT ₹406 Cr after a −₹560 Cr other-income hit (LLF provision) [V].
- **Quarterly (₹ Cr) [V]:** Jun-25 2,154 / OP 433 (20%) / PAT 267 · Sep-25 2,355 / 576 (24%) / 380 · Dec-25 2,308 / 514 (22%) / 335 · Mar-26 2,263 / 427 (19%) / 264 · **Jun-26 2,160 / 444 (21%) / 269** (+0.3% revenue, +0.7% PAT YoY).
- **Balance sheet Mar-26 [V]:** equity ₹381 Cr + reserves ₹12,562 Cr = net worth ₹12,943 Cr; borrowings ₹965 Cr (mostly lease liabilities [primer]); fixed assets ₹7,172 Cr + CWIP ₹906 Cr; investments ₹1,069 Cr; other assets ₹6,029 Cr (includes large bank deposits [E]). Debtor days 20 (rising from 4–5 pre-FY19); working-capital days +2.
- **Valuation (21-Oct-26) [V]:** price ₹427 (52-wk ₹558/₹421), m-cap ₹32,507 Cr, P/E 26.2 (TTM), book ₹170, P/B 2.51, dividend yield 2.01%, ROCE 12.6%, ROE 9.81%.
- **Company basis [V call]:** FY26 EBITDA 24.33% (FY25 24.9%); operating margin 30.89% (29.99%); rail freight margin 27.16% (25.65%); operating income +2.2%; PAT −4.5% (standalone; screener consolidated −3.6%). Dividend FY26 ₹8.6/share (172% of ₹5 par).

**Native KPIs [V call; V filing]**
- Throughput FY26 **5.58m TEU (+9.6%)**: EXIM 4.21m (+8%), domestic ~1.37m (+14.6%) [V; E split]. H1 FY27 28,53,200 TEU (+4.48%): EXIM 21,61,734 (+4.57%), dom 6,91,466 (+4.22%); **Q2 FY27 14,48,379 (+0.53%): EXIM 10,92,652 (−0.07%), dom 3,55,727 (+2.43%)** [V].
- Originating TEU Q4 FY26: EXIM 5,49,273; dom 1,29,065 [V]. FY26 originating EXIM +5% with a 3-km drop in lead; domestic originating +1.9% [V].
- Market share (rail container) FY26: EXIM 53.9%, domestic 55.9%, overall 54.5% (FY25 55.2/57.6/55.9) [V].
- Port rail coefficients FY26: JNPT 15.12% (CONCOR share 60%), Mundra 24.6% (35.4%), Pipavav 57.5% (48.3%) [V].
- Assets: 423 rakes (+43 high-speed in FY26); 57,746 own containers (+4,729); 500 tank containers (+1,000 earlier + 2,000 new approved); 230 LNG trucks; 65+ terminals [V; primer]. Double-stack rakes 6,396 (+1.5%) [V]. Empty running cut 10.5% (EXIM −27%, dom −4%) [V].
- Capex FY26 ₹1,085.2 Cr; FY27 budget ₹945 Cr ("we go for capex of ₹1,000 Cr every year") [V]. Screener CFO − FCF = ₹1,138 Cr [E].
- Guidance FY27: volume +9.5% (EXIM +8%, domestic +15%); EBITDA 24–25%; JNPT rail coefficient 19–21% FY27, 30–35% in ~3 years; ≥1 MT bulk cement in tank containers [V]. **Status after H1:** +4.5% total, +4.6% EXIM [V] — tracking well below guide.
- New products: Aushadhi Express (Hyderabad–JNPT pharma, with Maersk); PSA MoU (JNPA–CONCOR ICDs); DPD/cabotage policy (+38% DPD volumes); 30% of Bharat Container Shipping Line; ~700 own-BL containers to the Middle East (halted by conflict) [V].
- Primer adds: ₹15,000 Cr revenue ambition by FY29; EXIM ~66% of standalone revenue (>₹6,000 Cr), domestic ~₹3,051 Cr (₹3,130 Cr FY25) [primer].

**Ownership (Sep-2026) [V]:** GoI 54.80%; FIIs 8.09% (19.55% Dec-23); DIIs 30.01% (22.76%); public 7.12%; shareholders 3.47 lakh. Board: CMD Sanjay Swarup; Director (P&S) additional charge V.K. Singh extended 3 months from 1-Nov-2026; non-official director Anand Saklecha appointed 6-Oct-2026 [V screener; V call]. Minor GST demands disclosed 21-Oct (₹2.92 Cr + ₹2.58 Cr plus interest/penalty) [V].

**Story bullets**
- **Defines it:** the incumbent "box railroad" — terminals on railway land, ~55% rail share, debt-free, 53% payout.
- **Edge:** terminal network, rakes and containers, port JV (GTI at JNPT with APM), DFC alignment (NCR–JNPT/Mundra).
- **Main risk:** the DFC volume shift is not showing (Q2 FY27 EXIM flat; JNPA rail share falling) while realisation per TEU falls with double-stacking and lead; share loss to private CTOs and GCTs; government control (dividend demands, privatisation overhang).
- **What changed since the primer (7-Jul):** WDFC formally completed (8-Sep); Q2 volumes stalled; stock −10% (m-cap ₹36,300 → ₹32,507 Cr), near 52-week low.

**Sources:** screener.in/company/CONCOR/consolidated (21-Oct-26); BSE: Q4 FY26 call transcript (26-May-26, filed 3-Jun) and Sep-2026 physical volumes (21-Oct-26) [URLs §3.5]; primer concor.html.

---

## 2.2 Delhivery (DELHIVERY · 543529) — India's largest integrated 3PL: express parcel, PTL, SCS, FTL, cross-border; owns Ecom Express

**Standardised record (screener consolidated) [V]**
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM |
|---|---|---|---|---|---|---|
| Revenue | 6,882 | 7,225 | 8,142 | 8,932 | 10,508 | 11,145 |
| Operating profit | −475 | −452 | 127 | 376 | 640 | 630 |
| OPM % | −7 | −6 | 1.6 | 4.2 | 6 | 6 |
| Other income | 156 | 319 | 439 | 442 | 340 | 332 |
| Depreciation | 611 | 831 | 722 | 535 | 695 | 737 |
| Interest | 100 | 89 | 89 | 126 | 144 | 144 |
| PAT | −1,011 | −1,008 | −249 | 162 | 153 | 93 |
| ROCE % | −17 | −11 | −2 | 2 | 1 | — |
| CFO | −241 | −30 | 472 | 567 | 911 | — |
| FCF | −780 | −624 | 4 | 92 | 506 | — |
- FY19 revenue ₹1,654 Cr with OP −₹1,618 Cr; 5-yr sales CAGR 24%; 3-yr stock CAGR −3%, 1-yr −18% [V].
- **Quarterly (₹ Cr, screener) [V]:** Jun-25 2,294 / OP 141 / PAT 91 · Sep-25 2,559 / 68 / −50 · Dec-25 2,805 / 209 / 40 · Mar-26 2,850 / 214 / 72 · **Jun-26 2,931 / 139 (4.8%) / 32**.
- **Company Q1 FY27 [V presentation]:** revenue from services ₹2,931 Cr (+27.8% YoY, +2.9% QoQ); total income ₹3,045 Cr; **EBITDA ₹156 Cr (5.3%) ex-integration** (Q1 FY26 ₹149 Cr/6.5%; Q4 FY26 ₹231 Cr/8.1%); reported EBITDA ₹142 Cr; adjusted EBITDA ₹76 Cr (2.6%); PAT ₹62 Cr pre-integration / ₹32 Cr reported. Integration cost ₹17 Cr.
- **Service-line FY26 [V]:** Transport (Express + PTL) revenue ₹8,939 Cr, adjusted EBITDA ₹561 Cr (6.3%); SCS ₹729 Cr, ₹0 Cr; Others (FTL + cross-border) ₹770 Cr, −₹28 Cr; New initiatives (Local, Rapid, Financial services) ₹47 Cr, −₹76 Cr; total ₹10,486 Cr / ₹457 Cr (4.4%). Service EBITDA ₹1,501 Cr (14.4%): Express ₹1,151 Cr (17.2%), PTL ₹248 Cr (11.0%), SCS ₹79 Cr (10.9%). Corporate overheads ₹968 Cr (9.3%; wages ₹515, tech ₹221, G&A ₹207, marketing ₹26).
- **Balance sheet Mar-26 [V]:** net worth ₹9,687 Cr; borrowings ₹1,463 Cr (≈ all lease liabilities; finance cost "other than lease" ≈ ₹0–1 Cr a quarter [V presentation]); investments ₹2,961 Cr; fixed assets ₹5,432 Cr (incl. goodwill/intangibles from Ecom/Spoton [E]). Debtor days 48; WC days 37.
- **Valuation [V]:** ₹389 (52-wk ₹524/₹374), m-cap ₹29,044 Cr, P/E 244 (TTM), BV ₹129, P/B 3.02, ROCE 1.01%, ROE −0.21%. ESOP overhang: 0.8% vested + 2.0% unvested + 4.1% ungranted (incl. 2.0% performance ESOPs unlocking at ₹800/₹1,000/₹1,200 share prices); P&L ESOP charge ₹139 Cr FY27, ₹94 Cr FY28 [V presentation].

**Native KPIs [V presentation/call]**
- Express shipments **322m Q1 FY27** (+55.2% YoY, +5.2% QoQ; base effect from Ecom consolidated from Q2 FY26); express revenue ₹1,869 Cr (+33.2%); yield ~₹58/parcel [E].
- PTL **542 kt** (+18.4% YoY, −1.4% QoQ); PTL revenue ₹633 Cr (+24.5%); yield "nearly ₹12/kg" (+37 paise YoY; ~6 paise from fuel).
- Service EBITDA margin Q1 FY27 13.1% (Express 15.6%, PTL 11.2%); targets: Express 16–18% "in H2… closer to the higher end"; PTL exit FY27 at 15–15.5% (exited FY26 at 13.4%).
- Network: 18,810 PIN codes; 54,096 active customers; 23.3m sq ft; 136 gateways; 48 automated sort centres; 73 sorters; 141 freight service centres; 157 processing centres; 4,266 express delivery centres; 694 partner centres; team 75,074; partner agents 82,768; fleet 20,663 daily avg.
- FY27 express volume growth guide 20–30%, "towards the better end"; market-share gains vs other 3PLs and vs in-house logistics; no dark-store operations for quick commerce; Delhivery Direct GMV ~₹150 Cr vs ₹250 Cr FY27 plan.
- Q1 FY27 headwinds: labour shortages, elections/weather, fuel inflation, Labour Codes; SCS start-up costs on two large contracts (SCS adj. EBITDA −₹8 Cr).
- Primer: Ecom acquired for up to ₹1,407 Cr (>99.8%; completed 18-Jul-2025); integration cost < ₹300 Cr estimate; ~85% of Ecom's support costs removed; Meesho had been ~52% of Ecom revenue [primer].

**Ownership (Sep-2026) [V]:** no promoter; FIIs 39.54% (62.71% Dec-23); DIIs 45.95% (17.02%); public 14.51%. Largest holder historically SoftBank (~11–18%, trimming) [primer]. CEO Sahil Barua (~1.7%) [primer].

**Story bullets**
- **Defines it:** the scale 3PL of Indian e-commerce and B2B PTL; just profitable (reported PAT 1.5% of revenue).
- **Edge:** density (most parcels through the same nodes), automation, PTL network integrated with express, absorbed Ecom's volume at ~20% of Ecom's last valuation.
- **Main risk:** in-sourcing by marketplaces (Valmo, Ekart, ATS), new listed competition (Shadowfax), labour/fuel inflation; profits still mostly treasury income (other income ₹340 Cr > PAT ₹153 Cr in FY26).
- **What changed since the primer (7-Jul):** Q1 FY27 margin dip (adj. EBITDA 2.6%); integration costs nearly done; m-cap ₹37,000 → ₹29,044 Cr (−22%); FIIs sold, DIIs bought.

**Sources:** screener.in/company/DELHIVERY/consolidated; BSE: Q1 FY27 presentation (8-Aug-26) and transcript (13-Aug-26); primer delhivery.html.

---

## 2.3 Blue Dart Express (BLUEDART · 526612) — DHL group's Indian express arm; own air freighter network

**Standardised record (screener consolidated) [V]**
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM |
|---|---|---|---|---|---|---|
| Revenue | 4,410 | 5,172 | 5,268 | 5,720 | 6,141 | 6,357 |
| Operating profit | 1,000 | 938 | 853 | 876 | 951 | 1,016 |
| OPM % | 23 | 18 | 16 | 15 | 15 | 16 |
| Other income | −5 | 32 | 51 | 38 | −2 | 3 |
| Depreciation | 395 | 394 | 433 | 485 | 536 | 552 |
| Interest | 87 | 67 | 78 | 82 | 86 | 88 |
| PAT | 382 | 371 | 301 | 252 | 247 | 287 |
| Dividend payout % | 37 | 19 | 20 | 24 | 24 | — |
| ROCE % | 31 | 26 | 19 | 16 | 16 | — |
| CFO | 860 | 717 | 847 | 735 | 810 | — |
| FCF | 689 | 147 | 585 | 488 | 498 | — |
- 10-yr sales CAGR 9%, profit 3%; 5-yr ROE 25%; stock 10-yr −1%, 5-yr −7%, 1-yr −21% [V].
- **Quarterly [V screener]:** Jun-25 1,442 / OP 196 (14%) / PAT 49 · Sep-25 1,549 / 252 (16%) / 81 · Dec-25 1,616 / 281 (17%) / 68 (after ₹44 Cr labour-code exceptional) · Mar-26 1,533 / 222 (14%) / 49 · **Jun-26 1,658 / 261 (16%) / 88** (+15.0% revenue, +80% PAT YoY).
- **Company basis [V presentation]:** FY26 revenue ₹6,140.9 Cr; consolidated EBITDA (pre-exceptional) ₹992.5 Cr (16.05%); EBT ₹370.8 Cr pre-exceptional, ₹326.8 Cr after; EAT ₹247.4 Cr; EPS ₹104.26. Standalone EBITDA ₹649.2 Cr (10.44%), EAT ₹239.7 Cr. Q1 FY27 consolidated EBITDA ₹276.6 Cr (16.53%), EAT ₹88.5 Cr (5.29%); standalone EBITDA 11.44%.
- **Balance sheet Mar-26 [V]:** net worth ₹1,777 Cr; borrowings ₹1,142 Cr (aircraft and premises leases [E]; company calls itself "debt free" [V presentation]); investments ₹413 Cr; fixed assets ₹2,035 Cr. Debtor days 55; WC days −35.
- **Valuation [V]:** ₹4,387 (52-wk ₹7,036/₹4,346 — ~1% above the low), m-cap ₹10,412 Cr, P/E 32.1 (TTM), BV ₹749, P/B 5.86, dividend yield 0.57% (₹25/share), ROCE 15.8%, ROE 15.7%.

**Native KPIs [V presentation/call]**
- Fleet **6 × Boeing 757-200 + 2 × Boeing 737-800** (Blue Dart Aviation, 100% sub); 56,400+ locations; 13,300+ employees; subsidiaries Blue Dart Aviation and Concorde Air Logistics.
- FY26: 1,439 kt; "404 million shipments" (label: eCommerce; likely total — FLAG). Q1 FY27: **364,430 t (+~7%) and 96.15m shipments (+~2%)**.
- Revenue mix: B2B 70% / B2C 30%; air 60% / ground 40% (revenue); air:ground 1:3 by kilos. Ground B2B +14% in Q1 FY27; e-commerce revenue >10%.
- Pricing: GPI realisation 4–5% a year plus customer-specific corrections; monthly fuel surcharge tied to local diesel/ATF.
- Pallet utilisation 85–90%; two aircraft added recently (utilisation back to pre-acquisition levels) [V call].
- Capex: standalone ₹100–150 Cr/yr; aviation capex = maintenance/engine cycles; new hubs (2 major in North added; South/Mumbai consolidation planned).
- Strategy: "growing business profitably"; e-commerce "a growth driver… not a completely focus area"; India Post MoU (9-Oct-2026) for Tier III/IV reach [V screener].

**Ownership (Sep-2026) [V]:** DHL (DHL Express Singapore / Deutsche Post group) 75.00%; FIIs 3.31%; DIIs 14.30% (HDFC MF ~8.5%, Kotak MF ~1.9%, ICICI Pru Life 2.2% per Jun-26 slide [V presentation]); public 7.39%.

**Story bullets**
- **Defines it:** premium time-definite express with its own airline; 75% DHL-owned; consistent cash generator.
- **Edge:** control of the overnight air clock, B2B franchise, DHL network for international.
- **Main risk:** e-commerce share being ceded to Delhivery/Shadowfax/captives; fixed-cost squeeze in soft quarters; ATF/diesel volatility; thin free float; 50% de-rating from the 52-week high.
- **What changed since the primer (19-Jul):** Q1 FY27 PAT +80% (margin recovery to 16.5%); m-cap ₹12,000 → ₹10,412 Cr; P/E ~47 → 32 (TTM).

**Sources:** screener.in/company/BLUEDART/consolidated; BSE: Q1 FY27 investor presentation (4-Aug-26) and transcript (8-Aug-26); primer blue-dart-express.html.

---

## 2.4 BlackBuck Ltd (BLACKBUCK · 544288; formerly Zinka Logistics Solutions) — digital platform for truck operators

**Standardised record (screener consolidated) [V]**
| ₹ Cr | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 | TTM |
|---|---|---|---|---|---|---|---|
| Revenue | 867 | 119 | 176 | 297 | 427 | 652 | 713 |
| Operating profit | −200 | −231 | −232 | −158 | 93 | 167 | 176 |
| OPM % | −23 | −194 | −132 | −53 | 22 | 26 | 25 |
| Other income | 26 | −17 | −34 | −7 | −308 | 59 | 59 |
| Depreciation | 11 | 15 | 20 | 25 | 34 | 53 | 66 |
| PAT | −241 | −285 | −290 | −194 | −9 | 160 | 169 |
| ROCE % | — | −29 | −36 | −32 | 11 | 13 | — |
| CFO | 60 | −78 | −119 | 45 | 58 | 169 | — |
- FY21's ₹867 Cr revenue was the old gross freight-marketplace model (before the pivot to payments/telematics) [E; K].
- **Quarterly [V screener]:** Jun-25 144 / OP 40 / PAT 34 · Sep-25 151 / 37 / 29 · Dec-25 172 / 45 / 32 · Mar-26 185 / 45 / 66 (DTA) · **Jun-26 204 / 50 (24%) / 42**.
- **Company Q1 FY27 [V presentation]:** total income ₹220.48 Cr (+38%); revenue from ops ₹204.17 Cr (+42%): core (payments & telematics) ₹145.18 Cr (+21%), growth (Superloads, vehicle finance) ₹58.99 Cr (+153%); net revenue ₹165.03 Cr (+25%); direct costs ₹12.29 Cr; contribution ₹152.74 Cr (93%); adjusted EBITDA ₹54.62 Cr (+16%); EBITDA ₹49.71 Cr (+23%); PBT ₹42.12 Cr (−8%); PAT ₹42.17 Cr (+25%). ESOP projected ₹4.37 Cr Q2 FY27 falling to ₹1.03 Cr by Q1 FY29.
- **Balance sheet Mar-26 [V]:** net worth ₹1,422 Cr; borrowings ₹59 Cr (NBFC + leases); investments ₹50 Cr; **other assets ₹1,567 Cr (IPO proceeds in deposits/treasury + loan book + receivables [E])**. Debtor days 15; WC days −22.
- **Valuation [V]:** ₹554 (52-wk ₹735/₹495), m-cap ₹10,084 Cr, P/E 58.7 (TTM), BV ₹78.2, P/B 7.08, ROCE 12.8%, ROE 12.2%.

**Native KPIs [V presentation/call; primer]**
- Average monthly transacting truck operators **883,386** (+13% YoY, +2% QoQ); ≥2 services 458,919 (+19%); daily app time 44.11 min.
- Tolling GTV **₹7,045 Cr Q1 FY27** (+16% YoY, −1% QoQ); 17.84 crore toll transactions (+12%, −3% QoQ). FY26 GTV ₹25,904 Cr (+27%) [primer]. Market share ~32.9% of CV toll payments (FY24, RHP) [primer].
- Distribution 10K+ touchpoints, 80%+ district presence.
- Telematics: "highest ever quarterly sale of new devices" in Q1 FY27.
- Superloads: live in 14 cities (4 original: Bengaluru, Hyderabad, Mumbai, Chennai; 10 added by Mar/Apr-2026); investment phase; loads business slump-sold to WOS BTSPL (12-Oct-2026) [V].
- Vehicle finance (Blackbuck Finserve NBFC): to reach profitability by end-FY27; book ~₹60 Cr own + ~₹600 Cr partner-managed [primer; FLAG].
- FY26 segments: truck-operator services ₹641.95 Cr; lending ₹10.99 Cr [primer].
- Incremental revenue → EBITDA conversion 60–85% in core [V call].
- Take rate (net revenue ÷ toll GTV) ~2.3% [E]; ARPU ~₹623/operator/month [E].

**Ownership (Sep-2026) [V]:** promoters (co-founders Rajesh Yabaji, Chanakya Hridaya, Ramasubramanian B. [K]) 24.99% (27.84% Dec-24); FIIs 31.01% (11.73%); DIIs 14.97%; public 29.04% (incl. VC investors such as Accel, Quickrout/Tribe, Sands, IFC, Peak XV [K]). Shareholders 87,173.

**Story bullets**
- **Defines it:** fintech-style platform for India's small truckers; tolling is the wedge; profitability since FY25 operating level.
- **Edge:** distribution in trucking villages, 880k+ users, 93% contribution margin, data for underwriting.
- **Main risk:** toll-regulation change; trucking slowdown (April 2026); Superloads cash burn; credit losses in vehicle finance; P/E ~59–63× and DTA-flattered PAT.
- **What changed since the primer (3-Aug):** Q1 FY27 PAT ₹42 Cr; loads business carve-out; Q2 board 29-Oct; m-cap ₹9,950 → ₹10,084 Cr (little changed).

**Sources:** screener.in/company/BLACKBUCK/consolidated; BSE: Q1 FY27 presentation (29-Jul-26) and transcript (3-Aug-26); screener announcements (12-Oct, 21-Oct-26); primer blackbuck.html.

---

## 2.5 TVS Supply Chain Solutions (TVSSCS · 543965) — integrated supply chain (ISCS) + global forwarding (GFS); 70% overseas

**Standardised record (screener consolidated) [V]**
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | TTM |
|---|---|---|---|---|---|---|
| Revenue | 9,250 | 9,994 | 9,200 | 9,996 | 11,003 | 11,746 |
| Operating profit | 621 | 672 | 705 | 673 | 778 | 830 |
| OPM % | 7 | 7 | 8 | 7 | 7 | 7 |
| Other income | 12 | 62 | −7 | 63 | 126 | 34 |
| Depreciation | 461 | 502 | 557 | 544 | 570 | 601 |
| Interest | 160 | 193 | 210 | 164 | 165 | 165 |
| PAT | −46 | 42 | −90 | −10 | 117 | 68 |
| ROCE % | 6 | 6 | 5 | 5 | 10 | — |
| CFO | 601 | 734 | 128 | 672 | 746 | — |
| FCF | 501 | 590 | 16 | 511 | 481 | — |
- FY19 revenue ₹6,780 Cr; 5-yr sales CAGR 10%; 3-yr stock CAGR −19%, 1-yr −10% [V].
- **Quarterly [V screener]:** Jun-25 2,592 / OP 177 / PAT 71 (InvIT gain) · Sep-25 2,663 / 182 / 16 · Dec-25 2,716 / 206 / 11 · Mar-26 3,032 / 218 / 18 · **Jun-26 3,335 / 225 (7%) / 22**.
- **Company FY26 [V presentation]:** revenue ₹11,003.0 Cr; EBITDA ₹782.6 Cr; adjusted EBITDA ₹773.1 Cr (7.0%); RoU depreciation ₹403.4 Cr; other D&A ₹167.1 Cr; EBIT ₹212.2 Cr; finance cost ₹75.0 Cr + lease interest ₹82.9 Cr; adjusted PBT ₹99.3 Cr; InvIT gain ₹177.2 Cr; exceptional ₹105.6 Cr; PBT ₹168.5 Cr; tax ₹51.5 Cr; **PAT ₹117.0 Cr; operational PAT ₹69.0 Cr**. OCF ₹243 Cr (company definition) and cash ₹613 Cr at Mar-26.
- **Company Q1 FY27 [V]:** revenue ₹3,335.2 Cr (+28.7% YoY, +10% QoQ); adjusted EBITDA ₹232.2 Cr (7.0%, +34%); adj. PBT ₹32.1 Cr (+70.7%); PAT ₹22.5 Cr (Q1 FY26 ₹71.1 Cr incl. InvIT gain; operational ₹8.8 Cr → +156%). ISCS ₹2,417 Cr (+21.9%; 8.1%), GFS ₹918 Cr (+50.6%; 4.1%, from 2.1%). India ₹998 Cr (+43.9%: ISCS +30.2%, GFS +84.1%); RoW ₹2,338 Cr (+23.1%: ISCS +19.0%, GFS +37.1%). Revenue bridge: Q1 FY26 ₹2,592 + new wins ₹543 + price/volume ₹295 + inorganic (Swamy & Sons) ₹31 − churn ₹126 = ₹3,335 Cr.
- **Balance sheet Mar-26 [V]:** net worth ₹2,033 Cr; borrowings ₹2,755 Cr (incl. leases; up from ₹2,088 Cr); investments ₹280 Cr; fixed assets ₹2,859 Cr; inventory days 95; payable days 320; CCC −170; WC days −21.
- **Valuation [V]:** ₹114 (52-wk ₹146/₹90.3), m-cap ₹5,047 Cr, P/E 71.2 (TTM), BV ₹46.1, P/B 2.47, ROCE 10.1%, ROE 9.7%. Credit: Ind AA, outlook revised Stable → Positive [V presentation].

**Native KPIs [V presentation]**
- Segments FY26: ISCS ~75% (~₹8,239 Cr), GFS ~25% (~₹2,764 Cr) [V split; primer values]. (Our primer calls the second segment "Network Solutions"; company now reports GFS.)
- Customer industries FY26: industrial 32%, automotive 25%, consumer 14%, tech & tech infra 12% [V].
- Footprint: 26 countries; 435 warehouses; 25.1m sq ft (India 19.6m, Europe 2.2m, N America 2.0m, APAC 1.3m); employees: India 13,039, Europe 2,173, N America 641, APAC 748 (permanent; total ~16,500) [V].
- Customers: 7,100+ active; Fortune Global 500 clients 61 (FY22) → 72 → 78 → 91 → 100 (FY26) [V].
- Pipeline: ₹4,500 Cr (Q3 FY25) → ₹7,500 Cr (Q1 FY27); quarterly new business wins ₹160–235 Cr through FY26 → ₹543 Cr in Q1 FY27 (record) [V chart reading].
- Guidance: "mid-teen growth in FY27" [V MD message].
- Deals: Swamy & Sons 3PL (22-May-2026; FMCG/FMCD distribution); ALA Group (Italy) A&D partnership — 51% of TVS SCS ALA India for ₹10.19 Cr (6-Oct-2026); SPC International merger sanctioned (1-Oct-2026); "Project One" European integration; Oracle ERP in India [V].

**Ownership (Sep-2026) [V]:** promoter group 43.03% (TVS Mobility / R. Dinesh family [K]); FIIs 2.42%; DIIs 2.24%; public 52.30% (includes pre-IPO PE such as Omega TC / Tata Capital Growth Fund / Kotak SSF [K; FLAG]). Shareholders 1.20 lakh.

**Story bullets**
- **Defines it:** an India-headquartered, mostly European/US contract-logistics and forwarding group with a fast-growing Indian core.
- **Edge:** embedded multi-year contracts, auto/industrial domain depth, 100 Fortune 500 clients, record order wins.
- **Main risk:** ~1% PBT margin; leases and debt (₹2,755 Cr); European macro; reported PAT includes one-offs (InvIT gain); low institutional ownership (FII+DII <5%).
- **What changed since the primer (22-Aug):** Q1 FY27 revenue +28.7% with adj. EBITDA +34%; ALA JV; m-cap ₹5,900 → ₹5,047 Cr.

**Sources:** screener.in/company/TVSSCS/consolidated; BSE: Q1 FY27 presentation (10-Aug-26), transcript (17-Aug-26); screener announcements (Sep–Oct-26); primer tvs-supply-chain-solutions.html.

---

## 2.6 Reference peer (not a member): Shadowfax Technologies (SHADOWFAX) [V screener 21-Oct-26]
- Revenue FY23 ₹1,415 Cr → FY24 ₹1,885 Cr → FY25 ₹2,485 Cr → **FY26 ₹4,202 Cr (+69%)**; OP −107 / 19 / 63 / **221 (5%)**; PAT −143 / −12 / 6 / **112**; TTM revenue ₹4,737 Cr, OP ₹278 Cr, PAT ₹169 Cr. Quarterly revenue Jun-25 ₹824 → Jun-26 ₹1,358 Cr (+65%).
- Price ₹272 (52-wk ₹302/₹98.6); **m-cap ₹15,997 Cr**; P/E 94.6; ROCE 10%. Promoters 16.46%; FIIs 16.34%; DIIs 28.78% (Sep-26).
- IPO Jan-2026: ₹1,907 Cr (fresh ₹1,000 Cr + OFS ₹907 Cr) at ₹118–124; listed ₹112.6 (−9%) [V-snip]. Network: 4,299 touchpoints, 14,758 PIN codes [V-snip].
- Use: the comparator for Delhivery's express franchise; do NOT add to member aggregates.

---

## 2.7 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
 {"company":"Container Corporation of India","nse":"CONCOR","bse":"531344","fy":"FY26","basis":"screener consolidated 21-Oct-2026",
  "revenue":9079,"revenue_prev":8887,"revenue_growth_pct":2.2,"op_profit":1951,"op_margin_pct":21.5,"company_ebitda_margin_pct":24.33,
  "pat":1246,"pat_prev":1293,"other_income":394,"depreciation":616,"interest":79,"roce_pct":12.6,"roe_pct":9.81,
  "borrowings":965,"investments":1069,"net_debt_screener":-104,"equity":12943,"mcap":32507,"price":427,"pe_ttm":26.2,"pe_fy26":26.1,"pb":2.51,"div_yield_pct":2.01,"ev_op_gross":17.2,
  "q1fy27_revenue":2160,"q1fy27_op":444,"q1fy27_pat":269,"q1fy26_revenue":2154,"q1fy26_op":433,"q1fy26_pat":267,
  "capex_fy26_company":1085.2,"cfo_fy26":1482,"fcf_fy26":344,
  "teu_fy26_mn":5.58,"teu_exim_fy26_mn":4.21,"rail_share_fy26_pct":54.5,"rail_freight_margin_fy26_pct":27.16,"ds_rakes_fy26":6396,"rakes":423,"containers_own":57746,
  "q2fy27_teu":1448379,"q2fy27_exim_teu":1092652,"q2fy27_dom_teu":355727,"q2fy27_teu_yoy_pct":0.53,"h1fy27_teu_yoy_pct":4.48,
  "promoter_pct":54.80,"fii_pct":8.09,"dii_pct":30.01,"q2fy27_board":null},
 {"company":"Delhivery","nse":"DELHIVERY","bse":"543529","fy":"FY26","basis":"screener consolidated 21-Oct-2026",
  "revenue":10508,"revenue_company":10486,"revenue_prev":8932,"revenue_growth_pct":17.6,"op_profit":640,"op_margin_pct":6.1,
  "adjusted_ebitda_company":457,"service_ebitda_company":1501,"service_ebitda_margin_pct":14.4,"ecom_integration_cost_fy26":148,
  "pat":153,"pat_prev":162,"other_income":340,"depreciation":695,"interest":144,"roce_pct":1.01,"roe_pct":-0.21,
  "borrowings":1463,"investments":2961,"net_debt_screener":-1498,"equity":9687,"mcap":29044,"price":389,"pe_ttm":244,"pe_fy26":189.8,"pb":3.02,"div_yield_pct":0,"ev_op_gross":47.7,
  "q1fy27_revenue":2931,"q1fy27_op":139,"q1fy27_pat":32,"q1fy26_revenue":2294,"q1fy26_op":141,"q1fy26_pat":91,
  "q1fy27_express_shipments_mn":322,"q1fy27_ptl_kt":542,"q1fy27_express_rev":1869,"q1fy27_ptl_rev":633,"q1fy27_express_se_margin_pct":15.6,"q1fy27_ptl_se_margin_pct":11.2,
  "team_size":75074,"gateways":136,"infra_mn_sqft":23.3,
  "promoter_pct":0,"fii_pct":39.54,"dii_pct":45.95,"q2fy27_board":null},
 {"company":"Blue Dart Express","nse":"BLUEDART","bse":"526612","fy":"FY26","basis":"screener consolidated 21-Oct-2026",
  "revenue":6141,"revenue_prev":5720,"revenue_growth_pct":7.4,"op_profit":951,"op_margin_pct":15.5,"company_ebitda_consol_pre_exc":992.5,"company_ebitda_margin_pct":16.05,"standalone_ebitda_margin_pct":10.44,
  "pat":247,"pat_prev":252,"exceptional_fy26":44,"other_income":-2,"depreciation":536,"interest":86,"roce_pct":15.8,"roe_pct":15.7,
  "borrowings":1142,"investments":413,"net_debt_screener":729,"equity":1777,"mcap":10412,"price":4387,"pe_ttm":32.1,"pe_fy26":42.2,"pb":5.86,"div_yield_pct":0.57,"ev_op_gross":12.1,
  "q1fy27_revenue":1658,"q1fy27_op":261,"q1fy27_pat":88,"q1fy26_revenue":1442,"q1fy26_op":196,"q1fy26_pat":49,
  "tonnage_fy26_kt":1439,"q1fy27_tonnage_t":364430,"q1fy27_shipments_mn":96.15,"aircraft":8,"b2b_rev_share_pct":70,"air_rev_share_pct":60,
  "promoter_pct":75.00,"fii_pct":3.31,"dii_pct":14.30,"q2fy27_board":null},
 {"company":"BlackBuck","nse":"BLACKBUCK","bse":"544288","fy":"FY26","basis":"screener consolidated 21-Oct-2026",
  "revenue":652,"revenue_prev":427,"revenue_growth_pct":52.7,"op_profit":167,"op_margin_pct":25.6,
  "pat":160,"pat_prev":-9,"other_income":59,"depreciation":53,"interest":6,"roce_pct":12.8,"roe_pct":12.2,
  "borrowings":59,"investments":50,"net_debt_screener":9,"equity":1422,"mcap":10084,"price":554,"pe_ttm":58.7,"pe_fy26":63.0,"pb":7.08,"div_yield_pct":0,"ev_op_gross":60.7,
  "q1fy27_revenue":204,"q1fy27_op":50,"q1fy27_pat":42,"q1fy26_revenue":144,"q1fy26_op":40,"q1fy26_pat":34,
  "q1fy27_net_revenue":165.03,"q1fy27_adj_ebitda":54.62,"contribution_margin_pct":93,
  "transacting_operators":883386,"users_2plus_services":458919,"q1fy27_toll_gtv":7045,"fy26_toll_gtv":25904,"take_rate_pct_est":2.3,
  "promoter_pct":24.99,"fii_pct":31.01,"dii_pct":14.97,"q2fy27_board":"2026-10-29"},
 {"company":"TVS Supply Chain Solutions","nse":"TVSSCS","bse":"543965","fy":"FY26","basis":"screener consolidated 21-Oct-2026",
  "revenue":11003,"revenue_prev":9996,"revenue_growth_pct":10.1,"op_profit":778,"op_margin_pct":7.1,"adjusted_ebitda_company":773.1,
  "pat":117,"pat_operational_company":69.0,"invit_gain_fy26":177.2,"exceptional_fy26":105.6,"pat_prev":-10,"other_income":126,"depreciation":570,"rou_depreciation":403.4,"lease_interest":82.9,"interest":165,"roce_pct":10.1,"roe_pct":9.70,
  "borrowings":2755,"investments":280,"cash_company":613,"net_debt_screener":2475,"equity":2033,"mcap":5047,"price":114,"pe_ttm":71.2,"pe_fy26":43.1,"pb":2.47,"div_yield_pct":0,"ev_op_gross":10.0,
  "q1fy27_revenue":3335,"q1fy27_op":225,"q1fy27_pat":22,"q1fy26_revenue":2592,"q1fy26_op":177,"q1fy26_pat":71,
  "iscs_share_pct":75,"gfs_share_pct":25,"q1fy27_india_rev":998,"q1fy27_row_rev":2338,"pipeline":7500,"q1fy27_new_wins":543,"warehouse_mn_sqft":25.1,"fortune500_clients":100,
  "promoter_pct":43.03,"fii_pct":2.42,"dii_pct":2.24,"q2fy27_board":null}
]
```

## 2.8 Conflicts and gaps (company level)
- **Delhivery FY26 PAT:** primer ₹321 Cr (+98%) vs reported ₹153 Cr (screener; company quarterly PAT 91/−50/40/72). Use ₹153 Cr; quote ₹301 Cr only as "ex-integration cost" [E].
- **Delhivery FY26 EBITDA:** primer ₹764 Cr (7.3%) vs screener OP ₹640 Cr (6.1%) vs company adjusted ₹457 Cr (4.4%). Basis must be stated.
- **Delhivery revenue:** screener ₹10,508 Cr vs company "revenue from services" ₹10,486 Cr (Q2 FY26 ₹2,559 vs ₹2,546) — screener likely includes other operating revenue. Immaterial.
- **Blue Dart FY26 PAT:** primer "~₹240 Cr, down sharply" vs ₹247.4 Cr, **−2% YoY** (FY25 ₹252 Cr). EBITDA primer ~₹940 Cr (15.3%) vs company consolidated ₹992.5 Cr (16.05%) pre-exceptional / screener ₹951 Cr (15.5%).
- **CONCOR EBITDA margin:** primer "~24%" (management standalone) vs screener consolidated 21.5%.
- **TVS SCS PAT quality:** ₹117 Cr reported vs ₹69 Cr operational (InvIT gain ₹177 Cr, exceptional ₹106 Cr).
- **TVS SCS geography:** primer "roughly half outside India" vs company Q1 FY27 RoW 70%.
- **BlackBuck PAT:** includes DTA credits (Q4 FY25, Q4 FY26). FY26 tax rate 4%.
- **Net debt:** screener basis misses bank deposits for CONCOR and BlackBuck; TVS company cash ₹613 Cr vs screener investments ₹280 Cr.
- **Q2 FY27 board dates** unknown for four of five.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (all five; ₹ Cr; screener consolidated 21-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP | OPM % | PAT (reported) | PAT (adj., company basis) | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | M-cap | % of group m-cap | P/E FY26 | EV/OP (gross debt) | Volume (latest) | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CONCOR | 9,079 | +2.2 | 1,951 | 21.5 | 1,246 | 1,246 | 2,160 | +0.3 | 20.6 | 269 | 32,507 | 37.3 | 26.1 | 17.2× | Q2 FY27 1.45m TEU (+0.5%) | Rail share 54.5%; RFM 27.2% (FY26) |
| Delhivery | 10,508 | +17.6 | 640 | 6.1 | 153 | ~301 ex-integration [E] | 2,931 | +27.8 | 4.7 | 32 | 29,044 | 33.3 | 189.8 | 47.7× | 322m parcels; 542 kt PTL (Q1) | Service EBITDA 13.1% (Q1) |
| Blue Dart | 6,141 | +7.4 | 951 | 15.5 | 247 | 247 (pre-exc. ~280 [E]) | 1,658 | +15.0 | 15.7 | 88 | 10,412 | 12.0 | 42.2 | 12.1× | 364 kt; 96.2m shipments (Q1) | Consol. EBITDA 16.5% (Q1) |
| BlackBuck | 652 | +52.7 | 167 | 25.6 | 160 | ~125 at 25% tax [E] | 204 | +41.7 | 24.5 | 42 | 10,084 | 11.6 | 63.0 | 60.7× | 883k truck operators | Toll GTV ₹7,045 Cr (+16%) |
| TVS SCS | 11,003 | +10.1 | 778 | 7.1 | 117 | 69 (operational) | 3,335 | +28.7 | 6.7 | 22 | 5,047 | 5.8 | 43.1 | 10.0× | 25.1m sq ft; 435 WH | Adj. EBITDA 7.0% (Q1) |
| **Total (5)** | **37,383** | **+10.1** | **4,487** | **12.0** | **1,923** | **~2,021 [E]** | **10,288** | **+19.3** | **10.9** | **453** | **87,094** | 100 | **45.3** | **20.8×** | | |

Notes:
- FY25 bases are screener consolidated for all five. Q1 FY26 comparatives: CONCOR 2,154/433/267; Delhivery 2,294/141/91; Blue Dart 1,442/196/49; BlackBuck 144/40/34; TVS 2,592/177/71 (₹ Cr revenue/OP/PAT) [V].
- "PAT (adj.)" is NOT one basis — it mixes company definitions (Delhivery ex-integration, TVS operational, BlackBuck normalised tax). Use it only as a sensitivity; **all aggregate rows below use reported PAT.**
- Blue Dart pre-exceptional PAT ≈ 247 + 44 × (1 − 0.25) ≈ ₹280 Cr [E].

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one basis**: screener consolidated FY26 and FY25 (revenue, OP, reported PAT, borrowings, investments, net worth, D&A, interest; capex = CFO − FCF); Q1 FY27 vs Q1 FY26 (screener quarters); m-cap 21-Oct-26. Ratios are ratios of the sums (never averages). Computation script: /tmp/logistics-dossier/scripts/agg.py.

**(a) FY26 by subgroup [E]**

| Group | Members | FY26 rev | FY25 rev | YoY | OP | OPM | PAT (reported) | FY25 PAT | M-cap | % of 5-co m-cap | Agg. m-cap ÷ agg. PAT | Agg. P/B | EV (m-cap + gross debt) ÷ OP | Agg. ROE (PAT ÷ net worth) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **All five** | CONCOR, DLV, BD, BB, TVS | 37,383 | 33,962 | +10.1% | 4,487 | 12.0% | 1,923 | 1,688 | 87,094 | 100% | 45.3× | 3.13× | 20.8× | 6.9% |
| **Asset-heavy** | CONCOR, Blue Dart | 15,220 | 14,607 | +4.2% | 2,902 | 19.1% | 1,493 | 1,545 | 42,919 | 49.3% | 28.7× | 2.92× | 15.5× | 10.1% |
| **Express / parcel** | Delhivery, Blue Dart | 16,649 | 14,652 | +13.6% | 1,591 | 9.6% | 400 | 414 | 39,456 | 45.3% | 98.6× | 3.44× | 26.4× | 3.5% |
| **Asset-light / platform** | BlackBuck, TVS SCS | 11,655 | 10,423 | +11.8% | 945 | 8.1% | 277 | −19 | 15,131 | 17.4% | 54.6× | 4.38× | 19.0× | 8.0% |
| **Ex-CONCOR** | DLV, BD, BB, TVS | 28,304 | 25,075 | +12.9% | 2,536 | 9.0% | 677 | 395 | 54,587 | 62.7% | 80.6× | 3.66× | 23.7× | 4.5% |
| New-age listed (2022–24 IPOs) | Delhivery, BlackBuck | 11,160 | 9,359 | +19.2% | 807 | 7.2% | 313 | 153 | 39,128 | 44.9% | 125.0× | 3.52× | 50.4× | 2.8% |

Check (re-add by hand): All five revenue 9,079 + 10,508 + 6,141 + 652 + 11,003 = 37,383 ✓; OP 1,951 + 640 + 951 + 167 + 778 = 4,487 ✓; PAT 1,246 + 153 + 247 + 160 + 117 = 1,923 ✓; m-cap 32,507 + 29,044 + 10,412 + 10,084 + 5,047 = 87,094 ✓. Asset-heavy: 9,079 + 6,141 = 15,220; OP 1,951 + 951 = 2,902; PAT 1,246 + 247 = 1,493; m-cap 32,507 + 10,412 = 42,919 ✓. Express: 10,508 + 6,141 = 16,649; 640 + 951 = 1,591; 153 + 247 = 400; 29,044 + 10,412 = 39,456 ✓. Asset-light: 652 + 11,003 = 11,655; 167 + 778 = 945; 160 + 117 = 277; 10,084 + 5,047 = 15,131 ✓. Ex-CONCOR: 37,383 − 9,079 = 28,304; 4,487 − 1,951 = 2,536; 1,923 − 1,246 = 677; 87,094 − 32,507 = 54,587 ✓.

**Read:**
- CONCOR is **24% of revenue, 43% of OP, 65% of PAT and 37% of m-cap** — the market pays the least per rupee of profit for the only member with a decade of profits (26× vs 81× for the other four).
- The four ex-CONCOR names grew revenue 12.9% and PAT from ₹395 Cr to ₹677 Cr (+71%), but trade at 81× — the market capitalises the margin path, not current profits.
- Express/parcel (Delhivery + Blue Dart) earns a 3.5% ROE on ₹11,464 Cr of net worth; Blue Dart supplies 62% of the pair's PAT on 37% of its revenue.
- Asset-light/platform swung from a ₹19 Cr loss to ₹277 Cr profit; on TVS operational PAT (₹69 Cr) the pair's PAT would be ~₹229 Cr [E].

**(b) Q1 FY27 vs Q1 FY26 (quarterly, screener) [E]**

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | OPM Q1 FY27 / Q1 FY26 | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|
| All five | 10,288 | 8,626 | +19.3% | 1,119 | 987 | +13.4% | 10.9% / 11.4% | 453 | 512 | −11.5% |
| Asset-heavy (CONCOR, BD) | 3,818 | 3,596 | +6.2% | 705 | 629 | +12.1% | 18.5% / 17.5% | 357 | 316 | +13.0% |
| Express / parcel (DLV, BD) | 4,589 | 3,736 | +22.8% | 400 | 337 | +18.7% | 8.7% / 9.0% | 120 | 140 | −14.3% |
| Asset-light / platform (BB, TVS) | 3,539 | 2,736 | +29.3% | 275 | 217 | +26.7% | 7.8% / 7.9% | 64 | 105 | −39.0% |
| Ex-CONCOR (4) | 8,128 | 6,472 | +25.6% | 675 | 554 | +21.8% | 8.3% / 8.6% | 184 | 245 | −24.9% |
| New-age listed (DLV, BB) | 3,135 | 2,438 | +28.6% | 189 | 181 | +4.4% | 6.0% / 7.4% | 74 | 125 | −40.8% |

**Read:**
- Q1 FY27 revenue +19% (Delhivery's Ecom base effect and TVS's record wins), but PAT −11.5%: Delhivery (₹91 → ₹32 Cr) and TVS (₹71 → ₹22 Cr, the InvIT gain in the base) explain all of the fall. **Ex-TVS-InvIT** (Q1 FY26 TVS operational ₹8.8 Cr), group PAT would be ₹453 vs ₹450 Cr — flat [E].
- Blue Dart was the only member with margin expansion and PAT +80% YoY; CONCOR revenue +0.3%, PAT +0.7%.

**(c) Balance sheet and capex (Mar-26, screener) [E]**
- Borrowings (incl. leases): CONCOR 965; Delhivery 1,463; Blue Dart 1,142; BlackBuck 59; TVS 2,755 → **total ₹6,384 Cr**.
- Investments: 1,069 / 2,961 / 413 / 50 / 280 → total ₹4,773 Cr. Screener-basis net debt = **₹1,611 Cr** — understated net cash: CONCOR and BlackBuck hold large bank deposits in "other assets" (CONCOR other assets ₹6,029 Cr; BlackBuck ₹1,567 Cr) [V; E]. Most of the ₹6,384 Cr is lease liabilities; true group financial debt is small except TVS.
- Net worth: 12,943 / 9,687 / 1,777 / 1,422 / 2,033 → **₹27,862 Cr**; agg. ROE 6.9%.
- D&A ₹2,470 Cr (55% of OP); interest ₹480 Cr; other income ₹917 Cr (48% of PAT — treasury income matters to CONCOR, Delhivery, BlackBuck).
- Capex (CFO − FCF) FY26: CONCOR 1,138; Delhivery 405; Blue Dart 312; BlackBuck 111; TVS 265 → **₹2,231 Cr (6.0% of revenue)**; CONCOR is 51% of it.
- Asset turnover (revenue ÷ net block + CWIP): group 2.01×; asset-heavy 1.50×; asset-light 3.90× [E].

**(d) Ownership (Sep-26, simple averages) [E]**
- Promoter: 39.6% average (range 0% Delhivery – 75% Blue Dart).
- FII: 16.9% average (2.4% TVS – 39.5% Delhivery). DII: 21.5% average (2.2% TVS – 46.0% Delhivery).
- Direction since Dec-23: FIIs sold CONCOR (−11.5 pts) and Delhivery (−23.2 pts); bought BlackBuck (+19.3 pts since Dec-24).

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (21-Oct-26) | Use |
|---|---|---|---|---|
| CONCOR | FY26 revenue / PAT | 9,079 / 1,246 | Same | — |
| CONCOR | EBITDA margin | "~24%" | Screener OP 21.5% consolidated; company 24.33% standalone | State basis; tables 21.5% |
| CONCOR | M-cap | ~₹36,300 Cr (Jul-26) | **₹32,507 Cr**; P/E 26.2; P/B 2.51; yield 2.01% | Screener |
| CONCOR | Rail market share | "~60% of rail container traffic" (rivals table); "~74% → ~56%" | **54.5% FY26** (EXIM 53.9, dom 55.9) | Company |
| CONCOR | Capex FY26 | ~₹1,060 Cr (+23%) | ₹1,085.2 Cr; FY27 budget ₹945 Cr | Company |
| CONCOR | Q2 FY27 volumes | not covered | 14.48 lakh TEU (+0.53%); EXIM −0.07% | Company filing |
| CONCOR | WDFC | "double-stack connectivity to JNPT commissioned" (7-Jul) | trial 31-Mar; formal dedication 8-Sep-2026 | Web |
| CONCOR | Guidance FY27 | not quantified in strip | +9.5% vol (EXIM 8, dom 15); EBITDA 24–25% | Company |
| CONCOR | Promoter | 54.80% | 54.80% | Same |
| Delhivery | FY26 revenue | 10,486 | 10,508 screener / 10,486 company | Either; state basis |
| Delhivery | FY26 PAT | **₹321 Cr (+98%)** | **₹153 Cr (−6%)** reported | Screener — primer wrong |
| Delhivery | FY26 EBITDA | ₹764 Cr (7.3%) | OP ₹640 Cr (6.1%); adj. ₹457 Cr (4.4%); service ₹1,501 Cr (14.4%) | State basis |
| Delhivery | FCF | +₹89 Cr | Screener FCF ₹506 Cr (CFO 911 − capex 405) | Note definition; screener for tables |
| Delhivery | M-cap / P/E | ~₹37,000 Cr; P/E >100 | **₹29,044 Cr**; P/E 244 TTM | Screener |
| Delhivery | Ownership | SoftBank largest (~11–18%) | FIIs 39.5%, DIIs 46.0% (Sep-26) | Screener |
| Delhivery | Q1 FY27 | not covered | 322m parcels (+55%); PTL 542 kt; adj. EBITDA 2.6% | Company |
| Blue Dart | FY26 PAT | ~₹240 Cr "down sharply" | ₹247.4 Cr (−2% YoY) | Company/screener |
| Blue Dart | FY26 EBITDA | ~₹940 Cr (15.3%) | ₹992.5 Cr (16.05%) consolidated pre-exc.; screener ₹951 Cr (15.5%) | Company for prose; screener for tables |
| Blue Dart | Fleet | ~8 aircraft (757/737) | 6 × B757-200 + 2 × B737-800 | Same (be precise) |
| Blue Dart | Delivery reach | ~35,000+ delivery points | 56,400+ locations | Company |
| Blue Dart | M-cap / P/E | ~₹12,000 Cr / ~47× | **₹10,412 Cr / 32.1× TTM (42× FY26)** | Screener |
| Blue Dart | Q1 FY27 | not covered | Rev 1,658 (+15%); EBITDA 16.5%; PAT 88 (+80%); 364 kt | Company/screener |
| BlackBuck | FY26 revenue / PAT | 652 / 160.3 | 652 / 160 | Same |
| BlackBuck | PAT quality | not flagged | includes DTA credit (Q4 FY26 PAT 66 on PBT 40); tax rate 4% | Flag |
| BlackBuck | M-cap | ~₹9,950 Cr | ₹10,084 Cr; P/E 58.7 TTM | Screener |
| BlackBuck | Q1 FY27 | not covered | 883k operators; GTV ₹7,045 Cr; PAT ₹42 Cr | Company |
| BlackBuck | Structure | — | Loads business slump sale to WOS BTSPL (12-Oct-26); Q2 board 29-Oct | Web |
| TVS SCS | FY26 revenue / adj. EBITDA / PAT | 11,003 / 773 / 117 | Same; but operational PAT ₹69 Cr (InvIT gain 177, exceptional 106) | Flag basis |
| TVS SCS | Geography | "roughly half outside India" | RoW 70% of Q1 FY27 revenue | Company |
| TVS SCS | Segment name | ISCS / Network Solutions | ISCS / GFS (global forwarding solutions) | Company |
| TVS SCS | M-cap | ~₹5,900 Cr (~₹134) | ₹5,047 Cr (₹114); P/E 71 TTM | Screener |
| TVS SCS | Q1 FY27 | not covered | Rev +28.7%; adj. EBITDA 7.0%; wins ₹543 Cr; pipeline ₹7,500 Cr | Company |
| TVS SCS | Promoter | ~43% [primer implied] | 43.03% | Same |

## 3.4 Primer issues (format as primer-issues.md)

### From Logistics Solution Providers research (2026-10-21, logistics-industry.md §3.4)

- **delhivery.html — FY26 PAT wrong (stat strip, whatsnew, snapshot, financials):** "PAT ₹321 Cr (up ~98%)" and "~3% net margin". Reported FY26 PAT is **₹153 Cr (−6% YoY vs ₹162 Cr)** — quarters ₹91 / −₹50 / ₹40 / ₹72 Cr [screener 21-Oct-26]. Even ex-Ecom integration cost (₹148 Cr) it is ~₹300 Cr, not ₹321 Cr, and not +98%. Net margin is ~1.5%. The P/E line "On today's ~₹321 Cr of profit… P/E north of 100×" should use ₹153 Cr (FY26 P/E ~190×). Source cited (Whalesbook) is unreliable; use the company Q4/Q1 presentations.
- **delhivery.html — EBITDA basis unstated:** "EBITDA ₹764 Cr, ~7.3% margin" is neither screener OP (₹640 Cr, 6.1%) nor company adjusted EBITDA (₹457 Cr, 4.4%) nor service EBITDA (₹1,501 Cr, 14.4%). State "EBITDA excluding Ecom integration costs (~₹790 Cr), pre-Ind-AS-116 rent adjustment" or switch to the company's adjusted EBITDA. Add the service-line table (Express 17.2%, PTL 11.0% service EBITDA FY26).
- **delhivery.html — FCF figure:** "FCF +₹89 Cr" conflicts with screener FCF ₹506 Cr (CFO ₹911 Cr − capex ₹405 Cr). Name the definition (post-lease-payment FCF?) or replace.
- **delhivery.html — stale valuation/ownership:** m-cap ~₹37,000 Cr → **₹29,044 Cr** (₹389, near 52-week low ₹374). Ownership: FIIs fell from ~52% (Jun-25) to **39.5%**, DIIs rose to **46.0%** (Sep-26). Add Q1 FY27 (322m parcels +55%; PTL 542 kt; adjusted EBITDA 2.6%; integration ₹17 Cr) and the competitor Shadowfax (listed Jan-2026; FY26 revenue ₹4,202 Cr; m-cap ₹16,000 Cr).
- **blue-dart-express.html — FY26 profit story overstated:** "net profit ~₹240 Cr (down sharply on a fixed-cost squeeze)". FY26 consolidated PAT was **₹247.4 Cr vs ₹252 Cr in FY25 (−2%)**, after a ₹44 Cr Labour-Code exceptional; pre-exceptional profit rose [company presentation 4-Aug-26; screener]. "Down sharply" applies only to FY23 → FY25 (₹371 → ₹252 Cr).
- **blue-dart-express.html — EBITDA:** "~₹940 Cr, ~15.3% (derived)" → company consolidated EBITDA before exceptional items **₹992.5 Cr (16.05%)**; standalone ₹649 Cr (10.44%); screener OP ₹951 Cr (15.5%). Explain standalone vs consolidated (aircraft sit in Blue Dart Aviation).
- **blue-dart-express.html — valuation stale:** m-cap ~₹12,000 Cr → **₹10,412 Cr**; P/E ~47× → **32.1× TTM (42× FY26)**; price ₹4,387 is ~1% above the 52-week low (₹4,346) vs a ₹7,036 high.
- **blue-dart-express.html — network facts:** "~35,000+ delivery points" → company: **56,400+ locations**, 13,300+ employees; fleet precisely **6 × B757-200 + 2 × B737-800** [company presentation]. Add Q1 FY27 tonnage 364,430 t and 96.15m shipments, B2B/B2C 70:30, air/ground revenue 60:40, pallet utilisation 85–90%, India Post MoU (9-Oct-2026).
- **concor.html — EBITDA margin basis:** "~24% EBITDA operating margin (FY26)" is management's standalone figure (24.33%). Screener consolidated OP margin is **21.5%**. State the basis in the strip.
- **concor.html — market share stale/inconsistent:** rivals table "~60% of rail container traffic" vs text "~56%"; FY26 company figure is **54.5%** (EXIM 53.9%, domestic 55.9%; FY25 55.9%). The ~60% is CONCOR's share of **JNPT rail boxes**, not the national share — fix the label.
- **concor.html — WDFC status wording:** "WDFC double-stack connectivity to JNPT commissioned" (7-Jul refresh). The final JNPT–New Saphale section had trial runs on 31-Mar-2026 and was formally dedicated on **8-Sep-2026** (326 km, PM; JICA release). Update the DFC section.
- **concor.html — omissions:** FY27 guidance (+9.5% volume; EXIM +8%, domestic +15%; EBITDA 24–25%), FY26 capex ₹1,085 Cr (primer ~₹1,060 Cr), FY27 capex budget ₹945 Cr, port rail coefficients (JNPT 15.1%, Mundra 24.6%, Pipavav 57.5%), **Q2 FY27 volumes +0.53% (EXIM −0.07%)**, JNPA rail share falling to ~12.7% in H1 FY27, 3,000 tank containers approved, 30% of Bharat Container Shipping Line.
- **concor.html — valuation stale:** m-cap ~₹36,300 Cr → **₹32,507 Cr** (₹427, 52-week low ₹421); FII holding 8.09% (from 19.55% in Dec-23).
- **tvs-supply-chain-solutions.html — geography wrong:** "roughly half its revenue earned outside India". Company Q1 FY27: **India 30% / Rest of World 70%** (₹998 Cr vs ₹2,338 Cr); FY26 ISCS Europe alone ~₹4,800 Cr [presentation 10-Aug-26].
- **tvs-supply-chain-solutions.html — PAT quality not flagged:** FY26 PAT ₹117 Cr includes a **₹177.2 Cr TVS ILP InvIT gain** and ₹105.6 Cr exceptional charges; **operational PAT ₹69.0 Cr** (0.6% margin). The "return to profit" framing should cite operational PAT.
- **tvs-supply-chain-solutions.html — segment naming:** the company now reports **ISCS and GFS (Global Forwarding Solutions)**, not "Network Solutions". Values (~₹8,239 Cr / ~₹2,764 Cr) are consistent with the 75/25 split.
- **tvs-supply-chain-solutions.html — valuation and updates:** m-cap ~₹5,900 Cr (~₹134) → **₹5,047 Cr (₹114)**. Add Q1 FY27 (+28.7% revenue; adjusted EBITDA ₹232 Cr, 7.0%; record new wins ₹543 Cr; pipeline ₹7,500 Cr; mid-teen FY27 growth guide), Swamy & Sons acquisition (22-May-26), ALA A&D JV (51%, 6-Oct-26), SPC International merger sanction (1-Oct-26), Ind AA outlook to Positive.
- **blackbuck.html — PAT quality not flagged:** FY26 PAT ₹160 Cr has a ~4% tax rate thanks to deferred-tax-asset recognition (Q4 FY26 PAT ₹65.7 Cr on PBT ₹40 Cr); normalised ~₹125 Cr at 25% tax [E]. Q4 FY25 PAT ₹280 Cr on PBT ₹35 Cr was also a DTA credit.
- **blackbuck.html — gross vs net revenue:** add the company's "net revenue" (Superloads at gross margin): Q1 FY27 net revenue ₹165 Cr (+25%) vs revenue from ops ₹204 Cr (+42%); core businesses +21%.
- **blackbuck.html — updates:** Q1 FY27 (883,386 transacting operators +13%; tolling GTV ₹7,045 Cr +16%; adjusted EBITDA ₹54.6 Cr; PAT ₹42.2 Cr), slump sale of the loads business to WOS BlackBuck Transport Services (12-Oct-2026), Q2 board 29-Oct-2026. M-cap ~₹9,950 → ₹10,084 Cr (immaterial).

## 3.5 Key source URLs
- Screener (fetched 21-Oct-2026, curl, generic UA): https://www.screener.in/company/CONCOR/consolidated/ · https://www.screener.in/company/DELHIVERY/consolidated/ · https://www.screener.in/company/BLUEDART/consolidated/ · https://www.screener.in/company/BLACKBUCK/consolidated/ · https://www.screener.in/company/TVSSCS/consolidated/ · https://www.screener.in/company/SHADOWFAX/consolidated/
- CONCOR Q4 FY26 call transcript (26-May-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c128f551-bda0-4f7d-b0b4-cb5b8085bd39.pdf
- CONCOR physical volumes Sep-2026 (21-Oct-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a3facd16-137b-4e2d-888b-820cb174a24e.pdf
- CONCOR Annual Report 2026: https://www.bseindia.com/xml-data/corpfiling/AttachHis/f7ed8d97-f3e0-4afd-bd99-6af5f3902be8.pdf (not read)
- Delhivery Q1 FY27 presentation (8-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0be94732-68f5-4c22-acf1-b1c62d3ef5d5.pdf
- Delhivery Q1 FY27 transcript (13-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=aa81aa9b-f89c-427c-b289-9015d8289e86.pdf
- Delhivery Annual Report 2026: https://www.bseindia.com/xml-data/corpfiling/AttachHis/f2df7720-e670-4a6a-9dcf-fea3c31421a0.pdf (not read)
- Blue Dart Q1 FY27 investor presentation (4-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c866f8d4-bc88-4c8d-9cbc-e7ba62b3b6fb.pdf
- Blue Dart Q1 FY27 transcript (8-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=932e1518-018c-49ff-a27f-0a9b64bc95ac.pdf
- BlackBuck Q1 FY27 presentation (29-Jul-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=640ebab5-f96a-47b2-a83c-605ef28455b3.pdf
- BlackBuck Q1 FY27 transcript (3-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1784b805-4c21-4543-9987-a1990514d689.pdf
- TVS SCS Q1 FY27 presentation (10-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=23e5d43e-5d28-420e-861d-fe1e742bc26b.pdf
- TVS SCS Q1 FY27 transcript (17-Aug-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d22f7a7a-f497-43dd-a3e7-be7f4333acf7.pdf (downloaded; grep-level use only)
- NCAER/DPIIT logistics cost (Outlook Business, 25-Sep-2025): https://www.outlookbusiness.com/economy-and-policy/indias-logistics-cost-pegged-at-797-pc-of-gdp-in-first-systematic-study
- WDFC dedication (JICA, 8-Sep-2026): https://www.jica.go.jp/english/overseas/india/information/press/2026/1585189_70871.html
- IR FY26 freight loading (Indian Infrastructure, 6-Apr-2026): https://indianinfrastructure.com/2026/04/06/indian-railways-achieves-freight-loading-of-1670-mt-during-fy-2025-26/
- JNPA Sep-2026 / H1 FY27 throughput and rail share (Maritime Gateway): https://www.maritimegateway.com/jnpa-container-throughput-hits-record-834697-teus-in-september-2026/
- Diesel hikes May-2026 (Goodreturns): https://www.goodreturns.in/personal-finance/petrol-prices-diesel-prices-hiked-almost-rs-10-litre-in-10-days-lowest-highest-fuel-prices-city-wise-1510689.html ; News On AIR: https://www.newsonair.gov.in/fuel-prices-in-national-capital-increased-by-about-90-paise-per-litre/
- Redseer express parcel (Maritime Gateway, 29-Mar-2025): https://www.maritimegateway.com/express-parcel-market-to-touch-24-29-billion-shipments-by-fy30-report
- E-way bills Jul-2026 (India Sea Trade News): https://indiaseatradenews.com/?p=152136 [snippet only]
- Delhivery–Ecom CCI approval (Business Standard, 18-Jun-2025): https://www.business-standard.com/amp/markets/news/delhivery-share-rises-2-on-cci-nod-to-acquire-ecom-express-for-1-407-cr-125061800205_1.html [snippet]
- Valmo share data (India Sea Trade News / Axis Capital via search): https://indiaseatradenews.com/meesho-boosts-margins-with-in-house-logistics-eyes-strong-ipo/ [snippet]
- Air cargo (India Sea Trade News / StatTimes): https://indiaseatradenews.com/indias-air-cargo-throughput-surges-16-in-june-2026-to-record-364289-tonnes/ ; https://www.stattimes.com/air-cargo/indian-airports-handled-37-million-tonnes-cargo-in-fy2025-1355218 [snippets]
- NRP 45% / GCTs (CAG press release, Nov-2025): https://cag.gov.in/uploads/PressRelease/PR-MMTAL-press-release-on-21-11-25-069200184611423-88491816.pdf [snippet; direct fetch returned 404]
- GST 2.0 and logistics (Lakshmikumaran & Sridharan): https://lakshmisri.com/newsroom/news-briefings/impact-of-gst-rate-changes-on-the-logistic-sector [snippet]
- Shadowfax IPO (HDFC Sky / Outlook Business): https://hdfcsky.com/news/shadowfax-shares-make-weak-market-debut [snippet]

---

# PART 4 — DEEP-RESEARCH SUPPLEMENT (21-Oct-2026)

Compiled 21-Oct-2026 (late evening UTC) by the second, primary-source pass. It adds to Parts 1–3 and corrects them. Where Part 4 and Parts 1–3 disagree, **Part 4 wins** (see 4.0).

**What was read this session (primary documents):**
- **All five FY26 annual reports** (BSE-hosted PDFs, text-extracted and read section by section: MD&A, segment note, related-party note, contingent liabilities, tax note, business-combination note, BRSR risk tables):
  - CONCOR AR 2025-26 (378 pp.): https://www.bseindia.com/xml-data/corpfiling/AttachHis/f7ed8d97-f3e0-4afd-bd99-6af5f3902be8.pdf
  - Delhivery AR 2025-26 (197 pp.): https://www.bseindia.com/xml-data/corpfiling/AttachHis/f2df7720-e670-4a6a-9dcf-fea3c31421a0.pdf
  - Blue Dart AR 2025-26 (397 pp.): https://www.bseindia.com/xml-data/corpfiling/AttachHis/130422d5-3941-4526-93a9-65bb73997786.pdf
  - BlackBuck AR 2025-26 (130 pp.): https://www.bseindia.com/xml-data/corpfiling/AttachHis/af09c5c2-52da-4ad7-804e-273efcc55f78.pdf
  - TVS SCS AR 2025-26 (174 pp.): https://www.bseindia.com/xml-data/corpfiling/AttachHis/8f4fdadc-d070-4c5a-aa4f-13eedb4cc62a.pdf
- **The latest call transcripts and investor presentations** (BSE PDFs downloaded earlier today by the first pass, re-read in full here): CONCOR Q4 FY26 call (26-May-2026; no Q1 FY27 call exists on BSE or the company's investor page); Delhivery, Blue Dart, BlackBuck and TVS SCS Q1 FY27 decks and calls (URLs in §3.5).
- **Ministry and regulator data:**
  - Ministry of Ports, Shipping & Waterways, *Cargo handled at Major Ports, March 2026* (FY26 full year): https://shipmin.gov.in/sites/default/files/Cargo%20handled%20at%20Major%20Ports%20March%202026.pdf
  - AAI *Air Traffic Report, March 2026* (FY26 full year) and *August 2026* (Apr–Aug FY27): https://www.aai.aero/sites/default/files/traffic-news/TRMar2k26_2.pdf · https://www.aai.aero/sites/default/files/traffic-news/TRAug2k26.pdf
  - PIB explainer, *From Growth Engine to Global Edge: Supercharging India's Logistics* (27-Nov-2025), with the NCAER/DPIIT figures: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251127708001.pdf
- **A competitor's filing:** Shadowfax Q1 FY27 earnings presentation (NSE archive, 31-Jul-2026): https://nsearchives.nseindia.com/corporate/9900590024_31072026130039_Earnings_Presentation.pdf
- **Screener re-check** (21-Oct-2026, after the close) for new board-meeting intimations at CONCOR, Delhivery, Blue Dart and TVS SCS: none.

**Tags in Part 4**
- **[V-AR]** = read this session in the company's FY26 annual report.
- **[V-call] / [V-deck]** = read this session in the company's BSE-filed transcript or presentation.
- **[V-gov]** = read this session in a ministry or regulator document (shipmin, AAI, PIB).
- **[V-scr]** = screener.in, 21-Oct-2026.
- **[V-snip]** = only a search summary or press report.
- **[E]** = arithmetic or estimate.

Budget used: about 48 web calls (5 annual reports, 4 government PDFs, 1 competitor deck, 4 screener re-checks, about 30 searches and fetches); 7 fetches failed (DHL FY25 highlights PDF, ICRA report page, a Rajya Sabha reply, three guessed AAI URLs, and a CAG release that had already failed in the first pass).

## 4.0 Supersedes — corrections the writer must apply to Parts 1–3

| # | Where in Parts 1–3 | Old value / claim | New value | Source |
|---|---|---|---|---|
| S1 | §2.2, §H1, D, A1 (all-India container TEUs) | "~13–14m TEU FY26 [E; FLAG — national total not found]" | **24.79m TEU at all Indian ports in FY26 (+6.46% from 23.29m)**. Of this, **major ports 14.92m TEU (+10.21% from 13.53m)**, so non-major ports ≈ 9.87m [E]. | CONCOR AR MD&A p.85 [V-AR]; shipmin Mar-2026 [V-gov] |
| S2 | §2.2 (Mundra) | "~4.1m TEU (H1-2025 Alphaliner annualised; FLAG)" | **Mundra 8.47m TEU in FY26 (+2.30% from 8.28m)**. That is larger than JNPA's 8.17m, so **Mundra, not JNPA, is India's largest container port**. | CONCOR AR p.85 [V-AR] |
| S3 | §4.1, §7.2, B1, G ("LLF: Sep-2022 CCEA cut to 1.5% of land value, 35-year leases") | CONCOR's terminal land treated as paying the 1.5% rate | **CONCOR's annual report says the opposite for its existing land.** Indian Railways' letter of 19-Mar-2020 and its **Master Circular of 4-Oct-2022 put LLF on existing land at 6% of market value with 7% annual escalation**. **None of the 24 land parcels has a signed agreement under the revised policy.** Divisional railways have raised demands CONCOR disputes. CONCOR books LLF on its own assessment and recognises **no Ind-AS 116 right-of-use asset or lease liability** for this land. Auditors flag it as an **Emphasis of Matter**. The 1.5%/35-year Gati Shakti terms (Sep-2022 CCEA [K]) are framed for railway land leased for cargo-related activity; CONCOR's own FY26 filings do not say its existing land has moved to them. | CONCOR AR, note 51 and auditors' EoM [V-AR] |
| S4 | §H7, §4.2(a) (LLF amount) | "LLF + other admin ~5 of ₹100 [E]"; LLF paid "not re-verified" | **LLF booked FY26 ₹398.62 Cr standalone (FY25 ₹373.81 Cr; +6.6%)**, after netting ₹39.48 Cr of past provisions. That is **4.4% of standalone operating income (₹9,059 Cr) and ~20% of consolidated OP**. | CONCOR AR note 30 [V-AR] |
| S5 | §4.2(a) ("rail haulage + terminal ≈ 70") | composite [E] | Standalone terminal & other service charges **₹6,260.34 Cr = 69.1% of operating income**, of which **rail freight (haulage) ₹5,011.39 Cr = 55.3%**, road ₹379.96 Cr, handling ₹309.93 Cr, LLF ₹398.62 Cr, other ₹160.43 Cr. Haulage ≈ **73% of consolidated rail freight income** (₹6,880 Cr) [E]. | CONCOR AR note 30, 42.2 [V-AR] |
| S6 | §4.3, §2.1 (CONCOR assets) | "65+ terminals", "423 rakes" | **68 terminals at 31-Mar-2026** (4 EXIM-only, 36 combined, 24 domestic-only, 4 strategic tie-ups); **424 rakes**, 57,746 containers, 104 reach-stackers, 230 LNG trucks; manpower **1,238** | CONCOR AR Chairman's letter, MD&A [V-AR] |
| S7 | §2.1, C.1 (CONCOR segments) | "EXIM >₹6,000 Cr (≈6,028 [E]); domestic ₹3,051 Cr [primer]" | **EXIM ₹6,026.04 Cr (+5.1%); domestic ₹3,052.93 Cr (−3.2%)**. **Segment result: EXIM ₹1,436.34 Cr (23.8% margin; FY25 22.9%); domestic ₹152.85 Cr (5.0%; FY25 8.0%)**. Rebates and discounts rose to **₹201.81 Cr from ₹158.25 Cr (+27.5%)**; on EXIM alone ₹198.56 Cr vs ₹139.48 Cr (+42%). | CONCOR AR note 42.2 (consolidated) [V-AR] |
| S8 | §0, B1, §9.1 (JNPT rail-coefficient guide) | "19–21% in FY27" | The CMD said **"18–19%"** in one answer and **"around 19%… maybe 20%, 21%"** in another. Use **"~19% (upside 20–21%)"**; 30–35% in about 3 years is unchanged. | CONCOR Q4 FY26 call, pp.5 and 10 [V-call] |
| S9 | §H6, §1.1, §5.1 (Delhivery FY26 volumes) | ">1 bn" parcels and "~2 MT" PTL [primer] | **Express parcels 1,054m in FY26 (+40.2% from 752m)**; express revenue ₹6,687 Cr (+25.8%) → yield **₹63.4/parcel (FY25 ₹70.7; −10%)** [E]. **PTL 1,991 kt (+17.4% from 1,696 kt)**; PTL revenue ₹2,254 Cr (+19.3%); realisation **₹11.32/kg (FY25 ₹11.14)**. | Delhivery AR MD&A p.79 [V-AR] |
| S10 | §0, §8, G, 2.2 (Ecom Express deal) | "≤₹1,407 Cr; ≥99.44%"; primer ">99.8%; completed 18-Jul-2025" | **99.87% for ₹1,369.6 Cr** (₹13,696.36 mn). Subsidiary from **18-Jul-2025**; **wholly owned from 10-Dec-2025** after buying the last 0.13%. Identifiable net assets ₹328 Cr, so **goodwill ₹1,041.7 Cr (76% of the price)**. Delhivery also took on Ecom's ₹118.7 Cr of borrowings and ₹116.7 Cr of lease liabilities. | Delhivery AR note 36(1) [V-AR] |
| S11 | C.6, trap 1 (Delhivery lease rent) | "cash lease rent ~₹420 Cr [E]" | **Actual lease rent paid FY26 ₹417.1 Cr** (FY25 ₹343.2 Cr). ESOP charge ₹86.4 Cr (FY25 ₹114.9 Cr). Integration cost ₹147.8 Cr. EBITDA ₹640.0 Cr → **adjusted EBITDA ₹457.1 Cr**. The reconciliation now closes exactly. | Delhivery AR MD&A reconciliation [V-AR] |
| S12 | trap 8, §2.3, §H10 (Blue Dart "404m eCommerce shipments") | label read as e-commerce only; FLAG | **4,034.21 lakh (403.4m) domestic shipments of all products in FY26 (+7.1% from 376.7m)** plus 5.62 lakh international; weight >14.38 lakh tonnes. The slide label is wrong; **404m is the total**. | Blue Dart AR Directors' Report, BRSR P9 [V-AR] |
| S13 | trap 5, §3.1 (BlackBuck DTA in FY26) | "FY26 PAT ₹160 Cr contains a ~₹25 Cr DTA credit; tax rate 4%" | **FY26 consolidated tax: current ₹14.9 Cr, deferred credit ₹7.8 Cr, total ₹7.1 Cr.** The FY26 DTA credit is therefore **~₹7.8 Cr, not ~₹25 Cr**. The big recognition was FY25: deferred credit ₹247.5 Cr (total tax −₹244.7 Cr). The tax rate is still ~4%, because the recognised DTA (net ₹255 Cr at Mar-26) shelters current tax. The normalised-tax PAT of ~₹125 Cr at 25% is unchanged. | BlackBuck AR consolidated P&L and note 7 [V-AR] |
| S14 | trap 7, §2.5, §3.4 (TVS SCS geography) | "70% overseas" used for FY26 | **FY26: India ₹3,037.47 Cr (28%) / Rest of World ₹7,965.53 Cr (72%)**; FY25 27% / 73%. The **70% / 30% split is Q1 FY27 only**. India grew +12.4% in FY26 (GFS India +38.4%); RoW +9.2%. | TVS SCS AR MD&A p.69 [V-AR] |
| S15 | trap 6, §2.5 (TVS SCS one-offs) | "InvIT gain ₹177.2 Cr; exceptional ₹105.6 Cr" | In the audited statements the one-off sits in **share of profit of equity-accounted investees ₹182.03 Cr** (mainly the 24.48%-held JV TVS Industrial & Logistics Parks) vs ₹5.15 Cr in FY25. The deck's ₹177.2 Cr is the InvIT-gain component of it. **Exceptional loss ₹105.63 Cr = restructuring ₹91.29 Cr + new Labour Code impact ₹14.34 Cr.** AR adjusted EBITDA is **₹770.70 Cr** (deck: ₹773.1 Cr). | TVS SCS AR P&L, EBITDA reconciliation, note 45 [V-AR] |
| S16 | §2.5, §4.3 (TVS SCS footprint) | "16,500 employees; 7,100+ customers" | **16,601 permanent employees** (FY25 16,801); **7,124 customers** (6,277); 435 warehouses (441); 25,074,673 sq ft; **sea-freight TEU 112,007 (+22% from 91,608)** | TVS SCS AR "Key operational indicators" [V-AR] |
| S17 | §0, §5.1, §H5 (express shares) | no player shares; Delhivery "~20–25% of 3PL e-commerce [E]" | **Shadowfax says it holds 28–30% of the 3PL express (e-commerce) market in Q1 FY27**, up from ~8% in FY22 (Redseer up to FY25; company estimate after that). Shadowfax delivered 198m express orders in Q1 FY27 (+95%) against Delhivery's 322m (+55%). Using Shadowfax's own share, the 3PL express pool is ~660–710m a quarter, which puts **Delhivery at ~45–50% of 3PL express** [E; Delhivery's count includes some C2C/B2B parcels]. | Shadowfax Q1 FY27 deck p.5, p.8 [V-deck] |
| S18 | §2.2, §H4 (air cargo) | FY25 3.7 MT only | **FY26 3,964 kt (+6.2%): international 2,452 kt (+5.5%), domestic 1,512 kt (+7.4%)**. March 2026 international freight **−6.0%** and international aircraft movements **−21.3%**: the West Asia war showing up in the data. Apr–Aug FY27 1,819 kt (+11.6%; international +14.4%). | AAI Air Traffic Reports Mar-2026 and Aug-2026 [V-gov] |
| S19 | §7.1 (NCAER source) | Outlook Business [V] | Same figures confirmed in a **PIB explainer (27-Nov-2025)**: 7.97% of GDP and 9.09% of non-services output in 2023-24, ₹24.01 lakh crore; a hybrid method using 3,500+ stakeholder responses plus MoSPI, RBI and GSTN data. | PIB [V-gov] |
| S20 | §3.1, §2.1 (CONCOR "PAT" and "share" bases) | share quoted in TEU terms only | The AR also gives the **tonnage basis**: CONCOR carried **51.02 MT of 93.69 MT** of IR containerised loading = **54.5%** (FY25 49.22/88.73 = 55.5%). TEU-basis (54.5% vs 55.9% in FY25) and tonnage-basis shares agree for FY26. | CONCOR AR MD&A [V-AR] |
| S21 | §3 (exports quote) | "exports US$441.8 bn (+0.9%)" | AR: US$437.70 bn → US$441.78 bn. The AR text says "+0.09%", but the arithmetic is **+0.93%**; use +0.9%. Imports US$721.20 bn → US$774.98 bn (+7.45%). | CONCOR AR p.85 [V-AR; arithmetic E] |
| S22 | §12, §H13 (BlackBuck/others board dates) | — | Unchanged: only BlackBuck (29-Oct-2026) has intimated a date. Screener re-checked late on 21-Oct shows no new intimation for CONCOR, Blue Dart or TVS SCS; Delhivery's page did not parse on the re-check. | [V-scr] |
| S23 | §2.5 (TVS SCS PAT basis) | screener ₹117 Cr | ₹117.02 Cr is **profit for the year before minority interest**; **owners' share ₹114.28 Cr**. See 4.2 for the single PAT basis. | TVS SCS AR, EPS note [V-AR] |
| S24 | §4.1 (Blue Dart fuel surcharge) | "monthly fuel-surcharge reset tied to local diesel/ATF" | Both are true but they differ: the **call** says the surcharge is set monthly from local diesel prices; the **AR (BRSR risk table and Directors' Report)** says it is "indexed to the Brent Crude Index" and passes ATF changes through. Describe it as **"a monthly fuel surcharge linked to crude/ATF (air) and diesel (ground)."** | Blue Dart AR; Q1 FY27 call [V-AR; V-call] |

## 4.1 Verification table — the 40 figures the writer will lean on

"Fetched?" = read this session in the named document. "Primary" = company filing, ministry or regulator. "Agrees?" compares with Parts 1–3.

| # | Figure | Value | Primary source (URL) | Fetched? / type | Agrees with Parts 1–3? |
|---|---|---|---|---|---|
| 1 | India logistics cost FY24 | 7.97% of GDP; ₹24.01 lakh crore; 9.09% of non-services output | PIB explainer 27-Nov-2025: static.pib.gov.in/…/doc20251127708001.pdf | Yes — primary [V-gov] | Yes (second source; Outlook Business was the first) |
| 2 | All-India port container traffic FY26 | 24.79m TEU (+6.46%) | CONCOR AR 2025-26 MD&A (BSE f7ed8d97…) | Yes — primary (company citing port data) | **No: supersedes "~13–14m [E]" (S1)** |
| 3 | Major-port container TEUs FY26 | 14,915,896 (+10.21%) | shipmin.gov.in, Cargo handled at Major Ports, Mar-2026 | Yes — primary [V-gov] | New |
| 4 | Major-port cargo FY26 | 914.73 MT (+7.00%); containers 213.0 MT, 23.29% share | same | Yes — primary | New (PIB/newsonair: 915.17 MT, a later revision) |
| 5 | JNPA FY26 | 8.17m TEU (+11.93%) | CONCOR AR MD&A | Yes — primary | Yes |
| 6 | Mundra FY26 | 8.47m TEU (+2.30%) | CONCOR AR MD&A | Yes — primary | **No: supersedes ~4.1m (S2)** |
| 7 | IR originating loading FY26 | 1,669.93 MT (from 1,617.38) | CONCOR AR MD&A | Yes — primary | Yes (1,670 MT) |
| 8 | IR containerised loading FY26 | 93.69 MT (+5.59%); EXIM 67.96 MT, domestic 25.73 MT | CONCOR AR MD&A | Yes — primary | Yes; adds the EXIM/domestic split |
| 9 | CONCOR share of rail container traffic FY26 | 54.5% (TEU basis, call); 51.02 / 93.69 MT = 54.5% (tonnage basis, AR) | Q4 FY26 call (BSE c128f551…); AR | Yes — primary | Yes. **The FY20 "~74%" is NOT confirmed by any primary document read this session; keep it [V-snip/primer]** |
| 10 | CONCOR throughput FY26 | 5.58m TEU (+9.56%); EXIM 4.21m; domestic 13,74,437 (+14.59%) | AR MD&A; call | Yes — primary | Yes |
| 11 | CONCOR segment revenue FY26 | EXIM ₹6,026.04 Cr; domestic ₹3,052.93 Cr | AR note 42.2 | Yes — primary | Yes (primer ≈6,028 / 3,051) |
| 12 | CONCOR segment margins FY26 | EXIM 23.8% (22.9%); domestic 5.0% (8.0%) | AR note 42.2 | Yes — primary | New |
| 13 | CONCOR LLF FY26 | ₹398.62 Cr standalone (₹373.81 Cr) | AR note 30 | Yes — primary | New (fills §H7) |
| 14 | LLF policy applied to CONCOR | 6% of market value, +7%/yr (IR letter 19-Mar-2020; Master Circular 4-Oct-2022); no agreements for any of 24 parcels; Emphasis of Matter | AR note 51; auditors' report | Yes — primary | **No: contradicts "1.5% for 35 years" (S3)** |
| 15 | CONCOR contingent liabilities | ₹2,345.05 Cr standalone (₹2,186.74 Cr), incl. LLF demands; ₹1,318.91 Cr in arbitration/courts; consolidated ₹2,374.50 Cr | AR contingent-liability note | Yes — primary | New |
| 16 | CONCOR FY27 guidance | handling volume +9.5% (EXIM +8%, domestic +15%); EBITDA 24–25% | Q4 FY26 call 26-May-2026 | Yes — primary | Yes |
| 17 | JNPT rail coefficient | FY26 15.12% (CONCOR share 60%); FY27 ~19% (maybe 20–21%); 30–35% in 3 years | Q4 FY26 call | Yes — primary | Mostly; refine (S8) |
| 18 | CONCOR Q2 FY27 volumes | 14,48,379 TEU (+0.53%); EXIM 10,92,652 (−0.07%); domestic 3,55,727 (+2.43%) | BSE filing 21-Oct-2026 (a3facd16…) | Yes (file re-read) — primary | Yes |
| 19 | CONCOR assets 31-Mar-26 | 68 terminals; 424 rakes; 57,746 containers; 230 LNG trucks; 1,238 staff | AR | Yes — primary | Partly: supersedes 65+ / 423 (S6) |
| 20 | CONCOR rail haulage cost | ₹5,011.39 Cr = 55.3% of standalone operating income | AR note 30 | Yes — primary | Refines the [E] (S5) |
| 21 | Delhivery FY26 express parcels | 1,054m (+40.2%) | Delhivery AR MD&A | Yes — primary | New (fills §H6) |
| 22 | Delhivery FY26 PTL | 1,991 kt (+17.4%); ₹11.32/kg | AR MD&A | Yes — primary | New (primer "~2 MT" ✓) |
| 23 | Delhivery FY26 EBITDA bases | EBITDA ₹640.0 Cr; + ESOP ₹86.4 − lease rent ₹417.1 + integration ₹147.8 = adjusted ₹457.1 Cr | AR MD&A reconciliation | Yes — primary | Yes (closes C.6) |
| 24 | Delhivery FY26 PAT | ₹152.54 Cr for the year; owners ₹152.68 Cr; NCI −₹0.14 Cr | AR consolidated P&L | Yes — primary | Yes (₹153 Cr); **primer ₹321 Cr wrong, re-confirmed** |
| 25 | Ecom Express acquisition | 99.87% for ₹1,369.6 Cr; subsidiary 18-Jul-2025; wholly owned 10-Dec-2025; goodwill ₹1,041.7 Cr | AR note 36(1) | Yes — primary | **Refines (S10)** |
| 26 | Delhivery Q1 FY27 volumes | express 322m (+55.2%); PTL 542 kt (+18.4%) | Q1 FY27 deck (BSE 0be94732…) | Yes (file re-read) — primary | Yes |
| 27 | Delhivery fuel pass-through | PTL "covered upward of 97, 98%"; 6 of the 37 paise PTL yield gain came from fuel | Q1 FY27 call (BSE aa81aa9b…) | Yes — primary | Yes |
| 28 | Blue Dart FY26 shipments and weight | 403.4m domestic (+7.1%) + 0.56m international; >14.38 lakh t | Blue Dart AR | Yes — primary | **Refines label (S12)** |
| 29 | Blue Dart fleet | 6 × B757-200 + 2 × B737 freighters; >500 t payload/night; 33,000+ vehicles; 2,492 facilities; 19,000+ PIN codes | AR Directors' Report | Yes — primary | Yes; adds payload and network |
| 30 | Blue Dart standalone EBITDA FY26 | ₹649.18 Cr (₹573.87 Cr); standalone PAT ₹239.69 Cr (₹244.63 Cr) | AR Directors' Report | Yes — primary | Yes |
| 31 | Blue Dart consolidated EBITDA FY26 | ₹992.5 Cr (16.05%) pre-exceptional | Q1 FY27 deck (BSE c866f8d4…) | Deck re-read; AR consolidated EBITDA not stated in text | Yes |
| 32 | Blue Dart payments to DHL group | No royalty or brand fee. FY26: international servicing charges to DHL Express India ₹205.7 Cr; IT/repairs to Deutsche Post IT Services ₹75.1 Cr; domestic service income from DHL entities ~₹109 Cr; dividend to DHL Singapore ₹44.5 Cr | AR related-party note (standalone) | Yes — primary | New |
| 33 | BlackBuck FY26 tax | current ₹14.9 Cr; deferred credit ₹7.8 Cr; total ₹7.1 Cr (FY25 deferred credit ₹247.5 Cr) | BlackBuck AR | Yes — primary | **No: supersedes "~₹25 Cr DTA" (S13)** |
| 34 | BlackBuck on-book vehicle loans | Gross ₹62.6 Cr (₹44.3 Cr) across 2,005 loans; Stage 2 4.1%; Stage 3 6.7%; collateral ₹122.9 Cr | AR financial-risk note | Yes — primary | Yes (primer ~₹60 Cr); **partner-managed ~₹600 Cr still unverified** |
| 35 | BlackBuck Q1 FY27 gross vs net revenue | revenue from operations ₹204.17 Cr (+42%); net revenue ₹165.03 Cr (+25%); core +21% | Q1 FY27 deck (BSE 640ebab5…); call | Yes (file re-read) — primary | Yes |
| 36 | BlackBuck Q2 board | 29-Oct-2026 | BSE intimation via screener (21-Oct) | Yes — primary (announcement) | Yes |
| 37 | TVS SCS FY26 geography | India 28% / RoW 72% (₹3,037 / ₹7,966 Cr) | TVS SCS AR MD&A | Yes — primary | **Refines 70/30 (S14)** |
| 38 | TVS SCS FY26 one-offs | JV/associate share ₹182.03 Cr; exceptional loss ₹105.63 Cr (restructuring ₹91.29 Cr + Labour Code ₹14.34 Cr) | AR P&L, EBITDA reconciliation | Yes — primary | Refines (S15) |
| 39 | TVS SCS FY26 PAT | ₹117.02 Cr total; owners ₹114.28 Cr; operational ₹69.0 Cr (deck) | AR; deck (BSE 23e5d43e…) | Yes — primary | Yes; adds the attributable figure |
| 40 | India air cargo FY26 | 3,964 kt (+6.2%): international 2,452 kt (+5.5%), domestic 1,512 kt (+7.4%) | AAI TRMar2k26_2.pdf | Yes — primary [V-gov] | New (fills §H4) |

**Count:**
- **38 of the 40 rows are [V] from primary documents read this session.**
  - 31 are new reads: annual reports, shipmin, AAI, PIB and the BSE intimation.
  - 7 are BSE decks, transcripts and filings downloaded earlier today and re-read here.
- The other two:
  - Row 31: the consolidated EBITDA itself comes from the deck; the AR read only confirms the standalone figure.
  - Row 9: the FY20 ~74% baseline is not confirmed.
- **Supporting figures not in the 40, with their status:**
  - **Already [V] in Part 1 (not re-fetched):** WDFC 1,506 km and the 8-Sep-2026 dedication (JICA press release).
  - **[V-snip/press] only:**
    - Delhi diesel ₹95.20 (goodreturns).
    - Excise cut on 26-Mar-2026: special additional excise duty on petrol cut from ₹13 to ₹3 and on diesel from ₹10 to nil; retail prices unchanged (BusinessToday/Moneylife).
    - JNPA H1 FY27 rail share 12.7% (Maritime Gateway).
    - LPI 2023 38th of 139 (indbiz.gov.in and press).
    - LEADS 2025 (released 13-May-2026, per press).
    - E-way bill monthly figures (press citing GSTN).
    - Railways freight Sep-2026 135.35 MT (+6.14%) and H1 FY27 833.7 MT (+4.1%) (press citing Ministry of Railways).
  - **Prefer a primary source before these carry an argument.**

**Where sources conflict, which one wins:**
1. **Major-port tonnage:** shipmin's monthly PDF gives 914.73 MT; the PIB release gives 915.17 MT. Use 915 MT, citing the PIB figure as the later revision.
2. **CONCOR's JNPT target:** the CMD gave two numbers in the same call (18–19%; ~19%, maybe 20–21%). Use "~19%".
3. **TVS SCS InvIT gain:** the deck says ₹177.2 Cr and the AR's associate line says ₹182.0 Cr. The AR is audited and includes the JV's operating share, so the two are reconcilable. Quote "~₹180 Cr one-off share of JV profit (InvIT transfer)".
4. **Blue Dart fuel-surcharge index:** the AR (Brent) and the call (local diesel) differ. They are not contradictory: different products use different indices.

## 4.2 Company deep-dives (guidance digest · call KPIs · 5-year · 8-quarter · annual-report findings)

### Single PAT basis — confirmed for all five
- **Basis used everywhere:** screener's "Net profit" = **consolidated profit for the year, after exceptional items, before splitting out non-controlling interest (NCI)**. Use this basis in every table.
- Checked against each annual report this session:

| Company | FY26 profit for the year | Attributable to owners | NCI | Screener PAT | Note |
|---|---|---|---|---|---|
| CONCOR | ₹1,245.74 Cr | ₹1,241.80 Cr | ₹3.94 Cr | 1,246 | consolidated (subsidiaries + JVs) |
| Delhivery | ₹152.54 Cr | ₹152.68 Cr | −₹0.14 Cr | 153 | Ecom 99.87% until 10-Dec-2025, then 100% |
| Blue Dart | ₹247.4 Cr | ₹247.4 Cr | nil | 247 | subsidiaries 100% (Blue Dart Aviation, Concorde Air Logistics) |
| BlackBuck | ~₹160.3 Cr | same | nil | 160 | subsidiaries 100% (Blackbuck Finserve, TZF, ZZ, BTSPL) |
| TVS SCS | ₹117.02 Cr | ₹114.28 Cr | ₹2.74 Cr | 117 | a few non-wholly-owned subsidiaries |

- The two bases never differ by more than ₹4 Cr, so the choice does not change any argument.
- The first pass's note that Delhivery's screener PAT "includes minorities/associate" is right in form but immaterial: Delhivery's associate share and NCI are both under ₹1 Cr.
- **Do not mix** "adjusted" PATs (Delhivery ex-integration, TVS operational, BlackBuck normalised tax) into aggregate rows.

---

### 4.2.1 CONCOR (531344)

**Management-guidance digest — Q4 FY26 call, 26-May-2026 (latest available; no Q1 FY27 call was held or filed) [V-call]**
1. **Volumes FY27:** handling volume +9.5% (EXIM +8%, domestic +15%). It will "go for a revision if required". No guidance beyond FY27 ("better not to make any long-term guidance"). Rule of thumb: originating TEUs ≈ 65–70% of handling TEUs.
2. **Margin:** "we will maintain EBITDA between 24% to 25%" (standalone; FY26 24.33%, FY25 24.9%).
3. **DFC/JNPT:** the JNPT rail coefficient was 15.12% in FY26. Expected ~19% in FY27 (possibly 20–21%) and 30–35% in ~3 years. Road-to-rail "will not happen overnight". JNPT also serves non-DFC hinterlands (Hyderabad, Nagpur, Bengaluru).
4. **Pricing lever:** on double-stack trains CONCOR pays **50% haulage for upper-deck boxes**. It plans to pass part of that saving to customers through upper-deck tariffs competitive with road. **DFC haulage is the same as on IR track**, and "there is no such move that Indian Railways is going to increase the haulage charges."
5. **West Asia / Q4 domestic hit:** domestic Q4 segment EBIT fell to ~0.2% for two reasons:
   - **Gunny-bale traffic collapsed** for want of jute from a neighbouring country, so eastbound boxes returned empty.
   - **Morbi tile factories shut on a gas shortage.**

   Both commodities are "slowly… getting revived"; bulk cement in tank containers is the new leg.
6. **Trading update:** "March and April were not good… we are seeing good volumes in the month of May." Diesel hikes should help rail share, but it was "premature" to quantify.
7. **Capex:** ~₹1,000 Cr a year; FY27 ₹945 Cr approved, likely to end near FY26's ₹1,085 Cr. EXIM revenue crossed ₹6,000 Cr for the first time; the EXIM lead fell ~3 km in FY26, so revenue lagged volume.
8. **Other:** 30% of Bharat Container Shipping Line; ~700 own-bill-of-lading containers to the Middle East (stopped by the conflict); started moving to the Far East.

**Call KPI table [V-call; V-AR]**

| KPI | FY25 | FY26 | Q4 FY26 | Q1 FY27 | Q2 FY27 | FY27 guide |
|---|---|---|---|---|---|---|
| Handling TEU (m) | 5.09 | 5.58 (+9.56%) | — | 1.40 (+8.9%) [E: H1 − Q2] | 1.45 (+0.53%) | +9.5% |
| EXIM TEU (m) | 3.90 | 4.21 (+8%) | — | 1.07 (+9.8%) [E] | 1.09 (−0.07%) | +8% |
| Domestic TEU (lakh) | 11.99 | 13.74 (+14.6%) | — | 3.36 [E] | 3.56 (+2.43%) | +15% |
| Originating TEU | — | EXIM +5%, domestic +1.9% | EXIM 5,49,273; domestic 1,29,065 | n.a. | n.a. | — |
| CONCOR tonnage by rail (MT) | 49.22 | 51.02 (+2.8%) | — | — | — | — |
| Rail market share (TEU) | 55.9% | 54.5% | — | — | — | — |
| Rail freight margin | 25.65% | 27.16% | — | — | — | — |
| Company EBITDA margin (standalone) | 24.9% | 24.33% | — | — | — | 24–25% |
| Double-stack rakes run | 6,302 | 6,396 | — | — | — | — |
| JNPT rail coefficient | — | 15.12% | — | — | — | ~19% |
| Capex (₹ Cr) | — | 1,085.2 | — | — | — | 945 (budget) |

**5-year history (screener consolidated, ₹ Cr) [V-scr]**

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue | 7,653 | 8,169 | 8,653 | 8,887 | 9,079 |
| Operating profit | 1,748 | 1,868 | 1,959 | 1,930 | 1,951 |
| OPM % | 22.8 | 22.9 | 22.6 | 21.7 | 21.5 |
| PAT (profit for the year) | 1,052 | 1,173 | 1,262 | 1,293 | 1,246 |
| ROCE % | 13 | 14 | 14 | 14 | 13 |

**8-quarter trend (screener consolidated, ₹ Cr) [V-scr]**

| | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 2,288 | 2,208 | 2,288 | 2,154 | 2,355 | 2,308 | 2,263 | 2,160 |
| OP | 582 | 465 | 441 | 433 | 576 | 514 | 427 | 444 |
| OPM % | 25 | 21 | 19 | 20 | 24 | 22 | 19 | 21 |
| PAT | 366 | 367 | 300 | 267 | 380 | 335 | 264 | 269 |

- Read: Q1 FY27 revenue +0.3% YoY on handling TEUs +8.9% [E]. Realisation per TEU fell ~8% YoY [E] (double-stacking, shorter EXIM lead, rebates). Q2 FY27 volumes are flat, so Q2 revenue is unlikely to beat Q2 FY26's ₹2,355 Cr [E].

**Annual-report findings (AR 2025-26) [V-AR]**
- **LLF (biggest single finding):**
  - ₹398.62 Cr booked in FY26 (+6.6%) on CONCOR's own assessment of 6%-of-market-value rates.
  - No lease agreements executed for any of the 24 IR land parcels.
  - Divisional railways have raised demands "not in line with IR's policy" (land rates, areas).
  - No Ind-AS 116 right-of-use asset or liability is recognised.
  - **Auditors' Emphasis of Matter** on both standalone and consolidated accounts.
  - Implication: (i) LLF is a rising, fixed ~₹400 Cr cost, i.e. 4.4% of revenue and ~20% of OP. (ii) Any switch to signed leases would gross up the balance sheet (RoU asset and lease liability) and move the cost below EBITDA, flattering reported EBITDA by up to ~4 points [E]. (iii) The contingent liability covers part of the disputed demand.
- **Contingent liabilities:** claims not acknowledged as debt ₹2,345.05 Cr standalone (₹2,186.74 Cr), including LLF demands for a few terminals; ₹1,318.91 Cr arises from arbitration awards under challenge. Equal to 18% of net worth.
- **Segments:**
  - EXIM revenue ₹6,026 Cr (+5.1%), result ₹1,436 Cr (23.8%).
  - Domestic revenue ₹3,053 Cr (−3.2%), result ₹153 Cr (5.0%, from 8.0%).
  - Segment assets: EXIM ₹4,514 Cr, domestic ₹4,248 Cr. **Domestic earns ~3.6% pre-tax on its segment assets vs ~32% for EXIM** [E].
  - Corporate expenses ₹254.8 Cr (+16.5%).
- **Rebates/discounts:** ₹201.8 Cr (+27.5%; EXIM +42%). This is price being given to hold share against private operators and road.
- **Cost structure (standalone):** rail freight expense ₹5,011 Cr was flat YoY (−0.2%) while rail freight income rose +1.9% (consolidated ₹6,880 Cr vs ₹6,754 Cr). That is why the rail freight margin improved (double-stack saving) even as realisation fell.
- **Cash:** consolidated cash ₹654 Cr plus other bank balances ₹2,833 Cr plus investments ₹1,069 Cr, i.e. **~₹4,556 Cr of liquid assets** [E]. Screener's "net debt" (−₹104 Cr) badly understates net cash.
- **Network:**
  - 68 terminals; 424 rakes; 57,746 containers; 104 reach-stackers; 230 LNG trucks; 1,238 staff (a ~₹7.3 Cr revenue-per-employee PSU model built on outsourced operations [E]).
  - New terminals: Mandalgarh (a Gati Shakti Cargo Terminal), Kadakola, Jajpur, Paradip. Chharodi is under development. An exclusive container rail terminal (ECRT) is running at Reddipalem since Feb-2026.
  - ~13 CONCOR locations notified under IR's **ECRT policy** (24 locations identified; 30–40 more possible). The policy repurposes railway terminals, including terminals CONCOR returned, for domestic containers: both an opportunity and new competition.
- **Risks listed by management:** dependence on IR haulage-charge decisions; shipping lines integrating inland (CHA/forwarding, first and last mile) and diverting volume to private operators they hold stakes in; growth of direct port delivery/entry (DPD/DPE, "serious threat on modal shift… from Rail to Road"); better roads cutting short-lead EXIM; private operators adding rakes "month-by-month"; land acquisition; empty running.

---

### 4.2.2 Delhivery (543529)

**Management-guidance digest — Q1 FY27 call, 8-Aug-2026 [V-call; V-deck]**
1. **Volumes:** FY27 express growth at the "upper end" of 20–30%. Share gains are "relative to other 3PLs" and also from "customers who have in-house logistics". Barua "certainly hope[s]" this is a shift from insourcing but calls "evidence" "a strong word".
2. **Margins:**
   - Express service EBITDA 16–18% in H2 FY27, "closer to the higher end".
   - PTL to exit FY27 at 15–15.5% (exited FY26 at 13.4%).
   - Q1 was hit by ~₹30–35 Cr from fuel-pass-through lag plus deliberate spend on service quality. Normalised Q1 EBITDA would have been ~₹30–35 Cr higher (CFO Vivek Pabari).
3. **Fuel:**
   - PTL contracts are indexed monthly; Delhivery is "covered upward of 97, 98%".
   - Of the +37 paise PTL yield gain, only ~6 paise was fuel.
   - Revisions began end-April to mid-May; the "entire impact… will be evident in the Q2 numbers".
   - E-commerce contracts do not all carry fuel clauses; labour-cost escalation is harder to pass through than fuel.
4. **Pricing:** "we don't see significant pricing pressure in the market any longer… at the bare minimum… yields will hold". The fall in express yield from ₹67.5 to ₹58 is **mix** (Ecom was a small-parcel network). H2 yields are seasonally higher.
5. **Integration:** Ecom integration cost was ₹17 Cr in Q1 FY27 (₹148 Cr FY26), near its end. PAT before integration cost was ₹62 Cr vs ₹32 Cr reported.
6. **New businesses:**
   - **NBFC licence received July 2026.** The plan is an "asset-light" fleet-owner finance and insurance model with partner lenders, "not to lend heavily off the Delhivery's balance sheet", to grow a stable supply pool. This is a direct step into BlackBuck's territory.
   - Delhivery Direct GMV ~₹150 Cr run-rate vs a ₹250 Cr FY27 plan.
   - No dark stores: quick commerce is "not a super high margin industry".
7. **Network:** small parcels (Meesho-type) need no network redesign. Opening freight service centres pulls heavies out of delivery centres and shrinks the delivery centres needed.

**Call/deck KPI table [V-deck; V-AR]**

| KPI | FY25 | FY26 | Q1 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|
| Express parcels (m) | 752 | **1,054 (+40.2%)** | 208 | 306 [E: 322 ÷ 1.052] | **322 (+55.2%)** |
| Express revenue (₹ Cr) | 5,318 | 6,687 (+25.8%) | 1,403 | — | 1,869 (+33.2%) |
| Express yield (₹/parcel) | 70.7 [E] | 63.4 [E] | 67.5 | — | 58.0 |
| PTL tonnage (kt) | 1,696 | **1,991 (+17.4%)** | 458 | ~550 [E] | 542 (+18.4%) |
| PTL realisation (₹/kg) | 11.14 | 11.32 | 11.1 | — | ~11.7 |
| Service EBITDA % | — | 14.4 | 13.0 | 15.8 | 13.1 |
| Express service EBITDA % | — | 17.2 | 16.3 | 18.8 | 15.6 |
| PTL service EBITDA % | — | 11.0 | 10.7 | 13.4 | 11.2 |
| Adjusted EBITDA (₹ Cr / %) | — | 457 / 4.4 | 76 / 3.3 | 150 / 5.3 | 76 / 2.6 |
| Lease rent paid (₹ Cr) | 343 | 417 | — | — | ~100 |
| Integration cost (₹ Cr) | 0 | 148 | 0 | 22 | 17 |
| Rated automated sort capacity | — | 10.4m shipments/day (31-Mar-26) | — | — | — |

**5-year history (screener consolidated, ₹ Cr) [V-scr]**

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue | 6,882 | 7,225 | 8,142 | 8,932 | 10,508 |
| Operating profit | −475 | −452 | 127 | 376 | 640 |
| OPM % | −6.9 | −6.3 | 1.6 | 4.2 | 6.1 |
| PAT | −1,011 | −1,008 | −249 | 162 | 153 |
| ROCE % | −17 | −11 | −2 | 2 | 1 |

**8-quarter trend (screener consolidated, ₹ Cr) [V-scr]**

| | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 2,190 | 2,378 | 2,192 | 2,294 | 2,559 | 2,805 | 2,850 | 2,931 |
| OP | 51 | 100 | 119 | 141 | 68 | 209 | 214 | 139 |
| OPM % | 2.3 | 4.2 | 5.4 | 6.1 | 2.7 | 7.5 | 7.5 | 4.8 |
| PAT | 10 | 25 | 73 | 91 | −50 | 40 | 72 | 32 |

- Read: Q2 FY26 OP and PAT carry ₹90 Cr of Ecom integration cost. Ex-integration, OPM ran 6.1% → 6.2% → 8.7% → 8.3% → 5.4% across Jun-25 to Jun-26 [E].

**Annual-report findings (AR 2025-26) [V-AR]**
- **Volumes and yields:** express 1,054m parcels (+40.2%), revenue +25.8% → yield −10% (mix). PTL 1,991 kt (+17.4%), revenue +19.3%, realisation +1.6% to ₹11.32/kg. Revenue from contracts ₹10,508 Cr (+17.6%); total income ₹10,867 Cr.
- **EBITDA bridge (₹ Cr):** revenue 10,508 − freight, handling & servicing 7,466 − employees 1,605 − other 798 = **EBITDA 640**; + ESOP 86 − lease rent 417 + integration 148 = **adjusted EBITDA 457 (4.4%)**. Employee cost fell to 15.3% of revenue (from 15.4%) although average headcount rose 10.7%.
- **Ecom Express (note 36(1)):**
  - Price and stake: ₹1,369.6 Cr for 99.87%; wholly owned from 10-Dec-2025.
  - Fair-value net assets ₹328 Cr; goodwill ₹1,041.7 Cr.
  - Intangibles recognised: customer relationships ₹104.7 Cr, brand ₹20.5 Cr. PPE ₹230.9 Cr; Ecom cash ₹106.3 Cr.
  - Liabilities assumed: borrowings ₹118.7 Cr, lease liabilities ₹116.7 Cr.
- **PAT:** ₹152.54 Cr (PAT margin 1.4% of total income vs 1.7%). Management attributes the decline to lease interest and depreciation on Ecom assets, and to "significant cash outflow in Q2FY26 which reduced finance income". **Owners' share ₹152.68 Cr.** EPS ₹2.04.
- **Balance sheet:** debt-equity ~0 ("reduction in availed banking facilities"); current lease liabilities ₹340.4 Cr. Receivables turnover improved to 7.11× from 6.00×.
- **Related parties:** no promoter group; transactions are with subsidiaries/associates and KMP only. Nothing material for the writer.
- **Sustainability/fleet:** ~3,000 CNG/electric vehicles in the partner fleet at FY26 end (from ~1,600); 123 tractors added.

---

### 4.2.3 Blue Dart Express (526612)

**Management-guidance digest — Q1 FY27 call, 5-Aug-2026 (filed 8-Aug) [V-call]** (CFO Sagar Patil)
1. **Growth is price-led:** Q1 FY27 revenue +15% on tonnage +~7% and shipments +~2%. Growth came "from pricing, from RPK, RPS point of view", through repricing loss-making lanes and customers in this year's GPI round plus the fuel surcharge.
2. **Pricing policy:** GPI (general price increase) net realisation of ~4–5% a year, plus "sharper" customer- and lane-specific corrections where value and premium do not match.
3. **Fuel:** a monthly surcharge reset on local diesel prices "neutralize[d] the impact of fuel price increase" in Apr–Jun 2026; fuel inflates both revenue and cost. The AR describes the air surcharge as indexed to Brent/ATF.
4. **Mix:** revenue air 60% / ground 40% (unchanged); e-commerce revenue +10%+; ground B2B +14% (auto is the fastest-growing vertical, in surface B2B). E-commerce is "a growth driver… not a completely focus area"; within it, e-commerce surface grows fastest.
5. **Margins:** no numeric guide. H2 brings the seasonal volume boost and peak-resourcing cost; margins depend on "flex in the resource versus demand".
6. **Capex:** standalone ₹100–150 Cr a year (replacement plus expansion); aviation capex = maintenance and engine cycles, lumpy. As an ongoing-capex proxy, use depreciation + 20–25%. New hubs (2 in the North done; Bengaluru/Chennai/Mumbai consolidation "a few quarters away").
7. **Reach:** India Post MoU (9-Oct-2026) for Tier III/IV towns [V-scr].

**Call/deck KPI table [V-deck; V-call; V-AR]**

| KPI | FY25 | FY26 | Q1 FY26 | Q1 FY27 |
|---|---|---|---|---|
| Domestic shipments (m) | 376.7 | **403.4 (+7.1%)** | ~94.3 [E] | 96.15 (+~2%) |
| International shipments (lakh) | 5.72 | 5.62 | — | — |
| Tonnage (kt) | — | ~1,438–1,439 | ~340 [E] | 364.43 (+~7%) |
| Consolidated revenue (₹ Cr) | 5,720 | 6,141 | 1,442 | 1,658 (+15%) |
| Yield (₹/kg) | — | 42.7 [E] | ~42.4 [E] | 45.5 [E] |
| Yield (₹/shipment) | 151.8 [E] | 152.2 [E] | ~153 [E] | 172 [E] |
| Consolidated EBITDA % (pre-exceptional) | — | 16.05 | 14.15 | 16.53 |
| Standalone EBITDA (₹ Cr / %) | 573.9 / 10.0 | 649.2 / 10.44 | — / 8.26 | — / 11.44 |
| B2B : B2C revenue | — | 70 : 30 | — | 70 : 30 |
| Air : ground revenue | — | 60 : 40 | — | 60 : 40 |
| Freighters | 8 | 8 (6 × B757-200, 2 × B737) | 8 | 8 |
| Pallet utilisation | — | — | — | 85–90% |

**5-year history (screener consolidated, ₹ Cr) [V-scr]**

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue | 4,410 | 5,172 | 5,268 | 5,720 | 6,141 |
| Operating profit | 1,000 | 938 | 853 | 876 | 951 |
| OPM % | 22.7 | 18.1 | 16.2 | 15.3 | 15.5 |
| PAT | 382 | 371 | 301 | 252 | 247 |
| ROCE % | 31 | 26 | 19 | 16 | 16 |

**8-quarter trend (screener consolidated, ₹ Cr) [V-scr]**

| | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,448 | 1,512 | 1,417 | 1,442 | 1,549 | 1,616 | 1,533 | 1,658 |
| OP | 218 | 239 | 213 | 196 | 252 | 281 | 222 | 261 |
| OPM % | 15.1 | 15.8 | 15.0 | 13.6 | 16.3 | 17.4 | 14.5 | 15.7 |
| PAT | 63 | 81 | 55 | 49 | 81 | 68 | 49 | 88 |

- Dec-25 PAT is after the ₹44 Cr Labour-Code exceptional. Q1 FY27 PAT ₹88 Cr is the highest in eight quarters.

**Annual-report findings (AR 2025-26) [V-AR]**
- **Volumes:** 403.4m domestic shipments (+7.1%); 0.56m international (−1.7%); >14.38 lakh tonnes. "Over 60 shipments every second". 2,492 facilities; 33,000+ vehicles; 599 EVs; 19,000+ PIN codes; payload >500 t a night across 8 airport stations; dispatch reliability 99.57% (B737) and 99.42% (B757).
- **Standalone P&L:** income from operations ₹6,140.88 Cr (₹5,720.18 Cr); EBITDA ₹649.18 Cr (₹573.87 Cr; +13%); PAT ₹239.69 Cr (₹244.63 Cr). Management blames the Labour-Code exceptional and higher operating and finance costs of the network expansion.
- **Related parties: no royalty or brand fee to DHL** (unlike many MNC subsidiaries). The material flows (₹ Cr, FY26 vs FY25):
  - **Blue Dart Aviation (100% subsidiary):** aircraft charter cost 1,240.5 (1,244.5) = **20% of standalone revenue**, an intra-group charge that explains the standalone (10.4%) vs consolidated (16.1%) EBITDA gap.
  - Loan to Blue Dart Aviation outstanding ₹543.5 Cr (₹607.5 Cr), at 5-year G-sec + 50 bp; interest income ₹40.1 Cr. A payload deposit of ₹28.5 Cr was granted.
  - Concorde Air Logistics (subsidiary): commercial airlift 215.4 (197.1).
  - DHL Express (India): **international servicing charges paid 205.7 (189.3)**; domestic service income received 80.1 (86.5).
  - DHL Supply Chain India: income 22.7. DHL Logistics: income 6.2.
  - Deutsche Post IT Services: **repairs, maintenance and IT 75.1 (64.9), +16%**.
  - Dividend paid to DHL Express Singapore 44.5.
  - Net: **cash paid to DHL-group entities outside Blue Dart's own subsidiaries ≈ ₹281 Cr vs ≈ ₹109 Cr received** [E]. The parent is a net supplier of international network and IT, not a royalty taker.
- **Contingent liabilities (standalone):** direct tax ₹4.92 Cr (TDS on transport vendors; Sec 80JJAA); indirect tax ₹4.91 Cr (₹3.10 Cr; ITC from cancelled vendor registrations). Letter of comfort for Blue Dart Aviation borrowings: ₹78.3 Cr outstanding. Small.
- **Risks (BRSR):** rising fuel costs (mitigated by a Brent-indexed surcharge and fleet electrification), aviation carbon footprint, labour availability. Corporate governance: three minor related-party transactions noted after year-end without prior audit-committee approval (₹1.05 lakh and ₹42.8 lakh), disclosed as exceptions.

---

### 4.2.4 BlackBuck (544288)

**Management-guidance digest — Q1 FY27 call, 29-Jul-2026 (filed 3-Aug) [V-call]** (CEO Rajesh Yabaji)
1. **Demand:** "a very tough April". Normalised swipes per intercity truck contracted sharply, then recovered through end-May and June; "cautiousness has gone away and largely BAU has got restored". Model tolling again on road growth, toll-fare inflation and truck-population growth.
2. **Market:** NETC-wide toll GTV grew "a very small single digit"; CV toll GTV "a little bit of a higher single digit"; BlackBuck +16%, i.e. share gains.
3. **Fuel business** (small): loyalty margins cut while supply was short; "partial strong recovery", but no guidance on full recovery.
4. **Growth businesses:** +44% QoQ (after +20% in Q4). Superloads productivity is "AI-led"; the new cities have gained momentum. **Vehicle finance to "converge into profitability by the end of this financial year"** (reiterated).
5. **Profit framework:** in the core businesses, 60–85% of incremental revenue converts to EBITDA. Superloads investment is "stepping up every quarter".
6. **PAT optics:** the sequential fall in PAT is due to the DTA recognised in Q4 FY26; ex-DTA, PAT tracks adjusted EBITDA.
7. **Competition (Delhivery's fintech plan):** "a very positive direction… hardly any qualified competition… we don't see much of near-term threat", but BlackBuck will be "cautiously watching" and intends to "keep a very strong hold on market share".
8. **Telematics:** a record quarter for new devices; "further good quarters" expected.

**Deck KPI table [V-deck]**

| KPI | Q1 FY26 | Q4 FY26 | Q1 FY27 | YoY |
|---|---|---|---|---|
| Avg monthly transacting truck operators | 783,399 | 866,091 | 883,386 | +13% |
| Operators using ≥2 services | 386,351 | 441,874 | 458,919 | +19% |
| Tolling GTV (₹ Cr) | 6,073 | 7,094 | 7,045 | +16% |
| Toll transactions (crore) | ~15.9 [E] | ~18.4 [E] | 17.84 | +12% |
| Revenue from operations (₹ Cr) | 144 | 185 | 204.17 | +42% |
| Net revenue (₹ Cr) | 131.85 | 159.86 | 165.03 | +25% |
| Contribution margin | ~93% | ~93% | 93% | — |
| Adjusted EBITDA (₹ Cr) | 47.21 | 50.20 | 54.62 | +16% |
| PAT (₹ Cr) | 33.8 | 65.7 (incl. DTA) | 42.17 | +25% |
| Take rate: net revenue ÷ toll GTV | 2.17% [E] | 2.25% [E] | 2.34% [E] | — |

**5-year history (screener consolidated, ₹ Cr) [V-scr]**

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue | 119 | 176 | 297 | 427 | 652 |
| Operating profit | −231 | −232 | −158 | 93 | 167 |
| OPM % | −194 | −132 | −53 | 21.8 | 25.6 |
| PAT | −285 | −290 | −194 | −9 | 160 |
| ROCE % | −29 | −36 | −32 | 11 | 13 |

**8-quarter trend (screener consolidated, ₹ Cr) [V-scr]**

| | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 99 | 114 | 122 | 144 | 151 | 172 | 185 | 204 |
| OP | 15 | 30 | 40 | 40 | 37 | 45 | 45 | 50 |
| OPM % | 15 | 26 | 33 | 28 | 24 | 26 | 24 | 24 |
| PAT | −269 | −48 | 280 | 34 | 29 | 32 | 66 | 42 |

- Sep-24: IPO-year fair-value and ESOP charges. Mar-25: large DTA recognition (FY25 deferred credit ₹247.5 Cr). Mar-26: a further small DTA credit. The OPM drift from 28% to 24% reflects Superloads booked at gross revenue.

**Annual-report findings (AR 2025-26) [V-AR]** (₹ million in the AR; converted to ₹ Cr)
- **Tax (corrects Part 1):** FY26 current tax ₹14.9 Cr; deferred tax credit ₹7.8 Cr; total ₹7.1 Cr. FY25 total tax was a credit of ₹244.7 Cr (deferred −₹247.4 Cr). Net DTA on the balance sheet ₹255.1 Cr (standalone). BlackBuck will pay a low cash tax rate for some years while the DTA unwinds [E].
- **Vehicle-finance book (Blackbuck Finserve, an NBFC registered with RBI on 31-Aug-2023):**

  | Bucket (₹ Cr, 31-Mar-26) | Loans (no.) | Gross | Share |
  |---|---|---|---|
  | Zero overdue | 1,758 | 51.27 | 82% |
  | 1–29 days | 119 | 4.59 | 7% |
  | Stage 2 (30–89 days) | 68 | 2.55 | 4.1% |
  | Stage 3 (90+ days) | 60 | 4.22 | **6.7%** |
  | **Total** | **2,005** | **62.63** (FY25 44.32) | |

  - Average ticket ~₹3.1 lakh per loan [E]. Collateral (charges over CVs) ₹122.9 Cr.
  - Finserve: total assets ₹178.5 Cr; turnover ₹13.9 Cr; loss ₹3.1 Cr in FY26.
  - BlackBuck injected ₹100 Cr (rights issue at ₹150/share, 15-Dec-2025) from IPO proceeds.
  - **The on-book book is tiny; the "partner-managed" ~₹600 Cr AUM is not disclosed in the AR (still unverified).** A 6.7% Stage-3 ratio is high, but on a ₹63 Cr book it is ₹4 Cr of risk.
- **People:** 3,652 employees (FY25 3,945; −7%) while revenue grew 53%.
- **Subsidiaries:** TZF Logistics (₹6 Cr capital; used for the 28-Sep-2026 ₹22 Cr rights issue), Blackbuck Finserve, ZZ Logistics (dormant), plus the new BTSPL (Loads business slump sale, 12-Oct-2026).
- **Related parties:** none material beyond subsidiaries/KMP. Auditors BSR & Co: unmodified opinion.

---

### 4.2.5 TVS Supply Chain Solutions (543965)

**Management-guidance digest — Q1 FY27 call (Aug-2026; filed 17-Aug) [V-call]** (MD Vikas Chadha; Global CFO R. Vaidhyanathan)
1. **Growth:** "aspiration to grow our revenues by mid-teen growth this year… quarter 1 has been absolutely spot on" (+28.7% YoY in Q1, helped by record wins of ₹543 Cr and Swamy & Sons).
2. **PBT margin path:** Q1 adjusted PBT ~1.0% (from 0.7%). The aspiration of **4% PBT by Q4 FY27** is stated as an aspiration only, with "FY'28, definitely" as the firm date.
3. **ISCS margin:** the dip came from one-off onboarding costs of large new contracts. "In Q2 itself, we will achieve 9%"; **9.5–10% by Q4 FY27**. Through-cycle ISCS "always about 8.5%, 9%".
4. **Profitable growth:** "all our projects that we win… are accretive to our existing margins"; profit growth should be a multiple of revenue growth.
5. **Risk:** major supply-chain disruption or recession. "At this moment, we don't see this risk playing out"; embedded in customers' manufacturing volumes, so early visibility.
6. **Other:** GFS margin up on India volumes and "Project One" European integration. ALA (Italy) aerospace-and-defence JV (51%, 6-Oct-2026). Credit outlook revised to Positive (Ind AA).

**Deck KPI table [V-deck; V-AR]**

| KPI | FY25 | FY26 | Q1 FY26 | Q1 FY27 |
|---|---|---|---|---|
| Revenue (₹ Cr) | 9,995.7 | 11,003.0 | 2,592 | 3,335.2 (+28.7%) |
| India share of revenue | 27% | **28%** | — | 30% |
| ISCS / GFS revenue (₹ Cr) | — | ~8,239 / ~2,764 | 1,983 / 609 [E] | 2,417 / 918 |
| ISCS / GFS adjusted EBITDA % | — | — | — | 8.1 / 4.1 |
| Adjusted EBITDA (₹ Cr) | 667.4 | 770.7 (AR) / 773.1 (deck) | 173 | 232.2 (7.0%) |
| Adjusted PBT (₹ Cr) | — | 99.3 | 18.8 | 32.1 |
| Operational PAT (₹ Cr) | — | 69.0 | 8.8 | 22.5 |
| New business wins (₹ Cr, quarter) | — | 160–235 per quarter | — | 543 (record) |
| Pipeline (₹ Cr) | — | — | — | 7,500 |
| Sea-freight TEU | 91,608 | 112,007 | — | — |
| Warehousing (m sq ft) | 24.79 | 25.07 | — | 25.1 |
| Customers / Fortune Global 500 | 6,277 / 91 | 7,124 / 100 | — | 7,100+ / 100 |

**5-year history (screener consolidated, ₹ Cr) [V-scr]**

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Revenue | 9,250 | 9,994 | 9,200 | 9,996 | 11,003 |
| Operating profit | 621 | 672 | 705 | 673 | 778 |
| OPM % | 6.7 | 6.7 | 7.7 | 6.7 | 7.1 |
| PAT | −46 | 42 | −90 | −10 | 117 |
| ROCE % | 6 | 6 | 5 | 5 | 10 |

**8-quarter trend (screener consolidated, ₹ Cr) [V-scr]**

| | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 2,513 | 2,445 | 2,499 | 2,592 | 2,663 | 2,716 | 3,032 | 3,335 |
| OP | 190 | 151 | 169 | 177 | 182 | 206 | 218 | 225 |
| OPM % | 7.6 | 6.2 | 6.8 | 6.8 | 6.8 | 7.6 | 7.2 | 6.7 |
| PAT | 11 | −24 | −4 | 71 | 16 | 11 | 18 | 22 |

- Jun-25 PAT includes most of the ~₹180 Cr JV/InvIT gain; the FY26 exceptional loss (₹106 Cr) fell mainly in later quarters. Revenue has stepped up ₹600+ Cr in two quarters (Mar-26, Jun-26): new wins plus Swamy & Sons.

**Annual-report findings (AR 2025-26) [V-AR]**
- **P&L lines (₹ Cr):**
  - Freight, clearing, forwarding & handling 3,005.66 (2,816.23); sub-contracting and casual labour 1,554.71 (1,438.63).
  - Material and related costs 2,049.43 (1,767.71; +15.9%, from new European retail/auto customers and Indian renewables).
  - Employees 2,502.37 (+6.3%).
  - **Impairment on financial instruments 56.01 (20.68), nearly tripled.** A receivables-quality flag worth one line.
  - Finance cost 157.89; D&A 570.40.
- **Bridge to PAT:** PBT before exceptional and share of JV ₹92.1 Cr [E]; + share of equity-accounted investees ₹182.03 Cr; − exceptional ₹105.63 Cr (restructuring ₹91.29 Cr, Labour Code ₹14.34 Cr) = **PBT ₹168.50 Cr** → PAT ₹117.02 Cr (owners ₹114.28 Cr).
- **TVS Industrial & Logistics Parks** is a **24.48% joint venture**. Its asset transfer to an InvIT created the one-off; TVS SCS also records small distributions from TVS Infrastructure Trust.
- **Group related parties:**
  - Revenue from group companies: TVS Srichakra ₹161.67 Cr; Sundaram Lanka Tyres ₹10.46 Cr; Sundaram Industries ₹7.53 Cr; Universal Components UK ₹5.62 Cr; others small. Total **~₹187 Cr ≈ 1.7% of revenue** [E].
  - TVS Motor Company is **not** a related party: it belongs to a different TVS family branch and is an arm's-length customer.
  - Group exposure is small; no royalty.
- **Geography:** India ₹3,037 Cr (28%, +12.4%), RoW ₹7,966 Cr (72%, +9.2%). RoW ISCS +11.5%; RoW GFS +2.7%.
- **People and footprint:** 16,601 permanent employees; 435 warehouses (441); 7,124 customers; sea-freight TEU 112,007 (+22%). Its stated aim is to be "among the top 50 logistics companies worldwide".

---

## 4.3 Industry data upgraded from primary sources (chart-ready)

**I1. India container traffic by port group, FY25 → FY26 (m TEU)** [V-AR CONCOR MD&A; V-gov shipmin]
| Port group | FY25 | FY26 | YoY |
|---|---|---|---|
| All Indian ports | 23.29 | 24.79 | +6.46% |
| Major ports (12 port authorities) | 13.53 | 14.92 | +10.21% |
| Non-major ports [E: all − major] | 9.76 | 9.87 | +1.2% |
| — of which Mundra (Adani) | 8.28 | 8.47 | +2.30% |
| JNPA (major) | 7.30 | 8.17 | +11.93% |
| Other ports [E: all − JNPA − Mundra] | 7.71 | 8.15 | +5.7% |
- Read: Mundra (8.47m) and JNPA (8.17m) together handle **67% of India's boxes**. Major-port growth (+10%) far outran non-major (+1%) in FY26, so JNPA (with WDFC rail access) gained share from Mundra. JNPA's H1 FY27 surge (+17.6%) continues that trend [V-snip], yet JNPA's rail-borne share fell. Container tonnes at major ports were 213.0 MT (+10.07%), 23.3% of all major-port cargo.
- Other port growth in FY26 (CONCOR AR): Kolkata +18.39%, Haldia +22.70%, Vizag +2.75%, Chennai +6.71%, V.O. Chidambaranar +8.93%, Kamarajar +2.94%.

**I2. Rail container market, FY25 → FY26** [V-AR]
| Item | FY25 | FY26 | YoY |
|---|---|---|---|
| IR originating freight loading (MT) | 1,617.38 | 1,669.93 | +3.25% |
| IR containerised loading (MT) | 88.73 | 93.69 | +5.59% |
| — EXIM containers (MT) | 64.03 | 67.96 | +6.13% |
| — Domestic containers (MT) | 24.70 | 25.73 | +4.17% |
| CONCOR rail tonnage (MT) | 49.22 | 51.02 | +2.82% |
| — CONCOR EXIM originating (MT) | 35.37 | 36.63 | +3.57% |
| — CONCOR domestic originating (MT) | 14.24 | 14.38 | +0.97% |
| CONCOR share of IR container tonnage | 55.5% | 54.5% | −1.0 pt |
| CONCOR share of EXIM container tonnage [E] | 55.2% | 53.9% | −1.3 pt |
| CONCOR share of domestic container tonnage [E] | 57.7% | 55.9% | −1.8 pt |
| Containers as % of IR loading | 5.5% | 5.6% | — |
| Port boxes (m TEU) | 23.29 | 24.79 | +6.46% |
- Read: rail container tonnage (+5.6%) grew more slowly than port boxes (+6.5% in TEU) and much more slowly than JNPA (+11.9%). CONCOR grew more slowly than the rail container market (+2.8% vs +5.6% tonnage); **private operators took the increment.** The tonnage-share series matches the TEU-share series from the call to within 0.1 point.
- FY27 to date [V-snip, press citing Ministry of Railways]: IR loading Sep-2026 135.35 MT (+6.14%); Apr–Sep 2026 833.7 MT (+4.1%); freight revenue +3.7% in H1. FY27 aim ~1,750 MT.

**I3. Air cargo at Indian airports (thousand tonnes)** [V-gov AAI]
| Period | International | Domestic | Total | YoY total |
|---|---|---|---|---|
| FY25 | 2,325.10 | 1,408.24 | 3,733.34 | +~10% |
| FY26 | 2,451.87 (+5.5%) | 1,512.48 (+7.4%) | 3,964.35 | +6.2% |
| Mar-2026 | 208.13 (−6.0%) | 135.18 (+10.7%) | 343.31 | 0.0% |
| Apr–Aug FY27 | 1,159.73 (+14.4%) | 659.56 (+6.9%) | 1,819.29 | +11.6% |
| Aug-2026 | 240.41 (+15.5%) | 129.47 (+3.5%) | 369.88 | +11.0% |
- Read: the West Asia war cut March-2026 international air cargo by 6% and international aircraft movements by 21%. The rebound since April (+14% international) partly reflects the shift of sea freight to air during the Hormuz disruption [E]. Domestic air cargo, Blue Dart's core market, grew +7.4% in FY26 and +6.9% in Apr–Aug FY27. Blue Dart's shipments grew +7.1% in FY26 but only ~2% in Q1 FY27 (tonnage ~7%), so it is **at best holding share in domestic air and losing it in Q1 FY27** [E: Blue Dart ~1.44 MT total kilos, of which air ≈ 25% ≈ 0.36 MT ≈ 24% of AAI domestic cargo; ILLUSTRATIVE; FY25 tonnage not in the AR].

**I4. Logistics cost (PIB/NCAER)** [V-gov]
- 7.97% of GDP (FY24); 9.09% of non-services output; ₹24.01 lakh crore. Method: 3,500+ stakeholder survey plus MoSPI/RBI/GSTN data.
- PIB adds: the EDFC cut wagon turnaround from 15–16 days to 2–3 days and transit from 60+ hours to 35–38 hours. Inland waterways moved a record 145.84 MT. World Bank funding: US$1.96 bn for the EDFC and rail logistics; US$375m for the Ganga waterway.
- Policy tools named: ULIP, LDB 2.0, SMILE (8 pilot cities), IPRS 3.0, LEADS 2025.

**I5. 3PL express market index (Shadowfax deck, Redseer basis to FY25; company estimates after)** [V-deck]
| | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|
| 3PL express orders/day (FY22 = 100) | 100 | 122 | 134 | 138 | 171 | 192 |
| Shadowfax express orders/day (FY22 = 100) | 100 | 221 | 319 | 359 | 615 | 835 |
| Shadowfax share of 3PL express | ~8% | — | — | ~21% (Q1 FY26) | ~23% (H1 FY26, press) | 28–30% |
- Read:
  - The 3PL express pool grew only ~3% in FY25 (the Valmo in-sourcing year), then **~24% in FY26** and ~12% more by Q1 FY27 (Q1 vs the FY26 average). This supports Delhivery's claim that outsourcing is regaining share.
  - Shadowfax Q1 FY27: 198m express orders (+95%), express revenue ₹997 Cr → **₹50.4/order vs Delhivery's ₹58.0**; hyperlocal 49m orders; Ind-AS EBITDA 6.8%; PAT ₹65 Cr.
  - Derived shares of the Q1 FY27 3PL express pool [E]: Delhivery ~45–50%, Shadowfax ~28–30%, everyone else (Xpressbees, Ekart-3P, DTDC, Blue Dart, India Post, others) ~20–27%.

**I6. E-way bills (million), press reports citing GSTN [V-snip]**
May-25 122.6 · Sep-25 record (≈132) · Oct-25 126.85 · Dec-25 138.39 (record) · Jan-26 136.83 · Feb-26 132.59 (+18.8%) · **Mar-26 140.6 (all-time high, +13%)** · Apr-26 133.37 (+12%) · Jul-26 ~139.8 · Aug-26 139.08 (+7.7%).
- FY26 total ≈ 1,550–1,600m [E: H1 ~123/month, H2 ~135/month]. YoY growth slowed from +13–19% (Feb–Apr) to +7.7% (Aug), after the GST 2.0 base effect.

**I7. Fuel taxes and prices, 2026** [V-snip press; Delhi price V in Part 1]
- 26-Mar-2026 notification under Sec 5A of the Central Excise Act: **special additional excise duty on petrol ₹13 → ₹3/litre, on diesel ₹10 → nil**. Retail prices unchanged; OMCs told not to raise prices. Minister cited OMC under-recoveries of ~₹24/litre (petrol) and ~₹30/litre (diesel). Nayara raised its retail prices by ₹5 (petrol) and ₹3 (diesel).
- Then four pump hikes, 15–25 May 2026: Delhi diesel ₹87.67 → ₹95.20.
- So the ₹10 diesel duty cut absorbed part of the crude spike at OMC level; the consumer pass-through came only in May. That fits Delhivery's "end-April to mid-May" contract revisions and Blue Dart's April surcharge step-up.

**I8. West Asia / Hormuz timeline (freight-relevant)** [V-snip]
- 28-Feb-2026: war begins; Hormuz traffic disrupted.
- Mar-2026: India's international air movements −21%, international air cargo −6% [V-gov AAI]. CONCOR's Middle-East own-bill-of-lading service stopped; gunny-bale and Morbi-tile domestic rail flows hit [V-call].
- 26-Mar: excise cut.
- May: four diesel hikes; Hormuz "in its third month" of disruption (25-May press).
- Mid-June 2026: US–Iran memorandum of understanding on resuming shipping; tankers resume transit (World Oil, 18-Jun-2026). Iran pledges pre-war traffic within 30 days and 60 days toll-free; Intertanko says ~80 mines to clear; volumes below pre-war levels into July.
- Writer: say "disrupted from end-February to mid-June 2026, with a gradual reopening from late June". Do not assert full normalisation.

**I9. Global lens refresh (latest fiscal year)** [V-snip of company releases]
| Company | FY | Revenue | Margin | Note |
|---|---|---|---|---|
| DHL Group | 2025 | €82.9 bn (−1.6%) | EBIT €6.1 bn (7.4%); Express EBIT €3.16 bn (12.9%) | 2026 guide EBIT >€6.2 bn; parent of Blue Dart |
| UPS | 2025 | US$88.7 bn | GAAP operating margin 8.9% (adjusted 9.8%) | 2026 guide ~US$89.7 bn, ~9.6% |
| ZTO Express | 2025 | ~RMB 38–40 bn | adjusted net income RMB 9.5 bn (−6.3%) | parcels +13.3% (+4.5 bn) → ~38 bn parcels [E] |
| Full Truck Alliance (BlackBuck's closest analogue) | 2025 | RMB 12.49 bn (+11.1%) | net income RMB 4.46 bn (35.7% net margin) | China's digital freight-matching platform |
- Delhivery's FY26 1.05 bn parcels ≈ **2.8% of ZTO's 2025 volume** [E]. BlackBuck's FY26 revenue (₹652 Cr ≈ US$69m) ≈ **3.9% of FTA's** (US$1.79 bn) [E], at a similar ~25% PAT margin.

**I10. Policy indices**
- **LEADS 2025** (7th edition), released 13-May-2026 at the LEAPS 2025 awards [V-snip; PIB explainer confirms the edition].
  - New four-tier scheme: Exemplars / High Performers / Accelerators / Growth Seekers; ~59% weight on objective indicators; corridor-level speed and waiting-time assessment.
  - Exemplars: Tamil Nadu (coastal), Uttar Pradesh (landlocked), Mizoram (North-East), Delhi (UT). High Performers among coastal states: Gujarat, Kerala, Maharashtra.
- **World Bank LPI 2023:** India 38th of 139 (44th in 2018).
  - Sub-ranks: international shipments 22nd (44th in 2018); infrastructure 47th (52nd); logistics competence 48th.
  - Source: indbiz.gov.in (government) [V-snip].
  - No new LPI edition published as of Oct-2026 [V-snip].

**I11. Road-logistics outlook (ICRA, 30-Sep-2026 update) [V-snip]**
- FY27 revenue growth 8–10% (FY26 ~11%), mainly from higher freight rates; ICRA's sample grew 16.8% YoY in Q1 FY27.
- Margins range-bound at 8–10%.
- Risks: weak monsoon or El Niño, rising interest rates (repo hiked to 5.50% on 7-Oct-2026), West Asia-linked inflation.

## 4.4 Gap log (§H items and brief gaps)

| # | Gap | Status | Source / what was tried |
|---|---|---|---|
| H1 | All-India container TEUs FY26 | **Filled** — 24.79m (major 14.92m) | CONCOR AR; shipmin Mar-2026 PDF |
| H2 | Rail's current freight modal share | **Still open (latest = 27%, Rajya Sabha 2-Aug-2024, snippet)** | Parliament PDF returned an HTML error; minister now speaks of 45% (NRP) and an aspirational 55%. Proxy: containers 5.6% of IR tonnage; IR loading +3.25% vs port boxes +6.5% → rail losing share in containers [E] |
| H3 | E-way bills monthly FY24–FY27 | **Partly filled** (10 monthly points, FY26 estimate) | Press citing GSTN; no GSTN statistics page fetched (portal is JS-driven). FY totals still [E] |
| H4 | Air cargo FY26 | **Filled** — 3.96 MT (+6.2%) | AAI March-2026 report |
| H5 | Express-parcel market shares | **Partly filled** — Shadowfax 28–30% of 3PL express (company); Delhivery ~45–50% derived [E]; Valmo 64.5% of Meesho (H1 FY26, RHP via broker) still V-snip | Shadowfax deck; Shadowfax RHP industry chapter on SEBI not fetched (PDF >40 MB, budget) |
| H6 | Delhivery FY26 express shipments and PTL | **Filled** — 1,054m; 1,991 kt | Delhivery AR |
| H7 | CONCOR LLF FY26 and EXIM/domestic segments | **Filled** — LLF ₹398.6 Cr; segments ₹6,026 / ₹3,053 Cr, results 23.8% / 5.0% | CONCOR AR |
| H8 | CONCOR Q1 FY27 call transcript | **Still open — none exists** (screener's document list shows Q4 FY26 as latest; no Q1 board-meeting outcome PDF with an investor call). CONCOR held no Q1 FY27 call | screener docs list; BSE |
| H9 | BlackBuck vehicle-finance book | **Partly filled** — on-book ₹62.6 Cr (Stage 3 6.7%); partner-managed AUM not disclosed | BlackBuck AR |
| H10 | Blue Dart FY26 shipments/tonnage | **Filled** — 403.4m domestic + 0.56m international; 14.38 lakh t | Blue Dart AR |
| H11 | 26-Mar-2026 excise cut | **Filled (press)** — special additional duty petrol ₹13→₹3, diesel ₹10→nil; retail unchanged | BusinessToday/Moneylife; gazette notification not fetched |
| H12 | West Asia/Hormuz timeline | **Filled (press)** — disruption 28-Feb → mid-June MoU; gradual reopening | World Oil, Marine Insight |
| H13 | Q2 FY27 board dates | **Still open** for CONCOR, Delhivery, Blue Dart, TVS SCS (none intimated by 21-Oct); BlackBuck 29-Oct confirmed | screener re-check |
| H14 | LEADS 2025, LPI 2023 | **Filled (press/government)** | indbiz.gov.in; PIB explainer; press |
| H15 | Logistics market size FY26 | **Still open** — no FY26 re-estimate by DPIIT; FY24 ₹24.01 lakh crore confirmed by PIB. FY26 ~₹27–28 lakh crore at ~10% nominal GDP growth [E] | PIB |
| B1 | Delhivery PAT basis | **Confirmed** — owners ₹152.68 Cr vs total ₹152.54 Cr; screener uses total | Delhivery AR |
| B2 | CONCOR share ~74% FY20 → 54.5% FY26 | **FY26 confirmed (two bases); FY20 still unconfirmed** | CONCOR AR FY26; FY20 AR not fetched |
| B3 | WDFC 1,506 km; EDFC status | **Confirmed at press/JICA level** — WDFC complete (8-Sep-2026); EDFC (Ludhiana–Sonnagar) complete; 2,843 km combined; the 1,506/1,337 split comes from DFCCIL convention, not re-fetched | JICA (Part 1); Maritime Gateway / Cargo Connect |
| B4 | JNPA H1 FY27 rail share 12.7% | **Not upgraded** (press only; JNPA monthly release not fetched) | — |
| B5 | Shadowfax listing/m-cap | Unchanged (screener); Q1 FY27 deck adds KPIs | Shadowfax deck |
| B6 | Rating-agency sector notes | **Partly** — ICRA road-logistics outlook (snippet); no free CRISIL/CARE express-parcel note found | search |
| B7 | Global peers' annual reports | **Partly** — DHL/UPS/ZTO/FTA headline figures from company releases (snippets); the DHL PDF failed to download | search |

## 4.5 New insights (what an expert would add) and new primer issues

**Insights the first pass missed**
1. **CONCOR's land-cost risk is open-ended, not settled.** The 2022 "1.5% for 35 years" reform is not in CONCOR's own accounts. CONCOR books LLF at the 6%-of-market-value regime (₹399 Cr, growing ~7% a year), has signed no new lease for any of its 24 railway parcels, faces divisional demands it disputes, and carries an auditors' Emphasis of Matter. The privatisation case depended on land certainty; the filings show it does not yet exist. For CONCOR, LLF is ~20% of OP: a larger lever on earnings than a 1-point change in the JNPT rail coefficient (~₹15–20 Cr OP per point; Part 1 §C.1).
2. **CONCOR is buying volume.** Rebates rose 27.5% (EXIM +42%) while EXIM handling grew 8% and realisation per TEU fell. Domestic segment margin collapsed to 5% (3.6% pre-tax return on segment assets). Its rail tonnage grew half as fast as the rail container market (+2.8% vs +5.6%). Put together: share loss to private operators, price concessions and a structurally weak domestic book. The DFC upper-deck discount (planned tariff cuts to road-parity) will lower realisation further before any volume shift shows.
3. **Mundra is India's biggest box port, and it grew only 2%.** The FY26 port data invert a common assumption. JNPA (+11.9%; WDFC-connected; CONCOR's core gateway) is taking share from Mundra (+2.3%; Adani's own rail and ICD ecosystem). That is good for CONCOR's long-run catchment even though JNPA's rail share fell in H1 FY27.
4. **The parcel outsourcing cycle has turned.** The 3PL express pool barely grew in FY25 (+3%, the Valmo year) but rose ~24% in FY26 and is still compounding (Shadowfax/Redseer index). Delhivery (1.05 bn parcels, +40%) and Shadowfax (28–30% share) took nearly all of it. Two listed players plausibly hold ~75% of 3PL express [E], so pricing discipline ("no significant pricing pressure… yields will hold") is credible.
5. **Delhivery is entering BlackBuck's market.** It received an NBFC licence in July 2026 and plans partner-funded fleet-owner finance and insurance, which BlackBuck's CEO was asked about on his call. Neither primer mentions it. It is a medium-term threat to BlackBuck's cross-sell (vehicle finance is BlackBuck's "next leg") and a supply-side cost lever for Delhivery.
6. **Blue Dart's profit is a function of price, not volume; it is ceding share in e-commerce.**
   - Domestic shipments grew 7.1% in FY26 (in line with domestic air cargo, +7.4%) but only ~2% in Q1 FY27, while the 3PL express pool grew ~24% in FY26. It is holding share in air and losing it in e-commerce.
   - Q1 FY27 margin recovery came from repricing loss-making lanes, the GPI round and the fuel surcharge.
   - The group structure is clean: no royalty to DHL; ~₹206 Cr a year of international servicing charges to DHL Express India.
   - ₹1,240 Cr of aircraft charter sits inside the group, which is why standalone margins look half of consolidated.
7. **BlackBuck's "DTA-inflated PAT" problem is mostly an FY25 issue.** The FY26 DTA credit was only ₹7.8 Cr; the low tax rate persists because ₹255 Cr of recognised DTA shelters current tax. The bigger FY26 quality flags:
   - the vehicle-finance book is still tiny (₹63 Cr) with 6.7% Stage 3;
   - headcount fell 7% while revenue grew 53%, i.e. operating leverage is real.
8. **TVS SCS's FY26 is two companies.** India (28% of revenue) grew 12% with GFS India +38%; RoW (72%) grew 9%. The one-offs net to roughly +₹76 Cr (JV gain ₹182 Cr less ₹106 Cr restructuring and Labour Code), while impairment of financial assets nearly tripled to ₹56 Cr. Management's 4% PBT aspiration (FY28 firm) implies ~₹500+ Cr PBT on ~₹13,000 Cr revenue, vs ₹99 Cr adjusted PBT in FY26 [E]: the whole equity story.

### New primer issues (format as primer-issues.md)

#### From Logistics Solution Providers deep-research pass (2026-10-21, logistics-industry.md Part 4)

- **concor.html — LLF policy misstated (risks/regulation):** any text saying CONCOR now pays land licence fee at 1.5% of land value for 35 years is not supported by CONCOR's FY26 annual report. The AR (note 51, auditors' Emphasis of Matter) says IR's 19-Mar-2020 letter and the **Master Circular of 4-Oct-2022 levy 6% of market value with 7% annual escalation on existing land**, and that **no agreement has been executed for any of the 24 parcels**. LLF booked FY26 **₹398.62 Cr** (FY25 ₹373.81 Cr); no Ind-AS 116 asset or liability recognised. Rewrite as an open risk.
- **concor.html — add segment economics:** FY26 EXIM revenue ₹6,026 Cr with segment result ₹1,436 Cr (23.8%); domestic ₹3,053 Cr with ₹153 Cr (5.0%, from 8.0%). Rebates/discounts ₹202 Cr (+27.5%; EXIM +42%). Rail haulage ₹5,011 Cr = 55% of standalone operating income. Contingent liabilities ₹2,345 Cr (incl. LLF demands).
- **concor.html — network facts:** 68 terminals (not "65+"), 424 rakes, 57,746 containers, 1,238 employees at 31-Mar-2026; ~13 terminals notified under IR's ECRT policy.
- **concor.html — market context:** "JNPT is India's largest container port", or any equivalent, is wrong for FY26: **Mundra 8.47m TEU vs JNPA 8.17m**; all ports 24.79m TEU (+6.5%). CONCOR's rail tonnage +2.8% vs IR container tonnage +5.6% (share 54.5%).
- **concor.html — JNPT guidance wording:** FY27 rail-coefficient expectation is "~19% (maybe 20–21%)", not a firm "19–21%".
- **delhivery.html — FY26 volumes:** replace ">1 bn parcels / ~2 MT" with **1,054m express parcels (+40.2%) and 1,991 kt PTL (+17.4%), PTL realisation ₹11.32/kg** [AR FY26].
- **delhivery.html — Ecom deal terms:** "≤₹1,407 Cr / >99.8%" → **₹1,369.6 Cr for 99.87%** (subsidiary from 18-Jul-2025; wholly owned 10-Dec-2025); goodwill ₹1,041.7 Cr.
- **delhivery.html — new initiative:** add the **NBFC licence (July 2026)** and the asset-light fleet-owner finance/insurance plan (Q1 FY27 call). It overlaps BlackBuck.
- **delhivery.html — competitive share:** add Shadowfax's own claim of 28–30% of the 3PL express market (Q1 FY27) and its 198m quarterly express orders vs Delhivery's 322m.
- **blue-dart-express.html — shipments label:** "404 million e-commerce shipments" (if used) → **403.4m domestic shipments of all products (+7.1%)** plus 0.56m international; 14.38 lakh tonnes [AR FY26].
- **blue-dart-express.html — related parties:** state that there is **no royalty/brand fee to DHL**. Material flows: international servicing charges to DHL Express India ₹206 Cr; Deutsche Post IT ₹75 Cr; aircraft charter to subsidiary Blue Dart Aviation ₹1,240 Cr (explains standalone vs consolidated margin); loan to Blue Dart Aviation ₹544 Cr.
- **blue-dart-express.html — network facts:** 2,492 facilities, 33,000+ vehicles, 19,000+ PIN codes, >500 t payload a night [AR].
- **blackbuck.html — DTA size:** if the primer (or our Part 1) says FY26 PAT includes a ~₹25 Cr DTA credit, correct it to **₹7.8 Cr** (total tax ₹7.1 Cr). The large DTA recognition (₹247 Cr) was FY25.
- **blackbuck.html — vehicle finance:** on-book gross loans **₹62.6 Cr (2,005 loans), Stage 3 6.7%, Stage 2 4.1%**; Finserve total assets ₹179 Cr, FY26 loss ₹3.1 Cr; ₹100 Cr equity injected Dec-2025. The "~₹600 Cr partner-managed" figure is not in the AR; label it unverified.
- **blackbuck.html — competition:** add Delhivery's NBFC/fleet-finance entry (July 2026) and management's response ("no near-term threat"). Headcount 3,652 (−7% YoY).
- **tvs-supply-chain-solutions.html — geography basis:** FY26 is **India 28% / RoW 72%**; the 30/70 split is Q1 FY27. India +12.4%, RoW +9.2% in FY26.
- **tvs-supply-chain-solutions.html — one-offs detail:** FY26 share of JV profit ₹182.0 Cr (TVS ILP, 24.48% JV, InvIT transfer); exceptional loss ₹105.6 Cr = restructuring ₹91.3 Cr + Labour Code ₹14.3 Cr; impairment on financial instruments ₹56 Cr (₹21 Cr). PAT attributable to owners ₹114.3 Cr.
- **tvs-supply-chain-solutions.html — guidance:** add mid-teen FY27 revenue growth; ISCS margin 9% from Q2 and 9.5–10% by Q4 FY27; 4% PBT "aspiration" with FY28 as the firm target. Group related-party revenue (TVS Srichakra ₹162 Cr etc.) is ~1.7% of revenue; TVS Motor is not a related party.

### Part 4 source list (new this pass)
- Annual reports 2025-26 (BSE): CONCOR f7ed8d97-f3e0-4afd-bd99-6af5f3902be8 · Delhivery f2df7720-e670-4a6a-9dcf-fea3c31421a0 · Blue Dart 130422d5-3941-4526-93a9-65bb73997786 · BlackBuck af09c5c2-52da-4ad7-804e-273efcc55f78 · TVS SCS 8f4fdadc-d070-4c5a-aa4f-13eedb4cc62a (all under https://www.bseindia.com/xml-data/corpfiling/AttachHis/<id>.pdf)
- Ministry of Ports, Major-port cargo March 2026: https://shipmin.gov.in/sites/default/files/Cargo%20handled%20at%20Major%20Ports%20March%202026.pdf
- AAI Air Traffic Reports: https://www.aai.aero/sites/default/files/traffic-news/TRMar2k26_2.pdf · https://www.aai.aero/sites/default/files/traffic-news/TRAug2k26.pdf
- PIB explainer (27-Nov-2025): https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251127708001.pdf
- Shadowfax Q1 FY27 deck: https://nsearchives.nseindia.com/corporate/9900590024_31072026130039_Earnings_Presentation.pdf
- Press/snippets: e-way bills (IANS 10-Apr-2026, https://ianslive.in/e-way-bills-surge-to-all-time-high-of-1406-million-in-march--20260410172704; a2ztaxcorp category page); excise cut (https://www.businesstoday.in/india/story/govt-slashes-excise-duty-on-petrol-and-diesel-check-new-rates-522590-2026-03-27; https://moneylife.in/article/petrol-excise-duty-down-to-3-diesel-nil-no-change-in-retail-prices-as-govt-aims-to-cut-omc-losses/80059.html); Hormuz (https://www.worldoil.com/news/2026/6/18/hormuz-reopening-gains-momentum-as-tankers-resume-transit); rail Sep-2026 (https://psuwatch.com/newsupdates/indian-railways-freight-loading-grows-614-to-13535-mt-in-sept-2026); LEADS 2025 (https://visionias.in/current-affairs/news-today/2026-05-14/economy/7th-edition-of-logistics-ease-across-different-states-leads-2025-report-released); LPI (https://indbiz.gov.in/india-jumps-six-ranks-on-a-world-bank-index-in-2023); WDFC (https://www.maritimegateway.com/pm-modi-dedicates-final-western-dedicated-freight-corridor-sections-completing-full-jnpt-dadri-route/); ICRA road logistics (https://indiaseatradenews.com/india-road-logistics-sector-set-for-8-10-growth-in-fy2027-risks-persist-icra/); DHL FY25 (https://container-news.com/dhl-group-exceeds-earnings-guidance-for-2025/); UPS FY25 (https://investors.ups.com/sec-filings/all-sec-filings/content/0001628280-26-003510/0001628280-26-003510.pdf, snippet); ZTO FY25 (https://www.sec.gov/Archives/edgar/data/1677250/000110465926030007/tm269230d1_ex99-1.htm, snippet); FTA FY25 (https://en.prnasia.com/releases/global/full-truck-alliance-co-ltd-announces-fourth-quarter-and-fiscal-year-2025-unaudited-financial-results-525042.shtml, snippet).
- Scratch notes: /tmp/logistics-deep/notes.md; extracted texts in /tmp/logistics-deep/pdf/.

*End of Part 4.*
