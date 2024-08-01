class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    let max_area = 0;
    let visited = new Set();
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        max_area = Math.max(max_area, this.dfs(grid, i, j, visited));
      }
    }

    return max_area;
  }

  dfs(grid, i, j, visited) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === 0 ||
      visited.has(`${i}, ${j}`)
    ) {
      return 0;
    }

    visited.add(`${i}, ${j}`);
    return (
      1 +
      this.dfs(grid, i - 1, j, visited) +
      this.dfs(grid, i, j - 1, visited) +
      this.dfs(grid, i + 1, j, visited) +
      this.dfs(grid, i, j + 1, visited)
    );
  }
}

let solution = new Solution();

let grid = [
  [0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
];

console.log(solution.maxAreaOfIsland(grid)); // 6
