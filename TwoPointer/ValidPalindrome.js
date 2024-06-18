class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (j > i) {
      if (!isAlphaNum(s.charAt(i))) {
        i++;
        continue;
      }

      if (!isAlphaNum(s.charAt(j))) {
        j--;
        continue;
      }

      if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) {
        return false;
      }

      i++;
      j--;
    }

    return true;
  }
}

function isAlphaNum(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }

  return true;
}

let solution = new Solution();

let s1 = "Was it a car or a cat I saw?";
let s2 = "tab a cat";

console.log(solution.isPalindrome(s1)); // Output: true
console.log(solution.isPalindrome(s2)); // Output: false
