import type { LibraryCardSeed, LibraryChapterSeed } from "./biochimie-s1.js";

// Flashcards « structure » : la carte affiche la formule topologique de la
// molécule (dessinée côté client à partir d'un SMILES, voir
// client/src/library-data/molecules.ts) et demande de l'identifier ; le verso
// donne le nom, la formule brute, la classe et l'intérêt biochimique.
// Les cartes sont AJOUTÉES à la fin des cartes existantes de chaque chapitre
// (voir addMoleculeCards) : l'ordre des cartes déjà présentes ne change pas.

// [clé du visuel, chapitre, nom FR, nom EN, formule, classe FR, classe EN, note FR, note EN]
type Entry = [string, string, string, string, string, string, string, string, string];

// Chapitres : semestre 1 (cours) et semestre 2 (cours 1-31, labos 101+).
const CHAPTERS: Record<string, [1 | 2, number]> = {
  aa: [1, 2], carbs: [1, 8], lipids: [1, 9], vitH: [1, 10], vitL: [1, 11],
  glyc: [2, 1], trans: [2, 3], krebs: [2, 5], etc: [2, 6], glycogen: [2, 10], fas: [2, 15], tg: [2, 17],
  betaox: [2, 19], aamet: [2, 21], urea: [2, 22], ketone: [2, 23], ppp: [2, 24], chol: [2, 29], nuc: [2, 31],
  labaa: [2, 106], labcreat: [2, 109], laburic: [2, 111],
};

const AMINO: Array<[string, string, string, string, string, string, string, string, string]> = [
  // code3, code1, nom FR, nom EN, formule, classe FR, classe EN, note FR, note EN
  ["Gly", "G", "Glycine", "Glycine", "C₂H₅NO₂", "hydrophobe", "hydrophobic", "Le plus petit acide aminé : pas de carbone chiral, grande flexibilité de la chaîne.", "The smallest amino acid: no chiral carbon, great backbone flexibility."],
  ["Ala", "A", "Alanine", "Alanine", "C₃H₇NO₂", "hydrophobe", "hydrophobic", "Chaîne latérale méthyle, simple et peu encombrante.", "Simple, small methyl side chain."],
  ["Val", "V", "Valine", "Valine", "C₅H₁₁NO₂", "hydrophobe (ramifié)", "hydrophobic (branched)", "Acide aminé ramifié, typique des cœurs hydrophobes ; essentiel, glucoformateur.", "Branched-chain amino acid, typical of hydrophobic cores; essential, glucogenic."],
  ["Leu", "L", "Leucine", "Leucine", "C₆H₁₃NO₂", "hydrophobe (ramifié)", "hydrophobic (branched)", "Acide aminé ramifié, très fréquent dans les hélices α ; exclusivement cétogène.", "Branched-chain amino acid, very common in α-helices; exclusively ketogenic."],
  ["Ile", "I", "Isoleucine", "Isoleucine", "C₆H₁₃NO₂", "hydrophobe (ramifié)", "hydrophobic (branched)", "Ramifié, avec un second centre chiral sur le Cβ ; glucoformateur et cétogène.", "Branched, with a second chiral center at Cβ; both glucogenic and ketogenic."],
  ["Pro", "P", "Proline", "Proline", "C₅H₉NO₂", "hydrophobe (imino-acide)", "hydrophobic (imino acid)", "Le seul imino-acide : la chaîne latérale reboucle sur l'azote, ce qui rigidifie le squelette et rompt les hélices α.", "The only imino acid: the side chain loops back onto the nitrogen, rigidifying the backbone and breaking α-helices."],
  ["Met", "M", "Méthionine", "Methionine", "C₅H₁₁NO₂S", "hydrophobe (soufré)", "hydrophobic (sulfur)", "Contient un soufre thioéther ; premier acide aminé de toute chaîne polypeptidique (codon START).", "Contains a thioether sulfur; first amino acid of every polypeptide chain (START codon)."],
  ["Phe", "F", "Phénylalanine", "Phenylalanine", "C₉H₁₁NO₂", "hydrophobe (aromatique)", "hydrophobic (aromatic)", "Cycle phényle sans hydroxyle ; précurseur de la tyrosine (phénylalanine hydroxylase).", "Phenyl ring without hydroxyl; precursor of tyrosine (phenylalanine hydroxylase)."],
  ["Trp", "W", "Tryptophane", "Tryptophan", "C₁₁H₁₂N₂O₂", "hydrophobe (aromatique)", "hydrophobic (aromatic)", "Le plus volumineux des 20 ; groupe indole ; précurseur de la sérotonine et de la niacine.", "The bulkiest of the 20; indole group; precursor of serotonin and niacin."],
  ["Ser", "S", "Sérine", "Serine", "C₃H₇NO₃", "polaire non chargé", "polar, uncharged", "Groupe hydroxyle, souvent phosphorylé ou présent dans la triade catalytique des sérine-protéases.", "Hydroxyl group, often phosphorylated or part of the serine protease catalytic triad."],
  ["Thr", "T", "Thréonine", "Threonine", "C₄H₉NO₃", "polaire non chargé", "polar, uncharged", "Groupe hydroxyle sur un carbone chiral supplémentaire.", "Hydroxyl group on an additional chiral carbon."],
  ["Tyr", "Y", "Tyrosine", "Tyrosine", "C₉H₁₁NO₃", "polaire (aromatique)", "polar (aromatic)", "Cycle aromatique avec hydroxyle phénolique ; site fréquent de phosphorylation ; précurseur des catécholamines.", "Aromatic ring with phenolic hydroxyl; frequent phosphorylation site; catecholamine precursor."],
  ["Cys", "C", "Cystéine", "Cysteine", "C₃H₇NO₂S", "polaire non chargé", "polar, uncharged", "Groupe thiol capable de former un pont disulfure (–S–S–) avec une autre cystéine.", "Thiol group able to form a disulfide bond (–S–S–) with another cysteine."],
  ["Asn", "N", "Asparagine", "Asparagine", "C₄H₈N₂O₃", "polaire non chargé", "polar, uncharged", "Amide de l'acide aspartique ; chaîne non chargée mais polaire.", "Amide of aspartic acid; uncharged but polar side chain."],
  ["Gln", "Q", "Glutamine", "Glutamine", "C₅H₁₀N₂O₃", "polaire non chargé", "polar, uncharged", "Amide de l'acide glutamique ; forme de transport non toxique de l'ammoniac.", "Amide of glutamic acid; non-toxic transport form of ammonia."],
  ["Asp", "D", "Acide aspartique", "Aspartate", "C₄H₇NO₄", "chargé négativement", "negatively charged", "Carboxyle latéral déprotoné (COO⁻) au pH physiologique.", "Deprotonated side-chain carboxyl (COO⁻) at physiological pH."],
  ["Glu", "E", "Acide glutamique", "Glutamate", "C₅H₉NO₄", "chargé négativement", "negatively charged", "Carboxyle latéral déprotoné (COO⁻) ; plaque tournante de l'azote (transamination, GDH).", "Deprotonated side-chain carboxyl (COO⁻); nitrogen hub (transamination, GDH)."],
  ["Lys", "K", "Lysine", "Lysine", "C₆H₁₄N₂O₂", "chargé positivement", "positively charged", "Amine primaire protonée au pH physiologique ; exclusivement cétogène.", "Primary amine, protonated at physiological pH; exclusively ketogenic."],
  ["Arg", "R", "Arginine", "Arginine", "C₆H₁₄N₄O₂", "chargé positivement", "positively charged", "Porte un groupe guanidinium chargé positivement ; intervient dans le cycle de l'urée.", "Carries a positively charged guanidinium group; part of the urea cycle."],
  ["His", "H", "Histidine", "Histidine", "C₆H₉N₃O₂", "chargé positivement", "positively charged", "Imidazole de pKa ≈ 6, proche du pH physiologique : rôle catalytique fréquent.", "Imidazole with pKa ≈ 6, close to physiological pH: frequent catalytic role."],
];

const MOLS: Entry[] = [
  // ── Peptides (S1, chapitre 2) ──
  ["glutathione", "aa", "Glutathion (GSH)", "Glutathione (GSH)", "C₁₀H₁₇N₃O₆S", "tripeptide γ-Glu–Cys–Gly", "γ-Glu–Cys–Gly tripeptide", "Antioxydant : le thiol de la cystéine réduit les peroxydes (glutathion peroxydase) ; régénéré par le NADPH de la voie des pentoses phosphates.", "Antioxidant: the cysteine thiol reduces peroxides (glutathione peroxidase); regenerated by NADPH from the pentose phosphate pathway."],
  // ── Glucides (S1, chapitre 8) ──
  ["glucose", "carbs", "D-glucose (α-D-glucopyranose)", "D-glucose (α-D-glucopyranose)", "C₆H₁₂O₆", "aldohexose", "aldohexose", "Le sucre central du métabolisme ; en solution il s'équilibre entre formes cycliques α et β et forme ouverte (mutarotation).", "The central sugar of metabolism; in solution it equilibrates between α and β cyclic forms and the open chain (mutarotation)."],
  ["galactose", "carbs", "D-galactose", "D-galactose", "C₆H₁₂O₆", "aldohexose", "aldohexose", "Épimère du glucose en C4 ; entre dans la composition du lactose.", "C4 epimer of glucose; component of lactose."],
  ["mannose", "carbs", "D-mannose", "D-mannose", "C₆H₁₂O₆", "aldohexose", "aldohexose", "Épimère du glucose en C2 ; présent dans les glycoprotéines.", "C2 epimer of glucose; found in glycoproteins."],
  ["fructose", "carbs", "D-fructose (β-D-fructofuranose)", "D-fructose (β-D-fructofuranose)", "C₆H₁₂O₆", "cétohexose", "ketohexose", "Cétose à cycle furanose à 5 chaînons ; absorbé par diffusion facilitée ; forme le saccharose avec le glucose.", "Ketose with a five-membered furanose ring; absorbed by facilitated diffusion; forms sucrose with glucose."],
  ["ribose", "carbs", "D-ribose", "D-ribose", "C₅H₁₀O₅", "aldopentose", "aldopentose", "Le sucre de l'ARN et des nucléotides (ATP, NAD⁺, CoA).", "The sugar of RNA and nucleotides (ATP, NAD⁺, CoA)."],
  ["deoxyribose", "carbs", "2-désoxy-D-ribose", "2-deoxy-D-ribose", "C₅H₁₀O₄", "aldopentose désoxygéné", "deoxy aldopentose", "Le sucre de l'ADN : pas d'hydroxyle en position 2′.", "The sugar of DNA: no hydroxyl at the 2′ position."],
  ["sucrose", "carbs", "Saccharose", "Sucrose", "C₁₂H₂₂O₁₁", "disaccharide non réducteur", "non-reducing disaccharide", "Glucose α1→β2 fructose : les deux carbones anomériques sont engagés, donc non réducteur.", "Glucose α1→β2 fructose: both anomeric carbons are engaged, so it is non-reducing."],
  ["maltose", "carbs", "Maltose", "Maltose", "C₁₂H₂₂O₁₁", "disaccharide réducteur", "reducing disaccharide", "Deux glucoses liés en α1→4 ; produit de l'hydrolyse de l'amidon par l'amylase.", "Two glucoses joined by an α1→4 bond; product of starch hydrolysis by amylase."],
  ["lactose", "carbs", "Lactose", "Lactose", "C₁₂H₂₂O₁₁", "disaccharide réducteur", "reducing disaccharide", "Galactose β1→4 glucose ; hydrolysé par la lactase de la bordure en brosse.", "Galactose β1→4 glucose; hydrolyzed by brush-border lactase."],
  ["glcnac", "carbs", "N-acétylglucosamine (GlcNAc)", "N-acetylglucosamine (GlcNAc)", "C₈H₁₅NO₆", "sucre aminé", "amino sugar", "Constituant des glycoprotéines, des protéoglycanes et de la chitine.", "Component of glycoproteins, proteoglycans and chitin."],
  // ── Lipides (S1, chapitre 9) ──
  ["palmitate", "lipids", "Acide palmitique (C16:0)", "Palmitic acid (C16:0)", "C₁₆H₃₂O₂", "acide gras saturé", "saturated fatty acid", "Produit final de la synthèse des acides gras par l'acide gras synthase.", "End product of fatty acid synthesis by fatty acid synthase."],
  ["stearate", "lipids", "Acide stéarique (C18:0)", "Stearic acid (C18:0)", "C₁₈H₃₆O₂", "acide gras saturé", "saturated fatty acid", "Chaîne saturée droite : s'empile bien dans les membranes (peu fluide).", "Straight saturated chain: packs tightly in membranes (low fluidity)."],
  ["oleate", "lipids", "Acide oléique (C18:1 cis-Δ9)", "Oleic acid (C18:1 cis-Δ9)", "C₁₈H₃₄O₂", "acide gras mono-insaturé", "monounsaturated fatty acid", "La double liaison cis coude la chaîne et augmente la fluidité membranaire.", "The cis double bond kinks the chain and increases membrane fluidity."],
  ["linoleate", "lipids", "Acide linoléique (C18:2 ω-6)", "Linoleic acid (C18:2 ω-6)", "C₁₈H₃₂O₂", "acide gras essentiel ω-6", "essential ω-6 fatty acid", "Acide gras essentiel : l'organisme ne le synthétise pas.", "Essential fatty acid: the body cannot synthesize it."],
  ["linolenate", "lipids", "Acide α-linolénique (C18:3 ω-3)", "α-Linolenic acid (C18:3 ω-3)", "C₁₈H₃₀O₂", "acide gras essentiel ω-3", "essential ω-3 fatty acid", "Acide gras essentiel de la famille ω-3.", "Essential fatty acid of the ω-3 family."],
  ["arachidonate", "lipids", "Acide arachidonique (C20:4 ω-6)", "Arachidonic acid (C20:4 ω-6)", "C₂₀H₃₂O₂", "acide gras polyinsaturé", "polyunsaturated fatty acid", "Précurseur des prostaglandines et des leucotriènes.", "Precursor of prostaglandins and leukotrienes."],
  ["glycerol", "lipids", "Glycérol", "Glycerol", "C₃H₈O₃", "triol", "triol", "Squelette des triglycérides et des glycérophospholipides.", "Backbone of triglycerides and glycerophospholipids."],
  ["tripalmitin", "lipids", "Triglycéride (tripalmitine)", "Triglyceride (tripalmitin)", "C₅₁H₉₈O₆", "triacylglycérol", "triacylglycerol", "Trois acides gras estérifiés sur le glycérol : la forme de stockage de l'énergie.", "Three fatty acids esterified to glycerol: the energy storage form."],
  ["dppc", "lipids", "Phosphatidylcholine (dipalmitoyl)", "Phosphatidylcholine (dipalmitoyl)", "C₄₀H₈₀NO₈P", "glycérophospholipide", "glycerophospholipid", "Tête polaire choline et deux queues hydrophobes : lipide amphipathique des bicouches.", "Polar choline head and two hydrophobic tails: amphipathic bilayer lipid."],
  ["sphingosine", "lipids", "Sphingosine", "Sphingosine", "C₁₈H₃₇NO₂", "amino-alcool à longue chaîne", "long-chain amino alcohol", "Squelette des sphingolipides (céramide, sphingomyéline, glycolipides).", "Backbone of sphingolipids (ceramide, sphingomyelin, glycolipids)."],
  ["cholesterol", "lipids", "Cholestérol", "Cholesterol", "C₂₇H₄₆O", "stérol", "sterol", "Noyau à 4 cycles rigide : module la fluidité membranaire ; précurseur des hormones stéroïdes et des sels biliaires.", "Rigid four-ring nucleus: modulates membrane fluidity; precursor of steroid hormones and bile salts."],
  // ── Vitamines hydrosolubles et cofacteurs (S1, chapitre 10) ──
  ["riboflavin", "vitH", "Riboflavine (vitamine B2)", "Riboflavin (vitamin B2)", "C₁₇H₂₀N₄O₆", "vitamine hydrosoluble", "water-soluble vitamin", "Noyau isoalloxazine : précurseur des cofacteurs FMN et FAD.", "Isoalloxazine ring: precursor of the cofactors FMN and FAD."],
  ["nicotinamide", "vitH", "Nicotinamide (vitamine B3)", "Nicotinamide (vitamin B3)", "C₆H₆N₂O", "vitamine hydrosoluble", "water-soluble vitamin", "Amide de la niacine : partie réactive du NAD⁺ et du NADP⁺ ; carence : pellagre.", "Amide of niacin: the reactive part of NAD⁺ and NADP⁺; deficiency: pellagra."],
  ["pantothenate", "vitH", "Acide pantothénique (vitamine B5)", "Pantothenic acid (vitamin B5)", "C₉H₁₇NO₅", "vitamine hydrosoluble", "water-soluble vitamin", "Constituant du coenzyme A et de l'acyl carrier protein.", "Component of coenzyme A and of acyl carrier protein."],
  ["pyridoxal", "vitH", "Pyridoxal (vitamine B6)", "Pyridoxal (vitamin B6)", "C₈H₉NO₃", "vitamine hydrosoluble", "water-soluble vitamin", "Aldéhyde du groupe B6 ; sa forme phosphorylée est le cofacteur des transaminases.", "Aldehyde of the B6 group; its phosphorylated form is the cofactor of transaminases."],
  ["plp", "vitH", "Phosphate de pyridoxal (PLP)", "Pyridoxal phosphate (PLP)", "C₈H₁₀NO₆P", "coenzyme", "coenzyme", "Forme active de la B6 : transamination, décarboxylation, ALA synthase.", "Active form of B6: transamination, decarboxylation, ALA synthase."],
  ["folate", "vitH", "Acide folique (vitamine B9)", "Folic acid (vitamin B9)", "C₁₉H₁₉N₇O₆", "vitamine hydrosoluble", "water-soluble vitamin", "Ptéridine + PABA + glutamate ; réduit en tétrahydrofolate, transporteur de groupements à un carbone.", "Pteridine + PABA + glutamate; reduced to tetrahydrofolate, a one-carbon carrier."],
  ["tpp", "vitH", "Pyrophosphate de thiamine (TPP)", "Thiamine pyrophosphate (TPP)", "C₁₂H₁₉N₄O₇P₂S", "coenzyme", "coenzyme", "Forme active de la B1 : décarboxylations oxydatives (pyruvate déshydrogénase, α-cétoglutarate déshydrogénase).", "Active form of B1: oxidative decarboxylations (pyruvate dehydrogenase, α-ketoglutarate dehydrogenase)."],
  ["coa", "vitH", "Coenzyme A (CoA-SH)", "Coenzyme A (CoA-SH)", "C₂₁H₃₆N₇O₁₆P₃S", "coenzyme", "coenzyme", "Adénosine 3′-phosphate + pantothéine ; le thiol –SH porte les groupes acyles.", "Adenosine 3′-phosphate + pantetheine; the –SH thiol carries acyl groups."],
  // ── Vitamines liposolubles (S1, chapitre 11) ──
  ["retinol", "vitL", "Rétinol (vitamine A)", "Retinol (vitamin A)", "C₂₀H₃₀O", "vitamine liposoluble", "fat-soluble vitamin", "Alcool à chaîne polyénique ; stocké sous forme d'esters de rétinyle dans le foie.", "Polyene-chain alcohol; stored as retinyl esters in the liver."],
  ["retinal", "vitL", "Rétinal (rétinaldéhyde)", "Retinal (retinaldehyde)", "C₂₀H₂₈O", "dérivé de la vitamine A", "vitamin A derivative", "Forme aldéhyde, obtenue par clivage du β-carotène ; pigment visuel.", "Aldehyde form, obtained by cleavage of β-carotene; visual pigment."],
  ["cholecalciferol", "vitL", "Cholécalciférol (vitamine D3)", "Cholecalciferol (vitamin D3)", "C₂₇H₄₄O", "vitamine liposoluble", "fat-soluble vitamin", "Secostéroïde formé dans la peau sous UV à partir du 7-déhydrocholestérol ; activé en calcitriol.", "Secosteroid formed in skin under UV from 7-dehydrocholesterol; activated to calcitriol."],
  ["tocopherol", "vitL", "α-Tocophérol (vitamine E)", "α-Tocopherol (vitamin E)", "C₂₉H₅₀O₂", "vitamine liposoluble", "fat-soluble vitamin", "Noyau chromanol + queue phytyle : antioxydant qui protège les lipides membranaires.", "Chromanol ring + phytyl tail: antioxidant protecting membrane lipids."],
  ["phylloquinone", "vitL", "Phylloquinone (vitamine K1)", "Phylloquinone (vitamin K1)", "C₃₁H₄₆O₂", "vitamine liposoluble", "fat-soluble vitamin", "Noyau naphtoquinone ; cofacteur de la γ-carboxylation des facteurs de coagulation.", "Naphthoquinone ring; cofactor for γ-carboxylation of coagulation factors."],
  // ── Glycolyse (S2, chapitre 1) ──
  ["g6p", "glyc", "Glucose-6-phosphate", "Glucose-6-phosphate", "C₆H₁₃O₉P", "ester phosphorique", "phosphate ester", "Produit de l'hexokinase : piège le glucose dans la cellule ; carrefour glycolyse, glycogène, PPP.", "Hexokinase product: traps glucose in the cell; crossroads of glycolysis, glycogen and PPP."],
  ["f6p", "glyc", "Fructose-6-phosphate", "Fructose-6-phosphate", "C₆H₁₃O₉P", "ester phosphorique", "phosphate ester", "Substrat de la PFK-1, enzyme limitante de la glycolyse.", "Substrate of PFK-1, the rate-limiting enzyme of glycolysis."],
  ["fbp", "glyc", "Fructose-1,6-bisphosphate", "Fructose-1,6-bisphosphate", "C₆H₁₄O₁₂P₂", "bis-phosphate", "bisphosphate", "Coupé par l'aldolase en DHAP et glycéraldéhyde-3-phosphate.", "Cleaved by aldolase into DHAP and glyceraldehyde-3-phosphate."],
  ["dhap", "glyc", "Dihydroxyacétone phosphate (DHAP)", "Dihydroxyacetone phosphate (DHAP)", "C₃H₇O₆P", "cétotriose phosphate", "ketotriose phosphate", "Isomérisé en glycéraldéhyde-3-P par la triose phosphate isomérase.", "Isomerized to glyceraldehyde-3-P by triose phosphate isomerase."],
  ["g3p", "glyc", "Glycéraldéhyde-3-phosphate", "Glyceraldehyde-3-phosphate", "C₃H₇O₆P", "aldotriose phosphate", "aldotriose phosphate", "Oxydé par la GAPDH : première réaction produisant du NADH.", "Oxidized by GAPDH: first NADH-producing reaction."],
  ["bpg13", "glyc", "1,3-Bisphosphoglycérate", "1,3-Bisphosphoglycerate", "C₃H₈O₁₀P₂", "acyl-phosphate à haute énergie", "high-energy acyl phosphate", "Cède un phosphate à l'ADP : première phosphorylation au niveau du substrat.", "Donates a phosphate to ADP: first substrate-level phosphorylation."],
  ["pg3", "glyc", "3-Phosphoglycérate", "3-Phosphoglycerate", "C₃H₇O₇P", "ester phosphorique", "phosphate ester", "Isomérisé en 2-phosphoglycérate par la phosphoglycérate mutase.", "Isomerized to 2-phosphoglycerate by phosphoglycerate mutase."],
  ["pg2", "glyc", "2-Phosphoglycérate", "2-Phosphoglycerate", "C₃H₇O₇P", "ester phosphorique", "phosphate ester", "Déshydraté par l'énolase en phosphoénolpyruvate.", "Dehydrated by enolase to phosphoenolpyruvate."],
  ["pep", "glyc", "Phosphoénolpyruvate (PEP)", "Phosphoenolpyruvate (PEP)", "C₃H₅O₆P", "énol-phosphate à haute énergie", "high-energy enol phosphate", "Cède son phosphate à l'ADP (pyruvate kinase) : deuxième phosphorylation au niveau du substrat.", "Donates its phosphate to ADP (pyruvate kinase): second substrate-level phosphorylation."],
  ["pyruvate", "glyc", "Pyruvate", "Pyruvate", "C₃H₄O₃", "α-cétoacide", "α-keto acid", "Produit final de la glycolyse ; devient acétyl-CoA, lactate, alanine ou oxaloacétate.", "End product of glycolysis; becomes acetyl-CoA, lactate, alanine or oxaloacetate."],
  ["lactate", "glyc", "L-Lactate", "L-Lactate", "C₃H₆O₃", "α-hydroxyacide", "α-hydroxy acid", "Formé par la LDH en anaérobiose ; régénère le NAD⁺ ; recyclé par le cycle de Cori.", "Formed by LDH under anaerobic conditions; regenerates NAD⁺; recycled by the Cori cycle."],
  // ── Stade de transition (S2, chapitre 3) ──
  ["acetylcoa", "trans", "Acétyl-CoA", "Acetyl-CoA", "C₂₃H₃₈N₇O₁₇P₃S", "thioester", "thioester", "Produit de la pyruvate déshydrogénase et de la β-oxydation ; entrée du cycle de Krebs.", "Product of pyruvate dehydrogenase and β-oxidation; entry to the Krebs cycle."],
  // ── Cycle de Krebs (S2, chapitre 5) ──
  ["citrate", "krebs", "Citrate", "Citrate", "C₆H₈O₇", "acide tricarboxylique", "tricarboxylic acid", "Acétyl-CoA + oxaloacétate (citrate synthase) ; sort aussi de la mitochondrie pour la synthèse des acides gras.", "Acetyl-CoA + oxaloacetate (citrate synthase); also exported for fatty acid synthesis."],
  ["isocitrate", "krebs", "Isocitrate", "Isocitrate", "C₆H₈O₇", "acide tricarboxylique", "tricarboxylic acid", "Décarboxylé oxydativement en α-cétoglutarate (isocitrate déshydrogénase, NADH).", "Oxidatively decarboxylated to α-ketoglutarate (isocitrate dehydrogenase, NADH)."],
  ["akg", "krebs", "α-Cétoglutarate", "α-Ketoglutarate", "C₅H₆O₅", "α-cétoacide", "α-keto acid", "Point de rencontre avec le métabolisme des acides aminés (transamination, glutamate).", "Meeting point with amino acid metabolism (transamination, glutamate)."],
  ["succinate", "krebs", "Succinate", "Succinate", "C₄H₆O₄", "diacide", "dicarboxylic acid", "Oxydé en fumarate par la succinate déshydrogénase (complexe II, FAD).", "Oxidized to fumarate by succinate dehydrogenase (complex II, FAD)."],
  ["fumarate", "krebs", "Fumarate", "Fumarate", "C₄H₄O₄", "diacide insaturé (trans)", "unsaturated (trans) diacid", "Hydraté en malate par la fumarase ; aussi produit du cycle de l'urée.", "Hydrated to malate by fumarase; also a urea-cycle product."],
  ["malate", "krebs", "L-Malate", "L-Malate", "C₄H₆O₅", "α-hydroxyacide dicarboxylique", "hydroxy dicarboxylic acid", "Oxydé en oxaloacétate (malate déshydrogénase, NADH) ; navette malate-aspartate.", "Oxidized to oxaloacetate (malate dehydrogenase, NADH); malate-aspartate shuttle."],
  ["oxaloacetate", "krebs", "Oxaloacétate", "Oxaloacetate", "C₄H₄O₅", "α-cétodiacide", "α-keto diacid", "Accepteur de l'acétyl-CoA ; substrat de la néoglucogenèse et transaminé en aspartate.", "Acetyl-CoA acceptor; gluconeogenesis substrate; transaminated to aspartate."],
  // ── Chaîne de transport des électrons (S2, chapitre 6) ──
  ["nad", "etc", "NAD⁺", "NAD⁺", "C₂₁H₂₇N₇O₁₄P₂", "coenzyme oxydé", "oxidized coenzyme", "Accepteur d'électrons des déshydrogénases ; noyau nicotinamide dérivé de la vitamine B3.", "Electron acceptor of dehydrogenases; nicotinamide ring derived from vitamin B3."],
  ["nadh", "etc", "NADH", "NADH", "C₂₁H₂₉N₇O₁₄P₂", "coenzyme réduit", "reduced coenzyme", "Donne ses électrons au complexe I de la chaîne respiratoire.", "Donates its electrons to complex I of the respiratory chain."],
  ["fad", "etc", "FAD", "FAD", "C₂₇H₃₃N₉O₁₅P₂", "coenzyme oxydé", "oxidized coenzyme", "Dérivé de la riboflavine (B2) ; accepteur d'électrons de la succinate déshydrogénase (complexe II).", "Riboflavin (B2) derivative; electron acceptor of succinate dehydrogenase (complex II)."],
  ["atp", "etc", "ATP", "ATP", "C₁₀H₁₆N₅O₁₃P₃", "nucléotide triphosphate", "nucleotide triphosphate", "Monnaie énergétique : adénine + ribose + 3 phosphates ; synthétisée par l'ATP synthase.", "Energy currency: adenine + ribose + 3 phosphates; made by ATP synthase."],
  // ── Glycogène, acides gras, triglycérides (S2) ──
  ["g1p", "glycogen", "Glucose-1-phosphate", "Glucose-1-phosphate", "C₆H₁₃O₉P", "ester phosphorique", "phosphate ester", "Produit de la glycogène phosphorylase ; converti en glucose-6-phosphate par la phosphoglucomutase.", "Product of glycogen phosphorylase; converted to glucose-6-phosphate by phosphoglucomutase."],
  ["palmitate", "fas", "Palmitate", "Palmitate", "C₁₆H₃₂O₂", "acide gras saturé", "saturated fatty acid", "Terminaison de l'acide gras synthase après 7 cycles d'élongation.", "Released by fatty acid synthase after 7 elongation cycles."],
  ["glycerol3p", "tg", "Glycérol-3-phosphate", "Glycerol-3-phosphate", "C₃H₉O₆P", "ester phosphorique", "phosphate ester", "Squelette de la synthèse des triglycérides ; issu de la DHAP ou du glycérol (glycérol kinase).", "Backbone for triglyceride synthesis; from DHAP or glycerol (glycerol kinase)."],
  ["carnitine", "betaox", "Carnitine", "Carnitine", "C₇H₁₅NO₃", "ammonium quaternaire", "quaternary ammonium", "Navette qui fait entrer les acyl-CoA à longue chaîne dans la mitochondrie.", "Shuttle carrying long-chain acyl groups into the mitochondrion."],
  // ── Acides aminés, urée, cétones, PPP (S2) ──
  ["plp", "aamet", "Phosphate de pyridoxal (PLP)", "Pyridoxal phosphate (PLP)", "C₈H₁₀NO₆P", "coenzyme", "coenzyme", "Cofacteur de toutes les transaminases : forme des bases de Schiff avec les acides aminés.", "Cofactor of all transaminases: forms Schiff bases with amino acids."],
  ["ornithine", "urea", "Ornithine", "Ornithine", "C₅H₁₂N₂O₂", "acide aminé non protéinogène", "non-proteinogenic amino acid", "Régénérée à chaque tour du cycle de l'urée (arginase).", "Regenerated at each turn of the urea cycle (arginase)."],
  ["citrulline", "urea", "Citrulline", "Citrulline", "C₆H₁₃N₃O₃", "acide aminé non protéinogène", "non-proteinogenic amino acid", "Ornithine + carbamoyl phosphate ; exportée de la mitochondrie vers le cytosol.", "Ornithine + carbamoyl phosphate; exported from mitochondria to cytosol."],
  ["carbamoylp", "urea", "Carbamoyl phosphate", "Carbamoyl phosphate", "CH₄NO₅P", "anhydride mixte", "mixed anhydride", "Produit de la CPS1 (NH₃ + CO₂ + 2 ATP) : première étape du cycle de l'urée.", "Product of CPS1 (NH₃ + CO₂ + 2 ATP): first step of the urea cycle."],
  ["urea", "urea", "Urée", "Urea", "CH₄N₂O", "diamide de l'acide carbonique", "carbonic acid diamide", "Forme d'élimination de l'azote : synthétisée dans le foie, excrétée par le rein.", "Nitrogen disposal form: made in the liver, excreted by the kidney."],
  ["acetoacetate", "ketone", "Acétoacétate", "Acetoacetate", "C₄H₆O₃", "corps cétonique (β-cétoacide)", "ketone body (β-keto acid)", "Corps cétonique de base ; décarboxylé spontanément en acétone ; détecté par le test de Rothera.", "Primary ketone body; spontaneously decarboxylates to acetone; detected by Rothera's test."],
  ["bhb", "ketone", "β-Hydroxybutyrate", "β-Hydroxybutyrate", "C₄H₈O₃", "corps cétonique (hydroxyacide)", "ketone body (hydroxy acid)", "Le plus abondant des corps cétoniques ; réduit à partir de l'acétoacétate ; non détecté par Rothera.", "The most abundant ketone body; reduced from acetoacetate; not detected by Rothera."],
  ["acetone", "ketone", "Acétone", "Acetone", "C₃H₆O", "corps cétonique volatil", "volatile ketone body", "Issue de la décarboxylation de l'acétoacétate ; éliminée par les poumons (haleine).", "From acetoacetate decarboxylation; exhaled by the lungs (breath)."],
  ["ribose5p", "ppp", "Ribose-5-phosphate", "Ribose-5-phosphate", "C₅H₁₁O₈P", "ester phosphorique", "phosphate ester", "Produit de la PPP : précurseur du PRPP et de la synthèse des nucléotides.", "PPP product: precursor of PRPP and of nucleotide synthesis."],
  ["pgluconate6", "ppp", "6-Phosphogluconate", "6-Phosphogluconate", "C₆H₁₃O₁₀P", "acide phosphogluconique", "phosphogluconic acid", "Décarboxylé oxydativement en ribulose-5-phosphate avec production de NADPH.", "Oxidatively decarboxylated to ribulose-5-phosphate, producing NADPH."],
  // ── Cholestérol (S2, chapitre 29) ──
  ["mevalonate", "chol", "Mévalonate", "Mevalonate", "C₆H₁₂O₄", "acide dihydroxylé", "dihydroxy acid", "Produit de l'HMG-CoA réductase, cible des statines.", "Product of HMG-CoA reductase, the statin target."],
  ["cholesterol", "chol", "Cholestérol", "Cholesterol", "C₂₇H₄₆O", "stérol", "sterol", "Synthétisé à partir de l'acétyl-CoA (≈ 27 carbones) ; noyau à 4 cycles, hydroxyle en C3.", "Made from acetyl-CoA (≈ 27 carbons); four-ring nucleus, hydroxyl at C3."],
  ["cholate", "chol", "Acide cholique (cholate)", "Cholic acid (cholate)", "C₂₄H₄₀O₅", "acide biliaire primaire", "primary bile acid", "Dérivé du cholestérol (7α-hydroxylase) ; conjugué en sels biliaires qui émulsionnent les lipides.", "Cholesterol derivative (7α-hydroxylase); conjugated into bile salts that emulsify lipids."],
  // ── Nucléotides (S2, chapitre 31) ──
  ["adenine", "nuc", "Adénine", "Adenine", "C₅H₅N₅", "purine", "purine", "Purine à un groupe amine en C6 ; s'apparie à la thymine (2 liaisons H).", "Purine with an amino group at C6; pairs with thymine (2 H bonds)."],
  ["guanine", "nuc", "Guanine", "Guanine", "C₅H₅N₅O", "purine", "purine", "Purine à carbonyle en C6 et amine en C2 ; s'apparie à la cytosine (3 liaisons H).", "Purine with carbonyl at C6 and amine at C2; pairs with cytosine (3 H bonds)."],
  ["cytosine", "nuc", "Cytosine", "Cytosine", "C₄H₅N₃O", "pyrimidine", "pyrimidine", "Pyrimidine à un groupe amine en C4.", "Pyrimidine with an amino group at C4."],
  ["thymine", "nuc", "Thymine", "Thymine", "C₅H₆N₂O₂", "pyrimidine", "pyrimidine", "5-méthyluracile ; propre à l'ADN ; le dTMP est fait par la thymidylate synthase.", "5-methyluracil; specific to DNA; dTMP is made by thymidylate synthase."],
  ["uracil", "nuc", "Uracile", "Uracil", "C₄H₄N₂O₂", "pyrimidine", "pyrimidine", "Propre à l'ARN (remplace la thymine).", "Specific to RNA (replaces thymine)."],
  ["adenosine", "nuc", "Adénosine", "Adenosine", "C₁₀H₁₃N₅O₄", "nucléoside", "nucleoside", "Adénine + ribose ; le déficit en adénosine désaminase cause un déficit immunitaire combiné sévère.", "Adenine + ribose; adenosine deaminase deficiency causes severe combined immunodeficiency."],
  ["amp", "nuc", "AMP", "AMP", "C₁₀H₁₄N₅O₇P", "nucléotide monophosphate", "nucleotide monophosphate", "Adénosine + 1 phosphate ; issu de l'IMP par l'adénylosuccinate.", "Adenosine + 1 phosphate; made from IMP via adenylosuccinate."],
  ["adp", "nuc", "ADP", "ADP", "C₁₀H₁₅N₅O₁₀P₂", "nucléotide diphosphate", "nucleotide diphosphate", "Adénosine + 2 phosphates ; phosphorylé en ATP par l'ATP synthase.", "Adenosine + 2 phosphates; phosphorylated to ATP by ATP synthase."],
  ["atp", "nuc", "ATP", "ATP", "C₁₀H₁₆N₅O₁₃P₃", "nucléotide triphosphate", "nucleotide triphosphate", "Adénosine + 3 phosphates ; les liaisons phosphoanhydrides libèrent l'énergie.", "Adenosine + 3 phosphates; phosphoanhydride bonds release the energy."],
  ["camp", "nuc", "AMP cyclique (AMPc)", "Cyclic AMP (cAMP)", "C₁₀H₁₂N₅O₆P", "second messager", "second messenger", "Formé par l'adénylate cyclase ; active la protéine kinase A.", "Made by adenylate cyclase; activates protein kinase A."],
  ["dtmp", "nuc", "dTMP (thymidine monophosphate)", "dTMP (thymidine monophosphate)", "C₁₀H₁₅N₂O₈P", "désoxynucléotide", "deoxynucleotide", "Fait à partir du dUMP par la thymidylate synthase ; cible du 5-fluorouracile.", "Made from dUMP by thymidylate synthase; target of 5-fluorouracil."],
  // ── Labos : acides aminés, créatinine, acide urique (S2) ──
  ["phenylpyruvate", "labaa", "Acide phénylpyruvique", "Phenylpyruvic acid", "C₉H₈O₃", "α-cétoacide aromatique", "aromatic α-keto acid", "S'accumule dans la phénylcétonurie ; détecté dans l'urine par le test au chlorure ferrique.", "Accumulates in phenylketonuria; detected in urine with the ferric chloride test."],
  ["homogentisate", "labaa", "Acide homogentisique", "Homogentisic acid", "C₈H₈O₄", "intermédiaire du catabolisme de la tyrosine", "tyrosine catabolism intermediate", "S'accumule en cas de déficit en homogentisate oxydase (alcaptonurie) : l'urine noircit à l'air.", "Accumulates in homogentisate oxidase deficiency (alkaptonuria): urine darkens in air."],
  ["dopamine", "labaa", "Dopamine", "Dopamine", "C₈H₁₁NO₂", "catécholamine", "catecholamine", "Tyrosine → L-DOPA → dopamine ; précurseur de la noradrénaline.", "Tyrosine → L-DOPA → dopamine; precursor of norepinephrine."],
  ["norepinephrine", "labaa", "Noradrénaline", "Norepinephrine", "C₈H₁₁NO₃", "catécholamine", "catecholamine", "Dopamine hydroxylée ; neurotransmetteur sympathique.", "Hydroxylated dopamine; sympathetic neurotransmitter."],
  ["epinephrine", "labaa", "Adrénaline", "Epinephrine", "C₉H₁₃NO₃", "catécholamine", "catecholamine", "Noradrénaline méthylée ; hormone de la médullosurrénale (« combat ou fuite »).", "Methylated norepinephrine; adrenal medulla hormone (“fight or flight”)."],
  ["thyroxine", "labaa", "Thyroxine (T4)", "Thyroxine (T4)", "C₁₅H₁₁I₄NO₄", "hormone thyroïdienne", "thyroid hormone", "Deux tyrosines iodées (4 iodes) ; convertie en T3 dans les cellules cibles.", "Two iodinated tyrosines (4 iodines); converted to T3 in target cells."],
  ["triiodothyronine", "labaa", "Triiodothyronine (T3)", "Triiodothyronine (T3)", "C₁₅H₁₂I₃NO₄", "hormone thyroïdienne", "thyroid hormone", "Forme la plus active (3 iodes), environ 4 fois plus active que la T4.", "Most active form (3 iodines), about 4 times more active than T4."],
  ["kynurenine", "labaa", "Kynurénine", "Kynurenine", "C₁₀H₁₂N₂O₃", "métabolite du tryptophane", "tryptophan metabolite", "Voie principale du catabolisme du tryptophane ; mène à l'acide quinolinique puis au NAD⁺.", "Main tryptophan catabolic pathway; leads to quinolinic acid then NAD⁺."],
  ["serotonin", "labaa", "Sérotonine (5-HT)", "Serotonin (5-HT)", "C₁₀H₁₂N₂O", "amine biogène", "biogenic amine", "Tryptophane → 5-HTP → sérotonine ; régule humeur, appétit et motilité intestinale.", "Tryptophan → 5-HTP → serotonin; regulates mood, appetite and gut motility."],
  ["melatonin", "labaa", "Mélatonine", "Melatonin", "C₁₃H₁₆N₂O₂", "hormone pinéale", "pineal hormone", "Dérivée de la sérotonine dans la glande pinéale.", "Derived from serotonin in the pineal gland."],
  ["hiaa5", "labaa", "Acide 5-hydroxyindolacétique (5-HIAA)", "5-Hydroxyindoleacetic acid (5-HIAA)", "C₁₀H₉NO₃", "métabolite urinaire de la sérotonine", "urinary serotonin metabolite", "Dosé dans l'urine (marqueur des tumeurs carcinoïdes).", "Measured in urine (marker of carcinoid tumors)."],
  ["creatine", "labcreat", "Créatine", "Creatine", "C₄H₉N₃O₂", "dérivé d'acide aminé", "amino acid derivative", "Synthétisée à partir d'arginine, glycine et méthionine ; stockée sous forme de phosphocréatine dans le muscle.", "Made from arginine, glycine and methionine; stored as phosphocreatine in muscle."],
  ["creatinine", "labcreat", "Créatinine", "Creatinine", "C₄H₇N₃O", "déchet du muscle", "muscle waste product", "Produite à débit stable à partir de la créatine ; sa clairance estime le DFG.", "Produced at a steady rate from creatine; its clearance estimates the GFR."],
  ["hypoxanthine", "laburic", "Hypoxanthine", "Hypoxanthine", "C₅H₄N₄O", "purine", "purine", "Base recyclée en IMP par la HGPRT ; oxydée en xanthine par la xanthine oxydase.", "Base recycled to IMP by HGPRT; oxidized to xanthine by xanthine oxidase."],
  ["xanthine", "laburic", "Xanthine", "Xanthine", "C₅H₄N₄O₂", "purine", "purine", "Oxydée en acide urique par la xanthine oxydase.", "Oxidized to uric acid by xanthine oxidase."],
  ["uricacid", "laburic", "Acide urique", "Uric acid", "C₅H₄N₄O₃", "produit final du catabolisme des purines", "end product of purine catabolism", "Peu soluble : en excès, les cristaux d'urate causent la goutte.", "Poorly soluble: in excess, urate crystals cause gout."],
];

const cardsByChapter = new Map<string, LibraryCardSeed[]>();

function push(key: string, card: LibraryCardSeed): void {
  const [semestre, ordre] = CHAPTERS[key];
  const id = `${semestre}-${ordre}`;
  const list = cardsByChapter.get(id) ?? [];
  list.push(card);
  cardsByChapter.set(id, list);
}

for (const [code3, code1, nameFr, nameEn, formula, clsFr, clsEn, noteFr, noteEn] of AMINO) {
  push("aa", {
    question_fr: "Identifie cet acide aminé à partir de sa structure (nom, sigle, classe).",
    question_en: "Identify this amino acid from its structure (name, symbol, class).",
    answer_fr: `${nameFr} (${code3}, ${code1}) — ${formula}, ${clsFr}. ${noteFr}`,
    answer_en: `${nameEn} (${code3}, ${code1}) — ${formula}, ${clsEn}. ${noteEn}`,
    visual_key: `amino/${code3}`,
  });
}

for (const [visual, chapter, nameFr, nameEn, formula, clsFr, clsEn, noteFr, noteEn] of MOLS) {
  push(chapter, {
    question_fr: "Identifie cette molécule à partir de sa structure.",
    question_en: "Identify this molecule from its structure.",
    answer_fr: `${nameFr} (${formula}) — ${clsFr}. ${noteFr}`,
    answer_en: `${nameEn} (${formula}) — ${clsEn}. ${noteEn}`,
    visual_key: `mol/${visual}`,
  });
}

// Ajoute les cartes de structure à la suite des cartes existantes de chaque chapitre.
export function addMoleculeCards(chapters: LibraryChapterSeed[], semestre: 1 | 2): LibraryChapterSeed[] {
  return chapters.map((chapter) => {
    const extra = cardsByChapter.get(`${semestre}-${chapter.ordre}`);
    return extra ? { ...chapter, cards: [...chapter.cards, ...extra] } : chapter;
  });
}

// Utilisé par le contrôle : clés de visuels référencées par les cartes.
export const MOLECULE_VISUAL_KEYS: string[] = [
  ...AMINO.map(([code3]) => `amino/${code3}`),
  ...MOLS.map(([visual]) => `mol/${visual}`),
];
