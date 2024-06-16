class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
  }
}

let solution = new Solution();

let s1 = "racecar";
let t1 = "carrace";

let s2 = "jar";
let t2 = "jam";

console.log(solution.isAnagram(s1, t1)); // Output: true
console.log(solution.isAnagram(s2, t2)); // Output: false
