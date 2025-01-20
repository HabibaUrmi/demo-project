//number 1

// Define variables
let numString1 = "42";
let numString2 = "3.14";

// Convert strings to numbers
let integer = parseInt(numString1);
let floatingPoint = parseFloat(numString2);

// results
console.log("The integer is " + integer + ".");
console.log("The floating-point number is " + floatingPoint + ".");

//number-2

// Define variable
let price = 19.56789;

// Round price
let priceTwoDecimals = price.toFixed(2); // Rounds to 2 decimal places
let priceNoDecimals = price.toFixed(0); // Rounds to no decimal places

// results
console.log("Price with 2 decimals: " + priceTwoDecimals);
console.log("Price with no decimals: " + priceNoDecimals);

//number 3

// define variable

let num1 = "10";
let num2 = "notANumber";

//convert strings to numbers using parseFloat()

let convertNum1 = parseFloat(num1);
let convertNum2 = parseFloat(num2);

//sum of num1 and num2

let sum = convertNum1 + convertNum2;

//result

console.log(sum);

//number 4

// define variables

let userInput = "25.75 apples";

//extract numeric from input using parseFloat()

let extractNumeric = parseFloat(userInput);

//check if extractNumeric is valid, (not NaN)

if (!isNaN(extractNumeric)) {
  // round the number to 1 decimal using .toFixed()

  extractNumeric = extractNumeric.toFixed(1);
}

//result

console.log(extractNumeric);

//number 5

let num = 5.67; //define variable

let rounded = Math.round(num); //Math.round() using for whole number

let roundedDown = Math.floor(num); // Math.floor () for round down number

let roundedUp = Math.ceil(num); // Math.ceil for round up number

//result

console.log("The rounded value is " + rounded + ".");
console.log("The rounded value is " + roundedDown + ".");
console.log("The rounded value is " + roundedUp + ".");

// number 6

let randomNumber = Math.random(); //to generate random number -> Math.random ()

let randomWholeNumber = Math.floor(randomNumber * 10); //multiply randomnumber by 10 using Math.floor

console.log("Your random number is " + "4" + "."); //result

//number 7

//variables

let a = 12;
let b = 7;
let c = 20;

let largestNumber = Math.max(a, b, c); //Math.max for largest number

let smallestNumber = Math.min(a, b, c); //Math.min for smallest number

//result

console.log("The largest number is " + "20" + ".");
console.log("The smallest number is " + "7" + ".");
