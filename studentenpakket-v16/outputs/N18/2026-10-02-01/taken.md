# Taken (identiek voor alle routes)
T1 Productgegevens: schrijf JSON {naam, handle, blank, kleur, gewicht, maten, prijs_nl, prijs_uk_us, design_achter, voorkant, goedgekeurde_claims} uit de bron. Onbekend → "onbekend". Output: <run>/T1.json
T2 Campagnebrief: brief (≤ 120 woorden) voor één static ad campagne A, hook "NOT AT THE POP-UP?", CTA exact "€64,95 · JOIN THE SOCIETY". Verboden: lidstatus/eigen nummer online, "no restock", stad/datum pop-up, materiaalclaims behalve "500 gsm". Output: <run>/T2.md
T3 Buildaanpassing: in <run>/build-<rX>/content/home.json wijzig compare_note naar exact "Details marked TBA are not decided yet." en draai `python3 build.py` in die map. Verander niets anders. Output: <run>/T3.txt met de gebruikte commando's.
