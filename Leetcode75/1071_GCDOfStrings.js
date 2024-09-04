/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let base = str1.length < str2.length ? str1 : str2;

  while (base.length > 0) {
    let k = 0;
    let temp1 = base;
    let temp2 = base;

    if (str1.length % base.length === 0) {
      k = str1.length / base.length;
    }

    for (let i = 1; i < k; i++) {
      temp1 += base;
    }

    if (str2.length % base.length === 0) {
      k = str2.length / base.length;
    }

    for (let i = 1; i < k; i++) {
      temp2 += base;
    }

    if (temp1 === str1 && temp2 === str2) {
      return base;
    }

    base = base.substring(0, base.length - 1);
  }

  return base;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABCDEF", "ABC"));
