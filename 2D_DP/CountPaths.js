class Solution {
  /**
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  uniquePaths(m, n) {
    let row = new Array(n).fill(1);
    for (let i = 0; i < m - 1; i++) {
      const newRow = new Array(n).fill(1);
      for (let j = n - 2; j >= 0; j--) {
        newRow[j] = newRow[j + 1] + row[j];
      }

      row = newRow;
    }

    return row[0];
  }
}

let solution = new Solution();
let m = 3;
let n = 6;

console.log(solution.uniquePaths(m, n)); // 21
