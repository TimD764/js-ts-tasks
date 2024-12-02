/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 *  
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return [];

  let maxSequence = [arr[0]];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }

  if (currentSequence.length > maxSequence.length) {
    maxSequence = currentSequence;
  }

  return maxSequence;
};


// console.log(getMaximalSequence([1, 2, 2, 3, 3, 3]))