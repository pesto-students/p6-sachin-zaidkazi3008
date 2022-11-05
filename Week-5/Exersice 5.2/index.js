// Write a function called vowelCount which accepts a string and returns
// a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char){
    return " aeiou ".includes(char);
}

function vowelCount(str){
  let vowelMap = new Map();
  for (const char of str){
    let lowerChar = char.toLowerCase();
    if (isVowel(lowerChar)){
      if (vowelMap.has(lowerChar)){   // Map "has" method to check whether the key char is present
        vowelMap.set(lowerChar, vowelMap.get(lowerChar) +1)  // Map "get" method to check whether the value of the key char
      }else{
        vowelMap.set(lowerChar,1) // Map "set" method to add key value pair
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("Checking vowel counts"))