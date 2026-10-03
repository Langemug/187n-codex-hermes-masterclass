# Meting · product-experience (les 2.4)
Gemeten met Playwright/Chromium, lokaal (file://), 2026-10-02. Lokaal laden is sneller dan via internet; gewicht is de eerlijkste maat.

| Variant | DOMContentLoaded | Load | LCP | Horizontale scroll | Fouten |
|---|---|---|---|---|---|
| Desktop 1440×900 (scroll-animatie) | 31 ms | 31 ms | 100 ms | nee | 0 |
| Mobiel 390×844 (scroll-animatie) | 37 ms | 39 ms | 80 ms | nee | 0 |
| Reduced motion / `?lite` (gestapeld, geen animatie) | 15 ms | 19 ms | 44 ms | nee | 0 |

- Totaal gewicht pagina + beelden: ~120 KB (HTML+CSS+JS inline ~12 KB; 6 WebP-beelden 14–29 KB; logo 10 KB). Geen externe scripts of fonts.
- Scroll-animatie: ~61 fps tijdens scrollen (requestAnimationFrame, alleen transform/opacity).
- Lichte variant: bij `prefers-reduced-motion: reduce` of `?lite` → vier scènes onder elkaar met één beeld per scène, geen sticky/rotatie/glitch.

Screenshots: `desktop-4scenes.jpg`, `mobiel-4scenes.jpg`, `reduced.png`.

## Update realisme + autoplay (feedback student)
- Autoplay: 4 scènes in ~9 s, loopt; ▶/❚❚-knop; scrollen neemt over. Reduced motion: stille versie + knop "▶ PLAY ANIMATION".
- Realisme: draai met belichting (donkerder op de zijkant), lichte kanteling, lichtstreep over de stof, schaduw op de vloer die meedraait, zacht wiegen als een hangend kledingstuk, inkt die van wazig naar scherp verschijnt, capuchon die met een kleine nazwaai over de print valt.
- Meting na update (headless Chromium, software-rendering): mobiel 390×844 ~61 fps, desktop 1440×900 ~40 fps tijdens de draai. Op een toestel met GPU waarschijnlijk hoger; niet gemeten.
- Video: `animatie-mobiel.mp4`; frames: `realistisch-frames.jpg`.
