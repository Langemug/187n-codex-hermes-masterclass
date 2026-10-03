# Hermes-routine — SEO-maanddienst (klaar, NIET geactiveerd)
Status: concept · Activeren pas na: livegang shop, Search Console-property, 1 handmatige testrun (hermes/START.md "Activeer routines pas na hun handmatige test").

## Profiel en rechten
- Profiel: cursus-seo (of Researcher) · werkmap: absolute cursusprojectmap · skills: seo-review, content-workflow, analytics-workflow.
- Mag: lokale bestanden lezen/schrijven in outputs/6.3/<run-id>/seo/maanddienst/; Shopify read-only.
- Mag NIET: publiceren, theme/artikel wijzigen, budget, e-mail versturen. Contentverbetering = voorstel; uitvoering na akkoord eigenaar.

## Trigger
Maandelijks, 3e werkdag (exports van volle vorige maand beschikbaar). Run-id = YYYY-MM-DD-01; vorige runs nooit overschrijven.

## Input (vaste paden)
1. `input/gsc/gsc-<vorige maand>.csv` en `gsc-<maand daarvoor>.csv` (handmatige export eigenaar; kolommen query,page,impressions,clicks,ctr,position)
2. outputs/6.3/2026-10-02-01/seo/maanddienst/01-nulmeting-opzet.md (scope + drempels)
3. Vorig maandrapport
Ontbreekt een export → rapport met status BLOCKED + welke export ontbreekt. Nooit cijfers verzinnen.

## Stappen
1. Controleer bestandsnamen, periodes (gelijke lengte), property en kolommen.
2. Vergelijk per query en pagina: impressies, klikken, CTR, positie; pas drempels toe (≥100 impressies, Δpositie ≥2).
3. Kies 3 verbeteringen met onderbouwing; markeer 1 als "voorstel uitvoeren".
4. Schrijf `maandrapport-<YYYY-MM>.md` in het format van 02-maandrapport-M0.md (gedaan werk · cijfers · 3 verbeteringen · vervolgkeuzes).
5. Vul second-brain/templates/handoff.md in.

## Acceptatie (handmatige test)
- Run 1 op twee TESTDATA-exports → rapport klopt met handmatige berekening van 3 queries.
- Run 2 met één ontbrekende export → status BLOCKED, geen cijfers.
- Geen schrijfactie buiten de outputmap (git status controleren).

## Handoff
- Project: studentenpakket-v16 · outputs/6.3/<run-id>/seo/maanddienst/
- Eerstvolgende stap: eigenaar keurt verbetering goed → Codex/Claude voert uit in unpublished theme.

Keuze student (les 058 stap 5): 3e werkdag bevestigd.
