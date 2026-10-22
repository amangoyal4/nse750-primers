done 2026-10-22T03:22:38Z · branch claude/ss-logistics · report subsectors/logistics.html (resumed dead run; unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 76 KB; 38/40 figures verified from primary sources)

## Run notes
- Claimed 20:09Z on 21-Oct; that run died after Phase 1c (no commit for more than 2 h). Resumed 22-Oct 02:57Z. Dossier re-checked: 217 KB in total, Part 4 76 KB, 38/40 figures [V] from primary sources. FY26 and Q1 FY27 subgroup aggregates re-added: correct.
- Phase 2: a fresh writer produced a 308 KB report. Phase 3: the orchestrator re-ran every check below.

## Gate (check.mjs)
GATE PASSED: 27/27 checks · 21276 prose words · 30125 total words · 308 KB

## Audit totals (vs tier B target / hospitals benchmark)
- Prose 21,276 (target 14,000; benchmark 19,815). Sections 23. Deep dives 5. KPI masterclass: 4,564 prose words, 21 h3.
- Charts 65. Maps 3. Tables 19 (all wrapped). Callouts 26. Profile cards 5 (168–179 words each).
- Thin sections: none. Sections without a chart or table: p17 (profiles), p19 (technology), p20 (bull vs bear).
- Integrity: TOC 23/23; 5 primer links, none missing; tags balanced; banned phrases 0; "honest" 0; stat strip ₹-only; no CONTINUE marker. Labels: 37 × illustrative, 46 × indicative.

## Render check (rcheck.mjs)
RENDER PASSED. 1024: scrollW 1024, issues [], rotatedOps 0, h1 3 lines. 375: scrollW 375, issues [], rotatedOps 0.
Run with Playwright 1.47.2 against the pre-installed Chromium 1194 headless shell (scratch symlink as revision 1134).

## Sections (DD = deep dive)
p0 The one-page view: five businesses, one diesel bill · p1 Five ways to move freight, and where each one earns · p2 A ₹24 lakh crore bill, half the size everyone quoted · p3 What fills the network · p4 Where ₹100 of revenue goes · p5 Who owns the network · p6 Five business models · **p7 DD The corridor is built; where is the cargo?** · **p8 DD The parcel war after Ecom** · p9 Fuel, wages and the speed of pass-through · **p10 DD BlackBuck: a fintech wearing a logistics badge** · **p11 DD Thin margins, big balance sheets** · p12 Who writes the rules · p13 Four decades of cycles (timeline) · **p14 DD KPI masterclass (data-kpi)** · p15 Peer table · p16 Who is winning (maps, heat map) · p17 Five company profiles · p18 Global lens (incl. TVS SCS "Seventy-two per cent abroad" as an h3) · p19 Technology and disruption · p20 Bull vs bear · p21 What to watch · p22 Glossary. The footer lists 31 numbered sources.

## h1
India's logistics providers: <em>new rails, old roads, thin margins</em>

## Forces
1. Modal shift is promised but road keeps winning. The DFC is built, yet JNPA's rail share is falling and CONCOR's share has gone from ~74% to 54.5%. CONCOR's rebates rose 27.5%. Land-fee risk: LLF is booked under the 6%-of-value regime with no signed agreements and an auditors' Emphasis of Matter.
2. Density economics in parcels, and who owns the density: Delhivery+Ecom, Shadowfax with 28–30% of 3PL express, and the captive networks Valmo, Ekart and ATS.
3. Fuel, wages and how fast costs pass through: May-2026 diesel +8.6%, the Labour Codes and the West Asia freight shock.
4. Asset intensity vs return on capital, and what Ind-AS 116 does to EBITDA.
5. Formalisation of the trucker economy: BlackBuck's payments and credit legs, and Delhivery's new NBFC licence.

## Peer combined rows (as printed; FY26 ₹ Cr; screener consolidated; m-cap 21-Oct-2026)
| Row | Rev | Growth | OP | OPM | PAT (reported) | Net worth | Borrowings incl. leases | M-cap | P/E | P/B | EV/OP |
|---|---|---|---|---|---|---|---|---|---|---|---|
| All five | 37,383 | +10.1% | 4,487 | 12.0% | 1,923 | 27,862 | 6,384 | 87,094 | 45.3× | 3.13 | 20.8× |
| Asset-heavy (CONCOR, Blue Dart) | 15,220 | +4.2% | 2,902 | 19.1% | 1,493 | 14,720 | 2,107 | 42,919 | 28.7× | 2.92 | 15.5× |
| Express / parcel (Delhivery, Blue Dart) | 16,649 | +13.6% | 1,591 | 9.6% | 400 | 11,464 | 2,605 | 39,456 | 98.6× | 3.44 | 26.4× |
| Asset-light / platform (BlackBuck, TVS SCS) | 11,655 | +11.8% | 945 | 8.1% | 277 | 3,455 | 2,814 | 15,131 | 54.6× | 4.38 | 19.0× |
| Ex-CONCOR (Delhivery, Blue Dart, BlackBuck, TVS SCS) | 28,304 | +12.9% | 2,536 | 9.0% | 677 | 14,919 | 5,419 | 54,587 | 80.6× | 3.66 | 23.7× |

- peersum.mjs: "All five" and "Ex-CONCOR" pass on all six summed columns.
- Hand-check of the subgroups, every summed column re-added:
  - Asset-heavy: 9,079+6,141; 1,951+951; 1,246+247; 12,943+1,777; 965+1,142; 32,507+10,412 ✓
  - Express: 10,508+6,141; 640+951; 153+247; 9,687+1,777; 1,463+1,142; 29,044+10,412 ✓
  - Asset-light: 652+11,003; 167+778; 160+117; 1,422+2,033; 59+2,755; 10,084+5,047 ✓
- Ratios recomputed as ratios of sums (OPM, P/E, P/B, EV/OP = (m-cap + borrowings) ÷ OP) ✓.
- One PAT basis throughout: reported, pre-minority (TVS ₹117 Cr). Adjusted PAT sits in a separate column that is not summed.
- Q1 FY27 subgroup sums (dossier §3.2b) re-added ✓.

## Labelled ILLUSTRATIVE / INDICATIVE
- The ₹100-of-revenue cost stacks.
- Every worked example: parcel network, double-stack arithmetic, revenue and OP per TEU, Blue Dart air vs ground yield, BlackBuck revenue per operator and per toll, TVS SCS margin sensitivity.
- JNPT rail-coefficient sensitivity (₹1,050 Cr).
- Anatomy of one inland terminal. Spot-checked: 80k TEU × ₹16,000 = ₹128 Cr; EBITDA 28.9; EBIT 20.3; ROCE 17.7% pre-tax ✓.
- Adjusted profit measures: TVS SCS cash EBITDA ~₹287 Cr (2.6%); BlackBuck normalised PAT ~₹125 Cr; Blue Dart pre-exceptional PAT ~₹280 Cr; TVS SCS 4%-PBT implication (~₹500 Cr+).
- Market-share estimates: Delhivery ~45–50% of 3PL express; CONCOR FY20 ~74% share; Valmo share; Meesho cost per order.
- Single-source or snippet-sourced figures: JNPA H1 FY27 rail share 12.7%; LPI and LEADS rankings; e-way bill figures.
- Industry-level estimates: Q1 FY27 realisation per TEU of about −8%; FY26 logistics cost ₹26–27 lakh crore; segment-size ranges; global peer volumes.
- Heat-map scores, presented as judgements.

## Figures not sourced or reconciled
- No FY26 national logistics-cost figure exists; the report gives an estimate.
- No current rail share of national freight; the report uses the ~27% baseline.
- The CONCOR FY20 ~74% share is unconfirmed.
- Blue Dart's air/ground and employee-cost splits are approximate.
- CONCOR employee cost is given only as ~3–4%.
- BlackBuck's partner-managed loan book (~₹600 Cr) is from the primer and unverified; the report says so.
- TVS SCS Europe revenue (~₹4,800 Cr) is read off a chart.
- TVS SCS JV/InvIT gain: deck ₹177.2 Cr vs AR ₹182.03 Cr; the report says ~₹180 Cr.
- Q2 FY27 board dates for CONCOR, Delhivery, Blue Dart and TVS SCS are expected dates only. Only BlackBuck's 29-Oct-2026 is announced.
- Rupee record low and the press-only macro items are carried from the brief.

## Primer audit (primer-audit.mjs)
| Primer | Hard checks | Notes |
|---|---|---|
| concor.html | ❌ banned, honest>1 | no main{min-width:0}; 0 report links |
| delhivery.html | ❌ banned | no main{min-width:0}; 0 report links |
| blue-dart-express.html | ✅ | no main{min-width:0}; 0 report links |
| blackbuck.html | ✅ | no main{min-width:0}; 0 report links |
| tvs-supply-chain-solutions.html | ✅ | no main{min-width:0}; 0 report links |
These are pre-existing and not fixed; they are logged in _cloud/logistics-primer-issues.md, along with the dossier's primer corrections.

## Publish entry
{"key":"Logistics || Logistics Solution Provider","name":"Logistics Solution Providers","slug":"logistics","accent":"#278644","noun":"logistics providers","hook":"New rails, old roads, thin margins: why the finished freight corridor has not yet moved cargo to CONCOR, how Delhivery won the parcel war after buying Ecom Express, why BlackBuck is a fintech wearing a logistics badge, and what EBITDA really means once leases are counted.","tags":["DFC and rail modal shift","Parcel war after Ecom","BlackBuck's fintech model","Ind-AS 116, EBITDA and ROCE"]}
