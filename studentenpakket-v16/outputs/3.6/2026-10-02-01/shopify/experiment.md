# Experiment · Knoptekst productpagina (Les 034 · 3.6)

Status: **concept** — niet geactiveerd. Winkel heeft nog geen actieve producten of verkeer.

## Wat testen we
Eén keuze: de tekst op de koopknop van **The Founding Member Hoodie** (sectie *Product · main*, instelling `Button`).

| | Variant A (controle) | Variant B |
|---|---|---|
| Knoptekst | `JOIN THE SOCIETY` | `ADD TO CART · {variantprijs}` |
| Rest van de pagina | ongewijzigd | ongewijzigd |
| ACCESS GRANTED-animatie | blijft | blijft |

## Hypothese
Als we de prijs en de actie letterlijk op de knop zetten (B), dan klikken meer bezoekers op "in winkelmand", omdat ze direct zien wat er gebeurt en wat het kost. Tegenkracht: A past beter bij het merk en kan sterker voelen voor de doelgroep. We weten het niet; daarom testen.

## Meetplan (vooraf vastgelegd)
- **Primaire maat:** % sessies op de productpagina met *add to cart*.
- **Secundair:** checkout gestart / sessie, conversie (order / sessie).
- **Guardrails** (stoppen of terugdraaien als):
  - conversie (order / sessie) in B duidelijk lager dan A;
  - meer foutmeldingen bij toevoegen of hogere bounce;
  - merkgevoel: feedback dat de pagina "generiek" voelt.
- **Testorders en eigen bezoeken tellen niet mee.**
- **Geen winnaar zonder voldoende echte data.** Vooraf minimum afspreken (bijv. ≥ 2 weken én genoeg orders per variant om een verschil te zien); te weinig data = "geen conclusie".

## Bronnen / input
- Productpagina: `mijn-project/shopify-theme/sections/main-product.liquid` (instelling `cta`).
- Product: founding-member-hoodie (DRAFT), €64,95.
- Shopify-werkboek §8 (Rollouts via Markets > Rollouts; Basic of hoger; experimenten Grow of hoger).

## Stap 3 · Beschikbaarheid Shopify Rollouts (gecontroleerd 2026-10-02)
| Check | Uitkomst | Bron |
|---|---|---|
| Plan winkel | **Basic** (geen dev-store, geen Plus) | Admin API `shop.plan` |
| Rollouts (geplande uitrol) | Beschikbaar vanaf Basic → **ja** | ecom/SHOPIFY-WERKBOEK.md §8 (broncontrole 20-09-2026) |
| Experimenten (A/B) | Vereist Grow of hoger → **nee op Basic** | idem |
| Oefenwinkel | Geen; dit is de productiewinkel | — |
| Theme | Preview-theme is ongepubliceerd; varianten testen kan pas op het live theme | — |
| Liquid-templatewijziging | Valt buiten Rollouts; onze test is een *sectie-instelling* (`cta`) → wel geschikt | werkboek §8 |
| Shopify-docs via API-zoekfunctie | Geen expliciete pagina gevonden; Markets > Rollouts in admin zelf controleren | — |

**Conclusie:** een echte A/B-test kan nu niet (Basic-plan, geen live producten, theme niet live). Opties later: upgrade naar Grow, of een tijdsgebonden vergelijking (A periode 1, B periode 2) — die is zwakker bewijs en wordt zo gelabeld.

## Stap 4 · Conceptuitrol (NIET geactiveerd)
**Voorwaarden vóór start** (alle afvinken): producten Actief + foto's · theme live · testbestelling geslaagd (les 033) · student geeft expliciete opdracht.

### Route 1 · Grow-plan (echte A/B-test)
1. Markets > Rollouts → nieuw experiment op het live theme.
2. Variant B: sectie *Product · main* → `Button` = `ADD TO CART · {variantprijs}`. Niets anders wijzigen.
3. Verdeling 50/50, looptijd minimaal 14 dagen.
4. Dagelijks guardrails bekijken (zie meetplan).

### Route 2 · Basic-plan (na elkaar vergelijken, zwakker bewijs)
1. Periode 1 (14 dagen): A `JOIN THE SOCIETY`. Noteer sessies, add-to-cart %, checkouts, orders.
2. Rollout op vaste datum/tijd: knop → B. Periode 2 (14 dagen) zelfde metingen.
3. Geen campagnes/acties starten of stoppen tijdens de test; noteer wat er wél gebeurde (posts, pop-up).
4. Label uitkomst als "indicatie", niet als bewezen winnaar.

### Evaluatie
- Bron: Shopify Analytics (productpagina-sessies, add to cart, checkout, orders); testorders eruit.
- Beslisregel: B blijft alleen als add-to-cart % hoger is **en** orders/sessie niet lager. Twijfel = A houden.
- Resultaat vastleggen hier, met periodes, aantallen en conclusie (of "geen conclusie").

### Herstelplan
- Rollouts: experiment stoppen → live theme toont weer A.
- Handmatig: theme editor → *Product · main* → `Button` terug op `JOIN THE SOCIETY` → Opslaan.
- Controle: productpagina openen, knoptekst + ACCESS GRANTED werken.
- Let op: terugzetten van het theme maakt orders of productwijzigingen niet ongedaan.

Status: concept · niets geactiveerd · geen live wijziging.

## Stap 5 · Keuze student (2026-10-02)
- Primaire maat: **add-to-cart %** (bevestigd).
- Route: **Basic · route 2** (na elkaar vergelijken, uitkomst = indicatie).
- Status: concept, start pas na livegang en expliciete opdracht.

## Review 2026-10-03 (student)
- Variant B gecorrigeerd: vaste "€64,95" → `ADD TO CART · {variantprijs}` (in Liquid: `{{ product.selected_or_first_available_variant.price | money }}`, JS werkt bij variantwissel bij). Reden: UK/US €74,95 — vaste prijs zou verkeerd zijn.
- Plan goedgekeurd → completed. Activeren blijft aparte expliciete autorisatie.
