# Klantisolatie (les 071 · N07) — 2026-10-03
Twee FICTIEVE klanten, elk eigen vault: klanten/kapsalon-voorbeeld/vault en klanten/studio-lumen/vault (kopie lege startstructuur + 4 records via brain.py).

## Stap 3 — Zelfde briefingopdracht per project
Twee aparte subagents, elk beperkt tot de eigen klantmap; identieke opdracht (klant, doel, aanbod, knelpunt, prijs, 3 acties, record-ID per feit).
Output: klanten/kapsalon-voorbeeld/briefing.md · klanten/studio-lumen/briefing.md

## Stap 4 — Zoeken naar gegevens van de andere klant
| Zoekactie | Resultaat |
|---|---|
| Kapsalon-briefing op Lumen-sporen (lumen, lightroom, 450, carrousel, portret, sl-) | 0 treffers ✔ |
| Lumen-briefing op kapper-sporen (kapsalon, salonized, knip, whatsapp, agenda, kv-) | 0 treffers ✔ |
| Gedeelde procedures/templates (second-brain/skills, templates) op klantnamen | 0 treffers ✔ |
Elke briefing citeert alleen eigen record-ID's (kv-* resp. sl-*). Onbekende prijs kapper bleef "onbekend"; geen €450 overgenomen.

## Beperking
Isolatie is afgedwongen door opdracht ("lees alleen deze map") + aparte sessies, niet door bestandsrechten. Voor echte klanten: aparte projectmappen/werkmappen per klant in Hermes/Codex.
