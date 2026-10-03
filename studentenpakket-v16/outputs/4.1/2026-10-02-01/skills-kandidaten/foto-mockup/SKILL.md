---
name: foto-mockup
description: Plaats een print of logo realistisch op een echte blanke productfoto (plooien, schaduw, inktkorrel) voor één of meer producten.
---

# foto-mockup · kandidaat-skill (NIET geladen)

Status: kandidaat · scan + bronreview vereist vóór laden. Bron: bewezen workflow les 5.5 (student tevreden met fm-010-back-flat/model).

## Trigger
"Maak een productfoto/mockup van design X op product Y", of een nieuwe print/blank die op foto moet.

## Input (variabel)
| Variabele | Voorbeeld | Verplicht |
|---|---|---|
| BASE | blanke productfoto (jpg), recht van gebruik bekend | ja |
| PRINT | transparante png van design of logo | ja |
| POSITIE | rug / linkerborst / voor-midden | ja |
| CX, TOPY, WIDTH | pixelpositie op BASE (zie voorbeelden/placements-*.csv) | ja; onbekend → testplaatsing |
| OPACITY | 0.94 print, 0.96 logo | nee |
| PRODUCT | handle/naam voor bestandsnaam | ja |

Geen productnaam, pad of merk is vastgelegd in de skill zelf.

## Stappen
1. Controleer: BASE bestaat, PRINT heeft transparantie, rechten BASE vermeld (anders label "intern gebruik").
2. Zoek CX/TOPY/WIDTH in placements-csv voor deze BASE; ontbreekt → maak 1 testplaatsing op 600 px preview, laat student akkoord geven, schrijf waarden in een nieuwe placements-csv.
3. Draai `scripts/foto-mockup.sh BASE PRINT CX TOPY WIDTH OUT [OPACITY]`. Vereist ImageMagick 6 (`convert`, `identify`).
4. Output: `<outputmap>/<product>-<design>-<positie>.jpg`. Overschrijf nooit bestaande bestanden; kies nieuwe naam.
5. Controleer visueel (crop 600×500 rond de print): print volgt plooien, geen harde rand, niet buiten de stof, tekst leesbaar.

## Output
jpg-mockup(s) + regel in placements-csv + korte notitie (input, waarden, controle, rechtenstatus).

## Controle / acceptatie
- Zelfde input → vrijwel gelijk aan bewezen voorbeeld fm-010-back-flat.jpg (RMSE < 0,5%; inktkorrel is willekeurig).
- Tweede product (andere BASE) → plaatsing binnen de stof, leesbaar.
- Fout-proef: PRINT zonder transparantie → stop met melding, geen output.

## Escalatie
- Onbekende rechten BASE → "intern gebruik, niet publiceren".
- Print valt buiten stof of op naad → student laten kiezen.
- Geen ImageMagick → BLOCKED, niets installeren zonder toestemming.

## Grenzen
Alleen lokaal werk. Geen upload naar Shopify/Meta of publicatie zonder aparte autorisatie.
