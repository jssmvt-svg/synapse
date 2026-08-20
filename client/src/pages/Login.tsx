import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setToken } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

export function Login() {
  const { t } = useLang();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const { token, user } = await api.login(email, password);
      setToken(token);
      setUser(user);
      navigate("/dashboard");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span>{t.appName}</span>
      </div>
      <p className="auth-intro">{t.authIntro}</p>
      <form onSubmit={onSubmit} className="auth-form">
        <h2>{t.login}</h2>
        <label>
          {t.email}
          <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          {t.password}
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={busy}>
          {t.submit}
        </button>
        <p>
          {t.noAccount} <Link to="/register">{t.register}</Link>
        </p>
      </form>
    </div>
  );
}
