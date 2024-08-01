class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
      n &= n - 1;
      count++;
    }

    return count;
  }

  // OR:
  hammingWeight2(n) {
    let count = 0;
    while (n !== 0) {
      count += n % 2;
      n = n >>> 1; // Zero-fill right shift operator
    }

    return count;
  }
}

let solution = new Solution();

let n1 = 0o00000000000000000000000000010111;
let n2 = 0o01111111111111111111111111111101;

console.log(solution.hammingWeight(n1)); // 4
console.log(solution.hammingWeight(n2)); // 30

console.log(solution.hammingWeight2(n1)); // 4
console.log(solution.hammingWeight2(n2)); // 30
