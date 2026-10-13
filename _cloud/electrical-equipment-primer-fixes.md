# Primer fixes — Capital Goods || Other Electrical Equipment (Phase 3)

Refresh date: **13 Oct 2026**. Market data is the screener close on 13 Oct 2026 (orchestrator K1 grid in `_cloud/electrical-equipment-industry.md`). Facts come from the PRIMER ISSUES blocks in `_cloud/electrical-equipment-companies-1.md` (batch 1) and `_cloud/electrical-equipment-companies-2.md` (batch 2), plus K3 notes.

Scope: targeted edits to the 13 member primers in `primers/`. No section ids, anchors, back button, PDF button or print CSS were changed. No `.ss-link` banners were touched (none exist in these files). No provenance line was added, and the stat strips contain no USD.

Applied to all 13 files:
- Added `main{min-width:0;}` inside the first `<style>` block (fixes phone overflow).
- Set the refresh-bar date (`#rb-when`) to **13 Oct 2026**, and added Q1 FY27 to the source text (Q2 CY26 for ABB).
- Added a dated latest-quarter lead to the What's-new box. The earlier text is kept after "Earlier:".
- Changed the stat-strip market cap to the 13 Oct 2026 value, labelled "(13 Oct '26)" or "(13 Oct 2026)".
- Updated the disclaimer basis to "… and Q1 FY27, with market data as of 13 Oct 2026".
- Appended the dated sources (the Q1 FY27 deck/call, BSE filings, CARE/CRISIL, and screener as of 13 Oct 2026) to each sources list.

Sources key: **B1** = batch-1 PRIMER ISSUES; **B2** = batch-2 PRIMER ISSUES; **K1/K3** = orchestrator KPI appendix. The row number after B1/B2 is the issue number in that table.

---

### cg-power.html

| What was wrong | What it says now | Source |
|---|---|---|
| Stat strip m-cap "~₹1.50 lakh Cr (Jul '26)" | ~₹1.35 lakh Cr (13 Oct '26). The same figure is used in the snapshot and the valuation text | B1 #1; K1 |
| P/E ~115×, P/B ~19× (dek, snapshot, mini-stats, valuation plain, bear case, bottom line) | ~106× and ~16.9× (as of 13 Oct 2026). Claims reworded so they stay true, e.g. the stock "rallied ~48% in H1 2026 … has since cooled" | B1 #2 |
| No Q1 FY27 | What's new: revenue ₹3,281 Cr (+14%), PAT ₹308 Cr (+16%), consolidated OB ₹18,965 Cr (+45%), standalone ₹17,333 Cr. The order-book section also cites the Jun-26 book | B1 #3 |
| Transformer capacity "~45,000 → ~85,000 MVA by FY28" | ~75,000 MVA power + ~10,000 MVA distribution already installed; +45,000 MVA plant ramping (≈120 GVA) | B1 #4 |
| CG Semi "nearing / ramping toward commercial production" (3 places) | G1 began commercial production on 4 Jul 2026; G2 due end-CY2026 | B1 #5 |
| Promoter "~56%" (2020 deal only) | Adds "promoter group held 56.36% in Jun 2026, down from 58.05% after the Jul 2025 QIP" | B1 #6 |
| Governance events missing | SRBC resigned as auditor effective 14 Aug 2026; Price Waterhouse Chartered Accountants LLP appointed by postal ballot 25 Sep 2026 (in What's new and in the turnaround plain box) | B1 #7 |
| EHV switchgear expansion missing | S3 Unit-II Nashik commissioned 4 Jun 2026: +7,200 EHV breakers/yr on 9,000 | B1 #8 |
| Semiconductor drag described only as "loss-making" | ₹111 Cr in FY26 (89 bps) and ₹43 Cr in Q1 FY27 (132 bps) | B1 #9 |
| Net cash shown as "₹118 Cr borrowings vs ₹7,655 Cr reserves" (3 places) | ₹118 Cr borrowings vs ~₹1,481 Cr cash & investments (≈₹1.36k Cr net cash, before QIP money held in other assets) | B1 #10 |
| Banned phrases: "priced for perfection", "Think of it this way", "grow into the multiple", "a very long way to fall", "The story … will be written in"; analogy "is the backbone of the investment case" | Rephrased: "Its price already assumes near-flawless delivery", "Put simply", "earn its way to a lower multiple", "could de-rate sharply", "three numbers matter most", "sits at the centre of the investment case"; ptag "How to read the ~106× multiple" | Hygiene |
| "honest" ×3 | 1 left (the blockquote). The others became "fair read" and "realistic picture" | Hygiene |

Not changed (unverified): the ₹900 Cr US data-centre order [K]; true net cash including QIP deposits [E]; the FY26 headline figures, which were confirmed correct.

### abb-india.html

| What was wrong | What it says now | Source |
|---|---|---|
| §08 "The robotics spin-off": parent share distribution "not a cash sale"; India outcome undecided | §08 is now "The robotics sale" (TOC label and h2 text changed, anchor #p8 kept). It describes the **slump sale of the Robotics business to ABB Robotics India for ₹1,568.20 Cr, effective 1 Mar 2026** (postal ballot 27 Feb 2026) and the gain on sale (~₹1,658 Cr, secondary-sourced). It explains why Q1 CY26 reported PAT was ₹1,783.7 Cr vs ₹341.9 Cr continuing, and flags the related-party nature. Later references (timeline, governance list, bear case, competitor table, dek, products table) changed to "sale" | B1 #1; K3 |
| "Four engines … Robotics" segment structure | Three segments now (Electrification ~50%, Motion ~35%, Automation ~15% of Q2 CY26); Process Automation renamed Automation from 1 Jan 2026. The CY25 four-segment split is kept and labelled as the pre-sale picture. Section 02 title changed to "The business areas" | B1 #2 |
| Latest quarter "Q1 CY2026" | Q2 CY26: revenue ₹3,559 Cr (+21%), orders ₹4,363 Cr (+50%), backlog ₹11,898 Cr, PAT ₹370 Cr, op. EBITA 13.0%. Q3 due 13 Nov 2026. Backlog mini-stat, table row and bull case updated | B1 #3 |
| Q1 CY26 profit not explained | Reported ₹1,783.7 Cr vs continuing ₹341.9 Cr (−25%); TTM ₹2,988 Cr includes the gain | B1 #4 |
| M-cap "~₹1.50 L Cr (Jun '26)"; P/E "~75–95×"; P/B "~18–19×" | ~₹1.48 L Cr (13 Oct '26); P/E ~96× on continuing earnings; P/B ~15.8× (snapshot, valuation lead, mini-stats, bear case, bottom line; "~80×" changed to "~96×") | B1 #5; K1 |
| ₹90/share special dividend missing | Added (What's new, timeline, §08, bull case) | B1 #6 |
| Leadership transition missing | T.K. Sridhar MD from 1 Jan 2027, succeeding Sanjeev Sharma; Suneel Kumar Munaga CFO | B1 #7 |
| Cash "~₹5,694 Cr end-CY2025" | ₹5,665 Cr (Dec-25); ~₹7,200 Cr (Jun-26) before the ₹90/sh payout (3 places) | B1 #8 |
| Parent M&A missing | Pending Rotork acquisition noted under governance | B1 #9 |
| Banned / glib: "Think of ABB India as the 'arms dealer' of the electrification age"; h1 "the arms-dealer of the electrification age"; "priced for perfection"; "priced for years of flawless execution"; "a long way to compress / to fall"; "grow into even a demanding multiple"; "little room for error"; "best thought of as" | Rephrased: h1 "selling the kit behind India's electrification"; "a supplier of essential equipment …"; "already assumes years of flawless execution"; "plenty of room to shrink"; "could de-rate hard"; "can eventually justify"; "tolerates few mistakes"; "works like a franchise deal" | Hygiene |
| "honest" ×6 | 0 left | Hygiene |

Not changed (unverified): the royalty/technology-fee amount; ABB Ltd's global robotics outcome (the SoftBank sale is [K]). The latter is not asserted in the primer.

### waaree-energies.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹83,000 Cr (Jun '26)"; P/E "21–23×" | ~₹70,350 Cr (13 Oct '26); ~17.5×. The bull maths was reworded ("earnings growth can make today's multiple look cheap") | B1 #1 |
| Order book "₹53,000 Cr, ~65–70% export" (stat strip, snapshot, US plain, mini-stats, plain, bull case) | ₹61,500 Cr / 25.2 GW (28 Jul 2026). Mix: India domestic ~40%, US-made ~36%, exports from India ~24% (≈60% US-linked). Stat strip now "Order book (Jul '26) · 25.2 GW" | B1 #2 |
| Texas "1.6 → 3.2 GW in 2025, ~5 GW by 2027" | 1.6 GW installed (59% utilisation); +2.6 GW in FY27; Arizona plant referenced. The FY25 timeline claim of "expansion to 3.2 GW" was softened | B1 #3 |
| Q1 FY27 missing | Revenue ₹7,932 Cr (+79%), op. EBITDA ₹1,440 Cr (18.2% vs 22.5%), PAT ₹892 Cr (+15%), 3.6 GW sold. Added to What's new, the timeline, the valuation plain and the bear case | B1 #4 |
| BESS "3.5 GWh lithium-ion cell plant" | 5.15 GWh BESS container line commissioned; cells/packs in the FY29 16.5 GWh phase; 20 GWh programme | B1 #5 |
| "~4 GW inverter line"; T&D missing | Inverters 4.15 GW after the 1.1 GW Sarodhi line (30 Sep 2026); 55% of Associated Power Structures for ~₹1,225 Cr; 17.6 MVA inverter-duty transformer | B1 #6 |
| Cell expansion timing missing | +10 GW cells at Unn within FY27 (15.4 GW total); Nagpur ingot-wafer is FY28 | B1 #7 |
| Promoter "~64% / ~64.2%" | 64.12% (Jun 2026) | B1 #8 |
| Only the CMD named | WTD & CEO Jignesh Rathod; CFO Abhishek Pareek | B1 #9 |
| ALMM-II "from June 2026" without the exemption | Effective 1 Jun 2026, with the C&I / non-subsidy residential exemption to Dec 2026 | B1 #10 |
| US AD/CVD on Indian cells missing; "possible new AD/CVD cases aimed at India" | Final AD 123.04% + CVD 126.09% on Indian cells, including those in modules (Sep 2026), in the US section, the two-edged note and the bear case | K3 #5 |
| Banned: "Think of Waaree as …"; "How to think about the valuation" | Rephrased | Hygiene |
| "honest" ×1 | "real limit" (0 left) | Hygiene |

Not changed (unverified): FY26 production of 12.6 GW [K] (kept in the capacity chart and FY26 What's-new text).

### suzlon-energy.html

| What was wrong | What it says now | Source |
|---|---|---|
| Order book "record ~6.4 GW … ₹40,000 Cr+" (stat strip, snapshot, §05 lead/chart/plain, bull case, bottom line) | 6,135 MW (~6.1 GW) as of Jul 2026, incl. post-June orders; 5,933 MW at Mar-26; ~5.7 GW at 30 Jun. "₹ value not disclosed". Chart bar → ~6.1 GW (Jul 2026) | B1 #1 |
| Mix "66% PSU + C&I" | Captive/C&I/retail 70% + PSU 14% = 84%; auctions 16% | B1 #2 |
| M-cap "~₹79k Cr (Jul 2026)"; P/E ~25×; P/B ~13×; share price ~₹57 | ~₹54.8k Cr (13 Oct 2026); ~17.4×; ~5.8×. Valuation table re-dated; share price shown as "Double-digit ₹" because the exact price was not in the verified set. Bear/bottom-line wording adjusted ("still assume smooth execution"; "the de-rating already seen since July could go further") | B1 #3 |
| Promoter "~11.7%" | 11.70% (Jun 2026) | B1 #4 |
| Q1 FY27 missing | Deliveries 506 MW (+14%), revenue ₹3,819 Cr (+23%), EBITDA ₹595 Cr (15.6% vs 19.2%), PAT ₹305 Cr, net cash ₹2,322 Cr | B1 #5 |
| O&M figures not reconciled to the deck | Kept ₹2,484 Cr / ₹759 Cr, labelled as the statutory segment basis. Added the deck RE AMS basis (₹2,073 Cr revenue, ₹839 Cr EBITDA, 40.5%) | B1 #6 |
| Fleet "15+ GW"; Renom "crossing 3 GW" | 16.1+ GW (Jun 2026); Renom multi-brand AUM 3,585 MW | B1 #7 |
| No CEO; S144 only | Group CEO Ajay Kapur, Group CFO Rahul Jain; "Suzlon 2.0" (25% CAGR ambition); S175 first turbine May 2026; S163 H1 2027 | B1 #8 |
| "Expand manufacturing to 4.5 GW/year and beyond" | 4.5 GW already fully operational; 3 AI-enabled blade factories under construction; FY27 capex ~₹700 Cr | B1 #9 |
| Banned: "Think of Suzlon …", "a long way to fall", "little margin for error", "The story … will be told in" | Rephrased | Hygiene |
| "honest" ×3 | 1 left ("keep it honest" note). "honestly" and the second instance removed | Hygiene |

Not changed (unverified): the Suzlon order-book quarter mapping (FY24/FY25 chart bars kept); WTG segment EBITDA and forging values.

### premier-energies.html

| What was wrong | What it says now | Source |
|---|---|---|
| Cell capacity "3.6 / 11.1 GW"; "3.6 GW today, heading to ~10.6 GW" | 10.6 / 11.1 GW (Oct '26). 7 GW Naidupeta TOPCon commissioned in Sep 2026. Snapshot, capacity chart (bar relabelled "commissioned") and legend updated | B1 #1 |
| Order book "₹14,010 Cr (9,383 MW)" | ₹15,000 Cr / 9,867 MW at 30 Jun 2026 (cells 58%, modules 40%, transformers 2%; 100% domestic) + ₹4,001 Cr (2,308 MW) in Q2 FY27. The FY26 table row keeps the Mar-26 value with Jun-26 noted | B1 #2 |
| M-cap "~₹47,500 Cr (Jun '26)"; P/E 31–32×; P/B ~11× | ~₹41,170 Cr (13 Oct '26); ~24.7×; ~9.5× (stat strip, mini-stats, valuation plain, bear case, bottom line "~25× on 50%+ growth") | B1 #3 |
| Promoter "~63.9% (Mar …)" | 58.49% (Sep 2026; 58.48% Jun). The ownership line, timeline-era table and What's new are updated. The reason for the reduction is stated as not disclosed in the reviewed data | B1 #4 |
| "~32% EBITDA" (stat strip, snapshot, integration plain, policy plain, mini-stat, bull case) | ~30% operating EBITDA (30.4%); ~32% only including other income. Guidance 29–30% ±100–150 bps | B1 #5 |
| ALMM-II framing without the exemption | Exemption to Dec 2026 for C&I / non-subsidy residential (snapshot, policy table, catch note, bull case) | B1 #6 |
| Q1 FY27 missing | Revenue ₹2,463 Cr (+35%), op. EBITDA ₹714 Cr (29%), PAT ₹472 Cr (+53%), cell utilisation 92%, net debt ₹1,642 Cr (D/E 0.86×) | B1 #7 |
| Transcon / BESS detail | 51% Transcon (Q1 revenue ₹110 Cr, 27% EBITDA; 6.75 GVA, +10 GVA Sep-26, 16.25 GVA by FY28); BESS 12 GWh (6 GWh Phase 1) under construction; US cell JV (24–30 months) | B1 #8 |
| "Washington has already opened AD/CVD investigations touching India" | Final AD 123.04% / CVD 126.09% on Indian cells (Sep 2026); US cell JV planned | K3 #5 |
| Banned: "Think of a solar panel like a chocolate bar"; "How to think about the ~32× multiple"; "The story … will be written in" | Rephrased | Hygiene |

Not changed (unverified): the ingot-wafer timeline (Dec 2027 / Dec 2028) [K]; the reason for the promoter-stake reduction.

### emmvee-photovoltaic.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹23,100 Cr (Jul '26)"; P/E ~21× | ~₹20,680 Cr (13 Oct '26); ~16× (16.2×); P/B 5.6× in What's new | B2 #1 |
| Q1 FY27 missing | Revenue ₹1,556 Cr (+51%), EBITDA ₹548 Cr (35%), PAT ₹380 Cr (+103%); OB 9.9 GW (1,484 MW inflow); utilisation cells 83% / modules 45% | B2 #2 |
| "16.3 GW modules and 8.9 GW cells by FY27" (snapshot, chart labels, growth runway, bottom line) | Module line by Dec 2026, cell line by Mar 2027 → 16.3 / 8.9 GW by early FY28 | B2 #3 |
| "New cell line (~1.4 GW+)" | Unit 7 = 6 GW cell + 6 GW module integrated TOPCon; ~₹5,500 Cr (hard cost ₹4,600 Cr); ₹3,300 Cr debt tied up below 8% | B2 #4 |
| Ingot-wafer "~₹6,300 Cr, ~FY29" | ₹5,000–5,500 Cr (₹600–650 Cr/GW); 5 GW FY29 + 4 GW FY30, subject to ALMM-III; mostly internal accruals | B2 #5 |
| FY27 guidance missing | ~₹2,400 Cr EBITDA target; EBITDA/W ~₹2.5 module-only vs ₹6.0–6.5 with own cell | B2 #6 |
| CEO not named | Suhas Donthi Manjunatha (WTD, President & CEO); CFO Pawan Kumar Jain | B2 #7 |
| ROCE "~38%" | ~45% (44.6%) | B2 #8 |
| Promoter "roughly 80%"; MPS not mentioned | 80.03% (Jun 2026); above the 75% MPS cap, so a sell-down is required by ~Nov 2028 (overhang noted in ownership and bear case) | B2 #9; K1 |
| Recent events missing | ₹38.4 Cr GST show-cause notice on Emmvee Energy (30 Sep 2026); Q2 board meeting 14 Oct 2026 | B2 #10 |
| Net-cash framing "−0.06×" | −0.01× to −0.06× depending on basis; will reverse as the ₹3,300 Cr Unit-7 debt is drawn | B2 #11 |

Not changed (unverified): the Karnataka HC criminal-case item (not added; detail too thin to summarise safely); FY25 product mix and IPO terms [K].

### hbl-engineering.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹21,200 Cr (mid-2026)" | ~₹19,700 Cr (13 Oct 2026); P/E 24.6×, P/B 8.9× (What's new, mini-stat, valuation plain) | B2 #1 |
| "Kavach order book of roughly ₹3,760 Cr" (5 places + chart bar) | Total order book ≈₹5,902 Cr (Sep 2026), of which Kavach + TMS ≈₹4,440 Cr (75%). Chart bar now "Kavach + TMS order book Sep '26 ~4,440", with the other two bars rescaled | B2 #2 |
| CLW cancellation missing | CARE: the unexecuted balance of an earlier CLW loco Kavach order was cancelled (loco unavailability) — in What's new, the lumpiness note, the new plain box and the bear case. Table heading "a win-streak, with one cancellation" | B2 #3 |
| Q1 FY27 missing | Revenue ₹638 Cr (+6%), OPM 23% (32%), PAT ₹109 Cr (−24%); Electronics PBIT 31% (₹71 Cr / ₹227 Cr) vs 50% FY26; Defence & Aviation −49% | B2 #4 |
| "One of only three approved makers" (dek, snapshot, competitor table, plain, bull case) | "One of the original three"; the field has widened. CG Power's G.G. Tronics row added (≈₹1,000 Cr Kavach book); CARE "limited number of vendors" | B2 #5 |
| Rollout stats "24,427 route-km, 4,154 locos (early 2026)" | Jul 2026: >6,000 locos fitted, ~7,300 in progress; trackside taken up on >21,800 route-km (definitions differ) | B2 #6 |
| Management Kavach outlook missing | Chairman (AR FY26): Kavach ~50% of FY26 sales, similar in FY27; could decline from FY29 | B2 #7 |
| Cash "~₹528 Cr" | CARE cash & liquid investments ₹570 Cr (screener ₹552 Cr cash + ₹402 Cr investments); term loan repaid | B2 #8 |
| CARE upgrade missing | AA-/Stable (from A+/Positive), 9 Oct 2026; A1+ short-term | B2 #9 |
| EV / fuze / maritime timelines missing | E-truck homologation Mar 2027, pilot sales Jul 2027 (~9-month delay); MHA grenade fuzes selling, Army/155 mm approvals 2027; Green Maritime Propulsion JV with Cochin Shipyard (11 Jun 2026) | B2 #10 |
| CMD remuneration missing | ₹1.17 Cr + ₹56.02 Cr commission (AR FY26) | B2 #11 |
| plain = 7 (hard fail) | Added an 8th `class="plain"` "In plain terms" box in §04 on Kavach lumpiness and margins (Electronics margin 50% FY26 → ~14% Q4 FY26 → 31% Q1 FY27; CLW lapse; FY29 caution) | Hygiene |

Not changed (unverified): the smaller 2026 Kavach orders in the order table (snippet-only); the customer of the ₹1,714 Cr order (kept as CLW per the original sources); Kavita Prasad Aluru's ED appointment.

### inox-wind.html

| What was wrong | What it says now | Source |
|---|---|---|
| Promoter "controlling majority … roughly 70%+" | 44.18% (Jun 2026); below 50% since Jun 2024 — a minority but controlling stake | B1 #1 |
| M-cap "~₹25,750 Cr (mid-2026)"; P/E ~45× | ~₹12,055 Cr (13 Oct 2026; price ~₹70, below the ₹120 rights price); ~35×, ~1.9× book. Snapshot, mini-stats, valuation plain, bear case and lead reworded so the "priced for flawless execution" framing becomes "already marked down" | B1 #2 |
| Order book "~3.1 GW (FY26 exit)" as current (stat strip, lead, mini-stat, bull case) | ~4.4 GW (Jul 2026) incl. a 1.5 GW MOU with group company Inox Clean (0.5 GW firm) + 200 MW NLC LoA. FY26-exit ~3.1 GW kept as history | B1 #3 |
| MW funnel "Delivered ~2,456 MW … commissioned ~744 MW … ~1,321 MW erected" (snapshot, §05 chart of 4 bars, plain, mini-stat, bull case, bottom line, net-cash plain) | Removed: 2,456 MW is Suzlon's FY26 figure and Inox did not disclose MW. The §05 chart (4 bars kept) now shows the order-book composition (Jul-26 ~4,400; FY26 ~3,100; Inox Clean MOU 1,500; firm 500). Text explains that MW are not disclosed and points readers to receivables and cash flow. "~600 MW added in FY26" was dropped with the MW mini-stat | B1 #4 |
| "Net-cash … ~₹75 Cr" (dek, snapshot, timeline, ownership, §08 sub/chart/plain, competitor row, financials lead, mini-stat, bull case, bottom line) | Net debt ≈₹940 Cr (borrowings ~₹1,551 Cr vs cash & bank ₹612 Cr; ≈₹390 Cr counting ₹550 Cr investments). §08 chart bar "+75 cash" → "Net debt FY26 ~940"; claims reworded ("much repaired but not net-cash") | B1 #5 |
| Cash PAT basis ambiguous | ₹1,032 Cr (+28%, income-statement basis) vs ₹863 Cr (+20%, highlights table), with the note that OCF was −₹598 Cr | B1 #6 |
| Q1 FY27 missing | Total income ₹872 Cr (+1%), EBITDA ₹237 Cr, PAT ₹64 Cr (−34%); equipment-only pivot (59% of third-party book) | B1 #7 |
| No CEO named | CEO Sanjeev Agarwal; ED Devansh Jain; Group CFO Akhil Jindal | B1 #8 |
| Group events missing | Inox Green evacuation business demerged into IRSL (record date 1 Aug 2026; to list); Wind World 4.5 GW O&M (via Inox Green) consolidating from Q3 FY27 | B1 #9 |
| Receivables risk under-stated | Trade receivables ₹4,250 Cr (Mar-26) vs ₹2,549 Cr; FY26 CFO −₹598 Cr (§05 text, mini-stat, bear case) | B1 #10 |

Not changed (unverified): FY26 MW delivered/commissioned (the company does not disclose them, so they were removed rather than replaced); the FY25 revenue base (~₹3,730 Cr) in the revenue chart.

### fujiyama-power-systems.html

| What was wrong | What it says now | Source |
|---|---|---|
| Stat strip on FY25: revenue ~₹1,541 Cr, PAT ~₹156 Cr, ~16% EBITDA | FY26: ~₹2,654 Cr (+72%), ~₹304 Cr (+95%), ~19% EBITDA. Snapshot, distribution note, margin plain and bull case updated. A FY26 bar was added to each of the three FY23–FY25 charts (revenue, PAT, margin), which takes the file to 20 bar rows | B2 #1; K1 |
| M-cap "~₹11,700 Cr (mid-2026)"; P/E ~38× | ~₹12,348 Cr (13 Oct 2026); ~30× (screener 29.5×), ~41× on reported TTM after the fire, ~31× ex-fire (snapshot, mini-stat, valuation plain, bear case, note) | B2 #2 |
| "rather than owning a giant chip-like cell factory"; "not a cell fab" | 1 GW solar-cell facility commissioned (DCR cells for PM Surya Ghar panels) + 1.2 GW announced. Dek, snapshot bullet, §05 h2 text ("— with a first cell line"), flow node and note, paragraph, plain and bottom line updated | B2 #3 |
| Bawal fire missing | 6 May 2026 fire at the Bawal (Rewari) lead-acid plant; ₹143.6 Cr exceptional loss (₹107 Cr post-tax); insured; CRISIL watch removed 14 Aug 2026 (What's new, timeline, PAT chart legend, bear case) | B2 #4 |
| Q1 FY27 missing | Revenue ₹1,346 Cr (+125%), EBITDA ₹255 Cr (18.9%), PAT ₹58 Cr reported / ≈₹165 Cr ex-fire; FY27 guidance raised to ~+70% | B2 #5 |
| Distribution "~725 distributors, ~5,546 dealers, ~1,100 shoppes" (snapshot, mini-stats, pyramid text, plain, note, competitor plain, bull case) | 10,100+ channel partners (Jun 2026); target 15,000 by FY28. Mini-stats now 10,100+ / 15,000 / ~90% B2C. IPO-era counts kept as history | B2 #6 |
| Ratlam "inverter and battery lines slated for FY27" | 2 GW power-electronics line commissioned Aug 2026 (total ~4,180 MW); 2 GWh Li-ion due Q2 FY27. Ratlam chart rebuilt with 4 bars kept | B2 #7 |
| MPS equity raise missing | Board meets 15 Oct 2026 to approve a QIP or other issue for minimum public shareholding (ownership note, timeline, bear case) | B2 #8; K3 #6 |
| Promoter "~86.8%"; names "should be read from the offer document" | 86.63% (Jun 2026); Pawan Kumar Garg (Chairman & Joint MD) and Yogesh Dua; CFO Prashant Gupta | B2 #9 |
| Debt "~₹688 Cr as of Sept-2025" | ₹520 Cr (Mar 2026) incl. ₹58 Cr leases; cash ₹161 Cr; net debt ≈₹359 Cr; gearing 0.38× (the Sept-2025 figure kept as IPO-time history) | B2 #10 |
| Backward-integration deals missing | Zayo Energy and Zayo Cables stakes raised from 19% to 50% | B2 #11 |
| FY25 segment mix presented as current | Kept as FY25, with the note that management no longer discloses it (~90% B2C; tubular batteries ~10%; inverter MW ≈2× panel MW) | B2 #12 |

Not changed (unverified): FY24 revenue/PAT/margin (₹925 Cr / ₹45 Cr / ~11%) and the FY25 product mix [K: RHP]; IPO terms [K].

### inox-green-energy.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹7,400 Cr (mid-2026)"; P/E ~60× | ~₹5,163 Cr (13 Oct 2026); ~42× (snapshot, contract-mix plain, valuation chart, mini-stat, plain, bear case). The market-cap chart was rescaled to Inox Green 5,163 / Inox Wind 12,055 / Suzlon 54,776 | B1 #1; K1 |
| Promoter "roughly 56%" | 53.70% (Sep 2026); 56.12% in Jun. The reason for the decline is stated as not set out in the data reviewed | B1 #2 |
| FY27 guidance "~75% revenue growth, EBITDA 'north of ₹600 Cr', 20–22% margin" attributed to Inox Green (§04 text, mini-stat, plain, bottom line, note) | Inox Green guides to ~₹600 Cr EBITDA annualised from Q3/Q4 FY27 (post Wind World), with ~50% wind O&M margins; the +75% / 20–22% is Inox Wind's guidance (stated explicitly) | B1 #3 |
| Wind World "₹600 Cr bid", "acquired early 2026", implied 100% | ₹550 Cr incl. taxes paid 6 Oct 2026 via Vibhav Energy (75% Inox Green / 25% Authum Investment); consolidation from Q3 FY27 (snapshot, timeline, structure, §05 lead and text) | B1 #4; K3 |
| "~13 GWp after the Wind World acquisition" | 13.3 GWp (Jun 2026) = ~10.5 GW wind + solar, including ~6.5 GW acquired (4.5 GW Wind World + ~2 GW held as an investment, not consolidated). §05 chart now has 5 bars (organic ~4.0, derived) | B1 #5 |
| Demerger "in 2025–26 … via a demerger" | Into Inox Renewable Solutions Ltd (IRSL), record date 1 Aug 2026; IRSL to list | B1 #6; K3 |
| Revenue "+19%" | +28% (₹281 Cr vs ₹220 Cr) in What's new and the FY26 timeline. The company's total-income basis (₹426 Cr, +69%) was not added | B1 #7 |
| Parent order book "~3.1 GW" | ~4.4 GW (Jul 2026) incl. 1.5 GW Inox Clean MOU (0.5 GW firm) | B1 #8 |
| Q1 FY27 missing | Total income ₹101 Cr (+17%), EBITDA ₹57 Cr, PAT ₹41 Cr (+86%); screener core OP −₹1 Cr (other income ₹58 Cr); availability 96.3% | B1 #9 |
| CEO not named | CEO S.K. Mathusudhana | B1 #10 |

Not changed (unverified): the reason for the Sep-26 promoter decline.

### vikram-solar.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹6,190 Cr (Aug 2026)"; price "~₹173"; P/E 17–18× | ~₹5,208 Cr (13 Oct 2026); ~₹144 (52-wk low ₹141; −57% vs ₹332 IPO); ~14×; P/B 1.6× (stat strip, snapshot, surprise note, mini-stats, valuation text, bull case) | B2 #1 |
| Q1 FY27 missing | Revenue ₹1,563 Cr (+38%), EBITDA ₹126 Cr (8.1% vs 21%), PAT ₹20 Cr (−85%); gross margin 19% vs 31%; ₹15.02/Wp; FY27 outlook to be revisited at H1 (What's new, snapshot, timeline, financials lead, bear case) | B2 #2 |
| Module capacity "~9.5 GW" (lead, value-chain node, capacity chart, mini-stat, competitor table/plain) | 15.5 GW nameplate (Gangaikondan 6 GW first module Jun 2026); FY27 effective ~9–9.5 GW. Capacity chart rebuilt (4 bars kept) | B2 #3 |
| Cells "9 GW by December 2026" (snapshot, value chain, timeline, chart, plain, mini-stat, bull case, bottom line, valuation plain) | First cell targeted Q4 FY27 (Jan–Mar 2027); FY28 utilisation 40–50% | B2 #4 |
| Wafer "12 GW by FY30" | 9 GW wafer-ingot, first wafer FY29 (Gangaikondan) | B2 #5 |
| "Gyanesh Chaudhary (Vice Chairman & MD)"; CEO missing | Chairman & MD (H.K. Chaudhary Chairperson Emeritus); Sameer Nagpal CEO & WTD; Ranjan Jindal CFO | B2 #6 |
| Order book "8.2 GW (Mar 2026)" as current | ~7.9 GW (30 Jun 2026): 7.1 GW large accounts + 0.8 GW mid-market; +400 MW EPC order (28 Sep 2026). Mar-26 8.2 GW chart bar kept, with Jun figure in the sub-title | B2 #7 |
| Leadership change missing | Rony Banerjee (EVP Sales & BD) resigned; Nimish Jain named Chief Business Officer (Sep 2026) | B2 #8 |
| "15 GWh BESS" | VSL PowerHive: 7.5 GWh BESS assembly in Chennai (COD Mar 2027; first 20 MWh order executed) + 7.5 GWh LFP cell plant (COD Q4 FY29) | B2 #9 |
| ALMM-II relief missing | MNRE OM of 18 Jul 2026 defers non-DCR C&I/rooftop enforcement to Dec 2026; FY27 mix "skewed towards NDCR" | B2 #10 |

Not changed (unverified): the promoter pledge / unpledging detail; FY26 module volume of 3,342 MW [K].

### saatvik-green-energy.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹5,360 Cr (mid-2026)" | ~₹5,070 Cr (13 Oct 2026); P/E ~20× (20.4×) kept; price ~₹399 vs ₹465 IPO (stat strip, snapshot, financials lead, mini-stat) | B2 #1 |
| Q1 FY27 missing | Revenue ₹511 Cr (−44%), 334 MW (−42%), EBITDA ₹42.5 Cr (8.3% incl. OI), PAT ₹5.4 Cr (−95%) (What's new, snapshot, timeline, financials lead, capex plain, bear case) | B2 #2 |
| Order book "~5.9 GW (Mar 2026)" (stat strip) | 6.35 GW ≈ ₹8,200 Cr; ~30% DCR; ~70% utility / 30% C&I (FY26 timeline keeps 5.9 GW as history) | B2 #3 |
| Debt "~₹939 Cr"; peak not mentioned | ≈₹1,250 Cr (Jun 2026), D/E 0.99×; peak net debt ₹2,200–2,400 Cr (balance sheet, capex section; the mini-stat "84% utilisation" was replaced by peak net debt) | B2 #4 |
| Cell timing undated | ALMM-II inspection planned Sep 2026; cell production hoped for by Q3 FY27 (pulled forward from Q4); 4 GW Odisha module line ramping from end-Aug 2026 | B2 #5 |
| Capex not quantified | Phase I ~₹1,850 Cr, Phase II ~₹1,600–1,700 Cr (~₹3,500 Cr); ~₹1,000 Cr spent by Aug 2026; encapsulant 2 → 5 GW; ingot-wafer 6 GW FY29 | B2 #6 |
| Promoter "roughly 76%"; MPS | 75.99%, above the 75% MPS cap (ownership, bear case, What's new) | B2 #7; K1 |
| New orders missing | MSEDCL ~₹100 Cr order for 5,000 solar pumps (10 Oct 2026); ₹400 Cr module orders (11 Aug); non-module revenue target 7–10% of FY27 | B2 #8 |
| ALMM-II implied fully enforced from Jun 2026 | Full enforcement postponed to 1 Jan 2027 (deck: implementation to Dec 2026) | B2 #9 |
| US export window as a bull point | Replaced by the cell-timing point. The export row now notes the Sep 2026 US AD/CVD on Indian cells | K3 #5 |

Not changed (unverified): FY26 production ~3,162 MW [K]; IPO terms [K]; lock-in dates.

### websol-energy.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹3,230 Cr (mid-2026)"; P/E ~10× | ~₹2,856 Cr (13 Oct 2026); ~9× (9.1×); P/B 4.5× (stat strip, mini-stat, valuation text, plain, bull case) | B2 #1 |
| Q1 FY27 missing | Revenue ₹373 Cr (+70%), EBITDA ₹126 Cr (33.7% vs 47.3%, mix shift to modules), PAT ₹78 Cr (+16%) | B2 #2 |
| 4 GW greenfield missing | 4 GW cell + 4 GW module TOPCon in two 2 GW phases; 54.2 acres allotted at Falta Industrial Park by West Bengal (23 Sep 2026), moved from Andhra Pradesh; deck shows cells to 5.35 GW by FY28; ingot-wafer with Linton Crystal. Cell-capacity chart gets a 4th bar (FY28 ~5,350), and the mini-stat, timeline, bull and bear cases were updated | B2 #3 |
| "Net debt on the order of ₹130 Cr" | Net cash ₹34 Cr (Mar 2026; screener ≈ +₹21 Cr); IREDA ₹110 Cr loan prepaid 4 Aug 2026 | B2 #4 |
| Pledge missing | Promoter 29.72% (Sep 2026); pledge falling from 80% to ~16% of promoter holding after the IREDA prepayment | B2 #5 |
| "SEZ status orients it toward exports" (§02 lead, policy table) | Management: "completely dealing in the DCR market" (PM Surya Ghar, PM-KUSUM); US AD/CVD on Indian cells noted | B2 #6; K3 #5 |
| Order book "~₹1,161 Cr" as current | ₹1,278 Cr (Jun 2026): cells ₹665 Cr, modules ₹613 Cr (FY26 figure kept as history) | B2 #7 |
| Management not named | Sohan Lal Agarwal (MD), Sanjana Khaitan (ED), Amrit Daga (CFO), Vasanthi Sreeram (CTO) | B2 #8 |
| Q4 FY26 PAT quality | Q4 FY26 tax was ~0 after an appellate order allowed a loss set-off (deck footnote), so FY26 PAT is flattered | B2 #9 |

Not changed (unverified): the ~₹30 Cr size of the tax benefit [E] (the fact is stated without the number); the mechanism behind the promoter-stake increase.

---

## Hygiene summary
- Banned phrases removed in cg-power, abb-india, waaree-energies, suzlon-energy and premier-energies. Related near-misses were also reworded: "a very long way to fall", "grow into even a demanding multiple", "the story … will be written/told in", "little room/margin for error", "best thought of as", and "arms dealer of the electrification age", including in the ABB h1.
- "honest" is now ≤1 in every file (cg-power 1, abb-india 0, suzlon 1, waaree 0, others ≤1).
- HBL now has 8 `class="plain"` boxes; one "In plain terms" box was added inside §04.
- `main{min-width:0;}` is in the first `<style>` of all 13 files.
- Self-checks passed:
  - Bar rows are 13–20 per file.
  - Plain boxes are ≥8 per file.
  - The id set equals `git show HEAD:primers/<file>` for all 13.
  - `.ss-link` count is unchanged (0 → 0).
  - Open/close balance of div, section, table, svg, ul, ol, li and p is unchanged vs HEAD.
  - No $/USD in any stat strip.

## Final primer-audit (`node subsectors/_template/primer-audit.mjs "Capital Goods || Other Electrical Equipment"`, exit 0)

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| cg-power.html | 81 | 7247 | 15 | 12 | 12 | 0 | 2026-06-30 | ✅ | — |
| abb-india.html | 79 | 6655 | 18 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| waaree-energies.html | 67 | 5501 | 16 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| suzlon-energy.html | 72 | 6267 | 19 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| premier-energies.html | 70 | 5906 | 13 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| emmvee-photovoltaic.html | 67 | 5545 | 18 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| hbl-engineering.html | 67 | 5454 | 18 | 8 | 12 | 0 | 2026-06-30 | ✅ | — |
| inox-wind.html | 68 | 6135 | 16 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| fujiyama-power-systems.html | 73 | 6682 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| inox-green-energy.html | 73 | 6721 | 18 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| vikram-solar.html | 74 | 6915 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| saatvik-green-energy.html | 74 | 6803 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| websol-energy.html | 74 | 7043 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks. (The "Refreshed" column is read from the data catalog. Per scope, data/*.json was not edited; the in-page refresh bar reads 13 Oct 2026.)

## Total
**141 logged fixes**, counted as table rows above:
- cg-power 12
- abb-india 11
- waaree 13
- suzlon 11
- premier 10
- emmvee 11
- hbl 12
- inox-wind 10
- fujiyama 12
- inox-green 10
- vikram 10
- saatvik 10
- websol 9

On top of these, the 13 per-file standard edits listed at the top (CSS rule, refresh date, What's-new lead, stat-strip m-cap, disclaimer, sources) were applied to every file.
