# Media Buyer testplan — les 055 (N29)
Status: concept · Geen budget- of campagnewijziging uitgevoerd.

## Stap 2 — Data en ratio's

### A. Praktijkexport (FICTIEF) — praktijk-v16/campagnedata.csv, 2026-09-01 t/m 07
Definities: CPC = spend/clicks · CR = purchases/clicks · CPA = spend/purchases · ROAS = revenue/spend.

| Ad | Spend | Clicks | Purch. | Revenue | CPC | CR | CPA | ROAS |
|---|---|---|---|---|---|---|---|---|
| A | €120 | 90 | 4 | €180 | €1,33 | 4,4% | €30,00 | 1,50 |
| B | €35 | 38 | 2 | €90 | €0,92 | 5,3% | €17,50 | 2,57 |
| C | €150 | 180 | 2 | €90 | €0,83 | 1,1% | €75,00 | 0,60 |

Kleine steekproef: 2–4 aankopen per ad. Geen winnaar aan te wijzen; alleen richting. Impressies, bereik en marge ontbreken (niet ingevuld).

### B. Echte campagne (read-only) — "VS – Sales Test v1 – EU5", account 1035986095731901, laatste 90 dagen
| Ad | Spend | Impr. | Clicks | CTR | CPC | Aankopen |
|---|---|---|---|---|---|---|
| Ad 2 – Third Eye Coffee Static | €4,40 | 97 | 18 | 18,6% | €0,24 | niet gerapporteerd |
| Ad 4 – Pill Capsule Static | €4,34 | 88 | 11 | 12,5% | €0,39 | niet gerapporteerd |
| Ad 1 – NPC Static | €0,11 | 14 | 0 | 0% | – | niet gerapporteerd |
| Ad 3 – Unplugged Static | €0,05 | 4 | 0 | 0% | – | niet gerapporteerd |
| **Totaal** | **€8,90** | 203 | 29 | 14,3% | €0,31 | – |

Te klein voor conclusies (203 impressies). "Clicks" is Meta's alle-klikken-metric, geen linkklikken; hoge CTR kan daardoor misleidend zijn. Aankopen = leeg: geen conversiedata, dus CPA/ROAS onbekend.

## Stap 3 — Drie vervolgtests (voorstel, niet uitgevoerd)

| # | Angle | Bewijs | Meetvraag | Onzekerheid |
|---|---|---|---|---|
| T1 | Gelijke verdeling: Third Eye Coffee vs Pill Capsule vs NPC, elk vast mini-budget (ABO) | Echt: Meta gaf NPC/Unplugged ~€0,16 → nooit getest | Welke static haalt de hoogste linkklik-CTR bij gelijke vertoningen? | 203 impressies; CTR o.b.v. alle klikken |
| T2 | Conversiemeting eerst: Purchase-event controleren vóór schalen | Echt: aankopen = leeg; Fictief: C bewijst dat goedkope klik ≠ verkoop | Komen aankopen correct binnen (testaankoop/Events Manager)? | Onbekend of pixel/CAPI actief is |
| T3 | Schaarste-angle "Drop 001 won't come back." vs identiteit-angle (B-achtig, design 010) | Fictief: B laagste CPA (2 aankopen); N08 campagne B | Welke angle geeft lagere kosten per add-to-cart? | Fictieve data; kleine steekproef |

Beslisregel: pas een conclusie na ≥ 1.000 vertoningen per variant én ≥ 10 conversiegebeurtenissen; anders "richting", geen winnaar.

## Stap 4 — Creative brief T3 (schaarste vs identiteit)

**Product:** The Founding Member Hoodie — UT0268 zwart, 500 gsm, boxy, S–2XL · €64,95 NL / €74,95 UK/US · design 010 rug, VS-logo linkerborst.
**Doel:** lagere kosten per add-to-cart bepalen tussen twee angles. Zelfde beeldbasis, alleen boodschap verschilt.

| | Variant S — Schaarste | Variant I — Identiteit |
|---|---|---|
| Hook (0–2 s) | "Drop 001 won't come back." | "THE MATRIX CAN'T HOLD ME." |
| Beeld | Rugprint 010, close-up, tekst "No restock" | Zelfde rugprint, model loopt weg van camera |
| Body | Founding Member · pop-up in Europe eerst, online 7 dagen later | Voor wie niet meeloopt · 500 gsm, boxy fit |
| CTA | "Claim yours" | "Join the Society" |
| Formaat | 1080x1920 reel 7 s + 1080x1350 static | idem |

**Vaste factoren:** zelfde beeld, lengte, landing, doelgroep, budget per variant, periode.
**UTM:** utm_campaign=n29-t3 · utm_content=s-scarcity / i-identity.
**Claims:** geen "limited stock"-aantallen of ROAS-belofte; "No restock" alleen als dit beleid vastligt.
**Assets:** basis uit 5.7 P2-H3a-reel.mp4 en N27 beeld-H3-static.png.

## Review 2026-10-03 (student)
Ratio's nagerekend: correct. Goedgekeurd. T2 (conversiemeting) eerst; T3 variant S pas na besluit 5 (restock).
