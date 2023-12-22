export default function capitalize(input) {
  input = input.trim();
  return input[0].toUpperCase() + input.substring(1);
}
