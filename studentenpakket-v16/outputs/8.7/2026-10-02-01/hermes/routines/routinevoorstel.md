# Routines (les 097 · 8.7) — 2026-10-03 · status: getest, NIET geactiveerd
Tijdzone: **Europe/Amsterdam** (aanname — student koos C zonder tijdzone; bevestigen).

| Routine | Planning (voorstel) | Script | Input | Output | Stopconditie |
|---|---|---|---|---|---|
| R1 Dagelijkse business-update | ma–vr 08:45 Europe/Amsterdam (`CRON_TZ=Europe/Amsterdam 45 8 * * 1-5`) | dagbrief.sh | TEST-data 3.4 (orders, tickets, voorraad, leveringen, escalaties) | runs/dagbrief-<run-id>.md | ontbrekende bron → BLOCKED-brief, geen tweede run; bestaande output → stop |
| R2 Wekelijkse contentbatch | ma 09:10 Europe/Amsterdam (`CRON_TZ=Europe/Amsterdam 10 9 * * 1`) | contentbatch.sh | 8.5 offerbrief (met verbodenlijst) | runs/batch-<run-id>/ (offerbrief + taakplan) | offerbrief of verbodenlijst ontbreekt → BLOCKED; team draait pas na akkoord eigenaar |

## Autorisatiegrenzen
Lezen + lokale bestanden schrijven. **Niet:** publiceren, verzenden (mail/ads), bestellen, Shopify/Meta/Klaviyo wijzigen. Winkeldata ophalen = aparte geteste opdracht (nu TEST-data).

## Handmatige runs (stap 3) — testlog.txt
1. R1 volledig → OK (dagbrief)
2. R1 zonder tickets.json → **BLOCKED** "Ontbrekende bron(nen): tickets.json", geen cijfers
3. R1 na herstel (bestand terug) → OK
4. R2 volledig → OK (batchmap met offerbrief + taakplan)
5. R2 offerbrief ontbreekt → **BLOCKED**
Gevonden + hersteld: run-id per seconde → runs binnen 1 s overschreven elkaar → run-id met nanoseconden + stop als output bestaat. Hertest: 5 aparte runs ✔.

## Stap 4 — Planning
NIET geconfigureerd: Hermes Desktop niet in deze omgeving; geen cloud-trigger aangemaakt zonder expliciete keuze. Om te activeren: Hermes → Routines → Run-actie testen → eenmalige ingeplande proef → planning hierboven; registreer runtime-job-ID, tijdstip, inputversie, outputpad.

> Besluit 8a (2026-10-03): tijdzone Europe/Amsterdam bevestigd door eigenaar. Activeren blijft aparte autorisatie.
