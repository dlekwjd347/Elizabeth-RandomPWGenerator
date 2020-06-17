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

var Specialcharacters = "!#$%&()*+-/:;<>=?@^_~";
var needUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var needLowercase = "abcdefghijklmnopqrstuvwxyz";
var needNumbers = "0123456789";
var pwLength = false;

var userPW = "";
 

var pwLength = prompt("Choose a length between 8 and 128")

while (pwLength < 8 || pwLength > 128 || pwLength == "") { //passwordValid is false
  pwLength = prompt("Please choose a valid length: Choose a length between 8 and 128")
  }
  if (pwLength < 128 || pwLength > 8) {
    var Specialcharacters = confirm("Do you want special characters in your password?");
    var needUppercase = confirm("Do you want upper case letters in your password?");
    var needLowercase = confirm("Do you want lower case letters in your password?");
    var needNumbers = confirm("Do you want numbers in your password?");
    
  }
  // console.log(pwLength);

  var collectionValidCharacters = ("!#$%&()*+-/:;<>=?@^_~abcdefghijklmnopqrstuvwxyz1234567890");
  generatePassword = "";

  for (var i = 0; i < pwLength; i++) 
  generatePassword += collectionValidCharacters[Math.floor(Math.random() * collectionValidCharacters.length)];
    console.log(generatePassword);
    document.getElementById("password").addEventListener("click", writePassword);

    function writePassword() {
      document.getElementById("password").innerHTML = generatePassword;
    }




   

  
  










 

  
 






