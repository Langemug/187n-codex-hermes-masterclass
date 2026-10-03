# 06 · Review samenhang campagne A (Reviewer, onafhankelijk) — 2026-10-03
Gelezen: 00-offerbrief.md t/m 05-meetplan.md (volledig). Alleen review; niets aangepast in 01–05.

## Per onderdeel
| Onderdeel | Oordeel | Regel / reden |
|---|---|---|
| 01 Advertenties – static ads | AANPASSEN | ad-3 subregel "Black. Boxy. S–2XL." botst met 04 #1 (maat M sold out [TEST]); maatvermelding uit ad-3 halen of S, L, XL, 2XL. Rest (hook, CTA €64,95, verloop) klopt. |
| 01 Advertenties – reel | OK | Hook/CTA/verloop gelijk aan offerbrief; geen maten, geen verboden claims. Claimcheck-regel is een "niet gebruiken"-notitie, geen claim. |
| 01 Advertenties – UTM | AANPASSEN | `utm_source=instagram&utm_medium=paid_social&utm_content=static-ad-1…` wijkt af van 05 (`meta`/`paid`/`A1…A3`) en 03 (`campagne-a`). Eén conventie kiezen. |
| 02 E-mail – mail 1 | AANPASSEN | "Sizes S–2XL" (M-risico, 04 #1). "City and date: TBA" is geen verboden claim (geen stad/datum genoemd) – OK. Verboden-lijst onderaan = notitie, OK. |
| 02 E-mail – mail 2 | AANPASSEN | Idem "Sizes S–2XL". Timing (7 d na pop-up, bij live productpagina) past bij verloop. CTA-link mist UTM (`utm_source=klaviyo&utm_medium=email&utm_campaign=vs-drop001-a`). |
| 03 Storefront – hero | AANPASSEN | "Same hoodie, same price" klopt alleen voor NL (UK/US €74,95 ≠ pop-up-prijs?) → "same price" is ongedekte prijsclaim; schrappen of "€64,95 (NL)". |
| 03 Storefront – #compare | AANPASSEN | Klanttekst "lidnummer online = TBA" noemt online lidstatus in klanttekst; offerbrief verbiedt online lidstatus/eigen nummer → regel weglaten i.p.v. TBA tonen. |
| 03 Storefront – product.html | AANPASSEN | Maten S–2XL; M moet sold out/uitgeschakeld (04 #1) — zelfde besluit als ads/mails. |
| 03 Storefront – aankondigingsbalk | OK | "AMSTERDAM" eruit, geen datum. "NUMBERED · NO RESTOCK" staat als te-verwijderen notitie, niet als nieuwe claim — OK, mits echt verwijderd vóór campagne. |
| 03 Storefront – landings-UTM | AANPASSEN | `utm_source=meta&utm_medium=paid&utm_campaign=campagne-a` ≠ `vs-drop001-a` (05). Orders vallen dan buiten meting (05 metric 5). |
| 04 Operations | OK | Risico's helder, relatieve deadlines, [TEST] gemarkeerd. Maar #1/#3 zijn niet doorgevoerd in 01/02/03 (zie inconsistenties). |
| 05 Meetplan | AANPASSEN | Inhoud solide; utm_content `A1|A2|A3` en ontbrekende reel-waarde afstemmen met 01; mailnamen (`utm_content`) vastleggen. |

## Verboden-claim-scan (klanttekst vs notitie)
| Zoekterm | Gevonden in klanttekst? | Gevonden als notitie |
|---|---|---|
| member number / own number / lidnummer | Ja: 03 #compare "lidnummer online = TBA" (klantzichtbaar) | 03 hero-uitleg (huidige zin weglaten), 02 weglatenlijst |
| restock | Nee (alleen bestaande site-tekst die 03 laat verwijderen) | 01 claimcheck, 02, 03, 04 |
| 500 gsm / materiaal | Nee | 01, 02, 03 |
| stad/datum | Nee ("City and date: TBA" = geen claim) | 03 (Amsterdam verwijderen) |
| andere prijzen | 02 noemt UK/US €74,95 — toegestaan volgens offerbrief; 03 "same price" ongedekt | 01 "niet mixen" |

## Inconsistenties tussen onderdelen
1. **UTM drie varianten**: 01 `instagram/paid_social/static-ad-N`, 03 `meta/paid/campagne-a`, 05 `meta/paid/vs-drop001-a/A1–A3`. Meting (05) mist dan verkeer uit 03-links.
2. **Maat M**: 04 zegt M sold out → geen "S–2XL"; 01 (ad-3), 02 (mail 1+2) en 03 (product.html) noemen S–2XL.
3. **Prijs in één uiting**: 01 zegt "niet mixen NL/UK-US"; 02 noemt beide prijzen in dezelfde mail; 03 hero zegt "same price".
4. **Ad-landing**: 01 heeft landings-URL open; 03 stelt `index.html#compare` voor; 02 linkt naar productpagina. Kiezen en in 05 vastleggen.
5. **Online lidstatus**: 02 laat nummer weg, 03 toont "TBA" in #compare.

## Top-5 herstelpunten
1. Eén UTM-conventie (voorstel: die uit 05, `utm_campaign=vs-drop001-a`) en doorvoeren in 01 + 03; utm_content-waarden voor A1–A3, reel en beide mails vastleggen.
2. Maat M-besluit doorvoeren: ad-3 opnieuw (zonder S–2XL), mails "S, L, XL, 2XL" of geen maten, product.html M uitgeschakeld.
3. #compare: regel over online lidnummer verwijderen (geen TBA in klanttekst).
4. Hero 03: "same price" schrappen; NL- en UK/US-prijs gescheiden houden, ook in mails (aparte varianten i.p.v. beide prijzen).
5. Eén landingsdoel kiezen (#compare of productpagina) voor ads en mails, en dat in 05 opnemen.

## Eindoordeel
**AANPASSEN — nog niet klaar voor overdracht.** Hook, CTA, product, verloop en mailtiming zijn consistent en verboden claims zijn grotendeels goed als notitie behandeld. Blokkerend: UTM-mismatch (meting breekt), maat M niet verwerkt, en één klantzichtbare lidnummer-vermelding in 03.
