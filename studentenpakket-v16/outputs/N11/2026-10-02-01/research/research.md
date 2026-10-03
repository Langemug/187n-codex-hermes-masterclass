# Research · conversie productpagina The Founding Member Hoodie (N11)
Starttijd: Fri Oct  2 06:47:56 UTC 2026
Eindtijd: Fri Oct  2 06:48:53 UTC 2026
Agent: Research. Schrijft alleen dit bestand.

## Methode en beperkingen (eerlijk)
- WebSearch werkte; WebFetch was GEBLOKKEERD door de egress-proxy (baymard.com en ftc.gov: EGRESS_BLOCKED). Bronpagina's zijn dus niet zelf geopend.
- "Wat de bron zegt" komt uit zoekresultaat-samenvattingen, niet uit eigen lezing van de pagina. Daarom staat betrouwbaarheid hooguit op midden, tenzij meerdere bronnen hetzelfde zeggen. Controleer cijfers op de bron-URL voordat ze in copy of presentaties gebruikt worden.
- Webinhoud is als data behandeld. Geen productfeiten verzonnen: verzending/retour = to be confirmed; oplage, materiaal en levertijd staan open in het merkdossier.

## Inzichten

### 1. Verzendinfo hoort op de productpagina
- Bron: https://baymard.com/learn/ux-statistics (via zoekresultaat; ook https://baymard.com/research/checkout-usability)
- Zegt: 43% van sites toont geen verzendinfo/kosten op de productpagina, terwijl 64% van gebruikers die daar zoekt. Grootste afhaakreden in checkout: extra kosten (verzending, belasting) te hoog (~40%); trage levering ~20%.
- Betrouwbaarheid: midden (Baymard = gerenommeerd onderzoek; cijfers via secundaire samenvatting).
- Toepassing: direct onder prijs/CTA een regel "SHIPPING: TO BE CONFIRMED · costs shown before payment" en uitklapblok Shipping & Returns. Geen levertijd of kosten noemen tot Remi bevestigt. UK/US: vermeld dat valuta, belasting en invoerkosten nog open zijn.

### 2. Maatgids met echte maten wegneemt maat-onzekerheid
- Bron: https://baymard.com/research-articles/apparel-size-information en https://baymard.com/research-articles/apparel-and-accessories-quantitative-ux-insights-2026
- Zegt: shoppers zoeken vooral de size chart voor maten; 58% van geteste sites had size charts zonder cruciale maten; ~90% van apparel-sites laat pasvorm onvoldoende beoordelen. Reviews worden vooral gebruikt voor fit (48%).
- Betrouwbaarheid: midden-hoog (meerdere Baymard-pagina's wijzen dezelfde kant op).
- Toepassing: link "SIZE GUIDE" naast de maatkiezer, tabel S–2XL in cm (lengte/schouder/borst/mouw, ±1–3 cm, uit leveranciersscreenshot, nog als concept markeren). Fit-hint "boxy fit" alleen als model UT0268 dat bevestigt. Geen nep-reviews; fit-subscore pas als er echte reviews zijn.

### 3. Schaarste alleen als hij echt is
- Bron: FTC-rapport "Bringing Dark Patterns to Light" (2022), samengevat in https://www.dglaw.com/ftc-staff-report-brings-dark-patterns-to-light/ en https://www.agg.com/news-insights/publications/the-ftc-blacklists-dark-patterns/
- Zegt: valse urgentie (resettende timers) en nep-"only X left"-meldingen noemt de FTC misleidend en handhaafbaar.
- Betrouwbaarheid: hoog voor de kern (FTC-rapport bestaat en wordt door meerdere advocatenkantoren gelijk samengevat); ftc.gov zelf niet geopend.
- Toepassing: geen countdown of voorraadteller zolang oplage en datum niet vastliggen. Eerlijke schaarste die wel klopt met het merkdossier: "Your hoodie number is your member number" en "online remainder for 7 days after the pop-up" (alleen tonen als de pop-updatum vastligt).

### 4. Nep-timers komen veel voor en vallen op
- Bron: https://arxiv.org/pdf/1907.07032 (Mathur e.a., "Dark Patterns at Scale", crawl van ~11K shoppingsites)
- Zegt: 157 misleidende countdown-timers op 140 sites gevonden.
- Betrouwbaarheid: hoog (peer-reviewed, Princeton/UChicago).
- Toepassing: onderbouwing voor de bouwer om geen generieke timer-app te gebruiken; de doelgroep (18–28, online) herkent dit.

### 5. Add to cart duidelijk en boven de vouw
- Bron: https://www.nngroup.com/articles/ecommerce-product-pages/
- Zegt (volgens samenvatting): duidelijk gelabelde koopknop op iedere productpagina, koopactie nooit dubbelzinnig; verborgen onder de vouw is een veelgemaakte fout.
- Betrouwbaarheid: midden (NN/g is gezaghebbend, maar de "boven de vouw"-formulering kwam mogelijk uit een secundaire bron in hetzelfde zoekresultaat).
- Toepassing: op 1440 en 390 moeten titel, prijs (€64,95 NL), maatkeuze en de knop JOIN/ADD TO CART zonder scrollen zichtbaar zijn. Eén primaire knop in --hot met zwarte tekst (DESIGN.md).

### 6. Mobiel: sticky koopknop, maar voorzichtig
- Bron: https://baymard.com/blog/ecommerce-ux-best-practices en https://baymard.com/blog/responsive-upscaling
- Zegt: als je een sticky add-to-cart gebruikt, geef hem ruimte en maak hem niet full-width; sticky elementen kunnen op mobiel content blokkeren. Primaire knop prominent en uniek.
- Betrouwbaarheid: midden. (Claims van "5–15% uplift" kwamen van app-verkopers: laag, niet gebruiken.)
- Toepassing: op 390 px een sticky balk met prijs + gekozen maat + JOIN, die de maatgids en code-regen niet afdekt. Geen tweede sticky element (chat, cookie) tegelijk.

### 7. Hoog mobiel afhaakpercentage, dus weinig frictie
- Bron: https://baymard.com/learn/ux-statistics (via zoekresultaat)
- Zegt: gemiddelde cart abandonment ~70%; mobiel hoger (~80%) dan desktop (~66%); 18% haakt af door verplicht account aanmaken; 19% vertrouwt de site niet met kaartgegevens.
- Betrouwbaarheid: midden (mobiel/desktop-split mogelijk uit secundaire bron).
- Toepassing: Founding Member-toegang mag geen verplichte accountstap vóór aankoop worden; uitleggen dat lidmaatschap bij de hoodie hoort (nummer = lidnummer). Vertrouwensregel bij de knop: betaalmethoden/secure checkout pas noemen als de Shopify-winkel echt staat ([OPEN]).

### 8. Lidmaatschap/community: geen sterke publieke bron gevonden
- Bron: geen controleerbare onderzoeksbron gevonden binnen deze sessie (WebFetch geblokkeerd).
- Betrouwbaarheid: n.v.t.
- Toepassing: leun op de eigen onderbouwing in het merkdossier (outputs/1.1/…/research/markt.md M1–M2: willen ergens bij horen). Formuleer lidmaatschap als feitelijk wat je krijgt ("Your hoodie number is your member number") zonder voordelen te beloven die nog niet vastliggen.

## Niet gebruiken
- Conversie-uplift-percentages van app- of bureau-blogs (scandiweb, easyappsecom, digitalapplied): commerciële bronnen, niet controleerbaar.
