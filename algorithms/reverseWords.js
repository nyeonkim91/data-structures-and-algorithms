// 2 rules -
// 1. every word should be reversed BUT the string as a whole should not be reversed
// ex) reverseWords('this is a string of words'); // 'siht si a gnirts fo sdrow' not 'sdrow fo gnirts a si siht'
// 2. do not use the array.reverse() method

// reverse every word in the string
// return the new string
function reverseWords(string) {
  const arr = string.split(' ');
  let resArr = [];

  arr.forEach(str => {
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]
    }
    resArr.push(reversed);
  })

  let res = resArr.join(' ');
  return res;
}

reverseWords('this is a string of words'); // 'siht si a gnirts fo sdrow'
