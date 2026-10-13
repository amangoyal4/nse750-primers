# Heavy Electrical Equipment — member-primer fixes (Phase 3)

Sub-sector key: `Capital Goods || Heavy Electrical Equipment`. Refresh date: **13 Oct 2026**.

The 13 member primers in `primers/` were edited in place. These were targeted edits, not rewrites. Sources:
- `_cloud/heavy-electrical-companies-1.md` and `_cloud/heavy-electrical-companies-2.md`, each with its PRIMER ISSUES block.
- `_cloud/heavy-electrical-industry.md`, COMPANY-KPI APPENDIX (K1/K3). Market data in the appendix is the Screener 13 Oct 2026 close.

**Hygiene applied to every primer:**
- Added `main{min-width:0;}` as the first rule in the first `<style>` block.
- Set the refresh bar (`#rb-when`) to 13 Oct 2026 and changed its source line to name the latest quarter.
- Rewrote the What's new box around the latest quarter.
- Removed or rephrased every banned phrase, including all "Think of …" openers and glib "X is the Y of Z" analogies.
- Brought "honest" down to at most one use per file.

**Left unchanged:**
- Page structure, section ids and anchors, and the TOC.
- The stat-strip layout. No USD was added to any strip.
- The back button, the PDF button and print CSS, and the `.ss-link` count. These primers have 0 `.ss-link` banners, the same as HEAD.
- The number of charts. Bar rows stay between 10 and 20 in every file.

Section-id sets and open/close tag balance (div, section, table, svg, ul, li, ol, p, strong, em, tr, td) were checked against `git show HEAD:primers/<file>`. All match.

Note for the orchestrator: the audit's "Refreshed" column reads `data/primers.json`, which is out of scope here. It still shows the old dates and needs updating to 2026-10-13 when the catalog is regenerated.

---

### hitachi-energy-india.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹1.53 L Cr (Jul '26)" (strip) | ~₹1.35 L Cr (13 Oct '26) | screener 13-Oct-26 / K1 |
| P/E "~150×" (dek, §00, §10 sub, lead, mini-stat "~148–158×", bear case, bottom line) | ~114× trailing (as of 13 Oct 2026); text notes it was ~150× in July | screener / K1 |
| P/B "~29× book" | ~26× (as of 13 Oct 2026) | K1 (26.1×) |
| Backlog ₹29,555 Cr (Mar '26) in strip, §00, bull case | ₹32,222 Cr (Jun '26), ~3.5× trailing revenue (FY26 chart kept as the Mar-26 historical) | Q1 FY27 deck |
| Missing Q1 FY27 | What's new and new timeline item: revenue ₹2,493.7 Cr (+68.6%), op. EBITDA 16.0%, PAT ₹294.2 Cr (+123.5%), orders ₹5,096.5 Cr (−55%; +26% ex-HVDC); margin-chart legend notes Q1 16.0% | Q1 FY27 deck, BSE 5158b364 |
| Capex: "₹2,000 Cr … completion around FY28" | Additional ₹2,000 Cr, cumulative ₹4,000 Cr; groundbreaking 12 Jun 2026; completion Dec 2028 (FY29); bull case says ₹4,000 Cr | Q4 FY26 / Q1 FY27 decks |
| Exports "30–37% of quarterly order intake" (§03, §07) | ~25% of revenue ("trending 25–26%") per management; adds ~₹1,700 Cr offshore-wind HVDC export order | Q1 FY27 transcript |
| Ownership "FIIs ~11.7%, DIIs ~7%" | Promoter 71.31%, FIIs ~12.0%, DIIs ~6.5% (Sep 2026) | screener |
| Missing royalty quantum | ₹241.85 Cr royalty to Hitachi Energy Ltd in FY26 (~3% of revenue) | AR FY26 |
| Missing RPT postal ballot, BESS order, HVDC export order | Added to What's new and timeline (postal ballot 12 Oct 2026; 165 MW / 330 MWh BESS; ~₹1,700 Cr offshore-wind HVDC) | BSE 593b8615; Q1 deck |
| Refresh bar "01 Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |
| Banned: "Think of" ×2 | "Picture the power grid as…"; "In effect it is…" | hygiene |
| Banned-style phrases: "priced for near-perfection", "long way to compress", "little room for error", "grow into even a demanding multiple … long, long way to fall" | Rephrased: "already assumes near-flawless delivery", "already assumes a great deal", "earnings growth can steadily bring the multiple down … can de-rate hard" | hygiene |
| "honest" ×2 | 0 ("No primer…", "The fair framing") | hygiene |
| Glib analogy in H1 "the picks-and-shovels of the grid boom" | "the equipment maker behind the grid boom" | hygiene |
| 21 bar-rows | 20: removed the qualitative "Service · Sticky" row from the "four business lines" chart (the title already said four); service is now described in the legend | brief |

Not changed (unverified): transformer MVA capacity (not verified this session).

### bhel.html
| What was wrong | What it says now | Source |
|---|---|---|
| "Record order inflow ₹75,916 Cr" (What's new, §01 table, timeline, §05 mini-stat) | FY26 inflow ₹75,916 Cr was −18% YoY; FY25 ₹92,535 Cr was the record (the record is the order book) | BHEL Q4 FY25 / Q4 FY26 supplementary info; K3-2 |
| Financials table inflow FY24 "~52,000+", FY25 "~74,000+" | FY24 77,907; FY25 92,535 (timeline also updated) | Q4 FY25 supplementary info |
| M-cap "~₹1.44 lakh Cr (Jul '26)" | ~₹1.54 lakh Cr (13 Oct '26) | screener / K1 |
| P/E "near 90" (dek, §00, §06 note, §10 lead/table/plain, bear, bottom line) | ~63× trailing (13 Oct 2026); ~98× on FY26 profit alone; forward framing restated at ~₹442 (~34–37× FY28E) | screener / K1; arithmetic |
| Order book "₹2.4 lakh Cr (Mar '26)" headline (strip, dek, §00, §01, §05, §08, bull) | About ₹2.6 lakh Cr (Jun '26); Mar-26 ₹2.4 lakh Cr kept where historical (segment chart, timeline) | JM Financial 16-Jul-26 note |
| Missing Q1 FY27 | Revenue ₹7,698 Cr (+40%), EBITDA 6.5%, PAT ₹377 Cr vs ₹456 Cr loss (first positive Q1 in 8 yrs), inflow ₹26,745 Cr (What's new, timeline, §01, bull) | screener; JM Financial |
| Missing Dangote order | 8 GTGs for Dangote (Nigeria) ₹2,000–2,500 Cr, largest-ever export order (MUNPL/Meja ₹21,000 Cr already present) | JM Financial |
| Promoter "~59%" vs "~58.2%" muddle | 58.2% consistently (58.17% Mar–Sep 2026) | screener |
| "Light on debt"; WC "~79 days" | Borrowings ₹8,187 Cr vs cash ₹11,867 Cr (net cash ≈ ₹3,680 Cr); WC ~86 days (Screener), ~164 days (JM); receivables + contract assets ₹38,613 Cr | screener; BHEL deck; JM |
| EBITDA basis unstated (₹2,342 Cr) | Footnote: JM basis; company standalone ₹3,189 Cr (9.4%); Screener ₹2,572 Cr (7.6%) | BHEL deck; screener; JM |
| ROCE "~8.5%" | ~9.1% | screener |
| "Net margin under 2%" (dek, §00, §05, bear) | About 5% in FY26 (under 2% the year before) — kept true to FY26 PAT/revenue | arithmetic on FY26 figures |
| Results calendar missing | What's new: Q2 FY27 board meeting 14 Oct 2026 | BSE 368d56ed |
| Refresh bar "2 Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |
| Banned: "Think of BHEL…" | "Picture BHEL as…" | hygiene |
| "a ~90× stock has a very long way to fall"; "Both can be true." | "the share price has to come down to meet them"; "the lens decides the verdict" | hygiene |
| "honest" ×7 (incl. "dishonest", HTML comment, h2) | 1 (kept "The honest read" in §06); h2 now "the uncomfortable part", "candid", "real risk", "misleading", "The limit" | hygiene |

Not changed (unverified):
- Q1 power-sector split (₹22,625 Cr) and the exact order book (₹2,60,255 Cr). The ~₹2.6 lakh Cr headline is from the JM broker note, not a company filing.
- The 5-point OFS details.
- CMD name.
- FY28E EPS of ₹12–13 (broker figure, left as is).
- "9.6 GW (~₹52,000 Cr) in FY24" thermal-order value (not flagged).

### siemens-energy-india.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹1.25 L Cr (Jul '26)" | ~₹1.12 L Cr (13 Oct '26) | screener / K1 |
| P/E "~90×" (dek, §00, §12 sub/lead/mini-stat/plain/note, bear, bottom line); P/B ~26× | ~73× trailing (13 Oct 2026; ~90× in July); P/B ~23× | screener / K1 |
| Missing latest quarter (Oct–Sep FY) | Q3 FY26 (Apr–Jun 26): revenue ₹2,486 Cr (+39.3%), PfO 21.9% (+430 bp), PAT ₹441 Cr (+67.8%); 9M ₹6,791 Cr (+31.1%) — What's new, timeline, financials table note, new margin-chart row | Q3 results, BSE 8a59a0ba |
| Backlog ₹18,433 Cr (Mar '26) in strip, §00, bull | ₹19,331 Cr (Jun '26; PT ₹13,490 Cr, PG ₹5,840 Cr), ~2.0× trailing revenue | Q3 deck |
| "Three broad segments … Industrial Applications" | Company reports two segments (Power Transmission, Power Generation); industrial applications sit within Power Generation (h2, lead, demerger table, menu, §09 text) | Q3 FY26 segment statement |
| "19.3% EBITDA Op. margin (FY25)" basis unclear | Strip now "18.0% EBIT · Profit from ops (FY25)" (company); body/table label 19.3% as Motilal Oswal basis, Screener OPM 19.6% | Q3 FY26 statement; screener |
| Institutions "DIIs ~8%, FIIs ~6%, public ~11%" | FIIs ~7.7%, DIIs ~6.4%, public ~10.8% (Jun 2026) | screener |
| Capacity detail | Kalwa 15,000 → 30,000 MVA; Aurangabad (Chhatrapati Sambhajinagar) switchgear; greenfield site not yet chosen | Q2 FY26 transcript |
| Exports qualitative | 28.4% of 9M FY26 revenue (21.4% a year earlier) | Q3 deck |
| Missing litigation | 9 Oct 2026 Russian Supreme Court rejection; ₹44.38 Cr + 8% interest payable (What's new, timeline) | BSE 16567cb4 |
| Calendar note said latest quarter is Q2 (Mar) | Latest quarter Q3 FY26 (Jun 2026); Q4/audited FY26 due ~Nov 2026 | — |
| Refresh bar "02 Jul 2026" | 13 Oct 2026 · Q3 FY26 | — |
| Banned: "Think of" ×2; "a long way to fall"; "priced for near-perfection"; "grow into even a demanding multiple"; "little room for error" | Rephrased ("Picture…", "In effect it is…", "already assumes near-flawless delivery", "earnings growth can steadily bring the ~73× multiple down", "already assumes a great deal") | hygiene |
| "honest" ×2 | 0 | hygiene |

Not changed (unverified):
- FY25 order intake "~₹13,100 Cr". The company does not disclose order intake; the figure is cited to a Motilal Oswal note.
- The promoter-entity split (Siemens AG ~69% / Siemens Energy AG ~6%).
- Parent licence fees.

### siemens-limited.html
| What was wrong | What it says now | Source |
|---|---|---|
| "Reports on a September fiscal year … latest full year FY25 ended 30 Sep 2025" (§00, §01 note, §08 ABB comparison) | Switched to April–March; 18-month transition FY Oct-24 → Mar-26 (continuing revenue ₹24,846 Cr; ~₹17,457 Cr for Apr-25 → Mar-26); FY27 = Apr-26 → Mar-27; latest quarter Q1 FY27 = Apr–Jun 2026 | Q6 FY26 deck p7, BSE 69211f8e; screener; K3 |
| Strip revenue "₹17,364 Cr (FY25, Sep)" | ₹18,062 Cr (TTM to Jun '26, cont. ops) | screener / K1 |
| Backlog ₹42,253 Cr (Sep '25) — strip, dek, §00, §04 mini-stats, §07, bull | ₹46,670 Cr (Jun '26); ₹45,030 Cr (Mar '26); ~2.6× trailing revenue | Q6 deck; press release 11-Aug-26 |
| Missing Q1 FY27 and LVM gain | Orders ₹6,328 Cr (+16.5%), revenue ₹4,714 Cr (+14.8%), PfO 7.6%, continuing PAT ₹343 Cr, one-time ₹2,099 Cr LV Motors gain (discontinued ops) — What's new, timeline, quarterly chart (new Q1 FY27 bar), §04 mini-stat | press.siemens.com 11-Aug-26; K3 |
| FY25 quarterly bars on pre-LVM basis | Chart sub now labels basis; restated Jun-25 ₹4,108 Cr / Sep-25 ₹4,900 Cr given | screener quarters; Q1 PR |
| M-cap "~₹1.29 L Cr (Jul '26)" | ~₹1.33 L Cr (13 Oct '26) | screener / K1 |
| Margin narrative "~11% … room to expand" (strip, mini-stat) | Strip 7.6% PfO (Q1 FY27); EBITDA 9.7% in Jan–Mar 2026 quarter (−287 bp) and PfO 7.6% in Q1 FY27 on commodities/INR | Q6 deck; Q1 PR |
| Valuation "~50× forward, ~9× book" | ~88× trailing (~90× on continuing profit), P/B ~9.6× as of 13 Oct 2026; broker forward ~50× FY27E noted as mid-2026 context | screener / K1 |
| Missing board change | 1 Oct 2026: Matthias Rebellius resigned; Veronika Bienert appointed Siemens AG nominee | screener announcements |
| Licence fee unquantified | ₹147 Cr (0.52% of turnover) for the 18-month FY | AR, BSE af1c888d |
| Cash flow omitted | 18-month CFO −₹535 Cr (inventory build, loco contract assets) | screener; transcript |
| Refresh bar "02 Jul 2026" | 13 Oct 2026 · Q1 FY27 (new Apr–Mar year) | — |
| Banned: "Think of"; "grow into even a demanding multiple … a long way to fall"; "long way to compress"; "little room for error" | Rephrased ("Picture…", "earnings growth can steadily bring the multiple down", "de-rating can be sharp", "already assumes a great deal") | hygiene |
| "honest" ×3 | 1 (kept "The honest nuance") | hygiene |
| (bars: 10 → 11 via the new Q1 FY27 quarter bar) | — | — |

Not changed (unverified):
- The 12-month Apr-24 to Mar-25 comparable.
- The LVM sale EV of ~₹2,200 Cr and 50.5× EBITDA (primer figures).

### ge-vernova-td-india.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹1.22 L Cr (Jul '26)" | ~₹1.07 L Cr (13 Oct '26) | screener / K1 |
| P/E "close to 100×" / "95–100×" (dek, §00, mini-stat, plain, bear, bottom line) | ~79× trailing (13 Oct 2026; ~₹1,305 Cr TTM PAT) | screener / K1 |
| Missing Q1 FY27 | Orders ₹1,137 Cr (−30%; 54% exports), revenue ₹1,836 Cr (+38%), gross margin 41.3%, EBITDA ~25.1%, PBT ₹487 Cr, PAT ₹363 Cr (What's new, timeline, §00, §07 legend) | Q1 deck BSE 4daef405; screener |
| Backlog ₹21,456 Cr (Mar '26) in strip | ₹20,930 Cr (Jun '26; −2.5% QoQ; 77% private / 21% central/PSU / 2% state); Mar-26 kept as history | Q1 deck |
| OFS arithmetic "sold ~8.3% … toward ~51% (from ~75%)" | 75% (Jun-24) → 59.38% (Sep-24) → 51.00% (Dec-24): ~24 points across OFS tranches | screener shareholding |
| Promoter-entity split "~68.5% of block / ~6.5%" (didn't sum) | 51.00% total held through group entities incl. Grid Equipments and GE Grid Alliance BV (split removed) | screener |
| Capex "₹550 Cr Vallam facility" | ~₹1,000 Cr+ (₹10.1 bn+) across Vadodara (+50% transformers/reactors), Hosur, Padappai, Pallavaram, Noida HVDC valves and Vallam, phased to Dec 2028; Vallam row relabelled as part of it | Investor deck 17-Sep-26 |
| "Effectively net cash" without caveat | Notes ₹2,930 Cr "available cash" includes lending to LM Wind Power Blades (India) via group cash pool | Q1 deck p13 |
| Licence fee missing | ₹117.8 Cr in FY26 (₹63.7 Cr FY25) | AR FY26 |
| Guidance / RPT status | Mid-20s EBITDA for FY27; US data-centre RPT order not yet booked | Q1 transcript |
| Ownership drift | FIIs ~22.9% (from ~13% Mar-25), DIIs ~18.5% (from ~28%) | screener |
| Calendar | Q2 FY27 board meeting 30 Oct 2026 | BSE fc809859 |
| Refresh bar "02 Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |
| Banned: "Think of"; "grow into the multiple"; "Both can be right"; "priced for perfection" ×2 (incl. cited headline); "a long way to fall"; "zero room for error"; "The story … will be written in" | Rephrased / headline trimmed to "GE Vernova T&D jumps 2800% in 3 years (valuation coverage)" | hygiene |

Not changed (unverified):
- FY26 order intake of ~₹14,776 Cr and Q4 FY26 intake of ~₹8,614 Cr. The legend now flags them as company-chart readings that were not re-verified.
- The site-wise capex split beyond the list above.
- The GVT&D promoter-entity percentages.

### thermax.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹54,900 Cr (Jul '26)"; "Stock ~₹4,608" | ~₹39,293 Cr (13 Oct '26); ~₹3,299 (−28%) | screener / K1 |
| P/E "around 80×" (§00, §06, §07 note, §10 lead/table/plain, bear) | ~71× trailing (13 Oct 2026, on depressed TTM PAT ~₹591 Cr); P/B ~7.1× (was 9.9×) | screener / K1 |
| Missing Q1 FY27 profit collapse | Revenue ₹2,303 Cr (+7%), PBT ₹42 Cr (1.8%), PAT ₹22 Cr (−86%), ₹91 Cr cost-to-complete provision, Infra PBIT −₹71 Cr (What's new, §00, timeline, table, bear, bottom line) | Q1 deck BSE 11476949 |
| Order book ₹13,604 Cr (Mar '26) in strip, §04, bull | ₹14,045 Cr (Jun '26, +23%, incl. ₹139 Cr TOESL method uplift) | Q1 deck |
| "Low debt / rock-solid / fortress balance sheet" | Borrowings ~₹2,353 Cr (₹831 Cr FY23), CWIP ~₹1,442 Cr, FY26 FCF −₹401 Cr, net debt ~₹1,160 Cr; bull bullet now "Aligned owner — manageable debt" | screener |
| ROCE / ROE "~15% / ~13%" | ~13.9% / ~10.6% | screener |
| Corporate events missing | FEPL growth-partner evaluation (Basant Jain FEPL CEO; 9 Oct 2026); TSA Process Equipments remaining 49% for ₹42 Cr (30 Sep 2026) | BSE 5ee5b8f5, bbcbd0fe |
| Revenue basis | ₹10,694 Cr company basis; Screener ₹10,774 Cr noted | Q1 deck; screener |
| Calendar | Q2 FY27 board meeting 5 Nov 2026 | BSE 8bfcba00 |
| Refresh bar "4 Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |
| Banned: "Think of Thermax as…"; "grow into the multiple"; "priced for perfection"; "call option(s)" phrasing; "next chapters will be written in" | Rephrased | hygiene |

Not changed (unverified):
- FY26 order inflow "~₹13,871 Cr" (+34%).
- The ~₹1,600 Cr ultra-supercritical boiler order.
- "Q4 +112%" (the Q4 ₹4,490 Cr itself is verified).
- CMD and MD names.

### schneider-electric-infrastructure.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹35,546 Cr (2026)" | ~₹28,917 Cr (13 Oct '26), −19% | screener / K1 |
| "~160× earnings and ~46× book" (dek, §00, §03 note, §08 lead/mini-stats/plain, §09, bear, bottom line) | ~149× trailing, ~42× book (as of 13 Oct 2026; TTM PAT ~₹184 Cr) | screener / K1 |
| Missing Q1 FY27 | Record order intake ₹915 Cr (+0.5%), revenue ₹651 Cr (+4.7%), EBIT ₹32 Cr, PAT ₹12 Cr (−71%) (What's new, timeline, §05, §08, bear) | Q1 transcript BSE 5b2cb591; screener |
| Backlog ₹1,911 Cr (strip and growth-lever sections) | About ₹2,100 Cr+ (Jun '26, +~33%); ₹1,911 Cr kept as Mar-26 history | Q1 transcript |
| Borrowings "~₹548 Cr" (×3) | ₹633 Cr (Mar-26), cash ₹358 Cr | screener |
| Royalty drag overstated ("typically pays royalty / technical fees") | Royalty only ₹0.60 Cr FY26 (₹0.51 Cr FY25); group purchases and recharges are the real RPT channel (§03, §09, bear) | AR FY26 note 27 |
| ROE "~36%" | ~38% (38.2%), ROCE 29.6% | screener |
| Margin-squeeze causes generic | Adds legacy fixed-price orders booked before Dec-25, INR depreciation on USD imports, Kolkata-plant depreciation | Q1 transcript |
| Product-scope caveat missing | No transformers at 400 kV and above — distribution / MV, not EHV (§03 note, bear, What's new) | Q1 transcript |
| Events missing | CGST appellate order upheld ₹3.25 Cr demand (28 Sep 2026); rumour clarification (1 Oct 2026) | screener announcements |
| Exports missing | 10–12% of revenue; Kolkata plant aimed at exports | Q1 transcript |
| Refresh bar "Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |
| Banned: "Priced for perfection" ×2; "no margin for error" / "near-zero margin for error"; "Think of"; "a very long way to fall"; analogies "picks-and-shovels of …" ×2 and "the equivalent of 'demographics' for a hospital or 'China' for a solar maker" | Rephrased | hygiene |
| "honest" ×2 | 1 ("told straight"; kept "The honest read on FY26") | hygiene |

Not changed (unverified):
- FY26 order intake of ₹3,430 Cr and the Mar-26 backlog of ₹1,911 Cr (primer figures; the company deck slides are images).

### triveni-turbine.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹19,400 Cr (Jul '26)" | ~₹16,628 Cr (13 Oct '26) | screener / K1 |
| P/E "north of 50×" / "50×+" (dek, §00, mini-stat, plain, risks, bear) | ~48× trailing (13 Oct 2026) | screener / K1 |
| Missing Q1 FY27 | Revenue ₹442.7 Cr (+19.2%), EBITDA 18.0% (25.8% LY), PAT ₹51.1 Cr (−20.6%), orders ₹568 Cr (+6.1%, 68% exports) (What's new, §09 table row, risks, bear) | Q1 deck BSE 209b2785 |
| Order book ~₹2,054 Cr only | ₹2,180 Cr at Jun-26 (+5.1%); aftermarket ₹624 Cr (+115%) | Q1 deck |
| Installed base "5,000+ turbines · 70+ countries" (strip, dek, §00, §02, §04, §05, §06 mini-stat, bull) | 6,000+ installations in 80+ countries, 16+ GW | Q1 deck slide 3 |
| RoCE "~28%" (dek, §00, §09, bull) | ~34% (Screener; company deck 36%) | screener; Q1 deck |
| "Exports ~52% of intake" | Q4 FY26 export bookings 69%; the ~51% refers to the export share of the closing order book | Q4 FY26 deck BSE 282b25f3 |
| Margin-reset drivers missing | NTPC CO₂-storage order at "near zero margins" (~₹175 Cr left), 3–4× freight costs, US subsidiary loss | Q1 transcript BSE 06048a54 |
| Management change missing | CEO S.N. Prasad; COO Sachin Parab resigned effective 1 Oct 2026 | BSE 657fc4f2 |
| "Negative working-capital intensity in good years" | WC days +71 in FY26 (−39 FY24), debtor days 107, FY26 CFO ₹111 Cr | screener |
| Guidance missing | FY27 growth back-ended, H2 margin recovery, medium-term PBT margin >20% | Q1 deck/transcript |
| Cash unquantified | Company "investments including cash" ₹970 Cr; Screener ₹582 Cr | Q1 deck; screener |
| Refresh bar "14 Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |

Not changed (unverified): chart-read FY26 export share of sales (~58%) and aftermarket share (~27.5%), which were garbled in extraction. Banned phrases: none. "honest": 1.

### transformers-rectifiers.html
| What was wrong | What it says now | Source |
|---|---|---|
| Missing Q2 FY27 (released 13 Oct 2026) | Consolidated revenue ₹739.4 Cr (+60.7%), PAT ₹81.4 Cr (+118%); standalone ₹709 Cr, EBITDA 16.1%; order book ₹7,237 Cr (+32%); Q2 inflow ₹1,169 Cr, H1 ₹3,283 Cr (What's new, timeline, §00, §06, §07, financial note, bull) | Results BSE f94d6d24; PR BSE 8a9b4aa3 |
| Strip order book ₹6,630 Cr (30 Jun) | ₹7,237 Cr (30 Sep 2026) | Q2 PR |
| Installed capacity "~40,000 MVA"; "40,000 → ~77,000 MVA" | Company: 75,000 MVA across three plants (Moraiya 40,000, Changodar 35,000, Odhav 2,000). FY26 40,000 now labelled "effective capacity (pre-expansion)". §08 h2/lead/table/mini-stats and chart ceiling updated (~₹5,700 Cr at 75,000 MVA) | Q1 FY27 deck; Q2 PR |
| Capex "~₹600 Cr programme" (×6) | Changodar expansion ~₹150 Cr plus backward integration ₹900–1,000 Cr (CTC, pressboard, RIP bushings, fabrication, CRGO) | Q1 deck and transcript BSE c987bf81 |
| Changodar "now guided to Q2 FY27" | Commercial production expected around Diwali (Q3 FY27); originally Aug-26 | Q2 PR |
| M-cap "~₹9,500 Cr"; "~₹317" | ~₹9,125 Cr; ₹304 (13 Oct 2026) | screener / K1 |
| P/E "~37×" (§00, §11, risks, bear); P/B ">6×" | ~30× trailing (to Sep-26); ~5.5× book | screener / K1 |
| Standalone Q1 PAT "~₹61.5 Cr, −9%" (§06, §11 note, bear, source) | Standalone ₹49.9 Cr (−17%); ₹61.5 Cr is consolidated PAT attributable to owners | Q1 deck |
| EBITDA basis unstated (₹383 Cr) | Screener basis ex-other income; company consolidated EBITDA ₹444 Cr (17.7%) incl. other income | Q1 deck |
| Institutions "FIIs ~7.8%, DIIs ~1.5%" | FIIs ~7.0%, DIIs ~1.2%, public ~27.5% (Sep 2026; promoter 64.36%) | screener |
| Posco-Poggenamp name | Noted renamed Triveni Transtech (India) Pvt Ltd (§03, §05, risks, bull) | Q2 auditor's list |
| New UK subsidiary missing | Maxwell Grid Transformers (UK), incorporated 4 Sep 2026 | Q2 results note 3 |
| Nuclear entry missing | NPCIL Kaiga Units 5 & 6, plus DVC and GETCO orders | Q2 PR |
| Net debt "lower still after cash" | Borrowings ₹574 Cr (Sep-26), net debt ≈ ₹314 Cr, H1 capex ₹153 Cr, NWC ~170 days | Q2 balance sheet; Q1 transcript |
| Pipeline "~₹23,000 Cr" | About ₹21,000 Cr at Q2 (chart bar and text) | Q2 PR |
| Guidance missing | FY27 revenue +25%, EBITDA ~16%, PAT 9–10%, "on track" | Q1 deck; Q2 PR |
| Refresh bar "21 Jul 2026" | 13 Oct 2026 · Q2 FY27 | — |

Not changed (unverified):
- The FY26 inflow (~₹2,270 Cr [E]).
- The reactor share of the order book.
- Moraiya expansion timing. It is kept as "earlier guided Q3 FY27 (not re-confirmed)".

Banned phrases: none. "honest": 1.

### td-power-systems.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹18,000 Cr (mid-2026)" | ~₹25,085 Cr (13 Oct 2026); ~₹25,550 Cr post-QIP [E] noted | screener / K1 |
| P/E "45–46×" (internally inconsistent; §00, §10, mini-stat, plain, §11, bear) | ~91× trailing (13 Oct 2026) | screener / K1 |
| Missing ₹600 Cr QIP | QIP closed 12 Oct 2026: 77,41,935 shares at ₹775 = ₹600 Cr (What's new, timeline, §10 note, bull) | BSE 39697c5e |
| "1:2 stock split approved with Q4 results" (What's new, timeline, §10 note, disclaimer) | Removed; note explains the June 2026 balance sheet shows no split (FV ₹1, share capital ₹31.25 Cr unchanged); BS headline citation annotated | Q1 FY27 deck BSE b1bea02f |
| Missing Q1 FY27 | Revenue ₹640 Cr (+71%), EBITDA 19.0%, PAT ₹86.3 Cr (+72%), orders ₹734 Cr (+87%, 93% exports) (What's new, timeline, §07, new Q1 intake bar) | Q1 deck |
| Order book ~₹1,973 Cr (Mar 2026) in strip | ₹2,207 Cr (Jun 2026): exports 69.5%, domestic 17.9%, railways 9.7% | Q1 deck |
| Guidance/capacity missing | FY27 revenue ~₹2,600 Cr; inflow "₹2,800 Cr plus"; ~₹50 Cr debottlenecking → ~₹3,200 Cr FY28 capacity; ₹4,000 Cr+ FY29–30 | Q1 transcript BSE a93b0ca0 |
| Railway exit missing | "Not taking any fresh orders" in railways; review at year-end | Q1 transcript |
| Management incomplete | CEO Deepak Kumar Sinha, CFO M N Varalakshmi | Q1 deck |
| Ownership drift | Promoter 27.15% (Sep-26; ~26.5% post-QIP [E]); DIIs 27.94%, FIIs 22.86% | screener |
| Refresh bar "27 Jul 2026" | 13 Oct 2026 · Q1 FY27 | — |

Not changed (unverified): the Siemens Energy 10-year build-to-print framework and the ₹192 Cr US gas-turbine-generator order. Both come only from a secondary source (multibagg.ai), so neither was added. Banned phrases: none. "honest": 0.

### atlanta-electricals.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹11,800 Cr (2026, approx)" | ~₹14,251 Cr (13 Oct 2026) | screener / K1 |
| P/E "~50×+" (§00, mini-stat, plain, note, risks, bear) | ~65× trailing (13 Oct 2026) | screener / K1 |
| Missing Q1 FY27 | Revenue ₹466 Cr (+48%), EBITDA 16.5%, PAT ₹46.8 Cr (+50%), record inflow ₹972 Cr, order book ₹3,117 Cr (+25% QoQ) (strip, What's new, timeline, §06/§09 text, §11) | Q1 deck BSE f61230f1 |
| Ankhi "awaiting commissioning"; "would take capability toward ~63,000 MVA" (timeline, ownership, chart bar/legend, §05 text, risks, bull) | Ankhi (Atlanta Trafo) is operating (580 MVA in Q3 FY26); installed capacity already 63,060 MVA across five plants (Ankhi 15,780 MVA) | Q4 FY26 transcript BSE 0a8f3f46; Q1 deck |
| Subsidiary "BTW-Atlanta Transformers Pvt Ltd" | Atlanta Trafo Ltd; 90% from BTW (China) + 10% from promoter entity Atlanta UHV Transformers LLP; EV ~₹260 Cr incl. ~₹80 Cr debt; merger into parent planned | Q1 deck slide 16; Q4 transcript |
| Vadod "taking rated capability toward 765 kV" | PGCIL approval up to 400 kV at Vadod (2 Apr 2026); 765 kV via Ankhi, approval expected ~end-Q2 FY27 after tech-partner agreement | Q4 and Q1 transcripts |
| RoCE "~40%+" (§00, mini-stat, peer table, bull) | ~45% (45.3%), RoE ~32% (31.7%) | screener |
| Management missing | CMD Niral K. Patel; CEO Akshaykumar Mathur; COO Anand Sharma; CFO Mehul Mehta | Q1 deck/transcript |
| Promoter "~87%" as a pure positive | 87.28%; must reach ≤75% (25% public) by ~Sep 2028 → ~12 points of supply (ownership, risks, bear, What's new) | screener [V]; SCRR 19A [K] |
| Guidance/expansion missing | ~40% revenue CAGR for 3 yrs at ~16–20% margins; inverter-duty plant +5,000 MVA by end-CY26 | Q1 and Q4 transcripts |
| Order-book chart legend "near ₹2,500 Cr" | Adds ₹3,117 Cr at Jun-26 (~1.6× trailing revenue) | Q1 deck |
| Refresh bar "2 Aug 2026" | 13 Oct 2026 · Q1 FY27 | — |

Not changed (unverified):
- IPO details (₹687 Cr at ₹754; the primer figures were kept).
- Sector-mix percentages.
- Export target of ~15% of revenue (not added).

Banned phrases: none. "honest": 1.

### voltamp-transformers.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹10,100 Cr (mid-2026)" | ~₹10,505 Cr (13 Oct 2026) | screener / K1 |
| P/E "~32×" (mini-stat, plain, bear) | ~33× trailing (13 Oct 2026) | screener / K1 |
| Missing Q1 FY27 | Revenue ₹543.8 Cr (+28%), 4,215 MVA (+29%), PBILDT 14.8% (17.2% LY), PAT ₹91.2 Cr (+14%, incl. ₹42 Cr other income) (What's new, §00, timeline, plain, bear) | CARE rationale Aug-26; screener |
| "A new power-transformer factory" with no size, site or date | Unit-III at Jarod: 6,000 MVA, ~₹215 Cr, commercial production from 7 Oct 2026; max rating 160 → 250–315 MVA (§00, timeline, §06, bull) | BSE 4c70a09b; CARE; AR FY26 |
| Capacity / order book missing; "₹1,200 Cr order book" | Installed 14,000 MVA (Jun-26, CARE) before Unit-III; order book ~₹1,590 Cr (31 Jul 2026, ~0.74× revenue) | CARE; AR FY26 |
| Promoter "~30%" without context | 37.80% → 30.00% in the Sep-25 quarter (~7.8 points sold); DIIs 33.85% the largest bloc (ownership, note, timeline) | screener |
| Cash pile unquantified | Investments ₹995 Cr + cash ₹74 Cr (Mar-26); CARE unencumbered liquid investments ₹667 Cr | screener; CARE |
| Management margin warning missing | AR: margins "expected to get normalized" as industry capacity grows; mostly fixed-price orders (plain, bear, What's new) | AR FY26; CARE |
| Refresh bar "6 Aug 2026" | 13 Oct 2026 · Q1 FY27 | — |

Already correct (no change): management. The primer already names CMD Kanubhai S. Patel and VC & MD Kunjal L. Patel. Banned phrases: none. "honest": 1.

### quality-power.html
| What was wrong | What it says now | Source |
|---|---|---|
| M-cap "~₹8,700 Cr (mid-2026)" | ~₹11,706 Cr (13 Oct 2026) | screener / K1 |
| P/E "~47× on FY26 earnings" (on ₹186 Cr incl. minorities) | ~88× trailing on shareholders' earnings; FY26 owners' PAT ~₹121 Cr (EPS ₹15.67), minorities ~₹65 Cr (§00, plain, chart legend, mini-stats, plain, bear, note) | screener; Q1 deck; [E] |
| Revenue "~₹1,007 Cr" (strip, §00, timeline, chart) | Revenue from operations ₹947 Cr (₹1,007 Cr includes other income); revenue chart restated (FY25 ~₹338 Cr, FY27 guided +20% → ~₹1,136 Cr) | screener; Q1 deck |
| EBITDA "~₹191 Cr derived from ~19% × ₹1,007 Cr" | Company EBITDA ₹236.2 Cr (23.5%, incl. other income); Screener OP ₹178 Cr (18.8%) | Q1 deck; screener |
| Order book "~₹1,400 Cr (FY26 exit)" (strip, §08, mini-stat) | ₹1,945.5 Cr (Jun-26): Endoks ₹801 Cr, Mehru ₹585 Cr, QP ₹553 Cr | Q1 deck/transcript |
| Missing Winwin acquisition / EGM | 100% of Winwin Speciality Insulators, SPA 23 Sep 2026, partly for 10,17,123 shares at ₹1,460; EGM 19 Oct 2026 votes on the deal and a proposed QIP (What's new, timeline, group map) | EGM corrigendum BSE 25d95a55 |
| Missing Q1 FY27 and hyperinflation accounting | Revenue ₹233 Cr (+32%); EBITDA 25.2% reported / 28.3% pre-Ind AS 29; PAT ₹46.7 Cr after ₹7.8 Cr Ind AS 29 loss at Endoks | Q1 deck |
| Management incomplete | CEO Sanjog Mhatre, CFO Rajesh Jayaraman, Group CTO Shylendra Kumar | Q1 transcript/deck |
| Guidance missing / stale "+15–20%" | FY27 revenue +20%; "model us at 20% or high teens EBITDA"; Q3 standalone dip flagged; Mehru ~18% | Q1 transcript |
| Group map incomplete | Adds S&S Transformers 98%, Sukrut Electric 50%, Nebeskie Labs 26% | Q1 deck slide 5 |
| Sangli "nearing trial production" | Trial production targeted Aug-26, then ~60 customer audits over ~6 months; peak revenue capacity ₹1,500–1,800 Cr | Q1 transcript |
| "Real cash generation" | CFO/EBITDA ~0.3× in FY26 (0.8× FY23–24) | Q1 deck slide 15 |
| Refresh bar "8 Aug 2026" | 13 Oct 2026 · Q1 FY27 | — |
| 21 bar-rows | 20: removed the duplicate "EBITDA margin ~19%" row from the "quality metrics" chart (wrong basis, and margin is already in the profit chart) | brief |

Not changed (unverified):
- The Winwin cash leg (~₹123.84 Cr), the ~₹272 Cr total and the "up to ₹700 Cr" QIP size. All three come only from secondary sources, so the primer says "a proposed QIP" without a size.
- IPO details (₹859 Cr at ₹425; primer figures kept).

Banned phrases: none. "honest": 1.

---

## Final primer-audit (`node subsectors/_template/primer-audit.mjs "Capital Goods || Heavy Electrical Equipment"`)

| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| hitachi-energy-india.html | 70 | 5655 | 20 | 13 | 12 | 0 | 2026-06-30 | ✅ | — |
| bhel.html | 72 | 6415 | 13 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| siemens-energy-india.html | 81 | 7154 | 17 | 15 | 14 | 0 | 2026-06-30 | ✅ | — |
| siemens-limited.html | 82 | 7255 | 11 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| ge-vernova-td-india.html | 69 | 5605 | 18 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| thermax.html | 71 | 5789 | 14 | 11 | 13 | 0 | 2026-06-30 | ✅ | — |
| schneider-electric-infrastructure.html | 70 | 5540 | 13 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| triveni-turbine.html | 66 | 5509 | 12 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| transformers-rectifiers.html | 93 | 9204 | 10 | 14 | 13 | 0 | 2026-06-30 | ✅ | — |
| td-power-systems.html | 66 | 5783 | 14 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| atlanta-electricals.html | 76 | 7007 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| voltamp-transformers.html | 73 | 6535 | 18 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| quality-power.html | 77 | 6993 | 20 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks (baseline: 7 failed). The "Refreshed" column comes from `data/primers.json` and is out of scope for this phase.

**Total fixes logged: 177 table rows across 13 primers.** By primer: Hitachi 16, BHEL 17, Siemens Energy India 14, Siemens Ltd 15 (one of these rows only notes the bar count), GE Vernova T&D 14, Thermax 11, Schneider 14, Triveni 13, TARIL 17, TD Power 11, Atlanta 12, Voltamp 9, Quality Power 14. The `main{min-width:0;}` CSS addition was made in all 13 files and is not counted in the rows.
