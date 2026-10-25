import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import "dotenv/config";
import express, { type NextFunction, type Request, type Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { startActivityRetention } from "./activity.js";
import { checkJwtSecretAtBoot } from "./middleware/auth.js";
import { activityRouter } from "./routes/activity.js";
import { adminRouter } from "./routes/admin.js";
import { billingRouter } from "./routes/billing.js";
import { db, isDatabaseUnavailableError } from "./db.js";
import { authRouter } from "./routes/auth.js";
import { documentsRouter } from "./routes/documents.js";
import { decksRouter } from "./routes/decks.js";
import { duelRouter } from "./routes/duel.js";
import { libraryRouter } from "./routes/library.js";
import { localizeResponses } from "./translations.js";
import { personalDeckRouter } from "./routes/personalDeck.js";
import { seedLibrary } from "./seed-library.js";
import { startTrialExpirySweep } from "./trialSweep.js";
import { startEmailDeliveryWorker } from "./email.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set("trust proxy", 1);
app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// Le front est servi par ce même serveur : aucune origine extérieure n'a besoin
// d'appeler l'API, sauf celles listées explicitement dans ALLOWED_ORIGINS.
app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : false,
  }),
);

// Garde-fou global contre les robots qui martèlent l'API (large : une salle
// entière derrière le même wifi de fac doit pouvoir travailler sans blocage).
app.use(
  "/api",
  rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 1500,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => req.path === "/billing/webhook",
    message: { error: "Trop de requêtes, réessaie dans quelques minutes." },
  }),
);

// Monté avant express.json() : le webhook Stripe a besoin du corps brut pour
// vérifier la signature (billing.ts applique lui-même express.raw() sur cette
// route et express.json() sur les autres routes de facturation).
app.use("/api/billing", billingRouter);

app.use(express.json({ limit: "2mb" }));

app.use("/api", localizeResponses);
app.use("/api/auth", authRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/decks", decksRouter);
app.use("/api/library", libraryRouter);
app.use("/api/duel", duelRouter);
app.use("/api/personal-deck", personalDeckRouter);
app.use("/api/admin", adminRouter);
app.use("/api/activity", activityRouter);

app.get("/api/health", async (_req, res) => {
  try {
    await db.checkHealth();
    res.json({ ok: true, database: "up" });
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      res.status(503).json({ ok: false, database: "unavailable" });
      return;
    }
    throw error;
  }
});

app.use(
  (
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (res.headersSent) {
      next(error);
      return;
    }

    if (isDatabaseUnavailableError(error)) {
      res.status(503).json({
        error: "Service temporairement indisponible : la base de données est inaccessible",
      });
      return;
    }

    console.error("Unhandled API error", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  },
);

const clientDist = path.join(__dirname, "../../client/dist");
app.use(express.static(clientDist));
app.get(/.*/, (_req, res) => res.sendFile(path.join(clientDist, "index.html")));

checkJwtSecretAtBoot();

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log(`Synapse server listening on port ${port}`);
});

void db.init()
  .then(() => {
    console.log("Database initialised.");
    startEmailDeliveryWorker();
    void seedLibrary().catch((error) => {
      console.error("La mise à jour de la bibliothèque a échoué.", error);
    });
    startTrialExpirySweep();
    startActivityRetention();
  })
  .catch((err) => {
    console.error(
      "Failed to initialise the database after all retry attempts. API database routes remain unavailable.",
      err,
    );
  });
