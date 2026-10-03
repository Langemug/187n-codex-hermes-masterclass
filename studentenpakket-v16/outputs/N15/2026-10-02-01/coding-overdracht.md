# Coding-overdracht Hermes → Codex (les 092 · N15) — 2026-10-03
**Delegatieroute:** Hermes en Codex niet beschikbaar in deze cloudomgeving → brief geschreven in de rol Hermes (01-bouwbrief-hermes.md), uitgevoerd in de rol Codex door deze sessie op een **werkversie** (kopie). **Handmatige stap:** in Hermes zelf de brief aan Codex geven = open (eigen computer).

## Echte wijzigingen (diff t.o.v. outputs/2.3/…/storefront, origineel ongewijzigd)
- Files ../../2.3/2026-10-02-01/storefront/assets/storefront.css and werkversie/assets/storefront.css differ
- Files ../../2.3/2026-10-02-01/storefront/content/home.json and werkversie/content/home.json differ
- Files ../../2.3/2026-10-02-01/storefront/index.html and werkversie/index.html differ
- Only in werkversie/sections: compare.html
- Files ../../2.3/2026-10-02-01/storefront/templates/index.json and werkversie/templates/index.json differ

Concreet: nieuwe sectie sections/compare.html (tekst via content/home.json), toegevoegd aan templates/index.json na featured-product, CSS-blok "N15 compare" in assets/storefront.css; build.py opnieuw gedraaid.

## Controles
| Check | Resultaat |
|---|---|
| #compare met 5 rijen (Product, Price, When, Where, Member number) | ✔ |
| Online lidnummer = "TBA — not confirmed yet" (geen nieuwe claim) | ✔ |
| Geen JS-fouten | ✔ desktop + mobiel |
| Geen horizontale scroll | ✔ 1280 px / 390 px |
| Screenshots | compare-desktop.png · compare-mobiel.png |
| Origineel storefront ongewijzigd | ✔ (alleen kopie gewijzigd) |
| Gepubliceerd | nee |
