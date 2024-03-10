// // 1. Write a program to take “city” name as input from user. If
// // user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”

// // Prompt the user to enter the city name
// var cityName = prompt("Enter the name of the city:");

// // Check if the city name is "Karachi"
// if (cityName === "karachi") {
//     alert("Welcome to the city of lights");
// } else if(cityName === "Lahore"){
//     alert("Welcome Second Biggest City");
// }else{
//     alert("Not Avaible This Place");
// }

// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

// var userInput = prompt("Find a Gander");
// if(userInput === "male"){
//     alert("Good Morning Sir.");
// }else if(userInput === "female"){
//     alert("Good Morning Maam.")
// }else{
//     alert("This is Not avaible");
// }

// // 3. Write a program to take input color of road traffic signal
// // from the user & show the message according to this table:

// var userInput = prompt("Enter a Signal");
// if(userInput === "red"){
//    document.write(`<p>${userInput} = Stop!</p>`);
// }else if(signalColor === "yellow"){
//    document.write(`<p>${userInput} = Engine Start</p>`);
// }else if(signalColor === "green"){
//    document.write(`<p>${userInput} = Go...</p>`);
// }
// else{
//    document.write(`<p>${userInput} = Invalid</p>`);
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
// var inputcarfuel = prompt("Check car Feul");
// if(inputcarfuel <= 0.25 ){
//     alert("Please refill the fuel in your car");
// }else{
//     alert("You have enough fuel");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if(++a === 5){
//    alert("given condition for variable a is true");
// }
// var b = 82;
// if(b++ === 83){
//    alert("given condition for variable b is true");
// } 
// var c = 12;
// if(c++ === 13){
//    alert("condition 1 is true");
// }
// if(c === 13){
//    alert("condition 2 is true");
// }
// if(++c < 14){
//    alert("condition 3 is true");
// }
// if(c === 14){
//    alert("condition 4 is true");
//    }
//    var materialCost = 20000;
//    var laborCost = 2000;
//    var totalCost = materialCost + laborCost;
//    if (totalCost === laborCost + materialCost){
//       alert("The cost equals");
//       }
//        if (true){
//          alert("True");
//          }
//          if (false){
//          alert("False");
//          }
//          if("car" < "cat"){
//             alert("car is smaller than cat");
//          }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

//  var totalMark = prompt("Enter a Total Marks");
//  var obtainedMark = prompt("Enter a Obtained Marks");
//  var percentage = totalMark / obtainedMark * 100;
//  if(percentage >= 80){
//    document.write(`<h2>Mark Sheet</h2>`);
//    document.write(`<p>Total Marks : ${totalMark}</p>`);
//    document.write(`<p>Marks obtained : ${totalMark}</p>`);
//    document.write(`<p>Percentage : ${percentage}%</p>`);
//    document.write(`<p>Grade : A</p>`);
//    document.write(`<p>Remark : Good </p>`);

//  }
//  if(percentage >= 70){
//    document.write(`<h2>Mark Sheet</h2>`);
//    document.write(`<p>Total Marks : ${totalMark}</p>`);
//    document.write(`<p>Marks obtained : ${totalMark}</p>`);
//    document.write(`<p>Percentage : ${percentage}%</p>`);
//    document.write(`<p>Grade : A</p>`);
//    document.write(`<p>Remark : Need to Improve </p>`);

//  }





// // 8. Write a program to check whether the given number is
// // divisible by 3. Show the message to the user if the number
// // is divisible by 3.
//  var randomNum = prompt("Enter number");
//  if(randomNum % 3 === 0){
//     alert("Divisible by 3")
//  }else{
//     alert("Not Possible");
//  }

// // 9. Write a program that checks whether the given input is an
// // even number or an odd number.
// var userInput = prompt("Enter a Even Number");
// if(userInput % 2 === 0){
//    alert("This is a Even Number")
// }else if(userInput % 3 === 0){
//    alert("This is a odd Number")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var temperatureInput = prompt("Enter a Temperature");
// if(temperatureInput > 40){
//    alert("It is too hot outside.");
// }else if(temperatureInput > 30){
//    alert("The Weather today is Normal.");
// }else if(temperatureInput < 20){
//    alert("Today’s Weather is cool.");
// }else if(temperatureInput < 10){
//    alert("OMG! Today’s weather is so Cool.");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:

var user_value = prompt("Enter any Number");
var user_second_value = prompt("Enter 2 Number");
var users_operation_value = prompt("Enter Operation + - * / %");
if (users_operation_value === "+"){
   alert(user_value + user_second_value);
}else if (users_operation_value === "-"){
   alert(user_value - user_second_value);
}else if (users_operation_value === "*"){
   alert(user_value * user_second_value);
}else if (users_operation_value === "/"){
   alert(user_value / user_second_value);
}else if (users_operation_value === "%"){
   alert(user_value % user_second_value);
}