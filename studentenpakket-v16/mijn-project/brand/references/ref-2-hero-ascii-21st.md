# Reference 2 · "hero-ascii-one" (21st.dev, aangeleverd door student)

Status: REFERENCE, niet geïntegreerd. Alleen als studiemateriaal voor les 2.1.

## Wat het is
Een React/Next.js hero-component (TypeScript + Tailwind, `'use client'`) met:
- Fullscreen zwarte achtergrond met een WebGL-animatie van Unicorn Studio (alleen desktop), sterrenpatroon op mobiel.
- Mono-typografie (font-mono), uppercase, wijde letterspatiëring; titel "ENDLESS PURSUIT".
- "Technische" decoratie: hoekframes, dunne lijnen met ∞, puntrijen, dither-patroon, header met coördinaten, footer met "SYSTEM.ACTIVE / RENDERING"-statusbalk.
- Twee outline-knoppen die bij hover wit vullen, met hoekaccenten.

## Waarom niet integreren zoals aangeleverd
1. **Geen React-project.** Deze repository heeft geen package.json, Tailwind, TypeScript of shadcn (`components/ui`). De winkelroute is Shopify (Liquid-theme); previews zijn losse HTML.
2. **Externe code.** Het component laadt `unicornStudio.umd.js` van cdn.jsdelivr.net (GitHub `hiunicornstudio`, v1.4.33). Volgens AGENTS.md eerst SHA vastleggen, SkillSpector-scan en bronreview vóór uitvoering.
3. **Andermans asset.** `data-us-project="OMzqyUv6M3kSnv0JeAtC"` is het Unicorn Studio-project van iemand anders.
4. **Attributie verwijderen.** De code verbergt actief "Made with Unicorn"-branding. Dat gaat waarschijnlijk tegen de voorwaarden van Unicorn Studio in; niet overnemen.
5. **Merk van anderen.** Tekst "UIMIX", "ENDLESS PURSUIT", "SISYPHUS.PROTOCOL" hoort niet bij Visionair Society.

## Wat we wél leren (input voor stap 3)
Compositie, typografie en interactie: zie `outputs/2.1/<run-id>/brand/referenceboard.md`.
