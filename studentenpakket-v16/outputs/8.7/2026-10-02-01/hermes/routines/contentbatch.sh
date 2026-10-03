#!/bin/bash
# contentbatch.sh <offerbrief.md> <outdir> — wekelijkse batch-start: controleert offerbrief + verbodenlijst, maakt batchmap met taakplan-skelet.
# Teamuitvoering (Content/Visual/Reviewer) blijft een aparte, bevestigde stap. Niets publiceren.
B=$1; O=$2; RUN=$(date -u +%Y%m%dT%H%M%S%NZ); DIR="$O/batch-$RUN"; [ -e "$DIR" ] && { echo "STOP: $DIR bestaat"; exit 4; }; mkdir -p "$DIR"
if [ ! -f "$B" ]; then echo "# Batch $RUN — BLOCKED: offerbrief ontbreekt ($B)" > "$DIR/STATUS.md"; echo "BLOCKED $DIR"; exit 3; fi
grep -q "## Verboden" "$B" || { echo "# Batch $RUN — BLOCKED: offerbrief zonder verbodenlijst" > "$DIR/STATUS.md"; echo "BLOCKED $DIR"; exit 3; }
cp "$B" "$DIR/00-offerbrief.md"
printf '# Taakplan batch %s\n| Taak | Eigenaar | Bron | Output | Klaar als |\n|---|---|---|---|---|\n| B-01 | Content | 00-offerbrief.md | 01-content.md | CTA exact, 0 verboden claims |\n| B-02 | Visual | 01-content.md | 02-visual/ | 1080x1350, contrast >= 4.5:1 |\n| B-03 | Reviewer | 00-02 | 03-review.md | oordeel + herstelpunten |\nStatus: KLAAR VOOR TEAM — wacht op akkoord eigenaar.\n' "$RUN" > "$DIR/00-taakplan.md"
echo "OK $DIR"
