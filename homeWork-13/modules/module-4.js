export function findPalindromes(str) {
    function isPalindrome(subStr) {
      const len = subStr.length;
      for (let i = 0; i < Math.floor(len / 2); i++) {
        if (subStr[i] !== subStr[len - 1 - i]) {
          return false;
        }
      }
      return true;
    }
  
    const palindromes = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const subStr = str.slice(i, j);
        if (isPalindrome(subStr)) {
          palindromes.push(subStr);
        }
      }
    }
    console.log(palindromes);
  }