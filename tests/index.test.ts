import { test, expect, describe } from "bun:test";

describe("math operations", () => {
  test("addition", () => {
    expect(2 + 2).toBe(4);
  });

  test("multiplication", () => {
    expect(2 * 2).toBe(4);
  });
});