done 2026-10-22T04:35:02Z · branch claude/ss-castings-forgings · report subsectors/castings-forgings.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 78 KB; 38/40 figures verified from primary sources)

# Castings & Forgings — STATUS

**Gate:** GATE PASSED: 27/27 checks · 22967 prose words · 30441 total words · 303 KB
**Audit:** 22 sections, 22/22 TOC links resolve; 4/4 primers linked, none missing; tags balanced; banned phrases 0, "honest" 0; stat strip ₹-only; no CONTINUE marker; 62 chart blocks (4 positioning maps, 5+ stacked bars, 3 timelines, 5 flows), 16 tables (all wrapped), 27 "In plain terms" callouts, 5 deep dives; KPI masterclass 4,519 prose words (gate count), 18 h3. Thinnest sections p15 (325 words) and p14 (372). p19 (bull/bear) has no chart or table (uses the bull/bear component).
**Render check:** RENDER PASSED (1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375: scrollW 375, issues [], rotatedOps 0, overflowCulprits []). I fixed one 375px overflow in p5 by shortening a stacked-bar label and moving the names into the subtitle. Method: Playwright 1.47.2 from /tmp/rc, launched with the preinstalled chrome-headless-shell (/opt/pw-browsers/chromium_headless_shell-1194) through a scratch copy of _cloud/tools/rcheck.mjs that adds executablePath. The preinstalled Chromium no longer supports old headless mode; the check logic is unchanged.
**Spot-checks (by hand):**
- Cover and stat strip: CIE 60.5% of revenue, PTC 2.84× CIE's m-cap.
- Peer table and notes.
- Balu card.
- Anatomy-of-a-plant table: 65,000 t × ₹170/kg = ₹1,105 Cr; the cost lines re-add to EBITDA ₹314 Cr (28.4%); EBIT 286 ÷ capital employed 900 = 31.8%.
- Growth-vs-margin and cash-vs-ROCE maps: every dot's coordinates match the peer data.

## Sections (DD = deep dive)
00 The one-page view: one label, four unrelated businesses
01 From melt to money: how hot metal becomes a margin
02 India's foundry floor: the world's second-largest, and mostly small
03 Four demand curves: ore milled, vehicles built, aircraft ordered, shells fired
04 Scrap, chrome, titanium, power: where ₹100 of revenue goes
05 A crowded floor, a narrow top: who competes with whom
06 Four archetypes, four rents
07 DD — The ball that eats itself: AIA's consumable duopoly and the conversion thesis
08 DD — Sponge to spar: India's titanium chain and the ₹39,800 crore question
09 DD — CIE's two halves: a growing Indian supplier and a shrinking European one, on a calendar year
10 DD — Crankshafts to shell casings: Balu Forge and the cash-conversion question
11 Tariff walls and carbon borders
12 Booms, busts and wars: six decades in one timeline
13 DD — Reading a melt shop: the KPI masterclass (data-kpi="1")
14 The peer table: four companies, one basis
15 Who is winning: growth, margin, cash and price (4 maps + heat map)
16 Four company profiles
17 The global lens: Magotteaux, Howmet and the shell makers
18 Technology and disruption: rolls, batteries and printers
19 Bull vs bear
20 What to watch: thresholds and dates
21 Glossary

**h1:** Castings &amp; forgings: <em>four furnaces, four different fortunes</em>

## Forces
1. **One label, four unrelated businesses.** Mining wear parts, aerospace titanium, an auto Tier-1 and export crankshafts turning to shells. PTC is 3.9% of revenue but 42.9% of m-cap.
2. **AIA's conversion thesis against flat tonnes.** Volume peaked in FY24; FY26 was +1.0%, with mining tonnes −3.8%. Chinese forged media are competing in Chile, and management guides a 20–22% margin.
3. **The Western titanium and defence reshuffle.** VSMPO sanctions, PTC's melt-to-part chain, Airbus and Safran, ₹2,500 Cr of equity raised, and a 317× P/E.
4. **The vehicle cycle and CIE's two halves on a calendar year.** India margin fell from 18.2% to 16.7%; Europe sales fell 6% in euros while its margin rose to 15.9%.
5. **Cash conversion, governance, tariffs and inputs.** Balu's CFO was ₹32 Cr. Sec 232 duty is 50% on full customs value from 6-Apr-2026, MHDV parts pay 25% from 1-Nov-2025, and Sec 301 adds 10% from 24-Jul-2026. Also CBAM, ferro-chrome, energy costs and the rupee at ~₹94.9/$.

## Peer combined rows (as printed; screener consolidated, latest FY = FY26, CIE CY25; reported PAT; m-cap 21-Oct-2026; net debt = screener borrowings − investments, CIE at Dec-25)
| Row | Revenue | OP | PAT | CFO | Net debt/(cash) | M-cap | P/E FY | P/E TTM | EV/EBITDA |
|---|---|---|---|---|---|---|---|---|---|
| All members | 15,536 | 3,057 | 2,458 | 1,813 | (4,915) | 92,762 | 37.7× | 36.2× | 28.7× |
| Ex-CIE (March-year companies) | 6,130 | 1,695 | 1,630 | 555 | (3,882) | 78,743 | 48.3× | 47.5× | 44.2× |
| Aerospace & defence (PTC + Balu) | 1,710 | 434 | 361 | −37 | 410 | 45,271 | 125.4× | 114.9× | 105.3× |
| Mining + auto incumbents (AIA + CIE) | 13,826 | 2,623 | 2,097 | 1,850 | (5,325) | 47,491 | 22.6× | 21.9× | 16.1× |
peersum: ✓ on every summed column for "All members" and "Ex-CIE".

**Hand-check of the subgroups:**
- **PTC + Balu:**
  - 603+1,107=1,710 ✓; 134+300=434 ✓; 102+259=361 ✓; −69+32=−37 ✓; 258+152=410 ✓; 39,800+5,471=45,271 ✓.
  - P/E 45,271÷361=125.4× ✓; TTM P/E ≈115× ✓; EV/EBITDA (45,271+410)÷434=105.3× ✓; CFO/OP −8.5% printed as −9% ✓.
- **AIA + CIE:**
  - 4,420+9,406=13,826 ✓; 1,261+1,362=2,623 ✓; 1,269+828=2,097 ✓; 592+1,258=1,850 ✓; −4,292−1,033=−5,325 ✓; 33,472+14,019=47,491 ✓.
  - P/E 22.6× ✓; EV/EBITDA (47,491−5,325)÷2,623=16.1× ✓; CFO/OP 70.5% printed as 71% ✓.
- **All members:** EV/EBITDA (92,762−4,915)÷3,057=28.7× ✓.
- **Ex-CIE:** EV/EBITDA (78,743−3,882)÷1,695=44.2× ✓.
- All ratios are ratios of sums.

## Labelled ILLUSTRATIVE / INDICATIVE
- "Where ₹100 goes" for each archetype.
- The worked equation (1,000 t at ₹170/kg).
- AIA conversion arithmetic (₹260–330 Cr revenue and ₹75–95 Cr EBITDA per point).
- PTC "what the multiple implies" (₹5,000–5,700 Cr revenue needed, ~8 years at 30% growth); PTC pro-forma net cash; PTC organic growth 45–55%.
- Balu shell-line value (₹290–430 Cr) and the ₹/kg value ladder.
- Anatomy of a 100,000 tpa plant (31.8% pre-tax ROCE).
- Qualification lead times.
- CIE and Balu metal share 50–55%; MSME margin band 8–14%.
- Technology-exposure scores.
- India castings 15.86 mt (IIF, single source); forging turnover ₹60–75k Cr.
- Ferro-chrome prices.
- High-chrome shares 19% / 16%.
- Aerospace titanium market US.2 bn; VSMPO 25–30%.
- Global peer sizes and multiples.
- AIA ex-cash ROCE 35–40%; forger operating leverage 1.5–2×; members' share of national tonnage.

## Not sourced / not reconciled
- **CIE Q3 CY26 (Sep-26 quarter) is not in the report.** Results and call are 22-Oct-2026 at 18:00 IST, after this run; CIE is written as at Q2 CY26 (Jun-26). Refresh CIE figures before or after publishing.
- **Board dates:** AIA, PTC and Balu have not announced dates for the Sep-26 quarter; the report says early-to-mid Nov 2026 (expected).
- **CFO/OP ratios:** the dossier's figures (CIE 112, AIA 69, Balu 15, PTC −38) do not equal CFO ÷ OP. The report uses its own division, labelled "our arithmetic": AIA 47%, CIE 92%, Balu 11%, PTC −51%.
- **Order books:** PTC and Balu disclose no order-book value; PTC holds no concalls.
- **Balu:** shell price not disclosed; end-market mix (CV ~36% / agri ~20%) is a partial read of a pie chart, labelled approximate.
- **Other gaps:** Odisha sponge capex, AIA country-level export geography, verified high-chrome shares, and Magotteaux standalone revenue.
- **Not verified:** CBAM coverage of HS 7325, and how Sec 232 treats PTC's US aerospace parts; both are stated as unverified in the text.
- **Balu's Central Government holding (4.02%)** is stated as a fact only, with no inference about why.

## Primer audit (pre-existing; logged in castings-forgings-primer-issues.md, not fixed)
| Primer | KB | Words | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|
| aia-engineering.html | 64 | 5019 | 2026-06-30 | ✅ | no main{min-width:0} |
| ptc-industries.html | 66 | 5261 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |
| cie-automotive-india.html | 69 | 5397 | 2026-06-30 | ✅ | no main{min-width:0} |
| balu-forge.html | 67 | 5760 | 2026-07-27 | ✅ | no main{min-width:0} |
The dossier also lists substantive factual corrections for all four primers in §3.4 and Part 4 §4.5, copied into castings-forgings-primer-issues.md:
- **Valuation:** stale in all four (AIA, CIE, Balu −22% to −29%; PTC +50%).
- **AIA:** volume history, export share, CFO, capex.
- **PTC:** Trac UK missing; QIP now completed.
- **CIE:** technology mix, net cash.
- **Balu:** UAE subsidiary, auditor emphasis of matter, IT search not concluded.

## Files on this branch
- subsectors/castings-forgings.html
- _cloud/castings-forgings-industry.md (206 KB: Parts 1–3 127 KB plus Part 4)
- _cloud/castings-forgings-primer-issues.md
- _cloud/castings-forgings-STATUS.md

## Publish entry
{"key":"Automobile & Ancillaries || Castings & Forgings","name":"Castings & Forgings","slug":"castings-forgings","accent":"#56682C","noun":"castings & forgings companies","hook":"Four furnaces, four different fortunes: a mining wear-parts exporter, a titanium aerospace aspirant, an India-plus-Europe auto supplier and a crankshaft maker turned shell-forger. Why the smallest is worth more than the rest, and the tonnage, margin, cash and tariff numbers that decide each.","tags":["AIA's high-chrome conversion thesis","India's titanium chain (PTC)","CIE's two halves","Balu Forge cash conversion"]}
