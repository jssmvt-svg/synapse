import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setToken } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

export function Register() {
  const { t, lang } = useLang();
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
      const { token, user } = await api.register(email, password, lang);
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
      <h1>{t.appName}</h1>
      <form onSubmit={onSubmit} className="auth-form">
        <h2>{t.register}</h2>
        <label>
          {t.email}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          {t.password}
          <input
            type="password"
            minLength={8}
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
          {t.haveAccount} <Link to="/login">{t.login}</Link>
        </p>
      </form>
    </div>
  );
}
