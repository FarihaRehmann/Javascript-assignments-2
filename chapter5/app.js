// Chapter 5 - Math Expressions
// Q1
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;

document.write("<h2>Question 1</h2>");
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");
// Q2

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("<h2>Question 2</h2>");
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

// Q3
var number;

document.write("<h2>Question 3</h2>");
document.write("Value after variable declaration is: " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Q4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("<h2>Question 4</h2>");
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");

// Q5
var table = 4;

document.write("<h2>Question 5</h2>");
document.write("<h3>Table of " + table + "</h3>");

document.write(table + " x 1 = " + table * 1 + "<br>");
document.write(table + " x 2 = " + table * 2 + "<br>");
document.write(table + " x 3 = " + table * 3 + "<br>");
document.write(table + " x 4 = " + table * 4 + "<br>");
document.write(table + " x 5 = " + table * 5 + "<br>");
document.write(table + " x 6 = " + table * 6 + "<br>");
document.write(table + " x 7 = " + table * 7 + "<br>");
document.write(table + " x 8 = " + table * 8 + "<br>");
document.write(table + " x 9 = " + table * 9 + "<br>");
document.write(table + " x 10 = " + table * 10 + "<br>");