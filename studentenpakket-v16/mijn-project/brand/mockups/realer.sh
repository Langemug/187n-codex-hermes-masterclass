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

# 2b vormgebonden plooien: oksel-diagonalen, rugdrapering, boord/manchet-rimpels (relatief t.o.v. beeld)
cr(){ awk -v w=$W -v h=$H -v d="$1" 'BEGIN{n=split(d,a," ");o="";for(i=1;i<=n;i+=2)o=o sprintf("%d,%d ",a[i]*w,a[i+1]*h);print o}'; }
P1=$(cr "0.30 0.30 0.27 0.50 0.25 0.72"); P2=$(cr "0.70 0.30 0.73 0.50 0.75 0.72")
P3=$(cr "0.42 0.40 0.40 0.60 0.41 0.80"); P4=$(cr "0.58 0.42 0.60 0.62 0.59 0.80")
P5=$(cr "0.12 0.55 0.10 0.70 0.08 0.80"); P6=$(cr "0.88 0.55 0.90 0.70 0.92 0.80")
convert -size ${W}x${H} xc:gray50 -fill none -stroke gray22 -strokewidth $((W/90)) \
  -draw "bezier $P1" -draw "bezier $P2" -stroke gray32 -draw "bezier $P3" -draw "bezier $P4" -stroke gray28 -draw "bezier $P5" -draw "bezier $P6" \
  -blur 0x$((W/70)) $T/crd.png
convert $T/crd.png -roll +$((W/120))+0 -negate -level 0,100% $T/crl.png
convert $T/crd.png \( $T/crl.png -evaluate multiply 0.5 \) -compose plus -composite -evaluate subtract 25% $T/cr.png
# rimpels bij boord en manchetten
convert -size ${W}x${H} xc:gray50 -fx "j>0.80*h && j<0.87*h ? 0.5+0.10*sin(i/6) : 0.5" -blur 0x1.5 $T/rib.png
convert $T/fold.png $T/cr.png -compose overlay -composite $T/rib.png -compose overlay -composite $T/fold.png
# ambient occlusion langs de silhouet
convert $T/mask.png -blur 0x$((W/22)) -level 10%,75% $T/ao.png
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
convert $T/s3a.png \( $T/ao.png -level -60%,100% \) -compose multiply -composite $T/s3b.png
convert $T/s3b.png \( $T/fold.png -level 52%,80% -blur 0x2 -evaluate multiply 0.22 \) -compose screen -composite \( $T/fold.png -level 15%,48% -negate -blur 0x2 -evaluate multiply 0.5 -negate \) -compose multiply -composite $T/s3.png
# 6b inkt: printpixels iets matter + korrel erdoor + plooien sterker op de print
convert "$IN" -colorspace gray -level 22%,40% -blur 0x0.6 $T/ink.png
convert $T/s3.png -modulate 100,82 \( $T/grain.png -level 30%,70% \) -compose softlight -composite \( $T/fold.png -level 20%,80% \) -compose softlight -composite $T/inked.png
convert $T/s3.png $T/inked.png $T/ink.png -compose over -composite -unsharp 0x1.2+0.7+0.02 $T/s4.png
# 7 achtergrond met contactschaduw, hoodie erop via scherp masker
convert "$IN" \( -size ${W}x${H} xc:black \( $T/mask.png -blur 0x14 -evaluate multiply 0.75 \) -alpha off -compose copy_opacity -composite -geometry +5+12 \) -compose over -composite $T/bg.png
convert $T/bg.png \( $T/s4.png $T/mask.png -alpha off -compose copy_opacity -composite \) -compose over -composite -quality 90 "$OUT"
rm -rf $T
