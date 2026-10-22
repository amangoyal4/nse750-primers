# Indian Telecom Equipment (Telecom || Telecom - Equipment & Accessories): Research Dossier + Company Fact Packs

Compiled 2026-10-22 (UTC 09:37 start) for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), including sections A–H.
- **Part 2** is the company fact pack for all four members (brief-companies.md), with a JSON block.
- **Part 3** is the company-KPI appendix: summary grid, aggregates, reconciliation vs primers, primer issues and source URLs.

**Members (4, Tier C):** HFCL (HFCL · 500183), ITI Limited (ITI · 523610), Tejas Networks (TEJASNET · 540595), Sterlite Technologies / STL (STLTECH · 532374). Display name "Telecom Equipment"; slug telecom-equipment.

**Confidence tags**
- **[V]** = verified this session from a fetched page (screener.in pages pulled by curl at ~3:00 pm IST on 22-Oct-2026; Arihant Capital STL Q1 FY27 PDF; TrendForce press release 19-Oct-2026; FilingReader summary of ITI's FY26 filing; investywise/niftytrader/sahi/indianmasterminds/voicendata articles; screener STL Networks page). URLs in §3.5.
- **[V-snip]** = verified only from a search-result summary or a secondary article, not the primary document.
- **[K]** = well-established public fact from memory. The source is named but was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present it as "approx." or as a range.
- **[primer]** = from our own primer in primers/ (refreshed 9-Jul to 27-Jul-2026, FY26 basis).
- **[screener 22-Oct-26]** = screener.in consolidated pages pulled 22-Oct-2026, ~3:00 pm IST. It was a weak day for the group: **HFCL −4.98% and STL −5.00% (both hit the 5% band; both carry the "BE" series tag on screener, i.e. trade-for-trade/surveillance segment — verify)**, ITI −2.55%, Tejas −0.26%.

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. "lakh" in filings = ₹0.01 Cr (ITI files in ₹ lakh: ₹18,63,699 lakh = ₹18,637 Cr).
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. All four members have a March year-end.
- **Fibre units:** **fkm** = fibre-kilometre (one strand × one km). **ckm** = cable-kilometre (one cable × one km, any fibre count). **rkm** = route-kilometre (a trench/pole route, which may carry several cables). fkm = ckm × fibres per cable. A 24-fibre cable of 1 km = 24 fkm; a 288-fibre data-centre cable of 1 km = 288 fkm. **mn fkm** = million fibre-km.
- **FX: ₹94.9 = US$1** (19-Oct-2026) for all current USD conversions. Earlier orders are shown at the rupee the company used (HFCL's FY26 export order ~$1.1 bn = ~₹10,159 Cr ≈ ₹92/$; STL's $1.11 bn PAL = ₹9,271 Cr ≈ ₹83.5/$ at award, Jan-2026 [V-snip]). RMB 1 ≈ ₹13.1 [E, at ~7.25 RMB/$]. €1 ≈ ₹110 [E].
- **Macro context (from the prompt; reused across sibling dossiers):** RBI repo **hiked to 5.50% on 7-Oct-2026**; **West Asia war from 28-Feb-2026** (Hormuz closure, Brent peak ~$118/bbl, ceasefire 7-Apr-2026); rupee record low near ₹96.8 before ₹94.9; **US tariffs:** IEEPA tariffs struck down by SCOTUS 20-Feb-2026; Sec 122 10% until 24-Jul-2026; since then **10% Sec 301 on India on top of MFN** (China/Vietnam 12.5%), under legal challenge.

**Q2 FY27 status (as of 22-Oct-2026): two of four have reported (HFCL, Tejas); STL reports tomorrow; ITI has not announced a date.**

| Company | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|
| HFCL | **~22/23-Jul-2026** (Business Today interview 23-Jul; FY27 guide "40%") [V-snip] | **REPORTED 19-Oct-2026**: revenue ₹2,541.79 Cr (+143.6% YoY), EBITDA ₹658 Cr (25.9%), PAT ₹394.22 Cr (+448%), order book **₹28,911 Cr**; FY27 growth guide raised to **≥80%**; call 19-Oct [V screener announcement; V investywise/niftytrader] |
| ITI | **13-Aug-2026** (rev ₹425 Cr, loss ₹32 Cr; auditors' "disclaimer of conclusion") [V indianmasterminds] | **Not announced** as of 22-Oct [V screener: latest filings are C&AG auditor appointment 19-Oct, AGM book closure 29-Oct to 4-Nov-2026 for the 76th AGM]. Last year's Q2 board date not checked [gap]; expect ~Nov-2026 [E]. |
| Tejas Networks | **~late Jul/Aug-2026** (screener concall list shows "Aug 2026") [V screener] | **REPORTED 16-Oct-2026**: revenue ₹406 Cr (+55% YoY), net loss ₹207 Cr (vs ₹307 Cr), order book **₹2,315 Cr** (Q1 ₹1,529 Cr), India 96% of book; LoI for 18,000+ BSNL 4G sites; call 16-Oct [V screener; V-snip sahi/stockgro] |
| STL | **27-Jul-2026** (Arihant result note dated 27-Jul) [V] | **Board 23-Oct-2026 (tomorrow)**; earnings call 23-Oct [V screener: "Upcoming result date: tomorrow"]. Results NOT in this file. |

**Still listed? All four are listed** [V screener 22-Oct-26]. Corporate actions that change the analysis:
1. **STL demerged its Global Services Business (network deployment / system integration — the BharatNet-type EPC arm) into STL Networks Ltd ("Invenia – STL Networks").** NCLT Mumbai sanction **14-Feb-2025**; effective close of **31-Mar-2025**; **1:1 share entitlement, record date 24-Apr-2025** [V-snip: STL AR 2024-25 / BSE filing summaries]. STL Networks is separately listed (screener STLNETWORK: **m-cap ₹1,810 Cr at ₹37.1; FY26 revenue ₹851 Cr, OP ₹41 Cr, PAT −₹26 Cr; promoter 44.12%**) [V screener 22-Oct-26]. **STL Digital (IT services) was NOT demerged** — it is still inside STL as the "Digital and Technology Solutions" segment (₹72 Cr revenue in Q1 FY27, 3.8% of the total) [V Arihant]. Our primer gets this backwards (§3.4).
   - Consequence: STL's FY24 and earlier screener numbers include the services arm; FY25 is restated on a continuing basis on screener (FY25 ₹3,996 Cr vs FY24 ₹4,083 Cr — the FY24 figure is not like-for-like) [E]. Do not compute a clean FY22→FY26 CAGR for STL.
2. **STL raised ₹1,500 Cr by QIP (mid-2026)**, ~75% for debt reduction; net cash **₹483 Cr at 30-Jun-2026** [V Arihant; V-snip DSIJ]. Promoter stake fell to **42.29% (Sep-26)** from 44.52% (Jun-26) [V screener]. Screener's Mar-26 balance sheet is pre-QIP.
3. **STL signed a second hyperscaler deal on 1-Oct-2026**: a subsidiary won an LTSA for optical connectivity products "worth about USD 1.2 billion through December 2030" [V screener announcement]. Combined with the Jan-2026 $1.11 bn PAL, STL now has ~**$2.3 bn (~₹21,800 Cr at ₹94.9) of hyperscaler commitments** [E].
4. **HFCL raised equity**: a ₹550 Cr QIP and ₹555 Cr of warrants; the Q2 FY27 monitoring-agency report says ₹90 Cr of utilisation is delayed to 31-Dec-2026 [V screener announcement 19-Oct-26]. Equity capital ₹144 Cr (Mar-25) → ₹153 Cr (Mar-26) [V screener]. HFCL subsidiaries include HTL Ltd (cable; exempted from EU duties alongside HFCL) [V-snip], Polixel Security Systems and Moneta Finance [K] — no demerger announced.
5. **ITI sold land**: a 21-acre K.R. Puram (Bengaluru) parcel for **₹914.31 Cr** to the CGST Department; completed July 2026; ₹902.81 Cr of bank borrowings repaid the same month [V sahi]. **The gain was booked in FY26 (Q4)**, before completion, which is one of 32 auditor qualifications behind a **disclaimer of opinion on FY26** [V FilingReader]. No delisting, merger or OFS announced. **Government holds 90.02% as promoter plus a further 7.88% in a "Government" category, leaving ~2.0% with the public** [V screener Sep-26].
6. **Tejas**: no corporate action; borrowings rose to **₹4,970 Cr at Sep-2026** (₹4,177 Cr Mar-26) [V screener]. No rights issue found [V-snip — none announced].

---

## READ THIS FIRST: ten definitional traps

1. **ITI's FY26 "profit" is a land sale, and the auditors disclaimed the accounts.**
   - Screener FY26: revenue ₹2,184 Cr, operating profit ₹64 Cr (2.9%), "other income" ₹503 Cr (Q4 alone ₹472 Cr), interest ₹217 Cr, **PAT ₹293 Cr** [V screener]. Screener books ITI's exceptional items inside "other income".
   - The filing: **exceptional items net ₹449.15 Cr, including ₹832.19 Cr from sale of land and buildings**; the ₹914.31 Cr K.R. Puram sale was recognised in FY26 although it completed in July 2026; **auditor B.K. Ramadhyani & Co. LLP issued a disclaimer of opinion with 32 qualifications** and said ITI "would have reported a loss for the year" without it [V FilingReader]. Q1 FY27 review: "Disclaimer of Conclusion" [V indianmasterminds].
   - Ex-land, FY26 pre-tax ≈ **−₹540 Cr** [E: ₹293 Cr − ₹832 Cr]. Treat ITI's P/E as **not meaningful**. Never call FY26 a "return to profit" without the caveat.
   - "Government support to date" in the FY26 filing: **₹3,084 Cr of financial assistance** [V FilingReader]. Grants/assistance can appear in other income — read each year's notes.
2. **ITI's order book has three numbers.** Primer ~₹18,500 Cr; FY26 filing **₹18,637 Cr (Mar-26)** [V FilingReader]; Q1 FY27 release **₹13,882.81 Cr (Jun-26)** [V indianmasterminds]. The ₹4,750 Cr drop in a quarter where revenue was only ₹425 Cr implies a **reclassification or cancellation** (ASCON Phase-IV, ₹8,280 Cr in the primer, is still at proof-of-concept, due 31-Dec-2026 [V-snip quartr]) — **FLAG; the writer should not print a single "order book" for ITI without the date and this caveat.**
3. **Order book vs L1 vs LoI vs APO vs PAL/LTSA.** These are different stages:
   - **L1** = lowest bidder in a tender (not an order). HFCL's consortium was "L1" on BharatNet UP East + UP West (~₹6,925 Cr) [V-snip]; ITI–Tera "L1" on three packages (~₹3,022 Cr) [V-snip].
   - **LoI / APO** (letter of intent / advance purchase order) = a commitment pending a detailed PO. Tejas's Aug-2026 TCS LoI (₹1,537 Cr, 18,685 sites) [V-snip sahi] and its Q2 "LoI for 18,000+ sites" are the same programme, probably the same order — **do not add them**.
   - **PAL / LTSA** (product award letter / long-term supply agreement) = volume allocation by a hyperscaler, not a fixed-value PO. STL's $1.11 bn PAL (FY27–29) and $1.2 bn LTSA (to Dec-2030) are allocations; off-take depends on the buyer's build [V Arihant; V screener].
   - **HFCL's ₹28,911 Cr book includes ~₹5,070 Cr of O&M** (multi-year BharatNet maintenance) — revenue that arrives slowly over 7–10 years at low ticket size [V-snip niftytrader].
4. **fkm vs ckm vs rkm, and "capacity" of what.** HFCL's capex plan: **optical fibre 28 → 43.1 mn fkm/yr; OFC (cable) 39 → 62 mn fkm/yr; preform 600 tpa** [V-snip niftytrader]. Cable capacity is often quoted in fkm (fibre content) because one cable holds many fibres. An older HFCL plan said "40 million rkm" [V-snip wirecable] — almost certainly a units error for fkm. STL's primer says "~50 mn fkm drawing capacity"; an older STL interview said fibre 50 mn fkm / OFC 35 mn fkm [V-snip]; STL has since rationalised capacity [K] — **current STL fibre capacity is unverified**. Never add fibre capacity to cable capacity (cable consumes fibre).
5. **Tejas: revenue is a shipment campaign, and its balance sheet is the story.** FY25 ₹8,923 Cr → FY26 ₹1,103 Cr (−88%) [V screener]. Q1+Q2 FY27 ₹808 Cr [V screener]. **Debtor days 1,077 and inventory days 1,160 in FY26** (screener ratios on a tiny revenue base) [V screener] — the receivable is mostly BSNL/TCS money for FY25 shipments. Company net debt **₹3,531 Cr (Mar-26)** = gross ₹4,035 Cr − cash ₹505 Cr [primer, company release]; screener borrowings ₹4,177 Cr − investments ₹365 Cr = ₹3,812 Cr. By Sep-26 screener borrowings are **₹4,970 Cr** [V]. Use the company figure for Mar-26 prose; use screener for the Sep-26 trend.
6. **Tejas FY23/FY24 in our primer are wrong.** Primer: FY23 ~₹1,097 Cr / PAT ~−₹344 Cr; FY24 ~₹1,232 Cr / ~−₹63 Cr. **Screener: FY23 ₹920 Cr / PAT −₹36 Cr; FY24 ₹2,471 Cr / PAT +₹63 Cr** [V screener]. The "7× then ÷8" device should read **FY24 ₹2,471 → FY25 ₹8,923 (3.6×) → FY26 ₹1,103 (÷8.1)**.
7. **STL: continuing vs discontinued, and which arm left.** The demerged arm is the **Global Services Business (EPC/SI)**, now STL Networks. STL's remaining segments are **Optical Networking (~96%)** and **Digital & Technology Solutions (~4%)** [V Arihant]. Our primer says the opposite (that the digital/IT arm left and STL still does "network deployment"). Pre-FY25 STL revenue includes the services arm (FY23 ₹6,925 Cr peak) [V screener].
8. **EBITDA basis.** Company EBITDA ≠ screener operating profit:
   - HFCL FY26: company ~₹826 Cr (16.7%) [primer] vs screener OP ₹764 Cr (15.4%) [V]. Q2 FY27: company ₹658 Cr (25.9%) vs screener ₹630 Cr (25%) — company includes other income [E].
   - STL FY26: company ₹628 Cr (13.2%) [primer] vs screener ₹569 Cr (12.0%). Q1 FY27: Arihant ₹385 Cr (20.2%) = screener; DSIJ ₹397 Cr (20.8%) [V-snip].
   - Use screener in tables; quote the company figure in prose with the basis.
9. **Consolidated vs standalone.** HFCL Q1 FY27 consolidated PAT ₹245.64 Cr vs standalone ₹179.21 Cr [V-snip angelone]; a Univest figure of ₹362.92 Cr for Q2 is a different basis (likely standalone or owners' share) vs the company's consolidated ₹394.22 Cr [V-snip]. ITI files both; the sahi headline says "standalone" for the ₹32.25 Cr Q1 loss that indianmasterminds calls consolidated [V-snip] — immaterial (ITI's subsidiaries are tiny) [E].
10. **"Exports" and "US share".** HFCL Q1 FY27 exports ₹1,063.3 Cr = **55.5% of revenue** (24.1% a year earlier) [V-snip angelone]; FY26 41% [primer]. **STL Q1 FY27: North America 54% of revenue** (39% in FY26), Europe 22%, RoW 22% [V Arihant] — STL is now majority-US-exposed. Neither company discloses a clean "US share"; HFCL's export book is 57% of the order book [V-snip]. Tejas: India 96% of order book [V-snip]. ITI: ~100% domestic government [primer].

---

## 0. Top-line framing (what an expert leads with)

- **Four members, three unrelated businesses, two opposite cycles in 2026.**
  - **Fibre & cable makers (HFCL, STL):** optical fibre (OF), optical fibre cable (OFC), data-centre connectivity. FY26 revenue **₹9,694 Cr (+20.3%)**, OP ₹1,333 Cr (13.8%), PAT ₹385 Cr; **Q1 FY27 revenue ₹3,825 Cr (+102% YoY), OPM 20.9% (8.5% a year ago), PAT ₹443 Cr** [E: sums of screener]. They are riding the strongest global fibre up-cycle in a decade.
  - **Equipment designer (Tejas):** optical transport, GPON/IP routers, 4G/5G RAN. FY26 revenue ₹1,103 Cr (−87.6%), OP −₹682 Cr, PAT −₹909 Cr; H1 FY27 PAT −₹409 Cr [V screener]. It is in the trough after BSNL's 4G campaign.
  - **Government system integrator (ITI):** BharatNet EPC, BSNL 4G assembly, defence comms (ASCON), smart meters. FY26 revenue ₹2,184 Cr (−39.6%), operating profit ₹64 Cr; "profit" from a land sale; disclaimer of opinion [V].
  - **All four: FY26 revenue ₹12,981 Cr (−37% on FY25's ₹20,600 Cr, entirely Tejas's cliff), OP ₹715 Cr (5.5%), reported PAT −₹231 Cr; TTM (to Sep/Jun-26) revenue ₹16,692 Cr, OP ₹2,009 Cr (12.0%), PAT ₹677 Cr; m-cap ₹1,09,220 Cr on 22-Oct-2026** [E: sums of screener 22-Oct-26].
- **The global fibre glut became a shortage in under 12 months.**
  - TrendForce (19-Oct-2026): **2026 global fibre demand 577 mn fkm; supply shortfall 180 mn fkm; industry utilisation 92%; inventory down from ~4 months (2024) to ~1 month; leading suppliers booked into Q1 2027; spot finished-fibre prices 2.8–5× 2025 levels (bend-insensitive data-centre fibre >5×, telecom fibre ~3.7×); AI data centres 18–20% of demand in 2026 → 30–35% in 2027; shortage to persist to at least 2028** [V TrendForce].
  - CRU: Chinese G.652.D bare-fibre prices **+80% between Nov-2025 and Jan-2026**; ~¥83/fkm in Mar-2026 (~₹1,090/fkm, ~$11.5) [V-snip CRU via Hengtong; E conversion]. In the glut, Chinese domestic G.657.A2 prices had fallen to ~¥32/core-km [primer] and China Mobile's 2025/26 cable tender cleared ~35% below its 2023/24 award [primer, citing CRU].
  - Corning Q2-2026: Optical Communications sales **+32% to $2.07 bn**, Enterprise (hyperscale) **+65%**; multi-year deals with Meta ($6 bn, Jan-2026), Amazon (multi-billion, 2026) and Verizon (129 mn fkm for 2027–32, Sep-2026) [V-snip SEC 8-K; V TrendForce]. Prysmian Q2-2026 Digital Solutions organic **+18%, margin 23.8%** (16.8%) [V-snip Prysmian].
- **India's two fibre makers turned into exporters to US hyperscalers.**
  - HFCL: exports **55.5% of Q1 FY27 revenue** [V-snip]; order book **₹28,911 Cr (Sep-26), 64% OFC/DCI, 57% export** [V-snip]; FY27 revenue guide **≥+80% (≥₹8,909 Cr)** after +40% in July [V-snip]; ₹1,800 Cr capex to take fibre to 43.1 mn fkm and cable to 62 mn fkm, preform 600 tpa (into 2028) [V-snip].
  - STL: order book **₹18,618 Cr (Jun-26)**, Q1 order intake ₹13,100 Cr; North America 54% of revenue; data-centre share 21% → guided 50% in FY27; FY27 EBITDA margin guided 23%; $100 mn US connectivity facility; ex-China OFC share 9% [V Arihant]. Plus the 1-Oct $1.2 bn LTSA [V screener].
- **BSNL's indigenous 4G is built; the RAN cliff is now an order-refill question.**
  - **98,557 indigenous 4G sites installed, 97,213 on air (31-Jul-2026)** vs a 1-lakh target [V-snip MoC data]. Tejas completed supply under its **₹7,492 Cr** APO by May-2025 [V-snip Outlook Business]. BSNL is finalising **~20,000–22,000 additional sites** plus a 10,000-site opex tender [V-snip]; TCS got an add-on APO of ₹2,903.22 Cr (May-2025); Tejas got a ₹1,537 Cr LoI for 18,685 sites (Aug-2026); ITI got ₹856.39 Cr for 7,613 sites (Jul-2026) [V-snip]. **No 5G-upgrade order has been confirmed** [V-snip].
  - Tejas's book is ₹2,315 Cr (Sep-26) vs FY25 billing of ₹8,923 Cr — the refill is ~26% of one campaign year [E].
- **BharatNet (Amended BharatNet Programme, ABP) is the domestic floor.** **₹1,39,579 Cr** approved 4-Aug-2023 for ~2.64–2.65 lakh gram panchayats; **16 packages**, BSNL as project management agency, 10-year contracts including O&M [V-snip USOF/DoT]. Winners include Polycab, HFCL (consortium), ITI, NCC, GR Infra and STL Networks (Invenia) as PIAs; Tejas is the router OEM for 7 of the first 12 packages [V-snip].
- **Valuations price fibre as an AI asset and equipment as an option** (screener 22-Oct-26):
  - STL **₹41,199 Cr, P/E 174 (TTM), ~17–18× book**, EV/TTM OP ~51× [E] — up ~9.5× from its 52-week low of ₹84.6.
  - HFCL **₹38,518 Cr, P/E 44.4 (TTM), ~6.8× book**, EV/TTM OP ~25× [E] — up ~4.2× from ₹59.8.
  - ITI **₹21,921 Cr at its 52-week low (₹228 vs high ₹340), 11.5× book**, no meaningful P/E; ~2% public float.
  - Tejas **₹7,582 Cr, 3.0× book**, loss-making; ₹11,394 Cr EV on screener net debt [E].

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Products (by member)

| Product | What it is | Main buyers | Members |
|---|---|---|---|
| **Optical fibre (bare)** | Ultra-pure silica strand drawn from a preform; G.652.D (standard single-mode), G.657.A1/A2 (bend-insensitive, FTTH/data centre), G.654.E (ultra-low-loss long-haul) | Cable makers, telcos, hyperscalers | STL (integrated preform → fibre), HFCL (fibre; preform 600 tpa planned) |
| **Optical fibre cable (OFC)** | Fibres in tubes/ribbons, sheathed/armoured: duct, aerial, ADSS, micro, IBR (intermittently bonded ribbon) high-count cables (up to 3,456–6,912 fibres) | Telcos (5G backhaul, FTTH), BharatNet, hyperscalers, utilities | HFCL (#1 Indian OFC supplier [V screener key points]), STL (9% ex-China global OFC share [V Arihant]) |
| **Connectivity / DCI** | Pre-terminated MPO/MMC assemblies, patch panels, enclosures, splice-free FTTx (STL CONCAT; STL Neuralis portfolio "3× cable density") | Hyperscale/AI data centres, FTTH | STL (attach rate 16% Q1 FY27 → 25% target), HFCL (₹215 Cr AI-DC connectivity plant approved Jul-26) [V; V-snip] |
| **Optical transport** | DWDM/OTN, 100G–800G coherent; packet-optical | Telcos, utilities, railways, defence, DCI | Tejas (core business); HFCL (5G transport range, small) |
| **Broadband access & IP** | GPON OLT/ONT, IP/MPLS routers, switches | BharatNet, FTTH ISPs, enterprises | Tejas (BharatNet router OEM, 17,000+ routers in FY26) [primer], HFCL (routers, switches), ITI (assembles ONT/OLT) |
| **RAN (4G/5G radio)** | eNodeB/gNodeB, RRH, baseband, massive MIMO (Tejas 64TR) | BSNL, private networks, export OEMs (NEC) | Tejas (designer), ITI (assembly/manufacturing for BSNL 4G), HFCL (5G FWA CPE, small cells) |
| **Wi-Fi / UBR radios / FWA CPE** | Wi-Fi 6/7 APs, point-to-multipoint unlicensed-band radios, 5G FWA CPE | Telcos (Jio/Airtel FWA), enterprises, railways | HFCL |
| **Turnkey EPC / system integration** | Network design, trenching, laying, commissioning; 10-year O&M | BharatNet (BSNL as PMA), railways, smart cities, defence | ITI (BharatNet III ~₹7,000 Cr), HFCL (₹5,070 Cr O&M + ₹4,090 Cr network orders), STL Networks (demerged) |
| **Defence electronics** | Electronic fuzes (105/130/155 mm), ground surveillance radars, thermal sights, secure switching (ASCON), encryptors | Army, MoD, export | HFCL (FY27 aspiration ~₹500 Cr [V-snip]), ITI (ASCON Phase-IV, encryptors) |
| **Other government electronics** | Smart energy meters (RDSS), solar modules, smart cards, micro-PCs, data-centre services | DISCOMs, PSUs | ITI |

### 1.2 Value chains (inputs → customer)

1. **Glass → gigabit (fibre & cable):** silicon tetrachloride (SiCl₄), germanium tetrachloride (GeCl₄, the core dopant), oxygen, helium, high-purity quartz tubes → **preform** (VAD/OVD/MCVD/PCVD deposition + sintering; the scarce, IP-heavy, capex-heavy step) → **fibre draw** (towers drawing ~2,000–3,000 m/min [K]) + coating (UV acrylates) → **cabling** (colouring, buffering in loose tubes or ribbons, strength members of FRP/aramid, HDPE sheath, armour) → **connectivity** (terminated assemblies) → **deployment** (trench/duct/aerial; EPC) → **lit by** transport/access/RAN electronics.
   - Preform-to-fibre is ~60–70% of the value of a standard fibre; cabling adds ~30–40% on a bare-fibre base for a simple duct cable, more for high-count IBR [E, industry norms; FLAG].
   - STL is integrated from preform; HFCL is integrated fibre → cable and is building preform capacity (600 tpa) [V-snip]. Most Indian cablers (Birla Cable, Vindhya, Aksh, Polycab's OFC line, Finolex) buy fibre.
   - **Germanium and helium** are the 2026 bottlenecks: STL is diversifying suppliers and exploring lower-Ge processes [V Arihant]. China dominates germanium supply and has export-licensed it since Aug-2023 (and banned exports to the US in Dec-2024) [K].
2. **Silicon → network (equipment):** merchant silicon (Broadcom, Marvell, Intel/Altera FPGAs, Qualcomm/NXP for RAN, Analog Devices RF), optics modules, PCBs → **design** (hardware, firmware, network-management software; patents — Tejas 676 filed/371 granted [primer]) → **contract manufacturing** (Tejas uses EMS partners; ITI assembles in its own plants) → **system integration** (TCS for BSNL 4G; C-DOT core) → **deployment & AMC**.
   - Value sits in **IP and software**; the bill of materials is mostly imported (chips, RF, optics). India's "domestic value addition" in telecom gear is low (Trusted Source + PLI aim to change it).
3. **Tender → cash (government EPC):** DoT/USOF (now Digital Bharat Nidhi, DBN) funds → BSNL (PMA) tenders packages → PIA (ITI/HFCL/Polycab…) buys OFC, ducts, routers, civil work → builds → milestone billing → **payment after acceptance** → 10-year O&M. Cash goes out at build and comes back late: ITI's debtor days 486 and payables 2,670 days (screener, FY26) show a contractor that passes the delay to its own suppliers [V screener].

### 1.3 Where value is captured
- **Preform and specialty fibre** (G.654.E, bend-insensitive, hollow-core, multi-core) and **high-density connectivity** carry the best margins; bare G.652.D is a price-taker [E; V Arihant on attach-rate economics].
- **Owned equipment IP** (Tejas) earns high gross margins (~40–50% on optical in normal years [K, Tejas historical]) but carries a fixed R&D bill; national RAN campaigns are thin-margin (Tejas Q4 FY25: ₹1,907 Cr revenue, net loss ₹72 Cr) [V screener].
- **EPC** earns low single-digit margins, often negative: HFCL's turnkey segment lost ₹122.58 Cr at PBIT on ₹136.07 Cr revenue in Q2 FY27 [V-snip niftytrader]; ITI's operating margin was −25% to +3% in FY23–FY26 [V screener].
- In 2026 the money is in **fibre/cable exported to US hyperscalers**: HFCL's Telecom Products segment earned PBIT ₹716.24 Cr on ₹2,321.98 Cr (30.8%) in Q2 FY27 [V-snip]; STL Optical Networking EBIT margin 21.8% in Q1 FY27 [V Arihant].

---

## 2. Size and growth

### 2.1 Global fibre and cable
- **Global fibre demand 2026: 577 mn fkm**, with a 180 mn fkm shortfall (TrendForce) [V]. Implied deliverable supply ~397 mn fkm if the shortfall is measured against demand [E — FLAG: TrendForce's definition of "shortfall" not stated; global installed capacity is typically quoted at ~700–800 mn fkm incl. China [K, CRU]; utilisation 92%].
- **AI data centres: 18–20% of 2026 demand (~105–115 mn fkm) → 30–35% in 2027** [V TrendForce; E arithmetic]. CRU: data-centre optical cable demand **+63% in 2026** [V Arihant citing CRU]; 2025 data-centre fibre demand +76% [primer, citing industry].
- Global OFC market ~US$13 bn (2024) [V-snip IIFT brief]. Corning Optical Communications alone ~$2.07 bn/quarter (Q2-26) [V-snip].
- **India's share:** STL ~9% of ex-China OFC [V Arihant]; India's installed fibre capacity ~100 mn fkm/yr (IIFT brief, 2026) [V-snip] — likely ~13–17% of global capacity [E]. India's domestic demand was ~31 mn fkm in 2023 (older article) [V-snip, weak].

### 2.2 India telecom equipment
- **Telecom imports ~₹1.46 lakh Cr in FY24 vs exports ~₹20,000 Cr** (one DoT-based account); a different DoT account (telecom equipment + mobiles) gives exports ₹1.49 lakh Cr vs imports ₹1.53 lakh Cr — the definitions differ (mobile handsets are now a large export) [V-snip; FLAG]. India's FY26 imports from China were **$131.6 bn** (+16%), with telecom instruments a top category [V-snip].
- **PLI participants (to Jan-2025): cumulative sales ₹78,672 Cr, exports ₹14,963 Cr, investment ₹4,081 Cr** [V-snip DoT].
- India OFC exports: **>₹3,400 Cr (~$400 mn)** in the year before the EU case (FY24), US the top destination, EU ~¼ [V voicendata]. By FY26 HFCL alone exported ₹2,047 Cr [primer], and HFCL's Q1 FY27 exports were ₹1,063 Cr in a quarter [V-snip] — **India's OFC exports have probably tripled since FY24 to ~₹8,000–12,000 Cr annualised** [E: HFCL + STL North America/Europe run-rates; FLAG].

### 2.3 Domestic demand pools (₹)
- **BharatNet (ABP): ₹1,39,579 Cr** over ~2023–2033 including O&M [V-snip].
- **BSNL revival packages: ₹69,000 Cr (2019), ₹1.64 lakh Cr (2022), ₹89,047 Cr (2023, incl. 4G/5G spectrum)** [K, PIB]. BSNL 4G TCS-consortium deal ~₹19,000 Cr incl. 5G upgradability [V-snip]; Tejas APO ₹7,492 Cr [V-snip].
- **Private telco capex:** Vi plans **₹45,000 Cr over FY27–FY29** (₹9,000 Cr of orders placed; Q1 FY27 capex ₹1,930 Cr) [V-snip sahi/Outlook]. Jio/Airtel annual capex ran ~₹30,000–60,000 Cr each in the FY23–FY24 5G peak and declined in FY25–FY26 [K, company reports; FLAG — not fetched].
- **Defence comms:** ASCON Phase-IV (ITI, ~₹8,280 Cr) [primer]; HFCL defence aspiration ₹500 Cr (FY27) [V-snip].

### 2.4 Sub-sector revenue and growth (the four, screener consolidated) [V/E]

| Year | HFCL | ITI | Tejas | STL | Total | YoY |
|---|---|---|---|---|---|---|
| FY22 | 4,727 | 1,861 | 551 | 5,437 | 12,576 | — |
| FY23 | 4,743 | 1,395 | 920 | 6,925 | 13,983 | +11.2% |
| FY24 | 4,465 | 1,264 | 2,471 | 4,083 | 12,283 | −12.2% |
| FY25 | 4,065 | 3,616 | 8,923 | 3,996* | 20,600 | +67.7% |
| FY26 | 4,949 | 2,184 | 1,103 | 4,745 | 12,981 | −37.0% |
| TTM | 7,492 (to Sep-26) | 2,111 (to Jun-26) | 1,447 (to Sep-26) | 5,642 (to Jun-26) | 16,692 | — |

\*STL FY25 onward excludes the demerged Global Services Business; FY24 and earlier include it.
- FY22→FY26 the group's revenue is **flat (+0.8% total)** — the "industry" has no trend; it has campaigns (Tejas FY25, ITI FY25) and a fibre cycle (STL FY23 peak, FY25 trough; HFCL FY26–27 boom) [E].
- FY26→TTM: +29% in 2–3 quarters, all from HFCL and STL [E].

---

## 3. Demand drivers and end-markets

| Driver | What it buys | 2026 status | Members exposed | Evidence |
|---|---|---|---|---|
| **AI / hyperscale data centres (US-led)** | High-count IBR cable, bend-insensitive fibre, MPO/MMC connectivity, DCI optics | **Boom**: AI DC 18–20% of 2026 fibre demand → 30–35% 2027; US DC capacity 63 → 126 GW by 2030; India DC 1.6 → 10 GW by 2031 | STL (DC 21% of revenue → 50% FY27E), HFCL (₹215 Cr AI-DC plant; exports 55.5%), Tejas (800G DCI, small) | [V TrendForce; V Arihant; V-snip] |
| **Telco 5G densification & FTTH (India)** | Fibre backhaul, FTTH cable, GPON, FWA CPE, transport | Slow: private capex post-5G peak; Vi re-starting (₹45k Cr plan, debt pending) | HFCL (FWA CPE, OFC), Tejas (optical, GPON), STL | [V-snip Vi; K] |
| **BharatNet ABP** | OFC, ducts, routers, OLT/ONT, EPC + 10-yr O&M | Execution phase across 16 packages; state-led variants (Gujarat, AP, Chhattisgarh, Odisha) | ITI (~₹7,000 Cr), HFCL (UP E+W ~₹6,925 Cr L1; earlier ₹2,501 Cr pkg), Tejas (router OEM 7/12), STL Networks (PIA) | [V-snip] |
| **BSNL 4G expansion / 5G** | RAN (Tejas), core (C-DOT), SI (TCS), assembly (ITI) | 1 lakh sites ~done; ~20–22k more being ordered; 5G not ordered | Tejas, ITI | [V-snip] |
| **Telco capex abroad / export OEMs** | Fibre & cable (Europe, US BEAD), RAN radios (NEC), optical | US BEAD rural broadband (US$42.45 bn) with BABA "Build America" rules favours US-made fibre/cable [K]; Europe FTTH | HFCL, STL (US plant, Italy plant), Tejas | [K] |
| **Defence & railways** | Secure switching, radios, fuzes, radars, Kavach/LTE-R comms | Indigenisation lists; steady but slow | HFCL, ITI | [primer; K] |
| **Government electronics** | Smart meters (RDSS: 25 crore meters target [K]), solar, smart cards | ITI diversification; low margin | ITI | [primer] |

Key numbers:
- **STL's US exposure:** North America 54% of Q1 FY27 revenue (FY26 39%) [V Arihant]. At ₹1,910 Cr quarterly revenue that is ~₹1,030 Cr/quarter to North America [E].
- **HFCL's export book:** 57% of ₹28,911 Cr = ~₹16,480 Cr [E]; the anchor is a ~US$1.1 bn (~₹10,159 Cr) multi-year OFC contract [primer].
- **BharatNet's FTTH utilisation is weak**: only ~45% of FTTH connections commissioned under BharatNet are active (secondary source) [V-snip] — the government is pushing ABP's 10-year O&M model to fix this.

---

## 4. Supply side and cost structure

### 4.1 Key inputs and their price drivers
- **Fibre/cable:** SiCl₄ and GeCl₄ (germanium is the costliest dopant; China export controls since 2023) [K; V Arihant]; helium (draw-tower cooling; supply shocks from Qatar/Russia — **the 2026 West Asia war and the Hormuz closure hit Qatari helium** [E inference; FLAG]); quartz tubes (Heraeus, Tosoh); acrylate coatings; HDPE/PBT/aramid/FRP for cable; steel armour. STL Q1 FY27 gross margin **49.6%** (raw materials 50.4% of revenue) [V Arihant].
- **Equipment:** merchant silicon, FPGAs, RF front-ends, optical modules — dollar-priced imports; the rupee at ₹94.9 (from ~₹85–86 a year earlier [K]) raises the BOM ~10% in rupees [E]. Tejas's inventory (FY26 inventory days 1,160) was bought at older rates [V screener].
- **EPC:** HDPE ducts, OFC, labour, civil works, diesel — West Asia oil spike (Brent ~$118 peak, ~$95 after ceasefire [prompt]) lifted fuel and polymer costs in Mar–Apr 2026 [E].
- **Financing:** RBI repo 5.50% (hiked 7-Oct-2026) [prompt]. Interest burden FY26: Tejas ₹303 Cr (27% of revenue), ITI ₹217 Cr, HFCL ₹242 Cr, STL ₹224 Cr [V screener].

### 4.2 "Where ₹100 of revenue goes" — three archetypes [E composites; FLAG]

**(a) Integrated fibre & cable maker in an up-cycle (STL Q1 FY27, screener/Arihant basis)**
| Item | ₹ per ₹100 | Source |
|---|---|---|
| Net raw materials (glass chemicals, Ge, He, polymers, bought fibre) | 50.4 | V Arihant (9,630/19,100) |
| Employee cost | 10.2 | V Arihant |
| Other expenses (power, freight, plant, SG&A) | 19.2 | V Arihant |
| **EBITDA** | **20.2** | V |
| Depreciation | 4.5 | V |
| Interest | 2.9 | V |
| Other income | +0.6 | V |
| Tax | 3.1 | V |
| **PAT** | **10.3** | V |

**(b) Integrated fibre & cable maker in the trough (STL FY25)**: EBITDA ~10.4, depreciation ~7.9, interest ~6.0 → PAT −3.1 [V screener: 416/3,996; 316; 241; −123]. **Same plant, ₹13 swing in PAT margin per ₹100** — the cycle is the margin.

**(c) Equipment designer in a quiet year (Tejas FY26)** — revenue ₹1,103 Cr; expenses ₹1,785 Cr (162% of revenue), OP −62; depreciation 37 (capitalised R&D amortisation); interest 27; PBT −123; PAT −82 [V screener per ₹100]. In the campaign year (FY25): OP 14, depreciation 4, interest 3, PAT 5 [V screener].

**(d) Government EPC contractor (ITI FY26)**: expenses 97 (materials/sub-contract/bought-in ~75–80 [E], employee ~12–15 [E]), OP 2.9, interest 9.9, depreciation 2.6 → pre-exceptional loss ~−9.6; exceptional land gain +38 → PAT +13.4 [V screener; E split].

### 4.3 Capacity and utilisation

| Player | Fibre (mn fkm/yr) | Cable (mn fkm/yr) | Preform | Utilisation / note | Source |
|---|---|---|---|---|---|
| HFCL | **28 → 43.1** (plan; into 2028) | **39 → 62** (plan) | 600 tpa planned (~US$64 mn earlier plan) | "Capacity-constrained against demand" | V-snip niftytrader; primer |
| STL | "~50" (primer; unverified current) | ~35 (older) | In-house (integrated) | Global ex-China OFC share 9%; ₹500 Cr/yr de-bottlenecking ×3 yrs; Arihant models utilisation 70–105% | primer; V-snip; V Arihant |
| India total | ~100 | n/a | Limited (STL, HFCL plan, Finolex preform commissioned) | IIFT brief (2026) | V-snip |
| Global | ~577 demand; shortfall 180 | — | Preform expansion takes 18–24 months | 92% utilisation (2026) | V TrendForce |

- **Revenue per fkm (indicative):** Arihant's FY29E sensitivity uses **OFC realisation $20–27/fkm** for STL (cable-level, blended with connectivity) [V]. Chinese bare fibre ~¥82–83/fkm (~$11–11.5) in Mar–May 2026 [V-snip]. So a cable realisation of ~$20–27/fkm ≈ **₹1,900–2,560/fkm** at ₹94.9 [E]. In the 2024 trough Indian bare-fibre realisations were ~$4–6/fkm [K, industry; FLAG].
- **What 62 mn fkm of cable means for HFCL [E]:** at $20/fkm and 85% utilisation, ~₹10,000 Cr of cable revenue — consistent with management's "₹10,000 Cr by FY29" ambition [V-snip].

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)
- **Indian OFC:** HFCL calls itself the **#1 OFC supplier in India** [V screener key points]; STL is India's largest integrated fibre maker and holds **9% of the ex-China global OFC market** (8% in FY26) [V Arihant; V screener]. Others: Birla Cable, Vindhya Telelinks (MP Birla group), Aksh Optifibre, Polycab, Finolex Cables (preform commissioned; doubling fibre), Apar, Universal Cables, UM Cables, ZTT India (Chinese-owned), Aberdare (Prysmian-owned) [V voicendata list of EU-investigated firms; V-snip]. No audited share data found [gap].
- **Indian telecom equipment (RAN):** Ericsson, Nokia and Samsung supply Jio/Airtel/Vi RAN [K]; **Huawei and ZTE are effectively excluded since the Trusted Source regime (2021)** [K]. In BSNL's indigenous 4G, Tejas supplies RAN, C-DOT the core, TCS integrates, ITI assembles part [V-snip].
- **Optical transport/IP:** Nokia, Ciena, Cisco, Juniper (now HPE), Huawei (legacy installed base), Tejas [primer].
- **BharatNet EPC:** fragmented across ~10+ PIAs; Polycab (~₹5,649 Cr), HFCL consortium (~₹6,925 Cr L1), ITI (~₹7,000 Cr incl. NER-II ₹1,901 Cr), NCC, GR Infra, Tera–ITI, STL Networks [V-snip].

### 5.2 Unlisted heavyweights, MNCs, PE
- **C-DOT** (state R&D lab; 4G/5G core) — partner, not listed [primer].
- **Ericsson India, Nokia Solutions & Networks India, Samsung India** — unlisted subsidiaries; large PLI beneficiaries (Nokia, Ericsson, Samsung, Jabil, Flex are telecom PLI participants [K]).
- **Corning** (US) has its own optical-fibre plant near Chennai (opened ~2022) [K — FLAG: verify date and capacity]. **Prysmian** owns Aberdare (Pune) [K]. **ZTT India** (Chinese parent Zhongtian) [V voicendata].
- **Tata group** (Panatone → Tejas 53.28%); **Vedanta/Anil Agarwal group** (Twin Star → STL 42.29%); **Nahata family** (HFCL 28.29%); **President of India** (ITI 90.02% + 7.88% other government) [V screener].

### 5.3 China and imports, product by product
- **Fibre:** China is the swing producer (YOFC, Hengtong, FiberHome, ZTT, Futong). In 2024 Chinese overcapacity collapsed global prices; in 2026 Chinese suppliers prioritise their own AI build-out and prices outside China rose above Chinese levels for the first time in years [primer; V-snip CRU]. Russia's buyers saw wholesale Chinese fibre go from ¥16/km (early 2025) to ¥40/km (Jan-2026) [V-snip].
- **Equipment:** Chinese gear is excluded from Indian telco networks via Trusted Source, but **components** (PCBs, modules, passives) are still largely Chinese — India imported $131.6 bn from China in FY26 [V-snip].
- **Trade remedies on India's OFC exports:** **EU anti-dumping duty, Regulation 2024/3014 (13-Dec-2024): STL & Sterlite Tech Cables 11.4%; Birla Cable, Universal Cables, Vindhya 6.9%; other cooperating 9.0%; all others 11.4%; HFCL/HTL exempted** [V-snip EUR-Lex + press]. **EU countervailing duty, Regulation 2025/1135 (10-Jun-2025)** added an anti-subsidy layer (rates not fetched) [V-snip]. STL serves the EU from its Italian plant [V voicendata]. **No US anti-dumping/CVD order on Indian OFC was found** [gap] — the US was India's top OFC destination [V voicendata].

---

## 6. Business-model archetypes and their economics

| Archetype | Members | Revenue engine | Normal EBITDA | Capital intensity | Working capital | Key risk |
|---|---|---|---|---|---|---|
| **1. Integrated fibre & cable manufacturer** | STL, HFCL (fibre/cable leg) | Capacity × utilisation × $/fkm, mix toward connectivity | 10–14% trough, 20–26% boom (STL Q1 FY27 20.2%; HFCL Q2 FY27 25.9%) | High: preform/draw towers; dep. 4–8% of revenue | Moderate (STL WC days −30; HFCL 208) | Price cycle; China capacity; Ge/He |
| **2. Equipment IP designer** | Tejas (HFCL products leg) | Campaign shipments + steady optical/access; R&D capitalised | 10–20% in campaign; deeply negative in gaps | Low physical, high R&D | Very heavy in govt campaigns (Tejas debtor days 1,077) | Customer concentration; refill; R&D vs global majors |
| **3. Government EPC / system integrator** | ITI, HFCL turnkey, STL Networks | Milestone billing on tenders; 10-yr O&M | −5% to +5% | Low | Extreme (ITI debtor 486, payables 2,670 days) | Delays, LDs, payment lags, pass-through margin |
| **4. Defence electronics (adjacency)** | HFCL, ITI | Trials → orders; consumables (fuzes) | 20–30% if scaled [E] | Medium | Milestones | Trial gating, slow ramp |

- **HFCL is a portfolio of all four**: Q2 FY27 Telecom Products ₹2,322 Cr (PBIT 30.8%), Turnkey ₹136 Cr (PBIT −90%), Defence ₹55 Cr [V-snip]. The FY26 split was ~59% products [V screener key points] (primer: ~62%).
- **The 2026 lesson**: archetype 1 earns more than archetype 2 for the first time in years. HFCL + STL TTM OP ₹2,415 Cr (18.4%) vs Tejas + ITI TTM OP −₹406 Cr [E].

---

## 7. Regulation and policy

### 7.1 Trusted Source and national security (what changed: nothing in 2026; enforcement steady)
- **DoT licence amendment (Mar-2021), effective 15-Jun-2021:** telcos may only deploy "trusted products" from "trusted sources" designated by the **National Cyber Security Coordinator (NCSC)**; Huawei and ZTE not designated [K]. Telecommunications Act 2023 gives the government powers over equipment standards and trusted sources [K].
- **Mandatory Testing and Certification of Telecom Equipment (MTCTE)** via TEC [K].

### 7.2 PLI and design-led manufacturing
- **Telecom & networking PLI** notified Feb-2021 (original outlay **₹12,195 Cr**, FY22–FY26; 4–7% incentive on incremental sales; **design-led** sub-scheme with +1% added Jun-2022; one-year extension) [K]. DoT later cited a total incentive of **₹4,115 Cr** (likely the committed/revised amount) [V-snip; FLAG conflict with ₹12,195 Cr].
- **Disbursed ₹1,162.03 Cr to 31-Mar-2025**; only 21 of 42 shortlisted firms paid; FY25 payouts just ₹13.75 Cr vs RE ₹1,450.97 Cr [V-snip DoT RTI / parliamentary committee]. **Tejas received ₹189 Cr (Apr-2025)** as the first tranche for H1 FY26 [V-snip]. FY26/FY27 disbursal data not found [gap].
- Industry complaint: some PLI firms "white-labelled" imports [V-snip].

### 7.3 Public procurement
- **Public Procurement (Make in India) Order** and DoT's telecom-specific local-content notifications give "Class-I local suppliers" (≥50% local content) purchase preference [K]. BSNL's 4G tender was effectively restricted to indigenous technology (2020 directive) [K].
- **Trade remedies**: EU ADD/CVD on Indian OFC (§5.3). India itself imposes ADD on Chinese optical fibre (dispersion-unshifted SM fibre, extended in 2023–24 [K, FLAG]) — supports domestic fibre prices.

### 7.4 US trade and BABA/BEAD (what changed in 2026)
- **IEEPA "reciprocal" tariffs (which had hit India at 25% + 25% penalty in Aug-2025 [K])** were **struck down by SCOTUS on 20-Feb-2026**; **Sec 122 10% until 24-Jul-2026; since then 10% Sec 301 on top of MFN** (China/Vietnam 12.5%), under legal challenge [prompt]. MFN duty on optical fibre cables (HTS 8544.70) is **0%** [K] — so the effective US tariff on Indian OFC is ~10% vs ~12.5% on Chinese/Vietnamese (plus Sec 301 legacy China duties) [E]. Indian OFC thus has a **small tariff edge over China/Vietnam** in the US.
- **BEAD/BABA:** US BEAD ($42.45 bn) requires "Build America, Buy America" domestic content for fibre/cable [K]. STL's US cable plant (Lugoff, South Carolina; opened 2023 [K]) and its new **$100 mn US connectivity facility** [V Arihant] are the hedge. HFCL has no disclosed US plant [gap].
- The Ministry of Communications said Indian telecom equipment exports to the US "remain competitive despite tariffs" (2025) [V-snip tele.net].

### 7.5 BharatNet governance
- USOF renamed **Digital Bharat Nidhi (DBN)** under the Telecom Act 2023 [K]. ABP: BSNL as PMA; PIAs selected by bidding; 10-year contracts (incl. 3 years O&M per one source) [V-snip]. State-led variants: Gujarat (agreements, RFPs), Odisha (via BSNL), Andhra Pradesh (APBIL SPV, May-2026), Chhattisgarh (11,000+ GPs, ~₹3,900 Cr, Aug-2026) [V-snip].

### 7.6 PSU rules (ITI)
- **Minimum public shareholding (25%)**: ITI's public float is ~2% [V screener]; central PSUs have repeatedly received extensions/exemptions [K]. No OFS announced [gap].
- ITI's accounts are audited by C&AG-appointed auditors (six statutory/branch auditors for FY27 appointed 19-Oct-2026) [V screener].
- Revival plan approved by CCEA (Feb-2014, ~₹4,157 Cr incl. grants and equity [K]); financial assistance to date ₹3,084 Cr [V FilingReader].

---

## 8. History and cycles (narrative; full timeline in §G)
1. **1948–1990s, the state factory era:** ITI makes India's switches; liberalisation (1991–99) brings Alcatel, Siemens, Ericsson; ITI loses its captive buyer [primer].
2. **1999–2001, the telecom bubble:** HFCL is a "K-10" stock in the Ketan Parekh episode; collapses [primer].
3. **2000s:** Sterlite Optical (STL, demerged from Sterlite Industries in 2000–01 [V screener about]) builds fibre; Tejas founded (2000); ITI referred to BIFR (2004) and placed under a revival plan (2014) [K].
4. **2016–2019, the Jio + BharatNet I/II fibre boom:** Indian fibre demand and Chinese tenders surge; STL's revenue doubles FY17→FY19 (₹2,449 → ₹5,087 Cr) and OPM hits 22% [V screener]; HFCL ₹4,738 Cr FY19 [V screener].
5. **2019–2021, the first glut + COVID:** Chinese overcapacity, prices halve; STL OPM falls to 12% by FY22 [V screener].
6. **2021:** Trusted Source rules; telecom PLI; **Tata (Panatone) takes control of Tejas** [K; primer].
7. **2022–2023:** 5G auction (Aug-2022, ~₹1.5 lakh Cr bid [K]); Jio/Airtel 5G capex peak; BSNL indigenous 4G awarded to TCS consortium (May-2023; Tejas APO ₹7,492 Cr) [V-snip]; ABP approved (Aug-2023, ₹1,39,579 Cr) [V-snip]; EU opens ADD case (Nov-2023) [V-snip].
8. **2023–2025, the second glut:** China Mobile tender −35%; Indian telco capex pause; STL losses FY24–FY25, debt pressure; HFCL FY25 PAT halves [V screener; primer]. EU ADD on Indian OFC (Dec-2024), CVD (Jun-2025) [V-snip]. STL demerges global services (Mar-2025) [V-snip].
9. **FY25, the BSNL campaign:** Tejas ₹8,923 Cr revenue; ITI ₹3,616 Cr [V screener]; supply complete May-2025 [V-snip].
10. **FY26, the cliff and the turn:** Tejas −88%; BSNL 4G live nationally (~1 lakh sites) [V-snip]; Chinese fibre +80% Nov-25→Jan-26 [V-snip]; STL $1.11 bn PAL (Jan-2026) [V Arihant]; HFCL ~$1.1 bn export order [primer].
11. **2026 (FY27):** fibre shortage (TrendForce: to 2028) [V]; HFCL Q2 revenue +144%, OB ₹28,911 Cr [V-snip]; STL QIP ₹1,500 Cr, net cash, $1.2 bn LTSA (1-Oct) [V]; ITI land sale + disclaimer [V]; BSNL 4G expansion orders (~20k sites) [V-snip]; RBI hikes to 5.50% (7-Oct) [prompt].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands

| KPI | Definition | HFCL | ITI | Tejas | STL |
|---|---|---|---|---|---|
| Order book (₹ Cr) | Signed, unexecuted orders (incl. O&M) | **28,911** (Sep-26) | **13,883** (Jun-26); 18,637 (Mar-26) | **2,315** (Sep-26) | **18,618** (Jun-26) |
| Book-to-bill (OB ÷ TTM revenue) | Years of visibility | 3.9× | 6.6× (Jun-26) | 1.6× | 3.3× |
| Order inflow | New orders in period | ~₹4,800 Cr Q2 FY27 [E: 28,911 − 26,665 + 2,542] | n/a | ~₹1,192 Cr Q2 [E: 2,315 − 1,529 + 406] | ₹13,100 Cr Q1 FY27 [V] |
| Fibre capacity (mn fkm) | Draw capacity | 28 → 43.1 | — | — | ~50 (unverified) |
| Cable capacity (mn fkm) | Cabling capacity (fibre content) | 39 → 62 | (OFC/HDPE small) | — | ~35 (old) |
| Realisation ($/fkm, cable) | Revenue ÷ fkm sold | n/a | — | — | $20–27 (Arihant scenario) |
| Export share of revenue | Exports ÷ revenue | 55.5% (Q1 FY27) | ~0% | Small (OB 4% intl) | ~78% (NA 54% + Europe 22% + part RoW) [E] |
| Gross margin | 1 − materials/revenue | n/a | n/a | n/a | 49.6% (Q1 FY27) |
| EBITDA margin | Screener OP ÷ revenue | 25% (Q2 FY27) | 0.4% (Q1 FY27) | −26% (Q2 FY27) | 20% (Q1 FY27) |
| Debtor days | Receivables ÷ revenue × 365 | 163 (FY26) | 486 | 1,077 | 82 |
| WC days | Screener working-capital days | 208 | −131 | 211 | −30 |
| CFO/EBITDA | Cash conversion | −44% (FY26) | 70% | n.m. | 102% |
| Net debt/EBITDA | Screener basis | 2.3× (FY26); ~1.1× TTM | 11× | n.m. | 2.6× (FY26) → net cash (Jun-26) |
| Govt/PSU share of revenue | BSNL/BharatNet/defence | Turnkey 5% of Q2 [E] | ~100% | ~96% of OB India, mostly BSNL [E] | Low (EPC demerged) |
| Patents | Filed / granted | n/a | n/a | 676 / 371 | 785+ |

### 9.2 Through-cycle returns
- **STL ROCE (screener):** FY19 30% (boom) → FY22 8% → FY24–25 3% → FY26 8%; TTM (screener top) 7.65% [V]. **HFCL ROCE:** 19–24% in FY19–FY22 → 8% FY25 → 11% FY26 [V]. **Tejas:** 15% FY25 → −15% FY26. **ITI:** −8% to +2% [V].
- Through-cycle (FY17–FY26 average) ROCE: STL ~13%, HFCL ~17%, Tejas ~5%, ITI ~3% [E: simple averages of screener].

### 9.3 Fibre cycle arithmetic [E; FLAG — composite]
- A 1 mn fkm swing at $20/fkm ≈ ₹190 Cr of revenue at ₹94.9 [E].
- A $1/fkm change in realisation = 3–5% of STL's OFC revenue (Arihant) [V].
- **Operating leverage:** STL Q1 FY26 → Q1 FY27: revenue +₹891 Cr, EBITDA +₹253 Cr (28% incremental margin) [V screener]. HFCL Q2 FY26 → Q2 FY27: revenue +₹1,499 Cr, OP +₹440 Cr (29% incremental) [V screener].

### 9.4 Equipment campaign arithmetic (Tejas) [E]
- FY26 fixed cost base ≈ expenses ₹1,785 Cr + depreciation ₹403 Cr + interest ₹303 Cr ≈ **₹2,490 Cr**, of which materials are maybe ₹600–700 Cr [E]. At a ~40% gross margin, breakeven revenue ≈ **₹4,500–5,000 Cr** [E]; primer says ₹3,000–4,500 Cr. H1 FY27 annualises to ~₹1,600 Cr.
- The BSNL 18,000-site LoI (₹1,537 Cr) ≈ ₹8.2 lakh per site of RAN equipment [E: 1,537/18,685]. The original APO: ₹7,492 Cr ÷ 1 lakh sites ≈ ₹7.5 lakh per site [E]. ITI's 7,613-site contract: ₹856 Cr ≈ ₹11.2 lakh/site (includes more scope) [E].

---

## 10. Global lens

| Company | Country | Latest revenue | Margin | Valuation (indicative) | Note |
|---|---|---|---|---|---|
| Corning (Optical Communications) | US | $2.07 bn Q2-26 (+32%) | segment net margin ~15–20% [K] | Corning group ~30× fwd P/E [K, FLAG] | Meta $6 bn, Amazon, Verizon 129 mn fkm deals [V-snip] |
| Prysmian (Digital Solutions) | Italy | Group H1-26 €11,239 m; DS organic +18% Q2 | DS adj. EBITDA 23.8% (Q2-26) | Group adj. EBITDA guide €2.8–2.9 bn | Owns Aberdare India [K] |
| YOFC (Yangtze Optical Fibre & Cable) | China | n/a (H1-26 not found) | n/a | n/a | World #1 preform/fibre by volume [K] |
| Hengtong / FiberHome / ZTT | China | n/a | n/a | n/a | Set the world price [primer] |
| Fujikura / Sumitomo / Furukawa | Japan | n/a | n/a | Fujikura re-rated multi-fold on AI fibre 2024–26 [K] | STL won a patent dispute vs Fujikura (Celesta cable) [V Arihant] |
| Ericsson / Nokia / Samsung | SE/FI/KR | RAN majors | ~10–15% | ~10–15× P/E [K] | Tejas's competitors |
| Ciena / Cisco / Juniper | US | optical/IP | — | — | Compete with Tejas optical/IP |
| **STL** | India | ₹1,910 Cr Q1 FY27 (~$201 mn) | 20.2% | 174× TTM P/E; EV/TTM OP ~51× [E] | ~9% ex-China OFC |
| **HFCL** | India | ₹2,542 Cr Q2 FY27 (~$268 mn) | 25% | 44× TTM P/E; EV/TTM OP ~25× | #1 India OFC |
| **Tejas** | India | ₹406 Cr Q2 FY27 (~$43 mn) | −26% | 3.0× P/B; EV/Sales ~10× FY26 | Only listed Indian RAN/optical designer |

- **Scale:** HFCL + STL combined quarterly revenue (~₹4,450 Cr, ~$470 mn) is ~23% of Corning Optical Communications alone [E].
- **Margins:** Indian fibre makers' Q1–Q2 FY27 EBITDA (20–26%) is now at or above Prysmian Digital Solutions (23.8%) [E vs V-snip].
- **Valuation:** Indian names trade at a premium to global peers on earnings (STL 174× trailing) because trailing earnings are trough-weighted; on FY27E guidance the gap narrows (HFCL ~₹8,900 Cr revenue × ~24% → ~₹2,100 Cr EBITDA [E] → EV/FY27E EBITDA ~19×) [E].

---

## 11. Technology and disruption risks
- **Next-gen fibre:** hollow-core fibre (HCF; 47% lower latency, Microsoft/Lumenisity), multi-core fibre (4–7× capacity), G.654.E (30% lower loss) [V Arihant]. If hyperscalers shift to HCF for AI back-end links, standard-fibre capacity could become stranded [E]. STL is developing all three [V Arihant]; HFCL's portfolio is less visible [gap].
- **Co-packaged optics / silicon photonics** inside AI clusters increase fibre counts per rack (positive for high-count cable and connectivity) [E].
- **Open RAN** is Tejas's wedge (Rakuten Symphony partnership) but global Open RAN adoption slowed after 2023 [K]; vRAN/cloud-RAN favour software-heavy vendors.
- **5G-Advanced/6G** cycles (6G ~2030) will require new RAN silicon; Tejas must fund R&D through gaps [primer].
- **Satellite broadband (Starlink/OneWeb/Kuiper)** could substitute some rural FTTH/BharatNet last-mile use cases [K]; Starlink received Indian authorisation in 2025 [K].
- **Supply-chain:** Ge/He scarcity; China's export controls on germanium/gallium [K]; preform capacity takes 18–24 months to add [V TrendForce].
- **Overbuild risk:** every prior fibre shortage (2017–18) produced a glut within ~2 years [primer; K]. Chinese, Japanese and US expansions announced in 2026 could land in 2028 [E].

---

## 12. What to watch
1. **STL Q2 FY27 (23-Oct-2026):** revenue vs Q1 ₹1,910 Cr; EBITDA margin vs 23% FY27 guide; order book vs ₹18,618 Cr (will include the $1.2 bn LTSA?); net cash vs ₹483 Cr; US/NA share.
2. **ITI Q2 FY27 (date TBA):** the July land completion (₹914 Cr) — will Q2 show a further gain or a reversal? Auditor review conclusion; order book vs ₹13,883 Cr; borrowings after the ₹903 Cr repayment.
3. **BSNL:** detailed POs for ~20–22k additional 4G sites; any 5G-upgrade order; BSNL's FY26 capex and payments to TCS/Tejas (drives Tejas receivables).
4. **Tejas:** order-book composition (non-BSNL share), receivable collections, Sep-26 borrowings ₹4,970 Cr — any Tata equity support.
5. **Fibre prices:** CRU/TrendForce monthly; China Mobile/China Telecom 2026–27 cable tenders; announcements of new preform capacity (China, Corning, Fujikura, HFCL 600 tpa).
6. **HFCL:** FY27 delivery vs ≥80% guide (H1 ₹4,457 Cr, so H2 needs ≥₹4,452 Cr [E]); receivables (₹2,630 Cr Sep-26 vs ₹2,212 Cr Mar-26) and CFO (H1 ₹140 Cr); turnkey segment losses; defence ₹500 Cr aspiration.
7. **US trade:** court ruling on the Sec 301 10%; any AD/CVD petition on Indian OFC in the US (none found); BEAD disbursal pace.
8. **EU:** CVD/ADD expiry/review; STL Italy utilisation.
9. **BharatNet ABP:** package-wise GP completions; DBN disbursals; state-led packages.
10. **Vi funding:** SBI-led ₹35,000 Cr debt closure → vendor orders (optical/IP for Tejas, fibre for HFCL/STL).
11. **PLI:** FY26/FY27 disbursals; any PLI 2.0 for telecom/design-led.
12. **Rates/FX:** repo 5.50% (Oct-26); rupee ₹94.9 — positive for exporters (HFCL/STL), negative for import-heavy equipment BOMs (Tejas/ITI).

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **The global fibre price cycle, now driven by AI data centres, not telcos.** TrendForce: 577 mn fkm demand, 180 mn fkm shortfall, prices 2.8–5× 2025, shortage to 2028 [V]. This single variable moved STL from a ₹123 Cr loss (FY25) to ₹197 Cr PAT in one quarter (Q1 FY27) and HFCL's quarterly PAT from −₹29 Cr (Q1 FY26) to ₹394 Cr (Q2 FY27) [V screener]. It is a price cycle; the question is how long.
2. **Government campaigns as step functions.** BSNL 4G (Tejas, ITI) and BharatNet (ITI, HFCL, Tejas routers) arrive in waves sized by budgets, not markets. Tejas's revenue went ₹2,471 → ₹8,923 → ₹1,103 Cr in three years [V screener]. The 2026 refill (~20k BSNL sites, ₹1,537 Cr LoI) is ~17% of the FY25 campaign [E].
3. **Working capital and government receivables decide survival.** ITI debtor days 486, Tejas 1,077, HFCL 163 (rising, receivables +19% in H1 FY27) vs STL 82 [V screener; V-snip]. Debt funds the gap — Tejas borrowings ₹4,970 Cr (Sep-26) against a ₹7,582 Cr m-cap [V] — and the repo hike to 5.50% raises the cost [prompt].
4. **Trusted Source + export pull = a non-Chinese supplier premium.** India's ban on Chinese gear and US/EU buyers' preference for non-Chinese fibre (plus US tariffs of ~10% on India vs ~12.5% on China/Vietnam) make HFCL and STL "strategic" suppliers to hyperscalers [V; prompt; E]. The EU's ADD/CVD (STL 11.4%; HFCL 0%) shows the premium can be taxed away [V-snip].
5. **Ownership shapes behaviour.** Tata (Tejas: patient capital, R&D through losses), Vedanta group (STL: deleveraging, QIP), Nahata (HFCL: aggressive growth, equity raises, low 28% promoter stake), Government (ITI: survival by land sales and grants, 2% float) [V screener; primer].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "Glass is the new GPU": how AI turned India's fibre makers into US hyperscaler suppliers
- Data: TrendForce demand/shortfall/price multiples; Corning +32%/Enterprise +65%; STL NA 54% of revenue, DC 21% → 50%, $1.11 bn PAL + $1.2 bn LTSA, $100 mn US facility; HFCL exports 55.5%, OB 57% export, capex to 43.1/62 mn fkm and 600 tpa preform [V; V-snip].
- Tension: margins 20–26% are boom margins; preform capacity arrives in 18–24 months; HFCL's receivables rising; STL at 174× trailing P/E.

### B2. "The day after the campaign": Tejas and BSNL's indigenous 4G
- Data: ₹7,492 Cr APO; 98,557 sites installed/97,213 on air; FY25 ₹8,923 Cr → FY26 ₹1,103 Cr; quarterly losses ~₹200 Cr; OB ₹1,514 → ₹1,529 → ₹2,315 Cr; LoI 18,685 sites ₹1,537 Cr; debtor days 1,077; borrowings ₹4,970 Cr; 676 patents; NEC/Rakuten; no 5G order [V; V-snip; primer].
- Question: does the next BSNL phase (and 5G) refill the book, and does Tata recapitalise?

### B3. "ITI: a factory kept alive by its land"
- Data: FY26 OP ₹64 Cr vs ₹832 Cr land gain; disclaimer of opinion (32 qualifications); ₹914 Cr K.R. Puram sale completed Jul-26; ₹903 Cr debt repaid; OB ₹18,637 → ₹13,883 Cr; ₹3,084 Cr govt assistance to date; 90.02% + 7.88% government, ~2% float; m-cap ₹21,921 Cr = 11.5× book at a 52-week low [V].
- Question: what is ITI worth ex-land and ex-float technicals?

### B4. "BharatNet's third act": ₹1.39 lakh Cr, 16 packages, 10-year O&M
- Data: ABP approval Aug-2023, 2.64 lakh GPs; Phase I+II 6.95 lakh km OFC / 2.15 lakh GPs (Jun-26); winners and L1s; Tejas router 7/12; only ~45% of BharatNet FTTH connections active; state-led models [V-snip].

## C. The REVENUE / PROFIT EQUATION

**Fibre & cable maker:**
Revenue = Σ (fkm sold by product × realisation per fkm) + connectivity attach (× multiple of fkm value) ; fkm sold = capacity × utilisation.
EBITDA = Revenue − (Ge/He/SiCl₄/polymer cost per fkm × fkm) − power − freight − people − SG&A.
PAT = EBITDA − depreciation (heavy) − interest (leverage) − tax.

**C.1 Worked example — HFCL cable at the new capacity [E composite]**
- Cable capacity 62 mn fkm × 85% utilisation = 52.7 mn fkm.
- Blended realisation $20/fkm (export DC-heavy mix) × ₹94.9 = ₹1,898/fkm → **revenue ₹10,000 Cr**.
- Materials at 50% (STL Q1 basis) = ₹5,000 Cr; other opex 25% = ₹2,500 Cr → **EBITDA ₹2,500 Cr (25%)** (≈ HFCL Q2 FY27 margin).
- Depreciation ~₹350 Cr (FY26 ₹157 Cr + ₹1,800 Cr capex at ~10%) and interest ~₹250 Cr → PBT ~₹1,900 Cr; tax 25% → **PAT ~₹1,425 Cr** [E].
- Downside: realisation back to $8/fkm (2024-like) → revenue ₹4,000 Cr; EBITDA ~10–12% → PAT ~₹100–200 Cr [E].

**C.2 Worked example — STL quarter, Q1 FY27 actual [V Arihant]**
- Revenue ₹1,910 Cr = Optical Networking ₹1,842 Cr + Digital ₹72 Cr − elimination ₹4 Cr.
- Gross profit ₹947 Cr (49.6%); employees ₹195 Cr; other ₹367 Cr → EBITDA ₹385 Cr (20.2%); depreciation ₹85 Cr; interest ₹55 Cr; other income ₹12 Cr → PBT ₹257 Cr; tax ₹60 Cr → PAT ₹197 Cr.
- If Arihant's $23/fkm realisation applied to Optical Networking revenue: ₹1,842 Cr ÷ (₹23 × ~₹86/$ then) ≈ **~9.3 mn fkm in the quarter (~37 mn fkm annualised)** [E; FLAG — includes connectivity revenue, so true fkm lower].

**Equipment designer (Tejas):**
Revenue = Σ (sites × equipment value per site) [RAN] + optical/access/IP orders; EBITDA = gross margin × revenue − R&D (net of capitalisation) − SG&A.
**C.3 Worked example — the BSNL expansion LoI [E]:** 18,685 sites × ₹8.2 lakh = ₹1,537 Cr. At a campaign gross margin ~25–30% → gross profit ₹385–460 Cr, i.e. ~2 quarters of Tejas's current fixed-cost gap (~₹200–250 Cr/quarter net loss) [E].

**Government EPC (ITI):**
Revenue = milestone billing; Profit ≈ (contract value − bought-in − sub-contract − LDs) − overhead − interest on the cash gap.
**C.4 Worked example — a ₹1,000 Cr BharatNet package [E composite]:** bought-in OFC/ducts/routers ₹550 Cr; civil/sub-contract ₹300 Cr; project overhead ₹80 Cr → gross ₹70 Cr (7%); interest on ~₹400 Cr of WC for 18 months at 10% → ₹60 Cr → ~₹10 Cr (1%) before corporate overhead. Delay of 6 months wipes it out [E].

**C.5 Company reconciliations [E]**
- HFCL Q2 FY27: segments ₹2,322 + ₹136 + ₹55 ≈ ₹2,513 Cr + other/unallocated ~₹29 Cr = ₹2,542 Cr [V-snip; E].
- ITI FY26: OP ₹64 + other income incl. exceptional ₹503 − interest ₹217 − dep ₹56 = ₹293 Cr [V screener].

## D. Proposed 6-cell stat strip (₹ only)
1. **₹1,09,220 Cr** — combined m-cap of the four (22-Oct-2026) [V screener sum].
2. **₹16,692 Cr** — combined TTM revenue (FY26 ₹12,981 Cr) [V screener sum].
3. **₹63,727 Cr** — combined order book (HFCL ₹28,911 Sep-26 + STL ₹18,618 Jun-26 + ITI ₹13,883 Jun-26 + Tejas ₹2,315 Sep-26) [V/V-snip; E sum, mixed dates].
4. **577 mn fkm** — global fibre demand 2026; **180 mn fkm** short (TrendForce) [V] — (if strictly ₹ only, use "2.8–5× — 2026 fibre price vs 2025").
5. **₹1,39,579 Cr** — Amended BharatNet outlay (2.64 lakh GPs) [V-snip].
6. **97,213** — BSNL indigenous 4G sites on air (31-Jul-2026) [V-snip].

## E. Chart-ready datasets

**E1. Revenue by company, FY22–FY26 (₹ Cr, screener consolidated) [V]**
HFCL: 4,727 / 4,743 / 4,465 / 4,065 / 4,949 · ITI: 1,861 / 1,395 / 1,264 / 3,616 / 2,184 · Tejas: 551 / 920 / 2,471 / 8,923 / 1,103 · STL: 5,437 / 6,925 / 4,083 / 3,996 / 4,745.

**E2. PAT by company, FY22–FY26 (₹ Cr) [V]**
HFCL: 326 / 318 / 338 / 173 / 329 · ITI: 120 / −360 / −569 / −215 / 293 · Tejas: −63 / −36 / 63 / 447 / −909 · STL: 45 / 127 / −57 / −123 / 56.

**E3. Quarterly revenue, Sep-24 → Sep-26 (₹ Cr) [V screener]**
| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|---|---|---|---|---|
| HFCL | 1,094 | 1,012 | 801 | 871 | 1,043 | 1,211 | 1,824 | 1,915 | 2,542 |
| ITI | 1,016 | 1,035 | 1,046 | 498 | 543 | 515 | 628 | 425 | — |
| Tejas | 2,811 | 2,642 | 1,907 | 202 | 262 | 307 | 333 | 402 | 406 |
| STL | 1,074 | 998 | 1,052 | 1,019 | 1,034 | 1,257 | 1,441 | 1,910 | — (23-Oct) |

**E4. Quarterly OPM % (screener) [V]**
HFCL: 14 / 15 / −4.6 / 3.3 / 18 / 19 / 17 / 22 / 25 · ITI: −0.9 / −1.0 / −2.7 / −1.5 / −0.2 / 4.9 / 4.3 / 0.4 · Tejas: 19 / 14 / 6 / −67 / −112 / −44 / −36 / −25 / −26 · STL: 11 / 11 / 12 / 13 / 12 / 10 / 14 / 20 (Sep-24 → latest).

**E5. Order books (₹ Cr) [V/V-snip]**
HFCL: Mar-26 21,206 → Jun-26 26,665 → Sep-26 28,911 · Tejas: Mar-25 ~1,016 [primer derived] → Mar-26 1,514 → Jun-26 1,529 → Sep-26 2,315 · STL: Mar-26 7,309 → Jun-26 18,618 · ITI: Mar-25 ~16,180 [primer] → Mar-26 18,637 → Jun-26 13,883.

**E6. Global fibre 2026 (TrendForce) [V]:** demand 577 mn fkm; shortfall 180 mn fkm; utilisation 92%; inventory 4 months (2024) → 1 month (2026); AI DC share 18–20% (2026) → 30–35% (2027); price multiple vs 2025: BIF >5×, telecom 3.7×, AI backbone 2.8×.

**E7. China fibre price points [V-snip]:** G.657.A2 glut ~¥32/core-km (2024, primer); G.652.D bare +80% Nov-25→Jan-26 (CRU); ~¥83.4/fkm Mar-26; ¥81.9 May-26; Russia wholesale ¥16 (early 2025) → ¥40 (Jan-26).

**E8. Shareholding Sep-2026 (%) [V screener]:** HFCL promoter 28.29 / FII 17.24 / DII 10.39 / public 44.06 · ITI 90.02 / 0.02 / 0.07 / govt 7.88 / public 2.01 · Tejas 53.28 / 6.63 / 4.00 / 35.98 · STL 42.29 / 17.76 / 13.73 / 26.21.

**E9. HFCL promoter stake trend (%) [V]:** Dec-23 37.84 → Sep-24 36.24 → Mar-25 34.37 → Sep-25 30.02 → Dec-25 onward 28.29.

**E10. Debtor days FY26 [V]:** STL 82 · HFCL 163 · ITI 486 · Tejas 1,077.

**E11. BSNL indigenous 4G sites [V-snip]:** Q3 FY25 >86,000 deployed (Tejas) → Jan-26 >97,000 towers operational → Mar-26 >96,000 live (PIB) → 31-Jul-26 98,557 installed / 97,213 on air.

**E12. EU ADD on Indian OFC (Reg 2024/3014) [V-snip]:** HFCL/HTL 0% · Birla/Universal/Vindhya 6.9% · other cooperating 9.0% · STL 11.4% · all others 11.4%.

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Good | Average | Weak | Members now |
|---|---|---|---|---|
| Book-to-bill (OB/TTM rev) | >3× with <30% single-customer | 1.5–3× | <1.5× or >70% one customer | HFCL 3.9×; STL 3.3×; ITI 6.6× (quality?); Tejas 1.6× (96% India) |
| EBITDA margin (fibre/cable) | >20% | 12–18% | <10% | HFCL 25%, STL 20% (boom) |
| EBITDA margin (equipment) | >15% | 8–15% | <5% | Tejas −26% |
| EBITDA margin (EPC) | >8% | 3–8% | <3% | ITI ~0–3%; HFCL turnkey negative |
| Capacity utilisation (fibre) | >85% | 70–85% | <65% | Global 92% (2026) |
| Realisation (cable, $/fkm) | >$20 | $10–20 | <$8 | Arihant scenario $20–27 |
| Connectivity attach rate (STL) | >25% | 15–25% | <15% | 16% (Q1 FY27) |
| Debtor days | <90 | 90–180 | >180 | STL 82; HFCL 163; ITI 486; Tejas 1,077 |
| CFO/EBITDA | >80% | 50–80% | <50% | STL 102%; ITI 70%; HFCL −44% |
| Net debt/EBITDA | <1× | 1–2.5× | >3× | STL net cash; HFCL ~1.1× TTM; ITI ~13×; Tejas n.m. |
| ROCE | >18% | 10–18% | <10% | HFCL 11; STL 8; ITI 2; Tejas −15 |
| Export share | >40% (diversified) | 15–40% | <15% (domestic-govt-dependent) | HFCL 55.5%; STL ~78% |
| R&D/revenue (equipment) | 8–15% sustained | — | >30% (sub-scale) or <5% | Tejas: R&D bill ≈ >50% of FY26 revenue [E] |
| Promoter pledge | 0% | <10% | >25% | HFCL ~1% [primer]; others n/a |

## G. Timeline (year: event)
- 1948: ITI founded in Bengaluru [primer].
- 1987: HFCL founded by Mahendra Nahata [primer].
- 2000: Tejas Networks founded; Sterlite Optical/STL demerged from Sterlite Industries (2000–01) [primer; V screener].
- 1999–2001: HFCL in the Ketan Parekh "K-10" bubble and crash [primer].
- 2004: ITI referred to BIFR [K]. 2014: CCEA revival package for ITI (~₹4,157 Cr) [K].
- 2011–2017: BharatNet Phase I (NOFN) [K]; 2017: Tejas IPO [primer].
- 2016–2019: Jio + BharatNet II fibre boom; STL FY19 OPM 22% [V].
- 2019: BSNL revival package (₹69,000 Cr) [K].
- Feb-2021: Telecom PLI notified [K]. Mar–Jun 2021: Trusted Source licence amendment [K].
- 2021: Tata (Panatone) acquires control of Tejas [primer].
- Aug-2022: 5G spectrum auction (~₹1.5 lakh Cr) [K].
- May-2023: BSNL 4G to TCS consortium; Jun-2023 Tejas APO ₹7,492 Cr [V-snip].
- 4-Aug-2023: Amended BharatNet approved (₹1,39,579 Cr) [V-snip].
- 16-Nov-2023: EU opens ADD case on Indian OFC [V-snip].
- FY24–FY25: global fibre glut; China Mobile tender −35% [primer].
- 13-Dec-2024: EU definitive ADD (STL 11.4%, HFCL 0%) [V-snip].
- 14-Feb-2025 / 31-Mar-2025: STL Global Services demerger sanctioned / effective [V-snip].
- May-2025: Tejas completes BSNL APO supply; TCS add-on APO ₹2,903 Cr [V-snip].
- 10-Jun-2025: EU CVD on Indian OFC [V-snip].
- FY25: Tejas revenue ₹8,923 Cr peak [V].
- Sep-2025: BSNL indigenous 4G launched nationally (~97,500 sites) [K].
- Nov-2025 → Jan-2026: China bare-fibre prices +80% (CRU) [V-snip].
- Jan-2026: STL $1.11 bn hyperscaler PAL; Meta–Corning $6 bn [V; V-snip].
- 20-Feb-2026: SCOTUS strikes down IEEPA tariffs [prompt]. 28-Feb-2026: West Asia war begins [prompt].
- 28-May-2026: ITI FY26 results with auditors' disclaimer of opinion [V].
- Jul-2026: ITI completes ₹914 Cr land sale, repays ₹903 Cr debt; ITI wins ₹856 Cr BSNL 4G expansion [V-snip]. STL QIP ₹1,500 Cr; net cash [V].
- 24-Jul-2026: Sec 122 tariffs lapse; 10% Sec 301 on India [prompt].
- Aug-2026: Tejas ₹1,537 Cr TCS LoI (18,685 BSNL sites) [V-snip].
- Sep-2026: Verizon–Corning 129 mn fkm deal [V TrendForce].
- 1-Oct-2026: STL subsidiary $1.2 bn LTSA to Dec-2030 [V].
- 7-Oct-2026: RBI repo to 5.50% [prompt].
- 16-Oct-2026: Tejas Q2 (OB ₹2,315 Cr) [V]. 19-Oct-2026: HFCL Q2 (₹2,542 Cr revenue; OB ₹28,911 Cr) [V]. 19-Oct-2026: TrendForce: shortage to 2028 [V].
- 23-Oct-2026: STL Q2 results (pending).

## H. Figures I could not source well (and conflicts)
1. **India telecom equipment import bill FY26** (HS 8517, 8544 70, 9001 10) — only FY24 composite numbers (₹1.46 lakh Cr imports) with a conflicting DoT series; no HS-level FY26 data [gap].
2. **India telecom equipment market size (₹/USD)** — not found.
3. **PLI disbursals for FY26 and FY27**; reconciliation of the ₹12,195 Cr outlay [K] vs "₹4,115 Cr total incentive" [V-snip].
4. **STL current fibre/cable capacity (mn fkm) and utilisation** — primer "~50 mn fkm" unverified; older 50/35 split.
5. **HFCL realisation per fkm, HFCL US share of revenue, HFCL net debt (company basis)**.
6. **BharatNet ABP package-wise award list (all 16) with values and winners**; USOF page returned 503 [gap]. HFCL's UP East/West award status (L1 vs signed) unconfirmed.
7. **US anti-dumping/CVD on Indian OFC** — none found; STL US plant capacity not found.
8. **EU CVD rates (Reg 2025/1135) by company** — page did not render.
9. **BSNL 5G upgrade order** — none confirmed; BSNL's FY26 receivables owed to Tejas/TCS/ITI — not found.
10. **Jio/Airtel FY26 capex** — not fetched [K only].
11. **Tejas company-basis net debt at Sep-26, EBITDA, gross margin, segment mix (wireless vs wireline)** — Q2 FY27 presentation on NSE not fetched (NSE blocked).
12. **ITI order-book drop (₹18,637 Cr Mar-26 → ₹13,883 Cr Jun-26)** — unexplained; **ITI's "Government 7.88%" holder** — identity not found; Mini-Ratna status — primer claims it; unverified (and doubtful for a loss-maker) [K].
13. **YOFC/Fujikura 2026 financials** — not found.
14. **HFCL Q1 FY27 board date** — inferred from press (~23-Jul).
15. **Conflicts:** HFCL Q2 PAT ₹394.22 Cr (company) vs ₹362.92 Cr (Univest; basis unknown); STL Q1 EBITDA ₹385 Cr (Arihant/screener) vs ₹397 Cr (DSIJ); STL $1.11 bn PAL at ₹9,271 Cr vs primer "~₹10,000 Cr"; ITI FY25 PAT −₹215 Cr (screener) vs −₹233 Cr (primer); ITI land sale ₹914.31 Cr vs ₹832.19 Cr "sale of land and buildings" in exceptional items (gain vs proceeds?).

---

# PART 2 — COMPANY FACT PACKS (4 members)

Basis for every standardised figure: **screener.in consolidated pages fetched by curl on 22-Oct-2026 (~3:00 pm IST)** [V screener 22-Oct-26] unless tagged otherwise. "OP" = screener operating profit (EBITDA proxy, excludes other income). Net debt (screener basis) = borrowings − investments (cash and bank balances are not separately shown on the summary page, so this **overstates** net debt for cash-rich balance sheets). Company net debt shown where sourced.

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 22-Oct-26)

| Company | NSE | Year | Revenue | YoY % | OP | OPM % | PAT | ROCE % (FY26) | ROE % (TTM, screener) | Net debt (screener) | Net debt (company) | M-cap | P/E (TTM) | P/B | EV/EBITDA (FY26 OP) | EV/EBITDA (TTM OP) | Order book | Debtor days | Export share |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HFCL | HFCL | FY26 | 4,949 | +21.7 | 764 | 15.4 | 329 | 11 | 6.98 | 1,761 (Mar-26); 1,677 (Sep-26) | n/a | 38,518 | 44.4 | 6.8 | 52.7× | 25.4× | 28,911 (Sep-26) | 163 | 55.5% (Q1 FY27) |
| ITI | ITI | FY26 | 2,184 | −39.6 | 64 | 2.9 | 293 (land gain; ex-land ≈ −540 [E]) | 2 | −8.86 | 711 (Mar-26); ~0 after Jul-26 repayment [E] | n/a | 21,921 | n.m. | 11.5 | 354× | 427× | 13,883 (Jun-26) | 486 | ~0% |
| Tejas | TEJASNET | FY26 | 1,103 | −87.6 | −682 | −61.8 | −909 | −15 | −26.8 | 3,812 (Mar-26); 4,666 (Sep-26) | 3,531 (Mar-26) | 7,582 | n.m. | 3.0 | n.m. | n.m. | 2,315 (Sep-26) | 1,077 | small (OB 4% intl) |
| STL | STLTECH | FY26 | 4,745 | +18.7 | 569 | 12.0 | 56 | 8 | 1.24 | 1,475 (Mar-26) | 1,128 (Mar-26); **net cash 483 (Jun-26)** | 41,199 | 174 | 17.2 | 75.0× | 51.5× | 18,618 (Jun-26) | 82 | ~78% [E] (NA 54%, Europe 22%) |

- P/B = price ÷ screener book value per share (HFCL 252/36.9; ITI 228/19.8; Tejas 426/142; STL 801/46.5). STL's BV is likely pre-QIP — post-QIP P/B is lower (~13–14×) [E].
- EV uses screener-basis net debt at Mar-26 (except where noted); for STL the company's Jun-26 net cash would cut EV by ~₹1,960 Cr (to ~₹40,700 Cr; EV/TTM OP ~49×) [E].
- Dividend yield: HFCL 0.08%; others 0% [V screener].

---

## 2.1 HFCL Ltd (HFCL · 500183) — India's #1 OFC maker turned AI-fibre exporter, plus telecom products, EPC and defence

**Full record (₹ Cr, screener consolidated) [V]**

| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM (Sep-26) |
|---|---|---|---|---|---|---|
| Revenue | 4,727 | 4,743 | 4,465 | 4,065 | 4,949 | 7,492 |
| OP | 650 | 619 | 582 | 449 | 764 | 1,586 |
| OPM % | 14 | 13 | 13 | 11 | 15 | 21 |
| Other income | 37 | 47 | 102 | 58 | 63 | 97 |
| Interest | 166 | 152 | 147 | 185 | 242 | 253 |
| Depreciation | 78 | 83 | 82 | 106 | 157 | 194 |
| PAT | 326 | 318 | 338 | 173 | 329 | 927 |
| EPS (₹) | 2.27 | 2.18 | 2.29 | 1.23 | 2.04 | 5.67 |
| ROCE % | 19 | 15 | 13 | 8 | 11 | 10.8 (top ratio) |
| Borrowings (yr-end) | 783 | 936 | 991 | 1,522 | 1,896 | 1,869 (Sep-26) |
| Investments | 55 | 70 | 194 | 158 | 135 | 192 (Sep-26) |
| CFO | 205 | 235 | −45 | 396 | −378 | H1 FY27 140 [V-snip] |
| Debtor / inventory / WC days | 146/98/85 | 145/113/124 | 181/135/163 | 170/145/179 | 163/191/208 | — |

**Last 8+ quarters (₹ Cr) [V screener]**

| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | 1,094 | 1,012 | 801 | 871 | 1,043 | 1,211 | 1,824 | 1,915 | 2,542 |
| OP | 158 | 152 | −37 | 28 | 190 | 228 | 314 | 414 | 630 |
| OPM % | 14 | 15 | −4.6 | 3.3 | 18 | 19 | 17 | 22 | 25 |
| PAT | 73 | 73 | −83 | −29 | 72 | 102 | 184 | 246 | 394 |

**Q1 FY27 (Jun-26)** [V-snip angelone; V screener]: revenue ₹1,914.98 Cr (+119.85%); EBITDA margin 23.25% (4.96%); PAT ₹245.64 Cr (vs −₹29.30 Cr); standalone PAT ₹179.21 Cr; **exports ₹1,063.3 Cr = 55.5%** (₹209.7 Cr / 24.1%); OB ₹26,665 Cr; FY27 growth guide 40%; ₹215 Cr AI-DC connectivity plant; ₹522.73 Cr export OF order (execution Jan-2027).
**Q2 FY27 (Sep-26), board 19-Oct-2026** [V screener announcement; V-snip investywise/niftytrader]: revenue **₹2,541.79 Cr (+143.6% YoY, +32.7% QoQ)**; EBITDA **₹658 Cr (25.89%)**; PAT **₹394.22 Cr (+448%)**; H1 revenue ₹4,456.77 Cr, PBT ₹870.12 Cr, PAT ₹639.86 Cr.
- Segments Q2 FY27 (vs Q2 FY26): **Telecom Products ₹2,321.98 Cr (₹490.10), PBIT ₹716.24 Cr (₹122.54)**; **Turnkey Contracts & Services ₹136.07 Cr (₹506.77), PBIT −₹122.58 Cr**; **Defence Products & Services ₹54.94 Cr (₹29.73)**.
- **Order book ₹28,911 Cr**: OFC/DCI 64%; export 57%; product ~₹19,751 Cr; O&M ~₹5,070 Cr; network ~₹4,090 Cr; "six to seven years or more of revenue visibility".
- **Guidance**: FY27 revenue growth **≥80%** (≥₹8,909 Cr); ₹10,000 Cr revenue by FY29 (possibly earlier); defence & aerospace ~₹500 Cr FY27 "on track".
- **Capex ~₹1,800 Cr**: optical fibre 28 → 43.1 mn fkm/yr; OFC 39 → 62 mn fkm/yr; preform 600 tpa; completion into 2028.
- **Working capital**: receivables ₹2,630.03 Cr (Sep-26) vs ₹2,212.18 Cr (Mar-26); inventory ₹1,543.98 Cr vs ₹1,415.99 Cr; H1 CFO ₹139.77 Cr (H1 FY26 ₹81.60 Cr).
- **Funding**: ₹550 Cr QIP + ₹555 Cr warrants; ₹90 Cr utilisation delayed to 31-Dec-2026 [V screener].

**Native KPIs**: OB ₹28,911 Cr (3.9× TTM revenue); export share 55.5% (Q1 FY27), 41% (FY26) [primer]; FY26 product mix ~59% (screener key points) / ~62% (primer); fibre 28 mn fkm, cable 39 mn fkm (current), preform none; defence export-oriented book ~US$214 mn (FY26) [primer]; EU ADD 0% [V-snip].

**Ownership (Sep-26)** [V screener]: promoter **28.29%** (from 37.84% Dec-23; diluted by QIP/warrants/sales); **FII 17.24% (7.08% Mar-26 → 15.74% Jun-26 → 17.24%)**; DII 10.39%; public 44.06%; 7.65 lakh shareholders. Pledge ~1% (late 2025) [primer].

**Story bullets**
- **What defines it:** a cyclical OFC maker that has become a US/EU export story inside one year — export revenue up ~5× YoY in Q1 FY27; Telecom Products PBIT margin 30.8% in Q2.
- **Edge:** fibre + cable integration, EU duty exemption (0% vs STL 11.4%), breadth (products, FWA CPE, defence), capacity expansion to 43/62 mn fkm.
- **Risk:** receivables and inventory rising faster than cash (FY26 CFO −₹378 Cr; FY26 WC days 208); turnkey segment losing money; promoter stake down to 28%; a fibre-price reversal would hit a business priced at 44× TTM.
- **What changed in 2026:** order book +36% in two quarters (₹21,206 → ₹28,911 Cr); FY27 guide doubled (40% → ≥80%); FIIs up 10 points.

**Sources**: screener https://www.screener.in/company/HFCL/consolidated/ ; investywise ?p=121056 ; niftytrader ?p=32366 ; angelone Q1 FY27 ; primers/hfcl.html.

---

## 2.2 ITI Ltd (ITI · 523610) — government-owned telecom manufacturer and BharatNet/BSNL/defence contractor

**Full record (₹ Cr, screener consolidated) [V]**

| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|---|---|
| Revenue | 1,861 | 1,395 | 1,264 | 3,616 | 2,184 | 2,111 |
| OP | 107 | −154 | −318 | −60 | 64 | 53 |
| OPM % | 6 | −11 | −25 | −1.7 | 2.9 | 2.5 |
| Other income (incl. exceptional) | 255 | 53 | 43 | 138 | 503 | 502 |
| Interest | 192 | 210 | 241 | 224 | 217 | 176 |
| Depreciation | 50 | 50 | 53 | 69 | 56 | 54 |
| PAT | 120 | −360 | −569 | −215 | 293 | 324 |
| ROCE % | 8 | −4 | −8 | −1 | 2 | 2.1 (top) |
| Borrowings | 1,613 | 1,877 | 1,801 | 1,481 | 765 | — |
| Equity + reserves | 2,621 | 2,375 | 1,784 | 1,625 | 1,906 | — |
| CFO | −432 | −294 | 974 | −135 | −33 | — |
| Debtor / inventory / payable days | 536/118/1,067 | 635/261/1,242 | 709/215/1,286 | 403/41/514 | 486/254/2,670 | — |

**Last 8 quarters (₹ Cr) [V screener]**

| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,016 | 1,035 | 1,046 | 498 | 543 | 515 | 628 | 425 |
| OP | −9 | −11 | −28 | −8 | −1 | 25 | 27 | 2 |
| Other income | 14 | 38 | 98 | 9 | 13 | 8 | 472 | 8 |
| PAT | −70 | −49 | −4 | −64 | −54 | −25 | 436 | −32 |

**FY26 filing (board 28-May-2026)** [V FilingReader]: total income ₹2,237 Cr (₹3,702 Cr); consolidated PAT ₹292.83 Cr (loss ₹214.89 Cr); exceptional items ₹449.15 Cr net incl. ₹832.19 Cr sale of land and buildings; **auditor B.K. Ramadhyani & Co. LLP: disclaimer of opinion, 32 qualifications** (internal controls; premature recognition of the ₹914.31 Cr land sale; ITI "would have reported a loss" otherwise); order book ₹18,637 Cr; government financial assistance to date ₹3,084 Cr; revival plan continues.
**Q1 FY27 (board 13-Aug-2026)** [V indianmasterminds; V sahi]: revenue ₹425.03 Cr (₹498 Cr, −14.7%); total expenses ₹465.73 Cr; net loss ₹32.25 Cr (₹63.61 Cr); EPS −₹0.33; **order book ₹13,882.81 Cr**; auditors' **disclaimer of conclusion**; BSNL 4G expansion order ₹856.39 Cr for 7,613 sites (Jul-26); BharatNet III ~₹7,000 Cr in execution; **21-acre K.R. Puram land sold for ₹914.31 Cr to CGST Department, completed Jul-26; ₹902.81 Cr bank debt repaid**; India Ratings IND BB+/Positive on ₹2,900 Cr facilities. ASCON Phase-IV proof-of-concept due 31-Dec-2026 [V-snip quartr].
**Q2 FY27:** not announced [V screener]. AGM (76th) book closure 29-Oct to 4-Nov-2026 [V].

**Native KPIs**: order book ₹13,883 Cr (6.6× TTM revenue; composition per primer: ASCON IV ~₹8,280 Cr, BharatNet III ~₹6,956 Cr incl. NER-II ₹1,901 Cr, BSNL 4G RAN ~₹1,100 Cr + ₹1,142 Cr — **these sum to more than the Jun-26 book, so something has been removed** [E]); debtor days 486; payables 2,670 days; six plants (Bengaluru, Naini, Raebareli, Mankapur, Srinagar, Palakkad) [V screener].

**Ownership (Sep-26)** [V screener]: **promoter (President of India) 90.02%; "Government" 7.88%; FII 0.02%; DII 0.07%; public 2.01%**; 1.48 lakh shareholders (down from 2.06 lakh in Mar-25). **The primer's "institutions ~8%" is wrong — that 7.88% is a government holder.**

**Story bullets**
- **What defines it:** a state contractor whose only profitable year since FY22 came from selling land, with accounts the auditor would not opine on.
- **Edge:** PSU nomination and preference (BSNL 4G expansion, BharatNet, ASCON defence), national plants and land bank.
- **Risk:** governance/accounting (disclaimer), payment cycles, negative operating margins, order-book credibility (₹18.6k → ₹13.9k Cr in a quarter), an eventual government sell-down to meet MPS.
- **Valuation disconnect:** ₹21,921 Cr m-cap = ~10× TTM revenue and 11.5× book for a business with ~₹50–65 Cr of annual operating profit; the stock is at its 52-week low (₹228; high ₹340) [V screener]. With ~2% float the price is set by a tiny public float.
- **What changed in 2026:** land monetisation paid down ~₹900 Cr of debt (borrowings ₹1,481 Cr Mar-25 → ₹765 Cr Mar-26 → ~₹0 Jul-26 [E]), interest cost falling (Q1 FY27 ₹30 Cr vs ₹51 Cr) [V screener].

**Sources**: screener https://www.screener.in/company/ITI/consolidated/ ; FilingReader 29-May-2026 ; indianmasterminds Q1 FY27 ; sahi Q1 FY27 ; primers/iti-limited.html.

---

## 2.3 Tejas Networks (TEJASNET · 540595) — Tata-owned optical/access/RAN designer after the BSNL 4G campaign

**Full record (₹ Cr, screener consolidated) [V]**

| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM (Sep-26) |
|---|---|---|---|---|---|---|
| Revenue | 551 | 920 | 2,471 | 8,923 | 1,103 | 1,447 |
| OP | −80 | 14 | 266 | 1,258 | −682 | −459 |
| OPM % | −15 | 1.5 | 11 | 14 | −62 | −32 |
| Other income | 43 | 81 | 65 | 45 | 33 | 35 |
| Interest | 3 | 15 | 48 | 252 | 303 | 315 |
| Depreciation | 77 | 122 | 182 | 353 | 403 | 391 |
| PBT | −117 | −43 | 100 | 698 | −1,354 | −1,131 |
| PAT | −63 | −36 | 63 | 447 | −909 | −817 |
| ROCE % | −7 | −1 | 4 | 15 | −15 | −14.6 (top) |
| Borrowings | 20 | 50 | 1,884 | 3,407 | 4,177 | 4,970 (Sep-26) |
| Investments | 402 | 262 | 334 | 482 | 365 | 304 (Sep-26) |
| Equity + reserves | 1,930 | 2,973 | 3,150 | 3,847 | 2,931 | 2,527 (Sep-26) |
| CFO | −17 | −380 | −2,036 | −491 | 135 | — |
| Debtor / inventory days | 189/327 | 198/421 | 208/861 | 182/132 | 1,077/1,160 | — |

**Last 8+ quarters (₹ Cr) [V screener]**

| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | 2,811 | 2,642 | 1,907 | 202 | 262 | 307 | 333 | 402 | 406 |
| OP | 535 | 372 | 122 | −136 | −294 | −134 | −118 | −100 | −107 |
| Interest | 61 | 63 | 71 | 75 | 84 | 72 | 72 | 85 | 87 |
| PAT | 275 | 166 | −72 | −194 | −307 | −197 | −211 | −202 | −207 |

**Q1 FY27 (Jun-26)**: revenue ₹402 Cr, OP −₹100 Cr, PAT −₹202 Cr; order book ₹1,529 Cr [V screener; V-snip].
**Q2 FY27 (Sep-26), board 16-Oct-2026** [V screener; V-snip sahi/stockgro]: revenue **₹406 Cr** (₹262 Cr, +55%); net loss **₹207 Cr** (₹307 Cr); **order book ₹2,315 Cr** (+51% QoQ), **India 96%**; LoI for 18,000+ BSNL 4G sites (the ₹1,537 Cr TCS LoI for 18,685 sites of Aug-2026 [V-snip]).
**FY26 (company)** [primer]: gross debt ₹4,035 Cr, cash ₹505 Cr, **net debt ₹3,531 Cr**; order book ₹1,514 Cr (India 83%) [V-snip Q4 deck]; patents 676 filed / 371 granted; BharatNet router OEM 7 of 12 packages, 17,000+ routers shipped; first international 4G/5G wireless order; NEC massive-MIMO supply contract; Rakuten Symphony Open RAN partnership. PLI ₹189 Cr received Apr-2025 [V-snip].

**Native KPIs**: order book ₹2,315 Cr (1.6× TTM revenue; ~26% of FY25 revenue); non-India share of book 4%; debtor days 1,077, inventory days 1,160 (FY26); quarterly fixed-cost gap ~₹100 Cr OP loss + ~₹180 Cr D&A+interest [E]; BSNL sites: 1 lakh APO completed; 18,685 new.

**Ownership (Sep-26)** [V screener]: promoter (Panatone Finvest, Tata Sons subsidiary) **53.28%** (55.80% Dec-23; slow ESOP dilution); FII 6.63% (11.26% Dec-23); DII 4.00%; public 35.98%; 3.40 lakh shareholders.

**Story bullets**
- **What defines it:** the only listed Indian RAN+optical designer, now living through the gap after a one-customer campaign.
- **Edge:** owned IP (676 patents), a live 1-lakh-site national reference, Tata/TCS access, Trusted Source status.
- **Risk:** borrowings ₹4,970 Cr and rising while losses run ~₹200 Cr/quarter; equity down from ₹3,847 Cr (Mar-25) to ₹2,527 Cr (Sep-26) [V screener] — at this pace book value halves again in ~6 quarters [E]; refill depends on BSNL timing.
- **What changed in 2026:** BSNL expansion LoI (18,685 sites) lifted the book to ₹2,315 Cr; no 5G order; stock ₹426 vs 52-week range ₹294–645.

**Sources**: screener https://www.screener.in/company/TEJASNET/consolidated/ ; sahi Q2 FY27 ; stockgro ; sahi TCS LoI ; primers/tejas-networks.html.

---

## 2.4 Sterlite Technologies / STL (STLTECH · 532374) — integrated fibre, cable and connectivity; AI data-centre supplier

**Full record (₹ Cr, screener consolidated) [V]** (FY25 onward on a continuing basis after the Global Services demerger)

| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM (Jun-26) |
|---|---|---|---|---|---|---|
| Revenue | 5,437 | 6,925 | 4,083 | 3,996 | 4,745 | 5,642 |
| OP | 665 | 895 | 471 | 416 | 569 | 829 |
| OPM % | 12 | 13 | 12 | 10 | 12 | 15 |
| Other income | −22 | −64 | 74 | −15 | 75 | 72 |
| Interest | 238 | 311 | 293 | 241 | 224 | 229 |
| Depreciation | 308 | 309 | 314 | 316 | 313 | 321 |
| PAT | 45 | 127 | −57 | −123 | 56 | 243 |
| ROCE % | 8 | 11 | 3 | 3 | 8 | 7.65 (top) |
| Borrowings | 3,475 | 3,834 | 3,376 | 1,926 | 1,942 | (QIP repaid ~₹1,100 Cr) |
| Investments | 92 | 136 | 123 | 90 | 467 | — |
| CFO | 584 | 228 | 791 | 348 | 520 | — |
| Debtor / inventory / WC days | 115/121/−29 | 96/92/−46 | 143/178/−87 | 75/134/−63 | 82/139/−30 | — |

**Last 8+ quarters (₹ Cr) [V screener]**

| Qtr | Jun-24 | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | 872 | 1,074 | 998 | 1,052 | 1,019 | 1,034 | 1,257 | 1,441 | 1,910 |
| OP | 64 | 117 | 106 | 125 | 132 | 129 | 120 | 195 | 385 |
| OPM % | 7 | 11 | 11 | 12 | 13 | 12 | 10 | 14 | 20 |
| PAT | −48 | −14 | −24 | −40 | 10 | 4 | −17 | 59 | 197 |

**Q1 FY27 (Jun-26)** [V Arihant 27-Jul-2026]: revenue ₹1,910 Cr (+87.3% YoY, +32.5% QoQ); gross margin 49.6%; EBITDA ₹385 Cr (20.2%); PAT ₹197 Cr; **Optical Networking ₹1,842 Cr, EBIT 21.8%; Digital & Technology Solutions ₹72 Cr**; **order book ₹18,618 Cr; order intake ₹13,100 Cr** (incl. $1.1 bn hyperscaler PAL + multiple $100 mn IBR-cable orders); executable in Q2 ~₹2,228 Cr; **North America 54% of revenue** (39% FY26), Europe 22%, RoW 22%; data-centre revenue 21% → guided 50% in FY27; attach rate 16% → targets >20% Q2, 25% Q4 FY27; **FY27 EBITDA margin guide 23%**; ex-China OFC share 9%; 785+ patents; patent win vs Fujikura (Celesta); QIP ₹1,500 Cr (75% to debt); capex ₹500 Cr/yr × 3; **US$100 mn US connectivity facility** (5 years); germanium/helium supply diversification. Net cash **₹483 Cr at 30-Jun-2026** [V-snip DSIJ].
**1-Oct-2026**: subsidiary LTSA for optical connectivity ~**US$1.2 bn through Dec-2030** [V screener].
**Q2 FY27**: board **23-Oct-2026**, call same day [V screener].

**Native KPIs**: order book ₹18,618 Cr (3.3× TTM revenue; ~4× FY26); hyperscaler commitments ~$2.3 bn [E]; realisation scenario $20–27/fkm [V Arihant]; fibre capacity "~50 mn fkm" [primer; unverified]; EU ADD 11.4% (+ CVD) [V-snip]; Italy and US (South Carolina [K]) plants.

**Ownership (Sep-26)** [V screener]: promoter (Twin Star Overseas + group) **42.29%** (44.52% Jun-26; 53.99% Dec-23 → 44.18% Jun-24 after the 2024 QIP); **FII 17.76%** (4.75% Dec-23); **DII 13.73%** (1.96% Dec-23); public 26.21%. (Arihant shows FII 19.71%/DII 13.24%/promoter 42.29% "as on Jun-2026" — likely post-QIP; screener's Jun column shows 44.52% — FLAG minor.)

**Story bullets**
- **What defines it:** a leveraged fibre cyclical that deleveraged (net debt ₹1,128 Cr Mar-26 → net cash ₹483 Cr Jun-26) just as the AI shortage arrived.
- **Edge:** integrated preform-to-connectivity; ~9% ex-China share; US/Italy plants; hyperscaler PAL + LTSA; patents.
- **Risk:** 174× trailing P/E and ~17× book; NA 54% of revenue concentrates customer/tariff risk (Sec 301 10%); EU duties; Ge/He; capex re-leveraging; fibre-price reversal.
- **What changed in 2026:** stock ~9.5× off its low (₹84.6 → ₹801; high ₹1,054); FIIs/DIIs now ~31% combined; second hyperscaler deal; data-centre share heading to 50%.

**Sources**: screener https://www.screener.in/company/STLTECH/consolidated/ ; Arihant Q1 FY27 PDF ; DSIJ ; screener STLNETWORK ; primers/sterlite-technologies.html.

---

## 2.5 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
{
  "basis": "screener.in consolidated, fetched 2026-10-22 ~15:00 IST; OP = screener operating profit; PAT = reported; mcap on 2026-10-22",
  "fx_inr_per_usd": 94.9,
  "companies": [
    {"name": "HFCL Limited", "nse": "HFCL", "bse": "500183", "fy": "FY26",
     "revenue": 4949, "revenue_prev": 4065, "revenue_growth_pct": 21.7, "op": 764, "opm_pct": 15.4, "pat": 329,
     "revenue_fy22_26": [4727, 4743, 4465, 4065, 4949], "op_fy22_26": [650, 619, 582, 449, 764], "pat_fy22_26": [326, 318, 338, 173, 329],
     "roce_pct": 11, "roe_pct_ttm": 6.98, "borrowings": 1896, "investments": 135, "net_debt_screener": 1761, "net_debt_company": null,
     "mcap": 38518, "price": 252, "pe_ttm": 44.4, "pb": 6.83, "book_value_per_share": 36.9, "div_yield_pct": 0.08,
     "ev_ebitda_fy26": 52.7, "ev_ebitda_ttm": 25.4,
     "ttm_revenue": 7492, "ttm_op": 1586, "ttm_pat": 927,
     "q1fy27": {"revenue": 1915, "op": 414, "pat": 246, "board_date": "2026-07-22/23 (approx)"},
     "q2fy27": {"revenue": 2542, "op": 630, "ebitda_company": 658, "pat": 394, "board_date": "2026-10-19", "status": "reported"},
     "order_book": 28911, "order_book_date": "2026-09-30", "order_book_export_pct": 57, "order_book_ofc_dci_pct": 64,
     "export_share_pct": 55.5, "export_share_period": "Q1FY27",
     "fibre_capacity_mn_fkm": 28, "fibre_capacity_target_mn_fkm": 43.1, "cable_capacity_mn_fkm": 39, "cable_capacity_target_mn_fkm": 62, "preform_target_tpa": 600,
     "debtor_days_fy26": 163, "wc_days_fy26": 208,
     "shareholding_sep26": {"promoter": 28.29, "fii": 17.24, "dii": 10.39, "public": 44.06}},
    {"name": "ITI Limited", "nse": "ITI", "bse": "523610", "fy": "FY26",
     "revenue": 2184, "revenue_prev": 3616, "revenue_growth_pct": -39.6, "op": 64, "opm_pct": 2.9, "pat": 293, "pat_ex_land_gain_est": -540,
     "revenue_fy22_26": [1861, 1395, 1264, 3616, 2184], "op_fy22_26": [107, -154, -318, -60, 64], "pat_fy22_26": [120, -360, -569, -215, 293],
     "roce_pct": 2, "roe_pct_ttm": -8.86, "borrowings": 765, "investments": 54, "net_debt_screener": 711, "net_debt_company": null,
     "mcap": 21921, "price": 228, "pe_ttm": null, "pb": 11.5, "book_value_per_share": 19.8, "div_yield_pct": 0,
     "ev_ebitda_fy26": 353.6, "ev_ebitda_ttm": 427.0,
     "ttm_revenue": 2111, "ttm_op": 53, "ttm_pat": 324,
     "q1fy27": {"revenue": 425, "op": 2, "pat": -32, "board_date": "2026-08-13"},
     "q2fy27": {"status": "not announced as of 2026-10-22"},
     "order_book": 13883, "order_book_date": "2026-06-30", "order_book_mar26": 18637,
     "auditor_opinion_fy26": "disclaimer of opinion (32 qualifications)", "land_sale_jul26": 914.31, "debt_repaid_jul26": 902.81, "govt_assistance_to_date": 3084,
     "debtor_days_fy26": 486, "payable_days_fy26": 2670,
     "shareholding_sep26": {"promoter": 90.02, "government_other": 7.88, "fii": 0.02, "dii": 0.07, "public": 2.01}},
    {"name": "Tejas Networks Limited", "nse": "TEJASNET", "bse": "540595", "fy": "FY26",
     "revenue": 1103, "revenue_prev": 8923, "revenue_growth_pct": -87.6, "op": -682, "opm_pct": -61.8, "pat": -909,
     "revenue_fy22_26": [551, 920, 2471, 8923, 1103], "op_fy22_26": [-80, 14, 266, 1258, -682], "pat_fy22_26": [-63, -36, 63, 447, -909],
     "roce_pct": -15, "roe_pct_ttm": -26.8, "borrowings": 4177, "borrowings_sep26": 4970, "investments": 365, "net_debt_screener": 3812, "net_debt_company": 3531,
     "mcap": 7582, "price": 426, "pe_ttm": null, "pb": 3.0, "book_value_per_share": 142, "div_yield_pct": 0,
     "ev_ebitda_fy26": null, "ev_ebitda_ttm": null,
     "ttm_revenue": 1447, "ttm_op": -459, "ttm_pat": -817,
     "q1fy27": {"revenue": 402, "op": -100, "pat": -202, "board_date": null},
     "q2fy27": {"revenue": 406, "op": -107, "pat": -207, "board_date": "2026-10-16", "status": "reported"},
     "order_book": 2315, "order_book_date": "2026-09-30", "order_book_india_pct": 96,
     "patents_filed": 676, "patents_granted": 371,
     "debtor_days_fy26": 1077, "inventory_days_fy26": 1160,
     "shareholding_sep26": {"promoter": 53.28, "fii": 6.63, "dii": 4.00, "public": 35.98}},
    {"name": "Sterlite Technologies Limited", "nse": "STLTECH", "bse": "532374", "fy": "FY26",
     "revenue": 4745, "revenue_prev": 3996, "revenue_growth_pct": 18.7, "op": 569, "opm_pct": 12.0, "pat": 56,
     "revenue_fy22_26": [5437, 6925, 4083, 3996, 4745], "op_fy22_26": [665, 895, 471, 416, 569], "pat_fy22_26": [45, 127, -57, -123, 56],
     "roce_pct": 8, "roe_pct_ttm": 1.24, "borrowings": 1942, "investments": 467, "net_debt_screener": 1475, "net_debt_company": 1128, "net_cash_company_jun26": 483,
     "mcap": 41199, "price": 801, "pe_ttm": 174, "pb": 17.2, "book_value_per_share": 46.5, "div_yield_pct": 0,
     "ev_ebitda_fy26": 75.0, "ev_ebitda_ttm": 51.5,
     "ttm_revenue": 5642, "ttm_op": 829, "ttm_pat": 243,
     "q1fy27": {"revenue": 1910, "op": 385, "pat": 197, "board_date": "2026-07-27"},
     "q2fy27": {"status": "board 2026-10-23"},
     "order_book": 18618, "order_book_date": "2026-06-30", "order_intake_q1fy27": 13100,
     "north_america_rev_share_pct_q1fy27": 54, "europe_rev_share_pct_q1fy27": 22, "dc_rev_share_pct_q1fy27": 21,
     "fibre_capacity_mn_fkm": null, "realisation_usd_per_fkm_scenario": [20, 27],
     "debtor_days_fy26": 82, "wc_days_fy26": -30,
     "shareholding_sep26": {"promoter": 42.29, "fii": 17.76, "dii": 13.73, "public": 26.21}}
  ]
}
```

## 2.6 Conflicts and gaps (company level)
- **HFCL:** EBITDA basis (company 16.7% vs screener 15.4% FY26; Q2 25.9% vs 25%); Q2 PAT ₹394.22 Cr vs Univest ₹362.92 Cr; promoter 28.29% (primer 28.3% — same); m-cap ₹33,000 Cr (primer, Jul) → ₹38,518 Cr; P/E ~100× (primer, on FY26) vs 44.4× (TTM). Company net debt not found.
- **ITI:** FY25 PAT −₹215 Cr (screener) vs −₹233 Cr (primer); order book ₹18,637 → ₹13,883 Cr unexplained; land proceeds ₹914.31 Cr vs ₹832.19 Cr exceptional line; "Government 7.88%" holder identity; Q2 date.
- **Tejas:** FY23/FY24 primer figures wrong (see trap 6); net debt company ₹3,531 Cr vs screener ₹3,812 Cr (Mar-26); Sep-26 company net debt not found; promoter "~55.6% Mar-25 / ~53%" (primer) vs screener 53.83% (Mar-25) / 53.28% (Sep-26).
- **STL:** demerger description (primer wrong); PAL value ₹9,271 Cr vs primer "~₹10,000 Cr"; Q1 EBITDA ₹385 vs ₹397 Cr; promoter Jun-26 44.52% (screener) vs 42.29% (Arihant); fibre capacity unverified.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (all four; ₹ Cr; screener consolidated 22-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP | OPM % | PAT (reported) | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | Q2 FY27 rev / PAT | TTM rev | TTM PAT | M-cap | % of group m-cap | % of group FY26 rev | P/E (TTM) | P/B | EV/TTM OP | Order book (date) | Native KPI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HFCL | 4,949 | +21.7 | 764 | 15.4 | 329 | 1,915 | +119.9 | 21.6 | 246 | 2,542 / 394 (19-Oct) | 7,492 | 927 | 38,518 | 35.3 | 38.1 | 44.4 | 6.8 | 25.4× | 28,911 (Sep-26) | Exports 55.5% (Q1); fibre 28 → 43.1 mn fkm |
| ITI | 2,184 | −39.6 | 64 | 2.9 | 293 (ex-land ≈ −540) | 425 | −14.7 | 0.5 | −32 | not announced | 2,111 | 324 | 21,921 | 20.1 | 16.8 | n.m. | 11.5 | n.m. (427×) | 13,883 (Jun-26) | Debtor days 486; disclaimer |
| Tejas | 1,103 | −87.6 | −682 | −61.8 | −909 | 402 | +99.0 | −24.9 | −202 | 406 / −207 (16-Oct) | 1,447 | −817 | 7,582 | 6.9 | 8.5 | n.m. | 3.0 | n.m. | 2,315 (Sep-26) | OB India 96%; debtor days 1,077 |
| STL | 4,745 | +18.7 | 569 | 12.0 | 56 | 1,910 | +87.4 | 20.2 | 197 | board 23-Oct | 5,642 | 243 | 41,199 | 37.7 | 36.6 | 174 | 17.2 | 51.5× | 18,618 (Jun-26) | NA 54% of rev; attach 16% |
| **Total (4)** | **12,981** | **−37.0** | **715** | **5.5** | **−231** | **4,652** | **+79.6** | **15.1** | **209** | (2 of 4 reported) | **16,692** | **677** | **1,09,220** | 100 | 100 | **161× (agg. m-cap ÷ agg. TTM PAT)** | **9.1× (on Mar-26 equity)** | **58× (agg.)** | **63,727 (mixed dates)** | |

Notes:
- TTM ends Sep-26 for HFCL and Tejas (Q2 reported) and Jun-26 for ITI and STL [V screener].
- ITI's FY26 and TTM PAT include the ~₹832 Cr land/building gain booked in FY26 Q4; ex-land ITI's TTM PAT is ≈ −₹508 Cr [E], making the group's TTM PAT ex-ITI-land ≈ −₹155 Cr [E].
- P/B for the total uses Mar-26 equity (HFCL 4,891; ITI 1,906; Tejas 2,931; STL 2,268 = ₹11,996 Cr) [E]; individual P/Bs are price ÷ screener BV per share (Tejas's BV ₹142 corresponds to Sep-26 equity ₹2,527 Cr).

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one basis: screener consolidated FY26 and FY25 (revenue, OP, reported PAT); Q1 FY27 vs Q1 FY26; TTM as shown; borrowings and investments at Mar-26; m-cap 22-Oct-26.** Ratios are ratios of the sums. Net debt = borrowings − investments (screener basis).

**(a) FY26 by subgroup [E]**

| Group | Members | FY26 rev | FY25 rev | YoY | OP FY26 | OPM FY26 | OPM FY25 | PAT FY26 (reported) | PAT FY25 | Net debt (Mar-26) | ND/OP | M-cap | M-cap ÷ TTM PAT | EV/TTM OP | EV/FY26 sales |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All four | 4 | 12,981 | 20,600 | −37.0% | 715 | 5.5% | 10.0% | −231 | 282 | 7,759 | 10.9× | 1,09,220 | 161× | 58.2× | 9.0× |
| **Private optical/networking players (ex-ITI)** | HFCL, Tejas, STL | 10,797 | 16,984 | −36.4% | 651 | 6.0% | 12.5% | −524 | 497 | 7,048 | 10.8× | 87,299 | 247× | 48.2× | 8.7× |
| **Fibre & cable makers** | HFCL, STL | 9,694 | 8,061 | **+20.3%** | 1,333 | 13.8% | 10.7% | 385 | 50 | 3,236 | 2.4× | 79,717 | 68× | 34.3× | 8.6× |
| Equipment / system integrators | Tejas, ITI | 3,287 | 12,539 | −73.8% | −618 | −18.8% | 9.6% | −616 | 232 | 4,523 | n.m. | 29,503 | n.m. | n.m. | 10.3× |
| Ex-Tejas (cliff removed) | HFCL, ITI, STL | 11,878 | 11,677 | +1.7% | 1,397 | 11.8% | 6.9% | 678 | −165 | 3,947 | 2.8× | 1,01,638 | 68× | 42.8× | 8.9× |

- The fibre pair is **74.7% of FY26 revenue and 73.0% of m-cap**; Tejas is 8.5% of revenue and 6.9% of m-cap; ITI is 16.8% of revenue but **20.1% of m-cap** on a ~2% float.
- **The "sector" FY26 number (−37%) is entirely Tejas's ₹7,820 Cr cliff**; ex-Tejas revenue grew +1.7% and OP +74% [E].

**(b) Q1 FY27 vs Q1 FY26 (quarterly) [E]**

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | OPM Q1 FY27 / Q1 FY26 | PAT Q1 FY27 | PAT Q1 FY26 |
|---|---|---|---|---|---|---|---|---|
| All four | 4,652 | 2,590 | +79.6% | 701 | 16 | 15.1% / 0.6% | 209 | −277 |
| Private three (ex-ITI) | 4,227 | 2,092 | +102.1% | 699 | 24 | 16.5% / 1.1% | 241 | −213 |
| **Fibre & cable pair** | 3,825 | 1,890 | **+102.4%** | 799 | 160 | **20.9% / 8.5%** | 443 | −19 |
| Equipment / SI pair | 827 | 700 | +18.1% | −98 | −144 | −11.9% / −20.6% | −234 | −258 |

**(c) Q2 FY27 — the two that have reported (HFCL + Tejas) [E]**
- Revenue ₹2,948 Cr vs ₹1,305 Cr (+126%); OP ₹523 Cr vs −₹104 Cr; PAT ₹187 Cr vs −₹235 Cr [V screener sums]. HFCL's PAT (₹394 Cr) is ~1.9× Tejas's loss (₹207 Cr).

**(d) TTM [E]**
- All four: revenue ₹16,692 Cr, OP ₹2,009 Cr (12.0%), PAT ₹677 Cr. Fibre pair: ₹13,134 Cr, OP ₹2,415 Cr (18.4%), PAT ₹1,170 Cr → **m-cap ÷ TTM PAT 68×; EV/TTM OP 34×**.

**(e) Balance sheet (screener, Mar-26) [E]**
- Borrowings: HFCL 1,896; ITI 765; Tejas 4,177; STL 1,942 → **₹8,780 Cr**. Investments: 135 / 54 / 365 / 467 → ₹1,021 Cr. **Screener net debt ₹7,759 Cr**, of which Tejas 49%.
- **Company/after-events basis [E]:** HFCL 1,761 (no company figure); ITI ~0 after the Jul-26 ₹903 Cr repayment; Tejas 3,531 (Mar-26; rising to ~4,666 screener basis by Sep-26); STL −483 (net cash, Jun-26) → **group ≈ ₹4,800 Cr at mid-2026**, ~2.4× TTM OP, ~73% at Tejas.
- Interest FY26: ₹986 Cr (HFCL 242, ITI 217, Tejas 303, STL 224) = 1.4× group FY26 OP [V screener sum].

**(f) Ownership (Sep-26, simple averages) [E]**
- Promoter average 53.5% (range 28.29% HFCL – 90.02% ITI; ex-ITI 41.3%). FII average 10.4% (ITI 0.02%; HFCL 17.24%; STL 17.76%; Tejas 6.63%). DII average 7.0%.
- Big 2026 shifts: FIIs into HFCL (+10.2 pts since Mar-26) and STL (+6.3 pts); Tejas FII down from 11.3% (Dec-23) to 6.6%.

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (22-Oct-26) | Use |
|---|---|---|---|---|
| HFCL | FY26 rev / EBITDA / PAT | 4,949 / ~826 (16.7%) / ~329 | 4,949 / OP 764 (15.4%) / 329 | Screener for tables; company EBITDA in prose with basis |
| HFCL | Order book | ~21,200 (Mar-26) | **28,911 (Sep-26)**; 26,665 (Jun-26) | Web |
| HFCL | Exports | 41% FY26 | **55.5% Q1 FY27** | Web |
| HFCL | M-cap / P/E | ~33,000 / ~100× (Jul) | **38,518 / 44.4× TTM** | Screener |
| HFCL | Gross debt | ~1,744 | 1,896 (Mar-26); 1,869 (Sep-26) | Screener |
| HFCL | FII / DII | ~7% / ~9% (Mar-26) | **17.24% / 10.39% (Sep-26)** | Screener |
| HFCL | Capacity | not given (preform ~$64 mn) | Fibre 28 → 43.1, cable 39 → 62 mn fkm; preform 600 tpa; capex ₹1,800 Cr | Web |
| HFCL | Q1/Q2 FY27, guidance | not covered | Q1 1,915/246; Q2 2,542/394; FY27 ≥+80% | Web |
| HFCL | Equity raises | not covered | ₹550 Cr QIP + ₹555 Cr warrants | Screener ann. |
| ITI | FY25 PAT | −233 | −215 | Screener |
| ITI | FY26 profit driver | "~₹503 Cr other income" | ₹832 Cr land & building gain (exceptional); **disclaimer of opinion, 32 qualifications** | Web (filing) |
| ITI | Order book | ~18,500 | 18,637 (Mar-26); **13,883 (Jun-26)** | Web; flag |
| ITI | Public float | "institutions ~8%, retail ~2%" | **Government 7.88%; FII+DII 0.09%; public 2.01%** | Screener |
| ITI | M-cap / price | ~28,000 / ~₹290 | **21,921 / ₹228 (52-wk low)** | Screener |
| ITI | Debt | ~765 | 765 (Mar-26); ₹903 Cr repaid Jul-26 | Web |
| ITI | ROCE | ~1.4% | 2% (FY26); 2.10% (top) | Screener |
| ITI | Q1 FY27 | not covered | 425 / −32; BSNL 4G ₹856 Cr (7,613 sites) | Web |
| ITI | Status labels | "Mini-Ratna"; BIFR "2013" | Unverified; BIFR reference 2004, revival package 2014 [K] | Flag |
| Tejas | FY23 / FY24 | ~1,097 / ~1,232 rev; PAT ~−344 / ~−63 | **920 / 2,471; PAT −36 / +63** | Screener |
| Tejas | Order book | 1,514 (Mar-26) | 1,529 (Jun-26); **2,315 (Sep-26)** | Web |
| Tejas | M-cap / price | ~9,800 / ₹564 (Jul) | **7,582 / ₹426** | Screener |
| Tejas | Promoter | ~53–55.6% | 53.28% | Screener |
| Tejas | Debt | gross 4,035 / net 3,531 | Screener borrowings 4,177 (Mar-26) → **4,970 (Sep-26)** | Both; flag rising |
| Tejas | BSNL APO | "~₹7,500 Cr (approx.)" | ₹7,492 Cr; supply completed May-2025 | Web |
| Tejas | Q1/Q2 FY27 | not covered | 402/−202; 406/−207; LoI 18,685 sites ₹1,537 Cr | Web |
| STL | Demerger | "STL Digital software/IT arm demerged into STL Networks/Invenia" | **Global Services Business (EPC/SI) demerged; STL Digital retained (Digital & Technology Solutions segment)** | Web |
| STL | FY26 rev / EBITDA / PAT | 4,745 / 628 (13.2%) / 56 | 4,745 / OP 569 (12.0%) / 56 | Screener for tables |
| STL | Order book | 7,309 (Mar-26) | **18,618 (Jun-26)** | Web |
| STL | Hyperscaler award | >$1.11 bn "~₹10,000 Cr" | $1.11 bn = ₹9,271 Cr (PAL) + **$1.2 bn LTSA (1-Oct-26)** | Web |
| STL | Q1 FY27 PAT | "~+₹200 Cr" | ₹197 Cr | Screener |
| STL | M-cap | ~28,990 (Jul) | **41,199** | Screener |
| STL | Promoter | ~44% | **42.29% (Sep-26)** | Screener |
| STL | Founding | "traces back to 1988" | Established Jul-2001 by demerger of Sterlite Industries' telecom division (screener About) | Screener |
| STL | Capacity | ~50 mn fkm | unverified | Flag |
| STL | Net debt | 1,128 (Mar-26) → ~0 | Net cash ₹483 Cr (Jun-26) after ₹1,500 Cr QIP | Web |

## 3.4 Primer issues (format as primer-issues.md)

### From Telecom Equipment research (2026-10-22, telecom-equipment-industry.md §3.4)

- **hfcl.html — Q1 and Q2 FY27 omitted (refreshed 9-Jul):** add Q1 FY27 (revenue ₹1,915 Cr, +120%; PAT ₹246 Cr; exports 55.5%) and Q2 FY27 (revenue ₹2,542 Cr, +144%; EBITDA ₹658 Cr, 25.9%; PAT ₹394 Cr; board 19-Oct-2026). Order book ₹21,200 Cr → **₹28,911 Cr** (64% OFC/DCI, 57% export; includes ~₹5,070 Cr O&M). FY27 guide **≥80%** growth; FY29 ₹10,000 Cr ambition.
- **hfcl.html — no capacity numbers:** add fibre 28 → 43.1 mn fkm, cable 39 → 62 mn fkm, preform 600 tpa, ₹1,800 Cr capex into 2028; ₹215 Cr AI-DC connectivity plant. The "~USD 64 mn preform" line should be reconciled with the 600 tpa plan.
- **hfcl.html — valuation and ownership stale:** m-cap ~₹33,000 Cr → **₹38,518 Cr**; P/E "~100×" (on FY26) → **44.4× TTM**; FII ~7% → **17.24%**, DII ~9% → 10.39% (Sep-26). Gross debt ₹1,744 Cr → screener ₹1,896 Cr (Mar-26).
- **hfcl.html — omissions:** the ₹550 Cr QIP + ₹555 Cr warrants (and the 37.8% → 28.3% promoter decline since Dec-2023, which the primer describes only as "~28%"); the **EU anti-dumping exemption** (HFCL/HTL 0% vs STL 11.4%) — a competitive advantage the primer misses; turnkey segment now loss-making (Q2 PBIT −₹123 Cr on ₹136 Cr); receivables rising (₹2,212 → ₹2,630 Cr in H1) and FY26 CFO −₹378 Cr.
- **hfcl.html — EBITDA basis:** "~₹826 Cr (16.7%)" is company basis; screener OP ₹764 Cr (15.4%). The primer notes "~15% on some third-party screens" — make the stat strip say which.
- **hfcl.html — product mix:** "~62% product" vs screener key points "Telecom Products 59%" (FY26). Reconcile.
- **iti-limited.html — FY26 profit mis-explained:** "lifted by ~₹503 Cr other income" — the driver is an **exceptional ₹832 Cr gain on sale of land and buildings** (K.R. Puram, ₹914.31 Cr, recognised in FY26 though completed Jul-2026). Add that the **auditors issued a disclaimer of opinion (32 qualifications)** on FY26 and a disclaimer of conclusion on Q1 FY27. This is the single most important missing fact.
- **iti-limited.html — public float wrong:** "institutions ~8%, retail ~2%". Screener: **Government (other) 7.88%, FII 0.02%, DII 0.07%, public 2.01%**. Effective government ownership ~97.9%; real float ~2%.
- **iti-limited.html — FY25 PAT:** −₹233 Cr (primer) vs −₹215 Cr (screener).
- **iti-limited.html — order book:** ~₹18,500 Cr → ₹18,637 Cr (Mar-26) → **₹13,883 Cr (Jun-26)**. The ASCON (₹8,280 Cr) + BharatNet (₹6,956 Cr) + BSNL blocks no longer fit inside the book; verify what was removed. ASCON IV is at proof-of-concept (due 31-Dec-2026).
- **iti-limited.html — stale valuation:** m-cap ~₹28,000 Cr / ₹290 → **₹21,921 Cr / ₹228 (52-week low)**; P/B ~15× → 11.5×.
- **iti-limited.html — 2026 events omitted:** ₹914 Cr land sale and ₹903 Cr debt repayment (Jul-26); BSNL 4G expansion order ₹856 Cr (7,613 sites, Jul-26); Q1 FY27 (₹425 Cr, −₹32 Cr); India Ratings IND BB+/Positive; cumulative government assistance ₹3,084 Cr.
- **iti-limited.html — status labels:** "Mini-Ratna" is doubtful for a chronically loss-making CPSE — verify against DPE's list. "2013 BIFR referral" — ITI was referred to BIFR in 2004 and the CCEA revival package came in Feb-2014 [K]; fix the timeline.
- **tejas-networks.html — FY23/FY24 wrong:** "FY23 ~₹1,097 Cr / PAT ~−₹344 Cr; FY24 ~₹1,232 Cr / PAT ~−₹63 Cr" vs screener **FY23 ₹920 Cr / −₹36 Cr; FY24 ₹2,471 Cr / +₹63 Cr**. The "revenue rose ~7×" device should be ~3.6× (FY24 → FY25). The revenue chart and the §03/§04 text repeat the error.
- **tejas-networks.html — Q1/Q2 FY27 omitted (refreshed 21-Jul):** Q1 ₹402 Cr / −₹202 Cr; Q2 ₹406 Cr / −₹207 Cr (board 16-Oct-2026); order book ₹1,514 → ₹1,529 → **₹2,315 Cr** (India 96%); TCS LoI ₹1,537 Cr for 18,685 BSNL sites (Aug-2026). Borrowings rising to **₹4,970 Cr (Sep-26)**; equity ₹2,527 Cr (Sep-26).
- **tejas-networks.html — APO value:** "~₹7,500 Cr (approx.)" → ₹7,492 Cr; supply completed May-2025. BSNL status: 98,557 sites installed / 97,213 on air (31-Jul-2026). Add that no 5G-upgrade order has been placed.
- **tejas-networks.html — valuation stale:** m-cap ~₹9,800 Cr / ₹564 → **₹7,582 Cr / ₹426**; EV ~₹13,300 Cr → ~₹11,400–12,250 Cr [E].
- **tejas-networks.html — order book India share:** Q4 FY26 deck says India 83% (Mar-26); Q2 FY27 India 96% — the book has become *more* concentrated, contrary to the primer's diversification narrative.
- **sterlite-technologies.html — demerger described backwards:** the primer says the "software/IT-services arm (STL Digital)" was demerged into STL Networks and that STL still does "network deployment / system integration". In fact the **Global Services Business (network deployment/SI/BharatNet EPC) was demerged into STL Networks Ltd (Invenia)** (NCLT 14-Feb-2025; effective 31-Mar-2025; 1:1; record date 24-Apr-2025), while **STL Digital stays inside STL** as the "Digital & Technology Solutions" segment (~4% of revenue). Fix §02 ("Stage 4 · Deploy"), §03 and the timeline. STL Networks itself: m-cap ₹1,810 Cr; FY26 revenue ₹851 Cr, PAT −₹26 Cr.
- **sterlite-technologies.html — founding date:** "traces back to 1988" vs screener "established July 2001 after the demerger of the telecom division of Sterlite Industries" — reconcile (group origin vs company).
- **sterlite-technologies.html — Q1 FY27 detail and 2026 events:** order book ₹7,309 Cr → **₹18,618 Cr (Jun-26)**; order intake ₹13,100 Cr; NA 54% of revenue; DC 21% → 50% guide; attach 16% → 25%; FY27 EBITDA guide 23%; QIP ₹1,500 Cr; **net cash ₹483 Cr**; $100 mn US facility; **second hyperscaler LTSA ~$1.2 bn to Dec-2030 (1-Oct-2026)**; patent win vs Fujikura; Ge/He constraints. Q2 FY27 board 23-Oct-2026.
- **sterlite-technologies.html — award value:** ">$1.11 bn (~₹10,000 Cr)" — company/press give ₹9,271 Cr at award.
- **sterlite-technologies.html — capacity:** "~50 million fkm" is unverified for 2026 (older interview: fibre 50, OFC 35 mn fkm; STL rationalised capacity in the trough [K]). Verify against the FY26 annual report.
- **sterlite-technologies.html — valuation/ownership stale:** m-cap ₹28,990 Cr → **₹41,199 Cr**; promoter ~44% → **42.29%**; FII 17.76%, DII 13.73%. P/E 174× TTM; P/B ~17×.
- **sterlite-technologies.html — trade:** no mention of the **EU anti-dumping duty (11.4% on STL, Dec-2024) and countervailing duty (Jun-2025)** or the US Sec 301 10% — material for a company with 22% Europe and 54% North America revenue.
- **General (all four):** none quantifies the **2026 fibre shortage** (TrendForce: 577 mn fkm demand, 180 mn fkm shortfall, prices 2.8–5× 2025, to 2028), the **BSNL expansion orders (~20k sites)**, the **RBI hike to 5.50%** or the **rupee at ₹94.9** (export tailwind for HFCL/STL, BOM headwind for Tejas/ITI). Market caps are 3 months stale (HFCL +17%, STL +42%, ITI −22%, Tejas −23% vs primer values).

## 3.5 Key source URLs
- **Screener (22-Oct-2026, curl):** https://www.screener.in/company/HFCL/consolidated/ · https://www.screener.in/company/ITI/consolidated/ · https://www.screener.in/company/TEJASNET/consolidated/ · https://www.screener.in/company/STLTECH/consolidated/ · https://www.screener.in/company/STLNETWORK/
- **HFCL Q2/Q1 FY27:** https://www.investywise.com/?p=121056 · https://www.niftytrader.in/markets/?p=32366 · https://www.angelone.in/news/stocks/hfcl-q1-fy27-earnings-results-net-profit-at-245-64-crore-revenue-rises-120-yoy · https://www.kotakneo.com/news/stocks/hfcl-q2-fy27-results-profit-surges-448-percent-shares-in-focus/
- **Tejas Q2 FY27 / BSNL LoI:** https://www.sahi.com/news/tejas-networks-q2-fy27-revenue-grows-to-406-crore-order-book-reaches-2-315-crore · https://www.stockgro.club/posts/ca-barkha-kamra/tejas-networks-q2-fy27-results-revenue-losses-and-orders-8bfc2553-e118-4507-9ca6-19f4a7d30b7f/ · https://www.sahi.com/news/tejas-networks-gets-1-537-crore-tcs-loi-for-bsnl-4g-ran-supply-3866-PE1_COR · https://www.outlookbusiness.com/news/tejas-completes-telecom-gear-supply-under-rs-7492-crore-bsnl-deal-to-set-up-1-lakh-4g-5g-sites
- **STL Q1 FY27:** https://arihantresearch.arihantcapital.com/Mumbai_Research/Sterlite_Technologies_Q1FY27_Result_update.pdf · https://insights.dsij.in/dsijarticledetail/rs-18618-crore-order-book-this-multibagger-small-cap-telecom-stock-reports-record-q1-fy27-pat-of-rs-197-crore-check-details
- **ITI:** https://filingreader.com/news-wire/mumbai/2026-05-29/iti-limited-auditors-issue-disclaimer-of-opinion-over-land-sale · https://indianmasterminds.com/news/iti-q1-fy27-results-revenue-net-loss-order-book-224189/ · https://www.sahi.com/news/iti-q1-standalone-net-loss-narrows-to-32-5-crore-as-revenue-declines-to-425-crore-949-PE1_CORP
- **Global fibre:** https://www.trendforce.com/presscenter/news/20261019-13275.html · https://www.crugroup.com/en/communities/thought-leadership/2026/optical-fibre-prices-rise-as-preform-availability-tightens/ · https://www.sec.gov/Archives/edgar/data/0000024741/000002474126000253/glw-20260728xex99xq22026.htm · https://www.prysmian.com/en/media/press-releases/prysmian-raises-guidance-after-its-best-quarter-yet
- **EU trade remedies:** https://eur-lex.europa.eu/eli/reg/2024/3014/oj · https://eur-lex.europa.eu/eli/reg_impl/2025/1135/oj · https://www.voicendata.com/features/fibreoptics-face-off-as-eu-duties-challenge-indian-exporters-6239283
- **BharatNet / BSNL / policy:** https://usof.gov.in/en/amended-bharatnet-program (503 on fetch) · https://www.dot.gov.in/static/uploads/2026/02/8bf9d30ae8ceac2c484dacced224d175.pdf · https://ianslive.in/centre-disburses-rs-1162-crore-under-telecom-pli-scheme--20250629202103 · https://www.sahi.com/news/vodafone-idea-engages-lenders-for-45-000-crore-capex-as-arpu-growth-continues-3338-PE1_COR

---

# PART 4 — Deep-research supplement (2026-10-22)

Second-pass, primary-source supplement compiled 22-Oct-2026 (UTC ~10:00–13:00). It sits on top of Parts 1–3. **Where Part 4 conflicts with Parts 1–3, Part 4 wins** (see 4.0).

**What was read this pass (all fetched this session, generic user-agent, no logins):**
- **HFCL:** Q2 FY27 earnings presentation (BSE `52bcff6e`, 19-Oct-26, 25 pp); Q2 FY27 board outcome with results, segment table, balance sheet, cash flow and press release (BSE `63336671`, 11 pp, partly scanned); Q1 FY27 earnings-call transcript (BSE `bbc45887`, call 22-Jul-26, 29 pp); FY26 Annual Report (BSE `60894750`, 406 pp: capacity, geography note, contingent liabilities); CARE Ratings rationale (Jul-2026).
- **Tejas:** Q2 FY27 earnings presentation (BSE `c9e0674e`, 16-Oct-26); Q1 FY27 transcript (BSE `93df39a6`, call 28-Jul-26); FY26 Annual Report (BSE `d5acd3d0`, 277 pp: AGM notice RPT resolutions, PLI note 42, contingent liabilities note 32.1). The Q2 press release and results PDFs are image scans; they were not OCR'd. The Q2 transcript was not yet filed.
- **STL:** Q1 FY27 press release + earnings deck + results (BSE `ffa18a79`, 57 pp); "Lakshya" investor & analyst meet transcript (3-Sep-26, BSE `46c547c0`); FY26 Annual Report (BSE `dd5015f0`, 361 pp: contingent liabilities note 37, related-party note 47); LTSA disclosure (BSE `e32c6959`, 1-Oct-26); board-meeting intimation (BSE `7ebac731`, 6-Oct-26); CRISIL rationale (1-Sep-26). The STL Q1 transcript link on screener returned an HTML error page, not the PDF.
- **ITI:** FY26 Annual Report (BSE `32ef5b86`, filed 13-Oct-26, 255 pp: Directors' report, order book, auditor observations with company replies, shareholding, notes). ITI holds no earnings calls and has filed no investor deck since 2020, so ITI's "guidance" below comes from the AR.
- **Industry:** PIB 2223942 (BSNL 4G, 5-Feb-26); PIB 2206477 (DoT Year-End Review, 19-Dec-25); UN Comtrade public preview API (India, HS 8517 / 851713 / 851762 / 851771 / 851779 / 854470 / 900110, CY2024–25, world and US partners); EU Implementing Regulations 2025/1135 and 2026/698 (official text via the lawplayer.com mirror; EUR-Lex itself served empty pages); YOFC 2026 interim results (HKEX); Prysmian Q2/H1-2026 press release (30-Jul-26); fresh screener pulls for all four (22-Oct-26).
- **Blocked or failed:** bseindia API (Access Denied; the PDFs themselves downloaded fine); usof.gov.in (503 / TLS mismatch); eparlib.sansad.in (connection reset); sec.gov (no response with a generic UA); India Ratings and ICRA rationale pages (JavaScript shells); ITI press-coverage PDF (reset). About 60 web calls in total.

**Tag discipline in Part 4:** **[V]** = read this session in the named primary document (company filing, AR, rating rationale, PIB, official regulation text, HKEX filing, Comtrade API). **[V-snip]** = search-result summary or secondary article only. **[E]** = my arithmetic on [V] inputs. **[K]** = memory.

---

## 4.0 Supersedes (corrections to Parts 1–3; the writer should apply these)

| # | Item (where in Parts 1–3) | Old value | New value | Source (primary) |
|---|---|---|---|---|
| S1 | **EU duty on HFCL vs STL** (trap 4/§5.3/§A4/E12/primer issues: "HFCL 0% vs STL 11.4%") | HFCL/HTL 0%; STL 11.4%; Birla/Universal/Vindhya 6.9%; others 11.4% (ADD only) | **Since 12-Jun-2025, combined ADD+CVD: HFCL/HTL 8.1% (CVD 8.1% + ADD 0%); STL 12.5% (ADD 8.8% + CVD 3.7%); Birla/Universal/Vindhya 8.3% (2.9% + 5.4%); other cooperating 10.2% (4.4% + 5.8%); all others 12.6% (4.5% + 8.1%).** Reg 2025/1135 Art 2 cut the ADD rates by the CVD. Reg 2026/698 corrected the annexes and refunds any excess combined duty. **HFCL's EU edge over STL is 4.4 points, not 11.4.** | EU Reg 2025/1135 Art 1(2) & Art 2; Reg 2026/698 Art 1–4 [V] |
| S2 | **HFCL H1 FY27 CFO** (§2.1 "H1 CFO ₹139.77 Cr (H1 FY26 ₹81.60 Cr)"; §12 item 6) | ₹139.77 Cr | **Consolidated H1 FY27 CFO = +₹455.27 Cr (H1 FY26 −₹43.60 Cr).** ₹139.77 Cr is the *financing* cash flow. H1 capex (PPE) ₹436.27 Cr; receivables increase ₹403.61 Cr. | HFCL Q2 results, cash-flow statement [V] |
| S3 | **HFCL capacity plan** (trap 4; §4.3; JSON; primer issue) | "28 → 43.1 mn fkm fibre; 39 → 62 mn fkm cable; preform 600 tpa (into 2028)" given as one plan | **The plan was upsized twice in ~3 months.** FY26 AR (Jul-26): OF 28.0 → 33.90 → **38.50**; OFC 34.0 → 42.36 → **56.36** mn fkm by Jul-2028. Q1 call (22-Jul-26): preform **300 MT for ₹580 Cr**. Q2 deck (19-Oct-26): OF current 28 → **43.1**, OFC **current 39** → **62** mn fkm by **Jul-2028**; preform **600 MT, capex ₹1,250 Cr, by Oct-2028**; total ~₹1,800 Cr. | HFCL AR FY26; Q1 transcript; Q2 deck [V] |
| S4 | **HFCL export share** (trap 10; §2.0; §3.1) | 55.5% (Q1 FY27); FY26 41% [primer] | FY26 **₹2,047.18 Cr = 41.4%** (FY25 ₹496.97 Cr = 12.2%) [V AR]. Q2 FY27 deck: "**exports ~63% of revenues**", target 65%+ from FY27 (another slide in the same deck says ">70% by FY27") [V]. 55.5% (Q1) remains V-snip. | HFCL AR geography note; Q2 deck [V] |
| S5 | **HFCL "US share" gap** (§H5) | not found | **North American orders ~₹1,435 Cr executed in FY26 ≈ 29% of revenue and ~70% of exports** [V CARE; E share] | CARE rationale Jul-26 [V] |
| S6 | **HFCL net debt, company basis** (§2.0 "n/a") | n/a (screener ₹1,761 Cr) | **₹1,245 Cr at both Mar-26 and Sep-26** (borrowings ₹1,713.37 Cr / ₹1,840.13 Cr less cash & bank ₹468.42 Cr / ₹594.76 Cr) [V inputs; E]. CARE: gearing 0.41× (Mar-26). | HFCL Q2 deck balance sheet [V] |
| S7 | **HFCL warrants** (§0 item 4, "₹90 Cr of utilisation delayed") | ₹555 Cr of warrants; ₹90 Cr delayed | Up to **7.50 crore warrants at ₹74 to one promoter and one promoter-group member** (board 25-Mar-26, shareholders 24-Apr-26) = ₹555 Cr. 25% (**₹138.75 Cr**) was received on 25-May-26; ₹48.75 Cr used; **₹90 Cr parked in FDs**. The QIP: 8,79,29,651 shares at ₹62.55 = ₹550 Cr (FY26); ₹24.33 Cr unutilised. | HFCL Q2 results note 3 [V] |
| S8 | **HFCL Q1 FY27 board date** (§H14 "~22/23-Jul") | inferred | **22-Jul-2026** (call held the same day) | Q1 transcript [V] |
| S9 | **STL Q1 FY27 result date** (status table; JSON "2026-07-27") | 27-Jul-2026 | **24-Jul-2026** (press release dated 24-Jul; 27-Jul is the Arihant note) | STL Q1 press release [V] |
| S10 | **STL Q1 EBITDA conflict** (trap 8; §H15) | ₹385 Cr (Arihant/screener) vs ₹397 Cr (DSIJ) | **Company: ₹397 Cr (20.8%)** [V deck/results]. Screener and CRISIL use "operating EBITDA" of ₹385 Cr (20.2%). Use ₹397 Cr with "company basis". FY26 company EBITDA ₹628 Cr (13.2%) is confirmed [V]. | STL Q1 results segment note [V] |
| S11 | **STL Mar-26 order book** (§E5; §3.3) | ₹7,309 Cr | **Company deck: ₹7,687 Cr (FY26)** [V]; CRISIL says ~₹7,309 Cr [V]. Use the company figure and note the basis difference. Executable in Q2 FY27 ₹2,228 Cr; Q3 FY27 onwards ₹16,390 Cr [V]. | STL Q1 deck p.25; CRISIL [V] |
| S12 | **STL $1.11 bn PAL in rupees** (§3.3 "₹9,271 Cr vs primer ~₹10,000 Cr"; primer issue) | "company/press give ₹9,271 Cr" | **The company itself says "US$1.11 billion (₹10,000+ Cr)"** [V]. The primer's figure is the company's; withdraw that primer issue. | STL Q1 press release [V] |
| S13 | **STL capex plan** (§0; §2.4 Q1 bullet "₹500 Cr/yr × 3") | ₹500 Cr/yr × 3 yrs | **"Lakshya" (3-Sep-26): ~₹1,000 Cr a year for 3 years, +50% preform/fibre/cable capacity.** CRISIL (1-Sep-26): ₹700–800 Cr in FY27; ₹1,500–2,000 Cr over 3 years, funded from accruals. | STL investor meet; CRISIL [V] |
| S14 | **STL guidance** (§0 "FY27 EBITDA guide 23%") | 23% FY27 | Still the Q1 guide (Arihant), but now superseded by **FY29 targets: revenue ₹20,000 Cr (4.2× FY26), EBITDA margin 27%+** [V]. CRISIL expects FY27 revenue >₹8,000 Cr at >20% [V]. FY26 AR: ~20% EBITDA by Q4 FY27 "as capacity utilisation reaches 70%+" [V]. | STL Lakshya; CRISIL; AR [V] |
| S15 | **STL Mar-26 net debt** (§2.0 company ₹1,128 Cr) | ₹1,128 Cr | **CRISIL: ₹1,041 Cr** (31-Mar-26) [V]. Keep ₹1,128 Cr only as the primer/company figure, with a basis flag. Cash ~₹2,400 Cr at 30-Jun-26 [V CRISIL]. | CRISIL [V] |
| S16 | **STL rating** (not in Parts 1–3) | — | ICRA upgraded to AA (Stable) (Jul-26) [V deck]; **CRISIL upgraded to AA/Stable on 1-Sep-26** (from AA-) [V]. | CRISIL; STL deck [V] |
| S17 | **STL geography** (trap 10: "NA 54%, Europe 22%, RoW 22%") | Europe 22% | Deck (read from chart layout): **Q1 FY27 Americas 54% / Europe ~25% / RoW ~22%**; FY26 39/39/22 [V, layout-read; FLAG minor]. **Data-centre share 21% in Q1 FY27 vs 1% in FY26** [V CRISIL] (the dossier never gave the FY26 base). | STL deck p.24; CRISIL [V] |
| S18 | **Tejas net debt Sep-26** (§H11; trap 5 used screener ₹4,666 Cr) | n/a | **Company net debt ₹4,384 Cr (Sep-26), ₹4,277 Cr (Jun-26), ₹3,531 Cr (Mar-26)**; cash ₹451 Cr; gross borrowing ₹4,866 Cr at Jun-26 [V]. | Tejas Q2 deck; Q1 transcript [V] |
| S19 | **Tejas Q2 EBITDA** (§H11) | n/a | **−₹108 Cr** (Q2 FY26 −₹293 Cr); H1 −₹207 Cr; EBIT −₹199 Cr; PBT −₹277 Cr [V]. | Tejas Q2 deck [V] |
| S20 | **Tejas revenue mix** (§2.3 "India 96% of book") | only OB mix | **Q2 revenue India 88% / international 12%** (Q1: ~50/50 per CFO); book India 96% (Q1: 93%) [V]. | Tejas Q2 deck; Q1 transcript [V] |
| S21 | **Tejas patents** (676/371 used throughout) | 676 filed / 371 granted | FY26 AR 676 / 371 [V]; Jun-26 **722 filed / 380 granted** [V Q1 call]; Sep-26 **748 cumulative filings** [V Q2 deck]. | Tejas [V] |
| S22 | **Tejas PLI** (§7.2 "Tejas received ₹189 Cr Apr-2025 for H1 FY26") | ₹189 Cr | FY25: PLI **₹467.70 Cr recognised** in other operating revenue; **FY26: none — Tejas missed the scheme's minimum threshold**. PLI/DLI receivable ₹278.78 Cr (Mar-25) → nil (Mar-26) [V]. ("₹189 Cr" stays V-snip.) | Tejas AR FY26 note 42 [V] |
| S23 | **ITI "Government 7.88%" holder** (§H12; trap 2; E8) | unknown | **Special National Investment Fund (SNIF), Central Government — 7,58,69,381 shares (7.88%).** Promoter group also includes **Governor of Karnataka 0.03%**; President of India 89.99% [V]. | ITI AR FY26 shareholding table [V] |
| S24 | **ITI land sale cash timing** (§0 item 5 "completed July 2026") | ₹914.31 Cr; completed Jul-26 | **Consideration ₹914.31 Cr, of which ₹884.20 Cr was received by 31-Mar-2026.** Possession letter 26-Mar-26; agreement 27-Mar-26; mortgage release 19-Jun-26; **sale deed registered 2-Jul-2026**. The gain is ₹832.19 Cr. The auditor says Ind AS 16 derecognition was not met at 31-Mar. | ITI AR: auditor observation 1 + company reply; note to SFS [V] |
| S25 | **ITI order-book composition** (trap 2; §H12) | ₹18,637 Cr, unexplained drop to ₹13,883 Cr | AR: ₹18,637 Cr "**including AWO for BharatNet Phase-III, PO for BSNL 4G rollout projects and LoI of Solar LED street lights of around ₹4,191.14 Cr**" [V]. 18,637 − 4,191 − Q1 revenue 425 ≈ ₹14,021 Cr, close to the ₹13,883 Cr reported → **the drop most likely reflects removal of the solar-LED LoI** [E, strong inference; not stated by ITI]. | ITI AR Directors' report [V] |
| S26 | **ITI FY25 PAT conflict** (§3.3; primer issue "FY25 PAT −₹233 Cr vs −₹215 Cr") | primer said to be wrong | The **FY26 AR states FY25 consolidated PBT/PAT as −₹233.15 Cr** [V]; screener shows −₹215 Cr. The primer matches the company. **Withdraw that primer issue**; footnote the basis. | ITI AR [V] |
| S27 | **ITI "2013 BIFR"** (§3.4 primer issue) | "ITI was referred to BIFR in 2004 … fix the timeline" | The AR cites a **BIFR order dated 08-Jan-2013**, under which shares are still allotted to the President against capex grants (e.g. 19,65,029 shares at ₹300.25 on 30-Jul-2025 for ₹59 Cr) [V]. The primer's "2013 BIFR" is defensible (the BIFR revival order). Soften the issue to "clarify referral (2004) vs BIFR order (Jan-2013) vs CCEA package (Feb-2014 [K])". | ITI AR [V] |
| S28 | **BSNL 4G site count** (§0; D6 "97,213 on air 31-Jul-26") | 98,557 installed / 97,213 on air (31-Jul-26) [V-snip] | Latest **primary** figure: **97,672 installed / 95,511 on air as of 15-Jan-2026** (PIB 5-Feb-26) [V]. Later secondary counts: 97,906 / 96,103 (28-Feb-26); ~98,550 / 97,174 (~30-Jun-26) [V-snip]. Keep 97,213 as V-snip, or use the PIB figure with its date for the stat strip. | PIB 2223942 [V] |
| S29 | **PLI telecom outlay** (§7.2 "[K] ₹12,195 Cr") | [K] | **₹12,195 Cr, effective Apr-2021** [V PIB]. Cumulative to 30-Sep-25: investment >₹4,646 Cr; sales >₹96,240 Cr; exports ₹19,240 Cr; jobs 29,574 [V]. (The Part-1 "PLI participants: sales ₹78,672 Cr, exports ₹14,963 Cr, investment ₹4,081 Cr (to Jan-2025)" is an older series.) | PIB 2206477 [V] |
| S30 | **"India telecom imports ₹1.46 lakh Cr (FY24)"** (§2.2) | composite, conflicting | Replace with HS data (CY, US$): **HS 8517 imports $17.39 bn (2024) → $21.78 bn (2025); exports $21.76 bn → $33.74 bn** (phones 851713 = $30.13 bn of 2025 exports). **Network gear (851762): imports $3.84 bn vs exports $1.46 bn (2025).** **Optical fibre & cable (900110 + 854470) exports $350 mn → $513 mn (+47%); the US took $201.5 mn of 900110 in 2025 (from $68.9 mn).** | UN Comtrade API [V] |
| S31 | **Global fibre demand 2026** (§2.1 "577 mn fkm") | single figure | **Estimates conflict:** TrendForce 577 mn fkm [V Part 1]; YOFC's interim cites "a research institute (Jul-2026)": **>670 mn fkm (+>10%), DC fibre +69%** [V]; HFCL AR: "**750 mn fkm global OFC annual demand**" [V]. The definitions differ (bare fibre vs cable; inclusion of China). Present as a range, 577–750, and name each source. | YOFC interim; HFCL AR [V] |
| S32 | **"BE series" tag** (header note on HFCL/STL) | "BE (trade-for-trade) — verify" | **Not confirmed.** No NSE circular found moving HFCL or STL to BE. HFCL is in the **long-term ASM** framework [V-snip]. STL **Networks** moved BE → EQ on 18-Sep-2025 [V-snip NSE circular]. Drop the BE claim; at most say "HFCL under long-term ASM". | search of NSE circulars [V-snip] |
| S33 | **HFCL "turnkey ~5% of Q2"** (§9.1) | 5% [E] | Turnkey ₹136.07 Cr = **5.4%** of Q2 revenue [V]. Segment capital still tied up: **turnkey assets ₹3,448 Cr vs liabilities ₹903 Cr ≈ ₹2,545 Cr net** [V inputs; E] — a third of HFCL's capital employed earns a loss. | HFCL Q2 segment note [V] |
| S34 | **Tejas–TCS LoI size vs FY27 revenue ceiling** (C.3; §B2) | LoI ₹1,537 Cr ≈ refill | AGM resolution: **material RPT with TCS up to ₹4,800 Cr in FY27, of which sales ₹4,750 Cr (435% of FY26 turnover)**; FY26 sales to TCS were ₹28.29 Cr [V]. The ceiling suggests management sees BSNL add-on billing well above the ₹1,537 Cr LoI. This is a ceiling, not guidance. | Tejas AR FY26 AGM notice [V] |

## 4.1 Verification table — the 40 figures the writer will lean on

"Fetched?": **V** = primary document read this session; **V-snip** = secondary/search only; **E** = arithmetic on V inputs. "Agrees?" compares the result with Parts 1–3.

| # | Figure | Value | Primary source | Fetched? | Agrees with Parts 1–3? |
|---|---|---|---|---|---|
| 1 | HFCL Q2 FY27 revenue / EBITDA / PAT | ₹2,541.79 Cr / ₹658.00 Cr (25.89%) / ₹394.22 Cr (15.51%) | HFCL Q2 deck p.7 + press release (BSE 52bcff6e, 63336671) | V | Yes. Company EBITDA = total income ₹2,569.25 Cr − total expenses ₹1,911.25 Cr, so it **includes other income (₹27.46 Cr)**. Revenue less expenses = ₹630.54 Cr = screener OP. Trap 8 is confirmed. |
| 2 | HFCL H1 FY27 revenue / EBITDA / PAT | ₹4,456.77 Cr / ₹1,103.27 Cr (24.75%) / ₹639.86 Cr | HFCL Q2 deck p.8 | V | Yes |
| 3 | HFCL order book Sep-26 and split | ₹28,911 Cr = Products 19,751 + O&M 5,070 + Networks 4,090; Govt 10,105 / Private 18,806; 64% OFC/DCI; 57% export | HFCL Q2 deck p.10 | V | Yes; adds the Govt/Private split |
| 4 | HFCL order book trend | ₹10,480 Cr (Jun-25) → 21,206 (Mar-26) → 26,665 (Jun-26) → 28,911 (Sep-26) | CARE Jul-26; Q2 deck | V | Yes; adds Jun-25 base |
| 5 | HFCL Q2 segments | Telecom Products ₹2,321.98 Cr (PBIT ₹716.24 Cr, 30.8%); Turnkey ₹136.07 Cr (PBIT −₹122.58 Cr); Defence ₹54.94 Cr (PBIT +₹3.45 Cr); Others ₹28.80 Cr | HFCL Q2 results segment note | V | Yes (adds Others and the defence PBIT) |
| 6 | HFCL capacity | OF 28 → 43.1 mn fkm; OFC 39 → 62 mn fkm (Jul-2028); preform 600 MT, ₹1,250 Cr (Oct-2028) | HFCL Q2 deck p.15 | V | Partly — see S3 (upsized plan; current OFC is 39, not 34) |
| 7 | HFCL FY26 exports | ₹2,047.18 Cr (41.4%); FY25 ₹496.97 Cr | HFCL AR FY26 geography note; CARE | V | Yes (primer 41%) |
| 8 | HFCL North America FY26 | ~₹1,435 Cr (~29% of revenue) | CARE Jul-26 | V (E share) | New (closes §H5) |
| 9 | HFCL export share now | "~63% of revenues"; Q1 FY27 55.5% | Q2 deck p.18–19; angelone | V (63%); V-snip (55.5%) | Partly — 63% is newer |
| 10 | HFCL realisation | International $18–28/fkm; data centre $22–28/fkm | Q1 FY27 transcript p.8 | V | New (closes §H5) |
| 11 | HFCL receivables | ₹2,630.03 Cr current + ₹259.55 Cr non-current (Sep-26) vs ₹2,212.18 Cr + ₹269.80 Cr (Mar-26) | Q2 deck p.9 | V | Yes |
| 12 | HFCL H1 CFO | +₹455.27 Cr consolidated (H1 FY26 −₹43.60 Cr) | Q2 results cash-flow statement | V | **No** — S2 |
| 13 | HFCL net debt (company basis) | ~₹1,245 Cr (Mar-26 and Sep-26); gearing 0.41× | Q2 deck BS; CARE | V / E | New (closes §H5) |
| 14 | HFCL QIP / warrants | ₹550 Cr QIP at ₹62.55; ₹555 Cr promoter warrants at ₹74 (25% = ₹138.75 Cr received) | Q2 results note 3; CARE | V | Yes; detail added (S7) |
| 15 | HFCL FY27 guidance | Revenue growth ≥80% over FY26; ₹10,000 Cr "much earlier than FY29"; EBITDA >27% by FY29; defence ~₹500 Cr | Q2 deck p.4, p.18; press release | V | Yes; adds the margin target |
| 16 | EU duties on HFCL | CVD 8.1% + ADD 0% = **8.1%** | EU Reg 2025/1135 | V | **No** — S1 |
| 17 | EU duties on STL | ADD 8.8% + CVD 3.7% = **12.5%** | EU Reg 2025/1135 Art 1–2 | V | **No** — S1 |
| 18 | STL Q1 FY27 revenue / EBITDA / PAT | ₹1,910 Cr / ₹397 Cr (20.8%, company) / ₹197 Cr | STL Q1 results + deck | V | Partly — S10 (₹397 vs ₹385) |
| 19 | STL order book | ₹7,687 Cr (Mar-26) → ₹18,618 Cr (Jun-26); Q2-executable ₹2,228 Cr | STL Q1 deck p.25 | V | Partly — S11 |
| 20 | STL net cash / QIP | Net cash ₹483 Cr (30-Jun-26); QIP ₹1,500 Cr (June 2026), "pending allocation" at 30-Jun | STL Q1 deck p.26; CRISIL | V | Yes (Part 1 had DSIJ V-snip) |
| 21 | STL second hyperscaler deal | LTSA via WOS, "potential value" ~US$1.2 bn at prevailing prices; CY26–CY30; capped mutual liabilities | STL BSE disclosure 1-Oct-26 | V | Yes; adds terms |
| 22 | STL first hyperscaler deal | US$1.11 bn (₹10,000+ Cr) multi-year; over 3 years per CRISIL | STL Q1 press release; CRISIL | V | Partly — S12 |
| 23 | STL North America share | 54% of Q1 FY27 revenue (FY26 39%) | STL Q1 deck p.24 | V (layout-read) | Yes |
| 24 | STL data-centre share | 21% of Q1 FY27 revenue vs 1% FY26 | CRISIL 1-Sep-26; deck | V | Yes; adds base |
| 25 | STL FY29 "Lakshya" targets | Revenue ₹20,000 Cr; EBITDA 27%+; capex ~₹1,000 Cr/yr × 3; +50% capacity | STL investor meet 3-Sep-26 | V | New (S13/S14) |
| 26 | STL ex-China OFC share | 8% (FY26) → 9% (Q1 FY27) | STL deck p.20; CRISIL | V | Yes |
| 27 | Tejas Q2 FY27 revenue / EBITDA / PAT | ₹406 Cr / −₹108 Cr / −₹207 Cr | Tejas Q2 deck p.3 | V | Yes; adds EBITDA |
| 28 | Tejas order book | ₹2,315 Cr (Sep-26; India 96%); ₹1,529 Cr (Jun-26; India 93%) | Tejas Q2 deck; Q1 call | V | Yes |
| 29 | Tejas net debt / NWC | Net debt ₹4,384 Cr; NWC ₹4,235 Cr; inventory ₹2,314 Cr; net receivables ₹2,042 Cr (Sep-26) | Tejas Q2 deck p.4 | V | New (S18) |
| 30 | Tejas BSNL add-on LoI | TCS LoI for **18,685 sites** (shipments began Q2) | Tejas Q2 deck p.5 | V (sites); V-snip (₹1,537 Cr value) | Yes |
| 31 | Tejas original BSNL APO | ₹7,492 Cr | Outlook Business (Part 1); the Q1 call cites "initial ₹7,500 crores" (analyst's phrasing) | V-snip | Unchanged |
| 32 | ITI land sale | ₹914.31 Cr consideration; ₹832.19 Cr gain; ₹884.20 Cr received by 31-Mar-26; deed 2-Jul-26 | ITI AR FY26 auditor observation 1 + reply | V | Partly — S24 |
| 33 | ITI auditor | Disclaimer of opinion; going-concern doubt paragraph; EPS would be −₹8.65 per auditor (reported +₹3.04) | ITI AR FY26 | V | Yes. The qualification count (32) was not re-counted — FilingReader V-snip. My arithmetic: ₹292.8 Cr − ₹832.2 Cr = −₹539 Cr → EPS ≈ −₹5.60 on 96.3 cr shares; the auditor's −8.65 may be the change in EPS, not its level [E; FLAG]. |
| 34 | ITI order book | ₹18,637 Cr (Mar-26, incl. ₹4,191 Cr solar-LED LoI); ₹13,883 Cr (Jun-26) | ITI AR (V); indianmasterminds (V-snip) | V / V-snip | Yes; explanation added (S25) |
| 35 | ITI 7.88% holder | SNIF (Central Government) | ITI AR shareholding table | V | New (S23) |
| 36 | ITI BSNL 4G add-on | ₹856.39 Cr, 7,613 sites (West Zone), 16-Jul-26; Tejas radios; two POs under 20% reservation | sahi/freepressjournal/angelone | V-snip | Yes |
| 37 | BSNL 4G sites | 97,672 installed / 95,511 on air (15-Jan-26) | PIB 2223942 | V | Partly — S28 (97,213 on 31-Jul is V-snip) |
| 38 | BharatNet (ABP) | Outlay ₹1.39 lakh Cr; 2.65 lakh GPs; Phase I+II: 6,94,711 km OFC, 2,14,843 GPs connected (Oct-25) | PIB 2206477 | V (₹1.39 lakh Cr; exact ₹1,39,579 Cr and "16 packages" V-snip) | Yes |
| 39 | Telecom PLI | Outlay ₹12,195 Cr (Apr-2021); cumulative sales ₹96,240 Cr, exports ₹19,240 Cr (30-Sep-25); disbursed ₹1,162 Cr (to Mar-25) | PIB 2206477 (V); IANS (V-snip disbursal) | V / V-snip | Yes (S29) |
| 40 | India OF/OFC exports | (HS 900110 + 854470) $349.5 mn (CY24) → $512.8 mn (CY25); US $80.4 mn → $214.3 mn | UN Comtrade API | V | New; Part 1's "~₹8,000–12,000 Cr annualised" [E] is too high for CY25 — see 4.3 note |

**Tally: 33 of 40 rows rest on at least one primary document fetched this session** (rows 1–8, 10–29, 32–35, 37, 40; row 9 and rows 38–39 are part-V). **Fully V-snip: rows 31 and 36** (Tejas APO; ITI ₹856 Cr). Rows 9, 30, 34, 38 and 39 mix V and V-snip.

Other Part-1 headline figures re-checked or left as they were:
- TrendForce 577 / 180 mn fkm — V in Part 1 (press release); not re-fetched; conflicting estimates in S31.
- CRU China G.652.D: Part 1 had +80% (Nov-25 → Jan-26) and ¥83.4/fkm (Mar-26). **New: ¥96.8/fkm spot (Aug-2026, tax incl.); China Mobile 2026–27 tender implies ~¥81.0/fkm bare fibre; China Telecom's first-round 2026–27 outdoor tender drew no bidders** [V-snip, C114 citing CRU].
- Corning Q2-26 Optical Communications +32% to $2.07 bn; Enterprise +65%; ~$2 bn 2026 capex for OC; Q3 guide core sales $4.9–5.0 bn [V-snip]. **Corning Q3-2026 has not been reported as of 22-Oct**; sec.gov did not respond to a generic UA.
- Prysmian Q2-26 Digital Solutions: organic +18.0%, adj. EBITDA margin 23.8% (16.8%), adj. EBITDA €122 mn ("almost doubling"); group FY26 guide €2.8–2.9 bn — **now V** (Prysmian press release 30-Jul-26).
- Vi ₹45,000 Cr capex plan (FY27–29) — V-snip (not re-fetched).
- MFN duty 0% on HTS 8544.70 — [K] (not re-fetched). CRISIL [V] confirms "reduction of tariff in US to 10% in February 2026" helped STL's margin.
- Trusted Source dates (Mar-2021 amendment, effective 15-Jun-2021) — [K] (not re-fetched).

---
## 4.2 Company deep-dives (primary documents)

Tables: **screener consolidated, re-pulled 22-Oct-2026 [V]**; OP = screener operating profit (excludes other income). Company-basis figures are labelled.

### 4.2.1 HFCL (HFCL · 500183)

**(a) Management-commentary digest** (paraphrased; MD Mahendra Nahata unless noted)
- **Growth guide raised twice in a quarter.** 22-Jul-26 call: FY27 revenue growth ~40% (from ~20% in May), "better to under-promise". 19-Oct-26 deck and press release: **at least 80% over FY26** (≥₹8,909 Cr [E]). The ₹10,000 Cr revenue aspiration is now "much earlier" than FY29. [V Q1 transcript p.7–8; Q2 press release]
- **Margins.** FY27 EBITDA aspiration was ">20%"; Q1 did 23.25% and Q2 25.89%. Management calls this "no seasonality" and says it comes from average, not exceptional, contracts. Telecom-products segment margin (~30%) is "sustainable" because sales and raw-material contracts are long-term with **annual price-reset clauses**. **Target: EBITDA >27% by FY29** (from ~16.7% in FY26). [V Q1 transcript p.9–12; Q2 deck p.18]
- **Pricing.** International realisation ranges **$18–28/fkm**; data-centre fibre $22–28/fkm; telco fibre lower. Prices are up "quite significantly in the last 6 months". The AR expects **realisation ~2.5× by FY27**. [V transcript p.8; AR]
- **US tariffs.** During the 50% IEEPA-era duty, customers bore most of it via a mid-contract reset. After the refund, HFCL paid that money back to them. US buyers are being "advised" by the administration not to buy Chinese fibre. The MD cites a 35% duty on Chinese fibre vs 10% on India. [V transcript p.11–12; the 35% figure is the MD's, not verified]
- **Capex.** FY27 ₹640 Cr: 3 draw towers (fibre 28 → 34 mn fkm), IBR lines ₹60 Cr, DC-connectivity subsidiary ₹65 Cr, defence ₹100 Cr, ₹100 Cr of the ₹215 Cr DC plant. FY28 ~₹615 Cr: preform ₹325 Cr, defence ₹175 Cr, DC ₹115 Cr. The Q2 deck then lifted the plan to **~₹1,800 Cr in total, including a ₹1,250 Cr, 600 MT preform plant (Madhya Pradesh) by Oct-2028**. [V]
- **Preform economics.** Making preform is "at least 30% cheaper" than buying. Preform is 65–70% of fibre cost and ~45% of cable cost, so the plant cuts raw-material cost by ~10–12%. [V transcript p.17–18]
- **Data-centre connectivity.** First full year: ~₹800 Cr revenue in FY27; ₹850 Cr+ of orders in hand; capacity being raised 5×. [V transcript p.19]
- **Defence & aerospace.** FY27 ~₹500 Cr "on track". FY29 ≥₹3,000 Cr and ₹5,000 Cr the year after, including an aerospace acquisition due to close in Q3 FY27. Defence order book ~₹1,850 Cr, of which ~₹1,600 Cr sits in the entity being acquired. ₹230 Cr phase 1 of a hand-grenade (MMHG) plant in a 1,000-acre Andhra ammunition complex. [V Q2 deck p.15–16; press release; transcript p.12]
- **Corporate structure.** A **Restructuring Committee with EY as adviser** is evaluating "strategic alternatives aimed at simplifying the group structure" (Q1 call). The Q2 MD letter says each vertical has "a distinct operating, profitability and working-capital profile" and that "various strategic options" are being evaluated. **A demerger/separation of turnkey/EPC or defence is a live possibility** [V; outcome E].
- **Mix targets.** Products ~91% of revenue; private customers ~92%; exports ~63% → 65%+ from FY27 (one slide says >70% in FY27). [V Q2 deck]
- **Demand view.** No "let-up" in demand for at least 5 years; 10-year contracts are appearing (cites Prysmian–Molex). Fibre-guided drones need **70–100 mn fkm** a year of A2 fibre (the AR says 50–100 mn fkm, 12–15% of global demand). [V]

**(b) Concall/deck KPI table**

| KPI | Q2 FY26 | Q1 FY27 | Q2 FY27 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | 1,043.34 | 1,914.98 | 2,541.79 | deck p.7 [V] |
| EBITDA (₹ Cr; % ; incl. other income) | 203.37 (19.49%) | 445.27 (23.25%) | 658.00 (25.89%) | deck [V] |
| PAT (₹ Cr) | 71.92 | 245.64 | 394.22 | deck [V] |
| Telecom Products revenue / PBIT | 490.10 / 122.54 | 1,589.53 / 483.92 | 2,321.98 / 716.24 | results [V] |
| Turnkey revenue / PBIT | 506.77 / 35.92 | 280.32 / −87.53 | 136.07 / −122.58 | results [V] |
| Defence revenue / PBIT | 29.73 / 1.86 | 23.74 / −6.04 | 54.94 / 3.45 | results [V] |
| Order book (₹ Cr) | ~10,480 (Jun-25) | 26,665 | 28,911 | CARE; deck [V] |
| Export share of revenue | — | 55.5% [V-snip] | ~63% (deck claim) | deck [V] |
| Foreign subsidiaries' revenue (2 subs) | — | — | ₹1,066.16 Cr in Q2; ₹1,779.02 Cr in H1 | auditor's review para 8 [V] |
| Receivables (current, ₹ Cr) | — | — | 2,630.03 (Mar-26 2,212.18) | deck BS [V] |
| Inventory (₹ Cr) | — | — | 1,543.98 (Mar-26 1,415.99) | deck BS [V] |
| Net debt (₹ Cr, company) | — | — | ~1,245 (Mar-26 ~1,245) | deck BS [V/E] |
| H1 CFO / capex (₹ Cr) | H1 FY26: −43.60 / 133.74 | — | H1 FY27: +455.27 / 436.27 | cash-flow statement [V] |
| Fibre / cable capacity (mn fkm) | 28 / 34 | 28 → 34 / 34 → 43 (call) | 28 → 43.1 / 39 → 62 (Jul-28) | transcript; deck [V] |
| R&D headcount | — | — | 253 (telecom 127, OF/OFC/DC 73, defence 53) | deck p.14 [V] |
| M-cap (30-Sep-26) | — | — | ₹34,691 Cr; 153.06 cr shares | deck p.21 [V] |

**(c) Five-year history (screener consolidated, ₹ Cr) [V]**

| FY | Revenue | OP | OPM | Other inc. | Interest | Dep. | PAT | ROCE | Debtor days | WC days |
|---|---|---|---|---|---|---|---|---|---|---|
| FY22 | 4,727 | 650 | 14% | 37 | 166 | 78 | 326 | 19% | 146 | 85 |
| FY23 | 4,743 | 619 | 13% | 47 | 152 | 83 | 318 | 15% | 145 | 124 |
| FY24 | 4,465 | 582 | 13% | 102 | 147 | 82 | 338 | 13% | 181 | 163 |
| FY25 | 4,065 | 449 | 11% | 58 | 185 | 106 | 173 | 8% | 170 | 179 |
| FY26 | 4,949 | 764 | 15% | 63 | 242 | 157 | 329 | 11% | 163 | 208 |
| TTM Sep-26 | 7,492 | 1,586 | 21% | 97 | 253 | 194 | 927 | — | — | — |

Company-basis FY26 (CARE): total operating income ₹4,984 Cr; PBILDT margin 16.03% (FY25 11.31%); product revenue ₹2,931 Cr (OFC ~₹2,259 Cr); EPC/turnkey ~38% of revenue; RJIL 13% of revenue (63% in FY18) [V].

**(d) Eight-quarter trend (screener consolidated, ₹ Cr) [V]**

| Qtr | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,012 | 801 | 871 | 1,043 | 1,211 | 1,824 | 1,915 | 2,542 |
| OP | 152 | −37 | 28 | 190 | 228 | 314 | 414 | 630 |
| OPM | 15% | −4.6% | 3.3% | 18% | 19% | 17% | 22% | 25% |
| Interest | 47 | 51 | 56 | 61 | 63 | 63 | 62 | 65 |
| PAT | 73 | −83 | −29 | 72 | 102 | 184 | 246 | 394 |

**(e) Annual-report and filing findings**
- **Capacity (AR FY26):** OF 28.0 mn fkm → 33.90 (under way) → 38.50 (approved); OFC 34.0 → 42.36 → 56.36 mn fkm, all by Jul-2028. The Oct-26 deck goes further (S3). "Better capacity utilisation" is cited for the FY26 margin gain; no utilisation % is given. CARE: the ~₹10,159 Cr multi-year export contract alone uses "over 50%" of capacity [V].
- **Geography (AR note):** FY26 revenue within India ₹2,902.09 Cr / **outside India ₹2,047.18 Cr** (FY25 ₹3,567.55 / ₹496.97 Cr). Non-current assets are almost all in India (₹1,771.82 Cr vs ₹0.13 Cr abroad): HFCL **has no US plant**, which leaves it exposed if BABA-type local-content rules spread [V; E].
- **Contingent liabilities (AR note 47, consolidated):** unexpired LCs ₹307.19 Cr (₹164.30 Cr); bank guarantees ₹731.00 Cr (₹925.17 Cr; falling as turnkey work winds down); tax and other claims ₹69.98 Cr (₹45.48 Cr). Nothing large [V].
- **Group structure (Q2 results):** subsidiaries HTL Ltd, Polixel, Moneta Finance, HFCL Advance Systems (defence), Raddef, DragonWave HFCL India, HFCL Technologies, HFCL Inc. (USA), HFCL B.V. (Netherlands; with HFCL Canada, HFCL UK; HFCL Pty Australia liquidated 19-Aug-26); JCEs Nimpaa Telecom and BigCat Wireless. Joint auditors S. Bhandari & Co LLP and Oswal Sunil & Co gave an unmodified review [V].
- **Turnkey drag:** turnkey segment assets ₹3,448 Cr vs liabilities ₹903 Cr (Sep-26). About ₹2,545 Cr of capital sits in a segment that lost ₹210 Cr at PBIT in H1. This is the lever behind the restructuring talk [V inputs; E].
- **Ratings:** CARE upgraded to **CARE A / Positive; A1** (Jul-26) from A-/Stable, A2+. WC cycle 191 days. Upgrade triggers: net debt (incl. acceptances)/PBILDT <2.5×; collection period <150 days [V].

### 4.2.2 Tejas Networks (TEJASNET · 540595)

**(a) Management-commentary digest** (MD & CEO Arnob Roy; CFO AVS Prasad)
- **Path to profitability.** Three levers: grow revenue (the BSNL add-on plus international); optimise opex (employee costs to stay "flat for some more time"); and release working capital (inventory built ahead for the add-on order, receivables tied to BSNL acceptance tests and deferred features). The Q2 deck states a goal of **"quarterly positive EBITDA"** but gives no date. [V Q1 transcript p.10–11; Q2 deck p.10]
- **BSNL add-on.** In July management expected "additional 26,000 sites" and the order "probably in this quarter". The TCS LoI came for **18,685 sites**, and shipments began in Q2. Press reports put BSNL's total add-on at **26,238 sites (TCS ~18,625 + ITI 7,613)**, and Tejas supplies radios for ITI's portion too [V Q1 call; V Q2 deck; V-snip on 26,238 and on ITI's radios]. **Tejas's addressable add-on is therefore ~26k sites, not 18.7k** [E].
- **AMC annuity.** AMC on the 1-lakh-site network starts only after site acceptance and the warranty period ("next few quarters"). It will be recognised over **8 years**, ordered circle by circle on multi-year POs, at "much higher margin". It is **not in the order book** and its size is undisclosed. [V Q1 call p.11–12]
- **International.** Q1 revenue was ~50/50 India/international (5G massive-MIMO radios to a European customer via NEC). Q2 was 88/12. First end-to-end 5G network (RAN + core) in South America; POCs in North America and APAC; custom 5G radio talks with Tier-1 MNOs; 400G DWDM win with a pan-African Tier-1. International orders carry standard payment terms, with **no performance-linked payments like BSNL's**. [V]
- **Domestic wireline.** LoI from an SI to supply IP routers to upgrade the BharatNet middle mile in three states. **L1 in a GoI strategic pan-India OTN/WDM tender.** GPON OLT POs from ISPs. [V Q2 deck p.5]
- **Balance sheet.** Net debt rose to ₹4,384 Cr "on account of increased operational and capex funding". Collections, non-recourse discounting and advance settlements cut net receivables to ₹2,042 Cr in Q2. Management expects BSNL execution to bring down inventory **and gross debt**. [V Q2 deck p.4]
- **Tata linkage.** New logo with the Tata endorsement mark (IMC 2026). AGM approval sought for **up to ₹4,800 Cr of FY27 transactions with TCS** (sales ₹4,750 Cr) and ₹460 Cr with Tata Semiconductor Assembly & Test [V AR AGM notice]. No equity infusion is mentioned in any document.

**(b) Concall/deck KPI table**

| KPI | Q4 FY26 | Q1 FY27 | Q2 FY27 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | 333 | 402 | 406 | deck; screener [V] |
| EBITDA (₹ Cr, company) | n/a | −99 | −108 (Q2 FY26 −293) | deck p.3 [V] |
| PBT / PAT (₹ Cr) | −281 / −211 | −271 / −202 | −277 / −207 | deck; transcript [V] |
| Revenue mix India / Intl | — | ~50 / 50 | 88 / 12 | transcript; deck [V] |
| Order book (₹ Cr) | 1,514 (India 83%) | 1,529 (India 93%) | 2,315 (India 96%) | deck; transcript [V]; Q4 India 83% V-snip |
| Net working capital (₹ Cr) | 4,138 | 4,478 | 4,235 | deck p.4 [V] |
| Net trade receivables (₹ Cr) | 1,905 | 2,232 | 2,042 | deck [V] |
| Inventory (₹ Cr) | 2,438 | 2,358 | 2,314 | deck [V] |
| Cash & equivalents (₹ Cr) | 505 | 589 | 451 | deck [V] |
| Net debt (₹ Cr) | 3,531 | 4,277 (gross 4,866) | 4,384 | deck; transcript [V] |
| Patents (cumulative filings / granted) | 676 / 371 | 722 / 380 | 748 / n.a. | AR; transcript; deck [V] |
| Order intake (₹ Cr) [E] | — | ~417 | ~1,192 | OB_t − OB_t-1 + revenue |

**(c) Five-year history (screener consolidated, ₹ Cr) [V]**

| FY | Revenue | OP | OPM | Interest | Dep. | PAT | ROCE | Debtor days | WC days |
|---|---|---|---|---|---|---|---|---|---|
| FY22 | 551 | −80 | −15% | 3 | 77 | −63 | −7% | 189 | 552 |
| FY23 | 920 | 14 | 1.5% | 15 | 122 | −36 | −1% | 198 | 491 |
| FY24 | 2,471 | 266 | 11% | 48 | 182 | 63 | 4% | 208 | 206 |
| FY25 | 8,923 | 1,258 | 14% | 252 | 353 | 447 | 15% | 182 | 56 |
| FY26 | 1,103 | −682 | −62% | 303 | 403 | −909 | −15% | 1,077 | 211 |
| TTM Sep-26 | 1,447 | −459 | −32% | 315 | 391 | −817 | — | — | — |

FY25 includes **₹467.70 Cr of PLI** in other operating revenue; FY26 has none [V AR note 42]. Excluding PLI, FY25 revenue from sales was ~₹8,455 Cr and the OPM would have been well under 14% [E].

**(d) Eight-quarter trend (screener consolidated, ₹ Cr) [V]**

| Qtr | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 2,642 | 1,907 | 202 | 262 | 307 | 333 | 402 | 406 |
| OP | 372 | 122 | −136 | −294 | −134 | −118 | −100 | −107 |
| OPM | 14% | 6% | −67% | −112% | −44% | −36% | −25% | −26% |
| Interest | 63 | 71 | 75 | 84 | 72 | 72 | 85 | 87 |
| Depreciation | 111 | 103 | 96 | 101 | 104 | 101 | 94 | 91 |
| PAT | 166 | −72 | −194 | −307 | −197 | −211 | −202 | −207 |

**(e) Annual-report findings (FY26 AR)**
- **PLI (note 42):** Tejas "did not meet the minimum threshold requirements" for FY26, so no incentive was booked. FY25 had booked ₹467.70 Cr. The PLI/DLI receivable of ₹278.78 Cr at Mar-25 was nil at Mar-26 (collected) [V]. Tejas therefore drops out of the telecom-PLI story from FY26.
- **Related parties:** FY26 sales to TCS were only **₹28.29 Cr**. The BSNL campaign billing ended in FY25, so FY26 revenue was mostly non-BSNL. The FY27 TCS ceiling of ₹4,750 Cr of sales is 435% of FY26 turnover [V].
- **Contingent liabilities (note 32.1):** excise ₹46.24 Cr, customs ₹33.44 Cr, income tax ₹9.73 Cr, GST ₹6.46 Cr (~₹96 Cr in total). Old income-tax s.276C proceedings (AY2012-13 to 2018-19) are under appeal in the Karnataka HC. Capital commitments for intangibles fell to ₹118.09 Cr from ₹437.44 Cr: **R&D capitalisation is slowing** [V; E].
- **Risk read:** at −₹108 Cr quarterly EBITDA plus ~₹87 Cr of interest, cash burn is ~₹200 Cr a quarter before working capital. Equity fell from ₹3,847 Cr (Mar-25) to ₹2,527 Cr (Sep-26, screener). Net debt/equity is ~1.7× (company net debt ₹4,384 Cr ÷ equity ₹2,527 Cr) [E].

### 4.2.3 Sterlite Technologies / STL (STLTECH · 532374) — Q2 FY27 results due 23-Oct-2026 (board and call confirmed in BSE `7ebac731`)

**(a) Management-commentary digest** (MD Ankit Agarwal; Group CFO Ajay Jhanjhari)
- **"Lakshya" (investor & analyst meet, 3-Sep-26).** FY29 revenue **₹20,000 Cr** (FY26 ₹4,750 Cr, ">4× in 3 years") and **EBITDA margin 27%+** (FY26 13.2%, "+1,380 bps"). The drivers: optical TAM expansion (fibre moving inside the rack); customer co-development; integrated connectivity; and technology (hollow-core and multi-core fibre, **13,000-fibre-count cable**, in-house co-packaged/near-packaged optics). Open order book **> US$2 bn**. [V]
- **Capex.** **~₹1,000 Cr a year for three years**, raising preform, fibre and cable capacity **by 50%**. Plus a greenfield optical-connectivity facility in India and ~2% of revenue on innovation. CRISIL (two days earlier) modelled ₹700–800 Cr for FY27 and ₹1,500–2,000 Cr over 3 years, "met comfortably through accruals". **Lakshya implies ~₹3,000 Cr, above CRISIL's case** [V; E].
- **AI content per rack** (management's figures): legacy ~1,000 fibres/rack; Hopper ~4,000; Blackwell ~16,000; **Vera Rubin ~64,000 (64×)**. DC interconnect paths scale as n(n−1)/2. India DC capacity 1.5 GW → 10 GW by 2030 (46% CAGR). "Supplying almost all major hyperscalers." [V]
- **Near term (Q1 deck, 24-Jul-26).** Attach rate (connectivity ÷ OFC revenue) 15% (FY26) → 16% (Q1) → **>20% from Q2, 25%+ by Q4 FY27**. Ex-China OFC share 8% → 9%. "Net debt-free." [V] The FY26 AR (written ~May-26) guided **~20% EBITDA by Q4 FY27 "as total manufacturing capacity utilisation reaches the 70%+ milestone"**, DC + enterprise to **30% of revenue in 12–18 months**, and interest outlay down a further 5–6% [V]. Q1 already beat the margin (20.8%) and DC (21%) markers.
- **Credit view (CRISIL 1-Sep-26).** Upgraded to **AA/Stable**. FY27 revenue **>₹8,000 Cr** at **>20%** margin. US tariff cut to 10% in Feb-2026 and the rising US share support margins. Interest cover 2.9× (FY26) → >9×. "No support is extended to group entities apart from subsidiaries." Key monitorables: tariffs, global supply easing, DC ramp, and the **Prysmian verdict** [V].
- **Q2 FY27 setup [E]:** company-flagged executable book of **₹2,228 Cr in Q2** vs Q1 revenue ₹1,910 Cr. That implies Q2 revenue of ~₹2,000–2,250 Cr if conversion runs like Q1, before any LTSA contribution (the LTSA allocation runs CY26–CY30).

**(b) Concall/deck KPI table**

| KPI | Q1 FY26 | Q4 FY26 | Q1 FY27 | Source |
|---|---|---|---|---|
| Revenue (₹ Cr) | 1,019 | 1,441 | 1,910 | Q1 results [V] |
| EBITDA (₹ Cr; company) | 140 (13.7%) | 218 (15.1%) | 397 (20.8%) | deck p.26 [V] |
| Optical Networking revenue / EBITDA | 961 / 137 | 1,378 / 202 | 1,842 / 401 (21.8%) | segment note [V] |
| Digital & Technology Solutions revenue / EBITDA | 64 / 1 | 69 / 0 | 72 / 2 | segment note [V] |
| Depreciation / finance cost | 77 / 50 | 77 / 63 | 85 / 55 | deck [V] |
| PAT (₹ Cr) | 10 | 59 | 197 | deck [V] |
| Order book (₹ Cr) | — | 7,687 | 18,618 | deck p.25 [V] |
| Geography: Americas / Europe / RoW | FY26: 39 / 39 / 22 | — | 54 / ~25 / ~22 | deck p.24 [V layout-read] |
| Segment: DC & Cloud / Large Enterprise / Telecom | FY26: ~1 / 17 / 82 | — | 21 / 18 / 61 | deck p.24 [V]; CRISIL confirms 21% vs 1% |
| Attach rate | FY26 15% | — | 16% | deck p.20 [V] |
| Ex-China OFC share | FY26 8% | — | 9% | deck p.20 [V] |
| Net debt (₹ Cr) | — | 1,041 (CRISIL) / 1,128 (primer) | −483 (net cash); cash ~2,400 | deck; CRISIL [V] |
| Segment assets, Optical Networking (₹ Cr) | 4,523 | 5,399 | 5,947 | segment note [V] |

**(c) Five-year history (screener consolidated, ₹ Cr) [V]** — FY25 onward continuing operations (Global Services demerged); FY24 and earlier include it.

| FY | Revenue | OP | OPM | Interest | Dep. | PAT | ROCE | Debtor days | WC days |
|---|---|---|---|---|---|---|---|---|---|
| FY22 | 5,437 | 665 | 12% | 238 | 308 | 45 | 8% | 115 | −29 |
| FY23 | 6,925 | 895 | 13% | 311 | 309 | 127 | 11% | 96 | −46 |
| FY24 | 4,083 | 471 | 12% | 293 | 314 | −57 | 3% | 143 | −87 |
| FY25 | 3,996 | 416 | 10% | 241 | 316 | −123 | 3% | 75 | −63 |
| FY26 | 4,745 | 569 | 12% | 224 | 313 | 56 | 8% | 82 | −30 |
| TTM Jun-26 | 5,642 | 829 | 15% | 229 | 321 | 243 | — | — | — |

Company-basis FY26: EBITDA ₹628 Cr (13.2%); Optical Networking revenue ₹4,486 Cr / EBITDA ₹606 Cr [V segment note].

**(d) Eight-quarter trend (screener consolidated, ₹ Cr) [V]** (Q2 FY27 due 23-Oct)

| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,074 | 998 | 1,052 | 1,019 | 1,034 | 1,257 | 1,441 | 1,910 |
| OP | 117 | 106 | 125 | 132 | 129 | 120 | 195 | 385 |
| OPM | 11% | 11% | 12% | 13% | 12% | 10% | 14% | 20% |
| Interest | 62 | 58 | 65 | 50 | 55 | 56 | 63 | 55 |
| PAT | −14 | −24 | −40 | 10 | 4 | −17 | 59 | 197 |

**(e) Annual-report and filing findings**
- **Capacity:** the FY26 AR gives **no mn-fkm capacity figure**. It says only that ~20% EBITDA arrives "as total manufacturing capacity utilisation reaches the 70%+ milestone", i.e. **FY26 utilisation was below 70%** [V]. Plants (AR): Shendra (glass/preform + fibre draw), Waluj, Aurangabad; Silvassa/Rakholi and Dadra (cable); **Dello (Brescia), Italy**; **Lugoff, South Carolina** (cable & interconnect) [V]. "~50 mn fkm" stays unverified (gap 4 is half-closed).
- **Prysmian litigation (NOT in Parts 1–3; material).** Prysmian Cables & Systems USA sued STL's US subsidiary Sterlite Technologies Inc. (STI) and an employee in the US District Court for South Carolina (non-compete, trade secrets). On **9-Aug-2024 a jury awarded $96.5 mn against STI** ($0.2 mn against the employee). On **29-Aug-2025 the court confirmed a total award of $101.25 mn** including $4.75 mn of fees (pre-judgement interest denied, per CRISIL). STI has **appealed to the 4th Circuit and deposited a $41.53 mn bond**. Not provided for. At ₹94.9 the award is **~₹960 Cr, ≈2× STL's Jun-26 net cash** [V AR note 37; CRISIL; E].
- **Fujikura UK patent case** (low-fibre-count air-blown cables): under appeal, no injunction (AR). The Q1 deck claims a "decisive win in Europe patent dispute" [V].
- **Other contingents (note 37, standalone):** tax ~₹21 Cr; bank LC claim ₹25 Cr (in litigation since 2010); ₹114 Cr corporate guarantee to income-tax authorities (FY2003-04) for group companies, backed by a Vedanta Inc. (ex-Volcan) counter-guarantee. Contingents of the demerged Global Services Business are reimbursable by STL Networks [V].
- **Related parties (note 47):** immediate parent **Twin Star Overseas (Mauritius)**; ultimate parent **Vedanta Incorporated, Bahamas (ex-Volcan)**, beneficially owned by the Anil Agarwal Discretionary Trust. Royalty expense ₹9 Cr (₹11 Cr), royalty income ₹35 Cr. Loans to subsidiaries ₹2,007 Cr given / ₹1,884 Cr repaid. **Corporate guarantees given ₹392 Cr in FY26, of which ₹347 Cr appears in a non-subsidiary related-party column** (likely STL Networks; column mapping inferred) [V; FLAG].
- **Promoter warrants:** **4,53,00,000 warrants to Twin Star at ₹110** (allotted 30-Mar-26). ₹27.5 paid (₹124.58 Cr); ₹82.5 per warrant (~₹373.7 Cr) is due within 18 months. Total ~₹498 Cr; objects: debt ₹373.73 Cr, GCP ₹124.57 Cr; CARE is the monitoring agency [V]. **With the ₹1,500 Cr QIP, ~₹2,000 Cr of equity was raised in 2026** [E].
- **Ratings:** CRISIL AA/Stable (upgraded 1-Sep-26; ₹481 Cr of bank lines and ₹700 Cr of CP withdrawn); ICRA AA (Stable) (upgraded ~Jul-26) [V].
- **LTSA (1-Oct-26):** with "a hyperscale partner" via a wholly owned subsidiary. **Potential value** ~US$1.2 bn "based on prevailing selling prices". Annual CY26–CY30 volume allocations; POs released periodically; **reciprocal, capped liabilities if either side falls short**. It is a capacity reservation, not a firm order [V].

### 4.2.4 ITI Ltd (ITI · 523610) — Q2 FY27 board date still not announced (latest BSE items: C&AG auditor appointment 19-Oct; AGM book closure 29-Oct to 4-Nov; **76th AGM on 4-Nov-2026**) [V AR notice; screener]

**(a) Management-commentary digest** (no concall; source: FY26 AR Directors' report and replies to auditors)
- **Going concern rests on five pillars** (company reply to the auditor): the ₹18,637 Cr order book; **unbilled revenue of ₹2,241.11 Cr** to be billed and realised within 12 months; faster recovery of billed dues; sanctioned working-capital lines; continued Government of India support; and **"further monetization of non-core land assets"** [V]. More land sales are policy.
- **Order book:** ~₹18,637 Cr including the BharatNet-III AWO, BSNL 4G rollout POs and a **₹4,191.14 Cr LoI for solar LED street lights** [V]. In FY26 ITI booked ₹504.68 Cr of BharatNet-III revenue (HP, WB, A&N, NE-II) [V]. Q1 FY27 book ₹13,882.81 Cr [V-snip]; see S25 for the likely reconciliation.
- **Turnover:** FY26 "operational turnover" (product-wise) ₹2,464.77 Cr vs ₹4,323.37 Cr; consolidated revenue ₹2,183.72 Cr (−40%) [V]. 4G cabinet/RAN contract manufacturing collapsed to ₹0.38 Cr (₹42.78 Cr), so ITI's BSNL-4G manufacturing role in FY26 was negligible [V].
- **Wins listed in the AR:** 4G LTE-R trials for South Central Railway (₹5.24 Cr RDSO + ₹2.16 Cr RailTel); defence/government orders ~₹29.69 Cr; EVMs. After year-end: **BSNL 4G add-on ₹856.39 Cr for 7,613 West-Zone sites (16-Jul-26)** [V-snip].
- **Government support:** DoT soft loan ₹300 Cr; ₹165 Cr from DoT for wage payments; capex grant ₹59 Cr converted to equity at ₹300.25 per share (30-Jul-25) under the 08-Jan-2013 BIFR order [V].

**(b) KPI table (FY26 AR; Q1 FY27 secondary)**

| KPI | FY25 | FY26 | Q1 FY27 | Source |
|---|---|---|---|---|
| Consolidated revenue (₹ Cr) | 3,616.42 | 2,183.72 | 425.03 | AR [V]; Q1 [V-snip] |
| PBT/PAT (₹ Cr) | (233.15) | 292.79 (incl. ₹832.19 Cr land gain) | (32.25) | AR [V]; Q1 [V-snip] |
| Ex-land FY26 result (₹ Cr) | — | ≈ −539 [E] | — | AR inputs |
| Order book (₹ Cr) | — | 18,637 | 13,883 | AR [V]; V-snip |
| Unbilled revenue (₹ Cr) | — | 2,241.11 | — | AR [V] |
| Land sale: consideration / received by 31-Mar / gain (₹ Cr) | — | 914.31 / 884.20 / 832.19 | deed registered 2-Jul-26 | AR [V] |
| Borrowings repaid after the sale (₹ Cr) | — | — | 902.81 (Jul-26) | sahi [V-snip] |
| Shareholding: President / SNIF / Governor of Karnataka / public | — | 89.99 / 7.88 / 0.03 / ~2.1 | — | AR [V] |
| Rating | — | — | India Ratings IND BB+/Positive (₹2,900 Cr) | V-snip (page did not render) |

**(c) Five-year history (screener consolidated, ₹ Cr) [V]**

| FY | Revenue | OP | OPM | Other inc. (incl. exceptional) | Interest | PAT | ROCE | Debtor days |
|---|---|---|---|---|---|---|---|---|
| FY22 | 1,861 | 107 | 6% | 255 | 192 | 120 | 8% | 536 |
| FY23 | 1,395 | −154 | −11% | 53 | 210 | −360 | −4% | 635 |
| FY24 | 1,264 | −318 | −25% | 43 | 241 | −569 | −8% | 709 |
| FY25 | 3,616 | −60 | −1.7% | 138 | 224 | −215 (AR: −233) | −1% | 403 |
| FY26 | 2,184 | 64 | 2.9% | 503 | 217 | 293 | 2% | 486 |
| TTM Jun-26 | 2,111 | 53 | 2.5% | 502 | 176 | 324 | — | — |

**(d) Eight-quarter trend (screener consolidated, ₹ Cr) [V]** (Q2 FY27 not yet announced)

| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,016 | 1,035 | 1,046 | 498 | 543 | 515 | 628 | 425 |
| OP | −9 | −11 | −28 | −8 | −1 | 25 | 27 | 2 |
| OPM | −0.9% | −1.0% | −2.7% | −1.5% | −0.2% | 4.9% | 4.3% | 0.4% |
| Other income | 14 | 38 | 98 | 9 | 13 | 8 | 472 | 8 |
| Interest | 62 | 64 | 45 | 51 | 53 | 48 | 45 | 30 |
| PAT | −70 | −49 | −4 | −64 | −54 | −25 | 436 | −32 |

**(e) Annual-report findings (FY26 AR)**
- **Auditor (B.K. Ramadhyani & Co. LLP), observation 1:** at 31-Mar-26 the balance consideration (₹30.11 Cr) was outstanding, the sale deed was unexecuted, possession was "pending" and the bank's mortgage release had not been received, so **"transfer of control … was not satisfied"** under Ind AS 16. Without the sale, non-current assets held for sale would be ₹288.61 Cr, current liabilities **₹884.20 Cr higher** (the cash received would be an advance), and the loss ₹832.19 Cr larger. ITI replies that DoT/MoF/DPE approvals, the agreement and the handover letter put control in FY26 [V].
- **Going concern:** the auditor's paragraph says that losses, current liabilities exceeding current assets, and the qualifications "may cast a doubt on the ability of the Company to continue as a going concern" [V]. **This sits on top of the disclaimer.** The writer should say both.
- **Land bank and disputes:** Palakkad 77 acres (₹60.90 Cr book) resumed by the Kerala government, under Supreme Court adjudication. 12.15 acres in BMTC's possession pending GoI approval of a lease. A railway land acquisition at ₹11.72 Cr guideline value (SWR) [V]. These are the "non-core land" pipeline and its frictions.
- **Receivables ageing (standalone, 31-Mar-26):** undisputed trade receivables considered good total **₹2,905.68 Cr**: <6 months ₹268.52 Cr; 6–12 months ₹110.18 Cr; 1–2 years ₹1,134.14 Cr; 2–3 years ₹153.66 Cr; **>3 years ₹1,239.18 Cr (43%)** [V]. Over 80% of ITI's receivables are more than a year old.
- **Plants:** Bengaluru, Palakkad, Raebareli, Naini, Mankapur, Srinagar [V]. Shareholders 1.60 lakh individuals hold 1.90% [V].
- **Mini-Ratna:** not mentioned anywhere in the AR [V, absence]. The primer's label stays unverified.

---

## 4.3 Industry data upgraded from primary sources (chart-ready)

**P1. India's telecom trade by HS code, calendar years (US$ mn; India as reporter; UN Comtrade public API, fetched 22-Oct-26) [V]**

| HS | Description | CY2024 imports | CY2024 exports | CY2025 imports | CY2025 exports | CY25 export YoY |
|---|---|---|---|---|---|---|
| 8517 | Telephone sets & network apparatus (total) | 17,387.7 | 21,757.6 | 21,775.0 | 33,738.7 | +55% |
| 851713 | Smartphones | 502.2 | 20,139.4 | 650.9 | 30,134.0 | +50% |
| 851762 | Machines to receive/convert/transmit data (switches, routers, base stations, CPE) | 3,312.3 | 905.9 | 3,835.8 | 1,455.3 | +61% |
| 851771 | Antennas and reflectors | 173.6 | 101.0 | 149.3 | 92.0 | −9% |
| 851779 | Parts of 8517 | 13,125.6 | 530.9 | 16,807.1 | 2,004.3 | +278% |
| 854470 | Optical-fibre cables (individually sheathed fibres) | 27.8 | 56.5 | 37.7 | 70.0 | +24% |
| 900110 | Optical fibres, bundles and cables (non-8544) | 73.5 | 293.0 | 94.1 | 442.8 | +51% |
| **900110 + 854470** | **Fibre & cable** | **101.3** | **349.5** | **131.8** | **512.8** | **+47%** |
| — of which to USA (842) | | | 80.4 | | 214.3 | +167% |
| — of which to China (156) | | | 0.9 | | 24.6 | — |

- **Read-across:** India is a **net exporter of fibre and cable** (CY25 exports 3.9× imports) and a **net importer of network electronics** (851762 imports 2.6× exports; parts 851779 $16.8 bn, mostly phone parts [E]). The "telecom" surplus in HS 8517 is entirely smartphones.
- **Units/caveats:** calendar years, not FY. 2026 data are not yet in the annual series. Indian OFC is often filed under 9001.10, not 8544.70, so use the sum. At ₹88/$ (CY25 average [K]) the CY25 fibre & cable exports are ~₹4,500 Cr [E]. HFCL's FY26 exports alone were ₹2,047 Cr. Part 1's "₹8,000–12,000 Cr annualised" can only describe a **2026 run-rate** (HFCL alone exported ~₹1,600 Cr in Q2 FY27 at ~63% of revenue [E]), not CY25 actuals.
- **FY26 (Apr–Mar) HS data** would need commerce.gov.in TradeStat, which runs on query forms; not attempted [gap].

**P2. EU trade remedies on Indian optical-fibre cable (CN ex 8544 70 00), % of CIF EU-frontier price [V Reg 2025/1135; 2024/3014 as amended; 2026/698]**

| Exporter | ADD (Dec-2024 original) | ADD (from 12-Jun-2025) | CVD (from 12-Jun-2025) | Combined now |
|---|---|---|---|---|
| HFCL Ltd; HTL Ltd | 0% (not in ADD table) | 0% | 8.1% | **8.1%** |
| Sterlite Technologies; Sterlite Tech Cables Solutions | 11.4% | 8.8% | 3.7% | **12.5%** |
| Birla Cable; Universal Cables; Vindhya Telelinks | 6.9% | 2.9% | 5.4% | **8.3%** |
| Other cooperating (Aberdare, Apar, UM Cables, ZTT India; Aksh, Polycab in the ADD annex) | 9.0% | 4.4% | 5.8% | **10.2%** |
| All other Indian imports | 11.4% | 4.5% | 8.1% | **12.6%** |

ADD rates rise automatically if the CVD is modified or removed (new Art 1(7) of 2024/3014). Reg 2026/698 (Mar-2026) refunds any combined duty paid in excess since 12-Jun-2025. Part 1's ADD column was correct for Dec-2024 to Jun-2025 only.

**P3. BSNL indigenous 4G sites (installed / on air)**

| As of | Installed | On air | Source |
|---|---|---|---|
| Oct-2025 | 97,068 | 93,511 | LS reply [V-snip] |
| 15-Jan-2026 | 97,672 | 95,511 | **PIB 2223942 (RS starred Q73, 5-Feb-26) [V]** |
| 28-Feb-2026 | 97,906 | 96,103 | LS reply [V-snip] |
| ~30-Jun-2026 | ~98,550 | ~97,174 | indiantelevision [V-snip] |
| 31-Jul-2026 | 98,557 | 97,213 | MoC data (Part 1) [V-snip] |
| Add-on ordered Jul–Aug 2026 | 26,238 sites (TCS ~18,625–18,685; ITI 7,613) | — | Tejas deck (18,685) [V]; press [V-snip] |

BSNL subscribers 8.86 cr (Mar-24) → 9.28 cr (Dec-25) [V PIB]. "5G upgradable from technology perspective"; **no 5G order in any primary document** [V, absence].

**P4. BharatNet and policy series [V PIB 2206477 unless noted]**
- BharatNet Phase I complete (Dec-2017; >1 lakh GPs). As of Oct-2025: **6,94,711 km OFC laid; 2,09,809 GPs service-ready on OFC + 5,034 on satellite = 2,14,843 GPs**. HFCL AR: >2.17 lakh GPs service-ready (Feb-2026) [V]. PIB factsheet (Jun-2026): 2.21 lakh GPs service-ready; >8.5 lakh route-km of OFC [V-snip].
- **Amended BharatNet: 2.65 lakh GPs; outlay ₹1.39 lakh Cr** [V]. The exact ₹1,39,579 Cr and 16 packages remain V-snip (USOF page 503). Known Phase-III awards [V-snip]: Polycab Pkg 4 ₹4,099 Cr + Pkg 7 (₹5,649.36 Cr total); GR Infra L1 Pkg 16 ₹867.54 Cr; ITI consortium L1 on three packages (₹4,559 Cr in one report; ₹3,022 Cr middle-mile in another); ITI's AWOs for Pkgs 8, 9, 15 total ₹6,956 Cr (Pkg 15 NE-II ₹1,901 Cr); HFCL consortium UP E + W ~₹6,925 Cr (L1); the tender drew 187 bids from 21 bidders; Tejas is router OEM on 7 of the first 12 packages.
- **Telecom & networking PLI:** outlay **₹12,195 Cr** (from Apr-2021); cumulative investment >₹4,646 Cr, sales >₹96,240 Cr, exports ₹19,240 Cr, jobs 29,574 (30-Sep-25) [V]. Disbursed ₹1,162 Cr to Mar-25 (21 of 42 firms) [V-snip]; ~₹1,586 Cr cumulative to ~Jul-25 [V-snip]. **Tejas booked no PLI for FY26 (missed threshold) after ₹467.70 Cr in FY25** [V].
- 5G: 5.08 lakh 5G BTS; national OFC 42.36 lakh route-km (2025) [V].

**P5. Indian telco capex (₹ Cr)**

| Telco | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Bharti Airtel (consolidated) | — | 48,927 | 47,522 (Q4 16,066; India Q4 13,488) | Outlook Business [V-snip] |
| Reliance Jio (cash capex) | 53,510 | — | 34,184 | ipocentral review of Jio Platforms offer document [V-snip] |
| Vodafone Idea | — | — | Q1 FY27 1,930; plan ₹45,000 Cr FY27–29 | Part 1 [V-snip] |
| RIL group (all businesses) | — | — | 1,44,271 | Outlook Business [V-snip] |

Jio's cash capex fell 36% FY24 → FY26: the private-telco pull on domestic fibre and gear is now lower than in the 5G peak [V-snip; E].

**P6. Capacity and capex plans (updated)**

| Player | Fibre (mn fkm/yr) | Cable (mn fkm/yr) | Preform | Capex | Source |
|---|---|---|---|---|---|
| HFCL (Oct-26 plan) | 28 → 43.1 (Jul-28) | 39 → 62 (Jul-28) | 0 → 600 MT/yr, ₹1,250 Cr (Oct-28, MP) | ~₹1,800 Cr total; FY27 ₹640 Cr; FY28 ₹615 Cr (Jul view) | Q2 deck; Q1 call [V] |
| HFCL (Jul-26 AR plan) | 28 → 33.9 → 38.5 | 34 → 42.36 → 56.36 | 300 MT, ₹580 Cr | — | AR; Q1 call [V] |
| STL | not disclosed; +50% planned | not disclosed; +50% | in-house; +50% | ~₹1,000 Cr/yr × 3 (Lakshya) vs CRISIL ₹700–800 Cr FY27 | Lakshya; CRISIL [V] |
| STL utilisation | <70% in FY26 (implied); 70%+ targeted by Q4 FY27 | | | | AR [V] |
| Corning | — | — | — | ~$2 bn 2026 capex for Optical Communications | [V-snip] |

**P7. Global lens, primary-source upgrades**

| Company | Period | Revenue | Margin | Growth | Source |
|---|---|---|---|---|---|
| YOFC | H1-2026 | RMB 9,809.0 mn (~₹12,850 Cr [E @13.1]) | GM 53.4% (28.3%); optical-communication products GM 63.11% | Revenue +53.6%; PAT RMB 2,924.5 mn (+889%) | HKEX interim [V] |
| YOFC optical communication products | H1-2026 | RMB 6,126 mn | GM 63.11% | +59.2% | [V] |
| Prysmian group | Q2-2026 | €6,021 mn | adj. EBITDA €730 mn (15.4%) | +9.4% organic | press release [V] |
| Prysmian Digital Solutions | Q2-2026 | — | adj. EBITDA €122 mn, 23.8% (16.8%) | +18.0% organic | [V] |
| Corning Optical Communications | Q2-2026 | $2.07 bn | — | +32%; Enterprise +65% | [V-snip]; Q3 not yet reported |
| Fujikura | FY Mar-26 / Q1 FY Mar-27 | — | OP ~¥188.7 bn / ¥104.8 bn (+155%); FY guide raised to ¥432 bn | | [V-snip] |
| HFCL | Q2 FY27 | ₹2,541.79 Cr | EBITDA 25.89% | +143.6% | [V] |
| STL | Q1 FY27 | ₹1,910 Cr | EBITDA 20.8% | +87% | [V] |

- YOFC says both **volume and average unit price** rose. It quotes CRU's **data-centre fibre demand CAGR of 20.74% for 2025–30** (DC >50% of global fibre demand by 2030) vs **2.47% for telecom** [V].
- **Margin gap:** YOFC's gross margin (53.4%) sits above STL's Q1 gross margin (49.6%, Arihant [V Part 1]). Indian EBITDA margins (20–26%) are at or above Prysmian DS (23.8%) [E].
- **China price points** [V-snip, C114 citing CRU]: G.652.D spot ¥83.4/fkm (Mar-26) → **¥96.8/fkm (Aug-26, tax incl.)**. The China Mobile 2026–27 tender implies ~¥81.0/fkm. China Telecom's first 2026–27 outdoor-cable round drew no bidders.

**P8. Company-reported order books (₹ Cr; primary unless noted)**

| Company | Jun-25 | Mar-26 | Jun-26 | Sep-26 |
|---|---|---|---|---|
| HFCL | 10,480 (CARE) | 21,206 | 26,665 | 28,911 |
| STL | — | 7,687 (deck) / ~7,309 (CRISIL) | 18,618 | Q2 due 23-Oct |
| Tejas | — | 1,514 | 1,529 | 2,315 |
| ITI | — | 18,637 (incl. ₹4,191 Cr solar LoI) | 13,883 [V-snip] | Q2 not announced |

---

## 4.4 Gap log (§H items and the brief's gap list)

| # | Gap | Status | Source / what was tried |
|---|---|---|---|
| H1 | India import bill by HS (8517, 8544 70, 9001 10) | **Filled (calendar years)**: see P1 | UN Comtrade public API [V]. FY (Apr–Mar) basis still open: commerce.gov.in TradeStat is form-driven; not attempted |
| H2 | India telecom equipment market size | **Still open** | No primary estimate found. Proxy [E]: network-gear imports $3.8 bn (851762, CY25) plus domestic PLI sales (₹96,240 Cr cumulative over ~4.5 yrs ≈ ₹21,000 Cr/yr [E]) |
| H3 | PLI disbursals FY26/FY27; ₹12,195 Cr vs ₹4,115 Cr | **Partly filled** | ₹12,195 Cr outlay [V PIB]; ₹4,115 Cr = "earmarked/committed" incentive [V-snip]; disbursal ₹1,162 Cr (Mar-25) and ~₹1,586 Cr (~Jul-25) [V-snip]. No FY26 or FY27 total in any primary document found |
| H4 | STL fibre capacity and utilisation | **Half filled** | Utilisation <70% FY26, 70%+ targeted by Q4 FY27 [V AR]; +50% capacity plan [V]; mn-fkm figure not disclosed in the AR, deck or CRISIL |
| H5 | HFCL realisation/fkm, US share, net debt | **Filled** | $18–28/fkm [V call]; North America ~₹1,435 Cr ≈ 29% of FY26 revenue [V CARE]; net debt ~₹1,245 Cr [V deck] |
| H6 | BharatNet ABP 16-package award list | **Still open (partial)** | USOF 503; eparlib connection reset; partial list from secondary sources (P4) [V-snip] |
| H7 | US AD/CVD on Indian OFC; STL US plant capacity | **Still open (no evidence of any US case)** | Searches found none; CRISIL [V] mentions only US tariffs (10%). STL Lugoff plant confirmed [V AR]; capacity not disclosed |
| H8 | EU CVD rates by company | **Filled** | Reg 2025/1135 + 2026/698 [V] (P2) |
| H9 | BSNL 5G order; BSNL receivables owed to vendors | **5G: none (absence confirmed in all docs). Receivables: partly** | Tejas net receivables ₹2,042 Cr (Sep-26), largely BSNL acceptance-linked [V]; ITI unbilled ₹2,241 Cr and receivables ₹2,906 Cr, 87% >1 year old [V]; BSNL's own payables not found |
| H10 | Jio/Airtel FY26 capex | **Filled at V-snip** | Airtel ₹47,522 Cr; Jio cash capex ₹34,184 Cr (P5). Company investor decks not fetched |
| H11 | Tejas Q2 EBITDA, segment split, net debt | **Filled except segments** | EBITDA −₹108 Cr; net debt ₹4,384 Cr; India/intl revenue mix 88/12 [V]. Tejas declines to give a wireless/wireline split (Q1 call) [V] |
| H12 | ITI order-book drop; 7.88% holder; Mini-Ratna | **7.88% filled (SNIF) [V]; drop explained by inference [E]; Mini-Ratna not in the AR** | ITI AR |
| H13 | YOFC/Fujikura/Corning/Prysmian 2026 | **YOFC, Prysmian filled [V]; Fujikura V-snip; Corning Q3 not yet reported** | HKEX; Prysmian; search |
| H14 | HFCL Q1 FY27 board date | **Filled: 22-Jul-2026** | Q1 transcript [V] |
| H15 | Conflicts | **Mostly resolved** | STL EBITDA (basis, S10); PAL rupees (S12); ITI FY25 PAT (S26); ITI ₹914 Cr vs ₹832 Cr (consideration vs gain, S24). **Still open:** HFCL Q2 PAT ₹362.92 Cr (Univest) — not standalone (standalone PBT is ₹358.51 Cr); basis unknown |
| B1 | Tejas TCS LoI ₹1,537 Cr | Sites V (18,685); value V-snip | Tejas Q2 deck; the scanned LoI disclosure not located |
| B2 | ITI Q1 land/debt facts | Land V (AR); ₹902.81 Cr repayment V-snip | ITI Q1 results PDF not linked on screener |
| B3 | "BE" series tag | **Not confirmed — drop** | S32 |
| B4 | Vi ₹45k Cr capex; MFN duty on OFC; Trusted Source dates | Unchanged ([V-snip]/[K]/[K]) | Not re-fetched (budget) |

---

## 4.5 New insights the first pass missed, and new primer issues

**Insights an expert would add**
1. **HFCL's EU edge is mostly gone, and its US edge is unhedged.** Since Jun-2025 HFCL pays **8.1% CVD** into the EU vs STL's combined 12.5%. STL makes in Dello (Italy) and Lugoff (USA); HFCL has **no plant outside India** (non-current assets abroad ₹0.13 Cr). With ~29% of FY26 revenue from North America, HFCL's margin rests on the US tariff staying at ~10% and on BABA-style local-content rules not spreading beyond BEAD [V; E].
2. **STL carries a ~₹960 Cr US lawsuit that the dossier never mentioned.** The Prysmian verdict against its US subsidiary ($101.25 mn confirmed, on appeal, $41.53 mn bond posted) equals roughly twice STL's Jun-26 net cash. The plaintiff is also a direct competitor in North American cable. CRISIL lists it as a monitorable [V].
3. **HFCL's cash story is better than Part 1 said, and its real problem is the turnkey book.** H1 FY27 CFO was +₹455 Cr, not ₹140 Cr. Net debt stayed ~₹1,245 Cr while revenue doubled. But ~₹2,545 Cr of net capital sits in turnkey/EPC, which lost ₹210 Cr at PBIT in H1. The EY-advised Restructuring Committee and the "distinct working-capital profile" language point to a possible **separation of the EPC/O&M business (and/or defence)**. That is a 2027 catalyst the writer should flag, not predict [V; E].
4. **The capacity race has started, and its arrival dates line up with the shortage's end.** HFCL doubled its plan in one quarter (preform 300 → 600 MT; cable 56 → 62 mn fkm; all due Jul–Oct 2028). STL plans +50% and ~₹3,000 Cr over 3 years. Corning plans ~$2 bn of 2026 capex. YOFC's volumes and prices are both rising, and it raised H-share equity. TrendForce sees the shortage lasting "to at least 2028", which is exactly when the new Indian capacity lands. The cycle risk is timing, not demand [V; E].
5. **Tejas's refill is larger than the ₹1,537 Cr LoI, but lower-margin and later.** BSNL's add-on totals ~26,238 sites, and Tejas supplies radios for ITI's 7,613 as well. Tejas sought approval for up to **₹4,750 Cr of FY27 sales to TCS**. A high-margin 8-year AMC annuity on the 1-lakh-site base is due to start and is not in the order book. Against that: PLI income has gone (₹468 Cr in FY25 → nil), net debt is ₹4,384 Cr (~1.7× equity), and no Tata equity support is on record [V; E].
6. **ITI's land cash arrived in FY26, and the receivables are the real asset-quality issue.** ₹884 Cr of the ₹914 Cr was in hand by 31-Mar-26, so the "July completion" was legal, not cash. 87% of ₹2,906 Cr of receivables are over a year old (43% over 3 years). ₹2,241 Cr more is unbilled. The auditor added a going-concern doubt paragraph to the disclaimer, and management lists further land sales as a going-concern pillar. The 7.88% non-promoter government block is SNIF, so effective state ownership is 97.9% [V].
7. **India's trade data show a fibre surplus and an electronics deficit.** India exported $513 mn of fibre and cable in CY25 (+47%; the US share up from 23% to 42%) against $132 mn of imports. In network electronics (851762) India imported 2.6× what it exported. The "telecom equipment" export boom in HS 8517 is phones [V].
8. **Fibre-demand numbers are not comparable across sources.** TrendForce gives 577 mn fkm; the source YOFC cites gives >670 mn fkm; HFCL's AR gives 750 mn fkm. Use a range and name the source. CRU's split (DC fibre +20.7% CAGR vs telecom +2.5%, 2025–30) is the cleaner structural statistic [V].

**New primer issues (append to primer-issues.md)**

- **hfcl.html — EU duty advantage overstated (and Part 3 §3.4 repeats it):** if the primer (or a fix) says "HFCL exempt from EU duties", correct it to **CVD 8.1% (Reg 2025/1135, from 12-Jun-2025); ADD 0%**; STL pays 12.5% combined.
- **hfcl.html — capacity:** use the Oct-2026 plan (OF 28 → 43.1, OFC 39 → 62 mn fkm by Jul-2028; preform 600 MT, ₹1,250 Cr by Oct-2028; ~₹1,800 Cr total). Note the Jul-2026 AR figures (38.5 / 56.36) are superseded.
- **hfcl.html — geography and customers:** FY26 exports ₹2,047 Cr (41.4%), North America ~₹1,435 Cr; RJIL 13% of revenue (63% in FY18); FY27 export share "~63%" (company).
- **hfcl.html — cash flow and debt:** H1 FY27 CFO +₹455 Cr; net debt ~₹1,245 Cr; CARE A/Positive (Jul-26).
- **hfcl.html — strategy:** Restructuring Committee with EY (Jul-26); defence targets ₹500 Cr FY27, ≥₹3,000 Cr FY29; aerospace acquisition closing Q3 FY27; EBITDA >27% by FY29.
- **hfcl.html — remove the "BE/trade-for-trade" idea if it was added from Part 1**; HFCL is in long-term ASM [V-snip].
- **sterlite-technologies.html — Prysmian US verdict:** add the $96.5 mn jury verdict (Aug-2024), $101.25 mn confirmed (Aug-2025), appeal pending, $41.53 mn bond. This is a material contingent liability.
- **sterlite-technologies.html — EU duties:** STL combined ADD 8.8% + CVD 3.7% = **12.5%** (not 11.4%).
- **sterlite-technologies.html — Lakshya targets and ratings:** FY29 ₹20,000 Cr revenue, 27%+ EBITDA; ~₹1,000 Cr/yr capex; CRISIL AA/Stable (1-Sep-26), ICRA AA (Stable). Promoter warrants 4.53 cr at ₹110 (~₹498 Cr) to Twin Star.
- **sterlite-technologies.html — withdraw the Part-3 "award value ₹9,271 Cr" issue:** the company states "US$1.11 billion (₹10,000+ Cr)".
- **sterlite-technologies.html — data-centre mix:** DC & Cloud 21% of Q1 FY27 revenue vs ~1% in FY26.
- **tejas-networks.html — PLI:** FY25 revenue included ₹467.70 Cr PLI; FY26 none (threshold missed). Any PLI narrative must say this.
- **tejas-networks.html — debt and EBITDA:** company net debt ₹4,384 Cr (Sep-26); Q2 EBITDA −₹108 Cr; TCS RPT ceiling ₹4,750 Cr for FY27; AMC over 8 years not in book; patents 748 filed (Sep-26).
- **iti-limited.html — 7.88% holder:** name it — **Special National Investment Fund (SNIF)**; also Governor of Karnataka 0.03% (promoter group).
- **iti-limited.html — land-sale timing and going concern:** ₹884 Cr of ₹914 Cr received by 31-Mar-26; sale deed 2-Jul-26; auditor's going-concern doubt paragraph; receivables 87% >1 year; unbilled ₹2,241 Cr.
- **iti-limited.html — withdraw two Part-3 issues:** FY25 PAT −₹233 Cr is the company's own figure (FY26 AR); "2013 BIFR" refers to the BIFR order of 08-Jan-2013 (soften to a clarification).
- **iti-limited.html — order book:** ₹18,637 Cr included a ₹4,191 Cr solar-LED LoI; that is the likely reason for the fall to ₹13,883 Cr.
- **General (all four):** BSNL 4G count — use the PIB figure with its date (97,672 installed / 95,511 on air, 15-Jan-26) or label the later 97,213 as secondary. PLI outlay ₹12,195 Cr is now [V].

**Chunk log:** Part 4 was appended in five chunks: (1) header + 4.0; (2) 4.1; (3) 4.2.1–4.2.2; (4) 4.2.3–4.2.4; (5) 4.3–4.5. Scratch notes: `/tmp/telecom-equipment-deep/notes.md`; extracted texts in `/tmp/telecom-equipment-deep/txt/`.
