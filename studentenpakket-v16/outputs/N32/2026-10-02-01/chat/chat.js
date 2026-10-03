// Aanvraagchat — lokaal, regelgebaseerd. Geen verzonnen prijzen: alleen bedragen uit AANBOD, anders OPEN.
const NIET=/logo|shop bouwen|webshop bouwen|app|seo audit|advertenties beheren|ads beheren|vertaling|boekhouding/i;
function nieuweSessie(){return{status:'nieuw',dienst:null,antw:{},log:[]}}
function volgende(S){const d=AANBOD[S.dienst];return d.velden.find(([k])=>!(k in S.antw))}
function stap(S,tekst){
  S.log.push(['klant',tekst]);let r;
  if(!S.dienst){
    if(NIET.test(tekst)){S.status='niet passend';r='Dat bied ik (nog) niet aan. Ik help met landingspagina\'s voor lokale ondernemers en maandcontent. Wil je één daarvan?'}
    else{const k=Object.keys(AANBOD).find(k=>AANBOD[k].herken.test(tekst));
      if(!k){S.status='onduidelijk';r='Gaat het om een landingspagina (website) of om maandcontent voor social media?'}
      else{S.dienst=k;S.status='bezig';r=`Top, ${AANBOD[k].naam}. ${volgende(S)[1]}`}}
  } else {
    const v=volgende(S);
    if(v){if(!tekst.trim()||/^(weet niet|geen idee|\?)$/i.test(tekst.trim())){S.antw[v[0]]='ONBEKEND'}else S.antw[v[0]]=tekst.trim()}
    const n=volgende(S);
    if(n){S.status=`bezig (${Object.keys(S.antw).length}/${AANBOD[S.dienst].velden.length})`;r=n[1]}
    else{S.status=Object.values(S.antw).includes('ONBEKEND')?'concept — met open punten':'concept klaar voor review';r=concept(S)}
  }
  S.log.push(['chat',r]);return r}
function concept(S){const d=AANBOD[S.dienst];const eur=b=>b==null?'OPEN':'€ '+b.toFixed(2).replace('.',',');
 return `CONCEPTVOORSTEL (niet verstuurd, nog te controleren)\nDienst: ${d.naam}\n`+Object.entries(S.antw).map(([k,v])=>`- ${k}: ${v}`).join('\n')+
 `\nPrijzen (excl. btw):\n`+d.prijzen.map(p=>`- ${p.post}: ${eur(p.bedrag)} [${p.status}]`).join('\n')+`\nInbegrepen: ${d.inbegrepen}\nNiet inbegrepen: ${d.uitgesloten}`+
 (Object.values(S.antw).includes('ONBEKEND')?`\nOpen punten: ${Object.entries(S.antw).filter(([,v])=>v=='ONBEKEND').map(([k])=>k).join(', ')}`:'')}
if(typeof module!=='undefined')module.exports={stap,nieuweSessie};
