/* Write a function 'allConstruct(target, wordBank) that accepts a target string and an array of strings 
   The Function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.
   Each element of the 2D array should represent one combination that constructs the 'target'.
   You may reuse the elements of 'wordBank' as many times as needed. */

// m = target.length
// n = wordBank.length

// Tabulated allConstruct Function
// Time - O(n^m)
// Space - O(n^m)
const tabulatedAllConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < wordBank.length; j++) {
      if (i + wordBank[j].length < table.length) {
        if (target.slice(i, i + wordBank[j].length) === wordBank[j]) {
          const newCombination = table[i].map((subArr) => [
            ...subArr,
            wordBank[j],
          ]);
          table[i + wordBank[j].length].push(...newCombination);
        }
      }
    }
  }
  return table[target.length];
};

console.log(
  tabulatedAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"])
); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(
  tabulatedAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// [
//   ["ab", "cd", "ef"],
//   ["ab", "c", "def"],
//   ["abc", "def"],
//   ["abcd", "ef"],
// ];
console.log(
  tabulatedAllConstruct("skateboard", [
    "bo",
    "rd",
    "ate",
    "t",
    "ska",
    "sk",
    "boar",
  ])
); // []
console.log(
  tabulatedAllConstruct("aaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])
); // []
