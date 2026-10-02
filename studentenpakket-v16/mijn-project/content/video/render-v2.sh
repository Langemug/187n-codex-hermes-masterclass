#!/bin/sh
# v2: video in bovenste 1700 px, captions in vrije band onderin (geen overlap met UI),
# optionele caption-start, zoom (zoompan) en fade-out. Bronnen blijven ongewijzigd.
# gebruik: render-v2.sh <bron> <start> <end> <uit> "<cap1>" "<cap2>" <cap_start> <hold> <zoom 0/1> <zoom_y> <fade 0/1>
SRC=$1; SS=$2; TO=$3; OUT=$4; C1=$5; C2=$6; CS=${7:-0}; HOLD=${8:-0}; ZOOM=${9:-0}; ZY=${10:-422}; FADE=${11:-0}
F=/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf
DUR=$(python3 -c "print(round($TO-$SS+$HOLD,3))"); MID=$(python3 -c "print(round($CS+($TO-$SS-$CS)/2,3))")
Z=""; [ "$ZOOM" = "1" ] && Z="scale=780:1688,zoompan=z='1+0.15*min(max((it-1.6)/2.4\,0)\,1)':x='iw/2-iw/zoom/2':y='min(max($ZY*2-ih/zoom/2\,0)\,ih-ih/zoom)':d=1:s=390x844:fps=30,"
FD=""; [ "$FADE" = "1" ] && FD=",fade=t=out:st=$(python3 -c "print(round($DUR-0.3,3))"):d=0.3"
CAP=""
[ -n "$C1" ] && CAP=",drawtext=fontfile=$F:text='> $C1':fontsize=50:fontcolor=white:x=(w-tw)/2:y=1765:enable='between(t,$CS,$MID-0.1)'"
[ -n "$C2" ] && CAP="$CAP,drawtext=fontfile=$F:text='> $C2':fontsize=50:fontcolor=0xb57cff:x=(w-tw)/2:y=1765:enable='gte(t,$MID+0.05)'"
ffmpeg -v error -y -ss $SS -to $TO -i "$SRC" -f lavfi -t $DUR -i anullsrc=r=48000:cl=stereo -filter_complex "\
[0:v]${Z}tpad=stop_mode=clone:stop_duration=$HOLD,scale=-2:1700:flags=lanczos,pad=1080:1920:(ow-iw)/2:20:color=0x07040d,setsar=1${CAP}${FD}[v]" \
-map "[v]" -map 1:a -c:v libx264 -pix_fmt yuv420p -crf 19 -r 30 -c:a aac -shortest "$OUT"
