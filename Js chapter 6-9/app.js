// // // 1. Write a program to take a number in a variable, do the
// // // required arithmetic to display the following result in your
// // // browser:


var a = 3;
var result = ++a + 10;
document.write(`<h1>The value of ++a is : ${a}</h1>`);
document.write(`<h1>Now the value of a is : ${result}</h1>`);
var a = 3;
var result = a++ + 10;
document.write(`<h1>The value of ++a is : ${a}</h1>`);
document.write(`<h1>Now the value of a is : ${result}</h1>`);
var a = 3;
var result = --a + 10;
document.write(`<h1>The value of ++a is : ${a}</h1>`);
document.write(`<h1>Now the value of a is : ${result}</h1>`);
var a = 3;
var result = a-- + 10;
document.write(`<h1>The value of ++a is : ${a}</h1>`);
document.write(`<h1>Now the value of a is : ${result}</h1>`);



// // // 2. What will be the output in variables a, b & result after
// // // execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(a);
document.write(b);
document.write(result);


// // // 3. Write a program that takes input a name from user &
// // // greet the user.

var userinput = prompt("Enter Your Name");
document.write("Hello " + userinput + "!");


// // // 4. Write a program to take input a number from user &
// // // display it’s multiplication table on your browser. If user
// // // does not enter a new number, multiplication table of 5
// // // should be displayed by default.

var usertable = prompt("Enter Your table number");

document.write(`<h1>5 x 1 =${usertable*1}</h1>`);
document.write(`<h1>5 x 2 =${usertable*2}</h1>`);
document.write(`<h1>5 x 3 =${usertable*3}</h1>`);
document.write(`<h1>5 x 4 =${usertable*4}</h1>`);
document.write(`<h1>5 x 5 =${usertable*5}</h1>`);
document.write(`<h1>5 x 6 =${usertable*6}</h1>`);
document.write(`<h1>5 x 7 =${usertable*7}</h1>`);
document.write(`<h1>5 x 8 =${usertable*8}</h1>`);
document.write(`<h1>5 x 9 =${usertable*9}</h1>`);
document.write(`<h1>5 x 10 =${usertable*10}</h1>`);

// 
// Prompt the user to enter the names of three subjects
// Prompt the user to enter the names of three subjects
var subject1 = prompt("Enter the name of first subject:");
var subject2 = prompt("Enter the name of second subject:");
var subject3 = prompt("Enter the name of third subject:");

// Total marks for each subject is 100
var totalMarks = 100;

// Prompt the user to enter the obtained marks for the first subject
var obtainedMarksSubject1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));

// Prompt the user to enter the obtained marks for the second subject
var obtainedMarksSubject2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));

// Prompt the user to enter the obtained marks for the third subject
var obtainedMarksSubject3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

// Calculate total marks obtained
var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;

// Calculate percentage
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
document.write("</table>");

// Display total marks obtained and percentage
document.write("<p>Total Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
