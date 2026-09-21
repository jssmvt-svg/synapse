import type { Lang } from "../i18n";
import { type CSSProperties, type ReactNode } from "react";
import type { DuelState } from "../api";
import { useLang, bi } from "../i18n";
import { attackTierForStreak, avatarInfo, type AvatarInfo } from "./avatars";
import { buildSprite, SKIN_TONES } from "./avatarSprite";
import { modeInfo, useCopy, type GameMode } from "./duelModes";
import { PixelFighter, spriteRects } from "./PixelFighter";

export interface StageProps {
  state: DuelState;
  myHp: number;
  foeHp: number;
  myHitDelay: number;
  foeHitDelay: number;
  remainingSeconds: number;
}

export function DuelStage(props: StageProps) {
  switch (props.state.mode) {
    case "race":
      return <RaceStage {...props} />;
    case "surgery":
      return <SurgeryStage {...props} />;
    case "tug":
      return <TugStage {...props} />;
    default:
      return <CombatStage {...props} />;
  }
}

/* ---------- éléments communs ---------- */

function Backdrop({ ground = true }: { ground?: boolean }) {
  return (
    <div className="duel-bg" aria-hidden="true">
      <span className="duel-bg-sun" />
      <span className="duel-bg-far" />
      <span className="duel-bg-near" />
      {ground && <span className="duel-bg-ground" />}
    </div>
  );
}

interface MeterBarProps {
  name: string;
  value: number;
  max: number;
  tone: "me" | "foe";
  streak: number;
  kind: "hp" | "progress" | "force";
  suffix?: string;
  // Deuxième jauge fine (constantes vitales du patient).
  vitals?: { value: number; max: number };
}

function MeterBar({ name, value, max, tone, streak, kind, suffix = "", vitals }: MeterBarProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  const vitalsPercent = vitals ? Math.max(0, Math.min(100, (vitals.value / vitals.max) * 100)) : 0;
  return (
    <div className={`duel-hp duel-hp-${tone}`}>
      <div className="duel-hp-label">
        <strong>{name}</strong>
        <span>
          {Math.round(value)}
          {suffix}
        </span>
      </div>
      <div className="duel-hp-track" role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={Math.round(value)}>
        <span style={{ width: `${percent}%` }} data-kind={kind} data-low={kind === "hp" && percent <= 30} />
      </div>
      {vitals && (
        <div className="duel-hp-track duel-hp-track-thin" aria-hidden="true">
          <span style={{ width: `${vitalsPercent}%` }} data-kind="hp" data-low={vitalsPercent <= 40} />
        </div>
      )}
      <div className="duel-combo" data-active={streak >= 2}>
        {streak >= 2 ? `COMBO ×${streak}` : " "}
      </div>
    </div>
  );
}

function Hud({ state, remainingSeconds, children }: { state: DuelState; remainingSeconds: number; children: ReactNode }) {
  return (
    <div className="duel-hud">
      {children}
      <div className="duel-hud-center" style={{ gridColumn: 2, gridRow: 1 }}>
        {state.phase === "question" ? <strong>{remainingSeconds}</strong> : <strong>VS</strong>}
      </div>
    </div>
  );
}

function Hint({ mode, info, streak }: { mode: GameMode; info: AvatarInfo; streak: number }) {
  const { lang } = useLang();
  const meta = modeInfo(mode);
  const tier = attackTierForStreak(streak + 1);
  const name = meta.moves ? bi(meta.moves[tier - 1], lang) : info.attacks[tier - 1];
  return (
    <p className="duel-hint">
      {bi(meta.nextLabel, lang)} : <strong style={{ color: info.glow }}>{name}</strong>
      {tier > 1 && <span className="duel-hint-tier"> {tier === 3 ? "★★" : "★"}</span>}
    </p>
  );
}

function MoveCallout({ side, tier, text, info }: { side: "me" | "foe"; tier: number; text: string; info: AvatarInfo }) {
  const style = { "--fx-color": info.color, "--fx-glow": info.glow } as CSSProperties;
  return (
    <span className={`duel-callout duel-callout-${side} duel-callout-tier-${tier}`} style={style}>
      {text}
      {tier === 3 ? " !!" : tier === 2 ? " !" : ""}
    </span>
  );
}

function Banners({ state, remainingSeconds }: { state: DuelState; remainingSeconds: number }) {
  const l = useCopy();
  const result = state.result;
  let text: string | null = null;
  if (state.phase === "finished" && result) {
    if (state.mode === "combat" && result.reason === "ko") text = "K.O. !";
    if (state.mode === "race") text = l("🏁 ARRIVÉE !", "🏁 FINISH!");
    if (state.mode === "tug" && result.reason === "ko") text = l("PLOUF !", "SPLASH!");
    if (state.mode === "surgery") {
      if (result.reason === "goal") text = l("OPÉRATION RÉUSSIE ✚", "OPERATION SUCCESS ✚");
      else if (result.reason === "ko") text = l("PATIENT PERDU…", "PATIENT LOST…");
    }
  }
  return (
    <>
      {state.phase === "countdown" && (
        <div className="duel-banner" aria-live="assertive">
          <span>{l("Prêts ?", "Ready?")}</span>
          <strong key={remainingSeconds}>{Math.max(1, remainingSeconds)}</strong>
        </div>
      )}
      {text && (
        <div className="duel-banner duel-banner-ko" aria-live="assertive">
          <strong className="duel-banner-text">{text}</strong>
        </div>
      )}
    </>
  );
}

function moveText(mode: GameMode, info: AvatarInfo, tier: number, lang: Lang): string {
  const meta = modeInfo(mode);
  return meta.moves ? bi(meta.moves[tier - 1], lang) : info.attacks[tier - 1];
}

/* ---------- Combat ---------- */

function CombatStage({ state, myHp, foeHp, myHitDelay, foeHitDelay, remainingSeconds }: StageProps) {
  const l = useCopy();
  const foe = state.opponent!;
  const me = avatarInfo(state.me.avatar);
  const enemy = avatarInfo(foe.avatar);
  const reveal = state.reveal;
  const myTier = reveal?.myAttackTier ?? 0;
  const foeTier = reveal?.opponentAttackTier ?? 0;
  const strongest = Math.max(myTier, foeTier);
  const iAmDown = state.me.hp <= 0;
  const foeIsDown = foe.hp <= 0;
  const roundKey = `${state.round}`;

  return (
    <section className={`duel-arena${reveal && strongest >= 3 ? " duel-arena-shake" : ""}`} aria-label={l("Arène", "Arena")}>
      <Backdrop />
      <Hud state={state} remainingSeconds={remainingSeconds}>
        <MeterBar name={state.me.name} value={myHp} max={state.maxHp} tone="me" streak={state.me.streak} kind="hp" />
        <MeterBar name={foe.name} value={foeHp} max={state.maxHp} tone="foe" streak={foe.streak} kind="hp" />
      </Hud>
      {state.phase === "question" && <Hint mode="combat" info={me} streak={state.me.streak} />}

      <div className="duel-fighters">
        <div className="duel-slot duel-slot-me">
          <PixelFighter
            avatar={me.code}
            facing="right"
            action={iAmDown ? "ko" : myTier > 0 ? "attack" : "idle"}
            hit={Boolean(reveal && reveal.damageTaken > 0)}
            hitDelayMs={myHitDelay}
            label={state.me.name}
          />
          {reveal && reveal.damageTaken > 0 && (
            <span key={`dmg-me-${roundKey}`} className="duel-damage" style={{ animationDelay: `${myHitDelay}ms` }}>
              −{reveal.damageTaken}
            </span>
          )}
        </div>
        <div className="duel-slot duel-slot-foe">
          <PixelFighter
            avatar={enemy.code}
            facing="left"
            action={foeIsDown ? "ko" : foeTier > 0 ? "attack" : "idle"}
            hit={Boolean(reveal && reveal.damageDealt > 0)}
            hitDelayMs={foeHitDelay}
            label={foe.name}
          />
          {reveal && reveal.damageDealt > 0 && (
            <span key={`dmg-foe-${roundKey}`} className="duel-damage" style={{ animationDelay: `${foeHitDelay}ms` }}>
              −{reveal.damageDealt}
            </span>
          )}
        </div>
        {reveal && myTier > 0 && <AttackEffect key={`fx-me-${roundKey}`} side="me" tier={myTier} info={me} />}
        {reveal && foeTier > 0 && <AttackEffect key={`fx-foe-${roundKey}`} side="foe" tier={foeTier} info={enemy} />}
      </div>

      <Banners state={state} remainingSeconds={remainingSeconds} />
      {reveal && strongest >= 3 && <span key={`flash-${roundKey}`} className="duel-flash" aria-hidden="true" />}
    </section>
  );
}

function AttackEffect({ side, tier, info }: { side: "me" | "foe"; tier: number; info: AvatarInfo }) {
  const style = { "--fx-color": info.color, "--fx-glow": info.glow } as CSSProperties;
  return (
    <>
      <MoveCallout side={side} tier={tier} text={info.attacks[tier - 1]} info={info} />
      {tier === 2 && <span className={`duel-shot duel-shot-${side}`} style={style} />}
      {tier >= 3 && <span className={`duel-beam duel-beam-${side}`} style={style} />}
      <span className={`duel-impact duel-impact-${side} duel-impact-tier-${tier}`} style={style} />
    </>
  );
}

/* ---------- Course de voitures ---------- */

function RaceCar({ info }: { info: AvatarInfo }) {
  // Le pilote est la tête et les épaules de l'avatar, dans un cabriolet.
  const driver = spriteRects(buildSprite(info.code, "idle"), 16);
  const body = info.outfitColor;
  const dark = info.outfitDark;
  const stripe = info.outfitAccent;
  return (
    <svg viewBox="0 0 36 23" width={36 * 3} height={23 * 3} shapeRendering="crispEdges" aria-hidden="true">
      <g transform="translate(9 0)">
        {driver.map((rect, index) => (
          <rect key={index} x={rect.x} y={rect.y} width={rect.width} height="1" fill={rect.color} />
        ))}
      </g>
      <rect x="1" y="14" width="33" height="5" fill={body} />
      <rect x="1" y="18" width="33" height="1" fill={dark} />
      <rect x="28" y="13" width="6" height="1" fill={body} />
      <rect x="0" y="11" width="4" height="1" fill={dark} />
      <rect x="1" y="12" width="1" height="4" fill={dark} />
      <rect x="4" y="16" width="27" height="1" fill={stripe} />
      <rect x="25" y="11" width="1" height="3" fill="#bfe6ff" />
      <rect x="26" y="12" width="1" height="2" fill="#bfe6ff" />
      <rect x="34" y="15" width="1" height="2" fill="#fff2a0" />
      {[6, 26].map((x) => (
        <g key={x}>
          <rect x={x + 1} y="17" width="4" height="6" fill="#1d1b2b" />
          <rect x={x} y="18" width="6" height="4" fill="#1d1b2b" />
          <g className="race-wheel-a">
            <rect x={x + 2} y="19" width="2" height="2" fill="#b8b8c8" />
            <rect x={x + 2} y="18" width="2" height="1" fill="#6d6d80" />
          </g>
          <g className="race-wheel-b">
            <rect x={x + 2} y="19" width="2" height="2" fill="#b8b8c8" />
            <rect x={x + 1} y="19" width="1" height="2" fill="#6d6d80" />
          </g>
        </g>
      ))}
    </svg>
  );
}

function RaceLane({ side, info, name, progress, goal, tier }: { side: "me" | "foe"; info: AvatarInfo; name: string; progress: number; goal: number; tier: number }) {
  const ratio = Math.min(1, progress / goal);
  return (
    <div className={`race-lane race-lane-${side}`}>
      <div className="race-road" aria-hidden="true" />
      <div
        className="race-car"
        style={{ left: `calc((100% - var(--car-w, 132px)) * ${ratio} + 6px)` }}
        role="img"
        aria-label={name}
      >
        {tier >= 2 && <span className={`race-flame race-flame-${tier}`} aria-hidden="true" />}
        <RaceCar info={info} />
        <span className="race-name">{name}</span>
      </div>
    </div>
  );
}

function RaceStage({ state, remainingSeconds }: StageProps) {
  const l = useCopy();
  const { lang } = useLang();
  const foe = state.opponent!;
  const me = avatarInfo(state.me.avatar);
  const enemy = avatarInfo(foe.avatar);
  const reveal = state.reveal;
  const myTier = reveal?.myAttackTier ?? 0;
  const foeTier = reveal?.opponentAttackTier ?? 0;
  const strongest = Math.max(myTier, foeTier);
  const roundKey = `${state.round}`;

  return (
    <section className={`duel-arena race-arena${reveal && strongest >= 3 ? " duel-arena-shake-soft" : ""}`} aria-label={l("Circuit", "Track")}>
      <Backdrop ground={false} />
      <Hud state={state} remainingSeconds={remainingSeconds}>
        <MeterBar name={state.me.name} value={state.me.progress} max={state.goal} tone="me" streak={state.me.streak} kind="progress" suffix="%" />
        <MeterBar name={foe.name} value={foe.progress} max={state.goal} tone="foe" streak={foe.streak} kind="progress" suffix="%" />
      </Hud>
      {state.phase === "question" && <Hint mode="race" info={me} streak={state.me.streak} />}

      <div className="race-track">
        <RaceLane side="foe" info={enemy} name={foe.name} progress={foe.progress} goal={state.goal} tier={foeTier} />
        <RaceLane side="me" info={me} name={state.me.name} progress={state.me.progress} goal={state.goal} tier={myTier} />
        <span className="race-finish" aria-hidden="true" />
      </div>

      {reveal && myTier > 0 && (
        <MoveCallout key={`c-me-${roundKey}`} side="me" tier={myTier} text={`${moveText("race", me, myTier, lang)} +${reveal.myGain}`} info={me} />
      )}
      {reveal && foeTier > 0 && (
        <MoveCallout key={`c-foe-${roundKey}`} side="foe" tier={foeTier} text={`${moveText("race", enemy, foeTier, lang)} +${reveal.opponentGain}`} info={enemy} />
      )}
      <Banners state={state} remainingSeconds={remainingSeconds} />
      {reveal && strongest >= 3 && <span key={`flash-${roundKey}`} className="duel-flash" aria-hidden="true" />}
    </section>
  );
}

/* ---------- Bloc opératoire ---------- */

const STEPS = [
  { fr: "Anesthésie", en: "Anesthesia" },
  { fr: "Incision", en: "Incision" },
  { fr: "Exploration", en: "Exploration" },
  { fr: "Traitement", en: "Treatment" },
  { fr: "Suture", en: "Suturing" },
];

const ECG_BEAT = "M0 15 H8 L10 11 L12 15 H16 L18 3 L21 27 L24 15 H30 L33 11 L36 15 H40";

function hashOf(text: string): number {
  let hash = 0;
  for (const char of text) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash;
}

function PatientBed({ seed, alert }: { seed: string; alert: boolean }) {
  const hash = hashOf(seed);
  const [skin] = SKIN_TONES[hash % SKIN_TONES.length];
  const hair = ["#2a2430", "#6b4226", "#e6c25a", "#8a8a96"][(hash >> 3) % 4];
  const sheet = alert ? "#d86a5a" : "#2fb5b0";
  const sheetLight = alert ? "#f0a090" : "#6fd8d3";
  return (
    <svg viewBox="0 0 46 17" width={46 * 4} height={17 * 4} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="3" y="14" width="2" height="3" fill="#5a657a" />
      <rect x="41" y="14" width="2" height="3" fill="#5a657a" />
      <rect x="1" y="13" width="44" height="1" fill="#7a869c" />
      <rect x="1" y="10" width="44" height="3" fill="#e8eef6" />
      <rect x="1" y="12" width="44" height="1" fill="#c7d1e0" />
      <rect x="2" y="8" width="9" height="2" fill="#ffffff" />
      <rect x="5" y="4" width="5" height="4" fill={skin} />
      <rect x="4" y="5" width="7" height="2" fill={skin} />
      <rect x="4" y="3" width="7" height="2" fill={hair} />
      <rect x="6" y="6" width="1" height="1" fill="#1d1b2b" />
      <rect x="8" y="6" width="1" height="1" fill="#1d1b2b" />
      <rect x="5" y="7" width="5" height="1" fill="#cfeff5" />
      <rect x="11" y="6" width="32" height="4" fill={sheet} />
      <rect x="11" y="6" width="32" height="1" fill={sheetLight} />
      <rect x="40" y="4" width="3" height="2" fill={sheet} />
      <rect x="24" y="6" width="1" height="4" fill="#ffffff" />
      <rect x="23" y="7" width="3" height="1" fill="#ffffff" />
    </svg>
  );
}

function OpSide({
  side, info, name, code, progress, hp, tier, gain, complication, hitKey,
}: {
  side: "me" | "foe"; info: AvatarInfo; name: string; code: string; progress: number; hp: number; tier: number; gain: number; complication: boolean; hitKey: string;
}) {
  const l = useCopy();
  const { lang } = useLang();
  const alive = hp > 0;
  const bpm = alive ? Math.round(72 + (100 - hp) * 0.9) : 0;
  const beat = alive ? (60 / bpm).toFixed(2) : "1";
  const facing = side === "me" ? "right" : "left";

  return (
    <div className={`op-side op-side-${side}`}>
      <ol className="op-steps" aria-label={l("Étapes de l'opération", "Operation steps")}>
        {STEPS.map((step, index) => (
          <li key={step.fr} data-state={progress >= (index + 1) * 20 ? "done" : progress >= index * 20 ? "current" : "todo"}>
            {bi(step, lang)}
          </li>
        ))}
      </ol>
      <div className="op-scene">
        <div className="op-monitor" data-alert={hp <= 50} data-flat={!alive} style={{ "--beat": `${beat}s` } as CSSProperties}>
          <svg viewBox="0 0 80 30" width="96" height="36" aria-hidden="true">
            {alive ? (
              <g className="op-ecg-line">
                {[0, 1, 2, 3].map((i) => (
                  <path key={i} d={ECG_BEAT} transform={`translate(${i * 40} 0)`} />
                ))}
              </g>
            ) : (
              <path d="M0 15 H80" className="op-ecg-flat" />
            )}
          </svg>
          <strong>{alive ? `${bpm} bpm` : "— — —"}</strong>
        </div>

        <div className="op-doctor">
          <PixelFighter avatar={code} facing={facing} surgeon stance={tier > 0 ? "attack" : "idle"} label={name} scale={5} />
        </div>

        <div className={`op-bed${complication ? " op-bed-shake" : ""}`} key={`bed-${hitKey}`}>
          <PatientBed seed={`${code}-${side}`} alert={complication} />
          {gain > 0 && (
            <>
              <span className="op-plus op-plus-1">+</span>
              <span className="op-plus op-plus-2">+</span>
              <span className="op-plus op-plus-3">+</span>
            </>
          )}
          {complication && <span className="op-alarm">{l("COMPLICATION !", "COMPLICATION!")}</span>}
        </div>
        {tier > 0 && <MoveCallout side={side} tier={tier} text={moveText("surgery", info, tier, lang)} info={info} />}
      </div>
    </div>
  );
}

function SurgeryStage({ state, myHp, foeHp, remainingSeconds }: StageProps) {
  const l = useCopy();
  const foe = state.opponent!;
  const me = avatarInfo(state.me.avatar);
  const enemy = avatarInfo(foe.avatar);
  const reveal = state.reveal;
  const roundKey = `${state.round}`;

  return (
    <section className="duel-arena op-arena" aria-label={l("Bloc opératoire", "Operating room")}>
      <div className="op-wall" aria-hidden="true" />
      <Hud state={state} remainingSeconds={remainingSeconds}>
        <MeterBar name={state.me.name} value={state.me.progress} max={state.goal} tone="me" streak={state.me.streak} kind="progress" suffix="%" vitals={{ value: myHp, max: state.maxHp }} />
        <MeterBar name={foe.name} value={foe.progress} max={state.goal} tone="foe" streak={foe.streak} kind="progress" suffix="%" vitals={{ value: foeHp, max: state.maxHp }} />
      </Hud>
      {state.phase === "question" && <Hint mode="surgery" info={me} streak={state.me.streak} />}
      <div className="op-rooms">
        <OpSide side="me" info={me} name={state.me.name} code={me.code} progress={state.me.progress} hp={myHp} tier={reveal?.myAttackTier ?? 0} gain={reveal?.myGain ?? 0} complication={Boolean(reveal?.myComplication)} hitKey={roundKey} />
        <OpSide side="foe" info={enemy} name={foe.name} code={enemy.code} progress={foe.progress} hp={foeHp} tier={reveal?.opponentAttackTier ?? 0} gain={reveal?.opponentGain ?? 0} complication={Boolean(reveal?.opponentComplication)} hitKey={roundKey} />
      </div>
      <Banners state={state} remainingSeconds={remainingSeconds} />
    </section>
  );
}

/* ---------- Tir à la corde ---------- */

function TugStage({ state, myHp, foeHp, remainingSeconds }: StageProps) {
  const l = useCopy();
  const { lang } = useLang();
  const foe = state.opponent!;
  const me = avatarInfo(state.me.avatar);
  const enemy = avatarInfo(foe.avatar);
  const reveal = state.reveal;
  const myTier = reveal?.myAttackTier ?? 0;
  const foeTier = reveal?.opponentAttackTier ?? 0;
  const strongest = Math.max(myTier, foeTier);
  const ratio = Math.max(-1, Math.min(1, (state.me.hp - state.maxHp) / state.maxHp));
  const iFell = state.me.hp <= 0;
  const foeFell = foe.hp <= 0;
  const roundKey = `${state.round}`;

  return (
    <section
      className={`duel-arena tug-arena${reveal && strongest >= 3 ? " duel-arena-shake-soft" : ""}`}
      aria-label={l("Tir à la corde", "Tug of war")}
      style={{ "--r": ratio } as CSSProperties}
    >
      <Backdrop ground={false} />
      <div className="tug-cliff tug-cliff-left" aria-hidden="true" />
      <div className="tug-cliff tug-cliff-right" aria-hidden="true" />
      <div className="tug-pit" aria-hidden="true">
        <i /><i /><i />
      </div>
      <Hud state={state} remainingSeconds={remainingSeconds}>
        <MeterBar name={state.me.name} value={myHp} max={state.maxHp * 2} tone="me" streak={state.me.streak} kind="force" />
        <MeterBar name={foe.name} value={foeHp} max={state.maxHp * 2} tone="foe" streak={foe.streak} kind="force" />
      </Hud>
      {state.phase === "question" && <Hint mode="tug" info={me} streak={state.me.streak} />}

      <div className="duel-fighters">
        <div className={`tug-slot tug-slot-me${iFell ? " tug-fall" : ""}`}>
          <div key={`pull-me-${roundKey}`} className={myTier > 0 ? "tug-pull tug-pull-me" : undefined}>
            <PixelFighter avatar={me.code} facing="right" stance="attack" label={state.me.name} />
          </div>
        </div>
        <div className={`tug-slot tug-slot-foe${foeFell ? " tug-fall" : ""}`}>
          <div key={`pull-foe-${roundKey}`} className={foeTier > 0 ? "tug-pull tug-pull-foe" : undefined}>
            <PixelFighter avatar={enemy.code} facing="left" stance="attack" label={foe.name} />
          </div>
        </div>
        <div className="tug-rope" aria-hidden="true">
          <span className="tug-flag" />
        </div>
      </div>

      {reveal && myTier > 0 && <MoveCallout key={`c-me-${roundKey}`} side="me" tier={myTier} text={moveText("tug", me, myTier, lang)} info={me} />}
      {reveal && foeTier > 0 && <MoveCallout key={`c-foe-${roundKey}`} side="foe" tier={foeTier} text={moveText("tug", enemy, foeTier, lang)} info={enemy} />}
      <Banners state={state} remainingSeconds={remainingSeconds} />
      {reveal && strongest >= 3 && <span key={`flash-${roundKey}`} className="duel-flash" aria-hidden="true" />}
    </section>
  );
}
