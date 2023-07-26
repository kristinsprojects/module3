// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//
function generatePassword(){

}

//Will display prompts for password criteria
function prompt(){

}

//Will get random elements from an array, one from uppercase, one from lowercase, 
function randomArray(array){

//Variable for random index
var randomIndex = Math.floor(Math.random()* array.length);

//Get element
var randomElement = array[randomIndex]

//Returning random elements
return randomElement;
}

//Array for special characters

var specialCharacters = ["!", "'", "*"]

//Array for lowercase characters

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Array for uppercase characters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Array for numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
