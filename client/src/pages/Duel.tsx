import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api, type DuelOverview, type DuelState } from "../api";
import { avatarInfo, loadAvatarCode, PRESETS, saveAvatarCode } from "../components/avatars";
import {
  ELEMENTS,
  encodeAvatar,
  HAIR_COLORS,
  HAIR_STYLES,
  OUTFITS,
  parseAvatar,
  SKIN_TONES,
  type HairStyle,
} from "../components/avatarSprite";
import { DuelStage } from "../components/DuelStages";
import {
  hitDelayFor,
  loadMode,
  modeInfo,
  MODES,
  saveMode,
  useCopy,
  useLaggedHp,
  type GameMode,
} from "../components/duelModes";
import { PixelFighter } from "../components/PixelFighter";
import { useLang, bi, Back } from "../i18n";
import "../duel.css";
import "../duelModes.css";

const BOT_AFTER_MS = 10_000;
const POLL_MS = 1000;

export function Duel() {
  const { code } = useParams();
  return code ? <Arena key={code} code={code.toUpperCase()} /> : <Lobby />;
}

const HAIR_LABELS: Record<HairStyle, { fr: string; en: string }> = {
  spiky: { fr: "Pointes", en: "Spiky" },
  long: { fr: "Longs", en: "Long" },
  twin: { fr: "Couettes", en: "Pigtails" },
  pony: { fr: "Queue", en: "Ponytail" },
  short: { fr: "Courts", en: "Short" },
  afro: { fr: "Afro", en: "Afro" },
  braids: { fr: "Tresses", en: "Braids" },
  bun: { fr: "Chignon", en: "Bun" },
  hijab: { fr: "Voile", en: "Headscarf" },
};

function Swatches({
  label,
  colors,
  selected,
  onSelect,
}: {
  label: string;
  colors: string[];
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="duel-field">
      <span className="duel-field-label">{label}</span>
      <div className="duel-swatches" role="group" aria-label={label}>
        {colors.map((color, index) => (
          <button
            key={color + index}
            type="button"
            className="duel-swatch"
            aria-pressed={index === selected}
            aria-label={`${label} ${index + 1}`}
            style={{ background: color }}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

function AvatarEditor({ code, onChange }: { code: string; onChange: (code: string) => void }) {
  const l = useCopy();
  const { lang } = useLang();
  const config = parseAvatar(code);
  const info = avatarInfo(code);
  const update = (patch: Partial<typeof config>) => onChange(encodeAvatar({ ...config, ...patch }));

  return (
    <div className="duel-editor">
      <div className="duel-editor-preview">
        <PixelFighter avatar={code} facing="right" label={l("Aperçu de ton avatar", "Your avatar preview")} scale={7} />
      </div>
      <div className="duel-editor-controls">
        <Swatches label={l("Teint", "Skin tone")} colors={SKIN_TONES.map(([tone]) => tone)} selected={config.skin} onSelect={(skin) => update({ skin })} />
        <div className="duel-field">
          <span className="duel-field-label">{l("Coiffure", "Hair")}</span>
          <div className="duel-chips" role="group" aria-label={l("Coiffure", "Hair")}>
            {HAIR_STYLES.map((hair) => (
              <button key={hair} type="button" className="duel-chip" aria-pressed={hair === config.hair} onClick={() => update({ hair })}>
                {bi(HAIR_LABELS[hair], lang)}
              </button>
            ))}
          </div>
        </div>
        <Swatches
          label={config.hair === "hijab" ? l("Couleur du voile", "Scarf colour") : l("Couleur des cheveux", "Hair colour")}
          colors={HAIR_COLORS.map(([color]) => color)}
          selected={config.hairColor}
          onSelect={(hairColor) => update({ hairColor })}
        />
        <Swatches label={l("Couleur de la tenue", "Outfit colour")} colors={OUTFITS.map((outfit) => outfit.O)} selected={config.outfit} onSelect={(outfit) => update({ outfit })} />
        <div className="duel-field">
          <span className="duel-field-label">{l("Tenue", "Style")}</span>
          <div className="duel-chips" role="group" aria-label={l("Tenue", "Style")}>
            <button type="button" className="duel-chip" aria-pressed={config.bottom === "p"} onClick={() => update({ bottom: "p" })}>
              {l("Pantalon", "Trousers")}
            </button>
            <button type="button" className="duel-chip" aria-pressed={config.bottom === "s"} onClick={() => update({ bottom: "s" })}>
              {l("Jupe", "Skirt")}
            </button>
          </div>
        </div>
        <div className="duel-field">
          <span className="duel-field-label">{l("Élément de combat", "Fighting element")}</span>
          <div className="duel-chips" role="group" aria-label={l("Élément de combat", "Fighting element")}>
            {ELEMENTS.map((element, index) => (
              <button
                key={element.name}
                type="button"
                className="duel-chip"
                aria-pressed={index === config.element}
                onClick={() => update({ element: index })}
                style={{ "--chip-color": element.color } as CSSProperties}
              >
                <i className="duel-chip-dot" />
                {element.name}
              </button>
            ))}
          </div>
          <p className="duel-muted">{info.attacks.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}

function Lobby() {
  const l = useCopy();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [overview, setOverview] = useState<DuelOverview | null>(null);
  const [joinCode, setJoinCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [avatarCode, setAvatarCode] = useState<string>(loadAvatarCode);
  const [mode, setMode] = useState<GameMode>(loadMode);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    api.duelOverview().then(setOverview).catch((err: Error) => setError(err.message));
  }, []);

  function chooseAvatar(code: string) {
    setAvatarCode(code);
    saveAvatarCode(code);
  }

  function chooseMode(next: GameMode) {
    setMode(next);
    saveMode(next);
  }

  async function enter(action: () => Promise<DuelState>) {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const state = await action();
      navigate(`/duel/${state.code}`);
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  const profile = overview?.profile;
  const levelProgress = profile ? profile.xp % 100 : 0;
  const selectedMode = modeInfo(mode);
  const info = avatarInfo(avatarCode);
  const moveNames = selectedMode.moves ? selectedMode.moves.map((move) => bi(move, lang)) : [...info.attacks];

  return (
    <main className="duel-page">
      <Link to="/dashboard" className="duel-back"><Back /> {l("Tableau de bord", "Dashboard")}</Link>

      <header className="duel-hero">
        <p className="eyebrow">{l("Mini-jeux de révision", "Study mini-games")}</p>
        <h1>{l("Choisis ton jeu", "Pick your game")}</h1>
        <p>
          {l(
            "Quatre jeux, un seul principe : réponds juste, et vite. Enchaîne les bonnes réponses pour débloquer des super pouvoirs.",
            "Four games, one rule: answer right, and fast. Chain correct answers to unlock power-ups.",
          )}
        </p>
      </header>

      <ul className="duel-modes" aria-label={l("Jeux", "Games")}>
        {MODES.map((entry) => (
          <li key={entry.id}>
            <button className="duel-mode-card" aria-pressed={entry.id === mode} onClick={() => chooseMode(entry.id)}>
              <span className="duel-mode-icon" aria-hidden="true">{entry.icon}</span>
              <strong>{bi(entry.name, lang)}</strong>
              <span className="duel-muted">{bi(entry.tagline, lang)}</span>
            </button>
          </li>
        ))}
      </ul>

      <section className="duel-card">
        <div className="duel-avatar-head">
          <h2>{l("Ton personnage", "Your character")}</h2>
          <button type="button" className="duel-button" aria-expanded={editing} onClick={() => setEditing((open) => !open)}>
            🎨 {editing ? l("Terminer", "Done") : l("Personnaliser", "Customise")}
          </button>
        </div>
        <ul className="duel-avatars" aria-label={l("Personnages", "Characters")}>
          {PRESETS.map((preset) => (
            <li key={preset.name}>
              <button
                className="duel-avatar-card"
                aria-pressed={preset.code === avatarCode}
                onClick={() => chooseAvatar(preset.code)}
                style={{ "--avatar-color": avatarInfo(preset.code).color } as CSSProperties}
              >
                <PixelFighter avatar={preset.code} facing="right" label={preset.name} scale={3} />
                <strong>{preset.name}</strong>
                <span className="duel-muted">{preset.gender === "f" ? "♀" : "♂"}</span>
              </button>
            </li>
          ))}
        </ul>
        {editing && <AvatarEditor code={avatarCode} onChange={chooseAvatar} />}
        <ol className="duel-moves" aria-label={l("Attaques", "Moves")}>
          <li><span>{l("Dès 1 bonne réponse", "1 correct answer")}</span><strong>{moveNames[0]}</strong></li>
          <li><span>{l("2 bonnes réponses d'affilée", "2 in a row")}</span><strong>{moveNames[1]}</strong></li>
          <li><span>{l("4 d'affilée", "4 in a row")}</span><strong>{moveNames[2]}</strong></li>
        </ol>
      </section>

      {error && <p className="duel-error" role="alert">{error}</p>}

      {overview?.activeRoomCode && (
        <div className="duel-resume">
          <span>{l("Un duel est en cours.", "A duel is in progress.")}</span>
          <Link to={`/duel/${overview.activeRoomCode}`} className="duel-button">
            {l("Reprendre", "Resume")}
          </Link>
        </div>
      )}

      <section className="duel-actions">
        <button
          className="duel-button duel-button-primary"
          disabled={busy}
          onClick={() => enter(() => api.duelQuickMatch(avatarCode, mode))}
        >
          {selectedMode.icon} {l("Adversaire aléatoire", "Random opponent")}
        </button>
        <button className="duel-button" disabled={busy} onClick={() => enter(() => api.duelCreateRoom(avatarCode, mode))}>
          🔗 {l("Créer une salle privée", "Create a private room")}
        </button>
        <form
          className="duel-join"
          onSubmit={(event) => {
            event.preventDefault();
            const value = joinCode.trim().toUpperCase();
            if (value) void enter(() => api.duelJoinRoom(value, avatarCode));
          }}
        >
          <input
            value={joinCode}
            onChange={(event) => setJoinCode(event.target.value)}
            placeholder={l("Code de la salle", "Room code")}
            maxLength={5}
            aria-label={l("Code de la salle", "Room code")}
          />
          <button className="duel-button" disabled={busy || !joinCode.trim()}>
            {l("Rejoindre", "Join")}
          </button>
        </form>
      </section>

      <div className="duel-columns">
        <section className="duel-card">
          <h2>{l("Ton profil", "Your profile")}</h2>
          {profile ? (
            <>
              <p className="duel-level">
                {l("Niveau", "Level")} <strong>{profile.level}</strong>
              </p>
              <div className="duel-xpbar" aria-label="XP">
                <span style={{ width: `${levelProgress}%` }} />
              </div>
              <p className="duel-muted">
                {profile.xp} XP · {levelProgress}/100 {l("vers le niveau suivant", "to next level")}
              </p>
              <dl className="duel-stats">
                <div><dt>🪙 {l("Or", "Gold")}</dt><dd>{profile.gold}</dd></div>
                <div><dt>{l("Victoires", "Wins")}</dt><dd>{profile.wins}</dd></div>
                <div><dt>{l("Défaites", "Losses")}</dt><dd>{profile.losses}</dd></div>
                <div><dt>{l("Nuls", "Draws")}</dt><dd>{profile.draws}</dd></div>
              </dl>
            </>
          ) : (
            <p className="duel-muted">…</p>
          )}
        </section>

        <section className="duel-card">
          <h2>{l("Classement", "Leaderboard")}</h2>
          {overview && overview.leaderboard.length === 0 && (
            <p className="duel-muted">{l("Personne n'a encore joué. Sois le premier !", "Nobody has played yet. Be the first!")}</p>
          )}
          <ol className="duel-leaderboard">
            {overview?.leaderboard.map((row, index) => (
              <li key={`${row.name}-${index}`} className={row.isMe ? "duel-me" : ""}>
                <span className="duel-rank">{index + 1}</span>
                <span className="duel-name">{row.name}</span>
                <span className="duel-muted">{l("Niv.", "Lv.")} {row.level}</span>
                <strong>{row.xp} XP</strong>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

function revealLine(state: DuelState, l: (fr: string, en: string) => string): string {
  const reveal = state.reveal;
  if (!reveal) return "";
  const missed = reveal.myAnswer ? l("Raté… ta série retombe à zéro.", "Missed… your combo resets.") : l("Temps écoulé.", "Time's up.");
  let line: string;
  if (state.mode === "race") {
    line = reveal.myCorrect ? l(`Bien joué ! Ta voiture avance de ${reveal.myGain} %.`, `Nice! Your car gains ${reveal.myGain}%.`) : missed;
  } else if (state.mode === "surgery") {
    line = reveal.myCorrect ? l(`Geste réussi : opération +${reveal.myGain} %.`, `Nice move: operation +${reveal.myGain}%.`) : `${missed} ${l("Complication : constantes −25.", "Complication: vitals −25.")}`;
  } else if (state.mode === "tug") {
    line = reveal.myCorrect
      ? reveal.damageDealt > 0
        ? l(`Bien joué ! Tu tires la corde de ${reveal.damageDealt}.`, `Nice! You pull the rope by ${reveal.damageDealt}.`)
        : l("Bien joué ! Ton adversaire tire aussi fort.", "Nice! Your opponent pulls just as hard.")
      : missed;
    if (reveal.damageTaken > 0) line += " " + l(`Il te tire de ${reveal.damageTaken}.`, `He drags you by ${reveal.damageTaken}.`);
    return line;
  } else {
    line = reveal.myCorrect ? l(`Bien joué ! Tu infliges ${reveal.damageDealt} dégâts.`, `Nice! You deal ${reveal.damageDealt} damage.`) : missed;
    if (reveal.damageTaken > 0) line += " " + l(`Tu perds ${reveal.damageTaken} PV.`, `You lose ${reveal.damageTaken} HP.`);
  }
  return line;
}

function Arena({ code }: { code: string }) {
  const l = useCopy();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [state, setState] = useState<DuelState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const clockOffset = useRef(0);
  const settledTries = useRef(0);
  const busyRef = useRef(false);
  const joinTried = useRef(false);
  const [joinFailed, setJoinFailed] = useState(false);

  const apply = useCallback((next: DuelState) => {
    clockOffset.current = next.serverNow - Date.now();
    setState(next);
    setPendingKey(null);
  }, []);

  // Sondage : le serveur est la seule source de vérité (horloge, dégâts, phase).
  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    async function poll() {
      try {
        const next = await api.duelGetRoom(code);
        if (cancelled) return;
        apply(next);
        setError(null);
        const settled = next.phase === "finished" && (next.result?.rewards || !next.result || settledTries.current > 6);
        if (next.phase === "finished") settledTries.current += 1;
        if (settled) return;
      } catch (err) {
        if (cancelled) return;
        const message = (err as Error).message;
        if (/introuvable|not found/i.test(message)) {
          // Lien partagé : si on n'est pas encore dans la salle, on tente de la rejoindre.
          if (!joinTried.current) {
            joinTried.current = true;
            try {
              const joined = await api.duelJoinRoom(code, loadAvatarCode());
              if (cancelled) return;
              apply(joined);
              setError(null);
            } catch (joinError) {
              if (cancelled) return;
              setError((joinError as Error).message);
              setJoinFailed(true);
              return;
            }
          } else {
            navigate("/duel", { replace: true });
            return;
          }
        } else {
          setError(message);
        }
      }
      timer = setTimeout(poll, POLL_MS);
    }

    void poll();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [code, apply, navigate]);

  // Horloge d'affichage (le compte à rebours est recalculé avec l'heure du serveur).
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(id);
  }, []);

  // Salle annulée avant le début : retour au salon.
  useEffect(() => {
    if (state?.phase === "finished" && !state.result) navigate("/duel", { replace: true });
  }, [state, navigate]);

  const reveal = state?.reveal ?? null;
  const myHitDelay = hitDelayFor(reveal?.opponentAttackTier ?? 0);
  const foeHitDelay = hitDelayFor(reveal?.myAttackTier ?? 0);
  const maxHp = state?.maxHp ?? 150;
  const myHp = useLaggedHp(state?.me.hp ?? maxHp, myHitDelay);
  const foeHp = useLaggedHp(state?.opponent?.hp ?? maxHp, foeHitDelay);

  async function answer(optionKey: string) {
    if (!state || state.phase !== "question" || state.myAnswer || pendingKey || busyRef.current) return;
    busyRef.current = true;
    setPendingKey(optionKey);
    try {
      apply(await api.duelAnswer(code, optionKey));
    } catch (err) {
      setError((err as Error).message);
      setPendingKey(null);
    } finally {
      busyRef.current = false;
    }
  }

  async function leave() {
    const playing = state && state.phase !== "waiting" && state.phase !== "finished";
    if (playing && !window.confirm(l("Abandonner le duel ? Tu perds le match.", "Forfeit the duel? You lose the match."))) return;
    await api.duelLeave(code).catch(() => undefined);
    navigate("/duel");
  }

  async function playBot() {
    if (busyRef.current) return;
    busyRef.current = true;
    try {
      apply(await api.duelPlayBot(code));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      busyRef.current = false;
    }
  }

  // Recherche rapide sans adversaire : après 10 s, on lance un duel contre le bot.
  const waitingPublic = state?.phase === "waiting" && state.isPublic;
  useEffect(() => {
    if (!waitingPublic) return;
    const id = setTimeout(() => void playBot(), BOT_AFTER_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitingPublic, code]);

  async function playAgain() {
    try {
      const next = await api.duelQuickMatch(loadAvatarCode(), state?.mode ?? "combat");
      navigate(`/duel/${next.code}`);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function copyLink() {
    const url = `${window.location.origin}/duel/${code}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (!state) {
    return (
      <main className="duel-page">
        {error ? <p className="duel-error" role="alert">{error}</p> : <p className="duel-muted">…</p>}
        {joinFailed && <Link to="/duel" className="duel-button">{l("Retour au salon", "Back to lobby")}</Link>}
      </main>
    );
  }

  const meta = modeInfo(state.mode);
  const serverNow = now + clockOffset.current;
  const remainingMs = state.phaseEndsAt ? Math.max(0, state.phaseEndsAt - serverNow) : 0;
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const showStage = Boolean(state.opponent) && state.phase !== "waiting";
  const question = state.question;
  const promptOf = () => (lang === "fr" ? question?.promptFr : question?.promptEn) ?? "";
  const progressMode = state.mode === "race" || state.mode === "surgery";

  return (
    <main className="duel-page">
      <div className="duel-topbar">
        <button className="duel-link-button" onClick={leave}>
          <Back /> {state.phase === "finished" ? l("Quitter", "Leave") : state.phase === "waiting" ? l("Annuler", "Cancel") : l("Abandonner", "Forfeit")}
        </button>
        <span className="duel-round">
          {meta.icon} {bi(meta.name, lang)}
          {state.phase === "question" || state.phase === "reveal" ? ` · ${state.round + 1}/${state.totalRounds}` : ""}
        </span>
      </div>

      {error && <p className="duel-error" role="alert">{error}</p>}

      {state.phase === "waiting" && (
        <section className="duel-card duel-waiting">
          <p className="eyebrow">{state.isPublic ? l("Recherche d'un adversaire", "Looking for an opponent") : l("Salle privée", "Private room")}</p>
          <div className="duel-waiting-fighter">
            <PixelFighter avatar={avatarInfo(state.me.avatar).code} facing="right" label={state.me.name} scale={6} />
          </div>
          {!state.isPublic && (
            <>
              <p className="duel-code" aria-label={l("Code de la salle", "Room code")}>{code}</p>
              <p className="duel-muted">{l("Partage ce code ou ce lien avec un ami :", "Share this code or link with a friend:")}</p>
              <button className="duel-button" onClick={copyLink}>
                {copied ? l("Lien copié ✓", "Link copied ✓") : l("Copier le lien", "Copy link")}
              </button>
            </>
          )}
          <p className="duel-pulse">{l("En attente d'un adversaire…", "Waiting for an opponent…")}</p>
          <button className="duel-button" onClick={() => void playBot()}>
            {l("Jouer contre le bot maintenant", "Play against the bot now")}
          </button>
          {state.isPublic && (
            <p className="duel-muted">
              {l("Sans adversaire au bout de 10 s, le bot te défie automatiquement.", "With no opponent after 10 s, the bot will challenge you automatically.")}
            </p>
          )}
        </section>
      )}

      {showStage && state.opponent && (
        <DuelStage
          state={state}
          myHp={myHp}
          foeHp={foeHp}
          myHitDelay={myHitDelay}
          foeHitDelay={foeHitDelay}
          remainingSeconds={remainingSeconds}
        />
      )}

      {(state.phase === "question" || state.phase === "reveal") && question && (
        <section className="duel-card duel-question">
          {state.phase === "question" && (
            <div className="duel-timer" aria-label={l("Temps restant", "Time left")}>
              <span style={{ width: `${Math.min(100, (remainingMs / 20000) * 100)}%` }} />
              <em>{remainingSeconds}s</em>
            </div>
          )}
          <h2>{promptOf()}</h2>
          <ul className="duel-options">
            {question.options.map((option) => {
              const label = lang === "fr" ? option.labelFr : option.labelEn;
              const chosen = (state.myAnswer ?? pendingKey) === option.key || reveal?.myAnswer === option.key;
              const opponentChose = reveal?.opponentAnswer === option.key;
              const className = [
                "duel-option",
                chosen ? "duel-option-chosen" : "",
                reveal && option.key === reveal.correctKey ? "duel-option-correct" : "",
                reveal && chosen && option.key !== reveal.correctKey ? "duel-option-wrong" : "",
              ].join(" ");
              return (
                <li key={option.key}>
                  <button
                    className={className}
                    disabled={state.phase !== "question" || Boolean(state.myAnswer ?? pendingKey)}
                    onClick={() => void answer(option.key)}
                  >
                    <span className="duel-option-key">{option.key}</span>
                    <span>{label}</span>
                    {opponentChose && <span className="duel-foe-mark" title={l("Choix de l'adversaire", "Opponent's choice")}>👤</span>}
                  </button>
                </li>
              );
            })}
          </ul>
          {state.phase === "question" && (
            <p className="duel-muted">
              {state.myAnswer
                ? state.opponent?.answered
                  ? l("Résolution…", "Resolving…")
                  : l("Réponse envoyée — en attente de l'adversaire…", "Answer sent — waiting for your opponent…")
                : state.opponent?.answered
                  ? l("Ton adversaire a déjà répondu !", "Your opponent already answered!")
                  : l("Réponds vite : la vitesse augmente ton score.", "Answer fast: speed boosts your score.")}
            </p>
          )}
          {reveal && (
            <div className="duel-reveal">
              <p className="duel-reveal-line">{revealLine(state, l)}</p>
              <p className="duel-muted">{lang === "fr" ? reveal.explanationFr : reveal.explanationEn}</p>
            </div>
          )}
        </section>
      )}

      {state.phase === "finished" && state.result && (
        <section className={`duel-card duel-result duel-result-${state.result.outcome}`}>
          <p className="eyebrow">{meta.icon} {l("Fin de la partie", "Game over")}</p>
          <h2>
            {state.result.outcome === "win" && l("Victoire ! 🏆", "Victory! 🏆")}
            {state.result.outcome === "loss" && l("Défaite", "Defeat")}
            {state.result.outcome === "draw" && l("Match nul", "Draw")}
          </h2>
          <p className="duel-muted">
            {state.result.reason === "ko" && (state.mode === "surgery" ? l("Un patient n'a pas survécu.", "A patient did not survive.") : state.mode === "tug" ? l("Dans la boue !", "Into the mud!") : l("K.O. !", "Knockout!"))}
            {state.result.reason === "goal" && (state.mode === "race" ? l("Ligne d'arrivée franchie.", "Finish line crossed.") : l("Opération terminée.", "Operation completed."))}
            {state.result.reason === "rounds" && (progressMode ? l("Décision à la progression.", "Decided on progress.") : l("Décision aux points.", "Decided on points."))}
            {state.result.reason === "forfeit" &&
              (state.result.outcome === "win"
                ? l("Ton adversaire a abandonné.", "Your opponent forfeited.")
                : l("Tu as abandonné ou perdu la connexion.", "You forfeited or lost connection."))}
          </p>
          <p className="duel-score">
            {progressMode ? (
              <>
                {state.me.name} <strong>{state.me.progress} %</strong> — {state.opponent?.name} <strong>{state.opponent?.progress} %</strong>
              </>
            ) : (
              <>
                {state.me.name} <strong>{state.me.hp}</strong> — {state.opponent?.name} <strong>{state.opponent?.hp}</strong>
              </>
            )}
          </p>
          <p>
            {l("Bonnes réponses", "Correct answers")} : {state.me.correct}
          </p>
          {state.result.rewards ? (
            <p className="duel-rewards">
              +{state.result.rewards.xp} XP · 🪙 +{state.result.rewards.gold}
            </p>
          ) : (
            <p className="duel-muted">{l("Calcul des récompenses…", "Computing rewards…")}</p>
          )}
          <div className="duel-actions">
            <button className="duel-button duel-button-primary" onClick={playAgain}>
              {meta.icon} {l("Rejouer", "Play again")}
            </button>
            <Link to="/duel" className="duel-button">{l("Retour au salon", "Back to lobby")}</Link>
          </div>
        </section>
      )}
    </main>
  );
}
