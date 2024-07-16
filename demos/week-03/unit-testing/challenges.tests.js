import { palendrome } from "./challenges.js"; // this doesn't exist, you need to create it
import { expect, test } from "vitest";

test("Testing if the word timothy is a palendrome", function () {
  expect(palendrome("timothy")).toBe(false);
});

// write a test for the name Otto
