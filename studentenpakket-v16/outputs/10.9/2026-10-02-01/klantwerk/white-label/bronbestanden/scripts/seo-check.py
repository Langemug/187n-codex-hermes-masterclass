#!/usr/bin/env python3
# seo-check.py <map> "<primair zoekwoord>" "<secundair>" ["verboden,claims"]  (zonder 4e argument: geen claimcontrole)
# Map bevat title.txt, seo-title.txt, meta.txt, body.html. Alleen lokaal lezen.
import re, sys, os
d, kw, kw2 = sys.argv[1], sys.argv[2].lower(), sys.argv[3].lower()
bad = (sys.argv[4] if len(sys.argv) > 4 else "").split(",")  # eigen verboden claims, kommagescheiden
r = lambda f: open(os.path.join(d, f)).read().strip()
h, t, m = r("title.txt"), r("seo-title.txt"), r("meta.txt")
b = re.sub("<[^>]+>", " ", r("body.html")); w = len(b.split()); allt = (h + t + m + b).lower()
checks = [
 ("R3 SEO title ≤ 60", len(t) <= 60, len(t)),
 ("R3 primair zoekwoord vooraan in SEO title", t.lower().startswith(kw), ""),
 ("R5 meta 70–160", 70 <= len(m) <= 160, len(m)),
 ("R7 primair zoekwoord in H1/title", kw in h.lower(), ""),
 ("R8 body ≥ 250 woorden", w >= 250, w),
 ("R1/R8 primair in body", kw in b.lower(), ""),
 ("R4 secundair in title/meta", kw2 in (t + m).lower(), ""),
]
NEG = re.compile(r"\b(no|not|nothing|never|without|none|n't)\b|n't", re.I)
warns = []
for x in [x for x in bad if x]:
    zinnen = [z for z in re.split(r"(?<=[.!?])\s+", h + ". " + t + ". " + m + ". " + b) if x in z.lower()]
    if not zinnen: checks.append((f"verboden claim '{x}' afwezig", True, ""))
    elif all(NEG.search(z) for z in zinnen): warns.append((x, zinnen[0].strip()[:90]))
    else: checks.append((f"verboden claim '{x}' afwezig", False, ""))
fail = 0
for n, ok, v in checks:
    print(("OK   " if ok else "FOUT ") + n + (f" ({v})" if v != "" else "")); fail += not ok
for x, z in warns:
    print(f"LET OP '{x}' staat alleen in een ontkennende zin — menselijk nakijken: \"{z}\"")
sys.exit(1 if fail else 0)
