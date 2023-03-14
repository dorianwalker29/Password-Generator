// Assignment Code
// Reference to the generate element
// Query selectors

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Have to assign which char will be available 
//Function to generate password, var for each character type
// upper, lower, numbers, symbols

var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&,*()[]-+~?";
var optionsVariable = "";

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  // prevent screen refresh when clicked

  

  // var password = generatePassword();


  // clear last password

  password.value === "";
  var randomString = "";


  // Recieve input and validate
  // Prompt the questions needed to validate what characters will be used to create random password. 
  // Define whats true/false for password generator through the prompts

  var numberOfCharacters = prompt("How many characters do you need for your password? Choose from 8 to 128 characters.");
  var hasUppercase = confirm("Do you want uppercase characters?");
  var hasLowercase = confirm("Do you want lowercase characters?");
  var hasNumbers = confirm("Do you want to use numbers?");
  var hasSymbols = confirm("Do you want to use symbols?");


  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters (8-128).";
    
  }

  // at least one character type must be selected if return is false for all what is prompted?

  else if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSymbols === false) { 
    alert ("Please select at lease one character type.");

  var hasUppercase = confirm("Do you want uppercase characters?");
  var hasLowercase = confirm("Do you want lowercase characters?");
  var hasNumbers = confirm("Do you want to use numbers?");
  var hasSymbols = confirm("Do you want to use symbols?");
  }

  // Trial and error on returns and alerts
 /* if (hasUppercase) {
    var turnToUppercase = alert("Your password WILL have uppercase characters.");
  }
  else {
    alert("Your password WILL NOT have uppercase characters.");
  }
  if (hasLowercase) {
    alert("Your password WILL have lowercase characters.");
  }
  else {
    alert("Your password WILL NOT have lowercase characters.");
  }
  if (hasNumbers) {
    alert("Your password WILL have numbers.");
  }
  else {
    alert("Your password WILL NOT have numbers.");
  }
  if (hasSymbols) {
    alert("Your password WILL have symbols.");
  }
  else {
    alert("Your password WILL NOT have symbols.");
  }*/

  
  // Then I must group the selected characters
  // if one or all of the prompts return true that if returns all possible characters
  // Concat = any/all

  if (hasUppercase) {
    optionsVariable += uppercase;
  }

  if (hasLowercase) {
    optionsVariable += lowercase;
  }

  if (hasNumbers) {
    optionsVariable += numbers;
  }

  if (hasSymbols) {
    optionsVariable += symbols;
  }

  // Generate random characters for the length of the password
  // must make sure the system allows and creates password for only the length chosen

  // let finalPassword = ""
  for (var i = 0; i < numberOfCharacters; i++) {
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
  }
  password.value = randomString;

}

// Write password to the #password input
  
//passwordText.value = password;


/*

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*/