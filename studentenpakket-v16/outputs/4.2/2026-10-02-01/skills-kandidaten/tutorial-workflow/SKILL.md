---
name: shopify-productpagina-seo
description: Optimaliseer title/H1, SEO title, meta description, producttekst en alt-teksten van één Shopify-product volgens de Shopify Help Center-tutorial, met lokale controle vóór wijziging.
---

# shopify-productpagina-seo · kandidaat-skill (NIET geladen)

**Bron:** Shopify Help Center, "Adding keywords for SEO to your Shopify store", https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords — door student aangeleverd 2026-10-03; regels R1–R10 in ../../bron/BRON.md.
**Proefuitvoering:** ../../voorbeeld-hoodie/ (The Founding Member Hoodie), seo-check 12/12 OK.

## Trigger
"Maak de productpagina van <product> SEO-klaar" of een nieuw product met lege SEO-velden.

## Input (variabel)
productnaam/handle · primair + secundair zoekwoord (bron vermelden: data of HYPOTHESE) · bevestigde feiten met bronregel · verboden claims · afbeeldingen (optioneel).

## Stappen
1. Lees product read-only (title, seo, descriptionHtml, media.alt); noteer nulmeting per regel R3–R8.
2. Schrijf in een nieuwe map: title.txt (H1: naam + primair zoekwoord), seo-title.txt (≤ 60, primair vooraan), meta.txt (≤ 160, uniek), body.html (≥ 250 woorden, eigen tekst, alleen bevestigde feiten).
3. Draai `scripts/seo-check.py <map> "<primair>" "<secundair>" "<verboden,...>"`; bij FOUT herschrijven.
4. Alt-tekst per afbeelding: beschrijf wat zichtbaar is (R6).
5. Toon resultaat aan eigenaar. Alleen na expliciet akkoord: productUpdate op het product (bij voorkeur DRAFT); daarna terug-lezen.
6. Na livegang: paginabron <title>/<meta description> vergelijken (R9); herindexering kan weken duren en Google kan tekst herschrijven (R10) — geen rankingbelofte.

## Escalatie
Ontbrekende feiten → weglaten en melden, niet invullen. Claim zonder bron → verboden-lijst. Product live → wijziging alleen met aparte autorisatie.

## Ontbrekend t.o.v. tutorial (bij proef)
- R6 alt-teksten niet getest (product heeft 0 afbeeldingen).
- R9 paginabron-check niet mogelijk (product DRAFT, niet live).
- Zoekwoordonderzoek (tools) niet uitgevoerd; hypothesen uit les 056.
- Interne link "boxy fit guide" in body nog als tekst, geen link (gids verborgen).
