# Primer issues — other-telecom (RailTel)

Logged by the cloud runner; NOT fixed here (primers are out of scope for this branch).

## From Telecom Services (RailTel) research (2026-10-23, other-telecom-industry.md §3.4)

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


## From Telecom Services (RailTel) deep-research pass (2026-10-23, other-telecom-industry.md §4.6)


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

