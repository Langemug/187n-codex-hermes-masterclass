#!/bin/sh
# Lokale ffmpeg-route: 1 sectie -> 1080x1920 MP4 met captions (1 tegelijk). Bronnen blijven ongewijzigd.
# gebruik: render.sh <bron> <start> <end> <uit.mp4> <cap1> <cap2> [hold] [zoom]
SRC=$1; SS=$2; TO=$3; OUT=$4; C1=$5; C2=$6; HOLD=${7:-0}; ZOOM=${8:-0}
F=/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf
DUR=$(python3 -c "print(round($TO-$SS+$HOLD,3))"); MID=$(python3 -c "print(round(($TO-$SS)/2,3))")
Z=""; [ "$ZOOM" = "1" ] && Z="scale=iw*1.08:-1,crop=390:844,"
ffmpeg -v error -y -ss $SS -to $TO -i "$SRC" -f lavfi -t $DUR -i anullsrc=r=48000:cl=stereo -filter_complex "\
[0:v]${Z}tpad=stop_mode=clone:stop_duration=$HOLD,scale=-2:1920:flags=lanczos,pad=1080:1920:(ow-iw)/2:0:color=0x07040d,setsar=1,\
drawtext=fontfile=$F:text='> $C1':fontsize=46:fontcolor=white:box=1:boxcolor=0x07040d@0.85:boxborderw=18:x=(w-tw)/2:y=h*0.08:enable='lt(t,$MID-0.1)',\
drawtext=fontfile=$F:text='> $C2':fontsize=46:fontcolor=0xb57cff:box=1:boxcolor=0x07040d@0.85:boxborderw=18:x=(w-tw)/2:y=h*0.08:enable='gte(t,$MID+0.05)'[v]" \
-map "[v]" -map 1:a -c:v libx264 -pix_fmt yuv420p -crf 19 -r 30 -c:a aac -shortest "$OUT"
