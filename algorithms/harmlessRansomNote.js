// take in two params, one will be the noteText and the other will be the magazineText
// the purpose harmlessRansomNote algorithm is to tell if including enough words in the magazineText to create noteText
// if possible, return true, or if not, return false

function harmlessRansomNote(noteText, magazineText) {
  let noteTextArr = noteText.split(' ');
  let magazineTextArr = magazineText.split(' ');
  let obj = {};

  for(let i = 0; i < magazineTextArr.length; i++) {
    let key = magazineTextArr[i];
    if(!obj[key]) obj[key] = 0;
    obj[key]++;
  }
  // magazineTextArr.forEach(word => {
  //   if(!obj[word]) obj[word] = 0;
  //   obj[word]++;
  // });

  for(let i = 0; i < noteTextArr.length; i++) {
    let key = noteTextArr[i];
    if(obj[key]) obj[key]--;
    else return false;
  }
  // noteTextArr.forEach(word => {
  //   if(obj[key]) obj[key]--;
  //   else return false;
  // })

  return true;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
