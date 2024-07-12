class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (true) {
      let sample = lo + Math.floor((hi - lo) / 2);

      if (nums[sample] === target) {
        return sample;
      }

      if (nums[sample] < target) {
        lo = sample + 1;
      } else if (nums[sample] > target) {
        hi = sample - 1;
      }

      if (hi < lo) {
        return -1;
      }
    }
  }
}
