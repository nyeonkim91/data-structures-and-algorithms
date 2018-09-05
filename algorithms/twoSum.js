// rules -
// 1. Result should be an array of arrays
// 2. Any number in the 'numArray' can be used in multiple pairs
// multiple ways of accomplishing result:
// 1. can be done in O(n^2) time complexity
// 2. can be done in O(n) time complexity --> 모르겠으면 harmlessRansomNote 참고

// returns every pair of numbers from 'numArray' that adds up to the 'sum'
function twoSum(numArray, sum) {
  let res = [];
  let hash = {};

  numArray.forEach(num => {
    let counterpart = sum - num;
    // if(counterpart in hash)
    if(!hash[counterpart]) hash[num] = 1;
    else {
      for(let i = 0; i < hash[counterpart]; i++) {
        res.push([counterpart, num]);
      }
      if(!hash[num]) hash[num] = 0;
      hash[num]++;
    }
  })

  return res;
}

// udemy 수업 답인데 오류있음
// function twoSum(numArray, sum) {
//   var pairs = [];
//   var hashTable = [];
//
//   for (var i = 0; i < numArray.length; i++) {
//     var currNum = numArray[i];
//     var counterpart = sum - currNum;
//     if (hashTable.indexOf(counterpart) !== -1) {
//       pairs.push([ currNum, counterpart ]);
//     }
//     hashTable.push(currNum);
//   }
//
//   return pairs;
// }

twoSum([1, 6, 4, 5, 3, 3], 7); // [[6, 1], [3, 4], [3, 4]]
twoSum([1, 6, 6, 6, 1, 1], 7); // [1, 6], [1, 6], [1, 6], [6, 1], [6, 1], [6, 1]
