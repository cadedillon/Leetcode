/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let minLen = Math.min(word1.length, word2.length);
  let merged = "";

  let i = 0;

  while (i < minLen) {
    merged += word1.charAt(i);
    merged += word2.charAt(i);
    i++;
  }

  if (word1.length < word2.length) {
    merged += word2.substring(i, word2.length);
  } else if (word2.length < word1.length) {
    merged += word1.substring(i, word1.length);
  }

  return merged;
};

mergeAlternately("abcd", "pq");
