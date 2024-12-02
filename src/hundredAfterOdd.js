/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const out = [];    
  let i = 0 
  for (i; i < arr.length; i++) {
    out.push(arr[i]);
    if (arr[i] % 2 !== 0) {
      out.push(100);
    }
  }
  return out;
};