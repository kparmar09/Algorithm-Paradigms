// Tabulation is used to optimize iterative functions whereas memoization is used in recursive functions
// Tabulated Fibonacci Function
// Time - O(n)
// Space - O(n)
const TabulatedFib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};
console.log(TabulatedFib(6)); // 8
console.log(TabulatedFib(7)); // 13
console.log(TabulatedFib(8)); // 21
console.log(TabulatedFib(50)); // 12586269025
