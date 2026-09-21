import { useEffect, useState } from "react";
import { useLang } from "../i18n";

function remainingParts(endsAt: number, now: number): { hours: number; minutes: number; seconds: number } {
  const remainingMs = Math.max(0, endsAt - now);
  const hours = Math.floor(remainingMs / 3_600_000);
  const minutes = Math.floor((remainingMs % 3_600_000) / 60_000);
  const seconds = Math.floor((remainingMs % 60_000) / 1_000);
  return { hours, minutes, seconds };
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

/** Compte à rebours en direct jusqu'à la fin de l'essai gratuit de 48h. */
export function TrialCountdown({ endsAt }: { endsAt: number; lang?: string }) {
  const { tx } = useLang();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = remainingParts(endsAt, now);
  const ended = now >= endsAt;

  return (
    <span className="trial-countdown">
      {ended
        ? (tx("Essai terminé", "Trial ended"))
        : `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`}
    </span>
  );
}
