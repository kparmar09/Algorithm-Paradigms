/* Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments
  The function should return boolean value indicating whether or not it is possible to generate the targetSum 
  using numbers from the array.
  You may use an element of the array as many times as needed.
  You may assume that all input numbers are non-negative. */

// Brute Force canSum Function
// Time Complexity - O((numbers.length)^(targetSum)) = O(N^M)
// Space Complexity - O(targetSum) = O(M)
const canSum = (targetSum, numbers) => {
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;
  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [3, 4, 5, 7])); // true
console.log(canSum(300, [7, 14])); // Taking too much time due to high time complexity -> Solution is dynamic programming

// Memoized canSum Function
// Time Complexity - O((numbers.length) * (targetSum)) = O(N * M)
// Space Complexity - O(targetSum) = O(M)
const memoizedCanSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;
  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    if (memoizedCanSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
console.log(memoizedCanSum(7, [2, 4])); // false
console.log(memoizedCanSum(7, [3, 4, 5, 7])); // true
console.log(memoizedCanSum(300, [7, 14])); // false
