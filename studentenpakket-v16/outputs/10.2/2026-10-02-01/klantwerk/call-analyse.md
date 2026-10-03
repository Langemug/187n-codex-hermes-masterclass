# Callanalyse — Kapsalon Voorbeeld (les 069 · 10.2)
**Bestand en toestemming:** rollenspel-kapper.md — ROLLENSPEL, geen echte call, geen toestemming nodig/verzonnen.
**Begin/eindtijd:** n.v.t. (regelnummers R01–R16).

## Stap 3 — Wat eruit komt (met verwijzing)
| Onderdeel | Klant bevestigt expliciet | Passage |
|---|---|---|
| Huidig proces | nieuwe klanten via Google Maps + Instagram; geen website | R02 |
| | afspraken via DM of telefoon | R04 |
| Tools | papieren agenda; Salonized geprobeerd maar niet in gebruik | R08 |
| Knelpunt | neemt niet op tijdens knippen; bellers bellen soms niet terug | R04, R06 |
| | dezelfde vraag de hele dag: prijzen + plek vandaag | R10 |
| Gewenste uitkomst (1 maand) | klanten plannen zelf een afspraak zonder telefoon | R14 |
| Beschikbare input | eigen foto's op Instagram, zelf gemaakt | R12 |

## Eigen interpretatie (NIET bevestigd)
- Er gaan klanten verloren door gemiste oproepen — R06 zegt "soms", aantal onbekend.
- Salonized (of een andere tool) kan de boekingsroute worden — R08: geprobeerd, reden van stoppen onbekend.
- Prijzen online zetten vermindert vragen — R10 suggereert dit, niet getest.

## Ontbrekende vragen (doorvragen vóór build)
1. Waarom is Salonized niet in gebruik gekomen? (R08) → bepaalt boekingsroute.
2. Wie beheert de agenda: Sam, collega of beiden? (R08)
3. Prijslijst en diensten: welke, met prijzen? (R10)
4. Openingstijden + adres die online mogen.
5. Foto's: expliciete toestemming + wie staat erop (klanten herkenbaar?) (R12 "denk ik")
6. Hoeveel gemiste oproepen per week? (R06) → nulmeting voor resultaat.
7. Domeinnaam / hosting: bestaat er iets? Wie betaalt?
8. Budget en beslisser (R16: onbekend).

## Open input voor demo
prijslijst, openingstijden, adres, 4–6 vrijgegeven foto's, keuze boekingsroute (Salonized-link / Google-agenda / formulier).

## Stap 4 — Afgebakend voorstel eerste build (CONCEPT, niet verstuurd)
**Doel (R14):** klanten kunnen zelf een afspraak plannen en zien prijzen + openingstijden zonder te bellen.
**Build 1 — Landingspagina Kapsalon Voorbeeld** (basis: demo-kapper uit les 068)
| In scope | Bron/eis |
|---|---|
| 1 pagina, mobiel eerst: naam, korte intro, boekknop boven + sticky | R10, R14 |
| Diensten met prijzen | vraag 3 (input Sam) |
| Openingstijden, adres, Google Maps-link | vraag 4 |
| 4–6 eigen foto's | R12 + vraag 5 (toestemming schriftelijk) |
| Boekknop → **bestaande** route die Sam kiest (Salonized-link, Google-agenda of eenvoudig formulier) | R08 + vraag 1–2 |
| SEO-title + meta (lokaal: "kapper [plaats]") + noindex tot akkoord | R02 |
| **WhatsApp-knop** als tweede contactoptie naast boekknop (standaard, besluit student) | R04 (DM's) |

| Buiten scope (later / apart) |
|---|
| Boekingssysteem inrichten of koppelen aan agenda (Sam/collega kiest + beheert tool) |
| Domein en hosting kopen (Sam's account) |
| Instagram-content (route 2, apart aanbod) |
| Meerdere pagina's, webshop, cadeaubonnen |

**Acceptatiecriteria:** boekknop werkt op telefoon in ≤ 2 tikken naar de gekozen boekroute · prijzen en tijden komen 1-op-1 uit Sam's lijst · geen horizontale scroll op 390 px · Sam keurt preview goed vóór livegang.
**Planning (indicatie, na complete input):** dag 1 opbouw met echte input · dag 2 preview + 1 feedbackronde · livegang alleen na akkoord Sam (Sam's account).
**Prijs:** OPEN — eerste proefproject (aanbodkeuze 10.1): uren meten tegen €50/u. Geen bedrag noemen voordat vraag 8 (budget/beslisser) beantwoord is.
**Meting succes:** nulmeting gemiste oproepen per week (vraag 6) → na 4 weken opnieuw vragen + aantal online boekingen. Geen beloofde besparing.
**Afhankelijkheden:** antwoorden op vragen 1–5 en 7; zonder boekroute geen werkende knop (dan: "Bel/WhatsApp" als tijdelijke CTA).

## Stap 5 — Besluit student (2026-10-03)
WhatsApp-knop standaard opgenomen als tweede contactoptie. Ook toegevoegd aan demo (outputs/10.1/.../demo-kapper/index.html, nummer = placeholder).
