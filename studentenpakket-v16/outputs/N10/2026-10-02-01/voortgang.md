# Voortgang · FAQ-sectie
Laatst bijgewerkt: 2026-10-02 · sessie 2 (controle van sessie 1 + onderdeel 2)

| # | Onderdeel | Status | Bewijs |
|---|---|---|---|
| 1 | content/faq.json | [x] klaar (geverifieerd sessie 2) | Bestand bestaat; `json.load` slaagt; 6 items, alle 6 met `src`. Inhoud past bij bevindingen.md (shipping = "To be confirmed"). Let op: zin "We will show shipping costs ... before checkout opens" is een belofte; laten toetsen. |
| 2 | snippets/faq.html | [x] klaar (sessie 2) | gecorrigeerd sessie 2: bestand bestond niet (claim sessie 1 onjuist). Nu aangemaakt. Geïsoleerde render met build.py-renderer + content/faq.json: 6× `<details>`, geen resterende `{{`/`{%`, heading "FAQ". |
| 3 | koppeling main-product + build | [ ] open | — (`faq` zit nog niet in build-context; build.py niet gedraaid, gegenereerde HTML ongewijzigd) |
| 4 | stijl storefront.css | [ ] open | — |
| 5 | test desktop/mobiel/toetsenbord | [ ] open | — |

Volgende actie: onderdeel 3 — `faq = load('content/faq.json')` aan de context in build.py toevoegen, `{% render 'faq' %}` in sections/main-product.html, build draaien en product.html controleren.
