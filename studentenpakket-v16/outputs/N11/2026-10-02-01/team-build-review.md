# Team build + review · productpagina The Founding Member Hoodie (N11)
Status: CONCEPT. Werk op `build/storefront-kopie/`; echte storefront (`mijn-project/storefront/`) niet gewijzigd.

## Drie outputs (eigen map, geen gedeelde bestanden)
| Agent | Output | Start → eind (UTC) | Duur |
|---|---|---|---|
| Research | `research/research.md` (8 inzichten, bron-URL's) | 06:47:56 → 06:48:53 | ~1,0 min |
| Bouwer | `build/storefront-kopie/`, `build/build-notes.md`, screenshots | 06:47:56 → 06:48:54 | ~1,0 min |
| Reviewer | `review/review.md` + screenshots | 06:47:56 → ~06:50:10 | ~2,3 min |

Geen gelijktijdige edits in hetzelfde bestand: research en review schreven alleen in hun eigen map; alleen de bouwer schreef in de kopie. Samenvoegen deed de hoofdsessie ná afloop.

## Bronbeoordeling (research)
- WebSearch werkte, WebFetch geblokkeerd (baymard.com, ftc.gov). Inhoud uit zoeksamenvattingen → betrouwbaarheid meestal "midden". Cijfers (Baymard 64%/43%/58%) eerst op de URL controleren vóór gebruik in copy.
- Geen controleerbare bron voor "lidmaatschap/community verhoogt conversie" → niet als feit gebruikt.

## Conflicten en hoe opgelost
| # | Conflict | Besluit |
|---|---|---|
| 1 | Bouwer verborg op mobiel "CONCEPT: DIGITAL MOCKUPS" om ruimte te winnen ↔ DESIGN.md: mockups nooit als echt product tonen | Teruggezet (kleiner lettertype). CTA blijft boven de vouw: onderkant 788px op 390×844. |
| 2 | Reviewer #1: CTA op mobiel pas op y≈1152 (huidige pagina) | Opgelost door bouwer in de kopie (CTA boven de vouw). |
| 3 | Research #2: maatgids-link bij maatkeuze ↔ bouwer verplaatste maatgids onder de CTA | Link "SIZE GUIDE ↓" naast SIZE toegevoegd. |
| 4 | Research #1 verzendinfo bij CTA | Bouwer: vertrouwensregel met "Shipping: to be confirmed". Overeen. |
| 5 | Research #3 "nummer als echte schaarste" + bouwer zet nummer groot ↔ Reviewer #5: nummering niet bevestigd | **Open, besluit student**: tekst mag pas live als Tapstitch unieke nummering bevestigt; anders afzwakken. |

## Nog open uit review (niet in deze les opgelost)
- Wachttijd ACCESS GRANTED ~1,4 s, twee keer in de route (midden).
- Focus valt weg na +/− in mandje; geen focus trap in mandje (midden, toegankelijkheid).
- Focusring 1px i.p.v. 2px (laag); maat L standaard geselecteerd (laag); contrast gedimde labels (laag).
- "UK/US €74,95" zonder uitleg (midden).

## Tijdvergelijking
- Parallel: ~2,3 min (langste agent) + samenvoegen/herstel ~2 min = **~4,5 min**.
- Na elkaar (zelfde werk): 1,0 + 1,0 + 2,3 = 4,3 min + samenvoegen ~1 min = **~5,3 min**.
- Winst klein bij korte taken; herstel (conflict 1 en 3) kostte extra tijd. Parallel loont vooral bij lange, echt onafhankelijke taken.

## Bewijs samengevoegde versie
`build/storefront-kopie/product.html` gebouwd zonder fouten; 390×844: scrollWidth 390, CTA-onderkant 788px, mockup-label zichtbaar, 0 pageerrors. Screenshot: `merged-390.png`.

## Overgenomen in echte storefront (besluit student: C)
- Bouwer-verbeteringen + conflictoplossingen → `mijn-project/storefront/` (content JSON, main-product, storefront.css).
- Review-fixes: links navigeren direct (geen dubbele wachttijd); ACCESS GRANTED 0,7 s alleen op koopknop + aria-live melding; focus blijft op +/−/× in mandje; focus trap in mandje; focusring 2px.
- Test (1440 en 390): toevoegen ~0,85 s tot mandje open, CTA-onderkant 574/788 px, focus "More" behouden, Tab blijft in mandje, geen horizontale scroll, 0 pageerrors.
- Blijft open: nummering-claim bevestigen bij Tapstitch; "UK/US €74,95" uitleg; contrast gedimde labels; standaard maat L.
