// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("password");



  // Ask user for their choice
  //I created a function that will ask the user questions 

    var questionalret = function() {
      var userChoice = window.prompt("How many characters would you like your password to contain ?")
      while(userChoice < 8 ){
        window.alert("must be at least 8 characters long");
        userChoice = window.prompt("How many characters would you like your password to contain ?")
      }
     while (userChoice > 123){
        window.alert("must be less than 123 characters long!");
        userChoice = window.prompt("How many characters would you like your password to contain ?")
      }

      var userchoice2 = window.confirm("Click OK to include special characters");
      var userchoice3 = window.confirm("Click OK to include numerical characters");
      var userchoice4 = window.confirm("Click OK to inlcude UpperCase letters");
      var userchoice5 = window.confirm("Click OK to inlcude LowerCase letters");
      
      
   
      writePassword(userChoice,userchoice2,userchoice3,userchoice4,userchoice5);
  
 //created 4 different funtions that    
 }
 function getRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

  
     
function generatePassword(userChoice,userchoice2,userchoice3,userchoice4,userchoice5){
      var generatedPassword = "";
        for (let i = 0; i < userChoice; i++) {
          if (userchoice3) {
            generatedPassword += getRandomNumber();
          }
          if (userchoice2) {
            generatedPassword += getRandomSymbol();
          }
          if (userchoice5){
          generatedPassword += getRandomLower();
          }
          if (userchoice4){
            generatedPassword += getRandomUppercase();
          }
       
      }
      var password = generatedPassword.slice(0,userChoice);
    
           
            
        console.log(password);
        return password;
        
    }
   
    
// Write password to the #password input
function writePassword(userChoice,userchoice2,userchoice3,userchoice4,userchoice5) {
  var password = generatePassword(userChoice,userchoice2,userchoice3,userchoice4,userchoice5);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //alert(password);

} 
//did not use this section of code
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)
