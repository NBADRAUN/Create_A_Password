# Create_A_Password

## Description

This is a Random Password Generator Application.  It provides a method to provide a user to generate their own random password to use when registering on other websites to ensure the highest level of password security and to avoid being hacked by using the same password on multiple websites or a password that is more familiar and can be guessed.  

## Installation

There is no instalation required.  This application runs on a webpage and can be accessed by going to https://nbadraun.github.io/Create_A_Password/.  

When using this application, no user data is saved once you have closed the application.  


## Usage

1.  go to https://nbadraun.github.io/Create_A_Password/
2.  Click the red button "Generate Password".  
3.  Follow the alert prompts at the top of your screen to select a password based on your preferences.  
4.  Once the password is generated, it will be shown in the box above the Generate Password button. 
5.  Highlight the password, then copy to use on other applications or to store elsewhere for later use.  


## License
MIT License / Copyright (c) 2022 NBADRAUN <br>
Details can be found by going to https://github.com/NBADRAUN/Create_A_Password/blob/main/LICENSE

## User Story: 
AS AN employee with access to sensitive data <br>
I WANT to randomly generate a password that meets certain criteria <br>
SO THAT I can create a strong password that provides greater security 

## Acceptance Criteria: 
GIVEN I need a new, secure password <br>
WHEN I click the button to generate a password <br>
THEN I am presented with a series of prompts for password criteria <br>
WHEN prompted for password criteria <br>
THEN I select which criteria to include in the password <br>
WHEN prompted for the length of the password <br>
THEN I choose a length of at least 8 characters and no more than 128 characters <br>
WHEN asked for character types to include in the password <br>
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters <br>
WHEN I answer each prompt <br>
THEN my input should be validated and at least one character type should be selected <br>
WHEN all prompts are answered <br>
THEN a password is generated that matches the selected criteria <br>
WHEN the password is generated <br>
THEN the password is either displayed in an alert or written to the page 

## Screenshots of Application
<table>
    <tr>
        <td valign="top">Starting Page: <br><img src="assets\Images\Create_A_Password.png" width="300px" height="400px" alt="Picture of the page before anything has been entered."> </td>
        <td valign="top">Character Length Prompt:<br><img src="assets\Images\Length_Prompt.png" width="300px" height="400px" alt="Picture of the page for the user to enter the desired password length."> </td>
        <td valign="top">Lower case Character Prompt:<br><img src="assets\Images\LowerCase_Prompt.png" width="300px" height="400px" alt="Picture of the page for the user to enter the if they want to include lowercase letters."> 
    </tr>
<table>
        <td valign="top">Number Prompt:<br><img src="assets\Images\Numbers_Prompt.png" width="300px" height="400px" alt="Picture of the page for the user to enter the if they want to include numbers."> </td>
        <td valign="top">Special Character Prompt:<br><img src="assets\Images\Special_Prompt.png" width="300px" height="400px" alt="Picture of the page for the user to enter the if they want to include special characters."> </td>
        <td valign="top">No Characters Selected Prompt:<br><img src="assets\Images\No_Characters_Selected_Error.png" width="300px" height="400px" alt="Picture of the page the user will get if they did not select any character options."> </td>
</tr>
<table> 
        <td valign="top">Final Output:<br><img src="assets\Images\Final_Output.png" width="300px" height="400px" alt="Picture of the page for the user will see after they have answered all the prompts and the password has be returned into the text box."> </td>


