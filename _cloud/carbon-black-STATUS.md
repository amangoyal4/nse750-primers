done 2026-10-22T12:19:03Z · branch claude/ss-carbon-black · report subsectors/carbon-black.html (unpublished: publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 82 KB; 40/40 figures verified from primary sources — 19 with two independent primary sources; 4 lower-weight extras (GST tyre rate, US tariff chronology, Cabot, Orion) are snippet-grade)

## Gate
GATE PASSED: 27/27 checks · 21881 prose words · 30221 total words · 304 KB

## Audit totals (vs tier C target / hospitals benchmark)
prose 21,881 (12,000 / 19,815) · sections 23 · deep dives 5 · KPI masterclass 4,539 words, 17 h3 · charts 65 (43 bar, 11 stacked, 4 maps, 4 flows, 3 timelines) · tables 19 · callouts 40 · profile cards 3 (164–197 words) · 304 KB · 0 thin sections · TOC 23/23 · banned phrases none, "honest" 0 · stat strip ₹-only · no CONTINUE marker · 26× "illustrative", 44× "indicative".

## Render check
RENDER PASSED: 1024 px scrollW 1024, h1 3 lines; 375 px scrollW 375, h1 4 lines; issues [], rotatedOps 0, no overflow culprits. (Ran headless Chromium from /opt/pw-browsers/chromium_headless_shell-1194 via Playwright 1.47.2. The stock rcheck.mjs needed an executablePath override, run from a /tmp copy; the repo file is unchanged.)

## Files
- _cloud/carbon-black-industry.md (208 KB: Parts 1–3 126 KB + Part 4 82 KB)
- _cloud/carbon-black-primer-issues.md
- subsectors/carbon-black.html

## Sections (DD = deep dive)
00 The one-page view: three carbon companies, one spread · 01 Soot by design: the value chain · 02 Size: a surplus country · 03 Tyres pull the demand · 04 Where ₹100 goes: two-thirds oil, a seventh profit · 05 Who makes it: one giant, an MNC, a tyre maker and a tar refiner · 06 Four ways to earn from carbon, and why Rain is in this bucket · 07 No shield: anti-dumping history, trade deals and the tariff maze · 08 Same tonnes, different year: anatomy of a spread cycle (DD) · 09 Russia's lost market: EU sanctions and India's export arbitrage (DD) · 10 The windfall that ate the cash: the 2026 oil shock and working capital · 11 Six decades, five cycles · 12 Reading carbon black: the KPIs that decide the spread (DD, KPI masterclass) · 13 The peer table · 14 Who is winning (4 maps + heat map) · 15 Three company profiles · 16 From soot to silicon: three battery-materials bets (DD) · 17 Two balance sheets, one cycle: PCBL's debt, Himadri's cash, Rain's dollars (DD) · 18 The global lens · 19 Technology and disruption · 20 Bull vs bear · 21 What to watch (thresholds + calendar: Rain Q3 CY26 6-Nov; PCBL Q2 FY27 by 14-Nov; Himadri Q2 transcript; Birla Naidupeta start-up; PCBL coal-tar distillation decision; Himadri–DBRL demerger NCLT) · 22 Glossary

## h1
Indian carbon black: <em>tyres, crude and the per-tonne spread</em>

## Forces
1. The spread cycle: formula pricing with a feedstock lag; EBITDA/t is the number (PCBL FY26 ~₹14,900 → Q1 FY27 ₹22,900 incl. ~₹70 Cr inventory gain; FY27 guide ₹16,500–17,000; Rain Carbon ₹7,702 CY25 → ₹13,653 Q2 CY26).
2. Tyres as the anchor customer (~60–65% of Indian CB), and the export arbitrage after the EU ban on Russian black (India exports 443.9 kt FY26, 130.3 kt to the EU-27; imports 130.2 kt). There is no anti-dumping shield: the duty ran ~2010–2020 and renewal was declined on 5-Jan-2021.
3. The 2026 oil shock: a windfall quarter and a working-capital drain (Himadri H1 FY27 operating cash flow −₹154 Cr; Brent per EIA $117 Apr, $85 Jun, $114 Sep, $125.6 week to 16-Oct).
4. Leverage and capital allocation (PCBL 5.02× CARE with two Negative outlooks; Himadri swings from net cash to ₹519.8 Cr net debt; Rain US$892 m net debt, minorities take 69% of PAT, thin goodwill headroom).
5. Specialty, conductive and battery-materials bets (Himadri LFP/anode/Sicona; PCBL Nanovace with Kindia; specialty volumes).

## Peer combined rows (as printed; aligned TTM Jul-25–Jun-26, ₹ Cr; m-cap 22-Oct-26)
| Row | Rev | OP | OPM | PAT before NCI | PAT attrib. | Net debt | M-cap | P/E attrib. | EV/EBITDA |
|---|---|---|---|---|---|---|---|---|---|
| All three combined | 31,989 | 4,915 | 15.4% | 1,730 | 1,600 | 13,521 | 44,804 | 28.0× | 11.9× |
| CB makers combined (ex-Rain) | 13,524 | 2,126 | 15.7% | 1,063 | 1,063 | 5,056 | 37,902 | 35.7× | 20.2× |
| Coal-tar distillers combined (ex-PCBL) | 23,440 | 3,795 | 16.2% | 1,471 | 1,341 | 8,985 | 33,309 | 24.8× | 11.1× |
| Combined ex-Himadri | 27,014 | 3,909 | 14.5% | 926 | 796 | 13,001 | 18,397 | 23.1× | 8.0× |
peersum.mjs: every summed column ✓ on all four rows.

Hand-check (company rows PCBL 8,549/1,120/259/259/4,536/11,495; HSCL 4,975/1,006/804/804/520/26,407; Rain 18,465/2,789/667/537/8,465/6,902):
- CB makers = PCBL + HSCL: 13,524 / 2,126 / 1,063 / 1,063 / 5,056 / 37,902 ✓.
- Coal-tar distillers = HSCL + Rain: 23,440 / 3,795 / 1,471 / 1,341 / 8,985 / 33,309 ✓.
- Ex-Himadri = PCBL + Rain: 27,014 / 3,909 / 926 / 796 / 13,001 / 18,397 ✓.
- Ratios are ratios of sums: OPM 2,126/13,524 = 15.7%, 3,795/23,440 = 16.2%, 3,909/27,014 = 14.5%. P/E 37,902/1,063 = 35.7×, 33,309/1,341 = 24.8×, 18,397/796 = 23.1×. EV/EBITDA 42,958/2,126 = 20.2×, 42,294/3,795 = 11.1×, 31,398/3,909 = 8.0×. ✓
- Rev YoY (latest FY basis) −1.3% / +8.1% / +5.7% match the dossier's re-added sums ✓.
- PAT basis: before NCI in every row and total; attributable shown separately (it differs only for Rain).

## Spot checks (orchestrator)
- Cover/stat strip: 6 cells, ₹-only, basis line present.
- Peer notes: basis, footnotes and P/E basis stated.
- PCBL and Himadri cards: corrected figures (900 ktpa = 768+132, ₹4,536 Cr, CARE/CRISIL Negative, Kindia, ₹519.8 Cr, pledged deposits).
- 150-ktpa plant P&L arithmetic re-added: EBITDA ₹204 Cr ≈ ₹16,000/t; PBT ₹99.6 Cr; PAT ₹74.5 Cr. Fixed one rounding: depreciation ₹1,100 Cr ÷ "~25" → "~24" years, to match ₹45 Cr.
- Returns-vs-valuation map: all 3 dot coordinates match ROCE/EV/EBITDA on the plotted scale.

## Labelled ILLUSTRATIVE / INDICATIVE
India capacity 2.2–2.4 mtpa, consumption, capacity-share bar; domestic market value and global US$18–22 bn value; Himadri carbon-black share of revenue (40–50%); both ₹100-of-revenue breakdowns; decomposition of PCBL's ₹22,900/t (underlying ~₹16,400 / power ~₹1,950 / inventory ~₹4,550); per-tonne worked examples, PCBL FY27 bridge, spread scenarios and sensitivities ($10/bbl ≈ ₹10,500–11,000/t of CB); oil-lag path chart; specialty-mix example; 150-ktpa plant P&L and chart; payback and incremental-ROCE examples; working-capital sensitivity; rupee effect on Rain debt; Q1 FY27 tyre-export run-rate; battery market-share and revenue-potential figures; Birla export share; US$/t conversions; benchmark bands and watch thresholds. Single-source/snippet items flagged in text: BKT 360 ktpa, Orion, Cabot, GST 2.0 tyre rate, the Feb-2026 "18%" US framework.

## Figures not sourced or not reconciled
- Dossier arithmetic error (fixed in the report, not in the dossier): its "$10/bbl → ₹1,000–1,200/t CB" is 10× too low; the report uses ~₹10,500–11,000/t, labelled illustrative.
- PCBL power EBIT ~₹7,170/t exceeds external power revenue ~₹4,560/t; the report's captive-transfer-price explanation is an interpretation.
- Global peer multiples (~6–7×) are unverified. Continental Carbon, Epsilon and Cabot India capacities are not disclosed. China's share of capacity and the global market US$ value are unsourced.
- Himadri's current Sicona stake is not disclosed (2023 figure 12.79% printed). Himadri's FY22–FY26 net-cash history is read off a company chart.
- Cabot prior-year EBIT is derived from the reported −24%. PCBL's "Brent $97" Q1 figure vs the EIA calendar ~$103 is noted in the text.
- Promoter pledge status is not verified for any company.
- PCBL FY26 annual report could not be fetched (TLS failure through the proxy); FY25 report used. ICRA's Himadri rationale sits behind a guest form, so it was not opened.
- Pending: Himadri Q2 FY27 call transcript; PCBL Q2 FY27 board date.

## Primer audit (primer-audit.mjs; pre-existing, logged in carbon-black-primer-issues.md, not fixed)
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| himadri-speciality-chemical.html | 63 | 4849 | 9 | 9 | 12 | 0 | 2026-06-30 | ❌ bars<10, banned, honest>1 | no main{min-width:0} |
| pcbl-chemical.html | 67 | 5668 | 14 | 11 | 12 | 0 | 2026-06-30 | ✅ | no main{min-width:0} |
| rain-industries.html | 72 | 6492 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | no main{min-width:0} |
Plus the substantive primer corrections (PCBL capacity/net debt/Aquapharm/credit; Himadri valuation/Birla Tyres/net debt; Rain PAT bases/P/E/capacities/debt; anti-dumping history and Brent path for all three) in carbon-black-primer-issues.md.

## Publish entry
{"key":"Chemicals || Carbon Black","name":"Carbon Black","slug":"carbon-black","accent":"#2B167E","noun":"carbon black makers","hook":"Tyres, crude and the per-tonne spread: how PCBL, Himadri and Rain turn heavy oil and coal tar into profit, why EBITDA per tonne swings by half with feedstock lags, Russian surplus and the 2026 oil shock, and what the leverage and battery-materials bets are worth.","tags":["Spread cycle","Russia's lost market","Battery materials","KPI masterclass"]}
