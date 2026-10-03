# 01 · Advertenties campagne A, v2 (herstelronde) — Contentagent (stand-in) — 2026-10-03
Status: CONCEPT. Niet publiceren, niet inplannen en niet in accounts zetten.
Bronnen: 01-advertenties.md (v1, ongewijzigd) · 04-operations.md #1 · 05-meetplan.md (UTM) · 06-review.md · 07-bundel-orchestrator.md

## (a) Static ads (1080×1350)
Alle drie hebben het label "CONCEPT · MOCKUP" en de CTA-knop "€64,95 · JOIN THE SOCIETY" (alleen NL-variant; voor UK/US is een aparte variant met €74,95 nodig, niet mixen).
| Ad | Pad | Headline | Subregel |
|---|---|---|---|
| A1 (ad-1) | outputs/8.4/2026-10-02-01/hermes/campagne-overdracht/02-visual-v2/ad-1.png | NOT AT THE POP-UP? | Pop-up in Europe first. / Online 7 days later. |
| A2 (ad-2) | outputs/8.4/2026-10-02-01/hermes/campagne-overdracht/02-visual-v2/ad-2.png | NOT AT THE POP-UP? | 7 days later. Design 010 on the back. / THE MATRIX CAN'T HOLD ME. |
| A3 (ad-3) | **opnieuw te renderen** (ad-3-v2.png, nog niet gemaakt) | NOT AT THE POP-UP? | Online 7 days later. / Black. Boxy. Sizes: see product page. VS logo on the chest. |

- A3: "S–2XL" is uit de klanttekst gehaald omdat maat M uitverkocht is [TEST] (04 #1). De huidige ad-3.png bevat nog "S–2XL" en mag niet gebruikt worden. Deze aanpassing vervalt zodra de voorraad bevestigd is (dan mag het maatbereik terug, na akkoord van de student).
- Open punten uit 8.4 (blijven open): Tapstitch-gebruiksrecht, controle "Boxy" tegen het merkdossier (A3), akkoord van de eigenaar.

## (b) Reelscript 9:16 (1080×1920), 12,0 s, 5 delen — ongewijzigd t.o.v. v1
Captions: Liberation Mono Bold 50 px, prefix "> ", onderband y=1765, één regel, ≤ 32 tekens, HOOFDLETTERS. Product ≥ 40 % beeldhoogte, geen UI in beeld.
| # | Tijd | Beeld | Caption |
|---|---|---|---|
| 1 | 0,0–2,0 s | Hoodie voorkant, VS-logo | > NOT AT THE POP-UP? |
| 2 | 2,0–4,5 s | Hoodie, langzame zoom | > POP-UP IN EUROPE FIRST |
| 3 | 4,5–7,0 s | Payoff: achterkant, design 010 leesbaar | > DESIGN 010 ON THE BACK |
| 4 | 7,0–9,0 s | Achterkant hold of zijaanzicht | > ONLINE 7 DAYS LATER |
| 5 | 9,0–12,0 s | Hoodie totaal, hold 1,2 s + fade 0,3 s | > €64,95 · JOIN THE SOCIETY |
Geen maten in de reel. Claimcheck zoals v1: geen stad/datum, materiaal/gsm, lidstatus, "no restock", schaarste, aantallen, reviews, verzendbeloftes; alleen NL-prijs €64,95.

## (c) Landingsdoel + UTM (conventie 05-meetplan)
Landingsdoel voor alle ads: productpagina `/products/founding-member-hoodie` (domein TBA; pagina nog DRAFT).
| Ad | Link |
|---|---|
| A1 | /products/founding-member-hoodie?utm_source=meta&utm_medium=paid&utm_campaign=vs-drop001-a&utm_content=A1 |
| A2 | /products/founding-member-hoodie?utm_source=meta&utm_medium=paid&utm_campaign=vs-drop001-a&utm_content=A2 |
| A3 | /products/founding-member-hoodie?utm_source=meta&utm_medium=paid&utm_campaign=vs-drop001-a&utm_content=A3 |
| reel | Open: 05 noemt alleen A1–A3. Voorstel `utm_content=A4` (reel), pas gebruiken na vastleggen in 05 (student beslist). |

## Wijzigingen t.o.v. v1
1. **UTM**: `instagram/paid_social/static-ad-N` vervangen door 05-conventie `utm_source=meta&utm_medium=paid&utm_campaign=vs-drop001-a&utm_content=A1/A2/A3`; reel-waarde als open punt.
2. **Maat M [TEST]**: ad-3 subregel "S–2XL" → "Sizes: see product page"; ad-3.png moet opnieuw (v2). Vervalt zodra voorraad bevestigd is.
3. **Storefront/#compare**: n.v.t. voor ads; ads verwijzen niet meer naar #compare.
4. **Landingsdoel**: open landings-URL vervangen door productpagina `/products/founding-member-hoodie`.
5. **Prijs per markt**: ongewijzigd NL-only €64,95; UK/US alleen als aparte variant (€74,95).
