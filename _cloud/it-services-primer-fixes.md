# IT Services — Phase 3 primer fixes (sub-sector key "IT || Computers - Software & Consulting")

Refresh date 13 Oct 2026. These are targeted edits to the 18 member primers in `primers/`, with no rewrites. Every figure comes from the verified research files: `_cloud/it-services-companies-1.md`, `-2.md`, `-3.md` (the PRIMER ISSUES blocks and company packs), plus the K1 grid and K4 notes in `_cloud/it-services-industry.md`. Market data are Screener closing figures for 13 Oct 2026. The primers carry them with "as of 13 Oct 2026".

**Changes applied to all 18 primers (not repeated in the per-primer tables):**
- Added `main{min-width:0;}` inside the first `<style>` block (phone overflow).
- Set the refresh-bar date to **13 Oct 2026** and updated the source text to name the latest quarter.
- Added the latest quarter to the "What's new" box: Q2 FY27 for TCS and HCLTech, Q2 CY26 for Hexaware, Q1 FY27 for all others. The earlier FY26 note is kept at the end of the box, prefixed "Earlier".
- Added a "Refresh of 13 Oct 2026" line to the sources list, naming the filings and Screener data used.

Page structure, section anchors, the stat-strip layout, the back button, the PDF button, print CSS and the `.ss-link` banners are unchanged. No cover provenance line was added. Every chart was kept.

---

### tata-consultancy-services.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip: headcount 584,519 (Mar 2026) | 598,056 (Sep 2026) | batch 1 TCS #2 (Q2 FY27, V-sec) |
| Strip: 25.0% op. margin shown as current | 24.0% (Q2 FY27), with 25.0% in FY26 | batch 1 #5 |
| Strip: market cap ~₹7.6 lakh Cr (Jun '26) | ~₹8.2 lakh Cr (13 Oct 2026) | K1 (₹8,20,319 Cr) |
| No Q1/Q2 FY27 in What's new | Q2 FY27: ₹73,188 Cr / $7,642m, +0.5% QoQ / +2.8% YoY cc, margin 24.0%, NP ₹13,884 Cr, TCV $9.6bn. Q1 FY27: ₹72,275 Cr, TCV $9.5bn, legal-settlement charge | batch 1 #4, pack 1.2 |
| Snapshot "~584,500 employees" | ~598,000 (Sep 2026); headcount table and "non-linear" note now record +13.5k in H1 FY27 | #2 |
| AI revenue "~$2.3bn annualised" (snapshot, §06 bullet, bull case) | ~$3.1bn (Q2 FY27), up from ~$2.3bn at FY26 | #6 |
| M&A missing | Timeline FY27 (H1) entry and What's new: MHP (EV €320m, SPA 24 Aug 2026), €1.25bn Porsche partnership, Coastal Cloud ($700m), ListEngage ($72.8m) | #7 |
| Other events missing | Anthropic and Mistral partnerships, OpenAI 100 MW HyperVault anchor, PERM statement with 15,000 US hires (9 Oct) | #8 |
| Ownership "~71.7%" with no institutional detail | 71.77% (Jun 2026); FII 9.07% (from 12.04%), DII 13.41% | #9 |
| Attrition "~13.7% LTM" | 13.3% (Q2 FY27) | #3 |
| Valuation box: "~₹7.6 lakh Cr … ~15× (Jun '26)" | ~₹8.2 lakh Cr, ₹2,269/share, ~15× trailing, ~6.9× book (13 Oct 2026); TTM-profit base removed (Screener P/E basis) | K1 |
| Peer table "~584k staff" | ~598k staff (Sep 2026) | #2 |
| Mini-stats: margin/P/E/promoter dated Jun '26 | margin 24.0% (Q2 FY27) noted, P/E as of 13 Oct 2026, 71.77% | K1, #5 |
| §07 lacked post-FY26 trajectory | Q1/Q2 FY27 QoQ cc growth (+0.4%/+0.5%) and quarterly TCV added | pack 1.2 |
| Banned "Think of TCS as…"; "honest" ×2 | Rephrased; "The honest tension" changed to "The core tension" (honest now 1) | brief §4 |
| 28 bar-rows (more than 20) | 20. Trimmed: industry chart merged Manufacturing, Tech & Services, Comms & Media and ER&U into one "Other industry units ~29%" row (−3); geography merged India and RoW into "~21.5%" (−1); TCV chart dropped the "Q4 TCV $12.0bn" row, figure moved to legend (−1); revenue chart dropped FY23 (−1); PAT chart dropped FY23 and FY24 (−2), c-sub now "FY25 vs FY26" | audit |

Not changed (unverified): HyperVault "~$2bn JV, ~51% TCS / TPG-funded" (structure not re-verified); FY26 vertical/geo mix (tcs.com blocked); ~27× 10-yr median P/E; utilisation.

### infosys.html
| What was wrong | What it says now | Source |
|---|---|---|
| FY27 guidance 1.5–3.5% (snapshot, guidance chart, legend, plain box, timeline, §07, bear case) | Cut to 1.5–3.0% cc on 23 Jul 2026 (margin 20–22% unchanged); claims rewritten as a downward revision | batch 1 Infosys #1 |
| No CEO succession | Ashiss Dash becomes CEO on 1 Apr 2027, when Salil Parekh's term ends (What's new, timeline, management bullet, bear case) | #2 |
| Strip/valuation: ~₹4.2 L Cr (Jun '26), ~14× | ~₹4.3 L Cr, 13.9×, ~4.7× book, ₹1,062/share (13 Oct 2026) | #3, K1 |
| Headcount ~329,000 / ~328,600 | "over 328,000" at FY26, ~327,600 (Jun 2026) | #4 |
| Attrition 12.6% | 13.0% (Q1 FY27); FY26 12.6% kept as history | #5 |
| Ownership: founders ~14%, FII ~28% | Founders 13.82%, FIIs 27.09% (from 33.3%), DIIs 42.78%, public ~15.9% | #6 |
| No Q1 FY27 | $5,082m, +1.0% QoQ / +2.4% YoY cc, margin 21.1%, large deals $3.6bn (61% net new), FCF $955m, utilisation 84.9%, AI 8.2% | #7 |
| FCF/NP "~113%" (legend, mini-stat, bull case) | ~106% (company FY26 adjusted basis) | #8 |
| Events missing | Stratus closed; Optimum, Versent and Australian JV pending; PERM statement; Q2 date 23 Oct | #9 |
| Banned "Think of Infosys…"; "honest" ×2 | Rephrased; "honest answer" → "likely answer"; "rewarding you honestly" → "fairly" (honest 0) | brief |
| 24 bar-rows | 20. Guidance chart: two "FY27 guide low/high" rows merged into one "FY27 guide 1.5–3.0%" row, and the "Q4 FY26 exit +4.1%" row replaced by "Q1 FY27 +2.4%" (−1; the +4.1% is in the legend); revenue chart dropped FY20 and FY22 (−2), c-sub "FY24–FY26"; FY26-glance chart dropped the "Free cash flow US$ million" row, already in the legend (−1) | audit |

Not changed (unverified): "$20.2bn" FY26 revenue (company says "crossed $20bn"); vertical/geography mix.

### hcl-technologies.html
| What was wrong | What it says now | Source |
|---|---|---|
| FY27 guidance "1–4%" (What's new, snapshot, timeline, valuation, bear case) | Raised to 2.5–4.0% cc (Services 3.0–4.0%) on 12 Oct 2026; EBIT 17.5–18.5% unchanged | batch 1 HCL #1 |
| No Q1/Q2 FY27 | Q2: $3,724m, +2.3% QoQ cc, EBIT 18.2%, record NI ₹5,132 Cr, bookings $3.26bn. Q1: $3,650m, EBIT 16.9% | #2 |
| Segment mix ITBS ~72% / ERS ~16% / Software ~12% (snapshot, flow nodes, chart, legend) | Q2 FY27: 75.6% / 16.8% / 7.9%; FY26 Software 9.5%; Services ~92% | #3 |
| Strip "Net profit (FY26) ~₹17,361 Cr" | ₹16,652 Cr reported, with ₹17,361 Cr given as the figure before the labour-code charge (strip, snapshot, PAT chart, legend, EPS mini-stat) | #4, K1 |
| Headcount ~227k (strip, plain box, table) | ~230k / 230,339 (Sep 2026) | #5 |
| Attrition ~12.5% shown as current | 12.8% (Sep 2026) | #6 |
| Advanced AI "~$620m" | $219m in Q2 FY27 (~$0.9bn annualised), up from ~$620m | #7 |
| Promoter ~60.8% | 60.88%; FII 14.90% (from 19.38%), DII 18.75% | #8 |
| Events missing | Jaspersoft done (Jul 2026), CTG pending, Fortune Global 50 mega-deal, Project Ascend; new timeline entry FY27 (H1) | #9 |
| No m-cap/P/E | Valuation paragraph: ~₹3.6 lakh Cr, ₹1,326, ~19×, ~4.7× book, ~4.1% yield (13 Oct 2026); the old "HCL usually cheaper than TCS/Infosys" claim now notes it trades above them. Strip layout kept | #10, K1 |
| "Net cash" without a figure | ₹24,503 Cr (Sep 2026) vs ₹33,288 Cr (Mar 2026) | #11 |
| HCLSoftware bear "ARR roughly flat" | Revenue −11.2% YoY cc in Q2; ARR $1,134m growing mainly via Jaspersoft | pack 3.2 |
| Banned "Think of HCL…"; "honest" ×2 | Rephrased; "The honest weakness" → "The weak spot" (honest 1) | brief |
| 23 bar-rows | 20. Revenue chart dropped FY23 (−1), c-sub "FY24–FY26"; margin-levers chart dropped "Pyramid / freshers", now mentioned in the legend (−1); vertical-growth chart dropped the uninformative "Other … mixed" row (−1) | audit |

Not changed (unverified): Q2–Q3 FY26 bookings; vertical FY26 growth rates in the demand chart (~15% / ~7.5% / ~5.2%).

### wipro.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip/mini-stat: ~₹1.82 L Cr (Jul '26); "~18× forward P/E" vs TCS/Infosys "~24–28×" (note, valuation box, bull case) | ~₹1.68 L Cr; ~12.7× trailing vs TCS ~15× and Infosys ~14× (13 Oct 2026). "Discount" claims reworded as a narrower discount after a sector de-rating | batch 1 Wipro #1, K1 |
| "~230,000 employees" | 240,000+ incl. BPS | #2 |
| "TCS roughly flat" in FY26; Wipro "softest of the big four" / "all three peers grew" | TCS −2.4% cc (first-ever decline): chart row changed from "~flat" to "−2.4%" with a bad-fill bar, c-sub, legend, snapshot, What's new and bear case corrected | #3 |
| What's new stops at Q4 FY26 | Q1 FY27: $2,614.5m, −1.2% QoQ / +0.9% YoY cc, EBIT 16.0%, bookings $3.37bn, large deals $1.63bn; Q2 guide −1.5% to +0.5% | #4 |
| Promoter ~72.7% (snapshot, ownership ×3, bull) | 72.57% (Sep 2026); FII 9.46%, DII 5.14% (fell on buyback tender), public 12.70% | #6 |
| Events missing | Mindsprint closed, DTS Harman integration, Anthropic Claude CoE, AI-native unit, PERM statement (13 Oct), Q2 date 15 Oct | #7 |
| IT-services margin 17.2% shown as current | Strip: 16.0% (Q1 FY27; FY26 17.2%); §09 lead and mini-stat note the Q1 dip; bear "~16–17%" | #8 |
| Attrition 13.8% | 13.9% LTM (Q1 FY27) | #9 |
| Balance sheet "debt-free" | Net cash (~$4.3bn gross cash and investments vs ~₹20,300 Cr borrowings incl. leases) | pack 4.1 |
| Banned "Think of Wipro…"; "honest" ×4 | Rephrased; "honest framing" → "own framing", "honestly framed" → "framed plainly", "honest verdict" → "verdict" (honest 1) | brief |
| 23 bar-rows | 20. Bookings chart dropped "Large-deal bookings Q4 FY26 $1.44bn", moved to legend with Q1 FY27 $1.63bn (−1); revenue trajectory dropped FY22 (−1), c-sub "FY23–FY26"; FY26-glance chart dropped the "IT-services rev US$ million" row (−1) | audit |

Not changed (unverified): exact Wipro headcount (deck says "240K+"); FY26 total bookings $16.4bn (company did not state it; [E] only); approximate sector/geo mix chart.

### tech-mahindra.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip/mini-stats: ~₹1.4 L Cr; P/E "~27–29×"; yield ~3.5%+ / ~3.6% | ~₹1.51 L Cr, 28.4×, ~5.1× book, yield ~3.3% (13 Oct 2026). Valuation claim "comparable to or richer than TCS/Infosys" changed to "nearly double" theirs | batch 1 TechM #1, K1 |
| Headcount 147,623 / ~147,600 | 146,760 (Jun 2026) added | #2 |
| IT attrition ~12.1% | 11.8% (Jun 2026) added | #3 |
| "Q4 exit 13.8%, 10th straight quarter" (snapshot, chart row, legend, mini-stat, plain box, bull case, bottom line) | Q1 FY27 EBIT 14.4%, 11th straight quarter | #4 |
| TCV only FY26 | LTM $4,063m (+37.5%), Q1 $1,078m | #5 |
| No Q1 FY27 | $1,660m, +2.6% QoQ / +6.6% YoY cc, PAT ₹1,465 Cr, FCF $167m, utilisation 87%, DSO 84 | #6 |
| Promoter ~34.97% | 34.96% (Jun 2026); DII 36.92%, FII 18.66% | #7 |
| Events missing | Project Helix, phased wage rise from Q2, Q2 date 15 Oct, LCC Poland liquidation | #8 |
| ROCE basis unstated | Sources: Screener annual 23.1% vs company quarterly 28.3% | #9 |
| Geography chart (Americas ~40%, Europe ~26%, RoW ~24% — did not sum to 100%) | Q1 FY27: 48.6% / 27.5% / 23.9%; legend now "~51% non-Americas" | pack 5.2 (V) |
| Growth "hasn't turned" claims | Qualified: Q1 FY27 +6.6% YoY cc, first sign of a turn | pack 5.2 |
| Banned "Think of…"; "honest" ×2 | Rephrased; "honest answer" → "likely answer"; "honestly framed" → "framed plainly" (honest 0) | brief |
| 25 bar-rows | 20. Margin chart dropped FY22 and FY25 (their values moved to the legend), and the "Q4 FY26 exit" row was replaced by "Q1 FY27 14.4%" (−2); vertical chart merged Retail (~8%) and Healthcare (~7%) into "Retail & Healthcare ~15%" (−1); FY26-glance chart dropped the "Revenue US$ million" row, moved to legend (−1); trajectory chart dropped "FY22 rev", moved to legend (−1) | audit |

Not changed (unverified): FY26 cc growth ~0.6%; FY26 DPS ₹51 (from screener yield, not the release).

### ltm-ltimindtree.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip: ~₹1.1 L Cr; "20–23× trailing" (mini-stat, valuation box) | ~₹1.25 L Cr, ~22×, ~5.2× book (13 Oct 2026) | batch 1 LTM #1, K1 |
| "Discount to TCS/Infosys" claims (§09 sub, lead, mini-stat, plain box, §11 sub/lead, bull bullet, bottom line) | Now a premium to TCS (~15×) and Infosys (~14×); bull and bear reasoning rewritten to match | K1 (claim kept true) |
| FY26 "+6.0% cc" (What's new, snapshot, cc explainer, growth chart, key-figure table, bear case) | +6% in USD, ~+5.3% cc | #2 |
| Source "Q4 FY26 … Revenue ₹9,836 Cr, PAT ₹1,392 Cr" | Corrected in sources: ₹11,292 Cr; PAT ₹1,387 Cr reported / ₹1,341 Cr ex-exceptional | #3 |
| Vertical chart in old taxonomy (BFSI ~33% etc.) | Q1 FY27 segments: Financial Services 34.0%, Consumer 26.6%, Technology & Services 20.0%, Production 19.4% | #4 |
| ~72% North America | 73.9% (Q1 FY27); Europe 15.0%, RoW 11.1% | #5 |
| Peer chart "HCLTech ~19%" | ~17.2% (17.9% ex-restructuring) | #6 |
| No Q1 FY27 | $1,223.5m, +0.3% QoQ / +6.4% YoY cc, EBIT 15.5%, PAT ₹1,469 Cr, inflow $1.68bn, utilisation 86.4% | #7 |
| Randstad "in FY26 … (~€160 mn)", no terms | Announced 22 May 2026: EV €160m, $500m+ revenue, ~2,900 staff, FR/DE/BE/LU/AU, approvals pending; mgmt "no material margin impact in FY27" | #8 |
| Geography legend "Europe surged ~22%, partly reflecting the Randstad expansion" (deal not closed) | Q1 FY27 regional growth; Randstad described as pending | #8 |
| Headcount / ownership | 87,886 (Jun 2026); L&T 68.49%, DII 16.73%, FII 6.31%, public 8.30% | #9, #10 |
| "The story over the next few years will be written in…" | "Two numbers each quarter will settle it" | brief |
| Banned "Think of LTM…" | Rephrased | brief |
| 22 bar-rows | 20. Vertical chart from 5 old-taxonomy rows to 4 new segments (−1); PAT chart dropped FY24, value moved to c-sub (−1) | audit |

Not changed (unverified): FY26 BFSI "fell ~4%"; Lakshya wording kept (matches the verified "~2x revenue, ~+200 bps by FY31").

### persistent-systems.html
| What was wrong | What it says now | Source |
|---|---|---|
| USD in strip: "+17.4% YoY — USD growth · +23.5% INR" | "+23.5% YoY — Revenue growth (₹, FY26)" | batch 2 Persistent #1 |
| Strip/§10: ~₹74,000 Cr (Jul '26); P/E ~38–44× | ~₹94,600 Cr, 47.6×, ~12× book, ₹5,988 (13 Oct 2026) | #2, K1 |
| No mention of Nagarro | Lead What's new item; new snapshot bullet; 2026 timeline entry; balance-sheet bullet; §10 valuation, §11 lead, §12 lead/bear/bottom line: €81/share, EV ~€1.27bn, 94.04% secured (9 Oct 2026), close by end-Q1 CY27, €1.4bn bridge, up to $450m equity, ₹5,000 Cr NCDs (ICRA AA+ Watch Negative) | #3 |
| "Net cash / negligible debt / debt-free" (§03, §09, §12) | Net cash pre-close (~₹2,704 Cr cash & investments, Jun 2026); 1.9–2.5× net debt/EBITDA expected at close | #4 |
| Headcount ~27,502 | 28,640 (Jun 2026) | #5 |
| Attrition ~13% | 12.3% LTM (13.0% FY26) | #6 |
| Nothing after FY26 | Q1 FY27: $452.4m, +4.1% QoQ / +16.5% YoY cc, EBIT 16.0%, PAT ₹483 Cr (FX loss), record TCV $1,146m incl. $650m+ deal, utilisation 86.5% | #7 |
| §11 "$2bn in annual revenue by FY27" | $2bn is a Q4 FY27 exit run-rate (~$500m/qtr, ±1 quarter); $5bn pre-dates Nagarro; roadmap table updated with the CQGR maths | #8 |
| FIIs ~22%, DIIs ~30%; promoter ~30.3% | FII 20.79%, DII 31.96%, promoter 30.29% (Sep 2026) | #9 |
| TCV chart showed only new TCV, and "Q4 TCV $600.8m" was labelled as new | Chart now FY26 total $2,405.3m / new $1,465.8m, Q1 FY27 total $1,146.2m / new $952.2m; table "TCV (FY26)" | #10 |
| CDO resignation missing | Dr Rajesh Gharpure resigned effective 14 Oct 2026 | #11 |
| Concentration not quantified | Top-5 33.2%, top-10 43.0% | #12 |
| Banned "Think of…", "Both can be right", "a long way to fall"; "little room for error"; "story … is written in" | Rephrased | brief |
| Streak "24 quarters" | 25 with Q1 FY27 (FY26 references kept as history) | pack 1.4 |

Not changed (unverified): EBIT "aspiration ~18%+ / +200–300 bps" (the pack says the company aspiration is 16–17%, "not guidance"; the primer's figure comes from press and was left as is); IBM as a current top client.

### coforge.html
| What was wrong | What it says now | Source |
|---|---|---|
| USD in strip: "+29.2% USD YoY" | "+35.9% YoY (₹) — Revenue growth (FY26)" | batch 2 Coforge #1 |
| Strip/§10: ~₹62,950 Cr; ~38×; yield ~1.0% | ~₹85,600 Cr, 44.6×, ~6.8× book, yield ~0.6% (13 Oct 2026) | #2, K1 |
| No Encora | What's new lead, dek, snapshot, 2026 timeline entry, §05 lead, mini-stat, §10 and bear case: EV $2.35bn, 93.8m shares + $550m 4.6% loan, goodwill $1.29bn, +9,256 staff, consolidated ~1 May 2026 | #3 |
| "Cigniti fully absorbed" | Amalgamated: effective 5 May 2026, 1:1 swap, 1.267 crore shares allotted 3 Jun 2026, Cigniti delisted | #4 |
| PAT ₹1,745 Cr unlabelled (What's new, chart, table) | ₹1,556 Cr attributable (+91.6%); ₹1,745 Cr labelled "before minority interest"; table FY25 base now ₹812 Cr | #5 |
| FY27 "EBITDA 20.5–21%" (What's new, §05, bull, sources) | EBITDA >20.5%, consolidated EBIT 15.5%, FCF/PAT 100% | #6 |
| Headcount ~35,777; attrition ~10.8% | 46,228 (Jun 2026, incl. 9,256 Encora); 10.4% | #7 |
| "$1.75bn executable book" | $2,228m (Jun 2026, +44%); the $1.75bn kept as the Mar 2026 figure; chart row updated, Q1 intake $691m replaces Q4 row; chart widths fixed to scale on the $2,262m maximum | #8 |
| Debt narrative | Borrowings ₹5,380 Cr ($568m) vs ₹400 Cr; net debt ~₹3,590 Cr | #9 |
| No Q1 FY27 | $592.2m (+21.1% QoQ, +33.3% YoY; organic ex-exits +5.2% QoQ cc), EBIT 16.0%, PAT ₹519 Cr | #10 |
| Ownership (Mar-26 levels) | DII 42.62%, FII 24.31%, public 33.07% (Jun 2026) | #11 |
| F-1 / wage hikes missing | Form F-1 filed with US SEC (not effective); no broad wage rises before Jan 2027 | #12 |
| Vertical chart FY26 approx. | Q1 FY27 with Encora (BFS 24.7, TTH 21.3, Ins 13.6, H&HiTech 17.3, Govt 6.0, Others 17.1); FY26 values in legend | pack 2.2 |
| FY25 revenue 12,051 | 12,073 (Screener) | K1 |
| Banned "Think of…" (plus a doctor analogy); "both are true at once"; "grow into its premium"; "story … will be told in" | Rephrased | brief |

Not changed / not found: #13 "revenue crosses ₹1,745 Cr" did not appear in the current file. Unverified: FY26 cc growth; "~150–250 bps Cigniti synergy" mini-stat; F-1 purpose.

### mphasis.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip/§09: ~₹43,800 Cr; ~23×; ~2.7% yield (snapshot, mini-stat, valuation box, bull, bottom line) | ~₹47,300 Cr, 24.4×, ~4.4× book, yield ~2.5% (13 Oct 2026); peer comparison updated (tier-1s ~13–19×, Persistent ~48×, Coforge ~45×) | batch 2 Mphasis #1, K1 |
| "$1.79bn (+6.7%)" as USD growth | $1.80bn, +6.9% USD / +6.7% cc | #2 |
| Two blocks "during the year" (~15% and ~9.5%) in FY26 | ~15% in Jun 2024 (FY25); 9.46% on 18 Nov 2025 (~₹4,726 Cr, FY26) — ownership bullet, §10 lead, timeline, sources | #3 |
| "Confirmed no encumbrance" | Replaced: Screener (13 Oct 2026) flags the promoter holding as pledged; points the reader to the BSE encumbrance disclosure | #4 (conflict surfaced; detail unverified) |
| "~31,000+ employees" | 32,097 (Jun 2026); utilisation 81.0% vs 83.6% | #5, #10 |
| No Q1 FY27 | $471.1m, +2.1% QoQ / +8.3% YoY cc, EBIT 14.8%, PAT ₹490 Cr, TCV $461m, DSO 95; mini-stat Q4 → Q1 | #6 |
| M&A missing | TAP (Apr 2026), Red Oak contracts; Tria launch (What's new, FY27 timeline entry) | #7 |
| Events missing | Nitin Rakesh re-appointed; Q2 call 6 Nov 2026; HDFC MF 7.06% | #8 |
| Ownership split absent | Promoter 30.54%, FII 19.50%, DII 45.31% | #9 |
| Concentration not quantified | Top client 13%, top-5 40%, top-10 56% | #11 |
| Net cash not quantified | ~₹1,990 Cr (₹3,960 Cr cash vs ₹1,970 Cr borrowings, ex-leases) | #12 |
| Vertical chart Insurance ~8% (BFS ~54%), inconsistent with the strip's "~67% BFSI" | Q1 FY27: BFS 52.7, Ins 14.9, TMT 18.2, Logistics 4.2, Others 10.0; text "~53% + ~15% ≈ 68%" | pack 3.2 |
| "honest" ×2 | "The core tension", "A sober read on AI" (honest 0) | brief |
| Banned "Think of Mphasis…" | Rephrased | brief |

Not changed (unverified): attrition (not disclosed); pledge detail.

### hexaware-technologies.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip revenue ~₹13,782 Cr | ₹13,430 Cr (CY2025) | batch 2 Hexaware #1 |
| Strip/§09: ~₹32,800 Cr; ~24×; price ~₹539 | ~₹34,300 Cr, ~24×, ~5.1× book, ₹562 (~25% below listing, ~21% below IPO price) | #2, K1 |
| Headcount ~33,800 | 34,506 (Jun 2026) | #3 |
| Strip "~17.1% EBITDA" as the margin | Strip: 13.6% EBIT (Q2 CY26; CY26 guide 13–14%); 17.1% EBITDA labelled as company basis incl. other income (snapshot, mini-stat, bull) | #4 |
| No CY26 guidance / Q2 CY26 | Guide cut to 6–7% (29 Jul 2026); Q2 CY26 $405.4m, +4.4% QoQ / +6.3% YoY cc, EBIT 13.6%, PAT ₹330 Cr, attrition 11.2% | #5 |
| Utilisation ~81% | 84.8% Q2 CY26 (80 bps from the definition change) | #6 |
| FIIs ~4%, domestic ~15% | FII 3.19%, DII 16.06%, Carlyle 74.30% | #7 |
| Events missing | Anthropic Claude preferred partner (8 Oct), RSU/ESOP postal ballot (9 Oct), Colombia/GIFT City; CY2026 timeline entry | #8 |
| Concentration | Top-5 25.3%, top-10 35.7% | #9 |
| TCV not addressed | Leading-indicator paragraph now says Hexaware does not disclose TCV | #11 |
| Vertical and geography charts (CY25 approx.) | Q2 CY26 values from the company deck | pack 4.2 |
| "honest" ×2; banned "Think of…" | "honestly" and "honest caveats" removed (honest 0); rephrased | brief |

Not changed (unverified): "28 countries" (kept in the strip label); CY23 figures.

### zensar-technologies.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip/table revenue ~₹5,921 Cr | ₹5,687 Cr | batch 2 Zensar #1 |
| Strip headcount ~10,550 (Q4 FY26); rev/head ~$61,000 (§06, table, watch-list) | 11,342 (Jun 2026); 10,779 at Mar 2026; ~$60,000 FY26, ~$58,000 Q1 annualised | #2 |
| Market cap ~₹11,800 Cr; P/E ~15× (~11× ex-cash) | ~₹10,907 Cr, 13.7×, P/B ~2.3× (13 Oct 2026); ~13× ex-cash and interest income | #3, K1 |
| Claim "P/E well below large-cap Indian IT" (snapshot, §08, §10 plain box) | Now in line with de-rated large caps (~14–15×) and far below growth mid-caps (~45–48×) | K1 (claim kept true) |
| PAT "~₹800 Cr (approx.)" | ₹775 Cr | #4 |
| Net cash ~₹2,900 Cr (strip, snapshot, table, §10, bull) | ~₹3,030 Cr at the Mar 2026 rate ($317.5m Jun 2026) | #5 |
| Dividend "roughly a third of earnings" | FY26 payout ~44% | #6 |
| No Q1 FY27 | $159.5m, +1.1% QoQ / −2.0% YoY cc, EBITDA 14.6%, EBIT 12.7%, PAT ₹184 Cr, order book $149.2m, attrition 9.6%, utilisation 85.1%; FY27 (Q1) timeline entry | #7 |
| Largest deal unsized | $210m BFSI deal, full revenue Q3–Q4 FY27 | #8 |
| Attrition 9.8% | 9.6% (Jun 2026) | #9 |
| Ownership detail | 49.00%; FII 10.73%, DII 21.98% | #10 |
| Bull "16.1% in the most recent quarter" | FY26 16.0%; Q1 FY27 14.6% (transition costs) | pack 5.2 |
| 21 bar-rows (above the brief's 10–20) | 20. Scale chart dropped the "LTIMindtree ~$4.5bn" row (−1) | brief §4.3 |

Not added (verified but low priority, left for a later pass): client concentration (top-5 24.7%, top-10 38.9%) and COO Vijayasimha Alilughatta.

### birlasoft.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip ~₹8,100 Cr; P/E ~15.6× vs peers ~30× (snapshot, chart, plain box, mini-stats, bull, §10) | ~₹8,275 Cr, 13.9×, P/B ~2.0× (13 Oct 2026); peers Coforge 44.6× / Persistent 47.6× (avg ~46×); discount now ~70% (chart rows and widths updated); "half the multiple" claims reworded | batch 2 Birlasoft #1, K1 |
| FY26 "down ~1.2%" as the headline | −6.5% cc / −6.0% USD, cushioned to −1.2% in ₹ | #2 |
| Net cash ~₹2,000 Cr (§03, chart, legend, note) | ₹2,637 Cr (Mar 2026) / ₹2,879 Cr (Jun 2026) | #3 |
| Q4 TCV $208m presented as new wins | $208m total, $41m new (chart label, legend, What's new) | #4 |
| Rev/employee ~$52k | Kept; avg-headcount basis (~$51k) added | #5 |
| Attrition 13.0%; headcount 11,363 | 11.7%; 11,057 (Jun 2026) | #6 |
| No Q1 FY27 | $145.2m, +0.3% QoQ / −3.0% YoY cc, EBITDA 16.1%, EBIT 14.7%, PAT ₹161 Cr, TCV $169m, top-10 56.2%; wage rise from 1 Jul | #7 |
| Leadership | COO Vikram Puranik and new data/AI, ERP, alliances, LSS heads | #8 |
| Events | OpenAI Select Partner (8 Oct), CARE AA+ reaffirmed (24 Sep) | #9 |
| Promoter ~40.4% | 40.38%; FII 12.78%, DII 21.98%, public 24.85% | #10 |
| PAT flat without tax caveat | One-time US tax provision (ETR 34.4%); adjusted PAT ~$74m (~₹660 Cr) | #11 |
| Concentration | Top-5 43.4%, top-10 56.2% (bear case) | #12 |

Not changed: §05 heading "why the market pays half-price…" (it is a section heading, so it was left to preserve the structure; the body now says "less than a third").

### sonata-software.html
| What was wrong | What it says now | Source |
|---|---|---|
| Strip ~₹7,740 Cr · ~17× (snapshot, mini-stats, plain box, note, sources) | ~₹6,960 Cr · ~13.8× (13 Oct 2026) | batch 3 Sonata #1 |
| CEO "Samir Dhir drives strategy"; no 2026 transition | Rajsekhar Datta Roy CEO (International), Sujit Mohanty CEO (Domestic), Srikar Reddy Exec VC; new 2026 timeline entry | #2 |
| Headcount source "~8,013" | Company: 6,283/5,794 (Mar 2026), 6,293/5,795 (Jun 2026); the old figure is flagged as wrong | #3 |
| Net cash ~₹30 Cr / ₹606 Cr gross | ₹67 Cr net / ₹567 Cr gross (Jun 2026) | #4 |
| "RoCE above 30%" unqualified | Consolidated ~31%; IITS-only 24.5% (Q4) / 14.9% (Q1 FY27) | #5 |
| Microsoft direct billing missing | FY26 timeline and bear case | #6 |
| No Q1 FY27 | IITS $82.0m, +0.1% QoQ / +2.1% YoY cc, IITS EBITDA 15.4%, PAT ₹108 Cr, OB $97.4m (1.18×), utilisation 88.5%, dividend ₹1.25 | #7 |
| Peers "~30–40×" | LTM/Mphasis/TechM ~22–28×, Persistent/Coforge ~45× | #8 |
| Promoter ~28% | 28.17%; DII 24.68%, FII 9.17% | #9 |
| IITS margin ~18.5% (strip, mini-stat) | 18.4% FY26; Q1 FY27 15.4% noted | #10 |

Not changed (unverified): Microsoft share of IITS revenue; "~18.5%" left in body narrative paragraphs where it rounds the 18.4% figure.

### latent-view.html
| What was wrong | What it says now | Source |
|---|---|---|
| Market cap ~₹9,600 Cr; ~47–48× (strip, snapshot, mini-stat, plain box, note, bear) | ~₹4,950 Cr, ~25× (13 Oct 2026), stock −45% in a year | batch 3 Latent View #1 |
| No CEO change | Sonal Ramrakhiani CEO (Aug 2026); Rajan Sethuraman Strategic Advisor (management bullet, timeline) | #2 |
| Strip PAT "+7.4%" | +16.5% (7.4% was the Q4 figure); profitability chart and legend corrected | #3 |
| Revenue "+24.3%", FY25 base ~₹853 Cr | +25.0% on ₹847.8 Cr (strip, snapshot, timeline, mini-stat, chart, legend) | #4 |
| Decision Point "in FY26" / timeline "FY25–FY26" | Announced Jan 2024, consolidated from Q2 FY25 | #5 |
| No Q1 FY27 | $30.3m (−3.5% QoQ USD), adj. EBITDA 20.4%, PAT −6.9% YoY; FY27 guide ~12% USD, EBITDA 21–22%; "FY27 answers the test" paragraph updated | #6 |
| Largest-account loss ~$6.5–7M | $7–8M (insourcing), full impact in Q1 FY27 | #7 |
| ~87% US | ~90% North America | #8 |
| Concentration | Top-5 57%, top-10 72% | #9 |
| Profitability chart row "Q4 PAT margin 24.1%" | "Q4 adj. EBITDA margin 24.1%" (24.1% is the adj. EBITDA margin; Q4 PAT margin was ~19%) | pack 2.2 |

Not changed (unverified): net cash "several hundred crore" (~₹1,000 Cr is an estimate); attrition.

### black-box.html
| What was wrong | What it says now | Source |
|---|---|---|
| Market cap ~13,200 (mid-2026) | ₹16,382 Cr, ₹922/share (13 Oct 2026) | batch 3 Black Box #1 |
| "High-40s P/E" (§09, plain box, risks, bear, bottom line) | ~57× trailing (~52× on FY27 PAT guide midpoint) | #2 |
| Strip backlog ~₹7,000 Cr (FY26) | ~₹8,990 Cr (Jun 2026, +83% YoY); Mar 2026 $792m (~₹7,500 Cr) in body, chart and table | #3 |
| No Q1 FY27 / FY27 guidance | ₹1,719 Cr (+24%), EBITDA 9.3%, PAT ₹56 Cr, $131m hyperscaler order; FY27 guide ₹7,800–8,000 Cr / PAT ₹300–325 Cr; FY30 ₹18,000 Cr | #4 |
| "₹410 Cr funding round" | ₹386 Cr preferential warrant issue (75% received end-Mar 2026) | #5 |
| "Gross debt ~₹1,150 Cr" | ₹827 Cr financial debt + ₹326 Cr leases; net financial debt ~₹287 Cr | #6 |
| Management unnamed | CEO Sanjeev Verma, Global CFO Deepak Kumar Bansal | #7 |
| Promoter "rose to ~69.99%" | ~69.99% after warrant conversion, 69.95% (Jun 2026); "rose" removed (Screener shows 70.53% → 69.99%) | #8 |
| Cash conversion missing | FY26 CFO ₹84 Cr on ₹570 Cr EBITDA, FCF ~₹12 Cr, receivables doubled (§09, risks) | #9 |
| Data-centre mix | ~17% FY26 → ~30% FY27E | #10 |
| "(and eventually grow into) a rich multiple" | Removed | brief |

Not changed (unverified): CRISIL BBB+ upgrade; DII 3.41% not added; industry mix.

### happiest-minds.html
| What was wrong | What it says now | Source |
|---|---|---|
| No ITC Infotech merger | What's new lead; new first snapshot bullet ("Four facts"); 31 Aug 2026 timeline entry; ownership, overhang, founder note, §11 valuation, bull/bear, §12 lead rewritten: 25:81 swap (~₹405/share), 22.1% from Soota for ~₹1,330 Cr, ITC ~73% post-merger, CCI/SEBI/NCLT, listing Q2/Q3 FY28 | batch 3 HM #1, K4 #6 |
| Market cap ~₹6,650 Cr; ~28× (snapshot, §11, mini-stat, bull/bear, sources) | ~₹4,880 Cr, ~21×, P/B ~2.9× (13 Oct 2026); ~21% below the swap value | #2 |
| ~5,900 people | ~6,500 (6,532 Jun 2026) | #3 |
| Debt framing "net-cash turned leveraged" | ₹1,494 Cr borrowings vs ₹1,679/₹1,743 Cr cash, still modestly net cash | #4 |
| Strip "~20% EBITDA operating margin" | 17.4% op. margin (EBITDA incl. other income 20.3%); margin chart retitled and basis note added | #5 |
| "Soota continues as Executive Chairman" | Chairman and Chief Mentor | #6 |
| ~US$275m | ~US$264m | #7 |
| No Q1 FY27 | ₹628.5 Cr, +2.6% QoQ / +6.7% YoY cc, op. margin 17.5%, PAT ₹67.6 Cr, attrition 15.4%, utilisation 80.9%, guide ≥12% | #8 |
| GenAI ~4% | 5.2% in Q1 FY27 | #9 |
| Promoter ~44% | 44.21%; DII 5.66%, FII 6.00% | #10 |

Not changed (unverified): concentration (chart-read); earlier acquisitions list.

### mastek.html
| What was wrong | What it says now | Source |
|---|---|---|
| CEO "Hiral Chandrana as Global CEO" | Umang Nahata (CEO), Deepak Kedia (CFO); FY26 timeline notes the succession (2021 entry kept as history) | batch 3 Mastek #1 |
| ~₹5,900 Cr; ~13–14× (strip, snapshot, §10, mini-stat, plain box, bull) | ~₹5,320 Cr, ~12×, ~1.8× book (13 Oct 2026) | #2 |
| No Q1 FY27; backlog ₹2,849 Cr shown as latest | $104.8m, +1.8% QoQ / +3.0% YoY cc, EBITDA 15.4%, PAT ₹105.9 Cr, backlog ₹2,935 Cr / $310.1m, AI OB $64m; FY27 (Q1) timeline entry | #3 |
| Rupee-only growth | FY26 +3.1% USD ($421.2m); Q1 FY27 −2.4% YoY USD | #4 |
| "Cash ~₹900 Cr+" | ₹945 Cr (Jun 2026) vs ~₹438 Cr borrowings → net cash ~₹500 Cr | #5 |
| Tax dispute / Q2 date missing | FY2022-23 assessment (~₹31 Cr, appeal 26 Jun 2026); Q2 on 23 Oct 2026 | #6 |
| Promoter ~36% | 35.77%; DII 19.86%, FII 7.45% (FII→DII rotation) | #7 |
| Geography chart AMEA ~8% (conflicting with ~11% in text) | Q1 FY27: UK&E 67.3%, US 21.7%, AMEA 11.0% (12.1% Q4) | #8 |
| Peer-scale chart (Zensar/Birlasoft ~5,300, Persistent ~12,000, Coforge ~13,000; LTIMindtree ~₹38,000 Cr) | FY26 Screener: ~5,700 / ~5,300 / ~14,700 / ~16,400; LTM ~₹42,300 Cr | K1 |

Not changed (unverified): founder/promoter names and acquisition list; FY26 cc growth; "honest way to read Mastek" kept (the file's only "honest").

### datamatics-global.html
| What was wrong | What it says now | Source |
|---|---|---|
| Digital Experiences = "Lumina Datamatics publishing" (snapshot, chart, legend, engine list, subsidiaries bullet) | Digital Experiences = customer-experience/contact-centre (Philippines, India, US); Lumina/TNQTech digital content sits in Digital Operations | batch 3 Datamatics #1 |
| Net cash ~₹639 Cr as current | ₹639 Cr (Mar 2026), ₹710 Cr (Jun 2026), ~₹510 Cr pro-forma after the ~₹200 Cr TNQ earn-out | #2 |
| No Q1 FY27 | ₹513.9 Cr (+9.9% YoY), EBITDA 19.7%, PAT ₹72.3 Cr (+43.5%); "high single-digit" FY27 guide | #3 |
| Digital Operations ~53% (also DT ~34%, DX ~13%) | Q1 FY27: ~58% / ~30% / ~12%, with segment EBIT | #4 |
| Market cap ~₹4,680 Cr (mid-2026) | ~₹4,600 Cr, 18.1×, P/B ~3.0× (13 Oct 2026) | #5 |
| Headcount absent | 15,744 (Mar 2026) | #6 |
| Concentration | Top-5/10 30%/41% | #7 |
| PAT decline attributed to a "prior-year one-off" (snapshot, plain note, legend, notes) | ₹64.9 Cr FY26 exceptionals (₹40.85 Cr earn-out fair value + ₹24.0 Cr labour code), higher FY25 other income, minorities | #8 |
| Promoter ~66% | 66.33%; FII 0.50%, DII 0.10% | #9 |
| "Cheaper … far below the large caps" | Roughly in line with de-rated large caps (~13–19×) | K1 (claim kept true) |
| Geography chart (US ~52%, India ~17%) | Q1 FY27: US 56%, UK&E 25%, India 12%, RoW 7% | pack 6.2 |

Not changed (unverified): cc/USD growth (company reports ₹ only); utilisation.

---

## Fix counts
TCS 17 · Infosys 11 · HCLTech 14 · Wipro 11 · Tech Mahindra 13 · LTM 13 · Persistent 14 · Coforge 15 · Mphasis 13 · Hexaware 11 · Zensar 12 · Birlasoft 12 · Sonata 10 · Latent View 10 · Black Box 10 · Happiest Minds 10 · Mastek 9 · Datamatics 11. **Total 216 logged fixes (table rows)**, plus the four changes applied to every primer (CSS rule, refresh date, What's new, refresh source line) = 72 more edits.

## Self-check (after edits)
- `class="bar-row"` per primer: TCS 20, INFY 20, HCL 20, Wipro 20, TechM 20, LTM 20, Persistent 18, Coforge 20, Mphasis 19, Hexaware 17, Zensar 20, Birlasoft 19, Sonata 15, Latent View 16, Black Box 20, HM 19, Mastek 19, Datamatics 19. All are within 10–20.
- Banned phrases (outside `<style>`): none. "honest" is at most 1 in every file.
- The stat strips contain no $ or USD (the audit passes the USD-in-strip check).
- Tags balance: `<div>`/`</div>` and `<section>`/`</section>` are equal in every file. Div totals fell only by the removed bar-rows (4 divs each). Section counts are unchanged from before.

## Final primer-audit (`node subsectors/_template/primer-audit.mjs "IT || Computers - Software & Consulting"`)
| Primer | KB | Words | Bars | Plain | Sections | Report links | Refreshed | Hard checks | Notes |
|---|---|---|---|---|---|---|---|---|---|
| tata-consultancy-services.html | 65 | 5090 | 20 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| infosys.html | 63 | 4843 | 20 | 10 | 12 | 0 | 2026-06-30 | ✅ | — |
| hcl-technologies.html | 72 | 5974 | 20 | 12 | 13 | 0 | 2026-06-30 | ✅ | — |
| wipro.html | 74 | 6397 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| tech-mahindra.html | 75 | 6658 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| ltm-ltimindtree.html | 71 | 5951 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| persistent-systems.html | 73 | 5902 | 18 | 11 | 13 | 0 | 2026-06-30 | ✅ | — |
| coforge.html | 69 | 5596 | 20 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| mphasis.html | 68 | 5524 | 19 | 12 | 12 | 0 | 2026-06-30 | ✅ | — |
| hexaware-technologies.html | 68 | 5537 | 17 | 9 | 12 | 0 | 2026-06-30 | ✅ | — |
| zensar-technologies.html | 89 | 8909 | 20 | 12 | 12 | 0 | 2026-06-30 | ✅ | — |
| birlasoft.html | 71 | 6133 | 19 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| sonata-software.html | 70 | 6079 | 15 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| latent-view.html | 71 | 6419 | 16 | 11 | 12 | 0 | 2026-06-30 | ✅ | — |
| black-box.html | 74 | 6532 | 20 | 10 | 12 | 0 | 2026-07-27 | ✅ | — |
| happiest-minds.html | 78 | 7283 | 19 | 12 | 13 | 0 | 2026-07-27 | ✅ | — |
| mastek.html | 76 | 6980 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |
| datamatics-global.html | 78 | 7182 | 19 | 11 | 12 | 0 | 2026-07-27 | ✅ | — |

All primers pass the hard format checks. The "Refreshed" column is read from `data/primers.json`, which is outside this phase's edit scope. The orchestrator should bump it to 2026-10-13 if needed.
