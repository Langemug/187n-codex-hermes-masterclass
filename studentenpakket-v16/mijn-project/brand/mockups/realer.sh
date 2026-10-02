#!/bin/bash
# realer.sh in.jpg out.jpg [seed] — subtiele "fabric realism" pass voor platte hoodie-mockups (ImageMagick 6)
# drapering (soft-light), print buigt mee (±2 px), lichtval, fleece-korrel, contactschaduw. Bron blijft ongewijzigd.
set -e
IN=$1; OUT=$2; SEED=${3:-7}; T=$(mktemp -d)
read W H < <(identify -format "%w %h\n" "$IN")
BG="rgb(11,6,18)"
# 1 masker van de hoodie (scherp, niet vervormd)
convert "$IN" -fuzz 5% -fill "rgb(255,0,255)" -draw "color 0,0 floodfill" -draw "color $((W-1)),0 floodfill" -draw "color 0,$((H-1)) floodfill" -draw "color $((W-1)),$((H-1)) floodfill" -fill black -opaque "rgb(255,0,255)" -fill white +opaque black -morphology Open Disk:1 -blur 0x0.8 $T/mask.png
# 2 plooikaart: smalle verticale draperingen, organisch gemoduleerd, rond 50% grijs
convert -seed $SEED -size ${W}x${H} plasma:gray50-gray50 -colorspace gray -blur 0x30 -auto-level $T/pl.png
convert -seed $((SEED+3)) -size ${W}x${H} plasma:gray50-gray50 -colorspace gray -blur 0x9 -auto-level $T/pl2.png
convert $T/pl.png $T/pl2.png -fx "0.5+0.34*(u-0.5)+0.18*(v-0.5)" -blur 0x1.5 $T/fold.png
# 3 print en stof buigen mee (±2 px)
convert "$IN" $T/fold.png -define compose:args=0x1 -compose displace -composite $T/disp.png
# 4 drapering als soft-light (behoudt helderheid en details)
convert $T/disp.png $T/fold.png -compose overlay -composite $T/s1.png
# 5 lichtval linksboven → rechtsonder, zacht
convert -size ${W}x${H} gradient:"gray(56%)"-"gray(45%)" $T/light.png
convert $T/s1.png $T/light.png -compose overlay -composite $T/s2.png
# 6 fleece-korrel (fijn)
convert -seed $SEED -size ${W}x${H} xc:gray50 -attenuate 0.35 +noise Gaussian -colorspace gray -blur 0x0.4 $T/grain.png
convert $T/s2.png $T/grain.png -compose softlight -composite -level 6%,100% $T/s3a.png
convert $T/s3a.png \( $T/fold.png -level 52%,85% -blur 0x2 -evaluate multiply 0.16 \) -compose screen -composite \( $T/fold.png -level 15%,48% -negate -blur 0x2 -evaluate multiply 0.35 -negate \) -compose multiply -composite $T/s3.png
# 7 achtergrond met contactschaduw, hoodie erop via scherp masker
convert "$IN" \( -size ${W}x${H} xc:black \( $T/mask.png -blur 0x14 -evaluate multiply 0.75 \) -alpha off -compose copy_opacity -composite -geometry +5+12 \) -compose over -composite $T/bg.png
convert $T/bg.png \( $T/s3.png $T/mask.png -alpha off -compose copy_opacity -composite \) -compose over -composite -quality 90 "$OUT"
rm -rf $T
