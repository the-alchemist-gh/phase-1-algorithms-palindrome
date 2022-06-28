function isPalindrome(word) {
  // Write your algorithm here
  function reverseString(word){
    const wordArray = word.split('');
    newWordArray = wordArray.reverse();
    newWord = newWordArray.join('');
    return newWord
  }
  const reversedWord = reverseString(word)
  if(word===reversedWord){
    return true;
  } else{
    return false;
  }
}

function isPalindrome2(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

isPalindrome('Malik');

/* 
  Add your pseudocode here

  reverse the function parameter
  if the reversed parameter is the same as the parameter, return true 
  else return false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
