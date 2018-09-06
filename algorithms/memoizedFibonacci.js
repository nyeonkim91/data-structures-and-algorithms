// Memoization:
// - Check to see if number already exists in cache
// - If number is in cache, use that number
// - If number is not in cache, calculate it and put it in cache so it can be used multiple times in future
// Runtime: O(n) - linear

// index: index of number in fibonacci sequence
// cache: an array used as memory
function fibMemo(index, cache) {
  cache = cache || [];

  if(index < 3) return 1
  else if(cache[index]) return chache[index]
  else {
    // if(index < 3) return 1
    cache[index] = fibMemo(index - 1) + fibMemo(index - 2);
  }

  return cache[index];
}


fibonacci(4); // returns 3
fibonacci(9); // returns 34
fibonacci(500);
