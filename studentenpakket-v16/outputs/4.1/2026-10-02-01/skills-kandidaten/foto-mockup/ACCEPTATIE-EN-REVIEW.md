# Acceptatieproef + bronreview — foto-mockup (les 059 stap 4)

## Acceptatieproef
| Proef | Verwacht | Resultaat |
|---|---|---|
| Reproductie fm-010-back-flat (tapstitch-2, design 010, 750/830/440) | ≈ bewezen beeld | RMSE 0,197% — visueel gelijk; verschil = willekeurige inktkorrel. GESLAAGD |
| Foutproef: print zonder transparantie | stop, geen output | v1: maakte tóch output (FOUT). v2: "STOP: print heeft geen transparantie", exit 3, geen bestand. GESLAAGD na fix |
| Bestaande outputnaam | niet overschrijven | v2: exit 4. GESLAAGD |

Correctie v1 → v2 (scripts/foto-mockup.sh; v1 bewaard als foto-mockup.v1.sh): argument-, bestands-, transparantie- en overschrijfcontrole toegevoegd.

## Bronreview scripts/foto-mockup.sh (v2)
- Netwerk: geen (geen curl/wget/http). Secrets/tokens: geen. sudo/eval: geen.
- Bestandsschrijf: alleen $OUT en eigen mktemp-map; `rm -rf $T` raakt alleen die tijdelijke map (T altijd gezet via mktemp vóór gebruik).
- Dependencies: ImageMagick 6 (convert, identify, compare) — reeds aanwezig, niets geïnstalleerd.
- Hooks/submodules: geen.
- Risico laag. Restpunt: geen quoting van $T (mktemp-pad zonder spaties, acceptabel).

## SkillSpector-scan
NIET UITGEVOERD — SkillSpector is in deze omgeving niet beschikbaar. Volgens AGENTS.md blokkeert een ontbrekende scan het laden.
**Status: kandidaat · BLOCKED voor laden tot scan.**

## Stap 5 — Proef tweede product
Input: design 009 "CERTIFIED GLITCH." op tapstitch-4-zwart.jpg (rug, model), placement uit csv 760/730/420.
Output: outputs/4.1/2026-10-02-01/proef-product2/vs-009-back-model.jpg + proef.jpg (overzicht + crop).
Controle: binnen de stof, gecentreerd tussen schouderbladen, tekst leesbaar, korrel zichtbaar. GESLAAGD.
Beperking: zelfde blank (UT0268) met ander design; een ander blank-type (bv. T-shirt) heeft nog geen placement → zou testplaatsing-route (stap 2 SKILL.md) vereisen.
Keuze student (stap 6): plaatsing goedgekeurd.
