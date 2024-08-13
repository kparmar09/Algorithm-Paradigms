/* Say that you are a traveller on a 2D grid. You begin in the top-left corner 
and your goal is to travel to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m * n ?
*/

// Tabulated Grid Traveller Function
// Time - O(m * n)
// Space - O(m * n)
const tabulatedGridTraveller = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0)); // Creates a 2D array
  table[1][1] = 1;

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current; // Adding to right neighbour
      if (i + 1 <= m) table[i + 1][j] += current; // Adding to down neighbour
    }
  }
  return table[m][n];
};

console.log(tabulatedGridTraveller(1, 1)); // 1
console.log(tabulatedGridTraveller(2, 3)); // 3
console.log(tabulatedGridTraveller(3, 3)); // 6
console.log(tabulatedGridTraveller(20, 20)); // 35345263800
