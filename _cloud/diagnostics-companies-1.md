# Diagnostics & Wellness Services (Healthcare || Healthcare Service Provider): Company Fact Packs + KPI Appendix

Tier B · 5 members · prepared 2026-10-24 · companion to `_cloud/diagnostics-industry.md` (Part 1, written separately)

**Read first: corporate actions and other status flags**
- **All five are still listed.** No merger or delisting.
- **Thyrocare:** promoter Docon (API Holdings/PharmEasy) sold **9.9% on 13-Aug-2026** (₹985.9 Cr at ₹624–632). Promoter stake is now **51.02%**, down from 60.92%. The pledge on 10.99% was released on 11-Aug [V-snip outlookbusiness/inc42/hdfcsky]. A **postal ballot closing 29-Oct-2026** seeks approval to **sell all of Nueclear (radiology) to Trovera Healthcare for ~₹141.4 Cr**; it needs a majority of public shareholders [V BSE postal-ballot notice 28-Sep-26]. **The Q2 FY27 board meeting is on 29-Oct-2026** [V BSE intimation 22-Oct-26]. A **2:1 bonus** in FY26 changes per-share history: equity capital went from ₹53 Cr to ₹159 Cr [V screener].
- **Dr. Lal PathLabs** issued a **1:1 bonus** in FY26 (equity ₹84 → ₹168 Cr) [V screener; primer]. **Metropolis** equity rose from ₹10 Cr to ₹41 Cr in FY26, which implies a **3:1 bonus** [E from screener equity capital and EPS restatement; not seen in the primer — verify the ratio]. Pre-FY26 per-share figures in the primers must be read on the old share counts.
- **Jeena Sikho (JSLL):** the stock fell **~33% between 29-Sep (₹509) and 23-Oct-2026 (₹342)**. Volume was very heavy on 7–9 Oct (3.4–4.1 mn shares a day vs ~0.2–0.3 mn normally) [V screener price/volume API 24-Oct-26]. **I found no filing or news that explains the fall.** The writer must not attribute a cause without checking NSE/BSE announcements. M-cap and multiples below use the depressed price.
- **Metropolis:** its Q2 FY27 business update (5-Oct-26) reports revenue **~+15% YoY** with margins up "meaningfully" YoY and QoQ [V BSE]. Board date not seen.
- **Q2 FY27 board dates for Lal, Vijaya and JSLL were not announced** in the filings seen on 24-Oct.

---

# PART 2 — COMPANY FACT PACKS (5 members)

**Sources and conventions for every pack:**
- **Screener.in, consolidated page, fetched 24-Oct-2026** (Saturday, so prices are the 23-Oct-2026 close) [V screener 24-Oct-26]. Raw parses are in /tmp/diagnostics-companies/*.txt.
- **Primary documents (BSE AnnPdfOpen), fetched this session [V <doc>]:**
  - Lal Q1 FY27 results presentation (24-Jul-26)
  - Vijaya Q1 FY27 earnings presentation (6-Aug-26)
  - Metropolis Q1 FY27 investor presentation (4-Aug-26), Q2 FY27 business update (5-Oct-26) and Sep-2026 investor-meet deck
  - Thyrocare Q1 FY27 earnings presentation (23-Jul-26) and postal-ballot notice (28-Sep-26)
  - JSLL Q1 FY27 investor presentation (Aug-26)
- **Primers** in primers/ [primer]; refresh dates are given in each pack.
- **"OP"** is screener operating profit (EBITDA before other income). Screener nets **exceptional items into "Other income"**, so screener PAT is reported PAT.
- **Ind-AS 116:** screener **"Borrowings" include lease liabilities.** For Vijaya, all of it is leases (zero bank debt). Lal and Thyrocare are effectively free of bank debt [K/primer]. For the others the bank/lease split was not sourced.
- **Net debt on the screener basis** = borrowings − screener investments. Bank FDs and cash sit in "other assets" and are missed.
- **EV/EBITDA** = (m-cap + net debt) ÷ FY26 OP. The company-basis version is given where available.
- Tags:
  - [K] = background knowledge, not re-verified this session
  - [E] = my arithmetic or estimate
  - [V-snip] = search-result snippet only

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 23-Oct-26 close, screener 24-Oct-26)

| Company | NSE | Year | Revenue | YoY % | OP (EBITDA) | OPM % | PAT (reported) | ROCE % | ROE % | Net debt (cash) | M-cap | P/E (TTM) | P/B | EV/EBITDA (FY26) | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dr. Lal PathLabs | LALPATHLAB | FY26 | 2,763 | +12.3 | 783 | 28.3 | 510 (normalised 532) | 28.0 | 22.3 | (224) screener; **(1,327) company** = cash 1,526 − leases 199 | 30,854 | 54.9 | 12.3 | 39.1× screener / **37.7× company** | Samples 94.5 mn, patients 30.3 mn (FY26) | Rev/patient ~₹912 FY26; ₹973 Q1 FY27 [E] | 312 labs, 7,727 PSCs, 13,935 PUPs; SwasthFit 27% |
| Vijaya Diagnostic | VIJAYA | FY26 | 814 | +19.5 | 337 | 41.4 | 173 | 20.5 | 18.3 | 195 screener (all leases); **(287) lease-ex company surplus cash** | 14,310 | 76.3 | 14.9 | 43.0× screener / 42.9× incl. leases | Footfall 4.68 mn, tests 16.92 mn (FY26) | Radiology 37% / pathology 63%; B2C 92% | 166 centres (Jun-26); Hyderabad 67% of rev |
| Metropolis Healthcare | METROPOLIS | FY26 | 1,646 | +23.7 | 406 | 24.7 | 191 | 17.8 | 13.6 | 90 screener (bank/lease split n/s) | 10,849 | 52.1 | 7.2 | 26.9× | Q1 FY27 patients 3.69 mn, tests 7.83 mn | RPP ₹1,219, RPT ₹575 (Q1 FY27) | B2C 57% / B2B 43%; specialty 40%, TruHealth 18% |
| Thyrocare Technologies | THYROCARE | FY26 | 829 | +20.7 | 263 | 31.7 | 163 (pre-exc. ~167 [E]) | 35.4 | 28.4 | (126) screener | 7,372 | 40.8 | 12.6 | 27.6× | Q1 FY27 tests 55.2 mn (new defn), patients 5.4 mn | Rev/test ₹39.8, RPP ₹404 (Q1 FY27) | 11,730 active franchisees; 44 labs |
| Jeena Sikho Lifecare | JSLL | FY26 | 801 | +70.8 | 351 | 43.8 | 222 | 64.4 | 61.3 | 17 screener | 4,245 | 18.0 | 9.1 | 12.1× | 62 hospitals + 57 clinics; ~2,400 beds operational (Q1 FY27) | Occupancy ~56% FY26 (1,288/2,300) [E] | Products 53% / services 47% (Q1 FY27) |

Notes on the peer table:
- Every P&L figure is screener consolidated FY26 (year to Mar-2026).
- P/E is screener's TTM figure (through Jun-26). EV/EBITDA uses FY26 OP. On TTM OP it is lower; see §3.2.

## 2.1 Dr. Lal PathLabs (LALPATHLAB · 539524) — North-India-anchored pathology leader; Suburban (West) merged in; cash-rich, debt-free

**Primer:** dr-lal-pathlabs.html, refreshed **13-Jul-2026**. It covers FY26 but not Q1 FY27 (results 24-Jul-26).

**Standardised financials [V screener 24-Oct-26]**
- **P&L, FY22 → FY26 (₹ Cr):**
  - Revenue 2,087 / 2,017 / 2,227 / 2,461 / **2,763 (+12.3%)**.
  - OP 561 / 490 / 609 / 698 / **783**; OPM 27% / 24% / 27% / 28% / **28.3%**.
  - Other income 52 / 42 / 69 / 91 / **70**. FY26 is net of a one-off: the Dec-25 quarter shows −6 against a ~25 run-rate.
  - Depreciation 108 / 150 / 144 / 142 / **162**. Interest 30 / 38 / 29 / 22 / **23**.
  - **PAT 350 / 241 / 362 / 492 / 510.** EPS FY26 ₹30.13 (post-1:1 bonus).
- **Exceptional items:**
  - **FY26:** the company's "normalised" EBITDA is ₹783 Cr and PAT ₹532 Cr, against reported ₹752 Cr EBITDA and ₹510 Cr PAT [V Lal Q1 FY27 PPT]. So there was a ~₹31 Cr pre-tax / ~₹22 Cr post-tax one-off in FY26 (Q3). Its nature is not stated in the deck; probably the new-labour-code gratuity charge [K — verify].
  - **FY25:** PAT ₹492 Cr included a ~₹41 Cr one-time tax gain from liquidating Suburban [primer]. Q4 FY25 tax rate is −1% on screener.
  - **Pre-exceptional PAT FY26 ₹532 Cr.**
  - **Screener's OP (783) matches the company's normalised EBITDA**, because screener books the one-off below OP.
- **Last 8 quarters (sales / OP / OPM / PAT):**
  - Sep-24: 660 / 202 / 31% / 131
  - Dec-24: 597 / 154 / 26% / 98
  - Mar-25: 603 / 169 / 28% / 156
  - Jun-25: 670 / 192 / 29% / 134
  - Sep-25: 731 / 224 / 31% / 152
  - Dec-25: 660 / 179 / 27% / 91
  - Mar-26: 703 / 187 / 27% / 132
  - **Jun-26: 798 / 248 / 31% / 170**
- **Balance sheet (Mar-26):**
  - Equity ₹168 Cr + reserves ₹2,341 Cr = net worth ₹2,509 Cr.
  - **Borrowings ₹199 Cr.** These are lease liabilities under Ind-AS 116; the company has no bank debt [K/primer "no meaningful debt"].
  - Screener investments ₹423 Cr; fixed assets ₹1,256 Cr (incl. Suburban goodwill [K]).
  - CFO FY26 ₹636 Cr; FCF ₹463 Cr; CFO/EBITDA 104%; cash-conversion cycle −79 days.
- **Cash, company basis:** "Cash and cash equivalents" (incl. treasury investments) was 601 / 877 / 1,229 / **1,526 (Mar-26)** / **1,693 (Jun-26)** [V Lal Q1 FY27 PPT].
  - **Net cash, company basis: ₹1,526 − ₹199 leases = ₹1,327 Cr [E]**; lease-ex net cash ₹1,526 Cr.
  - Screener-basis net cash is only ₹224 Cr (199 − 423), because FDs sit in other assets.
  - **Use the company basis in prose.**
- **Valuation:**
  - Price **₹1,838**; **m-cap ₹30,854 Cr**; 52-week H/L ₹2,039 / ₹1,272.
  - **P/E 54.9 (TTM PAT ₹546 Cr)**; BV ₹150 → **P/B 12.3**; dividend yield 0.76%.
  - ROCE 28.0%, ROE 22.3%. The company quotes ROCE **excluding cash at 44% (FY26) and 58% (Q1 FY27)** [V PPT].
  - **EV/EBITDA:** ~39.1× screener basis ((30,854 − 224) ÷ 783); **~37.7× company basis** ((30,854 − 1,327) ÷ 783) [E]. TTM OP ₹838 Cr → ~35.2× company basis [E].

**Q1 FY27 (board 24-Jul-2026) [V Lal Q1 FY27 PPT]**
- Revenue ₹798 Cr (+19.1%), the company's "highest quarterly growth in 4 years".
- EBITDA ₹247 Cr (31.0% vs 28.7%); PAT ₹170 Cr (+27.2%). Screener: 798 / 248 / 170.
- Patients 8.2 mn (+8.2%); samples 25.9 mn (+10.7%); **SwasthFit (wellness bundles) 27% of revenue (flat)**.
- GraminFit rural programme: 7 states, >1.1 lakh patients in Q1.
- Guidance: management indicated it may raise FY27 growth guidance after H1 [V-snip askfuzz]; the base guidance was not sourced.
- **Q2 FY27 board date not announced** as of 24-Oct (Q2 FY26 results came on 31-Oct-2025 [V-snip voguestock]).
- **Oct-2026 filings [V screener announcements]:**
  - Acquired the remaining **30% of Centrapath Labs** via subsidiary PUPL (up to ₹30.3 Cr; 13-Oct-26).
  - Completed the **SN Genelab** stake acquisition (1-Oct-26).
  - The Income-Tax department is appealing at ITAT against relief on a ₹32.66 Cr ESOP disallowance (FY23).

**Native KPIs**
- **FY23 → FY26 [V PPT]:**
  - Patients 26.9 / 27.6 / 28.8 / **30.3 mn**.
  - Samples 72.3 / 78.2 / 85.6 / **94.5 mn**.
  - Labs 277 / 280 / 298 / **312**.
  - PSCs 5,102 / 5,762 / 6,607 / **7,727**.
  - Pick-up points 10,938 / 11,619 / 12,365 / **13,935**.
- **Derived [E]:**
  - Samples per patient FY26 3.12 (Q1 FY27 3.16).
  - Revenue per patient FY26 ~₹912 (primer "~₹910"); Q1 FY27 ~₹973.
  - Revenue per sample FY26 ~₹292; Q1 FY27 ~₹308.
- **Geography, FY26 revenue [V PPT]:** Delhi-NCR 31%, UP & Uttarakhand 19%, Rest of North 13%, East 15%, West 14%, South 6%, Others 2%.
  - **Tier-3+ towns: ₹1,090 Cr = 39% of revenue** (Tier-3+ CAGR 16.7%).
- **Network/accreditation:** 53 NABL + 2 CAP labs; four reference labs (National/Delhi, Kolkata, Bengaluru, Mumbai) [V PPT]. AA+ (Stable) from CARE.
- **Pathology vs radiology:** overwhelmingly pathology. A radiology split is not disclosed [primer].
- **B2C/B2B:** not disclosed in the deck. The primer describes the business as mainly B2C/doctor-referred.
- **Acquisitions:** Suburban Diagnostics (2021, ~₹1,150 Cr, all-cash), now merged into the parent [primer]; Centrapath (now 100%); SN Genelab (Oct-26).
- **Dividend** FY26 280% of face value (bonus-adjusted) [V PPT]; payout 68% [V screener].

**Ownership [V screener, Sep-26]:**
- Promoters (Lal family) **52.93%** (53.21% Mar-26; 54.60% Dec-23 — a slow drift).
- FII 18.73% (down from 26.82% in Sep-24); DII **21.57%** (up from 9.27% in Dec-23); public 6.35%.
- Pledges: none shown on screener; not separately verified.

**Story bullets**
- **The quality compounder:** 28% EBITDA margin (31% in Q1), negative working capital, >100% CFO/EBITDA and ~₹1.7k Cr of cash. ROCE ex-cash is 44–58%.
- **Volume is re-accelerating:** Q1 FY27 samples +10.7% and revenue +19%, the best in 4 years. The online price war has eased, and Tier-3+ (39% of revenue) and rural GraminFit are adding volume.
- **Concentration is the flip side:** ~63% of revenue comes from the North (NCR + UP/UK + Rest of North). West and South are still sub-scale despite Suburban.
- **Risks:** ~55× P/E prices in mid-teens growth; renewed online discounting; the ESOP tax dispute; and the one-off charge in FY26 (verify its nature).

## 2.2 Vijaya Diagnostic Centre (VIJAYA · 543350) — integrated pathology + radiology, B2C walk-in, Hyderabad-centred hub-and-spoke

**Primer:** vijaya-diagnostic.html, refreshed **18-Jul-2026**. It covers FY26 but not Q1 FY27 (6-Aug-26).

**Standardised financials [V screener 24-Oct-26]**
- **P&L, FY22 → FY26:**
  - Revenue 462 / 459 / 548 / 681 / **814 (+19.5%)**.
  - OP 204 / 182 / 221 / 273 / **337**; OPM 44% / 40% / 40% / 40% / **41.4%**.
  - Other income 13 / 14 / 19 / 17 / **21**. Depreciation 53 / 62 / 57 / 71 / **92**. Interest 16 / 21 / 24 / 27 / **33** (mostly lease interest [E]).
  - **PAT 111 / 85 / 120 / 144 / 173.**
- **Company P&L [V Vijaya Q1 FY27 PPT]:** FY26 revenue ₹814.2 Cr, EBITDA ₹336.9 Cr (41.4%), PAT ₹173.0 Cr; FY25 681.4 / 273.2 / 143.8.
  - Exceptional items: **nil in FY26**; ₹1.0 Cr in FY25; ₹2.1 Cr in FY24.
  - No minority interest from FY25.
  - Depreciation-method change (WDV → SLM, from Jan-2023) raised PAT by ₹6.8 Cr in FY23 and ₹29.1 Cr in FY24 [V PPT]. **FY24 PAT is flattered vs FY23.**
- **Last 8 quarters (sales / OP / OPM / PAT):**
  - Sep-24: 183 / 76 / 42% / 42
  - Dec-24: 169 / 67 / 40% / 35
  - Mar-25: 173 / 69 / 40% / 35
  - Jun-25: 188 / 74 / 39% / 39
  - Sep-25: 202 / 82 / 41% / 43
  - Dec-25: 205 / 86 / 42% / 43
  - Mar-26: 219 / 96 / 44% / 48
  - **Jun-26: 231 / 99 / 43% / 53**
- **Balance sheet (Mar-26):**
  - Net worth ₹957 Cr.
  - **Borrowings ₹423 Cr = lease liabilities ₹400.0 Cr non-current + ₹22.6 Cr current; bank borrowings zero** [V PPT balance sheet].
  - Right-of-use assets ₹367 Cr; goodwill ₹119 Cr (PH Diagnostics, Pune, acquired FY24 for ~₹147.5 Cr per the cash-flow statement).
  - CWIP ₹35 Cr. CFO FY26 ₹271 Cr; capex ₹183 Cr; FCF ₹91 Cr.
- **Net debt/cash:**
  - **Company "surplus cash" ₹286.9 Cr (Mar-26)** = investments 228.4 + cash 39.7 + bank balances 51.2 − deferred capital creditors 32.3 [V PPT].
  - **Lease-ex net cash ₹287 Cr; including leases, net debt ₹136 Cr [E].**
  - Screener basis: 423 − 228 = **net debt ₹195 Cr**. It misses the bank FDs and ignores that the debt is all leases.
  - **Prose should say "no bank debt; ~₹287 Cr surplus cash".**
- **Valuation:**
  - Price **₹1,389**; **m-cap ₹14,310 Cr**; 52-week H/L ₹1,594 / ₹848.
  - **P/E 76.3 (TTM PAT ₹187 Cr)**; BV ₹93 → **P/B 14.9**; dividend yield 0.14%.
  - ROCE 20.5%, ROE 18.3% (screener); company pre-tax ROCE ~25%, ROE ~20% [V PPT, chart read].
  - **EV/EBITDA:** ~43.0× screener basis; 42.9× including leases on the company basis; 41.6× lease-ex [E]. Lease-ex mixes bases, because Ind-AS EBITDA excludes rent.

**Q1 FY27 (presentation 6-Aug-2026; call 7-Aug) [V Vijaya Q1 FY27 PPT]**
- Revenue ₹231.0 Cr (+22.8%); EBITDA ₹98.5 Cr (**42.7%**, +356 bp); PAT ₹53.1 Cr (+37.6%).
- Other income ₹8.5 Cr; finance cost ₹11.0 Cr (+47%, leases on new hubs).
- **Footfall 1.24 mn (+12.7%)**; tests 4.59 mn (+16.5%); tests/footfall 3.70.
- **Revenue per test ₹503; revenue per footfall ₹1,860** (Q1 FY26: ₹477 / ₹1,707).
- **Wellness 14.8% of revenue** (wellness growth +27.7% YoY); B2C 92%; radiology 37% / pathology 63%.
- PH (Pune) grew ~18%.
- **Network:** 166 centres (Jun-26) in 27 cities; 17 NABL labs.
  - New Gachibowli hub (Apr-26; 160-slice cardiac CT).
  - **Flagship Bengaluru JP Nagar hub (Jul-26:** digital PET-CT, 3T wide-bore MRI, central lab).
- **Plan:** **9 hubs + 10–12 spokes in the next 12 months.** Karnataka to 6 hubs in FY27; East India to 8 centres; entry into Vijayawada/Guntur.
- **11-Sep-26:** 100% acquisition of the integrated diagnostics undertaking of **Arya Wellness Centre, Guwahati** (Assam) [V screener announcement].
- Q2 FY27 board date not seen; the trading window closed 28-Sep.

**Native KPIs**
- **FY25 → FY26 [V PPT]:**
  - Footfall 4.19 → **4.68 mn**; tests 14.79 → **16.92 mn**.
  - Tests/footfall 3.53 → **3.62**.
  - Revenue per test ₹461 → **₹481**; revenue per footfall ₹1,627 → **₹1,740**.
- **Mix:**
  - **Radiology 37% / pathology 63%** (FY25 and FY26 both 37/63; Q1 FY26 38/62).
  - B2C 92% (FY25 93%).
  - Wellness 14.2% FY26 (series read from the chart; check the exact quarter labels).
- **Gross margin** (revenue − materials) **88.4% FY26; 88.9% Q1 FY27** [V PPT]. Highest in the group because radiology consumes few reagents.
- **Regional mix, Q1 FY27 revenue:** Hyderabad 67%, Rest of AP & Telangana 20%, Pune 6%, Kolkata 4%, Others 3%.

**Ownership [V screener, Sep-26]:**
- Promoters (Reddy family) **52.46%**; FII **10.67%** (down from 19.95% in Dec-23); DII **32.49%** (up from 19.82%); public 4.38%.
- Kedaara (pre-IPO PE) is not separately shown; check whether it has fully exited [gap].
- Pledges not shown.

**Story bullets**
- **The margin outlier:** a 41–43% EBITDA margin comes from radiology (37% of revenue, which online labs cannot discount) and 92% walk-in B2C in a market where it is the default brand.
- **The growth bet is geographic:** Bengaluru, Pune (PH) and Kolkata/East, plus a new Guwahati foothold. The test is whether non-Hyderabad hubs reach the core's margins. Hyderabad is still two-thirds of revenue.
- **Capital intensity is higher than at the pathology chains:** depreciation is 11% of revenue and lease interest is rising. FCF of ₹91 Cr in FY26 is low relative to ₹173 Cr PAT during the hub build.
- **Risks:** 76× P/E (the highest in the group); state concentration; execution of 9 hubs in 12 months; and a falling FII share.

## 2.3 Metropolis Healthcare (METROPOLIS · 542650) — West/South pathology chain moving up the specialty ladder; five FY25–26 acquisitions led by Core Diagnostics

**Primer:** metropolis-healthcare.html, refreshed **2-Aug-2026**. It covers FY26 but not Q1 FY27 (4-Aug-26).

**Standardised financials [V screener 24-Oct-26]**
- **P&L, FY22 → FY26:**
  - Revenue 1,228 / 1,148 / 1,208 / 1,331 / **1,646 (+23.7%)**.
  - OP 348 / 293 / 288 / 308 / **406**; OPM 28% / 26% / 24% / 23% / **24.7%**.
  - Other income 34 / 15 / 9 / 15 / **16**. Depreciation 63 / 89 / 94 / 109 / **134**. Interest 25 / 32 / 28 / 24 / **29**.
  - **PAT 215 / 143 / 128 / 146 / 191.** EPS FY26 ₹9.17. This is post-bonus: equity went from ₹10 Cr to ₹41 Cr, implying 3:1 [E].
- **Exceptional items:** none visible on screener for FY26. The Dec-25 quarter other income (−0) hints at a small one-off [E — unverified].
- **Margin basis:** the company says FY26 margin was **24.4%, "absorbing a loss-making acquisition"; the organic margin was 25.9% (+140 bp)** [V Metropolis Sep-26 investor-meet deck]. Screener OPM is 24.7%.
- **Last 8 quarters (sales / OP / OPM / PAT):**
  - Sep-24: 350 / 90 / 26% / 47
  - Dec-24: 323 / 72 / 22% / 31
  - Mar-25: 345 / 62 / 18% / 29
  - Jun-25: 386 / 90 / 23% / 45
  - Sep-25: 429 / 108 / 25% / 53
  - Dec-25: 406 / 95 / 23% / 42
  - Mar-26: 425 / 108 / 25% / 51
  - **Jun-26: 450 / 111 / 25% / 57**
- **Balance sheet (Mar-26):**
  - Net worth ₹1,513 Cr.
  - **Borrowings ₹232 Cr.** Lease liabilities are included; the bank vs lease split was not sourced. Some acquisition funding may be bank debt [gap].
  - Investments ₹142 Cr; fixed assets ₹1,601 Cr, including goodwill from Hitech (2022) and Core [K].
  - CFO FY26 ₹351 Cr; FCF ₹300 Cr.
- **Net debt:** ~₹90 Cr on the screener basis. No company net-cash figure was found in the decks.
- **Valuation:**
  - Price **₹523**; **m-cap ₹10,849 Cr**; 52-week H/L ₹609 / ₹412.
  - **P/E 52.1 (TTM PAT ₹203 Cr)**; BV ₹73 → **P/B 7.2**; dividend yield 0.38%.
  - ROCE 17.8%, ROE 13.6%. Both are depressed by acquisition goodwill (ROCE was 29–46% before FY22).
  - **EV/EBITDA ~26.9×** ((10,849 + 90) ÷ 406) [E]; TTM OP ₹422 Cr → 25.9×.

**Q1 FY27 (presentation 4-Aug-2026) [V Metropolis Q1 FY27 PPT]**
- Revenue ₹450.2 Cr (+16.6%) "despite no price hikes".
- EBITDA ₹113.2 Cr (**25.2%**, +210 bp); PAT ₹56.9 Cr (+25.8%). Screener: 450 / 111 / 57.
- **Patients 3.69 mn (+10%); tests 7.83 mn (+11%).**
- **Revenue per patient ₹1,219 (+6%); revenue per test ₹575 (+5%)** [E: tests/patient 2.12].
- **B2C ₹257 Cr (57%, +18%); B2B ₹193 Cr (43%, +15%).**
- **TruHealth (wellness) ₹81 Cr (18%, +22%); specialty ₹178 Cr (40%, +17%)**; semi-specialty 25% (+15%); routine 17% (+13%).
- Region (domestic): **West 50%, South 27%, North 18%** (up from 17%), East 6%.
- City tier: Tier I 67%, Tier II 7%, Tier III 26%. Tier III revenue grew ~25%.
- **Network:**
  - 209 labs (FY25 210, FY26 212; 7 labs consolidated with acquired entities).
  - Service network **5,003** (+8%): ~750 points added, 318 non-productive closed.
  - Centre-to-lab ratio 24:1.
  - 35 ISO-15189 labs (31 India / 4 Kenya).
- **Q2 FY27 business update (5-Oct-26) [V BSE]:**
  - Revenue **~+15% YoY**, from double-digit patient and test volume growth.
  - TruHealth and Specialty were the fastest-growing segments.
  - EBITDA margin up "meaningfully" YoY and QoQ.
  - Board date not seen.

**Guidance and M&A [V Metropolis Sep-26 investor-meet deck]**
- **FY27 guidance:** revenue **+14–15% (no price increase assumed)**; EBITDA margin **+100–150 bp**.
- **Medium term:** margin from 24.4% toward **27–28%**; "1,000 own stores by FY29"; 100 mini-hubs adding radiology and consults; specialty **toward 45% of revenue**.
- **Acquisitions integrated (five): Hitech, Core Diagnostics, DAPIC (Dr Ahuja's Pathology & Imaging Centre, Dehradun [K]), Scientific Pathology (Agra [K]) and Ambika (Nagpur [K]).**
  - Core cost "~2×" revenue [V deck] / ~₹246 Cr [primer].
  - Core's EBITDA went from 2% to high single digit in 4 quarters; target 20%+ by year three.
  - North India share rose from mid-single-digit to 18%.
  - Africa markets "contemplated over FY27".

**Native KPIs (summary)**
- RPP ₹1,219 and RPT ₹575 (Q1 FY27): the highest per-patient realisation among the pathology-led chains.
- B2C 57%; specialty 40%; TruHealth 18%. Genomics portfolio "doubled after Core".

**Ownership [V screener, Sep-26]:**
- Promoters (Shah family) **47.82%**, **−1.04 pp in the Sep-26 quarter**. The reason was not researched (promoter sale vs RSU dilution) [gap].
- FII 11.67% (21.66% Dec-23); **DII 35.49%** (the highest in the group); public 5.02%.
- Pledges not shown.

**Story bullets**
- **The specialty-mix climber:** 40% of revenue from specialty, Core oncology/genomics cross-sold nationally, and RPP rising ~6% a year without price hikes.
- **The acquisition integrator:** five deals. Organic margin (25.9%) is above reported (24.4%). Margin convergence to 27–28% is the whole earnings case.
- **The cheapest pathology multiple** (26.9× EV/EBITDA; 52× P/E) because ROCE/ROE are diluted by goodwill (17.8% / 13.6%).
- **Risks:** acquisitions dilute returns; B2B (43%) is more price-exposed; the promoter stake is now below 48%.

## 2.4 Thyrocare Technologies (THYROCARE · 539871) — low-cost centralised B2B pathology "factory"; API Holdings/PharmEasy-controlled; radiology (Nueclear) being sold

**Primer:** thyrocare.html, refreshed **6-Aug-2026**. It covers FY26, not Q1 FY27 (23-Jul-26). It misses the Aug-26 stake sale and the Nueclear sale.

**Standardised financials [V screener 24-Oct-26]**
- **P&L, FY22 → FY26:**
  - Revenue 589 / 527 / 572 / 687 / **829 (+20.7%)**.
  - OP 236 / 123 / 140 / 190 / **263**; OPM 40% / 23% / 24% / 28% / **31.7%**.
  - Other income 29 / 9 / 9 / 15 / **12**. Depreciation 34 / 39 / 47 / 55 / **59**. Interest 3 / 5 / 6 / 4 / **4**.
  - **PAT 176 / 64 / 69 / 91 / 163.** FY22 was COVID-boosted. EPS FY26 ₹10.24 (post-2:1 bonus).
- **Exceptional items:**
  - **FY26 exceptional −₹6.16 Cr** (consolidated) [V Thyrocare Q1 FY27 PPT]; associate share +₹1.39 Cr.
  - Screener's FY26 "other income" of 12 = 16.99 − 6.16 + 1.39.
  - **Pre-exceptional PAT ≈ ₹167 Cr [E: 162.85 + 6.16 × (1 − 25%)]**; reported ₹162.85 Cr.
  - FY25 tax rate was 38% (Q4 FY25 54%), which depresses the FY25 base.
- **Company EBITDA, FY26 [V PPT]:** **₹262.0 Cr (31.6%)** consolidated.
  - Standalone pathology: revenue ₹774.3 Cr, EBITDA ₹256.3 Cr (33.1%), PAT ₹148.8 Cr.
  - **Radiology (Nueclear + Pulse Hi-tech): revenue ₹53.1 Cr (6.4% of consolidated), EBITDA ₹8.7 Cr, PAT ₹5.8 Cr.**
- **Last 8 quarters (sales / OP / OPM / PAT):**
  - Sep-24: 177 / 48 / 27% / 26
  - Dec-24: 166 / 42 / 25% / 19
  - Mar-25: 187 / 57 / 30% / 22
  - Jun-25: 193 / 58 / 30% / 38
  - Sep-25: 217 / 71 / 33% / 48
  - Dec-25: 196 / 58 / 30% / 28
  - Mar-26: 224 / 75 / 34% / 49
  - **Jun-26: 240 / 77 / 32% / 51**
- **Balance sheet (Mar-26):**
  - Equity ₹159 Cr + reserves ₹426 Cr = ₹585 Cr. Reserves fell from ₹494 Cr because of the bonus capitalisation and a dividend payout of 137%.
  - Borrowings ₹51 Cr (leases [E]); investments ₹177 Cr.
  - CFO ₹213 Cr; FCF ₹198 Cr.
- **Net cash ~₹126 Cr** (screener basis). No company figure was found.
- **Valuation:**
  - Price **₹463**; **m-cap ₹7,372 Cr**; 52-week H/L ₹662 / ₹343. The price is down ~26% from the ₹624–632 block-deal price of 13-Aug.
  - **P/E 40.8 (TTM PAT ₹176 Cr)**; BV ₹36.8 → **P/B 12.6**; **dividend yield 2.02%** (the highest in the group).
  - ROCE 35.4%, ROE 28.4%.
  - **EV/EBITDA ~27.6×** ((7,372 − 126) ÷ 263) [E]; TTM OP ₹282 Cr → 25.7×.

**Q1 FY27 (board 23-Jul-2026) [V Thyrocare Q1 FY27 PPT]**
- Consolidated revenue ₹240.0 Cr (+24.3%); EBITDA ₹77.3 Cr (**32.2%**, +226 bp); PAT ₹51.3 Cr (+34.1%).
- Standalone revenue ₹225.7 Cr (+26.1%):
  - **Franchise ₹143 Cr (+27%)**, partnerships ₹71 Cr (+26%), D2C +17%.
  - Pathology revenue mix: **franchise 64% / partnerships (online aggregators, platforms, corporate) 31% / D2C 5%**.
- **Patients 5.4 mn (+17%)**; **tests 55.2 mn (+28%)** on a **revised definition** that excludes calculated parameters.
  - Restated: FY26 = 43.1 + 48.4 + 44.5 + 52.7 = **188.7 mn [E]**, vs the 209.6 mn in the primer.
  - Revenue per test **₹39.8 (−2%)**; revenue per patient **₹404 (+7%)**; **tests per patient 10.2 (+9%)**.
- **Quarterly active franchisees 11,730** (+23%; ~900 added in Q1, the most in 3 years).
- **44 labs**, including 1 in Tanzania: 2 central + 2 zonal + 22 regional + 6 satellite + 7 hybrid + 4 acquired. 97% of samples are processed in NABL labs.
- Radiology revenue −4% (exits from unprofitable centres).
- **Q2 FY27 board and earnings call: 29-Oct-2026** [V BSE 22-Oct-26].

**Corporate actions and ownership**
- **Promoter Docon Technologies (API Holdings) sales:**
  - **Oct-2025:** ~10% at ~₹1,252 pre-bonus (~₹668 Cr) → 60.92% [primer].
  - **13-Aug-2026:** **1,57,69,696 shares (9.9%) at ₹624–632, ₹985.9 Cr → 51.02%.**
  - Buyers included Kotak Life, Tata AIA, Morgan Stanley, Citi, HBM Healthcare and the Kuwait Investment Authority.
  - API used the proceeds to repay ₹1,050 Cr and says it is now debt-free. **Pledge on 1.75 cr shares (10.99%) released 11-Aug-2026** [V-snip outlookbusiness/inc42/hdfcsky].
- **Shareholding, Sep-26 [V screener]:** promoter **51.02%**, FII **9.37%** (5.43% Jun-26), **DII 25.92%** (20.92%), public 13.69%.
  - Further sales would take the promoter close to the 51% control line. API's intentions are unknown.
- **Nueclear divestment [V BSE postal-ballot notice 28-Sep-26]:**
  - The board approved, on 23-Jul-26, an evaluation of a proposal from **Trovera Healthcare Pvt Ltd** to buy Thyrocare's **entire 1,11,11,000-share holding in Nueclear Healthcare** for **~₹141.4 Cr**: ₹59.5 Cr in Trovera CCPS (₹14,000 issue price) + ~₹81.9 Cr cash (working-capital adjusted).
  - Separately, Thyrocare is to **buy land and buildings (Gurugram, Hyderabad) from Nueclear for ₹20.59 Cr.**
  - Item 2 needs **approval by a majority of public shareholders**, which suggests related-party/MPS treatment; Trovera's ownership was not checked [gap].
  - E-voting runs 30-Sep → **29-Oct-2026**; result by 2-Nov-2026.
  - The primer describes this only as an "in-principle demerger". **It is now a sale, not a demerger.**
- **Bonus 2:1 in FY26** (equity ₹53 → ₹159 Cr; ₹10 face value; 15.9 cr shares). The primer's "₹1,252/share" for Oct-25 equals ~₹417 post-bonus [E].

**Story bullets**
- **The cost-per-test machine:** ~₹40 per test and ~10 tests per patient, processed in a near-monopoly centralised network. The 32% margin comes from utilisation, not price.
- **Mostly B2B:** 64% franchise + 31% online partnerships. It is the **wholesale processor** for aggregators (including the PharmEasy ecosystem), which makes it exposed to partner concentration and price.
- **Becoming pure pathology** once the Nueclear sale (~₹141 Cr) closes; radiology was 6% of revenue.
- **Overhang and risks:** API Holdings now holds only 51%, so more supply is possible; a 2%+ yield and >100% payout leave little reinvestment. The stock is −30% from its 52-week high despite +24–34% growth.

## 2.5 Jeena Sikho Lifecare (JSLL · 544476) — Ayurveda hospitals (HIIMS) + Shuddhi branded medicines; founder-led; SME → mainboard Aug-2025

**Primer:** jeena-sikho-lifecare.html, refreshed **21-Aug-2026**. It includes the Q1 FY27 revenue headline.

**Different archetype:** this is an AYUSH care-delivery + consumer-products business, not diagnostics. Its KPIs are beds, occupancy, IPD/OPD and medicine orders, not tests. Aggregate it separately (§3.2).

**Standardised financials [V screener 24-Oct-26]**
- **Annual series:** consolidated shows FY22, FY23, FY25 and FY26; **FY24 is blank** (consolidated accounts were not prepared that year [E]; standalone page not fetched).
  - Revenue FY22 147 / FY23 205 / FY25 469 / **FY26 801 (+70.8%)**.
  - OP 18 / 46 / 141 / **351**; OPM 12% / 22% / 30% / **43.8%**.
  - Other income 1 / 3 / 7 / **8**. Depreciation 3 / 3 / 29 / **48**. Interest 1 / 1 / 11 / **14**.
  - **PAT 11 / 34 / 80 / 222.** EPS FY26 ₹17.84.
- **Exceptional items:** none visible.
- **Last 8 quarters (sales / OP / OPM / PAT):**
  - Sep-24: 114 / 40 / 35% / 27
  - Dec-24: 116 / 30 / 26% / 13
  - Mar-25: 139 / 46 / 33% / 25
  - Jun-25: 174 / 79 / 45% / 51
  - Sep-25: 190 / 92 / 48% / 59
  - Dec-25: 222 / 101 / 45% / 67
  - Mar-26: 216 / 78 / 36% / 45
  - **Jun-26: 224 / 92 / 41% / 66**
- **Balance sheet (Mar-26):**
  - Equity ₹25 Cr (₹2 face value; ~12.4 cr shares) + reserves ₹442 Cr = ₹467 Cr.
  - **Borrowings ₹127 Cr** (largely lease liabilities on leased hospitals [E]; the company calls itself "debt-free" [V JSLL Q1 PPT]).
  - Investments ₹110 Cr (from ₹4 Cr); fixed assets ₹293 Cr, including ~₹62 Cr Oregano goodwill [primer].
  - CFO FY26 ₹254 Cr; FCF ₹221 Cr.
  - Debtor days improved from 49 to 32 [V screener pros].
- **Net debt ~₹17 Cr** (screener basis); lease-ex is likely net cash, but not quantified [gap].
- **Valuation:**
  - Price **₹342**; **m-cap ₹4,245 Cr**; 52-week H/L ₹840 / ₹331. The price is −53% over 1 year and **−33% since 29-Sep-26**.
  - **P/E 18.0 (TTM PAT ₹236 Cr)**; BV ₹37.6 → **P/B 9.1**; dividend yield 1.32% (₹4.50 final dividend approved at the 30-Sep-26 AGM).
  - ROCE 64.4%, ROE 61.3%.
  - **EV/EBITDA ~12.1×** ((4,245 + 17) ÷ 351) [E]: by far the cheapest in the group.

**Q1 FY27 (presentation Aug-2026; call 10-Aug-26) [V JSLL Q1 FY27 PPT]**
- Revenue ₹224.4 Cr (+29% YoY, +4% QoQ); gross margin 89%.
- EBITDA ₹92.1 Cr (**41%**, −415 bp YoY; +487 bp QoQ).
- **Other income ₹14.0 Cr (vs ₹1.1 Cr)**; PAT ₹65.7 Cr (+28%). **Ex-other income, PBT grew only ~9% [E: (87.3 − 14.0) = 73.3 vs (68.6 − 1.1) = 67.5].**
- **Mix:**
  - **Products (Shuddhi medicines) ₹118 Cr (53%, +47%; ~86% gross margin).** The "INJK Water Device" (launched Dec-2024) was the largest product in Q1.
  - **Services (hospitals, clinics, day-care) ₹106 Cr (47%; ~91% gross margin).** Panchakarma revenue +13%.
- **Volumes:** IPD +33% YoY; day-care +31%; OPD volumes +22% YoY [V PPT, labels partly garbled in the text extract].
- **Network:** **62 hospitals + 57 clinics/day-care centres; ~2,400 operational beds (deck elsewhere: "3,031 total beds"); 450 beds in the pipeline.** 51 NABH-accredited hospitals (+2 in the pipeline); Raipur NABH added 1-Oct-26.
  - Capex is ₹3–4 lakh per bed in leased facilities.
  - ~601 Ayurveda doctors.
- **Empanelment:** CGHS, CAPF, ECHS + 4 state governments; DDA, CBSE, CSIR, etc.; private insurers [V PPT].
- **Government-panel revenue share: ~25% (FY24) → ~16% (FY25) → ~4% (FY26)** [V PPT chart read]. This is the "government-business unwind" the primer mentions.
- Q2 FY27 board date not seen. Eight new products were launched on 5-Oct-26 [V screener announcement].

**Native KPIs, FY24 → FY26 [V PPT annual chart]**
- **Operational beds 1,277 / 1,600 / 2,300; occupied 490 / 850 / 1,288 → occupancy ~38% / 53% / 56% [E].**
- Average revenue per bed ~₹7,900 / 8,200 / 8,300. The deck labels it only "(In ₹)", probably per bed-day [E — verify].
- **IPD patients 13,159 / 24,578 / 40,454**; **OPD patients 2.52 / 3.37 / 5.70 lakh**.
- **FY26 revenue split:** medicines ~₹416 Cr vs hospital services ~₹385 Cr [primer].

**Governance and related parties [primer; not re-verified this session]**
- The auditor flagged revenue recognition as a Key Audit Matter.
- **Oregano Life acquisition** (Oct-2024, ~₹70 Cr, of which ~₹61.8 Cr is goodwill). Oregano was also a public shareholder that was selling.
- Interest-free director loan of ~₹10 Cr to the company; a ₹2.12 Cr interest-free loan to an erstwhile subsidiary that the auditor viewed as prejudicial; sales to related entities.
- Proposed group merger with Shuddhi Lifecare.
- The company has appointed Forvis Mazars as internal auditor [V PPT].
- **History [primer]:** SME IPO on NSE Emerge in 2022 (₹55.5 Cr at ₹150); **migrated to the NSE+BSE mainboard in Aug-2025**.
- Equity capital went from ₹14 Cr (FY23) to ₹25 Cr (FY25) → **a bonus or split occurred**; the ratio was not sourced [gap].
- **Promoter pledges:** not shown on screener; not verified [gap].

**Ownership [V screener, Sep-26]:**
- Promoters (Acharya Manish/Grover family) **63.67%**; FII 4.49% (6.59% Sep-25); DII 0.53%; public 31.29%.
- Shareholders grew from 25,905 (Mar-26) to **47,872** (Sep-26), mainly retail.

**Story bullets**
- **A founder-media funnel with hospitals attached:** YouTube reach (10 mn+ followers) → camps/OPD (~30% IPD conversion claimed) → IPD → repeat Shuddhi medicine orders. Products are now 53% of revenue.
- **The highest returns in the set** (ROE 61%, OPM 44% in FY26), but growth is slowing (+71% FY26 → +29% Q1 FY27). Q1 PAT growth leaned on other income.
- **Priced as the market's skeptic:** 18× P/E and 12× EV/EBITDA, against 40–76× for the diagnostics chains. The −33% fall in October-2026 has no identified cause.
- **Risks:** founder key-person and efficacy-claim/regulatory risk (AYUSH advertising rules [K]); the related-party and goodwill items above; the CGHS/government-panel unwind; thin institutional ownership (DII 0.5%).

## 2.6 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {"company":"Dr. Lal PathLabs","nse":"LALPATHLAB","bse":"539524","fy":"FY26","revenue":2763,"revenue_prev":2461,"rev_growth_pct":12.3,"ebitda_op":783,"ebitda_company_reported":752,"opm_pct":28.3,"other_income":70,"depreciation":162,"interest":23,"pat":510,"pat_pre_exceptional":532,"pat_prev":492,"roce_pct":28.0,"roe_pct":22.3,"borrowings":199,"borrowings_note":"lease liabilities (Ind-AS 116); no bank debt","investments_screener":423,"cash_company":1526,"cash_company_jun26":1693,"net_debt_screener":-224,"net_debt_company":-1327,"mcap":30854,"price":1838,"pe":54.9,"pb":12.3,"div_yield_pct":0.76,"ev_ebitda_screener":39.1,"ev_ebitda_company":37.7,"net_worth":2509,"ttm_pat":546,"ttm_op":838,"q1fy27_rev":798,"q1fy27_op":248,"q1fy27_pat":170,"q1fy26_rev":670,"q1fy26_op":192,"q1fy26_pat":134,"patients_fy26_mn":30.3,"samples_fy26_mn":94.5,"patients_q1fy27_mn":8.2,"samples_q1fy27_mn":25.9,"labs":312,"pscs":7727,"pups":13935,"wellness_share_pct":27,"tier3plus_share_pct":39,"rev_per_patient_fy26":912,"promoter_pct":52.93,"fii_pct":18.73,"dii_pct":21.57,"public_pct":6.35,"pledge_pct":null,"q1_result_date":"2026-07-24","q2_board_date":null,"bonus":"1:1 FY26"},
  {"company":"Vijaya Diagnostic Centre","nse":"VIJAYA","bse":"543350","fy":"FY26","revenue":814,"revenue_prev":681,"rev_growth_pct":19.5,"ebitda_op":337,"opm_pct":41.4,"other_income":21,"depreciation":92,"interest":33,"pat":173,"pat_pre_exceptional":173,"pat_prev":144,"roce_pct":20.5,"roe_pct":18.3,"borrowings":423,"borrowings_note":"all lease liabilities (400.0 NC + 22.6 C); bank debt 0","investments_screener":228,"surplus_cash_company":287,"net_debt_screener":195,"net_debt_company_incl_leases":136,"net_debt_company_lease_ex":-287,"mcap":14310,"price":1389,"pe":76.3,"pb":14.9,"div_yield_pct":0.14,"ev_ebitda_screener":43.0,"ev_ebitda_company":42.9,"net_worth":957,"ttm_pat":187,"ttm_op":362,"q1fy27_rev":231,"q1fy27_op":99,"q1fy27_pat":53,"q1fy26_rev":188,"q1fy26_op":74,"q1fy26_pat":39,"footfall_fy26_mn":4.68,"tests_fy26_mn":16.92,"footfall_q1fy27_mn":1.24,"tests_q1fy27_mn":4.59,"rev_per_test_q1fy27":503,"rev_per_footfall_q1fy27":1860,"radiology_share_pct":37,"b2c_share_pct":92,"wellness_share_pct":14.8,"centres":166,"hyderabad_share_pct":67,"promoter_pct":52.46,"fii_pct":10.67,"dii_pct":32.49,"public_pct":4.38,"pledge_pct":null,"q1_result_date":"2026-08-06","q2_board_date":null},
  {"company":"Metropolis Healthcare","nse":"METROPOLIS","bse":"542650","fy":"FY26","revenue":1646,"revenue_prev":1331,"rev_growth_pct":23.7,"ebitda_op":406,"opm_pct":24.7,"opm_company_pct":24.4,"opm_organic_pct":25.9,"other_income":16,"depreciation":134,"interest":29,"pat":191,"pat_pre_exceptional":191,"pat_prev":146,"roce_pct":17.8,"roe_pct":13.6,"borrowings":232,"borrowings_note":"incl. leases; split not sourced","investments_screener":142,"net_debt_screener":90,"net_debt_company":null,"mcap":10849,"price":523,"pe":52.1,"pb":7.2,"div_yield_pct":0.38,"ev_ebitda_screener":26.9,"net_worth":1513,"ttm_pat":203,"ttm_op":422,"q1fy27_rev":450,"q1fy27_op":111,"q1fy27_pat":57,"q1fy26_rev":386,"q1fy26_op":90,"q1fy26_pat":45,"q2fy27_rev_growth_update_pct":15,"patients_q1fy27_mn":3.69,"tests_q1fy27_mn":7.83,"rpp_q1fy27":1219,"rpt_q1fy27":575,"b2c_share_pct":57,"specialty_share_pct":40,"truhealth_share_pct":18,"labs":209,"service_network":5003,"fy27_rev_guidance_pct":"14-15","fy27_margin_guidance_bp":"100-150","promoter_pct":47.82,"fii_pct":11.67,"dii_pct":35.49,"public_pct":5.02,"pledge_pct":null,"q1_result_date":"2026-08-04","q2_board_date":null,"bonus":"implied 3:1 FY26 (verify)"},
  {"company":"Thyrocare Technologies","nse":"THYROCARE","bse":"539871","fy":"FY26","revenue":829,"revenue_prev":687,"rev_growth_pct":20.7,"ebitda_op":263,"ebitda_company_reported":262,"opm_pct":31.7,"other_income":12,"depreciation":59,"interest":4,"pat":163,"pat_pre_exceptional":167,"exceptional_pretax":-6.16,"pat_prev":91,"roce_pct":35.4,"roe_pct":28.4,"borrowings":51,"investments_screener":177,"net_debt_screener":-126,"net_debt_company":null,"mcap":7372,"price":463,"pe":40.8,"pb":12.6,"div_yield_pct":2.02,"ev_ebitda_screener":27.6,"net_worth":585,"ttm_pat":176,"ttm_op":282,"q1fy27_rev":240,"q1fy27_op":77,"q1fy27_pat":51,"q1fy26_rev":193,"q1fy26_op":58,"q1fy26_pat":38,"patients_q1fy27_mn":5.4,"tests_q1fy27_mn":55.2,"tests_fy26_restated_mn":188.7,"rev_per_test_q1fy27":39.8,"rpp_q1fy27":404,"tests_per_patient_q1fy27":10.2,"franchisees_active":11730,"labs":44,"radiology_rev_fy26":53.1,"franchise_share_pct":64,"partnership_share_pct":31,"d2c_share_pct":5,"nueclear_sale_consideration":141.4,"promoter_pct":51.02,"fii_pct":9.37,"dii_pct":25.92,"public_pct":13.69,"pledge_pct":0,"q1_result_date":"2026-07-23","q2_board_date":"2026-10-29","bonus":"2:1 FY26"},
  {"company":"Jeena Sikho Lifecare","nse":"JSLL","bse":"544476","fy":"FY26","revenue":801,"revenue_prev":469,"rev_growth_pct":70.8,"ebitda_op":351,"opm_pct":43.8,"other_income":8,"depreciation":48,"interest":14,"pat":222,"pat_pre_exceptional":222,"pat_prev":80,"roce_pct":64.4,"roe_pct":61.3,"borrowings":127,"borrowings_note":"largely leases (company says debt-free) [E]","investments_screener":110,"net_debt_screener":17,"net_debt_company":null,"mcap":4245,"price":342,"pe":18.0,"pb":9.1,"div_yield_pct":1.32,"ev_ebitda_screener":12.1,"net_worth":467,"ttm_pat":236,"ttm_op":363,"q1fy27_rev":224,"q1fy27_op":92,"q1fy27_pat":66,"q1fy27_other_income":14.0,"q1fy26_rev":174,"q1fy26_op":79,"q1fy26_pat":51,"hospitals":62,"clinics_daycare":57,"beds_operational":2400,"beds_pipeline":450,"beds_fy26":2300,"beds_occupied_fy26":1288,"occupancy_fy26_pct":56,"ipd_patients_fy26":40454,"opd_patients_fy26_lakh":5.70,"products_share_q1fy27_pct":53,"services_share_q1fy27_pct":47,"govt_panel_share_fy26_pct":4,"nabh_hospitals":51,"promoter_pct":63.67,"fii_pct":4.49,"dii_pct":0.53,"public_pct":31.29,"pledge_pct":null,"q1_result_date":"2026-08","q2_board_date":null,"price_change_29sep_23oct_pct":-33}
]
```

## 2.7 Conflicts and gaps (company level)
1. **JSLL:**
   - The −33% move between 29-Sep and 23-Oct-26 (heavy volume 7–9 Oct) is **unexplained**; no filing or news was found.
   - FY24 is missing on screener consolidated.
   - The bonus/split ratio behind equity going from ₹14 Cr to ₹25 Cr is unsourced.
   - The bed count conflicts within the same deck ("~2,400 operational" vs "3,031 total beds").
   - "Avg revenue per bed" has no unit.
   - Lease vs bank debt is not split.
   - Related-party facts come from the primer only. Pledges are not verified.
2. **Thyrocare:**
   - Test-count definition changed in Q1 FY27: the primer's FY26 **209.6 mn** is on the old basis, **188.7 mn** on the new [E sum of restated quarters].
   - Trovera's ownership is unknown; the "majority of public" requirement implies a related party — verify.
   - The postal-ballot outcome is due by 2-Nov.
   - The FY26 exceptional (−₹6.16 Cr) has no stated nature. Pre-exceptional PAT ~₹167 Cr is [E].
3. **Lal:**
   - FY26 reported EBITDA ₹752 Cr vs normalised ₹783 Cr (= screener OP). The ~₹31 Cr one-off is unnamed (labour code? [K]).
   - FY25 PAT includes a ~₹41 Cr tax gain [primer], so reported PAT growth (+3.7%) understates the underlying.
   - The Q2 board date is not announced.
   - "Net cash ₹1,526 Cr" in the primer is gross cash, before ₹199 Cr of leases.
4. **Vijaya:**
   - Screener shows **net debt ₹195 Cr**; the company has **zero bank debt and ₹287 Cr surplus cash**. The ₹423 Cr "borrowings" are all leases. Use the company basis.
   - The wellness-share series labels are garbled in the extract: FY26 14.2% vs Q1 FY27 14.8%.
   - Whether Kedaara has exited is unknown.
5. **Metropolis:**
   - The bonus ratio (3:1) is implied, not sourced.
   - Bank vs lease split of ₹232 Cr borrowings is not sourced.
   - The −1.04 pp promoter drop in the Sep-26 quarter is unexplained.
   - Company margin 24.4% vs screener 24.7%.
   - Labs: the primer's "~220" vs 209 (Q1 FY27) / 212 (FY26).
   - The cities for DAPIC, Scientific and Ambika are [K].
6. **All:** pledge data is not on the screener page, so pledges are unverified except Thyrocare (released Aug-26). Q2 FY27 is reported by none yet; Thyrocare reports on 29-Oct.

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (all five; ₹ Cr; screener consolidated 24-Oct-26 unless noted)

| Company | FY26 rev | YoY % | OP | OPM % | PAT (pre-exc.) | Q1 FY27 rev | Q1 YoY % | Q1 OPM % | Q1 PAT | M-cap | % of group m-cap | % of group rev | P/E (TTM) | EV/EBITDA (FY26) | Volume (latest) | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dr. Lal PathLabs | 2,763 | +12.3 | 783 | 28.3 | 510 (532) | 798 | +19.1 | 31.1 | 170 | 30,854 | 45.6 | 40.3 | 54.9 | 37.7× co. / 39.1× scr. | Samples 25.9 mn; patients 8.2 mn (Q1) | Rev/patient ~₹973 (Q1) [E] |
| Vijaya Diagnostic | 814 | +19.5 | 337 | 41.4 | 173 (173) | 231 | +22.9 | 42.9 | 53 | 14,310 | 21.2 | 11.9 | 76.3 | 42.9× co. / 43.0× scr. | Tests 4.59 mn; footfall 1.24 mn (Q1) | Rev/footfall ₹1,860; radiology 37% |
| Metropolis | 1,646 | +23.7 | 406 | 24.7 | 191 (191) | 450 | +16.6 | 24.7 | 57 | 10,849 | 16.0 | 24.0 | 52.1 | 26.9× | Tests 7.83 mn; patients 3.69 mn (Q1) | RPP ₹1,219; specialty 40% |
| Thyrocare | 829 | +20.7 | 263 | 31.7 | 163 (~167) | 240 | +24.4 | 32.1 | 51 | 7,372 | 10.9 | 12.1 | 40.8 | 27.6× | Tests 55.2 mn; patients 5.4 mn (Q1) | Rev/test ₹39.8; 10.2 tests/patient |
| Jeena Sikho | 801 | +70.8 | 351 | 43.8 | 222 (222) | 224 | +28.7 | 41.1 | 66 | 4,245 | 6.3 | 11.7 | 18.0 | 12.1× | IPD 40,454; OPD 5.70 lakh (FY26) | ~2,400 beds; occupancy ~56% (FY26) |
| **Total (5)** | **6,853** | **+21.7** | **2,140** | **31.2** | **1,259 (1,285)** | **1,943** | **+20.6** | **32.3** | **397** | **67,630** | 100 | 100 | **50.2× (Σm-cap ÷ ΣTTM PAT 1,348)** | **31.6× scr. / 31.0× co.** | | |

Notes:
- Q1 figures are screener quarterly; company Q1 figures match within ±₹1 Cr. Q1 OPM is screener OP ÷ revenue.
- "Pre-exc." PAT:
  - Lal: company "normalised" ₹532 Cr.
  - Thyrocare: ~₹167 Cr [E], adding back the ₹6.16 Cr pre-tax exceptional after tax.
  - The others reported no material exceptional items in FY26.
- % shares are [E] from the rows above.

## 3.2 Aggregates

All aggregates are **straight sums of the company rows above on one basis**: screener consolidated FY26 and FY25; Q1 FY27 vs Q1 FY26 from screener quarterly; m-cap at the 23-Oct-26 close (screener 24-Oct). Ratios are **ratios of the sums**: OPM = ΣOP ÷ ΣRev; P/E = Σm-cap ÷ ΣPAT; EV/EBITDA = (Σm-cap + Σnet debt) ÷ ΣOP, with net debt on the screener basis. [E throughout]

**The additions (FY26 unless stated)**
- **Revenue FY26:** 2,763 + 814 + 1,646 + 829 + 801 = **6,853**.
- **Revenue FY25:** 2,461 + 681 + 1,331 + 687 + 469 = **5,629** → growth 6,853 ÷ 5,629 = **+21.7%**.
- **OP FY26:** 783 + 337 + 406 + 263 + 351 = **2,140** → OPM 2,140 ÷ 6,853 = **31.2%**.
- **OP FY25:** 698 + 273 + 308 + 190 + 141 = **1,610** (OPM 28.6%; OP growth +32.9%).
- **PAT FY26, reported:** 510 + 173 + 191 + 163 + 222 = **1,259**.
  - **Pre-exceptional:** 532 + 173 + 191 + 167 + 222 = **1,285**.
- **PAT FY25:** 492 + 144 + 146 + 91 + 80 = **953** (growth +32.1%). FY25 Lal includes a ~₹41 Cr tax gain.
- **M-cap:** 30,854 + 14,310 + 10,849 + 7,372 + 4,245 = **67,630**.
- **Net debt, screener basis:** (−224) + 195 + 90 + (−126) + 17 = **−48** (net cash ₹48 Cr).
- **Net debt, company basis where available:** (−1,327) + 136 + 90 + (−126) + 17 = **−1,210** (net cash ₹1,210 Cr). Lal and Vijaya are on company figures including leases; the rest are screener.
- **TTM:**
  - Revenue 2,891 + 857 + 1,710 + 876 + 851 = **7,185**.
  - OP 838 + 362 + 422 + 282 + 363 = **2,267**.
  - PAT 546 + 187 + 203 + 176 + 236 = **1,348**.
- **Net worth (equity + reserves, Mar-26):** 2,509 + 957 + 1,513 + 585 + 467 = **6,031** → P/B 67,630 ÷ 6,031 = **11.2×**; ΣPAT ÷ Σnet worth = 1,259 ÷ 6,031 = **20.9%** (closing-equity ROE).

**(a) FY26 by subgroup**

| Group | Members | FY26 rev | FY25 rev | YoY | OP | OPM | PAT (reported) | PAT pre-exc. | M-cap | P/E (Σm-cap ÷ ΣPAT rep. / pre-exc.) | Net debt (screener) | EV/EBITDA |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **All five** | Lal, Vijaya, Metropolis, Thyrocare, JSLL | 6,853 | 5,629 | +21.7% | 2,140 | 31.2% | 1,259 | 1,285 | 67,630 | 53.7× / 52.6× | −48 | 31.6× |
| **Diagnostics ex-JSLL** | Lal, Vijaya, Metropolis, Thyrocare | 6,052 | 5,160 | +17.3% | 1,789 | 29.6% | 1,037 | 1,063 | 63,385 | 61.1× / 59.6× | −65 | 35.4× |
| **Pathology-led (Lal+Metropolis+Thyrocare)** | Lal, Metropolis, Thyrocare | 5,238 | 4,479 | +16.9% | 1,452 | 27.7% | 864 | 890 | 49,075 | 56.8× / 55.1× | −260 | 33.6× |
| **Ex-Lal Path** | Vijaya, Metropolis, Thyrocare, JSLL | 4,090 | 3,168 | +29.1% | 1,357 | 33.2% | 749 | 753 | 36,776 | 49.1× / 48.8× | 176 | 27.2× |
| **Diagnostics ex-Lal ex-JSLL** | Vijaya, Metropolis, Thyrocare | 3,289 | 2,699 | +21.9% | 1,006 | 30.6% | 527 | 527 (531 incl. Thyrocare add-back) | 32,531 | 61.7× / 61.3× | 159 | 32.5× |
| Wellness/Ayurveda (JSLL alone) | JSLL | 801 | 469 | +70.8% | 351 | 43.8% | 222 | 222 | 4,245 | 19.1× (FY26) | 17 | 12.1× |

**Additions for the subgroups:**
- **Diagnostics ex-JSLL:**
  - Rev 2,763 + 814 + 1,646 + 829 = 6,052; FY25 2,461 + 681 + 1,331 + 687 = 5,160.
  - OP 783 + 337 + 406 + 263 = 1,789; FY25 698 + 273 + 308 + 190 = 1,469 (+21.8%).
  - PAT 510 + 173 + 191 + 163 = 1,037; pre-exc. 532 + 173 + 191 + 167 = 1,063; FY25 873 (+18.8%).
  - M-cap 30,854 + 14,310 + 10,849 + 7,372 = 63,385.
  - Net debt −224 + 195 + 90 − 126 = −65 → EV 63,320 ÷ 1,789 = 35.4×.
- **Pathology-led:**
  - Rev 2,763 + 1,646 + 829 = 5,238; FY25 2,461 + 1,331 + 687 = 4,479.
  - OP 783 + 406 + 263 = 1,452; FY25 1,196 (+21.4%).
  - PAT 510 + 191 + 163 = 864; pre-exc. 532 + 191 + 167 = 890; FY25 729 (+18.5%).
  - M-cap 30,854 + 10,849 + 7,372 = 49,075.
  - Net debt −224 + 90 − 126 = −260 → EV 48,815 ÷ 1,452 = 33.6×.
- **Ex-Lal Path:**
  - Rev 814 + 1,646 + 829 + 801 = 4,090; FY25 681 + 1,331 + 687 + 469 = 3,168.
  - OP 337 + 406 + 263 + 351 = 1,357; FY25 912 (+48.8%).
  - PAT 173 + 191 + 163 + 222 = 749; pre-exc. 753; FY25 461 (+62.5%).
  - M-cap 14,310 + 10,849 + 7,372 + 4,245 = 36,776.
  - Net debt 195 + 90 − 126 + 17 = 176 → EV 36,952 ÷ 1,357 = 27.2×.
- **Diagnostics ex-Lal ex-JSLL:**
  - Rev 814 + 1,646 + 829 = 3,289; FY25 681 + 1,331 + 687 = 2,699.
  - OP 337 + 406 + 263 = 1,006; FY25 771 (+30.5%).
  - PAT 173 + 191 + 163 = 527; FY25 381 (+38.3%).
  - M-cap 14,310 + 10,849 + 7,372 = 32,531.
  - Net debt 195 + 90 − 126 = 159 → EV 32,690 ÷ 1,006 = 32.5×.

**Read:**
- **Lal is 40% of revenue and 46% of m-cap**; Vijaya is 12% of revenue and 21% of m-cap (the radiology/B2C premium); Metropolis is 24% of revenue but only 16% of m-cap (the goodwill-diluted ROCE discount); JSLL is 12% of revenue and 6% of m-cap.
- **The diagnostics four trade at ~61× P/E and ~35× EV/EBITDA on ~17% growth.** Including JSLL pulls the group to ~54× and 32×. JSLL distorts every all-five ratio (growth +71%, P/E 18×), so lead with "Diagnostics ex-JSLL" in prose.
- **FY26 diagnostics margin 29.6%:** Vijaya (41%) at the top, Metropolis (25%) at the bottom. Mix (radiology, B2C) explains the gap better than scale does.

**(b) Q1 FY27 vs Q1 FY26 (quarterly, screener)**
- **Additions:**
  - Rev Q1 FY27: 798 + 231 + 450 + 240 + 224 = **1,943**; Q1 FY26: 670 + 188 + 386 + 193 + 174 = **1,611**.
  - OP: 248 + 99 + 111 + 77 + 92 = **627**; Q1 FY26: 192 + 74 + 90 + 58 + 79 = **493**.
  - PAT: 170 + 53 + 57 + 51 + 66 = **397**; Q1 FY26: 134 + 39 + 45 + 38 + 51 = **307**.

| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OP Q1 FY26 | YoY | OPM Q1 FY27 / Q1 FY26 | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|
| All five | 1,943 | 1,611 | +20.6% | 627 | 493 | +27.2% | 32.3% / 30.6% | 397 | 307 | +29.3% |
| Diagnostics ex-JSLL | 1,719 | 1,437 | +19.6% | 535 | 414 | +29.2% | 31.1% / 28.8% | 331 | 256 | +29.3% |
| Pathology-led (Lal+Metropolis+Thyrocare) | 1,488 | 1,249 | +19.1% | 436 | 340 | +28.2% | 29.3% / 27.2% | 278 | 217 | +28.1% |
| Ex-Lal Path | 1,145 | 941 | +21.7% | 379 | 301 | +25.9% | 33.1% / 32.0% | 227 | 173 | +31.2% |
| Diagnostics ex-Lal ex-JSLL | 921 | 767 | +20.1% | 287 | 222 | +29.3% | 31.2% / 28.9% | 161 | 122 | +32.0% |
| JSLL | 224 | 174 | +28.7% | 92 | 79 | +16.5% | 41.1% / 45.4% | 66 | 51 | +29.4% |

- Subgroup additions (Q1 FY27 / Q1 FY26):
  - Ex-JSLL rev 798 + 231 + 450 + 240 = 1,719 / 670 + 188 + 386 + 193 = 1,437; OP 248 + 99 + 111 + 77 = 535 / 192 + 74 + 90 + 58 = 414; PAT 170 + 53 + 57 + 51 = 331 / 134 + 39 + 45 + 38 = 256.
  - Pathology-led rev 798 + 450 + 240 = 1,488 / 670 + 386 + 193 = 1,249; OP 248 + 111 + 77 = 436 / 192 + 90 + 58 = 340; PAT 170 + 57 + 51 = 278 / 134 + 45 + 38 = 217.
  - Ex-Lal rev 231 + 450 + 240 + 224 = 1,145 / 188 + 386 + 193 + 174 = 941; OP 99 + 111 + 77 + 92 = 379 / 74 + 90 + 58 + 79 = 301; PAT 53 + 57 + 51 + 66 = 227 / 39 + 45 + 38 + 51 = 173.
  - VMT rev 231 + 450 + 240 = 921 / 188 + 386 + 193 = 767; OP 99 + 111 + 77 = 287 / 74 + 90 + 58 = 222; PAT 53 + 57 + 51 = 161 / 39 + 45 + 38 = 122.
- **Read:**
  - Q1 FY27 was a **synchronised volume-led acceleration** for diagnostics: all four grew revenue 17–24% with ~200–350 bp of margin expansion. Operating leverage is visible in OP +29% on revenue +20%.
  - JSLL is the only member whose margin fell (−4.3 pp).

**(c) Balance sheet and cash (Mar-26; screener unless noted)**
- **Borrowings:** 199 (Lal) + 423 (Vijaya) + 232 (Metropolis) + 51 (Thyrocare) + 127 (JSLL) = **₹1,032 Cr**.
  - **Most or all of it is Ind-AS 116 lease liabilities.** Vijaya's ₹423 Cr is 100% leases [V PPT]; Lal's is leases [K/primer].
- **Screener investments:** 423 + 228 + 142 + 177 + 110 = **₹1,080 Cr** → screener-basis **net cash ₹48 Cr**.
- **Company basis:** Lal cash ₹1,526 Cr (₹1,693 Cr Jun-26); Vijaya surplus cash ₹287 Cr.
  - Group net cash including leases ≈ **₹1,210 Cr** (1,327 − 136 − 90 + 126 − 17).
  - **Lease-ex, the group has no bank debt to speak of** [E; Metropolis split unverified].
- **CFO FY26:** 636 + 271 + 351 + 213 + 254 = **₹1,725 Cr**. **FCF:** 463 + 91 + 300 + 198 + 221 = **₹1,273 Cr** → FCF yield 1,273 ÷ 67,630 = **1.9%**.

**(d) Ownership (Sep-26, simple averages)**
- **Promoter:** (52.93 + 52.46 + 47.82 + 51.02 + 63.67) ÷ 5 = **53.6%**. Range 47.8% (Metropolis) – 63.7% (JSLL).
- **FII:** (18.73 + 10.67 + 11.67 + 9.37 + 4.49) ÷ 5 = **11.0%**. **DII:** (21.57 + 32.49 + 35.49 + 25.92 + 0.53) ÷ 5 = **23.2%**.
- **The FII → DII rotation is the common thread.** Since Dec-23, FII fell at Lal (−6.6 pp), Vijaya (−9.3 pp) and Metropolis (−10.0 pp), while DII rose 10–15 pp at each.
- JSLL is the exception (DII 0.5%; retail-heavy).

**(e) Native-KPI comparison (latest; mixed periods, stated)**

| KPI | Lal | Vijaya | Metropolis | Thyrocare | JSLL |
|---|---|---|---|---|---|
| Patients / footfall (Q1 FY27) | 8.2 mn | 1.24 mn | 3.69 mn | 5.4 mn | IPD +33% YoY (FY26 IPD 40,454) |
| Tests or samples (Q1 FY27) | 25.9 mn samples | 4.59 mn tests | 7.83 mn tests | 55.2 mn tests (new defn) | n.a. |
| Tests per patient | 3.16 (samples) [E] | 3.70 | 2.12 [E] | 10.2 | n.a. |
| Revenue per patient (Q1 FY27) | ~₹973 [E] | ₹1,860 | ₹1,219 | ₹404 | n.a. (rev/bed ~₹8,300, unit unclear) |
| Revenue per test/sample | ~₹308/sample [E] | ₹503/test | ₹575/test | ₹39.8/test | n.a. |
| B2C share | n/d (mostly B2C [primer]) | 92% | 57% | 5% D2C (95% franchise/partner) | ~100% patient-pay ex govt panel (4% FY26) |
| Wellness share | 27% (SwasthFit) | 14.8% | 18% (TruHealth) | n/d (heritage Aarogyam) | n.a. |
| Radiology share | small, n/d | 37% | small (radiology-integrated wellness +40%) | 6% (FY26; being sold) | n.a. |
| Network | 312 labs, 7,727 PSCs, 13,935 PUPs | 166 centres, 17 NABL labs | 209 labs, 5,003 service points | 44 labs, 11,730 franchisees | 62 hospitals + 57 clinics, ~2,400 beds |
| Home region share | NCR + North ~63% | Hyderabad 67% | West 50% | n/d (lab-basis mix by region) | n/d |

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / web (24-Oct-26) | Use |
|---|---|---|---|---|
| Lal | FY26 rev / EBITDA / PAT | 2,763 / ~27% / 510 | 2,763 / OP 783 (28.3%; co. reported 752 = 27.2%; normalised 783) / 510 (norm. 532) | Screener; state the basis |
| Lal | M-cap / P/E | ~₹28,000 Cr (Jul-26) / ~55× | **₹30,854 Cr / 54.9×** | Screener |
| Lal | Net cash | "~₹1,526 Cr of net cash" | Cash & equivalents ₹1,526 Cr (gross); leases ₹199 Cr → net ₹1,327 Cr; Jun-26 cash ₹1,693 Cr | Company, labelled |
| Lal | Q1 FY27 | not covered | Rev 798 (+19.1%), EBITDA 247 (31%), PAT 170; samples +10.7%, patients +8.2% | Web (PPT) |
| Lal | Promoter | ~53% [primer] | 52.93% | Screener |
| Lal | Corporate | Suburban merged; 1:1 bonus | + Centrapath 100% (Oct-26), SN Genelab (Oct-26), ITAT ESOP appeal | Web |
| Vijaya | FY26 rev / EBITDA / PAT | ~814 / ~337 / ~173 | Same | — |
| Vijaya | M-cap / P/E | ~₹13,000 Cr / ~80× | **₹14,310 Cr / 76.3×** | Screener |
| Vijaya | Centres | 162 | **166 (Jun-26)** + Guwahati (Arya, Sep-26) | Web |
| Vijaya | Net cash | "net-cash / effectively debt-free" | Bank debt 0; leases ₹423 Cr; surplus cash ₹287 Cr; screener shows net debt ₹195 Cr | Company basis, with a lease note |
| Vijaya | Q1 FY27 | not covered | Rev 231 (+22.8%), EBITDA 42.7%, PAT 53 (+37.6%); 9 hubs + 10–12 spokes plan | Web |
| Metropolis | FY26 rev / EBITDA / PAT | ~1,646 / ~406 (24.7%) / ~191 | Same (company says 24.4%; organic 25.9%) | Screener; note organic |
| Metropolis | M-cap / P/E | ~₹12,000 Cr / ~60× | **₹10,849 Cr / 52.1×** | Screener |
| Metropolis | Labs | ~220 | 212 (FY26), 209 (Q1 FY27) | Web (PPT) |
| Metropolis | Acquisitions | "four FY25–26 acquisitions (led by Core)" | **Five integrated: Hitech, Core, DAPIC, Scientific Pathology, Ambika** (Hitech is 2022 vintage) | Web; reword |
| Metropolis | Guidance | margin "~27–28% target" | FY27 rev +14–15%, margin +100–150 bp; 1,000 own stores by FY29 | Web |
| Metropolis | Q1 / Q2 FY27 | not covered | Q1 rev 450 (+16.6%), EBITDA 25.2%; Q2 update rev ~+15% | Web |
| Metropolis | Promoter | Shah family (no % checked) | 47.82% (−1.04 pp in Sep-26 quarter) | Screener |
| Thyrocare | FY26 rev / EBITDA / PAT | ~829 / ~262 (31.6%) / ~163 | Same; exceptional −6.16 | — |
| Thyrocare | Tests FY26 | 209.6 mn | **188.7 mn on the new definition** (Q1 FY27 restatement) | Use the new basis with a note |
| Thyrocare | M-cap / P/E | ~₹9,550 Cr / ~50× | **₹7,372 Cr / 40.8×** | Screener |
| Thyrocare | Promoter | ~60.9% | **51.02%** (9.9% sold 13-Aug-26; pledge released) | Screener/web |
| Thyrocare | Nueclear | "in-principle demerger" | **Sale of 100% to Trovera, ~₹141.4 Cr; postal ballot ends 29-Oct-26** | Web (BSE) |
| Thyrocare | Q1 FY27 | not covered | Rev 240 (+24%), EBITDA 32.2%, PAT 51 (+34%); 11,730 franchisees | Web |
| JSLL | FY26 rev / EBITDA / PAT | ~801 / ~350 (44%) / ~222 | 801 / 351 / 222 | — |
| JSLL | M-cap / P/E | ~₹6,275 Cr / ~28× | **₹4,245 Cr / 18.0×** (price −33% since 29-Sep) | Screener |
| JSLL | ROCE / ROE | ~70.7% / ~60% | 64.4% / 61.3% | Screener |
| JSLL | Network | 61 hospitals + 58 clinics, ~2,300 beds | 62 + 57, ~2,400 operational beds, 450 pipeline (Q1 FY27) | Web |
| JSLL | Q1 FY27 | rev ~224 | Rev 224 (+29%), EBITDA 41% (−4 pp), PAT 66 incl. ₹14 Cr other income | Web |
| JSLL | Govt panel | "government-business unwind" | Govt-panel revenue share ~25% → 16% → 4% (FY24 → FY26) | Web |

## 3.4 Primer issues (format as primer-issues.md)

### From Diagnostics research (2026-10-24, diagnostics-industry.md §3.4)

- **dr-lal-pathlabs.html — Q1 FY27 omitted (refreshed 13-Jul):**
  - Revenue ₹798 Cr (+19.1%, the best in 4 years); EBITDA ₹247 Cr at **31.0%**; PAT ₹170 Cr (+27.2%).
  - Samples 25.9 mn (+10.7%); patients 8.2 mn (+8.2%); SwasthFit 27%.
  - Cash ₹1,693 Cr (Jun-26); ROCE ex-cash 58%.
  - Oct-26 filings: Centrapath to 100% (₹30.3 Cr), SN Genelab acquisition completed, ITAT ESOP appeal (₹32.66 Cr).
- **dr-lal-pathlabs.html — "net cash ~₹1,526 Cr":** ₹1,526 Cr is gross "cash and cash equivalents" (incl. treasury investments). Lease liabilities are ₹199 Cr (screener "borrowings"), so net cash is ~₹1,327 Cr. Either say "cash ~₹1.5k Cr, no bank debt" or net the leases.
- **dr-lal-pathlabs.html — FY26 EBITDA basis:** the stat strip says "~27% EBITDA". Company-reported FY26 EBITDA is ₹752 Cr (27.2%), but **normalised EBITDA is ₹783 Cr (28.3%) and normalised PAT ₹532 Cr** [Q1 FY27 PPT]. Name the ~₹31 Cr one-off (likely the labour-code gratuity charge — verify). The FY26 PAT growth headline (+3.7%) is distorted at both ends: the FY25 ~₹41 Cr tax gain and the FY26 one-off.
- **dr-lal-pathlabs.html — valuation stale:** m-cap ~₹28,000 Cr → **₹30,854 Cr** (23-Oct-26); P/E ~55× is unchanged (54.9×).
- **dr-lal-pathlabs.html — geography:** give the disclosed FY26 split instead of "indicative" shares: Delhi-NCR 31%, UP & UK 19%, Rest of North 13%, East 15%, West 14%, South 6%, Others 2%; Tier-3+ 39% (₹1,090 Cr).
- **vijaya-diagnostic.html — Q1 FY27 omitted (refreshed 18-Jul):**
  - Revenue ₹231 Cr (+22.8%); EBITDA 42.7%; PAT ₹53 Cr (+37.6%).
  - Footfall 1.24 mn; tests 4.59 mn; revenue/test ₹503; revenue/footfall ₹1,860.
  - **166 centres** (the primer says 162).
  - Bengaluru JP Nagar flagship hub (Jul-26); Gachibowli hub (Apr-26).
  - **Plan: 9 hubs + 10–12 spokes in 12 months.**
  - **Arya Wellness Centre, Guwahati acquisition (11-Sep-26)** — a new state (Assam).
- **vijaya-diagnostic.html — balance-sheet wording:** "net-cash / effectively debt-free" is right on a lease-ex basis (bank debt nil, surplus cash ₹287 Cr). But screener shows ₹423 Cr of borrowings (all Ind-AS 116 leases) and net debt ₹195 Cr. Add one line explaining this so readers do not see a contradiction.
- **vijaya-diagnostic.html — valuation stale:** m-cap ~₹13,000 Cr → **₹14,310 Cr**; P/E ~80× → 76.3×.
- **vijaya-diagnostic.html — FY24 PAT flattered:** the WDV → SLM depreciation change raised PAT by ₹29.1 Cr in FY24 (₹6.8 Cr in FY23) [company deck]. Any FY23–FY24 PAT growth figure should note this.
- **vijaya-diagnostic.html — Kedaara:** "treat any specific Kedaara holding figure as approx." Check the latest shareholding pattern for whether Kedaara has fully exited. FII is 10.67% (Sep-26), down from ~20% in 2023.
- **metropolis-healthcare.html — acquisitions count/names:** "four FY25–26 acquisitions (led by Core Diagnostics)". The company's Sep-2026 deck lists **five integrated acquisitions: Hitech, Core, DAPIC (Dr Ahuja's), Scientific Pathology, Ambika**. Hitech dates from 2022, so the FY25–26 four are presumably Core, DAPIC, Scientific and Ambika — make that explicit. Core was bought at ~2× revenue, and its EBITDA rose from 2% to high single digit in 4 quarters.
- **metropolis-healthcare.html — lab count:** "~220 laboratories" vs **212 (FY26) / 209 (Q1 FY27)** per the company (7 consolidated into acquired entities). The service network is 5,003.
- **metropolis-healthcare.html — Q1/Q2 FY27 and guidance omitted (refreshed 2-Aug):**
  - Q1 FY27: revenue ₹450 Cr (+16.6%), EBITDA 25.2% (+210 bp), PAT ₹57 Cr.
  - Patients 3.69 mn, tests 7.83 mn, **RPP ₹1,219, RPT ₹575**.
  - B2C 57%; specialty 40%; TruHealth 18%.
  - **FY27 guidance: revenue +14–15%, margin +100–150 bp.**
  - Q2 business update: revenue ~+15%.
  - Margin path 24.4% → 27–28%; 1,000 own stores by FY29.
- **metropolis-healthcare.html — valuation stale; bonus:** m-cap ~₹12,000 Cr → **₹10,849 Cr**; P/E ~60× → 52.1×. The FY26 share count rose ~4× (equity ₹10 → ₹41 Cr), implying a 3:1 bonus. The primer does not mention it. Verify and add, because per-share history changes.
- **metropolis-healthcare.html — ownership:** add the promoter stake (**47.82%**, −1.04 pp in the Sep-26 quarter — find out why) and DII 35.5%.
- **thyrocare.html — promoter stake stale (refreshed 6-Aug):**
  - **Docon sold another 9.9% on 13-Aug-2026** (1.58 cr shares at ₹624–632, ₹985.9 Cr), taking the promoter to **51.02%** from 60.92%.
  - The **pledge on 10.99% was released (11-Aug)**. API Holdings says it is now debt-free (₹1,050 Cr repaid).
  - The primer's "debt-heavy owner raising cash" framing needs updating. So does the **NCD-pledge reference**.
- **thyrocare.html — Nueclear is a sale, not a demerger:**
  - The postal ballot (notice 28-Sep-26; e-voting ends **29-Oct-26**; result by 2-Nov) seeks approval to **sell the entire Nueclear Healthcare stake to Trovera Healthcare for ~₹141.4 Cr** (₹59.5 Cr Trovera CCPS + ~₹81.9 Cr cash), with **majority-of-public approval**.
  - It also covers buying Nueclear's Gurugram/Hyderabad land and buildings for ₹20.59 Cr.
  - Replace "in-principle demerger" throughout.
- **thyrocare.html — test-count definition changed:** "209.6 million tests (FY26)" is on the old definition. From Q1 FY27 the company excludes calculated parameters; restated FY26 = 43.1 + 48.4 + 44.5 + 52.7 = **188.7 mn**. Revenue per test (~₹40) still holds on the pathology basis (₹39.8 in Q1 FY27).
- **thyrocare.html — bonus and per-share history:** a 2:1 bonus in FY26 (equity ₹53 → ₹159 Cr). The Oct-2025 sale price "~₹1,252/share" is pre-bonus (≈₹417 post-bonus). State the basis.
- **thyrocare.html — valuation stale; Q1 FY27 omitted:**
  - M-cap ~₹9,550 Cr → **₹7,372 Cr**; P/E ~50× → 40.8×. The stock is ~26% below the Aug block price.
  - Q1 FY27: revenue ₹240 Cr (+24%), EBITDA 32.2%, PAT ₹51 Cr (+34%), patients 5.4 mn, 10.2 tests/patient, 11,730 franchisees.
  - **Q2 FY27 board: 29-Oct-26.**
- **jeena-sikho-lifecare.html — valuation stale:** m-cap ~₹6,275 Cr / ~28× → **₹4,245 Cr / 18.0×** (23-Oct-26 close ₹342). **The stock fell ~33% between 29-Sep and 23-Oct-26 on very heavy volume (7–9 Oct). No cause was identified in filings or news** — research it before the next refresh; do not speculate in the primer.
- **jeena-sikho-lifecare.html — Q1 FY27 detail:**
  - EBITDA margin fell to 41% (from 45%).
  - **PAT +28% depended on other income of ₹14.0 Cr (vs ₹1.1 Cr)**; ex-other-income PBT grew only ~9% [E].
  - Products ₹118 Cr (53%) vs services ₹106 Cr (47%).
  - 62 hospitals + 57 clinics; ~2,400 beds operational, 450 in the pipeline; 51 NABH hospitals.
  - Govt-panel revenue share 25% → 16% → 4% (FY24 → FY26).
  - FY26 occupancy ~56% (1,288 of 2,300 beds).
- **jeena-sikho-lifecare.html — ROCE figure:** ~70.7% (primer) vs **64.4%** on screener now. ROE 61.3%.
- **jeena-sikho-lifecare.html — corporate actions:** "stock actions" are mentioned but not specified. Equity capital rose from ₹14 Cr (FY23) to ₹25 Cr (FY25) at ₹2 face value, so state the bonus/split ratio. Also confirm the status of the proposed Shuddhi Lifecare merger and whether any promoter shares are pledged (not verifiable on screener).
- **General (all five):**
  - None of the primers covers Q2 FY27, and only JSLL covers Q1 FY27 in any detail.
  - **Lease liabilities (Ind-AS 116) inflate screener "borrowings" at every member.** Each primer should state bank debt separately (Lal nil, Vijaya nil; Metropolis and JSLL to verify).
  - The FII → DII ownership rotation since 2024 (FII −7 to −10 pp at Lal/Vijaya/Metropolis) is not mentioned anywhere.

## 3.5 Key source URLs
- **Screener (fetched 24-Oct-2026):** https://www.screener.in/company/LALPATHLAB/consolidated/ · /VIJAYA/consolidated/ · /METROPOLIS/consolidated/ · /THYROCARE/consolidated/ · /JSLL/consolidated/
  - Price/volume chart API: https://www.screener.in/api/company/1275199/chart/?q=Price-Volume&days=60 (JSLL)
- **Lal Q1 FY27 results presentation (24-Jul-26):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2a358926-2b70-4761-9a90-2c6ea6265103.pdf
- **Vijaya Q1 FY27 earnings presentation (6-Aug-26):** https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=bca367cb-06a2-4338-9632-7aed0b644245.pdf
- **Metropolis:**
  - Q1 FY27 investor presentation (4-Aug-26): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1267d94c-78fa-442d-a6ae-a8bf7c4e8d4c.pdf
  - Q2 FY27 business update (5-Oct-26): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=633a1ec3-d157-4422-ae43-421dceb9360b.pdf
  - Sep-2026 investor-meet deck (guidance, M&A): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c04e72d8-30f3-4f4e-9834-a9f9c0487e9f.pdf
- **Thyrocare:**
  - Q1 FY27 presentation (23-Jul-26): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e9387855-c527-4ea7-b1f3-8dc8270dd778.pdf
  - Postal-ballot notice (Nueclear sale, 28-Sep-26): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5f68acc1-ce1a-4494-8f00-4c38a620715a.pdf
  - Q2 board intimation (22-Oct-26): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b193a4f7-30ca-4a02-a1e0-b9a39f615978.pdf
  - Aug-26 stake sale: https://www.outlookbusiness.com/corporate/thyrocare-promoter-docon-offloads-99-stake-for-986-crore · https://inc42.com/buzz/pharmeasy-claims-to-be-debt-free-after-paring-more-stake-in-thyrocare/ · https://hdfcsky.com/news/docon-sells-9-9-percent-thyrocare-stake-986cr
- **JSLL:**
  - Q1 FY27 investor presentation (Aug-26): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9fa6211e-ac55-4e06-8c49-ad82a4ceac83.pdf
  - Price context: https://univest.in/blogs/why-jeena-sikho-lifecare-share-price-fall-today-2026 · https://www.chittorgarh.com/stockpricequote/jeena_sikho_lifecare_limited/5188/ · https://www.kalkine.co.in/article/news/why-did-jeena-sikho-lifecare-shares-hit-the-lower-circuit-despite-profitable-results
- **Lal Q2 timing / guidance snippets:** https://voguestock.in/fundamental/board-meeting/dr-lal-pathlabs-ltd · https://askfuzz.ai/discover/news/companies/dr-lal-pathlabs-q1-profit-jumps-28-to-169-5-crore
