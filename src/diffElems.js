/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const res = [];
  let count = 0;
  let i = 0;
  for (i; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      count += 1;
      res.push(arr[i]);
    }
  }
  return count;
};
