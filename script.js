// Assignment Code
// Have to assign which char will be available 

//Function to generate password, var for each character type

function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '~', '?'];

  // Recieve input and validate
  // Prompt the questions needed to validate what characters will be used to create random password. 
  // Define whats true/false for password generator through the prompts

  numberOfCharacters = prompt("How many characters do you need for your password? Choose from 8 to 128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters (8-128).";
  } else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please enter a valid number (8-128).");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    var turnToUppercase = alert("Your password WILL have uppercase characters.");
  }
  else {
    alert("Your password WILL NOT have uppercase characters.");
  }

  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    alert("Your password WILL have lowercase characters.");
  }
  else {
    alert("Your password WILL NOT have lowercase characters.");
  }

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password WILL have numbers.");
  }
  else {
    alert("Your password WILL NOT have numbers.");
  }

  hasSymbols = confirm("Do you want to use symbols?");
  if (hasSymbols) {
    alert("Your password WILL have symbols.");
  }
  else {
    alert("Your password WILL NOT have symbols.");
  }

  // at least one character type must be selected if return is false for all what is prompted?

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSymbols === false) {
  return "Please select at lease one character type.";
  };

  // Then I must group the selected characters
  // if one or all of the prompts return true that if returns all possible characters
  // Concat = any/all

  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (hasSymbols) {
    possibleCharacters = possibleCharacters.concat(symbols);
  }

  // Generate random characters for the length of the password
  // must make sure the system allows and creates password for only the length chosen

  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let range = [Math.floor(Math.random() * possibleCharacters.length)];
    //also
    finalPassword = finalPassword + possibleCharacters[range];
  }
  return finalPassword;
};

// Reference to the generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 


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