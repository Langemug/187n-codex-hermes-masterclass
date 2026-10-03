# Probleembrief + gebruikersroute (les 080 · stap 2)
Probleem (les 075, keuze B): kleine webshop-eigenaren hebben productpagina's met te weinig inhoud en zwakke SEO-velden (bronnen via zoekmachine, niet geopend — HYPOTHESE).
Gebruiker: eigenaar kleine Shopify-webshop, schrijft zelf producttekst.
Prototype: **"Productpagina-check"** — plak titel, SEO-title, meta description en producttekst → directe check + concrete verbeterpunten. Hergebruikt seo-check-regels (les 061/064, Shopify Help Center R1–R10).

## Route
1. Landingspagina: probleem + wat de check doet + "Probeer met voorbeeld" (TESTDATA) of "Plak je eigen tekst".
2. Invoer: producttitel*, SEO-title, meta description, producttekst*, hoofdzoekwoord*, (optioneel) claims die je niet kunt bewijzen. (* verplicht)
3. Check (lokaal in browser): 7 vaste regels + claimlijst (met LET OP bij ontkenning, zoals v0.1.1).
4. Resultaat: OK/FOUT/LET OP per regel + uitleg + tellers (tekens, woorden).
5. Ontbrekende input → duidelijke melding welk veld; geen check op lege velden.
6. Niet-ondersteunde vraag (bv. "check mijn hele winkel via URL" / "schrijf de tekst voor mij") → nette melding wat níet kan.
7. Export resultaat als tekst (kopiëren). Geen opslag, geen account, niets verstuurd.

## Gesimuleerd / niet gebouwd
- URL ophalen van live winkel: NIET (geen netwerk) → melding.
- AI-herschrijven: NIET gebouwd → melding, geen nep-tekst.
- Login/betaling: niet aanwezig (zie voorbeelden/saas/product-checklist.md).
