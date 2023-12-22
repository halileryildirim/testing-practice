import capitalize from "./capitalize";

test("Lowercase string returns with first letter uppercase", () => {
  expect(capitalize("test")).toBe("Test");
});

test("Strings starting with empty space returns with first letter uppercase", () => {
  expect(capitalize("  test")).toBe("Test");
});

test("Removes all spaces from start but prevents sentences from breaking", () => {
  expect(capitalize(" testing is so much fun. ")).toBe(
    "Testing is so much fun."
  );
});
