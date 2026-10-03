# Sessieoverdracht · FAQ-sectie (les 027 · N10)
Status: oefening geslaagd. Werk op `storefront-kopie/`; echte storefront ongewijzigd.

## Opzet
- Plan in 5 onderdelen: `plan.md`. Feiten en open punten: `bevindingen.md`. Status: `voortgang.md`.
- Sessie 1 rondde onderdeel 1 (`content/faq.json`) echt af.
- Sessie 1 zette **bewust** onderdeel 2 (`snippets/faq.html`) op "[x] klaar" terwijl het bestand niet bestond.

## Test: nieuwe sessie (subagent met lege context)
- Kreeg alleen de opdracht: lees de drie bestanden, vertrouw vinkjes niet, controleer tegen echte bestanden.
- **Vond het onjuiste vinkje**: `cat snippets/faq.html` → "No such file". Corrigeerde `voortgang.md` met notitie.
- Ging verder vanaf de echte status: maakte onderdeel 2 af; bewijs = geïsoleerde render, 6× `<details>`, geen restende template-tags.
- Extra vondst: de zin "We will show shipping costs and delivery times before checkout opens" is een belofte. Toetsen voor live.
- Gecontroleerd door sessie 1 (hoofdsessie): snippet bestaat, alleen faq.json als bron, alleen kopie gewijzigd.

## Wat werkt in een overdracht
1. Bewijs per vinkje (bestand, commando, uitkomst), niet "geschreven".
2. Nieuwe sessie controleert eerst, bouwt daarna.
3. Open punten en grenzen staan in bevindingen.md, zodat niemand feiten verzint.

## Volgende actie (buildstatus)
Onderdeel 3: `faq` in build-context, `{% render 'faq' %}` in main-product, build draaien, product.html controleren. Daarna 4 (stijl) en 5 (test).
