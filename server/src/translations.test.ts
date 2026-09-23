import assert from "node:assert/strict";
import { test } from "node:test";
import { localize, parseLang } from "./translations.js";

const dictionary = { Glycolyse: "تحلل الغلوكوز", "Que fait l'ATP ?": "ماذا يفعل ATP؟" };

test("l'arabe remplace le champ anglais sans modifier la source", () => {
  const source = { chapitres: [{ titre_fr: "Glycolyse", titre_en: "Glycolysis", n: 3 }], promptFr: "Que fait l'ATP ?", promptEn: "" };
  const result = localize(source, "ar", dictionary);
  assert.equal(result.chapitres[0].titre_en, "تحلل الغلوكوز");
  assert.equal(result.promptEn, "ماذا يفعل ATP؟");
  assert.equal(result.chapitres[0].n, 3);
  assert.equal(source.chapitres[0].titre_en, "Glycolysis");
});

test("sans traduction, l'anglais existant reste affiché", () => {
  assert.equal(localize({ titre_fr: "Inconnu", titre_en: "Unknown" }, "it", dictionary).titre_en, "Unknown");
});

test("l'anglais ne remplace jamais un texte écrit à la main", () => {
  const result = localize({ titre_fr: "Glycolyse", titre_en: "Glycolysis" }, "en", { Glycolyse: "Glycolysis (auto)" });
  assert.equal(result.titre_en, "Glycolysis");
  assert.equal(localize({ titre_fr: "Glycolyse", titre_en: "" }, "en", { Glycolyse: "Glycolysis (auto)" }).titre_en, "Glycolysis (auto)");
});

test("le français et les langues inconnues ne changent rien", () => {
  const source = { titre_fr: "Glycolyse", titre_en: "Glycolysis" };
  assert.equal(localize(source, "fr", dictionary), source);
  assert.equal(parseLang("de"), "fr");
  assert.equal(parseLang("ar"), "ar");
});
