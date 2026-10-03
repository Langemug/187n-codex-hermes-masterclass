# Vergelijking modelroutes (les 067 · 9.3) — 2026-10-03
Taak + rubric: rubric.md (vastgelegd vóór route 2). Zelfde prompt (uit 9.2 deepastra-proef.md).
Route 1 = hoofdmodel van deze sessie (output: outputs/9.2/.../hoofdmodel, v1 + v2). Route 2 = subagent met Haiku (output: route2-haiku/).

## Score (rubric, max 10)
| Criterium | Route 1 v1 | Route 1 v2 | Route 2 Haiku |
|---|---|---|---|
| K1 seo-check vaste controles | 3 | 3 | 3 |
| K2 verboden claims | 1 (2× LET OP) | 2 | 2 |
| K3 geen verzonnen feiten | 3 | 3 | **0** — verzonnen: duurzaamheid/minder verpakkingsafval, "durable", "full control over your subscription / manage your account", "arrive on your schedule", "community of subscribers" |
| K4 prijzen als test gelabeld | 1 | 1 | **0** — "for €49", "Subscribe… at €29" als echt aanbod |
| K5 natuurlijk Engels | 1 | 1 | 0,5 — vloeiend maar generieke marketingtaal |
| **Totaal** | **9** | **10** | **5,5** |

## Gemeten
| | Route 1 | Route 2 Haiku |
|---|---|---|
| Duur | ≈ 2 min (2 calls incl. eerste check) | 30 s (subagent, 7 tool-calls) |
| Tokens | onbekend (niet gemeld door sessie) | 57.416 (gemeld door subagent-runtime, incl. eigen opstartcontext) |
| API-kosten / abonnementsgebruik | onbekend | onbekend |
| Feedbackrondes | 1 (ontkennende claimzinnen) | 0 uitgevoerd; zou ≥ 1 nodig hebben (K3, K4) |
| Reviewtijd (mijn controle) | ≈ 1 min | ≈ 1 min lezen + 5 bevindingen |

**Belangrijk:** seo-check gaf Haiku 0 FOUT — de check vangt verzonnen feiten en ongelabelde prijzen niet. De kwaliteitsverschillen kwamen alleen uit de handmatige review.
**Bias:** route 1 is door hetzelfde model beoordeeld dat hem schreef. Student-review weegt mee.

## Beste route per taaktype (voorstel)
| Taaktype | Route | Waarom |
|---|---|---|
| Klanttekst met claimgrenzen (product, SEO) | hoofdmodel | Haiku verzon 5 feiten en labelde testprijzen niet |
| Mechanisch werk (tellen, renderen, checks) | script | geen model nodig |
| Eerste ruwe varianten / brainstorm, intern | Haiku | snel; altijd claimreview erna |
| Claimreview | hoofdmodel + mens | check vangt geen verzonnen feiten |

## Modelmeting
Run | Model | Kwaliteit | Tijd | Tokens | API-kosten | Abonnementsgebruik | Herwerk
--- | --- | --- | --- | --- | --- | --- | ---
9.2 hoofdmodel | sessiemodel | 10/10 (v2) | ≈ 2 min | onbekend | onbekend | onbekend | 1 ronde
9.3 route 2 | Haiku (subagent) | 5,5/10 | 30 s | 57.416 | onbekend | onbekend | niet uitgevoerd (≥ 1 nodig)

## Student-review (stap 5, 2026-10-03)
Bevestigd: duurzaamheidszinnen in route 2 zijn verzonnen (niet in oefenmerk.md). Score Haiku blijft 5,5/10.
