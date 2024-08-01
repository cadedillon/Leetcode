class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    let i = digits.length - 1;

    while (i >= 0) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        return digits;
      }

      i--;
    }

    digits.unshift(1);
    return digits;
  }
}

let solution = new Solution();

let digits1 = [1, 2, 3, 4];
let digits2 = [9, 9, 9];

console.log(solution.plusOne(digits1)); // [1, 2, 3, 5]

console.log(solution.plusOne(digits2)); // [1, 0, 0, 0]
