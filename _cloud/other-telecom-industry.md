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

---
---

# PART 4 — Deep-research supplement (2026-10-23)

Second, primary-source pass, run on 23-Oct-2026 (UTC). Q1 FY27 is still the latest reported quarter: the Q2 FY27 board meeting is on 25-Oct-2026 and its results are not out.

**What this pass did**
- **Re-read in full (scanned images, page by page):**
  - The Q1 FY27 call transcript (31-Jul-2026, 10 pp).
  - The Q4 FY26 call transcript (1-May-2026, 12 pp).
- **Mined the RailTel annual reports already downloaded this session:**
  - FY26 AR, notes 12, 31, 32, 48, 50, 51, 54, 55, 56.12, the 10-year table and MD&A §10–11.
  - FY24 AR (REL amalgamation, dividend table).
  - FY22 AR (standalone vs consolidated segment note, IPO note, revenue share, RoW wording).
- **Fetched new primary documents:**
  - Union Budget 2026-27 *Expenditure Profile*: Railway Budget at a Glance, Statements II and IV.
  - Union Budget *Notes on Demands for Grants 2026-27*, Demand No. 13 (DoT).
  - ICRA rating rationales for RailTel (17-Feb-2026 and 18-Feb-2025).
  - ICRA data-centre research note (25-Sep-2025).
  - RailTel's BSE Navratna filing (30-Aug-2024).
  - NBM&CW page on RailTel's WCR Kavach award.
  - IANS copy of the 5-Aug-2026 Lok Sabha reply on railway capex and Kavach.
  - A copy of TRAI's Jan–Mar 2026 Performance Indicator press release.
- **Searched** for the remaining gaps: Kavach orders and unit costs, OEMs, MPS, DIPAM, POWERTEL/GAILTEL, Airtel Business, RailWire, tower policy, RBI.
- **Approximate call count:**
  - About 50 web calls (searches and fetches).
  - About 30 local document reads (transcript page images, AR text slices).
  - 10 curl downloads of government, ICRA and BSE PDFs.
- **Scratch notes:** `/tmp/other-telecom-deep/notes.md`.

**No investor presentation exists for Q1 FY27 or Q4 FY26.**
- RailTel files only the results PDF and a call transcript. Its calls have no slide deck.
- Searches of BSE-derived aggregators and railtelindia.com found no presentation (the company site returned 503).
- The "concall KPI table" below is therefore built from the results filing and the transcript.

**Tags in Part 4**
- **[V]** = read this session from the named primary document (or from a near-primary copy of it, such as an IANS copy of a Lok Sabha reply).
- **[V-snip]** = search summary or secondary article only.
- **[E]** = arithmetic or estimate.
- Local primary files (ARs, results PDF, transcripts) were downloaded earlier this session by the first pass and re-read here. They count as [V].

---

## 4.0 Supersedes: corrections to Parts 1–3 (the writer should apply these)

| # | Where in Parts 1–3 | Old value / claim | New value / claim | Source (tag) |
|---|---|---|---|---|
| S1 | Trap 6, §2.2 "FY27 guidance", §H-19, §2.3, JSON `fy27_growth_guide_pct: 20` | "Use ~20% as formal guidance; the 25% was an analyst restatement the CMD did not contradict" | **The CMD affirmed 25% on the Q1 call.** Analyst (ICICI Securities, p.5): "So we maintain the outlook… that we will grow at 25% of revenue." CMD (p.6): "**Yes. Yes.**" He then explained quarterly volatility and ECL. The latest guidance (31-Jul-2026) is **~25%**; on 1-May-2026 it was "around 20%". Present it as "**20–25%; most recently 25%**". FY27E revenue at 25% ≈ ₹5,350 Cr | [V Q1 FY27 transcript pp.5–6; Q4 FY26 transcript p.10] |
| S2 | Trap 6, §H-1, §2.3 | AR's "order book exceeding ₹10,400 Cr as on date" conflicts with ₹11,747 Cr | **Not a conflict but a stale statement.** The chairman's speech figure sits just below the CMD's verbal ~₹10,600–10,700 Cr for 31-Mar-2026. It predates the ₹700 Cr+ of April orders, so it was drafted around year-end. Drop it from the order-book series; keep ₹11,747 Cr (31-Jul-2026) as the latest | [V AR26 p.12; Q4 transcript p.3; E] |
| S3 | Trap 6, §E-7, JSON `order_book` | Series: mid-2024 ~₹4,750 → Dec-25 ₹8,563 → Apr-26 ₹11,466 → Jul-26 ₹11,747 | **Add:** **~₹5,280 Cr (Jan-2025, ICRA)**; **₹6,616 Cr (~5-May-2025; some reports say 31-Mar-2025)**; **~₹8,600 Cr (Jan-2026, ICRA)** | [V ICRA 18-Feb-2025 and 17-Feb-2026 rationales; V-snip Angel One/DSIJ for ₹6,616 Cr] |
| S4 | §0, §5.3, §H-3, (b) KPIs | "RailTel holds 2–3 Kavach orders (ECR, WCR; '>2,000 RKM'); values not in fetched sources" | **Three trackside Kavach orders totalling ₹1,007.2 Cr incl. GST over 2,176 RKM:**<br>• ECR-1: **₹288.15 Cr / 502.2 RKM**, low-density, Feb-2025, due 20-Feb-2027.<br>• ECR-2: **₹264.07 Cr / 607 RKM**, low-density, Jul-2025, due 14-Jul-2027.<br>• WCR Jabalpur: **₹454.95 Cr / 1,067 RKM**, high-density, LoA ~10-Feb-2026, 960 days; scope includes **OFC laying, tower erection, station/LC/IBS equipment, civil/electrical works under EPC**.<br>≈ **₹46 lakh/RKM incl. GST (~₹39 lakh ex-GST)**; ≈ 8.6% of the ₹11,747 Cr book | [V NBM&CW 11-Feb-2026 (WCR); V-snip Business Standard/Angel One (ECR-1), Indian Infrastructure 17-Jul-2025 (ECR-2); E arithmetic] |
| S5 | §2.1, §H-6, Trap list | "S&T head ~₹7,500 Cr FY27 [V-snip, single secondary source]" | **[V] Union Budget, Railway Budget at a Glance, Statement II, item 24 "Signalling and Telecommunication Works":**<br>• FY25 actual **₹5,567.60 Cr**.<br>• FY26 BE ₹6,800 Cr; FY26 RE **₹6,500 Cr**.<br>• **FY27 BE ₹7,500 Cr** (+15.4% vs FY26 RE; +34.7% vs FY25 actual).<br>• S&T = **2.6%** of the ₹2,93,030 Cr capex. Kavach's ₹2,066 Cr ≈ 28% of S&T | [V indiabudget.gov.in/doc/eb/railstat2.pdf] |
| S6 | §H-12, §9 payout row | "DPS FY21–FY25 not found; FY25 ≈₹2.90 [E]" | **DPS: FY21 ₹2.20 · FY22 ₹2.40 · FY23 ₹2.55 · FY24 ₹2.85 · FY25 ₹2.85 · FY26 ₹3.25.**<br>Dividend ₹ Cr: 70.61 · 77.02 · 81.83 · 91.47 · 91.47 · 104.30 | [V AR26 10-year table, line 9; AR22/AR24 dividend notes] |
| S7 | Trap 9, §7 CPSE governance, §9, §F, primer issue on dividend | "₹3.25 = 30.1% payout exactly at the DIPAM floor… Payout fell from 50% (FY21) to 30% (FY26)" | **Correct, but the reason is the floor that bound.**<br>• Under DIPAM's 2016 guidelines (higher of 30% PAT or **5% of net worth**), RailTel paid **5.0% of NW every year FY18–FY24** (5.00/5.00/5.00/5.03/5.08/5.01/4.96%). The NW leg was binding, hence 37–58% payouts.<br>• The **18-Nov-2024 revision (4% NW)** let the PAT leg bind: FY25 4.57% NW / 30.5% PAT; FY26 4.61% / 30.1%.<br>• The payout "decline" is a **rule change plus PAT growth**, not a policy choice | [V AR26 10-yr table rows 28–29; V-snip DIPAM OM summaries (PTI/BS/Foxmandal)] |
| S8 | §2.2 note, §H-18 | "FY21/FY22 segment totals exceed revenue… older ARs appear to include some other operating income" | **They are CONSOLIDATED figures.** The FY22 standalone AR (Note 25) gives no segment data ("disclosed in the consolidated financial statements"). The consolidated segment table includes subsidiary **RailTel Enterprises Ltd (REL)**: consolidated revenue ₹1,548.45 Cr (FY22) and ₹1,377.82 Cr (FY21) equal the segment totals. REL was **amalgamated into RailTel (appointed date 1-Oct-2022; effective 29-Aug-2023)**, which is also why screener's consolidated page stops at Sep-2023. FY23 onward is standalone and reconciles. **Telecom/project shares for FY21–22 are on a consolidated basis; say so in the chart footnote** | [V AR22 Note 25 & consolidated Note 26; V AR24 Board's report §16] |
| S9 | Trap 10, §E-14, 3.4 levies | "DoT licence fee FY25 ₹88.56 Cr" | **₹99.52 Cr per AR26 P&L Note 32** (FY26 ₹91.60 Cr). The Board's report figure (₹88.56 Cr) differs, probably a cash-paid vs accrued basis. Use the P&L note. **FY26 LF fell 8% YoY** while telecom revenue rose 10%, consistent with the reclassification of DC/ICT revenue (not all of it licensed AGR) | [V AR26 Note 32; E] |
| S10 | §5.1 table, §H-8 | "GAILTEL ~13,000 km OFC [K — verify]" | **~11,000 km of OFC along GAIL pipelines, 100+ towns/cities.** The business is mainly dark-fibre IRU/lease and co-location. The 13,000 km figure is a 2007-era claim | [V-snip gailonline.com/gailtel.html] |
| S11 | §5.1 table, §H-8 | "POWERTEL… FY14 telecom income ₹288 Cr; 60,946 km / ~1,00,000 km" | **POWERGRID's telecom business moved to subsidiary Powergrid Teleservices Ltd (POWERTEL) w.e.f. 1-Oct-2023.** Network **>1,00,000 km, >3,000 locations**. The last broken-out telecom revenue found is **₹698.21 Cr in FY20 (+5.3%)**. That is ~half of RailTel's FY26 telecom revenue, on ~1.6× the route-km | [V-snip powergrid.in directors' report/company overview; FY20 V-snip] |
| S12 | §7 Disinvestment/MPS, §H-17 | "SEBI MPS would require GoI to sell 2.16 pp by Feb-2026 [K]" | **The legal regime is a DEA exemption under SCRR Rule 19A(6).** Listed CPSEs, PSBs and FIs were exempted from the 25% MPS until **1-Aug-2026** (extension granted Aug-2024; the 2021 amendment allows government to exempt any listed PSE). No further extension was found in Oct-2026 searches. RailTel's register is still 72.84% (Sep-2026), so either a fresh exemption was issued or a compliance gap exists. **Treat it as an open overhang, not a dated sell-down** | [V-snip Business Standard 1-Aug-2024; Drishti/IOCL] |
| S13 | Trap 9, §8, §G | "Navratna Aug-2024" | **DPE letter PD-1-26/0002/2024-DPE dated 30-Aug-2024**; RailTel was the **22nd Navratna** (NHPC, SJVN and SECI were upgraded the same day) | [V BSE filing RailTel/Sectt/21/SE/S-16/V-3, 30-Aug-2024; V-snip DPE ranking] |
| S14 | §8, §G | "IPO Feb-2021… ₹94, pure OFS of ~8.7 crore shares, ~₹819 Cr [K]" | **[V]: GoI offered 8,71,53,369 shares at ₹94 (₹10 face value + ₹84 premium); listed 26-Feb-2021; proceeds went to GoI (no fresh issue).** ₹94 × 8.715 Cr shares = **₹819.2 Cr** | [V AR22 accounting-policy note A.3; AR26 Note 18.7] |
| S15 | §2.1 "Internet subscribers (Dec-2025) 1,306.14 mn… [V-AR]" | 1,306.14 mn internet subs | **The AR's MD&A appears to misquote total telephone subscribers as internet subscribers.** TRAI: internet subs **1,028.61 mn (Dec-2025) → 1,092.79 mn (Mar-2026; wired 46.54 mn, wireless 1,046.26 mn)**; broadband 1,065.88 mn; telephone subs 1,330.58 mn; teledensity 93.26%. Use TRAI | [V-snip TRAI PR 76/2026 via civilsdaily/tele.net] |
| S16 | §0 "cash is the hidden problem", §A-5 "cash is flat (~₹777 Cr)" | Cash flat ~₹777 Cr vs ~₹832 Cr | **Cash has fallen and swings hard within the year.** ICRA: cash & liquid investments incl. FDs **~₹1,006 Cr (31-Mar-2024)** → our estimate ~₹832 Cr (31-Mar-2025) → **~₹319 Cr (30-Sep-2025, ICRA)** → ~₹777 Cr (31-Mar-2026). The Mar-26 figure is flattered by year-end collections (see S17) | [V ICRA 18-Feb-2025 & 17-Feb-2026; E] |
| S17 | §H-13, Trap/BS "collection account ₹299.5 Cr may be pass-through" | Possibly pass-through, not free cash | **It is unrestricted cash**: earmarked balances (CSR escrow ₹1.15 Cr, dividend escrow ₹0.77 Cr) are shown separately in Note 13. The collection account is bank collection accounts holding customer receipts at the balance-sheet date. Its size tracks year-end collection drives: **₹97 Cr (FY21) · ₹76 Cr (FY22) · ₹40 Cr (FY23) · ₹139 Cr (FY24) · ₹179 Cr (FY25) · ₹300 Cr (FY26)**. Not pass-through, but seasonal | [V AR22/AR24/AR26 Note 12–13] |
| S18 | §4.1, §5.4, §12, JSON | "Noida 10 MW, phase-1 5 MW by ~May-2027" | **Management has given two versions.** Q4 call (1-May-26): "5-megawatt capacity should be ready by May next year". Q1 call (31-Jul-26): "by May 2027, **10-megawatt facility** should be commissioned in Noida… maybe even a month early". Quote both; the latest says 10 MW. Also from Q1: +500 kW at Hyderabad and +500 kW at Noida, both small | [V Q4 p.12; Q1 p.9] |
| S19 | §7 "Railway RoW access… exclusive ROW" and the primer-issue framing | Exclusivity implied for all railway-land telecom | **Fibre RoW along track is still described as exclusive** (AR26 Corporate Information; ICRA 2026: "exclusive RoW to lay fibre… along the railway tracks"; AR22: "exclusive seamless RoW along 67,956 km of track through 7,325 stations").<br>**Tower exclusivity ended in late 2022.** Indian Railways' revised land-licence-fee policy lets all 68 divisions license private telcos/IPs to put towers on railway land at **1.5% of land market value p.a.** (replacing a 7% revenue share; a 2016 order had reserved this for RailTel) | [V AR26/AR22; V ICRA; V-snip Outlook Business, Swarajya, Indian Infrastructure] |
| S20 | §1.3 / Trap 4 "nomination… exists, but…" | Reliance on nomination tempered | **ICRA corroborates:** "Despite the Indian Railways' **policy shift towards open tenders involving private parties**, its order procurement remains healthy." ICRA also says parentage "enables the company to execute all connectivity-related projects of the Indian Railways". Both effects exist; railway *connectivity* work is still captive, railway *project* work is increasingly tendered | [V ICRA 17-Feb-2026] |
| S21 | §2.1 BharatNet row, §3-5 | FY27 BharatNet BE ₹20,000 Cr | **Add the execution reality: FY26 BE ₹22,000 Cr was cut to RE ₹5,500 Cr (−75%); FY25 actual ₹3,995 Cr.** DoT total FY26 BE ₹81,005 Cr → RE ₹53,398 Cr. BSNL capital infusion FY26 RE ₹6,885 Cr vs BE ₹33,758 Cr. BharatNet money is budgeted, not spent | [V Notes on Demands for Grants 2026-27, Demand No. 13] |
| S22 | §2.1 DC row "~1.8 GW… ICRA 2.4–2.5 GW by FY28" | Mixed bases | **ICRA [V]: third-party operational DC capacity 1,250 MW in FY2025 → 2,400–2,500 MW by FY2028; ~₹90,000 Cr capex FY26–28; pipeline 3.0–3.5 GW (₹2.3–2.5 lakh Cr) over 7–10 yrs; Mumbai ~50%.** The broker figures (1.8 GW H1-2026) count total/IT capacity on a different basis. RailTel's ~3 MW = **0.24% of ICRA's FY25 base** | [V ICRA research 25-Sep-2025] |
| S23 | Trap 6 / §9 order book | "FY24 orders ~₹2,870 Cr; FY25 inflow not found" | FY25 inflow **~₹3,146 Cr** is reported by a single secondary source. It **does not reconcile** with the book rising from ~₹4,750 Cr (mid-2024) to ₹6,616 Cr (May-2025) while ~₹2,100 Cr of project revenue was executed. **Treat as unreliable**; leave FY25 inflow as "not disclosed in primary sources" | [V-snip; E reconciliation] |
| S24 | §4.1 / §11-3 Kavach OFC "11,547 km" | — | **Kavach OFC series:** Nov-2024 5,133 km → Feb-2025 5,743 → Feb-2026 8,570 → Mar-2026 8,921 (AR) → Jul-2026 11,547 km. Spec: underground **2×48-fibre** cable beside the track for "Kavach, LTE etc." (ITI EoI). ~96 fibres per route, of which Kavach uses a handful | [V-snip Indian Infrastructure series; ITI EoI] |

## 4.1 Verification table: the 40 figures the writer will lean on

"Agrees?" compares with Parts 1–3. "Primary [V]" = read this session in the primary document itself. URLs for local files are in §3.5 (Part 3); new URLs are in §4.6.

| # | Figure | Value | Primary source | Fetched / read? | Agrees with Parts 1–3? |
|---|---|---|---|---|---|
| 1 | FY26 revenue from operations | ₹4,277.48 Cr (+23.0%) | AR26 P&L / Table 1 | **[V]** primary | Yes |
| 2 | FY26 PAT / EPS | ₹346.32 Cr / ₹10.79 (weighted shares 32,09,38,407) | AR26 P&L; Note 49 | **[V]** | Yes |
| 3 | FY26 Telecom segment revenue / result | ₹1,500.69 / ₹400.25 Cr (26.7%) | AR26 segment note (Note 52) | **[V]** | Yes |
| 4 | FY26 Project segment revenue / result | ₹2,776.79 / ₹109.47 Cr (3.9%) | AR26 Note 52 | **[V]** | Yes |
| 5 | Order book latest | **₹11,747 Cr** "as on date", 31-Jul-2026 | Q1 FY27 transcript p.2 (CMD) | **[V]** re-read | Yes |
| 6 | Order book earlier | ₹11,466 Cr (30-Apr-26); ₹8,563 Cr (31-Dec-25); ~₹10,600–10,700 Cr (31-Mar-26, verbal) | Q4 FY26 transcript pp.3 | **[V]** | Yes |
| 7 | Order book, second source | ~₹8,600 Cr (Jan-2026); ~₹5,280 Cr (Jan-2025) | ICRA rationales 17-Feb-2026, 18-Feb-2025 | **[V]** | Consistent; new points (S3) |
| 8 | FY26 order inflow | ₹7,363 Cr | AR26 chairman's speech p.12 | **[V]** | Yes |
| 9 | Railway share of order book | ~21% (Q4 call); "23%, 23.5% exactly" (Q1 call) | Transcripts p.4 / p.3 | **[V]** | Yes |
| 10 | Q1 FY27 revenue / segments | ₹893.27 Cr (+20.1%); telecom ₹360.81; project ₹532.46 | Q1 FY27 results PDF; transcript p.2 | **[V]** | Yes |
| 11 | Q1 FY27 PAT / ECL | ₹65.78 Cr (−0.5%); ECL ₹7.04 Cr vs ₹3.42 Cr write-back | Q1 results PDF | **[V]** | Yes |
| 12 | Trade receivables and ageing | Net ₹2,052.95 Cr (gross ₹2,195.51); **>1 yr ₹626 Cr (28.5%)**; >3 yr ₹238 Cr | AR26 Note 56.12 | **[V]** | Yes + new ageing |
| 13 | Unbilled revenue and ageing | ₹898.33 Cr; **1–2 yr bucket ₹216.38 Cr** (FY25 ₹52.55 Cr) | AR26 Note 56.12 | **[V]** | Yes + new |
| 14 | Contingent liabilities | **₹446.86 Cr** (arbitration/court ₹406.44 Cr; GST ₹23.80; IT ₹13.68) | AR26 Note 51(b) | **[V]** | New |
| 15 | Bank guarantees given | **₹1,481.66 Cr** (FY25 ₹723.95 Cr) | AR26 Note 51(b) | **[V]** | New |
| 16 | DPS FY26 / FY25 | ₹3.25 / ₹2.85 | AR26 10-yr table; Q4 transcript p.2 | **[V]** | FY26 yes; FY25 supersedes ₹2.90 [E] |
| 17 | Dividend / PAT and / NW | FY26 30.12% / 4.61%; FY24 37.18% / 4.96% | AR26 10-yr table | **[V]** | Adds history (S7) |
| 18 | DIPAM dividend floor | Higher of 30% PAT / 4% NW (OM 18-Nov-2024); was 30% / 5% (2016) | DIPAM OM (via PTI/BS/Foxmandal summaries) | [V-snip] (3 sources agree) | Yes |
| 19 | Navratna date | DPE letter 30-Aug-2024 | RailTel BSE filing 30-Aug-2024 | **[V]** | Yes (date sharpened) |
| 20 | IPO | OFS of 8,71,53,369 shares at ₹94 (₹10 + ₹84); listed 26-Feb-2021 | AR22 accounting note A.3; AR26 Note 18 | **[V]** | Yes ([K] → [V]) |
| 21 | GoI shareholding | 72.84% (23,37,85,038 shares) unchanged FY25–FY26 | AR26 Note 18.5–18.6 | **[V]** | Yes |
| 22 | MPS exemption | CPSEs exempt from 25% MPS until 1-Aug-2026 (SCRR 19A(6)) | DEA notification via Business Standard | [V-snip] | Supersedes [K] (S12) |
| 23 | DoT licence fee / IR revenue share | FY26 ₹91.60 Cr / ₹46.03 Cr (FY25 LF ₹99.52 per Note 32) | AR26 Notes 31–32 | **[V]** | FY25 LF differs (S9) |
| 24 | RailWire subs / ARPU / revenue | 6.23 lakh (Jul-26); ARPU ~₹474; ~₹350 Cr FY26 | Q1 transcript p.4; AR26 chairman's speech | **[V]** | Yes |
| 25 | RailWire partner payout | "Railwire expenses" ₹228.52 Cr FY26 (₹217.03 Cr FY25) ≈ 65% of RailWire revenue | AR26 Note 31 | **[V]** (+[E] ratio) | New |
| 26 | Data-centre revenue and guide | ₹202.29 Cr FY26 (₹127.49); ~₹300 Cr FY27; ~₹500 Cr FY28 | AR26 Note 28; Q1 transcript p.8 | **[V]** | Yes |
| 27 | DC capacity | "already have 3 MW"; 5 MW (Q4) / 10 MW (Q1) Noida by May-2027 | Q4 p.12; Q1 p.9 | **[V]** | Partly superseded (S18) |
| 28 | FY27 project-revenue guidance | ₹3,000–3,500 Cr ("₹3,500 Cr maybe") | Q4 p.7; Q1 p.5 | **[V]** | Yes |
| 29 | FY27 growth guidance | ~20% (1-May-26) → 25% affirmed (31-Jul-26) | Q4 p.10; Q1 pp.5–6 | **[V]** | **No — superseded (S1)** |
| 30 | FY27 capex | ~₹300 Cr, "mostly data centre and partly telecom" (Q4) vs ₹241 Cr (AR chairman) | Q4 pp.8, 10; AR26 | **[V]** | Yes (conflict stands) |
| 31 | Railways FY27 capex | **₹2,93,030 Cr** BE (incl. EBR-Partnership ₹12,000 Cr); FY26 BE = RE ₹2,65,200 Cr; FY25 actual ₹2,69,360.64 Cr | Railway Budget at a Glance, Statement IV | **[V]** | Yes ([V-AR] → [V]) |
| 32 | S&T Works plan head | FY27 BE **₹7,500 Cr**; FY26 RE ₹6,500; FY25 actual ₹5,567.60 | Statement II item 24 | **[V]** | Yes ([V-snip] → [V]) |
| 33 | DoT FY27 / BharatNet / BSNL capital | ₹73,990.94 Cr / ₹20,000 Cr / ₹28,473 Cr | Demand No. 13, Notes on DfG 2026-27 | **[V]** | Yes ([V-AR] → [V]); add FY26 RE (S21) |
| 34 | Amended BharatNet | ₹1,39,579 Cr; 2.64 lakh GPs ring; 10-yr O&M; approved Aug-2023 | PIB BharatNet backgrounder 21-Apr-2025 | **[V]** (re-read) | Yes |
| 35 | Kavach national status | 2,633 RKM commissioned (31-Jul-26); 21,794 RKM trackside; 6,290 locos; FY27 allocation ₹2,066 Cr; spend ₹3,875 Cr to Jun-26 | Lok Sabha written reply 5-Aug-2026 (IANS copy) + Indian Infrastructure 7-Aug + NBM&CW 6-Aug | **[V]** (two independent copies) | Yes |
| 36 | Kavach unit costs | ~₹50 lakh/km trackside incl. station equipment; ~₹80 lakh/loco | Parliamentary replies Dec-2024 / Mar-2025 / Jul-2025 (reported) | [V-snip] | Replaces Moradabad ₹24 lakh/RKM as the official benchmark |
| 37 | RailTel Kavach orders | ₹288.15 + ₹264.07 + ₹454.95 = **₹1,007.2 Cr**, 2,176 RKM | NBM&CW (WCR) fetched; ECR via BS/Indian Infrastructure | **[V]** WCR; [V-snip] ECR | New (S4) |
| 38 | Kavach OEMs | HBL, Kernex, Medha approved early (3 OEMs per Dec-24/Mar-25 replies); Siemens, Kyosan reported later; Progota (Concord) prototype clearance Oct-2025; Quadrant (RailTel's OEM) in passenger trials since 26-May-2026, no final approval found | Company filings via press | [V-snip] | Mostly; Quadrant status updated |
| 39 | India DC capacity | 1,250 MW (FY25, third-party) → 2.4–2.5 GW FY28; ₹90,000 Cr capex FY26–28 | ICRA research 25-Sep-2025 | **[V]** | Adds a primary base (S22) |
| 40 | Fixed broadband / RailWire share | Wired internet subs 46.54 mn (Mar-2026) → RailWire 6.15 lakh ≈ **1.3%** | TRAI PR 76/2026 (copy) | [V-snip] (TRAI copy) | Yes (~1.3%) |
| (41) | 700 MHz for railways | 5 MHz paired; Cabinet 9-Jun-2021; >₹25,000 Cr; assigned 22-Oct-2021 | PIB/Cabinet (reported); TRAI response 4-Jul-2025 | [V-snip] | Yes |
| (42) | Repo / macro | Repo 5.25% → 5.50% on 7-Oct-2026 (unanimous); stance "calibrated tightening" (4–2); FY27 CPI 5.2% | RBI MPC (reported) | [V-snip] | Yes. **Rupee ~₹94.9/$ not re-verified** |
| (43) | Screener P/E | 19.8 printed vs ₹229 ÷ TTM EPS ₹10.78 = 21.2× | screener standalone 23-Oct-26 | **[V]** | Unreconciled (gap 20) |

**Count:**
- Of the 40 numbered figures, **31 are [V] from primary documents**: #1–17, 19–21, 23–35, 37 (WCR leg) and 39.
- **9 are [V-snip]**: #18, 22, 36, 38, 40, plus the ECR legs of #37 counted with it.
- The 3 bonus rows (41–43) are not counted.

**Conflict calls (which source wins):**
- **Guidance:** the transcript wins over all summaries. 25% is the latest statement and was explicitly affirmed. 20% is the earlier, more cautious one.
- **FY25 DoT licence fee:** the audited P&L note (₹99.52 Cr) beats the Board's report narrative (₹88.56 Cr).
- **Internet subscribers:** TRAI beats the AR's MD&A.
- **Order book:** the CMD's dated statements beat the undated chairman's speech.
- **DC capacity:** the latest call (10 MW by May-2027) is the latest *claim*. The writer should still present "5–10 MW" because the two calls disagree.

---

## 4.2 RailTel Corporation of India (RAILTEL · 543265): primary-document pack

### 4.2.1 Management-commentary digest: guidance as of the latest call (Q1 FY27, 31-Jul-2026; hosted by PL Capital; transcript filed 5-Aug-2026) [V, all pages re-read]

Paraphrased, with page numbers from the 10-page transcript. "Q4" points come from the 1-May-2026 call (12 pp) [V].

**Headline numbers given by the CMD (p.2)**
- Q1 FY27 operating revenue ₹893 Cr vs ₹744 Cr (+20%).
- Telecom ₹361 Cr; projects ₹532 Cr. Total income ₹910 Cr vs ₹758 Cr.
- PBT before exceptional items ₹96 Cr vs ₹86 Cr (+12%). PBT ₹89 Cr and PAT ₹66 Cr, "almost the same" as Q1 FY26.
- Orders received in the quarter ₹1,688 Cr vs ₹721 Cr.
- Order book ₹11,747 Cr "as on date".
- CAG gave "nil comments" on the FY26 accounts.

**Guidance table**

| Topic | Latest statement (Q1, 31-Jul-2026) | Earlier statement (Q4, 1-May-2026) | Read |
|---|---|---|---|
| **FY27 revenue growth** | Analyst: "we maintain the outlook… grow at 25% of revenue". CMD: "Yes. Yes." (pp.5–6) | "Our growth guidance will be around 20% for this financial year… growth which was in the range of 25%… will certainly be around 20%. Last year we did 22%." Director Finance: "We have met the earlier guidance" (p.10) | **Raised/affirmed to ~25%** after a strong Q1 order intake. Implied FY27 revenue ≈ ₹5,350 Cr (at 25%) or ₹5,130 Cr (at 20%) [E] |
| **FY27 project revenue** | "close to minimum maybe ₹3,000 Cr – ₹3,500 Cr… ₹3,500 Cr maybe… anticipated projected revenue" (p.5) | "₹3,000 Cr to ₹3,500 Cr of income should… get converted into revenue this year" (p.7); analyst "₹3,500-odd" → "more or less correct" (p.12) | Project revenue +8% to +26% on FY26's ₹2,777 Cr |
| **Project margin** | "We are maintaining our margins between 4% to 5% in project"; Q1 margin improved sequentially; "industry… 2%, 3% or 4%. Very few even operate in 4% to 5%" (pp.5, 7) | "continuously striving to remain in the 4% to 5% bracket" (p.9) | Stable 4–5% (Q1 FY27 segment EBIT 4.5%) |
| **Telecom margin** | Telecom margins are "almost… in the range… they used to be"; telecom growth "subdued by the pricing pressures" (p.7) | "always been in the range of 35% to 40%… I think it's 39% for this year" (p.6); Q4 spike "slight aberration… one-off kind of instance" from VSS (p.6–7) | EBITDA basis ~35–40% |
| **Kavach** | Two orders in outdoor execution (ECR advanced; WCR started). RDSO approval of OEM "likely to happen any time now, maybe next month" / "maybe this month itself"; approval "not delaying" projects. Revenue from Kavach to be booked "this year". Margin "slightly better than" 4–5%. "Not seeing many Kavach tenders in this current financial year" (pp.3, 5, 6) | "No new tenders are seen at least for now… we have already 3 orders… deliver those during next 2 to 3 years" (p.7) | No sign of final Quadrant approval by 23-Oct-2026 (searches) [V-snip]. Kavach = ~₹1,007 Cr of book (S4) |
| **Other Kavach OEMs** | Asked whether other OEMs approach RailTel for integration: "I will not comment… we are open… whoever gives us best commercial" (p.6) | — | RailTel is OEM-agnostic in principle, tied to Quadrant in practice |
| **NLD** | Q1 NLD ₹144 Cr vs ₹151 Cr: government renewals pending; "We book on accrual basis, but then POs have to be there". New customers Air Force, "one private operator", Starlink. NIC decentralised NKN ordering to individual institutes (pp.3–4) | Q4 NLD ₹182 Cr; enterprise price pressure "on the South side" (p.4) | Revenue recognition depends on POs: a renewal-timing risk (see §4.2.6) |
| **ISP/RailWire** | 6.23 lakh subs, ~+50,000 YoY; "segment is very heated"; "ARPU is continuously under pressure"; ITPO a good customer (p.4) | — | Subs +8–9% YoY; ARPU down |
| **Dark fibre to private players** | "Private players, fiber demand is there… we having independent and completely different right of way… we don't want to put a lot of capital expenditure… partner with someone who is sharing best revenue"; "it will take time"; "most other players are along the road" (pp.4–5) | — | Partner/revenue-share model; no timeline |
| **Data centre** | FY27 ~₹300 Cr, FY28 ~₹500 Cr (p.8). Noida "10-megawatt facility" by May-2027, "maybe a month early". Edge DCs Mumbai and Gurgaon commissioned. +500 kW Hyderabad, +500 kW Noida. Leases passive DC space from **Anant Raj, Adani** and others; RailTel provides managed/cloud services on its own servers; empanelment in RailTel's name (pp.9–10) | "Already have 3 MW… 5-megawatt capacity should be ready by May next year" (p.12). Three models: partners' real estate, partners investing in RailTel DCs, own DCs (p.11). Edge DCs: Indore, Ujjain, Chandigarh, Vizag targeted; "growth is not happening in general also in India" for edge (p.8). Separate DC disclosure "planning" (p.11). DC margin currently higher than pure telecom (ED Finance correction, p.11) | DC is the stated priority ("first priority today") |
| **AI/GPU** | "We are in the process… you will see something in news"; railway AI project; SLMs, "completely air-gapped… not the public cloud" (p.10) | — | Optionality, no capex number |
| **ECL** | Provisional, on ageing beyond 1–2 years; "none of the accounts are doubtful"; non-cash; "can get reversed as soon as we receive those payments" (p.8). "Most of the projects are government projects. So payment delays, of course, happens" (p.6) | — | See ageing (§4.2.5): ECL is structural |
| **Telecom receivables spike** | "Some revisions… mostly those belong to railways… one-off event" (p.6) | VSS billing accepted for Q2 and Q3 and billed in Q4; "this trend might continue for a few… quarters" (p.7) | Watch the H1 FY27 balance sheet on 25-Oct |
| **International** | Ethiopia DC ~₹18 Cr (project office and a project director posted); laptops and BHISHM cubes already booked; Uzbekistan bidding; Sri Lanka lost; Vietnam trying (pp.8–9) | — | AR26: export revenue ₹7.65 Cr FY26 (nil FY25) [V Note 54] |
| **Capex** | — | "₹300 Cr… mostly it is data centre and partly telecom and some other smaller, power" (pp.8, 10) | AR chairman: ₹241 Cr. Use "₹240–300 Cr" |
| **LTE-R** | — | "I don't have any latest update… presently, I'm not aware" (p.8) | No LTE-R revenue in view |
| **Digital services** | — | Aadhaar biometric authentication at exams (UPSC, NEET, JEE, state recruitment); Standard Chartered KYC; "lowest hanging" government demand (pp.5–6) | Inside "ICT others" ₹88.7 Cr |

**The 8 most important analyst Q&A points**
1. **Guidance moved up, not down** (S1). 25% growth was affirmed despite flat Q1 PAT.
2. **NLD is PO-dependent.** Revenue for services already being consumed is not booked until the renewal PO arrives. Q1 NLD fell 4.6% YoY for this reason. This is the most important line on the quality of the "annuity" (§4.2.6).
3. **The order book is 23.5% railway.** Kavach is ~₹1.0k Cr of ~₹11.7k Cr. Few new Kavach tenders are expected in FY27.
4. **Kavach revenue starts in FY27 but depends on Quadrant's RDSO approval.** Promised "next month" on 31-Jul. No final approval was visible in public sources by 23-Oct-2026 [V-snip].
5. **ECL is recurring by design.** The CMD frames it as a transparency policy on 1–2-year-old debtors and admits government payment delays are routine.
6. **DC economics shift toward an asset-light model.** RailTel leases third-party shells and sells managed services and cloud. That explains DC revenue per MW of ~₹67 Cr (FY26 ₹202 Cr ÷ ~3 MW), well above a colocation yield (§4.2.6).
7. **Fibre monetisation via a partner model:** demand exists, capex will not be committed, "will take time".
8. **Q4 FY26 telecom (₹449 Cr; 33.4% EBIT) included catch-up billing** for VSS services delivered in Q2–Q3. Telecom will not run at ₹449 Cr per quarter. A cleaner run-rate is ~₹360–400 Cr [E].

### 4.2.2 Concall/results KPI table (no investor deck exists; results PDF + transcripts) [V]

| KPI | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 | Source |
|---|---|---|---|---|---|---|
| Revenue from ops (₹ Cr) | 743.8 | 951 | 913 | 1,668.9 | 893.3 | Results PDFs; screener |
| Telecom segment (₹ Cr) | 334.8 | ~717 combined for Q2+Q3 [E: FY26 − Q1 − Q4] | (in Q2+Q3) | 448.9 | 360.8 | Results PDF; AR26 |
| of which NLD / ISP / IP-1 (₹ Cr) | 151 / n.a. / n.a. | n.a. | n.a. | 182 / 120 / 30 (= 332) | 144 / 112 / 27 (= 283) | Transcripts |
| of which DC + ICT + other (₹ Cr) | n.a. | n.a. | n.a. | 117 | ~78 [E] | Transcripts; E |
| Project segment (₹ Cr) | 409.1 | ~1,148 combined for Q2+Q3 [E] | (in Q2+Q3) | 1,220.0 | 532.5 | Results PDF; AR26 |
| Telecom EBIT % | 20.5 | n.a. | n.a. | 33.4 | 19.2 | Results PDF |
| Project EBIT % | 5.3 | n.a. | n.a. | 3.8 | 4.5 | Results PDF |
| ECL "exceptional" (₹ Cr; + = charge) | −3.42 (write-back) | n.a. | n.a. | 2.47 | 7.04 | Results PDFs |
| Orders received (₹ Cr) | 721 | n.a. | n.a. | n.a. (Apr-26: ₹700+ Cr) | 1,688 | Transcripts |
| Order book (₹ Cr, at date) | — | — | 8,563 (31-Dec) / ~8,600 (Jan, ICRA) | ~10,650 (31-Mar, verbal); 11,466 (30-Apr) | 11,747 (31-Jul) | Transcripts; ICRA |
| Railway share of book | — | — | — | ~21% | 23.5% | Transcripts |
| RailWire subs (lakh) | ~5.7–5.8 [E: 6.23 − 0.5] | — | — | 6.15 (FY26) | 6.23 | AR26; Q1 transcript |
| Capital employed: telecom / project (₹ Cr) | — | — | — | — | 1,183.7 / 742.4 | Q1 results PDF |
| Cash & liquid (₹ Cr) | — | ~319 (30-Sep-25, ICRA) | — | ~777 (31-Mar-26) [E] | n.d. | ICRA; AR26 |

### 4.2.3 Five-year history (FY22–FY26, standalone unless flagged) [V screener standalone 23-Oct-26; V AR10-yr table; V AR segment notes; E where marked]

| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | 4-yr CAGR / note |
|---|---|---|---|---|---|---|
| Revenue from operations | 1,522 | 1,957 | 2,568 | 3,478 | 4,277 | **29.5%** [E] |
| Telecom segment revenue | 1,041.6* | 1,169.5 | 1,265.4 | 1,362.5 | 1,500.7 | 9.6% (*FY22 consolidated, incl. REL) |
| Project segment revenue | 506.9* | 787.9 | 1,302.4 | 2,115.0 | 2,776.8 | 53.0% |
| Telecom share of revenue | 67.3%* | 59.7% | 49.3% | 39.2% | 35.1% | — |
| Telecom segment EBIT % | 19.2%* | 19.5% | 21.9% | 22.2% | 26.7% | — |
| Project segment EBIT % | 8.4%* | 4.7% | 5.4% | 4.4% | 3.9% | — |
| Operating profit (screener) | 368 | 379 | 464 | 535 | 638 | 14.7% |
| OPM (screener) | 24% | 19% | 18% | 15% | 15% | ICRA OPBDIT/OI: FY24 18.1%, FY25 15.3% |
| PBT before exceptional (AR) | 280 | 255 | 355 | 424 | 494 | 15.3% |
| ECL/exceptional (AR) | — | 2.06 | 26.72 | 21.72 | 24.36 | Recurring since FY24 |
| PAT | 208 | 188 | 246 | 300 | 346 | 13.6% |
| EPS (₹) | 6.49 | 5.84–5.87 | 7.67 | 9.34 | 10.79 | — |
| **DPS (₹)** | **2.40** | **2.55** | **2.85** | **2.85** | **3.25** | AR10-yr table (S6) |
| Dividend (₹ Cr) / payout / % of NW | 77.02 / 26.9%† / 5.08% | 81.83 / 43.8% / 5.01% | 91.47 / 37.2% / 4.96% | 91.47 / 30.5% / 4.57% | 104.30 / 30.1% / 4.61% | †AR basis (screener 37%) |
| Net worth (AR) | 1,516 | 1,636 | 1,827 | 2,000 | 2,262 | — |
| Gross block incl. ROU (AR) | 2,143 | 2,331 | 2,570 | 2,898 | 3,263 | — |
| Employees | 698 | 765 | 858 | 881 | 928 | Income/employee ₹2.29 → ₹4.66 Cr |
| CFO (screener) | 258 | 284 | 556 | 255 | 316 | — |
| FCF (screener) | 142 | 107 | 347 | −70 | 44 | 5-yr cumulative FCF ₹570 Cr vs dividends declared ₹446 Cr [E] |
| Debtor days (screener) | 160 | 195 | 180 | 166 | 175 | MoU target 90 |
| ROCE (screener) | 16% | 16% | 20% | 22% | 23% | AR PBT/CE 18.5 → 20.8% |
| Order book (approx., year-end) | n.d. | n.d. | ~4,750 (mid-2024, AR24) | ~6,616 (~May-2025) | ~10,650 (31-Mar-26) | Dated points only |
| Order inflow | n.d. | n.d. | ~2,870 (AR24) | ~3,146? (unreliable, S23) | 7,363 (AR26) | — |
| Cash & liquid incl. FDs | n.d. | n.d. | ~1,006 (ICRA) | ~832 [E] | ~777 [E] | Falling (S16) |

### 4.2.4 Eight-quarter trend (Q2 FY25 – Q1 FY27) [V screener standalone 23-Oct-26 quarterly table; segment data from results PDFs where available]

| ₹ Cr | Sep-24 (Q2 FY25) | Dec-24 (Q3) | Mar-25 (Q4) | Jun-25 (Q1 FY26) | Sep-25 (Q2) | Dec-25 (Q3) | Mar-26 (Q4) | Jun-26 (Q1 FY27) |
|---|---|---|---|---|---|---|---|---|
| Revenue | 843 | 768 | 1,308 | 744 | 951 | 913 | 1,669 | 893 |
| YoY growth | +40.7% | +15.0% | +57.0% | +33.3% | +12.8% | +18.9% | +27.6% | +20.1% |
| Operating profit | 129 | 121 | 180 | 116 | 154 | 133 | 233 | 132 |
| OPM | 15% | 16% | 14% | 16% | 16% | 15% | 14% | 15% |
| Other income (screener, net of ECL) | 5 | 12 | 32 | 18 | −2 | 1 | 8 | 9 |
| Depreciation | 40 | 43 | 60 | 44 | 47 | 49 | 49 | 50 |
| PBT | 94 | 90 | 151 | 89 | 105 | 85 | 190 | 89 |
| PAT | 73 | 65 | 113 | 66 | 76 | 62 | 142 | 66 |
| EPS (₹) | 2.26 | 2.03 | 3.53 | 2.06 | 2.37 | 1.94 | 4.42 | 2.05 |
| Telecom / project revenue | n.a. | n.a. | n.a. | 334.8 / 409.1 | (Q2+Q3: ~717 / ~1,148) | — | 448.9 / 1,220.0 | 360.8 / 532.5 |
| Order book at/after quarter | — | ~5,280 (Jan-25, ICRA) | ~6,616 (May-25) | — | — | 8,563 | ~10,650 | 11,747 (31-Jul) |

**Reading the 8 quarters [E]:**
- **H1 FY26** revenue ₹1,695 Cr and PAT ₹142 Cr match ICRA's provisional H1 figures exactly [V ICRA].
- **Q4 carries the year.** Q4 FY25 was 37.6% of FY25 revenue; Q4 FY26 was 39.0% of FY26. Q4 PAT was 37.7% and 41.0% of the year's PAT.
- **OPM has sat at 14–16% for eight quarters.** The mix shift has stopped eroding margin, because the project share is now stable at ~60–73% by quarter.
- **For Q2 FY27 (25-Oct):** if the 25% guidance holds, the Q2–Q4 run-rate must be ~₹4,450 Cr (≈ ₹5,350 Cr − ₹893 Cr) against ₹3,533 Cr in Q2–Q4 FY26, i.e. +26%.

### 4.2.5 FY26 annual-report findings (26th AR 2025-26; notes re-read this pass) [V AR26 unless noted]

**(a) Related parties, royalty-like payments, ownership**
- **Related-party note (Note 48).** RailTel applies the Ind AS 24 government-related-entity exemption and gives "limited disclosures". Transactions with railway entities are therefore not quantified.
  - The common-control list includes CRIS, IRCON, IRCTC, RVNL, Konkan Railway, DFCCIL, NHSRCL, KMRC, MRVC, RLDA, CONCOR, Braithwaite, production units (CLW, MCF) and state rail-infra JVs (HRIDC, MRIDC, Chhattisgarh East Rly).
  - **No RPT values for Indian Railways are disclosed.**
- **Royalty-like payments to the parent.**
  - **7% revenue share on services to Indian Railways: ₹46.03 Cr FY26** (₹42.35 Cr FY25; ₹39.72 Cr FY22; ₹30.68 Cr FY21). It sits inside "Access & other charges" (Note 31).
  - Revenue share payable to IR was ₹61.85 Cr at Mar-22 [V AR22]. The 7% has been unchanged since at least FY21 ("computed at prescribed rate of 8% and 7%" [V AR22]).
- **Ownership.**
  - President of India (through MoR) holds 23,37,85,038 shares = 72.84%, unchanged.
  - No shares were issued for non-cash consideration in the last five years (Note 18.7). The ₹305.94 Cr non-cash equity is pre-2016.
- **Subsidiaries.** None since the REL amalgamation (appointed date 1-Oct-2022; effective 29-Aug-2023) [V AR24].

**(b) Contingent liabilities and guarantees (Note 51)**

| ₹ Cr | 31-Mar-25 | Additions | Adjusted | 31-Mar-26 |
|---|---|---|---|---|
| Arbitration / court cases | 397.68 | 8.76 | — | **406.44** |
| GST | 12.84 | 11.05 | 0.09 | 23.80 |
| Income tax | 13.68 | — | — | 13.68 |
| Service tax / VAT / other | 5.47 | 0.66 | 3.20 | 2.93 |
| **Total claims not acknowledged as debt** | **429.67** | 20.47 | 3.29 | **446.86** (19.8% of net worth) |
| **Bank guarantees given to customers/government** | 723.95 | — | — | **1,481.66** (65.5% of NW; ×2.05 YoY) |
| Capital commitments | 311.53 | — | — | 345.39 |

- **Contingent liabilities are a Key Audit Matter (#2)** in the auditor's report.
- **The BG jump matches ICRA's limits table.** Non-fund-based (BG/LC) limits were raised from ₹926 Cr to ₹1,775 Cr in Feb-2026; unallocated limits fell from ₹1,053 Cr to ₹190 Cr [V ICRA].
- **The project book now consumes guarantee capacity.** A ₹11.7k Cr book with 3–10% performance BGs is consistent with ~₹1.5k Cr of BGs outstanding [E].
- **One named dispute:**
  - A ₹42.78 Cr receivable from one customer (₹26.38 Cr disputed) is fully provided under ECL.
  - RailTel's own claim of ₹26.66 Cr (SLA deductions plus interest on delayed payment) is **not recognised** in the accounts.
  - The dispute has been referred to **AMRCD** (the government's Administrative Mechanism for Resolution of CPSE Disputes) via the Ministry of Railways (Note 54 footnote). The counterparty is evidently a government entity.
- **Impairment.** The NE (North-East) fibre project impairment is cumulative ₹120.97 Cr (₹18.50 Cr charged in FY25; nil in FY26). The project "was halted for the long time due to difficult working conditions" (Note 50.1).

**(c) Receivables, unbilled and payables ageing (Note 56.12)**

| Trade receivables, gross (₹ Cr) | <6 m | 6 m–1 y | 1–2 y | 2–3 y | >3 y | Total |
|---|---|---|---|---|---|---|
| 31-Mar-2025 | 1,034.54 | 213.68 | 210.28 | 81.70 | 161.47 | 1,701.67 |
| **31-Mar-2026** | **1,235.56** | **333.72** | **267.07** | **120.76** | **238.40** | **2,195.51** |
| Share FY26 | 56.3% | 15.2% | 12.2% | 5.5% | 10.9% | 100% |

- **Receivables older than one year: ₹626 Cr (28.5% of gross) vs ₹453 Cr (26.6%).**
- Older than three years: ₹238 Cr, up 48%.
- Credit-impaired plus significant-increase-in-credit-risk buckets total ₹170 Cr (mostly >3 years). The **ECL allowance is ₹142.56 Cr = 6.5% of gross**, i.e. the provision does not even cover the stressed buckets in full [E].

| Unbilled revenue (₹ Cr) | <6 m | 6 m–1 y | 1–2 y | 2–3 y | Total |
|---|---|---|---|---|---|
| 31-Mar-2025 | 671.03 | 91.17 | 52.55 | — | 814.75 |
| **31-Mar-2026** | 639.34 | 42.23 | **216.38** | 0.38 | 898.33 |

- **Unbilled work aged 1–2 years quadrupled to ₹216 Cr.** This is work done but not yet billable (milestone not certified).
- It is the same signal as the CMD's "revisions and estimates… mostly railways" [V Q1 p.6]. It may be the VSS programme [E].

| Trade payables (₹ Cr) | <1 y | 1–2 y | 2–3 y | >3 y | Total |
|---|---|---|---|---|---|
| MSME 31-Mar-25 | 397.75 | 13.16 | 2.73 | 33.18 | 446.82 |
| **MSME 31-Mar-26** | 874.75 | 44.18 | 19.40 | 48.47 | **986.80** |
| Others 31-Mar-26 | 601.39 | 38.96 | 14.23 | 32.78 | 687.37 (FY25 982.93) |

- **MSME payables more than doubled to ₹987 Cr (59% of payables vs 31%).** Ageing is "based on date of transaction as payment milestones are not yet achieved" (back-to-back terms).
- **This is how RailTel funds its receivables: by paying sub-contractors when the government pays it.** ICRA says the same: "working capital intensity continues to be negative/very low, as a majority of such receivables are backed with subcontractors' liability, along with the receipt of customer advances" [V ICRA].
- **The risk:** MSME vendors increasingly have statutory 45-day payment protection (the MSMED Act, and the tax disallowance under §43B(h) on the buyer's side). The back-to-back float could shrink [E/K].

**(d) Revenue disaggregation (Ind AS 115, Note 54; non-lease contract revenue only, ₹2,802.48 Cr)**
- **Government customers ₹2,765.18 Cr = 98.7%** (FY25: 96.6%); non-government ₹37.30 Cr.
- **Fixed-price contracts ₹2,464.50 Cr = 87.9%**; time-and-materials ₹337.98 Cr.
- **Long-term contracts ₹956.67 Cr = 34.1%** (FY25 29.5%).
- **Abroad ₹7.65 Cr** (first year; MEA-funded).
- By product line: railway project works ₹503.08 Cr; other projects ₹2,072.57 Cr; others ₹226.83 Cr.
- Contract assets ₹2,320.41 Cr (receivables ₹1,568.67 + unbilled ₹707.44 + WIP ₹44.30). **Contract liabilities (customer advances) fell from ₹372.46 Cr to ₹230.74 Cr.** Fewer advances are funding the book.
- Warranty obligations are passed **back-to-back to OEMs**; no separate warranty provision.

**(e) Telecom revenue is lease income, and it is short-dated (Note 55B) — NEW, important**
- RailTel books its **NLD, IP-1 (dark fibre, tower, co-location), ILD and internet services as operating leases (lessor)**.
- **Lease income FY26 ₹1,459.51 Cr** (FY25 ₹1,262.23 Cr) ≈ 97% of the Telecom segment.
- **Undiscounted non-cancellable lease payments still to be received: only ₹184.31 Cr.**
  - <1 yr ₹113.04 Cr.
  - 1–2 yrs ₹45.15 Cr.
  - 2–3 yrs ₹10.41 Cr.
  - 3–4 yrs ₹7.25 Cr.
  - 4–5 yrs ₹4.30 Cr.
  - >5 yrs ₹4.16 Cr.
- **Only ~13% of a year's telecom revenue is contractually locked in. The rest renews PO by PO**, which is exactly why Q1 FY27 NLD dipped while customers kept using the service [V Q1 p.3].
- IRU dark-fibre deals are recognised straight-line over the term. If a customer terminates early, RailTel refunds or adjusts prepaid IRU charges net of a penalty.
- **Implication for the "annuity" thesis.** The telecom stream is *sticky* (government users on RailTel's network) but **not contracted**. It behaves like an annually re-bid service book, exposed to price resets ("pressure on prices… South side") [E].

**(f) Cost lines (Note 31–32), FY26 vs FY25 (₹ Cr)**
- O&M of fibre & equipment: 179.64 (156.83).
- Hire of radio modem/OFC/internet access: 109.06 (108.89).
- **RailWire expenses: 228.52 (217.03).** These are partner payouts and last-mile costs, ≈ **65% of RailWire's ~₹350 Cr revenue**. RailTel keeps ~35% (~₹120 Cr) before backbone costs [E]. Gap 11 is now approximately filled.
- Power & fuel on network: 41.03 (44.84).
- Revenue share to IR: 46.03 (42.35).
- Total access charges: 604.28 (569.94).
- **DoT licence fee 91.60 (99.52 per Note 32; see S9).**
- Leases as lessee: ROU assets ₹225.31 Cr (buildings ₹143.77 Cr, land ₹50.21 Cr, **leased telecom assets — dark fibre/duct — ₹31.10 Cr**). Lease liabilities ₹63.72 Cr. A ₹53.76 Cr capital advance has been paid to NBCC for office space (possession offered 25-Mar-2026, not yet taken).

**(g) Cash composition (Notes 12–13), ₹ Cr, 31-Mar-26 (31-Mar-25)**
- Collection account **299.51** (179.18).
- Current accounts 69.19 (105.13).
- Flexi deposits ≤3 m 28.58 (23.55).
- Imprest 0.18.
- Earmarked: CSR escrow 1.15; dividend escrow 0.77 (32.33).
- See S16/S17: unrestricted, but year-end-peaked.

**(h) Ten-year table highlights (AR26 p.~30)**
- **Employees 698 (FY22) → 928 (FY26).** Income per employee ₹2.29 → ₹4.66 Cr.
- **Expenditure/income 72.5% (FY22) → 84.2% (FY26).** PBT/total income 17.5% → 10.9%.
- **PAT/net worth 13.7% → 15.3%.**
- **Book value/share ₹70 (FY26).** Screener ₹70.5 ✓.

**(i) Risks (MD&A §10) and strategy (§11)**
- **Twelve risks** in the ERM framework: project; strategy; **market (private telcos, hyperscale cloud)**; people/talent; technology obsolescence; reputation; insurable; **contractor/vendor dependence**; cyber; **sectoral (dependence on government and railway capex cycles)**; sustainability; information/DPDP.
- **Three-horizon plan:**
  - **H1 (FY27) "Consolidate":** operationalise DC capacity and edge; Kavach and station milestones; DPDP and telecom cyber-rules compliance; managed-services mix and project tail revenue.
  - **H2 (FY27–29) "Expand":** DC/edge scale-up; cyber-security-as-a-service; managed cloud.
  - No numeric targets are attached.

**(j) Rating (ICRA, 17-Feb-2026) [V]**
- **[ICRA]AA (Stable) / [ICRA]A1+, reaffirmed;** total rated ₹2,000 Cr. The rating was also AA (Stable) in Feb-2023, Mar-2024 and Feb-2025.
- **Strengths:** GoI/MoR parentage; "exclusive RoW to lay fibre… along the railway tracks"; 62,000+ km; zero debt.
- **Constraints:** OPM moderating with project mix ("expected to continue"); intense telecom competition; lumpy, competitive project revenue; elevated receivables; **"obligations to pay dividends to the GoI, which might impact its liquidity position"**.
- **Rating triggers:**
  - Downgrade on "weakening of linkages with the MoR".
  - Upgrade needs "material improvement in the receivable position".
- **ICRA's FY25 revenue mix:** NLD 18%, ISP 13%, IP-1 8%, projects ~59%. FY24 NLD was 23% [V ICRA 2025].

### 4.2.6 Order-book reconciliation and quality [V points; E arithmetic]

| Date | Order book (₹ Cr) | Source |
|---|---|---|
| mid-2024 (AR24) | ~4,750 | AR24 [V] |
| Jan-2025 | ~5,280 | ICRA 18-Feb-2025 [V] |
| ~31-Mar / 5-May-2025 | 6,616 | Press summaries of Q4 FY25 call [V-snip] |
| 31-Dec-2025 | 8,563 | Q4 FY26 call [V] |
| Jan-2026 | ~8,600 | ICRA 17-Feb-2026 [V] |
| 31-Mar-2026 | ~10,600–10,700 (verbal); AR speech ">10,400" | Q4 call [V]; AR26 |
| 30-Apr-2026 | 11,466 | Q4 call [V] |
| 31-Jul-2026 | 11,747 | Q1 call [V] |

- **FY26 roll-forward [E]:**
  - Opening ~6,616 + inflow 7,363 − closing ~10,650 ⇒ **~₹3,330 Cr executed out of the book**.
  - That compares with project revenue of ₹2,777 Cr. The book therefore also contains some telecom/DC service contracts, consistent with "unexecuted value incl. multi-year telecom contracts".
- **Q1 FY27 roll-forward [E]:**
  - ~10,650 + 1,688 (Q1) + April's ~700 is already inside 11,466. Ending at 11,747 on 31-Jul implies **~₹600–700 Cr burned per quarter** at Q1 execution rates.
- **Composition known so far:**
  - Railway ~23.5% (≈ ₹2,760 Cr), including Kavach ≈ ₹1,007 Cr (incl. GST) and the MoR e-Office upgrade **₹334.52 Cr (LoA 23-Jun-2026, execution to Jun-2031)** [V-snip].
  - Non-railway ≈ ₹9,000 Cr, including EPFO IT extension ₹166.80 Cr (18-Aug-2026, to Feb-2027), RRB Secunderabad AM-RMS ₹167.52 Cr, HARTRON LAN rate contract ₹47.4 Cr, HITPA ₹18.99 Cr, Munitions India ₹15.78 Cr, Goa LWB ₹27.06 Cr [V/V-snip].
- **Nomination vs competitive:** still not disclosed in any primary document.
  - ICRA's language ("IR policy shift towards open tenders"; parentage "enables… all connectivity-related projects of the Indian Railways") points to: railway connectivity and DC/e-Office work largely on nomination or PSU route; Kavach and state ICT tendered.
  - **Gap 1 remains partially open.**

---

## 4.3 Industry data upgraded from primary sources (chart-ready)

**D1. Indian Railways capital expenditure by plan head (₹ Cr) [V Union Budget 2026-27, Expenditure Profile, Railway Budget at a Glance, Statements II and IV]**

| Plan head | FY25 actual | FY26 BE | FY26 RE | FY27 BE | FY27 vs FY26 RE |
|---|---|---|---|---|---|
| New lines | 33,363.03 | 32,235.24 | 30,631.50 | 36,721.55 | +19.9% |
| Doubling | 32,791.16 | 32,000.00 | 29,026.00 | 37,750.00 | +30.1% |
| Gauge conversion | 5,212.30 | 4,550.00 | 4,284.00 | 4,600.00 | +7.4% |
| Rolling stock | 60,624.55 | 58,894.93 | 63,372.56 | 65,496.63 | +3.4% |
| Leased assets (capital component) | 22,699.42 | 27,904.65 | 28,157.13 | 39,650.00 | +40.8% |
| Track renewals | 23,432.67 | 22,800.00 | 25,166.45 | 22,853.00 | −9.2% |
| **Signalling & telecom works** | **5,567.60** | **6,800.00** | **6,500.00** | **7,500.00** | **+15.4%** |
| Electrification | 4,248.38 | 6,150.00 | 4,500.00 | 5,000.00 | +11.1% |
| Computerisation | 360.98 | 428.00 | 441.01 | 492.64 | +11.7% |
| Customer amenities | 13,034.11 | 12,118.39 | 12,120.50 | 11,971.82 | −1.2% |
| Investment in PSUs/JVs/SPVs | 25,740.82 | 22,444.33 | 21,598.40 | 17,251.00 | −20.1% |
| Road safety (ROB/RUB) | 7,048.85 | 7,000.00 | 7,734.42 | 8,225.00 | +6.3% |
| EBR-Partnership | 15,048.85 | 10,000.00 | 10,000.00 | 12,000.00 | +20.0% |
| **Total capex** | **2,69,360.64** | **2,65,200.00** | **2,65,200.00** | **2,93,030.00** | **+10.5%** |

**Other railway lines:**
- Total revenue expenditure FY27 BE ₹2,99,500 Cr. Total railway revenue ₹3,02,500 Cr. PRS: operating ratio >98%; ~90% of revenue committed to salary, pension and lease [V-snip PRS DfG analysis].
- **Read:** S&T is a small (2.6%) but fast-growing head (+35% over two years). Kavach (₹2,066 Cr) is ~28% of it.
- **Capex utilisation:** ₹1,14,973 Cr spent by Jul-2026 = 39% of the grant [V LS reply, IANS].

**D2. Department of Telecommunications (₹ Cr) [V Notes on Demands for Grants 2026-27, Demand No. 13]**

| Line | FY25 actual | FY26 BE | FY26 RE | FY27 BE |
|---|---|---|---|---|
| **Grand total DoT** | 1,21,726.64 | 81,005.24 | 53,398.17 | **73,990.94** |
| BharatNet (USOF/DBN scheme 11.03) | 3,995.01 | 22,000.00 | **5,500.00** | **20,000.00** |
| USOF/DBN total | 18,500.00 | 20,000.00 | 20,000.00 | 17,063.00 |
| Capital infusion in BSNL | 71,940.02 | 33,757.58 | 6,885.00 | 28,473.00 |
| Establishment (Centre) | 19,480.93 | 21,729.48 | 21,049.91 | 22,521.73 |

- **Read:** BharatNet spending has run at 18–25% of its budget in FY25–FY26. The ₹1.40 lakh Cr Amended BharatNet is back-loaded and late versus its Mar-2027 completion target.
- RailTel's role is a fee-earning **Independent Engineer (Phase-3 Package 4)** [V AR26 MD&A]. It is not exposed to BharatNet capex volumes.

**D3. Kavach programme: national (official) and RailTel slice**

| Metric | Value | Date | Source |
|---|---|---|---|
| Kavach v4.0 RKM commissioned | 1,452 → 2,633 (Delhi–Mumbai 1,423; Delhi–Howrah 1,210) | 11-Mar-26 → 31-Jul-26 | AR26 citing LS; LS reply 5-Aug-26 [V] |
| Trackside work taken up | 7,100 → 21,794 RKM | Mar-26 → Jul-26 | AR26; LS reply [V] |
| Locos fitted / in progress | 4,277 → 6,290 / 7,190 (+1,200 EMU/MEMU rakes) | Mar-26 → Jul-26 | AR26; LS reply [V] |
| Kavach OFC laid | 5,133 (Nov-24) → 5,743 (Feb-25) → 8,570 (Feb-26) → 8,921 (Mar-26) → 11,547 km (Jul-26) | — | Indian Infrastructure series [V-snip]; AR26 [V] |
| Towers | 1,100+ (Mar-26) → 1,721 (Jul-26) | — | newsonair [V-snip]; Indian Infrastructure [V] |
| Cumulative spend | ₹2,763.9 Cr (Feb-26) → ₹3,875 Cr (Jun-26) | — | AR26; LS reply [V] |
| Allocation | FY26 ₹1,673 Cr → FY27 ₹2,066 Cr | — | AR26; LS reply [V] |
| Official unit cost | ~₹50 lakh/km trackside incl. station; ~₹80 lakh/loco (₹70 lakh in 2023) | 2023–2025 replies | Parliamentary replies [V-snip] |
| Remaining TAM [E] | Track ~68,000 RKM − 2,633 commissioned ≈ 65,000 RKM × ₹50 lakh ≈ **₹33,000 Cr trackside**; plus ~13,000 locos still to fit (≈ 20,000 fleet − 6,290) × ₹80 lakh ≈ **₹10,000 Cr**. **Total ≈ ₹40,000–45,000 Cr** | — | E (narrows the Part 1 ₹15–40k Cr range upward) |
| **RailTel orders** | ₹1,007.2 Cr / 2,176 RKM (ECR ₹288.15 Cr/502.2; ECR ₹264.07 Cr/607; WCR ₹454.95 Cr/1,067) ≈ ₹46 lakh/RKM incl. GST | Feb-25, Jul-25, Feb-26 | S4 |
| RailTel share | ~10% of the 21,794 RKM taken up; ~2.5% of the trackside TAM [E] | — | E |

**OEM landscape (approval status, Oct-2026) [V-snip]:**
- Kavach 4.0 specification approved by RDSO in **Jul-2024**.
- HBL (first v4.0 approval, May-2025), Kernex, Medha: approved. Siemens and Kyosan: reported approved.
- Progota (Concord Control associate): technical prototype clearance Oct-2025; ₹185.09 Cr loco order in Feb-2026.
- **Quadrant Future Tek (RailTel's OEM): RDSO passenger-trial permission 26-May-2026; final approval not found by 23-Oct-2026.**

**Order flow to OEMs is moving to locomotives:**
- HBL: ~₹1,714 Cr CLW loco Kavach order and ₹575 Cr ICF on-board order (2026) [V-snip].
- Quadrant: ₹230.42 Cr ICF (192 units, ≈ ₹1.2 Cr/unit) and ₹20.19 Cr PLW.
- HBL Q1 FY27: revenue ₹638 Cr, PAT ₹111 Cr (−24%), electronics +26% on Kavach [V-snip].

**D4. TRAI market data (primary releases via copies) [V-snip]**
- **Mar-2026 (PR 76/2026, 22-Jun-2026):**
  - Telephone subs 1,330.58 mn; teledensity 93.26%; private share 92.32%.
  - Wireline 48.25 mn.
  - Internet 1,092.79 mn (wired 46.54 mn, wireless 1,046.26 mn).
  - Broadband 1,065.88 mn.
  - Wireless ARPU ₹196.04.
  - **Sector AGR ₹86,716 Cr for the quarter.**
- **Jun-2026 (PR 135/2026, 12-Oct-2026):** broadband 1,087.50 mn. Yearly report 2025-26 (5-Oct-2026): broadband +12.9% YoY.
- **RailWire share:** 6.15 lakh ÷ 46.54 mn wired internet = **1.32%** (Mar-26) [E].
- **RailTel's NLD revenue vs sector AGR:** ₹640 Cr ÷ (~₹86.7k Cr × 4 ≈ ₹3.47 lakh Cr annualised) ≈ 0.18% of sector AGR [E]. TRAI's NLD-only AGR was not obtained (**gap 7 stays open**).

**D5. Data centres [V ICRA 25-Sep-2025]**
- Third-party operational capacity 1,250 MW (FY25) → **2,400–2,500 MW (FY28)**; ~₹90,000 Cr capex FY26–28 (≈ ₹72–78 Cr/MW incremental [E]).
- Pipeline 3.0–3.5 GW over 7–10 years (₹2.3–2.5 lakh Cr). Mumbai ~50%. Hyperscaler-backed colocation is 85–90% of major developers' revenue.
- **RailTel benchmarks [E]:**
  - ~3 MW operational = 0.24% of FY25 capacity.
  - Its ₹300 Cr FY27 capex buys ~4 MW at ICRA's implied cost. **The 10 MW Noida build must rely on partner capital** (consistent with the "partners investing in our DCs" model, Q4 p.11).

**D6. Same-model PSU carriers (utility RoW fibre)**

| Carrier | Parent | RoW | Network | Revenue (latest found) | Tag |
|---|---|---|---|---|---|
| RailTel | MoR (72.84%) | Railway track (exclusive fibre RoW) | 63,000+ RKM | Telecom ₹1,501 Cr (FY26) | [V] |
| POWERTEL (Powergrid Teleservices Ltd, since 1-Oct-2023) | POWERGRID | OPGW on transmission towers | >1,00,000 km; >3,000 locations | ₹698 Cr (FY20, last broken out) | [V-snip] |
| GAILTEL | GAIL | Gas pipelines | ~11,000 km; 100+ towns | n.d. (₹25 Cr in FY07) | [V-snip] |
| BSNL/BBNL | DoT | Road/BharatNet | BharatNet 42.13 lakh km OFC (incl. state/PIA) | BSNL capital infusion FY27 ₹28,473 Cr | [V] |

**D7. Policy datapoints**
- **DIPAM (18-Nov-2024):**
  - Dividend floor = higher of 30% PAT or 4% NW (was 5% NW).
  - Buyback trigger: price < book for 6 months **and** NW ≥ ₹3,000 Cr **and** cash ≥ ₹1,500 Cr.
  - Bonus if reserves ≥ 20× paid-up capital (was 10×).
  - Split if price > 150× face value for 6 months.
  - Review within 3 years.
  - **RailTel:** reserves ₹1,941 Cr = 6.0× paid-up, so no bonus trigger; NW ₹2,262 Cr, so no buyback trigger [V-snip; E].
  - (One summary claims a "90% of expected dividend as interim" rule. Unverified; RailTel paid 62% as interims in FY26.)
- **MPS:** DEA exemption for CPSEs to 1-Aug-2026 under SCRR Rule 19A(6); later status unconfirmed [V-snip].
- **Railway land for towers (late 2022):** all 68 divisions may license private telcos/IPs; fee 1.5% of land market value p.a. (was a 7% revenue share); 2-month reclaim clause; no advertising rights [V-snip].
- **700 MHz:** Cabinet 9-Jun-2021; 5 MHz paired assigned to IR on 22-Oct-2021; >₹25,000 Cr, 5-year plan. Status: CMD "not aware" of progress (May-2026) [V-snip; V transcript].
- **RBI (7-Oct-2026):** repo 5.50% (+25 bp, unanimous); SDF 5.25%; MSF 5.75%; stance "calibrated tightening" (4–2); FY27 CPI forecast 5.2%, GDP 7.1% [V-snip].

---

## 4.4 Gap log (§H items)

| §H # | Gap | Status after this pass | How / source |
|---|---|---|---|
| 1 | Order-book split (nomination vs competitive, client, segment); ₹11,747 vs ">₹10,400" | **Partly filled.** Conflict resolved (S2). Railway 23.5% incl. Kavach ₹1,007 Cr and MoR e-Office ₹334.5 Cr. Ind AS 115 shows 98.7% government customers. ICRA language on open tenders. **Nomination vs competitive split still undisclosed** | Transcripts; AR26 Note 54; ICRA; LoA press |
| 2 | FY25 inflow; 31-Mar-2025 book | **Partly filled.** Book ₹6,616 Cr (~May-2025, V-snip); Jan-2025 ~₹5,280 Cr (ICRA, V). FY25 inflow ₹3,146 Cr (single source) fails reconciliation (S23) | ICRA 2025; press |
| 3 | RailTel Kavach order values | **Filled:** ₹288.15 + ₹264.07 + ₹454.95 = ₹1,007.2 Cr; 2,176 RKM | NBM&CW [V]; BS, Indian Infrastructure [V-snip] |
| 4 | Legal basis of exclusive RoW; RoW Rules 2024 | **Partly filled.** Exclusivity is asserted in AR26/AR22 and by ICRA ("exclusive RoW to lay fibre along railway tracks"; 67,956 km / 7,325 stations in FY22). Consideration is the 7% revenue share on services. **Tower exclusivity ended in 2022** (LLF policy). The underlying MoR–RailTel agreement text (tenure, termination) was not found; CAG's 2010 PSU review would hold it but its URL served HTML. RoW Rules 2024 govern public-land RoW under the Telecom Act; nothing found that opens railway track RoW to others | AR26/AR22 [V]; ICRA [V]; LLF press [V-snip] |
| 5 | Kavach OFC/tower ownership | **Partly filled.** RailTel's WCR order includes "OFC laying, tower erection" under an **EPC** contract for the zone, i.e. built for and owned by Indian Railways (S&T plan head); cable spec 2×48F "for Kavach, LTE etc." **Whether spare Kavach fibres can be commercialised by RailTel is undocumented** | NBM&CW [V]; ITI EoI [V-snip] |
| 6 | Official S&T budget | **Filled [V]:** ₹5,567.60 (FY25 A) / ₹6,500 (FY26 RE) / ₹7,500 Cr (FY27 BE) | Railway Budget at a Glance Stmt II |
| 7 | TRAI enterprise/NLD market data | **Still open.** Sector AGR ₹86,716 Cr/qtr (Mar-26) obtained; NLD-specific AGR and operator shares not fetched (TRAI PDFs return 503 / bad TLS) | TRAI PR copies [V-snip] |
| 8 | POWERTEL/GAILTEL | **Partly filled:** POWERTEL subsidiary since 1-Oct-2023, >1 lakh km, >3,000 locations, ₹698 Cr telecom revenue (FY20); GAILTEL ~11,000 km. No FY26 revenues | powergrid.in, gailonline.com [V-snip] |
| 9 | Airtel Business absolute revenue | **Still open.** Only growth: +12.0% YoY (Q1 FY27), +2.6% QoQ (Q4 FY26); India revenue ₹41,214 Cr (Q1 FY27) | Airtel press release copies [V-snip] |
| 10 | DC MW / utilisation | **Partly filled:** "already have 3 MW" (Q4); Noida 5 MW (Q4) vs 10 MW (Q1) by May-2027; +0.5 MW Hyderabad, +0.5 MW Noida; leased partner space (Anant Raj, Adani). **Utilisation not disclosed**; DC segment reporting "planning" | Transcripts [V] |
| 11 | RailWire economics | **Approximately filled:** RailWire expenses ₹228.52 Cr ≈ 65% of ~₹350 Cr revenue → RailTel keeps ~35% gross. Formal partner revenue-share % not published | AR26 Note 31 [V]; E |
| 12 | DPS FY21–FY25 | **Filled:** ₹2.20 / 2.40 / 2.55 / 2.85 / 2.85 | AR26 10-yr table [V] |
| 13 | Collection account nature | **Filled:** unrestricted cash (earmarked balances shown separately); seasonal year-end receipts; ₹40 → ₹300 Cr FY23–26 | AR22/24/26 Notes 12–13 [V] |
| 14 | Q2 FY27 | **Open by design.** Board 25-Oct-2026 | BSE letter [V] |
| 15 | Government ICT SI market size | **Still open.** No primary market sizing found; proxy remains RailTel's own "other projects" plus Ind AS 115 government share | — |
| 16 | Kavach unit costs | **Filled (official benchmark):** ~₹50 lakh/km trackside, ~₹80 lakh/loco (parliamentary replies, V-snip). RailTel's awards ~₹46 lakh/RKM incl. GST [E from V] | Parl. replies; S4 |
| 17 | MPS deadline | **Partly filled:** exemption to 1-Aug-2026 under SCRR 19A(6); post-Aug status unconfirmed | BS / Drishti [V-snip] |
| 18 | FY21–22 segment mismatch | **Filled:** consolidated (incl. REL) vs standalone (S8) | AR22 [V] |
| 19 | Capex and growth guidance conflicts | **Filled / clarified:** growth 20% (May) → 25% affirmed (Jul); capex ₹300 Cr (call) vs ₹241 Cr (AR) remains | Transcripts [V] |
| 20 | Screener P/E 19.8 vs 21.2× | **Still open.** 19.8 implies EPS ₹11.57 / PAT ₹371 Cr, which matches no reported period (TTM ₹10.78; FY26 ₹10.79). Likely a screener data lag. **Use 21.2× and footnote** | screener [V] |

**Tally:** filled 8 (3, 6, 12, 13, 16, 18, 19, and 11 approximately); partly filled 7 (1, 2, 4, 5, 8, 10, 17); still open 5 (7, 9, 15, 20, plus 14 by design).

---

## 4.5 New insights the first pass missed

1. **The telecom "annuity" is sticky but not contracted.**
   - RailTel books ₹1,459.5 Cr of telecom revenue as lease income. Yet only **₹184 Cr of future lease receipts are non-cancellable** (₹113 Cr within a year) [V AR26 Note 55B].
   - Government customers renew by annual PO, and revenue is accrued only once a PO exists (Q1 NLD −4.6% on delayed renewals) [V Q1 p.3–4].
   - The ~39% EBITDA telecom stream is therefore a **re-priced, re-ordered service book**: excellent retention (incumbency, security clearance, RoW), but exposed every year to price resets. Value it as a high-retention service franchise, not a contracted infrastructure lease. The SOTP in §10 should use a lower multiple than fibre InvITs with 15–20-year MSAs.
2. **The real working-capital engine is supplier credit, and it is changing character.**
   - Receivables + unbilled = ₹2,951 Cr, funded mainly by **trade payables ₹1,674 Cr (MSME ₹987 Cr, ×2.2 YoY)** and other financial liabilities ₹865 Cr [V].
   - ICRA calls the WC intensity "negative/very low" because receivables are "backed with subcontractors' liability". Customer advances, though, fell from ₹372 Cr to ₹231 Cr, and MSME vendors have 45-day statutory payment protection.
   - **If the back-to-back float shrinks, the 175-day receivable cycle hits RailTel's own cash.** That cash was ~₹319 Cr at Sep-2025 (ICRA) against a Mar-2024 peak of ~₹1,006 Cr [V].
3. **Guarantee capacity, not equity, is the binding constraint on project growth.**
   - BGs outstanding doubled to **₹1,482 Cr (65% of net worth)**. ICRA raised non-fund limits to ₹1,775 Cr and cut unallocated headroom from ₹1,053 Cr to ₹190 Cr [V].
   - Another doubling of the project book would need fresh BG lines.
   - Contingent liabilities ₹447 Cr (91% arbitration/court) are a Key Audit Matter [V].
4. **The ageing tail is growing faster than revenue.**
   - Receivables >1 year +38% (₹453 → ₹626 Cr); >3 years +48% (₹161 → ₹238 Cr); **unbilled 1–2 years ×4 (₹53 → ₹216 Cr)**. Revenue grew 23% [V].
   - The ECL allowance (6.5% of gross) trails the stressed buckets (₹170 Cr). "Exceptional" ECL of ₹20–30 Cr/yr is the floor, not the ceiling [E].
5. **Dividend policy: the old 5%-of-NW rule mattered more than the 30% rule.**
   - FY18–FY24 dividends were ~5.0% of net worth every year. That is why payout ran at 37–58%.
   - DIPAM's Nov-2024 cut to 4% means DPS was held flat at ₹2.85 in FY25 despite +22% PAT [V].
   - Going forward DPS ≈ 30% × EPS (₹3.25 FY26; ~₹3.9–4.0 FY27E at the 25% growth path [E]).
6. **S&T is growing faster than total railway capex, but it is small.**
   - ₹7,500 Cr (2.6% of capex): +15.4% vs FY26 RE against +10.5% for total capex, and +35% over two years [V Budget]. Leased assets (+41%), doubling (+30%) and new lines (+20%) grow faster.
   - Kavach takes ~28% of it. RailTel's three Kavach awards (₹1,007 Cr incl. GST) equal ~13% of one year's S&T budget and ~10% of the trackside RKM taken up.
   - The ~₹40–45k Cr remaining Kavach TAM is **mostly OEM equipment and loco fitment**: HBL won a ~₹1,714 Cr CLW loco order; RailTel has no loco position.
7. **BharatNet is a budget line, not a spend line.** FY26 BE ₹22,000 Cr → RE ₹5,500 Cr; FY25 actual ₹3,995 Cr [V DfG]. Any thesis that RailTel benefits from BharatNet capex should be dropped; its role is an IE fee.
8. **Railway exclusivity is narrower than "exclusive RoW" implies.**
   - Fibre RoW along track remains exclusive (AR, ICRA). But **towers on railway land were opened to private IPs/telcos in 2022** at 1.5% of land value [V-snip].
   - The **Kavach build is creating a second, railway-owned 2×48F fibre plant** under EPC contracts, some executed by RailTel itself [V].
   - The strategic question for 2027+ is who operates and monetises that spare fibre. RailTel (as O&M operator/lessor) is the natural candidate, but no policy exists yet.

## 4.6 New primer issues (`primers/railtel.html`), in addition to Part 3 §3.4

### From Other Telecom Services deep-research pass (2026-10-23, other-telecom-industry.md §4.6)

- **railtel.html — FY27 guidance is now ~25%, not ~20%.** On the Q1 FY27 call (31-Jul-2026) the CMD answered "Yes. Yes." to "we maintain… 25% of revenue". The ~20% figure dates from 1-May-2026. Show "20–25% (latest 25%)" and project revenue ₹3,000–3,500 Cr. (§00, §10)
- **railtel.html — Kavach: add order values.** Three trackside orders worth **₹1,007 Cr incl. GST over 2,176 RKM**:
  - ECR ₹288.15 Cr / 502.2 RKM (Feb-2025).
  - ECR ₹264.07 Cr / 607 RKM (Jul-2025).
  - WCR Jabalpur ₹454.95 Cr / 1,067 RKM (Feb-2026).
  - ≈ ₹46 lakh/RKM vs the ministry's ~₹50 lakh/km benchmark; ~9% of the order book.
  - Quadrant (RailTel's OEM) has been in RDSO passenger trials since 26-May-2026; no final approval was found as of 23-Oct-2026. (§11)
- **railtel.html — the telecom "annuity" wording needs a qualifier.** AR26 Note 55B: telecom services are lease income of ₹1,459.5 Cr, but only **₹184 Cr is non-cancellable** (₹113 Cr within one year). Revenue renews by government PO (Q1 FY27 NLD dipped on delayed renewals). Say "recurring and sticky, but renewed annually". (§04, §08, §10)
- **railtel.html — balance-sheet risks to add:**
  - Bank guarantees **₹1,482 Cr** (×2 YoY; 65% of net worth).
  - Contingent liabilities **₹447 Cr** (₹406 Cr arbitration/court; a Key Audit Matter).
  - Receivables >1 yr **₹626 Cr**.
  - Unbilled 1–2 yrs **₹216 Cr** (×4).
  - MSME payables **₹987 Cr** (×2.2).
  - NE project impairment ₹121 Cr cumulative.
  - (§10 risks box)
- **railtel.html — cash is not "flat ~₹780 Cr".** ICRA puts cash and liquid investments at ~₹1,006 Cr (Mar-2024) and **~₹319 Cr (Sep-2025)**. Mar-2026 ~₹777 Cr includes ₹300 Cr sitting in collection accounts at year-end. Qualify any "cash-rich" language. (§10/§11)
- **railtel.html — dividend history and rule.**
  - DPS ₹2.20 (FY21) · 2.40 · 2.55 · 2.85 · 2.85 · 3.25 (FY26).
  - Through FY24 the binding DIPAM floor was **5% of net worth** (paid 5.0% every year). The Nov-2024 revision to 4% NW / 30% PAT explains the payout falling to ~30%. (§10)
- **railtel.html — S&T budget.** If the primer cites railway signalling spend, use the **Budget figure ₹7,500 Cr FY27 BE** (FY26 RE ₹6,500 Cr; FY25 actual ₹5,567.6 Cr) and Kavach ₹2,066 Cr (≈28% of S&T). Railway capex ₹2,93,030 Cr incl. ₹12,000 Cr EBR-Partnership. (§02, §08)
- **railtel.html — tower exclusivity ended in 2022.** Railway land is now open to private tower companies at 1.5% of land value p.a. If the primer implies exclusivity for towers or station co-location, limit "exclusive" to **fibre RoW along the track** (AR26, ICRA). (§02, §08)
- **railtel.html — credit rating.** Add **ICRA AA (Stable)/A1+, reaffirmed 17-Feb-2026** (₹2,000 Cr limits). ICRA flags moderating OPM, elevated receivables, dividend obligations, and the "IR policy shift towards open tenders involving private parties". (§10)
- **railtel.html — Navratna and IPO facts.**
  - Navratna by DPE letter of **30-Aug-2024** (22nd Navratna).
  - IPO = GoI OFS of **8,71,53,369 shares at ₹94** (₹10 + ₹84), listed 26-Feb-2021 (≈₹819 Cr, all to GoI). (§01 timeline)
- **railtel.html — data-centre capacity statements conflict.** Q4 call: "5 MW by May-2027"; Q1 call: "10 MW facility… by May 2027". Show "5–10 MW Noida by ~May-2027". Note the asset-light model: RailTel leases partner shells (Anant Raj, Adani) and sells managed/cloud services. That is why DC revenue per MW (~₹67 Cr) is far above colocation yields. (§07)
- **railtel.html — RailWire economics.** "RailWire expenses" (partner payouts/last mile) were **₹228.5 Cr against ~₹350 Cr revenue**, so RailTel keeps roughly a third. Use it if the primer discusses RailWire profitability. (§06)
- **railtel.html — railway order examples.** The **₹334.5 Cr Ministry of Railways e-Office upgrade (Jun-2026, to 2031)** and the ₹167.5 Cr RRB Secunderabad order are better illustrations of railway captive/connectivity work than generic "nomination". (§05)
- **railtel.html — FY21/FY22 segment shares are consolidated.** If the primer charts telecom share from FY21, footnote that FY21–22 segment data include the former subsidiary RailTel Enterprises (merged 2023). (§04 chart)
- **railtel.html — internet subscriber figure.** If the primer quotes "1,306 mn internet subscribers" from the AR, replace it with TRAI's **1,092.79 mn (Mar-2026; wired 46.54 mn)**. (§02)

## 4.7 New source URLs (this pass)

- **Union Budget 2026-27, Railway Budget at a Glance:**
  - https://www.indiabudget.gov.in/doc/eb/railstat2.pdf (Statement II, Railway Expenditure, incl. item 24 S&T) [V]
  - https://www.indiabudget.gov.in/doc/eb/railstat4.pdf (Statement IV, Investment) [V]
  - https://www.indiabudget.gov.in/doc/eb/railstat3.pdf (receipts) [V]
- **Notes on Demands for Grants 2026-27, Demand No. 13 (DoT):** https://www.indiabudget.gov.in/doc/eb/sbe13.pdf [V]
- **ICRA RailTel rationales:**
  - 17-Feb-2026: https://www.icra.in/Rating/GetRationalReportFilePdf?id=140966 [V]
  - 18-Feb-2025: https://www.icra.in/Rating/GetRationalReportFilePdf?id=133064 [V]
  - Limits change 22-Apr-2026: https://www.icra.in/Rating/GetRationalReportFilePdf?id=142542 [V, no new analysis]
- **ICRA DC research (25-Sep-2025):** https://www.icra.in/Research/ViewResearchReport/india-s-digital-backbone-to-strengthen-with-rs-90-000-crore-data-centre-impetus-during-fy2026-fy2028/6543 [V]
- **RailTel Navratna filing (30-Aug-2024):** https://www.bseindia.com/xml-data/corpfiling/AttachHis/8e9d67e3-fbc4-47e7-896d-194113f29137.pdf [V]
- **Lok Sabha reply 5-Aug-2026 (IANS copy):** https://www.socialnews.xyz/2026/08/05/indian-railways-utilises-39-pc-of-fy27-capex-spent-till-july-govt/ [V]
- **RailTel WCR Kavach:** https://www.nbmcw.com/news/railtel-wins-rs-455-cr-order-to-install-kavach-system-on-1-067-km-in-jabalpur-division.html [V]
- **RailTel ECR Kavach:**
  - https://www.business-standard.com/markets/news/railtel-share-rises-3-on-rs-288-crore-order-win-from-east-central-railway-125022400147_1.html [V-snip]
  - https://indianinfrastructure.com/2025/07/17/railtel-secures-rs-2-64-billion-kavach-system-contract-from-east-central-railway/ [V-snip]
- **Quadrant trials:** https://hdfcsky.com/news/quadrant-future-tek-gets-kavach-passenger-trial-approval-shares-surge-10-50-percent [V-snip]
- **Progota:** https://themachinemaker.com/news/concord-control-systems-progota-india-secures-rdso-clearance-for-kavach-4-0-paving-way-for-nationwide-deployment/ [V-snip]
- **Kavach OFC series:** https://indianinfrastructure.com/2026/02/20/indian-railways-deploys-8570-km-of-optical-fibre-cable-for-kavach/ [V-snip]
- **TRAI Jan–Mar 2026 PIR (copy):** https://www.civilsdaily.com/news/indian-telecom-services-performance-indicator-report-jan-mar-2026/ [V-snip]; originals https://www.trai.gov.in/sites/default/files/2026-06/PR_No.76of2026.pdf and https://trai.gov.in/sites/default/files/2026-10/PR_No135of2026.pdf (503/TLS failure on fetch)
- **MPS exemption:** https://www.business-standard.com/companies/news/govt-extends-minimum-public-shareholding-deadline-for-psus-till-aug-2026-124080100534_1.html [V-snip, 403 on fetch]
- **DIPAM 2024 guidelines:** https://www.theweek.in/wire-updates/business/2024/11/18/dcm97-biz-cpse-restucturing.html · https://foxmandal.in/News/revised-guidelines-for-capital-restructuring-by-cpses-released/ [V-snip]
- **Railway-land towers policy:** https://www.outlookbusiness.com/news/private-telecom-companies-get-permission-for-setting-up-towers-on-railway-lands-report-news-248283 [V-snip]
- **POWERTEL:** https://www.powergrid.in/sites/default/files/annual_reports/DirectorsReportPowerTel.pdf (503 on fetch; V-snip) · **GAILTEL:** https://gailonline.com/gailtel.html [V-snip]
- **Recent RailTel orders:** https://www.freepressjournal.in/business/railtel-secures-16680-crore-work-order-extension-from-epf-organisation · https://www.zerodha.com/markets/stocks/NSE/RAILTEL/ [V-snip]
- **RBI Oct-2026:** https://www.gktoday.in/rbi-hikes-repo-rate-by-25-basis-points-to-5-50/ [V-snip]

*End of Part 4.*
