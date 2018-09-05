// Have the function CaesarCipher(str,num) take the str parameter and
// perform a Caesar Cipher shift on it using the num parameter as the shifting number.
// A Caesar Cipher works by shifting each letter in the string N places down
// in the alphabet (in this case N will be num).
// Punctuation, spaces, and capitalization should remain intact.
// For example if the string is "Caesar Cipher" and num is 2 the output
// should be "Ecguct Ekrjgt".
//
// along with shifting each character of a string given forward in the alphabet,
// also be able to shift each character of a string given backward in the alphabet if a ngetive number is passed in

function caesarCipher(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvxyz';
  let lowerStrArr = str.toLowerCase().split('');
  let arr = [];

  lowerStrArr.forEach(s => {
    if(alphabet.indexOf(s) > 0) {
      let newIndex = alphabet.indexOf(s) + num;
      if(newIndex > alphabet.length) newIndex -= alphabet.length
      else if(newIndex < 0) newIndex += alphabet.length

      arr.push(alphabet[newIndex]);
    }
    else arr.push(s);
  })

  let res = '';
  arr.forEach((val, i) => {
    if(alphabet.indexOf(val) > 0 && (str[i] !== str[i].toLowerCase())) res += val.toUpperCase()
    else res += val;
  })
  return res;
}

// other way
// function caesarCipher(str,num) {
//   num = num % 26;
//   var lowerCaseString = str.toLowerCase();
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   var newString = '';
//
//   for (var i = 0; i < lowerCaseString.length; i++) {
//     var currentLetter = lowerCaseString[i];
//     if (currentLetter === ' ') {
//       newString += currentLetter;
//       continue;
//     }
//     var currentIndex = alphabet.indexOf(currentLetter);
//     var newIndex = currentIndex + num;
//     if (newIndex > 25) newIndex = newIndex - 26;
//     if (newIndex < 0) newIndex = 26 + newIndex;
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndex].toUpperCase();
//     }
//     else newString += alphabet[newIndex];
//   };
//
//   return newString;
// }

caesarCipher('Zoo Keeper', 2);
