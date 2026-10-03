# Review · kooproute huidige storefront (N11, Reviewer-agent)
- Start: Fri Oct  2 06:47:56 UTC 2026
- Eind: Fri Oct  2 06:49:57 UTC 2026
- Bron: `mijn-project/storefront/` (alleen gelezen, niets gewijzigd). Playwright/Chromium, file:// URLs, 1440x900 en 390x844, plus reduced-motion.
- Route: index.html → JOIN THE SOCIETY → product.html → maat M → JOIN THE SOCIETY → '> ACCESS GRANTED' → demo-mandje → + / − / × → Escape.
- Screenshots: `desk-*.png`, `mob-*.png` in deze map.

## Meetresultaten (samenvatting)
| Check | Desktop 1440 | Mobiel 390 |
|---|---|---|
| pageerrors / console errors | 0 | 0 |
| Horizontale scroll (home, product, mandje) | 0 px | 0 px |
| Home-CTA boven de vouw | ja (y≈720/900) | ja (y≈615/844) |
| Product-CTA (JOIN) boven de vouw bij binnenkomst | ja (y≈554/900) | **nee** (y≈1152/844; beeld + thumbs + conceptnotitie eerst) |
| Maatkeuze boven de vouw | ja (y≈460) | nee (y≈1058) |
| Klik home-CTA → product | ~1,45 s wachttijd (ACCESS GRANTED-animatie ook op link) | ~1,43 s |
| Klik JOIN → mandje open | ~1,7–1,9 s | ~1,5–1,8 s |
| Reduced motion: klik → mandje | ~0,87 s (300 ms + render) | idem |
| Klikken minimaal (home → mandje met item) | 2 (L staat al voorgeselecteerd) / 3 met bewuste maatkeuze | idem |
| Tabs tot maat (productpagina) | 13 | 10 |
| Tabs van maat naar CTA | 2 (via Size guide) | 2 |
| Pijltjestoets wisselt maat | ja (L → M) | ja |
| Enter op CTA werkt | ja | ja |
| Escape sluit mandje, focus terug naar CTA | ja | ja |
| Mobiel menu (details/summary) opent | n.v.t. | ja |
| Alt-attribuut op alle img's | ja (decoratief = alt="") | ja |

## Bevindingen

### 1. Koop-CTA en maatkeuze staan op mobiel onder de vouw — **hoog**
- Waar: `product.html` op 390x844.
- Bewijs: bij binnenkomst staat JOIN THE SOCIETY op y≈1152 en de maten op y≈1058 bij een viewport van 844 (`mob-product.png`). Bovenaan: breadcrumb, groot productbeeld, 4 thumbnails, conceptnotitie.
- Voorstel: op mobiel titel + prijs + maat + CTA direct onder een kleiner beeld (of sticky CTA-balk "JOIN THE SOCIETY · €64,95" onderaan); conceptnotitie onder de CTA.

### 2. Kunstmatige wachttijd van ~1,4 s, twee keer in de route — **midden**
- Waar: `assets/ui.js` r. 43–45 (timeout 1400 ms), op home-CTA én product-CTA.
- Bewijs: home → product 1,43–1,45 s; JOIN → mandje 1,5–1,9 s. Totaal ~3 s pure animatie in een route van 2–3 klikken. Tijdens de wachttijd geen aria-live melding.
- Voorstel: animatie alleen op de product-CTA (de echte "toegang"-actie), home-CTA direct laten navigeren; of ~0,6–0,8 s. Tekst '> ACCESS GRANTED' in een `aria-live="polite"`-regio aankondigen. Reduced motion (300 ms) werkt al goed.

### 3. Focus gaat verloren na + / − in het mandje — **midden**
- Waar: `assets/ui.js` `renderCart()` (r. 11–31): de regels worden bij elke wijziging opnieuw opgebouwd.
- Bewijs: na klik op "More" staat `document.activeElement` op BODY (beide viewports). Toetsenbord-/screenreadergebruiker moet opnieuw navigeren; volgende Tab springt naar "Skip to content".
- Voorstel: na `save()` de focus terugzetten op de knop met dezelfde index/aria-label, of alleen de aantal-span bijwerken i.p.v. de hele regel.

### 4. Geen focus trap in het mandje (aria-modal="true") — **midden**
- Waar: `<aside class="cart" role="dialog" aria-modal="true">` in product.html.
- Bewijs: Tab-volgorde in open mandje: Less → More → Remove → **daarna "Skip to content", logo, HOME…** achter de shade (desktop en mobiel). Close-knop krijgt wel focus bij openen, Escape werkt.
- Voorstel: Tab/Shift+Tab binnen het dialoog laten rondgaan, of `inert` op de rest van de pagina zetten zolang het mandje open is.

### 5. Claims over nummering/lidmaatschap stellig, terwijl nummering niet bevestigd is — **midden**
- Waar: productpagina: "Every hoodie in Drop 001 carries its own number", "Your hoodie number is your member number", "Founding Member access included", "the private channel, first access to Drop 002, and an invite to the pop-up".
- Bewijs: dezelfde pagina meldt "CONCEPT · SHIPPING AND NUMBERING NOT CONFIRMED". Voordelen (private channel, first access, invite) hebben geen bron/bevestiging in de pagina.
- Voorstel: bij deze regels zichtbaar "(planned · not confirmed)" of de claims pas tonen na bevestiging; geen nieuwe feiten toevoegen (zie taakverdeling).

### 6. Prijs "UK/US €74,95" zonder uitleg — **laag**
- Waar: prijsregel product (`NL · INCL. VAT  UK/US €74,95`).
- Bewijs: geen toelichting waarom/hoe (verzending? douane?), en verzending staat op "To be confirmed".
- Voorstel: tooltip/regel "indicatief, incl. ... · niet bevestigd" of weglaten tot bevestigd.

### 7. Focusring op primaire knop visueel zwak — **laag** (twijfel)
- Waar: `.btn:focus-visible` (base.css r. 13) vs. hover/focus-animatieklassen (`is-focus`).
- Bewijs: computed outline bij keyboard-focus op JOIN: `solid 1px` (DESIGN.md vraagt 2px `--hot`, offset 4px); de eerste meting op de homepage gaf zelfs 0px tijdens de animatie. Zie `desk-cta-focus.png` / `mob-cta-focus.png`. Maat-labels hebben wel 2px `--hot` outline.
- Voorstel: controleren welke regel de outline overschrijft (animatie/transition op outline-width?) en 2px vastzetten.

### 8. Maat L standaard geselecteerd — **laag**
- Waar: `<input id="size-L" checked>`.
- Bewijs: JOIN werkt zonder bewuste maatkeuze; snelle route = 2 klikken, maar risico op verkeerde maat (oversized fit).
- Voorstel: bewust houden mits "Boxy oversized — check size guide" naast de CTA staat; anders geen voorselectie + duidelijke foutmelding.

### 9. Contrast — **laag** (twijfel)
- `--hot` (#B14BFF) op zwart 5.3:1 ok voor labels. Twijfel: dimtekst (`rgba(255,255,255,.6)`) op 9–11px labels boven de paarse code-regen; regen kan lokaal contrast verlagen. Conceptnotitie (paars op zwart, kleine mono) is leesbaar maar klein.
- Voorstel: microlabels ≥11px op mobiel; regen achter tekstpanelen dimmen.

## Wat goed gaat
- Geen JS-fouten, geen horizontale scroll, mobiel menu werkt.
- Demo-labels zijn overal duidelijk: header "Open demo cart", in mandje "DEMO" per regel, "DEMO DATA. THIS STORE IS NOT LIVE. NO PAYMENT, NO ORDER…", "CHECKOUT · NOT LIVE", footer "CONCEPT, NOT LIVE". Conceptnotitie bij beeld: "digital mockups… not a photo of the final garment".
- Alt-teksten aanwezig; decoratieve logo's `alt=""`/aria-hidden; thumbnails hebben aria-label.
- Maatkeuze als echte radiogroep (fieldset/legend), pijltjestoetsen werken, focus zichtbaar op labels.
- Escape sluit mandje en zet focus terug op de CTA; reduced-motion verkort de wachttijd en stopt de regen.
