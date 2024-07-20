class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    let n1 = 1;
    let n2 = 1;

    for (let i = 0; i < n - 1; i++) {
      let temp = n1;
      n1 = n1 + n2;
      n2 = temp;
    }

    return n1;
  }
}

let solution = new Solution();

let n1 = 2;
let n2 = 3;

console.log(solution.climbStairs(n1)); // Output: 2
console.log(solution.climbStairs(n2)); // Output: 3
