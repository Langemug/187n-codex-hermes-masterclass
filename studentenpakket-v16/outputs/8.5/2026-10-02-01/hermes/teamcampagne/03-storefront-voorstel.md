# 03 · Storefront-voorstel campagne A (rol Website-bouwer) — 2026-10-03
Bron: 00-offerbrief.md · outputs/N15/2026-10-02-01/coding-overdracht.md · 01-bouwbrief-hermes.md · werkversie `outputs/N15/2026-10-02-01/werkversie/`. Alleen voorstel, **niets gebouwd**.

## Bestaande secties die de campagne ondersteunen (templates/index.json)
| Sectie | Waarom bruikbaar | Bron |
|---|---|---|
| `hero` | CTA "JOIN THE SOCIETY" → product.html; sluit aan op campagne-CTA | offerbrief CTA |
| `featured-product` (#drop) | knop "JOIN THE SOCIETY · €64,95" = exacte campagneprijs NL | offerbrief prijs |
| `compare` (#compare, gebouwd N15) | beantwoordt hook "NOT AT THE POP-UP?": zelfde hoodie, zelfde prijs, online 7 dagen later, lidnummer online = TBA | bouwbrief r12/r18/r22/r24 |
| product.html (#member, size S–2XL) | landing na klik; maten S–2XL kloppen met offerbrief | offerbrief product |

## Max 3 wijzigingen voor de campagneperiode
1. **Hero-tekst** — `content/home.json` → sectie `hero` (`text`, `cta_primary`). Tekst: "NOT AT THE POP-UP? Same hoodie, same price — online 7 days after the pop-up." CTA: "€64,95 · JOIN THE SOCIETY". Bron: offerbrief (hook, CTA, verloop). Let op: huidige zin "Your hoodie number is your member number" geldt alleen pop-up; voor online-verkeer weglaten (online lidstatus = verboden claim).
2. **Aankondigingsbalk** — `layout/` header, `.sys`-strook (nu "DROP 001 · POP-UP AMSTERDAM · DATE: TBA"). Tekst: "DROP 001 · POP-UP IN EUROPE · ONLINE 7 DAYS LATER". Bron: offerbrief verloop. "AMSTERDAM" eruit: stad is niet bevestigd (verboden claim).
3. **Landing voor ad-UTM** — ad-links (ad-1..3) naar `index.html?utm_source=meta&utm_medium=paid&utm_campaign=campagne-a#compare`, zodat bezoekers direct op #compare landen (hook → antwoord). Geen nieuwe pagina nodig, geen tracking-script toevoegen. Bron: offerbrief hook + bestaande #compare.

## Wat níet live mag / niet doen
- Theme blijft **unpublished**; alleen werkversie, origineel `outputs/2.3/…/storefront` ongewijzigd.
- Geen publicatie, geen ads inplannen, geen account-wijzigingen.
- Bestaande tekst "NUMBERED · NO RESTOCK" in #drop-meta botst met verboden claim "no restock" → vóór elke livegang verwijderen/vervangen (bv. "ONE HOODIE · DROP 001"); niet in campagneperiode tonen.
- Geen stad/datum pop-up, geen 500 gsm/kwaliteit, geen schaarste/aantallen, geen verzendbeloftes, geen andere prijzen dan NL €64,95 · UK/US €74,95.
- Online lidnummer blijft "TBA — not confirmed yet".
