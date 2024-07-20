class Solution {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    for (let i = cost.length - 1; i > 0; i--) {
      cost[i - 2] += Math.min(cost[i - 1], cost[i]);
    }

    return Math.min(cost[0], cost[1]);
  }
}

let solution = new Solution();

let cost1 = [1, 2, 3];
let cost2 = [1, 2, 1, 2, 1, 1, 1];

console.log(solution.minCostClimbingStairs(cost1)); // Output: 2
console.log(solution.minCostClimbingStairs(cost2)); // Output: 4
