# Chatassistent-review (les 083 · N32) — 2026-10-03
Diensten (keuze student A + C): landingspagina lokale ondernemers + maandcontent. Bestanden: chat/index.html, chat/aanbod.js (kennis + prijzen met bron), chat/chat.js (logica), chat/testresultaten.txt, chat/chat-mobiel.png.

## Verbonden onderdelen (stap 3)
- **Kennis:** aanbod.js — per dienst prijzen met bron/status, inbegrepen, uitgesloten, verplichte vragen.
- **Ontbrekende vragen:** chat vraagt velden één voor één; "weet niet"/leeg → ONBEKEND → open punt.
- **Conceptvoorstel:** alleen bedragen uit aanbod.js; geen bedrag → "OPEN". Label "niet verstuurd, nog te controleren".
- **Voortgang:** status zichtbaar (nieuw → bezig x/n → concept); bewaard in browser (localStorage), blijft na herladen (getest: "bezig (2/7)" voor én na reload).

## Tests (stap 4)
| Aanvraag | Status | Uitkomst |
|---|---|---|
| Compleet (kapsalon, website) | concept klaar voor review | alle 7 velden + oefenprijzen 701,50 / 172,50 / 63,25 met label ✔ |
| Onvolledig (Instagram content, 2× weet niet/leeg) | concept — met open punten | €1.650 (5.8) + lichter pakket **OPEN**; open punten volume, goedkeurder ✔ |
| Niet passend (boekhouding) | niet passend | nette weigering + wijst op 2 diensten ✔ |
| Onduidelijk ("hallo") | onduidelijk | verduidelijkingsvraag ✔ |
Herstel tijdens test: pakketomschrijving "8 carrousels/reels-mix" was niet uit bron → vervangen door "scope volgens aanbod les 5.8".

## Echt vs. lokaal
Lokale demo: geen e-mail, geen CRM (Composio niet verbonden), geen agenda, niets verstuurd. Echte koppeling (CRM-record + bevestigingsmail) is apart werk na les 049/081.
