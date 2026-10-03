# Visionair storefront (les 2.3) · CONCEPT
Bouwen: `python3 build.py` → `index.html` + `product.html`. Open lokaal in de browser.
- `content/*.json` = teksten en productdata (later Shopify settings/metafields)
- `sections/`, `snippets/`, `layout/` = Liquid-achtige templates ({{ }}, {% for %}, {% if %}, {% render %})
- `templates/*.json` = welke secties op welke pagina (zoals Shopify templates)
- `assets/` = CSS (base = DESIGN.md, storefront = componenten), JS (code-regen, UI + DEMO-cart)
Winkelmand is DEMO (alleen localStorage, geen checkout). Productbeelden zijn digitale mockups.
Live preview: https://claude.ai/artifact/JpPFeQLJMh1z7RP9eHXAkH
