class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  singleNumber(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      res ^= nums[i];
    }

    return res;
  }
}

let solution = new Solution();

let nums1 = [3, 2, 3];
let nums2 = [7, 6, 6, 7, 8];

console.log(solution.singleNumber(nums1)); // 2
console.log(solution.singleNumber(nums2)); // 8
