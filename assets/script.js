
///global variables ////
var selections = []; 
var LengthInput = 0;  /// Sets the inital password length to 0  
var PasswordCharacterOptions = [];  /// builds the selected charicter array with 0 elements
var RandomPasswordCharacterOptions = ShuffledAndTrimmedPassword();  ///// This passes the final character string to display //////




///This generates the password///////
function generatePassword() { 
    PasswordCharacterOptions = [] 
    var LengthOutput = PWLengthPrompt();   //function to determine lenght of password user wants //
    var LowerLettersOutput = LowerLettersPrompt();  //function to determine if user wants to include lowercase letters //
    var UpperLettersOutput = UpperLettersPrompt();  //function to determine if user wants to include uppercase letters //
    var NumbersOutput = NumbersPrompt();   //function to determine if user wants to include numbers //
    var SpecialOutput = SpecialPrompt();   //function to determine if user wants to include special characters // 
    var TotalSelections = PickOne();    //function to determine if user selected at least one character set //
    var AllInString = ShuffledAndTrimmedPassword();    //function to randomize and then trim the password to the users selected length //
    return AllInString;  //returns the selected password to display on the page //
}


/////// All the functions needed to populate the array are listed below /////// 

    ///This is the PW length prompt //////
function PWLengthPrompt(){
    while ((LengthInput < 8) || (LengthInput > 128)) {
        LengthInput = parseInt(window.prompt("Choose a length between 8 and 128 characters"));
            if(isNaN(LengthInput)) {
                LengthInput=0; 
        }
    }
}

    ///This is the lower letters prompt /////
function LowerLettersPrompt(){
    var LowerLettersSet = ["a","b","c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                          ,"a","b","c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
                          ,"a","b","c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                          ,"a","b","c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                          ,"a","b","c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var LowerLettersInput = window.prompt("Do you want lower case letters? Y or N"); 
        if (LowerLettersInput==="Y"||LowerLettersInput==="y"){
            PasswordCharacterOptions=PasswordCharacterOptions.concat(LowerLettersSet); 
            selections = selections.concat("LowerLetterSet"); 
        } else {      
    }
 }

    ///This is the upper letters prompt /////
function UpperLettersPrompt(){
    var UpperLettersSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
                          ,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
                          ,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
                          ,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
                          ,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var UpperLettersInput = window.prompt("Do you want upper case letters? Y or N"); 
        if (UpperLettersInput==="Y"||UpperLettersInput==="y"){
                PasswordCharacterOptions=PasswordCharacterOptions.concat(UpperLettersSet); 
                selections = selections.concat("UpperLetterSet"); 
        } else {     
    }
}

    ///This is the numbers prompt /////
function NumbersPrompt(){
    var NumbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                     ,"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                     ,"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                     ,"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                     ,"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                     ,"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                     ,"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var NumbersInput = window.prompt("Do you want numbers? Y or N"); 
        if (NumbersInput==="Y"||NumbersInput==="y"){
                PasswordCharacterOptions=PasswordCharacterOptions.concat(NumbersSet); 
                selections = selections.concat("NumberSet"); 
        } else {    
    }
}

    ///This is the special character prompt /////
function SpecialPrompt(){
    var SpecialSet = ["!","'","#","$","%","&","'",")","(","*","+","-",".","/",":",";","<","=",">","?","@","[","^","~","!","'","#","$","%","&","'",")","(","*","+","-",".","/",":",";","<","=",">","?","@","[","^","~"
                     ,"!","'","#","$","%","&","'",")","(","*","+","-",".","/",":",";","<","=",">","?","@","[","^","~","!","'","#","$","%","&","'",")","(","*","+","-",".","/",":",";","<","=",">","?","@","[","^","~"
                     ,"!","'","#","$","%","&","'",")","(","*","+","-",".","/",":",";","<","=",">","?","@","[","^","~","!","'","#","$","%","&","'",")","(","*","+","-",".","/",":",";","<","=",">","?","@","[","^","~"];
    var SpecialInput = window.prompt("Do you want special characters? Y or N"); 
        if (SpecialInput==="Y"||SpecialInput==="y"){
                PasswordCharacterOptions=PasswordCharacterOptions.concat(SpecialSet); 
                selections = selections.concat("SpecialSet"); 
        } else {     
    }
}
    
    ///This makes sure the user selected at least one character set.  if not, start over///
function PickOne(){
        if ((selections.length<1)){
            window.prompt("You must select at least one character set.  Please click ok or press enter to start over");
        LengthInput=0;
        PasswordCharacterOptions = []; 
            ShuffledAndTrimmedPassword();  
        } else{ 
    }
}

    //// This shuffles the characters in the PasswordCharacterOptions array, ///////
function ShuffledPasswordCharacterOptions(){
    var shuffled = PasswordCharacterOptions.sort(function(){return 0.5 - Math.random()});
        return shuffled; 
}

    /// This trims the PW to length then joins the array elements //////////
function ShuffledAndTrimmedPassword(){
    var ShuffledAndTrimmed = ShuffledPasswordCharacterOptions().slice(0,LengthInput);  
    var joined = ShuffledAndTrimmed.join(""); 
        LengthInput=0; 
        selections=[]; 
        return joined;       
}
   
   
    // Assignment code here This was the original code provided // 

    // // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
}
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword); 

