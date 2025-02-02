/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (input: string | number): boolean {
  if (typeof input === 'string') {
      const lowercaseInput = input.toLowerCase();
      const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
      for (const char of lowercaseInput) {
          alphabet.delete(char);
          if (alphabet.size === 0) {
              return true;
          }
      }
      return false;
  } else if (typeof input === 'number') {
      const digits = new Set('0123456789');
      const inputStr = input.toString();
      for (const char of inputStr) {
          digits.delete(char);
          if (digits.size === 0) {
              return true;
          }
      }
      return false;
  }
  return false;
}