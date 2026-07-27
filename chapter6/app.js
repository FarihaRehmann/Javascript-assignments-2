// Chapter 6 - Math Expressions
// Q1
var a = 10;

document.write("<h2>Question 1</h2>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");


// Q2
var x = 2, y = 1;

var result = --x - --y + ++y + y--;

document.write("<h2>Question 2</h2>");

document.write("Initial value: x = 2, y = 1<br><br>");

document.write("--x = " + (--2 + 3) + "<br>"); // only for display

// Reset values
x = 2;
y = 1;

document.write("--x = " + (--x) + "<br>");
document.write("--x - --y = " + (x - --y) + "<br>");

x = 2;
y = 1;
document.write("--x - --y + ++y = " + (--x - --y + ++y) + "<br>");

x = 2;
y = 1;
result = --x - --y + ++y + y--;

document.write("Result = " + result + "<br>");
document.write("Final value of x = " + x + "<br>");
document.write("Final value of y = " + y + "<br><br>");

// Q3

var userName = prompt("Enter your name");

alert("Welcome " + userName + "!");

// Q4
// Q5
var number = prompt("Enter a number for multiplication table", 5);

document.write("<h2>Question 5</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + number * i + "<br>");
}