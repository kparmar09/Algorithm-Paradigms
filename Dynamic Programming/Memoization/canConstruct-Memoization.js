/* Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.
  The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating
  elements of the 'wordbank' array.
  You mat reuse elements of 'wordbank' as many times as needed. */

// ** We should only branch to children if we have a prefix matching that
// eg: if target = 'abcdef' & wordBank = [ab, abc, cd, def, abcd]. Then we should only branch to 'ab', 'abc' and 'abcd' as they can form the prefix of 'abcdef'
// If we take out 'cd' from 'abcdef', it would make the target as 'abef' and this is not correct as it creates new adjacencies that were not meant to be there.
// And it will check for these adjacencies in the next step and give out wrong answer. **

// target.length = N
// wordBank.length = M

// Brute Force canConstruct Function
// Time Complexity - O((M^N) * N)    here, * N is there because we are slicing the array and the worst case scenario is the traversal of target.length for each call.
// Space Complexity - O(N^2)         here, N^2 as worst case we have N function calls and each function call may store the N length array after slice operation
const canConstruct = (target, wordBank) => {
  if (target === "") return true;
  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      if (canConstruct(suffix, wordBank)) return true;
    }
  }
  return false;
};
console.log(canConstruct("hello", ["h", "ell", "o", "urs"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // Taking too much time due to high time complexity -> Solution is dynamic programming

// Memoized canConstruct Function
// Time Complexity - O(M * (N^2))
// Space Complexity - O(N^2)
const memoizedCanConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let i = 0; i < wordBank.length; i++) {
    if (target.indexOf(wordBank[i]) === 0) {
      const suffix = target.slice(wordBank[i].length);
      if (memoizedCanConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return memo[target];
};
console.log(memoizedCanConstruct("hello", ["h", "ell", "o", "urs"])); // true
console.log(
  memoizedCanConstruct("skateboard", [
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
  memoizedCanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false
