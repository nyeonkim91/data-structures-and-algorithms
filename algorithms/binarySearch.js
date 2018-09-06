// Problem 1
/*
 * Binary Search:
 *
 * - Search for a given value (key) inside of a list (numArray)
 * - Runs in O(log n) run time - very performant
 * - Can be written as a recursive function
 */

function binarySearch(numArray, key) {
  let middle = Math.floor(numArray.length / 2);

  if(numArray[middle] === key) return true
  if(numArray[middle] > key) return binarySearch(numArray.slice(0, middle), key)
  else return binarySearch(numArray.slice(middle), key)

  return false;
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

// Probelm 2 - find index
/*
 * Given a sorted array, find the index of an element using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
// 참고 - https://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/

function binarySearch(numArray, key) {
  var minIndex = 0;
  var maxIndex = numArray.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    // | is bitwise or
    // bitwise - 비트단위로 처리하는 것을 의미힌다.
    // bitwise operations only make sense on integers, 0.5 is truncated - not working peroeprly for larger numbers
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    // >> is Right shifts the bits of an expression
    // 오른쪽의 비티르르 왼쪽에 지정된 비트 수만큼 오른쪽으로 이동
    // currentIndex = (minIndex + maxIndex) >> 1
    // currentIndex = Math.florr((minIndex + maxIndex) / 2);
    currentElement = numArray[currentIndex];

    if (currentElement < key) {
       minIndex = currentIndex + 1;
    }
    else if (currentElement > key) {
       maxIndex = currentIndex - 1;
    }
    else {
       return currentIndex;
    }
  }

  return -1;
}

 binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 39);
