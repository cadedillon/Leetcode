class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let counts = new Map();
    let result = [];
    let freq = Array.from({ length: nums.length + 1 }, () => []);

    // Iterate over nums and get the occurrence count for each
    for (let i = 0; i < nums.length; i++) {
      if (counts.has(nums[i])) {
        counts.set(nums[i], counts.get(nums[i]) + 1);
      } else {
        counts.set(nums[i], 1);
      }
    }

    // Organize numbers into frequency buckets
    for (const [num, count] of counts) {
      freq[count].push(num);
    }

    // Collect the k most frequent elements
    let j = freq.length - 1;
    while (j > 0) {
      if (freq[j].length > 0) {
        for (const num of freq[j]) {
          result.push(num);
          if (result.length === k) {
            return result;
          }
        }
      }
      j--;
    }

    return result;
  }
}

let nums1 = [1, 2, 2, 3, 3, 3];
let k1 = 2;

let nums2 = [7, 7];
let k2 = 1;

let solution = new Solution();

console.log(solution.topKFrequent(nums1, k1)); // Output: [2,3]
console.log(solution.topKFrequent(nums2, k2)); // Output: [7]
