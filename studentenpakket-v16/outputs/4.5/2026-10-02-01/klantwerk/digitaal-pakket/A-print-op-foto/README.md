# Print op foto — mockup-pakket (v0.1.0)

**Doel:** je eigen print realistisch op een blanke productfoto zetten (plooien, schaduw, inktkorrel) — zonder fotoshoot of Photoshop.
**Voor wie:** POD-starters met een eigen merk en eigen prints (PNG met transparantie).
**Resultaat:** een JPG-mockup per print/positie, klaar voor interne review of social (zie rechten).

## Wat je nodig hebt
- Computer met terminal (macOS/Linux; Windows via WSL) en **ImageMagick 6** (`convert`, `identify`). Geen accounts, geen API, geen kosten.
- Een AI-agent (Claude Code, Codex of vergelijkbaar) — optioneel; het script werkt ook los.
- **Jouw eigen** blanke productfoto mét gebruiksrecht, en jouw eigen print.

## Inhoud
| Bestand | Wat |
|---|---|
| SKILL.md | instructie voor je agent (trigger, input, stappen, controle, escalatie) |
| scripts/foto-mockup.sh | het script |
| prompts.md | 3 startprompts |
| voorbeeld/ | demo-blank (zelf gegenereerd), demo-print, placements-demo.csv, verwacht-demo.jpg |
| MANIFEST.md · CHANGELOG.md · VOORWAARDEN.md | inhoud, versie, gebruik en support |

## Walkthrough (10 min)
1. Pak de map uit en open een terminal in deze map.
2. Test met het voorbeeld:
   `bash scripts/foto-mockup.sh voorbeeld/blank-demo.jpg voorbeeld/print-demo.png 750 600 520 mijn-eerste-mockup.jpg`
3. Open `mijn-eerste-mockup.jpg` en vergelijk met `voorbeeld/verwacht-demo.jpg`.
4. Eigen foto: zoek de positie (CX = midden van de print in px, TOPY = bovenkant, WIDTH = breedte). Begin met een testrender en schuif tot het klopt; noteer de waarden in een eigen placements-csv.
5. Of laat je agent het doen: zie prompts.md.

## Wat het script weigert (met reden)
print zonder transparantie (exit 3) · bestaand outputbestand (exit 4) · ontbrekende bestanden (exit 2).

## Grenzen
- Geen garantie op fotorealisme; altijd zelf bekijken (crop rond de print).
- Leveranciersfoto's (bv. van je POD-partner) alleen gebruiken als je daar recht op hebt.
- Het script uploadt of publiceert niets.
