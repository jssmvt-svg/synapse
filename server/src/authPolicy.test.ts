import assert from "node:assert/strict";
import test from "node:test";
import { publicRegistrationRole } from "./authPolicy.js";
import { canOpenStudyContent } from "./studyAccessPolicy.js";

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