import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
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

app.use(express.json({ limit: "2mb" }));

app.use("/api/auth", authRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/decks", decksRouter);
app.use("/api/library", libraryRouter);

app.get("/api/health", (_req, res) => res.json({ ok: true }));

if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientDist));
  app.get(/.*/, (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

const port = Number(process.env.PORT) || 5000;

db.init()
  .then(() => seedLibrary())
  .then(() => {
    app.listen(port, () => {
      console.log(`Synapse server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to initialise the database after all retry attempts. Shutting down.",
      err,
    );
    process.exit(1);
  });
