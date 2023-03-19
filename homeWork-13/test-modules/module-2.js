export function reverseNumber(number) {
  number = number + "";

  return number.split("").reverse().join("");
}
