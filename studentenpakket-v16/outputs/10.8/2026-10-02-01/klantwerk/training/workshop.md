# Workshop "Van print naar productpagina" (½ dag, 3,5 uur) — concept
Voor: klein POD-/webshopteam (1–4 personen). Processen: **A** productpagina SEO-klaar maken · **B** eigen print-mockups maken.
Oefeninput (fictief/neutraal, deelbaar): oefeninput/ (blank-demo.jpg, print-demo.png "YOUR PRINT HERE", zwakke-pagina/, foto-mockup.sh, seo-check.py v0.1.1). Daarna eigen materiaal van het team.

## AI-audit vooraf (30 min, met het team)
| Vraag | Antwoord team (invullen) |
|---|---|
| Hoeveel nieuwe producten per maand? | |
| Wie maakt nu productfoto's/mockups, met welke tool, hoe lang per product? | |
| Wie schrijft producttekst/SEO-velden, hoe lang per pagina? | |
| Hoeveel bestaande pagina's zonder meta description of < 250 woorden? (steekproef 10) | |
| Welke claims mag het team níet doen (materiaal, was, voorraad)? | |
Uitkomst: één prioriteit (A of B eerst) + nulmeting tijd per product. Geen besparingsbelofte.

## Leerdoelen
Na de workshop kan het team zelfstandig:
1. een print realistisch op een eigen blanke foto zetten en de mockup controleren (B);
2. een productpagina schrijven die door de 7 vaste controles komt, met eigen claimlijst (A);
3. zien wanneer het níet zelf moet doen (geen rechten op foto, onbevestigde claim → stoppen en vragen).

## Programma
| Tijd | Onderdeel | Werkvorm |
|---|---|---|
| 0:00 | Audit-resultaat + leerdoelen | gesprek |
| 0:20 | **B Live build:** demo-mockup met foto-mockup.sh (trainer doet voor) | demo |
| 0:40 | B Oefening: zelfde met oefeninput, daarna eigen blank + print | zelf doen |
| 1:20 | B Controle: crop rond print, 4 vragen (binnen stof? leesbaar? harde rand? rechten?) | in tweetallen |
| 1:40 | pauze | |
| 1:50 | **A Live build:** zwakke-pagina → seo-check → 5× FOUT → samen herschrijven | demo |
| 2:20 | A Oefening: eigen productpagina + eigen claimlijst tot alles OK | zelf doen |
| 3:00 | **Eindopdracht** (zie onder) | zelf doen |
| 3:20 | Implementatieplan + afspraak opvolging | gesprek |

## Prompts (voor hun eigen AI-assistent)
1. "Maak met foto-mockup.sh een rugmockup van <print.png> op <blank.jpg>. Begin met een testplaatsing en wacht op mijn akkoord."
2. "Schrijf voor <product> een producttitel, SEO-title (≤ 60, begint met '<zoekwoord>'), meta (≤ 160) en tekst (≥ 250 woorden) met alleen deze feiten: <feiten>. Verboden: <claims>. Draai seo-check.py en herstel tot alles OK is."
3. "Controleer deze mockup: binnen de stof, leesbaar, geen harde randen. Noem wat ik moet aanpassen."

## Eindopdracht
Eén echt nieuw product van het team: 2 mockups (rug + voor) en een complete productpagina in een map. Klaar = mockups doorstaan de 4 controlevragen én seo-check.py geeft geen FOUT (LET OP besproken). Trainer controleert met dezelfde check.

## Antwoordsleutel live build A (gecontroleerd met seo-check.py)
zwakke-pagina, zoekwoord "linen tote bag", secundair "natural", claim "organic" → **6× FOUT**: zoekwoord niet vooraan in SEO-title · meta 6 tekens (< 70) · niet in H1 · tekst 9 woorden (< 250) · zoekwoord niet in tekst · secundair zoekwoord niet in title/meta. (seo-check v0.1.2 controleert nu ook minimum 70 tekens meta, gelijk aan de Productpagina-check.) Exacte uitvoer: antwoordsleutel.txt.

## OpenMAIC (stap 4, optioneel)
Niet gebruikt: OpenMAIC is niet gescand/beoordeeld in deze omgeving (werkboek: commit ec20ba3…). Eerst SkillSpector + bronreview (les 063-werkwijze).
