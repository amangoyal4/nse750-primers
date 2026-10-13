# Aerospace & Defence: Phase-3 primer fixes (13 Oct 2026)

Sub-sector key: `Capital Goods || Aerospace & Defense`. There are 12 member primers in `primers/`. Every change was a targeted string edit. Page structure, section anchors, the stat-strip layout, the back/PDF buttons, the `.ss-link` banners and print CSS were all left alone, and no provenance line was added.

**Sources of truth:**
- `_cloud/aerospace-defence-companies-1.md` (HAL, BEL, BDL, MIDHANI)
- `_cloud/aerospace-defence-companies-2.md` (Data Patterns, Astra, Apollo, Paras, Zen)
- `_cloud/aerospace-defence-companies-3.md` (MTAR, Aequs, Dynamatic)
- the COMPANY-KPI APPENDIX and its reconciliation notes in `_cloud/aerospace-defence-industry.md`

All m-cap, P/E and P/B figures are screener values **as of 13 Oct 2026**. Q2 FY27 results were not out for any member, and each What's-new box says so.

**Changes applied to every primer:**
- The refresh bar now reads `13 Oct 2026`, keeping each file's existing format. The source text now says "FY26 results + Q1 FY27".
- A Q1 FY27 lead-in was added to the What's-new box. The previous FY26 text is kept after an "Earlier (FY26)" marker.
- `main{min-width:0;}` was inserted inside the first `<style>` block.
- Banned phrases and near-variants were removed, and "honest" now appears no more than once.
- Tag balance (div / li / strong / tr) was checked after editing: every file has 0 unmatched tags.

## Summary: content fixes per primer

| Primer | Edit operations | Main corrections |
|---|---|---|
| hindustan-aeronautics | 35 | M-cap/P/E; EBITDA basis; revenue ₹33,089 Cr; cash ₹46,197 Cr; F404 count; F414 ~80% ToT, contract unsigned; NWC 301 days; FII/DII; Q1 FY27; Sindoor/ALH context; banned/honest |
| bharat-electronics | 43 | M-cap/P/E/P/B; margin 29%; standalone basis labelled; receivables 170 days, NWC 135 days, advances and cash down; DII 21%; indigenous content 78–80%; export order book $465m; QRSAM unsigned; Q1 FY27; Sindoor/Akashteer; banned/honest |
| bharat-dynamics | 21 | M-cap ₹41,158 Cr, P/E 79×; cash ₹4,709 Cr; advances ₹6,259 Cr; Q1 FY27 Akash miss; Invar; audit EoM; Sindoor; "priced for perfection", "long way to fall" ×2, "no/zero margin for error", "both can be true", "grow into" and "honest" ×2 all removed |
| mishra-dhatu-nigam | 26 | M-cap/P/E; FY24 revenue ₹1,073 Cr (was ~883); capex ~₹1,000 Cr; titanium tonnage flagged as conflicting/unverified; exports ₹85 Cr; EBITDA basis; Q1 FY27 and order book ₹2,329 Cr; "priced for the scarcity" reworded |
| data-patterns | 23 | M-cap/P/E/P/B; net margin 29% (was 40%); pipeline ₹2,654 Cr; export book ₹39 Cr; FY24 revenue ₹520 Cr (was 566); cash ₹517 Cr; QIP; DII; ST Advanced Composites; Q1 FY27 |
| astra-microwave | 28 | M-cap/P/E; order book (₹2,141 Cr Mar-26 → ~₹4,300 Cr Aug-26, was ₹2,610 Cr); HAL Uttam order; Rafael JV; demerger is in-principle only; net debt ₹35 Cr (was "net cash"); OB mix ~66–71% defence; FY27 guidance; Q1 FY27; "grow into" reworded |
| apollo-micro-systems | 21 | PAT ₹107 Cr (was ₹113 Cr); Premier Explosives deal; ~₹3,322 Cr preferential issue (~22% dilution); promoter 49.98%, 35.6% pledged; net debt ₹387 Cr; CFO −₹130 Cr; order book ₹1,704 Cr; Q1 FY27; P/E 125× |
| paras-defence | 23 | Order book ₹986 Cr (was ₹1,432 Cr, Apollo's figure); OB mix 55/35/10; M-cap/P/E; promoter family name (Shah, not "Munjal family") and 53.20%; QIP; stock split; Q1 FY27; Krasny Paras, OSAT MoU and DRDO order; "grow into", "both are true" and "honest" reworded |
| zen-technologies | 29 | Cash ₹1,308 Cr / net cash ~₹1,290 Cr (was ₹966 Cr); M-cap/P/E 82× (was 112×); export swing 37% → 11% (was "purely timing"); ARI 100% and TISA 76%; Sindoor anti-drone orders; Q1 FY27 and order book ₹1,239 Cr; FII/DII; FY24 revenue ₹440 Cr; **bars raised from 6 to 11** |
| mtar-technologies | 39 | **Revenue mix** (fuel cells ~70%, products ~15%, A&D ~12%, nuclear ~2.7%; the old split was the order-book mix); Bloom ~60–70% (est.); order book ₹5,143 Cr; Q1 FY27; M-cap/P/E/P/B added; stock recovery; promoter 29.35%; "leveraged option" reworded |
| aequs | 41 | M-cap ₹17,780 Cr; order book US$1,004m ≈ ₹9,590 Cr (was ₹7,400 Cr at ₹83/$); EBITDA basis (₹65 Cr other income); standalone ₹50 Cr profit is not the aerospace core; pledge-release filing; IPO exact figures; Safran LTAs, Ajna, guidance, top-5 = 63%; Q1 FY27 |
| dynamatic-technologies | 43 | Leverage 2.5× / 2.4× (was "stuck at 3.4×"); net debt ₹461 Cr, ND/E 0.6×; FY26 PAT fall caused by ₹27.6 Cr exceptionals (normalised +39%); A320 ">9,000 shipsets" (was "every A320", 13,000); A330 single source; Sukhoi/Deesa removed; Spirit → Prestwick; AMCA; Falcon 6X; no Rafale fuselage; Q1 constant-currency caveat; hydraulics ~70%; M-cap/P/E; "something to grow into" and "priced for the inflection" reworded |

"Edit operations" counts string replacements. Several of them can serve a single dossier issue.

---

## hindustan-aeronautics.html

| What was wrong | What it says now | Source |
|---|---|---|
| Stat strip: revenue ₹33,050 Cr (provisional) | ₹33,089 Cr (audited), in the strip, §01 flow and timeline | iXBRL 157527 via companies-1 §6.1 #3 |
| Stat strip: "~₹2.93 L Cr Market cap (Jun '26)" | ~₹3.26 L Cr (13 Oct '26) | screener 13 Oct 2026 |
| §10: P/E ~32× (Jun '26) | ~35× (as of 13 Oct 2026; P/B ~7.9×); the BEL comparison is now ~45×; multiple text, bear case and lead updated | screener |
| What's new: "EBITDA ~₹13,470 Cr (~30% margin)" | Operating EBITDA ₹9,788 Cr (29.6%); ~₹13,470 Cr only if other income is included | appendix note 2 |
| Cash "~₹42,400 Cr" / "₹42,000-plus crore" in dek, snapshot, §02 flow note, §09 mini-stat and bull case | ~₹46,200 Cr (₹3,768 Cr cash + ₹42,429 Cr FDs); prior year ~₹38,200 Cr (was 33,600) | iXBRL; appendix note 2 |
| Borrowings "~₹11 Cr" | ~₹66 Cr (lease-type, no bank debt); net worth ~₹41,000 Cr | screener / iXBRL |
| "only ~6 of 99 engines… induction slipped to Aug–Sep 2026" | 10 F404s delivered by Aug 2026, ~12 more expected Oct–Dec 2026; 113-engine follow-on described as "reported" | Indian Masterminds 29 Sep 2026; follow-on is search-level |
| F414 "100% transfer-of-technology agreement concluded" | Technical understanding with ~80% ToT (Apr 2026); commercial contract unsigned (table, §06 text, sources) | NewsArena 13 Apr 2026 |
| §01: "Book-to-bill = order book ÷ revenue ≈ 7.7×" | Renamed "Order-book cover"; book-to-bill given as ~2.9× | companies-1 §6.1 #13 |
| "Negative working capital" framing in §02 and §09 | Advance-funded model; NWC 37 → 301 days; CFO ₹10,906 Cr vs ₹13,643 Cr | screener |
| FII ~10% / DII ~10% | FII ~9.3%, DII ~11.9% (Jun 2026) | screener |
| Missing Q1 FY27 and FY27 guidance | Revenue ₹5,515 Cr, EBITDA ₹1,527 Cr (27.7%), PAT ₹1,590 Cr; guidance +10–12% revenue at 30–31% margin, ₹14,000 Cr capex | ICICI Direct 13 Aug 2026 |
| No Sindoor / ALH grounding | Context line: no direct HAL order from Sindoor; ALH grounding after 5 Jan 2025 ("reportedly" cleared after ~4 months) | companies-1 §1.6 ([K]/search; phrased carefully) |
| "Think of HAL as…"; "honest" ×2 | "In practice, HAL is…"; "The caveat…"; "The wrinkle…" | banned list |
| "The story over the next few years will be written in" | "Three numbers will decide the next few years" | banned list |

## bharat-electronics.html

| What was wrong | What it says now | Source |
|---|---|---|
| Strip: m-cap ~₹3.0 L Cr (Jun '26); revenue/PAT basis not stated | ~₹2.78 L Cr (13 Oct '26); revenue and PAT labelled "FY26 standalone" | screener; iXBRL 158846/7 |
| P/E ~50× (dek, §10 mini-stat, multiple text, bear case, close) | ~45× (as of 13 Oct 2026; P/B ~11.6×); ₹380, near 52-week low; ~₹6,150 Cr trailing profit | screener |
| EBITDA margin ~27% (×10 places) | ~29% consolidated FY26; Q1 FY27 25%; FY27 guide ~28% | screener; PL Capital |
| §01 "Book-to-bill ≈ 2.7×" | Order-book cover; book-to-bill ~1.09× | dossier §6.2 #8 |
| "Negative working capital", unquantified net cash | Advances fell from ₹15.9k Cr to ₹12.6k Cr; receivables ~170 days; NWC 18 → 135 days; CFO ₹564 Cr / ₹1,541 Cr; cash ₹11.1k Cr → ₹8.6k Cr; net cash ~₹8,500 Cr; §07 h2 is now "advance funding" (anchor unchanged) | screener; iXBRL; appendix note 3 |
| Indigenous content ~70%+ | ~78–80% | PL Jul 2026 |
| Export order book "toward ~$500 million" | ~$465 million (Jul 2026) | PL |
| Sources: DII ~5.7% | FII 18.02%, DII 21.02%, public 9.82%, Govt 51.14% (Jun 2026) | screener |
| ROE/ROCE ~26% / ~38% | ~27% / ~36% | screener |
| QRSAM "should finalise late FY26/early FY27" | Slipped from FY26; unsigned as of Oct 2026; signing targeted for H2 CY2026 | appendix note 3 |
| Missing Q1 FY27, monthly orders, guidance | Revenue ₹5,547 Cr, EBITDA 25.0%, PAT ₹1,055 Cr, inflow ~₹3,750 Cr (−51%), order book ₹72,258 Cr; ₹648 Cr (17 Sep); FY27 YTD ≈ ₹6,500 Cr vs >₹55,000 Cr guidance | screener; PL; NSE PDF |
| No Sindoor | Akashteer/Akash spotlight (7–10 May 2025); DAC AoN for QRSAM on 3 Jul 2025 | companies-1 §2.6 |
| "Think of BEL"; "honest" ×2; "The story … will be written in" | Rephrased; "honest" now 0 | banned list |

## bharat-dynamics.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap ~₹50,900 Cr (Jul '26); P/E ~120×; P/B ~11.9 | ₹41,160 Cr (13 Oct '26); P/E ~79×; P/B ~9.7×; HAL ~35× / BEL ~45× comparison (unverified Solar Industries 85× comparison removed) | screener |
| Cash "~₹4,000 Cr+" / ₹4,190 Cr | ₹4,709 Cr including FDs; advances ₹6,259 Cr (~24% of OB); inventory ₹4,626 Cr | iXBRL 162829 |
| Missing Q1 FY27 | Revenue ₹572 Cr, EBITDA ₹83 Cr (14.5%), PAT ₹119 Cr; ~₹1,300 Cr of Akash revenue did not materialise; 2.2% of OB converted | BDL results PDF; MOSL |
| Missing Invar, audit emphasis of matter, Sindoor | Invar ₹2,096 Cr "reported signed" 13 Nov 2025; ~₹83 Cr non-moving inventory flagged; Akash credited in Sindoor; QRSAM AoN | dossier §6.3 (Invar is search-level, so phrased "reported") |
| "priced for perfection"; "Think of BDL"; "no margin for error"; "zero margin for error"; "a very long way to fall" ×2; "Both can be true"; "grow into itself"; "honest" ×2; "The story … will be written in" | All rephrased; "honest" now 0 | banned list |
| Sources | Added the Q1 PDF and the MOSL/ICICI notes; 13 Oct market data | dossier |

## mishra-dhatu-nigam.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap ~₹7,800 Cr; P/E ~55–58× | ₹8,185 Cr; ~61×; P/B ~5.3× (13 Oct 2026) | screener |
| Revenue chart FY24 "~883 approx." | ₹1,073 Cr (width 89%); legend notes FY24–FY25 were flat | screener |
| Capex "₹300–400 Cr" | ~₹1,000 Cr over three years, toward ~₹2,000 Cr revenue | Q4 FY26 call (filingreader, V-secondary) |
| "Titanium output doubled to ~700 t" (what's new, §02, timeline, mini-stat, chart) | Flagged as conflicting: one account says ~2×/~700 t, FPJ says +40%; marked unverified. The chart is kept, with a sub-title caveat | FPJ 1 Apr 2026; Q3 call |
| ~23% EBITDA margin without its basis | Includes ~₹39 Cr other income; ex other income 19.8%; Q1 FY27 15.5% | screener |
| Exports: only the ~₹150 Cr "potential" | FY26 exports ~₹85 Cr (~7%) | FPJ |
| Missing Q1 FY27 and guidance | Revenue ₹239.5 Cr (+40.5%), PAT ₹16.5 Cr, OP margin 15.5%, OB ₹2,329 Cr; FY27 +15% revenue, ₹1,500 Cr inflow | Indian Masterminds; filingreader |
| "honest caveat"; "priced for the scarcity" | "The caveat"; "valued for its scarcity" | banned list / dossier suggestion |

## data-patterns.html

| What was wrong | What it says now | Source |
|---|---|---|
| Strip: "~₹2,062 Cr Order pipeline"; m-cap ~₹23,900 Cr | ~₹2,654 Cr incl. negotiated (Jul '26); ~₹23,170 Cr (13 Oct '26) | Q1 FY27 PPT; screener |
| P/E ~95×, ~14× book | ~86×, ~13× (as of 13 Oct 2026) | screener |
| "~40% net-profit margin" | ~29% | Q1 PPT (PAT 271 / revenue 925) |
| Export book ~₹53 Cr (bar, note, mini-stat, bull case) | ~₹39 Cr (Jun 2026); FY26 exports ₹62 Cr = 6.7% (down from ₹107 Cr) | PPT; AR FY26 |
| Revenue chart FY24 ~566 | ~520 (width 56%) | screener |
| Reserves presented as if they were cash | Cash/FDs/investments ₹517 Cr (Mar 2026) | AR FY26 |
| Funding omitted the QIP | 2023 QIP, with ₹37.65 Cr unspent | AR FY26 |
| DII ~11.7% (Mar) | ~12.0% (Jun 2026); promoter 42.41% | screener |
| Missing Q1 FY27, inflow, book-to-bill, ST Advanced Composites, Sindoor link | Revenue ₹116 Cr, EBITDA 27%, PAT ₹22.1 Cr; FY26 inflow ₹1,121 Cr, book-to-bill ~1.2×; STAC SPA 25 Aug 2026; counter-drone/BrahMos-seeker lines linked to post-Sindoor EP (not yet quantified orders) | PPT; transcript; BSE |

## astra-microwave.html

| What was wrong | What it says now | Source |
|---|---|---|
| Strip: order book ~₹2,610 Cr (FY26 exit); m-cap ~₹16,300 Cr | ~₹4,300 Cr (Aug '26, after Uttam); ~₹15,920 Cr (13 Oct '26) | Q1 transcript; screener |
| ~2.2× cover; ₹2,610 Cr in snapshot, timeline, two charts, mini-stats | ₹2,141 Cr standalone (Mar 2026; 1.85×) → ~₹4,300 Cr (~3.7×); chart widths rescaled | Q1 PPT/transcript |
| Missing HAL Uttam order, AMCA radar L1, EM wall / anti-drone | ₹2,205 Cr incl. GST (~₹1,870 Cr ex-GST); L1 with BEL (contract not yet confirmed); EM-wall demo, linked to post-Sindoor counter-drone demand | Q1 transcript |
| Rafael JV absent | Astra Rafael Comsys named as the SDR JV and export channel | Q1 PPT |
| "Board approved a 1:1 demerger" | In-principle approval only (27 Feb 2026); "mirror shareholding" per management; NCLT/shareholder approvals pending; listing targeted ~Q1 FY28; the 10 Jun scheme is unverified | NSE filing; transcript |
| "Effectively net-cash" (×5) | Borrowings ₹288 Cr vs cash ₹253 Cr = net debt ~₹35 Cr (was ₹326 Cr); CFO ₹387 Cr | Q4 PPT; screener |
| "Roughly half of OB defence and public-sector" | ~66–71% defence; export ~8% | PPT |
| P/E ~90× | ~84× consolidated; P/B ~12× | screener |
| Guidance "low double digits" | FY27 ~₹1,350 Cr (±25), FY28 ~₹1,600 Cr | Q1 transcript |
| Missing Q1 FY27; no FII/DII | Revenue ₹177 Cr, EBITDA 18.7%, PAT ₹12 Cr; FII 10.48% / DII 16.52% (Sep 2026) | PPT; screener |
| "asked to grow into an extraordinary price" | "asked to earn…" | banned list |

## apollo-micro-systems.html

| What was wrong | What it says now | Source |
|---|---|---|
| PAT ₹113 Cr "roughly doubled" (what's new, snapshot, timeline, chart, bull case, lead) | ₹107 Cr (+91%) | screener; Q4 transcript |
| M-cap ~₹15,000 Cr; P/E ">100×" | ~₹15,120 Cr; ~125×; P/B ~11× (pre-dilution) | screener |
| Missing Premier Explosives deal and preferential issue | 41.33% for ~₹1,550 Cr plus open offer ~₹976 Cr; ~₹3,322 Cr preferential issue at ₹416.60 (~22% dilution); Shauryastra 34% | Q1 transcript/PPT; Kotak Neo; appendix note 6 |
| Promoter ~52–55%; pledge ~30% | 49.98% (Sep 2026); 35.6% of the promoter stake pledged | screener |
| Net debt ~₹376 Cr from ~₹206 Cr | ~₹387 Cr (₹543 Cr borrowings − ₹156 Cr cash, screener basis) from ~₹273 Cr; CFO −₹130 Cr | screener |
| Missing Q1 FY27, order book update, guidance | Revenue ₹251 Cr (+88%), EBITDA 21.5%, PAT ₹25 Cr; OB ₹1,704 Cr (8 Aug); FY27 +40–45% | Q1 transcript |
| "The honest tension" | "The tension" | honest limit |

## paras-defence.html

| What was wrong | What it says now | Source |
|---|---|---|
| Order book ~₹1,432 Cr (Apollo's figure) and "~3 years of revenue" (strip, what's new, snapshot, timeline, chart, mini-stat, bull case) | ₹986 Cr at 31 Mar 2026 (₹928 Cr Mar-25), ~2.1×; chart width 8%; correction noted in What's new | AR FY26; appendix note 5 |
| Optics "~60%" of order book | 55% optics / 35% defence engineering / 10% anti-drone | AR FY26 |
| M-cap ~₹10,500 Cr; P/E ~120× | ~₹10,400 Cr; ~112×; P/B ~14× | screener |
| "Munjal family … ~53% (approx.)" | Shah family (Sharad Virji Shah, Munjal Sharad Shah); 53.20% (Jun 2026), down from ~58.9% before the Oct 2024 ₹135 Cr QIP | screener; AR |
| Missing stock split, Q1 FY27, events | 1:2 split to ₹5 FV; Q1 revenue ₹127.9 Cr, EBITDA 24.9%, PAT ₹21.2 Cr; Krasny Paras stake sale; ~₹6,200 Cr OSAT MoU; DRDO ₹26.59 Cr order; FY27–28 guide +30–40%; anti-drone/Sindoor (no EP value disclosed) | Kotak Neo; AR; PPT |
| "honest scoreboard"; "grow into a valuation"; "Both are true" | "real scoreboard"; "justify a valuation"; "The two stories coexist" | banned list |

## zen-technologies.html

| What was wrong | What it says now | Source |
|---|---|---|
| "~₹966 Cr net cash" (×8) | ~₹1,290 Cr net cash (₹1,308 Cr cash and bank, Mar 2026) | Q4 transcript; appendix note 7 |
| M-cap ₹16,356 Cr; P/E ~112× | ~₹14,920 Cr; ~82× consolidated (~108× standalone); P/B ~7.9× | screener |
| FY26 fall "purely" order timing | Mainly exports falling from 37% to 11% of revenue, plus late domestic conversion | AR FY26 |
| Acquisitions: ARI ~76%; TISA missing | ARI 100%; TISA Aerospace 76% row added | AR FY26 |
| FY24 revenue ~430 "approx." | ₹440 Cr (screener) | screener |
| Missing Q1 FY27, Sindoor, QIP, FII/DII, book-to-bill | Revenue ₹141.6 Cr, op. EBITDA 27.3%, PAT ₹34.5 Cr, inflow ₹44.6 Cr, OB ₹1,239 Cr, ₹177.5 Cr July order; "combat-proven during Operation Sindoor", ~₹800 Cr anti-drone orders (CMD); ₹1,000 Cr FY25 QIP; FII 6.47% / DII 10.42%; FY26 inflow ~₹1,175 Cr, book-to-bill ~1.7× | PPT; transcripts; AR; screener |

**Bar rows added (6 → 11).** Existing markup was copied and placed inside the two existing charts. No section was added.

| Chart | Row added | Value | Source |
|---|---|---|---|
| Conversion gap | FY26 order inflow | ~1,175 | companies-2 §5.3 ([E] from 1,336 − 848.5 + 687.7, all [V]) |
| Conversion gap | Order book, Jun '26 | ~1,239 | Q1 FY27 PPT |
| Conversion gap | FY27-end book (management target) | ~2,500 | Q1/Q4 transcripts |
| Revenue | FY25 exports | ~363.5 | AR FY26 |
| Revenue | FY26 exports | ~78.7 | AR FY26 |

The conversion-gap chart widths were rescaled to be proportional (688 = 17%, 1,336 = 33%, 4,000 = 100%).

## mtar-technologies.html

| What was wrong | What it says now | Source |
|---|---|---|
| Revenue mix ~51% clean energy / ~26% nuclear / ~14% A&D / ~8.5% product (this was the order-book mix): snapshot, flow nodes, segment list, chart, §06/§07 leads | Fuel cells/hydel ~70.2%, products ~15.3%, A&D ~11.8%, nuclear ~2.7% of revenue; flow nodes also show Jun-26 book shares; chart widths rescaled | Q1 FY27 PPT segment slides; appendix note 8 |
| Bloom "~55–65%" and "larger than the clean-energy percentage suggests" | ~60–70% (estimate; not disclosed); hedge bar ~30–40% | appendix note 8 ([E]) |
| Order book ₹2,582 Cr (strip, mini-stats, bull case) | ₹5,143 Cr (30 Jun 2026); +~US$86m PO amendment on 30 Jul | Q1 PPT; BT 30 Jul 2026 |
| No valuation numbers | M-cap ~₹23,770 Cr, P/E ~175×, P/B ~29×, EV/EBITDA ~140× (13 Oct 2026) | screener |
| July ~34% fall shown without the recovery | Fell ~34% from the 19 Jun high of ₹8,715; recovered to ₹7,718 by 13 Oct (~11% below the high) | screener; Arihant |
| Promoter ~30.4% | 29.35% (Jun 2026); FII ~24.8%, DII ~22.4% | screener |
| Missing Q1 FY27, NWC, capex, Kaiga | Revenue ₹360.7 Cr, EBITDA 23.6%, PAT ₹50.2 Cr, inflow ₹2,895 Cr; NWC 172 → 59 days; ~₹500 Cr capex; Kaiga 5&6 ₹504 Cr; exports 82%; new Q1 FY27 timeline entry | PPT; call |
| "leveraged option on Bloom" | "geared play on Bloom" | dossier suggestion (close to "call option") |

## aequs.html

| What was wrong | What it says now | Source |
|---|---|---|
| M-cap ~₹12,800 Cr; "roughly ten times revenue" | ~₹17,780 Cr (₹265, ~2.1× the IPO price); ~14.5× FY26 revenue; P/B ~12× | screener |
| Order book USD 889 M ≈ ₹7,400 Cr (~₹83/$), "~7×" (strip, snapshot, chart, mini-stat, table, bull case, valuation text) | US$1,004m ≈ ₹9,590 Cr (30 Jun 2026, ~₹95.5/$), ~9× aerospace revenue; noted that LTAs carry no fixed quantities. The strip stays in ₹ | Q1 PPT; dossier §2.4 |
| EBITDA ~₹155 Cr (13%) without its basis | Includes ~₹65 Cr of mostly forex other income; operational ~₹89 Cr (~7%), Q4 ~1% | FY26 PPT; screener |
| "Standalone parent ~₹50 Cr profit = aerospace core" (snapshot, §07 lead and chart, table, timeline) | Aerospace segment EBITDA ~₹281 Cr is the core; standalone profit is mostly other income (parent revenue ~₹124 Cr); chart row replaced, 3 rows kept | screener standalone; PPT |
| "No encumbrance"; "~65% at listing" | 59.09%; ~64% pre-offer; 9 Oct 2026 MPFF release-of-pledge filing on 14.99% (temporary) | BSE filing; prospectus |
| IPO "~₹920 Cr, size approx." | ₹921.8 Cr = ₹670.0 Cr fresh + ₹251.8 Cr OFS; ~104× subscribed (QIB ~123×); ~₹433 Cr debt repayment | prospectus; 5paisa |
| Missing Q1 FY27, guidance, Safran LTAs, Ajna, concentration | Revenue ₹395.5 Cr, op. EBITDA ₹14.8 Cr, PAT −₹53.2 Cr; utilisation 70/22%; +45–50% revenue, consumer breakeven Q4 FY27, PAT breakeven H1 FY28, ₹660 Cr capex; Safran LTAs (Jul and 12 Oct 2026); Ajna ₹15.75 Cr; top-5 = 63%; new Q1 FY27 timeline entry | Q1 PPT/call; BSE filings |
| "How to think about the valuation" | "How to read the valuation" | close to banned "think of" |

## dynamatic-technologies.html

| What was wrong | What it says now | Source |
|---|---|---|
| Leverage "stuck near 3.4×" (snapshot, §03, §06 text and chart, two mini-stats, valuation text, bear case, close) | Company ND/EBITDA 2.6× (FY25) → 2.5× (FY26) → 2.4× (Jun 2026); ~3.1× with leases; chart rebuilt on the company basis (FY25, FY26, Q1 FY27; 3 rows kept); "falling, but slowly" | FY26 / Q1 FY27 PPT; appendix note 10 |
| Net debt ₹530–540 Cr, D/E ~0.8× | Net debt ₹461 Cr (Mar) / ₹473 Cr (Jun); ND/E ~0.6×; borrowings ₹529 Cr (₹638 Cr incl. leases) | PPT |
| FY26 PAT −25% blamed on interest | ₹27.6 Cr of exceptional items; finance cost flat (₹56.7 → ₹58.0 Cr); normalised PAT +39% to ₹60 Cr | FY26 PPT |
| "Sole source on every A320"; "13,000+ shipsets" (dek, §04, note, bull case, table) | ">9,000 aircraft sets" of single-aisle beams; Tier-1 global single source on the A330; redesign described as an Airbus redesign with Dynamatic's design office involved | AR FY26 |
| Spirit AeroSystems as current Tier-1 | Former Spirit Airbus sites now Prestwick AeroSystems / Airbus Aerostructures | Q1 PPT; AR |
| "Sukhoi work, the Deesa facility" (×3) | Removed. Replaced with what the AR names: HAL, BEL, Thales, Boeing P-8/F-15, Dynauton UAS, AMCA bid | AR FY26 |
| Missing AMCA, Falcon 6X date, Rafale clarification | Exclusive L&T–BEL partner (Nov 2025), RFP 27 May 2026, decision ~early 2027; Falcon 6X rear fuselage 4 Dec 2025; no Rafale fuselage contract (Tata Advanced Systems) | machinist.in; The Defense News; Dynamatic release; appendix note 10 |
| Q1 FY27 lacked a forex caveat | +14.5% reported, +3.9% constant currency; ND/EBITDA 2.4× | Q1 PPT |
| Hydraulics ~80% India / ~38% global | ~70% of India's organised tractor market (current claim); 38% marked as an older claim; widths rescaled | Q1 PPT |
| M-cap ~₹7,600 Cr; P/E ~130× | ~₹9,480 Cr; ~162× screener (~135× normalised); P/B ~11× | screener |
| "the multiple has something to grow into"; "Priced for the inflection" | "earnings start to catch up with the price"; "Valued for the inflection" | banned-list variants |

---

## Left unchanged or hedged because not verified

- **HAL:** the 113-engine F404 follow-on (Nov 2025) is search-level, so it is phrased "was reported". The ALH return-to-service timing is phrased "reportedly". HAL's Q1 inflow, R&D %, export share and the manufacturing/ROH split were left as they were. Dornier/ALH ICG orders and the 12 Su-30MKI contract were not added (search-level).
- **BEL:** FY26 export revenue ($142m) and the $346m export wins were left unchanged ([K]). The 31 Jul / 10 Aug / 26 Aug order releases were not itemised (search-level); only the verified 17 Sep ₹648 Cr release is cited. The "~₹27,000 Cr base inflow ex-QRSAM" line was left as is.
- **BDL:** Invar ₹2,096 Cr is phrased "reported signed" (search-level). The ~₹1,350 Cr Q1 inflow (Elara via search), the FY26 export share and the new CMD were not added. The naval-systems plant and Ibrahimpatnam/Jhansi capex were not added (left for a fuller refresh; MOSL-verified).
- **MIDHANI:** titanium tonnage is marked as conflicting/unverified rather than corrected. The guidance comes from an AI summary of the Q4 call (V-secondary) and is attributed to "management (Q4 FY26 call)". The opening FY26 order book was not used.
- **Data Patterns:** the Jun-26 cash conflict (₹466 Cr PPT vs ₹530 Cr call) was not used. The R&D % was not added.
- **Astra:** the 10 Jun 2026 formal demerger scheme is described as "could not be verified". The QIP date/amount was not added.
- **Apollo:** the CCI approval date (22 Sep 2026, snippet) and the preferential instrument split were not added. FY26 inflow and book-to-bill are not computable.
- **Paras:** Q1 FY27 order book/inflow is not disclosed. The Elbit ($3.8m) and CERBAIR (₹22 Cr) export values were left as they were ([K]). R&D was not added.
- **Zen:** the QIP date/price (Dec 2024, ~₹1,610) was not added; it appears only as "FY25 ₹1,000 Cr QIP".
- **MTAR:** Bloom's exact share is shown as an estimate. The July circuit sequence and the June Crusoe scare were not added (press-level). R&D and pledge status were not added.
- **Aequs:** Airbus's individual share was not added (not disclosed). The nature of the MPFF encumbrance is described as in the filing ("temporary", implying an encumbrance existed). R&D was not added.
- **Dynamatic:** the A220 "USD 0.5 million per shipset" claim was left unchanged (not covered by the dossier). Order book and guidance are not disclosed. Tata's Rafale PTAs are search-level, so they are stated only as "that work went to Tata Advanced Systems" (appendix note 10).

---

## Final audit

`node subsectors/_template/primer-audit.mjs "Capital Goods || Aerospace & Defense"` (run after all edits). The "Report links" and "Refreshed" columns were ignored as instructed.

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| bharat-electronics.html | 66 | 5311 | 16 | 10 | 11 | 0 | 2026-06-30 | ✅ | — |
| hindustan-aeronautics.html | 76 | 6740 | 18 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| bharat-dynamics.html | 69 | 5673 | 11 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| data-patterns.html | 68 | 5582 | 17 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| zen-technologies.html | 70 | 6248 | 11 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| mtar-technologies.html | 70 | 6240 | 12 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| astra-microwave.html | 74 | 6770 | 12 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| aequs.html | 74 | 6730 | 12 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| apollo-micro-systems.html | 70 | 6030 | 13 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| paras-defence.html | 70 | 6095 | 18 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| mishra-dhatu-nigam.html | 72 | 6305 | 18 | 10 | 12 | 0 | 2026-07-27 | ✅ | — |
| dynamatic-technologies.html | 74 | 6745 | 19 | 10 | 12 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks. Before these edits, 4 primers failed: BEL, HAL and BDL on "banned, honest>1", and Zen on "bars<10".

**Independent hygiene scan** (case-insensitive, outside `<style>`):
- There are zero hits for: think of, priced for perfection, long way to fall, no room for error, margin for error, grow into, call option, "story will be written", the bull owns, both can be, and both are true.
- "honest" appears at most once per file. It is 0 in HAL, BEL, BDL, MIDHANI, Apollo and Paras, and 1 in the other six.
- No USD appears in any stat strip.
- `main{min-width:0;}` is present in every file.
