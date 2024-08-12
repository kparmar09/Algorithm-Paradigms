/* Write a function 'allConstruct(target, wordBank) that accepts a target string and an array of strings 
   The Function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.
   Each element of the 2D array should represent one combination that constructs the 'target'.
   You may reuse the elements of 'wordBank' as many times as needed. */

// Read the note in canConstruct file to understand the condition of tree branching.

// N = target.length
// M = wordBank.length

// Brute Force allConstruct Function
// Time Complexity - O(M^N)
// Space Complexity - O(N) // Just the call stack and not the subarrays that are returned, if that is included then this will also be exponential
const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];
  let result = [];
  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [wordBank[i], ...way]); // This will give the ways for one branch of the target word, we need to combine them in a final result variable.
      result.push(...targetWays); // Spreading targetWays here -> if we do not do that, then it will nest the targetWays array and form a 3D array, so we are spreading elems of targetWays.
    }
  }
  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// [
//   ["ab", "cd", "ef"],
//   ["ab", "c", "def"],
//   ["abc", "def"],
//   ["abcd", "ef"],
// ];
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // []
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
); // Taking too much time due to high time complexity -> Solution is dynamic programming

// Memoized allConstruct Function
// Time and Space complexity here is same for the worst case scenario. So not much optimization here by memoization. Time will remain exponential
const MemoizedAllConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  let result = [];
  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      const suffixWays = MemoizedAllConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [wordBank[i], ...way]); // This will give the ways for one branch of the target word, we need to combine them in a final result variable.
      result.push(...targetWays); // Spreading targetWays as if we do not do that, then it will nest too deep and form a 3D array, so we are spreading targetWays.
    }
  }
  memo[target] = result;
  return result;
};

console.log(MemoizedAllConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(
  MemoizedAllConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// [
//   ["ab", "cd", "ef"],
//   ["ab", "c", "def"],
//   ["abc", "def"],
//   ["abcd", "ef"],
// ];
console.log(
  MemoizedAllConstruct("skateboard", [
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
  MemoizedAllConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
); // []
