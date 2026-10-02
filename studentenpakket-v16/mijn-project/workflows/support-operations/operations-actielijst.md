# Operations-actielijst (TESTDATA) · Les 051
Bronnen: testdata/voorraad.csv, testdata/leveringen.csv, testdata/orders.csv.
Beschikbaar = op_voorraad − gereserveerd. Onbevestigde levering telt NIET mee.

| SKU | Op voorraad | Gereserveerd | Beschikbaar | Onderweg (bevestigd) | Onderweg (onbevestigd) | Risico |
|---|---|---|---|---|---|---|
| S | 4 | 0 | 4 | — | — | laag |
| M | 1 | 1 | **0** | — | 20 (TEST-L1, 28-10) | **HOOG: uitverkocht** |
| L | 3 | 2 | 1 | 15 (TEST-L2, 24-10) | — | middel |
| XL | 6 | 0 | 6 | — | — | laag (maatwissel TT5 kan) |
| 2XL | 2 | 1 | 1 | — | — | middel |
Vraag/dag: **onbekend** (geen bevestigde verkoopdata) → dekking in dagen niet berekend.

## Geprioriteerde acties
1. **M uitverkocht** — beslissen: M op "sold out" zetten of TEST-L1 laten bevestigen. Let op: "no restock" (offerbrief) → nieuwe aanvoer M alleen als dat binnen drop 001-oplage valt. Eigenaar: student · beslisdatum: binnen 1 dag.
2. **TT3 tracking ontbreekt** — tracking opvragen bij Tapstitch. Eigenaar: operations · vandaag.
3. **TT2 + TT6 niet verzonden** — productiestatus checken; TT6 niet verzenden tot dispute opgelost.
4. **TT5 maatwissel L→XL** — XL beschikbaar (6); voorstel aan eigenaar; L komt dan vrij.
5. **Servicebeleid invullen** (retour, ruil, verzending, refundbevoegdheid, escalatiepunt) — eigenaar: student.

## Afzonderlijke externe acties (NIET uitgevoerd)
Refunds, inkooporder (TEST-L1 bevestigen), verzending/labels en maatwissel in Shopify zijn aparte handelingen met eigen opdracht. Niets uitgevoerd.

## Beslissing student (2026-10-02)
M → **SOLD OUT** (past bij 'no restock'). TEST-L1 niet bevestigen. In echte winkel: variant M op 0 / uitverkocht zetten = aparte actie met opdracht (niet uitgevoerd).
