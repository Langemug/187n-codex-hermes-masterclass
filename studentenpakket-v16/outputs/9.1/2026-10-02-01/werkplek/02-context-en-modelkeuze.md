# Stap 3 — Herbruikbare context, onnodig herlezen, modelkeuze

## Herbruikbare context (één keer vastleggen, daarna verwijzen)
| Context | Waar het nu staat | Hergebruik |
|---|---|---|
| Bevestigde productfeiten UT0268 (500 gsm, S–2XL, maattabel) | merkdossier r12–13 | één "feitenblok" in de opdracht; niet opnieuw greppen |
| Verboden claims | 6.2 feitencheck, 4.2 SKILL | als argument aan seo-check meegeven |
| Mockup-plaatsingen | 4.1 placements-ut0268.csv | direct gebruiken, geen testplaatsing |
| SEO-teksten | bestanden in T3-seo/ | Shopify-update **uit bestand** opbouwen (script), tekst niet in chat/tool-input plakken |
| Productbesluiten (logo voorkant, prijs) | verspreid | vooraf 1 beslislijst aan eigenaar |

## Onnodig herlezen (vermijden)
- Template/workflow die al in een eerdere les gelezen zijn → alleen bij twijfel.
- Zoeken naar een genoemde maar ontbrekende standaard → één `grep`, daarna "ontbreekt" noteren.
- Volle screenshot → alleen relevante uitsnede (boven de vouw) bekijken.
- JSON-dump van de body om te kopiëren → overbodig als een script de mutation-variabelen vult.

## Modelkeuze per deel (voorstel)
| Deel | Benodigd | Passend |
|---|---|---|
| Mockups renderen, tellen, checks | geen redeneren; scripts | elk model / alleen shell |
| Producttekst schrijven | taal + claimdiscipline | middelgroot model volstaat (bv. Sonnet-klasse) |
| Review claims vs. bronnen | nauwkeurig redeneren | groot model (bv. Opus-klasse) |
| Shopify-update + terug-lezen | deterministisch | script; model alleen voor akkoord-moment |
Let op: in deze sessie kies ik het model niet zelf; dit is een advies voor Hermes/Codex-profielen.

## Modelmeting (template)
Run | Model | Kwaliteit | Tijd | Tokens | API-kosten | Abonnementsgebruik | Herwerk
--- | --- | --- | --- | --- | --- | --- | ---
062 origineel | dit sessiemodel | seo-check 12/12, review 1 claim | ≈ 8,5 min | onbekend (≈ 34k tekens tool-I/O + 2 beelden) | onbekend | onbekend | 2 rondes
