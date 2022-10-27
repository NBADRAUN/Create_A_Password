







function generatePassword() {
    ///these are the varibles to generate the pasword///////
    
    var LengthOutput = PWLengthPrompt(); 
    var LowerLettersOutput = LowerLettersPrompt();  
    var UpperLettersOutput = UpperLettersPrompt(); 
    var NumbersOutput = NumbersPrompt(); 
    var SpecialOutput = SpecialPrompt(); 
    var text = "hello"; 


    
    
    
    
    

       

    
    
    
    
    
    ///this will combine the results of the vars above///////
    var AllInString = PasswordCharacterOptions; 
    var combine = (text); 
    return AllInString; 
    
}
    ///This is the PW length prompt //////
function PWLengthPrompt(){
    var LengthInput = 0; 
    while ((LengthInput < 8) || (LengthInput > 128)) {
        LengthInput = parseInt(window.prompt("Choose a length between 8 and 128 characters"));
            if(isNaN(LengthInput)) {
                LengthInput=0; 
            }
}
}

    ///This is the lower letters prompt /////
function LowerLettersPrompt(){
    var LowerLettersSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var LowerLettersInput = window.prompt("Do you want lower case letters? Y or N"); 
        if (LowerLettersInput=="Y"||"y"){
            PasswordCharacterOptions=PasswordCharacterOptions.concat(LowerLettersSet); 
            console.log(PasswordCharacterOptions); 
        } else {      
        }
 }

    ///This is the upper letters prompt /////
    function UpperLettersPrompt(){
        var UpperLettersSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var UpperLettersInput = window.prompt("Do you want upper case letters? Y or N"); 
            if (UpperLettersInput=="Y"||"y"){
                PasswordCharacterOptions=PasswordCharacterOptions.concat(UpperLettersSet); 
                console.log(PasswordCharacterOptions); 
            } else {      
            }
     }

    ///This is the numbers prompt /////
    function NumbersPrompt(){
        var NumbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var NumbersInput = window.prompt("Do you want numbers? Y or N"); 
            if (NumbersInput=="Y"||"y"){
                PasswordCharacterOptions=PasswordCharacterOptions.concat(NumbersSet); 
                console.log(PasswordCharacterOptions); 
            } else {      
            }
     }

    ///This is the special charicter prompt /////
    function SpecialPrompt(){
        var SpecialSet = ["!","'","#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","~",];
        var SpecialInput = window.prompt("Do you want special charicters? Y or N"); 
            if (SpecialInput=="Y"||"y"){
                PasswordCharacterOptions=PasswordCharacterOptions.concat(SpecialSet); 
                console.log(PasswordCharacterOptions); 
            } else {      
            }
     }



    ////// This builds an empty array to populate based on charicters the user selected//////
    var PasswordCharacterOptions = []; 
  

































// // Assignment code here

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

