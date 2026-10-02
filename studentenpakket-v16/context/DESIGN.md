# Designregels voor mijn merk · Visionair Society
Status: CONCEPT v1 (les 2.2). Afgeleid van de gekozen richting A · Terminal (les 2.1) en het brandbook (les 5.1).

## Doel en doelgroep
Een store die voelt als een systeem waar je toegang toe krijgt: hard, technisch, rustig. Voor 18–28, builders, TikTok/Instagram. Eén hoofdproduct (Hoodie 01) + zes drops.

## Gekozen ontwerprichting en waarom
**A · Terminal.** Zwart, paarse code-regen over de hele pagina, mono-typografie, hoekframes, statusbalk. Student: "meer mijn brand voice". Bron: `outputs/2.1/2026-10-02-01/brand/referenceboard.md`.
Live referentie: homepage https://claude.ai/artifact/6yhLviUjgPxTADt642itVr · productpagina https://claude.ai/artifact/6nfKXimUUFaLrV2mLNiBB1

## Kleuren (tokens)
| Token | Waarde | Gebruik |
|---|---|---|
| `--bg` | `#000000` | Pagina-achtergrond |
| `--fg` | `#FFFFFF` | Tekst, wit logo, ghost-knop |
| `--dim` | `rgba(255,255,255,.6)` | Labels, metadata |
| `--line` | `rgba(255,255,255,.2)` | Randen, scheidingslijnen |
| `--p` | `#7A1FD1` | Vlakken, tinten, logo met witte rand |
| `--hot` | `#B14BFF` | Accentwoord, primaire knop, code-regen, stipjes |
| `--panel-1/2/3` | `rgba(11,6,17,.88)` / `rgba(20,10,34,.88)` / `rgba(29,14,51,.9)` | Kaarten en panelen boven de regen |

Combinaties (contrast):
- Wit op zwart 21:1 → alle tekst.
- `--hot` op zwart 5.3:1 → accentwoorden, labels, knoptekst.
- `--p` op zwart 2.9:1 → **nooit tekst**, alleen vlakken/logo met witte rand.
- Zwart op `--hot` → tekst op stickers en gevulde knoppen.

## Fonts en licenties
- **Mono** (navigatie, labels, body, knoppen, prijzen, hero-kop): systeem-mono `ui-monospace, Menlo, "DejaVu Sans Mono"`. Geen licentie nodig. Optie later: JetBrains Mono (OFL) via Google Fonts.
- **Display-sans** (sectiekoppen, productnamen in designs): `"Helvetica Neue", Arial, sans-serif`, gewicht 900.
- Altijd UPPERCASE in UI; body in gewone hoofdletters.

## Typografische schaal
| Rol | Font | Grootte | Gewicht | Spatiëring |
|---|---|---|---|---|
| Hero-kop | mono | clamp(30px, 5vw, 60px) | 800 | .06em, één regel |
| Sectiekop | sans | clamp(28px, 4vw, 52px) | 900 | -.02em, line-height .95 |
| Producttitel | mono | clamp(28px, 3.6vw, 46px) | 800 | .04em |
| Prijs | mono | 30px | 800 | — |
| Body | mono | 13px | 400 | .02em, line-height 1.7, max 46–56ch |
| Knop | mono | 12px | 500 | .18em |
| Label / meta | mono | 10–11px | 500 | .08–.3em |
| Microlabel (statusbalk) | mono | 9px | 400 | .08em |

## Spacing en componentregels
- Basis 4px. Gaps: 4 / 8 / 12 / 16 / 24 / 40 / 96. Sectiepadding 96px boven, 24px zijkant (16px minimum op mobiel). Max-breedte 1280px.
- **Hoeken**: altijd recht (radius 0). Geen schaduwen behalve gloed op logo.
- **Hoekframes**: 44px (mobiel 28px), 2px wit/30%, in alle vier hoeken van hero en productbeeld.
- **Header**: logo paars-met-dikke-witte-rand 34px + "VISIONAIR SOCIETY" + streep + "EST. 2026"; rechts systeemregel met echte info. Onderlijn `--line`.
- **Statusbalk**: SYSTEM.ACTIVE · DROP 001 · V1.0 links; pulserende `--hot`-stipjes + Nº ____ rechts; blur-achtergrond.
- **Knoppen**: outline 1px, padding 14×22. Primair = `--hot` rand en tekst; ghost = wit. Hover: vullen + hoekaccenten 8px verschijnen. Focus: 2px `--hot` outline, offset 4px.
- **Koopknop (besluit student, les 2.2): A · outline + logo-animatie.** "JOIN THE SOCIETY" gebruikt dezelfde timing als het hoofdlogo: boot 1,6s (blur → paarse gloed), glitch-slices elke 4,2s, scanlijn elke 6s. Hover/tap: glitch 0,32s. Klik: tekst `> ACCESS GRANTED`, knop vult paars (0,9s), na 1,4s door naar de link. Reduced-motion: geen animatie.
- **Productkaart**: recht, `--line` rand, paneeltint, beeld vierkant met 12% padding, meta-regel mono (naam links, prijs `--hot` rechts). Hover: rand `--hot`.
- **Sticker**: `--hot` vlak, zwarte mono-tekst 10px, 4° gedraaid, rechtsboven.
- **Decoratie** (alleen met betekenis): lijn met ∞ of Nº, puntrij, statusstipjes.

## Beeldtaal en productpresentatie
- Hoofdlogo: wit, gecentreerd, met boot/glitch/zweef-animatie.
- Logo in header/footer: paars met dikke witte rand (`vs-mark-purple-outline-thick.png`).
- Designs op paarse paneeltinten; productbeelden (zodra er echte zijn) op zwart, hard zijlicht (brandbook §7).
- Geen AI-beeld presenteren als echt product; mockups gelabeld als concept.

## Mobiele hoofdactie
"JOIN THE SOCIETY" (primaire knop) direct onder de hero-tekst, volle breedte op productpagina.

## Focus, contrast en reduced-motion-variant
- Alle interactieve elementen hebben zichtbare focus.
- `prefers-reduced-motion`: code-regen uit, logo-glitch en scanlijn uit, logo staat stil, typtekst direct zichtbaar.
- Code-regen achter content: panelen 85–90% dekkend zodat tekst ≥ 4.5:1 blijft.

## Goedgekeurde references en wat we eruit halen
- Hero-ascii (21st.dev): zwart, mono, hoekframes, statusbalk, outline-knoppen. Geen code/animatie/teksten overgenomen.
- Phantom-shop (Mobbin): grote productkaarten, één sticker op uitgelicht product.

## Versie en eigenaar
v1 · 2026-10-02 · Remi
