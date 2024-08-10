// Grid Traveller
/* Say that you are a traveller on a 2D grid. You begin in the top-left corner 
and your goal is to travel to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m * n
*/

// Brute Force Grid Traveller Function
// Time Complexity - O(2^(n + m))
// Space Complexity - O(n + m)
const gridTraveller = (m, n) => {
  if (m == 0 || n == 0) return 0;
  if (m == 1 || n == 1) return 1;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};
console.log(gridTraveller(1, 1)); // 1
console.log(gridTraveller(2, 3)); // 3
console.log(gridTraveller(3, 3)); // 6
console.log(gridTraveller(20, 20)); // Takes too long. Due to high time complexity -> Solution is dynamic programming

// Note - The number of possible ways will be same for m*n and n*m grid ie. gridTraveller(2, 3) = gridTraveller(3, 2)

// Memoized Grid Traveller Function
// Time Complexity - O(n * m)
// Time Complexity - O(n + m)
const memoizedGridTraveller = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (memo[key]) return memo[key];
  if (m == 0 || n == 0) return 0;
  if (m == 1 || n == 1) return 1;
  memo[key] =
    memoizedGridTraveller(m - 1, n, memo) +
    memoizedGridTraveller(m, n - 1, memo);
  return memo[key];
};
console.log(memoizedGridTraveller(1, 1)); // 1
console.log(memoizedGridTraveller(2, 3)); // 3
console.log(memoizedGridTraveller(3, 3)); // 6
console.log(memoizedGridTraveller(20, 20)); // 35345263800
