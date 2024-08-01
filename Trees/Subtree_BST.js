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
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    if (!subRoot) {
      return true;
    }

    if (!root) {
      return false;
    }

    if (this.isSameTree(root, subRoot)) {
      return true;
    }

    return (
      this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    );
  }

  /**
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSameTree(root, subRoot) {
    if (!root && !subRoot) {
      return true;
    }

    if (root && subRoot && root.val == subRoot.val) {
      return (
        this.isSameTree(root.left, subRoot.left) &&
        this.isSameTree(root.right, subRoot.right)
      );
    } else {
      return false;
    }
  }
}

let solution = new Solution();

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

let subRoot = new TreeNode(2, new TreeNode(4), new TreeNode(5));

console.log(solution.isSubtree(root, subRoot));
