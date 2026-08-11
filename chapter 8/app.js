// ==========================================
// Chapter 8 - If...Else & Else If Statement
// Testing Set of Conditions
// ==========================================


// ==========================
// Q1 - Check Number / Uppercase / Lowercase
// ==========================

var character = prompt("Enter a number or a character:");

var ascii = character.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("The given input is a number.");

} else if (ascii >= 65 && ascii <= 90) {
    alert("The given input is an uppercase letter.");

} else if (ascii >= 97 && ascii <= 122) {
    alert("The given input is a lowercase letter.");

} else {
    alert("The given input is a special character.");
}


// ==========================
// Q2 - Larger Number
// ==========================

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    alert(num1 + " is larger than " + num2);

} else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);

} else {
    alert("Both integers are equal.");
}


// ==========================
// Q3 - Positive, Negative or Zero
// ==========================

var number = +prompt("Enter a number:");

if (number > 0) {
    alert("The number is positive.");

} else if (number < 0) {
    alert("The number is negative.");

} else {
    alert("The number is zero.");
}


// ==========================
// Q4 - Vowel Checker
// ==========================

var letter = prompt("Enter a character:");

if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
) {
    alert("true");
} else {
    alert("false");
}


// ==========================
// Q5 - Password Validation
// ==========================

// Store the correct password

var correctPassword = "abc123";

// Ask user to enter password

var userPassword = prompt("Enter your password:");


// Check if password is empty

if (userPassword === "") {
    alert("Please enter your password");


// Check if both passwords are same

} else if (userPassword === correctPassword) {
    alert(
        "Correct! The password you entered matches the original password"
    );


// Incorrect password

} else {
    alert("Incorrect password");
}


// ==========================
// Q6 - Fix the If/Else Statement
// ==========================

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write("<h2>Question 6</h2>");
document.write(greeting + "<br><br>");


// ==========================
// Q7 - 24 Hour Time Format
// ==========================

var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
    alert("Good Morning");

} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");

} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");

} else if (time >= 2100 && time <= 2359) {
    alert("Good Night");

} else {
    alert("Invalid time");
}