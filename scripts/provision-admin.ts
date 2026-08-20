import { db } from "../server/src/db.js";

async function provisionAdmin(): Promise<void> {
  const email = process.argv[2]?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Usage: npm run provision:admin --workspace=server -- <email-du-compte-existant>");
  }

  await db.init();
  const account = await db.prepare("SELECT id, role FROM users WHERE LOWER(email) = ?").get(email);
  if (!account) {
    throw new Error("Aucun compte existant ne correspond à cette adresse. Crée d'abord le compte étudiant.");
  }

  if (account.role !== "admin") {
    await db.prepare("UPDATE users SET role = 'admin' WHERE id = ?").run(account.id);
  }
  console.log("Le compte existant a été provisionné comme administrateur.");
}

provisionAdmin().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});