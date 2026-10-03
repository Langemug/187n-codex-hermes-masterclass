# Support-antwoorden (TESTDATA) · Les 051
Bronnen: testdata/orders.csv, testdata/tickets.json, kennisbank.json, context/servicebeleid.md (IN_TE_VULLEN).
Regel: klant-ID van ticket moet matchen met order; betaald ≠ verzonden; onbekend wordt niet ingevuld.

## TT1 · TEST-K1 · "Where is my hoodie?" → ANTWOORD
Match K1 ↔ TEST-VS-001 ✔ · betaald · verzonden · tracking TEST-TRK-001.
> Hi! Your Founding Member Hoodie (size M) has shipped. Tracking: TEST-TRK-001. Questions? Just reply.
Bron: orders.csv r1. Geen bezorgdatum genoemd (onbekend).

## TT2 · TEST-K2 · "Paid 2 days ago, not shipped?" → ANTWOORD + interne actie
Match ✔ · betaald · **niet verzonden**.
> Thanks for your patience. Your payment is in and your order (size L) hasn't shipped yet. We'll email you the tracking link as soon as it leaves. 
Bron: orders.csv r2. Geen verzenddatum beloofd (VS-KB-04 OPEN). Interne actie: check Tapstitch-productiestatus.

## TT3 · TEST-K3 · "Shipped, no tracking" → ANTWOORD + interne actie
Match ✔ · verzonden · tracking **ontbreekt** in bron.
> Your order is marked as shipped. The tracking link is missing on our side — we're checking with our production partner and will send it to you.
Bron: orders.csv r3. Niet verzinnen; actie: tracking opvragen.

## TT4 · TEST-K7 vraagt adres van order 006 (van TEST-K6) → WEIGEREN + ESCALATIE privacy
Klant-ID ≠ order-klant ✗.
> We can only share order details with the person who placed the order. Ask your friend to contact us directly.
Geen orderdata tonen. Escalatie: privacy (log).

## TT5 · TEST-K6 · "L → XL swap?" → ANTWOORD (beleid OPEN)
Match ✔ · betaald · niet verzonden.
> Thanks! Your order hasn't shipped yet. We're checking if we can change the size to XL before it leaves and will confirm by email.
Bron: orders.csv r6; VS-KB-05 ruilbeleid OPEN → **voorstel** aan eigenaar, geen wijziging zelf. Let op XL-voorraad (operations).

## TT6 · TEST-K5 · dispute + restock-vraag → ESCALATIE dispute
Match ✔ · betaalstatus open.
Geen inhoudelijk antwoord over de betaling. Wel standaard deel:
> Thanks for reaching out. A team member will contact you about the payment. About sizes: The black Founding Member edition won't come back; members get first access to Drop 002.
Bron: VS-KB-02. Escalatie: dispute/chargeback → mens.
