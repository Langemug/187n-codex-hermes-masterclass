import json
# oefenevents (fictief, herkenbaar testdata)
ev=[
 {"id":"t1","klant":"test+a@example.com","type":"checkout_started","t":0,"optin":True},
 {"id":"t2","klant":"test+a@example.com","type":"order_paid","t":0.5},
 {"id":"t3","klant":"test+b@example.com","type":"checkout_started","t":0,"optin":True},
 {"id":"t4","klant":"test+c@example.com","type":"checkout_started","t":0,"optin":False},
 {"id":"t5","klant":"test+d@example.com","type":"subscribe","t":0},
 {"id":"t6","klant":"test+d@example.com","type":"subscribe","t":0.1},
 {"id":"t7","klant":"test+e@example.com","type":"subscribe","t":0},
 {"id":"t8","klant":"test+e@example.com","type":"unsubscribe","t":1},
]
out=[]
def has(k,typ,before):return any(e["klant"]==k and e["type"]==typ and e["t"]<=before for e in ev)
for k in sorted({e["klant"] for e in ev}):
  cs=[e for e in ev if e["klant"]==k and e["type"]=="checkout_started"]
  for c in cs:
    if not c.get("optin"): out.append((k,"C1","NIET: geen toestemming"));continue
    if has(k,"order_paid",c["t"]+1): out.append((k,"C1","NIET: gekocht tijdens wachttijd"))
    else: out.append((k,"C1","STUREN (concept)"))
  subs=[e for e in ev if e["klant"]==k and e["type"]=="subscribe"]
  if subs:
    out.append((k,"W1","STUREN (concept) 1x" + (" — dubbel event genegeerd" if len(subs)>1 else "")))
    out.append((k,"W2","NIET: afgemeld" if has(k,"unsubscribe",subs[0]["t"]+72) else "STUREN (concept)"))
for r in out: print(" | ".join(r))
