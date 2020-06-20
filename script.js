// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//--------------------------------------my code------------------------------>


function generatePassword() {
//create variable name for special characters, upper case letters, lower case letters, and number arrays for confirm boxes
var Specialcharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var pwLength = false; //boolean variable for pwLength to account for situations otherwise 
var Password = ""; //variable is establish but empty because it will be filled in by the user's input 
 
//first prompt to fulfll userPW variable
var pwLength = Number(prompt("Choose a length between 8 and 128"));

//pwLength is user's input but needs to stay between range of 8 and 128 to continue to generate password
  while (pwLength < 8 || pwLength > 128 || pwLength == "") { 
    pwLength = Number(prompt("Please choose a valid length: Choose a length between 8 and 128"));
    }
    
      var needSpecialChar = confirm("Do you want special characters in your password?");
      var needUppercase = confirm("Do you want upper case letters in your password?");
      var needLowercase = confirm("Do you want lower case letters in your password?");
      var needNumbers = confirm("Do you want numbers in your password?");
      
      //----validation----
      var collectionValidCharacters = [];
      //if the user confirms "ok" to this prompt, lowercase letters will be added to the collectionValidCharacters array to generate password
      if (needLowercase === true) {
        collectionValidCharacters = collectionValidCharacters.concat(Lowercase);
        console.log(collectionValidCharacters);
          }

      //if the user confirms "ok" to this prompt, uppercase letters will be added to the collectionValidCharacters array to generate password
      if (needUppercase === true) {
        collectionValidCharacters = collectionValidCharacters.concat(Uppercase);
        console.log(collectionValidCharacters);
            }

      //if the user confirms "ok" to this prompt, numbers will be added to the collectionValidCharacters array to generate password
      if (needNumbers === true) {
        collectionValidCharacters = collectionValidCharacters.concat(Numbers);
        console.log(collectionValidCharacters);
             }

      //if the user confirms "ok" to this prompt, special characters will be added to the collectionValidCharacters array to generate password
      if (needSpecialChar === true) {
        collectionValidCharacters = collectionValidCharacters.concat(Specialcharacters);
        console.log(collectionValidCharacters);
            }

   

      //for loop to repeatedly extract a random character, number or letter from the array the number of times that is specified from the pwLength prompt
      for (var i = 0; i < pwLength; i++) {
       var randomPassword = collectionValidCharacters[Math.floor(Math.random() * collectionValidCharacters.length)];
     Password = Password + randomPassword
       console.log(Password);
     }

     //calls the function generatePassword to return the value of Password
return Password;

}





   