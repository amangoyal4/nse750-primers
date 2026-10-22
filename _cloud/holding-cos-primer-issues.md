# Primer issues — Holding Companies (holding-cos)

Logged by the cloud runner; owner fixes primers locally. Do not edit primers on this branch.

### From Holding Companies research (2026-10-22, holding-cos-industry.md §3.4)

**cholamandalam-financial-holdings.html**
- **Valuation stale (refreshed 12-Jul):** m-cap ~₹31,700 Cr → **₹24,714 Cr** (₹1,316, 22-Oct; 52-wk low ₹1,280); CIFC m-cap ~₹1,55,700 Cr → **₹1,31,315 Cr** (₹1,531); CIFC stake value ~₹68,100 Cr → **₹57,437 Cr**; discount ~54% (stake only) → **~57%**, ~55–59% (SOTP) → **~60%**. Stat strip, §0, §07, §08 and §09 all need the new numbers.
- **Share count wrong:** §08 table says "~₹1,653/share × ~192 Cr shares". CFHL has **18.776 crore** shares (₹1 FV); ₹1,653 × 18.78 Cr = ₹31,040 Cr, not ₹31,700 Cr. Fix the arithmetic and wording.
- **PAT basis unlabelled:** stat strip and §09 present ₹5,485 Cr as "Consolidated PAT" and say "you own a claim on ₹5,485 Cr of consolidated earning power". **~55% of that belongs to CIFC's and Chola MS's other shareholders.** Attributable PAT ≈ **₹2,441 Cr** (EPS ₹130.01). The §09 trap box half-says this; make it explicit and give the attributable number.
- **CIFC stake:** 43.76% → **43.74%** (Jun-26 presentation and screener).
- **CIFC AUM segment split wrong:** "Consumer & small-biz (CSEL) + other newer lines ~38,750" is a back-solved residual. Company segments (Mar-26): VF 1,19,558; LAP 52,295; HL 22,688; **CSEL 15,113**; SME 9,338; **SBPL 3,537; Gold 1,804** (segment total ₹2,24,334 Cr vs headline AUM ₹2,42,630 Cr). Show the gap as "other/unallocated" rather than inflating CSEL.
- **Chola MS valuation generous:** "₹10,000–13,000 Cr for 100%" on ₹3,329 Cr NW = 3.0–3.9× book for an insurer at 115% CoR (now 120%), RoE 10% (Q1 2.6%), GDPI −4.4%. Listed GI peers at 4.3–5.4× book earn 12–17% RoE. Suggest **1.5–2.5× (₹5,100–8,500 Cr)**.
- **Chola MS PAT basis:** "PAT ₹253 Cr, down from ₹484 Cr" is the **Ind AS contribution** to CFHL's consolidated accounts; statutory IGAAP PAT was **₹331 Cr (₹507 Cr)**. Label the basis; also add GDPI (₹7,762 Cr, −4.4%) — "GWP up ~7%" hides a shrinking direct book.
- **Q1 FY27 missing:** CFHL PAT ₹1,789 Cr (+42%), attributable ~₹806 Cr; CIFC disbursements ₹29,612 Cr (+22%), PAT ₹1,654 Cr (+46%), RoE 21.2%, GS3 3.29%, RBI GNPA 4.50%/NNPA 2.95%, CAR 19.81%; Chola MS CoR **120.4%**, loss ratio 85.6%, solvency **1.93×**, PAT ₹86 Cr (−20%); industry CoR ~117.8% FY26.
- **Corporate actions missing:** **CIFC board 28-Oct-2026 to consider a QIP** (dilutes CFHL); **CFHL Q2 board 6-Nov-2026**. Add a "dilution" bullet to the bear case.
- **History box vague:** "2010s: the group consolidates its financial-services stakes under a listed holding company structure (the entity now called CFHL)" — the listed entity is the old **TI (Tube Investments) company (CIN 1949)**, which demerged manufacturing to the new Tube Investments of India in **2017** and was renamed CFHL [K; letterhead "Formerly known as TI Financial Holdings Limited" V]. "Cholamandalam DBS" was CIFC's old name, not CFHL's. Rewrite.
- **Ownership stale:** "mutual funds roughly a fifth (~20%) and foreign investors close to another fifth (~18%)" → MFs **24.2%** (Jun-26), FIIs **12.6%** (Sep-26; down from 18.3% Jun-25), DIIs 27.8%.
- **CIC numbers missing:** add the regulatory ratios (ANW ₹30,813 Cr; capital ratio 2,359% vs 30% min; leverage 0.0002× vs 2.5× max; 99.8% in group companies) — they make the "ring-fenced CIC" point concrete.
- **Peer table:** BHIL discount "~50%+" → ~46% pre-tax / ~38% post-tax per our investment-cos page (19-Oct-26); keep consistent.

**religare-enterprises.html**
- **Demerger and RBI rejection missing (refreshed 8-Aug, two days after the RBI letter):** the Feb-2026 scheme (financial services → RFL, 1:1, RFL to list; REL keeps Care), exchange approvals (7-Jul-2026), and **RBI's refusal (6-Aug to REL, 7-Aug to RFL)**, stock −8.2% on 7-Aug. This is now the central fact of the story; the primer's "Care Health listing being prepared" narrative should be replaced by "the unlock route was blocked; all alternatives need RBI".
- **Valuation stale:** m-cap ~₹8,010 Cr → **₹7,178 Cr** (₹208; 52-wk low ₹197).
- **"Majority control" wrong:** §00/§03/§04 say the Burmans "crossed into majority control". Promoter holding is **31.26%** (Sep-26); they *control the board* but do not own a majority. Fix wording ("control" not "majority").
- **Warrants missing:** ₹1,500 Cr of warrants at ₹235 (Sep-2025; Burmans ₹750 Cr); ₹881 Cr still due by ~Mar-2027; share price below strike. Shares 34.48 Cr now, ~39.5 Cr fully diluted.
- **RBI dividend ban missing:** REL has been barred from paying dividends since the RBI letter of 5-Apr-2019 (reiterated Dec-2019), still in force per FY26 AR — directly relevant to "cash pass-through" and the discount.
- **RFL overstated:** "returned to lending… refocused on granular MSME lending… back in profit" — RFL's **net AUM is ₹53.1 Cr** (240 customers, 4 branches); SME book fell from ₹286 Cr to ₹138 Cr in FY26; FY26 PAT ₹138.8 Cr came largely from **₹93.7 Cr of provision write-backs**; lending is to "restart in due time" under a new CEO (Srinivasan Karthik, ex-HDB). Also add: CAP removed **23-Jul-2025**; Delhi HC quashed fraud classification **22-Jul-2025**.
- **Religare Housing ownership:** "Wholly owned" → **87.5%, held via RFL**.
- **Care accounting needs the third basis:** the primer explains n vs 1/n well but omits **Ind AS 117** (from 1-Apr-2026; Care took a one-year forbearance, so REL's consolidated accounts still use 1/n). Care FY26 Ind AS PBT ₹519 Cr; Q1 FY27 Ind AS PBT ₹163 Cr vs 1/n −₹131 Cr. Explain why REL reported a −₹47 Cr Q1 loss while Care reported Ind AS PAT +₹122 Cr.
- **Care GWP basis:** label ₹11,417 Cr as **full-premium (n) basis**; 1/n FY26 is **₹10,416 Cr**. The FY24/FY25 "indicative" bars: FY25 1/n is ₹8,562 Cr (company); replace indicative numbers with company figures where available.
- **Care solvency missing:** **1.58× (Jun-26)**, down from 1.68× — close to the 1.5× minimum; management targets 1.7× via rights/sub-debt. This is the main bear point on Care and is absent.
- **Care Q1 FY27 missing:** GWP ₹3,247 Cr (+37%), retail +45%, SAHI share 24% (retail 21.6%), CISR 102.7%, investment book ₹11,751 Cr, ₹150 Cr rights issue.
- **Market share wording:** "~22% of SAHI" → company now says **24%** (Q1 FY27); "~6–7% of total health" → retail health **12.6% of industry** (company); keep the bases explicit.
- **Care IPO:** "a Care Health listing being prepared" overstates — no DRHP found; management on 13-Aug: "We are not looking at anything else currently other than figuring this out [RBI]". Older reports of a ₹1,500–2,000 Cr IPO date from 2022–23.
- **Management names:** add Arjun Lamba (MD, REL), Pratul Gupta (Group CFO), Ajay Shah (MD & CEO, Care), Ambrish Jindal (CFO, Care), Srinivasan Karthik (RFL), Pavan Kumar Gupta (RHDFC).
- **Timeline:** "1984 / 2006 Founded and listed" — REL listed via IPO in **Dec-2007** [K]; check. "Rashmi Saluja as chairperson 2018–2022" — she chaired until the Burman takeover (early 2025) [K]; check.

**General (both)**
- Neither primer gives a dated discount history or explains that screener "Net Profit" includes NCI. Neither mentions the **7-Oct-2026 repo hike to 5.50%** or GST 2.0 effects on motor (Chola MS tailwind) and health (Care land-grab).

