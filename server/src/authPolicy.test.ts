import assert from "node:assert/strict";
import test from "node:test";
import { publicRegistrationRole } from "./authPolicy.js";
import { canOpenStudyContent, effectiveSubscriptionStatus } from "./studyAccessPolicy.js";
import { escapeHtml } from "./email.js";

test("public registration cannot provision an administrator account", () => {
  assert.equal(publicRegistrationRole(), "student");
});

test("year-one subscription never unlocks second-year content", () => {
  assert.equal(
    canOpenStudyContent({
      role: "student",
      subscriptionStatus: "active",
      yearNumber: 1,
      semesterNumber: 1,
      semesterPublished: true,
    }),
    true,
  );
  assert.equal(
    canOpenStudyContent({
      role: "student",
      subscriptionStatus: "active",
      yearNumber: 2,
      semesterNumber: 1,
      semesterPublished: true,
    }),
    false,
  );
  assert.equal(
    canOpenStudyContent({
      role: "student",
      subscriptionStatus: "inactive",
      yearNumber: 1,
      semesterNumber: 1,
      semesterPublished: true,
    }),
    false,
  );
});

test("an expired manual trial is treated as inactive", () => {
  assert.equal(effectiveSubscriptionStatus("trialing", Date.now() - 1), "inactive");
  assert.equal(effectiveSubscriptionStatus("trialing", Date.now() + 60_000), "trialing");
});

test("user names are escaped before being inserted into transactional emails", () => {
  assert.equal(escapeHtml(`<img src=x onerror="alert(1)">`), "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;");
});