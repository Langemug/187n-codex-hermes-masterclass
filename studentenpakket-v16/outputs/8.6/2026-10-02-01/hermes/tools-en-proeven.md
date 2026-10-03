# Tools en proeven per specialist (les 094 · 8.6) — 2026-10-03 · status: concept
Bron skills: hermes/team.json v8.2.0 (profielen hebben geen tool-/MCP-config; config.yaml bevat alleen model + bot_mode). Hermes-omgeving zelf niet beschikbaar → verbindingen daar **niet** ingericht; Codex/Claude-connectoren worden **niet** automatisch gedeeld.

## Stap 1–3 — Skills + benodigde tools
| Specialist | Skills (team.json) | Benodigde tool | Beschikbaar in deze Claude-sessie | Hermes-omgeving |
|---|---|---|---|---|
| ecommerce | ecommerce-workflow, ecom-review | Shopify (lezen; DRAFT-wijzigingen na akkoord) | ✔ Shopify-connector | open: eigen koppeling |
| email | email-workflow, ecom-review | Klaviyo of Composio-mail | ✔ Klaviyo-connector (niet getest) | open |
| sales | sales-workflow, outreach-review | CRM via Composio | ✗ Composio niet verbonden | **BLOCKED** (les 049) |
| analytics | analytics-workflow, ecom-review | Shopify orders, Meta insights | ✔ Shopify, Meta (alleen lezen) | open |
| content / visual | content-/visual-workflow, design-review | Higgsfield (beelden, kosten), ImageMagick lokaal | ✔ Higgsfield, lokaal | open |
| customer-service | support-workflow, ecom-review | kennisbank + orders (Shopify read) | lokaal ✔ | open |
| researcher | deep-research, seo-review, outreach-review | web (proxy blokkeert community.shopify.com e.a.), Atria | gedeeltelijk; Atria ✗ | **BLOCKED** (Atria) |
| overige (orchestrator, strategist, builder, reviewer, website-builder, brand-designer, operations) | zie team.json | bestanden lokaal | ✔ | open |

## Stap 4 — Proefopdrachten (echte resultaten)
| Specialist | Proef | Resultaat |
|---|---|---|
| ecommerce | Shopify read-only: aantal DRAFT + status 2 producten | 151 DRAFT; founding-member-hoodie DRAFT, SEO-title "Heavyweight Boxy Hoodie, Black 500 gsm \| Visionair Society"; vs-009-hoodie DRAFT ✔ |
| analytics | metrics.json narekenen uit TEST-orders.csv | 4 betaald, som €269,80 = netto_omzet_incl_btw in metrics ✔ (bruto 334,75 incl. refund) |
| customer-service | supportbot 9 testvragen (les 082) | 9/9 verwachte route (kb/order/ontbreekt/overdracht) ✔ |
| sales / researcher | — | BLOCKED (Composio/Atria) |
| email | Klaviyo-proef niet gedaan (geen expliciete toestemming accountgebruik in deze les) | open |

## Bevinding uit proef (inconsistentie)
Live DRAFT-SEO-title bevat **"500 gsm"** (les 061), terwijl de teamcampagne (8.4/8.5) "500 gsm" als verboden materiaalclaim behandelt. Merkdossier r13 noemt 500 gsm uit Tapstitch-screenshot, maar "goedgekeurde productomschrijving: nog niet". → Eigenaar moet kiezen: 500 gsm toegestaan (dan teamregel aanpassen) of uit SEO-title halen.

Besluit student (stap 5): A — "500 gsm" toegestaan; merkdossier r17 + projectkennis bijgewerkt. Verboden-lijsten in 8.4/8.5 (offerbriefs) vervallen voor dit ene punt.
