# Draaiboek: alle 15 agents aanroepen via Hermes Telegram (2026-10-03)
Status: **DRAAIBOEK — niet uitgevoerd.** Hermes draait niet in deze cloudsessie; jij voert dit uit op je eigen computer.
Bronnen: hermes/START.md, hermes/team.json (15 profielen), les 099 (8.8), officiële docs:
https://hermes-agent.nousresearch.com/docs/user-guide/profiles/ · …/bot-mode/
Exacte gateway-/Telegram-commando's staan NIET in het cursuspakket → altijd eerst `--help` en de officiële docs; niets hieronder is geverifieerd tegen jouw Hermes-versie.

## Ontwerp (aanbevolen)
Eén Telegram-bot → **Orchestrator** als enige ingang. Orchestrator stuurt door naar de 14 specialisten met `message_agent` (START.md stap 7).
Waarom: één bot-token, één plek voor rechten, en de specialisten krijgen nooit direct berichten van buiten.
Aanroepen in Telegram: `@researcher zoek …`, `@content schrijf …` → Orchestrator routeert; of gewoon een taak, dan kiest Orchestrator.
(Alternatief 15 bots = 15 tokens en 15 keer rechten beheren → afgeraden.)

## Blokkades eerst (verplicht, AGENTS.md)
- [ ] **SkillSpector-scan van hermes/profiles 8.2.0** + bronreview; rapport buiten de bronmap bewaren. Zonder scan: niets laden.
- [ ] Hermes Desktop geïnstalleerd volgens start/INSTALLATIE.md; modelverbinding getest.

## Stappen op je eigen computer
1. **Profielen installeren** (na scan), per rol:
   `hermes profile install --help` (controleer eerst) →
   `hermes profile install <absoluut-pad>/hermes/profiles/<rol> --name cursus-<rol>` · nooit `--force`.
   Rollen: orchestrator, researcher, strategist, builder, reviewer, website-builder, brand-designer, content, visual, ecommerce, email, customer-service, operations, analytics, sales.
2. **Werkmap** van iedere bot = absolute pad naar studentenpakket-v16; laat AGENTS.md, context/bedrijf.md, context/merkdossier.md lezen.
3. **Doorsturen testen in Desktop**: Orchestrator → Researcher via `message_agent`; controleer antwoord + gemaakt bestand (ontvangstmelding telt niet).
4. **Telegram-bot maken**: in Telegram @BotFather → /newbot → token.
   **Token nooit in chat, Git, screenshots of bestanden in dit project** — alleen in de secretvoorziening van Hermes.
5. **Gateway koppelen aan alleen cursus-orchestrator**: volg de officiële Telegram/gateway-route uit de docs (`hermes gateway --help` of de Desktop-instelling). Zet een **allowlist met alleen jouw Telegram-gebruikers-ID**.
6. **Rechten via Telegram (aanbevolen)**
   | Mag via Telegram | Niet via Telegram (alleen met aparte expliciete autorisatie in Desktop) |
   |---|---|
   | lezen, samenvatten, concepten schrijven in outputs/, dagbrief, status | publiceren (theme, product ACTIVE), mails verzenden, ads/budget, aankopen, accountwijzigingen, routines activeren |
7. **Test (les 099 stap 3)**: stuur "Maak dagoverzicht" → Orchestrator → Operations → je krijgt voltooiingsmelding + pad naar het bestand. Daarna `@researcher` en `@content` elk één kleine taak.
8. **Backup** (les 099 stap 5): projectconfig + profielen zonder secrets; herstel in aparte map testen.

## Klaar wanneer
- 15 profielen zichtbaar in Bots, elk één rolantwoord met bronverwijzing.
- Telegram → Orchestrator → specialist → bestand + melding terug, getest voor ≥ 3 rollen.
- Onbekende afzender wordt geweigerd (allowlist-test).
- Publiceer-/verzendverzoek via Telegram wordt geweigerd of naar Desktop-akkoord verwezen.
