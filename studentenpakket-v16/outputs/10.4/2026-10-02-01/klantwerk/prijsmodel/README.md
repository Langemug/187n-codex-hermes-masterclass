# Prijsmodel — landingspagina lokale ondernemer (les 073 · 10.4)
**Alle bedragen zijn OEFENWAARDEN** (geen gemeten uren, geen marktprijs, geen prijsadvies). Excl. btw. Uren-scenario C "ruim" (12 u) gekozen door student.

## Bestanden
- invoer.csv — alle posten (tarief, bouw, review, tool, generatie, marge, beheer, meerwerk) met status
- bereken.py — rekent de drie scenario's; pas invoer.csv aan en draai opnieuw
- scenario-uitkomst.txt — laatste uitkomst

## Formule
prijs = (uren × tarief + kosten) × (1 + marge)

## Scenario's (oefenwaarden)
| Scenario | Berekening | Uitkomst |
|---|---|---|
| Basis (eenmalig) | (12 u × €50 + €10 tools + €0 generatie) × 1,15 | **€ 701,50** |
| Meerwerk | (3 u × €50) × 1,15 | **€ 172,50** |
| Maanddienst beheer | (1 u × €50 + €5 tools) × 1,15 | **€ 63,25 p/m** |
Handmatig nagerekend: 610 × 1,15 = 701,50 · 150 × 1,15 = 172,50 · 55 × 1,15 = 63,25 ✔

## Niet in de prijs (klant betaalt zelf)
domein, hosting, boekingstool (bv. Salonized).

## Vergelijking met voorstel les 072
prijsberekening.html (10.3) gaf bij 7 u + 15 % € 402,50; dit model telt review + tools mee en gebruikt 12 u.

## Geen marktprijsclaim
Er is geen bron gebruikt voor "wat kapperswebsites kosten". Eerst proefproject: werkelijke uren invullen in invoer.csv en opnieuw rekenen.

## Besluit student (stap 5, 2026-10-03)
Marge blijft 15 % → basis € 701,50 · meerwerk € 172,50 · beheer € 63,25 p/m (oefenwaarden).
