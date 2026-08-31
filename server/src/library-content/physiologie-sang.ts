import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const RED_BLOOD_CELLS_COURSE = `# Milieu intérieur et physiologie des globules rouges

## 1. Caractéristiques morphologiques et fonctionnelles de l'érythrocyte adulte
- L'érythrocyte (globule rouge, GR) adulte est une cellule **anucléée**, dépourvue d'organites cellulaires et de capacité de synthèse protéique ou de prolifération.
- **Durée de vie** : 100 à 120 jours.
- **Forme** : disque biconcave à bords arrondis (microscopie électronique), offrant une grande surface pour un petit volume — favorable aux échanges gazeux.
- **Taille** : diamètre moyen 6,8-7,7 µm. **Couleur** : donnée par l'hémoglobine (Hb) ; un érythrocyte de coloration normale est dit **normochrome**.

## 2. Constantes érythrocytaires (hémogramme)
| Constante | Type | Valeur normale | Interprétation |
| --- | --- | --- | --- |
| Numération des GR | Directe | ~4,5 M/mm³ (H 4,9 ± 0,7 ; F 4,3 ± 0,6) | ↓ anémie ; ↑ polyglobulie |
| Hémoglobine (Hb) | Directe | H 15 ± 2 g% ; F 14 ± 2 g% | ↓ anémie ; ↑ polyglobulie |
| Hématocrite (Hct) | Directe | H 45 ± 7% ; F 42 ± 5% | ↓ anémie ; ↑ polyglobulie |
| VGM | Indirecte (calculée) | 80-100 µm³ | Normal = normocytose ; ↓ microcytose ; ↑ macrocytose |
| CCMH | Indirecte (calculée) | 32-36 g% | Concentration corpusculaire moyenne en Hb |
| TCMH | Indirecte (calculée) | 27-31 pg | Normal = normochromie ; ↓ hypochromie |
| IDR/RDW | Indirecte (calculée) | 11,5-14,5% | ↑ anisocytose |

Anémie : carence en fer → ferriprive ; carence en B12/folates → mégaloblastique ; insuffisance médullaire → aplasique. Polyglobulie : primitive (maladie de Vaquez) ou secondaire (altitude).

**Orientation diagnostique par l'hémogramme** :
| Type d'anémie | VGM | TCMH/CCMH | Réticulocytes | Cause |
| --- | --- | --- | --- | --- |
| Ferriprive | ↓ (microcytaire) | ↓ (hypochrome) | N | Carence en fer |
| Thalassémie | ↓ (microcytaire) | ↓ (hypochrome) | N | Synthèse anormale de globine |
| Mégaloblastique | ↑ (macrocytaire) | N (normochrome) | ↓ | Carence B12/folates |
| Aplasique | N (normocytaire) | N (normochrome) | ↓ | Insuffisance médullaire |

## 3. Particularités métaboliques de l'érythrocyte
- Le métabolisme est réduit à 1/50 de celui d'une cellule nucléée de même taille (absence de noyau et d'organites).
- Substrat énergétique principal : le **glucose**, sans réserve de glycogène — dépendance totale de la source extracellulaire.
- Le métabolisme glucidique se déroule en **anaérobiose** :
  - 90-95% par **glycolyse anaérobie** (voie d'Embden-Meyerhof) → source d'ATP
  - Cycle de **Rapoport-Luebering** → source de **2,3-DPG**
  - 5-10% par la **voie des pentoses phosphates** → source de NADPH+H⁺
- **Rôle du 2,3-DPG** : se lie de façon réversible à l'hémoglobine et diminue son affinité pour l'O₂ (HbO₂ + 2,3-DPG ⇌ Hb-2,3-DPG + O₂). L'HbF (α2γ2) n'est PAS influencée par le 2,3-DPG.
  - Au niveau tissulaire : le 2,3-DPG se lie aux chaînes β de l'HbA1 → changement conformationnel → ↓ affinité pour l'O₂ → libération d'O₂
  - Au niveau pulmonaire : le 2,3-DPG se détache → ↑ affinité pour l'O₂ → fixation d'O₂
- Facteurs **stimulant** la glycolyse intra-érythrocytaire : ↓ PO₂ (hypoxie aiguë/chronique), exercice physique, anémie, altitude, maladies pulmonaires chroniques, hyperthyroïdie.
- Facteurs **inhibant** la glycolyse : ↓ pH (acidose métabolique), conservation du sang (le 2,3-DPG devient un « piège à O₂ » ; les érythrocytes transfusés restaurent leur taux de 2,3-DPG en 24-48h ; l'inosine ajoutée au milieu de conservation stimule sa production).

## 4. Physiologie de l'hémoglobine
- L'Hb assure le transport des gaz respiratoires, représente 95% des protéines érythrocytaires et 30-35% du volume cellulaire.
- Synthétisée dans les progéniteurs nucléés de la moelle osseuse (érythroblastes, normoblastes) et encore dans le réticulocyte ; **aucune synthèse** dans le GR adulte mature.
- **Structure** : molécule tétramérique (chromoprotéine à structure quaternaire), 4 unités = 4 hèmes + 4 chaînes de globine.
  - **Globine** : composant protéique, tétramère de 2 paires de chaînes polypeptidiques identiques ; fixe de façon réversible le CO₂ sur ses groupes -NH₂.
  - **Hème** : composant prosthétique (non protéique), 4 cycles porphyriniques + 4 Fe²⁺ ; fixe de façon réversible l'O₂ sur le Fe²⁺.
- **Hémoglobines physiologiques** :
  - **HbF** (α2γ2) : remplace l'Hb embryonnaire dès le 3e mois de vie intra-utérine ; représente 70-80% de l'Hb totale à la naissance, puis chute rapidement.
  - **HbA** (adulte) remplace l'HbF : 97-98% HbA1 (α2β2), 2-5% HbA2 (α2δ2), 2% HbF, 2,2-4,8% HbA1c (Hb glyquée, reflet de la glycémie moyenne des ~4 derniers mois = durée de vie du GR).
- **Dérivés physiologiques** : OxyHb (HbO₂, fixation réversible d'O₂ sur Fe²⁺) et CarbHb (HbCO₂, fixation réversible de CO₂ sur -NH₂ de la globine).
- **Dérivés pathologiques** : CarboxyHb (liaison stable au CO, affinité 250× supérieure à celle de l'O₂) ; MetHb (oxydation du Fe²⁺ en Fe³⁺, normalement <1-2% grâce au système réducteur du glutathion, augmentée en présence d'agents oxydants → « maladie bleue » du nouveau-né).
- **Hémoglobinopathies génétiques** :
  - Substitution d'un acide aminé de la globine : ex. remplacement de l'acide glutamique par la valine en position 6 de la chaîne β (HbA1 → HbS) = **drépanocytose**.
  - Anomalie de synthèse des chaînes α ou β = **thalassémie** → anémie hémolytique.

## 5. Rôle des globules rouges dans le transport de l'O₂
- Formes de transport : 99% liée à l'Hb (HbO₂), 1% dissoute dans le plasma (fournit la PO₂).
- La formation d'oxyhémoglobine est une réaction d'**oxygénation** (Fe²⁺), PAS d'oxydation (Fe³⁺), réversible.
- La fixation d'O₂ sur 1 sous-unité hème induit des changements allostériques dans les sous-unités voisines → ↑ progressive de l'affinité et de la vitesse de fixation (jusqu'à ×300 pour la 4e sous-unité) = **coopérativité positive**.
- 1 g d'Hb transporte 1,34 mL d'O₂ ; 15 g Hb/100 mL de sang transportent 20,1 mL (volumes %) d'O₂.
- Sang artériel : PO₂ = 100 mmHg, SatHbO₂ = 97-98%. Sang veineux : PO₂ = 40 mmHg, SatHbO₂ = 50-70%.
- **Courbe de dissociation de l'HbO₂** : relation entre PO₂ artérielle et SatHbO₂%, de forme sigmoïde, caractérisée par un segment rapide, un segment lent, et le paramètre **P50** (PO₂ pour laquelle SatHbO₂ = 50% ; normale P50 = 26,6 mmHg).
  - Segment rapidement descendant (PO₂ 10-70 mmHg, niveau tissulaire) : à petite variation de PO₂, grande libération d'O₂ ; affinité de l'Hb diminuée, dissociation augmentée.
  - Plateau lent (PO₂ 70-100 mmHg, niveau pulmonaire) : même si la PO₂ varie, l'Hb reste saturée à ~100% ; affinité augmentée, dissociation diminuée.
- **Déplacement de la courbe vers la droite** (↓ affinité, P50 > 26,6 mmHg, libération d'O₂ facilitée) : ↓ pH, ↑ PCO₂, ↑ 2,3-DPG, ↑ température, HbA1 — favorable au niveau tissulaire.
- **Déplacement vers la gauche** (↑ affinité, P50 < 26,6 mmHg) : ↑ pH, ↓ PCO₂, ↓ 2,3-DPG, ↓ température, HbF — favorable au niveau pulmonaire.

## 6. Rôle des globules rouges dans le transport du CO₂
- Formes de transport : 5% dissous dans le plasma (fournit la PCO₂), 95% dans le GR (dont 90% sous forme de HCO₃⁻ grâce à l'anhydrase carbonique, 5% lié de façon réversible aux groupes -NH₂ de la globine = carbhémoglobine).
- Au niveau **tissulaire** (PCO₂ = 46 mmHg) : le CO₂ se lie à l'Hb (CarbHb) ; le CO₂ s'hydrate sous l'action de l'anhydrase carbonique (CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺) ; le H⁺ est tamponné par l'Hb ; le HCO₃⁻ quitte le GR via l'échangeur Cl⁻/HCO₃⁻ (**phénomène de Hamburger**, migration des ions Cl⁻).
- Au niveau **pulmonaire** (PCO₂ = 40 mmHg) : les systèmes tampons de l'Hb libèrent le H⁺ ; la carbhémoglobine libère le CO₂ ; le H⁺ se combine au HCO₃⁻ pour reformer H₂CO₃ puis CO₂ + H₂O ; le HCO₃⁻ entre dans le GR via l'échangeur Cl⁻/HCO₃⁻.

## 7. Rôle des globules rouges dans l'équilibre acido-basique
- **Systèmes tampons intra-érythrocytaires** :
  - Système KHCO₃/H₂CO₃ : H⁺ + KHCO₃ → H₂CO₃ + K⁺ ; couple KHbO₂/HbO₂ (oxyhémoglobinate/oxyHb) et KHb/HbH (hémoglobinate/Hb réduite).
  - Systèmes tampons de l'Hb : remplacent l'HbO₂ (acide fort) par l'HbH (acide faible), fixent le H⁺ issu de la dissociation de la carbhémoglobine, maintiennent le pH constant.
- Ces systèmes assurent **3/4 de la capacité tampon totale du sang**.

## 8. Cinétique érythrocytaire et hémolyse physiologique
**Stade médullaire (érythropoïèse)** :
- Se déroule dans la moelle osseuse, ~25 mL d'érythrocytes/jour (50 mL de sang/jour), sur 5-7 jours, nécessite la présence d'érythropoïétine (EPO).

**Stade circulatoire** :
- Numération adulte 4,5-5 millions/mm³, réticulocytes 0,5-1,5% (réticulocytose), durée de vie 100-120 jours.
- Résistance au **stress osmotique** : GRmin = 0,40-0,44 g% NaCl, GRmax = 0,36-0,38 g% NaCl.
- Résistance au **stress mécanique** : contact avec l'endothélium des petits capillaires, stagnation dans les vaisseaux sinusoïdes (ex. circulation splénique).

**Destruction des érythrocytes = hémolyse** :
- Les vieux érythrocytes sont retenus dans les capillaires sinusoïdes de la rate et phagocytés par les macrophages : épuisement énergétique/enzymatique, diminution du métabolisme, altérations structurales, rigidité, tendance à devenir sphérocytes.
- **Hémolyse extravasculaire** (majoritaire) : l'Hb subit une endocytose dans les macrophages de la rate (« cimetière des érythrocytes »), du foie et de la moelle.
- **Hémolyse intravasculaire** (minoritaire) : l'Hb se lie à l'haptoglobine, complexe phagocyté par les macrophages hépatiques.

**Catabolisme de l'hémoglobine** :
1. **Globine** → acides aminés réutilisés dans la synthèse protéique.
2. **Hème** → fer (lié à la transferrine, stocké sous forme de ferritine/hémosidérine) + biliverdine → bilirubine indirecte (non conjuguée, liée à l'albumine dans le plasma).
- **Stade prêhépatique** : dans les macrophages (rate, moelle).
- **Stade hépatique** : la bilirubine indirecte est conjuguée à l'acide glucuronique → bilirubine directe (conjuguée), excrétée dans la bile.
- **Stade posthépatique** : dans le côlon, la flore bactérienne oxyde la bilirubine directe en urobilinogène (une partie est réabsorbée et éliminée dans l'urine, une partie est oxydée en stercobilinogène éliminé dans les selles).
- **Hémolyse pathologique** (durée de vie érythrocytaire diminuée) : intravasculaire → hémoglobinurie ; extravasculaire → hépato-splénomégalie ; triade **anémie + ictère + réticulocytose**.

## Points à retenir
- Anémie = ↓ RBC/Hb/Hct ; VGM et TCMH orientent vers microcytaire-hypochrome (fer, thalassémie), macrocytaire-normochrome (B12/folates), ou normocytaire-normochrome (aplasie).
- Le 2,3-DPG diminue l'affinité de l'Hb pour l'O₂ ; le glucose est le seul substrat énergétique du GR, métabolisé en anaérobiose.
- Courbe de dissociation de l'HbO₂ : sigmoïde, P50 = 26,6 mmHg ; déplacée à droite par ↓pH/↑PCO₂/↑2,3-DPG/↑température (libération tissulaire facilitée).
- Le CO₂ est transporté à 90% sous forme de HCO₃⁻ grâce à l'anhydrase carbonique (phénomène de Hamburger).
- Hémolyse physiologique = essentiellement extravasculaire (rate/foie/moelle) ; catabolisme de l'hème → bilirubine indirecte → directe → urobilinogène/stercobilinogène.`;

export const RED_BLOOD_CELLS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Milieu intérieur et globules rouges",
    source_label: "Physiologie — UMFT Timisoara, Lecture 3 (Physiology of Red Blood Cells / Internal Environment)",
    content_fr: RED_BLOOD_CELLS_COURSE,
  },
  qcm: [
    single("Quelle est la durée de vie normale d'un érythrocyte adulte ?", "C", "L'érythrocyte adulte a une durée de vie de 100 à 120 jours.", ["30 à 60 jours", "60 à 90 jours", "100 à 120 jours", "150 à 200 jours"]),
    single("Quelle forme adopte l'érythrocyte adulte en microscopie électronique ?", "B", "L'érythrocyte adulte est un disque biconcave à bords arrondis, offrant une grande surface pour un petit volume.", ["Sphère pleine", "Disque biconcave à bords arrondis", "Cylindre allongé", "Étoile à plusieurs branches"]),
    single("Une diminution du VGM (volume globulaire moyen) traduit :", "A", "Une diminution du VGM en dessous de 80 µm³ définit la microcytose.", ["Une microcytose", "Une macrocytose", "Une normocytose", "Une anisocytose"]),
    single("Quelle association d'anomalies caractérise typiquement une anémie ferriprive ?", "B", "L'anémie ferriprive est hypochrome (↓TCMH/CCMH) et microcytaire (↓VGM), avec réticulocytes normaux.", ["Macrocytaire normochrome", "Microcytaire hypochrome", "Normocytaire normochrome", "Macrocytaire hypochrome"]),
    single("Par quelle voie métabolique le glucose est-il principalement utilisé par l'érythrocyte ?", "A", "90-95% du glucose est métabolisé par glycolyse anaérobie (voie d'Embden-Meyerhof), source d'ATP.", ["Glycolyse anaérobie (voie d'Embden-Meyerhof)", "Cycle de Krebs mitochondrial", "Bêta-oxydation des acides gras", "Cycle de l'urée"]),
    single("Quel cycle produit le 2,3-DPG dans l'érythrocyte ?", "C", "Le cycle de Rapoport-Luebering, dérivé de la glycolyse, est la source de 2,3-DPG.", ["Le cycle de Krebs", "La voie des pentoses phosphates", "Le cycle de Rapoport-Luebering", "Le cycle de l'acide citrique"]),
    single("Quel est l'effet du 2,3-DPG sur l'affinité de l'hémoglobine pour l'O₂ ?", "B", "Le 2,3-DPG se lie de façon réversible à l'Hb et diminue son affinité pour l'O₂, favorisant sa libération tissulaire.", ["Il l'augmente", "Il la diminue", "Il n'a aucun effet", "Il l'annule complètement"]),
    single("L'affinité de l'HbF pour l'O₂ est-elle influencée par le 2,3-DPG ?", "B", "L'HbF (α2γ2) n'est PAS influencée par le 2,3-DPG, ce qui explique sa plus forte affinité pour l'O₂ que l'HbA.", ["Oui, fortement", "Non, elle n'est pas influencée", "Seulement en cas d'anémie", "Seulement à haute altitude"]),
    multi("Quels facteurs stimulent la glycolyse intra-érythrocytaire ?", ["A", "B", "C"], "L'hypoxie, l'exercice physique, l'anémie et l'altitude stimulent la glycolyse intra-érythrocytaire ; l'acidose métabolique l'inhibe.", ["Diminution de la PO2 plasmatique", "Exercice physique", "Anémie", "Diminution du pH (acidose métabolique)"]),
    single("Quel pourcentage de l'hémoglobine adulte normale est représenté par l'HbA1c ?", "C", "L'HbA1c représente normalement 2,2 à 4,8% de l'hémoglobine totale chez l'adulte.", ["0,5-1%", "10-15%", "2,2-4,8%", "20-25%"]),
    single("Que reflète le taux d'HbA1c ?", "B", "L'HbA1c résulte de la fixation du glucose sur la globine et reflète le niveau moyen de glycémie plasmatique des 4 derniers mois, durée de vie du GR.", ["La glycémie instantanée", "La glycémie moyenne des 4 derniers mois", "Le taux de fer sérique", "La saturation en oxygène"]),
    single("Quelle mutation caractérise l'hémoglobine S (drépanocytose) ?", "A", "La drépanocytose résulte du remplacement de l'acide glutamique par la valine en position 6 de la chaîne bêta de l'HbA1.", ["Remplacement de l'acide glutamique par la valine en position 6 de la chaîne bêta", "Délétion complète de la chaîne alpha", "Duplication du gène de la chaîne gamma", "Absence totale de synthèse de globine"]),
    single("La formation d'oxyhémoglobine (HbO2) est-elle une réaction d'oxydation ou d'oxygénation ?", "B", "La fixation de l'O2 sur le Fe2+ de l'hème est une réaction d'oxygénation réversible, PAS une oxydation (qui donnerait du Fe3+, comme dans la métHb).", ["Une oxydation du Fe2+ en Fe3+", "Une oxygénation réversible sur le Fe2+", "Une réaction irréversible", "Une hydrolyse"]),
    single("Quelle est la valeur normale du paramètre P50 de la courbe de dissociation de l'HbO2 ?", "C", "La P50 normale, PO2 pour laquelle la saturation en HbO2 est de 50%, est de 26,6 mmHg.", ["10 mmHg", "18 mmHg", "26,6 mmHg", "40 mmHg"]),
    multi("Quels facteurs déplacent la courbe de dissociation de l'HbO2 vers la droite (favorisant la libération tissulaire d'O2) ?", ["A", "B", "C"], "Une baisse de pH, une hausse de la PCO2 et une hausse du 2,3-DPG déplacent la courbe vers la droite, diminuant l'affinité de l'Hb pour l'O2.", ["Diminution du pH", "Augmentation de la PCO2", "Augmentation du 2,3-DPG", "Diminution de la température"]),
    single("Sous quelle forme la majorité du CO2 est-elle transportée dans le sang ?", "C", "90% du CO2 intra-érythrocytaire est transporté sous forme de bicarbonate (HCO3-), grâce à l'anhydrase carbonique.", ["Dissous dans le plasma", "Lié directement au fer de l'hème", "Sous forme de bicarbonate (HCO3-)", "Sous forme de carbonate de calcium"]),
    single("Comment se nomme l'échange d'ions chlorure contre les bicarbonates à travers la membrane érythrocytaire ?", "A", "Ce phénomène de migration des ions Cl- en échange du HCO3- est appelé phénomène de Hamburger.", ["Le phénomène de Hamburger", "L'effet Bohr", "L'effet Haldane direct", "La pompe Na+/K+-ATPase"]),
    single("Quelle proportion de la capacité tampon totale du sang est assurée par les systèmes tampons intra-érythrocytaires ?", "C", "Les systèmes tampons intra-érythrocytaires (KHCO3/H2CO3 et systèmes de l'Hb) assurent 3/4 de la capacité tampon sanguine totale.", ["1/4", "1/2", "3/4", "La totalité"]),
    single("Où se déroule majoritairement l'hémolyse physiologique des érythrocytes âgés ?", "B", "L'hémolyse physiologique est essentiellement extravasculaire : les macrophages de la rate, du foie et de la moelle phagocytent les vieux érythrocytes.", ["Dans la lumière des vaisseaux sanguins (intravasculaire)", "Dans les macrophages de la rate, du foie et de la moelle (extravasculaire)", "Dans les reins exclusivement", "Dans le tube digestif"]),
    single("Que devient le fer libéré par le catabolisme de l'hème ?", "A", "Le fer libéré se lie à la transferrine pour le transport plasmatique et peut être stocké sous forme de ferritine ou d'hémosidérine.", ["Il se lie à la transferrine et peut être stocké sous forme de ferritine/hémosidérine", "Il est immédiatement excrété dans les urines", "Il est détruit et ne peut plus être réutilisé", "Il reste toujours lié à la globine"]),
    single("Quelle triade clinique caractérise une hémolyse pathologique ?", "D", "L'hémolyse pathologique se caractérise classiquement par anémie, ictère et réticulocytose (réponse médullaire compensatrice).", ["Fièvre, toux, dyspnée", "Hypertension, œdèmes, protéinurie", "Douleur, rougeur, chaleur", "Anémie, ictère et réticulocytose"]),
  ],
  exam: { titre_fr: "Examen chronométré — Globules rouges", duration_seconds: 1_600 },
};

export const RED_BLOOD_CELLS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la durée de vie d'un érythrocyte adulte ?", question_en: "What is the lifespan of an adult erythrocyte?", answer_fr: "100 à 120 jours.", answer_en: "100 to 120 days." },
  { question_fr: "Quelle est la forme de l'érythrocyte adulte ?", question_en: "What is the shape of the adult erythrocyte?", answer_fr: "Un disque biconcave à bords arrondis.", answer_en: "A biconcave disc with round edges." },
  { question_fr: "L'érythrocyte adulte possède-t-il un noyau ?", question_en: "Does the adult erythrocyte have a nucleus?", answer_fr: "Non, c'est une cellule anucléée, sans organites cellulaires.", answer_en: "No, it is an anucleated cell without cellular organelles." },
  { question_fr: "Quelles sont les valeurs normales de numération érythrocytaire chez l'homme et la femme ?", question_en: "What are the normal RBC count values in men and women?", answer_fr: "Homme : 4,9 ± 0,7 millions/mm³ ; Femme : 4,3 ± 0,6 millions/mm³.", answer_en: "Men: 4.9 ± 0.7 million/mm3; Women: 4.3 ± 0.6 million/mm3." },
  { question_fr: "Que signifie une diminution des constantes érythrocytaires directes (RBC, Hb, Hct) ?", question_en: "What does a decrease in direct erythrocytic constants (RBC, Hb, Hct) indicate?", answer_fr: "Une anémie.", answer_en: "Anemia." },
  { question_fr: "Que signifie une augmentation des constantes érythrocytaires directes ?", question_en: "What does an increase in direct erythrocytic constants indicate?", answer_fr: "Une polyglobulie (primitive = maladie de Vaquez, secondaire = altitude).", answer_en: "Polycythemia (primary = polycythemia vera, secondary = altitude)." },
  { question_fr: "Que mesure le VGM (volume globulaire moyen) ?", question_en: "What does MCV (mean corpuscular volume) measure?", answer_fr: "Le volume moyen d'un érythrocyte (normal 80-100 µm³).", answer_en: "The average volume of a red blood cell (normal 80-100 µm3)." },
  { question_fr: "Un VGM diminué correspond à quel terme ?", question_en: "What term corresponds to a decreased MCV?", answer_fr: "Microcytose.", answer_en: "Microcytosis." },
  { question_fr: "Un VGM augmenté correspond à quel terme ?", question_en: "What term corresponds to an increased MCV?", answer_fr: "Macrocytose.", answer_en: "Macrocytosis." },
  { question_fr: "Que mesurent la TCMH et la CCMH ?", question_en: "What do MCH and MCHC measure?", answer_fr: "La teneur (TCMH) et la concentration (CCMH) corpusculaires moyennes en hémoglobine.", answer_en: "The mean corpuscular hemoglobin (MCH) and mean corpuscular hemoglobin concentration (MCHC)." },
  { question_fr: "Une TCMH diminuée correspond à quel terme ?", question_en: "What term corresponds to a decreased MCH?", answer_fr: "Hypochromie.", answer_en: "Hypochromia." },
  { question_fr: "Quel type d'anémie évoque un profil microcytaire hypochrome avec réticulocytes normaux ?", question_en: "What type of anemia does a microcytic hypochromic profile with normal reticulocytes suggest?", answer_fr: "Anémie ferriprive (carence en fer) ou thalassémie.", answer_en: "Iron deficiency anemia or thalassemia." },
  { question_fr: "Quel type d'anémie évoque un profil macrocytaire normochrome avec réticulocytes diminués ?", question_en: "What type of anemia does a macrocytic normochromic profile with decreased reticulocytes suggest?", answer_fr: "Anémie mégaloblastique (carence en vitamine B12 ou folates).", answer_en: "Megaloblastic anemia (vitamin B12 or folate deficiency)." },
  { question_fr: "Quel type d'anémie évoque un profil normocytaire normochrome avec réticulocytes diminués ?", question_en: "What type of anemia does a normocytic normochromic profile with decreased reticulocytes suggest?", answer_fr: "Anémie aplasique (insuffisance médullaire).", answer_en: "Aplastic anemia (bone marrow insufficiency)." },
  { question_fr: "Quel est le substrat énergétique principal de l'érythrocyte ?", question_en: "What is the main energy substrate of the erythrocyte?", answer_fr: "Le glucose (pas de réserve de glycogène).", answer_en: "Glucose (no glycogen storage)." },
  { question_fr: "Par quelle voie principale l'érythrocyte métabolise-t-il le glucose ?", question_en: "By which main pathway does the erythrocyte metabolize glucose?", answer_fr: "La glycolyse anaérobie (voie d'Embden-Meyerhof), 90-95% du métabolisme glucidique.", answer_en: "Anaerobic glycolysis (Embden-Meyerhof pathway), 90-95% of carbohydrate metabolism." },
  { question_fr: "Quel cycle métabolique produit le 2,3-DPG ?", question_en: "Which metabolic cycle produces 2,3-DPG?", answer_fr: "Le cycle de Rapoport-Luebering.", answer_en: "The Rapoport-Luebering cycle." },
  { question_fr: "Quel est l'effet du 2,3-DPG sur l'affinité de l'hémoglobine pour l'O2 ?", question_en: "What is the effect of 2,3-DPG on hemoglobin's affinity for O2?", answer_fr: "Il diminue l'affinité de l'Hb pour l'O2, favorisant sa libération tissulaire.", answer_en: "It decreases Hb's affinity for O2, favoring tissue release." },
  { question_fr: "L'HbF est-elle sensible au 2,3-DPG ?", question_en: "Is HbF sensitive to 2,3-DPG?", answer_fr: "Non, son affinité pour l'O2 n'est pas influencée par le 2,3-DPG.", answer_en: "No, its affinity for O2 is not influenced by 2,3-DPG." },
  { question_fr: "Que représente l'hémoglobine dans la composition de l'érythrocyte ?", question_en: "What does hemoglobin represent in erythrocyte composition?", answer_fr: "95% des protéines érythrocytaires et 30-35% du volume cellulaire.", answer_en: "95% of erythrocyte proteins and 30-35% of cell volume." },
  { question_fr: "Quelle est la structure quaternaire de l'hémoglobine ?", question_en: "What is the quaternary structure of hemoglobin?", answer_fr: "4 unités, chacune composée d'un hème et d'une chaîne de globine.", answer_en: "4 units, each comprising one heme and one globin chain." },
  { question_fr: "Que fixe le fer de l'hème (Fe2+) ?", question_en: "What does the heme iron (Fe2+) bind?", answer_fr: "L'oxygène (O2), de façon réversible.", answer_en: "Oxygen (O2), reversibly." },
  { question_fr: "Que fixent les groupes -NH2 de la globine ?", question_en: "What do the -NH2 groups of globin bind?", answer_fr: "Le CO2, de façon réversible.", answer_en: "CO2, reversibly." },
  { question_fr: "Quelle est la composition de l'HbA1 adulte normale ?", question_en: "What is the composition of normal adult HbA1?", answer_fr: "α2β2, représente 97-98% de l'hémoglobine adulte.", answer_en: "α2β2, representing 97-98% of adult hemoglobin." },
  { question_fr: "Quelle est la composition de l'hémoglobine fœtale (HbF) ?", question_en: "What is the composition of fetal hemoglobin (HbF)?", answer_fr: "α2γ2.", answer_en: "α2γ2." },
  { question_fr: "Quelle proportion d'HbF est présente à la naissance ?", question_en: "What proportion of HbF is present at birth?", answer_fr: "70 à 80% de l'hémoglobine totale.", answer_en: "70 to 80% of total hemoglobin." },
  { question_fr: "Qu'est-ce que l'HbA1c ?", question_en: "What is HbA1c?", answer_fr: "L'hémoglobine glyquée, résultant de la fixation du glucose sur la globine.", answer_en: "Glycosylated hemoglobin, resulting from glucose binding to globin." },
  { question_fr: "Quelle est la mutation responsable de la drépanocytose ?", question_en: "What mutation causes sickle cell disease?", answer_fr: "Remplacement de l'acide glutamique par la valine en position 6 de la chaîne bêta (HbA1 → HbS).", answer_en: "Replacement of glutamic acid by valine at position 6 of the beta chain (HbA1 → HbS)." },
  { question_fr: "Qu'est-ce que la carboxyhémoglobine ?", question_en: "What is carboxyhemoglobin?", answer_fr: "Un composé stable de l'Hb avec le CO, dont l'affinité pour l'Hb est 250x supérieure à celle de l'O2.", answer_en: "A stable compound of Hb with CO, with an affinity for Hb 250x higher than that of O2." },
  { question_fr: "Qu'est-ce que la méthémoglobine (MetHb) ?", question_en: "What is methemoglobin (MetHb)?", answer_fr: "De l'hémoglobine dont le fer a été oxydé de Fe2+ en Fe3+, incapable de fixer l'O2.", answer_en: "Hemoglobin whose iron has been oxidized from Fe2+ to Fe3+, unable to bind O2." },
  { question_fr: "Quelle proportion de l'O2 sanguin est transportée liée à l'hémoglobine ?", question_en: "What proportion of blood O2 is transported bound to hemoglobin?", answer_fr: "99% (1% dissous dans le plasma).", answer_en: "99% (1% dissolved in plasma)." },
  { question_fr: "Quelle est la forme de la courbe de dissociation de l'HbO2 ?", question_en: "What is the shape of the HbO2 dissociation curve?", answer_fr: "Sigmoïde (en S).", answer_en: "Sigmoidal (S-shaped)." },
  { question_fr: "Que représente le paramètre P50 ?", question_en: "What does the P50 parameter represent?", answer_fr: "La PO2 pour laquelle la saturation de l'Hb en O2 est de 50% (normale 26,6 mmHg).", answer_en: "The PO2 at which Hb O2 saturation is 50% (normal 26.6 mmHg)." },
  { question_fr: "Quels facteurs déplacent la courbe de dissociation vers la droite ?", question_en: "What factors shift the dissociation curve to the right?", answer_fr: "↓pH, ↑PCO2, ↑2,3-DPG, ↑température, HbA1.", answer_en: "↓pH, ↑PCO2, ↑2,3-DPG, ↑temperature, HbA1." },
  { question_fr: "Quels facteurs déplacent la courbe de dissociation vers la gauche ?", question_en: "What factors shift the dissociation curve to the left?", answer_fr: "↑pH, ↓PCO2, ↓2,3-DPG, ↓température, HbF.", answer_en: "↑pH, ↓PCO2, ↓2,3-DPG, ↓temperature, HbF." },
  { question_fr: "Quelle enzyme catalyse l'hydratation du CO2 dans l'érythrocyte ?", question_en: "Which enzyme catalyzes CO2 hydration in the erythrocyte?", answer_fr: "L'anhydrase carbonique.", answer_en: "Carbonic anhydrase." },
  { question_fr: "Sous quelle forme 90% du CO2 intra-érythrocytaire est-il transporté ?", question_en: "In what form is 90% of intra-erythrocytic CO2 transported?", answer_fr: "Sous forme de bicarbonate (HCO3-).", answer_en: "As bicarbonate (HCO3-)." },
  { question_fr: "Comment s'appelle l'échange Cl-/HCO3- à travers la membrane érythrocytaire ?", question_en: "What is the Cl-/HCO3- exchange across the erythrocyte membrane called?", answer_fr: "Le phénomène de Hamburger.", answer_en: "The Hamburger phenomenon (chloride shift)." },
  { question_fr: "Quelle proportion de la capacité tampon sanguine totale est assurée par les systèmes tampons intra-érythrocytaires ?", question_en: "What proportion of total blood buffering capacity is provided by intra-erythrocytic buffer systems?", answer_fr: "3/4 (trois quarts).", answer_en: "3/4 (three quarters)." },
  { question_fr: "Où se déroule l'érythropoïèse ?", question_en: "Where does erythropoiesis take place?", answer_fr: "Dans la moelle osseuse.", answer_en: "In the bone marrow." },
  { question_fr: "Quelle hormone est nécessaire à l'érythropoïèse ?", question_en: "Which hormone is required for erythropoiesis?", answer_fr: "L'érythropoïétine (EPO).", answer_en: "Erythropoietin (EPO)." },
  { question_fr: "Quel est le pourcentage normal de réticulocytes circulants ?", question_en: "What is the normal percentage of circulating reticulocytes?", answer_fr: "0,5 à 1,5%.", answer_en: "0.5 to 1.5%." },
  { question_fr: "Où se déroule majoritairement la destruction (hémolyse) des érythrocytes âgés ?", question_en: "Where does the destruction (hemolysis) of aged erythrocytes mainly occur?", answer_fr: "Extravasculaire, dans les macrophages de la rate, du foie et de la moelle osseuse.", answer_en: "Extravascularly, in macrophages of the spleen, liver, and bone marrow." },
  { question_fr: "En quoi la globine est-elle transformée lors du catabolisme de l'Hb ?", question_en: "What is globin converted into during Hb catabolism?", answer_fr: "En acides aminés, réutilisés pour la synthèse protéique.", answer_en: "Into amino acids, reused for protein synthesis." },
  { question_fr: "Quels sont les deux produits de dégradation de l'hème ?", question_en: "What are the two breakdown products of heme?", answer_fr: "Le fer et la biliverdine (puis bilirubine).", answer_en: "Iron and biliverdine (then bilirubin)." },
  { question_fr: "Sous quelle forme la bilirubine circule-t-elle avant conjugaison hépatique ?", question_en: "In what form does bilirubin circulate before hepatic conjugation?", answer_fr: "Bilirubine indirecte (non conjuguée), liée à l'albumine.", answer_en: "Indirect (unconjugated) bilirubin, bound to albumin." },
  { question_fr: "À quoi la bilirubine indirecte est-elle conjuguée dans le foie ?", question_en: "What is indirect bilirubin conjugated to in the liver?", answer_fr: "À l'acide glucuronique, formant la bilirubine directe.", answer_en: "To glucuronic acid, forming direct bilirubin." },
  { question_fr: "En quoi la bilirubine directe est-elle transformée dans le côlon ?", question_en: "What is direct bilirubin converted into in the colon?", answer_fr: "En urobilinogène (par la flore bactérienne), puis en stercobilinogène.", answer_en: "Into urobilinogen (by bacterial flora), then stercobilinogen." },
  { question_fr: "Quelle triade clinique caractérise l'hémolyse pathologique ?", question_en: "What clinical triad characterizes pathological hemolysis?", answer_fr: "Anémie, ictère et réticulocytose.", answer_en: "Anemia, jaundice, and reticulocytosis." },
];

const HEMATOPOIESIS_LEUKOCYTES_COURSE = `# Volémie, hématopoïèse et rôle des leucocytes dans la défense de l'organisme

## 1. Volémie (volume sanguin total)
- **Définition** : somme du volume plasmatique et du volume globulaire. Volume sanguin total (VST) = VP + VG = 3000 + 2000 = 5000 mL.
  - VST ≈ 5000 mL (7-8% du poids corporel, 3 L/m²)
  - Volume plasmatique (VP) ≈ 3000 mL (55% du VST)
  - Volume globulaire (VG) ≈ 2000 mL (45% du VST), composé à 99% d'érythrocytes et 1% de leucocytes/plaquettes
- **Hématocrite veineux (Hct)** = (VG × 100) / VST = (2000×100)/5000 = 40%. Valeurs normales : Homme 45 ± 7%, Femme 42 ± 5%.
- **Interprétation croisée VST + Hct** : normovolémie + oligocythémie = anémie ; normovolémie + polycythémie = polyglobulie ; hypervolémie + oligocythémie = hyperhydratation ; hypovolémie + polycythémie = déshydratation.

**Variations physiologiques de la volémie** :
1. **Sexe** : VST homme > VST femme (masse musculaire ↑ → consommation d'O2 ↑ → érythropoïèse stimulée).
2. **Âge** : VST (mL/kg) nouveau-né > adulte > personne âgée (hypoxie périnatale stimule l'érythropoïèse chez le nouveau-né ; ralentissement du métabolisme chez la personne âgée diminue le VP).
3. **Grossesse** : VST augmente de 20-30% au dernier trimestre (les œstrogènes induisent une rétention d'eau).
4. **Exercice physique** : non entraîné → VST ↑ transitoirement (passage d'eau vers l'espace interstitiel musculaire) ; entraîné → mobilisation efficace du sang des réservoirs (VG).
5. **Environnement externe** : altitude → polyglobulie d'altitude (VG↑) ; chaleur → perte hydrique par transpiration (VP↓).
6. **Changement de position** : orthostatisme prolongé → œdème de stase (VP↓ dans les membres inférieurs) ; clinostatisme prolongé → ↓ métabolisme tissulaire.

**Réservoirs sanguins** :
- **Réservoir hépatique** : 500-600 mL (25-30% du débit sanguin hépatique), capillaires sinusoïdes + veines hépatiques ; accumulation par congestion hépatique post-digestive ; mobilisation par mécanisme sympathique-adrénergique (exercice, hémorragie aiguë).
- **Réservoir splénique** : 200-300 mL riche en masse érythrocytaire ; accumulation par tonus sympathique ; mobilisation par contraction de la capsule splénique et des veines spléniques.
- **Plexus veineux sous-papillaire dermique** : ~1500 mL, rôle de thermorégulation (débit sanguin cutané ~400 mL/min en conditions normales, ~50 mL/min au froid, ~2000 mL/min à la chaleur).
- **Volume sanguin central** : 600-1000 mL, mobilisé lors du passage en orthostatisme (maintien de la pression artérielle) et en début d'exercice physique.

## 2. Hématopoïèse
- **Définition** : formation des cellules sanguines à partir de la cellule souche pluripotente, sous l'action de facteurs de croissance (prolifération, différenciation, maturation).
- **Localisation** : moelle osseuse (MO) — de tous les os chez le nouveau-né/nourrisson, restreinte progressivement au squelette axial chez l'adulte (os plats : sternum, côtes, os coxaux ; os courts : vertèbres ; épiphyses proximales du fémur et de l'humérus).

### 2.1 Érythropoïèse
- Étapes : cellule souche pluripotente → proérythroblaste → érythroblaste → normoblaste → réticulocyte (anucléé) → érythrocyte adulte.
- Maturation : synthèse ribosomiale d'Hb, élimination du noyau et des organites, diminution de taille, augmentation du volume cytoplasmique, diminution de la basophilie et de la capacité de prolifération.
- **Réticulocyte** : 0,5-1,5% des érythrocytes circulants, maturation splénique.
- **Régulation par l'érythropoïétine (EPO)** : glycoprotéine synthétisée par le rein (90%) et le foie (10%), sensible à la PO2 tissulaire (protéine sensible à l'hypoxie) ; hypoxie → ↑ sécrétion d'EPO ; hyperoxie → ↓ sécrétion. L'EPO stimule tous les stades de l'érythropoïèse et raccourcit sa durée à 5 jours.
- **Facteurs régulant la sécrétion rénale d'EPO** : masse érythrocytaire (anémie → ↑EPO, polyglobulie → ↓EPO), oxygénation tissulaire (altitude, insuffisance respiratoire → ↑EPO), consommation d'O2 (effort aérobie → ↑EPO), facteurs hormonaux (stimulateurs : testostérone, cortisol, GH ; inhibiteur : œstrogènes).

**Substances nécessaires à l'érythropoïèse** :
- Protéines (acides aminés), minéraux (fer, cuivre, cobalt, zinc), vitamines (B12, acide folique, B6, C, E).
- Synthèse de l'Hb : Fe2+ + vitamine B6 → hème ; acides aminés → globine.
- Maturation des progéniteurs : vitamine B12 et acide folique.
- Facteurs antioxydants (Fe3+ → Fe2+) : vitamines C et E.
- Cofacteurs enzymatiques : cuivre, cobalt, zinc.

**Métabolisme du fer** (quantité totale 4-5 g) :
- Compartiment sanguin (65%) : dans le GR sous forme d'Hb, dans le plasma lié à la transferrine.
- Compartiment de réserve (30%) : rate, foie, MO — ferritine (Fe3+ facilement mobilisable) et hémosidérine (Fe3+ difficilement mobilisable) ; les érythroblastes contenant des réserves de fer sont appelés sidéroblastes (normalement 20-60% des érythroblastes).
- Compartiment tissulaire (5%) : myoglobine musculaire (4%), enzymes oxydatives intracellulaires (1%).
- Apport exogène : Fe3+ alimentaire (sources végétales) ou Fe2+ (sources animales), réduit en Fe2+ absorbable par l'acide chlorhydrique gastrique et la vitamine C ; l'absorption duodénale est limitée à 5-10% de l'apport quotidien.
- Besoins : Homme 10 mg/jour, Femme 15 mg/jour. Pertes ~1 mg/jour (selles, urines, cheveux ; en plus règles/grossesse chez la femme).
- La carence en fer induit une anémie microcytaire hypochrome.

| Vitamine | Besoins/jour | Rôle | Carence |
| --- | --- | --- | --- |
| **B12 (cyanocobalamine)** | 1-3 µg | Absorption iléale (facteur intrinsèque), transport par transcobalamine II | Anémie normochrome macrocytaire (mégaloblastique) |
| **Acide folique** | 50-100 µg | Synthèse d'ADN ; réserve hépatique 10-20 mg (3-4 mois) | Anémie mégaloblastique (idem B12) |
| **B6 (pyridoxine)** | 2-5 mg | Synthèse de l'hème | Anémie sidéroblastique |
| **C (acide ascorbique)** | 50-75 mg | Réduit Fe3+→Fe2+ (absorption du fer), antioxydant | Limite la formation de métHb si carence |
| **E (tocophérol)** | 12-15 UI | Antioxydant, protège la vitamine C | — |

### 2.2 Leucopoïèse
- **Définition** : formation des leucocytes adultes à partir de la cellule souche pluripotente : granulocytopoïèse (granulocytes), monocytopoïèse (monocytes), lymphocytopoïèse (lymphocytes).
- **Localisation** : moelle osseuse + thymus (pour les lymphocytes T).

**(a) Granulocytopoïèse** : cellule souche pluripotente → cellule souche myéloïde → myéloblaste → promyélocyte → série granulocytaire (éosinophile, basophile, neutrophile).

**(b) Monocytopoïèse** : cellule souche myéloïde → monoblaste → promonocyte → monocyte (forme circulante) → macrophage (forme tissulaire). L'ensemble monocytes + macrophages forme le **système monocytes-macrophages**.

**(c) Lymphopoïèse** : stade médullaire (cellule souche pluripotente → cellule souche lymphoïde → lymphoblastes B/NK/T) puis stade thymique pour les lymphoblastes T (organes lymphoïdes centraux : MO + thymus).

**Régulation de la leucopoïèse** :
- Facteurs de croissance (effet paracrine) :

| Facteur | Cible |
| --- | --- |
| GM-CSF | Granulocytes / monocytes |
| G-CSF | Neutrophiles |
| M-CSF | Monocytes |
| IL-3 / IL-6 | Cellule souche pluripotente |
| IL-4 | Basophiles / lymphocytes |
| IL-5 | Éosinophiles / lymphocytes |
- Mécanisme hormonal : GH, hormones thyroïdiennes, testostérone stimulent la granulocytopoïèse ; ACTH et cortisol modulent neutrophiles/éosinophiles/basophiles/lymphocytes.

### 2.3 Thrombopoïèse
- **Définition** : prolifération, endomitose et maturation des précurseurs thrombocytaires dans la moelle osseuse.
- Étapes : cellule souche pluripotente → mégacaryoblaste → promégacaryocyte → mégacaryocyte → thrombocyte (plaquette).
- **Endomitose** : caractéristique du mégacaryoblaste (cellule polyploïde, 8-16 paires de chromosomes), réplication nucléaire sans division cellulaire.
- **Maturation cytoplasmique** : augmentation du volume cellulaire, diminution de la basophilie, apparition de granulations azurophiles, formation de membranes de démarcation cytoplasmique.
- **Fragmentation cytoplasmique** : 1 mégacaryocyte génère 2000 à 7000 thrombocytes.
- **Régulation par la thrombopoïétine (TPO)** : facteur de croissance apparenté à l'EPO, produit par le foie, le rein, la rate et la MO ; une diminution des plaquettes circulantes stimule la mobilisation du réservoir splénique et la libération de TPO.

## 3. Rôle des leucocytes dans la défense de l'organisme
- **Défense de l'organisme** = ensemble des mécanismes protégeant l'individu contre l'agression des micro-organismes envahissants.
- **Défense non spécifique** : innée, primitive, efficacité moyenne, très rapide.
- **Défense spécifique** : acquise contre un antigène spécifique (immunogène), très efficace, latence de plusieurs jours.
  - Naturelle : passive (transfert placentaire d'anticorps) ou active (maladie).
  - Artificielle : passive (perfusion d'anti-toxines/globulines) ou active (vaccination).

**(a) Mécanismes de défense non spécifique** :
1. Barrières de défense naturelles : jonctions serrées de l'épiderme, mucus des surfaces épithéliales.
2. Facteurs antibactériens des sécrétions exocrines : HCl gastrique, enzymes digestives (pepsine, trypsine), acides biliaires, lysozyme de la salive/larmes.
3. Facteurs physiques : température corporelle 37°C (la fièvre est une réaction de défense), ↑PO2 inhibe le développement des germes anaérobies.
4. Substances préformées : système du complément sérique.
5. Phagocytose : neutrophiles (bactéries), macrophages (bactéries, parasites, cellules tumorales).
- **Système du complément** : groupe de protéines plasmatiques (C1-C9) activées en cascade ; fournit l'opsonisation nécessaire à la phagocytose (fragment C3b) ; effet bactéricide et tumoricide via le complexe d'attaque membranaire (C5b-C9), formant des pores perméables au Na+ et à l'eau → cytolyse.

**(b) Mécanismes de défense spécifique** :
- **Réponse immunitaire humorale** : activation des lymphocytes B en plasmocytes, formation d'anticorps → neutralisation antigénique.
- **Réponse immunitaire cellulaire** : activation des lymphocytes T cytotoxiques et cellules NK → élimination des cellules présentatrices d'antigène.
- **Réponse primaire** : premier contact avec l'antigène, latence longue (7 jours), activation des lymphocytes B naïfs, anticorps IgM en faible quantité, formation de lymphocytes B mémoires.
- **Réponse secondaire** : contacts ultérieurs, latence courte (2-4 jours), activation des lymphocytes B mémoires, anticorps IgG en grande quantité, réponse rapide et ample.

### Les leucocytes granulocytaires

| Type | Proportion | Cinétique (moelle / sang / tissu) | Fonction principale |
| --- | --- | --- | --- |
| **Neutrophiles (PNN)** | 56-68% (3000-7000/mm³) | 6-9 j / 4-9 h / 4-5 j | Phagocytose (explosion respiratoire) |
| **Éosinophiles (EO)** | 1-3% (100-400/mm³) | 6-9 j / 6 h / 8-12 j | Cytotoxicité anti-parasitaire, allergie |
| **Basophiles (BA)** | 0-1% (20-50/mm³) | 3-7 j / qq heures / semaines-mois | Libération d'héparine et d'histamine (IgE) |
| **Monocytes/macrophages** | 4-10% (100-700/mm³) | 5-6 j / 3 j / plusieurs mois | Macrophagocytose, sécrétion, présentation d'antigène |

**Neutrophiles (PNN)** : diamètre 10-15 µm, noyau segmenté (2-5 lobes), cytoplasme peu acidophile, granulations neutrophiles.
- Propriétés : mobilité, margination, diapédèse, chimiotactisme.
- Cinétique : stade médullaire 6-9 jours (production 10¹¹/jour, réserve médullaire 10× la quantité circulante), stade sanguin 4-9 heures, stade tissulaire 4-5 jours (peau, muqueuses des voies aériennes/digestives/urinaires).
- Fonctions : phagocytose (opsonisation → attachement → engloutissement/phagosome → bactéricidie/digestion [mécanisme O2-dépendant = « explosion respiratoire » via NADPH-oxydase/SOD/myéloperoxydase ; mécanisme O2-indépendant = enzymes lysosomales, protéines cationiques, lysozyme, lactoferrine] → exocytose des fragments non digérés = pus) ; sécrétion (dégranulation libérant enzymes lysosomales, métabolites de l'acide arachidonique, IL-1 pyrogène).

**Éosinophiles (EO)** : 1-3% (100-400/mm³) ; noyau bilobé, cytoplasme fortement acidophile.
- Cinétique : stade médullaire 6-9 jours, stade sanguin 6 heures, stade tissulaire 8-12 jours (peau, voies aériennes, tube digestif).
- Fonctions : cytotoxicité anti-parasitaire, réaction allergique, phagocytose bactérienne. Facteurs sécrétés : protéine basique majeure (MBP, détruit les parasites), protéine cationique éosinophile (ECP, 8× plus puissante, neurotoxique), peroxydase éosinophile.
- Éosinophilie réactionnelle : parasitoses intestinales (Trichinella spiralis), protozooses (Giardia intestinalis), dermatite allergique, asthme allergique.

**Basophiles (BA)** : 0-1% (20-50/mm³) ; forme circulante = basophile, forme tissulaire = mastocyte.
- Cinétique : stade médullaire 3-7 jours, stade sanguin quelques heures, stade tissulaire des semaines à des mois.
- Dégranulation déclenchée par complexes allergène/IgE : libération d'**héparine** (anticoagulant) et d'**histamine** (avec les éosinophiles) → asthme allergique, rhinite allergique, conjonctivite allergique, réaction anaphylactique.

**Système monocytes-macrophages** : 4-10% (100-700/mm³) ; diamètre 14-24 µm, noyau en fer à cheval, cytoplasme fortement basophile.
- Cinétique : stade médullaire 5-6 jours, stade sanguin 3 jours, stade tissulaire plusieurs mois.
- Macrophages tissulaires spécialisés : macrophages alvéolaires (poumon), cellules de Kupffer (foie), cellules de Langerhans (peau), microglie (cerveau), ostéoclastes (os).
- Fonctions : macrophagocytose (bactéries type mycobactéries, parasites, champignons, cellules tumorales) ; fonction sécrétoire (>100 substances : activité bactéricide, activité tumoricide via le TNF, inflammation/fièvre via IL-1, réparation tissulaire via facteurs angiogéniques et fibroblastiques) ; présentation d'antigène (APC) — ingestion/traitement de l'Ag, exposition avec le CMH de classe II, reconnaissance par les lymphocytes T CD4+ auxiliaires.

**Lymphocytes** :
- **Lymphocytes B** : récepteurs BCR spécifiques, différenciation en plasmocytes dans la rate/ganglions, production de 5 classes d'immunoglobulines (IgG 75-85% des Ig circulantes, IgM agglutinines, IgA sécrétoire, IgD récepteur B, IgE liée aux mastocytes).
- **Lymphocytes T cytotoxiques (CD8+)** : récepteurs TCR reconnaissant l'antigène présenté par une cellule infectée (CMH classe I), destruction par libération de perforines et granzymes.
- **Lymphocytes T auxiliaires (CD4+)** : sécrètent des cytokines stimulant l'immunité cellulaire et humorale ; indispensables au fonctionnement normal du système immunitaire (leur déplétion dans l'infection à VIH cause une immunodépression).
- **Cellules NK** : détruisent les cellules infectées/tumorales sans restriction au CMH de classe I, par polymérisation de perforines (pore membranaire → nécrose) et induction de l'apoptose via les granzymes.

**Variations physiologiques et pathologiques de la numération leucocytaire** :
- Leucocytose (>30 000/mm³ = réaction leucémoïde), neutrophilie (infections bactériennes aiguës), éosinophilie (parasitoses, allergies), basophilie, lymphocytose (mononucléose infectieuse, tuberculose, infections virales), monocytose ; neutropénie et lymphopénie.

## Points à retenir
- Volume sanguin total ≈ 5000 mL = 55% plasma + 45% volume globulaire ; hématocrite normal Homme 45±7%, Femme 42±5%.
- L'EPO (rein 90%, foie 10%) stimule l'érythropoïèse en réponse à l'hypoxie tissulaire ; fer, B12, folates, B6, C et E sont indispensables.
- Les trois lignées médullaires (érythropoïèse, leucopoïèse, thrombopoïèse) dérivent toutes de la cellule souche pluripotente.
- Les neutrophiles assurent la première ligne de phagocytose ; les éosinophiles luttent contre les parasites ; les basophiles/mastocytes médient l'allergie ; les macrophages présentent l'antigène ; les lymphocytes B et T assurent l'immunité spécifique humorale et cellulaire.`;

export const HEMATOPOIESIS_LEUKOCYTES_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Volémie, hématopoïèse et rôle des leucocytes",
    source_label: "Physiologie — UMFT Timisoara, Lecture 5 (Volemia. Hematopoiesis. Leukocytes)",
    content_fr: HEMATOPOIESIS_LEUKOCYTES_COURSE,
  },
  qcm: [
    single("Quelle est la formule du volume sanguin total (VST) ?", "A", "VST = volume plasmatique + volume globulaire, soit environ 3000 + 2000 = 5000 mL.", ["Volume plasmatique + volume globulaire", "Volume globulaire uniquement", "Volume plasmatique uniquement", "Débit cardiaque × fréquence cardiaque"]),
    single("Quelle est la composition normale du volume globulaire ?", "C", "Le volume globulaire comprend 99% d'érythrocytes et 1% de leucocytes/plaquettes.", ["50% érythrocytes, 50% leucocytes", "100% érythrocytes exclusivement", "99% érythrocytes, 1% leucocytes et plaquettes", "80% plaquettes, 20% érythrocytes"]),
    single("Comment se calcule l'hématocrite veineux ?", "B", "Hct = (volume globulaire × 100) / volume sanguin total.", ["Hct = volume plasmatique / volume globulaire", "Hct = (volume globulaire × 100) / volume sanguin total", "Hct = volume sanguin total / poids corporel", "Hct = hémoglobine / volume plasmatique"]),
    single("Comment interpréter une hypervolémie associée à une oligocythémie ?", "C", "Hypervolémie (VST augmenté) + oligocythémie (Hct diminué) évoque une hyperhydratation.", ["Une anémie simple", "Une déshydratation", "Une hyperhydratation", "Une polyglobulie"]),
    single("Pourquoi le volume sanguin total est-il physiologiquement plus élevé chez l'homme que chez la femme ?", "A", "La masse musculaire plus importante chez l'homme augmente la consommation d'O2, stimulant l'érythropoïèse et donc le volume globulaire.", ["La masse musculaire augmente la consommation d'O2 et stimule l'érythropoïèse", "Les hormones féminines réduisent activement le volume sanguin", "Les femmes ont systématiquement moins de plasma", "Il n'existe aucune différence physiologique"]),
    single("Quel réservoir sanguin joue un rôle majeur dans la thermorégulation ?", "C", "Le plexus veineux sous-papillaire dermique (~1500 mL) module le débit sanguin cutané selon la température ambiante.", ["Le réservoir hépatique", "Le réservoir splénique", "Le plexus veineux sous-papillaire dermique", "Le volume sanguin central"]),
    single("Où se déroule l'hématopoïèse chez l'adulte ?", "B", "Chez l'adulte, l'hématopoïèse est restreinte au squelette axial (sternum, côtes, vertèbres, épiphyses proximales du fémur et de l'humérus).", ["Dans tous les os, comme chez le nourrisson", "Dans le squelette axial uniquement", "Exclusivement dans la rate", "Exclusivement dans le foie"]),
    single("Quelle proportion des érythrocytes circulants est représentée par les réticulocytes ?", "B", "Les réticulocytes représentent normalement 0,5 à 1,5% des érythrocytes circulants.", ["0,01-0,1%", "0,5-1,5%", "5-10%", "15-20%"]),
    single("Où l'érythropoïétine (EPO) est-elle principalement synthétisée ?", "A", "L'EPO est synthétisée à 90% par le rein et à 10% par le foie.", ["Le rein (90%) et le foie (10%)", "Exclusivement par la moelle osseuse", "Le foie (90%) et le rein (10%)", "La rate exclusivement"]),
    single("Quel est l'effet de l'hypoxie tissulaire sur la sécrétion d'EPO ?", "A", "L'hypoxie tissulaire stimule la sécrétion d'EPO.", ["Elle stimule la sécrétion d'EPO", "Elle inhibe la sécrétion d'EPO", "Elle n'a aucun effet", "Elle stimule uniquement la thrombopoïèse"]),
    multi("Quelles vitamines sont indispensables à la maturation des progéniteurs érythrocytaires ?", ["A", "B"], "La vitamine B12 et l'acide folique sont indispensables à la maturation nucléaire des progéniteurs érythrocytaires ; leur carence entraîne une anémie mégaloblastique.", ["Vitamine B12", "Acide folique", "Vitamine D", "Vitamine K"]),
    single("Quelle est la conséquence d'une carence en vitamine B6 sur l'érythropoïèse ?", "C", "La vitamine B6 est indispensable à la synthèse de l'hème ; sa carence entraîne une anémie sidéroblastique.", ["Anémie mégaloblastique", "Anémie ferriprive", "Anémie sidéroblastique", "Aucun effet notable"]),
    single("Sous quelle forme le fer de réserve facilement mobilisable est-il stocké ?", "A", "La ferritine stocke le Fe3+ sous une forme facilement mobilisable ; l'hémosidérine est difficilement mobilisable.", ["Ferritine", "Hémosidérine", "Transferrine", "Myoglobine"]),
    single("Quel pourcentage de l'apport alimentaire quotidien en fer est effectivement absorbé au niveau duodénal ?", "B", "L'absorption duodénale du fer est limitée à 5-10% de l'apport quotidien.", ["50-60%", "5-10%", "80-90%", "1%"]),
    single("De quelle cellule souche dérivent l'érythropoïèse, la leucopoïèse et la thrombopoïèse ?", "C", "Les trois lignées dérivent toutes de la cellule souche pluripotente (hémocytoblaste).", ["Le proérythroblaste", "Le mégacaryoblaste", "La cellule souche pluripotente (hémocytoblaste)", "Le myéloblaste"]),
    single("Combien de thrombocytes un seul mégacaryocyte peut-il générer ?", "C", "Un mégacaryocyte génère 2000 à 7000 thrombocytes par fragmentation cytoplasmique.", ["10 à 50", "200 à 500", "2000 à 7000", "50000 à 100000"]),
    single("Quel processus caractérise la maturation du mégacaryoblaste (endomitose) ?", "B", "L'endomitose est une réplication nucléaire sans division cellulaire, donnant une cellule polyploïde (8-16 paires de chromosomes).", ["Une division cellulaire classique en deux cellules filles", "Une réplication nucléaire sans division cellulaire (polyploïdie)", "Une apoptose programmée", "Une fusion avec un macrophage"]),
    single("Quel type cellulaire assure la première ligne de phagocytose face aux bactéries ?", "A", "Les neutrophiles (PNN) représentent la première ligne de défense non spécifique par phagocytose.", ["Les neutrophiles", "Les basophiles", "Les lymphocytes B", "Les éosinophiles"]),
    single("Quel mécanisme des neutrophiles est aussi appelé « explosion respiratoire » ?", "B", "Le mécanisme O2-dépendant de bactéricidie, générant des espèces réactives de l'oxygène via la NADPH-oxydase, est appelé « explosion respiratoire ».", ["La diapédèse", "Le mécanisme O2-dépendant (NADPH-oxydase)", "La margination", "Le chimiotactisme négatif"]),
    single("Quelle substance libérée par les basophiles/mastocytes possède une action anticoagulante ?", "B", "L'héparine, libérée lors de la dégranulation des mastocytes, inhibe l'activation des facteurs de coagulation plasmatiques.", ["L'histamine", "L'héparine", "La sérotonine", "Le TxA2"]),
    single("Quel rôle jouent les macrophages dans la réponse immunitaire spécifique ?", "C", "Les macrophages agissent comme cellules présentatrices d'antigène (APC), exposant l'antigène avec le CMH de classe II aux lymphocytes T CD4+.", ["Ils produisent directement des anticorps", "Ils détruisent les cellules infectées par apoptose induite", "Ils présentent l'antigène (APC) aux lymphocytes T CD4+", "Ils sécrètent de l'héparine"]),
    single("Comment les lymphocytes T cytotoxiques (CD8+) détruisent-ils leur cible ?", "A", "Ils libèrent des perforines et des granzymes qui détruisent la cellule cible présentant l'antigène via le CMH de classe I.", ["Par libération de perforines et granzymes", "Par production d'anticorps circulants", "Par phagocytose directe", "Par libération d'histamine"]),
    single("Quelle est la principale différence entre la réponse immunitaire primaire et secondaire ?", "B", "La réponse secondaire a une latence plus courte (2-4 jours vs 7 jours) et produit des IgG en grande quantité, grâce aux lymphocytes B mémoires.", ["La réponse primaire est plus rapide que la secondaire", "La réponse secondaire est plus rapide et produit des IgG en grande quantité grâce aux lymphocytes B mémoires", "Seule la réponse primaire implique des anticorps", "Il n'existe aucune différence de latence"]),
    single("Pourquoi l'infection à VIH entraîne-t-elle une immunodépression ?", "C", "Le VIH détruit préférentiellement les lymphocytes T CD4+, indispensables au fonctionnement normal du système immunitaire.", ["Il détruit les neutrophiles", "Il bloque la synthèse d'EPO", "Il détruit les lymphocytes T CD4+ auxiliaires", "Il inhibe uniquement la thrombopoïèse"]),
  ],
  exam: { titre_fr: "Examen chronométré — Volémie, hématopoïèse et leucocytes", duration_seconds: 1_920 },
};

export const HEMATOPOIESIS_LEUKOCYTES_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la formule du volume sanguin total ?", question_en: "What is the formula for total blood volume?", answer_fr: "VST = volume plasmatique + volume globulaire (≈ 5000 mL).", answer_en: "TBV = plasma volume + globular volume (≈ 5000 mL)." },
  { question_fr: "Quel pourcentage du VST représente le volume plasmatique ?", question_en: "What percentage of TBV is plasma volume?", answer_fr: "55%.", answer_en: "55%." },
  { question_fr: "Quel pourcentage du VST représente le volume globulaire ?", question_en: "What percentage of TBV is globular volume?", answer_fr: "45%.", answer_en: "45%." },
  { question_fr: "Comment se calcule l'hématocrite veineux ?", question_en: "How is venous hematocrit calculated?", answer_fr: "(Volume globulaire × 100) / volume sanguin total.", answer_en: "(Globular volume × 100) / total blood volume." },
  { question_fr: "Quelles sont les valeurs normales de l'hématocrite chez l'homme et la femme ?", question_en: "What are normal hematocrit values in men and women?", answer_fr: "Homme 45 ± 7%, Femme 42 ± 5%.", answer_en: "Men 45 ± 7%, Women 42 ± 5%." },
  { question_fr: "Pourquoi le volume sanguin total augmente-t-il de 20-30% en fin de grossesse ?", question_en: "Why does total blood volume increase by 20-30% in late pregnancy?", answer_fr: "La sécrétion d'œstrogènes induit une rétention d'eau.", answer_en: "Estrogen secretion induces water retention." },
  { question_fr: "Quel est le volume du réservoir sanguin hépatique ?", question_en: "What is the volume of the hepatic blood reservoir?", answer_fr: "500-600 mL.", answer_en: "500-600 mL." },
  { question_fr: "Par quel mécanisme le réservoir splénique est-il mobilisé ?", question_en: "By what mechanism is the splenic reservoir mobilized?", answer_fr: "Mécanisme sympathique-adrénergique (contraction capsulaire et veineuse).", answer_en: "Sympathetic-adrenergic mechanism (capsular and venous contraction)." },
  { question_fr: "Quel réservoir sanguin joue un rôle de thermorégulation ?", question_en: "Which blood reservoir plays a thermoregulatory role?", answer_fr: "Le plexus veineux sous-papillaire dermique.", answer_en: "The dermal subpapillary venous plexus." },
  { question_fr: "Qu'est-ce que l'hématopoïèse ?", question_en: "What is hematopoiesis?", answer_fr: "Le processus de formation des cellules sanguines à partir de la cellule souche pluripotente.", answer_en: "The process of blood cell formation from the pluripotent stem cell." },
  { question_fr: "Où se situe l'hématopoïèse chez l'adulte ?", question_en: "Where does hematopoiesis occur in adults?", answer_fr: "Dans le squelette axial (sternum, côtes, vertèbres, épiphyses proximales fémur/humérus).", answer_en: "In the axial skeleton (sternum, ribs, vertebrae, proximal epiphyses of femur/humerus)." },
  { question_fr: "Quelles sont les étapes de l'érythropoïèse ?", question_en: "What are the stages of erythropoiesis?", answer_fr: "Cellule souche pluripotente → proérythroblaste → érythroblaste → normoblaste → réticulocyte → érythrocyte adulte.", answer_en: "Pluripotent stem cell → proerythroblast → erythroblast → normoblast → reticulocyte → adult erythrocyte." },
  { question_fr: "Où l'EPO est-elle synthétisée ?", question_en: "Where is EPO synthesized?", answer_fr: "90% dans le rein, 10% dans le foie.", answer_en: "90% in the kidney, 10% in the liver." },
  { question_fr: "Quel stimulus déclenche la sécrétion d'EPO ?", question_en: "What stimulus triggers EPO secretion?", answer_fr: "L'hypoxie tissulaire (diminution de la PO2).", answer_en: "Tissue hypoxia (decreased PO2)." },
  { question_fr: "Quel est l'effet de l'EPO sur la durée de l'érythropoïèse ?", question_en: "What is the effect of EPO on erythropoiesis duration?", answer_fr: "Elle la raccourcit à 5 jours.", answer_en: "It shortens it to 5 days." },
  { question_fr: "Quelles hormones stimulent la synthèse rénale d'EPO ?", question_en: "Which hormones stimulate renal EPO synthesis?", answer_fr: "La testostérone, le cortisol et la GH.", answer_en: "Testosterone, cortisol, and GH." },
  { question_fr: "Quelle hormone inhibe la synthèse d'EPO ?", question_en: "Which hormone inhibits EPO synthesis?", answer_fr: "Les œstrogènes.", answer_en: "Estrogens." },
  { question_fr: "Quels minéraux sont nécessaires à l'érythropoïèse ?", question_en: "Which minerals are needed for erythropoiesis?", answer_fr: "Le fer, le cuivre, le cobalt et le zinc.", answer_en: "Iron, copper, cobalt, and zinc." },
  { question_fr: "Quelle est la quantité totale de fer dans l'organisme ?", question_en: "What is the total amount of iron in the body?", answer_fr: "4 à 5 grammes.", answer_en: "4 to 5 grams." },
  { question_fr: "Sous quelle forme le fer de réserve difficilement mobilisable est-il stocké ?", question_en: "In what form is hard-to-mobilize storage iron kept?", answer_fr: "L'hémosidérine.", answer_en: "Hemosiderin." },
  { question_fr: "Qu'est-ce qu'un sidéroblaste ?", question_en: "What is a sideroblast?", answer_fr: "Un érythroblaste contenant des réserves intracellulaires de fer.", answer_en: "An erythroblast containing intracellular iron stores." },
  { question_fr: "Quels sont les besoins quotidiens en fer chez l'homme et la femme ?", question_en: "What are daily iron requirements in men and women?", answer_fr: "Homme 10 mg/jour, Femme 15 mg/jour.", answer_en: "Men 10 mg/day, Women 15 mg/day." },
  { question_fr: "De quoi dépend l'absorption intestinale de la vitamine B12 ?", question_en: "What does intestinal absorption of vitamin B12 depend on?", answer_fr: "Du facteur intrinsèque, au niveau de l'iléon.", answer_en: "Intrinsic factor, at the level of the ileum." },
  { question_fr: "À quoi la vitamine B12 est-elle liée pour son transport plasmatique ?", question_en: "What is vitamin B12 bound to for plasma transport?", answer_fr: "La transcobalamine II.", answer_en: "Transcobalamin II." },
  { question_fr: "Quel type d'anémie résulte d'une carence en B12 ou en folates ?", question_en: "What type of anemia results from B12 or folate deficiency?", answer_fr: "Une anémie normochrome macrocytaire (mégaloblastique).", answer_en: "Normochromic macrocytic (megaloblastic) anemia." },
  { question_fr: "Quel type d'anémie résulte d'une carence en vitamine B6 ?", question_en: "What type of anemia results from vitamin B6 deficiency?", answer_fr: "Une anémie sidéroblastique.", answer_en: "Sideroblastic anemia." },
  { question_fr: "Quel est le rôle de la vitamine C dans l'érythropoïèse ?", question_en: "What is the role of vitamin C in erythropoiesis?", answer_fr: "Facteur réducteur (Fe3+→Fe2+) favorisant l'absorption du fer, et antioxydant.", answer_en: "Reducing factor (Fe3+→Fe2+) favoring iron absorption, and antioxidant." },
  { question_fr: "Quelles sont les trois lignées de la leucopoïèse ?", question_en: "What are the three leukopoiesis lineages?", answer_fr: "Granulocytopoïèse, monocytopoïèse et lymphocytopoïèse.", answer_en: "Granulocytopoiesis, monocytopoiesis, and lymphocytopoiesis." },
  { question_fr: "Où se déroule la lymphopoïèse des lymphocytes T ?", question_en: "Where does T lymphocyte lymphopoiesis occur?", answer_fr: "Stade médullaire puis maturation thymique.", answer_en: "Bone marrow stage then thymic maturation." },
  { question_fr: "Qu'est-ce que l'endomitose du mégacaryoblaste ?", question_en: "What is megakaryoblast endomitosis?", answer_fr: "Une réplication nucléaire sans division cellulaire, donnant une cellule polyploïde.", answer_en: "Nuclear replication without cell division, producing a polyploid cell." },
  { question_fr: "Combien de plaquettes un mégacaryocyte génère-t-il ?", question_en: "How many platelets does one megakaryocyte generate?", answer_fr: "2000 à 7000.", answer_en: "2000 to 7000." },
  { question_fr: "Quel facteur de croissance régule la thrombopoïèse ?", question_en: "Which growth factor regulates thrombopoiesis?", answer_fr: "La thrombopoïétine (TPO), apparentée à l'EPO.", answer_en: "Thrombopoietin (TPO), related to EPO." },
  { question_fr: "Quelle est la valeur normale du pourcentage de neutrophiles chez l'adulte ?", question_en: "What is the normal neutrophil percentage in adults?", answer_fr: "56 à 68%.", answer_en: "56 to 68%." },
  { question_fr: "Quelles sont les 4 propriétés fonctionnelles des neutrophiles ?", question_en: "What are the 4 functional properties of neutrophils?", answer_fr: "Mobilité, margination, diapédèse, chimiotactisme.", answer_en: "Mobility, margination, diapedesis, chemotaxis." },
  { question_fr: "Quelles sont les étapes de la phagocytose par les neutrophiles ?", question_en: "What are the steps of neutrophil phagocytosis?", answer_fr: "Opsonisation, attachement, engloutissement, bactéricidie/digestion, exocytose.", answer_en: "Opsonization, attachment, engulfment, bactericidal action/digestion, exocytosis." },
  { question_fr: "Comment se nomme le mécanisme O2-dépendant de bactéricidie des neutrophiles ?", question_en: "What is the O2-dependent bactericidal mechanism of neutrophils called?", answer_fr: "L'explosion respiratoire (respiratory burst).", answer_en: "The respiratory burst." },
  { question_fr: "Quel est le rôle principal des éosinophiles ?", question_en: "What is the main role of eosinophils?", answer_fr: "La cytotoxicité anti-parasitaire et la réaction allergique.", answer_en: "Anti-parasitic cytotoxicity and allergic reaction." },
  { question_fr: "Quelle protéine éosinophile détruit les parasites et stimule la dégranulation mastocytaire ?", question_en: "Which eosinophil protein destroys parasites and stimulates mast cell degranulation?", answer_fr: "La protéine basique majeure (MBP).", answer_en: "Major basic protein (MBP)." },
  { question_fr: "Quelle est la forme tissulaire des basophiles ?", question_en: "What is the tissue form of basophils?", answer_fr: "Le mastocyte.", answer_en: "The mast cell." },
  { question_fr: "Quelles substances sont libérées lors de la dégranulation des mastocytes ?", question_en: "What substances are released upon mast cell degranulation?", answer_fr: "L'héparine (anticoagulant) et l'histamine (allergie).", answer_en: "Heparin (anticoagulant) and histamine (allergy)." },
  { question_fr: "Quelle est la forme circulante et la forme tissulaire du système monocytes-macrophages ?", question_en: "What are the circulating and tissue forms of the monocyte-macrophage system?", answer_fr: "Monocyte (circulante) et macrophage (tissulaire).", answer_en: "Monocyte (circulating) and macrophage (tissue)." },
  { question_fr: "Comment se nomment les macrophages tissulaires du foie ?", question_en: "What are liver tissue macrophages called?", answer_fr: "Les cellules de Kupffer.", answer_en: "Kupffer cells." },
  { question_fr: "Comment se nomment les macrophages tissulaires de la peau ?", question_en: "What are skin tissue macrophages called?", answer_fr: "Les cellules de Langerhans.", answer_en: "Langerhans cells." },
  { question_fr: "Quel rôle les macrophages jouent-ils comme cellules présentatrices d'antigène ?", question_en: "What role do macrophages play as antigen-presenting cells?", answer_fr: "Ils exposent l'antigène avec le CMH de classe II aux lymphocytes T CD4+.", answer_en: "They present the antigen with class II MHC to CD4+ T lymphocytes." },
  { question_fr: "En quoi les lymphocytes B se différencient-ils lors de la réponse humorale ?", question_en: "What do B lymphocytes differentiate into during the humoral response?", answer_fr: "En plasmocytes, producteurs d'anticorps.", answer_en: "Into plasma cells, which produce antibodies." },
  { question_fr: "Quelle immunoglobuline représente 75-85% des Ig circulantes ?", question_en: "Which immunoglobulin represents 75-85% of circulating Ig?", answer_fr: "L'IgG.", answer_en: "IgG." },
  { question_fr: "Comment les lymphocytes T cytotoxiques (CD8+) détruisent-ils leur cible ?", question_en: "How do cytotoxic T lymphocytes (CD8+) destroy their target?", answer_fr: "En libérant des perforines et des granzymes.", answer_en: "By releasing perforins and granzymes." },
  { question_fr: "Pourquoi les lymphocytes T CD4+ sont-ils indispensables au système immunitaire ?", question_en: "Why are CD4+ T lymphocytes essential to the immune system?", answer_fr: "Ils sécrètent des cytokines stimulant l'immunité cellulaire et humorale ; leur déplétion (VIH) cause une immunodépression.", answer_en: "They secrete cytokines stimulating cellular and humoral immunity; their depletion (HIV) causes immunodeficiency." },
  { question_fr: "Comment les cellules NK détruisent-elles leur cible ?", question_en: "How do NK cells destroy their target?", answer_fr: "Par polymérisation de perforines (pore membranaire) et induction de l'apoptose via les granzymes, sans nécessiter le CMH de classe I.", answer_en: "By perforin polymerization (membrane pore) and apoptosis induction via granzymes, without requiring class I MHC." },
  { question_fr: "Qu'est-ce qu'une réaction leucémoïde ?", question_en: "What is a leukemoid reaction?", answer_fr: "Une leucocytose supérieure à 30 000/mm³.", answer_en: "A leukocytosis exceeding 30,000/mm3." },
];

const HEMOSTASIS_COURSE = `# Hémostase physiologique

## 1. Physiologie des plaquettes (thrombocytes)
- **Caractéristiques générales** : les thrombocytes (Tr.) sont les plus petits éléments figurés du sang (2-4 µm), fragments cytoplasmiques anucléés contenant des granulations azurophiles, issus de la moelle osseuse.
- **Deux propriétés fondamentales** : adhérence aux surfaces rugueuses et agrégation (formation du clou plaquettaire).

**Cinétique plaquettaire** :
- Stade médullaire : 4-5 jours. Stade sanguin : 8-10 jours (2/3 en circulation générale, 1/3 dans le réservoir splénique — capillaires sinusoïdes de la pulpe rouge).
- Destruction : physiologique (phagocytose par les macrophages des vieilles plaquettes) ou pathologique (destruction intense → thrombopénie ; la splénectomie est un geste thérapeutique dans certaines thrombopénies).

**Numération et indices plaquettaires** :
- Numération plaquettaire : 150 000-350 000/mm³ (↓ = thrombopénie, ↑ = thrombocytose).
- PCT (plaquettocrite) = 0,08-1%.
- VPM (volume plaquettaire moyen) = 6-10 µm³ (↑ post-hémorragie, reflétant la thrombopoïèse).
- IDP (indice de distribution plaquettaire) = 10-15% (↑ dans les thrombopathies, ex. thrombasthénie).

**Organisation morpho-fonctionnelle de la plaquette** :
1. **Zone périphérique** (fonction d'interaction extracellulaire) : atmosphère péri-thrombocytaire riche en facteurs de coagulation (V, VIII) et catécholamines ; système de glycoprotéines (Gp) = récepteurs d'adhésion/agrégation ; la membrane est source de métabolites de l'acide arachidonique.
2. **Zone cytoplasmique** (fonction contractile) : réseau de microtubules maintenant la forme discoïde au repos ; protéines contractiles (actine, thrombosthénine) assurant la forme sphérique avec prolongements de la plaquette activée, la dégranulation, et la rétraction du caillot de fibrine.
3. **Zone des organites** (fonction sécrétoire) : système des granules plaquettaires.

**Système des glycoprotéines plaquettaires** :
- **GpIIb/IIIa** : ligand fibrinogène, rôle dans l'agrégation plaquettaire.
- **GpIb** : ligand facteur von Willebrand (VIII-vWF), rôle dans l'adhérence à l'endothélium lésé.
- **GpIa** : ligand fibres de collagène sous-endothélial, rôle dans l'adhérence à l'endothélium lésé.

**Système des granules plaquettaires (facteurs thrombocytaires)** :
- **Corps denses** : facteurs pro-agrégants (ADP, thrombine), facteurs vasoconstricteurs (sérotonine).
- **Granules alpha** : facteurs pro-agrégants (fibrinogène, VIII-vWF), facteurs de coagulation (fibrinogène, Fp3, V, VIII, XIII), inhibiteurs de la fibrinolyse (PAI-1, α2-antiplasmine), facteurs de croissance (PDGF, TGF-β, FGF, VEGF).
- **Lysosomes** : enzymes hydrolytiques (hydrolases acides). La dégranulation est déclenchée par le calcium intracellulaire.

**Fonctions plaquettaires dans l'équilibre fluido-coagulant** :
- (a) **Hémostase primaire** : formation du clou plaquettaire, production de facteurs vasoconstricteurs (sérotonine + TxA2) et pro-agrégants (ADP + TxA2).
- (b) **Hémostase secondaire (coagulation)** : production de PL3, facteur V, facteur VIII soutenant le mécanisme intrinsèque ; liaison des facteurs Va et VIIIa au niveau de l'atmosphère péri-thrombocytaire, les protégeant de l'inactivation par les protéases plasmatiques ; production du facteur stabilisant de fibrine (XIII) ; production d'héparinase (inhibe l'action anticoagulante de l'héparine).
- (c) **Régulation de la fibrinolyse** : support des interactions plasminogène/activateur tissulaire (t-PA) ; la thrombosthénine, via la rétraction du caillot, élimine les inhibiteurs de fibrinolyse ; production d'α2-antiplasmine (inactive la plasmine).
- (d) **Réparation tissulaire** : facteurs de croissance à rôle trophique vasculaire (PDGF = facteur chimiotactique des fibroblastes ; TGF-β = dépôt de matrice extracellulaire ; FGF = développement des fibroblastes ; VEGF = angiogenèse, réparation de la paroi vasculaire).
- **Pathologie** : le purpura thrombopénique se manifeste par des pétéchies (hémorragies capillaires ponctuelles spontanées sous-cutanées) et un test de Rumpel-Leede positif (fragilité capillaire).

## 2. Hémostase physiologique
- **Définition** : ensemble des phénomènes assurant l'arrêt spontané de l'hémorragie au niveau des petits vaisseaux (microcirculation), impliquant des facteurs vasculaires, thrombocytaires, plasmatiques et tissulaires.
- **Exploration** : hémostase primaire (temps de saignement TS = 1,5-4 min) — temps vasculaire (vasoconstriction) + temps plaquettaire (clou blanc plaquettaire) ; hémostase secondaire — caillot rouge de fibrine, mécanisme intrinsèque (intravasculaire) et extrinsèque (extravasculaire).

### 2.1 Hémostase primaire
**Endothélium normal** : sécrète NO + PGI2 en grande quantité ; non adhérent, empêche l'agrégation plaquettaire, effet vasodilatateur, anticoagulant, pro-fibrinolytique.
**Endothélium lésé** : sécrète NO + PGI2 en faible quantité et ET-1 + TxA2 en grande quantité ; devient adhérent, permet l'agrégation plaquettaire, effet vasoconstricteur, procoagulant, anti-fibrinolytique. Une dysfonction endothéliale favorise le développement de la plaque athéromateuse ; sa rupture déclenche la formation d'un thrombus.

**2.1.1 Temps vasculaire** : vasoconstriction (VC) en réponse à la lésion pariétale, réduisant la perte sanguine.
- Mécanisme humoral : amines vasoactives (sérotonine, catécholamines) de l'atmosphère péri-thrombocytaire ; dérivés de l'acide arachidonique (TxA2) ; facteurs dérivés de l'endothélium (endothéline-1).
- Réflexe nerveux : stimulation des récepteurs douloureux cutanés → activation sympathique → VC régionale.
- Mécanisme myogénique : la lésion pariétale induit directement la contraction des fibres musculaires lisses du vaisseau lésé (spasme myogénique local).
- Effets de la vasoconstriction : réduction du débit sanguin au site lésé (↓ perte sanguine) ; adhérence plaquettaire aux structures sous-endothéliales exposées (favorise le clou plaquettaire) ; accumulation de facteurs de coagulation activés au niveau du clou plaquettaire (favorise le caillot de fibrine).

**2.1.2 Temps plaquettaire** : formation du clou plaquettaire, arrêt temporaire du saignement.
- **(a) Adhérence** : liaison des plaquettes aux structures sous-endothéliales, formation d'une couche unicellulaire plaquettaire.
  - Mécanisme électrostatique : les plaquettes chargées négativement sont attirées par les charges positives des structures sous-endothéliales (collagène).
  - Mécanisme chimico-enzymatique : adhérence ferme via les glycoprotéines membranaires GpIa et GpIb.
- **(b) Activation** (induite par l'adhérence) :
  - Changements structuraux : ↑ volume plaquettaire (25%), changement de forme (sphérique avec prolongements), expression de GpIIb/IIIa (fixe le fibrinogène et recrute d'autres plaquettes activées).
  - Changements sécrétoires : exocytose des corps denses (1re dégranulation) → sérotonine (vasoconstriction), ADP/thrombine (agrégation plaquettaire) ; production de TxA2 (agrégation).
- **(c) Agrégation** (induite par l'activation) : fixation en cascade des plaquettes activées via le complexe fibrinogène/GpIIb-IIIa = « clou plaquettaire lâche ».
  - Exocytose des granules α (2e dégranulation), activation de la synthèse de TxA2, expression de GpIIb/IIIa ; ADP, TxA2 et thrombine se lient à des récepteurs couplés à la protéine Gq → activation de la phospholipase C → IP3 → ↑ Ca2+ intracellulaire.
  - Effets de l'agrégation : exocytose des granules (Fp3, facteur V et VIII, fibrinogène) → active le mécanisme intrinsèque de coagulation ; génère une couche de fibrine à la surface des plaquettes agrégées → limite et renforce le clou plaquettaire ; expulsion du contenu lysosomal → métamorphose visqueuse.
- **(d) Métamorphose visqueuse** : le clou plaquettaire blanc devient un ensemble de plaquettes fusionnées d'aspect homogène ; digestion irréversible de la membrane plaquettaire par les enzymes lysosomales ; libération de tous les constituants thrombocytaires ; rôle dans l'orientation des filaments de fibrine et la rétraction du caillot (via la production de thrombosthénine).

### 2.2 Hémostase secondaire (coagulation)
- Arrêt permanent du saignement, succession de réactions enzymatiques en cascade impliquant des facteurs plasmatiques (I à XIII), tissulaires (facteur III) et thrombocytaires (PL3).

**Classification des facteurs plasmatiques de coagulation** :
| N° | Facteur |
| --- | --- |
| I | Fibrinogène |
| II | Prothrombine |
| III | Thromboplastine tissulaire |
| IV | Ca2+ |
| V | Proaccélérine |
| VII | Proconvertine |
| VIII | Facteur antihémophilique A |
| IX | Facteur antihémophilique B |
| X | Facteur Stuart-Prower |
| XI | Facteur antihémophilique C |
| XII | Facteur Hageman |
| XIII | Facteur stabilisant de fibrine |

- **(a) Facteurs de la phase de contact** (XII, XI) : activés par contact direct avec les structures sous-endothéliales (collagène), activent le mécanisme intrinsèque, ne nécessitent PAS de Ca2+ pour leur activation.
- **(b) Facteurs vitamine K-dépendants** (II, VII, IX, X) : synthétisés exclusivement par le foie en présence de vitamine K, impliqués dans le mécanisme extrinsèque, peuvent lier le Ca2+ grâce à la carboxylation de l'acide glutamique (permise par la vitamine K), évalués par le temps de Quick (TQ = 12-15 sec).
- **(c) Facteurs thrombine-sensibles** (I, V, VIII, XIII) : synthétisés par le foie et les plaquettes, facteurs instables consommés lors du mécanisme intrinsèque par action prolongée de la thrombine, évalués par le temps de céphaline activée (TCA = 20-50 sec).

**Étapes de la coagulation** :
1. **Formation de la prothrombinase (activateur de prothrombine)**
   - **Mécanisme intrinsèque (intravasculaire)** : déclenché par l'exposition du collagène sous-endothélial → activation du facteur XII (XIIa) ; cascade XIIa → XIa → IXa (+ Ca2+ + VIIIa) → active le facteur X (Xa) ; le complexe prothrombinase = Xa + Va + Ca2+ + PL3. Déclenché par la libération de PL3 et l'activation des facteurs de contact (XII, XI) en l'absence de Ca2+ ; évalué par le temps de Howell (TH = 60-120 sec).
   - **Mécanisme extrinsèque (extravasculaire)** : déclenché par des lésions périvasculaires, libération de thromboplastine tissulaire (facteur III, TF) et activation du facteur VII (VIIa) en présence de Ca2+ ; complexe prothrombinase = Xa + Va + Ca2+ + PL3 (via VIIa + III + Ca2+ activant le facteur X). Ne nécessite pas la présence de plaquettes (PL3) ; exploré par le temps de Quick (TQ = 15 sec). Le TFPI (inhibiteur du facteur tissulaire) lie le complexe III/VIIa/Xa et empêche la formation de thrombine, en synergie avec l'antithrombine III et l'α2-macroglobuline.
2. **Formation de la thrombine** : la prothrombinase (Xa + Va + Ca2+ + PL3, développée à la surface du clou plaquettaire) transforme la prothrombine en thrombine ; le facteur Xa est le facteur enzymatique principal, Va/Ca2+/PL3 sont des cofacteurs enzymatiques accélérant la réaction.
   - La thrombine est une enzyme protéolytique qui dégrade le fibrinogène en fibrine, possède une action auto-catalytique, active les facteurs thrombine-sensibles (I, V, VIII, XIII), et active les plaquettes pour libérer le PL3.
3. **Formation de la fibrine** : phase protéolytique (thrombine + Ca2+ transforme le fibrinogène en monomères de fibrine) → phase de polymérisation (polymérisation spontanée des monomères par liaisons hydrogène, caillot de fibrine chimiquement/mécaniquement instable) → phase de stabilisation (le facteur XIIIa remplace les liaisons hydrogène par des liaisons covalentes) → caillot de fibrine chimiquement stable, mécaniquement instable, composé de plasma, GR et plaquettes, adhérent à la paroi vasculaire.
4. **Rétraction du caillot** : raccourcissement de la longueur des filaments de fibrine, 20-60 min après le début de la coagulation, nécessite des plaquettes intactes et une quantité normale de fibrinogène (2-4 g/L) ; la contraction de la thrombosthénine induit la rétraction des prolongements plaquettaires ; les plaquettes intactes situées dans le réseau de fibrine génèrent des prolongements qui se lient aux filaments de fibrine → réduction de la longueur des filaments de fibrine, expulsion des cellules sanguines, destruction de toutes les plaquettes → caillot chimiquement et mécaniquement stable.
   - Le caillot de fibrine est ensuite envahi par les fibroblastes, qui assurent avec les facteurs de croissance plaquettaires la réparation tissulaire (formation de tissu conjonctif fibreux en 1-2 semaines) ; la lyse du caillot (fibrinolyse) rend le vaisseau perméable après 2-3 jours.

**Principales causes de trouble de l'hémostase physiologique** :
- Troubles du temps vasculaire de l'hémostase primaire : avitaminose C.
- Troubles du temps plaquettaire de l'hémostase primaire : thrombopénie.
- Troubles du mécanisme intrinsèque de coagulation : hémophilie (déficit en facteur VIII, IX ou XI), traitement par héparine.
- Troubles du mécanisme extrinsèque de coagulation : insuffisance hépatique, avitaminose K, traitement anti-vitamine K.

## 3. Fibrinolyse
- **Définition** : protéolyse programmée du caillot de fibrine sous l'action du système fibrinolytique.
- **Composants** :
  1. **Plasminogène** : précurseur inactif circulant dans le plasma, synthétisé par le foie, activé à la surface du caillot de fibrine.
  2. **Plasmine** : enzyme protéolytique dégradant le réseau de fibrine et certains facteurs de coagulation (II, V, VIII, XII).
  3. **Activateur tissulaire du plasminogène (t-PA)** : libéré par les cellules endothéliales et les tissus lésés.
  4. **Urokinase (u-PA)** : libérée par les cellules épithéliales du tubule excréteur rénal, assure la lyse des caillots de fibrine dans les tubules rénaux.
  5. **Facteurs exogènes** : streptokinase et staphylokinase (empêchent la formation d'une barrière contre la migration bactérienne).
  6. **Facteur XIIa et kallicréine** : couplent le mécanisme intrinsèque de coagulation à la fibrinolyse.
  7. **PAI-1** (inhibiteur de l'activateur du plasminogène) : sécrété par les cellules endothéliales, inhibe la libération de t-PA et u-PA.
  8. **α2-antiplasmine** : sécrétée par le foie, inactive la plasmine.
- **Étapes de la fibrinolyse** : (I) activation du plasminogène en plasmine ; (II) dégradation de la fibrine en fragments (produits de dégradation de la fibrine, PDF : X, Y, D, E — métabolisme hépatique, élimination urinaire) ; (III) inactivation de la plasmine par l'α2-antiplasmine.

## Points à retenir
- Les plaquettes assurent l'hémostase primaire (clou plaquettaire) ET participent à l'hémostase secondaire (PL3, facteurs V/VIII, facteur XIII) et à la régulation de la fibrinolyse.
- Hémostase primaire : temps vasculaire (vasoconstriction) puis temps plaquettaire (adhérence → activation → agrégation → métamorphose visqueuse).
- Coagulation : mécanisme intrinsèque (contact, TCA) et extrinsèque (thromboplastine tissulaire, TQ), convergeant vers une voie commune (prothrombine → thrombine → fibrine → rétraction du caillot).
- Facteurs vitamine K-dépendants : II, VII, IX, X (synthèse hépatique) ; hémophilie = déficit en facteur VIII, IX ou XI (voie intrinsèque).
- La fibrinolyse (plasminogène → plasmine, sous l'action du t-PA/u-PA) dégrade le caillot de fibrine et rend le vaisseau perméable en 2-3 jours.`;

export const HEMOSTASIS_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Hémostase physiologique",
    source_label: "Physiologie — UMFT Timisoara, Lecture (Physiological Hemostasis)",
    content_fr: HEMOSTASIS_COURSE,
  },
  qcm: [
    single("Quelle est la taille des plaquettes (thrombocytes) ?", "B", "Les plaquettes sont les plus petits éléments figurés du sang, mesurant 2-4 µm.", ["10-15 µm", "2-4 µm", "20-30 µm", "50-100 µm"]),
    single("Quelles sont les deux propriétés fondamentales des plaquettes ?", "A", "L'adhérence aux surfaces rugueuses et l'agrégation sont les deux propriétés fondamentales des plaquettes.", ["Adhérence et agrégation", "Phagocytose et diapédèse", "Chimiotactisme et margination", "Endomitose et polyploïdie"]),
    single("Quelle est la valeur normale de la numération plaquettaire ?", "C", "La numération plaquettaire normale est de 150 000 à 350 000/mm³.", ["10 000-50 000/mm³", "50 000-100 000/mm³", "150 000-350 000/mm³", "500 000-1 000 000/mm³"]),
    single("Quel ligand se fixe sur la glycoprotéine GpIIb/IIIa des plaquettes ?", "B", "La GpIIb/IIIa a pour ligand le fibrinogène, rôle central dans l'agrégation plaquettaire.", ["Le facteur von Willebrand", "Le fibrinogène", "Le collagène sous-endothélial", "La thrombine"]),
    single("Quel ligand se fixe sur la glycoprotéine GpIb des plaquettes ?", "A", "La GpIb a pour ligand le facteur von Willebrand (VIII-vWF), permettant l'adhérence à l'endothélium lésé.", ["Le facteur von Willebrand (VIII-vWF)", "Le fibrinogène", "La thrombine", "L'ADP"]),
    single("Quels facteurs sont libérés par les corps denses des plaquettes ?", "C", "Les corps denses libèrent des facteurs pro-agrégants (ADP, thrombine) et vasoconstricteurs (sérotonine).", ["Fibrinogène et facteur VIII", "Enzymes lysosomales uniquement", "ADP, thrombine et sérotonine", "PDGF et VEGF uniquement"]),
    single("Quelle est la durée normale du temps de saignement (hémostase primaire) ?", "B", "Le temps de saignement normal est de 1,5 à 4 minutes.", ["Moins de 30 secondes", "1,5 à 4 minutes", "10 à 15 minutes", "30 à 60 minutes"]),
    single("Quel effet a un endothélium vasculaire normal (non lésé) sur l'hémostase ?", "A", "L'endothélium normal sécrète NO et PGI2, est non adhérent, vasodilatateur, anticoagulant et pro-fibrinolytique.", ["Anticoagulant et vasodilatateur (non adhérent)", "Procoagulant et vasoconstricteur (adhérent)", "Il n'a aucun effet sur l'hémostase", "Il stimule uniquement la thrombopoïèse"]),
    multi("Quels facteurs sont sécrétés en grande quantité par un endothélium lésé, favorisant l'hémostase ?", ["A", "B"], "Un endothélium lésé sécrète l'endothéline-1 (ET-1, vasoconstricteur) et le thromboxane A2 (TxA2, pro-agrégant) en grande quantité.", ["Endothéline-1 (ET-1)", "Thromboxane A2 (TxA2)", "Oxyde nitrique (NO)", "Prostacycline (PGI2)"]),
    single("Quelles sont, dans l'ordre, les 4 étapes du temps plaquettaire ?", "D", "Le temps plaquettaire se déroule en 4 étapes : adhérence, activation, agrégation, métamorphose visqueuse.", ["Activation, adhérence, métamorphose visqueuse, agrégation", "Agrégation, activation, adhérence, métamorphose visqueuse", "Métamorphose visqueuse, agrégation, activation, adhérence", "Adhérence, activation, agrégation, métamorphose visqueuse"]),
    single("Par quelles glycoprotéines l'adhérence ferme des plaquettes au vaisseau est-elle assurée ?", "B", "L'adhérence ferme (mécanisme chimico-enzymatique) est assurée par les glycoprotéines membranaires GpIa et GpIb.", ["GpIIb/IIIa uniquement", "GpIa et GpIb", "Facteur XIII uniquement", "Thrombosthénine"]),
    single("Combien de facteurs plasmatiques de coagulation sont classiquement numérotés ?", "C", "Les facteurs plasmatiques de coagulation sont numérotés de I à XIII.", ["De I à VII", "De I à X", "De I à XIII", "De I à XX"]),
    single("Quels facteurs de coagulation sont synthétisés exclusivement par le foie en présence de vitamine K ?", "A", "Les facteurs II, VII, IX et X sont vitamine K-dépendants, synthétisés par le foie.", ["Facteurs II, VII, IX, X", "Facteurs I, V, VIII, XIII", "Facteurs XII et XI uniquement", "Facteur III (thromboplastine tissulaire) uniquement"]),
    single("Par quel test explore-t-on le mécanisme extrinsèque de la coagulation ?", "B", "Le temps de Quick (TQ, 12-15 sec) explore le mécanisme extrinsèque de la coagulation.", ["Le temps de céphaline activée (TCA)", "Le temps de Quick (TQ)", "Le temps de saignement (TS)", "Le temps de Howell (TH)"]),
    single("Par quel test explore-t-on le mécanisme intrinsèque de la coagulation ?", "A", "Le temps de céphaline activée (TCA, 20-50 sec) explore le mécanisme intrinsèque de la coagulation.", ["Le temps de céphaline activée (TCA)", "Le temps de Quick (TQ)", "Le temps de saignement (TS)", "Le temps de rétraction du caillot"]),
    single("Quel facteur déclenche le mécanisme extrinsèque de la coagulation ?", "C", "Le mécanisme extrinsèque est déclenché par la libération de thromboplastine tissulaire (facteur III) lors de lésions périvasculaires.", ["L'exposition du collagène sous-endothélial", "La libération de PL3 par les plaquettes uniquement", "La thromboplastine tissulaire (facteur III)", "Le facteur XII activé par contact"]),
    single("Le mécanisme extrinsèque de la coagulation nécessite-t-il la présence des plaquettes (PL3) ?", "B", "Le mécanisme extrinsèque ne nécessite PAS la présence de plaquettes (PL3), contrairement au mécanisme intrinsèque.", ["Oui, il en est totalement dépendant", "Non, il n'en nécessite pas", "Seulement en cas d'hémorragie sévère", "Seulement chez l'enfant"]),
    single("Quel facteur enzymatique principal transforme la prothrombine en thrombine ?", "A", "Le facteur Xa est le facteur enzymatique principal de la prothrombinase, transformant la prothrombine en thrombine.", ["Le facteur Xa", "Le facteur VIIIa", "Le facteur XIIIa", "Le facteur XIIa"]),
    single("Quelle enzyme dégrade le fibrinogène en fibrine ?", "C", "La thrombine, enzyme protéolytique à action auto-catalytique, dégrade le fibrinogène en fibrine.", ["La plasmine", "Le facteur Xa", "La thrombine", "L'urokinase"]),
    single("Quel facteur stabilise le caillot de fibrine en remplaçant les liaisons hydrogène par des liaisons covalentes ?", "B", "Le facteur XIIIa (facteur stabilisant de fibrine) remplace les liaisons hydrogène par des liaisons covalentes entre monomères de fibrine.", ["Le facteur Va", "Le facteur XIIIa", "La thrombosthénine", "Le facteur von Willebrand"]),
    single("Quelles sont les deux conditions nécessaires à la rétraction normale du caillot ?", "A", "La rétraction du caillot nécessite des plaquettes intactes et une quantité normale de fibrinogène (2-4 g/L).", ["Plaquettes intactes et fibrinogène normal (2-4 g/L)", "Présence exclusive de facteur XII", "Absence totale de calcium", "Présence d'héparine"]),
    single("À quel déficit en facteur de coagulation l'hémophilie est-elle liée ?", "D", "L'hémophilie résulte d'un déficit en facteur VIII, IX ou XI, tous impliqués dans le mécanisme intrinsèque de coagulation.", ["Facteur II, VII ou X", "Facteur I ou XIII uniquement", "Facteur III (thromboplastine tissulaire)", "Facteur VIII, IX ou XI"]),
    single("Quelle carence vitaminique perturbe le mécanisme extrinsèque de la coagulation ?", "B", "L'avitaminose K perturbe la synthèse hépatique des facteurs II, VII, IX, X, altérant le mécanisme extrinsèque.", ["L'avitaminose C", "L'avitaminose K", "La carence en vitamine B12", "La carence en fer"]),
    single("Quelle enzyme dégrade le réseau de fibrine lors de la fibrinolyse ?", "A", "La plasmine, activée à partir du plasminogène, dégrade le réseau de fibrine (et certains facteurs de coagulation).", ["La plasmine", "La thrombine", "Le facteur Xa", "La thrombosthénine"]),
    single("Quel activateur du plasminogène est libéré par les cellules endothéliales ?", "C", "L'activateur tissulaire du plasminogène (t-PA) est libéré par les cellules endothéliales et les tissus lésés.", ["L'urokinase (u-PA)", "La streptokinase", "L'activateur tissulaire du plasminogène (t-PA)", "Le PAI-1"]),
    single("Quel est le rôle du PAI-1 dans la fibrinolyse ?", "B", "Le PAI-1 (inhibiteur de l'activateur du plasminogène), sécrété par l'endothélium, inhibe la libération de t-PA et u-PA.", ["Il active directement le plasminogène", "Il inhibe la libération de t-PA et u-PA", "Il dégrade directement la fibrine", "Il stabilise le caillot de fibrine"]),
    single("Combien de temps après le début de la coagulation le vaisseau redevient-il perméable grâce à la fibrinolyse ?", "C", "La lyse du caillot (fibrinolyse) rend le vaisseau perméable après 2-3 jours.", ["Quelques minutes", "Quelques heures", "2-3 jours", "2-3 semaines"]),
  ],
  exam: { titre_fr: "Examen chronométré — Hémostase physiologique", duration_seconds: 2_160 },
};

export const HEMOSTASIS_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la taille des plaquettes ?", question_en: "What is the size of platelets?", answer_fr: "2 à 4 µm.", answer_en: "2 to 4 µm." },
  { question_fr: "Quelles sont les deux propriétés fondamentales des plaquettes ?", question_en: "What are the two fundamental properties of platelets?", answer_fr: "L'adhérence aux surfaces rugueuses et l'agrégation.", answer_en: "Adherence to rough surfaces and aggregation." },
  { question_fr: "Quelle est la durée de vie des plaquettes en circulation ?", question_en: "What is the platelet lifespan in circulation?", answer_fr: "8 à 10 jours (stade sanguin).", answer_en: "8 to 10 days (blood stage)." },
  { question_fr: "Quelle proportion des plaquettes est stockée dans la rate ?", question_en: "What proportion of platelets is stored in the spleen?", answer_fr: "1/3 (2/3 en circulation générale).", answer_en: "1/3 (2/3 in general circulation)." },
  { question_fr: "Quelle est la numération plaquettaire normale ?", question_en: "What is the normal platelet count?", answer_fr: "150 000 à 350 000/mm³.", answer_en: "150,000 to 350,000/mm3." },
  { question_fr: "Quel est le ligand de la glycoprotéine GpIIb/IIIa ?", question_en: "What is the ligand of glycoprotein GpIIb/IIIa?", answer_fr: "Le fibrinogène.", answer_en: "Fibrinogen." },
  { question_fr: "Quel est le ligand de la glycoprotéine GpIb ?", question_en: "What is the ligand of glycoprotein GpIb?", answer_fr: "Le facteur von Willebrand (VIII-vWF).", answer_en: "Von Willebrand factor (VIII-vWF)." },
  { question_fr: "Quels facteurs vasoconstricteurs et pro-agrégants libèrent les corps denses ?", question_en: "What vasoconstrictor and pro-aggregant factors do dense bodies release?", answer_fr: "Sérotonine (vasoconstricteur), ADP et thrombine (pro-agrégants).", answer_en: "Serotonin (vasoconstrictor), ADP and thrombin (pro-aggregants)." },
  { question_fr: "Que contiennent les granules alpha des plaquettes ?", question_en: "What do platelet alpha granules contain?", answer_fr: "Fibrinogène, VIII-vWF, facteurs de coagulation (V, VIII, XIII), facteurs de croissance (PDGF, VEGF...).", answer_en: "Fibrinogen, VIII-vWF, coagulation factors (V, VIII, XIII), growth factors (PDGF, VEGF...)." },
  { question_fr: "Quelle est la durée normale du temps de saignement ?", question_en: "What is the normal bleeding time?", answer_fr: "1,5 à 4 minutes.", answer_en: "1.5 to 4 minutes." },
  { question_fr: "Que sécrète un endothélium vasculaire normal ?", question_en: "What does a normal vascular endothelium secrete?", answer_fr: "NO et PGI2 en grande quantité (vasodilatateur, anticoagulant, pro-fibrinolytique).", answer_en: "NO and PGI2 in large amounts (vasodilator, anticoagulant, pro-fibrinolytic)." },
  { question_fr: "Que sécrète un endothélium lésé ?", question_en: "What does an injured endothelium secrete?", answer_fr: "ET-1 et TxA2 en grande quantité (vasoconstricteur, procoagulant).", answer_en: "ET-1 and TxA2 in large amounts (vasoconstrictor, procoagulant)." },
  { question_fr: "Quelles sont les 3 mécanismes du temps vasculaire de l'hémostase ?", question_en: "What are the 3 mechanisms of the vascular time of hemostasis?", answer_fr: "Mécanisme humoral, réflexe nerveux, mécanisme myogénique.", answer_en: "Humoral mechanism, nervous reflex, myogenic mechanism." },
  { question_fr: "Quelles sont les 4 étapes du temps plaquettaire ?", question_en: "What are the 4 stages of platelet time?", answer_fr: "Adhérence, activation, agrégation, métamorphose visqueuse.", answer_en: "Adherence, activation, aggregation, viscous metamorphosis." },
  { question_fr: "Quelles glycoprotéines assurent l'adhérence ferme des plaquettes ?", question_en: "Which glycoproteins ensure firm platelet adherence?", answer_fr: "GpIa et GpIb.", answer_en: "GpIa and GpIb." },
  { question_fr: "Que produit la 1re dégranulation plaquettaire (activation) ?", question_en: "What does the first platelet degranulation (activation) release?", answer_fr: "Sérotonine, ADP et thrombine (corps denses).", answer_en: "Serotonin, ADP, and thrombin (dense bodies)." },
  { question_fr: "Quel complexe assure l'agrégation plaquettaire en cascade ?", question_en: "Which complex ensures cascade platelet aggregation?", answer_fr: "Le complexe fibrinogène/GpIIb-IIIa.", answer_en: "The fibrinogen/GpIIb-IIIa complex." },
  { question_fr: "Combien de facteurs plasmatiques de coagulation sont numérotés ?", question_en: "How many plasma coagulation factors are numbered?", answer_fr: "13 (facteurs I à XIII).", answer_en: "13 (factors I to XIII)." },
  { question_fr: "Quel facteur correspond au fibrinogène ?", question_en: "Which factor corresponds to fibrinogen?", answer_fr: "Le facteur I.", answer_en: "Factor I." },
  { question_fr: "Quel facteur correspond à la prothrombine ?", question_en: "Which factor corresponds to prothrombin?", answer_fr: "Le facteur II.", answer_en: "Factor II." },
  { question_fr: "Quel facteur correspond à la thromboplastine tissulaire ?", question_en: "Which factor corresponds to tissue thromboplastin?", answer_fr: "Le facteur III.", answer_en: "Factor III." },
  { question_fr: "Quels facteurs sont vitamine K-dépendants ?", question_en: "Which factors are vitamin K-dependent?", answer_fr: "Les facteurs II, VII, IX et X.", answer_en: "Factors II, VII, IX, and X." },
  { question_fr: "Où sont synthétisés les facteurs vitamine K-dépendants ?", question_en: "Where are vitamin K-dependent factors synthesized?", answer_fr: "Exclusivement dans le foie.", answer_en: "Exclusively in the liver." },
  { question_fr: "Quel test explore le mécanisme extrinsèque de la coagulation ?", question_en: "Which test explores the extrinsic coagulation mechanism?", answer_fr: "Le temps de Quick (TQ), normal 12-15 sec.", answer_en: "Prothrombin time (PT), normal 12-15 sec." },
  { question_fr: "Quel test explore le mécanisme intrinsèque de la coagulation ?", question_en: "Which test explores the intrinsic coagulation mechanism?", answer_fr: "Le temps de céphaline activée (TCA), normal 20-50 sec.", answer_en: "Activated partial thromboplastin time (APTT), normal 20-50 sec." },
  { question_fr: "Qu'est-ce qui déclenche le mécanisme intrinsèque de la coagulation ?", question_en: "What triggers the intrinsic coagulation mechanism?", answer_fr: "L'exposition du collagène sous-endothélial (activation du facteur XII).", answer_en: "Exposure of subendothelial collagen (activation of factor XII)." },
  { question_fr: "Qu'est-ce qui déclenche le mécanisme extrinsèque de la coagulation ?", question_en: "What triggers the extrinsic coagulation mechanism?", answer_fr: "La libération de thromboplastine tissulaire (facteur III) lors de lésions périvasculaires.", answer_en: "Release of tissue thromboplastin (factor III) upon perivascular injury." },
  { question_fr: "Le mécanisme extrinsèque nécessite-t-il les plaquettes (PL3) ?", question_en: "Does the extrinsic mechanism require platelets (PL3)?", answer_fr: "Non.", answer_en: "No." },
  { question_fr: "Quel est le facteur enzymatique principal de la prothrombinase ?", question_en: "What is the main enzymatic factor of prothrombinase?", answer_fr: "Le facteur Xa.", answer_en: "Factor Xa." },
  { question_fr: "Quelle enzyme transforme le fibrinogène en fibrine ?", question_en: "Which enzyme converts fibrinogen to fibrin?", answer_fr: "La thrombine.", answer_en: "Thrombin." },
  { question_fr: "Quelles sont les 3 phases de la formation de la fibrine ?", question_en: "What are the 3 phases of fibrin formation?", answer_fr: "Protéolytique, polymérisation, stabilisation.", answer_en: "Proteolytic, polymerization, stabilization." },
  { question_fr: "Quel facteur stabilise le caillot de fibrine par liaisons covalentes ?", question_en: "Which factor stabilizes the fibrin clot via covalent bonds?", answer_fr: "Le facteur XIIIa.", answer_en: "Factor XIIIa." },
  { question_fr: "Quelles conditions sont nécessaires à la rétraction du caillot ?", question_en: "What conditions are required for clot retraction?", answer_fr: "Plaquettes intactes et fibrinogène normal (2-4 g/L).", answer_en: "Intact platelets and normal fibrinogen (2-4 g/L)." },
  { question_fr: "Combien de temps après le début de la coagulation la rétraction du caillot se produit-elle ?", question_en: "How long after coagulation begins does clot retraction occur?", answer_fr: "20 à 60 minutes.", answer_en: "20 to 60 minutes." },
  { question_fr: "Quel déficit en facteur de coagulation caractérise l'hémophilie ?", question_en: "Which coagulation factor deficiency characterizes hemophilia?", answer_fr: "Déficit en facteur VIII, IX ou XI.", answer_en: "Deficiency in factor VIII, IX, or XI." },
  { question_fr: "Quelle carence vitaminique altère le mécanisme extrinsèque de la coagulation ?", question_en: "Which vitamin deficiency impairs the extrinsic coagulation mechanism?", answer_fr: "L'avitaminose K.", answer_en: "Vitamin K deficiency." },
  { question_fr: "Quelle carence vitaminique altère le temps vasculaire de l'hémostase primaire ?", question_en: "Which vitamin deficiency impairs the vascular time of primary hemostasis?", answer_fr: "L'avitaminose C.", answer_en: "Vitamin C deficiency." },
  { question_fr: "Qu'est-ce que la fibrinolyse ?", question_en: "What is fibrinolysis?", answer_fr: "La protéolyse programmée du caillot de fibrine.", answer_en: "The programmed proteolysis of the fibrin clot." },
  { question_fr: "Quelle enzyme dégrade le réseau de fibrine ?", question_en: "Which enzyme degrades the fibrin network?", answer_fr: "La plasmine.", answer_en: "Plasmin." },
  { question_fr: "Quel est le précurseur inactif de la plasmine ?", question_en: "What is the inactive precursor of plasmin?", answer_fr: "Le plasminogène.", answer_en: "Plasminogen." },
  { question_fr: "Où est synthétisé le plasminogène ?", question_en: "Where is plasminogen synthesized?", answer_fr: "Dans le foie.", answer_en: "In the liver." },
  { question_fr: "Quel activateur du plasminogène est libéré par les cellules endothéliales ?", question_en: "Which plasminogen activator is released by endothelial cells?", answer_fr: "L'activateur tissulaire du plasminogène (t-PA).", answer_en: "Tissue plasminogen activator (t-PA)." },
  { question_fr: "Quel activateur du plasminogène est libéré par le tubule rénal ?", question_en: "Which plasminogen activator is released by the renal tubule?", answer_fr: "L'urokinase (u-PA).", answer_en: "Urokinase (u-PA)." },
  { question_fr: "Quel est le rôle du PAI-1 ?", question_en: "What is the role of PAI-1?", answer_fr: "Il inhibe la libération de t-PA et u-PA.", answer_en: "It inhibits the release of t-PA and u-PA." },
  { question_fr: "Quel est le rôle de l'alpha2-antiplasmine ?", question_en: "What is the role of alpha2-antiplasmin?", answer_fr: "Elle inactive la plasmine.", answer_en: "It inactivates plasmin." },
  { question_fr: "Combien de temps après la coagulation le vaisseau redevient-il perméable grâce à la fibrinolyse ?", question_en: "How long after coagulation does the vessel become permeable again due to fibrinolysis?", answer_fr: "2 à 3 jours.", answer_en: "2 to 3 days." },
  { question_fr: "Que signale un test de Rumpel-Leede positif ?", question_en: "What does a positive Rumpel-Leede test indicate?", answer_fr: "Une fragilité capillaire (ex. thrombopénie).", answer_en: "Capillary fragility (e.g., thrombocytopenia)." },
];
