// Frank Diaz, DIG 2101C, Professor William Hackney

// Implement a "use strict"
"use strict";

// Set up arrays for earned and possible points
// Leave the earnedPoints array empty
/* This is empty so it allows the user to input their own sets of data into the arrays. */
var earnedPoints = [];
var possiblePoints = [];
var i;

// Set up an array to display the assignment names onto the DOM
var assignmentNames = ["Discussion 1: ", "Discussion 2: ", "Homework 1: ", "Discussion 3: ", "Homework 2: ", "Discussion 4: ", "Homework 3: ", "Test 1: ", "Discussion 5: ", "Homework 4: ", "Discussion 6: ", "Discusion 7: ", "Test 2", "Discussion 8", "Discussion 9", "Discussion 10", "Discussion 11"];

// Set up variables to display the grade arrays onto the DOM
var assignmentText = "";
// var earnedText = "";
// var possibleText = "";

// Set up a for loop to display the assignment names as a list on the DOM
for (i = 0; i < assignmentNames.length; i++) {
    assignmentText += assignmentNames[i] + "<br>";
}
document.getElementById("assignments").innerHTML = assignmentText;

// Set up a function to do the math
function gradeMath() {

var earnedInput = document.getElementById("earned").value;
    earnedPoints.push(earnedInput);
    
var possibleInput = document.getElementById("possible").value;
    possiblePoints.push(possibleInput);

// Set up variables used to add the grades seperately
var eSum = 0;
var pSum = 0;

// Set up for loops to get the seperate sums of the earned and possible points arrays
for (var i = 0; i < earnedPoints.length; i++) {
    eSum += earnedPoints[i];
}

for (var i = 0; i < possiblePoints.length; i++) {
    pSum += possiblePoints[i];
}

// Display the sum results onto the DOM
document.getElementById("etext").innerHTML = "Total Earned Points: " + eSum;
document.getElementById("ptext").innerHTML = "Total Possible Points: " + pSum;

// Divide the sum variables and multiply them by 100 to get the total class grade
var gradeDivide = eSum / pSum * 100;

// Print the class grade total onto the DOM
document.getElementById("gradeTotal").innerHTML = gradeDivide.toFixed(2) + "%";  
}

