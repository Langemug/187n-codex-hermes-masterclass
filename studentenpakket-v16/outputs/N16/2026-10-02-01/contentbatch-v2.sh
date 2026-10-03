#!/bin/bash
# contentbatch-v2.sh <run-id> <offerbrief.md> <outdir> — idempotent: zelfde run-id → geen tweede uitvoering.
# Stappen read → prepare → review → save, met log; retry_limit 1; geen externe acties.
RID=$1; B=$2; O=$3; LOG="$O/run.log"; DIR="$O/$RID"; mkdir -p "$O"
ts(){ date -u +%FT%TZ; }; log(){ echo "$(ts) run=$RID $*" | tee -a "$LOG"; }
if [ -f "$DIR/DONE" ]; then log "SKIP al voltooid ($(cat "$DIR/DONE")) — geen tweede uitvoering"; exit 0; fi
TRIES=$(grep -c "run=$RID FAIL" "$LOG" 2>/dev/null); TRIES=${TRIES:-0}
if [ "$TRIES" -gt 1 ]; then log "STOP retry_limit=1 bereikt — handmatige actie nodig"; exit 5; fi
log "START (eerdere fouten: $TRIES)"
log "step read"; if [ ! -f "$B" ]; then log "FAIL read: input ontbreekt ($B)"; exit 3; fi
grep -q "## Verboden" "$B" || { log "FAIL read: verbodenlijst ontbreekt"; exit 3; }
log "step prepare"; mkdir -p "$DIR"; cp "$B" "$DIR/00-offerbrief.md"
printf '# Taakplan %s\nB-01 Content → 01-content.md\nB-02 Visual → 02-visual/\nB-03 Reviewer → 03-review.md\n' "$RID" > "$DIR/00-taakplan.md"
log "step review"; grep -q "JOIN THE SOCIETY" "$DIR/00-offerbrief.md" || { log "FAIL review: CTA ontbreekt"; exit 3; }
log "step save"; ts > "$DIR/DONE"; log "DONE output=$DIR (externe acties: geen)"
