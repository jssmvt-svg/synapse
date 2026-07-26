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
    uploadPrompt: "Glisse un cours (PDF, DOCX ou TXT) pour générer flashcards et synthèse",
    uploadButton: "Uploader",
    generate: "Générer flashcards + synthèse",
    generating: "Génération en cours… (peut prendre une minute)",
    viewDeck: "Voir les flashcards",
    viewSynthesis: "Voir la synthèse",
    noDocuments: "Aucun document pour l'instant. Uploade ton premier cours !",
    flip: "Retourner",
    next: "Suivante",
    previous: "Précédente",
    cardProgress: (i: number, total: number) => `Carte ${i}/${total}`,
    haveAccount: "Déjà un compte ?",
    noAccount: "Pas encore de compte ?",
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
    uploadPrompt: "Drop a course file (PDF, DOCX or TXT) to generate flashcards and a synthesis",
    uploadButton: "Upload",
    generate: "Generate flashcards + synthesis",
    generating: "Generating… (can take a minute)",
    viewDeck: "View flashcards",
    viewSynthesis: "View synthesis",
    noDocuments: "No documents yet. Upload your first course!",
    flip: "Flip",
    next: "Next",
    previous: "Previous",
    cardProgress: (i: number, total: number) => `Card ${i}/${total}`,
    haveAccount: "Already have an account?",
    noAccount: "No account yet?",
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
