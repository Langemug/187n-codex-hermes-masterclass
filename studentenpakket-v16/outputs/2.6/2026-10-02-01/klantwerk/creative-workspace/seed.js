// Startdata uit echte projectoutput (paden relatief aan deze map). Bron per item in "bron".
const R='../../../../../';
window.SEED={
 producten:[
  {id:'fmh',naam:'The Founding Member Hoodie',design:'010 THE MATRIX CAN\'T HOLD ME.',prijs:'NL €64,95 · UK/US €74,95',status:'DRAFT',bron:'merkdossier r12–24 · vault fmh-*'},
  {id:'vs-009',naam:'Nº 009 · CERTIFIED GLITCH.',design:'009',prijs:'onbekend',status:'DRAFT',bron:'les 062 (4.3)'},
  {id:'vs-012',naam:'Nº 012 · BLUE PILLS ARE FOR SPECTATORS.',design:'012',prijs:'onbekend',status:'concept (lokaal)',bron:'les 065 (9.1)'}
 ],
 campagnes:[
  {id:'A',naam:'Campagne A — "Not at the pop-up? You\'re still in."',fase:'concept',product:'fmh',bron:'N08'},
  {id:'B',naam:'Campagne B — "Drop 001 won\'t come back."',fase:'geblokkeerd (restock-beleid)',product:'fmh',bron:'N08 / N29'}
 ],
 assets:[
  {id:'a1',campagne:'A',product:'fmh',titel:'Rug flat mockup',type:'img',versies:[{v:1,pad:R+'mijn-project/brand/mockups/foto/fm-010-back-flat.jpg',notitie:'foto-mockup les 5.5'}],status:'goedgekeurd'},
  {id:'a2',campagne:'A',product:'fmh',titel:'Ad P1 static',type:'img',versies:[{v:1,pad:R+'outputs/5.7/2026-10-02-01/content/ads/P1/P1-H1a-static.png',notitie:'les 5.7'}],status:'review'},
  {id:'a3',campagne:'A',product:'fmh',titel:'Reel P2 (favoriet)',type:'video',versies:[{v:1,pad:R+'outputs/5.7/2026-10-02-01/content/ads/P2/P2-H3a-reel.mp4',notitie:'les 5.7'}],status:'goedgekeurd'},
  {id:'a4',campagne:'A',product:'fmh',titel:'Clip 2 print-reveal',type:'video',versies:[{v:1,pad:R+'outputs/N24/2026-10-02-01/v3-clip2.mp4',notitie:'v3: dubbele tekst, prijs te vroeg'},{v:2,pad:R+'outputs/N24/2026-10-02-01/v3b-clip2.mp4',notitie:'v3b: gekozen (les 060)'}],status:'goedgekeurd'},
  {id:'a5',campagne:'-',product:'vs-009',titel:'Rug model mockup 009',type:'img',versies:[{v:1,pad:R+'outputs/4.3/2026-10-02-01/klantwerk/T2-mockups/vs-009-back-model.jpg',notitie:'les 062'}],status:'review'},
  {id:'a6',campagne:'-',product:'vs-012',titel:'Rug flat mockup 012',type:'img',versies:[{v:1,pad:R+'outputs/9.1/2026-10-02-01/werkplek/run-compact-012/mockups/vs-012-back-flat.jpg',notitie:'les 065'}],status:'review'}
 ]
};
