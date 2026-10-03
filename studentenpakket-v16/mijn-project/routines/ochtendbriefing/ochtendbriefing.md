# Ochtendbriefing · 2026-10-23 · periode 2026-10-18 t/m 2026-10-22
**TESTDATA** — verzonnen orders/tickets (les 051). Geen echte omzet.

## Orders
- In periode: 6 · betaald 4 · terugbetaald 1 · open 1 (bron: orders.csv)
- Betaald maar niet verzonden: TEST-VS-002, TEST-VS-006
- Verzonden zonder tracking: TEST-VS-003

## Support
- Tickets: 6 (bron: tickets.json) · open escalaties: 4 (bron: escalaties.csv)
  - TT4: privacy: vraag naar gegevens van andere klant
  - TT6: dispute/chargeback
  - TT5: ruilbeleid niet vastgesteld (voorstel maatwissel)
  - TT3: tracking ontbreekt bij Tapstitch

## Voorraad
- Beschikbaar ≤ 0: FMH-BLK-M (bron: voorraad.csv; onbevestigde leveringen niet meegeteld)
- Levering TEST-L1 FMH-BLK-M 20 st · 2026-10-28 · onbevestigd
- Levering TEST-L2 FMH-BLK-L 15 st · 2026-10-24 · bevestigd

## Planning
- Open items maandplanning: 9 (bron: 02-maandplanning-maand1.csv) — eerstvolgende: R3, C2, S1-S4

## Drie acties vandaag
1. **Uitverkochte maat(en) FMH-BLK-M als sold out tonen (besluit: no restock)** — bron: voorraad.csv — reden: klant kan anders bestellen wat er niet is
2. **Dispute TT6 afhandelen; order niet verzenden tot opgelost** — bron: escalaties.csv + orders.csv — reden: geld- en verzendrisico
3. **Tracking opvragen voor TEST-VS-003** — bron: orders.csv — reden: klant heeft geen trackinglink

## Ontbrekende databronnen
- Echte Shopify-orders (winkel nog niet live) · verzendstatus Tapstitch (geen koppeling) · kosten (verzend/betaal/Shopify/ads) · ad- en e-maildata

---
## Controle tweede run (stap 4)
Wijziging: tracking binnen voor TEST-VS-003 (testdata-wijziging/). Run 2 (`ochtendbriefing-run2.md`): "zonder tracking" → geen · open escalaties 4 → 3 · actie 3 verschuift naar "productiestatus checken TEST-VS-002/006". Diff: `run1-vs-run2.diff`. Generator: `briefing.py` (periode en datum als parameters).

Student-oordeel (2026-10-02): volgorde acties akkoord.

> Noot 2026-10-03: "no restock" hierboven is vervangen door besluit 5b (zwarte Founding Member-editie komt niet terug; design mag in andere kleur terug). Historische run, niet aangepast.
