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
   * @return {TreeNode}
   */
  invertTree(root) {
    if (!root) {
      return root;
    }

    this.invertTree(root.left);
    this.invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
  }
}

let solution = new Solution();

let tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(solution.invertTree(tree));
