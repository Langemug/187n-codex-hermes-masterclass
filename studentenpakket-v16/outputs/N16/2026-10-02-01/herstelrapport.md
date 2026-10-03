# Herstelrapport (les 098 · N16) — 2026-10-03
Routine: R2 wekelijkse contentbatch (les 097) → idempotente versie `contentbatch-v2.sh` (run-ID verplicht, stappen read→prepare→review→save, log `runs/run.log`, DONE-marker, retry_limit 1, geen externe acties — conform praktijk-v16/routine.json).
Input: oefenkopie/00-offerbrief.md (kopie van 8.5; origineel ongemoeid).

| Proef | Run-ID | Log | Resultaat |
|---|---|---|---|
| Normale run (stap 2) | batch-001 | read→prepare→review→save→DONE | ✔ output runs/batch-001 |
| Input verwijderd (stap 3) | batch-002 | FAIL read: input ontbreekt | ✔ geen output, exit 3 |
| Herstel: input terug | batch-002 | START (eerdere fouten: 1) … DONE | ✔ output runs/batch-002 |
| Zelfde run-ID herhaald (stap 4) | batch-001, batch-002 | SKIP al voltooid — geen tweede uitvoering | ✔ geen dubbele output (2 batchmappen) |
| Retry-limiet | batch-003 (3× zonder input) | FAIL, FAIL, STOP retry_limit=1 | ✔ exit 5, handmatige actie vereist |
Volledige log: runs/run.log (24 regels).

## Open
Activeren in Hermes (Routines) na eigenaarakkoord; dezelfde idempotentie toevoegen aan dagbrief.sh (R1); tijdzone Europe/Amsterdam bevestigen.
