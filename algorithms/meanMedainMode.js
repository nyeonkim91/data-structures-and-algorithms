// take in a number array as a parameter and return a object that has three properties
// - mean(평균), median(중앙값), mode(최빈값 - 가장 빈도가 많은 값)
// this algorithm will teach techniques for performing math calculation
// along with teaching the importance of functional programing
// --> be re-used in multiple different places so that don't have to keep rewrting same codes

function getMean(array) {
  let sum = 0;
  array.forEach(num => sum += num)
  let mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  // sort mtehod
  // array.sort((a, b) => a - b)
  // OR bubble sort
  for(let i = array.length - 1; i > 1; i--) {
    for(let j = i - 1; j >= 0; j--) {
      if(array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  let median;
  if(array.length % 2 === 0) {
    let middle = array.length / 2;
    let sum = array[middle - 1] + array[middle];
    median = sum / 2;
  }
  else median = array[Math.floor(array.length / 2) + 1]

  return median;
}

function getMode(array) {
  let obj = {};

  array.forEach(num => {
    if(!obj[num]) obj[num] = 0
    obj[num]++;
  })

  let modes = [];
  let freq = 0;
  for(let key in obj) {
    if(obj[key] > freq) {
      freq = obj[key];
      // modes = [key]
      modes = [];
      modes.push(key);
    }
    else if(obj[key] === freq) modes.push(key)
  }

  // if every value appears same amount of times
  if (modes.length === Object.keys(obj).length) modes = [];
  return modes
}

function meanMedianMode(array) {
  // call other 3 function
  // return obj which has mean, medain, mode on it
  let obj = {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
  return obj;
}

meanMedianMode([9,10,23,10,23,9]);
