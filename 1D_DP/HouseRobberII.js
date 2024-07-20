class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    return Math.max(
      nums[0],
      Math.max(
        this.rob_helper(nums.slice(1)),
        this.rob_helper(nums.slice(0, -1))
      )
    );
  }

  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob_helper(nums) {
    let house1 = 0;
    let house2 = 0;

    for (const n of nums) {
      const temp = Math.max(n + house1, house2);
      house1 = house2;
      house2 = temp;
    }

    return house2;
  }
}

let solution = new Solution();

let nums1 = [3, 4, 3];
let nums2 = [2, 9, 8, 3, 6];

console.log(solution.rob(nums1)); // Output: 4
console.log(solution.rob(nums2)); // Output: 15
