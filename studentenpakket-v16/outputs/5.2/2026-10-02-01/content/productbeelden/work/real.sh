# usage: real.sh base.png print.png X Y out.png
B=$1; P=$2; X=$3; Y=$4; OUT=$5
read W H < <(identify -format "%w %h" $B)
convert $B -colorspace gray -blur 0x2 -auto-level shade.png
# layer on full canvas
convert -size ${W}x${H} xc:none $P -geometry +$X+$Y -composite layer.png
# displace along folds
convert layer.png shade.png -define compose:args=5x5 -compose displace -composite layer-d.png
# grain + ink softness, keep alpha
convert layer-d.png \( +clone -alpha extract \) \( layer-d.png -alpha off -attenuate .35 +noise Gaussian -blur 0x.6 \) -delete 0 +swap -compose copy_opacity -composite layer-g.png
# fabric shading (folds darken print)
convert shade.png \( +clone -blur 0x25 \) -fx "min(1,max(0.62,0.92*u/(v+0.02)))" shade-m.png
convert layer-g.png \( shade-m.png \) -compose multiply -composite \( layer-g.png -alpha extract \) -compose copy_opacity -composite layer-s.png
convert layer-s.png -channel A -evaluate multiply .9 +channel layer-f.png
# fabric texture through ink: soft light of base over print
convert $B layer-f.png -compose over -composite \( $B -colorspace gray -blur 0x1 \( +clone -blur 0x6 \) -compose mathematics -define compose:args=0,1,-1,.5 -composite \) -compose overlay -composite $OUT
