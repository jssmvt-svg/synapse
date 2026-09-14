import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setToken } from "../api";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

export function Register() {
  const { t, lang } = useLang();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [track, setTrack] = useState<"dentaire" | "medecine" | "">("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const passwordValid = hasLength && hasUppercase && hasDigit;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!track) {
      setError(t.trackLabel);
      return;
    }
    if (!passwordValid) {
      return;
    }
    setBusy(true);
    try {
      const { token, user } = await api.register({
        firstName,
        lastName,
        email,
        password,
        phone,
        track,
        langPref: lang,
      });
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
        <h2>{t.register}</h2>
        <div className="form-row-2">
          <label>
            {t.firstName}
            <input type="text" autoComplete="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>
          <label>
            {t.lastName}
            <input type="text" autoComplete="family-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
        </div>
        <label>
          {t.email}
          <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          {t.password}
          <div className="input-eye-wrap">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn-eye"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? t.hidePassword : t.showPassword}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </label>
        <ul className="password-hints">
          <li className={hasLength ? "hint-ok" : ""}>{t.passwordHintLength}</li>
          <li className={hasUppercase ? "hint-ok" : ""}>{t.passwordHintUppercase}</li>
          <li className={hasDigit ? "hint-ok" : ""}>{t.passwordHintDigit}</li>
        </ul>
        <label>
          {t.phone}
          <input type="tel" autoComplete="tel" placeholder="+33 6 12 34 56 78" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <fieldset className="track-choice">
          <legend>{t.trackLabel}</legend>
          <label>
            <input type="radio" name="track" checked={track === "dentaire"} onChange={() => setTrack("dentaire")} required />
            {t.trackDentaire}
          </label>
          <label>
            <input type="radio" name="track" checked={track === "medecine"} onChange={() => setTrack("medecine")} />
            {t.trackMedecine}
          </label>
        </fieldset>
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
