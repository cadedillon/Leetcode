class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (let i = 0; i < strs.length; i++) {
      // Syntax for dynamic str literals
      result += `${strs[i].length}#${strs[i]}`;
    }

    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }

      let len = parseInt(str.substring(i, j));
      i = j + 1;

      let decoded_str = str.substring(i, i + len);
      result.push(decoded_str);

      i += len;
    }

    return result;
  }
}

let solution = new Solution();

let input1 = ["neet", "code", "love", "you"];
let input2 = ["we", "say", ":", "yes"];
let input3 = ["we", "say", ":", "yes", "!@#$%^&*()"];

input1 = solution.encode(input1);
input2 = solution.encode(input2);
input3 = solution.encode(input3);

console.log(input3);

console.log(solution.decode(input1)); // Output: ["neet","code","love","you"]
console.log(solution.decode(input2)); // Output: ["we","say",":","yes"]
console.log(solution.decode(input3)); // Output: ["we","say",":","yes","!@#$%^&*()"]
