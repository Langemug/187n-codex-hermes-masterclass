// Regelgebaseerde supportbot (geen AI-generatie). Antwoorden alleen uit KB / TEST-orders; anders overdracht.
const TOPICS={retour:/return|refund|withdraw|retour|terugsturen|herroep/i,restock:/restock|sold out|uitverkocht|again|weer/i,maat:/size|fit|maat|small|large|boxy/i,verzending:/ship|deliver|verzend|levertijd|how long/i,ruilen:/exchange|ruil|swap/i};
const EN={betaald:'paid',terugbetaald:'refunded',open:'pending',verzonden:'shipped',niet_verzonden:'not shipped yet',geannuleerd:'cancelled'};const en=x=>EN[x]||x;
const MENS=/human|person|agent|medewerker|complaint|klacht|angry|boos|lawyer/i;
function overdracht(reden){window.ESCALATIES=(window.ESCALATIES||[]);const id='ESC-'+String(window.ESCALATIES.length+1).padStart(3,'0');window.ESCALATIES.push({id,reden});return{type:'overdracht',tekst:`I'm handing this over to a team member (${id}). They'll reply by email — I won't guess an answer.`,bron:'overdracht: '+reden}}
function antwoord(q){
  if(MENS.test(q))return overdracht('klant vraagt om medewerker/klacht');
  const m=q.match(/TEST-VS-\d{3}/i);
  if(/order|bestelling|tracking|where is|waar is/i.test(q)){
    if(!m)return{type:'ontbreekt',tekst:'Can you share your order number? It looks like TEST-VS-001.',bron:'ontbrekende info: ordernummer'};
    const o=ORDERS.find(x=>x.order_id.toUpperCase()==m[0].toUpperCase());
    if(!o)return overdracht('ordernummer niet gevonden: '+m[0]);
    let t=`Order ${o.order_id} (TEST): size ${o.maat}, payment ${en(o.betaalstatus)}, shipping ${en(o.verzendstatus)}.`;
    if(o.verzendstatus=='verzonden')t+=o.tracking?` Tracking: ${o.tracking}.`:' Tracking code is missing — I\'ve flagged this for the team.';
    if(o.verzendstatus=='verzonden'&&!o.tracking)overdracht('verzonden zonder tracking '+o.order_id);
    return{type:'order',tekst:t,bron:'TEST-orders (les 3.4) · geen live ordertoegang'}}
  for(const [k,re] of Object.entries(TOPICS)) if(re.test(q)){const kb=KB.find(x=>x.onderwerp==k);if(!kb)break;
    if(kb.antwoord.startsWith('OPEN'))return overdracht('kennisbank OPEN: '+k);
    return{type:'kb',tekst:kb.antwoord,bron:kb.id+' · '+kb.bron}}
  return overdracht('onbekende vraag')}
if(typeof module!=='undefined')module.exports={antwoord,setData:(k,o)=>{global.KB=k;global.ORDERS=o}};
