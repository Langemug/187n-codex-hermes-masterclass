# Conclusie meting (les 096 · N18) — 2026-10-03
Meting: tijd/tokens/toolcalls per route (3 taken samen, door runtime gemeld); kosten onbekend (abonnement, geen API-prijs per run); 1 run per route → indicatie, geen bewijs. Controles door hoofdsessie (JSON-velden, CTA, verboden-grep, diff home.json, build-uitvoer).
- Alle 9 runs geslaagd, 0 correcties nodig.
- Sonnet + relevante context: snelst (19 s, 4 calls) met volledige, nette output.
- Volledige context: +13 % tokens, +3 s, geen kwaliteitswinst op deze taken.
- Haiku: minste tokens maar traagst (47 s, 13 calls) en iets minder precies (btw-noot ontbrak). Let op les 067: Haiku verzon wel feiten bij vrije copy — hier niet, omdat de taken strak waren.
Advies: kleine strakke taken → Sonnet met relevante context; vrije klanttekst → hoofdmodel + review; Haiku alleen voor mechanische taken met strak schema.
