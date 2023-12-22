import calculator from "./calculator";

test("Add", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-1, -8)).toBe(-9);
});

test("Subtract", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(5, -2)).toBe(7);
});

test("Divide", () => {
  expect(calculator.divide(5, 0)).toBeUndefined(); // dont accept 0 as a divider to prevent from breaking.
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(10, -2)).toBe(-5);
});

test("Multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(5, 0)).toBe(0);
  expect(calculator.multiply(5, -2)).toBe(-10);
  expect(calculator.multiply(-2, -2)).toBe(4);
});
