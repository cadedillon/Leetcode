class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
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

let nums1 = [1, 1, 3, 3];
let nums2 = [2, 9, 8, 3, 6];

console.log(solution.rob(nums1)); // Output: 4
console.log(solution.rob(nums2)); // Output: 16
