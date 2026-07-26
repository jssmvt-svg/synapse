const TOKEN_KEY = "synapse_token";

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}
export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}
export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const isFormData = options.body instanceof FormData;

  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(body.error ?? "Erreur inconnue");
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

export interface User {
  id: number;
  email: string;
  langPref: "fr" | "en";
}

export interface DocumentSummary {
  id: number;
  filename: string;
  uploaded_at: number;
}

export interface DeckSummary {
  id: number;
  document_id: number;
  title_fr: string;
  title_en: string;
  created_at: number;
}

export interface Flashcard {
  id: number;
  question_fr: string;
  question_en: string;
  answer_fr: string;
  answer_en: string;
}

export interface Synthesis {
  content_fr: string;
  content_en: string;
}

export const api = {
  register: (email: string, password: string, langPref: "fr" | "en") =>
    request<{ token: string; user: User }>("/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, langPref }),
    }),
  login: (email: string, password: string) =>
    request<{ token: string; user: User }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  me: () => request<User>("/auth/me"),
  setLang: (langPref: "fr" | "en") =>
    request<{ langPref: string }>("/auth/lang", {
      method: "PATCH",
      body: JSON.stringify({ langPref }),
    }),
  uploadDocument: (file: File) => {
    const form = new FormData();
    form.append("file", file);
    return request<{ id: number; filename: string }>("/documents/upload", {
      method: "POST",
      body: form,
    });
  },
  listDocuments: () => request<DocumentSummary[]>("/documents"),
  generate: (documentId: number) =>
    request<{ deckId: number; documentId: number; cardCount: number }>(
      `/documents/${documentId}/generate`,
      { method: "POST" },
    ),
  getSynthesis: (documentId: number) => request<Synthesis>(`/documents/${documentId}/synthesis`),
  listDecks: () => request<DeckSummary[]>("/decks"),
  getDeck: (id: number) => request<DeckSummary>(`/decks/${id}`),
  getFlashcards: (id: number) => request<Flashcard[]>(`/decks/${id}/flashcards`),
};
