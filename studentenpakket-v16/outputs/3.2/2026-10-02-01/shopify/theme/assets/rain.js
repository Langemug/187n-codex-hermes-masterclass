
(()=>{const c=document.getElementById('rain');if(!c||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const x=c.getContext('2d');const G='01ΛVSΞΔΩΨ#=+*:<>';let w,h,cols,drops;
function size(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;cols=Math.floor(w/(w<600?22:18));drops=Array.from({length:cols},()=>Math.random()*-60)}
size();addEventListener('resize',size);
setInterval(()=>{x.fillStyle='rgba(0,0,0,.12)';x.fillRect(0,0,w,h);x.font='14px monospace';
drops.forEach((d,i)=>{const y=d*18;x.fillStyle=Math.random()<.04?'#fff':'#b14bff';x.globalAlpha=.55+Math.random()*.45;
x.fillText(G[Math.floor(Math.random()*G.length)],i*18,y);x.globalAlpha=1;drops[i]=y>h&&Math.random()>.975?0:d+1})},55)})();
