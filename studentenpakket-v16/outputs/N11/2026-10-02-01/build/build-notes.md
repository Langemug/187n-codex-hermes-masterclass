# Build-notes · Bouwer · N11 productpagina (kopie)
Start: Fri Oct  2 06:47:56 UTC 2026
Eind: Fri Oct  2 06:48:54 UTC 2026

## Wijzigingen (alleen in storefront-kopie/)
- content/product-founding-member-hoodie.json: nieuwe velden offer_line ("Your hoodie number is your member number."), offer_sub ("Founding Member access included"), cta_trust (14-day withdrawal (EU) · No restock · Pop-up in Europe first · online 7 days later · Shipping: to be confirmed). Alle teksten komen uit bestaande description/specs; geen nieuwe feiten.
- sections/main-product.html: aanbodblok (.offer, Nº + member-nummerregel) direct onder H1; volgorde nu titel → aanbod → prijs → maat → CTA → vertrouwensregel (.trust) → beschrijving → maatgids → specs. Maatgids staat na de CTA zodat de knop hoger komt.
- assets/storefront.css: stijlen .offer (hot-outline, recht), .trust (mono 10px, dim, hot-ruitjes) en mobiele regels ≤900px: compactere galerij (26vh, kleine thumbs 48px, beeldnoot verborgen op mobiel), kleinere H1/prijs, 5 maatknoppen op één rij.
- product.html: opnieuw gebouwd met build.py (overige pagina's ook herbouwd door build.py, inhoud ongewijzigd).

## Tests
- python3 build.py: zonder fouten.
- Playwright (chromium): 1440x900 scrollWidth 1440, CTA-onderkant 573px, trustregel 612px, 0 pageerrors. 390x844 scrollWidth 390, CTA-onderkant 741px, trustregel 786px (beide boven 844), 0 pageerrors.
- Screenshots: build/product-1440x900.png, build/product-390x844.png.

## Aandachtspunten
- CTA staat op de screenshot nog gedimd door de bestaande boot-animatie van .btn.p (ongewijzigd).
- Beeldnoot "CONCEPT: DIGITAL MOCKUPS..." is op mobiel verborgen in de galerij; concept_note onderaan het formulier blijft zichtbaar. Reviewer/hoofdsessie: beslissen of mockupnoot op mobiel terug moet.
