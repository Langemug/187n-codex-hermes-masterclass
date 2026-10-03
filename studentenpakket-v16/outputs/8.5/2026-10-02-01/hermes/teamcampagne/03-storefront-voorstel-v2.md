# 03 · Storefront-voorstel campagne A, v2 (herstelronde) — rol Website-bouwer — 2026-10-03
Bronnen: 03-storefront-voorstel.md (v1, ongewijzigd) · 00-offerbrief.md · 04-operations.md #1 · 05-meetplan.md · 06-review.md · 07-bundel-orchestrator.md · werkversie `outputs/N15/2026-10-02-01/werkversie/`. Alleen voorstel, **niets gebouwd**.

## Bestaande secties die de campagne ondersteunen
| Sectie | Waarom bruikbaar |
|---|---|
| `hero` | CTA "JOIN THE SOCIETY" → productpagina |
| `featured-product` (#drop) | knop "JOIN THE SOCIETY · €64,95" (NL-prijs) |
| `compare` (#compare) | "zelfde hoodie, same price per market, online 7 dagen later". De rij "Member number" is door de eigenaar **verwijderd** (uitgevoerd in `outputs/N15/2026-10-02-01/werkversie`); geen inhoud meer, wordt niet meer gebruikt. |
| productpagina `/products/founding-member-hoodie` | **enige landingsdoel** voor ads en mails |

## Max 3 wijzigingen voor de campagneperiode
1. **Hero-tekst** — `content/home.json` → `hero`. Tekst: "NOT AT THE POP-UP? Same hoodie, same price per market — online 7 days after the pop-up." CTA: "JOIN THE SOCIETY" → `/products/founding-member-hoodie` (prijs op knop alleen per markt: NL €64,95 / UK/US €74,95, nooit samen). Zin "Your hoodie number is your member number" weglaten (online lidstatus = verboden claim).
2. **Aankondigingsbalk** — `.sys`-strook: "DROP 001 · POP-UP IN EUROPE · ONLINE 7 DAYS LATER" ("AMSTERDAM" eruit, stad niet bevestigd).
3. **Maatweergave productpagina** — maat M uitverkocht [TEST] (04 #1): variant M uitgeschakeld/sold out, geen "S–2XL" in klanttekst; waar nodig "Sizes: see product page" of alleen beschikbare maten via de variantkiezer. Geen "restock"/"back soon". Vervalt zodra voorraad bevestigd is.

## Landingsdoel + UTM
Ads en mails landen op `/products/founding-member-hoodie` (niet meer `index.html#compare`). UTM volgens 05: Meta `utm_source=meta&utm_medium=paid&utm_campaign=vs-drop001-a&utm_content=A1|A2|A3`; Klaviyo `utm_source=klaviyo&utm_medium=email&utm_campaign=vs-drop001-a&utm_content=M1|M2`. Geen tracking-script toevoegen.

## Wat níet live mag / niet doen
- Theme blijft **unpublished**; alleen werkversie, origineel ongewijzigd.
- Geen publicatie, geen ads inplannen, geen account-wijzigingen.
- "NUMBERED · NO RESTOCK" in #drop-meta vóór elke livegang verwijderen/vervangen (bv. "ONE HOODIE · DROP 001").
- Geen stad/datum, 500 gsm/kwaliteit, schaarste/aantallen, verzendbeloftes, online lidnummer; prijzen alleen per markt (NL €64,95 · UK/US €74,95), niet gemixt.

## Wijzigingen t.o.v. v1
1. **UTM**: `utm_campaign=campagne-a` → `vs-drop001-a` volgens 05; mails M1/M2 toegevoegd.
2. **Maat M [TEST]**: "size S–2XL" uit klanttekst; M sold out; nieuwe wijziging #3 (vervangt oude landings-wijziging). Vervalt zodra voorraad bevestigd is.
3. **Storefront-tekst**: "same price" → "same price per market"; #compare-rij "Member number" vermeld als door eigenaar verwijderd (werkversie N15), niet meer als inhoud of "TBA".
4. **Landingsdoel**: `index.html#compare` → productpagina `/products/founding-member-hoodie` voor ads én mails.
5. **Prijs per markt**: CTA-prijs per markt gescheiden (NL €64,95 / UK/US €74,95).
