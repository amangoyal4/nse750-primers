done 2026-10-21T19:38:12Z · branch claude/ss-bpo-kpo · report subsectors/bpo-kpo.html (upgrade; unpublished — publish.mjs not run, no PR, nothing merged)
deep-research: done (Part 4 75 KB; 35/40 figures verified from primary sources — 39/40 [V] in total, the other 4 from fetched secondary pages; the one unverified leg is the rupee record low, from a search snippet)

# BPO & KPO — STATUS (upgrade run)

**What changed in this run.** The 17:52 draft was built when every web fetch was blocked, so none of its figures came from a fetched page. This run had network access:
- **Phase 1c (deep research):** appended Part 4 (~75 KB) to _cloud/bpo-kpo-industry.md, taking the dossier to 218 KB. It covers:
  - screener consolidated pages for all five, fetched after the 21-Oct-2026 close;
  - Q1 FY27 decks for all five;
  - Q1 FY27 call transcripts for IKS, Sagility, Firstsource and Indegene (eClerx: Q4 FY26 call only);
  - FY26 annual reports for all five;
  - a 58-row Supersedes table, a one-basis summary grid and a gap log.
- **Aggregates:** I re-added every aggregate from the Part 4 company rows with a script. The grid totals reproduce exactly. The "Orchestrator re-add" table at the end of the dossier now supersedes §3.2.
- **Primer issues:** copied into _cloud/bpo-kpo-primer-issues.md.
- **Phase 2:** a fresh writer rewrote the report from scratch on the Part 4 basis.

## Gate (last line)
GATE PASSED: 27/27 checks · 23026 prose words · 31997 total words · 324 KB

## Audit totals
- **Size:** 23 sections; prose 23,026 words (benchmark 19,815); KPI masterclass 4,503 words with 19 h3s.
- **Charts (65):** 45 bar, 6 stacked share bars, 4 positioning maps, 7 flows, 3 timelines, plus 1 heat-map table.
- **Other blocks:** 12 tables, 29 "In plain terms" callouts, 5 deep dives, 5 profile cards (165–180 words each).
- **Integrity:**
  - no thin sections, and no section without a chart or table;
  - TOC 23/23; tags balanced;
  - banned phrases 0; "honest" 0; "think of" 0;
  - stat strip ₹ only;
  - 18× "illustrative", 66× "indicative".
- **Links:** only reports that exist on this branch (it-services, erd-services, software-products, hospitals, pharma-diversified-majors); pharmaceuticals.html is not linked.

## Render check
**RENDER PASSED.**
- At 1024: scrollW 1024, issues [], rotatedOps 0, h1lines 2.
- At 375: scrollW 375, issues [], rotatedOps 0, h1lines 3.
- rcheck listed two spans in #p5 and #p11 as possible overflow culprits at 375, but scrollW equals the width, so nothing overflows.
- Setup: Playwright 1.47.2 with the pre-installed headless shell 1194, aliased as chromium-1134 in /tmp/rc/pwb.

## Sections (DD = deep dive)
| # | Section |
|---|---|
| 00 | The one-page view |
| 01 | How the money is made |
| 02 | Size, growth and share |
| 03 | Who buys, and why now |
| 04 | Where ₹100 of revenue goes |
| 05 | Who else is in the room: multinationals, captives and private equity |
| 06 | Five firms, four models: why margins run from 17% to 34% |
| 07 | GenAI and the seat (DD) |
| 08 | US healthcare admin: getting paid versus deciding what to pay (DD) |
| 09 | The rupee and the hedge book: a tailwind already sold forward (DD) |
| 10 | Roll-ups, goodwill and concentration (DD) |
| 11 | Who owns the stock |
| 12 | Rules from three capitals (FCC offshore-call proposal, HIRE Act, H-1B, minimum wages) |
| 13 | Twenty-five years of shocks |
| 14 | Reading a BPM company: the KPI masterclass (DD, data-kpi="1") |
| 15 | The peer table |
| 16 | Who is winning: margin, concentration and AI positioning (3 maps + heat map) |
| 17 | Five company profiles |
| 18 | The global lens |
| 19 | Technology and disruption |
| 20 | Bull vs bear |
| 21 | What to watch: the Q2 FY27 season |
| 22 | Glossary |

## h1
Indian BPO &amp; KPO: <em>the seat is being repriced</em>

## Forces
1. **GenAI/agentic AI is repricing the seat.** Whether a contract pays per FTE, per transaction or per outcome decides who gains from automation.
2. **US healthcare administration is the profit pool.**
   - The split that matters is payer (Sagility) versus provider (IKS, with TruBridge).
   - US policy is the macro variable: the Medicare Advantage 2027 rate and the OBBBA Medicaid changes.
3. **The rupee tailwind is already sold forward.**
   - Hedge rates: eClerx FY27 ~₹91.16/$ and Firstsource ~₹92.7/$, against ₹95 spot.
   - Q1 FY27 growth: +25.9% in ₹, but about 12–15% in constant currency.
4. **Roll-ups, goodwill and concentration.**
   - Sagility carries ₹6,405 Cr of goodwill.
   - IKS bought AQuity and TruBridge; Indegene bought BioPharm, Warn and Cake.
   - IKS's top-10 clients are 53.8% of revenue; eClerx's largest single client is 16.7%.
5. **Supply of stock and offshore policy risk.**
   - EQT is the promoter at Sagility; private-equity holders have exited Indegene.
   - The FCC's March-2026 proposal would cap offshore customer-service calls; the HIRE Act and H-1B rules are the other risks.

## Peer combined rows (as printed)
Basis: screener consolidated. OP = EBITDA excluding other income. PAT = reported consolidated. Net cash = cash + investments − borrowings excluding leases, at Mar-26. M-cap at the 21-Oct-2026 close.

| Row | FY26 rev | FY25 rev | Growth | OP | OPM | PAT | Q1 FY27 rev | Q1 PAT | Net cash ex-lease | M-cap | P/E FY26 | P/E TTM |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All five combined | 27,570 | 22,419 | +23.0% | 6,126 | 22.2% | 3,428 | 7,797 | 857 | +1,426 | 1,00,990 | 29.5× | 28.4× |
| Healthcare-focused (IKS + Sagility) | 10,387 | 8,234 | +26.1% | 2,849 | 27.4% | 1,647 | 2,857 | 411 | +451 | 48,729 | 29.6× | 27.7× |
| 2024 IPO cohort (IKS + Sagility + Indegene) | 13,897 | 11,073 | +25.5% | 3,468 | 25.0% | 2,048 | 3,920 | 527 | +1,933 | 62,747 | 30.6× | 29.1× |
| Ex-Firstsource | 18,014 | 14,439 | +24.8% | 4,521 | 25.1% | 2,754 | 5,072 | 691 | +2,979 | 80,882 | 29.4× | 28.0× |
| Ex-Inventurus (IKS) | 24,376 | 19,755 | +23.4% | 5,042 | 20.7% | 2,706 | 6,903 | 663 | +1,301 | 73,041 | 27.0× | 26.1× |
| 2007-listed incumbents (Firstsource + eClerx) | 13,673 | 11,346 | +20.5% | 2,658 | 19.4% | 1,380 | 3,877 | 330 | (507) | 38,243 | 27.7× | 27.3× |
| Net-cash members (Indegene + eClerx) | 7,627 | 6,205 | +22.9% | 1,672 | 21.9% | 1,107 | 2,215 | 280 | +2,528 | 32,153 | 29.0× | 28.5× |

**Hand-check:**
- peersum ✓ on every summed column for "All five combined", "Ex-Firstsource" and "Ex-Inventurus (IKS)".
- I re-added the four other subgroup rows column by column with my own script from the company rows. Every printed value matches, including:
  - FY25 revenue, Q1 FY26 bases, TTM PAT and the PAT-growth bases;
  - growth, margins and P/Es, which are all ratios of sums.
- I checked the company net-cash cells against the screener schedules:
  - IKS 389 + 377 − 641 = 125;
  - Sagility 568 + 336 − 578 = 326;
  - Firstsource 269 + 116 − 1,938 = (1,553);
  - Indegene 1,482;
  - eClerx 738 + 308 = 1,046.
- One PAT basis throughout (reported consolidated). Company-adjusted PAT appears only in the note and is not summed.
- IKS's post-TruBridge net debt (~₹5,000–5,500 Cr, INDICATIVE) is in the note only, not in the summed column.

**Other spot checks:**
- Cover and stat strip: all six cells come from the re-add table and are dated.
- Two profile cards are within 150–250 words (the IKS card is 214).
- 600-person delivery-centre anatomy table:
  - revenue 510 × 1,900 h × $11 × ₹95 = ₹101.3 Cr;
  - costs 76.6 → EBITDA 24.7 → EBIT 22.2 → tax 5.6 → PAT 16.6;
  - the utilisation, rate and automation sensitivities all reproduce.
- Growth-vs-margin map: all five dots match their data (x = CC/$ growth, y = OP margin).

## Labelled ILLUSTRATIVE / INDICATIVE
- **Worked examples:**
  - the 100-FTE claims queue under FTE, transaction and outcome pricing;
  - the model healthcare-operations vendor and its FX, wage and automation sensitivities;
  - the FX-sensitivity flow;
  - the 600-person delivery-centre P&L;
  - the P/E-on-FY28 scenarios.
- **Composites and judgements:**
  - "Where ₹100 goes" for each business model;
  - the end-market split;
  - the AI-exposure vs pricing-protection map;
  - the heat map;
  - the KPI benchmark bands and the .rng scorecard;
  - the what-to-watch thresholds.
- **Estimates:**
  - IKS FY26 US$ revenue (~$360m), revenue per employee and $ growth;
  - goodwill ÷ equity for IKS and Indegene;
  - FY27E combined revenue of ₹33,000–35,000 Cr;
  - IKS post-deal net debt (~3× EBITDA);
  - acquisition values in ₹;
  - cost per offshore contact and the rupee-sensitivity rule of thumb;
  - FCC exposure;
  - the members' share of India's BPM industry.
- **Inference:** that eClerx's hedge losses sit inside its operating revenue.
- **Third-party figures:** market sizes (Zinnov via IKS, Indegene's $135bn, the ~$1tn US admin cost), global peer multiples and the global margin comparison.

## Could not source or reconcile
- **IKS:**
  - the TruBridge financing size ($600m vs $670m);
  - net debt after the deal (still INDICATIVE);
  - full-year FY26 US$ revenue (estimated).
- **Missing documents:** the eClerx Q1 FY27 call transcript; BSE's announcement API returned 403.
- **Industry:**
  - global BPO market size;
  - a primary source for US healthcare admin cost (~$1tn);
  - India's BPM export-only split;
  - an industry attrition benchmark;
  - pharma promotional budgets.
- **US policy:** HIRE Act status after Feb-2026 (the report calls it stalled); whether the H-1B proclamation was extended after 20-Sep-2026.
- **Rupee record low:** the brief says ₹96.8, but no source was found. The report uses ₹96.53 close / ₹96.61 intraday on 19-May-2026, which rests on a search snippet.
- **P/E:** screener's own TTM P/E differs slightly from m-cap ÷ PAT for Sagility, Firstsource and Indegene. The peer note says so.
- **Nadathur Fareast (21.88% of Indegene):** the dossier links it to a named founder from memory. The report describes it only as a family-office vehicle.
- **IKS BSE code:** 544309 per screener and the company's filings. members.json and the primer say 544332, which is wrong. The report uses 544309; the gate does not key on BSE codes. This needs fixing in members.json (I did not edit that file).

## Results status
- None of the five had reported Q2 FY27 by 21-Oct-2026.
- Sagility's board meets 22-Oct-2026 (tomorrow), so its numbers will post-date the report.
- Indegene's board meets 29-Oct-2026.
- IKS, Firstsource and eClerx have not announced dates. Last year they reported on 30-Oct, 4-Nov and 24-Oct; the SEBI deadline is 14-Nov-2026.

## Primer-audit (pre-existing; logged in primer-issues.md, not fixed)
| Primer | Hard checks | Notes |
|---|---|---|
| inventurus-knowledge-solutions.html | ❌ bars<10, banned, USD-in-strip | no main{min-width:0} |
| sagility.html | ❌ bars<10, USD-in-strip | no main{min-width:0} |
| firstsource-solutions.html | ✅ | no main{min-width:0} |
| indegene.html | ❌ USD-in-strip | no main{min-width:0} |
| eclerx-services.html | ❌ USD-in-strip | no main{min-width:0} |

Content corrections from Part 4 §4.6 are in _cloud/bpo-kpo-primer-issues.md. The main ones:
- IKS: BSE code, headcount 12,889, 600+ clients, FY24 revenue ₹1,818 Cr, P/E.
- Sagility: P/E ~20× (not 56×); net debt ₹196 Cr.
- Firstsource: FY24 revenue ₹6,336 Cr.
- Indegene: 0% promoter.
- eClerx: operating revenue as the headline; buyback terms.

## Publish entry
{"key":"IT || Business Process Outsourcing (BPO)/ Knowledge Process Outsourcing (KPO)","name":"BPO & KPO","slug":"bpo-kpo","accent":"#1A2693","noun":"outsourcers","hook":"The seat is being repriced: how India's five listed BPO/KPO firms turn offshore hours into US healthcare claims, physician revenue cycles, pharma content and bank operations, why GenAI shifts pricing from the FTE to the outcome, how much of the weak rupee is already hedged away, and what the 2024 IPO cohort's premium buys.","tags":["GenAI and the seat","US healthcare admin","Rupee and hedges","Roll-ups and goodwill"]}
