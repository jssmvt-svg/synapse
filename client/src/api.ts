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
  role: "student" | "admin";
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

export interface PersonalDeckNotion {
  slug: string;
  label: string;
}

export interface PersonalDeckContext {
  chapter: Pick<LibraryChapter, "id" | "titre_fr" | "titre_en" | "matiere">;
  notions: PersonalDeckNotion[];
  courseText: string;
  courseWarning: string | null;
}

export interface PersonalDeckPreviewCard {
  front: string;
  back: string;
  notionSlug: string | null;
  included: boolean;
  duplicate: boolean;
}

export interface PersonalDeckPreview {
  previewToken: string;
  cards: PersonalDeckPreviewCard[];
  warnings: string[];
}

export interface PersonalDeckCard {
  id: number;
  front: string;
  back: string;
  notion_slug: string | null;
  source: "ai_import" | "manual";
  created_at: number;
  mastery: number | null;
  review_count: number | null;
  last_reviewed_at: number | null;
}

export interface PersonalDeckCards {
  cards: PersonalDeckCard[];
  notions: PersonalDeckNotion[];
  progress: Array<{
    notionSlug: string;
    label: string;
    total: number;
    reviewed: number;
    mastered: number;
    toReview: number;
  }>;
}

export interface Synthesis {
  content_fr: string;
  content_en: string;
}

export interface LibraryChapter {
  id: number;
  annee: number;
  semestre: number;
  matiere: string;
  ordre: number;
  titre_fr: string;
  titre_en: string;
  description_fr: string;
  description_en: string;
  icone: string;
}

export interface LibraryResource {
  id: number;
  ordre: number;
  resource_type: "course" | "revision" | string;
  titre_fr: string;
  titre_en: string;
  content_fr: string;
  content_en: string;
  source_label: string;
}

export interface LibraryQcmOption {
  id: number;
  key: string;
  label_fr: string;
  label_en: string;
}

export interface LibraryQcmQuestion {
  id: number;
  ordre: number;
  resource_id: number | null;
  prompt_fr: string;
  prompt_en: string;
  explanation_fr: string;
  explanation_en: string;
  multiple_answers: boolean;
  source_label: string;
  options: LibraryQcmOption[];
}

export interface LibraryExam {
  id: number;
  titre_fr: string;
  titre_en: string;
  duration_seconds: number;
  question_count: number;
  question_orders: number[] | string;
  source_label: string;
}

export interface LibraryProgress {
  resources: Array<{ resource_id: number; completed_at: number | null; updated_at: number }>;
  flashcards: Array<{
    flashcard_id: number;
    mastery: number;
    review_count: number;
    last_reviewed_at: number | null;
  }>;
  qcmAttempts: Array<{
    question_id: number;
    selected_option_keys: string;
    is_correct: boolean;
    score: number;
    attempted_at: number;
  }>;
  examAttempts: Array<{
    id: number;
    exam_id: number;
    score: number;
    started_at: number;
    completed_at: number;
  }>;
}

export interface LibraryChapterDetail {
  chapter: LibraryChapter;
  resources: LibraryResource[];
  flashcards: Flashcard[];
  qcm: LibraryQcmQuestion[];
  exams: LibraryExam[];
  progress: LibraryProgress;
}

export interface QcmAttemptResult {
  id: number;
  isCorrect: boolean;
  score: number;
  correction: {
    correctOptionKeys: string[];
    explanation_fr: string;
    explanation_en: string;
  };
  attemptedAt: number;
}

export interface ExamStart {
  sessionId: number;
  startedAt: number;
  expiresAt: number;
  questionOrders: number[];
}

export interface ExamReviewItem {
  questionId: number;
  prompt_fr: string;
  prompt_en: string;
  selectedOptionKeys: string[];
  correctOptionKeys: string[];
  explanation_fr: string;
  explanation_en: string;
}

export interface ExamAttemptResult {
  id: number;
  score: number;
  correctCount: number;
  questionCount: number;
  timedOut: boolean;
  completedAt: number;
  review: ExamReviewItem[];
}

export interface ProgressChapter {
  id: number;
  ordre: number;
  titre_fr: string;
  titre_en: string;
  description_fr: string;
  description_en: string;
  resource_total: number;
  resources_completed: number;
  flashcard_total: number;
  flashcards_reviewed: number;
  flashcards_mastered: number;
  flashcards_to_review: number;
  qcm_attempts: number;
  qcm_average_score: number;
  exam_attempts: number;
  exam_average_score: number;
}

export interface ProgressSummary {
  overall: {
    resourceTotal: number;
    resourcesCompleted: number;
    flashcardTotal: number;
    flashcardsReviewed: number;
    flashcardsMastered: number;
    qcmAttempts: number;
    qcmScoreSum: number;
    qcmAverageScore: number;
    examAttempts: number;
  };
  chapters: ProgressChapter[];
  recommendation: {
    kind: "resource" | "flashcards" | "qcm" | "exam";
    chapterId: number;
    resourceId?: number;
    title_fr: string;
    title_en: string;
    reason: string;
  } | null;
  recentActivity: Array<{
    type: "resource" | "flashcard" | "qcm" | "exam";
    occurred_at: number;
    chapter_id: number;
    titre_fr: string;
    titre_en: string;
    item_fr: string | null;
    item_en: string | null;
    score: number | null;
  }>;
}

export interface LibraryMatiere {
  matiere: string;
  chapitres: LibraryChapter[];
}

export interface LibrarySemestre {
  semestre: number;
  matieres: LibraryMatiere[];
}

export interface LibraryAnnee {
  annee: number;
  semestres: LibrarySemestre[];
}

export interface LibrarySubject {
  slug: string;
  matiere: string;
  titre_fr: string;
  titre_en: string;
  description_fr: string;
  description_en: string;
  accent: "coral" | "teal" | "violet";
  chapters: LibraryChapter[];
}

export interface StudySemester {
  id: number;
  year_number: number;
  semester_number: number;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  is_published: boolean;
  subject_count: number;
  chapter_count: number;
  has_access: boolean;
}

export interface StudySemesterDetail {
  semester: Omit<StudySemester, "subject_count" | "chapter_count" | "has_access">;
  subjects: LibrarySubject[];
}

export interface BillingStatus {
  role: "student" | "admin";
  subscriptionStatus: "active" | "trialing" | "inactive";
  subscriptionPeriodEnd: number | null;
  hasYearOneAccess: boolean;
  billingAvailable: boolean;
  billingMessage: string;
}

export interface AdminSemester {
  id: number;
  year_number: number;
  semester_number: number;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  is_published: boolean;
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
  getPersonalDeckContext: (chapterId: number) =>
    request<PersonalDeckContext>(`/personal-deck/chapters/${chapterId}/context`),
  createPersonalDeckPrompt: (chapterId: number, courseText: string) =>
    request<{ prompt: string; warning: string | null }>(`/personal-deck/chapters/${chapterId}/prompt`, {
      method: "POST",
      body: JSON.stringify({ courseText }),
    }),
  previewPersonalDeckImport: (chapterId: number, rawText: string) =>
    request<PersonalDeckPreview>(`/personal-deck/chapters/${chapterId}/preview`, {
      method: "POST",
      body: JSON.stringify({ rawText }),
    }),
  savePersonalDeckCards: (chapterId: number, previewToken: string, cards: PersonalDeckPreviewCard[]) =>
    request<{ addedCount: number; skippedCount: number }>(`/personal-deck/chapters/${chapterId}/cards`, {
      method: "POST",
      body: JSON.stringify({ previewToken, cards }),
    }),
  getPersonalDeckCards: (chapterId: number) =>
    request<PersonalDeckCards>(`/personal-deck/chapters/${chapterId}/cards`),
  ratePersonalDeckCard: (chapterId: number, cardId: number, mastery: number) =>
    request<{ cardId: number; mastery: number }>(`/personal-deck/chapters/${chapterId}/cards/${cardId}/mastery`, {
      method: "POST",
      body: JSON.stringify({ mastery }),
    }),
  getLibrary: () => request<LibraryAnnee[]>("/library"),
  getLibrarySubjects: () => request<LibrarySubject[]>("/library/subjects"),
  getLibrarySubject: (slug: string) => request<LibrarySubject>(`/library/subjects/${encodeURIComponent(slug)}`),
  getStudySemesters: () => request<StudySemester[]>("/library/semesters"),
  getStudySemester: (semester: number) => request<StudySemesterDetail>(`/library/semesters/${semester}`),
  getBillingStatus: () => request<BillingStatus>("/billing/status"),
  startCheckout: () => request<{ url: string }>("/billing/checkout", { method: "POST" }),
  openBillingPortal: () => request<{ url: string }>("/billing/portal", { method: "POST" }),
  getAdminSemesters: () => request<AdminSemester[]>("/admin/semesters"),
  setSemesterPublished: (semester: number, isPublished: boolean) =>
    request<AdminSemester>(`/admin/semesters/${semester}`, {
      method: "PATCH",
      body: JSON.stringify({ isPublished }),
    }),
  getProgressSummary: () => request<ProgressSummary>("/library/progress-summary"),
  getLibraryFlashcards: (chapterId: number) =>
    request<Flashcard[]>(`/library/chapters/${chapterId}/flashcards`),
  getLibraryChapter: (chapterId: number) =>
    request<LibraryChapterDetail>(`/library/chapters/${chapterId}`),
  completeLibraryResource: (chapterId: number, resourceId: number, completed: boolean) =>
    request<{ resourceId: number; completed: boolean }>(`/library/chapters/${chapterId}/course-progress`, {
      method: "POST",
      body: JSON.stringify({ resourceId, completed }),
    }),
  rateLibraryFlashcard: (chapterId: number, flashcardId: number, mastery: number) =>
    request<{ flashcardId: number; mastery: number }>(`/library/chapters/${chapterId}/flashcard-mastery`, {
      method: "POST",
      body: JSON.stringify({ flashcardId, mastery }),
    }),
  submitQcmAttempt: (chapterId: number, questionId: number, selectedOptionKeys: string[]) =>
    request<QcmAttemptResult>(`/library/chapters/${chapterId}/qcm-attempts`, {
      method: "POST",
      body: JSON.stringify({ questionId, selectedOptionKeys }),
    }),
  startChapterExam: (chapterId: number, examId: number) =>
    request<ExamStart>(`/library/chapters/${chapterId}/exams/${examId}/start`, { method: "POST" }),
  submitChapterExam: (chapterId: number, examId: number, sessionId: number, answers: Record<string, string[]>) =>
    request<ExamAttemptResult>(`/library/chapters/${chapterId}/exams/${examId}/attempts`, {
      method: "POST",
      body: JSON.stringify({ sessionId, answers }),
    }),
};
