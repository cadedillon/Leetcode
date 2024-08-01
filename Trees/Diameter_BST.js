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
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    let diam = [0];
    this.dfs(root, diam);
    return diam[0];
  }

  /**
   * @param {TreeNode} root
   * @param {number[]} diam
   * @return {number[]}
   */
  dfs(root, diam) {
    if (!root) {
      return 0;
    }

    let left_height = this.dfs(root.left, diam);
    let right_height = this.dfs(root.right, diam);

    diam[0] = Math.max(diam[0], left_height + right_height);

    return 1 + Math.max(left_height, right_height);
  }
}

let solution = new Solution();

let tree1 = new TreeNode(
  1,
  null,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(5), null),
    new TreeNode(4, null, null)
  )
);

console.log(solution.diameterOfBinaryTree(tree1));
