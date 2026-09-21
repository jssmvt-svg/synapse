import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setToken, type Track } from "../api";
import { COUNTRY_CODES } from "../countryCodes";
import { useAuth } from "../auth";
import { useLang } from "../i18n";

const PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

export function Register() {
  const { t, lang, tx } = useLang();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneCountryCode, setPhoneCountryCode] = useState("+33");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [track, setTrack] = useState<Track | "">("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const passwordValid = PASSWORD_RULE.test(password);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!passwordValid) {
      setError(t.passwordRequirements);
      return;
    }
    if (!track) {
      setError(tx("Merci de préciser ta filière.", "Please choose your track."));
      return;
    }
    setBusy(true);
    try {
      const { token, user } = await api.register({
        firstName,
        lastName,
        email,
        password,
        phoneCountryCode,
        phoneNumber,
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
        <div className="auth-form-row">
          <label>
            {t.firstName}
            <input
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            {t.lastName}
            <input
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <label>
          {t.email}
          <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          {t.password}
          <div className="password-field">
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
              className="password-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? t.hidePassword : t.showPassword}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </label>
        <p className={`password-hint${password.length > 0 && !passwordValid ? " password-hint-error" : ""}`}>
          {t.passwordRequirements}
        </p>
        <label>
          {t.phone}
          <div className="auth-form-row phone-row">
            <select value={phoneCountryCode} onChange={(e) => setPhoneCountryCode(e.target.value)} aria-label={t.phoneCountry}>
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
            <input
              type="tel"
              autoComplete="tel-national"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={tx("6 12 34 56 78", "6 12 34 56 78")}
              required
            />
          </div>
        </label>
        <label>
          {t.track}
          <select value={track} onChange={(e) => setTrack(e.target.value as Track)} required>
            <option value="" disabled>{t.trackPlaceholder}</option>
            <option value="medecine">{t.trackMedicine}</option>
            <option value="dentaire">{t.trackDentistry}</option>
          </select>
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
