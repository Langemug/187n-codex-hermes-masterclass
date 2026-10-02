# Alle 500 Visionair-designs terugkrijgen

De 500 printbestanden (PNG, 3600×3600 px, transparante achtergrond, samen ±914 MB) staan niet in Git, want dat is te groot voor de repository. Je kunt ze op twee manieren terugkrijgen.

## 1. Uit de chat
Alle 500 zijn als losse bestanden in het Claude Code-gesprek van 2 oktober 2026 gestuurd (pakketjes van 10). Daar kun je ze opnieuw downloaden.

## 2. Opnieuw maken (altijd mogelijk)
Alles wat nodig is staat in deze map en is gecommit:
- `statement-designs.html`: de bron van alle 500 designs (tekst, stijl, vaste seed)
- `render-prints.mjs`: maakt de PNG's opnieuw
- `prints-md5.txt`: controlegetallen van de originele bestanden

Het resultaat is byte-identiek aan de originelen (getest met design 001, 250 en 500).

Stappen op je Mac (eenmalig Node.js nodig):
```
cd mijn-project/brand/designs
npm install playwright@1
npx playwright install chromium
node render-prints.mjs 1 500
md5 -r prints/*.png   # vergelijk met prints-md5.txt
```
Alleen een paar nodig? Bijvoorbeeld `node render-prints.mjs 481 481`.

Let op: installeer Playwright volgens de projectregels in AGENTS.md (vaste versie, eigen map, geen onbekende scripts). De printbestanden komen in `mijn-project/brand/designs/prints/`; die map wordt niet gecommit.

## Overzicht
- Drops en nummers: `drops/drops.md`
- Overzichtsbladen per drop: `drops/drop-0X-*.jpg`
- Overzichtsbladen per 10: `set-50/sheet-*.jpg`
