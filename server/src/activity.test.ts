import assert from "node:assert/strict";
import test from "node:test";

process.env.DATABASE_URL ??= "postgres://test:test@127.0.0.1:1/test";
const { VISIT_GAP_MS, deviceLabel, sanitizeActivityPath, shouldRecordVisit } = await import("./activity.js");

test("une visite est comptée au premier passage puis après 30 min d'inactivité", () => {
  const now = 1_700_000_000_000;
  assert.equal(shouldRecordVisit(null, now), true);
  assert.equal(shouldRecordVisit(now - 5 * 60 * 1000, now), false);
  assert.equal(shouldRecordVisit(now - VISIT_GAP_MS + 1, now), false);
  assert.equal(shouldRecordVisit(now - VISIT_GAP_MS, now), true);
});

test("seuls les chemins internes sont enregistrés, sans query string", () => {
  assert.equal(sanitizeActivityPath("/library/chapter/42?activity=qcm#top"), "/library/chapter/42");
  assert.equal(sanitizeActivityPath("/library/subject/Biochimie%20S1"), "/library/subject/Biochimie%20S1");
  assert.equal(sanitizeActivityPath("https://evil.example/x"), null);
  assert.equal(sanitizeActivityPath("//evil.example"), null);
  assert.equal(sanitizeActivityPath("/<script>"), null);
  assert.equal(sanitizeActivityPath(42), null);
  assert.equal(sanitizeActivityPath("/" + "a".repeat(500))?.length, 200);
});

test("le libellé d'appareil reste grossier", () => {
  assert.equal(
    deviceLabel("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"),
    "Chrome · Windows",
  );
  assert.equal(
    deviceLabel("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"),
    "Safari · iOS",
  );
  assert.equal(deviceLabel("Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36 EdgA/130 Edg/130"), "Edge · Android");
  assert.equal(deviceLabel(undefined), null);
});
