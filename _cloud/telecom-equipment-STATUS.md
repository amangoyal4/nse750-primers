done 2026-10-22T10:40:56Z · branch claude/ss-telecom-equipment · report subsectors/telecom-equipment.html (unpublished: publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 71 KB; 33/40 figures verified from primary sources — rows 38–39 only partly primary; the only secondary-only rows are the Tejas ₹7,492 Cr APO and the ITI ₹856 Cr BSNL order, both labelled "as reported" in the report)

# Telecom Equipment — STATUS

- Key: `Telecom || Telecom - Equipment & Accessories` · tier C (4 companies: HFCL, ITI, Tejas Networks, STL)
- Files: `_cloud/telecom-equipment-industry.md` (185 KB: Parts 1–3 114 KB + Part 4 71 KB), `_cloud/telecom-equipment-primer-issues.md`, `subsectors/telecom-equipment.html` (300 KB)

## Gate
`GATE PASSED: 27/27 checks · 23064 prose words · 30514 total words · 300 KB`

## Audit totals (vs tier C target / hospitals benchmark)
- Prose 23,064 (12,000 / 19,815) · sections 22 · deep dives 5 · KPI masterclass 4,810 prose words, 19 h3
- Charts 65 (44 bars · 7 stacked · 3 maps · 7 flows · 4 timelines) + 1 heat map · tables 19 · callouts 32 · profile cards 4 (186–193 words)
- Thin sections: none · sections without chart/table: none · TOC 22/22 · primer links 4/4 · banned phrases none · "honest" 0 · stat strip ₹-only · no CONTINUE marker
- Labelled: 11 × "illustrative", 55 × "indicative"

## Render check
RENDER PASSED (1024: scrollW 1024, h1lines 4; 375: scrollW 375; issues [], rotatedOps 0, overflowCulprits []). Note: the stock `_cloud/tools/rcheck.mjs` looks for chromium-1134, which this container lacks; I ran an unmodified scratch copy with `executablePath` pointed at the pre-installed `chromium_headless_shell-1194`. The repo tool was not edited.

## Spot-checks (by hand)
- Cover/stat strip: 6 ₹ cells, basis line with quarter labels and result dates. OK.
- Peer table + notes: one basis (screener consolidated FY26, reported PAT; ex-exceptional in a separate INDICATIVE column; net debt = screener borrowings − investments Mar-26; m-cap 22-Oct-26). OK.
- STL and Tejas profile cards read against the dossier and Part 4 Supersedes. OK.
- Plant anatomy (ILLUSTRATIVE 10 mn fkm plant): boom 8.5 × ₹1,900 = 1,615; EBITDA 404 (25%); PBT 263; PAT 197; trough 825 → EBITDA 36 → PBT −105; ROCE ~23% / ~−3%. Re-added: all consistent.
- Map (p15, export share vs EBITDA margin): HFCL (63%, 25.9%), STL (79%, 20.8%), Tejas (12%, −26.6% = −108/406), ITI (~1.5%, 0.4%). Pixel coordinates match the axis scales.

## Sections (DD = deep dive)
p0 The one-page view: four companies, two opposite cycles · p1 Glass, silicon and tenders: how the money is made · p2 A sector with no trend, only campaigns and cycles · p3 Who buys, and why the buyer changed in 2026 · p4 Where ₹100 goes: germanium, helium, people and interest · p5 China, multinationals and the unlisted · p6 Four business models, four different enemies · **p7 DD "Glass is the new GPU": how AI made HFCL and STL hyperscaler suppliers** · **p8 DD The day after the campaign: Tejas and BSNL's indigenous 4G** · **p9 DD BharatNet's third act: ₹1.39 lakh crore, 16 packages and a ten-year bill** · **p10 DD ITI: a factory kept alive by its land** · p11 Trade walls: tariffs, duties and the rules on who may sell · p12 Seven decades, five cycles · **p13 DD KPI masterclass (data-kpi)** · p14 The peer table · p15 Who is winning: exporters, the patient and the stranded · p16 Four company profiles · p17 Global lens · p18 Technology and disruption · p19 Bull vs bear · p20 What to watch (thresholds + event calendar) · p21 Glossary

## h1
`Indian telecom equipment: <em>glass booms, gear waits for orders</em>`

## Forces
1. AI data-centre fibre super-cycle after the 2023–25 glut (HFCL, STL as US hyperscaler suppliers; shortage to ~2028; capacity race)
2. BSNL indigenous 4G campaign and its cliff (Tejas; ~26k-site add-on; no 5G order)
3. BharatNet III (₹1.39 lakh Cr, 16 packages, 10-year O&M) and the government as a slow-paying customer
4. ITI: a PSU kept alive by land sales and grants (~2% real float; auditor disclaimer + going-concern doubt)
5. Trade walls: US Sec 301 10% (vs 12.5% China/Vietnam), EU AD/CVD (HFCL 8.1%, STL 12.5%), Trusted Source/PLI

## Peer combined rows (as printed; ₹ Cr)
Columns: Rev FY26 | YoY | OP | OPM | PAT reported | PAT ex-exceptional (indicative) | TTM PAT | Net debt Mar-26 | M-cap 22-Oct-26 | P/E (m-cap ÷ TTM PAT) | EV/OP FY26 | EV/OP TTM | Order book
- All four companies | 12,981 | −37.0% | 715 | 5.5% | −231 | −1,063 | 677 | 7,759 | 1,09,220 | 161× | 164× | 58.2× | 63,727 (mixed dates)
- Fibre & cable makers: HFCL + STL | 9,694 | +20.3% | 1,333 | 13.8% | 385 | 385 | 1,170 | 3,236 | 79,717 | 68.1× | 62.2× | 34.3× | 47,529
- Private players ex-ITI: HFCL, Tejas, STL | 10,797 | −36.4% | 651 | 6.0% | −524 | −524 | 353 | 7,048 | 87,299 | 247× | 145× | 48.2× | 49,844
- Equipment / system integrators: Tejas + ITI | 3,287 | −73.8% | −618 | −18.8% | −616 | −1,448 | −493 | 4,523 | 29,503 | n.m. | n.m. | n.m. | 16,198

peersum: "All four" and "ex-ITI" rows ✓ in every summed column.
Hand-check (orchestrator):
- **Fibre & cable makers:** I re-added every column and all match:
  - Revenue 4,949 + 4,745 = 9,694; FY25 basis 8,061 gives YoY +20.3%.
  - OP 764 + 569 = 1,333 (OPM 13.75%).
  - PAT 329 + 56 = 385; TTM PAT 927 + 243 = 1,170.
  - Net debt 1,761 + 1,475 = 3,236; m-cap 38,518 + 41,199 = 79,717.
  - P/E 79,717 ÷ 1,170 = 68.1; EV/OP FY26 82,953 ÷ 1,333 = 62.2; TTM OP 1,586 + 829 = 2,415 gives EV/OP TTM 34.3.
  - Order book 28,911 + 18,618 = 47,529.
- **Equipment / SI:** I re-added every column and all match:
  - Revenue 2,184 + 1,103 = 3,287; FY25 basis 12,539 gives YoY −73.8%.
  - OP 64 − 682 = −618; PAT 293 − 909 = −616; ex-exceptional −539 − 909 = −1,448; TTM PAT 324 − 817 = −493.
  - Net debt 711 + 3,812 = 4,523; m-cap 21,921 + 7,582 = 29,503; order book 13,883 + 2,315 = 16,198.
- **Ratios:** all are ratios of sums. All-four EV/OP FY26 = 1,16,979 ÷ 715 = 164×; EV/OP TTM = 1,16,979 ÷ 2,009 = 58.2×. Ex-exceptional removes only ITI's ~₹832 Cr land gain.
- **Dossier Part 3:** I also re-added the aggregates before the writer started. No arithmetic errors; Part 4's Supersedes change no screener-basis inputs.

## Labelled ILLUSTRATIVE / INDICATIVE
- Worked examples:
  - HFCL 62 mn fkm at $20 vs $8/fkm.
  - The 10 mn fkm plant anatomy (table + chart).
  - The ₹1,000 Cr BharatNet package flow.
  - The Tejas breakeven flow (~₹4,500–5,000 Cr).
  - The p19 scenarios.
- Derived figures:
  - Realisation per fkm.
  - RAN value per site (₹7.5 / 8.2 / 11.2 lakh).
  - ITI ex-land PAT (−₹539 Cr; TTM ~−₹508 Cr) and the group ex-exceptional PAT.
  - HFCL and Tejas order-inflow estimates.
  - Group company-basis net debt (~₹4,800 Cr).
  - Through-cycle ROCE averages.
- Single-source or secondary figures:
  - TrendForce demand, shortfall, utilisation and price multiples.
  - The fibre-demand range 577 / >670 / 750 mn fkm, each source named.
  - Tejas ₹7,492 Cr APO, ITI ₹856 Cr BSNL order and Tejas ₹1,537 Cr LoI (all "as reported").
  - STL export share ≥79%; ITI order book ex-solar; STL fibres-per-rack.
- Conversions and composites:
  - YOFC in ₹ and Chinese ¥/fkm in ₹.
  - PLI and telco-capex figures.
  - Indicator thresholds.

## Figures not sourced / not reconciled
- STL fibre and cable capacity: n/d (only "<70% utilisation in FY26").
- STL CFO/EBITDA: dossier 102% vs screener 91%; HFCL FY26 CFO/EBITDA: −44% vs −49%. Both metrics were omitted.
- ITI order-book drop (₹18,637 → ₹13,883 Cr): explained by inference only (removal of a ₹4,191 Cr solar-LED LoI).
- BharatNet III: full 16-package award list unavailable (USOF site 503); HFCL's UP award is L1 only.
- Open gaps:
  - India telecom-equipment market size.
  - PLI disbursals FY26–27.
  - BSNL vendor payables.
  - Any US AD/CVD case on Indian OFC (none found).
  - Jio/Airtel capex (secondary only).
  - Corning Q3 2026 (not yet reported).
- ITI FY25 PAT: screener −₹215 Cr used; company −₹233.15 Cr given in a note.
- STL Mar-26 net debt: company ₹1,128 Cr vs CRISIL ₹1,041 Cr (range in prose); the table uses screener ₹1,475 Cr.
- BSNL 4G count: primary PIB 97,672 installed / 95,511 on air (15-Jan-26); later counts secondary.
- HFCL long-term ASM status is from a secondary source; the unconfirmed "BE series" tag is not used.
- Results pending: STL Q2 FY27 board 23-Oct-26; ITI Q2 date not set (AGM 4-Nov-26). When STL reports, its card, peer TTM figures and stat-strip-adjacent text need a refresh.

## Primer audit (pre-existing; logged, not fixed)
| Primer | KB | Words | Bars | Plain | Sections | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|
| hfcl.html | 67 | 5428 | 14 | 9 | 12 | 2026-06-30 | ❌ banned | no main{min-width:0} |
| iti-limited.html | 67 | 5363 | 17 | 8 | 12 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |
| tejas-networks.html | 79 | 7511 | 15 | 11 | 12 | 2026-06-30 | ✅ | no main{min-width:0} |
| sterlite-technologies.html | 66 | 5875 | 11 | 10 | 12 | 2026-07-27 | ✅ | no main{min-width:0} |
Content issues per primer are in `_cloud/telecom-equipment-primer-issues.md`. The worst:
- ITI's FY26 profit is the ₹832 Cr land gain, and the auditor disclaimer is missing from the primer.
- STL's demerger is described backwards.
- Tejas FY23/FY24 figures are wrong.
- All four primers have stale m-caps.

## Publish entry
{"key":"Telecom || Telecom - Equipment & Accessories","name":"Telecom Equipment","slug":"telecom-equipment","accent":"#4B1A93","noun":"telecom equipment makers","hook":"Glass booms, gear waits for orders: how AI data centres turned HFCL and STL into US hyperscaler fibre suppliers while Tejas lives through the cliff after BSNL's indigenous 4G campaign, BharatNet III's ₹1.39 lakh crore build tests government payments, and ITI survives on land sales.","tags":["AI fibre super-cycle","BSNL 4G cliff","BharatNet III","ITI and its land"]}
