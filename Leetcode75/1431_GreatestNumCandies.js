/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (const x of candies) {
    if (x > max) {
      max = x;
    }
  }

  let res = [];

  for (const y of candies) {
    y + extraCandies >= max ? res.push(true) : res.push(false);
  }

  return res;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
