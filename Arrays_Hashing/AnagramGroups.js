class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let result = [];
    let str_cpy = strs.slice();

    // This map is going to keep track of which result subarray the string corresponds with
    let str_map = new Map();
    let str_key = 0;

    for (let i = 0; i < str_cpy.length; i++) {
      // First we're going to sort all of the strings in the copied array
      str_cpy[i] = str_cpy[i].split("").sort().join("");

      // Next, put each unique sorted str into the dictionary
      if (!str_map.has(str_cpy[i])) {
        str_map.set(str_cpy[i], str_key);
        result[str_key] = [];
        str_key++;
      }
    }

    for (let k = 0; k < strs.length; k++) {
      let sorted_str = strs[k].split("").sort().join("");
      let key = str_map.get(sorted_str);

      result[key].push(strs[k]);
    }

    // Passed on first try!
    return result;
  }
}

let strs1 = ["act", "pots", "tops", "cat", "stop", "hat"];
let strs2 = ["x"];
let strs3 = [""];

let solution = new Solution();

console.log(solution.groupAnagrams(strs1)); // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(solution.groupAnagrams(strs2)); // Output: [["x"]]
console.log(solution.groupAnagrams(strs3)); // Output: [[""]]
