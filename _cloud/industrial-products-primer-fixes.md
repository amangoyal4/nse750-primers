# Industrial Products — Phase-3 primer fixes (13 Oct 2026)

Scope: the 15 member primers of "Capital Goods || Industrial Products". All edits are targeted text/number changes inside existing sections. No section, anchor, stat-strip layout, back button, PDF button/print CSS or `.ss-link` banner was changed, and no bar rows were added or removed.

Sources:
- **C1** = `_cloud/industrial-products-companies-1.md`
- **C2** = `_cloud/industrial-products-companies-2.md`
- **C3** = `_cloud/industrial-products-companies-3.md`
- **APX** = COMPANY-KPI APPENDIX in `_cloud/industrial-products-industry.md`

Market data (m-cap, P/E, P/B) is screener, as of 13 Oct 2026.

## Common changes (all 15 primers)

| What was wrong | What it says now | Source |
|---|---|---|
| Refresh bar showed Jul–Sep 2026 dates and "source: FY26 results" | `rb-when` = **13 Oct 2026** · "source: FY26 results + Q1 FY27 results (quarter ended Jun 2026); market data as of 13 Oct 2026" | brief §4.1 |
| `main{min-width:0;}` missing (phone overflow) | Added at the end of the first `<style>` block | brief §4.2 |
| What's-new box had no Q1 FY27 | A leading "Q1 FY27 (Jun-26 quarter)" entry: revenue, EBITDA, PAT, order book, major events, 13-Oct market data, Q2 date or "not yet out". The old FY26 text is kept after "Earlier:" | C1–C3, APX (no member had reported Q2 by 13 Oct) |
| Stale cover-strip m-cap ("mid-2026", "Jul '26" and similar) | ₹ figure, labelled "Market cap (13 Oct 2026)". Skipper's strip has no m-cap cell, so it is unchanged there. No USD in any strip | APX |

## honeywell-automation-india.html — 12 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip m-cap ~₹33,600 Cr (mid-2026) | ₹28,745 Cr (13 Oct 2026) | C1 §HAIL-2 |
| Price ~₹38,000 (dek, §00, §08 card, §08 lead) | ~₹32,500 (₹32,540), "down ~10% over a year" | C1 |
| P/E ~63× (§00, §08 card, bear list, §11) | ~51× (51.4×) | C1 |
| P/B ~7.5× | ~6.4× | C1 |
| "subsidiary of Honeywell International"; no mention of the split | Subsidiary of Honeywell; since the split completed on 29 Jun 2026, of the continuing automation company, Honeywell Technologies. Added a 2026 timeline entry (Aerospace spun off after the earlier Solstice spin-off) and an "After the split" ownership bullet with the watch items (royalty/related-party terms, capital allocation) | C1 §HAIL-1, APX note 6 |
| Q1 FY27 missing | What's new: revenue ₹1,204 Cr (+1.8%), EBITDA ~₹173 Cr (14.3% vs 12.0%), PAT ₹151 Cr (+21%); Q2 due 27 Oct 2026 | C1 §HAIL-3 |
| Ownership had no latest split | 75.00% at Sep-26; FII 4.00%, DII 11.49%, public 9.51% | C1 §HAIL-4 |
| FY26 exceptional item missing | ₹12.3 Cr net Labour-Code gratuity charge in Q4 FY26 added to the FY26 timeline entry | C1 §HAIL-5 |
| Banned: "Think of HAIL as" | "In plain terms, HAIL is" | hygiene |
| Banned: "priced for perfection" (§08 h3, §09 text, bear list "priced for a re-acceleration") | "Why bears say the price already assumes too much"; bears' "too expensive" case; "assumes a re-acceleration" | hygiene |
| Banned: "The story … will be written in three numbers"; "a ~63× multiple can be grown into"; "a long way to fall" | "Three numbers will decide the next few years"; "earnings can catch up with a ~51× multiple; … can de-rate sharply" | hygiene |
| "honest" ×4 | ×1. Kept "Reading the accounts honestly"; the others became "The counterpoint", "one clear caveat" and "addressed directly" | hygiene |

## syrma-sgs-technology.html — 11 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip m-cap ~₹27,600 Cr (Jul '26); P/E ~85× (dek, §00, §10 card, §10 text, ptag) | ₹32,665 Cr (13 Oct 2026); ~88×; P/B ~11.4×; "roughly doubled in a year" | C1 §Syrma-1 |
| Strip order book ~₹6,600 Cr (Mar '26) | ₹6,770 Cr (Jun '26) | C1 §Syrma-2/3 |
| Mar-26 order book ~₹6,600 Cr (timeline, source note, earlier what's-new) | ~₹6,400 Cr at Mar-26 (CFO, Q1 FY27 call) | C1 §Syrma-3 |
| Other current order-book mentions (§00, chart legend, §10 card, bull list) | ₹6,770 Cr (Jun-26) | C1 |
| Guidance "30–35% growth" (§00, legend, table, bull list) | "35%+" revenue growth; 10.5–11% operating EBITDA margin in what's new | C1 §Syrma-6 |
| DII "low-but-rising single-digit share" | ~15.9% at Jun-26 (16.6% at Mar-26); promoters 42.28%, FIIs 7.51% | C1 §Syrma-4 |
| Net cash ~₹467 Cr shown as current (§03, §10 card) | ₹467 Cr at Mar-26, down to ~₹122 Cr at Jun-26 as WC debt rose to ₹619 Cr; the card's claim was adjusted | C1 §Syrma-5 |
| Q1 FY27 missing | Revenue ₹1,589 Cr (+67%), op. EBITDA ₹162 Cr (10.2%), PAT ₹106 Cr (+112%), exports 24% | C1 §Syrma-2 |
| Missing items | Kaga 60:40 JV, PCB power-on Jan–Mar 2027 and commercial output Apr 2027, Jodhpur MedTech (22 Sep 2026) in what's new; top-10 customers 51% and utilisation 65–70% in §03 | C1 §Syrma-7 |
| Banned: "Think of Syrma as" | "Syrma is, in effect, a rent-a-factory" | hygiene |
| Banned/near: "priced-for-perfection", "priced for perfection across the board", "Priced for perfection — … leaves no room for a stumble" | "valued as if nothing can go wrong"; "valued richly across the board"; "Rich valuation — … any stumble gets punished" | hygiene |
| Banned: "leaving zero room for a growth wobble"; "Both can be right…" | "would hit the multiple hard"; "Each view has its moment in the cycle" | hygiene |
| Banned: "story … will be written in three numbers"; "grow into the multiple"; "a very long way to fall" | "Three numbers, each quarter, will decide…"; "profits can catch up with the multiple"; "could de-rate sharply" | hygiene |

## kaynes-technology.html — 13 content fixes

| What was wrong | What it says now | Source |
|---|---|---|
| Strip/§00/§10/note m-cap ~₹32,000 Cr, P/E ~88× | ₹22,097 Cr (13 Oct 2026), ~64× (63.6×), P/B ~4.6×, stock −52% over one year (52-week high ₹7,140) | C1 §Kaynes-1 |
| FY26 revenue ~₹3,602 Cr (6 places incl. revenue bar) | ₹3,626 Cr | C1 §Kaynes-2 |
| FY24 EBITDA margin bar ~14.7% | ~14.1% (bar width 92→89%) | C1 §Kaynes-3 |
| Q1 FY27 missing | Revenue ₹946 Cr (+40%), EBITDA ₹148 Cr (15.6%), PAT ₹56 Cr (−24%), gross margin 34.4% vs 41.3%, order book ₹8,904 Cr | C1 §Kaynes-4 |
| Strip/§00/§10 card order book ₹8,366 Cr presented as current | ₹8,904 Cr (Jun '26); Mar-26 ₹8,366 Cr kept as history | C1 |
| OSAT guide "~₹1,000 Cr FY27" (§07 card, §10, §11 close) | ₹450–500 Cr combined OSAT + PCB in FY27, from Q3 FY27, after timing slippage | C1 §Kaynes-5 |
| "Ramesh Kunhikannan … is Managing Director"; "Savitha Ramesh … Chairman and Executive Director" | Kunhikannan Executive Vice Chairman; Dr. Muthukumar Narayanaswamy MD; Jairam P. Sampath WTD & CFO; Savitha Ramesh Chairperson | C1 §Kaynes-6, APX note 7 |
| "~53% personally, promoter group a little higher" | Promoter group as a whole 53.46% (Jun-26) | C1 §Kaynes-7 |
| MF ~18% / FII ~11% / retail ~10%; "Institutions have piled in" | "Institutions have been selling": DIIs ~11.8%, FIIs ~5.8%, public ~28.9% (Jun-26) | C1 §Kaynes-7 |
| Dec-2025 disclosure controversy missing | New bullet, worded as "reportedly": Kotak IE note of 3 Dec 2025 (related-party omissions, goodwill/intangibles, ~₹520 Cr contingent liabilities); company called them inadvertent, rectified them and denied an auditor change; referred to on the Q1 call | C1 §Kaynes-8 (snippet-sourced) |
| NWC "~110–120 days from the high-80s"; "free cash flow lags profit" | NWC ~163 days (Jun-26, from 122); screener CCC 193 days; smart-meter receivables ₹1,311 Cr; Q1 metering collections ₹88 Cr vs ₹240 Cr sales; FY26 CFO −₹600 Cr, FCF ~−₹1,841 Cr (§09 and bear list) | C1 §Kaynes-9, APX note 7 |
| Net D/E ~0.1 with no trend | Kept ~0.1 (Jun-26); added gross borrowings ~₹875 Cr vs cash ~₹799 Cr | C1 §Kaynes-11 |
| "share price is priced as though success is close to certain" (adjusted after the halving) | "still assumes a good part of that success" | consistency |

## jyoti-cnc-automation.html — 9 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip m-cap ~₹18,000 Cr; P/E ~45× (§09 card, ptag, text, risks, bear list, close) | ₹23,227 Cr (13 Oct 2026); ~72× trailing consolidated (screener), with the basis stated (~69× on FY26 consolidated PAT ₹336 Cr); P/B ~11.6× | C1 §Jyoti-1 |
| A&D "~41%" of the book (what's new, §00, chart bar, legend, bull list) | ~38% | C1 §Jyoti-3 |
| Net debt "~₹523 Cr by Sep 2025" (§01, §03, §10) | ~₹716 Cr at Mar-26 (borrowings ₹853 Cr vs cash ₹137 Cr) | C1 §Jyoti-4 |
| Q1 FY27 missing | Consol. revenue ₹509 Cr (+24%), adj. EBITDA ₹119 Cr (23.4%), PAT ₹57 Cr (−20%), standalone PAT ₹88 Cr (+21%), Huron rev-rec deferral ~₹35 Cr, order book ₹4,848 Cr, intake ₹601 Cr, utilisation 86%, finance cost ₹24 Cr | C1 §Jyoti-2 |
| Capacity chart "India + Huron combined" | India capacity: 6,000 installed, +10,000 due Sep 2026, foundry Oct 2026, capex ~₹450 Cr | C1 §Jyoti-5 |
| Ownership: only ~62.5% | 62.55% (Sep-26); FII 5.26% (from 9.91%), DII 12.86%, public 19.33% | C1 §Jyoti-6 |
| Cash conversion missing | FY26 CFO ~₹54 Cr on ~₹527 Cr EBITDA; inventory days 453; CCC 359; ~₹624 Cr other current financial assets beside ~₹599 Cr receivables | C1 §Jyoti-7 |
| §11 close "line … comes alive around Sep 2026" | "due around Sep 2026, ramps up … backlog that reached ₹4,848 Cr at Jun-26" | C1 |
| Near-banned "priced for the ramp to work" | "valued on the assumption that the ramp works" | hygiene |

## tega-industries.html — 12 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip "~₹1,774 Cr Revenue FY26 (standalone)" | ₹1,692 Cr Revenue FY26 (consol., pre-Molycop); ₹1,774 Cr labelled as total income where kept (charts) | C3 §Tega-1 |
| "Standalone revenue … (+5%)" (§00, timeline, what's new, legend) | Consolidated revenue from operations ₹1,692 Cr (+3%) | C3 §Tega-1 |
| "PAT ~₹227 Cr (+13%)" shown as reported | Adjusted PAT ₹227 Cr; reported PAT ₹143 Cr (−29%) after ~₹84 Cr exceptional items (§00, timeline, chart label/legend) | C3 §Tega-1 |
| Strip label "Operating margin" | "Adj. operating margin (FY26)" (value ~22% unchanged) | C3 (adjusted basis) |
| Promoter ~74.8% / float ~25% | 67.51% (Sep-26), after the Dec-25 ₹1,713 Cr preferential; float ~32.5%; in-principle approval on 6 Oct 2026 for 4.78 lakh shares at ₹1,994 | C3 §Tega-2/7 |
| Molycop EV ~US$1.48 bn (§00, timeline, §08) | ~US$1.45 bn (definitive agreement, 29 Nov 2025; the term sheet said 1.48), completed 1 Jun 2026 | C3 §Tega-3, APX |
| Strip/§10 card m-cap ~₹14,150 Cr | ₹14,947 Cr (13 Oct 2026); P/E not meaningful (TTM loss); ~66× adj. / ~105× reported FY26 PAT (own calc.) | C3 §Tega-4 |
| Q1 FY27 missing | Group revenue ₹1,723 Cr, adj. EBITDA ₹264 Cr (~15%), reported loss ₹108 Cr after ₹191 Cr one-offs; ex-Molycop revenue +21%, margin 22.1%; order book ₹1,231 Cr | C3 §Tega-5, APX note 3 |
| Post-close balance-sheet facts missing; "4–4.5×" presented as management target | Leverage-chart sub-title and card now say "approx. estimates; not company-disclosed". Legend adds group debt ~₹11,200 Cr incl. ~₹2,600 Cr RPS, Molycop net debt US$672.5 m (30 Jun 2026), goodwill ~₹4,996 Cr, synergy US$20 m, ~15% margin guide | C3 §Tega-6 |
| Chile plant timing missing | Soft commissioning ~Jan 2027, commercial ~Mar 2027 (plant table) | C3 §Tega-7 |
| "standalone" used for pre-Molycop figures (§10 lead, chart titles, note) | "pre-Molycop" | C3 §Tega-1 |
| Revenue chart legend "+5%" | "revenue from operations rose ~3%"; c-sub notes the FY26 bar is total income | C3 |

## elecon-engineering.html — 13 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip/§10 m-cap ~₹11,400 Cr; P/E ~33× with no basis | ₹9,866 Cr (13 Oct 2026); ~33× (screener 32.6×), ~42× on reported TTM EPS | C3 §Elecon-1 |
| Overseas "~29% of revenue" (§00, §07 lead, table, §10 table) | ~22% of FY26 (₹512 Cr); ~29% in Q1 FY27 | C3 §Elecon-2 |
| Margin hierarchy: MHE "thinner margins", gears "higher and steadier" (§00, plain box, node, chart legend, §06 bullet, §05 lead, profit-share chart, §05 MHE para, plain box) | MHE reported segment EBIT 28.4%/27.6% (FY25/26) vs gears 24.4%/18.8%; Q1 FY27 25.6% vs 17.9%. Profit-share bars now ~63% gears / ~37% MHE (own calc. from segment margins and revenue; was "majority/minority" 82/18). Gears are still the steadier, aftermarket-backed stream; MHE is described as lumpy/volatile rather than thinner | C3 §Elecon-3 |
| ROCE "~30%" (§03, §10 table) | 31% FY24, 28% FY25, 21% FY26 | C3 §Elecon-4 |
| "~50% exports by FY30" (§00, timeline, §07, tables, §10, bull list, §11) | ~50% in "three to four years"; separate FY30 target ₹5,000 Cr revenue (gears 70–75%, MHE 25–30%) | C3 §Elecon-5 |
| MHE revenue ~₹662 Cr | ~₹667 Cr (incl. ₹25 Cr arbitration income) | C3 §Elecon-6 |
| Q1 FY27 numbers missing | Revenue ₹521 Cr (+11.9% adj.), EBITDA ₹109 Cr (21.0%), PAT ₹70 Cr, intake ₹755 Cr, order book ₹1,518 Cr, GM −700 bp (what's new; §00; §10 table) | C3 §Elecon-7 |
| Missing events | 50% US tariff, Mexico entity, ~₹400 Cr capex FY26–28, ₹80 Cr EIMCO reclassification gain (Q1 FY26 base), Q2 board meeting 14 Oct 2026 | C3 §Elecon-8 |
| Promoter "~59% (approx.)"; FII decline missing | 59.28%; FIIs ~9.8% → ~6.9% | C3 §Elecon-9 |
| "honest" in "Two honest reasons" (count was within limit) | "Two reasons" | hygiene (house tone) |
| Source-note line on FY30 export target | Notes the Q4-call framing (3–4 years) and the FY30 ₹5,000 Cr target | C3 |

## inox-india.html — 12 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip m-cap ~₹18,200 Cr; P/E ~70× (§00, §09, §10 card/text, bear list, close) | ₹18,904 Cr (13 Oct 2026); ~73.5×; P/B ~16.9× | C2 §INOX-1 |
| Strip order book ~₹1,514 Cr (Mar 2026); 63% exports presented as current | ₹1,686 Cr (Jun 2026), 68% exports; Mar-26 ₹1,514 Cr/63% kept as FY26-exit history (§00, §05 lead, §05 cards, peer table, bull list, §11 lead) | C2 §INOX-3 |
| Q1 FY27 missing | Total income ₹382 Cr (+8.3%), EBITDA ₹90 Cr (23.5%), PAT ₹61 Cr (flat), ₹32–35 Cr dispatches held back, record inflow ₹532 Cr | C2 §INOX-2 |
| "~₹200 Cr US aerospace order" only | US private-space customer >₹1,000 Cr of orders (Q4 FY26–Q2 FY27), ~₹400 Cr / ~24% of the Jun-26 book, delivery by end-FY28; concentration bear bullet added | C2 §INOX-4, APX note 10 |
| "adjusted EBITDA ~₹380 Cr … adjusted PAT ~₹261 Cr" (what's new, §03, chart and legend) | Company figures: EBITDA ₹388 Cr (23.8% of total income), PAT ₹258 Cr; screener OP ₹343 Cr (21.6%) stated as the basis note; PAT bar width 69→66% | C2 §INOX-5 |
| Kandla "within roughly 9–10 months" | Start by end-Dec 2026 / mid-Jan 2027 | C2 §INOX-6 |
| FY27 guidance missing | Revenue +18–20%, EBITDA margin 21–24% (what's new) | C2 §INOX-7 |
| Semicon-fab orders missing | First semiconductor-fab orders noted (what's new) | C2 §INOX-8 |
| "Debt-free, cash-generative" (§00, §03) | "Debt-free, profitable"; CFO flat at ~₹117–122 Cr for three years (34% of EBITDA), WC days 44→83 | C2 §INOX-9 |
| Promoter "about 74.9%" | 74.86% (Jun-26) | C2 §INOX-10 |
| Near-banned "priced for the growth legs to keep scaling" | "valued on the growth legs continuing to scale" | hygiene |
| Near-banned "where that verdict gets written"; "the future INOX is priced for" | "what settles that debate"; "the future INOX's valuation assumes" | hygiene |

## azad-engineering.html — 11 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip/§10 m-cap ~₹14,000 Cr; P/E ~95–100× (§00, §10 card/text, bear list, §10 plain) | ₹19,273 Cr (13 Oct 2026); ~139× TTM; P/B ~12.6× | C3 §Azad-1/2 |
| Net cash ~₹700 Cr vs ~₹240 Cr debt (§03, §10 card, §10 lead, legend, §11, bull list) | FY25 position labelled as such; Mar-26 net debt ~₹272 Cr (borrowings ₹457 Cr vs treasury ₹184 Cr, net D/E ~0.17×); finance cost ₹18→31 Cr; card switched to "Net debt" (red); bull bullet now "Manageable leverage" | C3 §Azad-3, APX note 4 |
| Promoter ~59% (58.9%) | 55.84% since Dec-25 (55.42% Jun-25 after sale) | C3 §Azad-4 |
| "₹6,000 Cr+ … 5–6 years of visibility" (§00, what's new, timeline, §04 card, bull list) | ~₹6,500 Cr rolling LTCPA contract book, 11–12× FY26 revenue ≈ a decade, noted as contract value, not firm backlog; strip label "Contract book, LTCPA" | C3 §Azad-5 |
| Q1 FY27 missing | Revenue ₹173 Cr (+25.9%), EBITDA ₹64 Cr (37.3%), PAT ₹35 Cr (+19.5%), PBT −5.5%, ~9% tax rate | C3 §Azad-6 |
| Missing events | Turbojet engine delivered to DRDO/MoD; Baker Hughes plant Apr-26; MHI 8-yr LTCPA; BHEL ₹52.7 Cr (12 Oct 2026); bill discounting (debtor days ~180→~90): new 2026 timeline entry and what's new | C3 §Azad-7 |
| Negative cash flow not mentioned | FY26 CFO −₹119 Cr, FCF ~−₹691 Cr, WC days ~304 (§03, §10 card, new bear bullet) | C3 §Azad-8, APX note 4 |
| Margin guidance missing | 32–35% EBITDA guide (what's new, §10 legend) | C3 §Azad-9 |
| Banned variant "has something real to grow into" | "has substance behind it" | hygiene |
| Near-banned "priced for relentless growth / long-duration compounding / all of it to keep going"; "is priced not as" | "valued for/on …" | hygiene |

## lloyds-engineering-works.html — 12 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Four-entity merger missing | 29 Dec 2025 timeline entry + §03 bullet: LICL (24.2% associate), Metalfab and Techno into LEWL; swap ratios 1,798:1,500 and 94:5; shares 147.42 Cr → 185.52 Cr (≈₹17,235 Cr at the current price); NOCs/CCI described as "reported in the press" | C3 §Lloyds-1, APX |
| SISCOL acquisition missing | 52.16% for ~₹635 Cr (group 88.12%, ~₹1,073 Cr), ₹1,197 Cr book, 100k MTPA (timeline + what's new) | C3 §Lloyds-2 |
| Defence JVs: only FlyFocus/Cemi | + Fincantieri JV (initial orders >₹127 Cr), Kliver Polska, Virtualabs (§06, timeline) | C3 §Lloyds-3 |
| Strip order book ~₹2,643 Cr (Apr 2026); perimeter unexplained | ₹2,826 Cr (Jun 2026, own perimeter: LEWL+Techno ₹2,630 Cr + Metalfab ₹196 Cr); combined platform ₹8,857 Cr (+LICL ₹4,830 Cr, SISCOL ₹1,197 Cr) noted (§00, §01 table, bull list, what's new) | C3 §Lloyds-4, APX note 1 |
| Related-party concentration missing | ≥₹843 Cr (~32%) of LEWL's own book from Lloyds Metals & Energy / Lloyds Enterprises; LICL centred on Gadchiroli (§03 bullet, new bear bullet) | C3 §Lloyds-5, APX note 10 |
| Strip m-cap ~₹12,970 Cr; P/E ~68× (§00, §09 chart, cards, text, bear list, close) | ₹14,433 Cr (13 Oct 2026); ~64.5× | C3 §Lloyds-6 |
| Promoter ~42% (Jun 2026) (§03, §06, §08, bear list) | 40.00% (Aug-26); new pledge of 1.1 Cr shares to ABCL (7 Oct 2026) | C3 §Lloyds-7 |
| Q1 FY27 missing | Revenue ₹527 Cr (+143%), EBITDA ₹79 Cr (14.7%), PAT incl. associates ₹68 Cr (+127%); pro forma merged FY26 income ₹3,253 Cr, PAT ₹331 Cr; ₹10,000 Cr+ FY29/30 target | C3 §Lloyds-8 |
| Cash flow omitted; "cash is coming back faster"; "improving cash collection" | FY26 CFO −₹253 Cr, WC days 101→188; debtor-day card now says "reportedly improved … but"; §08 says cash came from equity; close says CFO has not kept up | C3 §Lloyds-9 |
| Bull "near debt-free" | "net cash of ~₹365 Cr" | APX |
| Peer P/E chart: Praj ~35×, GMM/Anup ~40× stale | Praj ~105×, GMM/Anup ~35–47× (13 Oct 2026); widths rescaled; c-sub dates the values and labels Thermax/ISGEC as earlier estimates; legend says "near the top" and explains Praj's trough-earnings multiple | APX |
| Banned variant "a ~68× multiple can be grown into"; "prices in years of flawless compounding; little cushion" | "execution, not hope, can lift earnings enough to support a ~64.5× multiple"; "assumes years of strong compounding; a miss would hurt"; "would be exposed" | hygiene |

## avalon-technologies.html — 9 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip m-cap ~₹12,000 Cr; P/E ~100× (§00, §03, §05, §10 card/text, note, bear list, close) | ₹15,265 Cr (13 Oct 2026); ~114×; P/B ~21× | C1 §Avalon-1 |
| Strip order book ~₹2,196 Cr (Mar 2026) | ₹2,208 Cr (Jun 2026) | C1 §Avalon-2 |
| Q1 FY27 missing | Revenue ₹484 Cr (+49.8%), EBITDA ₹58 Cr (12.0%), PAT ₹35 Cr (+145%), NWC 117 days, guidance raised to 26–30%, ₹3,200 Cr by FY29 | C1 §Avalon-2 |
| Promoter block sale missing; "drifted down" only | 44.39% at Jun-26; 6.00% sold 30 Sep 2026 (Srinivasan + two trusts, 40.09 lakh shares) → ~38.4%; new bear bullet | C1 §Avalon-3, APX note 9 |
| SIPCOT land lease missing | 25.08 acres, 99-year lease (8 Oct 2026); new Chennai plant with commercial output from Q2 FY27 | C1 §Avalon-4 |
| "ten plants in India and two on American soil" / "Twelve plants" | 16 manufacturing units across US/India (Q1 FY27 deck), 615k+ sq ft, 65 lines; earlier "10 + 2" description kept as history; "ten Indian plants" → "Indian plants" | C1 §Avalon-5 |
| US share 60% | 62% FY26 (59% Q1 FY27); India ~38%; bar label ~62% | C1 §Avalon-6 |
| Box-build only ~54% | + 60% in Q1 FY27 (what's new, bull list) | C1 §Avalon-7 |
| Banned variant "a ~100× stock has nothing to grow into"; "priced for near-perfect execution"; "valuation priced for a much larger…"; "little cushion" | "a ~114× stock has little to support it"; "assumes near-flawless execution"; "valuation set for…"; "a stall … would hurt" | hygiene |

## krn-heat-exchanger.html — 9 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Q1 FY27 missing | Revenue ₹252 Cr (+119%), EBITDA ₹49 Cr (19.4%), PAT ₹32.9 Cr (+165%), exports +177% | C2 §KRN-1 |
| ₹350 Cr QIP missing | Gross ₹350 Cr / net ₹341.8 Cr, ₹198.6 Cr deployed by Jun-26, shares 6.216 → 6.546 Cr (new May–Jun 2026 timeline entry, what's new) | C2 §KRN-2, APX note 8 |
| Promoter "controlling majority … skin stayed high" with no figure | 65.69% (Jun/Sep-26) vs 70.79% pre-QIP | C2 §KRN-3 |
| Strip m-cap ~₹8,700 Cr (Aug 2026); ">100× P/E" (§00, §09 card, §09 text, bear list) | ₹9,038 Cr (13 Oct 2026); ~93×; P/B ~14.9× | C2 §KRN-4 |
| Utilisation "~80% by FY29" (§00, chart bar, §05 plain, source note) | ~80% by FY28 (reiterated 14 Aug 2026, ~₹2,000 Cr revenue) | C2 §KRN-5 |
| FY25 ~435; FY26 growth +38% (5 places) | FY25 ~430; growth ~40% (39.6%) | C2 §KRN-6 |
| "genuinely high-quality growth print" ignored cash | FY26 CFO −₹114 Cr; inventory ₹96 → ₹273 Cr; net debt ₹141 Cr at Mar-26 (pre-QIP) | C2 §KRN-7 |
| New lines/guidance missing | Bus AC (Sphere Refrigeration), rail oil coolers/HVAC, FY27 exports ₹200 Cr, ~₹100 Cr capex (what's new) | C2 §KRN-8 |
| Daikin >33% / top-10 ~72% undated | Dated to the Sep 2024 IPO prospectus (§00, §04 legend, card, bear list) | C2 §KRN-9 |
| Banned variants "grow into an enormous factory and an enormous multiple", "trying to grow into", "has to grow into an enormous new footprint", "pricing the ramp to near-perfection", "a very long way to unwind" | "fill an enormous factory and justify an enormous multiple"; "working towards"; "has to fill"; "assumes a near-flawless ramp"; "could unwind sharply" | hygiene |

## skipper.html — 8 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Q1 FY27 missing; strip order book ₹8,502 Cr | Revenue ₹1,310 Cr (+4.5%), EBITDA ₹140 Cr (10.7%), PAT ₹56.5 Cr (+26.5%), exports −50%, inflow ₹1,674 Cr, book ₹9,217 Cr (strip now Jun 2026), pipeline >₹35,000 Cr | C3 §Skipper-1 |
| Missing events | ₹433.5 Cr preferential at ₹470 (Capital Group funds, Bandhan, Cohesion MK, Emerge) for debt repayment; CRISIL A+/Stable; FY27 guidance (~15% revenue, ~30% PAT, ₹7,000 Cr+ inflow, ₹10,000 Cr+ book); 450k/600k MTPA roadmap; "Evergrid" subsidiary (12 Oct 2026) | C3 §Skipper-2 |
| Promoter "broadly ~70%, approx." | 61.48% (post-preferential, Jul-26), from 66.50% | C3 §Skipper-3 |
| "three fresh 765 kV PGCIL EPC awards" (what's new, §07 card); "765 kV … from PGCIL" (§04, §05) | Two 765 kV line projects from a domestic developer in Maharashtra; PGCIL attribution softened | C3 §Skipper-4 |
| "65+ countries" (5 places) | 50+ countries | C3 §Skipper-5 |
| FY26 export revenue unquantified | ~₹710 Cr (~12.8%) in the order-book chart legend | C3 §Skipper-5 |
| P/E ~29× on ~₹6,500 Cr | ~28× on ₹6,470 Cr (13 Oct 2026) | C3 §Skipper-6 |
| Working capital lacked figures | Receivables ₹701 → ₹1,485 Cr; CFO/EBITDA 48%; FCF negative two years; net debt ₹873 Cr (≈₹440 Cr pro forma) | C3 §Skipper-7, APX |
| Near-banned "priced for the ramp to continue" | "valued on the ramp continuing" | hygiene |

## praj-industries.html — 10 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| Strip/what's new/timeline/note order book ₹4,491 Cr "FY26" | Mar-26 ₹4,305 Cr; strip ₹4,589 Cr (Jun 2026); §10 card and plain updated | C2 §Praj-1 |
| Q1 FY27 missing | Revenue ₹716 Cr (+12%), EBITDA ₹30 Cr (4.2%), PAT ₹11.6 Cr, intake ₹1,000 Cr (+52% QoQ) | C2 §Praj-2 |
| Strip/§00/§10 m-cap ~₹6,478 Cr | ₹5,295 Cr (13 Oct 2026, near 52-week low); P/E ~105×; P/B ~4.0× | C2 §Praj-3 |
| "exports already ~36% of revenue" (§00, §06 ×2, plain, bull list) | ~a third of the order book (34% Mar-26, 37% Jun-26); 25% of Q1 FY27 revenue | C2 §Praj-4 |
| Founded 1985 (§03 lead, timeline) | Incorporated 1983 (company deck) | C2 §Praj-5 |
| Bio-IBA "first commercial order guided for FY27" (what's new, §07, bull list, close) | Order for the first commercial-demo Bio-IBA plant received in Q1 FY27; Gevo pact 16 Sep 2026 | C2 §Praj-6 |
| Missing items | GenX data-centre framework (≥US$50m / ~₹500 Cr), Brazil corn-ethanol order, first semicon UPW+ZLD order, domestic 1G slow until higher mandates, customer-funding delays (what's new) | C2 §Praj-7 |
| "Borrowings modest (~₹173 Cr)"; "dividend maintained"; "keep paying dividends" | No bank debt; ₹173 Cr is leases; cash and investments ~₹622 Cr; FY26 dividend ~278% of profit, paid from reserves (§03, §09 card, bull list) | C2 §Praj-8 |
| "is priced as … / not priced as" (valuation para) | "valued as" | hygiene |
| Near-banned "is priced for that pivot to work" | "is valued on that pivot working" | hygiene |

Not added: GOBARdhan CBG scheme (₹23,731 Cr). Omitted for length; it is a policy item, not a primer error.

## anup-engineering.html — 12 content fixes

| What was wrong | What it says now | Source |
|---|---|---|
| Q1 FY27 missing | Revenue ₹125 Cr (−28.5%), EBITDA ₹9.5 Cr (7.6%), PAT ₹0.6 Cr (−98%): what's new + new Q1 FY27 timeline entry | C2 §Anup-1 |
| FY27 guidance missing; "FY26 profit dip reads as a ramp blip" | 5–10% revenue growth, ~15% EBITDA, fixed-price contracts with no pass-through; the §09 plain now says the slump is not over; bear list updated | C2 §Anup-2 |
| Strip order book ~₹770 Cr; pipeline ~₹1,200 Cr (§00, §04 chart, legend, cards, bull list) | ₹985 Cr incl. LOI (6 Aug 2026; ~₹240 Cr for FY28); record Q1 intake ~₹315 Cr; pipeline ₹1,100 Cr; ₹200–250 Cr/quarter run-rate; chart widths rescaled (64→90%, 69→75%) | C2 §Anup-3 |
| Net worth ~₹2,700 Cr | ~₹691 Cr (Mar-26) | C2 §Anup-4 |
| "holding a large majority stake" | Minority: 40.92% (Jun-26), from 42.91% (Sep-23) | C2 §Anup-5 |
| Strip/§09 m-cap ~₹3,600 Cr; P/E ~33× | ₹3,027 Cr (13 Oct 2026, near 52-week low); ~35× TTM; P/B ~4.4× | C2 §Anup-6 |
| "structurally cash-generative"; net debt unstated | ~₹97 Cr net debt at Mar-26, ~₹1 Cr net cash per company (6 Aug 2026); FY26 CFO ~₹2 Cr; debtor days ~185 | C2 §Anup-7 |
| "consistently targets that 50–60% export band"; card 50–60% | Historically 50–60%; latest book 39% export / 61% domestic; Q1 revenue 40% export + 11% deemed export/SEZ; card ~39% | C2 §Anup-8 |
| Mabel Engineers never mentioned | New §03 bullet: Chennai, 100% subsidiary, ~20,000 m², U-stamp, EIL-qualified for silos | C2 §Anup-9 |
| Godrej Process Equipment "closest listed twin" | "closest Indian twin … a division of Godrej &amp; Boyce, not separately listed" | C2 §Anup-10 [K] |
| FY24 revenue bar ~560 | ~550 | C2 §Anup-11 |
| Bear valuation bullet | "~35× trailing earnings, even after Q1 profit fell 98% and FY27 guided at ~15% EBITDA" | C2 |

## gmm-pfaudler.html — 10 content fixes + hygiene

| What was wrong | What it says now | Source |
|---|---|---|
| "Vivek Bhatia as Managing Director &amp; CEO" | Tarak Patel MD; Gregory Gelhaus Group CEO (promoter family); Group CFO Alexander Poempner resigned; Ankit Nayyar Group CFO from Nov 2026 | C2 §GMM-1 |
| Q1 FY27 missing | Revenue ₹925 Cr (+16%), EBITDA ₹94 Cr (10.1%, −7%), PAT ₹22 Cr (+118%), record intake ₹1,007 Cr, backlog ₹2,289 Cr (strip now Jun 2026) | C2 §GMM-2 |
| "India EBITDA +24%" framing with no update | Standalone India EBITDA margin 11.0% vs 15.7% in Q1 (chart legend, card, what's new) | C2 §GMM-2 |
| Strip m-cap ~₹4,800 Cr; no P/E/P/B | ₹5,952 Cr (13 Oct 2026); P/E ~47×, P/B ~4.9×, EV/EBITDA ~16× (what's new, §09 plain) | C2 §GMM-3 |
| "read the latest shareholding pattern" | Promoters 25.18% (unchanged since Sep-23); FIIs 26.49% → 14.39%; DIIs 18.42% (Jun-26) | C2 §GMM-4 |
| Four-division reorg missing | CRT/PPT/HET/PST with Q1 revenues in the §02 mix legend; §09 plain notes the region split is no longer reported | C2 §GMM-5 |
| Targets missing | 15% EBITDA "minimum"; ~€7m Q2 FY27 debt repayment; annual dividend; CRISIL AA-/Stable (17 Sep 2026) | C2 §GMM-6 |
| "loss-making global arm" (§00, §09 legend) | "lower-margin" / "thinner-margin" global arm | C2 §GMM-7 |
| FY24 EBITDA ~482 | ~476 | C2 §GMM-8 |
| US reshoring tailwind missing | US pharma reshoring orders + China chemicals return (what's new) | C2 §GMM-9 |
| Glib "Reliability … is the currency of this market" | "In this market customers pay for reliability, not rupees-per-kilo" | hygiene |

Not added: unwinding of intercompany FX loans over 12–18 months. A minor treasury item, omitted for length.

## Other hygiene (glib "X is the Y of Z" lines reworded)
- Praj: "is the fingerprint of" → "is the classic pattern of"
- Anup: "is the signature of" → "is typical of"
- KRN: "is the hinge of the whole story" → "is central to the whole story"
- Tega: "is the tip of the spear" → "leads the range"

Final "honest" counts: 1 each in Honeywell, Syrma, Jyoti, INOX, Azad, Skipper, Praj, Anup and GMM; 0 in the other six.

## Content-fix count per primer
| Primer | Content fixes | Hygiene edits |
|---|---|---|
| honeywell-automation-india | 12 | 9 (think of, 3× priced for perfection, story written, grown into, long way to fall, 3× honest) |
| syrma-sgs-technology | 11 | 9 |
| kaynes-technology | 13 | 0 |
| jyoti-cnc-automation | 9 | 1 |
| tega-industries | 12 | 1 |
| elecon-engineering | 13 | 1 |
| inox-india | 12 | 3 |
| azad-engineering | 11 | 4 |
| lloyds-engineering-works | 12 | 3 |
| avalon-technologies | 9 | 4 |
| krn-heat-exchanger | 9 | 5 |
| skipper | 8 | 1 |
| praj-industries | 10 | 3 |
| anup-engineering | 12 | 1 |
| gmm-pfaudler | 10 | 1 |
| **Total** | **163** | **46** |

On top of these: every primer got the refresh-bar date, `main{min-width:0;}` and a Q1 FY27 what's-new entry.

## Left unchanged or phrased carefully (unverified in the dossier)
- **Kaynes ECMS approvals**: not checked by the dossier, so not added.
- **Kaynes Dec-2025 controversy**: the details come from search snippets only (Business Standard / FilingReader). They are added but worded as "reportedly", with the company response.
- **Honeywell Solstice spin-off date** (Oct 2025, from memory): written only as "the earlier Solstice Advanced Materials spin-off", with no date. Not verified: any effect of the split on HAIL's royalty or engineering-export contracts. The text says no change had been announced.
- **HAIL order book and HAIL ~33% export share**: not disclosed or not verified, so left as the primer had them.
- **Jyoti "~46% of recent order intake"** from A&D: not verified, left. **Jyoti Reg 31 SAST filing** (30 Sep 2026): unread, not mentioned.
- **Tega's ~77% Molycop stake**: a snippet only, not added. **The ~4–4.5× peak leverage figures**: kept, but relabelled as approximate estimates rather than company figures. The dossier's own ≈3.6–3.9× / ~5× estimate was not inserted.
- **Lloyds**: exchange NOCs and CCI approval are written as "reported in the press". The Thriveni Earthmovers ~7.14% stake (press, unverified) was not added. "Debtor days ~117 → ~67" is kept but marked "reportedly", alongside the verified negative CFO.
- **KRN Daikin >33% / top-10 ~72%**: not re-verified, so kept but dated to the Sep 2024 prospectus. The QIP issue price (₹1,060, snippet) was not added. Not added either: the PLI eligibility and Rajasthan RIPS details.
- **Anup capacity "~20,000 MT/yr"** and "₹1,200 Cr revenue potential": unverified, left as the primer had them. Kheda Phase-2A/Phase-3 status: not detailed in the dossier, not added. Godrej Process Equipment "not separately listed" is a [K] fact.
- **Avalon "two American plants"**: the deck gives 16 units in total with no US/India split, so the US-plant count is left as the primer had it.
- **INOX**: not added, though verified (minor): keg capacity (300k/yr at ~30%), the US non-compete to 2028 and the 28 Sep 2026 investor-meet cancellation.
- **Skipper**: export order-book share (~10%, ~₹900 Cr) not re-verified, left. The FY26 PAT strip (₹207 Cr vs screener ₹213 Cr) was not flagged by the dossier, left.
- **Lloyds peer chart**: the Thermax (~55×) and ISGEC (~30×) multiples are not in the dossier. They are left and labelled "earlier estimates".
- **Tega own calculations**: ~66× adjusted and ~105× reported FY26 PAT multiples, computed from verified m-cap and PAT. **Elecon own calculation**: the profit-share split of ~63/37, computed from verified segment margins and revenue.
- **Source-list entries** (footers) that cite older figures (e.g. "₹4,491 Cr Order Book" article titles, "~₹8,700 Cr" screener snapshot) were left as historical source descriptions. The exceptions are Elecon's and KRN's guidance lines, which were annotated.
- **Pre-existing markup nit, not touched** (outside the brief): `inox-india.html` (~line 495, the hydrogen note) and `praj-industries.html` (~line 419) each have one stray `</p>` inside a `div.note`/`div.plain`. These are not from this pass.

## Audit (`node subsectors/_template/primer-audit.mjs "Capital Goods || Industrial Products"`, final run)

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| honeywell-automation-india.html | 66 | 5238 | 12 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| syrma-sgs-technology.html | 67 | 5335 | 15 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| kaynes-technology.html | 75 | 6411 | 16 | 11 | 13 | 0 | 2026-06-30 | ✅ | — |
| jyoti-cnc-automation.html | 68 | 5817 | 20 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| tega-industries.html | 73 | 6576 | 17 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| elecon-engineering.html | 72 | 6526 | 13 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| inox-india.html | 72 | 6690 | 14 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| azad-engineering.html | 76 | 7088 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| lloyds-engineering-works.html | 72 | 6105 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| avalon-technologies.html | 70 | 6220 | 17 | 10 | 12 | 0 | 2026-07-27 | ✅ | — |
| krn-heat-exchanger.html | 67 | 5927 | 18 | 10 | 11 | 0 | 2026-07-27 | ✅ | — |
| skipper.html | 70 | 6048 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| praj-industries.html | 71 | 6316 | 19 | 10 | 12 | 0 | 2026-07-27 | ✅ | — |
| anup-engineering.html | 70 | 6190 | 19 | 11 | 11 | 0 | 2026-07-27 | ✅ | — |
| gmm-pfaudler.html | 70 | 6022 | 19 | 10 | 11 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks. The soft "no main{min-width:0}" note is cleared on all 15. "Report links" and "Refreshed" come from banners and data files outside this pass's scope and were ignored as instructed. Bar counts are unchanged and within 12–20.
