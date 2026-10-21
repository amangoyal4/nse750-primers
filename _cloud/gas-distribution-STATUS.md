done 2026-10-21T19:59:37Z · branch claude/ss-gas-distribution · report subsectors/gas-distribution.html (unpublished; publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 76 KB; 38/40 figures verified from primary sources)

# City Gas & LNG (gas-distribution) — STATUS

Retry of a run that failed on 21-Oct (network blocked). This time the network worked: both dossier files were rebuilt from fetched pages (screener.in, PPAC, PNGRB, company filings/calls/annual reports via BSE PDFs). Main was merged into the branch first to pick up `_cloud/ref/brief-deep-research.md`.

## Dossier
- `_cloud/gas-distribution-industry.md` 197 KB (Part 1 industry ~121 KB, re-verified, 21 corrections; Part 4 deep-research supplement 76 KB: Supersedes S1–S40, 40-figure verification table with 38 [V] primary, per-company guidance digests/5-yr/8-qtr/AR findings, gap log, new insights)
- `_cloud/gas-distribution-companies-1.md` 111 KB (Parts 2–3; all financials screener-fetched 21-Oct-2026)
- Total 308 KB (tier-B floor 180 KB). Aggregates re-added by the orchestrator from company rows: all tie (Supersedes don't touch the FY26 peer inputs).
- `_cloud/gas-distribution-primer-issues.md` rebuilt from verified research (§3.4 + Part 4 §4.5).

## Checks (re-run by the orchestrator)
- Gate: `GATE PASSED: 27/27 checks · 23269 prose words · 32628 total words · 321 KB`
- Audit: 0 FAIL. Prose 23,269 (target 14,000; hospitals 19,815) · sections 23 · deep dives 6 · KPI masterclass 4,494 words / 19 h3 · charts 64 (44 bar, 9 stacked, 3 maps, 4 flows, 4 timelines, 1 heat map) · tables 22 · callouts 27 · profile cards 5 (165–194 words). Note: p17 (profiles) and p20 (bull/bear) carry no chart/table (note, not FAIL).
- Render check: RENDER PASSED (1024: scrollW 1024, h1lines 3; 375: scrollW 375; issues [], rotatedOps 0, no overflow culprits). Run with Playwright 1.47.2 against the preinstalled Chromium headless shell (via a wrapper in /tmp; no download).
- peersum: All five members ✓ all 6 columns; Ex-Adani Total Gas ✓ all 6 columns.
- Spot-checks: cover/stat strip shares tie (ATGL 8.4% of PAT = 656/7,852; Petronet 49.8%); CGD ₹8.7→₹5.6/scm ties (1,304/1,503 vs 906/1,616 mmscm); map 1 x-coordinates exactly match Q1 EBITDA changes, y within ~2 px of P/E.
- Orchestrator fix: Metro incumbents ₹/scm was on company-EBITDA basis (4.9) while the CGD row used screener OP (5.6); restated to 4.8 on the screener basis and added the working to the peer note.

## Sections (DD = deep dive)
00 One-page view · 01 How a molecule earns · 02 Size, growth & history · 03 Who burns the gas · 04 Where ₹100 goes · 05 Industry structure · 06 Five business models · 07 The rulebook · 08 DD The cheap-gas squeeze · 09 DD CNG vs EVs and petrol · 10 DD War, Qatar & LNG · 11 DD LPG & liquid terminals (Aegis) · 12 DD Exclusivity, build-out & valuation · 13 Thirty years of cycles · 14 DD KPI masterclass · 15 Peer table · 16 Who is winning (3 maps + heat map) · 17 Company profiles · 18 Global lens · 19 Technology & disruption · 20 Bull vs bear · 21 What to watch · 22 Glossary

## h1
`City gas &amp; LNG: <em>cheap gas fades, the tolls cash in</em>`

## Forces
1. The cheap-gas squeeze: APM decline and allocation cuts (51%→34% of CGD demand), APM ceiling $7.00 vs formula $11.22, NWG at 12% of ICB; IGL ₹3.4/scm vs MGL ₹7.9 on sourcing.
2. CNG vs EVs and petrol: CNG/petrol price ratio 0.52×→0.85×, e-3W 55.8% share, Delhi EV policy; management sees <1% volume loss in FY27.
3. The 2026 West Asia war: Qatar force majeure (extended to end-Nov-2026), spot LNG, Petronet's trading/inventory gains, signed 2028–48 delivered-basis Qatar deal.
4. LPG and liquid terminals: Aegis distribution windfall, Tristar acquisition (89.8%, US$809m) and ₹6,000 Cr raise, CARE watch.
5. Exclusivity, build-out and valuation: ATGL at 33.7% of group m-cap on 7.2% of revenue.

## Peer combined rows (as printed; ₹ Cr; Rev | EBITDA | PAT attrib | PAT rep | Net debt | M-cap | P/E | EV/EBITDA)
- All five members | 82,136 | 11,307 | 7,852 | 8,061 | (17,287) | 1,82,772 | 23.3× | 14.6×
- CGD members (ATGL, IGL, MGL) | 30,308 | 4,517 | 3,041 | 3,041 | (6,982) | 91,853 | 30.2× | 18.8×
- Metro incumbents (IGL + MGL) | 24,414 | 3,322 | 2,385 | 2,385 | (7,042) | 30,287 | 12.7× | 7.0×
- Terminal operators (Petronet + Aegis) | 51,828 | 6,790 | 4,811 | 5,020 | (10,305) | 90,919 | 18.9× | 11.9×
- Ex-Adani Total Gas | 76,242 | 10,112 | 7,196 | 7,405 | (17,347) | 1,21,206 | 16.8× | 10.3×
Hand-check (python re-add of company rows): every subgroup column equals the sum; margins/P/E/EV-EBITDA are ratios of sums. Volume column: CGD 3.33+9.66+4.77 = 17.76; metro 14.43 ✓. Q1 EBITDA YoY: CGD 906/1,304 = −30.5%; metro 636/1,011 = −37.1%; terminals 2,249/1,399 = +60.8%; ex-ATGL 2,885/2,410 = +19.7% ✓. Basis: FY26 screener consolidated, net revenue, EBITDA = OP before other income, attributable PAT for all P/E; net debt screener basis (Aegis company net cash ₹3,523 Cr footnoted).

## Labelled ILLUSTRATIVE / INDICATIVE
Sensitivities (₹/scm per $1/mmbtu, APM share point, crude, rupee, CNG ₹/kg, volume; regas tariff; Aegis ₹/t × volume); "Where ₹100 goes" stacks; rebuilt IGL gas-cost stack; KPI worked examples and the 2.0 mmscmd metro-GA anatomy; ₹/kg↔₹/scm conversion; per-station throughput and capex per GA; Dahej utilisation on the old 17.5 mtpa base; Petronet ex-gains OP (~₹1,040 Cr) and Q4 FY26 ex use-or-pay; Q2 FY27 CGD margin expectations and broker estimates; EV volume-loss scenarios; ATGL years-to-20× chart; IGL margin scenarios; capex/EBITDA; CGD margin-cycle chart; single-source figures (Qatar 12.8 mtpa out 3–5 yrs, JKM ~$21, Kpler/Equirus volumes, IGL FII→MF shift, Aegis ~₹17,300/t, commercial LPG path, global multiples, sourcing-mix splits); heat-map scores (judgments).

## Figures not sourced / not reconciled
- Aegis Vopak stakes (Aegis 44.71%, Vopak ~42%) not confirmed in primary documents.
- Petronet vessel-owner claims: ₹89.30 Cr in AR vs ~₹348 Cr reported elsewhere (unverified).
- ATGL Q1 per-scm "gross profit" line doesn't tie to EBITDA; only derived gas cost and EBITDA/scm used.
- Official 2026 APM allocation ratio to CGD not found (company disclosures used as proxy).
- JKM monthly levels (Platts paywalled); Qatar train repair time; national CNG vehicle count and e-bus fleets; HS-code trade data (TradeStat not fetched); ICRA/CARE/India Ratings 2026 CGD notes (none free); IGL's ₹114 Cr FY26 one-off; reason for IGL's Jun-26 FII→DII swing (snippet only).
- Pre-2026 CNG/petrol parity ratios approximate.
- Q2 FY27 not reported by any member as of 21-Oct (ATGL board 22-Oct, Aegis 26-Oct, Petronet 2-Nov; IGL and MGL dates not announced).

## Primer audit (pre-existing; logged, not fixed)
| Primer | Refreshed | Hard checks | Notes |
|---|---|---|---|
| adani-total-gas.html | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |
| petronet-lng.html | 2026-06-30 | ✅ | no main{min-width:0} |
| aegis-logistics.html | 2026-06-30 | ❌ banned | no main{min-width:0} |
| indraprastha-gas.html | 2026-06-30 | ✅ | no main{min-width:0} |
| mahanagar-gas.html | 2026-06-30 | ✅ | no main{min-width:0} |
Factual primer issues: see `_cloud/gas-distribution-primer-issues.md`.

## Publish entry
{"key":"Gas Transmission || LPG/CNG/PNG/LNG Supplier","name":"City Gas & LNG","slug":"gas-distribution","accent":"#937B1A","noun":"gas utilities and terminals","hook":"Cheap gas fades, the tolls cash in: how India's city-gas utilities lost margin per cubic metre as cheap domestic gas was rationed and the 2026 West Asia war lifted LNG costs, while the LNG and LPG terminal operators booked record profits, and which KPIs show who is winning.","tags":["The cheap-gas squeeze","CNG vs EVs and petrol","War, Qatar & LNG","LPG & liquid terminals"]}
