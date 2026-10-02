# Sectie-review · Les 037 (N20)

Route: lokale ffmpeg (`render.sh` v1, `render-v2.sh` v2). Bronnen ongewijzigd. Plan: `outputs/N19/2026-10-02-01/montageplan.json`.
Ontbrekend: camera + stem (hook/feiten niet te monteren); audio = stil spoor.

## v1 → feedback op tijdcode → v2
| Sectie / tijd | v1-probleem | v2-ingreep | Gecontroleerd |
|---|---|---|---|
| Alle | Caption bovenin over menubalk/hoodie | Video in bovenste 1700 px, caption in vrije band onderin (y 1765) | ja, frames |
| Product 0–5,5 s | Caption herhaalt schermtekst | Geen caption (komt later als ingesproken zin) | ja |
| Demo 0–1,5 s | "PICK YOUR SIZE" op homepage | Caption vanaf 1,6 s (productpagina in beeld) | ja, frames per 0,5 s |
| Demo 1,6–4,5 s | Maten klein | Rustige zoom 1,0→1,15 op prijs/maten; prijs blijft volledig in beeld | ja |
| Einde 0–2,7 s | Geen fade | 1,2 s hold + fade 0,3 s | ja |

## Gekozen stijl (bewaren)
- Formaat 1080×1920, bron in bovenste 1700 px, donkere band onderin voor captions.
- Captions: Liberation Mono Bold 50 px, "> " prefix, wit → paars (#b57cff) voor 2e regel; 1 tegelijk.
- Geen caption die schermtekst herhaalt; caption pas als het bedoelde beeld zichtbaar is.
- Zoom alleen om detail leesbaar te maken, max ~15 %, nooit tekst afsnijden.
- Einde: hold ≤1,5 s + fade 0,3 s.

Status: 3 secties v2 gerenderd en per frame bekeken; audio niet beoordeelbaar (geen stem). Student-oordeel (2026-10-02): v2-stijl goedgekeurd.
