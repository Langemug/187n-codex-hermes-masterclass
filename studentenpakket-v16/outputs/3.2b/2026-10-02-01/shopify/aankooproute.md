# Aankooproute · Les 033 (3.2b)

Keuze student: **B — alleen voorbereiden**. Geen testbestelling in de echte winkel; geen testmodus aangezet.
Theme: Visionair Terminal v0.1 (preview), UNPUBLISHED. Testproduct: The Founding Member Hoodie (DRAFT), S–2XL €64,95.

## Stap 2 · Productform → winkelmand (codecontrole)
| Onderdeel | Hoe | Status |
|---|---|---|
| Productform | `{% form 'product' %}` met hidden `id` = geselecteerde variant | OK (code) |
| Variantkeuze | Radio per optie → JS zoekt variant in `product | json`, zet `id`, prijs, beschikbaarheid, `?variant=` | OK (code) |
| Uitverkocht | Knop disabled + "SOLD OUT" bij `available:false` | OK (code) |
| Aantal op productpagina | Geen veld → Shopify voegt 1 toe | Bewuste keuze student: zo laten (1 per klik, aantal aanpasbaar in mandje) |
| Toevoegen | AJAX `POST /cart/add.js`, foutmelding van Shopify zichtbaar (role=alert) | OK (code) |
| Mandje | `/cart.js` render, +/−/× via `/cart/change.js`, focus blijft | OK (code) |
| Cartpagina | `updates[]` + UPDATE, CHECKOUT-knop | OK (code) |
| Checkout | Shopify-checkout via `name="checkout"`; geen eigen checkoutcode | OK (code) |

## Stap 3 · Selling plans
Geen abonnement → er wordt geen `selling_plan` meegestuurd. Correct.

## Stap 4–5 · Testbestelling en ordercontrole
| Test | Status |
|---|---|
| Variant M toevoegen → juiste variant in checkout | NIET_UITGEVOERD |
| Aantal wijzigen in mandje → totaal klopt | NIET_UITGEVOERD |
| Testbetaling geslaagd → order met juiste variant/SKU | NIET_UITGEVOERD |
| Testbetaling afgewezen → nette fout | NIET_UITGEVOERD |
| Orderbevestigingsmail ontvangen | NIET_UITGEVOERD |
Reden: product is DRAFT (keuze les 032) en de winkel is productie; testmodus niet toegestaan voor de cursus.
Uitvoeren in een oefen-/ontwikkelwinkel (Shopify Partners) of bewust bij livegang.

## Stap 6 · Releasecheck (vóór publiceren)
- [ ] Productfoto's geüpload
- [ ] Verzendtarieven + levertijd bevestigd
- [ ] Nummering per hoodie bij Tapstitch bevestigd
- [ ] Contact-, verzend-, retour- en privacypagina's
- [ ] Oude VS v31-sections uit preview-theme verwijderd
- [ ] Testbestelling (tabel hierboven) geslaagd
- [ ] Product(en) bewust op Actief + Webshop
- [ ] Theme publiceren alleen op expliciete opdracht van de student
Status: concept · niet gepubliceerd.
