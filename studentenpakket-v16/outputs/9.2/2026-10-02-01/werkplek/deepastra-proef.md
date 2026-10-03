# DeepAstra/DeepSeek-proef (les 066 · 9.2)
**Status: BLOCKED** — geen DeepAstra- of DeepSeek-route ingesteld (start/INSTALLATIE.md noemt ze niet; geen env-variabele, CLI of skill aanwezig; student bevestigt 2026-10-03). Geen integratie nagebouwd.

## Afgebakende taak (oefeninput, publiek deelbaar)
Bron: voorbeelden/oefenmerk.md (fictief). Schrijf voor "pot and refill starter kit" vier bestanden: title.txt, seo-title.txt, meta.txt, body.html.

### Prompt voor de tweede route (letterlijk gebruiken)
```
Fictief merk "Oefenmerk": starter = pot + eerste refill; volgende leveringen = alleen refill.
Testprijzen €49 (starter) en €29 per maand (refill) zijn rekenaannames, geen aanbod.
Geen formule-, ingrediënt- of gezondheidsclaims.
Schrijf in het Engels: (1) producttitel met "pot and refill starter kit",
(2) SEO title ≤ 60 tekens die begint met "Pot and Refill Starter Kit",
(3) meta description ≤ 160 tekens met het woord "refill",
(4) producttekst ≥ 250 woorden in HTML met <p> en <h2>, alleen bovenstaande feiten.
Geef de vier delen apart.
```

## Outputcriteria (meetbaar)
seo-check.py `<map> "pot and refill starter kit" "refill" "formula claim,health,cure,organic,guarantee"` → alle 12 OK, plus handmatig: geen verzonnen feiten (ingrediënten, levertijd, maten), prijzen gelabeld als test.

## Vergelijking
| Criterium | Hoofdmodel (deze sessie) | Tweede route |
|---|---|---|
| seo-check | v1: 10/12 (FOUT: "formula claim", "health" — in ontkennende zinnen) → v2: 12/12 | BLOCKED |
| Verzonnen feiten | geen | BLOCKED |
| Prijs als test gelabeld | ja | BLOCKED |
| Herstelwerk | 1 ronde (ontkennende claimzinnen herschreven) | BLOCKED |
| Tijd | ≈ 2 min (2 calls) | BLOCKED |
| Tokens / kosten | onbekend | BLOCKED |

Output hoofdmodel: hoofdmodel/ (v2 actief, v1 bewaard).

## Leerpunt
seo-check controleert op woorden, niet op betekenis: ook "no health claims" wordt FOUT. Gevolg: claimgrenzen niet als ontkenning in klanttekst zetten, of de check met een menselijke review combineren.

## Om te deblokkeren
Route instellen in Hermes/Codex of chat.deepseek.com met eigen account (geen sleutel in chat of Git) → prompt hierboven uitvoeren → output in map `tweede-route/` → zelfde seo-check → kolom invullen.

## Besluit student (stap 5)
seo-check aangepast (pakket C v0.1.1): ontkennende zin → LET OP i.p.v. FOUT. Getest: v1 hoofdmodel → 2× LET OP, exit 0; positieve claim 'It improves your health.' → FOUT, exit 1; v2 → schoon.
