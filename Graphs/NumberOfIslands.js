class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "1") {
          this.dfs(grid, i, j);
          count++;
        }
      }
    }

    return count;
  }

  /**
   * @param {character[][]} grid
   * @param {number} i
   * @param {number} j
   */
  dfs(grid, i, j) {
    // In the case that we go oob or hit a 0 we return
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    // We are in bounds and the current index is a 1, change it to 0 and recursively visit all neighbors
    grid[i][j] = "0";
    this.dfs(grid, i - 1, j);
    this.dfs(grid, i, j - 1);
    this.dfs(grid, i + 1, j);
    this.dfs(grid, i, j + 1);
  }
}

let solution = new Solution();

let grid1 = [
  ["0", "1", "1", "1", "0"],
  ["0", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "1"],
  ["1", "1", "0", "0", "1"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(solution.numIslands(grid1)); // 1
console.log(solution.numIslands(grid2)); // 4
