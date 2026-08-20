import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { runMigrations } from "stripe-replit-sync";
import { WebhookHandlers } from "./webhookHandlers.js";
import { getStripeSync, getUncachableStripeClient } from "./stripeClient.js";
import { setStripeReady } from "./stripeState.js";
import { adminRouter } from "./routes/admin.js";
import { billingRouter } from "./routes/billing.js";
import { db } from "./db.js";
import { authRouter } from "./routes/auth.js";
import { documentsRouter } from "./routes/documents.js";
import { decksRouter } from "./routes/decks.js";
import { libraryRouter } from "./routes/library.js";
import { seedLibrary } from "./seed-library.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("trust proxy", 1);
app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
  }),
);

app.post("/api/stripe/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const signature = req.headers["stripe-signature"];
  if (!signature || Array.isArray(signature)) return res.status(400).json({ error: "Signature Stripe manquante." });
  try {
    await WebhookHandlers.processWebhook(req.body as Buffer, signature);
    res.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing failed.", error);
    res.status(400).json({ error: "Webhook Stripe invalide." });
  }
});

app.use(express.json({ limit: "2mb" }));

app.use("/api/auth", authRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/decks", decksRouter);
app.use("/api/library", libraryRouter);
app.use("/api/billing", billingRouter);
app.use("/api/admin", adminRouter);

app.get("/api/health", (_req, res) => res.json({ ok: true }));

if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientDist));
  app.get(/.*/, (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

const port = Number(process.env.PORT) || 5000;

async function initStripe() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL est requis pour Stripe.");
  await runMigrations({ databaseUrl });
  const stripeSync = await getStripeSync();
  const domain = process.env.REPLIT_DOMAINS?.split(",")[0]?.trim();
  if (domain) await stripeSync.findOrCreateManagedWebhook(`https://${domain}/api/stripe/webhook`);
  await stripeSync.syncBackfill();
  const prices = await (await getUncachableStripeClient()).prices.list({
    lookup_keys: ["synapse_umft_year1_monthly"],
    active: true,
    limit: 1,
  });
  if (!prices.data[0]) {
    throw new Error("La formule Synapse UMFT n'existe pas encore. Exécute npm run seed:umft-year-one.");
  }
}

db.init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Synapse server listening on port ${port}`);
      void seedLibrary().catch((error) => {
        console.error("La mise à jour de la bibliothèque a échoué.", error);
      });
      void initStripe()
        .then(() => {
          setStripeReady(true);
          console.log("Stripe synchronisé.");
        })
        .catch((error) => {
          setStripeReady(false, "Le paiement est en cours de configuration. Réessaie un peu plus tard.");
          console.error("Stripe indisponible au démarrage; les paiements resteront désactivés.", error);
        });
    });
  })
  .catch((err) => {
    console.error(
      "Failed to initialise the database after all retry attempts. Shutting down.",
      err,
    );
    process.exit(1);
  });
