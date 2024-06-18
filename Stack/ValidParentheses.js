class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = [];
    let paren_map = new Map();
    paren_map.set(")", "(");
    paren_map.set("}", "{");
    paren_map.set("]", "[");

    for (let i = 0; i < s.length; i++) {
      if (paren_map.has(s.charAt(i))) {
        let open = stack.pop();
        if (open !== paren_map.get(s.charAt(i))) {
          return false;
        }
      } else {
        stack.push(s.charAt(i));
      }
    }

    return stack.length === 0;
  }
}

let solution = new Solution();

let s1 = "[]";
let s2 = "([{}])";
let s3 = "[(])";

console.log(solution.isValid(s1)); // Output: true
console.log(solution.isValid(s2)); // Output: true
console.log(solution.isValid(s3)); // Output: false
