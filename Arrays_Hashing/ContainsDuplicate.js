class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let soln_map = new Map();
    let dup = false;

    nums.forEach(function (number) {
      if (soln_map.has(number)) {
        dup = true;
        return;
      } else {
        soln_map.set(number, 1);
      }
    });

    return dup;
  }
}

let solution = new Solution();

let nums1 = [1, 2, 3, 3];
let nums2 = [1, 2, 3, 4];

console.log(solution.hasDuplicate(nums1)); // Output: true
console.log(solution.hasDuplicate(nums2)); // Output: false
