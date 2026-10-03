#!/bin/bash
# dagbrief.sh <ordersdir> <outdir> [vandaag] [van] [tot] — wrapper rond N13/briefing.py met invoercontrole.
# Ontbrekende bron → BLOCKED-brief (exit 3), nooit verzonnen cijfers. Bestaand outputbestand → nieuwe run-id.
D=$1; O=$2; shift 2
mkdir -p "$O"; RUN=$(date -u +%Y%m%dT%H%M%S%NZ); OUT="$O/dagbrief-$RUN.md"; [ -e "$OUT" ] && { echo "STOP: $OUT bestaat"; exit 4; }
MISSING=""; for f in orders.csv tickets.json voorraad.csv leveringen.csv; do [ -f "$D/$f" ] || MISSING="$MISSING $f"; done
[ -f "$(dirname "$D")/escalaties.csv" ] || MISSING="$MISSING escalaties.csv"
if [ -n "$MISSING" ]; then printf '# Dagbrief %s — BLOCKED\nOntbrekende bron(nen):%s\nGeen cijfers gemaakt. Herstel: lever de bestanden in %s en start handmatig opnieuw (geen tweede automatische run).\n' "$RUN" "$MISSING" "$D" > "$OUT"; echo "BLOCKED $OUT"; exit 3; fi
python3 outputs/N13/2026-10-02-01/briefing.py "$D" "$OUT" "$@" && echo "OK $OUT"
