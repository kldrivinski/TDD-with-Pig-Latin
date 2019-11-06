

function translate(word) {
  //convert to lower case
  word = word.toLowerCase();
  var firstVowel = findFirstVowelPosition(word);
  if (firstVowel === 0) {
    return word + "way";
  }
  else {
    var flippedWord = word.substring(firstVowel) + word.substring(0, firstVowel);
    return flippedWord + "ay";
  }


}

// is the first letter a vowel?
function findFirstVowelPosition(word) {
  for (i = 0; i < word.length; i++) {
    var letter = word[i];
    if (isVowel(letter)) {
      return i;
    }
  }

  return -i
}


function isVowel(letter) {
  return "aeiou".indexOf(letter) !== -1;
}





if (typeof module !== "undefined") {
  // Node
  module.exports = { translate };
} else {
  // Browser
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}