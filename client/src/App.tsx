import type { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth";
import { Dashboard } from "./pages/Dashboard";
import { DeckView } from "./pages/DeckView";
import { Library } from "./pages/Library";
import { LibraryChapterView } from "./pages/LibraryChapterView";
import { LibrarySubjectView } from "./pages/LibrarySubjectView";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SynthesisView } from "./pages/SynthesisView";
import { Statistics } from "./pages/Statistics";
import { LibrarySemesterView } from "./pages/LibrarySemesterView";
import { Admin } from "./pages/Admin";
import { MyDeck } from "./pages/MyDeck";
import { authenticatedLibraryRoutePatterns } from "./libraryRoutes";

function RequireAuth({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();
  if (loading) return <p>...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function PublicOnly({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();
  if (loading) return <p>...</p>;
  if (user) return <Navigate to="/dashboard" replace />;
  return children;
}

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicOnly>
            <Landing />
          </PublicOnly>
        }
      />
      <Route
        path="/login"
        element={
          <PublicOnly>
            <Login />
          </PublicOnly>
        }
      />
      <Route
        path="/register"
        element={
          <PublicOnly>
            <Register />
          </PublicOnly>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/deck/:id"
        element={
          <RequireAuth>
            <DeckView />
          </RequireAuth>
        }
      />
      <Route
        path="/document/:id/synthesis"
        element={
          <RequireAuth>
            <SynthesisView />
          </RequireAuth>
        }
      />
      <Route
        path={authenticatedLibraryRoutePatterns.catalogue}
        element={
          <RequireAuth>
            <Library />
          </RequireAuth>
        }
      />
      <Route
        path={authenticatedLibraryRoutePatterns.chapter}
        element={
          <RequireAuth>
            <LibraryChapterView />
          </RequireAuth>
        }
      />
      <Route
        path={authenticatedLibraryRoutePatterns.personalDeck}
        element={<RequireAuth><MyDeck /></RequireAuth>}
      />
      <Route
        path={authenticatedLibraryRoutePatterns.subject}
        element={
          <RequireAuth>
            <LibrarySubjectView />
          </RequireAuth>
        }
      />
      <Route
        path={authenticatedLibraryRoutePatterns.semester}
        element={<RequireAuth><LibrarySemesterView /></RequireAuth>}
      />
      <Route
        path={authenticatedLibraryRoutePatterns.semesterSubject}
        element={<RequireAuth><LibrarySubjectView /></RequireAuth>}
      />
      <Route
        path="/admin"
        element={<RequireAuth><Admin /></RequireAuth>}
      />
      <Route
        path="/statistics"
        element={
          <RequireAuth>
            <Statistics />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
