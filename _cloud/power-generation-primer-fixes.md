# Power Generation — member-primer fixes (Phase 3)

Sub-sector key: `Power || Power Generation` · 14 member primers · refresh date **13 Oct 2026**.

All figures come from the verified research packs fetched this session: `_cloud/power-generation-companies-1.md` (batch 1 and its PRIMER ISSUES section), `_cloud/power-generation-companies-2.md` (batch 2 and its PRIMER ISSUES section) and the COMPANY-KPI APPENDIX in `_cloud/power-generation-industry.md` (K1 to K4). Market data is the screener.in close of 13 Oct 2026 and is labelled "as of 13 Oct 2026" or "(13 Oct '26)" wherever it appears.

**What was done in every primer**
- The refresh-bar date (`<b id="rb-when">`) is now **13 Oct 2026**, and the refresh-bar source text names the Q1 FY27 results and 13 Oct 2026 market data.
- `main{min-width:0;}` was added at the top of the first `<style>` block. This fixes the phone overflow.
- The What's new box now carries **Q1 FY27** (Jun-2026 quarter). No member had reported Q2 FY27 by 13 Oct 2026 (K4 §5).
- Stale m-cap, P/E and P/B figures were updated to the 13 Oct 2026 values in the stat strip, body, tables and bull/bear lists, with claims adjusted so they stay true.
- Banned phrases were removed ("think of", "a long way to fall", "no margin for error", "priced for perfection", "both can be right", "the story … will be written in", "call option" framings), and "honest" now appears at most once per primer.
- Bar counts are now 10–20 in every primer: AGEL went from 24 to 20, NTPC from 21 to 20 and ACME from 21 to 20; NHPC went from 7 to 11 and NLC from 8 to 12. SJVN's plain callouts went from 7 to 9.
- Section ids and anchors, the stat-strip layout, the back and PDF buttons and the `.ss-link` banners are unchanged. The stat strips contain no USD. No provenance line was added.

Note: the audit's "Refreshed" column is read from `data/primers.json`, which this phase may not edit. The orchestrator needs to update it.

---

### adani-power.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹4.3 L Cr (Jun '26)" in strip and valuation text | ₹3.59 L Cr (13 Oct '26), ₹186/share | K1; screener |
| P/E "~33×", P/B "~6–7×"; "33× coal stock" in bear case and bottom line | ~25× trailing (₹14,533 Cr TTM PAT), P/B ~5.5×; claims reworded | K1 |
| Revenue "~₹55,600 Cr (FY26, continuing)" in strip and snapshot | ₹54,241 Cr revenue from operations (FY26) | screener; batch-1 issue 7 |
| Capacity "18,150 MW across 13 plants" (strip, snapshot, unit table, fleet lead, part-sub) | 18,330 MW operating (Jun 2026, incl. 180 MW Churk); 18,150 MW noted as "effective" capacity | APL Q1 FY27 release / Sep-26 deck |
| Mahan Energen "~2,800 MW" | 1,200 MW operating (2×600) + 3,200 MW under development (Mahan-II 1,600 MW, COD Q1 FY28; Mahan-III 1,600 MW); "others" row recomputed to ~7,600 MW | APL deck |
| Target "~41.9 GW by FY32" (snapshot, pipeline lead, chart, peer table, dek, bull case) | ~45 GW FY32 target; 42,050 MW locked in (18,330 operating + 23,720 locked-in); chart rebuilt (18.3 / 23.7 / ~45 GW) with source line | APL deck / Q1 release |
| Net debt "~₹45,000 Cr (borrowings ~₹54,000 Cr vs ~₹8,500 Cr cash)" (5 places) | ₹47,643 Cr at 30 Jun 2026 (total debt ₹58,381 Cr) | Q1 FY27 release |
| No Q1 FY27 | What's new: revenue ₹19,322 Cr (+33%), EBITDA ₹6,983 Cr (+22%), PAT ₹4,867 Cr (+47%), PLF 77.9%, merchant ~₹7.0/kWh; PLF chart row Q4 FY26 replaced by Q1 FY27 77.9% | Q1 release |
| Missing events: QIP, JP Power stake, Bhutan JV, US case outcome | New 2026 timeline item and What's new: ₹15,000 Cr QIP approved (not launched), 24% of JPVL, 770 MW Chamkharchhu JV with DGPC (Oct 2026); group-overhang note now records the 10 Aug 2026 dismissal with prejudice and final SEC judgment (five co-defendants' counts reserved; APL not a party) | batch-1 issue 9; K4 §4 |
| MSEDCL award described only as an LoA | 25-year PSA signed in Q1 FY27; 13,945 MW of SHAKTI B(iv) PPAs across six states | APL release / deck |
| Merchant price quoted only as the exchange average ₹3.86 | Adds APL's own realisation: ₹5.30/kWh FY26, ~₹7.0/kWh Q1 FY27 | APL deck |
| No management or face value | CEO S B Khyalia; FV ₹2 after 1:5 split (~1,929 Cr shares) | adani.com release; screener |
| 52-week range "₹105–254" (pre-split, stale) | Removed; replaced by the multiple-compression context | screener |
| Banned: "Think of", "Both can be right", "a long way to fall", "story … will be written in", "priced for a flawless build-out" | Rephrased | — |

Not changed (unverified): plant count ("13 plants" replaced by "a dozen-plus" because the post-Churk count is not given); FY26 "~₹21,300 Cr continuing operating profit" and "~38% EBITDA margin" (company basis, not re-verified); ~95% PPA share; Godda details; SEBI ₹37.05 lakh settlement (not material, omitted).

### ntpc.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹3.46 L Cr (Jun '26)" (strip, valuation, sources) | ₹3.01 L Cr (13 Oct '26), ₹311, near the 52-week low of ₹306 | K1 |
| P/E "12–13×" | 10.8× trailing; P/B 1.48× | K1 |
| Group capacity "89,108 MW" (strip, snapshot, fleet, roadmap, peer table) | 90,904 MW at 30 Jun 2026; roadmap chart 90.9 GW | NTPC Q1 FY27 deck |
| Regulated equity "~₹1.19 lakh Cr" | ₹1,21,745 Cr consolidated / ₹92,797 Cr standalone (30 Jun 2026); chart row "As capex lands / rising →" replaced by Jun 2026 ₹1.22 L Cr, Sep-2025 row dropped (bars 21→20) | NTPC deck |
| Under construction "~33 GW … ~17 GW thermal, ~14 GW RE, ~2 GW hydro" | 35,702 MW: coal 15,720, RE 16,401, hydro/PSP 3,581 (chart, table, coal paragraph, hydro bullet, bear reply) | NTPC deck |
| Dividend "₹9.00/share, ~2.3% yield" | ₹8.85/share cash dividend paid in FY26 (highest ever), yield ~2.9% | NTPC deck; screener |
| Mahi Banswara "first concrete poured" (timeline and nuclear section) | Foundation stone Sep 2025; excavation consent for Units I & II received Mar 2026 | NTPC deck |
| No Q1 FY27 | Group PAT ₹6,896 Cr (+13%), standalone ₹5,342 Cr, coal PLF 76.71%, capex ₹11,591 Cr; PLF chart row "best stations ~85%+" replaced by Q1 FY27 76.7% | NTPC deck |
| Missing events | Sinnar acquired under CIRP (Feb 2026); PVUNL U-2 COD 25 Jun 2026; Tehri PSP fully commercial; 5 GWh BESS VGF; CMD Gurdeep Singh extension to 31 Jan 2027 | NTPC deck; psuwatch |
| Ownership "~51%" | GoI 51.10%, DII 29.44%, FII 16.30% (Jun 2026) | screener |
| Banned / tone: "Think of … toll-road operator", "honest" ×3, "green call option", "earnings story … will be written in" | Rephrased; "honest" kept once | — |

Not changed (unverified): ROE "~14%" mini-stat; "~₹7 lakh crore capex to 2032"; "~130 GW by 2032" target; FY23–FY26 revenue and PAT history (consistent with screener).

### adani-green-energy.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹2.5 L Cr (Jun '26)" | ₹2.13 L Cr (13 Oct '26), ₹1,287 | K1 |
| P/E "~130–150×", P/B ~12× (snapshot, valuation, bear case, bottom line) | ~110× trailing (₹2,146 Cr TTM PAT), P/B ~10.6× | K1 |
| Capacity "~19.3 GW (FY26 end)" (strip, snapshot, table, lead, chart, peer table) | 20,763 MW at 30 Sep 2026 (solar 14,550 / wind 3,266 / hybrid 2,947) | H1 FY27 ops update |
| BESS "3.37 GWh+" (Khavda table, battery section) | 6,632 MWh company-wide at 30 Sep 2026 (3,081 MWh added in Q2) | H1 FY27 ops update |
| **US legal status:** "DOJ drops charges … judge still reviewing … not yet fully closed" | 10 Aug 2026: indictment dismissed with prejudice (Gautam Adani, Sagar Adani, Vneet Jaain); final judgment in the SEC case; five co-defendants' counts reserved; AGEL not a party. Updated in What's new, timeline (new 10 Aug 2026 item), §08 note, bull case and flip-side text | AGEL BSE disclosure 11 Aug 2026; K4 §4 |
| CUF "solar ~24%, wind ~29%, hybrid ~35%" (unit table and chart) | Actual AGEL CUF: H1 FY27 22.9 / 42.9 / 45.2% (chart); Q1 FY27 25.3 / 44.4 / 49.0% (table) | Q1 deck; H1 ops update |
| No Q1 FY27 | Power-supply revenue ₹4,280 Cr (+29%), EBITDA ₹4,122 Cr (+33%, 93.7%), cash profit ₹2,225 Cr, PAT ₹983 Cr; Q2 results due 21 Oct 2026 | Q1 deck; BSE intimation |
| Promoter "~62.4%" | 62.43% (Sep 2026), up from 56.37% in Mar 2024 after warrants | screener |
| Bars 24 (> 22) | 20: dropped the FY23 rows in the revenue and PAT charts (values moved into the legends), the duplicate gross-borrowings row (moved into the legend) and the coal-contrast CUF row (moved into the legend); the capacity chart's FY25 row was replaced by Sep 2026 | — |
| Banned: "Think of", "a long way to fall", "no margin for error" ×2, "priced for perfection", "story … will be written in" | Rephrased | — |

Not changed (unverified): 14 GWh / 50 GWh BESS targets; Khavda ~9.4–9.9 GW built; TotalEnergies ~17.25%; FY26 core EBITDA ₹10,865 Cr and net debt ₹91,252 Cr (company FY26 figures, retained).

### jsw-energy.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹1.04 L Cr (Jul 2026)", price "~₹565" | ₹84,360 Cr at ₹460 (13 Oct '26) | K1 |
| P/E ~48×, P/B ~3.2×, EV/EBITDA ~18× | 42×, 2.63×, ~13× (estimate) | K1; batch-1 [E] |
| Capacity "13.45 GW" (strip, snapshot, fleet, ramp chart, mini-stats, M&A lead) | 14,535 MW (8 Jul 2026), ~61% clean; mix chart split into thermal 5,658 / wind 3,125 / solar 2,275 / hydro 1,781 / hybrid 1,696 MW; ramp chart adds a Jul 2026 row | JSW Q1 FY27 deck |
| **KSK Mahanadi "3,600 MW"** (timeline, fleet, acquisitions table, sources) | 1,800 MW operating + 600 MW "JSW Mahanadi" under construction | Q1 deck |
| Vijayanagar "~1,460 MW" | 860 MW | Q1 deck |
| Hydro "~1.4 GW" | 1,781 MW incl. Tidong 150 MW (COD 12 Jun 2026) | Q1 deck |
| Net debt ₹65,834 Cr, ND/E ~2.1× (snapshot, ownership, mini-stat, leverage section, bear case) | FY26 figure kept as history; now ₹61,322 Cr at 30 Jun 2026, ND/E 1.70×, ND/EBITDA 5.53×, cash ₹12,881 Cr | Q1 deck |
| Missing capital raises | QIP ₹4,000 Cr (May 2026), ₹3,000 Cr promoter preferential, ₹3,150 Cr JSW Steel stake sale; promoter 66.53% (new 2026 timeline item) | Q1 deck; screener |
| Missing acquisition | Maruti Clean Coal & Power 300 MW (DA 13 Jun 2026, EV ₹1,410 Cr) | Q1 deck |
| Locked-in "32.1 GW" | 32.4 GW; 13,567 MW under construction | Q1 deck |
| No Q1 FY27 | EBITDA ₹3,103 Cr (+2%), PAT ₹533 Cr (−36%), thermal PLF 71%; FY27 capex guidance ₹20,000 Cr | Q1 deck |
| Banned: "Think of", "a long way to fall" | Rephrased | — |

Not changed (unverified): storage pipeline 29.6 GWh; analyst targets (now labelled mid-2026); EV/EBITDA 3-year average ~20×.

### nhpc.html
| What was wrong | What it says now | Source |
|---|---|---|
| **GoI stake "~67.4% after the June OFS"** (What's new, snapshot, timeline, ownership, dividend plain, sources) | 61.39% after the 6% OFS of 2–3 Jun 2026 (67.40% was the pre-OFS level); FII 12.29%, DII 14.54% | screener SHP Jun 2026; NHPC Jun 2026 deck |
| M-cap "~₹81,600 Cr (Jul 2026)", price ~₹81 | ₹74,717 Cr at ₹73.5 (13 Oct '26); 52-week low ₹68.7 | K1 |
| P/E ~21.7×, P/B ~1.8× | 19.7×, 1.78× | K1 |
| PAT "standalone ₹3,689 Cr (+24.6%)" (strip, snapshot, §08 lead, chart, note) | Consolidated ₹4,220 Cr (+24%; owners ₹3,766 Cr); standalone ₹3,618 Cr; chart moved to the consolidated basis (FY25 ₹10,380 / ₹3,412 Cr) | NHPC deck "Key ratios"; screener |
| Revenue growth "+6%" | +11.9% (+12% in strip) on ₹10,380 Cr | screener |
| "~83% hydro", "~9.3 GW", "~7.8 GW hydro" | 9,333 MW, of which 8,771 MW (94%) hydro; capacity chart updated (8,771 / ~512 / ~50 MW) | NHPC deck |
| Parbati-II listed as under construction | Removed from the under-construction list; list now: balance of Subansiri, Teesta-VI, Dibang, Kiru, Pakal Dul, Kwar, Ratle, Rangit-IV; Dibang row added; pipeline 10 hydro + 7 solar projects (not 8 + 6); Subansiri balance Q4 FY27 | NHPC deck |
| Clearance/S&I queue "~10,000+ / ~9,800 MW" | 10,263 MW awaiting clearance; 19,820 MW in S&I (15 PSPs of 17,930 MW) | NHPC deck |
| Missing events | Teesta-V back in COD (Jul 2026); Kamala 1,720 MW CCEA (8 Apr 2026); Etalin 3,097 MW MoA (16 Jun 2026); Jalpower amalgamation hearing; FY27 capex ₹15,000 Cr (new 2026 timeline item) | NHPC deck; BSE |
| No Q1 FY27; **bars 7** | Revenue ₹3,808 Cr (+18.5%), PAT ₹1,178 Cr (+4%), finance cost +132% to ₹606 Cr, PAF 80.8%. **New 4-row chart** "Q1 FY27 — revenue vs finance cost" in §08 (bars 7→11) with source line | NHPC deck; screener |
| Dividend yield "~2%" | ~2.2% at ₹73.5 | NHPC deck; screener |
| Banned: "Think of" | Rephrased | — |

Not changed (unverified): ~₹1,157 Cr deferred-tax reversal amount (only the −8% tax rate is verified); OFS floor price and size details (K4 §6); ~20 GW-by-2030 target.

### ntpc-green-energy.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹80,600 Cr (Jul 2026)", price "₹95–96" | ₹78,230 Cr at ₹92.8 (13 Oct '26) | K1 |
| P/E "~140–150×", P/B ~4.2× | ~129×, ~4.1× | K1 |
| Capacity "10.1 GW (Mar 2026)" (strip, snapshot, dek, ramp chart, road-to-60 chart, peer table, bull case) | 11,328.69 MW installed at 10 Oct 2026; ramp chart adds an Oct 2026 row | NGEL BSE COD filing 9 Oct 2026 |
| "Net debt ~₹31,700 Cr, D/E ~1.5×" (snapshot, capex lead, legend, plain, mini-stat, table, bear case) | ₹31,716 Cr is gross borrowings (net ≈₹31,100 Cr); paid-up debt ₹32,353 Cr at Jun 2026, D/E 1.68× | screener; psuwatch |
| ROE "~3–4%" | 2.79% | K1 |
| No Q1 FY27 | Revenue ₹1,107 Cr (+63%), PAT ₹305 Cr (+38%); standalone PAT −7.5% (new timeline item too) | screener; psuwatch |
| No hard under-construction figure ("~19–20 GW portfolio") | 16,024 MW under construction (solar 9,648 / wind 6,376, 30 Jun 2026) | NTPC Q1 FY27 deck |
| Missing events | APNHAL stake to 51%; REMCL 500 MW RTC (Kalasar) blocks commissioned Sep–Oct 2026 | psuwatch; BSE |
| Ownership "~89%" | 89.01%; MPS 75% deadline about Nov 2029 | screener |
| Banned: "Think of" ×2, "a long way to fall", "story … will be told" | Rephrased (incl. "rents them out" metaphor) | — |

Not changed (unverified): FY26 generation/CUF (K4 §6); ~8 GW/yr guidance; FY28 ~26 GW; analyst targets; FY25 debt "~₹17,300 Cr".

### nlc-india.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹43,500 Cr (Jul '26)", price ~₹314 | ₹34,014 Cr at ₹245 (13 Oct '26); all-time high ₹387.80 on 14 May 2026 (−37%) | K1; NLC deck |
| P/E "~12×", P/B "~2×" (snapshot, PSU note, NIRL, mini-stats, table, bull case, bottom line) | 10.6×, 1.58× | K1 |
| **Capacity "~6,900 MW"** (strip, snapshot, assets lead, chart legend) | ~8,350 MW group (Jun 2026): thermal 6,620 (3,640 lignite + 2,980 JVs) + RE 1,734 MW; total marked as our sum | NLC May 2026 deck; results notes |
| **NIRL ownership "NLC's ~72% stake"** | NIRL is a wholly-owned (100%) subsidiary; would be ~75% after a 25% IPO | NLC deck; results filing |
| GoI "~72%", "OFS of up to 3% (floor ₹303)" (part-sub, ownership, timeline) | OFS sold 2.73% (~₹1,260 Cr); GoI 69.47% | NLC results note 4; screener |
| NIRL IPO "~Q2 FY27" (snapshot, timeline, §07 lead and list, bull case) | "Planned in FY2027" per deck; no draft papers seen by 13 Oct 2026 | NLC deck |
| RE "~1.5 GW", "~1,455–1,600 MW"; RE chart middle bar "illustrative ~3,500" | 1,734 MW; RE chart shows installed + 5,810 MW under implementation = 7,544 MW vs 10,110 MW target, with source line | NLC deck |
| ROE "~17.5%", ROCE "~10%", yield ~1.2% | 11.9%, 8.4%, ~1.6% | K1; batch-1 7a |
| No Q1 FY27; **bars 8** | Consolidated revenue ₹4,717 Cr (+23%), PAT ₹436 Cr (−48%, tax normalisation), standalone PAT ₹374 Cr (+2%). **New 4-row chart** "Q1 FY27 — more power sold, less tax shelter" in §09 (bars 8→12) with source line | screener; BSE results filing 7 Aug 2026 |
| Missing pipeline facts | NUPPL U-3 COD 13 Jun 2026; Odisha pithead TPS 2,400 MW (₹27,213 Cr); Pachwara South 9 MTPA (Mar 2026); Talabira 19.14 MT; NIRL 265 MW/530 MWh BESS win | NLC deck; BSE |

Not changed (unverified): NIRL BRLM appointments (search snippet only); group generation and Talabira Q1 volumes (snippets); revenue ₹17,490 Cr (company basis; screener shows ₹17,519 Cr, so left as is).

### sjvn.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹27,900 Cr (Jul '26)", share ~₹71 | ₹22,034 Cr at ₹56.1 (13 Oct '26), near the 52-week low of ₹53.7 | K1 |
| P/E "~43×", P/B ~2.0×, yield ~2% | 34.5×, 1.55×, 2.68% (and ~22× on standalone PAT, estimate) | K1 |
| **Capacity "~2.0 GW oper. · 12+ plants"** (strip, snapshot, §04 lead and chart, §05 title and chart, §06 sub, peer table, bull case) | 4,196.5 MW across 15 projects at 31 Mar 2026; ~4.9 GW by Oct 2026 (estimate) after Buxar U-2 and Jamui 75 MW; capacity chart rebuilt (solar+wind ~1.6 GW est., NJ 1,500, Buxar 1,320, Rampur 412, Naitwar Mori 60) | Q4 FY26 transcript; CARE; SJVN PR |
| **Buxar shown as pipeline** | Commercial: U-1 COD 14 Nov 2025, U-2 COD 12 Sep 2026; ~₹4,000 Cr regulated equity | transcript; uniindia |
| Generation "~10,647 MU (FY25)" | FY26 13,302 MU (+25%) | transcript |
| Vision "12 GW by 2027, 25 GW by 2030, 50 GW by 2040" as live | Under review (CMD, May 2026); guidance FY27 ~2,284 MW, FY28 ~650 MW, FY29–30 ~2,500 MW (≈9–10 GW by 2030, our estimate); chart sublabels "under review" | transcript |
| Capex "~₹12,000 Cr for FY26" | FY27 ₹9,400 Cr, FY28 ₹7,800 Cr, FY29 ₹7,500 Cr | transcript |
| Arun-3 no date | SCOD Mar 2028 (CARE); all units Dec 2028 (management) | CARE; transcript |
| Dhaulasidh "66 MW" | 69.5 MW, target Mar 2027; under-construction lead now ~3.9 GW (mgmt) / ~5.4 GW (CARE) | transcript; CARE |
| No Q1 FY27 | Revenue ₹1,394 Cr (+52%), PAT ₹225 Cr (−1%), Buxar fuel ₹243 Cr, finance cost +51% | screener; Mercom |
| Missing leverage / REIA risk | Debt/EBITDA 9.6×, gearing 2.3×, ST loans due Sep 2027; ~9 GW of REIA awards without PSAs (new risk row) | CARE; transcript |
| Missing governance | ₹13.44 lakh exchange fine; new GoHP nominee director (12 Oct 2026); Director (Projects) Rajesh Chandel; CMD Bhupender Gupta | BSE list; SJVN PR |
| RoE stated as "~15.5% (pre-tax)" | 15.5–16.5% post-tax (grossed up) | CARE |
| **plain 7 (< 8)** | +2 "In plain terms" callouts: Buxar's cost-plus economics and 70% PLF breakeven (§04); the REIA/PSA book (§06). Plain count is now 9 | transcript; CARE |
| Peer sizes NHPC "~7 GW", NTPC "~75 GW" | ~8.8 GW hydro of 9.3 GW; ~91 GW group | batch 1 |
| Banned: "Think of" ×2; "honest" ×2; "call option" | Rephrased; "honest" now 0 | — |

Not changed (unverified): standalone Q1 FY27 figures (snippets, K4 §6); Kholongchhu status; Luhri/Sunni Dam details beyond the list.

### acme-solar-holdings.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹26,900 Cr (Jul '26)" | ₹29,275 Cr at ₹414 (13 Oct '26) | K1 |
| P/E "mid-50s×" | 49.2× (₹602 Cr TTM PAT); P/B ~5× | K1 |
| **Revenue "~₹2,507 Cr (+59%)"** (strip, snapshot, timeline, revenue chart, numbers note) | Revenue from operations ₹2,023 Cr (+44%); ₹2,505 Cr is total income incl. ₹482 Cr other income; chart FY25 1,405 / FY26 2,023 | screener |
| **Promoter "~83%"** (ownership, mini-stat, bull case) | 71.40% (Jun 2026) after the ₹2,800 Cr QIP; DII 19.10% | screener SHP; Q1 deck |
| Missing QIP / deleveraging | QIP ₹2,800 Cr (Jun 2026); operational ND/TTM EBITDA 2.9× (from 4.2×); net debt ₹12,600 Cr (30 Jun 2026) | Q1 deck |
| BESS "~2.3 GW commissioned" (FY26) | ~1.3 GWh at FY26-end; 3.62 GWh by Jul 2026; guidance above 10 GWh by FY27 | Q1 deck and transcript |
| PPA-signed "~6,570 MW" | 6,870 MW (600 MW SECI in Q1); 1,200 MW LoA-only | Q1 deck |
| Growth framing (~7 GW by FY28 only) | Adds current deck targets: 10 GW + 25 GWh by 2030; ~1.5 GW RE commissioning in FY27; FY27 capex ₹15–20k Cr | Q1 deck and transcript |
| No Q1 FY27 | Total income ₹954 Cr (+63%), EBITDA ₹831 Cr (+57%), PAT ₹235 Cr (+80%), CUF 30.9%, BESS revenue ₹226 Cr | Q1 deck |
| Missing incident / management / rating | BESS fire at ACME Suryodaya (13 Jul 2026, AC cable short, RCA done); CEO Nikhil Dhingra, CFO Arun Chopra; ICRA AA−/Stable reaffirmed (7 Oct 2026) | Q1 deck; BSE |
| Bars 21 | 20: dropped the "CY2024 auctions ~59 GW" row (the figure stays in the legend) | — |
| Banned / tone: "Think of", "call option" ×2, "priced for perfect execution", "story … is written in" | Rephrased | — |

Not changed (unverified): FY28 targets (~7 GW, ~₹5,900 Cr revenue, ~₹950 Cr PAT). Kept as management guidance, with a note that they are not in the Q1 FY27 deck. ACME QIP price (K4 §6).

### jaiprakash-power.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹11,555 Cr (mid-2026)" | ₹10,314 Cr at ₹15.1 (13 Oct '26), below APL's ₹18.20 entry | K1 |
| P/E "~25×" | 12.4× (₹641 Cr TTM PAT); P/B 0.81×; EV ~₹11,700 Cr, ~₹5.3 Cr/MW, EV/EBITDA ~7.7× | K1; batch-2 3a |
| EBITDA margin "~27–28%" | 28.5% (company PBIDT ₹1,586 Cr on ₹5,563 Cr); the ₹1,595 Cr figure is labelled OP + other income | AR FY26; screener |
| Revenue "~₹5,792 Cr" in strip | ₹5,563 Cr revenue from operations (total-income chart retained and labelled) | AR; screener |
| **"Promoter shareholding passed to Adani Power … controlling shareholder"** (snapshot, timeline, §05, peer table, bull case, lead, bottom line) | APL bought JAL's 24% (164.48 Cr shares, ₹2,993.6 Cr, ~₹18.20/share); associate, not subsidiary; exempt from open offer; APL denied the Sep 2026 51% reports | AR FY26; outlookbusiness; filingreader; kotakneo |
| Net debt "~₹1,360 Cr (Sep-2025)"; gross ~₹3,500 / ~₹4,010 Cr | ~₹1,382 Cr at Mar 2026 (borrowings ₹3,391 Cr vs ₹3,778 Cr; cash ₹2,009 Cr); debt chart rebuilt; ND/EBITDA ~0.9× | screener |
| **NARCL IBC "not scheduled"** | Settled 19 Sep 2026 for ₹511 Cr "full and final"; petition to be withdrawn (not yet confirmed) | BSE filing |
| Missing board / KMP change | Board reconstituted 22 May 2026 with Savan J. Patel (WTD); Suren Jain left; CFO and CS retired 30 Sep 2026 | AR; BSE |
| No Q1 FY27 | Revenue ₹1,776 Cr (+12%), PAT ₹469 Cr (+69%, tax-regime credit); Q2 board meeting 19 Oct 2026 | screener; BSE intimation |
| Merchant exposure unquantified | Nigrie sold 5,799 MU (~60%) merchant; Bina 1,375 MU; ~half of saleable energy | AR FY26 |
| Pledge "should change" | Screener still flags 73% of promoter holding pledged (Jun 2026 SHP) | screener |

Not changed (unverified): the ₹193.6 Cr coal-mine-surrender exceptional charge (snippet only, so omitted); post-transfer pledge detail (K4 §6); Amelia asset value ~₹315 Cr.

### reliance-power.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹10,058 Cr (Jun 2026)", share ~₹24.5 (strip, valuation table, §09 plain, book-value text, closing comparison, bull case) | ₹8,271 Cr at ₹20.0 (13 Oct '26), near the 52-week low of ₹19.1; P/B 0.52× | K1 |
| **Sasan PLF "~91%"** (9 places) | ~87% (30,092 MU) per the FY26 AR; "PLF near 90%" test changed to "high 80s" | AR FY26 |
| **Wind "~45 MW in Maharashtra"** (chart and text) | 5 MW in Tamil Nadu (Kollupalyam/Pavoorchatram), ED-attached | AR FY26 |
| **Fund-raise "₹9,000 Cr"** (What's new, §06 list, chart, timeline, bull case) | Equity enabler up to ₹6,000 Cr (QIP/PP/FPO) + NCDs up to ₹3,000 Cr + US$600 mn FCCBs; chart row now ₹6,000 Cr | AR notice |
| **SJVN "350 MW"** (snapshot, §07, ledger, timeline) | Two SJVN projects: 350 MW + 175 MW/700 MWh and 650 MW + 750 MW/3,300 MWh (~1,500 MWp + 4,000 MWh); ledger totals ~2,400 MWp + ~5,900 MWh | AR FY26 |
| SECI timing "24-month clock → mid-2027" (§07 list, Rule two, "one number", watch-list, bottom line) | Kurnool-IV connectivity only from 30 May 2029 (final grant 12 Jun 2026), so 2029 is the realistic test date; the "out in Rajasthan" wording was removed | AR FY26 note |
| **Missing legal events** | Named accused in the CBI RCFL supplementary chargesheet (7 Sep 2026) and the RHFL second chargesheet (1 Oct 2026); ED attachment confirmed 18 May 2026 (365 days); ED supplementary complaint (RPower, Rosa, NU BESS); SEBI forensic audit (14 Jan 2026) and SCNs; ex-CFO arrested | BSE filings; AR |
| **Missing going-concern flag** | Auditor's "Material Uncertainty related to Going Concern" (Apr 2026 IBC application re Samalkot guarantee, US$165.4 mn) | AR auditor's report |
| SECI debarment not precise | Delhi HC stay for RPower and all subsidiaries except Reliance NU BESS | outlookbusiness |
| Missing Bhutan / Bangladesh / warrants / management | Bhutan 500 MWp solar JV + 770 MW hydro with DHI; Meghnaghat 718 MW COD Jul 2025; 34.32 Cr warrants lapsed; ED/CEO/CFO Neeraj Parakh; director resigned 25 Sep 2026 | AR FY26 |
| No Q1 FY27 | PAT ₹65 Cr (+45%) on ₹1,956 Cr revenue; quarterly chart gains a Q1 FY27 row (bars 14→15) and a valuation-table row | screener |
| Debt/EBITDA "~10.25×" | Kept as "reported", alongside net debt ~5.5× FY26 operating profit (borrowings ₹14,812 Cr, cash ₹1,705 Cr, screener-based estimate) | screener [E] |

Not changed (unverified): the ₹715 Cr ED notice (K4 §6); ₹1,021 Cr / ₹258 Cr attachment amounts (retained as "reported"); Rosa ~97% availability.

### kpi-green-energy.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹6,300–6,400 Cr", P/E "~12–13×" (snapshot, mini-stat, plains, bull case) | ₹6,459 Cr at ₹327, 14.2× (13 Oct 2026) | K1 |
| Capacity "1.62 GW installed", "6.26 GW portfolio", "4.64 GW under execution" (strip, snapshot, funnel chart, plain, bear case, bottom line) | Jun 2026: 1.87 GW installed, 5.07 GW WIP, 6.94 GW portfolio (FY26 figures kept as history) | Q1 FY27 deck |
| Land / evacuation "6,000+ acres, ~3.4 GW" (flow, plain, mini-stat, bull case) | 8,657 acres; 5.10 GW evacuation | Q1 deck |
| Borrowings "~₹4,532 Cr" without leases | ₹4,532 Cr excl. leases; ₹5,197 Cr incl. ₹665 Cr leases; net debt ~4.6× EBITDA | screener schedules |
| **Missing acquisition** | Binding offer for 507.9 MW operating SECI wind (Alfanar 301.4 + Netra 206.5 MW), EV ≈ ₹2,410 Cr, closing by 28 Feb 2027 | BSE PR 30 Sep 2026 |
| **Missing management change** | Group CEO Dr. Alok Das resigned (effective 1 Oct 2026); BDO appointed auditor | BSE filing; Q1 call |
| No Q1 FY27 | Revenue ₹694 Cr (+15%), EBITDA ₹262 Cr (+21%), PAT ₹95 Cr (−14%); FY27 PAT-margin guidance cut below 16–18% | Q1 deck and transcript |
| Promoter "controlling stake" (no %) | 49.41% (51.9% diluted for warrants); pledge 44.7% retained | screener; Q1 deck |
| BESS / new verticals vague | 565 MW/1,130 MWh BESPA; 142 MW Kadana floating-solar EPC; CERC and GERC trading licences | Q1 deck |
| Revenue basis | Total income ₹2,742 Cr retained (correctly labelled); revenue from operations ₹2,696 Cr (+55%) added | screener |

Not changed (unverified): IPP-only installed 1.16 GW (Sep 2026); 40–50% growth ambition; KP Green Engineering FY26 figures.

### gmr-power-urban-infra.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹7,640 Cr (Aug 2026)" (strip, debt chart, valuation lead) | ₹7,965 Cr at ₹102 (13 Oct '26), below the ₹120.88 preferential price; P/B ~4.2×; P/E not meaningful | K1 |
| **Gas "GPUIL owns ~2,300 MW"; Bajoli Holi "genuinely good asset"** (§04 chart, gas and hydro text, bull case) | Vemagiri and Rajahmundry held as 49% JVs after framework agreements to divest 51% each; framework agreement to divest 79.86% of Bajoli Holi; bull case "stranded gas free option" replaced by "asset sales under way" | Q1 FY27 deck |
| Promoter / capital actions missing | Promoter 46.28% after the ₹1,200 Cr preferential issue at ₹120.88 (₹1,000 Cr for debt); FII 16.0%; AGM (21 Sep 2026) approved a QIP/FCCB enabler | screener SHP; filingreader; BSE AGM results |
| Only gross debt ₹11,600 Cr | Adds company net debt ₹9,300 Cr (30 Jun 2026), proforma ND/LTM EBITDA ~4.5× | Q1 deck |
| No PLF | Warora 90%, Kamalanga 87% (Q1 FY27); FY26 85% / 87%; all-India private average ~77% | Q1 deck |
| Smart-meter status vague | 7.57 mn meters, ₹7,590 Cr; ~41 lakh installed (31 Jul 2026); deadline 31 Mar 2028; Q1 revenue ₹230 Cr vs ₹520 Cr in Q4 | Q1 deck |
| No Q1 FY27 | Total income ₹1,750 Cr (−1%), EBITDA ₹500 Cr (−4%), PAT −₹35 Cr (Haryana LPS ended) | Q1 deck; screener |
| Kamalanga stake | 100% after buying IDFC First's 2.37% (Mar 2026) | Q1 deck |

Not changed (unverified): CEO/CFO names (not verified); DFCC/Ambala claim details (not added); land-bank values.

### rattanindia-power.html
| What was wrong | What it says now | Source |
|---|---|---|
| **Sinnar shown as owned ("2,700 MW … two plants"; "dark twin … prize nobody prices"; "free but unpredictable extra")** across the dek, snapshot, §01 table and chart, §02 lead, flow, Sinnar list, capacity chart and note, §07 (body rewritten in place, same anchor `p7`; heading and TOC label now "The former twin at Sinnar"), peer table, §10 plain, bull/bear and bottom line | Sinnar Thermal entered CIRP in Sep 2022, was deconsolidated in Jan 2024 and was acquired by the NTPC–MAHAGENCO consortium on 24 Feb 2026; RattanIndia owns only Amravati (1,350 MW). The "dark twin as free upside" bull point was replaced by a verified funding point | NTPC disclosure; RPL AR FY26 |
| M-cap "~₹4,269 Cr (Aug 2026)", "roughly ₹8 a share" (strip, snapshot, §08, table, mini-stat, note) | ₹3,576 Cr at ₹6.67 (13 Oct '26) | K1 |
| P/E "~38×" | 32.1× TTM; P/B 0.77× | K1 |
| PLF "~80%+", "~82%", availability "~100%" | Q1 FY27 PLF 92.43%, PAF 98.15% (FY26 ~82% kept as approximate); PLF chart's Sinnar row replaced by Q1 FY27 PLF | Q1 earnings update |
| **Debt-holder narrative (ARC / Goldman / Värde / Kotak "woven into the capital structure")** | NCD Series II and III fully repaid in FY26; ₹2,682 Cr of the ₹3,711 Cr debt is ICDs from promoter-group RR Infralands (bullets ₹550 Cr Jun 2027, ₹900 Cr Sep 2027); OCCRPS ₹377 Cr; overdue RPS ₹250 Cr; the debt chart's Kotak NCD row was replaced by the ICD row | AR FY26 note 15 |
| Missing BHEL award | Arbitral award (3 Oct 2026): net ₹170.78 Cr plus interest payable to BHEL (Amravati Phase-II) | BSE filing |
| No Q1 FY27 | PAT ₹44.4 Cr (vs −₹14.6 Cr); finance cost −42% | Q1 earnings update |
| Receivables understated ("now partly banked") | ₹876.84 Cr received; receivables ₹2,757 Cr (336 debtor days); MSEDCL SC appeal pending | AR; screener |
| Pledge "track any pledge levels" | Screener shows no pledge; the NCD-linked pledge of 209.8 Cr shares is no longer flagged | screener; AR |

Not changed (unverified): Sinnar purchase price (K4 §6); FY24/FY25 revenue approximations; CRISIL upgrade detail.

---

## Final primer-audit (`node subsectors/_template/primer-audit.mjs "Power || Power Generation"`)

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| adani-power.html | 68 | 5560 | 20 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| ntpc.html | 76 | 6608 | 20 | 11 | 13 | 0 | 2026-06-30 | ✅ | — |
| adani-green-energy.html | 76 | 6828 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| jsw-energy.html | 70 | 5975 | 19 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| nhpc.html | 73 | 6534 | 11 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| ntpc-green-energy.html | 77 | 7065 | 18 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| nlc-india.html | 67 | 5545 | 12 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| sjvn.html | 72 | 6110 | 19 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| acme-solar-holdings.html | 70 | 5939 | 20 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| jaiprakash-power.html | 69 | 6489 | 12 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| reliance-power.html | 90 | 9095 | 15 | 12 | 12 | 0 | 2026-06-30 | ✅ | — |
| kpi-green-energy.html | 71 | 6578 | 17 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| gmr-power-urban-infra.html | 72 | 6734 | 18 | 10 | 12 | 0 | 2026-07-27 | ✅ | — |
| rattanindia-power.html | 76 | 7080 | 19 | 12 | 12 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks. Baseline was 9 failing; the soft "no main{min-width:0}" note is cleared for all 14. The "Refreshed" column comes from `data/primers.json`, which was out of scope for this phase.

**Extra self-checks:**
- Every primer has 10–20 bar-rows, at least 8 plain callouts, no banned phrase, at most 1 "honest" and no $/USD in the stat strip.
- Section ids are identical to `git show HEAD`.
- `<div>`, `<section>`, `<table>`, `<svg>`, `<ul>` and `<li>` counts are balanced. adani-power and gmr-power-urban-infra each have one extra `</p>`, which is unchanged from HEAD.

## Total fixes

**185 fixes in all.** That is 157 content fixes logged in the per-primer tables above, plus 28 mechanical fixes (the refresh-bar date and the `main{min-width:0;}` CSS rule in each of the 14 primers). Each table row may cover several occurrences of the same figure across the strip, body, charts and tables.

| Primer | Content rows |
|---|---|
| Adani Power | 14 |
| NTPC | 11 |
| Adani Green | 10 |
| JSW | 12 |
| NHPC | 12 |
| NTPC Green | 10 |
| NLC | 10 |
| SJVN | 16 |
| ACME | 12 |
| JP Power | 11 |
| Reliance Power | 12 |
| KPI | 10 |
| GMR | 8 |
| RattanIndia | 9 |
| **Total** | **157** |
