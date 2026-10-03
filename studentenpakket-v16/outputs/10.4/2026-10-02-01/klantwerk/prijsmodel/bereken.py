#!/usr/bin/env python3
# bereken.py [invoer.csv] — rekent basis, meerwerk en maanddienst uit. Alle bedragen excl. btw.
import csv, sys, os
p = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), "invoer.csv")
R = list(csv.DictReader(open(p)))
som = lambda t: sum(float(r["waarde"]) for r in R if r["type"] == t)
T = som("tarief"); bouw, rev = som("bouw"), som("review"); tool, gen = som("tool"), som("generatie")
marge = som("marge") / 100; beheer, toolm, extra = som("beheer"), som("tool_maand"), som("meerwerk")
def prijs(uren, kosten): return (uren * T + kosten) * (1 + marge)
basis = prijs(bouw + rev, tool + gen)
meer = prijs(extra, 0)
maand = prijs(beheer, toolm)
print(f"Uren basis: {bouw+rev:g} (bouw {bouw:g} + review {rev:g}) × €{T:g}/u; kosten €{tool+gen:g}; marge {marge*100:g}%")
print(f"BASIS (eenmalig):     € {basis:,.2f}".replace(",", "X").replace(".", ",").replace("X", "."))
print(f"MEERWERK ({extra:g} u):      € {meer:,.2f}".replace(",", "X").replace(".", ",").replace("X", "."))
print(f"MAANDDIENST beheer:   € {maand:,.2f} p/m".replace(",", "X").replace(".", ",").replace("X", "."))
print("Status: OEFENWAARDEN — geen marktprijs, geen prijsadvies. Excl. btw.")
