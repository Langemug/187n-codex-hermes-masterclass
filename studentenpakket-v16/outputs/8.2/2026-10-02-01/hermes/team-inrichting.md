# Team-inrichting (les 089 · 8.2) — 2026-10-03
Bron: hermes/team.json v8.2.0 (15 profielen, prefix `cursus-`, model openai-codex / gpt-6-astra).

## Stap 2 — De 15 profielen
orchestrator · researcher · strategist · builder · reviewer · website-builder · brand-designer · **content** · **visual** · ecommerce · email · customer-service · operations · analytics · sales.
Gekozen voor campagne A: **researcher** (deep-research, seo-review, outreach-review) → **content** (content-workflow, seo-review, video-review) → **visual** (visual-workflow, design-review).

## Stap 3 — Inrichten: GEBLOKKEERD
- hermes/START.md: "8.2.0 = gewijzigde bronprofielen; scan van 8.1.0 geldt niet; scan en review vóór laden". hermes/acceptatie.json: alle checks NOT_RUN.
- Geen SkillSpector-scan van 8.2.0 beschikbaar → **niet geladen/geïnstalleerd**.
- Na scan, op eigen computer (alleen met `--help` gecontroleerd, nooit `--force`, persoonlijke profielen niet aanraken):
  `hermes profile install <absoluut-pad>/hermes/profiles/researcher --name cursus-researcher` (idem content, visual; daarna overige 12).
- Hermes Desktop niet in deze cloudomgeving.

## Stap 4 — Campagneproef (stand-in)
Uitgevoerd met 3 **aparte subagents** (geen gedeeld geheugen), elk met de verantwoordelijkheidsregel uit team.json/SOUL als rol — **niet** de 8.2.0-profielen zelf geladen. Keten via bestanden:
| Agent | Output | Controle |
|---|---|---|
| Researcher | teamproef/01-research.md (230 w.) | feiten met bronregel; hypothese "online = zelfde lidstatus" gemarkeerd; niet-gebruiken-lijst |
| Content | teamproef/02-content.md (reel 10 s, 6 captions ≤ 27 tekens, prijs na payoff 8,5 s, CTA "€64,95 · JOIN THE SOCIETY" + static ad) | geen restock/stad/500 gsm/lidstatus-claim (grep: alleen in "weggelaten"-notities) ✔ |
| Visual | teamproef/03-visual.md (beeld per blok, 1080×1920 + 1080×1350, DESIGN.md) | 5 genoemde mockups bestaan ✔; 3 beelden NIEUW NODIG; rechten Tapstitch-basis open |
Opvallend: Content verzwakte de hook naar "NOT AT THE POP-UP?" omdat "You're still in" de onbevestigde lidstatus-belofte suggereert.

## Open
Scan 8.2.0 + installatie lokaal · Hermes-proef met echte profielen · bevestigen "online = zelfde lidstatus" (offerbrief ↔ merkdossier) · 3 nieuwe beelden · Tapstitch-rechten.

## Herkansing 2026-10-03
- "Bevestigen online = zelfde lidstatus" → **opgelost door besluit 2a** (merkdossier r22). Nummerclaim wacht nog op Tapstitch (B10).
- CTA "€64,95 · JOIN THE SOCIETY": teamproef is expliciet NL-only (02-content r22) → correct; voor UK/US-varianten €74,95 of prijsloze CTA.
- Teamproef-bestanden 01–03 ongewijzigd gelaten (historische run-output).
- Open blijft: scan 8.2.0 + installatie lokaal · Hermes-proef met echte profielen · 3 nieuwe beelden · Tapstitch-rechten (besluit 1).
