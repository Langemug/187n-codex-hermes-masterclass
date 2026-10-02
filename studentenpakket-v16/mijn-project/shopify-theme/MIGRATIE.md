# Migratieoverzicht · storefront → Shopify-theme "Visionair Terminal" (les 3.2)
Bron: `mijn-project/storefront/` (goedgekeurd in 2.3/N11). Doel: `shopify/theme/` → ongepubliceerd theme in Visionair Society (toestemming student: B).

## Mapping
| Storefront (statisch) | Shopify-theme | Data |
|---|---|---|
| layout/theme.html | layout/theme.liquid | content_for_header, routes, shop |
| sections/header.html | sections/header.liquid | menu = linklist (instelling), shop.name, cart.item_count |
| sections/footer.html | sections/footer.liquid | blocks "Link column" = linklists |
| sections/hero.html | sections/hero.liquid | alle copy als section-instellingen |
| sections/featured-product.html | sections/featured-product.liquid | **product-picker** → product.title, price \| money, featured_media, url |
| sections/drops-grid.html + collections.html | sections/collection-list.liquid + templates/collection.json (main-collection) | **collection-picker** blocks; collection.products, products_count, paginate |
| sections/main-product.html | sections/main-product.liquid | product.media, selected_or_first_available_variant, options_with_values, {% form 'product' %}, compare_at_price, available |
| snippets/size-guide.html | snippets/size-guide.liquid | alleen bij tag `size-ut0268` (UT0268-maten); later → metafield |
| snippets/cart-drawer.html (DEMO, localStorage) | snippets/cart-drawer.liquid + assets/theme.js | **echte Shopify cart**: /cart/add.js, /cart.js, /cart/change.js; checkout = Shopify |
| content/*.json | section-/block-instellingen + Shopify-objecten | geen hardcoded titel/prijs/media meer |
| assets/*.css, rain.js | assets/ | ongewijzigd ontwerp (DESIGN.md) |
| — | templates/page, cart, search, 404, list-collections | basispagina's zodat het theme compleet is |

## Hardcoded → Shopify
- Titel, prijs, valuta, media, varianten, voorraad, beschrijving: uit `product`.
- Collecties en aantallen: uit `collection`/`collections`.
- Mandje: Shopify-cart (geen demo meer). Checkout = Shopify (niet zelf gebouwd).
- Blijft instelling (theme editor): hero-copy, offer-regel, vertrouwensregel, specs (blocks), conceptlabels.

## Nog niet in Shopify
- Product "The Founding Member Hoodie" bestaat nog niet (niet aangemaakt: aparte toestemming nodig). Test gebeurt op bestaande producten.
- 500 designs/mockups: zitten niet in Shopify (alleen als statische preview). Pas na productbesluit.
- Metafields voor maattabel/nummering: nog te definiëren.

## Controles
- Eigen theme-check (`/tmp/check.py`-logica): tags in balans, schema-JSON geldig, templates verwijzen naar bestaande sections, snippets/assets aanwezig → OK.
- Shopify CLI `theme check` niet gebruikt: CLI niet geïnstalleerd; installatie vereist eerst SkillSpector-scan + bronreview (werkgrenzen).

## Upload (toestemming student: B)
- Ongepubliceerd theme **"Visionair Terminal v0.1 (preview)"**, id `gid://shopify/OnlineStoreTheme/207618670917`, gemaakt als kopie van live theme "VS v31" (themeDuplicate) en daarna overschreven met onze bestanden (themeFilesUpsert). Live theme ongewijzigd.
- Shopify meldt: processing false, processingFailed false; bestanden aanwezig.
- Let op: de kopie bevat nog oude secties/templates van VS v31. Onze `header`, `footer`, `featured-product`, `collection-list`, `main-*` overschrijven gelijknamige oude secties; oude alternatieve templates die daarnaar verwijzen kunnen in de editor fouten geven. Opruimen vóór publicatie.
- Logo's verkleind (320px, PNG8) voor upload; base.css/storefront.css opgeschoond (dode collectie-tab-regels eruit).
- Productsjablonen: `product.json` neutraal (geen hoodieclaims op T-shirts); `product.founding-member.json` met hoodie-copy. Maattabel alleen bij tag `size-ut0268`.
- Render-test vanuit deze sessie niet mogelijk: storefront-domein geblokkeerd door egress-proxy (403). Controle door student via preview-link.

## Testproduct (toestemming student: C)
- Product "The Founding Member Hoodie" aangemaakt als **DRAFT** (niet zichtbaar voor klanten): id `gid://shopify/Product/16222167826757`, handle `founding-member-hoodie`, templateSuffix `founding-member`, tags `size-ut0268, drop-001, founding-member, concept`, varianten S–2XL à €64,95, SKU VS-FMH-*.
- Geen afbeeldingen: upload via deze sessie kan alleen met publieke URL. Student uploadt `mijn-project/storefront/assets/img/founding-member-hoodie-*.jpg` zelf in de admin.
- Voorraad niet gevolgd (untracked); product staat niet in een verkoopkanaal-publicatie gecontroleerd.
