# Releaseplan · Visionair storefront preview v0.1 (les 2.5)
Status: CONCEPT-preview, geen echte winkel, demo-mandje zonder betaling.

## Wat wordt uitgebracht
- Bron: `mijn-project/storefront/` (home, productpagina, 6 collectiepagina's, 500 mockups, demo-mandje) + `mijn-project/storefront/experience/` (scroll-experience).
- Versie: commit `a974d60` op `main` → release-versie `storefront-preview-v0.1` = commit `a974d60db8e70149608a9f1c91bdd99cdd427d80`. Tag lokaal gezet; push van tags werd door de sessie-proxy geweigerd, dus de volledige commit-SHA is het vaste meetpunt (tag later zelf pushen of op GitHub aanmaken).

## Doelen (keuze student: A + B)
| Doel | Zichtbaarheid | Status |
|---|---|---|
| A · Claude-artifact (bestaand) | privé link, alleen eigenaar | live: storefront JpPFeQLJMh1z7RP9eHXAkH, experience Hba4Lb74XjxTLkbt59xLYy |
| B · GitHub Pages | **openbaar** voor iedereen met de link | nog niet aan; vereist expliciete toestemming + Pages-instelling in de repo |

### Voorwaarden B (GitHub Pages)
- Repo lijkt privé (niet vindbaar via zoeken). Pages op een privé-repo vereist een betaald GitHub-plan; anders moet de repo of een aparte repo openbaar.
- Openbaar maken betekent: mockups, prijzen en conceptteksten zijn voor iedereen zichtbaar en kunnen geïndexeerd worden.
- Aanpak: GitHub Actions-workflow die alleen `mijn-project/storefront/` publiceert (niet de hele cursusrepo). Pages aanzetten in Settings → Pages → Source: GitHub Actions (doet de eigenaar).

## Herstelroute
1. Fout in preview → vorige versie terugzetten: `git revert <commit>` en opnieuw publiceren; artifact-versie terugzetten via de vorige versie.
2. Pages direct offline: Settings → Pages → Unpublish, of workflow uitschakelen.
3. Tag blijft het vaste meetpunt van wat live stond.

## Checks vóór publicatie
- Klantreis desktop 1440 + mobiel 390: home → collectie → product → maat → JOIN → demo-mandje → +/−/× → sluiten.
- Geen JS-fouten, geen kapotte afbeeldingen, geen horizontale scroll.
- Labels zichtbaar: CONCEPT, DEMO CART, NOT LIVE, mockups.
- Geen secrets of privégegevens in de gepubliceerde map.
