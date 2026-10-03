# 02 · E-mailconcepten campagne A, v2 (herstelronde) — E-mailagent (stand-in) — 2026-10-03
Bronnen: 02-email.md (v1, ongewijzigd) · 00-offerbrief.md · 04-operations.md #1 · 05-meetplan.md (UTM) · 06-review.md · 07-bundel-orchestrator.md
Status: LOKAAL CONCEPT — niet verzonden, niet in Klaviyo, niets ingepland.
Trigger/segment leunt op de welcome-flow (bevestigde marketinginschrijving, double opt-in); aparte campagne-trigger is TBA.

## Prijs per markt
Elke mail bestaat in twee varianten met elk één prijs: **NL** (€64,95 incl. btw) en **UK/US** (€74,95). Segmentering op land: TBA. Nooit beide prijzen in één mail.

## Landingsdoel + UTM (conventie 05: `utm_source=klaviyo&utm_medium=email&utm_content=<mailnaam>`)
| Mail | CTA-link |
|---|---|
| M1 | /products/founding-member-hoodie?utm_source=klaviyo&utm_medium=email&utm_campaign=vs-drop001-a&utm_content=M1 |
| M2 | /products/founding-member-hoodie?utm_source=klaviyo&utm_medium=email&utm_campaign=vs-drop001-a&utm_content=M2 |
Domein TBA. NL- en UK/US-variant delen dezelfde link (marktprijs volgt uit de productpagina).

## M1 · Pop-up aankondiging / niet bij de pop-up
- Onderwerp: NOT AT THE POP-UP?
- Preheader: The Founding Member Hoodie. Pop-up in Europe first.
- Segment: bevestigde marketinginschrijving. Uitsluiten: afgemeld · geen marketingtoestemming. Exact segment: TBA.
- Verzendmoment: bij aankondiging van de pop-up (TBA).
- Body:
> Drop 001 is The Founding Member Hoodie.
> Black. Boxy. Sizes: see product page.
> "THE MATRIX CAN'T HOLD ME." on the back. VS logo on the front.
> It starts at a pop-up in Europe. City and date: TBA.
> Not at the pop-up? It goes online 7 days later.
> NL: €64,95 (incl. VAT) · UK/US-variant: €74,95
- CTA NL: **€64,95 · JOIN THE SOCIETY** · CTA UK/US: **€74,95 · JOIN THE SOCIETY** → link M1

## M2 · Online open (7 dagen na pop-up)
- Onderwerp: Not at the pop-up? It's online now.
- Preheader: The Founding Member Hoodie is online.
- Segment: als M1. Uitsluiten ook: heeft gekocht.
- Verzendmoment: 7 dagen na de pop-up, zodra de productpagina online staat.
- Body:
> Not at the pop-up? This one's for you.
> The Founding Member Hoodie is now online.
> Black. Boxy. Sizes: see product page.
> "THE MATRIX CAN'T HOLD ME." on the back. VS logo on the front.
> NL: €64,95 (incl. VAT) · UK/US-variant: €74,95
- CTA NL: **€64,95 · JOIN THE SOCIETY** · CTA UK/US: **€74,95 · JOIN THE SOCIETY** → link M2

(De prijsregel "NL: … · UK/US-variant: …" is een opmaakinstructie: in de NL-mail staat alleen €64,95, in de UK/US-mail alleen €74,95.)

## Bewust weggelaten (offerbrief: verboden)
Lid-/hoodienummer · 500 gsm/materiaal · "no restock"/"back soon" · stad/datum pop-up · schaarste/aantallen/reviews · verzendbeloftes.

## Open (TBA)
Campagnesegment + landsegmentatie NL vs UK/US · pop-up stad/datum · domein · afzender + footer.

## Wijzigingen t.o.v. v1
1. **UTM**: CTA-links hebben nu `utm_source=klaviyo&utm_medium=email&utm_campaign=vs-drop001-a&utm_content=M1/M2` (05-conventie).
2. **Maat M [TEST]**: "Sizes S–2XL" → "Sizes: see product page" in M1 en M2. Vervalt zodra voorraad bevestigd is.
3. **Storefront/#compare**: n.v.t.; mails linken niet naar #compare.
4. **Landingsdoel**: "productpagina (link TBA)" → `/products/founding-member-hoodie` (domein TBA).
5. **Prijs per markt**: "€64,95 (NL) · UK/US €74,95" in één mail vervangen door aparte NL- en UK/US-variant met elk één prijs en eigen CTA.
