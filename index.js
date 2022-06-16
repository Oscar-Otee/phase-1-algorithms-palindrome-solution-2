function isPalindrome(word) {
  // Write your algorithm here
  string = word.toLowerCase().split("").reverse().join("");
  if (string === word) {
    return true;
  }
  else if (string !== word) {
    return false;
  }
}

/* 
  Add your pseudocode here
  create a variable and assign it to word and the lowercase it, split it, reverse it, join it and finally return true if word is equal to string and false otherwise.
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
