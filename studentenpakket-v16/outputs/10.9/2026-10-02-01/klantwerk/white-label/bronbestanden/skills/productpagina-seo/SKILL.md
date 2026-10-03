---
name: shopify-productpagina-seo
description: Optimaliseer title/H1, SEO title, meta description, producttekst en alt-teksten van één Shopify-product volgens de Shopify Help Center-tutorial, met lokale controle vóór wijziging.
---

# shopify-productpagina-seo · kandidaat-skill (NIET geladen)

**Gebaseerd op:** Shopify Help Center, "Adding keywords for SEO to your Shopify store" (help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords), regels samengevat in eigen woorden.

## Trigger
"Maak de productpagina van <product> SEO-klaar" of een nieuw product met lege SEO-velden.

## Input (variabel)
productnaam/handle · primair + secundair zoekwoord (bron vermelden: data of HYPOTHESE) · bevestigde feiten met bronregel · verboden claims · afbeeldingen (optioneel).

## Stappen
1. Lees product read-only (title, seo, descriptionHtml, media.alt); noteer nulmeting per regel R3–R8.
2. Schrijf in een nieuwe map: title.txt (H1: naam + primair zoekwoord), seo-title.txt (≤ 60, primair vooraan), meta.txt (≤ 160, uniek), body.html (≥ 250 woorden, eigen tekst, alleen bevestigde feiten).
3. Draai `../../scripts/seo-check.py <map> "<primair>" "<secundair>" "<verboden,...>"`; bij FOUT herschrijven.
4. Alt-tekst per afbeelding: beschrijf wat zichtbaar is (R6).
5. Toon resultaat aan eigenaar. Alleen na expliciet akkoord: productUpdate op het product (bij voorkeur DRAFT); daarna terug-lezen.
6. Na livegang: paginabron <title>/<meta description> vergelijken (R9); herindexering kan weken duren en Google kan tekst herschrijven (R10) — geen rankingbelofte.

## Escalatie
Ontbrekende feiten → weglaten en melden, niet invullen. Claim zonder bron → verboden-lijst. Product live → wijziging alleen met aparte autorisatie.

## Regels (samengevat)
R1 natuurlijke zinnen · R3 SEO title ≤ 60, hoofdzoekwoord vooraan · R4 primair + secundair zoekwoord, unieke eigenschap · R5 meta ≤ 160, uniek · R6 alt-tekst = wat zichtbaar is · R7 H1 = producttitel met zoekwoord · R8 ≥ 250 woorden eigen tekst · R9 paginabron controleren · R10 Google kan herschrijven; geen rankingbelofte.
