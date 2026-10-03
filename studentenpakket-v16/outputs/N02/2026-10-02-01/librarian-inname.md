# Librarian-inname (les 009 · N02) — 2026-10-03
Profiel: second-brain/profiel/SOUL.md (gelezen; scan 23/23 gelijk). Oefenvault: outputs/N02/2026-10-02-01/oefenvault (kopie lege startstructuur). Bron: second-brain/fixtures/inname.json (FICTIEF), sha256 ongewijzigd na inname (fixture.sha256 OK).

## Stap 3 — Inname: 3 bronnen vs. bestaande index
Bestaande index: leeg (geen records) → niets dubbel bij eerste inname.
| Bron-ID | Datum | Waarde | Status | Oordeel Librarian |
|---|---|---|---|---|
| bron-oud | 2026-09-01 | 39 EUR | confirmed | **toegevoegd**, maar vervangen → historie |
| bron-nieuw | 2026-09-10 | 45 EUR | confirmed, `supersedes: bron-oud` | **toegevoegd = actuele waarde** (expliciet vervangingsbesluit) |
| bron-idee | 2026-09-20 | 29 EUR | idea | **toegevoegd als onzeker/idee** — nieuwer, maar géén besluit (SOUL: "nieuwe datum bewijst geen goedkeuring") |

Extra proeven:
- Herhaalde inname zelfde bestand → `added: []`, `duplicates: 3` ✔ (geen dubbele records)
- Zelfde bron-ID met gewijzigde inhoud (bron-idee 29 → 19 EUR) → geweigerd: "Bron-ID bestaat met andere inhoud; maak een nieuwe bronversie" ✔

## Stap 4 — Vraag die twee bronnen nodig heeft
Vraag: "Wat is de actuele bundelprijs van demo-brand en waarom niet 39 of 29 euro?"
Antwoord (query): **45 EUR** — bron `bron-nieuw` (FICTIEF: prijsbesluit 2), die `bron-oud` (39 EUR) expliciet vervangt; `bron-idee` (29 EUR) is een brainstorm, niet goedgekeurd.
Verwijzingen gecontroleerd: sources = [bron-nieuw]; history = [bron-oud: confirmed, bron-idee: idea] — klopt met inname.json.

## Gewijzigde paden
oefenvault/records.json (nieuw). Bronbestanden ongewijzigd. Open conflicten: geen.
