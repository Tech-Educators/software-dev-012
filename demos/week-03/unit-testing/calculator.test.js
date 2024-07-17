// import the sum and multiple functions from my calculator.js
import { sum, multiply } from "./calculator";
import { expect, test, describe } from "vitest";

// we use describe to make sections in our testing
describe("Sum Tests", function () {
  test("adds 1 + 2 to equal 3", function () {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 5 + 6 to equal 11", function () {
    const result = sum(5, 6);
    expect(result).toBe(11);
  });
});

describe("Multiply tests", function () {
  test("multiplies 3 and 4 to equal 12", function () {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies 7 and 8 to equal 56", function () {
    const result = multiply(7, 8);
    const answer = 56;
    expect(result).toBe(answer);
  });
});
