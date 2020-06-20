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

//create variable name for special characters, upper case letters, lower case letters, and number arrays for confirm boxes
function generatePassword() {

  var Specialcharacters = "!#$%&()*+-/:;<>=?@^_~";
var needUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var needLowercase = "abcdefghijklmnopqrstuvwxyz";
var needNumbers = "0123456789";
//boolean variable for pwLength to account for situations otherwise 
// var pwLength = false;


//variable is establish but empty because it will be filled in by the user's input 
var userPW = "";
 
//first prompt to fulfll userPW variable
var pwLength = Number(prompt("Choose a length between 8 and 128"));

if (pwLength) {
  while (pwLength < 8 || pwLength > 128 || pwLength == "") { //passwordValid is false
    pwLength = prompt("Please choose a valid length: Choose a length between 8 and 128")
    }
    if (pwLength < 128 || pwLength > 8) {
      var Specialcharacters = confirm("Do you want special characters in your password?");
      var needUppercase = confirm("Do you want upper case letters in your password?");
      var needLowercase = confirm("Do you want lower case letters in your password?");
      var needNumbers = confirm("Do you want numbers in your password?");
      
    }
    console.log(pwLength);
    var newPassword = "";
      //for loop to repeatedly extract a random character or letter from the array the number of time that is specified from the userPW prompt
      for (var i = 0; i < pwLength; i++); {
        //create variable array of all possible pool of characters and letters to randomly generate on a loop from a single pool
     var collectionValidCharacters = ("!#$%&()*+-/:;<>=?@^_~abcdefghijklmnopqrstuvwxyz1234567890");
     
     newPassword += collectionValidCharacters[Math.floor(Math.random() * collectionValidCharacters.length)];
       console.log(newPassword);
       document.getElementById("password").addEventListener("click", writePassword);
     }
  
}

return newPassword;

}

 

    function writePassword() {
      document.getElementById("password").innerHTML = generatePassword();
    }




   