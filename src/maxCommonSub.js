/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
    const [shorter, longer] = str1.length <= str2.length ? [str1, str2] : [str2, str1];
  
    for (let len = shorter.length; len > 0; len--) {
      for (let i = 0; i <= shorter.length - len; i++) {
        const substring = shorter.slice(i, i + len);
        if (longer.includes(substring)) {
          return substring;
        }
      }
    }
  
    return '';
  };