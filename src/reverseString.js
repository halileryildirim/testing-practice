export default function reverseString(input) {
  const reverseInput = (input = input.split("").reduce((a, b) => b + a, ""));
  return reverseInput;
}
