#!/usr/bin/env python3
"""Ochtendbriefing uit TEST-orders, tickets, voorraad en planning. Gebruik: briefing.py <ordersdir> <uit.md> [vandaag] [van] [tot]"""
import csv,json,sys,datetime as dt,os
D,OUT=sys.argv[1],sys.argv[2]; TODAY=sys.argv[3] if len(sys.argv)>3 else '2026-10-23'; VAN=sys.argv[4] if len(sys.argv)>4 else '2026-10-18'; TOT=sys.argv[5] if len(sys.argv)>5 else '2026-10-22'
PL='outputs/5.8/2026-10-02-01/klantwerk/contentbureau/02-maandplanning-maand1.csv'
o=[r for r in csv.DictReader(open(f'{D}/orders.csv')) if VAN<=r['besteld']<=TOT]
t=json.load(open(f'{D}/tickets.json')); v=list(csv.DictReader(open(f'{D}/voorraad.csv'))); l=list(csv.DictReader(open(f'{D}/leveringen.csv')))
esc=list(csv.DictReader(open(f'{os.path.dirname(D)}/escalaties.csv')))
pl=list(csv.DictReader(open(PL)))
L=[f'# Ochtendbriefing · {TODAY} · periode {VAN} t/m {TOT}','**TESTDATA** — verzonnen orders/tickets (les 051). Geen echte omzet.','']
paid=[r for r in o if r['betaalstatus']=='betaald']; nship=[r for r in paid if r['verzendstatus']=='niet_verzonden']; notrk=[r for r in o if r['verzendstatus']=='verzonden' and not r['tracking']]
L+=['## Orders',f'- In periode: {len(o)} · betaald {len(paid)} · terugbetaald {sum(r["betaalstatus"]=="terugbetaald" for r in o)} · open {sum(r["betaalstatus"]=="open" for r in o)} (bron: orders.csv)',
 f'- Betaald maar niet verzonden: {", ".join(r["order_id"] for r in nship) or "geen"}',f'- Verzonden zonder tracking: {", ".join(r["order_id"] for r in notrk) or "geen"}','']
openesc=[e for e in esc if e['status']=='OPEN']
L+=['## Support',f'- Tickets: {len(t)} (bron: tickets.json) · open escalaties: {len(openesc)} (bron: escalaties.csv)']+[f'  - {e["ticket"]}: {e["reden"]}' for e in openesc]+['']
so=[x for x in v if int(x['op_voorraad'])-int(x['gereserveerd'])<=0]
L+=['## Voorraad',f'- Beschikbaar ≤ 0: {", ".join(x["sku"] for x in so) or "geen"} (bron: voorraad.csv; onbevestigde leveringen niet meegeteld)']+[f'- Levering {x["levering_id"]} {x["sku"]} {x["aantal"]} st · {x["verwachte_datum"]} · {x["status"]}' for x in l]+['']
todo=[r for r in pl if 'TE MAKEN' in r['status'] or 'WACHT' in r['status']]
L+=['## Planning',f'- Open items maandplanning: {len(todo)} (bron: 02-maandplanning-maand1.csv) — eerstvolgende: {", ".join(r["id"] for r in todo[:3])}','']
# acties: prioriteit
A=[]
if so: A.append((f'Uitverkochte maat(en) {", ".join(x["sku"] for x in so)} als sold out tonen (besluit: no restock)','voorraad.csv','klant kan anders bestellen wat er niet is'))
if any(e['reden'].startswith('dispute') for e in openesc): A.append(('Dispute TT6 afhandelen; order niet verzenden tot opgelost','escalaties.csv + orders.csv','geld- en verzendrisico'))
if notrk: A.append((f'Tracking opvragen voor {", ".join(r["order_id"] for r in notrk)}','orders.csv','klant heeft geen trackinglink'))
if nship: A.append((f'Productiestatus checken voor {", ".join(r["order_id"] for r in nship)}','orders.csv','betaald, nog niet verzonden'))
if any(e['reden'].startswith('privacy') for e in openesc): A.append(('Privacyverzoek TT4 loggen/afsluiten','escalaties.csv','privacyregels'))
L+=['## Drie acties vandaag']+[f'{i}. **{a}** — bron: {b} — reden: {c}' for i,(a,b,c) in enumerate(A[:3],1)]+['','## Ontbrekende databronnen','- Echte Shopify-orders (winkel nog niet live) · verzendstatus Tapstitch (geen koppeling) · kosten (verzend/betaal/Shopify/ads) · ad- en e-maildata']
open(OUT,'w').write('\n'.join(L)+'\n')
