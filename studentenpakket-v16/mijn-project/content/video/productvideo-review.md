# Productvideo · Les 041 (5.4)

| Route | Status |
|---|---|
| Palmier Pro | NIET_UITGEVOERD — niet beschikbaar bij student |
| DaVinci Resolve | NIET_UITGEVOERD — niet beschikbaar bij student |
| Lokale ffmpeg (gecontroleerde route uit N20) | UITGEVOERD → `productvideo-v1.mp4` |

Export: 1080×1920 · 30 fps · 11,8 s · AAC (−18 LUFS doel; gemeten mean −17,4 dB / max −9,1 dB).
Opbouw (editplan.json): hook 0–2,5 s → product 2,5–5,5 s → demo 5,5–9,5 s → CTA 9,5–11,8 s.

## Controle (tijdlijn-v1.png)
- Twee fouten in eerste render gevonden en hersteld:
  - demo begon op homepage (bron 4,8 s) → in-punt 5,1 s;
  - CTA begon midden in tekstovergang ("WEAR WHAT" over "THE MATRIX", bron 6,7 s) → in-punt 7,1 s. *Let op: dezelfde overgang zit ook in `v2-end` uit N20/N21.*
- Captions: 1 tegelijk, in vrije band, nooit herhaling van schermtekst.
- Audio: zelf gegenereerd (drone + tik op elke cut), rechtenvrij; **placeholder** tot stem of gelicentieerde muziek.
- CTA: "€64,95 · JOIN THE SOCIETY", eindbeeld 1,2 s + fade 0,3 s.

Status: export bekeken (frames + audioniveau). Student-oordeel (2026-10-02): goedgekeurd, inclusief placeholder-audio.
