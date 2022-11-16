// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 function generatePassword() {

  var lowercaseList = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "r", "u", "q", "y", "z"]
  var uppercaseList = ["A", "B",  "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R","U", "Q", "Y","X","Z"]
  var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  var symbolesList = ["@", "#","&", "%","$"]
  
  var caracters = window.prompt("how many caracter would you like the password to have (8-128)")
  var lowercase = window.confirm("do you want lowercase in your password")
  var uppercase = window.confirm("do you want your password in uppercase?") 
  var symboles =  window.confirm("do you want your password to have symboles?")
  var numbers  =  window.confirm("do you want number in it?")
  
  if(caracters < 8 || caracters > 128){
    window.alert("password need to be between 8-128")
  
  }
  var choices = []
  if(lowercases){
    choices = choices.push(lowercaselist)
  }
  if(uppercase){
    choices = choices.push(uppercaseList)
  }
  if(symboles){
    choices = choices.push(symbolesList)
  
  if(number){
    choices = choices.push(numberList)
  }
  var radomPpassword
  for (var i=o ; i < caracters; i++) {
    radomPpassword+= choices[Math.floor(Math.random()*choices.length)]
    
  } 
   
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword()
generatePassword()
