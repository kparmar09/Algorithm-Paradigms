/* Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
  The function should return an array containing any combination of elements that add up to exactly the targetSum.
  If there is no combination that adds up to the targetSum, then return null.
  If there are multiple combinations possible, you may return any single one. */

// m = targetSum
// n = numbers.length

// Tabulated howSum Function
// Time - O(m*n*m) - O(m^2 * n)
// Space - O(m^2)
const tabulatedHowSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let j = 0; j < numbers.length; j++) {
        if (i + numbers[j] < table.length) {
          table[i + numbers[j]] = [];
          table[i + numbers[j]].push(...table[i], numbers[j]);
        }
      }
    }
  }
  return table[targetSum];
};

console.log(tabulatedHowSum(7, [2, 4])); // null
console.log(tabulatedHowSum(7, [3, 4, 5, 7])); // [ 4, 3 ]
console.log(tabulatedHowSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]
console.log(tabulatedHowSum(300, [7, 14])); // null
console.log(tabulatedHowSum(1000, [500, 14])); // [ 500, 500 ]
