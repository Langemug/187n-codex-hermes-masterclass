# Meetplan campagne A — "NOT AT THE POP-UP?" (les 093) — 2026-10-03
Bronnen: 00-offerbrief.md · outputs/3.5/2026-10-02-01/workflows/analytics/definities.md + metrics.json (TESTDATA) · outputs/N28/2026-10-02-01/campagne-oplevering.md.
Status: CONCEPT. Niets ingesteld in Shopify, Meta of Klaviyo. Geen benchmarks gebruikt.

## Doelvraag
Levert campagne A (online verkoop van The Founding Member Hoodie, 7 dagen na de pop-up) betaalde orders op met acceptabele netto omzet en refund-ratio, en welke ad (variant) brengt de bezoekers die kopen?

## Metrics (definities exact uit definities.md waar beschikbaar)
| # | Metric | Definitie | Bron |
|---|---|---|---|
| 1 | Bruto omzet (incl. btw) | Som bedrag van orders met status betaald + terugbetaald. Open orders tellen niet. | Shopify |
| 2 | Netto omzet (incl. btw) | Bruto − refunds = som status betaald. | Shopify |
| 3 | Refund-ratio | Refunds (som status terugbetaald) / bruto omzet. | Shopify |
| 4 | Brutomarge op productkosten (NL) | Netto omzet excl. btw (€64,95/1,21 per NL-order) − productkosten (€27,21/st). **Geen winst.** UK/US-orders (€74,95) apart, niet in marge. | Shopify (+ kostprijs uit definities.md) |
| 5 | Orders per utm_content | Aantal orders (betaald + terugbetaald) met utm_campaign=vs-drop001-a, uitgesplitst per utm_content. Telling; geen definitie in definities.md, hier vastgelegd. | Shopify (UTM/referrer) |
| 6 | Linkklikken + besteding per ad | Zoals gerapporteerd door Meta; alleen indicatief, niet gelijk aan Shopify-orders. | Meta |
| 7 | E-mailklikken naar productpagina | Klikken in Klaviyo-mail met utm_campaign=vs-drop001-a; alleen indicatief. | Klaviyo |

Niet gemeten: winst, MRR/churn (n.v.t., geen abonnement).

## UTM-conventie
- `utm_campaign=vs-drop001-a` (vast, kleine letters, voor alle kanalen).
- Meta: `utm_source=meta&utm_medium=paid&utm_content=<A1|A2|A3>`
- Klaviyo: `utm_source=klaviyo&utm_medium=email&utm_content=<mailnaam>`
- Let op: N28-oplevering gebruikt nog `utm_campaign=fmh_launch` → vervangen vóór aanmaken (student beslist).

## Nulmeting
| Gegeven | Waarde |
|---|---|
| Echte orders/omzet vóór campagne | onbekend (metrics.json = 6 verzonnen TESTDATA-orders, geen nulmeting) |
| Meta-besteding bestaand account | €8,90 laatste 90 d (campagne "VS – Sales Test v1 – EU5"; resultaten onbekend) |
| Conversieratio productpagina | onbekend (pagina nog DRAFT) |
| Klaviyo-lijstgrootte / klikratio | onbekend |
| Pixel-events | onbekend (niet gecontroleerd) |
| Productkosten | €27,21/st (bekend) |
| Verzend-, betaal-, Shopify-, ad-, verpakkings-, retour-, pop-upkosten | onbekend |
| btw/invoer UK/US | onbekend |

## Beslisregels (vóór conclusie)
- Geen uitspraak over campagne A vóór **≥ 30 orders** (betaald + terugbetaald) met utm_campaign=vs-drop001-a én minimaal 7 dagen looptijd online.
- Geen winnaar tussen A1/A2/A3 vóór **≥ 10 orders per variant**; daaronder alleen "nog geen verschil vast te stellen".
- Refund-ratio pas beoordelen bij **≥ 20 bruto orders**; open orders uitsluiten.
- Meta- of Klaviyo-cijfers nooit als omzet rapporteren; omzet komt alleen uit Shopify.
- Orders zonder UTM tellen apart als "niet toegeschreven", niet bij een variant.
(Drempels zijn zelfgekozen minimumaantallen, geen benchmarks; student bevestigt.)

## Wat we NIET concluderen
- Geen winst of ROAS-winstgevendheid (overige kosten onbekend).
- Geen effect van de pop-up op online verkoop (geen controlegroep, stad/datum TBA).
- Geen vergelijking met "markt" of branchegemiddelden (geen bron).
- Geen marge op UK/US-orders (btw/invoer onbekend).
- Geen conclusies uit TESTDATA (metrics.json) over echte prestaties.
- Geen causaal verband ad → aankoop op basis van Meta-attributie alleen.
