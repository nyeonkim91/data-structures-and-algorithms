// take in a string as arguemnt
// return true if the string is a palidrome, and if not, return false
// palidrome is any word or phrase that is spelled the same way both backward and forward
// ex1) rece car --> true
// ex2) Madam, I'm Adam --> true
// not use a regular expressions in our code but instead use array and string manipulation and methods
// ignore any punctuation characters

function isPalindrome(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lower = string.toLowerCase();
  let str = '';

  for(let i = 0; i < lower.length; i++) {
    if(alphabet.indexOf(lower[i]) >= 0) str += lower[i]
  }

  for(let i = 0; i < Math.floor(str.length/2); i++) {
    if(str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
}

// other way
// function isPalindrome(string) {
//   string = string.toLowerCase();
//   var charactersArr = string.split('');
//   var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
//
//   var lettersArr = [];
//   charactersArr.forEach(char => {
//     if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
//   });
//
//   return lettersArr.join('') === lettersArr.reverse().join('');
// }

isPalindrome("Madam, I'm Adam");
