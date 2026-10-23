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

