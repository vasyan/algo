import { expect, test } from "bun:test";

function sockMerchant(n: number, ar: number[]): number {
  const dict = new Map<number, number>();

  for (const num of ar) {
    if (dict.has(num)) {
      dict.set(num, dict.get(num)! + 1);
    } else {
      dict.set(num, 1);
    }
  }

  let pairsCount = 0;

  for (const [key, value] of dict) {
    pairsCount += Math.floor(value / 2)
  }

  return pairsCount
}

test("sockMerchant", () => {
  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const n = 9;
  expect(sockMerchant(n, ar)).toBe(3);
});