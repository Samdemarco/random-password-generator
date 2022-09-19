// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var symbolChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var isUppercase;
var isNumber;
var isSymbol;


//INSTEAD OF USING LOOPED CONDITIONAL STATEMENTS USE RECURSIVE FUNCTION FOR OBTAINING PASSWORD LENGTH
 function pwLength(){
  passwordLength = prompt("How many characters do you want in your password? (between 8-128 characters): ");

    if (passwordLength<8){
      window.alert("Password length needs to be between 8-128 characters");
      pwLength();
    }else if (passwordLength>128){
      window.alert("Password length needs to be between 8-128 characters");
      pwLength();
    }else if (isNaN(passwordLength)){
      window.alert("Password length needs to be a NUMBER between 8-128 characters");
      pwLength();
    }else{
      window.alert("The next few prompts will ask for password criteria.\n\nNOTE: If you choose NO for all options, your password will only contain lowercase letters.");
    }    
  
    return passwordLength;
 }

//INSTEAD OF USING LOOPED CONDITIONAL STATEMENTS USE RECURSIVE FUNCTION FOR DETERMINING THE USE OF UPPERCASE CHARACTERS 
function pwUppercase(){
  isUppercase = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  isUppercase = isUppercase.toLowerCase(); //HANDLE UPPERCASE ENTRIES ON 'YES' OR 'NO'


    if (isUppercase === null || isUppercase === ""){
      window.alert("Please answer Yes or No");
      pwUppercase();

    }else if (isUppercase === "yes"){
      isUppercase = true;
      return isUppercase;

    }else if (isUppercase === "no"){
      isUppercase = false;
      return isUppercase;
    
    }else {
      window.alert("Please answer Yes or No");
      pwUppercase();
    }
    return isUppercase;
}

//INSTEAD OF USING LOOPED CONDITIONAL STATEMENTS USE RECURSIVE FUNCTION FOR DETERMINING THE USE OF NUMERICAL CHARACTERS 
function pwNumbers(){
  isNumber = prompt("Do you want to include numbers in your password? \n(Yes or No)");
  isNumber= isNumber.toLowerCase(); //HANDLE UPPERCASE ENTRIES ON 'YES' OR 'NO'


    if (isNumber === null || isNumber === ""){
      window.alert("Please answer Yes or No");
      pwNumbers();

    }else if (isNumber === "yes"){
      isNumber = true;
      return isNumber;

    }else if (isNumber === "no"){
      isNumber = false;
      return isNumber;
    
    }else {
      window.alert("Please answer Yes or No");
      pwNumbers();
    }
    return isNumber;
}

//INSTEAD OF USING LOOPED CONDITIONAL STATEMENTS USE RECURSIVE FUNCTION FOR DETERMINING THE USE OF SYMBOL CHARACTERS 
function pwSymbol(){
  isSymbol = prompt("Do you want to include symbol characters in your password? \n(Yes or No)");
  isSymbol = isSymbol.toLowerCase(); //HANDLE UPPERCASE ENTRIES ON 'YES' OR 'NO'


    if (isSymbol === null || isSymbol === ""){
      window.alert("Please answer Yes or No");
      pwSymbol();

    }else if (isSymbol === "yes"){
      isSymbol = true;
      return isSymbol;

    }else if (isSymbol === "no"){
      isSymbol = false;
      return isSymbol;
    
    }else {
      window.alert("Please answer Yes or No");
      pwSymbol();
    }
    return isSymbol;
}

 //GENERATE PASSWORD FUNCTION BASED ON PREVIOUS INPUTS 
function generatePassword(){

//CALL PREVIOUSLY CREATED FUNCTIONS TO GET PASSWORD OPTIONS
pwLength();
pwUppercase();
pwNumbers();
pwSymbol();

var chars = lowercaseChar;
var password = "";
//CONDITIONALS WILL CHECK TO SEE WHAT CHARACTERS WE USE TO CONCATENATE FINAL PASSWORD STRING 
//DEFAULT TO LOWERCASE
if (isUppercase && isNumber && isSymbol){
  chars += uppercaseChar + numberChar + symbolChar;

}else if (isUppercase && isNumber){
  chars += uppercaseChar + numberChar;

}else if (isNumber && isSymbol){
  chars += numberChar + symbolChar;

}else if (isUppercase && isSymbol){
  chars += uppercaseChar + symbolChar;

}else if (isUppercase){
  chars += uppercaseChar;

}else if(isNumber){
  chars += numberChar;

}else if (isSymbol){
  chars += symbolChar;

}else{
  chars === lowercaseChar;
}
//USE RANDOM NUMBER GENERATOR TO SELECT RANDOM CHARACTERS IN FINAL STRING ARRAY
  for(var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
