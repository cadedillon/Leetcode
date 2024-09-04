/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) {
    return;
  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);
