export function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
      console.log(`Multiplying by ${i}, result is now ${result}`);
    }
    console.log(`Factorial of ${num} is ${result}`);
    return result;
  }
  
  