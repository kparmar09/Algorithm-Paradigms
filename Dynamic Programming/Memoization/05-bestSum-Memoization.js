/* Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
  The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
  If there is a tie for the shortest combination, you may return any one of the shortest.
*/

// * Shortforms *
// N = targetSum
// M = numbers.length

// Brute Force bestSum Function
// Time Complexity - O(N^M * M)
// Space Complexity - O(M^2)
const bestSum = (targetSum, numbers) => {
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, numbers[i]];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};
console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(8, [2, 3, 5])); // [ 5, 3 ]
console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // Taking too much time due to high time complexity -> Solution is dynamic programming

// Memoized bestSum Function
// Time Complexity - O(N * M^2)
// Space Complexity - O(M^2)
const memoizedBestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let i = 0; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    const remainderCombination = memoizedBestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, numbers[i]];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return memo[targetSum];
};
console.log(memoizedBestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(memoizedBestSum(8, [2, 3, 5])); // [ 5, 3 ]
console.log(memoizedBestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(memoizedBestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
