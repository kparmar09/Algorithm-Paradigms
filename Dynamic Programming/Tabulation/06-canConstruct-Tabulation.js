/* Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.
  The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating
  elements of the 'wordbank' array.
  You mat reuse elements of 'wordbank' as many times as needed. */

// m = target.length
// n = wordBank.length

// Tabulated canConstruct Function
// Time - O(m^2 * n)
// Space - O(m)
const tabulatedCanConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let j = 0; j < wordBank.length; j++) {
        // Ensure if it is out of bounds and proceed accordingly
        if (i + wordBank[j].length < table.length)
          if (target.slice(i, i + wordBank[j].length) === wordBank[j]) {
            // If the word matches the character starting at position i then,
            table[i + wordBank[j].length] = true;
          }
      }
    }
  }
  return table[target.length];
};

console.log(tabulatedCanConstruct("hello", ["h", "ell", "o", "urs"])); // true
console.log(
  tabulatedCanConstruct("skateboard", [
    "bo",
    "rd",
    "ate",
    "t",
    "ska",
    "sk",
    "boar",
  ])
); // false
console.log(
  tabulatedCanConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]
  )
); // false
