class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let lo_bound = 0;
    let hi_bound = nums.length - 1;
    while (true) {
      let sample = lo_bound + Math.floor((hi_bound - lo_bound) / 2);
      if (nums[sample] === target) {
        return sample;
      } else if (nums[sample] > target) {
        hi_bound = sample - 1;
      } else {
        lo_bound = sample + 1;
      }

      if (hi_bound < lo_bound) {
        return -1;
      }
    }
  }
}

let solution = new Solution();

(nums1 = [-1, 0, 2, 4, 6, 8]), (target1 = 4);
(nums2 = [-1, 0, 2, 4, 6, 8]), (target2 = 3);

console.log(solution.search(nums1, target1)); // Output: 3
console.log(solution.search(nums2, target2)); // Output: -1
