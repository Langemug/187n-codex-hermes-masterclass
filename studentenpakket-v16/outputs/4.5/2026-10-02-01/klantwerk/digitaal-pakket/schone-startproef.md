# Stap 3 — Schone-startproef (2026-10-03)
Methode: beide pakketten gezipt → uitgepakt in lege map buiten project (/tmp/claude-0/schoon.*) → walkthrough letterlijk gevolgd met `env -i PATH=/usr/bin:/bin` (geen projectvariabelen, geen persoonlijke paden).

| Proef | Resultaat |
|---|---|
| A: walkthrough-commando stap 2 | exit 0; vergelijking met verwacht-demo RMSE 0,26 % (willekeurige inktkorrel) ✔ |
| A: zelfde commando nogmaals | weigert overschrijven, exit 4 ✔ |
| C: mockup stap 1 | exit 0 ✔ |
| C: seo-check op voorbeeld/seo | alle controles OK ✔ |
| C: fout-proef (SEO title zonder zoekwoord) | FOUT R3, exit 1 ✔ |
| Pad-check: alle in README/prompts/SKILL genoemde paden bestaan | geen ontbrekende ✔ |
| Persoonlijke paden (outputs/, /home/, /Users/) | geen ✔ |

## Gevonden en hersteld
- **seo-check.py had een vaste verboden-lijst uit óns merk** ("cotton, wash, shrink, restock, premium"). Een koper die wél katoenen hoodies verkoopt zou onterecht FOUT krijgen. → Standaard leeg; koper geeft eigen claimlijst als 4e argument. README en CHANGELOG aangepast, MANIFEST opnieuw gegenereerd.

## Niet getest
- Stap 4 van C (Shopify DRAFT via agent) — vereist koper-account; eerder wel uitgevoerd in les 062 op eigen store.
- macOS/WSL (alleen Linux getest).

## Herkansing 2026-10-03
Pakket C v0.1.3: SEO-voorbeeld neutraal (Demo Brand · Design 001 WAVE), seo-check 8/8 OK · 0 FOUT, MANIFEST-hashes bijgewerkt, schone-startproef in lege map OK (mockup + check), geen merkcopy meer in pakket. Oude voorbeeld bewaard in _archief/C-voorbeeld-seo-v1/ (buiten pakket). Verkoop blijft geblokkeerd tot SkillSpector-scan.
