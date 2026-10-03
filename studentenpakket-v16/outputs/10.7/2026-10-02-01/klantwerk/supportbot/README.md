# Supportbot-demo — Visionair Society (les 082 · 10.7)
**DEMO** · regelgebaseerd (geen AI-generatie) · antwoorden uitsluitend uit `kennisbank.json` en TEST-orders · **geen live ordertoegang** (geen Shopify-koppeling getest) · niets verstuurd.

## Bestanden
| Bestand | Wat |
|---|---|
| index.html | chat-demo (openen in browser) |
| bot.js | logica: medewerker/klacht → overdracht · ordervraag → ordernummer nodig → TEST-order · onderwerp → kennisbank · OPEN of onbekend → overdracht |
| kennisbank.json | **bewerkbare** kennisbasis (kopie van les 3.4; 5 items, elk met bron) |
| data.js | gegenereerd uit kennisbank.json + outputs/3.4/.../testdata/orders.csv, leveringen.csv |
| testresultaten.txt | uitkomst 9 testvragen |

## Bronverwijzing
Elk antwoord toont de bron: KB-id + oorspronkelijke bron (bv. "VS-KB-03 · Tapstitch UT0268 maattabel (les 3.1)") of "TEST-orders (les 3.4) · geen live ordertoegang".

## Tests (stap 3)
| Soort | Vraag | Uitkomst |
|---|---|---|
| Productvraag | "How does the fit run…" | KB-03 maat ✔ |
| Productvraag | "Will you restock size M?" | KB-02 restock ✔ |
| Ordervraag | "Where is my order TEST-VS-002?" | status uit TEST-order ✔ |
| Ordervraag (afwijking) | TEST-VS-003 verzonden zonder tracking | antwoord + escalatie ESC-001 ✔ |
| Ontbrekende info | "Where is my order?" | vraagt ordernummer ✔ |
| Onbekend ordernummer | TEST-VS-999 | overdracht, niet gokken ✔ |
| Kennisbank OPEN | verzendtijd | overdracht (KB-04 is OPEN) ✔ |
| Medewerker-overdracht | "talk to a human, complaint" | overdracht ESC-004 ✔ |
| Niet ondersteund | custom hoodie | overdracht ✔ |

## Updateprocedure kennisbank
1. Wijzig of voeg toe in `kennisbank.json`: `{"id":"VS-KB-06","onderwerp":"...","antwoord":"...","bron":"..."}` — altijd met bron; onbevestigd = antwoord laten beginnen met `OPEN` (bot draagt dan over).
2. Nieuw onderwerp? Voeg een zoekpatroon toe in `TOPICS` in bot.js.
3. Draai opnieuw de generatie van data.js (zie commando onderaan) en de 9 testvragen.
4. Laat een mens elk nieuw antwoord lezen vóór gebruik.
Commando data.js: zie les-log 2026-10-03 (python: kennisbank.json + orders.csv → data.js).

## Beperkingen / vóór live
- Ordervraag gebruikt alleen ordernummer → live: ook e-mail/postcode verifiëren (privacy).
- Echte orders: Shopify-koppeling read-only bouwen en testen; tot dan "geen live ordertoegang".
- Verzendtijden (KB-04) en ruilbeleid (KB-05) zijn OPEN → altijd overdracht.
