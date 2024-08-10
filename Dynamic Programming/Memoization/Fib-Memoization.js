// Normal Recursive Fibonacci Function.
// Time complexity - O(2^n)
// Space complexity - O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(5)); // 5
console.log(fib(7)); // 13
console.log(fib(10)); // 55
console.log(fib(50)); // This takes a lot of time as the time complexity here is O(2^n). It sums to about a quadrillion function calls.

// To solve this time complexity bottle-neck, we use dynamic programming particularly memoization.
// We generally use a hashmap to memoize the key-pairs but here in JS we will use the JS object to do the same thing.
// Here, keys will be the args to the function, and value will be the return value.

// Memoized Fibonacci Function.
// Time Complexity - O(2n) -> O(n)
// Space Complexity - O(n)
const memoizedFib = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};
console.log(memoizedFib(5)); // 5
console.log(memoizedFib(7)); // 13
console.log(memoizedFib(10)); // 55
console.log(memoizedFib(50)); // 12586269025
