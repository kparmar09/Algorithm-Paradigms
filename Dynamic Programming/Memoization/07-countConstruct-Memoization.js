/* Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings
  The function should return the number of ways that the 'target' can be constructed by concatenating elements of 'wordBank' array.
  You may reuse elements of 'wordBank' as many times as needed.
*/

// Read the note in canConstruct file to understand the condition of tree branching.

// target.length = N
// wordBank.length = M

// Brute Force countConstruct Function
// Time Complexity - O((M^N) * N)    here, * N is there because we are slicing the array and the worst case scenario is the traversal of target.length for each call.
// Space Complexity - O(N^2)         here, N^2 as worst case we have N function calls and each function call may store the N length array after slice operation
const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let count = 0;
  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      count += countConstruct(suffix, wordBank);
    }
  }
  return count;
};
console.log(countConstruct("abcd", ["ab", "abc", "cd", "def", "abcd"])); // 2
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // Taking too much time due to high time complexity -> Solution is dynamic programming

// Memoized countConstruct Function
// Time Complexity - O(M * (N^2))
// Space Complexity - O(N^2)
const memoizedCountConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      count += memoizedCountConstruct(suffix, wordBank, memo);
    }
  }
  memo[target] = count;
  return count;
};
console.log(memoizedCountConstruct("abcd", ["ab", "abc", "cd", "def", "abcd"])); // 2
console.log(
  memoizedCountConstruct("enterapotentpot", [
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
  memoizedCountConstruct("skateboard", [
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
  memoizedCountConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]
  )
); // 771700335992448
