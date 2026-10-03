# Reviewbesluit — 2 repositories (les 063 · 4.4) · 2026-10-03
Werkwijze: `git init` + `git fetch --depth 1 --no-recurse-submodules <url> <commit>` + checkout met hooks uitgeschakeld, in scratchpad (/tmp/claude-0/gh, buiten project). Geen npm/node/python uitgevoerd. Handmatige bronreview (grep + lezen).
**Scan:** SkillSpector en de werkboek-scanner (`/Users/ghatas/.local/bin/github-security-scan`) zijn in deze omgeving NIET beschikbaar → scan ontbreekt → volgens AGENTS.md: niet installeren.

## 1. freestylefly/awesome-gpt-image-2
| | |
|---|---|
| URL / commit | https://github.com/freestylefly/awesome-gpt-image-2 · `0dc09c46c8a30b1fdd89c18cc78a894dac2104e3` (geverifieerd: HEAD = commit) |
| Licentie | MIT (metadata). Afbeeldingen/voorbeeldcases in data/ (574 bestanden, 183 MB): licentie per beeld niet vastgesteld |
| Wat het is | **Geen pure promptlijst**: volledige web-app (Vite/React) met Supabase, Stripe, Alipay, Google Analytics, betaalde beeldgeneratie via api.apimart.ai, plus agent-skill `agents/skills/gpt-image-2-style-library` |
| Hooks/installatie | package.json: `predev`/`prebuild` draaien scripts automatisch; `install:skill` + `bin/install.mjs` kopieert skill naar ~/.codex, ~/.claude en ~/.agents (buiten project, alle agents) |
| Netwerk | app: apimart.ai, alipay, googleapis, gpt-image2.canghe.ai; skill zelf: geen netwerk/exec (alleen fs-kopie) |
| Secrets | alleen `.env.example`; geen echte sleutels gevonden met patroon-grep |
| CI | .github/workflows/publish-style-skill.yml (npm publish) — niet relevant voor ons |
| Risico | Middel: grote oppervlakte (betalingen, accounts, analytics) die wij niet nodig hebben; installer schrijft in globale skill-mappen |
| **Besluit** | **NIET INSTALLEREN** (scan ontbreekt). Toegestaan: `references/style-library.md` lezen als **naslag (SOURCE_ONLY)** voor les B4, zonder app of installer te draaien. Na scan alleen de map `agents/skills/gpt-image-2-style-library` handmatig in de projectmap kopiëren — nooit `bin/install.mjs` (globaal). |

## 2. cloudflare/security-audit-skill
| | |
|---|---|
| URL / commit | https://github.com/cloudflare/security-audit-skill · `c1c8a8c1471069fb0e188eeaff69b8e8db6564a8` (geverifieerd) |
| Licentie | MIT |
| Wat het is | 22 bestanden: Markdown-methodiek (SKILL.md + 14 domeinbestanden), report-schema.json, 2 Node-validators (+ tests) |
| Hooks/installatie | geen package.json, geen install-script, geen submodules, geen CI |
| Code | validate-findings.cjs / validate-coverage-ledger.cjs: alleen `fs`, `path`, `util`; lezen een opgegeven rapportbestand; geen netwerk, geen child_process, geen env |
| Gedrag skill | standaard "guidance mode"; volledige audit + bestanden pas op expliciet verzoek |
| Risico | Laag (bronreview). Let op: skill stuurt subagents aan → verbruik bij full audit |
| **Besluit** | **NIET INSTALLEREN tot scan.** Bronreview geeft geen HIGH/CRITICAL-indicatie; na SkillSpector zonder onverklaarde HIGH/CRITICAL: kandidaat voor geïsoleerde proef (guidance mode op onze kandidaat-skills foto-mockup / seo-check). |

## Stap 4 — installatie
Niet uitgevoerd: scan incompleet (ontbreekt) voor beide. Geen geïsoleerde setup of proefrun.
Bronkopieën staan alleen in scratchpad (tijdelijk, worden niet in Git gezet).

## Stap 5 — besluit student (2026-10-03)
awesome-gpt-image-2: akkoord — alleen references/style-library.md als naslag (SOURCE_ONLY); app en installer niet gebruiken.
