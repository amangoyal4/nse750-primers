# Telecom Services (RailTel) — "Telecom || Other Telecom Services": Research Dossier + Company Fact Pack

Compiled 2026-10-23 (UTC) for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md): §0–12 plus sections A–H. The sub-sector has one listed member, so the industry is built around the businesses RailTel actually runs: carrier/enterprise bandwidth on railway right-of-way, retail broadband, government ICT system integration, railway signalling and telecom (incl. Kavach), and government data centres/cloud.
- **Part 2** is the full company fact pack for RailTel (brief-companies.md), with JSON.
- **Part 3** is the company-KPI appendix: a summary grid with REFERENCE peers on one basis, reconciliation against our primer `primers/railtel.html`, and a "Primer issues" subsection.

**Member (1, Tier C):** RailTel Corporation of India Ltd (NSE RAILTEL · BSE 543265 · ISIN INE0DD101019) — primer `primers/railtel.html` (last refreshed 21-Jul-2026).

**Reference peers (not members; used for context only):**
- Listed telecom-equipment/fibre peers: ITI Ltd, Tejas Networks, HFCL, Sterlite Technologies (STL).
- Listed carriers: Tata Communications, Bharti Airtel (Airtel Business is its enterprise arm).
- Railway PSUs under the same ministry: IRCON, RVNL, IRCTC, RITES.
- Kavach vendors: HBL Engineering, Kernex Microsystems (listed); Medha Servo Drives (unlisted); Siemens; Kyosan; Quadrant Future Tek (RailTel's Kavach OEM partner).
- Unlisted state-owned fibre carriers: POWERGRID's telecom business (POWERTEL), GAIL's GAILTEL, BSNL (and BBNL, merged into BSNL).
- Global analogues: China Railway Signal & Communication (CRSC); Network Rail's "Project Reach" fibre concession (Neos Networks).

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary page. The URL is inline or in §3.5. Main fetched sources:
  - screener.in RailTel and peer pages, pulled 23-Oct-2026 after the close.
  - RailTel's FY26, FY24 and FY22 annual reports (BSE PDFs).
  - The Q1 FY27 results filing (BSE).
  - Q4 FY26 and Q1 FY27 call transcripts (BSE; scanned images, read page by page).
  - RailTel's board-meeting letter of 21-Oct-2026 and its order LoA of 20-Oct-2026 (BSE).
  - A PIB BharatNet backgrounder (Apr-2025).
  - Two trade-press pages carrying Ministry of Railways data: Indian Infrastructure (7-Aug-2026) and NBM&CW (6-Aug-2026).
- **[V-AR]** = the figure appears in RailTel's FY26 annual report, which cites a government source (TRAI, PIB, Budget). Verified as printed in the AR; the underlying government document was not re-fetched.
- **[V-snip]** = verified only from a search-result summary or a secondary article. Not primary.
- **[K]** = well-established public fact from memory. The source is named but was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present it as "approx." or as a range.
- **[primer]** = from our own primer `primers/railtel.html` (refreshed 21-Jul-2026).
- **[screener 23-Oct-26]** = screener.in, standalone RailTel page and consolidated peer pages, pulled 23-Oct-2026 evening IST (RailTel close ₹229, −3.6% on the day).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. RailTel's financial statements are in **₹ lakh** (1 Cr = 100 lakh); every figure here is converted to ₹ Cr.
- **RKM** = route kilometre (length of cable trench/corridor). Fibre-km = RKM × fibre count. **GP** = gram panchayat (village council). **PoP** = point of presence.
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. RailTel has a March year-end.
- **FX: ₹94.9 = US$1** (Oct-2026; reused from sibling dossiers [V-sib]). Used only for the global lens. GBP ≈ ₹125 [E]; RMB ≈ ₹13.1 [E].
- **Macro (only where relevant):**
  - RBI **repo hiked to 5.50% on 7-Oct-2026** [V-sib, prompt].
  - **WPI inflation 11.4% in Sep-2026** (ICRA research headline on the fetched ICRA page, 14-Oct-2026) [V].
  - ICRA expects Q2 FY27 GDP growth to "moderate slightly" [V headline].
  - **Relevance to RailTel:**
    - RailTel has no debt, so the rate hike hits it mainly through (a) its treasury income on ~₹650–780 Cr of deposits (up) and (b) its valuation multiple (down).
    - The rupee matters only for imported project hardware (cameras, servers, switches). Those are largely pass-through on fixed-price government contracts, so a weak rupee can squeeze the 4–5% project margin on contracts bid before the depreciation [E].

---

## STATUS: which quarter is RailTel at? (as of 23-Oct-2026)

| Item | Status | Source |
|---|---|---|
| Latest reported quarter | **Q1 FY27 (Apr–Jun 2026)**. Board approved it on **30-Jul-2026**; call held 31-Jul-2026, hosted by PL Capital; transcript filed 5-Aug-2026 | [V BSE results PDF; V transcript] |
| Q2 FY27 | **Board meets Sunday 25-Oct-2026** to approve Q2/H1 results and consider an **interim dividend**. **Record date 30-Oct-2026.** Trading window closed since 1-Oct-2026. Not out as of this dossier. Screener's "upcoming result date: tomorrow" banner refers to the same event. | [V BSE letter RailTel/Sectt/21/SE/S-16 dated 21-Oct-2026] |
| FY26 annual report | Published (26th AR 2025-26). **CAG gave "nil comments" on the FY26 accounts** (CMD, Q1 call) | [V AR; V transcript] |
| Latest orders | 20-Oct-2026: **₹47.4 Cr** (incl. tax) rate-contract LoA from HARTRON (Haryana State Electronics Development Corp) for LAN supply-install-test-commission across Haryana/Chandigarh/Delhi NCR, to be executed by 18-Apr-2028. 17-Oct: **₹167.52 Cr** (ex-tax) from RRB Secunderabad for "AM-RMS services". 17-Oct: **₹18.99 Cr** 3-year IT/cyber-security order from Health Insurance TPA of India. | [V BSE LoA PDF for the ₹47.4 Cr order; V screener announcement summaries for the others] |

**Writer note:** Q2 FY27 lands two days after this dossier is dated. Q2 is seasonally the second-weakest quarter (Q2 FY26 revenue ₹951 Cr). If the writer runs after 25-Oct, add the Q2 print: revenue, segment split, order book and interim dividend. The FY26 and Q1 FY27 numbers below stay valid.

**Still listed?** Yes.
- RAILTEL trades on NSE and BSE: ₹229 on 23-Oct-2026, m-cap ₹7,349 Cr [V screener].
- No merger, demerger, OFS or delisting has been announced. GoI's holding has been **72.84%** in every quarter from Dec-2023 to Sep-2026, so no OFS has happened since the Feb-2021 IPO [V screener].
- Index memberships include **Nifty India Railways PSU, Nifty Smallcap 250, Nifty 500, BSE PSU, BSE CPSE and Nifty India Digital** [V screener]. That means RailTel trades as a "railway PSU" factor stock as much as a telecom stock.
- The stock is at the bottom of its 52-week range (**₹226–391**). It is **−38% over one year** [V screener] and −25% since the primer's July snapshot (₹305 → ₹229).

---

## READ THIS FIRST: ten definitional traps

1. **Use the STANDALONE page on screener, not "consolidated".**
   - RailTel's consolidated screener page is frozen at Sep-2023 and shows a meaningless **P/E 39.2, ROCE 16.2%, ROE 12.0%** [V screener consolidated].
   - The company reports standalone only. It has no operating subsidiaries; the FY26 results show no non-controlling interest [V Q1 FY27 PDF].
   - The correct screener figures are **standalone: P/E 19.8 (screener), ROCE 22.8%, ROE 17.1%, book value ₹70.5** [V screener standalone].
   - NB: ₹229 ÷ TTM EPS ₹10.78 = **21.2×**. Screener's printed 19.8 does not reconcile; it probably uses a different EPS basis. **Use 21.2× TTM (= m-cap ₹7,349 Cr ÷ TTM PAT ₹346 Cr)** [E].
2. **"Turnover" ≠ "revenue from operations".**
   - FY26 "total turnover ₹4,328 Cr" (the headline in the primer and press) = revenue from operations **₹4,277.48 Cr** + other income ₹47.86 Cr + finance income ₹2.29 Cr [V AR Table 1].
   - Growth is **+23.0% on operating revenue** (₹3,477.50 → ₹4,277.48 Cr) and **+22% on total income** (₹3,551 → ₹4,328 Cr).
   - Always use ₹4,277 Cr for margins.
3. **The two segments are "Telecom Services" and "Project Work Services".** Both names hide a mix.
   - **Telecom Services** includes:
     - NLD (bandwidth/leased lines/MPLS-VPN): ₹639.79 Cr.
     - ISP (mostly RailWire retail broadband plus internet leased lines): ₹451.84 Cr.
     - IP-1 (dark fibre ₹50.29 Cr, tower co-location ₹58.99 Cr).
     - **"ICT revenue": data centre ₹202.29 Cr and "others" ₹88.69 Cr** (Aadhaar authentication for exams, SOC and similar digital services).
     - Other operating revenue ₹8.80 Cr.
     - [V AR Note 28]
   - Management calls only NLD+ISP+IP-1 "**pure telecom**". In Q4 FY26 that was ₹332 Cr of the ₹449 Cr telecom segment; the remaining ₹117 Cr was data centre and digital services [V Q4 transcript].
   - **Project Work Services** = government IT/ICT system integration (CCTV/video surveillance, e-Office, LAN/WAN, hospital IT, smart-city, data-centre build-outs for others) **plus railway signalling** (Kavach, electronic interlocking, automatic block signalling, tunnel communication) [V AR segment note].
4. **The "captive railway" narrative is mostly wrong on the numbers.**
   - **FY26 project revenue split:**
     - "Railways Project Works" **₹503.09 Cr** (18% of project revenue).
     - "Other Projects" **₹2,273.70 Cr** (82%) [V AR Note 28].
   - **The railway share of the order book is only ~21% (Apr-2026) and 23.5% (Jul-2026)** [V transcripts].
   - The FY24 AR says orders are won "**mostly through open tendering**" (FY24 orders ~₹2,870 Cr, of which ₹556 Cr from Railways) [V AR FY24].
   - **Nomination** (award without competition, under the PSU-to-PSU or ministry-to-PSU route) exists, but the bulk of growth since FY23 has been **competitive or empanelment-based state/central government ICT**: Haryana/HARTRON rate contracts, MEA-funded overseas supply, state police and transport departments, PSU IT.
   - The primer's framing ("handed to RailTel not through open competition") should be tempered.
5. **Segment "results" are after depreciation, and nearly all depreciation sits in Telecom.**
   - FY26 segment results: Telecom **₹400.25 Cr (26.7% of segment revenue)**; Projects **₹109.47 Cr (3.9%)** [V AR].
   - Telecom carries all of PPE/ROU/CWIP; segment assets show zero PP&E in Projects [V AR].
   - Adding back FY26 D&A of ₹188.89 Cr gives a **Telecom segment EBITDA of ≈₹589 Cr ≈ 39%**. That matches the CMD's "telecom margin 35–40%… 39% this year" [V Q4 transcript; E arithmetic].
   - Projects earn ≈**3.9–4.5% EBIT ≈ EBITDA** (guided "4–5%").
   - **So telecom is ~35% of revenue but ~84% of segment EBITDA** [E].
6. **The order book has several dates and definitions.** Quote the date every time.
   - ~₹4,750 Cr (FY24 AR, mid-2024) [V AR FY24].
   - **₹8,563 Cr on 31-Dec-2025** [V Q4 transcript].
   - ~₹10,600–10,700 Cr on 31-Mar-2026 (CMD's verbal estimate: "₹700 Cr+ received in April") [V transcript].
   - **₹11,466 Cr on 30-Apr-2026** (the primer's figure) [V].
   - "**Exceeding ₹10,400 Cr as on date**" (FY26 AR chairman's speech; the date is unclear and it is internally inconsistent with ₹11,466 Cr) [V AR].
   - **₹11,747 Cr "as on date" on 31-Jul-2026** [V Q1 transcript].
   - It is **unexecuted value incl. multi-year telecom contracts and AMC tails**. It is not all project work.
   - Railway share 21–23.5%. The data-centre share is not disclosed ("I have not really worked out") [V].
7. **"EBITDA" has three bases.**
   - **Company: ₹658 Cr, 15.22%** (FY26, chairman's speech) [V AR].
   - **Screener operating profit: ₹638 Cr, 15%** [V screener].
   - **Revenue minus operating costs ex-D&A and ex-ECL: ₹636.5 Cr, 14.9%** [E from the AR P&L lines].
   - The ~₹20 Cr gap is most likely the company treating part of other income or provisions differently. Use screener ₹638 Cr in peer tables and ₹658 Cr only when quoting management.
8. **"Exceptional items" = expected-credit-loss (ECL) provisions on government receivables, not one-offs.**
   - FY26 ₹24.36 Cr; FY25 ₹21.72 Cr; Q1 FY27 ₹7.04 Cr charge vs a ₹3.42 Cr write-back in Q1 FY26 [V AR; V Q1 PDF].
   - The CMD calls ECL "non-cash, notional", posted when debtors age past 1–2 years [V Q1 transcript].
   - It recurs every year. **Treat it as an operating cost of selling to government, not as exceptional.**
   - It is why **Q1 FY27 PAT was flat (₹65.8 vs ₹66.1 Cr) while pre-exceptional PBT rose 12%** (₹96.5 vs ₹85.9 Cr) [V].
9. **"Navratna" is a DPE autonomy grade, not a moat.**
   - RailTel became Mini-Ratna (Cat-I) in 2012 (later Schedule 'A') and **Navratna in Aug-2024** (DPE) [V AR MD&A].
   - Navratna powers (DPE [K]): the board can invest up to ~₹1,000 Cr or 15% of net worth in a single project, capped at 30% of net worth in a year, without government approval; it can form JVs/subsidiaries within those limits. RailTel's net worth is ₹2,262 Cr, so 15% ≈ ₹340 Cr per project [E]. That is roughly the size of a 10 MW data centre.
   - Navratna does **not** change dividend obligations. Those come from **DIPAM's capital-restructuring guidelines (OM 18-Nov-2024): minimum dividend = higher of 30% of PAT or 4% of net worth** [V-snip DIPAM summaries].
   - RailTel's FY26 dividend of ₹104.30 Cr = **30.1% of PAT**, exactly at the floor (4% of net worth would be ₹90.5 Cr) [V AR; E].
10. **Telecom levies are real costs, and one is a payment to the parent.**
    - RailTel pays **8% licence fee to DoT** on its licensed telecom revenue (₹91.60 Cr in FY26; cumulative ₹846 Cr).
    - It pays a **7% revenue share on services to Indian Railways** for the right-of-way (₹46.03 Cr in FY26; cumulative ₹521 Cr) [V AR Board's report §6].
    - The right-of-way is therefore **not free**: ~15% of telecom-service revenue goes to DoT plus IR before any cost of running the network [E].
    - RailTel's equity includes **₹305.94 Cr of shares issued to the President of India for non-cash consideration** (the railway fibre/assets transferred at formation) [V AR §4].

---

## 0. Top-line framing (what an expert leads with)

- **RailTel is two businesses on one balance sheet. Only one of them is the "industry" its classification implies.**
  - **Telecom Services (35% of FY26 revenue, ~84% of segment EBITDA).**
    - A neutral (non-retail-mobile) carrier on ~**63,000+ RKM** of OFC laid along railway tracks.
    - Plus **21,000+ km** of city access fibre, **7,000+ stations** covered and **Wi-Fi at 6,117+ stations** [V AR].
    - Sells NLD bandwidth/MPLS to government, PSUs, banks and operators; ISP (RailWire retail broadband, **6.15 lakh subs FY26 → 6.23 lakh Jul-2026**); dark fibre and tower co-location (IP-1); data centres/cloud (₹202 Cr).
  - **Project Work Services (65% of FY26 revenue, ~16% of segment EBITDA).**
    - A government ICT system integrator and railway S&T contractor earning **~4% EBIT**.
- **The mix has flipped in five years.**
  - Telecom was **64% of revenue in FY21 and is 35% in FY26**.
  - Project revenue grew **5.6× (₹493 → ₹2,777 Cr; 41% CAGR)**; telecom grew **1.7× (₹885 → ₹1,501 Cr; 11% CAGR)** [V ARs; E CAGR].
  - Company OPM fell from **24% (FY21) to 15% (FY26)** even as telecom's own segment margin **rose** from 23% to 27% (EBIT) [V].
  - **The margin decline is entirely mix**, as the CMD says: "a group of 2 companies in one company… it is simple mathematics" [V Q1 transcript].
- **The industry around RailTel is government-capex-led.**
  - **Railways:** FY27 budget grant **₹2,93,030 Cr**; ₹1,14,973 Cr (39%) spent by Jul-2026; safety spend **₹1,20,389 Cr** in FY27 vs ₹39,200 Cr in FY14 [V NBM&CW, Ministry data]. Kavach FY27 allocation **₹2,066 Cr**; cumulative Kavach spend **₹3,875 Cr** to Jun-2026 [V NBM&CW].
  - **Telecom:** DoT FY27 allocation **₹73,990.94 Cr**, incl. **BharatNet BE ₹20,000 Cr** and **BSNL capital infusion ~₹28,473 Cr** [V-AR, Budget].
  - **Rural fibre:** **Amended BharatNet ₹1,39,579 Cr** (Cabinet 4-Aug-2023; 2.64 lakh GPs in ring topology; 10-year O&M; completion Mar-2027) [V PIB doc; V-AR].
  - **Data centres/cloud:** DC tax holiday to 2047 for foreign cloud providers using Indian DCs (Budget FY27) [V-AR]; DPDP Rules notified 13-Nov-2025 [V-AR]; IndiaAI ₹10,371.92 Cr [V-AR].
  - RailTel captures slices of all of these: as a contractor (Kavach, VSS, LAN/WAN), as BSNL's **Independent Engineer for BharatNet Phase-3 Package 4** [V AR], and as an empanelled government cloud/DC provider.
- **Kavach is the biggest new pool, and RailTel is a late, partnered entrant.**
  - Kavach 4.0 commissioned on **2,633 RKM by 31-Jul-2026** (Delhi–Mumbai 1,423; Delhi–Howrah 1,210).
  - Trackside work taken up on **21,794 RKM**; **11,547 km OFC** laid; **1,721 towers**; station data centres at **1,009 stations**; **6,290 locos fitted, 7,190 more in progress** [V Indian Infrastructure 7-Aug-2026].
  - Plan: **+9,000 RKM in two years, then up to 10,000 RKM/yr** [V-AR, PIB Mar-2026].
  - RailTel holds **2–3 Kavach orders** (East Central Railway, West Central Railway; ">2,000 RKM") [V AR; V transcripts], using **Quadrant Future Tek** as its OEM. As of 31-Jul-2026 Quadrant's **RDSO approval was still pending**.
  - First Kavach revenue is expected in FY27. Kavach margin is "slightly better" than the 4–5% project margin [V Q1 transcript].
  - The approved OEMs are **HBL (first v4.0 approval, May-2025), Medha, Kernex, Siemens, Kyosan** [V-snip]. They capture the higher-margin equipment layer: **HBL FY26 OPM 34%; Kernex 35%** [V screener].
- **Cash is the hidden problem.**
  - Trade receivables **₹2,053 Cr (Mar-26) = 175 days** vs a **MoU target of 90 days** [V AR BRSR/MoU table].
  - Plus **unbilled revenue ₹898 Cr** [V AR Note 15].
  - Receivables + unbilled = **₹2,951 Cr ≈ 252 days of revenue** [E].
  - **Telecom receivables quadrupled** (₹331 → ₹1,287 Cr) in FY26 on railway VSS billing "revisions and estimates" [V AR Note 11; V Q1 transcript].
  - **FY26 CFO ₹316 Cr vs PAT ₹346 Cr; FCF ₹44 Cr; FY25 FCF −₹70 Cr** [V screener].
  - Cash + bank + short deposits **≈₹777 Cr** (Mar-26) vs ~₹832 Cr a year earlier [E from AR notes]. RailTel is debt-free but not cash-accumulating.
- **Valuation** (screener 23-Oct-26):
  - **₹7,349 Cr m-cap; 21.2× TTM P/E [E]; 3.25× book; EV ≈ ₹6,635 Cr; EV/EBITDA ≈10.4× FY26 screener OP; dividend yield 1.42%** [V screener; E].
  - Peers:
    - Tata Communications: 39.0× P/E [V screener].
    - Railway PSUs: IRCON 17.5×; RVNL 42.0×; IRCTC 25.6×; RITES 21.8× [V screener].
    - Kavach OEMs: HBL 26.6×; Kernex 14.0× [V screener].
  - **The market now prices RailTel near a railway-contractor multiple, not an infrastructure-asset multiple.**

---

## 1. What the sub-sector does: services, customers, value chain, where value is captured

### 1.1 Services (RailTel lens, with the wider market)

| Service | What it is | Main buyers | RailTel FY26 revenue (₹ Cr) | Who else does it |
|---|---|---|---|---|
| **NLD / managed bandwidth** | Leased lines, MPLS-VPN, Ethernet, wavelength/backhaul between cities, under an NLD authorisation | Central/state govt, PSUs, banks, telcos/ISPs, NKN (National Knowledge Network) institutions, Air Force; Starlink is a new customer | **639.79** (+2.9% YoY) [V AR] | BSNL, Airtel Business, Jio, Tata Comm, Sify, POWERTEL, GAILTEL |
| **ISP** | RailWire FTTH/home broadband via ~11,500 local partners; internet leased lines; IPTV (7,000+ subs) | Households in Tier-2/3/rural India; enterprises; ITPO | **451.84** (+3.4%); RailWire ≈ **₹350 Cr** of it [V AR] | Jio (14.47 mn wired subs), Airtel (10.98 mn), BSNL (4.50 mn), ACT (2.43 mn), Kerala Vision (1.51 mn) [V-snip TRAI May-2026]; ~thousands of LCOs |
| **IP-1 infrastructure** | Dark fibre IRU/lease; tower and space co-location at stations | Telcos, ISPs, CDNs | **109.28** (dark fibre 50.29 + tower 58.99) [V AR] | IP-1 tower and fibre cos (Indus, Summit, Jio/Airtel fibre InvITs), POWERTEL |
| **Data centre / cloud** | Tier-III DCs (Secunderabad, Gurugram), edge DCs (Gurugram, Mumbai), Noida 10 MW under construction; MeghRaj-aligned government community cloud; SOC | Railways (HMIS for 709 hospitals, e-Office), central/state govt, PSUs | **202.29** (+58.7% from 127.49) [V AR] | Nxtra (Airtel), CtrlS, Yotta, Sify, AdaniConneX, STT, NTT, hyperscalers; NIC/NICSI |
| **Other ICT services** | Aadhaar biometric authentication at recruitment exams (UPSC, NEET, JEE), KYC for Standard Chartered, SOC/security | Exam agencies, banks | **88.69** (+35%) [V AR; V Q4 transcript] | UIDAI-authorised AUAs/ASAs, private SIs |
| **Project work — railway** | Video surveillance (VSS) at 5,000+ stations; Kavach; EI/ABS signalling; tunnel communication (Dharam–Banihal, Rishikesh–Karnaprayag, Sivok–Rangpo, Bhairabi–Sairang); station Wi-Fi; LTE-R ground works (523 RKM, Secunderabad) | Railway zones, RDSO, IRSDC, RRBs | **503.09** (−1%) [V AR] | Kavach OEMs (HBL, Medha, Kernex, Siemens), S&T contractors (Siemens, Alstom, Hitachi, Kyosan), Ircon/RVNL (as EPC), private SIs |
| **Project work — non-railway** | Government ICT SI: CCTV/smart-city, LAN/WAN rate contracts, e-Office (150+ orgs), DC builds for others, AI enforcement (Karnataka transport), MEA-funded overseas supply (laptops, BHISHM cubes, Ethiopia DC) | State govts (Haryana, Karnataka, Gujarat…), central ministries, PSUs, MEA | **2,273.70** (+41.5%) [V AR] | TCS, L&T, Tech Mahindra, HCL, ITI, HFCL, STL (services), BEL, BECIL, TCIL, state electronics corps |

### 1.2 Value chain (railway right-of-way telecom)

1. **Right-of-way (RoW).**
   - Indian Railways owns the land corridor (~68,000+ RKM of track [K, IR Year Book]).
   - RailTel was created on 26-Sep-2000 to "modernise the existing telecom system for train control, operation, safety and to generate additional revenues by creating nationwide broadband and multimedia network, laying optical fibre cable using the right of way along railway tracks" [V AR Board's report].
   - RailTel pays IR a **7% revenue share on services** [V AR].
   - Elsewhere in India, RoW is governed by the **Telecommunications (Right of Way) Rules, 2024**, which set harmonised fees and statutory disposal timelines under the Telecommunications Act, 2023 [V-AR].
2. **Passive layer.** OFC cable (often 24–48 fibre, laid in trenches or on poles along the track), ducts, huts at stations, towers, power.
   - The railway's own S&T needs (train control, block communication, Kavach) use some fibres; spare fibres are commercialised.
   - IR is also laying **new OFC for Kavach** (11,547 km by Jul-2026) [V]. Who owns and monetises those spare fibres matters; this is a RailTel opportunity and a gap (§H).
3. **Active/transport layer.** DWDM/OTN, IP-MPLS core, PTN at PoPs (stations), NOC/C-NOC [V-AR FY24 mentions PTN/DWDM].
4. **Service layer.** NLD bandwidth, VPN, ILL, ISP, DC/cloud, managed services.
5. **Last mile.** Done by partners: RailWire franchisees and LCOs, state fibre grids (e.g. Gujarat Fibre Grid, 22 districts / 8,080 GPs via revenue share) [V AR FY24]. Enterprise last mile is often leased from other operators; this is part of the **"access and other charges" ₹604 Cr** line [V AR].
6. **Customer.** Government is the largest buyer (CMD: "our telecom customers are mostly government") [V Q1 transcript].

**Where value is captured:**
- In the **passive asset and the bundling** (connectivity + DC + security clearance), not in the SI hardware.
- In the government ICT chain, **hardware OEMs** (cameras, servers, switches; Kavach equipment) and **software platforms** capture margin.
- The integrating PSU earns a thin fee for execution risk, working capital and its tender-qualification status.
- RailTel's 3.9% project EBIT is in line with the CMD's description of the industry: "many project organisations, their margins are 2%, 3% or 4%. Very few even operate in 4% to 5%" [V Q1 transcript].

### 1.3 How a government ICT project flows (project archetype)

- Customer department → **tender**, empanelled-PSU award or nomination (via MoU or a GFR provision allowing work to be awarded to a CPSE) → RailTel.
- RailTel then back-to-back tenders to OEMs and sub-contractors (often on GeM; **25% of RailTel's procurement went via GeM in FY26**, 27.21% in FY25 [V AR MoU table]).
- RailTel supplies, installs and commissions, then bills against milestones.
- The customer accepts, then pays. Payment typically runs **6–12+ months** after the milestone (receivable days 160–208 historically [V screener]).
- An AMC/O&M tail (3–5 years) and, often, a **connectivity service converts into recurring Telecom revenue**. Example: Railway VSS → recurring bandwidth billed in Telecom from Q4 FY26 [V Q4 transcript].

---

## 2. Size and growth

### 2.1 The markets RailTel plays in (sized from primary or near-primary data where possible)

| Market | Size / indicator | Growth | Source / tag |
|---|---|---|---|
| Indian telecom subscribers | **1.34 bn** total (Jun-2026); broadband ~**1.087 bn** (Jio 532.21 mn, 48.94%; Airtel 379.97 mn, 34.94%; VIL 11.97%; BSNL 27.44 mn; ACT 2.45 mn; top-5 = 98.59%) | Broadband +~1–2% QoQ | [V-snip: Fonearena/Telecomlead summaries of TRAI June/May-2026] |
| Internet subscribers (Dec-2025) | **1,306.14 mn** (47.37 mn wired, 1,258.77 mn wireless); teledensity **91.74%**; **25.70 GB/sub/month** | — | [V-AR citing TRAI PIR Q3 FY26] |
| Fixed wired broadband | ~**47–48 mn** subs (May-2026): Jio 14.47 mn, Airtel 10.98, BSNL 4.50, ACT 2.43, Kerala Vision 1.51; top-5 = 71.53% | High single/low double digit (FTTH + FWA substitution) | [V-snip TRAI May-2026; E total = top-5 ÷ 0.7153] |
| RailWire share of fixed wired | **6.23 lakh ÷ ~47.8 mn ≈ 1.3%** | RailWire +~50k subs YoY (+8.7%) | [V Q1 transcript; E] |
| Government ICT/e-gov SI market | No clean primary figure. Proxy: RailTel's "other projects" alone grew ₹299 Cr (FY21) → ₹2,274 Cr (FY26) | — | [V AR]; market size **GAP §H** |
| Railway S&T / Kavach | FY27 Kavach allocation **₹2,066 Cr**; cumulative Kavach spend **₹3,875 Cr** (to Jun-26); S&T head **~₹7,500 Cr** FY27 (single secondary source) | Kavach spend ₹2,764 Cr (Feb-26) → ₹3,875 Cr (Jun-26), i.e. ₹1,111 Cr in four months | [V NBM&CW; V-AR; S&T V-snip] |
| Kavach programme TAM | Indian Railways ~68,000 RKM [K]; 21,794 RKM "taken up"; 2,633 RKM commissioned. Indicative trackside cost: Moradabad division approval **₹170 Cr for 712 RKM = ~₹24 lakh/RKM**; onboard ~₹1.2 Cr/unit (Quadrant–ICF: ₹230.42 Cr for 192 units) | Up to 10,000 RKM/yr target | [V; V-snip Business Today, Bajaj Broking; E arithmetic]. Full-network TAM ≈ **₹15,000–40,000 Cr** across trackside + 20,000+ locos + towers/OFC [E, wide range — FLAG] |
| BharatNet | Phase I+II approved cost **₹42,068 Cr**; ₹39,825 Cr disbursed by 31-Dec-2023. **Amended BharatNet ₹1,39,579 Cr** (2.64 lakh GPs, ring topology, 10-yr O&M). FY27 BE **₹20,000 Cr** | **2,18,347 GPs service-ready** (19-Mar-2025) → **2.18 lakh+ of 2.69 lakh** (31-Mar-2026); OFC 42.13 lakh km; 12.21 lakh FTTH connections | [V PIB doc Apr-2025; V-AR] |
| India data-centre capacity | **~1.8 GW IT** operational (H1-2026, Savills); **1,789 MW** top-7 cities (Cushman); ~**1.7 GW** end-2025 → **~2 GW** end-2026 (CBRE). ICRA: third-party capacity to **2.4–2.5 GW by FY28**, **₹90,000 Cr** capex FY26–28 | Additions 440 MW (2025); 130–258 MW in H1-2026; **>7 GW by 2030** (Savills) | [V-snip] |
| RailTel DC share | ~**3 MW** operational (CMD, May-2026) ≈ **0.17%** of India's ~1.8 GW | Noida 10 MW (phase-1 5 MW by ~May-2027) | [V Q4/Q1 transcripts; E] |
| DoT budget FY27 | **₹73,990.94 Cr** (BharatNet ₹20,000 Cr; BSNL capital ~₹28,473 Cr) | — | [V-AR, Demand for Grants] |

### 2.2 RailTel's own growth (the only listed P&L in the sub-sector)

| FY | Revenue from ops (₹ Cr) | YoY | Telecom seg. | Project seg. | Telecom share | OP (screener) | OPM | PAT |
|---|---|---|---|---|---|---|---|---|
| FY21 | 1,337 | +24% | 884.9 | 492.9 | 64.2% | 328 | 24% | 140 |
| FY22 | 1,522 | +14% | 1,041.6 | 506.9 | 67.3% | 368 | 24% | 208 |
| FY23 | 1,957 | +29% | 1,169.5 | 787.9 | 59.7% | 379 | 19% | 188 |
| FY24 | 2,568 | +31% | 1,265.4 | 1,302.4 | 49.3% | 464 | 18% | 246 |
| FY25 | 3,478 | +35% | 1,362.5 | 2,115.0 | 39.2% | 535 | 15% | 300 |
| FY26 | 4,277 | +23% | 1,500.7 | 2,776.8 | 35.1% | 638 | 15% | 346 |
| Q1 FY27 | 893 | +20% | 360.8 | 532.5 | 40.4% | 132 | 15% | 66 |
| TTM (Jun-26) | 4,427 | +21% | — | — | — | 652 | 15% | 346 |

[V screener standalone; V ARs FY22/FY24/FY26 segment notes. NB: FY21/FY22 segment totals (₹1,377.8 / ₹1,548.5 Cr) exceed revenue from operations (₹1,337 / ₹1,522 Cr) by ~₹27–40 Cr. The older ARs appear to include some other operating income in segments. FY23 onward reconcile exactly.]
- **5-year CAGRs (FY21→FY26):** revenue **26.2%**; telecom **11.1%**; project **41.3%**; PAT **19.9%** [E].
- **FY27 guidance:**
  - "~20% growth" (CMD, Q4 call, 1-May-2026) [V].
  - In the Q1 call an analyst restated "25%", and the CMD did not contradict him. **Use "~20%" as the formal guidance** and flag the ambiguity.
  - **Project revenue ₹3,000–3,500 Cr** in FY27 [V both calls].
  - **DC revenue ~₹300 Cr FY27, ~₹500 Cr FY28** [V Q1 transcript].
  - Implied FY27: ~₹5,100–5,300 Cr revenue, with telecom ~₹1,700–1,800 Cr [E].

---

## 3. Demand drivers and end-markets (with numbers)

1. **Indian Railways capex and safety spending.**
   - **FY27 budget grant ₹2,93,030 Cr**; net railway budget ₹2,81,377.32 Cr [V-AR, Budget 1-Feb-2026; V NBM&CW].
   - ₹1,14,973 Cr (39%) was spent by July-2026 [V NBM&CW].
   - **Safety outlay ₹1,20,389 Cr** in FY27 vs ₹39,200 Cr in FY14 [V NBM&CW].
   - **514 sanctioned projects covering 40,000 km, ~₹8.31 lakh Cr** (Apr-2026) [V NBM&CW].
   - Each new line, doubling and station redevelopment carries S&T and telecom scope (OFC, quad cable, EI, VSS, PIS, Wi-Fi).
   - **Seven new high-speed-rail corridors** were announced in the FY27 Budget (Mumbai–Pune, Pune–Hyderabad, Hyderabad–Bengaluru, Hyderabad–Chennai, Chennai–Bengaluru, Delhi–Varanasi, Varanasi–Siliguri) [V-AR]. That is a long-dated telecom/signalling opportunity.
2. **Kavach (national ATP since July 2020).**
   - 2,633 RKM commissioned (Jul-26).
   - Trackside work on 21,794 RKM; 6,290 locos fitted; target "fully developed Kavach 4.0" rollout milestones by Dec-2026 (Western Railway, Rajkot) [V; V-snip].
   - Kavach needs **OFC along the track, a telecom tower roughly every few km, station data centres and LTE/UHF radio**: 1,721 towers and 1,009 station DCs so far [V].
   - These are exactly RailTel's competences (OFC, towers, DC), which is the core of its "integrator" pitch.
   - **But the CMD says few new Kavach tenders are coming in FY27** because "existing Kavach tenders… are under execution" [V Q1 transcript]; Q4: "no new tenders are seen at least for now" [V].
3. **Railway passenger digital services.**
   - Station Wi-Fi at **6,117+ stations** [V AR].
   - **IP video surveillance at 5,000+ stations** under implementation [V AR]. It produces recurring bandwidth billing (Q4 FY26 telecom spike).
   - **HMIS at 709 railway hospitals**; NIC e-Office across railway units [V AR].
   - Wi-Fi is mostly a cost/mission item. VSS and HMIS create recurring telecom and DC revenue.
4. **Government digitisation (state and central).**
   - e-Office: 150+ organisations plus ~45 in progress [V AR].
   - Police/CCTV, smart enforcement (Karnataka AI-based smart enforcement), LAN/WAN rate contracts (HARTRON ₹47.4 Cr), Aadhaar authentication at exams, PSU IT, healthcare (HITPA cyber).
   - **Non-railway project revenue rose 41.5% in FY26 to ₹2,273.7 Cr** [V AR].
5. **Rural broadband and BharatNet.**
   - Amended BharatNet (₹1,39,579 Cr) is being executed by BSNL through 16 packages and private PIAs [V-snip USOF].
   - RailTel's role is **Independent Engineer for Phase-3 Package 4** (monitoring three PIAs per state, acceptance testing, milestone certification) [V AR]. That is a fee business, not a construction business.
   - BharatNet's ~**45% FTTH active rate** [V-snip] shows the last-mile monetisation problem RailWire's partner model is designed to solve.
6. **Data localisation and sovereign cloud.**
   - DPDP Rules (13-Nov-2025; penalties up to ₹250 Cr), CERT-In 6-hour reporting, telecom cyber-security rules (2024), and sector rules from RBI/SEBI/IRDAI [V-AR].
   - These push regulated and government workloads to empanelled domestic hosts.
   - Budget FY27 DC incentives (tax holiday to 2047 for foreign cloud services using notified Indian DCs; 15% safe-harbour) [V-AR].
7. **Wholesale fibre demand from private players.**
   - CMD: "private players, fiber demand is there… they are asking for that fiber… our right of way is independent and completely different… most other players are along the road" [V Q1 transcript].
   - Drivers: 5G backhaul, tower fibreisation, AI data-centre interconnect. HFCL and STL's Q2 FY27 revenue jumps (HFCL ₹2,542 Cr, STL ₹2,529 Cr; both >2× YoY) point to a fibre up-cycle [V screener].
   - RailTel wants a **partner/revenue-share model rather than its own capex** [V].
8. **International (MEA-funded) ICT.**
   - Ethiopia MoFA greenfield DC (~₹18 Cr), Trinidad & Tobago laptops (2,000), BHISHM cubes (Maldives, Jamaica, Cuba, Sri Lanka), Sabina Park scoreboard (Jamaica) [V AR; V Q1 transcript]. Small but growing.

**Demand mix (FY26 revenue by end-customer) [E]:**
- Indian Railways (projects ₹503 Cr + an unknown share of telecom: VSS bandwidth, HMIS/e-Office hosting, NLD for zones) ≈ **15–20%**.
- Other central/state government and PSUs ≈ **60–65%**.
- Retail broadband (RailWire ~₹350 Cr) ≈ **8%**.
- Telcos/ISPs/enterprises/banks ≈ **8–12%**.
- The government share is an estimate; RailTel does not disclose revenue by customer (Ind AS 24 government-entity exemption applied [V AR]).

---

## 4. Supply side and cost structure

### 4.1 Network and capacity (RailTel)

| Item | Latest | Earlier | Source |
|---|---|---|---|
| OFC backbone | **63,000+ RKM** (FY26 AR) | 62,000+ (FY24 AR); 61,000+ / 60,560 RKM (FY22 AR) | [V ARs] — slow growth (~+500–1,000 RKM/yr) |
| City access network | **21,000+ km** | — | [V AR] |
| Stations covered | **7,000+** (Board's report) / "around 6,000" (screener about, older) | — | [V AR; V screener] |
| Station Wi-Fi | **6,117+ stations** | ~6,100 (FY24–25) [K] | [V AR] |
| VSS (CCTV) | 5,000+ stations under implementation | — | [V AR] |
| Data centres | Tier-III Secunderabad + Gurugram; edge DCs Gurugram (operational) and Mumbai (Mar-2026); 500 kW additions at Hyderabad and Noida; **~3 MW operational**; **Noida 10 MW, phase-1 5 MW "by May 2027"**; leased partner capacity (Anant Raj, Adani) | — | [V transcripts; V AR] |
| Edge DC pipeline | Indore, Ujjain, Chandigarh, Visakhapatnam targeted in FY27; analyst cited a "102 edge DC" plan | — | [V Q4 transcript] |
| RailWire | **6.23 lakh subs** (Jul-2026); 6.15 lakh (FY26); 5.70 lakh (FY24); **11,500+ partners**; ARPU **~₹474/month** | — | [V transcripts; V ARs] |
| Employees | **928** (31-Mar-2026) | — | [V AR] → revenue per employee **₹4.6 Cr** [E] |
| Capex | FY26 **~₹272 Cr** (OFC, DC, telecom/radio equipment, software, battery, land); open commitments **₹345 Cr**; FY27 plan **₹241 Cr** (chairman's speech) vs **~₹300 Cr** (CMD on the Q4 call) | FY25 capex ~₹80–100 Cr [E from CFI −82] | [V AR; V transcript] |

### 4.2 "Where ₹100 of revenue goes" — RailTel FY26 (actual, ₹4,277.48 Cr of revenue from operations) [V AR P&L lines; E %]

| Line | ₹ Cr | Per ₹100 |
|---|---|---|
| Expenses on project (hardware, sub-contracts, installation) | 2,667.32 | **62.4** |
| Access and other charges (last-mile/bandwidth bought from other operators, RailWire partner shares, IR 7% revenue share, power/O&M) | 604.28 | **14.1** |
| Licence fee to DoT (8% of licensed AGR) | 91.60 | **2.1** |
| Employee benefits | 215.67 | **5.0** |
| Other expenses | 62.15 | **1.5** |
| **= EBITDA (operating, pre-ECL)** | **636.46** | **14.9** |
| Depreciation & amortisation | 188.89 | 4.4 |
| ECL provision ("exceptional") | 24.36 | 0.6 |
| Finance cost (lease interest) | 3.78 | 0.1 |
| + Other income + finance income | +50.15 | +1.2 |
| **PBT** | **469.58** | **11.0** |
| Tax | 123.26 | 2.9 |
| **PAT** | **346.32** | **8.1** |
| Dividend paid out (₹3.25/sh) | 104.30 | 2.4 |

**Split by segment (FY26):**
- **Telecom, per ₹100 of telecom revenue:** ~₹40 access/other charges (₹604 Cr is booked mostly against telecom [E]); ~₹6 DoT licence fee; ~₹10–12 employee/other [E]; **EBITDA ~₹39**; D&A ~₹12.6; **EBIT ~₹26.7** [V segment result; E allocation].
- **Projects, per ₹100:** ~₹96 project costs plus a small overhead; **EBIT ~₹3.9** [V; E].

### 4.3 Cost drivers and their direction (2026)
- **Project hardware** (cameras, NVRs, servers, switches, UPS): imported or assembled under PPP-MII (Public Procurement — Make in India).
  - Rupee at ~₹94.9/$ and **WPI 11.4% (Sep-2026)** raise costs on fixed-price contracts [V headline].
  - Price-variation clauses are uncommon in ICT supply. **Margin risk on the ₹11.7k Cr book** [E].
- **Access charges:** last-mile leasing from Jio/Airtel/BSNL/LCOs; electricity at PoPs. RailTel is replacing old ACs, installing solar at remote PoPs, removing obsolete equipment [V AR energy section].
- **Licence fee:** **8% of AGR**. TRAI/DoT have discussed reducing it [K]; no change as of the FY26 AR ("@8% (at present)") [V].
- **Employees:** IDA pay scales; CMD/Board remuneration fixed by government [V AR]. The constraint is hiring DC, cyber and AI talent. The AR cites "talent retention challenges" [V AR §9.5].

---
## 5. Industry structure

### 5.1 Who owns India's long-haul fibre (the "neutral/state carrier" landscape)

| Player | Ownership | Network basis | Scale indicator | Listed? | Tag |
|---|---|---|---|---|---|
| **RailTel** | GoI 72.84% (Ministry of Railways) | Railway track RoW | 63,000+ RKM; 7,000+ stations; FY26 telecom revenue ₹1,501 Cr | Yes (RAILTEL) | [V] |
| **BSNL (incl. BBNL, merged)** | 100% GoI (DoT) | Road/own ducts; BharatNet PMA | Largest state network (~7 lakh+ route km OFC [K]); BharatNet 42.13 lakh km OFC incl. state/PIA [V PIB]; FY27 capital infusion ~₹28,473 Cr [V-AR] | No | [K]/[V] |
| **POWERGRID — POWERTEL** | POWERGRID (GoI 51.34% [K]) | Overhead **OPGW on transmission towers** (same corridor logic as RailTel) | Brochure: 60,946 km network, 688 PoPs, 105 cities; newer claims ~1,00,000 km, 4,000+ locations | Inside listed POWERGRID; telecom revenue not broken out in snippets (FY14: ₹288 Cr) | [V-snip] |
| **GAILTEL** | GAIL (GoI ~51.9% [K]) | Gas pipeline RoW | ~13,000 km OFC along pipelines [K — verify] | Inside listed GAIL | [K] |
| **Bharti Airtel / Airtel Business / Nxtra** | Bharti, Singtel | Highway/own ducts; submarine | Airtel Business revenue growth **+12.0% YoY** in Q1 FY27; group revenue ₹58,539 Cr | Yes | [V-snip; V screener] |
| **Reliance Jio** | Reliance | Own ducts; largest FTTH | ~1.5 mn km fibre [K]; 14.47 mn wired subs | Not separately listed (Jio IPO pending [K]) | [K]/[V-snip] |
| **Tata Communications** | Tata Sons (58.86%) | Global submarine + Indian NLD/ILD | FY26 revenue ₹24,803 Cr, OPM 19% | Yes | [V screener] |
| **Sify, Tata Tele, Vodafone Idea, ACT, Kerala Vision** | Private | Mixed | ACT 2.43 mn wired subs; Kerala Vision 1.51 mn | Sify listed (US), Tata Tele (TTML) listed | [V-snip] |
| **State fibre grids** (KFON, Gujarat FGNL, TANFINET, AP Fibernet, Telangana T-Fiber) | State govts | State RoW/BharatNet Phase II (state-led model) | — | No | [K] |

**Read:**
- Two other PSUs (POWERGRID, GAIL) run the **same "utility-RoW carrier" model** as RailTel. Neither is listed separately, so RailTel is the **only listed pure-play** on Indian utility-corridor fibre.
- **POWERTEL is the closest analogue**, and it is larger by km.
- Concentration:
  - **Fixed wired broadband top-5 = 71.5%** (RailWire is outside the top 5 with ~1.3%).
  - **Total broadband top-5 = 98.6%** [V-snip TRAI].
  - Enterprise NLD/VPN revenue concentration is not published by TRAI at the operator level in a form we fetched (**GAP §H**). Industry convention: Airtel, Tata Comm, Jio, Vodafone Idea Business and BSNL hold the bulk [K].

### 5.2 Government ICT system integration: crowded, low-barrier
- **CPSE integrators:** RailTel, ITI, BEL, TCIL, BECIL, NICSI (empanels vendors), RailTel's sister RITES (consultancy), C-DAC.
- **Private:** TCS, L&T, HCL, Tech Mahindra, Wipro, HFCL, STL (services arm), Vindhya, Allied Digital, Orient Technologies, plus a long tail.
- The **qualification bar** (turnover, past-work certificates, OEM tie-ups, security clearance) is the moat. PSUs also benefit from **nomination provisions** that allow ministries to award work to CPSEs, and from state rate contracts (HARTRON).
- **ITI is the cautionary tale:** a 90.02% GoI-owned telecom PSU with FY26 revenue ₹2,184 Cr, OPM 2.9%, **debtor days 486** and a PAT made of other income [V screener].

### 5.3 Railway signalling & telecom (S&T) and Kavach
- **Approved Kavach OEMs:**
  - HBL Engineering (first v4.0 RDSO approval, May-2025) [V-snip BS].
  - Medha Servo Drives (unlisted, Hyderabad).
  - Kernex Microsystems (Kavach 4.0 on a 207 km NCR section) [V-snip sahi].
  - Siemens; Kyosan.
  - **Quadrant Future Tek: final RDSO stage (Mar-2026); order book ₹897.9 Cr incl. ₹613 Cr Kavach loco equipment (768 locos)** [V-snip NSE filing summary].
- **RailTel is not an OEM.** It bids as integrator or lead bidder with Quadrant; its role is OFC, towers, station DCs, installation and network [V AR FY24 MoU note; V transcripts].
- **Economics differ sharply:**
  - HBL FY26 revenue ₹3,303 Cr, **OPM 34%**, ROCE 59% [V screener].
  - Kernex FY26 ₹430 Cr, OPM 35%; Q1 FY27 revenue ₹504 Cr (~9× YoY) [V screener].
  - RailTel's Kavach margin is guided only "slightly better" than 4–5% [V].
  - **Value accrues to the IP-owning OEM.**
- **Railway EPC PSUs** (IRCON OPM 8%, RVNL 3.8%) also carry S&T scope inside composite contracts [V screener].

### 5.4 Data centres
- India is ~1.8–2.0 GW, dominated by private capital: Nxtra (Airtel), CtrlS, Yotta (Hiranandani), STT GDC, NTT, Sify, AdaniConneX, Web Werks/Iron Mountain, Equinix, plus hyperscaler self-builds [V-snip; K].
- **Mumbai = 890 MW** (Cushman) and **94% of H1-2026 additions** (CBRE) [V-snip].
- **RailTel at ~3 MW is <0.2% of capacity.** Its niche is MeghRaj-aligned government community cloud, railway workloads (HMIS, e-Office), and network-integrated colocation [V AR; V transcripts].
- It is also **leasing partner shells** (Anant Raj, Adani) and providing managed services on top [V Q1 transcript]. That is an asset-light model, but margins are thinner than owning.

### 5.5 Imports/China
- Telecom/ICT hardware is governed by **Trusted Telecom** (trusted-source procurement under the 2021 licence amendment) and **PPP-MII** (local-content preference) [V-AR].
- Chinese vendors are effectively excluded from government and core networks [K].
- For RailTel this raises project costs modestly (Indian or trusted vendors) but removes low-cost Chinese competition from bids [E].

---

## 6. Business-model archetypes and their economics

| Archetype | Examples | Revenue model | EBITDA margin | Capital intensity | Working capital | Return driver |
|---|---|---|---|---|---|---|
| **A. Utility-RoW neutral carrier** | RailTel telecom, POWERTEL, GAILTEL | Annuity: leased lines, VPN, dark fibre IRU, co-location; mostly government/enterprise | **~39%** (RailTel telecom segment EBITDA [E from V]) | Sunk (network already built; ₹189 Cr D&A/yr) | Medium (government payers) | Utilisation of spare fibre; pricing pressure in NLD |
| **B. Integrated telco enterprise arm** | Airtel Business, Tata Comm, Jio Enterprise | Bundled connectivity + cloud + security | Tata Comm group ~19–20% OPM [V screener]; Airtel India ~57% (incl. mobile) [V screener] | High | Low (debtor days 14–61) | Scale, product breadth, SLAs |
| **C. Government ICT SI (PSU)** | RailTel projects, ITI, TCIL, BECIL | Milestone contracts; pass-through hardware | **3–5%** (RailTel 3.9%; ITI 2.9%) [V] | Low fixed capital | **High** (RailTel 175 days; ITI 486 days) | Order wins, execution speed, collections |
| **D. Railway S&T OEM** | HBL, Kernex, Medha, Siemens, Quadrant | Equipment + installation + AMC | **30–35%** (HBL 34%, Kernex 35% FY26) [V] | Moderate (R&D, certification) | Medium (Kernex debtor days 268 in FY26) | RDSO approvals; IP; loco and trackside volume |
| **E. Data centre / cloud** | Nxtra, CtrlS, Yotta; RailTel DC | Colocation (₹/kW/month), managed cloud | Colo 40–50% at maturity [K]; RailTel DC "higher than pure telecom" today (ED Finance) [V] | **Very high** (~₹40–60 Cr/MW build [K]) | Low–medium | Fill rate, power cost, anchor tenants |
| **F. Retail broadband via partners** | RailWire, ACT, LCO-led ISPs | Monthly ARPU (₹474), revenue share with partner | Low-mid (RailWire not disclosed) [GAP] | Low for RailTel (partners own the last mile) | Low (prepaid) | Subscriber adds vs ARPU erosion from FWA/Jio/Airtel |

**Key insight for the writer:**
- RailTel combines A + C + a small E + F.
- **A pays the bills for profit; C provides the growth.**
- Investors who compare RailTel with D (Kavach OEMs) or E (DC pure plays) on growth are comparing it with businesses whose margins it cannot earn in C.

---

## 7. Regulation and policy

- **Licences:** RailTel holds DoT **NLD, ISP (Cat-A), ILD** authorisations and **IP-1** registration [V AR segment note]. It pays an **8% licence fee on AGR** [V AR].
- **Telecommunications Act, 2023** (replacing the Indian Telegraph Act 1885) has been operationalised through:
  - Telecom Cyber Security Rules 2024.
  - **Right of Way Rules 2024** (harmonised RoW fees and timelines).
  - TRAI recommendations on the "terms and conditions of network authorisations" (17-Feb-2025) [V-AR].
  - **Under the new authorisation regime, IP-1 becomes an "infrastructure" authorisation.** Watch whether this brings fees or obligations on dark fibre/tower revenue [E, FLAG].
- **Railway RoW access:** RailTel's 7% revenue share to IR on services [V AR]. Private telcos seeking railway RoW go through railway land/ROW policies [K]. The RoW Rules 2024 may make track-side RoW available to others, which would threaten exclusivity [E, FLAG].
  - Screener's description: RailTel operates "under **exclusive ROW**" [V screener "Key Points"]. The legal basis (an MoR agreement) was not fetched (**GAP**).
- **Spectrum for railways:** the Cabinet allotted **5 MHz (paired) in the 700 MHz band** to Indian Railways (Jun-2021) for LTE-based mobile train radio, estimated investment **>₹25,000 Cr over 5 years** [V-snip].
  - IR later sought **another 5 MHz** free of cost, offering to surrender 146–174 MHz/400 MHz once LTE/Kavach-over-LTE is deployed [V-snip TRAI CP item].
  - Status in 2026: CMD "not aware" of LTE deployment progress (May-2026) [V]. RailTel did the LTE-R ground infrastructure for 523 RKM in Secunderabad division [V AR FY24].
- **BharatNet:** funded by **Digital Bharat Nidhi** (ex-USOF); Amended BharatNet approved 4-Aug-2023; BSNL is the Project Management Agency [V PIB; V-AR].
- **Procurement rules:**
  - GFR 2017 [V-AR].
  - **GeM** (RailTel 25% of procurement via GeM in FY26) [V].
  - PPP-MII.
  - Trusted Telecom portal.
  - CVC Integrity Pact.
  - DPE MoU system: RailTel received "**Very Good**" for FY25 [V AR].
- **Data and cyber:**
  - DPDP Act 2023 and Rules 2025 (Phase 1 from 14-Nov-2025; penalties up to ₹250 Cr).
  - CERT-In Directions 2022 (6-hour reporting).
  - MeitY cloud empanelment (MeghRaj) [V-AR].
  - RailTel's certifications: ISO 27001/20000/9001/27017/27018/14001, **CMMI Level 5 (Nov-2025)**, Tier-III (design and facility) DCs [V AR].
- **CPSE governance:**
  - DPE guidelines and SEBI LODR. RailTel's board has government nominee and independent directors; the CMD and functional directors are appointed by the President through MoR [V AR].
  - **DIPAM dividend floor:** higher of 30% PAT or 4% net worth (OM 18-Nov-2024, effective FY25) [V-snip].
  - Buy-back eligibility (if price < book for 6 months, net worth ≥₹3,000 Cr and cash ≥₹1,500 Cr) does **not** apply to RailTel: net worth ₹2,262 Cr, and the price is above book [E].
- **Disinvestment / minimum public shareholding:** GoI holds 72.84%. **SEBI MPS (25% public) would require GoI to sell 2.16 percentage points by Feb-2026 (5 years from listing) [K — MPS timelines for PSUs are often relaxed by government notification; FLAG].** No OFS has been announced [V screener holdings flat]. This is a possible supply overhang.

---

## 8. History and cycles (narrative; full timeline in §G)

- **2000–2010, building the corridor.**
  - RailTel incorporated 26-Sep-2000 [K, CIN L64202DL2000GOI107905 → 2000 V AR].
  - IR's telecom assets and fibre were transferred for equity (₹305.94 Cr of non-cash shares) [V AR].
  - NLD/ISP licences followed.
  - It became an **implementing CPSE for BharatNet Phase I** (then NOFN, with BSNL and POWERGRID), the **National Knowledge Network**, and **USOF-funded NE fibre** [V AR].
- **2012–2019, retail and Wi-Fi.**
  - Mini-Ratna in 2012 [V AR].
  - RailWire launched on a franchise model [K].
  - **Station Wi-Fi with Google** started Jan-2016 at Mumbai Central [K]. RailTel later took the programme over and expanded to ~6,100 stations after Google's 2020 exit from Station [K].
  - Tier-III DCs at Secunderabad and Gurugram [V/primer].
- **2020–2021, safety and listing.**
  - **Kavach adopted as the national ATP (Jul-2020)** [V-AR].
  - **IPO in Feb-2021: listed 26-Feb-2021**. Price ₹94, a pure OFS of ~8.7 crore shares, ~₹819 Cr [K].
  - The FY21 OPM of 24% (telecom 64% of revenue) is the "old RailTel" baseline.
- **2022–2025, the project boom.**
  - Project revenue went from ₹507 Cr (FY22) to ₹2,115 Cr (FY25), driven by state-government ICT, railway VSS, e-Office, MEA supplies [V].
  - The share price rallied with the "railway PSU" trade to a peak around Jul-2024 [K, ~₹618 intraday].
  - **Navratna in Aug-2024** [V].
  - **Balasore triple-train accident (2-Jun-2023)** [K] accelerated Kavach funding.
- **FY26, record year.**
  - Revenue ₹4,277 Cr; PAT ₹346 Cr; FY26 order inflow **₹7,363 Cr** [V AR]; order book **₹8,563 Cr (Dec-25) → ₹11,466 Cr (Apr-26)** [V].
  - DC revenue +59%.
  - VSS bandwidth billing started in Q4.
- **2026, de-rating.**
  - The stock fell **~38% in a year** to ₹229 (23-Oct-2026) [V], despite +20% Q1 FY27 revenue and a ₹11,747 Cr book.
  - **Reasons [E]:**
    - Q1 PAT flat on ECL.
    - Cash flow weak (FCF ₹44 Cr).
    - Telecom receivables spike.
    - Few new Kavach tenders.
    - Sector-wide railway-PSU de-rating: RVNL ₹181 vs 52-week range ₹179–401 (−55% from the high); IRCON ₹97.6 vs ₹96–186 (−48%) [V screener 23-Oct-26].
    - Meanwhile the fibre makers re-rated: HFCL ₹240 vs a 52-week low of ₹59.8; STL ₹827 vs ₹84.6 [V screener]. The market is paying for the **fibre/AI-DC up-cycle in equipment, not in a government carrier's backlog**.
    - Rising rates (repo +).

---

## 9. Unit economics and native KPIs (benchmarks in §F)

| KPI | Definition | RailTel latest | Trend | Source |
|---|---|---|---|---|
| **Telecom share of revenue** ("mismatch ratio" in the primer = telecom ÷ projects) | Telecom segment revenue ÷ revenue from ops | **35.1% FY26** (ratio 0.54×); Q4 FY26 26.9% (0.37×); **Q1 FY27 40.4% (0.68×)** | Down from 64% (FY21) | [V] |
| **Telecom segment EBIT margin** | Segment result ÷ segment revenue | **26.7% FY26**; Q4 33.4%; Q1 FY27 19.2% | Up from 19–22% (FY22–25) | [V] |
| **Telecom segment EBITDA margin** | (Result + D&A) ÷ revenue | **~39% FY26** | CMD: "always 35–40%" | [E; V transcript] |
| **Project EBIT margin** | Segment result ÷ revenue | **3.9% FY26**; Q1 FY27 4.5% | Down from 15.9% (FY21), 8.4% (FY22) | [V] |
| **Company EBITDA margin** | | **15.22% (company) / 14.9–15% (screener)** | 24% FY21 → 15% | [V] |
| **Order book / revenue** | Unexecuted orders ÷ TTM revenue | **₹11,747 Cr ÷ ₹4,427 Cr = 2.65 yrs** | ~1.85 yrs mid-2024 (₹4,750 ÷ ₹2,568 Cr) | [V; E] |
| **Order inflow / book-to-bill** | New orders ÷ revenue | **FY26: ₹7,363 Cr ÷ ₹4,277 Cr = 1.72×**; FY24 ~₹2,870 Cr (1.12×); Q1 FY27 ₹1,688 Cr (1.89× of Q1 revenue) vs ₹721 Cr | Rising | [V; E] |
| **Railway share of order book** | | **21% (Apr-26) → 23.5% (Jul-26)** | — | [V] |
| **Receivable days** | Trade receivables ÷ revenue × 365 | **175 (FY26)**; 166 (FY25); 180 (FY24); 195 (FY23); 208 (FY21) | Range-bound 160–208 | [V AR; V screener] |
| **Receivables + unbilled days** | (TR ₹2,053 + unbilled ₹898) ÷ revenue × 365 | **~252 days** | — | [E] |
| **ECL charge / revenue** | | 0.57% (FY26); 0.62% (FY25) | — | [V; E] |
| **CFO / EBITDA** | | **56% FY26**; 55% FY25; 126% FY24 | Weak | [V screener] |
| **RailWire subs / ARPU** | | **6.23 lakh (Jul-26) / ₹474** | +8–9% subs/yr; ARPU "continuously under pressure" | [V] |
| **NLD revenue growth** | | +2.9% FY26 (₹639.8 Cr); Q1 FY27 ₹144 Cr vs ₹151 Cr (−4.6%) on delayed government renewals and NKN PO decentralisation | Slowing | [V] |
| **DC revenue / MW** | DC revenue ÷ operational MW | ₹202 Cr ÷ ~3 MW ≈ **₹67 Cr/MW** — far above colocation norms (₹8–12 Cr/MW/yr [K]). DC revenue includes managed cloud/hosting/software and leased partner capacity, so it is **not** a colo yield | — | [E — FLAG] |
| **Revenue per employee** | | ₹4.6 Cr (928 staff) | — | [E] |
| **Dividend payout** | DPS × shares ÷ PAT | **30% FY26** (₹3.25); 31% FY25; 37% FY24; 43% FY23 | Converging to the DIPAM 30% floor | [V screener; V AR] |
| **ROCE / ROE** | | **22.8% / 17.1%** (screener TTM); RONW 16.25% FY26 (company) | ROCE up from 16% (FY22) | [V] |

**Unit economics of a ₹100 Cr government ICT project (archetype C) [E, from RailTel's segment margins and receivable days]:**
- Revenue ₹100 Cr over ~12–24 months; project costs ~₹95–96 Cr; EBIT ~₹4–5 Cr; tax ~₹1.1 Cr; **PAT ~₹3.2–3.6 Cr**.
- Working capital: if receipts lag ~175 days and suppliers are paid in ~120–150 days, net WC ≈ ₹10–20 Cr per ₹100 Cr of annual project run-rate. **Return on WC ≈ 20–30% pre-ECL** [E].
- With ECL of 0.5–1% of revenue on aged debtors, the return falls toward the mid-teens.

**Unit economics of telecom (archetype A) [E]:**
- Incremental bandwidth on lit fibre costs DWDM cards and power. Incremental EBITDA margin can exceed 60%.
- But **NLD pricing falls ~5–15%/yr** in enterprise markets [K]. CMD: "continuous pressure on prices in telecom… its growth is always subdued by the pricing pressures" [V Q1 transcript].
- Telecom revenue therefore grows ~8–11%/yr only through volume (FY21–26 CAGR 11.1%) [V].

---

## 10. Global lens

| Comparable | Model | Scale | Margins/returns | Read-across | Tag |
|---|---|---|---|---|---|
| **China Railway Signal & Communication (CRSC)** — HK/Shanghai-listed | Railway signalling + communication OEM/integrator (China's "Kavach + RailTel + HBL") | 2025 revenue **~RMB 34.6–34.7 bn (≈₹45,300 Cr)**; net profit **~RMB 4.25 bn**; attributable RMB 3.69 bn; new external contracts RMB 44.14 bn; dividend payout ~49% | Net margin ~12% | Shows the scale of a mature national S&T market. CRSC owns the IP (OEM), so its margins sit between RailTel projects (4%) and HBL (34%) | [V-snip iTiger/ESG report] |
| **Network Rail (UK) — "Project Reach"** | Concession: Neos Networks (fibre) + Freshwave (mobile) build and sell fibre along ECML/WCML/GWML under a long-term revenue share with Network Rail | ~1,000 km initially, ambition >5,000 km; procurement value **£935 mn (~₹11,700 Cr)**; mobile installs from 2026, full rollout by 2028; saves taxpayers ~£300 mn | n/a | **The template RailTel's CMD describes**: partner capital plus revenue share to monetise rail fibre without own capex | [V-snip ISPreview, railway-technology, find-tender] |
| Uniti / Zayo / Lumen (US) | Neutral long-haul and metro fibre | Zayo ~$2.7 bn revenue [K] | Fibre lessors: EBITDA margins **40–60%** [K] | RailTel's telecom segment EBITDA (~39%) is at the low end; the gap is government pricing plus the 8% licence fee plus the 7% IR share | [K] |
| Europe rail telecom arms (DB broadband/"Gigabit", SNCF Réseau Telecom, Infrabel, ProRail) | Mostly captive or concessioned to telcos | — | — | Most railways **concession** spare fibre rather than run a listed telco. RailTel is unusual in being a listed, licensed operator | [K] |

**India vs global [E]:**
- RailTel's EV/EBITDA ~10× (FY26) and P/E ~21× sit **below** Indian telecom/DC multiples (Tata Comm 39× P/E; Airtel 37.8×) and **in line with** railway EPC PSUs (IRCON 17.5×; RITES 21.8×).
- Global fibre infrastructure trades at ~10–15× EV/EBITDA [K].
- On a sum-of-parts, RailTel's telecom EBITDA (~₹589 Cr) at 10× would be ₹5,900 Cr. Projects (~₹110 Cr EBIT) at 15× P/E post-tax would be ~₹1,200 Cr. Add net cash ~₹714 Cr → **~₹7,800 Cr vs m-cap ₹7,349 Cr** [E; illustrative only].

---

## 11. Technology and disruption risks

1. **FWA and 5G substitution in retail broadband.** Jio/Airtel 5G FWA grew fast (Jio leads FWA [V-snip]). The CMD says "people moving to FWA… segment is very heated… ARPU continuously under pressure" [V Q1 transcript]. RailWire's ~₹474 ARPU and its partner model are vulnerable.
2. **Satellite broadband (Starlink, OneWeb, Kuiper).**
   - A threat to rural broadband. But **Starlink is now a RailTel NLD customer** (backhaul/gateway connectivity) [V Q1 transcript].
   - NFAP-2025 (effective 30-Dec-2025) allocates Ka/Q/V bands for LEO broadband [V-AR].
   - Net effect: probably mildly positive for NLD, negative for RailWire in remote areas [E].
3. **Railway's own networks.**
   - Kavach is laying **11,547 km of new OFC** and **1,721 towers** under IR S&T budgets [V]; LTE-R would add a dedicated radio network.
   - If zones own and operate these, RailTel's role in railway communications narrows to contractor. If RailTel operates them (O&M), it widens to annuity. **Contract structure unknown (GAP).**
4. **Hyperscaler cloud for government.** MeitY empanels AWS, Azure and Google for government workloads [K]. RailTel's cloud niche relies on sovereignty and air-gap needs (CMD on railway AI: "completely air-gapped… not the public cloud") [V].
5. **AI/GPU.** RailTel is "in the process" of GPU services and SLMs for Railways [V Q1 transcript]. Capex needs (₹ hundreds of crore per few MW of GPU) exceed its ₹241–300 Cr budget [E].
6. **Obsolescence of legacy SDH/TDM services** (NLD voice carriage, E1 leased lines) → migration to Ethernet/MPLS at lower price points [K].
7. **Cyber-security.** RailTel deployed a Threat Intelligence Dashboard for RailWire that processed "over 4.58 million threat flows with a false-positive rate of 0.02%, protecting over 2.34 lakh subscribers from IP-level blacklisting" [V AR BRSR]. That is a defensive capability, not an incident. As a government carrier and host, a breach is a reputational risk.

---

## 12. What to watch (leading indicators, events, pipeline)

| Item | Date / frequency | Why it matters |
|---|---|---|
| **Q2 FY27 results + interim dividend** | **Board 25-Oct-2026; record date 30-Oct-2026** [V] | Telecom/project split, order book, ECL, receivables. Interim DPS (FY26 had two interims totalling ₹2) |
| Telecom segment revenue per quarter | Quarterly | Needs to hold ≥₹360–450 Cr after the Q4 VSS catch-up; NLD renewals (Q1 NLD fell to ₹144 Cr) |
| Order book and inflow | Quarterly / LoA filings | ₹11,747 Cr (Jul-26). Watch the Kavach share and railway vs non-railway mix |
| **Kavach**: Quadrant RDSO approval; first revenue on ECR/WCR; new tenders | "Any time" (Jul-26); FY27 | Gating item for RailTel's Kavach revenue. Kavach 4.0 RKM commissioned (2,633 → ?) |
| Railway capex utilisation | Monthly (MoR) | 39% of ₹2.93 lakh Cr spent by Jul-26 |
| Noida 10 MW DC phase-1 (5 MW) | ~May-2027 | DC revenue ₹300 Cr (FY27) → ₹500 Cr (FY28) guidance |
| Edge DCs (Indore, Ujjain, Chandigarh, Vizag) | FY27 | Test of the station-node monetisation thesis |
| Receivable days and CFO | Half-yearly BS; annual | MoU target 90 days vs 175. Telecom receivables ₹1,287 Cr |
| RailWire subs and ARPU | Calls; TRAI monthly | 6.23 lakh; ARPU pressure |
| BharatNet: PIA progress; RailTel IE fees; any O&M role | DoT/BSNL | Amended BharatNet completion Mar-2027 |
| LTE-R / 700 MHz | Railway Board | Any RailTel role in network build or O&M |
| Fibre partnership/monetisation deal (revenue-share with private players) | — | CMD is "working out" a partner model; a Project-Reach-type deal would be a re-rating event |
| GoI OFS / MPS compliance | — | 72.84% GoI; potential supply |
| Licence-fee reform | DoT/TRAI | 8% LF is ~6% of telecom revenue |
| Macro | RBI MPC Dec-2026 | Repo 5.50% after the Oct hike; PSU multiples |

---
## A. The forces that define this sub-sector (what an expert leads with)

1. **Mix: low-margin project growth vs high-margin telecom annuity.**
   - Projects grew at a 41% CAGR (FY21–26) at ~4% EBIT; telecom grew at 11% at ~27% EBIT (~39% EBITDA) [V; E].
   - Every ₹1,000 Cr of project revenue adds ~₹40 Cr EBIT. ₹1,000 Cr of telecom would add ~₹270 Cr.
   - Company OPM has fallen 24% → 15% purely on mix, while segment margins held or improved.
   - The single most predictive number is the **telecom share of revenue** (35.1% FY26; 40.4% Q1 FY27 on seasonality).
2. **Order book composition and conversion: tenders, rate contracts, nomination.**
   - Order book ₹4,750 Cr (mid-2024) → ₹11,747 Cr (Jul-2026); FY26 inflow ₹7,363 Cr (book-to-bill 1.72×) [V].
   - **Railways are only 21–23.5% of the book**; the rest is state/central government and PSU ICT, largely open-tendered or rate-contract based [V].
   - FY27 conversion guidance: project revenue **₹3,000–3,500 Cr** [V]. **Q4 seasonality** (Q4 FY26 = 39% of the year's revenue) reflects government fiscal-year-end acceptances [V; E].
3. **Indian Railways capex, S&T and Kavach.**
   - ₹2.93 lakh Cr FY27 grant; safety ₹1.2 lakh Cr; Kavach ₹2,066 Cr allocated; 2,633 RKM commissioned and 21,794 RKM taken up [V].
   - The pool is large, but **RailTel is an integrator behind OEMs**. Its OEM (Quadrant) awaited RDSO approval in Jul-2026, and new Kavach tenders have paused [V]. The equipment economics (30–35% OPM) go to HBL/Kernex/Medha.
   - **RailTel's edge is OFC, towers and station data centres**, which are Kavach's telecom backbone.
4. **Government ICT and connectivity programmes (BharatNet, Digital India, e-Office, VSS, cloud).**
   - DoT FY27 ₹73,991 Cr incl. BharatNet ₹20,000 Cr; Amended BharatNet ₹1.40 lakh Cr [V].
   - RailTel's BharatNet role is now **Independent Engineer** (fee) rather than builder [V]. Its non-railway project revenue (+41.5% in FY26) is the real engine.
5. **Working capital with government clients, and dividend discipline.**
   - Receivables 175 days vs a 90-day MoU target; unbilled ₹898 Cr; ECL ₹24 Cr/yr; FCF ₹44 Cr (FY26) and −₹70 Cr (FY25) [V].
   - DIPAM's 30%-of-PAT floor takes ~₹104 Cr/yr; capex ₹241–300 Cr/yr.
   - **The balance sheet is debt-free but cash is flat (~₹777 Cr).** Growth in projects consumes the cash that telecom generates [E].
6. **Pricing pressure in enterprise bandwidth and retail broadband.**
   - NLD revenue grew just 2.9% in FY26 and fell 4.6% YoY in Q1 FY27 [V]. The CMD cites "continuous pressure on prices in telecom", especially "in enterprise business on the South side" [V].
   - RailWire ARPU is "continuously under pressure" from FTTH bundling and FWA [V].
   - Airtel Business grows ~12% [V-snip] with far greater product breadth.
7. **Right-of-way monetisation: the corridor option.**
   - 63,000+ RKM along track, ~7,000 stations, 21,000 km city fibre [V].
   - Private demand for non-highway routes (5G backhaul, DC interconnect) is rising (HFCL/STL boom [V screener]). RailTel prefers a partner/revenue-share model [V].
   - Network Rail's Project Reach (UK) is the global template [V-snip].
   - Station edge DCs are the second leg; two have been built so far [V].
8. **Data centres: the margin-mix fix, but sub-scale.**
   - DC revenue ₹127 → ₹202 Cr (FY26), guided ~₹300 Cr FY27 and ~₹500 Cr FY28 [V].
   - ~3 MW operational vs India ~1.8–2.0 GW [V; V-snip]. Noida 10 MW (5 MW phase-1 by ~May-2027) [V].
   - The economics rely on government/railway anchor workloads and leased partner shells [V].
9. **Macro and the PSU factor.**
   - Repo raised to 5.50% (7-Oct-2026) [V-sib]; WPI 11.4% (Sep-26) [V headline]; rupee ~₹94.9/$.
   - RailTel trades as a "railway PSU" factor stock (Nifty India Railways PSU index member [V screener]). The whole basket has de-rated: RVNL −55% and IRCON −48% from their 52-week highs [V].

---

## B. Bespoke deep-dive themes (each deserves its own section in the report)

1. **"Two companies in one": the telecom annuity vs the project contractor.**
   - Build a two-column P&L (FY21–FY26 + Q1 FY27) from the AR segment notes: revenue, segment EBIT, implied EBITDA, segment assets/liabilities, capital employed (Jun-26: telecom ₹1,183.7 Cr; projects ₹742.4 Cr [V Q1 PDF]).
   - Show the telecom line by product (NLD/ISP/IP-1/DC/ICT) [V AR Note 28].
   - Show the project line by customer (Railways ₹503 Cr vs other ₹2,274 Cr).
   - Close with the SOTP illustration.
2. **The railway as customer, landlord and owner.**
   - The 7% IR revenue share (₹46 Cr), the ₹305.94 Cr non-cash equity, the 72.84% GoI stake, the exclusive RoW, and railway work at only ~20% of the order book.
   - Kavach (integrator role, Quadrant partnership, ECR/WCR orders >2,000 RKM), VSS (5,000+ stations → recurring telecom), HMIS (709 hospitals → DC hosting), Wi-Fi (6,117 stations), LTE-R (523 RKM ground works), tunnel communication.
   - **Who owns the new Kavach fibre and towers?** That is the open question.
3. **Kavach economics across the value chain.**
   - OEM (HBL 34% OPM; Kernex 35%; Quadrant) vs integrator (RailTel ~5%) vs EPC (IRCON/RVNL 4–8%).
   - Programme status: 2,633 RKM commissioned; 21,794 RKM taken up; 6,290 locos fitted; ₹3,875 Cr spent; ₹2,066 Cr FY27 [V].
   - Per-RKM and per-loco costs (indicative ₹24 lakh/RKM trackside at Moradabad; ~₹1.2 Cr per onboard set at ICF prices [V-snip; E]).
4. **Government working capital: receivables, unbilled revenue, ECL and the dividend floor.**
   - Debtor days by year (160–208), telecom receivables ₹331 → ₹1,287 Cr, ECL movement (₹98 → ₹120 → ₹143 Cr allowance), CFO vs PAT, FCF.
   - DIPAM 30%/4% floor; the cash bridge FY24–FY26.
5. **(Optional) RailWire and station nodes: the small-town broadband franchise.**
   - 6.23 lakh subs, 11,500 partners, ₹474 ARPU, ~₹350 Cr revenue, ~1.3% of fixed wired broadband; the FWA threat; IPTV; the Gujarat Fibre Grid revenue share.

---

## C. The REVENUE / PROFIT EQUATION

**RailTel (and the sub-sector) = Telecom annuity + Project margin − levies − WC drag**

```
Revenue = Telecom (NLD + ISP + IP-1 + DC/ICT) + Projects
  Telecom ≈ Σ circuits/bandwidth × price  +  RailWire subs × ARPU × 12  +  fibre/tower leases  +  DC MW × yield
  Projects ≈ Opening order book × conversion rate (≈30–35%/yr of the book)  [E]
EBITDA ≈ Telecom × ~39%  +  Projects × ~4–4.5%  −  unallocable (~₹39 Cr)
PAT ≈ (EBITDA − D&A ~₹190 Cr − ECL ~0.5–0.6% of revenue + other income ~₹50 Cr) × (1 − 25.2% tax)
FCF ≈ CFO (≈ PAT + D&A − ΔWC) − capex (₹240–300 Cr)
```

**Worked example: FY26 actual vs FY27 [E]**

| Line | FY26 actual (₹ Cr) | FY27 illustrative (₹ Cr) | Basis |
|---|---|---|---|
| RailWire: 6.15 lakh × ₹474 × 12 | ~350 | 6.6 lakh × ₹465 × 12 ≈ **368** | Subs +7%, ARPU −2% [E] |
| NLD | 640 | 640–660 | Flat to +3% (Q1 −4.6%) |
| ISP ex-RailWire (ILL etc.) | ~102 | ~105 | |
| IP-1 (dark fibre + tower) | 109 | 115 | |
| Data centre | 202 | **~300** | Guidance [V] |
| Other ICT (Aadhaar auth, SOC) | 89 | 110 | |
| Other op. revenue | 9 | 9 | |
| **Telecom total** | **1,501** | **~1,650–1,700** | +10–13% |
| **Projects** | **2,777** | **3,000–3,500** | Guidance [V]; take 3,300 |
| **Revenue** | **4,277** | **~4,950–5,000** | +16–17% (below the ~20% guidance unless projects hit ₹3,500 Cr) |
| Telecom EBITDA @ ~39% | 589 | ~650 | |
| Project EBIT @ 3.9% / 4.5% | 109 | ~149 | |
| Unallocable | −39 | −40 | |
| **EBITDA** | **~658 (company)** | **~760** | ~15.3% |
| D&A | −189 | −205 | Capex ₹241–300 Cr |
| ECL | −24 | −30 | |
| Other + finance income | +50 | +45 | Lower deposits |
| Finance cost | −4 | −4 | |
| **PBT** | **470** | **~566** | |
| Tax @ 25.2% | −123 | −143 | |
| **PAT** | **346** | **~423** | +22% [E] |
| EPS (32.09 cr shares) | ₹10.79 | ~₹13.2 | |
| P/E at ₹229 | 21.2× | ~17.4× FY27E | [E] |

**Sensitivities [E]:**
- Each **+1 pp of telecom share of revenue** at constant revenue ≈ +₹15 Cr EBITDA (≈ +0.35 pp company margin).
- Each **+₹500 Cr of project revenue** ≈ +₹20–22 Cr EBIT.
- Each **+10 days of receivables** ≈ ₹117 Cr of cash tied up (₹4,277 Cr ÷ 365 × 10).

---

## D. Proposed 6-cell stat strip (₹ only)

| Cell | Value | Source |
|---|---|---|
| FY26 revenue from operations | **₹4,277 Cr (+23%)** | [V AR] |
| Telecom share / telecom EBITDA margin | **35% of revenue / ~39%** (project EBIT 3.9%) | [V AR segment; E] |
| Order book | **₹11,747 Cr** (31-Jul-2026; 2.65× TTM revenue; railways ~23.5%) | [V Q1 transcript] |
| FY26 PAT / dividend | **₹346 Cr (+16%) / ₹3.25 per share (30% payout)** | [V AR] |
| Receivable days | **175 days** (MoU target 90); receivables + unbilled ₹2,951 Cr | [V AR; E] |
| Market cap / P/E | **₹7,349 Cr / 21× TTM** (₹229, 23-Oct-2026; −38% in 1 yr) | [V screener; E] |

Alternative cells:
- OFC 63,000+ RKM [V].
- RailWire 6.23 lakh subs [V].
- Kavach 4.0 at 2,633 RKM nationally [V].
- DC revenue ₹202 Cr (+59%) [V].

---

## E. Chart-ready datasets

1. **Revenue by segment, FY21–FY26 + Q1 FY27 (₹ Cr)** [V ARs; Q1 PDF]
   - Telecom: FY21 884.9 · FY22 1,041.6 · FY23 1,169.5 · FY24 1,265.4 · FY25 1,362.5 · FY26 1,500.7 · Q1 FY27 360.8
   - Projects: FY21 492.9 · FY22 506.9 · FY23 787.9 · FY24 1,302.4 · FY25 2,115.0 · FY26 2,776.8 · Q1 FY27 532.5
2. **Segment EBIT margin %, FY21–FY26** [V; E]
   - Telecom: 23.1 · 19.2 · 19.5 · 21.9 · 22.2 · 26.7 (Q1 FY27 19.2; Q4 FY26 33.4)
   - Projects: 15.9 · 8.4 · 4.7 · 5.4 · 4.4 · 3.9 (Q1 FY27 4.5; Q4 FY26 3.8)
3. **Telecom share of revenue % and of segment profit %** [E from V]
   - Revenue share: FY21 64.2 · FY22 67.3 · FY23 59.7 · FY24 49.3 · FY25 39.2 · FY26 35.1
   - Profit share: 72.2 · 82.5 · 86.0 · 79.8 · 76.3 · 78.5
4. **Telecom revenue by product, FY21–FY26 (₹ Cr)** [V AR Note 28; FY25 reclassified IP-1 into DF/Tower/ICT]
   - NLD: 434.7 · 478.1 · 569.2 · 590.4 · 621.6 · 639.8
   - ISP: 254.9 · 348.8 · 379.6 · 433.1 · 437.0 · 451.8
   - IP-1 (old basis incl. DC/ICT): 189.3 · 211.2 · 214.7 · 237.8 · — · —
   - FY25 / FY26 new basis: Dark fibre 45.2 / 50.3 · Tower 53.7 / 59.0 · **Data centre 127.5 / 202.3** · ICT others 65.8 / 88.7
5. **Project revenue by customer (₹ Cr)** [V]
   - Railways: FY21 153.9 · FY22 78.5 · FY23 157.1 · FY24 266.3 · FY25 508.1 · FY26 503.1
   - Other projects: 298.5 · 399.5 · 630.8 · 1,036.1 · 1,606.9 · 2,273.7
6. **Quarterly revenue and OPM, Q1 FY25–Q1 FY27 (₹ Cr / %)** [V screener]
   - Jun-24 558/19 · Sep-24 843/15 · Dec-24 768/16 · Mar-25 1,308/14 · Jun-25 744/16 · Sep-25 951/16 · Dec-25 913/15 · Mar-26 1,669/14 · Jun-26 893/15
7. **Order book (₹ Cr)** [V]
   - mid-2024 ~4,750 · 31-Dec-2025 8,563 · 31-Mar-2026 ~10,650 (verbal) · 30-Apr-2026 11,466 · 31-Jul-2026 11,747
   - Order inflow: FY24 ~2,870 · FY26 7,363 · Q1 FY26 721 · Q1 FY27 1,688
8. **Working capital (₹ Cr, Mar-25 → Mar-26)** [V AR]
   - Trade receivables 1,581.4 → 2,053.0 (telecom 331.3 → 1,287.2; projects 1,250.1 → 765.7)
   - Unbilled 814.8 → 898.3
   - ECL allowance 120.3 → 142.6
   - Trade payables 1,429.8 → 1,674.2
   - Debtor days (screener): FY16 164 · FY17 160 · FY18 173 · FY19 169 · FY20 160 · FY21 208 · FY22 160 · FY23 195 · FY24 180 · FY25 166 · FY26 175
9. **Cash flow (₹ Cr)** [V screener]
   - CFO: FY20 154 · FY21 374 · FY22 258 · FY23 284 · FY24 556 · FY25 255 · FY26 316
   - FCF: 76 · 294 · 142 · 107 · 347 · −70 · 44
10. **RailWire subscribers (lakh)** [V ARs; transcripts]
    - FY24 5.70 · FY26 6.15 · Jul-2026 6.23
    - Revenue: FY24 ₹344 Cr · FY26 ~₹350 Cr; ARPU FY26 ~₹474
11. **Kavach rollout (RKM commissioned)** [V/V-snip]
    - Pre-2025 legacy Kavach ~1,465 RKM (SCR) [K]
    - Kavach 4.0: Jan-2026 >1,300 [V-snip] · 11-Mar-2026 1,452 [V-AR] · 25-Jul-2026 2,490 [V-snip] · 31-Jul-2026 2,633 [V]
    - Taken up: 7,100 RKM trackside (Mar-26 AR) → 21,794 RKM (Jul-26)
12. **Peer FY26 OPM % (screener 23-Oct-26)** [V]
    - RailTel 15 · Tata Comm 19 · Bharti Airtel 55 · HFCL 15 · STL 12 · ITI 2.9 · Tejas −62 · HBL 34 · Kernex 35 · IRCON 8 · RVNL 3.8 · RITES 24 · IRCTC 32
13. **Cost per ₹100 of revenue, FY26** [V; E]
    - Project costs 62.4 · access charges 14.1 · DoT LF 2.1 · employees 5.0 · other 1.5 · D&A 4.4 · ECL 0.6 · tax 2.9 · PAT 8.1 (other income +1.2)
14. **Levies paid (₹ Cr)** [V AR]
    - DoT licence fee FY25 88.56 → FY26 91.60 (cumulative 846)
    - IR revenue share 42.35 → 46.03 (cumulative 521)

---

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Good | Average | Weak | RailTel now |
|---|---|---|---|---|
| Telecom share of revenue (utility-RoW carrier with an SI arm) | >50% | 35–50% | <35% | 35.1% FY26 (weak/average border) |
| Telecom segment EBITDA margin | >45% | 35–45% | <35% | ~39% |
| Project/SI EBIT margin (government ICT) | >6% | 3.5–6% | <3.5% (ITI 2.9% OPM) | 3.9% |
| Company EBITDA margin | >20% | 13–20% | <13% | 15.2% |
| Book-to-bill | >1.3× | 1.0–1.3× | <1.0× | 1.72× (FY26) |
| Order book / revenue | >3× | 2–3× | <2× | 2.65× |
| Receivable days (government counterparties) | <90 (MoU target) | 90–150 | >150 (ITI 486) | 175 (weak) |
| CFO / EBITDA | >80% | 60–80% | <60% | 56% FY26 (weak) |
| ECL / revenue | <0.3% | 0.3–0.7% | >0.7% | 0.57% |
| ROCE | >20% | 12–20% | <12% | 22.8% (good, flattered by depreciated assets) |
| Dividend payout (CPSE) | >40% | 30–40% | at the 30% floor | 30% |
| RailWire ARPU (₹/month) | >₹550 | ₹400–550 | <₹400 | ₹474 |
| Broadband net adds/yr (franchise ISP) | >15% | 5–15% | <5% | ~8–9% |
| DC revenue growth | >40% | 20–40% | <20% | 59% FY26; ~48% guided FY27 |
| NLD revenue growth | >8% | 3–8% | <3% | 2.9% FY26 (weak) |
| Capex / revenue (carrier + SI) | 5–8% | — | >12% or <3% | 6.4% FY26 |

---

## G. Timeline (year: event)

- **2000 (26-Sep):** RailTel incorporated under the Ministry of Railways to modernise train-control telecom and build a national broadband network on railway RoW [V AR; K date].
- **2000s:** IR telecom assets transferred for equity (₹305.94 Cr non-cash shares) [V AR]. NLD/ISP/IP-1 licences obtained [K years].
- **2011–2017:** CPSE implementer of **BharatNet Phase I (NOFN)**, the National Knowledge Network, and USOF NE fibre [V AR].
- **2012:** Mini-Ratna (Category-I) [V AR].
- **Jan-2016:** Station Wi-Fi launched with Google at Mumbai Central [K]. Later scaled to 6,000+ stations [V AR: 6,117+].
- **2016–2020:** RailWire franchise model scales; Tier-III DCs (Secunderabad, Gurugram) operational; MeitY cloud empanelment [primer; K].
- **Jul-2020:** Kavach adopted as India's national ATP system [V-AR].
- **2020:** Google exits the Station Wi-Fi programme; RailTel continues it [K].
- **26-Feb-2021:** Listed on NSE/BSE after a GoI OFS IPO (₹94 per share [K]); GoI holds 72.84% [V].
- **Jun-2021:** Cabinet allots 5 MHz in the 700 MHz band to IR for LTE (>₹25,000 Cr plan) [V-snip].
- **2-Jun-2023:** Balasore (Odisha) triple-train collision [K] → political push for Kavach.
- **4-Aug-2023:** Cabinet approves **Amended BharatNet, ₹1,39,579 Cr** [V-AR; V PIB].
- **Dec-2023:** Telecommunications Act, 2023 enacted [K]. RoW Rules and Cyber-Security Rules follow in 2024 [V-AR].
- **FY24:** Order book ~₹4,750 Cr; orders won ₹2,870 Cr; LTE-R ground works for 523 RKM (Secunderabad); MoU with **Quadrant Future Tek** for Kavach; Gujarat Fibre Grid FTTH tie-up [V AR FY24].
- **Aug-2024:** **Navratna** status [V AR].
- **18-Nov-2024:** DIPAM revised capital-restructuring guidelines (30% PAT / 4% NW dividend floor) [V-snip].
- **1-Apr-2025:** National Broadband Mission 2.0 launched [V-AR].
- **May-2025:** HBL receives the first RDSO approval for Kavach v4.0 [V-snip].
- **13-Nov-2025:** DPDP Rules notified. **Nov-2025:** RailTel achieves CMMI Level-5 [V AR].
- **30-Dec-2025:** NFAP-2025 effective (LEO satellite bands) [V-AR].
- **31-Dec-2025:** Order book ₹8,563 Cr [V].
- **1-Feb-2026:** Union Budget FY27: Railways ₹2.93 lakh Cr; DoT ₹73,991 Cr; BharatNet ₹20,000 Cr; DC tax holiday to 2047; 7 HSR corridors [V-AR].
- **11-Mar-2026:** Kavach 4.0 at 1,452 RKM (Lok Sabha) [V-AR].
- **30-Apr-2026:** FY26 results: revenue ₹4,277 Cr, PAT ₹346 Cr; order book ₹11,466 Cr [V].
- **30-Jul-2026:** Q1 FY27: revenue ₹893 Cr (+20%), PAT ₹66 Cr (flat on ECL); order inflow ₹1,688 Cr; book ₹11,747 Cr [V].
- **31-Jul-2026:** Kavach 4.0 at 2,633 RKM; 21,794 RKM taken up [V].
- **7-Oct-2026:** RBI hikes repo to 5.50% [V-sib].
- **20-Oct-2026:** ₹47.4 Cr HARTRON LAN rate contract [V].
- **25-Oct-2026:** Board meeting for Q2 FY27 + interim dividend (record date 30-Oct) [V].
- **~May-2027:** Noida DC phase-1 (5 MW) target [V]. **Mar-2027:** Amended BharatNet completion target [V-AR].

---

## H. Figures I could not source well (and conflicts)

1. **Order book composition beyond the railway share.** No split by nomination vs competitive, by client type (state/central/PSU), by Kavach vs VSS vs DC, or by telecom vs project. Only "Railways ~21–23.5%" [V] is available. The ₹11,747 Cr "as on date" (31-Jul-2026) and the AR's ">₹10,400 Cr as on date" conflict; the AR's date is unclear.
2. **FY25 order inflow and the 31-Mar-2025 order book.** Not found in fetched material. The primer's "~₹8,550 Cr FY25" is actually the **31-Dec-2025** figure (₹8,563 Cr).
3. **RailTel's Kavach order values** (ECR, WCR, and a third order). Values not in the fetched sources. ">2,000 RKM" is from the AR [V]. Revenue recognition timing is "this year" (FY27).
4. **Exclusive RoW legal basis** (the MoR–RailTel agreement terms, tenure, and whether the RoW Rules 2024 affect railway corridors). Screener says "exclusive ROW"; not verified in a primary document.
5. **Who owns and monetises the new Kavach OFC (11,547 km) and towers (1,721).** Not found.
6. **S&T budget head FY27 (~₹7,500 Cr).** Single secondary source [V-snip]. Official Railway Demand for Grants (Plan Head 33, Signalling & Telecom) not fetched.
7. **Enterprise NLD/VPN market size and shares (TRAI AGR by service).** Not fetched; RailTel's NLD share is unknown.
8. **POWERTEL and GAILTEL revenues/networks for FY26.** Only V-snip/K (POWERTEL 60,946 km/688 PoPs older brochure; ~1,00,000 km newer claim; FY14 telecom income ₹288 Cr). GAILTEL ~13,000 km is [K].
9. **Airtel Business absolute revenue FY26/Q1 FY27.** Only growth (+12.0% Q1 FY27) [V-snip].
10. **Data-centre capacity in MW and utilisation.** "~3 MW" is the CMD's verbal figure [V]. DC revenue/MW (~₹67 Cr) implies that most DC revenue is managed services/cloud, not colocation. Segment disclosure is "planned".
11. **RailWire margin** and the partner revenue-share percentage. Not disclosed.
12. **Dividend per share FY21–FY25 in rupees.** Only payout % from screener (50/37/43/37/31) [V]. FY26 ₹3.25 [V]. FY25 ≈₹2.90 [E from 31% × ₹9.34].
13. **Collection account balance (₹299.5 Cr in cash, Mar-26).** Possibly includes pass-through collections (RailWire partners or customers) that are not free cash [V AR note; interpretation E]. Free cash may be lower than ₹777 Cr.
14. **Q2 FY27** (board 25-Oct-2026) not yet out.
15. **India government-ICT SI market size** (₹) and RailTel's share. No primary source fetched.
16. **Kavach unit costs.** Moradabad ₹170 Cr/712 RKM (V-snip; may be trackside-only or a sanction rather than award cost); ICF onboard ₹230.42 Cr/192 units (V-snip). Full-network TAM ₹15,000–40,000 Cr is a wide estimate [E].
17. **MPS deadline for GoI's 72.84%.** The SEBI 5-year MPS window for PSUs can be extended by government notification; RailTel's exemption status was not verified [K/FLAG].
18. **FY21/FY22 segment-total vs revenue mismatch** (₹1,377.8 vs ₹1,337.3 Cr; ₹1,548.5 vs ₹1,521.5 Cr). Older segment tables appear to include other operating income. Treat FY21–22 segment shares as ±2 pp.
19. **FY27 capex guidance conflict:** ₹241 Cr (AR chairman's speech) vs ~₹300 Cr (CMD, Q4 call). **FY27 growth guidance:** ~20% (Q4 call) vs "25%" (analyst restatement in the Q1 call, not contradicted).
20. **Screener P/E 19.8 vs computed 21.2×** (₹229 ÷ TTM EPS ₹10.78). Basis unclear.

---
# PART 2 — COMPANY FACT PACK (1 member)

## 2.0 Peer table (member only; reference peers in §3.1)

| Company | NSE | Year | Revenue ₹ Cr | Growth % | EBITDA (OP) ₹ Cr / margin % | PAT ₹ Cr | ROCE % | ROE % | Net debt (cash) ₹ Cr | M-cap ₹ Cr | P/E | P/B | EV/EBITDA | Telecom share | Order book ₹ Cr | Receivable days |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| RailTel Corporation of India | RAILTEL | FY26 (standalone) | 4,277 | +23.0 | 638 / 14.9 (screener); company 658 / 15.2 | 346 | 22.8 (TTM) | 17.1 (TTM) | **(714)** company-basis net cash [E: cash ₹397 Cr + bank ₹257 Cr + <12m deposits ₹123 Cr − lease liabilities ₹64 Cr]; screener shows borrowings ₹64 Cr, investments ₹0 | 7,349 | 21.2 TTM [E] (screener prints 19.8) | 3.25 | **10.4×** (EV ₹6,635 Cr ÷ OP ₹638 Cr) [E]; 11.6× on screener basis ignoring cash | 35.1% | 11,747 (31-Jul-26) | 175 |

## 2.1 RailTel Corporation of India Ltd (RAILTEL · 543265) — railway-RoW neutral carrier + government ICT integrator + small DC/cloud

### (a) Standardised financials [V screener standalone 23-Oct-26 unless noted]

| ₹ Cr | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 | TTM Jun-26 |
|---|---|---|---|---|---|---|---|
| Revenue | 1,337 | 1,522 | 1,957 | 2,568 | 3,478 | 4,277 | 4,427 |
| Operating profit (OP) | 328 | 368 | 379 | 464 | 535 | 638 | 652 |
| OPM | 24% | 24% | 19% | 18% | 15% | 15% | 15% |
| Other income | 28 | 76 | 35 | 28 | 52 | 26 | 17 |
| Depreciation | 159 | 160 | 154 | 158 | 180 | 189 | 196 |
| PBT | 195 | 280 | 254 | 328 | 402 | 470 | 470 |
| PAT | 140 | 208 | 188 | 246 | 300 | 346 | 346 |
| EPS (₹) | 4.37 | 6.49 | 5.87 | 7.67 | 9.34 | 10.79 | 10.78 |
| Dividend payout | 50% | 37% | 43% | 37% | 31% | 30% | — |
| CFO | 374 | 258 | 284 | 556 | 255 | 316 | — |
| FCF | 294 | 142 | 107 | 347 | −70 | 44 | — |
| Debtor days | 208 | 160 | 195 | 180 | 166 | 175 | — |
| ROCE | 14% | 16% | 16% | 20% | 22% | 23% | 22.8% |

NB: screener's "other income" for FY26 (₹26 Cr) is net of the ₹24.4 Cr ECL "exceptional". The company's gross other income is ₹47.86 Cr + ₹2.29 Cr finance income [V AR].

**Balance sheet (₹ Cr, 31-Mar-2026 vs 31-Mar-2025) [V AR, converted from ₹ lakh]**
- Equity ₹2,261.6 (₹1,999.6): share capital ₹320.94; other equity ₹1,940.67.
- PPE ₹1,005.7; CWIP ₹81.4; ROU ₹225.3; intangibles ₹49.6.
- Trade receivables ₹2,053.0 (₹1,581.4):
  - Telecom ₹1,287.2 (₹331.3).
  - Projects ₹765.7 (₹1,250.1).
  - Gross ₹2,195.5 less ECL allowance ₹142.6 (₹120.3).
- Unbilled revenue ₹898.3 (₹814.8).
- Cash & equivalents ₹397.5 (₹308.0), of which a "collection account" holds ₹299.5.
- Other bank balances ₹256.7 (₹218.3), incl. term deposits ₹243.0.
- Deposits with residual maturity <12m ₹123.2 (₹267.2). Mutual funds ₹0 (₹39.2).
- Trade payables ₹1,674.2 (₹1,429.8). Other current financial liabilities ₹864.7 (₹629.0).
- Lease liabilities ₹63.7 (₹44.5). **No borrowings** ("only telecom PSU which is 100% debt free" [V AR]).
- Total assets ₹5,830.0 (₹5,161.2).
- Current ratio 1.32; debtors turnover 1.86×; RONW 16.25% [V AR MD&A ratios].

**Segment P&L (₹ Cr) [V AR FY22/FY24/FY26 segment notes; Q1 FY27 results]**

| | FY23 | FY24 | FY25 | FY26 | Q1 FY26 | Q4 FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|---|
| Telecom revenue | 1,169.5 | 1,265.4 | 1,362.5 | 1,500.7 | 334.8 | 448.9 | 360.8 |
| Telecom result (EBIT) | 228.6 | 276.9 | 303.0 | 400.3 | 68.8 | 150.1 | 69.4 |
| Telecom EBIT % | 19.5 | 21.9 | 22.2 | 26.7 | 20.5 | 33.4 | 19.2 |
| Project revenue | 787.9 | 1,302.4 | 2,115.0 | 2,776.8 | 409.1 | 1,220.0 | 532.5 |
| Project result | 37.2 | 70.1 | 94.0 | 109.5 | 21.6 | 46.2 | 24.1 |
| Project EBIT % | 4.7 | 5.4 | 4.4 | 3.9 | 5.3 | 3.8 | 4.5 |

**Telecom revenue lines FY26 (FY25), ₹ Cr [V AR Note 28]:**
- NLD 639.8 (621.6).
- ISP 451.8 (437.0).
- Dark fibre 50.3 (45.2).
- Tower 59.0 (53.7).
- Data centre 202.3 (127.5).
- ICT others 88.7 (65.8).
- Other operating 8.8 (11.6).

**Project lines:** Railways 503.1 (508.1); Other 2,273.7 (1,606.9).

**Quarterly telecom detail [V transcripts]:**
- Q4 FY26: NLD 182, ISP 120, IP-1 30 ("pure telecom" 332) + DC/digital 117 = 449.
- Q1 FY27: NLD 144 (vs 151), ISP 112, IP-1 27 (=283) + DC/ICT/other ≈78 [E] = 361.

**Q1 FY27 (Apr–Jun 2026) [V results PDF; V transcript]**
- Revenue ₹893.3 Cr (+20.1%); total income ₹909.6 Cr.
- Access charges ₹159.1 Cr; DoT licence fee ₹21.7 Cr; project expenses ₹508.4 Cr; employees ₹60.2 Cr; other ₹12.3 Cr.
- EBITDA ≈₹131.6 Cr (14.7%) [E]; screener OP ₹132 Cr (15%).
- D&A ₹50.4 Cr.
- PBT pre-exceptional ₹96.5 Cr (+12%); ECL ₹7.0 Cr; PBT ₹89.4 Cr; PAT ₹65.8 Cr (−0.5%); EPS ₹2.05.
- Order inflow ₹1,688 Cr (vs ₹721 Cr).
- RailWire 6.23 lakh.

**Valuation (23-Oct-2026) [V screener; E]**
- Price ₹229 (52-week ₹226–391; −38% 1-yr).
- M-cap ₹7,349 Cr; book value/share ₹70.5 (P/B 3.25); P/E 21.2× TTM (screener 19.8).
- Dividend yield 1.42% (₹3.25).
- EV ≈ ₹6,635 Cr (company net cash ₹714 Cr); EV/EBITDA ≈10.1–10.4× FY26; EV/Sales 1.55×.
- FY27E P/E ~17× on the illustrative ₹423 Cr PAT (§C) [E].

### (b) Native KPIs [V unless noted]
- **Network:** OFC 63,000+ RKM; city access 21,000+ km; 7,000+ stations; Wi-Fi at 6,117+ stations; VSS at 5,000+ stations (being implemented); HMIS at 709 railway hospitals; e-Office at 150+ organisations (+~45 in progress).
- **RailWire:**
  - 6.15 lakh subs (FY26), +36,000 in the year; 6.23 lakh (Jul-26).
  - 11,500+ partners; ARPU ~₹474; revenue ~₹350 Cr (FY24 ₹344 Cr).
  - IPTV 7,000+ subs.
- **Data centres:** ~3 MW operational; Tier-III Secunderabad and Gurugram; edge DCs Gurugram and Mumbai; Noida 10 MW (phase-1 5 MW by ~May-2027).
  - DC revenue ₹202 Cr FY26 (+59%), guided ~₹300 Cr FY27 and ~₹500 Cr FY28.
  - Partner shells: Anant Raj, Adani.
- **Order book:** ₹11,747 Cr (31-Jul-26); railway share 23.5%. FY26 inflow ₹7,363 Cr; Q1 FY27 inflow ₹1,688 Cr.
- **Kavach:** ECR and WCR orders (>2,000 RKM), "3 orders" per the Q4 call. OEM partner Quadrant Future Tek, whose RDSO approval was pending in Jul-2026. Gestation 30–35 months; revenue to start in FY27.
- **Levies:** DoT LF ₹91.60 Cr; IR revenue share ₹46.03 Cr.
- **People:** 928 employees; CMMI-5; ISO stack.
- **International:** Ethiopia DC (~₹18 Cr), Trinidad laptops, BHISHM cubes, Jamaica scoreboard; pursuing Uzbekistan and Vietnam; lost in Sri Lanka.

### (c) Ownership [V screener, Sep-2026]
- President of India (through MoR) **72.84%** (unchanged since listing).
- FIIs 3.97% (up from 1.45% in Dec-23). DIIs 1.03% (down from 3.39% in Dec-23; 5.24% in Mar-21).
- Public 22.15%; **4,79,679 shareholders** (peak 5,40,217 in Mar-25).
- **Retail-heavy register with almost no institutional ownership** (FII + DII ≈ 5%) → high volatility and PSU-factor trading [E].

### (d) Management [V transcripts/AR]
- CMD **Sanjai Kumar**.
- Director Finance **V. Rama Manohara Rao**.
- Director Projects, Operations & Maintenance **Manoj Tandon**.
- Director Network Planning & Marketing **Yashpal Singh Tomar** (retiring by rotation at the 2026 AGM, eligible for reappointment).
- Special ED Finance H.C. Batra.
- CS Jasmeet Singh Marwah.
- Statutory auditor M/s Lunawat & Co. (Q1 FY27 limited review).

### (e) Story bullets
1. **A depreciated, irreplaceable corridor earning ~39% EBITDA, attached to a 4%-margin integrator that is three-quarters of revenue growth.**
   - Telecom produced ~84% of FY26 segment EBITDA on 35% of revenue.
   - The thesis turns on whether DC/ICT and fibre leasing can lift the telecom share back above 40%. Q1 FY27 was 40% only because Q1 has little project revenue.
2. **Backlog is plentiful (₹11.7k Cr, 2.65× revenue) but it is government backlog.**
   - 175 receivable days; telecom receivables ×4 in FY26; ECL every quarter; FCF ~zero over FY25–26.
   - The dividend sits at the DIPAM floor.
3. **Kavach is the railway kicker, but RailTel is an integrator waiting for its OEM's RDSO approval**, with no new tenders expected near term. The OEMs (HBL, Kernex) capture the 30%+ margins.
4. **The stock has de-rated 38% in a year to ~21× TTM / ~10× EV/EBITDA**, in line with railway PSUs and well below listed telecom/fibre names (Tata Comm 39×; HFCL 42×; STL 57×). The market has stopped paying for the corridor option until there is evidence such as a fibre-partner deal, DC MW online, or the telecom share rising.

### (f) Sources
- Screener standalone: https://www.screener.in/company/RAILTEL/ (and the frozen consolidated page /consolidated/).
- FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/7044d17d-6a4f-4276-bb80-83225794f6b4.pdf
- FY24 AR: …/f20bd010-c2af-48bc-a8bc-d357ba00c54d.pdf
- FY22 AR: https://www.bseindia.com/bseplus/AnnualReport/543265/77033543265.pdf
- Q1 FY27 results: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=43157a26-ff4a-472e-b38e-6b4219a706d9.pdf
- Q1 FY27 transcript: …Pname=4a950357-6496-4d13-beaf-b12132b8a460.pdf
- Q4 FY26 transcript: …Pname=5d0658d1-f60c-441b-8e1a-efd416679fb5.pdf
- Board meeting letter: …Pname=8b99bb88-8cad-4f99-a52a-42a75ecfbd4a.pdf
- HARTRON LoA: …Pname=01849da4-2ab5-44f2-a3e8-b5a1ca693004.pdf

## 2.2 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
{
  "as_of": "2026-10-23",
  "company": "RailTel Corporation of India Ltd",
  "nse": "RAILTEL", "bse": "543265", "basis": "standalone (no subsidiaries; screener consolidated page stale)",
  "still_listed": true, "corporate_action": null,
  "next_event": {"q2_fy27_board": "2026-10-25", "interim_dividend_record_date": "2026-10-30"},
  "fy26": {"revenue": 4277.48, "revenue_prior": 3477.50, "growth_pct": 23.0, "total_income": 4327.63,
           "ebitda_screener": 638, "ebitda_company": 658, "ebitda_margin_pct_company": 15.22,
           "pbt": 469.58, "pat": 346.32, "eps": 10.79, "dps": 3.25, "payout_pct": 30.1,
           "ecl_exceptional": 24.36, "dot_licence_fee": 91.60, "ir_revenue_share": 46.03,
           "capex": 272, "cfo": 316, "fcf": 44},
  "segments_fy26": {"telecom_rev": 1500.69, "telecom_ebit": 400.25, "telecom_ebitda_est": 589,
                    "project_rev": 2776.79, "project_ebit": 109.47,
                    "telecom_share_pct": 35.1, "railway_project_rev": 503.09, "other_project_rev": 2273.70},
  "telecom_lines_fy26": {"nld": 639.79, "isp": 451.84, "dark_fibre": 50.29, "tower": 58.99,
                         "data_centre": 202.29, "ict_other": 88.69, "other_operating": 8.80},
  "q1_fy27": {"revenue": 893.27, "growth_pct": 20.1, "telecom_rev": 360.81, "telecom_ebit": 69.36,
              "project_rev": 532.46, "project_ebit": 24.10, "ebitda_est": 131.6, "pat": 65.78,
              "ecl": 7.04, "order_inflow": 1688},
  "order_book": {"2024_mid": 4750, "2025_12_31": 8563, "2026_04_30": 11466, "2026_07_31": 11747,
                 "railway_share_pct": 23.5, "fy26_inflow": 7363},
  "balance_sheet_mar26": {"net_worth": 2261.61, "borrowings": 0, "lease_liabilities": 63.72,
                          "cash_and_bank_and_st_deposits": 777.3, "net_cash_company_basis": 714,
                          "trade_receivables": 2052.95, "telecom_receivables": 1287.24,
                          "project_receivables": 765.71, "unbilled_revenue": 898.33,
                          "ecl_allowance": 142.56, "trade_payables": 1674.17,
                          "receivable_days": 175, "mou_receivable_days_target": 90},
  "returns": {"roce_pct_ttm": 22.8, "roe_pct_ttm": 17.1, "ronw_pct_fy26_company": 16.25},
  "valuation_2026_10_23": {"price": 229, "mcap": 7349, "pe_ttm_calc": 21.2, "pe_screener": 19.8,
                           "pb": 3.25, "div_yield_pct": 1.42, "ev": 6635, "ev_ebitda_fy26": 10.4,
                           "high_52w": 391, "low_52w": 226, "return_1y_pct": -38},
  "shareholding_sep26": {"promoter_goi": 72.84, "fii": 3.97, "dii": 1.03, "public": 22.15, "shareholders": 479679},
  "native_kpis": {"ofc_rkm": 63000, "city_access_km": 21000, "stations_covered": 7000,
                  "wifi_stations": 6117, "railwire_subs_lakh": 6.23, "railwire_arpu_rs": 474,
                  "railwire_partners": 11500, "railwire_revenue_fy26": 350, "dc_mw_operational": 3,
                  "dc_revenue_fy27_guide": 300, "dc_revenue_fy28_guide": 500, "employees": 928,
                  "fy27_capex_guide": [241, 300], "fy27_growth_guide_pct": 20,
                  "fy27_project_revenue_guide": [3000, 3500]}
}
```

## 2.3 Conflicts and gaps (company level)
- **Order book "as on date" ₹11,747 Cr (Q1 call, 31-Jul-26) vs AR ">₹10,400 Cr as on date".** Use ₹11,747 Cr with its date.
- **FY27 capex ₹241 Cr (AR) vs ₹300 Cr (Q4 call).** Report both.
- **FY27 growth guidance:** ~20% (Q4 call) vs "25%" (analyst in the Q1 call; not contradicted).
- **EBITDA:** company ₹658 Cr vs screener ₹638 Cr vs AR-line arithmetic ₹636 Cr.
- **P/E:** screener 19.8 vs computed 21.2.
- **Consolidated screener page is stale** (to Sep-2023). Do not use it.
- **Net cash:** screener shows no investments/cash. The company-basis figure is ~₹714 Cr, but ~₹300 Cr sits in a "collection account" that may be pass-through. **Prefer "~₹650–780 Cr cash and deposits, no debt"** in prose.
- Telecom receivables jumped 3.9× in FY26 (railway VSS billing "revisions and estimates"; CMD calls it one-off). Watch whether it unwinds in the H1 FY27 balance sheet (Q2 results).

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid: RailTel and REFERENCE peers (FY26; ₹ Cr; screener 23-Oct-26; RailTel standalone, peers consolidated)

All on one basis: screener FY26 sales, operating profit (OP), net profit; m-cap and ratios as of 23-Oct-2026. **EV/EBITDA = (m-cap + borrowings − investments) ÷ FY26 OP**. Screener does not show cash, so this is a **gross-of-cash proxy** for every company. RailTel's company net-cash figure is shown separately. Ratios are ratios (×, %).

| Company | Role vs RailTel | FY26 rev | YoY % | OP | OPM % | PAT | Latest qtr (rev / OPM / PAT) | M-cap | P/E | P/B | EV/EBITDA (proxy) | ROCE % | ROE % | Debtor days FY26 | Promoter % |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **RailTel** (member) | — | 4,277 | +23.0 | 638 | 14.9 | 346 | Jun-26: 893 / 15% / 66 | 7,349 | 21.2 (scr. 19.8) | 3.25 | 11.6 (10.4 net of cash) | 22.8 | 17.1 | 175 | 72.84 |
| Tata Communications | Enterprise/NLD rival | 24,803 | +7.3 | 4,822 | 19.4 | 997 | Sep-26: 6,688 / 21% / 336 | 47,165 | 39.0 | 13.9 | 11.8 | 14.6 | 32.6 | 61 | 58.85 |
| Bharti Airtel | Airtel Business, Nxtra | 210,973 | +22.0 | 116,514 | 55.2 | 33,823 | Jun-26: 58,539 / 57% / 10,012 | 11,80,976 | 37.8 | 7.7 | 11.7 | 17.6 | 20.3 | 14 | 50.07 |
| HFCL | Fibre/telecom equipment + EPC | 4,949 | +21.7 | 764 | 15.4 | 329 | Sep-26: 2,542 / 25% / 394 | 36,745 | 42.4 | 6.5 | 50.4 (24.3 TTM) | 10.8 | 7.0 | 163 | 28.29 |
| Sterlite Technologies | OFC/cable + services | 4,745 | +18.7 | 569 | 12.0 | 56 | Sep-26: 2,529 / 32% / 517 | 42,495 | 56.7 | 9.4 | 77 (29 TTM) | 7.7 | 1.2 | 82 | 42.29 |
| Tejas Networks | Telecom equipment (BSNL 4G) | 1,103 | −87.6 | −682 | −61.8 | −909 | Sep-26: 406 / −26% / −207 | 7,256 | n.m. | 2.9 | n.m. | −14.6 | −26.8 | 1,077 | 53.28 |
| ITI Ltd | Telecom PSU / govt SI | 2,184 | −39.6 | 64 | 2.9 | 293 | Jun-26: 425 / 0.4% / −32 | 20,745 | n.m. (scr. blank) | 10.9 | n.m. | 2.1 | −8.9 | 486 | 90.02 |
| IRCON | Railway EPC PSU | 9,071 | −15.7 | 768 | 8.5 | 592 | Jun-26: 1,956 / 10% / 92 | 9,181 | 17.5 | 1.38 | 17.5 | 9.3 | 8.2 | 56 | 65.17 |
| RVNL | Railway EPC PSU | 20,412 | +2.5 | 767 | 3.8 | 871 | Jun-26: 4,321 / 4.3% / 160 | 37,804 | 42.0 | 3.8 | 52 | 10.8 | 9.0 | 96 | 72.84 |
| IRCTC | Railway services PSU | 5,215 | +11.6 | 1,666 | 31.9 | 1,393 | Jun-26: 1,370 / 28% / 330 | 35,312 | 25.6 | 8.2 | 21.2 | 46.1 | 34.4 | 132 | 62.40 |
| RITES | Railway consultancy PSU | 2,415 | +10.0 | 583 | 24.1 | 454 | Jun-26: 532 / 22% / 98 | 9,103 | 21.8 | 3.4 | 15.4 | 23.0 | 15.4 | 141 | 72.20 |
| HBL Engineering | Kavach OEM | 3,303 | +67.9 | 1,113 | 33.7 | 814 | Jun-26: 638 / 23% / 109 | 21,340 | 26.6 | 9.6 | 18.9 | 59.3 | 45.3 | 71 | 59.11 |
| Kernex Microsystems | Kavach OEM | 430 | +126 | 149 | 34.7 | 88 | Jun-26: 504 / 32% / 110 | 2,667 | 14.0 | 10.7 | 19.0 (9.5 TTM) | 47.8 | 43.5 | 268 | 28.73 |

Notes:
- **Unlisted reference players:** Medha Servo Drives (Kavach OEM; financials not fetched), POWERTEL (inside POWERGRID; telecom revenue not disclosed in fetched material), GAILTEL (inside GAIL), BSNL (FY27 capital infusion ~₹28,473 Cr [V-AR]), Quadrant Future Tek (listed; order book ₹897.9 Cr Feb-2026 [V-snip]; not fetched on screener).
- **Global:** CRSC 2025 revenue ~RMB 34.6–34.7 bn, net profit ~RMB 4.25 bn [V-snip].
- **Tejas FY25 → FY26** is the BSNL 4G order cliff (₹8,923 → ₹1,103 Cr) [V screener]. It shows the boom-bust risk of a single government telecom programme.
- **HFCL/STL Sep-26 quarters:** revenue more than doubled YoY with OPM 25–32% [V screener]. A fibre up-cycle is visible in equipment, not yet in RailTel's NLD.

**Basket ratios (simple medians) [E]**
- Railway PSUs (IRCON, RVNL, IRCTC, RITES): **P/E 23.7×**, OPM 16.3%.
- Telecom/fibre (Tata Comm, Bharti, HFCL, STL): **P/E 40.7×**.
- Kavach OEMs (HBL, Kernex): P/E 20.3×, OPM ~34%.
- **RailTel at 21.2× trades with railway PSUs, not with telecom.**

## 3.2 Aggregates (single member)
- Sub-sector = RailTel: FY26 revenue ₹4,277 Cr, OP ₹638 Cr (14.9%), PAT ₹346 Cr, m-cap ₹7,349 Cr (23-Oct-26), m-cap/PAT 21.2× [V; E].
- Share of the reference set: RailTel is **0.5% of the 13-company m-cap** (₹14,58,138 Cr incl. Bharti) and **2.7% ex-Bharti** (₹2,77,162 Cr) [E].
- **Q1 FY27 vs Q1 FY26:** revenue +20.1%; OP +13.8% (₹132 vs ₹116 Cr); PAT −0.5% [V screener].

## 3.3 Reconciliation vs primer (`primers/railtel.html`, refreshed 21-Jul-2026)

| Item | Primer | Fetched (Oct-2026) | Use |
|---|---|---|---|
| FY26 "turnover" | ₹4,328 Cr (+22%) | Total income ₹4,327.6 Cr; **revenue from ops ₹4,277.5 Cr (+23.0%)** | Use ₹4,277 Cr for margins; say "total income ₹4,328 Cr" if quoting the headline |
| FY26 PAT | ₹346 Cr (+16%) | ₹346.32 Cr (+15.5%) | Same |
| FY25 turnover / PAT | ~₹3,550 / ~₹298 Cr (approx.) | Total income ₹3,551 Cr; revenue ₹3,477.5 Cr; **PAT ₹299.8 Cr** | AR |
| FY26 EBITDA | ~₹620–650 Cr "derived" | **Company ₹658 Cr (15.22%)**; screener OP ₹638 Cr | AR / screener |
| Q1/Q2 FY26 revenue | "~₹840 / ~₹850 Cr (approx., derived)" | **₹744 / ₹951 Cr** | Screener (primer wrong) |
| Q3 FY26 | ₹913.5 Cr; EBITDA ₹133 Cr; 14.6% | ₹913 Cr; OP ₹133 Cr; 15% | Same |
| Q4 FY26 split | ₹449 telecom / ₹1,220 projects | Same; segment EBIT 33.4% / 3.8% | Same + add margins |
| Full-year segment split | Not given ("derived") | **Telecom ₹1,500.7 Cr (35.1%) / Projects ₹2,776.8 Cr**; EBIT ₹400.3 / ₹109.5 Cr | AR |
| Order book | ₹11,466 Cr (30-Apr-26); "FY25 ~₹8,550 Cr" | ₹11,466 Cr ✓; **₹8,563 Cr is 31-Dec-2025, not FY25**; **₹11,747 Cr at 31-Jul-26** | Fix label; update |
| Order inflow | Not given | FY26 ₹7,363 Cr; Q1 FY27 ₹1,688 Cr | AR / transcript |
| Data-centre revenue | ₹202 Cr vs ₹127 Cr | ₹202.29 vs ₹127.49 Cr ✓; guidance ₹300 Cr FY27, ₹500 Cr FY28 | Add guidance |
| DC footprint | "two Tier-III DCs (Secunderabad, Gurugram)" | Plus edge DCs Gurugram and Mumbai; ~3 MW; Noida 10 MW (5 MW by ~May-27); leased partner capacity | Update |
| FY27 capex | ₹300 Cr | ₹300 Cr (Q4 call) vs **₹241 Cr (AR)** | Show both |
| FY27 growth | ~20% | ~20% (Q4 call); "25%" (Q1 analyst restatement) | ~20% |
| RailWire subs | ~5.8 lakh | **6.15 lakh (FY26); 6.23 lakh (Jul-26)**; ARPU ₹474; revenue ~₹350 Cr | Update |
| Stations | ~6,000 | 7,000+ covered; Wi-Fi at 6,117+ | Update |
| OFC | Not stated (corridor "~68,000 RKM" of track) | **63,000+ RKM OFC**; 21,000+ km city access | Add |
| Promoter | ~72.8% | 72.84% ✓ | Same |
| ROCE | ">22%" | 22.8% (screener TTM) ✓ | Same |
| Net cash | "net cash; verify" | ~₹714 Cr company basis (cash ₹397 + bank ₹257 + deposits ₹123 − leases ₹64); no borrowings | AR |
| Dividend | ₹2 interim + ₹1.25 final = ₹3.25 | ✓ (₹104.30 Cr; 30.1% payout — the DIPAM floor) | Add the floor context |
| Price / m-cap / P/E | ~₹305 / ~₹9,600 Cr / ~27× (Jul-26) | **₹229 / ₹7,349 Cr / 21.2× TTM** (23-Oct-26; −38% 1-yr; 52-week ₹226–391) | Screener |
| 52-week range | ₹245–436.50 | ₹226–391 | Screener |
| Navratna | 2024 | Aug-2024 ✓ | Same |
| Q1 FY27 | Not covered | Revenue ₹893 Cr (+20%), telecom ₹361 / projects ₹532 Cr, PAT ₹66 Cr (flat on ₹7 Cr ECL), orders ₹1,688 Cr | Add |
| Kavach | Generic tailwind | ECR + WCR orders >2,000 RKM with Quadrant (RDSO approval pending); revenue from FY27; national 2,633 RKM commissioned | Add |

## 3.4 Primer issues (format as primer-issues.md)

### From Other Telecom Services research (2026-10-23, other-telecom-industry.md §3.4)

- **railtel.html — Q1/Q2 FY26 quarterly bars are wrong.** The "March bulge" chart shows "Q1 FY26 approx. ~₹840" and "Q2 FY26 approx. ~₹850". Actuals are **₹744 Cr (Q1) and ₹951 Cr (Q2)** [screener standalone; FY26 total ₹4,277 Cr = 744 + 951 + 913 + 1,669]. Replace the approximations with actuals. (§05)
- **railtel.html — FY25 order book mislabelled.** The FY26-at-a-glance table puts "~₹8,550 Cr" in the FY25 column. ₹8,563 Cr is the **31-Dec-2025** order book (Q4 FY26 call); the 31-Mar-2025 figure is not disclosed in the sources fetched. Relabel as "Dec-2025". (§10)
- **railtel.html — FY26 EBITDA and segment split shown as "derived/approx." although the AR now gives them.**
  - Company EBITDA **₹658 Cr (15.22%)**.
  - Telecom segment ₹1,500.69 Cr / Projects ₹2,776.79 Cr.
  - Segment EBIT ₹400.25 Cr (26.7%) / ₹109.47 Cr (3.9%).
  - FY25 PAT ₹299.81 Cr (not ~₹298).
  - Remove the "approx." caveats. (§10 table and the disclaimer)
- **railtel.html — the "captive/nomination" framing overstates railway dependence.**
  - The primer says railway projects are "handed to RailTel not through open competition" and that a large share of fortunes is "tied… to one customer's annual budget".
  - FY26 **Railways project revenue was only ₹503 Cr of ₹2,777 Cr (18%)**; railways are **21–23.5% of the order book**; the FY24 AR says orders are won "mostly through open tendering".
  - The growth engine is **non-railway state/central government ICT** (₹2,274 Cr, +41.5%). Reframe §02/§05/§08. (AR Note 28; Q4/Q1 transcripts)
- **railtel.html — "three of every four rupees" is a Q4 statistic.** Q4 FY26 was 73% projects, but **FY26 full year was 65% projects / 35% telecom**, and Q1 FY27 was 60/40. Say "about two-thirds" for the year. (§00, §04, §11)
- **railtel.html — telecom margin missing.** The primer never quantifies the telecom segment margin. Add **telecom EBIT 26.7% (~39% EBITDA incl. D&A; CMD "35–40%")** vs **projects 3.9%**. Telecom is **~84% of segment EBITDA**. This is the strongest single number for the "landlord vs contractor" thesis. (§04, §10)
- **railtel.html — the right-of-way is described as un-bought but it is not free.** RailTel pays Indian Railways a **7% revenue share on services (₹46.03 Cr FY26; ₹521 Cr cumulative)** and DoT an **8% licence fee (₹91.60 Cr; ₹846 Cr cumulative)**. Add to §02/§08. (AR Board's report §6)
- **railtel.html — receivables/working capital not quantified.**
  - Trade receivables ₹2,053 Cr = **175 days vs a MoU target of 90**; unbilled ₹898 Cr; ECL allowance ₹142.6 Cr.
  - **Telecom receivables rose from ₹331 Cr to ₹1,287 Cr** in FY26.
  - CFO ₹316 Cr; **FCF ₹44 Cr (FY26), −₹70 Cr (FY25)**.
  - The "cash-generative" label in §10/§11 needs qualifying.
  - The recurring "exceptional" item is ECL (₹24.4 Cr FY26; ₹7.0 Cr Q1 FY27).
- **railtel.html — valuation stale.** ₹305 / ~₹9,600 Cr / ~27× (Jul-26) → **₹229 / ₹7,349 Cr / ~21× TTM** (23-Oct-2026); 52-week range ₹226–391 (not ₹245–436.50); 1-yr −38% (not −25%). The "What ~27× is actually pricing" box needs rewriting. (§10)
- **railtel.html — network facts missing or dated.**
  - Add **OFC 63,000+ RKM** and **21,000+ km city access**.
  - **Stations "7,000+ covered" and Wi-Fi at "6,117+"** (not "~6,000").
  - **RailWire 6.15 lakh (FY26) / 6.23 lakh (Jul-26), ARPU ₹474, ~₹350 Cr revenue, 11,500 partners** (primer: "~5.8 lakh").
  - IPTV 7,000+; VSS at 5,000+ stations; HMIS at 709 hospitals. (§06, §01)
- **railtel.html — data-centre section dated.**
  - Add the edge DCs (Gurugram, Mumbai) and **~3 MW operational**.
  - **Noida 10 MW (5 MW phase-1 by ~May-2027)**; leased partner shells (Anant Raj, Adani).
  - **DC revenue guidance ₹300 Cr FY27 / ₹500 Cr FY28**.
  - The ED Finance says DC margins are currently higher than pure-telecom margins. (§07)
- **railtel.html — FY27 capex conflict.** The primer says ₹300 Cr (Q4 call). The FY26 AR chairman's speech says **₹241 Cr**. Show both. (§00, §10)
- **railtel.html — Kavach under-specified.**
  - RailTel holds **Kavach orders in ECR and WCR (>2,000 RKM)** via its OEM partner **Quadrant Future Tek**, whose RDSO approval was pending in Jul-2026.
  - Kavach is a 30–35-month gestation; revenue starts in FY27; the margin is only "slightly better" than 4–5%.
  - No new Kavach tenders are expected near term (CMD).
  - National status: **2,633 RKM commissioned, 21,794 RKM taken up** (Jul-2026). (§11)
- **railtel.html — Q1 FY27 omitted.** Revenue ₹893 Cr (+20%); telecom ₹361 / projects ₹532 Cr; PBT pre-exceptional +12% but **PAT flat (₹65.8 Cr) on ₹7.0 Cr ECL**; orders ₹1,688 Cr (vs ₹721 Cr); book ₹11,747 Cr; NLD ₹144 Cr (−4.6%) on delayed government renewals; Starlink and the Air Force are new NLD customers. Q2 FY27 board is on 25-Oct-2026 (record date 30-Oct for the interim dividend).
- **railtel.html — BharatNet role.** The primer lists "rural connectivity work of the BharatNet type" as project work. RailTel's current BharatNet role is **Independent Engineer for BSNL's Phase-3 Package 4** (monitoring/certification fees), not construction. Its BharatNet Phase I role was historical. (AR MD&A §5.2 ix)
- **railtel.html — dividend context.** ₹3.25/share = **30.1% payout, exactly at the DIPAM floor** (higher of 30% PAT or 4% net worth; OM 18-Nov-2024). It is not discretionary "high dividend discipline". Payout fell from 50% (FY21) to 30% (FY26).
- **railtel.html — competitor table.** Add **POWERTEL (OPGW on POWERGRID towers) and GAILTEL** as the two same-model PSU carriers. Add **Kavach OEMs (HBL, Kernex, Medha, Siemens, Kyosan, Quadrant)**, which capture the 30–35% equipment margins while RailTel integrates. "Power Grid's telecom arm" is named in passing but not as the closest analogue.
- **railtel.html — screener consolidated trap.** If the primer refresh pulls screener "consolidated", it will get stale Sep-2023 data (P/E 39, ROCE 16%). Always use the standalone page.

## 3.5 Key source URLs
- **Screener (23-Oct-2026):**
  - https://www.screener.in/company/RAILTEL/ (standalone)
  - Peers: /company/TATACOMM/consolidated/ · /BHARTIARTL/ · /HFCL/ · /STLTECH/ · /TEJASNET/ · /ITI/ · /IRCON/ · /RVNL/ · /IRCTC/ · /RITES/ · /HBLENGINE/ · /KERNEX/
- **RailTel filings (BSE):**
  - FY26 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/7044d17d-6a4f-4276-bb80-83225794f6b4.pdf
  - FY24 AR: https://www.bseindia.com/xml-data/corpfiling/AttachHis/f20bd010-c2af-48bc-a8bc-d357ba00c54d.pdf
  - FY22 AR: https://www.bseindia.com/bseplus/AnnualReport/543265/77033543265.pdf
  - Q1 FY27 results: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=43157a26-ff4a-472e-b38e-6b4219a706d9.pdf
  - Q1 FY27 call transcript (31-Jul-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4a950357-6496-4d13-beaf-b12132b8a460.pdf
  - Q4 FY26 call transcript (1-May-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5d0658d1-f60c-441b-8e1a-efd416679fb5.pdf
  - Board meeting 25-Oct-2026: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8b99bb88-8cad-4f99-a52a-42a75ecfbd4a.pdf
  - HARTRON LoA: https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=01849da4-2ab5-44f2-a3e8-b5a1ca693004.pdf
- **Railways / Kavach:**
  - https://indianinfrastructure.com/2026/08/07/kavach-4-0-commissioned-on-2633-rkm-of-delhi-mumbai-and-delhi-howrah-routes-till-july-31-2026/ [V]
  - https://www.nbmcw.com/news/metro-railways/indian-railways-spends-rs-1-15-lakh-crore-in-fy27-till-july-kavach-covers-2-633-route-km.html [V]
  - V-snip:
    - https://www.newsonair.gov.in/indian-railways-speeds-up-kavach-4-0-safety-rollout-with-472-km-commissioned-across-three-sections
    - https://www.businesstoday.in/latest/trends/photo/indian-railways-approves-rs170-crore-for-kavach-4-0-across-712-route-km-in-moradabad-division-552948-2026-09-02
    - https://www.business-standard.com/markets/news/hbl-engineering-shares-surge-8-on-rdso-nod-for-kavach-system-version-4-0-125051400387_1.html
    - https://nsearchives.nseindia.com/corporate/QUADRANT_12032026174527_QFTL_-_Kavach_Disclosure_Signed.pdf
    - https://www.bajajbroking.in/share-market-news/quadrant-future-tek-wins-rs230-cr-kavach-4-0-contract-from-icf
    - https://www.sahi.com/news/kernex-microsystems-completes-kavach-4-0-launch-on-207-km-high-speed-north-central-railway-section-3112-PE1_COR
    - https://deshgujarat.com/2026/06/30/indian-railways-commissions-kavach-system-on-434-km-viramgam-rajkot-okha-route/
- **BharatNet:** https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/apr/doc2025421542701.pdf [V]; https://usof.gov.in/en/amended-bharatnet-program (503 on fetch; V-snip)
- **TRAI subscriber summaries (V-snip):**
  - https://www.fonearena.com/blog/488465/indias-telecom-subscriber-base-june-2026.html
  - https://telecomlead.com/?p=126427
- **Data centres (V-snip):**
  - https://indianinfrastructure.com/2026/07/22/indias-data-centre-capacity-additions-grow-59-per-cent-in-h1-2026-says-industry-report/
  - https://www.constructionworld.in/latest-construction-technology/india---s-data-centre-capacity-reaches-1-789-mw-in-h1-2026/97528
  - https://digitalterminal.in/trending/indias-data-centre-capacity-on-track-to-reach-2-gw-by-end-2026-cbre
  - https://www.icra.in/Research/ViewResearchReport/india-s-digital-backbone-to-strengthen-with-rs-90-000-crore-data-centre-impetus-during-fy2026-fy2028/6543
- **POWERTEL (V-snip):** https://www.powergrid.in/sites/default/files/pr_kit_document/Powertel_Brochure.pdf
- **Railway spectrum (V-snip):**
  - https://www.voicendata.com/center-approves-5-mhz-spectrum-allocation-700-mhz-indian-railways
  - https://tele.net.in/safety-measures-trais-recommendations-on-additional-spectrum-allotment-to-indian-railways/
- **DIPAM dividend (V-snip):**
  - https://www.drishtiias.com/daily-updates/daily-news-analysis/revised-dividend-guidelines-for-cpses/print_manually
  - https://www.theweek.in/wire-updates/business/2024/11/18/dcm97-biz-cpse-restucturing.html
- **Airtel Q1 FY27 (V-snip):** https://www.angelone.in/news/stocks/bharti-airtel-q1fy27-earnings-results-revenue-rise-18-4-yoy-to-58-539-crore
- **Global:**
  - CRSC (V-snip): https://www.itiger.com/news/1163675267
  - Network Rail Project Reach (V-snip): https://www.ispreview.co.uk/index.php/2025/06/project-reach-launched-to-fix-mobile-signal-notspots-on-uk-rail-network.html · https://www.find-tender.service.gov.uk/Notice/029322-2025
- **Macro:** ICRA research headlines page (fetched 23-Oct-2026): WPI 11.4% Sep-2026; GDP moderation Q2 FY27.
