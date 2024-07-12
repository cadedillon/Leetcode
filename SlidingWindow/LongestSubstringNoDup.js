class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let max = 0;

    let l = 0;
    for (let r = 0; r < s.length; r++) {
      while (charSet.has(s[r])) {
        charSet.delete(s[l]);
        l++;
      }

      charSet.add(s[r]);
      max = Math.max(max, r - l + 1);
    }

    return max;
  }
}

let s1 = "zxyzxyz";
let s2 = "x";

let solution = new Solution();

console.log(solution.lengthOfLongestSubstring(s1)); // Output: 3
console.log(solution.lengthOfLongestSubstring(s2)); // Output: 1
