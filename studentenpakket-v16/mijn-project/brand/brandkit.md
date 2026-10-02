# Visionair Society · brandkit v0.2

Single source for colors, typography, and button styles. All previews and content reference this file.

## Tagline
**Stand apart. Move together.**

## Colors
| Role | Hex | Use |
|------|-----|-----|
| Black (background) | `#000000` | Default background everywhere. |
| White (foreground) | `#FFFFFF` | Primary text, logo. |
| Purple (accent)    | `#7A1FD1` | Primary accent, CTA fill, warning tape, dividers. |
| Purple hot (hover) | `#B14BFF` | Hover states, kickers, highlights. |
| Grey (muted)       | `#6A6A6A` | Secondary text, metadata, serials. |

## Typography
- Family: Helvetica Neue / Arial fallback (no external font loads until confirmed).
- All **UPPERCASE**, tight letterspacing in headlines, wide in labels.
- Headline weight: 900. Body: 700–800. Never regular.
- Hero size: `clamp(44px, 10vw, 150px)`. Line-height 0.88–0.92.

## Buttons
- Primary: purple fill (`#7A1FD1`), white text, 2px purple border. Hover: white fill + purple offset shadow 4px/4px.
- Ghost: transparent, white border. Hover: purple-hot fill.
- Padding: `20px 36px`. Font 14px, letterspacing 0.25em, uppercase, weight 900.

## Logo
Definitive versions (lesson 5.1), all 2048×2048 PNG in `mijn-project/brand/logo/`:

| File | Color | Use on |
|------|-------|--------|
| `vs-mark-transparent.png` | White | Black / dark — **primary** |
| `vs-mark-square.png` | White on black square | Avatars, app icons |
| `vs-mark-purple.png` | Purple `#7A1FD1` | White / light only (2.9:1 on black, too weak) |
| `vs-mark-purple-hot.png` | Purple hot `#B14BFF` | Black / dark (5.3:1) |
| `vs-mark-purple-outline.png` | Purple `#7A1FD1` + thin white outline | Large sizes on dark, photos |
| `vs-mark-purple-outline-thick.png` | Purple `#7A1FD1` + thick white outline | Small sizes (header, footer, avatars) on dark |

Retired: `vs-wordmark-white.png` (phone screenshot, do not use).
- Minimum on-screen height: 32px.
- Clearspace: at least half the logo height.
- Never place purple-on-purple; always on a dark surface.

## Voice (reference)
See `context/merkstem.md`. Do not duplicate.
