# Stap 2 — Analyse buildrun les 062 (design 009)
Bron: lokaal sessietranscript (niet buiten project/omgeving verstuurd). Meting = wat in het transcript staat; geen tokentellingen van de provider beschikbaar.

| Meting | Waarde |
|---|---|
| Looptijd (eerste tot laatste stap) | 10:24 → 10:33 UTC ≈ 8,5 min (excl. wachttijd student) |
| Toolcalls | 17 (Bash 12 · Read 2 · Shopify query 1 · Shopify mutation 2) |
| Beeld-reads | 2 (overzicht mockups, preview-screenshot) — samen het grootste deel van de context |
| Tekst uit tools terug | ≈ 9,9k tekens |
| Tekst naar tools (input) | ≈ 18,3k tekens |
| Eigen antwoordtekst | ≈ 5,6k tekens |
| Herstelrondes | 2 (logo-zin eruit na review → er weer in na keuze student) |

## Waar ging context/tijd naartoe
1. **Producttekst 5× volledig verstuurd** (≈ 2,7k per keer): 2× JSON-dump om te kopiëren + 3× in productUpdate (v2, daarna terug naar v1). → grootste post in tool-input.
2. **Zoeken naar niet-bestaande "Agent Build Standard"**: 2 calls, 0 resultaat.
3. **Bestanden opnieuw gelezen** die al bekend waren: oplevering-template en operator-workflow (in les 058/059 al gelezen), merkdossier-regel logo.
4. **Review vond een claim die de eigenaar daarna terugdraaide** → één beslisvraag vooraf ("logo voorkant?") had 1 mutation + 2 edits bespaard.
5. Preview-screenshot op volle hoogte (1100×2057) i.p.v. alleen boven de vouw.
