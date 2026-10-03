// Dienstaanbod — bronnen: outputs/10.4/.../prijsmodel (OEFENWAARDEN) en outputs/5.8/.../01-maandaanbod.md (student, €50/u).
window.AANBOD={
 landing:{naam:'Landingspagina voor lokale ondernemers',herken:/website|site|landing|pagina|page|boek|afspraak/i,
  prijzen:[{post:'Basis (eenmalig)',bedrag:701.50,status:'OEFENWAARDE (les 073)'},{post:'Meerwerk per 3 uur',bedrag:172.50,status:'OEFENWAARDE'},{post:'Beheer per maand (optioneel)',bedrag:63.25,status:'OEFENWAARDE'}],
  inbegrepen:'1 feedbackronde (les 072)',uitgesloten:'domein, hosting, boekingstool (op naam/kosten klant)',
  velden:[['bedrijf','Wat is de naam van je zaak?'],['soort','Wat voor zaak is het (bv. kapper, nagelstudio, koffiebar)?'],['boekroute','Hoe boeken klanten nu, en wil je een bestaande tool koppelen (bv. Salonized) of een formulier?'],['prijslijst','Heb je een prijslijst met diensten? (ja/nee — je stuurt hem later)'],['fotos','Heb je eigen foto\'s waarvoor je toestemming hebt? (ja/nee)'],['domein','Heb je al een domeinnaam? (naam of "nee")'],['contact','Hoe wil je dat ik contact opneem: e-mail of telefoon?']]},
 content:{naam:'Maandcontent',herken:/content|instagram|reel|social|post|carrousel|maand/i,
  prijzen:[{post:'Maandpakket (scope volgens aanbod les 5.8)',bedrag:1650,status:'prijs student (les 5.8), excl. btw'},{post:'Lichter pakket lokaal',bedrag:null,status:'OPEN — nog niet vastgesteld'}],
  inbegrepen:'maandplanning + reviewronde via planner',uitgesloten:'advertentiebudget, fotoshoots',
  velden:[['bedrijf','Wat is de naam van je bedrijf?'],['kanaal','Op welke kanalen wil je content (Instagram, TikTok…)?'],['volume','Hoeveel posts/reels per maand heb je in gedachten?'],['beeld','Heb je eigen beeldmateriaal? (ja/nee)'],['goedkeurder','Wie keurt de content goed?'],['contact','Hoe wil je dat ik contact opneem: e-mail of telefoon?']]}
};
