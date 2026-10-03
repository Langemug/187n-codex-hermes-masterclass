# Skillvergelijking content-workflow oud vs nieuw (les 095 · N17) — 2026-10-03
Correctie (stap 2): 01-feedback.md — onbevestigde belofte in hook ("You're still in").
Wijziging (stap 3): skill-nieuw/SKILL.md regel 5a (1 regel, alleen beloftes; origineel skills/content-workflow ongewijzigd).
Zelfde input (stap 4): input.md, 4 aparte subagent-runs, zelfde bronnen.

| Run | Hook | Headline | Belofte-check | Open punt eigenaar | Oordeel |
|---|---|---|---|---|---|
| oud P1 | NOT AT THE POP-UP? | "Drop 001 is still open online." | geen expliciete check; "still open" = beschikbaarheidsbelofte | nee | matig |
| nieuw P1 | NOT AT THE POP-UP? | "Missed the pop-up?" | ✔ vraag zonder belofte | ✔ lidstatus genoemd | **beter** |
| oud P2 | — | — | — | ✔ vraagt P2-feiten | **BLOCKED — correct** (P2 niet in bronnen) |
| nieuw P2 | NOT AT THE POP-UP? | "Missed the pop-up?" + "Details soon." | ✔ | ✔ | zwakker: maakte toch copy zonder productfeiten ("Details soon" is een vage belofte) |

## Eerlijke kanttekeningen
- Confound: projectkennis.md bevatte de afgezwakte hook al → beide versies kozen dezelfde hook; het verschil zit in de headline en het expliciete open punt.
- 1 run per cel; geen statistische conclusie.

## Keuze (voorstel)
**Nieuwe versie gebruiken**, maar regel 5a uitbreiden met één zin: "Ontbreken de basisfeiten van het product in de bronnen, stop dan (BLOCKED) in plaats van copy te maken." — dat neemt het goede gedrag van oud-P2 over. Geldt voor alle projecten (beloftes toetsen is algemeen); geen projectvoorkeur. Vóór gebruik: SkillSpector-scan van de gewijzigde skill.

## Besluit student (stap 5, 2026-10-03): A
Gekozen: skill-v3/SKILL.md = nieuw + BLOCKED-zin. Origineel skills/content-workflow/SKILL.md ongewijzigd; v3 pas laden na SkillSpector-scan.

## Testrun v3 (review 24, 2026-10-03)
| Run | Uitkomst | Verwacht | Oordeel |
|---|---|---|---|
| v3 P1 | NOT AT THE POP-UP? / "Missed the pop-up in Europe?" — vraag, geen belofte; open punten genoemd | veilige copy | ✔ |
| v3 P2 | BLOCKED (009 niet in bronnen) | BLOCKED | ✔ |
v3 combineert beide gewenste gedragingen. Kanttekening: merkstem.md niet gelezen (input beperkte bronnen); 1 run per cel. Goedgekeurd; laden pas na SkillSpector-scan.
