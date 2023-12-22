import ceaserCipher from "./ceaserCipher";

test("Ceaser Cipher", () => {
  expect(ceaserCipher("abcdefghijklmnopqrstuvwxyz", 13)).toBe(
    "NOPQRSTUVWXYZABCDEFGHIJKLM"
  );
  expect(ceaserCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe(
    "FGHIJKLMNOPQRSTUVWXYZABCDE"
  );

  expect(ceaserCipher("real test time !!", 3)).toBe("UHDO WHVW WLPH !!");
});
