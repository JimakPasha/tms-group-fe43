export function exponentiation(base, exponent) {
  let answer = 1;

  for (let i = 1; i <= exponent; i++) {
    answer = base * answer;
  }

  return answer;
}
