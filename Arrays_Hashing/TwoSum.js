class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

// It looks like there's a way to do this in linear time with a map calculating complements, attempt on iteration 2
let solution = new Solution();

let nums1 = [3, 4, 5, 6];
let target1 = 7;

let nums2 = [4, 5, 6];
let target2 = 10;

console.log(solution.twoSum(nums1, target1)); // Output: [0, 1]
console.log(solution.twoSum(nums2, target2)); // Output: [0, 2]
