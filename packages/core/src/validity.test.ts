import { describe, expect, it } from "vitest";
import { validityScore } from "./validity";

describe("validityScore", () => {
  it("is 0.5 with no votes (uninformative prior)", () => {
    expect(validityScore(0, 0)).toBe(0.5);
  });
  it("rises with successes and falls with failures", () => {
    expect(validityScore(8, 2)).toBeGreaterThan(0.5);
    expect(validityScore(2, 8)).toBeLessThan(0.5);
  });
});
