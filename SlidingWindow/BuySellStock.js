class Solution {
  /**
   * @param {number} prices
   * @return {number}
   */
  maxProfit(prices) {
    let max_profit = 0;

    let lag = 0;
    let lead = 1;

    while (lead < prices.length) {
      if (prices[lag] > prices[lead]) {
        lag = lead;
        lead++;
      }

      if (prices[lead] - prices[lag] > max_profit) {
        max_profit = prices[lead] - prices[lag];
      }

      lead++;
    }

    return max_profit;
  }
}

let solution = new Solution();

prices1 = [10, 1, 5, 6, 7, 1];
prices2 = [10, 8, 7, 5, 2];

console.log(solution.maxProfit(prices1)); // Output: 6
console.log(solution.maxProfit(prices2)); // Output: 0
