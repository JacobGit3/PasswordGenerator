// Arrays of Characters
lower = [ 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
upper = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
number = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
special = [
  "!", "#", "$", "%", "&", "'", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"
]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Ask for length of password
  var length = 0;
  while (length < 8 || length > 128) {
    length = parseInt(prompt("How long should the password be?"));
    if (length < 8 || length > 128) {
      window.alert("password must be atleast 8 characters long but less than 128");
    }
  }
  // Ask what type of characters are desired and create a list of all characters
  var available = []
  var L = confirm("Would you like to include Lowercase characters");
  var U = confirm("Would you like to include Uppercase characters");
  var N = confirm("Would you like to include Numbers");
  var S = confirm("Would you like to include Special characters");
  
  if (L === true) {
    available = available.concat(lower);
  }
  if (U === true) {
    available = available.concat(upper);
  }
  if (N === true) {
    available = available.concat(number);
  }
  if (S === true) {
    available = available.concat(special);
  }

  if (L === false && U === false && N === false && S === false) {
    window.alert("You must choose atleast one type of characters");
    writePassword();
  }

  // Ramdom password generator 
  var password = "";
  var i = 0;
  while (i < length) {
    password = password + available[Math.floor(Math.random()*available.length)];
    i++;
  }

  //Change Placeholder text to new password
  document.getElementById("password").innerHTML = password;
}