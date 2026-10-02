# Video-review · Productanimatie Founding Member Hoodie (Les 035 · 5.3)

Input: `v1-origineel.mp4` (kopie van outputs/2.4/.../meting/animatie-mobiel.mp4), 390×844, 30 fps, 9,97 s.
Route: lokale ffmpeg-edit (overlay + fade + trim). Geen externe tools/uploads.

## Feedback student → tijdcodes en ingrepen
| Tijd | Observatie | Ingreep | Reden |
|---|---|---|---|
| 0:02.3–0:02.5 | Tekst "QUIET ON THE FRONT" en "THE BACK IS WHERE YOU SPEAK" staan over elkaar | Tekstvlak (y 520–750) 0,1 s uitfaden naar achtergrond, 0,15 s infaden; hoodie-draai blijft | Eén boodschap tegelijk leesbaar |
| 0:07.0–0:09.97 | Eindbeeld staat ~3 s stil | Video ingekort tot 8,5 s; laatste 0,3 s fade-out | Eindbeeld ~1,5 s: lang genoeg om CTA te lezen, geen dode tijd |

## Resultaat
| | v1 | v2 |
|---|---|---|
| Duur | 9,97 s | 8,50 s |
| Tekstoverlap 0:02 | ja (2.3–2.5) | nee: fade uit → in (zie v2-detail-0m02.png) |
| Eind stilstaand | ~3 s | ~1,5 s + fade |

Restpunt: tijdens 0:02.3–0:02.4 is de rand van het donkere tekstvlak heel licht zichtbaar. Echte oplossing = de overgang in de bron-animatie (product-experience) aanpassen en opnieuw opnemen.

Status: tweede edit gemaakt, lokaal gecontroleerd op frames. Student-oordeel: open.

## Stap 5 · Voorkeuren getest op clip 2
Clip 2: `clip2-v1-origineel.mp4` — nieuwe lokale opname (Playwright, 390×844) van de storefront-homepage: logo-boot → klik JOIN THE SOCIETY → productpagina. 11,23 s.

| Voorkeur | Check clip 2 | Ingreep |
|---|---|---|
| 1. Eén tekst tegelijk | Geen overlappende teksten gevonden (frames per 0,5 s, zie clip2-v1-tijdlijn.png). Overgang home → product is een harde paginawissel, geen overlap | Geen |
| 2. Eindbeeld ≤ 1,5 s | Productpagina staat 5,0–11,2 s stil (≈6 s) | Ingekort tot 6,5 s + fade 0,3 s → `clip2-v2-bewerkt.mp4` |

Conclusie: voorkeur 2 had zichtbaar effect (−4,7 s dode tijd); voorkeur 1 was niet nodig op deze clip — geen bewijs dat hij hier iets verandert.

Student-oordeel (2026-10-02): v2 en clip2-v2 goedgekeurd; eindbeeld 1,5 s is goed.
