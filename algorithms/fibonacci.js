// Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// Runtime: O(n^2) - exponential (bad) so to solve it, try MemoizedFibonacci
// Hints:
// 1. does not require a lot of code - don't over-complicate it
// 2. base case deals with the fact that the first two numbers are always 1 and 1

function fibonacci(position) {
  if(position < 3) return 1
  else return fibonacci(position - 1) + fibonacci(position - 2)
}

fibonacci(4); // returns 3
fibonacci(9); // returns 34
