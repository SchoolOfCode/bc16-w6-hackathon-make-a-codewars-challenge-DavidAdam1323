import { expect, test } from "vitest";
import { sumNumbers } from "./main.js";
import { bandNameGenerator } from "./main.js";

// test("sum num1 and num2 and gives the total", () => {
//   expect(sumNumbers(5, 5)).toBe(10);
// });

test("generate band name for short words", () => {
  expect(bandNameGenerator("rock", "star")).toBe("roar and the star crew");
});

test("generate band name for long words", () => {
  expect(bandNameGenerator("electric", "thunder")).toBe(
    "elecnder and the thunder crew"
  );
});

test("generate band name for empty strings", () => {
  expect(bandNameGenerator("drumms", "band")).toBe("drund and the band crew");
});
