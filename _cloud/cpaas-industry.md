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

---

# PART 4 — DEEP-RESEARCH SUPPLEMENT (2026-11-01)

Second, primary-source pass on Parts 1–3. **Where Part 4 conflicts with Parts 1–3, Part 4 wins** (see §4.0). Everything tagged **[V]** here was fetched and read *in this session* from the URL named next to it. **[V-sec]** = a secondary page that reproduces a primary record verbatim (e.g. a Rajya Sabha written reply reproduced by a trade journal). **[V-snip]**, **[K]** and **[E]** keep their Part-1 meanings.

**Documents read in full or in the relevant sections this pass (local extracts in /tmp/cpaas-deep/pdf/):**
- **Tanla:** Q2 FY27 shareholder letter (25 pp, 27-Oct-2026); Q2 FY27 press release; Q2 FY27 and Q1 FY27 investor presentations; **Q4 FY26 earnings-call transcript (call 27-Apr-2026, filed 1-May-2026)**; **FY26 Integrated Annual Report (457 pp)**: contingent liabilities, KAMs, segment note, related parties, intangibles under development, workforce chapter; CARE rationale (6-Apr-2026).
- **Route:** Q2 FY27 press release (filed 28-Oct-2026 00:03 IST) and investor presentation (23 pp); FY26 strategy/earnings deck (35 pp, 8-May-2026); **Q4 FY26 call transcript (call 8-May-2026, filed 15-May-2026)**; **Q1 FY27 call transcript (call 24-Jul-2026, filed 29-Jul-2026)**. The FY26 annual report download was slow (BSE throttling); findings are in §4.2.2(e) to the extent read.
- **Industry/regulator/peers:** Meta WhatsApp pricing page and the INR/USD rate-card PDFs (effective 1-Oct-2026); Rajya Sabha written reply on UCC complaints (reproduced by Communications Today, 10-Feb-2026); TRAI PR 20 & 21 of 2026 (via MediaNama); Proximus Q2-2026 and Q3-2026 results releases; Proximus shareholder-structure page; Twilio and Bandwidth Q3-2026 8-Ks (SEC); screener.in consolidated pages for both members (re-pulled 1-Nov-2026).

**Transcript availability (important for the writer):**
- **Tanla:** the Q1 FY27 (Jul-2026) and Q2 FY27 (Oct-2026) call transcripts were **not filed / not linked** on screener or on tanla.com's results page as of 1-Nov-2026. The latest transcript available is **Q4 FY26 (27-Apr-2026)**. The Q2 FY27 shareholder letter (Tanla's main disclosure document, Q&A format) is used for the latest commentary. Tanla states in every letter: **"Tanla does not provide any guidance."**
- **Route:** the Q2 FY27 call (28-Oct-2026) has only an **audio recording** on BSE; no transcript yet. The latest transcript is **Q1 FY27 (24-Jul-2026)**, used below, with the Q4 FY26 strategy call (8-May-2026) for the full-year guidance.

---

## 4.0 SUPERSEDES — corrections to Parts 1–3 (writer: apply these)

| # | Where in Parts 1–3 | Old value / statement | **New value** | Source (fetched this session) |
|---|---|---|---|---|
| S1 | §B4, §2.1 "Reading", §5.1 | Tanla "Geography: **India ~90%+**"; "Tanla's ₹1,175 Cr GP is overwhelmingly India-earned" | **Tanla FY26 revenue by customer location: India ₹3,248.5 Cr (73.5%), Rest of world ₹1,169.2 Cr (26.5%)**; FY25 overseas 28.3%. Tanla is ~¾ India by billing location (overseas = global tech/OTT customers billed for ILD traffic into India plus ME/SEA). Use "India ~74% of revenue by customer location" | Tanla FY26 Integrated Report, consolidated Note 47(b) [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/3536807d-aebe-47aa-b316-02bae1d8f7e9.pdf |
| S2 | §5.1, §8, §G, §3.3, §3.4 (primer issue) | Karix acquisition "2018 [K]" vs primer "2017" — unresolved | **Karix acquired in FY2018-19** (Share Purchase Agreement with a Mauritius-resident seller "during FY 2018–19"). Write "2018 (FY19)". Primer's 2017 is wrong | Tanla FY26 AR, contingent-liability note (iv) [V] (URL as S1) |
| S3 | §7.2, §H8, §2.1 risks | "Tanla past SEBI / income-tax probes: not verified … My memory is of an income-tax search … [K-weak]" | **No SEBI order and no income-tax search is disclosed** in the FY26 AR's contingent liabilities, KAMs or legal notes, and no report of a search was found. What exists is a **₹46.90 Cr TDS demand** (order u/s 201(1)/(1A) dated 31-Mar-2026, AY2020-21) for not withholding tax on the **Karix purchase price paid to the non-resident seller**; the SPA carries a **seller indemnity**; Tanla is appealing; disclosed as a contingent liability. Present neutrally; drop the "probe" language | Tanla FY26 AR [V]; Reg-30 disclosure summarised by whalesbook (7-Apr-2026) [V-snip] |
| S4 | §H4, §0, §7.1, E10 | ₹0.8631 WhatsApp marketing rate dated 1-Jan-2026 [V-snip] with a vendor dating it Jul-2026 — conflict | **Meta's own INR rate card (effective 1-Oct-2026): India marketing ₹0.8631, utility ₹0.1150, authentication ₹0.1150, authentication-international ₹2.4971, service ₹0.1150 (after 1,000 free/month per number from 1-Oct-2026).** Meta's change-log lists **"1-Jan-2026 · India · Marketing · Higher"** and **no India change on 1-Jul-2026 or 1-Oct-2026** → the ₹0.8631 rate dates from **1-Jan-2026**. Conflict closed | Meta developer pricing page + rate-card PDF [V] https://developers.facebook.com/docs/whatsapp/pricing/ |
| S5 | §0, §7.1, E10 | Service and in-window utility WhatsApp messages "free" | **Free only until 30-Sep-2026.** From **1-Oct-2026** utility messages inside an open service window are charged, and service messages are free only for the first **1,000 per business number per month**, ₹0.1150 thereafter | Meta pricing page [V] |
| S6 | §0, §7.1, §5.3, E10, §B1 | RCS marketing "~6–7p → ~20–25p from 1-Sep-2026" (single vendor) | **Jio's new RCS business tariff from 1-Sep-2026: marketing ₹0.27–0.30, transactional/utility ₹0.25, OTP ₹0.11–0.16; previous flat ₹0.08–0.10** (Jio emails to businesses, reported by ET/Inc42, 9-Sep-2026). Airtel's RCS rate (Dec-2025 Google tie-up) ₹0.11/message with an 80:20 Airtel:Google split. Use "RCS repriced ~3× for marketing at Jio from 1-Sep-2026" | Inc42 [V-snip] https://inc42.com/buzz/jio-introduces-new-rcs-business-messaging-rates-for-iphone-users-in-india/ ; Tanla letter confirms "significant pricing changes effective September 2026" [V] |
| S7 | §7.1 table row "Feb-2025" / §H7 | "Total complaint counts … were not found (FLAG)" | **UCC complaints received by telcos in calendar 2025: 31.10 lakh** (UTM 26.02 lakh, RTM 5.08 lakh = 16.3%); monthly from 1.48 lakh (Jan-25) to a peak of **3.94 lakh (Aug-25)**, 3.34 lakh (Dec-25). **DLT: >3 lakh senders (PEs) and ~21,000 telemarketers registered**; **>7.5 crore SMS + calls blocked per day (Dec-2025 average)**; **₹153.8 Cr financial disincentives imposed on telcos**; ~21 lakh connections disconnected | Rajya Sabha written reply (Minister of Communications), reproduced by Communications Today 10-Feb-2026 [V-sec] https://www.communicationstoday.co.in/dot-and-trai-have-taken-widespread-action-for-curbing-spam-calls/ ; TRAI PR 20/21 of 2026 via MediaNama (">3.1 mn complaints in 2025"; 7.31 lakh notices to UTMs) [V-snip] |
| S8 | §7.1 row "30-Nov-2024 / ~11-Dec-2024", §H6 | Traceability: 1-Nov (Mondaq) vs 30-Nov direction / 11-Dec enforcement — conflict | **Traceability deadline path: 1-Nov-2024 (original) → 30-Nov-2024 → final PE-TM chain declaration deadline 10-Dec-2024; rejection of non-declared/mismatched chains from 11-Dec-2024** (TRAI partial revision of its 28-Oct-2024 direction, after COAI requests; >27,000 PEs had declared chains). Use "enforced 11-Dec-2024" | TRAI direction as reproduced by tele.net.in / voicendata / MSEI Circular 16445 [V-snip, three sources agree] |
| S9 | §2.4, §3.3 | Tanla FY26 closing cash "₹11,436 mn" / "₹1,143.6 Cr (Mar-26)" | **₹11,538 mn** (Q2 FY27 letter cash-flow statement, FY26 audited column: CCE ₹7,273 mn + liquid funds ₹255 mn + FDs/other bank ₹4,009 mn). The ₹11,436 mn figure is likely an older classification; use ₹11,538 mn (≈ ₹1,154 Cr) | Tanla Q2 FY27 letter p.15 [V] https://www.bseindia.com/xml-data/corpfiling/AttachLive/a2d1230c-3063-47be-86d4-df249fc40cb4.pdf |
| S10 | §2.4, §10 (Tanla cash ₹1,447 Cr vs CARE ₹859 Cr) | Open conflict | **Resolved:** ₹14,474 mn (Sep-26) = CCE ₹7,192 mn + liquid funds ₹1,209 mn + FDs/other bank balances (incl. >12-month FDs and ₹584 mn margin money) ₹6,073 mn. CARE's "cash and bank ~₹859 Cr (Dec-25)" excludes liquid funds and long FDs. Use company figure, note ₹58 Cr restricted | Tanla letter [V] |
| S11 | §2.2 Tanla KPIs ("Platforms GM 98.5% vs primer 90%") | Already flagged | **Confirmed again** and extended: Q4 FY26 call analyst quote "98.2%" (FY26); letter quarterly 98.3–98.7%. Primer's ~90% is wrong | Tanla Q4 FY26 transcript [V]; letter [V] |
| S12 | §2.2 Route, §3.3, §H "Route dividends" | "1st interim FY27 presumably ₹4 [E — verify]"; FY27 total "₹16.5" | **1st interim FY27 ₹4/share, record date 29-Jul-2026; 2nd interim ₹4/share, record date 2-Nov-2026 → ₹8 declared for H1 FY27.** The FY27 "sustainable" regular dividend of ₹16.5 "payable each quarter as usual" (Q4 FY26 call) implies ~₹4.125/qtr; at ₹4 × 4 the year would be ₹16, so the guide needs a slightly larger Q3/Q4 payout | Route Q4 FY26 transcript [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/ba821fc6-e7d0-4137-a0d5-db7932b4fa50.pdf ; ScanX/InvestyWise for the ₹4 + 29-Jul record date [V-snip]; screener for 2nd interim [V] |
| S13 | §2.4 "Route Q1 FY27 board date not read" | Gap | **Route Q1 FY27: board/results 23-Jul-2026 (the deck was "uploaded yesterday" per the call); earnings call Friday 24-Jul-2026; transcript filed 29-Jul-2026** | Route Q1 FY27 transcript cover letter [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/2a5b8fc8-740e-43c3-a802-59a9f329e6fe.pdf |
| S14 | §2.2 Route "Retention … NRR 105%" | Only the deck figure | **Two NRR figures:** management said on the Q1 FY27 call that **"net revenue retention stands at 98% for the year"** (one key customer impact); the Q2 deck shows **105% (H1 FY27 vs H1 FY26)**. Quote both with their bases | Route Q1 transcript [V]; Q2 deck [V] |
| S15 | §2.2 Route story, §0 | Q1 FY27 margin dip unexplained | **Q1 FY27 GM fell to 20.9% because of a "temporary disruption in traffic from select existing large high-margin customers" — a large *Indian* customer (India entity segment profit turned negative in Q1) — plus "multiple aggregator accounts", and, to a smaller extent, the Masiv (Colombia) security incident.** Management's GM range: **21.5–23%** | Route Q1 transcript [V] |
| S16 | §0, §2.2 Route guidance | "FY27 guidance … adj. EBITDA 'around 12%' [V FY26 PPT]"; "margin guide looks at risk" | Keep, but add: on 24-Jul-2026 the CFO said guidance is held "for now", "on track with the dividend", and on 12% "ideally we should not materially deviate". **Cash conversion guide: "75% to 100%" EBITDA→CFO for FY27** ("comfortable at around 75%") — H1 delivered 15% reported | Route Q1 transcript [V] |
| S17 | §5.1, §B3 (BICS/Telesign "could be a vendor") | "related-party/vendor identity … not disclosed" | **Route confirms the Proximus Global inter-company flow is the other way round as well:** "we charge Telesign and BICS when they send us that traffic … we charge a margin on top of our cost" (RPT agreements at arm's length, per-transaction). So BICS/Telesign are **customers** of Route for India/other termination; the vendor-advance counterparty is still **not named** (see §4.2.2(e)) | Route Q4 FY26 transcript [V] |
| S18 | §5.2, §H16 | Belgian state stake "~53.5% [K]" | **53.51% of shares (180,887,569 shares), 56.06% of voting rights**; treasury 4.55%; free float 41.94% (page dated "31/09/2026") | Proximus shareholder-structure page [V] https://proximus.com/investors/shareholder-structure.html |
| S19 | §10 "Proximus Global" row; §12 | "€2–2.5 bn international revenue by 2026 (earlier guide)"; Q3 results "~early Nov [K]" | **Proximus Q3-2026 published 30-Oct-2026: Proximus Global revenue €369 mn (−2.0%; −0.5% cc), direct margin €106 mn (+0.8%), EBITDA €35 mn (−8.1%); YTD EBITDA €98 mn; FY26 Global EBITDA guide raised to €125–135 mn** ("stabilizing CPaaS SMS"). Q2-2026: revenue €353 mn, EBITDA €29 mn (−34.9%). **No mention of Route's listing, delisting or any sale of Proximus Global/Telesign.** Annualised revenue ~€1.45 bn, so the old "€2–2.5 bn by 2026" target is dead | Proximus Q3-2026 release [V] https://www.proximus.com/news/2026/202610-financial-results-q3-2026.html ; Q2-2026 [V] https://www.proximus.com/news/2026/202607-financial-results-q2-2026.html |
| S20 | §10 Bandwidth row "[K — not re-fetched] ~$0.75 bn, GM 38–40%, EBITDA 11–12%" | [K] | **Bandwidth Q3-2026 (29-Oct-2026): revenue $234 mn (+22%); "cloud communications revenue" $158 mn (revenue less ~$76 mn pass-through messaging surcharges); non-GAAP GM 61%; adj. EBITDA $34.8 mn = 22% of cloud-comms revenue (≈15% of total); FY26 guide revenue $905–910 mn, adj. EBITDA $124–125 mn** | Bandwidth 8-K ex-99.1 [V] https://www.sec.gov/Archives/edgar/data/0001514416/000151441626000080/q320268kexh991.htm |
| S21 | §10 LINK row "[K] ~NOK 7 bn, ~25% GM, ~9–10%" | [K] | **LINK Mobility Q2-2026: revenue NOK 2,050 mn (+17%; +3% organic), GP NOK 492 mn (24.0%), adj. EBITDA NOK 272 mn (13.3%)**; Q3-2026 not yet published | LINK Q2-2026 release via inderes/MFN [V-snip] |
| S22 | §6 table, §9.4, §2.2 Tanla | Tanla "Digital Platforms" and "Enterprise" treated as audited segments | In the audited accounts Tanla reports **a single Ind AS 108 segment ("CPaaS service provider")**; the Platform/Enterprise split is a management (letter) disclosure, not an audited segment. Keep the numbers; label them "company-reported business lines" | Tanla FY26 AR Note 46 [V] |
| S23 | §4.1 "People: Tanla ~1,081 average employees" | One figure | Add: **permanent workforce 1,043 at 31-Mar-2026** (Innovation 321; GTM 206, +17.7%; 324 hires in FY26); average 1,081 in Q2 FY27 (incl. ValueFirst overseas). Route: **786 employees (505 India), ~800 "mark"** (CFO) | Tanla AR [V]; letter [V]; Route Q2 deck and Q1 transcript [V] |
| S24 | §2.2 Tanla capital returns | "FY26 buyback ₹1,793 mn (₹179 Cr)" | Keep the cash figure; add mechanics: **20,00,000 shares bought back; maximum size ₹17,500 lakh (₹175 Cr) → ₹875/share**; shares outstanding 13.46 Cr → 13.26 Cr. The ₹179 Cr cash includes costs/tax | Tanla FY26 AR (EPS note; buyback note) [V] |
| S25 | §7.1 "Background: DPDP" / §4.1 telco termination | "commercial A2P is not regulated"; "5p TRAI termination is the old P2P charge" | Add: TRAI already specifies a **deterrent termination charge on commercial SMS** (telcos describe it as **₹0.07**/SMS in Dec-2025 submissions); **Jio/Airtel/Vi asked TRAI (interconnection-norms review, Dec-2025) to raise it to ~₹0.12/SMS and to set ₹0.50/min on A2P calls**; TRAI's final 3rd amendment allowed only **up to 5p/min** on A2P calls. International SMS termination into India is **under forbearance** (telcos set it freely) | telecomlive 18-Dec-2025 [V-snip]; MediaNama Mar-2025 [V-snip] |
| S26 | §0 trap 3, §B3, §2.2 Route | FY26 write-off "of advances paid to two key vendors (a major MNO and an SMS aggregator)" [V-snip] | **₹135.87 Cr = ₹107.96 Cr (a subsidiary's ₹196.61 Cr prepayment for minimum-guaranteed SMS volumes, contract onerous since Mar-24 with ₹26.70 Cr provided then; SIAC partial award against Route on 18-Nov-2025; settlement 19-Feb-2026) + ₹27.91 Cr (advance to a messaging vendor that ceased operations)**. Neither vendor is a related party per the AR. The auditor added **two Emphasis-of-Matter paragraphs** on these notes | Route FY26 AR Note 33.4 + auditor's report [V] https://www.bseindia.com/xml-data/corpfiling/AttachHis/36290219-8fc9-49ec-bf79-8ac6a98f6216.pdf |
| S27 | §B3 "Proximus parent also owns BICS (a wholesale carrier that could be a vendor)"; §5.2 | Vendor/RPT identity "not disclosed" | **Route's FY26 sales to Telesign Corp were ₹658.63 Cr = 14.9% of consolidated revenue (FY25 ₹460.18 Cr, 10.1%)**; BICS ₹52.72 Cr. Purchases from BICS ₹44.94 Cr and Telesign ₹14.39 Cr. **A new ₹10.11 Cr "management support services" charge from Proximus Global/BICS/Telesign.** Telesign receivable ₹131.5 Cr. The Proximus group is Route's largest customer relationship (~16% of revenue) | Route FY26 AR Note 39 [V] |
| S28 | §2.0 peer table, §3.2 aggregates (Route FY26 PAT ₹257 Cr; P/E 7.9×) | PAT ₹257 Cr used as owners' earnings | **PAT attributable to owners ₹239.02 Cr** (NCI ₹17.92 Cr). EPS ₹37.94 is on the ₹239 Cr basis. Combined FY26 owners' PAT = 509 + 239 = **₹748 Cr** (not ₹766 Cr) | Route FY26 AR P&L [V] |
| S29 | §2.2 Route balance sheet "borrowings ₹39 Cr" | "Borrowings" | **"No outstanding debt as at 31 March 2026"** (₹440.96 Cr at Mar-25). Screener's ₹39–42 Cr = lease liabilities | Route FY26 AR Note 38 [V] |
| S30 | §2.2 Route management; §G | "Rajdipkumar Gupta (MD); Tushar Agnihotri (CEO)" without dates | **CEO succession: Gautam Badalia (to 17-Jul-2025) → Rajdip Gupta as MD & CEO (18-Jul-2025 to 9-Feb-2026) → Tushar Agnihotri (from 9-Feb-2026). Chair: Guillaume Boutin (to 17-Apr-2025) → Mark Reid (non-exec, left board 22-Jan-2026) → Seckin Arikan (Chairman from 22-Jan-2026)** | Route FY26 AR Note 39 KMP list [V] |
| S31 | §2.2 Route "Geography … FY26 by termination India ~41%" | Chart-read | Add the audited **billing-entity split FY26: UK ₹1,289 Cr (29%), India ₹851 Cr (19%), Malta ₹658 Cr, USA ₹617 Cr, Dubai ₹494 Cr, others ₹499 Cr**. UK-entity revenue fell 23.5% (ILD loss). India-entity segment result ₹69 Cr (vs ₹112 Cr FY25) of a group ₹446 Cr | Route FY26 AR Notes 44–45 [V] |
| S32 | §5.2, §B3 Route "vendor advances" | "₹135.9 Cr written off; another ₹116.8 Cr paid" | Add the stock: **advances to suppliers ₹154.6 Cr at 31-Mar-2026 (₹420.4 Cr at 31-Mar-2025)**; with H1 FY27's ₹116.8 Cr, likely ~₹250–270 Cr at Sep-26 [E] | Route FY26 AR Notes 5/14 [V]; Q2 deck [V] |

**Unchanged after checking (no supersede needed):** Tanla Q2 FY27 revenue/GP/EBITDA/PAT, OTT 36.2%, Platform +6.4%, ₹6 dividend; Route Q2 FY27 revenue ₹1,179.67 Cr, PAT ₹82.55 Cr, adj. EBITDA ₹1,184.2 mn, vendor advance ₹1,168.3 mn; Route promoter path (83.11% Jun-24); screener 5-year rows for both; Twilio Q3-2026 figures — all re-verified [V].

---

## 4.1 VERIFICATION TABLE — the 40 figures the writer will lean on

Key to "Primary?": **P** = fetched this session from the issuer/regulator/platform owner's own document (counts as [V]-primary); **S** = fetched this session but from a secondary page reproducing or reporting the primary (V-sec / V-snip). "Agrees?" compares with Parts 1–3.

URL short-codes (full URLs in §4.6):
- **TL** = Tanla Q2 FY27 shareholder letter (BSE a2d1230c…); **TAR** = Tanla FY26 Integrated Report (BSE 3536807d…); **TT4** = Tanla Q4 FY26 transcript (BSE d8d4867b…); **TPPT** = Tanla Q2 FY27 investor presentation (BSE 2d48d122…)
- **RPR** = Route Q2 FY27 press release (BSE 5c56f30f…); **RPPT** = Route Q2 FY27 presentation (BSE 075a5e13…); **RF26** = Route FY26 deck (BSE 654c6bef…); **RT4** = Route Q4 FY26 transcript (BSE ba821fc6…); **RT1** = Route Q1 FY27 transcript (BSE 2a5b8fc8…)
- **SCR-T / SCR-R** = screener.in consolidated pages (Tanla / Route), pulled 1-Nov-2026
- **META** = developers.facebook.com/docs/whatsapp/pricing + INR rate-card PDF (effective 1-Oct-2026); **PXQ3 / PXQ2 / PXSH** = Proximus Q3-26 / Q2-26 releases / shareholder page; **TWLO / BAND** = SEC 8-K ex-99.1 (Q3-2026); **RS** = Rajya Sabha reply via Communications Today; **INC42** = Jio RCS tariff report

| # | Figure | Value | Source | Primary? | Agrees with Parts 1–3? |
|---|---|---|---|---|---|
| 1 | Tanla Q2 FY27 revenue | ₹13,517 mn (+25.3% YoY, +10.2% QoQ); screener ₹1,352 Cr | TL p.4/11; SCR-T | P (two sources) | Yes |
| 2 | Tanla Q2 FY27 gross profit / GM | ₹3,531 mn (income statement ₹3,530 mn) / 26.1% (−48 bps QoQ, "change in revenue mix") | TL | P | Yes |
| 3 | Tanla Q2 FY27 EBITDA | ₹2,143 mn, 15.9%; EBITDA/GP 60.7% | TL; TPPT | P | Yes |
| 4 | Tanla Q2 FY27 PAT | ₹1,464 mn (+17.1%); screener ₹146 Cr | TL; SCR-T | P (two sources) | Yes |
| 5 | Tanla QoQ growth split | 10.2% = 7.9 pts existing business + 2.3 pts inorganic (ValueFirst overseas ₹285 mn in two months) + "one-time campaigns" (unquantified) | TL p.5/9 | P | Yes |
| 6 | Tanla OTT share of revenue | 36.2% (Q2 FY27); "WhatsApp >80–90% of OTT" (ED, Apr-26 call); OTT share was flat at 31–32% for the four FY26 quarters | TL; TT4 | P | Yes; adds the FY26 plateau |
| 7 | Tanla Digital Platforms growth | +6.4% YoY (₹1,047 mn), "below our expectations", consent-framework delay | TL | P | Yes |
| 8 | Tanla Platforms GM | 98.6% (Q2 FY27); 98.2–98.5% FY26 | TL; TPPT; TT4 | P | Yes (primer 90% wrong) |
| 9 | Tanla cash (Sep-26) | ₹14,474 mn = CCE 7,192 + liquid funds 1,209 + FDs/other bank 6,073 | TL p.15 | P | Yes; decomposition new |
| 10 | Tanla cash (Mar-26) | **₹11,538 mn** | TL p.15 (FY26 audited column) | P | **No** (Part 3: ₹11,436 mn) → S9 |
| 11 | Tanla FY26 revenue (audited) | ₹4,41,770.64 lakh = ₹4,417.7 Cr (+9.7%); screener ₹4,418 Cr | TAR Note 47; SCR-T | P (two sources) | Yes |
| 12 | Tanla FY26 PAT (audited) | ₹50,914.58 lakh = ₹509.1 Cr; basic EPS ₹38.36 | TAR Note 49; SCR-T | P | Yes |
| 13 | Tanla revenue by customer location FY26 | India 73.5% / overseas 26.5% (FY25 overseas 28.3%) | TAR Note 47(b) | P | **No** (Part 1: "India ~90%+") → S1 |
| 14 | Karix acquisition date | SPA in FY2018-19 | TAR contingent-liability note | P | Resolves 2017/2018 → S2 |
| 15 | Tanla TDS demand | ₹4,690.23 lakh (₹46.9 Cr), order dated 31-Mar-2026, seller indemnity, under appeal | TAR | P | New → S3 |
| 16 | Tanla contingent liabilities (Mar-26) | Bank guarantees ₹189.3 Cr (₹168.9 Cr Mar-25); corporate guarantee for a subsidiary ₹200 Cr (₹159 Cr); claims not acknowledged ₹63.6 Cr (₹16.8 Cr) | TAR | P | New |
| 17 | Tanla FY26 buyback | 20,00,000 shares; max ₹175 Cr (₹875/share); cash outflow ₹1,793 mn incl. costs/tax | TAR; TL | P | Yes; mechanics new |
| 18 | Tanla capitalised development FY26 | ₹52.1 Cr added to intangibles under development (FY25 ₹69.4 Cr); IAUD closing ₹49.7 Cr | TAR Note 6 | P | Refines CARE's "₹15–20 Cr/qtr" |
| 19 | Tanla workforce | 1,043 permanent (31-Mar-26); 1,081 average (Q2 FY27) | TAR; TL | P | Yes; adds year-end count |
| 20 | Tanla valuation | ₹627; m-cap ₹8,318 Cr; P/E 15.0; ROCE 26.3%; ROE 21.4%; 52-wk ₹366–657 | SCR-T | P (screener) | Yes |
| 21 | Route Q2 FY27 revenue | ₹1,179.67 Cr (+5.4% YoY; +2.4% QoQ); screener ₹1,180 Cr | RPR; SCR-R | P (two sources) | Yes |
| 22 | Route Q2 FY27 PBT / PAT | PBT ₹100.93 Cr (PBT margin 8.56%); PAT ₹82.55 Cr vs (₹18.83 Cr) | RPR | P | Yes |
| 23 | Route Q2 FY27 GM / adj. EBITDA | 22.4% / ₹1,184.2 mn (10.0%) | RPPT | P | Yes |
| 24 | Route Q1 FY27 KPIs | Revenue ₹11,515 mn (+9.6% YoY); GP ₹2,404 mn (20.9%); adj. EBITDA ₹1,089 mn (9.5%); adj. PAT ₹686 mn | RT1 | P | Yes |
| 25 | Route FY26 EBITDA bridge | Reported EBITDA ₹5,372.5 mn − capitalised IAUD ₹123.5 mn + ESOP ₹10.1 mn = adj. ₹5,259.1 mn (11.9%) | RF26 slide 31 | P | Yes |
| 26 | Route FY26 PAT bridge | Reported ₹2,569.4 mn + exceptional ₹1,358.7 mn − tax ₹166.9 mn = adj. ₹3,761.2 mn; FY25 exceptional ₹184.5 mn | RF26 | P | Yes; FY25 exceptional new |
| 27 | Route H1 FY27 vendor advance | ₹1,168.3 mn "advance paid to vendor for services which will be availed in the subsequent period" | RPPT slide 19 | P | Yes |
| 28 | Route FY27 guidance | Revenue "mid to high single digits"; adj. EBITDA "around 12%"; dividend ₹11 → "sustainable" ₹16.5/share, "payable each quarter" | RT4; RF26 | P | Yes |
| 29 | Route guidance status (Jul-26) | "We will hold that for now"; GM band 21.5–23%; CFO conversion 75–100% | RT1 | P | New |
| 30 | Route Q1 FY27 dates | Deck/results 23-Jul-2026; call 24-Jul-2026; transcript filed 29-Jul-2026 | RT1 cover letter | P | Fills gap → S13 |
| 31 | Route FY27 dividends declared | 1st interim ₹4 (record 29-Jul-26); 2nd interim ₹4 (record 2-Nov-26) | ScanX/InvestyWise; SCR-R | S (1st) / P (2nd) | Fills gap → S12 |
| 32 | Route promoter holding | 74.85% (Sep-26); peak 83.11% (Jun-24) | SCR-R | P (screener) | Yes |
| 33 | Route headcount | 786 (505 India); 63 joiners / 60 leavers in Q2 FY27 | RPPT | P | Yes; churn new |
| 34 | Proximus Global Q3-2026 | Revenue €369 mn (−2.0%); direct margin €106 mn (+0.8%); EBITDA €35 mn (−8.1%); FY26 EBITDA guide €125–135 mn | PXQ3 | P | **No** (Part 1 used an obsolete "€2–2.5 bn by 2026" target) → S19 |
| 35 | Belgian state's stake in Proximus | 53.51% of shares, 56.06% of votes | PXSH | P | Yes (was [K]) |
| 36 | WhatsApp India rates (Meta) | Marketing ₹0.8631; utility ₹0.1150; authentication ₹0.1150; auth-international ₹2.4971; utility tier rates ₹0.1081 (25–50 mn/month), ₹0.1012 (50–100 mn), ₹0.0943 (100–200 mn) | META | P | Yes on values; date fixed (1-Jan-2026) → S4 |
| 37 | WhatsApp rule changes | Per-message pricing from 1-Jul-2025; free in-window utility ended 1-Oct-2026; INR billing deadline 31-Dec-2026 (non-INR accounts stop delivering 1-Jan-2027) | META | P | Partly new → S5 |
| 38 | UCC complaints, calendar 2025 | 31.10 lakh (RTM 16.3%); peak 3.94 lakh in Aug-25; DLT: >3 lakh senders, ~21,000 TMs; >7.5 crore messages/calls blocked per day (Dec-25) | RS (V-sec) + TRAI PR 20/21 of 2026 via MediaNama (">3.1 mn") | S (two independent secondary routes agree) | New → S7 |
| 39 | Jio RCS repricing (1-Sep-2026) | Marketing ₹0.27–0.30; utility ₹0.25; OTP ₹0.11–0.16; previously flat ₹0.08–0.10 | INC42 (citing ET and Jio's emails) | S | **Partly no** (Part 1: 6–7p → 20–25p) → S6 |
| 40 | Global peers, Q3-2026 | Twilio: $1.56 bn, +20% (+16% organic), NG GM 49%, NG op margin 21%, DBNE 114%. Bandwidth: $234 mn, NG GM 61%, adj. EBITDA 22% of revenue net of pass-through | TWLO; BAND | P | Twilio yes; Bandwidth replaces [K] → S20 |

**Count: 37 of the 40 rows are [V]-primary** (P). The three non-primary rows are #31 (the 1st-interim amount; the 2nd interim is primary), #38 (complaints; a parliamentary reply reproduced by a trade journal) and #39 (Jio RCS tariff, reported from Jio's emails). The LINK figures in S21 are also secondary but are not one of the 40. Where a row has two sources (#1, #4, #11, #21, #38) they agree.

**Conflicts and which source wins:**
- **Tanla FY26 cash (#10):** the letter's audited FY26 column (₹11,538 mn) beats the earlier ₹11,436 mn. It is the company's own audited cash-flow statement.
- **Route NRR:** 98% (Q1 call, spoken) vs 105% (Q2 deck, H1 vs H1). Both are management figures on different bases. Use the deck figure for H1 and quote the call figure as "dipped to 98% on one large customer in Q1".
- **RCS prior price:** Jio's emails (₹0.08–0.10 before) beat the MoEngage blog (6–7p). Both sources agree the new marketing price is in the 20–30p range.
- **2025 complaints:** the Rajya Sabha reply gives the monthly table (sum 31.10 lakh); TRAI's PR via MediaNama says ">3.1 mn". They agree.

---

## 4.2 PER-COMPANY DEEP DIVES

### 4.2.1 Tanla Platforms (TANLA · BSE 532790)

#### (a) Management-commentary digest (paraphrased; source and date on each line)

*Basis: Q4 FY26 call of 27-Apr-2026 (the latest transcript filed) + the Q2 FY27 shareholder letter of 27-Oct-2026. Tanla gives no numeric guidance ("Tanla does not provide any guidance", every letter; CFO on the call: "we don't actually issue any forward-looking statements").*

**Growth ambition (TT4, 27-Apr-2026)**
- ED Deepak Goyal sees **CPaaS industry revenue growth of about 8–10% a year** and expects Tanla to gain share and grow **"definitely more than 10% a year"**. That is the nearest thing to a growth guide. H1 FY27 delivered +21.7% (+19% ex-ValueFirst overseas [E]).
- CEO Uday Reddy flagged **"one gigantic platform"** to be launched in Q1 FY27 (details withheld). No launch is identifiable in the Q2 letter's "Significant events" list. Treat it as unconfirmed.

**Margins (TT4; TL)**
- CFO Anubhav Batra: margins have become **"range bound"**. Gross margin has improved slightly; EBITDA margin is held down by **"conscious investments in GTM" and innovation**, which "will bear fruits in the coming quarters".
- **Q2 FY27 letter:** "improving operating leverage continues to be a priority". EBITDA growth was diluted by ValueFirst's international operations, "which currently operate at lower profitability levels". Indirect costs rose 26.9% YoY (existing business +21.3%), against GP +23.1%.

**Pricing and channels (TT4; TL)**
- **SMS:** volumes are growing faster than revenue because of **"pricing pressure"**, including from large banks and Government. Asked whether prices had bottomed, the ED said a telco price **"reset … is on the cards. When it will happen, I can't say."**
- **WhatsApp:** **>80–90% of OTT revenue.** Meta wants to shift traffic from marketing to utility messages. Marketing messages are "almost 10 times more expensive" than utility; Meta's own card confirms ₹0.8631 vs ₹0.1150 = 7.5×. So rising WhatsApp volumes do not translate one-for-one into revenue.
- **Why OTT share stalled at 31–32% through FY26:** the WhatsApp mix moved towards cheaper utility messages, and Meta is pushing into ~2 million SMEs that are served by small local tech providers rather than by Tanla.
- **Q2 FY27:** **WhatsApp volumes doubled QoQ and YoY.** "RCS was a partial offset to growth" after "significant pricing changes effective September 2026". Adoption at the higher price "will depend on delivering better engagement and conversion" (TL).

**Market structure (TT4)**
- **75–80% of Indian enterprise CPaaS spend comes from the top ~250 customers.** The other 15–20% comes from a tail of 50–60k enterprises. Tanla says it is present at ~80% of the top accounts and is competing for wallet share.
- New logos: **Reserve Bank of India** and **Bank of Baroda**. At one of the largest e-commerce companies, Tanla's wallet share is now >50% after adding OTT.
- **PSU banks are "a very good share" of volumes.** NIC (Government) is small.
- Meta and Google each named Tanla's subsidiaries **"Partner of the Year"** for India (FY26 AR: Karix and ValueFirst were Google Growth Partners of the Year 2025, and Karix won Meta's partner award).

**Platforms (TT4; TL)**
- Digital Platforms FY26 revenue was ~₹395 Cr, single-digit growth. Part of the segment is tied to channel volumes; **Wisely.ai** is growing faster.
- One large global telco (Indosat) was onboarded in FY26. Wisely ATP signed a **third bank, Bandhan Bank**, live in Mar-2026 (billed one month in Q4 FY26).
- **ATP pricing is per subscriber protected per month, not per message blocked.**
- **Q2 FY27:** Platforms grew only +6.4%, "below our expectations". The **"prolonged delay in the regulatory implementation of India's consent framework"** held back the Consent platform (TL).

**Capital allocation (TT4; TL)**
- **"Build versus buy"**; AI-company valuations are "skyrocketing".
- **ValueFirst International:** completion took ~3 years because approval was **"stuck at a RBI level because there are some old matters which had to be clarified"** (Apr-2026). Management was even evaluating "alternate" routes to consolidate. It closed in Q2 FY27, with consolidation from ~Aug-2026 (TL).
- **Dividend policy:** 30% of consolidated PAT. ₹6 interim dividend (₹796 mn) in Q2 FY27 (TL).

**Analyst Q&A points worth carrying (TT4)**
1. *"Why have margins fallen since FY22?"* — they are range-bound now; GTM investment.
2. *"OTT share flat for four quarters"* — mix shift to utility messages; WhatsApp is chasing SMEs.
3. *"Government/bank SMS pricing pressure"* — a telco-led price reset is possible, timing unknown.
4. *"Platform segment single-digit growth despite Wisely investment"* — channel-linked products are slow; Wisely is faster.
5. *"ATP revenue model"* — per subscriber per month.
6. *"ValueFirst International delay"* — RBI approval.
7. *"Platform pricing per subscriber (Indosat 100 mn subs)"* — not disclosed.

#### (b) Concall/letter KPI table (company, ₹ mn unless stated) [V TL, TPPT, TT4]

| KPI | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 | Q2 FY27 | Note |
|---|---|---|---|---|---|---|
| Revenue | 10,785 | 11,210 | 11,776 | 12,264 | 13,517 | Q2 incl. ₹285 mn ValueFirst overseas |
| Revenue growth YoY | 7.8% | 12.1% | 15.0% | 17.8% | 25.3% | YoY growth has accelerated every quarter since Q2 FY25 (−0.8%) |
| Platform revenue | 984 | 1,016 | 1,030 | 1,031 | 1,047 | +6.4% YoY |
| Platform GM | 98.6% | 98.4% | 98.3% | 98.5% | 98.6% | |
| Enterprise GM | 19.4% | 20.5% | 20.1% | 20.0% | 20.0% | |
| Blended GM | 26.6% | 27.6% | 27.0% | 26.6% | 26.1% | |
| EBITDA | 1,775 | 1,905 | 1,918 | 2,012 | 2,143 | |
| EBITDA ÷ GP | 61.9% | ~61.6% | ~60.4% | 61.7% | 60.7% | |
| Indirect cost % of revenue | ~10.1% | ~10.2% | ~10.3% | ~10% | ~10.2% | TPPT "maintained at ~10%" |
| OTT share of revenue | ~31–32% | ~31–32% | ~31–32% | n/d | 36.2% | TT4 for the FY26 plateau |
| Net revenue retention | n/d | n/d | n/d | n/d | 119% | TPPT |
| DSO (days) | 77 | n/d | 76 | 79 | 63 | |
| Average employees | 1,004 | n/d | n/d | n/d | 1,081 | 1,043 permanent at 31-Mar-26 (TAR) |
| Cash incl. FDs/liquid funds | 8,814 | 9,387 | 11,538 | 11,970 | 14,474 | Mar-26 per S9 |

*Q3/Q4 FY26 revenue = EBITDA ÷ the reported margin path; derived from the E4/E2 series [E within ±₹5 mn].*

#### (c) Five-year history (screener consolidated, ₹ Cr) [V SCR-T, re-pulled 1-Nov-2026; GP company]

| | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 | TTM Sep-26 |
|---|---|---|---|---|---|---|---|
| Revenue | 2,341 | 3,206 | 3,355 | 3,928 | 4,028 | 4,418 | 4,877 |
| YoY | +20% | +37% | +4.6% | +17.1% | +2.5% | +9.7% | — |
| Operating profit | 435 | 702 | 590 | 735 | 692 | 726 | 798 |
| OPM | 19% | 22% | 18% | 19% | 17% | 16% | 16% |
| Gross profit (company) | n/f | n/f | ~810 [E: 9M FY23 GP ₹6,075 mn annualised; BSE press release 20-Jan-2023] | n/f | ~1,051 [E] | 1,175 | 1,307 |
| Depreciation | 40 | 41 | 46 | 85 | 98 | 122 | 136 |
| PBT | 415 | 674 | 567 | 683 | 627 | 634 | 700 |
| PAT | 356 | 539 | 448 | 548 | 507 | 509 | 554 |
| EPS ₹ | 26.18 | 39.73 | 33.31 | 40.78 | 37.68 | 38.39 | 41.80 |
| ROCE | 52% | 59% | 38% | 38% | 29% | 26% | — |
| Debtor days | 58 | 64 | 62 | 78 | 76 | 82 | (63 company Q2 FY27) |
| CFO | 561 | 486 | 247 | 590 | 642 | 574 | — |
| FCF | 530 | 425 | 91 | 434 | 514 | 477 | — |

- **Read:** FY22 was the peak on every return measure. Since then revenue is +38% (FY22→FY26), OP +3%, PAT −6%, and ROCE has more than halved (59% → 26%). Depreciation tripled (₹41 Cr → ₹122 Cr) as the platform build and ValueFirst intangibles were capitalised.
- **FY23 is the true trough:** CFO ₹247 Cr; FCF ₹91 Cr.
- **FY26 debtor days (82, screener) vs company DSO (63 in Q2 FY27):** the improvement is recent. Use the company figure for the latest quarter and screener for the trend.

#### (d) Eight-quarter trend (screener consolidated, ₹ Cr; company GM/EBITDA alongside) [V SCR-T; V TL]

| Quarter | Q3 FY25 (Dec-24) | Q4 FY25 (Mar-25) | Q1 FY26 (Jun-25) | Q2 FY26 (Sep-25) | Q3 FY26 (Dec-25) | Q4 FY26 (Mar-26) | Q1 FY27 (Jun-26) | Q2 FY27 (Sep-26) |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,000 | 1,024 | 1,041 | 1,078 | 1,121 | 1,178 | 1,226 | 1,352 |
| YoY (company) | −0.2% | +1.9% | +3.8% | +7.8% | +12.1% | +15.0% | +17.8% | +25.3% |
| Operating profit | 163 | 163 | 164 | 177 | 191 | 192 | 201 | 214 |
| OPM | 16% | 16% | 16% | 16% | 17% | 16% | 16% | 16% |
| Company GM | 26.1% | 25.3% | 25.0% | 26.6% | 27.6% | 27.0% | 26.6% | 26.1% |
| Company EBITDA (₹ mn) | 1,634 | 1,635 | 1,639 | 1,775 | 1,905 | 1,918 | 2,012 | 2,143 |
| Depreciation | 25 | 27 | 27 | 30 | 32 | 33 | 33 | 37 |
| Tax % | 19% | 20% | 20% | 20% | 20% | 19% | 22% | 22% |
| PAT | 119 | 117 | 118 | 125 | 131 | 134 | 142 | 146 |
| EPS ₹ | 8.80 | 8.72 | 8.80 | 9.43 | 9.91 | 10.13 | 10.72 | 11.04 |

- **The pattern:** revenue +35% over eight quarters, OP +31%, PAT +23%. Depreciation (+48%) and a higher tax rate (19% → 22%) absorb part of the operating gain.
- **OPM has been flat at 16% throughout.** The re-acceleration is volume-led, not margin-led.

#### (e) Annual-report findings (FY26 Integrated Report, 457 pp) [V TAR]

1. **Audit:** auditor MSKA & Associates; opinion unmodified.
   - Two consolidated KAMs: **(i) revenue recognition** (complex IT systems, high data volumes, "changing pricing models"); **(ii) goodwill impairment** (goodwill = 7.09% of total assets and 10.63% of equity at 31-Mar-2026; no impairment).
2. **Segment:** a **single Ind AS 108 segment** ("CPaaS service provider").
   - **Revenue by customer location FY26: India ₹3,248.5 Cr (73.5%), Rest of world ₹1,169.2 Cr (26.5%).** FY25: India ₹2,887.9 Cr / overseas ₹1,139.9 Cr (28.3%).
   - Non-current assets: India ₹846.6 Cr; RoW ₹16.5 Cr.
   - *Note:* table (i) of Note 46 prints the FY25 India/RoW figures swapped; Note 47(b) has them the right way round. Use 47(b).
3. **Customer concentration:** consolidated concentration is not disclosed in the AR (CARE: 19 customers = 46% of 9M FY26).
   - **Standalone:** **2 customers each >10%, together >86% of the standalone company's revenue** (3 customers / 89% in FY25). The standalone entity is mainly the platform/holding company, so this describes the platform customers (telcos) and inter-company billing. **Do not present it as group concentration.**
4. **Related parties:** immaterial.
   - The only non-KMP related party is **Z-Axis Management Consultants and Strategic Advisors LLP** (an entity in which a director is a partner): ₹21 lakh of professional services in each of FY26 and FY25.
   - KMP remuneration ₹6.83 Cr (FY25 ₹7.22 Cr).
   - "No materially significant related party transactions … with its Promoters". **No royalty or brand fee.**
5. **Contingent liabilities (consolidated, 31-Mar-2026):**
   - **Bank guarantees ₹189.3 Cr** (to telcos/banks/PSUs as performance guarantees; ₹168.9 Cr a year earlier).
   - **Corporate guarantee on behalf of a subsidiary ₹200 Cr** (₹159 Cr).
   - **Claims not acknowledged as debt ₹63.6 Cr** (₹16.8 Cr). The jump is the **₹46.9 Cr TDS order under s.201 on the FY19 Karix purchase** (seller indemnity; appeal being filed).
   - Others: legacy service-tax (FY08–10, ₹1.9 Cr confirmed), CENVAT, GST ITC writs (Telangana HC; Madras HC ₹3.1 Cr), and a Karix s.40(a)(ia) disallowance (₹1.07 Cr demand).
   - An mGage India AY2013-14 Madras HC appeal by the department concerns disallowance of **₹37.2 Cr of carrier payments to foreign operators** (a disallowance amount, not a demand; tax impact not stated).
   - **No SEBI matter and no search/seizure is disclosed.**
6. **Capitalised development:** additions to intangibles under development **₹52.1 Cr in FY26** (₹69.4 Cr FY25); ₹87.0 Cr moved into finished intangibles; closing IAUD ₹49.7 Cr.
   - The capitalised amount includes "employee benefit expenses and professional consultancy charges". With FY26 EBITDA of ₹724 Cr, **capitalisation ≈ 7% of EBITDA** [E]. A Route-style "adj. EBITDA" that deducts it would be ~₹672 Cr (15.2% margin) [E].
7. **Buyback FY26:** 20 lakh shares at up to ₹875 (₹175 Cr). Shares 13.46 Cr → 13.26 Cr. Promoters did not tender, which is why their stake rose to 46.17%.
8. **Workforce:** 1,043 permanent employees in 7 offices (31-Mar-2026); 79.9% in STEM roles; Innovation 321 (+3.5%); GTM 206 (+17.7%); 324 hires in FY26.
9. **Scale claims (AR narrative; company claims, not audited):**
   - **Wisely.ai** scans ">500 billion messages annually" (">1.5 billion messages daily" across SMS, WhatsApp and voice) and protects "over 210 million consumers".
   - **Wisely ATP** prevents ">6 million scam attacks every month".
   - **MaaP** has carried ">2 billion RCS messages".
   - **Trubloq** is called "the world's largest" blockchain DLT and carried the **1600-series launch for BFSI voice**.
   - **No Trubloq market-share figure** appears anywhere in the AR. The primer's "~62%" remains unsourced.
10. **ValueFirst overseas entities** already in the FY26 group structure: Tanla Digital Labs FZ-LLC, Tanla Mobile Middle East LLC, ValueFirst Digital Media Pte Ltd (Singapore, step-down subsidiary). The consideration for the overseas business is **not disclosed** in the AR or the Q2 letter.
    - The Q2 letter cash-flow statement shows **"investment in subsidiary" of only ₹78 mn** and "cash acquired on ValueFirst acquisition" of ₹77 mn (H1 FY27). The goodwill/customer-relationship step-up (+₹1,538 mn) with other current financial liabilities +₹870 mn implies **most of the price is deferred/payable** [E].

### 4.2.2 Route Mobile (ROUTE · BSE 543228)

#### (a) Management-commentary digest (paraphrased; source and date on each line)

*Basis: **Q1 FY27 call of 24-Jul-2026** (latest transcript; the 28-Oct-2026 Q2 call has audio only), the **Q4 FY26 strategy call of 8-May-2026**, and the Q2 FY27 press release and deck (27/28-Oct-2026).*

**Guidance (RT4, 8-May-2026; RT1, 24-Jul-2026)**
- **FY27 guide (8-May):** revenue growth "mid to high single digits"; adj. EBITDA margin "around 12%"; "strong EBITDA-to-cash conversion … will continue".
  - Then-MD Rajdip Gupta called it deliberately "a little conservative", the first guidance in a year.
- **Status at Q1 (24-Jul):** Group CFO Raj Gill said "we will hold that for now"; the company is "on track with the dividend". CSO Vinay Binyala on the 12% margin: "ideally, we should not materially deviate from what we had guided".
- **Gross-margin band:** 21.5–23%, "which we've been operating over the last 5 or 6 quarters".
- **Q2 delivery:** H1 revenue +7.4% (in line); H1 adj. EBITDA margin 9.8%. Reaching 12% for the year needs **~14% in H2** [E: (0.12 × ~₹47,500 mn FY27E − ₹2,273.5 mn) ÷ ~₹24,200 mn H2E ≈ 14.2%]. Route's best-ever quarter was 12.9% (Q3 FY26).
  - **The margin guide is very unlikely to be met** [E]. The Q2 press release dropped the margin language and speaks of "translating business momentum into sustainable profitability" (Chairman Seckin Arikan).

**Volumes and pricing (RT1)**
- CEO Tushar Agnihotri expects volumes to grow **"by 10% to 15% in the next couple of quarters"** as the season sets in. Q2 delivered +3.9% QoQ (45.8 → 47.6 bn).
- **ILD** "continues to be a challenge in terms of growth for the near term", but "it's not like we are seeing a degrowth".
  - ILD is "a very relevant part of our business"; the split is not disclosed.
  - On ILD margins vs domestic: "In absolute value, no [not lower]. In percentage value, maybe yes."
- **WhatsApp/RCS:** "some aggression in the marketplace on the pricing of WhatsApp and RCS, and we don't really want to participate". An analyst noted the main competitor's WhatsApp/RCS base is ~3× Route's and growing faster.
  - RCS "definitely … provides a better margin option for aggregators"; some geographies have "exclusive arrangements".
- **Domestic SMS price (RT4):** an analyst cited ~10p/message domestic pricing and operators capturing 70–80% of the economics. Management did not dispute it.

**Margin dip and recovery (RT1)**
- The Q1 GM of 20.9% (vs 23.3% in Q4 FY26) came mainly from a **temporary traffic disruption at "select existing large high-margin customers"** during a solution redeployment. The largest was **an Indian customer**, which made the **India entity's segment profit negative in Q1**.
- Also: "multiple aggregator accounts" and, to a smaller extent, the Masiv cyber incident.
- Management called these transient: "not revenue or gross margin that we have lost". Q2 GM recovered to 22.4%.

**Cash and capital allocation (RT4; RT1)**
- **Cash ~₹1,300–1,400 Cr.** Analysts pressed on low treasury yield (<3–4% ex-FX) and on payout (~30%).
- CFO (8-May): "We utilize a meaningful amount of cash on **vendor prepayments**, which is a usual practice and gives good commercial benefits." Route will "relook at the treasury policy".
- **M&A:** capability bolt-ons (Heltar ₹33.7 Cr) plus larger "scale" deals that are "more involved decisions".
- **Dividend:** the regular dividend rises **from ₹11 to a "sustainable" ₹16.5/share (+50%), "payable each quarter"** (8-May).
- **Cash-conversion guide (24-Jul):** EBITDA→CFO "75% to 100%" for FY27. Q1 was weak on delayed collections from large customers in **India and the UAE** ("not … defaulters"; "a timing problem").

**Group relationship (RT4)**
- Proximus Global CEO and Route Chairman Seckin Arikan presented BICS's direct MNO relationships, Telesign's identity business and Konera (Proximus's network-API platform) as Route's advantages. India is to be the "product incubation center for the Proximus Global group".
- **Related-party flows (RT4):** Route sells termination to its sister companies: "Telesign needs to send a lot of SMS traffic into India … we charge Telesign and BICS when they send us that traffic … we charge a margin on top of our cost". The agreements are arm's-length, per transaction.
- The BICS/Telesign integration "is now completely over" (RT4).

**Operations (RT1)**
- Headcount "would typically hover around the kind of the 800 count mark"; wage hikes are done.
- **Claro multi-country firewall deal** (with Proximus): deployment is "behind time … due to certain reasons which are beyond our control"; fixed-plus-variable model.
- **Masiv incident:** investigation ongoing; provisions made; "very minor" further cost expected. Q2 actually added ₹69.0 mn of remediation fees, versus ₹13.6 mn in Q1.
- Truecaller business messaging is being tested with customers.

**Analyst Q&A points worth carrying**
1. *Is 12% still achievable?* (RT1) — "should not materially deviate".
2. *Why is cash piling up when payout is only ~30%?* (RT4) — M&A, vendor prepayments, treasury review.
3. *Are you losing WhatsApp/RCS share?* (RT1) — no market data; price discipline.
4. *How do ILD vs domestic margins compare?* (RT1) — lower %, not lower ₹.
5. *How do related-party transactions with Telesign/BICS work?* (RT4) — cost-plus per transaction.
6. *Masiv remediation cost?* (RT1) — "very minor" further (it then rose).
7. *Revenue per transaction fell 29p → 25p; is there a price floor?* (RT4) — no explicit answer.

#### (b) Concall/deck KPI table (company, ₹ mn unless stated) [V RPPT, RF26, RT1]

| KPI | Q4 FY25 | Q1 FY26 | Q2 FY26 | Q3 FY26 | Q4 FY26 | Q1 FY27 | Q2 FY27 |
|---|---|---|---|---|---|---|---|
| Revenue | 11,750 | 10,509 | 11,194 | 11,071 | 11,309 | 11,515 | 11,797 |
| Billable transactions (bn) | 40.5 | 39.2 | 45.2 | 45.1 | 45.1 | 45.8 | 47.6 |
| Gross profit | 2,264 | 2,251 | 2,471 | 2,712 | 2,639 | 2,404 | 2,640 |
| GM | 19.3% | 21.4% | 22.1% | 24.5% | 23.3% | 20.9% | 22.4% |
| Reported EBITDA | 1,219.0 | ~1,116.5 [E] | 1,359.6 | 1,463.9 | 1,362.3 | 1,054.8 | 1,150.2 |
| − capitalised IAUD | 32.5 | 38.0 [E] | 32.9 | 33.3 | 19.3 | 28.1 | 35.0 |
| Adj. EBITDA | 1,200.4 | 1,154.3 | 1,332.5 | 1,429.2 | 1,343.0 | 1,089.3 | 1,184.2 |
| Adj. EBITDA margin | 10.2% | 11.0% | 11.9% | 12.9% | 11.9% | 9.5% | 10.0% |
| Reported PAT | 602.8 | 587.8 | (188.3) | 1,025.6 | 1,144.3 | 685.5 | 825.5 |
| Exceptional (pre-tax) | 247.3 | — | 1,358.7 | — | — | — | — |
| New-products revenue | n/f | ~829 [E: 945 ÷ 1.14] | 939 | n/f | n/f | 945 | 1,284 |
| GP per txn (p) [E] | 5.59 | 5.74 | 5.47 | 6.01 | 5.85 | 5.25 | 5.55 |

*Q1 FY26 = H1 FY26 − Q2 FY26 (H1 revenue 21,703; GP 4,722; adj. EBITDA 2,486.8; reported EBITDA 2,476.1; IAUD 70.9; PAT 399.5).*

- **H1 FY26's adj. EBITDA includes a ₹70.1 mn FX-loss add-back that did not recur.**
- **Working-capital days (RPPT slide 20):** DSO 80 (FY25) → 76 (FY26) → 72 (H1 FY27); payable days 68 → 64 → **50**.
  - **Payable days fell 14 days in H1.** Together with the ₹1,168 mn vendor prepayment, Route is financing its suppliers faster [V/E].
- **Vertical mix H1 FY27 (RPPT slide 11, chart-read):** FinServ 15%; Digital native 12%; Telecom & allied 9%; Tier-1 CPaaS partners 9%; **E-commerce 4% (7% FY26, 10% FY24)**; Retail/travel 2%.
- **Termination geography H1 FY27:** India 35%, Europe 16%, Asia ex-India 13%, Americas 9%, Middle East 7%, Africa 6%.
- **Customer HQ:** Asia 37%, Americas 33%, Europe 18%, Africa 3%.
- **Concentration:** top 150 customers ≈ 91% of revenue; top 50 countries ≈ 85% [V chart-read; consistent with Part 2].

#### (c) Five-year history (screener consolidated, ₹ Cr; company GP/adj. EBITDA/transactions) [V SCR-R; V RF26]

| | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 | TTM Sep-26 |
|---|---|---|---|---|---|---|---|
| Revenue | 1,406 | 2,002 | 3,569 | 4,023 | 4,576 | 4,408 | 4,569 |
| YoY | +47% | +42% | +78% | +12.7% | +13.7% | −3.7% | — |
| Operating profit | 175 | 220 | 445 | 514 | 529 | 542 | 503 |
| OPM | 12% | 11% | 12% | 13% | 12% | 12% | 11% |
| Gross profit (company) | n/f | n/f | n/f | n/f | 951 (20.8%) | 1,007 (22.9%) | 1,040 |
| Adj. EBITDA (company) | n/f | n/f | n/f | n/f | 524 (11.5%) | 526 (11.9%) | 510 |
| Billable transactions (bn) | n/f | n/f | n/f | n/f | 155.8 | 174.9 | 183.6 (Q3 FY26–Q2 FY27) |
| Other income | 16 | 20 | 39 | 57 | 28 | −84 (incl. −136 exceptional) | 64 |
| Interest | 4 | 7 | 22 | 30 | 42 | 13 | 6 |
| Depreciation | 26 | 38 | 82 | 86 | 89 | 92 | 94 |
| PBT | 162 | 195 | 382 | 455 | 426 | 353 | 467 |
| Tax % | 18% | 13% | 13% | 15% | 22% | 27% | — |
| PAT (reported) | 133 | 170 | 333 | 389 | 334 | 257 | 368 |
| Adj. PAT (company) | — | — | — | — | 352 | 376 | — |
| EPS ₹ | 23.10 | 26.36 | 52.38 | 59.74 | 50.61 | 37.94 | 55.43 |
| ROCE | 33% | 17% | 22% | 21% | 18% | 17% | — |
| Debtor days (screener) | 56 | 94 | 72 | 97 | 74 | 75 | (72 company H1) |
| CFO | 222 | 135 | 73 | −98 | 602 | 581 | (33 H1 FY27) |
| FCF | 214 | 117 | 35 | −133 | 583 | 555 | — |

- **Read:**
  - FY23's +78% is the Masivian/365squared/TeleDNA acquisition year plus ILD growth.
  - **FY23–FY24 CFO was near zero or negative (₹73 Cr, −₹98 Cr)** on a receivables build (debtor days 97 in FY24). FY25–FY26 CFO recovered to ~₹580–600 Cr, and **H1 FY27 fell back to ₹33 Cr** with the vendor prepayment.
  - **Cash conversion swings between years are the defining feature of Route's history.**
- **FY25 also had an exceptional item (₹184.5 mn net for the year; ₹247.3 mn in Q4 FY25)** [V RF26]. Write-downs are therefore a recurring pattern, not a one-off: FY25 ₹18 Cr, FY26 ₹136 Cr, and in H1 FY27 a ₹4.9 Cr capital-advance loss allowance.

#### (d) Eight-quarter trend (screener consolidated, ₹ Cr) [V SCR-R]

| Quarter | Q3 FY25 (Dec-24) | Q4 FY25 (Mar-25) | Q1 FY26 (Jun-25) | Q2 FY26 (Sep-25) | Q3 FY26 (Dec-25) | Q4 FY26 (Mar-26) | Q1 FY27 (Jun-26) | Q2 FY27 (Sep-26) |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1,184 | 1,175 | 1,051 | 1,119 | 1,107 | 1,131 | 1,152 | 1,180 |
| YoY | n/c | n/c | −4.7% | +0.5% | −6.5% | −3.7% | +9.6% | +5.4% |
| Operating profit | 130 | 122 | 94 | 136 | 146 | 136 | 105 | 115 |
| OPM | 11% | 10% | 9% | 12% | 13% | 12% | 9% | 10% |
| Other income | 9 | −13 | 11 | −109 | 13 | 28 | 11 | 12 |
| Interest | 9 | 8 | 6 | 2 | 1 | 1 | 1 | 2 |
| Depreciation | 22 | 22 | 22 | 23 | 23 | 24 | 24 | 24 |
| PBT | 107 | 79 | 77 | 2 | 135 | 139 | 91 | 101 |
| Tax % | 20% | 24% | 23% | 1,042% | 24% | 18% | 25% | 18% |
| PAT | 85 | 60 | 59 | −19 | 103 | 114 | 69 | 83 |
| EPS ₹ | 13.09 | 8.98 | 8.45 | −3.37 | 15.51 | 17.35 | 9.94 | 12.63 |
| Company GM | n/f | 19.3% | 21.4% | 22.1% | 24.5% | 23.3% | 20.9% | 22.4% |

*YoY for Q1 FY26 onward uses screener quarters Jun-24 ₹1,103 Cr / Sep-24 ₹1,113 Cr / Dec-24 ₹1,184 Cr / Mar-25 ₹1,175 Cr.*

- **The pattern:** revenue flat (₹1,184 Cr → ₹1,180 Cr) and OP down (₹130 Cr → ₹115 Cr) over eight quarters. **Interest has fallen to ~₹1–2 Cr/qtr** after the FY26 debt repayment (₹468 Cr → ₹42 Cr borrowings).
- **Other income is the noisy line:** FX gains (Q4 FY26 ₹18 Cr) and exceptionals (Q2 FY26 −₹136 Cr; Q4 FY25 −₹25 Cr) dominate it.

#### (e) Annual-report findings (FY26 Annual Report 2025-26) [V]

*Source: https://www.bseindia.com/xml-data/corpfiling/AttachHis/36290219-8fc9-49ec-bf79-8ac6a98f6216.pdf (13.2 MB). BSE throttled the download, so the file was assembled from parallel byte ranges (complete, 183 pp). Read: the consolidated auditor's report, exceptional items, related parties, segment, contingencies, equity, BRSR headcount.*

1. **Auditor:** Walker Chandiok & Co LLP (Grant Thornton Bharat), FRN 001076N/N500013. Consolidated accounts signed 7-May-2026.
   - **Opinion unmodified, but with two Emphasis-of-Matter paragraphs**, on **Note 33.4(a)** (the SIAC partial award in the vendor's favour and the settlement) and **Note 33.4(b)** (the ₹27.9 Cr advance to a vendor that ceased operations). The 33.4(a) EOM repeats one already in a subsidiary auditor's report dated 7-May-2026.
   - **One KAM: goodwill impairment.** Goodwill is **₹544.51 Cr** at 31-Mar-2026 across Sarv Webs, Masivian, MR Messaging FZE, Route Mobile Communication Services (ex-Interteleco), 365squared, Send Clean (ex-Cellent) and Call2Connect.
   - Goodwill ≈ **19% of Route's ₹2,911 Cr net worth** [E]. MR Messaging goodwill was already impaired by ₹40.4 Cr in FY25.
   - **An EOM on a vendor write-off is a stronger audit signal than anything in Tanla's report** (Tanla: clean, two routine KAMs).
   - **Headcount (BRSR, standalone):** 497 permanent employees at 31-Mar-2026 (399 male / 98 female). Group 786 in the Q2 deck.
   - Single operating segment ("currently has only one operating segment"). An entity-location table is given.

2. **The vendor-advance write-off, now fully explained (Note 33.4) — ₹135.87 Cr = ₹107.96 Cr + ₹27.91 Cr:**
   - **(a) ₹107.96 Cr: a minimum-guaranteed SMS volume contract.**
     - A subsidiary had **prepaid ₹196.61 Cr** to a vendor for the committed volume of the first two years. At 31-Mar-2024 management judged the contract **onerous** (Ind AS 37) and provided ₹26.70 Cr.
     - Volumes then fell well short. Route sought renegotiation (14-Nov-2024) and **invoked arbitration on 24-Mar-2025** against the "vendor subsidiaries". The vendor counter-claimed (7-Apr-2025) and terminated the agreement. A hearing took place at the **Singapore International Arbitration Centre (SIAC)** in Sep-2025, and Route wrote off the remaining net advance.
     - **SIAC's partial award of 18-Nov-2025 went against Route:** minimum committed volumes "were not subject to adjustment" and the vendor had no obligation "to refund prepayments made for the first two years". The parties signed a **settlement on 19-Feb-2026** withdrawing all claims.
     - So **~₹134.7 Cr of the ₹196.6 Cr prepayment was lost** (₹26.7 Cr provided in FY24 + ₹108.0 Cr written off in FY26) [E from V].
   - **(b) ₹27.91 Cr: an advance for messaging services** paid the previous year to a vendor that "has ceased its business operation"; written off; recovery being explored.
   - **Neither vendor is named, and neither appears in the related-party note.** SIAC arbitration with "vendor subsidiaries" points to a **foreign MNO group**. **Nothing in the AR links either vendor to Proximus/BICS** (BICS appears in the RPT note only as a customer and a small supplier, below). Writer: say "unnamed foreign MNO group, not a related party per the AR".

3. **FY25 had exceptionals too (₹18.45 Cr net):**
   - +₹50.07 Cr fair-value gain on contingent consideration for **M.R. Messaging FZE** (Dubai, bought Feb-2022).
   - −₹40.44 Cr goodwill impairment in the same subsidiary.
   - −₹28.08 Cr write-off of a **receivable from an MNO** plus a loss on a short-term MNO contract.
   - **Three consecutive years of MNO-contract losses (FY24 provision, FY25, FY26)** [V].

4. **Advances to suppliers still on the balance sheet:** ₹154.6 Cr at 31-Mar-2026 (current ₹150.38 Cr + non-current ₹4.17 Cr), down from ₹420.4 Cr at 31-Mar-2025 (₹271.38 Cr + ₹149.03 Cr). Capital advances ₹10.38 Cr.
   - **H1 FY27 added a further ₹116.8 Cr** (Q2 deck), so supplier advances are likely back to **~₹250–270 Cr at Sep-2026** [E]. The Sep-26 balance sheet split was not read.
   - **This is the number to watch.** The CFO calls prepayments "a usual practice and gives good commercial benefits" (RT4).

5. **Related-party transactions with the Proximus group (Note 39, ₹ Cr, FY26 vs FY25) — larger than the dossier assumed:**

| Item | FY26 | FY25 | Note |
|---|---|---|---|
| **Sale of messaging services to Telesign Corp** | **658.63** | 460.18 | **14.9% of FY26 consolidated revenue** (10.1% in FY25), +43% YoY |
| Sale of messaging services to BICS | 52.72 | 15.23 | 1.2% of revenue |
| Sale to Telesign Colombia / Proximus Global | 0.88 / 0.03 | 0.20 / — | |
| **Total sales to the Proximus group** | **~712.3** | ~475.6 | **~16.2% of revenue** [E] |
| Purchase of messaging services from BICS / Telesign | 44.94 / 14.39 | 12.54 / 7.85 | |
| Technical & support services (BICS 6.24, Telesign 8.21, Proximus SA 0.70, PG 0.17, Proximus Services India 0.17) | ~15.5 | ~3.1 | |
| **Management support services (Proximus Global 4.02, BICS 3.99, Telesign 2.10)** | **10.11** | — | **New charge in FY26**, in "other expenses" |
| Licence purchases (Telesign 2.48, BICS 1.44) | 3.92 | — | |
| Trade receivables: Telesign / BICS | 131.50 / 21.27 | 99.44 / 2.12 | Telesign ≈ 14% of Route's receivables (₹909 Cr) [E] |

   - **Read:**
     - **Telesign (a Proximus Global sister company) is almost certainly Route's single largest customer**, at ~15% of revenue and rising. This means (i) some of Route's "growth" is intra-group traffic priced on the cost-plus RPT agreements described on the Q4 call, (ii) margins on that traffic are set by agreement, not by the market, and (iii) **minority shareholders' economics depend partly on intra-group transfer pricing**.
     - Route's audit committee approves these as arm's-length RPTs [V RT4]. **Present neutrally; do not allege.**
     - The new ₹10.1 Cr "management support services" charge from the parent group is the first explicit **parent-level fee** (Tanla has none).

6. **Revenue by location of the billing entity (Note 45, ₹ Cr, FY26 / FY25):** UK 1,289.2 / 1,685.4 (−23.5%: the ILD/global-tech loss); **India 850.8 / 878.3**; Malta (365squared firewall) 658.2 / 657.9; USA 616.9 / 467.1 (+32%); Dubai 493.7 / 489.9; others 499.4 / 397.0.
   - **Segment results: India entities ₹69.2 Cr (₹111.9 Cr FY25) vs overseas entities ₹376.0 Cr (₹326.3 Cr).** India-registered entities earned only **15.5% of segment profit on 19.3% of external revenue** in FY26 [E]. In Q1 FY27 the India entity's result turned negative (RT1).

7. **Non-controlling interests:** FY26 PAT ₹256.94 Cr includes **₹17.92 Cr attributable to NCI**, so **PAT attributable to Route's owners was ₹239.02 Cr** (EPS ₹37.94 is on this basis). Screener's "₹257 Cr" is pre-NCI. *Use ₹239 Cr for P/E on owners' earnings* [V].

8. **Dividends paid in FY26:** final FY25 ₹2 (₹12.60 Cr) + interim FY26 ₹9 (₹56.70 Cr); **proposed final FY26 ₹2** → **FY26 total ₹11/share** (₹9 interim + ₹2 final) [V]. Confirms Part 2.

9. **Debt:** "There is no outstanding debt as at 31 March 2026" (borrowings ₹440.96 Cr at 31-Mar-2025). Screener's ₹39–42 Cr is lease liabilities [V].

10. **Contingent liabilities (Note 44, ₹ Cr, Mar-26 / Mar-25):** income tax 17.62 / 17.92; GST 76.94 / 85.42; service tax nil / 0.25; PF 0.28 / —; **bank guarantees 225.73 / 181.62**; total 320.58 / 285.21.
    - **BG margin money in bank balances: ₹95.46 Cr** (₹182.72 Cr). Route's BG exposure (₹226 Cr) exceeds Tanla's (₹189 Cr) on a smaller India business, reflecting MNO-side guarantees abroad.

11. **Management churn visible in the KMP list:**
    - CEO Gautam Badalia (to 17-Jul-2025) → MD Rajdip Gupta as CEO (18-Jul-2025 to 9-Feb-2026) → **Tushar Agnihotri CEO from 9-Feb-2026**.
    - Chairman Guillaume Boutin (to 17-Apr-2025) → Mark Reid (non-exec, to 22-Jan-2026) → **Seckin Arikan Chairman from 22-Jan-2026**.
    - CFO: Suresh Jankar (CFO) with Raj Gill (Group CFO).
    - **Three CEOs and three chairmen in ~15 months** [V].

12. **Cost structure FY26 (consolidated, ₹ Cr):** purchase of messaging services 3,400.9 (77.1% of revenue — matches GP 22.9%); employee 288.9 (6.6%); other expenses 181.2 (legal & professional 46.5; trade receivables written off 11.8; ECL 5.5; management support 10.1). PBT before exceptional ₹488.9 Cr; tax ₹96.1 Cr.

---

## 4.3 INDUSTRY DATA UPGRADED FROM PRIMARY SOURCES (chart-ready)

**I1. UCC (spam) complaints received by telcos, calendar 2025 (number of complaints)** [V-sec: Rajya Sabha written reply, Minister of Communications, reproduced by Communications Today 10-Feb-2026; total cross-checked with TRAI PR 20/21 of 2026 via MediaNama ">3.1 mn"]

| Month 2025 | Unregistered TMs (10-digit numbers) | Registered TMs (DLT) | Total |
|---|---|---|---|
| Jan | 1,34,821 | 13,299 | 1,48,120 |
| Feb | 1,05,102 | 11,111 | 1,16,213 |
| Mar | 1,16,221 | 15,741 | 1,31,962 |
| Apr | 1,24,105 | 14,602 | 1,38,707 |
| May | 2,11,509 | 49,248 | 2,60,757 |
| Jun | 2,68,150 | 57,751 | 3,25,901 |
| Jul | 2,87,574 | 50,873 | 3,38,447 |
| Aug | 3,08,320 | 85,746 | 3,94,066 |
| Sep | 3,12,083 | 71,501 | 3,83,584 |
| Oct | 2,16,476 | 39,138 | 2,55,614 |
| Nov | 2,40,162 | 41,985 | 2,82,147 |
| Dec | 2,77,551 | 56,766 | 3,34,317 |
| **2025** | **26,02,074** | **5,07,761 (16.3%)** | **31,09,835** |

- **Read:** complaints **more than doubled** from a Jan–Apr average of 1.34 lakh/month to 2.91 lakh/month in Oct–Dec.
  - This reflects the Feb-2025 amendment, which let consumers complain without first registering a preference and widened the window from 3 to 7 days, plus the DND app (2.8 mn installs; 1.7 mn complaints via the app in 2025).
  - It is not evidence that spam itself doubled.
- **Registered (DLT) telemarketers account for only ~16% of complaints**, and TRAI's 2026 memorandum found ~80% of those invalid (Part 1 §7.1).
- **Unregistered 10-digit senders are the spam problem; the DLT-registered A2P channel that Tanla/Route run is not.** Chart this.

**I2. Enforcement and DLT scale, latest primary/near-primary**
- **DLT registrations:** >3 lakh senders (PEs), ~21,000 telemarketers [V-sec RS reply, Feb-2026].
  - A vendor guide (Message Central, early 2025) cites ~2.5 lakh+ PEs, 6 lakh+ headers and 55 mn+ approved templates [V-snip, weak].
- **Blocking:** >7.5 crore SMS + voice calls blocked per day on average (Dec-2025) [V-sec].
- **Penalties on telcos:** ₹153.8 Cr of financial disincentives imposed on TSPs for wrongly closing UCC complaints [V-sec].
- **Disconnections:** 1.84 lakh telecom resources disconnected in 2025; 21 lakh cumulative since Aug-2024. 7.31 lakh notices to unregistered telemarketers in 2025; 4.73 lakh one-month restrictions; 89,936 six-month caps [V-snip MediaNama citing TRAI PR 20/21-2026].
- **Traceability:** >27,000 PEs had declared PE-TM chains by Dec-2024; rejection from 11-Dec-2024 [V-snip].
- **India A2P volume (still no regulator series):**
  - Vendor estimate: commercial SMS **>40 bn/month (~480 bn/yr)** [V-snip Message Central, undated].
  - **Tanla's AR: Wisely.ai scans >500 bn messages/yr (>1.5 bn/day) across SMS, WhatsApp and voice, including Indonesia** [V TAR].
  - Together these support an **order of magnitude of ~0.5 trillion commercial messages a year** in India. Keep Part 1's range but narrow it to **~450–700 bn/yr [E]**.

**I3. WhatsApp Business Platform — Meta's own India price list (₹ per delivered message, ex-GST; card effective 1-Oct-2026)** [V META]

| Category | List rate | Volume tiers (per business portfolio, monthly) | Change history (Meta change-log) |
|---|---|---|---|
| Marketing | **₹0.8631** | none | Raised 1-Jan-2026 (from ₹0.7846 per vendor history [V-snip]) |
| Utility | **₹0.1150** | 0–25 mn list; 25–50 mn ₹0.1081 (−6%); 50–100 mn ₹0.1012 (−12%); 100–200 mn ₹0.0943 (−18%); further tiers beyond | In-window utility free 1-Jul-2025 → 30-Sep-2026; charged from 1-Oct-2026 |
| Authentication | **₹0.1150** | 0–0.75 mn list; 0.75–15 mn −6%; 15–20 mn −12%; 20–50 mn −18% | — |
| Authentication-international | **₹2.4971** | tiers as authentication | Raised 1-Apr-2026 |
| Service | ₹0.1150 after **1,000 free per number per month** (from 1-Oct-2026) | — | Free until 30-Sep-2026 |
| USD equivalents (USD card) | Marketing $0.0118; utility/auth $0.0014; auth-intl $0.0304 | | |

- **Read:**
  - (i) A WhatsApp authentication message at ₹0.115 (₹0.094 at the 100 mn+ tier) is **priced at or below a domestic DLT SMS OTP** (~₹0.10–0.15 delivered).
  - (ii) **Authentication-international (₹2.50) is 22× domestic.** This is Meta's own version of the ILD premium, charged when an overseas business authenticates an Indian user. It is directly comparable to the ILD SMS pool Route lost.
  - (iii) Marketing at ₹0.863 is **7.5× utility**, which is why the marketing-to-utility mix shift caps WhatsApp revenue growth (Tanla call).
- **INR billing:** live from 1-Jan-2026 for India-based BSPs. **All India accounts must migrate to INR by 31-Dec-2026**; Meta stops delivering from non-INR accounts of eligible customers on 1-Jan-2027 [V META].

**I4. RCS business-messaging prices in India (₹ per message)**

| Operator | Before | After | Date | Source |
|---|---|---|---|---|
| Jio — marketing | flat 0.08–0.10 | **0.27–0.30** | 1-Sep-2026 | Inc42 9-Sep-2026, citing ET and Jio's emails [V-snip] |
| Jio — transactional/utility | flat 0.08–0.10 | **0.25** | 1-Sep-2026 | same |
| Jio — OTP | flat 0.08–0.10 | **0.11–0.16** | 1-Sep-2026 | same |
| Airtel (Google RBM) | — | **0.11** (80% Airtel / 20% Google) | Dec-2025 launch | ET via search summaries [V-snip] |
| Context | India RCS interactions +108% (H1-25 → H1-26); BFSI/fintech >¾ of RCS traffic (Infobip data) | | | Inc42 [V-snip] |

- **Read:** Jio's new RCS marketing price (₹0.27–0.30) is **~3× its old flat rate**. It is still ~⅓ of WhatsApp marketing (₹0.86) but ~2× a DLT SMS. Jio's RCS OTP (₹0.11–0.16) is priced level with SMS/WhatsApp authentication.

**I5. Telco interconnect/termination asks (Dec-2025 consultation) vs TRAI outcome**

| Item | Status quo | Telcos asked (Jio/Airtel/Vi, Dec-2025) | TRAI outcome |
|---|---|---|---|
| Deterrent termination on commercial domestic SMS | ~₹0.07/SMS (as stated by telcos) | ~₹0.12/SMS | Not changed in the 3rd amendment (pending in the interconnection review) |
| A2P **calls** termination | none (P2P regime) | ₹0.50/min (Jio: else forbearance) | **Up to ₹0.05/min** (3rd amendment, finalised 18-Sep-2026; effective 60 days after notification) |
| International SMS termination into India | forborne (telcos set freely; ~₹2–5/SMS by origin per press) | — | DoT OM 19-Jun-2025 forces all foreign-originated SMS onto ILD gateways |
| International comparison (domestic per-SMS termination, industry estimates) | India lowest | South Africa ₹0.27; US ₹0.7; Brazil ₹5.4; Argentina ₹8.4 | — |

[V-snip telecomlive 18-Dec-2025; MediaNama Mar-2025/Mar-2026; V medianama Sep-2026 for the final rule (Part 1)]

**I6. Global peer table refresh (latest reported quarter)**

| Company | Period | Revenue | Gross margin | EBITDA / op margin | Pass-through treatment | Tag |
|---|---|---|---|---|---|---|
| Twilio | Q3-2026 | $1.56 bn (+20%; +16% organic) | 49% NG | 21% NG op | ~$53.1 mn A2P carrier fees "passed at cost", excluded from organic growth | [V TWLO] |
| Bandwidth | Q3-2026 | $234 mn (+22%) | 61% NG | adj. EBITDA $34.8 mn = **22% of revenue ex pass-through** (15% of total) | **~$76 mn (32% of revenue) pass-through messaging surcharges stripped out of "cloud communications revenue"** | [V BAND] |
| LINK Mobility | Q2-2026 | NOK 2,050 mn (+17%; +3% organic) | 24.0% | 13.3% adj. EBITDA | GP-based KPIs | [V-snip] |
| Proximus Global (BICS + Telesign + Route) | Q3-2026 | €369 mn (−2.0%) | direct margin €106 mn = 28.7% | EBITDA €35 mn = 9.5% | — | [V PXQ3] |
| Tanla | Q2 FY27 | ₹1,352 Cr (~$142 mn) (+25.3%) | 26.1% | 15.9% | gross (telco fees inside revenue) | [V] |
| Route | Q2 FY27 | ₹1,180 Cr (~$124 mn) (+5.4%) | 22.4% | 10.0% adj. | gross | [V] |

- **Insight for the writer:**
  - **US peers now report revenue *net* of carrier pass-through fees, or show the pass-through separately** (Bandwidth strips 32%; Twilio excludes A2P fees from organic growth). The Indian pair report gross.
  - **On a Bandwidth-style "net revenue" basis, Tanla's Q2 FY27 "EBITDA margin" would be ~61% of GP** and Route's ~45%. That puts Tanla above Bandwidth (22% of net revenue) and Twilio on GP-normalised efficiency [E].
  - Proximus Global (which consolidates Route) earns a 9.5% EBITDA margin. **Route (10.0%) is not dilutive to its parent's margin**, but Proximus Global's EBITDA fell 8% YoY while Route's fell 11%.

**I7. Proximus Global quarterly trend (€ mn)** [V PXQ2, PXQ3; Q1 from search summary]

| | Q1-2026 | Q2-2026 | Q3-2026 |
|---|---|---|---|
| Revenue | 354 (−18.8%) [V-snip] | 353 (−3.9%) | 369 (−2.0%) |
| Direct margin | n/f | 101 (−10.5%) | 106 (+0.8%) |
| EBITDA | 33 [V-snip] | 29 (−34.9%) | 35 (−8.1%) |
| FY26 EBITDA guide | 100–130 (28-May) | 110–120 | **125–135 (raised)** |

---

## 4.4 GAP LOG (§H items and §2.4 items: status after this pass)

| # | Gap (Part 1 §H / §2.4) | Status | Result / what was tried |
|---|---|---|---|
| H1 | India A2P SMS volume series | **Partly filled** | No TRAI/DoT series exists in the Performance Indicator reports or parliamentary replies. New anchors: vendor ">40 bn/month"; Tanla Wisely ">500 bn/yr scanned"; TRAI ">7.5 crore messages/calls *blocked* per day". Range narrowed to ~450–700 bn/yr [E]. **Still do not chart a time series.** |
| H2 | India CPaaS market size | **Still open (by design)** | No primary source. Tanla's ED (TT4) gives a *growth* figure, "8–10% a year". Keep the bottom-up ₹11–14k Cr [E]; the Tanla call adds that 75–80% of spend sits with ~250 enterprises. |
| H3 | Telco termination rates (domestic and international) | **Partly filled** | Domestic deterrent ~₹0.07/SMS and the telcos' ask for ₹0.12 (Dec-2025); A2P call 5p/min final; international termination forborne (~₹2–5/SMS by origin, press). **No 2025–26 telco rate card or confirmed commercial hike found.** Tanla's ED (Apr-2026): a reset is "on the cards". |
| H4 | Meta India WhatsApp rate card; ₹0.8631 date conflict | **Filled** | Meta rate card and change-log [V]; 1-Jan-2026 (S4) |
| H5 | RCS Sep-2026 repricing | **Filled (secondary)** | Jio's tariff from its emails via ET/Inc42 (S6); Tanla's letter confirms. Google/Airtel side: no change found. |
| H6 | Traceability effective date | **Filled** | 11-Dec-2024 rejection start; 10-Dec deadline (S8) |
| H7 | TRAI spam complaint counts; DLT totals | **Filled** | 2025 monthly series and DLT counts (S7, I1, I2) |
| H8 | Tanla past SEBI / income-tax probes | **Filled (refuted as stated)** | AR shows no SEBI order and no search. A ₹46.9 Cr TDS demand on the Karix purchase (seller-indemnified) is the actual tax matter. Earlier items: the ₹5 lakh exchange fine for board composition and the 2020 insider-code disgorgement [V-snip, Part 1]. **Writer: no "probe" language.** |
| H9 | ValueFirst overseas 2026 consideration | **Still open** | Not in the Q2 letter, Q1/Q2 decks or AR. H1 cash outflow only ₹78 mn "investment in subsidiary"; the delay was RBI approval of "old matters" (TT4). Implied deferred consideration [E]. A Reg-30 completion filing (Aug-2026) would carry it; not retrieved (BSE throttling). |
| H10 | Tanla volumes / Trubloq share / platform composition | **Still open (partly)** | Tanla does not disclose message counts or Trubloq share; the AR gives Wisely scan volumes only. ATP pricing = per subscriber per month (TT4). **"~62%" remains unsourced; drop it or caveat as "primer estimate".** |
| H11 | Route vendor-advance counterparty; Proximus-affiliate link | **Mostly filled** | The AR names neither vendor, but describes them (a foreign MNO group's subsidiaries under SIAC arbitration, and a vendor that ceased operations). **Neither is a related party**; BICS/Telesign appear as customers (₹711 Cr of sales) and small suppliers (₹59 Cr). The counterparty of the H1 FY27 ₹116.8 Cr advance is still unnamed (S26, S27) |
| H12 | Route vertical/geography mix | **Re-read** | H1 FY27 chart values re-extracted (§4.2.2(b)); consistent with Part 2 (±1 pt); e-commerce 4% is new |
| H13 | Peers Bandwidth/LINK/8x8; peer EV/EBITDA | **Partly filled** | Bandwidth and LINK replaced (S20, S21). 8x8 not fetched (not an A2P peer; low priority). **Peer EV/EBITDA multiples still not fetched** (no free consensus source without login) — the writer should avoid quoting peer multiples or tag them [K]. |
| H14 | Karix acquisition year | **Filled** | FY2018-19 (S2) |
| H15 | Route open-offer peak 83.11% vs 82.70% | **Filled (screener)** | Screener Jun-24 = 83.11% [V]. The 82.70% is likely the post-open-offer figure in the offer's completion report (not fetched). Use "about 83%". |
| H16 | Belgian state stake | **Filled** | 53.51% (S18) |
| 2.4-T1 | Tanla cash ₹1,447 Cr vs CARE ₹859 Cr | **Filled** | S10 |
| 2.4-T2 | Platform GM 98.5% vs 90% | **Filled** | S11 |
| 2.4-T3 | "One-time campaigns" size | **Still open** | Not quantified in the letter |
| 2.4-T4 | Customers 3,200+ vs 2,000+ | **Open (definitional)** | Company "3,200+ enterprises" vs CARE "2,000+ established enterprises"; the AR adds "top 250 customers = 75–80% of enterprise market spend" (TT4) |
| 2.4-R1 | Route FY26 PAT driver | **Filled** | ₹135.9 Cr exceptional (RF26 bridge [V]); not tax |
| 2.4-R2 | Route dividends FY26 ₹11 / FY27 interims | **Filled** | S12 |
| 2.4-R3 | Route Q1 FY27 board date | **Filled** | S13 |
| 2.4-R4 | Route clients 3,100+ vs 2,400+ | **Open (definitional)** | Q2 deck: "2,400+ active billable clients" — use it |
| 2.4-R5 | Monitoring-agency issue identity | **Still open** | Axis Bank report (30-Oct-2026) not opened |

### 4.4b Status of argument-carrying [K] / [V-snip] / [E] tags in Parts 1–3

| Part 1–3 item | Old tag | Now |
|---|---|---|
| Karix 2018 | [K] | **[V] FY2018-19** (S2) |
| Belgian state ~53.5% | [K] | **[V] 53.51%** (S18) |
| WhatsApp ₹0.8631 / ₹0.115; per-message pricing 1-Jul-2025 | [V-snip] | **[V] Meta** (S4, S5) |
| RCS 6–7p → 20–25p | [V-snip] | **[V-snip], better source; revised** (S6) |
| Traceability date | [V-snip], conflicting | [V-snip], three sources agree (S8) |
| Feb-2025 amendment ₹2/5/10 lakh penalties on telcos; 5-in-10-days threshold | [V-snip] | Unchanged ([V-snip] tele.net.in, quoting TRAI text). The TRAI PR PDF is a scanned image (no text layer), so it could not be verified directly |
| Telco bulk-SMS hike +25–30% (Aug-2023) | [V-snip] | Unchanged. A 2023 blog notes the figures may refer to international SMS → **downgrade to "reported"** |
| Vendor-quoted Jio/Airtel/Vi termination ranges | [V-snip] | Unchanged (vendor only); add the ₹0.07 deterrent figure (S25) |
| Route vendor-advance description ("major MNO and an SMS aggregator") | [V-snip] | **[V] AR Note 33.4** (S26) |
| Proximus Global ~€3.1 bn equity (Jan-2025); ~91.3% Proximus ownership | [V-snip] | Unchanged (not in the Q2/Q3 releases) |
| Mark Reid exit (Jan-2026) | [V-snip] | **[V] AR KMP list: non-exec director till 22-Jan-2026** |
| Masivian incident (Jun-2026) | [V-snip] | **[V] Q1 call + Q2 deck** (fees ₹13.6 mn Q1 + ₹69.0 mn Q2) |
| Infobip 2025 $2.34 bn | [V-snip] | Unchanged (not re-fetched) |
| Kaleyra/Tata Comm digital margin | [V-snip] | Unchanged |
| Tanla ₹5 lakh exchange fine; 2020 insider-code disgorgement | [V-snip] | Unchanged; no further matters in the AR (S3) |
| "~62% Trubloq share"; platform split 50/30/20 | primer, unverified | **Still unsourced** (not in AR/letter/transcript) |
| "Meta withdrew WhatsApp incentives" | [K] | **Still unverified.** Not mentioned in the Q4 FY26 transcript or the Q2 letter |
| DPDP Rules notified Nov-2025 | [K] | Not re-checked (low priority for the argument) |
| India A2P market US$3–5 bn (market-research) | [V-snip] | Unchanged; still "do not use" |
| India ~4–5% of global CPaaS; combined ~half of India GP pool | [E] | Adjust: **Tanla is ~74% India by customer location**, so the India GP pool share falls to ~40–45% [E] |
| Route EV/EBITDA 2.8×; P/E 7.9× | [E]/[V] | P/E on owners' PAT TTM: screener TTM ₹368 Cr is pre-NCI; on owners' earnings the P/E is ~8.2× [E: NCI ~₹18 Cr/yr] |

---

## 4.5 NEW INSIGHTS THE FIRST PASS MISSED, AND NEW PRIMER ISSUES

### Insights an expert would add
1. **Route's largest customer is its sister company.**
   - Telesign (Proximus Global) bought **₹658.6 Cr of messaging from Route in FY26: 14.9% of revenue, up 43% YoY**. Adding BICS, ~16% of Route's revenue is intra-group at cost-plus prices.
   - Route's "Tier-1 CPaaS partner" and international revenue therefore partly depend on transfer pricing set inside Proximus.
   - Minorities' economics hinge on the RPT terms (approved by the audit committee as arm's-length). A new **₹10 Cr/yr "management support services"** fee to the parent group started in FY26.
   - Pair this with the 74.85% MPS ceiling and the absence of any delisting signal in Proximus's Q3-2026 release. It is the **core of the "controlled-subsidiary discount"** argument.
2. **The vendor-advance problem is a minimum-commitment contract, not fraud.**
   - Route prepaid ₹196.6 Cr for two years of minimum-guaranteed SMS volume. Volumes collapsed with the ILD/AIT shift, and SIAC held the commitments binding: **~₹135 Cr lost on one contract.**
   - Route keeps doing it: ₹154.6 Cr of supplier advances at Mar-26 and ₹116.8 Cr more in H1 FY27, and the CFO calls prepayments "good commercial benefits".
   - **This is the price of buying termination at scale in a falling-volume market**, and the auditor now flags it (EOM).
3. **Tanla is a quarter international by billing.**
   - Overseas customers were **26.5% of Tanla's FY26 revenue** (28.3% FY25). These are mostly global tech/OTT firms billed for traffic into India, plus ME/SEA from Aug-2026.
   - The "domestic champion vs global aggregator" contrast with Route (India 19% by billing entity; 35% by termination) still holds, but it is **74/26 vs 19/81, not 90/10**.
4. **WhatsApp authentication has undercut SMS OTPs, and Meta prices an "ILD premium" of its own.**
   - Meta's India card: authentication ₹0.115, falling to ₹0.094 at 100 mn+/month. That is at or below a delivered DLT SMS.
   - Authentication-international (an overseas business messaging an Indian user) costs **₹2.50, 22× domestic**. The OTP economics Route lost on ILD SMS are being rebuilt on Meta's rails, with Meta as the toll-taker.
5. **Telcos repriced RCS ~3× (Jio, 1-Sep-2026) as Apple's RCS support made it a two-OS channel.** RCS marketing at ₹0.27–0.30 sits between SMS (~₹0.12) and WhatsApp marketing (₹0.86). Tanla's "partial offset" comment and Route's "RCS gives aggregators a better margin" are two sides of the same move.
6. **Spam is an unregistered-sender problem.** In 2025 only 16% of 31.1 lakh UCC complaints concerned DLT-registered telemarketers, and most of those were found invalid. Complaints doubled through 2025 as TRAI made complaining easier.
   - Regulatory pressure is falling on telcos (₹153.8 Cr of penalties) and 10-digit spammers. That **strengthens, rather than threatens, the registered A2P aggregators and Trubloq** (which also carried the 1600-series BFSI voice rollout).
7. **Audit-quality contrast.**
   - Tanla: clean opinion, two routine KAMs, related parties of ₹21 lakh. Its one big tax item (₹46.9 Cr TDS on the Karix purchase) is seller-indemnified.
   - Route: unmodified opinion **with two Emphasis-of-Matter paragraphs**, a goodwill KAM (₹545 Cr, ~19% of net worth), three CEOs and three chairmen in ~15 months, and three straight years of MNO-contract losses.
8. **US peers strip pass-through revenue; Indian peers don't.**
   - Bandwidth reports margins on revenue net of ~32% pass-through surcharges; Twilio excludes A2P carrier fees from organic growth.
   - Restated on GP, Tanla's EBITDA/GP (61%) beats Bandwidth's adj. EBITDA/cloud revenue (22%) and Twilio's NG op income/GP (~42%). **GP-based multiples are the only fair cross-border comparison.**

### New primer issues (format as primer-issues.md)

#### From CPaaS deep-research pass (2026-11-01, cpaas-industry.md Part 4)

- **tanla-platforms.html — Karix date:** the AR confirms the Karix SPA in **FY2018-19**. Change "2017" to "2018".
- **tanla-platforms.html — geography:** add that **26.5% of FY26 revenue came from overseas customers** (FY26 AR Note 47). Any "almost entirely domestic" wording is wrong.
- **tanla-platforms.html — tax matter:** add the **₹46.9 Cr TDS demand (31-Mar-2026) on the Karix purchase consideration, seller-indemnified, under appeal**; contingent "claims not acknowledged" rose from ₹16.8 Cr to ₹63.6 Cr. Do **not** describe SEBI or income-tax "probes"; none is disclosed.
- **tanla-platforms.html — segment labelling:** Platform/Enterprise are management-reported lines; the audited accounts have one Ind AS 108 segment.
- **tanla-platforms.html — WhatsApp pricing:** use Meta's card (marketing ₹0.8631 from 1-Jan-2026; utility/auth ₹0.115 with tiers; service charged beyond 1,000/month from 1-Oct-2026; INR billing deadline 31-Dec-2026).
- **tanla-platforms.html — buyback detail:** 20 lakh shares at up to ₹875 (₹175 Cr), FY26.
- **tanla-platforms.html — ATP model:** Wisely ATP is priced per protected subscriber per month (Q4 FY26 call). Third bank (Bandhan) live Mar-2026.
- **route-mobile.html — related-party exposure missing:** **Telesign = ₹658.6 Cr (14.9%) of FY26 revenue; BICS ₹52.7 Cr; new ₹10.1 Cr management-support fee to the Proximus group.**
- **route-mobile.html — vendor write-off mechanics:** ₹196.6 Cr minimum-guarantee prepayment; SIAC award against Route (18-Nov-2025); settlement 19-Feb-2026; ₹27.9 Cr second vendor ceased operations. **Auditor's Emphasis of Matter** on both.
- **route-mobile.html — owners' PAT:** FY26 PAT attributable to owners is **₹239 Cr** (NCI ₹17.9 Cr), not ₹257 Cr.
- **route-mobile.html — debt:** "no outstanding debt at 31-Mar-2026"; the ₹39–42 Cr is leases.
- **route-mobile.html — leadership timeline:** Badalia → Rajdip Gupta (interim CEO Jul-25 to Feb-26) → Agnihotri (CEO from 9-Feb-2026); Chairman Seckin Arikan from 22-Jan-2026.
- **route-mobile.html — FY27 dividend:** ₹4 + ₹4 interims declared (record dates 29-Jul and 2-Nov-2026) against the ₹16.5 "sustainable" guide.
- **route-mobile.html — guidance credibility:** the 12% adj. EBITDA guide needs ~14% in H2 (H1 9.8%; best-ever quarter 12.9%). Flag as at risk; mgmt on 24-Jul: "should not materially deviate".
- **route-mobile.html — Proximus context:** Proximus Global Q3-2026 revenue €369 mn, EBITDA €35 mn, FY26 EBITDA guide raised to €125–135 mn. No statement on Route's listing.
- **Both — RCS:** Jio repriced RCS from a flat ₹0.08–0.10 to marketing ₹0.27–0.30 / utility ₹0.25 / OTP ₹0.11–0.16 on 1-Sep-2026.

---

## 4.6 SOURCE URLS FOR PART 4 (all fetched 1-Nov-2026)

**Tanla**
- Q2 FY27 shareholder letter: https://www.bseindia.com/xml-data/corpfiling/AttachLive/a2d1230c-3063-47be-86d4-df249fc40cb4.pdf
- Q2 FY27 press release: https://www.bseindia.com/xml-data/corpfiling/AttachLive/a8d6ea8f-694c-43d2-a614-6ed332db0c79.pdf
- Q2 FY27 investor presentation: https://www.bseindia.com/xml-data/corpfiling/AttachLive/2d48d122-1dfd-42d1-814b-25d80519b9af.pdf
- Q1 FY27 investor presentation: https://www.bseindia.com/xml-data/corpfiling/AttachLive/22d3956b-a592-4f70-9529-fca64b5512b9.pdf
- Q4 FY26 call transcript (27-Apr-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/d8d4867b-ef4d-428a-8987-2a59cfe9fd88.pdf
- FY26 Integrated Report: https://www.bseindia.com/xml-data/corpfiling/AttachHis/3536807d-aebe-47aa-b316-02bae1d8f7e9.pdf
- CARE (6-Apr-2026): https://www.careratings.com/upload/CompanyFiles/PR/202604130442_Tanla_Platforms_Limited.pdf
- Tax-demand Reg-30 summary: https://www.whalesbook.com/corporate-news/English/tech/Tanla-Platforms-Faces-indian-rupee4690-Cr-Tax-Demand-Company-Contests-Cites-Seller-Pact/69d5053931d4f2ab4811ce2a
- Screener: https://www.screener.in/company/TANLA/consolidated/

**Route**
- Q2 FY27 press release: https://www.bseindia.com/xml-data/corpfiling/AttachLive/5c56f30f-337a-424d-819d-8fdb734ae93f.pdf
- Q2 FY27 presentation: https://www.bseindia.com/xml-data/corpfiling/AttachLive/075a5e13-890a-40fe-b82e-02e295d20fa0.pdf
- FY26 deck: https://www.bseindia.com/xml-data/corpfiling/AttachHis/654c6bef-ba9d-49cc-a2d4-24534844ceb5.pdf
- Q4 FY26 transcript (8-May-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/ba821fc6-e7d0-4137-a0d5-db7932b4fa50.pdf
- Q1 FY27 transcript (24-Jul-2026): https://www.bseindia.com/xml-data/corpfiling/AttachHis/2a5b8fc8-740e-43c3-a802-59a9f329e6fe.pdf
- FY26 Annual Report: https://www.bseindia.com/xml-data/corpfiling/AttachHis/36290219-8fc9-49ec-bf79-8ac6a98f6216.pdf
- 1st interim dividend: https://scanx.trade/stock-market-news/companies/route-mobile-q1-results-net-profit-rises-17-yoy-to-62-6-crore/46507222
- Screener: https://www.screener.in/company/ROUTE/consolidated/

**Platform owners / regulator**
- Meta WhatsApp pricing (page + INR/USD rate-card PDFs linked from it): https://developers.facebook.com/docs/whatsapp/pricing/
- UCC complaints 2025 (Rajya Sabha reply): https://www.communicationstoday.co.in/dot-and-trai-have-taken-widespread-action-for-curbing-spam-calls/
- TRAI PR 20/21 of 2026 summary: https://www.medianama.com/2026/02/223-trai-issued-731000-notices-unregistered-telemarketers-2025/
- TRAI PR 11/2025 (scanned, no text layer): https://trai.gov.in/sites/default/files/2025-02/PR_No.11of2025.pdf
- Traceability deadlines: https://tele.net.in/trai-extends-deadline-for-implementation-of-traceability-mandate-for-commercial-messages-to-december-11-2024/ · https://www.msei.in/SX-Content/Circulars/2024/December/Circular-16445.pdf
- Telco interconnect asks (Dec-2025): https://telecomlive.in/web/?p=981593
- International SMS forbearance: https://www.medianama.com/2025/03/223-dot-asks-trai-clarify-position-a2p-messages/
- Jio RCS tariff: https://inc42.com/buzz/jio-introduces-new-rcs-business-messaging-rates-for-iphone-users-in-india/

**Peers / parent**
- Proximus Q3-2026: https://www.proximus.com/news/2026/202610-financial-results-q3-2026.html
- Proximus Q2-2026: https://www.proximus.com/news/2026/202607-financial-results-q2-2026.html
- Proximus shareholder structure: https://proximus.com/investors/shareholder-structure.html
- Twilio Q3-2026 8-K: https://www.sec.gov/Archives/edgar/data/0001447669/000144766926000106/twloq326ex991.htm
- Bandwidth Q3-2026 8-K: https://www.sec.gov/Archives/edgar/data/0001514416/000151441626000080/q320268kexh991.htm
- LINK Q2-2026: https://www.inderes.se/releases/link-mobility-q2-2026-return-to-organic-gross-profit-growth-and-2h-guidance-reiterated

*Part 4 scratch notes and extracts: /tmp/cpaas-deep/ (notes_screener.md, notes_tanla.md, notes_route_call.md, notes_route_ar.md, notes_industry.md, pdf/, meta/).*
