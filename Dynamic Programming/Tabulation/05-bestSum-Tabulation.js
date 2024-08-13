/* Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
  The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
  If there is a tie for the shortest combination, you may return any one of the shortest. */

// m = targetSum
// n = numbers.length

// Tabulated bestSum Function
// Time - O(m^2 * n)
// Space - O(m^2)
const tabulatedBestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i < table.length; i++) {
    if (table[i] !== null) {
      for (let j = 0; j < numbers.length; j++) {
        if (i + numbers[j] < table.length) {
          const combination = [...table[i], numbers[j]];
          // store this combination in table only if it is shorter than what already exists in the table or what exists in the table is null
          if (
            !table[i + numbers[j]] ||
            table[i + numbers[j]].length > combination.length
          ) {
            table[i + numbers[j]] = combination;
          }
        }
      }
    }
  }
  return table[targetSum];
};

console.log(tabulatedBestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(tabulatedBestSum(8, [2, 3, 5])); // [ 5, 3 ]
console.log(tabulatedBestSum(8, [1, 4, 5])); // [ 4, 4 ]
console.log(tabulatedBestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
