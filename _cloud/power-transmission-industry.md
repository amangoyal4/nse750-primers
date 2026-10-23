# Power Transmission (Power || Power - Transmission): Research Dossier + Company Fact Packs

Compiled 23-Oct-2026 (UTC) for the writer agent. This is source material, not prose for publication. Slug: `power-transmission`. Tier C (2 members).
- **Part 1** is the industry dossier (brief-industry.md §1–12 plus A–H).
- **Part 2** is the company fact pack for both members (brief-companies.md), with JSON.
- **Part 3** is the company-KPI appendix: summary grid, aggregates (straight sums on one basis), reconciliation vs primers, primer issues (§3.4), source URLs.

**Members (2, Tier C):** Power Grid Corporation of India (POWERGRID · 532898 · primers/power-grid.html) and Adani Energy Solutions (ADANIENSOL · 539254 · primers/adani-energy-solutions.html).

**Sibling reports to cross-link (do not duplicate):** `integrated-power` (Tata Power, Torrent, CESC — distribution, RDSS, regulatory assets, MERC/SERC tariffs) and `power-generation` (capacity mix, IEX prices, LPS rules). This report should lead with **the wires above 220 kV** (inter-state transmission, CERC regulation, TBCB vs RTM, the ₹9 lakh Cr capex plan) and treat AESL's Mumbai distribution, smart metering and the new Energy Solutions trading platform as AESL-specific adjacencies.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary document: company investor decks, press releases and call transcripts downloaded from BSE (AESL Q2 FY27 media release and deck, 22/23-Oct-2026; AESL Q1 FY27 deck and call transcript, 22-Jul-2026; POWERGRID FY26 analyst-meet deck, 18-May-2026; POWERGRID Q1 FY27 deck and webinar transcript, 7-Aug-2026; POWERGRID TBCB/acquisition filings, Oct-2026) and screener.in pages. URLs in §3.5.
- **[V-snip]** = verified only from a search-result summary or a secondary article (not the primary document).
- **[K: integrated-power dossier, <source>]** = taken from the sibling Integrated Power Utilities dossier compiled 22-Oct-2026 by a previous session (read-only reference); not re-fetched here.
- **[K]** = well-established public fact from memory; source named, not re-fetched. Spot-check if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic.
- **[primer]** = our own primer (power-grid.html refreshed 30-Jun-2026; adani-energy-solutions.html refreshed 1-Jul-2026).
- **[screener 23-Oct-26]** = screener.in consolidated pages pulled 23-Oct-2026 ~05:20 UTC (~10:50 IST, intraday Friday). POWERGRID ₹244 (at its 52-week low of ₹243); ADANIENSOL ₹1,225 (52-week range ₹803–1,789).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹1 lakh crore (L Cr) = ₹1 trillion. **ckm = circuit-kilometre** (a double-circuit line 100 km long = 200 ckm). **MVA** = mega-volt-ampere of transformation (substation) capacity; GVA = 1,000 MVA. **IR** = inter-regional transfer capacity (MW/GW). kV = kilovolt; HVDC = high-voltage direct current; GIS = gas-insulated substation; ISTS = inter-state transmission system; InSTS = intra-state; STU/CTU = state/central transmission utility; NCT = National Committee on Transmission; BPC = bid process coordinator (RECPDCL / PFCCL); SCOD = scheduled commercial operation date; DOCO = date of commercial operation.
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. Both members have a March year-end.
- **FX: ₹94.9 = US$1** (19-Oct-2026, as used across the Oct-2026 dossier set). Used for all USD conversions.
- Macro context [K: integrated-power dossier, sibling reports]: West Asia war from 28-Feb-2026 (Hormuz closure; ceasefire 7-Apr-2026); **RBI repo hiked to 5.50% on 7-Oct-2026**; IEX day-ahead price ₹7.3/kWh in Sep-2026 (+105% YoY); all-India peak demand record **270.8 GW on 21-May-2026** (also [V-snip Outlook Business: 270.82 GW, May-2026]).

**Q2 FY27 status (as of 23-Oct-2026): AESL has reported Q2 FY27 (board 22-Oct-2026). POWERGRID has not; Q1 FY27 is its latest quarter.**

| Company | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|
| POWERGRID | **Board 5-Aug-2026** (NSE integrated filing dated 05-08-2026) [V-snip]; investor webinar 7-Aug-2026, 11 am [V deck cover letter] | **Not announced** as of 23-Oct-2026 [V-snip search; screener announcements list shows no board intimation]. Last year's Q2 FY26 board was **3-Nov-2025** [V-snip]; expect early Nov-2026 [E]. Reg 74(5) certificate for Sep-26 quarter filed 12-Oct [V screener]. |
| Adani Energy Solutions | Board/results **22-Jul-2026** (call transcript dated 22-Jul-2026) [V] | **Reported 22-Oct-2026** — media release and results filed 22-Oct, investor presentation 23-Oct [V BSE]. **Q2 PAT ₹1,364 Cr (+145% YoY), EBITDA ₹3,548 Cr (+67%)**. |

**Still listed? Both are listed; no merger/demerger affects either listed entity.** Corporate actions that change the analysis:
1. **AESL raised a second QIP: ~₹3,500 Cr at ₹1,615/share, 27–30-Jul-2026** (floor ₹1,698.15; 4.9% discount; ~3.1× subscribed, bids >₹10,800 Cr; shares outstanding 120.13 Cr → 122.30 Cr) [V-snip sahi/investywise/outlookbusiness; consistent with screener equity capital ₹1,201 Cr → ₹1,223 Cr at Sep-26 [V]]. The stock now trades **24% below the QIP price** (₹1,225). The Aug-2024 QIP (US$1 bn / ₹8,373 Cr) is the earlier one — **the brief's "QIP ₹8,373 Cr Jul-2023" is mis-dated** (it opened end-Jul-2024 and closed early Aug-2024 [primer; K]).
2. **AESL has signed a binding agreement to buy 100% of IntelliSmart Infrastructure (from NIIF and EESL) for ₹3,050 Cr**, adding **22.3 mn smart meters** (combined ~47 mn); **CCI approval pending** as of the Q1 call [V AESL Q1 FY27 deck and transcript]. Q2 deck still footnotes it as "subject to regulatory and other customary approvals" [V].
3. **AESL created a fourth segment, "Energy Solutions Platform" (ESP)**, which is power aggregation/trading on long-term contracted renewable + battery capacity. It produced **₹1,393 Cr of H1 FY27 operating EBITDA (24% of AESL's operating EBITDA)** and drove most of the profit jump. On 22-Oct it signed a **25-year, 2,500 MW round-the-clock supply PPA with MSEDCL** [V AESL Q2 release]. Prior-year comparatives are restated [V].
4. **POWERGRID is simplifying its SPVs:** 17 TBCB SPVs were merged into 2 (POWERGRID Khavda II C, POWERGRID Vataman); **28 more are to be merged into 2** (Ghiror, South Olpad) [V FY26 deck]. It is acquiring newly won TBCB SPVs from the BPCs (Jam Khambhaliya REZ, Lakadia C, Lakadia II, 12-Oct-2026, ₹18–20 Cr each) [V screener announcements]. JV stakes in **Torrent Power Grid, a Sikkim power JV and Parbati Koldam** are classified "held for sale" [V Q1 FY27 transcript].
5. **PowerGrid InvIT (PGInvIT):** POWERGRID's remaining sponsor holding is the **15% unit stake retained at the May-2021 IPO** (136.5 mn units, locked in). The "26%" figure in our primer refers to the **residual 26% stakes in four SPVs, which were sold to PGInvIT for ~₹507 Cr (completed 30-Dec-2024)** [V-snip business-standard/dsij]. No 2025–26 sale of sponsor units was found.
6. **US matters (Adani group):** the **OFAC US$275 mn settlement of 18-May-2026 is with Adani Enterprises Ltd (AEL)**, covering Iran-origin LPG bought via a Dubai trader in Nov-2023 to Jun-2025 — **AESL was not a party** [V-snip OFAC enforcement release via thewire/claimsjournal/gulfnews]. The DoJ said on 18-May-2026 that it would drop the Nov-2024 securities-fraud/bribery indictment. **Judge Nicholas Garaufis (EDNY) dismissed the criminal case on 10-Aug-2026** [V-snip Reuters via The Star/SCMP]. The "with prejudice" wording and the dismissal of the counts against Sagar Adani and Vneet Jaain come from the brief; the fetched snippets did not confirm them, so treat as [K: brief]. **SEC settlement: US$18 mn in total (Gautam and Sagar Adani)** [V-snip]. See §7.6 for what the US case alleged and how AESL was (not) involved.

---

## READ THIS FIRST: twelve definitional traps

1. **ckm ≠ route-km, and "network" ≠ "operational".**
   - ckm counts each circuit: a 400 kV double-circuit line 300 km long is 600 ckm.
   - **AESL's headline "29,802 ckm" includes 9,779 ckm under construction.** Operational transmission was **20,023 ckm** (49,150 MVA) at Sep-2026 [V Q2 deck asset list; deck footnote gives the total as 29,739 = 20,023 operational + 9,779 UC (sic — the two do not add exactly)]. The FY26 "27,949 ckm" in our primer is also operational + UC.
   - The AESL operational list includes **848 ckm of AEML/MUL distribution-licensee lines (594 + 254 ckm)**, although a footnote says the AEML distribution network is excluded [V].
   - POWERGRID's **1,84,960 ckm (Mar-26) / 1,86,595 ckm (Jun-26)** is all operational, group basis incl. TBCB SPVs [V].
2. **Capex ≠ capitalisation ≠ commissioning.**
   - POWERGRID FY26 **capex ₹39,967 Cr** (cash spent on CWIP) vs **capitalisation ₹28,206 Cr** (assets put into service; includes finance-lease TBCB assets, excludes FERV) [V FY26 deck].
   - Only capitalised assets earn the regulated return, or start the TBCB tariff clock. FY27 guidance: capex ₹37,000 Cr, capitalisation ₹30,000 Cr. Q1 FY27: capex ₹7,765 Cr, capitalisation ₹5,277 Cr [V].
   - AESL reports **capex** (FY26 ₹14,232 Cr; H1 FY27 ₹7,850 Cr) but not capitalisation [V].
3. **RTM vs TBCB revenue are different animals.**
   - **RTM (Regulated Tariff Mechanism, cost-plus, CERC s.62):** tariff = ROE + interest + depreciation + O&M + IoWC, reset every 5-year control period. The tariff **falls after year 12** once the loan is repaid through depreciation — the "regulatory drag" (₹330 Cr in POWERGRID's Q1 FY27) [V transcript].
   - **TBCB (s.63):** a 35-year levelised tariff fixed at bid. No ROE is "allowed" — the return is whatever the bid implied.
   - **POWERGRID accounts for its TBCB SPVs as finance leases:** lease receivables, no depreciation, so reported profit is front-loaded differently from RTM [V Q1 FY27 transcript]. AESL accounts for TBCB lines under the service concession model (Ind AS 115 SCA) [V AESL deck note].
4. **AESL has four revenue numbers for FY26.**
   - "Operational revenue" ₹18,296 Cr (company headline).
   - Screener "sales" ₹27,588 Cr: statutory revenue from operations incl. SCA construction income and traded goods.
   - Total income ₹28,325 Cr.
   - From FY27, revenue restated "with inclusion of Energy Solutions Platform".
   - **SCA income** (construction revenue booked as lines and smart meters are built) was **₹4,961 Cr in H1 FY27** (₹3,692 Cr H1 FY26) — revenue that comes with matching construction cost and little margin [V].
   - **Our primer's strip calls ₹18,296 Cr "Revenue from ops" — it is "operational revenue".** Screener sales growth (+16%) and operational revenue growth (+7%) differ for this reason.
5. **AESL's EBITDA has three numbers.**
   - FY26 "EBITDA" ₹8,726 Cr = operating EBITDA ₹7,407 Cr + other income + one-time regulatory income, adjusted for CSR [V Q1 deck; primer].
   - Screener operating profit ₹8,005 Cr [V].
   - Q2 FY27: EBITDA ₹3,548 Cr vs operating EBITDA ₹3,070 Cr [V].
   - **Smart-metering EBITDA is shown both "Ind AS" (₹352 Cr H1) and "non-Ind AS" (₹654 Cr H1)**. The non-Ind AS figure is the cash-like annuity view; never add it to Ind AS totals [V].
6. **POWERGRID's screener operating profit is distorted in FY26.**
   - Screener FY26 OP **₹32,831 Cr (70% margin)**, down from ₹38,779 Cr, with a **Q4 FY26 OP of ₹5,303 Cr and a tax rate of −2,829%** [V screener].
   - Cause: the company remeasured deferred tax at new-regime rates (expected transition under the Income Tax Act, 2025) and cut **tax by ₹832 Cr (consolidated)** [V Q1 FY27 deck footnote]. Under CERC rules, deferred tax is recoverable from beneficiaries, so POWERGRID carries a **regulatory deferral asset ("DA for DTL")**. Screener books the reversal of that asset as an expense and the DTL reversal as a tax credit; the company nets both ("Tax (net of DA for DTL)") [V deck line items; mechanism E].
   - **Use company EBITDA ₹39,677 Cr (FY25 ₹40,531 Cr) for POWERGRID**, not screener OP.
   - The **₹832 Cr credit flatters FY26 PAT**: ex-credit PAT ≈ **₹15,096 Cr, −2.7% YoY**, vs the headline +2.6% [E].
7. **POWERGRID standalone vs consolidated.**
   - Standalone = the RTM parent plus dividends/interest from subsidiaries. FY26 standalone PAT ₹15,921 Cr; standalone other income ₹6,092 Cr includes ₹3,350 Cr interest from subsidiaries/JVs and ₹1,516 Cr dividends from subsidiaries [V].
   - Consolidated = parent + ~64 SPVs (TBCB) + PowerTel + PESL (smart meters/BESS). FY26 PAT ₹15,928 Cr [V].
   - The two PATs are almost identical, so the TBCB SPVs' own profit is invisible in the headline. Analysts asked for separate TBCB disclosure; management "will examine" [V transcript].
   - Debt is the same on both bases: ₹1,48,009 Cr [V].
8. **Regulated equity vs book equity vs "equity in TBCB".**
   - Regulated equity is the CERC-approved equity in RTM assets (normatively 30% of approved capital cost; equity above 30% is treated as debt) [K: CERC Tariff Regulations].
   - **POWERGRID does not disclose its regulated equity in the decks fetched.** A rough proxy is 30% × standalone gross block (₹2,75,736 Cr) ≈ ₹83,000 Cr [E].
   - Book net worth (consolidated) ₹1,00,494 Cr (Mar-26) / ₹1,04,028 Cr (Jun-26) [V].
   - "Equity in TBCB — operational" ₹9,558 Cr (Mar-26) → ₹9,965 Cr (Jun-26); under construction ₹2,502 → ₹3,408 Cr — **all funded from internal accruals** [V].
   - AESL discloses **AEML's RAB ₹10,456 Cr (equity ₹5,564 Cr + debt ₹4,892 Cr)** at Sep-26 [V]. It does not disclose a transmission RAB.
9. **"Availability" is revenue-weighted and has a normative threshold.**
   - CERC pays full AFC at the **normative annual transmission availability factor (NATAF), 98% for AC systems** (lower for HVDC); incentive accrues above it [K: CERC Tariff Regulations 2024 — verify the incentive band].
   - POWERGRID's decks plot availability against a **99.75%** reference line; FY26 achieved **99.84%** [V].
   - **Our primer says both "~98% target" and "99.75% normative threshold"** — reconcile (see §3.4).
   - AESL's "average system availability" is **revenue-weighted line availability**, provisional [V]: H1 FY27 **99.63%**, Q2 99.8%; incentive income ₹61 Cr in H1 [V]. POWERGRID consolidated incentive FY26 **₹664 Cr** (FY25 ₹485 Cr) [V].
10. **"Works in hand" (POWERGRID) ≠ "UC order book" (AESL) ≠ "smart-meter order book".**
    - POWERGRID WIH **₹1,75,700 Cr** (30-Jun-26) = project cost of TBCB + RTM + other projects, **including ₹50,419 Cr already spent (CWIP)**. It **excludes Pang–Kaithal HVDC (₹22,942 Cr) and offshore (₹13,142 Cr)** [V].
    - AESL's **₹87,222 Cr** is the cost of 15 UC transmission projects; their **levelised annual tariff is ₹10,994 Cr** [V].
    - AESL's smart-meter book **₹29,519 Cr is "revenue potential" over ~10-year contracts**, not capex [V].
    - Never add the three together.
11. **AESL consolidated includes AEML Mumbai distribution, MUL Mundra, smart metering, ESP trading and minorities.**
    - QIA owns 25.1% of AEML [K: QIA–AEML deal, 2019–20; verify].
    - Screener PAT (₹2,393 Cr FY26) includes minorities. **Attributable ≈ EPS ₹19.00 × 120.13 Cr shares ≈ ₹2,282 Cr** [E].
    - Distribution revenue (₹6,702 Cr in H1) is mostly pass-through power purchase. Distribution operating EBITDA margin is ~18% vs transmission ~92% [V].
12. **AESL's "one-time regulatory income" and POWERGRID's "income for previous periods".**
    - Both utilities book past-period true-ups when regulators issue orders.
    - POWERGRID consolidated **"income for previous periods" ₹617 Cr in FY26** (₹426 Cr FY25). **"Interest on differential tariff" ₹705 Cr** (standalone): interest at SBI MCLR + 150 bp accrued while a CERC order is pending, which disappears once orders issue. It fell from ₹257 Cr in Q1 FY26 to ₹22 Cr in Q1 FY27, explaining most of the Q1 PAT dip [V].
    - AESL's EBITDA definition explicitly adds "one-time regulatory income" [V].
    - **Strip these before reading growth.**

---

## 0. Top-line framing (what an expert leads with)

- **Two listed companies, three very different stories wearing the same "transmission" label.**
  - **POWERGRID** is a sovereign-backed regulated toll road. **FY26 consolidated:**
    - Transmission charges ₹43,962 Cr (92% of total income ₹47,684 Cr); EBITDA ₹39,677 Cr; PAT ₹15,928 Cr (incl. ₹832 Cr deferred-tax credit) [V FY26 deck].
    - Network 1,84,960 ckm, 291 substations, 6,24,016 MVA, ~84% of India's inter-regional capacity [V].
    - M-cap **₹2,26,563 Cr at ₹244, P/E 14.3×, P/B 2.26×, dividend yield 3.70%** [V screener 23-Oct-26].
  - **AESL** is a leveraged private developer that is becoming a utility conglomerate.
    - FY26 operational revenue ₹18,296 Cr, EBITDA ₹8,726 Cr, PAT ₹2,393 Cr [V Q1 deck]. **H1 FY27 PAT ₹2,600 Cr already exceeds all of FY26** [V].
    - Since Q1 FY27, **ESP trading contributes ~24% of operating EBITDA** [V].
    - M-cap **₹1,49,812 Cr at ₹1,225, TTM P/E 40.4×, P/B 4.8×, no dividend** [V screener].
  - **Combined FY26: screener revenue ₹74,321 Cr (+6.8%), company-basis EBITDA ₹48,403 Cr, reported PAT ₹18,321 Cr, m-cap ₹3,76,375 Cr (≈20.5× FY26 PAT; 19.0× TTM), gross borrowings ₹1,97,247 Cr (Mar-26)** [E: sums of V rows].
- **The demand side is a government plan, not a market.**
  - The National Electricity Plan (Transmission) 2023–32: **1,91,474 ckm and 1,274 GVA of additions, investment >₹9.15 L Cr**; IR capacity **120 → 168 GW by 2032**; to integrate **500 GW non-fossil by 2030** [V-snip Outlook Business citing CEA/MoP; primer].
  - The CEA's newer **900+ GW non-fossil plan (Mar-2026) adds 1,37,500 ckm and 8,27,600 MVA for ~₹7.93 L Cr over FY27–FY36** [V POWERGRID decks; V-snip].
  - POWERGRID counts **>₹15 L Cr of long-term sector opportunity**: 900 GW plan ₹7.9 L Cr + Brahmaputra-basin hydro ₹6.4 L Cr + data centres/green hydrogen + cross-border [V Q1 FY27 deck].
- **Execution, not demand, is the binding constraint.**
  - FY26 line-addition target was **cut from 24,400 to 15,382 ckm** (−37%) mid-year; transformation **1,97,617 → 1,26,007 MVA** [V-snip tndindia/Outlook].
  - Actual FY26: **~12,139 ckm (≈79% of the cut target, ≈50% of the original) and 1,13,013 MVA (90%)** [V-snip Construction World; Outlook/CEA].
  - Causes: transformer/reactor/GIS lead times (765 kV transformers **20–24 months**; 400 kV ~15; 220 kV 11–15 [V-snip MoP Mar-2026 via Outlook]), right-of-way (ROW) compensation disputes, and over-tight SCODs (as short as **18 months** for a 765 kV D/C line, now revised by GoI to **26–30 months+**) [V POWERGRID transcript].
  - RE is stranded while lines lag. Tata Power cited **~5% industry curtailment in Q1 FY27**; Torrent's RE slipped to FY28 on late ISTS lines [K: integrated-power dossier, Tata/Torrent Q1 calls].
- **The award mechanism has flipped from nomination to auction.**
  - **83% of POWERGRID's ₹1.76 L Cr works-in-hand is TBCB**, 14% RTM [V].
  - FY25 was a record **45 ISTS-TBCB schemes (₹19,786 Cr of annual tariff)**; AESL won **28.6%** by tariff [V-snip tndindia].
  - FY26: **16 ISTS schemes** — AESL led by tariff share, POWERGRID by number [V-snip]; POWERGRID won **9 of 28** bids (ISTS + InSTS) [V].
  - Cumulative ISTS-TBCB tariff share: POWERGRID **~44% (Mar-26) / ~47% (Jul-26)** [V]; AESL claims **29% of FY26 bids** and **17% in H1 FY27** [V AESL decks].
- **The regulated return is the anchor; the TBCB return is the debate.**
  - CERC's 2024–29 regulations keep **15.5% post-tax base ROE** for transmission. The draft had proposed 15% for new transmission [V-snip powerline on draft; K final]. MERC also allows 15.5% on wires (14% + 1.5% performance-linked, contingent on ≥99.5% availability) [K: integrated-power dossier, MERC MYT Regs 2024].
  - TBCB returns are undisclosed. POWERGRID's management: "well-calibrated"; analysts complain that TBCB P&L is invisible [V transcript]. Street estimates of TBCB equity IRRs are 12–14% [E/FLAG — no source fetched].
- **Valuations have de-rated hard into the October rate hike.**
  - POWERGRID sits at its **52-week low (₹243–244)**, down ~25% from its high of ₹325. Its m-cap fell from ₹2.75 L Cr (31-Mar-26, per deck) and ₹2.66 L Cr (30-Jun-26) to ₹2.27 L Cr [V].
  - AESL is **₹1,225 vs a 52-week high of ₹1,789 and a July QIP at ₹1,615** [V].
  - Repo was raised to 5.50% on 7-Oct-2026 [K-sib]; long-duration "bond proxies" re-price with yields.

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Activities (by member)

| Activity | What it is | How it is paid | POWERGRID | AESL |
|---|---|---|---|---|
| **ISTS transmission — RTM** | Inter-state lines and substations nominated to the CTU/POWERGRID; cost-plus | CERC tariff: ROE 15.5% + interest + depreciation + O&M + IoWC; recovered from all DICs (designated ISTS customers) via the GNA sharing regulations | Core: ~₹40,013 Cr standalone transmission charges FY26 [V] | Small: ATIL (Mundra–Dehgam, Mundra–Mohindergarh HVDC, Tiroda–Warora), MEGPTCL (Tiroda–Aurangabad), Mahan–Sipat, HVDC Mumbai = "ROA" assets [V] |
| **ISTS transmission — TBCB** | Lines won in reverse auctions run by RECPDCL/PFCCL; 35-year build-own-operate-maintain | Levelised annual tariff fixed at bid; paid on availability; no reset | ~64 SPVs; equity ₹9,965 Cr operational + ₹3,408 Cr UC (Jun-26) [V] | Core: 30 operational TBCB SPVs + 14 UC (₹10,994 Cr levelised tariff) [V] |
| **Intra-state transmission** | STU networks (MSETCL, GETCO, RVPN…), increasingly tendered under InSTS-TBCB | SERC cost-plus or TBCB | Wins InSTS bids (e.g., Pune East 765/400 kV MH, Bidar KA) [V] | WTPL/WTGL (Maharashtra/Gujarat), Kharghar–Vikhroli, Satara (Q2 FY27 win) [V] |
| **Distribution** | Retail wires + supply | SERC cost-plus ROE on RAB | — | AEML (Mumbai suburbs, 3.29 mn consumers), MUL (Mundra SEZ) [V] |
| **Smart metering (AMISP)** | Design-build-finance-own-operate-transfer (DBFOOT) meters + head-end for discoms | Per-meter-per-month fee for ~120 months | PESL smart-meter business: ₹832 Cr FY26 revenue [V] | 24.6 mn-meter book (₹29,519 Cr), 14.8 mn installed; IntelliSmart +22.3 mn pending [V] |
| **Telecom** | OPGW fibre on towers; bandwidth leasing | Market price | PowerTel income ₹1,195 Cr FY26 [V] | — |
| **Consultancy / international** | EPC management, PPP abroad | Fees; equity | ₹1,755 Cr FY26 (+120%); Kenya PPP with Africa50 (~$300 mn, POWERGRID 40%) [V] | — |
| **BESS / storage as a transmission element** | Integrated energy storage owned by a transmission service provider | CERC regulations 20-Mar-2026; TBCB | Kalikiri AP 150 MW/300 MWh, ₹29.52 Cr/yr tariff [V] | Contracts 3.5 GWh of BESS for ESP (offtake, not owned) [V] |
| **Energy Solutions / trading** | Contract RE + storage capacity long-term, sell to C&I, data centres, utilities, exchange | Spread / merchant | — | ESP: 25,333 MU supplied in H1 FY27; op. EBITDA ₹1,393 Cr [V] |

### 1.2 Value chain (generator → plug)

1. **Planning:** CEA (National Electricity Plan, 5-year rolling ISTS plans) → CTUIL (Central Transmission Utility of India Ltd, carved out of POWERGRID in 2021 [K]) identifies the scheme → **NCT** recommends RTM or TBCB and an NCT cost → MoP notifies [K; V POWERGRID decks quote "NCT cost"].
2. **Award:** for TBCB, a BPC (RECPDCL or PFCCL) incorporates an SPV, runs RfQ → RfP → e-reverse auction on levelised tariff → transfers the SPV to the winner (hence POWERGRID's ₹18–20 Cr "acquisitions" of Lakadia/Jam Khambhaliya SPVs on 12-Oct-2026) [V screener; K process]. CERC adopts the tariff under s.63 and grants the licence. For RTM, POWERGRID files a tariff petition under s.62.
3. **Build:** EPC by in-house teams or contractors (KEC, Kalpataru, Tata Projects, L&T; Adani group EPC for AESL [K]). Equipment: transformers/reactors (Hitachi Energy, Siemens Energy, GE Vernova T&D, BHEL, CG Power, Toshiba, TBEA/Chinese now partly permitted), conductors (Apar, Sterlite Electric), towers, GIS, HVDC converter valves (Hitachi/Siemens/GE) [K]. The equipment queue is the critical path (see §4).
4. **Commission:** DOCO declared. For TBCB, "deemed DOCO" after a specified period even if the generator is not ready; for RTM, a CERC order is needed (₹300 Cr of POWERGRID revenue awaited such orders at Q1 FY27) [V transcript].
5. **Bill and collect:** CTUIL bills all DICs (discoms, open-access users, generators under GNA) monthly and pools ISTS charges under the CERC Sharing Regulations (GNA regime from Oct-2023 [K]). Payment security comes via LC and the LPS Rules 2022 [K]. POWERGRID FY26 realisation was **101.2% of billing** (₹40,684 Cr vs ₹40,201 Cr); outstanding **₹2,905 Cr = ~10.7 days** (FY24: 26.4 days) [V].
6. **Recycle:** sell operating SPVs to InvITs (PGInvIT, IndiGrid) or monetise via stake sales, then redeploy the equity [V-snip].

### 1.3 Where value is captured (and why)
- **On the wires, value is captured at bid time and in execution, not in operations.**
  - Opex is tiny: POWERGRID's consolidated operating expenses were ₹7,875 Cr on ₹47,684 Cr income (16.5%), so EBITDA margin is ~83% [V FY26 deck]. AESL transmission operating EBITDA margin is **92%** [V].
  - What decides the return is the tariff bid vs the actual capital cost and timeline. A line commissioned early or under budget earns above its bid IRR; a ROW-delayed one earns below it, because TBCB tariffs start only on COD and liquidated damages apply [K].
- **For RTM, value is captured by keeping availability above norm** (incentive ₹664 Cr in FY26 ≈ 4% of PAT) [V], and through the gross-up of ROE by the effective tax rate [K].
- **For smart meters, value is in installation velocity and discom payment discipline.** The AMISP fee is fixed; delay means interest during construction is lost [E].
- **For ESP, value is a merchant spread** on capacity contracted from (largely) RE developers. In Q1 FY27 AESL sold only 400–500 MU of its 3,325 MU position under back-to-back C&I contracts; the rest went to exchanges and 1–13-month bilaterals at ₹3–15/kWh [V AESL Q1 call]. It is a high-return, volatile **non-regulated** stream inside a "utility".

---

## 2. Size and growth

### 2.1 The national grid (220 kV and above) [V-snip CEA via Outlook/Mercom/tndindia/AngelOne; K where marked]

| Metric | Value | Source / tag |
|---|---|---|
| Transmission lines (220 kV+) | **crossed 5,00,000 ckm on 14-Jan-2026** (Bhadla II–Sikar II 765 kV, 628 ckm) | PIB via AngelOne [V-snip] |
| Transformation capacity (AC, 220 kV+) | **14,50,526 MVA (Mar-26)**; ~1,486 GVA (Jul-26); 7% CAGR since FY19 | CEA via Outlook [V-snip] |
| HVDC terminal capacity | 33,500 MVA (>half at ±800 kV) | Outlook/CEA [V-snip] |
| Inter-regional transfer capacity | **1,18,740 MW (Mar-25) → 1,20,340 MW (Jun-25)**; POWERGRID's own IR assets 1,01,180 MW (Mar-26), "~84% of total IR" | tndindia [V-snip]; POWERGRID FY26 deck [V] |
| FY26 additions | **~12,139 ckm** (target revised 24,400 → 15,382) and **1,13,013 MVA** (target 1,97,617 → 1,26,007; 90% achieved) | Construction World; Outlook/CEA [V-snip] |
| FY26 9-month pace | 5,077 ckm vs 10,696 ckm target (47.5%) to Dec-25 | Mercom [V-snip] — implies ~7,000 ckm in Q4 if 12,139 is right; FLAG |
| FY27 target / progress | 1,58,339 MVA target; 35,670 MVA in Apr–Jul 2026 (23% in 33% of the year) | Outlook/CEA [V-snip] |
| History of line additions (ckm) | FY20 ~11,664; FY21 ~16,750; FY22 ~14,895; FY23 ~14,625; FY24 ~14,203; **FY25 ~8,830 (decade low)**; FY26 ~12,139 | [K: CEA annual "Growth of transmission sector"; FY20–FY25 from memory — VERIFY]; FY26 [V-snip] |
| NEP-Trans 2023–32 | +1,91,474 ckm; +1,274 GVA; **>₹9.15 L Cr**; IR 120 → 168 GW; HVDC bipoles 33.25 GW; 500 GW RE 2030 / ~600 GW 2032; 47 GW BESS + 31 GW PSP | Outlook/CEA [V-snip]; primer |
| Primer's NEP framing | lines 4.85 → 6.48 lakh ckm (2024 → 2032); transformation 1,251 → 2,342 GVA | primer (PIB/Enerdata) |
| CEA 900+ GW plan FY27–36 | +1,37,500 ckm; +8,27,600 MVA; **₹7.93 L Cr** | POWERGRID decks [V]; Outlook [V-snip] |
| Brahmaputra basin (hydro) | ~76 GW across 12 sub-basins; 42 GW HVDC corridors; ~31,000 ckm; ₹6.4 L Cr (₹1.9 L Cr to 2035 + ₹4.5 L Cr after) | POWERGRID Q1 FY27 deck [V] |
| HVDC pipeline | **22 schemes, ~127 GW** (14 in the 900 GW plan, 6 Brahmaputra, 2 cross-border/undersea: India–Sri Lanka 500 MW VSC; Paradeep–Andaman ±320 kV VSC) | POWERGRID FY26 deck [V] |

### 2.2 The money pool [E]
- **Annual ISTS transmission charges** ≈ POWERGRID consolidated transmission charges ₹43,962 Cr ÷ its estimated ~70–75% share of ISTS billing ≈ **₹60,000–65,000 Cr/yr** [E; FLAG — the CTUIL/NLDC monthly ISTS billing total was not fetched].
- **Intra-state (STU) charges** are of similar or larger magnitude: ~₹55,000–75,000 Cr [E — composite, not sourced]. **Total Indian transmission revenue pool ≈ ₹1.2–1.4 L Cr/yr (~US$13–15 bn)** [E].
- **Capex pool:** ₹9.15 L Cr over FY23–32 ≈ **~₹90,000–1,00,000 Cr/yr** on average, inter-state ~₹4.75 L Cr and intra-state ~₹4.4 L Cr [K: NEP-Trans split commonly cited; FLAG — not re-fetched]. On top: ₹7.93 L Cr for FY27–36 under the 900 GW plan (overlapping years).
- **The two members' FY26 transmission capex**: POWERGRID ₹39,967 Cr (all segments, mostly transmission) + AESL transmission ~₹8,000–9,000 Cr of its ₹14,232 Cr [E: AESL H1 FY27 transmission capex ₹5,542 Cr of ₹7,850 Cr = 71%] → **~₹49,000 Cr, i.e. about half of the national annual run-rate** [E].
- **Smart-meter pool:** RDSS sanctioned **20.33 crore meters at ₹1.31 L Cr** (GBS ₹24,173 Cr) [V-snip KNN/Lok Sabha]. At AESL's average ₹29,519 Cr ÷ 24.6 mn ≈ **₹12,000 per meter of 10-year revenue** [E], the national AMISP revenue pool is ≈ ₹2.4 L Cr over a decade [E].

### 2.3 Members' revenue and growth (screener consolidated, ₹ Cr) [V screener 23-Oct-26]

| FY | POWERGRID sales | POWERGRID PAT | AESL sales | AESL PAT |
|---|---|---|---|---|
| FY20 | 37,744 | 11,059 | 11,416 | 706 |
| FY21 | 39,640 | 12,036 | 9,926 | 1,290 |
| FY22 | 41,622 | 16,824 | 11,258 | 1,236 |
| FY23 | 45,581 | 15,417 | 13,293 | 1,281 |
| FY24 | 45,843 | 15,573 | 16,607 | 1,196 |
| FY25 | 45,792 | 15,521 | 23,767 | 922 |
| FY26 | 46,733 | 15,928 | 27,588 | 2,393 |
| TTM (Jun-26 / Sep-26) | 47,033 | 15,896 | 33,960 | 3,897 |

- POWERGRID FY20–FY26 sales CAGR **3.6%**, PAT CAGR **6.3%** (FY22 PAT inflated by one-offs; FY23–FY26 PAT flat at ₹15.4–15.9k Cr) [E from V].
- AESL FY20–FY26 sales CAGR **15.9%**. PAT is lumpy: the FY25 dip came from a −₹1,395 Cr other-income hit in Q1 FY25 (one-off; primer attributes it to the Dahanu carve-out) [V screener; primer]. TTM PAT **₹3,897 Cr** includes ESP gains [V].

---

## 3. Demand drivers and end-markets

1. **RE evacuation (the anchor driver).**
   - India targets **500 GW non-fossil by 2030** [primer; V-snip Outlook]. Installed capacity is ~552 GW (2026) [V-snip Outlook].
   - RE zones are remote: Khavda (Gujarat, a ~30 GW park), Bikaner/Barmer/Bhadla/Fatehgarh (Rajasthan), Anantapur/Kurnool (AP), Koppal/Gadag/Davanagere (Karnataka), Krishnagiri (TN), Ladakh (13 GW) [V POWERGRID/AESL project lists].
   - Every POWERGRID line commissioned in Q1 FY27 was "by and large associated with RE generation" [V transcript].
   - Transmission per GW is rising: CEA's 900 GW plan needs ~₹7.9 L Cr for ~400 GW more of non-fossil capacity ≈ **₹2,000 Cr per GW** [E].
2. **Load growth and peaks.**
   - Peak demand: FY23 215.9 GW → FY24 243.3 → FY25 249.9 → **FY26 245.4 GW (lower — mild summer)** → **270.8 GW on 21-May-2026**, 269 GW on 10-Sep-2026 [K: integrated-power dossier, CEA/PIB/IEX].
   - Energy: FY26 generation **1,845 BU** [V-snip Outlook]; Q1 FY27 demand +8.5% [K: integrated-power dossier, Tata Q1 call].
   - Peak forecast ~388 GW by FY32 and ~459 GW by FY36 [K: integrated-power dossier, CEA].
   - Wires earn on availability, not volume, so peaks matter through planning (more lines), not through revenue.
3. **Data centres and green hydrogen as new point loads.**
   - POWERGRID cites **~71 GW of data-centre load** and ₹13,103 Cr of GH2 transmission already at NCT (Kakinada, Vizag, Tuticorin). It has won a Kakinada GH2 TBCB scheme [V Q1 FY27 deck].
   - Tata Power (Mumbai) sees a **2.8 GW+ data-centre pipeline and ₹15,000 Cr of Mumbai grid upgrades**, incl. a 400 kV Mumbai ring by 2031 [K: integrated-power dossier, Tata PR 14-Oct-2026].
   - AESL: data-centre volume is "very negligible — only one contract" today [V Q1 call]. The AEML circle (Mumbai suburbs incl. Powai/Andheri/Navi-adjacent) is a natural host [E].
4. **Storage, pumped hydro and system strength.**
   - Transmission for PSPs (Sonbhadra PSP evacuation ₹328 Cr/yr tariff, POWERGRID FY26 win; WR PSP Satara up to 4,500 MW under bidding) [V].
   - **Synchronous condensers** (POWERGRID's first, Fatehgarh-II) [V].
   - BESS as a transmission element (CERC regulations 20-Mar-2026) [V].
5. **Cross-border and One Sun One World One Grid.**
   - India–Sri Lanka, India–Maldives/Myanmar, India–UAE/Saudi, India–Singapore undersea concepts [V POWERGRID deck].
   - The Hormuz closure has "made the need for integration much more visible" (management) [V transcript]. Long-dated; no capex committed.
6. **Smart metering (RDSS).**
   - 20.33 crore meters sanctioned; **5.73 crore installed under RDSS at 30-Jun-2026 (28.2%)**; 7.24 crore across all schemes; **scheme sunset 31-Mar-2028** [V-snip Rajya Sabha reply 27-Jul-2026 via energetica/KNN].
   - **~14.6 crore meters remain to be installed in 21 months** (≈7 crore/yr vs ~2–3 crore/yr achieved) [E]. Either the deadline slips or installs triple.
   - AESL's 14.8 mn installed ≈ **26% of RDSS installs to date** [E; company claims "~19% market share in RDSS" by order book] [V].
7. **Mumbai distribution (AEML).**
   - Units sold **+11% in Q2 FY27 (2,930 MU)**; H1 6,190 MU vs 5,589 [V]. Peak **2,457 MW in H1 FY27 vs 2,170 MW** (extended summer, delayed monsoon) [V]. The primer's "~2,056 MW" is stale.
   - MERC projects AEML's peak rising from ~2,337 MW toward ~3,115 MW [primer citing MERC].

---

## 4. Supply side and cost structure

### 4.1 Key inputs and their price drivers

| Input | Driver | Evidence | Who bears it |
|---|---|---|---|
| **Power transformers & reactors (765/400 kV)** | Global shortage of large transformers (US/EU grid capex, data centres), CRGO steel, copper | MoP (Mar-2026) lead times: **765 kV 20–24 months; 400 kV ~15; 220 kV 11–15** [V-snip]. POWERGRID: supply stress "not as bad as before"; OEMs adding capacity; bulk (not project-specific) procurement; **4 Chinese companies now permitted** to supply [V transcript] | TBCB developer bears cost and delay after bid; RTM passes through approved capital cost |
| **HVDC converter stations** | Oligopoly (Hitachi Energy, Siemens Energy, GE Vernova); slots booked years ahead | Bhadla–Fatehpur HVDC (AESL, 1,906 ckm, 21,900 MVA, ₹3,557 Cr/yr tariff); KPS III–South Olpad HVDC (AESL, ₹2,392 Cr/yr) [V]; Khavda V-A HVDC ~₹35,000 Cr, 4.5 years [V-snip] | Developer |
| **Conductors, towers (steel, aluminium, zinc)** | LME aluminium, HRC steel | Transformer raw materials "will continue to impress upon costing" (POWERGRID) [V] | Developer (TBCB) / pass-through (RTM) |
| **Right-of-way (ROW) / land compensation** | MoP compensation guidelines (tower base and corridor compensation at market-related rates) adopted by Delhi, Haryana, **Gujarat** and more | **Not factored into the ₹7.9 L Cr estimate** (POWERGRID) [V]. Insulated cross-arms cut ROW by ~20% [V] | Developer; may need change-in-law claims |
| **Interest** | G-sec yields, ratings; repo 5.50% | POWERGRID interest ₹7,816 Cr FY26 (company) on ~₹1.4–1.48 L Cr debt ≈ 5.6% average cost [E]; JBIC green loan JPY 80 bn [V]. AESL interest ₹3,633 Cr (screener) on ₹49,176 Cr ≈ 7.4% [E]; Adani portfolio blended ~7.8% [primer] | RTM: normative interest pass-through; TBCB: developer |
| **O&M labour, spares** | Wage inflation; CERC O&M norms per ckm/bay escalated annually | Small: AESL transmission EBITDA margin 92% [V] | — |
| **Smart meters (hardware + comms + MDM/HES)** | Semiconductor/module prices; competition from Genus, Intellismart, Apraava, Polaris etc. | AESL says it has "reduced our capex and opex" per meter over two years [V Q1 call] | AMISP |

### 4.2 "Where ₹100 of revenue goes" — three archetypes [E composites]

**(a) RTM transmission (POWERGRID consolidated FY26, ₹100 = total income ₹47,684 Cr) [E from V deck]**

| Line | ₹ per ₹100 |
|---|---|
| Operating expenses (O&M, employees, regulatory deferral movements) | 16.5 |
| Depreciation | 27.3 |
| Interest | 16.4 |
| Tax (net of DA for DTL) | 6.1 |
| **PAT** | **33.4** |
| Share of JV loss | 0.3 |

**(b) TBCB line (illustrative 35-year asset, ₹1,000 Cr capex, 1:3 D/E) [E]**

| Line | ₹ per ₹100 of annual tariff (years 1–10) |
|---|---|
| O&M | 6–8 |
| Interest | 40–45 |
| Depreciation/amortisation | 20–25 |
| Tax | 5–7 |
| **PAT** | **20–25** (rising as debt amortises) |

**(c) Mumbai distribution (AEML, H1 FY27 distribution operating revenue ₹6,702 Cr) [E from V]**

| Line | ₹ per ₹100 |
|---|---|
| Power purchase (pass-through) | ~65–70 |
| Transmission/wheeling, O&M, employees | ~12–15 |
| **Operating EBITDA** | **17.8** (₹1,192 Cr) |

---
### 4.3 Capacity, execution and the commissioning record

**National execution vs target [V-snip CEA via Outlook/Mercom/tndindia; K where marked]**

| Year | Lines added (ckm) | Target (ckm) | MVA added | Target (MVA) | Comment |
|---|---|---|---|---|---|
| FY24 | ~14,203 [K] | ~17,000 [K] | ~70,700 [K] | — | — |
| FY25 | **~8,830 [K]** | ~15,250 [K] | ~71,200 [K] | — | Decade low; equipment and ROW |
| FY26 | **~12,139** [V-snip] | 24,400 → **15,382** (revised Jul-2025) | **1,13,013** | 1,97,617 → **1,26,007** | MVA 90% of revised target; ckm ≈79% of revised, ≈50% of original |
| FY27 (4M) | n/a | n/a | 35,670 | 1,58,339 | 23% of target in 33% of the year |

- FLAG: the FY24/FY25 rows are from memory of CEA annual reports; verify before printing.

**POWERGRID's own record [V decks]**

| Metric | FY24 | FY25 | FY26 | Q1 FY27 | FY27 guidance |
|---|---|---|---|---|---|
| Lines added (ckm) | n/a | 4,054 | 4,765 | 1,635 | — |
| Transformation added (MVA) | n/a | 32,819 | 72,055 | 10,500 | — |
| New substations | n/a | 4 | 9 | (Koppal-II after June) | — |
| Capex (₹ Cr, consolidated) | ~12,500 [E: chart label] | 26,255 [E: chart label] | **39,967** (guidance 35,000) | 7,765 (Q1 FY26 6,981) | **37,000** |
| Capitalisation (₹ Cr) | ~9,014? [E: chart label, ambiguous] | ~15,291? [E: chart label, ambiguous] | **28,206** (guidance 25,000) | **5,277** (Q1 FY26 1,683) | **30,000** |
| Availability % | 99.85 | 99.82 | 99.84 | 99.80 | — |
| Tripping per line | 0.28 | 0.27 | 0.26 | 0.08 (quarter) | — |
| CWIP (₹ Cr, consolidated) | 18,197 (screener) | 36,341 | 47,980 | 50,419 | — |

- The FY24/FY25 capex and capitalisation figures are bar labels whose assignment to bars was inferred from a PDF text dump. Verify on slide 9 of the FY26 deck.
- **Read-across:** POWERGRID added ~4,765 of the nation's ~12,139 ckm in FY26 (≈39%) and 72,055 of 1,13,013 MVA (≈64%) [E].
- **Read-across:** CWIP has risen 2.8× in two years (₹18,197 → ₹50,419 Cr). That stored-up capitalisation should lift FY28–FY29 transmission revenue [E].

**AESL's record [V decks]**
- Operational network 20,023 ckm / 49,150 MVA (Sep-26), vs ~18,800 ckm a year earlier [E: 26,705 total H1 FY26 minus UC not disclosed — FLAG].
- **UC 9,779 ckm / 94,275 MVA, 15 projects, ₹87,222 Cr cost, ₹10,994 Cr levelised tariff/yr.**
  - Two HVDC projects dominate: Bhadla–Fatehpur (₹3,557 Cr/yr) and KPS III–South Olpad (₹2,392 Cr/yr) = 54% of UC tariff [E from V].
  - Q2 FY27 wins: **Vizag PTL (1,470 ckm, 10,500 MVA, ₹856 Cr/yr)** and **Satara PTL (562 ckm, 9,000 MVA, ₹618 Cr/yr)** [V].
- **Implied tariff-to-capex yield of the UC book: ₹10,994 ÷ ₹87,222 = 12.6%/yr** [E]. Over 35 years at ~92% EBITDA margin this is consistent with a low-teens project IRR before leverage [E].
- Transmission capex H1 FY27 **₹5,542 Cr (1.7× YoY)** [V]. At that run-rate (~₹11,000 Cr/yr) the ₹87,222 Cr book takes **~6–8 years** to build. Several SCODs run to FY29–FY30 [E].
- **Commissioning slippage evidence:** our primer's FY26 "13 projects UC worth ₹71,779 Cr" became "15 projects, ₹87,222 Cr" — net additions, not completions. Operational ckm grew only ~1,200 ckm in a year [E — FLAG: verify H1 FY26 operational ckm].

---

## 5. Industry structure

### 5.1 Concentration (name the basis)

| Basis | POWERGRID | AESL | Others |
|---|---|---|---|
| **Inter-regional capacity** | **~84%** (1,01,180 MW of ~1.2 lakh MW) [V FY26 deck]; primer says "~85% of inter-state and inter-regional" | small (HVDC Mundra–Mohindergarh is inter-regional [K]) | IndiGrid, Tata Power (Powerlinks), Resonia |
| **ckm of all-India 220 kV+ network** | 1,86,595 of ~5.0+ lakh ≈ **36–37%** [E] | 20,023 operational ≈ **4%** [E] | STUs ≈ 50%+; private TBCB players and InvITs the rest [E] |
| **Cumulative ISTS-TBCB tariff share (since 2006)** | **~44% (Mar-26), ~47% (Jul-26)** [V] | ~32% claimed in primer sources [primer citing tndindia — FLAG] | Resonia/Sterlite, Tata Power, Apraava (CLP), Kalpataru, IndiGrid/EnerGrid, Megha Engineering, others |
| **FY25 ISTS-TBCB awards** | n/d | **28.6%** of ₹19,786 Cr tariff (45 schemes) [V-snip] | — |
| **FY26 ISTS-TBCB awards** | **9 of 28 bids won (ISTS + InSTS)**; won tariff ₹1,805 Cr/yr [E: sum of 9 listed wins, V] | "29% market share — TBCB bids (FY26)" [V AESL Q1 deck]; T&D India: AESL led by tariff share [V-snip] | 16 ISTS schemes awarded in FY26 in total [V-snip] |
| **FY27 YTD** | 6 of 19 bids won to Jul-26, >₹2,200 Cr/yr [V]; + Pune West 765 kV GIS ₹199.55 Cr/yr (16-Oct) [V] | "17% market share — TBCB bids (1H FY27)"; Vizag + Satara ₹1,474 Cr/yr [V] | — |
| **RDSS smart meters** | PESL — small (₹832 Cr FY26 revenue) [V] | 24.6 mn order book; claims **~19% RDSS share**; +22.3 mn via IntelliSmart → ~47 mn [V] | IntelliSmart (EESL/NIIF, being acquired by AESL), Genus, Apraava, Polaris, Montecarlo, NCC, Tata Power (own discoms) [K/primer] |
| **Private urban distribution** | — | AEML 3.29 mn consumers [V] | Tata Power (13.2 mn incl. Odisha), Torrent (~4.2 mn), CESC (4.9 mn), BSES [K: integrated-power dossier] |

- The two FY26 share claims do not reconcile on one basis: AESL's "29% of bids" vs POWERGRID winning 9 schemes. They measure different things (tariff vs count; ISTS-only vs ISTS + InSTS; award date vs bid date). **The writer should cite both with their basis and not compute a combined share.**

### 5.2 Unlisted heavyweights, MNC/PE, InvITs, state players
- **Resonia** (ex-Sterlite Power transmission): demerged Oct-2024; **Sterlite Grid 5 51% / GIC 49%** [V-snip ICRA May-2026]. Unlisted, active TBCB bidder and asset recycler.
- **IndiGrid (listed InvIT):** AUM **₹34,041 Cr (Jun-26)**, ~10,237 ckm, 20 substations / 33,335 MVA plus solar and BESS; net debt/AUM 58.5% [V-snip IndiGrid earnings release]. ₹1,500 Cr institutional placement in Jan-2026; its development arm **EnerGrid won ~₹5,800 Cr of transmission projects in Q1 FY27** [V-snip solarquarter].
- **PGInvIT (listed InvIT):** sponsor POWERGRID 15% [V-snip]. Holds the first-lot assets (gross block >₹7,000 Cr) [primer].
- **Tata Power:** 5,562 ckm operational + 2,332 ckm UC (incl. Ryapte, Karnataka, 491 ckm, >₹4,000 Cr); Mumbai regulated transmission 1,409 ckm at 99.9% availability; Powerlinks (JV with POWERGRID) [K: integrated-power dossier, Tata deck/AR]. Paradeep ERES-XXXIV TBCB ~₹2,564 Cr, SCOD 6-Nov-2026 [V-snip tndindia].
- **Torrent Power:** 952 ckm 400 kV + 388 ckm 220 kV operational; Khavda and Solapur lines; a transmission JV with POWERGRID (Torrent Power Grid — POWERGRID's stake now "held for sale") [K: integrated-power dossier; V POWERGRID transcript].
- **Apraava Energy (CLP India/CDPQ)**, **Kalpataru Projects (development arm)**, **Megha Engineering**, **GR Infraprojects (sold TBCB SPVs to IndiGrid)**, **Techno Electric** [primer; K].
- **STUs:** MSETCL, GETCO, RVPN, TANTRANSCO, APTRANSCO, KPTCL, UPPTCL, etc. They own most 220–400 kV intra-state assets. **InSTS projects are increasingly tendered under TBCB**: 16 InSTS projects worth ₹14,603 Cr were under bidding at 31-Jul-2026 [V POWERGRID Q1 deck].
- **EPC and equipment (not members, but the bottleneck):** KEC International, Kalpataru, L&T, Tata Projects (EPC); Hitachi Energy India, Siemens Energy India, GE Vernova T&D India, CG Power, BHEL, Transformers & Rectifiers (equipment); Apar, Sterlite Electric (conductors) [K]. **Siemens Energy India order backlog +22%** (headline) [V-snip tndindia listing].

### 5.3 Competition for the next schemes (pipeline)
- **POWERGRID's bidding pipeline ₹1,19,495 Cr (31-Jul-26):** under bidding ₹73,875 Cr (ISTS 9 projects ₹59,272 Cr; InSTS 16 projects ₹14,603 Cr) + to be floated ₹45,620 Cr [V].
  - Rajasthan REZ Ph-IV Part 5 (6 GW) **Barmer complex HVDC ₹24,974 Cr** — bids submitted, BPC evaluating, e-RA date not out [V transcript].
  - Jam Khambhaliya REZ Ph-II (5.5 GW) + Jamnagar Ph-I ₹7,688 Cr; Lakadia REZ Ph-II (7.5 GW) ₹7,506 Cr; ERES-47 Nawada–Durgapur–Jeerat 765 kV ₹5,270 Cr; WR PSP Satara Part A ₹4,710 Cr; Lakadia–JKB–Jamnagar common system ₹3,839 Cr; Bikaner (Pugal) 765 kV GSS ₹2,942 Cr [V].
  - In May-2026 the pipeline was ₹1,10,604 Cr, incl. Vizag GH2 ₹8,386 Cr, Krishnagiri REZ-I ₹7,627 Cr and WR-ER NES-A ₹6,444 Cr. POWERGRID has since won Krishnagiri and WR-ER Part A [V].
- **AESL's near-term tender view: ~₹1.4 L Cr** (Q2 FY27; ₹1.1 L Cr at Q1; ~₹1.5 L Cr in the FY26 primer) [V].
- **Pang–Kaithal (Ladakh) HVDC:** CCEA-approved Oct-2023 at ₹20,773.70 Cr (713 km incl. 480 km ±350 kV HVDC; 5 GW terminals; target FY30) [V-snip]. Under RTM with POWERGRID, NCT cost **₹22,942 Cr "awaiting communication from GoI"** and not in WIH [V].

---

## 6. Business-model archetypes and their economics

| # | Archetype | Example | Revenue basis | Return driver | EBITDA margin | Key risk |
|---|---|---|---|---|---|---|
| 1 | **RTM cost-plus ISTS** | POWERGRID standalone | AFC = ROE (15.5% grossed up) + interest + depreciation + O&M + IoWC; recovered irrespective of flow | Regulated equity growth (capitalisation) + availability incentive + tax gross-up | ~85% (standalone EBITDA ₹40,018 Cr / transmission + consultancy ₹40,904 Cr) [E from V] | Tariff falls after year 12 ("regulatory drag"); CERC order delays; disallowances; ROE cut at the next reset (2029) |
| 2 | **TBCB BOOM SPV** | POWERGRID SPVs; AESL TBCB lines; Resonia | 35-yr levelised tariff bid in e-RA | Capex and timeline vs bid; leverage (75:25+); refinancing; change-in-law claims | ~90–92% [V AESL transmission] | Bid aggression; ROW/equipment delay (tariff starts at COD); LDs; no reset |
| 3 | **Regulated urban distribution** | AEML | MERC ARR on RAB; ROE 15.5% wires / 17.5% supply (MERC MYT 2024) [K: integrated-power dossier] | RAB growth; loss below norm (AEML 4.29% vs 5.31% permissible); collection ~99.75% | ~18% (operating, on gross revenue incl. power purchase) [V] | Tariff shocks, regulatory assets, parallel-licence competition (AEML seeks parallel licences) |
| 4 | **AMISP smart metering** | AESL, IntelliSmart, PESL | Per-meter-per-month for ~120 months; DBFOOT | Installation velocity; capex per meter; discom payments (RDSS GBS + LC) | Ind AS 82–85%; non-Ind AS ~89% [V] | Discom counterparty; consumer/state pushback; scheme sunset Mar-2028 |
| 5 | **Asset recycler / InvIT** | PGInvIT, IndiGrid | Distributions from operating SPVs | Buy at ~8–9% yield, finance at lower cost | ~90% | Rates; reinvestment |
| 6 | **Merchant / energy solutions** | AESL ESP | Spread between contracted RE/BESS cost and C&I/utility/exchange price | Merchant price (IEX ₹7.3 Sep-26), open position | ESP op. EBITDA ₹1,393 Cr on ₹4,103 Cr revenue = 34% (H1 FY27) [V] | Price volatility, counterparty, related-party sourcing |

- **Economic contrast in one line:**
  - POWERGRID earns ~15.5% on a sovereign-cost balance sheet (D:E 60:40, average debt cost ~5.6% [E]), so equity ROE ~15–16% [V RoNW 15.85%].
  - AESL earns low-teens project returns on 75:25+ leverage plus distribution ROE plus trading. Consolidated ROE is only ~9.4% [V screener], because a large equity base was raised ahead of assets (QIPs ₹8,373 Cr in 2024 and ₹3,500 Cr in 2026) and SCA accounting defers margin.

---

## 7. Regulation and policy

### 7.1 The tariff machinery (CERC, RTM)
- **Regulator:** CERC for ISTS (POWERGRID, AESL's ISTS lines); SERCs for intra-state (MERC for AEML and Maharashtra InSTS; GERC for Gujarat) [K].
- **CERC (Terms and Conditions of Tariff) Regulations 2024, control period FY25–FY29** [K; draft V-snip]:
  - **Base ROE 15.5% post-tax** for transmission. The Jan-2024 draft proposed 15% for new transmission; the final notified version reportedly kept 15.5% — VERIFY on cercind.gov.in. It is grossed up by the effective tax rate. The **new-tax-regime switch** (POWERGRID "expected transition") lowers the gross-up and hence pre-tax tariff, and is roughly PAT-neutral [E].
  - **Debt:equity 70:30** normative; equity above 30% is treated as normative debt [K].
  - **Depreciation:** straight-line at CERC rates (~5.28% for transmission assets) for the first 12 years (to repay debt), the balance spread over the remaining useful life (35 years for lines/substations) [K]. Hence the **post-year-12 tariff drop**: Q1 FY27 "regulatory drag" ₹330 Cr on depreciation/interest trajectory [V transcript].
  - **O&M norms** per ckm and per bay by voltage, escalated annually [K].
  - **Availability:** full AFC recovery at **NATAF 98% (AC)**; HVDC lower (~96% bipole) [K]; incentive above the norm. FLAG: the incentive band (98.5%? to a 99.75% cap?) was not verified. POWERGRID earned **₹664 Cr incentive (FY26)** [V].
  - **Late-filing / pending-order interest:** where CERC orders lag DOCO, the licensee accrues interest at **SBI MCLR + 150 bp** on the differential [V transcript] — POWERGRID ₹705 Cr in FY26, ₹22 Cr in Q1 FY27.
- **BESS amendment (20-Mar-2026):** CERC allows transmission service providers to own integrated energy storage under s.62. POWERGRID filed petitions after NR/WR RPC consent [V deck and transcript].

### 7.2 Award policy: RTM vs TBCB
- **The Tariff Policy 2016 mandates TBCB** for ISTS, with exceptions for strategic/urgent/upgrades [K]. MoP/NCT decide the route.
  - Recent RTM allocations to POWERGRID: Pang–Kaithal HVDC (proposed), offshore wind evacuation (₹13,142 Cr, excluded from WIH), smaller augmentations [V].
  - **83% of POWERGRID's WIH is TBCB** (81% at Mar-26) [V].
- **SCOD realism:** GoI revised implementation timelines from as little as 18 months (765 kV D/C) to **26–30 months+** [V transcript]. This lowers LD risk on new bids [E].
- **Chinese equipment:** GoI has allowed **four companies** (Chinese-linked) to supply/bid. POWERGRID "will adhere to guidelines" [V transcript]. Supply should ease; it is also a security-policy watch item [E].

### 7.3 Who pays: PoC → GNA, and the ISTS waiver
- **Sharing regime:** the point-of-connection (PoC) method (2010–2020) gave way to the **2020 Sharing Regulations** (national/regional/transformer components; usage-based) and from **Oct-2023 to the General Network Access (GNA) regime** under the CERC Connectivity and GNA Regulations 2022: DICs book GNA quantum, and ISTS charges are levied per MW of GNA [K]. **The transmission licensee's revenue does not depend on who pays** — CTUIL pools and pays the licensee its AFC/tariff [K; V transcript "my tariff is rupees per annum"].
- **ISTS charge waiver for RE (a cost shift onto discoms, not a cut to licensee revenue):**
  - 100% waiver for 25 years for solar/wind (and PSP/BESS) commissioned by **30-Jun-2025** [K].
  - Then graded: projects commissioned **Jul-2025 to Jun-2026 pay 25% of ISTS charges; Jul-2026 to Jun-2027 pay 50%; Jul-2027 to Jun-2028 pay 75%; 100% thereafter** [V-snip tndindia on MoP Nov-2021 order].
  - **MoP (Apr-2026) extended graded waivers to delayed projects with a firm PPA by 31-Mar-2026 and a scheduled connectivity date between 1-Jul-2025 and 30-Jun-2028** [V-snip solarquarter].
  - Separate long waivers apply for green hydrogen/offshore wind to Dec-2032 [V-snip vikaspedia headline].
  - Ostara's CEO estimated that ending the waiver could lift transmission cost for RE ~16% [V-snip energetica headline].
- **Implication for members:** none on billing. Indirectly, the phase-out raises delivered RE cost and could slow RE bids, and hence the planning pipeline [E].

### 7.4 Smart metering (RDSS)
- **RDSS (Jul-2021): outlay ₹3.03 L Cr** (GBS ₹97,631 Cr) [K: integrated-power dossier; V-snip Outlook for ₹3.03 L Cr]. Sanctioned ₹2.84 L Cr incl. infrastructure ₹1.53 L Cr [K: integrated-power dossier, PIB 5-Feb-2026].
- **Smart-meter component: 20.33 crore meters sanctioned (19.79 crore consumer, 52.53 lakh DT, 2.05 lakh feeder), ₹1.31 L Cr, GBS ₹24,173 Cr**; installed **5.73 crore (RDSS) at 30-Jun-2026**; sunset **31-Mar-2028** [V-snip].
- **Reasons for delay** (official): model RFP, test beds, vendor empanelment, tendering [V-snip]. Consumer/political resistance to prepaid meters has been reported in several states; no fetched source this session — [K, FLAG].
- **AMISP model:** DBFOOT, 120 months, per-meter-per-month fee. AESL's ten contracts are all DBFOOT/120 months [V].
  - AESL's book: MSEDCL NSC-05 8.1 mn (₹9,667 Cr), NSC-06 5.2 mn (₹6,294 Cr); NBPDCL 2.8 mn (₹3,102 Cr); APCPDCL 1.7 mn; APSPDCL 1.3 mn; APEPDCL 1.1 mn; BEST 1.1 mn; AEML 1.8 mn (₹2,323 Cr, Jun-25); APDCL 0.8 mn; UPCL 0.7 mn [V].
  - **~54% of the meter book (13.3 mn) is with MSEDCL** — the same discom that just signed AESL's 2,500 MW RTC PPA [E from V]. Counterparty concentration.

### 7.5 Distribution regulation (AEML)
- MERC MYT order (28-Mar-2025) for FY26–30 [primer; K: integrated-power dossier]. MERC MYT Regulations 2024: **ROE 15.5% for wires (14% base + 1.5% performance-linked if wires availability ≥99.5%), 17.5% for retail supply** [K: integrated-power dossier, MERC PDF].
- AEML Q1 FY27 distribution loss 5.16% (heatwave) was within the **permissible 5.31%** [V].

### 7.6 Governance overhang (AESL) — what the US matters actually were
- **Nov-2024 EDNY indictment and SEC civil complaint:**
  - Alleged that Adani Green Energy executives (Gautam Adani, Sagar Adani, Vneet Jaain) and Azure Power-linked individuals agreed to pay ~US$265 mn in bribes to Indian state officials to secure power-sale agreements for SECI solar capacity, and misled US investors in AGEL bond offerings [K: DoJ/SEC releases Nov-2024].
  - **AESL was not a defendant.** AESL and AGEL issued exchange clarifications in Nov-2024 that the AESL entity was not named [K — verify filing]. The shock hit AESL through funding: the group paused a US$ bond, and **Kenya's president cancelled AESL's ~US$736 mn KETRACO transmission PPP** (and the JKIA airport deal) on 21-Nov-2024 [K].
  - MSCI deferred free-float changes for AESL in Nov-2024 after a SEBI show-cause notice on free float [V-snip businesstoday headline].
- **2026 resolution:** DoJ announced the drop (18-May-2026); **Judge Garaufis dismissed the case 10-Aug-2026**, after questioning DoJ's process [V-snip]; SEC settled for US$18 mn in total [V-snip]. **OFAC's US$275 mn settlement (18-May-2026) is with Adani Enterprises over Iran-origin LPG — not AESL** [V-snip]. "With prejudice" and the Sagar Adani/Jaain specifics: [K: brief].
- **Live governance items for AESL:**
  - **Related-party sourcing in ESP** — AESL contracts wind/solar/BESS capacity "on a long-term basis, on fixed hire"; the analyst asked whether from Adani Green; the answer named no counterparty [V Q1 call].
  - Services to group cement/coal captive capacity [V].
  - Group EPC (Adani Infra) for transmission [K].
  - Promoter holding **73.39% (Sep-26)**, up from 69.94% (Mar-25) [V screener] — promoters bought in the 2026 QIP/secondary ("primary and secondary equity investments from marquee investors") [V release]. Pledge data not fetched [FLAG].
  - FII holding fell **17.58% → 9.57%** in 18 months while DII rose 6.33% → 13.61% [V screener].
- **Ratings:** AESL/ATSOL obligor group **Moody's Baa3/Stable, Fitch BBB-/Stable** (USPP and dollar bonds); AEML **S&P BBB-/Stable, Fitch BBB-, domestic AAA/Stable (India Ratings/CRISIL)**; most TBCB SPVs domestic AAA/AA+ [V Q2 deck]. **POWERGRID: AAA (CRISIL/ICRA/CareEdge); S&P BBB, Fitch BBB-, Moody's Baa3 — "at par with sovereign"** [V FY26 deck].

---

## 8. History and cycles (narrative; full timeline in §G)

- **1989–2013: building the national grid.** NPTC/POWERGRID set up 1989, renamed 1992. It took over central generators' transmission assets, built regional grids and inter-regional links, introduced 765 kV and HVDC, listed in 2007, and reached Maharatna status in 2013. **"One Nation, One Grid" was synchronised on 31-Dec-2013** [primer; K]. The July-2012 northern grid collapses (the world's largest blackout, ~600 mn people) led to the inter-regional push and the TBCB opening [K].
- **2006–2011: TBCB introduced** (guidelines 2006; first awards ~2010–11). Sterlite Grid and Adani Transmission become the private challengers; Reliance Infra exits [K].
- **2015–2019: the private consolidator.** Adani Transmission demerged from Adani Enterprises (2015) and buys TBCB SPVs and **Reliance Infra's Mumbai integrated business (2018, ~₹18,800 Cr)** → AEML [primer]. **QIA buys 25.1% of AEML (2019–20)** [K]. IHC invests ~US$500 mn in AESL via a preferential issue (2022) [K]. **(TotalEnergies' Adani stakes are in ATGL/AGEL, not AESL — the brief's "TotalEnergies stake" is mis-attributed [K]; verify against the AESL shareholding pattern.)**
- **2019–2023: POWERGRID's flat patch.** Inter-regional backbone largely built; capex fell to ~₹7,500–12,500 Cr/yr; CWIP shrank from ₹35,177 Cr (FY20) to ₹12,854 Cr (FY22) [V screener]. Profit flat at ₹15.4–15.6k Cr in FY23–25 [V]. 2021: PGInvIT IPO (₹7,735 Cr raised incl. OFS ₹2,736 Cr [K/V-snip]), CTUIL separated from POWERGRID, RDSS launched.
- **2023–2024: the shock and the plan.** Hindenburg (Jan-2023) halves Adani stocks. NEP-Transmission (2024, ~₹9.15 L Cr). Green Energy Corridor II. Record TBCB awards in FY25 (45 ISTS schemes, ₹19,786 Cr tariff) [V-snip]. AESL's US$1 bn QIP (Aug-2024). US indictment (Nov-2024); Kenya cancellation.
- **2025–2026: the capex supercycle meets the supply chain.**
  - POWERGRID capex ₹26,255 Cr (FY25) → ₹39,967 Cr (FY26) [V]. FY26 national line target cut 37% mid-year [V-snip]. Equipment lead times 15–24 months [V-snip]. GoI revises SCODs, admits Chinese suppliers.
  - CERC BESS regulations (20-Mar-2026). CEA 900 GW plan (Mar-2026).
  - Peak 270.8 GW (May-2026).
  - Adani legal resolution (May–Aug 2026). AESL second QIP (Jul-2026), IntelliSmart deal, ESP launch.
  - RBI hike to 5.50% (7-Oct-2026); both stocks at or near 52-week lows in Oct-2026 [V screener].
- **Cycle character:** transmission has a **capex cycle, not an earnings cycle**.
  - Earnings lag capex by 2–4 years through CWIP. POWERGRID's FY27–FY29 earnings growth is "stored" in ₹50k Cr of CWIP and a ₹1.76 L Cr WIH.
  - The risk cycle is execution (ROW, equipment) and rates (valuation) [E].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands

| KPI | Definition | POWERGRID (latest) | AESL (latest) |
|---|---|---|---|
| **Network ckm (operational)** | Circuit-km in commercial operation | 1,86,595 (Jun-26) [V] | 20,023 (Sep-26); 29,802 incl. UC [V] |
| **Transformation MVA** | Substation capacity | 6,34,516 (Jun-26) [V] | 49,150 operational; 1,43,425 incl. UC [V] |
| **Availability %** | Revenue/AFC-weighted availability vs NATAF | 99.84% FY26; 99.80% Q1 FY27 [V] | 99.63% H1 FY27; 99.8% Q2 [V] |
| **Capex / capitalisation (₹ Cr)** | Spend / assets put into service | 39,967 / 28,206 FY26; guide 37,000 / 30,000 FY27 [V] | Capex 14,232 FY26; 7,850 H1 FY27 [V]; capitalisation n/d |
| **WIH / UC order book (₹ Cr)** | Cost of projects won but not commissioned | 1,75,700 incl. CWIP 50,419 (Jun-26) [V] | 87,222 (15 projects; ₹10,994 Cr/yr tariff) [V] |
| **TBCB win rate / share** | Wins ÷ bids; tariff share | FY26 9/28; FY27 YTD 6/19; cum. ~47% [V] | 29% FY26; 17% H1 FY27 (share of bids) [V] |
| **Regulated equity / RAB** | Equity in RTM assets | n/d; proxy ~₹83k Cr [E]; TBCB equity ₹13,373 Cr [V] | AEML RAB ₹10,456 Cr (equity ₹5,564 Cr) [V] |
| **Incentive income** | Availability above norm | ₹664 Cr FY26; ₹123 Cr Q1 FY27 [V] | ₹61 Cr H1 FY27 [V] |
| **Collection efficiency / receivable days** | Realisation ÷ billing | 101.2% FY26; 104.0% Q1 FY27; 10.7 → 12.1 days [V] | AEML 99.75% H1 FY27 [V] |
| **Distribution loss** | (Input − billed) ÷ input | — | AEML 4.29% H1 FY27 (permissible 5.31%) [V] |
| **Smart meters installed / book** | Cumulative installs; contracted meters | PESL ₹832 Cr revenue FY26 [V] | 14.8 mn / 24.6 mn (60%); ~19k/day in H1 [V] |
| **Net debt / EBITDA** | Company basis | Gross debt ₹1,48,009 Cr ÷ EBITDA ₹39,677 Cr = 3.7× (gross; cash not fetched) [E] | **3.63× TTM (Sep-26)**; 4.5× FY26 [V] |
| **Debt : equity** | Book | 60:40 (Mar-26); 58:42 (Jun-26) [V] | Borrowings ₹51,801 Cr ÷ net worth ₹31,304 Cr ≈ 62:38 (Sep-26) [E from V screener] |
| **Dividend payout** | DPS ÷ EPS | 53% FY26 (₹9.00/sh) [V screener; primer] | 0% [V] |

### 9.2 The profit equation in practice
- **POWERGRID:**
  - FY26 PAT ₹15,928 Cr ≈ RTM regulated equity (~₹83k Cr [E]) × 15.5% ≈ ₹12,900 Cr
  - + TBCB SPV profit (equity ₹9,558 Cr × ~15% ≈ ₹1,400 Cr [E])
  - + incentive ₹664 Cr + telecom/consultancy (~₹600–800 Cr PAT [E])
  - + pending-order interest ₹705 Cr + deferred-tax credit ₹832 Cr
  - − regulatory drag.
  - **About ₹1,500–2,200 Cr of FY26 PAT was non-recurring or rate-sensitive (interest on differential tariff, DTL credit, prior-period income ₹617 Cr)** [E from V].
- **AESL (H1 FY27 operating EBITDA ₹5,878 Cr):** transmission ₹2,871 Cr (49%) + distribution ₹1,192 Cr (20%) + smart meters ₹352 Cr (6%) + **ESP ₹1,393 Cr (24%)** + other ₹70 Cr [V]. Ex-ESP operating EBITDA grew **+31% YoY** (₹4,485 Cr vs ₹3,435 Cr) [E from V]; including ESP, +70%.

---

## 10. Global lens

| Company (country) | Model | Scale (approx.) | Returns | Valuation | Source/tag |
|---|---|---|---|---|---|
| **State Grid Corp. of China** | State monopoly T&D, UHV pioneer | ~1.1 mn km lines; world's largest utility by revenue (~US$500 bn+) | Low (state) | Unlisted | [K] |
| **National Grid (UK/US)** | Regulated transmission (UK, RIIO-T3 from Apr-2026) + US distribution | RAB ~£50 bn+ UK + US rate base | Allowed RoE (RIIO-T3) ~6% real CPIH [K] | **LTM P/E ~14.8×, EV/EBITDA ~12.7×** | multiples.vc [V-snip] |
| **Terna (Italy)** | TSO, regulated (WACC-based) | ~75,000 km lines [K] | EBITDA margin ~70%+ [K] | **~16.1× 2026E P/E, 12.2× EV/EBITDA, 4.3% yield** (Intermonte Nov-25); trailing 18.6× (Jun-26) | [V-snip] |
| **Redeia / Red Eléctrica (Spain)** | TSO + telecom satellite | — | EBITDA margin ~76% | EV ~US$16 bn ÷ LTM EBITDA ~US$1.5 bn ≈ 10–11× | multiples.vc [V-snip; E arithmetic] |
| **Elia Group (Belgium/Germany 50Hertz)** | TSO, heavy offshore capex | — | Regulated RoE ~5–7% [K] | n/a fetched | [K] |
| **AEP / ITC Holdings (Fortis)** | US FERC transmission; FERC base ROE ~10.5% + adders [K] | — | — | US utilities trade ~17–21× P/E (NEE 17.5×, Duke 18.1×, Southern 20.8× TTM, Oct-2026) | [K: integrated-power dossier, companiesmarketcap] |
| **POWERGRID** | RTM + TBCB ISTS | 1.87 lakh ckm | RoNW 15.85% (FY26) [V] | **14.3× P/E, 2.26× P/B, ~9.4× EV/EBITDA (gross debt), 3.7% yield** | [V screener; E] |
| **AESL** | TBCB + distribution + meters + trading | 20k ckm operational | ROE 9.4%, ROCE 9.7% [V] | **40.4× TTM P/E, 4.8× P/B, ~16.9× TTM EV/EBITDA (company net debt)** | [V screener; E] |

- **Read:**
  - Indian allowed equity returns (15.5% nominal post-tax) are roughly 2× European TSO allowed returns and above FERC's ~10.5%, matching India's higher cost of capital (10-yr G-sec ~6.3–6.8% in 2025–26 [K, FLAG]) [E].
  - POWERGRID trades at a **P/E similar to National Grid and Terna but ~2.3× book**, because of its higher ROE.
  - AESL's multiple prices growth (UC book = 1.1× its current operational base by tariff [E]) plus the ESP.
  - EBITDA margins are similar globally (70–92%): the business model travels; the cost of capital does not.

---

## 11. Technology and disruption risks

1. **HVDC and VSC:** long-distance RE corridors (Bhadla–Fatehpur, Khavda–South Olpad, Barmer) and undersea links need VSC technology from 3–4 global OEMs. This is converter-slot scarcity, not a demand risk [V decks; K].
2. **1,200 kV UHVAC vs HVDC vs BESS:** planners weigh all three. POWERGRID's view is that BESS complements rather than replaces HVDC [V transcript]. **Co-located storage could reduce peak transmission need per GW of solar** [E]. A long-run risk to volumes, but RTM/TBCB contracts already signed are unaffected.
3. **Grid-forming/system strength:** synchronous condensers and STATCOMs become new regulated asset classes (POWERGRID's first SynCon TBCB win) [V].
4. **Digital substations, mobile GIS, insulated cross-arms, drones/AI patrols:** POWERGRID claims the world's first 765 kV digital substation, indigenous 220/132 kV mobile GIS, insulated cross-arms (−20% ROW), and Asia's first synthetic-ester transformer [V FY26 deck]. These lower O&M and ROW.
5. **Distributed generation and storage at the edge (rooftop + home batteries):** reduce distribution volumes (an AEML risk) more than ISTS needs [E].
6. **Smart-meter technology/cyber:** head-end and MDM cyber risk. AESL appointed a CISO on 22-Oct-2026 [V screener announcement]. Communication (RF mesh vs cellular) failures drive billing complaints and consumer pushback [K].
7. **Chinese equipment entry:** supply relief vs grid-security (the 2020 restrictions on Chinese power equipment) [V transcript; K].

---

## 12. What to watch

| Watch item | Date / frequency | Why |
|---|---|---|
| **POWERGRID Q2 FY27 results** | Not yet announced; ~early Nov-2026 [E] (last year 3-Nov) | Capitalisation run-rate (need ~₹24,700 Cr in Q2–Q4 for ₹30k Cr guidance); regulatory drag; TBCB disclosure promised "to examine" |
| **AESL Q2 FY27 call / H2 delivery** | Results out 22-Oct-2026 | ESP sustainability (monsoon-driven Q1–Q2 prices); IntelliSmart CCI approval; Vizag/Satara financial close |
| **Barmer HVDC (Rajasthan REZ Ph-IV Part 5, ₹24,974 Cr) e-RA** | Date unannounced [V] | Single largest TBCB award; POWERGRID vs AESL vs Resonia |
| **Pang–Kaithal HVDC (₹22,942 Cr) GoI communication** | Pending [V] | Would lift POWERGRID WIH ~13% at full RTM return |
| **CEA monthly transmission progress** | Monthly | FY27 target 1,58,339 MVA; 4M run-rate 35,670 MVA [V-snip] |
| **RDSS smart-meter installs and scheme extension** | Quarterly PIB/Parliament replies; sunset 31-Mar-2028 | 14.6 crore meters left; extension likely [E] |
| **CERC actions:** BESS-by-TSP petitions; next tariff regs (FY30–34) approach paper ~2028 | 2026–28 | ROE reset is the long-run risk |
| **ISTS waiver step-down** | 1-Jul-2027 (to 25% waiver) | RE bid economics |
| **Rates:** RBI MPC; 10-yr G-sec | Next MPC Dec-2026 [K] | Bond-proxy valuation; AESL refinancing |
| **Adani group:** promoter pledges, any SEBI orders, ratings outlook | Ongoing | Cost of capital; FII holding fell to 9.57% |
| **POWERGRID SPV mergers (28 into 2), JV stake sales (Torrent Power Grid, Parbati Koldam, Sikkim)** | FY27 | Simplification; cash |
| **Equipment:** transformer lead times, Chinese supplier approvals | Quarterly | Execution |

---
## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **A state-written order book: the ₹9.15 L Cr NEP plus the ₹7.9 L Cr 900-GW plan.**
   - Transmission demand comes from CEA/NCT planning to evacuate 500 GW (2030) → 900 GW (2036) of non-fossil capacity.
   - Volumes are visible years ahead; the variable is the award route (RTM/TBCB) and timing.
   - POWERGRID sees a >₹15 L Cr long-term opportunity and ₹1.19 L Cr under or near bidding [V].
2. **Execution is the binding constraint, not demand.**
   - FY26 line targets were cut 37% and still missed (~12,139 ckm vs 15,382) [V-snip].
   - 765 kV transformers take 20–24 months [V-snip]. ROW compensation norms are being re-priced state by state [V].
   - Every month of delay on a TBCB line is a month of lost tariff. On RTM it is delayed capitalisation (POWERGRID's CWIP ₹50,419 Cr).
3. **TBCB vs RTM: the return is migrating from regulator-set to bid-set.**
   - 83% of POWERGRID's WIH is TBCB [V]; AESL is almost entirely TBCB.
   - TBCB returns are undisclosed and contested; RTM's 15.5% is the anchor.
   - The equity story for both is "how much above the cost of capital can a TBCB bid earn?" — sovereign-cost POWERGRID vs leveraged AESL.
4. **Cost of capital is the competitive weapon and the valuation driver.**
   - POWERGRID borrows at near-sovereign cost (AAA; BBB/Baa3 at par with sovereign; JBIC yen loan) [V]. AESL borrows at Baa3/BBB- with an Adani risk premium; Adani portfolio blended cost ~7.8% [primer].
   - In a reverse auction, 50–100 bp of funding cost decides the winner [E].
   - The Oct-2026 rate hike de-rated both stocks to 52-week lows [V].
5. **AESL is no longer a pure wire.**
   - Distribution (20%), smart meters (6%) and the new merchant-like ESP (24%) make up ~half of H1 FY27 operating EBITDA [V].
   - The ESP brings price risk (exchange sales at ₹3–15/kWh) and related-party questions into a "utility" multiple [V Q1 call].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "The lines that can't keep up": India's transmission execution gap
- **Data:**
  - FY26 targets cut from 24,400 → 15,382 ckm and 1,97,617 → 1,26,007 MVA; achieved ~12,139 ckm and 1,13,013 MVA [V-snip].
  - FY25 ~8,830 ckm (decade low) [K].
  - Transformer lead times [V-snip]. SCODs widened from 18 → 26–30 months [V].
  - ROW compensation guidelines adopted by Delhi, Haryana and Gujarat; not costed in the ₹7.9 L Cr plan [V].
  - Chinese suppliers admitted (4 companies) [V].
  - RE curtailment ~5% in Q1 FY27 [K: integrated-power dossier].
  - POWERGRID CWIP ₹18,197 Cr (FY24) → ₹50,419 Cr (Jun-26) [V].
- **Angle:** the plan is fully funded on paper; the queue is in transformer factories and farmers' fields. Who wins: the developer with procurement scale (POWERGRID bulk procurement) and balance sheet.

### B2. "Same wire, two balance sheets": POWERGRID vs AESL

| Item | POWERGRID | AESL | Source |
|---|---|---|---|
| Operational ckm | 1,86,595 | 20,023 | [V] |
| Pipeline | WIH ₹1,75,700 Cr | UC ₹87,222 Cr | [V] |
| Pipeline ÷ m-cap | 0.78× | 0.58× | [E] |
| Capex | ₹39,967 Cr (FY26) | ₹14,232 Cr (FY26) | [V] |
| Leverage | Gross debt ₹1.48 L Cr ≈ 3.7× EBITDA | Net debt ₹41,067 Cr ≈ 3.63× TTM EBITDA | [V/E] |
| ROE | 15.3% | 9.4% | [V screener] |
| P/E | 14.3× | 40.4× | [V] |
| Dividend yield | 3.70% | 0% | [V] |
| FY26 PAT growth | +2.6% | +159% | [V] |
| H1 FY27 PAT growth | Q1 −0.9% | +137% | [V] |

- **Angle:** the market pays ~3× the earnings multiple for growth and optionality (smart meters, ESP, Mumbai) at AESL, and ~14× for a near-sovereign yield at POWERGRID.

### B3. "The meter is the new wire": RDSS smart metering and AESL's bet on it
- **Data:**
  - 20.33 crore sanctioned; 5.73 crore installed (28%) by Jun-2026; sunset Mar-2028 [V-snip].
  - AESL: 24.6 mn book (₹29,519 Cr; 120-month DBFOOT), 14.8 mn installed (2× in a year), ~19k installs/day [V]. **IntelliSmart (₹3,050 Cr, +22.3 mn)** [V].
  - Non-Ind AS smart-meter EBITDA ₹654 Cr in H1 (89% margin) vs Ind AS ₹352 Cr [V].
  - MSEDCL concentration ~54% of AESL's book [E].
- **Questions:** discom payment discipline; prepaid pushback (unverified); what happens after 2028.

### B4. "The utility that trades": AESL's Energy Solutions Platform
- **Data:**
  - ESP H1 FY27 operating revenue ₹4,103 Cr, operating EBITDA ₹1,393 Cr (Q2 ₹803 Cr) [V].
  - 25,333 MU supplied in H1 [V].
  - Q1: of 3,325 MU on its own position only 400–500 MU was back-to-back; rest sold on exchange/bilateral at ₹3–15/kWh; delayed monsoon helped; ~5 GW supply tied up (wind/solar + 3.5 GWh BESS on fixed hire) [V Q1 call].
  - 2,500 MW / 25-yr RTC PPA with MSEDCL [V].
- **Angle:** H1 FY27 PAT doubled largely because of this segment. Without it, operating EBITDA grew ~31% [E]. The writer should present it as a merchant-plus-annuity hybrid and flag the counterparty/related-party opacity.

### B5 (optional). "Bond proxy in a rate hike": what 5.50% repo means for regulated wires
- POWERGRID earnings yield ~7.0% (1/14.3) vs dividend yield 3.7% [E/V].
- Repo hike 7-Oct-2026 [K-sib]. Both stocks at or near 52-week lows [V].
- CERC ROE is fixed nominal 15.5% to FY29, so higher rates widen the regulatory spread for RTM (positive) but raise TBCB bid hurdle rates and compress valuation multiples [E].

## C. The REVENUE / PROFIT EQUATION

**RTM transmission:** Annual Fixed Cost (AFC) = Return on equity (Regulated equity × 15.5% ÷ (1 − effective tax rate)) + Interest on normative loan + Depreciation (≈5.28% of gross block in years 1–12) + O&M (norm per ckm and per bay) + Interest on working capital; × (availability ÷ NATAF, capped) + incentive above norm.
**PAT ≈ Regulated equity × 15.5% + incentive + O&M efficiency + tax gross-up difference.**

**TBCB transmission:** Revenue = Levelised tariff (₹ Cr/yr, bid, 35 yrs) × availability factor (≥98% full) − penalties. Equity IRR = f(capex vs bid, COD vs SCOD, leverage, refinancing).

**Smart metering:** Revenue = Meters installed × ₹ per meter per month × 12 (non-Ind AS view); Ind AS front-loads SCA construction revenue.

**Distribution (AEML):** ARR = power purchase + O&M + depreciation + interest + ROE on equity in RAB (15.5% wires, 17.5% supply) ± efficiency gains (loss below norm) [K: MERC].

### C.1 Worked example 1 — ₹1,000 Cr RTM 400 kV line (POWERGRID-type) [E composite]
- Capital cost ₹1,000 Cr → equity ₹300 Cr; debt ₹700 Cr at 7.5%.
- ROE 15.5% × ₹300 Cr = **₹46.5 Cr post-tax**. Grossed up at 25.17% tax: ₹62.1 Cr pre-tax.
- Interest year 1: ₹700 Cr × 7.5% ≈ ₹52.5 Cr (declining as depreciation repays debt).
- Depreciation 5.28% × ₹1,000 Cr = ₹52.8 Cr.
- O&M ≈ 1.5–2% of capex ≈ ₹18 Cr. IoWC ≈ ₹4 Cr.
- **Year-1 AFC ≈ ₹190 Cr (19% of capex)**.
- **Year 13:** debt repaid, so interest → 0 and depreciation drops to the residual spread over 23 years (~₹1.5 Cr/yr on the 10% balance; land excluded). AFC falls to ~₹90 Cr. ROE stays at ₹46.5 Cr. Hence the **"regulatory drag"** on revenue but not on PAT — except that reported PAT dips where actual interest and depreciation differ from normative [V transcript explanation].
- **Availability:** at 99.84% vs NATAF 98% → full AFC plus incentive (~1–2% of AFC [E]).

### C.2 Worked example 2 — AESL Vizag PTL (TBCB, Q2 FY27 win) [E composite, tariff V]
- Levelised tariff **₹856 Cr/yr**; 1,470 ckm, 10,500 MVA [V].
- Assume capex at the UC-book average yield of 12.6% → capex ≈ **₹6,800 Cr** [E].
- D:E 75:25 → equity ₹1,700 Cr; debt ₹5,100 Cr at 8.0%.
- Year-5 P&L [E]:
  - Revenue ₹856 Cr; O&M (8%) ₹68 Cr → EBITDA ₹788 Cr (92%, matching AESL's segment margin).
  - Interest ~₹380 Cr; depreciation/amortisation ~₹195 Cr (35-yr straight line).
  - PBT ₹213 Cr; tax 25% → **PAT ~₹160 Cr = 9.4% ROE in year 5**, rising to the high teens as debt amortises.
  - Project equity IRR ≈ 12–14% over 35 years (incl. refinancing) [E].
- **Sensitivity:**
  - +10% capex overrun → year-5 ROE ~6% [E].
  - 12-month delay → ~₹856 Cr of tariff lost plus IDC, ≈ −1.5 to −2 pp equity IRR [E].

### C.3 Worked example 3 — POWERGRID FY26 actual decomposition [V + E]
- Total income ₹47,684 Cr → opex ₹7,875 Cr → EBITDA ₹39,677 Cr (83%).
- − depreciation ₹13,030 Cr − interest ₹7,816 Cr → PBT ₹18,831 Cr (EBITDA already includes the JV share of −₹132 Cr).
- − tax ₹2,903 Cr (incl. ₹832 Cr DTL credit) → **PAT ₹15,928 Cr**.
- Ex-credit PAT ₹15,096 Cr (−2.7% YoY) [E].
- ROE: ₹15,928 Cr ÷ average net worth ₹96,579 Cr = **16.5%**; company RoNW 15.85% on closing [V].
- Earnings per ₹ of gross block: ₹15,928 Cr ÷ ₹3,20,334 Cr = **5.0%** [E].
- **Read:** each ₹30,000 Cr of capitalisation at RTM economics adds ~₹1,400 Cr of PAT (30% equity × 15.5%) [E]. FY27 guidance (₹30,000 Cr) ≈ +9% PAT run-rate from FY28, before drag [E].

### C.4 Worked example 4 — AESL smart meters (non-Ind AS annuity view) [E from V]
- Book ₹29,519 Cr ÷ 24.6 mn meters ÷ 120 months ≈ **₹100 per meter per month** [E] (primer range ₹60–167).
- 14.8 mn installed × ₹100 × 12 = **₹1,780 Cr/yr run-rate revenue** at full billing [E]. Actual non-Ind AS revenue H1 FY27 ₹731 Cr (₹1,460 Cr annualised) — billing lags installation (cumulative meter-months 74.5 mn in H1) [V].
- At 89% non-Ind AS EBITDA margin [V] → ~₹1,580 Cr/yr EBITDA at full run-rate on the installed base [E].
- Capex per meter ≈ ₹6,000–7,000 [E; FLAG].

### C.5 Worked example 5 — AESL ESP Q1 FY27 actual [V + E]
- Position volume 3,325 MU produced EBIT ~₹570 Cr → **~₹1.71/kWh spread** [E from V].
- Services volume ~9,800 MU at "~0.3 paise"-type margins [V; unit unclear].
- At a normalised spread of ₹0.5–1.0/kWh on ~13,000 MU/yr of position → ₹650–1,300 Cr/yr EBIT [E] vs the ~₹2,800 Cr annualised H1 run-rate. **H1 FY27 ESP earnings are probably above trend** (management cited the delayed monsoon) [V/E].

### C.6 Company-level reconciliations [E]
- **POWERGRID** screener OP ₹32,831 Cr vs company EBITDA ₹39,677 Cr: the ~₹6,800 Cr gap is screener booking regulatory-deferral (DA for DTL) movements in expenses plus other-income classification [E].
- **AESL** screener OP ₹8,005 Cr vs company EBITDA ₹8,726 Cr vs operating EBITDA ₹7,407 Cr [V]. Screener sales ₹27,588 Cr ≈ total income ₹28,325 Cr − other income ~₹721 Cr [E].

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| 1. National plan | **₹9.15 L Cr** transmission capex FY23–32 (NEP) + ₹7.93 L Cr for FY27–36 (900 GW plan) | CEA via Outlook [V-snip]; POWERGRID deck [V] |
| 2. Execution gap | **~12,139 ckm added in FY26 vs 24,400 original target** | Construction World / tndindia [V-snip] |
| 3. POWERGRID pipeline | **₹1,75,700 Cr works in hand (83% TBCB)** | POWERGRID Q1 FY27 deck [V] |
| 4. AESL pipeline | **₹87,222 Cr UC transmission + 24.6 mn smart meters (₹29,519 Cr)** | AESL Q2 FY27 deck [V] |
| 5. Combined FY26 profit | **₹18,321 Cr reported PAT** (POWERGRID ₹15,928 + AESL ₹2,393) | screener [V; E sum] |
| 6. Combined m-cap | **₹3,76,375 Cr** (23-Oct-2026; POWERGRID 60%) | screener [V; E sum] |

Alternates: availability 99.84% (POWERGRID FY26) [V]; smart meters installed nationally 5.73 crore of 20.33 crore sanctioned [V-snip]; combined FY26 capex ₹54,199 Cr [E from V].

## E. Chart-ready datasets

1. **POWERGRID consolidated PAT (₹ Cr), FY20–FY26** [V screener]: FY20 11,059; FY21 12,036; FY22 16,824; FY23 15,417; FY24 15,573; FY25 15,521; FY26 15,928 (ex-DTL credit ~15,096 [E]).
2. **AESL consolidated sales and PAT (₹ Cr), FY20–FY26 + TTM** [V screener]: sales 11,416 / 9,926 / 11,258 / 13,293 / 16,607 / 23,767 / 27,588 / TTM 33,960; PAT 706 / 1,290 / 1,236 / 1,281 / 1,196 / 922 / 2,393 / TTM 3,897.
3. **POWERGRID capex vs capitalisation (₹ Cr)** [V; FY24–25 E labels]: FY24 ~12,500 / ~9,014; FY25 26,255 / ~15,291; FY26 39,967 / 28,206; FY27G 37,000 / 30,000; Q1 FY27 7,765 / 5,277.
4. **POWERGRID CWIP (₹ Cr, consolidated)** [V screener; deck]: FY20 35,177; FY21 24,838; FY22 12,854; FY23 13,772; FY24 18,197; FY25 33,585 (deck 36,341 incl. advances); FY26 43,747 (deck 47,980); Jun-26 50,419 (deck).
5. **POWERGRID WIH composition (₹ Cr, 30-Jun-26)** [V]: TBCB 1,46,315; RTM 25,168; other 4,217; (of which CWIP 50,419). Excluded: Pang–Kaithal 22,942; offshore 13,142.
6. **National transmission additions** [V-snip; K]: ckm FY20 ~11,664; FY21 ~16,750; FY22 ~14,895; FY23 ~14,625; FY24 ~14,203; FY25 ~8,830; FY26 ~12,139 (FY20–25 [K] VERIFY). FY26 MVA 1,13,013 vs target 1,26,007.
7. **AESL H1 FY27 operating EBITDA by segment (₹ Cr)** [V]: transmission 2,871; distribution 1,192; smart metering (Ind AS) 352; energy solutions 1,393; others 70 (total 5,878). H1 FY26: 2,285 / 994 / 145 / 28 / 21 (total 3,463 per release; segment sum 3,473).
8. **AESL UC transmission tariff by project (₹ Cr/yr)** [V]: Bhadla–Fatehpur HVDC 3,557; KPS III HVDC 2,392; augmentation (ROA, 141 projects) 2,852 (estimated billing); Vizag 856; Satara 618; Pune-III/Khavda IV-D 589; Khavda IV-A 509; Jamnagar 392; Mahan 363; Mundra I 308; Navinal 299; Halvad 271; WRNES Talegaon 221; WRSR 213; South Kalamb 120 (total 10,994 per deck; the components sum to 13,560 — the deck total appears to exclude or differently count the ROA augmentation line — FLAG).
9. **AESL smart meters installed (mn, cumulative)** [V]: Sep-25 7.4; Jun-26 13.4; Sep-26 14.8; order book 24.6; + IntelliSmart 22.3 (pending).
10. **Availability % (POWERGRID)** [V]: FY22 99.83; FY23 99.82; FY24 99.85; FY25 99.82; FY26 99.84; Q1 FY27 99.80. AESL H1 FY26 99.71 → H1 FY27 99.63.
11. **Ownership (Sep-26, %)** [V screener]: POWERGRID — promoter (GoI) 51.34, FII 24.03, DII 20.83, public 3.71; AESL — promoter 73.39, FII 9.57, DII 13.61, public 3.44.
12. **RDSS smart meters (crore)** [V-snip]: sanctioned 20.33; installed RDSS 5.73 (30-Jun-26); all schemes 7.24; remaining ~14.6 by Mar-2028 [E].
13. **AEML operating data** [V]: consumers 3.25 mn (H1 FY26) → 3.29 mn (H1 FY27); units H1 5,589 → 6,190 MU; distribution loss 4.30% → 4.29%; peak 2,170 → 2,457 MW; RAB ₹10,353 Cr (Jun-26) → ₹10,456 Cr (Sep-26).

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Good | Average | Weak | Members |
|---|---|---|---|---|
| Transmission availability (AC) | ≥99.75% | 99.0–99.75% | <98% (below NATAF; AFC cut) | POWERGRID 99.84% [V]; AESL 99.63% H1 [V] |
| Tripping per line (annual) | <0.3 | 0.3–0.6 | >0.6 | POWERGRID 0.26 [V] |
| Capitalisation ÷ guidance | ≥100% | 85–100% | <85% | POWERGRID FY26 113% [V] |
| Capitalisation ÷ opening CWIP | >70% | 50–70% | <50% (pile-up) | POWERGRID FY26 28,206 ÷ 36,341 = 78% [E] |
| TBCB win rate (count) | >35% | 20–35% | <20% | POWERGRID FY26 32%, FY27 YTD 32% [V/E] |
| Levelised tariff ÷ project cost | >13% | 11–13% | <11% (aggressive bid) | AESL UC book 12.6% [E] |
| EBITDA margin (transmission) | >90% | 85–90% | <85% | AESL 92% [V]; POWERGRID ~83% cons. [E] |
| Net debt ÷ EBITDA | <4× (developer); <3.5× (incumbent) | 4–5.5× | >5.5× | AESL 3.63× TTM; POWERGRID ~3.7× gross [V/E] |
| Collection (realisation ÷ billing) | ≥100% | 95–100% | <95% | POWERGRID 101.2% [V] |
| Receivable days | <30 | 30–60 | >60 | POWERGRID 10.7–12.1 [V] |
| Distribution loss (urban licensee) | <5% | 5–8% | >8% | AEML 4.29% [V] |
| Smart-meter installs ÷ order book | >60% in 3 yrs | 30–60% | <30% | AESL 60% [V]; national RDSS 28% [V-snip] |
| ROE (consolidated) | >15% | 10–15% | <10% | POWERGRID 15.3%; AESL 9.4% [V] |
| Dividend payout | 50–70% (incumbent) | 30–50% | <30% | POWERGRID 53% [V] |

## G. Timeline (year: event)

- 1989: National Power Transmission Corporation incorporated; renamed POWERGRID 1992 [primer].
- 2003: Electricity Act — open access, s.62/s.63 tariff routes [K].
- 2006: TBCB guidelines for transmission [K].
- 2007: POWERGRID IPO [primer].
- 2010–11: first ISTS-TBCB awards; PoC sharing regime (2010) [K].
- Jul-2012: northern/eastern grid collapses (~600 mn people) [K].
- 31-Dec-2013: "One Nation, One Grid" synchronised; POWERGRID Maharatna (2013) [primer; K].
- Dec-2015: Adani Transmission demerged from Adani Enterprises and listed [primer].
- 2016: Tariff Policy mandates TBCB for ISTS (with exceptions) [K].
- Aug-2018: Adani Transmission completes the Reliance Infra Mumbai acquisition (~₹18,800 Cr) → AEML [primer; K].
- 2019–20: QIA acquires 25.1% of AEML [K].
- 2020: CERC Sharing Regulations replace PoC [K].
- May-2021: PGInvIT IPO; POWERGRID retains 15% units [V-snip].
- Jul-2021: RDSS launched (₹3.03 L Cr) [K: integrated-power dossier].
- 2021: CTUIL separated from POWERGRID [K].
- Nov-2021: MoP order phasing out the RE ISTS waiver after Jun-2025 [V-snip].
- 2022: LPS Rules; CERC GNA Regulations (effective Oct-2023) [K].
- Jan-2023: Hindenburg report on the Adani group [primer].
- Jul-2023: Adani Transmission renamed Adani Energy Solutions [primer].
- Oct-2023: CCEA approves the Ladakh (Pang–Kaithal) HVDC, ₹20,773.70 Cr [V-snip].
- Mar-2024: CERC Tariff Regulations 2024–29 notified [K].
- Aug-2024: AESL US$1 bn (₹8,373 Cr) QIP [primer].
- Oct-2024: Sterlite Power's transmission business demerged → Resonia (GIC 49%) [V-snip].
- FY25: record 45 ISTS-TBCB schemes, ₹19,786 Cr tariff; AESL 28.6% share [V-snip].
- Nov-2024: US indictment (AGEL executives); Kenya cancels AESL's KETRACO PPP; MSCI free-float deferral [K; V-snip].
- 30-Dec-2024: POWERGRID sells residual 26% of four SPVs to PGInvIT (~₹507 Cr) [V-snip].
- Jul-2025: FY26 transmission targets cut to 15,382 ckm / 1,26,007 MVA [V-snip]; ISTS waiver step-down begins (1-Jul-2025) [V-snip].
- 14-Jan-2026: national grid crosses 5 lakh ckm [V-snip].
- Mar-2026: CEA 900 GW plan (₹7.93 L Cr); CERC BESS-by-TSP regulations (20-Mar-2026); MoP transformer lead-time review [V/V-snip].
- Apr-2026: MoP extends graded ISTS waivers to delayed RE [V-snip].
- 18-May-2026: OFAC–Adani Enterprises US$275 mn settlement; DoJ moves to drop the case; POWERGRID FY26 analyst meet (FY26 PAT ₹15,928 Cr) [V-snip; V].
- 21-May-2026: all-India peak demand record 270.8 GW [K: integrated-power dossier].
- 22-Jul-2026: AESL Q1 FY27 (PAT ₹1,237 Cr); IntelliSmart deal (₹3,050 Cr) [V].
- 27–30-Jul-2026: AESL QIP ~₹3,500 Cr at ₹1,615 [V-snip].
- 5/7-Aug-2026: POWERGRID Q1 FY27 (PAT ₹3,598 Cr; capitalisation ₹5,277 Cr) [V].
- 10-Aug-2026: EDNY dismisses the criminal case against Gautam Adani [V-snip].
- 7-Oct-2026: RBI repo hiked to 5.50% [K-sib].
- 12/16-Oct-2026: POWERGRID acquires three REZ TBCB SPVs; wins Pune West 765 kV GIS (₹199.55 Cr/yr) [V].
- 22-Oct-2026: AESL Q2 FY27 (PAT ₹1,364 Cr; UC book ₹87,222 Cr; 2,500 MW MSEDCL RTC PPA) [V].

## H. Figures I could not source well (and conflicts)

1. **National ckm additions FY20–FY25** — from memory [K]. FY26 ~12,139 ckm from Construction World conflicts with Mercom's 9-month pace (5,077 ckm to Dec-25) [V-snip]. Needs the CEA March-2026 transmission progress report.
2. **Inter-regional capacity at Mar-2026** — latest found is 1,20,340 MW (Jun-25) [V-snip]; POWERGRID's 1,01,180 MW is its own share [V].
3. **CERC 2024–29 final parameters** — ROE 15.5% for transmission (draft proposed 15% for new transmission), NATAF 98%, incentive band, depreciation 5.28%, O&M norms: [K], not fetched.
4. **POWERGRID regulated equity** — not disclosed in fetched decks; proxy ~₹83k Cr [E].
5. **POWERGRID cash & equivalents / net debt** — not fetched (gross debt only).
6. **POWERGRID FY24/FY25 capex and capitalisation** — chart labels ambiguous in the PDF text dump [E].
7. **TBCB award shares FY24–FY27 by winner** (Resonia, Tata Power, Apraava, IndiGrid/EnerGrid, others) — only AESL FY25 28.6% [V-snip] and the company claims; the tndindia full study is paywalled.
8. **Average TBCB bid IRRs** — no source; 12–14% equity IRR is [E].
9. **ISTS money pool (annual CTUIL billing)** — [E].
10. **NEP inter-state vs intra-state split** of ₹9.15 L Cr — [K, FLAG].
11. **US case details** — "with prejudice" and the counts against Sagar Adani/Vneet Jaain: [K: brief]; the AESL Nov-2024 clarification text not re-fetched [K].
12. **AESL promoter pledge** and related-party detail of ESP capacity contracts (counterparty for wind/solar/BESS hire) — not fetched.
13. **AESL operational ckm a year ago** (to compute commissioning pace) — not disclosed in the Q2 deck.
14. **AESL UC tariff total** — the deck total ₹10,994 Cr vs ₹13,560 Cr sum of listed components (incl. ₹2,852 Cr ROA augmentation "estimated billing") — FLAG.
15. **AESL Q2 distribution loss** — the release table prints Q2 FY27 3.30% vs 4.36% and supply reliability "9.99%" (typos likely); H1 4.29% is reliable [V].
16. **RDSS consumer resistance / state pushback** — no source fetched this session.
17. **10-yr G-sec yield (Oct-2026)** — not fetched.
18. **Global peers** — Elia not fetched; multiples from mixed dates/providers [V-snip].
19. **QIA 25.1% in AEML, IHC in AESL, TotalEnergies mis-attribution** — [K]; verify on AESL's shareholding pattern/annual report.
20. **Peak demand FY26 245.4 GW / 270.8 GW record** — [K: integrated-power dossier]; 270.82 GW also [V-snip Outlook].

---

# PART 2 — COMPANY FACT PACKS

**Sources and conventions for every pack:**
- Screener.in consolidated, pulled 23-Oct-2026 ~05:20 UTC (~10:50 IST, intraday) [V screener].
- Company documents downloaded from BSE this session [V] (URLs in §3.5).
- Primers in primers/ (refresh dates in each pack) [primer].
- "OP" = screener operating profit. "Company EBITDA" = as the company defines it (stated each time).
- EV/EBITDA: POWERGRID on **gross** debt (cash not fetched) ÷ company EBITDA; AESL on **company net debt** ÷ company EBITDA (screener basis shown for comparison).

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 23-Oct-26)

| Company | NSE | Year | Revenue (screener) | YoY % | OP (screener) | OPM % | Company EBITDA | PAT (reported) | PAT attrib. [E] | ROCE % | ROE % | Net debt | M-cap | P/E (TTM) | P/B | EV/EBITDA | Network (operational ckm) | Pipeline | Availability |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| POWERGRID | POWERGRID | FY26 | 46,733 | +2.1 | 32,831 (distorted — trap 6) | 70.3 | **39,677** (deck) | 15,928 (incl. ₹832 Cr DTL credit) | ~15,930 | 9.10 | 15.3 | **Gross 1,48,071** (screener) / 1,48,009 (company); net n/d | 2,26,563 | 14.3 | 2.26 | ~9.4× (gross debt ÷ co. EBITDA); 11.4× on screener OP | 1,86,595 (Jun-26) | WIH ₹1,75,700 Cr | 99.84% FY26 |
| Adani Energy Solutions | ADANIENSOL | FY26 | 27,588 (op. revenue 18,296) | +16.1 (op. rev +7.3) | 8,005 | 29.0 | **8,726** (incl. OI + one-time regulatory; op. EBITDA 7,407) | 2,393 | ~2,282 | 9.65 | 9.44 | **Company 39,268 (Mar-26); 41,067 (Sep-26)**; screener borrowings 49,176 − investments 2,644 = 46,532 | 1,49,812 | 40.4 (64.5× FY26) | 4.79 | ~21.7× FY26; ~16.9× TTM (co. net debt) | 20,023 (Sep-26) | UC ₹87,222 Cr + meters ₹29,519 Cr | 99.63% H1 FY27 |

## 2.1 Power Grid Corporation of India (POWERGRID · 532898) — India's national transmission utility: 1.87 lakh ckm, ~84% of inter-regional capacity, RTM + TBCB

**Primer:** power-grid.html, refreshed **30-Jun-2026** (FY26 results; before Q1 FY27).

**Standardised financials [V screener 23-Oct-26]**
- **P&L (consolidated):**
  - Sales: FY24 ₹45,843 Cr; FY25 ₹45,792 Cr; **FY26 ₹46,733 Cr (+2.1%)**; TTM ₹47,033 Cr.
  - OP: ₹39,244 Cr (86%) → ₹38,779 Cr (85%) → **₹32,831 Cr (70%)**. FY26 is distorted by DA-for-DTL classification (trap 6); company EBITDA is ₹39,677 Cr.
  - Other income: 1,138 / 2,120 / 3,193. Interest: 8,773 / 8,700 / 8,448. Depreciation: 13,095 / 12,904 / 13,030.
  - **PAT 15,573 / 15,521 / 15,928.** EPS FY26 ₹17.13; dividend payout 53% (FY25 54%; FY23–24 67%).
- **Quarters (sales / OP / OPM / PAT):**
  - Jun-25: 11,196 / 9,102 / 81% / 3,631
  - Sep-25: 11,476 / 9,055 / 79% / 3,566
  - Dec-25: 12,395 / 10,607 / 86% / 4,185
  - Mar-26: 11,666 / 5,303 / 45% / 4,546 (tax −2,829% on screener; DTL remeasurement)
  - **Jun-26: 11,497 / 9,430 / 82% / 3,598**
- **Balance sheet (Mar-26):**
  - Borrowings **₹1,48,071 Cr** (Mar-25 ₹1,31,030 Cr; Mar-24 ₹1,23,516 Cr). Equity ₹9,301 Cr + reserves ₹91,193 Cr = net worth ₹1,00,494 Cr.
  - Fixed assets ₹1,76,531 Cr (net); CWIP ₹43,747 Cr; investments ₹2,995 Cr.
  - CFO FY26 ₹40,935 Cr; CFI −₹35,445 Cr; FCF ₹3,687 Cr (FY23 ₹31,102 Cr — capex up, FCF down).
  - Debtor days 91 (screener; vs company receivable days 10.7 on billing — different bases).
- **Valuation:**
  - **Price ₹244 (52-wk H/L ₹325/₹243); m-cap ₹2,26,563 Cr; P/E 14.3 (TTM EPS ₹17.09); BV ₹108 (Jun-26 ₹111.85) → P/B 2.26 (2.18 on Jun-26 BV); dividend yield 3.70%.**
  - ROCE 9.10% (screener, depressed by OP distortion); ROE 15.3%.
  - EV (gross) ₹3,74,634 Cr → **~9.4× company EBITDA** [E].

**Company figures [V FY26 deck 18-May-2026; Q1 FY27 deck + transcript 7-Aug-2026]**
- **FY26 consolidated:**
  - Transmission charges ₹43,962 Cr (FY25 ₹44,018 Cr); consultancy ₹1,755 Cr (+120%); telecom ₹1,015 Cr; other income ₹952 Cr; total income ₹47,684 Cr.
  - Opex ₹7,875 Cr; EBITDA ₹39,677 Cr (−2%); depreciation ₹13,030 Cr; interest ₹7,816 Cr; tax ₹2,903 Cr; **PAT ₹15,928 Cr (+3%)**.
  - Q4 FY26 PAT ₹4,546 Cr incl. ~₹832 Cr DTL remeasurement credit.
- **FY26 standalone:** transmission ₹40,013 Cr; other income ₹6,092 Cr; EBITDA ₹40,018 Cr; **PAT ₹15,921 Cr (+4%)**.
- **Balance sheet (company):**
  - Mar-26: GFA ₹3,20,334 Cr (consolidated, incl. gross lease receivables); CWIP ₹47,980 Cr (incl. advances); debt ₹1,48,009 Cr; net worth ₹1,00,494 Cr; D:E 60:40; RoNW 15.85%; BVPS ₹108.05.
  - **Jun-26:** GFA ₹3,25,671 Cr; CWIP ₹50,419 Cr; debt ₹1,45,586 Cr; net worth ₹1,04,028 Cr; D:E 58:42; BVPS ₹111.85.
- **Other FY26:**
  - Incentive ₹664 Cr; interest on differential tariff ₹705 Cr; prior-period income ₹617 Cr; FERV (gross block) ₹1,277 Cr.
  - Dividends from subsidiaries ₹1,516 Cr; interest from subsidiaries/JVs ₹3,350 Cr; CSR ₹351 Cr; short-term loans ₹7,000 Cr.
  - **Equity in TBCB: operational ₹9,558 Cr, UC ₹2,502 Cr** (Jun-26: ₹9,965 Cr / ₹3,408 Cr — internal accruals).
- **Q1 FY27 (board 5-Aug; webinar 7-Aug):**
  - Transmission charges ₹10,905 Cr (+3%); consultancy ₹391 Cr; telecom ₹201 Cr; total income ₹11,697 Cr (+2%); EBITDA ₹9,581 Cr (+1%).
  - **PAT ₹3,598 Cr (−1%)**; standalone PAT ₹3,411 Cr (−7%).
  - Bridge: new assets +₹788 Cr revenue / +₹247 Cr PAT; regulatory drag −₹560 Cr (depreciation/interest trajectory ₹330 Cr + interest on differential tariff ₹230 Cr); base had a ₹33 Cr KSK Mahanadi write-back. Management's adjusted Q1 PAT ≈ +₹247 Cr YoY.
  - Collections 104.03%; receivable days 12.1.
- **Dividend:** FY26 ₹9.00/share (interims ₹4.50 + ₹3.25, final ₹1.25) [primer; consistent with screener payout 53% × EPS ₹17.13 = ₹9.08].
- **Funding:** JBIC green loan JPY 80 bn (Q1 FY27) [V]. Borrowing limit hiked to ₹35,000 Cr for FY27 (board 22-Jul-2026) [V-snip psuconnect headline]. Ratings AAA domestic; S&P BBB / Fitch BBB- / Moody's Baa3 [V].

**Native KPIs [V]**

| KPI | Value |
|---|---|
| Network (Mar-26) | 1,84,960 ckm; 1,584 lines; 291 substations; 6,24,016 MVA; 11 HVDC; IR 1,01,180 MW (~84% of national IR) |
| Network (Jun-26) | 1,86,595 ckm; 1,595 lines; 6,34,516 MVA |
| FY26 additions | 4,765 ckm (FY25 4,054); 72,055 MVA (32,819); 9 substations (4); 8 TBCB SPVs operationalised. Key lines: Bhadla III–Sikar II, Bhadla II–Sikar II, Khetri–Narela, Bhadla III–Ramgarh II, Ahmedabad–Lakadia, Ahmedabad–New Navsari, Banaskantha–Ahmedabad, New Navsari–Padghe (all 765 kV) |
| Q1 FY27 additions | 1,635 ckm; 10,500 MVA (Kurnool III–Maheshwaram, Dausa–Beawar 765 kV, etc.). After June: Raichur–Koppal II 765 kV; Koppal-II 765/400 kV substation |
| Capex / capitalisation | FY26 ₹39,967 Cr / ₹28,206 Cr (guidance ₹35,000 / ₹25,000); Q1 FY27 ₹7,765 / ₹5,277 Cr; FY27 guidance ₹37,000 / ₹30,000 Cr |
| Availability | FY26 99.84%; Q1 FY27 99.80%; tripping/line 0.26 (FY26) |
| WIH (30-Jun-26) | **₹1,75,700 Cr**: TBCB ₹1,46,315 Cr (83%); RTM ₹25,168 Cr (14%); other ₹4,217 Cr (smart metering, data centre, cross-border, international, BESS); incl. CWIP ₹50,419 Cr. Excludes Pang–Kaithal HVDC ₹22,942 Cr and offshore ₹13,142 Cr. Mar-26: ₹1,70,518 Cr (TBCB ₹1,37,370; RTM ₹28,931; other ₹4,217; CWIP ₹47,980) |
| TBCB | FY26: 28 bid, 9 won (₹1,805 Cr/yr total [E sum]: Pune East 368; Sonbhadra PSP 328; NR-WR Vindhyachal 323; SR-ER 312; Tumkuru-II 152; Davanagere+Bellary 130; SR-WR 105; Mandsaur 45; Davanagere RE 42); cumulative ~44%. FY27 to Jul-26: 19 bid, 6 won, >₹2,200 Cr/yr (Krishnagiri REZ-I, WR-ER NES-A, Kakinada GH2-I, SynCon Fatehgarh-II, Bhadla-III/Ramgarh/Kanpur augmentation, Bidar InSTS); cumulative ISTS ~47%. 16-Oct-26: Pune West 765 kV GIS ₹199.55 Cr/yr |
| Bidding pipeline | ₹1,19,495 Cr (31-Jul-26): under bidding ₹73,875 Cr + to be floated ₹45,620 Cr |
| New lines of business | BESS: Kalikiri AP 150 MW/300 MWh (₹29.52 Cr/yr, PESL BESPA with APTRANSCO and AP discoms); international: Kenya PPP with Africa50 (~$300 mn; POWERGRID 40%), Uganda framework; consultancy in 25 countries; PowerTel ₹1,195 Cr income FY26; PESL smart meters ₹832 Cr FY26 / ₹220 Cr Q1 FY27 |
| Structure | 64 subsidiaries post-merger (17 SPVs merged into 2; 28 more into 2 under way); JV stakes in Torrent Power Grid, Parbati Koldam and a Sikkim JV held for sale |

**Ownership [V screener Sep-26]:** GoI (promoter) **51.34%** (unchanged 12 quarters); FII **24.03%** (30.51% Dec-23); DII **20.83%** (14.77% Dec-23); public 3.71%; 13.56 lakh shareholders. Trend: FIIs have sold ~6.5 pp in 11 quarters and DIIs bought ~6 pp.

**Story bullets**
- **The purest regulated annuity in Indian equities, re-accelerating capex but not yet earnings.** Capex tripled (₹12.5k → ₹40k Cr, FY24–FY26) while PAT stayed ~₹15.5–15.9k Cr. FY26 growth (+2.6%) relied on an ₹832 Cr tax credit. **The earnings inflection depends on capitalisation (₹30k Cr guided for FY27; ₹5.3k Cr done in Q1)** and on the regulatory drag fading.
- **Edge:** near-sovereign funding (AAA; yen loans); ~47% cumulative ISTS-TBCB tariff share; 765 kV/HVDC engineering; bulk procurement leverage over equipment OEMs; RTM nominations for strategic HVDC (Pang–Kaithal ₹22,942 Cr pending).
- **Risks:** TBCB returns opaque (analysts asked for segment disclosure); post-year-12 tariff decline on the 2014–16 asset vintage; the 2029 CERC ROE reset; ROW cost escalation not in plan estimates; FII selling; PSU dividend policy.
- **Valuation:** 14.3× TTM P/E, 2.26× book, 3.7% yield, at a 52-week low after the Oct-2026 repo hike — the cheapest since the capex cycle began [V/E].

## 2.2 Adani Energy Solutions (ADANIENSOL · 539254) — India's largest private transmission developer + Mumbai distribution + smart meters + a new energy-trading platform

**Primer:** adani-energy-solutions.html, refreshed **1-Jul-2026** (FY26 results; before Q1/Q2 FY27, the second QIP, IntelliSmart and ESP).

**Standardised financials [V screener 23-Oct-26]**
- **P&L (consolidated):**
  - Sales: FY24 ₹16,607 Cr; FY25 ₹23,767 Cr; **FY26 ₹27,588 Cr (+16.1%)**; TTM ₹33,960 Cr.
  - OP: ₹5,711 Cr (34%) → ₹7,067 Cr (30%) → **₹8,005 Cr (29%)**; TTM ₹10,250 Cr.
  - Other income: 611 / −827 (FY25 one-off; Q1 FY25 −₹1,395 Cr) / 721. Interest: 2,767 / 3,259 / 3,633. Depreciation: 1,776 / 1,906 / 1,978.
  - **PAT 1,196 / 922 / 2,393**; TTM ₹3,897 Cr. EPS FY26 ₹19.00; TTM ₹30.68. No dividend.
- **Quarters (sales / OP / OPM / PAT):**
  - Sep-25: 6,596 / 1,955 / 30% / 557
  - Dec-25: 6,730 / 1,995 / 30% / 574
  - Mar-26: 7,443 / 2,145 / 29% / 723
  - **Jun-26: 9,711 / 3,008 / 31% / 1,237**
  - **Sep-26: 10,076 / 3,101 / 31% / 1,364** (other income ₹447 Cr; interest ₹1,180 Cr; tax 23%)
- **Balance sheet:**
  - Borrowings ₹39,926 Cr (Mar-25) → **₹49,176 Cr (Mar-26)** → **₹51,801 Cr (Sep-26)**.
  - Equity ₹1,201 → ₹1,223 Cr (QIP); reserves ₹24,226 → ₹30,081 Cr (net worth ₹31,304 Cr Sep-26).
  - Investments ₹2,644 → ₹3,460 Cr; CWIP ₹2,054 Cr (most UC transmission sits in SCA receivables within "other assets" ₹50,384 Cr, not CWIP — trap 3).
  - CFO FY26 ₹10,997 Cr; CFI −₹14,083 Cr; FCF −₹3,435 Cr.
- **Valuation:**
  - **Price ₹1,225 (52-wk H/L ₹1,789/₹803); m-cap ₹1,49,812 Cr; P/E 40.4 (TTM); 64.5× FY26 EPS; BV ₹256 → P/B 4.79; dividend yield 0%.**
  - ROCE 9.65%; ROE 9.44%.
  - EV on company net debt (Sep-26 ₹41,067 Cr) ₹1,90,879 Cr → **16.9× TTM company EBITDA (~₹11,308 Cr [E])**; 21.7× FY26 EBITDA. Screener basis (borrowings − investments) → 24.5× FY26 OP.

**Company figures [V: Q1 FY27 deck/transcript 22-Jul-2026; Q2 FY27 media release and deck 22/23-Oct-2026]**
- **FY26:** operational revenue ₹18,296 Cr (+7%); total income ₹28,325 Cr [primer]; **EBITDA ₹8,726 Cr (+13%)**; operating EBITDA ₹7,407 Cr [primer]; PAT ₹2,393 Cr ("Adj. PAT", +32%); capex ₹14,232 Cr (1.24×); **net debt ₹39,268 Cr** (excl. ₹1,405 Cr unsecured shareholder sub-debt); **ND/EBITDA 4.5×** (FY25 3.2× as printed).
- **Q1 FY27:** operational revenue ₹7,117 Cr (+54%); EBITDA ₹3,178 Cr (+58%); PAT ₹1,237 Cr (+130%); capex ₹3,498 Cr (1.57×).
- **Q2 FY27 (results 22-Oct-2026):**
  - Total income ₹10,239 Cr (+51%); operational revenue ₹7,167 Cr (+51%); operating EBITDA ₹3,070 Cr (+68%); **EBITDA ₹3,548 Cr (+67%)**; **PAT ₹1,364 Cr (vs ₹557 Cr, +145%)**.
- **H1 FY27:**
  - Total income ₹20,092 Cr (₹13,793 Cr); operational revenue ₹14,351 Cr (₹9,548 Cr restated); operating EBITDA ₹5,878 Cr (₹3,463 Cr); EBITDA ₹6,726 Cr (₹4,144 Cr); **PAT ₹2,600 Cr (₹1,096 Cr)**; cash profit ₹3,837 Cr (₹2,212 Cr).
  - SCA income ₹4,961 Cr (₹3,692 Cr). Capex ₹7,850 Cr (transmission ₹5,542 Cr).
  - **Net debt ₹41,067 Cr; ND/EBITDA 3.63× (4.4× H1 FY26).**
- **Segments, H1 FY27 (operating revenue / operating EBITDA, ₹ Cr):**

| Segment | Op. revenue | Op. EBITDA | Margin / note |
|---|---|---|---|
| Transmission | 3,117 (+26%) | 2,871 (+26%) | 92% |
| Distribution (AEML + MUL) | 6,702 (+3%) | 1,192 (+20%) | — |
| Smart metering (Ind AS) | 428 (+131%) | 352 (+143%) | Non-Ind AS: revenue 731, EBITDA 654 (89%) |
| **Energy Solutions Platform** | **4,103** (₹410 Cr) | **1,393** (₹28 Cr) | Q2: revenue 2,197, EBITDA 803 (release text says ₹810 Cr) |
| Others | 474 | 70 | — |

**Native KPIs [V]**

| KPI | Value |
|---|---|
| Transmission network | **Operational 20,023 ckm / 49,150 MVA** (35 assets, incl. 848 ckm AEML/MUL); **UC 9,779 ckm / 94,275 MVA** (15 projects); headline 29,802 ckm / 1,43,425 MVA; presence in 16 states |
| UC order book | **₹87,222 Cr; levelised tariff ₹10,994 Cr/yr**. Q2 wins: Vizag PTL (₹856 Cr/yr), Satara PTL (₹618 Cr/yr), ~2,000 ckm, ₹1,474 Cr/yr. Largest: Bhadla–Fatehpur HVDC (1,906 ckm; ₹3,557 Cr/yr); KPS III–South Olpad HVDC (1,168 ckm; ₹2,392 Cr/yr). FY26: ₹71,779 Cr (13 projects) |
| Availability | H1 FY27 99.63% (H1 FY26 99.71%); Q2 99.8%; incentive ₹61 Cr H1 |
| TBCB share | FY26 29% of bids; H1 FY27 17%; near-term tenders ~₹1.4 L Cr |
| HVDC | "Only private player with 4 HVDC lines" (Mundra–Mohindergarh, Mumbai HVDC operational; Bhadla–Fatehpur and KPS III UC) |
| AEML Mumbai | 3.29 mn consumers (3.25 mn); H1 units 6,190 MU (+11%); Q2 2,930 MU (+11%); distribution loss 4.29% H1 (Q1 5.16%, heatwave; permissible 5.31%); ASAI 99.997%; collection 99.75%; e-payment 87.5%; peak 2,457 MW (2,170 MW); **RAB ₹10,456 Cr (equity ₹5,564 Cr / debt ₹4,892 Cr; +11%)**; transmission availability 99.79%; REC CSRD A+ rating |
| MUL Mundra | Q2 460 MU (+26%); H1 885 MU |
| Smart metering | **14.8 mn installed** (Sep-25: 7.4 mn); H1 installs 3.5 mn (4.2 mn); Q2 1.3 mn; meters billed 3.7 mn H1; cumulative meter-months 74.5 mn; **order book 24.6 mn / ₹29,519 Cr (10 DBFOOT contracts, 120 months; MSEDCL 13.3 mn)**; "~19% RDSS market share"; IntelliSmart +22.3 mn (₹3,050 Cr, pending CCI); market opportunity 86 mn meters |
| ESP | H1 25,333 MU supplied; ~4.6 GW solar/wind + ~3.5 GWh BESS supply tie-up; 7.5 GW+ opportunity; **2,500 MW / 25-yr RTC PPA with MSEDCL** (Q2) |
| Ratings | ATSOL obligor group Moody's Baa3/Stable, Fitch BBB-/Stable; AEML S&P BBB-/Stable, Fitch BBB-, domestic AAA/Stable; CareEdge Global BBB+ |

**Ownership [V screener Sep-26]:**
- Promoters **73.39%** (Jun-26 74.71%; Mar-26 72.72%; Sep-24 69.94%); FII **9.57%** (17.58% Mar-25); DII **13.61%** (6.33% Mar-25); public 3.44%; 3.83 lakh shareholders.
- Marquee strategic holders (QIA in AEML 25.1%; IHC in AESL) [K — verify].
- **Pledge: not fetched [FLAG].**

**Story bullets**
- **A transmission developer that has become a four-engine utility, and whose H1 FY27 profit doubled mainly because of the newest, least-regulated engine (ESP, 24% of operating EBITDA).** Ex-ESP, operating EBITDA grew ~31% — still strong, driven by transmission (+26%) and smart meters (+143%).
- **Edge:** largest private TBCB portfolio (₹87k Cr UC; ₹11k Cr/yr locked-in tariff); HVDC capability; AAA Mumbai distribution with 4.3% loss; scale leader in AMISP (47 mn meters with IntelliSmart); access to equity (₹8,373 Cr 2024 + ₹3,500 Cr 2026 QIPs).
- **Risks:**
  - Leverage (net debt ₹41k Cr; interest cover ~2.2× on screener FY26).
  - TBCB bid aggression (UC tariff yield 12.6% of cost [E]).
  - ESP price/related-party risk.
  - MSEDCL concentration (meters + 2.5 GW PPA).
  - Group overhang (FII exit to 9.6%).
  - QIP buyers 24% under water.
- **Valuation:** 40× TTM P/E / ~17× TTM EV/EBITDA vs POWERGRID's 14× / ~9×. The premium has halved since our primer (~80× P/E in Jun-26) as earnings jumped and the price fell [V/E].

## 2.3 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {
    "company": "Power Grid Corporation of India", "nse": "POWERGRID", "bse": "532898", "fy": "FY26",
    "basis": "consolidated; screener 23-Oct-2026; company deck for EBITDA/debt",
    "revenue_screener": 46733, "revenue_prev": 45792, "rev_growth_pct": 2.1,
    "total_income_company": 47684, "transmission_charges": 43962,
    "op_screener": 32831, "opm_pct_screener": 70.3, "ebitda_company": 39677, "ebitda_company_prev": 40531,
    "pat_reported": 15928, "pat_prev": 15521, "pat_ex_dtl_credit_est": 15096, "dtl_credit": 832,
    "eps": 17.13, "ttm_pat": 15896, "dps": 9.00,
    "roce_pct": 9.10, "roe_pct": 15.3, "ronw_company_pct": 15.85,
    "borrowings_screener": 148071, "debt_company_mar26": 148009, "debt_company_jun26": 145586, "net_debt_company": null,
    "net_worth_mar26": 100494, "net_worth_jun26": 104028, "gfa_cons_mar26": 320334, "cwip_cons_jun26": 50419,
    "mcap": 226563, "price": 244, "pe_ttm": 14.3, "pb": 2.26, "div_yield_pct": 3.70, "ev_ebitda_gross": 9.4,
    "capex_fy26": 39967, "capitalisation_fy26": 28206, "capex_fy27_guidance": 37000, "capitalisation_fy27_guidance": 30000,
    "q1fy27": {"revenue_screener": 11497, "op": 9430, "pat": 3598, "total_income_company": 11697, "ebitda_company": 9581, "capex": 7765, "capitalisation": 5277},
    "q1fy26": {"revenue_screener": 11196, "op": 9102, "pat": 3631, "capex": 6981, "capitalisation": 1683},
    "network_ckm_jun26": 186595, "network_ckm_mar26": 184960, "mva_jun26": 634516, "substations": 291, "ir_capacity_mw": 101180,
    "availability_fy26_pct": 99.84, "availability_q1fy27_pct": 99.80, "incentive_fy26": 664,
    "wih_jun26": 175700, "wih_tbcb": 146315, "wih_rtm": 25168, "wih_other": 4217, "bidding_pipeline_jul26": 119495,
    "tbcb_cum_tariff_share_pct": 47, "tbcb_fy26_bid": 28, "tbcb_fy26_won": 9, "tbcb_equity_operational_jun26": 9965, "tbcb_equity_uc_jun26": 3408,
    "promoter_pct": 51.34, "fii_pct": 24.03, "dii_pct": 20.83,
    "q2fy27_board_date": null
  },
  {
    "company": "Adani Energy Solutions", "nse": "ADANIENSOL", "bse": "539254", "fy": "FY26",
    "basis": "consolidated; screener 23-Oct-2026; company decks for EBITDA/net debt",
    "revenue_screener": 27588, "revenue_prev": 23767, "rev_growth_pct": 16.1,
    "operational_revenue_company": 18296, "total_income_company": 28325,
    "op_screener": 8005, "opm_pct_screener": 29.0, "ebitda_company": 8726, "operating_ebitda_company": 7407,
    "pat_reported": 2393, "pat_prev": 922, "pat_attributable_est": 2282, "eps": 19.00, "ttm_pat": 3897, "ttm_eps": 30.68,
    "roce_pct": 9.65, "roe_pct": 9.44,
    "borrowings_screener_mar26": 49176, "borrowings_screener_sep26": 51801, "investments_screener_mar26": 2644,
    "net_debt_company_mar26": 39268, "net_debt_company_sep26": 41067, "nd_ebitda_sep26": 3.63, "nd_ebitda_fy26": 4.5,
    "mcap": 149812, "price": 1225, "pe_ttm": 40.4, "pe_fy26": 64.5, "pb": 4.79, "div_yield_pct": 0.0,
    "ev_ebitda_fy26_co_nd": 21.7, "ev_ebitda_ttm_co_nd": 16.9,
    "capex_fy26": 14232, "capex_h1fy27": 7850, "capex_h1fy27_transmission": 5542,
    "q1fy27": {"revenue_screener": 9711, "op": 3008, "pat": 1237, "operational_revenue": 7117, "ebitda_company": 3178},
    "q2fy27": {"revenue_screener": 10076, "op": 3101, "pat": 1364, "operational_revenue": 7167, "operating_ebitda": 3070, "ebitda_company": 3548, "total_income": 10239},
    "q2fy26": {"revenue_screener": 6596, "op": 1955, "pat": 557},
    "h1fy27": {"total_income": 20092, "operational_revenue": 14351, "operating_ebitda": 5878, "ebitda": 6726, "pat": 2600, "sca_income": 4961},
    "segments_h1fy27_op_ebitda": {"transmission": 2871, "distribution": 1192, "smart_metering_indas": 352, "energy_solutions": 1393, "others": 70},
    "network_ckm_operational_sep26": 20023, "network_ckm_uc": 9779, "network_ckm_headline": 29802, "mva_operational": 49150, "mva_headline": 143425,
    "uc_orderbook": 87222, "uc_levelised_tariff": 10994, "uc_projects": 15,
    "availability_h1fy27_pct": 99.63, "incentive_h1fy27": 61,
    "aeml_consumers_mn": 3.29, "aeml_units_h1_mu": 6190, "aeml_dist_loss_h1_pct": 4.29, "aeml_rab": 10456, "aeml_peak_mw": 2457,
    "smart_meters_installed_mn": 14.8, "smart_meter_orderbook_mn": 24.6, "smart_meter_orderbook_value": 29519, "intellismart_meters_mn": 22.3, "intellismart_consideration": 3050,
    "qip_jul2026": 3500, "qip_jul2026_price": 1615, "qip_aug2024": 8373,
    "promoter_pct": 73.39, "fii_pct": 9.57, "dii_pct": 13.61,
    "q2fy27_board_date": "2026-10-22"
  }
]
```

## 2.4 Conflicts and gaps (company level)
1. **POWERGRID:**
   - Screener OP FY26 ₹32,831 Cr vs company EBITDA ₹39,677 Cr (DA-for-DTL classification).
   - FY26 PAT includes ₹832 Cr DTL credit.
   - Net debt not available (cash not fetched).
   - FY24/FY25 capex/capitalisation chart labels ambiguous.
   - Regulated equity not disclosed.
   - Q2 FY27 board date not announced.
   - Availability normative threshold: 98% (CERC, [K]) vs 99.75% (deck reference line).
2. **AESL:**
   - Network 29,802 (deck) vs 29,739 (release table) ckm; operational 20,023 + UC 9,779 = 29,802.
   - UC tariff total ₹10,994 Cr vs component sum ₹13,560 Cr.
   - ESP EBITDA Q2 ₹803 Cr (table) vs ₹810 Cr (release text).
   - Q2 distribution loss 3.30% and supply reliability "9.99%" are likely typos.
   - Consumer count: 3.29 mn (AEML deck) vs ">13 million consumers" (release boilerplate, likely population served or Mumbai + Mundra people) vs primer "~12 million people".
   - FY26 ND/EBITDA "4.5× (FY26) vs 3.2× (FY25)" ordering ambiguous in the PDF text.
   - Promoter pledge not fetched.
   - ESP counterparties not disclosed.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (both members; ₹ Cr; screener consolidated 23-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP (screener) | OPM % | Company EBITDA | PAT (reported) | Latest qtr | Latest qtr rev | YoY % | Latest qtr OP | Latest qtr PAT | YoY % | M-cap | % of total m-cap | % of total rev | P/E (TTM) | P/B | Network (op. ckm) | Pipeline |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| POWERGRID | 46,733 | +2.1 | 32,831 | 70.3 | 39,677 | 15,928 | Q1 FY27 | 11,497 | +2.7 | 9,430 | 3,598 | −0.9 | 2,26,563 | 60.2 | 62.9 | 14.3 | 2.26 | 1,86,595 | WIH 1,75,700 |
| Adani Energy Solutions | 27,588 | +16.1 | 8,005 | 29.0 | 8,726 | 2,393 | Q2 FY27 | 10,076 | +52.8 | 3,101 | 1,364 | +144.9 | 1,49,812 | 39.8 | 37.1 | 40.4 | 4.79 | 20,023 | UC 87,222 (+ meters 29,519 revenue potential) |
| **Total (2)** | **74,321** | **+6.8** | **40,836** | **54.9** | **48,403** | **18,321** | mixed | — | — | — | — | — | **3,76,375** | 100 | 100 | **19.0× (agg. m-cap ÷ agg. TTM PAT 19,793); 20.5× on FY26** | — | **2,06,618** | not additive (trap 10) |

Notes:
- Latest quarters differ: POWERGRID's latest is Q1 FY27 (Jun-26); AESL's is Q2 FY27 (Sep-26). They are not summed. A common-quarter (Q1 FY27) comparison is in §3.2(b).
- POWERGRID screener OP is distorted (trap 6). The company-EBITDA column is the cleaner cross-company measure.
- Network: POWERGRID Jun-26 + AESL Sep-26 operational ckm (AESL includes 848 ckm of distribution-licensee lines).

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one stated basis**:
- **P&L basis:** screener consolidated FY26 and FY25 — revenue, OP, and **reported PAT including minority interests** (screener "Net Profit"). Attributable PAT is shown separately (EPS × shares).
- **Market basis:** m-cap on 23-Oct-2026 (screener).
- **Debt basis:** screener gross borrowings at Mar-26. Company net debt is shown separately and labelled, because POWERGRID's cash is not available.
- Ratios are ratios of the sums.

**(a) FY26 combined [E from V]**

| Measure | POWERGRID | AESL | Total | Ratio / comment |
|---|---|---|---|---|
| Revenue FY26 (screener) | 46,733 | 27,588 | **74,321** | +6.8% YoY (FY25 69,559) |
| Revenue FY25 | 45,792 | 23,767 | 69,559 | — |
| OP FY26 (screener) | 32,831 | 8,005 | **40,836** | 54.9% margin; FY25 45,846 (65.9%) → **−10.9% — an artefact of POWERGRID's DA-for-DTL classification**; do not print as a trend |
| Company EBITDA FY26 | 39,677 | 8,726 | **48,403** | 65.1% of screener revenue [E]; POWERGRID 82% of the sum |
| PAT reported FY26 | 15,928 | 2,393 | **18,321** | +11.4% YoY (FY25 16,443); ex POWERGRID DTL credit: 17,489 (+6.4%) [E] |
| PAT attributable FY26 [E] | ~15,932 (EPS 17.13 × 930.06 Cr sh.) | ~2,282 (EPS 19.00 × 120.13 Cr sh.) | **~18,214** | — |
| TTM PAT | 15,896 (to Jun-26) | 3,897 (to Sep-26) | **19,793** | mixed periods |
| M-cap (23-Oct-26) | 2,26,563 | 1,49,812 | **3,76,375** | — |
| Agg. P/E | 14.2× FY26 | 62.6× FY26 | **20.5× FY26; 19.0× TTM** | POWERGRID is 87% of FY26 PAT but 60% of m-cap |
| Borrowings Mar-26 (screener) | 1,48,071 | 49,176 | **1,97,247** | Gross debt ÷ company EBITDA = **4.1×** |
| Net debt (company basis) | n/d (gross 1,48,009) | 39,268 (Mar-26) / 41,067 (Sep-26) | — | Not summable on one basis |
| EV (m-cap + gross borrowings − screener investments) | 3,71,639 | 1,96,344 | **5,67,983** | ÷ company EBITDA 48,403 = **11.7×** [E] |
| Capex FY26 | 39,967 | 14,232 | **54,199** | ~55% of the national ~₹1 L Cr/yr plan run-rate [E] |
| Operational ckm | 1,86,595 | 20,023 | 2,06,618 | ≈40% of ~5.1 lakh national ckm [E] |
| Dividend | ₹9.00/sh (~₹8,370 Cr) [E] | 0 | — | — |

- POWERGRID's share of FY26 revenue is **62.9%**, of company EBITDA **82.0%**, of reported PAT **86.9%**, and of m-cap **60.2%**.
- AESL is 37% of revenue and 40% of m-cap but 13% of PAT — the market capitalises AESL's growth at ~4.6× the earnings weight [E].

**(b) Common quarter — Q1 FY27 vs Q1 FY26 (screener) [E from V]**

| Measure | POWERGRID Q1 FY27 | AESL Q1 FY27 | Total Q1 FY27 | Total Q1 FY26 | YoY |
|---|---|---|---|---|---|
| Revenue | 11,497 | 9,711 | **21,208** | 18,015 | **+17.7%** |
| OP | 9,430 | 3,008 | **12,438** | 10,913 | **+14.0%** |
| OPM | 82.0% | 31.0% | 58.6% | 60.6% | −2.0 pp (mix shift to AESL trading) |
| PAT | 3,598 | 1,237 | **4,835** | 4,170 | **+15.9%** |

**Read:**
- The combined Q1 growth (+16% PAT) is **entirely AESL** (+₹698 Cr); POWERGRID −₹33 Cr.
- Within AESL, ESP contributed ~₹590 Cr of segment EBIT in Q1 [V call].
- **Ex-ESP, the sub-sector's Q1 profit growth was roughly flat to low-single-digit** [E]. The "sector growth" headline needs the split.

**(c) AESL H1 FY27 standalone view (Q2 not yet available for POWERGRID)**
- H1 FY27 PAT ₹2,600 Cr vs ₹1,096 Cr (+137%).
- Operating EBITDA ₹5,878 Cr vs ₹3,463 Cr (+70%); ex-ESP ₹4,485 Cr vs ₹3,435 Cr (+31%) [E from V].

**(d) Ownership (Sep-26) [V screener]**
- Promoter: POWERGRID 51.34% (GoI) and AESL 73.39% (Adani family). Simple average 62.4%.
- FII: 24.03% / 9.57% — both falling (−6.5 pp and −8.0 pp over 18–33 months).
- DII: 20.83% / 13.61% — both rising.

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / company (fetched 23-Oct-26) | Use |
|---|---|---|---|---|
| POWERGRID | FY26 total income / PAT | ₹47,684 Cr / ₹15,928 Cr | Same (deck); screener sales ₹46,733 Cr | Same; label "total income" |
| POWERGRID | M-cap / P/E / P/B / yield | ~₹2.66 L Cr / ~16.7× / ~2.65× / ~3.1% (Jun-26) | **₹2,26,563 Cr / 14.3× / 2.26× / 3.70%** | Screener |
| POWERGRID | ROE | ~16.5% | 15.3% (screener); RoNW 15.85% (company) | Screener/company |
| POWERGRID | Network | 1,84,960 ckm / 291 / 6,24,016 MVA (Mar-26) | 1,86,595 ckm / 291 / 6,34,516 MVA (Jun-26) | Update |
| POWERGRID | Inter-regional share | "~85% of inter-state & inter-regional" | "~84% of total IR" (1,01,180 MW) | Company |
| POWERGRID | Availability norm | "~98% target" and "99.75% normative threshold" (both) | 99.84% achieved; NATAF 98% (CERC) [K]; deck reference line 99.75% | Fix wording |
| POWERGRID | WIH | ₹1.70 L Cr (TBCB 1,37,370 / RTM 28,931 / CWIP 47,980) | **₹1,75,700 Cr (Jun-26): TBCB 1,46,315 / RTM 25,168 / other 4,217 / CWIP 50,419**; excludes Pang–Kaithal ₹22,942 Cr + offshore ₹13,142 Cr | Company |
| POWERGRID | TBCB share | "~44–50% cumulative"; AESL ~32% | ~44% (Mar-26), ~47% ISTS (Jul-26) | Company |
| POWERGRID | Bidding pipeline | ~₹1.1 L Cr+ | ₹1,19,495 Cr (31-Jul-26) | Company |
| POWERGRID | PGInvIT stake | "~26% sponsor stake" | **15% units retained at IPO**; residual 26% SPV stakes sold to PGInvIT Dec-2024 | Web |
| POWERGRID | Payout | "commonly ~60–70%" | 53% FY26, 54% FY25 (67% FY23–24) | Screener |
| POWERGRID | FY26 PAT growth | "+3%" | +2.6% reported; ex ₹832 Cr DTL credit −2.7% | Note |
| POWERGRID | Q1 FY27 | not covered | PAT ₹3,598 Cr (−1%); capex ₹7,765 Cr; capitalisation ₹5,277 Cr; 6 TBCB wins (>₹2,200 Cr/yr) | Company |
| POWERGRID | Borrowings | ₹1,48,071 Cr | Same (Mar-26); company ₹1,45,586 Cr (Jun-26) | Same |
| POWERGRID | Promoter | ~51.3% | 51.34% | Same |
| AESL | FY26 revenue label | "Revenue from ops ₹18,296 Cr" | ₹18,296 Cr = **operational revenue**; statutory/screener ₹27,588 Cr | Relabel |
| AESL | FY26 EBITDA / PAT | ₹8,726 Cr / ₹2,393 Cr | Same (company); screener OP ₹8,005 Cr | Same; state basis |
| AESL | M-cap / P/E / P/B | ~₹1.78 L Cr / ~80× / ~7× (Jun-26) | **₹1,49,812 Cr / 40.4× TTM (64.5× FY26) / 4.79×** | Screener |
| AESL | Network | "27,949 ckm … network operating, earning tolls" | 27,949 (FY26) and 29,802 (Sep-26) **include UC**; operational **20,023 ckm** | Company |
| AESL | UC book | 13 projects, ₹71,779 Cr | **15 projects, ₹87,222 Cr; ₹10,994 Cr/yr tariff** | Company |
| AESL | Smart meters | ">1 crore installed"; 113.6 lakh cumulative | **14.8 mn (Sep-26)**; IntelliSmart +22.3 mn (₹3,050 Cr, pending) | Company |
| AESL | Borrowings / net debt | ~₹49,000 Cr | ₹49,176 Cr gross (Mar-26) / ₹51,801 Cr (Sep-26); **company net debt ₹39,268 Cr → ₹41,067 Cr; 3.63× TTM** | Both; prefer company net debt |
| AESL | QIP | Aug-2024 ₹8,373 Cr | + **Jul-2026 ₹3,500 Cr at ₹1,615** | Add |
| AESL | US case | "judge still reviewing dismissal" | Dismissed 10-Aug-2026; SEC US$18 mn; OFAC US$275 mn was AEL (not AESL) | Web |
| AESL | AEML | "~12 million people"; peak ~2,056 MW; RAB ₹10,521 Cr | 3.29 mn consumers; peak 2,457 MW (H1 FY27); RAB ₹10,456 Cr (Sep-26) | Company |
| AESL | Segments | 3 engines | **4 engines incl. Energy Solutions Platform** (24% of H1 operating EBITDA) | Company |
| AESL | Promoter | ~73% (72.72% Mar-26) | 73.39% (Sep-26) | Screener |
| AESL | ROE | ~9–10% | 9.44% | Same |

## 3.4 Primer issues (format as primer-issues.md)

### From Power Transmission research (2026-10-23, power-transmission-industry.md §3.4)

- **power-grid.html — valuation stale (strip and §11):** m-cap "~₹2.66 L Cr (Jun '26)" → **₹2,26,563 Cr (23-Oct-26, ₹244, 52-week low)**; P/E ~16–17× → **14.3× TTM**; P/B ~2.6× → **2.26×**; dividend yield ~3%+ → **3.70%**; ROE ~16.5% → 15.3% (screener) / RoNW 15.85% (company FY26).
- **power-grid.html — PGInvIT sponsor stake wrong:** "Power Grid retains a ~26% sponsor stake" (§03, §08). POWERGRID retained **15% of PGInvIT units** at the May-2021 IPO (136.5 mn units). The 26% was its **residual stake in four SPVs, sold to PGInvIT for ~₹507 Cr (completed 30-Dec-2024)** [V-snip business-standard/dsij]. Fix both mentions.
- **power-grid.html — availability norm contradictory:** §01 says "the regulated availability target is around 98% for the AC system" and in the same paragraph "99.84% availability (against a 99.75% normative threshold)". CERC's normative annual transmission availability for AC is **98%** [K]; 99.75% is a reference line on the company's chart (likely an incentive cap). State 99.84% vs a 98% norm, and say incentive income was ₹664 Cr in FY26 [V].
- **power-grid.html — FY26 growth flattered by a tax credit (strip, §00, §11):** "PAT ₹15,928 Cr (+3%)" includes an **₹832 Cr reduction in tax** from remeasuring deferred tax at new-regime rates (Q4 FY26). Ex-credit PAT ≈ **₹15,096 Cr (−2.7%)** [V Q1 FY27 deck footnote; E]. Q4 "+10% to ₹4,546 Cr" is similarly flattered.
- **power-grid.html — Q1 FY27 missing (refreshed 30-Jun):** add PAT ₹3,598 Cr (−1%); transmission charges ₹10,905 Cr (+3%); regulatory drag ₹560 Cr; capex ₹7,765 Cr; **capitalisation ₹5,277 Cr (3.1× YoY)**; network 1,86,595 ckm / 6,34,516 MVA; 6 TBCB wins >₹2,200 Cr/yr incl. India's first SynCon scheme; JBIC JPY 80 bn green loan; Pune West 765 kV GIS win (₹199.55 Cr/yr, 16-Oct).
- **power-grid.html — WIH update and exclusions:** §07 "₹1.70 L Cr … Capital work-in-progress (of which) ~47,980" → **₹1,75,700 Cr at 30-Jun-26 (TBCB ₹1,46,315 / RTM ₹25,168 / other ₹4,217; incl. CWIP ₹50,419 Cr)**. Mention that **Pang–Kaithal HVDC (₹22,942 Cr) and offshore (₹13,142 Cr) are excluded** pending GoI. Bidding pipeline "~₹1.1 lakh crore-plus" → ₹1,19,495 Cr (31-Jul-26).
- **power-grid.html — TBCB share range:** "~44–50% cumulative; AESL ~32%" → the company says **~44% (Mar-26) and ~47% ISTS (Jul-26)**. The AESL ~32% is from a secondary source and unverified; AESL's own claim is 29% of FY26 bids, 17% of H1 FY27 bids [V].
- **power-grid.html — inter-regional share:** "~85% of inter-state and inter-regional transmission" → the company states "**~84% of total IR**" (1,01,180 MW). Inter-*state* share is not stated by the company; avoid "inter-state".
- **power-grid.html — payout ratio:** "commonly around ~60–70%" → **53% FY26, 54% FY25** (67% in FY23–24) [V screener].
- **power-grid.html — new businesses omitted:** BESS (Kalikiri 150 MW/300 MWh, ₹29.52 Cr/yr; CERC BESS-by-TSP regulations 20-Mar-2026), Kenya PPP with Africa50 (~$300 mn, 40%), PESL smart meters (₹832 Cr FY26 revenue), consultancy +120% to ₹1,755 Cr, SPV mergers (17 → 2; 28 → 2), JV stakes held for sale (Torrent Power Grid, Parbati Koldam, Sikkim). (§09)
- **power-grid.html — 900 GW plan missing:** add CEA's Mar-2026 900+ GW non-fossil transmission plan (FY27–36: 1,37,500 ckm, 8,27,600 MVA, ~₹7.93 L Cr) and the Brahmaputra hydro outlook (₹6.4 L Cr) alongside the NEP ₹9.15 L Cr (§05).
- **power-grid.html — execution context missing:** national FY26 line target cut 24,400 → 15,382 ckm, ~12,139 achieved; 765 kV transformer lead times 20–24 months; SCODs revised to 26–30 months (§05/§12).
- **adani-energy-solutions.html — revenue mislabelled (strip, §00, §10):** "₹18,296 Cr Revenue from ops (FY26)" is the company's **"operational revenue"**. Statutory revenue from operations (screener sales) is **₹27,588 Cr** and includes SCA construction income and traded goods. The disclaimer half-explains it; the strip should say "operational revenue".
- **adani-energy-solutions.html — network overstated as operating (strip, §01, §03):** "27,949 ckm … Network operating, earning tolls" — 27,949 ckm (FY26) **includes under-construction lines**. Operational at Sep-26 = **20,023 ckm** (UC 9,779 ckm) [V Q2 deck]. Headline now 29,802 ckm.
- **adani-energy-solutions.html — valuation stale:** m-cap ~₹1.78 L Cr → **₹1,49,812 Cr (₹1,225)**; P/E ~80× → **40.4× TTM** (64.5× FY26); P/B ~7× → **4.79×**.
- **adani-energy-solutions.html — Q1/Q2 FY27 and new segment missing (refreshed 1-Jul):**
  - Q2 FY27 PAT ₹1,364 Cr (+145%); H1 PAT ₹2,600 Cr (> all of FY26); EBITDA ₹3,548 Cr (+67%).
  - **Energy Solutions Platform** (H1 operating EBITDA ₹1,393 Cr, 24% of the total; 2,500 MW/25-yr RTC PPA with MSEDCL); the "three engines" framing is now four.
  - UC book ₹87,222 Cr (15 projects; Vizag + Satara wins, ₹1,474 Cr/yr).
  - Smart meters 14.8 mn installed.
  - **IntelliSmart acquisition (₹3,050 Cr, +22.3 mn meters, CCI pending).**
  - **Second QIP ₹3,500 Cr at ₹1,615 (Jul-2026).**
  - Net debt ₹41,067 Cr, 3.63× TTM.
- **adani-energy-solutions.html — US matters stale and imprecise (§06, §08):**
  - "a US judge was still reviewing the dismissal" → **dismissed by Judge Garaufis (EDNY) on 10-Aug-2026** [V-snip]; SEC settlement US$18 mn (Gautam and Sagar Adani) [V-snip].
  - Add that **OFAC's US$275 mn settlement (18-May-2026) was with Adani Enterprises over Iran-origin LPG — AESL was not a party** [V-snip].
  - The Nov-2024 case concerned Adani Green/SECI solar contracts. AESL was not a defendant [K], but **Kenya cancelled AESL's ~US$736 mn KETRACO transmission PPP (Nov-2024)** [K] — a direct AESL consequence missing from the primer.
- **adani-energy-solutions.html — AEML scale:** "~12 million people served" vs company **3.29 mn consumers** (AEML deck); peak "~2,056 MW" → **2,457 MW (H1 FY27)**; RAB ₹10,521 Cr → **₹10,456 Cr (equity ₹5,564 Cr / debt ₹4,892 Cr, Sep-26)**. State consumers (accounts), not people.
- **adani-energy-solutions.html — leverage basis:** "borrowings of roughly ₹49,000 Cr" is gross. Add **company net debt ₹39,268 Cr (Mar-26), ND/EBITDA 4.5× FY26 → 3.63× TTM (Sep-26)**; Moody's Baa3 / Fitch BBB- (obligor group), AEML S&P BBB- [V].
- **adani-energy-solutions.html — investor attribution:** the timeline says "global investors (e.g. Qatar Investment Authority, TotalEnergies) take stakes in group entities / AEML". **QIA holds 25.1% of AEML [K]; TotalEnergies' Adani stakes are in Adani Total Gas and Adani Green, not AESL [K]; IHC invested in AESL (2022) [K].** Make the attribution precise. (The research brief's "TotalEnergies/IHC/QIA stakes" for the 2023 QIP repeats the same confusion.)
- **adani-energy-solutions.html — EBITDA basis:** ₹8,726 Cr includes other income and one-time regulatory income; operating EBITDA ₹7,407 Cr; screener OP ₹8,005 Cr. Add one line. Smart-metering EBITDA is reported both Ind AS and non-Ind AS — quote the basis.
- **adani-energy-solutions.html — ownership trend:** promoter 72.72% → **73.39%** (Sep-26); **FII 17.58% (Mar-25) → 9.57%**, DII 6.33% → 13.61% [V screener]. Worth a sentence in §06/§08.

## 3.5 Key source URLs

- **Screener (pulled 23-Oct-2026):** https://www.screener.in/company/POWERGRID/consolidated/ ; https://www.screener.in/company/ADANIENSOL/consolidated/ [V]
- **AESL Q2 FY27 media release (22-Oct-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=bf01031c-a556-462a-8236-ad6c63cc3a5c.pdf [V]
- **AESL Q2 FY27 investor presentation (23-Oct-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4777b812-e7d5-4515-94bd-7bc000078791.pdf [V]
- **AESL Q1 FY27 results presentation:** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=47b9b15b-12cd-497f-8df4-a17595a99d4a.pdf [V]
- **AESL Q1 FY27 earnings call transcript (22-Jul-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d1265bbd-59f3-4df0-8874-ecb987d8bf99.pdf [V]
- **POWERGRID FY26 analyst-meet deck (18-May-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=139ed5ad-da21-4cee-8495-64c26452c2d7.pdf [V]
- **POWERGRID Q1 FY27 deck (7-Aug-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=188c1f55-7aa7-4ca5-9677-0214d1cb674a.pdf [V]
- **POWERGRID Q1 FY27 webinar transcript:** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f17cbb9f-819b-4b15-b647-b97c1adc2d32.pdf [V]
- **POWERGRID Pune West TBCB (16-Oct-2026):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2a0b1af1-86e1-4796-94ed-7679292699ea.pdf [V]
- **AESL QIP Jul-2026:** https://www.sahi.com/news/adani-energy-solutions-allocates-equity-shares-at-1-615-each-4380-PE1_COR ; https://www.outlookbusiness.com/corporate/adani-energy-solutions-launches-qip-with-10000-crore-fundraising-approval-in-hand ; https://www.investywise.com/?p=98798 [V-snip]
- **OFAC–AEL settlement:** https://ofac.treasury.gov/recent-actions/20260518 ; https://thewire.in/trade/us-announces-usd-275-million-sanctions-settlement-with-adani-enterprises ; https://moneylife.in/article/us-drops-criminal-case-against-gautam-adani-as-adani-enterprises-pays-275mn-settlement/80497.html [V-snip]
- **Dismissal 10-Aug-2026:** https://www.thestar.com.my/news/world/2026/08/11/us-judge-dismisses-criminal-case-against-indian-billionaire-adani ; https://www.scmp.com/news/world/united-states-canada/article/3363580/us-judge-dismisses-criminal-case-against-indian-billionaire-adani [V-snip]
- **CEA/transmission additions:** https://www.outlookbusiness.com/spotlight/news-wire/india-adds-113013-mva-grid-transformation-capacity-in-fy26-meets-90-of-cea-target [V fetched]; https://mercomindia.com/transmission-line-additions-in-9m-fy-2026-meet-less-than-half-the-target ; https://www.tndindia.com/transmission-line-addition-meets-over-90-per-cent-of-target/ ; https://www.constructionworld.in/amp/energy-infrastructure/power-and-renewable-energy/india-targets-627000-circuit-kilometre-grid-to-support-900-gw-renewables/94588 ; https://www.angelone.in/news/economy/india-hits-5-lakh-circuit-km-milestone-in-power-transmission-lines [V-snip]
- **RDSS smart meters:** https://www.energetica-india.net/news/indias-smart-meter-deployment-touches-528-crore-under-rdss ; https://knnindia.co.in/news/newsdetails/sectors/energy/rdss-smart-metering-plan-covers-1979-crore-consumers-205-lakh-feeders [V-snip]
- **ISTS waiver:** https://www.tndindia.com/waiver-of-ists-charges-on-renewable-energy-to-be-phased-out/ ; https://solarquarter.com/2026/04/29/ministry-of-power-extends-ists-waivers-to-support-delayed-solar-and-wind-projects/amp/ [V-snip]
- **TBCB market:** https://www.tndindia.com/ists-tbcb-market-in-fy26-adani-energy-leads-in-tariff-share-pgcil-in-number-of-schemes/amp/ [V-snip, paywalled]
- **CERC draft regs:** https://powerline.net.in/2024/02/05/roe-adjustments-key-highlights-of-cercs-draft-tariff-regulations/ [V-snip]
- **Ladakh HVDC:** https://www.tndindia.com/contracts-for-ladakh-hvdc-project-to-be-awarded-in-q1fy26/ [V-snip]
- **PGInvIT:** https://www.business-standard.com/article/markets/power-grid-corporation-raises-rs-2-736-crore-through-invit-ofs-121051401063_1.html ; https://insights.dsij.in/dsijarticledetail/power-stocks-bold-move-sells-26-per-cent-stake-for-rs-506-crore-and-acquires-rs-1837-crore-transmission-project-45382-id013 [V-snip]
- **IndiGrid / Resonia:** https://www.indigrid.co.in/wp-content/uploads/2026/08/earnings-release.pdf ; https://solarquarter.com/2026/08/13/indigrid-q1-fy27-revenue-rises-29-4-energrid-wins-inr-5800-crore-transmission-projects/ ; ICRA rationale https://www.icra.in/Rating/GetRationalReportFilePdf?id=142873 [V-snip]
- **Global peers:** https://multiples.vc/public-comps/national-grid-valuation-multiples ; https://multiples.vc/public-comps/redeia-valuation-multiples ; https://www.websim.it/static/upload/ter/terna-17-11-25.pdf [V-snip]
- **POWERGRID Q2 date search:** https://www.psuconnect.in/psu-news/powergrid-board-meeting-on-22-july-2026-borrowing-limit-hiked-to-rs-35000-crore [V-snip]
- **Reference (read-only):** /tmp/power-transmission-dossier/REF-integrated-power-dossier.md (Integrated Power Utilities dossier, 22-Oct-2026) [K: integrated-power dossier]

### Unsourced / weakly sourced figures that carry an argument (for a second deep-research pass)
1. **National ckm additions FY20–FY25** (esp. FY25 ~8,830 decade low) [K] and FY26 ~12,139 [V-snip, conflicts with the Mercom 9M pace].
2. **CERC 2024–29 final parameters** (ROE 15.5% for new transmission, NATAF 98%, incentive band, depreciation 5.28%) [K].
3. **POWERGRID FY24/FY25 capex and capitalisation** [E chart labels].
4. **POWERGRID regulated equity ~₹83k Cr** [E] and net debt (cash) [not fetched].
5. **TBCB equity IRR 12–14%** [E]; AESL UC tariff yield 12.6% [E]; Vizag capex ~₹6,800 Cr [E].
6. **AESL ~32% cumulative TBCB share** [primer, unverified]; FY26 awards by winner [V-snip only for AESL FY25 28.6%].
7. **ISTS money pool ₹60–65k Cr/yr** and the transmission revenue pool ₹1.2–1.4 L Cr [E].
8. **NEP inter-/intra-state split (₹4.75 / ₹4.4 L Cr)** [K].
9. **US case: "with prejudice"; Sagar Adani/Vneet Jaain counts; the AESL Nov-2024 non-involvement clarification; Kenya KETRACO ~US$736 mn cancellation** [K/brief].
10. **QIA 25.1% of AEML; IHC in AESL; TotalEnergies not in AESL** [K].
11. **ESP related-party counterparties**; AESL promoter pledge [not fetched].
12. **RDSS consumer/state pushback** [K, no source].
13. **10-yr G-sec yield Oct-2026** [not fetched]; repo 5.50% [K-sib].
14. **Peak demand series** [K: integrated-power dossier]; 270.82 GW [V-snip].
15. **AESL smart-meter capex per meter ₹6,000–7,000** [E].
