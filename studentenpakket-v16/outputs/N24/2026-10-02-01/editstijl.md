# Editstijl Visionair Society — procedure (les 060 · N24)
Status: concept · Bronnen: 01-stijlbronnen.md (R1-campagneA-reel, v2-clip2). Geen automatische kwaliteitsgarantie: elke export wordt mens-bekeken (praktijk-v16/export-check.md).

## Procedure
1. **Bronnen valideren** — lokale paden, in/uit-tijden, rechten beeld (Tapstitch-basis = "intern" tot bevestigd).
2. **Montageplan vóór render** — per deel: bron, in/uit, caption 1 (wit), caption 2 (paars), duur. Max 5 delen; totaal 4–13 s.
3. **Kader** — 1080×1920; crop tot product ≥ 40 % beeldhoogte; geen UI (knoppen, headers, cursor).
4. **Volgorde** — hook-tekst of product binnen 1,0 s → payoff (print leesbaar) → pas dán prijs → CTA.
5. **Captions** — eerst bronbeeld checken: staat er al tekst, dan geen dubbele caption; Liberation Mono Bold 50 px, "> "-prefix, onderband y=1765, max 1 regel per caption, ≤ 32 tekens, HOOFDLETTERS; via textfile.
6. **Einde** — hold 1,2 s + fade 0,3 s in 2e pass.
7. **Export** — libx264 CRF 19, yuv420p, 30 fps, aac; loudnorm −18 (placeholder tot echte audio).
8. **Bekijken** — frames op 0,5 s + elk deelbegin + laatste 0,5 s; export-check invullen; claimcheck.

## Positieve voorbeelden (zo wel)
| Regel | Voorbeeld | Bron |
|---|---|---|
| Product groot, geen UI | v2-clip2: header met "II PAUSE" weggecropt, hoodie 35 → 45 % | N23 v2 |
| Prijs na payoff | v2-clip2: "€64,95 · LINK IN BIO" op 2,0 s, print al leesbaar | N23 v2 |
| Eén boodschap per deel | R1: "POP-UP IN EUROPE FIRST" → "ONLINE 7 DAYS LATER" | 5.8 R1 |
| Afsluiter = prijs + merkactie | R1: "€64,95 · JOIN THE SOCIETY" | 5.8 R1 |
| Claims zonder harde feiten | R1: geen pop-up-datum/aantallen | 5.8 R1 |

## Afwijkende voorbeelden (zo niet)
| Fout | Voorbeeld | Correctie |
|---|---|---|
| UI-element in beeld | v1-clip2: "II PAUSE"-knop 0–4,1 s | crop y 65–715 |
| Prijs vóór payoff | v1-clip2: prijs op 1,5 s, print onleesbaar | caption naar ≥ moment print leesbaar |
| Product te klein | v1-clip2: hoodie ~35 % | crop/zoom tot ≥ 40 % |
| Tekst afgekapt | N20: drawtext knipte bij ":" en "'" | textfile= gebruiken |
| Overlap bij overgang | N20: tekst liep over deelgrens | in-punten verschuiven (bv. 2,0 → 2,6 s) |
| Lege opening | v2-clip2 0,0–1,0 s zonder print (open punt) | start bij payoff of hook-tekst |
| Dubbele tekst | v3-clip2: caption herhaalt bronkop "THE BACK IS WHERE YOU SPEAK." | geen eigen caption als bron al tekst toont |
| Onbevestigde claim | R1 "SAME ACCESS" ⚠️ | alleen live na inrichting kanaal |

## Wat de procedure niet belooft
Geen retentie-, CTR- of conversieclaim. Kwaliteit = gecontroleerd tegen deze regels + menselijk bekeken.
