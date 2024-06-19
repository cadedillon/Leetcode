// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let [prev, curr, next] = [null, head, null];

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }

    return prev;
  }
}

let head1 = [0, 1, 2, 3];
let head2 = [];

let solution = new Solution();

console.log(solution.reverseList(head1)); // Output: 6
console.log(solution.reverseList(head2)); // Output: 0
