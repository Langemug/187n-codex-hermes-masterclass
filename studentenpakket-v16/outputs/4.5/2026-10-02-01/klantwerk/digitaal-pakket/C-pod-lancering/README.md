# POD-lancering in één middag (v0.1.0)

**Doel:** van één print naar een conceptproduct in Shopify: mockups → producttekst + SEO → DRAFT-product, met controles onderweg.
**Voor wie:** POD-merken met een eigen Shopify-winkel en eigen prints.
**Resultaat:** 2–3 mockups, een SEO-title (≤ 60), meta description (≤ 160), producttekst (≥ 250 woorden) die door 7 vaste controles plus je eigen claimlijst komt, en een DRAFT-product.

## Wat je nodig hebt
- Terminal met **ImageMagick 6** en **Python 3**.
- Een AI-agent met toegang tot jouw Shopify-admin (bv. via de Shopify-connector) — alleen voor stap 4; stappen 1–3 werken zonder.
- Eigen blanke productfoto (met gebruiksrecht) en eigen print; bevestigde productfeiten (gewicht, maten, maattabel).

## Inhoud
| Map/bestand | Wat |
|---|---|
| skills/foto-mockup/SKILL.md | mockup-workflow |
| skills/productpagina-seo/SKILL.md | SEO-workflow (gebaseerd op Shopify Help Center) |
| scripts/foto-mockup.sh · scripts/seo-check.py | scripts |
| voorbeeld/ | demo-blank, demo-print, placements, verwacht-demo.jpg, seo/ (ingevuld voorbeeld) |
| prompts.md · MANIFEST.md · CHANGELOG.md · VOORWAARDEN.md | |

## Walkthrough (± 1 middag)
1. **Mockup** — `bash scripts/foto-mockup.sh voorbeeld/blank-demo.jpg voorbeeld/print-demo.png 750 600 520 mockup-test.jpg`; daarna met eigen foto (zie skills/foto-mockup).
2. **Teksten** — maak een map `mijn-product/` met title.txt, seo-title.txt, meta.txt, body.html (zie voorbeeld/seo/).
3. **Controle** — `python3 scripts/seo-check.py mijn-product "<hoofdzoekwoord>" "<tweede zoekwoord>" "<claims die je niet kunt aantonen, kommagescheiden>"` → alles OK? door. FOUT? herschrijven.
4. **Shopify** — laat je agent het product als **DRAFT** bijwerken (prompt 3) en terug-lezen. Publiceren doe je zelf.
5. **Review** — check claims: alleen feiten die je kunt aantonen (samenstelling, wasvoorschrift, voorraad).

## Grenzen
Geen rankinggarantie; Google kan teksten herschrijven en herindexering duurt dagen–weken. Het pakket publiceert niets zelf.
