/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    const dummy = { val: 0, next: null };
    let node = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }

      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return dummy.next;
  }
}

function mergeHelper(list1, list2) {
  let [curr1, curr2, tmp] = [list1, list2, null];
}

(list1 = [1, 2, 4]), (list2 = [1, 3, 5]);
(list3 = []), (list4 = [1, 2]);
(list5 = []), (list6 = []);

let solution = new Solution();

console.log(solution.mergeTwoLists(list1, list2)); // Output: 6
console.log(solution.mergeTwoLists(list3, list4)); // Output: 0
console.log(solution.mergeTwoLists(list5, list6)); // Output: 0
