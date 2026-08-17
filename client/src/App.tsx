import type { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth";
import { Dashboard } from "./pages/Dashboard";
import { DeckView } from "./pages/DeckView";
import { Library } from "./pages/Library";
import { LibraryChapterView } from "./pages/LibraryChapterView";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SynthesisView } from "./pages/SynthesisView";

function RequireAuth({ children }: { children: ReactElement }) {
  const { user, loading } = useAuth();
  if (loading) return <p>...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
        path="/library"
        element={
          <RequireAuth>
            <Library />
          </RequireAuth>
        }
      />
      <Route
        path="/library/chapter/:id"
        element={
          <RequireAuth>
            <LibraryChapterView />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
