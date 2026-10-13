# Iron & Steel: primer fixes (Phase 3)

Sub-sector key: `Iron & Steel || Iron & Steel`. Done 13 Oct 2026. These were targeted edits, not rewrites. Sources are the verified dossier (`_cloud/iron-steel-companies-1/2/3.md`) and the COMPANY-KPI APPENDIX in `_cloud/iron-steel-industry.md`. All market data (m-cap, P/E, P/B) is from screener **as of 13 Oct 2026**.

## Applied to all 13 primers

- **Phone overflow:** added `main{min-width:0;}` inside the first `<style>` block.
- **Refresh bar:** `<b id="rb-when">` set to **13 Oct 2026**. The source text now names Q1 FY27 and "market data as of 13 Oct 2026".
- **What's new box:** added a Q1 FY27 entry. Where available it also gives the Q2 production or sales update (JSW 8 Oct, Tata 7 Oct, Shyam 6 Oct), the next results date (JSW ~23 Oct, which is a reported date only; Jayaswal Neco 16 Oct; Gallantt 19 Oct; Sarda 31 Oct), and m-cap, P/E and P/B as of 13 Oct 2026.
- **Banned phrases:** all removed. Every primer now has "honest" at most once.
- **Safeguard duty:** wherever a primer mentions it, it now uses the verified schedule: 12% to Apr-2026, then 11.5% to Apr-2027, then 11% to 20 Apr 2028. Final order 30 Dec 2025.
- **Sources lists:** each primer got one new source line naming the dossier documents used.
- **Not changed:** page structure, section list and anchors, stat-strip layout, back button, PDF button and print CSS, `.ss-link` banners. No USD was added to any stat strip, and no provenance line was added.

## Summary: content fixes per primer

| Primer | Content fixes | Bar rows changed |
|---|---|---|
| jsw-steel | 24 | 23 → 20 |
| tata-steel | 18 | 18 (one value fixed) |
| jindal-steel | 20 | 21 → 20 |
| lloyds-metals | 27 | 9 → 11 |
| sail | 22 | 19 (one value fixed) |
| jindal-stainless | 15 | 17 |
| shyam-metalics | 15 | 22 → 20 |
| sarda-energy-minerals | 15 | 13 |
| godawari-power-ispat | 22 | 15 (one row replaced) |
| gallantt-ispat | 40 | 7 → 10 |
| nmdc-steel | 27 | 13 → 14 |
| jayaswal-neco | 33 | 18 (values fixed) |
| jai-balaji-industries | 40 | 19 → 20 |

---

## jsw-steel.html

| What was wrong | What it says now | Source |
|---|---|---|
| BPSL sale "₹29,475 Cr" (dek, What's new, timeline ×2, §07 narrative ×2, legend) | ₹24,483 Cr slump-sale cash consideration, plus JFE ₹15,750 Cr equity for its 50%. The narrative now says "large cash proceeds" | BSE announcement 3-Dec-2025 [V] |
| BPSL "stripped out ~3.5 MTPA" | A plant JSW had expanded to 4.5 MTPA | BSE announcement [V] |
| Capacity "~34 MTPA India (~35.7 global)", target "~56 MTPA by FY31", "~₹1-lakh-crore build-out" (§00, §06 legend, §12 bull/bear, synthesis) | ~32 MTPA India ex-BPSL (BPSL's 4.5 MTPA sits in the JV); ~49 MTPA by FY30; ~62 MTPA by FY32 (~78 incl. JVs). The 62 MT / ₹2.26 lakh Cr plan is not yet board-approved. Board-approved capex is ₹1,30,000 Cr | BOBCAPS Q1 FY27; cofacto.ai call [V] |
| §06 capacity chart: 4 rows (35.7 / 43.4 / 56 / 60+) | 3 rows: ~32 (today) / ~49 (FY30) / ~62 (FY32). The 78-incl-JVs figure moved to the legend | BOBCAPS [V] |
| EBITDA/t "₹32,048 Cr on ~30 MT ⇒ ₹10,000+" | 29.63 MT sold ⇒ ~₹10,816/t adjusted (~₹10,064 on reported ₹29,821 Cr); Q1 FY27 ₹14,997 | Angel One; BOBCAPS [V] |
| Promoter "~45%" | 44.29% (Jun 2026) | screener [V] |
| Coking-coal target "~25% captive" | ~50% hard-coking-coal self-sufficiency by CY28 (Mozambique ~7 Mt from mid-2028) | cofacto.ai [V] |
| No captive-ore share | New bullet: ~30% of Q1 FY27 ore need; clearances sought for 19.2 → 31 MT | cofacto.ai [V] |
| No live valuation | §11 lead: ₹1,177, m-cap ₹2,88,076 Cr, P/E 23.9× (flattered by the BPSL gain), P/B 2.88× as of 13 Oct 2026 | screener [V] |
| Deleveraging legend | Adds the Q1 FY27 cut: net debt ₹46,157 Cr (1.46×) | BOBCAPS / cofacto [V] |
| Q1 FY27 and Q2 missing | What's new: revenue ₹47,364 Cr, EBITDA ₹9,383 Cr, 6.25 MT, ₹14,997/t, PAT ₹4,696 Cr, ND ₹46,157 Cr; Q2 crude 7.27 MT, India utilisation 88%; results ~23 Oct | BOBCAPS; FPJ [V]; board date [S] |
| Banned / honest | "Think of JSW Steel as" → "At heart, JSW Steel is"; "The honest framing / view / answer" → structural / realistic / fair; "The story … will be written in" → "Four numbers to watch" | — |
| **Bar rows removed (3)** | "India exports (post-duty), one quarter FY26, +36%" (vague, stale); "FY25 reported PAT ~3,491" (already in the cycle chart); "Near-term roadmap ~43.4" (replaced by the post-BPSL roadmap) | — |

## tata-steel.html

| What was wrong | What it says now | Source |
|---|---|---|
| "31.67 MT Crude steel output" (stat strip, What's new, §00, financial table) | Labelled group production on a mixed basis (India crude, Europe liquid, SEA saleable); India crude 23.43 MT | FY26 release [V] |
| Revenue "+~8%" (§00, table) | ~6% (+6.2%) | screener [V] |
| Netherlands going-concern risk missing (§00, §03 list, §04 IJmuiden) | Permit-revocation letter of 23 Apr 2026; going-concern material uncertainty; >€20m of penalties; Direct Sheet Plant shut in Q1 (NL EBITDA €4m), restarted Aug 2026 | FY26 and Q1 FY27 releases [V] |
| NINL expansion missing (§06) | Board approved 4.8 MTPA for ₹33,873 Cr on 30 Jul 2026 (NINL → 6.2 MTPA) | Q1 FY27 release [V] |
| §06 India capacity bar "~22 MT", "up ~84%" | ~27.4 MTPA, up ~46% to the ~40 MTPA goal | FY26 presentation [V] |
| UK safeguard reset missing | New UK bullet: loss narrowed to −£27m; UK safeguard regime from 1 Jul 2026; Q2 UK deliveries 0.38 MT | Q1 release; FPJ [V] |
| Promoter "~33%" / "33.19% (Mar 2026)" | 32.94% (Jun 2026) | screener [V] |
| No live valuation (§10) | ₹175, m-cap ₹2,18,386 Cr, P/E 18.5×, P/B 2.14×, EV/EBITDA ~8×; Q1 India EBITDA/t ₹19,162, ND ₹84,173 Cr | screener [V]; EV [E] |
| Q1 / Q2 missing | What's new: consolidated EBITDA ₹9,370 Cr (₹12,898/t), India ₹19,162/t, PAT ₹2,385 Cr; Q2 India crude 6.21 MT, deliveries 5.97 MT | Q1 release; FPJ [V] |
| Banned / honest | "Think of Tata Steel as two steelmakers" → "Tata Steel is really two steelmakers"; honest ×3 → core / structural / fair | — |

## jindal-steel.html

| What was wrong | What it says now | Source |
|---|---|---|
| Capacity "~15.9 MTPA now" (dek), "toward 15.9" (timeline, §06 text ×3) | 15.6 MTPA everywhere | sahi; Elara [V] |
| §06 bar "Next milestone ~15.9" | **Removed** (inconsistent; this also brings bars 21 → 20) | — |
| "cut net debt to a comfortable 1.66×" / "net debt is down to ₹16,019 Cr" (dek, §00, timeline, §08) | Net debt **rose** from ~₹11.9k to ₹16,019 Cr on ~₹9.5k Cr capex; leverage a moderate 1.66× (1.71× Jun) | Elara [V] |
| "FY27 output guided to 11.0–11.5 MT" (What's new, §06) | FY27 **sales** guidance 10.5–11.0 MT (+21–27%) | Elara [V] |
| TKSE missing; "No overseas drag" | Caveat added: promoter vehicle Jindal Steel International's non-binding bid; talks paused 2 May 2026; ₹830 Cr Australian coal write-down | Manila Times / Reuters; Elara [V] |
| Promoter "~61%+" (×2) | 62.71% (Jun 2026); ~10.9% of the promoter holding pledged | screener; Elara [V] |
| Valuation "~₹1.06 lakh Cr, P/E ~26×, ~2× book" (§10 and the plain box) | ₹1,04,264 Cr, ₹1,032, P/E ~33.8× (trailing PAT ~₹2,709 Cr), P/B 2.07×; "today's ~34×" | screener [V] |
| Generic safeguard mention (§09) | Final three-year duty, 12/11.5/11% to 20 Apr 2028, CIF floor | industry file (notification) [V] |
| Q1 missing | What's new: revenue ₹15,482 Cr, adjusted EBITDA ₹2,667 Cr, 2.23 MT, ₹11,937/t, PAT ₹844 Cr, ND ₹15,927 Cr; slurry pipeline Aug 2026 | sahi; filingreader [V] |
| Banned / honest | "Think of Jindal Steel as" → "At heart, Jindal Steel is"; "The honest caveat" → "The caveat"; "keeps bears honest. The story … will be written in" → "the bears point to. Three numbers to track" | — |

## lloyds-metals.html

| What was wrong | What it says now | Source |
|---|---|---|
| Stat strip "~34% EBITDA" (also §01, §08 mini-stat, table, figure note, bull case) | ~36% consolidated (35.9% company; ~33% standalone) | screener; presentation [V] |
| FY26 revenue "+104%" | +155%, flattered by consolidating TEIL from Jul 2025 | screener [V] |
| Thriveni framed only as co-promoter / contractor (§07) | TEIL is a 79.82% subsidiary since 1 Jul 2025; ₹606.76 Cr further subscription (Oct 2026); TEIL Q1 revenue ₹2,672 Cr; related-party text reframed | HDFC Sky; BSE 8-Oct-2026 [V] |
| "Building a ~195 km slurry pipeline … >₹500/t" (§04 ×2, table, timeline) | 85 km Hedri–Konsari (10 MTPA) commissioned; ~195 km Hedri–Ghugus (~16 MTPA) next, saving ₹800–1,000/t | Q1 FY27 presentation [V] |
| Steel plant "first production ~FY28, ~1 MT" (§03 flow, §04, timeline, table, §10) | First 1.2 MTPA long-products / WRM mill by Mar 2027; the larger ISP is unapproved and being re-scoped | Q1 concall [V] |
| "~1.0–1.5× net debt band … no equity planned" (mini-stat, §05 plain) | Consolidated ND ~₹19,000 Cr (~2.3× TTM) vs standalone ₹5,616 Cr; share count +7.6% in FY26; capex ~₹11k Cr/yr then ₹15–20k Cr | presentation; concall [V] |
| Valuation "~27×", "several times book" (§00, mini-stat, §09, bear case) | P/E 21.4×, P/B 7.4×, m-cap ₹1,02,055 Cr at ₹1,812 | screener [V] |
| DRC deal incomplete (§08) | Surya Mines 50% (2,754 t Cu in Q1), Chemaf EP-1 shut, debt restructuring to cut ~40–50% (expected Q2 FY27), Panguna lease, BRPL 49.99% JV with Tata Steel | presentations; concall [V] |
| Promoter "61.65% (Mar 2026)" | 61.61% (Sep 2026) | screener [V] |
| Thriveni "~18%" | Kept, marked "reported … not re-verified"; pledge 16.88% after the Sep 2026 release | filingreader [S] |
| "savings … thousands of crores by FY28" | Group cost savings to surpass ₹2,000 Cr/yr as initiatives mature | presentation [V] |
| FY27 guidance missing | What's new: ore 26 MnT, pellets 7.75–8 MnT, DRI 825 kt | presentation [V] |
| Banned | "Think of Lloyds Metals as" → "Lloyds Metals is"; "call option on battery metals" → "bet on battery metals"; "Both are right" → "Each side has had its turn"; "has a long way to fall" → "can de-rate sharply"; "leaves no room for" → "leaves little cushion for" | — |
| **Bar rows added (2)** | Revenue chart: "Q1 FY27 (one quarter) 7,354"; PAT chart: "Q1 FY27 (one quarter) 1,734" | Q1 FY27 presentation / screener [V] |

## sail.html

| What was wrong | What it says now | Source |
|---|---|---|
| EBITDA "₹13,146 Cr (~11.9%)" (stat strip, §00, chart bar, table) | ~₹12,000 Cr (~10.8%), with screener ₹12,119 Cr noted; FY25 comparative ₹10,646 Cr; ₹6,018/t | BOBCAPS; screener [V] |
| PAT ₹3,233 Cr, basis unstated (dek, What's new, table) | Labelled standalone, with consolidated ₹3,373 Cr (₹2,372 Cr FY25) beside it; the dek uses consolidated | screener / BOBCAPS [V]; standalone [S] |
| Coking coal "~three-quarters imported / ~24% domestic" (×2) | ~85% imported (Q1 FY27); Tasra captive mine from Dec 2026 | SMM / investywise [V] |
| Valuation "~18–21× P/E, ~1.1× P/B, ~₹70,000 Cr (Jul '26)" (stat strip, mini-stats, §10 plain, bull case) | P/E 14.8×, P/B 1.18×, m-cap ₹71,363 Cr at ₹173 (13 Oct 2026); text explains why the P/E fell | screener [V] |
| Q4 EBITDA/t ~₹8,279 | ~₹8,313 (Q1 FY27 ₹10,464 added) | BOBCAPS [V] |
| FII shift missing | GoI 65.00%, FII 7.09% (from ~3%) | screener [V] |
| Generic safeguard (§02, §09) | Final duty schedule added | notification [V] |
| Q1 missing | What's new: EBITDA ₹4,356 Cr, ₹10,464/t, realisation ~₹57,150/t, PAT ₹1,636 Cr, coal ₹21,300/t, total debt ₹21,729 Cr (Jun), ore sales up to 8 MT | SMM; investywise [V] |
| Banned | "Think of SAIL as … half-owned" → "SAIL is, in effect, … majority-owned"; "call option on the next up-cycle" → "a cheap way to own the next up-cycle" | — |

## jindal-stainless.html

| What was wrong | What it says now | Source |
|---|---|---|
| Valuation "~₹57,600 Cr, ₹698, P/E ~17.8×" (stat strip, §00, table) | ₹59,479 Cr, ₹721, P/E 18.1×, P/B 3.0× | screener [V] |
| Promoter "62.04% (Mar 2026)" | 62.54% (Sep 2026); FIIs 20.07% | screener [V] |
| EBITDA/t ₹21,300–21,700, basis unstated (§00, §01, table) | Basis stated: consolidated EBITDA ÷ JSL volume; ~₹16,800 standalone; Q1 ~₹22,900 on the same basis | Q4 FY26 deck [V]; arithmetic [E] |
| Anti-dumping "opened a probe … if imposed" | Hearing 9 Sep 2026; DGTR extended to 28 Mar 2027 (notification 25 Sep); EU safeguard-quota cut hurts more than CBAM | SteelOrbis; concall [V] |
| QCO "periodically extended and fought over" | Relaxation runs to Mar 2027, no reversal expected before then | concall [V] |
| Rathi Super Steel missing | Added to the downstream bullet (~70% utilisation) | concall [V] |
| Indonesia melt shop "(49% JV)"; "capacity now 4.2 MTPA" | Melt-shop holding not confirmed (49% is the NPI JV); "stated melt capacity to 4.2 MTPA as it ramps up in FY27"; the 2023 package is now called "nickel-pig-iron JV" | concall; Q4 deck [V] |
| Q1 missing | What's new: revenue ₹11,279 Cr, EBITDA ₹1,329 Cr, PAT ₹769 Cr, 581 kt (−7.3%, LPG shortage), ND ₹2,950 Cr; FY27 capex ₹2,400–2,600 Cr | Q1 presentation / concall [V] |
| Banned | "Think of JSL as a giant metal kitchen" → "JSL works like a giant metal kitchen"; "The story … will be written in three numbers" → "Three numbers to watch each quarter" | — |

## shyam-metalics.html

| What was wrong | What it says now | Source |
|---|---|---|
| Capex "~₹16,000 Cr, ₹8,600 Cr (~53%) spent" (§00, §07, bull case) | ₹18,785 Cr planned, ₹9,205 Cr (49%) incurred, ~₹9,580 Cr over 3–4 years | Q1 presentation p.37 [V] |
| Chandrapur MoU and Phutamura coal block missing | 9 MTPA, ~₹50,000 Cr non-binding MoU (2 Oct 2026; Phase I 3.75 MTPA); Phutamura (~170 Mt) via Alom Solar (13 Oct 2026); valuation text notes the net-cash risk | BSE releases [V] |
| Capacity table omits the HSM etc. | Added rows: HSM 1.58 MTPA (₹5,400 Cr); pig iron 1.22 → 1.53, plus beneficiation, PFB, SBQ and wagons; renewables 109 → 105 MW; captive power 79% at ₹2.65/kWh | presentation pp.25–35 [V] |
| "Aluminium foil plant nears commissioning" | CCL and CRM commissioned Apr 2026; foil Jul 2026 | concall [V] |
| Valuation "~₹27,000 Cr, ~25×, ~2.3× book" (dek, stat strip, mini-stat, table, §10) | ₹30,621 Cr, P/E 27.3×, P/B 2.66× | screener [V] |
| Only promoter holding cited | 74.59%; DIIs 11.16%, FIIs 5.29% (Sep 2026) | screener [V] |
| Q1 / Q2 missing | What's new: revenue ₹5,455 Cr, EBITDA ₹765 Cr, PAT ₹351 Cr, 13.83 lakh t; Q2 ~15.5 lakh t (+12% QoQ), metallics realisation −9%, stainless 29,847 t | presentation; BSE 6-Oct [V] |
| Banned | "Think of Shyam Metalics as" → "Shyam Metalics runs like"; "Both are valid" → "Each argument has force at a different point in the cycle" | — |
| **Bar rows removed (2)** | Cost-edge chart: "Captive railway sidings (steady)" and "Odisha ore-belt location (location)". Both were qualitative and had no figure. The "Captive power" row label now carries the verified 79% / ₹2.65/kWh | — |

## sarda-energy-minerals.html

| What was wrong | What it says now | Source |
|---|---|---|
| "Owns its coal, its iron ore and its electricity" (dek, bull case) | Thermal coal and power are captive; ore is mostly bought | presentation p.7 [V] |
| "Captive iron ore … insulating" (§06) | 1.5 MTPA Rajnandgaon mine + Surjagad Block-1 licence (May 2025), but only ~0.15 Mt mined in FY26 (−57%) vs ~0.83 Mt of pellets; ~15–20% self-supplied | presentation [V]; share [E] |
| Captive thermal "~130+ MW" | 161.5 MW (Siltara 81.5 + Vizag 80) | presentation p.18 [V] |
| Power "~1,720 MW by FY30" (×3) | ~1,762 MW (thermal 1,362 + RE 400), from 929 MW | presentation p.14 [V] |
| "Quadruple coal mining" with no mines named | Shahpur West 0.6 (end-FY27), Senduri ~0.6, GP IV/5 2.0, Bartunga 2.1 (67% JV, ~end-FY28) → 7.1 MTPA by FY30; PT Tigadaya 49% (1.57 Mt) | presentation; concall [V] |
| "Broadly net-debt-light"; "Leverage crept up" | Net debt ₹215 Cr (Mar) → net cash ₹22 Cr (Jun 2026), liquidity >₹2,500 Cr | concall; presentation [V] |
| Valuation "~₹17,400 Cr, ~15–18×" (stat strip, mini-stat, §09, bull case) | ₹16,622 Cr, P/E 14.8×, P/B 2.26×, near the 52-week low | screener [V] |
| PPAs, Arunachal hydro and others missing | 380 of 710 MW under PPAs at ₹5–6/kWh; 66 MW Arunachal hydro, 74 MW small hydros, ₹300 Cr Vizag WHRB | concall; presentation [V] |
| Q1 missing | What's new: revenue ₹1,608 Cr, EBITDA ₹762 Cr, PAT ₹478 Cr incl. ₹110 Cr Sikkim one-off (underlying ~₹368 Cr); billets −65%, wire rod −69%; Avagudem; Q2 results 31 Oct | presentation; BSE [V] |

## godawari-power-ispat.html

| What was wrong | What it says now | Source |
|---|---|---|
| "~₹16,600 Cr (Jul '26)", "~20–22×, P/B ~2.8×" (stat strip, mini-stat, §08, bull case) | ₹13,962 Cr at ₹207 (52-week low), P/E 17.0×, P/B 2.39×, EV/EBITDA ~10.5× | screener [V] |
| Steel plant listed in the capex; "₹2,000 Cr FY27 capex"; ₹6,000 Cr+ revenue "management-flagged" (§05, timeline, §07) | 1 MTPA steel plant and 250 MW solar in abeyance; FY27 capex ₹1,500–2,000 Cr; the ₹6,000 Cr claim removed (not found); Vision 2030 ₹24,000 Cr ex-steel | Q1 PPT and call [V] |
| BESS "10 GWh, ~₹700 Cr, ~FY27" (§06, §07) | 20 GWh, ₹1,425 Cr (₹501 Cr spent), Q1 FY28, AURIC, EVE Energy cells. The source-list entry is annotated | Q1 PPT p.22–23 [V] |
| Solar "165 → 540 MW" (§00, §06, §07) | 190 MW installed → ~290 MW; 250 MW in abeyance | Q1 PPT [V] |
| Pellets "2.7 → 4.7" listed as a pipeline project | Commissioned (77% in Q1); one of three plants shut Jul–Aug 2026; 4.0 MT guidance at risk | Q1 PPT; call [V] |
| "₹5,381 Cr in FY24, FY25 and FY26 alike" (×3) | ~₹5,400 Cr each year (₹5,455 / 5,376 / 5,381) | PPT; screener [V] |
| Captive ore framed as fully insulating (§03 plain, §08) | Q1 caveat: 0.54 MT mined vs 0.90 MT of pellets; market ore bought; path to full captive supply by FY28 | Q1 call [V] |
| "Wire rod ~0.23 MnT" (table, chart label) | M.S. rounds 0.23 MnT, HB wire 0.10, plus structurals and galvanised fabrication | PPT production table [V] |
| Safeguard generic | Schedule added; indirect benefit only | notification [V] |
| Warrants missing | ₹245 warrants (Nov 2025), first conversion 8 Oct 2026; the price is now below the issue price | BSE [V] |
| **Bar row replaced (count unchanged)** | Revenue chart "FY27E mgmt-flagged 6,000+" (unverified) → "Q1 FY27 (one quarter) 1,750" | Q1 PPT [V] |

## gallantt-ispat.html

| What was wrong | What it says now | Source |
|---|---|---|
| Flour-milling framing (h1, dek, §00, plain box, §01 lead / history / note / table, §05 lead and plain, real-estate note, closing line, bull case) | Heavily qualified. The h1 now reads "the low-cost rebar maker (and the flour-mill question)". The text says the FY26 AR reports a single Iron & Steel ("Steel & Power") segment and no flour business, and that the agro material is group history, not the listed company's earnings. The bull-case flour bullet is replaced with "Captive ore from FY28". Section titles and anchors are unchanged | FY26 AR (BSE) [V] |
| "No captive mine" (§09, bear case) | Three iron-ore blocks as preferred bidder (Todpura ~85 MT; Sonbhadra ~51 MT; 7 MTPA; FY28; ~₹2,000/t uplift); 0% captive today | Q1 PPT; call [V] |
| "₹1,015 Cr … near-doubling … toward 1.3 MT" (stat strip, What's new, §00, §07, bull case, synthesis) | ₹3,000 Cr programme (₹1,500 mines / ₹1,200 steel / ₹300 solar; ₹775 Cr spent); steel 9.93 → 12.29 lakh t (+23%) in H2 FY27. The Gorakhpur table is kept and captioned as part of the programme | Q1 PPT; call [V] |
| "100 MW captive solar" (×6) | 85 MW (7 done, 18 MW Q2 FY27, 60 MW Q4 FY27; ₹300 Cr) | Q1 call [V] |
| "Captive power 78 → 100 MW" (×4) | Group 129 → 160 MW | PPT [V] |
| DRI "~544 KT → 560 KT" (§02 table, flow) | FY26 DRI 914.8 kT (Gorakhpur 577.6 + Kutch 337.1); expansion row relabelled Gorakhpur | FY26 AR; PPT [V] |
| "~₹15,800 Cr", "P/B ~4.8×", "~33×" (stat strip, mini-stat, §08, bear case, synthesis) | ₹14,060 Cr at ₹588, P/E 32.3×, P/B 4.29× | screener [V] |
| "Effectively net-cash" (×5) | Near net-cash: ₹548 Cr WC borrowings vs ₹503 Cr cash → ~₹45 Cr net debt; no term loans | screener; AR; call [V] |
| Q1 missing; events | What's new: revenue ₹1,146 Cr, EBITDA ₹203 Cr, PAT ₹124 Cr (−29%), EBITDA/t ₹8,787 vs ₹11,068; ₹2 dividend (30 Sep AGM); BSE volume query 13 Oct; Q2 results 19 Oct | Q1 PPT; BSE [V] |
| Safeguard generic (§09) | Schedule; India briefly a net importer despite it; industry sought anti-dumping action | call [V] |
| EBITDA reconciliation note | Agro/real-estate mention removed; the gap is now attributed to other income (~₹59 Cr) | screener; PPT [V] |
| **Bar rows added (3)** | Revenue chart "FY24 4,227"; PAT chart "FY24 225" and "Q1 FY27 (one quarter) 124" | screener; Q1 PPT [V] |

## nmdc-steel.html

| What was wrong | What it says now | Source |
|---|---|---|
| "~2.33 MT Crude steel" (stat strip, What's new, timeline, chart, mini-stat, bull case) | Crude (liquid) 2.43 MT (~81%); HRC 2.33 MT; hot metal 3.07 MT | BSE filing via investywise [V] |
| "~₹12,700 Cr (mid-2026)", EV "~₹17,300 Cr" (stat strip, §09 lead, EV chart, legend, bull case) | ₹11,776 Cr; ND ~₹3,813 Cr; EV ~₹15,600 Cr; P/B 0.89×; P/E ~141× | screener [V]; EV [E] |
| Timeline "EoI stage underway" | Past the EoI stage (multiple EoIs in 2023). Reports say it awaits a go-ahead for financial bids. Marked "status not confirmed from a DIPAM source" | Outlook Business; indiaseatradenews [S] |
| GoI "~60%+, approx." | 60.79% (FII 5.48%, DII 15.78%); NMDC Ltd holds none | screener; MoS [V] |
| "In 2023 that plant was carved out" | Demerger effective 13 Oct 2022; listed early 2023 | MoS annexure [V] |
| Sales "~74% to ~2.46 MT" (mini-stat, §06) | Mini-stat replaced; §06 says "reportedly ~2.46 MT … not confirmed" (the filing gives only HRC sales value ₹11,609 Cr) | BSE [V]; volume [unverified] |
| FY25 revenue "~8,530 (implied)" | 8,503 (screener) | screener [V] |
| Q1 missing | What's new and revenue legend: revenue ₹3,662 Cr, OP halved to ₹400 Cr, PAT ₹51 Cr; tonnage not verified | screener [V] |
| **Bar row added (1)** | Revenue chart "Q1 FY27 (single quarter) 3,662" | screener [V] |

## jayaswal-neco.html

| What was wrong | What it says now | Source |
|---|---|---|
| Mines "roughly 3.95 MTPA" (§00, §01 flow, §04 lead, mini-stat) | 7.0 MTPA (Metabodeli 1.0 + Chhotedongar 6.0, enhanced 2026); ~3.7 MT mined FY26 | Q1 FY27 PR [V] |
| Castings "~140,000 t … India's largest" (dek, §00, flow, §06 lead, synthesis) | ~75,000 TPA (49 kt FY26); "one of the largest ferrous casters" | PR [V] |
| Plain "steel and long products" | Alloy / special steel (alloy bars, wire rods, bright bars; Tier-2 to all major OEMs) | PR [V] |
| "Nagpur-based" (dek) | Nagpur-headquartered; integrated plant at Siltara, Raipur (Chhattisgarh) | PR [V] |
| "~₹8,970 Cr", "~19×" (stat strip, §00, mini-stat, §10, bull case) | ₹9,325 Cr, P/E 16.3×, P/B 3.27×, EV/EBITDA ~8× | screener [V] |
| Net debt "~₹2,300 Cr post-refi" (stat strip, §00, §03, timeline, debt chart, §07, §10, bear case) | Secured debt ₹1,884 Cr (Jun 2026; NCDs ₹1,441 + WC ₹443); ₹2,118 Cr Mar 2026; screener ND ₹1,842 Cr. Debt-chart row → "Jun 2026 1,884" | PR; screener [V] |
| "Dec-2025 refinancing, 17.5% → 12.5%" (What's new, §00, timeline, §07, sources) | "2025 NCD refinancing at significantly lower costs"; 17.5 → 12.5% marked "reported, not confirmed in company documents" | PR [V]; rates unverified |
| Interest FY26 "~400", FY27 "~288" (chart, §07, §10, note) | FY26 ₹427 Cr; FY27 run-rate ~₹264 Cr (Q1 ₹66 Cr × 4) | screener; PR [V]/[E] |
| "Profit nearly doubled" (₹113 → ₹463 Cr) (dek, timeline, §07 h2 text and lead, synthesis) | "Quadrupled"; attribution corrected (EBITDA +41% after the FY25 BF shutdown, plus lower interest). The §07 anchor and TOC entry are unchanged | screener; PR [V] |
| Promoter "~60%+, approximate — held" | 55.15% (Jun 2026); FII 1.32%, DII 0.78% | screener [V] |
| Pellet plant, BF/DRI upgrades, Q2 date, founder retirement missing | New 2026 timeline item; What's new: 1.5 MTPA pellet plant ₹720 Cr (closure 1 Oct 2026), BF 0.75 → 1.0 MTPA, DRI 0.35, 104 MWac solar; Q2 results 16 Oct | BSE 1-Oct; PR [V] |

## jai-balaji-industries.html

| What was wrong | What it says now | Source |
|---|---|---|
| Stat strip "~2.74 MTPA Aggregate capacity" (also §02 lead, §06) | Stat cell → "~42% Value-added share (Q1 FY27)"; text gives product capacities; ~2.3 MTPA marked an estimate | Q1 PPT p.18–19 [V]; sum [E] |
| "~₹6,450 Cr (mid-2026)"; "low-20s P/E" (stat strip, mini-stat, §10 ×2) | ₹5,972 Cr; standalone P/E ~41× (40.8×), P/B 2.64×, EV/EBITDA ~17–18×; screener's consolidated P/E flagged as stale | screener standalone [V] |
| Value-added "~55% … ~80% within 18 months" (×9 incl. chart) | 40–45% (42% in Q1 FY27); plant-design aim ~70% | Q1 PPT p.7; call [V] |
| "₹1,000 Cr Durgapur brownfield" (What's new, §08 lead and table, bull case) | Revised to ₹1,112 Cr; ₹1,076 Cr spent; BF / sinter / ferro (1.66 → 1.9 lakh t) in Q3 FY27 | Q1 PPT; CRISIL [V] |
| Quarterly PAT "Q2 ~₹37 Cr, Q3 ~₹31 Cr" (×2) | Q2 ~₹26 Cr, Q3 ~₹12 Cr, Q4 ~₹21 Cr | screener [V] |
| CRISIL downgrade missing | What's new, plus a timeline item (Sep 2026): BBB/Stable / A3+ from BBB+ / A2 | CRISIL [V] |
| "Near debt-free" (dek, §00 plain, §05, mini-stat, §11, bull case, peer table, synthesis) | "Low-debt": net term debt ₹188 Cr + ₹375–400 Cr WC; screener ND ₹357 Cr (~1× EBITDA). Debt chart re-based to company net term debt (3,150 / 871 / 398 / 188 Jun 2026) | Q1 PPT; screener; CRISIL [V] |
| "Wire rods, heavy rounds" (×4) | Removed; "TMT, billets (plus OPVC pipe)"; notes no wire-rod or heavy-round line | Q1 PPT p.18–19 [V] |
| No FY26 ROCE | ROCE ~10%, ROE ~5.9% added (legend and bar) | screener [V] |
| Promoter creep missing | 64.84%, up from 50.98% (FY22) via warrant conversions | screener [V] |
| Safeguard / imports not concrete | Safeguard schedule (flat steel, so an indirect benefit); FY26 driver was JJM/AMRUT order flow | CRISIL; call [V] |
| Q1 missing | What's new: revenue ₹1,683 Cr, adjusted EBITDA ₹154 Cr, PAT ₹85 Cr; ferro ₹1.88 lakh/t (+46%); DI use ~30% | Q1 PPT; call [V] |
| **Bar row added (1)** | Profit chart "ROCE FY26 (ROE ~5.9%) ~10%" | screener [V] |
| Bar values changed | Revenue-ladder chart re-based to the Q1 FY27 mix (42 / 18 / 35+; aim 70%); debt chart as above | call; PPT [V] |

---

## Left unchanged or phrased carefully (unverified)

- **JSW:** the Q2 results date of ~23 Oct is from a snippet, so it is written as "reported board date". The normalised P/E is given only as "roughly mid-20s" [E]. The Supreme Court BPSL dates [K] are unchanged.
- **Tata Steel:** the ~€2bn Dutch support [K], the Port Talbot late-2027 timing [K] and the Q2 H1 totals [S] are unchanged and were not added. The "(~$172)" in the §10 mini-stat is not in the stat strip and was left as is.
- **Jindal Steel:** captive ore % [K] is unchanged. The FY25 ND/EBITDA of ~1.72× in the §08 chart is unverified and was left as is. The BF ramp to 13,000 t/day [S] was not added.
- **SAIL:** standalone PAT of ₹3,233 Cr is [S]. It is kept but labelled standalone, with consolidated beside it. The PBT row and the FY22–FY24 bars in the profit chart are unchanged, with mixed bases noted in the legend. The screener ₹31.2k Cr vs company ₹21.7k Cr debt gap is unreconciled, so ₹21,729 Cr is shown only as "company total debt (Jun 2026)".
- **NMDC Steel:** FY26 sales of ~2.46 MT are kept as "reportedly … not confirmed". Q1 FY27 tonnage is not added. Disinvestment status beyond snippets is phrased as "reports say … not confirmed from a DIPAM source".
- **Lloyds:** Thriveni's ~18% stake is kept as "reported … not re-verified". The mechanism behind the share-count increase is not stated.
- **Jindal Stainless:** the Indonesian melt-shop ownership % is not stated (the 49% is attributed to the NPI JV). India-only melt of ~3.0 MTPA is not added. Rathi's acquisition year [K] is not added.
- **Shyam:** exact Mar-26 gross debt (the primer's ~₹957 Cr) and the PMLA matter are unchanged and were not re-checked. The FY26 segment revenue % chart is unchanged; the dossier read it off a chart.
- **Sarda:** the ~15–20% ore self-sufficiency is marked as an estimate. Indonesian coal JV capacity and Sep-26 shareholding were not added.
- **GPIL:** the promoter-pledge status [S] was not added.
- **Gallantt:** the Gallantt Trust details (Mar 2026) [S] are kept as before. The content of the 13 Oct BSE reply was not read, so only the query is mentioned. The §01 and §05 section titles ("Steel and atta…", "The wheat-flour business") and their TOC entries are unchanged to preserve the section list and anchors; their content is qualified.
- **Jayaswal Neco:** the 17.5% → 12.5% refinancing rates and the December date are marked "reported, not confirmed". The India Ratings rationale and the 6 Oct SAST disclosure were not read. FY26 revenue of ₹7,132 Cr (company net sales) is kept; screener's ₹7,085 Cr is on a different basis.
- **Jai Balaji:** FY26 volumes are reconstructed [E] and were not added. The ~2.3 MTPA aggregate is marked as an estimate.
- **Pre-existing HTML quirks, not introduced here and left untouched:**
  - lloyds-metals §04: `<div class="timeline">` is closed by `</ul>`.
  - nmdc-steel ~l.430 and jayaswal-neco ~l.423: a `note` div is closed by `</p>`.

## Final audit (`node subsectors/_template/primer-audit.mjs "Iron & Steel || Iron & Steel"`)

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| jsw-steel.html | 87 | 8199 | 20 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| tata-steel.html | 91 | 8641 | 18 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| jindal-steel.html | 80 | 7215 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| lloyds-metals.html | 68 | 5937 | 11 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| sail.html | 69 | 5594 | 19 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| jindal-stainless.html | 71 | 5735 | 17 | 12 | 12 | 0 | 2026-06-30 | ✅ | — |
| shyam-metalics.html | 74 | 5986 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| sarda-energy-minerals.html | 63 | 5236 | 13 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| godawari-power-ispat.html | 63 | 5390 | 15 | 9 | 11 | 0 | 2026-06-30 | ✅ | — |
| gallantt-ispat.html | 70 | 6580 | 10 | 8 | 11 | 0 | 2026-06-30 | ✅ | — |
| nmdc-steel.html | 73 | 6881 | 14 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| jayaswal-neco.html | 73 | 6776 | 18 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| jai-balaji-industries.html | 71 | 6299 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks. The "Report links" and "Refreshed" columns come from files outside this phase's scope (the sub-sector page and data JSON), so they were not changed.

A separate case-insensitive grep outside `<style>` blocks found zero hits for "think of", "priced for perfection", "a long way to fall", "no room/margin for error", "grow into the/its multiple", "call option", "will be written in", "the bull owns", "both can be right", "both are true at once", "both are right" and "both are valid". "honest" appears at most once per primer: sail, jindal-stainless, shyam, gallantt, nmdc and jai-balaji have 1 each; the others have 0. `main{min-width:0;}` is present in all 13.
