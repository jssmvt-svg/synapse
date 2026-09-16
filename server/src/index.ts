import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import "dotenv/config";
import express, { type NextFunction, type Request, type Response } from "express";
import helmet from "helmet";
import { adminRouter } from "./routes/admin.js";
import { db, isDatabaseUnavailableError } from "./db.js";
import { authRouter } from "./routes/auth.js";
import { documentsRouter } from "./routes/documents.js";
import { decksRouter } from "./routes/decks.js";
import { libraryRouter } from "./routes/library.js";
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

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
  }),
);

app.use(express.json({ limit: "2mb" }));

app.use("/api/auth", authRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/decks", decksRouter);
app.use("/api/library", libraryRouter);
app.use("/api/personal-deck", personalDeckRouter);
app.use("/api/admin", adminRouter);

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

if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientDist));
  app.get(/.*/, (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

const port = Number(process.env.PORT) || 5000;

db.init()
  .then(() => {
    app.listen(port, () => {
      console.log(`Synapse server listening on port ${port}`);
      startEmailDeliveryWorker();
      void seedLibrary().catch((error) => {
        console.error("La mise à jour de la bibliothèque a échoué.", error);
      });
      startTrialExpirySweep();
    });
  })
  .catch((err) => {
    console.error(
      "Failed to initialise the database after all retry attempts. Shutting down.",
      err,
    );
    process.exit(1);
  });
