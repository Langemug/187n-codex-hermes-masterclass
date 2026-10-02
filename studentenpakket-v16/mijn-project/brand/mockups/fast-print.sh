n=$1; M=/tmp/claude-0/-home-user-187n-codex-hermes-masterclass/f8f2d043-350e-549c-b0da-a13439a6787b/scratchpad/mk; R=/home/user/187n-codex-hermes-masterclass/studentenpakket-v16
OUT=$R/mijn-project/storefront/assets/img/collections/vs-$n.jpg; [ -f $OUT ] && exit 0
W=$(mktemp -d); cd $W
convert $R/outputs/5.1/2026-10-02-01/brand/prints/visionair-design-$n.png -trim +repage -resize 250x300 pp.png
read w h < <(identify -format "%w %h" pp.png); x=$((375-w/2))
convert -size 750x1000 xc:none pp.png -geometry +$x+368 -composite $M/shade.png -define compose:args=3x3 -compose displace -composite l.png
convert l.png \( l.png -alpha off -attenuate .35 +noise Gaussian -blur 0x.5 $M/shade-m.png -compose multiply -composite \) \( l.png -alpha extract -evaluate multiply .9 \) -delete 0 -compose copy_opacity -composite l2.png
convert $M/base.png l2.png -compose over -composite $M/tex.png -compose overlay -composite s1.png
convert s1.png $M/hoodshadow.png -compose multiply -composite $M/hood.png -compose over -composite s1b.png
convert s1b.png $M/mask.png -alpha off -compose copy_opacity -composite s2.png
convert s2.png -background '#0b0611' -alpha remove -resize 600x750^ -gravity center -extent 600x750 -quality 78 $OUT
cd /; rm -rf $W
