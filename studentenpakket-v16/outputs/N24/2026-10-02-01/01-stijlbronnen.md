# Stap 2 — Gekozen edits, feedback en exportinstellingen (les 060)

## Bron 1 — R1-campagneA-reel (les 5.8)
- Pad: outputs/5.8/2026-10-02-01/klantwerk/contentbureau/levering-1/R1-campagneA-reel.mp4
- 12,7 s · 1080×1920 · 30 fps · h264 ~1,07 Mb/s · aac 128 kb/s (placeholder-audio)
- Opbouw: 5 delen (parts/1-hook … 5) — hook-tekst → achter-model → voor-model → productpagina → prijs + CTA
- Feedback: klantreview FB1 GOEDGEKEURD, geen tijdcode-opmerkingen (03-klantreview.csv)
- Controle: frames 1 / 3,5 / 5,5 / 8 / 11 s; claimcheck ("same access" ⚠️ tot kanaal live)

## Bron 2 — v2-clip2 (les N23)
- Pad: outputs/N23/2026-10-02-01/v2-clip2.mp4 · 4,1 s · 1080×1920 · 30 fps
- Feedback (v1→v2, student akkoord): crop zonder UI ("II PAUSE"-header weg), product ~45 % beeldhoogte, prijs pas ná payoff (2,0 s), hold 1,2 s + fade 0,3 s
- Open idee: v3 start direct bij de print

## Exportinstellingen (render-v2.sh, N20)
- libx264, yuv420p, CRF 19, 30 fps, aac; -shortest
- Captions: drawtext via textfile, Liberation Mono Bold 50 px, gecentreerd, y=1765 (onderband), prefix "> ", regel 1 wit, regel 2 paars 0xb57cff
- Hold/fade in aparte 2e pass (zoompan+tpad hangt)
- Audio: placeholder sine 55 Hz + pink noise, loudnorm −18
