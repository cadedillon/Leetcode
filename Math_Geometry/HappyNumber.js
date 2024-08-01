class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    let sumSet = new Set();

    while (true) {
      // First we calculate the sum of the digit squares
      let sum = 0;
      while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
      }

      if (sum === 1) {
        return true;
      } else if (sumSet.has(sum)) {
        return false;
      }

      sumSet.add(sum);
      n = sum;
    }
  }
}

let solution = new Solution();

let n1 = 100;
let n2 = 101;

console.log(solution.isHappy(n1)); // True
console.log(solution.isHappy(n2)); // False
