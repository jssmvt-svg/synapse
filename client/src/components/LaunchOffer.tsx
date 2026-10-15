import { useEffect, useState } from "react";
import { api, type LaunchOffer } from "../api";
import { useLang } from "../i18n";

/** Offre de lancement (5 €/mois pour les premiers abonnés) — null tant qu'elle n'est pas active. */
export function useLaunchOffer(): LaunchOffer | null {
  const [offer, setOffer] = useState<LaunchOffer | null>(null);
  useEffect(() => {
    api.getLaunchOffer().then((value) => setOffer(value.active ? value : null)).catch(() => setOffer(null));
  }, []);
  return offer;
}

/** Bandeau « offre de lancement » ; ne rend rien quand il n'y a plus de place. */
export function LaunchOfferNote({ offer }: { offer: LaunchOffer | null }) {
  const { tx } = useLang();
  if (!offer) return null;
  const places = offer.remaining === 1
    ? tx("plus qu'1 place", "only 1 spot left")
    : tx(`plus que ${offer.remaining} places`, `only ${offer.remaining} spots left`);
  return (
    <p className="launch-offer">
      <strong>{tx("Offre de lancement", "Launch offer")}</strong>{" "}
      {tx(
        `· 5 €/mois au lieu de 10 € pour les ${offer.total} premiers abonnés`,
        `· €5/month instead of €10 for the first ${offer.total} subscribers`,
      )}{" "}
      ({places})
    </p>
  );
}
