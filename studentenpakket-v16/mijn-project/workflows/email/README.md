# E-mailflows · Les 050 (3.3)
Keuze: lokaal (C). Bestanden: flowplan.csv (triggers, wachttijd, uitsluitingen, onderwerp, CTA) · emailcopy.md (volledige copy) · testmails/ (oefenevent-test).
Stap 4 (platform): NIET_UITGEVOERD — bewust lokaal. Klaviyo is verbonden maar niet gebruikt; Shopify Messaging door student zelf.
Stap 5: logica getest met 8 fictieve oefenevents (testmails/oefenevents-resultaat.txt): koop tijdens wachttijd → geen C1 ✔ · geen toestemming → geen C1 ✔ · dubbel subscribe-event → 1 W1 ✔ · afgemeld → geen W2 ✔. Dit is een lokale logica-test, geen platformtest; niets verzonden of geactiveerd.
Afwijking FLOW-MATRIX: "refill" vervangen door win-back (geen verbruiksproduct/abonnement); orderbevestiging blijft Shopify-transactiemail, gescheiden van post-purchase P1.
