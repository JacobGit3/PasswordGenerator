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

console.log(lower)
console.log(upper)
console.log(number)
console.log(special)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Ask for length of password
  console.log("pressed")
  var length = ""
  while (length < 8) {
    length = parseInt(prompt("How long should the password be?"));
    if (length < 8) {
      window.alert("password must be 8 charachters or longer")
    }
  }
  

}

function test() {
  console.log("button pressed")
}

// Add event listener to generate button

