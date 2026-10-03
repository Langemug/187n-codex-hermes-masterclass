# Taakplan · campagne A · 3 static ads (1080×1350)
Run 2026-10-02-01 · Orchestrator (stand-in Hermes) · 2026-10-03
Rollen: alleen Content, Visual, Reviewer. Geen web, geen accounts, niets publiceren of uploaden (Meta/Shopify niet aanraken).

## Vaste input
- Campagne A "Not at the pop-up? You're still in." — gebruik hook-variant **"NOT AT THE POP-UP?"** (lidstatus online onbevestigd; open besluit eigenaar).
- CTA exact: **"€64,95 · JOIN THE SOCIETY"** (vault fmh-cta-2).
- Formaat: static 1080×1350, 3 stuks.

## Verboden claims (alle taken)
- Online kopers krijgen dezelfde lidstatus / Founding Member-toegang / eigen lidnummer (ONBEVESTIGD) — ook niet "You're still in".
- Materiaal-/kwaliteitsclaims, incl. "500 gsm" (geen goedgekeurde claims tot bevestiging Tapstitch).
- "No restock" / restockclaims (niet in merkdossier vastgelegd).
- Pop-up-stad of -datum (open); alleen "in Europe" / "online 7 dagen later" mag.
- Nep-schaarste, reviews/testimonials, ledenaantallen, verzendbeloftes.
- Andere prijzen dan €64,95 (UK/US €74,95 niet in deze NL-batch).

## Taken
| Taak-ID | Eigenaar | Bronpaden | Output | Klaarcriterium | Afhankelijk van |
|---|---|---|---|---|---|
| CA-8.4-01-CONTENT | Content | outputs/8.3/2026-10-02-01/hermes/projectkennis.md · outputs/5.7/2026-10-02-01/content/ads/01-angles-scripts.md · outputs/5.7/2026-10-02-01/content/ads/02-variantregister.csv · context/merkstem.md · context/merkdossier.md | `01-content.md` | 3 ads (ad-1..ad-3) met headline met "NOT AT THE POP-UP?", sub, CTA exact "€64,95 · JOIN THE SOCIETY", primary text; bron per claim; zelfcheck tegen verbodenlijst = 0 treffers | — (start) |
| CA-8.4-02-VISUAL | Visual | `01-content.md` · context/DESIGN.md · bestaande assets uit variantregister (mockups/foto/fm-010-back-model-dark.jpg, klantwerk/productcontent/definitief/*.jpg, logo) | `02-visual/ad-1.png`, `ad-2.png`, `ad-3.png` | 3 PNG's exact 1080×1350; tekst letterlijk uit 01-content.md; DESIGN.md gevolgd; alleen bestaande assets (geen nieuwe beelden/Tapstitch-rechten open → bij ontbrekend asset BLOCKED melden, niets verzinnen) | CA-8.4-01-CONTENT klaar |
| CA-8.4-03-REVIEW | Reviewer (onafhankelijk) | `01-content.md` · `02-visual/` · projectkennis.md · dit taakplan | `03-review.md` | Per ad: afmeting, hook, CTA exact, verbodenlijst, bronnen, spelling; oordeel GOED/AANPASSEN per ad + open punten (lidstatus, Tapstitch, pop-up) | CA-8.4-02-VISUAL klaar |

Volgorde: 01 → 02 → 03 (sequentieel). Rol zonder bron = BLOCKED, geen vervangend bestand. Alle outputs in `outputs/8.4/2026-10-02-01/hermes/campagne-overdracht/`.
