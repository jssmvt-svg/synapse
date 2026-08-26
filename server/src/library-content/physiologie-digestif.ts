import type { LibraryCardSeed, LibraryLearningSeed } from "./biochimie-s1.js";
import { single, multi } from "./qcm-helpers.js";

const DIGESTIVE_SECRETION_COURSE = `# Lecture 12 — La fonction sécrétoire du tube digestif

## 1. Sécrétion salivaire

### 1.1 Glandes et mécanisme
- Trois paires de glandes salivaires principales : **parotides** (sécrétion séreuse, 25 % du volume), **sous-maxillaires** (mixtes, 70 % du volume — la principale source) et **sublinguales** (mixtes, 5 %), plus des glandes accessoires muqueuses.
- Sécrétion en deux étapes :
  - **Stade acinaire** : liquide extracellulaire isotonique (285-295 mOsm/L) contenant eau, amylase, électrolytes (Na⁺, Cl⁻, HCO₃⁻, K⁺) et mucus — c'est la **salive primaire**.
  - **Stade ductal** : les cellules canalaires sont imperméables à l'eau ; elles réabsorbent Na⁺ et Cl⁻ et sécrètent K⁺ et HCO₃⁻, produisant une **salive finale hypotonique**. La contraction des cellules myoépithéliales péricanalaires expulse la salive dans la bouche.

### 1.2 Composition et propriétés
- Eau 99,5 %, substances inorganiques 0,2 %, substances organiques 0,3 %.
- Osmolarité 50-100 mOsm/L (hypotonique) ; volume ≈ 1,5 L/jour (0,25 à 4 mL/min selon la stimulation) ; pH 6-7 (8 en sécrétion stimulée).
- Ions : Na⁺ ≈ 15 mEq/L (1/7 du plasma), Cl⁻ ≈ 10 mEq/L (1/10 du plasma), K⁺ ≈ 30 mEq/L (7× le plasma), HCO₃⁻ 50-70 mEq/L (2-3× le plasma, forme le **système tampon salivaire**).
- Substances inorganiques : thiocyanate de sodium (antimicrobien), calcium (sursaturation en phosphate de calcium — un pH acide dissout l'hydroxyapatite dentaire, favorisant les caries ; un pH alcalin précipite les sels de calcium, formant tartre et calculs salivaires), fluorure (formation de fluorapatite protectrice de l'émail).
- Substances organiques : **amylase salivaire** (hydrolyse les liaisons α-1,4, 75 % de l'amidon cuit → dextrines → maltose, pH optimal 7-8, active jusqu'à pH 4 dans l'estomac), **lipase linguale** (glandes de von Ebner, active dans l'estomac), mucus (formation du bol alimentaire, lubrification), IgA sécrétoire, lactoferrine, lysozyme (défense antibactérienne), facteurs de croissance (EGF, cicatrisation de la muqueuse buccale).

### 1.3 Rôles de la salive
1. **Digestif** : phase préparatoire (amylase : amidon → maltose).
2. **Protection mécanique** : nettoyage de la cavité buccale, lubrification (mastication, déglutition, parole).
3. **Équilibre microbien local** : maintien de la flore saprophyte, action antimicrobienne du lysozyme et du thiocyanate.
4. **Équilibre hydroélectrolytique** : en déshydratation, l'ADH augmente la réabsorption d'eau ⇒ sécheresse buccale ⇒ sensation de soif.
5. **Équilibre acido-basique local** : système tampon HCO₃⁻/H₂CO₃.
6. **Excrétion** : catabolites azotés (urée, acide urique, NH₃, créatinine), toxiques (Pb, Hg, alcool, nicotine), hormones stéroïdiennes, virus (poliomyélite, oreillons, rage), médicaments (tétracycline).
7. **Trophique** : intégrité de l'émail dentaire, réparation des tissus mous.

### 1.4 Régulation de la sécrétion salivaire
- Sécrétion continue avec variations quantitatives/qualitatives : basale minimale (mécanisme cholinergique) vs activée exclusivement réflexe.
- **Mécanisme cholinergique (parasympathique)** : noyau salivaire inférieur (bulbe) et supérieur (pont). Afférences des nerfs V, VII, IX, X depuis récepteurs gustatifs, tactiles et nociceptifs de la langue/bouche/pharynx. Efférences : VII → glandes sous-linguale + sous-maxillaire ; IX → parotide ; X → glandes mineures. Activation rapide, prolongée, volume élevé, sécrétion aqueuse riche en amylase.
- **Mécanisme adrénergique (sympathique)** : stress, émotions fortes → cortex + hypothalamus → corne latérale T1-T3 → ganglion cervical supérieur → glandes salivaires (vasoconstriction, contraction myoépithéliale, libération de mucus préformé). Activation tardive, volume réduit, sécrétion visqueuse riche en mucine.
- **Réflexe conditionné** : vue, odeur, audition, pensée de la nourriture → cortex → hypothalamus antérieur (aire de l'appétit) → mécanisme cholinergique.
- Influences intercentrales avec les centres de déglutition et du vomissement (bulbe).

## 2. Sécrétion gastrique

### 2.1 Glandes gastriques
- **Glandes oxyntiques** (fundus + corps, 80 % de la surface gastrique) : cellules à mucus du collet (mucus + HCO₃⁻ + eau), **cellules pariétales/oxyntiques** (HCl + facteur intrinsèque de Castle), **cellules principales/peptiques** (pepsinogène + lipase gastrique), **cellules ECL** (histamine), cellules souches.
- **Glandes pyloriques** (antre, 20 % de la surface) : cellules à mucus, **cellules G** (gastrine), **cellules D** (somatostatine).

### 2.2 Composition et propriétés du suc gastrique
- Sécrétion incolore, claire ou légèrement opacifiée par le mucus, hypotonique ; volume ≈ 1500 mL/jour ; pH 1,5-2,5.
- Eau 99 %, substances inorganiques 0,6 % (HCl 150-160 mEq/L, KCl 15 mEq/L, NaCl et HCO₃⁻), substances organiques 0,4 % (enzymes protéolytiques et lipolytiques, mucus, facteur intrinsèque, lysozyme, IgA sécrétoire).

### 2.3 Mécanisme de sécrétion du HCl
- Le CO₂ (métabolisme cellulaire ou diffusion sanguine) est hydraté par l'**anhydrase carbonique** : CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺.
- **Pôle basal** : HCO₃⁻ passe dans le sang via l'échangeur HCO₃⁻/Cl⁻ ; Cl⁻ entre dans la cellule ; K⁺ sort passivement ; la pompe Na⁺/K⁺ maintient l'électroneutralité.
- **Pôle apical** : H⁺ est activement sécrété dans la lumière via la **pompe H⁺/K⁺-ATPase** ; Cl⁻ sort passivement par des canaux chlore. H⁺ + Cl⁻ → HCl.
- Dans le sang, le passage de HCO₃⁻ (« marée alcaline ») explique l'alcalose métabolique physiologique lors de vomissements.
- Dans l'intestin, le HCl est neutralisé par le NaHCO₃ pancréatique/biliaire/intestinal (HCl + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O ; Na⁺ + Cl⁻ → NaCl), expliquant l'acidose métabolique physiologique en cas de diarrhée.

### 2.4 Rôles du HCl
- Active le pepsinogène en pepsine ; transforme les protéines alimentaires en acide-métaprotéines (facilite l'action de la pepsine) ; réduit le Fe³⁺ alimentaire en Fe²⁺ absorbable ; stimule l'évacuation gastrique ; induit la sécrétion de somatostatine ; rôle antimicrobien local.
- **Hypersécrétion** : ulcère gastro-duodénal. **Déficit (achylie gastrique)** : anémie de Biermer (déficit en vitamine B12 et acide folique).

### 2.5 Rôle digestif du suc gastrique
- **Pepsine** : digère 10-20 % des protéines alimentaires, hydrolyse les acide-métaprotéines en oligopeptides et acides aminés, favorise l'action des enzymes pancréatiques ; sécrétée sous forme inactive (pepsinogène), activée par le HCl et par autocatalyse ; pH optimal 1,5-2, inactivée à pH 5.
- **Présure (chymosine)** : présente seulement chez l'enfant, digère la caséinogène soluble du lait, pH optimal 4-5.
- **Gélatinase** : présente seulement chez l'enfant, casse la gélatine en peptides/acides aminés, activité 400× plus intense que la pepsine.

### 2.6 Facteur intrinsèque de Castle et mucus gastrique
- Le **facteur intrinsèque (FI)** est une glycoprotéine synthétisée par les cellules pariétales ; il forme un complexe FI/B12 qui protège la digestion de la vitamine B12, se lie à des récepteurs spécifiques de l'iléon (endocytose médiée par récepteur), puis se dissocie pour former le complexe B12/transcobalamine II.
- Le **mucus gastrique** (eau, HCO₃⁻, glycoprotéines, gel adhérent visqueux de 0,2-1 mm) forme une barrière physique et chimique (HCO₃⁻ neutralise le HCl localement, pH 7 à l'épithélium). L'infection à *Helicobacter pylori* détruit cette couche de mucus, favorisant les ulcères gastro-duodénaux.

### 2.7 Régulation de la sécrétion gastrique
- **Sécrétion basale** : 5-10 % du maximum, riche en mucine, mécanisme cholinergique, activée par le stress.
- **Sécrétion stimulée**, en trois mécanismes (nerveux, endocrine, paracrine) et trois phases :
  - **Phase céphalique (40 %)** : réflexe inconditionné (goût, tact, hypoglycémie) et conditionné (vue, odeur, états psychiques) → cortex/hypothalamus antérieur → vague (ACh → pepsinogène/HCl ; ACh → cellules G → gastrine → HCl).
  - **Phase gastrique (50 %)** : distension gastrique et produits de digestion protéique stimulent, pH acide inhibe. Vago-vagal (ACh), gastrine, histamine (via ECL).
  - **Phase intestinale (10 %)** : distension duodénale stimule (pH 3 → gastrine) ; pH acide et produits de digestion lipidique inhibent (sécrétine → HCl↓, somatostatine → gastrine↓ ; réflexe entéro-gastrique inhibiteur par voie noradrénergique).
- **Mécanisme nerveux** : ACh (récepteurs M3, Gq/PLC/IP3-Ca²⁺) stimule pepsinogène/HCl/mucus directement, et gastrine/histamine indirectement ; inhibé par l'atropine. GRP (bombésine) stimule la gastrine.
- **Mécanisme endocrine** : gastrine (cellules G, stimulée par le vague et les produits de digestion protéique) agit sur les cellules pariétales (direct, récepteur CCK-B) et via l'histamine (indirect) ; effets : sécrétion de FI, prolifération de la muqueuse gastrique, motilité gastro-intestinale. Le **syndrome de Zollinger-Ellison** (tumeur pancréatique sécrétant de la gastrine) provoque des ulcères gastro-duodénaux résistants au traitement.
- **Mécanisme paracrine** : histamine (cellules ECL, récepteurs H2, Gs/AMPc, bloquée par la cimétidine) ; somatostatine (inhibe directement via Gi/AMPc et indirectement via la gastrine).
- **Facteurs inhibiteurs** : sécrétine (stimule HCO₃⁻/mucus, inhibe HCl), somatostatine, PGE2 (inhibe la pompe H⁺/K⁺, « antagoniste naturel de l'histamine »). Les AINS inhibent la PGE2 et induisent une hyperacidité gastrique.

## 3. Sécrétion pancréatique exocrine

### 3.1 Organisation
- **Pancréas exocrine** : acini (sécrétion riche en enzymes) et canaux (sécrétion hydroélectrolytique riche en HCO₃⁻).
- **Pancréas endocrine** : cellules α (glucagon), β (insuline), δ (somatostatine).

### 3.2 Mécanisme de sécrétion
- **Sécrétion acinaire** (isotonique) : enzymes stockées en granules de zymogène au pôle apical, éliminées par exocytose ; eau et électrolytes (Na⁺, K⁺, HCO₃⁻, Cl⁻).
- **Sécrétion canalaire** (isotonique) : anhydrase carbonique produit HCO₃⁻ + H⁺ ; HCO₃⁻ sécrété au pôle apical en échange de Cl⁻ ; Cl⁻ sort par des canaux dépendants de l'AMPc ; H⁺ sort au pôle basal via l'échangeur Na⁺/H⁺. La sécrétine stimule l'activité de l'échangeur HCO₃⁻/Cl⁻. Un défaut des canaux Cl⁻ (dépendant de l'AMPc) provoque la précipitation des enzymes — **mucoviscidose (fibrose kystique)**.
- Suc pancréatique clair, visqueux, volume 1500 mL/jour, pH 8, toujours isotonique quel que soit le débit.

### 3.3 Enzymes pancréatiques
- **Protéolytiques** (sécrétées sous forme inactive) : trypsinogène → **trypsine**, chymotrypsinogène → chymotrypsine, procarboxypeptidase → carboxypeptidase, proélastase → élastase, pronucléase → nucléase. L'entérokinase (bordure en brosse) active le trypsinogène en trypsine dans l'intestin, qui déclenche une cascade d'activation. Un inhibiteur de trypsine (sécrété par la cellule acinaire) prévient l'activation prématurée. La **pancréatite aiguë** résulte de l'activation prématurée des enzymes protéolytiques dans les canaux pancréatiques (auto-digestion) — causes principales : calculs biliaires chez la femme, alcool chez l'homme.
- **Lipolytiques** : lipase pancréatique (la plus puissante, casse les triglycérides en 2 AGL + 1 monoglycéride, nécessite l'émulsification préalable par les sels biliaires), cholestérol-estérase (cholestérol estérifié → cholestérol libre + AGL), phospholipase A2 (lécithine → lysolécithine + AGL).
- **Glycolytique** : amylase pancréatique (la plus puissante, casse les liaisons α-1,4 et α-1,6, amidon/glycogène → dextrines, maltose, maltotriose).

### 3.4 Régulation de la sécrétion pancréatique
- **Mécanisme endocrine (principal)** : CCK + gastrine + GRP activent la sécrétion acinaire (riche en enzymes) ; somatostatine inhibe. Sécrétine + VIP (libérés par la muqueuse duodénale à pH 4,5-5) activent la sécrétion canalaire (riche en eau/HCO₃⁻).
- **Mécanisme nerveux (secondaire)** : vague parasympathique active la sécrétion acinaire (ACh, récepteurs M3) et augmente le flux par vasodilatation ; sympathique inhibe par vasoconstriction.
- **Phases** : céphalique (20 %, mécanisme nerveux exclusif, ACh) ; gastrique (10 %, réflexe vago-pancréatique, ACh + gastrine) ; **intestinale (70 %, principale)** : CCK (sécrétion acinaire riche en enzymes) et sécrétine à pH < 4,5 (sécrétion canalaire riche en HCO₃⁻).

## 4. Sécrétion biliaire

### 4.1 Formation et trajet
- Sécrétée par l'hépatocyte → canalicules biliaires → canaux biliaires → canal hépatique = **bile hépatique** (sécrétion continue, solution aqueuse de NaHCO₃, faible en composés organiques).
- Stockée et concentrée (5-20×) dans la **vésicule biliaire** = **bile vésiculaire**, libérée par le canal cystique → cholédoque.

### 4.2 Mécanisme de la cholérèse
- **Fraction cholalo-dépendante** : stimulée par les sels biliaires, riche en substances organiques (sels biliaires 50 %, pigments biliaires 2 %, cholestérol 4 %, acides gras 4 %, phospholipides/lécithine 40 %).
- **Fraction cholalo-indépendante** : eau + HCO₃⁻.
- Trois phases : **hépatique** (sécrétion canaliculaire entre hépatocytes) → **canalaire** (sécrétion de bile canalaire, eau + HCO₃⁻, double le volume, stimulée par la sécrétine) → **vésiculaire** (absorption iso-osmotique d'eau et d'électrolytes sauf Ca²⁺, concentration 5-20×).

### 4.3 Composition et propriétés
- **Bile hépatique/canalaire** : ≈ 600-1000 mL/jour, jaune-or, fluide (97 % eau), pH 7,8-8,6.
- **Bile vésiculaire** : 20-60 mL/jour, jaune-brun, visqueuse, pH 7-7,4, concentrée en substances organiques (sels biliaires, cholestérol, acides gras, lécithine) ; [Na⁺] inchangé, [K⁺]/[Cl⁻]/[HCO₃⁻] diminuées ; l'excès de [Ca²⁺] + cholestérol favorise les **calculs biliaires**.

### 4.4 Cycle entéro-hépatique des sels biliaires
- **Acides biliaires primaires** (cholique, chénodésoxycholique) : synthétisés dans l'hépatocyte à partir du cholestérol sous l'action de la 7α-hydroxylase.
- **Acides biliaires secondaires** (désoxycholique, lithocholique) : formés dans l'intestin sous l'action de la flore bactérienne.
- Les acides biliaires forment des **sels biliaires** par conjugaison avec un acide aminé (glycine ou taurine) + un cation (Na⁺ ou K⁺).
- Cycle : 4-12 fois/jour, 3-3,5 g de sels biliaires par cycle (2-36 g/jour). 85 % des sels biliaires primaires sont réabsorbés par la veine porte (cycle entéro-hépatique) ; 15 % deviennent secondaires sous l'action de la flore bactérienne (déconjugaison, déshydroxylation, reconjugaison). 20-50 % des sels biliaires secondaires sont réabsorbés, le reste éliminé dans les fèces. Réabsorption principalement dans l'iléon distal (cotransport Na⁺/sels biliaires) et accessoirement dans le jéjunum proximal (diffusion facilitée).
- **Rôles des sels biliaires** : émulsification des lipides, formation de micelles, digestion et absorption des lipides.

### 4.5 Métabolisme des pigments biliaires
- **Étape préhépatique** : au niveau des macrophages (rate, foie, moelle osseuse), l'hème du fer est converti en biliverdine (hème-oxygénase), puis en bilirubine indirecte (non conjuguée), qui circule liée à l'albumine.
- **Étape hépatique** : la bilirubine indirecte est conjuguée à l'acide glucuronique (glucuronyl-transférase) → bilirubine directe (conjuguée), activement sécrétée dans les canalicules biliaires.
- **Étape posthépatique (intestin)** : la bilirubine directe est oxydée en urobilinogène par la flore bactérienne. Une partie est réabsorbée par la veine porte (réexcrétée dans la bile ou éliminée dans les urines sous forme d'urobiline) ; une partie est oxydée en stercobilinogène, éliminée dans les fèces sous forme de stercobiline. Urinalyse normale : urobilinogène positif, bilirubine directe et sels biliaires absents.

### 4.6 Rôles de la bile
- **Fonction digestive** : digestion et absorption des lipides (émulsification, solubilisation du cholestérol, formation de micelles) ; stimule sa propre sécrétion et le péristaltisme intestinal ; fonction bactériostatique ; neutralise l'acidité gastrique (rôle du HCO₃⁻) et assure le pH alcalin requis par les enzymes pancréatiques.
- **Fonction excrétrice** : produits endogènes (pigments biliaires, excès de cholestérol), xénobiotiques (toxiques, médicaments, sels de métaux lourds, colorants).

### 4.7 Régulation
- **Sels biliaires** : effet cholérétique principal.
- **Sécrétine** : stimule la fraction cholalo-dépendante (effet cholérétique) et la sécrétion canalaire d'eau/HCO₃⁻ (effet hydrocholérétique).
- **Mécanisme nerveux (secondaire)** : vague stimule le flux sanguin hépatique et la libération de sécrétine ; sympathique inhibe le flux sanguin hépatique.
- **Évacuation de la bile** : effet **cholécystokinétique** (contraction vésiculaire + relâchement du sphincter d'Oddi, inhibé par le sympathique), assuré principalement par la **CCK** et secondairement par le vague. L'effet **cholagogue** combine l'effet cholérétique et cholécystokinétique. La CCK est sécrétée par la muqueuse duodénale en présence de produits de digestion des lipides et des protéines.

## 5. Sécrétion intestinale

### 5.1 Glandes de Brünner et de Lieberkühn
- **Glandes de Brünner** : exclusivement dans la sous-muqueuse duodénale (entre pylore et ampoule de Vater) ; sécrétion riche en mucus et HCO₃⁻ ; stimulée par le contact alimentaire, l'irritation duodénale, le vague et la sécrétine ; inhibée par le sympathique ; protection mécanique et chimique de la muqueuse duodénale contre le suc gastrique.
- **Glandes de Lieberkühn** (crypts, base des replis de la muqueuse intestinale) : entérocytes (eau/électrolytes, réabsorbés avec les nutriments), cellules caliciformes (mucus alcalin, barrière locale), cellules de Paneth (défensines, lysozyme, barrière antibactérienne), cellules souches (renouvellement des entérocytes en 3-4 jours).

### 5.2 Sécrétion de l'intestin grêle
- Volume 1500 mL/jour (isotonique), eau, électrolytes (Na⁺, K⁺, HCO₃⁻), mucus, pH 7,5-8. Enzymes à la bordure en brosse : disaccharidases, peptidases (oligopeptides → tri/dipeptides/acides aminés), lipase (action faible, triglycérides → 2 AGL + 1 monoglycéride).
- **Disaccharidases** : saccharase (saccharose → glucose + fructose), maltase/glucoamylase (maltose → glucose), α-dextrinase/isomaltase (α-dextrines → glucose), lactase (lactose → glucose + galactose).
- Régulation : mécanisme nerveux (réflexes entériques locaux via le plexus de Meissner ; vague stimule Brünner sans effet sur Lieberkühn ; sympathique inhibe Brünner) et mécanisme endocrine (sécrétine).

### 5.3 Fonctions du côlon
- **Côlon proximal** : fonctions digestive et absorptive.
- **Côlon distal, sigmoïde, rectum** : fonction de stockage temporaire des matières fécales.
- Sécrétion de Lieberkühn (200 mL/jour, isotonique, alcaline, eau/HCO₃⁻/mucus, sans enzymes digestives), stimulée par réflexes entériques locaux et sécrétine.
- **Fonction de protection** : mucus (protection mécanique, anti-acide, antitoxique, antibactérienne, formation du bol fécal).
- **Fonction digestive (flore bactérienne)** : flore de fermentation aérobie (85 %, côlon proximal) dégrade les glucides en CO₂ et acides organiques ; flore de putréfaction anaérobie (15 %, côlon distal) dégrade les protéines en acides aminés toxiques (indole, scatole), NH₃ et H₂S (réabsorbés et neutralisés au niveau hépatique).
- **Fonction d'absorption et de sécrétion** : absorption d'eau (stimulée par l'ADH), de NaCl (stimulée par l'aldostérone), de substances produites par la flore (vitamines K, B12, B1, B2 + NH₃) ; sécrétion de produits du catabolisme (urée).

### 5.4 Rôles de la flore bactérienne intestinale
- Densité bactérienne croissante : salive 10⁶ germes/mL, estomac quasi stérile (pH acide), duodénum 10⁴ germes/mL, côlon 10¹¹ germes/mL.
- Les antibiotiques détruisent la flore de fermentation (lactobacilles Acidophilus et Bifidus), laissant la flore de putréfaction coloniser le côlon proximal → microlésions de la muqueuse (porte d'entrée pour germes pathogènes) et production excessive de substances toxiques.
- Rôles : digestion (fermentation des glucides, putréfaction des protéines), synthèse de vitamines hydrosolubles (B1, B2, B12, acide folique, biotine, PP) et liposoluble (K), déconjugaison de la bilirubine directe en stercobilinogène, déshydroxylation des acides biliaires primaires en secondaires, dégradation de l'urée intestinale par l'uréase en NH₃ (cycle entéro-hépatique), stimulation de la défense de l'organisme (production d'IgA, antagonisme nutritionnel avec la flore pathogène).

### 5.5 Les fèces
- ¾ eau + ¼ matière solide + 150 mL de gaz (aérophagie et fermentation bactérienne).
- Quantité 50-100 g/jour, couleur brune (stercobiline), odeur caractéristique (indole, scatole, H₂S), pH alcalin ≈ 7,5.
- Composition (enfant) : flore bactérienne, gouttelettes lipidiques (5-7 g/jour), complexes inorganiques (phosphates, oxalates de calcium et de fer), protéines (10 g/jour, azote 1,5 g/jour), pigments biliaires, cellules épithéliales exfoliées, cellulose et fibres musculaires partiellement digérées.

## Points à retenir
- Salive : hypotonique, riche en amylase et HCO₃⁻, régulation exclusivement réflexe (cholinergique rapide, adrénergique tardive).
- HCl gastrique : sécrété par la pompe H⁺/K⁺-ATPase des cellules pariétales, active la pepsine, régulé par ACh/gastrine/histamine (stimulateurs) et sécrétine/somatostatine/PGE2 (inhibiteurs).
- Pancréas exocrine : sécrétion acinaire (enzymes, stimulée par CCK) et canalaire (HCO₃⁻, stimulée par sécrétine) ; phase intestinale = 70 % de la sécrétion.
- Bile : sels biliaires indispensables à l'émulsification/absorption des lipides, cycle entéro-hépatique (85-95 % de réabsorption), régulation par sécrétine (cholérèse) et CCK (évacuation vésiculaire).
- Flore colique : fermentation (glucides) vs putréfaction (protéines), synthèse vitaminique, cycle entéro-hépatique de l'urée et de la bilirubine.`;

export const DIGESTIVE_SECRETION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Fonction sécrétoire du tube digestif",
    source_label: "Physiologie — UMFT Timisoara, Lecture 12",
    content_fr: DIGESTIVE_SECRETION_COURSE,
  },
  qcm: [
    single("Quelle glande salivaire fournit la plus grande part du volume de salive ?", "B", "La glande sous-maxillaire (mixte) fournit environ 70 % du volume salivaire, contre 25 % pour la parotide et 5 % pour la sublinguale.", ["La parotide (25 %)", "La sous-maxillaire (70 %)", "La sublinguale (5 %)", "Les glandes mineures"]),
    single("Que se passe-t-il au niveau des cellules canalaires lors de la formation de la salive finale ?", "C", "Les cellules canalaires sont imperméables à l'eau ; elles réabsorbent Na+ et Cl- et sécrètent K+ et HCO3-, rendant la salive finale hypotonique.", ["Elles réabsorbent l'eau pour concentrer la salive", "Elles sécrètent du Na+ et réabsorbent du K+", "Elles réabsorbent Na+/Cl- et sécrètent K+/HCO3-, sans réabsorber l'eau", "Elles n'ont aucun effet sur la composition de la salive primaire"]),
    single("Quelle enzyme salivaire hydrolyse l'amidon et jusqu'à quel pH reste-t-elle active dans l'estomac ?", "A", "L'amylase salivaire hydrolyse les liaisons alpha-1,4 et reste active dans l'estomac jusqu'à pH 4.", ["L'amylase salivaire, active jusqu'à pH 4", "La lipase linguale, active jusqu'à pH 7", "La pepsine, active jusqu'à pH 2", "La maltase, active jusqu'à pH 6"]),
    multi("Quels mécanismes nerveux régulent la sécrétion salivaire ?", ["A", "B"], "La sécrétion salivaire est régulée par un mécanisme cholinergique (parasympathique, rapide et abondant) et un mécanisme adrénergique (sympathique, tardif et visqueux).", ["Mécanisme cholinergique (parasympathique)", "Mécanisme adrénergique (sympathique)", "Mécanisme uniquement endocrine", "Mécanisme uniquement paracrine"]),
    single("Quelles cellules gastriques sécrètent le facteur intrinsèque de Castle ?", "B", "Les cellules pariétales (oxyntiques) sécrètent à la fois le HCl et le facteur intrinsèque.", ["Les cellules principales", "Les cellules pariétales", "Les cellules G", "Les cellules à mucus du collet"]),
    single("Quelle pompe assure la sécrétion active de H+ au pôle apical de la cellule pariétale ?", "C", "La pompe H+/K+-ATPase sécrète activement H+ dans la lumière de la glande oxyntique ; elle est inhibée par l'oméprazole.", ["La pompe Na+/K+-ATPase", "L'échangeur HCO3-/Cl-", "La pompe H+/K+-ATPase", "Le cotransporteur Na+/glucose"]),
    single("Quel phénomène explique l'alcalose métabolique physiologique lors de vomissements répétés ?", "A", "Le passage de HCO3- dans le sang au pôle basal de la cellule pariétale (« marée alcaline ») explique l'alcalose lors de la perte de HCl par vomissement.", ["Le passage de HCO3- dans le sang (marée alcaline)", "La perte de K+ gastrique", "L'augmentation de la sécrétion de gastrine", "La déshydratation associée aux vomissements"]),
    single("Quelle carence provoque un déficit prolongé en facteur intrinsèque de Castle ?", "C", "Le déficit en facteur intrinsèque empêche l'absorption iléale de la vitamine B12, provoquant l'anémie de Biermer.", ["Une carence en fer", "Une carence en vitamine C", "Une anémie de Biermer par carence en vitamine B12", "Une carence en vitamine K"]),
    single("Quelle est la phase de la sécrétion gastrique qui fournit la plus grande part de la sécrétion maximale ?", "B", "La phase gastrique fournit 50 % de la sécrétion maximale, contre 40 % pour la phase céphalique et 10 % pour la phase intestinale.", ["La phase céphalique (40 %)", "La phase gastrique (50 %)", "La phase intestinale (10 %)", "Les trois phases sont égales"]),
    single("Quel est l'effet de la sécrétine sur la sécrétion pancréatique ?", "B", "La sécrétine stimule la sécrétion canalaire, riche en eau et HCO3-, tandis que la CCK stimule la sécrétion acinaire riche en enzymes.", ["Elle stimule la sécrétion acinaire riche en enzymes", "Elle stimule la sécrétion canalaire riche en HCO3-", "Elle inhibe toute sécrétion pancréatique", "Elle stimule uniquement la sécrétion de mucus"]),
    single("Quel défaut moléculaire est à l'origine de la mucoviscidose au niveau pancréatique ?", "C", "Un défaut des canaux Cl- dépendants de l'AMPc dans les cellules canalaires entraîne une précipitation des enzymes pancréatiques.", ["Un déficit en trypsine", "Un excès de sécrétion de bicarbonate", "Un défaut des canaux Cl- dépendants de l'AMPc", "Une absence de cellules acinaires"]),
    multi("Quelles sont les principales causes de pancréatite aiguë selon le sexe ?", ["A", "B"], "Les calculs biliaires sont la cause principale chez la femme, l'alcool chez l'homme, tous deux menant à l'activation prématurée des enzymes protéolytiques dans les canaux pancréatiques.", ["Calculs biliaires (plutôt chez la femme)", "Alcool (plutôt chez l'homme)", "Carence en trypsine", "Excès de sécrétine"]),
    single("Quelle proportion de la sécrétion pancréatique est fournie par la phase intestinale ?", "C", "La phase intestinale fournit environ 70 % de la sécrétion pancréatique maximale, la principale des trois phases.", ["10 %", "20 %", "70 %", "100 %"]),
    single("Quel est le rôle des sels biliaires dans la digestion des lipides ?", "A", "Les sels biliaires émulsifient les graisses et forment des micelles, indispensables à l'absorption intestinale des lipides.", ["Émulsification des graisses et formation de micelles", "Hydrolyse directe des triglycérides", "Activation du trypsinogène", "Neutralisation du HCl gastrique uniquement"]),
    single("Quelle proportion des sels biliaires primaires est réabsorbée dans le cycle entéro-hépatique ?", "B", "Environ 85 % des sels biliaires primaires sont réabsorbés par la veine porte et recyclés par l'hépatocyte.", ["50 %", "85 %", "15 %", "100 %"]),
    single("Où se situe le principal site de réabsorption des sels biliaires ?", "C", "L'iléon distal est le principal site de réabsorption des sels biliaires, par cotransport Na+/sels biliaires.", ["Le duodénum", "Le jéjunum proximal (voie secondaire)", "L'iléon distal (voie principale)", "Le côlon proximal"]),
    single("Quelle hormone assure principalement l'évacuation de la bile vésiculaire (effet cholécystokinétique) ?", "A", "La CCK, sécrétée par la muqueuse duodénale en présence de produits de digestion lipidique et protéique, provoque la contraction vésiculaire et le relâchement du sphincter d'Oddi.", ["La CCK", "La sécrétine", "La gastrine", "La somatostatine"]),
    single("Comment la bilirubine indirecte devient-elle bilirubine directe ?", "B", "Au niveau hépatique, la bilirubine indirecte est conjuguée à l'acide glucuronique par la glucuronyl-transférase.", ["Par oxydation dans l'intestin sous l'action de la flore bactérienne", "Par conjugaison à l'acide glucuronique dans l'hépatocyte", "Par liaison à l'albumine plasmatique", "Par action de l'hème-oxygénase dans les macrophages"]),
    single("Quelle flore colique prédomine dans le côlon proximal et quelle est sa fonction ?", "A", "La flore de fermentation (aérobie, 85 %) prédomine dans le côlon proximal et dégrade les glucides en CO2 et acides organiques.", ["Flore de fermentation, dégrade les glucides", "Flore de putréfaction, dégrade les protéines", "Flore de fermentation, synthétise uniquement des lipides", "Aucune flore n'est présente dans le côlon proximal"]),
    single("Quel effet ont les antibiotiques sur l'équilibre de la flore intestinale ?", "C", "Les antibiotiques détruisent la flore de fermentation protectrice (lactobacilles), permettant à la flore de putréfaction de coloniser le côlon proximal, avec risque de microlésions et de production toxique excessive.", ["Ils renforcent uniquement la flore de fermentation", "Ils n'ont aucun effet sur l'équilibre de la flore", "Ils détruisent la flore de fermentation, favorisant la flore de putréfaction", "Ils détruisent uniquement la flore de putréfaction"]),
  ],
  exam: { titre_fr: "Examen chronométré — Sécrétion digestive", duration_seconds: 1_600 },
};

export const DIGESTIVE_SECRETION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle proportion du volume salivaire provient de la glande sous-maxillaire ?", question_en: "What proportion of salivary volume comes from the submandibular gland?", answer_fr: "Environ 70 %.", answer_en: "About 70%." },
  { question_fr: "Quel type de sécrétion caractérise la glande parotide ?", question_en: "What type of secretion characterizes the parotid gland?", answer_fr: "Une sécrétion séreuse pure.", answer_en: "A purely serous secretion." },
  { question_fr: "Quelle est l'osmolarité de la salive finale ?", question_en: "What is the osmolarity of final saliva?", answer_fr: "Hypotonique, 50-100 mOsm/L.", answer_en: "Hypotonic, 50-100 mOsm/L." },
  { question_fr: "Quel ion est le plus concentré dans la salive par rapport au plasma ?", question_en: "Which ion is most concentrated in saliva relative to plasma?", answer_fr: "Le potassium (K+), environ 7 fois la concentration plasmatique.", answer_en: "Potassium (K+), about 7 times the plasma concentration." },
  { question_fr: "Quel est le volume quotidien moyen de salive produite ?", question_en: "What is the average daily volume of saliva produced?", answer_fr: "Environ 1,5 litre par jour.", answer_en: "About 1.5 liters per day." },
  { question_fr: "Quelle substance salivaire protège contre les caries en participant à la formation d'un émail résistant ?", question_en: "Which salivary substance protects against cavities by helping form resistant enamel?", answer_fr: "Le fluorure, qui forme la fluorapatite.", answer_en: "Fluoride, which forms fluorapatite." },
  { question_fr: "Qu'est-ce que la sialolithiase ?", question_en: "What is sialolithiasis?", answer_fr: "La formation de calculs salivaires dus à la précipitation de sels de calcium en milieu alcalin.", answer_en: "The formation of salivary stones due to precipitation of calcium salts in alkaline conditions." },
  { question_fr: "Quels nerfs crâniens portent les afférences du réflexe salivaire cholinergique ?", question_en: "Which cranial nerves carry the afferents of the cholinergic salivary reflex?", answer_fr: "Les nerfs V, VII, IX et X.", answer_en: "Nerves V, VII, IX, and X." },
  { question_fr: "Quelle est la conséquence d'une déshydratation sur la sécrétion salivaire ?", question_en: "What is the effect of dehydration on salivary secretion?", answer_fr: "L'ADH augmente la réabsorption d'eau, réduisant le volume salivaire et provoquant une sécheresse buccale (soif).", answer_en: "ADH increases water reabsorption, reducing salivary volume and causing dry mouth (thirst)." },
  { question_fr: "Quel pourcentage de la surface gastrique est occupé par les glandes oxyntiques ?", question_en: "What percentage of the gastric surface is occupied by oxyntic glands?", answer_fr: "80 %.", answer_en: "80%." },
  { question_fr: "Quelles cellules gastriques sécrètent l'histamine ?", question_en: "Which gastric cells secrete histamine?", answer_fr: "Les cellules entérochromaffine-like (ECL).", answer_en: "Enterochromaffin-like (ECL) cells." },
  { question_fr: "Quel est le pH du suc gastrique ?", question_en: "What is the pH of gastric juice?", answer_fr: "1,5 à 2,5.", answer_en: "1.5 to 2.5." },
  { question_fr: "Quelle enzyme catalyse la première étape de la sécrétion de HCl dans la cellule pariétale ?", question_en: "Which enzyme catalyzes the first step of HCl secretion in the parietal cell?", answer_fr: "L'anhydrase carbonique (hydratation du CO2).", answer_en: "Carbonic anhydrase (CO2 hydration)." },
  { question_fr: "Quel médicament inhibe spécifiquement la pompe H+/K+-ATPase ?", question_en: "Which drug specifically inhibits the H+/K+-ATPase pump?", answer_fr: "L'oméprazole.", answer_en: "Omeprazole." },
  { question_fr: "Quel enzyme active le pepsinogène en pepsine ?", question_en: "What activates pepsinogen into pepsin?", answer_fr: "Le HCl, puis un processus autocatalytique.", answer_en: "HCl, then an autocatalytic process." },
  { question_fr: "Chez qui la présure (chymosine) joue-t-elle un rôle digestif important ?", question_en: "In whom does rennet (chymosin) play an important digestive role?", answer_fr: "Chez l'enfant (digestion du lait).", answer_en: "In children (milk digestion)." },
  { question_fr: "Quel récepteur de l'histamine est impliqué dans la sécrétion de HCl, et quel médicament le bloque ?", question_en: "Which histamine receptor is involved in HCl secretion, and what drug blocks it?", answer_fr: "Le récepteur H2, bloqué par la cimétidine.", answer_en: "The H2 receptor, blocked by cimetidine." },
  { question_fr: "Quelle tumeur endocrine provoque une hypergastrinémie et des ulcères résistants ?", question_en: "Which endocrine tumor causes hypergastrinemia and resistant ulcers?", answer_fr: "Le syndrome de Zollinger-Ellison (tumeur pancréatique sécrétant la gastrine).", answer_en: "Zollinger-Ellison syndrome (gastrin-secreting pancreatic tumor)." },
  { question_fr: "Que détruit l'infection à Helicobacter pylori au niveau gastrique ?", question_en: "What does Helicobacter pylori infection destroy in the stomach?", answer_fr: "La couche protectrice de mucus gastrique.", answer_en: "The protective gastric mucus layer." },
  { question_fr: "Quelle proportion de la sécrétion gastrique la phase céphalique fournit-elle ?", question_en: "What proportion of gastric secretion does the cephalic phase provide?", answer_fr: "40 %.", answer_en: "40%." },
  { question_fr: "Quel effet le pH acide duodénal a-t-il sur la sécrétion gastrique ?", question_en: "What effect does duodenal acid pH have on gastric secretion?", answer_fr: "Il l'inhibe, via la libération de sécrétine et de somatostatine.", answer_en: "It inhibits it, via secretin and somatostatin release." },
  { question_fr: "Quelles sont les deux composantes du suc pancréatique et leur origine cellulaire ?", question_en: "What are the two components of pancreatic juice and their cellular origin?", answer_fr: "La sécrétion acinaire (riche en enzymes) et la sécrétion canalaire (riche en eau et HCO3-).", answer_en: "Acinar secretion (rich in enzymes) and ductal secretion (rich in water and HCO3-)." },
  { question_fr: "Quelle enzyme active le trypsinogène en trypsine dans l'intestin ?", question_en: "Which enzyme activates trypsinogen into trypsin in the intestine?", answer_fr: "L'entérokinase, présente à la bordure en brosse des entérocytes.", answer_en: "Enterokinase, present at the enterocyte brush border." },
  { question_fr: "Quelle enzyme pancréatique nécessite l'émulsification préalable des lipides par les sels biliaires ?", question_en: "Which pancreatic enzyme requires prior lipid emulsification by bile salts?", answer_fr: "La lipase pancréatique.", answer_en: "Pancreatic lipase." },
  { question_fr: "Quelle est la cause moléculaire de la mucoviscidose au niveau des canaux pancréatiques ?", question_en: "What is the molecular cause of cystic fibrosis at the pancreatic duct level?", answer_fr: "Un défaut des canaux chlore dépendants de l'AMPc.", answer_en: "A defect in cAMP-dependent chloride channels." },
  { question_fr: "Quelle hormone stimule la sécrétion canalaire pancréatique riche en HCO3- ?", question_en: "Which hormone stimulates HCO3--rich pancreatic ductal secretion?", answer_fr: "La sécrétine.", answer_en: "Secretin." },
  { question_fr: "Quelle est la proportion de la sécrétion pancréatique fournie par la phase intestinale ?", question_en: "What proportion of pancreatic secretion is provided by the intestinal phase?", answer_fr: "70 %.", answer_en: "70%." },
  { question_fr: "Quelle est la concentration en sels biliaires de la fraction cholalo-dépendante de la bile ?", question_en: "What is the bile salt concentration of the cholalo-dependent bile fraction?", answer_fr: "Environ 50 % des substances organiques de cette fraction.", answer_en: "About 50% of the organic substances in this fraction." },
  { question_fr: "Où sont synthétisés les acides biliaires primaires ?", question_en: "Where are primary bile acids synthesized?", answer_fr: "Dans l'hépatocyte, à partir du cholestérol, via la 7-alpha-hydroxylase.", answer_en: "In the hepatocyte, from cholesterol, via 7-alpha-hydroxylase." },
  { question_fr: "Comment sont formés les acides biliaires secondaires ?", question_en: "How are secondary bile acids formed?", answer_fr: "Dans l'intestin, sous l'action de la flore bactérienne sur les acides biliaires primaires.", answer_en: "In the intestine, by bacterial flora acting on primary bile acids." },
  { question_fr: "Combien de fois par jour le cycle entéro-hépatique des sels biliaires se déroule-t-il ?", question_en: "How many times per day does the enterohepatic bile salt cycle occur?", answer_fr: "4 à 12 fois par jour.", answer_en: "4 to 12 times per day." },
  { question_fr: "Quel est l'effet hydrocholérétique de la sécrétine ?", question_en: "What is the hydrocholeretic effect of secretin?", answer_fr: "Elle stimule la sécrétion canalaire d'eau et de HCO3-, doublant le volume de bile.", answer_en: "It stimulates ductal secretion of water and HCO3-, doubling bile volume." },
  { question_fr: "Qu'est-ce que l'effet cholagogue ?", question_en: "What is the cholagogue effect?", answer_fr: "La combinaison de l'effet cholérétique (stimulation de la sécrétion) et cholécystokinétique (stimulation de l'évacuation).", answer_en: "The combination of the choleretic (secretion stimulation) and cholecystokinetic (evacuation stimulation) effects." },
  { question_fr: "Que forme la bilirubine indirecte une fois dans le plasma ?", question_en: "What does indirect bilirubin form once in plasma?", answer_fr: "Elle circule liée à l'albumine.", answer_en: "It circulates bound to albumin." },
  { question_fr: "Sous quelle forme la bilirubine est-elle excrétée dans les fèces ?", question_en: "In what form is bilirubin excreted in feces?", answer_fr: "Sous forme de stercobiline (après oxydation du stercobilinogène).", answer_en: "As stercobilin (after oxidation of stercobilinogen)." },
  { question_fr: "Où se trouvent exclusivement les glandes de Brünner ?", question_en: "Where are Brunner's glands exclusively located?", answer_fr: "Dans la sous-muqueuse duodénale, entre le pylore et l'ampoule de Vater.", answer_en: "In the duodenal submucosa, between the pylorus and the ampulla of Vater." },
  { question_fr: "Quel type de cellules des glandes de Lieberkühn sécrète les défensines ?", question_en: "Which Lieberkühn gland cell type secretes defensins?", answer_fr: "Les cellules de Paneth.", answer_en: "Paneth cells." },
  { question_fr: "Combien de temps mettent les cellules souches intestinales à devenir des entérocytes matures ?", question_en: "How long do intestinal stem cells take to become mature enterocytes?", answer_fr: "3 à 4 jours.", answer_en: "3 to 4 days." },
  { question_fr: "Quelle enzyme de la bordure en brosse hydrolyse le lactose ?", question_en: "Which brush-border enzyme hydrolyzes lactose?", answer_fr: "La lactase.", answer_en: "Lactase." },
  { question_fr: "Quelle flore colique dégrade les protéines en composés toxiques comme l'indole et le scatole ?", question_en: "Which colonic flora degrades proteins into toxic compounds like indole and skatole?", answer_fr: "La flore de putréfaction (anaérobie), dans le côlon distal.", answer_en: "Putrefactive (anaerobic) flora, in the distal colon." },
  { question_fr: "Quelles vitamines sont synthétisées par la flore intestinale ?", question_en: "Which vitamins are synthesized by intestinal flora?", answer_fr: "B1, B2, B12, l'acide folique, la biotine, la vitamine PP (hydrosolubles) et la vitamine K (liposoluble).", answer_en: "B1, B2, B12, folic acid, biotin, vitamin PP (water-soluble) and vitamin K (fat-soluble)." },
  { question_fr: "Quelle est la densité bactérienne approximative du côlon ?", question_en: "What is the approximate bacterial density of the colon?", answer_fr: "10^11 germes/mL.", answer_en: "10^11 organisms/mL." },
];

const DIGESTION_ABSORPTION_COURSE = `# Lecture 13 — Digestion et absorption des principes nutritifs

## 1. Principes de base de l'absorption intestinale

### 1.1 Définition et niveaux
- **Absorption** : ensemble des mécanismes par lesquels les principes absorbables traversent la couche épithéliale du tube digestif pour entrer dans la circulation sanguine ou lymphatique.
- Se déroule tout au long du tube digestif, avec des valeurs variables selon : particularités morphologiques, temps de contact entre aliments et surface d'absorption, structure et solubilité des principes alimentaires.
- Sites d'absorption : cavité buccale (aucune valeur nutritive, médicaments comme la nitroglycérine) ; estomac (eau, alcool 20 %, aspirine) ; **duodénum-jéjunum : site principal** ; iléon (sels biliaires, vitamine B12) ; côlon proximal (eau, NaCl).

### 1.2 Particularités morphofonctionnelles de l'intestin
- Surface d'absorption ≈ 200 m² grâce à trois niveaux d'amplification : **valvules conniventes** (plis de la muqueuse, ×3), **villosités intestinales** (élongations muqueuses, ×30), **microvillosités** (élongations de la membrane de l'entérocyte = « bordure en brosse », ×600).
- Villosités : fines élongations de 0,5-1 mm, densité 20-40/mm², épithélium simple issu des cryptes de Lieberkühn (cellules matures à bordure en brosse), axe conjonctivo-vasculaire (chylifère central lymphatique, artériole → capillaires → veinule, fibres musculaires lisses).
- Bordure en brosse : 3000-6000 microvillosités/cellule, unité digestivo-absorbante (enzymes protéiques finalisant la digestion + protéines transporteuses assurant l'absorption). Les jonctions intercellulaires « gap » forment des espaces paracellulaires (absorption iso-osmotique d'eau et de NaCl ; passage des substances absorbées par voie transcellulaire).
- Circulation intestinale : au repos, 1000 mL/min (20 % du débit cardiaque, 75 % pour la muqueuse digestive) ; augmente en digestion par redistribution du volume sanguin. Système capillaire double : sang (veine porte → foie) et lymphe (canal thoracique → circulation veineuse → cœur → circulation artérielle → tissu adipeux → foie).

### 1.3 Voies et mécanismes d'absorption
- **Voie transcellulaire (principale)** : lumière → bordure en brosse apicale → pôle basal → espace paracellulaire → capillaire sanguin ou lymphatique.
- **Voie paracellulaire (secondaire)** : lumière → jonctions intercellulaires → membrane basale → capillaire ; minimale au duodénum/côlon (jonctions serrées), maximale au jéjunum (jonctions lâches).
- **Transport passif** : diffusion simple (lipides et vitamines liposolubles à travers la membrane ; eau et NaCl par voie paracellulaire, diffusion iso-osmotique) ; diffusion facilitée (fructose et vitamines au pôle apical ; monosaccharides, acides aminés et minéraux au pôle basal) ; diffusion par canaux ioniques (Na⁺, K⁺, Ca²⁺ au pôle apical ; Cl⁻, K⁺ au pôle basal).
- **Transport actif primaire** : contre le gradient électrochimique, consommation d'énergie, protéines transporteuses spécifiques, limité et compétitif ; pompe Na⁺/K⁺ et pompe Ca²⁺ au pôle basal.
- **Transport actif secondaire** : cotransporteurs au pôle apical (Na⁺/monosaccharides, Na⁺/AA, Na⁺/phosphate, Na⁺/vitamines, H⁺/Fe²⁺) ; échangeurs (HCO₃⁻/Cl⁻, Na⁺/H⁺) ; au pôle basal, échangeur Na⁺/Ca²⁺.
- **Transport vésiculaire** : endocytose médiée par récepteur au pôle apical (complexe vitamine B12 + facteur intrinsèque) ; exocytose au pôle basal (chylomicrons, complexe Ca²⁺/B12/transcobalamine II).

## 2. Digestion et absorption des glucides

- Apport alimentaire : 6 g/kg/jour. Formes : polysaccharides (amidon, glycogène, dextrines, cellulose), disaccharides (saccharose, lactose, maltose), monosaccharides (glucose, fructose, galactose).

### 2.1 Enzymes glycolytiques
- **α-amylases** : action hydrolytique intraluminale, brisent les liaisons α-1,4.
  - Amylase **salivaire** : activité glycolytique réduite (5 %), active dans l'estomac jusqu'à pH 4.
  - Amylase **pancréatique** : activité glycolytique maximale (95 %), brise aussi les liaisons α-1,6, active en milieu alcalin duodénal. Amidon → α-dextrines → maltose ; glycogène → maltose, maltotriose et α-dextrines.
- **Disaccharidases de la bordure en brosse** : saccharase/sucrase (saccharose → glucose + fructose), maltase/glucoamylase (maltose, maltotriose → glucose), α-dextrinase/isomaltase (α-dextrines → glucose), lactase (lactose → glucose + galactose).

### 2.2 Mécanismes de transport pour l'absorption des glucides
- Localisation : duodénum et première partie du jéjunum. Formes absorbées : glucose (80 %), galactose (10 %), fructose (10 %).
- Pôle apical : cotransport Na⁺/glucose et Na⁺/galactose (transport actif secondaire) ; diffusion facilitée pour le fructose.
- Pôle basal : diffusion facilitée pour tous les monosaccharides (transporteur GLUT2) → veine porte → foie (stockage en glycogène ou libération dans le plasma, glycémie postprandiale).
- Taux de digestion/absorption : 90-94 % digérés et absorbés ; 6-10 % digérés par la flore de fermentation dans les fèces.
- Facteurs influençant l'absorption : état de la muqueuse intestinale (l'inflammation la diminue), motilité intestinale (un péristaltisme exacerbé diminue le temps de contact et donc l'absorption), fonction thyroïdienne (les hormones thyroïdiennes stimulent l'absorption du glucose, effet hyperglycémiant).

## 3. Digestion et absorption des protéines

- Apport alimentaire : 0,8 g/kg/jour.

### 3.1 Enzymes protéolytiques
- **Pepsine gastrique** : digère 10-20 % des protéines alimentaires ; sécrétée sous forme inactive (pepsinogène), activée par le HCl et par autocatalyse ; hydrolyse les acide-métaprotéines (formées sous l'action du HCl) en oligopeptides et acides aminés.
- **Enzymes pancréatiques** : digèrent 50 % des protéines alimentaires ; synthétisées sous forme inactive, activées dans le duodénum par l'entérokinase ; hydrolysent les polypeptides en oligopeptides, tripeptides, dipeptides et acides aminés.
- **Peptidases de la bordure en brosse** : digèrent 30-40 % des protéines alimentaires ; hydrolysent les oligopeptides en dipeptides, tripeptides et acides aminés. Formes absorbées : dipeptides/tripeptides (70 %), acides aminés (30 %), protéines intégrales par endocytose (importance mineure mais notable, notamment chez le nouveau-né pour le passage d'immunoglobulines).

### 3.2 Mécanismes de transport pour l'absorption des protéines
- **Forme principale d'absorption : dipeptides et tripeptides**, au niveau de la première partie du jéjunum. Pôle apical : cotransport dipeptide/tripeptide-H⁺ ; intracellulaire : hydrolyse en acides aminés par des peptidases ; pôle basal : diffusion facilitée sous forme d'acides aminés.
- **Forme secondaire d'absorption : acides aminés libres**, au niveau de l'iléon. Pôle apical : cotransport Na⁺/AA (3-4 types de transporteurs couplés au Na⁺ selon la classe d'acide aminé) ; pôle basal : diffusion facilitée. Dans les deux cas → veine porte → foie (synthèse de protéines endogènes).

## 4. Digestion et absorption des lipides

- Apport alimentaire : 1 g/kg/jour. Formes : triglycérides (forme majeure), cholestérol estérifié, phospholipides (lécithine).

### 4.1 Enzymes lipolytiques
- **Lipase linguale + lipase gastrique** : actives dans l'estomac (pH acide), plus importantes chez l'enfant.
- **Lipase pancréatique** : l'enzyme lipolytique digestive la plus importante, active en pH alcalin, nécessite l'émulsification préalable des triglycérides par les sels biliaires.
- Cholestérol-estérase (cholestérol estérifié → cholestérol libre + AGL) ; phospholipase A2 (lécithine → lysolécithine + AGL).

### 4.2 Formation des micelles
- Les micelles sont la **seule forme d'absorption intestinale des lipides**.
- Formation basée sur le caractère amphipathique des sels biliaires : face polaire (hydrophile) orientée vers l'extérieur, face non polaire (hydrophobe) vers l'intérieur.
- Agrégats multimoléculaires : concentration minimale de sels biliaires = « concentration micellaire critique » ; 20-30 molécules lipidiques par micelle (cholestérol, monoglycérides, AGL, vitamines liposolubles A, D, E, K).

### 4.3 Mécanisme de transport pour l'absorption des lipides
- Localisation : jéjunum proximal.
- 1) Diffusion des micelles vers la surface d'absorption, selon le gradient de concentration micellaire.
- 2) Transport des composants des micelles à travers la bordure en brosse : fractions lipidiques par diffusion simple, sels biliaires par cotransport Na⁺/sels biliaires.
- 3) Re-synthèse des lipides au niveau du réticulum endoplasmique (liaison à des protéines cytosoliques spécifiques et transport vers le RE) : re-synthèse des triglycérides, ré-estérification du cholestérol, re-synthèse des phospholipides.
- 4) Formation des **chylomicrons** : triglycérides (90 %) + cholestérol estérifié + phospholipides + apoprotéine B-48.
- 5) Exocytose des chylomicrons (via l'appareil de Golgi, inclus dans une vésicule) au pôle basal de l'entérocyte, dans le vaisseau lymphatique central de la villosité → circulation lymphatique → circulation sanguine → tissu adipeux (hydrolyse des TG par la lipoprotéine lipase endothéliale) ; les résidus de chylomicrons sont captés et métabolisés par le foie.
- Voie sanguine directe : AGL à chaîne courte. Voie lymphatique : cholestérol libre, monoglycérides, lysophosphatides, AGL à chaîne longue.

## 5. Absorption de l'eau, des minéraux et des vitamines

### 5.1 Bilan hydrique digestif
- Apport total : 9000 mL/jour (liquides ingérés 2600 mL + sécrétions digestives 7000 mL : salivaire 1500, gastrique 1500, pancréatique 1500, biliaire 1000, intestinale 1500).
- Absorption totale : 8900 mL/jour (intestin grêle 8500 mL, gros intestin 400 mL). Élimination fécale : seulement 100 mL/jour.

### 5.2 Absorption de l'eau
- **Intestin proximal** : diffusion iso-osmotique au niveau paracellulaire, couplée à l'absorption des nutriments ; le cotransport Na⁺/glucose entraîne l'absorption de 250 molécules d'eau par molécule de glucose.
- **Intestin distal** : absorption iso-osmotique paracellulaire couplée à l'absorption des électrolytes.
- Mécanisme au pôle apical de l'espace paracellulaire : la pompe Na⁺/K⁺ crée un gradient électrique induisant la sortie de Cl⁻ dans l'espace paracellulaire → l'espace devient hypertonique et attire l'eau par forces osmotiques → le liquide devient isotonique → un gradient de pression hydrostatique pousse l'eau à travers la membrane basale vers l'espace interstitiel et les capillaires.

### 5.3 Absorption du NaCl et du HCO3-
- Apport alimentaire 5-8 g NaCl/jour + sécrétions digestives 20-30 g/jour ; absorption ≈ 25-35 g/jour ; feces : 0,5 % du NaCl intestinal.
- Mécanismes actifs au pôle basal (cotransport Na⁺/nutriments, pompe Na⁺/K⁺) créant un gradient électrochimique pour le Na⁺ ([Na⁺] intracellulaire 50 mEq/L vs [Na⁺] du chyme intestinal 142 mEq/L). Cl⁻ suit passivement pour maintenir l'électroneutralité. Absorption de NaCl stimulée par l'aldostérone au niveau colique en cas de déshydratation.
- HCO₃⁻ : neutralisé par le HCl gastrique (HCl + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O), NaCl/CO₂/H₂O réabsorbés dans le sang.

### 5.4 Absorption des minéraux : Ca²⁺ et Fe²⁺
- **Calcium** : représente 30-80 % du calcium alimentaire absorbé, maximal dans l'intestin proximal, nécessite une libération préalable des complexes alimentaires insolubles par le HCl. Voie paracellulaire passive (1/3, non régulée) et voie transcellulaire active (2/3, régulée par la vitamine D3) : pôle apical (canaux Ca²⁺), intracellulaire (liaison à la calbindine, empêchant la formation de complexes insolubles), pôle basal (pompes Ca²⁺ et échangeur Na⁺/Ca²⁺).
- **Fer** : seulement 5-10 % de l'apport alimentaire est absorbé. Le Fe³⁺ des complexes organiques insolubles est réduit en Fe²⁺ sous l'action du HCl, de la vitamine C et de la fer-réductase de la bordure en brosse (l'hème est libéré sous l'action des enzymes protéolytiques digestives). Pôle apical : cotransport H⁺/Fe²⁺ ou diffusion facilitée pour l'hème. Intracellulaire : oxydation du Fe²⁺ en Fe³⁺ (féroxidase) — soit stockage sous forme de ferritine (Fe³⁺ + apoferritine), soit liaison à l'IRP régulant l'absorption. Pôle basal : formation du complexe Fe²⁺/transferrine, sécrété dans la lumière duodénale puis endocytose du complexe, dissociation, Fe³⁺ lié à la transferrine plasmatique (vers foie/moelle osseuse) via le canal ferroportine.
- **Régulation de l'absorption du fer (rétrocontrôle négatif)** : le niveau de réserve hépatique en ferritine et le niveau de sidérémie régulent l'absorption. L'**hepcidine** (hormone hépatique) est libérée lorsque les réserves sont suffisantes et réduit l'activité de la ferroportine, diminuant l'absorption digestive du fer.

### 5.5 Absorption des vitamines
- **Vitamines liposolubles (A, D, E, K)** : absorbées au duodénum/jéjunum par simple diffusion (incluses dans les micelles).
- **Vitamines hydrosolubles du complexe B et vitamine C, acide folique** : absorbées au duodénum/jéjunum par cotransport Na⁺/vitamine et diffusion facilitée.
- **Vitamine B12** : absorbée spécifiquement à l'iléon, par endocytose médiée par récepteur du complexe B12/facteur intrinsèque de Castle au pôle apical, puis exocytose au pôle basal sous forme de complexe B12/transcobalamine II.

## Points à retenir
- La surface d'absorption intestinale (~200 m²) résulte de trois amplifications : valvules (×3), villosités (×30), microvillosités (×600).
- Glucides : absorbés à 80 % sous forme de glucose, par cotransport Na⁺/glucose (apical) et diffusion facilitée (basal, GLUT2).
- Protéines : absorbées principalement sous forme de di/tripeptides (jéjunum), secondairement sous forme d'acides aminés libres (iléon).
- Lipides : la micelle est la seule forme d'absorption ; les chylomicrons (90 % triglycérides + ApoB-48) empruntent la voie lymphatique.
- Fer : absorption faible (5-10 %) et finement régulée par l'hepcidine ; calcium : régulé par la vitamine D3 ; vitamine B12 : absorption iléale spécifique via le facteur intrinsèque.`;

export const DIGESTION_ABSORPTION_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Digestion et absorption des principes nutritifs",
    source_label: "Physiologie — UMFT Timisoara, Lecture 13",
    content_fr: DIGESTION_ABSORPTION_COURSE,
  },
  qcm: [
    single("Quel segment digestif constitue le site principal d'absorption des nutriments ?", "B", "Le duodénum et le jéjunum constituent le site principal d'absorption des nutriments.", ["L'estomac", "Le duodénum et le jéjunum", "Le côlon proximal", "La cavité buccale"]),
    single("Quel niveau d'amplification de la surface d'absorption est apporté par les microvillosités ?", "C", "Les microvillosités (bordure en brosse) multiplient la surface d'absorption par 600, le facteur le plus important des trois niveaux.", ["×3", "×30", "×600", "×2000"]),
    single("Quelle est la voie d'absorption principale à travers l'épithélium intestinal ?", "A", "La voie transcellulaire est la voie principale d'absorption, à travers la bordure en brosse apicale puis le pôle basal.", ["La voie transcellulaire", "La voie paracellulaire", "La voie vésiculaire exclusivement", "Aucune des deux"]),
    single("Où la voie paracellulaire d'absorption est-elle maximale ?", "B", "La voie paracellulaire est maximale au niveau du jéjunum, où les jonctions intercellulaires sont de type gap (lâches).", ["Au duodénum", "Au jéjunum", "Au côlon", "À l'estomac"]),
    multi("Quels mécanismes de transport actif sont impliqués dans l'absorption intestinale ?", ["A", "B", "C"], "L'absorption intestinale implique un transport actif primaire (pompes), un transport actif secondaire (cotransporteurs/échangeurs) et un transport vésiculaire (endo/exocytose).", ["Transport actif primaire", "Transport actif secondaire", "Transport vésiculaire", "Diffusion simple uniquement"]),
    single("Quelle enzyme fournit la plus grande part de la digestion des glucides ?", "B", "L'amylase pancréatique assure 95 % de l'activité glycolytique, contre seulement 5 % pour l'amylase salivaire.", ["L'amylase salivaire (95 %)", "L'amylase pancréatique (95 %)", "La lactase", "La saccharase"]),
    single("Sous quelle forme la majorité du glucose est-elle absorbée au pôle apical de l'entérocyte ?", "A", "Le glucose est absorbé au pôle apical par cotransport actif secondaire avec le Na+ (SGLT).", ["Cotransport actif avec le Na+", "Diffusion simple", "Endocytose médiée par récepteur", "Diffusion facilitée uniquement"]),
    single("Quel transporteur assure la sortie du glucose au pôle basal de l'entérocyte vers le sang ?", "C", "La diffusion facilitée (transporteur GLUT2) assure la sortie du glucose au pôle basal.", ["Le cotransport Na+/glucose", "La pompe Na+/K+", "La diffusion facilitée (GLUT2)", "L'endocytose"]),
    single("Quel pourcentage des glucides alimentaires est digéré par la flore de fermentation plutôt qu'absorbé ?", "B", "6 à 10 % des glucides sont digérés par la flore de fermentation dans les fèces plutôt que digérés/absorbés normalement (90-94 %).", ["Moins de 1 %", "6 à 10 %", "30 %", "50 %"]),
    single("Quelle est la forme principale d'absorption des protéines digérées ?", "A", "Les dipeptides et tripeptides constituent la forme principale d'absorption (jéjunum proximal), avant les acides aminés libres (iléon).", ["Dipeptides et tripeptides", "Protéines intégrales", "Uniquement des acides aminés libres", "Polypeptides non digérés"]),
    single("Quelle enzyme active les enzymes protéolytiques pancréatiques dans le duodénum ?", "B", "L'entérokinase, présente à la bordure en brosse, active le trypsinogène en trypsine, déclenchant la cascade d'activation des autres enzymes pancréatiques.", ["La pepsine", "L'entérokinase", "La gastrine", "La sécrétine"]),
    single("Quelle est la seule forme sous laquelle les lipides peuvent être absorbés au niveau intestinal ?", "C", "Les micelles constituent la seule forme d'absorption intestinale des lipides.", ["Les triglycérides libres", "Les chylomicrons", "Les micelles", "Les acides gras libres uniquement"]),
    single("Quel composant essentiel des micelles leur confère leur caractère amphipathique ?", "B", "Les sels biliaires, dont la face polaire est orientée vers l'extérieur et la face non polaire vers l'intérieur de la micelle.", ["Le cholestérol", "Les sels biliaires", "Les phospholipides", "Les vitamines liposolubles"]),
    single("Quelle apoprotéine caractérise les chylomicrons formés dans l'entérocyte ?", "A", "L'apoprotéine B-48 est spécifique des chylomicrons d'origine intestinale.", ["Apoprotéine B-48", "Apoprotéine B-100", "Apoprotéine A-I", "Apoprotéine E"]),
    single("Par quelle voie les chylomicrons quittent-ils l'entérocyte ?", "C", "Les chylomicrons sont exocytés au pôle basal dans le vaisseau lymphatique central (chylifère) de la villosité, empruntant la voie lymphatique.", ["La veine porte directement", "La diffusion simple vers le sang", "La voie lymphatique (chylifère central)", "Le transport actif direct vers le foie"]),
    single("Quels acides gras empruntent la voie sanguine directe plutôt que la voie lymphatique ?", "B", "Les acides gras libres à chaîne courte passent directement dans le sang, contrairement aux acides gras à longue chaîne qui empruntent la voie lymphatique.", ["Les acides gras à longue chaîne", "Les acides gras à chaîne courte", "Le cholestérol libre uniquement", "Les monoglycérides uniquement"]),
    single("Quelle vitamine régule la voie transcellulaire active de l'absorption du calcium ?", "C", "La vitamine D3 régule la voie transcellulaire active, qui assure environ 2/3 de l'absorption du calcium.", ["La vitamine A", "La vitamine K", "La vitamine D3", "La vitamine B12"]),
    single("Quelle protéine intracellulaire prévient la formation de complexes insolubles de calcium dans l'entérocyte ?", "A", "La calbindine lie le Ca2+ intracellulaire et empêche la formation de complexes insolubles.", ["La calbindine", "La ferritine", "La transferrine", "La calmoduline"]),
    single("Quelle hormone hépatique régule négativement l'absorption digestive du fer ?", "B", "L'hepcidine, libérée quand les réserves en ferritine sont suffisantes, réduit l'activité de la ferroportine et donc l'absorption du fer.", ["L'érythropoïétine", "L'hepcidine", "La transferrine", "La féroxidase"]),
    single("Où la vitamine B12 est-elle spécifiquement absorbée ?", "C", "La vitamine B12 est absorbée exclusivement à l'iléon, via le complexe avec le facteur intrinsèque de Castle.", ["Le duodénum", "Le jéjunum", "L'iléon", "Le côlon"]),
    single("Quel est le volume total de fluide absorbé quotidiennement par le tube digestif ?", "B", "Environ 8900 mL/jour, dont 8500 mL par l'intestin grêle et 400 mL par le gros intestin.", ["2600 mL/jour", "8900 mL/jour", "100 mL/jour", "15000 mL/jour"]),
  ],
  exam: { titre_fr: "Examen chronométré — Digestion et absorption", duration_seconds: 1_680 },
};

export const DIGESTION_ABSORPTION_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quelle est la surface totale d'absorption de l'intestin grêle ?", question_en: "What is the total absorptive surface of the small intestine?", answer_fr: "Environ 200 m².", answer_en: "About 200 m²." },
  { question_fr: "Par combien les valvules conniventes multiplient-elles la surface d'absorption ?", question_en: "By how much do the plicae circulares multiply the absorptive surface?", answer_fr: "Par 3.", answer_en: "By 3." },
  { question_fr: "Par combien les villosités intestinales multiplient-elles la surface d'absorption ?", question_en: "By how much do intestinal villi multiply the absorptive surface?", answer_fr: "Par 30.", answer_en: "By 30." },
  { question_fr: "Par combien les microvillosités multiplient-elles la surface d'absorption ?", question_en: "By how much do microvilli multiply the absorptive surface?", answer_fr: "Par 600.", answer_en: "By 600." },
  { question_fr: "Combien de microvillosités compte une cellule de la bordure en brosse ?", question_en: "How many microvilli does a brush-border cell have?", answer_fr: "3000 à 6000.", answer_en: "3,000 to 6,000." },
  { question_fr: "Quel pourcentage du débit cardiaque reçoit la circulation intestinale au repos ?", question_en: "What percentage of cardiac output does the intestinal circulation receive at rest?", answer_fr: "20 % (1000 mL/min).", answer_en: "20% (1000 mL/min)." },
  { question_fr: "Quelle est la voie de drainage des chylomicrons après absorption intestinale ?", question_en: "What is the drainage pathway of chylomicrons after intestinal absorption?", answer_fr: "Chylifère central → canal thoracique → circulation veineuse → cœur → circulation artérielle → tissu adipeux → foie.", answer_en: "Central lacteal → thoracic duct → venous circulation → heart → arterial circulation → adipose tissue → liver." },
  { question_fr: "Quel cotransporteur assure l'absorption apicale du glucose et du galactose ?", question_en: "Which cotransporter mediates apical absorption of glucose and galactose?", answer_fr: "Le cotransport Na+/glucose (SGLT1).", answer_en: "The Na+/glucose cotransporter (SGLT1)." },
  { question_fr: "Quel monosaccharide est absorbé par diffusion facilitée au pôle apical, contrairement au glucose ?", question_en: "Which monosaccharide is absorbed by facilitated diffusion at the apical pole, unlike glucose?", answer_fr: "Le fructose.", answer_en: "Fructose." },
  { question_fr: "Quel organe reçoit en premier les monosaccharides absorbés via la veine porte ?", question_en: "Which organ first receives absorbed monosaccharides via the portal vein?", answer_fr: "Le foie.", answer_en: "The liver." },
  { question_fr: "Quel pourcentage des protéines alimentaires la pepsine digère-t-elle ?", question_en: "What percentage of dietary protein does pepsin digest?", answer_fr: "10 à 20 %.", answer_en: "10 to 20%." },
  { question_fr: "Quel pourcentage des protéines alimentaires les enzymes pancréatiques digèrent-elles ?", question_en: "What percentage of dietary protein do pancreatic enzymes digest?", answer_fr: "50 %.", answer_en: "50%." },
  { question_fr: "Quelle proportion des protéines absorbées l'est sous forme de dipeptides/tripeptides ?", question_en: "What proportion of absorbed protein is absorbed as dipeptides/tripeptides?", answer_fr: "70 %.", answer_en: "70%." },
  { question_fr: "Où se situe l'absorption principale des dipeptides et tripeptides ?", question_en: "Where does the main absorption of dipeptides and tripeptides occur?", answer_fr: "Dans la première partie du jéjunum.", answer_en: "In the first part of the jejunum." },
  { question_fr: "Où se situe l'absorption secondaire des acides aminés libres ?", question_en: "Where does the secondary absorption of free amino acids occur?", answer_fr: "Dans l'iléon.", answer_en: "In the ileum." },
  { question_fr: "Quel est l'apport alimentaire quotidien recommandé en lipides ?", question_en: "What is the recommended daily dietary lipid intake?", answer_fr: "1 g/kg de poids corporel/jour.", answer_en: "1 g/kg body weight/day." },
  { question_fr: "Quelle enzyme lipolytique est la plus importante et nécessite l'action des sels biliaires ?", question_en: "Which lipolytic enzyme is most important and requires bile salt action?", answer_fr: "La lipase pancréatique.", answer_en: "Pancreatic lipase." },
  { question_fr: "Combien de molécules lipidiques compose une micelle typique ?", question_en: "How many lipid molecules compose a typical micelle?", answer_fr: "20 à 30 molécules.", answer_en: "20 to 30 molecules." },
  { question_fr: "Quelle proportion des triglycérides compose les chylomicrons ?", question_en: "What proportion of chylomicrons is made of triglycerides?", answer_fr: "90 %.", answer_en: "90%." },
  { question_fr: "Où se déroule la re-synthèse des lipides (triglycérides, cholestérol estérifié, phospholipides) dans l'entérocyte ?", question_en: "Where does lipid re-synthesis (triglycerides, esterified cholesterol, phospholipids) occur in the enterocyte?", answer_fr: "Au niveau du réticulum endoplasmique.", answer_en: "At the endoplasmic reticulum." },
  { question_fr: "Quel est l'apport total de fluide au tube digestif chaque jour (ingéré + sécrétions) ?", question_en: "What is the total daily fluid load to the digestive tract (ingested + secretions)?", answer_fr: "9000 mL/jour.", answer_en: "9000 mL/day." },
  { question_fr: "Quel volume de fluide est éliminé quotidiennement dans les fèces ?", question_en: "What volume of fluid is eliminated daily in feces?", answer_fr: "Seulement 100 mL/jour.", answer_en: "Only 100 mL/day." },
  { question_fr: "Combien de molécules d'eau sont absorbées par molécule de glucose via le cotransport intestinal ?", question_en: "How many water molecules are absorbed per glucose molecule via intestinal cotransport?", answer_fr: "Environ 250.", answer_en: "About 250." },
  { question_fr: "Quelle hormone stimule l'absorption colique de NaCl en cas de déshydratation ?", question_en: "Which hormone stimulates colonic NaCl absorption during dehydration?", answer_fr: "L'aldostérone.", answer_en: "Aldosterone." },
  { question_fr: "Quelle proportion de l'apport alimentaire en calcium est effectivement absorbée ?", question_en: "What proportion of dietary calcium intake is actually absorbed?", answer_fr: "30 à 80 %.", answer_en: "30 to 80%." },
  { question_fr: "Quelle vitamine régule la voie active transcellulaire d'absorption du calcium ?", question_en: "Which vitamin regulates the active transcellular calcium absorption pathway?", answer_fr: "La vitamine D3.", answer_en: "Vitamin D3." },
  { question_fr: "Quelle proportion de l'apport alimentaire en fer est effectivement absorbée ?", question_en: "What proportion of dietary iron intake is actually absorbed?", answer_fr: "Seulement 5 à 10 %.", answer_en: "Only 5 to 10%." },
  { question_fr: "Quelles substances réduisent le Fe3+ en Fe2+ absorbable au niveau intestinal ?", question_en: "Which substances reduce Fe3+ to absorbable Fe2+ at the intestinal level?", answer_fr: "Le HCl, la vitamine C et la fer-réductase de la bordure en brosse.", answer_en: "HCl, vitamin C, and brush-border ferric reductase." },
  { question_fr: "Sous quelle forme le fer est-il stocké dans l'entérocyte et le foie ?", question_en: "In what form is iron stored in the enterocyte and liver?", answer_fr: "Sous forme de ferritine (Fe3+ + apoferritine).", answer_en: "As ferritin (Fe3+ + apoferritin)." },
  { question_fr: "Quel canal transporte le fer hors de l'entérocyte au pôle basal ?", question_en: "Which channel transports iron out of the enterocyte at the basal pole?", answer_fr: "La ferroportine.", answer_en: "Ferroportin." },
  { question_fr: "Quelle protéine plasmatique transporte le fer vers le foie et la moelle osseuse ?", question_en: "Which plasma protein transports iron to the liver and bone marrow?", answer_fr: "La transferrine.", answer_en: "Transferrin." },
  { question_fr: "Par quel mécanisme les vitamines liposolubles (A, D, E, K) sont-elles absorbées ?", question_en: "By what mechanism are fat-soluble vitamins (A, D, E, K) absorbed?", answer_fr: "Par simple diffusion, incluses dans les micelles.", answer_en: "By simple diffusion, included in micelles." },
  { question_fr: "Par quel complexe la vitamine B12 est-elle absorbée à l'iléon ?", question_en: "Through what complex is vitamin B12 absorbed in the ileum?", answer_fr: "Le complexe vitamine B12 / facteur intrinsèque de Castle, par endocytose médiée par récepteur.", answer_en: "The vitamin B12 / intrinsic factor complex, via receptor-mediated endocytosis." },
  { question_fr: "Sous quelle forme la vitamine B12 est-elle exocytée au pôle basal de l'entérocyte ?", question_en: "In what form is vitamin B12 exocytosed at the basal pole of the enterocyte?", answer_fr: "Sous forme de complexe B12/transcobalamine II.", answer_en: "As a B12/transcobalamin II complex." },
];

const GI_MOTILITY_COURSE = `# Lecture 14 — Motilité gastro-intestinale

## 1. Particularités du muscle lisse viscéral

- Organisation en couches : longitudinale externe, circulaire interne, et oblique profonde (uniquement gastrique).
- Le **plexus myentérique d'Auerbach** est situé entre les couches longitudinale et circulaire (innervation intrinsèque). Les jonctions sont diffuses : une varicosité contenant le neurotransmetteur influence plusieurs fibres musculaires.
- Organisation de type **syncytial** : les fibres musculaires conduisent l'excitation via des **connexons** (jonctions gap), qui se propage en direction crânio-caudale, produisant une contraction unitaire de la couche musculaire.
- **Automatisme fonctionnel** assuré par les cellules pacemaker de Cajal (au niveau du plexus myentérique d'Auerbach), couplées aux fibres musculaires lisses par jonctions gap.
- **Tonus de base (mécanisme myogénique)** : état contractile permanent basé sur des oscillations du potentiel de repos autour de -50 mV.
- Le contrôle de la contraction est à la fois nerveux et hormonal.

## 2. Types de mouvements gastro-intestinaux

- **Mouvements associés à la digestion et l'absorption** : toniques (contraction des sphincters digestifs, empêchant le passage prématuré du contenu intestinal), de segmentation (mélange), péristaltiques (propulsion).
- **Mouvements associés à l'état de jeûne** : gastriques (contractions péristaltiques de « faim »), intestinaux (complexes moteurs migrants, base des contractions péristaltiques périodiques pour l'évacuation gastro-intestinale complète).

### 2.1 Mouvements péristaltiques
- Caractéristiques du muscle lisse tubulaire syncytial (canaux biliaires, canaux glandulaires, uretères, etc.).
- Propagent le contenu intestinal sur une distance de 5-10 cm, d'un point au point le plus proche, en direction crânio-caudale.
- Déclenchés par : distension mécanique du tube digestif, irritation chimique/physique de la muqueuse intestinale, stimulation parasympathique intense. Coordonnés par le plexus myentérique d'Auerbach, requis pour une activité péristaltique efficace.
- **Loi de Starling de l'intestin (réflexe péristaltique)** : la distension d'un segment déclenche 1) une onde contractile (ACh/substance P), 2-3 cm de longueur, proximale au point de distension, et 2) une onde de relâchement réceptif (NO/VIP) caudale au point de distension — les mouvements péristaltiques se dirigent ainsi vers l'anus.

### 2.2 Mouvements de segmentation
- Série alternative de contractions concentriques suivies de relâchement ; une nouvelle contraction survient entre deux segments contractiles précédents.
- Provoquent une fragmentation du contenu intestinal en segments de mélange et segments contractiles pour propulsion bidirectionnelle limitée.
- La fréquence est caractéristique de chaque segment intestinal (pacemaker local) et progresse pour permettre une propulsion locale.

## 3. Mécanismes de contrôle de l'activité du tube digestif

### 3.1 Mécanisme nerveux intrinsèque (système nerveux entérique, SNE)
- Réseau neuronal situé dans la paroi intestinale de l'œsophage à l'anus : **plexus myentérique d'Auerbach** et **plexus sous-muqueux de Meissner**.
- Comprend des neurones sensitifs (mécano- et chimiorécepteurs), des neurones moteurs (cellules glandulaires et couches musculaires). Établit des connexions avec la plupart des fibres motrices végétatives (sympathiques + parasympathiques).
- Rôles : assure l'autonomie fonctionnelle du contrôle moteur et sécrétoire digestif ; établit des connexions avec le SNC via le système nerveux autonome périphérique (**axe intestin-cerveau** : effet des émotions/anxiété sur la motilité, perception de la distension, satiété, nausée, douleur) ; médie les réflexes locaux initiés par le mécanisme nerveux extrinsèque (réflexes vago-vagaux longs : distension mécanique, facteurs irritants locaux, produits de digestion lipidique/protéique).
- **Plexus d'Auerbach** (entre les couches longitudinale et circulaire) : contrôle la motilité (couches musculaires, sphincters digestifs).
- **Plexus de Meissner** (sous-muqueux) : contrôle la sécrétion et l'absorption, le flux sanguin local, la motilité de la couche musculaire de la muqueuse.
- Neurotransmetteur principal : ACh (effet stimulateur) ; noradrénaline et NO (effet inhibiteur). Co-transmetteurs principaux : substance P, VIP.

### 3.2 Mécanisme nerveux extrinsèque
- **Innervation parasympathique** : origine bulbaire (nerfs vagues X) et cornes latérales S2-S4 (nerfs pelviens). NT : ACh, récepteurs muscariniques. Rôle : contraction de la couche musculaire, relâchement des sphincters digestifs, stimulation de la sécrétion digestive, vasodilatation. Le nerf vague (75 % de fibres afférentes, 25 % efférentes, réflexes vago-vagaux longs) innerve l'estomac, l'intestin grêle et la moitié droite du côlon ; les nerfs pelviens innervent la moitié gauche du côlon et le rectum.
- **Innervation sympathique** : origine cornes latérales T5-L3 → ganglions paravertébraux → nerfs sympathiques. NT : noradrénaline, récepteurs adrénergiques. Rôle : relâchement de la couche musculaire, contraction des sphincters, inhibition de la sécrétion digestive, vasoconstriction. Distribution : plexus cœliaque (T5-T9, estomac/duodénum), plexus mésentérique supérieur (T9-L1, intestin grêle/moitié droite du côlon), plexus mésentérique inférieur (T12-L3, moitié gauche du côlon/rectum).

### 3.3 Mécanismes endocrine et paracrine
- **Hormones gastro-intestinales** (cellules endocrines de la muqueuse digestive) :
  - **Gastrine** (estomac, duodénum) : sécrétion acide gastrique↑, motilité gastro-intestinale↑.
  - **CCK** (duodénum, jéjunum) : motilité gastrique↓, sécrétion des enzymes pancréatiques↑, motilité des voies biliaires↑.
  - **Sécrétine** (duodénum) : sécrétion pancréatique/biliaire de HCO₃⁻↑, sécrétion acide gastrique↓, motilité gastro-intestinale↓.
  - **Motiline** (duodénum, jéjunum) : motilité intestinale↑.
- **Amines biogènes (mécanisme paracrine)** :
  - **Somatostatine** (estomac, intestin) : inhibe la libération des hormones gastro-intestinales (gastrine → sécrétion/motilité gastrique↓ ; sécrétine → sécrétion pancréatique↓ ; motiline → motilité intestinale↓).
  - **Histamine** (estomac) : sécrétion acide gastrique↑.
  - **Sérotonine** (intestin) : motilité et sécrétion intestinale↑.

## 4. Mastication

- **Définition** : traitement mécanique et mélange avec la salive des aliments introduits dans la bouche → formation du **bol alimentaire**.
- Composante active : dents, mandibule, articulation temporo-mandibulaire, muscles masticateurs (nerf V), muscles de la langue (nerf XII), muscles oro-faciaux (nerf VII). Rôles fonctionnels : dents (broyage, surface occlusale), muscles masticateurs (mouvements mandibulaires, occlusion), langue (propulsion des aliments sur la surface de broyage), muscles oro-faciaux (maintien de la salive et des aliments dans la bouche).
- **Réflexe masticateur (myotatique)** : succession de réflexes inconditionnés d'abaissement/élévation de la mandibule, soutenus par un contrôle volontaire.
  1. **Réflexe myotatique** : ouverture volontaire de la bouche → étirement du muscle masséter → fibres sensitives Ia du nerf V → noyau moteur pontique du nerf V → fibres motrices somatiques du nerf V → contraction du masséter → élévation de la mâchoire.
  2. **Réflexe myotatique inversé** : contraction du masséter → étirement de l'organe tendineux de Golgi → fibres sensitives Ib du nerf V → noyau moteur pontique → relâchement du masséter → abaissement de la mandibule.
- Contrôle cortical volontaire : aire frontale 4 → tractus cortico-nucléaire → noyau moteur pontique du V (mouvements mandibulaires), VII (coordination oro-faciale), XII (coordination linguale).
- **Valeur fonctionnelle de la mastication** : 1) digestive (préparation mécanique/chimique des aliments) ; 2) trophique pour la cavité buccale (développement des os faciaux, stimulation de la sécrétion salivaire, auto-nettoyage buccal, perception olfactive/gustative) ; 3) trophique pour le tube digestif (intégrité mécanique, stimulation réflexe de la sécrétion et de la motilité digestive).

## 5. Déglutition

- **Définition** : processus mécanique en 3 stades (buccal, pharyngé, œsophagien) déplaçant le bol alimentaire de la bouche à l'estomac via le pharynx et l'œsophage.

### 5.1 Stade buccal (≈0,3 s, volontaire)
- Élévation de la pointe de la langue → élévation de la partie antérieure de la langue (contraction des muscles linguaux) → élargissement de l'isthme bucco-pharyngé (relâchement des piliers du voile, élévation des replis palatins) → aspiration pharyngée du bol alimentaire (pression pharyngée négative) → passage à travers l'isthme bucco-pharyngé.

### 5.2 Stade pharyngé (1-2 s, automatique, involontaire)
- Fermeture de la cavité buccale (fermeture de l'isthme bucco-pharyngé, contraction prolongée des muscles de la langue et du voile).
- Fermeture du larynx (élévation du larynx, rétrécissement de la glotte, épiglotte recouvrant la glotte).
- Fermeture de la cavité nasale.
- Ouverture de l'œsophage, contraction des muscles pharyngés — pression propulsive de 70-100 cm H₂O.

### 5.3 Stade œsophagien (5-7 s, involontaire)
- Relâchement transitoire du sphincter œsophagien supérieur (SOS) → propagation du bol alimentaire par ondes péristaltiques → relâchement réceptif transitoire du sphincter œsophagien inférieur (SOI) et de l'estomac.
- **Ondes péristaltiques primaires** : déclenchées par mécanisme vagal, débutent avec le relâchement du SOS induit par le bol alimentaire, se terminent avec le relâchement réceptif du SOI.
- **Ondes péristaltiques secondaires** : déclenchées par le plexus myentérique d'Auerbach, débutent au niveau de la distension œsophagienne lorsque l'onde primaire n'a pas suffi à faire progresser le bol alimentaire.
- **SOS** : contraction tonique, pression 50 mmHg — empêche l'entrée d'air dans l'œsophage (aérophagie) et la régurgitation/aspiration laryngée.
- **SOI** : contraction tonique, pression 20 mmHg — arrête temporairement la progression du bol, prévient le reflux gastro-œsophagien (œsophagite de reflux si défaillant).

### 5.4 Régulation de la déglutition
- **Mécanisme nerveux intrinsèque** : plexus myentérique d'Auerbach — inhibe le centre respiratoire, inhibe le centre masticateur, déclenche les réflexes salivaire/lacrymal/vasomoteur associés à la déglutition d'un gros bol alimentaire.
- **Mécanisme nerveux extrinsèque** : centre de déglutition bulbaire — coordonne le péristaltisme œsophagien moyen et inférieur ainsi que le SOI. Zones réflexogènes : isthme bucco-pharyngé stimulé par les particules salivaires/matière humide de déglutition ; distension mécanique œsophagienne. Nerfs V, IX, X (V → muscles masséters, VII → muscles mimiques, XII → muscles linguaux, IX → muscles pharyngés, X → muscles œsophagiens).

## 6. Fonctions motrices de l'estomac

### 6.1 Contractions de la faim
- Caractérisent l'état de jeûne, surviennent 12-24 h après la vidange gastrique complète.
- Contractions péristaltiques rythmiques dans le corps de l'estomac qui fusionnent en une contraction tétanique continue durant 2-3 min.
- En période de jeûne prolongé, intensité maximale à 3-4 jours, puis affaiblissement progressif.
- Favorisées par l'hypoglycémie : excitabilité gastrique (« crampes de faim »), stimulation de la libération de ghréline par la muqueuse de l'antre pylorique → stimulation du centre de la faim hypothalamique.

### 6.2 Fonction de stockage gastrique
- **Relaxation réceptive** : ajustement du tonus musculaire au contenu gastrique par réflexe vago-vagal + plexus myentérique d'Auerbach ; relâchement transitoire de la région proximale de l'estomac lors du passage du bol alimentaire à travers le SOI.
- Distension gastrique jusqu'à 1000-1500 mL sans augmentation de la pression intragastrique. Les aliments restent ~1 h dans l'estomac, permettant la stratification du contenu gastrique dans l'ordre défini pour l'évacuation et le temps nécessaire à la digestion gastrique.

### 6.3 Activité contractile associée au mélange gastrique
- **Contractions toniques** : contraction des fibres longitudinales, pression intragastrique 6-10 cm H₂O, mouvement des aliments vers le pylore, évacuation gastrique des liquides.
- **Contractions péristaltiques (rétropulsives)** : contraction des fibres circulaires, débutent dans la moitié supérieure de l'estomac, fréquence 3-4 c/min générée par le pacemaker gastrique (corps de l'estomac), se propagent vers le pylore avec une intensité décroissante insuffisante pour vaincre la résistance du sphincter pylorique. Rôles : 1) retour du contenu gastrique vers l'antre pylorique → fragmentation du contenu solide en petites particules ; 2) prévention du reflux duodéno-gastrique.

### 6.4 Activité contractile associée à la vidange gastrique
- **Mouvements péristaltiques propulsifs** : exercent une pression de 50-70 cm H₂O (« pompe pylorique ») qui vainc la résistance du sphincter pylorique. Sphincter pylorique relâché par le nerf vague (ACh) et le plexus d'Auerbach (NO/VIP). L'évacuation intermittente en petits volumes (1-3 mL) de chyme gastrique permet la neutralisation de l'acidité duodénale et la digestion des nutriments au niveau duodénal. Évacuation complète en 3-4 h.
- Relaxation réceptive du bulbe duodénal permettant l'accumulation du chyme gastrique dans le duodénum.

### 6.5 Régulation de l'évacuation gastrique
- **Mécanisme nerveux extrinsèque (vague)** : distension gastrique → stimulateur.
- **Mécanisme nerveux intrinsèque (plexus d'Auerbach)** : distension gastrique → stimulateur ; distension et hypertonie duodénale → inhibiteur.
- **Mécanisme endocrine (rétrocontrôle négatif)** : produits de digestion protéique au niveau gastrique → stimulateur (sécrétion de gastrine) ; pH duodénal (3,5) → inhibiteur (sécrétion de sécrétine) ; produits de digestion lipidique au niveau duodénal → inhibiteur (sécrétion de CCK).

## 7. Fonction motrice de l'intestin grêle

### 7.1 Mouvements de mélange et d'absorption
- Mouvements des fibres musculaires des villosités : le relâchement favorise l'absorption intestinale, la contraction propulse le contenu villositaire vers la circulation sous-muqueuse.
- Mouvements de la musculaire muqueuse : plis de la muqueuse intestinale, mouvements de mélange près de la surface d'absorption.
- **Mouvements de segmentation** : fréquence progressive permettant la propulsion locale du contenu intestinal, mélange du chyme intestinal ; fréquence caractéristique par segment (duodénum 12/min, jéjunum 10/min, iléon 6-8/min).

### 7.2 Mouvements propulsifs associés à l'évacuation
- **Complexe moteur migrant (CMM)** = activité myoélectrique périodique : survient en état de jeûne et post-absorption, contractions périodiques à intervalles d'environ 90 min, de l'antre pylorique au côlon. Stimulé par la motiline, inhibé par l'érythromycine. Assure l'évacuation complète de l'intestin grêle (aliments non digérés, sécrétions, bactéries, cellules épithéliales), inhibe la migration bactérienne du côlon vers l'intestin grêle, permet un passage intestinal en 3-5 h. Peut survenir à n'importe quel niveau de l'intestin grêle, mouvement vers l'anus.

### 7.3 Régulation de la motilité de l'intestin grêle
- Mécanisme nerveux intrinsèque (rôle principal, autonomie fonctionnelle) ; mécanisme nerveux extrinsèque (rôle secondaire, parasympathique stimulateur, sympathique inhibiteur) ; mécanisme endocrine (rôle mineur, gastrine/CCK/motiline stimulateurs, sécrétine inhibitrice).
- **Distension mécanique — effets gastro-intestinaux** : réflexe gastro-entérique (la distension gastrique augmente la motilité de l'intestin grêle, le chyme progresse jusqu'à la valve iléo-cæcale) ; réflexe gastro-iléal (une nouvelle distension gastrique augmente la motilité iléale et relâche le sphincter iléo-cæcal, poussant le chyme dans le cæcum).

## 8. Fonction motrice du gros intestin

- **Relaxation réceptive au niveau du cæcum** : permet l'accumulation du chyme intestinal sans augmentation de la pression intestinale.
- **Mouvements de segmentation (haustrations)** : contractions combinées des fibres circulaires et longitudinales (tænia), fréquence 3-10 c/h, divisent la lumière intestinale en segments ovoïdes = **haustrations**.
- **Mouvements anti-propulsifs (péristaltisme inversé)** : rétention du contenu au niveau du côlon proximal, facilitant l'absorption de NaCl et d'eau. Fonction de mélange et d'absorption spécifique au **côlon proximal**.
- **Fonction de stockage temporaire**, spécifique au **côlon distal** : permet un passage intestinal de 8-15 h. Haustrations : fréquence 11-17 c/h. La fréquence décroissante des mouvements de segmentation (propulsion locale) permet l'absorption complète des fluides dans le côlon proximal.
- **Mouvements de « transport de masse »** : contractions péristaltiques groupées très fortes, 1-3 fois/jour, assurent l'évacuation complète du côlon, fortement influencées par les émotions et les stimuli excitateurs conditionnés.

## 9. Défécation

- **Définition** : évacuation du contenu rectal, par réflexe recto-sphinctérien et contrôle volontaire.
- **Réflexe myentérique intrinsèque** : efficacité réduite.
- **Réflexe parasympathique extrinsèque** : distension mécanique du rectum, pression intra-rectale à 20 mmHg (« appel à la défécation ») → centre spinal anal (cornes latérales S2-S4) → nerfs pelviens → ondes péristaltiques dans le côlon et le rectum, propulsion du contenu rectal vers l'anus, relâchement du sphincter anal interne.
- **Temporisation de la défécation** : 1) contraction volontaire du sphincter anal externe ; 2) relâchement adaptatif du rectum (plexus myentérique d'Auerbach + fibres sympathiques) — mouvements anti-péristaltiques rectaux, contraction du sphincter anal interne, accumulation des matières fécales (pression intra-rectale 40-50 mmHg) via le centre spinal anal (cornes latérales L2-L4) et les nerfs hypogastriques.
- **Contrôle volontaire** : complet à partir du 15ᵉ mois de vie. Cortex cérébral → contraction rectale + relâchement du sphincter interne (cornes antérieures S2-S4) et contraction/relâchement volontaire du sphincter externe (nerfs pudendaux). L'acte de défécation implique aussi une inhalation profonde + fermeture de la glotte, contraction des muscles abdominaux, relâchement du plancher pelvien.

## Points à retenir
- Le muscle lisse digestif est de type syncytial unitaire, avec automatisme propre (cellules de Cajal) et contrôle nerveux/hormonal surajouté.
- Trois mécanismes de contrôle : nerveux intrinsèque (SNE, autonomie fonctionnelle), nerveux extrinsèque (parasympathique stimulateur, sympathique inhibiteur), endocrine/paracrine (gastrine, CCK, sécrétine, motiline, somatostatine).
- Déglutition : 3 stades (buccal volontaire, pharyngé et œsophagien involontaires), coordination bulbaire, ondes péristaltiques primaires/secondaires.
- Estomac : relaxation réceptive (stockage), contractions rétropulsives (mélange), pompe pylorique (vidange), régulation par gastrine/sécrétine/CCK.
- Intestin grêle : segmentation (mélange, digestion/absorption) vs complexe moteur migrant (évacuation en période de jeûne, stimulé par la motiline).
- Côlon : haustrations et mouvements anti-propulsifs (proximal, absorption) vs stockage et transport de masse (distal, évacuation).
- Défécation : réflexe parasympathique involontaire, temporisé par un contrôle volontaire cortical complet dès 15 mois.`;

export const GI_MOTILITY_LEARNING: LibraryLearningSeed = {
  resource: {
    resource_type: "course",
    titre_fr: "Cours condensé — Motilité gastro-intestinale",
    source_label: "Physiologie — UMFT Timisoara, Lecture 14",
    content_fr: GI_MOTILITY_COURSE,
  },
  qcm: [
    single("Quel type d'organisation cellulaire caractérise le muscle lisse digestif ?", "B", "Le muscle lisse digestif est de type syncytial, les fibres conduisant l'excitation via des connexons (jonctions gap).", ["Multi-unitaire indépendant", "Syncytial (unitaire)", "Strié squelettique", "Cardiaque"]),
    single("Où se situent les cellules pacemaker de Cajal responsables de l'automatisme digestif ?", "C", "Les cellules de Cajal se situent au niveau du plexus myentérique d'Auerbach, couplées au muscle lisse par jonctions gap.", ["Dans le plexus sous-muqueux de Meissner", "Dans la muqueuse intestinale", "Dans le plexus myentérique d'Auerbach", "Dans la moelle épinière"]),
    single("Autour de quelle valeur oscille le potentiel de repos responsable du tonus de base myogénique ?", "A", "Le tonus de base repose sur des oscillations du potentiel de repos autour de -50 mV.", ["-50 mV", "-90 mV", "0 mV", "-20 mV"]),
    multi("Selon la loi de Starling de l'intestin, que se passe-t-il lors de la distension d'un segment digestif ?", ["A", "B"], "La distension déclenche une onde contractile (ACh/substance P) proximale et une onde de relâchement réceptif (NO/VIP) caudale, orientant le péristaltisme vers l'anus.", ["Une onde contractile proximale (ACh/substance P)", "Une onde de relâchement caudale (NO/VIP)", "Une contraction simultanée sur tout le segment", "Un arrêt complet du péristaltisme"]),
    single("Quelle est la fonction principale des mouvements de segmentation ?", "B", "Les mouvements de segmentation fragmentent et mélangent le contenu intestinal, avec une propulsion bidirectionnelle limitée.", ["La propulsion rapide vers l'anus", "Le mélange du contenu intestinal", "L'évacuation complète du côlon", "La sécrétion enzymatique"]),
    single("Quel plexus intrinsèque contrôle principalement la motilité (couches musculaires, sphincters) ?", "A", "Le plexus myentérique d'Auerbach contrôle la motilité ; le plexus de Meissner contrôle plutôt la sécrétion et l'absorption.", ["Le plexus d'Auerbach", "Le plexus de Meissner", "Le plexus solaire", "Le plexus hypogastrique"]),
    single("Quel est l'effet du système parasympathique sur la motilité digestive ?", "C", "Le parasympathique contracte la couche musculaire, relâche les sphincters, stimule la sécrétion, et induit une vasodilatation.", ["Il relâche la couche musculaire et contracte les sphincters", "Il inhibe la sécrétion digestive", "Il contracte la couche musculaire et relâche les sphincters", "Il n'a aucun effet sur la motilité"]),
    single("Quel pourcentage des fibres du nerf vague digestif est afférent ?", "B", "75 % des fibres vagales digestives sont afférentes, 25 % efférentes, permettant les réflexes vago-vagaux longs.", ["25 %", "75 %", "50 %", "100 %"]),
    single("Quel est l'effet de la CCK sur la motilité gastrique et biliaire ?", "A", "La CCK diminue la motilité gastrique, stimule la sécrétion des enzymes pancréatiques et augmente la motilité des voies biliaires.", ["Diminue la motilité gastrique, augmente celle des voies biliaires", "Augmente la motilité gastrique uniquement", "N'a aucun effet sur la motilité", "Inhibe uniquement la sécrétion pancréatique"]),
    single("Quel est le rôle principal de la somatostatine dans la régulation gastro-intestinale ?", "B", "La somatostatine inhibe la libération des hormones gastro-intestinales (gastrine, sécrétine, motiline), réduisant sécrétion et motilité.", ["Elle stimule directement la sécrétion acide", "Elle inhibe la libération des hormones gastro-intestinales", "Elle augmente la motilité intestinale", "Elle n'a qu'un rôle digestif, non paracrine"]),
    single("Quel nerf porte les fibres motrices volontaires des muscles masticateurs ?", "C", "Le nerf V (trijumeau) innerve les muscles masticateurs.", ["Le nerf VII", "Le nerf XII", "Le nerf V", "Le nerf IX"]),
    single("Que déclenche l'étirement du muscle masséter dans le réflexe myotatique de mastication ?", "A", "L'étirement du masséter active des fibres sensitives Ia du nerf V, provoquant via le noyau pontique une contraction du masséter (élévation de la mâchoire).", ["Contraction du masséter (élévation de la mâchoire)", "Relâchement du masséter (abaissement de la mâchoire)", "Contraction du muscle temporal uniquement", "Aucun réflexe, contrôle purement volontaire"]),
    single("Combien de stades comprend la déglutition ?", "B", "La déglutition comprend 3 stades : buccal, pharyngé, œsophagien.", ["2", "3", "4", "5"]),
    single("Quel stade de la déglutition est volontaire ?", "A", "Le stade buccal (~0,3 s) est volontaire ; les stades pharyngé et œsophagien sont automatiques/involontaires.", ["Le stade buccal", "Le stade pharyngé", "Le stade œsophagien", "Aucun stade n'est volontaire"]),
    single("Quelle pression le sphincter œsophagien supérieur génère-t-il pour empêcher l'aérophagie ?", "C", "Le SOS génère une contraction tonique de 50 mmHg, empêchant l'entrée d'air dans l'œsophage.", ["10 mmHg", "20 mmHg", "50 mmHg", "100 mmHg"]),
    single("Quelle est la conséquence clinique d'une défaillance du sphincter œsophagien inférieur ?", "B", "Une défaillance du SOI (pression normale 20 mmHg) permet le reflux gastro-œsophagien, causant l'œsophagite de reflux.", ["L'aérophagie", "Le reflux gastro-œsophagien (œsophagite de reflux)", "La dysphagie oropharyngée", "L'achalasie"]),
    single("Quelle hormone stimule la libération de ghréline lors des contractions de faim ?", "C", "L'hypoglycémie stimule la libération de ghréline par la muqueuse antro-pylorique, qui active le centre hypothalamique de la faim — aucune hormone directe ne stimule la ghréline elle-même, c'est l'état hypoglycémique.", ["L'insuline", "Le glucagon", "Aucune hormone directe : c'est l'hypoglycémie qui stimule la ghréline", "La sécrétine"]),
    single("Jusqu'à quel volume l'estomac peut-il se distendre sans augmentation de pression intragastrique ?", "B", "Grâce à la relaxation réceptive, l'estomac peut se distendre jusqu'à 1000-1500 mL sans augmentation de pression.", ["500 mL", "1000-1500 mL", "3000 mL", "200 mL"]),
    single("Quelle pression génère la « pompe pylorique » pour vaincre la résistance du sphincter pylorique ?", "A", "Les mouvements péristaltiques propulsifs exercent 50-70 cm H2O, la « pompe pylorique ».", ["50-70 cm H2O", "6-10 cm H2O", "100-150 cm H2O", "5 cm H2O"]),
    single("Quel est l'effet du pH duodénal acide (3,5) sur l'évacuation gastrique ?", "C", "Le pH acide duodénal inhibe l'évacuation gastrique via la sécrétion de sécrétine.", ["Il stimule l'évacuation via la gastrine", "Il n'a aucun effet", "Il inhibe l'évacuation via la sécrétine", "Il stimule directement le sphincter pylorique"]),
    single("Quelle est la fréquence des mouvements de segmentation au niveau du duodénum ?", "A", "12 contractions par minute au duodénum, contre 10/min au jéjunum et 6-8/min à l'iléon.", ["12/min", "6/min", "20/min", "2/min"]),
    single("Quelle hormone stimule le complexe moteur migrant (CMM) de l'intestin grêle ?", "B", "La motiline stimule le CMM ; l'érythromycine (agoniste de la motiline) peut le stimuler pharmacologiquement, mais physiologiquement il est inhibé par... — la motiline reste le stimulateur physiologique principal.", ["La sécrétine", "La motiline", "La somatostatine", "La CCK"]),
    single("Quelle est la fonction des haustrations coliques ?", "C", "Les haustrations (contractions circulaires/longitudinales, 3-10 c/h) divisent la lumière colique en segments ovoïdes pour le mélange et l'absorption au côlon proximal.", ["Propulsion rapide vers le rectum", "Sécrétion d'enzymes digestives", "Mélange et absorption au côlon proximal", "Fermentation exclusive des protéines"]),
    single("À partir de quel âge le contrôle volontaire de la défécation est-il complet ?", "B", "Le contrôle volontaire complet de la défécation est acquis à partir du 15e mois de vie.", ["6 mois", "15 mois", "3 ans", "5 ans"]),
  ],
  exam: { titre_fr: "Examen chronométré — Motilité gastro-intestinale", duration_seconds: 2_000 },
};

export const GI_MOTILITY_FLASHCARDS: LibraryCardSeed[] = [
  { question_fr: "Quel type de jonction permet la conduction syncytiale de l'excitation dans le muscle lisse digestif ?", question_en: "What type of junction allows syncytial conduction of excitation in digestive smooth muscle?", answer_fr: "Les connexons (jonctions gap).", answer_en: "Connexons (gap junctions)." },
  { question_fr: "Quelles cellules assurent l'automatisme fonctionnel du muscle lisse digestif ?", question_en: "Which cells provide the functional automaticity of digestive smooth muscle?", answer_fr: "Les cellules pacemaker de Cajal.", answer_en: "Cajal pacemaker cells." },
  { question_fr: "Quels neurotransmetteurs déclenchent l'onde contractile proximale du réflexe péristaltique ?", question_en: "Which neurotransmitters trigger the proximal contractile wave of the peristaltic reflex?", answer_fr: "L'acétylcholine et la substance P.", answer_en: "Acetylcholine and substance P." },
  { question_fr: "Quels neurotransmetteurs déclenchent l'onde de relâchement caudale du réflexe péristaltique ?", question_en: "Which neurotransmitters trigger the caudal relaxation wave of the peristaltic reflex?", answer_fr: "Le NO et le VIP.", answer_en: "NO and VIP." },
  { question_fr: "Quel plexus contrôle principalement la sécrétion et l'absorption intestinale ?", question_en: "Which plexus mainly controls intestinal secretion and absorption?", answer_fr: "Le plexus sous-muqueux de Meissner.", answer_en: "Meissner's submucous plexus." },
  { question_fr: "Quel effet le système sympathique a-t-il sur les sphincters digestifs ?", question_en: "What effect does the sympathetic system have on digestive sphincters?", answer_fr: "Il les contracte (et relâche la couche musculaire).", answer_en: "It contracts them (and relaxes the muscle layer)." },
  { question_fr: "Quel plexus sympathique innerve l'estomac et le duodénum ?", question_en: "Which sympathetic plexus innervates the stomach and duodenum?", answer_fr: "Le plexus cœliaque (T5-T9).", answer_en: "The celiac plexus (T5-T9)." },
  { question_fr: "Quelle hormone digestive augmente la sécrétion acide gastrique et la motilité gastro-intestinale ?", question_en: "Which digestive hormone increases gastric acid secretion and GI motility?", answer_fr: "La gastrine.", answer_en: "Gastrin." },
  { question_fr: "Quelle hormone stimule la sécrétion pancréatique de HCO3- et inhibe la motilité gastro-intestinale ?", question_en: "Which hormone stimulates pancreatic HCO3- secretion and inhibits GI motility?", answer_fr: "La sécrétine.", answer_en: "Secretin." },
  { question_fr: "Quelle hormone stimule spécifiquement la motilité intestinale en période de jeûne ?", question_en: "Which hormone specifically stimulates intestinal motility during fasting?", answer_fr: "La motiline.", answer_en: "Motilin." },
  { question_fr: "Quel nerf crânien porte les fibres motrices de la coordination oro-faciale lors de la mastication ?", question_en: "Which cranial nerve carries the motor fibers for orofacial coordination during mastication?", answer_fr: "Le nerf VII.", answer_en: "Nerve VII." },
  { question_fr: "Quelle est la durée du stade buccal de la déglutition ?", question_en: "What is the duration of the oral stage of swallowing?", answer_fr: "Environ 0,3 seconde.", answer_en: "About 0.3 second." },
  { question_fr: "Quelle est la durée du stade pharyngé de la déglutition ?", question_en: "What is the duration of the pharyngeal stage of swallowing?", answer_fr: "1 à 2 secondes.", answer_en: "1 to 2 seconds." },
  { question_fr: "Quelle est la durée du stade œsophagien de la déglutition ?", question_en: "What is the duration of the esophageal stage of swallowing?", answer_fr: "5 à 7 secondes.", answer_en: "5 to 7 seconds." },
  { question_fr: "Quelle pression le sphincter œsophagien inférieur génère-t-il au repos ?", question_en: "What pressure does the lower esophageal sphincter generate at rest?", answer_fr: "20 mmHg.", answer_en: "20 mmHg." },
  { question_fr: "Qu'est-ce qui déclenche les ondes péristaltiques secondaires de l'œsophage ?", question_en: "What triggers secondary esophageal peristaltic waves?", answer_fr: "Une distension œsophagienne persistante, via le plexus myentérique d'Auerbach.", answer_en: "Persistent esophageal distension, via the myenteric plexus of Auerbach." },
  { question_fr: "Après combien d'heures de jeûne apparaissent les contractions de faim gastriques ?", question_en: "After how many hours of fasting do gastric hunger contractions appear?", answer_fr: "12 à 24 heures après la vidange gastrique complète.", answer_en: "12 to 24 hours after complete gastric emptying." },
  { question_fr: "Quel mécanisme permet à l'estomac de se distendre sans augmenter sa pression interne ?", question_en: "What mechanism allows the stomach to distend without increasing internal pressure?", answer_fr: "La relaxation réceptive.", answer_en: "Receptive relaxation." },
  { question_fr: "Où se situe le pacemaker gastrique générant les contractions péristaltiques ?", question_en: "Where is the gastric pacemaker that generates peristaltic contractions located?", answer_fr: "Dans le corps de l'estomac.", answer_en: "In the body of the stomach." },
  { question_fr: "Quelle est la fréquence des contractions péristaltiques rétropulsives gastriques ?", question_en: "What is the frequency of gastric retropulsive peristaltic contractions?", answer_fr: "3 à 4 contractions par minute.", answer_en: "3 to 4 contractions per minute." },
  { question_fr: "Quel volume de chyme est évacué à chaque contraction de la pompe pylorique ?", question_en: "What volume of chyme is evacuated with each pyloric pump contraction?", answer_fr: "1 à 3 mL.", answer_en: "1 to 3 mL." },
  { question_fr: "En combien de temps l'estomac s'évacue-t-il complètement ?", question_en: "How long does complete gastric emptying take?", answer_fr: "3 à 4 heures.", answer_en: "3 to 4 hours." },
  { question_fr: "Quelle est la fréquence des mouvements de segmentation au niveau du jéjunum ?", question_en: "What is the frequency of segmentation movements in the jejunum?", answer_fr: "10 par minute.", answer_en: "10 per minute." },
  { question_fr: "Quelle est la fréquence des mouvements de segmentation au niveau de l'iléon ?", question_en: "What is the frequency of segmentation movements in the ileum?", answer_fr: "6 à 8 par minute.", answer_en: "6 to 8 per minute." },
  { question_fr: "À quel intervalle se répète le complexe moteur migrant ?", question_en: "At what interval does the migrating motor complex repeat?", answer_fr: "Environ toutes les 90 minutes.", answer_en: "About every 90 minutes." },
  { question_fr: "Quel médicament peut stimuler pharmacologiquement le complexe moteur migrant ?", question_en: "Which drug can pharmacologically stimulate the migrating motor complex?", answer_fr: "L'érythromycine (agoniste des récepteurs à la motiline).", answer_en: "Erythromycin (motilin receptor agonist)." },
  { question_fr: "Quel réflexe augmente la motilité de l'intestin grêle lors d'une distension gastrique ?", question_en: "Which reflex increases small intestine motility during gastric distension?", answer_fr: "Le réflexe gastro-entérique.", answer_en: "The gastroenteric reflex." },
  { question_fr: "Quel réflexe relâche le sphincter iléo-cæcal lors d'une nouvelle distension gastrique ?", question_en: "Which reflex relaxes the ileocecal sphincter upon renewed gastric distension?", answer_fr: "Le réflexe gastro-iléal.", answer_en: "The gastroileal reflex." },
  { question_fr: "Comment appelle-t-on les segments ovoïdes formés par les mouvements de segmentation du côlon ?", question_en: "What are the ovoid segments formed by colonic segmentation movements called?", answer_fr: "Les haustrations.", answer_en: "Haustrations." },
  { question_fr: "Quelle partie du côlon assure la fonction de mélange et d'absorption ?", question_en: "Which part of the colon performs the mixing and absorption function?", answer_fr: "Le côlon proximal.", answer_en: "The proximal colon." },
  { question_fr: "Quelle partie du côlon assure la fonction de stockage temporaire des matières fécales ?", question_en: "Which part of the colon performs the temporary storage function for feces?", answer_fr: "Le côlon distal.", answer_en: "The distal colon." },
  { question_fr: "Combien de fois par jour surviennent les mouvements de transport de masse ?", question_en: "How many times per day do mass movement contractions occur?", answer_fr: "1 à 3 fois par jour.", answer_en: "1 to 3 times per day." },
  { question_fr: "À quelle pression intra-rectale apparaît le « besoin de déféquer » ?", question_en: "At what intrarectal pressure does the \"urge to defecate\" appear?", answer_fr: "20 mmHg.", answer_en: "20 mmHg." },
  { question_fr: "Quels nerfs portent les fibres du réflexe parasympathique de défécation ?", question_en: "Which nerves carry the fibers of the parasympathetic defecation reflex?", answer_fr: "Les nerfs pelviens (cornes latérales S2-S4).", answer_en: "The pelvic nerves (lateral horns S2-S4)." },
  { question_fr: "Quels nerfs contrôlent la contraction volontaire du sphincter anal externe ?", question_en: "Which nerves control voluntary contraction of the external anal sphincter?", answer_fr: "Les nerfs pudendaux.", answer_en: "The pudendal nerves." },
  { question_fr: "À partir de quel âge le contrôle volontaire complet de la défécation est-il acquis ?", question_en: "From what age is complete voluntary control of defecation acquired?", answer_fr: "Le 15e mois de vie.", answer_en: "The 15th month of life." },
];
