const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const items=JSON.parse(fs.readFileSync('/home/user/187n-codex-hermes-masterclass/studentenpakket-v16/outputs/N12/2026-10-02-01/items.json'));const log=[];
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
const ctx=await b.newContext();const p=await ctx.newPage();const url='file:///home/user/187n-codex-hermes-masterclass/studentenpakket-v16/outputs/N12/2026-10-02-01/app/planner.html';await p.goto(url);
await p.evaluate(()=>localStorage.clear());
// fouttest: asset ontbreekt
const t=items[0];await p.fill('[name=id]',t.id);await p.selectOption('[name=kanaal]',t.kanaal);await p.fill('[name=copy]',t.copy);await p.fill('[name=datum]',t.datum);
await p.click('#save');log.push({test:'zonder asset',melding:await p.textContent('#err')});
await p.fill('[name=asset]',t.asset);await p.click('#save');log.push({herstel:t.id,melding:await p.textContent('#err')});
for(const it of items.slice(1)){await p.fill('[name=id]',it.id);await p.selectOption('[name=kanaal]',it.kanaal);await p.fill('[name=copy]',it.copy);await p.fill('[name=asset]',it.asset);await p.fill('[name=datum]',it.datum);await p.click('#save');log.push({opslaan:it.id,melding:await p.textContent('#err')})}
await p.reload();const rows=await p.$$eval('#list tr',tr=>tr.map(r=>[...r.children].map(c=>c.textContent)));
const check=items.map(it=>{const r=rows.find(x=>x[0]===it.id)||[];return {id:it.id,copy:r[2]===it.copy,asset:r[3]===it.asset,datum:r[4]===it.datum,kanaal:r[1]===it.kanaal,status:r[5]}});
await p.screenshot({path:'/home/user/187n-codex-hermes-masterclass/studentenpakket-v16/outputs/N12/2026-10-02-01/planner-na-reload.png',fullPage:true});
console.log(JSON.stringify({log,check},null,1));await b.close()})();
