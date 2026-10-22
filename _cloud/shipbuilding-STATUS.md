done 2026-10-22T17:04:36Z · branch claude/ss-shipbuilding · report subsectors/shipbuilding.html (unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 73 KB; 32/40 figures verified from primary sources)

## Checks
- Gate: `GATE PASSED: 27/27 checks · 22664 prose words · 30433 total words · 302 KB`
- Audit (vs hospitals.html): 24 sections, 61 chart blocks; no thin sections (<250 words, excl. glossary); no section without a chart or table; TOC 24/24 resolving; 3 primer links, all members linked; tags balanced; banned phrases none; "honest" 0; stat strip ₹-only; no CONTINUE marker; 29 × "illustrative", 43 × "indicative".
- peersum: all three combined rows ✓ on every summable column (revenue, OP, other income, PAT reported, cash + bank, borrowings, net cash, m-cap, order book Jun-26, contract liabilities).
- Render check: **RENDER PASSED** — 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 3; 375: scrollW 375, issues [], rotatedOps 0. Run with Playwright 1.47.2 against the preinstalled chromium_headless_shell-1194 (a copy of rcheck.mjs in /tmp with executablePath set; the repo tool was not edited).
- Spot checks (orchestrator):
  - Cover and stat strip: 6 cells, ₹ only, with a basis line.
  - Peer table and notes: basis stated (MDL and Cochin consolidated, GRSE standalone; reported PAT; AR cash + bank; MDL unrestricted ₹11,401 Cr in a note).
  - MDL and Cochin cards: 168–188 words, corrected values (Cochin cash ₹2,406 Cr, GoI 63.33%, IAC-2 not in book, P-75I unsigned).
  - KPI anatomy table (₹4,000 Cr frigate): every row re-added — revenue, cost, margin 440, cash, cumulative surplus, contract liability, interest at 6.9% (167) and total 607 all tie.
  - Positioning map 1: MDL FY26 dot = 17.4% OPM / ~29.6% ROE; GRSE FY26 = 11.4% / ~32%; consistent with the data.

## Sections (DD = deep dive)
00 The one-page view: three yards, one customer, an empty in-tray · 01 How a shipyard earns: from an approval in Delhi to a ship at sea · 02 Size and the 2023–26 boom · 03 The empty in-tray · **04 The pipeline that won't sign, programme by programme (DD)** · 05 Who orders ships, and with what money · **06 The float: how a shipyard is financed by its customer (DD)** · 07 Contract economics and margin quality · 08 Where ₹100 goes, and the docks and people behind it · 09 Five state yards and the challengers · 10 Three yards, three business models · 11 Rules of the game · **12 Can India build merchant ships? The ₹69,725 crore package against China's 55% (DD)** · 13 The global lens · 14 Two centuries, five cycles · **15 Reading a shipyard: the KPI masterclass (DD, data-kpi; 4,408 words, 17 h3)** · 16 The peer table · 17 Who is winning · 18 Three company profiles · 19 The valuation reset · 20 Technology and disruption · 21 Bull versus bear · 22 What to watch · 23 Glossary

## h1
`Indian shipbuilding: <em>full yards, empty order books</em>`

## Forces
1. **Naval order drought and the unsigned pipeline.** Navy-yard FY26 book-to-bill ~0.04×. MDL book ₹32,260 → ₹18,218 Cr; GRSE ₹22,681 → ₹13,596 Cr (Mar-25 → Jun-26). P-75I is CCS-pending; NGC (₹33,000 Cr) is unsigned; the P-17B RFP was issued Sep-26.
2. **The float unwinds.** Contract liabilities fell ₹27,445 → ₹20,579 Cr; FY26 operating cash flow was negative at all three; deposit interest is ~26% of PAT.
3. **Contract economics and margin quality.** MDL has onerous-contract provisions and LD reversals (underlying ~18.7% vs 17.4% reported). GRSE's margin was helped by write-backs (normal ~8–9%). Cochin's repair margin fell from 39% to 26%.
4. **Commercial shipbuilding and the ₹69,725 Cr package.** India builds 0.06% of world output, against China 54.6% and Korea 28.0%. Cochin's export book is the one growing book.
5. **Valuation reset and the state as seller.** 30.1× trailing, 7.2× book; the shares are 33–41% off their highs; there is an OFS overhang (MDL GoI 81.22%).

## Peer combined rows (as printed; revenue / OP / OI / PAT reported / cash+bank / borrowings / net cash / m-cap / P/E / P/B / EV/OP / order book Jun-26 / contract liab.)
- All members combined: 25,030 / 3,894 / 1,822 / 4,043 / 19,136 / 2,156 / 16,980 / 1,30,616 / 30.1× / 7.2× / 29.2× / 54,037 / 20,579
- Ex-Cochin: Navy yards (MDL + GRSE): 20,008 / 3,063 / 1,413 / 3,326 / 16,730 / 484 / 16,246 / 99,967 / 27.4× / 8.1× / 27.3× / 31,814 / 16,054
- Ex-Mazagon (Cochin + GRSE): 12,024 / 1,626 / 683 / 1,465 / 6,040 / 1,709 / 4,331 / 53,070 / 35.8× / 6.2× / 30.0× / 35,819 / 10,276
- **Hand-check of the ratios (ratios of sums):**
  - Navy yards: P/E 99,967 ÷ (2,861 + 801 TTM PAT) = 27.3× (27.4× printed, a rounding difference). P/B 99,967 ÷ 12,382 = 8.07×. EV/OP (99,967 + 484 − 16,730) ÷ 3,063 = 27.3×. Book ÷ TTM revenue 31,814 ÷ 20,830 = 1.53×.
  - Ex-Mazagon: P/E 53,070 ÷ (680 + 801) = 35.8×. P/B 53,070 ÷ 8,500 = 6.24×. EV/OP 48,739 ÷ 1,626 = 30.0×.
  - All members: EV/OP 1,13,636 ÷ 3,894 = 29.2×.
  - Growth: Navy yards 20,008 ÷ 16,508 = +21.2%.
  - All ✓. The subgroup label is "Ex-Mazagon", not "Ex-MDL", because peersum matches the name after "Ex-" against the start of the company cell.

## Labelled ILLUSTRATIVE / INDICATIVE
- **Derived inflows and book-to-bill:** MDL ~₹1,115 Cr (standalone basis); GRSE −₹355 Cr, shown as nil; Navy yards ~₹760 Cr, ~0.04×; Cochin ~₹6,170 Cr, ~1.2× (Jun-25 → Jun-26).
- **Underlying margins:** MDL ~18.7%; GRSE normal ~8–9%; GRSE incl.-OI ~15.3%.
- **Cash-adjusted metrics:** treasury share of PAT, ex-interest ROE, and ex-cash P/E (MDL ~38.8×/39.8×, GRSE 33.1×, Cochin 47.8×, all 39.6×).
- **Scenarios:** order books if P-75I, NGC and NGSV sign; the three-path Navy-yard order-book chart (§21).
- **Worked examples and composites:** the ₹4,000 Cr frigate anatomy; the new-contract revenue curve; "where ₹100 goes"; round-number worked examples.
- **Benchmarks and derived values:** benchmark ranges and heat-map scores; revenue per employee; free-float values; MDL's remaining OFS value (~₹4,800 Cr); Naval Fleet ₹ values derived from budget shares.
- **Global figures:** Japan ~5–6% of 2025 orders; global peer margins and P/Es from snippets or an aggregator.

## Could not source or reconcile
- **Naval programmes:**
  - P-75I: no CCS approval or signing found by 22-Oct-2026. The primer's "IGA Jan-2026" claim is unverified and not used.
  - NGC: still unsigned.
  - Three extra Scorpenes: at "sanction stage".
  - The P-17B bidder list is snippet-only.
  - LPD (₹32,000–40,000 Cr) and MCMV (₹32,000/36,000 Cr) are shown as ranges.
- **Order books:**
  - GRSE FY26 inflow computes negative (−₹355 Cr); shown as nil.
  - No like-for-like Mar-25 order book for Cochin.
  - CMA CGM order ~₹3,240 Cr is a press figure; the company gives only "> ₹2,000 Cr".
- **Global peers and market share:** Hanwha Ocean and Fincantieri P/E are n/a; India's share is not available on a CGT basis.
- **Physical and statistical data:** GRSE dry-dock dimensions; a consistent FY22–FY25 delivery series for GRSE and Cochin.
- **Policy:** the LD cap (5–10%) is memory-based; DAP 2026 final notification was not found (only the Feb-2026 draft).
- **Other:**
  - MDL interim dividend amount (board meets 27-Oct).
  - Cochin's deck D/E of 0.01× vs ~0.28× from screener is unresolved and not used.
  - July-2026 m-caps are approximate, from the primers.
  - The nuclear-submarine yard is stated as "reportedly" Visakhapatnam.

## Primer audit (pre-existing; logged in shipbuilding-primer-issues.md, not fixed)
| Primer | KB | Words | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|
| mazagon-dock.html | 72 | 6080 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |
| cochin-shipyard.html | 66 | 5075 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |
| garden-reach-shipbuilders.html | 65 | 5139 | 2026-06-30 | ❌ banned, honest>1 | no main{min-width:0} |

Major content corrections for all three primers are in `_cloud/shipbuilding-primer-issues.md`:
- Cochin cash: ~₹10,600 Cr → ₹2,406 Cr.
- Cochin GoI stake: 67.9% → 63.33%.
- P-75I status, stale m-caps, the order books, and the advance unwind.

## Publish entry
{"key":"Ship Building || Ship Building & Allied Services","name":"Shipbuilding","slug":"shipbuilding","accent":"#7E1673","noun":"shipyards","hook":"Full yards, empty order books: India's three listed shipyards doubled revenue on orders signed a decade ago, but the Navy yards booked almost nothing in FY26. The report explains the unsigned P-75I/NGC/P-17B pipeline, how customer advances finance a yard, margin quality and the ₹69,725 crore package.","tags":["The naval pipeline that won't sign","The float: advances and cash","Merchant shipbuilding and the ₹69,725 Cr package","KPI masterclass"]}
