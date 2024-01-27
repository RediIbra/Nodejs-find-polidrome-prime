function isPalindrome(num: { toString: () => any }) {
  const strNum = num.toString();
  const reversedStr = strNum.split("").reverse().join("");
  return strNum === reversedStr;
}

function isPrime(num: number) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function filterNumbers(arr: any[], feature: string) {
  return arr.filter((num: number) => {
    if (feature === "palindrome") {
      return isPalindrome(num);
    } else if (feature === "prime") {
      return isPrime(num);
    } else if (feature === "both") {
      return isPalindrome(num) && isPrime(num);
    }
  });
}
