let stripeReady = false;
let stripeUnavailableReason = "La connexion Stripe est en cours de préparation.";

export function setStripeReady(ready: boolean, reason?: string): void {
  stripeReady = ready;
  if (reason) stripeUnavailableReason = reason;
}

export function getStripeAvailability(): { ready: boolean; reason: string } {
  return { ready: stripeReady, reason: stripeUnavailableReason };
}