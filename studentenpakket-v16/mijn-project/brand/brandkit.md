# Visionair Society · brandkit v0.1

Enige bron voor kleuren, typografie en knopstijlen. Alle previews en content refereren hiernaar.

## Kleuren
| Rol | Hex | Gebruik |
|-----|-----|--------|
| Zwart (background) | `#000000` | Standaard achtergrond overal. |
| Wit (foreground)   | `#FFFFFF` | Primaire tekst, logo. |
| Paars (accent)     | `#7A1FD1` | Primaire accentkleur, CTA-fill, warning-tape, dividers. |
| Paars hot (hover)  | `#B14BFF` | Hover-states, kickers, highlights. |
| Grijs (muted)      | `#6A6A6A` | Secundaire tekst, metadata, serial. |

## Typografie
- Familie: Helvetica Neue / Arial fallback (geen externe font-loads tot bevestigd).
- Alles **UPPERCASE**, letterspacing krap in headlines, ruim in labels.
- Headline-weight: 900. Body: 700–800. Nooit regular.
- Hero-size: `clamp(44px, 10vw, 150px)`. Line-height 0.88–0.92.

## Knopstijlen
- Primair: paarse fill (`#7A1FD1`), witte tekst, 2px paarse border. Hover: wit vlak + paarse offset-shadow 4px/4px.
- Ghost: transparant, witte border. Hover: paars-hot fill.
- Padding: `20px 36px`. Font 14px, letterspacing 0.25em, uppercase, weight 900.

## Logo
- Primaire master: `mijn-project/brand/logo/vs-mark-square.png` — monogram V+S in cirkel, wit op zwart, vierkant.
- Alternatief (eerder): `mijn-project/brand/logo/vs-wordmark-white.png` — zelfde logo op bredere achtergrond.
- Minimale hoogte op scherm: 32px.
- Rondom: minstens de halve logohoogte wit-ruimte.
- Op licht/kleurrijk beeld: altijd op donker vlak plaatsen; nooit paars-op-paars.

## Tone (verwijzing)
Zie `context/merkstem.md`. Niet dupliceren.
