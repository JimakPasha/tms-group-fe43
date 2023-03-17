
export function printPrimes(arr) {
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }

  const primes = arr.filter(isPrime);
  console.log(primes);
}