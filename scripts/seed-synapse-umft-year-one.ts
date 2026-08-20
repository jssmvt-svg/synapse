import { getUncachableStripeClient } from "../server/src/stripeClient.js";

const PRODUCT_NAME = "Synapse UMFT · Première année";
const LOOKUP_KEY = "synapse_umft_year1_monthly";

async function seedYearOneMembership() {
  const stripe = await getUncachableStripeClient();
  const existingPrices = await stripe.prices.list({ lookup_keys: [LOOKUP_KEY], active: true, limit: 1 });
  if (existingPrices.data[0]) {
    console.log(`La formule Synapse existe déjà (${existingPrices.data[0].id}).`);
    return;
  }

  const matchingProducts = await stripe.products.search({
    query: `name:'${PRODUCT_NAME}' AND active:'true'`,
    limit: 1,
  });
  const product = matchingProducts.data[0] ?? await stripe.products.create({
    name: PRODUCT_NAME,
    description: "Accès mensuel à la première année UMFT : Semestre 1 et Semestre 2.",
    metadata: { application: "synapse_umft", plan: "year_one" },
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 2499,
    currency: "eur",
    recurring: { interval: "month" },
    lookup_key: LOOKUP_KEY,
    metadata: { application: "synapse_umft", plan: "year_one" },
  });
  console.log(`Formule créée : ${product.name} (${price.id})`);
}

seedYearOneMembership().catch((error) => {
  console.error("Impossible de créer la formule Synapse UMFT.", error);
  process.exit(1);
});