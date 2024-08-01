class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countBits(n) {
    // Memoization solution that runs in O(n) time and relies on referring back to work already completed
    let memo = [0];
    let offset = 1;

    for (let i = 1; i <= n; i++) {
      // This relies on the fact that the bit pattern repeats after you add a most significant 1 on every power of two
      if (offset * 2 == i) {
        offset = i;
      }

      memo[i] = 1 + memo[i - offset];
    }

    return memo;
  }
}

let solution = new Solution();

let n = 4;

console.log(solution.countBits(n)); // [0,1,1,2,1]
