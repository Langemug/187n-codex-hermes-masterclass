# Prototype-review — Productpagina-check (les 080 · N31) — 2026-10-03
Probleem: B uit les 075 (productpagina-inhoud; bronnen via zoekmachine, niet geopend → HYPOTHESE). Route: 01-probleembrief-route.md.
Prototype: prototype/index.html (landing + check, lokaal in browser). Screenshots: landing-mobiel.png, voorbeeld-resultaat.png, test1-normaal.png.

## Stap 4 — Tests (Playwright, Chromium)
| Test | Invoer | Verwacht | Resultaat |
|---|---|---|---|
| Voorbeeld (TESTDATA) | fictieve linnen tas, bewust zwak | meerdere FOUT | 4 van 8 in orde ✔ |
| 1 Normaal gebruik | Oefenmerk-tekst v2 (les 066, 279 woorden) + claims health, organic | alles OK | 9 van 9 in orde, 0 FOUT ✔ |
| 2 Ontbrekende input | alleen hoofdzoekwoord | melding welke velden, geen check | "Vul eerst in: Producttitel, Producttekst." ✔ |
| 3 Niet-ondersteund: URL | "check mijn winkel via een link …" | nette weigering | "Ophalen van een winkel via een link kan dit prototype niet" ✔ |
| 3b Niet-ondersteund: schrijven | "schrijf de tekst voor mij" | nette weigering, geen nep-tekst | "Teksten schrijven doet dit prototype niet" ✔ |
JS-fouten: 0.

## Echt vs. gesimuleerd
Echt: alle 7 regels + claimlijst + meldingen (lokaal). Niet gebouwd: URL ophalen, AI-herschrijven, login, opslag, betaling (zie voorbeelden/saas/product-checklist.md vóór betaalde versie).
## Landingspagina-claims
Geen rankinggarantie; "wat hij niet doet" staat zichtbaar; bron richtlijnen genoemd (Shopify Help Center). Kop is een vraag, geen belofte.
