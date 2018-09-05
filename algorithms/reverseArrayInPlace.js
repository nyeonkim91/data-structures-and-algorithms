// reverse array given and return the reversed array
//
// rules -
// Be sure to manipluate the array passed in, not creating a new array and pushing elements into it
// Do not use array.reverse() method

function reverseArrayInPlace (arr) {
  for(let i = 0; i < Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);
