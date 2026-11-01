# CPaaS & Enterprise Messaging (IT || IT Enabled Services): Research Dossier + Company Fact Packs

Compiled 2026-11-01 for the writer agent. This is source material, not prose for publication.
- **Part 1** is the industry dossier (brief-industry.md): §0–12 plus sections A–H.
- **Part 2** is the company fact pack for both members (brief-companies.md), with JSON.
- **Part 3** is the company-KPI appendix: summary grid, aggregates, reconciliation vs primers, primer issues and source URLs.

**Members (2, Tier C):** Tanla Platforms (TANLA · 532790) and Route Mobile (ROUTE · 543228).
**Slug:** cpaas. **Suggested cross-links:** telecom-operators.html (the telcos that set termination fees), it-services.html, software-products.html.

**Confidence tags**
- **[V]** = verified this session from a fetched primary or near-primary source: company BSE filings (shareholder letter, press release, investor presentation), the CARE rating rationale, the Twilio SEC 8-K, or the screener.in pages. URLs are in §3.5.
- **[V-snip]** = verified only from a search-result summary or a secondary article (vendor blog, press summary), not the primary document.
- **[K]** = well-established public fact from memory. The source is named but was not re-fetched. Spot-check it if it carries an argument.
- **[E]** = analyst estimate, composite or arithmetic. Present it as "approx." or as a range.
- **[primer]** = from our own primers: primers/tanla-platforms.html (refreshed 14-Aug-2026) and primers/route-mobile.html (refreshed 4-Sep-2026).
- **[screener 1-Nov-26]** = screener.in consolidated pages pulled 1-Nov-2026 (a Sunday). Prices are the **30-Oct-2026 close**: Tanla ₹627 (+1.41% that day), Route ₹439 (−3.08%).

**Units, conventions and FX**
- ₹ crore (Cr) = 10 million; ₹ mn = million (company letters use ₹ mn; ₹10 mn = ₹1 Cr). ₹ lakh crore = ₹1 trillion.
- **Paise (p)** = ₹0.01. Messaging prices and per-transaction economics are quoted in paise. **bn** = billion messages/transactions.
- FY26 = Apr-2025 to Mar-2026. Q1 FY27 = Apr–Jun 2026. Q2 FY27 = Jul–Sep 2026. Both members have a March year-end.
- **FX: ₹94.9 = US$1** (late Oct-2026, per the task brief) for all USD conversions of current figures. Peers' USD figures stay in USD. SEK 1 ≈ ₹9.0–9.5 [E] (not used for any sum).
- "OP" = screener operating profit (sales − expenses, before other income). "EBITDA (company)" = Tanla's reported EBITDA; for Route the **"Adj. EBITDA" (non-GAAP)**, which deducts capitalised development and adds back one-offs. The bases are reconciled in trap 4.
- **GP** = gross profit = revenue − cost of services (mostly carrier/telco termination fees, plus Meta/Google channel fees on OTT). Both companies report it. Screener does **not** show it, so GP is company-only.

---

## Q2 FY27 status (as of 1-Nov-2026): BOTH members have reported Q2 FY27 (Jul–Sep 2026)

| Company | Q1 FY27 (Jun-26) result | Q2 FY27 (Sep-26) board / result | Call | Dividend |
|---|---|---|---|---|
| **Tanla Platforms** | Late **Jul-2026** (screener concall list "Jul 2026"; the letter shows Q1 FY27 rev ₹12,264 mn, PAT ₹1,422 mn) [V] | **Board 27-Oct-2026.** Results, shareholder letter, press release and investor presentation filed 27-Oct (letter signed 19:02 IST) [V BSE]. Newspaper publication 28-Oct. | Oct-2026 concall listed on screener (date not read) [V screener] | **1st interim FY27 ₹6/share** (₹796 mn), record date announced 27-Oct [V] |
| **Route Mobile** | **Jul-2026** (screener concall "Jul 2026"; Q1 FY27 rev ₹1,151.51 Cr, PAT ₹68.55 Cr per the Q2 press release) [V] | **Board 27-Oct-2026** (press release dated 27-Oct, filed 28-Oct 00:03 IST) [V BSE]. | **Investor call 28-Oct-2026**; audio recording filed 28-Oct [V screener]. Transcript not yet on screener. | **2nd interim ₹4/share, record date 2-Nov-2026** [V screener] |

**Still listed?** **Both are listed and trading** (screener prices for 30-Oct-2026; both filed Q2 FY27 results on BSE/NSE on 27–28-Oct-2026) [V].
1. **Route Mobile is NOT delisted and no merger has been announced.**
   - **Proximus Global** (formerly Proximus Opal, the Proximus nv/sa subsidiary that also owns Telesign and BICS) holds **74.85%** (Sep-2026), unchanged since Mar-2025 [V screener].
   - History [V screener shareholding; K for prices]:
     - 58.15% (Dec-23, Gupta founders) → **83.11% (Jun-24)** after Proximus Opal bought the founders' 57.56% and ran the mandatory open offer (completed May-2024).
     - → **74.90% (Sep-24)** after an MPS sell-down → 74.86% (Mar-25) → **74.85% (Sep-26)**.
     - The primer and one search summary give the open-offer peak as "82.70%"; screener shows 83.11% for Jun-24. Use "about 83%".
   - **MPS compliance:** at 74.85% the public float is 25.15%, just above SEBI's 25% minimum [E]. **Any further Proximus purchase would breach MPS** unless it comes through a delisting offer.
   - **No 2026 announcement** of a delisting offer, buy-in, scheme of merger or transfer of Proximus Global assets (BICS/Telesign) into Route was found (search, 1-Nov-26) [V-snip: negative result].
   - Route's own Q2 FY27 press release calls it "a Proximus Global company". **Seckin Arikan, CEO of Proximus Global, is Chairman of Route Mobile** [V]. That is a change from the primer era: former chairman Mark Reid left the Proximus Group by end-Jan-2026 [V-snip Business Standard, Dec-2025].
   - **Proximus Global ownership:** Proximus nv/sa ~**91.3%**; Clear Bridge Ventures (the Gupta family vehicle) the rest. The Jan-2025 reorganisation valued Proximus Global at **~€3.1 bn equity** [V-snip RCR Wireless].
   - **Free-float signal:** FII fell 21.59% (Dec-23) → **1.65%**; DII 5.99% → **2.20%**; retail/public rose to **21.30%** (Sep-26) [V screener]. Institutions have largely left. The float is now retail.
2. **Tanla Platforms**: no merger, demerger or delisting. Two capital/M&A items:
   - **ValueFirst's overseas business (Middle East, SE Asia) was acquired and consolidated from ~Aug-2026.** It contributed **₹285 mn of revenue in two months** of Q2 FY27 [V letter]. Tanla had already bought **ValueFirst India from Twilio (closed 3-Jul-2023, US$45.5 mn = ₹3,737 mn all-cash)** [V-snip, citing Tanla's Q1 FY24 letter]. The 2023 term sheet valued the Middle East piece at ~₹20 Cr [V-snip].
   - The total 2026 consideration was **not found**. Balance-sheet movements Jun→Sep-26 [V letter; E inference]: goodwill +₹906 mn, customer relationships +₹632 mn, other current financial liabilities +₹870 mn, investment in subsidiary −₹78 mn cash. These imply a **₹150–200 Cr deal with a large deferred/contingent component**. FLAG.
   - **No buyback in FY27 so far.** The FY26 buyback was **₹1,793 mn (₹179 Cr)** [V letter equity statement].
3. **Corporate-action watch (Route):** Heltar Technologies' AI customer-engagement business was bought by slump sale through Route Connect (a WOS):
   - BTA **13-Jul-2026**, closed **29-Jul-2026**.
   - **₹33.7 Cr** (₹23.9 Cr upfront + ₹9.8 Cr deferred 18 months), from internal accruals [V PPT].
   - Small (<1% of m-cap) but it is the first "AI-led bolt-on" under the FY26 playbook.

---

## READ THIS FIRST: ten definitional traps

1. **Revenue is a pass-through; gross profit is the business.**
   - **Tanla FY26:** revenue ₹44,177 mn (₹4,418 Cr) but GP ₹11,747 mn (₹1,175 Cr, 26.6%) [V letter quarterly sums].
   - **Route FY26:** revenue ₹44,082 mn (₹4,408 Cr) but GP ₹10,073 mn (₹1,007 Cr, 22.9%) [V FY26 PPT].
   - About **75–77% of every rupee billed goes to telcos and channel owners** (Jio/Airtel/Vi termination fees, international MNOs, Meta for WhatsApp, Google/telcos for RCS).
   - **Never compare CPaaS revenue multiples with SaaS revenue multiples.** Use EV/GP or EV/EBITDA.
   - A revenue "beat" can be one-off promotional campaigns at near-zero margin. Tanla's Q2 FY27 letter says the quarter "benefited from one-time campaigns from select customers" [V].
2. **"EBITDA" differs between the two, and from screener.**
   - **Tanla** company EBITDA ≈ screener OP (Q2 FY27: ₹2,143 mn vs screener ₹214 Cr; FY26 ₹7,236 mn vs ₹726 Cr) [V]. Use either.
   - **Route** reports three numbers:
     - (a) **Reported EBITDA** = PBT before exceptional − other income + finance cost + depreciation: Q2 FY27 ₹1,150.2 mn; FY26 ₹5,372.5 mn.
     - (b) **Adj. EBITDA** = (a) **minus capitalised development (intangibles under development)** plus one-offs (Masivian breach remediation fees, a capital-advance loss allowance, ESOP): Q2 FY27 **₹1,184.2 mn (10.0%)**; FY26 **₹5,259.1 mn (11.9%)**.
     - (c) Screener OP: Q2 FY27 ₹115 Cr; FY26 ₹542 Cr.
   - (b) is *stricter* than (a) on capitalisation but *looser* on one-offs. In Part 3, sector EBITDA uses **screener OP for both** (one basis) and company figures alongside.
3. **Route's FY26 PAT (₹257 Cr) is depressed by a ₹135.87 Cr exceptional charge, not by "a higher tax charge".**
   - The Q2 FY26 exceptional was the **write-off of advances paid to two key vendors (a major MNO and an SMS aggregator)** after contract termination, failed renegotiation and arbitration [V-snip Whalesbook/Arihant; V amount in company PPT: ₹1,358.7 mn, tax impact ₹166.9 mn].
   - FY26 **adj. PAT ₹3,761 mn (+6.7%)** vs reported ₹2,569 mn [V PPT].
   - **The same pattern is recurring:** H1 FY27 operating cash flow was only ₹333 mn (15% of adj. EBITDA) because Route **paid a further ₹1,168 mn "advance to vendor for services which will be availed in the subsequent period"** [V PPT slide 19]. That is the single biggest governance/credit flag in the sub-sector (see §B3).
4. **Screener's "Other income" for Route contains the exceptional.** Q2 FY26 shows other income −₹109 Cr and tax 1,042%; FY26 other income −₹84 Cr [V screener]. Screener FY26 PAT ₹257 Cr = company reported PAT. Never compute "core PAT" from screener rows without adding back ₹135.9 Cr pre-tax / ~₹119 Cr post-tax [E].
5. **Tanla has two segments with opposite economics.**
   - **Digital Platforms** (Trubloq DLT, Wisely.ai anti-scam, Wisely ATP, MaaP; "only cloud and hosting are a charge on revenue"):
     - FY26 revenue ₹3,949 mn (8.9%), GP ₹3,889 mn (**98.5% gross margin**), EBITDA ₹3,039 mn [V letter sums].
     - Q2 FY27: revenue ₹1,047 mn (7.7%), EBITDA margin **78.6%**.
   - **Enterprise Communications** (Karix, ValueFirst: SMS, WhatsApp, RCS, email, voice at a per-transaction price):
     - FY26 revenue ₹40,229 mn, GP ₹7,858 mn (**19.5%**), EBITDA ₹4,197 mn.
     - Q2 FY27 gross margin 20.0%, EBITDA margin **10.7%** [V].
   - **Platforms ≈ 9% of revenue but ≈ 33% of GP and ≈ 42% of EBITDA** (FY26) [E from V].
   - The primer's "~90% platform gross margin" understates it: the true figure is ~98.5%.
6. **Market-share claims use different denominators.**
   - **"~35% of India's CPaaS segment by volume"** (CARE, Apr-2026, for Tanla; also screener's key points) [V]. Tanla said ">35%" after the 2023 ValueFirst deal [V-snip].
   - **"~62% of India's A2P SMS processed through Trubloq"** (primer, historical, approx.) measures **Trubloq DLT scrubbing share across telcos**, not Tanla's messaging share. Trubloq is used by telcos (Vi, BSNL and others [K]) whose traffic includes rivals' messages.
   - Do not add or compare the two.
7. **Route's "billable transactions" are not "SMS sent".** They include SMS, OTT/WhatsApp/RCS and voice events, domestic and international [V PPT]. FY26 **174.9 bn** (+12% vs 155.8 bn) while revenue **fell 3.7%** because international (ILD) messages, priced at a large premium, were replaced by cheap domestic ones [V PPT slide 26]. **Revenue per transaction fell from ~29.4p to ~25.2p** [E]. Volume up is not good news on its own.
8. **"International" means three different things.**
   - (a) **ILD A2P into India:** a foreign-originated OTP (Google, Meta, Amazon, Microsoft, Uber) terminating on an Indian number. It is billed at telcos' international termination rate, many times the domestic rate. Route's historic profit pool; Tanla's "ILD clean-up".
   - (b) **Revenue from foreign-HQ customers** (Route: Asia 37%, Americas 33%, Europe 18%, Africa 3% of H1 FY27) [V].
   - (c) **Termination outside India** (Route: India 35% of H1 FY27 revenue by termination, so ~65% abroad) [V].
   - **DoT's Office Memorandum of 19-Jun-2025** (adopting TRAI's recommendation) defined international SMS as one generated, transmitted or received outside India. All incoming international SMS must come via an ILD gateway, and Indian telemarketers' domestic A2P must not use ILD gateways [V legal500/mondaq summary]. It ended the grey zone of re-labelling.
9. **OTT revenue share is not OTT gross-profit share.**
   - Tanla's **OTT = 36.2% of total revenue** in Q2 FY27 (15% FY24 → 23% FY25 → 31% 9M FY26) [V letter; V CARE]. The primer's "OTT share of enterprise revenue" (~31%) is the CARE "total revenue" figure relabelled.
   - On WhatsApp the aggregator collects Meta's per-message fee (e.g. ₹0.8631 marketing) and keeps a markup. Revenue is inflated by Meta's fee, and the **gross margin on OTT is not disclosed** by either company.
   - Do not assume OTT is higher-margin per rupee. It is often higher **GP per message** but lower **GP % of revenue** [E].
10. **Cash: four numbers.**
    - **Tanla company "cash and cash equivalents" ₹14,474 mn (₹1,447 Cr, Sep-26)** includes FDs >12 months and liquid funds. Of it, restricted cash (margin money for BGs) is ₹584 mn and USD current accounts ₹2,746 mn [V letter]. The FY26 figure of ₹11,436 mn is what the primer calls "~₹1,144 Cr".
    - CARE quotes "cash and bank ~₹859 Cr (Dec-25)" on a narrower basis (the company had ₹9,387 mn then) [V].
    - **Route ₹13,556 mn (₹1,356 Cr, 30-Sep-26)** [V PPT].
    - Screener's "Investments" (Tanla ₹121 Cr; Route ₹17 Cr) **misses most of the cash**, which sits in "Other assets".
    - **Use the company cash figures** for net cash/EV. Both are effectively debt-free: Tanla lease liabilities ₹75 Cr; Route borrowings ₹39 Cr on screener (Sep-26).

---

## 0. Top-line framing (what an expert leads with)

- **Two listed companies, ₹8,826 Cr of FY26 revenue, but only ~₹2,182 Cr of gross profit** [E: Tanla ₹1,175 Cr + Route ₹1,007 Cr company GP].
  - Combined FY26: screener OP ₹1,268 Cr (14.4% of revenue, **58% of GP**); PAT ₹766 Cr (₹885 Cr ex Route's exceptional) [E sums].
  - Combined m-cap **₹11,082 Cr** (30-Oct-26 close): Tanla ₹8,318 Cr (75%), Route ₹2,764 Cr (25%) [V screener].
  - Combined company cash **₹2,803 Cr = 25% of combined m-cap** [E]. Combined EV ≈ **₹8,393 Cr ≈ 6.4× LTM company EBITDA** (m-cap + leases/borrowings − company cash) [E].
- **The two members are moving in opposite directions in FY27.**
  - **Tanla is re-accelerating:**
    - Revenue growth climbed for six quarters: −0.8% (Q2 FY25) → +3.8% → +7.8% → +12.1% → +15.0% → +17.8% → **+25.3% (Q2 FY27, ₹1,352 Cr)** [V letter].
    - Q2 FY27 GP +23.1%, EBITDA +20.8% (₹214 Cr, 15.9%), PAT +17.1% (₹146 Cr).
    - **Organic ex-ValueFirst-overseas growth ≈ +22.6% YoY** [E: (13,517 − 285) ÷ 10,785].
    - Enterprise revenue +27.2%. **WhatsApp volumes doubled QoQ and YoY.** The >₹500 mn customer cohort grew 42.5% YoY, now ~43% of revenue [V].
  - **Route is stagnating with margin repair:**
    - Q2 FY27 revenue ₹1,180 Cr (+5.4% YoY, +2.4% QoQ); GP ₹264 Cr (22.4%, +6.8%).
    - **Adj. EBITDA ₹118 Cr (10.0%), −11.1% YoY**; adj. PAT ₹82.6 Cr (−17.8% YoY) [V PPT].
    - Reported PAT ₹82.6 Cr vs −₹18.8 Cr a year ago (the exceptional).
    - FY27 guidance is mid-to-high single-digit revenue growth and adj. EBITDA margin "around 12%" [V FY26 PPT]. **H1 FY27 delivered +7.4% revenue but 9.8% adj. EBITDA margin**, so the margin guide looks at risk [E].
- **The defining force is channel migration, and it is now visible in the numbers.**
  - Tanla's OTT (WhatsApp + RCS + Truecaller) share of revenue went 15% (FY24) → 23% (FY25) → 31% (9M FY26) → **36.2% (Q2 FY27)** [V CARE; V letter]. Plain SMS fell to ~60% of revenue in 9M FY26 from ~68% in FY25 [V CARE].
  - Route: "A2P SMS decline largely behind us" but "**ILD A2P SMS – Route Mobile's significant revenue driver – is in structural, secular decline**" [V FY26 PPT]. New products (RCS, WhatsApp, AI) were only **₹3,526 mn (8%) of FY26 revenue**, +11% YoY (4-year CAGR 43%). Q2 FY27 ₹1,284 mn (+36.7% YoY) ≈ 10.9% of revenue [V].
- **The channel owners are repricing the new pipes.**
  - Meta moved WhatsApp Business to **per-message pricing on 1-Jul-2025** [V-snip, Meta developer docs as cited]. India marketing rose from ~₹0.7846 to **₹0.8631/message from 1-Jan-2026**; utility/authentication ~**₹0.115** with volume tiers; service and in-window utility free [V-snip vendor rate cards].
  - Indian **RCS** marketing rates reportedly went from **~6–7p to ~20–25p from 1-Sep-2026** [V-snip MoEngage]. Tanla confirms "significant pricing changes effective September 2026" made RCS "a partial offset to growth" [V letter].
  - So the aggregator now has **two landlords** (telco + Meta/Google), and both raise rent.
- **Regulation is the other landlord.** TRAI's TCCCPR-2018 DLT regime is being tightened in waves:
  - **Aug/Oct-2024:** URL/APK/OTT-link whitelisting, enforced 1-Oct-2024.
  - **Dec-2024:** PE→TM chain traceability (enforced ~11-Dec-2024).
  - **Feb-2025:** TCCCPR amendment (PR 11/2025): 140-series for promotional and **1600-series for transactional/service calls**, graded penalties on telcos ₹2/5/10 lakh, blacklisting.
  - **Jun-2025:** DoT international-SMS definition.
  - **18-Sep-2026: Third Amendment finalised**, not yet notified:
    - **A2P calls charged like commercial SMS**, with termination of up to **5p/minute**.
    - AI/ML spam flagging (Reg 21A); a three-complaints-plus-AI-flag threshold.
    - Header/template suspension within 6 hours of misuse.
    - Call-management apps (Truecaller) barred from blocking 140/1600/1601-series calls.
    - Consent rules tightened [V medianama].
  - Each wave raises compliance cost and favours scaled, telco-integrated aggregators. Tanla's **Consent platform** is still waiting for "the regulatory implementation of India's consent framework", whose "prolonged delay" kept Platform growth to **+6.4% YoY** [V letter].
- **Valuation (screener, 30-Oct-26 close):**
  - **Tanla:** P/E **15.0×**, P/B 3.06×, dividend yield 1.91%, ROE 21.4%, ROCE 26.3%. EV/LTM EBITDA ≈ **8.7×** on company cash (incl. ₹75 Cr leases); EV/LTM GP ≈ 5.3× [E]. 52-week range ₹366–657, so the stock is near its high.
  - **Route:** P/E **7.9×** on reported TTM (≈7.5× on screener TTM PAT ₹368 Cr), **P/B 0.95×**, dividend yield 2.51%, ROE 12.6%. **EV/LTM adj. EBITDA ≈ 2.8×; cash = 49% of m-cap** [E]. 52-week range ₹407–771; the stock is −38% over one year and near its low.
  - The market prices Route as a **controlled-subsidiary value trap with a vendor-advance problem**, and Tanla as a **cash-rich re-accelerating platform**.

---

## 1. What the sub-sector does: products, value chain, where value is captured

### 1.1 Products / channels

| Product / channel | What it is | Who pays whom | Members |
|---|---|---|---|
| **A2P SMS: transactional/service** (OTPs, alerts, statements) | DLT-registered template sent from a registered header (e.g. "HDFCBK"); domestic route | Enterprise → aggregator (per SMS); aggregator → terminating telco (termination fee) | Tanla (Karix, ValueFirst), Route |
| **A2P SMS: promotional** | Marketing SMS; DND/consent rules; numeric headers; time windows | Same; lower price, higher complaint risk | Both |
| **ILD A2P SMS (into India)** | Foreign-originated OTP/alert to Indian numbers (global tech, OTT) via ILD gateway | Global enterprise/CPaaS (Twilio, Sinch…) → Indian aggregator/ILDO → telco at international termination rate | Route (historically large); Tanla (cleaned up) |
| **International SMS (abroad)** | Termination in other countries via 280+ direct MNO connects and hubs | Enterprise → Route → foreign MNO | Route (~65% of revenue by termination outside India); Tanla small (ValueFirst ME/SEA from Aug-26) |
| **WhatsApp Business Platform** | Aggregator acts as **BSP** (business solution provider); per-message fees by category (marketing/utility/authentication/service) | Enterprise → BSP (Meta fee + markup) → Meta | Tanla (Karix/ValueFirst; WhatsApp volumes doubled YoY in Q2 FY27), Route |
| **RCS Business Messaging (RBM)** | Branded rich SMS in Google Messages; rides telco RCS cores; Jio/Airtel/Vi | Enterprise → aggregator → telco/Google | Tanla (MaaP initiative, Q1 FY26 [V CARE]), Route |
| **Truecaller business messaging / Viber / email / voice / IVR / number masking** | Other OTT and legacy channels | Varies | Both (Route stronger in voice/email; Tanla lists Truecaller as a customer [V press release]) |
| **DLT platform (Trubloq)** | Blockchain ledger that registers entities, headers, templates and consent; scrubs every commercial SMS in real time for telcos | **Telco → Tanla** (platform fee per scrubbed transaction) [primer; K] | Tanla only |
| **Anti-spam / anti-scam AI (Wisely.ai)** | Real-time inspection of inbound messages; drops scams in <50 ms; takedown of URLs/accounts | Telco (Indosat, Indonesia: 100 mn users) or bank (a top-5 Indian private bank: 21 mn customers, 91 mn scam messages blocked in FY26) → Tanla [V letter case study] | Tanla |
| **SMS / voice firewall for MNOs** | Telco-side filter that blocks grey-route and fraud traffic and **monetises** A2P termination (forces traffic onto paid routes) | Telco ↔ Route (managed service / revenue share) | Route (12 firewalls deployed [V PPT]); Tanla (Wisely) |
| **Network APIs / identity** | Silent number verification, SIM-swap check, device location (GSMA Open Gateway / CAMARA); Telesign-style identity | Enterprise → Route → telco API | Route (Aakash Education silent verification [V]); Proximus Global/Telesign |
| **Conversational AI / no-code journeys** | Bots/agents on WhatsApp/RCS; subscription and outcome pricing | Enterprise → platform (SaaS fee) | Route (Heltar, Jul-26); Tanla (Karix AI showcase at GFF 2026) |

### 1.2 Value chain (domestic A2P SMS in India: the core profit pool)

1. **Principal Entity (PE)**: the bank, fintech, e-commerce or government department. It registers on a telco's DLT portal (entity, headers, content templates, consent templates) and chooses one or more **telemarketers (TM)/aggregators** [K, TCCCPR-2018].
2. **Aggregator / TM (Tanla, Route, Kaleyra, Gupshup, Infobip, Sinch India, ValueFirst, plus hundreds of small ones)**: API/SMPP integration, routing logic, failover, compliance tagging (PE-ID, template ID, TM chain hash), reporting, billing. Since **Dec-2024 the full PE→TM chain must be declared and traceable**; messages with an undeclared chain are rejected [V-snip].
3. **DLT scrubbing**: each telco operates (or outsources) a DLT platform. **Tanla's Trubloq** is one (other telcos run in-house or other vendors' DLT platforms; the exact telco-by-telco vendor map was not verified this session — FLAG). The message is matched against the registered header and template, URL whitelist and consent/DND, then accepted or rejected.
4. **Terminating telco (Jio, Airtel, Vi, BSNL)**: delivers to the handset and charges the **A2P termination fee**. Domestic commercial SMS is commercially negotiated, not regulated. Vendor-quoted wholesale ranges are **Jio ~₹0.10–0.12, Airtel ~₹0.13–0.15, Vi ~₹0.16–0.18 per SMS** [V-snip Message Central, a vendor; FLAG]. Retail delivered DLT transactional price is **~₹0.10–0.18** [V-snip].
   - Telcos reportedly raised bulk SMS charges **~25–30% (about +2.5p) from 1-Aug-2023** [V-snip telecomtalk/LinkedIn].
   - The often-quoted "**5p TRAI termination charge**" is the old TRAI-specified charge for P2P/transactional SMS interconnect, not the commercial A2P price [V-snip; K].
5. **End user** (consumer handset). Complaints go to 1909 / the DND app → telco UCC system → penalties on the sender/TM.

### 1.3 Where value is captured (₹ per domestic transactional SMS, illustrative [E])
- Enterprise pays the aggregator **~₹0.13–0.20** (large banks at the low end).
- Telco termination **~₹0.11–0.15** (the telco keeps ~75–85% of the price).
- Aggregator gross profit **~₹0.015–0.04/SMS (1.5–4p)**. Tanla's enterprise GM of 18–20% (CARE) and Route's 22–23% GM blended over richer international traffic are consistent with this [E].
- The **DLT platform fee** (Trubloq) is a fraction of a paisa per scrub, paid by the telco, but on hundreds of billions of scrubs at ~98% gross margin [E; primer: "tiny fee on an enormous number of messages"].
- **ILD into India**: global tech OTPs pay a multiple of domestic termination. The telco captures most of it; the ILD aggregator's take was historically the richest margin in Indian CPaaS (FLAG: no verified current ₹ rate; the global average international termination rate was **~$0.10 in 1Q-2025 vs ~$0.07 in 4Q-2023**, mobilesquared [V-snip]).
- **WhatsApp**: Meta captures the per-message fee (marketing ₹0.8631; utility/auth ₹0.115). The BSP's markup is typically **5–20%** of the Meta fee [E/K, vendor practice] plus platform/SaaS fees.
- **So the value chain is a "telco + platform owner" toll road with aggregators earning a thin coordination margin.** Durable value accrues to (a) scale (better telco rates, BG limits, compliance), (b) telco-side software (DLT, firewall, anti-scam), which Tanla and Route both have, and (c) software layers above the pipe (AI agents, journeys, identity).

---

## 2. Size and growth

### 2.1 India A2P messaging / CPaaS market (sources conflict; all third-party)

| Metric | Value | Source / tag |
|---|---|---|
| India A2P messaging market, 2025 | **US$4.69 bn** → $6.92 bn by 2035 (4.0% CAGR) | Market Research Future [V-snip] |
| India A2P messaging market, 2025 | **US$3.02 bn**, 10.6% CAGR to 2035 | Expert Market Research [V-snip] |
| India CPaaS market, 2025 | **~US$1.40 bn**, 25.9% CAGR 2026–35 | Expert Market Research [V-snip] |
| India A2P RCS, 2029 | **US$544 mn and 21 bn messages** (25% / 33% of Asia-Oceania) | IMARC/Juniper as cited [V-snip] |
| **Bottom-up India enterprise-messaging spend (gross, incl. pass-through), FY26** | **~₹11,000–14,000 Cr (~US$1.2–1.5 bn)** | [E]: Tanla India enterprise ~₹3,900 Cr (it holds ~35% by volume) → ₹11,000 Cr+; cross-check with Route India termination ~41% × ₹4,408 Cr ≈ ₹1,800 Cr |
| India A2P SMS volume | **~500–900 bn messages/yr** (order of magnitude; FLAG) | [E]: no TRAI/IDC series found; 1.8 bn+ SMS/day (all SMS) in a vendor stat page [V-snip, weak] |

**Reading:** the "US$3–5 bn India A2P" market-research figures are about **2–3× the bottom-up spend** and should not be used. The bottom-up gross figure (~₹11–14k Cr) is the defensible number; **the profit pool (GP) is ~₹2,500–3,500 Cr** [E: ~22–25% GM]. Tanla's ₹1,175 Cr GP is overwhelmingly India-earned; Route's ₹1,007 Cr is majority non-India (India ~41% of FY26 revenue by termination), so the two together hold roughly half of the India GP pool [E].

### 2.2 Growth history (the members as the market proxy)

| FY | Tanla rev ₹ Cr | Route rev ₹ Cr | Combined | YoY | Tanla PAT | Route PAT | Combined PAT |
|---|---|---|---|---|---|---|---|
| FY20 | 1,943 | 956 | 2,899 | — | −211 (Karix/Trubloq impairment year) | 58 | −153 |
| FY21 | 2,341 | 1,406 | 3,747 | +29% | 356 | 133 | 489 |
| FY22 | 3,206 | 2,002 | 5,208 | +39% | 539 | 170 | 709 |
| FY23 | 3,355 | 3,569 | 6,924 | +33% | 448 | 333 | 781 |
| FY24 | 3,928 | 4,023 | 7,951 | +15% | 548 | 389 | 937 |
| FY25 | 4,028 | 4,576 | 8,604 | +8.2% | 507 | 334 | 841 |
| FY26 | 4,418 | 4,408 | 8,826 | +2.6% | 509 | 257 (adj. 376) | 766 (adj. 885) |
| TTM Sep-26 | 4,877 | 4,569 | 9,446 | — | 554 | 368 | 922 |
[V screener consolidated for all rows; Route adj. PAT V company PPT]

- **COVID/digital-payments boom FY20–FY22:** combined revenue +34% CAGR, driven by the OTP explosion (UPI, e-KYC, e-commerce) and the DLT rollout (Trubloq launched 2020).
- **FY23–FY25: volume up, price down.** Revenue growth decelerated to single digits. Tanla's PAT peaked in FY22 (₹539 Cr); Route's in FY24 (₹389 Cr).
- **FY26:** combined revenue +2.6%, Tanla +9.7%, Route −3.7% (ILD loss).
- **FY27 so far:** Tanla H1 revenue ₹2,578 Cr, **+21.7%**; Route H1 ₹2,331 Cr, +7.4% [V]. Combined H1 ₹4,909 Cr vs ₹4,289 Cr, **+14.5%** [E].

### 2.3 Global CPaaS
- **Juniper:** global CPaaS ~**US$30.1 bn (2025)** [V-snip, report listing]. Earlier forecast "$29 bn by 2025" [V-snip BusinessWire, 2023]. Other "A2P SMS + CPaaS" estimates are **$31.6–35.9 bn** (LP Information, DIResearch) [V-snip].
- **A2P SMS globally is flat to declining:** one forecaster projects **−0.8% CAGR to 2031** [V-snip]. AIT (artificially inflated traffic / SMS pumping) clean-ups cut volumes across the industry in 2024–25 [V Route FY26 PPT: "AIT clean-up across the industry triggered a broad-based decline in A2P SMS volumes globally"].
- **India's share:** India is ~**4–5% of global CPaaS revenue** [E: ~US$1.3 bn of ~$30 bn] but a much larger share of **message volume**, because Indian prices are among the world's lowest (domestic SMS ~₹0.12 ≈ US$0.0013, vs a ~$0.10 global average international termination rate) [E].
- **Combined Tanla + Route revenue ≈ US$0.93 bn (FY26 at ₹94.9)** [E] vs Twilio ~$6 bn (FY26 run-rate), Infobip $2.34 bn (2025), Sinch ~SEK 27 bn (~$2.6–2.8 bn) [V/V-snip; see §10].

---

## 3. Demand drivers and end-markets

1. **BFSI (the anchor vertical).** OTPs for UPI/cards/net-banking, transaction alerts (RBI mandates SMS alerts on debits), statements, collections.
   - Route: **FinServ 15% of FY26 revenue** (largest vertical), "growth in revenues from several domestic Indian BFS and Fintech customers" [V FY26 PPT].
   - Tanla: its >₹500 mn cohort (22 customers, ~43% of revenue) grew **42.5% YoY, "with BFSI customers driving growth"** [V letter].
   - The Wisely.ai bank case study (a top-5 private bank; 21 mn customers protected; 91 mn scam SMS blocked in FY26; 30–40% fewer smishing complaints; "₹360+ Cr annual economic impact") shows BFSI buying **anti-fraud**, not just delivery [V].
2. **Digital natives / global tech OTP (ILD).** Google, Meta, Microsoft, Amazon, Uber and others send login OTPs to Indian numbers.
   - This was the richest and most volatile pool. **Route's "Digital native" vertical fell from 22% (FY24) → 17% (FY25) → 11% (FY26)** as "a specific US headquartered customer switched to alternate channels of communication". E-commerce fell to 7% on "the loss of ILD traffic from a global major client" [V FY26 PPT, chart-read].
   - Customer-HQ Americas share fell from ~42–48% to **33% (H1 FY27)** [V, chart-read].
   - **Mechanism:** global tech moves OTPs to app push, passkeys, WhatsApp authentication (₹0.115) and silent network verification, which are all cheaper than international SMS termination [E].
3. **E-commerce, logistics, quick commerce, travel:** order/delivery notifications, increasingly on WhatsApp utility messages (₹0.115, free inside the 24-hour service window) [V-snip].
4. **Government & public services:** Aadhaar/DigiLocker/IRCTC/tax OTPs; election and disaster alerts (CBS is separate) [K].
5. **Telecom operators as customers:** DLT (Trubloq), anti-spam (Wisely: Indosat), firewalls (Route: 12 deployed), monetisation. The demand driver is regulation (TRAI UCC penalties on telcos) and **fraud** (smishing, impersonation).
6. **Conversational commerce / AI agents:** WhatsApp catalogues, bots, AI agents (Route–Heltar; Tanla–Karix AI). These are subscription/outcome revenue, but tiny today.

**Demand-side numbers worth quoting**
- Tanla customers billed >₹10 mn annualised: **420 accounts, ₹12,997 mn quarterly revenue (96% of total)**, +24.1% YoY [V].
- Tanla revenue retention **119%** [V].
- Route: **2,400+ active billable clients** (Q2 FY27 PPT) vs "3,100+ clients" (FY26 PPT) — the definitions differ [V]. Recurring revenue **93%** of operating revenue (LTM Sep-26); **net revenue retention 105%** (H1 FY27 vs H1 FY26) [V].
- Route top-150 customers = **~91%** of H1 FY27 revenue; top-50 countries = ~85% [V].

---

## 4. Supply side and cost structure

### 4.1 Key cost inputs
- **Telco termination fees (domestic):** the largest cost. They are commercially set by the three private telcos (Jio, Airtel, Vi ≈ 90%+ of subscribers [K]) with no regulated ceiling for commercial A2P.
  - Hikes: ~25–30% from Aug-2023 [V-snip].
  - Pass-through is partial and lagged: CARE notes "change in telco pricing directly impacts Tanla's realisations and margins, limiting its ability to independently raise prices" [V].
- **International termination fees:** set by foreign MNOs. Rising globally (**$0.07 → $0.10 average, 4Q23 → 1Q25** [V-snip]). Firewalls (Route sells them!) push grey-route traffic onto paid routes, which raises costs for aggregators.
- **Meta/Google channel fees:** WhatsApp per-message (from 1-Jul-2025); RCS repriced 1-Sep-2026.
  - Meta also **withdrew certain WhatsApp incentives** to BSPs, which "squeezed margins" for Tanla in FY26 [primer; K]. Exact incentive scheme not verified (FLAG).
- **People:** Tanla ~1,081 average employees (Q2 FY27) [V]. Route 786 employees ex-Call2Connect (505 India) [V]. Tanla's employee cost grew +14.5% YoY [V].
- **Platform/cloud, data centres, SMSCs:** Route 20+ virtualised data centres, 6 SMSCs [V]. Tanla capitalises platform development:
  - Intangibles under development ₹662 mn (Sep-26).
  - "Platforms" intangible ₹1,700 mn.
  - CARE says ~₹15–20 Cr/quarter of development is capitalised [V].
- **Bank guarantees to telcos:** Tanla BG limits ₹250 Cr, ₹168 Cr used (Mar-25); restricted cash ₹58 Cr [V CARE; V letter]. Telcos demand BGs/advances, and **Route's vendor advances (₹135.9 Cr written off in FY26; another ₹116.8 Cr paid in H1 FY27)** are an extreme form of this supply-side power [V].

### 4.2 "Where ₹100 of revenue goes" (FY26, company data)

| Line | **Tanla (consolidated)** | Tanla Enterprise only | Tanla Platforms only | **Route (consolidated)** |
|---|---|---|---|---|
| Revenue | ₹100 | ₹100 | ₹100 | ₹100 |
| Cost of services (telco/channel fees, cloud) | **₹73.4** | ₹80.5 | ₹1.5 | **₹77.1** |
| **Gross profit** | **₹26.6** | ₹19.5 | ₹98.5 | **₹22.9** |
| Indirect costs (people, SG&A, platform ops) | ₹10.2 | ₹9.1 | ₹21.5 | ₹11.0 (to adj. EBITDA) |
| **EBITDA** | **₹16.4** | ₹10.4 | ₹77.0 | **₹11.9 (adj.)** |
| D&A | ₹2.8 | — | — | ₹2.1 |
| Other income − finance cost | +₹0.7 | — | — | −₹2.2 incl. the exceptional (+₹1.0 ex-exceptional) [E] |
| Tax | ₹2.9 | — | — | ₹2.2 |
| **PAT** | **₹11.5** | — | — | **₹5.8 reported / ₹8.5 adj.** |

[V Tanla letter quarterly sums (FY26 revenue ₹44,177 mn; GP ₹11,747 mn; EBITDA ₹7,236 mn; PAT ₹5,091 mn per the equity statement); V Route FY26 PPT (GP 22.9%; adj. EBITDA 11.9%; reported PAT ₹2,569 mn; adj. PAT ₹3,761 mn); E for the D&A/tax/other lines, derived from screener]

**Read:** for every ₹100 billed, the telcos/Meta/Google keep ₹73–77. Of the ₹23–27 left, roughly **₹10–11 pays the CPaaS company's own costs** and ₹12–16 is EBITDA. The **EBITDA/GP ratio** is the operating-leverage KPI: **Tanla 60.7% (Q2 FY27), down from 67.0% (Q2 FY25); Route ~44.9% (Q2 FY27 adj. EBITDA ÷ GP), down from ~53.9% (Q2 FY26)** [V Tanla; E Route].

### 4.3 Capacity / utilisation equivalents
- This is not a capacity business. The "capacity" analogues are:
  - **Direct MNO connections:** Route 280+ direct (Europe 110, Africa 64, Americas 53, APAC 36, ME 15, India 6), 900+ reachable via the "Super Network" with BICS [V PPT].
  - **Throughput:** Wisely ATP claims capacity "up to one trillion transactions annually" [V CARE].
  - **Telco DLT integrations:** Trubloq on multiple Indian telcos [K].
- **Utilisation analogue = transactions per quarter:**
  - Route: 39.2 bn (Q1 FY26) → 45.2 (Q2 FY26) → 45.1 (Q3) → 45.1 (Q4) → 45.8 (Q1 FY27) → **47.6 bn (Q2 FY27)** [V/E: Q1 FY26 = H1 84.4 − Q2 45.2].
  - Tanla does not disclose message volumes. Screener's AI-extracted fields mention "Trubloq quarterly volume processed bn transactions", but the values are paywalled and were not used.

---

## 5. Industry structure

### 5.1 Concentration and shares (name the basis)
- **Tanla: ~35% of India CPaaS by volume** (CARE Apr-2026) [V]. It is the clear #1 domestic aggregator after buying Karix (2018 [K]; the primer says 2017 — FLAG) and ValueFirst India (2023).
- **Route Mobile:** India is only ~35–41% of its revenue by termination. Its domestic share is perhaps **~10–15% of India A2P by value** [E; no published figure].
- **Other India players** (unlisted or inside larger groups) [K unless tagged]:
  - **Kaleyra:** Tata Communications acquired it in 2023 (US-listed NYSE: KLR, ~$100 mn equity + debt); now inside Tata Comm's "Digital Portfolio". Q2 FY27 digital platform revenue +18.6% YoY; digital margin −3.6% (from −9.7% in FY25); the board approved a **Kaleyra restructuring** (Oct-2026) [V-snip Upstox/ScanX].
  - **Gupshup:** conversational messaging; a 2021 unicorn backed by Tiger Global; struggled after 2022.
  - **Infobip** (Croatia): 2025 revenue **$2.34 bn (+17%), adj. EBITDA $200.6 mn, first net profit** [V-snip Lider].
  - **Sinch India** (via the 2021 acquisitions of ACL Mobile and SMS Gupshup's enterprise business).
  - **Airtel IQ** (Airtel's own CPaaS) and **Jio's enterprise messaging**. The telcos are suppliers *and* competitors.
  - **Message Central, MSG91, Exotel, Netcore, Karix (Tanla), Twilio (exited India A2P via the ValueFirst sale)**, plus hundreds of small DLT-registered telemarketers.
  - **Vonage (Ericsson) stopped supporting domestic SMS to India from Mar-2025** [V-snip Vonage support page]. Foreign CPaaS players are retreating from the domestic pipe and keeping ILD.
- **Concentration test [E]:** Tanla ~35% + the telcos' own CPaaS + Kaleyra + Route + Infobip + Gupshup + Sinch ≈ 75–80% of volume. The top 2 listed hold ~45–50% of domestic volume [E; FLAG — no independent market-share study found].

### 5.2 Ownership / MNC / PE
- **Tanla:** founder-controlled. Promoters **46.17%** (D. Uday Kumar Reddy and family; the primer says Uday ~23%, Tanuja ~16% — not re-verified). Promoter % rose from 44.11% (Mar-25) to 46.17% (Jun-25 onward) as **the buyback shrank the share count while promoters did not tender** [V screener; E inference]. FII 8.08%, DII 0.73%, public 44.59%; 2.58 lakh shareholders [V screener Sep-26].
- **Route:** **Proximus Global 74.85%** (Belgian incumbent Proximus nv/sa owns ~91.3% of Proximus Global; the Belgian state is Proximus's majority shareholder [K, ~53.5%]). FII 1.65%, DII 2.20%, public 21.30%; 1.56 lakh shareholders [V screener].
- **Global consolidation by telcos and big platforms:**
  - **Tata Comm–Kaleyra (2023)**, **Proximus–Route (2024)**, **Ericsson–Vonage (2022, $6.2 bn; Ericsson later took impairments of ~SEK 30+ bn [K])**.
  - Sinch's roll-up (Inteliquent, Pathwire/Mailgun, MessageMedia, ACL, SMS Gupshup enterprise; 2020–21 [K]).
  - **Twilio's divestments of non-core assets** (ValueFirst to Tanla 2023; Zipwhip write-downs [K]).

### 5.3 Imports / foreign competition
- The equivalent of "China/imports" here is **(a) foreign CPaaS selling ILD into India** and **(b) the OTT owners (Meta, Google, Apple)** taking volume off SMS:
  - WhatsApp authentication at ~₹0.115 sits **below** many domestic SMS OTP prices once DLT and compliance costs are added [E].
  - Google's RCS repricing (Sep-2026) moved RCS **up** to ~20–25p for marketing, which slows RCS adoption [V-snip; V Tanla].
- **Grey routes / SIM boxes:** before firewalls, international traffic was terminated as cheap domestic or P2P traffic. **DoT's Jun-2025 OM, telco firewalls and the Dec-2024 traceability rule have largely closed this in India** [V/E], shifting margin from aggregators to telcos.

---

## 6. Business-model archetypes and their economics

| Archetype | Example | Revenue model | Gross margin | EBITDA margin | Capital intensity | Key risk |
|---|---|---|---|---|---|---|
| **1. Domestic enterprise aggregator** | Tanla Enterprise (Karix, ValueFirst) | Per-message price; pass-through telco fee | **18–20%** | ~10–11% | Low (BGs, receivables) | Telco price hikes; Meta/Google repricing; customer concentration (19 customers = 41–46% of revenue [V CARE]) |
| **2. Global/ILD aggregator + hubbing** | Route Mobile (core) | Per-message across 900+ MNOs; ILD premium; hubbing | **~21–24%** (19.3% Q4 FY25 → 24.5% Q3 FY26 → 22.4% Q2 FY27) | ~10–12% adj. | Low, but **vendor advances/deposits to MNOs** | ILD secular decline; AIT; vendor-advance write-offs; FX |
| **3. Telco-side regulatory/trust platform** | Tanla Digital Platforms (Trubloq DLT, Wisely.ai); Route firewall | Per-scrub / per-subscriber / revenue share from the telco | **~98%** | **~77–79%** | Capitalised software | Policy reallocation (TRAI); single-customer (telco) contracts; Consent platform awaiting regulation |
| **4. OTT BSP / conversational platform** | WhatsApp/RCS BSP (both); Route–Heltar; Gupshup | Channel fee + markup + SaaS/outcome fees | Low % (fees inflate revenue); higher ₹ GP/message | Varies | Low | Meta/Google pricing; disintermediation; BSP commoditisation |
| **5. Developer-API CPaaS with software layers** | Twilio, Sinch, Infobip (global reference) | Usage + software (Segment, Flex, Mailgun) | **Twilio ~49% (Q3-26)**; Sinch ~33%; Infobip n/d | Twilio NG op 21%; Sinch adj. EBITDA 12.5%; Infobip ~8.6% | Low | US/EU carrier fees; AI disruption |

**Why the economics differ:**
- Archetype 3 earns from the **telco**, not the enterprise, so no termination fee is passed through. It is effectively a software licence on national traffic. That is why Tanla's Platforms segment makes **~₹3,039 mn EBITDA on ₹3,949 mn revenue (FY26)**, more EBITDA than Route's whole company would make on ~₹5,000 Cr of revenue at ~10% [E].
- Archetype 2's richer gross margin vs archetype 1 is the ILD premium. It is melting: Route's revenue per transaction fell from ~29.4p (FY25) to ~25.2p (FY26) to **~24.8p (Q2 FY27)** [E].
- The **GP-per-transaction** KPI (Route) is the cleanest unit-economics gauge: **5.47p (Q2 FY26) → 5.25p (Q1 FY27) → 5.55p (Q2 FY27)**; FY26 5.76p; FY25 ~6.10p [E: GP ÷ billable transactions, V inputs].

---

## 7. Regulation and policy

### 7.1 The TRAI commercial-communication regime (TCCCPR) — chronology
| Date | Measure | Effect on CPaaS | Tag |
|---|---|---|---|
| 19-Jul-2018 (notified), phased 2019–21 | **TCCCPR 2018**: DLT (blockchain ledger) registration of entities, headers, templates, consent; scrubbing of every commercial SMS | Created Trubloq's market; raised entry barriers; brief traffic disruption at go-live (Mar-2021 DLT enforcement) | [K] |
| 2020–21 | Trubloq goes live; Tanla renames itself Tanla Platforms (2020) | Tanla becomes a DLT operator for telcos | [primer/K] |
| Feb-2023 | Direction: re-verify all headers/templates within 30 days; block unverified ones | Clean-up of dormant headers | [V-snip] |
| 20-Aug-2024 (direction), **1-Oct-2024 (enforced)** | **URL/APK/OTT-link whitelisting**; messages with non-whitelisted links blocked; call-back numbers whitelisted | Short-term delivery failures; +compliance work. **2.75 lakh URLs whitelisted by 10,000 entities** within weeks | [V-snip webindia123 Oct-2024] |
| Oct-2024 | Enforcement snapshot: **800+ entities blacklisted, 18 lakh+ numbers disconnected, 3.5 lakh unused headers and 12 lakh fraud-prone templates blocked** | Shrinks the long tail of small telemarketers | [V-snip, TRAI release as cited] |
| 30-Nov-2024 direction; **~11-Dec-2024 enforced** (the 1-Nov date was deferred) | **Message traceability**: PE→TM chain declared on DLT; non-compliant messages rejected | Ends anonymous resale chains; favours direct-connect aggregators | [V-snip; dates conflict — FLAG] |
| **12-Feb-2025** (TRAI PR 11/2025) | **TCCCPR (Second) Amendment 2025**: 140-series for promotional calls, **1600-series for transactional/service calls**; financial disincentives on telcos **₹2 lakh / ₹5 lakh / ₹10 lakh** for misreporting UCC; sender suspension (15 days, then one-year disconnection across all telcos); complaint threshold **5 complaints in 10 days**; complaint window extended; consumer opt-out options | Higher compliance costs; benefits trust platforms (Wisely, firewalls) | [V-snip securiti/sigmachambers; primary PR not opened] |
| **19-Jun-2025** | **DoT Office Memorandum**: definitions of domestic vs international SMS (adopting TRAI's recommendations). All incoming international SMS via ILD gateways; domestic A2P must not use ILD gateways | Kills re-labelling arbitrage; re-prices global OTP traffic as ILD | [V legal500] |
| 1-Jul-2025 | **Meta WhatsApp per-message pricing** (not a regulator, but a de facto rule-setter) | Utility/auth cheaper at volume; marketing per message | [V-snip] |
| 1-Jan-2026 | WhatsApp India marketing rate **₹0.7846 → ₹0.8631** (+10%); INR billing available; all India WABAs must migrate to INR by **31-Dec-2026** | Rupee billing removes FX for Indian BSPs | [V-snip] |
| 13-Mar-2026 draft → **18-Sep-2026 finalised** (not yet notified) | **TCCCPR Third Amendment 2026**: Reg 21A AI/ML spam flagging (the receiving telco shares flags within 2 hours); **A2P calls charged at the commercial SMS rate, with terminating telcos able to charge up to 5p/min (effective 60 days after notification)**; complaint threshold **3 complaints + AI flag** (90 days); header/template suspension within 6 hours of noticed misuse; complicit TMs disconnected/blacklisted for one year; Truecaller-type apps barred from blocking 140xx/1600xx/1601xx calls; consumer appeal mechanism; legacy consent recognised if registered in the Consent Register; "essential conditions" in telco–sender agreements | **Creates an A2P voice termination fee (a new revenue line for telcos, a new cost for CPaaS voice); deepens the consent registry (positive for Tanla's Consent platform once implemented)** | [V medianama 2026] |
| Sep-2026 | **Google/telco RCS repricing**: marketing ~6–7p → ~20–25p | RCS growth slows; Tanla cites it as "a partial offset" | [V-snip MoEngage; V Tanla] |
| Pending | **Digital Consent Acquisition / Consent Registration Framework** rollout | Tanla: "prolonged delay in the regulatory implementation of India's consent framework" hurt its Consent platform rollout | [V letter] |
| Background | **DPDP Act 2023 / DPDP Rules (notified Nov-2025 [K])** | Consent managers; data-fiduciary obligations for enterprises; demand for consent tech | [K — verify] |

**Spam statistics:** TRAI's Third-Amendment explanatory memorandum (Jan–Jun 2026) found that **~80% of spam complaints against registered telemarketers were closed as invalid, vs ~31% for unregistered telemarketers** [V medianama]. Spam is now overwhelmingly an **unregistered (10-digit number) problem, not a DLT-registered A2P problem**, which strengthens the case for registered aggregators. Total complaint counts (e.g. lakh complaints/month) were **not found** (FLAG).

### 7.2 Other regulators / taxes
- **GST 18%** on messaging services and on Meta's WhatsApp fees [V-snip].
- **Equalisation levy / TDS on Meta payments**: not researched (FLAG).
- **SEBI / exchanges (Tanla):** the company paid a **₹5 lakh fine** and fixed board-composition lapses (independent directors ≥50%, resolved by 10-Oct-2024) per its FY26 secretarial compliance report [V-snip Whalesbook/Investywise]. A **2020 insider-code breach** by a designated person led to disgorgement of ₹56,000 to IPEF [V-snip BSE filing].
  - **No SEBI order or income-tax search on Tanla was found** in this session's searches. The queue's "past SEBI / income-tax probes" **could not be verified** (FLAG; the writer should not assert them).
  - My memory is of an income-tax search at Tanla's Hyderabad offices around 2022–23 and of 2021–22 controversies over promoter-related transactions, but **unverified [K-weak]**. Omit unless verified.
- **SEBI MPS (Route):** 25% minimum public shareholding. Proximus sold down to 74.90% in Sep-2024 [V screener]. It cannot buy more without a delisting offer.
- **SEBI delisting regulations (2021, amended 2024–25 [K]):** reverse book-building or the new **fixed-price delisting option** for frequently traded shares at a premium (introduced 2024 [K]). This is relevant to any future Proximus exit for minorities.

---

## 8. History and cycles (narrative; full timeline in §G)

1. **2000s VAS era:** Tanla (founded 1999 per the company / incorporated 1995 per its CIN) was a mobile VAS and SMS-aggregation company. **IPO Jan-2007**. It rode the international-SMS boom (2007–08), followed by a governance-tinged bust (2009–12) [K].
2. **2018 Karix:** Tanla bought Karix Mobile (and Unicel's assets [K]), becoming India's largest enterprise SMS aggregator [K; primer says 2017].
3. **2019–21 DLT and the platform turn:** TCCCPR 2018 → Trubloq; Wisely launched with Microsoft (CARE: "In 2021") [V]. FY20 loss (−₹211 Cr, impairment); FY21 PAT ₹356 Cr; FY22 PAT ₹539 Cr peak [V screener]. The stock went from ~₹60 (2020) to ~₹2,000 (Jan-2022) [K], then fell ~70% in 2022 [K].
4. **2020 Route IPO** (Sep-2020, "blockbuster"; ₹600 Cr [K]), then a **QIP of ₹8,675 mn** (2021) and an acquisition spree: 365squared (Malta, firewall), Cellent, Start Corp, Call2Connect, TeleDNA, **Masivian/Masiv (Colombia, ~$47.5 mn, Oct-2021 [V-snip])** [V PPT history].
5. **2023 consolidation wave:**
   - **Tanla buys ValueFirst India from Twilio** (closed 3-Jul-2023, $45.5 mn).
   - **Tata Comm buys Kaleyra**.
   - **Proximus agrees (Jul-2023) to buy 57.56% of Route** from the founders [primer/K] and completes it in **May-2024** (open offer → ~83%).
   - Route **₹1,200 mn buyback** [V PPT].
6. **2024–25 the reset:**
   - **AIT clean-up** across global A2P.
   - Global tech moves OTPs off SMS; **Route loses major ILD traffic** (a US-HQ digital native and a global e-commerce major).
   - Telco firewalls and TRAI's URL/traceability rules (Oct–Dec 2024).
   - **Meta's per-message pricing (Jul-2025)** and incentive changes.
   - Tanla revenue −0.8% (Q2 FY25); Route FY26 revenue −3.7% with a ₹135.9 Cr vendor-advance write-off (Q2 FY26).
7. **Jan-2025:** Proximus combines BICS + Telesign + Route as **Proximus Global** (~€3.1 bn equity value) [V-snip].
8. **2026 divergence:**
   - Tanla re-accelerates (+25% in Q2 FY27) on WhatsApp and BFSI wallet share; buys ValueFirst overseas.
   - Route has a Masivian cyber incident (Jun-2026) [V-snip], a new vendor advance (₹116.8 Cr) and buys Heltar (₹33.7 Cr). Its stock is near its low (₹407–439).
   - TRAI's Third Amendment (Sep-2026) and RCS repricing (Sep-2026).

**Cycle pattern:** the sub-sector has a **regulatory-shock → volume-disruption → consolidation** rhythm (2018–21 DLT; 2024–25 traceability/whitelisting/ILD), overlaid on a **channel-substitution super-cycle** (SMS → OTT). Profit peaks were FY22 (Tanla) and FY24 (Route).

---

## 9. Unit economics and native KPIs (benchmarks in §F)

### 9.1 KPI definitions and where each member stands
| KPI | Definition | Tanla (latest) | Route (latest) |
|---|---|---|---|
| **Gross margin %** | (Revenue − cost of services) ÷ revenue | **26.1% (Q2 FY27)**; 26.6% FY26; Enterprise 20.0%, Platforms 98.6% | **22.4% (Q2 FY27)**; 22.9% FY26; 20.8% FY25 |
| **Gross profit growth** | YoY | **+23.1% (Q2 FY27)**; +11.8% FY26 | **+6.8% (Q2 FY27)**; +5.9% FY26 |
| **EBITDA margin** | EBITDA ÷ revenue | **15.9% (Q2 FY27)**; 16.4% FY26 | **10.0% adj. (Q2 FY27)**; 11.9% adj. FY26 |
| **EBITDA ÷ GP (operating leverage)** | | **60.7% (Q2 FY27)** vs 67.0% (Q2 FY25) | **~44.9% (Q2 FY27)** vs ~53.9% (Q2 FY26) [E] |
| **GP per transaction** | GP ÷ billable transactions | n/d (volumes not disclosed) | **5.55p (Q2 FY27)**; 5.76p FY26 [E] |
| **Revenue per transaction** | | n/d | **24.8p (Q2 FY27)**; 25.2p FY26; ~29.4p FY25 [E] |
| **Platform share of revenue / GP** | Tanla Digital Platforms | **7.7% / 29.3% (Q2 FY27)**; 8.9% / 33.1% FY26 | n/a (new products 10.9% of Q2 revenue) |
| **OTT / new-product share** | | **OTT 36.2% of revenue (Q2 FY27)** | **New products ₹1,284 mn = 10.9% of Q2 FY27 revenue**; 8% FY26 |
| **Customer concentration** | | 19 customers = 41% (FY25), 46% (9M FY26) [V CARE]; 22 customers >₹500 mn = 43% (Q2 FY27) | **Top 10 = 42%, Top 5 = 32%, Top 50 = 75% (H1 FY27)**; Top 10 44% (FY24), 48% (FY25), 43% (FY26) [V chart] |
| **Net revenue retention** | | **119%** (Q2 FY27) | **105%** (H1 FY27 vs H1 FY26) |
| **DSO** | | **63 days** (Q2 FY27) from 77 | ~72 days (H1 FY27), payables ~50 days; receivables ₹9,469 mn [V] |
| **Cash conversion** | FCF ÷ PAT or CFO ÷ EBITDA | **FCF ₹2,316 mn = 158% of PAT (Q2)**; FY26 FCF ₹477 Cr (94%) | **H1 CFO/EBITDA 15% reported (66% adj. for the vendor advance)**; FY26 CFO ₹581 Cr |
| **ROCE** | | 26.5% incl. cash (company); 26.3% (screener) | 17.4% (screener) |
| **ROE** | | 21.4% | 12.6% |
| **Cash ÷ m-cap** | | 17.4% | **49.0%** |

### 9.2 Through-cycle returns
- **Tanla:** ROCE (screener) 52% (FY21) → 59% (FY22) → 38% (FY23–24) → 29% (FY25) → 26% (FY26). OPM 22% (FY22) → 16% (FY26). **Returns fell by half as cash built up and pricing tightened** [V screener].
- **Route:** ROCE 33% (FY21) → 17% (FY22, QIP cash) → 22% (FY23) → 21% → 18% → 17% (FY26). OPM 11–13% throughout [V screener]. Route never had software-like returns. It is a logistics-like margin business.

### 9.3 The GP-per-message squeeze, decomposed (Route FY25 → FY26) [E]
- FY25: revenue ₹45,756 mn ÷ 155.8 bn = **29.4p/txn**; GP ₹9,509 mn ÷ 155.8 bn = **6.10p**.
- FY26: revenue ₹44,082 mn ÷ 174.9 bn = **25.2p**; GP ₹10,073 mn ÷ 174.9 bn = **5.76p**.
- **Volume +12.3%, GP/txn −5.6% → GP +5.9%.** Revenue/txn fell 14% but cost/txn fell faster (23.3p → 19.4p) because expensive ILD termination left with the ILD revenue.
- Q2 FY27: **24.8p revenue, 5.55p GP, 2.49p adj. EBITDA per transaction**.

### 9.4 Tanla mix arithmetic (FY26 → Q2 FY27 annualised) [E]
- Q2 FY27 run-rate: revenue ₹54,068 mn; GP ₹14,124 mn; EBITDA ₹8,572 mn.
- Platforms ₹4,188 mn (GP ₹4,132 mn); Enterprise ₹49,880 mn (GP ₹9,992 mn).
- **If the Enterprise gross margin moves ±1 pt, GP moves ±₹499 mn ≈ ±3.5%.** If Platforms grows 20% instead of 6%, GP +₹580 mn ≈ +4%. **The enterprise margin (telco/Meta pricing) matters as much as the Platform growth story.**

---

## 10. Global lens

| Company (country) | Latest period | Revenue | Gross margin | EBITDA / op margin | Notes | Tag |
|---|---|---|---|---|---|---|
| **Twilio** (US, NYSE: TWLO) | Q3-2026 (to 30-Sep; reported 29-Oct-26) | **$1.56 bn** (+20%; +16% organic) | **49% non-GAAP** (50% a year ago) | **Non-GAAP op income $325.7 mn (21%)**; GAAP op income $148.6 mn | FCF $369.6 mn (24%); DBNE **114%**; FY26 guide: revenue +20%, NG op income **$1.19–1.20 bn**; buyback $2 bn programme (~$1.3 bn done); **excludes $53.1 mn of A2P carrier-fee revenue from organic** | [V SEC 8-K] |
| **Sinch** (Sweden) | Q2-2026 | **SEK 6,866 mn** (+6% organic) | ~33.5% (GP SEK 2,300 mn) | **Adj. EBITDA SEK 858 mn (12.5%)** | Q3-2026 due **5-Nov-2026**; Q3-2025: net sales SEK 6,659 mn, adj. EBITDA SEK 915 mn (14%) | [V-snip] |
| **Infobip** (Croatia, private) | 2025 | **$2.34 bn** (+17%) | n/d | **Adj. EBITDA $200.6 mn (8.6%)**; first net profit | IPO talk | [V-snip Lider] |
| **Tata Communications Digital (incl. Kaleyra)** (India) | Q2 FY27 | Digital platforms +18.6% YoY (Q1 FY27 digital portfolio ₹2,940 Cr) | n/d | **Digital margin −3.6%** (−6.9% Q1 FY27; −9.7% FY25) | Kaleyra restructuring approved Oct-26 | [V-snip] |
| **Bandwidth** (US) | FY2025 | ~$0.75 bn [K] | ~38–40% non-GAAP [K] | adj. EBITDA ~11–12% [K] | Own US network (CLEC) | [K — not re-fetched] |
| **LINK Mobility** (Norway) | FY2025 | ~NOK 7 bn [K] | ~25% [K] | adj. EBITDA ~9–10% [K] | European A2P roll-up | [K — not re-fetched] |
| **8x8 / Vonage (Ericsson)** | — | Vonage API inside Ericsson; impairments | — | — | Vonage stopped domestic India SMS (Mar-2025) | [V-snip; K] |
| **Proximus Global** (BICS + Telesign + Route) | Target | "€2–2.5 bn international revenue by 2026" (earlier guide) | — | — | ~€3.1 bn equity value (Jan-2025) | [V-snip] |
| **Tanla** | Q2 FY27 | ₹1,352 Cr (~$142 mn) | 26.1% | 15.9% | P/E 15.0×; EV/EBITDA ~8.7× | [V] |
| **Route** | Q2 FY27 | ₹1,180 Cr (~$124 mn) | 22.4% | 10.0% adj. | P/E 7.9×; EV/EBITDA ~2.8× | [V] |

**How the Indians compare:**
- **Scale:** Twilio's *quarterly* revenue (~₹14,800 Cr) ≈ **5.8× Tanla + Route's combined quarterly revenue** (~₹2,531 Cr) [E].
- **Gross margin:** Indian CPaaS (22–26%) is **half Twilio's (49%)**. Twilio's mix includes software (Segment, Flex, Email/SendGrid) and it reports US carrier fees on a net-like basis for part of its traffic. It is **closer to Sinch (~33%) and LINK (~25%)**, the A2P-heavy peers.
- **EBITDA margin:** Tanla's 16% sits above Sinch (12.5%), Infobip (8.6%) and LINK (~10%) and below Twilio (21% non-GAAP op). Route's ~10–12% is in line with the A2P aggregator norm.
- **EBITDA ÷ GP:** Tanla ~61% vs Twilio ~42% (op income ÷ GP) vs Sinch ~37% [E]. **Tanla is unusually efficient on GP** because of the 98%-margin platforms leg and low Hyderabad costs.
- **Valuation:** Twilio (stock not fetched; market cap n/a this session) trades on a developer-platform/AI narrative. Sinch historically at ~8–12× EV/EBITDA [K]. **Route at ~2.8× EV/EBITDA is an outlier**, explained by (i) cash 49% of m-cap, (ii) the controlled-subsidiary discount, (iii) vendor-advance and accounting-quality doubts, and (iv) ILD decline.

---

## 11. Technology and disruption risks
1. **OTP displacement:** passkeys/FIDO, app push, WhatsApp authentication, **silent network authentication (Network APIs)**, Google/Apple verified SMS. Global tech already moved much ILD OTP traffic (Route's loss of a US-HQ digital native) [V].
2. **RCS:** a native rich channel; telcos and Google set the price. A **Sep-2026 hike** slows adoption, but RCS will eventually displace promotional SMS [V-snip].
3. **WhatsApp:** Meta can (and did) change pricing and incentives unilaterally. Per-message pricing since Jul-2025; marketing +10% (Jan-2026). Meta could also go direct to large enterprises (its Cloud API reduces the BSP role) [K].
4. **AI agents / conversational AI:** potential to shift revenue from per-message to per-outcome/subscription (Route: "Potential to sell on outcomes, not price per message" [V PPT]). It is also a threat: LLM platforms (OpenAI, Google) with native channel access could bypass CPaaS orchestration [E].
5. **AI-driven fraud and spam:** both a threat (smishing, deepfake voice) and an opportunity (Wisely.ai: <50 ms detection, <0.2% false positives; TRAI Reg 21A AI flagging) [V].
6. **Cybersecurity:** Route's **Masivian (Colombia) cyber incident, Jun-2026**. Systems in South America were isolated; no group impact was claimed; remediation professional fees **₹82.6 mn in H1 FY27** (₹13.6 mn Q1 + ₹69.0 mn Q2) added back in adj. EBITDA [V PPT; V-snip]. An earlier 2021 alleged server compromise was investigated [V-snip].
7. **Telco disintermediation:** Airtel IQ / Jio enterprise messaging sell directly to large enterprises. Telcos own DLT, firewall and RCS cores [K].
8. **Blockchain DLT obsolescence:** if TRAI moves to a central/national DLT or a government-run consent registry, Trubloq's role could be re-tendered (the primer's "regulator creates, regulator can reprice") [primer; E].

---

## 12. What to watch (leading indicators and dated events)
- **Notification of the TCCCPR Third Amendment 2026** (finalised 18-Sep-2026). Clocks run from notification: 30/60/90 days, including the **5p/min A2P call termination** (60 days) [V].
- **Consent Registration Framework go-live** (Tanla's Consent platform; "prolonged delay") [V].
- **WhatsApp INR-billing migration deadline 31-Dec-2026** and any Meta price change (Meta typically changes rates on 1-Jan/1-Apr/1-Jul/1-Oct) [V-snip].
- **RCS adoption after the 1-Sep-2026 repricing**: Tanla's Q3 FY27 commentary.
- **Route vendor advance of ₹116.8 Cr**: whether it is consumed (services availed) in H2 FY27 or written off like FY26's ₹135.9 Cr [V].
- **Route FY27 adj. EBITDA margin vs the "~12%" guide** (H1: 9.8%) [V/E].
- **Proximus capital-markets / strategy updates** (Proximus Q3-2026 results ~early Nov [K]): any statement on Route's listing; **Proximus Global sale/IPO speculation** (not found this session).
- **Tanla Q3 FY27 (late Jan-2027):** ValueFirst overseas integration (it "operates at lower profitability"; Q2 indirect costs +₹60 mn from it); EBITDA/GP ratio; Platforms growth; any buyback (cash ₹1,447 Cr = 17% of m-cap) [V].
- **Sinch Q3-2026 results 5-Nov-2026**; **Twilio FY26 guide** (raised) [V-snip/V].
- **Telco tariff/termination actions:** Jio/Airtel/Vi tariff hikes on consumers (expected 2026–27 [K]) often coincide with enterprise SMS repricing.
- **FX:** Route earns ~65% of revenue outside India; Tanla's USD current accounts are ₹2,746 mn. A weak rupee (₹94.9/$) **lifts Route's rupee revenue and GP** (with forex gains in other income: Q4 FY26 ₹181.5 mn) and helps Tanla's ILD/overseas lines [V/E].

---

## A. The forces that define this sub-sector (what an expert analyst leads with)

1. **Channel migration: SMS → WhatsApp/RCS (and the change of landlord).**
   - Tanla's OTT share rose from 15% → 36% of revenue in ~2.5 years. Plain SMS fell to ~60% of revenue (9M FY26).
   - The aggregator keeps the customer, but Meta and Google become the price-setters.
   - **Winners are the BSPs with scale and BFSI depth (Tanla: WhatsApp volumes doubled YoY). Losers are SMS-only and ILD-dependent aggregators (Route).** [V]
2. **Telco pricing power over termination (domestic and international).**
   - Three private telcos set A2P termination fees commercially. They raised them ~25–30% in 2023 [V-snip] and earn more from firewalls and the new **5p/min A2P call charge** (TRAI Third Amendment, Sep-2026) [V].
   - Pass-through is partial: CARE: "change in telco pricing directly impacts Tanla's realisations and margins" [V].
   - The **domestic enterprise gross margin is pinned at 18–20%** [V CARE; V letter 20.0%].
3. **Regulation as moat and tax (TRAI/DoT).**
   - DLT (2018–21), whitelisting (Oct-24), traceability (Dec-24), 140/1600 series (Feb-25), the DoT international definition (Jun-25) and the Third Amendment (Sep-26) each raise fixed compliance costs, kill grey routes and push the long tail out (800+ entities blacklisted by Oct-24).
   - **Scale players gain share; telco-side platforms (Trubloq, Wisely, firewalls) gain revenue** [V/V-snip].
4. **Collapse of the ILD OTP profit pool.**
   - Global tech OTPs into India were the fattest margin in the chain. AIT clean-ups, channel switching (a US digital native, a global e-commerce major) and DoT's ILD-gateway rule shrank it.
   - Route's revenue/txn fell from 29.4p to 24.8p; its "Digital native" vertical fell from 22% to 11% of revenue (FY24 → FY26) [V/E].
5. **Consolidation into telcos and larger platforms.**
   - Proximus–Route (2024), Tata Comm–Kaleyra (2023), Ericsson–Vonage (2022), Tanla–ValueFirst (2023, 2026), Sinch's roll-up.
   - **Listed minorities in controlled subsidiaries (Route) carry a structural discount.** Tanla is the last founder-controlled listed Indian consolidator [K/V].
6. **AI's double edge: fraud prevention and conversational agents vs per-message deflation.**
   - Wisely.ai (Indosat; a top-5 private bank) and Route's Heltar bolt-on show the "outcome layer" thesis.
   - AI also lets enterprises reach customers through owned channels and LLM agents [V/E].
7. **Cash-rich, low-reinvestment balance sheets.**
   - Combined cash ₹2,803 Cr (25% of m-cap). Tanla pays a ~30% dividend payout plus buybacks (₹179 Cr in FY26); Route pays a ₹16.5/share dividend (FY26).
   - Capital allocation (buybacks vs M&A) is a large share of the equity story [V].
8. **FX (rupee at ~₹94.9/$).**
   - Route bills ~65% outside India. Rupee weakness inflates its reported revenue and GP and produces forex gains (₹181.5 mn in Q4 FY26).
   - Tanla's USD balances (₹2,746 mn) and ValueFirst overseas also benefit. **Strip FX before calling Route's "growth" organic** [V/E].

## B. Bespoke deep-dive themes (own sections in the report)

### B1. "Two landlords": who really owns the margin in Indian CPaaS
- Build the ₹100 bridge (§4.2) and the per-message bridge (Route: 24.8p revenue → 19.3p cost → 5.55p GP → 2.49p EBITDA, Q2 FY27).
- Then show the landlords' price moves: telco +25–30% (2023); Meta per-message (Jul-25) and marketing +10% (Jan-26); RCS 6–7p → 20–25p (Sep-26); TRAI's new 5p/min A2P call charge.
- Close on the **domestic enterprise GM of 18–20% (CARE) vs Platforms 98.5%**: the only margin no landlord can touch is the one earned *from* the landlord (Trubloq, Wisely, firewall).

### B2. "The regulator's rail": Trubloq, consent and the TRAI rulebook
- TCCCPR 2018 → DLT: why a listed company scrubs national traffic.
- Then the 2024–26 tightening (§7.1 table), with the data: **2.75 lakh URLs whitelisted by 10,000 entities**; 800+ entities blacklisted; **~80% of complaints against registered TMs closed as invalid vs ~31% for unregistered** (Jan–Jun 2026).
- Tanla's Platform segment grew only **+6.4% YoY in Q2 FY27** because the **Consent framework** is delayed. That is the swing factor for the 98%-margin leg.

### B3. "The vendor-advance problem": Route Mobile's accounting-quality question
- **Q2 FY26:** ₹135.87 Cr exceptional write-off of advances to "a major MNO and an SMS aggregator" after contract termination/arbitration → reported PAT −₹18.8 Cr [V-snip; V company PPT].
- **H1 FY27:** another **₹116.8 Cr "advance paid to vendor for services which will be availed in the subsequent period"** → reported CFO only ₹33.3 Cr (15% of adj. EBITDA) [V PPT].
- Also: a ₹4.9 Cr "loss allowance – capital advance" in Q1 FY27; Masivian breach fees ₹8.3 Cr in H1; adj. EBITDA adds these back [V].
- The theme: in A2P, **buying termination capacity in advance** (prepaid committed volumes with MNOs/aggregators) is how aggregators secure rates. It turns the P&L into a credit exposure to vendors.
- **Combine this with a 74.85% foreign parent that also owns BICS (a wholesale carrier that could be a vendor)**: the writer should flag related-party/vendor identity as **not disclosed** in our sources (FLAG — do not allege; ask).

### B4. "Same pipe, different fates": Tanla vs Route, 2024–26
- **Revenue:** Tanla +25.3% vs Route +5.4% (Q2 FY27).
- **GP growth:** +23.1% vs +6.8%.
- **EBITDA/GP:** 60.7% vs ~44.9%.
- **P/E:** 15.0× vs 7.9×.
- **Cash/m-cap:** 17% vs 49%.
- **Ownership:** founder (46%) vs foreign telco (75%).
- **Geography:** India ~90%+ vs India 35%.
- Explain via: domestic BFSI + WhatsApp (Tanla) vs ILD + digital natives (Route); telco-side platforms; the controller discount.

### B5 (optional). "From per-message to per-outcome": AI and the next CPaaS business model
- Wisely.ai: the bank case study (91 mn scam messages blocked, ₹360+ Cr impact claimed) and Indosat (100 mn users).
- Route–Heltar: "sell on outcomes, not price per message".
- Twilio's 49% GM and 114% DBNE as the template. The question is whether the Indian players can reach 30%+ blended GM.

## C. The REVENUE / PROFIT EQUATION

**Aggregator (enterprise) equation:**
> Gross profit = Σ_channels [ Volume_c × (Price_c − Termination/channel fee_c) ]
> EBITDA = GP − indirect costs (people, platform ops, SG&A)
> PAT ≈ (EBITDA − D&A + other income − finance cost) × (1 − tax rate)

**Platform (telco-side) equation:**
> Platform revenue = Scrubbed/inspected transactions × fee per transaction (or per-subscriber/revenue-share) → GP ≈ 98% of revenue

### C.1 Worked example 1 — one domestic transactional SMS (Tanla-type) [E composite]
| Step | ₹ per SMS | Note |
|---|---|---|
| Enterprise price | 0.150 | Mid-size bank, DLT transactional |
| Telco termination | 0.120 | Within the ₹0.10–0.15 range for Jio/Airtel [V-snip vendor] |
| **Gross profit** | **0.030 (20%)** | Matches the Enterprise GM of 20.0% (Q2 FY27) [V] |
| Indirect cost allocation | 0.014 | Enterprise EBITDA margin 10.7% [V] → EBITDA ≈ ₹0.016 |
| **EBITDA** | **0.016** | ~1.6p per SMS |
- **At 1 bn SMS/month: GP ₹3.0 Cr/month, EBITDA ₹1.6 Cr/month.** A 1p telco hike not passed through **cuts GP by a third**.

### C.2 Worked example 2 — one WhatsApp authentication vs one SMS OTP [E composite]
| | SMS OTP | WhatsApp authentication |
|---|---|---|
| Channel/termination fee | ₹0.120 (telco) | ₹0.115 (Meta, India rate) [V-snip] |
| Enterprise price | ₹0.150 | ~₹0.13–0.14 (BSP markup ~₹0.015–0.025) |
| Aggregator GP | ₹0.030 (20%) | ~₹0.020 (~15%) |
| Enterprise saving | — | ~₹0.01–0.02 + richer UX, but needs a WhatsApp user |
- **Read:** OTT can be **lower GP per message and lower GM %**, unless the BSP sells software/journeys on top. That is why Tanla's GM fell 48 bps QoQ in Q2 FY27 despite growth ("change in revenue mix") [V].

### C.3 Worked example 3 — Route Mobile Q2 FY27, top-down [V inputs, E arithmetic]
| Line | ₹ mn | Per transaction (47.6 bn) |
|---|---|---|
| Revenue | 11,797 | 24.8p |
| Cost of services | 9,157 | 19.2p |
| **Gross profit** | **2,640 (22.4%)** | **5.55p** |
| Indirect costs (to adj. EBITDA) | 1,456 | 3.06p |
| **Adj. EBITDA** | **1,184 (10.0%)** | **2.49p** |
| D&A (screener ₹24 Cr) | ~240 | 0.50p |
| Other income (₹12 Cr) − finance (₹2 Cr) | ~+100 | |
| PBT (company) | 1,009 | |
| Tax (~18%) | ~184 | |
| **PAT** | **825.5** | **1.73p** |
- **Sensitivity:** +1 bn transactions at the Q2 GP/txn adds ₹55.5 mn of GP. **+0.5p GP/txn on 47.6 bn = +₹238 mn of GP per quarter (+9%)** → routing quality and mix matter more than volume.

### C.4 Worked example 4 — Tanla's Platform leg, Q2 FY27 [V]
- Revenue ₹1,047 mn; GP ₹1,033 mn (98.6%); EBITDA ₹820 mn (78.6%).
- **The Platform leg = 7.7% of revenue, 29.3% of GP and 38.3% of EBITDA** [E from V].
- If Platforms grew 25% instead of 6.4%, Q2 EBITDA would be ~₹150 mn (7%) higher [E].

### C.5 Company-level reconciliation (FY26) [V/E]
- **Tanla:** ₹44,177 mn revenue → GP ₹11,747 mn → EBITDA ₹7,236 mn → D&A ~₹1,220 mn → other income − finance ~₹300 mn → PBT ~₹6,340 mn → tax ~20% → **PAT ₹5,091 mn** [V letter; screener PBT ₹634 Cr].
- **Route:** ₹44,082 mn → GP ₹10,073 mn → reported EBITDA ₹5,373 mn (adj. ₹5,259 mn) → D&A ₹920 mn → other income ex-exceptional ~₹500 mn and finance ₹130 mn → PBT pre-exceptional ~₹4,890 mn → exceptional −₹1,359 mn → PBT ₹3,530 mn → tax 27% → **PAT ₹2,569 mn** [V PPT; screener PBT ₹353 Cr; E bridging].

## D. Proposed 6-cell stat strip (₹ only)
| Cell | Figure | Source |
|---|---|---|
| 1. Combined FY26 revenue (2 listed members) | **₹8,826 Cr** (+2.6%) | screener [V] |
| 2. Combined FY26 gross profit, the "real" business | **₹2,182 Cr** (24.7% of revenue) | company [V] |
| 3. Share of every ₹100 billed paid to telcos/Meta/Google | **~₹75** (Tanla ₹73.4; Route ₹77.1) | company [V/E] |
| 4. Tanla Q2 FY27 revenue growth vs Route's | **+25.3% vs +5.4%** | company [V] |
| 5. Tanla OTT (WhatsApp/RCS/Truecaller) share of revenue | **36.2%** (Q2 FY27; 15% in FY24) | company/CARE [V] |
| 6. Combined cash vs combined m-cap | **₹2,803 Cr of ₹11,082 Cr (25%)** | company/screener [V/E] |
- Alternates: Route GP per message **5.55p** (Q2 FY27) [E]; Tanla Platform gross margin **98.6%** [V]; WhatsApp marketing message **₹0.8631** [V-snip]; TRAI's new A2P call charge **5p/min** [V].

## E. Chart-ready datasets

**E1. Combined revenue (₹ Cr), FY20–FY26 + TTM** [V screener]
FY20: 2,899 · FY21: 3,747 · FY22: 5,208 · FY23: 6,924 · FY24: 7,951 · FY25: 8,604 · FY26: 8,826 · TTM Sep-26: 9,446
(Tanla: 1,943 / 2,341 / 3,206 / 3,355 / 3,928 / 4,028 / 4,418 / 4,877. Route: 956 / 1,406 / 2,002 / 3,569 / 4,023 / 4,576 / 4,408 / 4,569)

**E2. Tanla quarterly revenue growth YoY (%)** [V letter]
Q2 FY25: −0.8 · Q3 FY25: −0.2 · Q4 FY25: +1.9 · Q1 FY26: +3.8 · Q2 FY26: +7.8 · Q3 FY26: +12.1 · Q4 FY26: +15.0 · Q1 FY27: +17.8 · Q2 FY27: +25.3

**E3. Tanla gross margin by segment (%)** [V letter]
| Qtr | Q2 FY25 | Q3 | Q4 | Q1 FY26 | Q2 | Q3 | Q4 | Q1 FY27 | Q2 FY27 |
|---|---|---|---|---|---|---|---|---|---|
| Platform | 98.7 | 98.7 | 98.7 | 98.5 | 98.6 | 98.4 | 98.3 | 98.5 | 98.6 |
| Enterprise | 19.2 | 18.4 | 17.9 | 17.9 | 19.4 | 20.5 | 20.1 | 20.0 | 20.0 |
| Total | 26.2 | 26.1 | 25.3 | 25.0 | 26.6 | 27.6 | 27.0 | 26.6 | 26.1 |

**E4. Tanla revenue by segment (₹ mn)** [V letter]
| Qtr | Q2 FY25 | Q3 | Q4 | Q1 FY26 | Q2 | Q3 | Q4 | Q1 FY27 | Q2 FY27 |
|---|---|---|---|---|---|---|---|---|---|
| Platform | 880 | 955 | 938 | 919 | 984 | 1,016 | 1,030 | 1,031 | 1,047 |
| Enterprise | 9,127 | 9,049 | 9,306 | 9,488 | 9,801 | 10,194 | 10,746 | 11,233 | 12,470 |
| EBITDA | 1,754 | 1,634 | 1,635 | 1,639 | 1,775 | 1,905 | 1,918 | 2,012 | 2,143 |
| PAT | 1,302 | 1,185 | 1,173 | 1,184 | 1,250 | 1,314 | 1,343 | 1,422 | 1,464 |

**E5. Tanla OTT share of revenue (%)** [V CARE; V letter]
FY24: 15 · FY25: 23 · 9M FY26: 31 · Q2 FY27: 36.2

**E6. Route quarterly revenue (₹ mn), GP margin, transactions** [V PPTs]
| Qtr | Q4 FY25 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 | Q2 FY27 |
|---|---|---|---|---|---|---|
| Revenue | 11,750 | 11,194 | 11,071 | 11,309 | 11,515 | 11,797 |
| GP | 2,264 | 2,471 | 2,712 | 2,639 | 2,404 | 2,640 |
| GM % | 19.3 | 22.1 | 24.5 | 23.3 | 20.9 | 22.4 |
| Adj. EBITDA | 1,200 | 1,333 | 1,429 | 1,343 | 1,089 | 1,184 |
| Billable txns (bn) | 40.5 | 45.2 | 45.1 | 45.1 | 45.8 | 47.6 |
| GP/txn (p) [E] | 5.59 | 5.47 | 6.01 | 5.85 | 5.25 | 5.55 |

**E7. Route new-products revenue (₹ mn)** [V FY26 PPT]
FY22: 852 · FY23: 1,472 · FY24: 2,290 · FY25: 3,168 · FY26: 3,526 (Q2 FY27: 1,284/quarter)

**E8. Route revenue by vertical (% of revenue; FY24 / FY25 / FY26)** [V FY26 PPT, chart-read — verify]
Finserv 14 / 16 / 15 · Digital native 22 / 17 / 11 · Tier-1 CPaaS partners 10 / 9 / 9 · Ecommerce 10 / 9 / 7 · Telecom & allied 2 / 6 / 6 · Retail/travel 2 / 2 / 2

**E9. Route client concentration (% of revenue)** [V PPTs, chart-read]
| | FY24 | FY25 | FY26 | H1 FY27 |
|---|---|---|---|---|
| Top 5 | 33 | 33 | 30 | 32 |
| Top 10 | 44 | 48 | 43 | 42 |
| Top 50 | 75 | 76 | 76 | 75 |

**E10. Price points in Indian business messaging (₹ per message, ex-GST)** [V-snip vendor sources]
Domestic DLT SMS (retail delivered): 0.10–0.18 · WhatsApp utility/authentication: 0.115 · WhatsApp marketing: 0.8631 (from 1-Jan-26; 0.7846 before) · RCS marketing: 0.20–0.25 (from 1-Sep-26; ~0.06–0.07 before) · New A2P call termination: up to 0.05/min (TRAI 3rd amendment, after notification)

**E11. Global peer margins (latest)** [V/V-snip]
Gross margin: Twilio 49% · Sinch ~33.5% · Tanla 26.1% · Route 22.4%
EBITDA/op margin: Twilio 21% (NG op) · Tanla 15.9% · Sinch 12.5% · Route 10.0% (adj.) · Infobip 8.6% · Tata Comm Digital −3.6%

**E12. Shareholding (%, Sep-2026)** [V screener]
Tanla: Promoter 46.17 · FII 8.08 · DII 0.73 · Public 44.59 · Others 0.44
Route: Promoter (Proximus Global) 74.85 · FII 1.65 · DII 2.20 · Public 21.30
Route promoter path: Dec-23 58.15 → Jun-24 83.11 → Sep-24 74.90 → Sep-26 74.85

## F. KPI glossary with benchmarks (good / average / weak) [E unless sourced]
| KPI | Definition | Good | Average | Weak | Members now |
|---|---|---|---|---|---|
| Blended gross margin | GP ÷ revenue | >28% | 22–28% | <20% | Tanla 26.1%; Route 22.4% |
| Enterprise (aggregator) GM | Enterprise GP ÷ enterprise revenue | >22% | 18–22% | <17% | Tanla 20.0% (CARE range 18–20%) |
| Platform GM | Platform GP ÷ revenue | >95% | 85–95% | <85% | Tanla 98.6% |
| EBITDA margin (company basis) | | >16% | 11–16% | <10% | Tanla 15.9%; Route 10.0% adj. |
| EBITDA ÷ GP | operating leverage | >60% | 45–60% | <45% | Tanla 60.7%; Route ~44.9% |
| GP growth YoY | | >15% | 5–15% | <5% | Tanla +23.1%; Route +6.8% |
| GP per transaction (blended, global aggregator) | GP ÷ billable txns | >6p | 5–6p | <5p | Route 5.55p |
| Revenue per transaction | | n/a (mix-driven) | | | Route 24.8p |
| OTT / new-product share | of revenue | >35% | 15–35% | <15% | Tanla 36.2% OTT; Route ~11% new products |
| Top-10 customer share | | <30% | 30–45% | >45% | Route 42%; Tanla 19 customers = 46% (9M FY26) |
| Net revenue retention | | >115% | 100–115% | <100% | Tanla 119%; Route 105% |
| DSO (days) | | <65 | 65–85 | >85 | Tanla 63; Route ~72 |
| CFO ÷ EBITDA | | >90% | 70–90% | <70% | Tanla 121% (Q2); Route 15% (H1, reported) |
| ROE | | >20% | 12–20% | <12% | Tanla 21.4%; Route 12.6% |
| Dividend payout | | 30%+ with buyback | 20–30% | <20% | Tanla ~30% policy; Route ~29% (FY26) |

## G. Timeline (year: event)
- **1995:** Tanla incorporated in Hyderabad (CIN L72200TG1995…); the company says "founded in 1999" [V letter/CIN].
- **2004:** Route Mobile founded in Mumbai by Sandipkumar and Rajdipkumar Gupta, bootstrapped "with c.US$2,000" [V PPT; K names].
- **Jan-2007:** Tanla IPO (BSE 532790) [K].
- **2018:** TRAI notifies TCCCPR 2018 (DLT) [K]. Tanla acquires Karix Mobile [K; the primer says 2017].
- **2020:** Trubloq live; Tanla Solutions → **Tanla Platforms**. FY20 loss −₹211 Cr [V screener].
- **Sep-2020:** Route Mobile IPO (BSE 543228) [V PPT/K].
- **2021:** Wisely launched with Microsoft [V CARE]. Route QIP ₹8,675 mn; Route buys Masivian (Colombia, ~$47.5 mn), 365squared, TeleDNA etc. [V PPT; V-snip]. DLT scrubbing enforced (Mar-2021) [K].
- **Jan-2022:** Tanla stock peak (~₹2,000) [K]. FY22 Tanla PAT ₹539 Cr (its peak) [V].
- **2022:** Ericsson completes the Vonage acquisition ($6.2 bn) [K].
- **FY23:** Wisely ATP (AI anti-phishing) launched [V CARE].
- **Jun-2023 / 3-Jul-2023:** Tanla buys ValueFirst India from Twilio, $45.5 mn [V-snip]. Tata Comm agrees to buy Kaleyra [K].
- **Jul-2023:** Proximus agrees to buy a majority of Route [primer/K]. **1-Aug-2023:** telcos raise bulk SMS charges ~25–30% [V-snip].
- **May-2024:** Proximus Opal completes the acquisition and open offer (stake ~83%) [V screener]. **Sep-2024:** MPS sell-down to 74.90% [V screener].
- **1-Oct-2024:** URL/APK/OTT-link whitelisting enforced [V-snip]. **~11-Dec-2024:** message traceability enforced [V-snip].
- **Jan-2025:** Proximus Global formed (BICS + Telesign + Route; ~€3.1 bn equity) [V-snip].
- **12-Feb-2025:** TCCCPR amendment (140/1600 series; penalties) [V-snip].
- **19-Jun-2025:** DoT OM defines international vs domestic SMS [V].
- **1-Jul-2025:** WhatsApp per-message pricing [V-snip]. **Jul-2025:** Tanla ₹175 Cr buyback approved (₹179 Cr incl. costs in FY26) [primer; V letter].
- **3-Nov-2025:** Route Q2 FY26: ₹135.87 Cr vendor-advance write-off → loss of ₹18.8 Cr [V-snip; V].
- **1-Jan-2026:** WhatsApp India marketing price +10% (₹0.8631); INR billing [V-snip]. **Jan-2026:** Route chairman Mark Reid leaves the Proximus Group [V-snip].
- **6-Apr-2026:** CARE reaffirms Tanla A+/A1+ [V].
- **8-May-2026:** Route FY26 results and strategy reset ("A2P SMS decline largely behind us"); FY27 guide: mid-to-high-single-digit growth, ~12% adj. EBITDA margin [V].
- **Jun-2026:** Masivian (Colombia) cyber incident disclosed [V-snip].
- **13/29-Jul-2026:** Route signs and closes Heltar (₹33.7 Cr) [V].
- **~Aug-2026:** Tanla completes the ValueFirst overseas acquisition [V].
- **1-Sep-2026:** RCS marketing repricing in India [V-snip; V Tanla].
- **18-Sep-2026:** TRAI finalises the TCCCPR Third Amendment 2026 [V].
- **27-Oct-2026:** Tanla Q2 FY27: revenue +25.3%, PAT ₹146 Cr, ₹6 dividend. Route Q2 FY27: revenue +5.4%, PAT ₹82.6 Cr, ₹4 dividend [V].
- **2-Nov-2026:** Route 2nd interim dividend record date [V]. **5-Nov-2026:** Sinch Q3 [V-snip].

## H. Figures I could not source well (and conflicts)
1. **India A2P SMS volume (bn/yr) FY20–FY26.** No TRAI/IDC series found. The ~500–900 bn/yr range is my [E] order of magnitude. **Do not chart.**
2. **India CPaaS market size:** third-party estimates conflict ($1.4 bn CPaaS; $3.0–4.7 bn "A2P messaging"). The bottom-up ₹11–14k Cr is [E]. No IDC figure found.
3. **Telco A2P termination rates:** only vendor quotes (Jio ₹0.10–0.12; Airtel ₹0.13–0.15; Vi ₹0.16–0.18) and the 2023 +25–30% hike [V-snip]. **International termination into India (₹/SMS) not found**; global average ITR $0.10 (1Q-25, mobilesquared) [V-snip].
4. **WhatsApp India rates:** from vendor pages, not Meta's rate card [V-snip]. One vendor dates the ₹0.8631 rate to Jul-2026, not Jan-2026 — conflict.
5. **RCS Sep-2026 repricing (6–7p → 20–25p):** a single vendor source; corroborated qualitatively by Tanla [V-snip/V].
6. **Traceability effective date:** 1-Nov-2024 (Mondaq) vs 30-Nov direction / 11-Dec-2024 enforcement (vendors).
7. **TRAI spam complaint counts** (absolute, per month) and **DLT registered entities/headers/templates totals**: not found beyond the Oct-2024 snapshot (2.75 lakh URLs / 10,000 entities; 800+ blacklisted; 18 lakh numbers disconnected; 3.5 lakh headers and 12 lakh templates blocked).
8. **Tanla past SEBI / income-tax probes:** **not verified**. Only a ₹5 lakh fine (compliance lapses) and a 2020 insider-code disgorgement (₹56,000) were found [V-snip]. Writer: omit or present as unverified.
9. **ValueFirst overseas consideration (2026):** not disclosed in the sources read. Implied ₹150–200 Cr from balance-sheet deltas [E].
10. **Tanla volumes / Trubloq share / platform composition:** Tanla does not disclose message counts. The primer's "~62% Trubloq share" and "Trubloq ~50% / Wisely ~30% of platforms" are unverified.
11. **Route vendor identity** (MNO/aggregator in the FY26 write-off and the H1 FY27 ₹116.8 Cr advance) and whether any vendor is a Proximus Global affiliate (BICS): **not disclosed** in the sources read.
12. **Route vertical and geography mix:** chart-reads from PDF text extraction; column alignment is uncertain (±2 pts).
13. **Peers Bandwidth, LINK Mobility, 8x8:** [K] only, not re-fetched. Twilio, Sinch and Infobip are V/V-snip. Peer EV/EBITDA multiples not fetched.
14. **Karix acquisition year:** 2018 [K] vs the primer's 2017.
15. **Route open-offer peak:** 83.11% (screener Jun-24) vs 82.70% (primer/search).
16. **Proximus state ownership (~53.5%)**, the Belgian government's stake: [K].

---

# PART 2 — COMPANY FACT PACKS (2 members)

**Sources and conventions for both packs:**
- Screener.in consolidated, pulled 1-Nov-2026 (prices = 30-Oct-2026 close) [V screener].
- Company Q2 FY27 filings on BSE (Tanla shareholder letter + press release, 27-Oct-2026; Route press release + investor presentation, 27/28-Oct-2026) and Route's FY26 strategy/earnings presentation (8-May-2026) [V].
- CARE rating rationale for Tanla (6-Apr-2026) [V].
- Primers [primer].
- **EV = m-cap + screener borrowings (lease liabilities) − company-reported cash.** EBITDA = company LTM (Tanla reported; Route adj.) unless stated.

## 2.0 Peer table (FY26, ₹ Cr; m-cap and multiples 30-Oct-26 close)

| Company | NSE | Year | Revenue | YoY % | OP (screener) | OPM % | PAT | ROCE % | ROE % | Net debt (cash) | M-cap | P/E | P/B | EV/EBITDA | GM % (FY26) | GP ₹ Cr (FY26) | Native KPI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Tanla Platforms | TANLA | FY26 | 4,418 | +9.7 | 726 | 16.4 | 509 | 26.3 | 21.4 | **(1,372)** company cash ₹1,447 Cr − leases ₹75 Cr (Sep-26); screener-only basis (46) misleading | 8,318 | 15.0 | 3.06 | **~8.7× LTM** (~9.6× FY26) | 26.6 | 1,175 | Platforms 8.9% of revenue / 33.1% of GP; OTT 36.2% (Q2 FY27) |
| Route Mobile | ROUTE | FY26 | 4,408 | −3.7 | 542 | 12.3 | 257 (adj. 376) | 17.4 | 12.6 | **(1,317)** company cash ₹1,356 Cr − borrowings ₹39 Cr (Sep-26) | 2,764 | 7.91 | 0.95 | **~2.8× LTM adj.** (~2.7× FY26 OP) | 22.9 | 1,007 | 174.9 bn txns FY26; GP/txn 5.76p; Top-10 43% |

## 2.1 Tanla Platforms (TANLA · 532790) — India's largest A2P/CPaaS aggregator (Karix, ValueFirst) + telco-side platforms (Trubloq DLT, Wisely.ai)

**Primer:** tanla-platforms.html, refreshed **14-Aug-2026** (FY26 basis; omits Q1 FY27, which came out in late Jul-2026).

**Standardised financials [V screener 1-Nov-26, consolidated, ₹ Cr]**
| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM Sep-26 |
|---|---|---|---|---|---|---|
| Sales | 3,206 | 3,355 | 3,928 | 4,028 | 4,418 | 4,877 |
| Operating profit | 702 | 590 | 735 | 692 | 726 | 798 |
| OPM % | 22 | 18 | 19 | 17 | 16 | 16 |
| Other income | 16 | 26 | 42 | 40 | 37 | 42 |
| Depreciation | 41 | 46 | 85 | 98 | 122 | 136 |
| PBT | 674 | 567 | 683 | 627 | 634 | 700 |
| PAT | 539 | 448 | 548 | 507 | 509 | 554 |
| EPS ₹ | 39.73 | 33.31 | 40.78 | 37.68 | 38.39 | 41.80 |
| Dividend payout % | 5 | 30 | 29 | 32 | 31 | — |
| CFO | 486 | 247 | 590 | 642 | 574 | — |
| FCF | 425 | 91 | 434 | 514 | 477 | — |
| ROCE % | 59 | 38 | 38 | 29 | 26 | — |
- **Balance sheet (Sep-26, screener):** equity ₹13 Cr + reserves ₹2,709 Cr = **net worth ₹2,722 Cr**; borrowings ₹75 Cr (leases); fixed assets ₹978 Cr (incl. intangibles; rose from ₹761 Cr on ValueFirst overseas); investments ₹121 Cr; other assets ₹3,053 Cr.
- **Valuation (30-Oct close):** price ₹627; m-cap ₹8,318 Cr; P/E 15.0; book value ₹205 (P/B 3.06); dividend yield 1.91%; 52-week ₹366–657. Stock CAGR: 1 yr +3%, 3 yr −13%, 5 yr −13%; 10-yr sales CAGR 26%.
- **Compounding (screener):** 3-yr sales CAGR 10%, 3-yr profit CAGR 4%, TTM sales +18%, TTM profit +16%.

**Company KPIs — Q2 FY27 (Jul–Sep 2026; board 27-Oct-2026) [V shareholder letter]**
| ₹ mn | Q2 FY27 | Q2 FY26 | YoY | Q1 FY27 | QoQ | H1 FY27 | H1 FY26 |
|---|---|---|---|---|---|---|---|
| Revenue | **13,517** | 10,785 | +25.3% | 12,264 | +10.2% | 25,781 | 21,191 |
| – Digital Platforms | 1,047 | 984 | +6.4% | 1,031 | +1.6% | | |
| – Enterprise Communications | 12,470 | 9,801 | +27.2% | 11,233 | +11.0% | | |
| Gross profit | **3,531** (26.1%) | 2,868 (26.6%) | +23.1% | 3,262 | +8.2% | 6,792 (26.3%) | 5,475 (25.8%) |
| – Platforms GP | 1,033 (98.6%) | 970 | +6.5% | 1,015 | | | |
| – Enterprise GP | 2,498 (20.0%) | 1,898 (19.4%) | +31.6% | 2,246 | +11.2% | | |
| EBITDA | **2,143** (15.9%) | 1,775 (16.5%) | +20.8% | 2,012 (16.4%) | +6.6% | 4,154 | 3,414 |
| – Platforms EBITDA | 820 (78.6%) | 755 | | 811 | | | |
| – Enterprise EBITDA | 1,323 (10.7%) | 1,020 | | 1,201 | | | |
| EBITDA ÷ GP | 60.7% | 61.9% | | 61.7% | | 61.2% | 62.4% |
| D&A | 373 | 297 | +25.9% | 329 | +13.6% | 702 | 568 |
| Other income | 120 | 89 | | 141 (incl. ₹34 mn interest on tax refunds) | | 262 | 209 |
| PAT | **1,464** (10.8%) | 1,250 | +17.1% | 1,422 | +3.0% | 2,886 | 2,435 |
| EPS ₹ | 11.09 | 9.43 | +17.7% | 10.77 | | 21.86 | 18.24 |
| FCF | 2,316 (158% of PAT) | 1,645 | | 1,259 | | 3,575 | 1,337 |
| Cash & equivalents (incl. FDs/liquid funds) | **14,474** | 8,814 | | 11,970 | +₹2,504 mn | | |
| DSO (days) | 63 | 77 | | 79 | | 66 | 84 |
| ROCE incl. CCE | 26.5% | 25.6% | | 26.7% | | | |
| Average employees | 1,081 | 1,004 | | | | | |
- **Drivers:**
  - Of the +10.2% QoQ growth, **7.9 pts organic, 2.3 pts ValueFirst overseas** (₹285 mn over two months), plus one-time campaigns.
  - **WhatsApp volumes doubled QoQ and YoY.** RCS was a "partial offset" after the Sep-2026 repricing.
  - Revenue from new customers ₹65 mn. **Revenue retention 119%.**
  - Of the previous year's top 20 customers, 12 remained in the top 20; the other 8 are within the top 30.
- **Customer cohorts (annualised quarterly revenue):**
  - **>₹500 mn: 22 customers, ₹5,826 mn (+42.5% YoY), ~43% of revenue, BFSI-led.**
  - ₹100–500 mn: 80 customers, ₹4,546 mn (+10.8%).
  - ₹10–100 mn: 318 customers, ₹2,625 mn (+15.2%; includes ValueFirst overseas).
  - Total >₹10 mn: 420 customers, ₹12,997 mn (+24.1%).
- **Costs:** indirect costs +₹137 mn QoQ (₹60 mn from ValueFirst overseas; the rest employees, marketing, travel; "GFF and IMC" seasonality). Indirect costs +26.9% YoY (existing business +21.3%). Employee cost +14.5% YoY.
- **D&A** +₹45 mn QoQ: ₹22 mn amortisation of acquired intangibles, ₹18 mn leasehold improvements. ETR 21.8% (vs 19.6%).
- **Cash breakdown (₹14,474 mn):**
  - FDs ₹10,885 mn; USD current accounts ₹2,746 mn (Citibank Dubai ₹1,075 mn; DBS Singapore ₹526 mn); INR current accounts ₹258 mn; restricted cash ₹584 mn.
  - By bank: HDFC Bank ₹9,161 mn; liquid funds ₹1,209 mn.
- **Capital returns:** interim dividend **₹6/share (₹796 mn)**. **FY26 buyback ₹1,793 mn**, FY26 dividends ₹1,603 mn, treasury shares −₹182 mn. **Dividend policy: 30% of consolidated PAT.** "Tanla does not provide any guidance."
- **Balance sheet (Sep-26, company):**
  - Goodwill ₹3,552 mn (Jun ₹2,646 mn); customer relationships ₹803 mn (₹171 mn); platforms ₹1,700 mn; intangibles under development ₹662 mn.
  - Trade receivables ₹9,243 mn; trade payables ₹7,267 mn.
  - Total equity **₹27,224 mn**; no borrowings (lease liabilities ₹749 mn).
- **Annual (company):**
  - FY26 revenue ₹44,177 mn (+9.7%), GP ₹11,747 mn (26.6%, +11.8%), EBITDA ₹7,236 mn (16.4%), PAT ₹5,091 mn, FCF ₹4,767 mn (letter quarterly sum; screener/primer ₹477 Cr) [V].
  - FY25 revenue ₹40,277 mn [V CARE ₹4,028 Cr]; GP ~₹10,509 mn [E].

**Native KPIs**
- **India CPaaS share ~35% by volume** [V CARE]. Customers: "over 3,200 enterprises" including Google, Meta and Truecaller [V press release]. CARE says "over 2,000 established enterprises" [V].
- **OTT share of revenue: 15% (FY24) → 23% (FY25) → 31% (9M FY26) → 36.2% (Q2 FY27).** SMS (ex-OTT digital communications) = 68% of FY25 revenue, 60% of 9M FY26 [V CARE; V letter].
- **Concentration: 19 customers = 41% of FY25 revenue, 46% of 9M FY26** [V CARE]. 22 customers >₹500 mn = ~43% of Q2 FY27 [V].
- Half of revenue comes from clients of 5+ years' tenure [V CARE].
- **Platforms:** Trubloq (DLT for telcos), Wisely.ai (anti-scam: Indosat 100 mn+ users; a top-5 Indian private bank with 21 mn customers, 91 mn scam messages blocked in FY26, 3.2 mn fraudulent links blocked, 1.2 mn scammer numbers flagged, <0.2% false positives) [V letter]; Wisely ATP (FY23; "99% accuracy, up to one trillion transactions annually") [V CARE]; MaaP for Google RBM (Q1 FY26) [V CARE]; Consent platform (awaiting regulation) [V].
- **Recognition:** Gartner MQ CPaaS 2026 "Visionary"; FT "1000 High-Growth Companies APAC" [V press release].
- **Credit:** CARE A+ (Stable) / A1+, reaffirmed 6-Apr-2026. BG limits ₹250 Cr (₹168 Cr used, Mar-25). Positive triggers: 10–15% revenue growth with >18% margin; **platforms >25% of revenue** [V CARE].

**Ownership [V screener Sep-26]:** promoters **46.17%**; FII 8.08%; DII 0.73%; public 44.59%; others 0.44%; 2,58,377 shareholders.
- Promoter 44.11% (Mar-25) → 45.49% (Jun-25) → 46.17% (Sep-25 onward): the buyback effect [E].
- FII 15.46% (Dec-23) → 7.31% (Jun-25) → 8.08%. Institutional ownership is very low for an ₹8,300 Cr company.
- Board [V letter]: Uday Reddy (Founder Chairman & CEO), Deepak Goyal (ED), Dr R.S. Sharma (Lead ID; **ex-TRAI Chairman** [K]), Sunil Bhumralkar, François Ortalo-Magné, Naiyya Saggi. Auditor MSKA & Associates; internal auditor EY.

**Story bullets**
- **The re-acceleration is real and broad.** Six quarters of rising growth to +25.3% (≈+22.6% organic) on WhatsApp and BFSI wallet share. GP grew in step (+23.1%). But **EBITDA/GP slipped to 60.7%** (from 67% two years ago) as costs and the low-margin ValueFirst overseas business were added.
- **The 98%-margin platform leg has stalled** (+6.4% YoY): it waits on the Consent framework, and Wisely needs a second telco after Indosat. CARE's upgrade trigger is "platforms >25% of revenue"; it is 7.7% today.
- **Cash fortress and returns:** ₹1,447 Cr cash (17% of m-cap), debt-free, FCF 158% of PAT in Q2, a 30% dividend policy plus buybacks. Valuation 15× P/E / ~8.7× EV/EBITDA near the 52-week high.
- **Risks:** Meta/Google/telco pricing (two landlords); customer concentration (46% from 19 customers); founder/key-person concentration; regulatory reallocation of DLT; integrating ValueFirst overseas ("lower profitability"); unverified historic governance noise (omit unless verified).

## 2.2 Route Mobile (ROUTE · 543228) — global A2P/CPaaS aggregator and MNO-firewall vendor; 74.85% Proximus Global subsidiary

**Primer:** route-mobile.html, refreshed **4-Sep-2026** (FY26 + mentions Q1 FY27 PAT ₹69 Cr).

**Standardised financials [V screener 1-Nov-26, consolidated, ₹ Cr]**
| | FY22 | FY23 | FY24 | FY25 | FY26 | TTM Sep-26 |
|---|---|---|---|---|---|---|
| Sales | 2,002 | 3,569 | 4,023 | 4,576 | 4,408 | 4,569 |
| Operating profit | 220 | 445 | 514 | 529 | 542 | 503 |
| OPM % | 11 | 12 | 13 | 12 | 12 | 11 |
| Other income | 20 | 39 | 57 | 28 | **−84** (incl. −₹135.9 Cr exceptional) | 64 |
| Interest | 7 | 22 | 30 | 42 | 13 | 6 |
| Depreciation | 38 | 82 | 86 | 89 | 92 | 94 |
| PBT | 195 | 382 | 455 | 426 | 353 | 467 |
| Tax % | 13 | 13 | 15 | 22 | 27 | — |
| PAT | 170 | 333 | 389 | 334 | 257 | 368 |
| EPS ₹ | 26.36 | 52.38 | 59.74 | 50.61 | 37.94 | 55.43 |
| Dividend payout % | 19 | 21 | 18 | 22 | 29 | — |
| CFO | 135 | 73 | −98 | 602 | 581 | — |
| FCF | 117 | 35 | −133 | 583 | 555 | — |
| ROCE % | 17 | 22 | 21 | 18 | 17 | — |
- **Balance sheet (Sep-26, screener):** equity ₹63 Cr + reserves ₹2,848 Cr = **net worth ₹2,911 Cr**; borrowings ₹39 Cr (₹468 Cr Mar-25 → ₹42 Cr Mar-26: debt repaid); fixed assets ₹924 Cr (goodwill/intangibles from acquisitions); other assets ₹2,771 Cr.
- **Valuation (30-Oct close):** price ₹439 (−3.08% on the day); m-cap ₹2,764 Cr; P/E 7.91; book value ₹462 (**P/B 0.95**); dividend yield 2.51%; 52-week ₹407–771. Stock CAGR: 1 yr −38%, 3 yr −35%, 5 yr −26%. 3-yr sales CAGR 7%, 3-yr profit CAGR 0%.

**Company KPIs — Q2 FY27 (board 27-Oct-2026; call 28-Oct) [V press release + PPT]**
| ₹ mn | Q2 FY27 | Q2 FY26 | YoY | Q1 FY27 | QoQ | H1 FY27 | H1 FY26 |
|---|---|---|---|---|---|---|---|
| Revenue | **11,797** (₹1,179.67 Cr) | 11,194 | +5.4% | 11,515 | +2.4% | 23,312 | 21,703 |
| Billable transactions (bn) | **47.6** | 45.2 | +5.3% | 45.8 | +3.9% | 93.4 | 84.4 |
| Gross profit | **2,640** (22.4%) | 2,471 (22.1%) | +6.8% | 2,404 (20.9%) | +9.8% | 5,044 (21.6%) | 4,722 (21.8%) |
| Reported EBITDA | 1,150.2 | 1,359.6 | −15.4% | 1,054.8 | | 2,205.0 | 2,476.1 |
| **Adj. EBITDA** | **1,184.2** (10.0%) | 1,332.5 (11.9%) | −11.1% | 1,089.3 (9.5%) | +8.7% | 2,273.5 (9.8%) | 2,486.8 (11.5%) |
| PBT pre-exceptional | 1,009.3 | 1,378.7 | | 914.7 | | 1,924.0 | |
| Exceptional | — | −1,358.7 | | — | | — | −1,358.7 |
| **Reported PAT** | **825.5** | −188.3 | n.m. | 685.5 | +20.4% | 1,511.0 | 399.5 |
| Adj. PAT | 825.5 (7.0%) | 1,003.6 (9.0%) | −17.8% | 685.5 | +20.4% | 1,511.0 | 1,591.3 |
| EPS ₹ (basic) | 12.63 | (3.37) | | 9.94 (screener) | | 22.57 | |
| New-products revenue | 1,284 | 939 | +36.7% | 945 | +35.8% | | |
- **Adj. EBITDA bridge:** reported EBITDA − capitalised intangibles under development (₹35.0 mn Q2) + **Masivian data-breach remediation professional fees (₹69.0 mn Q2; ₹13.6 mn Q1)** + capital-advance loss allowance (₹49.0 mn Q1). Forex gain in adj. PAT: ₹10.2 mn (Q2), ₹6.1 mn (Q1), **₹177.6 mn (Q2 FY26)**.
  - **The YoY decline in adj. PAT partly reflects a smaller forex gain** [E: ₹167 mn of the ₹178 mn YoY drop].
- **Cash flow H1 FY27:**
  - PBT ₹1,924 mn; working capital: receivables −₹457 mn, **other financial/other assets −₹1,613 mn**, payables +₹497 mn; taxes −₹463 mn.
  - **CFO ₹333 mn (15% of adj. EBITDA)**.
  - Excluding the **₹1,168 mn advance paid to a vendor "for services which will be availed in the subsequent period"**, adj. CFO is ₹1,502 mn (66%).
- **Working capital:** receivables ₹9,469 mn (Sep-26) vs ₹9,094 mn (Mar-26); payables ₹5,151 mn vs ₹4,968 mn. DSO ~72 vs payables ~50 days (H1).
- **Cash ₹13,556 mn (30-Sep-26).** LTM revenue ₹45,691 mn; **LTM EBITDA ₹5,101 mn** [V PPT].
- **Scale:** 280+ direct MNO connects, 900+ via the Super Network; 20+ locations; 20+ data centres; 6 SMSCs; 12 firewalls; 18 hubs; **2,400+ active billable clients**; 786 employees (505 India) [V PPT].
- **Geography H1 FY27 by termination:** **India 35%**, Europe 16%, Asia ex-India 13%, Americas 9%, Middle East 7%, Africa 6% (top-50 countries = ~85%).
  - By customer HQ: Asia 37%, Americas 33%, Europe 18%, Africa 3% (top-150 customers = ~91%) [V PPT, chart-read].
  - FY26 by termination: India ~41% (vs ~50% FY24) [V FY26 PPT, chart-read — verify].
- **Verticals FY26:** Finserv 15%, Digital native 11% (22% FY24), Tier-1 CPaaS partners 9%, E-commerce 7%, Telecom 6%, Retail/travel 2% [V FY26 PPT, chart-read].
- **Concentration:** Top 5 32% / Top 10 42% / Top 50 75% (H1 FY27); Top 10 44% (FY24), 48% (FY25), 43% (FY26) [V].
  - Accounts by size (FY26 → H1 FY27 annualised): >$15 mn 5 → 5; >$10 mn 8 → 9; >$5 mn 21 → 19; >$1 mn 73 → 80 [V].
- **Retention:** recurring revenue 90% (FY25), 89% (FY26), 93% (LTM Sep-26); **NRR 105%** [V].
- **FY26 annual (company):** revenue ₹44,082 mn (−3.7%); txns 174.9 bn (vs 155.8 bn); GP ₹10,073 mn (22.9%, +5.9%; FY25 ₹9,509 mn, 20.8%); adj. EBITDA ₹5,259 mn (11.9%, +0.4%); reported PAT ₹2,569 mn; **adj. PAT ₹3,761 mn (+6.7%)**; exceptional ₹1,358.7 mn (Q2 FY26) [V FY26 PPT].
- **FY27 guidance (8-May-2026):** revenue growth "mid to high single digit"; adj. EBITDA margin "around 12%"; **dividend "increased to a sustainable ₹16.5/share" (FY26 actual ₹11/share)** [V FY26 PPT].
  - H1 FY27: revenue +7.4% (in line); adj. EBITDA margin **9.8% (below)**.
  - Dividends declared so far in FY27: ₹4 (2nd interim, record date 2-Nov) [V]. The 1st interim was presumably ₹4 (Q1) [E — verify].
- **M&A/events:** Heltar (₹33.7 Cr; closed 29-Jul-2026); a Salesforce AgentExchange messaging app (Aug-2026); a new CEO at Masiv (Colombia); Proximus Global won the Carrier Community Global Award 2026 [V PPT].
  - Monitoring agency (Axis Bank) report for Q2: ₹1,580.91 mn utilised, no deviation [V screener; issue identity not read — likely 2021 QIP proceeds, FLAG].
- **Management:** Seckin Arikan (Chairman; CEO Proximus Global); **Rajdipkumar Gupta (MD)**; Tushar Agnihotri (CEO); Raj Gill (Group CFO); Vinay Binyala (CSO & IRO) [V FY26 PPT].

**Native KPIs (derived) [E]**
- **GP/transaction:** 6.10p (FY25) → 5.76p (FY26) → 5.47p (Q2 FY26) → 5.25p (Q1 FY27) → **5.55p (Q2 FY27)**.
- **Revenue/transaction:** 29.4p → 25.2p → **24.8p**.
- **Adj. EBITDA/transaction:** 2.95p (Q2 FY26) → **2.49p (Q2 FY27)**.
- **New products share:** 8% (FY26) → **10.9% (Q2 FY27)**.

**Ownership [V screener Sep-26]:** **Proximus Global (promoter) 74.85%**; FII 1.65%; DII 2.20%; public 21.30%; 1,56,013 shareholders.
- Path: 58.15% (Dec-23) → 83.11% (Jun-24) → 74.90% (Sep-24) → 74.85%.
- FII collapsed from 21.59% to 1.65%; DII from 8.12% (Mar-25) to 2.20%.

**Story bullets**
- **An ILD-dependent aggregator in managed decline, repairing margin.** FY26 revenue −3.7% on lost global-tech ILD. Volumes recovered (47.6 bn/qtr) at lower prices. GM recovered to 22.4% in Q2, but **adj. EBITDA margin (10.0%) is below the 12% guide** as costs rose (salaries, legal/professional fees).
- **Accounting-quality flags:**
  - The ₹135.9 Cr vendor-advance write-off (FY26).
  - A new ₹116.8 Cr vendor advance (H1 FY27); reported CFO only 15% of EBITDA.
  - Adj. EBITDA add-backs (breach fees, capital-advance loss).
  - The Masivian cyber incident.
  - A writer must present adj. vs reported side by side.
- **Deep value or value trap:** ₹1,356 Cr cash = 49% of m-cap; EV ≈ ₹1,450 Cr ≈ 2.8× LTM adj. EBITDA; P/B 0.95; yield 2.5% (3.8% at the ₹16.5 guide).
  - Proximus at 74.85% sits at the MPS ceiling: **any exit for minorities requires a delisting offer** (none announced).
  - The parent can also extract cash via dividends (75% of each payout goes to Proximus).
- **Strategic optionality inside Proximus Global:** cross-sell with BICS (900+ MNOs) and Telesign (identity); "India as innovation hub"; Network APIs; AI bolt-ons (Heltar). Proof so far: new products +36.7% YoY in Q2 FY27.

## 2.3 JSON (numeric; ₹ Cr unless noted; null = not sourced)

```json
[
  {"company":"Tanla Platforms","nse":"TANLA","bse":"532790","fy":"FY26","revenue":4418,"revenue_prev":4028,"rev_growth_pct":9.7,"gross_profit_company":1174.7,"gm_pct":26.6,"gross_profit_prev":1051,"ebitda_company":723.6,"ebitda_op_screener":726,"opm_pct":16.4,"pat":509,"pat_company":509.1,"roce_pct":26.3,"roe_pct":21.4,"borrowings_leases":75,"cash_company_sep26":1447.4,"net_cash_company":1372,"mcap":8318,"price":627,"pe":15.0,"pb":3.06,"div_yield_pct":1.91,"ev":6946,"ev_ebitda_ltm":8.7,"ev_gp_ltm":5.3,"ltm_revenue":4877,"ltm_ebitda_company":797.8,"ltm_gp_company":1306.5,"ltm_pat":554,"q1fy27_rev":1226.4,"q1fy27_gp":326.2,"q1fy27_ebitda":201.2,"q1fy27_pat":142.2,"q1fy26_rev":1040.7,"q1fy26_gp":260.7,"q1fy26_ebitda":163.9,"q1fy26_pat":118.4,"q2fy27_rev":1351.7,"q2fy27_gp":353.1,"q2fy27_ebitda":214.3,"q2fy27_pat":146.4,"q2fy26_rev":1078.5,"q2fy26_gp":286.8,"q2fy26_ebitda":177.5,"q2fy26_pat":125.0,"platform_rev_fy26":394.9,"platform_gp_fy26":388.9,"platform_ebitda_fy26":303.9,"enterprise_rev_fy26":4022.9,"enterprise_gp_fy26":785.8,"platform_rev_q2fy27":104.7,"enterprise_rev_q2fy27":1247.0,"enterprise_gm_pct_q2fy27":20.0,"platform_gm_pct_q2fy27":98.6,"ott_share_rev_pct_q2fy27":36.2,"ott_share_rev_pct_fy25":23,"ott_share_rev_pct_fy24":15,"top19_customer_share_pct_9mfy26":46,"cohort_500mn_count_q2fy27":22,"cohort_500mn_rev_share_pct":43,"revenue_retention_pct":119,"dso_days_q2fy27":63,"fcf_fy26":477,"buyback_fy26":179.3,"dividends_paid_fy26":160.3,"interim_div_fy27_rs":6,"india_cpaas_share_vol_pct":35,"valuefirst_overseas_rev_2m_q2fy27":28.5,"promoter_pct":46.17,"fii_pct":8.08,"dii_pct":0.73,"public_pct":44.59,"screener_date":"2026-11-01 (30-Oct close)"},
  {"company":"Route Mobile","nse":"ROUTE","bse":"543228","fy":"FY26","revenue":4408,"revenue_prev":4576,"rev_growth_pct":-3.7,"gross_profit_company":1007.3,"gm_pct":22.9,"gross_profit_prev":950.9,"ebitda_adj_company":525.9,"ebitda_reported_company":537.3,"ebitda_op_screener":542,"opm_pct":12.3,"pat":257,"pat_adj_company":376.1,"exceptional_fy26":-135.9,"roce_pct":17.4,"roe_pct":12.6,"borrowings":39,"cash_company_sep26":1355.6,"net_cash_company":1317,"mcap":2764,"price":439,"pe":7.91,"pb":0.95,"div_yield_pct":2.51,"ev":1447,"ev_ebitda_ltm":2.8,"ev_gp_ltm":1.4,"ltm_revenue":4569,"ltm_ebitda_adj_company":510.1,"ltm_gp_company":1039.5,"ltm_pat":368,"q1fy27_rev":1151.5,"q1fy27_gp":240.4,"q1fy27_ebitda_adj":108.9,"q1fy27_pat":68.6,"q1fy26_rev":1050.8,"q1fy26_gp":225.1,"q1fy26_ebitda_adj":115.4,"q1fy26_pat":58.8,"q2fy27_rev":1179.7,"q2fy27_gp":264.0,"q2fy27_ebitda_adj":118.4,"q2fy27_pat":82.6,"q2fy26_rev":1119.4,"q2fy26_gp":247.1,"q2fy26_ebitda_adj":133.3,"q2fy26_pat":-18.8,"q2fy26_pat_adj":100.4,"txns_bn_fy26":174.9,"txns_bn_fy25":155.8,"txns_bn_q2fy27":47.6,"gp_per_txn_paise_q2fy27":5.55,"gp_per_txn_paise_fy26":5.76,"rev_per_txn_paise_q2fy27":24.8,"new_products_rev_fy26":352.6,"new_products_rev_q2fy27":128.4,"top10_share_pct_h1fy27":42,"top5_share_pct_h1fy27":32,"top50_share_pct_h1fy27":75,"nrr_pct":105,"india_termination_share_pct_h1fy27":35,"vendor_advance_h1fy27":116.8,"cfo_h1fy27":33.3,"heltar_consideration":33.7,"fy27_guide_adj_ebitda_margin_pct":12,"dividend_fy26_rs":11,"dividend_fy27_guide_rs":16.5,"promoter_proximus_pct":74.85,"fii_pct":1.65,"dii_pct":2.20,"public_pct":21.30,"screener_date":"2026-11-01 (30-Oct close)"}
]
```

## 2.4 Conflicts and gaps (company level)
1. **Tanla:**
   - Cash ₹1,447 Cr (company, incl. FDs >12 months) vs CARE's "~₹859 Cr cash and bank (Dec-25)" vs screener investments ₹121 Cr. Use the company figure; note that it includes ₹58 Cr restricted cash.
   - Platform gross margin 98.5% (company) vs "~90%" (primer).
   - Karix 2018 [K] vs 2017 (primer).
   - ValueFirst overseas consideration not found.
   - Q2 "one-time campaigns" are not quantified.
   - Customers "3,200+" (company) vs "2,000+" (CARE).
2. **Route:**
   - FY26 PAT driver: exceptional vendor-advance write-off (company/press) vs "higher tax charge" (primer).
   - Dividend: FY26 actual ₹11 vs the primer's "raised to ₹16.5 (FY26)". ₹16.5 is the FY27 "sustainable" guide.
   - Clients 3,100+ (FY26 deck) vs 2,400+ "active billable" (Q2 deck).
   - Open-offer peak 83.11% (screener) vs 82.70% (primer).
   - Chart-read geographic/vertical mix (±2 pts).
   - The 1st interim FY27 dividend amount was not read.
   - Vendor identity (FY26 write-off; H1 FY27 advance) not disclosed.
   - Q1 FY27 board date not read (Jul-2026).

---

# PART 3 — COMPANY-KPI APPENDIX

## 3.1 Summary grid (both members; ₹ Cr; screener consolidated 1-Nov-26 unless noted; company GP/EBITDA where marked)

| Company | FY26 rev | YoY % | OP (screener) | OPM % | PAT | GP (co.) | GM % | Q2 FY27 rev | Q2 YoY % | Q2 OPM % (screener) | Q2 PAT | M-cap | % of group m-cap | P/E | EV/EBITDA (LTM, co.) | Volume / KPI (latest) | Native KPI (latest) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Tanla Platforms | 4,418 | +9.7 | 726 | 16.4 | 509 | 1,175 | 26.6 | 1,352 | +25.4 (screener 1,352 vs 1,078) | 15.8 (214) | 146 | 8,318 | 75.1 | 15.0 | ~8.7× | OTT 36.2% of revenue | Platform GM 98.6%; EBITDA/GP 60.7% |
| Route Mobile | 4,408 | −3.7 | 542 | 12.3 | 257 (adj. 376) | 1,007 | 22.9 | 1,180 | +5.4 (screener 1,180 vs 1,119) | 9.7 (115) | 83 (prior yr −19) | 2,764 | 24.9 | 7.91 | ~2.8× (adj.) | 47.6 bn txns (Q2) | GP/txn 5.55p; Top-10 42% |
| **Total (2)** | **8,826** | **+2.6** | **1,268** | **14.4** | **766 (885 ex-exc.)** | **2,182** | **24.7** | **2,531** | **+15.2** | **13.0 (329)** | **229 (prior yr 106)** | **11,082** | 100 | **12.0× TTM (11,082 ÷ 922)** | **~6.4×** | — | — |

Notes:
- FY25 bases: screener consolidated (Tanla ₹4,028 Cr; Route ₹4,576 Cr). Q2 FY26 bases: screener (Tanla ₹1,078 Cr; Route ₹1,119 Cr).
- GP is company-reported (screener does not show it): Tanla ₹11,747 mn; Route ₹10,073 mn.
- Route's FY26 PAT includes the ₹135.9 Cr pre-tax (₹119.2 Cr post-tax) exceptional. "Ex-exc." adds back ₹119.2 Cr [V company: ₹1,358.7 mn − ₹166.9 mn tax].
- EV/EBITDA uses company cash and company LTM EBITDA (Tanla reported; Route adjusted) — see §3.2(c).

## 3.2 Aggregates

All aggregates are **straight sums of the company rows on one basis**: screener consolidated FY rows; screener quarterly rows for "OP basis"; company-reported GP; m-cap 30-Oct-26. Ratios are ratios of the sums.

**(a) Annual (FY22–FY26, screener; GP company) [E]**

| FY | Rev Tanla | Rev Route | **Rev total** | YoY | OP total | OPM | PAT total | PAT margin | GP total (co.) | GM |
|---|---|---|---|---|---|---|---|---|---|---|
| FY22 | 3,206 | 2,002 | **5,208** | +39.0% | 922 | 17.7% | 709 | 13.6% | n/s | — |
| FY23 | 3,355 | 3,569 | **6,924** | +32.9% | 1,035 | 14.9% | 781 | 11.3% | n/s | — |
| FY24 | 3,928 | 4,023 | **7,951** | +14.8% | 1,249 | 15.7% | 937 | 11.8% | n/s | — |
| FY25 | 4,028 | 4,576 | **8,604** | +8.2% | 1,221 | 14.2% | 841 | 9.8% | 2,002 (1,051 [E] + 951) | 23.3% |
| FY26 | 4,418 | 4,408 | **8,826** | +2.6% | 1,268 | 14.4% | 766 | 8.7% | 2,182 (1,175 + 1,007) | 24.7% |
| TTM Sep-26 | 4,877 | 4,569 | **9,446** | — | 1,301 | 13.8% | 922 | 9.8% | 2,346 (1,307 + 1,040) | 24.8% |

- **FY22→FY26: revenue CAGR +14.1%, OP CAGR +8.3%, PAT CAGR +1.9%** [E]. Profit stalled while revenue doubled: the take-rate squeeze.
- **FY26: GP +9.0% on revenue +2.6%.** OP ÷ GP = **58.1%** (1,268 ÷ 2,182).
- Tanla share of revenue: 50.1%; of GP 53.8%; of OP 57.3%; of PAT 66.4%; **of m-cap 75.1%**.

**(b) Quarterly (Q1 and Q2 FY27 vs prior year) [E]**

*Company basis (GP; Tanla EBITDA reported, Route adj.; PAT reported):*
| Period | Rev | Rev PY | YoY | GP | GP PY | YoY | GM / GM PY | EBITDA | EBITDA PY | YoY | EBITDA/GP | PAT | PAT PY | YoY |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Q1 FY27** | 2,377.9 | 2,091.5 | +13.7% | 566.6 | 485.8 | +16.6% | 23.8% / 23.2% | 310.1 | 279.3 | +11.0% | 54.7% | 210.8 | 177.2 | +19.0% |
| **Q2 FY27** | 2,531.4 | 2,197.9 | +15.2% | 617.1 | 533.9 | +15.6% | 24.4% / 24.3% | 332.7 | 310.8 | +7.0% | 53.9% | 229.0 | 106.2 | +116% (ex-exc. PY 225.4: +1.6%) |
| **H1 FY27** | 4,909.3 | 4,289.4 | +14.5% | 1,183.6 | 1,019.7 | +16.1% | 24.1% / 23.8% | 642.8 | 590.1 | +8.9% | 54.3% | 439.7 | 283.5 | +55% (ex-exc. PY 402.7: +9.2%) |

*Screener OP basis (one basis for both):*
| Period | OP total | OP PY | YoY | OPM / OPM PY | PAT total | PAT PY |
|---|---|---|---|---|---|---|
| Q1 FY27 | 306 (201 + 105) | 258 (164 + 94) | +18.6% | 12.9% / 12.3% | 211 (142 + 69) | 177 (118 + 59) |
| Q2 FY27 | 329 (214 + 115) | 313 (177 + 136) | +5.1% | 13.0% / 14.2% | 229 (146 + 83) | 106 (125 − 19) |

- **Read:** combined revenue is growing ~15% and GP ~16%, but **combined EBITDA only ~7–11%**. Tanla accounts for **all** of the growth: Tanla Q2 EBITDA +₹36.8 Cr YoY vs Route −₹14.9 Cr.
- **Ex-Tanla the "sector" is shrinking at the EBITDA line.** The writer must show both companies separately.

**(c) Balance sheet and valuation (company cash, Sep-26) [E]**
- Company cash: Tanla ₹1,447.4 Cr + Route ₹1,355.6 Cr = **₹2,803 Cr (25.3% of combined m-cap)**.
- Debt/leases (screener): ₹75 Cr + ₹39 Cr = ₹114 Cr. **Net cash ₹2,689 Cr.**
- **Combined EV = 11,082 + 114 − 2,803 = ₹8,393 Cr.**
- LTM EBITDA (company): Tanla ₹797.8 Cr (Q3 FY26–Q2 FY27 reported) + Route ₹510.1 Cr (LTM per Q2 deck) = **₹1,307.9 Cr → EV/EBITDA 6.4×**.
- LTM GP: ₹1,306.5 Cr + ₹1,039.5 Cr = **₹2,346 Cr → EV/GP 3.6×**.
- Book value (Sep-26 screener): ₹2,722 Cr + ₹2,911 Cr = ₹5,633 Cr → **P/B 1.97×**. ROE on closing FY26 equity: 766 ÷ (2,488 + 2,770) = **14.6%** (16.8% ex-exceptional) [E].
- **Aggregate P/E:** 11,082 ÷ TTM PAT 922 = **12.0×**; ÷ FY26 PAT 766 = 14.5×; ÷ FY26 PAT ex-exceptional 885 = 12.5×.
- **Ex-cash P/E (TTM):** (11,082 − 2,689) ÷ (922 − ~150 post-tax treasury income [E]) ≈ **10.9×**.
- **Dividend flow (FY26):** Tanla ₹160.3 Cr paid + buyback ₹179.3 Cr; Route ~₹69 Cr (₹11/share × 6.30 Cr shares [E]). **Total ≈ ₹409 Cr returned = 53% of FY26 PAT** [E].

**(d) Ownership (Sep-26)**
- Promoter: simple average **60.5%** (Tanla 46.17%; Route 74.85%). M-cap-weighted 53.3% [E].
- FII: average 4.9% (8.08 / 1.65). DII: average 1.5% (0.73 / 2.20). **Both stocks are retail-held**: public 44.6% / 21.3%.
- Shareholder counts: 2.58 lakh + 1.56 lakh.

## 3.3 Reconciliation vs primers

| Company | Item | Primer | Screener / company (1-Nov-26) | Use |
|---|---|---|---|---|
| Tanla | FY26 revenue / GP / EBITDA / PAT | ~4,418 / ~1,175 / ~724 / ~509 | 4,418 / 1,175 / 724 (co.) or 726 (OP) / 509 | Same |
| Tanla | M-cap / P/E | ~₹7,700 Cr / ~14.5× (mid-2026) | **₹8,318 Cr / 15.0×** (₹627) | Screener |
| Tanla | Platform share of revenue / GP | ~10% / ~34% | 8.9% / 33.1% (FY26); 7.7% / 29.3% (Q2 FY27) | Company |
| Tanla | Platform gross margin | "~90%" | **98.5% (FY26); 98.6% (Q2 FY27)** | Company |
| Tanla | Enterprise gross margin | "~20%" | 19.5% (FY26); 20.0% (Q2 FY27) | Same |
| Tanla | OTT share | "share of enterprise revenue": FY24 ~15%, FY25 ~23%, 9M FY26 ~31% | Share of **total** revenue (CARE): 15 / 23 / 31%; **36.2% Q2 FY27** | Relabel; update |
| Tanla | Cash | ~₹1,144 Cr (FY26) | ₹1,143.6 Cr (Mar-26); **₹1,447.4 Cr (Sep-26)** | Company |
| Tanla | Borrowings | ~₹53 Cr | ₹53 Cr (Mar-26); ₹75 Cr (Sep-26) — lease liabilities | Same; label "leases" |
| Tanla | Promoter | ~46% | 46.17% | Same |
| Tanla | Karix acquisition | 2017 | 2018 [K] | Verify |
| Tanla | Wisely launch | 2021 | 2021 (CARE) | Same |
| Tanla | ValueFirst | "2023 acquires ValueFirst (from Twilio)" | India: 3-Jul-2023, $45.5 mn; **overseas business acquired Q2 FY27 (₹28.5 Cr revenue in 2 months)** | Add |
| Tanla | Q1/Q2 FY27 | not covered | Q2: revenue +25.3%, GP +23.1%, EBITDA +20.8%, PAT +17.1%; Platforms +6.4% | Company |
| Tanla | Concentration | not quantified | 19 customers = 41% (FY25), 46% (9M FY26) [CARE]; 22 customers >₹500 mn = 43% | Add |
| Tanla | Rivals table | "Route Mobile / Kaleyra … now part of the Proximus/Kaleyra combination" | **Wrong:** Kaleyra → Tata Communications (2023); Route → Proximus (2024) | Fix |
| Tanla | Trubloq share | ~62% (approx.) | not verified; CARE: ~35% CPaaS by volume (different metric) | Flag |
| Route | FY26 revenue / GP / adj. EBITDA / PAT | 4,408 / 1,007 / ~526 / ~257 | Same (adj. EBITDA ₹525.9 Cr) | Same |
| Route | PAT decline reason | "higher tax charge and one-offs" | **₹135.87 Cr exceptional vendor-advance write-off (Q2 FY26)**; adj. PAT +6.7% | Company |
| Route | Dividend | "raised to ₹16.5/share" (FY26), "3%+ yield" | **FY26 actual ₹11/share** (yield 2.51%); ₹16.5 is the **FY27 guide** | Company |
| Route | M-cap / P/E | ~₹3,190 Cr / ~9–12× (Sep-26) | **₹2,764 Cr / 7.91×** (₹439) | Screener |
| Route | Promoter | ~74.8% | 74.85% | Same |
| Route | Open-offer peak | 82.70% | 83.11% (Jun-24 screener) | Note both |
| Route | Clients | 3,100+ | 3,100+ (FY26 deck); "2,400+ active billable" (Q2 FY27 deck) | Note definition |
| Route | FY26 operating cash flow | ₹581 Cr (~110% of adj. EBITDA) | ₹581 Cr (screener) ✓; **H1 FY27 CFO ₹33 Cr (15%) after a ₹116.8 Cr vendor advance** | Add |
| Route | Q1/Q2 FY27 | Q1 PAT ~₹69 Cr only | Q2: revenue ₹1,180 Cr (+5.4%), GM 22.4%, adj. EBITDA 10.0%, PAT ₹82.6 Cr | Company |
| Route | Chairman/leadership | "leadership churn at Proximus level" | Chairman **Seckin Arikan** (CEO Proximus Global); MD Rajdip Gupta; CEO Tushar Agnihotri; Group CFO Raj Gill | Add |
| Route | New products | ~₹353 Cr FY26 (+11.3%), ~8% | ₹352.6 Cr ✓; Q2 FY27 ₹128.4 Cr (+36.7%) | Add |
| Route | Peer revenues | Twilio ~$4.5 bn, Sinch ~$3.0 bn, Infobip ~$1.7 bn | Twilio FY26 guide ~+20% → ~$6 bn [E from Q3 $1.56 bn]; **Infobip 2025 $2.34 bn** [V-snip]; Sinch ~SEK 27 bn [E] | Update |
| Route | Masivian cyber incident; Heltar | not mentioned | Jun-2026 incident; Heltar ₹33.7 Cr (Jul-26) | Add |

## 3.4 Primer issues (format as primer-issues.md)

### From CPaaS & Enterprise Messaging research (2026-11-01, cpaas-industry.md §3.4)

- **tanla-platforms.html — Q1/Q2 FY27 omitted (refreshed 14-Aug):** add Q2 FY27 (27-Oct-2026):
  - Revenue ₹1,352 Cr (+25.3% YoY, the sixth straight quarter of acceleration); GP ₹353 Cr (+23.1%, 26.1% GM); EBITDA ₹214 Cr (+20.8%, 15.9%); PAT ₹146 Cr (+17.1%); FCF ₹232 Cr (158% of PAT).
  - Cash ₹1,447 Cr; ₹6 interim dividend.
  - WhatsApp volumes doubled; OTT 36.2% of revenue; RCS repricing a "partial offset".
  - Platforms only +6.4% (Consent framework delay).
  - ValueFirst overseas acquired (₹28.5 Cr revenue in two months; lower profitability).
- **tanla-platforms.html — platform gross margin understated:** the "~90%" platform margin and "a rupee of platform revenue retains something like 90 paise" should be **~98.5%** (FY26 platform GP ₹3,889 mn on ₹3,949 mn revenue). The "four-and-a-half rupees of pipe sales" ratio becomes ~5× (98.5 ÷ 19.5).
- **tanla-platforms.html — OTT label:** "Contribution of OTT channels … to **enterprise** revenue" (15% / 23% / 31%) — CARE gives these as shares of **total** revenue. Relabel, and add Q2 FY27 36.2%.
- **tanla-platforms.html — rivals table error:** "Route Mobile / Kaleyra … (now part of the Proximus/Kaleyra combination)" is wrong. **Kaleyra was acquired by Tata Communications (2023); Route Mobile by Proximus (2024).** They are separate.
- **tanla-platforms.html — timeline:**
  - Karix acquisition dated **2017**; my recollection is **2018** [K — verify against Tanla's FY19 annual report].
  - Add ValueFirst overseas (2026).
  - The "1995 incorporated" vs company "founded in 1999" — show both.
- **tanla-platforms.html — valuation stale:** m-cap ~₹7,700 Cr → **₹8,318 Cr**; P/E ~14.5× → **15.0×**; near the 52-week high (₹657).
- **tanla-platforms.html — concentration missing:** add CARE's **19 customers = 41% (FY25) / 46% (9M FY26)** and the company cohort data (22 customers >₹500 mn = ~43% of revenue).
- **tanla-platforms.html — unverified figures to caveat:** "~62% of India's A2P SMS processed through Trubloq"; the platform split "Trubloq ~50% / Wisely ~30% / other ~20%"; "Meta's WhatsApp incentive withdrawal" (mechanism not verified); promoter split (Uday ~23%, Tanuja ~16%).
- **tanla-platforms.html — borrowings label:** "Gross borrowings ~₹53 Cr" are **lease liabilities** (Ind AS 116), not debt. Tanla has zero bank debt.
- **tanla-platforms.html — regulation section thin:** add the 2024–26 TRAI chain:
  - URL whitelisting (Oct-24); traceability (Dec-24); Feb-2025 TCCCPR amendment (140/1600 series; penalties).
  - DoT international-SMS OM (19-Jun-2025).
  - **TCCCPR Third Amendment finalised 18-Sep-2026** (AI spam flagging; A2P calls at 5p/min; the consent register).
  - WhatsApp per-message pricing (1-Jul-2025) and the Jan-2026 marketing price increase.
- **route-mobile.html — FY26 PAT explanation wrong:** "PAT hit by a higher tax charge" / "driven mainly by a higher tax charge and below-EBITDA items" — the main driver was the **₹135.87 Cr exceptional write-off of advances to two vendors (an MNO and an SMS aggregator) in Q2 FY26**; Q2 FY26 reported PAT −₹18.8 Cr. FY26 adj. PAT ₹376 Cr (+6.7%).
- **route-mobile.html — dividend wrong year:** "dividend raised to ₹16.5/share" for FY26 and "3%+ yield" — the FY26 deck shows the **FY26 actual dividend was ₹11/share**, and **₹16.5 is the FY27 "sustainable" guidance**. Current yield is 2.51% at ₹439 (3.8% if ₹16.5 is paid).
- **route-mobile.html — Q2 FY27 and cash-flow red flag omitted (refreshed 4-Sep):**
  - Revenue ₹1,179.67 Cr (+5.4%); GM 22.4%; adj. EBITDA ₹118 Cr (10.0%, −11.1% YoY); PAT ₹82.55 Cr.
  - **H1 FY27 CFO only ₹33 Cr (15% of adj. EBITDA) after a ₹116.8 Cr "advance paid to vendor"**: the same instrument that produced FY26's write-off.
  - H1 adj. EBITDA margin 9.8% vs the FY27 guide of ~12%.
- **route-mobile.html — valuation stale:** m-cap ~₹3,190 Cr / ~₹503 → **₹2,764 Cr / ₹439**; P/E "~9–12×" → **7.9×**; **P/B 0.95**; cash ₹1,356 Cr = 49% of m-cap (EV ≈ ₹1,450 Cr ≈ 2.8× LTM adj. EBITDA).
- **route-mobile.html — leadership:** add **Seckin Arikan (CEO, Proximus Global) as Chairman**, Rajdip Gupta (MD), Tushar Agnihotri (CEO), Raj Gill (Group CFO).
- **route-mobile.html — omissions:**
  - **Masivian (Colombia) cyber incident (Jun-2026)**, with ₹8.3 Cr of remediation fees added back in H1 FY27 adj. EBITDA.
  - **Heltar acquisition** (₹33.7 Cr, closed 29-Jul-2026).
  - The Salesforce AgentExchange app.
  - The FY26 "reset" narrative (AIT clean-up; ILD in "structural, secular decline"; the loss of a US-HQ digital native and a global e-commerce client).
- **route-mobile.html — open-offer peak:** "82.70%" vs screener's 83.11% (Jun-24). State "about 83%".
- **route-mobile.html — peer revenues stale:** Twilio "~$4.5 bn" (Q3-2026 alone was $1.56 bn; FY26 run-rate ~$6 bn); Infobip "~$1.7 bn" (2025: $2.34 bn, first net profit); Sinch "~$3.0 bn" (verify in SEK).
- **route-mobile.html — clients:** "3,100+ active clients" vs the Q2 FY27 deck's "2,400+ active billable clients". Define, or use the latter.
- **route-mobile.html — FY26 per-message bridge:** 25.2p / 19.4p / 5.8p / 3.0p is correct arithmetic. Add Q2 FY27 (**24.8p / 19.2p / 5.55p / 2.49p**) and FY25 (29.4p revenue, 6.1p GP) to show the ILD-driven decline.
- **General (both):** neither primer mentions:
  - The **TCCCPR Third Amendment (18-Sep-2026)**: A2P calls at the commercial SMS rate with up to **5p/min termination**; AI spam flagging; the three-complaint threshold.
  - The **RCS repricing of 1-Sep-2026** (~6–7p → ~20–25p marketing).
  - The **DoT 19-Jun-2025 international-SMS definition**.
  - The rupee at ~₹94.9/$ (inflates Route's reported revenue and forex gains: Q4 FY26 ₹181.5 mn).

## 3.5 Key source URLs
- **Screener (1-Nov-2026):** https://www.screener.in/company/TANLA/consolidated/ · https://www.screener.in/company/ROUTE/consolidated/
- **Tanla Q2 FY27 (BSE, 27-Oct-2026):**
  - Shareholder letter: https://www.bseindia.com/xml-data/corpfiling/AttachLive/a2d1230c-3063-47be-86d4-df249fc40cb4.pdf
  - Press release: https://www.bseindia.com/xml-data/corpfiling/AttachLive/a8d6ea8f-694c-43d2-a614-6ed332db0c79.pdf
  - Investor presentation: https://www.bseindia.com/xml-data/corpfiling/AttachLive/2d48d122-1dfd-42d1-814b-25d80519b9af.pdf
- **CARE Ratings, Tanla (6-Apr-2026):** https://www.careratings.com/upload/CompanyFiles/PR/202604130442_Tanla_Platforms_Limited.pdf
- **Route Mobile:**
  - Q2 FY27 press release: https://www.bseindia.com/xml-data/corpfiling/AttachLive/5c56f30f-337a-424d-819d-8fdb734ae93f.pdf
  - Q2 FY27 investor presentation: https://www.bseindia.com/xml-data/corpfiling/AttachLive/075a5e13-890a-40fe-b82e-02e295d20fa0.pdf
  - FY26 strategy/earnings deck (8-May-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/654c6bef-ba9d-49cc-a2d4-24534844ceb5.pdf
- **Route Q2 FY26 exceptional:** https://www.whalesbook.com/news/English/tech/route-mobile-shares-tumble-after-reporting-net-loss-due-to-exceptional-vendor-write-offs/69097ee00c28418ab2d1a199 · https://arihantresearch.arihantcapital.com/Mumbai_Research/Route_Mobile_Ltd-Q2FY26_result_update.pdf · https://routemobile.com/press-release/q2fy26-revenue-from-operations-stands-at-rs-1119-42-crore-pat-stands-at-rs-18-83-crore/
- **Masivian incident:** https://www.investywise.com/?p=96627 · https://www.hendryadrian.com/?p=105367
- **Proximus Global structure:** https://www.rcrwireless.com/20250106/carriers/proximus-bics-telesign-route-mobile · https://www.business-standard.com/markets/capital-market-news/route-mobile-drops-after-mark-james-reid-to-leave-proximus-group-in-2026-125121700613_1.html
- **Tanla–ValueFirst (2023):** https://tele.net.in/tanla-platforms-acquires-valuefirst-business-of-twilio-for-rs-3-46-billion/ · https://tanla.com/newsroom/tanla-acquires-valuefirst-india-from-twilio
- **TRAI / DoT:**
  - TCCCPR Third Amendment 2026: https://www.medianama.com/2026/09/223-trai-truecaller-140-1600-calls-spam-rules/
  - Feb-2025 amendment (TRAI PR 11/2025): https://trai.gov.in/sites/default/files/2025-02/PR_No.11of2025.pdf (not opened) · https://securiti.ai/india-spam-rules-trai-latest-amendment/
  - DoT OM 19-Jun-2025: https://www.legal500.com/intelligence/india/media-telecoms-it-entertainment/dot-clarification-of-%27international%27-and-%27domestic%27-sms-key-takeaways-for-telcos-telemarketers-enterprises-and-otts
  - URL whitelisting: https://news.webindia123.com/news/Articles/Business/20241016/4246346.html
  - Traceability/headers: https://www.mondaq.com/india/telecoms-mobile-cable-communications/1525252/trai-issues-direction-to-curb-the-misuse-of-headers-and-content-templates
- **WhatsApp/RCS pricing:** https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing.md (as cited) · https://montymobile.com/blogs/whatsapp-business-api-pricing-in-india-inr-rates-gst-and-the-2026-currency-migration-deadline · https://www.moengage.com/blog/rcs-and-whatsapp-pricing-changes-2026/
- **Telco SMS pricing:** https://telecomtalk.info/bulk-sms-charges-hike-telemarketers-india/285682/ · https://www.messagecentral.com/blog/a2p-sms-pricing-india · https://www.mobilesquared.co.uk/wp-content/uploads/2025/06/REDACTED-VERSION_Global-A2P-SMS-report-1Q-2025-1.pdf
- **Peers:**
  - Twilio Q3-2026 8-K: https://www.sec.gov/Archives/edgar/data/0001447669/000144766926000106/twloq326ex991.htm
  - Sinch Q2-2026: https://mfn.se/all/a/sinch/sinch-reports-second-quarter-2026-results-accelerated-revenue-growth-led-by-americas-68da1158
  - Infobip 2025: https://en.lider.media/2026/04/29/infobip-first-time-in-the-black-achieved-net-profit-and-step-towards-ipo/
  - Tata Comm Q2 FY27: https://upstox.com/news/market-news/earnings/tata-communications-q2-fy-27-result-net-profit-rises-86-digital-platform-revenue-grows-18-6-yo-y/article-201912/
  - Juniper CPaaS: https://www.marketresearch.com/Juniper-Research-v4315/Global-CPaaS-Full-Research-Suite-40941240
- **Market size (weak):** https://www.marketresearchfuture.com/reports/india-a2p-messaging-market-46174 · https://www.expertmarketresearch.com/reports/india-cpaas-market
- **Tanla compliance items:** https://www.whalesbook.com/corporate-news/English/tech/Tanla-Platforms-Pays-indian-rupee5-Lakh-Fine-Resolves-Compliance-Lapses-and-Board-Issues/6a03016c8b07706dac5833aa · https://www.investywise.com/?p=83798
- **Vonage India exit:** https://api.support.vonage.com/hc/en-us/articles/204017423

*Scratch notes and extracted PDFs: /tmp/cpaas-dossier/ (notes_main.md, notes_tanla_q2fy27_letter.txt, notes_route_q2fy27_ppt.txt, pdf/).*
