import assert from "node:assert/strict";
import test from "node:test";
import worker from "../src/index.js";

test("redirects to Obsidian with an encoded filename and append flag", () => {
  const response = worker.fetch(new Request("https://example.com/?file=Daily%2FMy%20Note%26test"));
  assert.equal(response.status, 302);
  assert.equal(response.headers.get("Location"), "obsidian://new?file=Daily%2FMy%20Note%26test&append");
  assert.equal(response.headers.get("Cache-Control"), "no-store");
});

test("rejects missing or blank filenames", () => {
  for (const query of ["", "?file=", "?file=%20"]) {
    assert.equal(worker.fetch(new Request("https://example.com/" + query)).status, 400);
  }
});
