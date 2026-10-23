# Indian Computer Hardware & AI Servers (IT || Computers Hardware & Equipments): Research Dossier + Company Fact Pack

Compiled 2026-10-23 for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md), sections 0–12 plus A–H.
- **Part 2** is the company fact pack for the single member, Netweb Technologies (brief-companies.md), plus a reference-peer pack.
- **Part 3** is the company-KPI appendix: summary grid, reference-peer grid, aggregates, reconciliation vs our primer, primer issues and source URLs.

**Member (1, Tier C):** Netweb Technologies India Ltd (NETWEB · 543945), primer `primers/netweb-technologies.html` (refreshed 13-Jul-2026).
**Display name:** Computer Hardware & AI Servers. **Slug:** computer-hardware.
**Framing:** single-company sub-sector. The report is about the whole Indian server / high-end computing hardware industry, with Netweb as the lens. Reference peers are used for scale, margins and valuation. They are NOT members, and no "sector total" should be quoted as if they were.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source (URL inline or in §3.5).
- **[V-snip]** = verified only from a search-result summary or a secondary article, not the primary document.
- **[K]** = well-established public fact from memory. The source is named but was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present it as "approx." or as a range.
- **[primer]** = from our own primer in `primers/` (Netweb refreshed 13-Jul-2026; Dixon 3-Jul-2026; Redington 14-Jul-2026; Kaynes and Syrma 13-Oct-2026).
- **[screener 23-Oct-26]** = screener.in pages pulled 23-Oct-2026, ~4 pm IST. **Netweb's consolidated page is empty on screener; all Netweb screener figures are the standalone page** (Netweb's subsidiary is immaterial; the company itself publishes standalone results, per its 28-Jul-2026 filing "unaudited standalone financial results" [V]).
- **[co. Q1 PPT]** = Netweb Q1 FY27 earnings presentation filed on BSE 28-Jul-2026 [V]. **[co. Q1 call]** = Q1 FY27 earnings-call transcript (call held 29-Jul-2026; transcript on BSE) [V]. **[co. Q4 PPT]** = Q4/FY26 presentation filed on BSE 2-May-2026 [V].

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million. ₹ lakh crore = ₹1 trillion. ₹ million (mn) is what Netweb reports in: ₹10 mn = ₹1 Cr.
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. Netweb and all Indian reference peers have a March year-end.
- Global peers have different fiscal years: **Dell** FY ends ~31-Jan (Dell "Q2 FY27" = May–Jul 2026); **Supermicro** FY ends 30-Jun (FY26 = Jul-2025 to Jun-2026); **Lenovo** FY ends 31-Mar (Lenovo "Q1 FY26/27" = Apr–Jun 2026); **HPE** FY ends 31-Oct. IDC data is calendar quarters (2Q26 = Apr–Jun 2026).
- **FX: ₹94.9 = US$1** (19-Oct-2026 spot; record low near ₹96.8) — used for all USD↔₹ conversions in this file unless a period rate is stated. Historical USD figures (e.g. FY23–FY25 import values) are left in USD at the rate of their period; where I convert an FY26 rupee number to USD I say "at spot ₹94.9" (it understates the dollar value booked at FY26's average rate, which was roughly ₹86–88/$ [K/E]).
- Macro context (shared across sibling dossiers): RBI repo **hiked to 5.50% on 7-Oct-2026**; Nifty **22,780 on 28-Sep-2026**; **West Asia crisis from 28-Feb-2026** (energy and freight shock); US tariffs on India: IEEPA tariffs struck down 20-Feb-2026; Sec 122 10% until 24-Jul-2026; since then 10% Sec 301 on top of MFN. For Netweb these tariffs barely matter: exports are only ~4–5% of revenue and "not a focus" (CMD, Q1 FY27 call) [V].
- "GPU" = graphics processing unit (accelerator). "HGX B200 / GB200 / GB300 / B300" = NVIDIA Blackwell-generation platforms (8-GPU baseboard servers vs rack-scale Grace-Blackwell systems). "HBM" = high-bandwidth memory stacked on the GPU package. "HCI" = hyper-converged infrastructure. "HPC" = high-performance computing (supercomputing). "PPP-MII" = Public Procurement (Preference to Make in India) Order. "L1" = lowest bidder (won, order not yet received).

**Q2 FY27 status (as of 23-Oct-2026): Netweb's board meets TOMORROW, 24-Oct-2026. Q1 FY27 (Jun-26) is the latest reported quarter. The writer must refresh with Q2 numbers if the report goes out after 24-Oct.**

| Company | Q1 FY27 result (board date) | Q2 FY27 board date / status |
|---|---|---|
| **Netweb (member)** | **28-Jul-2026** (presentation filed 28-Jul; call 29-Jul) [V co. Q1 PPT / transcript] | **Board 24-Oct-2026** to approve Q2/H1 results; post-results call **26-Oct-2026, 3:30 pm IST** (hosted by ICICI Securities last time) [V screener announcements 17-Oct and 20-Oct]. Trading window closed 28-Sep [V]. |
| E2E Networks (ref.) | Jul-2026 | **Already reported**: Q2 FY27 revenue ₹224 Cr, OP ₹171 Cr (77%), PAT ₹73 Cr; call 16-Oct-2026 [V screener] |
| Dixon (ref.) | Jul-2026 | Board intimation filed 23-Oct-2026 for Q2/H1 (date inside PDF, not read) [V screener] |
| Syrma SGS (ref.) | Jul/Aug-2026 | **Board 30-Oct-2026** [V screener] |
| Kaynes (ref.) | Jul/Aug-2026 | Not announced; trading window closed from 1-Oct [V screener] |
| Redington (ref.) | Jul/Aug-2026 | Not announced; trading window closed 25-Sep [V screener] |
| Rashi Peripherals (ref.) | Jul/Aug-2026 | Not announced; trading window closed from 1-Oct [V screener] |

**Still listed?** Netweb is listed on NSE and BSE (screener page live, shareholding to Sep-2026, board meeting scheduled) [V]. **Live corporate actions that change the analysis:**
1. **QIP (equity raise), August 2026.** Board/stock-exchange alert of **18-Aug-2026**: QIP with a **floor price of ₹4,885.90** and up to 5% discount [V-snip: Muthoot Securities stock alert dated 18-Aug-2026]. The Q1 call (29-Jul) had described only "an enabling resolution" of about ₹1,200 Cr, "largely for working capital, no M&A" [V co. Q1 call]. Screener now implies **~5.95 crore shares** (₹25,782 Cr ÷ ₹4,336) vs **5.694 crore** at Jun-26 (equity capital ₹113.88 mn at ₹2 FV) [V; E arithmetic] — i.e. **~25 lakh new shares (~4.4% dilution)**, and **promoter holding fell from 66.98% (Jun-26) to 64.16% (Sep-26)** [V screener], consistent with dilution rather than a promoter sale. **Implied raise ≈ ₹1,170–1,230 Cr** [E: 25 lakh × ₹4,640–4,886]. I did not find the placement-document or allotment filing: **treat the amount as an estimate; the writer should verify (BSE announcements, late Aug / Sep 2026).**
2. **Promoter stake also fell 71.00% → 66.98% between Dec-25 and Mar-26** [V screener] while share capital barely moved (₹113.31 mn → ₹113.88 mn, ESOPs) [V co. Q1 PPT]. That ~4-point drop looks like a **promoter sale (block/OFS)** in Jan–Mar 2026 — **not found in this session; flag**. (An earlier promoter block of 3.64% at ~₹2,232/share, ~₹458 Cr, took place in Aug-2024 [V-snip Business Standard].)
3. **Accounting-policy change:** inventory valuation moved from FIFO to **moving weighted-average cost** (FY25 comparatives restated; "impact not material") [V co. Q1 PPT].
4. Morningstar Sustainalytics ESG risk rating **21.4 (Medium)**, 23-Sep-2026 [V screener]. CRISIL rating actions on 25-May-2026 and 10-Jun-2026 (content not read) [V screener list].

---

## READ THIS FIRST: nine definitional traps

1. **"Order book" at Netweb has three layers and changed definition between quarters.**
   - **Order book (firm POs)**: ₹2,097.6 Cr at 31-Mar-26 = **organic ₹472.4 Cr + "strategic big-ticket orders" ₹1,625.2 Cr** [V co. Q4 PPT]; **₹2,506.9 Cr at 30-Jun-26** [V co. Q1 PPT].
   - **L1** (won, PO not yet received): ₹327.8 Cr (Mar-26) → **₹848.0 Cr (Jun-26)** [V]. The CMD calls OB + L1 "co-order book" ≈ **₹3,400 Cr** [V co. Q1 call].
   - **Pipeline** (bids/funnel, excludes L1 and OB): ₹4,431.5 Cr (Mar-26, *excluding* strategic) → **₹10,410 Cr (Jun-26, now *including* strategic opportunities, "merged")** [V co. Q4 PPT; co. Q1 call: "our pipeline of INR4,400 crores without the strategic, now it is merged"]. **So the pipeline did not "more than double like-for-like"** — the basis changed. Management guides **~60% conversion over 18–24 months** [V].
   - The primer's "~₹2,100 Cr order book (~₹2,400 Cr incl. L1)" is the Mar-26 figure and is correct for that date (2,097.6 + 327.8 = 2,425) [V].
2. **"Strategic order" ≠ the ₹1,734 Cr IndiaAI order — or maybe it is. Do not assert either.**
   - 3-Sep-2025: Netweb announced a **₹1,734 Cr order** to build sovereign AI compute under the IndiaAI Mission, from "one of the largest Indian-headquartered global providers of technology distribution and integrated supply chain solutions" (customer unnamed; the description fits Redington [E — do not print as fact]); **NVIDIA HGX B200 8-GPU nodes on Tyrone Camarero**; execution **Q4 FY26 to H1 FY27** [V-snip: Business Standard, HDFC Sky, The Machine Maker, Entrepreneur].
   - The company separately reports "**Strategic Order of Value ₹558.8 Cr executed in FY26**" [V co. Q4 PPT], a strategic book of **₹1,625.2 Cr at Mar-26** [V], and "**close to ₹430 Cr**" of the "₹1,600 Cr strategic order" **executed in Q1 FY27** [V co. Q1 call].
   - 558.8 + 1,625.2 = ₹2,184 Cr executed + outstanding, **more than ₹1,734 Cr** → there is **more than one strategic order** (or GST/scope differences). Treat "strategic" as a basket of large sovereign/IndiaAI-type orders.
   - From Q1 FY27 management says "there is no strategic order now. All orders are normal orders… The strategic is the new normal" [V co. Q1 call] — the label is being dropped, so future quarters will not separate it.
3. **Netweb's EBITDA has three versions.**
   - **Screener OP**: FY26 ₹285 Cr (13%) [V screener].
   - **Company "Operating EBITDA"** (PBT + D&A + finance cost − other income): FY26 **₹284.8 Cr (13.04%)** [V co. Q4/Q1 PPT].
   - **Company "Adjusted Operating EBITDA"**: FY26 **₹290.1 Cr (13.3%)**, adding back ₹5.24 Cr of hedging gains booked in other income that offset MTM losses on foreign-currency payables [V co. Q4 PPT]. **The primer's "~₹290 Cr, 13.3%" is this adjusted figure.** Use ₹285 Cr / 13.0% in tables and mention the adjustment.
4. **Revenue segments: Netweb reports six offerings, but analysts (and the primer) talk about three pillars.**
   - Six: HPC/supercomputing; private cloud & HCI; AI systems; high-performance storage (HPS); data-centre servers; software, services, spares and others [V co. Q1 PPT].
   - FY26 (₹ Cr): **AI 947.8 (43.4%)**, **HPC 530.8 (24.3%)**, **private cloud 517.0 (23.7%)**, **other three 188.0 (8.6%)** [V co. Q1 PPT segment chart, ₹ mn ÷ 10; shares E]. **Q1 FY27: AI 510.6 (62.3%), HPC 125.3 (15.3%), private cloud 135.3 (16.5%), others 48.5 (5.9%)** [V].
   - The primer's FY26 split (43/24/24/9) is right.
5. **Gross margin is not disclosed by the company in its presentation, and screener's material-cost line was not captured in this session.** Any gross-margin number in this file is **[E]**. The economic point — GPU-heavy AI systems carry a much lower gross margin % than HPC or private cloud because the GPU baseboard is a near pass-through — is structural and well-attested across the industry (Supermicro FY26 GAAP gross margin **10.8%** [V]), but Netweb's own gross margin by segment is not public.
6. **"Customer concentration" exploded in Q1 FY27 because of the strategic order(s).** Top-10 customers: FY24 64.5% → FY25 65.8% → FY26 76.4% → **Q1 FY27 87.7%**; top-5: 50.3% → 50.8% → 62.2% → **81.2%** [V co. Q1 PPT]. Revenue from repeat customers: 69.0% / 81.4% / 75.6% / **98.9%** [V]. The primer's line that "131 new customers in FY26… reduce reliance on any single account" is directionally wrong for FY26–Q1 FY27: **concentration rose**.
7. **Cash-conversion cycle: company vs screener differ a lot.**
   - Company (average-balance basis): **FY25 73 days → FY26 84 → Q1 FY27 96** (receivables 78, inventory 110, payables 92 in Q1) [V co. Q1 PPT].
   - Screener (year-end basis): FY26 debtor 112 / inventory 170 / payable 161 → **CCC 121 days**; FY25 83 [V screener].
   - **Use company figures in prose and say "average-balance basis"**; quote screener only as a year-end snapshot.
8. **Net cash flipped to net debt in Q1 FY27, then (probably) back after the QIP.** Company net debt (borrowings + leases − free cash): **Mar-25 −₹162 Cr (net cash) → Mar-26 −₹124 Cr → Jun-26 +₹200 Cr (net debt)**; borrowings ₹271.7 Cr (Mar-26), ₹262.5 Cr (Jun-26); free cash ₹406.6 Cr → **₹73.4 Cr** [V co. Q1 PPT]. Finance cost jumped to ₹11.5 Cr in Q1 (₹1.0 Cr a year ago) [V]. Post-QIP (~₹1,200 Cr [E]) Netweb should again be net cash of roughly ₹1,000 Cr [E] — **confirm in the Sep-26 balance sheet (24-Oct results)**. The primer's "zero net debt; ~₹365 Cr cash vs ~₹280 Cr borrowings" was true at Mar-26 only.
9. **Market-size numbers for "India servers" are not comparable across sources.** IMARC: India server market **$3.9 bn (2024)**; TechSci: **$1.68 bn (2025)**; Mordor: India data-centre server market **$6.55 bn (2025)** [all V-snip]. Netweb's own commissioned report (1Lattice) sizes overlapping *solution* markets instead: India HPC **₹71.4 bn**, private cloud & HCI **₹456.7 bn**, AI infrastructure **₹115.4 bn** (all FY26) [V co. Q1 PPT]. These overlap and include software/services. **Never add them.** Quote a range and the basis every time.

---

## 0. Top-line framing (what an expert leads with)

- **India's high-end computing hardware is a ~₹1–1.3 lakh crore pass-through market dominated by global brands and Taiwanese ODMs, with exactly one listed Indian designer-OEM: Netweb.**
  - Global server market: **$166.3 bn in a single quarter (2Q26), +52% YoY**; ODM Direct 53.9%, Dell 13.4%, Supermicro 6.1%, Lenovo 5.1%, HPE 3.5%, IEIT 2.4% [V IDC 10-Sep-2026]. India is not broken out; Asia/Pacific ex-Japan and China was **$10.9 bn (+31.5%)** [V IDC].
  - India server market: **~$2–6.5 bn a year depending on definition** (IMARC $3.9 bn 2024) [V-snip] → ~₹19,000–62,000 Cr at spot [E]. India PCs: **15.9 mn units in 2025**, the strongest year on record (HP 29.1%, Lenovo 18.7%, Dell 15.1% per IDC as reported) [V-snip IDC 5-Mar-2026].
  - Netweb FY26 revenue **₹2,184 Cr (+90%)** ≈ **$230 mn at spot ₹94.9** [V screener; E] — **under 0.2% of the global server market** and perhaps **4–10% of India's server spend** [E].
- **The AI wave has turned Netweb from an HPC boutique into an AI-server company in 18 months.**
  - AI systems revenue: **₹79.9 Cr (FY24) → ₹169.4 Cr (FY25) → ₹947.8 Cr (FY26) → ₹510.6 Cr in Q1 FY27 alone (62.3% of revenue, +484% YoY)** [V co. Q1 PPT].
  - Q1 FY27 revenue **₹819.7 Cr (+172% YoY)**, operating EBITDA **₹120.5 Cr (14.7%)**, PAT **₹85.3 Cr (+180%)** [V]. TTM revenue ₹2,702 Cr, TTM PAT ₹261 Cr [V screener].
- **Demand is sovereign first, enterprise second.** The IndiaAI Mission (**₹10,372 Cr**, 2024) has onboarded **45,000+ GPUs** of shared compute as of Jun-2026 (from ~38,000 in Feb-2026) and served **93.18 lakh GPU-hours to 237 projects** by Aug-2026; **20 indigenous foundation models** selected (12 large multimodal + 8 small) [V PIB factsheet 13-Aug-2026]. Netweb's milestones list: an order for AI infrastructure for "India's foundational LLM model with over 5,000 GPUs" (2025), CERT-In's sovereign cyber-secure compute (650+ units, 2026) and NIC's government-owned on-prem AI cloud on NVIDIA Grace Blackwell under IndiaAI (2026) [V co. Q1 PPT].
- **The economics are "thin gross, decent EBITDA, heavy working capital".**
  - Netweb guides **13–14% EBITDA** regardless of mix [V co. Q1 call]; FY26 13.0% (adj. 13.3%), Q1 FY27 14.7% [V].
  - **Working capital is the binding constraint, not capacity**: the plant can support "₹3,000-plus crores" of turnover without major capex [V co. Q1 call]; inventory days were deliberately raised to **110** to hedge memory/GPU shortages; Netweb went net-debt in Jun-26 and raised ~₹1,200 Cr of equity in Aug-26 [E] "only for working capital".
  - Global comparison: Supermicro burned **$6.8 bn of operating cash in FY26** as inventory rose ~$8.9 bn [V 8-K]. **Growth in AI hardware consumes cash everywhere.**
- **The global server cycle is at a historic high and still accelerating.** Dell booked **$60.9 bn of AI server orders in one quarter** (Q2 FY27), with a **$95 bn backlog** and FY27 AI-server revenue guided at **~$74 bn (≈3× FY26)** [V Futurum 9-Sep-2026]; Supermicro guided FY27 at **$65–72 bn** vs $39.1 bn [V 8-K]. **GPU server ASPs rose ~44% YoY to ~$170,000** (IDC 2Q26) [V].
- **Policy is the moat and the risk.** PPP-MII Class-I local-supplier preference, NSM 2.0's "build and design in India" turn, PLI IT Hardware 2.0 (₹17,000 Cr outlay, 27 approved firms incl. Dell, HP, Lenovo, Foxconn, Dixon), the laptop/server Import Management System (renewed for CY2026), and Semicon India (₹76,000 Cr 1.0 + **₹1,27,500 Cr 2.0 approved Jul-2026**) [V PIB] — all tilt demand toward local builders. But the same global OEMs are localising (Dell, HP, Lenovo under PLI; Lenovo AI servers at Puducherry; HPE with VVDN [K]).
- **Valuation (screener 23-Oct-26):** **₹25,782 Cr m-cap at ₹4,336; P/E 98.9× TTM (125× FY26); P/B 34×; ROCE 37.5%, ROE 32.8%** [V]. 52-week range ₹2,920–5,813 [V]: the stock is **25% below its high**, despite the record quarter. The primer's "~₹25,000 Cr (Jul-26)" is still about right; its "~100–120× trailing" is now ~99× TTM.

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Products

| Product family | What it is | Main buyers | Indian suppliers (listed / unlisted) | Global suppliers |
|---|---|---|---|---|
| **AI systems (GPU servers, rack-scale AI)** | 4–8 GPU servers (HGX H100/H200/B200/B300), rack-scale NVL72 (GB200/GB300), AMD MI300/MI325X; liquid cooling; InfiniBand/Ethernet fabric | GPU clouds ("neoclouds": Yotta, E2E, Jio, Tata Comm, CtrlS, Sify, NxtGen…), IndiaAI-empanelled providers, foundation-model labs, govt (NIC, CERT-In), large enterprises | **Netweb (Tyrone Camarero)**; distributors (Redington, Rashi, Ingram) as channel | Dell, Supermicro, HPE, Lenovo, Gigabyte, ASUS; ODMs (Foxconn, Quanta, Wiwynn) for hyperscalers |
| **HPC / supercomputers** | Clusters of CPU/GPU nodes + fast interconnect + parallel storage + scheduler/middleware | NSM (C-DAC, IITs, IISc, IISERs), ISRO, IMD/IITM (weather), DAE, defence labs, pharma/auto R&D | **Netweb** (Airawat, PARAM Yuva II, PARAM Ambar, ISRO VSSC) [V co. PPT]; **C-DAC** (PARAM Rudra indigenous servers) [K] | HPE/Cray, Atos/Eviden, Lenovo, Dell, NEC, Fujitsu |
| **Private cloud & HCI** | Turnkey on-prem cloud (compute + storage + network + software) | BFSI, PSUs, telcos, state data centres, IT/ITeS | **Netweb (Tyrone Skylus)** | Nutanix (software) on Dell/HPE/Lenovo hardware; VMware/Broadcom; Red Hat |
| **High-performance storage** | Parallel file systems, unified / object storage | HPC/AI sites, media, BFSI | **Netweb (Tyrone ParallelStor Velox, Opslag FS2)** [V co. PPTs] | DDN, NetApp, Dell, Pure (Everpure), IBM, VAST, Weka |
| **Data-centre servers (x86/ARM, general purpose)** | 1–2 socket rack servers (Intel Xeon, AMD EPYC Turin) | Enterprises, colos, govt | **Netweb**; contract assemblers (VVDN for HPE; Flex for Dell) [K] | Dell, HPE, Lenovo, Cisco, Inspur/IEIT (China) |
| **PCs, laptops, tablets, AIOs, USFF** | Client devices | Consumers, enterprises, education/govt | Assemblers under PLI: **Dixon (Padget Electronics — HP, others), Optiemus, Sahasra, VVDN, Foxconn India** [K/V-snip] | HP, Lenovo, Dell, Acer, ASUS, Apple |
| **Distribution / value-added distribution** | Wholesale of the above + credit + logistics + cloud | 70,000+ resellers, SIs | **Redington, Rashi Peripherals**, Ingram Micro India, Savex, Supertron [primer; K] | — |
| **GPU cloud (compute as a service)** | Renting GPUs by the hour | Start-ups, labs, IndiaAI | **E2E Networks**, Yotta (unlisted), Jio, Tata Comm, CtrlS, Sify, Netmagic | AWS, Azure, GCP, Oracle, CoreWeave |

### 1.2 Value chain (inputs → customer)

1. **Silicon (≈60–80% of an AI server's bill of materials; ≈30–50% of a plain server's)** [E]: GPUs/accelerators (NVIDIA ~85–90% of AI accelerators by value [K]; AMD; Intel Gaudi; Google TPU via cloud), CPUs (Intel, AMD, NVIDIA Grace, ARM), **HBM** (SK hynix, Samsung, Micron) is inside the GPU package; system DRAM (RDIMM) and enterprise SSDs (NAND) bought separately. **All imported**; India has no merchant leading-edge fab (Tata-PSMC Dholera fab and OSATs under construction [K]).
2. **Boards, power, cooling, chassis, networking**: motherboards (from Taiwanese ODMs or designed in-house — Netweb designs its own boards and chassis and runs an SMT line [V co. Q4 PPT]), PSUs, liquid-cooling (Vertiv partnership for liquid-cooled AI systems [V co. Q4 PPT]), NICs/switches (NVIDIA InfiniBand/Spectrum, Broadcom).
3. **System design, integration and manufacturing**: Netweb's Faridabad (Haryana) facility; a new **15,000 sq ft line for dense GPU AI systems** commissioned in FY26 [V co. Q4 PPT]. Global OEMs use ODMs (Foxconn, Quanta, Wiwynn, Inventec) or their own plants; in India, Dell (Sriperumbudur, via Flex) and HPE (with VVDN, Manesar) assemble servers; Lenovo makes servers at Puducherry [K].
4. **Software/middleware**: cluster management, schedulers, private-cloud stack, AI workbench (Netweb: Skylus.ai, Kubyts container platform, AI workspaces, GPU aggregation-disaggregation suite) [V co. PPTs].
5. **Channel**: direct (government tenders, large enterprises) or via distributors/SIs (Netweb's CERT-In deal "processed through our distributor"; the ₹1,734 Cr IndiaAI order came via a distributor) [V co. Q1 PPT; V-snip].
6. **Deployment, support, AMC**: on-site installation and multi-year support — the stickiness.
7. **End users**: government & defence, academia & research, GPU clouds/CSPs, BFSI and large enterprises, data-centre operators.

### 1.3 Where value is captured
- **NVIDIA captures most of the profit pool**: data-centre gross margin ~70%+ [K]. Memory makers capture the next slice in a shortage (DRAM contract prices up ~80% QoQ in Q2-2026, ~40% in Q3, ~20% expected in Q4 [V-snip TrendForce via 20-Oct-26 report]).
- **System OEMs keep a thin slice**: Supermicro gross margin **10.8%** (FY26), operating margin **7.1%** [V]; Dell ISG operating margin **~15%** in Q2 FY27 (8.8% a year earlier) [V-snip]; Netweb EBITDA **13–15%** [V]. **Netweb's margin is unusually high for a box-maker** because (a) a large share of revenue is HPC/private-cloud solutions with design + software content, (b) government buyers value domestic design (PPP-MII) and long support, (c) its ticket sizes are small enough that it is not squeezed by hyperscaler-style procurement.
- **Distributors** keep 2–3% EBITDA (Redington 2.0%, Rashi 2.9%) [V screener]. **EMS assemblers** keep 3–6% (Dixon 3.8% OP) [V screener], 10–16% for high-mix industrial/defence EMS (Kaynes 16%, Syrma 11%) [V].
- **GPU clouds** keep 50–77% EBITDA but carry the capex and utilisation risk (E2E Q2 FY27 OPM 77%) [V screener].

---

## 2. Size and growth

### 2.1 Global server and AI-server market
- **IDC 2Q26 (Apr–Jun 2026): $166.3 bn vendor revenue, +52.0% YoY, +35.7% QoQ**; prior record $125.3 bn (4Q25) [V].
  - **Non-x86 $74.4 bn (+146%, 44.8% share)** — ARM-based Grace-Blackwell and custom silicon; x86 $91.9 bn (+16.1%) [V].
  - **GPU-accelerated servers $87.4 bn (+28.1%; 52.6% share)**; GPU-server units −10.8% YoY but ASP **~$118,600 → ~$170,200 (+43.6%)**; other accelerated (FPGA/ASIC) $27.5 bn (+237.6%) [V].
  - Non-accelerated server ASP ~$9,800 → ~$13,000 (+33.5%) — memory/SSD inflation [V].
  - **US = $112.2 bn (67.4%)**, PRC $26.4 bn, APeJC $10.9 bn (+31.5%), Western Europe $9.1 bn [V].
- Annualised run-rate: **~$665 bn** (4 × 2Q26) [E] ≈ ₹63 lakh Cr at spot.
- **Vendor shares 2Q26** (US$ mn): Dell 22,240.6 (13.4%, +165%); Supermicro 10,177.0 (6.1%, +97%); Lenovo 8,411.3 (5.1%, +100%); HPE 5,868.4 (3.5%, +46%); IEIT Systems 4,001.5 (2.4%, −8%); **ODM Direct 89,660.3 (53.9%, down from 60.6%)**; rest 25,960.1 (15.6%) [V IDC]. Branded OEMs gained share from ODMs because of neocloud/sovereign/enterprise demand.
- The primer's global-share chart ("Dell ~10%, Supermicro ~9.5%, Lenovo ~4%, HPE ~3.1%") is an older, differently-defined snapshot. **Use IDC 2Q26.**

### 2.2 India: servers, AI infrastructure, HPC, private cloud
| Market (India) | FY24 | FY26 | FY30P | CAGR FY24–26 / FY26–30 | Source |
|---|---|---|---|---|---|
| HPC | ₹5,800 Cr | ₹7,140 Cr | ₹11,190 Cr | 11.0% / 11.9% | 1Lattice via Netweb Q1 PPT [V] |
| Private cloud & HCI | ₹31,410 Cr | ₹45,670 Cr | ₹91,910 Cr | 20.6% / 19.1% | same [V] |
| AI market (total) | ₹18,090 Cr | ₹32,270 Cr | ₹1,14,290 Cr | 33.6% / 37.2% | same [V] |
| — of which AI infrastructure | ₹4,150 Cr | ₹11,540 Cr | ₹28,290 Cr | 66.8% / 25.1% | same [V] |
| — of which AI software | ₹5,430 Cr | ₹9,680 Cr | ₹34,290 Cr | 33.6% / 37.2% | same [V] |
| AI data-centre capacity | 0.07 GW | 0.24 GW | 4.0–5.5 GW | 74% / 120–138% | same [V] |
| Server market (all) | — | $1.7–6.6 bn (2025) | $3.4–10.9 bn (2031–33) | ~11–12% | TechSci / IMARC / Mordor [V-snip] |

- **Read:** Netweb's FY26 revenue (₹2,184 Cr) is ~**19% of the 1Lattice "AI infrastructure + HPC" pool (₹18,680 Cr)** but these vendor-commissioned TAMs are not audited [E]. Netweb's AI revenue (₹948 Cr FY26) is ~8% of the ₹11,540 Cr AI-infrastructure market [E].
- **Netweb says AI-system demand is moving "from one-off training projects to continuous, inference-driven enterprise workloads"** and HPC from research to enterprises (manufacturing, life sciences, oil & gas, BFSI) [V co. Q1 PPT].

### 2.3 India PCs, laptops and tablets
- **2025: 15.9 mn traditional PCs (record), commercial 52.9% / consumer 47.1%**; HP 29.1%, Lenovo 18.7%, Dell 15.1% (Dell shipments −27.7% on inventory clearance and Q4 supply constraints) [V-snip IDC India 5-Mar-2026 as reported; HP's 29.1% figure may be a different period — verify].
- **Imports of the IMS-restricted items (HS 8471 laptops, tablets, AIOs, USFF, servers): $8.4 bn in FY24**; PC imports **$5.33 bn in FY23 (China $5.11 bn ≈ 96%)** and **$7.37 bn in FY22**; FY25 Apr–Aug "over $4 bn" [V Outlook Business/PTI 3-Sep-2024]. FY26 HS 8471 value **not sourced** (TradeStat not reached) — flag.
- Domestic PC/laptop production under PLI is still small: the PLI IT Hardware 2.0 incentive disbursed so far is **~₹82 Cr**, with most approved companies treating **FY26 as their first production year** [V sarkariyojana 14-Aug-2026, secondary, citing ET]. Dixon's IT-hardware ambition: "₹4,000 Cr+ of revenue" [primer dixon].

### 2.4 Data centres (the demand engine for servers)
- **Installed capacity ~1,575 MW (Aug-2026), up from 375 MW in 2020** [V PIB 13-Aug-2026]. CBRE: **~130 MW added in H1 2026, >200 MW due in H2 2026, ~2 GW by end-2026**; **>3 GW by end-2028** [V IBEF/CBRE 7-Oct-2026; V-snip]. Savills: 1.8 GW IT in H1 2026, **6 GW IT by 2030** [V-snip]. Definitions differ (IT load vs total) — quote ranges.
- **Investment commitments: H1 2026 ₹3.34 lakh Cr ($38 bn); cumulative since 2021 ₹15.29 lakh Cr ($173 bn)**; hyperscale + colocation ~62%; **>15% of commitments AI-linked**; Mumbai 94% of H1 2026 new supply; Mumbai + Chennai + Delhi-NCR >80% of capacity; Tier IV 43% of H1 supply (21% in 2024) [V IBEF/CBRE].
- Hyperscaler pledges [K, not re-fetched]: Microsoft $17.5 bn (Dec-2025, to 2029); Amazon ~$35 bn by 2030 (Dec-2025); Google ~$15 bn Visakhapatnam AI hub (Oct-2025, with Adani/Airtel); Reliance Jamnagar AI data centre (GW-scale, with Google/Meta partnerships). **Verify before printing.**
- **Rule of thumb [E]:** 1 MW of AI IT load ≈ 700–800 Blackwell-class GPUs ≈ ₹350–450 Cr of servers/networking at current prices (≈$40–50 mn/MW for GB200/GB300-class) — so **every 100 MW of AI capacity ≈ ₹35,000–45,000 Cr of hardware**, i.e. ~15–20× Netweb's FY26 revenue. Most hyperscaler builds use global OEM/ODM racks; Netweb's share of this pool depends on sovereign and neocloud orders.

### 2.5 Netweb growth history (screener standalone, ₹ Cr) [V]
| FY | Revenue | YoY | OP | OPM | PAT | ROCE |
|---|---|---|---|---|---|---|
| FY19 | 130 | — | 7 | 5% | 3 | — |
| FY20 | 156 | +20% | 8 | 5% | 4 | 31% |
| FY21 | 143 | −8% | 14 | 10% | 8 | 36% |
| FY22 | 247 | +73% | 35 | 14% | 22 | 52% |
| FY23 | 445 | +80% | 70 | 16% | 47 | 64% |
| FY24 | 724 | +63% | 103 | 14% | 76 | 38% |
| FY25 | 1,149 | +59% | 159 | 14% | 114 | 32% |
| FY26 | 2,184 | +90% | 285 | 13% | 206 | 37% |
| TTM (Jun-26) | 2,702 | — | 360 | 13% | 261 | — |

- **FY22→FY26 revenue CAGR 72.5%; PAT CAGR 75%** [E]. FY19→FY26 revenue ×16.8.
- ROCE fell after the Jul-2023 IPO (fresh issue ₹206 Cr swelled equity) and recovered to 37.5% in FY26 and **48.2% annualised in Q1 FY27** (company basis) [V].

---

## 3. Demand drivers and end-markets

| Driver | Numbers | Effect on Netweb |
|---|---|---|
| **Sovereign AI compute (IndiaAI)** | ₹10,372 Cr outlay (compute pillar ~₹4,563 Cr [V-snip]); **45,000+ GPUs** onboarded (Jun-26) vs ~38,000 (Feb-26) and ~18,700 in the first round (Jan-2025) [V PIB; K]; subsidised user price **₹65/GPU-hour** ("nearly one-third of global average") [V-snip PIB Feb-2026]; **93.18 lakh GPU-hours used by 237 projects** by Aug-26 [V]; 20 foundation models selected [V] | Direct: Netweb builds GPU systems for empanelled providers and model builders (₹1,734 Cr order; >5,000-GPU LLM order; NIC cloud) [V-snip; V co. PPT] |
| **Neoclouds / CSPs** | E2E revenue ₹36 Cr (Q1 FY26) → ₹224 Cr (Q2 FY27) [V screener]; Yotta, Jio, Tata Comm, CtrlS, Sify expanding [K] | Customers and/or competitors for GPU allocation; mgmt cites "world-scale demand from Neocloud providers and CSPs" [V co. Q1 PPT] |
| **Government, defence, research HPC** | NSM: **40 supercomputers, ~68 PF** deployed by Sep-2026 (target ~50 systems, >123 PF) [V-snip PIB via current-affairs sites]; NSM 2.0 targets **pre-exascale and exascale systems by CY28** with "build and design in India" [V co. Q1 PPT] | Netweb is the main private builder (Airawat 2023, ranked 75th in the world at commissioning; PARAM Ambar at ISRO; Kabru at IMSc) [V co. PPT] |
| **Data-centre build-out** | ~1.6–2.0 GW now → 3 GW (2028) → 4–6 GW (2030) [V/V-snip]; $38 bn commitments in H1-26 [V] | Indirect: colos and enterprises buy private cloud and storage; AI halls buy GPU racks |
| **Enterprise AI & data sovereignty** | DPDP Act 2023 + RBI/SEBI localisation [K]; "Container platforms replacing virtualisation" (VMware-Broadcom repricing) [V co. Q4 PPT] | Private cloud & HCI ₹517 Cr (FY26, +28%) [V] |
| **PC refresh / education / government devices** | 15.9 mn PCs in 2025 [V-snip] | Not Netweb's market (it does not make laptops); relevant to Dixon, Redington, Rashi |
| **Memory/GPU price inflation** | GPU server ASP +44% YoY (IDC) [V]; DRAM +10–15% QoQ in 4Q26 [V TrendForce] | Inflates revenue (pass-through) more than profit; raises working capital |

- **Customer types at Netweb** (no % split disclosed): government & defence, educational institutes, new-age/financial services, large enterprises (IT/ITeS, media, telecom, cloud) [V co. Q1 PPT]. **Government share of revenue is not disclosed** — the primer implies "government-favoured" but gives no number; FY26–Q1 FY27 concentration (top-5 = 81% in Q1) implies the strategic/sovereign orders dominate [E].
- **Order-book mix (Jun-26): ~40–45% AI, balance HPC and private cloud** [V co. Q1 call] — i.e. **lower AI share than Q1 revenue (62%)**, which implies AI's revenue share should fall back in coming quarters as the strategic order is executed [E].
- Execution cycle lengthened from **8–12 weeks to 16–20 weeks** (bigger, more complex AI orders, supply constraints) [V co. Q1 call].

---

## 4. Supply side and cost structure

### 4.1 Key inputs and their price drivers
| Input | Share of AI-server BOM [E] | Price driver (2026) | Source |
|---|---|---|---|
| GPUs / accelerator baseboards (HGX B200/B300; GB200/GB300 trays) | 55–75% | NVIDIA list pricing and allocation; Blackwell → Blackwell Ultra → Rubin (2026–27) cadence | [K; E] |
| HBM (inside GPU) | (in GPU price) | HBM blended ASP **+121% YoY forecast for 2027** (TrendForce headline) | [V TrendForce 30-Sep-26] |
| System DRAM (RDIMM) | 5–10% | **Conventional DRAM contract prices +10–15% QoQ in 4Q26** after ~+80% (Q2) and ~+40% (Q3); server DRAM "undersupplied"; long-term agreements cap some suppliers' increases | [V TrendForce; V-snip] |
| Enterprise SSDs (NAND) | 3–8% | **NAND contract +15–20% QoQ in 4Q26**; enterprise-SSD bit demand **>80% YoY in 2026**; "most incremental volume already committed" | [V TrendForce] |
| CPUs (Intel Xeon, AMD EPYC Turin, NVIDIA Grace) | 5–10% | Stable-to-up | [K] |
| Networking (NICs, switches, optics) | 5–10% | Optics and substrate constraints (Dell cites semiconductors, substrates, optics, cooling, power) | [V Futurum] |
| Power, cooling (liquid), chassis, PCB, assembly | 3–6% | Copper/aluminium (Sec 232 on derivatives in US), liquid-cooling components scarce | [K] |
| Labour, R&D, software | 2–5% of revenue | 125 R&D staff, 373 engineers at Netweb; R&D fully expensed | [V co. Q1 PPT/call] |

- **Import dependence:** essentially 100% of GPUs, CPUs, memory and SSDs are imported. **FX risk:** Netweb buys in USD and sells mostly in INR; it hedges payables (FY26 hedge gains ₹5.24 Cr offset MTM losses) [V co. Q4 PPT]. Rupee at ₹94.9 (record low ~₹96.8) raises rupee cost; contracts are bid at current prices and "pass-over for the pricing definitely happens" on new orders [V co. Q1 call].

### 4.2 "Where ₹100 of revenue goes" — three archetypes [E composites; not company-disclosed]

**(a) Netweb-type designer-OEM, blended FY26 mix (AI 43%, HPC 24%, cloud 24%, other 9%)** [E; anchored on reported EBITDA/PAT]
| Line | ₹ per ₹100 | Basis |
|---|---|---|
| Materials (GPUs, CPUs, memory, storage, boards, chassis) | ~78–80 | E: implied by ~20–22% gross margin |
| Employee cost (R&D 125, engineers 373, sales, services) | ~3–4 | E |
| Other opex (freight, warranty, installation, travel, rent, power) | ~3–4 | E |
| **EBITDA** | **13.0** | V (company op. EBITDA FY26) |
| Depreciation | 0.65 | V (₹14.2 Cr) |
| Finance cost (incl. LC/bill discounting) | 0.6 | V (₹13.0 Cr) |
| Other income | +0.9 | V (₹18.8 Cr) |
| PBT | 12.7 | V (₹276.5 Cr) |
| Tax (~25.6%) | 3.3 | V |
| **PAT** | **9.4** | V (₹205.8 Cr; company PAT margin 9.3% on total income) |

**(b) Same company, two product extremes [E]**
| | GPU-heavy AI system (8×B200 node / rack) | HPC cluster or private-cloud deal |
|---|---|---|
| Revenue | 100 | 100 |
| GPU/accelerator pass-through | 65–70 | 10–30 |
| Other materials | 15–20 | 40–50 |
| Gross margin | **12–18%** | **25–35%** |
| Design/integration/software/services opex | 3–5 | 10–15 |
| EBITDA | **~9–13%** | **~15–20%** |
| Working capital per ₹100 | high (GPU prepayment, inventory) | moderate (govt receivables) |
- **Read:** Netweb's EBITDA margin held at 13–15% even as AI rose from 15% to 62% of revenue. Either (i) AI deals carry more design/software content than a plain box, (ii) the strategic orders were priced well, or (iii) HPC/cloud margins rose. Management credits "pricing power", advance planning, long-term supplier contracts, and memory bought before the price spike [V co. Q1 call]. **The writer should present the GPU-mix dilution as a gross-margin effect that has NOT yet shown up in EBITDA.**

**(c) Reference archetypes (screener FY26) [V; E for the split]**
| Archetype | Example | Revenue | EBITDA % | PAT % |
|---|---|---|---|---|
| Distributor | Redington | 100 | 2.0 | 1.1 |
| Distributor (IT peripherals) | Rashi Peripherals | 100 | 2.9 | 1.8 |
| Volume EMS (phones, laptops, TVs) | Dixon | 100 | 3.8 | 3.4 (incl. other income) |
| High-mix EMS (industrial, defence, auto) | Kaynes / Syrma | 100 | 16 / 11 | 10 / 7 |
| Global AI-server OEM | Supermicro (FY26) | 100 | ~7.4 (op. 7.1) | 5.6 |
| Global diversified OEM, server division | Dell ISG (Q2 FY27) | 100 | 15 (op.) | n/a |
| Designer-OEM | **Netweb** | 100 | **13.0** | **9.4** |
| GPU cloud | E2E Networks (Q2 FY27) | 100 | 77 | 33 |

### 4.3 Capacity and utilisation
- Netweb is "capability-driven, not capacity-driven": existing facilities can sustain **₹3,000+ Cr** of turnover; "no major capex", only routine/light capex [V co. Q1 call]. Gross fixed-asset turnover **33× (FY26), ~44× annualised (Q1 FY27)** [V co. Q1 PPT]. Net fixed assets ₹60.9 Cr (Jun-26) [V].
- At TTM revenue of ₹2,702 Cr Netweb is already ~90% of that stated ₹3,000 Cr comfort level [E] — **watch for a capex announcement** if FY27 revenue runs above ₹3,500 Cr.
- India's GPU capacity bottleneck is not assembly; it is **GPU allocation, HBM/DRAM supply, power and liquid-cooling infrastructure** at data centres [V Futurum Dell commentary; E].

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)
- **Global servers (IDC 2Q26, revenue):** top-5 branded OEMs = **30.5%**; ODM Direct **53.9%**; rest 15.6% [V]. Inside AI servers, the top three branded (Dell, Supermicro, HPE) plus ODMs (Foxconn, Quanta, Wiwynn) dominate; NVIDIA designs the reference platform (HGX/MGX/NVL72) all of them build to [K].
- **India servers:** no public vendor-share table was found this session (IDC India tracker is subscription). Directionally [K/E]: Dell and HPE lead enterprise x86; Lenovo strong in HPC/AI and government; Supermicro strong in GPU clouds (Yotta's early H100 clusters) [K]; Cisco in UCS; Netweb leads Indian-origin OEMs and HPC in the research segment. **Flag: India vendor shares unsourced.**
- **India PCs (IDC 2025):** HP 29.1%, Lenovo 18.7%, Dell 15.1%, then Acer, ASUS [V-snip].
- **India HPC supercomputers:** of ~40 NSM systems (68 PF) [V-snip], C-DAC builds the PARAM line (increasingly with its own Rudra servers); Netweb built Airawat (AIRAWAT-PSAI at C-DAC Pune, 2023), PARAM Yuva II (2013), PARAM Ambar (ISRO) and others; HPE/Cray built Pratyush (IITM) and Mihir (NCMRWF) [K]; Atos/Eviden supplied BullSequana-based PARAM systems under NSM phase 1–2 [K]; Netweb says it has designed **60+ supercomputers** that appeared **17 times in the Top500** [V co. Q1 PPT; primer says "300+ bespoke supercomputers" — see §3.4].

### 5.2 The players (listed, unlisted, MNC)

| Player | Type | India footprint | Notes / numbers |
|---|---|---|---|
| **Netweb Technologies** | Listed Indian designer-OEM (HPC, AI, cloud, storage) | Faridabad plant; 22 offices | FY26 ₹2,184 Cr; only listed pure-play [V] |
| **Dell Technologies** | Global #1 server OEM | Sales + Sriperumbudur assembly (Flex) [K]; PLI IT HW 2.0 approved [V-snip] | ISG $31.8 bn in Q2 FY27 alone [V] |
| **HPE** (incl. Juniper since Jul-2025 [K]) | Global OEM | Servers made with VVDN in Manesar (2024) [K] | IDC 2Q26 server revenue $5.87 bn [V] |
| **Lenovo (ISG)** | Global OEM | Puducherry plant; AI server production in India announced 2025 [K] | Group Q1 FY26/27 revenue $26.9 bn (+43%), AI-related revenue $9.3 bn (~35%) [V-snip] |
| **Supermicro** | Global AI-server specialist | Sells via partners; no Indian plant found [E] | FY26 $39.1 bn; independent board review of export-control-related transactions [V 8-K] |
| **IEIT Systems (Inspur)** | Chinese OEM | Minimal India presence (trust/security concerns) [E] | IDC 2Q26 $4.0 bn, −8% [V] |
| **Foxconn / Quanta / Wiwynn / Inventec** | Taiwanese ODMs | Foxconn approved under PLI IT HW 2.0 [V-snip]; Foxconn's India focus is phones [K] | ODM Direct $89.7 bn in 2Q26 [V] |
| **Cisco, Huawei, Gigabyte, ASUS** | OEMs | Cisco UCS; Huawei limited in govt | — |
| **C-DAC** (MeitY, govt) | Govt R&D / builder | PARAM Rudra indigenous servers (2024) [K] | Competitor and customer |
| **VVDN Technologies** | Unlisted Indian ODM/EMS (Gurugram/Manesar) | Builds servers for HPE; PLI IT hardware [K] | Financials not fetched — flag |
| **Dixon (Padget Electronics)** | Listed EMS | Laptops/AIOs for HP and others; Noida | US$7 mn guarantee for Padget to **Quanta Computer** (21-Oct-2026) — a sign of a Quanta–Dixon IT-hardware tie-up [V screener announcement] |
| **Kaynes, Syrma SGS** | Listed EMS | Industrial/auto/defence PCBA; Syrma IT/networking & railways ~12% of revenue [primer syrma]; Syrma-Kaga JV (Japan, 60:40) [primer] | Potential board-level suppliers to server OEMs |
| **Redington, Rashi Peripherals, Ingram Micro India** | Distributors | Redington: HP, Dell, Lenovo, Cisco, NVIDIA; Rashi: PC components/peripherals | Channel for servers and GPUs; Redington Gulf–AWS collaboration (22-Oct-26) [V screener] |
| **E2E Networks** | Listed GPU cloud | Delhi NCR/Chennai | L&T-backed (preferential issue ₹1,079.28 Cr) [V screener CARE report; K for L&T]; IndiaAI-empanelled [K] |
| **Yotta Data Services** (Hiranandani) | Unlisted GPU cloud/DC | Navi Mumbai, Greater Noida | Large H100/B200 buyer; IndiaAI-empanelled [K] |
| **Tata Electronics** | Tata group | Dholera fab (with PSMC, ~₹91,000 Cr) and Assam OSAT (~₹27,000 Cr) [K]; iPhone assembly | Future domestic silicon/packaging, not servers today |
| **HCL Infosystems** | Listed legacy | Exited hardware; now a shell of the former #1 Indian PC maker [K] | Historical context only |

### 5.3 Imports and China
- **IT hardware is overwhelmingly imported**: FY23 PC imports $5.33 bn, **~96% from China** [V Outlook/PTI]; FY24 $8.4 bn for IMS items [V]. Servers and GPUs come from Taiwan/US/Mexico/China supply chains [K].
- **Policy response (Aug-2023 → now):** import restriction on HS 8471 laptops/tablets/AIO/USFF/servers notified 3-Aug-2023, softened into an online **Import Management System (IMS) from 1-Nov-2023** — >100 applications (Apple, Dell, Lenovo…) cleared on day one for ~$10 bn of imports [V Outlook/PTI]. **CY2026 regime:** DGFT Policy Circular **08/2025-26 (17-Dec-2025)** — portal open 22-Dec-2025 to 15-Dec-2026, authorisations valid to **31-Dec-2026**, multiple applications allowed, MeitY may conduct a mid-term review; desktops excluded [V-snip]. **It is a monitoring regime, not a quota** — imports are authorised freely; the data feeds PLI targeting. Watch for the CY2027 circular (Dec-2026).

---

## 6. Business-model archetypes and their economics

| # | Archetype | Indian examples | Revenue model | Gross / EBITDA margin | Capital intensity | Moat |
|---|---|---|---|---|---|---|
| 1 | **Designer-OEM (own boards, chassis, software; builds and supports)** | **Netweb** | Project/tender sales of systems + AMC; some recurring support | ~20% / 13–15% [E / V] | Low fixed, high working capital (CCC 84–96 days) | Design IP, PPP-MII Class-I status, NSM/HPC references, NVIDIA OEM partnership |
| 2 | **Global brand OEM selling into India** | Dell, HPE, Lenovo, Supermicro, Cisco | Direct + channel; enterprise and hyperscale | 10–25% GM; 7–15% op. margin (server divisions) [V] | Global balance sheets | Scale, GPU allocation, service networks, financing |
| 3 | **Contract assembler / ODM (EMS)** | Dixon (Padget), VVDN, Foxconn India, Kaynes/Syrma (boards) | Conversion fee on brand's design; PLI incentive | 4–16% EBITDA [V] | Capex-heavy plants; negative/low CCC for Dixon | Cost, scale, PLI eligibility |
| 4 | **Value-added distributor** | Redington, Rashi, Ingram | Spread on resale + financing | 2–3% EBITDA [V] | Working capital (CCC 34–60 days) | Credit, reach, vendor authorisations |
| 5 | **GPU cloud / neocloud** | E2E, Yotta, Jio, Tata Comm | Rent per GPU-hour (IndiaAI L1 rates; ₹65/hr subsidised to user) | 50–77% EBITDA but heavy depreciation [V] | Very high capex | Allocation, power, sovereign status |

**How the economics differ**
- Archetype 1 earns **~4× the EBITDA margin of a distributor on similar silicon** because it adds design/integration/software and long support, and because government HPC buyers pay for domestic design.
- Archetype 3 earns a conversion margin on a small value-add plus PLI; it **does not own the customer** and cannot easily climb to design-led HPC.
- Archetype 5 is Netweb's customer *and* its signal: when GPU clouds raise capital (E2E's ₹1,079 Cr preferential + ₹107 Cr QIP [V]), hardware orders follow.

---

## 7. Regulation and policy

### 7.1 Public procurement — PPP-MII (the moat)
- **Public Procurement (Preference to Make in India) Order, 2017** (revised 2020) [K]: Class-I local supplier = **≥50% local content**; Class-II = 20–50%; non-local <20%. For procurement below ₹200 Cr, global tenders are generally not allowed and only Class-I/II may bid; **MeitY's notification for electronic products (servers, computers, storage) sets product-specific local-content thresholds and purchase preference** [K]. Netweb holds Class-I status [primer]. **Exact MeitY threshold for servers and the size of the "ring-fenced" government pool are not sourced** — the primer's "several-thousand-crore-per-year" is an unattributed estimate → flag.
- **GeM (Government e-Marketplace)** carries local-content declarations; challenges/complaints can disqualify bidders [K].
- **Risk:** as Dell/HP/Lenovo localise under PLI, they may clear Class-I or Class-II thresholds for some server SKUs, eroding the moat [E].

### 7.2 PLI IT Hardware 2.0
- **Cabinet approval 17-May-2023: outlay ₹17,000 Cr over 6 years; expected incremental production ₹3.35 lakh Cr; incremental investment ₹2,430 Cr; 75,000 direct jobs** [V-snip Outlook Business; K PIB]. Products: laptops, tablets, AIOs, **servers**, USFF [V secondary].
- **27 companies approved (Nov-2023)**, 23 ready to produce from "day zero"; approval-time projections ~₹3,000 Cr investment, ~₹3.5 lakh Cr production, ~50,000 direct jobs [V-snip DTNext/EETIndia]. Names reported: Dell, HP, Lenovo, Acer, ASUS, Foxconn, Optiemus, Dixon (Padget), Sahasra, VVDN, **Netweb** (Netweb says it "qualified for PLI scheme of Govt. of India for IT hardware" in 2021 under PLI 1.0, and PLI telecom & networking in 2022 [V co. Q1 PPT]) — **Netweb's approval under PLI 2.0 specifically is not confirmed in this session; flag.**
- Incentive structure: ~**5% → tapering** on incremental sales over a base year, with extra for domestic components (memory modules, SSDs, PCBA, displays, enclosures) [K; a secondary source says "starts at 3%" — conflict, flag].
- **Outcome to date: only ~₹82 Cr disbursed**; payouts expected to rise in H2 FY27; **MeitY may revamp the scheme in late FY27 and add AI servers** [V secondary, citing Economic Times]. **PLI incentive accrued by Netweb is not disclosed** in its presentation → native KPI "PLI incentive accrued" is n/a.

### 7.3 Import Management System (laptops/servers) — see §5.3.

### 7.4 IndiaAI Mission (Mar-2024 cabinet approval [K])
- **Outlay ₹10,372 Cr** (often rounded to ₹10,300 / ₹10,371.92 Cr); seven pillars — compute (~₹4,563 Cr, largest), innovation centre/foundation models, datasets (AIKosh), application development, FutureSkills, start-up financing, safe & trusted AI [V PIB; V-snip].
- **Compute tenders (empanelment of GPU-cloud providers who buy and operate the GPUs; government pays a subsidy per GPU-hour):**
  - Round 1 (results Jan-2025): **~18,700 GPUs** from ~10 providers (Yotta largest; also Jio, E2E, CtrlS, Netmagic/NTT, Tata Comm, Sify, Cyfuture, Locuz, Orient) [K].
  - Round 2 (2025): total rose to **~34,000** [K/V-snip].
  - Feb-2026: **>38,000 GPUs + 1,050 Google TPUs** onboarded; user price **₹65/GPU-hour** after subsidy (up to 40%) [V-snip PIB Feb-2026 backgrounder]; empanelled base rates reported at ~₹115.85/hr (lower-end) to ~₹150/hr (high-end) [V-snip blogs — low confidence].
  - Round 3 under execution: ~**3,850** additional processing units incl. the 1,050 Trillium TPUs [V-snip].
  - **Jun-2026: 45,000+ GPUs** [V PIB 13-Aug-2026]. Stated ambition: 100,000 GPUs by Dec-2026 [V-snip, low confidence].
- **Usage:** 237 projects, 93.18 lakh GPU-hours by Aug-2026 [V PIB] → at ₹65/hr that is only ~₹61 Cr of user payments [E] — **utilisation of the subsidised pool is low relative to 45,000 GPUs** (45,000 × 8,760 h ≈ 3,942 lakh GPU-hours a year) [E]. The commercial demand for the GPUs comes from foundation-model builders (Sarvam, Soket, Gnani, BharatGen etc. [K]) and private customers.
- **For Netweb:** the mission creates hardware demand indirectly (providers buy servers) and directly (NIC's government-owned on-prem AI cloud on Grace Blackwell "under the IndiaAI Mission") [V co. Q1 PPT].

### 7.5 National Supercomputing Mission (NSM)
- Launched 2015 (DST + MeitY; C-DAC and IISc implement), ~₹4,500 Cr over 7 years [K]. **40 supercomputers, ~68 PF deployed (Sep-2026)**; target ~50 systems, >123 PF [V-snip PIB-based summaries]. PARAM Shakti facility at IIT Madras (PARAM Rudra) inaugurated 3-Jan-2026 [V-snip].
- **NSM 2.0** (as described by Netweb): targets **pre-exascale and exascale systems by CY28**, built on indigenous servers and software — "domestic design and manufacturing [are] key procurement criteria" [V co. Q1 PPT]. **Official NSM 2.0 outlay not sourced** → flag.

### 7.6 Semiconductors (context)
- **ISM/Semicon India 1.0 ₹76,000 Cr; Semicon 2.0 ₹1,27,500 Cr approved Jul-2026** (six pillars: design, equipment & materials, fabs, advanced packaging, R&D, talent); **12 projects approved across six states, commitments >₹1.64 lakh Cr; three in commercial production**; 24 DLI design projects [V PIB 13-Aug-2026].
- Electronics Component Manufacturing Scheme (ECMS, 2025, ~₹22,919 Cr [K]) — supports PCBs, memory modules, enclosures; Jyoti CNC got ECMS approval for ₹1,020.65 Cr investment (Aug-2026) [V-snip Muthoot alert]. Kaynes and Syrma are building PCB/OSAT capacity under ECMS/ISM [primer kaynes/syrma].
- **Relevance:** none of this makes GPUs in India. It may localise memory modules, SSD assembly and PCBs — components that would raise Netweb's local content.

### 7.7 US export controls on AI chips
- **AI Diffusion interim final rule (13-Jan-2025)**: three tiers; India in **Tier 2** (country caps of roughly 50,000 advanced GPUs for 2025–27 unless via Validated End Users; Tier-2 aggregate ~320,000) [K; V-snip].
- **Rescinded by BIS on 13-May-2025**, two days before compliance; replaced by guidance (Huawei Ascend, diversion red flags) and bilateral deals [K/V-snip].
- **13-Jan-2026**: rule moving NVIDIA H200- and AMD MI325X-class exports to China/Macau to **case-by-case** review [V-snip]. No India-specific cap is in force as far as found [E — flag].
- **India joined the US-led "Pax Silica" coalition** for resilient silicon supply chains at the India AI Impact Summit, Feb-2026 [V PIB].
- **Supermicro** disclosed an **independent board review of export-control-related transactions** that "could affect our forecasts… and prior period results" (Aug-2026) [V 8-K] — a reminder that diversion enforcement is active; Indian buyers face end-use certification and KYC.
- **Risk to Netweb:** a renewed country-cap regime would cap India's GPU imports; NVIDIA's allocation could favour hyperscalers. Mitigants: India's Tier-2/Pax Silica alignment; Netweb's OEM partnership with NVIDIA and "chip-agnostic" design (AMD, Intel) [V co. Q1 PPT].

### 7.8 Other
- **Data-centre policy:** state policies offer land, subsidised power and stamp-duty incentives; the national data-centre policy (draft 2020) and infrastructure status for data centres (2022) [K]; new hubs in Andhra Pradesh, Madhya Pradesh, Chhattisgarh, West Bengal [V PIB].
- **Trusted-source rules:** telecom "trusted sources" (2021) and government cybersecurity guidelines disfavour Chinese vendors (IEIT/Inspur, Huawei) [K].
- **US tariffs:** immaterial for Netweb (exports ~4–5%) [V].

---

## 8. History and cycles (narrative; full timeline in §G)
1. **1980s–2000s: India builds supercomputers because it was denied them.** US refusal of a Cray in 1987 → C-DAC (1988) → PARAM 8000 (1991) [K]. Netweb founded 1999 (CMD says he founded the business in 1996) [V co. Q1 PPT].
2. **1990s–2000s: the Indian PC brand era** — HCL Infosystems, Wipro, Zenith built PCs; by the 2010s the global brands (HP, Dell, Lenovo) and Chinese ODMs won; HCL Infosystems exited hardware [K].
3. **2015–2022: NSM and the Make-in-India procurement turn** — NSM 2015; PPP-MII 2017; Netweb wins PARAM-class and research HPC; PLI IT hardware 1.0 (Feb-2021, ₹7,350 Cr) under-subscribed [K].
4. **2023: AI shock + import controls + IPO** — ChatGPT-driven GPU shortage; laptop import restriction (Aug) → IMS (Nov); PLI IT HW 2.0 (May; 27 approvals Nov); **Netweb IPO Jul-2023** (₹631 Cr; ₹206 Cr fresh; ₹500/share; listed 27-Jul-2023) [primer; K]; Airawat ranked 75th globally [V co. PPT].
5. **2024: IndiaAI Mission (₹10,372 Cr) approved; first GPU tender** [K/V].
6. **2025: Blackwell, sovereign orders, export-control whiplash** — AI Diffusion rule (Jan) and rescission (May); IndiaAI GPU rounds 1–2; Netweb ₹1,734 Cr IndiaAI order (Sep-2025) and >5,000-GPU LLM order [V-snip; V co. PPT]; stock +102% in six weeks to ~1-Oct-2025 [V-snip Business Standard].
7. **2026: the memory super-cycle and the AI server boom** — DRAM contract +80% QoQ in Q2-26 [V-snip]; IDC server market +52% YoY in 2Q26 [V]; Dell AI backlog $95 bn [V]; India AI Impact Summit (Feb), Pax Silica [V]; Semicon 2.0 (Jul) [V]; Netweb FY26 +90%, Q1 FY27 +172%, QIP (Aug) [V/V-snip].

**Cycles:** the server industry has a ~3–4-year refresh cycle (CPU generations) overlaid in 2023–26 by an AI capex super-cycle and a memory price cycle (2022–23 bust → 2025–26 boom). Indian government HPC spending is lumpy (mission tranches) and Q4-heavy (March budget year-end): Netweb's H1 historically ~35–40% of the year [V co. Q1 call question].

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where Netweb stands
| KPI | Definition | Netweb latest | Source |
|---|---|---|---|
| Revenue mix | AI / HPC / private cloud & HCI / storage / DC servers / software-services-spares | FY26: 43.4 / 24.3 / 23.7 / 8.6 (three small lines) %; **Q1 FY27: 62.3 / 15.3 / 16.5 / 5.9** | V co. PPT |
| Order book (OB) | Firm orders unexecuted | **₹2,506.9 Cr (Jun-26)**; ₹2,097.6 Cr (Mar-26) | V |
| OB + L1 | adds lowest-bidder wins | ₹3,354.9 Cr (Jun-26) | V/E |
| Pipeline | bid funnel (excl. OB, L1) | ₹10,410 Cr (Jun-26, incl. strategic) | V |
| OB / TTM revenue | | **0.93× (2,507 ÷ 2,702)**; incl. L1 1.24× | E |
| OB / next-12m revenue | with 16–20-week execution, OB covers ~4–5 months | — | E |
| Gross margin | (Revenue − materials)/revenue | **Not disclosed**; ~20–22% FY26 [E] | flag |
| Operating EBITDA margin | (PBT + D&A + finance − other income)/revenue | FY24 ~14.2%, FY25 ~13.8% (screener OP basis; co. op. EBITDA FY25 ~₹159 Cr), **FY26 13.0% (adj. 13.3%)**, **Q1 FY27 14.7%** | V |
| Receivable days | avg receivables × 365 / revenue | FY25 87, FY26 86, Q1 FY27 78 | V co. |
| Inventory days | avg inventory × 365 / revenue | 53, 86, **110** | V co. |
| Payable days | | 67, 88, 92 | V co. |
| Cash conversion cycle | R + I − P | **73 → 84 → 96 days** | V co. |
| CFO / EBITDA | | FY24 50%, FY25 16%, **FY26 301%** (payables + customer advances on strategic order) [screener def: CFO before tax / OP] | V screener |
| R&D % of revenue | | **Not disclosed** (fully expensed; 125 R&D staff) | V co. call |
| Customer concentration | top-10 / top-5 share of revenue | FY26 76.4% / 62.2%; **Q1 FY27 87.7% / 81.2%** | V co. |
| Government vs enterprise | | **Not disclosed** | flag |
| PLI incentive accrued | | **Not disclosed** | flag |
| ROCE (co. basis) | EBIT / avg capital employed | FY26 37.5%; **Q1 FY27 48.2% (annualised)** | V |
| Exports % | | ~4–5% | V co. call |

### 9.2 Why Netweb's FY26 CFO was 3× EBITDA, and why that reverses
- Screener: CFO **₹790 Cr in FY26** vs OP ₹285 Cr; FY25 CFO −₹13 Cr [V]. Other liabilities rose from ₹355 Cr to **₹1,249 Cr** at Mar-26 [V screener] — payables and customer advances linked to the strategic orders.
- In Q1 FY27 free cash fell from ₹406.6 Cr to **₹73.4 Cr** and net debt turned **+₹200 Cr**; net current assets jumped from ₹539.7 Cr to **₹945.1 Cr** [V co. Q1 PPT] — inventory build (110 days) and unwinding of advances. **FY26's cash flow flattered; FY27 will consume working capital — hence the QIP.**

### 9.3 Order-book arithmetic [E]
- OB + L1 at Jun-26 ₹3,355 Cr; Q2–Q4 FY27 revenue needed for (say) ₹3,500 Cr FY27 = ₹2,680 Cr → covered **~1.25×** by OB + L1, before any pipeline conversion. Pipeline ₹10,410 Cr × 60% conversion ÷ 18–24 months ≈ **₹3,100–4,200 Cr a year** of new orders [E]. The writer can say: "the visible book supports FY27 revenue in the ₹3,300–4,000 Cr range if execution holds" (an analyst-stance estimate; management "not guiding" a number — the analyst on the call referenced ₹4,000 Cr) [V co. Q1 call; E].

---

## 10. Global lens

### 10.1 Reference peers — global (latest reported; USD unless noted)
| Company | Period | Revenue | Growth | Margin | Net income | Notes | Source |
|---|---|---|---|---|---|---|---|
| **Dell Technologies** (ISG) | Q2 FY27 (May–Jul 2026) | Group $46.97 bn; **ISG $31.78 bn** (AI servers $16.40 bn; trad. servers & networking $10.53 bn; storage $4.85 bn) | +58% / ISG +89% | Non-GAAP op. 12.6% (7.7%); **ISG op. ~15% (8.8%)** | n/a (EPS $7.04) | AI orders $60.9 bn in qtr; backlog $95 bn; FY27 rev ~$192 bn; AI server ~$74 bn | V Futurum; V-snip ISG margin |
| **Supermicro** | FY26 (Jul-25–Jun-26) | **$39.1 bn** | +78% | GM 10.8%; op. 7.1% | **$2.2 bn** (5.6%) | CFO −$6.8 bn; inventory $12.9 bn; FY27 guide $65–72 bn | V 8-K |
| **Lenovo** (group; ISG not split) | Q1 FY26/27 (Apr–Jun 2026) | $26.9 bn | +43% | n/a | Adj. $1.1 bn (+176%) | AI-related revenue $9.3 bn (~35%) | V-snip |
| **HPE** | IDC 2Q26 server revenue | $5.87 bn (servers only) | +46% | n/a | n/a | Juniper acquired Jul-2025 [K] | V IDC |
| **IEIT Systems (Inspur)** | IDC 2Q26 | $4.00 bn | −8% | n/a | n/a | Chinese; US entity-listed affiliates [K] | V IDC |
| **ODM Direct (Foxconn, Quanta, Wiwynn, Inventec…)** | IDC 2Q26 | $89.7 bn combined | +35% | ODM op. margins ~3–6% [K] | — | Hyperscaler direct | V IDC; K |
| **Netweb** | FY26 / Q1 FY27 | ₹2,184 Cr (~$230 mn at spot) / ₹820 Cr (~$86 mn) | +90% / +172% | EBITDA 13.0% / 14.7% | ₹206 Cr / ₹85 Cr | OB ₹2,507 Cr | V |

**Scale comparison [E]:** Dell ISG did **~₹3.0 lakh Cr** of revenue in one quarter at spot (₹94.9) — **~140× Netweb's FY26 revenue**. Supermicro's FY26 ≈ ₹3.71 lakh Cr ≈ 170× Netweb. **Margins:** Netweb's 13% EBITDA is in line with Dell ISG's ~15% op. margin and above Supermicro's ~7%. **Returns:** Netweb ROCE 37.5% [V]. **Valuation:** Netweb 99× TTM P/E; global server OEMs typically trade at ~15–30× forward earnings [K, not re-fetched; m-caps of global peers not fetched → flag].

### 10.2 Reference peers — Indian (screener 23-Oct-26) — full table in Part 3 §3.2
- Netweb's **EBITDA margin (13%) is 3–6× the volume EMS/distribution players' (2–4%)** and close to high-mix EMS (Kaynes 16%, Syrma 11%) [V].
- Netweb's **revenue growth (+90% FY26) is the highest** in the set except E2E (+50% on a tiny base; +409% YoY in Q2 FY27 (₹224 Cr vs ₹44 Cr)) [V].
- **Valuation:** Netweb 98.9× vs Kaynes 62×, Syrma 74×, Dixon 36.5×, Redington 15.6×, Rashi 16.9×, E2E 165× (consolidated) [V].

---

## 11. Technology and disruption risks
1. **Rack-scale AI shifts value to NVIDIA's reference design.** GB200/GB300 NVL72 racks are largely specified by NVIDIA (MGX, NVLink switch trays); OEM differentiation narrows to integration, liquid cooling, deployment speed and service. Netweb has an NVIDIA OEM partnership for GB200 and Grace systems [V co. PPT] — necessary but not differentiating.
2. **Liquid cooling and power density.** Blackwell racks need ~120–140 kW/rack and direct liquid cooling [K]; most Indian colos were designed for 6–15 kW/rack [K/E]. Netweb's Vertiv tie-up addresses this [V].
3. **Hyperscaler custom silicon and ODM direct** (TPU, Trainium, MTIA) bypass merchant OEMs; ODM Direct is still 54% of global server revenue [V IDC]. Less relevant to India's sovereign/enterprise market today.
4. **Product cadence** (Hopper → Blackwell → Blackwell Ultra → Rubin, ~annual) creates inventory obsolescence risk — and Netweb now carries 110 days of inventory [V].
5. **Chinese open-weight models** lower model-training costs and could delay enterprise hardware buying; management argues they widen the market [V co. Q1 call].
6. **Inference shift**: smaller, cheaper inference servers (L40S/RTX Pro/edge) favour volume over bespoke — Netweb's "Spark" petascale personal AI and edge products respond [V co. Q4 PPT].
7. **Quantum and physical AI**: Netweb has started R&D in quantum simulators/emulators and physical-AI platforms (digital twins, defence) [V co. Q1 call] — option value, no revenue guidance.
8. **Domestic silicon (long-dated):** C-DAC's indigenous processors (AUM/Rudra), Semicon 2.0 — could raise local content for Indian OEMs over 5–10 years [E].

---

## 12. What to watch
1. **Netweb Q2 FY27 results — 24-Oct-2026; call 26-Oct, 3:30 pm** [V]. Check: revenue vs Q2 FY26's ₹304 Cr (any number above ₹600 Cr = +100% YoY); AI share (expected to ease toward the 40–45% OB mix); EBITDA within 13–14%; CCC (96 days in Q1); net cash after QIP; OB + L1 vs ₹3,355 Cr; any new large orders.
2. **QIP details** — size, price, allottees (late Aug/Sep-2026 BSE filings) [flag].
3. **IndiaAI compute round 3 and the 100,000-GPU target** (Dec-2026), and the subsidy budget [V-snip].
4. **NSM 2.0 approval and outlay**; first pre-exascale tender [V co. PPT].
5. **PLI IT Hardware revamp (late FY27)** — whether AI servers are added (direct benefit to Netweb) [V secondary].
6. **IMS CY2027 circular** (expected Dec-2026) [V-snip].
7. **Memory prices** — TrendForce Q1-2027 contract forecasts; HBM +121% in 2027 [V].
8. **Global AI server orders** — Dell Q3 FY27 (late Nov-2026; guide $48.5–49.5 bn); Supermicro Q1 FY27 (early Nov; guide $14.5–15.5 bn) and the outcome of its export-control review [V].
9. **US export-control actions** affecting Tier-2-type countries; Pax Silica deliverables [V/K].
10. **Data-centre capacity adds** — CBRE H2 2026 (>200 MW expected) [V].
11. **Competitive localisation** — Dell/HP/Lenovo Class-I claims on server tenders; Dixon–Quanta (US$7 mn Padget guarantee, 21-Oct-2026) [V].
12. **Customer concentration** — top-5 81% in Q1 FY27 [V]; does it normalise toward ~50–60%?

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **AI/GPU demand — the volume engine.** Global server revenue +52% YoY in 2Q26, GPU-accelerated servers 52.6% of the market, GPU-server ASP ~$170k [V IDC]; Dell's AI backlog $95 bn [V]. In India, AI systems went from 15% of Netweb's revenue (FY25) to 62% (Q1 FY27) [V]. *Reasoning:* the AI cycle sets the size of the pie; the question for India is how much of it is bought from local builders vs imported racks.
2. **Government, defence and research orders (sovereign compute) — the anchor customer.** IndiaAI (₹10,372 Cr; 45,000+ GPUs), NSM (40 systems, 68 PF; NSM 2.0 exascale by CY28), NIC and CERT-In sovereign clouds [V PIB; V co. PPT]. *Reasoning:* sovereign buyers value domestic design, security and long support; they are lumpy and Q4-heavy, and they drive Netweb's concentration (top-5 = 81% in Q1 FY27).
3. **Make-in-India preference (PPP-MII, PLI, IMS) — the moat, and its expiry risk.** Class-I local-supplier rules ring-fence government spend; PLI IT HW 2.0 (₹17,000 Cr) is pulling Dell/HP/Lenovo/Foxconn/Dixon into Indian assembly; IMS monitors imports [V-snip/K]. *Reasoning:* the moat is regulatory; as global OEMs localise, it narrows from "foreign vs Indian" to "designed in India vs assembled in India".
4. **Component supply and GPU allocation — the throttle.** NVIDIA allocation, HBM and server DRAM undersupply (DRAM +80%/+40%/+20% QoQ in Q2–Q4 2026), enterprise SSD tightness [V TrendForce; V-snip]. *Reasoning:* the builder that secures parts ships; Netweb chose to carry 110 days of inventory as "a hedge, not a risk" [V co. Q1 call].
5. **Working capital and pass-through economics — the cash constraint.** GPU pass-through compresses gross margin % and inflates receivables/inventory; Netweb's CCC 73 → 96 days, net cash → net debt, then a ~₹1,200 Cr QIP [V/E]; Supermicro CFO −$6.8 bn [V]. *Reasoning:* in this industry, growth is financed by the balance sheet; EBITDA margin can hold while ROCE and cash conversion swing.
6. **US export controls — the tail risk.** AI Diffusion rule (Jan-2025) put India in Tier 2 with caps; rescinded May-2025; China tightened again Jan-2026; India in Pax Silica (Feb-2026) [K/V-snip/V PIB]. *Reasoning:* a single rule can cap India's GPU imports; today the regime is benign for India.
7. **Data-centre capex — the venue.** ~1.6–2.0 GW now → 3 GW by 2028 → 4–6 GW by 2030; $38 bn of commitments in H1 2026, >15% AI-linked [V/V-snip]. *Reasoning:* without power and liquid-cooled halls, GPUs cannot be deployed; DC capacity is the leading indicator for AI hardware orders.
8. **Price competition from global OEMs — the margin ceiling.** Dell, HPE, Lenovo and Supermicro have 50–150× Netweb's scale, better GPU allocation and global financing [V IDC]. *Reasoning:* in enterprise and neocloud deals outside PPP-MII, Netweb competes on price and speed; the 13–14% EBITDA guide assumes the protected/government and solution-heavy mix persists.

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "Sovereign compute": how IndiaAI, NSM and NIC turned a supercomputer boutique into an AI-server company
- Timeline: NSM (2015) → Airawat (2023, 75th in the world) → IndiaAI (Mar-2024, ₹10,372 Cr) → GPU rounds (18.7k → 34k → 38k → 45k+ GPUs) → Netweb's ₹1,734 Cr order (Sep-2025), >5,000-GPU LLM order, CERT-In, NIC Grace-Blackwell cloud (2026) [V/V-snip/K].
- Numbers: AI revenue ₹79.9 Cr (FY24) → ₹947.8 Cr (FY26) → ₹510.6 Cr in Q1 FY27 [V]. Strategic orders: ₹558.8 Cr executed FY26; ₹1,625.2 Cr outstanding at Mar-26; ~₹430 Cr executed Q1 FY27 [V].
- Tension: subsidised utilisation is low (93.18 lakh GPU-hours used vs ~3,900 lakh available per year [V PIB; E]) — the policy builds capacity ahead of demand; the hardware vendor is paid at installation, the GPU cloud bears utilisation risk.

### B2. "Thin gross, steady EBITDA": the economics of building with someone else's chip
- Show the GPU pass-through: an 8×B200 node is ~65–75% GPU by value [E]; Supermicro GM 10.8% [V]; Dell ISG op. margin 15% at peak AI volumes [V-snip]; Netweb EBITDA 13–15% [V].
- Working capital: Netweb CCC 73 → 84 → 96 days; inventory days 53 → 86 → 110; CFO/EBITDA 16% (FY25) → 301% (FY26) → negative in Q1 FY27 (implied by free cash ₹406.6 Cr → ₹73.4 Cr) [V/E]; QIP ~₹1,200 Cr [E].
- Memory super-cycle: who absorbs DRAM/SSD inflation? Netweb says existing orders were costed with stock bought earlier; new bids are at current prices [V co. Q1 call].

### B3. "The moat that is a rule": PPP-MII, PLI and the localisation race
- Class-I local supplier (≥50% local content) vs Dell/HP/Lenovo PLI assembly; HPE–VVDN; Lenovo Puducherry; Dixon–Quanta (US$7 mn Padget guarantee to Quanta, 21-Oct-2026) [V screener; K].
- PLI IT HW 2.0: ₹17,000 Cr outlay but only ~₹82 Cr disbursed; possible revamp with AI servers (late FY27) [V secondary].
- What would erode the moat: a change in the local-content definition (value-add excluding GPUs?), global OEMs clearing Class-I, or a shift of sovereign purchases to cloud services rather than owned hardware.

### B4. "One stock, one theme": what Netweb's valuation is pricing
- ₹25,782 Cr m-cap; 98.9× TTM P/E; 125× FY26 P/E; 34× book; ROCE 37.5% [V]. 52-week range ₹2,920–5,813; QIP floor ₹4,885.90 (Aug-2026) is above today's ₹4,336 [V/V-snip] — **QIP investors are under water by ~7–11%** [E].
- Compare: Kaynes 62×, Syrma 74×, Dixon 36.5×, E2E 165×, Redington 15.6× [V]; global OEMs ~15–30× [K].
- Scenario arithmetic (see C.3).

## C. The REVENUE / PROFIT EQUATION

**Designer-OEM (Netweb):**
Revenue = Σ (orders executed per segment) = (Opening OB + new orders − closing OB), where new orders = pipeline × conversion rate (~60%) ÷ conversion time (18–24 months) [V co. call].
EBITDA = Revenue × [gross margin(mix) − opex %], with gross margin(mix) = Σ segment share × segment GM, and GPU-heavy AI at the bottom.
Cash = EBITDA − Δ(receivables + inventory − payables) − tax − capex; Δ working capital ≈ ΔRevenue × CCC/365.

### C.1 Worked example 1 — one 8-GPU Blackwell node in an IndiaAI-type deal [E composite]
| Line | ₹ lakh | Note |
|---|---|---|
| Selling price (8× B200 HGX node, CPUs, 2 TB RAM, NVMe, NICs, 3-yr support) | 400 | ~$420k at ₹94.9 [E; GPU server ASP ~$170k is a market average incl. smaller servers, IDC] |
| GPU baseboard (HGX B200) | 280 | 70% [E] |
| CPUs, DRAM, SSDs, NICs, chassis, PSUs, cooling | 60 | 15% [E] |
| **Gross profit** | **60** | **15%** |
| Integration, testing, logistics, installation, warranty reserve | 12 | 3% |
| Allocated R&D, sales, overhead | 6 | 1.5% |
| **EBITDA** | **42** | **10.5%** |
| Working capital tied up (CCC ~96 days on ₹400 lakh) | ~105 | |
- **Read:** a GPU-dense deal earns ~10–11% EBITDA on revenue but ~40% pre-tax return on the working capital it ties up for a quarter — fine if cash is cycled ~3.5× a year, poor if a government buyer pays in 180 days [E].

### C.2 Worked example 2 — an HPC cluster for a research institute (₹100 Cr tender) [E composite]
| Line | ₹ Cr |
|---|---|
| Contract value (CPU+GPU nodes, InfiniBand, parallel storage, cooling, middleware, 5-yr support) | 100 |
| Bought-in silicon and components | 68 |
| **Gross profit** | **32 (32%)** |
| Design, integration, software stack, on-site team, 5-yr support provision | 14 |
| **EBITDA** | **18 (18%)** |
| Receivables (govt, milestone-based; 90–150 days) | 25–40 |
- **Read:** the HPC heritage business carries roughly double the EBITDA margin of a GPU box deal [E] — which is why mix matters more than volume for Netweb's margin.

### C.3 Worked example 3 — Netweb FY27 bridge (illustrative, not guidance) [E]
| | Bear | Base | Bull |
|---|---|---|---|
| FY27 revenue (₹ Cr) | 3,000 (+37%) | 3,600 (+65%) | 4,200 (+92%) |
| EBITDA margin | 12.5% | 13.5% | 14.5% |
| EBITDA | 375 | 486 | 609 |
| D&A + interest − other income (net) | 20 | 15 | 10 (QIP cash interest) |
| PBT | 355 | 471 | 599 |
| PAT (25.5% tax) | 264 | 351 | 446 |
| EPS on ~5.95 cr shares (₹) | 44 | 59 | 75 |
| P/E at ₹4,336 | 98× | 73× | 58× |
- Anchors: Q1 FY27 ₹820 Cr already booked [V]; OB + L1 ₹3,355 Cr [V]; mgmt margin guide 13–14% [V]; the primer's "35–40% growth guidance" is older (management now says "not guiding") [V co. Q1 call].

### C.4 Company-level reconciliation (FY26) [V]
Revenue ₹2,183.6 Cr − operating costs ₹1,898.8 Cr = op. EBITDA ₹284.8 Cr (13.04%) + other income ₹18.8 Cr − finance ₹13.0 Cr − D&A ₹14.2 Cr = PBT ₹276.5 Cr − tax ₹70.7 Cr = PAT ₹205.8 Cr (company figures; screener rounds to 2,184 / 285 / 277 / 206).

## D. Proposed 6-cell stat strip (₹ only)
| Cell | Value | Source |
|---|---|---|
| Netweb FY26 revenue | **₹2,184 Cr (+90%)** | V screener / co. |
| Q1 FY27 revenue / AI share | **₹820 Cr (+172%); AI 62%** | V co. Q1 PPT |
| Order book + L1 (Jun-26) | **₹3,355 Cr** (OB ₹2,507 Cr) | V co. Q1 PPT |
| IndiaAI Mission outlay / GPUs | **₹10,372 Cr; 45,000+ GPUs** | V PIB 13-Aug-2026 |
| India data-centre capacity | **~1,575 MW (Aug-26); DC investment commitments ₹15.29 lakh Cr since 2021** | V PIB; V CBRE/IBEF |
| Netweb m-cap / P/E | **₹25,782 Cr; 99× TTM** | V screener 23-Oct-26 |

Alternative cells: PLI IT HW 2.0 outlay ₹17,000 Cr [V-snip]; Netweb CCC 96 days [V]; global server market ₹15.8 lakh Cr in one quarter (2Q26, $166.3 bn at ₹94.9) [V; E].

## E. Chart-ready datasets

**E1. Netweb revenue (₹ Cr, screener standalone) [V]**
FY19: 130 · FY20: 156 · FY21: 143 · FY22: 247 · FY23: 445 · FY24: 724 · FY25: 1,149 · FY26: 2,184 · TTM Jun-26: 2,702

**E2. Netweb PAT (₹ Cr) [V]**
FY19: 3 · FY20: 4 · FY21: 8 · FY22: 22 · FY23: 47 · FY24: 76 · FY25: 114 · FY26: 206 · TTM: 261

**E3. Netweb quarterly revenue / OPM / PAT (₹ Cr; screener) [V]**
Jun-24: 149 / 13% / 15 · Sep-24: 251 / 14% / 26 · Dec-24: 334 / 13% / 30 · Mar-25: 415 / 14% / 43 · Jun-25: 301 / 15% / 30 · Sep-25: 304 / 15% / 31 · Dec-25: 805 / 12% / 73 · Mar-26: 774 / 12% / 71 · Jun-26: 820 / 15% / 85

**E4. Netweb revenue by offering (₹ Cr) [V co. Q1 PPT]**
| | FY24 | FY25 | FY26 | Q1 FY27 |
|---|---|---|---|---|
| AI systems | 79.9 | 169.4 | 947.8 | 510.6 |
| HPC / supercomputing | 262.4 | 405.5 | 530.8 | 125.3 |
| Private cloud & HCI | 264.4 | 402.7 | 517.0 | 135.3 |
| Storage + DC servers + software/services/spares (3 lines) | ~117 [E: residual] | ~172 [E: residual] | 188.0 | 48.5 |
| **Total** | **724** | **1,149** | **2,183.6** | **819.7** |
(FY24–FY25 residuals use screener totals; the three small lines are 0.89%, 1.36% and 3.66% of Q1 FY27 revenue; the chart's label mapping is ambiguous — likely HPS 0.9%, DC servers 1.4%, software/services/spares 3.7% [E].)

**E5. Netweb order book (₹ Cr) [V]**
Mar-26: OB 2,097.6 (organic 472.4 + strategic 1,625.2); L1 327.8; pipeline 4,431.5 (ex-strategic) · Jun-26: OB 2,506.9; L1 848.0; pipeline 10,410 (incl. strategic)

**E6. Netweb working capital (days, company basis) [V]**
FY25: R 87 / I 53 / P 67 / CCC 73 · FY26: 86 / 86 / 88 / 84 · Q1 FY27: 78 / 110 / 92 / 96

**E7. Netweb customer concentration (% of revenue) [V]**
Top-10: FY24 64.5 · FY25 65.8 · FY26 76.4 · Q1 FY27 87.7 | Top-5: 50.3 · 50.8 · 62.2 · 81.2 | Repeat-customer revenue: 69.0 · 81.4 · 75.6 · 98.9 | New customers: 171 · 147 · 131 · 28

**E8. Global server market vendor revenue, 2Q26 (US$ bn) [V IDC]**
Dell: 22.24 · Supermicro: 10.18 · Lenovo: 8.41 · HPE: 5.87 · IEIT: 4.00 · ODM Direct: 89.66 · Rest: 25.96 · Total: 166.32

**E9. India market sizes (₹ '000 Cr; 1Lattice via Netweb) [V]**
HPC: FY24 5.8 · FY26 7.1 · FY30P 11.2 | Private cloud & HCI: 31.4 · 45.7 · 91.9 | AI infrastructure: 4.2 · 11.5 · 28.3 | AI software: 5.4 · 9.7 · 34.3

**E10. India data-centre capacity (MW) [V PIB; V CBRE/IBEF; V-snip]**
2020: 375 · end-2025: ~1,700 (CBRE via IANS) · Aug-2026: ~1,575 (PIB) · end-2026E: ~2,000 (CBRE) · end-2028E: >3,000 (CBRE) · 2030E: ~6,000 IT (Savills) — mixed bases; footnote it.

**E11. IndiaAI GPUs onboarded [K / V-snip / V]**
Jan-2025 (round 1): ~18,700 · mid/late-2025 (round 2): ~34,000 · Feb-2026: >38,000 (+1,050 TPUs) · Jun-2026: 45,000+

**E12. India PC/IT-hardware imports (US$ bn) [V Outlook/PTI]**
FY22: 7.37 (PCs) · FY23: 5.33 (PCs; China 5.11) · FY24: 8.4 (IMS items) · FY25 Apr–Aug: >4

**E13. Indian reference peers, FY26 EBITDA margin (%) [V screener]**
Redington 2.0 · Rashi 2.9 · Dixon 3.8 · Syrma 11.3 · Netweb 13.0 · Kaynes 15.9 · E2E 51.2

**E14. Memory price path (QoQ %, DRAM contract) [V-snip/V TrendForce]**
Q2-2026: ~+80 · Q3-2026: ~+40 · Q4-2026E: ~+20 overall (conventional +10–15; NAND +15–20)

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]

| KPI | Definition | Good | Average | Weak | Netweb latest |
|---|---|---|---|---|---|
| Revenue growth | YoY | >40% | 15–40% | <15% | +90% FY26; +172% Q1 FY27 [V] |
| AI systems share | AI rev / total | 30–50% (balanced) | >60% (concentrated, low-GM) or 10–30% | <10% (missing the cycle) | 43% FY26; 62% Q1 [V] |
| Order book / TTM revenue | | >1.0× | 0.6–1.0× | <0.6× | 0.93× (1.24× incl. L1) [E] |
| Pipeline conversion | orders won / pipeline over 18–24 m | >60% | 40–60% | <40% | ~60% guided [V] |
| Gross margin (designer-OEM) | | >25% | 18–25% | <18% | n/d (~20–22% E) |
| Gross margin (AI box) | | >15% | 10–15% | <10% | n/d |
| EBITDA margin (designer-OEM) | | >14% | 11–14% | <11% | 13.0% FY26; 14.7% Q1 [V] |
| Receivable days | | <75 | 75–110 | >110 | 78 (Q1, co.) [V] |
| Inventory days | | <60 | 60–100 | >100 | 110 (Q1, co.) [V] |
| Payable days | | >90 | 60–90 | <60 | 92 [V] |
| Net working-capital days (CCC) | | <60 | 60–100 | >100 | 96 [V] |
| CFO / EBITDA (3-yr avg) | | >70% | 40–70% | <40% | FY24–26 avg ~122% (50/16/301) — distorted by FY26 advances [V/E] |
| R&D % of revenue | expensed R&D | >3% | 1.5–3% | <1.5% | n/d (125 staff; ~₹15–25 Cr? [E]) |
| Top-10 customer share | | <50% | 50–70% | >70% | 76% FY26; 88% Q1 [V] |
| Government share | govt + PSU + defence + research | 30–50% (anchor, not dependence) | 50–70% | >70% | n/d |
| PLI incentive accrued | % of revenue | — | 1–4% if eligible | — | n/d |
| ROCE | | >30% | 18–30% | <18% | 37.5% FY26; 48% Q1 ann. [V] |
| Net debt / EBITDA | | net cash | <1× | >1.5× | 0.41× (Jun-26) [V]; net cash post-QIP [E] |

## G. Timeline (year: event)
- 1987: US denies India a Cray supercomputer → C-DAC set up (1988) [K]
- 1991: PARAM 8000, India's first indigenous supercomputer [K]
- 1996/1999: Netweb business founded by Sanjay Lodha (1996 per CMD bio); company incorporated 1999 [V co. PPT]
- 2004: Netweb deploys a supercomputer at IMSc Chennai (then India's 4th most powerful) [V co. PPT]
- 2013: PARAM Yuva II at C-DAC Pune deployed with Netweb [V co. PPT]
- 2015: National Supercomputing Mission approved (~₹4,500 Cr) [K]
- 2017: PPP-MII Order issued (revised 2020) [K]
- 2019: Netweb commissions end-to-end HCS manufacturing facility, Faridabad [V co. PPT]
- Feb-2021: PLI IT Hardware 1.0 (₹7,350 Cr) [K]; Netweb qualifies for IT-hardware PLI (2021) and telecom PLI (2022) [V co. PPT]
- Nov-2022: Netweb converts to a public company [primer]
- May-2023: PLI IT Hardware 2.0 approved — ₹17,000 Cr [V-snip]
- 2023: Airawat (AI supercomputer, C-DAC Pune) ranked 75th in the world; Netweb manufacturing partnership with NVIDIA for Grace CPU Superchip and GH200 MGX [V co. PPT]
- 27-Jul-2023: Netweb lists (IPO ₹631 Cr; ₹500/share) [primer]
- 3-Aug-2023 / 1-Nov-2023: laptop/server import restriction → Import Management System [V Outlook/PTI]
- Nov-2023: 27 companies approved under PLI IT HW 2.0 [V-snip]
- Mar-2024: IndiaAI Mission approved (₹10,372 Cr) [K]
- Aug-2024: Netweb promoters sell 3.64% via block (~₹458 Cr at ~₹2,232) [V-snip BS]
- 13-Jan-2025: US AI Diffusion rule (India Tier 2) [K]
- Jan-2025: IndiaAI round-1 GPU empanelment (~18,700 GPUs) [K]
- 13-May-2025: AI Diffusion rule rescinded [K/V-snip]
- 2025: Netweb order for AI infra for India's foundational LLM (>5,000 GPUs); PARAM Ambar at ISRO [V co. PPT]
- 3-Sep-2025: Netweb ₹1,734 Cr IndiaAI sovereign AI order (HGX B200) [V-snip]
- 17-Dec-2025: DGFT circular extends IMS for CY2026 [V-snip]
- 3-Jan-2026: PARAM Shakti/Rudra facility at IIT Madras inaugurated [V-snip]
- Feb-2026: India AI Impact Summit; India joins Pax Silica; Netweb launches Make-in-India GB200 systems [V PIB; primer]
- 28-Feb-2026: West Asia crisis begins (energy/freight shock) [macro]
- Q2-2026: DRAM contract prices ~+80% QoQ [V-snip]
- 2-May-2026: Netweb FY26 results — ₹2,184 Cr (+90%), PAT ₹206 Cr [V]
- Jul-2026: Semicon India 2.0 (₹1,27,500 Cr) approved [V PIB]
- 28-Jul-2026: Netweb Q1 FY27 — ₹820 Cr (+172%), AI 62%, OB ₹2,507 Cr [V]
- 11-Aug-2026: Supermicro FY26 ($39.1 bn) and export-control review disclosure [V]
- 18-Aug-2026: Netweb QIP launched, floor ₹4,885.90 [V-snip]
- ~1-Sep-2026: Dell Q2 FY27 — AI orders $60.9 bn, backlog $95 bn [V]
- 10-Sep-2026: IDC — 2Q26 server market $166.3 bn (+52%) [V]
- 7-Oct-2026: RBI hikes repo to 5.50%; CBRE H1-2026 data-centre report [macro; V]
- 24-Oct-2026: Netweb Q2 FY27 board meeting; call 26-Oct [V]

## H. Figures I could not source well (and conflicts)
1. **QIP size, price and allottees** (Aug–Sep 2026) — only the 18-Aug floor price (₹4,885.90) is sourced [V-snip]; ~₹1,200 Cr is inferred from share count and the enabling resolution [E].
2. **Promoter stake fall Dec-25→Mar-26 (71.00% → 66.98%)** — mechanism (block/OFS) not found.
3. **Identity of the ₹1,734 Cr order's distributor-customer and end-user**, and whether it equals the "₹1,600 Cr strategic order" — unresolved (see trap 2).
4. **Gross margin** (company and by segment) — not disclosed; all gross margins [E].
5. **Government vs enterprise revenue split** at Netweb — not disclosed.
6. **R&D spend in ₹** — not disclosed (expensed; 125 staff).
7. **PLI incentive accrued by Netweb**, and whether Netweb is a PLI 2.0 (vs 1.0) beneficiary — not confirmed.
8. **India server market size and vendor shares** — only third-party estimates ($1.7–6.6 bn, wide range) [V-snip]; IDC India tracker not reached.
9. **FY26 HS 8471 import value** (TradeStat) — not reached.
10. **IndiaAI GPU-hour L1 rates per GPU type** — only blog-level (₹115–150/hr) and PIB ₹65/hr user price [V-snip].
11. **PPP-MII local-content threshold for servers** (MeitY notification) and the size of the ring-fenced government pool — not sourced; the primer's "several thousand crore a year" is unattributed.
12. **NSM 2.0 outlay** — not sourced.
13. **Global peers' market caps and P/Es** (Dell, HPE, Lenovo, Supermicro) — not fetched; Lenovo ISG and HPE server-segment margins not fetched.
14. **Hyperscaler India commitments** (Microsoft $17.5 bn, Amazon ~$35 bn, Google $15 bn) — [K], not re-fetched.
15. **PLI incentive rate conflict**: "~5% tapering" [K] vs "starts at 3%" [secondary].
16. **India PC 2025 vendor shares** — the HP 29.1% figure may belong to a different period (a May-2025 article carries the same number) [V-snip].
17. **Data-centre capacity basis conflict**: PIB ~1,575 MW (Aug-26) vs CBRE ~1,700 MW (end-2025) vs Savills 1.8 GW IT (H1-26) — different definitions.
18. **VVDN, Yotta, other unlisted players' financials** (RoC/Tofler) — not fetched.

---

# PART 2 — COMPANY FACT PACK (1 member) + reference-peer pack

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples screener 23-Oct-26; Netweb standalone, others consolidated)

| Company | NSE | Role | Year | Revenue | Growth % | EBITDA (OP) margin % | PAT | ROCE % | ROE % | Net debt (cash), screener basis | M-cap | P/E | P/B | EV/EBITDA | Native KPI 1 | Native KPI 2 | Native KPI 3 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Netweb Technologies** | NETWEB · 543945 | **Member** | FY26 | 2,184 | +90.1 | 13.0 | 206 | 37.5 | 32.8 | Co.: (124) Mar-26; **+200 Jun-26**; ~(1,000) post-QIP [E] | 25,782 | 98.9 (TTM) | 34.1 | ~91× FY26 / ~72× TTM [E, on co. Jun-26 net debt] | OB ₹2,507 Cr (Jun-26) | AI 62% of Q1 rev | CCC 96 d |
| Dixon Technologies | DIXON · 540699 | Ref. (EMS) | FY26 | 48,873 | +25.8 | 3.8 | 1,644 | 29.2 | 18.9 | ~(13) (borrowings 994 − investments 1,007; cash not shown) | 68,568 | 36.5 | 14.6 | on gross debt: ~37× | CCC −7 d | Laptops via Padget (HP) | — |
| Kaynes Technology | KAYNES · 543664 | Ref. (EMS/OSAT) | FY26 | 3,626 | +33.2 | 15.9 | 364 | 12.7 | 8.7 | 656 (913 − 257; cash not shown) | 21,521 | 62.0 | 4.5 | on gross debt: ~39× | OB ₹8,904 Cr (Jun-26) [primer] | CCC 193 d | — |
| Syrma SGS Technology | SYRMA · 543573 | Ref. (EMS) | FY26 | 4,819 | +27.3 | 11.3 | 346 | 16.8 | 14.0 | ~(147) (400 − 547) | 27,623 | 74.4 | 9.7 | ~50× | OB ₹6,770 Cr (Jun-26) [primer] | CCC 48 d | — |
| Redington | REDINGTON · 532805 | Ref. (distributor) | FY26 | 1,19,162 | +20.0 | 2.0 | 1,284 | 18.4 | 16.9 | 2,842 gross (cash not shown) | 28,093 | 15.6 | 2.8 | on gross debt: ~13× | CCC 34 d | — | — |
| Rashi Peripherals | RPTECH · 544119 | Ref. (distributor) | FY26 | 15,827 | +14.9 | 2.9 | 282 | 17.0 | 14.7 | 991 gross | 5,387 | 16.9 | 2.6 | on gross debt: ~14× | CCC 60 d | — | — |
| E2E Networks | E2E · 543848 | Ref. (GPU cloud) | FY26 | 246 | +50.0 | 51.2 | (16) | n.m. | (0.9) | 497 gross (Sep-26) | 11,656 | 165 (cons.) / 99 (sa) | 6.4 | ~32× TTM OP (sa TTM OP 387) [E] | Q2 FY27 rev ₹224 Cr (+409%) | OPM 77% (Q2) | — |

Notes: growth % = FY26 vs FY25 screener. EV/EBITDA [E] = (m-cap + screener borrowings − screener investments) ÷ FY26 OP; "on gross debt" where cash is not on screener. Netweb's EV uses company net debt (Jun-26 ₹200 Cr) and FY26 OP ₹285 Cr / TTM OP ₹360 Cr; post-QIP net cash would lower it ~4% [E]. BSE codes for Dixon (540699), Kaynes (543664), Redington (532805), Rashi (544119), E2E (543848) are [K].

## 2.1 Netweb Technologies India Ltd (NETWEB · 543945) — India's designer-OEM of HPC, AI systems, private cloud and storage (Tyrone)

### Full record (screener standalone 23-Oct-26 [V] unless noted)
- **Price ₹4,336; m-cap ₹25,782 Cr; 52-week high/low ₹5,813 / ₹2,920; P/E 98.9 (TTM); book value ₹127/share (P/B 34.1); dividend yield 0.07%; ROCE 37.5%; ROE 32.8%; FV ₹2.**
- **FY26:** revenue ₹2,184 Cr (FY25 ₹1,149 Cr, **+90.1%**); OP ₹285 Cr (13%); other income ₹19 Cr; interest ₹13 Cr; depreciation ₹14 Cr; PBT ₹277 Cr; tax 26%; **PAT ₹206 Cr (+80.7%)**; EPS ₹36.15; dividend payout 8%.
- **Company basis FY26** [V co. Q4 PPT]: revenue ₹2,183.56 Cr; op. EBITDA ₹284.84 Cr (13.04%); adj. op. EBITDA ₹290.08 Cr (13.3%); PAT ₹205.82 Cr (9.3% of total income); diluted EPS ₹36.30.
- **Q1 FY27 (Jun-26)** [V co. Q1 PPT]: revenue **₹819.69 Cr (+172.1% YoY, +5.9% QoQ)**; op. EBITDA **₹120.52 Cr (14.70%; Q1 FY26 14.87%, Q4 FY26 12.48%)**; other income ₹8.47 Cr; finance cost ₹11.52 Cr (Q1 FY26 ₹0.98 Cr); D&A ₹3.33 Cr; PBT ₹114.14 Cr; **PAT ₹85.32 Cr (+179.9%; 10.3%)**; EPS ₹14.98.
- **TTM (to Jun-26):** revenue ₹2,702 Cr; OP ₹360 Cr; PAT ₹261 Cr; EPS ₹45.87 [V screener].
- **Balance sheet (Mar-26, screener):** equity ₹11 Cr + reserves ₹712 Cr = ₹723 Cr net worth; borrowings ₹282 Cr (Mar-25 ₹8 Cr); other liabilities ₹1,249 Cr; total ₹2,255 Cr; fixed assets ₹58 Cr; other assets ₹2,196 Cr [V].
- **Company net debt:** Mar-25 −₹162.1 Cr; Mar-26 −₹124.4 Cr; **Jun-26 +₹199.9 Cr**; net worth ₹808.7 Cr (Jun-26); net debt/equity 0.25×; net debt/op. EBITDA 0.41× [V co. Q1 PPT]. Post-QIP: likely net cash ~₹1,000 Cr [E — verify].
- **Cash flow (screener):** CFO FY24 ₹18 Cr, FY25 −₹13 Cr, **FY26 ₹790 Cr**; FCF FY26 ₹779 Cr; CFO/EBITDA FY26 301% [V].
- **Returns (company):** ROCE FY26 37.53%, **Q1 FY27 48.16%** (annualised); ROE FY26 32.87%, Q1 FY27 44.55%; gross fixed-asset turnover 33.04× (FY26), 43.89× (Q1 ann.) [V].
- **Historic ROCE (screener):** FY22 52%, FY23 64%, FY24 38%, FY25 32%, FY26 37% [V].

### Last 9 quarters (screener, ₹ Cr) [V]
| Qtr | Jun-24 | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | 149 | 251 | 334 | 415 | 301 | 304 | 805 | 774 | 820 |
| OP | 20 | 36 | 43 | 59 | 45 | 45 | 98 | 97 | 121 |
| OPM | 13% | 14% | 13% | 14% | 15% | 15% | 12% | 12% | 15% |
| Interest | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 8 | 12 |
| PAT | 15 | 26 | 30 | 43 | 30 | 31 | 73 | 71 | 85 |
- **Q2 FY27 (Sep-26): not yet reported — board 24-Oct-2026.** Base for YoY: Q2 FY26 revenue ₹304 Cr, PAT ₹31 Cr.
- Seasonality broke in FY26: Q3–Q4 FY26 and Q1 FY27 all ~₹775–820 Cr because strategic orders were executed from Q3 FY26 [V/E].

### Native KPIs
- **Revenue mix:** see trap 4 and E4. FY24–FY26 CAGR: AI **244%**, HPC 42%, private cloud 40% [V co. Q1 PPT].
- **Order book:** OB ₹2,506.9 Cr; L1 ₹848.0 Cr; pipeline ₹10,410 Cr (30-Jun-26) [V]. Mar-26 OB ₹2,097.6 Cr (organic ₹472.4 + strategic ₹1,625.2). OB mix ~40–45% AI [V co. Q1 call]. Execution cycle 16–20 weeks (from 8–12) [V].
- **Margins:** op. EBITDA FY26 13.04% (adj. 13.3%); Q1 FY27 14.70%; guide 13–14% [V].
- **Working capital (co.):** receivable 78 d, inventory 110 d, payable 92 d, CCC 96 d (Q1 FY27) [V].
- **Customer concentration:** top-10 87.7%, top-5 81.2% (Q1 FY27); FY26 76.4% / 62.2% [V]. Repeat-customer revenue 98.9% (Q1) [V]. New customers: 131 (FY26), 28 (Q1 FY27) [V]. Average tenure of top-10 customers 7.68 years [V co. Q1 PPT].
- **Installed base / capability** [V co. Q1 PPT]: 125 R&D staff; 373 engineers; 17 patents (registered + applied); 22 offices; 60+ supercomputers designed; 17 Top500 listings; "10,000+" and "600+" figures on the about-slide (likely AI systems/GPUs installed and private-cloud/HCI installations — label mapping garbled in the PDF text → [E], verify on the slide).
- **R&D % of revenue:** n/d. **Government share:** n/d. **PLI accrued:** n/d. **Exports:** ~4–5% [V co. Q1 call].

### Ownership (screener, Sep-2026) [V]
- **Promoters 64.16%** (Sanjay, Navin, Vivek, Niraj Lodha and family) — from 71.39% (Sep-24), 71.00% (Dec-25), 66.98% (Mar/Jun-26). **No pledge data captured.**
- FIIs 9.47%; DIIs 7.22% (up from 3.30% in Dec-25 — QIP allottees likely DIIs [E]); public 19.14%; shareholders **2.61 lakh** (1.18 lakh in Sep-24).
- Key institutional holders at Mar-26: ICICI Prudential MF, the Regents of the University of California, Vanguard Total International Stock Index Fund [V co. Q4 PPT].

### Management [V co. Q1 PPT / call]
Sanjay Lodha (CMD; founded 1996; VP of MAIT); Navin, Vivek, Niraj Lodha (whole-time directors — West/East/South sales); CFO-level speakers on the Q1 call: Sanjeev Sancheti, Ankit Kumar Singhal; Hirdey Vikram (business/AI); CS Lohit Chhabra. Independent directors include Mrutyunjay Mahapatra (ex-SBI DMD, ex-MD Syndicate Bank).

### Story bullets
- **What defines it:** India's only listed designer-OEM for HPC/AI/private cloud — own boards, chassis and software, built in Faridabad, with 25+ years of supercomputer references and an NVIDIA OEM partnership (Grace/GH200 MGX, GB200, B200/B300/GB300) [V co. PPTs].
- **Its edge:** PPP-MII Class-I status and sovereign trust (CERT-In, NIC, ISRO, C-DAC); solution selling ("we don't do box selling") keeps EBITDA at 13–15% even with GPU pass-through [V co. Q1 call].
- **Main risks:** extreme concentration in Q1 FY27 (top-5 = 81%); working capital (CCC 96 d; net debt in Jun-26; QIP needed); GPU/memory allocation; valuation (99× TTM); policy dependence [V/E].
- **What changed since the primer (13-Jul):** Q1 FY27 record quarter; OB ₹2,507 Cr + L1 ₹848 Cr; pipeline ₹10,410 Cr (new basis); QIP (Aug-26); promoter 64.16%; Q2 board 24-Oct [V/V-snip].

### Sources
screener.in/company/NETWEB/ (standalone; consolidated page empty), 23-Oct-26 · BSE: Q1 FY27 presentation (28-Jul-26) and transcript (29-Jul-26 call), Q4 FY26 presentation (2-May-26) · Muthoot Securities alert 18-Aug-26 (QIP) · Business Standard/HDFC Sky (₹1,734 Cr order, 3-Sep-25).

## 2.2 Reference-peer notes (one paragraph each; screener 23-Oct-26 [V] unless noted)
- **Dixon Technologies (DIXON):** FY26 revenue ₹48,873 Cr, OP ₹1,873 Cr (3.8%), PAT ₹1,644 Cr (other income ₹731 Cr — includes gains); Q1 FY27 revenue ₹15,548 Cr (+21%), OP 3.0%, PAT ₹718 Cr (other income ₹537 Cr). Promoter 28.50%. Relevance: IT-hardware PLI via Padget Electronics (HP laptops/AIOs); **US$7 mn guarantee for Padget to Quanta Computer (21-Oct-2026)** [V]. Primer (3-Jul) uses revenue ₹49,586 Cr and EBITDA ₹2,580 Cr (5.2%) — different basis from screener (see §3.4).
- **Kaynes Technology (KAYNES):** FY26 ₹3,626 Cr (+33%), OP 16%, PAT ₹364 Cr; Q1 FY27 PAT ₹56 Cr (−25%); CFO −₹600 Cr, FCF −₹1,841 Cr (OSAT/PCB capex); debtor days 154; stock −54% from its 52-week high (₹6,998 → ₹3,188) [V]. Relevance: high-mix EMS + OSAT; potential board/module supplier.
- **Syrma SGS (SYRMA):** FY26 ₹4,819 Cr (+27%), OP 11%, PAT ₹346 Cr; Q1 FY27 ₹1,589 Cr (+68%), PAT ₹106 Cr; board 30-Oct [V]. IT/networking & railways ~12% of revenue [primer]. Kaga (Japan) 60:40 EMS JV [primer].
- **Redington (REDINGTON):** FY26 ₹1,19,162 Cr (+20%), OP 2.0%, PAT ₹1,284 Cr (FY25 ₹1,821 Cr included ~₹854 Cr other income); Q1 FY27 ₹34,922 Cr (+35%), PAT ₹453 Cr; no promoter, FII 63.42% [V]. Distributes Dell/HP/Lenovo/Cisco/NVIDIA; plausible (unconfirmed) channel for Netweb's ₹1,734 Cr IndiaAI order [E].
- **Rashi Peripherals (RPTECH):** FY26 ₹15,827 Cr (+15%), OP 2.9%, PAT ₹282 Cr; Q1 FY27 ₹5,102 Cr (+62%), PAT ₹105 Cr; promoter 63.55%; Deloitte ceased as joint statutory auditor 17-Oct-2026 [V].
- **E2E Networks (E2E):** FY26 ₹246 Cr, OP ₹126 Cr, PAT −₹16 Cr; **Q2 FY27 already reported: ₹224 Cr revenue, 77% OPM, ₹73 Cr PAT**; FCF FY26 −₹1,140 Cr (GPU capex); borrowings ₹497 Cr (Sep-26); preferential issue ₹1,079.28 Cr + QIP ₹107 Cr (CARE monitoring, nil deviation) [V]. L&T is the anchor shareholder [K]. A neocloud whose GPU purchases are the demand Netweb sells into.
- **Global (no screener):** see §10.1 — Dell ISG, Supermicro, Lenovo, HPE, IEIT, ODMs.
- **Unlisted Indian:** VVDN (ODM, HPE servers), Yotta (GPU cloud/DC), C-DAC (govt), Tata Electronics (fab/OSAT/iPhones) — financials not fetched.

## 2.3 JSON (numeric; ₹ Cr unless noted; null = not sourced)
```json
[
 {"company":"Netweb Technologies","nse":"NETWEB","bse":"543945","role":"member","basis":"screener standalone 23-Oct-26","fy":"FY26","revenue":2184,"revenue_prev":1149,"growth_pct":90.1,"op":285,"opm_pct":13.0,"co_op_ebitda":284.8,"co_adj_ebitda":290.1,"pat":206,"roce_pct":37.5,"roe_pct":32.8,"borrowings":282,"co_net_debt_mar26":-124.4,"co_net_debt_jun26":199.9,"mcap":25782,"price":4336,"pe":98.9,"pb":34.1,"div_yield_pct":0.07,"q1fy27_revenue":819.7,"q1fy27_op_ebitda":120.5,"q1fy27_ebitda_margin_pct":14.70,"q1fy27_pat":85.3,"ttm_revenue":2702,"ttm_pat":261,"order_book_jun26":2506.9,"l1_jun26":848.0,"pipeline_jun26":10410,"order_book_mar26":2097.6,"ai_share_fy26_pct":43.4,"ai_share_q1fy27_pct":62.3,"hpc_fy26":530.8,"private_cloud_fy26":517.0,"ai_fy26":947.8,"other3_fy26":188.0,"ccc_days_q1fy27":96,"receivable_days":78,"inventory_days":110,"payable_days":92,"top10_pct_q1fy27":87.7,"top5_pct_q1fy27":81.2,"top10_pct_fy26":76.4,"cfo_fy26":790,"promoter_pct_sep26":64.16,"fii_pct":9.47,"dii_pct":7.22,"gross_margin_pct":null,"rnd_pct":null,"govt_share_pct":null,"pli_accrued":null,"exports_pct":"4-5","q2fy27_board":"2026-10-24"},
 {"company":"Dixon Technologies","nse":"DIXON","role":"reference","fy":"FY26","revenue":48873,"revenue_prev":38860,"growth_pct":25.8,"op":1873,"opm_pct":3.8,"pat":1644,"roce_pct":29.2,"roe_pct":18.9,"borrowings":994,"investments":1007,"mcap":68568,"pe":36.5,"pb":14.6,"q1fy27_revenue":15548,"q1fy27_pat":718,"promoter_pct":28.50},
 {"company":"Kaynes Technology","nse":"KAYNES","role":"reference","fy":"FY26","revenue":3626,"revenue_prev":2722,"growth_pct":33.2,"op":578,"opm_pct":15.9,"pat":364,"roce_pct":12.7,"roe_pct":8.7,"borrowings":913,"investments":257,"mcap":21521,"pe":62.0,"pb":4.5,"q1fy27_revenue":946,"q1fy27_pat":56,"promoter_pct":53.31},
 {"company":"Syrma SGS Technology","nse":"SYRMA","role":"reference","fy":"FY26","revenue":4819,"revenue_prev":3787,"growth_pct":27.3,"op":546,"opm_pct":11.3,"pat":346,"roce_pct":16.8,"roe_pct":14.0,"borrowings":400,"investments":547,"mcap":27623,"pe":74.4,"pb":9.7,"q1fy27_revenue":1589,"q1fy27_pat":106,"promoter_pct":41.62},
 {"company":"Redington","nse":"REDINGTON","role":"reference","fy":"FY26","revenue":119162,"revenue_prev":99334,"growth_pct":20.0,"op":2348,"opm_pct":2.0,"pat":1284,"roce_pct":18.4,"roe_pct":16.9,"borrowings":2842,"investments":0,"mcap":28093,"pe":15.6,"pb":2.8,"q1fy27_revenue":34922,"q1fy27_pat":453,"promoter_pct":0},
 {"company":"Rashi Peripherals","nse":"RPTECH","role":"reference","fy":"FY26","revenue":15827,"revenue_prev":13773,"growth_pct":14.9,"op":464,"opm_pct":2.9,"pat":282,"roce_pct":17.0,"roe_pct":14.7,"borrowings":991,"investments":0,"mcap":5387,"pe":16.9,"pb":2.6,"q1fy27_revenue":5102,"q1fy27_pat":105,"promoter_pct":63.55},
 {"company":"E2E Networks","nse":"E2E","role":"reference","fy":"FY26","revenue":246,"revenue_prev":164,"growth_pct":50.0,"op":126,"opm_pct":51.2,"pat":-16,"roce_pct":null,"roe_pct":-0.9,"borrowings_sep26":497,"mcap":11656,"pe_cons":165,"pe_sa":99.3,"pb":6.4,"q2fy27_revenue":224,"q2fy27_op":171,"q2fy27_pat":73,"promoter_pct":39.40},
 {"company":"Supermicro","role":"global reference","fy":"FY26 (Jun-26)","revenue_usd_bn":39.1,"revenue_prev_usd_bn":22.0,"gross_margin_pct":10.8,"op_income_usd_bn":2.77,"net_income_usd_bn":2.2,"cfo_usd_bn":-6.8,"fy27_guide_usd_bn":"65-72","mcap":null,"pe":null},
 {"company":"Dell Technologies (ISG)","role":"global reference","period":"Q2 FY27 (May-Jul 2026)","group_revenue_usd_bn":46.97,"isg_revenue_usd_bn":31.78,"ai_server_revenue_usd_bn":16.40,"isg_op_margin_pct":15,"ai_orders_usd_bn":60.9,"ai_backlog_usd_bn":95,"fy27_revenue_guide_usd_bn":192,"mcap":null,"pe":null}
]
```

## 2.4 Conflicts and gaps (company level)
- Netweb **consolidated vs standalone**: screener consolidated page is blank; standalone used. Company reports standalone.
- **EBITDA basis**: screener OP ₹285 Cr = company op. EBITDA ₹284.8 Cr; primer's ₹290 Cr = adjusted (hedge add-back ₹5.24 Cr).
- **CCC**: company 84 d (FY26) vs screener 121 d (year-end basis).
- **Order book definitions** changed (pipeline merged with strategic in Q1 FY27).
- **Promoter %**: primer ~67% (Mar-26) vs **64.16% (Sep-26)**.
- **QIP** amount unverified; **strategic order** identity unresolved.
- Dixon primer revenue/EBITDA basis differs from screener (₹49,586 vs ₹48,873 Cr; ₹2,580 vs ₹1,873 Cr).

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (member)
| Company | FY26 rev | YoY % | OP | OPM % | PAT | Q1 FY27 rev | Q1 YoY % | Q1 OPM % (co.) | Q1 PAT | M-cap 23-Oct | P/E (TTM) | EV/EBITDA FY26 | OB + L1 (Jun-26) | AI share Q1 | CCC (Q1, co.) | Top-10 (Q1) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Netweb | 2,184 | +90.1 | 285 | 13.0 | 206 | 819.7 | +172.1 | 14.7 | 85.3 | 25,782 | 98.9 | ~91× (co. net debt) | 3,354.9 | 62.3% | 96 d | 87.7% |

## 3.2 Reference-peer grid and aggregates (screener 23-Oct-26; straight sums, ratios of sums)

**(a) Indian reference set, FY26 (₹ Cr)**
| Company | FY26 rev | FY25 rev | OP | PAT | M-cap | % of set rev | % of set m-cap |
|---|---|---|---|---|---|---|---|
| Netweb | 2,184 | 1,149 | 285 | 206 | 25,782 | 1.1 | 13.7 |
| Dixon | 48,873 | 38,860 | 1,873 | 1,644 | 68,568 | 25.1 | 36.4 |
| Kaynes | 3,626 | 2,722 | 578 | 364 | 21,521 | 1.9 | 11.4 |
| Syrma | 4,819 | 3,787 | 546 | 346 | 27,623 | 2.5 | 14.6 |
| Redington | 1,19,162 | 99,334 | 2,348 | 1,284 | 28,093 | 61.2 | 14.9 |
| Rashi | 15,827 | 13,773 | 464 | 282 | 5,387 | 8.1 | 2.9 |
| E2E | 246 | 164 | 126 | −16 | 11,656 | 0.1 | 6.2 |
| **All seven** | **1,94,737** | **1,59,789** | **6,220** | **4,110** | **1,88,630** | 100 | 100 |

| Group | Members | FY26 rev | FY25 rev | YoY | OP | OPM (ratio of sums) | PAT | M-cap | M-cap ÷ PAT |
|---|---|---|---|---|---|---|---|---|---|
| All seven | above | 1,94,737 | 1,59,789 | +21.9% | 6,220 | 3.19% | 4,110 | 1,88,630 | 45.9× |
| Makers (Netweb + 3 EMS) | Netweb, Dixon, Kaynes, Syrma | 59,502 | 46,518 | +27.9% | 3,282 | 5.52% | 2,560 | 1,43,494 | 56.1× |
| EMS three | Dixon, Kaynes, Syrma | 57,318 | 45,369 | +26.3% | 2,997 | 5.23% | 2,354 | 1,17,712 | 50.0× |
| Distributors | Redington, Rashi | 1,34,989 | 1,13,107 | +19.3% | 2,812 | 2.08% | 1,566 | 33,480 | 21.4× |
| AI pure-plays | Netweb, E2E | 2,430 | 1,313 | +85.1% | 411 | 16.91% | 190 | 37,438 | 197× |

**(b) Q1 FY27 vs Q1 FY26 (₹ Cr, screener; E2E consolidated Q1 FY26 base is a part-quarter for the new subsidiary)**
| Group | Rev Q1 FY27 | Rev Q1 FY26 | YoY | OP Q1 FY27 | OPM | OP Q1 FY26 | OPM | PAT Q1 FY27 | PAT Q1 FY26 | YoY |
|---|---|---|---|---|---|---|---|---|---|---|
| All seven | 59,084 | 43,894 | +34.6% | 1,875 | 3.17% | 1,242 | 2.83% | 1,567 | 727 | +115.5% |
| EMS three | 18,083 | 14,453 | +25.1% | 773 | 4.27% | 682 | 4.72% | 880 | 405 | +117.3% |
| Netweb alone | 820 | 301 | +172.4% | 121 | 14.8% | 45 | 15.0% | 85 | 30 | +183% |

**Read:**
- Netweb is **1.1% of the set's revenue but 13.7% of its market value**; its 13% OPM is ~4× the set's 3.2%.
- The "AI pure-play" pair trades at **~197× FY26 PAT** in aggregate (E2E's FY26 loss distorts) — the market is capitalising the AI theme, not current earnings.
- Dixon's Q1 PAT (₹718 Cr) includes ₹537 Cr other income — the EMS three's +117% PAT growth is mostly non-operating.
- **Do not present the seven as an "industry total"**: they are different businesses; Netweb is the only member.

**(c) Global reference (latest period; US$)**
| Company | Period | Revenue | Op. margin | Net income |
|---|---|---|---|---|
| Dell (group / ISG) | Q2 FY27 | $46.97 bn / $31.78 bn | 12.6% (non-GAAP) / ~15% | n/a |
| Supermicro | FY26 | $39.1 bn | 7.1% | $2.2 bn |
| Lenovo (group) | Q1 FY26/27 | $26.9 bn | n/a | $1.1 bn (adj.) |
| HPE (servers, IDC) | 2Q26 | $5.87 bn | n/a | n/a |
| IEIT (servers, IDC) | 2Q26 | $4.00 bn | n/a | n/a |
| Netweb | FY26 | $0.23 bn at ₹94.9 | 13.0% (EBITDA) | $0.022 bn |
Global m-caps and P/Es not fetched → n/a.

**(d) Ownership (Sep-26, screener)**: promoter Netweb 64.16, Dixon 28.50, Kaynes 53.31, Syrma 41.62, Rashi 63.55, E2E 39.40, Redington nil. FII: Netweb 9.47, Dixon 18.96, Kaynes 6.08, Syrma 9.51, Redington 63.42, Rashi 3.99, E2E 2.53 [V].

## 3.3 Reconciliation vs primer (netweb-technologies.html, refreshed 13-Jul-2026)
| Item | Primer | Screener / company (23-Oct-26) | Use |
|---|---|---|---|
| FY26 revenue / PAT | ₹2,184 Cr / ₹206 Cr | Same [V] | — |
| FY26 EBITDA | ~₹290 Cr, ~13.3% | Op. EBITDA ₹284.8 Cr (13.0%); adj. ₹290.1 Cr (13.3%); screener OP ₹285 Cr | State basis |
| FY25 margin | "up from ~13% FY25" | FY25 OPM ~13.8% (screener OP ₹159 Cr); i.e. margin **fell** in FY26 | Fix |
| FY24 revenue / PAT | ~₹744 Cr / ~₹59 Cr ("approximate") | **₹724 Cr / ₹76 Cr** [V screener] | Screener |
| Order book | ~₹2,100 Cr (~₹2,400 incl. L1) entering FY27 | Mar-26 ₹2,097.6 + L1 ₹327.8 (ok); **Jun-26 OB ₹2,506.9 + L1 ₹848.0; pipeline ₹10,410 Cr** | Update |
| Q1 FY27 | not covered | Rev ₹819.7 Cr (+172%); EBITDA 14.7%; PAT ₹85.3 Cr; AI 62% | Add |
| Promoter | ~67% (Mar-26) | **64.16% (Sep-26)** after QIP | Screener |
| Balance sheet | "net cash; cash ~₹365 Cr vs borrowings ~₹280 Cr" | Mar-26 free cash ₹406.6 Cr, borrowings ₹271.7 Cr (net cash ₹124 Cr incl. leases); **Jun-26 net debt ₹200 Cr**; QIP Aug-26 | Update |
| CCC | ~84 days; receivable ~86 | Same for FY26 [V co.]; **Q1 FY27 96 d (inventory 110)** | Update |
| ROCE / ROE | 37.5% / ~33% | Same FY26; Q1 ann. 48.2% / 44.6% | — |
| M-cap / price / P/E | ~₹25,000 Cr; ~₹4,400; ~100–120× | **₹25,782 Cr; ₹4,336; 98.9× TTM** | Screener |
| Guidance | "35–40% growth for next couple of years at 13–14% EBITDA" | Q1 call: margin 13–14% reiterated; **no revenue guidance** ("not guiding") | Fix |
| Customer concentration | "131 new customers… reduce reliance on any single account" | Top-10 76.4% (FY26) → 87.7% (Q1); top-5 62.2% → 81.2% | Fix |
| Supercomputers built | "300+ bespoke supercomputers" | Company: "60+ supercomputers designed"; "17 times in Top500" | Fix / verify |
| Brands | "Kyubits / Tyrone" for AI | Company: **Kubyts** is a container platform (2023); AI systems are Tyrone (Camarero) | Fix |
| IndiaAI outlay | ~₹10,300 Cr | ₹10,372 Cr (PIB) | Fix |
| Global shares | Dell ~10%, SMCI ~9.5%, Lenovo ~4%, HPE ~3.1% | IDC 2Q26: 13.4 / 6.1 / 5.1 / 3.5% | Update |
| Founding | "incorporated 1999" | Company: "Established in 1999"; CMD "founded Netweb in 1996" | Note both |
| Q2 FY27 | — | Board 24-Oct-2026; call 26-Oct | Add |

## 3.4 Primer issues (format as primer-issues.md)

### From Computer Hardware research (2026-10-23, computer-hardware-industry.md §3.4)

- **netweb-technologies.html — stale after Q1 FY27 and the QIP (refreshed 13-Jul):** add Q1 FY27 (revenue ₹819.7 Cr, +172%; op. EBITDA ₹120.5 Cr, 14.7%; PAT ₹85.3 Cr; AI ₹510.6 Cr = 62.3%); order book **₹2,506.9 Cr + L1 ₹848.0 Cr + pipeline ₹10,410 Cr** (30-Jun-26; pipeline now includes strategic opportunities, so not like-for-like with Mar-26's ₹4,431.5 Cr); the **Aug-2026 QIP (floor ₹4,885.90)**; promoter now **64.16%**; Q2 FY27 board 24-Oct-2026.
- **netweb-technologies.html — FY24 figures wrong:** revenue chart "FY24 ~744" and PAT "FY24 ~59" → screener **₹724 Cr and ₹76 Cr**. The "approximate" caveat should go; both are reported numbers.
- **netweb-technologies.html — margin direction:** "~13.3% FY26 … up from ~13% FY25" is wrong in direction: FY25 OPM ~13.8% (screener OP ₹159 Cr / ₹1,149 Cr; company op. EBITDA ₹159 Cr), FY26 13.0% reported (13.3% only on the adjusted basis). State that ~₹290 Cr / 13.3% is "adjusted operating EBITDA" (hedge-gain add-back of ₹5.24 Cr).
- **netweb-technologies.html — guidance misstated:** "~35–40% annual revenue growth for the next couple of years" is not what management says now; on the Q1 FY27 call they gave **no revenue guidance**, only a 13–14% EBITDA margin band and ~60% pipeline conversion over 18–24 months. Attribute any growth number to a dated source or drop it.
- **netweb-technologies.html — customer concentration contradicts the text:** "131 new customers in FY26 reduce reliance on any single account" — but top-10 share rose from 65.8% (FY25) to **76.4% (FY26)** and **87.7% in Q1 FY27 (top-5 81.2%)**; repeat-customer revenue 98.9% in Q1. Add the numbers and reframe concentration as a rising risk.
- **netweb-technologies.html — balance sheet now different:** "zero net debt; ~₹365 Cr cash vs ~₹280 Cr borrowings; net free cash generated in FY26" — at Jun-26 company **net debt was ₹200 Cr** (free cash ₹73.4 Cr; borrowings ₹262.5 Cr); finance cost ₹11.5 Cr in Q1 vs ₹1.0 Cr a year earlier; CCC 96 days with inventory 110 days. Post-QIP net cash likely returns — verify with Sep-26 balance sheet.
- **netweb-technologies.html — "300+ bespoke supercomputers":** the company's own deck says "60+ supercomputers designed" and "17 times in the world's Top500". Verify the 300+ claim (it may count small clusters) or replace.
- **netweb-technologies.html — brand name:** "Kyubits / Tyrone" for AI systems; the company's product is **Kubyts**, a container platform launched in 2023; AI systems are Tyrone Camarero (GB200, B200, Spark). Fix the table row.
- **netweb-technologies.html — order-book terminology:** explain "strategic big-ticket orders" (₹1,625.2 Cr of the ₹2,097.6 Cr Mar-26 book; ₹558.8 Cr executed in FY26; ~₹430 Cr executed in Q1 FY27) and the **₹1,734 Cr IndiaAI order of 3-Sep-2025** (HGX B200, via a large Indian IT distributor, execution Q4 FY26–H1 FY27), which the primer never mentions.
- **netweb-technologies.html — global share chart outdated:** replace with IDC 2Q26 (Dell 13.4%, Supermicro 6.1%, Lenovo 5.1%, HPE 3.5%, IEIT 2.4%, ODM Direct 53.9%; market $166.3 bn, +52%).
- **netweb-technologies.html — IndiaAI outlay and status:** "~₹10,300 Cr" → ₹10,372 Cr; add 45,000+ GPUs (Jun-2026), 93.18 lakh GPU-hours used, 20 foundation models (PIB 13-Aug-2026); NIC Grace-Blackwell cloud and CERT-In orders (company milestones).
- **netweb-technologies.html — "government moat" sizing unsourced:** "several-thousand-crore-per-year" ring-fenced pool has no source; and "India arms of Dell, HPE, Lenovo and Supermicro … generally do not clear [Class-I]" needs qualification now that Dell, HP and Lenovo are PLI 2.0 assemblers in India (HPE with VVDN, Lenovo Puducherry). Add the MeitY local-content notification reference or soften.
- **netweb-technologies.html — PLI wording:** "PLI 2.0 for IT hardware: … Netweb is a qualified beneficiary" — the company's deck says it qualified for the IT-hardware PLI in **2021 (PLI 1.0)** and telecom/networking PLI in 2022; PLI 2.0 participation is not confirmed. Also note only ~₹82 Cr has been disbursed industry-wide under PLI 2.0.
- **netweb-technologies.html — missing risks:** memory super-cycle (DRAM +80%/+40%/+20% QoQ in Q2–Q4 2026), US export controls (AI Diffusion rule Jan-2025, rescinded May-2025; Pax Silica Feb-2026), Supermicro's export-control review as an industry warning, execution cycle lengthening from 8–12 to 16–20 weeks.
- **netweb-technologies.html — valuation refresh:** m-cap ₹25,782 Cr, price ₹4,336 (52-week ₹2,920–5,813), P/E 98.9× TTM / 125× FY26, P/B 34× (screener 23-Oct-26); QIP floor ₹4,885.90 is above the current price.
- **dixon-technologies.html — basis conflict:** revenue ₹49,586 Cr and EBITDA ₹2,580 Cr (5.2%) vs screener consolidated ₹48,873 Cr and OP ₹1,873 Cr (3.8%); state the basis (company EBITDA incl. other operating income/PLI?). ROCE "~42%" vs screener 29.2%. M-cap ~₹76,000 Cr (Jun-26) → **₹68,568 Cr**; P/E ~53× → **36.5×**. Add: **US$7 mn guarantee for Padget Electronics in favour of Quanta Computer (21-Oct-2026)** — a likely IT-hardware/server tie-up worth a line in the IT-hardware section.
- **kaynes-technology.html — valuation:** m-cap ₹22,097 Cr (13-Oct) → ₹21,521 Cr (23-Oct); stock is near its 52-week low (₹2,995; high ₹6,998). No IT-hardware/server angle mentioned — fine.
- **syrma-sgs-technology.html — valuation:** m-cap ₹32,665 Cr / P/E ~88× (13-Oct) → **₹27,623 Cr / 74.4×** (23-Oct; −15% in ten days). Q2 FY27 board 30-Oct-2026 — add.
- **redington.html — valuation stale:** m-cap ~₹21,900 Cr (Jul-26) → **₹28,093 Cr** (+28%); P/E 15.6×. Consider mentioning that Redington fits the description of the distributor behind Netweb's ₹1,734 Cr IndiaAI order — **only if a source confirms it**. Add Redington Gulf–AWS collaboration (22-Oct-2026).
- **General:** none of these primers mentions the IndiaAI GPU-tender mechanics (providers buy GPUs, government subsidises GPU-hours) or the CY2026 laptop/server Import Management System renewal (DGFT circular 08/2025-26, 17-Dec-2025).

## 3.5 Key source URLs
- Screener (23-Oct-2026): https://www.screener.in/company/NETWEB/ (standalone; consolidated empty) · https://www.screener.in/company/DIXON/consolidated/ · /KAYNES/consolidated/ · /SYRMA/consolidated/ · /REDINGTON/consolidated/ · /RPTECH/consolidated/ · /E2E/consolidated/ and /E2E/
- Netweb Q1 FY27 presentation (BSE, 28-Jul-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f61d7f70-daf7-4f03-a7e8-28a8eeb8996a.pdf
- Netweb Q1 FY27 call transcript (29-Jul-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=82b379a4-fa41-4ea7-bce4-dabe60795fa0.pdf
- Netweb Q4 FY26 presentation (2-May-2026): https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7c766e2f-8676-4806-82e4-91a4fe495b42.pdf
- Netweb announcements (Q2 board 24-Oct; call 26-Oct): https://www.bseindia.com/stock-share-price/netweb-technologies-india-ltd/NETWEB/543945/corp-announcements/
- QIP alert (18-Aug-2026): https://www.muthootsecurities.com/CorporateInfo/ComNews/Netweb-Technologies-India-Ltd/25230010004
- ₹1,734 Cr order (3-Sep-2025): https://www.business-standard.com/markets/news/netweb-technologies-shares-surge-9-percent-on-rs-1-734-crore-ai-compute-order-125090300500_1.html (snippet only; 403 on fetch)
- PIB factsheet "Semiconductor and AI Revolution" (13-Aug-2026): https://www.pib.gov.in/FactsheetDetails.aspx?Id=150860&reg=5&lang=1
- CBRE data centres H1-2026 (via IBEF, 7-Oct-2026): https://www.ibef.org/news/india-likely-to-add-more-than-200-mw-of-new-data-centre-capacity-in-h2-2026-pushing-total-capacity-to-2-gw-cbre
- IDC Worldwide Server Tracker 2Q26 (10-Sep-2026): https://www.idc.com/resource-center/press-releases/2q2026-wwserver-tracker/
- Supermicro FY26 8-K (11-Aug-2026): https://www.sec.gov/Archives/edgar/data/0001375365/000137536526000021/exhibit991_20260630.htm
- Dell Q2 FY27 (Futurum, 9-Sep-2026): https://futurumgroup.com/insights/dell-technologies-q2-fy-2027-ai-orders-fuel-server-and-storage-growth/
- TrendForce 4Q26 memory outlook (30-Sep-2026): https://www.trendforce.com/presscenter/news/20260930-13258.html
- IMS / laptop imports (PTI via Outlook Business, 3-Sep-2024): https://www.outlookbusiness.com/technology/over-4-billion-imports-so-far-this-fiscal-under-management-system-for-laptops-tablets-official
- PLI IT HW 2.0 status (secondary, 14-Aug-2026): https://sarkariyojana.com/scheme/production-linked-incentive-pli-it-hardware-2-0/
- IndiaAI GPU counts (PIB search results): https://www.pib.gov.in/PressReleasePage.aspx?PRID=2245069 · https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026210784401.pdf (not fetched)
- India PC market 2025 (IDC, 5-Mar-2026; snippet): https://www.idc.com/resource-center/press-releases/india-pc-market-2025/

---

# PART 4 — Deep-research supplement (23-Oct-2026)

Second, primary-source pass. It was compiled on 23-Oct-2026, ~4:15–6:00 pm IST, the day **before** Netweb's Q2 FY27 board meeting. Scratch notes and downloaded documents are in `/tmp/computer-hardware-deep/` (notes.md, pdf/, ind/, raw/).

**Status check: Q2 FY27 results are NOT out.** NSE's corporate-announcement feed for NETWEB, pulled at ~4:20 pm on 23-Oct-2026, ends with the 20-Oct-2026 intimation of the Q2 FY27 earnings call. The board meets on 24-Oct-2026 and the call is on 26-Oct-2026 at 3:30 pm [V NSE API]. Every Netweb number below therefore stops at Q1 FY27 (Jun-26), plus the August 2026 QIP.

**Tags used in Part 4**
- **[V]** = fetched in this pass from the named source.
- **[V-P1]** = verified from a primary source in Parts 1–3 earlier today but not re-fetched in this pass.
- **[V-snip]**, **[K]** and **[E]** mean the same as in Part 1.

**Primary documents read in this pass**
1. **Netweb FY26 Annual Report** (BSE, AttachHis 87148e7d…; financial statements signed 2-May-2026; 32,000 lines of text extracted). Sections read: MD&A, KPI table, notes 38 (related parties), 40 (segment, major customers), 42 (contingencies), 50 (PLI) and 57, the cash-flow statement, the balance sheet, and the Board's-report annexure (R&D, FX).
2. **Q1 FY27 results statement**: a scanned PDF from NSE, 28-Jul-2026. Page 4 was rendered to an image and read line by line.
3. **Q1 FY27 presentation and Q1 call transcript**: re-downloaded from NSE (byte-identical to the Part 1 copies).
4. **Q4 FY26 presentation and the Q4 FY26 call transcript** (call held 4-May-2026; transcript filed 7-May-2026). Part 1 had not read this transcript.
5. **Four QIP filings on NSE**: 17-Aug, 20-Aug (issue closure), 20-Aug (allotment, with the list of allottees above 5%) and the 25-Aug press release.
6. **NSE SAST Reg 29(2) disclosures** (Feb-2026 and Aug-2024 promoter sales) and the **NSE shareholding-pattern history**.
7. **Two CRISIL rating letters with full rationale** (filed 26-May and 10-Jun-2026).
8. **The two Reg-30 order intimations** of 3-Sep-2025 (₹1,734 Cr) and 19-Sep-2025 (₹450 Cr).
9. **Screener**: Netweb standalone and six Indian peers, refreshed.
10. **Industry sources**:
    - PIB factsheet of 13-Aug-2026 (re-fetched).
    - PIB backgrounder of 10-Feb-2026 (IndiaAI).
    - PIB release of 30-May-2025 with the L1 GPU-hour rate tables (via the negd.gov.in mirror).
    - PIB backgrounder of 4-Oct-2026 on NSM (PRID 2318908).
    - **DGCI&S/Commerce TradeStat EIDB queries for HS 8471, 847130 and 847150, FY22–FY26, including country splits.**
    - IDC India press releases of 25-Aug-2026 and 19-Jan-2026.
    - TrendForce releases of 30-Sep, 14-Oct and 22-Oct-2026.
    - Miller & Chevalier BIS mid-year review (Aug-2026).
    - Lenovo Q1 FY26/27 press release (Zawya copy).
    - HPE FQ3 2026 (Pulse2 summary).
    - Dell Q2 FY27 (Futurum).
    - stockanalysis.com quotes (23-Oct-2026).

Web calls used: ~55.

## 4.0 Supersedes — corrections to Parts 1–3 (the writer should apply these)

| # | Where in Parts 1–3 | Old value / statement | New value / statement | Source |
|---|---|---|---|---|
| S1 | §9.1, §9.2, B2, F, 2.1 "Cash flow", JSON `cfo_fy26` | Netweb CFO FY26 **₹790 Cr**, FCF ₹779 Cr, CFO/EBITDA **301%**; "FY26 cash flow flattered by advances" | **CFO FY26 = ₹171.5 Cr** (₹1,714.92 mn); capex ₹12.0 Cr; FCF ≈ **₹159 Cr**; CFO/op. EBITDA ≈ **60%**. Screener's ₹790 Cr picks up a **sign misprint in the AR's cash-flow statement**: "(Increase)/Decrease in trade receivables 3,092.14" is printed without brackets, but the statement only adds up to "cash generated from operations ₹2,404.21 mn" if it is **−3,092.14**. ₹1,714.9 mn + 2 × ₹3,092.1 mn = ₹7,899 mn = screener's ₹790 Cr. FY26 working-capital movements (₹ mn): inventories −5,835; receivables −3,092; payables +4,546; other liabilities (customer advances) +4,135 | V AR FY26 cash-flow statement and balance sheet; arithmetic E |
| S2 | Trap 5, §4.2, §9.1, F, H4, JSON | Gross margin "not disclosed"; ~20–22% **[E]** | **Company-reported gross margin: FY26 20.85%, FY25 23.11%** (−2.26 pp). The company defines COGS as materials consumed + change in FG/WIP inventories; COGS was ₹1,728.3 Cr vs ₹883.5 Cr. Quarterly, derived on the same definition from the Q1 results: **Q1 FY26 25.6% → Q2+Q3 FY26 19.9% → Q4 FY26 20.4% → Q1 FY27 21.2%** | V AR MD&A KPI table; V Q1 FY27 results statement; quarterly derivation E |
| S3 | §3, §9.1, F, H5, JSON `govt_share_pct` | Government vs enterprise split "not disclosed" | **FY26 customers: Government 42.8% vs non-government 57.2%** (AR KPI page). On the Q4 call the CMD said "50% is government, 50% is enterprise" | V AR p.4; V Q4 FY26 transcript (4-May-2026) |
| S4 | §9.1, F, H6, JSON `rnd_pct` | R&D spend "not disclosed"; 125 R&D staff | **R&D expenditure ₹13.14 Cr including capex (≈0.6% of revenue)** per the Board's-report annexure. R&D team **110 (19.33% of workforce) at 30-Jun-2026**, per the AR; the Q1 PPT says 125. Total employees 441 → **569**. CRISIL's rationale says Netweb invests "2–3% of annual revenues" in R&D, which conflicts. **Use the AR's statutory ₹13.14 Cr** and note that much engineering cost probably sits in employee cost rather than in "R&D" | V AR; V CRISIL 10-Jun-2026 |
| S5 | §7.2, H7, primer issue "PLI wording", JSON `pli_accrued` | "PLI 2.0 participation not confirmed"; PLI accrued n/d | **Netweb IS a PLI IT Hardware 2.0 beneficiary for servers.** It was originally approved under PLI 1.0 (IFCI letter of 1-Jul-2021) and **migrated to PLI 2.0 by approval letter of 24-Nov-2023** (IFCI/MeitY/PLI-ITHW-231124033). The scheme is valid FY24 (Jul–Mar) to FY29 (Apr–Jun). **PLI income booked: nil in FY26; ₹5.94 Cr in FY25** (other operating revenue); PLI receivable nil at Mar-26 | V AR note 50 and note 28 |
| S6 | Front matter item 1, trap 8, B4, C.3, H1, §3.3 | QIP ≈ ₹1,170–1,230 Cr **[E]**, ~25 lakh shares, price unknown | **QIP: 25,05,219 shares at ₹4,790 (1.96% below the ₹4,885.90 floor) = ₹1,200.00 Cr.** Opened 17-Aug-2026, closed and allotted 20-Aug-2026. Equity went from 5,69,40,687 to **5,94,45,906 shares (+4.40%)**. Allottees above 5%: ICICI Prudential MF schemes 16.67%, Nomura India Investment Fund 13.10%, Goldman Sachs India Equity Portfolio 11.21%, Think India Opportunities 8.33%. BRLMs: IIFL Capital, CLSA, Resurgent. Use: working capital and general corporate purposes. It is the first equity raise since the IPO | V NSE filings 17-Aug, 20-Aug ×2, 25-Aug-2026 |
| S7 | Front matter item 2, H2, 2.1 Ownership | Promoter 71.00% → 66.98% (Dec-25 → Mar-26) "looks like a block/OFS — not found" | **Open-market sale on 12-Feb-2026**: Sanjay Lodha 8,99,000 shares; Navin, Niraj and Vivek Lodha 3,93,645 each. Total **20,79,935 shares = 3.65%**. Sanjay is left with 26.58% and each brother with 13.39%. An ESOP allotment of 2,86,819 shares on 4-Feb-2026 had already diluted the group from 71.00% to ~70.64%. **The Jun→Sep 2026 fall to 64.16% is pure QIP dilution** (66.98% × 5.694/5.945 = 64.16%). The sale price is not in the filing [still open]. **This is the promoters' second ~3.65% sale in 18 months**: the Aug-2024 sale was 20,54,795 shares at ~₹2,232 | V NSE SAST API; V NSE shareholding history; V-snip AngelOne (2024 price), ScanX (70.64%) |
| S8 | Trap 2, B1, H3, §2.1 story, primer issue | "Strategic order ≠ ₹1,734 Cr — or maybe it is. Do not assert either"; 558.8 + 1,625.2 = 2,184 > 1,734 "→ more than one strategic order" | **Resolved.** The strategic book consists of **two POs from the same awarder**, "one of the largest Indian-headquartered global providers of technology distribution and integrated supply chain solutions": **₹1,734 Cr (3-Sep-2025**; NVIDIA Blackwell/HGX-B200 servers; IndiaAI sovereign AI; execution by H1 FY27) + **₹450 Cr (19-Sep-2025**; Tyrone AI GPU systems; execution by end-FY26). **1,734 + 450 = ₹2,184 Cr = ₹558.8 Cr executed in FY26 + ₹1,625.2 Cr outstanding at Mar-26, exactly.** About ₹430 Cr of the ~₹1,600 Cr was executed in Q1 FY27, which leaves **~₹1,195 Cr due in Q2 FY27** (the "H1 FY27" deadline) [E]. The awarder is **still unnamed**; no search result names Redington | V NSE Reg-30 filings 3-Sep and 19-Sep-2025; V Q4 PPT; V Q1 call |
| S9 | §2.1 "Installed base", §3.3 row "Supercomputers built", primer issue "300+ supercomputers" | "60+ supercomputers designed"; label mapping garbled; primer's "300+" called unverified | AR operational highlights: **600+ supercomputing systems installed; 10,000+ accelerator/GPU-based AI systems; 60+ private-cloud/HCI installations; 3 supercomputers (AIRAWAT, KABRU, PARAM Yuva-II) listed 17 times in the Top500.** CRISIL says "more than 300 made-in-India HPC units". **The primer's "300+" therefore has a source (CRISIL), and the company's own number is higher (600+).** Part 3's "fix" should be reversed to "attribute" | V AR p.5 and value-creation page; V CRISIL rationale |
| S10 | §3.3 Guidance row, primer issue "guidance misstated", C.3 anchors | "No revenue guidance ('not guiding'); primer's 35–40% is not what management says" | On the **Q4 FY26 call (4-May-2026)** management guided **35–40% revenue growth for the organic/base business, explicitly excluding the strategic order**, plus 13–14% EBITDA. CFO Sanjeev Sancheti: "the guidance on the top line is not inclusive of the strategic order… about 35%". On the **Q1 call (29-Jul)**: "not guided really" and "not guiding on revenue at all" for new verticals; the 13–14% margin band, ~60% conversion over 18–24 months and 16–20-week execution all reiterated. **Primer fix: keep 35–40% but add "organic, ex-strategic, as of May-2026"** | V Q4 transcript; V Q1 transcript |
| S11 | §2.3, §5.3, E12 | PC imports FY23 **$5.33 bn, China $5.11 bn (~96%)**; FY22 $7.37 bn; FY24 $8.4 bn for IMS items | **TradeStat (DGCI&S), HS 847130 portable computers/laptops: FY22 $7.95 bn, FY23 $5.89 bn, FY24 $5.45 bn, FY25 $6.13 bn, FY26 $6.73 bn; China share 71.9 / 75.7 / 76.6 / 79.9 / 71.8%.** Whole HS 8471: FY23 $10.08 bn, FY24 $9.37 bn, FY25 $11.40 bn, **FY26 $13.71 bn (+20.2%)**. The "96%" in Part 1 is wrong: China's share of laptop imports has never exceeded 80% in FY22–FY26 | V TradeStat EIDB, fetched 23-Oct-2026 |
| S12 | §2.3 "FY26 HS 8471 not sourced", H9 | Not reached | **FY26 HS 8471 = $13,706.78 mn**, 1.77% of India's imports. **HS 847150 (processing units, incl. rack servers and GPU systems) $4,957.5 mn in FY26, +38.1%**, after +51.1% in FY25. China is only **6.6%** of 847150. Leading sources: Singapore $858 mn, USA $833 mn, Malaysia $388 mn, Taiwan $375 mn, China $325 mn, Mexico $226 mn | V TradeStat |
| S13 | §7.7, A6, timeline | AI Diffusion rule "rescinded by BIS on 13-May-2025" | **Rescission was announced on 13-May-2025, but as of Aug-2026 the rule had not been formally removed from the CFR.** BIS is not enforcing it, and a replacement is "planned", tied to the AI Action Plan and expected by end of US FY2026 (Sep-2026); none had been published by the time of the alert. Since **15-Jan-2026**, license review for certain advanced chips has been case-by-case rather than presumption of denial (applies to D:5/China destinations). There are **no India-specific caps** | V Miller & Chevalier alert (~12-Aug-2026) |
| S14 | §10.1, §3.2(c), H13 | Global peer m-caps and P/Es "not fetched"; Lenovo ISG not split; HPE only via IDC | **23-Oct-2026 quotes (stockanalysis.com, intraday):** Dell **$293.8 bn, P/E 27.0× TTM / 16.4× fwd**; HPE **$76.9 bn, 29.5× / 12.5×**; Supermicro **$22.2 bn, 10.4× / 7.2×**; Lenovo **HK$280.8 bn (~US$36 bn), fwd 9.1×**. **Lenovo ISG Q1 FY26/27: $8.5 bn (+98%), op. profit $777 mn (9.1%, a record); AI server pipeline $54 bn.** **HPE FQ3 2026 (to Jul-26): revenue $12.2 bn (+34%), Server $6.8 bn (+35.3%), Networking $2.9 bn (+74.9%); FY26 growth guide 34–37%** | V stockanalysis; V Lenovo PR (Zawya); V-snip/secondary HPE (Pulse2) |
| S15 | §7.2 PLI | "Most approved companies treating FY26 as their first production year" | A May-2026 report says **"most participating companies had selected FY25 as their first year of production"**. Sources conflict, so say "FY25–FY26". The ~₹82 Cr disbursed and the possible addition of AI servers in a late-FY27 review are re-confirmed. The 27 approved names include Kaynes and Syrma as well as Dell, HP, Lenovo, Asus, Foxconn, Dixon and Sahasra; **Netweb is also one of them (S5)** | V-snip AngelOne 16-May-2026 (secondary) |
| S16 | §2.4, E10 | India DC capacity: PIB ~1,575 MW (Aug-26) | Add an earlier PIB point: **"cloud data centre capacity ~1,280 MW", expected to grow 4–5× by 2030** (PIB backgrounder, 10-Feb-2026). City split per PIB: Mumbai/Navi Mumbai >25%, Bengaluru ~22%, Hyderabad ~22%, NCR 14%, Chennai 13%, Pune 6%, Kolkata 3%. India holds ~20% of the world's data but 3% of its DC capacity | V PIB 10-Feb-2026 |
| S17 | §2.4 hyperscaler pledges [K] | Microsoft $17.5 bn, Amazon ~$35 bn, Google $15 bn "verify" | **Microsoft $17.5 bn by 2030** (AI/cloud; announced ~9-Dec-2025), **Amazon $35 bn by 2030** (all India businesses, not only AWS; 10-Dec-2025), **Google $15 bn** Visakhapatnam AI hub. PIB adds **AWS $8.3 bn** for a Maharashtra data centre | V-snip Reuters syndications; V PIB 10-Feb-2026 (Google, AWS) |
| S18 | §2.1 / §2.2 India server market | "No public vendor-share table"; market $1.7–6.6 bn | **IDC: India enterprise-infrastructure market (servers + storage + networking infrastructure tracker) $1.67 bn in Q1 2026 vs $1.28 bn (+30%)**, driven by CSP AI front-loading and memory/NAND price inflation, with muted units. West + South India = **>89% of server demand** (3Q25). Lenovo **claims** IDC ranks it #2 in India x86 servers with **24.7%** in Q4 CY25 (10% a year earlier) [V-snip] | V IDC PRs 25-Aug-2026 and 19-Jan-2026 |
| S19 | §7.5 NSM | "40 supercomputers, ~68 PF [V-snip]" | **Now [V] from PIB (4-Oct-2026):** 40 systems, 68 PF; target 50 systems, >123 PF; outlay ~₹4,500 Cr. The PIB adds that **C-DAC's Rudra servers are indigenously designed, "with technology transferred to Indian EMS partners for manufacturing"** (secondary summaries: ~6,000 deployed, 1,500 being built). **This is a state-designed rival server line built by EMS firms.** No NSM 2.0 outlay | V PIB PRID 2318908 |
| S20 | §7.4 IndiaAI rates | "L1 rates blog-level ₹115–150/hr" | **PIB, 30-May-2025 (round 2): L1 on-demand ₹/GPU-hour** — **NVIDIA B200 SXM ₹323.00** (Yotta; ₹308 on one-month terms); **H100 SXM ₹153.00** (Cyfuture); H100 NVL ₹168.74 (Netmagic); A100 80 GB ₹135.90; AMD MI300X ₹168.22; MI325X ₹169.20. Round 2 took the pool from 18,417 to **34,333 GPUs** (+15,916), with seven bidders (Cyfuture, Ishan, Locuz, Netmagic, Sify, Vensysco, Yotta). The ₹115.85/₹150 figures are "average discovered rates" from round 1, not L1 | V PIB 30-May-2025 |
| S21 | §9.1 CCC row / F | CCC 73 → 84 → 96 days (company) | Add management's framing from the Q4 call: CCC "typically operates from **90 to 110 days**". CRISIL measures **gross current assets of 268 days** at Mar-26 (205 a year earlier): debtors 112 days, inventory 155 days. **30–40% of annual revenue is booked in Q4** | V Q4 transcript; V CRISIL |
| S22 | §4.3 Capacity | "Can support ₹3,000+ Cr" | Add: **"capacity utilisation would be around 65% to 70%"** (CMD, Q4 call). There are three facilities in Faridabad (H1, H2, IMT) plus the new dense-GPU line, which supports ">150 kW per rack" | V Q4 transcript; V AR |
| S23 | §2.4 cust. concentration, §9.1, E7 | Top-10/top-5 only | Add: **three customers each ≥10% of FY26 revenue (two in FY25)** (AR note 40). CRISIL: **top-5 customers 65–70% of revenue; top-3 suppliers 65–70% of procurement**, with a "significant percentage" imported from Taiwan. Customers named by CRISIL: IITs, ISRO, RailTel, University of Delhi, Infosys, **Yotta**, Zoho, TCS | V AR; V CRISIL |
| S24 | Front matter item 4 | "CRISIL rating actions 25-May and 10-Jun-2026 (content not read)" | **25-May-2026: long-term rating upgraded from Crisil A/Stable to A+/Stable; A1 reaffirmed; rated bank facilities ₹260 Cr → ₹700 Cr. 10-Jun-2026: reaffirmed; facilities raised to ₹2,420 Cr** (incl. a ₹2,040 Cr working-capital facility). Fund-based utilisation averaged **24%** in the 12 months to Apr-26. Upgrade trigger: revenue >₹4,000 Cr at a 13–14% margin. Downgrade trigger: revenue <₹2,000 Cr or OPM <11% | V CRISIL letters on NSE |
| S25 | §2.5 / C.4 | (none) | Note: CRISIL's FY26 "revenue ₹2,138 Cr" in the text conflicts with its own table (₹2,183.6 Cr). Use ₹2,183.6 Cr | V CRISIL |
| S26 | §2.1 global server market | IDC 2Q26 only | Add the TrendForce full-year view (14-Oct-2026): **2026 server market $639.2 bn, of which AI servers ~$479 bn (~75%)**; **2027 >$1 trn, AI ~$920 bn (~81%)**; top-9 CSP capex **$957 bn in 2026 (+106%)** and **>$1.5 trn in 2027** | V TrendForce |

## 4.1 Verification table — 40 figures the writer will use

"Agrees?" compares with Parts 1–3. **P** = primary source (company filing, regulator, government statistics, the company's own release); **S** = secondary.

| # | Figure | Value | Source (URL / document) | Fetched this pass? | P/S | Agrees with Parts 1–3? |
|---|---|---|---|---|---|---|
| 1 | Netweb FY26 revenue from operations | ₹2,183.56 Cr (+90.0%) | AR FY26 MD&A KPI table (BSE AttachHis 87148e7d…pdf) | V | P | Yes |
| 2 | Netweb FY26 operating EBITDA / margin | ₹284.84 Cr / 13.04% (FY25 ₹159.04 Cr / 13.84%) | AR FY26 | V | P | Yes |
| 3 | Netweb FY26 PAT | ₹205.82 Cr (+80.9%) | AR; Q1 results statement (FY26 column) | V | P | Yes |
| 4 | **Netweb FY26 gross margin (company)** | **20.85% (FY25 23.11%)** | AR FY26 KPI table | V | P | **New** (was [E] 20–22%) |
| 5 | **Netweb FY26 CFO** | **₹171.5 Cr** (FY25 −₹13.2 Cr) | AR cash-flow statement | V | P | **No**: supersedes ₹790 Cr (S1) |
| 6 | **Government share of customers** | **42.8% (non-govt 57.2%)** | AR FY26 p.4 | V | P | **New** |
| 7 | **R&D expenditure** | **₹13.14 Cr incl. capex (0.6%)** | AR Board's report annexure | V | P | **New**; CRISIL's "2–3%" conflicts |
| 8 | **PLI income** | Nil FY26; ₹5.94 Cr FY25; PLI 2.0 approval 24-Nov-2023 | AR notes 28 and 50 | V | P | **New** |
| 9 | Customers ≥10% of revenue | 3 in FY26 (2 in FY25) | AR note 40 | V | P | New |
| 10 | Bank guarantees outstanding (contingent) | ₹136.3 Cr (₹81.7 Cr) | AR note 42 | V | P | New |
| 11 | Q1 FY27 revenue / PAT | ₹819.69 Cr / ₹85.32 Cr | Q1 results statement (NSE, 28-Jul-2026) | V | P | Yes |
| 12 | **Q1 FY27 gross margin (derived, company definition)** | **21.2%** (Q1 FY26 25.6%; Q4 FY26 20.4%) | Q1 results statement | V | P (+E arithmetic) | New |
| 13 | Order book / L1 at 30-Jun-26 | ₹2,506.9 Cr / ₹848.0 Cr | Q1 FY27 PPT (NSE) | V | P | Yes |
| 14 | Order book / L1 / pipeline at 31-Mar-26 | ₹2,097.6 Cr / ₹327.8 Cr / ₹4,431.5 Cr | AR KPI page (₹20,976 / 3,278 / 44,315 mn); Q4 PPT | V | P | Yes |
| 15 | AI-systems revenue FY26 / Q1 FY27 | ₹947.8 Cr (43.4%) / ₹510.6 Cr (62.3%) | AR; Q1 PPT | V | P | Yes |
| 16 | FY26 six-line segment split | AI 947.8; HPC 530.8; private cloud 517.0; HPS 32.8; DC servers 32.1; software/services/spares 123.2 (₹ Cr) | AR MD&A | V | P | Refines E4 (the three small lines are now named) |
| 17 | Top-10 / top-5 customers, Q1 FY27 | 87.7% / 81.2% | Q1 PPT | V | P | Yes |
| 18 | **QIP size / price / shares** | **₹1,200.00 Cr / ₹4,790 / 25,05,219** | NSE allotment intimation 20-Aug-2026 | V | P | **No**: was [E] (S6) |
| 19 | Post-QIP share count | 5,94,45,906 | same | V | P | Yes ([E] ~5.95 cr) |
| 20 | **Promoter sale, Feb-2026** | **20,79,935 shares (3.65%), open market, 12-Feb-2026** | NSE SAST Reg 29(2) | V | P | **New** (S7) |
| 21 | Promoter holding path | 75.45 (IPO) → 71.39 (Sep-24) → 71.00 (Dec-25) → 66.98 (Mar-26) → 64.16% (Sep-26) | NSE shareholding API | V | P | Yes |
| 22 | **Strategic orders** | ₹1,734 Cr (3-Sep-25) + ₹450 Cr (19-Sep-25) = ₹2,184 Cr | NSE Reg-30 filings | V | P | **Resolves** trap 2 |
| 23 | CRISIL rating / bank lines | A+/Stable, A1; ₹2,420 Cr facilities (10-Jun-26) | CRISIL letter on NSE | V | P | New |
| 24 | Netweb m-cap / P/E (23-Oct) | ₹25,782 Cr / 98.9× TTM | screener.in/company/NETWEB/ | V | S | Yes |
| 25 | IndiaAI outlay | ₹10,371.92 Cr ("about ₹10,372 Cr") | PIB 10-Feb-2026; PIB factsheet 13-Aug-2026 | V | P | Yes |
| 26 | IndiaAI GPUs onboarded | 18,417 → 34,333 (May-25) → 38,000+ (Feb-26) → 45,000+ (Jun-26) | PIB 30-May-2025; PIB 10-Feb-2026; PIB 13-Aug-2026 | V | P | Yes (round-1 figure 18,417 per PIB vs 18,693 in press) |
| 27 | IndiaAI subsidised usage | 237 projects, 93.18 lakh GPU-hours (Aug-26); user price ₹65/hr | PIB 13-Aug-2026 / 10-Feb-2026 | V | P | Yes |
| 28 | **IndiaAI L1 rate, B200 / H100** | **₹323 / ₹153 per GPU-hour (round 2, on-demand)** | PIB 30-May-2025 | V | P | **New** |
| 29 | India DC capacity | ~1,280 MW cloud DC (Feb-26); ~1,575 MW (Aug-26); 375 MW (2020) | PIB 10-Feb-2026; PIB 13-Aug-2026 | V | P | Yes, adds the Feb point |
| 30 | NSM status | 40 systems, 68 PF (Sep-26); target 50 / >123 PF; ₹4,500 Cr | PIB 4-Oct-2026 | V | P | Yes (upgrades [V-snip]) |
| 31 | Semicon India 2.0 | ₹1,27,500 Cr (Jul-2026); 1.0 ₹76,000 Cr | PIB 13-Aug-2026 | V | P | Yes |
| 32 | **HS 8471 imports FY26** | **$13.71 bn (+20.2%)** | TradeStat EIDB | V | P | **New** |
| 33 | **Laptop imports (847130) FY26 / China share** | **$6.73 bn / 71.8%** | TradeStat EIDB | V | P | **No**: supersedes "96% China" (S11) |
| 34 | **Server/processing-unit imports (847150) FY26** | **$4.96 bn (+38%)**; China 6.6% | TradeStat EIDB | V | P | **New** |
| 35 | IDC India enterprise infrastructure Q1 2026 | $1.67 bn (+30%) | IDC PR 25-Aug-2026 | V | P (vendor) | New |
| 36 | IDC WW servers 2Q26 | $166.3 bn (+52%); Dell 13.4%, SMCI 6.1%, Lenovo 5.1%, HPE 3.5%, ODM 53.9% | IDC PR 10-Sep-2026 | V-P1 | P (vendor) | Yes |
| 37 | TrendForce 2026 server market / AI share | $639.2 bn / ~$479 bn (~75%) | TrendForce 14-Oct-2026 | V | P (analyst) | New |
| 38 | DRAM / NAND contract, 4Q26 | +10–15% / +15–20% QoQ | TrendForce 30-Sep-2026 | V | P (analyst) | Yes |
| 39 | Dell Q2 FY27 | ISG $31.78 bn (+89%); AI orders $60.9 bn; backlog $95 bn; FY27 AI servers ~$74 bn | Futurum 9-Sep-2026 | V | S | Yes |
| 40 | Supermicro FY26 | $39.1 bn; GAAP GM 10.8%; CFO −$6.8 bn | SEC 8-K exhibit 99.1 (11-Aug-2026) | V-P1 (SEC returned 403 this pass) | P | Yes |

**Count: 38 of 40 are [V] this pass. 32 of those 38 are from primary sources** (company filings, PIB, DGCI&S, CRISIL letters, IDC/TrendForce releases). The six [V] secondaries are #24 screener, #39 Futurum, and the cross-checks behind #26, #27, #29 and #31. Two are [V-P1] (#36 IDC worldwide, #40 Supermicro). Independent double-sourcing:
- **#2/#3**: AR and Q1 results statement agree.
- **#14**: AR and Q4 PPT agree.
- **#18**: three separate NSE filings agree.
- **#20**: SAST API agrees with the shareholding-pattern delta (71.00 → 70.64 after ESOPs → 66.98).
- **#22**: two filings sum exactly to the PPT's executed + outstanding.

**Conflicts and which source to prefer**
1. R&D: AR ₹13.14 Cr vs CRISIL "2–3%". Prefer the AR, which is a statutory disclosure.
2. Team size: AR says 110 R&D staff at 30-Jun-26; the Q1 PPT says 125. Both are company documents. Use "110–125".
3. FY26 revenue: CRISIL's text says ₹2,138 Cr, against ₹2,183.6 Cr in its own table. The text is a typo.
4. IndiaAI round 1: PIB says 18,417 GPUs; press reports say 18,693. Prefer PIB.
5. CFO: AR ₹171.5 Cr vs screener ₹790 Cr. Prefer the AR, which is arithmetically consistent.

**Extra confirmation of S1 (CFO).** On the Q4 FY26 call (4-May-2026) the CFO said: "The net cash generated from operating activities was INR1,715 million for the financial year 2026", and that net free cash was ₹83.3 Cr at 31-Mar-2026 [V Q4 transcript]. Two independent company statements give ₹171.5 Cr. **Screener's ₹790 Cr is definitively wrong.**

## 4.2 Netweb Technologies — primary-document pack

### 4.2.1 Management-commentary digest (paraphrased; source and date on each line)

**Q4 FY26 call — 4-May-2026** (speakers: CMD Sanjay Lodha, CFO Ankit Kumar Singhal, Sanjeev Sancheti, Hirdey Vikram) [V transcript filed 7-May-2026]
- **Revenue guidance: 35–40% growth for the organic/base business, excluding the strategic order.** The strategic order is to be executed over "the next 3 quarters", i.e. Q1–Q3 FY27. EBITDA guided at 13–14% "at the enterprise level". The CMD said, "We are guiding you the best case."
- **Order book at the start of FY27:** "around ₹2,100 Cr", or ₹2,400 Cr including L1, plus a pipeline of ₹4,400 Cr. That makes "about ₹6,500 Cr" of OB + L1 + pipeline. Sancheti said the base (non-strategic) book was ~₹500 Cr.
- **Capex:** "no significant capex" in FY27; routine only. Capacity utilisation is "around 65% to 70%". "We are a capability-driven company", meaning a new facility would be built only for a new platform such as NVIDIA Vera Rubin.
- **Mix:** HPC "has always been around 30%" of revenue; private cloud/HCI "used to be around 30–35%". DC servers (box selling) are "only some marginal 5%… we don't even track it". More than 95% of revenue comes from the three pillars.
- **Customers:** "50% is government, 50% is enterprise." Netweb is **not targeting hyperscalers** ("India is not a hyperscaler-driven market… primarily more of a sovereign" market). GSIs (TCS, Infosys, Wipro) are customers or prospects. Yotta is a customer.
- **Government compute plans:** the government is renting GPUs from neoclouds (RFP model) and also building its own infrastructure. GPU ambitions went "10,000 → 25,000 → now up to 100,000 GPUs".
- **Working capital:** CCC "typically operates from 90 to 110 days". Receivable days fell from 114 (Dec-25) to 86 (Mar-26); inventory days rose from 60 to 86, to stock up for the strategic orders and hedge shortages.
- **Promoter sale (Feb-2026):** done to "increase the liquidity of the stock". Promoters committed to **no further dilution for 12 months from February 2026**, i.e. until ~Feb-2027.
- **Hedging:** FY26 adjusted EBITDA (₹290.1 Cr) adds back ₹5.24 Cr of hedging gains that offset MTM losses on payables.

**Q1 FY27 call — 29-Jul-2026** [V transcript, NSE 1-Aug-2026] (Part 1 already digested it; the points below are additions or emphasis)
- **Margins:** 13–14% EBITDA band reiterated. The strategic and base books are now merged ("there is no strategic order now… strategic is the new normal").
- **Order book:** OB + L1 ≈ ₹3,400 Cr; OB mix ~40–45% AI. Pipeline ₹10,410 Cr, **now including strategic**. Conversion ~60% over 18–24 months. Execution cycle 16–20 weeks (was 8–12).
- **About ₹430 Cr of the ~₹1,600 Cr strategic order was executed in Q1.** By the filing schedule the remaining ~₹1,195 Cr is due by end-Q2 FY27 (Sep-26) [E].
- **Revenue guidance:** "not guided really"; an analyst referred to ₹4,000 Cr of FY27 revenue and was not contradicted.
- **Funding:** "first time in many quarters" with positive net debt. Any capital raised would be "largely for working capital, no M&A".
- **QIP signalling (governance note):** when an analyst asked about a "₹1,200 Cr QIP", Sancheti replied "I don't know where you got this news… There was an enabling resolution". **The QIP launched 19 days later (17-Aug-2026) at exactly ₹1,200 Cr.** Board approval (1-Jul) and shareholder approval (postal ballot, result 1-Aug) were public.
- **Other:** memory prices are not expected to soften "for the next couple of quarters / about a year"; inventory is a deliberate hedge. Exports are 4–5% and not a focus. Physical-AI and quantum R&D are under way, with no revenue guidance.

**FY26 Annual Report — MD&A, signed 2-May-2026** [V]
- Growth plans: "expand international business" (overseas sales and support build-out); deeper private-cloud/DC push "by supplying indigenously designed… servers, storage… HCI".
- **Risk register:** regulatory/cyber, credit (delayed payments), FX ("natural hedging"), **customer concentration ("dependence on a limited number of large customers")** and reputation (execution delays on large HPC/AI projects).

### 4.2.2 Concall / filing KPI table (Netweb, company basis; ₹ Cr unless noted)

| KPI | Q1 FY26 (Jun-25) | Q4 FY26 (Mar-26) | FY26 | Q1 FY27 (Jun-26) | Source |
|---|---|---|---|---|---|
| Revenue from operations | 301.21 | 773.70 | 2,183.56 | 819.69 | V Q1 results |
| Materials + Δ FG/WIP inventory (COGS) | 224.05 | 615.82 | 1,728.29 | 646.24 | V Q1 results / AR |
| **Gross margin (company definition)** | **25.6%** | **20.4%** | **20.85%** | **21.2%** | V AR (FY26); E derived (quarters) |
| Employee cost | 16.08 | 21.43 | 80.29 | 24.69 | V |
| Other expenses | 16.28 | 39.88 | 90.15 | 28.25 | V |
| Employee + other exp. as % of revenue | 10.7% | 7.9% | 7.8% | **6.5%** | E |
| Operating EBITDA (co.) | 44.8 (14.87%) | 96.6 (12.48%) | 284.84 (13.04%) | 120.52 (14.70%) | V PPTs |
| Other income | 1.11 | 10.24 | 18.84 | 8.47 | V |
| Finance cost | 0.98 | 8.15 | 12.95 | 11.52 | V |
| D&A | 3.32 | 3.83 | 14.21 | 3.33 | V |
| PBT | 41.61 | 94.82 | 276.52 | 114.14 | V |
| PAT | 30.48 | 70.59 | 205.82 | 85.32 | V |
| Order book (period-end) | n/a | 2,097.6 | 2,097.6 | 2,506.9 | V |
| L1 | n/a | 327.8 | 327.8 | 848.0 | V |
| Pipeline | n/a | 4,431.5 (ex-strategic) | — | 10,410 (incl. strategic) | V |
| CCC (co., avg-balance) | — | 84 d | 84 d | 96 d | V |
| Top-10 / top-5 customers | — | — | 76.4% / 62.2% | 87.7% / 81.2% | V |
| Headcount | — | — | 569 (FY25 441) | R&D 110–125 | V AR / PPT |

**Read.** Gross margin fell ~4–5 points (25.6% → ~20–21%) once the GPU-heavy strategic orders began shipping in Q2–Q3 FY26. **EBITDA margin held at 12.5–14.7% because operating costs fell from ~10.7% to ~6.5% of revenue.** Revenue nearly tripled while employee and other costs rose ~65%. **This is operating leverage, not pricing power.** It is a cleaner explanation than Part 1's (§4.2(b) and B2), and it implies the margin is vulnerable if revenue growth slows while the headcount build continues [E]. Q2+Q3 FY26 (derived) was the low point at 19.9% gross margin.

### 4.2.3 Five-year history (screener standalone, ₹ Cr; refreshed 23-Oct-2026) [V], with company-basis overlays [V AR]

| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR FY22–26 |
|---|---|---|---|---|---|---|
| Revenue | 247 | 445 | 724 | 1,149 | 2,184 | **72.4%** |
| Operating profit (EBITDA) | 35 | 70 | 103 | 159 | 285 | 69.0% |
| OPM | 14% | 16% | 14% | 14% | 13% | — |
| PAT | 22 | 47 | 76 | 114 | 206 | **74.9%** |
| EPS (₹) | 4.41 | 9.22 | 13.47 | 20.08 | 36.15 | — |
| ROCE | 52% | 64% | 38% | 32% | 37% | — |
| CCC (screener, year-end) | 86 | 69 | 85 | 83 | 121 | — |
| **Gross margin (co.)** | n/a | n/a | n/a | **23.11%** | **20.85%** | — |
| **CFO (AR)** | — | — | — | **−13.2** | **171.5** (screener shows 790: wrong) | — |
| PLI income (AR) | — | — | — | 5.94 | 0 | — |

### 4.2.4 Eight-quarter trend (screener standalone, ₹ Cr) [V]

| Qtr | Sep-24 | Dec-24 | Mar-25 | Jun-25 | Sep-25 | Dec-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Revenue | 251 | 334 | 415 | 301 | 304 | 805 | 774 | 820 |
| YoY | — | — | — | +102% | +21% | +141% | +87% | +172% |
| Operating profit | 36 | 43 | 59 | 45 | 45 | 98 | 97 | 121 |
| OPM | 14% | 13% | 14% | 15% | 15% | 12% | 12% | 15% |
| Interest | 1 | 1 | 1 | 1 | 1 | 3 | 8 | 12 |
| PAT | 26 | 30 | 43 | 30 | 31 | 73 | 71 | 85 |
| Gross margin (co. def., derived) | — | — | — | 25.6% | ~19.9% (Q2+Q3 avg) | ~19.9% | 20.4% | 21.2% |

- **Q2 FY27 (Sep-26): not reported; board 24-Oct-2026.** YoY base: revenue ₹304 Cr, PAT ₹31 Cr.
- Arithmetic for the writer [E]: the remaining strategic order (~₹1,195 Cr) is due by H1 FY27. If most of it plus the organic book lands in Q2, revenue could well exceed **₹1,000 Cr (+230% YoY)**. If it slips, Q2 could look flat on Q1. **Do not forecast in print; wait for 24-Oct.**
- Interest cost has risen 12× in four quarters (₹1 Cr → ₹12 Cr). The AR shows FY26 interest on borrowings of ₹7.97 Cr and "other borrowing costs" of ₹3.62 Cr. Post-QIP, Q3 FY27 finance cost should fall [E].

### 4.2.5 Annual-report findings (FY26 AR, signed 2-May-2026) [V]

**Segment and customers**
- Note 40 reports a single segment, "Computer servers". Exports are "not significant" (FX earnings ₹60.7 Cr = 2.8% of revenue).
- **Three customers are each ≥10% of revenue** (two in FY25).
- **Government 42.8% / non-government 57.2%.**
- Repeat-customer revenue 75.6%. 302 repeat customers have been with Netweb for over 6 years. 131 new clients in FY26.

**Six-line revenue split (₹ Cr) and CAGR FY23–26**

| Line | FY26 revenue | FY23–26 CAGR |
|---|---|---|
| AI systems | 947.79 | 212.9% |
| HPC | 530.75 | 45.4% |
| Private cloud & HCI | 516.97 | 52.4% |
| High-performance storage | 32.77 | 2.1% |
| DC servers | 32.08 | 4.3% |
| Software, services, spares & others | 123.20 | — |

- Sale of products ₹2,132.2 Cr; sale of services ₹51.4 Cr (+12.9%); other operating revenue nil (FY25 ₹5.94 Cr, all PLI).

**Cost structure (FY26, ₹ Cr)**

| Line | FY26 | FY25 | Note |
|---|---|---|---|
| Materials consumed | 1,715.5 | 912.2 | |
| Δ FG/WIP | +12.8 | −28.7 | |
| COGS | 1,728.3 | 883.5 | |
| Employee cost | 80.3 | 62.3 | Headcount 441 → 569 |
| Other expenses | 90.1 | 44.1 | FX loss ₹18.1 Cr; technical support ₹13.5 Cr (₹4.9 Cr); legal & professional ₹13.5 Cr; business promotion ₹7.7 Cr; CSR ₹2.1 Cr |
| Other income | 18.8 | — | Interest ₹8.8 Cr; derivative fair-value gain ₹9.5 Cr |

- The FX loss in other expenses and the derivative gain in other income are the hedge pair behind the "adjusted EBITDA".

**R&D and IP**
- R&D spend ₹13.14 Cr including capex (0.6% of revenue).
- R&D team of 110 at 30-Jun-2026, working from Faridabad, Gurugram, Bengaluru and Hyderabad.
- 17 patents and designs (registered + applied); 18 trademarks.
- Products: Tyrone Cluster Manager, KUBYTS, VERTA, ParallelStor, COLLECTIVO, Skylus, Skylus.ai, FMOcean, VELOX, CAMARERO.

**PLI**
- Approved under PLI 1.0 for servers (1-Jul-2021); **migrated to PLI 2.0 (approval 24-Nov-2023; scheme FY24–FY29)**. Also qualified under the PLI for telecom & networking (2022).
- **Booked nil PLI in FY26** (₹5.94 Cr in FY25).
- Why nil in FY26 is not explained. Possible reasons are that eligible incremental *server* sales vs the base year did not meet thresholds, or that claims are recognised only on approval. Ask management [open].

**Balance sheet at 31-Mar-2026 (₹ Cr; FY25 in brackets)**
- Inventories 804.8 (221.3), of which raw materials 761.9.
- Trade receivables 670.0 (361.5).
- Cash 365.5 (170.1); other bank balances 223.8 (9.4).
- Trade payables 760.7 (297.9).
- **Advances from customers 412.8 (2.5)**: the strategic-order advances.
- Short-term borrowings 270.6; total borrowings incl. leases 282.2 (7.9).
- Net cash (company) 124.4 (162.1); current ratio 1.44 (2.33); ICR 22.4× (38.4×).
- Year-end days (FY26 revenue/COGS basis) [E]: inventory 170, debtors 112, payables 161, i.e. the same as screener.

**Contingent liabilities**
- Bank guarantees ₹136.3 Cr (₹81.7 Cr).
- Customs demand ₹1.06 Cr (CESTAT appeal; concessional duty denied on imported non-carrier Ethernet switches).
- Income-tax appeals for AY2019-20 and AY2020-21 (₹0.99 Cr) decided in the company's favour.
- Capital commitments ₹0.17 Cr.
- **Nothing material.**

**Related parties (note 38)**
- Only KMP, Netweb Foundation (Section 8 subsidiary) and Ashoka Bajaj Automobiles LLP (an entity where KMP exercise influence).
- **No royalty, no group purchases, no material RPTs.**
- Dividends to the four Lodha promoters ₹10.0 Cr.
- A relative, Raghav Lodha, has been employed as "Technology Evangelist" since 1-Feb-2026.

**Capacity**
- Three manufacturing facilities in Faridabad (H1, H2, IMT) with SMT, plus the new 15,000 sq ft dense-GPU line (>150 kW/rack).
- Capital employed ₹1,005.5 Cr; gross PPE ₹69.5 Cr.
- **No installed-capacity table** (the company says it is capability- rather than capacity-driven). Utilisation 65–70% [V Q4 call].

**Other**
- IPO proceeds were fully used (SMT-line civil works ₹7.31 Cr against ₹9.0 Cr planned).
- Auditor: S S Kothari Mehta & Co. LLP (unchanged).
- Inventory valuation switched from FIFO to moving weighted-average from Q1 FY26; "not material".

### 4.2.6 Capital-structure events (complete record from NSE filings) [V]

| Date | Event | Shares | Price | ₹ Cr | Promoter % after |
|---|---|---|---|---|---|
| 27-Jul-2023 | IPO listing (₹631 Cr; ₹206 Cr fresh, 41.2 lakh new shares at ₹500) | 41,20,000 new | 500 | 206 fresh | 75.45 |
| 2-Aug-2024 | Promoter open-market sale (Sanjay 8,21,918; Navin, Niraj, Vivek 4,10,959 each) | 20,54,795 | ~2,232 [V-snip] | ~459 [V-snip] | 71.39 |
| 16-Sep-2025 | Goldman Sachs AMI sells (to 2.35%) | 5,16,411 | n/a | n/a | — |
| 4-Feb-2026 | ESOP allotment | 2,86,819 | — | — | ~70.64 |
| **12-Feb-2026** | **Promoter open-market sale** (Sanjay 8,99,000; Navin, Niraj, Vivek 3,93,645 each) | **20,79,935** | **not disclosed** | **n/a** | **66.98** |
| 1-Jul-2026 | Board approves fund-raise (QIP enabling) | — | — | up to ~1,200 | — |
| 1-Aug-2026 | Postal-ballot special resolution passed | — | — | — | — |
| 17-Aug-2026 | QIP opens; floor ₹4,885.90 | — | — | — | — |
| **20-Aug-2026** | **QIP closes and is allotted** | **25,05,219** | **4,790** | **1,200.00** | **64.16** |
| 3-Sep-2026 | ESOP allotment | 1,645 | — | — | 64.16 |

- **Read.** Promoters have sold ~7.3% of the company in two open-market tranches 18 months apart. On the Q4 call the stated reason was liquidity, with a 12-month no-sale pledge from Feb-2026. **The next window is ~Feb-2027.** Write it as a fact with the stated reason, not as a red flag.
- QIP investors paid ₹4,790. **At ₹4,336 (23-Oct) they are 9.5% under water** [E]. This supersedes Part 1's "7–11%" range, which used the floor price.
- The FII share was 9.27% in Jun-26 and 9.47% in Sep-26 despite Nomura, Goldman and Think taking ~33% of the issue. So other FIIs sold, or the allottees were categorised differently (e.g. ICICI/iSIF as DII) [E].

### 4.2.7 CRISIL view (rationale of 10-Jun-2026) [V]

| | |
|---|---|
| **Rating** | Crisil A+/Stable (upgraded from A on 25-May-2026) / Crisil A1 |
| **Rated facilities** | ₹2,420 Cr: working-capital facility ₹2,040 Cr; bank guarantee ₹190 Cr; CC ₹70 Cr; other fund-based ₹40 Cr; non-fund-based ₹80 Cr. Up from ₹260 Cr in May-2025 |
| **Financial profile** | Net worth ₹720.9 Cr; gearing 0.38×; TOL/TNW 2.1×; interest cover 22.3×; liquid surplus ₹350–370 Cr at Mar-26; fund-based utilisation averaged 24% over the 12 months to Apr-2026 |
| **Strengths cited** | Management experience; design capability; supplier access (NVIDIA, Samsung, AMD, Intel roadmaps 9–12 months ahead); ROCE 29–33% over two years |
| **Weaknesses cited** | **Working-capital intensity (GCA 268 days)**; **top-3 suppliers 65–70% of procurement, significant imports from Taiwan**; **top-5 customers 65–70% of revenue**; competition; R&D talent retention |
| **Sensitivities** | Upgrade if revenue >₹4,000 Cr at 13–14% OPM with diversification. Downgrade if revenue <₹2,000 Cr, OPM <11%, or a large debt-funded capex / working-capital stretch |

- **Read.** A ₹2,420 Cr bank line (≈1.1× FY26 revenue) and a ₹1,200 Cr QIP mean Netweb has assembled **~₹3,600 Cr of working-capital firepower** against a CCC of ~96 days [E]. At 96 days, ₹3,600 Cr of funding supports roughly ₹13,000 Cr of annual revenue [E arithmetic: 3,600 × 365/96 ÷ 1.05]. **Funding is no longer the binding constraint; GPU allocation and order flow are.**

### 4.2.8 The strategic orders, fully reconciled [V filings; E arithmetic]

| | ₹ Cr |
|---|---|
| PO 1 — 3-Sep-2025: NVIDIA Blackwell (8× HGX-B200, Tyrone Camarero); "IndiaAI Mission sovereign AI"; execute Q4 FY26 – H1 FY27 | 1,734 |
| PO 2 — 19-Sep-2025: Tyrone AI GPU-accelerated systems; execute by end-FY26 | 450 |
| **Total strategic basket** | **2,184** |
| Executed in FY26 (Q4 PPT) | 558.8 |
| Outstanding at 31-Mar-26 (Q4 PPT) | 1,625.2 |
| Executed in Q1 FY27 (Q1 call, "close to") | ~430 |
| **Outstanding at 30-Jun-26 [E]** | **~1,195** |

- Both POs came from the same unnamed domestic awarder: "one of the largest Indian-headquartered global providers of technology distribution and integrated supply chain solutions". The filings confirm it is not a related party.
- **Unit arithmetic [E].** At ~₹3.5–4.0 Cr per 8-GPU B200 node (Part 1 C.1), ₹2,184 Cr ≈ 550–620 nodes ≈ **4,400–5,000 GPUs**. That is consistent with the AR milestone "order to deploy AI infrastructure for India's foundational LLM model with over 5,000 GPUs" (2025). **The two are very likely the same project.** The writer may say "consistent with", not "is".
- **Customer-advance footprint.** Advances from customers jumped from ₹2.5 Cr to ₹412.8 Cr at Mar-26 [V AR]. The strategic awarder appears to have prepaid roughly a quarter of the outstanding value [E]. This is why FY26 CFO was positive at all.

### 4.2.9 Indian reference peers — five-year headlines (screener consolidated, refreshed 23-Oct-2026; E2E standalone) [V]

These are reference only; they are not members.

**Dixon Technologies (DIXON)**, ₹ Cr
| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR |
|---|---|---|---|---|---|---|
| Revenue | 10,697 | 12,192 | 17,691 | 38,860 | 48,873 | 46.2% |
| OP / OPM | 384 / 3.6% | 519 / 4.3% | 705 / 4.0% | 1,515 / 3.9% | 1,873 / 3.8% | — |
| PAT | 190 | 255 | 375 | 1,233 | 1,644 | 71.5% |
| ROCE | 23% | 24% | 29% | 40% | 29% | — |
| CCC (d) | 3 | 2 | −6 | −5 | −7 | — |

- Last 4 quarters of revenue: 14,855 / 10,672 / 10,511 / 15,548 (Q1 FY27; OPM 3.0%).
- M-cap ₹68,568 Cr; P/E 36.5×.

**Kaynes Technology (KAYNES)**, ₹ Cr
| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR |
|---|---|---|---|---|---|---|
| Revenue | 706 | 1,126 | 1,805 | 2,722 | 3,626 | 50.5% |
| OP / OPM | 95 / 13% | 170 / 15% | 257 / 14% | 416 / 15% | 578 / 16% | — |
| PAT | 42 | 95 | 183 | 293 | 364 | 71.6% |
| ROCE | 25% | 22% | 15% | 14% | 13% | — |
| CCC (d) | 148 | 162 | 123 | 102 | 193 | — |

- Q1 FY27: revenue 946, PAT 56.
- M-cap ₹21,521 Cr; P/E 62×.

**Syrma SGS (SYRMA)**, ₹ Cr
| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR |
|---|---|---|---|---|---|---|
| Revenue | 1,267 | 2,048 | 3,154 | 3,787 | 4,819 | 39.7% |
| OP / OPM | 129 / 10% | 192 / 9% | 203 / 6% | 323 / 9% | 546 / 11% | — |
| PAT | 79 | 123 | 124 | 184 | 346 | 44.7% |
| ROCE | 16% | 15% | 10% | 12% | 17% | — |
| CCC (d) | 99 | 95 | 76 | 52 | 48 | — |

- Q1 FY27: revenue 1,589 (+68%), PAT 106.
- M-cap ₹27,623 Cr; P/E 74×.

**Redington (REDINGTON)**, ₹ Cr
| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR |
|---|---|---|---|---|---|---|
| Revenue | 62,644 | 79,377 | 89,346 | 99,334 | 1,19,162 | 17.4% |
| OP / OPM | 1,839 / 2.9% | 2,203 / 2.8% | 2,009 / 2.2% | 2,154 / 2.2% | 2,348 / 2.0% | — |
| PAT | 1,315 | 1,439 | 1,239 | 1,821* | 1,284 | −0.6% |
| ROCE | 28% | 25% | 19% | 19% | 18% | — |
| CCC (d) | 15 | 36 | 34 | 36 | 34 | — |

- *FY25 includes a one-off gain in other income.
- Q1 FY27: revenue 34,922 (+35%), PAT 453.
- M-cap ₹28,093 Cr; P/E 15.6×.

**Rashi Peripherals (RPTECH)**, ₹ Cr
| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR |
|---|---|---|---|---|---|---|
| Revenue | 9,313 | 9,454 | 11,095 | 13,773 | 15,827 | 14.2% |
| OP / OPM | 301 / 3.2% | 256 / 2.7% | 297 / 2.7% | 305 / 2.2% | 464 / 2.9% | — |
| PAT | 183 | 123 | 144 | 210 | 282 | 11.4% |
| ROCE | 25% | 16% | 14% | 14% | 17% | — |
| CCC (d) | 48 | 56 | 57 | 60 | 60 | — |

- Q1 FY27: revenue 5,102 (+62%), PAT 105.
- M-cap ₹5,387 Cr; P/E 16.9×.

**E2E Networks (E2E, standalone)**, ₹ Cr
| | FY22 | FY23 | FY24 | FY25 | FY26 | CAGR |
|---|---|---|---|---|---|---|
| Revenue | 52 | 66 | 94 | 164 | 246 | 47.5% |
| OP / OPM | 23 / 44% | 33 / 50% | 48 / 51% | 97 / 59% | 126 / 51% | — |
| PAT | 6 | 10 | 22 | 47 | −16 | n.m. |
| ROCE | 15% | 29% | 25% | 8% | −1% | — |

- Last 4 quarters of revenue: 70 / 96 / 157 / **224 (Q2 FY27, OPM 77%, PAT 73)**.
- M-cap ₹11,656 Cr; P/E 99× (standalone).

**Peer read [E]**
- **Netweb's FY22–26 revenue CAGR (72%) is the highest in the set.** Kaynes (51%), E2E (48%), Dixon (46%) and Syrma (40%) follow; the distributors grew 14–17%.
- **Netweb's PAT CAGR (75%) is matched by Dixon (72%) and Kaynes (72%).**
- Netweb's ROCE (37%) trails only Dixon's FY25 peak (40%).
- Netweb's year-end CCC (121 days) is now closer to Kaynes (193) than to the distributors (34–60). **The AI mix has turned a designer-OEM into a working-capital-heavy business.**

**Global reference valuations (23-Oct-2026, stockanalysis.com) [V]**

| | M-cap | P/E TTM | P/E fwd | Revenue TTM | Latest server datapoint |
|---|---|---|---|---|---|
| Dell Technologies | $293.8 bn | 27.0× | 16.4× | $151.2 bn | ISG $31.78 bn in Q2 FY27 (+89%); AI backlog $95 bn [V Futurum] |
| HPE | $76.9 bn | 29.5× | 12.5× | $41.9 bn | Server $6.8 bn in FQ3-26 (+35%) [V-snip/secondary] |
| Supermicro | $22.2 bn | 10.4× | 7.2× | $39.1 bn | FY26 GM 10.8%; export-control review [V-P1] |
| Lenovo | HK$280.8 bn (~$36 bn) | (45×, distorted) | 9.1× | — | ISG $8.5 bn (+98%), 9.1% op. margin [V] |
| **Netweb** | ₹25,782 Cr (~$2.7 bn) | **98.9×** | n/a | ₹2,702 Cr (~$0.29 bn) | FY26 13.0% EBITDA [V] |

- **Read.** Netweb trades at ~6× Dell's and ~14× Supermicro's forward-style multiples. The global server OEMs are priced as cyclical box-makers (7–16× forward), even at record AI demand. **Netweb's premium is a "sovereign scarcity" premium**: it is the only listed Indian designer-OEM. The writer should say that explicitly. Supermicro's de-rating (to $22 bn on $39 bn revenue) shows what happens to an AI-server multiple when governance or export-control questions appear.

## 4.3 Industry datasets upgraded from primary sources (chart-ready)

**D1. India imports of computers, HS 8471 and key sub-headings (US$ mn; fiscal years) [V DGCI&S TradeStat EIDB, queried 23-Oct-2026]**

| HS | Description | FY22 | FY23 | FY24 | FY25 | FY26 | FY26 YoY |
|---|---|---|---|---|---|---|---|
| 8471 | All automatic data-processing machines and units | n/q | 10,082.6 | 9,368.1 | 11,402.2 | **13,706.8** | +20.2% |
| 847130 | Portable computers ≤10 kg (laptops, notebooks) | 7,954.6 | 5,889.2 | 5,450.0 | 6,131.6 | **6,726.5** | +9.7% |
| — of which China | | 5,721.4 | 4,457.0 | 4,174.6 | 4,896.9 | 4,829.5 | −1.4% |
| China share of 847130 | | 71.9% | 75.7% | 76.6% | 79.9% | **71.8%** | — |
| 847150 | Processing units (incl. rack/GPU servers) | 2,199.3 | 2,579.8 | 2,375.7 | 3,589.0 | **4,957.5** | +38.1% |

- n/q = not queried.
- Notes: FY26 total India merchandise imports were $775.7 bn; HS 8471 = 1.77% of them. The IMS (import-authorisation) regime started on 1-Nov-2023, i.e. in FY24. **Laptop imports fell 7.5% in FY24 and then rose again in FY25–FY26.** The IMS is a monitoring regime, not a quota.
- The China share of laptops rose to ~80% in FY25 and fell to ~72% in FY26 [V]. The most likely reason is Vietnam/Taiwan-sourced and domestically assembled (PLI) supply [E].

**D2. Server-type imports (HS 847150) by source country (US$ mn) [V TradeStat]**

| Country | FY22 | FY23 | FY24 | FY25 | FY26 | FY26 share |
|---|---|---|---|---|---|---|
| Singapore | 575.4 | 758.0 | 472.4 | 849.4 | 858.1 | 17.3% |
| USA | 310.9 | 314.7 | 489.4 | 833.9 | 832.5 | 16.8% |
| Malaysia | 192.6 | 290.0 | 276.7 | 751.6 | 387.9 | 7.8% |
| Taiwan | 183.8 | 122.8 | 72.6 | 246.5 | 375.4 | 7.6% |
| China | 440.1 | 470.3 | 505.0 | 301.6 | 325.4 | 6.6% |
| Mexico | 49.9 | 71.8 | 73.8 | 54.0 | 226.1 | 4.6% |
| Vietnam | 1.2 | 0.4 | 0.6 | 20.5 | 69.3 | 1.4% |
| Thailand | — | — | 0.3 | 23.6 | 5.7 | 0.1% |
| Others (residual) | — | — | — | — | ~1,877 | ~37.9% |
| **Total** | 2,199.3 | 2,579.8 | 2,375.7 | 3,589.0 | **4,957.5** | 100% |

- Read [E]. Unlike laptops, **India's server imports are not China-dependent**. They come via the ODM/OEM hubs: Singapore (regional distribution), US (Dell/HPE/Supermicro), Malaysia/Taiwan (ODMs) and Mexico (Dell/Supermicro/Foxconn). That fits the "trusted source" preference. **$4.96 bn ≈ ₹43,000 Cr at FY26's ~₹87/$ average [E]** of imported processing units. That is ~20× Netweb's FY26 revenue, and **the cleanest public proxy for the size of India's imported-server pool.**
- Caveats: 847150 also covers some desktops and other processing units. GPU modules/baseboards imported as parts (HS 847330) are not included. Netweb imports components, not finished servers, so its own spend sits largely in 8473/8542/8523 [E].

**D3. IndiaAI compute pillar — GPUs and pricing [V PIB]**

| Date | GPUs onboarded | Event | Source |
|---|---|---|---|
| Jan/early-2025 | 18,417 | Round 1 empanelment (press reports 18,693) | PIB 30-May-2025 |
| 30-May-2025 | 34,333 | Round 2 adds 15,916; 7 bidders | PIB 30-May-2025 |
| mid/late-2025 | ~38,183 | Round 3 adds ~3,850 (Locuz, Sify, Ishan; incl. TPUs) | V-snip inc42/ICAI |
| 10-Feb-2026 | 38,000+ GPUs + 1,050 TPUs | User price ₹65/hr ("~⅓ of global average") | PIB 10-Feb-2026 |
| Jun-2026 | 45,000+ | 237 projects; 93.18 lakh GPU-hours used (Aug-26) | PIB 13-Aug-2026 |

Round-2 L1 on-demand rates (₹ per GPU-hour, single-GPU instance) [V PIB 30-May-2025]:

| Accelerator | On-demand ₹/hr | Bidder | 1-month ₹/hr |
|---|---|---|---|
| NVIDIA B200 SXM | 323.00 | Yotta | 308 |
| NVIDIA H100 SXM | 153.00 | Cyfuture | 134.1 |
| NVIDIA H100 NVL | 168.74 | Netmagic | 135 |
| NVIDIA A100 80 GB | 135.90 | Cyfuture | 89.1 |
| AMD MI300X | 168.22 | Cyfuture | 165.05 |
| AMD MI325X | 169.20 | Cyfuture | 123.3 |

8-GPU B200 node: ₹2,584/hr on-demand.

**Provider economics [E, illustrative].**
- An 8×B200 node earns ₹2,584/hr × 8,760 h = **₹2.26 Cr a year at 100% utilisation**.
- At a ~₹3.5–4.0 Cr build cost (servers + networking; Part 1 C.1) that is a **~1.6–1.8-year payback at full utilisation, ~3–3.5 years at 50%**, before power, DC rent and financing.
- Reported subsidised usage (93.18 lakh GPU-hours over ~18 months on a 34–45k GPU pool) implies **low single-digit % utilisation of the subsidised channel**. Providers therefore depend on non-IndiaAI customers. That is the demand-quality risk behind Netweb's neocloud and sovereign orders.

**D4. India data-centre capacity (MW) [V PIB; V-P1 CBRE]**
| Date | Capacity | Basis | Source |
|---|---|---|---|
| 2020 | 375 | Installed | PIB 13-Aug-2026 |
| Feb-2026 | ~1,280 | "Cloud data centre capacity" | PIB 10-Feb-2026 |
| Aug-2026 | ~1,575 | Installed | PIB 13-Aug-2026 |
| end-2026E | ~2,000 | CBRE | V-P1 |
| 2030E | 4–5× Feb-26 level (~5–6.4 GW) | PIB projection | PIB 10-Feb-2026 |
| City split (Feb-26) | Mumbai/Navi Mumbai >25%; Bengaluru ~22%; Hyderabad ~22%; NCR 14%; Chennai 13%; Pune 6%; Kolkata 3% | | PIB 10-Feb-2026 |

Note: the city percentages sum to more than 100%, so they are probably on different bases. Quote them as "about".

**D5. Global server market and AI share (US$ bn) [V TrendForce 14-Oct-2026; V-P1 IDC]**
| | 2025 | 2026E | 2027E |
|---|---|---|---|
| Total server market (TrendForce) | — | 639.2 | >1,000 |
| AI servers (TrendForce) | — | ~479 (~75%) | ~920 (~81%; +>90%) |
| AI server shipments YoY | — | +32.2% | ~+36% |
| Top-9 CSP capex | ~465 | 957 (+106%) | >1,500 (+60%) |
| Server CPU shipments YoY (TrendForce 22-Oct) | — | +31% | >+40% |
| IDC quarterly server revenue | 4Q25 125.3 | 2Q26 166.3 (+52%) | — |

- The 2025 CSP capex figure is backed out from +106% [E].
- TrendForce also says the CPU:accelerator ratio is moving from 1:8 toward **1:2 or 1:1** with agentic AI. **This favours general-purpose and CPU-dense servers, Netweb's HPC/private-cloud heritage, not only GPU boxes.** AMD's share of server CPUs is ~27% in 2026; Intel is supply-constrained.

**D6. Memory price path (contract, QoQ) [V TrendForce 30-Sep-2026; V-snip for Q2/Q3]**
| | Q2-26 | Q3-26 | Q4-26E |
|---|---|---|---|
| Conventional DRAM | ~+80% (V-snip) | ~+40% (V-snip) | **+10–15%** (V) |
| NAND flash | n/a | n/a | **+15–20%** (V) |
| Server DRAM | undersupplied | undersupplied | **undersupplied** (V) |
| Enterprise SSD | | | the only category where price growth accelerates (V) |

**D7. India enterprise infrastructure and server demand [V IDC]**
- Enterprise infrastructure market: **Q1 2026 $1.67 bn vs Q1 2025 $1.28 bn (+30%)**, value-led (ASP inflation), units muted (IDC, 25-Aug-2026). Annualised ≈ **$6.7 bn ≈ ₹58,000–63,000 Cr** [E].
- Regional: West + South = **>89% of server demand**, 77% of storage revenue (3Q25) (IDC, 19-Jan-2026).
- Vendor claim [V-snip]: Lenovo #2 in India x86 servers, 24.7% share in Q4 CY25.

**D8. Global OEM server-segment snapshot (latest quarter) [V / V-snip]**
| | Quarter | Server/infra revenue | YoY | Segment op. margin |
|---|---|---|---|---|
| Dell ISG | Q2 FY27 (May–Jul 26) | $31.78 bn | +89% | ~15% (V-snip P1) |
| Lenovo ISG | Q1 FY26/27 (Apr–Jun 26) | $8.5 bn | +98% | 9.1% (record) |
| HPE Server | FQ3 26 (May–Jul 26) | $6.8 bn | +35.3% | Cloud & AI segment 17.0% (V-snip) |
| Supermicro | FY26 (Jul-25–Jun-26) | $39.1 bn (full year) | +78% | 7.1% op. (V-P1) |
| Netweb | Q1 FY27 (Apr–Jun 26) | $0.086 bn (₹820 Cr) | +172% | 14.7% EBITDA |

- HPE's 10-Q (per secondary analysis) attributes most of its server growth to **higher ASPs from memory/SSD prices**, not units. So does IDC India. **A large slice of 2026 "growth" across the industry, including Netweb's, is component-price pass-through** [E].

**D9. National Supercomputing Mission (PIB 4-Oct-2026) [V]**
- 40 systems / 68 PF (Sep-26): 13 >1 PF, 12 at 0.5–1 PF, 15 <0.5 PF (secondary summary of the same PIB release).
- Target 50 systems / >123 PF; outlay ~₹4,500 Cr (2015); >16,000 researchers.
- **C-DAC's Rudra servers are made by Indian EMS partners under technology transfer** (~6,000 deployed per secondary summaries).
- World #1 system ≈ 2.19 EF (2026) vs India's whole NSM fleet at 0.068 EF.

## 4.4 Gap log (Part 1 §H items and other first-pass gaps)

| # | Gap (§H / other) | Status | Detail / what was tried |
|---|---|---|---|
| H1 | QIP size, price, allottees | **Filled** | ₹1,200.00 Cr; 25,05,219 shares at ₹4,790; allottees above 5% named (S6). NSE filings 17/20/25-Aug-2026. The placement document itself (on netwebindia.com) was not downloaded; the use of proceeds is taken from the press release |
| H2 | Promoter 71 → 66.98% mechanism | **Filled (except price)** | Open-market sale of 20,79,935 shares on 12-Feb-2026 plus ESOP dilution (S7). The sale price is not in the SAST data. NSE historical-price API was blocked, and search found no price → **still open: sale price/value** |
| H3 | ₹1,734 Cr order identity vs "₹1,600 Cr strategic" | **Filled (reconciliation); customer name still open** | Two POs (₹1,734 + ₹450 Cr) = ₹2,184 Cr = executed + outstanding (S8). Awarder unnamed in both filings; a search for "Redington" found nothing → **still do not name Redington** |
| H4 | Gross margin | **Filled** | FY26 20.85%, FY25 23.11% (company); quarters derived (S2) |
| H5 | Government vs enterprise split | **Filled** | 42.8% / 57.2% (AR); CMD says "50/50" |
| H6 | R&D spend | **Filled (with conflict)** | ₹13.14 Cr incl. capex (AR) vs CRISIL "2–3% of revenue" |
| H7 | PLI accrued; PLI 2.0 status | **Filled** | PLI 2.0 servers (24-Nov-2023); nil FY26, ₹5.94 Cr FY25 |
| H8 | India server market size and vendor shares | **Partly filled** | IDC India enterprise infrastructure $1.67 bn/qtr (Q1-26); HS 847150 imports $4.96 bn (FY26). **Vendor shares still unsourced** (IDC tracker is paid; only Lenovo's own claim of 24.7%) |
| H9 | FY26 HS 8471 import value | **Filled** | $13.71 bn; laptops $6.73 bn; 847150 $4.96 bn; country splits (D1, D2) |
| H10 | IndiaAI L1 rates per GPU | **Filled for round 2** | PIB 30-May-2025 table (S20). Round-3 and 2026 rate revisions are **still open** |
| H11 | PPP-MII local-content threshold for servers | **Still open** | The MeitY Electronic Products PPP-MII Order is dated 7-Sep-2020 (component-by-component LC for listed items such as HDDs, memory modules and SMPS), and the general Class-I ≥50% / Class-II 20–50% bands apply [V-snip Nishith Desai summary]. **A server-specific notified threshold was not found**; the MeitY order PDF was not reached. The size of the "ring-fenced pool" remains unsourced |
| H12 | NSM 2.0 outlay | **Still open** | The PIB NSM backgrounder (4-Oct-2026) gives no NSM 2.0 outlay. The only source for "pre-exascale/exascale by CY28" is Netweb's own deck |
| H13 | Global peers' m-cap/P/E; Lenovo ISG; HPE servers | **Filled** | stockanalysis.com 23-Oct; Lenovo PR; HPE FQ3 (S14) |
| H14 | Hyperscaler India commitments | **Filled (V-snip/PIB)** | Microsoft $17.5 bn, Amazon $35 bn (whole India, to 2030), Google $15 bn, AWS $8.3 bn Maharashtra (PIB) |
| H15 | PLI incentive-rate conflict (5% vs 3%) | **Partly** | A Lok Sabha answer (Dec-2024) is quoted as "average incentive of around 5% on net incremental sales" [V-snip]; ICEA claims "up to ~13%" incl. component add-ons [V-snip]. **Use "~5% average"** |
| H16 | India PC 2025 vendor shares (HP 29.1%?) | **Still open** | Not re-attempted; IDC PC releases are not free |
| H17 | DC capacity basis conflict | **Clarified** | PIB itself uses "cloud DC capacity ~1,280 MW" (Feb-26) and "installed ~1,575 MW" (Aug-26). CBRE ~2 GW (end-26E). Quote with dates and bases |
| H18 | VVDN, Yotta financials | **Still open** | Not attempted; Tofler/RoC data is paywalled. CRISIL confirms Yotta as a Netweb customer |
| new | Netweb CFO | **Corrected** | ₹171.5 Cr (S1); confirmed by the CFO on the Q4 call |
| new | CRISIL rationale content | **Filled** | A+/Stable; ₹2,420 Cr lines (S24) |
| new | Q2 FY27 results | **Not out** (as of 23-Oct-2026) | Board 24-Oct; call 26-Oct, 3:30 pm |
| new | Supermicro 8-K re-fetch | **Blocked** | SEC returned 403 to an anonymous UA; Part 1 figures stand as [V-P1] |
| new | CBRE H1-2026 re-fetch | **Blocked** | IBEF returned 503; Part 1 figures stand as [V-P1] |
| new | Why PLI income was nil in FY26 | **Open** | Not explained in the AR; ask management on the 26-Oct call |
| new | Feb-2026 promoter sale value | **Open** | ~3.65% × Feb-2026 price. Do not estimate in print |

## 4.5 New insights the first pass missed, and new primer issues

### 4.5.1 Insights an expert would add

1. **Netweb's margin story is operating leverage, not pricing power.** Gross margin fell from 25.6% (Q1 FY26) to ~20–21% once the B200 strategic orders shipped, and from 23.1% (FY25) to 20.9% (FY26). Yet EBITDA stayed at 13–15%, because employee + other costs fell from ~10.7% to ~6.5% of revenue while revenue nearly tripled [V Q1 results/AR; E]. Management's "pricing power" and "inventory bought early" explanations are secondary. **Implication:** if quarterly revenue plateaus at ~₹800 Cr while the team keeps growing (441 → 569 employees in FY26), EBITDA margin will drift toward the ~11% CRISIL downgrade trigger. Watch Q2–Q3 FY27.
2. **Screener's FY26 cash flow is wrong, and the "301% cash conversion" story is false.** The true CFO is ₹171.5 Cr (60% of EBITDA). It was positive only because one customer prepaid ~₹410 Cr and suppliers extended ~₹460 Cr of extra credit, while inventories rose ~₹580 Cr and receivables ~₹310 Cr [V AR]. **In this business, cash comes from customer advances, not from margins.** When the advance-funded strategic order finishes (Q2 FY27), working capital will jump. That is why the ₹1,200 Cr QIP and the ₹2,420 Cr bank lines were put in place in May–Aug 2026.
3. **The "strategic order" was one customer-channel: ₹2,184 Cr through a single Indian distributor in two POs.** That explains why three customers exceeded 10% of revenue and why top-5 concentration hit 81% in Q1 FY27. It is also probably the ">5,000-GPU foundational-LLM" project in the AR milestones [E]. **The FY27 question is whether Netweb can replace ~₹1,600 Cr of one-off sovereign revenue with organic orders.** The Q4 guide of "35–40% organic growth ex-strategic" implies the base business goes from ~₹1,625 Cr (FY26 ex-strategic, 2,184 − 559) to ~₹2,200–2,300 Cr in FY27 [E].
4. **India's server imports are not a China story; laptops are.** HS 847150 (servers/processing units) was $4.96 bn in FY26 (+38%), and China supplied only 6.6%: Singapore, the US, Malaysia, Taiwan and Mexico dominate. Laptops ($6.73 bn) are still ~72% Chinese [V TradeStat]. **Two consequences.** (a) The IMS and "trusted source" policy hits laptops, not servers. (b) **Netweb's competition in servers is US/ODM-built product (Dell, HPE, Supermicro, Lenovo via SE Asia/Mexico), not Chinese brands.** Imported processing units worth ~₹43,000 Cr are the realistic addressable pool for a domestic designer-OEM [E].
5. **The state has its own server line, and it is built by EMS firms.** C-DAC's Rudra servers (NSM) are "indigenously designed… with technology transferred to Indian EMS partners for manufacturing" [V PIB 4-Oct-2026]. With PPP-MII Class-I rules, **a C-DAC design + EMS assembler (Kaynes/Syrma/VVDN-type) can meet local-content norms without Netweb**. This is a quieter competitive threat in HPC than Dell or HPE localising.
6. **Funding is no longer the constraint.** CRISIL-rated bank lines rose from ₹260 Cr to ₹2,420 Cr in two weeks (May–Jun 2026), utilisation averaged 24%, and the ₹1,200 Cr QIP followed. Netweb can now finance ~₹13,000 Cr of revenue at a 96-day CCC [E]. **The binding constraints are GPU allocation (NVIDIA), memory supply, and sovereign order timing.** The writer should drop Part 1's framing of "working capital is the binding constraint".
7. **IndiaAI's subsidy channel is thinly used.** 93.18 lakh GPU-hours over ~18 months against a 34–45k GPU pool is low single-digit utilisation, at L1 rates of ₹153/hr (H100) to ₹323/hr (B200) [V PIB; E]. Neocloud hardware buyers (Yotta, E2E, Sify, Cyfuture…) must fill capacity with private demand. E2E's Q2 FY27 (₹224 Cr revenue, 77% OPM) shows some can. **For Netweb, neocloud orders are higher-risk receivables than government HPC.** Watch the credit quality of CSP customers.
8. **Global peers price AI servers as a cyclical, low-margin business.** Supermicro trades at 7× forward and Dell at 16×, even as the TrendForce server market heads past $1 trn in 2027. Netweb's ~99× TTM rests on Indian sovereign scarcity, not on a structurally better business model. Its gross margin (20.9%) is above Supermicro's (10.8%) but below Dell ISG/HPE-type 25–30% enterprise mixes [E].

### 4.5.2 New primer issues (append to primer-issues.md)

#### From Computer Hardware deep-research pass (2026-10-23, computer-hardware-industry.md Part 4)

**netweb-technologies.html**
- **Cash flow:** any FY26 "strong cash generation" claim must use **CFO ₹171.5 Cr** (AR; CFO on the Q4 call), not screener's ₹790 Cr (an AR sign misprint propagated by screener). CFO/EBITDA ≈ 60%. Mention customer advances of ₹412.8 Cr at Mar-26.
- **Gross margin:** add the company-reported **20.85% (FY26) vs 23.11% (FY25)**. Explain that EBITDA held because of operating leverage (opex 10.7% → 6.5% of revenue).
- **Government share:** add "**Government 42.8% / non-government 57.2% of FY26 customers** (AR)". Replace any unsourced "government-favoured" sizing.
- **PLI:** the "PLI wording" fix in Part 3 §3.4 is **superseded**. Netweb **is** a PLI IT Hardware 2.0 beneficiary for servers (migrated via approval of 24-Nov-2023), but **booked nil PLI income in FY26** (₹5.94 Cr in FY25). Say both.
- **R&D:** "₹13.14 Cr incl. capex (0.6% of revenue), 110 R&D staff (AR)". Avoid "2–3% of revenue" unless attributed to CRISIL.
- **Supercomputers:** the Part 3 fix "300+ → 60+" is **wrong; reverse it**. The AR says **600+ supercomputing systems installed**, 10,000+ GPU AI systems and 60+ private-cloud/HCI installations. CRISIL says "300+ made-in-India HPC units". Use the AR figure with attribution.
- **Guidance:** the Part 3 fix is **partly wrong**. 35–40% *was* guided on 4-May-2026, but **for organic business excluding the strategic order**. Add that qualifier. On 29-Jul management said it is "not guiding" revenue.
- **Order book:** explain the **₹2,184 Cr strategic basket = ₹1,734 Cr (3-Sep-25) + ₹450 Cr (19-Sep-25)** from one distributor; ~₹1,195 Cr was due in Q2 FY27 [E]. Do not name the distributor.
- **Ownership:** promoter 64.16% (Sep-26) after two events: (a) a **3.65% open-market sale on 12-Feb-2026** ("for liquidity"; no further sale for 12 months, per the Q4 call); (b) **4.4% dilution from the ₹1,200 Cr QIP at ₹4,790 (20-Aug-2026)**. QIP allottees include ICICI Pru MF, Nomura, Goldman Sachs and Think.
- **Credit:** add **CRISIL A+/Stable / A1 (upgraded 25-May-2026), ₹2,420 Cr bank lines**. CRISIL flags top-3 suppliers at 65–70% of procurement (Taiwan imports) and top-5 customers at 65–70% of revenue.
- **Concentration:** add "three customers each ≥10% of FY26 revenue (AR note 40)".
- **Capacity:** "utilisation 65–70%" (CMD, 4-May-2026); three Faridabad facilities plus a dense-GPU line (>150 kW/rack).
- **Valuation context:** global AI-server OEMs trade at 7–16× forward (Supermicro, Dell, HPE; 23-Oct-2026). Netweb ~99× TTM. QIP buyers are ~9.5% under water at ₹4,336.
- **Competition:** add C-DAC Rudra servers built by Indian EMS partners under technology transfer (PIB 4-Oct-2026) as a PPP-MII-eligible rival in HPC.

**dixon-technologies.html**
- The PLI 2.0 IT-hardware list also includes Kaynes and Syrma (AngelOne, 16-May-2026). Dixon's IT-hardware ramp should be read against **laptop imports of $6.73 bn in FY26 (72% from China; TradeStat)**: that is the import pool PLI is meant to replace.

**kaynes-technology.html / syrma-sgs-technology.html**
- Both are reported among the 27 PLI IT Hardware 2.0 approvals [V-snip]. Kaynes/Syrma-type EMS firms are the kind of manufacturing partner C-DAC uses for Rudra servers (PIB says "Indian EMS partners", unnamed). **Do not claim either is a Rudra partner without a source.**

**redington.html**
- Unchanged: do **not** link Redington to Netweb's ₹1,734 Cr / ₹450 Cr orders. Both filings describe the awarder only generically, and no source names it.

**General / sector primers**
- Replace "laptop imports ~96% from China" (if used anywhere) with **TradeStat: China 71.8% of HS 847130 in FY26 (peak 79.9% in FY25)**.
- AI Diffusion rule: say "**rescission announced May-2025; not yet formally removed from the CFR; replacement pending**", not "rescinded".
- IndiaAI: add the **round-2 L1 rates (B200 ₹323/hr, H100 ₹153/hr; PIB 30-May-2025)** and the **₹65/hr subsidised user price**.

### 4.5.3 Source URLs (this pass)
- Netweb FY26 Annual Report: https://www.bseindia.com/xml-data/corpfiling/AttachHis/87148e7d-f96d-40e5-9d8a-06d0ec00daa3.pdf
- Q4 FY26 call transcript (4-May-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/01b266d6-defa-46f0-acbc-b53b9debed80.pdf
- Q1 FY27 results (scanned): https://nsearchives.nseindia.com/corporate/NETWEB1234_28072026151552_Results.pdf
- Q1 FY27 presentation: https://nsearchives.nseindia.com/corporate/NETWEB1234_28072026180056_Earning_Presentation_28072026.pdf
- Q1 FY27 transcript: https://nsearchives.nseindia.com/corporate/NETWEB1234_01082026124230_Transcript_Q1_2027.pdf
- QIP filings:
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_17082026193948_Outcome_Fund_Raising.pdf
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_20082026230157_Issue_Closure_Intimation__3_.pdf
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_20082026235154_Allotment_Intimation__1_.pdf
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_25082026090156_Intimation_Press_release_QIP.pdf
- Order filings:
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_03092025103838_Intimation_of_Order.pdf (₹1,734 Cr)
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_03092025105026_Intimation_Press.pdf
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_19092025183027_Intimation_of_Order_New.pdf (₹450 Cr)
- CRISIL:
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_26052026132424_Intimation_of_Credit_Rating_2026.pdf
  - https://nsearchives.nseindia.com/corporate/NETWEB1234_10062026181259_Intimation_Updated_Credit_Rating_2026.pdf
- NSE APIs (SAST Reg 29, shareholding, announcements): https://www.nseindia.com/api/corporate-sast-reg29?index=equities&symbol=NETWEB · https://www.nseindia.com/api/corporate-share-holdings-master?index=equities&symbol=NETWEB · https://www.nseindia.com/api/corporate-announcements?index=equities&symbol=NETWEB
- Screener (refreshed): https://www.screener.in/company/NETWEB/ and /DIXON/ /KAYNES/ /SYRMA/ /REDINGTON/ /RPTECH/ /E2E/ (consolidated pages; E2E standalone)
- PIB:
  - Factsheet 13-Aug-2026: https://www.pib.gov.in/FactsheetDetails.aspx?Id=150860
  - Backgrounder 10-Feb-2026: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026210784401.pdf
  - Release 30-May-2025 (L1 rates): https://negd.gov.in/wp-content/uploads/2025/06/PIB2132817.pdf
  - NSM backgrounder 4-Oct-2026: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2318908
- TradeStat EIDB (commodity-wise and commodity × country imports; HS 8471/847130/847150): https://tradestat.commerce.gov.in/eidb/commodity_wise_import · https://tradestat.commerce.gov.in/eidb/commodityx_countries_wise_import
- IDC India:
  - https://www.idc.com/resource-center/press-releases/india-enterprise-infrastructure-market-growth/ (25-Aug-2026)
  - https://www.idc.com/resource-center/press-releases/inda-server-demand-concentrated-in-west-and-south/ (19-Jan-2026)
- TrendForce: https://www.trendforce.com/presscenter/news/20261014-13269.html · /20261022-13279.html · /20260930-13258.html
- Export controls: https://www.millerchevalier.com/publication/bis-export-controls-2025-year-review-and-2026-mid-year-update
- Lenovo Q1 FY26/27: https://www.zawya.com/en/press-release/companies-news/lenovo-delivers-strongest-quarter-in-group-history-hybrid-ai-strategy-powers-growth-momentum-437812
- HPE FQ3 2026: https://pulse2.com/hpe-q3-fiscal-2026-revenue-hits-record-12-2-billion-as-outlook-is-raised/
- Dell Q2 FY27: https://futurumgroup.com/insights/dell-technologies-q2-fy-2027-ai-orders-fuel-server-and-storage-growth/
- Global quotes: https://stockanalysis.com/stocks/dell/ · /smci/ · /hpe/ · https://stockanalysis.com/quote/hkg/0992/
- PLI status (secondary): https://www.angelone.in/news/economy/meity-likely-to-assess-it-hardware-pli-scheme-after-rise-in-payouts · https://www.communicationstoday.co.in/pli-scheme-for-it-hardware-disappoints-hugely-incremental-investment-dismal/
- Promoter sale (secondary cross-check): https://scanx.trade/stock-market-news/orders-deals/netweb-technologies-promoters-sell-20-79-lakh-shares-worth-3-65-stake/32523470

*End of Part 4.*
