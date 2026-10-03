# Referenceboard · Visionair Society

Status: CONCEPT (les 2.1). Stap 3: analyse. Richtingen en bouwkeuzes volgen.
Bronnen: `mijn-project/brand/references/ref-1-phantom-shop-mobbin.png`, `mijn-project/brand/references/ref-2-hero-ascii-21st.md`, merkbasis `outputs/1.4/2026-10-02-01/brand/merkbasis.md`, brandkit `mijn-project/brand/brandkit.md`.
Regel: we nemen principes over, geen logo's, beelden, teksten of code van anderen.

## Ref 1 · Phantom-shop (Mobbin)

**Compositie**
- Hero = collage: producten los uitgesneden, schuin, overlappend met platte vormen (blob, bliksem, ster) en tekst langs een cirkelpad ("Ghost Mode On").
- Daaronder één korte, gecentreerde headline met mascotte-icoon in de zin.
- Productgrid 3 kolommen, grote kaarten (± 3:4) met afgeronde hoeken, achtergrond per kaart in een andere tint van de merkkleur. Naam links, prijs rechts eronder.
- Footer: volledig gekleurd vlak met groot logo links, linkkolommen rechts.

**Typografie**
- Eén zachte geometrische sans, sentence case, normaal gewicht; headline groot maar vriendelijk.
- Kleine labels en prijzen in dezelfde letter, grijs.

**Interactie / gevoel**
- Rustig en ruim; het product is de held. Kleur (lila tinten) geeft ritme aan het grid.
- Speelse details (glow-in-the-dark-sticker op één kaart) maken één product bijzonder.

**Wat past bij Visionair**: product als held, grote kaarten, tinten van één merkkleur als ritme, één badge-sticker op een uitgelicht product, gekleurde footer.
**Wat niet past**: zachte ronde vormen, sentence case, mascotte en pastel – te lief voor "hard, niet gemeen".

## Ref 2 · Hero-ascii (21st.dev)

**Compositie**
- Fullscreen zwart; bewegende achtergrond; content rechts uitgelijnd in de rechterhelft.
- Kader: dunne hoekframes in de vier hoeken, header- en footerbalk met dunne lijn.
- Decor met betekenis-uitstraling: coördinaten, versienummer, "SYSTEM.ACTIVE", puntrijen, dither-streep.

**Typografie**
- Alles mono, uppercase, wijde letterspatiëring; titel in één regel.
- Body klein en grijs, ook mono. Microlabels van 8–10 px.

**Interactie**
- Outline-knoppen die bij hover wit vullen; hoekaccenten verschijnen bij hover.
- Pulserende statusstipjes; op mobiel een statische sterrenachtergrond in plaats van de zware animatie.

**Wat past bij Visionair**: zwart als basis, terminal/systeem-taal (sluit aan op SIMULATION en CLASSIFIED), hoekframes, statusbalk, outline-knop met hover-vulling, lichte versie voor mobiel.
**Wat niet past**: externe animatie (Unicorn Studio), mono voor de grote koppen (te dun naast onze zware statements), nep-coördinaten zonder betekenis.

## Samen: wat we meenemen

**Weging (besluit student):** ref 2 (hero-ascii) is de hoofdrichting, "meer mijn brand voice". Ref 1 levert alleen de productkaarten en de uitgelichte sticker.

### Uit ref 2 (hoofdrichting)
1. **Fullscreen zwarte hero**, content rechts uitgelijnd in de rechterhelft; links ruimte voor de achtergrond.
2. **Eigen bewegende achtergrond**: paarse code-regen of glitch op canvas, zelf gebouwd (geen Unicorn Studio, geen externe scripts). Op mobiel een statische variant (sterren/ruis).
3. **Hoekframes** in alle vier hoeken van de hero, dunne lijnen in wit/30%.
4. **Headerbalk** met dunne onderlijn: VS-logo + "VISIONAIR SOCIETY", scheidingsstreep, "EST. 2026"; rechts systeemregel met echte info (bijv. "DROP 001 · AMSTERDAM").
5. **Mono-typografie breed inzetten**: navigatie, labels, body, knoppen, prijzen, statusregels – uppercase, wijde letterspatiëring.
6. **Koppen**: één regel, groot. Mono-display voor de hero ("STAND APART."); zware condensed sans alleen voor productnamen en designs.
7. **Decoratie met betekenis**: lijn met ∞ boven de kop, puntrij, smalle dither-streep naast de titel, klein vierkant hoekaccent bij de body.
8. **Outline-knoppen** (wit of paars) die bij hover vullen, met hoekaccenten die verschijnen; tweede knop als ghost.
9. **Footer-statusbalk** met blur: "SYSTEM.ACTIVE · DROP 001 · V1.0" links, pulserende paarse stipjes + "◐ RENDERING" rechts.
10. **Systeemregels met echte inhoud** in plaats van nep-coördinaten: dropnummer, hoodienummer (Nº), pop-up-datum zodra bekend.

### Uit ref 1 (aanvullend)
11. **Grote productkaarten** in een grid, maar recht (geen ronde hoeken), op zwart met paarse tinten per kaart; naam en prijs in mono eronder.
12. **Eén sticker/badge** op het uitgelichte product, bijv. "FOUNDING MEMBER".

### Niet overnemen
- Unicorn Studio-animatie, project-ID en het verbergen van hun branding.
- Teksten en namen van anderen (UIMIX, ENDLESS PURSUIT, SISYPHUS).
- Pastel, ronde vormen, mascotte (ref 1).

## Stap 4–5 · Gekozen richting: A · TERMINAL (besluit student)

Live previews (privé):
- Homepage: https://claude.ai/artifact/6yhLviUjgPxTADt642itVr (bron: `storefront/richting-a-terminal-live.html`)
- Productpagina Hoodie 01: https://claude.ai/artifact/6nfKXimUUFaLrV2mLNiBB1 (bron: `storefront/visionair-hoodie-01-live.html`)
- Niet gekozen: B · Classified (https://claude.ai/artifact/BL2tiYskxDv95XwLBUkoJ5)

### Bouwkeuzes
1. **Achtergrond**: paarse code-regen op één `<canvas>`, `position:fixed` achter de hele pagina (home én productpagina), opacity .55 desktop / .45 mobiel, minder kolommen op mobiel. Eigen code, geen externe scripts. Respecteert "beweging beperken".
2. **Content boven de regen** met half-transparante panelen (rgba-paars 85–90%) zodat tekst leesbaar blijft.
3. **Header**: VS-logo + VISIONAIR SOCIETY + EST. 2026; rechts DROP 001 · POP-UP AMSTERDAM · DATE: TBA.
4. **Hero**: VS-mark in fel paars links met gloed; rechts mono-kop "STAND APART." + body + 2 knoppen (paars outline, wit ghost) met hoekaccenten op hover.
5. **Statusbalk** onder (home in hero, product vast onderaan): SYSTEM.ACTIVE · DROP 001 · V1.0, pulserende stipjes, Nº ____.
6. **Typografie**: mono voor navigatie, labels, body, knoppen, prijzen; zware condensed sans alleen voor sectiekoppen en designs.
7. **Productkaarten**: recht, paarse tinten, naam + prijs in mono; uitgelicht product met sticker FOUNDING MEMBER.
8. **Productpagina**: galerij (achterkant-design, voorkant VS, Nº-tegel), sticky info rechts, maatkeuze zonder JS, specificaties uit de koopmodule (les 3.1), conceptlabels zolang prijs/maten/verzending niet bevestigd zijn.
9. **Shopify-vertaling (later)**: canvas-script als theme-snippet, secties als Liquid-secties; geen React/shadcn nodig.

### Open
- Echte productfoto's (nu artwork).
- Bevestigde maten, verzending en Tapstitch-gegevens.
- Pop-up-datum.

### Logo-plaatsing (besluit student)
- Header en footer: VS-logo paars met witte rand (`vs-mark-purple-outline-thick.png`, dikkere witte rand) naast "VISIONAIR SOCIETY".
- Hero (hoofdlogo): wit VS-logo (`vs-mark-transparent.png`) met zachte witte gloed.
- Geldt voor homepage én productpagina.
