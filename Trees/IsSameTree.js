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
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    if (!p && !q) {
      return true;
    }

    if (p && q && p.val === q.val) {
      return (
        this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
      );
    } else {
      return false;
    }
  }
}

let solution = new Solution();

let p = new TreeNode(4, new TreeNode(7), null);

let q = new TreeNode(4, null, new TreeNode(7));

console.log(solution.isSameTree(p, q));
