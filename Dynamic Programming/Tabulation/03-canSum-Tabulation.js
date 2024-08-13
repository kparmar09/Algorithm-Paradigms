/* Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments
  The function should return boolean value indicating whether or not it is possible to generate the targetSum 
  using numbers from the array.
  You may use an element of the array as many times as needed.
  You may assume that all input numbers are non-negative. */

// m = targetSum
// n = numbers.length

// Tabulated canSum Function
// Time - O(m*n)
// Space - O(m)
const tabulatedCanSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let j = 0; j < numbers.length; j++) {
        if (i + numbers[j] < table.length) {
          table[i + numbers[j]] = true;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(tabulatedCanSum(7, [5, 3, 4])); // true
console.log(tabulatedCanSum(7, [2, 4])); // false
console.log(tabulatedCanSum(7, [3, 4, 5, 7])); // true
console.log(tabulatedCanSum(300, [7, 14])); // false
