# Creative Workspace — pilot (les 079 · 2.6)
Gebruiker: student zelf (Visionair Society). Hoofdtaak: per drop designs, mockups, ads en versies beheren en goedkeuren.
Bestanden: index.html (app) · seed.js (startdata uit echte output, met bron per item) · screenshots.
Hergebruik: campagneworkflow 5.7 (ads P1–P3), 5.8 (levering/review), N24 (clip v3→v3b), 4.3/9.1 (mockups 009/012), N08 (campagnes A/B). Geen briefingchecker als hoofdproduct.

## Functies: echt vs gesimuleerd
| Functie | Status |
|---|---|
| Productinput (lijst + nieuw product, onbekend blijft "onbekend") | ECHT (lokaal) |
| Campagneoverzicht (assets + goedgekeurd per campagne) | ECHT (berekend uit data) |
| Assetreview: echte beelden/video's uit projectmappen tonen | ECHT |
| Goedkeuren / afkeuren (afkeuren vereist feedback) | ECHT (lokaal) |
| Versies per asset + wisselen | ECHT (lokaal) |
| Logboek van acties | ECHT (lokaal) |
| "Genereer" nieuwe versie | **GESIMULEERD** — rood label, geen beeld, geen API-call, €0 |
| Upload van nieuwe bestanden | NIET GEBOUWD |
| Meerdere gebruikers / klantlogin | NIET GEBOUWD |

## Auth · opslag · kosten
- Auth: geen (lokaal bestand). Voor klanten: login nodig (bv. magic link) vóór gebruik buiten eigen computer.
- Opslag: localStorage in de browser (sleutel vs-creative-workspace-v1); verdwijnt bij wissen browserdata; "Reset pilot" zet startdata terug. Bestanden zelf blijven in projectmappen.
- Generatiekosten: €0 (gesimuleerd). Echte koppeling (bv. Higgsfield gpt_image_2_5 ≈ 0,25 credit/beeld, les 5.5) pas na akkoord per generatie.

## Pilotcriteria (getest 2026-10-03, Playwright)
| Criterium | Resultaat |
|---|---|
| 4 echte beelden laden | ✔ 4/4 |
| Afkeuren zonder feedback geweigerd | ✔ melding "Geef feedback bij afkeuren." |
| Gesimuleerde versie herkenbaar | ✔ rood label GESIMULEERD + placeholder |
| Acties blijven na herladen | ✔ logboek 2 regels na reload |
| Geen JS-fouten | ✔ |
Nog te doen door student: 1 week zelf gebruiken bij een echte drop; tellen hoe vaak je terugvalt op losse mappen.

## Stap 5 — Feedback student: B (export)
Toegevoegd: knop "Export goedgekeurde assets (CSV)" op tab Campagnes → download goedgekeurde-assets.csv (titel, product, campagne, versie, pad, notitie); alleen goedgekeurd én niet-gesimuleerd; actie in logboek.
Getest: gesimuleerde versie van 009 goedgekeurd → NIET in export ✔; 3 echte goedgekeurde assets in export (export-test.csv) ✔; geen JS-fouten.
