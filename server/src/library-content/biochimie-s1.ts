// Contenu officiel pré-rédigé : Biochimie, Année 1, Semestre 1.
// Même structure de chapitre que Medbyjes (titre_fr/en, description_fr/en,
// icone), portée ici par la table library_chapters.

export interface LibraryCardSeed {
  question_fr: string;
  question_en: string;
  answer_fr: string;
  answer_en: string;
}

export interface LibraryChapterSeed {
  ordre: number;
  titre_fr: string;
  titre_en: string;
  description_fr: string;
  description_en: string;
  icone: string;
  cards: LibraryCardSeed[];
}

export const BIOCHIMIE_S1: LibraryChapterSeed[] = [
  {
    ordre: 1,
    titre_fr: "Eau, pH et solutions tampons",
    titre_en: "Water, pH and Buffer Solutions",
    description_fr: "Propriétés de l'eau, équilibre acido-basique, équation de Henderson-Hasselbalch",
    description_en: "Properties of water, acid-base balance, Henderson-Hasselbalch equation",
    icone: "💧",
    cards: [
      {
        question_fr: "Quel est le pH neutre à 25°C ?",
        question_en: "What is the neutral pH at 25°C?",
        answer_fr: "7 (concentration [H+] = [OH-] = 10⁻⁷ mol/L)",
        answer_en: "7 ([H+] = [OH-] = 10⁻⁷ mol/L)",
      },
      {
        question_fr: "Quelle est l'équation de Henderson-Hasselbalch ?",
        question_en: "What is the Henderson-Hasselbalch equation?",
        answer_fr: "pH = pKa + log([A⁻]/[HA])",
        answer_en: "pH = pKa + log([A⁻]/[HA])",
      },
      {
        question_fr: "Quel est le principal système tampon du sang ?",
        question_en: "What is the main buffer system of the blood?",
        answer_fr: "Le système bicarbonate/acide carbonique (HCO₃⁻/H₂CO₃)",
        answer_en: "The bicarbonate/carbonic acid system (HCO₃⁻/H₂CO₃)",
      },
      {
        question_fr: "Que représente le pKa d'un couple acide-base ?",
        question_en: "What does the pKa of an acid-base pair represent?",
        answer_fr: "Le pH auquel les concentrations de l'acide et de sa base conjuguée sont égales",
        answer_en: "The pH at which the concentrations of the acid and its conjugate base are equal",
      },
      {
        question_fr: "Pourquoi l'eau est-elle un bon solvant biologique ?",
        question_en: "Why is water a good biological solvent?",
        answer_fr:
          "Sa polarité et sa capacité à former des liaisons hydrogène lui permettent de dissoudre les molécules polaires et ioniques",
        answer_en:
          "Its polarity and ability to form hydrogen bonds allow it to dissolve polar and ionic molecules",
      },
      {
        question_fr: "Quelle est la valeur normale du pH sanguin artériel ?",
        question_en: "What is the normal arterial blood pH range?",
        answer_fr: "Entre 7,38 et 7,42",
        answer_en: "Between 7.38 and 7.42",
      },
    ],
  },
  {
    ordre: 2,
    titre_fr: "Acides aminés et protéines",
    titre_en: "Amino Acids and Proteins",
    description_fr: "Structure des acides aminés, liaison peptidique, structures protéiques",
    description_en: "Amino acid structure, peptide bond, protein structures",
    icone: "🧬",
    cards: [
      {
        question_fr: "Combien d'acides aminés protéinogènes standards existe-t-il ?",
        question_en: "How many standard proteinogenic amino acids exist?",
        answer_fr: "20",
        answer_en: "20",
      },
      {
        question_fr: "Quel type de liaison relie deux acides aminés entre eux ?",
        question_en: "What type of bond links two amino acids together?",
        answer_fr: "La liaison peptidique (liaison amide covalente)",
        answer_en: "The peptide bond (a covalent amide bond)",
      },
      {
        question_fr: "Qu'est-ce que le point isoélectrique (pI) d'un acide aminé ?",
        question_en: "What is the isoelectric point (pI) of an amino acid?",
        answer_fr: "Le pH auquel la charge nette de la molécule est nulle",
        answer_en: "The pH at which the molecule's net charge is zero",
      },
      {
        question_fr: "Citez un acide aminé essentiel.",
        question_en: "Name an essential amino acid.",
        answer_fr:
          "Ex. : leucine, lysine, valine, thréonine — non synthétisé par l'organisme, apport alimentaire obligatoire",
        answer_en:
          "E.g. leucine, lysine, valine, threonine — not synthesized by the body, must come from the diet",
      },
      {
        question_fr: "À quel niveau de structure protéique correspondent l'hélice α et le feuillet β ?",
        question_en: "Which level of protein structure do the α-helix and β-sheet belong to?",
        answer_fr: "La structure secondaire",
        answer_en: "Secondary structure",
      },
      {
        question_fr: "Qu'est-ce que la dénaturation d'une protéine ?",
        question_en: "What is protein denaturation?",
        answer_fr:
          "La perte de la structure tridimensionnelle native sans rupture des liaisons peptidiques, souvent causée par la chaleur, un pH extrême ou des solvants",
        answer_en:
          "The loss of the native 3D structure without breaking peptide bonds, often caused by heat, extreme pH, or solvents",
      },
    ],
  },
  {
    ordre: 3,
    titre_fr: "Enzymologie",
    titre_en: "Enzymology",
    description_fr: "Cinétique enzymatique, Michaelis-Menten, inhibition, régulation allostérique",
    description_en: "Enzyme kinetics, Michaelis-Menten, inhibition, allosteric regulation",
    icone: "⚗️",
    cards: [
      {
        question_fr: "Que catalysent les enzymes ?",
        question_en: "What do enzymes catalyze?",
        answer_fr:
          "Elles accélèrent les réactions biochimiques en abaissant l'énergie d'activation, sans être consommées",
        answer_en:
          "They speed up biochemical reactions by lowering the activation energy, without being consumed",
      },
      {
        question_fr: "Que représente le Km dans l'équation de Michaelis-Menten ?",
        question_en: "What does Km represent in the Michaelis-Menten equation?",
        answer_fr: "La concentration de substrat pour laquelle la vitesse de réaction est égale à la moitié de Vmax",
        answer_en: "The substrate concentration at which the reaction rate is half of Vmax",
      },
      {
        question_fr: "Quelle est la différence entre inhibition compétitive et non compétitive ?",
        question_en: "What is the difference between competitive and non-competitive inhibition?",
        answer_fr:
          "Compétitive : l'inhibiteur se lie au site actif (Km augmente, Vmax inchangée). Non compétitive : l'inhibiteur se lie ailleurs (Vmax diminue, Km inchangé)",
        answer_en:
          "Competitive: the inhibitor binds the active site (Km increases, Vmax unchanged). Non-competitive: the inhibitor binds elsewhere (Vmax decreases, Km unchanged)",
      },
      {
        question_fr: "Qu'est-ce qu'un cofacteur enzymatique ?",
        question_en: "What is an enzyme cofactor?",
        answer_fr:
          "Une molécule non protéique (ion métallique ou coenzyme) nécessaire à l'activité catalytique de certaines enzymes",
        answer_en:
          "A non-protein molecule (metal ion or coenzyme) required for the catalytic activity of certain enzymes",
      },
      {
        question_fr: "Qu'est-ce que l'allostérie ?",
        question_en: "What is allosteric regulation?",
        answer_fr:
          "La régulation de l'activité enzymatique par fixation d'un effecteur sur un site distinct du site actif, modifiant la conformation de l'enzyme",
        answer_en:
          "Regulation of enzyme activity by an effector binding a site distinct from the active site, changing the enzyme's conformation",
      },
      {
        question_fr: "Qu'est-ce qu'une holoenzyme ?",
        question_en: "What is a holoenzyme?",
        answer_fr: "Le complexe fonctionnel formé de l'apoenzyme et de son (ses) cofacteur(s)",
        answer_en: "The functional complex formed by the apoenzyme and its cofactor(s)",
      },
    ],
  },
  {
    ordre: 4,
    titre_fr: "Métabolisme des glucides",
    titre_en: "Carbohydrate Metabolism",
    description_fr: "Glycolyse, cycle de Krebs, néoglucogenèse, glycogénolyse, voie des pentoses",
    description_en: "Glycolysis, Krebs cycle, gluconeogenesis, glycogenolysis, pentose phosphate pathway",
    icone: "🍬",
    cards: [
      {
        question_fr: "Où se déroule la glycolyse dans la cellule ?",
        question_en: "Where does glycolysis take place in the cell?",
        answer_fr: "Dans le cytoplasme (cytosol)",
        answer_en: "In the cytoplasm (cytosol)",
      },
      {
        question_fr: "Quel est le produit final de la glycolyse ?",
        question_en: "What is the final product of glycolysis?",
        answer_fr: "Le pyruvate (2 molécules par glucose), avec production nette de 2 ATP et 2 NADH",
        answer_en: "Pyruvate (2 molecules per glucose), with a net gain of 2 ATP and 2 NADH",
      },
      {
        question_fr: "Où se déroule le cycle de Krebs ?",
        question_en: "Where does the Krebs cycle take place?",
        answer_fr: "Dans la matrice mitochondriale",
        answer_en: "In the mitochondrial matrix",
      },
      {
        question_fr: "Quel est le rôle de la néoglucogenèse ?",
        question_en: "What is the role of gluconeogenesis?",
        answer_fr:
          "Synthétiser du glucose à partir de précurseurs non glucidiques (lactate, glycérol, acides aminés glucoformateurs), principalement dans le foie",
        answer_en:
          "Synthesizing glucose from non-carbohydrate precursors (lactate, glycerol, glucogenic amino acids), mainly in the liver",
      },
      {
        question_fr: "Quelle hormone stimule la glycogénolyse hépatique ?",
        question_en: "Which hormone stimulates hepatic glycogenolysis?",
        answer_fr: "Le glucagon (et l'adrénaline en situation de stress)",
        answer_en: "Glucagon (and adrenaline under stress)",
      },
      {
        question_fr: "Quel est le rôle de la voie des pentoses phosphates ?",
        question_en: "What is the role of the pentose phosphate pathway?",
        answer_fr:
          "Produire du NADPH (biosynthèse réductrice, défense antioxydante) et du ribose-5-phosphate (synthèse des nucléotides)",
        answer_en:
          "Producing NADPH (reductive biosynthesis, antioxidant defense) and ribose-5-phosphate (nucleotide synthesis)",
      },
    ],
  },
  {
    ordre: 5,
    titre_fr: "Métabolisme des lipides",
    titre_en: "Lipid Metabolism",
    description_fr: "β-oxydation, cétogenèse, lipogenèse, transport des acides gras",
    description_en: "β-oxidation, ketogenesis, lipogenesis, fatty acid transport",
    icone: "🧈",
    cards: [
      {
        question_fr: "Où se déroule la β-oxydation des acides gras ?",
        question_en: "Where does fatty acid β-oxidation take place?",
        answer_fr: "Dans la matrice mitochondriale",
        answer_en: "In the mitochondrial matrix",
      },
      {
        question_fr: "Quel transporteur permet l'entrée des acides gras à longue chaîne dans la mitochondrie ?",
        question_en: "Which carrier allows long-chain fatty acids to enter the mitochondria?",
        answer_fr: "La carnitine (système carnitine palmitoyltransférase I/II)",
        answer_en: "Carnitine (carnitine palmitoyltransferase I/II system)",
      },
      {
        question_fr: "Quels sont les corps cétoniques produits par le foie ?",
        question_en: "What are the ketone bodies produced by the liver?",
        answer_fr: "L'acétoacétate, le β-hydroxybutyrate et l'acétone",
        answer_en: "Acetoacetate, β-hydroxybutyrate and acetone",
      },
      {
        question_fr: "Dans quelles conditions la cétogenèse est-elle augmentée ?",
        question_en: "Under what conditions is ketogenesis increased?",
        answer_fr: "Jeûne prolongé, diabète non contrôlé (acidocétose diabétique), régime pauvre en glucides",
        answer_en: "Prolonged fasting, uncontrolled diabetes (diabetic ketoacidosis), low-carbohydrate diet",
      },
      {
        question_fr: "Où a lieu la lipogenèse (synthèse des acides gras) ?",
        question_en: "Where does lipogenesis (fatty acid synthesis) take place?",
        answer_fr: "Dans le cytoplasme, principalement dans le foie et le tissu adipeux",
        answer_en: "In the cytoplasm, mainly in the liver and adipose tissue",
      },
      {
        question_fr: "Quelle enzyme clé régule la lipogenèse ?",
        question_en: "Which key enzyme regulates lipogenesis?",
        answer_fr: "L'acétyl-CoA carboxylase (ACC), qui convertit l'acétyl-CoA en malonyl-CoA",
        answer_en: "Acetyl-CoA carboxylase (ACC), which converts acetyl-CoA into malonyl-CoA",
      },
    ],
  },
  {
    ordre: 6,
    titre_fr: "Métabolisme des protéines et cycle de l'urée",
    titre_en: "Protein Metabolism and the Urea Cycle",
    description_fr: "Transamination, désamination, cycle de l'urée, élimination de l'azote",
    description_en: "Transamination, deamination, urea cycle, nitrogen disposal",
    icone: "♻️",
    cards: [
      {
        question_fr: "Quel est le rôle du cycle de l'urée ?",
        question_en: "What is the role of the urea cycle?",
        answer_fr: "Éliminer l'azote toxique (ammoniac) sous forme d'urée, excrétée par les reins",
        answer_en: "Disposing of toxic nitrogen (ammonia) as urea, excreted by the kidneys",
      },
      {
        question_fr: "Où se déroule le cycle de l'urée ?",
        question_en: "Where does the urea cycle take place?",
        answer_fr: "Partiellement dans la mitochondrie et partiellement dans le cytosol des hépatocytes",
        answer_en: "Partly in the mitochondria and partly in the cytosol of hepatocytes",
      },
      {
        question_fr: "Qu'est-ce que la transamination ?",
        question_en: "What is transamination?",
        answer_fr:
          "Le transfert réversible d'un groupe amine d'un acide aminé à un céto-acide, catalysé par une transaminase (ex. ALAT, ASAT)",
        answer_en:
          "The reversible transfer of an amine group from an amino acid to a keto-acid, catalyzed by a transaminase (e.g. ALT, AST)",
      },
      {
        question_fr: "Qu'est-ce que la désamination oxydative ?",
        question_en: "What is oxidative deamination?",
        answer_fr:
          "La libération du groupe amine d'un acide aminé sous forme d'ammoniac, avec formation d'un céto-acide (ex. glutamate déshydrogénase)",
        answer_en:
          "The release of an amino acid's amine group as ammonia, forming a keto-acid (e.g. glutamate dehydrogenase)",
      },
      {
        question_fr: "Quel acide aminé transporte l'azote des muscles vers le foie ?",
        question_en: "Which amino acid carries nitrogen from muscle to the liver?",
        answer_fr: "L'alanine (cycle glucose-alanine) et la glutamine",
        answer_en: "Alanine (glucose-alanine cycle) and glutamine",
      },
      {
        question_fr: "Quelle est la première molécule formée dans le cycle de l'urée à partir de NH3 et CO2 ?",
        question_en: "What is the first molecule formed in the urea cycle from NH3 and CO2?",
        answer_fr: "Le carbamoyl phosphate",
        answer_en: "Carbamoyl phosphate",
      },
    ],
  },
  {
    ordre: 7,
    titre_fr: "Bioénergétique et chaîne respiratoire",
    titre_en: "Bioenergetics and the Respiratory Chain",
    description_fr: "Chaîne respiratoire mitochondriale, phosphorylation oxydative, production d'ATP",
    description_en: "Mitochondrial respiratory chain, oxidative phosphorylation, ATP production",
    icone: "⚡",
    cards: [
      {
        question_fr: "Où se situe la chaîne respiratoire mitochondriale ?",
        question_en: "Where is the mitochondrial respiratory chain located?",
        answer_fr: "Dans la membrane mitochondriale interne",
        answer_en: "In the inner mitochondrial membrane",
      },
      {
        question_fr: "Combien de complexes protéiques composent la chaîne respiratoire ?",
        question_en: "How many protein complexes make up the respiratory chain?",
        answer_fr: "4 complexes (I à IV), plus l'ATP synthase (parfois appelée complexe V)",
        answer_en: "4 complexes (I to IV), plus ATP synthase (sometimes called complex V)",
      },
      {
        question_fr: "Quel est l'accepteur final d'électrons de la chaîne respiratoire ?",
        question_en: "What is the final electron acceptor of the respiratory chain?",
        answer_fr: "L'oxygène (O₂), réduit en eau",
        answer_en: "Oxygen (O₂), reduced to water",
      },
      {
        question_fr: "Qu'est-ce que la phosphorylation oxydative ?",
        question_en: "What is oxidative phosphorylation?",
        answer_fr:
          "La synthèse d'ATP couplée au transfert d'électrons dans la chaîne respiratoire, grâce au gradient de protons (chimiosmose)",
        answer_en:
          "ATP synthesis coupled to electron transfer in the respiratory chain, driven by the proton gradient (chemiosmosis)",
      },
      {
        question_fr: "Combien d'ATP sont théoriquement produits par molécule de glucose lors de la respiration cellulaire complète ?",
        question_en: "How much ATP is theoretically produced per glucose molecule during complete cellular respiration?",
        answer_fr: "Environ 30 à 32 ATP (selon les sources et la navette utilisée)",
        answer_en: "About 30 to 32 ATP (depending on the source and shuttle used)",
      },
      {
        question_fr: "Que fait un découplant comme le 2,4-dinitrophénol (DNP) ?",
        question_en: "What does an uncoupler like 2,4-dinitrophenol (DNP) do?",
        answer_fr: "Il dissipe le gradient de protons sans produire d'ATP, l'énergie étant libérée sous forme de chaleur",
        answer_en: "It dissipates the proton gradient without producing ATP, releasing the energy as heat",
      },
    ],
  },
  {
    ordre: 8,
    titre_fr: "Vitamines et coenzymes",
    titre_en: "Vitamins and Coenzymes",
    description_fr: "Vitamines hydro- et liposolubles, coenzymes dérivés, carences",
    description_en: "Water- and fat-soluble vitamins, derived coenzymes, deficiencies",
    icone: "💊",
    cards: [
      {
        question_fr: "De quelle vitamine dérive le NAD⁺/NADH ?",
        question_en: "Which vitamin does NAD⁺/NADH derive from?",
        answer_fr: "La vitamine B3 (niacine)",
        answer_en: "Vitamin B3 (niacin)",
      },
      {
        question_fr: "De quelle vitamine dérive le FAD/FADH₂ ?",
        question_en: "Which vitamin does FAD/FADH₂ derive from?",
        answer_fr: "La vitamine B2 (riboflavine)",
        answer_en: "Vitamin B2 (riboflavin)",
      },
      {
        question_fr: "Quelle vitamine est nécessaire aux réactions de carboxylation (ex. pyruvate carboxylase) ?",
        question_en: "Which vitamin is required for carboxylation reactions (e.g. pyruvate carboxylase)?",
        answer_fr: "La biotine (vitamine B8)",
        answer_en: "Biotin (vitamin B8)",
      },
      {
        question_fr: "Quel est le rôle du coenzyme A (CoA) ?",
        question_en: "What is the role of coenzyme A (CoA)?",
        answer_fr: "Transporter les groupes acyle (ex. acétyl-CoA), dérivé de l'acide pantothénique (vitamine B5)",
        answer_en: "Carrying acyl groups (e.g. acetyl-CoA), derived from pantothenic acid (vitamin B5)",
      },
      {
        question_fr: "Quelle vitamine est un cofacteur essentiel des réactions de transamination ?",
        question_en: "Which vitamin is an essential cofactor for transamination reactions?",
        answer_fr: "La vitamine B6 (pyridoxal phosphate)",
        answer_en: "Vitamin B6 (pyridoxal phosphate)",
      },
      {
        question_fr: "Quelle carence vitaminique cause le scorbut ?",
        question_en: "Which vitamin deficiency causes scurvy?",
        answer_fr: "La carence en vitamine C (acide ascorbique), essentielle à la synthèse du collagène",
        answer_en: "Vitamin C (ascorbic acid) deficiency, essential for collagen synthesis",
      },
    ],
  },
];
