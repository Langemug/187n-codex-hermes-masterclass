# Plan · FAQ-sectie productpagina (oefening N10)
Werkmap: `storefront-kopie/` (kopie van `mijn-project/storefront/`, echte storefront blijft ongewijzigd).
Doel: FAQ-sectie onder de productinfo van The Founding Member Hoodie, alleen met bevestigde feiten.

## Onderdelen
1. Content: `content/faq.json` met vragen en antwoorden (bron per antwoord).
2. Template: `snippets/faq.html` met `<details>` per vraag (werkt zonder JS, Liquid-klaar).
3. Koppeling: `{% render 'faq' %}` in `sections/main-product.html` + `faq` in build-context.
4. Stijl: FAQ-regels in `assets/storefront.css` (DESIGN.md: mono, --line, --hot accent).
5. Test: build zonder fouten, FAQ zichtbaar op desktop 1440 en mobiel 390, geen horizontale scroll, toetsenbord opent/sluit vragen.

## Grenzen
- Geen verzonnen verzendtijden, kosten of beloftes. Onbekend = "to be confirmed".
- Klaar = gecontroleerd in de echte build, niet "geschreven".
