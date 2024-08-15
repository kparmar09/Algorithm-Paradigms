/* Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings
  The function should return the number of ways that the 'target' can be constructed by concatenating elements of 'wordBank' array.
  You may reuse elements of 'wordBank' as many times as needed. */

// m = target.length
// n = wordBank.length

// Tabulated countConstruct Function
// Time
// Space
const tabulatedCountConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== 0) {
      for (let j = 0; j < wordBank.length; j++) {
        // Ensure if it is out of bounds and proceed accordingly
        if (i + wordBank[j].length < table.length) {
          if (target.slice(i, i + wordBank[j].length) === wordBank[j]) {
            // If the word matches the character starting at position i then,
            table[i + wordBank[j].length] += table[i];
          }
        }
      }
    }
  }
  return table[target.length];
};

console.log(
  tabulatedCountConstruct("abcd", ["ab", "abc", "cd", "def", "abcd"])
); // 2
console.log(
  tabulatedCountConstruct("enterapotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ])
); // 4
console.log(
  tabulatedCountConstruct("skateboard", [
    "bo",
    "rd",
    "ate",
    "t",
    "ska",
    "sk",
    "boar",
  ])
); // 0
console.log(
  tabulatedCountConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]
  )
); // 771700335992448
