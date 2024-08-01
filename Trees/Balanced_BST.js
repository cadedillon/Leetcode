//Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalanced(root) {
    return this.dfs(root)[0] === 1;
  }

  /**
   * @param {TreeNode} root
   * @return {number[]}
   *
   */
  dfs(root) {
    if (root === null) {
      return [1, 0];
    }

    let left = this.dfs(root.left);
    let right = this.dfs(root.right);
    if (Math.abs(left[1] - right[1]) > 1 || left[0] === 0 || right[0] === 0) {
      return [0, Math.max(left[1], right[1]) + 1];
    } else {
      return [1, Math.max(left[1], right[1]) + 1];
    }
  }
}

let solution = new Solution();

let root1 = new TreeNode(
  4,
  new TreeNode(7),
  new TreeNode(3, new TreeNode(4, new TreeNode(5, null, null)), null)
);

let root2 = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, new TreeNode(4), null)
);

console.log(solution.isBalanced(root1));
console.log(solution.isBalanced(root2));
