import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

const DICT = {
  fr: {
    appName: "Synapse",
    login: "Connexion",
    register: "Créer un compte",
    email: "Email",
    password: "Mot de passe",
    submit: "Valider",
    logout: "Déconnexion",
    dashboard: "Mes documents",
    uploadPrompt: "Glisse un cours (PDF, DOCX ou TXT) — la génération IA arrive bientôt",
    uploadButton: "Uploader",
    generate: "Générer flashcards + synthèse",
    generating: "Génération en cours… (peut prendre une minute)",
    aiComingSoon: "Génération IA — bientôt disponible",
    viewDeck: "Voir les flashcards",
    viewSynthesis: "Voir la synthèse",
    noDocuments: "Aucun document pour l'instant. Uploade ton premier cours !",
    sourcesTitle: "Sources",
    chatTitle: "Discussion avec Sage",
    studioTitle: "Studio",
    comingSoon: "Bientôt disponible",
    sageIntro:
      "Bonjour, je suis Sage 🐱. Bientôt je pourrai répondre à tes questions sur tes cours de santé. Patience, jeune étudiant.",
    chatPlaceholder: "Pose une question à Sage…",
    chatSend: "Envoyer",
    studioFlashcards: "Flashcards",
    studioAudio: "Audio",
    studioVideo: "Vidéo",
    studioQuiz: "Quiz",
    selectDocumentHint: "Sélectionne un document à gauche pour générer des flashcards.",
    flip: "Retourner",
    next: "Suivante",
    previous: "Précédente",
    cardProgress: (i: number, total: number) => `Carte ${i}/${total}`,
    haveAccount: "Déjà un compte ?",
    noAccount: "Pas encore de compte ?",
    libraryTitle: "Bibliothèque",
    libraryComingSoon: "Contenu à venir",
    anneeLabel: (n: number) => `Année ${n}`,
    semestreLabel: (n: number) => `Semestre ${n}`,
  },
  en: {
    appName: "Synapse",
    login: "Log in",
    register: "Create an account",
    email: "Email",
    password: "Password",
    submit: "Submit",
    logout: "Log out",
    dashboard: "My documents",
    uploadPrompt: "Drop a course file (PDF, DOCX or TXT) — AI generation is coming soon",
    uploadButton: "Upload",
    generate: "Generate flashcards + synthesis",
    generating: "Generating… (can take a minute)",
    aiComingSoon: "AI generation — coming soon",
    viewDeck: "View flashcards",
    viewSynthesis: "View synthesis",
    noDocuments: "No documents yet. Upload your first course!",
    sourcesTitle: "Sources",
    chatTitle: "Chat with Sage",
    studioTitle: "Studio",
    comingSoon: "Coming soon",
    sageIntro:
      "Hi, I'm Sage 🐱. Soon I'll be able to answer your questions about your health courses. Patience, young student.",
    chatPlaceholder: "Ask Sage a question…",
    chatSend: "Send",
    studioFlashcards: "Flashcards",
    studioAudio: "Audio",
    studioVideo: "Video",
    studioQuiz: "Quiz",
    selectDocumentHint: "Select a document on the left to generate flashcards.",
    flip: "Flip",
    next: "Next",
    previous: "Previous",
    cardProgress: (i: number, total: number) => `Card ${i}/${total}`,
    haveAccount: "Already have an account?",
    noAccount: "No account yet?",
    libraryTitle: "Library",
    libraryComingSoon: "Content coming soon",
    anneeLabel: (n: number) => `Year ${n}`,
    semestreLabel: (n: number) => `Semester ${n}`,
  },
} as const;

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof DICT)["fr"];
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("synapse_lang") as Lang | null) ?? "fr",
  );

  const updateLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem("synapse_lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: updateLang, t: DICT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
