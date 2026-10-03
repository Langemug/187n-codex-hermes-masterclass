# Browser-batch · Les 043 (N12)
App: lokale oefenplanner `app/planner.html` (localStorage, alleen status "Concept", geen publicatieknop). Aansturing: Playwright/Chromium (`app/run-planner.js`).

## Items (uit goedgekeurde batch 5.5 / productvideo 5.4)
| ID | Kanaal | Asset (bestaat?) | Datum | Teruggelezen na reload |
|---|---|---|---|---|
| C1 | Instagram carrousel | carrousel/slide-1..6.png ✔ | 2026-10-12 | copy ✔ asset ✔ datum ✔ · Concept |
| A3 | Meta ad (statisch) | ad-A3.png ✔ | 2026-10-14 | copy ✔ asset ✔ datum ✔ · Concept |
| PV1 | Instagram Reel | productvideo-v1.mp4 ✔ | 2026-10-16 | copy ✔ asset ✔ datum ✔ · Concept |
Datums zijn voorstellen (concept), geen geplande publicatie.

## Procedure (gecontroleerd)
1. Open planner, wis oude oefendata.
2. Per item: ID, kanaal, copy, asset-pad, datum invullen → "Opslaan als concept".
3. Lees melding: "Opgeslagen: <ID>".
4. Pagina herladen → tabel teruglezen → per veld vergelijken met items.json.
5. Controleer dat elk asset-pad lokaal bestaat.

## Herstel bij ontbrekende velden (getest)
- C1 eerst zonder asset opgeslagen → melding "Ontbrekende velden: asset", niets opgeslagen.
- Herstel: asset invullen → opnieuw opslaan → "Opgeslagen: C1" → teruglezen OK.
- Regel: nooit doorgaan na een foutmelding; veld aanvullen uit items.json, opnieuw opslaan, opnieuw teruglezen. Ontbreekt de bron-asset → item op BLOCKED, niet opslaan.

Bewijs: `run-log.json`, `planner-na-reload.png`. Niets gepubliceerd.

Student-oordeel (2026-10-02): items en datums akkoord.
