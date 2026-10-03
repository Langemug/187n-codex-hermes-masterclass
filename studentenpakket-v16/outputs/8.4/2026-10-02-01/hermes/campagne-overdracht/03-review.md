# 03 · Review · CA-8.4-03-REVIEW
Run 2026-10-02-01 · Reviewer (stand-in, onafhankelijk) · 2026-10-03 · Status: KLAAR (concept, niet publiceren)
Gelezen: `00-taakplan.md`, `01-content.md`, `02-visual/README.md`, `context/DESIGN.md`; beelden `ad-1..3.png` visueel bekeken; afmeting via `identify`, achtergrondkleur onder tekst gemeten met ImageMagick (gemiddelde pixel van een uitsnede).
Niet gelezen: `projectkennis.md`, merkdossier en merkstem. De bronverwijzingen in 01-content zijn daarom alleen op vorm gecontroleerd, niet inhoudelijk.

## Overzicht
| Check | ad-1 | ad-2 | ad-3 |
|---|---|---|---|
| Afmeting 1080×1350 | OK | OK | OK |
| Hook "NOT AT THE POP-UP?" | OK | OK | OK |
| CTA exact "€64,95 · JOIN THE SOCIETY" | OK | OK | OK |
| Prijs alleen €64,95 | OK | OK | OK |
| Verbodenlijst (beeld + tekst) | 0 treffers | 0 treffers | 0 treffers, maar "SHOP ONLINE" heeft voorwaarde (zie hieronder) |
| Tekst gelijk aan 01-content | OK | OK | OK |
| Afgekapt/over rand | nee | nee, wel lelijke afbreking | nee |
| Contrast/leesbaarheid | OK | **onvoldoende** | **onvoldoende** |
| DESIGN.md | deels | afwijkend | afwijkend |
| Rechten beeld | open (Tapstitch) | open | open |
| **Oordeel** | **AANPASSEN (klein)** | **AANPASSEN** | **AANPASSEN** |

## ad-1 · AANPASSEN (klein)
Beeld: zwarte achtergrond, achteraanzicht met design 010. Wit en paars op bijna-zwart, dus goed leesbaar. De headline staat op één regel, zoals DESIGN.md voor de hero-kop vraagt.
- De CTA is alleen platte tekst (`#b57cff`). DESIGN.md vraagt `--hot #B14BFF` en een outline-knop (1px rand, rechte hoeken). Nu leest de CTA niet als knop.
- De subregel loopt over de overgang van hoodie naar jeans ("days later." staat op de lichtere jeans). Dat is nog leesbaar, maar onrustig. Een donker paneel volgens `--panel` achter het tekstblok lost dit op.
- Er zijn geen hoekframes en er is geen label "concept/mockup". DESIGN.md zegt: "mockups gelabeld als concept".
- Tekst: geen verboden claims. Pop-up wordt alleen genoemd als "in Europe" en "7 days later".

## ad-2 · AANPASSEN
Beeld: lichtgrijze/witte studio-achtergrond met een verloop naar zwart onderaan.
- **Contrast:** de witte headline begint op een lichte achtergrond. Het gemeten gemiddelde onder "NOT" is ongeveer #C9C9C9 (wit daarop is ca. 1,6:1, de eis is ≥4,5:1). De lichtgrijze subregel staat op ca. #8C8C8C, wat ook onder de norm zit. "NOT AT" en "Design 010" zijn op mobiel slecht leesbaar.
- **Afbreking:** de headline loopt over twee regels ("…7 DAYS / LATER."), terwijl DESIGN.md één regel wil. De subregel breekt af tot een los woord "ME.", dus de slogan valt uit elkaar.
- De achtergrond is wit en niet `--bg #000`. Dat wijkt af van de Terminal-richting en van ad-1, waardoor de set niet consistent is.
- Inhoud is in orde: design 010 en de slogan komen overeen met het beeld, en er zijn geen verboden claims.

## ad-3 · AANPASSEN
Beeld: vooraanzicht met VS-logo op de borst, en dezelfde witte studio-achtergrond als ad-2.
- **Contrast:** hetzelfde probleem als ad-2. Onder "NOT" staat ca. #CDCDCD en onder de subregel "Black." ca. #858585, beide onder 4,5:1.
- De headline staat op twee regels ("SHOP / ONLINE.").
- **Claimrisico:** "SHOP ONLINE" belooft dat je het nu online kunt kopen, maar de productpagina is nog DRAFT (01-content, README). Dit mag pas live na livegang en akkoord van de eigenaar. Anders gebruik je "ONLINE 7 DAYS LATER." als veilige variant.
- De copy zegt "Boxy", terwijl het model op de foto er normaal/oversized uitziet. Dat is geen verboden claim (de naam komt uit de modelnaam), maar het moet wel tegen het merkdossier gecontroleerd worden.
- In de copy staat "VS logo" en in de primary text "White VS logo". Op de foto lijkt het logo lichtgrijs. Dat is acceptabel.

## Herstelpunten (prioriteit)
1. **Contrast ad-2 en ad-3:** maak de achtergrond zwart of zet een donker paneel (`--panel`, 85–90% dekkend) achter het hele tekstblok, zodat alle tekst ≥4,5:1 haalt. Zet de subregel in wit of `--dim` op het paneel.
2. **"SHOP ONLINE" in ad-3:** vervang dit door "ONLINE 7 DAYS LATER." of houd de ad tegen tot de productpagina live is en de eigenaar akkoord geeft.
3. **Afbreking en hiërarchie:** maak de headline kleiner zodat hij op één regel past (DESIGN.md hero-kop), en voorkom het losse woord "ME." in ad-2 (handmatige regelbreuk na "back.").
4. **CTA als DESIGN-knop in alle drie ads:** outline 1px in `--hot #B14BFF`, rechte hoeken, padding naar verhouding. Gebruik de tokenkleur in plaats van `#b57cff`.
5. **Labels en rechten:** voeg een concept-/mockup-label en hoekframes toe. Leg het Tapstitch-gebruiksrecht vast vóór elk gebruik buiten de oefening.

## Open punten (niet door review op te lossen)
- Lidstatus voor online kopers is onbevestigd. Gebruik de hook-variant tot de eigenaar besluit (correct toegepast).
- Tapstitch: gebruiksrecht voor de basisfoto's en materiaalclaims zijn niet bevestigd.
- Pop-up: stad en datum zijn open. Alleen "in Europe" en "7 days later" zijn gebruikt (correct).
- De productpagina staat op DRAFT, wat bepalend is voor ad-3.

## Eindoordeel
**AANPASSEN, niet publicatieklaar.** Inhoudelijk is de set schoon: CTA en prijs zijn exact, er zijn 0 verboden claims, en hook en afmetingen kloppen. ad-1 is bijna goed. ad-2 en ad-3 halen de contrastnorm niet en wijken af van DESIGN.md. ad-3 heeft daarnaast een claim die afhangt van de livegang. Na herstelpunt 1 t/m 3 volgt een her-review. Publiceren blijft hoe dan ook afhankelijk van de open punten en het akkoord van de eigenaar.
