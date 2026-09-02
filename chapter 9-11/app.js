// Chapter 7 - User Input & Conditional Statements

// Q1 - City
var city = prompt("Enter your city name:");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// Q2 - Gender
var gender = prompt("Enter your gender:");

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Maam.");
}
// Q3 - Traffic Signal
var signalColor = prompt("Enter traffic signal color:");

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
}

// Q4 - Fuel Check
var fuel = +prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Q5 - Check Outputs
// Q5 (a)

var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


// Q5 (b)

var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}

// Q5 (c)

var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}


// Q5 (d)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


// Q5 (e)

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}


// Q5 (f)

if ("car" < "cat") {
    alert("car is smaller than cat");
}


// Q6 - Marks Sheet
// Take marks obtained in three subjects

var subject1 = +prompt("Enter marks obtained in Subject 1:");
var subject2 = +prompt("Enter marks obtained in Subject 2:");
var subject3 = +prompt("Enter marks obtained in Subject 3:");

// Take total marks

var totalMarks = +prompt("Enter total marks:");

// Calculate obtained marks

var marksObtained = subject1 + subject2 + subject3;

// Calculate percentage

var percentage = (marksObtained / totalMarks) * 100;

// Calculate grade and remarks

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";

} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";

} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";

} else {
    grade = "Fail";
    remarks = "Sorry";
}


// Display Marks Sheet

document.write("<h1>Marks Sheet</h1>");

document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage.toFixed(0) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks);


// Q7 - Guess Game
var secretNumber = 7;

var userGuess = +prompt("Guess the secret number between 1 and 10:");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

// Q8 - Divisible by 3
var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert("The number is divisible by 3");
}

// Q9 - Even or Odd
var num = +prompt("Enter a number to check Even or Odd:");

if (num % 2 === 0) {
    alert("The number is Even");
} else {
    alert("The number is Odd");
}


// ==========================
// Q10 - Temperature
var temperature = +prompt("Enter temperature:");

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}


// ==========================
// Q11 - Calculator
var firstNumber = +prompt("Enter first number:");
var secondNumber = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    alert("Result: " + result);

} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert("Result: " + result);

} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert("Result: " + result);

} else if (operation === "/") {
    result = firstNumber / secondNumber;
    alert("Result: " + result);

} else if (operation === "%") {
    result = firstNumber % secondNumber;
    alert("Result: " + result);

} else {
    alert("Invalid operation");
}