import { lazy, Suspense, type ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth";
import { Landing } from "./pages/Landing";
import { Legal } from "./pages/Legal";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { authenticatedLibraryRoutePatterns } from "./libraryRoutes";

const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const DeckView = lazy(() => import("./pages/DeckView").then((m) => ({ default: m.DeckView })));
const Duel = lazy(() => import("./pages/Duel").then((m) => ({ default: m.Duel })));
const Library = lazy(() => import("./pages/Library").then((m) => ({ default: m.Library })));
const LibraryChapterView = lazy(() => import("./pages/LibraryChapterView").then((m) => ({ default: m.LibraryChapterView })));
const LibrarySubjectView = lazy(() => import("./pages/LibrarySubjectView").then((m) => ({ default: m.LibrarySubjectView })));
const SynthesisView = lazy(() => import("./pages/SynthesisView").then((m) => ({ default: m.SynthesisView })));
const Statistics = lazy(() => import("./pages/Statistics").then((m) => ({ default: m.Statistics })));
const LibrarySemesterView = lazy(() => import("./pages/LibrarySemesterView").then((m) => ({ default: m.LibrarySemesterView })));
const Admin = lazy(() => import("./pages/Admin").then((m) => ({ default: m.Admin })));

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
    <Suspense fallback={<p>...</p>}>
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
      <Route path="/legal" element={<Legal />} />
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
        path="/duel"
        element={<RequireAuth><Duel /></RequireAuth>}
      />
      <Route
        path="/duel/:code"
        element={<RequireAuth><Duel /></RequireAuth>}
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
    </Suspense>
  );
}
