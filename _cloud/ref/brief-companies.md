# Standing brief — COMPANY FACT PACK (one batch) for a sub-sector report

You are building a standardised fact pack for a BATCH of listed companies in one sub-sector. A writer agent will use it for the peer table, positioning maps and company profiles. Do NOT spawn subagents. Do NOT touch git or edit anything in C:\bse500 except your output file (read-only otherwise).

Your prompt gives: the sub-sector, the companies in your batch (name, NSE, BSE, primer file), the sub-sector's native KPIs, the output path, and today's date.

## For each company
1. **Standardised financials and valuation from screener.in (one fetch per company, https://www.screener.in/company/<NSE>/consolidated/ — fall back to /company/<NSE>/ if consolidated is empty):** latest full year (FY26 preferred; state the year) revenue, prior-year revenue and growth %, EBITDA (operating profit) and margin %, PAT, ROCE %, ROE %, borrowings, cash/investments if shown (net debt or net cash), market cap (₹ Cr, today), P/E, P/B, and dividend yield if relevant. Compute EV/EBITDA only if you have both debt and cash; otherwise say "on gross debt". Note the screener date.
   - **For lenders (banks/NBFCs/HFCs/MFIs) use instead:** AUM / loan book, AUM growth, NII, NIM, opex/AUM, credit cost, GNPA %, NNPA %, PCR, PAT, ROA, ROE, CRAR/Tier-1, cost of funds, borrowing mix, market cap, P/B, P/E. Get these from the company's latest investor presentation if screener lacks them.
2. **Native KPIs and the story, from our primer** C:\bse500\primers\<file>. Do NOT read the whole primer into memory end to end if it is long: read the cover stat strip, the "whatsnew" box, the first two sections, and search the file (grep) for the native KPIs in your prompt. Extract: segment/business mix, the native KPIs with their period, ownership (promoter %, MNC parent, PE), geographic and customer concentration, capacity and expansion plans, and 3–4 "story" bullets (what defines it, its edge, its main risk).
3. **Freshness:** if the primer's figures are older than FY26 or conflict with screener, use screener for the standardised numbers and note the conflict. For native KPIs missing in the primer, do at most ONE quick search for the latest investor presentation / results. Mark every figure's source: [primer], [screener <date>], or [web: source, date].

Budget: about 2 web calls per company. Do not spiral.

## Data-quality lessons (learned on earlier batches; apply them)
- **Net debt/cash:** screener's borrowings − cash − investments often misses bank deposits and treasury holdings, and can count strategic investments as cash. Where the company reports its own net cash/debt (investor presentation or primer), show BOTH and say which the writer should use (prefer the company figure for prose).
- **Gross margin:** 100 − screener's material-cost % is only a proxy and often overstates. Use the company-reported gross margin where available and label any proxy as a proxy.
- **EBITDA basis:** screener's operating profit can differ from the company's reported EBITDA (other income, one-offs, R&D capitalisation). Show the company figure where it differs materially and note the basis.
- **Ownership:** use the latest screener shareholding (promoter, FII, DII %), not the primer's, and note material changes since the primer.
- **Regulatory status (e.g. USFDA, RBI actions):** prefer the company's own filing over press summaries; if press reports conflict, flag it for the writer rather than picking one.
- **Still listed?** The NSE 750 list is a frozen July-2026 snapshot. Confirm each company is still listed; if it has delisted, merged (e.g. J. B. Chemicals into Torrent, Jul 2026; Orient Cement into Ambuja) or announced a merger/demerger, say so prominently at the top of your report-back, and mark its market cap/multiples as stale.
- **Stale primer valuations:** market caps and multiples in primers can be months old. Always use today's screener figures for m-cap and multiples.

## Output (one markdown file at the path in your prompt)
(a) A peer table for your batch: company, NSE, year, revenue ₹ Cr, growth %, EBITDA margin %, PAT ₹ Cr, ROCE %, ROE %, net debt (cash) ₹ Cr, m-cap ₹ Cr, P/E, P/B, EV/EBITDA, plus 2–3 native-KPI columns. For lenders use the lender columns. Use "n/a" honestly.
(b) Per-company sections: full record, native KPIs, ownership, story bullets, sources.
(c) A JSON code block with the numeric data (one object per company, consistent keys).
(d) A list of conflicts and gaps.

Report back: the file path, batch totals (revenue, PAT, m-cap), and any conflicts/gaps.
