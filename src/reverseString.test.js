import reverseString from "./reverseString";

test("Reversing a given string", () => {
  expect(reverseString("test")).toBe("tset");
});

test("Returns reversed letters with exact uppercases and spaces", () => {
  expect(reverseString("This is a cool teSt.")).toBe(".tSet looc a si sihT");
});
