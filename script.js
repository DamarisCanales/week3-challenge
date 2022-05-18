// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  
  'B',
  'C',

  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


// Assignment Code //
var generateBtn = document.querySelector("#generate");


// Password Criteris Selections //
function getPasswordCriteria() {
  var pwdLengthQuestion = parseInt(
    prompt(
      "How many characters would you like your password to obtain? (Please enter a value between 8 - 128)"
    )
  );
  if (pwdLengthQuestion < 8 || pwdLengthQuestion > 128) {
    alert("Please enter a vaild value between 8 - 128");
    return null;
  }

  // Lowercase Alert Pop-up //
  var lowLetters = confirm("Do you want to include lowercase letters?");
  if (lowLetters) {
    console.log(alert("This added level of security has been confirmed!"));
  } else {
    alert(
      "ALERT: The most secure passswords contain a combination of numbers, special characters, both lowercase and upcaser letters"
    );
  }

  // Uppercase Alert Pop-up //
  var upLetters = confirm("Do you want to include numbers?");
  if (upLetters) {
    console.log(alert("This added level of security has been confirmed!"));
  } else {
    alert(
      "ALERT: The most secure passswords contain a combination of numbers, special characters, both lowercase and upcaser letters"
    );
  }

  // Number Alert Pop-up //
  var numbers = confirm("Do you want to include capital letters");
  if (numbers) {
    console.log(alert("This added level of security has been confirmed!"));
  } else {
    alert(
      "ALERT: The most secure passswords contain a combination of numbers, special characters, both lowercase and upcaser letters"
    );
  }

  // Special Character Alert Pop-up //
  var specCharQuestion = confirm("Do you want to include special characters?");
  if (specCharQuestion) {
    console.log(alert("This added level of security has been confirmed!"));
  } else {
    alert(
      "ALERT: The most secure passswords contain a combination of numbers, special characters, both lowercase and upcaser letters"
    );
  }

  // Criteria Selection Storage //
  var pwdCriteriaObj = {
    length: pwdLengthQuestion,
    upperCase: upLetters,
    lowercase: lowLetters,
    num: numbers,
    specChar: specCharQuestion,
  };
  return pwdCriteriaObj;
}


// Random Generator Function //
function getRandomIndex(arr) {
var singleRandomIndex = Math.floor(Math.random()*arr.length)
var randomEl = arr[singleRandomIndex]
return randomEl
}

// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Based on User Otions this Yeilds a New Password //
function generatePassword() {
  var userOptions = getPasswordCriteria();
  console.log(userOptions);  

var result = []

var possibleChar = []

var garuantee = []

if(userOptions.lowercase) {
  possibleChar = possibleChar.concat(lowerCasedCharacters)
  garuantee.push(getRandomIndex(lowerCasedCharacters))
}

if(userOptions.specChar) {
  possibleChar = possibleChar.concat(specialCharacters)
  garuantee.push(getRandomIndex(specialCharacters))
}

if(userOptions.num) {
  possibleChar = possibleChar.concat(numericCharacters)
  garuantee.push(getRandomIndex(numericCharacters))
}

if(userOptions.upperCase) {
  possibleChar = possibleChar.concat(upperCasedCharacters)
  garuantee.push(getRandomIndex(upperCasedCharacters))
}


for(var i = 0; i < userOptions.length; i++){
  var randoChar=getRandomIndex(possibleChar)
  result.push(randoChar)
  console.log(randoChar, i)
}

for (var i = 0; i < garuantee.length; i++){
  result[i]= garuantee[i]
}


return result.join("")
}


