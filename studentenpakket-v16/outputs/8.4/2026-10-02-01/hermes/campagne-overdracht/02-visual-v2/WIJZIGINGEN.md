# 02 · Visual v2 · wijzigingen na review (feedbackronde 1)
Run 2026-10-02-01 · Visual-agent (stand-in) · 2026-10-03 · Status: KLAAR VOOR HER-REVIEW (concept, niet publiceren)
Methode: ImageMagick 6.9.12 (`convert`), geen AI, geen netwerk, tekst als gequote argumenten. Fonts: LiberationMono-Bold (headline, CTA, label) en LiberationMono-Regular (subregel). Dezelfde mockups als v1. v1 (`../02-visual/`) is niet gewijzigd.
Bestanden: `ad-1.png`, `ad-2.png`, `ad-3.png`, alle drie 1080×1350 (gecontroleerd met `identify`).

## Per herstelpunt
1. **Contrast:** achter het hele tekstblok (x 48–1032, y 900–1290) staat een paneel: eerst `--bg #000000`, daarop `--panel-1 rgba(11,6,17,.88)`. Het label heeft hetzelfde paneel. De subregel is nu wit.
2. **ad-3 zonder "SHOP ONLINE":** de headline is "NOT AT THE POP-UP?". De subregel is "Online 7 days later." / "Black. Boxy. S–2XL. VS logo on the chest." Er zijn geen andere nieuwe claims; de tweede regel komt ongewijzigd uit 01-content.
3. **Headline op één regel:** in alle drie ads staat "NOT AT THE POP-UP?" op één regel (60 pt). De rest van de tekst staat in de subregel, op twee regels zonder losse woorden:
   - ad-1: "Pop-up in Europe first." / "Online 7 days later."
   - ad-2: "7 days later. Design 010 on the back." / "THE MATRIX CAN'T HOLD ME." (de slogan staat heel op één regel)
   - ad-3: zie punt 2.
4. **CTA als knop:** "€64,95 · JOIN THE SOCIETY" staat in een outline-knop met een rand van 1px in `--hot #B14BFF`, rechte hoeken en tekst in `#B14BFF`.
5. **Label en hoekframes:** linksboven staat het label "CONCEPT · MOCKUP" in `--hot` op een paneel. Er zijn hoekframes van 44px, 2px dik en wit op 30%, in alle vier de hoeken (volgens DESIGN.md). Let op: op de witte studio-achtergrond van ad-2 en ad-3 zijn de frames bijna onzichtbaar. De DESIGN-waarde is aangehouden.

## Contrastmeting
Gemeten met `convert ad-N.png -format %[pixel:p{x,y}] info:` op achtergrondpunten van het paneel (60,965 en 760,965 onder/naast de headline; 60,1050 bij de subregel; 90,1190 in de CTA-knop; 60,70 achter het label). Voor alle drie ads geeft elk punt `srgba(9,5,14)` = **#09050E**. De lichtste pixel in de paneelmarge is 6,5/255 (grijswaarde).

| Tekst | Kleur | Achtergrond | Contrast | Norm ≥ 4,5:1 |
|---|---|---|---|---|
| Headline en subregel (ad-1/2/3) | #FFFFFF | #09050E | 20,2:1 | OK |
| CTA en label (ad-1/2/3) | #B14BFF | #09050E | 5,1:1 | OK |

Bij de eerste poging in deze ronde stond alleen `--panel-1` 88% over de witte foto. Dat gaf #28232D: wit 15,3:1, maar `--hot` slechts 3,9:1. Daarom is er `--bg` onder het paneel gezet.

## Ongewijzigd en open
Tekst, prijs en CTA zijn letterlijk uit 01-content gehaald, behalve de opsplitsing volgens herstelpunt 2 en 3. Nog open zijn het Tapstitch-gebruiksrecht, de lidstatus online, de controle van "Boxy" tegen het merkdossier en het akkoord van de eigenaar. Niet publiceren.
