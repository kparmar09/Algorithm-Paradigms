/* Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
  The function should return an array containing any combination of elements that add up to exactly the targetSum.
  If there is no combination that adds up to the targetSum, then return null.
  If there are multiple combinations possible, you may return any single one.
*/

// Brute Force howSum Function
// Time Complexity - O((numbers.length)^(targetSum) * targetSum) = O(N^M * M)  -> Here M is multiplied because the maximum times the array can be returned is targetSum times.
// Space Complexity - O(targetSum) = O(M)
const howSum = (targetSum, numbers) => {
  if (targetSum < 0) return null;
  if (targetSum == 0) return [];
  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, numbers[i]];
    }
  }
  return null;
};
console.log(howSum(7, [2, 4])); // null
console.log(howSum(7, [3, 4, 5, 7])); // [ 4, 3 ]
console.log(howSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]
console.log(howSum(300, [7, 14])); // Taking too much time due to high time complexity -> Solution is dynamic programming

// Memiozed howSum Function
// Time Complexity - O((numbers.length) * (targetSum) * (targetSum)) = O(N * M * M) = O(N * M^2)
// Space Complexity - O(targetSum * targetSum) = O(M * M) = O(M^2)
// -> Due to storage needed by memo which is storing arrays having max length as targetSum as the smallest element in numbers can be 1. And 1*targetSum = targetSum
const memoizedHowSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum == 0) return [];
  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    const remainderResult = memoizedHowSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, numbers[i]];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
};
console.log(memoizedHowSum(7, [2, 4])); // null
console.log(memoizedHowSum(7, [3, 4, 5, 7])); // [ 4, 3 ]
console.log(memoizedHowSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]
console.log(memoizedHowSum(300, [7, 14])); // null
