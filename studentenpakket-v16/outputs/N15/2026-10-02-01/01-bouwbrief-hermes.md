# Bouwbrief (rol Hermes/Orchestrator → Codex) — vergelijking pop-up vs online
Taak-ID: N15-CMP-01 · Bron: outputs/8.3/2026-10-02-01/hermes/projectkennis.md · merkdossier r18, r22, r24
Werkversie: kopie van outputs/2.3/2026-10-02-01/storefront → outputs/N15/2026-10-02-01/werkversie/ (origineel niet wijzigen).
## Wat bouwen
Nieuwe sectie `compare` op home, direct na featured-product: tabel met 2 kolommen "AT THE POP-UP" | "ONLINE".
| Rij | Pop-up | Online | Bron |
|---|---|---|---|
| Product | The Founding Member Hoodie · design 010 | same hoodie | r12, r18 |
| Price | NL €64,95 · UK/US €74,95 | same | r22 |
| When | first | 7 days after the pop-up | r24 |
| Where | pop-up in Europe (city TBA) | this store | r24 + bedrijf.md r23 |
| Member number | your hoodie number is your member number | **TBA** (not confirmed) | r18 / projectkennis: ONBEVESTIGD |
## Regels
Content in content/home.json (geen tekst hardcoded in sectie); stijl uit bestaande CSS-klassen; geen nieuwe claims; "TBA" zichtbaar laten; build via `python3 build.py`; geen publicatie.
## Klaarcriterium
index.html bevat sectie #compare met 5 rijen; geen JS-fouten; mobiel 390 px zonder horizontale scroll; screenshot desktop + mobiel.
