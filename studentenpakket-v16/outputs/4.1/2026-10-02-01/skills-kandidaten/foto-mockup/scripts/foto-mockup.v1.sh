#!/bin/bash
# foto-mockup.sh base.jpg print.png CX TOPY WIDTH out.jpg [opacity]
# Plaatst een print realistisch op een echte productfoto: plooi-displacement, plooischaduw uit de foto,
# stofkorrel door de inkt. Basisfoto en print blijven ongewijzigd.
set -e
B=$1; P=$2; CX=$3; TY=$4; PW=$5; OUT=$6; OP=${7:-0.94}; T=$(mktemp -d)
read W H < <(identify -format "%w %h\n" "$B")
convert "$P" -trim +repage -resize ${PW}x $T/p.png
read pw ph < <(identify -format "%w %h\n" $T/p.png)
X=$((CX-pw/2))
convert -size ${W}x${H} xc:none $T/p.png -geometry +$X+$TY -composite $T/layer.png
# plooikaart uit de foto (genormaliseerde helderheid)
convert "$B" -colorspace gray -blur 0x3 -normalize $T/dmap.png
convert $T/layer.png $T/dmap.png -define compose:args=6x6 -compose displace -composite $T/ld.png
# schaduw/licht uit de foto: helderheid t.o.v. lokaal gemiddelde
convert "$B" -colorspace gray -blur 0x1.5 $T/g.png
convert $T/g.png \( $T/g.png -blur 0x30 \) -fx "min(1,max(0.45,0.80*u/(v+0.004)))" $T/shade.png
convert $T/ld.png \( +clone -alpha extract \) \( $T/ld.png -alpha off $T/shade.png -compose multiply -composite \) -delete 0 +swap -compose copy_opacity -composite $T/ls.png
# inkt-korrel + dekking
convert $T/ls.png \( +clone -alpha extract -evaluate multiply $OP \) \( $T/ls.png -alpha off -attenuate 0.25 +noise Gaussian -blur 0x0.5 \) -delete 0 +swap -compose copy_opacity -composite $T/lf.png
convert "$B" $T/lf.png -compose over -composite \
  \( "$B" -colorspace gray -blur 0x0.8 \( +clone -blur 0x5 \) -compose mathematics -define compose:args=0,1,-1,.5 -composite \) \
  \( $T/lf.png -alpha extract -blur 0x0.5 \) -compose overlay -composite -quality 92 "$OUT" 2>/dev/null || \
convert "$B" $T/lf.png -compose over -composite -quality 92 "$OUT"
rm -rf $T
