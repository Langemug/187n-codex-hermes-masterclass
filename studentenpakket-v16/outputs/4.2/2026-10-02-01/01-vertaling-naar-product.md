# Stap 3 — Tutorial vertaald naar The Founding Member Hoodie
Bron: bron/BRON.md (R1–R10). Huidige stand gelezen via Shopify (read-only, 2026-10-03).

## Nulmeting product (Shopify, DRAFT)
| Veld | Nu | Regel |
|---|---|---|
| Title / H1 | "The Founding Member Hoodie" — geen productzoekwoord | R7 ✗ |
| SEO title | leeg → theme gebruikt producttitel + shopnaam | R3 ✗ |
| Meta description | leeg | R5 ✗ |
| Afbeeldingen + alt | 0 afbeeldingen | R6 n.v.t. (rechten Tapstitch-basis open) |
| Body | ±45 woorden, bevat "Concept product…"-zin | R8 ✗ (< 250) |

## Inputs (variabel per product)
| Input | Hoodie-waarde | Bron |
|---|---|---|
| Productnaam | The Founding Member Hoodie | merkdossier r12 |
| Primair zoekwoord | heavyweight boxy hoodie | kansen 6.1 K1 (HYPOTHESE) |
| Secundair zoekwoord | black graphic back print hoodie | kansen 6.1 K1 (HYPOTHESE) |
| Unieke eigenschap | 500 gsm · design 010 rugprint | merkdossier r13 |
| Voordeel + eerlijke beperking | Drop 001 · "no restock" ALLEEN na beleid | N29/6.2 blokkade |
| Bevestigde feiten | maattabel, 500 gsm, S–2XL, boxy | merkdossier r13 |
| Verboden claims | samenstelling, wasvoorschrift, krimp, "premium cotton" | merkdossier r14, 6.2 feitencheck |

## Tools
- Lezen/schrijven: Shopify Admin GraphQL (productUpdate: title, seo.title, seo.description, descriptionHtml; media alt) — schrijven alleen op DRAFT-product, na akkoord student.
- Telling: tekenlengte title/description en woordtelling body (lokaal script).
- Controle R9: pas mogelijk na livegang (paginabron); tot dan: GraphQL terug-lezen.

## Uitvoerstappen
1. Lees product + bevestigde feiten; noteer nulmeting (tabel hierboven).
2. Kies primair + secundair zoekwoord uit kansenlijst.
3. Schrijf Title/H1: productnaam + primair zoekwoord, natuurlijk (R1, R7).
4. Schrijf SEO title ≤ 60 tekens, primair zoekwoord vooraan (R3, R4).
5. Schrijf meta description ≤ 160 tekens, uniek, eenvoudige taal (R5).
6. Schrijf body ≥ 250 woorden uit eigen feiten, geen leverancierstekst (R8); verboden claims eruit.
7. Alt-teksten per afbeelding: wat er te zien is (R6) — pas bij upload.
8. Lokale preview + telling; student akkoord → productUpdate op DRAFT; terug-lezen.
9. Na livegang: paginabron-check (R9), URL Inspection; verwachting dagen–weken (R10).

## Afwijking van tutorial
- Title-voordeel "no restock" (R4) geblokkeerd tot beleid vastligt.
- Zoekwoorden zijn hypothesen (geen Keyword Planner/Search Console-data).
